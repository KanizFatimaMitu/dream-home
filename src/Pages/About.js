import React from 'react';


const About = () => {
    return (
        <div class="hero min-h-screen bg-base">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/KVRbKLT/52164970-2228488447418201-942979208211070976-n.jpg" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold text-primary">Kaniz Fatima</h1>
                    <p class="py-6">"I am a MERN stack web developer. I love to use my creativity and make something new. That's why I love to play with code. Over the last year, I gather knowledge in various parts of web development by myself. My ultimate goal is to become an awesome full-stack web developer who can make beautiful UIs and also can handle the back-end smoothly."</p>
                    <button class="btn btn-primary">My Portfolio</button>
                </div>
            </div>
        </div>
    );
};

export default About;