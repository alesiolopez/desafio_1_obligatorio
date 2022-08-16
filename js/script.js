let monto;
let meses;

function Solicitar_Prestamo(){
    //Tomamos los datos de los inputs y los guardamos en las variables.
    monto = document.getElementById("monto_input").value;
    meses = document.getElementById("meses_input").value;

    //Igreso un condicional para que le diga al usuario que debe ingresar datos antes de continuar. Luego muestra los cálculos en el html.
    if(monto == "" && meses == "" || monto == "" || meses == ""){
        document.getElementById("mostrar").innerHTML = `
        COMPLETE LOS CAMPOS PARA GENERAR EL CÁLCULO.
        `
    } else{
        //Cambio el formato de la moneda de la variable.
        let monto_formato = Intl.NumberFormat('ARS', { style: 'currency', currency: 'ARS' }).format(monto);
        
        //Realizo los cálculos de los intereses sobre los meses. Y les doy formato moneda a la variable.
        let prestamo_mes_interes = parseFloat((monto / meses) * 1.54);
        let prestamo_mes_interes_formato = Intl.NumberFormat('ARS', { style: 'currency', currency: 'ARS' }).format(prestamo_mes_interes);
        
        let total_a_pagar = prestamo_mes_interes * meses;
        let total_a_pagar_formato = Intl.NumberFormat('ARS', { style: 'currency', currency: 'ARS' }).format(total_a_pagar);

        document.getElementById("mostrar").innerHTML = `
        Monto solicitado: <b>${monto_formato}</b>. <br>
        Plazo de pago: <b>${meses}</b> meses. <br>
        Interes del: <b>54%</b>. <br>
        Cuota mensual: <b>${prestamo_mes_interes_formato}</b>. <br>
        Total a pagar del préstamo: <b>${total_a_pagar_formato}</b>.
        `
    }
}