# Recipes App – Backend API
A simple and beginner-friendly CRUD API for managing recipes.
Built using Node.js, Express.js, MongoDB (Mongoose) and deployed on Render.

This project demonstrates clean architecture using MVC pattern and includes complete CRUD operations with Postman documentation.
---

### 🚀 Live API URL (Deployed on Render)
- Base URL:
 ` https://recipes-app-backend-gjgp.onrender.com `

- All Recipes Endpoint:
 ` https://recipes-app-backend-gjgp.onrender.com/api/recipes `
---

### 📁 Folder Structure (MVC)
Recipe Apps - Backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── recipeController.js
│
├── middlewares/
│   └── errorHandler.js
│
├── models/
│   └── Recipe.js
│
├── routes/
│   └── recipeRoutes.js
│
├── app.js
├── .env
├── .gitignore
└── package.json
---

### 📌 Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- Postman (API testing)
- Render (Deployment)

### 📌 Environment Variables (.env)
Create a .env file inside the project:
```
PORT=5000
MONGO_URL=mongodb+srv://username:password@cluster0.mongodb.net/recipesdb

```
