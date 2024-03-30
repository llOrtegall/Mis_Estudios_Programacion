import mysql from 'mysql2'

const pool = mysql.createPool({
  user: 'root',
  host: '172.20.1.70',
  password: 'Studioworks500G',
  port: 4010,
  database: 'test_node'
})

pool.query('SELECT * FROM users;', (err, results) => {
  if (err) {
    console.error(err)
    throw err
  }

  console.log(results);
  
})