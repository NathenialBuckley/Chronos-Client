import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager";
import LoginWatch from "./assets/watch2jpg.jpg"

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