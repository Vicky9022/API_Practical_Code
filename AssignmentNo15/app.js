const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { title: 'Express Template Demo' });
});

app.post('/submit', (req, res) => {
  const { name, rollno, class: className, branch, age } = req.body;
  res.render('result', { name, rollno, className, branch, age });
});

app.listen(3003, () => console.log('Server running on http://localhost:3003'));