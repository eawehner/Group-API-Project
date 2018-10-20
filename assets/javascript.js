    // MARVEL API
    
    var public_api = "0fe98b910165d9ca2dc0abf1bc48fca1";
    var private_api = "71f9d9779591c0d481b10e7d48b547b5c50e7935";
    var ts = Math.floor(Math.random() * Math.floor(1000));
    var hash = CryptoJS.MD5(`${ts}${private_api}${public_api}`);
    var queryURL = `http://gateway.marvel.com/v1/public/comics?apikey=${public_api}&hash=${hash}&ts=${ts}`

    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
    console.log(queryURL);

    console.log(response);
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
