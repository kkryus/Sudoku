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
			puzzlesOption.value = sudokus[i];
			puzzlesOption.appendChild(document.createTextNode(sudokus[i]));
			puzzlesSelect.appendChild(puzzlesOption);
		}
	}
}

