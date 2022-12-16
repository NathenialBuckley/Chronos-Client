import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SuggestionForm = () => {
    const navigate = useNavigate()
    const localChronosUser = localStorage.getItem("clipped_user")
    const ChronosUserObject = JSON.parse(localChronosUser)
    const [watchtypes, updateWatchtypes] = useState([])

    const [userInput, updateUserInput] = useState({
        name: "",
        watchtypeId: 0,
        price: "",
        customerId: ChronosUserObject.id,
    })

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
        window.alert("Thank you for the suggestion!")

        return fetch('https://localhost:8000/watches', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInput)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/")
            })
    }

    useEffect(
        () => {
            fetch('http://localhost:8000/watchtypes')
                .then(response => response.json())
                .then((watchtypes) => {
                    updateWatchtypes(watchtypes)
                })
        }, []
    )


    return (
        <form className="suggestForm">
            <h2 className="suggestForm_title">Suggest Your Watch!</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name"> Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={userInput.name}
                        onChange={
                            (evt) => {
                                const copy = { ...userInput }
                                copy.name = evt.target.value
                                updateUserInput(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="watchtype"> Type: </label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = { ...userInput }
                                copy.watchtypeId = parseInt(evt.target.value)
                                updateUserInput(copy)
                            }
                        }>
                        <option value={0}>
                            Select Type
                        </option>
                        {
                            watchtypes.map(
                                watchtype => <option
                                    keys={watchtype.id}
                                    value={watchtype.id}>
                                    {watchtype.watchtypeName}
                                </option>
                            )
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price"> Price: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={userInput.price}
                        onChange={
                            (evt) => {
                                const copy = { ...userInput }
                                copy.price = evt.target.value
                                updateUserInput(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) =>
                    handleSaveButtonClick(clickEvent)}
                className="btn-btn-primary">
                Submit Suggestion
            </button>
        </form>
    )
}