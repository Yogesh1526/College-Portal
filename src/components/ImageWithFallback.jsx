import { useState } from 'react'

const ImageWithFallback = ({ src, alt, className, fallbackSrc, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  // Default fallback - gradient placeholder
  const defaultFallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230ea5e9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230369a1;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='800' height='600'/%3E%3C/svg%3E`

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      // Try fallback if provided, otherwise use default gradient
      setImgSrc(fallbackSrc || defaultFallback)
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  )
}

export default ImageWithFallback

