document.querySelectorAll('.ring').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.add('revealed');
  });
});