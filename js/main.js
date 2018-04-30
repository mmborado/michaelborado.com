$('.js-popup').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  fixedContentPos: true,
  mainClass: 'mfp-no-margins mfp-with-zoom',
  image: {
    verticalFit: true,
  },
  zoom: {
    enabled: true,
    duration: 300,
  },
});

$('.scroll-to').on('click', function scrollToElem(event) {
  var target = $($(this).attr('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});
