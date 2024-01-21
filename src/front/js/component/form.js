import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleLogin = () => {

        console.log("Email:", email);
        console.log("Password:", password);

        actions.login(email, password)

    };



    return (
        <>
        {store.auth === true ? "Estás logueado correctamente" : "No estás logueado correctamente"}
        <div className="container mt-5">
            <h1>Login</h1>
            <br></br>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </form>
        </div>
        </>
    );
};

export default Form;
