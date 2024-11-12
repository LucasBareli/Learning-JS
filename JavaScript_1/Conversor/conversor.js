const metro = parseFloat(prompt("Write how many meters: "))
const conversor = prompt("Write what do you do\n1-mm\n2-cm\n3-dm\n4-dam\n5-hm\n6-km")
let new_value
switch(conversor){
    case "1":
        new_value = metro * 1000
        alert("A quantidade " + metro +  "m" + "\nÉ igual a : " + new_value + "mm")
        break
    case "2":
        new_value = metro * 100
        alert("A quantidade " + metro +  "m" + "\nÉ igual a : " + new_value + "cm")
        break
    case "3":
        new_value = metro * 10
        alert("A quantidade " + metro +  "m" + "\nÉ igual a : " + new_value + "dm")
        break
    case "4":
        new_value = metro / 10
        alert("A quantidade " + metro +  "m" + "\nÉ igual a : " + new_value + "dam")
        break
    case "5":
        new_value = metro / 100
        alert("A quantidade " + metro +  "m" + "\nÉ igual a : " + new_value + "hm")
        break
    case "6":
        new_value = metro / 100
        alert("A quantidade " + metro + "m" + "\nÉ igual a : " + new_value + "km")
        break
    default:
        alert("O que você digitou esta errado!")
}