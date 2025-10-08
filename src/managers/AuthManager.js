const BASE_URL = "http://localhost:8000";

function handleResponse(res) {
    if (res.ok) {
        // Try to parse JSON; if no JSON, resolve with empty object
        return res.text().then(text => text ? JSON.parse(text) : {});
    }

    // Non-2xx response: try to parse JSON body for more details, else include status text
    return res.text().then(text => {
        let body = text;
        try {
            body = text ? JSON.parse(text) : text;
        } catch (e) {
            // keep raw text
        }
        const error = new Error('HTTP error ' + res.status);
        error.status = res.status;
        error.statusText = res.statusText;
        error.body = body;
        throw error;
    });
}

export const loginUser = (user) => {
    return fetch(`${BASE_URL}/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(handleResponse);
}

export const registerUser = (user) => {
    return fetch(`${BASE_URL}/register/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(handleResponse);
}