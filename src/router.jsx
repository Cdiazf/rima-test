import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Layout from "./layouts/Layout";
import Register from "./pages/Register/Register";
import Plans from "./pages/Plans/Plans.jsx";
import Summary from "./pages/Summary/Summary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      { 
        path: "/plans",
        element:<Plans/>,
      },
      {
        path: "/summary",
        element:<Summary/>,
      }
    ],
  },
]);

export default router;
