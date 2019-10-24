let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
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
        .InfoWindow({ content: contentString });

    var marker = new google
        .maps
        .Marker({ position: uluru, map: map, title: 'ANU graudate show' });
    marker.addListener('click', function() {
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

var thumbail = "../images/thumbnails";

function changeValue() {
    var value = document
        .getElementById('chooseDegree')
        .options[
            document
            .getElementById('chooseDegree')
            .selectedIndex
        ]
        .text;
    console.log(value);

    return value;
    // document.getElementById("degreeShow").innerHTML = value;
}

function sendOption() {
    var value = document
        .getElementById('chooseDegree')
        .options[
            document
            .getElementById('chooseDegree')
            .selectedIndex
        ]
        .text;
    console.log(value);

    return value;
}

function validateImage(url) {
    if (url == "") {
        url = "NoImageFound.jpg";
        return url;
    } else {
        return url;
    }

}

function goToTop() {
    var location = document.getElementById("artist-list-container").firstElementChild.id;
    window.location.href = `#${location}`;
}

function goToBottom() {
    window.location.href = "#map";
}

fetch(artist_url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {

        console.log(data);
        console.log(data.length);

        var options;

        var i;
        const saveOptions = [];
        for (var i = 0; i < data.length; i++) {

            saveOptions.push(`${data[i].workshop}`);

        }

        var optionSet = new Set(saveOptions);

        var iterator = optionSet.values();
        for (let elements of iterator) {
            options += `<option value=${elements}>${elements}</option>`
        }

        document
            .getElementById('chooseDegree')
            .innerHTML = options;

        var returnedValue = sendOption();

        console.log("------------\n" + returnedValue);

        for (var i = 0; i < data.length; i++) {
            var newElement = document.createElement('div');
            newElement.setAttribute("id", "each-artist");

            if (document.getElementById('chooseDegree').options[
                    document
                    .getElementById('chooseDegree')
                    .selectedIndex
                ].text == `${data[i].workshop}`) {
                console.log("get");
                newElement.innerHTML = `<div class= "artist-design"style="display: 
                inline-block; border: 10px solid pink;
                border-image-source: url(../images/border.png); 
                border-image-slice: 20 22;
                border-image-repeat: round; 
                width: 300px;
                height: 200px; 
                background-image: url(../images/thumbnails/${validateImage(data[i].Thumbnail)
                    .split(' ')
                    .join('%20')}); 
                background-size: auto 100%; 
                background-position: center center; 
                background-repeat: no-repeat;
                margin: 0"></div>` +
                    `<h1 class="artist-name">${data[i].First + ' ' + data[i].Last} </h1>` +
                    `<div class="artist-Degree-Container">` +
                    `<i class="fa fa-university" aria-hidden="true"></i>` +
                    `<div class="artist-Degree">${data[i].degree}</div>` +
                    '</div>' +
                    `<div class="artist-Workshop">${data[i].workshop}</div>` +
                    `<div class="artist-Social-Container">` +
                    `<div><a href=${data[i].Website}><i class="fa fa-globe" aria-hidden="true"></i></a></div>` +
                    `<div><a href=${data[i].Social}><i class="fa fa-instagram" aria-hidden="true"></i></a></div>` +
                    `</div>`;
                document
                    .getElementById("artist-list-container")
                    .appendChild(newElement);
            } else {
                console.log("this is returnedValue: " + `${data[i].degree}`);
            }
        }

        document
            .getElementById("sendValue")
            .addEventListener("click", function() {

                document
                    .getElementById("artist-list-container")
                    .innerHTML = "";

                for (var i = 0; i < data.length; i++) {
                    var newElement = document.createElement('div');
                    newElement.setAttribute("id", "each-artist");

                    var selectedValue = document
                        .getElementById('chooseDegree')
                        .options[
                            document
                            .getElementById('chooseDegree')
                            .selectedIndex
                        ]
                        .text;
                    console.log(selectedValue);

                    if (selectedValue === `${data[i].workshop}`) {
                        console.log("get");
                        newElement.innerHTML = `<div class= "artist-design"style="display: inline-block; 
                        border: 10px solid pink; 
                        border-image-source: url(../images/border.png); 
                        border-image-slice: 20 22;
                        border-image-repeat: round; 
                        width: 300px;
                        height: 200px; 
                        background-image: url(../images/thumbnails/${validateImage(data[i].Thumbnail)
                            .split(' ')
                            .join('%20')}); 
                            background-size: auto 100%; 
                            background-position: center center; 
                            background-repeat: no-repeat; 
                            margin: 0"></div>` +
                            `<h1 class="artist-name">${data[i].First + ' ' + data[i].Last} </h1>` +
                            `<div class="artist-Degree-Container">` +
                            ` <i class="fa fa-university" aria-hidden="true"></i>` +
                            `<div class="artist-Degree">${data[i].degree}</div>` +
                            '</div>' +
                            `<div class="artist-Workshop">${data[i].workshop}</div>` +
                            `<div class="artist-Social-Container">` +
                            `<div><a href=${data[i].Website}><i class="fa fa-globe" aria-hidden="true"></i></a></div>` +
                            `<div><a href=${data[i].Social}><i class="fa fa-share-square-o" aria-hidden="true"></i></a></div>` +
                            `</div>`;
                        document
                            .getElementById("artist-list-container")
                            .appendChild(newElement);

                    } else {
                        console.log("this is returnedValue: " + `${data[i].degree}`);
                    }

                }
            });

    });