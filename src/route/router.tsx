import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {  AdminRoutes} from "./admin.route";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/admin",
        element:<App/>,
        children: AdminRoutes
    },
    {
        path:"/faculty",
        element:<App/>,
        children: AdminRoutes
    },
    {
        path:"/student",
        element:<App/>,
        children: AdminRoutes
    },
])