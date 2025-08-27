import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Building } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Film Street, Delhi 6", "New Delhi, India - 110006"],
      color: "text-blue-400"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-11-2345-6789", "+91-98765-43210"],
      color: "text-green-400"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@behindthescenes.com", "support@behindthescenes.com"],
      color: "text-yellow-400"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "text-purple-400"
    }
  ]

  const departments = [
    {
      icon: MessageCircle,
      title: "General Inquiries",
      email: "info@behindthescenes.com",
      description: "Questions about our content or platform"
    },
    {
      icon: Users,
      title: "Partnership",
      email: "partnerships@behindthescenes.com",
      description: "Collaboration opportunities with studios"
    },
    {
      icon: Building,
      title: "Business Development",
      email: "business@behindthescenes.com",
      description: "Commercial partnerships and licensing"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 animate-pulse">
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-slideInUp">
              Contact BehindTheScenes.com
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slideInUp" style={{ animationDelay: '200ms' }}>
              Have questions, suggestions, or want to partner with us? We'd love to hear from you. 
              Reach out and let's discuss how we can bring more amazing behind-the-scenes content to film lovers worldwide.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-yellow-500/10 rounded-full animate-float" />
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-orange-500/10 rounded-full animate-float-delayed" />
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 group animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800/50 rounded-full mb-4 mx-auto group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <info.icon className={`h-8 w-8 ${info.color} group-hover:text-yellow-500 transition-colors duration-300`} />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-500 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-500 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-500 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Google Map */}
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-bold mb-6 text-white">Find Us</h2>
              <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.674870949!2d77.23090731508236!3d28.65195908240251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683d1c7a9%3A0x1f2c8c5c8c5c8c5c!2sDelhi%206%2C%20Old%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1642678901234!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">BehindTheScenes.com Office</p>
                      <p className="text-gray-400 text-sm">123 Film Street, Delhi 6</p>
                      <p className="text-gray-400 text-sm">New Delhi, India - 110006</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-400" />
                    <p className="text-gray-300">+91-11-2345-6789</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <p className="text-gray-300">info@behindthescenes.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Contact by Department</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get in touch with the right team for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card 
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 group animate-slideInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4 mx-auto group-hover:bg-yellow-500/30 transition-colors duration-300">
                    <dept.icon className="h-8 w-8 text-yellow-500" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {dept.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {dept.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <a 
                    href={`mailto:${dept.email}`}
                    className="text-yellow-500 hover:text-yellow-400 transition-colors duration-300 font-medium"
                  >
                    {dept.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Need Quick Answers?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Check out our frequently asked questions for immediate answers to common inquiries.
          </p>
          <Button 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
            onClick={() => window.location.href = '/faq'}
          >
            Visit FAQ Page
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Contact

