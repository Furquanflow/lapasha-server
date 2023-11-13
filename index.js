const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./router/Router");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const retry = require('retry');
const puppeteer = require('puppeteer');
const punycode = require('punycode');
let baseUrl = "https://lapashaform.vercel.app";

require("dotenv").config();
const app = express();
app.use(cors());
const PORT = process.env.port;
app.use(express.json());
app.use(routes);

const transporter = nodemailer.createTransport({
  host: 'flowtechnologies.io',
  port: 465,
  secure: true,
  auth: {
    user: 'furqan.rahim@flowtechnologies.io',
    pass: 'Furqan@123@@@',
  },
});



app.post(`/generate-and-send-pdf`, async (req, res) => {
  const formData = req.body.data;

  console.log("Working");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(`${baseUrl}/eligibilityverificationview`);
  await page.waitForTimeout(8000);
  const pdfBuffer = await page.pdf({ format: 'A4' });

  const pdfPath = path.join(__dirname, 'generated.pdf');
  fs.writeFileSync(pdfPath, pdfBuffer);

  await browser.close()

  const emailAddresses = ['thefurquanrahim@gmail.com', 'furquan.rahim124@gmail.com', 'thefurqanrahim@gmail.com'];
  const attachments = [{ path: pdfPath }];

  emailAddresses.forEach((email) => {
    const mailOptions = {
      from: 'furqan.rahim@flowtechnologies.io',
      to: email,
      subject: 'PDF Attachment',
      text: 'Attached is the PDF you requested.',
      attachments,
    };

    const operation = retry.operation({
      retries: 3,
      factor: 2,
      minTimeout: 1000,
      maxTimeout: 30000,
    });

    operation.attempt((currentAttempt) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (operation.retry(error)) {
          console.error('Email not sent, retrying...', currentAttempt);
          return;
        }

        if (error) {
          console.error('Email not sent:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    });
  });


  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');


  res.json({ pdfPath: '/download-pdf' });
});

app.get('/download-pdf', (req, res) => {
  const pdfPath = path.join(__dirname, 'generated.pdf');
  res.download(pdfPath, 'generated.pdf');
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Port Running at ${PORT}`));