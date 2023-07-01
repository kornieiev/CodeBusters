

// звідси стартуєм усю роботу з бекендом
import axios from 'axios';


// функція отримує посилання на категорії
// функція повертає обєкт
export const getCategories = () => {
    return axios.get('https://books-backend.p.goit.global/books/category-list')
  .then(function (response) {
    
    return response;
  })
  .catch(function (error) {
    
    console.log(error);
  })
  
};

/// функція отримує посилання на популярні книги
// функція повертає обєкт
export const getBooksAllCategories = () => {
    return axios.get('https://books-backend.p.goit.global/books/top-books')
  .then(function (response) {
    
    return response;
  })
  .catch(function (error) {
    
    console.log(error);
  })
  
};



// функція отримує посилання на книги окремої категорії
// у аргументи функції додати обрану категорію
// функція повертає обєкт
export const getBooksByCategory = (category) => {
    return axios.get(`https://books-backend.p.goit.global/books/category?category=${category}`)
  .then(function (response) {
    
    return response;
  })
  .catch(function (error) {
    
    console.log(error);
  })
  
};


// функція отримує посилання на книгу
// у аргументи функції додати ID обраної книги
// функція повертає обєкт
export const getBookById = (bookId) => {
    return axios.get(`https://books-backend.p.goit.global/books/${bookId}`)
  .then(function (response) {
    
    return response;
  })
  .catch(function (error) {
    
    console.log(error);
  })
  
};