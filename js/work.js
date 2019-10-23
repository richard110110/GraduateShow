var work_url = "../data/work.json";

fetch(work_url).then(function (res) { 
    return res.json();
 })
 .then(function (data) { 
    console.log(data);

  })
