var reservationButton = document.querySelector('.main-reservation-button');
var reservationForm = document.querySelector('.main-reservation-form');

reservationButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	reservationForm.classList.toggle('show-popup');
});

