# 🍔 MERN Food Delivery App

A full-stack Food Delivery Web Application built using the MERN stack (MongoDB, Express.js, React, Node.js) with a powerful Admin Panel for managing food items and orders.
The frontend was personally designed to offer a smooth and intuitive user experience. This project features admin and user authentication, cart management, order processing, and real-world backend architecture.

🧠 Built to master full-stack development, implement Redis for performance optimization, and apply clean, component-based UI design.

---

## 🔗 Live Demo (Optional)

- 👉 User panel [https://food-delivery-roan-one.vercel.app/](https://food-delivery-five-kohl.vercel.app/)
- 👉 Admin panel [https://food-delivery-roan-one.vercel.app/](https://food-delivery-admin-indol.vercel.app/)

---

## 🚀 Features

👤 User Panel


- 📦 Browse food items and categories

- 🛒 Add items to cart and checkout

- 🔐 User authentication (login/register)

- 📋 View orders and order history

🛠️ Admin Panel

- 🧾 Admin authentication

- 📥 Add, update, delete food items

- 📊 View and manage orders

- 👥 Manage user data

Backend Capabilities

- 💾 RESTful API with MongoDB

- ⚡ Redis integration for caching and performance

- 🛡️ JWT-based secure authentication

- 📂 File upload support (e.g., food images)

---

## 🧰 Tech Stack

**Frontend:**
- React
- React Router
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for auth


---

## 🛠️ Getting Started Locally

> 💡 Make sure you have `Node.js`, `npm`, and `MongoDB` installed on your system.

### 🔃 Clone the repository

```bash
git clone https://github.com/divilthakur/mern-food-delivery.git
cd mern-food-delivery
```

## 🖥️ Start the Frontend
```
# Navigate to frontend directory
cd client

# Install dependencies
npm install

# Start the React development server
npm run dev
```

## 🛠️ Start the Backend
```
# Navigate to backend directory
cd server

# Install dependencies
npm install

# Start the Express server
npm start
```

## 🖥️ Start the Admin
```
# Navigate to frontend directory
cd admin

# Install dependencies
npm install

# Start the React development server
npm run dev
```
## ⚙️ Set up Environment Variables

```

# Server
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret


# Client & Admin
VITE_RAZORPAY_KEY_ID = key
VITE_BACKEND_URL = http://localhost:4000 (or your deployed link)
```



## 🙋‍♂️ Author
Made with ❤️ by Divil Thakur
📧 Email: divilthkr3@gmail.com



