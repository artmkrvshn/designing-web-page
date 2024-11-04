document.addEventListener('DOMContentLoaded', function () {
    const bookCatalogue = document.getElementById('book-catalogue');

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.setAttribute('data-genre', book.genre);

        bookCard.innerHTML = `
            <img src="${book.cover}" alt="Cover of ${book.title}" class="book-cover">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">Author: ${book.author}</p>
            <p class="book-year">Year: ${book.year}</p>
            <p class="book-status">Status: ${book.status}</p>
        `;

        bookCatalogue.appendChild(bookCard);
    });
});

document.getElementById('search-button').addEventListener('click', function () {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const genreFilter = document.getElementById('genre-filter').value;
    const books = document.querySelectorAll('.book-card');

    books.forEach(book => {
        const title = book.querySelector('.book-title').textContent.toLowerCase();
        const author = book.querySelector('.book-author').textContent.toLowerCase();
        const genre = book.getAttribute('data-genre');

        if ((title.includes(searchTerm) || author.includes(searchTerm)) &&
            (genreFilter === "" || genre === genreFilter)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});