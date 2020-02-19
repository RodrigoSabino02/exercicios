 // calculo de imc
 var altura=prompt('qual e o seu peso')
 var peso=prompt('qual e o seu peso')
 var altura2 = Math.pow(altura, 2)

 var imc = peso / altura2
 //classificaçao do imc
 var status = ""
function soma() {
 if (imc < 18.4) {
     status = "Abaixo do peso";
 } else if (imc >= 18.5 && imc < 24.9) {
     status = "normal"
 } else if (imc > 25 && imc < 29.9) {
     status = "sob peso";     
 } else if (imc >30 && imc < 39.9) {
     status = "obeso";
 } else {
     status = "obsesidade grave";
 }
} 
 
