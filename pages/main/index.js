
// burger menu -----------------------

const burg__btn = document.querySelector('.burger__btn');
const burger__btn__dis = document.querySelector('.burger__btn__dis');
const burger__c = document.querySelector(".burger__conteiner");
const burger__overlay = document.querySelector(".burger__overlay");
const burger__nav = document.querySelector('.burger__nav');
const closebtn = document.querySelector(".close__btn");
const popower = document.querySelector(".popup__overlay");


burg__btn.addEventListener("click", function() {

    burger__nav.classList.toggle("burger__nav__active");
    this.classList.toggle("burger__btn__dis");
    burger__c.classList.toggle('.burger__conteiner__look');
    burger__overlay.classList.toggle("hidden");
    document.body.classList.toggle("overflow");
    document.querySelector('.logo__main').classList.toggle('oppasiti__o');
  });


  burger__overlay.addEventListener("click", function() {

    burger__nav.classList.toggle("burger__nav__active");
    burg__btn.classList.toggle("burger__btn__dis");
    burger__c.classList.toggle('.burger__conteiner__look');
    burger__overlay.classList.toggle("hidden");
    document.body.classList.toggle("overflow");
    document.querySelector('.logo__main').classList.toggle('oppasiti__o');

  });


// -----------------------------------------



if(document.getElementById("make__friend")){
document.getElementById("make__friend").onclick =
 function(){window.location.href='pets.html'}
}

if(document.getElementById("get__rest")){
    document.getElementById("get__rest").onclick =
     function(){window.location.href='pets.html'}
    }


    // popup

    let popup = document.querySelector(".popup__overlay");
    let contr = document.querySelector(".conteiner__window");

    let btn = document.querySelectorAll(".slider__elem__hov");
    let close = document.querySelector(".close__btn");


    for(let i=0; i<btn.length; i++){
        btn[i].addEventListener("click", function(event){
          document.body.classList.add("overflow");
            event.preventDefault();
            popup.classList.remove("hidden");
        });
    }

    popup.addEventListener("click", function(event) {
      e = event || window.event
      if (e.target == this) {
        document.body.classList.remove("overflow");
        popup.classList.add("hidden");
      }
      
    });
    contr.addEventListener("click", function(event) {
        e = event || window.event
        if (e.target == this) {
            popup.classList.add("hidden");
            document.body.classList.remove("overflow");

        }
      });
      
      
    close.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.add("hidden");
        document.body.classList.remove("overflow");
        });

        let slider__left = document.querySelector('.arrow__one');
        let slider__right = document.querySelector('.arrow__second');


        slider__left.addEventListener("click", createFriends);
        slider__right.addEventListener("click", createFriends);
    
       function createFriends(){
        let parent = document.querySelector(".friends");
        let divs = parent.children;
        let frag = document.createDocumentFragment();
        while (divs.length) {
            frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
            
        }
        parent.appendChild(frag);
       }
      
// Popup
       
const img = document.querySelector("#img");
const img__JSON = document.querySelector('.img__JSON')
const name = document.querySelector("#name");
const type = document.querySelector("#type");
const breed = document.querySelector("#breed");
const description = document.querySelector("#description");
const age = document.querySelector("#age");
const inoculations = document.querySelector("#inoculations");
const diseases = document.querySelector("#diseases");
const parasites = document.querySelector("#parasites")

let pets = []; // 8
let fullPetsList = []; // 48
const request = new XMLHttpRequest();
request.open('GET', './pets.json');
request.onload = () => {
  pets = JSON.parse(request.response);
  console.log(pets);
}

  for(let i=0; i<btn.length; i++){
    let a = btn[i].addEventListener("click", creetElement);

    function creetElement(){
      let namePets = btn[i].querySelector("p");

      for(let j=0; j<pets.length; j++){
        if (namePets.textContent==pets[j].name){

          img__JSON.innerHTML = `<img id= "img" " src=" ${ pets[j].img } " alt="">`;
          name.innerHTML = pets[j].name;
          type.innerHTML = pets[j].type;
          breed.innerHTML = pets[j].breed;
          description.innerHTML = pets[j].description;
          age.innerHTML = pets[j].age;
          inoculations.innerHTML = pets[j].inoculations;
          diseases.innerHTML = pets[j].diseases;
          parasites.innerHTML = pets[j].parasites;
        }

      }
    }
  }

request.send();
