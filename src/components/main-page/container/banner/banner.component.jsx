import React, { Fragment } from "react";



export const Banner = () =>{

  var slideIndex = 1;
  var timer = null;
  showSlides(slideIndex);
  
  function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n==undefined){n = ++slideIndex}
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "";
    dots[slideIndex-1].className += " active";
    timer = setTimeout(showSlides, 3000);
  }

    return(
        <Fragment>
        <header class="slideshow-container">

        <div class="mySlides fade">
          <img class="slider-images" src="../../../../assets/img/slider/slider1.jpg" />
          <div style="color:white" class="text">Escucha música totalmente gratis</div>
        </div>
        
        <div class="mySlides fade">
          <img class="slider-images" src="../../../../assets/img/slider/slider2.jpg" />
          <div style="color:black"class="text">Comparte tu música con nosotros</div>
        </div>
        
        <div class="mySlides fade">
          <img class="slider-images" src="../../../../assets/img/slider/slider3.jpg" />
          <div style="color:#01f2fe"class="text">No se que poner ya aqui</div>
        </div>
    </header>
        <br/>
        
        <div style="text-align:center">
            <span class="dot" onClick={() => currentSlide(1)}></span> 
            <span class="dot" onClick={() => currentSlide(2)}></span> 
            <span class="dot" onClick={() => currentSlide(3)}></span>
        </div>
        </Fragment>
    )
}