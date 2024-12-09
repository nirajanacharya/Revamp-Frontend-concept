import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/landing/index'; 
import AboutUsPage from '../pages/About Us/about-us.page';
import AllProductGrid from '../pages/Products/all-products.page';

const Router = createBrowserRouter ([
  {path: '/',
  element: <LandingPage />},
  {
    path: '/about-us',
    element: <AboutUsPage />
  },
  {
    path: '/products',
    element: <AllProductGrid />
  }

])


const Routing = () => {
  return (

<RouterProvider router = {Router}/>
    // <BrowserRouter>
    //   <Routes>
    //     <></>
    //     <Route path="/" element={<LandingPage />}></Route>  
    //     <Route path="/about-us" element={<AboutUsPage />}></Route>
    //     <Route path='/products' element={<AllProductGrid/>}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default Routing;

