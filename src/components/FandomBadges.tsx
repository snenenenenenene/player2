import React from 'react';
import { FandomBadge } from '../types';

interface FandomBadgesProps {
  badges: FandomBadge[];
}

export default function FandomBadges({ badges }: FandomBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <div
          key={badge.id}
          className={`relative group flex items-center gap-2 px-3 py-1 rounded-full ${
            badge.isLimited
              ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300'
              : 'bg-white/10 text-purple-300'
          }`}
        >
          <img src={badge.icon} alt={badge.name} className="w-4 h-4" />
          <span className="text-sm">{badge.name}</span>
          {badge.isLimited && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-yellow-300 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Limited Edition
            </div>
          )}
        </div>
      ))}
    </div>
  );
}