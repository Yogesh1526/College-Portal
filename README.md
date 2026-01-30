# College Portal Website

A modern, responsive college website built with React, Vite, and Tailwind CSS. This website provides a comprehensive platform for students to access information about events, exam schedules, achievements, admission forms, and more.

## Features

- 🎓 **Home Page** - Beautiful hero section with quick access to all features
- 📅 **Events** - Display upcoming college events with details
- 📝 **Exam Schedule** - View exam dates, timings, and venues
- 🏆 **Achievements** - Showcase student and college achievements
- 📋 **Admission Forms** - Online admission application system
- 💬 **Enquiry** - Contact form for student inquiries
- 📰 **News & Announcements** - Latest news and important announcements
- 🎯 **About** - College information, mission, vision, and values
- 📚 **Courses** - Detailed information about all available courses

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
college/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Events.jsx
│   │   ├── ExamSchedule.jsx
│   │   ├── Achievements.jsx
│   │   ├── Admission.jsx
│   │   ├── Enquiry.jsx
│   │   ├── News.jsx
│   │   ├── About.jsx
│   │   └── Courses.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features in Detail

### Responsive Design
- Fully responsive layout that works on all devices
- Mobile-first approach with Tailwind CSS
- Smooth animations and transitions

### Modern UI/UX
- Clean, modern design
- Intuitive navigation
- Beautiful color scheme
- Accessible components

### Form Handling
- Admission form with validation
- Enquiry form with category selection
- Success messages and user feedback

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme. The primary color is defined in the theme.

### Content
All content is currently in the component files. You can easily modify:
- Events in `src/pages/Events.jsx`
- Exam schedules in `src/pages/ExamSchedule.jsx`
- Courses in `src/pages/Courses.jsx`
- And more...

### Images
The website uses optimized Unsplash images. To use AI-generated images:
1. See `AI_IMAGES_GUIDE.md` for detailed instructions
2. Replace image URLs in component files
3. Use the image utility in `src/utils/imageLoader.js` for advanced usage

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add a route in `src/App.jsx`
3. Add a navigation link in `src/components/Navbar.jsx`

## Future Enhancements

- Backend integration for dynamic data
- User authentication system
- Student dashboard
- Online payment integration
- Email notifications
- Admin panel for content management

## License

This project is open source and available for educational purposes.

## Support

For questions or support, please contact the development team.

