import { myBook } from './book.js';
import removeBook from './remove.js';

const displayBooks = () => {
  myBook.bookListContainer.innerHTML = '';
  myBook.arrayOfBooks.forEach((book) => {
    const article = document.createElement('article');
    article.classList.add('bookListItems');
    const attr = document.createAttribute('data-id');
    attr.value = book.id;
    article.setAttributeNode(attr);
    article.innerHTML = `<p class="bookList">"${book.title}" by "${book.author}"</p>
                        <button class="removeBtn" type="button">Remove</button>`;
    myBook.bookListContainer.appendChild(article);
    myBook.bookListContainer.style.display = 'block';
    const removeBtn = document.querySelectorAll('.removeBtn');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', removeBook);
    });
  });
  myBook.listSection.classList.add('show');
};

export default displayBooks;