# **API and Frontend Project**

This project consists of two main components:

1. **Backend API**: A RESTful API built using Node.js and Express, which interacts with a SQLite database to manage users, posts, and items.
2. **Frontend Webpage**: A static webpage hosted on Render, which consumes the API to display posts, users, and related data.

## **Technologies Used**

- **Backend**: 
  - Node.js
  - Express.js
  - SQLite (for the database)
  - CORS (for cross-origin resource sharing)
  - Body-parser (for parsing JSON request bodies)

- **Frontend**:
  - HTML/CSS/JavaScript (for building the static webpage)
  - Fetch API (for making requests to the backend)

## **Backend API Endpoints**

### **POST /api/users**
Creates a new user with the provided `name` and `description`.

**Request Body:**
```json
{
  "name": "User Name",
  "description": "User Description"
}

Response:
{
  "id": 1,
  "name": "User Name",
  "description": "User Description"
}

POST /api/posts
Creates a new post for its user.

Request Body:
{
  "name": "Post Title",
  "user_id": 1
}

Response:
{
  "id": 1,
  "name": "Post Title",
  "user_id": 1
}

GET /api/posts
Fetches all posts along with their associated user details.

Response:
[
  {
    "post_id": 1,
    "post_name": "Post Title",
    "user_id": 1,
    "user_name": "User Name",
    "user_description": "User Description"
  },
]

GET /api/posts/user/:user_id
Fetches all posts created by a specific user.

Response:
[
  {
    "post_id": 1,
    "post_name": "Post Title",
    "user_id": 1,
    "user_name": "User Name",
    "user_description": "User Description"
  },
]

POST /api/items
Creates a new item with a provided name and description.

Request Body:
{
  "name": "Item Name",
  "description": "Item Description"
}

Response:
{
  "id": 1,
  "name": "Item Name",
  "description": "Item Description"
}

GET /api/items
Fetches all items from the database.

Response:
[
  {
    "id": 1,
    "name": "Item Name",
    "description": "Item Description"
  },
]

DELETE /api/posts/:id
Deletes a post by ID.

Response:
{
  "message": "Post deleted successfully"
}


Apologies again for the confusion. Here is the full README in one block of text that you can copy:

markdown
Kopier
Rediger
# **API and Frontend Project**

This project consists of two main components:

1. **Backend API**: A RESTful API built using Node.js and Express, which interacts with a SQLite database to manage users, posts, and items.
2. **Frontend Webpage**: A static webpage hosted on Render, which consumes the API to display posts, users, and related data.

## **Technologies Used**

- **Backend**: 
  - Node.js
  - Express.js
  - SQLite (for the database)
  - CORS (for cross-origin resource sharing)
  - Body-parser (for parsing JSON request bodies)

- **Frontend**:
  - HTML/CSS/JavaScript (for building the static webpage)
  - Fetch API (for making requests to the backend)

## **Backend API Endpoints**

### **POST /api/users**
Creates a new user with the provided `name` and `description`.

**Request Body:**
```json
{
  "name": "User Name",
  "description": "User Description"
}
Response:

json
Kopier
Rediger
{
  "id": 1,
  "name": "User Name",
  "description": "User Description"
}
POST /api/posts
Creates a new post associated with a user.

Request Body:

json
Kopier
Rediger
{
  "name": "Post Title",
  "user_id": 1
}
Response:

json
Kopier
Rediger
{
  "id": 1,
  "name": "Post Title",
  "user_id": 1
}
GET /api/posts
Fetches all posts along with their associated user details.

Response:

json
Kopier
Rediger
[
  {
    "post_id": 1,
    "post_name": "Post Title",
    "user_id": 1,
    "user_name": "User Name",
    "user_description": "User Description"
  },
  ...
]
GET /api/posts/user/:user_id
Fetches all posts created by a specific user.

Response:

json
Kopier
Rediger
[
  {
    "post_id": 1,
    "post_name": "Post Title",
    "user_id": 1,
    "user_name": "User Name",
    "user_description": "User Description"
  },
  ...
]
POST /api/items
Creates a new item with a provided name and description.

Request Body:

json
Kopier
Rediger
{
  "name": "Item Name",
  "description": "Item Description"
}
Response:

json
Kopier
Rediger
{
  "id": 1,
  "name": "Item Name",
  "description": "Item Description"
}
GET /api/items
Fetches all items from the database.

Response:

json
Kopier
Rediger
[
  {
    "id": 1,
    "name": "Item Name",
    "description": "Item Description"
  },
  ...
]
DELETE /api/posts/:id
Deletes a post by ID.

Response:

json
Kopier
Rediger
{
  "message": "Post deleted successfully"
}
Setup Instructions
Backend API
Clone the repository:

bash
Kopier
Rediger
git clone <repo_url>
cd <repo_name>
Install dependencies:

bash
Kopier
Rediger
npm install
Start the backend server:

bash
Kopier
Rediger
npm start
The server will run on http://localhost:3000.

Frontend
The frontend is a static webpage that fetches data from the backend API.
Host the webpage on Render or any other static hosting service.
Make sure to configure the correct API endpoint URLs in your frontend to match the deployed backend URL.
Deploying on Render
Backend: The API is already deployed on Render. No further configuration is required for the backend API.

Frontend: To deploy the frontend on Render:

Go to your Render dashboard and create a new static site.
Set the Publish Directory to your build folder (e.g., ./ or ./build).
Add your index.html, CSS, and JS files in this directory.
The static site will be deployed with the URL of your choice (e.g., https://your-site-name.onrender.com).
