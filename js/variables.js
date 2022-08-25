const moneda = document.getElementById("txtMoneda");
const monto = document.getElementById("txtMonto");
const btnAceptar = document.getElementById("txtAceptar");
const btnConvertir = document.getElementById("txtConversion");

    
btnAceptar.addEventListener("click", CapturarDatos);
btnConvertir.addEventListener("click", verEstadisticas);

function CapturarDatos() {

    if (monto.value != "" && moneda.value != "")
    {
    const eleccion = moneda.value.toLowerCase();
    const ingreso = new divisas(monto.value, eleccion);
    ingreso.conversion();

    conversiones.push(new divisas(monto.value, moneda.value));
    localStorage.setItem("conversiones", JSON.stringify(conversiones));

    moneda.value = "";
    monto.value = "";

    moneda.focus();

    console.log(recuperarDatosdeLS());
    }
    else
    {
        alert("Debe completar todos los campos, por favor ingrese nuevamente");
    }
}

function recuperarDatosdeLS() 
{
    if (localStorage.conversiones)
    {
        const converGuardados =JSON.parse(localStorage.getItem("conversiones"))
        console.table(converGuardados);
    }
}


function verEstadisticas() {
    const converMon = document.getElementById("lblConversion");
    const valorfinal = montoFinal;
    converMon.innerText = valorfinal;

}