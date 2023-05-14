import LandingPage from './LandingPage';
import Footer from '../../Components/Footer';
import Statistics from '../../Statistics/Statistics';
import OfferBoard from './OfferBoard';
import Description from './Description';
import Owner from './Owner';




const Home = () => {
    
    return (
        <div>
            <LandingPage></LandingPage>
            <Description></Description>
            <Statistics></Statistics>
            <OfferBoard></OfferBoard>
            <Owner></Owner>
            <Footer></Footer>
        </div>
    );
};

export default Home;