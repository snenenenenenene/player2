import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function calculateMatchPercentage(userInterests: string[], otherInterests: string[]) {
  const commonInterests = userInterests.filter(interest => 
    otherInterests.includes(interest)
  );
  return Math.round((commonInterests.length / userInterests.length) * 100);
}

export function getRandomGeekQuote() {
  const quotes = [
    "May the Force be with you",
    "Live long and prosper",
    "Winter is coming",
    "I am Iron Man",
    "It's dangerous to go alone",
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
}