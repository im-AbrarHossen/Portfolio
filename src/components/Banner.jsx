import Typewriter from 'typewriter-effect';
import HiImage from "../assets/images/Hi.png"
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Resume from "../assets/PDF-files/resume.pdf";

const Banner = () => {
    return (
        <div className='pt-[80px]'>
            <section className='w-11/12 mx-auto flex lg:flex-row flex-col items-center justify-between'>
                <div>
                    <h1 className='text-[60px] font-bold dark:text-white'>
                        <Typewriter
                            options={{
                                strings: [`Hi I'm Abrar`],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className='dark:text-white'>A passionate developer specializing in web development, design, and problem-solving.</p>
                    <div className="flex items-center gap-5 text-3xl my-5 dark:text-white">
                        <a href="https://www.facebook.com/abrarhossen273" target="_blank"><FaFacebook></FaFacebook></a>
                        <a href="https://github.com/im-AbrarHossen" target="_blank"><FaGithub></FaGithub></a>
                        <a href="https://www.linkedin.com/in/im-AbrarHossen" target="_blank"><FaLinkedin></FaLinkedin></a>
                    </div>
                    <a href={Resume} className='px-3 py-2 bg-[#970747] text-xl font-bold text-white rounded hover:bg-[#c93f7d]' download="Abrar_Hossen_Resume.pdf">Download Resume</a>
                </div>
                <div>
                    <img src={HiImage} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Banner;