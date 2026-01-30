import { Trophy, Award, Medal, Star, BookOpen } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'National Science Olympiad Winner',
      student: 'John Doe',
      course: 'B.Sc Physics',
      year: '2024',
      description: 'Secured 1st position in the National Science Olympiad 2024',
      category: 'Academic',
      image: 'https://source.unsplash.com/800x600/?award,achievement'
    },
    {
      id: 2,
      title: 'Inter-College Basketball Championship',
      student: 'College Team',
      course: 'Sports',
      year: '2024',
      description: 'Won the Inter-College Basketball Championship for the third consecutive year',
      category: 'Sports',
      image: 'https://source.unsplash.com/800x600/?basketball,sports'
    },
    {
      id: 3,
      title: 'Best Research Paper Award',
      student: 'Dr. Sarah Smith',
      course: 'Faculty Achievement',
      year: '2024',
      description: 'Published groundbreaking research in international journal',
      category: 'Research',
      image: 'https://source.unsplash.com/800x600/?research,laboratory'
    },
    {
      id: 4,
      title: 'Hackathon 2024 Champions',
      student: 'Tech Team Alpha',
      course: 'B.Sc Computer Science',
      year: '2024',
      description: 'Won the National Hackathon with innovative AI solution',
      category: 'Technology',
      image: 'https://source.unsplash.com/800x600/?technology,computer'
    },
    {
      id: 5,
      title: 'Cultural Festival Best Performance',
      student: 'Dance Club',
      course: 'Cultural',
      year: '2024',
      description: 'Awarded best performance in the Annual Cultural Festival',
      category: 'Cultural',
      image: 'https://source.unsplash.com/800x600/?dance,performance'
    },
    {
      id: 6,
      title: '100% Placement Record',
      student: 'Class of 2024',
      course: 'All Departments',
      year: '2024',
      description: 'Achieved 100% placement rate with top companies',
      category: 'Career',
      image: 'https://source.unsplash.com/800x600/?business,success'
    },
  ]

  const getCategoryIcon = (category) => {
    const icons = {
      Academic: <BookOpen className="h-6 w-6" />,
      Sports: <Medal className="h-6 w-6" />,
      Research: <Star className="h-6 w-6" />,
      Technology: <Award className="h-6 w-6" />,
      Cultural: <Trophy className="h-6 w-6" />,
      Career: <Award className="h-6 w-6" />,
    }
    return icons[category] || <Trophy className="h-6 w-6" />
  }

  const getCategoryColor = (category) => {
    const colors = {
      Academic: 'bg-blue-500',
      Sports: 'bg-green-500',
      Research: 'bg-purple-500',
      Technology: 'bg-indigo-500',
      Cultural: 'bg-pink-500',
      Career: 'bg-orange-500',
    }
    return colors[category] || 'bg-gray-500'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Achievements & Awards</h1>
          <p className="section-subtitle">
            Celebrating excellence and outstanding accomplishments of our students and faculty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="card group hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="relative h-48 rounded-t-xl overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="relative z-10">
                    {getCategoryIcon(achievement.category)}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-white">{achievement.year}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(achievement.category)} text-white`}>
                    {achievement.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                <div className="border-t pt-3 mt-3">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">By:</span> {achievement.student}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Course:</span> {achievement.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Our Success in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Trophy className="h-12 w-12 mx-auto text-yellow-500 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto text-blue-500 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-600">Research Papers</div>
            </div>
            <div className="text-center">
              <Medal className="h-12 w-12 mx-auto text-green-500 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">30+</div>
              <div className="text-gray-600">Sports Championships</div>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto text-purple-500 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements

