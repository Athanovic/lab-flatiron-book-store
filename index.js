// Define the bookStore array with all three books
const bookStore = [
    {
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPJL._SX218_BO1,204,203,200_.jpg"
    },
    {
      title: "JavaScript and JQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg"
    },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg"
    }
  ];
  
  // Update the header text
  document.getElementById('header').textContent = "Flatbooks Technical Books";
  
  // Get the book list element
  const bookList = document.getElementById('book-list');
  
  // Clear any existing content
  bookList.innerHTML = '';
  
  // Loop through each book and add it to the list
  bookStore.forEach(book => {
    const li = document.createElement('li');
    
    const img = document.createElement('img');
    img.src = book.imageUrl;
    img.alt = book.title;
    
    const title = document.createElement('h3');
    title.textContent = book.title;
    
    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    
    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(author);
    
    bookList.appendChild(li);
  });