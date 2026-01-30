/**
 * Image URL constants
 * You can replace these with your own AI-generated images or hosted images
 */

// Using Unsplash Source API (more reliable)
export const UNSPLASH_SOURCE = 'https://source.unsplash.com'

// Alternative: Using Picsum Photos (very reliable)
export const PICSUM = 'https://picsum.photos'

// Image dimensions
export const IMAGE_SIZES = {
  event: '800x600',
  achievement: '800x600',
  news: {
    featured: '1200x800',
    regular: '800x600'
  },
  hero: '2000x1200'
}

// Helper function to get Unsplash image URL
export const getUnsplashImage = (width, height, keywords = 'college') => {
  return `${UNSPLASH_SOURCE}/${width}x${height}/?${keywords}`
}

// Helper function to get Picsum image URL (alternative)
export const getPicsumImage = (width, height, seed = null) => {
  const seedParam = seed ? `/${seed}` : ''
  return `${PICSUM}${seedParam}/${width}/${height}`
}

// Event images
export const EVENT_IMAGES = {
  cultural: getUnsplashImage(800, 600, 'festival,celebration'),
  technology: getUnsplashImage(800, 600, 'technology,innovation'),
  sports: getUnsplashImage(800, 600, 'sports,athletics'),
  career: getUnsplashImage(800, 600, 'business,career'),
  academic: getUnsplashImage(800, 600, 'science,laboratory'),
  networking: getUnsplashImage(800, 600, 'college,students')
}

// Achievement images
export const ACHIEVEMENT_IMAGES = {
  academic: getUnsplashImage(800, 600, 'award,achievement'),
  sports: getUnsplashImage(800, 600, 'basketball,sports'),
  research: getUnsplashImage(800, 600, 'research,laboratory'),
  technology: getUnsplashImage(800, 600, 'technology,computer'),
  cultural: getUnsplashImage(800, 600, 'dance,performance'),
  career: getUnsplashImage(800, 600, 'business,success')
}

// News images
export const NEWS_IMAGES = {
  featured: getUnsplashImage(1200, 800, 'college,education'),
  infrastructure: getUnsplashImage(800, 600, 'laboratory,research'),
  scholarship: getUnsplashImage(800, 600, 'education,scholarship'),
  partnership: getUnsplashImage(800, 600, 'business,partnership'),
  sports: getUnsplashImage(800, 600, 'sports,competition'),
  academic: getUnsplashImage(800, 600, 'lecture,academic')
}

// Hero images
export const HERO_IMAGES = {
  home: getUnsplashImage(2000, 1200, 'college,students'),
  about: getUnsplashImage(2000, 1200, 'college,campus')
}

