import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Product = ({ product }) => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl bold text-center'>Featured Products</h2>
            <p className='text-2xl text-center semibold mt-3'>Check and Get your desired product!</p>
            <div className="my-16 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-items-center ">
                {
                    product.map((product) => (
                        <>
                            {/* <Link href={`/product/${product._id}`}> */}
                                <div className="card w-96 glass mb-20" key={product._id} >
                                    <figure><Image src={product.image} width={400} height={100} alt="product!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">{product.name}</h2>
                                        <p className='text-white'>Category: {product.category}</p>
                                        <p className='text-white'>Price: $ {product.price}</p>
                                        <p className='text-white'>Status: {product.status}</p>
                                        <p className='text-white'>Rating: {product.AVGRating}</p>
                                        <div className="card-actions justify-end">
                                            <Link href={`/product/${product._id}`} className="btn btn-primary">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            {/* </Link> */}
                        </>
                    ))
                }
            </div>

        </div>
    );
};

export default Product;