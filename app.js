

var ask1;
var task1="",task2="",task3="",task4="",task5="",task6="";

var task1=prompt("What is your first task of the day?");
     while(task1 === ""){
     	prompt("What is your first task of the day?");
     }

$("#task1").append(task1 + '<br><button type="button" class="btn btn-success" id="button1">Success</button><br>');


ask1 = prompt("Do you have another task?");

if ( ask1 === "yes"){
	task2 = prompt("What is your second task?");
	$('#task2').append(task2 + '<br><button type="button" class="btn btn-success" id="button2">Success</button><br>');
	ask1 = prompt("Have you yet another chore?");
}
if ( ask1 === "yes"){
	task3 = prompt("What is your third task?");
	$('#task3').append(task3 + '<br><button type="button" class="btn btn-success" id="button3">Success</button><br>');
	ask1 = prompt("Got more?");
}
if ( ask1 === "yes"){
	task4 = prompt("What is your fourth task?");
	$('#task4').append(task4 + '<br><button type="button" class="btn btn-success" id="button4">Success</button><br>');
	ask1 = prompt("Got even more?");
}

if ( ask1 === "yes"){
	task5 = prompt("What is your fifth task?");
	$('#task5').append(task5 + '<br><button type="button" class="btn btn-success" id="button5">Success</button><br>');
	ask1 = prompt("Got even more?");
}

if ( ask1 === "yes"){
	task6 = prompt("What is your sixth task?");
	$('#task6').append(task6 + '<br><button type="button" class="btn btn-success" id="button6">Success</button><br>');
	ask1 = prompt("Got even more?");
}

if ( ask1 === "yes"){
	alert("Sorry, but your life is too busy for me, you need to get your act together, five is enough!  Just tick off each task as you've completed it, and save the rest for tomorrow.");
	
}


else{
	alert("Allrighty then!  Just tick off each task as you complete it!");
}

$("#button1").click(function() {
	$( "#task1" ).slideUp();
});

$("#button2").click(function() {
	$( "#task2" ).slideUp();
});

$("#button3").click(function() {
	$( "#task3" ).slideUp();
});

$("#button4").click(function() {
	$( "#task4" ).slideUp();
});

$("#button5").click(function() {
	$( "#task5" ).slideUp();
});

$("#button6").click(function() {
	$( "#task6" ).slideUp();
});








  






