async function main(){
    const response = await fetch('http://localhost:3000/book')
    const json = await response.json();

    const bookList = document.querySelector('.book-list');

    json.forEach(book => {
        const listItem = document.createElement('li');
        const bookTitle = document.createElement('h3');
        const bookAuthor = document.createElement('p');
        const bookDescription = document.createElement('p');
        const readButton = document.createElement('button');
        readButton.addEventListener('click', addToLibrary)

        bookTitle.textContent = book.title;
        bookAuthor.textContent = `Autor: ${book.author}`;
        bookDescription.textContent = `Gênero: ${book.genre}, Páginas: ${book.pages}`;
        readButton.textContent = 'Ler Livro';
        readButton.classList.add('read-button');

        listItem.appendChild(bookTitle);
        listItem.appendChild(bookAuthor);
        listItem.appendChild(bookDescription);
        listItem.appendChild(readButton);

        bookList.appendChild(listItem);
    });
}

function insert(tree, title, book) {
    if (!tree[title]) {
        tree[title] = { book: book, left: {}, right: {} };
    } else if (title < tree[title].book.title) {
        insert(tree[title].left, title, book);
    } else {
        insert(tree[title].right, title, book);
    }
}

function search(tree, title) {
    if (tree[title]) {
        return tree[title].book;
    }

    const keys = Object.keys(tree);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (title < key) {
            return search(tree[key].left, title);
        } else if (title > key) {
            return search(tree[key].right, title);
        }
    }

    return null;
}

async function addToLibrary(event) {
    try {
        const parent = event.target.closest('li');
        const bookName = parent.querySelector('h3').textContent;

        const response = await fetch('http://localhost:3000/book');
        const books = await response.json();

        const bookTree = {};

        books.forEach(book => {
            insert(bookTree, book.title, book);
        });

        const bookData = search(bookTree, bookName);
        if (bookData) {
            const read = {
                id: bookData.id,
                userId: 1,
                isbn: bookData.isbn,
                pagesRead: 0
            }

            fetch('http://localhost:3000/read/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(read)
            })
        } else {
            console.error('Livro não encontrado');
        }
    } catch (error) {
        console.error('Erro ao processar os dados:', error);
    }
}

main();


function sendBookData(book) {
    const bookJson = {
        isbn: book.isbn,
        title: book.title,
        author: book.author,
        genre: book.genre,
        pages: book.pages,
        isAvailable: book.isAvailable
    };

    fetch('http://localhost:3000/book/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookJson)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Livro enviado com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar o livro:', error);
    });
}

main();