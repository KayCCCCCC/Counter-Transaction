import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Transactions, { transactionAction, transactionLoader } from "../pages/Transactions";
import Categories, { categoriesAction, categoryLoader } from "../pages/Categories";
import Auth from "../pages/Auth";
import { ProtectedRouter } from "../components/ProtectedRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "transactions",
                action: transactionAction,
                loader: transactionLoader,
                element: (
                    <ProtectedRouter>
                        <Transactions />
                    </ProtectedRouter>
                )
            },
            {
                path: "categories",
                action: categoriesAction,
                loader: categoryLoader,
                element: (
                    <ProtectedRouter>
                        <Categories />
                    </ProtectedRouter>
                )
            },
            {
                path: "auth",
                element: <Auth />
            },
        ]
    }
])