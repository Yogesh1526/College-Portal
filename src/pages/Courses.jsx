import { BookOpen, Clock, Users, Award, GraduationCap } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: 'B.Sc Computer Science',
      duration: '3 Years',
      seats: 120,
      description: 'Comprehensive program covering programming, algorithms, data structures, and software engineering.',
      subjects: ['Programming', 'Data Structures', 'Database Systems', 'Web Development', 'AI & ML'],
      eligibility: '10+2 with Mathematics',
      career: 'Software Developer, Data Scientist, System Analyst'
    },
    {
      id: 2,
      name: 'B.Sc Physics',
      duration: '3 Years',
      seats: 80,
      description: 'In-depth study of physics principles, quantum mechanics, and modern physics applications.',
      subjects: ['Classical Mechanics', 'Quantum Physics', 'Electromagnetism', 'Thermodynamics', 'Optics'],
      eligibility: '10+2 with Physics, Chemistry, Mathematics',
      career: 'Research Scientist, Physicist, Teacher'
    },
    {
      id: 3,
      name: 'B.Sc Chemistry',
      duration: '3 Years',
      seats: 80,
      description: 'Study of chemical principles, organic and inorganic chemistry, and analytical methods.',
      subjects: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry', 'Biochemistry'],
      eligibility: '10+2 with Physics, Chemistry, Mathematics/Biology',
      career: 'Chemist, Research Analyst, Quality Control'
    },
    {
      id: 4,
      name: 'B.A English',
      duration: '3 Years',
      seats: 100,
      description: 'Explore literature, language, and communication skills through diverse texts and critical analysis.',
      subjects: ['British Literature', 'American Literature', 'Linguistics', 'Creative Writing', 'Literary Theory'],
      eligibility: '10+2 in any stream',
      career: 'Writer, Editor, Teacher, Content Creator'
    },
    {
      id: 5,
      name: 'BBA (Bachelor of Business Administration)',
      duration: '3 Years',
      seats: 150,
      description: 'Business fundamentals, management principles, and leadership skills for corporate success.',
      subjects: ['Management', 'Marketing', 'Finance', 'Human Resources', 'Operations'],
      eligibility: '10+2 in any stream',
      career: 'Business Analyst, Manager, Entrepreneur'
    },
    {
      id: 6,
      name: 'B.Com (Bachelor of Commerce)',
      duration: '3 Years',
      seats: 200,
      description: 'Commerce, accounting, economics, and business law for careers in finance and commerce.',
      subjects: ['Accounting', 'Economics', 'Business Law', 'Taxation', 'Financial Management'],
      eligibility: '10+2 with Commerce',
      career: 'Accountant, Financial Analyst, Banker'
    },
    {
      id: 7,
      name: 'M.Sc Computer Science',
      duration: '2 Years',
      seats: 60,
      description: 'Advanced studies in computer science, research methodologies, and specialized topics.',
      subjects: ['Advanced Algorithms', 'Machine Learning', 'Cloud Computing', 'Research Methodology', 'Thesis'],
      eligibility: 'B.Sc Computer Science or equivalent',
      career: 'Senior Developer, Research Scientist, Tech Lead'
    },
    {
      id: 8,
      name: 'M.A English',
      duration: '2 Years',
      seats: 50,
      description: 'Advanced literary studies, critical theory, and research in English literature.',
      subjects: ['Advanced Literary Theory', 'Postcolonial Literature', 'Research Methods', 'Thesis', 'Electives'],
      eligibility: 'B.A English or equivalent',
      career: 'Professor, Researcher, Literary Critic'
    },
    {
      id: 9,
      name: 'MBA (Master of Business Administration)',
      duration: '2 Years',
      seats: 100,
      description: 'Advanced business management, leadership, and strategic thinking for executive roles.',
      subjects: ['Strategic Management', 'Leadership', 'Advanced Finance', 'Marketing Strategy', 'Thesis'],
      eligibility: 'Bachelor\'s degree in any field',
      career: 'Executive, Consultant, Business Leader'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Our Courses</h1>
          <p className="section-subtitle">
            Explore our wide range of undergraduate and postgraduate programs designed to shape your future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="card group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary-600" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  course.duration.includes('3') ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}>
                  {course.duration}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2 text-primary-600" />
                  <span>Seats: {course.seats}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-4 w-4 mr-2 text-primary-600" />
                  <span className="line-clamp-1">{course.eligibility}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <details className="group">
                  <summary className="cursor-pointer text-primary-600 font-semibold text-sm hover:text-primary-700">
                    View Details
                  </summary>
                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Key Subjects:</p>
                      <div className="flex flex-wrap gap-2">
                        {course.subjects.map((subject, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Career Opportunities:</p>
                      <p className="text-gray-600 text-xs">{course.career}</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <GraduationCap className="h-12 w-12 mx-auto text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Faculty</h3>
            <p className="text-gray-600">
              Learn from experienced professors and industry experts
            </p>
          </div>
          <div className="card text-center">
            <Award className="h-12 w-12 mx-auto text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Partnerships</h3>
            <p className="text-gray-600">
              Strong connections with leading companies for placements
            </p>
          </div>
          <div className="card text-center">
            <BookOpen className="h-12 w-12 mx-auto text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Curriculum</h3>
            <p className="text-gray-600">
              Updated courses aligned with industry requirements
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses

