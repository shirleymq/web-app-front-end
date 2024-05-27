import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chess from "../components/chess/Chess";
import StringValue from "../components/string-value/StringValue";
import { Home } from "../components/Home";
import { Layout } from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/problem-1", element: <Chess /> },
      { path: "/problem-2", element: <StringValue /> },
    ],
  },
]);
const MyRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MyRoutes;
