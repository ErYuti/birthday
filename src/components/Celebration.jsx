import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaGift, FaCake } from "react-icons/fa";

const Celebration = ({ onComplete }) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-700 to-red-600">
      {showConfetti &&
        [...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              y: -50,
              x: Math.random() * window.innerWidth,
              rotate: 0,
            }}
            animate={{
              y: window.innerHeight + 50,
              rotate: Math.random() * 720,
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              delay: Math.random() * 2,
              ease: "linear",
            }}
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
              borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            }}
          />
        ))}

      <motion.h1
        className="text-5xl md:text-8xl font-black text-white z-10 text-center px-4"
        initial={{ scale: 0, opacity: 0, rotateZ: -180 }}
        animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
        transition={{ type: "spring", delay: 0.5, duration: 1.5 }}
      >
        🎉 Happy Birthday Shwee! 🎉
      </motion.h1>

      {[...Array(20)].map((_, i) => {
        const icons = [
          <FaHeart />,
          <FaStar />,
          <FaGift />,
          <FaCake />,
          "🎈",
          "🎁",
          "✨",
          "🌟",
        ];
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];

        return (
          <motion.div
            key={i}
            className="absolute bottom-[-50px] z-20"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -window.innerHeight - 50 }}
            transition={{
              duration: Math.random() * 3 + 4,
              delay: Math.random() * 3,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 50 + 30}px`,
              color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            }}
          >
            {randomIcon}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Celebration;
