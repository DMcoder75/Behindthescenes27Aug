import React, { useState, useEffect } from 'react'
import { Play, Star, Calendar, Clock, Film } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import youtubeService from '../services/youtubeService'

// 1980s movies data
const movies1980s = [
  // Currently no movies from 1980s in our collection
  // This page is ready for future additions
];

const Movies1980s = () => {
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
              1980s Collection
            </Badge>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              1980s Movies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover behind-the-scenes content from the iconic movies of the 1980s
            </p>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="container mx-auto px-4 py-16">
        {movies1980s.length === 0 ? (
          <div className="text-center py-20">
            <Film className="h-24 w-24 text-gray-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-400 mb-4">Coming Soon</h3>
            <p className="text-gray-500 text-lg">
              We're working on adding amazing 1980s movies to our collection. 
              Check back soon for behind-the-scenes content from this iconic decade!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies1980s.map((movie, index) => (
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
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Movies1980s

