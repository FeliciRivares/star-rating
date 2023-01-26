const allStars = document.querySelector('.wrapper'),
      stars = document.querySelectorAll('.star');

stars.forEach((star, i) => {
    star.addEventListener('mouseover', (event) => {
        allStars.classList = '';
        allStars.classList.add('wrapper');
        allStars.classList.add(`star-mark_${i + 1}`);
    })
})