import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCoffee = () => {
    const allCoffee = useLoaderData();

    const { name, chef, supplier, taste, details, category, photo } = allCoffee;
    return (
        <div className='mt-20 '>
            <p className='text-center mb-3'>--- Sip & Savor ---</p>
            <h1 className='text-5xl text-center font-semibold'>Our Popular Products</h1>
            <div className='text-center mt-5'>
                <button className='btn btn-warning  '>Add Coffee</button>
            </div>


            <div className=' grid grid-cols-2 gap-5 '>
                {
                    allCoffee.map(coffee => <>
                        <div className='mt-20 mx-20 '>
                            <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                                <figure><img src={coffee?.photo} alt="Album" /></figure>
                                <div className=" flex justify-between w-full">
                                    <div>
                                        <h2 className="card-title">{coffee?.name}</h2>
                                        <p>{coffee?.chef}</p>
                                        <p>{coffee?.supplier}</p>
                                        <p>{coffee?.taste}</p>
                                        <p>{coffee?.details}</p>
                                        <p>{coffee?.category}</p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <div className="btn-group btn-group-vertical space-y-4">
                                            <button className="btn ">View</button>
                                            <button className="btn">Update</button>
                                            <button className="btn">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default AllCoffee;