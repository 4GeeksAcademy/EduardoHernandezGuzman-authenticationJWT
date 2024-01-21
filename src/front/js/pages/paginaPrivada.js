import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const PaginaPrivada = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
        <h1>Bienvenido al contenido secreto</h1>
        </>
	);
};
