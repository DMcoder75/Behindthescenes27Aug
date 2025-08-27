import React from 'react'
import { Shield, Eye, Lock, Users, FileText, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const Privacy = () => {
  const lastUpdated = "January 15, 2025"

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: FileText,
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create an account, we collect information such as your name, email address, and preferences. This helps us provide personalized content recommendations and improve your experience."
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect information about how you interact with our platform, including pages visited, videos watched, search queries, and device information. This data helps us understand user behavior and improve our services."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can control cookie settings through your browser preferences."
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our services, including content recommendations, user authentication, and customer support."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you important updates about our services, new content notifications, and promotional materials (which you can opt out of at any time)."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to understand how our platform is used, identify areas for improvement, and develop new features that better serve our users."
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: Users,
      content: [
        {
          subtitle: "Third-Party Services",
          text: "We may share information with trusted third-party service providers who help us operate our platform, such as hosting services, analytics providers, and payment processors. These partners are bound by confidentiality agreements."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or government request, or if we believe disclosure is necessary to protect our rights, property, or safety, or that of our users or the public."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or control."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits."
        },
        {
          subtitle: "Access Controls",
          text: "Access to your personal information is restricted to authorized personnel who need it to perform their job functions. All employees are trained on privacy and security best practices."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only as long as necessary to provide our services and comply with legal obligations. You can request deletion of your account and associated data at any time."
        }
      ]
    },
    {
      id: "user-rights",
      title: "Your Rights and Choices",
      icon: Shield,
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting our support team."
        },
        {
          subtitle: "Data Portability",
          text: "You can request a copy of your personal data in a structured, machine-readable format. This allows you to transfer your data to another service if you choose."
        },
        {
          subtitle: "Deletion Rights",
          text: "You can request deletion of your personal information, subject to certain legal and operational requirements. We will respond to such requests within 30 days."
        },
        {
          subtitle: "Marketing Preferences",
          text: "You can opt out of marketing communications at any time by using the unsubscribe link in our emails or updating your preferences in your account settings."
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
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 animate-pulse">
              Privacy Policy
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-slideInUp">
              Your Privacy Matters
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-6 animate-slideInUp" style={{ animationDelay: '200ms' }}>
              At BehindTheScenes.com, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400 animate-slideInUp" style={{ animationDelay: '400ms' }}>
              <Calendar className="h-4 w-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full animate-float" />
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-purple-500/10 rounded-full animate-float-delayed" />
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Privacy at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4 mx-auto">
                    <Shield className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Data Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">
                    We use industry-standard encryption and security measures to protect your personal information.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4 mx-auto">
                    <Eye className="h-8 w-8 text-green-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">
                    We clearly explain what data we collect, how we use it, and who we share it with.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4 mx-auto">
                    <Users className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Your Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">
                    You have full control over your data with options to access, update, or delete your information.
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Questions About Privacy?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              If you have any questions about this Privacy Policy or how we handle your personal information, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Contact Us
              </button>
              <button 
                onClick={() => window.location.href = '/faq'}
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Important Notes</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-yellow-400">Changes to This Policy:</strong> We may update this Privacy Policy from time to time. 
                  We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
                <p>
                  <strong className="text-yellow-400">International Users:</strong> If you are accessing our services from outside India, 
                  please note that your information may be transferred to and processed in India, where our servers are located.
                </p>
                <p>
                  <strong className="text-yellow-400">Children's Privacy:</strong> Our services are not intended for children under 13 years of age. 
                  We do not knowingly collect personal information from children under 13.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

