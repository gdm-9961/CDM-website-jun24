window.addEventListener("load",setup);

async function setup(){
		songpaths = (await rawData("songpaths.txt")).split("\n");
		band = document.getElementById("songartist");
		song = document.getElementById("songtitle");
		player = document.getElementById("player");
		console.log(songpaths);
		albums = document.getElementsByClassName('cover');
		console.log(albums);
}

async function rawData(fileIn = ""){
	return await fetch(fileIn)
	.then(response => {
		return response.text();
	})
}

function setSong(path){
	console.log(path*2);
	let idText = songpaths[path*2].split("-");
	band.textContent = idText[0];
	song.textContent = idText[1];
	player.src = songpaths[path*2+1];
	if (player.style.display == "none") player.style.display = "inline-block";
}