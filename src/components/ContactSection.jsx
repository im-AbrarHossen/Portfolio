import { FaArrowRight, FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const ContactSection = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 py-10 w-11/12 mx-auto">
            <button className="px-3 py-2 bg-[#970747] text-xl font-bold text-white rounded flex items-center justify-center gap-1 mb-5 w-full lg:w-[200px]"><FaArrowRight></FaArrowRight>Contact Me</button>
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="bg-[#f9c7dd] p-5 h-[200px]">
                    <p className="flex items-center gap-3"><FaPhone></FaPhone>+8801642753890</p>
                    <p className="flex items-center gap-3"><TfiEmail></TfiEmail>abrarhossen93@gmail.com</p>
                    <p className="flex items-center gap-3"><IoLocationSharp></IoLocationSharp>Dhaka, Bangladesh</p>
                </div>
                <div className="">
                    <form className="">
                        <div className="form-control mb-6">
                            <input type="text" placeholder="Write Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-6">
                            <input type="email" placeholder="Write Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <button className="btn bg-[#970747] text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;