/*--CHENXI GUO u6695264--*/

/*for each artist files in artists directory functional that list the artist's work */

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

/*work json file is converted by the works table in Artists and works listing (https://docs.google.com/spreadsheets/d/1n5SCUPYphbVtW1UQWtKaAd4VuKGz8NhboSQE_DdettA/edit#gid=18231182) */
var work_url = "../data/work.json";

fetch(work_url).then(function(res) {
        return res.json();
    })
    .then(function(data) {

        var i;
        /*set the title as the keyword for listing artist*/
        var keyName = document.title;

        for (i = 0; i < data.length; i++) {
            if (keyName == `${data[i].artist}`) {
                /*initialize the container for each artist */
                var newElement = document.createElement('div');
                newElement.setAttribute("id", "each-artist");

                var file = `${data[i].file}`;
                /*check the file type, image or video */
                /*if the file is image */
                if (file.includes("jpg")) {
                    newElement.innerHTML = `<div class="artist-image-container"><div class="artist-image-show" style="
                    background-image:url(../images/artist-images/${data[i].file});
                   ">
                    </div></div>` +
                        `<h1 class="artist-name">${data[i].title}</h1>` +
                        `<h1 class="artist-name">${data[i].artist}</h1>` +
                        `<div class="artist-Degree-Container">` +
                        `<i class="fa fa-calendar-o" aria-hidden="true"></i>` +
                        `<div class="work-Date">${data[i].date}</div>` +
                        '</div>' +
                        `<div class="work-dimension">${data[i].dimensions}</div>` +
                        `<div class="artist-Degree-Container">` +
                        `<i class="fa fa-medium" aria-hidden="true"></i>` +
                        `<div class="artist-Medium">${data[i].medium}</div>` +
                        '</div>' +
                        ``;
                    /*added all the each-artist elements to artist-list-container */
                    document
                        .getElementById("artist-list-container")
                        .appendChild(newElement);
                } else {
                    /*if the file is video return different style */
                    newElement.innerHTML = `<div class="artist-image-container"><div class="artist-video-show">` +
                        `<iframe  
                    width="300"
                    height="200"
                    frameborder = 0; 
                    src="${data[i].file}" allowfullscreen>` +
                        `</iframe>` +
                        `</div></div>` +
                        `<h1 class="artist-name">${data[i].title}</h1>` +
                        `<h1 class="artist-name">${data[i].artist}</h1>` +
                        `<div class="artist-Degree-Container">` +
                        `<i class="fa fa-calendar-o" aria-hidden="true"></i>` +
                        `<div class="artist-Degree">${data[i].date}</div>` +
                        '</div>' +
                        `<div class="work-dimension">${data[i].dimensions}</div>` +
                        `<div class="artist-Degree-Container">` +
                        `<i class="fa fa-medium" aria-hidden="true"></i>` +
                        `<div class="artist-Degree">${data[i].medium}</div>` +
                        '</div>';
                    /*added all the each-artist elements to artist-list-container */
                    document
                        .getElementById("artist-list-container")
                        .appendChild(newElement);
                }

            }

        }

    })