// require('dotenv').config();

var a= process.argv[2];
var b = process.argv[3]+"+"+ process.argv[4]+ "+" +process.argv[5];


//If else statements to get first item
if(a === "my-tweets"){

	//Access keys through .bash_profile
	var twitter = require("twitter");
	var client = new twitter({
	  consumer_key: process.env.TWITTER_CONSUMER_KEY,
	  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	});
	var params = {
		q: b,
		count: 15

	}	

	client.get('search/tweets',params, function(error, data, response) {
	  if(error) throw error;

	  var tweets= data.statuses;
	  for ( var i=0; i< tweets.length;i++){
	  	console.log("--------------------------")
	  	console.log(JSON.stringify(tweets[i].text));
	  }
	  // console.log(response);   
	});
}
else if(a === "spotify-this-song"){
		var Spotify = require('node-spotify-api');
	 
		var spotify = new Spotify({
		  id: process.env.SPOTIFY_ID,
		  secret: process.env.SPOTIFY_SECRET
		});


		spotify
		  .search({ type: 'track', query: b })
		  .then(function(response) {
		    console.log(response);
		  })
		  .catch(function(err) {
		    console.log(err);
	  	});


	console.log("you typed in spotify");
}
	
else if(a === "movie-this"){
		var request = require("request");

		b = process.argv[2]+"+"+ process.argv[3]+ "+" +process.argv[4];
		var movieName = b;
		// ...


		// Then run a request to the OMDB API with the movie specified
		var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
		request(queryUrl, function(error, response, body){

			if(!error && response.statusCode=== 200){
				console.log("release Year: " + JSON.parse(body).Year);
			}
		})
}

else if(a === "do-what-it-says"){
	var fs = require("fs");

	fs.readfile("random.txt","UTF-8",function(err, data) {
	    if (err) {
	      return console.log(err);
	    }
	// data		
	var gatheredData=data;
	var Spotify = require('node-spotify-api');
	 
		var spotify = new Spotify({
		  id: process.env.SPOTIFY_ID,
		  secret: process.env.SPOTIFY_SECRET
		});


		spotify
		  .search({ type: 'track', query: gatheredData })
		  .then(function(response) {
		    console.log(response);
		  })
		  .catch(function(err) {
		    console.log(err);
	  	});
	});

else{
		console.log("Error. Error")
}