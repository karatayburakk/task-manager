const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'karatayburakk@gmail.com',
        subject: 'Welcome Message for App',
        text: `Welcome to app ${name}`
    })
}

const sendDeletionEmail = (email, name) => {

        sgMail.send({
        to: email,
        from: 'karatayburakk@gmail.com',
        subject: 'Goodby My Love',
        text: `Goodbye from app ${name}`

        })
}

module.exports = {
    sendWelcomeEmail,
    sendDeletionEmail
}