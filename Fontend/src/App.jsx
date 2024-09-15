
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./page/Login";
import Rootlayout from "./component/layout/Rootlayout";
import Home from "./page/Home";
import About from "./page/About";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import Admin from "./admin/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Route>
      
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="login" element={<AdminLogin />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
