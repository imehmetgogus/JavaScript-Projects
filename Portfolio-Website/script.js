document.querySelectorAll('.lightbox-image').forEach(image => {
  image.addEventListener('click', () => {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      
      lightbox.style.display = 'flex';
      lightboxImg.src = image.src;
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});