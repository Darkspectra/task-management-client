
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const TaskForm = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    const handleCreateCoupon = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const title = form.title.value;
        const description = form.description.value;
        const priority = form.priority.value;
        const date = form.date.value;

        const newTask = { email, title, description, priority, date };
        console.log(newTask);

        fetch("https://task-management-server-seven-blond.vercel.app/createTask", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Success!',
                    text: 'Task Created!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate("/dashboard/userProfile")
            })
    }





    return (
        <div>

            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold">Create Task</h2>
                <form onSubmit={handleCreateCoupon}>
                    <div className="">
                        <div className="md:w-full">
                            <p className="text-2xl">Email</p>
                            <input className="input input-bordered w-full text-2xl font-bold" disabled defaultValue={user.email} name="email" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-2xl">Title</p>
                            <input className="input input-bordered w-full text-2xl font-bold" name="title" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-2xl">Description</p>
                            <input className="input input-bordered w-full text-2xl font-bold" name="description" />
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="md:w-full">
                            <p className="text-2xl">Priority</p>
                            <input className="input input-bordered w-full text-2xl font-bold" name="priority" />
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <p className="text-2xl">Date</p>
                            <input type="date" name="date" className="input input-bordered text-center" />
                        </div>
                    </div>
                    <input type="submit" value="Create" className="btn btn-block text-white bg-slate-500" />
                </form>
            </div>
        </div>
    );
};

export default TaskForm;