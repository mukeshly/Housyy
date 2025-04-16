'use client' // ✅ This ensures it's a client-side component
import { motion } from 'framer-motion';


import AnimatedCard from '@/components/AnimatedCard';
import PricingSection from './Pricing';
import ProjectOverview from './ProjectOverview';
import PropertySlider from './PropertySlider';
import UnitLayout from './UnitLayout';
import ConnectivitySection from './ConnectivitySection';
import WhyChooseProperty from './WhyChooseProperty';
import PricingPlan from './PricingPlan';
import FaqSection from '@/components/FaqSection';
import LiveHotDeals from '@/components/LiveHotDeals';
import Footer from '@/components/Footer';
import Header from '@/components/Header';



export default function PropertySingle() {



  return (
    <main className="w-full">
      <section className=''>
<Header />

      <PropertySlider />
      </section>
      <section className='my-5'>
      

      <AnimatedCard title="Project Overview" number="01/8">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        className="f-full"
      >
      
      <ProjectOverview />
      </motion.div>
    </AnimatedCard>


      </section>
      <section className='my-5'>
       
      
      <AnimatedCard title="Project Layout & Features" number="01/8">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        className="f-full"
      >
      
      <PricingSection />

      </motion.div>
    </AnimatedCard>


      </section>


      <section className='my-5'>

<AnimatedCard title="Unit Layout &
Construction Material" number="01/8">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        className="f-full"
      >
      
      <UnitLayout />
      </motion.div>
    </AnimatedCard>

      </section>
      <section className='my-5'>

<AnimatedCard title="Connectivity & Location Advantages" number="01/8">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        className="f-full"
      >
      
      <ConnectivitySection />
      </motion.div>
    </AnimatedCard>

      </section>
    
      <section className='my-5'>
      <AnimatedCard title="Why Choose This Property? (USPs)" number="01/8">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        className="f-full"
      >
      
         <WhyChooseProperty />

      </motion.div>
    </AnimatedCard>

   

      </section>
      <section className='my-5'>
      <AnimatedCard title="Pricing & Payment Plans" number="01/8">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        className="f-full"
      >
      
      <PricingPlan />

      </motion.div>
    </AnimatedCard>

   

      </section>
      <section className='my-5'>
        <FaqSection />
      </section>

      <section className='my-5'>
        <LiveHotDeals />
      </section>

        <section>
          <Footer />
        </section>

    </main>
  );
}
