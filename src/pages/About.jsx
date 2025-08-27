import React from 'react'
import { Camera, Film, Users, Award, Target, Heart, Zap, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/200/200",
      description: "Former film industry insider with 15+ years of experience in movie production."
    },
    {
      name: "Michael Chen",
      role: "Content Director",
      image: "/api/placeholder/200/200",
      description: "Award-winning documentary filmmaker specializing in behind-the-scenes content."
    },
    {
      name: "Priya Sharma",
      role: "Bollywood Specialist",
      image: "/api/placeholder/200/200",
      description: "Expert in Indian cinema with exclusive access to Bollywood productions."
    },
    {
      name: "David Rodriguez",
      role: "Technical Lead",
      image: "/api/placeholder/200/200",
      description: "Full-stack developer passionate about creating immersive digital experiences."
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Authenticity",
      description: "We provide genuine, unfiltered access to the real stories behind your favorite films."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for cinema drives us to uncover the most fascinating behind-the-scenes moments."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We use cutting-edge technology to deliver the best viewing experience possible."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Bringing together content from Hollywood, Bollywood, and film industries worldwide."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 animate-pulse">
              About BehindTheScenes.com
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-slideInUp">
              Unveiling the Magic Behind Cinema
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slideInUp" style={{ animationDelay: '200ms' }}>
              We are passionate storytellers dedicated to bringing you exclusive behind-the-scenes content 
              from the world's most beloved films. Our mission is to bridge the gap between audiences and 
              the incredible artistry that goes into filmmaking.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-yellow-500/10 rounded-full animate-float" />
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-orange-500/10 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-red-500/10 rounded-full animate-float-slow" />
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in 2024, BehindTheScenes.com was born from a simple observation: while audiences 
                  love movies, they rarely get to see the incredible work that goes into making them.
                </p>
                <p>
                  Our founder, a former film industry professional, recognized the need for a dedicated 
                  platform that could showcase the artistry, dedication, and creativity of filmmakers 
                  from around the world.
                </p>
                <p>
                  Today, we partner with studios, directors, and production companies to bring you 
                  exclusive content that you won't find anywhere else. From intimate director interviews 
                  to detailed breakdowns of complex scenes, we're your window into the world of filmmaking.
                </p>
              </div>
            </div>
            <div className="animate-slideInRight">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Film production behind the scenes"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm">
                    Behind every great film is an incredible team of artists and craftspeople.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the content we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 group animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4 mx-auto group-hover:bg-yellow-500/30 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-yellow-500" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The passionate individuals behind BehindTheScenes.com who work tirelessly to bring you 
              the best content from the world of cinema.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 group animate-slideInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-yellow-500 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Numbers that showcase our commitment to bringing you the best behind-the-scenes content.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Exclusive Videos", icon: Film },
              { number: "500+", label: "Movies Featured", icon: Camera },
              { number: "50+", label: "Industry Partners", icon: Users },
              { number: "10M+", label: "Total Views", icon: Award }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300 animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-full mb-4 group-hover:bg-yellow-500/30 transition-colors duration-300">
                  <stat.icon className="h-10 w-10 text-yellow-500" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Join Our Community</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a growing community of film enthusiasts who appreciate the artistry behind cinema. 
            Subscribe to get exclusive content and early access to new behind-the-scenes videos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300"
            />
            <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

