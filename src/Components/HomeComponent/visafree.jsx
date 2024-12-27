import React from 'react';
import indonasia from '../../assets/vIndonasia.jpg';
import maldives from '../../assets/vMaldives.avif';
import nepal from '../../assets/vNepal.avif';
import tailand from '../../assets/vTailand.avif';
import Jamaica from '../../assets/vJamaica.jpg';
import Bhutan from '../../assets/vBhutan.avif';
import Gambia from '../../assets/vGambia.avif';
import Kiribati from '../../assets/vKiribati.jpg';
import Barbados from '../../assets/vBarbados.avif';
import Mauritius from '../../assets/vMauritius.avif';
import srilanka from '../../assets/vsrilanka.jpg';

const VisaFree = () => {
  const destinations = [
    { name: 'Indonesia', image: indonasia, span: 'col-span-2 row-span-1' },
    { name: 'Maldives', image: maldives, span: '' },
    { name: 'Nepal', image: nepal, span: '' },
    { name: 'Thailand', image: tailand, span: '' },
    { name: 'Jamaica', image: Jamaica, span: '' },
    { name: 'Bhutan', image: Bhutan, span: 'col-span-2 row-span-1' },
    { name: 'Gambia', image: Gambia, span: 'col-span-2 row-span-1' },
    { name: 'Kiribati', image: Kiribati, span: '' },
    { name: 'Barbados', image: Barbados, span: '' },
    { name: 'Sri Lanka', image: srilanka, span: 'col-span-2 row-span-1' },
    { name: 'Mauritius', image: Mauritius, span: '' },
  ];

  return (
    <div>
<h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
     Visa free countries
      </h2>      <section className="bg-white py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`relative flex flex-col overflow-hidden rounded-lg ${destination.span} bg-gray-50`}
            >
              <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img
                  src={destination.image}
                  alt={`Image of ${destination.name}`}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {destination.name}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VisaFree;
