
import { FaExclamation } from "react-icons/fa";
import useCurrentUserTask from "../../hooks/useCurrentUserTask";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const ManageTask = () => {
    const { currentUserTask } = useCurrentUserTask();
    const navigate = useNavigate();

    const handleDelete = event => {

        fetch(`https://task-management-server-seven-blond.vercel.app/task/${event._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your Task has been deleted.',
                        'success'
                    )
                    navigate('/dashboard/userProfile')
                }
            })
    }



    return (
        <div>
            <div>
                <h2 className="text-3xl mb-10 font-bold">Manage Task</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Ongoing Task</th>
                                <th>Description</th>
                                <th>Deadline</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentUserTask.length > 0 ? <>
                                    {currentUserTask.map((agg, index) => <tr key={agg._id}>
                                        <th>{index + 1}</th>
                                        <td>{agg.title}</td>
                                        <td>{agg.description}</td>
                                        <td>{agg.date}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(agg)}
                                                className="btn btn-ghost btn-lg">
                                                <FaExclamation className="text-red-600"></FaExclamation>
                                            </button>
                                        </td>
                                    </tr>)}
                                </> :
                                    <tr>
                                        <th>#</th>
                                        <td>None</td>
                                        <td>None</td>
                                        <td>None</td>
                                        <td>None</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageTask;