import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cpu, Monitor, Motherboard, PowerSupply, Ram, Storage } from '../svgs';

const Categories = () => {
    return (
        <div className='container mx-auto my-20'>
            <div>
                <h2 className='text-5xl bold text-center'>Featured Category</h2>
                <p className='text-2xl text-center semibold mt-3'>Get your desired product from featured category!</p>
                <div className="grid grid-cols-3 gap-5 justify-items-center my-20">

                    <Link className='p-10 bg-primary' href="/category/Processor">
                        <Cpu className="" width={100} height={100} />
                        <h4 className='text-2xl bold text-white mt-2 text-center'>
                            Processor</h4>
                    </Link>


                    <Link className='p-10 bg-primary' href="/category/Monitor">
                        <Monitor className="" width={100} height={100} />
                        <h4 className='text-2xl bold text-white mt-2 text-center'>
                        Monitor</h4>
                    </Link>

                    <Link className=' p-10 bg-primary' href="/category/Power Supply">
                        <PowerSupply className="" width={100} height={100} />
                        <h4 className='text-2xl bold text-white mt-2 text-center'>
                        Power Supply</h4>
                    </Link>

                    <Link className=' p-10 bg-primary' href="/category/Motherboard">
                        <Motherboard className="" width={100} height={100} />
                        <h4 className='text-2xl bold text-white mt-2 text-center'>
                        Motherboard</h4>
                    </Link>

                    <Link className=' p-10 bg-primary' href="/category/RAM">
                        <Ram className="" width={100} height={100} />
                        <h4 className='text-2xl bold text-white mt-2 text-center'>
                            RAM</h4>
                    </Link>

                    <Link className=' p-10 bg-primary' href="/category/Storage">
                        <Storage className="" width={100} height={100} />
                        <h4 className='text-2xl bold text-white mt-2 text-center'>
                        Storage</h4>
                    </Link>


                </div>

            </div>
        </div>
    );
};

export default Categories;