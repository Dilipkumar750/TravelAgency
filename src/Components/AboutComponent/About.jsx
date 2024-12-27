import React from 'react';
import aboutbanner from '../../assets/about-banner.png';

const About = () => {
  return (
    <section className="section about ">
    <div className="container grid grid-cols-2">
  
      <div className="about-content mb-12">
  
        <p className="section-subtitle mb-2.5">About Us</p>
  
        <h2 className="h2 section-title mb-5">Explore all tours of the world with us.</h2>
  
        <p className="about-text text-battleship-gray text-lg leading-relaxed mb-7.5">
          Lorem Ipsum is available, but the majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable.
        </p>
  
        <ul className="about-list grid gap-5 mb-10">
  
          <li className="about-item flex items-start gap-3.75">
  
            <div className="about-item-icon bg-viridian-green text-white-1 text-xl p-4 rounded-full mt-1.25">
              <ion-icon name="compass"></ion-icon>
            </div>
  
            <div className="about-item-content">
              <h3 className="h3 about-item-title text-granite-gray font-semibold mb-1.25">Tour guide</h3>
  
              <p className="about-item-text text-battleship-gray text-lg leading-relaxed">
                Lorem Ipsum is available, but the majority have suffered alteration in some.
              </p>
            </div>
  
          </li>
  
          <li className="about-item flex items-start gap-3.75">
  
            <div className="about-item-icon bg-viridian-green text-white-1 text-xl p-4 rounded-full mt-1.25">
              <ion-icon name="briefcase"></ion-icon>
            </div>
  
            <div className="about-item-content">
              <h3 className="h3 about-item-title text-granite-gray font-semibold mb-1.25">Friendly price</h3>
  
              <p className="about-item-text text-battleship-gray text-lg leading-relaxed">
                Lorem Ipsum is available, but the majority have suffered alteration in some.
              </p>
            </div>
  
          </li>
  
          <li className="about-item flex items-start gap-3.75">
  
            <div className="about-item-icon bg-viridian-green text-white-1 text-xl p-4 rounded-full mt-1.25">
              <ion-icon name="umbrella"></ion-icon>
            </div>
  
            <div className="about-item-content">
              <h3 className="h3 about-item-title text-granite-gray font-semibold mb-1.25">Reliable tour</h3>
  
              <p className="about-item-text text-battleship-gray text-lg leading-relaxed">
                Lorem Ipsum is available, but the majority have suffered alteration in some.
              </p>
            </div>
  
          </li>
  
        </ul>
  
        <a href="#booking" className="btn btn-primary">Booking Now</a>
  
      </div>
  
      <figure className="about-banner">
        <img src={aboutbanner} width="756" height="842" loading="lazy" alt="About us banner" className="w-full" />
      </figure>
  
    </div>
  </section>
  );
};

export default About;
