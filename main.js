// select an element and change it's size...

let currId;

function getId(id) {
	currId = id;
}

let titleSize = document.getElementById("selectTitleSize");


const colura = new Colura();

colura.fontSize();
colura.fontFamily("T");
colura.createTitle("helooo", "l");
colura.createTitle("helooo", "l");
colura.createTitle("helooo", "l");

titleSize.addEventListener("change", function() {
	console.log(titleSize.value);
	document.getElementById(currId).style.fontSize = titleSize.value + "px";
}, false);