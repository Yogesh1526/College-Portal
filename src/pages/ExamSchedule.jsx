import { Calendar, Clock, BookOpen } from 'lucide-react'

const ExamSchedule = () => {
  const exams = [
    {
      id: 1,
      subject: 'Mathematics',
      course: 'B.Sc Computer Science',
      date: '2024-03-18',
      time: '9:00 AM - 12:00 PM',
      venue: 'Hall A',
      duration: '3 hours',
      type: 'Final Exam'
    },
    {
      id: 2,
      subject: 'Physics',
      course: 'B.Sc Computer Science',
      date: '2024-03-20',
      time: '9:00 AM - 12:00 PM',
      venue: 'Hall B',
      duration: '3 hours',
      type: 'Final Exam'
    },
    {
      id: 3,
      subject: 'Data Structures',
      course: 'B.Sc Computer Science',
      date: '2024-03-22',
      time: '2:00 PM - 5:00 PM',
      venue: 'Lab 1',
      duration: '3 hours',
      type: 'Practical Exam'
    },
    {
      id: 4,
      subject: 'English Literature',
      course: 'B.A English',
      date: '2024-03-19',
      time: '9:00 AM - 12:00 PM',
      venue: 'Hall C',
      duration: '3 hours',
      type: 'Final Exam'
    },
    {
      id: 5,
      subject: 'Organic Chemistry',
      course: 'B.Sc Chemistry',
      date: '2024-03-21',
      time: '9:00 AM - 12:00 PM',
      venue: 'Hall A',
      duration: '3 hours',
      type: 'Final Exam'
    },
    {
      id: 6,
      subject: 'Business Management',
      course: 'BBA',
      date: '2024-03-23',
      time: '2:00 PM - 5:00 PM',
      venue: 'Hall B',
      duration: '3 hours',
      type: 'Final Exam'
    },
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const getDaysUntil = (dateString) => {
    const today = new Date()
    const examDate = new Date(dateString)
    const diffTime = examDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Exam Schedule</h1>
          <p className="section-subtitle">
            View your upcoming examination dates and timings
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <BookOpen className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Important:</strong> Please arrive at least 30 minutes before the exam time. 
                Bring your student ID and required materials. Check the venue location beforehand.
              </p>
            </div>
          </div>
        </div>

        {/* Exam List */}
        <div className="space-y-4">
          {exams.map((exam) => {
            const daysUntil = getDaysUntil(exam.date)
            return (
              <div key={exam.id} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exam.subject}</h3>
                        <p className="text-gray-600 text-sm">{exam.course}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        exam.type === 'Final Exam' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {exam.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 mr-2 text-primary-600" />
                        <div>
                          <div className="text-sm font-medium">{formatDate(exam.date)}</div>
                          {daysUntil >= 0 && (
                            <div className="text-xs text-gray-500">
                              {daysUntil === 0 ? 'Today' : daysUntil === 1 ? 'Tomorrow' : `${daysUntil} days left`}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-2 text-primary-600" />
                        <div>
                          <div className="text-sm font-medium">{exam.time}</div>
                          <div className="text-xs text-gray-500">Duration: {exam.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <BookOpen className="h-5 w-5 mr-2 text-primary-600" />
                        <div>
                          <div className="text-sm font-medium">Venue: {exam.venue}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* No exams message */}
        {exams.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg">No exam schedule available at the moment.</p>
          </div>
        )}

        {/* Download Schedule Button */}
        <div className="mt-8 text-center">
          <button className="btn-primary">
            Download Full Schedule (PDF)
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExamSchedule

