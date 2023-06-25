const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3001; // this will make sure our server willl run on port 3001 and if it is defined then it will run on environment variables other wise on port 3001

const app = express(); // createing exoress server
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(cors());//to avoid cors error
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api", (req , res ) => {
    res.json({message:"hello from server!"})
}) ;  // we define a path first named as api  , here we use get api to get the info and latter we will use post to send the data

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user : process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS
    }
})

contactEmail.verify((error) =>{
    if(error){
        console.log(error);
    }
    else{
        console.log("ready to send")
    }
})

app.post("/api/contact",bodyParser.urlencoded ({ extended: false}) ,(req, res) =>{
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    

    const mail = {
        from : name,
        to : process.env.EMAIL_ADDRESS,
        subject : "contact form submission - portfolio",
        html : `<p> Name: ${name} </p>
        <p> Email: ${email} </p>
        <p> Phone: ${phone} </p>
        <p> Message: ${message} </p>
        `
    }
    contactEmail.sendMail(mail,(error) => {
        if(error){
            res.json(error);
        }
        else{
            res.json({code:200 , status:"Message sent"})
        }
    })

})
app.get('*' ,( req , res ) => {
    res.sendFile(path.resolve(__dirname,'../build', 'index.html'))
})
app.listen(PORT ,() => {
    console.log(`server is online on port ' ${PORT}`)
});