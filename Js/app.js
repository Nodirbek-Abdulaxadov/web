// console.log(3+3);
// console.log('3' + '3')
// console.log('3' + 3)
// console.log('3' + + 3)
// console.log(3 + + '3')
// console.log(3 + 3 - 3)
// console.log('3' + '3' - '3')

//var a = Number(prompt('enter number'));
//console.log(a / 0);

/*
if (a > 0) {
    console.log('musbat');
}
else if (a < 0) {
    console.log('manfiy')
}
else if (a == 0 ){
    console.log('nolga teng');
}
else {
    console.log('bilmadim')
}*/

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

function calculate() {
    var n1 = Number(document.getElementById('number1').value);
    var n2 = Number(document.getElementById('number2').value);

    var h1 = document.getElementById('res');
    h1.innerText = 'Natija: ' + Sum(n1, n2)
}

function Sum(a, b) {
    return a + b;
}

