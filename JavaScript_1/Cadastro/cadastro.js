let first_name 
let surname
let study
let year_born

first_name = prompt("Write your name: ")
surname = prompt("Write your surname: ")
study = prompt("Write what do you want study: ")
year_born = prompt("Write when you born(Only Year): ")

alert(
    first_name + " " + surname + " Cadastrado com sucesso!\n"+
    "\nStudy: " + study +
    "\nYears Old: " + (2024 - year_born)
)