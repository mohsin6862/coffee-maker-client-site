import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import swal from 'sweetalert2'
import { FaArrowLeft, } from "react-icons/fa";


const UpdateCoffee = () => {
    const update = useLoaderData()

    const handleUpdatedCoffee =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;   
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newCoffee = {name,chef,supplier,taste,details,category,photo}
        console.log(newCoffee)
         
        fetch(`http://localhost:5000/coffee/${update?._id}`,{
          method:'PUT',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.acknowledged == true){
            swal.fire(
           {
            title: 'Success',
            text: 'Coffee updated successfully',
            type: 'success',
            icon:'success',
            confirmButtonText: 'Done'
            
           }
            )
          }
        })
    
      }
    return (
        <div>
          <>
      <Link to='/'>  <h3 className='text-2xl mt-5 ml-5 flex items-center'><FaArrowLeft></FaArrowLeft><span className='ml-3'>Back to home</span></h3></Link>
        <h1 className='text-center text-4xl mt-20'>Please Update {update?.name} </h1>
        <p className='text-center w-[60%] mx-auto mt-5'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
  
        <div className='w-full mx-auto mt-5'>
  
          <form onSubmit={handleUpdatedCoffee} >
          <div className='w-[50%] mx-auto grid grid-cols-2 gap-8'>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
            
              <input type="text" name='name' defaultValue={update?.name}  placeholder="Enter coffee name" className="input input-bordered" />
            </label>
            </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group">
            
              <input type="text" name='chef'defaultValue={update?.chef}   placeholder="Enter coffee chef" className="input input-bordered" />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
            
              <input type="text" name='supplier' defaultValue={update?.supplier}  placeholder="Enter coffee Supplier" className="input input-bordered" />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
            
              <input type="text" name='taste' defaultValue={update?.taste} placeholder="Enter coffee Taste" className="input input-bordered" />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
            
              <input type="text" name='details' defaultValue={update?.details}  placeholder="Enter coffee Details" className="input input-bordered" />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
            
              <input type="text" name='category' defaultValue={update?.category} placeholder="Enter coffee Category" className="input input-bordered" />
            </label>
          </div>
          </div>
          <div className=" w-[50%] mx-auto">
            <label className="label">
              <span className="">Photo URL</span>
            </label>
            <label >
            
              <input  type="text" name='photo' defaultValue={update?.photo}  placeholder="Enter coffee Photo URL" className="input input-bordered w-full" />
            </label>
          </div>
          <div className=" w-[50%] mx-auto">
            
            <input type="submit" value="Add Coffee" className="btn btn-block  btn-warning my-5" />
          </div>
          </form>
  
        </div>
      </>
    );
        </div>
    );
};

export default UpdateCoffee;