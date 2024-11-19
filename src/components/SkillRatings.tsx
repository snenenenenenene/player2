import React from 'react';
import { SkillRating } from '../types';

interface SkillRatingsProps {
  ratings: SkillRating[];
}

export default function SkillRatings({ ratings }: SkillRatingsProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-purple-300">Skill Ratings</h4>
      <div className="grid grid-cols-2 gap-2">
        {ratings.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/10 p-2 rounded-lg"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-300">{skill.name}</span>
              <span className="text-sm font-medium text-purple-300">
                {skill.rating}/10
              </span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 rounded-full"
                style={{ width: `${(skill.rating / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}