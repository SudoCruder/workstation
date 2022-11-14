const Pool = require('pg').Pool
const pool = new Pool({
  user: 'sudocruder',
  host: 'localhost',
  database: 'workstation',
  password: '',
  port: 5432,
})

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers
}
