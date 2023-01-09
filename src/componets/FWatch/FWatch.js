import { useEffect, useState } from "react";
import { getFavoriteWatches } from "../../managers/FWatchManager";
import { useNavigate } from "react-router-dom";


export const Fwatch = () => {
    const [fwatches, setFWatches] = useState([])
    const navigate = useNavigate()
    const localChronosUser = localStorage.getItem("clipped_user")
    const ChronosUserObject = JSON.parse(localChronosUser)


    const getAllFavoriteWatches = () => {

        getFavoriteWatches().then(data => setFWatches(data))

        // if (ChronosUserObject?.id === fwatches.customerId) {
        // }

    }

    useEffect(() => {
        getAllFavoriteWatches()

    }, [])


    return (
        <>
            {fwatches.map(
                (fwatch) => {
                    return <div>
                        <img src={fwatch?.watch?.image}></img>
                    </div>
                }
            )}
        </>
    )
}