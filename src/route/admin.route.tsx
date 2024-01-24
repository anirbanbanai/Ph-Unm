
import { ReactNode } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";

type TRoutes = {
    path: string,
    element: ReactNode
}

 const AdminPath = [
    {
        name:"Dashboard",
        path:"dashboard",
        element: <AdminDashboard/>
    },
    {
        name:"user management",
        children: [
            {
                name:"Dashboard",
                path:"dashboard",
                element:<AdminDashboard/>
            },
            {
                name:"create-admin",
                path:"create-admin",
                element:<CreateAdmin/>
            },
            {
                name:"create-faculty",
                path:"create-faculty",
                element:<CreateFaculty/>
            },
            {
                name:"create-student",
                path:"create-student",
                element:<CreateStudent/>
            },
        ]
    }
]

export const AdminRoutes = AdminPath.reduce((acc: TRoutes[],item)=>{
    if(item.path && item.element){
        acc.push({
            path: item.path,
            element: item.element
        })
    }
    if(item.children){
        item.children.forEach((child)=>{
            acc.push({
                path: child.path,
                element: child.element
            })
        })
    }
    return acc
},[])

// export const AdminPaths =[
//         {
//             path:"dashboard",
//             element:<AdminDashboard/>
//         },
//         {
//             path:"create-admin",
//             element:<CreateAdmin/>
//         },
//         {
//             path:"create-faculty",
//             element:<CreateFaculty/>
//         },
//         {
//             path:"create-student",
//             element:<CreateStudent/>
//         },
//     ]
