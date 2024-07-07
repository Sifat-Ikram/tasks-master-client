import { useQuery } from "@tanstack/react-query";
import { FaUserGraduate } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserList = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/user");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
          refetch();
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: `${user.name} is admin now!`,
              text: "",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/user/${user._id}`).then((res) => {
          refetch;
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "User Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto py-10 mt-20">
      <div className="text-center">
        <h1 className="uppercase text-5xl font-bold mt-10">all users</h1>
      </div>
      <div className="p-2 mt-10">
        <div className="overflow-x-auto mt-3">
          <table className="table">
            {/* head */}
            <thead className="bg-primary rounded-sm">
              <tr>
                <th className="text-base font-semibold text-white"></th>
                <th className="text-base font-semibold text-white">Name</th>
                <th className="text-base font-semibold text-white">Email</th>
                <th className="text-base font-semibold text-white">Role</th>
                <th className="text-base font-semibold text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div>{user.email}</div>
                    </div>
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <FaUserGraduate
                        onClick={() => handleMakeAdmin(user)}
                        className="text-4xl bg-[#ac7e13af] text-white p-2 cursor-pointer rounded-md"
                      ></FaUserGraduate>
                    )}
                  </td>
                  <td>
                    <MdDelete
                      onClick={() => handleDelete(user)}
                      className="text-4xl cursor-pointer bg-red-700 text-white p-2 rounded-md"
                    ></MdDelete>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;