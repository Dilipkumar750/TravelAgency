import React from 'react';
import thanjai from "../assets/Pilgrimage/thanjai.jpg";
import murugan from "../assets/Pilgrimage/murugan.jpeg";
import kedarnath from "../assets/Pilgrimage/kedarnath.jpeg";

const PilgrimageViewdetails = () => {
  return (
    <div>
      {/* Header Image */}
      <div>
        <img src={thanjai} alt="Thanjavur Temple" className="w-screen h-80 object-cover" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row p-8 gap-8">

        {/* Left Side: Image and Description */}
        <div className="md:w-1/3 justify-center items-center">
          <p className='text-2xl font-bold mb-5'>Visit the Devotional Place of Kedarnath</p>
          <img src={murugan} alt="Murugan Temple" className="w-[200%] h-auto max-h-[500px] object-cover rounded-lg shadow-lg" />
          <div className='mt-10'>
            <p>Kedarnath Temple, located in the pristine Himalayan mountains of Uttarakhand, India, is one of the holiest and most revered pilgrimage sites for Hindus. Dedicated to Lord Shiva, the temple stands at an altitude of 3,583 meters and is part of the Char Dham Yatra. The temple, built with large stone blocks around the 8th century, showcases remarkable ancient architecture, with no mortar used to hold the stones together. Kedarnath Temple opens its doors to pilgrims only from May to November, as harsh winter conditions make access impossible. The surrounding region, known for its rugged terrain and snow-covered peaks, offers breathtaking views and is home to the Kedarnath Wildlife Sanctuary. Despite its remote location, the Kedarnath Temple draws thousands of pilgrims each year, who trek through difficult paths to seek blessings from Lord Shiva and experience the spiritual serenity of this sacred place.</p>
          </div>
        </div>

        {/* Right Side: Pilgrimage Details */}
        <div className="md:w-1/2 mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Kedarnath Temple Overview</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li><strong className='text-blue-700'>Location:</strong> Kedarnath Temple is located in the Kedarnath region of Uttarakhand, India, in the Garhwal Himalayas.</li>
              <li><strong className='text-blue-700'>Altitude:</strong> Situated at an elevation of 3,583 meters (11,755 feet) above sea level.</li>
              <li><strong className='text-blue-700'>Dedicated to:</strong> Lord Shiva, the temple is one of the twelve Jyotirlingas of Lord Shiva in India and a significant part of the Char Dham Yatra pilgrimage circuit.</li>
              <li><strong className='text-blue-700'>Best Time to Visit:</strong> The temple is open for pilgrims from May to November. The best time to visit is between May and June, and September to November. The temple remains closed during winter due to heavy snowfall and harsh weather conditions.</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg mt-8 p-6">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">How to Reach Kedarnath Temple</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li><strong className='text-blue-700'>Trekking:</strong> The traditional way to reach Kedarnath Temple is by trekking from Gaurikund, which is approximately 16 kilometers (10 miles) away. The trek takes about 6-8 hours, depending on your pace.</li>
              <li><strong className='text-blue-700'>Helicopter Service:</strong> Helicopter services are available from Gaurikund to Kedarnath, making the journey faster and more convenient for those who prefer not to trek.</li>
              <li><strong className='text-blue-700'>Ponies and Palanquins:</strong> Ponies and palkis (palanquins) are available for hire for those who cannot trek by foot.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Temple and Spiritual Significance */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-indigo-700">Temple and Spiritual Significance</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong className='text-blue-700'>Construction:</strong> The temple is believed to have been built by the Pandavas from the Mahabharata, though historical evidence points to its construction by Adi Shankaracharya in the 8th century.</li>
          <li><strong className='text-blue-700'>Mythology:</strong> According to legend, the temple is believed to be the place where Lord Shiva appeared in a different form to the Pandavas after they sought his blessings for atonement.</li>
          <li><strong className='text-blue-700'>Architecture:</strong> The temple is constructed with large stone blocks without the use of mortar. It is a classic example of ancient Indian temple architecture.</li>
        </ul>
      </div>

      {/* Important Facts */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-indigo-700">Important Facts</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li><strong className='text-blue-700'>Kedarnath Wildlife Sanctuary:</strong> The surrounding area is home to the Kedarnath Wildlife Sanctuary, which is rich in flora and fauna.</li>
          <li><strong className='text-blue-700'>Yamunotri and Gangotri Temples:</strong> These temples, along with Kedarnath, form the Char Dham Yatra circuit, attracting pilgrims every year.</li>
          <li><strong className='text-blue-700'>Accommodation:</strong> Accommodation options are available near the temple, including basic guesthouses and higher-end accommodations in Gaurikund and Kedarnath.</li>
          <li><strong className='text-blue-700'>Safety and Health:</strong> Due to the high altitude, it’s important to stay hydrated, take proper precautions against altitude sickness, and carry warm clothing as temperatures can drop drastically.</li>
        </ul>
      </div>

      {/* Pilgrimage Packages Section */}
     <div className='flex gap-5'>
        <div >
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-indigo-700">🇮🇳 Top 10 Pilgrimage Tour Packages in India</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li><strong>Char Dham Yatra (Uttarakhand):</strong> Badrinath, Kedarnath, Gangotri, Yamunotri</li>
                <li><strong>Vaishno Devi Yatra (Jammu & Kashmir):</strong> Katra to Vaishno Devi Bhavan</li>
                <li><strong>Tirupati Balaji Tour (Andhra Pradesh):</strong> Lord Venkateswara Temple, Tirumala</li>
                <li><strong>Shirdi Sai Baba Tour (Maharashtra):</strong> Sai Baba Temple, Shani Shingnapur</li>
                <li><strong>Amarnath Yatra (Jammu & Kashmir):</strong> Holy Amarnath Cave Temple</li>
                <li><strong>Jagannath Puri Yatra (Odisha):</strong> Jagannath Temple, Puri</li>
                <li><strong>Dwarka Somnath Tour (Gujarat):</strong> Dwarkadhish Temple, Somnath Temple</li>
                <li><strong>Kashi Vishwanath Yatra (Uttar Pradesh):</strong> Kashi Vishwanath Temple, Ganga Aarti</li>
                <li><strong>Rameshwaram Tour (Tamil Nadu):</strong> Ramanathaswamy Temple, Dhanushkodi</li>
                <li><strong>Golden Temple Tour (Punjab):</strong> Sri Harmandir Sahib (Golden Temple)</li>
              </ul>
            </div>
  
            {/* International Pilgrimage Card */}
            <div className="bg-white rounded-lg shadow-lg mt-8 p-6">
              <h2 className="text-2xl font-bold mb-4 text-indigo-700">🌍 Top 10 International Pilgrimage Tour Packages</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li><strong>Hajj & Umrah Packages (Saudi Arabia):</strong> Mecca and Medina</li>
                <li><strong>Holy Land Tour (Israel & Palestine):</strong> Jerusalem, Bethlehem, Nazareth</li>
                <li><strong>Mount Kailash Mansarovar Yatra (Tibet, China):</strong> Mount Kailash, Mansarovar Lake</li>
                <li><strong>Bodh Gaya & Lumbini Tour (India & Nepal):</strong> Mahabodhi Temple, Buddha's Birthplace</li>
                <li><strong>St. Peter's Basilica Tour (Vatican City):</strong> Vatican Museums, Sistine Chapel</li>
                <li><strong>Camino de Santiago (Spain):</strong> The Way of St. James Trail</li>
                <li><strong>Our Lady of Lourdes Tour (France):</strong> Lourdes Sanctuary, Healing Waters</li>
                <li><strong>Angkor Wat Temple Tour (Cambodia):</strong> Largest Hindu-Buddhist Temple Complex</li>
                <li><strong>Potala Palace Pilgrimage (Lhasa, Tibet):</strong> Former Dalai Lama Residence</li>
                <li><strong>Kashi-Kathmandu Pilgrimage (India & Nepal):</strong> Kashi Vishwanath, Pashupatinath Temple</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Kedarnath Image */}
        <div className="mt-8">
        <img src={kedarnath} alt="Kedarnath Temple" className="w-[700px] object-cover rounded-lg shadow-lg" />
        </div>
     </div>
    </div>
  );
};

export default PilgrimageViewdetails;
