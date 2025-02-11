import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import WorkSection from "../../components/WorkSection"

const Works = () => {
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 bg-gray-200/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm z-50">
                <Navbar></Navbar>
            </header>
            <WorkSection></WorkSection>
            <Footer></Footer>
        </div>
    );
};

export default Works;