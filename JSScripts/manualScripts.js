var page = 0;

function changePage()
{
	if(page == 0)
	{		
		document.getElementsByTagName("h3")[0].innerHTML = "Purpose of game";
		document.getElementById("content").innerHTML = "In the game you will have to fulfill inputs with numbers. <br>\
														In each column, each row and each smaller square(3x3) there must be numbers from 1 to 9. <br>\
														Inputs allows only numbers from 1 to 9, so you don't have to worry about mistakes. Try it!\
														<center><input class=\"form-control sudoku left up bottom right\" type=\"text\" onkeypress=\"return checkInput(event)\"/></center><br>\
														There are also some draft inputs, where you can put your notes there. They are smaller.\
														<center><input id=\"draft\" class=\"form-control up left right bottom draft\" type=\"text\" /></center>";
		page = 1;
	}
	else if(page == 1)
	{
		document.getElementsByTagName("h3")[0].innerHTML = "Helpfull menu";
		document.getElementById("content").innerHTML = "In the left of the screen, there will be several buttons.<br>\
														Each of them is doing exactly what is written on it.<br>\
														But be carefull! Some of them can substract your points!<br><br>\
														This button clear the sudoku, but also clears your points!<br>\
														<button type=\"button\" class=\"btn btn-danger btn-xlarge\">Clear sudoku </button><br>\
														This button gives you one number, but costs you points!<br>\
														<button type=\"button\" class=\"btn btn-info btn-xlarge\">Get a hint</button><br>\
														This button solves whole sudoku, but also costs your points! <br> \
														<button type=\"button\" class=\"btn btn-warning btn-xlarge\">Solve</button><br> \
														Fortunately, you can always save your game! <br>\
														<button type=\"button\" class=\"btn btn-success btn-xlarge\">Save</button>";
														
															
		document.getElementById("next").disabled = true;
		page = 2;
	}
}

function getBack()
{
	if(page == 0)
	{
		window.location.href = 'index.html';
	}
	else if(page == 1)
	{
		page = 0;
		document.getElementsByTagName("h3")[0].innerHTML = "First picture will show you how to get through first play screen.";
		document.getElementById("content").innerHTML = "<img src=\"pictures/subPlayManual.jpg\"></img> <br>";
	}
	else if(page == 2)
	{
		page = 1;
		document.getElementsByTagName("h3")[0].innerHTML = "Helpfull menu";
		document.getElementById("content").innerHTML = "In the game you will have to fulfill inputs with numbers. <br>\
														In each column, each row and each smaller square(3x3) there must be numbers from 1 to 9. <br>\
														Inputs allows only numbers from 1 to 9, so you don't have to worry about mistakes. Try it!\
														<center><input class=\"form-control sudoku left up bottom right\" type=\"text\" onkeypress=\"return checkInput(event)\"/></center><br>\
														There are also some draft inputs, where you can put your notes there. They are smaller.\
														<center><input id=\"draft\" class=\"form-control up left right bottom draft\" type=\"text\" /></center>";
		document.getElementById("next").disabled = false;
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