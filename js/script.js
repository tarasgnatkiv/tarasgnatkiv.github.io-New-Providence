// <!---------------- Start Developer Pavlo ---------------->

  function openSlideMenu() {
    document.getElementById('side-menu').style.width = '100%'
  }
    
  function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0'
  }

// <!---------------- End Developer Pavlo ---------------->



// <!---------------- Start Developer 2 ---------------->

// <!---------------- End Developer 2 ---------------->



// <!---------------- Start Developer 3 ---------------->
$(document).ready(function () {
    $('.custumersList').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        initialSlide: 1,
        asNavFor: ".reviewsList",
    });

    $('.reviewsList').slick({
        initialSlide: 1,
        arrows: false,
        draggable: false,
        swipe: false,
        asNavFor: ".custumersList",
    });
});
// <!---------------- End Developer 3 ---------------->



// <!---------------- Start Developer 4 ---------------->

// <!---------------- End Developer 4 ---------------->