"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { motion, AnimatePresence } from "framer-motion";

const Hero: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("Select City");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showCityProjects, setShowCityProjects] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", 
    "Chennai", "Kolkata", "Pune"
  ];

  const projectsByCity = {
    Mumbai: ["Sea View Apartments", "Luxury Heights", "Marina Bay Residences", "Coastal Towers"],
    Delhi: ["Capital Greens", "Delhi Heights", "Metro View Apartments", "Central Park Residences"],
    Bangalore: ["Tech Park Residences", "Garden City Villas", "Silicon Valley Apartments", "Green View Homes"],
    Hyderabad: ["Hitech City Apartments", "Pearl Heights", "Lake View Residences", "Jubilee Hills Villas"],
    Chennai: ["Beach Road Apartments", "Marina View Towers", "ECR Residences", "Coastal Breeze Villas"],
    Kolkata: ["Riverside Apartments", "Heritage Homes", "Park Street Residences", "Salt Lake Towers"],
    Pune: ["Hill View Apartments", "IT Park Residences", "University Road Homes", "Koregaon Park Villas"]
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
    setShowCityProjects(true); // Automatically show projects when city is selected
    if (isMobile) {
      const searchInput = document.getElementById('search-input');
      searchInput?.focus();
    }
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery, "in city:", selectedCity);
    setShowCityProjects(false);
    if (isMobile) {
      const searchInput = document.getElementById('search-input') as HTMLInputElement;
      searchInput?.blur();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleProjectSelect = (project: string) => {
    setSearchQuery(project);
    setShowCityProjects(false);
    if (isMobile) {
      const searchInput = document.getElementById('search-input') as HTMLInputElement;
      searchInput?.blur();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowCityProjects(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMobileSearchFocus = () => {
    if (isMobile && selectedCity !== "Select City") {
      setShowCityProjects(true);
    }
  };

  return (
    <>
       
       <Header />
       
      <div className=" py-6 w-full bg-blue-950">
       
      

        <section className="flex flex-col items-center m-8 text-center" aria-labelledby="hero-heading">
          <motion.h1
            id="hero-heading"
            className="my-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.2] md:leading-[56px] lg:leading-[74px] max-w-full md:max-w-[1017px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Verified Properties, Direct Deals, Below Market Prices.
          </motion.h1>

          <motion.p 
            className="mb-8 md:mb-12 text-lg md:text-xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Premium Homes. Verified Listings. Exclusive Prices.
          </motion.p>

          <motion.div
            className="relative flex flex-col md:flex-row items-center pl-4 md:pl-8 bg-white shadow-2xl rounded-2xl md:rounded-[70px] w-full max-w-[945px] h-[80] mobile-search"
            ref={searchRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center w-full border-b md:border-b-0 md:w-auto" ref={dropdownRef}>
              <div className="relative w-full py-3 md:py-0">
                <button
                  className={`flex items-center justify-between gap-2 text-base md:text-lg font-semibold ${selectedCity === "Select City" ? "text-gray-500" : "text-slate-900"} w-full px-2 md:px-1`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                >
                  <span className="truncate max-w-[120px] md:max-w-none">{selectedCity}</span>
                  <motion.svg
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <path
                      d="M5.47779 7.96967C5.76929 7.7034 6.22545 7.6792 6.54688 7.89705L6.63897 7.96967L13.7218 14.439L20.8046 7.96967C21.0961 7.7034 21.5522 7.6792 21.8737 7.89705L21.9658 7.96967C22.2573 8.23594 22.2838 8.6526 22.0453 8.94621L21.9658 9.03033L14.3024 16.0303C14.0109 16.2966 13.5547 16.3208 13.2333 16.1029L13.1412 16.0303L5.47779 9.03033C5.15714 8.73744 5.15714 8.26256 5.47779 7.96967Z"
                      fill="currentColor"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      className="absolute z-20 mt-1 w-full bg-white rounded-md shadow-lg py-1 text-base ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {cities.map((city, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50"
                          onClick={() => handleCitySelect(city)}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          {city}
                          {selectedCity === city && (
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              
              {!isMobile && (
                <div className="mx-4 my-0 w-px bg-neutral-500 h-[46px]" />
              )}
            </div>

            <div className="relative w-full md:flex-1 px-2 md:px-0">
              <input
                id="search-input"
                type="search"
                inputMode="search"
                className="w-full text-lg md:text-xl lg:text-2xl font-light text-neutral-700 bg-transparent border-none focus:outline-none py-3 md:py-2 placeholder-gray-400"
                placeholder={isMobile ? "Search projects..." : "Search Real Estate Projects"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={handleMobileSearchFocus}
                autoComplete="off"
              />

              <AnimatePresence>
                {showCityProjects && selectedCity !== "Select City" && (
                  <motion.ul 
                    className="absolute z-20 mt-1 w-full bg-white rounded-md shadow-lg py-1 text-base ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {projectsByCity[selectedCity as keyof typeof projectsByCity]
                      ?.filter(project => 
                        project.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((project, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50"
                          onClick={() => handleProjectSelect(project)}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          {project}
                        </motion.li>
                      ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              className={`w-full md:w-[207px] h-full  bg-red-600 rounded-b-xl md:rounded-r-[70px] flex items-center justify-center hover:bg-red-700 mt-2 md:mt-0`}
              onClick={handleSearch}
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white" strokeWidth="2"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white" strokeWidth="2"
                  />
                </svg>
                <span className="text-white font-semibold">Search</span>
              </div>
            </motion.button>
          </motion.div>

          {isMobile && (
            <div className="mt-4 text-sm text-white opacity-80">
              <p>Tip: Select a city first to see relevant projects</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Hero;