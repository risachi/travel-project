window.onload = function () {

    var slides = [
        "images/mtHoodLake.jpg",
        "images/multnomah.jpg",
        "images/haystack.jpg",
        "images/portlandHill.jpg",
        "images/portlandDusk.jpg",
        "images/portlandHood.jpg",
        "images/portlandTheater.jpg",
        "images/timberline.jpg",
        "images/whitestag.jpg"
    ];

    slides.current = 0;

    var img = document.getElementById('gallery');

    setInterval(function() {
        img.src = slides[slides.current++];
        if (slides.current === slides.length) {
        slides.current = 0;
      }
    }, 4000);//3.5 seconds between each image
};
