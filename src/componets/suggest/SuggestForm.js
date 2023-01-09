import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllWatchTypes } from "../../managers/SuggestManager";
import { createWatch } from "../../managers/SuggestManager";

export const SuggestionForm = () => {
    const navigate = useNavigate()
    const localChronosUser = localStorage.getItem("clipped_user")
    const ChronosUserObject = JSON.parse(localChronosUser)

    const [watchTypes, setWatchTypes] = useState([])


    const [currentWatch, setcurrentWatch] = useState({
        name: "",
        watchtypeId: 0,
        price: "",
        image: "",
        customerId: ChronosUserObject.id
    })

    useEffect(() => {
        getAllWatchTypes().then(data => setWatchTypes(data))
    }, [])

    // const changeWatchState = (domEvent) => {
    //     const copy = { ...currentWatch }
    //     copy.title = domEvent.target.value
    //     setcurrentWatch(copy)
    // }

    // const showWidget = (evt) => {
    //     evt.preventDefault()
    //     let widget = window.cloudinary.createUploadWidget({
    //         cloudName: `dm8zhvlrs`,
    //         uploadPreset: `pp1nvieo`
    //     },
    //         (error, result) => {
    //             if (!error && result && result.event === "success") {
    //                 console.log(result.info.url);
    //                 const copy = { ...currentWatch }
    //                 copy.image = result.info.url
    //                 setcurrentWatch(copy)
    //             }
    //         });
    //     widget.open()
    // }

    return (
        <form className="suggestForm">
            <h2 className="suggestForm_title">Suggest Your Watch!</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentWatch.name}
                        onChange={(evt) => {
                            const copy = { ...currentWatch }
                            copy.name = evt.target.value
                            setcurrentWatch(copy)
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="watchtype">Select Type: </label>
                    <select type="number" name="watchtype" required autoFocus className="form-control"
                        value={currentWatch.watchtypeId}
                        onChange={(evt) => {
                            const copy = { ...currentWatch }
                            copy.watchtypeId = evt.target.value
                            setcurrentWatch(copy)
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
                        value={currentWatch.price}
                        onChange={(evt) => {
                            const copy = { ...currentWatch }
                            copy.price = evt.target.value
                            setcurrentWatch(copy);
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">URL: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentWatch.image}
                        onChange={(evt) => {
                            const copy = { ...currentWatch }
                            copy.image = evt.target.value
                            setcurrentWatch(copy)
                        }}
                    />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    {watchTypes.map((watchType) => {
                        return (<>
                            <img src={watchType.image}></img>
                            <button
                                onClick={
                                    (evt) => {
                                        showWidget(evt)
                                    }}
                                className="btn btn-primary">
                                URL:
                            </button>
                        </>)
                    })}
                </div>
            </fieldset> */}
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    const watch = {
                        name: currentWatch.name,
                        watchTypeId: parseInt(currentWatch.watchtypeId),
                        price: currentWatch.price,
                        image: currentWatch.image,
                        customerId: parseInt(currentWatch.customerId)
                    }
                    createWatch(watch)
                        .then(() => navigate("/watches"))
                }}
                className="btn btn-primary">submit
            </button>
        </form>
    )
}










