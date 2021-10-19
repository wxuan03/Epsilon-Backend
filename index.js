// const express = require("express"); 

// const app = express(); 
// app.get("/hello", (req, res) => {
//     res.send("hello world")
// })

// app.listen(1234, () =>{                               
//     console.log("Server is listening on port: 1234"); 
// });

const express = require("express"); // takes care of importing the express package

const PORT = 1234;
const app = express(); //calls express fuinction which returns the express application


app.get("/hello", (req, res) => { //First we have app.get("/hello", ...) -> tells the server that we want to be able to handle a GET request to the /hello endpoint.
  res.send("Hello world");        // req stores info for incoming requests from the client
});                               // res stores the server's response functions

app.listen(PORT, () => { //tells your application to listen for any requests that come in on port 1234
 console.log(`Server is listening on port: ${PORT}`);// port is a specific address 
});