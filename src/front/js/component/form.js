import React, { useState } from "react";

const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // Aquí puedes realizar la lógica de autenticación con el correo electrónico y la contraseña
        console.log("Email:", email);
        console.log("Password:", password);







        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify (
            {
                "email": email,
                "password": password
            }
            )    
                
        };

        fetch("https://psychic-goggles-jj5rq4v797452r64-3001.app.github.dev/api/login", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));









    };

    return (
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
    );
};

export default Form;
