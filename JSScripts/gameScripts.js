var sudokus;
var playersName;
var currentLevel;
var selectedSudoku;
var points = 0;
var solved = false;
window.onload = function(e){ 
    playersName= localStorage.getItem("playersName");
	currentLevel = localStorage.getItem("currentLevel");
	selectedSudoku = localStorage.getItem("selectedSudoku");
	document.getElementById("welcomePlayer").innerHTML = "Welcome " + playersName;
	document.getElementById("choices").innerHTML = "You chose " + currentLevel + " level sudoku, number " + selectedSudoku + ".";
	
	sudokus = readFromFile(currentLevel, selectedSudoku);
	setBeginingState(sudokus);
	var gameType = localStorage.getItem("gameType");	
	if(gameType == "loaded")
	{
		var storedValues = JSON.parse(localStorage.getItem("values"));
		var storedDrafts = JSON.parse(localStorage.getItem("draftValues"));
		var inputs = [];
		var drafts = document.getElementsByClassName("draft");
		
		for(i= 0;i<81;i++)
		{
			inputs.push(document.getElementById(i));
		}
		for(i= 0;i<81;i++)
		{
			drafts[i].value = storedDrafts[i];
			if(storedValues[i] != "0")
			{
				inputs[i].value = storedValues[i];
			}
		}
		points = parseFloat(localStorage.getItem("points"));
		document.getElementById("points").innerHTML = "Points: " + Number((points).toFixed(2));
	}
}



function saveGame()
{
	localStorage.setItem("savedPlayer", playersName);
	localStorage.setItem("savedLevel", currentLevel);
	localStorage.setItem("savedNumber", selectedSudoku);
	localStorage.setItem("points", points);
	var inputValues = [];
	for(i= 0;i<81;i++)
	{
		var value = document.getElementById(i).value;
		if(value == "")
		{
			inputValues.push("0");
		}
		else
		{
			inputValues.push(value);
		}	
	}
	localStorage.setItem("values", JSON.stringify(inputValues));
	
	var draftValues = [];
	var drafts = document.getElementsByClassName("draft");
	for(i=0;i<81;i++)
	{
		if(drafts[i].value == null)
		{
			draftValues.push("");
		}
		else
		{
			draftValues.push(drafts[i].value);
		}
	}
	localStorage.setItem("draftValues", JSON.stringify(draftValues));
}

function checkInput(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
		
    if (charCode != 46 && charCode > 31 && (charCode < 49 || charCode > 57))
        return false;

	if(evt.target.value.length > 0)
	{
		evt.target.value = '';
	}
    return true;
} 

function clearSudoku()
{
	var drafts = document.getElementsByClassName("draft");
	var inputs = [];
	for(i= 0;i<81;i++)
	{
		drafts[i].value = "";
		if(document.getElementById(i).disabled == false)
		{
			document.getElementById(i).value = "";
		}
	}
	solved = false;
	clearPoints();
}

function changePoints(amount)
{
	points += amount;
	document.getElementById("points").innerHTML = "Points: " + Number((points).toFixed(2));
}
function clearPoints()
{
	points = 0;
	document.getElementById("points").innerHTML = "Points: " + points;
}

function solveSudoku()
{
	var corrected = false;
	for(i= 0;i<81;i++)
	{
		if(document.getElementById(i).value != sudokus[i].substring(0,1))
		{
			document.getElementById(i).value = sudokus[i].substring(0,1);
			corrected = true;		
		}
	}
	if(corrected)
	{
		addPointsByLevel(currentLevel, -10);
		solved = true;
	}
	
}

function checkIfWon()
{
	var won = true;
	for(i= 0;i<81;i++)
	{
		if(document.getElementById(i).value != sudokus[i].substring(0,1))
		{
			won = false;		
		}
	}
	if(won)
	{
		if(!solved)
		{
			addPointsByLevel(currentLevel, 10);
		}
	}
	else
	{
	}
}

function getAHint()
{
	for(i= 0;i<81;i++)
	{
		if(document.getElementById(i).value == "")
		{
			document.getElementById(i).value = sudokus[i].substring(0,1);
			addPointsByLevel(currentLevel, -1);
			break;
		}
	}
}

function addPointsByLevel(level, points)
{
	if(level == "easy")
	{
		changePoints(1.7 * points);
	}
	if(level == "medium")
	{
		changePoints(1.5 * points);
	}
	if(level == "hard")
	{
		changePoints(1.2 * points);
	}
}

function readFromFile(level, number)
{	
	var sudokus;
	$.ajax({
        url: "phpScripts/game.php",
		data: { 
        'level': level,
		'number':number
		},
        type: 'GET',
        cache: false,
        timeout: 30000,
		async: false,
        error: function(){
            return true;
        },
        success: function(data){ 
            sudokus = data;
        }
    });
	return sudokus.split(',');
}

function setBeginingState(sudokus)
{
	var inputs = [];
	for(i= 0;i<81;i++)
	{
		inputs.push(document.getElementById(i));
	}
	
	for(i =0;i<81;i++)
	{		
		if(sudokus[i].substring(1) == "true")
		{
			inputs[i].value = sudokus[i].substring(0,1);
			inputs[i].disabled = true;
		}
	}
}
