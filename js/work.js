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
                    newElement.innerHTML = `<div style="display: inline-block; 
                    border: 10px solid pink; 
                    border-image-source: url(../images/border.png); 
                    border-image-slice: 20 22; 
                    border-image-repeat: round; 
                    width:300px; 
                    height:200px; 
                    background-image:url(../images/artist-images/${data[i].file});
                    background-size: auto 100%; 
                    background-position: center center; 
                    background-repeat: no-repeat; 
                    margin:0 ">
                    </div>` +
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
                    newElement.innerHTML = `<div style=" background: var(--navbar-background-image);  
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);` +
                        `border: 10px solid pink; 
                    height: 200px; 
                    width: 300px; 
                    border-image-source: url(../images/border.png); 
                    border-image-slice: 20 22;
                    border-image-repeat: round;">` +
                        `<iframe style=" border-image-source: url(../images/border.png); 
                    border-image-slice: 20 22; 
                    border-image-repeat: round;" 
                    width="300"
                    height="200"
                    frameborder = 0; 
                    src="${data[i].file}" allowfullscreen>` +
                        `</iframe>` +
                        `</div>` +
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