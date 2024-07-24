import { useEffect, useState } from "react";
import { getCustomers, updateCustomers } from "../../managers/CustomerManager";
import "./Customer.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export const Customers = () => {
    const localClippedUser = localStorage.getItem("clipped_user")
    const ClippedUserObject = JSON.parse(localClippedUser)
    const [customers, setCustomers] = useState([])

    const navigate = useNavigate()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
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
                                defaultValue={customers?.user?.first_name}
                                onChange={
                                    (evt) => {
                                        const copy = { ...customers }
                                        copy.user.first_name = evt.target.value
                                        setCustomers(copy)
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
                                defaultValue={customers?.user?.last_name}
                                onChange={
                                    (evt) => {
                                        const copy = { ...customers }
                                        copy.user.last_name = evt.target.value
                                        setCustomers(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                required autoFocus
                                type="text"
                                name="username"
                                className="form-control"
                                defaultValue={customers?.user?.username}
                                onChange={
                                    (evt) => {
                                        const copy = { ...customers }
                                        copy.user.username = evt.target.value
                                        setCustomers(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="email"> Email:</label>
                            <input
                                required autoFocus
                                type="email"
                                name="email"
                                className="form-control"
                                defaultValue={customers?.user?.email}
                                onChange={
                                    (evt) => {
                                        const copy = { ...customers }
                                        copy.user.email = evt.target.value
                                        setCustomers(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                    {/* <fieldset>
                        <div className="form-group">
                            <label htmlFor="image"> PFP:</label>
                            <input
                                required autoFocus
                                type="text"
                                name="image"
                                className="form-control"
                                defaultValue={customers.user.image}
                                onChange={
                                    (evt) => {
                                        const copy = { ...customers}
                                        copy.image = evt.target.value
                                        setCustomers(copy)
                                    }
                                } />
                        </div>
                    </fieldset> */}
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="phone">Phone#:</label>
                            <input
                                required autoFocus
                                type="text"
                                name="phone"
                                className="form-control"
                                defaultValue={customers.phone}
                                onChange={
                                    (evt) => {
                                        const copy = { ...customers }
                                        copy.phone = evt.target.value
                                        setCustomers(copy)
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
                                defaultValue={customers.address}
                                onChange={
                                    (evt) => {
                                        const copy = { ...customers }
                                        copy.address = evt.target.value
                                        setCustomers(copy)
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
                                defaultValue={customers.city}
                                onChange={
                                    (evt) => {
                                        const copy = { ...customers }
                                        copy.city = evt.target.value
                                        setCustomers(copy)
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
                                defaultValue={customers.state}
                                onChange={
                                    (evt) => {
                                        const copy = { ...customers }
                                        copy.state = evt.target.value
                                        setCustomers(copy)
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
                                defaultValue={customers.postalCode}
                                onChange={
                                    (evt) => {
                                        const copy = { ...customers }
                                        copy.postalCode = evt.target.value
                                        setCustomers(copy)
                                    }
                                } />
                        </div>
                    </fieldset>
                </div>
                <button type="submit"
                    onClick={(evt) => {
                        evt.preventDefault()

                        const event = {
                            first_name: customers.user.first_name,
                            last_name: customers.user.last_name,
                            username: customers.user.username,
                            email: customers.user.email,
                            phone: customers.phone,
                            address: customers.address,
                            city: customers.city,
                            state: customers.state,
                            postalCode: customers.postalCode,
                            user: customers.user
                        }
                        updateCustomers(event)
                            .then(() => navigate("/watches"))
                    }}
                    className="btn btn-primary">Update</button>
            </form>


        </>
    )

}
