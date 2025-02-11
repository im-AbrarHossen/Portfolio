import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router";

const WorkSection = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        axios.get("https://abrar-portfolio-server.vercel.app/works")
            .then(res => setWorks(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="pb-10 pt-[100px] w-11/12 mx-auto flex flex-col items-center gap-10">
            <button className="px-3 py-2 bg-[#970747] text-xl font-bold text-white rounded flex items-center justify-center gap-1 mb-5 w-full lg:w-[200px]">
                <FaArrowRight /> My Works
            </button>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                {works.map(work => (
                    <div key={work._id} className="border p-4 rounded-lg shadow-md flex flex-col items-center">
                        <img src={work.image} alt={work.name} className="w-full h-48 object-cover rounded-md" />
                        <h2 className="text-xl font-semibold mt-3 dark:text-white">{work.name}</h2>
                        <Link to={`/works/${work._id}`} className="mt-3 px-4 py-2 bg-[#970747] text-white rounded">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkSection;