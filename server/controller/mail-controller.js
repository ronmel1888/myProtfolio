const express = require("express");
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact');
})



router.post('/send', async (req, res) => {
    console.log("its starting");
    let messege = `
    <h1>You have a new messege!</h1><br/>
    <h3>${req.body.messege} </h3>
    <br/><br/>              
    <h2>contact deatails</h2>
    <ul>
        <li>Name : ${req.body.name}</li>
        <li>Email : ${req.body.email}</li>
        <li>Phone Number : ${req.body.phoneNumber}</li>
    </ul>
       
    `
    //MailSender123


    let transporter = nodemailer.createTransport({
        host: "smtp.aol.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: '', // generated ethereal user
            pass: '', // generated ethereal password' qelxfohmocsyfsyj' 
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: `" ${req.body.name}👻" <ronmel1888@aol.com>`, // sender address
        to: "test@test.com, // list of receivers
        subject: `"${req.body.name} sent messege from your website ✔"`, // Subject line
        text: "Hello world?", // plain text body
        html: messege, // html body
    });

    console.log("Message sent: %s", info.html);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    // main().catch(console.error);
    // console.log(messege);
    res.json("messege sent!");
})



module.exports = router;
