export const getFavoriteWatches = () => {
    return fetch(`http://localhost:8000/favoritewatches`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}