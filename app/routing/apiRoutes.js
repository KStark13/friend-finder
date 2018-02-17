//require friends data file
var friends = require('../data/friends.js');



//routes
module.exports = function(app){
	//API get requests
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});
	//API POST requests
	app.post('/api/friends', function(req, res){
		//object to hold the best match
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		//use the result of the users survey POST and parse
		var userData = req.body;
		var userName = userData.name;
		var userPhoto = userData.photo;
		var userScores = userData.scores;

		var totalDifference = 0;

		//loop through all the friend possibilities in the database
		for(var i = 0; i < friends.length; i++) {
			console.log(friends[i].name);
			totalDifference = 0;

			//loop through all the scores for each friend
			for(var j = 0; j < friends[i].scores[j]; j++) {

				//calculate the different between the scores and sum into the totalDifference
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
				
				//if sum of difference is less than difference of current best match
				if (totalDifference <= bastMatch.friendDifference) {

					//reset the bestMatch to be the new friend
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		}
		//save users data to the database
		friends.push(userData);

		//return a JSON with users bestMatch.  
		res.json(bestMatch);
	});

}

