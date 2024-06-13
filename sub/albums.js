window.addEventListener("load",setup);

async function setup(){
	songdata = [];
	parseData("songpaths.tsv");
	library = document.getElementById("covers");
	band = document.getElementById("songartist");
	song = document.getElementById("songtitle");
	player = document.getElementById("player");
	library.innerHTML = buildCovers();
	console.log(songdata);
	albums = document.getElementsByClassName('cover');
	console.log(albums);
}

function parseData(filepath){
	let tempdata = (await rawData(filepath)).split("\n");
	for (let l = 0; l < tempdata.length; l++){
		songdata.push(tempdata[l].split("\t"));
	}
}

function buildCovers(){
	let songs = [];
	let num = 0;
	for (album of songdata){
		songs.push(`<li id="${album[0]}">
		<img class="cover" src="../media/${album[3]}" alt="${album[0]} - ${album[3]} album cover" onclick="setSong(${num})">
		<album ${(album.length < 7) ? 'class="normal"' : ('class="long" title="' + album[6] + '"')}>${album[1]}</album><br><artist>${album[0]}</artist><br>
		[<a href="${album[5]}" target="_blank">link</a>]
	</li>`);
	num++;
	}
	return songs.join("");
}

async function rawData(fileIn = ""){
	return await fetch(fileIn)
	.then(response => {
		return response.text();
	})
}

function setSong(path){
	band.textContent = songdata[path][0] + " - ";
	song.textContent = songdata[path][2];
	player.src = `../media/${songdata[path][4]}`;
	if (player.style.display == "none") player.style.display = "inline-block";
}