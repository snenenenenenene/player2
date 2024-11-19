import { Profile, GeekTag, GeekCategory } from '../types';

const tags: GeekTag[] = [
  { id: '1', name: 'RPG Enthusiast', category: 'Gaming' },
  { id: '2', name: 'Shonen Fan', category: 'Anime' },
  { id: '3', name: 'Marvel', category: 'Comics' },
  { id: '4', name: 'Star Wars', category: 'SciFi' },
  { id: '5', name: 'D&D', category: 'Tabletop' },
  { id: '6', name: 'Cyberpunk', category: 'SciFi' },
  { id: '7', name: 'JRPG', category: 'Gaming' },
  { id: '8', name: 'Studio Ghibli', category: 'Anime' },
  { id: '9', name: 'Tolkien', category: 'Fantasy' },
  { id: '10', name: 'Critical Role', category: 'Tabletop' },
];

export const mockProfiles: Profile[] = [
  {
    id: 1,
    name: "Luna",
    age: 24,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "Aspiring game developer by day, raid leader by night. Looking for someone to share adventures with, both digital and real!",
    location: "Seattle, WA",
    powerLevel: 42,
    mainInterest: "Gaming",
    geekMeter: [
      { category: "Gaming", level: 95 },
      { category: "Anime", level: 80 },
      { category: "Comics", level: 65 },
      { category: "SciFi", level: 75 }
    ],
    tags: [tags[0], tags[6], tags[4], tags[9]],
    achievements: [
      { id: "1", name: "Platinum Trophy Hunter", icon: "🏆", description: "Earned 100 platinum trophies", rarity: "legendary", unlockedAt: "2024-01-15" },
      { id: "2", name: "Convention Veteran", icon: "🎭", description: "Attended 10+ conventions", rarity: "rare", unlockedAt: "2023-12-20" }
    ],
    fandomBadges: [
      { id: "1", name: "Final Fantasy", icon: "⚔️", category: "Gaming", isLimited: true },
      { id: "2", name: "Critical Role", icon: "🎲", category: "Tabletop", isLimited: false }
    ],
    skillRatings: [
      { name: "Gaming", rating: 9, category: "Gaming" },
      { name: "Cosplay", rating: 7, category: "Cosplay" },
      { name: "Game Dev", rating: 8, category: "Tech" }
    ],
    currentlyPlaying: "Baldur's Gate 3",
    currentlyWatching: "Demon Slayer",
    favoriteQuote: "The cake is a lie",
    lookingFor: ["Gaming Partner", "Convention Buddy", "Creative Collaborator"],
    matchPercentage: 85,
    discordUsername: "Luna#1234",
    twitchUsername: "LunaGames",
    spotifyPlaylist: "https://open.spotify.com/playlist/123",
    cosplayGallery: [
      "https://images.unsplash.com/photo-1612036782180-6f0822045d23?w=800",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800"
    ],
    favoriteMedia: {
      games: ["Final Fantasy VII", "Baldur's Gate 3", "Mass Effect"],
      shows: ["Demon Slayer", "Critical Role", "The Mandalorian"],
      books: ["Name of the Wind", "Mistborn", "Neuromancer"]
    },
    geekStats: {
      weeklyGamingHours: 20,
      conventionsAttended: 12,
      yearsInMainFandom: 15
    }
  },
  {
    id: 2,
    name: "Alex",
    age: 27,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "Anime enthusiast and manga collector. Can quote entire episodes of Cowboy Bebop. Let's debate sub vs dub!",
    location: "Austin, TX",
    powerLevel: 38,
    mainInterest: "Anime",
    geekMeter: [
      { category: "Anime", level: 90 },
      { category: "Gaming", level: 70 },
      { category: "Comics", level: 85 },
      { category: "Tech", level: 60 }
    ],
    tags: [tags[1], tags[7], tags[2], tags[3]],
    achievements: [
      { id: "3", name: "Anime Marathon", icon: "📺", description: "Watched 24 hours straight", rarity: "legendary", unlockedAt: "2024-02-01" },
      { id: "4", name: "Manga Collector", icon: "📚", description: "1000+ volumes", rarity: "rare", unlockedAt: "2024-01-10" }
    ],
    fandomBadges: [
      { id: "3", name: "Studio Ghibli", icon: "🐉", category: "Anime", isLimited: true },
      { id: "4", name: "Shonen Jump", icon: "⚡", category: "Anime", isLimited: false }
    ],
    skillRatings: [
      { name: "Anime Knowledge", rating: 9, category: "Anime" },
      { name: "Drawing", rating: 8, category: "Tech" },
      { name: "Japanese", rating: 7, category: "Tech" }
    ],
    currentlyWatching: "Jujutsu Kaisen",
    currentlyPlaying: "Persona 5",
    favoriteQuote: "See you space cowboy...",
    lookingFor: ["Anime Marathon Partner", "Comic Con Buddy", "Gaming Friend"],
    matchPercentage: 92,
    discordUsername: "Alex#5678",
    twitchUsername: "AlexAnime",
    spotifyPlaylist: "https://open.spotify.com/playlist/456",
    cosplayGallery: [
      "https://images.unsplash.com/photo-1612036782180-6f0822045d23?w=800",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800"
    ],
    favoriteMedia: {
      games: ["Persona 5", "Final Fantasy XIV", "Genshin Impact"],
      shows: ["Cowboy Bebop", "Jujutsu Kaisen", "Attack on Titan"],
      books: ["Manga Collection", "Light Novels", "Comics"]
    },
    geekStats: {
      weeklyGamingHours: 15,
      conventionsAttended: 8,
      yearsInMainFandom: 12
    }
  },
  {
    id: 3,
    name: "Sarah",
    age: 25,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "Tech enthusiast and cyberpunk aficionado. Building my own arcade cabinet. Looking for someone to hack the planet with.",
    location: "San Francisco, CA",
    powerLevel: 45,
    mainInterest: "Tech",
    geekMeter: [
      { category: "Tech", level: 95 },
      { category: "Gaming", level: 85 },
      { category: "SciFi", level: 90 },
      { category: "Comics", level: 70 }
    ],
    tags: [tags[5], tags[3], tags[0], tags[2]],
    achievements: [
      { id: "5", name: "GitHub Star", icon: "⭐", description: "1000+ stars on projects", rarity: "legendary", unlockedAt: "2024-03-01" },
      { id: "6", name: "Hackathon Winner", icon: "💻", description: "First place finish", rarity: "rare", unlockedAt: "2024-02-15" }
    ],
    fandomBadges: [
      { id: "5", name: "Cyberpunk", icon: "🤖", category: "SciFi", isLimited: true },
      { id: "6", name: "Matrix", icon: "🕶️", category: "SciFi", isLimited: false }
    ],
    skillRatings: [
      { name: "Programming", rating: 9, category: "Tech" },
      { name: "Hardware", rating: 8, category: "Tech" },
      { name: "Gaming", rating: 7, category: "Gaming" }
    ],
    currentlyPlaying: "Cyberpunk 2077",
    favoriteQuote: "I know kung fu",
    lookingFor: ["Coding Partner", "Gaming Buddy", "Sci-Fi Enthusiast"],
    matchPercentage: 78,
    discordUsername: "Sarah#9012",
    twitchUsername: "SarahCodes",
    spotifyPlaylist: "https://open.spotify.com/playlist/789",
    cosplayGallery: [
      "https://images.unsplash.com/photo-1612036782180-6f0822045d23?w=800",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800"
    ],
    favoriteMedia: {
      games: ["Cyberpunk 2077", "Deus Ex", "System Shock"],
      shows: ["Mr. Robot", "Black Mirror", "Altered Carbon"],
      books: ["Neuromancer", "Snow Crash", "Ready Player One"]
    },
    geekStats: {
      weeklyGamingHours: 25,
      conventionsAttended: 15,
      yearsInMainFandom: 10
    }
  }
];