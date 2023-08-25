import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import NotFound from "./routes/NotFound";
import Random from "./routes/random/Random";
import Home from "./routes/home/Home";
import Search from "./routes/search/Search";
import Ticket from "./routes/ticket/Ticket";
import Profile from "./routes/user/Profile";
import Auth from "./routes/user/Auth";
import ViewPage from "./routes/view-page/ViewPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/view",
                element: <Random />,

            },
            {
                path: "/view/:mediaType/:id",
                element: <ViewPage />,
            },
            {
                path: "/",
                element: <Home />,
                loader: () => {
                    return Promise.resolve({

                    });
                }
            },
            {
                path: "search",
                element: <Search />,
            },
            {
                path: "ticket",
                element: <Ticket />,
            },
            {
                path: "user",
                element: <Auth />,
                children: [
                    {
                        path: ":id",
                        element: <Profile />,
                    }
                ]
            },
        ],
    }


]);

export default router;