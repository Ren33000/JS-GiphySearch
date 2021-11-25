// Grabbing the input
document.querySelector(".js-go").addEventListener('click', function(){
   var inputValue = document.querySelector('.js-userinput').value;
    // console.log(input);
    var userInput = getUserInput();
    searchGiphy(userInput);
    // pushToDom(input);
});


document.querySelector(".js-userinput").addEventListener('keyup', function(e){
    if(e.which===13) {
        var userInput = getUserInput();
        searchGiphy(userInput);
        // pushToDom(input);
    }
});

function getUserInput() {
    var inputValue = document.querySelector('.js-userinput').value;
    return inputValue;
}


// Do the data stuff with the API
function searchGiphy(input) {
    var url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=5WHGVBiL6dgD2R7ebfAOkMC0nE08dlk6` ;
    
    // Ajax request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url);
    GiphyAJAXCall.send();
    
    GiphyAJAXCall.addEventListener( 'load', function(e) {
        var data = e.target.response;
        // console.log(data);
        pushToDom(data);
    })
};


// Showing GIFs
function pushToDom(input) {
    var response = JSON.parse(input);
    var container = document.querySelector(".js-container");
    var result = document.querySelector(".results");

    clear(container);
    clear(result);
    
    
    var imageURLs = response.data;
    // console.log(imageURLs);

    imageURLs.forEach(function(image) {
        var src = image.images.fixed_height.url;
        result.innerHTML = src.length + " GIFs found "
        container.innerHTML+=  "<img src=\"" + src + "\" class= \"container-image\">";
    });

    function clear(item){
        item.innerHTML = "";
    }
}