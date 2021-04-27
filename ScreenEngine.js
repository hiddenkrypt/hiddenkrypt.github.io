/** ScreenEngine.js **
 * Basic code for making the Loading Screens work. Selects a screen at random
 * from the loadingScreenDirectory defined in Directory.js. Loads the screen
 * image in the background, calls the trigger callback. Also automatically
 * adjusts the size of displayed text to one determined by the width of the
 * screen.
**/

function ScreenEngineBuilder(){
	console.log("build screen engine");
	function loadScreenIndex( index ){	
		if (!index){
			index = Math.floor(Math.random() * loadingScreenDirectory.length);
			console.log(`load screen: RNG{${index}}`);
		} else {
			console.log(`load screen: ${index}`);
		}
		var selectedScreen = loadingScreenDirectory[index];
		ScreenEngine.setBackground('url("'+selectedScreen.url+'")');
		if(typeof selectedScreen.trigger === 'function'){
			selectedScreen.trigger();
		}
	}
	function loadScreenEngine(){
		console.log("screen engine init");
		loadScreenIndex();
		ScreenEngine.setFont();
		let testRig = TestRig();
		testRig.init();
	}
	function setBackground(url){
		document.body.style.backgroundImage = url;
		let sfx = document.getElementById("sfx");
		let se = document.getElementById("SpecialEvent");
		if( se ){ se.remove(); }
		if( sfx ){ sfx.remove(); }
		let tag = taglineDirectory[Math.floor(Math.random() * taglineDirectory.length)];
		document.getElementById("tagline").innerHTML = tag;
	}
	function setFont(){
	    var fpc = window.innerWidth / 250;
	    document.body.style.fontSize = fpc+'px';
	}
	return {
		load: loadScreenEngine,
		loadScreenIndex: loadScreenIndex,
		setFont: setFont,
		setBackground: setBackground
	};
}

var ScreenEngine = ScreenEngineBuilder();
window.onresize = ScreenEngine.setFont;
window.onload = ScreenEngine.load;
function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
	document.getElementById('mode').innerHTML = gamemode;
	document.getElementById('map').innerHTML = mapname;
}