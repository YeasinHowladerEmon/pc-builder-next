import Link from 'next/link';
import React from 'react';
import { useSession, signOut } from "next-auth/react"
const Navbar = () => {
    const { data: session } = useSession()
    return (
        <>
            <div className="container mx-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a>Products</a>
                                <ul className="p-2">
                                    <li><Link href='/category/processor'>CPU / Processor</Link></li>
                                    <li><Link href='/category/motherboard'>Motherboard</Link></li>
                                    <li><Link href='/category/ram'>RAM</Link></li>
                                    <li><Link href='/category/powerSupply'>Power Supply Unit</Link></li>
                                    <li><Link href='/category/storage'>Storage Device</Link></li>
                                    <li><Link href='/category/monitor'>Monitor</Link></li>
                                </ul>
                            </li>
                            <li><a>About Us</a></li>
                            <li><a>Contact</a></li>
                            <li><Link href='/login'>Login</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl">MULTIPLAN CITY</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>Products</summary>
                                <ul className="p-2">
                                    <li><Link href='/category/processor'>CPU / Processor</Link></li>
                                    <li><Link href='/category/motherboard'>Motherboard</Link></li>
                                    <li><Link href='/category/ram'>RAM</Link></li>
                                    <li><Link href='/category/powerSupply'>Power Supply Unit</Link></li>
                                    <li><Link href='/category/storage'>Storage Device</Link></li>
                                    <li><Link href='/category/monitor'>Monitor</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>About Us</a></li>
                        <li><a>Contact </a></li>
                        <li>{
                            session ? (
                                <p onClick={() => signOut()}>Logout</p>
                            ) : (
                                <Link href='/login'>Login</Link>
                            )
                        }</li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn" href='/PCBuilder'>PC Builder</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;