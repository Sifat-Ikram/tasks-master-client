import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRunning = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch: refetchRunning, data: running = [] } = useQuery({
    queryKey: ["running"],
    queryFn: async () => {
      const res = await axiosPublic.get("/running");
      console.log(res.data);
      return res.data;
    },
  });
  return [running, refetchRunning];
};

export default useRunning;
