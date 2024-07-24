import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager";

import "./Login.css"

export const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: username.current.value,
            password: password.current.value
        }
        loginUser(user)
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("lu_token", res.token)
                    navigate("/watches")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <>
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <div className="cover">
                <h1>Login</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />

                <div className="login-btn" onSubmit={handleLogin}>Login</div>

                <p className="text">Or login using</p>

                <div className="alt-login">
                    <div className="facebook"></div>
                    <div className="google"></div>
                </div>

            </div>
        </>
    )
}

    // <main className="container--login">
    //     <dialog className="dialog dialog--auth" ref={invalidDialog}>
    //         <div>Username or password was not valid.</div>
    //         <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
    //     </dialog>
    //     <section>
    //         <form className="form--login" onSubmit={handleLogin}>
    //             <h1>Level Up</h1>
    //             <h2>Please sign in</h2>
    //             <fieldset>
    //                 <label htmlFor="inputUsername"> Username  </label>
    //                 <input ref={username} type="username" id="username" className="form-control" placeholder="Username" required autoFocus />
    //             </fieldset>
    //             <fieldset>
    //                 <label htmlFor="inputPassword"> Password </label>
    //                 <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
    //             </fieldset>
    //             <fieldset style={{
    //                 textAlign: "center"
    //             }}>
    //                 <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
    //             </fieldset>
    //         </form>
    //     </section>
    //     <section className="link--register">
    //         <Link to="/register">Not a member yet?</Link>
    //     </section>
    // </main>

