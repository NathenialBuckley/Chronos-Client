import { useEffect, useState } from "react";
import { getCustomers, updateCustomers } from "../../managers/CustomerManager";

import Alert from 'react-bootstrap/Alert'
import "./Customer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, Row, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export const Customers = () => {
    const localClippedUser = localStorage.getItem("clipped_user")
    const ClippedUserObject = JSON.parse(localClippedUser)
    const [customers, setCustomers] = useState([])

    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: "",
        last_name: "",
        first_name: "",
        email: "",
        user: ClippedUserObject.id,
    })

    const getAllCustomers = () => {
        getCustomers().then(data => setCustomers(data))
    }




    useEffect(() => {
        getAllCustomers()

    }, [])


    return (
        <>
            <form>

                <div className="uploadForm">
                    <h2 className="uploadForm_title">Update Profile</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name:</label>
                            <input
                                required autoFocus
                                type="text"
                                name="first_name"
                                className="form-control"
                                value={customers.first_name}
                                onChange={
                                    (evt) => {
                                        const copy = { ...form }
                                        copy.first_name = evt.target.value
                                        setForm(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name:</label>
                            <input
                                required autoFocus
                                type="text"
                                name="last_name"
                                className="form-control"
                                value={customers.last_name}
                                onChange={
                                    (evt) => {
                                        const copy = { ...form }
                                        copy.last_name = evt.target.value
                                        setForm(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="last_name">Username:</label>
                            <input
                                required autoFocus
                                type="text"
                                name="username"
                                className="form-control"
                                value={customers.username}
                                onChange={
                                    (evt) => {
                                        const copy = { ...form }
                                        copy.username = evt.target.value
                                        setForm(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                required autoFocus
                                type="email"
                                name="email"
                                className="form-control"
                                value={customers.email}
                                onChange={
                                    (evt) => {
                                        const copy = { ...form }
                                        copy.email = evt.target.value
                                        setForm(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    {/* <fieldset>
                        <div className="form-group">
                            <label htmlFor="phone">Phone#:</label>
                            <input
                                required autoFocus
                                type="text"
                                name="phone"
                                className="form-control"
                                value={customers.phone}
                                onChange={
                                    (evt) => {
                                        const copy = { ...form }
                                        copy.phone = evt.target.value
                                        setForm(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                required autoFocus
                                type="text"
                                name="address"
                                className="form-control"
                                value={customers.address}
                                onChange={
                                    (evt) => {
                                        const copy = { ...form }
                                        copy.address = evt.target.value
                                        setForm(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input
                                required autoFocus
                                type="text"
                                name="city"
                                className="form-control"
                                value={customers.city}
                                onChange={
                                    (evt) => {
                                        const copy = { ...form }
                                        copy.city = evt.target.value
                                        setForm(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="state">State:</label>
                            <input
                                required autoFocus
                                type="text"
                                name="state"
                                className="form-control"
                                value={customers.state}
                                onChange={
                                    (evt) => {
                                        const copy = { ...form }
                                        copy.state = evt.target.value
                                        setForm(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="postalCode">Postal Code:</label>
                            <input
                                required autoFocus
                                type="text"
                                name="postalCode"
                                className="form-control"
                                value={customers.postalCode}
                                onChange={
                                    (evt) => {
                                        const copy = { ...form }
                                        copy.postalCode = evt.target.value
                                        setForm(copy)
                                    }
                                } />
                        </div>
                    </fieldset> */}
                </div>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()

                        const event = {
                            username: form.username,
                            last_name: form.last_name,
                            first_name: form.first_name,
                            email: form.email,
                            user: form.user
                        }
                        updateCustomers(event)
                            .then(() => navigate("/watches"))
                    }}
                    className="btn btn-primary">Update</button>
            </form>


        </>
    )

}
