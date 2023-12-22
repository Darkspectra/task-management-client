import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-management-server-seven-blond.vercel.app'
})

const useAxios = () => {
    return axiosPublic;
};

export default useAxios;