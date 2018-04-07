$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validation Nom ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Écrire votre Nom et Prénom</p>';
            $('#names').css("border-bottom-color", "#010A0F")
        } else{
            $('#names').css("border-bottom-color", "#06283B")
        }

        // Validation Courrier ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Veuillez saisir votre Courrier electronique</p>';
            $('#email').css("border-bottom-color", "#010A0F")
        } else{
            $('#email').css("border-bottom-color", "#06283B")
        }

        // Validation Message ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Écrire votre message</p>';
            $('#mensaje').css("border-bottom-color", "#010A0F")
        } else{
            $('#mensaje').css("border-bottom-color", "#06283B")
        }

        // ENVOYER MENSSAGE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Erreurs trouvés</h3>'+
                                        errores+
                                        '<span id="btnClose">Sortir</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        //FERMER MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
