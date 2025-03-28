import { useState } from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Portofolio from "../Pages/Portofolio";
import ContactPage from "../Pages/Contact";
import ProjectDetails from "../components/ProjectDetail";
import WelcomeScreen from "../Pages/WelcomeScreen";
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
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2025{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  EkiZR™
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