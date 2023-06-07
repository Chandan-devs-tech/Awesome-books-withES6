import { myBook } from './book.js';
// import displayBooks from './display.js';

const removeBook = (e) => {
  const parentArticle = e.currentTarget.parentElement;
  myBook.bookListContainer.removeChild(parentArticle);
  myBook.arrayOfBooks = myBook.arrayOfBooks.filter(
    (item) => item.id !== parentArticle.dataset.id,
  );
  localStorage.setItem('arrayOfBooks', JSON.stringify(myBook.arrayOfBooks));
  // displayBooks();
};

export default removeBook;
