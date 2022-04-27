function editNav() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("myTopnav_formulaire"); // function qui fait apparition de header dans page de formulaire et card remerciement"
    var z = document.getElementById("myTopnav_card");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    if (y.className === "topnav") {
      y.className += " responsive";
    } else {
      y.className = "topnav";
    }
    if (z.className === "topnav") {
      z.className += " responsive";
    } else {
      z.className = "topnav";
    }
  }
  
  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  
  // recouperation des buttons
  // submit button pour déclancher function qui va vérifier saisi de formulaire
  // close_card_btn bouton pour ferme
  const submit_form_btn = document.querySelector(".btn-submit");
  const close_card_btn = document.querySelector(".btn-close-card");
  const open_card = document.querySelector(".card-remerciment");
  const close_card = document.querySelector(".x-close-card");
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  // launch modal form function declanche affichage formulaire
  function launchModal() {
  modalbg.style.display = "block";
  }
  //function qui montre card remerciment, une fois formulaire est valide
  const openingCard = () => {
    open_card.classList.toggle("visible");
  };
  //Function qui ferme le formulaire
  function shutDown() {
    modalbg.style.display = "none";
  }
  // function qui ferme la card de remerciement
  const closingCard = () => {
    openingCard();
    shutDown();
  };
  //function cleaning formulaire une fois il est validé/
  function cleaning_form() {
    let inputs = document.querySelectorAll("input:not([type='radio'])");
    let city_chosen = document.forms.reserve.location;
    inputs.forEach((input) => {
      input.value = "";
    });
    city_chosen.forEach((c) => {
      c.checked = false;
    });
  }
  
  function cleaning_erreurs(){
    let mistakes = document.querySelectorAll(".mistake");
    mistakes.forEach((mistake) => {
     mistake.textContent ="";
    });
  }


  // function qui emepche utilisateur de saisir date manuellement sans utiliser calendrier
  function myFunction(e) {
    e.preventDefault();
  }
  //addeventlistener attachement declanchement des fucntions au clicks de utilisateur
  //declick function qui vérifie inputs de utilisateur dans formulaire
  submit_form_btn.addEventListener("click", checkingForm);
  //click sur button pour fermé card
  close_card_btn.addEventListener("click", closingCard);
  //click sur x pour fermé la card
  close_card.addEventListener("click", closingCard);
  //empecher utilisateur entre les date dans input en dors de calendrier
  const demo = document
    .getElementById("birthdate")
    .addEventListener("keypress", myFunction);
  
  //function qui verifie les input de user dans formulaire
  function checkingForm(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthdate").value;
    let city = document.forms.reserve.location.value;
    let number_tournament = document.getElementById("quantity").value;
    let turniej = parseFloat(number_tournament);
    let conditions = document.getElementById("checkbox1");
    const valeur_string = /^(?=.{2,50}$)[[a-zàáâäçèéêëìíîïñòóôöùúûü]+(?:['-.\s][a-z]+)*$/i;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const valeur_number = /(^\d*\.?\d*[0-9]+\d*$)|(^[0-9]+\d*\.\d*$)/;
  
    let mistake_name = document.getElementById("mistake_name");
    let mistake_lastname = document.getElementById("mistake_lastname");
    let mistake_email = document.getElementById("mistake_email");
    let mistake_city = document.getElementById("mistake_city");
    let mistake_tournament = document.getElementById("mistake_tournoi");
    let mistake_birthdate = document.getElementById("mistake_birthdate");
    let mistake_conditions = document.getElementById("mistake_conditions");
    // toutes les inputes sont vérifie
    if (
      name.match(valeur_string) &&
      lastname.match(valeur_string) &&
      email.match(emailRegex) &&
      birthdate &&
      turniej >= 0 &&
      city &&
      conditions.checked
    ) {
      // si tout les inputs sont correcte, message de alert, function de nettoyage de formulaire et déclanche et la card de remerciment s'ouvre
      cleaning_erreurs();
      alert("Merci ! Votre réservation a été reçue");
      cleaning_form();
      openingCard();
    } else {
      // les inputs sont incorrect, message erreur apparait, il s'effact par la suite
      
      if (!name.match(valeur_string)) {
        mistake_name.textContent =
        "Veuillez saisir uniquement des caractères alphabétiques, au moins 2.";
      }
      else{
        mistake_name.textContent = "";
      }
      if (!lastname.match(valeur_string)) {
        mistake_lastname.textContent =
        "Veuillez saisir uniquement des caractères alphabétiques, au moins 2.";
      }
      else{
        mistake_lastname.textContent = "";
      }
      if (!email.match(emailRegex)) {
        mistake_email.textContent = "Votre email n'est pas correct";
      }
      else{
        mistake_email.textContent = "";
      }
      if (!city) {
        mistake_city.textContent = "Vous devez choisir une option";
      }
      else{
        mistake_city.textContent = "";
      }
      if (Number.isNaN(turniej) || turniej < 0) {
        
        mistake_tournoi.textContent =
          "Vous devez entrer une chiffre entre 0 et 999";
      }
      else{
        mistake_tournoi.textContent = "";
      }
      if (!birthdate) {
        mistake_birthdate.textContent =
          "Vous devez entrer votre date de naissance";
      }
      else{
        mistake_birthdate.textContent = "";
      }
      if (!conditions.checked) {
        mistake_conditions.textContent =
          "Vous devez vérifier que vous acceptez les termes et conditions";
      }
      else{
        mistake_conditions.textContent = "";
      }
    }
  }