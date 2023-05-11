import React from 'react';
import logo  from '../assets/images/more/15.jpg'
import logo1 from '../assets/images/more/logo1.png'
import banner from '../assets/images/more/3.png'
import icon from '../assets/images/icons/1.png'
import icon1 from '../assets/images/icons/3.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/4.png'

const Header = () => {
    return (
        <div>
           <div className='relative'>
           <img style={{height:'120px',}} className='w-full' src={logo} />
           <div className='absolute top-5 left-96 flex items-center '> 
           <img style={{height:'80px',}} className='' src={logo1} />
            <h1 className='text-center text-5xl text-white'>Espresso Emporium</h1>
           </div>
           </div>
           <div className='relative'>
           <img style={{height:'600px',}} className='w-full' src={banner} />
           <div className='absolute top-60 left-1/2' >
            <h1 className='text-3xl text-white mb-5'>Would you like a Cup of Delicious Coffee?</h1>
            <p style={{width:'600px'}} className='mb-3 text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='btn btn-warning'>Learn More</button>
           </div>

           </div>

           <div className='bg-[#ECEAE3] h-72 grid grid-cols-4'>

            <div className='p-10'>
            <img className='mb-3 mt-12' src={icon} />
            <h3 className='font-semibold text-xl text-black'>Awesome Aroma</h3>
            <p className='w-64 mt-2'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='p-10'>
            <img className='mb-3 mt-12' src={icon1} />
            <h3 className='font-semibold text-xl text-black'>Pure Grades</h3>
            <p className='w-64 mt-2'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='p-10'>
            <img className='mb-3 mt-12' src={icon2} />
            <h3 className='font-semibold text-xl text-black'>High Quality</h3>
            <p className='w-64 mt-2'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='p-10'>
            <img className='mb-3 mt-12' src={icon3} />
            <h3 className='font-semibold text-xl text-black'>Proper Roasting</h3>
            <p className='w-64 mt-2'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            

           </div>
            
        </div>
    );
};

export default Header;