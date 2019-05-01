
const colura = new Colura();

colura.fontSize();
colura.fontFamily("T");

colura.createIpt();

colura.createBtn("#000", "#d6d6d6", "pointer", "18");

var arar = [
	"abc",
	"def",
	"ghi",
	"jkl"
];

colura.createList(arar);

colura.createTitle("helooo", "b");

colura.createClrIpt();

colura.createLink("YouTube", "https://www.w3schools.com/html/html_links.asp");