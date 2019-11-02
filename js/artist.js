/*--CHENXI GUO u6695264--*/

/*for artist.html functional */

/*make the navigation bar ollapsible*/

let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav
        .classList
        .toggle('active');
});

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
        .InfoWindow({
            content: contentString
        });

    var marker = new google
        .maps
        .Marker({
            position: uluru,
            map: map,
            title: 'ANU graudate show'
        });
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

/*In the artist json, some artist does not have a Thumbnail, if not have a thumbnail, return a NoImageFound file, if have, return the url image file */
function validateImage(url) {
    if (url == "") {
        url = "NoImageFound.jpg";
        return url;
    } else {
        return url;
    }
}

/*up arrow button to the first child of each-artist */
function goToTop() {
    var location = document
        .getElementById("artist-list-container")
        .firstElementChild
        .id;
    window.location.href = `#${location}`;
}

/*down arrow button to the last child of each-artist */
function goToBottom() {
    window.location.href = "#map";
}

/*artist json file is converted by the artist table in Artists and works listing (https://docs.google.com/spreadsheets/d/1n5SCUPYphbVtW1UQWtKaAd4VuKGz8NhboSQE_DdettA/edit#gid=18231182) */
var artist_url = "../data/artist.json";

fetch(artist_url).then(function(res) {
        return res.json();
    })
    .then(function(data) {

        var i;

        for (i = 0; i < data.length; i++) {

            /*initialize the container for each artist */
            var newElement = document.createElement('div');
            newElement.setAttribute("id", "each-artist");

            /*set the artist's thumbnauk, first,last name, degree, workshop, website and Social form the json file */
            newElement.innerHTML = `<div class="artist-image-container"><div class= "artist-image-show"style="
            background-image: url(../images/thumbnails/${validateImage(data[i].Thumbnail)
                .split(' ')
                .join('%20')})"; 
                ></div></div>` +
                `<div class="artist-info">` +
                `<h1 class="artist-name">${data[i].First + ' ' + data[i].Last} </h1>` +
                `<div class="artist-Degree-Container">` + `<i class="fa fa-university" aria-hidden="true"></i>` +
                `<div class="artist-Degree">${data[i].degree}</div>` +
                '</div>' +
                `<div class="artist-Workshop">${data[i].workshop}</div>` +
                `<div class="artist-Social-Container">` +
                `<div><a href=${data[i].Website}><i class="fa fa-globe" aria-hidden="true"></i></a></div>` +
                `<div><a href=${data[i].Social}><i class="fa fa-instagram" aria-hidden="true"></i></a></div>` +
                `</div>` +
                `</div>`;

            /*added all the each-artist elements to artist-list-container */
            document
                .getElementById("artist-list-container")
                .appendChild(newElement);
        }

    });