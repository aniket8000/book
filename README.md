Personal Bookshelf
Objective
The objective of this project is to develop a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

Instructions
Book Search Page
Create an input field for users to type in a book's name.
Display search results in real-time as the user types.
Use the Open Library API for fetching results:
API Endpoint: https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1
Query Parameters:
q: Name of the book.
limit: Set to 10 results per page.
page: Only display results from page 1.
Display the search results in a list of cards. Each card should represent a book result.
Personal Bookshelf Page
Enable users to add books from the search results to a "My Bookshelf" page.
Utilize the Web Storage API (localStorage) to store the user's bookshelf persistently.
Create a separate page to display the user's personal bookshelf.
Incorporate a button on the search results page directing users to their personal bookshelf page.

Setup
To set up the project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/aniket8000/book.git

2. Navigate to the project directory:
cd personal-bookshelf

3. Install dependencies:
npm install

4. Set up environment variables:

Create a .env file in the root directory.
Add any necessary environment variables to this file.


Steps to run the application on a local machine

1. Start the application:
npm start

2. Open in browser:
Open a web browser.
Enter the following URL: http://localhost:3000 (or any other port number if specified).


Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:


Fork the repository on GitHub.
Create a new branch.
Make your changes and commit them with descriptive commit messages.
Push your changes to your fork.
Submit a pull request to the main repository.
License
This project is licensed under the MIT License. See the LICENSE file for details.
