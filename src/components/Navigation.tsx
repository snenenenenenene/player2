import { motion } from 'framer-motion';
import {
  Heart,
  Home,
  MessageSquare,
  Search,
  User
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Discover', path: '/discover' },
    { icon: Heart, label: 'Matches', path: '/matches' },
    { icon: MessageSquare, label: 'Chat', path: '/messages' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
        <div className="flex justify-between items-center p-2">
          {navItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path;

            return (
              <Link
                key={path}
                to={path}
                className="relative flex flex-col items-center flex-1 p-2"
              >
                <div className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="navHighlight"
                      className="absolute inset-0 -m-1 rounded-xl bg-purple-500/20"
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                  <Icon
                    size={24}
                    className={`relative z-10 transition-colors ${isActive ? 'text-purple-400' : 'text-gray-400'
                      }`}
                  />
                </div>
                <span className={`text-xs mt-1 transition-colors ${isActive ? 'text-purple-400' : 'text-gray-400'
                  }`}>
                  {label}
                </span>
                {label === 'Chat' && (
                  <span className="absolute top-1 right-4 w-2 h-2 bg-green-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}