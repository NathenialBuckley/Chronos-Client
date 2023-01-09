import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./NavBar.css"
import logo from "./Assets/watch.png"
import pfp from "./Assets/us2.png"

export const NavBar = () => {
    const navigate = useNavigate()
    return (

        <header>
            <div className="header-container">
                <div className="header-wrapper">
                    <div className="logoBox">
                        <Link to="/watches"><img src={logo} alt="" /></Link>
                    </div>
                    <div className="searchBox">
                        <input type="search" placeholder="Search for any type, size, style of watch"></input>
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="iconBox1">
                        <Link to="/watches"><i className="fa-solid fa-house"></i></Link>
                        <Link to="/customers"><i className="fa-solid fa-user-group"></i></Link>
                        <Link to="/favoritewatches"><i className="fa-solid fa-video"></i></Link>
                        <Link to="./https://krunker.io/?game=NY:pi1yl"><i className="fa-solid fa-crosshairs"></i></Link>
                    </div>
                    <div className="iconBox2">
                        <Link to="/suggestion"><i className="fa-solid fa-circle-plus"></i></Link>
                        <i className="fa-brands fa-facebook-messenger"></i>
                        <i className="fa-solid fa-bell"></i>
                        <label><img src={pfp} /></label>
                        <i className="fa-solid fa-caret-down">
                            {
                                (localStorage.getItem("lu_token") !== null) ?
                                    <ul className="nav-item">
                                        <button className="nav-link fakeLink"
                                            onClick={() => {
                                                localStorage.removeItem("lu_token")
                                                navigate('/login')
                                            }}
                                        >Logout</button>
                                    </ul> :
                                    <>
                                        <Link className="nav-link" to="/login">Login</Link>
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </>
                            }
                        </i>
                    </div>
                </div>
            </div>
        </header>

        /* <body className="overview">
            <nav>
                <div className="container">
                    <h2 className="logo">
                        <Link className="Link" to="/watches">Chronos</Link>
                    </h2>
                    <div className="search-bar">
                        <i className="uil uil-search"></i>
                        <input type="search" placeholder="Search for any type, size, style of watch" />
                    </div>
                    <ul className="navbar__item">
                        <Link className="nav-link" to="/suggestion">Suggest</Link>
                    </ul>
                    <ul className="navbar__item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </ul>
                    {
                        (localStorage.getItem("lu_token") !== null) ?
                            <ul className="nav-item">
                                <button className="nav-link fakeLink"
                                    onClick={() => {
                                        localStorage.removeItem("lu_token")
                                        navigate('/login')
                                    }}
                                >Logout</button>
                            </ul> :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                    }
                </div>
            </nav>
        </body> */
    )
}