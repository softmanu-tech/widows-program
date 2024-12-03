"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";

const images = [ "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?auto=format&fit=crop&q=80" ];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Background Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
              key={currentImage}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 1.5}}
              className="absolute inset-0 w-full h-full"
          >
            <Image
                src={images[currentImage]}
                alt="Background"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"/>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.5}}
              className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Empowering Widows,{" "}
              <span className="text-amber-400">Building Futures</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Join our mission to provide support, resources, and opportunities for widows
              to rebuild their lives and create lasting positive change in their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/login" passHref>
                <Button
                    size="lg"
                    className="w-full sm:w-auto text-lg px-8 py-6 bg-amber-400 text-gray-900 hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5"/>
                </Button>
              </Link>
              <Link href="/learn-more" passHref>
                <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-md bg-white/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <section className="relative z-10 bg-white py-20">
          <div className="container mx-auto px-4">
            <motion.h2
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-gray-900"
            >
              Making a Difference
            </motion.h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                  <motion.div
                      key={index}
                      initial={{opacity: 0, y: 20}}
                      whileInView={{opacity: 1, y: 0}}
                      transition={{duration: 0.5, delay: index * 0.2}}
                      className="group p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80"
                  >
                    <div className="mb-6 overflow-hidden rounded-lg">
                      <Image
                          src={feature.image}
                          alt={feature.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
  );
}

const features = [
  {
    title: "Skills Development",
    description: "Providing vocational training and educational opportunities for economic empowerment.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
  },
  {
    title: "Financial Support",
    description: "Offering financial assistance and guidance for sustainable independence.",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80",
  },
  {
    title: "Community Building",
    description: "Creating support networks and fostering meaningful connections.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80",
  },
];

