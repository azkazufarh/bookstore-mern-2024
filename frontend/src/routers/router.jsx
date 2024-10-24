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
import AdminLogin from "../components/AdminLogin";
import AdminRoute from "./AdminRoute";

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
    },
    {
        path: '/admin',
        element: <AdminLogin />
    },
    {
        path: '/dashboard',
        element: <div>Dashboard</div>,
        children: [
            {
                path: '',
                element: <AdminRoute><div>Home</div></AdminRoute>
            },
            {
                path: 'add-book',
                element: <AdminRoute><div>Add new book</div></AdminRoute>
            },
            {
                path: 'edit-book/:id',
                element: <AdminRoute><div>Edit book</div></AdminRoute>
            },
            {
                path: 'manage-book',
                element: <AdminRoute><div>Manage Book</div></AdminRoute>
            }
        ]
    }
])

export default router;