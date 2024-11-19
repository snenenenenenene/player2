import { AnimatePresence, motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Image, Info, User, Zap } from 'lucide-react';
import { useRef, useState } from 'react';
import { cn } from '../lib/utils';
import { Profile } from '../types';

interface ProfileCardProps {
  profile: Profile;
  onSwipe: (direction: 'left' | 'right') => void;
  index: number;
  active: boolean;
}

export default function ProfileCard({ profile, onSwipe, index, active }: ProfileCardProps) {
  // States
  const [expandedView, setExpandedView] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'info' | 'photos' | 'about' | 'shared'>('info');
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);

  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);

  // Animation controls
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);

  // All photos array
  const allPhotos = [profile.image, ...(profile.cosplayGallery || [])];

  // Handle card swipe
  const handleDragEnd = async (_, info: any) => {
    const swipeThreshold = 100;
    const swipe = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(swipe) * velocity >= swipeThreshold) {
      const direction = swipe > 0 ? 'right' : 'left';
      await controls.start({
        x: direction === 'right' ? 500 : -500,
        opacity: 0,
        transition: { duration: 0.2 }
      });
      onSwipe(direction);
    } else {
      controls.start({
        x: 0,
        rotation: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      });
    }
  };

  // Photo navigation
  const navigatePhoto = (direction: 'prev' | 'next') => {
    setCurrentPhotoIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % allPhotos.length;
      }
      return prev === 0 ? allPhotos.length - 1 : prev - 1;
    });
  };

  // Expanded view transitions
  const expandCard = () => {
    setExpandedView(true);
  };

  const minimizeCard = () => {
    setExpandedView(false);
    setShowPhotoGallery(false);
    setActiveTab('info');
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ x, y: active ? y : 0, rotate: active ? rotate : 0, zIndex: 1000 - index }}
      animate={controls}
      drag={active && !expandedView ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className={cn(
        "absolute left-0 right-0 mx-auto",
        expandedView ? "fixed inset-0 z-50" : "w-full"
      )}
      initial={false}
    >
      <motion.div
        className={cn(
          "bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden",
          "shadow-2xl transition-shadow",
          expandedView ? "h-full" : "h-[600px]",
          "relative"
        )}
        layout
      >
        {/* Main Card Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`photo-${currentPhotoIndex}`}
            className="relative h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Current Photo */}
            <img
              src={allPhotos[currentPhotoIndex]}
              alt={profile.name}
              className="w-full h-full object-cover"
            />

            {/* Photo Navigation Dots */}
            <div className="absolute top-4 left-0 right-0 flex justify-center gap-1">
              {allPhotos.map((_, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "w-1 h-1 rounded-full transition-all",
                    currentPhotoIndex === idx
                      ? "bg-white w-6"
                      : "bg-white/50"
                  )}
                />
              ))}
            </div>

            {/* Photo Navigation Buttons */}
            {allPhotos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto('prev');
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto('next');
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Swipe Indicators */}
            {active && !expandedView && (
              <>
                <motion.div
                  className="absolute left-6 top-6 bg-red-500 text-white px-6 py-2 rounded-full font-semibold transform -rotate-12"
                  style={{ opacity: nopeOpacity }}
                >
                  NOPE
                </motion.div>
                <motion.div
                  className="absolute right-6 top-6 bg-green-500 text-white px-6 py-2 rounded-full font-semibold transform rotate-12"
                  style={{ opacity: likeOpacity }}
                >
                  LIKE
                </motion.div>
              </>
            )}

            {/* Profile Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
              <div className="flex justify-between items-end">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    {profile.name}, {profile.age}
                    {profile.currentlyPlaying && (
                      <span className="text-sm px-3 py-1 bg-green-500/20 text-green-300 rounded-full">
                        Playing {profile.currentlyPlaying}
                      </span>
                    )}
                  </h2>
                  <p className="text-gray-300">{profile.location}</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      Lvl {profile.powerLevel}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {profile.matchPercentage}% Match
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expand Button */}
            <button
              onClick={expandedView ? minimizeCard : expandCard}
              className="absolute bottom-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Info size={20} className="text-white" />
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Expanded View Content */}
        <AnimatePresence>
          {expandedView && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="absolute inset-0 bg-black/95 z-10"
            >
              {/* Navigation Tabs */}
              <div className="flex border-b border-white/10">
                {[
                  { id: 'info', icon: Info, label: 'Info' },
                  { id: 'photos', icon: Image, label: 'Photos' },
                  { id: 'about', icon: User, label: 'About' },
                  { id: 'shared', icon: Zap, label: 'Shared' }
                ].map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as any)}
                    className={cn(
                      "flex-1 py-4 flex items-center justify-center gap-2 transition-colors",
                      activeTab === id
                        ? "text-purple-400 border-b-2 border-purple-400"
                        : "text-gray-500 hover:text-gray-300"
                    )}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(100vh-64px)]">
                <AnimatePresence mode="wait">
                  {activeTab === 'info' && (
                    <motion.div
                      key="info"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <p className="text-gray-300 text-lg">{profile.bio}</p>

                      {/* Interests */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Interests</h3>
                        <div className="flex flex-wrap gap-2">
                          {profile.tags.map(tag => (
                            <span
                              key={tag.id}
                              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Favorite Media */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Favorite Games</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {profile.favoriteMedia.games.map(game => (
                            <div key={game} className="p-3 bg-white/5 rounded-lg">
                              {game}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Achievements</h3>
                        <div className="grid gap-2">
                          {profile.achievements.map(achievement => (
                            <div
                              key={achievement.id}
                              className={cn(
                                "p-3 rounded-lg flex items-center gap-3",
                                achievement.rarity === 'legendary'
                                  ? 'bg-yellow-500/20 text-yellow-300'
                                  : 'bg-purple-500/20 text-purple-300'
                              )}
                            >
                              <span className="text-2xl">{achievement.icon}</span>
                              <div>
                                <h4 className="font-medium">{achievement.name}</h4>
                                <p className="text-sm opacity-80">{achievement.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'photos' && (
                    <motion.div
                      key="photos"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {allPhotos.map((photo, idx) => (
                        <div
                          key={idx}
                          className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => {
                            setCurrentPhotoIndex(idx);
                            minimizeCard();
                          }}
                        >
                          <img
                            src={photo}
                            alt={`${profile.name}'s photo ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'about' && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Looking For</h3>
                        <div className="flex flex-wrap gap-2">
                          {profile.lookingFor.map((item, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Gaming Stats</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-white/5 rounded-lg">
                            <p className="text-gray-400 text-sm">Weekly Gaming</p>
                            <p className="text-xl text-white">{profile.geekStats.weeklyGamingHours}h</p>
                          </div>
                          <div className="p-4 bg-white/5 rounded-lg">
                            <p className="text-gray-400 text-sm">Conventions</p>
                            <p className="text-xl text-white">{profile.geekStats.conventionsAttended}</p>
                          </div>
                        </div>
                      </div>

                      {profile.favoriteQuote && (
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-white">Favorite Quote</h3>
                          <blockquote className="p-4 bg-white/5 rounded-lg border-l-4 border-purple-500">
                            <p className="text-gray-300 italic">"{profile.favoriteQuote}"</p>
                          </blockquote>
                        </div>
                      )}

                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Social Links</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {profile.discordUsername && (
                            <a
                              href={`discord://discord.com/users/${profile.discordUsername}`}
                              className="p-3 bg-[#5865F2]/20 text-[#5865F2] rounded-lg flex items-center gap-2"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                              </svg>
                              <span>{profile.discordUsername}</span>
                            </a>
                          )}
                          {profile.twitchUsername && (
                            <a
                              href={`https://twitch.tv/${profile.twitchUsername}`}
                              className="p-3 bg-[#9146FF]/20 text-[#9146FF] rounded-lg flex items-center gap-2"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                              </svg>
                              <span>{profile.twitchUsername}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'shared' && (
                    <motion.div
                      key="shared"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="p-6 bg-purple-500/20 rounded-lg text-center">
                        <h3 className="text-2xl font-bold text-purple-300 mb-2">
                          {profile.matchPercentage}% Match
                        </h3>
                        <p className="text-gray-300">Based on your shared interests</p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Shared Interests</h3>
                        <div className="grid gap-3">
                          {profile.tags.map(tag => (
                            <div
                              key={tag.id}
                              className="p-3 bg-white/5 rounded-lg flex items-center justify-between"
                            >
                              <span className="text-purple-300">{tag.name}</span>
                              <span className="text-sm text-gray-400">{tag.category}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {profile.favoriteMedia && (
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-white">Shared Media</h3>
                          <div className="grid gap-3">
                            {Object.entries(profile.favoriteMedia).map(([category, items]) => (
                              <div key={category} className="space-y-2">
                                <h4 className="text-sm font-medium text-gray-400 capitalize">
                                  {category}
                                </h4>
                                <div className="grid gap-2">
                                  {items.map((item, idx) => (
                                    <div
                                      key={idx}
                                      className="p-3 bg-white/5 rounded-lg text-gray-300"
                                    >
                                      {item}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}