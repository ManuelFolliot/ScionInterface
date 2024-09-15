$(document).ready(function() {
    console.log("Coucou ajax");
    //On détecte les changements dans le champ de l'email
    $('#email-field').on('input', function(){
        const email = $(this).val();
        const emailError = $('#email-error');
        const submitBtn = $('#submit-btn');

        if(email.length > 0){
            $.ajax({
                url: checkEmailUrl, // utilisation d'une variable globale définie dans le Twig
                method: 'GET',
                data: {email: email},
                success: function(response){
                    if (response === 'taken'){
                        emailError.text('Cette adresse email est déjà utilisée.');
                        submitBtn.prop('disabled', true);
                    } else {
                        emailError.text('');
                        submitBtn.prop('disabled', false);
                    }
                },
                error: function(){
                    emailError.text('Une erreur s\'produite lors de la vérification de l\'adresse email.');
                }
            });
        } else {
            emailError.text('');
            submitBtn.prop('disabled', false);
        }
    });
});