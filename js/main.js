(() => {
	// var badge = document.querySelector("#badge");
		
	var MayaIcons = document.querySelectorAll("#icon");

	function logMyId() {
		console.log(this.id);
		//debugger;
	}


	MayaIcons.forEach(currenticon => currenticon.addEventListener("click", logMyId));

	document.querySelector('#first').onclick = function() {
    alert('I am Ancint House in Maya language!');
}
	document.querySelector('#second').onclick = function() {
    alert('I am Archaeological Team in Maya language!');
}
	document.querySelector('#third').onclick = function() {
    alert('I am Ceremonial Temple in Maya language!');
}
	document.querySelector('#fourth').onclick = function() {
    alert('I am Crop Harvesting in Maya language!');
}
	document.querySelector('#fifth').onclick = function() {
    alert('I am Green Child in Maya language!');
}
	document.querySelector('#sixth').onclick = function() {
    alert('I am House On Fire in Maya language!');
}
	document.querySelector('#seventh').onclick = function() {
    alert('I am Planting Seeds in Maya language!');
}
	document.querySelector('#eigth').onclick = function() {
    alert('I am Rain in Maya language!');
}
	document.querySelector('#ninth').onclick = function() {
    alert('I am To Learn in Maya language!');
}
	document.querySelector('#tenth').onclick = function() {
    alert('I am Volcano Erupting in Maya language!');
    }
})();