deployed at: https://calculatorinnowise.web.app

Task: https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit#heading=h.5dt3hghpa22f

How to run the app:
 npm run build:dev for development build,
 npm run build:prod fro production build.


Buttons:
red, yellow, green buttons: Changes the theme to the color of the button.
 % :devides the last written number by 100.
 -/+ :changes + or - sign to the opposite sign (only if the last sign is + or -, for example, if we have type 2+2*2 and press +/- sign, nothing will change).
 AC : Cleares the input field.
 ÷ : Adds a / (devision) sign to the end of the input field.
 * : Adds a * (multiplication) sign to the end of the input field.
 + :Adds a + (plus) sign to the end of the input field.
 - :Adds a - (minus) sign to the end of the input field.
 1, 2, ... , 9, 0 : Adds a number corresponding to the button to the end of the input field.
 . :Adds a dot to the end of the input field(wont add a dot if the last number has a dot already).
 = :Calculates the result of the equation, clears the input field and adds the result to the input field.


Dev comment: Не был уверен, нужно ли делать калькулятор способный на просчитывание выражений с более чем 1 знаком, так что сделал такой.
 Вычисления c дробями работают точно (кроме пары очень специфических случаев),
 так же калькулятор поддерживает числа записаные в экспоненциальной форме(через е) до определенного уровня(проверял до 3=х значных е-ххх, должен работать до 5-значных (е-ххххх) но не проверял)
