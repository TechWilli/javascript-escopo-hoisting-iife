export default function closureEscopoFuncao() {

    /* 
    Closuse e escopos de função
    - Closure é em curtas palavras a habilidade de uma função criada dentro de outra função
    ter acesso à parametros da função exterior
    - O escopo da função dis respeito à criação de variáveis no corpo da função mais externa,
    estar disponível para as demais funções criadas neste escopo "pai"

    Exemplos abaixo para melhorar a comprrensão:
'   */

    function sayHello(name = '--') {

        // Criada a função dentro da função acima, ela tem acesso ao parametro mais superior
        function sayIt() {
            return `Hello, ${name}`
        }

        // Retornando a função sem invocá-la, para que assim a varivável que que recebe a atribuição possa chamá-la
        return sayIt
    }

    // Assinando as funções em variáveis
    const helloWilliam = sayHello('William')
    const helloNinguem = sayHello()

    // chamando a função mais interna do sayHello
    console.log('resultado da função helloWilliam:', helloWilliam())
    console.log('resultado da função helloNinguem:', helloNinguem())

    // ------------------------------------------------------------------

    function somaDoisNumeros(number1 = 0, number2 = 0) {
        const num1 = number1
        const num2 = number2

        // é possível retornar a função e chamar ela no mesmo instante
        return function soma() {
            // aqui dentro temos acesso às variáveis do escopo acima, pois a função soma também faz parte deste escopo
            return `${num1} + ${num2} = ${num1 + num2}`
        }()
    }

    console.log('Somando números:')
    console.log(somaDoisNumeros(10, 10))
    console.log(somaDoisNumeros(100, 10))
    console.log(somaDoisNumeros(15, 15))

}