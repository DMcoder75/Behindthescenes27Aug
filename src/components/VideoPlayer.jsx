import React, { useState, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, ExternalLink, Clock, Eye } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import youtubeService from '../services/youtubeService'

const VideoPlayer = ({ video, onClose, autoplay = false }) => {
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)

  useEffect(() => {
    let timeout
    if (showControls) {
      timeout = setTimeout(() => setShowControls(false), 3000)
    }
    return () => clearTimeout(timeout)
  }, [showControls])

  if (!video) return null

  const embedUrl = youtubeService.getEmbedUrl(video.id, isPlaying, isMuted)
  const watchUrl = youtubeService.getWatchUrl(video.id)

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden animate-slideInUp">
        {/* Video Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">{video.title}</h2>
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {video.duration}
                </span>
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {video.viewCount} views
                </span>
                <Badge variant="outline" className="border-red-500/30 text-red-400">
                  {video.channelTitle}
                </Badge>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-gray-800"
              onClick={onClose}
            >
              ✕
            </Button>
          </div>
        </div>

        {/* Video Player */}
        <div 
          className="relative bg-black aspect-video"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          
          {/* Custom Controls Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => window.open(watchUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Watch on YouTube
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Description */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-3">About this video</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {video.description}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Published: {new Date(video.publishedAt).toLocaleDateString()}</span>
                <span>Channel: {video.channelTitle}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-700"
                    onClick={() => window.open(watchUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in YouTube
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-700"
                    onClick={() => {
                      navigator.clipboard.writeText(watchUrl)
                      alert('Link copied to clipboard!')
                    }}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Copy Link
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-3">Video Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{video.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Views:</span>
                    <span className="text-white">{video.viewCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Channel:</span>
                    <span className="text-white">{video.channelTitle}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Video Card Component for grid display
export const VideoCard = ({ video, onClick, className = "", moviePoster = null }) => {
  const imageSource = moviePoster || video.thumbnail || '/api/placeholder/400/300'
  
  return (
    <Card 
      className={`bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group ${className}`}
      onClick={() => onClick(video)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={imageSource} 
          alt={video.title}
          className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = '/api/placeholder/400/300'
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
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        <div className="absolute top-2 left-2">
          <Badge className="bg-red-600 text-white text-xs">
            YouTube
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
          {video.title}
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm">
          {video.channelTitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span className="flex items-center">
            <Eye className="h-3 w-3 mr-1" />
            {video.viewCount}
          </span>
          <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-400 text-sm mt-2 line-clamp-2">
          {video.description}
        </p>
      </CardContent>
    </Card>
  )
}

// Video Grid Component
export const VideoGrid = ({ videos, onVideoClick, loading = false, className = "", moviePosters = {} }) => {
  if (loading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg animate-pulse">
            <div className="h-48 bg-gray-700 rounded-t-lg"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-700 rounded w-1/2"></div>
              <div className="h-3 bg-gray-700 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (videos.length === 0) {
    return (
      <div className="text-center py-12">
        <Play className="h-16 w-16 text-gray-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-400 mb-2">No videos found</h3>
        <p className="text-gray-500">Try searching for different terms or check back later.</p>
      </div>
    )
  }

  // Function to find movie poster for a video
  const getMoviePosterForVideo = (video) => {
    const videoTitle = video.title.toLowerCase()
    
    // Map of movie titles to their poster paths
    const moviePosterMap = {
      'gladiator': '/images/gladiator.jpg',
      'memento': '/images/memento.jpg',
      'dilwale dulhania le jayenge': '/images/ddlj.jpg',
      'ddlj': '/images/ddlj.jpg',
      'dark knight': '/images/dark-knight.jpg',
      '3 idiots': '/images/3-idiots.jpg',
      'inception': '/images/inception.jpg',
      'lagaan': '/images/lagaan.jpg',
      'pushpa': '/images/pushpa-2.jpg',
      'jawan': '/images/jawan.jpg',
      'dil dhadakne do': '/images/dil-dhadakne-do.jpg',
      'pathaan': '/images/pathaan.jpg',
      'om shanti om': '/images/om-shanti-om.jpg',
      'happy new year': '/images/happy-new-year.jpg',
      'pk': '/images/pk.jpg',
      'mujhse shaadi karogi': '/images/mujhse-shaadi-karogi.jpg',
      'bajirao mastani': '/images/bajirao-mastani.jpg',
      'forrest gump': '/images/forrest-gump.jpg',
      'jumanji': '/images/jumanji.jpg',
      'duel': '/images/duel.jpg'
    }
    
    // Find matching movie poster
    for (const [movieTitle, posterPath] of Object.entries(moviePosterMap)) {
      if (videoTitle.includes(movieTitle)) {
        return posterPath
      }
    }
    
    return null
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {videos.map((video, index) => (
        <VideoCard 
          key={video.id} 
          video={video} 
          onClick={onVideoClick}
          moviePoster={getMoviePosterForVideo(video)}
          className="animate-slideInUp"
          style={{ animationDelay: `${index * 100}ms` }}
        />
      ))}
    </div>
  )
}

export default VideoPlayer

