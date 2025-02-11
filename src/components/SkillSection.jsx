import { FaArrowRight } from "react-icons/fa";
import htmlIcon from "../assets/images/html5.png"
import cssIcon from "../assets/images/css3.png"
import canvaIcon from "../assets/images/canva.png"
import cppIcon from "../assets/images/cpp.png"
import figmaIcon from "../assets/images/figma.png"
import firebaseIcon from "../assets/images/firebase.png"
import gitIcon from "../assets/images/git.png"
import githubIcon from "../assets/images/github.png"
import javaIcon from "../assets/images/java.png"
import mongodbIcon from "../assets/images/mongodb.png"
import nodejsIcon from "../assets/images/nodejs.png"
import tailwindIcon from "../assets/images/tailwind.png"
import reactIcon from "../assets/images/react.png"

const SkillSection = () => {
    return (
        <div className="flex flex-col w-11/12 mx-auto py-10 items-center">
            <button className="px-3 py-2 text-xl font-bold bg-[#970747] text-white rounded flex items-center justify-center lg:w-[200px] w-full gap-1 mb-10"><FaArrowRight></FaArrowRight>Skills</button>
            <div className="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2  gap-5">
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={htmlIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">html5</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={cssIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">CSS3</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={canvaIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">Canva</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={cppIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">C++</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={figmaIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">Figma</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={firebaseIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">Firebase</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={gitIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">Git</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={githubIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">GitHub</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={javaIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">Java</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={mongodbIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">MongoDB</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={nodejsIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">NodeJS</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={tailwindIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[150px]" src={reactIcon} alt="" />
                    <p className="text-xl font-bold dark:text-white">React</p>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;