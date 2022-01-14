import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default function Books() {
	const [books, setBooks] = React.useState([]);

	React.useEffect(
		() => {
			// will execute with it mounts
			axios
				.get('http://localhost:3000/products/books')
				.then(({ data }) => {
					if (data.books) {
						setBooks(data.books);
					}
				})
				.catch((error) => console.log(error));
			return () => {
				// will execute when component unmounts
				console.log('books unmounted');
				setBooks([]);
			};
		},
		// dependency array
		[]
	);

	return (
		<div>
			<h1>Book Inventory</h1>
			{books.map((book) => (
				<Link to={`/books/${book._id.toString()}`}>
					<h2 key={book._id.toString()}>{book.title}</h2>
				</Link>
			))}
		</div>
	);
}
