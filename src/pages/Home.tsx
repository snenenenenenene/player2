import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
import { mockProfiles } from '../data/mockProfiles';

export default function Home() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const handleSwipe = (direction: 'left' | 'right') => {
    setDirection(direction);
    setTimeout(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % mockProfiles.length);
      setDirection(null);
    }, 300);
  };

  return (
    <div className="max-w-md mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProfileIndex}
          initial={{ x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 'left' ? 300 : direction === 'right' ? -300 : 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ProfileCard
            profile={mockProfiles[currentProfileIndex]}
            onSwipe={handleSwipe}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}