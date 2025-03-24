import { createBrowserRouter } from "react-router";
import Home from "../pages/public-pages/Home";
import About from "../pages/public-pages/About";
import Skills from "../pages/public-pages/Skills";
import Works from "../pages/public-pages/Works";
import Contact from "../pages/public-pages/Contact";
import WorkDetails from "../pages/public-pages/WorkDetails";
import Error from "../pages/public-pages/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/about',
        element: <About></About>,
    },
    {
        path: '/skills',
        element: <Skills></Skills>,
    },
    {
        path: '/works',
        element: <Works></Works>,
    },
    {
        path: '/works/:id',
        element: <WorkDetails />,
    },
    {
        path: '/contact',
        element: <Contact></Contact>,
    },
    {
        path: '*',
        element: <Error></Error>,
    },
]);

export default router;