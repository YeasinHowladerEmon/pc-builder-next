import RootLayout from '@/components/Layouts/RootLayout';
import { Cpu, Monitor, Motherboard, PowerSupply, Ram, Storage } from '@/components/svgs';
import Image from 'next/image';
import Link from 'next/link';

import { useSelector } from 'react-redux';


const PCBuilder = () => {
    const pcBuilder = useSelector((state) => state.pcBuilder)
    console.log(pcBuilder.build);
    console.log(pcBuilder.processor);
    const build = () => {
        alert('Complete you build')
    }
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl text-primary font-bold mt-20 '>Pc Building</h1>
            <div className=' bg-base-200 my-20 xl:mx-[300px] lg:mx-[200px] md:mx-[100px] mx-[10px] sm:p-2 p-20'>
                <button className='btn border-white hover:bg-purple-600 mr-auto mb-5' disabled={pcBuilder.build.length === 6 ? false : true} onClick={() => build()}>Complete Build</button>
                <div className='mb-5'>
                    <div className='border  p-5 flex  rounded sm:h-[150px]'>
                        <Cpu width={60} height={60} className='p-1 bg-primary mr-5' />
                        <div className='ml-2'>
                            <h3 className='font-bold text-1xl text-white'>Processor</h3>
                            <div>
                                {
                                    pcBuilder.processor.map((processor, i) => (
                                        <>
                                            <div key={i} className='flex'>
                                                <Image src={processor.image} width={30} height={30} alt="product!"
                                                />
                                                <h3 className='ml-5'>{processor.name}</h3>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <Link className='btn border-white hover:bg-purple-600 ml-auto my-auto' href='/chooseCategory/processor' disabled={pcBuilder.processor.length > 0 ? true : false}>Choose</Link>
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='border p-5 flex h-[100px] rounded sm:h-[150px]'>
                        <Motherboard width={60} height={60} className='p-1 bg-primary mr-5' />
                        <div className='ml-2'>
                            <h3 className='font-bold text-1xl text-white'>Motherboard</h3>
                            <div>
                                {
                                    pcBuilder.motherboard.map((motherboard, i) => (
                                        <>
                                            <div key={i} className='flex' >
                                                <Image src={motherboard.image} width={30} height={30} alt="product!"
                                                />
                                                <h3 className='ml-5'>{motherboard.name}</h3>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <Link className='btn border-white hover:bg-purple-600 ml-auto my-auto' href='/chooseCategory/motherboard' disabled={pcBuilder.motherboard.length > 0 ? true : false}>Choose</Link>
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='border p-5 flex h-[100px] rounded sm:h-[150px]'>
                        <Monitor width={60} height={60} className='p-1 bg-primary mr-5' />
                        <div className='ml-2'>
                            <h3 className='font-bold text-1xl text-white'>Monitor</h3>
                            <div>
                                {
                                    pcBuilder.monitor.map((monitor, i) => (
                                        <>
                                            <div key={i} className='flex'>
                                                <Image src={monitor.image} width={30} height={30} alt="product!" />

                                                <h3 className='ml-5'>{monitor.name}</h3>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <Link className='btn border-white hover:bg-purple-600 ml-auto my-auto' href='/chooseCategory/monitor' disabled={pcBuilder.monitor.length > 0 ? true : false}>Choose</Link>
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='border p-5 flex h-[100px] rounded sm:h-[150px]'>
                        <PowerSupply width={60} height={60} className='p-1 bg-primary mr-5' />
                        <div className='ml-2'>
                            <h3 className='font-bold text-1xl text-white'>Power Supply</h3>
                            <div>
                                {
                                    pcBuilder.powerSupply.map((powersupply, i) => (
                                        <>
                                            <div key={i} className='flex' >
                                                <Image src={powersupply.image} width={30} height={30} alt="product!"
                                                />
                                                <h3 className='ml-5'>{powersupply.name}</h3>

                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <Link className='btn border-white hover:bg-purple-600 ml-auto my-auto' href='/chooseCategory/powerSupply' disabled={pcBuilder.powerSupply.length > 0 ? true : false}>Choose</Link>
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='border p-5 flex h-[100px] rounded sm:h-[150px]'>
                        <Ram width={60} height={60} className='p-1 bg-primary mr-5' />
                        <div className='ml-2'>
                            <h3 className='font-bold text-1xl text-white'>Ram</h3>
                            <div>
                                {
                                    pcBuilder.ram.map((ram, i) => (
                                        <>
                                            <div key={i} className='flex'>
                                                <Image src={ram.image} width={30} height={30} alt="product!" />
                                                <h3 className='ml-5'>{ram.name}</h3>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <Link className='btn border-white hover:bg-purple-600 ml-auto my-auto' href='/chooseCategory/ram' disabled={pcBuilder.ram.length > 0 ? true : false}>Choose</Link>
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='border p-5 flex h-[100px] rounded sm:h-[150px]'>
                        <Storage width={60} height={60} className='p-1 bg-primary mr-5' />
                        <div className='ml-2'>
                            <h3 className='font-bold text-1xl text-white'>Storage</h3>
                            <div>
                                {
                                    pcBuilder.storage.map((storage, i) => (
                                        <>
                                            <div key={i} className='flex'>
                                                <Image src={storage.image} width={30} height={30} alt="product!" />

                                                <h3 className='ml-5'>{storage.name}</h3>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <Link className='btn border-white hover:bg-purple-600 ml-auto my-auto' href='/chooseCategory/storage' disabled={pcBuilder.storage.length > 0 ? true : false}>Choose</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}