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
  document.getElementById('nom').value = docXml.getElementsByTagName('nom')[0].firstChild.nodeValue;
  document.getElementById('prenom').value = docXml.getElementsByTagName('prenom')[0].firstChild.nodeValue;
  document.getElementById('adresse').value = docXml.getElementsByTagName('adresse')[0].firstChild.nodeValue;
  document.getElementById('cp').value = docXml.getElementsByTagName('cp')[0].firstChild.nodeValue;
  document.getElementById('ville').value = docXml.getElementsByTagName('ville')[0].firstChild.nodeValue;
  document.getElementById('email').value = docXml.getElementsByTagName('email')[0].firstChild.nodeValue;
  document.getElementById('vehicule').value = docXml.getElementsByTagName('vehicule')[0].firstChild.nodeValue;
  
}
