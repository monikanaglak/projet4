function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

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
//function that shows after submiting form, shows card thank you
const openingCard = () =>{
  open_card.classList.toggle('visible')
}
//Function that close form
function shutDown(){
  modalbg.style.display = "none";
}
// function that close card thank you
const closingCard = () =>{
  openingCard();
  shutDown();
}
//function that check input of user in the form
function checkingForm(e){
  e.preventDefault();
  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let birthdate = document.getElementById("birthdate").value;
  let birthdate_test = document.forms.reserve.birthdate.value;
  let city = document.forms.reserve.location.value;
  let number_tournoi = document.getElementById("quantity").value;
  const  valeur_string = /^[a-zA-Z]+$/;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let mistake_name= document.getElementById("mistake_name");
  let mistake_lastname = document.getElementById("mistake_lastname");
  let mistake_email = document.getElementById("mistake_email");
  let mistake_city = document.getElementById("mistake_city");
  let mistake_tournoi = document.getElementById("mistake_tournoi");
  let mistake_birthdate = document.getElementById("mistake_birthdate");
  
  if(((name.match(valeur_string)))&& ((lastname.match(valeur_string))) && (email.match(emailRegex)) && (city.length > 0) &&(number_tournoi !== ""))
  {   
    console.log(birthdate_test);
    alert("Merci ! Votre réservation a été reçue");

    openingCard();
  }
  
  else if (!name.match(valeur_string)){
    mistake_name.textContent= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  else if (!lastname.match(valeur_string)){
    mistake_lastname.textContent= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  else if (!email.match(emailRegex)){
    mistake_email.textContent= "Your input is not correct";
  }
  else if(city.length == 0){
    mistake_city.textContent= "Vous devez choisir une option.";
  }
  else if(number_tournoi == ""){
    mistake_tournoi.textContent = "Put a number";
  }
  else if(birthdate == ""){
    mistake_birthdate.textContent = "vous devrez entre votre date d'anniversaire";
  }
  
}


//function that shows card once form is valid
submit_form_btn.addEventListener("click", checkingForm);
close_card_btn.addEventListener("click", closingCard);
close_card.addEventListener("click",closingCard);

