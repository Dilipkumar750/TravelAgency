import React from 'react';
import FlightHero from './FlightHero';
import TopDestinations from './TopDestinations';
import PopularFlights from './PopularFlights';    
// import TravelDeals from './TravelDeals';
// import CustomerReviews from './CustomerReviews';

const FlightHome = () => {
  return (
    <div>
     
      <FlightHero />

  
      <TopDestinations />

      
       <PopularFlights />
 
      
      {/* <TravelDeals /> */}

   
      {/* <CustomerReviews />  */}
    </div>
  );
};

export default FlightHome;
