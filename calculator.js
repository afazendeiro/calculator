const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.post('/', function (req, res) {
  console.log('Got body:', req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1+num2;
  res.send(num1 + " + " + num2 + " = " + result);
})

app.get('/bmicalculator/', function (req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html')
})
app.post('/bmicalculator/', function (req,res) {
  var weight = Number(req.body.weight)
  var height = Number(req.body.height)

  bmi = weight / Math.pow((height/100),2)
  // Round to 2 decimal places
  bmi = Math.round(bmi * 100) / 100

  res.send("Your current BMI is " + bmi  )
})

app.listen(3000)
