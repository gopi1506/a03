const path = require("path")
const express = require("express")
const logger = require("morgan")
<<<<<<< HEAD
const bodyParser = require("body-parser")
let fs = require('fs')
const app = express()  // make express app
const port = process.env.PORT||8081

// ADD THESE COMMENTS AND IMPLEMENTATION HERE
// 1 set up the view engine
// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view
// 2 include public assets and use bodyParser
=======
const bodyParser = require("body-parser") // simplifies access to request body
const fs = require('fs')  // NEW - this is required
const app = express()  // make express app
const http = require('http').Server(app)  // inject app into the server

// ADD THESE COMMENTS AND IMPLEMENTATION HERE 
// 1 set up the view engine
// 2 manage our entries
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request (not required to fully work)
// 6 respond with 404 if a bad URI is requested

// Listen for an application request on port 8081
http.listen(8081, function () {
  console.log('app listening on http://127.0.0.1:8081/')
})

// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view

// 2 include public assets and use bodyParser
// Node uses __dirname for the The directory name of the current module.
>>>>>>> 7132178ead710ef4ee72b7ebc25c559ea5eb206a
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

<<<<<<< HEAD
// 3 set up the logger
=======
// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
// see https://github.com/expressjs/morgan for more
>>>>>>> 7132178ead710ef4ee72b7ebc25c559ea5eb206a
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

<<<<<<< HEAD

// 4 handle valid GET requests
app.get("/", function (req, res) {
 //res.sendFile(path.join(__dirname + '/assets/index.html'))
 res.render("index.ejs")
})
app.get("/index", function (req, res) {
  res.render("index.ejs")
 })
 
// 4 http GET /tic-tac-toe
app.get("/calculator", function (req, res) {
 res.render("calculator.ejs")
})

// 4 http GET /about
app.get("/contactus", function (req, res) {
 res.render("contactus.ejs")
})

 



// 5 handle valid POST request
app.post("/contactus", function (req, res) {
  var api_key = '98d2ef713fef8ea8c2dd504f49258889-4836d8f5-18b0628f';
  var domain = 'sandbox3b259b448e00416f873b277b961bf0dc.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
   
  var data = {
    from: 'cal App user<postmaster@sandbox1efc7e9a2bb247e89ea29eaaa62ff931.mailgun.org>',
    to: 'gopi3ka@gmail.com',
    subject: req.body.firstname + " Sent you a message",
    text: req.body.subject
  };
   
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if(!error){
      res.send("Mail sent");
    }
    else{
      res.send("Not send");
    }
  });


 })


// 6 respond with 404 if a bad URI is requested
app.get(function (req, res) {
 res.render("404")
})

// Listen for an application request on designated port
app.listen(port, function () {
 console.log('Web app started and listening on http://localhost:' + port)
})
=======
// 4 http GET default page at /
app.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render("index.ejs")
 })
 
 // 4 http GET /tic-tac-toe
 app.get("/tic-tac-toe", function (req, res) {
  res.render("tic-tac-toe.ejs")
 })
 
 // 4 http GET /about
 app.get("/about", function (req, res) {
  res.render("about.ejs")
 })
 
 // 4 http GET /contact
 app.get("/contact", function (req, res) {
  res.render("contact.ejs")
 })
 // 5 http POST /contact
app.post("/contact", function (req, res) {
  const name = req.body.inputname;
  const email = req.body.inputemail;
  const company = req.body.inputcompany;
  const comment = req.body.inputcomment;
  const isError = true;
 
  // setup e-mail data with unicode symbols
  const mailOptions = {
    from: '"Denise Case" <denisecase@gmail.com>', // sender address
    to: 'dcase@nwmissouri.edu, denisecase@gmail.com', // list of receivers
    subject: 'Message from Website Contact page', // Subject line
    text: comment,
    err: isError
  }
 
  // logs to the terminal window (not the browser)
  console.log('\nCONTACT FORM DATA: ' + name + ' ' + email + ' ' + comment + '\n');
  //})
  // 6 this will execute for all unknown URIs not specifically handled
app.get(function (req, res) {
  res.render("404")
 })
 
 // Listen for an application request on designated port
 app.listen(port, function () {
  console.log('Web app started and listening on http://localhost:' + port)
 })
})
>>>>>>> 7132178ead710ef4ee72b7ebc25c559ea5eb206a
