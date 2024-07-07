import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: tasks = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tasks._id"],
    queryFn: async () => {
      const res = await axiosPublic.get("/task");
      return res.data;
    },
  });

  return (
    <div className="mt-24">
      <h1 className="text-6xl font-bold text-center">Featured Tasks</h1>
      <div className="grid grid-cols-1 space-y-7 mt-20 w-4/5 mx-auto">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error fetching data</div>
        ) : (
          tasks.map((task) => (
            <div key={task._id}>
              <div className="shadow-xl border-2 border-solid rounded-md">
                <div className="card-body">
                  <h2 className="card-title">Task: {task.task_name}</h2>
                  <p className="text-lg">
                    Added by{" "}
                    <span className="font-semibold">{task?.assigned}</span>
                  </p>
                  <p>
                    <span className="text-lg">Description:</span> {task.details}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
