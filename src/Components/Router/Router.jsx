import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {path: '/', element: <Home></Home>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},
        {path: '*', element: <Error></Error>}
      ]
    },
  ]);

export default router;