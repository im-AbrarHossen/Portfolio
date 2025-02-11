import { FaArrowRight } from "react-icons/fa";
import project1 from "../assets/images/Project1.png"
import project2 from "../assets/images/Project2.png"

const WorkSection = () => {
    return (
        <div className="pb-10 pt-[100px] w-11/12 mx-auto flex flex-col items-center gap-10">
            <button className="px-3 py-2 bg-[#970747] text-xl font-bold text-white rounded flex items-center justify-center gap-1 mb-5 w-full lg:w-[200px]"><FaArrowRight></FaArrowRight>My Works</button>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <div className="bg-gray-400 border rounded p-5">
                    <img className="w-full" src={project1} alt="" />
                    <p></p>
                    <div className="flex items-center justify-between mt-6">
                        <a className="btn text-white bg-[#970747] hover:bg-[#970747]" href="https://im-abrarhossen.github.io/B10A5-DOM/" target="_blank">Live Preview</a>
                        <a className="btn text-white bg-[#970747] hover:bg-[#970747]" href="https://github.com/im-AbrarHossen/B10A5-DOM.git" target="_blank">Github Repository</a>
                    </div>
                </div>
                <div className="bg-gray-400 border rounded p-5">
                    <img className="w-full" src={project2} alt="" />
                    <p></p>
                    <div className="flex items-center justify-between mt-6">
                        <a className="btn text-white bg-[#970747] hover:bg-[#970747]" href="https://im-abrarhossen.github.io/B10A3-Rinterio/" target="_blank">Live Preview</a>
                        <a className="btn text-white bg-[#970747] hover:bg-[#970747]" href="https://github.com/im-AbrarHossen/B10A3-Rinterio.git" target="_blank">Github Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSection;