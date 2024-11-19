import { appConfig } from '@/config/app';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Bell,
  Crown,
  Gamepad2,
  Settings,
  Zap
} from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasPremium] = useState(true); // Replace with actual premium status check

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        {/* Blur Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-lg" />

        {/* Main Header Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Gamepad2 size={32} className="text-purple-400" />
                {hasPremium && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center"
                  >
                    <Crown size={10} className="text-white" />
                  </motion.div>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                    {appConfig.name}
                  </span>
                </h1>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Zap size={12} className="text-yellow-400" />
                  <span>Premium Active</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Bell size={24} className="text-gray-300" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full" />
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-80 bg-gray-900 rounded-xl border border-white/10 shadow-xl"
                    >
                      <div className="p-4 border-b border-white/10">
                        <h3 className="font-medium text-white">Notifications</h3>
                      </div>
                      <div className="p-2 max-h-96 overflow-y-auto">
                        {/* Example Notification */}
                        <div className="p-3 hover:bg-white/5 rounded-lg transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                              <Heart size={20} className="text-purple-400" />
                            </div>
                            <div>
                              <p className="text-sm text-white">New match with Sarah!</p>
                              <p className="text-xs text-gray-400">2 minutes ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Settings */}
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Settings size={24} className="text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}