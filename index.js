var image = $("#changing-img");
var images = ["images/parents.JPG", "images/basketball.JPG", "images/dcunited.JPG", "images/libela.JPG", "images/georgetown.JPG"];

console.log("SDFs");

let counter = 1;
const switchBack = (img) => {
    image.fadeOut(function() {
        document.getElementById("changing-img").src = images[(counter % images.length)];
        image.fadeIn();
        counter++;
    });
}
setInterval(function() {
    switchBack(image);
}, 4000);
