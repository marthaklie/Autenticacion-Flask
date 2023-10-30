import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<form>
				<div>
					<label> Usuario: </label>
					<input type="text" id="user" required />
				</div>
				<div>
					<label> Contraseña: </label>
					<input type="password" id="password" required />
				</div>
				<button type="submit"> Login </button>
			</form >

		</div >
	);
}

{/* // <div className="text-center mt-5">
		// 	<h1>Hello Rigo!!</h1>
		// 	<p>
		// 		<img src={rigoImageUrl} />
		// 	</p>
		// 	<div className="alert alert-info">
		// 		{store.message || "Loading message from the backend (make sure your python backend is running)..."}
		// 	</div>
		// 	<p>
		// 		This boilerplate comes with lots of documentation:{" "}
		// 		<a href="https://start.4geeksacademy.com/starters/react-flask">
		// 			Read documentation
		// 		</a>
		// 	</p>
		// </div>
		// <div> */}

