require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS configuration (IMPORTANT for deployment)
// Set CORS_ORIGIN in Railway as a comma-separated list, e.g.
// CORS_ORIGIN=https://your-site.netlify.app,http://localhost:5173
const defaultAllowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];
const corsOriginEnv = process.env.CORS_ORIGIN || '';
const envAllowedOrigins = corsOriginEnv
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);

const allowAllOrigins = envAllowedOrigins.includes('*');
const allowedOrigins = [...defaultAllowedOrigins, ...envAllowedOrigins];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowAllOrigins) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

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
app.listen(PORT, '0.0.0.0', async () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    await connectDB();
  } catch (error) {
    console.error('Startup failed: cannot connect to MongoDB.');
    process.exit(1);
  }
});