
let valid = false
$(document).ready(function () {
   $("#button").click(function () {
      //Check if fields are empty
      if (($("#name").val() == "") || ($("#phone").val() == "") || ($("#email").val() == "") || ($("#password").val() == "")
         || ($("#confirmPass").val() == "")) {
         $("span").addClass("error").fadeIn(2000).text("Veuillez remplir tous les champs s'il vous plait")
         return valid
      }
      // condition for a valid name
      if (($("#name").val().length < 3)) {
         $("span").addClass("error").fadeIn(2000).text("Le champ nom doit avoir au moins 3 caractères")
         return valid
      }
      //  phone number must be a ciphers
      if (!$.isNumeric($("#phone").val())) {
         $("span").addClass("error").fadeIn(2000).text("Le champ téléphone ne doit contenir que de chiffres")      
         return valid
      }
     // check a email valid
      if (!($("#email").val().endsWith("@gmail.com"))) {
         $("span").addClass("error").fadeIn(2000).text("Votre adresse email doit se terminer par @gmail.com")
         return valid
      }
      // password must have at least 8 caracters
      else if ($("#password").val().length < 8) {
         $("span").addClass("error").fadeIn(2000).text("Votre mot de passe doit avoir au moins 8 caractères")
         return valid
      }
      // confirm password
      else if ($("#password").val() != $("#confirmPass").val()) {
         $("span").addClass("error").fadeIn(2000).text("Votre mot de passe ne correspond pas")
         return valid
      }
   })
})




