📚 Express Book Reviews Project
Overview
This project is a Node.js + Express application for managing book reviews. It was developed step‑by‑step through 14 tasks, covering synchronous routes, authentication, JWT, session handling, async/await refactoring, and GitHub repo management.

🚀 Features Implemented
Tasks 1–4 (Synchronous Routes)
Get all books: Returns the full book list.

Get book by ISBN: Fetches details of a single book.

Get books by author: Filters books by author name.

Get books by title: Filters books by title.

Tasks 5–9 (Authentication & Reviews)
Task 5: Get book reviews by ISBN.

Task 6: Register new users.

Task 7: Login with JWT + session.

Task 8: Add or modify a book review.

Task 9: Delete a book review.

Tasks 10–13 (Async/Await Refactor)
Task 10: Get all books using async/await.

Task 11: Get book by ISBN using async/await.

Task 12: Get books by author using async/await.

Task 13: Get books by title using async/await.

Task 14 (GitHub Repo Update)
Committed and pushed all changes to forked GitHub repo for peer review.

🧪 Testing with curl
Register
curl -X POST http://localhost:5000/customer/register \
  -H "Content-Type: application/json" \
  -d '{"username":"abraham123","password":"securepass"}'
Login

curl -c cookies.txt -X POST http://localhost:5000/customer/login \
  -H "Content-Type: application/json" \
  -d '{"username":"abraham123","password":"securepass"}'
Add Review

curl -b cookies.txt -X PUT http://localhost:5000/customer/auth/review/1 \
  -H "Content-Type: application/json" \
  -d '{"review":"Amazing book!"}'
Delete Review

curl -b cookies.txt -X DELETE http://localhost:5000/customer/auth/review/1
📸 Screenshots for Peer Review
6-register.png

7-login.png

8-addreview.png

9-deletereview.png

10-getallbooks-async.png

11-getbookbyISBN-async.png

12-getbooksbyauthor-async.png

13-getbooksbytitle-async.png

14-githubpush.png

🔗 GitHub Repo
Express Book Reviews Repo

🛠️ How to Run
Clone the repo:

git clone https://github.com/abraham9486937737/expressBookReviews.git
Install dependencies:

npm install
Start the server:

npm start
Test endpoints with curl or Postman.
