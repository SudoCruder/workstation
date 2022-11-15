'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./queries')
const PORT = process.env.PORT || 3001
const HOST = '0.0.0.0'

// Register ejs as .html. If we did not call this, we would need to name our views foo.ejs instead of foo.html. 
// The __express method is simply a function that engines use to hook into the Express view system by default, 
// so if we want to change "foo.ejs" to "foo.html"  we simply pass _any_ function, in this case `ejs.__express`.
app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Dummy users
var users = [
  { name: 'tobi', email: 'tobi@users.com' },
  { name: 'loki', email: 'loki@users.com' },
  { name: 'jane', email: 'jane@users.com' }
];

app.get('/', function(req, res) {
  res.render('index', {
    users: users,
    title: "Workstation",
    header: "Some users"
  })
})

app.get('/quiz', function(res, res) {
  res.render('pages/quiz', {
    title: "Quiz"
  })
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/api/users', db.getUsers)

app.listen(PORT, () => console.log(`Running on http://${HOST}:${PORT}`))
