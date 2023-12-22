
import { useQuery } from "@tanstack/react-query";
import useCurrentUser from "./useCurrentUser";
import useAxios from "./useAxios";


const useCurrentUserTask = () => {

    const[currentUser]=useCurrentUser()


    const axiosPublic = useAxios();
    
    const {data: task = []} = useQuery({
        queryKey: ['task'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/task');
            return res.data;
        }
    })

    console.log(task);

    
    const currentUserTask = task?.filter(person => person?.email === currentUser?.email);
    return {currentUserTask};
};

export default useCurrentUserTask;