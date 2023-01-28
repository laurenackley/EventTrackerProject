let gameList;
let updateGame;

console.log("script js loaded");

window.addEventListener("load", function(evt) {
	init();
});

function init() {
	loadGames();

	document.createGame.create.addEventListener("click", function(event) {
		event.preventDefault();
		let passedName = document.createGame.name.value;
		let passedDescription = document.createGame.description.value;
		let passedPlayerMin = document.createGame.playerMin.value;
		let passedPlayerMax = document.createGame.playerMax.value;
		if (
			passedName !== "" &&
			passedDescription !== "" &&
			!isNaN(passedPlayerMin) &&
			!isNaN(passedPlayerMax)
		) {
			let newGame = {
				name: passedName,
				description: passedDescription,
				playerMin: passedPlayerMin,
				playerMax: passedPlayerMax,
			};
			createGame(newGame);
		}
	});
}

function loadGames() {
	//AJAX
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/games");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				gameList = JSON.parse(xhr.responseText);
				//console.log(gameList);
				displayGames(gameList);
			} else {
				//TODO - display an error somehwere ?
			}
		}
	};
	xhr.send();
}

function deleteGame(gameId) {
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", "api/games/" + gameId, true);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 204) {
				//gameList = JSON.parse(xhr.responseText);
				//	console.log("The games are: "+ gameList);
				loadGames();
				// displayGameInfo();
			} else {
				//error
			}
		}
	};
	xhr.send();
}

function createGame(game) {
	console.log(game);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "api/games", true);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let data = JSON.parse(xhr.responseText);
				loadGames();
				displayGameInfo(data);
			} else if (xhr.status === 404) {
				displayError("Game not created");
			}
		}
	};
	let userObjectJson = JSON.stringify(game);
	xhr.send(userObjectJson);
}

function addUpdatedGame(gameId) {
	let passedName = document.updateGame.name.value;
	let passedDescription = document.updateGame.description.value;
	let passedPlayerMin = document.updateGame.playerMin.value;
	let passedPlayerMax = document.updateGame.playerMax.value;
	let updateGame = {
		name: passedName,
		description: passedDescription,
		playerMin: passedPlayerMin,
		playerMax: passedPlayerMax,
	};

	document.updateGame.update.addEventListener('click', function() {
		editGame(gameId, updateGame);
	})
}

function editGame(gameId, updateGame) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/games/' + gameId, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				data = JSON.parse(xhr.responseText);
				loadGames();
				displayGameInfo(data);
			}

		}
	}
	let userObjectJson = JSON.stringify(updateGame);
	xhr.send(userObjectJson);
}



function displayGames(allGames) {
	//DOM - show
	let gameNameDiv = document.getElementById("gameName");
	gameNameDiv.textContent = '';
	for (let i = 0; i < allGames.length; i++) {
		let name = document.createElement("h1");
		name.id = i;
		name.addEventListener("click", function(e) {
			//let id = e.target.id;
			displayGameInfo(allGames[i]);
		});
		name.textContent = allGames[i].name;
		gameNameDiv.appendChild(name);
	}
}
function displayGameInfo(game) {
	// let id = game.target.id;
	if (typeof game !== 'undefined') {
		gameList = document.getElementById("gameList");
		gameList.style.display = "inline";
		let name = document.getElementById("name");
		name.textContent = game.name;
		let description = document.getElementById("description");
		description.textContent = game.description;
		let playerMin = document.getElementById("playerMin");
		playerMin.textContent = "Player Minimum: " + game.playerMin;
		let playerMax = document.getElementById("playerMax");
		playerMax.textContent = "Player Maximum: " + game.playerMax;
		//event listener
		document.delete.addEventListener('click', function(e) {
			let id = game.id;
			console.log('The id is: ' + id);
			deleteGame(id);
			gameList.style.display = "none";
		});
		document.update.addEventListener('click', function(e) {
			e.preventDefault();
			updateGame = document.getElementById('updateGameDiv')
			updateGame.style.display = "inline";
			addUpdatedGame(game);
		})
	}
}