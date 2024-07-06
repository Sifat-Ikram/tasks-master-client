import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";


const useRunning = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { refetch: refetchRunning, data: running = [] } = useQuery({
        queryKey: ['running', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/running?email=${user.email}`)
            return res.data;
        }

    })
    return [running, refetchRunning];
};

export default useRunning;