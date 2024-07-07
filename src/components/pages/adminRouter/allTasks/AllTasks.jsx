import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import useUser from "../../../hooks/useUser";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllTasks = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUser();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleAssign = (task, availableUser) => {
    if (user) {
      const assignedTask = {
        assignedUser: availableUser.name,
        assignedUserEmail: availableUser.email,
        taskName: task.task_name,
        description: task.details,
      };

      axiosPublic.post("/bookings", assignedTask).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "This Task is booked",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Oops!!! You aren't signed in. ",
        text: "To add this item to cart you have to sign in first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signIn", { state: location.pathname });
        }
      });
    }
  };

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
                  <div className="flex justify-end dropdown dropdown-end">
                    <button
                      tabIndex={0}
                      role="button"
                      className="btn btn-outline btn-primary"
                    >
                      Assign to
                    </button>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-12 w-52 p-2 shadow"
                    >
                      {users?.map((availableUser) => (
                        <li
                          onClick={() => handleAssign(task, availableUser)}
                          key={availableUser._id}
                          className="cursor-pointer p-2"
                        >
                          {availableUser.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllTasks;