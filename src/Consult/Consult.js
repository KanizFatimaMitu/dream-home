import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import Footer from '../Components/Footer';


const Consult = () => {
    const [date, setDate] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p
            class="btn btn-primary text-bold text-neutral"
            data-aos="zoom-in"
            data-aos-delay="1300">
            You picked {format(date, 'PP')}.
        </p>;

    }

    return (
        <div >

            <div
                data-aos="flip-up"
                class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="400">
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            footer={footer}
                        />
                    </div>
                </div>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default Consult;