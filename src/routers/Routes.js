import { createBrowserRouter } from "react-router-dom";
import Inventory from "../components/Inventory/Inventory";
import LogIn from "../components/LogIn/LogIn";
import Orders from "../components/Orders/Orders";
import Shipping from "../components/Shipping/Shipping";
import Shop from "../components/Shop/Shop";
import SignUp from "../components/SignUp/SignUp";
import Main from "../Layout/Main";
import { ProductsAndCartLoader } from "../Loader/ProductsAndCartLoader";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                index: true,
                loader: ProductsAndCartLoader,
                element: <Shop />
            },
            {
                path: '/shop',
                loader: ProductsAndCartLoader,
                element: <Shop />
            },
            {
                path: '/orders',
                loader: ProductsAndCartLoader,
                element: <Orders />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/inventory',
                element: <Inventory />
            },
            {
                path: '/shipping',
                element: <PrivateRoute>
                    <Shipping />
                </PrivateRoute>
            }
        ]
    }
])