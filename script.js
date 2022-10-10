let stars = document.querySelectorAll('.fa-star')
let emojis = document.querySelectorAll('.fa-regular')
let colors = ["red", "orange", "purple", "pink", "yellow"]
console.log(stars);

updateRating(0)
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        updateRating(index)
    })
})

function updateRating(index) {
    stars.forEach((star, idx) => {
        if(idx < index + 1) {
            star.classList.add('active');
        } else {
            star.classList.remove('active')
        }
        })
    
    emojis.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.color = colors[index] || colors
    })
    }