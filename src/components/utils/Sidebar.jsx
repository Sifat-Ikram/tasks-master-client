import { SquaresPlusIcon } from "@heroicons/react/24/solid";
import { VscSignIn } from "react-icons/vsc";
import { FaSignInAlt } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { GrTask } from "react-icons/gr";
import { GoSignIn } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import img from "../../assets/logo.png";
import useAdmin from "../hooks/useAdmin";

const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const handleSignOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="h-screen fixed top-20 w-20 border-r-2 border-primary/20">
      <div className="flex flex-col justify-start items-center gap-5 h-full py-5">
        <div className="w-10">
          <img alt="logo" src={img} className="cursor-pointer mb-8" />
        </div>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
              : "p-2 rounded-2xl group bg-primary text-white cursor-pointer transition-all"
          }
        >
          <div className="tooltip tooltip-right" data-tip="Home">
            <IoIosHome className="h-7 w-7 group-hover:text-white" />
          </div>
        </NavLink>

        {user && (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
                  : "p-2 rounded-2xl group bg-primary text-white cursor-pointer transition-all"
              }
            >
              <div className="tooltip tooltip-right" data-tip="Dashboard">
                <SquaresPlusIcon className="h-7 w-7 group-hover:text-white" />
              </div>
            </NavLink>
          </>
        )}

        {isAdmin && (
          <>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                isActive
                  ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
                  : "p-2 rounded-2xl group bg-primary text-white cursor-pointer transition-all"
              }
            >
              <div className="tooltip tooltip-right" data-tip="Users">
                <IoPersonSharp className="h-7 w-7 group-hover:text-white" />
              </div>
            </NavLink>
            <NavLink
              to="/addTask"
              className={({ isActive }) =>
                isActive
                  ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
                  : "p-2 rounded-2xl group bg-primary text-white cursor-pointer transition-all"
              }
            >
              <div className="tooltip tooltip-right" data-tip="Add Task">
                <MdAddTask className="h-7 w-7 group-hover:text-white" />
              </div>
            </NavLink>
            <NavLink
              to="/allTask"
              className={({ isActive }) =>
                isActive
                  ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
                  : "p-2 rounded-2xl group bg-primary text-white cursor-pointer transition-all"
              }
            >
              <div className="tooltip tooltip-right" data-tip="All Task">
                <GrTask className="h-6 w-7 group-hover:text-white" />
              </div>
            </NavLink>
          </>
        )}

        {!user && (
          <>
            <NavLink
              to="/signUp"
              className={({ isActive }) =>
                isActive
                  ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
                  : "p-2 rounded-2xl group bg-primary text-white cursor-pointer transition-all"
              }
            >
              <div className="tooltip tooltip-right" data-tip="Sign Up">
                <GoSignIn className="h-7 w-7 group-hover:text-white " />
              </div>
            </NavLink>
            <NavLink
              to="/signIn"
              className={({ isActive }) =>
                isActive
                  ? "p-2 rounded-2xl bg-primary text-white cursor-pointer"
                  : "p-2 rounded-2xl group bg-primary text-white cursor-pointer transition-all"
              }
            >
              <div className="tooltip tooltip-right" data-tip="Sign In">
                <VscSignIn className="h-7 w-7 group-hover:text-white " />
              </div>
            </NavLink>
          </>
        )}
        {user && (
          <>
            <button className="bg-primary p-2 text-white rounded-2xl ">
              <div className="tooltip tooltip-right" data-tip="Sign Out">
                <FaSignInAlt
                  onClick={handleSignOut}
                  className="h-7 w-7 group-hover:text-white "
                />
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
