//Consegna:
   //1)Scrivi un programma che stampi in console i numeri da 1 a 100,
   //2)Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz"
   //3)Tranne per i multipli di 3  , in quel caso stampare "Fizz" al posto del numero 
   //4)Tranne per i multipli di 5  , in quel caso stampare "Buzz" al posto del numero


//1)Stampami in console i numeri da 1 a 100   



for(let numero=1 ; numero <= 100 ; numero++){
   //2)Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz"
   if( numero % 5 == 0 && numero % 3 == 0){
        console.log('FizzBuzz');
    
    //3)Tranne per i multipli di 3 , in quel caso stampa Fizz al posto del numero
    }else if(numero % 3 == 0) {
        console.log('Fizz');
    }
    //4)Tranne per i multipli di 5 , in quel caso stampa Buzz al posto del numero
    else if( numero % 5 == 0) {
        console.log('Buzz');
    } 
    else{
        console.log(numero)
    } 
}
