import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/landing/index";
import AboutUsPage from "../pages/About Us/about-us.page";
import AllProductGrid from "../pages/Products/all-products.page";
import UserLayoutPage from "../pages/layout/user-layout.page";
import AdminDashboard from "../pages/dashboard/admin-dashboard.page";
import HomeLayout from "../pages/layout/home-page.layout";
import ProductCategoryList from "../pages/category/category-product.list";
import Login from "../pages/login/login.page";
import Register from "../pages/register/register.page";   

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "products",
        element: <AllProductGrid />,
      },
      {
        path: 'category/:slug',
        element: <ProductCategoryList/>
      }
      ,
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ],
  },
  {
    path: "/admin",
    element: <UserLayoutPage role="admin" />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={Router} />;
};

export default Routing;
