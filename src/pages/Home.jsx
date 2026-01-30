import { Link } from 'react-router-dom'
import { Calendar, BookOpen, Trophy, FileText, Bell, Users, Award, GraduationCap } from 'lucide-react'
import { getImagePath } from '../utils/getImagePath'

const Home = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Upcoming Events',
      description: 'Stay updated with all college events and activities',
      link: '/events',
      color: 'bg-blue-500'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Exam Schedule',
      description: 'View your exam dates and timetable',
      link: '/exam-schedule',
      color: 'bg-green-500'
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Achievements',
      description: 'Celebrate student and college achievements',
      link: '/achievements',
      color: 'bg-yellow-500'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Admission Forms',
      description: 'Apply for admission online',
      link: '/admission',
      color: 'bg-purple-500'
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: 'News & Updates',
      description: 'Latest announcements and news',
      link: '/news',
      color: 'bg-red-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Enquiry',
      description: 'Get answers to your questions',
      link: '/enquiry',
      color: 'bg-indigo-500'
    },
  ]

  const stats = [
    { number: '5000+', label: 'Students' },
    { number: '200+', label: 'Faculty' },
    { number: '50+', label: 'Courses' },
    { number: '95%', label: 'Placement Rate' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={getImagePath('/images/College students.jpg')}
            alt="College students"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to College Portal
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Your Gateway to Academic Excellence and Student Success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admission" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Apply Now
              </Link>
              <Link to="/about" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Explore Our Portal</h2>
          <p className="section-subtitle">
            Everything you need to stay informed and connected with your college
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 text-primary-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Join thousands of students who are shaping their future with us
          </p>
          <Link to="/admission" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block">
            Apply for Admission
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

