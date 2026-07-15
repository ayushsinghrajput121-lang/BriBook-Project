# 🛍️ Fake Store React Application

A responsive product listing application built using **React.js**, **Vite**, **Bootstrap 5**, **Axios**, and **React Router DOM**. The application fetches products from the **Fake Store API**, allowing users to browse, search, paginate, and view detailed product information.

---

## 🚀 Features

- Fetch product data from the Fake Store API
- Responsive UI built with Bootstrap 5
- Display product image, title, price, category, and rating
- Client-side search functionality
- Client-side pagination
- Product details page
- Loading spinner while fetching data
- Responsive layout for Desktop, Tablet, and Mobile
- Reusable React components

---

## 🛠️ Tech Stack

- React.js
- Vite
- JavaScript (ES6+)
- Bootstrap 5
- Axios
- React Router DOM

---

## 📂 Project Structure

```
fake-store-react
│
├── public
│
├── src
│   ├── components
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pagination.jsx
│   │   ├── ProductCard.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   └── ProductDetails.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 📦 Installation

### Clone the repository

```bash
https://github.com/ayushsinghrajput121-lang/BriBook-Project
```

### Navigate to the project

```bash
cd fake-store-react
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🌐 API Used

**Fake Store API**

```
https://fakestoreapi.com/products
```

---

## 📋 Application Workflow

1. Fetch products from the Fake Store API.
2. Store products in React state.
3. Display products using reusable Product Card components.
4. Search products by title.
5. Filter products in real time.
6. Display paginated product results.
7. Navigate to the Product Details page.
8. Fetch and display detailed information for the selected product.

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

Bootstrap Grid System is used to create a responsive layout.

---

## 📄 Pages

### Home Page

- Product Listing
- Search Bar
- Loading Spinner
- Pagination

### Product Details Page

- Product Image
- Product Title
- Price
- Category
- Rating
- Review Count
- Description

---

## ✅ Features Implemented

- ✔ Product Listing
- ✔ API Integration
- ✔ Responsive Bootstrap UI
- ✔ Search Functionality
- ✔ Client-side Pagination
- ✔ Product Details Page
- ✔ Loading Spinner
- ✔ React Router DOM
- ✔ Reusable Components

---

## 🔮 Future Enhancements

- Category Filter
- Price Sorting
- Shopping Cart
- Wishlist
- Dark Mode
- Skeleton Loading
- Better Error Handling
- Unit Testing
- TypeScript Support

---

## 📌 Assumptions

- The Fake Store API is publicly available.
- Search is implemented on the client side.
- Pagination is implemented on the client side.
- Product ratings are available from the API.

---

## 👨‍💻 Author

**Ayush Singh**

GitHub: https://github.com/ayushsinghrajput121-lang

LinkedIn: https://www.linkedin.com/in/ayush-singh-sd189/

---

## 📄 License

This project was developed for learning and technical assessment purposes.
