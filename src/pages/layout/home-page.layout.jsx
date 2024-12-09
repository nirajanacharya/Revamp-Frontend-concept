import { Outlet } from "react-router-dom";
import HomeFooter from "../../components/footer/footer.component";
import HomeHeader from "../../components/Header/header.component";

const HomeLayout = () => {  
  return (
    <>
      <HomeHeader />

      {/* Content starts */}
      <Outlet />
      {/* Content ends */}

      <HomeFooter />
    </>
  );
};

export default HomeLayout;
