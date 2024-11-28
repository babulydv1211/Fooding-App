# Fooding.com - Full Stack MERN Project

**Fooding.com** is a full-stack web application built using the **MERN** stack (MongoDB, Express.js, React, Node.js). It allows users to browse food items, add them to their cart, place orders, and make payments through Stripe. The application is designed to provide a seamless food ordering experience for users.

## Features

- User authentication and authorization
- Browse food items and add them to the cart
- View, update, and remove items from the cart
- Place orders and make payments via Stripe
- Admin panel for managing orders and updating order status
## Screenshots![Screenshot 2024-11-29 015305](https://github.com/user-attachments/assets/e1ade43a-d687-486d-a94c-66c503abd234)
![Screenshot 2024-11-29 015742](https://github.com/user-attachments/assets/95e5f3f8-43f9-4d0b-81d1-74c43761ecb4)
![Screenshot 2024-11-29 015831](https://github.com/user-attachments/assets/6fcea160-fd38-48b5-b283-079dd72d81ac)
## Technologies Used

- **Frontend**: React.js, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Stripe
- **Environment Variables**: dotenv for managing environment variables

## Project Setup

Follow these steps to set up the project locally:

### 1. Clone the repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/babulydv1211/fooding.git
cd fooding

2. Set up Backend (Server)

1.Navigate to the backend directory:

cd backend

Install the necessary dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory to store environment variables (like database connection string, JWT secret, and Stripe secret key):

Example .env:

env
Copy code
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:4000.

3. Set up Frontend
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install the necessary dependencies:

bash
Copy code
npm install
Start the frontend application:

bash
Copy code
npm start
The frontend will run on http://localhost:5173.

4. Database Setup
Ensure MongoDB is installed and running locally, or use a cloud database like MongoDB Atlas. If you're using MongoDB Atlas, make sure to update the connection string in the .env file in the backend directory.

Usage
User Flow:

Users can register and log in to their accounts.
Users can browse food items and add them to their cart.
Users can proceed to checkout and make payments via Stripe.
Users can view their order status after making a payment.
Admin Flow:

Admin users can view all orders placed by customers.
Admin users can update the status of orders (e.g., "Pending", "Shipped", "Delivered").
Endpoints
User Authentication
POST /api/auth/register: Register a new user
POST /api/auth/login: Login an existing user
Cart Operations
POST /api/cart/add: Add an item to the cart
POST /api/cart/remove: Remove an item from the cart
GET /api/cart: Fetch the user's cart data
Order Operations
POST /api/order/place: Place a new order
POST /api/order/verify: Verify the order payment status
GET /api/order/user: Fetch the orders placed by the logged-in user
GET /api/order/admin: List all orders for admin
POST /api/order/update-status: Update the order status by admin
