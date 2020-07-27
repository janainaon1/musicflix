import React from 'react';
import logo from '../../assets/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
	return (
		<nav className="Menu">
			<a href="/">
				<img className="Logo" src={logo} alt="Musicflix"/>
			</a>

      <ButtonLink className="ButtonLink" href="/">
        Novo vídeo 2
      </ButtonLink>
		</nav>
	);
}

export default Menu;