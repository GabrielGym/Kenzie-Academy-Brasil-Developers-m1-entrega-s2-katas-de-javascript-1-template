// Exercicio 1 Completo //


function cubicSquare(){
    for(let i = 1; i <= 10; i++){
        console.log(i * i * i)
    }
}

console.log(cubicSquare())


// Exercicio 2 Completo //


function divisiblesFor(limitador, divisor) {
    
    let contador = 0
    for (let i = 1; i <= limitador; i++) {
        if(i % divisor == 0){
            contador++
            console.log(i)
        }
    }
}
console.log(divisiblesFor(100, 10))


// Exercicio 3 Completo //



function stringElement(string, number){

    for(let i = 0; i <=string.length; i++){
        if(i == number){
            return (string[i].toUpperCase())
        } 
    }
    return "Letra não encontrada"
}

console.log(stringElement("algorítmos", 7))


// Exercicio 4 Completo //


function stringSlicer(string, number){
    
    let contador = ""
    for(let i = 0; i <= string.length; i++){
        if(i <= number){
            contador += (string[i])
        }
    }
    return contador
}

console.log(stringSlicer(" ALGORÌTMOS", 4))


// Exercicio 5 Completo //


function stringRest(string, number){
    
    let contador = ""
    for(let i = 0; i < string.length; i++){
        if(i >= number){
            contador += (string[i])
        }
    }
    return contador
}

console.log(stringRest("ALGORÌTMOS", 2))


// Exercicio 6 Completo //


function countVowels(string) {

    let contagem = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "a") {
            contagem++
        } else if (string[i] == "e") {
            contagem++
        } else if (string[i] == "i") {
            contagem++
        } else if (string[i] == "o") {
            contagem++
        } else if (string[i] == "u") {
            contagem++
        }
    }
    return `A palavra ${string} tem ${contagem} vogais.`
}

console.log(countVowels("abacaxi"))


// Execicio 7 Completo //


function countTextOccurrences(string, letra) {

    let contagem = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] == letra){
            contagem++
        }
    }
    return `A letra ${letra} aparece ${contagem} vezes na palavra ${string}.`
}

console.log (countTextOccurrences("abacaxi", "a"))


// Exercicio 8 Completo //


function textBackwars(string){

    let aliando = ""
    for(let i = string.length - 1; i >= 0; i--){
        aliando += string[i]
    }
    return `A palavra ${string} ao contrário é ${aliando}.`
}

console.log(textBackwars("abacaxi"))


// Exercicio 9 Completo //


function removeBlank(string){

    let remover = ""

    for(let i = 0; i < string.length; i++){
        if(string[i] !== " "){
            remover += string[i]
        }
    }
    return remover
}

console.log(removeBlank("Não ficará   espaços em branco"))


// Exercicio 10 Incompleto //


/* function encryptText(string){
    for(let i = 0; i = string.length; i++){
        if(string[i] == a)
    }
}

console.log(encryptText("Uma frase ultra secreta que precisa ser criptografada")) */


