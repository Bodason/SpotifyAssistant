(function(){
document.body.style.border = "5px solid green";

var maxAttempts = 10000;
var attemts = 0;
var playlistActionBarElements;
var childAppended;

setInterval(() => {
	childAppended = document.getElementById("SpotifyExtensionButton");

	if(childAppended == null){
		tryGetContainer();
	}

}, 200);

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
		childAppended = document.getElementById("SpotifyExtensionButton");
		if(childAppended == null) {
			applyNewElementWhenContainerReady();
		}
	}
}

function applyNewElementWhenContainerReady(){

	var elementToAdd = PlaylistExtButton.prototype.GetPlaylistButtonAsHtmlNode();

	try
	{
		playlistActionBarElements.appendChild(elementToAdd);
	}
	catch(error){
		console.error(error);
	}

}

}());
