let express = require('express');
let app = express();
const path = require('path');


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


console.log("Hello World");
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/json', (req, res) => {

  if (process.env.MESSAGE_STYLE && process.env.MESSAGE_STYLE.toLowerCase() === 'uppercase') {
    responseMessage.message = responseMessage.message.toUpperCase();
  }

  res.json(responseMessage);

  const messageStyle = process.env.MESSAGE_STYLE || 'uppercase';

 
  let message;
  if (messageStyle === 'uppercase') {
    message = 'HELLO JSON';
  } else {
    message = 'Hello json';
  }

  
  res.json({ message });
});


































 module.exports = app;
