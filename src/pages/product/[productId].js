import RootLayout from '@/components/Layouts/RootLayout';
import Image from 'next/image';

const ProductDetails = ({ product }) => {
    console.log(product);
    return (
        <div className='container mx-auto my-20'>
            <div className='grid grid-cols-2 justify-items-center'>
                <div>
                    <Image src={product.image} width={600} height={100} alt="product!" />
                </div>
                <div>
                    <h1 className='text-5xl text-white font-bold '>{product.name}</h1>
                    <h3 className='text-3xl  mt-5 '>Category : <span className='font-semibold text-white'>{product.category}</span></h3>
                    <h3 className='text-3xl  mt-5  font-normal'>Brand : <span className='font-semibold text-white'>{product.subCategory}</span></h3>
                    <h3 className='text-3xl  mt-5  font-normal'>Price : <span className='font-semibold text-white'>{product.price}</span></h3>
                    <h3 className='text-3xl  mt-5  font-normal'>Avarage Rating : <span className='font-semibold text-white'>{product.AVGRating}</span></h3>
                    <h3 className='text-3xl  mt-5  font-normal'>Individual Rating : <span className='font-semibold text-white'>{product.InRating}</span></h3>
                    <h3 className='text-3xl  mt-5  font-normal'>Status : <span className='font-semibold text-white'>{product.status}</span></h3>
                </div>
            </div>
            <div role="tablist" className="tabs tabs-lifted my-20">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Reviews" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {product.Reviews}
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Description" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">{product.description}</div>

            </div>
        </div>
    );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

// export const getStaticPaths = async () => {
//     const res = await fetch('http://127.0.0.1:3000/api/products')
//     const products = await res.json();
//     const paths = products.data.map((product) => ({
//         params: { productId: product._id },
//     }))
//     // console.log(paths);
//     return { paths, fallback: false };
// }


export const getServerSideProps = async (context) => {
    console.log("id", context.params.productId)
    const id = context.params.productId;
    const res = await fetch(`http://127.0.0.1:3000/api/products?id=${id}`)
    const data = await res.json();
    return {
        props: {
            product: data.data
        }
    }
}
