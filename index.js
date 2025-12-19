// Define the bookStore object with book data
const bookStore = [
    {
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPJL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
      title: "JavaScript and JQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg"
    }
    // Add more books as needed
  ];
  
  // Update the header
  document.getElementById('header').textContent = "Flatbooks Technical Books";
  
  // Populate the book list
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = ''; // Clear any existing content
  
  bookStore.forEach(book => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <img src="${book.imageUrl}" alt="${book.title}">
    `;
    bookList.appendChild(li);
  });