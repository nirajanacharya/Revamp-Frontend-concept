
import HomeFooter from '../../components/footer/footer.component';
import HomeHeader from '../../components/Header/header.component';

const LandingPage = () => {
    return(
       <>
       <HomeHeader user={{name:"nirajan", gmail:"nirajanacharya@gmail.com"}}/>
       <HomeFooter />
       </>
         
    )
};

export default LandingPage;
