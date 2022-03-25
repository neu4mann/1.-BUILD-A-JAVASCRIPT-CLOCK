//express
const express = require("express");
const path = require("path");

//server
const app = express();
const PORT = 4000;

app.listen(PORT, function () {
  console.log("Listening on port", PORT);
});

//Link to index
const {
    partyEvent,
    showCurrentTime,
  
  } = require("./clock");






  (function(exports){

    // Your code goes here

   exports.test = function(){
        return 'hello world'
    };

})(typeof exports === 'undefined'? this['mymodule']={}: exports);


