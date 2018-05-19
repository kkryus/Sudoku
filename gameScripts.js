window.onload = function(e){ 
    var playersName = localStorage.getItem("playersName");
	var currentLevel = localStorage.getItem("currentLevel");
	var selectedSudoku = localStorage.getItem("selectedSudoku");
	document.getElementById("welcomePlayer").innerHTML = "Welcome " + playersName;
	document.getElementById("choices").innerHTML = "You chose " + currentLevel + " level sudoku, number " + selectedSudoku + ".";
	readFromFile(currentLevel, selectedSudoku);
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
	sudokus = sudokus.split(',');
	fulfilled = [];
	showed = [];


	//var inputs = document.getElementsByTagName('input');

	var inputs = [];
	for(i= 0;i<81;i++)
	{
		inputs.push(document.getElementById(i));
	}
	
	
	for(i =0;i<81;i++)
	{		
		fulfilled.push(sudokus[i].substring(0,1));
		showed.push(sudokus[i].substring(1));
		if(sudokus[i].substring(1) == "true")
		{
			inputs[i].value = sudokus[i].substring(0,1);
			inputs[i].disabled = true;
		}
	}
	console.log(showed);
}
