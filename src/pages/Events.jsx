import { Calendar, MapPin, Clock } from 'lucide-react'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Cultural Festival',
      date: '2024-03-15',
      time: '10:00 AM - 6:00 PM',
      location: 'Main Auditorium',
      description: 'Join us for a day filled with music, dance, and cultural performances from students across all departments.',
      category: 'Cultural',
      image: 'https://source.unsplash.com/800x600/?festival,celebration'
    },
    {
      id: 2,
      title: 'Tech Innovation Summit',
      date: '2024-03-20',
      time: '9:00 AM - 5:00 PM',
      location: 'Tech Hall',
      description: 'Explore the latest innovations in technology with industry experts and student projects.',
      category: 'Technology',
      image: 'https://source.unsplash.com/800x600/?technology,innovation'
    },
    {
      id: 3,
      title: 'Sports Day',
      date: '2024-03-25',
      time: '8:00 AM - 4:00 PM',
      location: 'Sports Ground',
      description: 'Annual inter-department sports competition featuring various athletic events.',
      category: 'Sports',
      image: 'https://source.unsplash.com/800x600/?sports,athletics'
    },
    {
      id: 4,
      title: 'Career Fair 2024',
      date: '2024-04-01',
      time: '10:00 AM - 4:00 PM',
      location: 'Convention Center',
      description: 'Connect with top employers and explore career opportunities. Open to all students.',
      category: 'Career',
      image: 'https://source.unsplash.com/800x600/?business,career'
    },
    {
      id: 5,
      title: 'Science Exhibition',
      date: '2024-04-10',
      time: '9:00 AM - 3:00 PM',
      location: 'Science Block',
      description: 'Showcase of innovative science projects and research by students.',
      category: 'Academic',
      image: 'https://source.unsplash.com/800x600/?science,laboratory'
    },
    {
      id: 6,
      title: 'Alumni Meet',
      date: '2024-04-15',
      time: '2:00 PM - 6:00 PM',
      location: 'Main Auditorium',
      description: 'Annual gathering of alumni to reconnect and share experiences with current students.',
      category: 'Networking',
      image: 'https://source.unsplash.com/800x600/?college,students'
    },
  ]

  const getCategoryColor = (category) => {
    const colors = {
      Cultural: 'bg-purple-100 text-purple-800',
      Technology: 'bg-blue-100 text-blue-800',
      Sports: 'bg-green-100 text-green-800',
      Career: 'bg-orange-100 text-orange-800',
      Academic: 'bg-red-100 text-red-800',
      Networking: 'bg-indigo-100 text-indigo-800',
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Upcoming Events</h1>
          <p className="section-subtitle">
            Stay informed about all the exciting events happening at our college
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-white/90 ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{formatDate(event.date)}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No events message */}
        {events.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg">No upcoming events at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Events

