//your JS code here. If required.
//your JS code here. If required.
function incrementBtn(){
	const targetingcounter=document.getElementById("counter");
	let initialvalue=Number(targetingcounter.textContent)
	alert(initialvalue)
	targetingcounter.textContent=initialvalue+1;
}