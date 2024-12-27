import React from 'react';
import image from "../../assets/banner2.png";

const Travel = () => {
  return (
    <div
      className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[550px] w-[90%] mt-10 mx-auto bg-cover bg-center rounded-2xl overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
    </div>
  );
};

export default Travel;
