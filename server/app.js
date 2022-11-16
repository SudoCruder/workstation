'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./queries')

const PORT = process.env.PORT || 3001
const HOST = 'localhost'

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
const users = [
  { name: 'tobi', email: 'tobi@users.com' },
  { name: 'loki', email: 'loki@users.com' },
  { name: 'jane', email: 'jane@users.com' }
];


// Routes - Website
// ----------------
app.get('/', function(req, res, next) {
  res.render('index', {
    users: users,
    title: "Workstation",
    header: "Some users"
  })
})

app.get('/quiz', function(req, res, next) {
  res.render('pages/quiz', {
    title: "Quiz"
  })
})


// Routes - API
// ----------------
app.get("/api", (req, res, next) => {
  res.json({ message: "Hello from server!!" });
});

app.get('/api/users', (req, res, next) => {
  res.json({
    "status": 200,
    "statusText": "OK",
    "message": "All users retrieved.",
    "users": users})
});

// app.get('/api/users', db.getUsers)


// Routes - Errors
// ----------------
app.use((req, res) => {
  res.status(404)
  res.render('shared/404', { title: "404 - Workstation" })
})

app.use((err, req, res, next) => {
  res.status(500)
  res.render('shared/500', { title: "500 - Workstation" })
})

app.listen(PORT, () => console.log(`Running on http://${HOST}:${PORT}`))
