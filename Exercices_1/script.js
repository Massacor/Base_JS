// Exercice 1.1 afficher une variable
/*var IzI = "Hello world";

window.alert (IzI);*/


// Exercice 1.2 afficher trois variables
/*var nom = "Dickbutt" ,  prenom = "Sir" , ville = "9gag";

	alert ("Votre prénom : " + prenom  + "\nVotre nom : " + nom + "\nVotre ville : " + ville);*/



//Exercice 1.3 afficher le prenom
/*var prenom = prompt ("Entrez votre nom : ", "Dickbutt");

if (prenom != "") {
	alert ("Bonjour " + prenom);
} else {
	var prenom = prompt ("Entrez votre nom (vraiment) : ", "Dickbutt");
	alert ("Bonjour " + prenom);
}*/



// Exercice 1.4 test de l'âge
/*var age = prompt ("Entrez votre age :", "");

if (age < 18) {
	alert ("Vous êtes mineur");
} else if (age >= 18) {
	alert ("Vous êtes majeur");
} else{
	alert ("Stop trolling");
}*/



// Exercice 1.5 entrer trois variables
/*var nom = prompt ("Votre nom ?", "Dickbutt") ,  prenom = prompt ("Votre prénom :", "Sir") , ville = prompt ("Votre ville ?", "9gag") ;

	alert ("Votre prénom : " + prenom  + "\nVotre nom : " + nom + "\nVotre ville : " + ville);*/




//Exercice 1.06 la petite phrase.

/*var age = prompt ("Entrez votre age :", "") , sexe = prompt ("Entrez votre sexe (homme/femme) ?", "") , nation = prompt ("Entrez votre nationalité ?", "français") , phrase = "Bonjour, ";


if (sexe == "homme") {
	phrase += ("vous êtes un homme ");
} else {
	phrase += ("vous êtes une femme ");
};

if (age < 18) {
	phrase += ("mineur(e) ");
} else {
	phrase += ("majeur ");
};

phrase += nation;

alert (phrase);*/





// Exercice 2.1 (+ 2.2 en bonus) Changer l'image 
function changImg() {
	document.getElementById("demo").src="images/image1_2.jpg";
}

function returnImg() {
	document.getElementById("demo").src="images/image1.jpg";
}


//Exercice 2.3 réinitialiser un formulaire

function rez () {
	document.getElementById("nom").value="";
	document.getElementById("prenom").value="";
	document.getElementById("ville").value="";
}

//Exercice 2.4 montrer les lettres que l'on tape dans un champ
function disp() {
	var typo = document.getElementById("nom_2").value;
	alert (typo);
}

// Exercice 3-1 afficher/masquer le texte. 

function show() {
	document.getElementById('texte').style.display="initial";
}

function invisible() {
	document.getElementById('texte').style.display="none";
}

//Exercice 3-2 changer la couleur du texte en fonction du bouton

function green() {
	document.getElementById('example').style.color="green";
}

function red() {
	document.getElementById('example').style.color="red";
}

function blue() {
	document.getElementById('example').style.color="blue";
}

function reset() {
	document.getElementById('example').style.color="black";
}















// Exercice 1 bonus
// Exercice 1
function changImage() {
	document.getElementById("image1").style.border="3px solid red";
}

function returnImage() {
	document.getElementById("image1").style.border="none";
}

// Exercice 2 

function