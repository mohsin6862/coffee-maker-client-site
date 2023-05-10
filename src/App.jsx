
import './App.css'

function App() {


  return (

    <>
      <h1 className='text-center text-4xl mt-20'>Add new Coffee</h1>
      <p className='text-center w-[60%] mx-auto mt-5'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

      <div className='w-full mx-auto mt-5'>

        <form >
        <div className='w-[50%] mx-auto grid grid-cols-2 gap-8'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <label className="input-group">
          
            <input type="text" placeholder="Enter coffee name" className="input input-bordered" />
          </label>
          </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <label className="input-group">
          
            <input type="text" placeholder="Enter coffee chef" className="input input-bordered" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <label className="input-group">
          
            <input type="text" placeholder="Enter coffee Supplier" className="input input-bordered" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <label className="input-group">
          
            <input type="text" placeholder="Enter coffee Taste" className="input input-bordered" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <label className="input-group">
          
            <input type="text" placeholder="Enter coffee Details" className="input input-bordered" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <label className="input-group">
          
            <input type="text" placeholder="Enter coffee Category" className="input input-bordered" />
          </label>
        </div>
        </div>
        <div className=" w-[50%] mx-auto">
          <label className="label">
            <span className="">Photo URL</span>
          </label>
          <label >
          
            <input  type="text" placeholder="Enter coffee Photo URL" className="input input-bordered w-full" />
          </label>
        </div>
        <div className=" w-[50%] mx-auto">
          <button className='w-full btn btn-warning my-5'>Add Coffee</button>
        </div>
        </form>

      </div>
    </>
    
  )
}

export default App
