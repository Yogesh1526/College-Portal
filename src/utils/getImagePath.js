/**
 * Helper function to get correct image path for GitHub Pages
 * Automatically handles base path
 */
export const getImagePath = (imagePath) => {
  // If it's already a full URL (http/https), return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  
  // Get base URL from Vite (includes base path for GitHub Pages)
  const baseUrl = import.meta.env.BASE_URL
  
  // Remove leading slash from imagePath if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  
  // Combine base URL with image path
  return `${baseUrl}${cleanPath}`
}

