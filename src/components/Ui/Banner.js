import React from 'react';

const Banner = () => {
    return (
        <div className="container mx-auto hero min-h-screen" style={{
            backgroundImage: `url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)`,
            width: '100%',
            height: '300px', 
            backgroundSize: 'cover',
        }}>
            
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Guysm Welcome to Muliplan City</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, nisi veniam? Sint, saepe architecto. Minus aliquid saepe rem totam itaque!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;