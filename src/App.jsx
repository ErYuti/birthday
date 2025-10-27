import React, { useState, useRef, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaStar,
  FaGift,
  FaBirthdayCake,
  FaSmile,
} from "react-icons/fa";
import Confetti from "react-confetti";
import HTMLFlipBook from "react-pageflip";
import { useWindowSize } from "./hooks/useWindowSize";
import { speak } from "./utils/tts";

// ============ GREETING CARD COMPONENT ============
const GreetingCard = ({ onOpen }) => {
  /* ... (This code is perfect, no changes) ... */ return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4 overflow-hidden">
      {" "}
      <motion.div
        className="w-full max-w-md aspect-[3/4] rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center text-center cursor-pointer bg-white/10 backdrop-blur-lg border border-white/30"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
        whileHover={{ scale: 1.05 }}
        onClick={onOpen}
      >
        {" "}
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          To My Dearest Friend
        </h1>{" "}
        <FaHeart className="text-pink-400 text-5xl my-6" />{" "}
        <h2 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-white to-yellow-300">
          Shwee
        </h2>{" "}
        <motion.p
          className="text-white/80 font-light mt-10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨ Click to open your surprise ✨
        </motion.p>{" "}
      </motion.div>{" "}
    </div>
  );
};

// ============ CELEBRATION COMPONENT ============
const Celebration = ({ onComplete }) => {
  /* ... (This code is perfect, no changes) ... */ const { width, height } =
    useWindowSize();
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-700 to-red-600">
      {" "}
      <Confetti
        width={width}
        height={height}
        numberOfPieces={300}
        recycle={false}
      />{" "}
      <motion.h1
        className="text-5xl md:text-8xl font-black text-white z-10 text-center px-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.5, duration: 1.5 }}
      >
        🎉 Happy Birthday Shwee! 🎉
      </motion.h1>{" "}
    </div>
  );
};

