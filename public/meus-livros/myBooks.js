document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/read');
        const books = await response.json();
        console.log(books)

        const bookList = document.querySelector('.book-list');

        books.forEach(book => {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            const authorP = document.createElement('p');
            const descriptionP = document.createElement('p');

            h3.textContent = book.title;
            authorP.textContent = `ISBN: ${book.isbn}`;
            descriptionP.textContent = `Páginas: ${book.pagesRead}`;

            li.appendChild(h3);
            li.appendChild(authorP);
            li.appendChild(descriptionP);

            bookList.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao buscar os livros:', error);
    }
});
