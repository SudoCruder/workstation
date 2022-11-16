const db = require('../queries')

const fortuneMessages = require('../lib/fortuneMessages')
const usersList = require('../lib/usersList')


// Routes - Website
// ----------------
exports.homepage = (req, res, next) => {
  res.render('index', {
    users: usersList.getUsers(),
    title: "Workstation"
  })
}

exports.aboutPage = (req, res, next) => {
  res.render('pages/about', {
    title: "About - Workstation",
    fortune: fortuneMessages.getFortuneMessage(),
  })
}

exports.quizPage = (req, res, next) => {
  res.render('pages/quiz', {
    title: "Quiz - Workstation"
  })
}


// Routes - API
// ----------------
exports.api = (req, res, next) => {
  res.json({ message: "Hello from server!! (handlers)" })
}

exports.apiUsers = (req, res, next) => {
  res.json({
    "status": 200,
    "statusText": "OK",
    "message": "All users retrieved.",
    "users": users
  })
}

// app.get('/api/users', db.getUsers)


// Routes - Errors
// ----------------
exports.notFound = (req, res) => {
  res.status(404)
  res.render('shared/404', { title: "404 - Workstation" })
}

exports.serverError = (err, req, res, next) => {
  res.status(500)
  res.render('shared/500', { title: "500 - Workstation" })
}
