// A function to make each card in guide.html flip when clicked
var cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });
    }
);