import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../components/menu';

export default function MenuContainer() {
    return (
        <Menu>
            <Menu.PageContainer>
            <Link to="/">
				<Menu.Page>🔥 Popular Songs</Menu.Page>
			</Link>
			<Link to="/styles">
				<Menu.Page>💗 Styles</Menu.Page>
			</Link>
			<Link to="/add">
				<Menu.Page>🌚 Add</Menu.Page>
			</Link> 
			<Link to="/cart">
				<Menu.Page>🛒 Cart</Menu.Page>
			</Link>
            </Menu.PageContainer>
        </Menu>
    )
}