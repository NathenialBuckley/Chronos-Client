import { useEffect, useState } from "react";
import { getFavoriteWatches } from "../../managers/FWatchManager";
import { useNavigate } from "react-router-dom";


export const Fwatch = () => {
    const [fwatches, setFWatches] = useState([])
    const navigate = useNavigate()


    const getAllFavoriteWatches = () => {
        getFavoriteWatches().then(data => setFWatches(data))
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