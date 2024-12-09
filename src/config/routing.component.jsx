import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import LandingPage from "../pages/landing/index";
  import AboutUsPage from "../pages/About Us/about-us.page";
  import AllProductGrid from "../pages/Products/all-products.page";
  import HomeLayout from "../pages/layout/home-page.layout";
  
  const Routing = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="products" element={<AllProductGrid />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Routing;
  