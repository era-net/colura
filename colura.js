const body = document.getElementsByTagName("body")[0];
let newBtn;
let btnName;
let newIpt;
let clrIpt;

let titles = 0;

function Colura() {

	this.fontFamily = function(font = "A") {

		if (font === "A") {
			body.style.fontFamily = "arial";
		} else if (font === "T") {
			body.style.fontFamily = "tahoma";
		} else if (font === "S") {
			body.style.fontFamily = "serif";
		}
	}


	this.fontSize = function(size = "16") {
		body.style.fontSize = size + "px";
	}


	this.createBtn = function( clr = "#fff", bg = "#303030", crs = "pointer", font_size = "11") {
		newBtn = document.createElement("button");

		newBtn.style.color = clr;

		newBtn.style.backgroundColor = bg;

		newBtn.style.cursor = crs;

		newBtn.style.fontSize = font_size + "px";

		btnName = document.createTextNode("GO");

		newBtn.appendChild(btnName);

		body.appendChild(newBtn);
	}


	this.createIpt = function() {
		newIpt = document.createElement("input");
		body.appendChild(newIpt);
	}


	this.createList = function(arrIpt = ["no input"]) {
		var ul = document.createElement("ul");
		var len = arrIpt.length;
		var i, j;
		for (i = 0; i < len; i++) {
			var li = document.createElement("li");
			for (j = 0; j < len; j++) {
				var j = document.createTextNode(arrIpt[i]);
				li.appendChild(j);
			}
			ul.appendChild(li);
		}
		body.appendChild(ul);
	}


	this.createTitle = function(txt, b = "m") {
		titles++;
		var title;

		if (b === "m") {
			title = document.createElement("h2");
		} else if (b === "l") {
			title = document.createElement("h1");
		} else if (b === "s") {
			title = document.createElement("h3");
		}

		title.setAttribute("id", "title"+titles);
		title.setAttribute("onclick", "getId(this.id);");
		title.style.cursor = "pointer";

		var text = document.createTextNode(txt);

		title.appendChild(text);

		body.appendChild(title);
	}

	this.createClrIpt = function() {
		clrIpt = document.createElement("input");
		clrIpt.setAttribute("type", "color");

		body.appendChild(clrIpt);
	}

	this.createLink = function(name, link) {
		var a = document.createElement("a");
		a.setAttribute("href", link);
		var name = document.createTextNode(name);
		a.appendChild(name);

		body.appendChild(a);
	}
}
