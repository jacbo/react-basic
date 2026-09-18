import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import Article from "../page/Article";
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/article',
        element: <Article />
    }
])

export default router