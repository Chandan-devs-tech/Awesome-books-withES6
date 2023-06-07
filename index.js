import { Booklist } from './modules/book.js';
import addItem from './modules/add.js';
import removeBook from './modules/remove.js';
import displayBooks from './modules/display.js';
import setTime from './modules/dateTime.js';

class App {
  constructor() {
    this.myBooklist = new Booklist();
    this.myBooklist.formBtn.addEventListener('click', this.myAddItem.bind(this));
  }

  myRemoveItem = () => {
    removeBook();
  };

  myDisplayItem = () => {
    displayBooks();
  };

  myAddItem = () => {
    addItem();
  };
}

const app = new App();
app.myDisplayItem();
setTime();
