const fs = require('fs').promises;
const util = require('util');

const config = {
    functions: {
        "routes/*.js": {
            maxDuration: 30
        }
    }
};

async function maxDurationMiddleware(req, res, next) {
    try {
        const filePath = `./${req.route.path}.js`;
        const maxDuration = config.functions[filePath]?.maxDuration || 10;

        const functionContent = await fs.readFile(filePath, 'utf-8');
        const apiFunction = eval(`(${functionContent})`);

        await Promise.race([
            apiFunction(req, res),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Function execution timed out')), maxDuration * 1000)
            ),
        ]);

        next();
    } catch (error) {
        console.error(`Error executing function: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = maxDurationMiddleware;
