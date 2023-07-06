import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      url: 'https://i.imgur.com/8iw8dAB.jpg',
      disc:'Freedom'
    },
    {
      url: 'https://i.imgur.com/nCQ0cIs.jpg',
      disc:'Ududumbara'
    },
    {
      url: 'https://i.imgur.com/W7dXhKg.jpg',
      disc:'Struggle'
    },

    {
      url: 'https://i.imgur.com/vDe8U7i.jpg',
      disc:'Komari'
    },
    {
      url: 'https://i.imgur.com/EP9J5sw.jpg',
      disc:'Panama'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 3 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[100vw] md:h-[80vh] sm:h-[60vh] xs:h-[40vh] w-full relative group'>
    <div
  style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
  className='relative w-full h-full duration-500 bg-center bg-cover'
>
  <h1
    className='absolute bottom-0 right-0 w-[150px] px-10 py-4 text-lg text-white'
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
  >
    {slides[currentIndex].disc ?? ''}
  </h1>
</div>

      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex justify-center py-2 top-4'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
