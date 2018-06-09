function getHighscores()
{
	var highscores;
	
	 $.ajax({
        url: "phpScripts/highscores.php",
		data: { 
		},
        type: 'GET',
        cache: false,
        timeout: 30000,
		async: false,
        error: function(){
            return true;
        },
        success: function(data){ 
            highscores = data;
        }
    });
	return highscores;

}

window.onload = function() {
	var highscores = getHighscores();
	highscores = highscores.split("\n");
	
	for(i=0;i<10;i++)
	{
		var score = highscores[i].split("|");
		var table = document.getElementById("highscoresTable");
		var row = table.insertRow(-1);
		row.style.display = "none";
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		cell0.innerHTML = i+1;
		cell1.innerHTML = score[0];
		cell2.innerHTML = score[1];
	}
	
	var showNextRow = function(){
   var nextInvisibleRow = $('.highscoresTable tr').not(':visible').filter(':first');
   if( nextInvisibleRow.length > 0 ){
       nextInvisibleRow.fadeIn(500, showNextRow); 
   }
}

$(function(){
    showNextRow();
});
	
};


