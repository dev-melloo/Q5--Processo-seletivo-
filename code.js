num1 = prompt("Primeiro numero")
num2 = prompt("Segundo numero")
num3 = prompt("Terceiro numero")
num4 = prompt("Quarto numero")
num5 = prompt("Quinto numero")

if (num1 % 3 == 0){
    console.log("fizz")
}
if (num1 % 5 == 0){
    console.log("buzz")
}
if (num1 % 3 == 0 && num1 % 5 == 0){
    console.log("fizzbuzz")
}
