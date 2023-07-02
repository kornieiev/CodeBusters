

// звідси стартуєм усю роботу з бекендом
import axios from 'axios';
import Notiflix from 'notiflix';

const baseUrl = 'https://books-backend.p.goit.global/books';
// функція отримує посилання на категорії
// функція повертає обєкт
export async function getCategories () {
    try {
      const response = await axios.get(`${baseUrl}/category-list`)
            
        return response;
      
    } catch (error) {
      console.log(error);
    Notiflix.Notify.failure('Oops!!! ERROR', {
      width: '500px',
      timeout: '5000',
      fontSize: '25px',
      opacity: 0.7,
    });
   
  }
  
};

/// функція отримує посилання на популярні книги
// функція повертає обєкт
export async function getBooksAllCategories () {
    try {
      const response = axios.get(`${baseUrl}/top-books`)
              
        return response;
      
    }
  catch (error) {
    
    console.log(error);
    Notiflix.Notify.failure('Oops!!! ERROR', {
      width: '500px',
      timeout: '5000',
      fontSize: '25px',
      opacity: 0.7,
    });
  }
  
};



// функція отримує посилання на книги окремої категорії
// у аргументи функції додати обрану категорію
// функція повертає обєкт
export async function getBooksByCategory (category) {
    try {
      const response = axios.get(`${baseUrl}/category?category=${category}`)
      
        return response;
      
    }
  catch (error) {
    
    console.log(error);
    Notiflix.Notify.failure('Oops!!! ERROR', {
      width: '500px',
      timeout: '5000',
      fontSize: '25px',
      opacity: 0.7,
    });
  }

};


// функція отримує посилання на книгу
// у аргументи функції додати ID обраної книги
// функція повертає обєкт
export async function getBookById (bookId) {
    try {
      const response =  axios.get(`${baseUrl}/${bookId}`)
  
    return response;
  
    }
  catch (error) {
    
    console.log(error);
    Notiflix.Notify.failure('NO BOOK FOUND', {
      width: '500px',
      timeout: '5000',
      fontSize: '25px',
      opacity: 0.7,
    });
  }
  
};
