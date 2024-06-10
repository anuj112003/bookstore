// import React, { useState, useEffect } from 'react';

// function BookSearch({ addToBookshelf }) {
//   const [query, setQuery] = useState('');
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     if (query) {
//       fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
//         .then(response => response.json())
//         .then(data => setBooks(data.docs));
//     }
//   }, [query]);

//   return (
//     <div>
//       <h1>Book Search</h1>
//       <input
//         type="text"
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//         placeholder="Search for a book..."
//       />
//       <div>
//         {books.map(book => (
//           <div key={book.key} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
//             <h2>{book.title}</h2>
//             <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
//             <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BookSearch;

import React, { useState, useEffect } from 'react';
import './Booksearch.css'
function BookSearch({ addToBookshelf }) {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
    
  fetch(`https://openlibrary.org/search.json?q= the&limit=10&page=1`)
        .then(response => response.json())
        .then(data => setBooks(data.docs));
  useEffect(() => {
    if (query) {
      const getuser = async()=>{
      const user =  await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => response.json())
        .then(data => setBooks(data.docs));
      }
      getuser();
       
    }
  }, [query]);

  return (
    <div className='top'>
      <h1>Search by book name</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a book..."
      className='input'/>
      <div className='cards'>
        {books.map(book => (
          <div className='cards1' key={book.key} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h2>{book.title.length>50 ?`${book.title.substring(0,40)}...` :book.title }</h2>
            <p >Edition Count:{book.edition_count ? book.edition_count : 'Unknown'}</p>
            <button className='button' onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookSearch;

