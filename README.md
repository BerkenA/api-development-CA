# API Development CA

This project consists of a backend API built using Node.js and Express, which interacts with a SQLite database to manage users, posts, and items. The project also includes a static frontend webpage that consumes the API to display posts, users, and related data.

## Technologies Used

- **Backend**: Node.js, Express, SQLite, CORS
- **Frontend**: HTML, JavaScript (Fetch API)

## Setup Instructions

### Backend

1. Clone the repository:
   ```bash
   git clone <https://github.com/BerkenA/api-development-CA.git>
   cd <api-development-CA>

2. Install dependencies:
   ```bash
   npm install

3. Start the server:
   ```bash
   npm start
The API will be available at http://localhost:3000.

##Frontend
1. Host the static webpage on a platform like Render, Netlify, or GitHub Pages.
2. Make sure the frontend sends API requests to the correct backend URL.

##Deployment
- Backend: Deployed on Render.
- Frontend: You can deploy the static webpage on Render or any other platform that supports static websites.

##Endpoints

POST /api/users: Create a new user.
POST /api/posts: Create a new post.
GET /api/posts: Fetch all posts.
GET /api/posts/user/:user_id: Fetch posts for a specific user.
POST /api/items: Create a new item.
GET /api/items: Fetch all items.
DELETE /api/posts/:id: Delete a post.

Troubleshooting
CORS errors: Make sure the origin in the backend CORS configuration matches the deployed frontend URL.

