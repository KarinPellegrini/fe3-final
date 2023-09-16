import { useState } from "react";

const Form = (props) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");

    function validar(event) {
        event.preventDefault();

        // Expresión regular para validar el email
        const emailRegex = /^[a-zA-Z]{3,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;

        if (
            nombre.trim().length > 5 &&
            emailRegex.test(email) &&
            telefono.length > 0
        ) {
            setMensaje("");
            // Imprimir los datos por consola
            console.log("Nombre:", nombre);
            console.log("Email:", email);
            console.log("Teléfono:", telefono);

            props.agregar(nombre, email);
        } else {
            setMensaje("Por favor verifique su información nuevamente");
            props.agregar("", "");
        }
    }

    return (
        <form onSubmit={validar}>
            <label htmlFor="nombre">Nombre y Apellido </label>
            <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <label htmlFor="email">Email </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="telefono">Teléfono </label>
            <input
                type="number"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
            <button type="submit"> ENVIAR </button>
            {mensaje ? <p className="mensaje"> {mensaje} </p> : null}
        </form>
    );
};

export default Form;

