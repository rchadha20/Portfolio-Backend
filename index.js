const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;


app.use(bodyParser.json());
app.use(cors());
app.post('/contact',(req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    let transporter = nodemailer.createTransport({
        service: "gmail",
      //   user: "smtp.gmail.com",
        // port: 465,
        auth: {
          type: "login",
          user: 'rchadha20@gmail.com',
          pass: 'hbaguunwooeweepc',
        },
      });

let mailOptions = {
from: 'rchadha20@gmail.com',
to: 'rchadha20@gmail.com',
Subject: "Something",
text: `
     Name: ${name},
     Email: ${email},
     Message: ${message}

`

};


transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});
})

app.listen(port, () => {
  console.log(`email is running at http://localhost:${port}`);
});
