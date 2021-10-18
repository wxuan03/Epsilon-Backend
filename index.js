const express = require("express"); // takes care of importing the express package

const app = express(); //calls express fuinction which returns the express application

app.listen(1234, () =>{                               //tells your application to listen for any requests that come in on port 1234
    console.log("Server is listening on port: 1234"); // port is a specific address 
});