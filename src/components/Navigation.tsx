import React from 'react';
import { Home, MessageSquare, User, Search, Calendar } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Discover', path: '/discover' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: Calendar, label: 'Events', path: '/events' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-2 px-4">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              location.pathname === path
                ? 'text-purple-300'
                : 'text-gray-300 hover:text-purple-300'
            }`}
          >
            <Icon size={24} />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}