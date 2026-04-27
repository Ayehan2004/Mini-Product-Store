# Backend Installation & Setup

## Prerequisites
- Node.js installed
- MongoDB running locally or MongoDB Atlas URI

## Steps

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Update .env file:**
   - Open `backend/.env`
   - Update `MONGO_URI` with your MongoDB connection string
   - Default: `mongodb://localhost:27017/store-management`

4. **Start the server:**
   ```bash
   npm run dev     # Development with auto-reload (requires nodemon)
   npm start       # Production
   ```

   Server runs on: `http://localhost:5000`

---

# Frontend Installation & Setup

## Steps

1. **Navigate to frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   App runs on: `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

---

# Features

✅ Add products (name, quantity, price)
✅ View all products in a clean table
✅ Auto-calculate subtotal (quantity × price)
✅ View grand total of all items
✅ Delete products
✅ Success/error messages
✅ Responsive design
✅ CORS enabled
✅ MongoDB integration

---

# API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Add new product
- `DELETE /api/products/:id` - Delete product by ID

---

# Project Structure

```
store market list/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── models/
│   │   └── Product.js         # Product schema
│   ├── routes/
│   │   └── productRoutes.js   # API routes
│   ├── server.js              # Express server
│   ├── .env                   # Environment variables
│   └── package.json           # Backend dependencies
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ProductForm.jsx
    │   │   ├── ProductForm.css
    │   │   ├── ProductList.jsx
    │   │   └── ProductList.css
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   ├── api.js              # Axios API calls
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json            # Frontend dependencies
```

---

# Troubleshooting

**Frontend can't connect to backend:**
- Check if backend is running on port 5000
- Check CORS in backend server.js

**MongoDB connection error:**
- Make sure MongoDB is running
- Update MONGO_URI in .env

**Port already in use:**
- Backend: Change PORT in .env
- Frontend: Change port in vite.config.js

---

**Enjoy your Mini Store Management App! 🚀**
