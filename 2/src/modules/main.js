function myfunk() { //dz_1
    cleanColor()
    let color1 = document.getElementsByTagName('input')[0].value;
    document.body.style.backgroundColor = color1;
}

function colorChange() { //dz_2
    cleanColor()
    let colorNum = document.getElementsByTagName('select')[0].value;
    document.body.style.backgroundColor = colorNum;
}

function myfun() { //dz_3
    cleanColor()
    a = document.getElementsByTagName('select')[1].value;
    document.body.className = a;

}

function myFunDz4() { //dz_4
    cleanColor()
    a = document.getElementsByTagName('input')[1].value;
    document.body.style.setProperty('--testColor', a);
}

function myFunDz5(a) { //dz_5
    cleanColor()
    document.body.style.setProperty('--testColor', a.value);
}

function cleanColor() {
    document.body.style.backgroundColor = '';
    document.body.className = '';
}