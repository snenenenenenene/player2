import React from 'react';
import { Search } from 'lucide-react';
import { mockProfiles } from '../data/mockProfiles';

export default function Discover() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by interests, games, or fandoms..."
          className="w-full bg-white/10 rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {mockProfiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-lg">{profile.name}, {profile.age}</h3>
            <p className="text-sm text-gray-300">{profile.location}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag.id}
                  className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}