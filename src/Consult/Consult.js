import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Footer from '../Components/Footer';
import consultation from '../Assets/consultation.jpg'
import ConsultModal from './ConsultModal';


const Consult = () => {
    const [date, setDate] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p
            class="btn btn-primary text-bold text-neutral m-4"
           >
            You picked {format(date, 'PP')}.
        </p>;

    }

    return (
        <div>

            <div
                data-aos="flip-up"
                class="hero min-h-screen lg:min-h-[80vh] bg-base-200"
            >

                <div class="hero-content flex-col lg:flex-row "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                >
                    <div>
                        <h1 className='mb-4 text-center text-primary font-bold text-2xl'>" Get your Appointment "</h1>
                        <img src={consultation} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
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
                <button>
                    <ConsultModal></ConsultModal>
                </button>
            </div>

            <Footer></Footer>

        </div >
    );
};

export default Consult;