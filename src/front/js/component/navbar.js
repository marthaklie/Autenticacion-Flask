import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">				
					<span className="navbar-brand mb-0 h1">MangaRoll</span>				
				<div className="ml-auto">					
						<button className="btn">Cerrar sesión</button>
					
				</div>
			</div>
		</nav>
	);
};
