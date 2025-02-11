import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const About = () => {
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 bg-gray-200/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm z-50">
                <Navbar></Navbar>
            </header>
            <AboutSection></AboutSection>
            <Footer></Footer>
        </div>
    );
};

export default About;