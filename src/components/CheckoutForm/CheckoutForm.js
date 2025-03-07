import { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, phone, email
        };
        onConfirm(userData);
    };

    return (
        <div className="container">
            <form onSubmit={handleConfirm} className="checkout-form">
                <div className="field">
                    <label className="label">Nombre</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Ingrese su nombre" value={name} onChange={({ target }) => setName(target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Teléfono</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Ingrese su número de teléfono" value={phone} onChange={({ target }) => setPhone(target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="Ingrese su correo electrónico" value={email} onChange={({ target }) => setEmail(target.value)} />
                    </div>
                </div>

                <div className="field is-grouped my-5">
                    <p className="control">
                        <button className="button is-link">Enviar</button>
                    </p>
                    <p className="control">
                        <button type="button" className="button is-light">Cancel</button>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;