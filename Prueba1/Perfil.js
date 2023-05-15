$(function()
{
    let numeros = '123457890';
    let letras = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚáéíóú ';

    $('.txtUsername').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which); 
        if(emailRegex.indexOf(caracter)<0) // verifica si el caracter esta en el patrón
            return false; // evita que se escriba el caracter presionado
    });
    $('.txtPassword').keypress(function(e)
    {
        // obtiene el codigo del caracter presionado y es convertido a 
        // el mismo caracter
        let caracter = String.fromCharCode(e.which); 
        if(emailRegex.indexOf(caracter)<0) // verifica si el caracter esta en el patrón
            return false; // evita que se escriba el caracter presionado
    });

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
    $('.btnRegistrar').click(function()
    {
        if(!$('.txtUsername').val())
        {
            alert('Falta de nombre de usuario');
            $('.txtUsername').focus();
        }
        else if(! esValidoElUsername($('.txtUsername').val()))
        {
            alert('nombre de usuario no es válido');
            $('.txtUsername').focus();
        }
        else if(!$.trim($('.txtPassword').val()))
        {
            alert('Falta el nombre');
            $('.txtPassword').focus();
        }
    });
    

    
})