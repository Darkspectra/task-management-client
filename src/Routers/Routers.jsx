import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../Pages/UserProfile/UserProfile";
import TaskForm from "../Pages/TaskForm/TaskForm";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: "login",
                element: <Login></Login>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'userProfile',
            element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute> 
          },
          {
            path: 'createTask',
            element: <PrivateRoute><TaskForm></TaskForm></PrivateRoute>
          }
]
}
]);