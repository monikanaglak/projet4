function editNav() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("myTopnavmonika");
  if (x.className === "topnav")  {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  if (y.className === "topnav")  {
    y.className += " responsive";
  } else {
    y.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// recouperation des buttons 
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
//function cleaning formulaire une fois validé/
function monika(){
  let inputs = document.querySelectorAll('input');
  let city_chosen = document.forms.reserve.location;
  inputs.forEach(input =>{
  input.value = '';
  });
  city_chosen.forEach(c =>{
  c.checked = false;
  })
};
//function that clean up input user, problem with date in consol
function cleaning(){
  
 /* 
  let inputs = document.querySelectorAll('input');
  inputs.forEach(input=>{
    input.value = '';
    let city_chosen = document.forms.reserve.location;
    city_chosen.forEach(c =>{
      c.checked = false;
    })*/
    setTimeout(disappearing_message,5000)
  }
/*}*/
  function disappearing_message(){
    let mistakes = document.querySelectorAll('.mistake');
    mistakes.forEach(mistake =>{
      mistake.classList.add('fade-out');
  })
}

//function that shows card once form is valid
submit_form_btn.addEventListener("click", checkingForm);
close_card_btn.addEventListener("click", closingCard);
close_card.addEventListener("click",closingCard);





//function that check input of user in the form
function checkingForm(e){
  e.preventDefault();
  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let birthdate = document.getElementById("birthdate").value;
  let city = document.forms.reserve.location.value;
  let number_tournoi = document.getElementById("quantity").value;
  let turniej = parseFloat(number_tournoi);
  const  valeur_string = /^[a-zA-Z]+$/;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let mistake_name= document.getElementById("mistake_name");
  let mistake_lastname = document.getElementById("mistake_lastname");
  let mistake_email = document.getElementById("mistake_email");
  let mistake_city = document.getElementById("mistake_city");
  let mistake_tournoi = document.getElementById("mistake_tournoi");
  let mistake_birthdate = document.getElementById("mistake_birthdate");

  if(((name.match(valeur_string))) && ((lastname.match(valeur_string))) && (email.match(emailRegex))  && (birthdate) && (!isNaN(turniej)) && (city)) 
  {   
    alert("Merci ! Votre réservation a été reçue");
    monika();
    openingCard();
  }
  else {
    cleaning()
      if (!name.match(valeur_string)){
      mistake_name.textContent= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
      if (!lastname.match(valeur_string)){
      mistake_lastname.textContent= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
      if (!email.match(emailRegex)){
      mistake_email.textContent= "Your email n'est pas correct";
    }
      if(!city){
      mistake_city.textContent= "Vous devez choisir une option";
    }
      if(isNaN(turniej)){
      mistake_tournoi.textContent = "Vous devez soumettre une chiffre";
    
    }
      if(!birthdate){
      mistake_birthdate.textContent = "Vous devez entre date de votre d'anniversaire";
    }
  }
 
}


