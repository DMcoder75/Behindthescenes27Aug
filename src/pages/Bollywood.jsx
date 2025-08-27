import React, { useState, useEffect } from 'react'
import { Play, Star, Calendar, Clock, Heart, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { useNavigate } from 'react-router-dom'
import youtubeService from '../services/youtubeService'

// Bollywood movies organized by decades
const bollywoodMovies = {
  "2020s": [
    {
      id: 1,
      title: "Pushpa 2: The Rule",
      year: 2024,
      genre: "Action, Drama",
      rating: 8.0,
      duration: "180 min",
      poster: "/images/pushpa-2.jpg",
      description: "Sequel to Pushpa: The Rise, continuing the story of Pushpa Raj.",
      director: "Sukumar",
      cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"]
    },
    {
      id: 2,
      title: "Jawan",
      year: 2023,
      genre: "Action, Thriller",
      rating: 7.5,
      duration: "169 min",
      poster: "/images/jawan.jpg",
      description: "A high-octane action thriller that outlines the emotional journey of a man.",
      director: "Atlee",
      cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"]
    },
    {
      id: 3,
      title: "Pathaan",
      year: 2023,
      genre: "Action, Thriller",
      rating: 6.0,
      duration: "146 min",
      poster: "/images/pathaan.jpg",
      description: "A RAW agent caught up in a web of deceit and betrayal.",
      director: "Siddharth Anand",
      cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"]
    },
    {
      id: 4,
      title: "RRR",
      year: 2022,
      genre: "Action, Drama",
      rating: 7.9,
      duration: "187 min",
      poster: "/images/rrr.jpg",
      description: "A fictional story about two legendary revolutionaries.",
      director: "S.S. Rajamouli",
      cast: ["N.T. Rama Rao Jr.", "Ram Charan", "Ajay Devgn"]
    }
  ],
  "2010s": [
    {
      id: 5,
      title: "Dangal",
      year: 2016,
      genre: "Biography, Drama, Sport",
      rating: 8.4,
      duration: "161 min",
      poster: "/images/dangal.jpg",
      description: "Former wrestler Mahavir Singh Phogat trains his daughters to become world-class wrestlers.",
      director: "Nitesh Tiwari",
      cast: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"]
    },
    {
      id: 6,
      title: "Bajirao Mastani",
      year: 2015,
      genre: "Drama, History, Romance",
      rating: 7.5,
      duration: "158 min",
      poster: "/images/bajirao-mastani.jpg",
      description: "A historical romance about the Maratha Peshwa Bajirao I and his second wife.",
      director: "Sanjay Leela Bhansali",
      cast: ["Ranveer Singh", "Deepika Padukone", "Priyanka Chopra"]
    },
    {
      id: 7,
      title: "PK",
      year: 2014,
      genre: "Comedy, Drama, Fantasy",
      rating: 8.1,
      duration: "153 min",
      poster: "/images/pk.jpg",
      description: "An alien on Earth loses his remote control and tries to find it.",
      director: "Rajkumar Hirani",
      cast: ["Aamir Khan", "Anushka Sharma", "Sushant Singh Rajput"]
    },
    {
      id: 8,
      title: "Zindagi Na Milegi Dobara",
      year: 2011,
      genre: "Adventure, Comedy, Drama",
      rating: 8.2,
      duration: "155 min",
      poster: "/images/znmd.jpg",
      description: "Three friends on a bachelor trip discover themselves and their friendship.",
      director: "Zoya Akhtar",
      cast: ["Hrithik Roshan", "Farhan Akhtar", "Abhay Deol"]
    }
  ],
  "2000s": [
    {
      id: 9,
      title: "3 Idiots",
      year: 2009,
      genre: "Comedy, Drama",
      rating: 8.4,
      duration: "170 min",
      poster: "/images/3-idiots.jpg",
      description: "Two friends search for their long lost companion and recall their college days.",
      director: "Rajkumar Hirani",
      cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi"]
    },
    {
      id: 10,
      title: "Taare Zameen Par",
      year: 2007,
      genre: "Drama, Family",
      rating: 8.4,
      duration: "165 min",
      poster: "/images/taare-zameen-par.jpg",
      description: "An eight-year-old boy is thought to be lazy and a trouble-maker.",
      director: "Aamir Khan",
      cast: ["Darsheel Safary", "Aamir Khan", "Tisca Chopra"]
    },
    {
      id: 11,
      title: "Rang De Basanti",
      year: 2006,
      genre: "Comedy, Crime, Drama",
      rating: 8.1,
      duration: "167 min",
      poster: "/images/rang-de-basanti.jpg",
      description: "The story of six young Indians who assist an English woman.",
      director: "Rakeysh Omprakash Mehra",
      cast: ["Aamir Khan", "Soha Ali Khan", "Siddharth"]
    },
    {
      id: 12,
      title: "Lagaan",
      year: 2001,
      genre: "Adventure, Drama, Musical",
      rating: 8.1,
      duration: "224 min",
      poster: "/images/lagaan.jpg",
      description: "The people of a small village stake their future on a game of cricket.",
      director: "Ashutosh Gowariker",
      cast: ["Aamir Khan", "Gracy Singh", "Rachel Shelley"]
    }
  ],
  "1990s": [
    {
      id: 13,
      title: "Dilwale Dulhania Le Jayenge",
      year: 1995,
      genre: "Drama, Romance",
      rating: 8.1,
      duration: "189 min",
      poster: "/images/ddlj.jpg",
      description: "A young man and woman fall in love on a European vacation.",
      director: "Aditya Chopra",
      cast: ["Shah Rukh Khan", "Kajol", "Amrish Puri"]
    },
    {
      id: 14,
      title: "Hum Aapke Hain Koun..!",
      year: 1994,
      genre: "Comedy, Drama, Family",
      rating: 7.5,
      duration: "206 min",
      poster: "/images/hahk.jpg",
      description: "Prem and Nisha's love story unfolds during their siblings' wedding preparations.",
      director: "Sooraj Barjatya",
      cast: ["Madhuri Dixit", "Salman Khan", "Mohnish Bahl"]
    },
    {
      id: 15,
      title: "Kuch Kuch Hota Hai",
      year: 1998,
      genre: "Comedy, Drama, Romance",
      rating: 7.5,
      duration: "177 min",
      poster: "/images/kkhh.jpg",
      description: "A widower's young daughter tries to reunite him with his college sweetheart.",
      director: "Karan Johar",
      cast: ["Shah Rukh Khan", "Kajol", "Rani Mukerji"]
    },
    {
      id: 16,
      title: "Border",
      year: 1997,
      genre: "Action, Drama, History",
      rating: 7.8,
      duration: "178 min",
      poster: "/images/border.jpg",
      description: "The story of the 1971 war between India and Pakistan.",
      director: "J. P. Dutta",
      cast: ["Sunny Deol", "Suniel Shetty", "Akshaye Khanna"]
    }
  ],
  "1980s": [
    {
      id: 17,
      title: "Mr. India",
      year: 1987,
      genre: "Action, Comedy, Drama",
      rating: 7.7,
      duration: "179 min",
      poster: "/images/mr-india.jpg",
      description: "A poor but big-hearted man takes orphaned children in his care.",
      director: "Shekhar Kapur",
      cast: ["Anil Kapoor", "Sridevi", "Amrish Puri"]
    },
    {
      id: 18,
      title: "Sholay",
      year: 1975,
      genre: "Action, Adventure, Comedy",
      rating: 8.1,
      duration: "162 min",
      poster: "/images/sholay.jpg",
      description: "Two criminals are hired to capture a ruthless dacoit.",
      director: "Ramesh Sippy",
      cast: ["Dharmendra", "Sanjeev Kumar", "Hema Malini"]
    },
    {
      id: 19,
      title: "Jaane Bhi Do Yaaro",
      year: 1983,
      genre: "Comedy, Crime, Drama",
      rating: 8.4,
      duration: "132 min",
      poster: "/images/jaane-bhi-do-yaaro.jpg",
      description: "Two photographers get embroiled in a murder case involving corruption.",
      director: "Kundan Shah",
      cast: ["Naseeruddin Shah", "Ravi Baswani", "Om Puri"]
    },
    {
      id: 20,
      title: "Masoom",
      year: 1983,
      genre: "Drama, Family",
      rating: 8.0,
      duration: "165 min",
      poster: "/images/masoom.jpg",
      description: "A family's happy life is disrupted when the father's illegitimate son arrives.",
      director: "Shekhar Kapur",
      cast: ["Naseeruddin Shah", "Shabana Azmi", "Jugal Hansraj"]
    }
  ]
};

const Bollywood = () => {
  const navigate = useNavigate()
  const [selectedDecade, setSelectedDecade] = useState('2020s')

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

  const decades = Object.keys(bollywoodMovies).sort((a, b) => b.localeCompare(a))

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-red-900 to-black">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 text-white hover:text-red-400"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <Badge className="mb-4 bg-red-500/20 text-red-400 border-red-500/30">
              <Heart className="h-5 w-5 mr-2" />
              Bollywood Collection
            </Badge>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
              Bollywood Behind-the-Scenes
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore exclusive behind-the-scenes content from Bollywood's most beloved films across the decades
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
                    ? 'bg-red-500 text-white' 
                    : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                } transition-all duration-300 px-8 py-3 text-lg font-semibold`}
                onClick={() => setSelectedDecade(decade)}
              >
                <Calendar className="h-5 w-5 mr-2" />
                {decade}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
            <Calendar className="h-8 w-8 mr-3 text-red-400" />
            {selectedDecade} Bollywood Movies
          </h2>
          <p className="text-gray-400 text-lg">
            {bollywoodMovies[selectedDecade]?.length || 0} movies available with behind-the-scenes content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bollywoodMovies[selectedDecade]?.map((movie) => (
            <Card 
              key={movie.id} 
              className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:scale-105 cursor-pointer group overflow-hidden"
              onClick={() => handleMovieClick(movie)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
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
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors duration-300">
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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "400+", label: "Bollywood Movies", icon: Heart },
              { number: "5", label: "Decades Covered", icon: Calendar },
              { number: "100+", label: "Directors Featured", icon: Star },
              { number: "1000+", label: "Behind-the-Scenes Videos", icon: Play },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-red-900/20 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bollywood

