import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => fetch('/public/data/categories.json')
            },
            {
                path: "/about",
                element: <About></About>
            },
        ]
    },
]);

export default router;