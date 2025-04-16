import { motion } from 'framer-motion';
import Image from 'next/image';

const reasons = [
  {
    title: 'Experienced Legal Experts',
    description: 'Decades of expertise in real estate verification.',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8fc3ecb768d2089e53cee7fc249a1a708ba5d6c',
  },
  {
    title: 'Comprehensive Checks',
    description: 'Covering every legal and financial aspect of property transactions.',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8fc3ecb768d2089e53cee7fc249a1a708ba5d6c',
  },
  {
    title: 'Transparent Process',
    description: 'Regular updates and no hidden charges.',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8fc3ecb768d2089e53cee7fc249a1a708ba5d6c',
  },
];

export default function WhyChooseHousyy() {
  return (
    <section className="h-container x-round-card">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#050F27] text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight tracking-tight max-w-5xl"
        >
          Why Choose Housyy for Property Verification?
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#ED1C24]/30"
            >
              <div className="mb-5 flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#ED1C24]/10 group-hover:bg-[#ED1C24]/20 mx-auto">
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#050F27] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
