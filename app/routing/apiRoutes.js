//Data
const friendData = require("../data/friends");


//Routing
module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", (req, res) => {
        friendData.push(req.body);
        res.json(findMyFriend(friendData));
    });
};

function findMyFriend(data) {
    let friendScoreArray = [];

    //get the scores of the user to compare to the rest of the data
    let userScores = data[data.length - 1].scores;

    //gets all of the scores in the API to compare against, only loop through what existed before new user
    for(let i = 0; i < data.length - 1; i++) {
        let scores = data[i].scores;
        let difference = 0;
        // console.log(data);

        //returns the absolute value of each calculation, let's call this the "compatability index"
        for(let j = 0; j < scores.length; j++) {
            difference += Math.abs(parseFloat(userScores[j]) - parseFloat(scores[j]));
        }
        //pushes each score for every friend pair to the score array
        friendScoreArray.push(difference);
    }

    //finds the index of the minimum value in the array (comparing it to null)..apply is used to apply the minimum math function to the array
    let matchFriend = friendScoreArray.indexOf(Math.min.apply(null, friendScoreArray));

    return {
        name: data[matchFriend].name,
        photo: data[matchFriend].photo 
    }
}
