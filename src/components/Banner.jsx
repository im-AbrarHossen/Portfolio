import Typewriter from 'typewriter-effect';
import HiImage from "../assets/images/Hi.png"
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className='pt-[80px]'>
            <section className='w-11/12 mx-auto flex lg:flex-row flex-col items-center justify-between'>
                <div>
                    <h1 className='text-[60px] font-bold text-[#970747]'>
                        <Typewriter
                            options={{
                                strings: [`Hi I'm Abrar Hossen`],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className='text-[#970747] text-xl'>A passionate developer specializing in web development, design, and problem-solving.</p>
                    <div className="flex items-center gap-5 text-3xl my-5 text-[#970747]">
                        <a className='hover:border-[#970747] hover:border-2 hover:rounded-full hover:p-1' href="https://www.facebook.com/abrarhossen273" target="_blank"><FaFacebook></FaFacebook></a>
                        <a className='hover:border-[#970747] hover:border-2 hover:rounded-full hover:p-1' href="https://github.com/im-AbrarHossen" target="_blank"><FaGithub></FaGithub></a>
                        <a className='hover:border-[#970747] hover:border-2 hover:rounded-full hover:p-1' href="https://www.linkedin.com/in/im-AbrarHossen" target="_blank"><FaLinkedin></FaLinkedin></a>
                    </div>
                    <a href="https://drive.google.com/file/d/1_dWKK-6PHHFgtxU8x660nOIGrXHvYE3d/view?usp=sharing" className='btn btn-outline text-[#970747] font-bold border-[#970747] border-4 hover:border-none hover:bg-[#970747]' target='_blank'>View Resume</a>
                </div>
                <div>
                    <img src={HiImage} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Banner;