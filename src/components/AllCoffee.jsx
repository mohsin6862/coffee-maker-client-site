import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllCoffee = () => {
    const allCoffee = useLoaderData();

    const { name, chef, supplier, taste, details, category, photo } = allCoffee;

    const handleDelete =(_id)=>{

        console.log('delete',_id)
         
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
  

    if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
           if(data.deletedCount>0){
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
           }
        })
     
    }
  })

       
    }
    return (
        <div className='mt-20 '>
            <p className='text-center mb-3'>--- Sip & Savor ---</p>
            <h1 className='text-5xl text-center font-semibold'>Our Popular Products</h1>
            <div className='text-center mt-5'>
              <Link to='/add-coffee'>  <button className='btn btn-warning  '>Add Coffee</button></Link>
            </div>


            <div className=' grid grid-cols-2 gap-5 '>
                {
                    allCoffee?.map(coffee => <>
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
                                            <Link to={`/update/${coffee?._id}`}><button className="btn">Update</button></Link>
                                            <button className="btn" onClick={()=>handleDelete(coffee?._id)}>Delete</button>
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