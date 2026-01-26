(function() {
  'use strict';

  const CLOUDINARY_BASE = 'https://res.cloudinary.com/dtgbrzxs0/image/upload';

  // Cloudinary transformations
  const transforms = {
    thumbnail: 'c_fill,w_600,q_auto,f_auto',
    full: 'q_auto,f_auto'
  };

  let images = [];
  let currentIndex = 0;

  // DOM elements
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  // Load images from JSON
  async function loadImages() {
    try {
      const response = await fetch('data/images.json');
      const data = await response.json();
      images = data.images;
      renderGallery();
    } catch (error) {
      console.error('Failed to load images:', error);
    }
  }

  // Render gallery items
  function renderGallery() {
    gallery.innerHTML = images.map((image, index) => `
      <div class="gallery-item loading" data-index="${index}">
        <img
          src="${CLOUDINARY_BASE}/${transforms.thumbnail}/${image.id}.jpg"
          alt="Landscape photograph ${image.number}"
          loading="lazy"
          onload="this.classList.add('loaded'); this.parentElement.classList.remove('loading');"
        />
      </div>
    `).join('');

    // Add click handlers
    gallery.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        openLightbox(parseInt(item.dataset.index));
      });
    });
  }

  // Lightbox functions
  function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    const image = images[currentIndex];
    lightboxImg.classList.remove('loaded');
    lightboxImg.src = `${CLOUDINARY_BASE}/${transforms.full}/${image.id}.jpg`;
    lightboxImg.alt = `Landscape photograph ${image.number}`;
    lightboxImg.onload = () => lightboxImg.classList.add('loaded');
  }

  function showPrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxImage();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxImage();
  }

  // Event listeners
  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrevious);
  nextBtn.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        showPrevious();
        break;
      case 'ArrowRight':
        showNext();
        break;
    }
  });

  // Initialize
  loadImages();
})();
