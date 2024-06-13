window.addEventListener("load",setup);

async function setup(){
		songpaths = (await rawData("songpaths.txt")).split("\r\n");
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
	player.src = path;
	if (player.style.display == "none") player.style.display = "block";
}