import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenarator } from "../utils/routesGenarator";
import { adminPath } from "./admin.route";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import {  AdminRoutes} from "./admin.route";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/admin",
        element:(
 
                <App/>
            
        ),
        children: routesGenarator(adminPath)
    },
    {
        path:"/faculty",
        element:<App/>,
        children:  routesGenarator(facultyPaths)
    },
    {
        path:"/student",
        element:<App/>,
        children:  routesGenarator(studentPaths)
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/Register",
        element:<Register/>
    },
])