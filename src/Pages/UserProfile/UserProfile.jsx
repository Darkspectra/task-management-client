
import useCurrentUser from "../../hooks/useCurrentUser";
import useCurrentUserTask from "../../hooks/useCurrentUserTask";
import SectionTitle from "../SectionTitle/SectionTitle";


const UserProfile = () => {
    const [currentUser] = useCurrentUser();
    const { currentUserTask } = useCurrentUserTask();
    return (
        <div>
            <div className="avatar">
                <div className="w-80 rounded-full items-center ml-80">
                    <img src={currentUser?.photo} />
                </div>
            </div>
            <SectionTitle heading={currentUser?.name} subHeading={currentUser?.email}></SectionTitle>
            <div>
                <h2 className="text-3xl mb-10 font-bold">Task Content</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Deadline</th>
                                <th>Priority</th>
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
                                        <td>{agg.priority}</td>
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

export default UserProfile;