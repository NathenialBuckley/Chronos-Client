import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllWatchTypes } from "../../managers/SuggestManager";
import { createWatch } from "../../managers/SuggestManager";

export const SuggestionForm = () => {
    const navigate = useNavigate()
    const localChronosUser = localStorage.getItem("clipped_user")
    const ChronosUserObject = JSON.parse(localChronosUser)

    const [watchTypes, setWatchTypes] = useState([])

    const [currentWatchType, setCurrentWatchType] = useState({
        name: "",
        watchtypeId: 0,
        price: "",
        customerId: ChronosUserObject.id
    })

    useEffect(() => {
        getAllWatchTypes().then(data => setWatchTypes(data))
    }, [])

    const changeWatchState = (domEvent) => {
        const copy = { ...currentWatchType }
        copy.title = domEvent.target.value
        setCurrentWatchType(copy)
    }

    return (
        <form className="suggestForm">
            <h2 className="suggestForm_title">Suggest Your Watch!</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentWatchType.name}
                        onChange={(evt) => {
                            const copy = { ...currentWatchType }
                            copy.name = evt.target.value
                            setCurrentWatchType(copy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="watchtype">Select Type: </label>
                    <select type="number" name="watchtype" required autoFocus className="form-control"
                        value={currentWatchType.watchtypeId}
                        onChange={(evt) => {
                            const copy = { ...currentWatchType }
                            copy.watchtypeId = evt.target.value
                            setCurrentWatchType(copy)
                        }} >
                        <option value="0"></option>
                        {watchTypes.map((watchType) => {
                            return (
                                <option value={watchType.id} key={watchType.id}>
                                    {watchType.type}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" required autoFocus className="form-control"
                        value={currentWatchType.price}
                        onChange={(evt) => {
                            const copy = { ...currentWatchType }
                            copy.price = evt.target.value
                            setCurrentWatchType(copy);
                        }} />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    const watch = {
                        name: currentWatchType.name,
                        watchTypeId: parseInt(currentWatchType.watchtypeId),
                        price: currentWatchType.price,
                        customerId: parseInt(currentWatchType.customerId)
                    }
                    createWatch(watch)
                        .then(() => navigate("/"))
                }}
                className="btn btn-primary">submit
            </button>
        </form >
    )
}









