import React from 'react';
import Aboutimg from '../../assets/about image1.jpg';
import friends from '../../assets/Happy friends.webp';
import summer from '../../assets/summer.avif';
import vision from '../../assets/vision.jpeg';
import mission from '../../assets/mission.jpeg';
import Quotesimg from '../../assets/Quotesimg.jpg';
import handsh from '../../assets/handsh-removebg-preview.png';
import educate from '../../assets/educate-removebg-preview.png';
import buildtours from '../../assets/buildtours-removebg-preview.png';
import uniques from '../../assets/uniques-removebg-preview.png';

const About = () => {
  return (
    <>
      {/* Header Section */}
      <div className='px-4 md:px-8 lg:px-16 mt-7 flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start max-w-screen-xl mx-auto'>
        <div className='text-center lg:text-left'>
          <h1 className='text-2xl text-gray-500'>Tentwood Trips</h1>
          <p className='text-3xl md:text-4xl font-medium mt-2'>A Dream Born in Passion:</p>
          <p className='text-3xl md:text-4xl font-medium'>
            Making your <span className='text-gray-500'>Holidays memorable</span>
          </p>
          <img
            src={Aboutimg}
            alt='About'
            className='mt-10 w-full max-w-lg mx-auto lg:mx-0 h-auto'
          />
        </div>
        <div className='text-center lg:text-left'>
          <strong className='text-xl md:text-2xl'>Who we are:</strong>
          <p className='text-gray-500 leading-6 text-justify mt-4 max-w-lg mx-auto lg:mx-0'>
            Tentwood Trips is the leading B2B tour operator that offers a wide range of travel
            solutions to help travel agents grow their sales. We see the world through a different
            lens and customize tour packages that accomplish your customer's unique travel needs.
          </p>
          <img
            src={friends}
            alt='Friends'
            className='mt-12 w-full max-w-lg mx-auto lg:mx-0 h-auto object-cover'
          />
        </div>
        <div className='text-center lg:text-left'>
          <strong className='text-xl md:text-2xl'>What we do:</strong>
          <p className='text-gray-500 leading-6 text-justify mt-4 max-w-lg mx-auto lg:mx-0'>
            Since 2019, we have proudly crafted custom travel packages to ensure unforgettable
            experiences. Our offerings include family trips, group tour, luxury retreats, special
            occasion tours and more-designed to meet unique
            travel needs and create lifelong memories.
          </p>
          <img
            src={summer}
            alt='Summer'
            className='mt-12 w-full max-w-lg mx-auto lg:mx-0 h-40 object-cover'
          />
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className='px-4 md:px-8 lg:px-16 mt-10 flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center items-center max-w-screen-xl mx-auto'>
        <div className='text-center lg:text-left'>
          <img src={vision} alt='Vision' className='mt-6 h-auto mx-auto rounded-3xl max-w-sm' />
          <p className='text-xl md:text-2xl font-medium mt-5 text-center'>
            A World Transformed by Travel
          </p>
          <p className='text-gray-600 mt-5 text-justify text-sm md:text-base border-2 border-gray-300 p-5 rounded-md max-w-lg mx-auto lg:mx-0'>
            Our vision is to be a global leader in purposeful travel, where every journey not only
            enriches the lives of our travelers but also brings hope and support to those in need.
            We envision a world where exploration and compassion go hand in hand, creating a ripple
            effect of positive change. By partnering with local communities, we aim to transform
            lives—one trip, one meal, one smile at a time.
          </p>
        </div>
        <div className='text-center'>
          <img
            src={Quotesimg}
            alt='Quotes'
            className='mt-12 rounded-lg w- max-w-md '
          />
        </div>
        <div className='text-center lg:text-left'>
          <img src={mission} alt='Mission' className='mt-6 h-auto mx-auto rounded-3xl max-w-sm' />
          <p className='text-xl md:text-2xl font-medium mt-5 text-center'>Travel to Transform</p>
          <p className='text-gray-600 mt-5 text-justify text-sm md:text-base border-2 border-gray-300 p-5 rounded-md max-w-lg mx-auto lg:mx-0'>
            At Tentwood Holidays, we aim to enrich lives through travel by creating unforgettable
            experiences that inspire and connect. We believe in making a positive impact, which is
            why a portion of every trip booked goes towards providing nutritious meals to
            underprivileged children, giving them the nourishment they need to thrive. Join us in
            traveling with purpose, and together, we can make a meaningful difference in the world.
          </p>
        </div>
      </div>

      {/* Community Section */}
      <div className='text-center mt-10 px-4 md:px-8 bg-yellow-50 rounded-lg max-w-screen-lg mx-auto py-10'>
        <h1 className='text-2xl md:text-3xl'>Join the global community!</h1>
        <p className='text-gray-500 mt-4'>
          To advance, guide, and inspire adventure travels to interact with nature, experience
          culture, and do a physical activity.
        </p>
        <p className='text-gray-700 mt-4 max-w-3xl mx-auto'>
          Our tours began in 2019, offering unique travel experiences together with our partner
          activities, advocates, and journalists. These tours allow you to go behind the headlines
          to meet brave women and men fighting for their communities and see a side of a country
          outsiders never will.
        </p>

        <div className='flex flex-wrap justify-center mt-12 gap-6'>
          <div className='flex flex-col items-center mt-7'>
            <img src={handsh} width='80px' alt='Assist' />
            <p className='text-sm mt-2'>We Assist You</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={educate} width='80px' alt='Educate' />
            <p className='text-sm mt-2'>We Educate You</p>
          </div>
          <div className='flex flex-col items-center mt-5'>
            <img src={buildtours} width='80px' alt='Build Tours' />
            <p className='text-sm mt-2'>We Build Tours</p>
          </div>
          <div className='flex flex-col items-center mt-7'>
            <img src={uniques} width='80px' alt='Unique' />
            <p className='text-sm mt-2'>Unique Experiences</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
