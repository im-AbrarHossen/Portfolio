import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const WorkDetails = () => {
    const { id } = useParams();
    const [work, setWork] = useState(null);

    useEffect(() => {
        axios.get(`https://abrar-portfolio-server.vercel.app/works/${id}`)
            .then(res => setWork(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!work) {
        return <div className="text-center mt-10 text-xl">Loading...</div>;
    }

    return (
        <div>
            <header className="fixed top-0 left-0 right-0 bg-gray-200/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm z-50">
                <Navbar></Navbar>
            </header>
            <div className="flex justify-center items-center pt-[100px] pb-10">
                <div className="border rounded-lg shadow-md w-[80%] lg:w-[70%]">
                    <img src={work.image} alt={work.name} className="w-full h-[200px] lg:h-[500px] object-cover rounded" />
                    <div className="p-5">
                        <h2 className="text-2xl font-bold mt-3 dark:text-white">{work.name}</h2>
                        <p className="mt-2 text-gray-600 dark:text-white">{work.details.brief_description}</p>
                        <p className="mt-2 text-gray-600 dark:text-white"><span className="font-bold">Technology stack:</span> {work.details.technology_stack}</p>
                        <p className="mt-2 text-gray-600 dark:text-white"><span className="font-bold">Problems faced:</span> {work.details.problems_faced}</p>
                        <p className="mt-2 text-gray-600 dark:text-white"><span className="font-bold">Improvement plan:</span> {work.details.improvement_plan}</p>
                        <div className="flex flex-col items-center mt-5 gap-5">
                            <a href={work.details.live_link} className="btn w-full bg-[#970747] text-white" target="_blank">Live Preview</a>
                            <a href={work.details.client_github_repo} className="btn w-full bg-[#970747] text-white" target="_blank">Github Repository</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default WorkDetails;