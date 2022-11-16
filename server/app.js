'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const handlers = require('./routes/handlers')

const PORT = process.env.PORT || 3001
const HOST = 'localhost'

// Register ejs as .html. If we did not call this, we would need to name our views foo.ejs instead of foo.html.
// The __express method is simply a function that engines use to hook into the Express view system by default,
// so if we want to change "foo.ejs" to "foo.html"  we simply pass _any_ function, in this case `ejs.__express`.
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


// Routes - Website
// ----------------
app.get('/', handlers.homepage)

app.get('/about', handlers.aboutPage)

app.get('/quiz', handlers.quizPage)


// Routes - API
// ----------------
app.get("/api", handlers.api);

app.get('/api/users', handlers.apiUsers);


// Routes - Errors
// ----------------
app.use(handlers.notFound)

app.use(handlers.serverError)


app.listen(PORT, () => console.log(`Running on http://${HOST}:${PORT}`))
