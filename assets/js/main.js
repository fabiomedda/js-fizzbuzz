/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

var listaNumeri = 0;

for (var i = 0; i < 100; i++) {
  listaNumeri = i + 1;

  var resto3 = listaNumeri % 3;
  var resto5 = listaNumeri % 5;
  if (resto3 === 0) {
    listaNumeri = "Fizz";
  }

  if (resto5 === 0) {
    listaNumeri = "Buzz";
  }

  if (resto3 === 0 && resto5 === 0) {
    listaNumeri = "FizzBuzz";
  }

  var listaNumeriHtml = document.getElementById('lista_numeri').innerHTML;
  document.getElementById('lista_numeri').innerHTML = listaNumeriHtml + "<li>" + listaNumeri + "</li>";
  console.log(listaNumeri);

}
