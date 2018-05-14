var currentLevel = "easy";

function undisableLevel(id)
{
	document.getElementById(currentLevel).classList.add("notUsed");
	document.getElementById(id).classList.remove("notUsed");
	currentLevel = id;
}

function saveToFile()
{
	var fulfilled = document.getElementById("fulfilled").value;
	var showed = document.getElementById("showed").value;
	
	$.ajax({
        url: "phpScripts/subPlayScripts.php",
		data: { 
        'level': currentLevel
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
	var fileName = sudokus.length - 2 + 1;
		
	$.post("phpScripts/saveSudoku.php", {
		fulfilled:fulfilled,
		showed:showed,
		gameFolder:currentLevel,
		fileName:fileName
		}, function(data) {
			if (data != "") {
				console.log(data);
			}
		});	
		
	document.getElementById("success-alert").style.display = "inline-block";
}
