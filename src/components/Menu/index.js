import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
	return (
		<nav className="Menu">
			<Link to="/">
				<img className="Logo" src={logo} alt="Musicflix"/>
			</Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
		</nav>
	);
}

export default Menu;