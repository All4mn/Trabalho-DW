document.getElementById('isbn-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const isbnInput = document.getElementById('isbn-input');
    const isbn = isbnInput.value.replace(/[^0-9Xx]/g, '').trim();
    const errorMessage = document.getElementById('error-message');
    const bookInfo = document.getElementById('book-info');
  
    errorMessage.textContent = '';
    bookInfo.innerHTML = '';
  
    if (!isbn) {
      errorMessage.textContent = 'Por favor, insira um ISBN.';
      return;
    }
  
    if (!/^\d{10}(\d{3})?$/.test(isbn)) {
      errorMessage.textContent = 'ISBN inválido. Deve conter 10 ou 13 dígitos.';
      return;
    }
  
    fetch(`https://brasilapi.com.br/api/isbn/v1/${isbn}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Livro não encontrado. Verifique o ISBN e tente novamente.');
        }
        return response.json();
      })
      .then(data => {
        const {
          title,
          subtitle,
          authors,
          publisher,
          year,
          page_count,
          synopsis,
          cover_url
        } = data;
  
        const authorsList = authors ? authors.join(', ') : 'N/A';
        const coverImage = cover_url ? `<img src="${cover_url}" alt="Capa do livro">` : '';
  
        bookInfo.innerHTML = `
          ${coverImage}
          <h2>${title}</h2>
          ${subtitle ? `<h3>${subtitle}</h3>` : ''}
          <p><strong>Autores:</strong> ${authorsList}</p>
          <p><strong>Editora:</strong> ${publisher}</p>
          <p><strong>Ano:</strong> ${year}</p>
          <p><strong>Páginas:</strong> ${page_count}</p>
          <p><strong>Sinopse:</strong> ${synopsis || 'Não disponível.'}</p>
        `;
      })
      .catch(error => {
        errorMessage.textContent = error.message;
      });
  });
  