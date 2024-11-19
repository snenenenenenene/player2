import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { mockProfiles } from '../data/mockProfiles';
import { Profile } from '../types';

export default function Home() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initialize profiles
  useEffect(() => {
    setProfiles(mockProfiles);
  }, []);

  const handleSwipe = (direction: 'left' | 'right') => {
    // Remove the top card
    setCurrentIndex(prev => prev + 1);

    // Optional: Add more profiles when running low
    if (currentIndex + 3 >= profiles.length) {
      // In a real app, you'd fetch more profiles here
      setProfiles(prev => [...prev, ...mockProfiles]);
    }
  };

  const activeProfiles = profiles.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative h-[600px] max-w-md mx-auto">
      <AnimatePresence>
        {activeProfiles.map((profile, index) => (
          <ProfileCard
            key={`${profile.id}-${currentIndex + index}`}
            profile={profile}
            onSwipe={handleSwipe}
            active={index === 0}
            index={index}
          />
        ))}
      </AnimatePresence>

      {/* Empty State */}
      {currentIndex >= profiles.length && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-gray-900 to-black rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-2">
            No More Profiles
          </h3>
          <p className="text-gray-400 mb-4">
            You've seen all available profiles. Check back later for more matches!
          </p>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setProfiles(mockProfiles);
            }}
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}