const server = require('serverless-http');
const express = require('express');

const app = require('../index');
app.get('/my', (req, res) => {
  res.send('Hello, World! my name is Anish dfa fewwqrtrtreatfgreat');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
module.exports.handler = server(app);