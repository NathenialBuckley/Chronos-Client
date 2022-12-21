import { useNavigate } from "react-router-dom"


export const HandleSaveButtonClick = (evt) => {
    const navigate = useNavigate()
    evt.preventDefault()
    window.alert("Thank you for the suggestion!")

    return fetch('https://localhost:8000/watches', {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify
    })
        .then(() => {
            navigate("/")
        })
}

export const getAllWatchTypes = () => {
    return fetch('http://localhost:8000/watchtypes', {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createWatch = (watch) => {
    return fetch('http://localhost:8000/watches', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(watch)
    })
        .then(response => response.json())
}
