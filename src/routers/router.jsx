import { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Portofolio from "../pages/Portofolio";
import ContactPage from "../pages/Contact";
import ProjectDetails from "../components/ProjectDetail";
import WelcomeScreen from "../pages/WelcomeScreen";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/Background";
import { AnimatePresence } from "framer-motion";
import Error from "../pages/Error";
import { createBrowserRouter } from "react-router";

const LandingPage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          <footer className="bg-[#030014]">
            <center>
              <hr className="py-3 border-gray-400 opacity-15 sm:mx-auto lg:py-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2025{" "}
                <a href="https://abrar-hossen-portfolio.web.app/" target="_blank" className="cursor-pointer hover:underline">
                  AbrarHossen™
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetails />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;