﻿<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" >	
	<title>Sudoku - Kamil Kryus</title>
	<link rel="icon" href="pictures/sudoku_icon.png">	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="styles/style.css">
	<script type="text/javascript" src="JSScripts/subPlayScripts.js"></script>
	<script>
	
	</script>
</head>
<body>



<div class = "container">
	<div class="jumbotron">

	  <h1>Sudoku</h1>
	  <hr>
		<div class="form-group">
		  <label for="usr">Name:</label>
		  <input type="text" class="form-control" id="usr">
		</div>
		<button type="button" id="easy" class="btn btn-success" onclick="undisableLevel(this.id)">Easy</button>
		<button type="button" id="medium" class="btn btn-warning notUsed" onclick="undisableLevel(this.id)" >Medium</button>
		<button type="button" id="hard" class="btn btn-danger notUsed" onclick="undisableLevel(this.id)" >Hard</button> <br /><br />
			
		<select class="bootstrap-select">
			<?php
			
			$files = scandir('easy/');
			foreach($files as $file) {
				if($file != '.' && $file != '..')
				{
					$tmp = pathinfo($file, PATHINFO_FILENAME);
					echo "<option value=\"$tmp\">$tmp</option>";
				}
			}
			?>
		</select></br></br>
		<button type="button" id="playButton" class="btn btn-success btn-xlarge" onclick="startGame()">Play</button>
		<button type="button" class="btn btn-success btn-xlarge" onclick="window.location.href='index.html'">Cancel</button></br></br>
				
	</div>
</div>

			
			
</div>

</body>
</html>