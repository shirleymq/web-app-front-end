import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chess from "../components/chess/Chess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/problem-1",
    element: <Chess />,
  },
  {
    path: "/problem-2",
    element: <div>Problem 2</div>,
  },
]);
const MyRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MyRoutes;
