/**
 * Utility function to load images with proper optimization
 * You can replace Unsplash URLs with AI-generated images from services like:
 * - Midjourney
 * - DALL-E
 * - Stable Diffusion
 * - Or any other AI image generation service
 */

export const getOptimizedImageUrl = (imageId, width = 800, quality = 80) => {
  // For Unsplash images
  if (imageId.startsWith('https://')) {
    return imageId
  }
  
  // For AI-generated images, you can use a service like:
  // return `https://your-ai-image-service.com/${imageId}?w=${width}&q=${quality}`
  
  // Or if using a CDN:
  // return `https://cdn.yoursite.com/images/${imageId}?w=${width}&q=${quality}`
  
  return imageId
}

/**
 * Preload images for better performance
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

/**
 * Generate placeholder for images
 */
export const getPlaceholder = (width = 800, height = 600) => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect fill='%23f3f4f6' width='${width}' height='${height}'/%3E%3C/svg%3E`
}

