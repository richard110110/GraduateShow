let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});


// var title = document.getElementsByTagName("title")[0].innerHTML;
// document.getElementById("artistName").innerHTML = title;
// console.log(title);

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// var url = `https://newsapi.org/v2/everything?` +
//           `q=Artwork&` +
//           `from=${date}` +
//           `sortBy=popularity&` +
//           `apiKey=9ec9cdd0f4bf4ca1b3e00913ee10f819`;

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(res){
//       console.log(res.articles);
//     })

function initMap() {
  var uluru = {
    lat: -35.280591,
    lng: 149.122572
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });

  var contentString = '<div class="iw-container">' +
    '<div class="iw-title">ANU School of Art & Design</div>' +
    '<div class="iw-content">' +

    '<span class="fa fa-map-marker" aria-hidden="true"> </span> <p>Address: 105 Childers St, Acton ACT 2601 </p>' +
    '<br>' +
    '<span class="fa fa-globe"" aria-hidden="true"> </span> <p>Website: </p><a href="soad.cass.anu.edu.au">soad.cass.anu.edu.au</a>' +

    '<br>' +
    '<span class="fa fa-phone"" aria-hidden="true"> </span> <p>Phone: (02) 6125 5810</p>' +

    '<br>' +
    '<span class="fa fa-star"" aria-hidden="true"> </span> <p>Rating: 4.7</p>' +

    '<br>' +
    '<span class="fa fa-clock-o"" aria-hidden="true"> </span> <p>opening hours:</p>' +
    '<br>' +
    '<p>weekdays: 2-4:30pm</p>' +
    '<br>' +
    '<p>weekends: closed</p>' +
    '</div>' +
    '</div>';


  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'ANU graudate show'
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
  infowindow.open(map, marker);

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  var transitLayer = new google.maps.TransitLayer();
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






//recursive method to check the width for the lacking hover effect on mobile view;







// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }