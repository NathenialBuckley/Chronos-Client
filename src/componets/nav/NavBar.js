import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
// import "./NavBar.css";
import logo from "./Assets/watch.png";
import pfp from "./Assets/us2.png";

export const NavBar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-[#1B5060] text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="flex items-center space-x-4">
                    <div className="logoBox">
                        <Link to="/watches">
                            <img src={logo} alt="Logo" className="h-10" />
                        </Link>
                    </div>
                    <div className="searchBox relative">
                        <input
                            type="search"
                            placeholder="Search for any type, size, style of watch"
                            className="bg-gray-700 text-white py-2 px-4 rounded-full focus:outline-none w-64"
                        />
                        <i className="fas fa-search absolute right-3 top-3"></i>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="iconBox1 flex space-x-4">
                        <Link to="/watches"><i className="fa-solid fa-house text-xl"></i></Link>
                        <Link to="/customers"><i className="fa-solid fa-user-group text-xl"></i></Link>
                        <Link to="/favoritewatches"><i className="fa-solid fa-video text-xl"></i></Link>
                        <Link to="./https://krunker.io/?game=NY:pi1yl"><i className="fa-solid fa-crosshairs text-xl"></i></Link>
                    </div>
                    <div className="iconBox2 flex items-center space-x-4 relative" ref={menuRef}>
                        <Link to="/suggestion"><i className="fa-solid fa-circle-plus text-xl"></i></Link>
                        <i className="fa-brands fa-facebook-messenger text-xl"></i>
                        <i className="fa-solid fa-bell text-xl"></i>
                        <label><img src={pfp} className="h-10 w-10 rounded-full" /></label>
                        <i className="fa-solid fa-caret-down text-xl cursor-pointer" onClick={toggleMenu}></i>
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                                {localStorage.getItem("lu_token") !== null ? (
                                    <button
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left"
                                        onClick={() => {
                                            localStorage.removeItem("lu_token");
                                            navigate("/login");
                                        }}
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <>
                                        <Link className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100" to="/login">Login</Link>
                                        <Link className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100" to="/register">Register</Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
