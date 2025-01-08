import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    destination: "Maldives",
    videoUrl: "https://www.example.com/video1.mp4",
    quote: "The Maldives trip was a dream come true! Thanks to your agency!",
  },
  {
    id: 2,
    name: "Jane Smith",
    destination: "Switzerland",
    videoUrl: "https://www.example.com/video2.mp4",
    quote: "Every detail of our trip to Switzerland was perfect!",
  },
  {
    id: 3,
    name: "Alice Johnson",
    destination: "Bali",
    videoUrl: "https://www.example.com/video3.mp4",
    quote: "Bali was magical, and your team made it effortless!",
  },
];

const VideoTestimonial = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openLightbox = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeLightbox = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="bg-gray-100 py-8 px-4 z-0">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Customer Video Testimonials
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Hear what our happy customers have to say about their dream vacations!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-lg p-4 relative"
          >
            <video
              className="rounded-md mb-4"
              src={testimonial.videoUrl}
              controls={false}
              muted
              loop
              onClick={() => openLightbox(testimonial.videoUrl)}
            ></video>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600">{testimonial.destination}</p>
              <p className="italic text-gray-500 mt-2">{testimonial.quote}</p>
            </div>
            <button
              onClick={() => openLightbox(testimonial.videoUrl)}
              className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-sm"
            >
              Play
            </button>
          </div>
        ))}
      </div>
      {/* Lightbox */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-2/3 lg:w-1/2">
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
            >
              ✖
            </button>
            <video
              className="w-full rounded-md"
              src={selectedVideo}
              controls
              autoPlay
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTestimonial;
