import React from 'react';

import './App.css';
import axios from 'axios';

function App() {
	const [books, setBooks] = React.useState([]);

	React.useEffect(() => {
		axios
			.get('http://localhost:3000/products/books')
			.then(({ data }) => {
				if (data) {
					setBooks(data.books);
					console.log(data.books);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className='App'>
			{books.map((book, i) => (
				<h1 key={i}>{book.title}</h1>
			))}
		</div>
	);
}

export default App;
