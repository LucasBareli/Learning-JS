// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função
function dobro(x) {
    console.log("O dobre de " + x + " é " + (x * 2))
  }
  dobro(5)
  dobro(7)

  // Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined
dobro()

// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
    console.log("Olá, " + nome + "!")
  }
  dizerOla("Isaac")
  dizerOla()

  // Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula
function soma(a, b) {
    console.log(a + b)
  }
  soma(1, 1)
  soma(34, 5)

  // Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  function novoUsuario(nome, tipo = "leitor", email, senha) {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  criarUsuario("Isaac", "isaac@email.com", "1234")
  novoUsuario("Isaac", "isaac@email.com", "1234")

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
  }
  function parametrosDoJeitoCerto(usuario) {
    // ...
  }
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
  parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
  const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
  }
  parametrosDoJeitoCerto(dadosDoUsuario)

  // Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calcularMedia(a, b) {
    const media = (a + b) / 2
  }
  const resultado = calcularMedia(5, 9)
  console.log(resultado)

  // Para dizer qual é a saída de uma função usamos o return
function criarProduto(nome, preco) {
    const produto = { nome, preco, estoque: 1 }
    return produto
  }
  const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000)
  console.log(notebook)

  // Também podemos jogar a saída de uma função dentro dos parâmetros de outra
console.log(criarProduto("Smartphone Samsung Galaxy", 1000))

// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
    return base * altura
  }
  console.log(areaRetangular(3, 5))
  // Ou até o retorno de outra função
  function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
  }
  console.log(areaQuadrada(8))

  // Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
    let texto = "..."
    return texto
    texto = "Olá, mundo!"
    console.log(texto)
  }
  console.log(olaMundo())

  // No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
    if (idade >= 18) {
      return "Maior de idade"
    } else {
      return "Menor de idade"
    }
  }
  console.log(maioridade(20))
  console.log(maioridade(13))

  // Escopo é o contexto onde a variável foi declarada podendo ser
// mais externo, ou mais interno (se estiver dentro de um bloco)

// Variáveis no escopo mais externo podem ser
// usadas dentro de escopos mais internos
let pokemon = "Charmander"

function evoluir() {
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

// Variáveis no escopo mais interno não podem ser
// usadas fora dele em escopos mais internos
function criarAnimal() {
  let animal = "Gato"
}

criarAnimal()
console.log(animal) // Gera erro