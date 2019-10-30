/*--CHENXI GUO u6695264--*/

/*make the index page functional and header functional in each page */

/*make the navigation bar ollapsible*/

let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav
        .classList
        .toggle('active');
});

/*make the slider show can display the image to the screen and change to previous or next image*/

/*referred from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    console.log(slides.length);
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i]
            .className
            .replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";

}
/*end of referred from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp*/


/*set the ANU school of Art Design coordinate to the marker on the google map and style the marker that includes the building's information*/
function initMap() {
    var uluru = {
        lat: -35.280591,
        lng: 149.122572
    };
    var map = new google
        .maps
        .Map(document.getElementById('map'), {
            zoom: 16,
            center: uluru
        });

    var contentString = '<div class="iw-container"><div class="iw-title">ANU School of Art & Design</div>' +
        '<div class="iw-content"><span class="fa fa-map-marker" aria-hidden="true"> </spa' +
        'n> <p>Address: 105 Childers St, Acton ACT 2601 </p><br><span class="fa fa-globe"' +
        '" aria-hidden="true"> </span> <p>Website: </p><a href="soad.cass.anu.edu.au">soa' +
        'd.cass.anu.edu.au</a><br><span class="fa fa-phone"" aria-hidden="true"> </span> ' +
        '<p>Phone: (02) 6125 5810</p><br><span class="fa fa-star"" aria-hidden="true"> </' +
        'span> <p>Rating: 4.7</p><br><span class="fa fa-clock-o"" aria-hidden="true"> </s' +
        'pan> <p>opening hours:</p><br><p>weekdays: 2-4:30pm</p><br><p>weekends: closed</' +
        'p></div></div>';

    var infowindow = new google
        .maps
        .InfoWindow({ content: contentString });

    var marker = new google
        .maps
        .Marker({ position: uluru, map: map, title: 'ANU graudate show' });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
    /*show the traffic and transit situation around the location*/

    var trafficLayer = new google
        .maps
        .TrafficLayer();
    trafficLayer.setMap(map);

    var transitLayer = new google
        .maps
        .TransitLayer();
    transitLayer.setMap(map);
}