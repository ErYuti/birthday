import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const GreetingCard = ({ onOpen }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -600, opacity: [0, 0.7, 0] }}
          transition={{
            duration: Math.random() * 3 + 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 20 + 80}%`,
            fontSize: `${Math.random() * 40 + 20}px`,
            color: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <FaHeart />
        </motion.div>
      ))}
      <motion.div
        className="w-full max-w-md aspect-[3/4] rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center text-center cursor-pointer bg-white/10 backdrop-blur-lg border border-white/30"
        initial={{ opacity: 0, scale: 0.7, rotateY: -180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.5)",
        }}
        onClick={onOpen}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white tracking-wide"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          To My Dearest Friend
        </motion.h1>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaHeart className="text-pink-400 text-5xl my-6" />
        </motion.div>
        <h2 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-white to-yellow-300">
          Shwee
        </h2>
        <motion.p
          className="text-white/80 font-light mt-10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨ Click to open your surprise ✨
        </motion.p>
      </motion.div>
    </div>
  );
};

export default GreetingCard;
