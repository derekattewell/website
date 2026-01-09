// Slideshow data - placeholder images from landscape photography
const slideshowImages = [
    {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000',
        alt: 'Mountain landscape'
    },
    {
        url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=2000',
        alt: 'Forest landscape'
    },
    {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2000',
        alt: 'Lake reflection'
    },
    {
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=2000',
        alt: 'Sunset landscape'
    },
    {
        url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=2000',
        alt: 'Mountain peaks'
    },
    {
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2000',
        alt: 'Forest trail'
    },
    {
        url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=2000',
        alt: 'Wildflower field'
    },
    {
        url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=2000',
        alt: 'Coastal landscape'
    },
    {
        url: 'https://images.unsplash.com/photo-1465146633011-14f8e0781093?w=2000',
        alt: 'Alpine meadow'
    },
    {
        url: 'https://images.unsplash.com/photo-1476231790875-69f3e3887b3d?w=2000',
        alt: 'Desert landscape'
    },
    {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000',
        alt: 'Snowy mountains'
    },
    {
        url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=2000',
        alt: 'River valley'
    },
    {
        url: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=2000',
        alt: 'Canyon vista'
    },
    {
        url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=2000',
        alt: 'Aurora landscape'
    },
    {
        url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=2000',
        alt: 'Waterfall'
    },
    {
        url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=2000',
        alt: 'Mountain sunrise'
    }
];

// Slideshow functionality
class Slideshow {
    constructor() {
        this.currentSlide = 0;
        this.slides = slideshowImages;
        this.slideshow = document.getElementById('slideshow');
        this.dotControls = document.getElementById('dotControls');
        this.thumbnails = document.getElementById('thumbnails');
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000;

        this.init();
    }

    init() {
        this.createSlides();
        this.createDots();
        this.createThumbnails();
        this.setupControls();
        this.showSlide(0);
        this.startAutoPlay();
    }

    createSlides() {
        this.slides.forEach((slide, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'slide';
            slideDiv.innerHTML = `<img src="${slide.url}" alt="${slide.alt}" loading="${index === 0 ? 'eager' : 'lazy'}">`;
            this.slideshow.appendChild(slideDiv);
        });
    }

    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.addEventListener('click', () => {
                this.showSlide(index);
                this.resetAutoPlay();
            });
            this.dotControls.appendChild(dot);
        });
    }

    createThumbnails() {
        this.slides.forEach((slide, index) => {
            const thumb = document.createElement('div');
            thumb.className = 'thumb';
            thumb.innerHTML = `<img src="${slide.url}" alt="${slide.alt}">`;
            thumb.addEventListener('click', () => {
                this.showSlide(index);
                this.resetAutoPlay();
            });
            this.thumbnails.appendChild(thumb);
        });
    }

    setupControls() {
        // Previous/Next buttons
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        prevBtn.addEventListener('click', () => {
            this.previousSlide();
            this.resetAutoPlay();
        });

        nextBtn.addEventListener('click', () => {
            this.nextSlide();
            this.resetAutoPlay();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
                this.resetAutoPlay();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
                this.resetAutoPlay();
            }
        });

        // Thumbnail toggle
        const thumbnailToggleBtn = document.getElementById('thumbnailToggleBtn');
        thumbnailToggleBtn.addEventListener('click', () => {
            this.thumbnails.classList.toggle('thumbnails-hidden');
            this.thumbnails.classList.toggle('thumbnails-visible');

            if (this.thumbnails.classList.contains('thumbnails-visible')) {
                thumbnailToggleBtn.textContent = 'hide thumbnails';
            } else {
                thumbnailToggleBtn.textContent = 'show thumbnails';
            }
        });

        // Touch/Swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        this.slideshow.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.slideshow.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                this.nextSlide();
                this.resetAutoPlay();
            }
            if (touchEndX > touchStartX + 50) {
                this.previousSlide();
                this.resetAutoPlay();
            }
        };

        this.handleSwipe = handleSwipe;
    }

    showSlide(index) {
        // Remove active class from all slides, dots, and thumbs
        const allSlides = document.querySelectorAll('.slide');
        const allDots = document.querySelectorAll('.dot');
        const allThumbs = document.querySelectorAll('.thumb');

        allSlides.forEach(slide => slide.classList.remove('active'));
        allDots.forEach(dot => dot.classList.remove('active'));
        allThumbs.forEach(thumb => thumb.classList.remove('active'));

        // Add active class to current slide, dot, and thumb
        this.currentSlide = index;
        allSlides[index].classList.add('active');
        allDots[index].classList.add('active');
        allThumbs[index].classList.add('active');

        // Scroll thumbnail into view
        allThumbs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    previousSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// Mobile menu functionality
class MobileMenu {
    constructor() {
        this.menuBtn = document.getElementById('mobileMenuBtn');
        this.mobileNav = document.getElementById('mobileNav');
        this.isOpen = false;

        this.init();
    }

    init() {
        this.menuBtn.addEventListener('click', () => this.toggle());

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.mobileNav.contains(e.target) && !this.menuBtn.contains(e.target)) {
                this.close();
            }
        });

        // Close menu on window resize if it gets too wide
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isOpen) {
                this.close();
            }
        });
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.mobileNav.classList.add('active');
        this.menuBtn.textContent = 'Close';
        this.isOpen = true;
    }

    close() {
        this.mobileNav.classList.remove('active');
        this.menuBtn.textContent = 'Menu';
        this.isOpen = false;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Slideshow();
    new MobileMenu();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to current page in navigation
    const currentPath = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath ||
            (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.parentElement.classList.add('active');
        }
    });
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Preload next and previous images for smoother transitions
function preloadImages() {
    const currentSlide = document.querySelector('.slide.active');
    if (currentSlide) {
        const currentIndex = Array.from(currentSlide.parentNode.children).indexOf(currentSlide);
        const nextIndex = (currentIndex + 1) % slideshowImages.length;
        const prevIndex = (currentIndex - 1 + slideshowImages.length) % slideshowImages.length;

        [nextIndex, prevIndex].forEach(index => {
            const img = new Image();
            img.src = slideshowImages[index].url;
        });
    }
}

setInterval(preloadImages, 1000);
