//Este es el manejo del modo oscuro y el modo claro de la calculadora.
function noche(){
    document.body.classList.toggle("modo-noche");
}
// Funcionamiento de la calculadora

//  Esta línea selecciona el primer hijo del elemento con el ID ‘cont-escritura’ y lo almacena en la variable display. Este elemento se utiliza para mostrar los números y resultados en la calculadora.
let display = document.getElementById('cont-escritura').children[0];

//Esta línea selecciona todos los botones dentro del elemento con el ID ‘cont-escritura’ y los almacena en un array llamado buttons. 
let buttons = Array.from(document.getElementById('cont-escritura').getElementsByTagName('button'));

// Estas líneas declaran dos variables, operator y value, que se utilizan para almacenar el operator actual (como ‘+’, ‘-’, ‘*’, ‘/’) y el value actual ingresado por el usuario, respectivamente.
let operator = ''; 
let value = '';

// Este código agrega un evento de clic a cada botón en el array buttons. Cuando se hace clic en un botón, se ejecuta la función de flecha.
buttons.map( button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        switch(buttonText) {
            //se almacena el operator y el value actual, y se borra el display.
            case '+':
            case '-':
            case '*':
            case '/':
                operator = buttonText;
                value = display.value;
                display.value = '';
                break;
            // se evalúa la expresión actual y se muestra el resultado en el display.
            case '=':
                display.value = eval(value + ' ' + operator + ' ' + display.value);
                break;
            //se borra el display.
            case 'AC':
                display.value = '';
                break;
            //se borra el último carácter en el display.
            case 'B':
                display.value = display.value.slice(0, -1);
                break;
            //se divide el value actual en el display por 100.
            case '%':
                display.value = parseFloat(display.value) / 100;
                break;
            default:
                display.value += buttonText;
        }
    });
});
