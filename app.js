var divRoot=document.getElementById('root');
var newul=document.createElement('ul');
divRoot.textContent =("bonjour");
divRoot.appendChild(newul);

var tableau = ['libbi','missy','venus','vanille','caramel'];

for(var i = 0; i < tableau.length; i++) {
	var newli = document.createElement('li');
     newul.appendChild(newli);
     newli.innerHTML=tableau[i];
}

function Imput(){
a =prompt("Quel est votre nom");

alert("bonjour,je m'appelle"+ " "+a);
}



