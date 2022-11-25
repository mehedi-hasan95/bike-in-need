import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Error from "../Pages/Error/Error";
import SingleCategory from "../Pages/Home/Categories/SingleCagegory/SingleCategory";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {path: '/', element: <Home></Home>},
        {path: 'dashboard', element: <PrivetRouter><Dashboard></Dashboard></PrivetRouter>},
        {path: 'categories/:category', element: <PrivetRouter><SingleCategory></SingleCategory></PrivetRouter>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.category}`)
      },
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},
        {path: '*', element: <Error></Error>}
      ]
    },
  ]);

export default router;