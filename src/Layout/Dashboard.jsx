import { FaCalendar, FaHome, FaList, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-blue-200">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userProfile">
                            <FaHome></FaHome>
                            User Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageTask">
                            <FaCalendar></FaCalendar>
                            Manage Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/createTask">
                            <FaList></FaList>
                            Create Task</NavLink>
                    </li>

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            <FaSearch></FaSearch>
                            About</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;