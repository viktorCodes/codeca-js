// CREATE, RETRIEVE AND ADD INFORMATION ABT FAV SPORTS TEAM



const team = {
//POPULATING DATA
    _players:[
        {firstName: 'Mohammed', lastName: 'Salah', age: 30},
        {firstName: 'Virgil', lastName: 'Van Dijk', age: 31},
        {firstName: 'Thiago', lastName: 'Alcantara', age: 32 }
    ],
    _games: [
        {opponent: 'Manchester City', teamPoints: 1, opponentPoints: 1},
        {opponent: 'Manchester United', teamPoints: 3, opponentPoints: 0 },
        {opponent: 'Everton', teamPoints: 3, opponentPoints: 0  }
    ],

    //GETTING DATA

    get players(){
        return this._players;
    },

    get games(){
        return this._games;
    },

    //ADDING DATA

    addPlayer (newFirstName, newLastName, newAge){

        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age:  newAge
        };
        this.players.push(player);

    },

    addGame (newOpponent, newteamPoints, newOpponentPoints){
        let game = {
            opponent: newOpponent,
            teamPoints: newteamPoints,
            opponentPoints: newOpponentPoints
        };
        this.games.push(game);
    }
};

team.addPlayer('Alison', 'Becker', 29);
console.log(team.players)