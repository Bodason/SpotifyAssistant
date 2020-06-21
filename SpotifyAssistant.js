"use strict"

document.body.style.border = "5px solid green";
var container;
var maxAttempts = 10000;
var attemts = 0;
var playlistActionBarElements;

(function(){
	tryGetContainer()	
	document.getElementsByClassName("");



function tryGetContainer()
{
	if(document.readyState != 'complete'){
		attemts++;
		console.log("not ready, reiterating ready");

		if(attemts < maxAttempts)
			setTimeout(tryGetContainer, 100);
		else
			console.log("exceeeded max attempts!");
	} else {
		console.log("readyState is complete");
		tryGetContainerAfterReadyState();
	}
}


function tryGetContainerAfterReadyState()
{
	playlistActionBarElements = document.getElementsByClassName("c35a53c76b57e4920749760846dec11d-scss")[0];

	if(!playlistActionBarElements) 
	{
		setTimeout(tryGetContainerAfterReadyState, 100);
	} else {
		applyNewElementWhenContainerReady();
	}
}

function applyNewElementWhenContainerReady(){

	var elementToAdd = getElementToAdd();

	try
	{
		playlistActionBarElements.appendChild(elementToAdd);
	}
	catch(error){
		console.error(error);
	}

}

function getElementToAdd() {

	var para = document.createElement("P");                       // Create a <p> node
	var t = document.createTextNode("This is a paragraph.");      // Create a text node
	para.appendChild(t);                                          // Append the text to <p>

	return para;
}

}());
