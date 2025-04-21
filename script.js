document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});
});
document.querySelectorAll('.card-back-1 form, .card-back-2 form, .card-back-3 form,.card-back-1 button, .card-back-2 button, .card-back-3 button').forEach(element => {
    element.addEventListener('click', function(e) {
      // Prevent the click from bubbling up to the card
      e.stopPropagation();
    });
  });


