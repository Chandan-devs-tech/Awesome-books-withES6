import { myBook } from './book.js';
import displayBooks from './display.js';

const addItem = () => {
  const value1 = myBook.titleInput.value;
  const value2 = myBook.authorInput.value;
  const bookId = new Date().getTime().toString();

  if (myBook.bookListContainer.length === 0) {
    myBook.bookListContainer.style.display = 'none';
  }

  if (value1 !== '' && value2 !== '') {
    const book = {
      title: value1,
      id: bookId,
      author: value2,
    };
    myBook.arrayOfBooks.unshift(book);
    displayBooks();
    localStorage.setItem('arrayOfBooks', JSON.stringify(myBook.arrayOfBooks));
    myBook.titleInput.value = '';
    myBook.authorInput.value = '';
  }
  myBook.listSection.classList.remove('show');
};

export default addItem;