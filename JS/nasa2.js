let objeto
const button =$("#submit")
const titulo =$("#titulo")
const text = $("#text");
const midia = $("#midia");

button.on("click", function (event) {
    event.preventDefault();
    request();
});

function request(data) {
  $(`#data`).val();
  
  $.ajax({
    
      url: `https://api.nasa.gov/planetary/apod?api_key=OUnvSUo7Ybdy46qlOZF2Zdw5aWdwfazHBTLI6Aun&date=`+ $(`#data`).val(),
      
      success: function (result) {
        
          console.log(result);
          objeto = result;
          titulo.html(`${objeto.title}`);
          text.html(`${objeto.explanation}`);
         
          if (objeto.media_type != "video") {
            midia.html(`<img width = '600' heigth = '600' id="foto" src="${objeto.url}" alt=""></img>`);
    } else {
        midia.html(`<iframe id="video" src="${objeto.url}" alt=""></iframe>`);
    
  }
},
});
}