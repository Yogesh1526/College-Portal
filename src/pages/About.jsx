import { GraduationCap, Users, Award, Target, Heart, Lightbulb } from 'lucide-react'
import { getImagePath } from '../utils/getImagePath'

const About = () => {
  const values = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Excellence in Education',
      description: 'Committed to providing world-class education and fostering academic excellence.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Student-Centered',
      description: 'Every decision we make is focused on student success and well-being.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Embracing new technologies and teaching methods to enhance learning.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Integrity',
      description: 'Upholding the highest standards of ethics and moral values.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Diversity',
      description: 'Celebrating diversity and creating an inclusive environment for all.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Research',
      description: 'Promoting research and innovation to contribute to society.'
    },
  ]

  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Students' },
    { number: '200+', label: 'Faculty Members' },
    { number: '50+', label: 'Courses Offered' },
    { number: '95%', label: 'Placement Rate' },
    { number: '100+', label: 'Industry Partners' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={getImagePath('/images/Overseas-Education-Counselling-600x401.jpg')}
            alt="College campus"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our College</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Empowering students to achieve their dreams through quality education, 
              innovative learning, and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide quality education that transforms students into competent professionals 
                and responsible citizens. We strive to create an environment that fosters critical 
                thinking, creativity, and ethical values while preparing students for the challenges 
                of the modern world.
              </p>
            </div>
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution recognized for academic excellence, 
                innovation, and contribution to society. We envision a future where our graduates 
                are leaders in their fields, making a positive impact on the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-gray-900">Our Achievements in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-gray-900">Our Core Values</h2>
          <p className="section-subtitle text-gray-600">
            The principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our History</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 1999, our college has been at the forefront of providing quality education 
                for over two decades. What started as a small institution with a vision has grown into 
                a premier educational hub, recognized for academic excellence and student success.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over the years, we have expanded our programs, enhanced our infrastructure, and built 
                strong partnerships with industry leaders. Our commitment to innovation and excellence 
                has resulted in numerous accolades and a reputation for producing graduates who excel 
                in their chosen fields.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to evolve, embracing new technologies and teaching methodologies 
                while staying true to our core values of excellence, integrity, and student-centered 
                education. We are proud of our journey and excited about the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Message from the Principal</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-center italic">
              "Education is not just about acquiring knowledge; it's about developing character, 
              fostering creativity, and preparing for life. At our college, we are committed to 
              providing an environment where every student can thrive, discover their potential, 
              and achieve their dreams. We believe in holistic education that goes beyond the 
              classroom, preparing students to be leaders, innovators, and responsible citizens 
              of tomorrow."
            </p>
            <p className="text-right mt-6 text-gray-700 font-semibold">
              - Principal, College Portal
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

