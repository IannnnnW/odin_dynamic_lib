let myLibrary = [];

function Book(title, pages, author, isRead){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.isRead = isRead;
}

Book.prototype.info = function(){
    return `${this.title} was written by ${this.author}. It has ${pages} pages.
    Have I read it? ${this.isRead}
    `
}
//Selectors
const addBooksBtn = document.querySelector('#btn')
const form = document.querySelector('.form')

//Event Listeners
document.querySelector('.card-collection').addEventListener('click', (e)=>{
    removeBookFromUI(e.target);
})
document.querySelector('.card-collection').addEventListener('click', (e)=>{
    changeReadStatus(e.target)
})

addBooksBtn.addEventListener('click', ()=>{
    form.style.display = 'block'
})

function hideForm(){
    document.querySelector('.submit').addEventListener('click', ()=>{
    form.style.display = 'none'
    })        
}

document.querySelector('.submit').onclick = function(e){
    let title = document.getElementById('title').value;
    let pages = document.getElementById('pages').value;
    let author = document.getElementById('author').value;
    let isRead = document.querySelector('#options').value;
    
    // addBookToLib(title, pages, author, isRead)

    let book = new Book(title, pages, author, isRead)
    myLibrary.push(book);
    addBookToUI(book)

    hideForm()
    
    e.preventDefault()
}

function addBookToUI(singleBook){
    const bookCollection = document.querySelector('.card-collection')
    const div = document.createElement('div')
    div.className = 'card'
    div.innerHTML = `
    <h3>${singleBook.title}</h3>
    <h3>${singleBook.author}</h3>
    <h3>${singleBook.pages} pages</h3>
    <h3>Read it? ${singleBook.isRead}</h3>
    <button class="deleteBtn">Remove Book</button>
    <button class="changeStatus">Change Status</button>
    `
    bookCollection.append(div);
}

function changeReadStatus(target){
    console.log(target.previousSibling.previousSibling.previousSibling.previousSibling.textContent)
    if(target.className = 'changeStatus'){
        if(target.previousSibling.previousSibling.previousSibling.previousSibling.textContent == 'Read it? false'){
            target.previousSibling.previousSibling.previousSibling.previousSibling.textContent = 'Read it? true'
        } else{
            target.previousSibling.previousSibling.previousSibling.previousSibling.textContent = 'Read it? false'
        }
    }
}

function removeBookFromUI(target){
    if(target.className == 'deleteBtn'){
        target.parentElement.remove()
    }
}





