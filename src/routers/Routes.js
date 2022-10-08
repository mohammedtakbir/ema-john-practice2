import { createBrowserRouter } from "react-router-dom";
import Orders from "../components/Orders/Orders";
import Shop from "../components/Shop/Shop";
import Main from "../Layout/Main";
import { ProductsAndCartLoader } from "../Loader/ProductsAndCartLoader";

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
            }
        ]
    }
])