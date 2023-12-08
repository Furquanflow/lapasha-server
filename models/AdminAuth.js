const mongoose = require('mongoose')

const adminData = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		quote: { type: String },
	},	
	{ collection: 'AdminData' }
)

const adminModel = mongoose.model('AdminData', adminData)

module.exports = adminModel