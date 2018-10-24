// APIs
//credit: http://stackoverflow.com/a/1527820/52160
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var id = getRandomInt(1009144, 1011144);

var public_api = "0fe98b910165d9ca2dc0abf1bc48fca1";
var private_api = "71f9d9779591c0d481b10e7d48b547b5c50e7935";
var ts = Math.floor(Math.random() * Math.floor(1000));
var hash = CryptoJS.MD5(`${ts}${private_api}${public_api}`);
var queryURL = `http://gateway.marvel.com/v1/public/characters/${id}?limit=1&apikey=${public_api}&hash=${hash}&ts=${ts}`

$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {
    console.log(queryURL);

    console.log(response.data.results);
}) 

//TRYING TO PULL FROM POKE API
var pokeURL = 'https://pokeapi.co/api/v2/pokemon-form/' + Math.floor(Math.random() * Math.floor(807));

$.ajax ({
    url: pokeURL,
    method: "GET"
})
.then(function(response) {
    console.log(pokeURL);
    console.log(response);
})
// END API section


// Stella's Firebase
var config = {
    apiKey: "AIzaSyDSPxVcas0TLy98pIiO8DG_SvfUHWWwmt0",
    authDomain: "group-api-project-1b395.firebaseapp.com",
    databaseURL: "https://group-api-project-1b395.firebaseio.com",
    projectId: "group-api-project-1b395",
    storageBucket: "group-api-project-1b395.appspot.com",
    messagingSenderId: "176612221225"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var pokeChar = "";
  var pokeClick = 0;
  var marvelChar = "";
  var marvelClick = 0;

//   Pokemon Vote
  $("#pokeBtn").on("click", function() {
    // event.preventDefault();
    pokeClick++;
    database.ref().push({
        pokeChar: pokeChar,
        pokeClick: pokeClick,
        marvelChar: marvelChar,
        marvelClick: marvelClick,
      });
  }); // pokeBtn end

//   Marvel Vote
  $("#marvelBtn").on("click", function() {
    // event.preventDefault();
    marvelClick++;
    database.ref().push({
        pokeChar: pokeChar,
        pokeClick: pokeClick,
        marvelChar: marvelChar,
        marvelClick: marvelClick,
      });
  }); // marvelBtn end

// Reference from Stella's HW for pulling images from AJAX for the GUI
  // .then(function(response) {
    // storing the data from the AJAX request in the results variable
    //var results = response.data;
    //console.log(response);
    // Looping through each result item
    //for (var i = 0; i < results.length; i++) {
      //var gifDiv = $("<div>");
      // Creating a paragraph tag with the result item's rating
      //var p = $("<p>").text("Rating: " + results[i].rating.toUpperCase());
      //var t = $("<p>").text("Title: " + results[i].title.toUpperCase());
      // Creating and storing an image tag
      //var topicGif = $("<img>");
      // Setting the src attribute of the image to a property pulled off the result item
      //topicGif.attr("src", results[i].images.fixed_height_still.url);
      //topicGif.attr("data-still",results[i].images.fixed_height_still.url); // still image
      //topicGif.attr("data-animate",results[i].images.fixed_height.url); // animated image
      //topicGif.attr("data-state", "still");   
      // Appending the paragraph and image tag to the gifDiv
      //gifDiv.append(topicGif);
      //gifDiv.append(p, t);
      // Prependng the gifDiv to the HTML page in the "#gifs-appear-here" div
      //$("#gifDisplay").prepend(gifDiv);
    //}
  //});