// ============ PAGE COMPONENT for the book ============
const Page = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div
        className={`page-content ${
          props.scrollable ? "page-content-scroll overflow-y-auto" : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
});

// ============ THE BIRTHDAY BOOK COMPONENT ============
const BirthdayBook = () => {
  const bookRef = useRef();
  const audioRef = useRef();

  // Define all your pages here
  const pages = [
    {
      type: "cover",
      textToSpeak: "A very special birthday book, made just for Shwee.",
    },
    {
      content: (
        <div className="w-full max-w-2xl bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg">
          {" "}
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            For You, Shwee 💝
          </h1>{" "}
          <p className="text-lg text-gray-700 leading-relaxed space-y-4">
            {" "}
            <span className="block">
              On your special day, I wanted to say thank you. Thank you for
              being you.
            </span>{" "}
            <span className="block">
              You're more than special – you're a one-of-a-kind, slightly-crazy,
              and absolutely amazing human being! 🌟
            </span>{" "}
            <span className="block italic">
              I'm so thankful for everything. May God bless you with all the
              happiness in the world... and maybe a better sense of direction so
              we don't get lost again! 😉
            </span>{" "}
          </p>{" "}
        </div>
      ),
      textToSpeak:
        "For You, Shwee. On your special day, I wanted to say thank you. Thank you for being you. You're more than special – you're a one-of-a-kind, slightly-crazy, and absolutely amazing human being! I'm so thankful for everything. May God bless you with all the happiness in the world... and maybe a better sense of direction so we don't get lost again! Happy Birthday!",
    },
    {
      content: (
        <div className="w-full max-w-2xl bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg">
          {" "}
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
            ✨ A Poem Just For You ✨
          </h2>{" "}
          <div className="space-y-4 text-lg text-gray-700 font-serif italic text-center">
            {" "}
            <p>Another year, another smile,</p>
            <p>You make every moment worthwhile.</p>
            <p>With laughter bright and spirit free,</p>
            <p>You're the best friend there could be!</p>
            <br />
            <p>Happy Birthday, dear Shwee! 🎉</p>{" "}
          </div>{" "}
        </div>
      ),
      textToSpeak:
        "A Poem Just For You. Another year, another smile, You make every moment worthwhile. With laughter bright and spirit free, You're the best friend there could be! Happy Birthday, dear Shwee!",
    },
    {
      content: (
        <div className="w-full max-w-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
          {" "}
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
            📸 Our Amazing Memories
          </h2>{" "}
          <div className="grid grid-cols-2 gap-4">
            {" "}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-gray-300 flex items-center justify-center shadow-md"
              >
                Photo {i}
              </div>
            ))}{" "}
          </div>{" "}
          <p className="text-center text-gray-600 mt-6 italic">
            So many amazing moments together! 💕
          </p>{" "}
        </div>
      ),
      textToSpeak: "Our Amazing Memories. So many amazing moments together!",
    },
    {
      content: (
        <div className="w-full max-w-2xl bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg">
          {" "}
          <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">
            🎯 Fun Facts About Us!
          </h2>{" "}
          <div className="space-y-3 text-left">
            {" "}
            <p>🍕 Pizza slices eaten: Too many to count!</p>
            <p>😂 Inside jokes: 47</p>
            <p>🎬 Movies re-watched: At least 20</p>
            <p>☕ Coffee sessions: Infinite</p>
            <p>🎵 Terrible singing duets: All of them!</p>{" "}
          </div>{" "}
        </div>
      ),
      textToSpeak:
        "Fun Facts About Us! Pizza slices eaten: Too many to count! Inside jokes: 47. Movies re-watched: At least 20. Coffee sessions: Infinite. Terrible singing duets: All of them!",
    },
    {
      content: (
        <div className="w-full max-w-2xl bg-gradient-to-br from-fuchsia-50 to-pink-50 p-8 rounded-2xl shadow-lg text-center">
          {" "}
          <h2 className="text-3xl font-bold text-fuchsia-600 mb-6">
            ✨ My Wishes For You ✨
          </h2>{" "}
          <div className="space-y-3 text-lg">
            {" "}
            <p>🌟 May all your dreams come true!</p>
            <p>😊 May you find joy in every moment!</p>
            <p>😂 May laughter fill your days!</p>
            <p>💕 May love surround you always!</p>
            <p>🎊 May this year be your best one yet!</p>{" "}
          </div>{" "}
        </div>
      ),
      textToSpeak:
        "My Birthday Wishes For You. May all your dreams come true! May you find joy in every moment! May laughter fill your days! May love surround you always! May this year be your best one yet!",
    },
    {
      content: (
        <div className="w-full max-w-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg text-center">
          {" "}
          <FaBirthdayCake className="text-8xl text-pink-400 mx-auto mb-6" />{" "}
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Thank You For Being You!
          </h2>{" "}
          <p className="text-lg text-gray-700">
            Here's to another year of amazing memories!
          </p>
          <p className="font-bold text-2xl text-purple-600 mt-4">
            HAPPY BIRTHDAY SHWEE!
          </p>{" "}
        </div>
      ),
      textToSpeak:
        "Thank You For Being You! Here's to another year of amazing memories! HAPPY BIRTHDAY SHWEE!",
    },
    { type: "back" },
  ];

  const onPageFlip = (e) => {
    const pageIndex = e.data;
    if (pageIndex > 0 && audioRef.current.paused) {
      audioRef.current
        .play()
        .catch((err) => console.error("Audio play failed:", err));
    }
    const pageData = pages[pageIndex];
    if (pageData && pageData.textToSpeak) {
      speak(pageData.textToSpeak);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center p-4">
      <audio ref={audioRef} src="/assets/birthday-music.mp3" loop />
      <HTMLFlipBook
        width={350}
        height={500}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={420}
        maxHeight={1350}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPageFlip}
        className="book-container"
        ref={bookRef}
      >
        <Page number={0}>
          <div className="page-cover-front">
            <h2 className="text-2xl font-serif italic text-white/90">
              A Special Gift For
            </h2>
            <h1
              className="text-7xl text-white font-bold my-4"
              style={{ fontFamily: '"Pacifico", cursive' }}
            >
              Shwee
            </h1>
            <div className="w-32 h-1 bg-white/50 mx-auto my-4 rounded-full"></div>
            <p className="text-xl text-white/90 animate-pulse">Open to begin</p>
          </div>
        </Page>

        {pages.slice(1, -1).map((page, index) => (
          <Page key={index} number={index + 1} scrollable={page.scrollable}>
            {page.content}
          </Page>
        ))}

        <Page number={pages.length - 1}>
          <div className="page-cover-back">
            <h2 className="text-2xl font-serif">The End</h2>
          </div>
        </Page>
      </HTMLFlipBook>
    </div>
  );
};

// ============ MAIN APP CONTROLLER ============
function App() {
  const [appState, setAppState] = useState("card"); // "card", "celebration", "book"

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {appState === "card" && (
          <motion.div
            key="card"
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
          >
            <GreetingCard onOpen={() => setAppState("celebration")} />
          </motion.div>
        )}
        {appState === "celebration" && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Celebration onComplete={() => setAppState("book")} />
          </motion.div>
        )}
        {appState === "book" && (
          <motion.div
            key="book"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <BirthdayBook />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
