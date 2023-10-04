import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Login from "../Root/Components/Login/Login";
import Register from "../Root/Components/Register/Register";
import LoginWithGoogle from "../Root/Components/LoginWithGoogle/LoginWithGoogle";
import NewsDetails from "../Root/Components/NewsDetails/NewsDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => fetch('/public/data/categories.json'),

            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/news/:id",
                element: <NewsDetails></NewsDetails>,
                loader: async () => fetch('/public/data/news.json'),
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/loginWithGoogle",
                element: <LoginWithGoogle></LoginWithGoogle>
            },
        ]
    },
]);

export default router;