var express = require('express');
var mongoskin = require('mongoskin');

var db = mongoskin.db('mongodb://198.199.113.194/bigdata', {safe:true})
var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
})

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;


//Most popular reddits from http://redditlist.com/sfw
sr = ['funny', 'pics', 'AskReddit','todayilearned','worldnews','science','IAmI','videos','gaming','movies','Music','aww','technology',
	'bestof','WTF','AdviceAnimals','news','gifs','askscience','explainlikeimfive','EarthPort','books','television','politics','LifeProTips',
	'sports','atheism',	'mildlyinteresting','DIY','Fitness','food','space','Jokes','Showerthoughts','photoshopbattles','tifu','GetMotivated','nottheonion',
	'InternetIsBeautiful','history','dataisbeautiful','Futurology','gadgets','listentothis','nosleep','Documentaries','personalfinance',
	'philosophy','creepy','Art']

var out = [];

var perRedditLimit = 1;

function run(callback){
	for (var i = 0; i < sr.length-1 ; i++){
		MongoClient.connect('mongodb://127.0.0.1/reddit', function (err, db) {
		    if (err) {
		        throw err;
		    } else {
		        //console.log("successfully connected to the database");
			    var collection = db.collection('all');
			    var options = {
			    "limit": perRedditLimit//,
			    //"skip": 10,
				}

			    var cursor = collection.find({"subreddit":sr[i]}, options).toArray(function(err, res){
			    	if (err) {
			    		throw err;
			    	}
			    	else{
			    		//console.log(res);
			    		console.log("appending");
			    		out.push(res);
			    	}

			    	db.close();
			    });
			}
		});
		
	}
	callback(out);
}

run(function(out) { console.log(out);})

app.listen(3000);
console.log('app is listening at localhost:3000');
