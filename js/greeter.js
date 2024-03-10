var person;
if(confirm("Вы уверены?")) {
	person = prompt("Введите ваше имя");
	alert("Привет, " + person);
}else {
	alert(":(");
}