'use client'
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary h-[100dvh] w-[100vw] flex flex-col justify-center items-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }} // Adjust the duration as needed
        >
          <Image
            src="/logo/logo_white.png"
            height={400}
            width={400}
            alt="taltek logo"
            className="h-[240px] w-[240px] md:h-[400px] md:w-[400px]"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }} // Add a delay to stagger the animation
          className="text-[#FFFFFF] font-cabin text-[28px] md:text-[38px]"
        >
          Coming Soon...
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
