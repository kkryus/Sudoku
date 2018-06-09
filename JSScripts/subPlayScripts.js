var currentLevel = "easy";

function undisableLevel(id)
{
	document.getElementById(currentLevel).classList.add("notUsed");
	document.getElementById(id).classList.remove("notUsed");
	currentLevel = id;
	var sudokus = [];
	
	 $.ajax({
        url: "phpScripts/subPlayScripts.php",
		data: { 
        'level': id
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
	sudokus = sudokus.split(",");
	
	var puzzlesSelect = document.getElementsByClassName("bootstrap-select")[0];
	var i;
    for(i = puzzlesSelect.options.length - 1 ; i >= 0 ; i--)
    {
        puzzlesSelect.remove(i);
    }
	for(i =0;i<sudokus.length;i++)
	{
		if(sudokus[i]!= '.' && sudokus[i] != "..")
		{
			var puzzlesOption = document.createElement("option");
			puzzlesOption.value = sudokus[i].slice(0, -4);
			puzzlesOption.appendChild(document.createTextNode(sudokus[i].slice(0, -4)));
			puzzlesSelect.appendChild(puzzlesOption);
		}
	}
}


function startGame()
{	
	var playersName = document.getElementById("usr").value;
	localStorage.setItem("playersName",playersName);
	localStorage.setItem("currentLevel",currentLevel);
	var e = document.getElementsByClassName("bootstrap-select")[0];
	var game = e.options[e.selectedIndex].text + ".txt";
	localStorage.setItem("selectedSudoku", game);
	localStorage.setItem("gameType", "new");
	window.location.href = 'game.html';
}

