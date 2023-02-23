import React, { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import Package from '../../Pages/Packages/Package';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Statistics from '../../Statistics/Statistics';
import OfferBoard from './OfferBoard';
import Consult from '../../Consult/Consult';



const Home = () => {
    
    return (
        <div>
            <LandingPage></LandingPage>
            <Statistics></Statistics>
            <OfferBoard></OfferBoard>
            <Footer></Footer>
        </div>
    );
};

export default Home;