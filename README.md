MERN Testing and Debugging – Assignment

This project demonstrates testing and debugging techniques in a MERN (MongoDB, Express, React, Node.js) application. The goal of the assignment is to implement different types of tests—unit tests, integration tests, and end-to-end tests—while applying debugging strategies to ensure reliability of both the client and server.


📌 Project Structure

mern-testing/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── tests/
│   │   │   ├── unit/
│   │   │   └── integration/
│   │   └── App.jsx
│   └── cypress/            
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   └── tests/
│       ├── unit/
│       └── integration/
├── jest.config.js
└── package.json


🚀 Getting Started
Requirements

Node.js v18+

MongoDB (local or Atlas)

npm 

Installation
git clone <https://github.com/PLP-MERN-Stack-Development/testing-and-debugging-ensuring-mern-app-reliability-Cynthia-tech48.git>
cd server
npm install


Running the Server
npm run dev


🧪 Testing Strategy

This project implements three levels of testing:


✔ 1. Unit Testing

Tests small isolated functions such as helpers, middleware, and validation logic.


Tools: Jest

✔ 2. Integration Testing

Tests interaction between routes, controllers, and the database.

Tools: Supertest, MongoDB Memory Server

Example endpoints tested:

POST /api/users/register

POST /api/users/login

POST /api/posts

GET /api/posts

✔ 3. End-to-End (E2E) Testing

Simulates real browser behavior and user actions.


Tools: Cypress

Example test: verifying page loads and UI elements.


🧵 Debugging Techniques Used

Console-based debugging throughout the backend to trace request flow.

Error-handling middleware added for consistent API error responses.

Environment variables used for controlling test and development environments.

Isolated test database using MongoDB Memory Server.

Validation checks added to catch malformed data early.

📊 Test Coverage

Unit testing and integration testing have been implemented.

Coverage improvement is ongoing .

Coverage reports can be viewed using:

npm run test -- --coverage


🛠 Tools Used

Jest – Unit testing

Supertest – API testing

React Testing Library – Component testing

Cypress – End-to-end testing

MongoDB Memory Server – Fast in-memory test database


📘 Assignment Focus

This submission demonstrates:

Understanding of MERN application testing

Implementation of backend unit & integration tests

Setup of frontend testing environment

Basic Cypress end-to-end testing

Debugging and troubleshooting server issues

Use of testing best practices


📸 Screenshots

Below are the main UI pages of the application.
All screenshots are stored in the photos/ folder.

🏠 Home Page

This is the landing page where users can view posts and navigate through the application.

![Home Page](./photos/home1.jpg)



 Create Post Page

This is the page where authenticated users can create new posts.

![Create Post Page](./photos/create post1.jpg)

📎 Additional Notes

Some tests are still in progress as part of ongoing improvements.

All required testing environments have been set up successfully.

