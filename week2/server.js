const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not wait to strike till the iron is hot; but make it hot by striking."
];

app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});




app.get('/square', (req, res) => {
// Extract the 'num' query parameter from the request and convert it to a floating point number.
const num = parseFloat(req.query.num);
// Check if 'num' is not a valid number. If it's not, send an error message as the response.
if (isNaN(num)) {
return res.send("Error: Please provide a valid number using query parameter 'num'.");
}
// Calculate the square of the number.
const square = num * num;
// Send a plain text response showing the result.
res.send(`The square of ${num} is: ${square}`);
});
// Start the server and have it listen on the specified port.
// Once the server is running, log a message to the console indicating where it's accessible.




app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.send("Error: Please provide valid numbers using query parameters 'a' and 'b'.");
  }

  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is: ${sum}`);
});


app.get('/div', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.send("Error: Please provide valid numbers using query parameters 'a' and 'b'.");
  }

  const div = a / b;
  res.send(`The division of ${a} and ${b} is: ${div}`);
});


app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});