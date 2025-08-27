import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Play, Star, Calendar, Clock, Film, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { useNavigate } from 'react-router-dom'
import youtubeService from '../services/youtubeService'

// Hollywood movies organized by decades
const hollywoodMovies = {
  "recent": [
    {
      id: 1,
      title: "Oppenheimer",
      year: 2023,
      genre: "Biography, Drama, History",
      rating: 8.3,
      duration: "180 min",
      poster: "/api/placeholder/300/400",
      description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      director: "Christopher Nolan",
      cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"]
    },
    {
      id: 2,
      title: "Top Gun: Maverick",
      year: 2022,
      genre: "Action, Drama",
      rating: 8.2,
      duration: "130 min",
      poster: "/api/placeholder/300/400",
      description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator.",
      director: "Joseph Kosinski",
      cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"]
    }
  ],
  "2000s": [
    {
      id: 9,
      title: "Gladiator",
      year: 2000,
      genre: "Action, Drama",
      rating: 8.5,
      duration: "155 min",
      poster: "/images/gladiator.jpg",
      description: "A former Roman General sets out to exact vengeance against the corrupt emperor.",
      director: "Ridley Scott",
      cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
    },
    {
      id: 10,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action, Crime, Drama",
      rating: 9.0,
      duration: "152 min",
      poster: "/images/dark-knight.jpg",
      description: "Batman faces the Joker in this epic superhero thriller.",
      director: "Christopher Nolan",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    },
    {
      id: 11,
      title: "Inception",
      year: 2010,
      genre: "Action, Sci-Fi, Thriller",
      rating: 8.8,
      duration: "148 min",
      poster: "/images/inception.jpg",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      director: "Christopher Nolan",
      cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"]
    },
    {
      id: 12,
      title: "Memento",
      year: 2000,
      genre: "Mystery, Thriller",
      rating: 8.4,
      duration: "113 min",
      poster: "/images/memento.jpg",
      description: "A man with short-term memory loss attempts to track down his wife's murderer.",
      director: "Christopher Nolan",
      cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"]
    }
  ],
  "90s": [
    {
      id: 15,
      title: "Forrest Gump",
      year: 1994,
      genre: "Drama, Romance",
      rating: 8.8,
      duration: "142 min",
      poster: "/images/forrest-gump.jpg",
      description: "The presidencies of Kennedy and Johnson unfold from the perspective of an Alabama man.",
      director: "Robert Zemeckis",
      cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
      id: 16,
      title: "Jumanji",
      year: 1995,
      genre: "Adventure, Comedy, Family",
      rating: 7.0,
      duration: "104 min",
      poster: "/images/jumanji.jpg",
      description: "When two kids find and play a magical board game, they release a man trapped in it.",
      director: "Joe Johnston",
      cast: ["Robin Williams", "Kirsten Dunst", "Bonnie Hunt"]
    }
  ],
  "80s": [
    {
      id: 20,
      title: "Duel",
      year: 1971,
      genre: "Action, Thriller",
      rating: 7.6,
      duration: "89 min",
      poster: "/images/duel.jpg",
      description: "A business commuter is pursued and terrorized by the malevolent driver of a massive tractor-trailer.",
      director: "Steven Spielberg",
      cast: ["Dennis Weaver", "Jacqueline Scott", "Carey Loftin"]
    }
  ]
}

const Hollywood = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [selectedDecade, setSelectedDecade] = useState('recent')

  useEffect(() => {
    const decade = searchParams.get('decade')
    if (decade && hollywoodMovies[decade]) {
      setSelectedDecade(decade)
    }
  }, [searchParams])

  const handleMovieClick = async (movie) => {
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

  const decades = Object.keys(hollywoodMovies)
  const currentMovies = hollywoodMovies[selectedDecade] || hollywoodMovies.recent

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-black">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 text-white hover:text-blue-400"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
              <Film className="h-5 w-5 mr-2" />
              Hollywood Collection
            </Badge>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Hollywood Behind-the-Scenes
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover exclusive behind-the-scenes content from Hollywood's greatest films across the decades
            </p>
          </div>
        </div>
      </section>

      {/* Decade Navigation */}
      <section className="py-8 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {decades.map((decade) => (
              <Button
                key={decade}
                variant={selectedDecade === decade ? "default" : "outline"}
                className={`${
                  selectedDecade === decade 
                    ? 'bg-blue-500 text-white' 
                    : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                } transition-all duration-300 px-8 py-3 text-lg font-semibold`}
                onClick={() => setSelectedDecade(decade)}
              >
                <Calendar className="h-5 w-5 mr-2" />
                {decade === 'recent' ? 'Recent' : decade.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
            <Calendar className="h-8 w-8 mr-3 text-blue-400" />
            {selectedDecade === 'recent' ? 'Recent' : selectedDecade.toUpperCase()} Hollywood Movies
          </h2>
          <p className="text-gray-400 text-lg">
            {currentMovies.length} movies available with behind-the-scenes content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentMovies.map((movie) => (
            <Card 
              key={movie.id} 
              className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 cursor-pointer group overflow-hidden"
              onClick={() => handleMovieClick(movie)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/api/placeholder/300/400'
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-blue-500 mx-auto mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <span className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      Behind the Scenes
                    </span>
                  </div>
                </div>
                <Badge className="absolute top-3 right-3 bg-blue-500/90 text-white font-semibold">
                  {movie.year}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                  {movie.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {movie.director}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 mr-1" />
                    {movie.rating}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {movie.duration}
                  </span>
                </div>
                <p className="text-gray-300 text-sm line-clamp-3 mb-3">
                  {movie.description}
                </p>
                <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                  {movie.genre}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Hollywood

