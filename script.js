//fonction de selection de text


//fonction textAlign


	function txtLeft() {
		var txt = document.getElementById('ediTxt')
		txt.style.textAlign = "left";
	}

	function txtRight() {
		var txt = document.getElementById('ediTxt');
		txt.style.textAlign = "right";
	}

/* Test de fonction - application d'édition à la selection */

	function txtCenter() {
        var txt = document.getElementById('ediTxt');
        /*
        var selection ="";
		if ('selectionStart' in txt)
		{
			if (txt.selectionStart != txt.selectionEnd) {
				selection = txt.value.substring(txt.selectionStart, txt.selectionEnd);
			}

			if (selection == "") {
				alert("No text is selected");
			}
			else {
                alert(selection);
                txt.style.textAlign= "center";

			}

		}*/
        txt.style.textAlign= "center";
	}




	function txtJustify() {
		var txt = document.getElementById('ediTxt');
		txt.style.textAlign = "justify";
	}

	//fonction color

	function changeColor() {
		var txt = document.getElementById('ediTxt');
		var color = document.getElementById('changeColor').value;

		txt.style.color = color;
	}

	//fonction fonts size
	function txtSize(selectTag) {
	var txt = document.getElementById('ediTxt');
	var sizeValue = selectTag.options[selectTag.selectedIndex].value;
	txt.style.fontSize = sizeValue + "px";

	}


	//fonction save style
	function save() {

		var txt = document.getElementById('ediTxt');


		var alignement = document.defaultView.getComputedStyle(txt, null).textAlign;
		var txtColor = document.defaultView.getComputedStyle(txt, null).color;
		var txtSize = document.defaultView.getComputedStyle(txt, null).fontSize;


		//on sauvergarde dans le local storage

		localStorage.setItem("justify", alignement);
		localStorage.setItem("color", txtColor);
		localStorage.setItem("Size", txtSize);

		alert("votre style a été stocké : \n alignement : " + alignement + "\n couleur du texte : " + txtColor + "\n taille du texte: " + txtSize);

	}

	//fonction afficher style

	function showStyle() {

		var txt = document.getElementById('ediTxt');

		var align = localStorage.getItem("justify");
		var colorStyle = localStorage.getItem("color");
		var size = localStorage.getItem("Size");

		txt.style.textAlign = align;
		txt.style.color = colorStyle;
		txt.style.fontSize = size;

		alert(" votre dernier thème est appliqué avec succès");

	}

	//fonction suppression du local storage et reload page

	function suppr() {

		localStorage.removeItem("justify");
		localStorage.removeItem("color");
		localStorage.removeItem("Size");

		window.location.reload(true);
	}
