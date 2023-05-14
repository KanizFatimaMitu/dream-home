import LandingPage from './LandingPage';
import Footer from '../../Components/Footer';
import Statistics from '../../Statistics/Statistics';
import OfferBoard from './OfferBoard';
import Description from './Description';
import Owner from './Owner';
import Reviews from './Reviews';
import Feature from './Feature';




const Home = () => {
    
    return (
        <div>
            <LandingPage></LandingPage>
            <Description></Description>
            <Statistics></Statistics>
            <Feature></Feature>
            <Reviews></Reviews>
            <OfferBoard></OfferBoard>
            <Owner></Owner>
            <Footer></Footer>
        </div>
    );
};

export default Home;