import { useEffect, useState } from "react";
import { getWatches, deleteWatch, saveWatch } from "../../managers/WatchManager";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Watch.css"
import pfp from "./Assets/us2.png"
import pfp2 from "./Assets/us.png"
import pfp3 from "./Assets/us3.png"
import pfp4 from "./Assets/us4.png"
import story from "./Assets/storywatch.jpg"
import story2 from "./Assets/storywatch2.jpg"
import story3 from "./Assets/storywatch3.jpg"
import story4 from "./Assets/storywatch4.jpg"
import feed from "./Assets/feedwatch.jpg"
import feed2 from "./Assets/feed2.jpg"
import feed3 from "./Assets/feed3.jpg"
import messenger from "./Assets/messenger.png"
import insta from "./Assets/instagram.png"
import love from "./Assets/love.png"
import like from "./Assets/like.png"
import group1 from "./Assets/gg.png"
import group2 from "./Assets/gg2.png"
import group3 from "./Assets/gg3.png"
import game1 from "./Assets/game.png"
import game2 from "./Assets/game2.png"
import group from "./Assets/group.jpg"
import UPFP from "./Assets/user.png"


export const Watches = () => {
    const [watches, setWatches] = useState([])

    const getAllWatches = () => {
        getWatches().then(data => setWatches(data))
    }


    useEffect(() => {
        getAllWatches()
    }, [])

    const likeWatch = (watch) => {
        saveWatch(watch).then(data => setWatches(data))
            .then(() => {
                getAllWatches()
            })
    }

    const removeWatch = (watch) => {
        deleteWatch(watch.id)
            .then(() => {
                getAllWatches()
            })
    }

    return (

        <div className="home">
            <div className="container">
                <div className="home-weapper">

                    <div className="home-left">

                        <div className="profile">
                            <img src={pfp}></img>
                            <h3>Aaron Bridell</h3>
                        </div>

                        <div className="pages">
                            <h4 className="mini-headign">Pages</h4>
                            <label>
                                <img src={messenger}></img>
                                <span>messenger</span>
                            </label>
                            <label>
                                <img src={insta}></img>
                                <span>instagram</span>
                            </label>
                            <button className="see-more-btn">See more <i className="fa-solid fa-angle-down"></i></button>
                        </div>

                        <div class="group">
                            <h4 class="mini-headign">Group</h4>
                            <label>
                                <img src={group1} />
                                <span>Graphic design</span>
                            </label>

                            <label>
                                <img src={group2} />
                                <span>website design</span>
                            </label>

                            <label>
                                <img src={group3} />
                                <span>Random</span>
                            </label>
                            <button class="see-more-btn">See more <i class="fa-solid fa-angle-down"></i></button>
                        </div>

                        <div class="games">
                            <h4 class="mini-headign">Games</h4>
                            <label>
                                <img src={game1} />
                                <span>Facebook games</span>
                            </label>
                            <label>
                                <img src={game2} />
                                <span>Free Play Games</span>
                            </label>
                            <button class="see-more-btn">See more <i class="fa-solid fa-angle-down"></i></button>
                        </div>

                        <div class="explore">
                            <h4 class="mini-headign">Explore</h4>

                            <Link><i class="fa-solid fa-user-group"></i> Group</Link>
                            <Link><i class="fa-solid fa-star"></i> Favorites</Link>
                            <Link><i class="fa-solid fa-bookmark"></i> Saves</Link>
                            <Link><i class="fa-solid fa-clock"></i> Events</Link>
                            <Link><i class="fa-solid fa-flag"></i> Pages</Link>

                            <div><label class="darkTheme"> <span></span></label> Apply Dark Theme</div>

                            <button class="see-more-btn">See more <i class="fa-solid fa-angle-down"></i></button>
                        </div>
                    </div>

                    {/* Home center starts here */}

                    <div className="home-center">
                        <div className="home-center-wrapper">
                            <div className="stories">
                                <h3 className="mini-headign">Stories</h3>
                                <div className="stories-wrapper">

                                    <div className="single-stories">
                                        <label><img src={pfp} /></label>
                                        <div>
                                            <img src={pfp} />
                                            <i class="fa-solid fa-circle-plus"></i>
                                            <b>Create Stories</b>
                                        </div>
                                    </div>

                                    <div class="single-stories">
                                        <label><img src={pfp2} /></label>
                                        <div>
                                            <img src={story} />
                                            <b>Dewie Farlham</b>
                                        </div>
                                    </div>

                                    <div class="single-stories">
                                        <label><img src={pfp3} /></label>
                                        <div>
                                            <img src={story2} />
                                            <b>Modesta Northern</b>
                                        </div>
                                    </div>

                                    <div class="single-stories">
                                        <label><img src={pfp4} /></label>
                                        <div>
                                            <img src={story3} />
                                            <b>Sherline Lattka</b>
                                        </div>
                                    </div>

                                    <div class="single-stories">
                                        <label><img src={pfp} /></label>
                                        <div>
                                            <img src={story4} />
                                            <b>Aaron Bridell</b>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="createPost">

                                <h3 className="mini-headign">Create Post</h3>
                                <div className="post-text">
                                    <img src={pfp} />
                                    <input type="text-area" placeholder="What's on your mind, Aaron?" />
                                </div>
                            </div>

                            {watches?.map(
                                (watch) => {
                                    return <div className="fb-post1">
                                        <div className="fb-post1-container">
                                            <div className="fb-post1-header">

                                            </div>
                                            <div className="fb-p1-main">
                                                <div className="post-title">
                                                    <img src={watch.customer.image} alt={UPFP} />
                                                    <ul>
                                                        <li><h3>{watch.customer.user.username}</h3></li>
                                                        <li><span>03 January at 2:11 PM</span></li>
                                                    </ul>
                                                    <p>{watch.name}</p>
                                                </div>

                                                <div className="post-images">
                                                    <div className="post-images1">
                                                        <img src={watch.image} alt="nice" />
                                                        <div className="like-comment">
                                                            <ul>
                                                                <div className="btn-save"><FontAwesomeIcon icon={faHeart} onClick={() => { likeWatch(watch) }} /> </div>
                                                                <div className="btn-save"><FontAwesomeIcon icon={faTrashAlt} onClick={() => { removeWatch(watch) }} /> </div>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="like-comment">
                                                <ul>
                                                    <li>
                                                        <img src={love} />
                                                        <img src={like} />
                                                    </li>
                                                    <li><i className="fa-regular fa-comment-dots"></i></li>
                                                    <li><i className="fa-solid fa-share-from-square"></i></li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>
                                }
                            )}

                        </div>
                    </div>

                    <div className="home-right">
                        <div className="home-right-wrapper">

                            <div className="event-friend">
                                <div className="event">
                                    <h3 className="heading">Top Watch of the Week!</h3>
                                    <img src={story2} />
                                    <div className="event-date">
                                        <h3>21 <b>March</b></h3>
                                        <h4>Posted by <span>ADRIAN</span></h4>
                                    </div>
                                    <button><i className="fa-regular fa star"></i> Congratulate</button>
                                </div>

                                <hr />
                                <div className="friend">
                                    <h3 className="heading">Friend Request</h3>
                                    <ul>
                                        <li><img src={pfp3} /></li>
                                        <li>
                                            <b>Dewie Farlham</b>
                                            <p>I like your taste, be my friend?</p>
                                            <button>confirm</button><button className="friend-remove">remove</button>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="create-page">
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-circle-plus"></i>
                                        <h4>Create a Watch Group</h4>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </li>
                                    <li>
                                        <img src={group} />
                                    </li>
                                    <li>
                                        <b>The Tick Titains <span>200k Members</span></b>
                                        <button>Join Group</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
{/* <article className="watches">
    {
        watches.map(watch => {
            return <section key={`watch--${watch.id}`} className="watch">
                <div className="watch_name">{watch.name} for {watch.price} <img className="watch_image" src={watch.image} /></div>
            </section>
        })
    }
</article> */}