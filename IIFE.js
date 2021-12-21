export default function IIFE() {

    /* 
        Immediately Invoked Function Expression
        Aqui o JavaScript nos dá o poder de chamar/invocar uma função no momento em que a criamos

        Vejamos alguns exemplos:
    */

    // Para execurat uma IIFE precisamos envolver uma função seja ela literal, anônima, atribuída ou arrow...
    ; (function () {
        console.log('chamou a IIFE com function ()')
    })() // () chama a função, como vemos normalmente
    
    // Com arrow rambém funciona, mas é necessário o ; antes do ( para identificar que é um bloco de execução
    ; (() => {
        console.log('chamouo a IIFE com arrow functio () =>')
    })()

    // IIFE para descobrir os números primos de 1 até o número especificado
    ; (function (untilNumber) {

        // 1 é primo
        const numerosPrimos = [1]

        // loop então se inicia no 2
        for (let i = 2; i <= untilNumber; i++) {

            let isPrimoCount = true
            
            // j < i para não cair no caso de verificar dois números iguais
            for (let j = 2; j < i; j++) {

                if (i % j === 0) {
                    isPrimoCount = false
                    break
                }

            }
            
            if (isPrimoCount) {
                numerosPrimos.push(i)
            }
        }
        console.log(`de 1 a ${untilNumber} existem ${numerosPrimos.length} números primos, são eles:`)
        console.log(numerosPrimos)
        
    })(20) // função anônima também pode receber parâmetros
}