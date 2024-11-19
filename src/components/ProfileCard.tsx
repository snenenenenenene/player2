import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import { Profile } from '../types';
import { Card, CardContent, CardFooter, CardHeader } from './ui/Card';
import Button from './ui/Button';
import GeekMeterChart from './GeekMeterChart';
import FandomBadges from './FandomBadges';
import SkillRatings from './SkillRatings';
import toast from 'react-hot-toast';

interface ProfileCardProps {
  profile: Profile;
  onSwipe: (direction: 'left' | 'right') => void;
}

export default function ProfileCard({ profile, onSwipe }: ProfileCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const handleLike = () => {
    toast.success(`You liked ${profile.name}!`, {
      icon: '💖',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    onSwipe('right');
  };

  const handlePass = () => {
    toast(`Maybe next time!`, {
      icon: '👋',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    onSwipe('left');
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="relative p-0">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-96 object-cover"
          onClick={() => setShowDetails(!showDetails)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-white">{profile.name}, {profile.age}</h2>
              <p className="text-purple-300">{profile.location}</p>
            </div>
            <div className="space-y-2">
              <span className="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white">
                Lvl {profile.powerLevel}
              </span>
              <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white">
                {profile.matchPercentage}% Match
              </span>
            </div>
          </div>
        </div>
      </CardHeader>

      {showDetails && (
        <CardContent className="space-y-6">
          <p className="text-gray-300">{profile.bio}</p>
          
          <GeekMeterChart data={profile.geekMeter} />
          <FandomBadges badges={profile.fandomBadges} />
          <SkillRatings ratings={profile.skillRatings} />
          
          {profile.favoriteQuote && (
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-gray-300 italic">"{profile.favoriteQuote}"</p>
            </div>
          )}
        </CardContent>
      )}

      <CardFooter className="flex justify-center gap-4 p-4">
        <Button
          variant="outline"
          size="lg"
          className="rounded-full p-4"
          onClick={handlePass}
        >
          <X className="text-red-500" size={24} />
        </Button>
        <Button
          variant="primary"
          size="lg"
          className="rounded-full p-4"
          onClick={handleLike}
        >
          <Heart className="text-white" size={24} />
        </Button>
      </CardFooter>
    </Card>
  );
}