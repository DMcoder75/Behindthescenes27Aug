import React, { useState, useEffect } from 'react'
import { Play, Star, Calendar, Clock, Film } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import youtubeService from '../services/youtubeService'

// 2000s movies data
const movies2000s = [
  {
    id: 1,
    title: "Gladiator",
    year: 2000,
    genre: "Action, Drama",
    rating: 8.5,
    duration: "155 min",
    poster: "/images/PqXwtFABUi5k.jpg",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    behindScenes: [{ id: 'gQw4w9WgXcQ', title: 'Gladiator | Behind the Scenes PART 1' }]
  },
  {
    id: 2,
    title: "Memento",
    year: 2000,
    genre: "Mystery, Thriller",
    rating: 8.4,
    duration: "113 min",
    poster: "/images/memQw4w9WgXcQ.jpg",
    description: "A man with short-term memory loss attempts to track down his wife's murderer.",
    director: "Christopher Nolan",
    cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
    behindScenes: [{ id: 'memQw4w9WgXcQ', title: 'Memento (2000) | Making of a MASTERPIECE | Christopher Nolan' }]
  },
  {
    id: 7,
    title: "Lagaan",
    year: 2001,
    genre: "Drama, Musical, Sport",
    rating: 8.1,
    duration: "224 min",
    poster: "/images/u86dlYo5LXwt.jpg",
    description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    director: "Ashutosh Gowariker",
    cast: ["Aamir Khan", "Gracy Singh", "Rachel Shelley"],
    behindScenes: [{ id: 'lQw4w9WgXcQ', title: 'Chale Chalo - Making of Lagaan' }]
  },
  {
    id: 15,
    title: "Mujhse Shaadi Karogi",
    year: 2004,
    genre: "Comedy, Romance",
    rating: 6.5,
    duration: "160 min",
    poster: "/images/5XD5RXYrjIxv.jpg",
    description: "A young man tries to win the heart of his love interest, but faces competition from his rival.",
    director: "David Dhawan",
    cast: ["Salman Khan", "Akshay Kumar", "Priyanka Chopra"],
    behindScenes: [{ id: 'mQw4w9WgXcQ', title: 'Shooting Of Mujhse Shaadi Karogi' }]
  },
  {
    id: 12,
    title: "Om Shanti Om",
    year: 2007,
    genre: "Comedy, Drama, Fantasy",
    rating: 6.7,
    duration: "162 min",
    poster: "/images/z52YI0xp8BHU.jpg",
    description: "A junior artist from the 1970s is murdered and reincarnated in the 2000s as a superstar, seeking revenge on his killer.",
    director: "Farah Khan",
    cast: ["Shah Rukh Khan", "Deepika Padukone", "Shreyas Talpade"],
    behindScenes: [{ id: 'oQw4w9WgXcQ', title: 'Om Shanti Om | Behind The Scenes' }]
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action, Crime, Drama",
    rating: 9.0,
    duration: "152 min",
    poster: "/images/tdkQw4w9WgXcQ.jpg",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    behindScenes: [{ id: 'tdkQw4w9WgXcQ', title: 'The Dark Knight - Heath Ledger Joker Behind The Scenes (Rare)' }]
  },
  {
    id: 5,
    title: "3 Idiots",
    year: 2009,
    genre: "Comedy, Drama",
    rating: 8.4,
    duration: "170 min",
    poster: "/images/3iQw4w9WgXcQ.jpg",
    description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
    director: "Rajkumar Hirani",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi"],
    behindScenes: [{ id: '3iQw4w9WgXcQ', title: '3 Idiots Movie Behind The Scenes' }]
  }
];

const Movies2000s = () => {
  const [loading, setLoading] = useState(false)

  const handleMovieClick = async (movie) => {
    if (movie.behindScenes && movie.behindScenes.length > 0) {
      const videoId = movie.behindScenes[0].id
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
    } else {
      try {
        const result = await youtubeService.searchBehindScenesVideos(movie.title, 1)
        if (result.items && result.items.length > 0) {
          const videoId = result.items[0].id
          window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
        }
      } catch (error) {
        console.error('Error loading movie videos:', error)
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              2000s Collection
            </Badge>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              2000s Movies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover behind-the-scenes content from the millennium era of cinema
            </p>
            <div className="mt-6 text-yellow-400">
              <span className="text-2xl font-bold">{movies2000s.length}</span> movies available
            </div>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies2000s.map((movie, index) => (
            <Card 
              key={movie.id} 
              className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 cursor-pointer group overflow-hidden"
              onClick={() => handleMovieClick(movie)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Behind-the-Scenes
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {movie.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {movie.director} • {movie.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-yellow-500 font-semibold">{movie.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{movie.duration}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {movie.description}
                </p>
                <div className="mt-3">
                  <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                    {movie.genre}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Movies2000s

