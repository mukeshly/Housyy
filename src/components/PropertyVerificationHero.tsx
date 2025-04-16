import { motion } from 'framer-motion';
import Header from './Header';

export default function PropertyVerificationHero() {
  return (
    <>
     
     
<div className='bg-[#1D234F]'>
<Header />
<motion.section 
        className="flex flex-col w-full bg-[#1D234F]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center h-container mx-auto gap-10 md:gap-0 bg-[#1D234F]">
          {/* Text Content */}
          <div className="flex flex-col max-w-[811px] gap-6 py-20 md:py-16 sm:py-8 text-center mx-auto justify-center items-center">
            <motion.h1 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white font-rubik text-4xl sm:text-[42px] md:text-[51px] font-bold leading-tight tracking-[0.128px]"
            >
              Secure Your Property Investment Today!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed "
            >
              Avoid legal troubles, hidden disputes, and financial risks with our comprehensive property verification services.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit bg-[#ED1C24] rounded-xl border border-[#ED1C24] shadow-sm px-10 py-3"
            >
              <span className="text-gray-100  font-medium leading-5">
                Book Appointment
              </span>
            </motion.button>
            <span className='text-gray-200 -mt-2 '>Get Your Property Verified Now!</span>
            
          </div>

          {/* Image - Using regular img tag */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="shrink-0 w-full md:w-auto"
          >
          
          </motion.div>
        </div>
      </motion.section>
</div>
      
    </>
  );
}