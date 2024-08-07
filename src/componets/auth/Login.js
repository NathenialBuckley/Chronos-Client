import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../managers/AuthManager";
import LoginWatch from "./assets/watch2jpg.jpg";

import "./Login.css";

export const Login = () => {
    const username = useRef();
    const password = useRef();
    const invalidDialog = useRef();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username: username.current.value,
            password: password.current.value
        };
        loginUser(user)
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("lu_token", res.token);
                    navigate("/watches");
                } else {
                    invalidDialog.current.showModal();
                }
            });
    };

    return (
        <section className="bg-gradient">
            {/* Login Container */}
            <div className="login-container">
                {/* Form */}
                <div className="form-container">
                    <h2 className="font-bold text-[#1B5060] text-2xl">Login</h2>
                    <p className="text-sm mt-4 text-[#1B5060]">If You Are Already A Member, Easily Log In</p>

                    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                        <input ref={username} type="text" id="username" className="p-2 mt-8 rounded-xl border w-full" name="username" placeholder="Username" required autoFocus />
                        <input ref={password} type="password" id="password" className="p-2 rounded-xl border w-full" name="password" placeholder="Password" required />
                        <button className="bg-[#1B5060] rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit">Log in</button>
                    </form>
                    <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
                        <hr className="border-gray-500" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-500" />
                    </div>
                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" viewBox="0 0 48 48">
                            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>Login With Google</button>

                    <div className="mt-10 text-xs border-b border-gray-400 py-4">Forgot your password?</div>

                    <div className="mt-3 text-xs flex justify-between items-center">
                        <p>If you Don't Have An Account?</p>
                        <Link to="/register"><button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button></Link>
                    </div>
                </div>

                {/* Image */}
                <div className="image-container">
                    <img className="rounded-2xl" src={LoginWatch} alt="Login Illustration" />
                </div>
            </div>

            {/* Invalid login dialog */}
            <dialog ref={invalidDialog} className="rounded-xl border p-4">
                <p>Invalid login credentials. Please try again.</p>
                <button onClick={() => invalidDialog.current.close()}>Close</button>
            </dialog>
        </section>
    );
};
