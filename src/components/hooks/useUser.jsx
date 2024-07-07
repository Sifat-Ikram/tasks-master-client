import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useUser = () => {
    const axiosPublic = useAxiosPublic();

    const { refetch: refetchUser, data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get("/user")
            return res.data;
        }

    })
    return [users, refetchUser];
};

export default useUser;