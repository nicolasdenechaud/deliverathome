window.onload = function() {
  if (document.implementation && document.implementation.createDocument) {
		docXml = document.implementation.createDocument('', '', null);
	}
	else if (window.ActiveXObject){
		docXml = new ActiveXObject("Microsoft.XMLDOM");
	}
	else {
		alert('Votre navigateur n\'est pas compatible avec les scripts utilisés.');
	}
	docXml.load('base.xml');
};

function remplirconnection(){
  document.getElementById('mymail').value = docXml.getElementsByTagName('mail')[0].firstChild.nodeValue;
  document.getElementById('mypwd').value = docXml.getElementsByTagName('motdepasse')[0].firstChild.nodeValue;
}
function remplirinformations(){
  document.getElementById('modnom').value = docXml.getElementsByTagName('nom')[0].firstChild.nodeValue;
  document.getElementById('modprenom').value = docXml.getElementsByTagName('prenom')[0].firstChild.nodeValue;
  document.getElementById('modadresse').value = docXml.getElementsByTagName('adresse')[0].firstChild.nodeValue;
  document.getElementById('modcp').value = docXml.getElementsByTagName('cp')[0].firstChild.nodeValue;
  document.getElementById('modville').value = docXml.getElementsByTagName('ville')[0].firstChild.nodeValue;
  document.getElementById('modemail').value = docXml.getElementsByTagName('email')[0].firstChild.nodeValue;
  document.getElementById('modvehicule').value = docXml.getElementsByTagName('vehicule')[0].firstChild.nodeValue;

}
function remplirmodifs(){
  document.getElementById('modnom').value = document.getElementById('nom').innerText;
  document.getElementById('modprenom').value = document.getElementById('prenom').innerText;
  document.getElementById('modadresse').value = document.getElementById('adresse').innerText;
  document.getElementById('modcp').value = document.getElementById('cp').innerText;
  document.getElementById('modville').value = document.getElementById('ville').innerText;
  document.getElementById('modemail').value = document.getElementById('email').innerText;
  document.getElementById('modvehicule').value = document.getElementById('vehicule').innerText;
}
