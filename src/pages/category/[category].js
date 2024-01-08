import RootLayout from '@/components/Layouts/RootLayout';
import Image from 'next/image';
import Link from 'next/link';

const Categories = ({ productCategory }) => {
    return (
        <div className="container mx-auto mt-10" >
            <div className="my-16 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-items-center ">
                {
                    productCategory.map((product) => (
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

export default Categories;

Categories.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

// export const getStaticPaths = async () => {
//     const res = await fetch('http://127.0.0.1:3000/api/products')
//     const products = await res.json();
//     const paths = products.data.map((product) => ({
//         params: { category: product.category },
//     }))
//     return { paths, fallback: false };
// }


export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://pc-builder-next-tan.vercel.app/api/products?category=${params.category}`)
    const data = await res.json();
    return {
        props: {
            productCategory: data.data
        }
    }
}

