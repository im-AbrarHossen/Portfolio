import { FaArrowRight } from "react-icons/fa";
import photo from "../assets/images/Abrar.png"

const AboutSection = () => {
    return (
        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-[200px] gap-10 pb-10 pt-[100px] w-11/12 mx-auto">
            <div className="">
                <img className="w-[300px]" src={photo} alt="" />
            </div>
            <div className="lg:w-[50%] w-11/12">
                <button className="px-3 py-2 bg-[#970747] text-xl font-bold text-white rounded flex items-center justify-center gap-1 mb-5 w-full lg:w-[200px]"><FaArrowRight></FaArrowRight>About Me</button>
                <p className="text-lg dark:text-white lg:text-left text-center">Hi! I'm a front-end developer named Abrar Hossen, and I have a talent for making dynamic, responsive, and aesthetically pleasing websites. With my proficiency in cutting-edge front-end technologies like as Tailwind CSS, React, DaisyUI, and other UI elements, I work hard to provide flawless user experiences. To create dependable and expandable applications, I use Node.js with MongoDB on the backend. To keep ahead in the rapidly changing tech industry, I'm now studying and improving my skills. Whether it's creating cutting-edge platforms like Service Orbit or creating elegant designs for Film Fusion, I enjoy taking on new challenges and making concepts a reality. Together, we can make your vision a reality!</p>
            </div>
        </div>
    );
};

export default AboutSection;