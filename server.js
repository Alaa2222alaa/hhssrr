
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/responses', (req, res) => {
  const data = fs.readFileSync('responses.json', 'utf8');
  res.json(JSON.parse(data));
});

app.post('/responses', (req, res) => {
  const data = JSON.parse(fs.readFileSync('responses.json', 'utf8'));
  data.push(req.body);
  fs.writeFileSync('responses.json', JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`🚀 HSR Server running at http://localhost:${PORT}`);
});
