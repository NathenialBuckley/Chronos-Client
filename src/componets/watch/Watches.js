import { useEffect, useState } from "react";
import { getWatches } from "../../managers/WatchManager";
import { Link } from "react-router-dom";

export const Watches = () => {
    const [watches, setWatches] = useState([])

    useEffect(() => {
        getWatches().then(data => setWatches(data))
    }, [])

    return (
        <article className="watches">
            {
                watches.map(watch => {
                    return <section key={`watch--${watch.id}`} className="watch">
                        <div className="watch_name">{watch.name} for {watch.price} <img className="watch_image" src={watch.image} /></div>
                    </section>
                })
            }
        </article>
    )

}