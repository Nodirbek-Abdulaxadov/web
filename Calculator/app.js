var scr = document.getElementById('scr');

function number_click(i) {
    if (scr.innerText == '0') {
        scr.innerText = '';
    }
    
    scr.innerText += i;
}

function Cls() {
    scr.innerText = '0';
}

function backspace() {
    if (scr.innerText.length > 1) {
        scr.innerText = scr.innerText.substring(0, scr.innerText.length - 1);
    }
    else {
        Cls();
    }
}

function compute() {
    scr.innerText = nerdamer(scr.innerText,{x:6}).evaluate();
}