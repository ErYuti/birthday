import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSmile } from "react-icons/fa";

const BirthdayBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [surpriseRevealed, setSurpriseRevealed] = useState(false);
  const [scareTriggered, setScareTriggered] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4 overflow-x-hidden">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Navigation */}
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-pink-600">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg disabled:opacity-30 hover:bg-white/30 transition-all"
          >
            ← Previous
          </button>
          <span className="text-white font-semibold">
            Page {currentPage + 1} of 12
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(11, currentPage + 1))}
            disabled={currentPage === 11}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg disabled:opacity-30 hover:bg-white/30 transition-all"
          >
            Next →
          </button>
        </div>

        {/* Book Content */}
        <div className="relative min-h-[600px] flex items-center justify-center p-8">
          <AnimatePresence mode="wait">
            {/* PAGE 0: COVER */}
            {currentPage === 0 && (
              <motion.div
                key="cover"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full flex flex-col justify-center items-center text-center"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 blur-3xl opacity-30"
                  />
                  <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 p-12 rounded-3xl shadow-2xl">
                    <motion.h2
                      className="text-2xl font-serif italic text-white/90 mb-4"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      A Special Gift For
                    </motion.h2>
                    <h1
                      className="text-7xl text-white font-bold my-6"
                      style={{ fontFamily: '"Pacifico", cursive' }}
                    >
                      Shwee
                    </h1>
                    <div className="w-32 h-1 bg-white/50 mx-auto my-6 rounded-full"></div>
                    <motion.p
                      className="text-2xl text-white/90 mb-8"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🎂 Happy Birthday 🎂
                    </motion.p>
                    <p className="text-lg text-white/80 animate-pulse">
                      → Swipe to begin your journey →
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* PAGE 1: OPENING MESSAGE */}
            {currentPage === 1 && (
              <motion.div
                key="page1"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl"
              >
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg">
                  <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                    For You, Shwee 💝
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 my-4 rounded-full"></div>
                  <p className="text-lg text-gray-700 leading-relaxed space-y-4">
                    <span className="block">
                      On your special day, I wanted to say thank you. Thank you
                      for being you.
                    </span>
                    <span className="block">
                      In every situation, you're the first person I think of,
                      because you are a true friend, and you are always there
                      for me.
                    </span>
                    <span className="block">
                      You're more than special – you're a one-of-a-kind,
                      slightly-crazy, and absolutely amazing human being! 🌟
                    </span>
                    <span className="block italic">
                      I'm so thankful for everything. May God bless you with all
                      the happiness in the world... and maybe a better sense of
                      direction so we don't get lost again! 😉
                    </span>
                  </p>
                </div>
              </motion.div>
            )}

            {/* PAGE 2: ANIMATED POEM */}
            {currentPage === 2 && (
              <motion.div
                key="page2"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl"
              >
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                  <motion.h2
                    className="text-3xl font-bold text-orange-600 mb-6 text-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨ A Poem Just For You ✨
                  </motion.h2>
                  <div className="space-y-4 text-lg text-gray-700 font-serif italic">
                    {[
                      "Another year, another smile,",
                      "You make every moment worthwhile.",
                      "With laughter bright and spirit free,",
                      "You're the best friend there could be!",
                      "",
                      "Through ups and downs, you stay so true,",
                      "The world is brighter because of you.",
                      "So here's to adventures yet to come,",
                      "And memories of all we've done!",
                      "",
                      "Happy Birthday, dear Shwee! 🎉",
                    ].map((line, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.3 }}
                        className={line === "" ? "h-2" : "text-center"}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* PAGE 3: MEMORY GALLERY */}
            {currentPage === 3 && (
              <motion.div
                key="page3"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
                    📸 Our Amazing Memories
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
                      >
                        <div className="w-full h-full bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center">
                          <span className="text-white text-4xl">📷</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center text-sm">
                          Memory {i}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-center text-gray-600 mt-6 italic">
                    So many amazing moments together! 💕
                  </p>
                </div>
              </motion.div>
            )}

            {/* PAGE 4: FUN FACTS */}
            {currentPage === 4 && (
              <motion.div
                key="page4"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl"
              >
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">
                    🎯 Fun Facts About Us!
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "🍕",
                        text: "Number of pizza slices eaten together: Too many to count!",
                      },
                      {
                        icon: "😂",
                        text: "Inside jokes that make no sense to others: 47",
                      },
                      {
                        icon: "🎬",
                        text: "Movies watched on repeat: At least 20",
                      },
                      { icon: "☕", text: "Coffee/Tea sessions: Infinite" },
                      {
                        icon: "🎵",
                        text: "Songs we've sung terribly together: All of them!",
                      },
                    ].map((fact, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
                      >
                        <span className="text-3xl">{fact.icon}</span>
                        <span className="text-gray-700">{fact.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* PAGE 5: QUALITIES */}
            {currentPage === 5 && (
              <motion.div
                key="page5"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl"
              >
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-rose-600 mb-6 text-center">
                    💖 What Makes You Special
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { emoji: "🌟", text: "Always Positive" },
                      { emoji: "💪", text: "Super Strong" },
                      { emoji: "🎨", text: "Creative Soul" },
                      { emoji: "😄", text: "Funny AF" },
                      { emoji: "🤗", text: "Big Heart" },
                      { emoji: "🧠", text: "Smart Cookie" },
                    ].map((quality, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer"
                      >
                        <div className="text-4xl mb-2">{quality.emoji}</div>
                        <div className="text-gray-700 font-semibold">
                          {quality.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* PAGE 6: SCROLL ANIMATION */}
            {currentPage === 6 && (
              <motion.div
                key="page6"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl"
              >
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl shadow-lg max-h-[600px] overflow-y-auto">
                  <h2 className="text-3xl font-bold text-violet-600 mb-6 text-center sticky top-0 bg-violet-50 pb-4">
                    🎢 Our Journey Together
                  </h2>
                  <div className="space-y-8">
                    {[
                      {
                        year: "The Beginning",
                        text: "When we first met and clicked instantly!",
                      },
                      {
                        year: "First Adventure",
                        text: "Remember that crazy road trip?",
                      },
                      {
                        year: "The Hilarious Incident",
                        text: "That time we got locked out... classic!",
                      },
                      {
                        year: "Deep Talks",
                        text: "Late night conversations about life",
                      },
                      {
                        year: "Supporting Each Other",
                        text: "Through thick and thin",
                      },
                      {
                        year: "Making Memories",
                        text: "Every single moment together",
                      },
                      { year: "Today", text: "Celebrating YOU! 🎉" },
                    ].map((milestone, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <div className="flex-1 bg-white p-4 rounded-lg shadow">
                          <h3 className="font-bold text-purple-600 mb-2">
                            {milestone.year}
                          </h3>
                          <p className="text-gray-700">{milestone.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* PAGE 7: INTERACTIVE SURPRISE */}
            {currentPage === 7 && (
              <motion.div
                key="page7"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl"
              >
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg text-center">
                  <h2 className="text-3xl font-bold text-amber-600 mb-6">
                    🎁 Time For Your Surprise!
                  </h2>
                  {!surpriseRevealed ? (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSurpriseRevealed(true)}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xl font-bold shadow-lg"
                    >
                      Click to Reveal! 🎉
                    </motion.button>
                  ) : (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring" }}
                    >
                      <div className="text-8xl mb-4">
                        {
                          ["🎂", "🎈", "🎁", "✨"][
                            Math.floor(Math.random() * 4)
                          ]
                        }
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        I got you a virtual hug! 🤗
                      </h3>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-6xl"
                      >
                        🫂
                      </motion.div>
                      <p className="text-gray-600 mt-4 italic">
                        (And maybe something real too... 😉)
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* PAGE 8: JUMP SCARE (Fun) */}
            {currentPage === 8 && (
              <motion.div
                key="page8"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl"
              >
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg text-center">
                  {!scareTriggered ? (
                    <>
                      <h2 className="text-3xl font-bold text-gray-600 mb-6">
                        Click below for a special message...
                      </h2>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setScareTriggered(true)}
                        className="px-8 py-4 bg-gray-300 text-gray-700 rounded-lg text-xl font-semibold"
                      >
                        Open Message
                      </motion.button>
                    </>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.5, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, -10, 10, -10, 10, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 0.5, repeat: 3 }}
                        className="text-9xl mb-4"
                      >
                        😱
                      </motion.div>
                      <h3 className="text-3xl font-bold text-red-600 mb-4">
                        BOO! Gotcha! 😂
                      </h3>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <p className="text-xl text-gray-700">
                          Just kidding! 😄
                        </p>
                        <p className="text-lg text-gray-600 mt-4">
                          Hope you laughed! That's what birthdays are for! 🎉
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* PAGE 9: MORE PHOTOS */}
            {currentPage === 9 && (
              <motion.div
                key="page9"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl"
              >
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-cyan-600 mb-6 text-center">
                    📷 More Precious Moments
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5, zIndex: 10 }}
                        className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer"
                      >
                        <div className="w-full h-full bg-gradient-to-br from-cyan-300 to-blue-300 flex items-center justify-center">
                          <FaSmile className="text-white text-3xl" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.p
                    className="text-center text-gray-600 mt-6 italic"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Every moment with you is picture-perfect! 💫
                  </motion.p>
                </div>
              </motion.div>
            )}

            {/* PAGE 10: WISHES */}
            {currentPage === 10 && (
              <motion.div
                key="page10"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl"
              >
                <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-fuchsia-600 mb-6 text-center">
                    ✨ My Birthday Wishes For You ✨
                  </h2>
                  <div className="space-y-4">
                    {[
                      "May all your dreams come true! 🌟",
                      "May you find joy in every moment! 😊",
                      "May success follow you everywhere! 🏆",
                      "May laughter fill your days! 😂",
                      "May love surround you always! 💕",
                      "May adventure call your name! 🌍",
                      "May you stay healthy and happy! 🌈",
                      "May this year be your best one yet! 🎊",
                    ].map((wish, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="text-2xl"
                        >
                          ⭐
                        </motion.div>
                        <span className="text-gray-700 text-lg">{wish}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* PAGE 11: THANK YOU & FINAL MESSAGE */}
            {currentPage === 11 && (
              <motion.div
                key="page11"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full max-w-2xl"
              >
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-8xl mb-6"
                  >
                    🎂
                  </motion.div>

                  <motion.h2
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Thank You For Being You! 💝
                  </motion.h2>

                  <div className="space-y-4 text-lg text-gray-700 mb-8">
                    <p>You make every day brighter just by being in it.</p>
                    <p>Here's to another year of amazing memories together!</p>
                    <p className="font-bold text-2xl text-purple-600">
                      HAPPY BIRTHDAY SHWEE! 🎉
                    </p>
                  </div>

                  <motion.div
                    className="flex justify-center gap-4 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -20, 0],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.1,
                          repeat: Infinity,
                        }}
                      >
                        {["🎈", "🎁", "🎉", "✨", "🌟"][i % 5]}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-xl"
                  >
                    <p className="text-xl font-semibold mb-2">Once Again...</p>
                    <p className="text-3xl font-bold">HAPPY BIRTHDAY! 🥳</p>
                    <p className="text-sm mt-4 opacity-90">
                      May this year bring you endless joy, love, and laughter!
                    </p>
                  </motion.div>

                  <motion.p
                    className="text-gray-500 italic mt-8"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ~ With all my love and best wishes ~
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 p-4 bg-gradient-to-r from-purple-600 to-pink-600">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentPage === i ? "bg-white w-8" : "bg-white/40"
              }`}
              whileHover={{ scale: 1.5 }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
          }}
          animate={{
            y: -50,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            fontSize: `${Math.random() * 30 + 20}px`,
            opacity: 0.3,
          }}
        >
          {["🎈", "🎁", "⭐", "✨", "💝", "🎉"][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}
    </div>
  );
};

export default BirthdayBook;
