import React, { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import Package from '../../Pages/Packages/Package';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Statistics from '../../Statistics/Statistics';

const Home = () => {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div>
            <LandingPage></LandingPage>
            <Statistics></Statistics>
            <div className='m-0 lg:ml-28 mr-28 mt-6  p-8'>
                <h1 className='text-center text-2xl font-bold text-primary mt-16 flex justify-center'>"our Packages"</h1>
                <p>We offer the full of services to help your home look better. Everything from creating standards of excellence to training your people to work in more effective ways, assessing how you are doing, and helping you perform even better in future. Very few others do this, and none have been doing it as long as we have.</p>

                {/* carousel */}

                <div class="carousel w-full  ">
                    <div id="slide1" class="carousel-item relative w-full inline-grid">
                        <div className='grid  grid-cols-1 lg:grid-cols-3 gap-2 '>
                            {
                                packages.slice(0, 3).map(perPackage => <Package
                                    key={perPackage._id}
                                    perPackage={perPackage}
                                ></Package>)
                            }
                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 invisible lg:visible">
                            <a href="#slide4" class="btn btn-circle btn-primary">❮</a>
                            <a href="#slide2" class="btn btn-circle btn-primary">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full hidden  lg:inline-grid invisible lg:visible">
                        <div className='grid grid-cols-3 gap-2 '>
                            {
                                packages.slice(3, 6).map(perPackage => <Package
                                    key={perPackage._id}
                                    perPackage={perPackage}
                                ></Package>)
                            }
                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 invisible lg:visible">
                            <a href="#slide1" class="btn btn-circle btn-primary">❮</a>
                            <a href="#slide3" class="btn btn-circle btn-primary">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full hidden  lg:inline-grid invisible  lg:visible">
                        <div className='grid  grid-cols-3 gap-2 '>
                            {
                                packages.slice(6, 9).map(perPackage => <Package
                                    key={perPackage._id}
                                    perPackage={perPackage}
                                ></Package>)
                            }
                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 invisible  lg:visible">
                            <a href="#slide2" class="btn btn-circle btn-primary">❮</a>
                            <a href="#slide4" class="btn btn-circle btn-primary">❯</a>
                        </div>
                    </div>
                </div>
                {/* carousel */}
                
                <div className='text-center mt-8'>
                    <button
                       class="btn btn-xs btn-primary sm:btn-sm md:btn-md lg:btn-lg">
                        <Link to='/packages'>see all</Link>
                        <div className='ml-4' >
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </div>
                    </button>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;