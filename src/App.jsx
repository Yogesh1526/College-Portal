import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Events from './pages/Events'
import ExamSchedule from './pages/ExamSchedule'
import Achievements from './pages/Achievements'
import Admission from './pages/Admission'
import Enquiry from './pages/Enquiry'
import News from './pages/News'
import About from './pages/About'
import Courses from './pages/Courses'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/exam-schedule" element={<ExamSchedule />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

