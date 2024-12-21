import React from 'react';
import { Link } from 'react-router-dom';

const TermsandConditions = () => {
  return (
    <>
      <div>
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-5 mb-8 bg-gray-300 h-28 flex justify-center items-center">
            Terms and Conditions
          </h2>
        </div>
        <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-44 text-justify">
          <div className="w-full">
            <p className="font-extralight mb-7 text-sm sm:text-base md:text-lg">
              Welcome to Journey Travel & Tours. These Terms and Conditions ("Terms") govern your use of our website, services, and booking process. By accessing and using our services, you agree to abide by these Terms and Conditions.
            </p>
            <h3 className="text-2xl sm:text-3xl mb-4">Booking and Payments</h3>
            <h4 className="text-xl sm:text-2xl mb-4">Booking Confirmation</h4>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              All bookings are subject to availability. Upon receiving your booking request, we will confirm your reservation and provide you with a booking reference and receipt via email or SMS.
            </p>
            <h4 className="text-xl sm:text-2xl mb-4">Payment Terms</h4>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              Payments can be made through various methods such as:
            </p>
            <ul className="list-disc ml-5 font-extralight text-sm sm:text-base md:text-lg">
              <li>Credit/Debit cards</li>
              <li>Bank transfer</li>
              <li>PayPal</li>
              <li>Other accepted payment gateways</li>
            </ul>
            <h4 className="text-xl sm:text-2xl mb-4">Cancellation Policy</h4>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              If you cancel your booking, the following cancellation charges may apply:
            </p>
            <ul className="list-disc ml-5 font-extralight text-sm sm:text-base md:text-lg">
              <li>More than 30 days before departure: Full refund minus any administrative fees.</li>
              <li>15-30 days before departure: 50% refund of the total cost.</li>
              <li>Less than 15 days before departure: No refund.</li>
            </ul>

            <h3 className="text-2xl sm:text-3xl mb-4">Responsibilities</h3>
            <h4 className="text-xl sm:text-2xl mb-4">Travel Agency Obligations</h4>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              We act as an intermediary to facilitate travel services. While we strive to provide accurate information about travel destinations and service providers, we do not own or operate airlines, hotels, or transportation services.
            </p>
            <h4 className="text-xl sm:text-2xl mb-4">Traveler Responsibilities</h4>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              It is the responsibility of the traveler to:
            </p>
            <ul className="list-disc ml-5 font-extralight text-sm sm:text-base md:text-lg">
              <li>Provide accurate information during booking (e.g., names, passport numbers, contact details).</li>
              <li>Ensure they have valid travel documentation, including passports, visas, and identification.</li>
              <li>Adhere to local travel laws and customs at all times.</li>
            </ul>

            <h3 className="text-2xl sm:text-3xl mb-4">Services Included</h3>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              Our travel packages may include:
            </p>
            <ul className="list-disc ml-5 font-extralight text-sm sm:text-base md:text-lg">
              <li>Accommodation</li>
              <li>Transportation (flights, buses, trains, taxis)</li>
              <li>Meals</li>
              <li>Sightseeing tours</li>
              <li>Tour guides</li>
            </ul>

            <h3 className="text-2xl sm:text-3xl mb-4">Changes to Itineraries</h3>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              We reserve the right to modify travel itineraries due to weather conditions, unforeseen circumstances, or operational constraints.
            </p>

            <h3 className="text-2xl sm:text-3xl mb-4">Force Majeure</h3>
            <p className="ml-2 mb-4 font-extralight text-sm sm:text-base md:text-lg">
              In cases of Force Majeure (natural disasters, war, epidemics, strikes, etc.), we will not be held responsible for any cancellation or delay.
            </p>

            <h3 className="text-2xl sm:text-3xl mb-4">Contact Information</h3>
            <p className="ml-2 mb-4 font-mono text-sm sm:text-base md:text-lg">
              For any questions regarding these Terms and Conditions, you may contact us at:
            </p>
            <p className="ml-2 mb-4 font-mono text-sm sm:text-base md:text-lg">
              <strong>Email:</strong> info@journeytours.com
            </p>
            <p className="ml-2 mb-4 font-mono text-sm sm:text-base md:text-lg">
              <strong>Phone:</strong> +1 123 456 7890
            </p>
            <p className="ml-2 mb-4 font-mono text-sm sm:text-base md:text-lg">
              <strong>Website:</strong> www.journeytours.com
            </p>

            <h2 className="text-center text-3xl sm:text-4xl font-serif mt-8 mb-7 bg-gray-300 w-full h-10">
              Anywhere in the world you want to go... we can get you there!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsandConditions;
