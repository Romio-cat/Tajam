// Изменение иконки меню
function menuIconChange(x) {
  x.classList.toggle("change");
};
// Открытие и закрытие меню при клике на крестик
var menu = document.getElementById("topMenu");
var hamburger = document.querySelector('.menu-icon');

function responsiveMenu() {
  menu.classList.toggle('responsive');
  if (menu.className === "menu") {
	  hamburger.style.position = "absolute";
	} else {
	  hamburger.style.position = "fixed";
	}
};

// Слайдер для хедера
var slideIndex = 0;
showSlidesHeader();

function showSlidesHeader() {
	var i;
	var slides = document.getElementsByClassName("header-slides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	};
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

	setTimeout(showSlidesHeader, 3000); 
};

// включение видео
$(document).on('click', '.fa-play-circle', function() {
  var $video = $('#video'),
      src = $video.attr('src');

  $video.attr('src', src + '?autoplay=1');
  $(".play").hide();
});

// Слайдер для отзывов
var testimonialSlide = 3;
showSlidesTestimonial(testimonialSlide);

function plusSlides(n) {
  showSlidesTestimonial(testimonialSlide += n);
}

function currentSlide(n) {
  showSlidesTestimonial(testimonialSlide = n);
}

function showSlidesTestimonial(n) {
  var x;
  var testimonialSlides = document.getElementsByClassName("testimonials-slider-container");
  var dotsAva = document.getElementsByClassName("ava-dot");
  if (n > testimonialSlides.length) {testimonialSlide = 1}    
  if (n < 1) {testimonialSlide = testimonialSlides.length}
  for (x = 0; x < testimonialSlides.length; x++) {
    testimonialSlides[x].style.display = "none";  
  }
  for (x = 0; x < dotsAva.length; x++) {
    dotsAva[x].className = dotsAva[x].className.replace(" active-ava", "");
  }
  testimonialSlides[testimonialSlide-1].style.display = "block";  
  dotsAva[testimonialSlide-1].className += " active-ava";
  console.log(testimonialSlide);
};

