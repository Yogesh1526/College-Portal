# AI Images Integration Guide

This guide explains how to integrate AI-generated images into the college website.

## Current Image Setup

The website currently uses high-quality Unsplash images with proper optimization. All images are:
- Properly sized and optimized
- Using lazy loading for performance
- Include proper alt text for accessibility
- Using responsive image URLs

## Replacing with AI-Generated Images

### Option 1: Direct URL Replacement

The easiest way is to replace the Unsplash URLs with your AI-generated image URLs:

1. Generate images using your preferred AI service:
   - **Midjourney**: Generate and download images
   - **DALL-E**: Use OpenAI's API or web interface
   - **Stable Diffusion**: Use local generation or online services
   - **Leonardo.ai**: Web-based AI image generation
   - **Canva AI**: Simple web-based tool

2. Host your images:
   - Upload to a CDN (Cloudinary, Imgix, etc.)
   - Use your own server
   - Use image hosting services

3. Replace URLs in the following files:
   - `src/pages/Events.jsx` - Event images
   - `src/pages/Achievements.jsx` - Achievement images
   - `src/pages/News.jsx` - News article images
   - `src/pages/Home.jsx` - Hero background image
   - `src/pages/About.jsx` - About page hero image

### Option 2: Using the Image Utility

We've created a utility function in `src/utils/imageLoader.js` that you can customize:

```javascript
import { getOptimizedImageUrl } from '../utils/imageLoader'

// In your component
const imageUrl = getOptimizedImageUrl('your-ai-image-id', 800, 80)
```

### Option 3: Environment Variables

For better management, you can use environment variables:

1. Create `.env` file:
```env
VITE_IMAGE_CDN_URL=https://your-cdn.com/images
VITE_USE_AI_IMAGES=true
```

2. Update image URLs:
```javascript
const imageUrl = import.meta.env.VITE_IMAGE_CDN_URL + '/event-' + event.id + '.jpg'
```

## Recommended Image Specifications

For best results, generate images with these specifications:

### Event Images
- **Size**: 800x600px or 1200x800px
- **Format**: JPG or WebP
- **Aspect Ratio**: 4:3 or 16:9
- **Style**: Modern, vibrant, college-themed

### Achievement Images
- **Size**: 800x600px
- **Format**: JPG or WebP
- **Aspect Ratio**: 4:3
- **Style**: Professional, celebratory

### News Article Images
- **Size**: 1200x800px (featured), 800x600px (regular)
- **Format**: JPG or WebP
- **Aspect Ratio**: 3:2 or 16:9
- **Style**: News-worthy, professional

### Hero Background Images
- **Size**: 2000x1200px or larger
- **Format**: JPG (optimized)
- **Aspect Ratio**: 16:9
- **Style**: Inspirational, college campus, students

## AI Image Generation Prompts

Here are some example prompts you can use:

### Events
- "Modern college cultural festival with students performing on stage, vibrant colors, professional photography"
- "Tech innovation summit at college, students presenting projects, modern technology, bright lighting"
- "College sports day, students competing in various events, outdoor stadium, sunny day"

### Achievements
- "Student receiving award on stage, college auditorium, professional ceremony, celebration"
- "College basketball team holding trophy, victory celebration, sports arena background"
- "Research paper award ceremony, academic achievement, modern college setting"

### News
- "College campus aerial view, modern architecture, students walking, sunny day"
- "New research laboratory, modern equipment, bright and clean, professional"
- "College career fair, students networking with employers, professional setting"

### Hero Images
- "College campus with modern buildings, students walking, beautiful landscaping, professional photography"
- "Diverse group of college students studying together, modern library, natural lighting"
- "College graduation ceremony, students in caps and gowns, celebration, professional photography"

## Image Optimization Tips

1. **Compress images**: Use tools like TinyPNG or ImageOptim
2. **Use WebP format**: Better compression with same quality
3. **Responsive images**: Generate multiple sizes for different devices
4. **Lazy loading**: Already implemented in the code
5. **CDN hosting**: Use a CDN for faster loading

## Example: Replacing an Event Image

```javascript
// Before (Unsplash)
image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'

// After (AI-generated, hosted on your CDN)
image: 'https://cdn.yourcollege.edu/images/events/cultural-festival-2024.jpg'

// Or using environment variable
image: `${import.meta.env.VITE_IMAGE_CDN_URL}/events/cultural-festival-2024.jpg`
```

## Testing Images

After replacing images:

1. Test on different devices (mobile, tablet, desktop)
2. Check loading performance
3. Verify alt text is descriptive
4. Test with slow network connections
5. Check image quality at different sizes

## Support

If you need help integrating AI images, refer to:
- Image utility: `src/utils/imageLoader.js`
- Image fallback component: `src/components/ImageWithFallback.jsx`
- Component files in `src/pages/` for image usage examples

