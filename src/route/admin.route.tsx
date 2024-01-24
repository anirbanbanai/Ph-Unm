
import { ReactNode } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoutes = {
    path: string,
    element: ReactNode
}

type TSidebarItems ={
    key: string;
    label: ReactNode;
    children?: TSidebarItems[]
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

export const AdminSidebarItems = AdminPath.reduce((acc: TSidebarItems[],item)=>{
    if(item.path && item.name){
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        })
    }
    if(item.children){
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child)=>({
            key: child.name,
            label:  <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
        }))
      })
    }
    return acc
},[])

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
