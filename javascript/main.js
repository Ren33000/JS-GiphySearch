// Grab the input


document.querySelector(".js-go").addEventListener('click', function(){
   var input = document.querySelector("input").value;
    console.log(input);
    pushToDom(input);
});

// Do the data stuff with the API

// Show me the GIFs
function pushToDom(input) {
    var container = document.querySelector(".js-container");
    container.innerHTML = input;
}