import React from 'react';
import { Gamepad2, MessageSquare, User } from 'lucide-react';
import { appConfig } from '@/config/app';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-4 px-6 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Gamepad2 size={28} className="text-purple-300" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">
            {appConfig.name}
          </h1>
        </div>
        
        <nav className="flex gap-6">
          <button className="hover:text-purple-300 transition-colors">
            <MessageSquare size={24} />
          </button>
          <button className="hover:text-purple-300 transition-colors">
            <User size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}