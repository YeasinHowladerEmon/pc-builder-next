import RootLayout from '@/components/Layouts/RootLayout';
import convertToLowerCaseNoSpace from '@/lib/convertLowerCase';
import { addToBuild } from '@/redux/slice/pcBuilderSlice';
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch } from 'react-redux';

const ChooseIdCategory = ({ components, categoryName }) => {
    const dispatch = useDispatch();
    
    const handleAddtoBuild = (component) => {
        dispatch(addToBuild({ category: categoryName, component }));
    }
    return (
        <div className="container mx-auto mt-10" >
            <div className="my-16 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-items-center ">
                {
                    components.map((component) => (
                        <>
                            <div className="card w-96 glass mb-20" key={component._id} >
                                <figure><Image src={component.image} width={400} height={100} alt="product!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-white">{component.name}</h2>
                                    <p className='text-white'>Category: {component.category}</p>
                                    <p className='text-white'>Price: $ {component.price}</p>
                                    <p className='text-white'>Status: {component.status}</p>
                                    <p className='text-white'>Rating: {component.AVGRating}</p>
                                    <div className="card-actions justify-end">
                                        <Link href='/PCBuilder' onClick={() => handleAddtoBuild(component)} className="btn btn-primary">Add</Link>
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

export default ChooseIdCategory;

ChooseIdCategory.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async ({ params }) => {
    console.log(params);
    const res = await fetch(`https://pc-builder-next-tan.vercel.app/api/products?category=${params.chooseCategoryId}`)
    const data = await res.json();
    return {
        props: {
            components: data.data,
            categoryName: params.chooseCategoryId
        }
    }
}
