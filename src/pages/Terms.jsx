import React from 'react'
import { Scale, FileText, AlertTriangle, Users, Shield, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const Terms = () => {
  const lastUpdated = "January 15, 2025"

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using BehindTheScenes.com, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service after any changes constitutes acceptance of the new terms."
        }
      ]
    },
    {
      id: "use-license",
      title: "Use License",
      icon: Scale,
      content: [
        {
          subtitle: "Permitted Use",
          text: "Permission is granted to temporarily access and view the materials on BehindTheScenes.com for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
        },
        {
          subtitle: "Restrictions",
          text: "Under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on the website; or remove any copyright or other proprietary notations from the materials."
        },
        {
          subtitle: "Termination",
          text: "This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession."
        }
      ]
    },
    {
      id: "user-accounts",
      title: "User Accounts",
      icon: Users,
      content: [
        {
          subtitle: "Account Creation",
          text: "To access certain features of our service, you may be required to create an account. You must provide accurate, current, and complete information during the registration process and keep your account information updated."
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for safeguarding the password and for maintaining the confidentiality of your account. You agree to accept responsibility for all activities that occur under your account or password."
        },
        {
          subtitle: "Account Termination",
          text: "We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
        }
      ]
    },
    {
      id: "content-policy",
      title: "Content and Conduct",
      icon: Shield,
      content: [
        {
          subtitle: "Content Ownership",
          text: "All content on BehindTheScenes.com, including but not limited to videos, images, text, graphics, logos, and software, is the property of BehindTheScenes.com or its content suppliers and is protected by copyright and other intellectual property laws."
        },
        {
          subtitle: "User-Generated Content",
          text: "If you submit content to our platform (such as comments or reviews), you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display such content in connection with our services."
        },
        {
          subtitle: "Prohibited Conduct",
          text: "You agree not to use the service to: upload, post, or transmit any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable; impersonate any person or entity; or interfere with or disrupt the service or servers or networks connected to the service."
        }
      ]
    },
    {
      id: "disclaimers",
      title: "Disclaimers and Limitations",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Service Availability",
          text: "The materials on BehindTheScenes.com are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
        },
        {
          subtitle: "Limitation of Liability",
          text: "In no event shall BehindTheScenes.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BehindTheScenes.com, even if we have been notified orally or in writing of the possibility of such damage."
        },
        {
          subtitle: "Accuracy of Materials",
          text: "The materials appearing on BehindTheScenes.com could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 animate-pulse">
              Terms of Service
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-slideInUp">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-6 animate-slideInUp" style={{ animationDelay: '200ms' }}>
              Please read these Terms of Service carefully before using BehindTheScenes.com. 
              These terms govern your use of our website and services.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400 animate-slideInUp" style={{ animationDelay: '400ms' }}>
              <Calendar className="h-4 w-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-orange-500/10 rounded-full animate-float" />
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-red-500/10 rounded-full animate-float-delayed" />
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Key Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border-gray-800 hover:border-orange-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4 mx-auto">
                    <Scale className="h-8 w-8 text-orange-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Fair Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">
                    Our content is for personal, non-commercial use. Respect intellectual property rights.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4 mx-auto">
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-lg text-white">User Responsibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">
                    You're responsible for your account security and compliance with these terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4 mx-auto">
                    <AlertTriangle className="h-8 w-8 text-red-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">
                    Our liability is limited. Services are provided "as is" without warranties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <Card 
                key={section.id}
                className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-500 animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg">
                      <section.icon className="h-6 w-6 text-yellow-500" />
                    </div>
                    <CardTitle className="text-2xl text-white">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-2">
                      <h4 className="text-lg font-semibold text-yellow-400">{item.subtitle}</h4>
                      <p className="text-gray-300 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Additional Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of India. 
                    Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of New Delhi, India.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Severability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect. 
                    The invalid provision will be replaced with a valid provision that most closely matches the intent of the original.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at legal@behindthescenes.com 
                    or through our contact page. We will respond to your inquiry within 48 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Entire Agreement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and BehindTheScenes.com 
                    regarding the use of our services and supersede all prior agreements and understandings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Questions About These Terms?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              If you have any questions about these Terms of Service or need clarification on any point, 
              our legal team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Contact Legal Team
              </button>
              <button 
                onClick={() => window.location.href = '/privacy'}
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-400">Important Notice</h3>
                  <p className="text-gray-300 leading-relaxed">
                    By using BehindTheScenes.com, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                    If you do not agree with any part of these terms, you must not use our services. These terms are legally binding and enforceable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms

