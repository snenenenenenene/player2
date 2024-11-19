export interface GeekTag {
  id: string;
  name: string;
  category: GeekCategory;
}

export type GeekCategory = 
  | 'Gaming'
  | 'Anime'
  | 'Comics'
  | 'SciFi'
  | 'Fantasy'
  | 'Tabletop'
  | 'Cosplay'
  | 'Tech';

export interface GeekMeter {
  category: GeekCategory;
  level: number;
}

export interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
  rarity: 'common' | 'rare' | 'legendary';
  unlockedAt: string;
}

export interface FandomBadge {
  id: string;
  name: string;
  icon: string;
  category: GeekCategory;
  isLimited: boolean;
}

export interface SkillRating {
  name: string;
  rating: number;
  category: GeekCategory;
}

export interface Profile {
  id: number;
  name: string;
  age: number;
  image: string;
  bio: string;
  location: string;
  powerLevel: number;
  mainInterest: GeekCategory;
  geekMeter: GeekMeter[];
  tags: GeekTag[];
  achievements: Achievement[];
  fandomBadges: FandomBadge[];
  skillRatings: SkillRating[];
  currentlyPlaying?: string;
  currentlyWatching?: string;
  favoriteQuote?: string;
  lookingFor: string[];
  matchPercentage: number;
  discordUsername?: string;
  twitchUsername?: string;
  spotifyPlaylist?: string;
  cosplayGallery?: string[];
  favoriteMedia: {
    games: string[];
    shows: string[];
    books: string[];
  };
  geekStats: {
    weeklyGamingHours: number;
    conventionsAttended: number;
    yearsInMainFandom: number;
  };
}