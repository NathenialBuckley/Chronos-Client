export const getWatches = () => {
    return fetch("http://localhost:8000/watches", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleWatch = (id) => {
    return fetch(`http://localhost:8000/watches/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const updateWatch = (watch, id) => {
    return fetch(`http://localhost:8000/watches/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu-token")}`
        },
        body: JSON.stringify(watch)
    })
        .then(response => response.json())
}

export const getUpdatedWatchList = (setWatch) => {
    return fetch(`http://localhost:8000/watches`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then((res) => res.json())
        .then(data => setWatch(data))
}
