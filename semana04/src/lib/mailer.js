const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2efb60d6239401",
    pass: "5d659b935077ff"
  }
});
  