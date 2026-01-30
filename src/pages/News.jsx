import { Calendar, User, ArrowRight } from 'lucide-react'

const News = () => {
  const news = [
    {
      id: 1,
      title: 'College Ranked Among Top 10 in State',
      date: '2024-03-10',
      author: 'Admin',
      category: 'Achievement',
      excerpt: 'Our college has been ranked among the top 10 colleges in the state for academic excellence and student satisfaction.',
      image: '/images/achievementd-banner.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'New Research Lab Inaugurated',
      date: '2024-03-08',
      author: 'Admin',
      category: 'Infrastructure',
      excerpt: 'State-of-the-art research laboratory inaugurated with modern equipment and facilities for advanced research.',
      image: 'https://source.unsplash.com/800x600/?laboratory,research',
      featured: false
    },
    {
      id: 3,
      title: 'Scholarship Program Launched for 2024',
      date: '2024-03-05',
      author: 'Admin',
      category: 'Scholarship',
      excerpt: 'New scholarship program launched to support meritorious and financially disadvantaged students.',
      image: 'https://source.unsplash.com/800x600/?education,scholarship',
      featured: false
    },
    {
      id: 4,
      title: 'Industry Partnership with Tech Giants',
      date: '2024-03-01',
      author: 'Admin',
      category: 'Partnership',
      excerpt: 'College signs MoU with leading tech companies for internships and placement opportunities.',
      image: 'https://source.unsplash.com/800x600/?business,partnership',
      featured: false
    },
    {
      id: 5,
      title: 'Annual Sports Meet 2024 Results',
      date: '2024-02-28',
      author: 'Admin',
      category: 'Sports',
      excerpt: 'Annual sports meet concludes with outstanding performances. Winners announced and awarded.',
      image: 'https://source.unsplash.com/800x600/?sports,competition',
      featured: false
    },
    {
      id: 6,
      title: 'Guest Lecture Series: Industry Experts',
      date: '2024-02-25',
      author: 'Admin',
      category: 'Academic',
      excerpt: 'Renowned industry experts to deliver guest lectures on emerging technologies and career guidance.',
      image: 'https://source.unsplash.com/800x600/?lecture,academic',
      featured: false
    },
  ]

  const announcements = [
    {
      id: 1,
      title: 'Mid-semester Examination Schedule Released',
      date: '2024-03-12',
      urgent: true
    },
    {
      id: 2,
      title: 'Library Extended Hours During Exam Period',
      date: '2024-03-11',
      urgent: false
    },
    {
      id: 3,
      title: 'Fee Payment Deadline Extended',
      date: '2024-03-09',
      urgent: false
    },
    {
      id: 4,
      title: 'Hostel Application Forms Available',
      date: '2024-03-07',
      urgent: false
    },
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const featuredNews = news.find(item => item.featured)
  const regularNews = news.filter(item => !item.featured)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">News & Announcements</h1>
          <p className="section-subtitle">
            Stay updated with the latest news, announcements, and happenings at our college
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured News */}
            {featuredNews && (
              <div className="card mb-8 overflow-hidden">
                <div className="relative h-64 mb-6 overflow-hidden">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-600">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                      {featuredNews.category}
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{featuredNews.title}</h2>
                  <p className="text-gray-600 mb-4">{featuredNews.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(featuredNews.date)}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredNews.author}
                      </div>
                    </div>
                    <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Regular News */}
            <div className="space-y-6">
              {regularNews.map((item) => (
                <div key={item.id} className="card">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-48 h-32 rounded-lg flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded text-xs font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(item.date)}
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {item.author}
                          </div>
                        </div>
                        <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Announcements */}
          <div className="lg:col-span-1">
            <div className="card sticky top-20">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Announcements</h2>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      announcement.urgent
                        ? 'bg-red-50 border-red-500'
                        : 'bg-blue-50 border-blue-500'
                    }`}
                  >
                    {announcement.urgent && (
                      <span className="text-xs font-semibold text-red-600 mb-1 block">URGENT</span>
                    )}
                    <h4 className="font-semibold text-gray-900 mb-1">{announcement.title}</h4>
                    <p className="text-xs text-gray-600">{formatDate(announcement.date)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News

