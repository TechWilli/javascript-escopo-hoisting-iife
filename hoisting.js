export default function hoisting() {

    /* 
        Hoisting, do inglês signofica levantar, elevar, içar...
        No conceito do JavaScript, é trabalhada essa "peculiaridade" de trazer atribuições de
        variáveis e funcções literais para cima mesmo que haja um retorno utilizando elas.

        Exemplos abaixo de hoisting com funções:
    */
    
    function desvendandoHoisting() {
        console.log('topo do escopo da função aqui')

        const variavelDepoisDoReturn = {
            nome: 'William',
            trabalho: 'Consultor Jr.'
        }
        // não retorna erro ou undefined pois o JS faz o içamento (hoisting) das funções literais (funções declaradas sem atribuí-las a uma variáveis)
        // detsa forma ela é criada em runtime (tempo de execução)
        return funcaoDepoisDoReturn()

        function funcaoDepoisDoReturn() {
            console.log('chamou a função que foi trazida para o topo do escopo, até mesmo antes de todas as variáveis')
            console.log('de brinde consegue acessar a variável', variavelDepoisDoReturn)
        }
    }

    // forma que resultaria em erro:
    function desvendandoHoisting2() {
        console.log('topo do escopo da função aqui')

        return variavelComFuncao()

        const variavelComFuncao = function funcaoDepoisDoReturn() {
            console.log('chamou a função pois ela é trazida para o topo do escopo, até mesmo antes de todas as variáveis')
        }
    }

    desvendandoHoisting()
    // o JS retorna no console: Uncaught ReferenceError: Cannot access 'variavelComFuncao' before initialization
    // desvendandoHoisting2()
}