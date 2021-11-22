// Grab the input


document.querySelector(".js-go").addEventListener('click', function(){
   var input = document.querySelector("input").value;
    // console.log(input);
    pushToDom(input);
});


document.querySelector(".js-userinput").addEventListener('keyup', function(e){
    
    // alert("test");
    console.log(e);
   var input = document.querySelector("input").value;
    // console.log(input);

    if(e.which===13) {
        pushToDom(input);
    }
});

// Do the data stuff with the API

var url = "http://api.giphy.com/v1/gifs/search?q=brooklyn+99&api_key=5WHGVBiL6dgD2R7ebfAOkMC0nE08dlk6"

// Ajax request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener( 'load', function(e) {
    var data = e.target.response;
    // console.log(data);
    pushToDom(data);
})

// Show me the GIFs
function pushToDom(input) {
    var response = JSON.parse(input);
    
    var imageURL = response.data[5].images.fixed_height.url;
    console.log(imageURL);

    var container = document.querySelector(".js-container");
    container.innerHTML = "<img src=\"" + imageURL + "\">";
}