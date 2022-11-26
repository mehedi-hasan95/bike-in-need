import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Buyers from "../Pages/Dashboard/Admin/buyer/Buyers";
import Sellers from "../Pages/Dashboard/Admin/Seller/Sellers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct/AddProduct";
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
        {path: 'dashboard', element: <PrivetRouter><Dashboard></Dashboard></PrivetRouter>,
      children: [
        {path: '/dashboard/admin/seller', element: <Sellers></Sellers>},
        {path: '/dashboard/admin/buyer', element: <Buyers></Buyers>},
        {path: '/dashboard/seller/add', element: <AddProduct></AddProduct>}
      ]
      },
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