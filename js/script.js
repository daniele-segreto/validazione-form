$(document).ready(function () {
    // Funzione per verificare se è stata inserita un email corretta:
    function isEmail(email) {
        // Verifica i caratteri da contenere
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // Test che ritorna true o false se il valore supera l'espressione regolare
        return regex.test(email);
    }

    $("#submitButton").click(function () {
        // Verifico il valore che stiamo passando è un'email valida (se è true o false)
        // alert(isEmail($("#email").val()));

        // Variabile vuota da riempire con un messaggio di convalida
        var errorMessage = "";
        // Variebile che serve per dire se abbiamo un campo "non compilato"
        var fieldsMissing = "";

        // Se il campo email è vuoto, aggiungiamo il valore email
        if ($("#email").val() == "") {
            fieldsMissing += "<br>Email";
        }
        // Se il campo phone è vuoto, aggiungiamo il valore phone
        if ($("#phone").val() == "") {
            fieldsMissing += "<br>Phone";
        }
        // Se il campo password è vuoto, aggiungiamo il valore password
        if ($("#password").val() == "") {
            fieldsMissing += "<br>Password";
        }
        // Se il campo passwordConfirm è vuoto, aggiungiamo il valore Confirm Password
        if ($("#passwordConfirm").val() == "") {
            fieldsMissing += "<br>Confirm Password";
        }

        // Se il campo filedsMissing non è vuoto, cioè se non c'è un messaggio di errore, aggiungo ai messaggi generali anche il problema degli errori (fieldsissing)
        if (fieldsMissing != "") {
            errorMessage += "<p>Mancano i seguenti campi:</p>" + fieldsMissing;
        }

        // Se l'email non è corretta inseriamo un messaggio di errore
        if (isEmail($("#email").val()) == false) {
            errorMessage += "<p>La tua email non è valida</p>";
        }

        // Controllo se il valore del cellulare è un numero
        if ($.isNumeric($("#phone").val()) == false) {
            errorMessage += "<p>Devi inserire dei numeri</p>";
        }

        // Controllo se le passwoed inserite sono diverse
        if ($("#password").val() != $("#passwordConfirm").val()) {
            errorMessage += "<p>Le password non coincidono</p>";
        }

        // alert(errorMessage);

        // Verifichiamo che non ci siano degli errori, cioè che la variabile errorMessage, non sia vuota:

        // Se la variabile è vuota, inserisci nell'html i messaggi di errore
        if (errorMessage != "") {
            $("#errorMessage").html(errorMessage);
        }
        // Altrimenti, se la variabile è vuora, cioè se non ci sono errori (se tutti i campi sono stati compilati correttamente)
        else {
            $("#successMessage").show(); // mostro il div contentente il messaggio di Successo (che era di display-none)
            $("#errorMessage").hide(); // nascondo gli eventuali messaggi di errore precedenti
        }
        
    });

});