window.onload = function(e){ 
    var playersName = localStorage.getItem("playersName");
	var currentLevel = localStorage.getItem("currentLevel");
	var selectedSudoku = localStorage.getItem("selectedSudoku");
	document.getElementById("welcomePlayer").innerHTML = "Welcome " + playersName;
	document.getElementById("choices").innerHTML = "You chose " + currentLevel + " level sudoku, number " + selectedSudoku + ".";
}