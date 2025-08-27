import React, { useState, useEffect } from 'react'
import { Play, Star, Calendar, Clock, Film, Users, Award, Search, Filter, ArrowRight, Globe, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import VideoPlayer, { VideoGrid } from '../components/VideoPlayer'
import youtubeService from '../services/youtubeService'
import { useNavigate } from 'react-router-dom'
import { BannerAd, ResponsiveAd, InFeedAd } from '../components/GoogleAds'

// Sample movie data with behind-the-scenes content
const sampleMovies = [
  {
    id: 1,
    title: "Gladiator",
    year: 2000,
    genre: "Action, Drama",
    rating: 8.5,
    duration: "155 min",
    poster: "/images/gladiator.jpg",
    backdrop: "/api/placeholder/800/450",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    behindScenes: [{ id: 'gQw4w9WgXcQ', title: 'Gladiator | Behind the Scenes PART 1' }],
    category: "hollywood",
    decade: "2000s"
  },
  {
    id: 2,
    title: "Memento",
    year: 2000,
    genre: "Mystery, Thriller",
    rating: 8.4,
    duration: "113 min",
    poster: "/images/memento.jpg",
    backdrop: "/api/placeholder/800/450",
    description: "A man with short-term memory loss attempts to track down his wife's murderer.",
    director: "Christopher Nolan",
    cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
    behindScenes: [{ id: 'memQw4w9WgXcQ', title: 'Memento (2000) | Making of a MASTERPIECE | Christopher Nolan' }],
    category: "hollywood",
    decade: "2000s"
  },
  {
    id: 3,
    title: "Dilwale Dulhania Le Jayenge",
    year: 1995,
    genre: "Romance, Drama",
    rating: 8.1,
    duration: "189 min",
    poster: "/images/ddlj.jpg",
    backdrop: "/api/placeholder/800/450",
    description: "A young man and woman fall in love on a European vacation and must convince their parents to let them marry.",
    director: "Aditya Chopra",
    cast: ["Shah Rukh Khan", "Kajol", "Amrish Puri"],
    behindScenes: [{ id: 'dQw4w9WgXcD', title: 'Dilwale Dulhania Le Jayenge Movie Behind The Scenes' }],
    category: "bollywood",
    decade: "1990s"
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action, Crime, Drama",
    rating: 9.0,
    duration: "152 min",
    poster: "/images/dark-knight.jpg",
    backdrop: "/api/placeholder/800/450",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    behindScenes: [{ id: 'tdkQw4w9WgXcQ', title: 'The Dark Knight - Heath Ledger Joker Behind The Scenes (Rare)' }],
    category: "hollywood",
    decade: "2000s"
  },
  {
    id: 5,
    title: "3 Idiots",
    year: 2009,
    genre: "Comedy, Drama",
    rating: 8.4,
    duration: "170 min",
    poster: "/images/3-idiots.jpg",
    backdrop: "/api/placeholder/800/450",
    description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
    director: "Rajkumar Hirani",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi"],
    behindScenes: [{ id: '3iQw4w9WgXcQ', title: '3 Idiots Movie Behind The Scenes' }],
    category: "bollywood",
    decade: "2000s"
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    genre: "Action, Sci-Fi, Thriller",
    rating: 8.8,
    duration: "148 min",
    poster: "/images/inception.jpg",
    backdrop: "/api/placeholder/800/450",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
    behindScenes: [{ id: 'incQw4w9WgXcQ', title: 'How Christopher Nolan Shot the Iconic Inception Hallway Fight Scene' }],
    category: "hollywood",
    decade: "2010s"
  },
  {
    id: 7,
    title: "Lagaan",
    year: 2001,
    genre: "Drama, Musical, Sport",
    rating: 8.1,
    duration: "224 min",
    poster: "/images/lagaan.jpg",
    backdrop: "/api/placeholder/800/450",
    description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    director: "Ashutosh Gowariker",
    cast: ["Aamir Khan", "Gracy Singh", "Rachel Shelley"],
    behindScenes: [{ id: 'lQw4w9WgXcQ', title: 'Chale Chalo - Making of Lagaan' }],
    category: "bollywood",
    decade: "2000s"
  },
  {
    id: 8,
    title: "Pushpa 2",
    year: 2024,
    genre: "Action, Drama",
    rating: 8.0,
    duration: "180 min",
    poster: "/images/pushpa-2.jpg",
    backdrop: "/api/placeholder/800/450",
    description: "Sequel to Pushpa: The Rise, continuing the story of Pushpa Raj.",
    director: "Sukumar",
    cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
    behindScenes: [{ id: 'pQw4w9WgXcQ', title: 'Pushpa 2 Movie Behind the Scenes' }],
    category: "bollywood",
    decade: "2020s"
  }
];

const Home = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchLoading, setSearchLoading] = useState(false)
  const [trendingVideos, setTrendingVideos] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)

  // Hero section movies (different from featured)
  const heroMovies = [
    sampleMovies[0], // Gladiator
    sampleMovies[2], // DDLJ
    sampleMovies[4], // 3 Idiots
    sampleMovies[6], // Lagaan
    sampleMovies[7]  // Pushpa 2
  ]

  // Featured section movies (different from hero)
  const featuredMovies = [
    sampleMovies[1], // Memento
    sampleMovies[3], // The Dark Knight
    sampleMovies[5], // Inception
    {
      id: 21,
      title: "Pathaan",
      year: 2023,
      genre: "Action, Thriller",
      rating: 6.0,
      duration: "146 min",
      poster: "/images/pathaan.jpg",
      backdrop: "/api/placeholder/800/450",
      description: "A spy must retrieve a deadly weapon from the world's most wanted terrorist.",
      director: "Siddharth Anand",
      cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"],
      behindScenes: [{ id: 'pthQw4w9WgXcQ', title: 'Pathaan Movie Behind The Scenes' }],
      category: "bollywood",
      decade: "2020s"
    },
    {
      id: 22,
      title: "Jawan",
      year: 2023,
      genre: "Action, Thriller",
      rating: 7.5,
      duration: "169 min",
      poster: "/images/jawan.jpg",
      backdrop: "/api/placeholder/800/450",
      description: "A high-octane action thriller which outlines the emotional journey of a man.",
      director: "Atlee",
      cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"],
      behindScenes: [{ id: 'jwQw4w9WgXcQ', title: 'Jawan Movie Behind The Scenes' }],
      category: "bollywood",
      decade: "2020s"
    }
  ]

  // Hero movie rotation
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const heroMovie = heroMovies[currentHeroIndex]

  // Featured movie rotation  
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)
  const featuredMovie = featuredMovies[currentFeaturedIndex]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroMovies.length)
    }, 5000) // Change every 5 seconds

    const featuredInterval = setInterval(() => {
      setCurrentFeaturedIndex((prev) => (prev + 1) % featuredMovies.length)
    }, 6000) // Change every 6 seconds (different timing)

    return () => {
      clearInterval(heroInterval)
      clearInterval(featuredInterval)
    }
  }, [])

  useEffect(() => {
    loadTrendingVideos()
  }, [])

  const loadTrendingVideos = async () => {
    setLoading(true)
    try {
      const result = await youtubeService.getTrendingBehindScenesVideos(12)
      setTrendingVideos(result.items)
    } catch (error) {
      console.error('Error loading trending videos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([])
      setSearchTerm('')
      return
    }

    setSearchLoading(true)
    try {
      const result = await youtubeService.searchVideos(query, 20)
      setSearchResults(result.items)
    } catch (error) {
      console.error('Error searching videos:', error)
      setSearchResults([])
    } finally {
      setSearchLoading(false)
    }
  }

  // Debounced search function
  const debouncedSearch = React.useCallback(
    debounce((query) => {
      handleSearch(query)
    }, 500),
    []
  )

  // Debounce utility function
  function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

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

  const displayVideos = searchTerm ? searchResults : trendingVideos

  // Group movies by category and decade
  const hollywoodMovies = sampleMovies.filter(movie => movie.category === 'hollywood')
  const bollywoodMovies = sampleMovies.filter(movie => movie.category === 'bollywood')

  const groupByDecade = (movies) => {
    return movies.reduce((acc, movie) => {
      const decade = movie.decade
      if (!acc[decade]) acc[decade] = []
      acc[decade].push(movie)
      return acc
    }, {})
  }

  const hollywoodByDecade = groupByDecade(hollywoodMovies)
  const bollywoodByDecade = groupByDecade(bollywoodMovies)

  return (
    <div className="animate-fadeIn">
      {/* Hero Section with Text */}
      <section className="relative h-[30vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${heroMovie.poster})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl font-bold mb-4 leading-tight bg-gradient-to-r from-white/80 via-red-200/80 to-white/80 bg-clip-text text-transparent">
              Behind The Scenes
            </h1>
            <p className="text-lg text-gray-200/70 mb-6 leading-relaxed">
              Explore exclusive behind-the-scenes content from Hollywood & Bollywood
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for movies, directors, or specific behind-the-scenes content..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    debouncedSearch(e.target.value)
                  }}
                  className="pl-12 pr-4 py-3 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 text-base rounded-xl"
                />
                {searchLoading && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-500"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Movie Highlight Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat transition-all duration-1000 ease-in-out transform"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${featuredMovie.poster})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-slideInLeft">
            <Badge className="mb-4 bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
              Featured Behind-the-Scenes
            </Badge>
            <h2 className="text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {featuredMovie.title}
            </h2>
            <div className="flex items-center space-x-4 mb-4 text-gray-300">
              <span className="flex items-center hover:text-red-400 transition-colors duration-300">
                <Calendar className="h-4 w-4 mr-1" />
                {featuredMovie.year}
              </span>
              <span className="flex items-center hover:text-red-400 transition-colors duration-300">
                <Clock className="h-4 w-4 mr-1" />
                {featuredMovie.duration}
              </span>
              <span className="flex items-center text-red-500">
                <Star className="h-4 w-4 mr-1 animate-pulse" />
                {featuredMovie.rating}
              </span>
            </div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {featuredMovie.description}
            </p>
            <div className="flex space-x-4">
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                onClick={() => handleMovieClick(featuredMovie)}
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Behind-the-Scenes
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-red-500/10 rounded-full animate-float" />
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-orange-500/10 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-red-500/10 rounded-full animate-float-slow" />
      </section>

      {/* Google Ad - Banner */}
      <div className="container mx-auto px-4 py-4">
        <BannerAd className="text-center" />
      </div>

      {/* Category Selection Table */}
      <section className="py-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <table className="w-full">
              <tbody>
                <tr>
                  <td 
                    className="w-1/2 p-4 text-center cursor-pointer group transition-all duration-500 bg-blue-500/10 hover:bg-blue-500/20 border-r border-gray-700/50"
                    onClick={() => navigate('/hollywood')}
                  >
                    <h3 className="text-3xl font-light text-blue-400/70 group-hover:text-blue-400 transition-colors duration-300" style={{ fontFamily: 'Georgia, serif' }}>
                      Hollywood
                    </h3>
                  </td>
                  <td 
                    className="w-1/2 p-4 text-center cursor-pointer group transition-all duration-500 bg-red-500/10 hover:bg-red-500/20"
                    onClick={() => navigate('/bollywood')}
                  >
                    <h3 className="text-3xl font-light text-red-400/70 group-hover:text-red-400 transition-colors duration-300" style={{ fontFamily: 'Georgia, serif' }}>
                      Bollywood
                    </h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Featured Movies Carousel */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-500/20 text-red-400 border-red-500/30">
            <Star className="h-5 w-5 mr-2" />
            Featured Movies
          </Badge>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Trending Behind-the-Scenes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the most popular behind-the-scenes content from your favorite movies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sampleMovies.slice(0, 8).map((movie) => (
            <Card 
              key={movie.id} 
              className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:scale-105 cursor-pointer group overflow-hidden"
              onClick={() => handleMovieClick(movie)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-72 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-red-500 mx-auto mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <span className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      Behind the Scenes
                    </span>
                  </div>
                </div>
                <Badge className="absolute top-3 right-3 bg-red-500/90 text-white font-semibold">
                  {movie.year}
                </Badge>
                <Badge className="absolute top-3 left-3 bg-black/70 text-white text-xs">
                  {movie.category === 'hollywood' ? 'Hollywood' : 'Bollywood'}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300 line-clamp-1">
                  {movie.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                  {movie.director} • {movie.year}
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
                <p className="text-gray-300 text-sm line-clamp-2">
                  {movie.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Google Ad - Responsive */}
      <div className="container mx-auto px-4 py-6">
        <ResponsiveAd className="text-center" />
      </div>

      {/* Hollywood Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Film className="h-8 w-8 text-blue-500" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Hollywood Classics
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={() => navigate('/hollywood')}
          >
            View All <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hollywoodMovies.slice(0, 4).map((movie) => (
            <Card 
              key={movie.id} 
              className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 cursor-pointer group overflow-hidden"
              onClick={() => handleMovieClick(movie)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/api/placeholder/300/400'
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-12 w-12 text-blue-500 mx-auto mb-2 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <span className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      Behind the Scenes
                    </span>
                  </div>
                </div>
                <Badge className="absolute top-3 right-3 bg-blue-500/90 text-white font-semibold">
                  {movie.year}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                  {movie.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                  {movie.director}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 mr-1" />
                    {movie.rating}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {movie.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Google Ad - In-Feed */}
      <div className="container mx-auto px-4 py-6">
        <InFeedAd className="text-center" />
      </div>

      {/* Bollywood Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Heart className="h-8 w-8 text-red-500" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Bollywood Blockbusters
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            onClick={() => navigate('/bollywood')}
          >
            View All <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bollywoodMovies.slice(0, 4).map((movie) => (
            <Card 
              key={movie.id} 
              className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:scale-105 cursor-pointer group overflow-hidden"
              onClick={() => handleMovieClick(movie)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/api/placeholder/300/400'
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-12 w-12 text-red-500 mx-auto mb-2 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <span className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      Behind the Scenes
                    </span>
                  </div>
                </div>
                <Badge className="absolute top-3 right-3 bg-red-500/90 text-white font-semibold">
                  {movie.year}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300 line-clamp-1">
                  {movie.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                  {movie.director}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 mr-1" />
                    {movie.rating}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {movie.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Video Results Section */}
      {displayVideos.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'Trending Behind-the-Scenes'}
            </h3>
            {!searchTerm && (
              <Button 
                variant="outline" 
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                onClick={loadTrendingVideos}
              >
                <Filter className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            )}
          </div>

          <VideoGrid 
            videos={displayVideos}
            onVideoClick={setSelectedVideo}
            loading={loading || searchLoading}
            moviePosters={{
              'Making of Gerua | Kajol, Shah Rukh Khan | Dilwale': '/images/nvdwqRZXzTLs.jpg',
              "Steven Spielberg's DUEL film behind the scenes with miniatures": '/images/pK6AAz7waCON.jpg',
              'How Christopher Nolan Shot the Iconic Inception Hallway Fight Scene': '/images/incQw4w9WgXcQ.jpg'
            }}
          />
        </section>
      )}

      {/* Google Ad - Before Stats */}
      <div className="container mx-auto px-4 py-6">
        <ResponsiveAd className="text-center" />
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "800+", label: "Movies Available", icon: Film },
              { number: "1000+", label: "Behind-the-Scenes Videos", icon: Play },
              { number: "50+", label: "Directors Featured", icon: Users },
              { number: "10M+", label: "Total Views", icon: Award },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideInUp">
            <VideoPlayer 
              video={selectedVideo} 
              onClose={() => setSelectedVideo(null)} 
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

