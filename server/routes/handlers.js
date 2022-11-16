const db = require('../queries')

const fortuneMessages = require('../lib/fortuneMessages')
const usersList = require('../lib/usersList')


// Routes - Website
// ----------------
exports.homepage = (req, res, next) => {
  res.render('homepage', {
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
  // FIXME: error "res.status is not a function" when running test
  // Status code in browser's Network is 200 for now
  // res.status(404)
  res.render('shared/notFound', { title: "404 - Workstation" })
}

exports.serverError = (err, req, res, next) => {
  // FIXME: error "res.status is not a function" when running test
  // Status code in browser's Network is 200 for now
  // res.status(500)
  res.render('shared/serverError', { title: "500 - Workstation" })
}
