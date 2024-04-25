'use client'
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import Hero from './hero';
import Mission from './mission';
import Testimonials from './testimonials';
import Blog from './blogs/blog';
import Services from './services/services';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Mission />
      <Services />
      <Testimonials />
      <Blog />
    </div>
  );
}
