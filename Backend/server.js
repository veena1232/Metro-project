const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'Gani@123',
  database: 'metro_backend',
});

// Other imports and initialization

// Signup
app.post('/api/signup', async (req, res) => {
  const { email_id, password, re_password } = req.body;

  if (!isPasswordValid(password)) {
    return res.status(500).json({ success: false, message: 'Password is not valid' });
  }

  try {
    const [emailCountRows] = await executeQuery('SELECT COUNT(*) AS count FROM users_data WHERE email_id = ?', [email_id]);
    const emailCount = emailCountRows[0].count;

    if (emailCount > 0) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await executeQuery('INSERT INTO users_data (email_id, password, re_password) VALUES (?, ?, ?)', [email_id, hashedPassword, re_password]);

    return res.status(200).json({ success: true, message: 'Signup successful' });
  } catch (error) {
    console.error('Error signing up:', error);
    return res.status(500).json({ success: false, message: 'Error signing up' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  const { email_id, password } = req.body;

  try {
    const [userRows] = await executeQuery('SELECT * FROM signup_users WHERE email_id = ?', [email_id]);

    if (userRows.length === 0 || !(await bcrypt.compare(password, userRows[0].password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    return res.status(200).json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ success: false, message: 'Error logging in' });
  }
});

const executeQuery = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

function isPasswordValid(password) {
  // Implement your password validation logic
  // Check password length, complexity, etc.
  return true; // Replace with your validation logic
}
