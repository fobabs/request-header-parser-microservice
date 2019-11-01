const express = require('express');
const app = express();
// const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors({optionSuccessStatus: 200}));

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views', 'index.htm'));
  res.sendFile(__dirname + '/views/index.htm');
});

app.get('/api/whoami', (req, res) => {
   // let ipAddress = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  let ipAddress = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
  // let ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress.split(',')[0];
  let language = req.headers['accept-language'];
  let software = req.headers['user-agent'];
  res.json({
    'ipaddress': ipAddress,
    'language': language,
    'software': software
  });
});

const server = app.listen(port, () => {
  console.log(`Server is running on PORT ${server.address().port}`);
});