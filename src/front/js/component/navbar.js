// Navbar.js
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <div className="ml-auto">
                    <Link to="/signup">
                        <button className="btn btn-primary" style={{ marginLeft: "60rem" }}>Nuevo usuario</button>
                    </Link>
                    <Link to="/">
                        {store.auth === true ? <button onClick={() => actions.logout()} className="btn btn-danger" style={{ marginLeft: "1rem" }}>Cerrar sesión</button> : null}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

