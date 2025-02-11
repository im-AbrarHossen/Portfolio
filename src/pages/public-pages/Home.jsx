import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SkillSection from "../../components/SkillSection";
import WorkSection from "../../components/WorkSection";
import Banner from "../../components/Banner";

const Home = () => {
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 bg-gray-200/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm z-50">
                <Navbar></Navbar>
            </header>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <SkillSection></SkillSection>
            <WorkSection></WorkSection>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;