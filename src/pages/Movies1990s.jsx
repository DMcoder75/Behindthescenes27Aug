import React, { useState, useEffect } from 'react'
import { Play, Star, Calendar, Clock, Film } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import youtubeService from '../services/youtubeService'

// 1990s movies data
const movies1990s = [
  {
    id: 3,
    title: "Dilwale Dulhania Le Jayenge",
    year: 1995,
    genre: "Romance, Drama",
    rating: 8.1,
    duration: "189 min",
    poster: "/images/nvdwqRZXzTLs.jpg",
    description: "A young man and woman fall in love on a European vacation and must convince their parents to let them marry.",
    director: "Aditya Chopra",
    cast: ["Shah Rukh Khan", "Kajol", "Amrish Puri"],
    behindScenes: [{ id: 'dQw4w9WgXcD', title: 'Dilwale Dulhania Le Jayenge Movie Behind The Scenes' }]
  },
  {
    id: 17,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama, Romance",
    rating: 8.8,
    duration: "142 min",
    poster: "/images/5dC7sovJgOlB.jpg",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    behindScenes: [{ id: 'dQw4w9WgXcQ', title: 'FORREST GUMP (1994) | Behind The Scenes of Tom Hanks Movie' }]
  },
  {
    id: 18,
    title: "Jumanji",
    year: 1995,
    genre: "Adventure, Comedy, Family",
    rating: 7.0,
    duration: "104 min",
    poster: "/images/pK6AAz7waCON.jpg",
    description: "When two kids find and play a magical board game, they release a man trapped for decades in it and a host of dangers that can only be stopped by finishing the game.",
    director: "Joe Johnston",
    cast: ["Robin Williams", "Kirsten Dunst", "Bonnie Hunt"],
    behindScenes: [{ id: 'jQw4w9WgXcQ', title: 'JUMANJI: THE NEXT LEVEL (2019) Behind-the-Scenes Making the Movie' }]
  }
];

const Movies1990s = () => {
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
              1990s Collection
            </Badge>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              1990s Movies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover behind-the-scenes content from the golden era of cinema - the 1990s
            </p>
            <div className="mt-6 text-yellow-400">
              <span className="text-2xl font-bold">{movies1990s.length}</span> movies available
            </div>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies1990s.map((movie, index) => (
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

export default Movies1990s

