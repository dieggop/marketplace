const nodemailer = require('nodemailer')
const mailconfig = require('../../config/mail')

const transport = nodemailer.createTransport(mailconfig)

module.exports = transport
