//jshint esversion:6
const express = require('express');
const bodyParser = require ('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send(`The result of the calculation is ${result}`);
});

app.post("/bmiCalculator", (req, res) => {
  let weight = parseFloat(req.body.weight);
  let heightF = parseFloat(req.body.heightF);
  let heightI = parseFloat(req.body.heightI);
  let finalHeight = heightI + heightF * 12;
  let bmi = (weight/(finalHeight*finalHeight))*703;
  res.send(`Your BMI is ${bmi.toFixed(1)}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
