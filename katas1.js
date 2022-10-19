// Exercicio 1 Completo //


/* function cubicSquare(){
    for(let i = 1; i <= 10; i++){
        console.log(i * i * i)
    }
}

console.log(cubicSquare()) */


// Exercicio 2 Completo //


/* function divisiblesFor(limitador, divisor){
    for(let l = limitador; l >= divisor; l--){
        if(l % divisor == 0){
            console.log(l)
        }
    }
}

console.log(divisiblesFor(100, 10)) */


// Exercicio 3 incompleta //



/* function stringElement(string, pesquisa){

    let contador = 0
    for(let i = 0; i <= string.length; i++){
        if(string[i] == pesquisa){
            contador++
        }
    }
    return contador
}

console.log(stringElement("algorítmos", 7)) */


// Exercicio 4 incompleta //


/* function stringSlicer(string, numero){
    for(let i = 0; i <= string.length; i++){

    }
} */


// Exercicio 5 incompleta //


/* function stringRest(string, numero){
    for(let i = 0; i <= string.length; i++){

    }
} */

// Exercicio 6 incompleto //

/* 
function countVowels(string) {

}

console.log(countVowels("abacaxi")) */


// Execicio 7 Completo //


function countTextOccurrences(string, letra) {

    let contagem = ""
    for(let i = 0; i < string.length; i++){
        if(string[i] == letra){
            contagem += [i]
        }
    }
    return `A letra ${letra} aparese ${contagem.length}`
}

console.log (countTextOccurrences("abacaxi", "a"))


// Exercicio 8 Completo // 


/* function textBackwars(string){

    let aliando = ""
    for(let i = string.length - 1; i >= 0; i--){
        aliando += string[i]
    }
    console.log(aliando)
}

textBackwars("abacaxi") */


// Exercicio 9 Completo //


/* function removeBlank(string){

    let remover = ""

    for(let i = 0; i < string.length; i++){
        if(string[i] !== " "){
            remover += string[i]
        }
    }
    return remover
}

console.log(removeBlank("Não ficará   espaços em branco")) */


// Exercicio 10 //


/* function encryptText(string){
    for(let i = 0; i = string.length; i++){
        if(string[i] == a)
    }
}

console.log(encryptText("Uma frase ultra secreta que precisa ser criptografada")) */


