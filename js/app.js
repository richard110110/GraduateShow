let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav
        .classList
        .toggle('active');
});

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

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
        .InfoWindow({content: contentString});

    var marker = new google
        .maps
        .Marker({position: uluru, map: map, title: 'ANU graudate show'});
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);

    var trafficLayer = new google
        .maps
        .TrafficLayer();
    trafficLayer.setMap(map);

    var transitLayer = new google
        .maps
        .TransitLayer();
    transitLayer.setMap(map);
}

var artist_url = "../data/artist.json";
fetch(artist_url).then(function (res) {
    return res.json();
})
    .then(function (data) {
        console.log(data);

    });

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
    var dots = document.getElementById("demo");

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
            .replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

}