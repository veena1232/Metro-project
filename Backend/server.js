const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(cors()); 
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const signupDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Gani@123', 
  database: 'mydatabase',
});

signupDB.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

function isPasswordValid(password) {
  // Check password length
  if (password.length < 8) {
    return false;
  }

  // Check for at least one capital letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  return true;
}

// Signup
app.post('/api/signup', (req, res) => {
  console.log("sign up");
  const { email_id, password, re_password } = req.body;

  if(!isPasswordValid(password)){
    console.error('Password is not valid');
    res.status(500).send('Password is not valid');
    return;
  }
  
  // Check if the email is already registered
  const checkEmailQuery = 'SELECT COUNT(*) AS count FROM users_data WHERE email_id = ?';
  signupDB.query(checkEmailQuery, [email_id], (checkErr, checkResult) => {
    if (checkErr) {
      console.error('Error checking email:', checkErr);
      res.status(500).send('Error checking email');
      return;
    }
    
    const emailCount = checkResult[0].count;
    if (emailCount > 0) {
      console.log('Email already registered');
      res.status(400).send('Email already registered');
      return;
    }

    const sql = 'INSERT INTO users_data (email_id, password, re_password) VALUES (?, ?, ?)';
    
    if (password === re_password) {
      signupDB.query(sql, [email_id, password, re_password], (err, result) => {
        if (err) {
          console.error('Error signing up:', err);
          res.status(500).send('Error signing up');
          return;
        }
        res.status(200).send('Signup successful');
      });
    } else {
      console.log("Passwords not matched");
      res.status(400).send('Passwords not matched');
    }
  });
});


// Login
app.post('/api/login', (req, res) => {
  const { email_id, password } = req.body;
  const sql = 'SELECT * FROM signup_users WHERE email_id = ? AND password = ?';
  signupDB.query(sql, [email_id, password], (err, result) => {
    if (err) {
      console.error('Error logging in:', err);
      res.status(500).send('Error logging in');
      return;
    }
    if (result.length === 0) {
      res.status(401).send('Invalid credentials');
      return;
    }
    res.status(200).send('Login successful');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
