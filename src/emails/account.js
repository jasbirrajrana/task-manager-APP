const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
sgMail.send({
    to:email,
    from:'jasbirrajrana6699@gmail.com',
    subject:'Welcome to the App',
    text : `Welcome to the app,${name}.Let me know how you get along with app.`
})
}
const onCancel = (email,name)=>{
    sgMail.send({
        to:email,
        from:'jasbirrajrana6699@gmail.com',
        subject:'Why you are canceling the plan',
        text:`${name} Are you sure to canceling your plan on our webapp `
    })
}
module.exports = {
    sendWelcomeEmail:sendWelcomeEmail,
    onCancel:onCancel

}