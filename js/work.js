var work_url = "../data/work.json";

fetch(work_url).then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);

        var i;
        var keyName = document.title;
        console.log(keyName);

        for (i = 0; i < data.length; i++) {
            if (keyName == `${data[i].artist}`) {

                var newElement = document.createElement('div');
                newElement.setAttribute("id", "each-artist");

                var file = `${data[i].file}`;

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
                    document
                        .getElementById("artist-list-container")
                        .appendChild(newElement);
                } else {
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

                    document
                        .getElementById("artist-list-container")
                        .appendChild(newElement);
                }

            }

        }

    })