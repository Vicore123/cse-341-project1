# 📇 Contacts API --- CSE 341 Project 1

A RESTful API built with **Node.js**, **Express**, and **MongoDB** for
managing contacts. This project allows you to create, read, update, and
delete contact information.

[![Live
API](https://img.shields.io/badge/Live%20API-Online-green)](https://cse-341-project1-nimd.onrender.com/)

------------------------------------------------------------------------

## 🚀 Features

-   📄 Get all contacts
-   🔍 Get a contact by ID
-   ➕ Create a new contact
-   ✏️ Update an existing contact
-   ❌ Delete a contact
-   📚 Swagger documentation for API testing

------------------------------------------------------------------------

## 🛠️ Technologies Used

-   Node.js
-   Express.js
-   MongoDB (Native Driver)
-   Swagger (swagger-ui-express & swagger-autogen)
-   dotenv
-   body-parser

------------------------------------------------------------------------

## 📁 Project Structure

    📦 cse-341-project1
     ┣ 📂 controllers
     ┃ ┗ 📄 contacts.js
     ┣ 📂 data
     ┃ ┗ 📄 database.js
     ┣ 📂 routes
     ┃ ┣ 📄 contacts.js
     ┃ ┣ 📄 index.js
     ┃ ┗ 📄 swagger.js
     ┣ 📄 server.js
     ┣ 📄 swagger.json
     ┣ 📄 swagger.js
     ┣ 📄 package.json
     ┗ 📄 .env

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1. Clone the repository

``` bash
git clone https://github.com/Vicore123/cse-341-project1.git
cd cse-341-project1
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root and add:

    PORT=3000
    MONGODB_URI=your_mongodb_connection_string

------------------------------------------------------------------------

## ▶️ Running the Project

``` bash
node server.js
```

Or:

``` bash
npx nodemon server.js
```

Server will run on:

    http://localhost:3000

------------------------------------------------------------------------

## 📡 API Endpoints

### 📄 Get All Contacts

    GET /contacts

### 🔍 Get Contact by ID

    GET /contacts/:id

### ➕ Create Contact

    POST /contacts

**Body:**

``` json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@email.com",
  "favoriteColor": "blue",
  "birthday": "1990-01-01"
}
```

------------------------------------------------------------------------

### ✏️ Update Contact

    PUT /contacts/:id

------------------------------------------------------------------------

### ❌ Delete Contact

    DELETE /contacts/:id

------------------------------------------------------------------------

## 📚 Swagger Documentation

After running the project, access:

    http://localhost:3000/api-docs

------------------------------------------------------------------------

## 🧪 Testing the API

You test the API using either **Swagger UI** or **Postman**

### 🌐 Live API

https://cse-341-project1-nimd.onrender.com/

------------------------------------------------------------------------

### 📚 Swagger UI (Recommended)

https://cse-341-project1-nimd.onrender.com/api-docs

With Swagger, you can: - Test all endpoints directly in the browser -
View request/response formats - Avoid installing additional tools

------------------------------------------------------------------------

### 📮 Using Postman

Example:

**GET all contacts**

    GET https://cse-341-project1-nimd.onrender.com/contacts

**POST create contact**

    POST https://cse-341-project1-nimd.onrender.com/contacts

Body (JSON):

``` json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@email.com",
  "favoriteColor": "blue",
  "birthday": "1990-01-01"
}
```

------------------------------------------------------------------------

## ⚠️ Notes

-   Make sure MongoDB is running or your connection string is valid.
-   All IDs must be valid MongoDB ObjectIds.
