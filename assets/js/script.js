// Temporary card flip animation - final solution will need to loop through all cards
const card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});