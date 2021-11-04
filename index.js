const express = require("express"); // takes care of importing the express package
const bodyParser = require("body-parser");
const router = express.Router();
const PORT = 1234; // node index.js (file) to start server
const app = express(); //calls express fuinction which returns the express application

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())



router.post('/handle',(request,response) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  console.log(request.body);
  });

  // add router in the Express app.
app.use("/", router);

app.get("/hello", (req, res) => { //First we have app.get("/hello", ...) -> tells the server that we want to be able to handle a GET request to the /hello endpoint.
  res.send("Hello world");        // req stores info for incoming requests from the client
});                               // res stores the server's response functions

app.get("/login", (req, res) => { //First we have app.get("/hello", ...) -> tells the server that we want to be able to handle a GET request to the /hello endpoint.
  res.send(index.html);        // req stores info for incoming requests from the client
});

app.listen(PORT, () => { //tells your application to listen for any requests that come in on port 1234
 console.log(`Server is listening on port: ${PORT}`);// port is a specific address 
});

router.get('/',function(req,res){ //uses express server to handle routes of the app
  res.sendfile("index.html");     //when users request the app from a web browser, we will serve the HTML file
});

router.post('/login', function(req,res){ //simple login function
var user_name = req.body.user;
var password = req.body.password;
console.log("User name = " +user_name+", pasword is "+password );
res.end("yes");
});



