const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

let otpMailOptions={
    from:{
        name:'Sign Up OTP',
        address:process.env.GMAIL_USER
    },
    to:'',
    subject:'OTP For SignUp',
    text:''
}

module.exports = {
    otpMailOptions,
    mailTransport
};