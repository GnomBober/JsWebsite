function compareAnswer() {
	var answer = document.getElementById("result").value;
	var beeingSolved = document.getElementById("toSolve").textContent;
	var b = beeingSolved.split(" ");
	var res = Number(b[0]) + Number(b[2]);
	
	if(answer == res)
	{
		alert("Верно!");
	}
	else
	{
		alert("Неверно :(");
	}
}