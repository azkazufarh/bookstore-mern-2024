import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/About',
                element: <h1>About</h1>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/cart',
                element: <PrivateRoute><CartPage /></PrivateRoute>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckoutPage /></PrivateRoute>
            },
            {
                path: '/orders',
                element: <PrivateRoute><OrderPage /></PrivateRoute>
            },
            {
                path: '/books/:id',
                element: <SingleBook />
            }
        ]
    }
])

export default router;