$(function()
{
    let numeros = '1234567890';
    let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
    $('.txtNombre').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    $('.txtDireccion').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
    $('.txtNombreEnvio').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
    $('.txtNumeroDepartamento').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })

    $('.txtTarjeta').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    $('.txtCodigoPostal').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    $('.txtCCV').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    $('.txtFecha').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    $('.txtNombreTarjeta').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
    $('.txtNombreEnvio').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
 });