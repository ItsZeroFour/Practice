let a = ''      //  First number
let b = ''      //  Second number
let sign = ''   //  Знако операции
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'x','/']

// Monitor
const out = document.querySelector('.calc-screen p')

function clearAll() {
    a = ''                  //  first number and result
    b = ''                  //  second number
    sign = ''               //  знак
    finish = false
    out.textContent = 0     //  Вывод нуля при очистке
}

document.querySelector('.ac').onclick = clearAll
document.querySelector('.buttons').onclick = (event) => {
    // Button is not pass
    if(!event.target.classList.contains('btn')) return
    // Button "ac" is pass
    if(event.target.classList.contains('ac')) return
    
    out.textContent = ''
    // Give pass button (При нажатии на кнопку, ее содержимое будет содержаться в переменной)
    const key = event.target.textContent
    // Если нажато 0-9 или "."
    if (digit.includes(key)) {
        if (b === '' & sign === '') {
            a+=key
            out.textContent = a                 //  Вывод нажатой цифры на экран 
        } else if (a!== '' && b!== '' && finish) {
            b = key
            finish = false
            out.textContent = b
        } else {
            b += key
            out.textContent = b
        }
        console.table(a, b, sign);
        return
    }
    // Проверка на нажатие знаком деления, умножения...
    if (action.includes(key)) {
        sign = key
        out.textContent = sign
        console.table(sign);
        return
    }
    // Pass "="
    if (key === '=') {
        if (b === '') b = a                         //  Складывания числа само на себя, если нажать (число, +, =)
        switch (sign) {
            case "+":
                a = (+a) + (+b)
                break
            case "-":
                a = a - b
                break
            case "x":
                a = a * b
                break
            case "/":
                //  Если разделить на "0", то выдаст ошибку
                if (b === '0') {
                    out.textContent = 'Error'
                    a = ''
                    b = ''
                    sign = ''
                    return
                }
                a = a / b
                break
        }
        finish = true
        out.textContent = a
        console.table(a, b, sign)
    }
}