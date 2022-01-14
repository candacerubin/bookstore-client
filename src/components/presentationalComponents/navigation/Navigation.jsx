import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import * as style from './navigation.module.scss';

export default function Navigation() {
	return (
		<Menu>
			<Menu.Item as={Link} to={'/'}>
				Home
			</Menu.Item>
			<Menu.Item as={Link} to={'/books'}>
				Books
			</Menu.Item>
		</Menu>
	);
}
