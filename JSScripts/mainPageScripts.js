window.onload = function(e){ 
	var savedPlayer = localStorage.getItem("savedPlayer");
	var savedLevel = localStorage.getItem("savedLevel");
	var savedNumber = localStorage.getItem("savedNumber");
	if(savedPlayer != null || savedLevel != null || savedNumber != null)
	{
		document.getElementById("load").disabled = false;
	}
}

function loadGame()
{
	var savedPlayer = localStorage.getItem("savedPlayer");
	var savedLevel = localStorage.getItem("savedLevel");
	var savedNumber = localStorage.getItem("savedNumber");
	
	localStorage.setItem("playersName",savedPlayer);
	localStorage.setItem("currentLevel",savedLevel);
	localStorage.setItem("selectedSudoku", savedNumber);
	localStorage.setItem("gameType", "loaded");
	window.location.href = 'game.html';
}