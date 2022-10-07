import { createBrowserRouter } from "react-router-dom";
import Shop from "../components/Navbar/Shop/Shop";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {path: '/', element: <Main />, children: [
        {index: true, element: <Shop />},
        {path: '/shop', element: <Shop />}
    ]}
])