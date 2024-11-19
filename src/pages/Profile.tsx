import React from 'react';
import { Settings, Edit2, Share2 } from 'lucide-react';
import { mockProfiles } from '../data/mockProfiles';
import { Card, CardContent } from '../components/ui/Card';
import { formatDate } from '../lib/utils';

export default function Profile() {
  const profile = mockProfiles[0]; // Using first mock profile as example

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Profile</h2>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Settings size={24} />
        </button>
      </div>

      <div className="relative">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <button className="absolute bottom-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
          <Edit2 size={20} />
        </button>
      </div>

      <Card>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{profile.name}, {profile.age}</h3>
              <p className="text-gray-400">{profile.location}</p>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Share2 size={20} />
            </button>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">About Me</h4>
            <p className="text-gray-300">{profile.bio}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">My Tags</h4>
            <div className="flex flex-wrap gap-2">
              {profile.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Achievements</h4>
            <div className="grid gap-3">
              {profile.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-3 rounded-lg flex items-center gap-3 ${
                    achievement.rarity === 'legendary' 
                      ? 'bg-yellow-500/20 text-yellow-300'
                      : 'bg-purple-500/20 text-purple-300'
                  }`}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <h5 className="font-medium">{achievement.name}</h5>
                    <p className="text-sm opacity-80">{achievement.description}</p>
                    <p className="text-xs mt-1">Unlocked: {formatDate(achievement.unlockedAt)}</p>
                  </div>
                  <span className="text-xs uppercase tracking-wider">
                    {achievement.rarity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Currently Playing</h4>
            {profile.currentlyPlaying ? (
              <p className="text-gray-300">{profile.currentlyPlaying}</p>
            ) : (
              <p className="text-gray-500 italic">Not playing anything right now</p>
            )}
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Currently Watching</h4>
            {profile.currentlyWatching ? (
              <p className="text-gray-300">{profile.currentlyWatching}</p>
            ) : (
              <p className="text-gray-500 italic">Not watching anything right now</p>
            )}
          </div>

          {profile.favoriteQuote && (
            <div className="space-y-2">
              <h4 className="font-medium">Favorite Quote</h4>
              <blockquote className="text-gray-300 italic border-l-4 border-purple-500 pl-4">
                "{profile.favoriteQuote}"
              </blockquote>
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-medium">Looking For</h4>
            <div className="flex flex-wrap gap-2">
              {profile.lookingFor.map((item, index) => (
                <span
                  key={index}
                  className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}