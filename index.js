// Select header and update text
const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

// Select the book list
const bookList = document.getElementById("book-list");

// Loop through books and create elements
bookStore.books.forEach(book => {
  const bookContainer = document.createElement("li");

  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = book.author;

  const bookImage = document.createElement("img");
  bookImage.src = book.image;

  bookContainer.append(bookTitle, bookAuthor, bookImage);
  bookList.appendChild(bookContainer);
});
