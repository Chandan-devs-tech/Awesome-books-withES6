export class Booklist {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.arrayOfBooks = JSON.parse(localStorage.getItem('arrayOfBooks')) || [];
    this.titleInput = document.querySelector('#title');
    this.authorInput = document.querySelector('#author');
    this.formBtn = document.querySelector('.formBtn');
    this.listBtn = document.querySelector('.listBtn');
    this.addBtn = document.querySelector('.addBtn');
    this.contactBtn = document.querySelector('.contactBtn');
    this.bookListContainer = document.querySelector('.bookListContainer');
    this.formContainer = document.querySelector('.formContainer');
    this.contactSection = document.querySelector('.contactSection');
    this.listSection = document.querySelector('.listSection');
    this.addBtn.addEventListener('click', this.addShow.bind(this));
    this.contactBtn.addEventListener('click', this.contactShow.bind(this));
    this.listBtn.addEventListener('click', this.listShow.bind(this));
  }

  listShow() {
    this.listSection.classList.add('show');
    this.formContainer.classList.remove('show');
    this.contactSection.classList.remove('show');
  }

  contactShow() {
    this.contactSection.classList.add('show');
    this.listSection.classList.remove('show');
    this.formContainer.classList.remove('show');
  }

  addShow() {
    this.formContainer.classList.add('show');
    this.contactSection.classList.remove('show');
    this.listSection.classList.remove('show');
  }
}

export const myBook = new Booklist();