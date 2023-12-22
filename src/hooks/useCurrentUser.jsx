import useAuth from "./useAuth";
import useMembers from "./useMembers";



const useCurrentUser = () => {

    const { user } = useAuth();
    const [users] = useMembers();

    const currentUser = users?.filter(person => person?.email === user?.email);
    
    return currentUser;
};

export default useCurrentUser;