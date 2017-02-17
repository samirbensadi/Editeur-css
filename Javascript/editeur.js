var key = "a";    //variable globale d'incrémentation pour les boutons générés.
var cssName = ""; // variable du nom du style sauvegardé.


//fonction d'édition relié aux boutons d'édition.

function align(nom,argument) {
  if (typeof argument === 'undefined') {
    argument = '';
  }
  document.execCommand(nom, false , argument); //on execute la commande au click du bouton.
  localStorage.setItem("text-align",nom);
}

function color(nom,argument){
  if (typeof argument ==='undefined') {
    argument = '';
  }
  document.execCommand(nom,false,argument);
  localStorage.setItem("color",argument);
}

function txtSize(nom,argument){
  if (typeof argument === 'undefined') {
    argument = '';
  }
  document.execCommand(nom, false, argument);
  localStorage.setItem("font-size",argument);
}

//fonction de sauvegarde et de génération de boutons d'application des styles sauvegardés.

function save(){
  var cssName = prompt("Nommez votre style:","Mon style");

  var newBtn = document.createElement("input"); //création du bouton
  newBtn.value = cssName;
  newBtn.type = "button";
  newBtn.className = "showBtn";

  localStorage.setItem(key, cssName);

  var txtAlign = localStorage.getItem("text-align");
  var txtColor = localStorage.getItem("color");
  var fontSize = localStorage.getItem("font-size");

  var data = {
    couleur : txtColor,
    alignement : txtAlign,
    taille : fontSize
  };

  var val = JSON.stringify(data);

  window.localStorage.setItem(cssName, val);

  key++;

  alert("vous avez sauvegarder votre theme: \n Couleur du texte: " + txtColor + "\n Alignement: " + txtAlign + "\n Taille du texte: " + fontSize);

  var location = document.getElementById('navigation'); //on place le bouton à l'endroit voulu
  location.appendChild(newBtn);

  // fonction d'application du style enregistré

  newBtn.onclick = function() {

    var finalStyle = JSON.parse(window.localStorage.getItem(cssName));

    var txtTaille = finalStyle.taille;
    var txtCouleur = finalStyle.couleur;
    var alignementTxt = finalStyle.alignement;

    document.execCommand('styleWithCss',false, true);
    document.execCommand('foreColor', false,txtCouleur);
    document.execCommand(alignementTxt,false);
    document.execCommand('fontSize',false,txtTaille);

  };

}


//fonction de suppression du thème :

function suppr(){
    window.localStorage.removeItem(cssName);
    document.getElementById("navigation").remove('button');

    alert("le style a été supprimé! Les paramètres CSS ont été réinitialisé.");

    window.location.reload(true);
}
