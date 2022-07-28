const express = require("express")
const parser = require("body-parser")
const app = express()
app.use(parser.urlencoded({extended:true}))
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')

// ref: https://www.youtube.com/watch?v=G7iLLFKZVWA
app.post('/' , (req,res)=>{
    const email = req.body.email
    const message = {
        from: 'monicatasmin06@gmail.com',
        to : email,
        subject: 'Welcome Email:',
        html:'<h1>Welcome to DEV@Deakin</h1><br><h3>Our daily insider</h3>'
    }
    // msg to the terminal if the mail has been sent/failed
        sgMail.send(message, function(error, i){
        if(error){
            console.log("Email not sent");
        }else{
            console.log("Email has been sent");
        }
    });
})


app.listen(8080, function (request, response){
    console.log("Server is running on port 8080")
})
