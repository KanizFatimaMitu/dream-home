import React, { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import Package from '../../Pages/Packages/Package';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

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
            <div className='m-0 lg:m-28 p-8'>
                <h1 className='text-center text-2xl font-bold text-primary mt-16 flex justify-center'>"our Packages"</h1>

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
        </div>
    );
};

export default Home;