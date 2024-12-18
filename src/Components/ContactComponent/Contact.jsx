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
      
      

    <div className=' justify-center items-center pt-14 '>
      
    <form className=' border-4 w-3/5 ml-56 '>

   < div  style={{ backgroundImage: `url(${contact})`,  filter: 'blur(0px)' }}  >
      

    <div className="flex gap-8 justify-center  mb-8 text-4xl">
        <p >Contact</p>

      </div>
      
      <div className="flex gap-8 justify-center  ">
        
      <div className=" text-gray-500 border ">

        <input 
        type='text'
        placeholder='Name *'
        required
        />
        </div>
        <div className="  text-gray-500 border ">

        <input 
        type='text'
        placeholder='City of Residence *'
        required
        />
        </div>
        </div>
        <div className="flex gap-8 justify-center mt-8">
        <div className="  text-gray-500 border  ">

        <input 
        type='email'
        placeholder='Email *'
        required
        />
        </div>
        <div className="  text-gray-500 border ">

        <input 
        type='text'
        defaultValue='+91' 
        placeholder='Number *' 
        required
        />
        </div>
        </div>
        <div className="flex gap-8 justify-center mt-8">
        <div className="  text-gray-500 border ">

        <input 
        type='tel'
        placeholder='Whatsapp Number *'
        required
        />
        </div>
        <div className="  text-gray-500 border ">

        <input 
        type='text'
        placeholder='Travel Destination *'
        required
        />
        </div>
        </div>
        <div className="flex gap-8 justify-center mt-8">
        
        <div className="  text-gray-500 border ">
  
          <input 
          type='Date'
          placeholder='fun *'
          required
          className='w-44'
          value={startDate}
          onChange={handleDateChange}
          min={today} 
          />
          </div>
          <div className="  text-gray-500 border ">
  
          <input 
          type='Number'
          placeholder='Number of People *'
          required
          />
          </div>
          </div>
          <div className="flex gap-8 justify-center mt-8">
        
        <div className="  text-gray-500 border ">
  
          <input 
          type='text'
          placeholder='Vacation Type*'
          required
          />
          </div>
          <div className="  text-gray-500 border ">
  
          <input 
          type='text'
          placeholder='City of Residence *'
          required
          />
          </div>
          </div>
          <div className='flex gap-8 justify-center mt-8'>

          <button className='  text-gray-500 border bg-white rounded text-xl mb-5'>Submit</button>
          </div>
          </div>
          </form>
          </div>
          
          
         
          
        
    </div>
  )
}

export default Contact
