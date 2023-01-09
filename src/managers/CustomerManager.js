import { Navigate } from "react-router-dom"

export const getCustomers = () => {
    return fetch("http://localhost:8000/customers/currentCustomer", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const updateCustomers = (evt) => {

    return fetch(`http://localhost:8000/customers/currentCustomer`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(evt)
    })
}

