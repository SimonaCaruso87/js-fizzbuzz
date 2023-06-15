/*
Consegna:
   1)Crea un ciclo che va da 1 a 100
   2)PER OGNI ITERAZIONE controllo se il numero salvato nel contatore e 
                          o multiplo di 3, o multiplo di 5 , o multiplo di entrambi
        -Se è multiplo di 3 -> stampo Fizz in console
        -Se è multiplo di 5 -> stampo Buzz in console
        -Se è sia m. di 3 che di 5 -> stampo FizzBuzz in console.
        -ALTRIMENTI stampo il numero in console 

*/

//1)Creo un ciclo
    //PER OGNI ITERAZIONE:
    //1a)Stampami in console i numeri da 1 a 100


for(let numero=1 ; numero <= 100 ; numero++){

    // crea un nuovo elemento div
    const newDiv = document.createElement("div");
    //aggiungi un nodo di testo al div appena creato
    newDiv.classList.add('col-md-1','my-box');
    document.getElementById("div1").appendChild(newDiv);

   //2)Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz"
   if( numero % 5 == 0 && numero % 3 == 0){
        console.log('FizzBuzz');
        newDiv.innerHTML = "FizzBuzz";
        newDiv.style.backgroundColor = 'lightcoral';


    //3)Tranne per i multipli di 3 , in quel caso stampa Fizz al posto del numero
    }else if(numero % 3 == 0) {
        console.log('Fizz');
        newDiv.innerHTML = "Fizz";
        newDiv.style.backgroundColor = 'white';
        newDiv.style.color = "black";
    }
    //4)Tranne per i multipli di 5 , in quel caso stampa Buzz al posto del numero
    else if( numero % 5 == 0) {
        console.log('Buzz');
        newDiv.innerHTML = "Buzz";
        newDiv.style.backgroundColor = 'black';
        newDiv.style.border= "1px solid white";

    } 
    else{
        console.log(numero)
        newDiv.innerHTML = numero;
    } 
}

    // crea un nuovo elemento div
    // const newDiv = document.createElement("div");
    //dai un pò di contenuto
    // newDiv.innerHTML = "Ciao Silvio non ci mancherai.";
    //aggiungi un nodo di testo al div appena creato
    // document.getElementById("div1").appendChild(newDiv);







