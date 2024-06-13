window.addEventListener("load",setup);

async function setup(){
		songpaths = (await rawData("songpaths.txt")).split("\n");
		caption = document.getElementById("songdata");
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
	songdata.textContent = songpaths[path*2];
	player.src = songpaths[path*2+1];
	if (player.style.display == "none") player.style.display = "inline-block";
}