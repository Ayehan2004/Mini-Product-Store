require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB
connectDB();

// ✅ CORS configuration (IMPORTANT for deployment)
const corsOptions = {
  origin: [
    'http://localhost:5173', // local frontend (Vite)
    'http://localhost:3000', // React default
    'https://your-frontend-name.netlify.app' // 🔥 replace with your real deployed frontend URL
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Store Management API is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// IMPORTANT: listen on 0.0.0.0 for cloud hosting
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});