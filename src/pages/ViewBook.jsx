import axios from 'axios';
import React from 'react';

import { Dimmer, Loader } from 'semantic-ui-react';

export default function ViewBook(props) {
	const [book, setBook] = React.useState(null);
	React.useEffect(() => {
		axios
			.get(`http://localhost:3000/products/books/${props.match.params.bookId}`)
			.then(({ data }) => {
				if (data.book) {
					setBook(data.book);
				}
			})
			.catch((error) => console.log(error));
	}, [props.match.params.bookId]);
	console.log(book);
	return book ? (
		<div>
			<h1>{book.title}</h1>
		</div>
	) : (
		<Dimmer active inverted>
			<Loader inverted />
		</Dimmer>
	);
}
