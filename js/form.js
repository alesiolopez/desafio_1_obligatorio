//PARA  FIJAR LOS LABEL ARRIBA AL TENER CARACTERES EN EL INPUT. FORMULARIO DEL HTML

let inputs = document.getElementsByClassName('formulario_input');
for(let i = 0; i <= inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(inputs[i].value.length >=1){
            inputs[i].nextElementSibling.classList.add('fijar');
        }else{
            inputs[i].nextElementSibling.classList.remove('fijar');
        }
    })
}