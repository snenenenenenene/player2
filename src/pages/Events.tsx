import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Local Comic Con",
    date: "2024-04-15",
    location: "Convention Center",
    attendees: 156,
    image: "https://images.unsplash.com/photo-1612036782180-6f0822045d23?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Anime Movie Night",
    date: "2024-04-20",
    location: "Geek Cafe",
    attendees: 42,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Board Game Tournament",
    date: "2024-04-25",
    location: "Game Store",
    attendees: 28,
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&auto=format&fit=crop&q=60",
  },
];

export default function Events() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      <div className="grid gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                Join Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}