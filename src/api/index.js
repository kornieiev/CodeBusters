import axios from 'axios';
import { Notify } from 'notiflix';

const BASE_URL = axios.create({
  baseURL: "https://books-backend.p.goit.global"
});

export async function fetchCategoriesList() {
  try {
    const response = await BASE_URL.get("/books/category-list");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getBooksAllCategories() {
  try {
    const response = await BASE_URL.get("/books/top-books");
    return response;
  } catch (error) {
    console.log(error);
    Notify.failure('Oops!!! ERROR', {
      width: '500px',
      timeout: '5000',
      fontSize: '25px',
      opacity: 0.7,
    });
    throw error;
  }
}

export async function getBooksByCategory(category) {
  try {
    const response = await BASE_URL.get(`/books/category?category=${category}`);
    return response;
  } catch (error) {
    console.log(error);
    Notify.failure('Oops!!! ERROR', {
      width: '500px',
      timeout: '5000',
      fontSize: '25px',
      opacity: 0.7,
    });
    throw error;
  }
}

export async function getBookById(bookId) {
  try {
    const response = await BASE_URL.get(`/books/${bookId}`);
    return response;
  } catch (error) {
    console.log(error);
    Notify.failure('NO BOOK FOUND', {
      width: '500px',
      timeout: '5000',
      fontSize: '25px',
      opacity: 0.7,
    });
    throw error;
  }
}

