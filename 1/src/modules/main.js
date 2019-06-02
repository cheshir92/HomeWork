function setOperator() {
    let textValue1 = document.getElementById('text1').value;
    let textValue2 = document.getElementById('text2').value;
    let result;
    let act = document.getElementById('act').value;
    switch (act) {
        case '+':
            result = parseInt(textValue1) + parseInt(textValue2);

            break;
        case '-':
            result = parseInt(textValue1) - parseInt(textValue2);

            break;
        case '*':
            result = parseInt(textValue1) * parseInt(textValue2);

            break;
        case '/':
            result = parseInt(textValue1) / parseInt(textValue2);
            break;
        default:
            console.log('enter correct operator');
    }

    console.log(result);
}