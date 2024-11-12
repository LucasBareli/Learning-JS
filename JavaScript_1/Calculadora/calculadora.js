const entrada1 = prompt("Give me your first number: ")
const entrada2 = prompt("Give me your second number:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const sum = x + y
const subtraction = x - y
const multiplication = x * y
const division = x / y

alert(
    "Resultados:\n" +
    "\nSoma: " + sum +
    "\nSubtração: " + subtraction +
    "\nMultiplicação: " + multiplication +
    "\nDivisão: " + division
  )
  