var Ayoba = getAyoba()
var text = document.getElementById("lblNo")
var text2 = document.getElementById("lblNo2")
 
/**
* Determine the mobile operating system and returns the
* proper javascript interface
*/
function getAyoba() {
   var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
   // Windows Phone must come first because its UA also contains "Android"
   if (/windows phone/i.test(userAgent)) {
       return null;
   }
 
   if (/android/i.test(userAgent)) {
       return Android;
   }
 
   // iOS detection from: http://stackoverflow.com/a/9039885/177710
   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
       return null; // todo
   }
 
   return "unknown";
}

function getMsisdn() {
    var msisdn = Ayoba.getMsisdn();
    text.textContent = "This is the msisdn" + msisdn
    return msisdn
 }

 function showDeveloper() {
    
    text2.textContent = "Sfiso Mawila"

 }

function sayHello(){
    alert("Just an alert")
}