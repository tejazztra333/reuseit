const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

// ---------------------
// Middleware
// ---------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// ---------------------
// CORS Configuration
// ---------------------
app.use(cors({
  origin: ['http://127.0.0.1:5501', 'http://localhost:5501'], // your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));


// ---------------------
// Session Setup
// ---------------------
app.use(session({
  secret: '123456789',          // change this to something strong
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,      // 1 day
    httpOnly: true,
  }
}));

// ---------------------
// MySQL connection
// ---------------------
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'reuseit'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL Connected!');
});

// ---------------------
// Registration Route
// ---------------------
app.post('/register', async (req, res) => {
  const { name, email, mobile, password } = req.body;
  if (!name || !email || !mobile || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)`;

    db.query(query, [name, email, mobile, hashedPassword], (err, result) => {
      if (err) {
        console.error("❌ DB error:", err);
        return res.status(500).json({ message: 'Database error or email already exists' });
      }

      // Save user in session
      req.session.user = { id: result.insertId, name, email };
      console.log("✅ User registered & session set:", req.session.user);
      res.json({ message: 'Registration successful', user: req.session.user });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/login', (req, res) => {
  console.log("🔹 Login route hit with body:", req.body); // log request body

  const { email, password } = req.body;
  if (!email || !password) {
    console.log("❌ Missing email or password");
    return res.status(400).json({ message: 'Email and password required' });
  }

  const query = `SELECT * FROM users WHERE email = ?`;
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error("❌ DB Error:", err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length === 0) {
      console.log("❌ No user found with this email");
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const user = results[0];
    try {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        console.log("❌ Password mismatch");
        return res.status(401).json({ message: 'Incorrect email or password' });
      }

      // ✅ Save user in session
      req.session.user = { id: user.id, name: user.name, email: user.email };
      console.log("✅ User logged in & session set:", req.session.user);

      res.json({ message: 'Login successful', user: req.session.user });
    } catch (err) {
      console.error("❌ Error comparing password:", err);
      return res.status(500).json({ message: 'Server error' });
    }
  });
});


// ---------------------
// Session Route
// ---------------------
app.get('/session', (req, res) => {
  console.log("🔎 Session route hit; session.user =", req.session.user);
  if (req.session.user) res.json({ user: req.session.user });
  else res.json({ user: null });
});

// ---------------------
// Logout Route
// ---------------------
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.clearCookie('connect.sid', { path: '/' }); // ✅ important
    console.log("👋 User logged out");
    res.json({ message: 'Logged out' });
  });
});

// POST route to save purchase
app.post('/purchase', (req, res) => {
  const { itemId, itemTitle, itemPrice, itemCondition, buyerName, buyerEmail, buyerPhone, buyerAddress, buyerMessage } = req.body;

  const sql = `
    INSERT INTO purchases 
    (item_id, item_title, item_price, item_condition, buyer_name, buyer_email, buyer_phone, buyer_address, buyer_message)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  db.query(sql, [itemId, itemTitle, itemPrice, itemCondition, buyerName, buyerEmail, buyerPhone, buyerAddress, buyerMessage], (err, result) => {
    if (err) {
      console.error("Error saving purchase:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true, message: "Purchase saved successfully" });
  });
});



// ---------------------
// Start Server
// ---------------------
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
