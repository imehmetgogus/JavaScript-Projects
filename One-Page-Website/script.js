document.querySelectorAll('.lightbox-image').forEach(image => {
    image.addEventListener('click', () => {
        document.getElementById('lightbox').style.display = 'flex';
        document.getElementById('lightbox-img').src = image.src;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});
