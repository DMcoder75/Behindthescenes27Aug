import React, { useState, useEffect } from 'react'
import { Play, Star, Calendar, Clock, Film } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import youtubeService from '../services/youtubeService'

// Recent movies data (2010s and 2020s)
const moviesRecent = [
  {
    id: 6,
    title: "Inception",
    year: 2010,
    genre: "Action, Sci-Fi, Thriller",
    rating: 8.8,
    duration: "148 min",
    poster: "/images/incQw4w9WgXcQ.jpg",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
    behindScenes: [{ id: 'incQw4w9WgXcQ', title: 'How Christopher Nolan Shot the Iconic Inception Hallway Fight Scene' }]
  },
  {
    id: 13,
    title: "Happy New Year",
    year: 2014,
    genre: "Action, Comedy, Crime",
    rating: 5.0,
    duration: "180 min",
    poster: "/images/pGgbqaH1zwR3.jpg",
    description: "A team of losers plan to pull off India's biggest diamond heist.",
    director: "Farah Khan",
    cast: ["Shah Rukh Khan", "Deepika Padukone", "Abhishek Bachchan"],
    behindScenes: [{ id: 'hQw4w9WgXcQ', title: 'Making of Happy New Year' }]
  },
  {
    id: 14,
    title: "PK",
    year: 2014,
    genre: "Comedy, Drama, Fantasy",
    rating: 8.1,
    duration: "153 min",
    poster: "/images/iU8U2lP81Nvr.jpg",
    description: "An alien on Earth loses his remote control, which is his only way back home. He tries to find it, but faces many challenges.",
    director: "Rajkumar Hirani",
    cast: ["Aamir Khan", "Anushka Sharma", "Sushant Singh Rajput"],
    behindScenes: [{ id: 'pkQw4w9WgXcQ', title: 'PK Behind Scenes-watch till the end' }]
  },
  {
    id: 10,
    title: "Dil Dhadakne Do",
    year: 2015,
    genre: "Comedy, Drama, Romance",
    rating: 7.0,
    duration: "170 min",
    poster: "/images/EL0PBmJppfF3.jpg",
    description: "The Mehra family goes on a cruise to celebrate the parents' 30th wedding anniversary, where they discover truths about themselves and each other.",
    director: "Zoya Akhtar",
    cast: ["Anil Kapoor", "Shefali Shah", "Priyanka Chopra", "Ranveer Singh", "Anushka Sharma", "Farhan Akhtar"],
    behindScenes: [{ id: 'dQw4w9WgXcF', title: 'Making of Dil Dhadakne Do' }]
  },
  {
    id: 16,
    title: "Bajirao Mastani",
    year: 2015,
    genre: "Drama, History, Romance",
    rating: 7.5,
    duration: "158 min",
    poster: "/images/p8TvlJiJ5Lza.jpg",
    description: "A historical romance about the Maratha Peshwa Bajirao I and his second wife, Mastani.",
    director: "Sanjay Leela Bhansali",
    cast: ["Ranveer Singh", "Deepika Padukone", "Priyanka Chopra"],
    behindScenes: [{ id: 'bQw4w9WgXcQ', title: 'Making of the Character (Mastani) | Bajirao Mastani' }]
  },
  {
    id: 9,
    title: "Jawan",
    year: 2023,
    genre: "Action, Thriller",
    rating: 7.5,
    duration: "169 min",
    poster: "/images/roVXmcggX0OV.jpg",
    description: "A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.",
    director: "Atlee",
    cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"],
    behindScenes: [{ id: 'jQw4w9WgXcR', title: 'Behind The Scenes of JAWAN' }]
  },
  {
    id: 11,
    title: "Pathaan",
    year: 2023,
    genre: "Action, Thriller",
    rating: 6.0,
    duration: "146 min",
    poster: "/images/LxsoE8gIiqhN.jpg",
    description: "A RAW agent caught up in a web of deceit and betrayal must fight his way out to save his country.",
    director: "Siddharth Anand",
    cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"],
    behindScenes: [{ id: 'pQw4w9WgXcR', title: 'Pathaan Movie Behind The Scenes' }]
  },
  {
    id: 8,
    title: "Pushpa 2",
    year: 2024,
    genre: "Action, Drama",
    rating: 8.0,
    duration: "180 min",
    poster: "/images/KjKL2M3Cvrk8.jpg",
    description: "Sequel to Pushpa: The Rise, continuing the story of Pushpa Raj.",
    director: "Sukumar",
    cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
    behindScenes: [{ id: 'pQw4w9WgXcQ', title: 'Pushpa 2 Movie Behind the Scenes' }]
  }
];

const MoviesRecent = () => {
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
              Recent Collection
            </Badge>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Recent Movies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover behind-the-scenes content from the latest blockbusters and modern masterpieces
            </p>
            <div className="mt-6 text-yellow-400">
              <span className="text-2xl font-bold">{moviesRecent.length}</span> movies available
            </div>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moviesRecent.map((movie, index) => (
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
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                    {movie.year >= 2020 ? '2020s' : '2010s'}
                  </Badge>
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

export default MoviesRecent

