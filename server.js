const express = require('express');
const app = express();

const root = __dirname + "/dist/book-seller-front";

app.use(express.static(root));

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: root})
});

app.listen(process.env.PORT || 8081);
