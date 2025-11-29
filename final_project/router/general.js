const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Task 1: Get the book list available in the shop
public_users.get('/', function (req, res) {
  return res.status(200).send(JSON.stringify(books, null, 2));
});

// Task 2: Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    return res.status(200).json(book);
  } else {
    return res.status(404).json({ message: "Book not found" });
  }
});

// Task 3: Get book details based on author
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author.toLowerCase();
  const results = Object.values(books).filter(b => b.author.toLowerCase() === author);
  return res.status(200).json(results);
});

// Task 4: Get all books based on title
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title.toLowerCase();
  const results = Object.values(books).filter(b => b.title.toLowerCase() === title);
  return res.status(200).json(results);
});

// Task 5: Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    return res.status(200).json(book.reviews);
  } else {
    return res.status(404).json({ message: "Book not found" });
  }
});

// Task 6 (Register new user for general access)
public_users.post("/register", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    if (isValid(username)) {
        return res.status(409).json({ message: "User already exists" });
    }

    users.push({ username, password });
    return res.status(201).json({ message: "User registered successfully" });
});
// Task 10: Get all books (async/await)
public_users.get('/', async (req, res) => {
    try {
      // Simulate async operation
      const allBooks = await new Promise((resolve) => {
        resolve(books);
      });
      return res.status(200).json(allBooks);
    } catch (err) {
      return res.status(500).json({ message: "Error fetching books" });
    }
  });
  
  // Task 11: Get book by ISBN (async/await)
  public_users.get('/isbn/:isbn', async (req, res) => {
    try {
      const isbn = req.params.isbn;
      const book = await new Promise((resolve) => {
        resolve(books[isbn]);
      });
      if (book) {
        return res.status(200).json(book);
      } else {
        return res.status(404).json({ message: "Book not found" });
      }
    } catch (err) {
      return res.status(500).json({ message: "Error fetching book by ISBN" });
    }
  });
  
  // Task 12: Get books by author (async/await)
  public_users.get('/author/:author', async (req, res) => {
    try {
      const author = req.params.author;
      const filteredBooks = await new Promise((resolve) => {
        const result = Object.values(books).filter(b => b.author === author);
        resolve(result);
      });
      return res.status(200).json(filteredBooks);
    } catch (err) {
      return res.status(500).json({ message: "Error fetching books by author" });
    }
  });
  
  // Task 13: Get books by title (async/await)
  public_users.get('/title/:title', async (req, res) => {
    try {
      const title = req.params.title;
      const filteredBooks = await new Promise((resolve) => {
        const result = Object.values(books).filter(b => b.title === title);
        resolve(result);
      });
      return res.status(200).json(filteredBooks);
    } catch (err) {
      return res.status(500).json({ message: "Error fetching books by title" });
    }
  });

module.exports.general = public_users;
