//Consegna:
   //1)Scrivi un programma che stampi in console i numeri da 1 a 100,
   //2)Tranne per i multipli di 3  , in quel caso stampare "Fizz" al posto del numero 
   //3)Tranne per i multipli di 5  , in quel caso stampare "Buzz" al posto del numero
   //4)Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".



//1)Stampami in console i numeri da 1 a 100   
let numero = parseInt('1');

console.log('numero' , numero , typeof numero);

for(let numero=0 ; numero <= 100 ; numero++){
    console.log('numero', numero);
    //2)Tranne per i multipli di 3 , in quel caso stampa Fizz al posto del numero
    if(numero % 3 == 0) {
        console.log(numero , 'Fizz');
    }
    //3)Tranne per i multipli di 5 , in quel caso stampa Buzz al posto del numero
    else if( numero % 5 == 0) {
        console.log(numero , 'Buzz');
    }
}
