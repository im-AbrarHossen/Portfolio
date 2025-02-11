import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="bg-[#970747] p-5 text-white flex flex-col items-center gap-10">
            <div className="text-3xl font-extrabold">&lt;Abrar /&gt;</div>
            <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center gap-5 text-xl">
                <Link to='/'>Home</Link>
                <Link to='/about'>About Me</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/works'>Works</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className="flex items-center justify-center gap-5 text-2xl">
                <a href="https://www.facebook.com/abrarhossen273" target="_blank"><FaFacebook></FaFacebook></a>
                <a href="https://github.com/im-AbrarHossen" target="_blank"><FaGithub></FaGithub></a>
                <a href="https://www.linkedin.com/in/im-AbrarHossen" target="_blank"><FaLinkedin></FaLinkedin></a>
            </div>
            <div className="flex items-center justify-center text-center text-sm">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Abrar</p>
            </div>
        </div>
    );
};

export default Footer;