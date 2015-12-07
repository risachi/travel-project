/*var galleryImages = new Array()
galleryImages[0] = new Image()
galleryImages[0].src = "images/mtHoodLake.jpg"
galleryImages[1] = new Image()
galleryImages[1].src = "images/multnomah.jpg"
galleryImages[2] = new Image()
galleryImages[2].src = "images/haystack.jpg"
galleryImages[3] = new Image()
galleryImages[3].src = "images/portlandHill.jpg"
galleryImages[4] = new Image()
galleryImages[4].src = "images/portlandDusk.jpg"
galleryImages[5] = new Image()
galleryImages[5].src = "images/portlandHood.jpg"
galleryImages[6] = new Image()
galleryImages[6].src = "images/portlandTheater.jpg"
galleryImages[7] = new Image()
galleryImages[7].src = "images/timberline.jpg"
galleryImages[8] = new Image()
galleryImages[8].src = "images/whitestag.jpg"

//variable that will increment through the images
var next=0;

function slide()
{
 document.getElementById('images').src = galleryImages[next].src;
 if (next<2)
  next++;
 else
  next=0;
 //call function "slideit()" every 2.5 seconds
 setTimeout("slide()",2500);
}
slide();
*/
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
        slides.current = 0
      };
    }, 4000);//3.5 seconds between each image
};
