
  //credit: http://stackoverflow.com/a/1527820/52160
  function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // var id = getRandomInt(1009150, 1011100);
  // /${id} in url
function aMarvel() {
  var offset = getRandomInt(1, 1471);

  var public_api = "0fe98b910165d9ca2dc0abf1bc48fca1";
  var private_api = "71f9d9779591c0d481b10e7d48b547b5c50e7935";
  var ts = Math.floor(Math.random() * Math.floor(1000));
  var hash = CryptoJS.MD5(`${ts}${private_api}${public_api}`);
  var queryURL = `http://gateway.marvel.com/v1/public/characters?limit=20&offset=${offset}&apikey=${public_api}&hash=${hash}&ts=${ts}`

  $.ajax({
      url: queryURL,
      method: "GET"
  })
  .then(function(response) {
      var i = getRandomInt(1, 20);

      console.log(queryURL);

      console.log(response.data.results[i]);

      var marvelPic = response.data.results[i].thumbnail.path + "." + response.data.results[i].thumbnail.extension;
      $("#marvelImg").attr("src", marvelPic);

      var marvelName = response.data.results[i].name;

      $("#marvelName").text(marvelName);
      $("#marvelBtn").attr("name", marvelName);
  })
}; 

  //TRYING TO PULL FROM POKE API

function aPoke() {
  var pokeURL = 'https://pokeapi.co/api/v2/pokemon-form/' + Math.floor(Math.random() * Math.floor(807));

  $.ajax ({
      url: pokeURL,
      method: "GET"
  })
  .then(function(response) {
      console.log(pokeURL);
      console.log(response);

      $("#pokeImg").attr("src", response.sprites.front_default);

      var pokemon = response.name;

      var pokeSlice = pokemon.slice(1);

      var pokeName = pokemon.charAt(0).toUpperCase() + pokeSlice;

      $("#pokeName").text(pokeName);
      $("#pokeBtn").attr("name", pokeName);
  })
// END API section
};

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

// var pokeChar = $("#pokeName").val().trim();
var pokeClick = 0;
// var marvelChar = $("#marvelName").val().trim();
var marvelClick = 0;

//   Pokemon Vote
$(document).on("click", "#pokeBtn", function() {
  // event.preventDefault();
  var pokeChar = $(this).attr("name");
//   var marvelChar = $("#marvelBtn").attr("name");

  console.log(pokeChar);
  pokeClick++;
  database.ref().push({
      pokeChar: pokeChar,
      pokeClick: pokeClick,
    //   marvelChar: marvelChar,
      marvelClick: marvelClick,
    });
    aPoke();
    aMarvel();
}); // pokeBtn end

//   Marvel Vote
$(document).on("click", "#marvelBtn", function() {
  // event.preventDefault();
//   var pokeChar = $("#pokeBtn").attr("name");
  var marvelChar = $(this).attr("name");

  console.log(marvelChar);
  marvelClick++;
  database.ref().push({
    //   pokeChar: pokeChar,
      pokeClick: pokeClick,
      marvelChar: marvelChar,
      marvelClick: marvelClick,
    });
    aPoke();
    aMarvel();
}); // marvelBtn end

aPoke();
aMarvel();

database.ref().on("child_added", function(childSnapshot) {
    var snap = childSnapshot.val();
    var pName = snap.pokeChar;
    var pResult = snap.pokeClick;
    var mName = snap.marvelChar;
    var mResult = snap.marvelClick;
    $("#rankingTable").append("<tr><td>" + pName + "</td><td>" + pResult + "</td><td>" + "VS" + "</td><td>" + mName + "</td><td>" + mResult + "</td></tr>");
});