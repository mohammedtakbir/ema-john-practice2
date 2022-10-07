import { createBrowserRouter } from "react-router-dom";
import Shop from "../components/Shop/Shop";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                index: true,
                loader: () => {
                    return fetch('products.json')
                },
                element: <Shop />
            },
            {
                path: '/shop',
                loader: () => {
                    return fetch('products.json')
                },
                element: <Shop />
            }
        ]
    }
])