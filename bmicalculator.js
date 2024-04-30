//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/ bmiCalculator.html");
});

app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var bmi = num1 / (num1 * num2) ;
  res.send("The BMI is " + bmi );
});


app.listen(3000 , function(){
  console.log(`Example app listening on port 3000`);
});
