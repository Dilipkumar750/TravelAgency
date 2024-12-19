import React, { useState } from 'react'
import contact from '../../assets/conctact bg image.png'



const Contact = () => {


  const [startDate, setStartDate] = useState('');

  const handleDateChange = (event) => {
    const selectedDate = event.target.value; // Gets the selected date
    setStartDate(selectedDate);
    // Log or use the date as needed
  };
  const today = new Date().toISOString().split('T')[0];


  return (
    
    <div 
     className="h-screen w-screen bg-cover bg-center relative  "
          style={{ backgroundImage: `url(${contact})` }} >
      
      

    <div className=' justify-center items-center pt-14  '>
      
    <form className=' border-4 w-3/5 ml-56  rounded-lg  '>

   < div  
    //  style={{ backgroundImage: `url(${contact})`,  filter: 'blur(0px)' }}
     >
      

    <div className="flex gap-8 justify-center  mb-8 text-4xl  ">
        <p className='hover:bg-blue-300 rounded-2xl mt-8 ' >Contact</p>

      </div>
      
      <div className="flex gap-8 justify-center  ">
        
      <div className=" text-gray-400 border font-thin rounded-sm ">

        <input 

  
        type='text'
          className='h-7'
        placeholder='Name *'
        size="30"
        required
        />
        </div>
        <div className="  text-gray-500 border font-thin rounded-sm">

        <input 
        type='text'
          className='h-7'
        placeholder='City of Residence *'
        size='30'
        required
        />
        </div>
        </div>
        <div className="flex gap-8 justify-center mt-8">
        <div className="  text-gray-500 border font-thin  rounded-sm">

        <input 
        type='email'
        placeholder='Email *'
          className='h-7'
        size="30"
        required
        />
        </div>
        <div className="  text-gray-500 border font-thin rounded-sm ">

        <input 
        type='text'
          className='h-7'
        defaultValue='+91' 
        placeholder='Number *'
        size="30" 
        required
        />
        </div>
        </div>
        <div className="flex gap-8 justify-center mt-8">
        <div className="  text-gray-500 border  font-thin rounded-sm">

        <input 
        type='tel'
          className='h-7'
        placeholder='Whatsapp Number *'
        size="30"
        required
        />
        </div>
        <div className="  text-gray-500 border font-thin rounded-sm ">

        <input 
        type='text'
          className='h-7'
        placeholder='Travel Destination *'
        required
        size="30"
        />
        </div>
        </div>
        <div className="flex gap-8 justify-center mt-8 font-thin">
        
        <div className="  text-gray-500 border font-thin  rounded-sm">
  
          <input 
          type='Date'
          size="30"
          placeholder='Date *'
          required
          
          className='w-60 h-7'
          value={startDate}
          onChange={handleDateChange}
          min={today} 
          />
          </div>
          <div className="  text-gray-500 border rounded-sm">
  
          <input 
          className='h-7'
          type='text'
          placeholder='Number of People *'
          size="30"
          required
          />
          </div>
          </div>
          <div className="flex gap-8 justify-center mt-8">
        
        <div className="  text-gray-500 border font-thin rounded-sm">
  
          <input 
          type='text'
            className='h-7'
          placeholder='Vacation Type*'
          size="30"
          required
          />
          </div>
          <div className="  text-gray-500 border font-thin  ">
  
          <input 
          type='text'
            className='h-7 '
          placeholder=' Flight, Train, Bus, Car *'
          
          size="30"
          required
          />
          </div>
          </div>
          <div className='flex gap-8 justify-center mt-8'>

          <button className='  text-gray-500 border bg-white rounded text-xl mb-5 hover:bg-blue-300'>Submit</button>
          </div>
          </div>
          </form>
          </div>
          
          
         
          
        
    </div>
  )
}

export default Contact
