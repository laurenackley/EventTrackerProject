console.log('script js loaded');

window.addEventListener('load', function(evt) {
	init();
});

function init() {
	loadGames();
}

function loadGames() {
	//AJAX 
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/games');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let gameList = JSON.parse(xhr.responseText);
				console.log(gameList);
				displayGames(gameList);
			}
			else {
				//TODO - display an error somehwere ?
			}
		}
	};
	xhr.send();
}

function displayGames(allGames) {
	//DOM - show 
	for (var game of allGames) {

		let gameListDiv = document.getElementById('gameList');
		let h1 = document.createElement('h1');
		h1.textContent = game.name;
		gameListDiv.appendChild(h1);
		let blockquote = document.createElement('blockquote');
		blockquote.textContent = game.description;
		gameListDiv.appendChild(blockquote);
	}

}

















