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
```
Recipe Apps - Backend/
               - config/
                   - db.js
               - controllers/
                   - recipeController.js
               - middlewares/
                   - errorHandler.js
               - models/
                   - Recipe.js
               - routes/
                   - recipeRoutes.js
               - app.js
               - .env
               - .gitignore
               - package.json
```
---

### 📌 Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- Postman (API testing)
- Render (Deployment)
---

### 📌 Environment Variables (.env)
Create a .env file inside the project:
```
PORT=5000
MONGO_URL=mongodb+srv://username:password@cluster0.mongodb.net/recipesdb
```

### 🔧 Installation (Local Setup)
##### 1. Clone the repository
```
git clone https://github.com/YOUR-USERNAME/recipe-backend.git
cd recipe-backend
```
#### 2. Install dependencies
```
npm install
```
#### 3. Run the server (dev mode)
```
npm run dev
```
### 4. Run production mode
```
npm start
```
---

### 🍃 MongoDB Setup (Atlas)
1. Go to `https://cloud.mongodb.com`
2. Create a Free M0 Shared Cluster
3. Create a user → username + password
4. Add IP Access → ` 0.0.0.0/0 `
5. Click Connect → Connect Your Application
6. Copy the connection string
7. Replace username/password/dbname
8. Paste into ` .env ` as MONGO_URL

---

### 🌍 Deployment (Render)
1. Push project to GitHub
2. Go to `https://render.com`
3. Create → New Web Service
4. Select your repo
5. Build Command
   ` npm install `
6. Start command
   ` npm start `
7. Add environment variable:
   - MONGO_URL=your_atlas_url
8.Deploy

---

### 🔥 API Endpoints (CRUD)
Base URL:
```
https://recipes-app-backend-gjgp.onrender.com/api/recipes
```

###### 📌 1. Create Recipe
**POST** `/api/recipes`

Example Body (JSON):
```
{
  "title": "Masala Pasta",
  "description": "Indian spicy pasta",
  "ingredients": ["Pasta", "Tomato", "Capsicum"],
  "steps": ["Boil pasta", "Saute vegetables", "Mix and cook"],
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 15,
  "servings": 2
}
```

###### 📌 2. Get All Recipes
**GET** `/api/recipes`

Response:
```
{
  "success": true,
  "data": [...]
}
```

###### 📌 3. Get Recipe By ID
**GET** `/api/recipes/:id` 

Example:
`https://recipes-app-backend-gjgp.onrender.com/api/recipes/6792efcdb42d010a4e496ea7`

##### 📌 4. Update Recipe
**PUT** `/api/recipes/:id`

Example Body:
```
{
  "title": "Updated Masala Pasta",
  "servings": 4
}
```

##### 📌 5. Delete Recipe
**DELETE** `/api/recipes/:id`

Response:
```
{
  "success": true,
  "message": "Recipe deleted successfully"
}
```
---

### 🥗 Sample Insertions (Use These in POST Request)

#### 1. Paneer Butter Masala
```
{
  "title": "Paneer Butter Masala",
  "description": "Creamy paneer curry",
  "ingredients": ["Paneer", "Tomatoes", "Cream", "Butter"],
  "steps": ["Blend tomatoes", "Cook gravy", "Add paneer"],
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 20,
  "servings": 3
}
```

#### 2. Ramen Bowl
```
{
  "title": "Ramen Bowl",
  "description": "Japanese-style ramen with broth and vegetables.",
  "ingredients": ["Noodles", "Broth", "Egg", "Mushrooms", "Spring onions"],
  "steps": ["Cook noodles", "Prepare broth", "Assemble bowl"],
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 15,
  "servings": 1
}
```

#### 3. Egg Curry
```
{
  "title": "Egg Curry",
  "description": "Simple Indian-style egg gravy.",
  "ingredients": ["Eggs", "Onion", "Tomato", "Chili powder", "Salt"],
  "steps": ["Boil eggs", "Cook gravy", "Add eggs", "Simmer"],
  "prepTimeMinutes": 12,
  "cookTimeMinutes": 20,
  "servings": 3
}
```

#### 4. Falafel Wrap
```
{
  "title": "Falafel Wrap",
  "description": "Middle-eastern wrap with crispy falafels.",
  "ingredients": ["Falafel", "Pita bread", "Hummus", "Salad", "Onions"],
  "steps": ["Cook falafels", "Spread hummus", "Add fillings", "Wrap"],
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 10,
  "servings": 2
}
```

#### 5. Spinach Soup
```
{
  "title": "Spinach Soup",
  "description": "Healthy green soup rich in iron.",
  "ingredients": ["Spinach", "Garlic", "Onion", "Cream", "Salt"],
  "steps": ["Saute spinach", "Blend mixture", "Simmer", "Serve warm"],
  "prepTimeMinutes": 8,
  "cookTimeMinutes": 12,
  "servings": 2
}
```

---

### ⚠️ Error Handling
Handled by `errorHandler.js`
- Invalid Recipe ID
- Recipe Not Found
- Server Errors

Example error:
```
{
  "success": false,
  "message": "Invalid recipe ID"
}
```

---

### 📌 Testing With Postman
To test:
1. Open Postman
2. Use the live URL:
   `https://recipes-app-backend-gjgp.onrender.com/api/recipes`
3.Test all CRUD operations
4. Use sample JSON bodies from above (or can be tested using similar format)



