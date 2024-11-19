export const appConfig = {
  name: 'Player2',
  description: 'Find your perfect gaming companion',
  version: '1.0.0',
  themeColor: '#6200EA',
  social: {
    discord: 'https://discord.gg/player2',
    twitter: 'https://twitter.com/player2app',
    github: 'https://github.com/player2app'
  },
  features: {
    enableVoiceChat: true,
    enableGameIntegration: true,
    maxPhotosPerProfile: 6,
    maxBioLength: 500
  }
} as const;