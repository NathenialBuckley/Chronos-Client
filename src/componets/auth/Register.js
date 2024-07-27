import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../managers/AuthManager";

import "./Login.css";

export const Register = () => {
    const firstName = useRef();
    const lastName = useRef();
    const username = useRef();
    const email = useRef();
    const city = useRef();
    const state = useRef();
    const address = useRef();
    const postalCode = useRef();
    const phone = useRef();
    const password = useRef();
    const verifyPassword = useRef();
    const passwordDialog = useRef();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "password": password.current.value,
                "email": email.current.value,
                "city": city.current.value,
                "state": state.current.value,
                "phone": phone.current.value,
                "postalCode": postalCode.current.value,
                "address": address.current.value
            };

            registerUser(newUser)
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("lu_token", res.token);
                        navigate("/watches");
                    }
                });
        } else {
            passwordDialog.current.showModal();
        }
    };

    return (
        <section className="bg-gradient">
            {/* Login Container */}
            <div className="login-container">
                {/* Form */}
                <div className="form-container">
                    <h2 className="font-bold text-[#1B5060] text-2xl">Register</h2>
                    <p className="text-sm mt-4 text-[#1B5060]">Join us today! Create an account to access exclusive features and stay updated.</p>

                    <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                        <input ref={firstName} type="text" id="first_name" className="p-2 mt-8 rounded-xl border w-full" name="first_name" placeholder="First Name" required autoFocus />
                        <input ref={lastName} type="text" id="last_name" className="p-2 rounded-xl border w-full" name="last_name" placeholder="Last Name" required />
                        <input ref={address} type="text" id="address" className="p-2 rounded-xl border w-full" name="address" placeholder="Address" required />
                        <input ref={city} type="text" id="city" className="p-2 rounded-xl border w-full" name="city" placeholder="City" required />
                        <input ref={state} type="text" id="state" className="p-2 rounded-xl border w-full" name="state" placeholder="State" required />
                        <input ref={postalCode} type="text" id="postalCode" className="p-2 rounded-xl border w-full" name="postal_code" placeholder="Postal Code" required />
                        <input ref={phone} type="text" id="phone" className="p-2 rounded-xl border w-full" name="phone" placeholder="Phone" required />
                        <input ref={email} type="text" id="email" className="p-2 rounded-xl border w-full" name="email" placeholder="Email" required />
                        <input ref={username} type="text" id="username" className="p-2 rounded-xl border w-full" name="username" placeholder="Username" required />
                        <input ref={password} type="password" id="password" className="p-2 rounded-xl border w-full" name="password" placeholder="Password" required />
                        <input ref={verifyPassword} type="password" id="verify_password" className="p-2 rounded-xl border w-full" name="verify_password" placeholder="Verify Password" required />
                        <button className="bg-[#1B5060] rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit">Register</button>
                    </form>

                    <div className="mt-3 text-xs flex justify-between items-center">
                        <p>If You Already Have An Account?</p>
                        <Link to="/login"><button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button></Link>
                    </div>
                </div>


            </div>

            <dialog ref={passwordDialog} className="rounded-xl border p-4">
                <p>Passwords do not match. Please try again.</p>
                <button onClick={() => passwordDialog.current.close()}>Close</button>
            </dialog>
        </section>
    );
};
