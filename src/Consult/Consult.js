import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import Footer from '../Components/Footer';


const Consult = () => {
    const [date, setDate] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }

    return (
        <div >

            <div data-aos="flip-up" class="hero min-h-screen bg-base-200 mx-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className='flex justify-center mt-4 mb-72 lg:mb-20 mr-0 lg:ml-[-72vh] text-center'>
                            <div className='w-3/5' >
                                <h1
                                    class="text-5xl text-primary font-bold"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    Your Dream
                                </h1>
                                <h3
                                    class="text-xl text-primary font-bold pt-2"
                                    data-aos="fade-right"
                                    data-aos-duration="900"
                                    data-aos-delay="400"
                                >
                                    Our responsibility
                                </h3>
                                <p
                                    class="py-6 text-lg font-medium text-accent"
                                    data-aos="fade-right"
                                    data-aos-duration="800"
                                    data-aos-delay="600"
                                >
                                    "You can choose however you want.We'll provide you that at best budget in town."
                                </p>
                                <button
                                    class="btn btn-primary text-bold text-neutral"
                                    data-aos="zoom-in"
                                    data-aos-delay="1100"
                                >
                                    <a target="_blank" href="https://www.linkedin.com/in/kaniz-fatima-mitu-212432233/" >check out more about us</a>
                                </button>

                            </div>

                        </div>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>




            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
                footer={footer}
            />

            <Footer></Footer>
        </div>
    );
};

export default Consult;