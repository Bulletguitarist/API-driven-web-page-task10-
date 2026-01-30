# Consume a Public API Using Fetch API

## 📌 Project Overview
This project demonstrates how to **consume a public REST API using the JavaScript Fetch API** and dynamically display the fetched data on a web page.

The application allows users to search for a country and view important details such as its flag, capital, population, and region.  
It focuses on **asynchronous JavaScript**, **error handling**, and **dynamic DOM manipulation**.

---

## 📂 Project Structure
task10/
│
├── index.html
├── script.js
├── style.css
└── README.md

---

## 🎯 Objectives
- Consume a free public API without authentication
- Create a simple and clean user interface
- Send HTTP requests using the Fetch API
- Handle asynchronous responses properly
- Convert API responses to JSON format
- Dynamically display fetched data on the webpage
- Implement error handling and loading indicators
- Understand async behavior in JavaScript

---

## 🌐 Public API Used
**REST Countries API**

Endpoint:
https://restcountries.com/v3.1/name/{country}

This API provides country-related data such as:
- Country name
- Capital
- Population
- Region
- National flag

---

## 🧱 Technologies Used
- **HTML**
- **CSS**
- **JavaScript (Fetch API, Async/Await)**

---

## ✨ Features Implemented
- User input to search for a country
- Fetching external data using `fetch()`
- Asynchronous handling using `async/await`
- JSON response parsing
- Dynamic rendering of country data
- Loading indicator while fetching data
- Graceful error handling for:
  - Invalid country names
  - Network failures
- Console logging for debugging

---

## 🧠 JavaScript Concepts Used
- Fetch API
- Promises and `async/await`
- DOM manipulation
- Conditional checks for failed responses
- Error handling using `try...catch`
- `finally` block for cleanup actions
- Event handling

---

## 🧪 Testing & Edge Cases
The application handles:
- Empty input fields
- Invalid country names
- API errors (404)
- Network failure scenarios using browser DevTools
- Multiple browser compatibility (Chrome, Firefox, Edge)

---

## 🎨 UI & UX Highlights
- Clean card-based layout
- Gradient background
- Loading indicator for better user experience
- Clear and readable data presentation
- Responsive design basics

---

## 🧠 Learning Outcomes
Through this project, I learned:
- How to work with external APIs
- How asynchronous JavaScript works
- How to handle API responses and errors
- How to dynamically update the DOM
- How to improve UX with loading indicators

---

## 👤 Author
**Jyotirmoy Mahapatra**  
  Intern- Elevate Labs
