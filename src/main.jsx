import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./components/pages/home/HomePage.jsx";
import SignIn from "./components/pages/sign/SignIn.jsx";
import AuthProvider from "./components/provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUp from "./components/pages/sign/SignUp.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import AddTask from "./components/pages/adminRouter/addTask/AddTask.jsx";
import AllTasks from "./components/pages/adminRouter/allTasks/AllTasks.jsx";
import UserList from "./components/pages/adminRouter/userList/UserList.jsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/addTask",
        element: <AddTask />,
      },
      {
        path: "/user",
        element: <UserList />,
      },
      {
        path: "/allTask",
        element: <AllTasks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
