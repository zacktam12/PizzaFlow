# React + Vite

🍕 Pizza Ordering App
This is a full-stack pizza ordering application built with React, Redux, and React Router. The app is designed to provide a seamless and interactive user experience for browsing a menu, managing a cart, and placing orders. Below are the key features of the app:

Key Features
Menu Management: Browse a dynamic menu of pizzas with ingredients, prices, and availability (sold-out pizzas are indicated).
User Onboarding: Start your ordering journey by entering your name, creating a personalized experience.
Cart Functionality:
Add, update, or remove items from your cart.
View total prices and quantities dynamically.
Clear the cart with a single click.
Order Placement:
Create new orders and view detailed information, including order status, estimated delivery time, and priority pricing.
Update existing orders if necessary.
Real-time Navigation Feedback: Visual loading indicators during navigation ensure a smooth user experience.
Responsive Design: Optimized for various screen sizes with a clean, user-friendly interface.
Components Overview
App Layout: A structured layout featuring a header, a dynamically updated cart overview, and a central area for main content.
Menu: Displays a list of pizzas fetched from an API, with details about each pizza.
Cart Overview: Summarizes the total number of pizzas and price, with a link to open the cart.
Create Order: Guides the user through the order creation process.
Order Details: Shows comprehensive information about placed orders, including estimated delivery time.
Cart Management: Add, update, or remove pizzas in your cart with Redux-powered state management.
Loader: Displays a loading indicator during data fetching or navigation.
Tech Stack
Frontend: React, Redux Toolkit, React Router
Backend: API integration for menu and order data
State Management: Redux Toolkit
Utilities: Fetch API for asynchronous data fetching, helper functions for formatting currency and dates
How to Run the App
Clone the repository.
Install dependencies: npm install
Start the app: npm start
Navigate to http://localhost:3000 to explore the app.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
