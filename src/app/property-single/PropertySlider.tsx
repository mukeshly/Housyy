'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';


const PropertySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const constraintsRef = useRef(null);

  const properties = [
    {
      id: 1,
      image: '/home-1.png',
      price: '₹90,00,000',
      config: '2 Bed | 2 Bath',
      period: '5-7 years',
      minInvestment: '₹3 lakh',
      returns: '13%+',
      funded: 25
    },
    {
      id: 2,
      image: '/home-1.png',
      price: '₹1,20,00,000',
      config: '3 Bed | 2 Bath',
      period: '7-10 years',
      minInvestment: '₹5 lakh',
      returns: '15%+',
      funded: 40
    },
    // Add more properties as needed
  ];

  const thumbnails = Array(20).fill(0).map(() => `/home-1.png`);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* Navigation Bar */}
        <div className="flex items-center gap-5 py-5 h-container">
          <button className="flex items-center gap-2 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
            </svg>
            <span className="font-poppins">Back</span>
          </button>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-white">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M17.5 10.0833C17.5029 11.1832 17.2459 12.2682 16.75 13.25C16.162 14.4264 15.2581 15.416 14.1395 16.1077C13.021 16.7995 11.7319 17.1662 10.4167 17.1667C9.31678 17.1695 8.23176 16.9126 7.25 16.4167L2.5 18L4.08333 13.25C3.58744 12.2682 3.33047 11.1832 3.33333 10.0833C3.33384 8.76812 3.70051 7.47904 4.39227 6.36045C5.08402 5.24187 6.07355 4.33797 7.25 3.74999C8.23176 3.2541 9.31678 2.99713 10.4167 2.99999H10.8333C12.5703 3.09582 14.2109 3.82896 15.441 5.05904C16.671 6.28912 17.4042 7.9297 17.5 9.66666V10.0833Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-poppins">WhatsApp</span>
            </button>
            
            <button className="flex items-center gap-2 text-white">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 6.66667C16.3807 6.66667 17.5 5.54738 17.5 4.16667C17.5 2.78596 16.3807 1.66667 15 1.66667C13.6193 1.66667 12.5 2.78596 12.5 4.16667C12.5 5.54738 13.6193 6.66667 15 6.66667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.15845 11.2583L12.8501 14.575" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.8418 5.42499L7.15845 8.74165" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-poppins">Share</span>
            </button>
          </div>
        </div>

        {/* Main Slider */}
        <div className="relative flex flex-col gap-5 md:flex-row h-container x-round-card !p-[30px] !bg-[rgba(255,255,255,0.4)]">
          {/* Property Image */}
          <div className="relative w-full">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full  cursor-pointer overflow-hidden rounded-4xl"
              onClick={toggleFullscreen}
            >
              <Image 
                src={properties[currentIndex].image} 
                alt={`Property ${currentIndex + 1}`}
                className="w-full h-full object-cover "
                layout="responsive" width={600} height={400}
              />
            </motion.div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#ED1C24] rounded-full flex items-center justify-center shadow-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#ED1C24] rounded-full flex items-center justify-center shadow-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Thumbnail Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {properties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[#ED1C24] w-6' : 'bg-white bg-opacity-50'}`}
                />
              ))}
            </div>
          </div>
          
          {/* Property Details Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-[452px] h-full bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <div className="space-y-4">
                {[
                  { icon: '₹', text: properties[currentIndex].price },
                  { icon: '🛏️', text: properties[currentIndex].config },
                  { icon: '📅', text: properties[currentIndex].period },
                  { icon: '💰', text: `Min. ${properties[currentIndex].minInvestment}` }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13L9 17L19 7" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="font-inter font-bold text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-5xl font-black text-gray-900 font-inter">{properties[currentIndex].returns}</h3>
                <p className="mt-2 text-xl font-semibold text-gray-900">Projected Annual Returns*</p>
                
                <div className="mt-6">
                  <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${properties[currentIndex].funded}%` }}
                      transition={{ delay: 0.4 }}
                      className="absolute left-0 top-0 h-full bg-[#ED1C24] rounded-full"
                    />
                  </div>
                  <p className="mt-2 text-gray-500">{properties[currentIndex].funded}% Funded</p>
                </div>
              </div>
              
              <button className="mt-8 w-full py-3 bg-[#ED1C24] text-white font-medium rounded-lg shadow-sm hover:bg-[#D11921] transition-colors">
                Get started
              </button>
            </div>
          </motion.div>
        </div>
        
      </div>
      
      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4"
          >
            <button 
              className="absolute top-6 right-6 text-white text-2xl z-50"
              onClick={toggleFullscreen}
            >
              ✕
            </button>
            
            <div className="relative w-full max-w-6xl h-full max-h-[80vh] flex items-center">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-0 z-10 w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center shadow-lg -translate-x-6"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <motion.div
                drag="x"
                dragConstraints={constraintsRef}
                className="w-full h-full relative flex items-center justify-center"
                onClick={toggleFullscreen}
              >
                <Image 
                layout="responsive" width={600} height={400}
                  src={properties[currentIndex].image} 
                  alt={`Property ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-0 z-10 w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center shadow-lg translate-x-6"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="mt-6 max-w-4xl w-full overflow-x-auto px-4 py-2">
              <div className="flex gap-2">
                {thumbnails.map((thumb, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden cursor-pointer border-2 ${
                      index % properties.length === currentIndex ? 'border-[#ED1C24]' : 'border-transparent'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index % properties.length);
                    }}
                  >
                    <Image 
                      src={thumb} 
                      alt={`Thumbnail ${index + 1}`}
                      layout="responsive" width={600} height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PropertySlider;