import React from 'react';
import Aboutimg from '../../assets/about image1.jpg';
import friends from '../../assets/Happy friends.webp';
import summer from '../../assets/summer.avif';
import vision from '../../assets/vision.jpeg';
import mission from '../../assets/mission.jpeg';
import Quotesimg from '../../assets/Quotesimg.jpg';
import handsh from '../../assets/handsh-removebg-preview.png'
import educate from '../../assets/educate-removebg-preview.png'
import buildtours from '../../assets/buildtours-removebg-preview.png'
import uniques from '../../assets/uniques-removebg-preview.png'

const About = () => {
  return (
    <>
      {/* Header Section */}
      <div className='px-5 mt-7 flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start'>
        <div className='text-center lg:text-left'>
          <h1 className='text-2xl text-gray-500'>Tentwood Trips</h1>
          <p className='text-4xl font-medium mt-2'>A Dream Born in Passion:</p>
          <p className='text-4xl font-medium '>
            Making your <span className='text-gray-500'>Holidays memorable</span>
          </p>
          <img src={Aboutimg} alt='About' className='mt-10 w-full max-w-lg mx-auto lg:mx-0 h-60' />
        </div>
        <div className='text-center lg:text-left'>
          <strong className='text-2xl  inline-flex'>Who we are:</strong>
          <p className='text-gray-500 leading-6 text-justify mt-4 max-w-lg mx-auto lg:mx-0 '>
            Tentwood Trips is the leading B2B tour operator that offers a wide range of travel solutions to help travel agents grow their sales. We see the world through a different lens and customize tour packages that accomplish your customer's unique travel needs.
          </p>
          <img src={friends} alt='Friends' className='mt-8 w-full max-w-lg mx-auto lg:mx-0 h-60 object-cover' />
        </div>
        <div className='text-center lg:text-left'>
          <strong className='text-2xl inline-flex'>What we do:</strong>
          <p className='text-gray-500 leading-6 text-justify mt-4 max-w-lg mx-auto lg:mx-0 '>
            Since 2019, we have proudly crafted custom travel packages to ensure unforgettable experiences.Our offerings include FAM trips,Group tours,Luxury retreats,Special occasion tours,signature journeys,Awakening trips,and more-designed to meet unique travel needs and create lifelong memories.
          </p>
          <img src={summer} alt='Summer' className='mt-7 w-full max-w-lg mx-auto lg:mx-0 h-60 object-cover' />
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className='px-5 mt-10 flex flex-col lg:flex-row gap-10 lg:gap-36 justify-center items-center'>
        <div className='text-center lg:text-left'>
          <img src={vision} alt='Vision' className='mt-6 h-60 mx-auto' />
          <p className='text-2xl font-medium mt-5 text-center'>A World Transformed by Travel</p>
          <p className='text-gray-600 mt-5 text-justify text-sm border-2 border-gray-300 p-5 rounded-md max-w-lg mx-auto lg:mx-0'>
            Our vision is to be a global leader in purposeful travel, where every journey not only enriches the lives of our travelers but also brings hope and support to those in need. We envision a world where exploration and compassion go hand in hand, creating a ripple effect of positive change. By partnering with local communities, we aim to transform lives—one trip, one meal, one smile at a time.
          </p>
        </div>
        <div className='text-center'>
          <img src={Quotesimg} alt='Quotes' className='mt-12 rounded-lg w-full max-w-md mx-auto' />
        </div>
        <div className='text-center lg:text-left'>
          <img src={mission} alt='Mission' className='mt-6 h-60 mx-auto' />
          <p className='text-2xl font-medium mt-5 text-center'>Travel to Transform</p>
          <p className='text-gray-600 mt-5 text-justify text-sm border-2 border-gray-300 p-5 rounded-md max-w-lg mx-auto lg:mx-0'>
            At Tentwood Holidays, our mission is to enrich lives through the transformative power of travel. We are committed to creating unforgettable experiences that inspire, connect, and uplift. Beyond exploring the world, we believe in giving back to the communities we touch. That’s why a portion of every trip you book goes towards providing nutritious meals to underprivileged children, empowering them with the nourishment they need to thrive. Together, let's travel with purpose and make a meaningful impact on the world.
          </p>
        </div>
      </div>
<div className=' text-center mt-10   leading-9 bg-yellow-50 rounded-lg'>
  <div>
    <h1 className='text-3xl mt-10'>Join the global community! </h1>
    <p className='text-gray-500 mt-8'>To advance,guide and inspire adventure travels to interact with nature,experience culture and do a  physical activity.</p>
 
  <p className='w-[790px] text-gray-700 inline-flex'>Our tours will begin in 2019,offering unique travel experiences together with our patner activites,advocates, and journalists.These tours will allow you to go behind the headlines to meet  brave 
    women  and men fighting  for their communties,looking behind the headlines to see a side of a country that outsiders never will,and joining  a broader community of travelers and activistes in your own country.
  </p>

</div>
<div className='flex col-span-3 justify-center mt-12 gap-9 divide-x-2 border-gray-200  border-2   rounded-3xl max-w-lg mx-auto lg '>
<div>
  <img src={handsh} width={'100px'} className='mt-9' />
  <p className='w-24 inline-flex'>We Assist you</p>
  </div>

  <div>
  <img src={educate} width={'100px'} />
  <p className='w-24 inline-flex'>We Educate you</p>
  </div>
  <div>
  <img src={buildtours} width={'100px'} className='mt-6'/>
  
  <p className='w-16 inline-flex'>We Build tours</p>
  </div>
  <div >
  <img src={uniques} width={'100px'} className='mt-8' />
  
  <p className='w-24 inline-flex '> Unique  experiences</p>
  
  </div>
</div>
<br/>
  <br/>
</div>
<br/>
<br/>
<br/>
<br/>
    </>
  );
};

export default About;
