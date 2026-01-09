# Derek Attewell - Personal Website

A clean, modern portfolio website replicating the design and functionality of the original Squarespace site at www.derekattewell.com.

## Features

- **Full-Screen Slideshow Gallery**: Homepage features a beautiful full-screen image slideshow with 16 landscape/adventure photographs
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Interactive Navigation**:
  - Desktop: Fixed sidebar navigation with dropdown menus
  - Mobile: Slide-out hamburger menu
- **Gallery Controls**:
  - Previous/Next buttons
  - Dot indicators
  - Clickable thumbnails
  - Keyboard navigation (arrow keys)
  - Touch/swipe support on mobile
  - Auto-play with 5-second intervals
- **Social Media Integration**: Links to Facebook, Email, LinkedIn, Behance, VSCO, YouTube, SoundCloud, and Instagram
- **Clean Typography**: Using Julius Sans One for headings and Cabin for body text

## Structure

```
website/
├── index.html          # Homepage with slideshow gallery
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── script.js      # JavaScript for slideshow and interactions
├── images/            # Directory for local images
└── README.md          # This file
```

## Navigation

### Main Navigation
- Home
- Photography (Landscapes, Portraits, Adventure)
- Illustration
- Video
- Projects (ConvenienceTO, Sparrow, Subtle)

### Secondary Navigation
- About
- 9 to 5 (LinkedIn)
- Contact

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox, transitions, and responsive design
- **Vanilla JavaScript**: No frameworks, pure JavaScript for all interactions
- **Google Fonts**: Julius Sans One and Cabin font families
- **Unsplash**: Placeholder landscape photography images

## Customization

### Adding Your Own Images

Replace the image URLs in `js/script.js`:

```javascript
const slideshowImages = [
    {
        url: 'path/to/your/image1.jpg',
        alt: 'Description of image 1'
    },
    // Add more images...
];
```

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-bg: #ffffff;
    --secondary-bg: #f8f8f8;
    --text-color: #333333;
    --text-light: #666666;
    --border-color: #e0e0e0;
    --hover-color: #000000;
}
```

### Modifying Content

- **About Page**: Edit `about.html` to add your bio and background
- **Contact Page**: Edit `contact.html` to update contact information
- **Navigation**: Modify the navigation links in all HTML files
- **Social Links**: Update URLs in the social links section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Add additional portfolio pages (Photography subpages, Illustration, Video, Projects)
- Implement contact form with backend
- Add lightbox for enlarged image viewing
- Include more interactive galleries
- Add blog functionality
- Optimize images for faster loading

## License

This is a personal portfolio website. All rights reserved.

## Contact

Derek Attewell
- Email: derek.attewell@gmail.com
- LinkedIn: [linkedin.com/in/derekattewell](https://www.linkedin.com/in/derekattewell/)
- Instagram: [@derekattewell](http://instagram.com/derekattewell)
