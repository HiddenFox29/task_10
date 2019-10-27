document.addEventListener('DOMContentLoaded', function() {

    $('btn').onclick = function () {

    let unswer = confirm('Желаете что-то посчитать?')
    if(unswer){

        let a = Number(prompt('Введите число'));
        let b = Number(prompt('Введите число'));

        let operation = Number(prompt('Введите код операции:\n1 - вычитание;\n2 - сложение;' +
                                    '\n3 - умножение;\n4 - деление'))
        let result = null;
        switch (operation){
            case 1:
                result = substract(a,b);
                alert(result)
                break;
            case 2:
                result = add(a,b);
                alert(result)
                break;
            case 3:
                result = multiply(a,b);
                alert(result)
                break;
            case 4:
                result = devide(a,b);
                alert(result)
                break;
            default:
                alert('Что-то пошло не так')
                break;
        }
    } else{
        alert('Ok! Если, что жмите на кнопку.');
    }
};
});




