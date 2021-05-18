const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 587,
    auth: {
      user: "test.developer021@gmail.com",
      pass: "testPurpose",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  router.post("/send", (req, res) => {
      
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    console.log(email)
    const mail = {
      from: name,
      to: "test.developer021@gmail.com",
      subject: "Contact Form Message",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "failed" });
      } else {
        res.json({ status: "sent" });
        contactEmail.sendMail({
            from: "test.developer021@gmail.com",
            to: email,
            subject: "Submission was successful",
            text: `Thank you for contacting us!\n\nForm details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        }, function(error, info){
            if(error) {
                console.log(error);
            } else{
                console.log('Message sent: ' + info.response);
            }
        });
      }
    });
    
  });

  