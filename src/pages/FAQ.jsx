import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Search, HelpCircle, Film, Users, Shield, CreditCard } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'general', name: 'General', icon: Film },
    { id: 'account', name: 'Account', icon: Users },
    { id: 'content', name: 'Content', icon: Film },
    { id: 'technical', name: 'Technical', icon: Shield },
    { id: 'billing', name: 'Billing', icon: CreditCard }
  ]

  const faqData = [
    {
      id: 1,
      category: 'general',
      question: "What is BehindTheScenes.com?",
      answer: "BehindTheScenes.com is a dedicated platform that provides exclusive behind-the-scenes content from Hollywood and Bollywood movies. We offer documentaries, interviews, making-of videos, and insider insights that show how your favorite films are made."
    },
    {
      id: 2,
      category: 'general',
      question: "How do you source your behind-the-scenes content?",
      answer: "We partner directly with film studios, production companies, directors, and industry professionals to bring you authentic, exclusive content. Our team also creates original documentaries and interviews with cast and crew members."
    },
    {
      id: 3,
      category: 'content',
      question: "What types of behind-the-scenes content do you offer?",
      answer: "Our content includes making-of documentaries, director commentaries, cast interviews, stunt breakdowns, special effects explanations, set design tours, costume and makeup processes, and much more. We cover everything from pre-production to post-production."
    },
    {
      id: 4,
      category: 'content',
      question: "Do you cover both Hollywood and Bollywood movies?",
      answer: "Yes! We're proud to feature content from both Hollywood and Bollywood productions. Our goal is to showcase the incredible artistry and craftsmanship from film industries around the world."
    },
    {
      id: 5,
      category: 'account',
      question: "Do I need to create an account to watch content?",
      answer: "While some content is available for free viewing, creating an account gives you access to exclusive premium content, personalized recommendations, and the ability to save your favorite videos for later viewing."
    },
    {
      id: 6,
      category: 'account',
      question: "How do I create an account?",
      answer: "Simply click the 'Sign In' button in the top navigation, then select 'Create Account'. You can sign up using your email address or through social media accounts like Google or Facebook."
    },
    {
      id: 7,
      category: 'technical',
      question: "What devices can I use to watch content?",
      answer: "Our platform is fully responsive and works on desktop computers, laptops, tablets, and smartphones. We support all modern web browsers including Chrome, Firefox, Safari, and Edge."
    },
    {
      id: 8,
      category: 'technical',
      question: "Why is a video not playing or loading slowly?",
      answer: "Video playback issues are usually related to internet connection speed. We recommend a minimum of 5 Mbps for HD streaming. Try refreshing the page, clearing your browser cache, or switching to a different browser if problems persist."
    },
    {
      id: 9,
      category: 'content',
      question: "How often do you add new content?",
      answer: "We add new behind-the-scenes content weekly. This includes both newly produced exclusive content and curated archival material. Subscribe to our newsletter to stay updated on the latest additions."
    },
    {
      id: 10,
      category: 'general',
      question: "Can I suggest movies for behind-the-scenes coverage?",
      answer: "Absolutely! We love hearing from our community. You can submit movie suggestions through our contact form or by emailing us at suggestions@behindthescenes.com. While we can't guarantee coverage of every suggestion, we do consider all requests."
    },
    {
      id: 11,
      category: 'billing',
      question: "Is there a subscription fee?",
      answer: "We offer both free and premium content. Basic access is free and includes a selection of behind-the-scenes videos. Premium subscriptions unlock exclusive content, early access to new releases, and ad-free viewing."
    },
    {
      id: 12,
      category: 'billing',
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various digital payment methods. All transactions are secured with industry-standard encryption."
    },
    {
      id: 13,
      category: 'technical',
      question: "Can I download videos for offline viewing?",
      answer: "Currently, our content is available for streaming only. We're working on implementing offline viewing capabilities for premium subscribers in the near future."
    },
    {
      id: 14,
      category: 'content',
      question: "Do you have content in languages other than English?",
      answer: "Yes! We feature content in multiple languages including Hindi, Spanish, French, and others. Many of our videos also include subtitles in various languages to make content accessible to a global audience."
    },
    {
      id: 15,
      category: 'general',
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team through our contact page, by emailing support@behindthescenes.com, or by calling our helpline during business hours. We typically respond to inquiries within 24 hours."
    }
  ]

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 animate-pulse">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-slideInUp">
              How Can We Help You?
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 animate-slideInUp" style={{ animationDelay: '200ms' }}>
              Find answers to common questions about BehindTheScenes.com, our content, and how to make the most of your experience.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto animate-slideInUp" style={{ animationDelay: '400ms' }}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-500 text-lg rounded-xl"
              />
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-yellow-500/10 rounded-full animate-float" />
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-orange-500/10 rounded-full animate-float-delayed" />
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 animate-slideInUp ${
                  activeCategory === category.id
                    ? 'bg-yellow-500 text-black font-semibold'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-yellow-400'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-16">
                <HelpCircle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-400 mb-2">No results found</h3>
                <p className="text-gray-500">Try adjusting your search terms or browse different categories.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <Card 
                    key={faq.id}
                    className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-300 animate-slideInUp"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => toggleExpanded(faq.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-3">
                          <Badge 
                            variant="outline" 
                            className="mt-1 border-yellow-500/30 text-yellow-400 text-xs"
                          >
                            {faqCategories.find(cat => cat.id === faq.category)?.name}
                          </Badge>
                          <CardTitle className="text-lg text-white group-hover:text-yellow-400 transition-colors duration-300 text-left">
                            {faq.question}
                          </CardTitle>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          {expandedItems[faq.id] ? (
                            <ChevronUp className="h-5 w-5 text-yellow-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    
                    {expandedItems[faq.id] && (
                      <CardContent className="pt-0 animate-slideInUp">
                        <div className="pl-20">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-white">Still Need Help?</h2>
              <p className="text-xl text-gray-400">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 group text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4 mx-auto group-hover:bg-blue-500/30 transition-colors duration-300">
                    <HelpCircle className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                    Contact Support
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Get personalized help from our support team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                  </button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 group text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4 mx-auto group-hover:bg-green-500/30 transition-colors duration-300">
                    <Users className="h-8 w-8 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                    Community Forum
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Connect with other film enthusiasts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                    Join Forum
                  </button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 group text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4 mx-auto group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Film className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                    Video Tutorials
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Learn how to use our platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                    Watch Tutorials
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

