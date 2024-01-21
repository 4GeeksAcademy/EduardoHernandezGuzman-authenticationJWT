import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import "../../styles/home.css";

export const LoginOk = () => {
    const { store, actions } = useContext(Context);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            setRedirect(true);
        }, 2000);

        return () => clearTimeout(redirectTimeout);
    }, []);

    return (
        <>
            {redirect ? <Navigate to="/paginaprivada" /> : null}
            <h2>Login realizado correctamente</h2>
            <h3>Redirigiendo a página privada...</h3>
        </>
    );
};

