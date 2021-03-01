$(function(){
    $("form").submit(function(e) {
        var peso = $('#peso').val();
        var altura = parseFloat($('#altura').val().replace(',', '.'));
        var display = $('#final');

        var IMC = peso / altura**2;
        IMC = IMC.toFixed(2);

        var imcValue = 'none'
        if(IMC < 16) {
            imcValue = 'Magreza Grave'
        }else if(IMC >= 16 && IMC <= 16.99) {
            imcValue = 'Magreza Moderada'
        }else if(IMC >= 17 && IMC <= 18.49) {
            imcValue = 'Magreza Leve'
        }else if(IMC >= 18.50 && IMC <= 24.99) {
            imcValue = 'Saudável'
        }else if(IMC >= 25 && IMC <=29.99) {
            imcValue = 'Sobrepeso'
        }else if(IMC >= 30 && IMC <= 34.99) {
            imcValue = 'Obesidade Grau I'
        }else if(IMC >= 35 && IMC <= 39.99) {
            imcValue = 'Obesidade Grau II'
        }else if(IMC >= 40) {
            imcValue = 'Obesidade Grau III'
        }

        switch(imcValue) {
            case 'Magreza Grave':
                display.text(`${IMC}. Magreza Grave`)
                $('.Magreza-Grave').css('background-color', 'red')
                setTimeout(() => {
                    $('.Magreza-Grave').css('background-color', '#f2dede')
                }, 1000);
                break;
            case 'Magreza Moderada':
                display.text(`${IMC}. Magreza Moderada`)
                $('.Magreza-Moderada').css('background-color', 'yellow')
                setTimeout(() => {
                    $('.Magreza-Moderada').css('background-color', '#fcf8e3')
                }, 1000);
                break;
            case 'Magreza Leve':
                display.text(`${IMC}. Magreza Leve`)
                $('.Magreza-Leve').css('background-color', 'yellow')
                setTimeout(() => {
                    $('.Magreza-Leve').css('background-color', '#fcf8e3')
                }, 1000);
                break;
            case 'Saudável':
                display.text(`${IMC}. Saudável`)
                $('.Saudável').css('background-color', 'green')
                setTimeout(() => {
                    $('.Saudável').css('background-color', '#dff0d8')
                }, 1000);
                break;
            case 'Sobrepeso':
                display.text(`${IMC}. Sobrepeso`)
                $('.Sobrepeso').css('background-color', 'yellow')
                setTimeout(() => {
                    $('.Sobrepeso').css('background-color', '#fcf8e3')
                }, 1000);
                break;
            case 'Obesidade Grau I':
                display.text(`${IMC}. Obesidade Grau I`)
                $('.Obesidade-Grau-I').css('background-color', 'yellow')
                setTimeout(() => {
                    $('.Obesidade-Grau-I').css('background-color', '#fcf8e3')
                }, 1000);
                break;
            case 'Obesidade Grau II':
                display.text(`${IMC}. Obesidade Grau III`)
                $('.Obesidade-Grau-II').css('background-color', 'red')
                setTimeout(() => {
                    $('.Obesidade-Grau-II').css('background-color', '#f2dede')
                }, 1000);
                break;
            case 'Obesidade Grau III':
                display.text(`${IMC}. Obesidade Grau III`)
                $('.Obesidade-Grau-III').css('background-color', 'red')
                setTimeout(() => {
                    $('.Obesidade-Grau-III').css('background-color', '#f2dede')
                }, 1000);
                break;
        }

        return false;
    })
})



// Abaixo de 16,00 	Magreza grave
// Entre 16,00 e 16,99 	Magreza moderada
// Entre 17 e 18,49 	Magreza Leve
// Entre 18,50 e 24,99 	Saudável
// Entre 25 e 29,99 	Sobrepeso
// Entre 30 e 34,99 	Obesidade Grau I
// Entre 35 e 39,99 	Obesidade Grau II
// 40 ou acima 	Obesidade Grau III