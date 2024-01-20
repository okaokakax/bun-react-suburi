import { createBrowserRouter } from "react-router-dom"; 
import AboutPage from "./routes/AboutPage";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import AppLayout from "./AppLayout";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: (
            <AppLayout>
                <ErrorPage />
            </AppLayout>
        ),
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
        ]
    },
    
])

export default router;