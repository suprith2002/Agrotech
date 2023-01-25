const nodemailer = require("nodemailer");
const express = require('express')

const router = express.Router();

router.post('/', async (req,res) => {

 const { U1, emailU , mobileU} = req.body
 let Address = "http://localhost:3000/login"


const msg = {
    

    from: "AGROTECHSupportTeam",
    to: U1,
    subject: "Order Received",
    text: `Hello Sir You Have Received Order from ${emailU} and his/her mobile Number is ${mobileU} Please Open Our Website For More Details Here is the link ${Address}`

};
nodemailer.createTransport(
    {
        service:'gmail',
        auth: {
            user:"korishettarsuprith4@gmail.com",
            pass:"yikvyyffponeriep"
        },
        port:465,
        host:'smtp.gmail.com'
    }
)
.sendMail(msg , (err) => {
    if(err){
        return console.log("Error",err);
        

    }
    else{
        res.send("ok")
        return console.log("Email Sent");

    }
})
})

module.exports = router;