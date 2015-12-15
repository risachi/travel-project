window.onload = function () {

    var slides = [
        "pdximages/mtHoodLake.jpg",
        "pdximages/multnomah.jpg",
        "pdximages/haystack.jpg",
        "pdximages/portlandHill.jpg",
        "pdximages/portlandDusk.jpg",
        "pdximages/portlandHood.jpg",
        "pdximages/portlandTheater.jpg",
        "pdximages/timberline.jpg",
        "pdximages/whitestag.jpg"
    ];

    slides.current = 0;

    var img = document.getElementById('gallery');
    if (img) {
    setInterval(function() {
        img.src = slides[slides.current++];
        if (slides.current === slides.length) {
        slides.current = 0;
      }
    }, 4000);//3.5 seconds between each image
    }
};
