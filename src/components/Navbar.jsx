import { useContext } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from "../providers/ThemeProvider";
import { NavLink } from "react-router";
import { IoMenu } from "react-icons/io5";
import Logo from "../assets/images/LogoIcon.png"

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <div className="w-11/12 mx-auto py-2">
            <nav className="flex items-center justify-between dark:text-white">
                <div className="lg:hidden flex">
                    <details className="dropdown">
                        <summary className="btn bg-[#970747] text-white border-none"><IoMenu></IoMenu> </summary>
                        <ul className="menu dropdown-content bg-[#970747] rounded-box z-[1] w-52 p-2 shadow">
                            <NavLink
                                className={({ isActive }) =>
                                    `btn mb-1 ${isActive ? "bg-[#970747] text-white" : ""}`
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `btn mb-1 ${isActive ? "bg-[#970747] text-white" : ""}`
                                }
                                to="/about"
                            >
                                About Me
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `btn mb-1 ${isActive ? "bg-[#970747] text-white" : ""}`
                                }
                                to="/skills"
                            >
                                Skills
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `btn mb-1 ${isActive ? "bg-[#970747] text-white" : ""}`
                                }
                                to="/works"
                            >
                                Works
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `btn ${isActive ? "bg-[#970747] text-white" : ""}`
                                }
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </ul>
                    </details>
                </div>
                <div className="text-3xl font-extrabold flex items-center gap-1">
                    <img className="w-7" src={Logo} alt="" />
                    <h1 className="text-[#970747]">brar</h1>
                </div>
                <div className="lg:flex items-center gap-3 hidden">
                    <NavLink
                        className={({ isActive }) =>
                            `px-4 py-2 rounded ${isActive ? "bg-[#970747] text-white" : ""}`
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `px-4 py-2 rounded ${isActive ? "bg-[#970747] text-white" : ""}`
                        }
                        to="/about"
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `px-4 py-2 rounded ${isActive ? "bg-[#970747] text-white" : ""}`
                        }
                        to="/skills"
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `px-4 py-2 rounded ${isActive ? "bg-[#970747] text-white" : ""}`
                        }
                        to="/works"
                    >
                        Works
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `px-4 py-2 rounded ${isActive ? "bg-[#970747] text-white" : ""}`
                        }
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </div>
                <button
                    onClick={toggleDarkMode}
                    className="text-3xl btn bg-[#970747] hover:bg-[#c93f7d] border-none text-white">
                    {isDarkMode ? <CiLight></CiLight> : <CiDark></CiDark>}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;