var currentLevel = "easy";

function undisableLevel(id)
{
	document.getElementById(currentLevel).classList.add("notUsed");
	document.getElementById(id).classList.remove("notUsed");
	currentLevel = id;
}

function saveToFile()
{
	var inputs, index;
	var fulfilled = [];
	var showed = [];

	inputs = document.getElementsByTagName('input');

	for (index = 0; index < inputs.length; ++index) {
		fulfilled.push(inputs[index].value);
		if(inputs[index].classList.contains("green"))
		{
			showed.push(inputs[index].value);
		}
		else
		{
			showed.push("0");
		}
	}
	console.log(fulfilled);
	
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
		fulfilled:JSON.stringify(fulfilled),
		showed:JSON.stringify(showed),
		gameFolder:currentLevel,
		fileName:fileName
		}, function(data) {
			if (data != "") {
				console.log(data);
			}
		});	
		
	document.getElementById("success-alert").style.display = "inline-block";
}

function addBrs()
{
	var brsElement = document.getElementById("brs");
	var expandButton = document.getElementById("expand");
	if(brsElement.classList.contains("expand1"))
	{
		brsElement.classList.remove("expand1");
		expandButton.innerHTML = "Expand";
		brsElement.innerHTML="";
	}
	else
	{
		expandButton.innerHTML = "Hide";
		brsElement.classList.add("expand1");
		brsElement.innerHTML ="</br></br></br></br></br></br>";
	}
}

function setVisible(id)
{
	var element = document.getElementById(id);
	if(element.classList.contains("green"))
	{
		element.classList.remove("green");
	}
	else
	{
		element.classList.add("green");
	}
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
