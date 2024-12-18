import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
// Importing images
import client1 from '../../assets/client1.jpg';
import client2 from '../../assets/client2.jpg';
import client3 from '../../assets/client3.jpg';
import client4 from '../../assets/client4.jpg';

const ClientReviewsPage = () => {
  const clients = [
    {
      name: 'Mabel Payne',
      role: 'UX Designer',
      image: client1,
      review: 'Working with Mabel on our project was a game changer. Her UX designs were not only visually appealing but also user-friendly. Mabel’s ability to understand our needs and translate them into intuitive designs was remarkable.',
    },
    {
      name: 'John Doe',
      role: 'Frontend Developer',
      image: client2,
      review: 'John’s skills in frontend development are top-notch. He consistently delivered clean, efficient code and kept the project on track. His attention to detail and ability to collaborate effectively were key to the success of our application.',
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      image: client3,
      review: 'Jane was instrumental in guiding our project from conception to launch. Her strategic insights and project management skills helped us stay focused on our goals and delivered a product that exceeded our expectations.',
    },
    {
      name: 'Alice Brown',
      role: 'Marketing Specialist',
      image: client4,
      review: 'Alice’s expertise in digital marketing strategies significantly boosted our visibility and engagement. Her creative thinking and data-driven approach helped us reach new audiences and improve conversion rates.',
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center justify-center mb-8">
      <div className="bg-blue-600 p-4 rounded-lg shadow-lg w-full max-w-screen-lg flex justify-center gap-8">
        {clients.map((client, index) => (
          <div key={index} className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/4">
            <img
              src={client.image}
              alt={`Client ${index + 1}`}
              className="w-16 h-16 rounded-full mb-2 mx-auto"
            />
            <h2 className="text-lg font-bold">{client.name}</h2>
            <p className="text-gray-500">{client.role}</p>
            <FaQuoteLeft className="text-gray-300 text-xl mt-1" />
            <p className="text-gray-700 text-xs italic mt-1">{client.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviewsPage;
 