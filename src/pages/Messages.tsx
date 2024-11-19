import React from 'react';
import { mockProfiles } from '../data/mockProfiles';

export default function Messages() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Messages</h2>
      <div className="space-y-4">
        {mockProfiles.map((profile) => (
          <div
            key={profile.id}
            className="flex items-center gap-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{profile.name}</h3>
              <p className="text-sm text-gray-400">Let's play some games together!</p>
            </div>
            <div className="text-xs text-gray-400">2m ago</div>
          </div>
        ))}
      </div>
    </div>
  );
}