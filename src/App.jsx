import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.scss';
import { Navigation } from './components/';
import { HomePage, BooksPage, ViewBookPage } from './pages/';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navigation />
				<Route exact path={'/'} component={HomePage} />
				<Route exact path={'/books'} component={BooksPage} />
				<Route path={'/books/:bookId'} component={ViewBookPage} />
			</Router>
		</div>
	);
}

export default App;
