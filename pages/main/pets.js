
// burger menu -----------------------

let burg__btn = document.querySelector('.burger__btn');
let burger__btn__dis = document.querySelector('.burger__btn__dis');
let burger__c = document.querySelector(".burger__conteiner");
let burger__overlay = document.querySelector(".burger__overlay");
let burger__nav = document.querySelector('.burger__nav');


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


       //parce JSON

let pets = []; // 8
let fullPetsList = []; // 48
const request = new XMLHttpRequest();
request.open('GET', './pets.json');
request.onload = () => {};
fetch('./pets.json').then(res => res.json()).then(list => {
  pets = list;

  fullPetsList = (() => {
    let tempArr = [];

    for (let i = 0; i < 6; i++) {
      const newPets = pets;

      for (let j = pets.length; j > 0; j--) {
        let randInd = Math.floor(Math.random() * j);
        const randElem = newPets.splice(randInd, 1)[0];
        newPets.push(randElem);
      }

      tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
  })();

  fullPetsList = sort863(fullPetsList);

  createPets(fullPetsList);

  document.querySelector("#currentPage").innerText = (currentPage+1).toString();

  for (let i = 0; i < (fullPetsList.length / 6); i++) {
    const stepList = fullPetsList.slice(i * 6, (i * 6) + 6);

    for (let j = 0; j < 6; j++) {
      stepList.forEach((item, ind) => {
        if ( item.name === stepList[j].name && (ind !== j) ) {
          document.querySelector("#pets").children[(i * 6) + j].style.border = '5px solid red';
        }
      })
    }
  }

})

const createPets = (petsList) => {
  const elem = document.querySelector("#pets");
  elem.innerHTML += createElements(petsList);
  const curd__button = document.querySelectorAll('.card');
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
    for(let i=0; i<curd__button.length; i++){
      let a = curd__button[i].addEventListener("click", creetElementPets);

      function creetElementPets(){
        let namePets = curd__button[i].querySelector("p");
          document.body.classList.add("overflow");
            popup.classList.remove("hidden");
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
}

createElements = (petsList) => {
  let str = '';
  for (let i = 0; i < petsList.length; i++) {
    str += `<div class = "card"><img src=" ${ petsList[i].img } ">
    <div class = "card__discr"><p class = "card__p">${petsList[i].name}</p>
    <button class = "card__button">Lern more</button>
    </div>
    </div>`;
  }
  return str;
}

request.send();

const sort863 = (list) => {
  let unique8List = [];
  let length = list.length;
  for (let i = 0; i < length / 8; i++) {
    const uniqueStepList = [];
    for (j = 0; j < list.length; j++) {
      if (uniqueStepList.length >= 8) {
        break;
      }
      const isUnique = !uniqueStepList.some((item) => {
        return item.name === list[j].name;
      });
      if (isUnique) {
        uniqueStepList.push(list[j]);
        list.splice(j, 1);
        j--;
      }
    }
    unique8List = [...unique8List, ...uniqueStepList];
  }
  list = unique8List;
  list = sort6recursively(list);

  return list;
}

const sort6recursively = (list) => {
  const length = list.length;
  for (let i = 0; i < (length / 6); i++) {
    const stepList = list.slice(i * 6, (i * 6) + 6);
    for (let j = 0; j < 6; j++) {
      const duplicatedItem = stepList.find((item, ind) => {
        return item.name === stepList[j].name && (ind !== j);
      });
      if (duplicatedItem !== undefined) {
        const ind = (i * 6) + j;
        const which8OfList = Math.trunc(ind / 8);
        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);
        sort6recursively(list);
      }
    }
  }
  return list;
}

// Pagination

let currentPage = 0;
const prevPage = document.querySelector("#prevPage");
const prevPageAll = document.querySelector("#prevPageAll");
const nextPage = document.querySelector("#nextPage");
const nextPageAll = document.querySelector("#nextPageAll");

prevPage.addEventListener('click', (e) => {
  if (document.querySelector("body").offsetWidth > 319 && document.querySelector("body").offsetWidth < 768) {
    if (currentPage > 0) {
      currentPage--;
      if( currentPage == 0){
        prevPage.classList.add('passive');
        prevPage.classList.remove('active');
        prevPageAll.classList.add('passive');
        prevPageAll.classList.remove('active');
      }
      else{
      }

      if(currentPage !==15){
        nextPage.classList.add('passive');
        nextPage.classList.add('active');
        nextPageAll.classList.remove('passive');
        nextPageAll.classList.add('active');
      }
      
    }
    document.querySelector("#pets").style.top = `calc(0px - ${1395 * currentPage}px)`;
    document.querySelector("#currentPage").innerText = (currentPage+1).toString();
  }
  if (document.querySelector("body").offsetWidth > 767 && document.querySelector("body").offsetWidth < 1280) {
      if (currentPage > 0) {
        currentPage--;
        if( currentPage == 0){
          prevPage.classList.add('passive');
          prevPage.classList.remove('active');
          prevPageAll.classList.add('passive');
          prevPageAll.classList.remove('active');
        }
        else{
        }
        if(currentPage !==7){
          nextPage.classList.add('passive');
          nextPage.classList.add('active');
          nextPageAll.classList.remove('passive');
          nextPageAll.classList.add('active');
        }
      }
      document.querySelector("#pets").style.top = `calc(0px - ${1425 * currentPage}px)`;
      document.querySelector("#currentPage").innerText = (currentPage+1).toString();
  }
  else if (document.querySelector("body").offsetWidth > 1279){
        if (currentPage > 0) {
          currentPage--;
          if( currentPage == 0){
            prevPage.classList.add('passive');
            prevPage.classList.remove('active');
            prevPageAll.classList.add('passive');
            prevPageAll.classList.remove('active');
          }
          else{
          }
          if(currentPage !==5){
            nextPage.classList.add('passive');
            nextPage.classList.add('active');
            nextPageAll.classList.remove('passive');
            nextPageAll.classList.add('active');
          }
        }
        document.querySelector("#pets").style.top = `calc(0px - ${950 * currentPage}px)`;
        document.querySelector("#currentPage").innerText = (currentPage+1).toString();
      }
});

nextPage.addEventListener('click', (e) => {
  if (document.querySelector("body").offsetWidth > 319 && document.querySelector("body").offsetWidth < 768) {
    if (currentPage < (document.querySelector("#pets").offsetHeight / 1395) - 1) {
      currentPage++;
      if( currentPage == 15){
        nextPage.classList.add('passive');
        nextPage.classList.remove('active');
        nextPageAll.classList.add('passive');
        nextPageAll.classList.remove('active');
      }
      else {
        prevPage.classList.add('active');
        prevPageAll.classList.add('active');
      }
    }
    document.querySelector("#pets").style.top = `calc(0px - ${1395 * currentPage}px)`;
    document.querySelector("#currentPage").innerText = (currentPage+1).toString();
  }
  if (document.querySelector("body").offsetWidth > 767 && document.querySelector("body").offsetWidth < 1280) {
        if (currentPage < (document.querySelector("#pets").offsetHeight / 1425) - 1) {
          currentPage++;
          if( currentPage == 7){
            nextPage.classList.add('passive');
            nextPage.classList.remove('active');
            nextPageAll.classList.add('passive');
            nextPageAll.classList.remove('active');
          }
          else {
            prevPage.classList.add('active');
            prevPageAll.classList.add('active');
          }
        }
        document.querySelector("#pets").style.top = `calc(0px - ${1425 * currentPage}px)`;
        document.querySelector("#currentPage").innerText = (currentPage+1).toString();   
    }
    else if (document.querySelector("body").offsetWidth > 1279){
      if (currentPage < (document.querySelector("#pets").offsetHeight / 950) - 1) {
        currentPage++;
        if( currentPage == 5){
          nextPage.classList.add('passive');
          nextPage.classList.remove('active');
          nextPageAll.classList.add('passive');
          nextPageAll.classList.remove('active');
        }
        else {
          prevPage.classList.add('active');
          prevPageAll.classList.add('active');
        }
      }
      document.querySelector("#pets").style.top = `calc(0px - ${950 * currentPage}px)`;
      document.querySelector("#currentPage").innerText = (currentPage+1).toString();
    }
});

nextPageAll.addEventListener('click', (e) => {
  if (document.querySelector("body").offsetWidth > 319 && document.querySelector("body").offsetWidth < 768) {
      if(currentPage!=15){
        document.querySelector("#currentPage").innerText = (currentPage=16).toString();
        currentPage=15;
        document.querySelector("#pets").style.top = `calc(0px - ${1395 * currentPage}px)`;
        nextPage.classList.add('passive');
        nextPage.classList.remove('active');
        nextPageAll.classList.add('passive');
        nextPageAll.classList.remove('active');
        prevPage.classList.remove('passive');
        prevPage.classList.add('active');
        prevPageAll.classList.remove('passive');
        prevPageAll.classList.add('active');
      }
    }
    if (document.querySelector("body").offsetWidth > 767 && document.querySelector("body").offsetWidth < 1280) {
      if(currentPage!=7){
        document.querySelector("#currentPage").innerText = (currentPage=8).toString();
        currentPage=7;
        document.querySelector("#pets").style.top = `calc(0px - ${1425 * currentPage}px)`;
        nextPage.classList.add('passive');
        nextPage.classList.remove('active');
        nextPageAll.classList.add('passive');
        nextPageAll.classList.remove('active');
        prevPage.classList.remove('passive');
        prevPage.classList.add('active');
        prevPageAll.classList.remove('passive');
        prevPageAll.classList.add('active');
      }
    }
    else if (document.querySelector("body").offsetWidth > 1279){
      if(currentPage!=5){
        document.querySelector("#currentPage").innerText = (currentPage=6).toString();
        currentPage=5;
        document.querySelector("#pets").style.top = `calc(0px - ${950 * currentPage}px)`;
        nextPage.classList.add('passive');
        nextPage.classList.remove('active');
        nextPageAll.classList.add('passive');
        nextPageAll.classList.remove('active');
        prevPage.classList.remove('passive');
        prevPage.classList.add('active');
        prevPageAll.classList.remove('passive');
        prevPageAll.classList.add('active');
      }
    }
});

prevPageAll.addEventListener('click', (e) => {
  if(currentPage!=0){
    currentPage=0;
    document.querySelector("#pets").style.top = `calc(0px - ${950 * currentPage}px)`;
    document.querySelector("#currentPage").innerText = (currentPage=1).toString();
    currentPage=0;
    prevPage.classList.add('passive');
    prevPage.classList.remove('active');
    prevPageAll.classList.add('passive');
    prevPageAll.classList.remove('active');
    nextPage.classList.remove('passive');
    nextPage.classList.add('active');
    nextPageAll.classList.remove('passive');
    nextPageAll.classList.add('active');
  }
});
