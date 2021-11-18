const express = require('express');

const app = express();

// app.com
app.get('', (req, res) => {
  res.send('<h1>Weather</h1>');
});

// app.com/help
app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Andrew',
      age: 27,
    },
    {
      name: 'Leo',
      age: 37,
    },
  ]);
});

// app.com/about
app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1><p>This section is under construction...</p>');
});

// app.com/weather
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port: 3000.');
});
