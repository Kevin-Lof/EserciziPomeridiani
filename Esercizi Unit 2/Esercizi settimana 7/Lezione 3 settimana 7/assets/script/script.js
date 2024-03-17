function getBooks() {
    fetch('https://striveschool-api.herokuapp.com/books')
        .then(response => response.json())
        .then(books => displayBooks(books))
        .catch(error => console.error('Errore nella chiamata API:', error));
}


function displayBooks(books) {
    const bookListContainer = document.getElementById('bookList');



    books.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
        <div class="card">
          <img src="${book.img}" class="card-img-top" alt="${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Prezzo: ${book.price}</p>
            <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
            <button class="btn btn-success" onclick="addToCart('${book.title}', ${book.price})">Aggiungi al carrello</button>
          </div>
        </div>
      `;
        bookListContainer.appendChild(card);
    });
}


function removeCard(button) {
    const card = button.closest('.card');
    card.remove();
}

function addToCart(title, price) {
    const cartListContainer = document.getElementById('cartList');

    const cartItem = document.createElement('li');
    cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    `<button class="btn btn-danger" onclick="removeFromCart(this)">Rimuovi</button>`;

    cartListContainer.appendChild(cartItem);
    saveCartToStorage();
}


function removeFromCart(button) {
    const cartItem = button.closest('li');
    cartItem.remove();


    saveCartToStorage();
}

function saveCartToStorage() {
    const cartListContainer = document.getElementById('cartList');
    const cartItems = cartListContainer.querySelectorAll('li');


    const cart = [];
    cartItems.forEach(item => {
        const bookDetails = item.textContent.split(' - ');
        const book = {
            title: bookDetails[0],
            price: parseFloat(bookDetails[1])
        };
        cart.push(book);
    });


    localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', getBooks);