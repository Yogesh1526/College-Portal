# Images Directory

Place your images here for use in the website.

## Directory Structure

```
public/
  images/
    events/
      - cultural-festival.jpg
      - tech-summit.jpg
      - sports-day.jpg
      - career-fair.jpg
      - science-exhibition.jpg
      - alumni-meet.jpg
    achievements/
      - academic-award.jpg
      - sports-championship.jpg
      - research-paper.jpg
      - hackathon.jpg
      - cultural-performance.jpg
      - placement.jpg
    news/
      - featured-news.jpg
      - research-lab.jpg
      - scholarship.jpg
      - partnership.jpg
      - sports-meet.jpg
      - guest-lecture.jpg
    hero/
      - home-hero.jpg
      - about-hero.jpg
```

## Using Local Images

To use local images instead of Unsplash:

1. Place your images in the appropriate folders above
2. Update the image paths in the component files:

```javascript
// Instead of:
image: 'https://source.unsplash.com/800x600/?festival,celebration'

// Use:
image: '/images/events/cultural-festival.jpg'
```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Event images**: 800x600px recommended
- **News featured**: 1200x800px recommended
- **Hero images**: 2000x1200px recommended
- **Optimize**: Compress images before uploading for better performance

## AI-Generated Images

If using AI-generated images:
1. Generate images matching the specifications above
2. Save them with descriptive names
3. Place them in the appropriate folders
4. Update the image paths in components

