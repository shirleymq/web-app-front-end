import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chess from "../components/chess/Chess";
import StringValue from "../components/string-value/StringValue";

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
    element: <StringValue />,
  },
]);
const MyRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MyRoutes;
