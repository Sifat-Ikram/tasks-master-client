// import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  //   const axiosPublic = useAxiosPublic();
//   const navigate = useNavigate();
//   const location = useLocation();

  return (
    <div className="w-5/6 mx-auto mt-28 mb-10 space-y-10">
      {/* <div className="grid grid-cols-1 space-y-7">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error fetching data</div>
        ) : (
          paginatedTasks.map((task) => (
            <div key={task._id} data-aos="fade-up">
              <div className="shadow-xl border-2 border-solid">
                <div className="card-body">
                  <h2 className="card-title">Task: {task.name}</h2>
                  <p className="text-lg font-semibold">
                    Added by {task?.addedName}
                  </p>
                  <p>
                    <span className="text-lg font-semibold">Description:</span>{" "}
                    {task.description}
                  </p>
                  <div className="flex justify-end">
                    <button
                      className="btn btn-outline btn-primary"
                    //   onClick={() => handleBook(task)}
                    >
                      Add this task to to do list
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div> */}
    </div>
  );
};

export default HomePage;
