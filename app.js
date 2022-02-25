'use strict'
const header= document.querySelector(`.ham-menu`)
const hamburgerDisplay= document.querySelector(`.ham-menu`)
const buttonHamburger= document.querySelector(`.menu-butt`);
const hamburgerLinks= document.querySelectorAll(`.ham-links`)
const skillsSection= document.querySelector(`.skillsCont`)
const errorHandler= document.createElement('h3');
const buttonForm= document.querySelector('.formButton')
const buttonSkill = document.querySelectorAll(`.buttonSkill`)
const yearContainer= document.querySelector('.year-container')
let dateF= new Date();

 
let indexOfSkillAray=0;
const skillArray= [
    {
        name: `Html/css`,
        aboutSkills: `Prosao sam kurs iz 'Web razvoja za apsolutne pocetnike' i upoznao se sa osnovama Htmla, css i samog web razvoja  `,
        addDesrip: `Uz Html/Css upoznao sam se i sa Trello-m, Git-om, WordPress-om i jos nekolicinom potrebnih alata za svakog programera' :)
        <br>
        </a><a href="https://drive.google.com/file/d/1RjKORj-iBxEzogN_zNEc4TUm6us8bTw4/view?usp=sharing"  target='_blank'><button class="button1 skill-a" >Sertifikat </button></a>`
        ,
         imageSrc: './img/webdev.jpg'},
{
    name: `JavaScript`,
    aboutSkills: `Prosao sam kurs iz osnova javeScript koji je odrzan jeseni 2021. godine. Uz to sam i prosao kurs
     <a href="https://www.udemy.com/user/jonasschmedtmann/" target='_blank'>Jonasa Schmedman-a</a>`
     ,
    addDesrip: `Spoznavsi lepotu javeScript-a sve vise sam je aktivno primenjivao u svojim projektima, ne mogu da tvrdim da sam neki ekspert u radu sa tim jezikom 
    ali zasigurno mislim da umem da se snadjem ako negde 'zagusti' :)
    <br>
    </a><a href="https://drive.google.com/file/d/1yY7jXzZjno7u8ZBZR3qa7HHh0G4km0vF/view?usp=sharing"  target='_blank'><button class="button1 skill-a" >Sertifikat </button></a>`
    , imageSrc: './img/javascript.png'
},
{
    name: `Java`,
    aboutSkills: `Prosao sam kurs iz osnova javet koji je odrzan jeseni 2021. godine i zagazio u Objektno orjentisano programiranje `,
    addDesrip: `Ne mogu sebe nazvati Java programerom izucivsi samo neke osnove ovog velikog programskog jezika, ali
    samo upoznavanje sa oop mi je pomoglo u ucenju oop js kao i samog Angulara 
    <br>
    <a href="https://drive.google.com/file/d/1CRh4CI8a3mfZjdTyBsCEKSUPMYa4LGOw/view?usp=sharing"  target='_blank'><button class="button1 skill-a" >Sertifikat </button></a>`, 
    imageSrc: './img/java.png'
},
{
    name: `Sta trenutno ucim- gde sam sada?`,
    aboutSkills: `Trenutno sam baziran na ucenju Angulara (poceo sam 4.2.2022.godine), utvrdjujem pojedinosti iz js i u potrazi sam sa poslom `,
    addDesrip: `Trenutno sam na kursu <a href="https://www.udemy.com/user/maximilian-schwarzmuller/" target='_blank'>Maximiliana Schwarzmullera</a>`,
    imageSrc: './img/angular.jpg'
    },
]

function letsSaveSomeSpace(){
    hamburgerDisplay.classList.remove('ham-active');
    hamburgerDisplay.classList.add('ham-menu')
    buttonHamburger.textContent= '\u{02635}'
}
buttonHamburger.onclick= () => {
 if(hamburgerDisplay.classList.contains('ham-active')&&window.innerWidth<766){
    letsSaveSomeSpace()
 }
 else if(!hamburgerDisplay.classList.contains('ham-active')){
    hamburgerDisplay.classList.remove('ham-menu')
    hamburgerDisplay.classList.add('ham-active');
    buttonHamburger.textContent= 'X' 
 }
}
hamburgerLinks.forEach(function(link){
    link.addEventListener('click', function(){
        letsSaveSomeSpace()
})})

// skills section//

if (!window.outerWidth<767){
    skillsSection.innerHTML= `
    <div class= 'mobile-skill-container' style='background-image: url(${skillArray[indexOfSkillAray].imageSrc})'>
    <h2>${skillArray[indexOfSkillAray].name}
    </h2> <br>
    <h4>${skillArray[indexOfSkillAray].aboutSkills}</h4> <br>
    <p>${skillArray[indexOfSkillAray].addDesrip}</p> <br>
 </div>

    `;
    buttonSkill.forEach(function(butt){
        butt.addEventListener('click',function(){
       
       if( butt.classList.contains('button-left')){
          if(indexOfSkillAray==0){
              indexOfSkillAray=skillArray.length-1
          }
          else {
           indexOfSkillAray--
           
          }}
    
          if( butt.classList.contains('button-right')){
            if(indexOfSkillAray==3){
                indexOfSkillAray=0
            }
            else {
             indexOfSkillAray++;
            }}
    
       
        skillsSection.innerHTML= `
        <div class= 'mobile-skill-container' style='background-image: url(${skillArray[indexOfSkillAray].imageSrc})'>
        <h2>${skillArray[indexOfSkillAray].name}
        </h2> <br>
        <h4>${skillArray[indexOfSkillAray].aboutSkills}</h4> <br>
        <p>${skillArray[indexOfSkillAray].addDesrip}</p> <br>
     </div>
         `
         if(!window.innerWidth<766){
            for(let i=0; i<skillArray.length;i++){
                skillsSection.innerHTML+= `
             <div class= 'skill-container${i} containerSkill'  style='background-image: url(${skillArray[i].imageSrc})'> 
             <h2>${skillArray[i].name}
             </h2> </br>
             <h4>${skillArray[i].aboutSkills}</h4> <br>
             <p>${skillArray[i].addDesrip}</p> <br>
           </div>`
            }}
        
    })})
} 
if(!window.innerWidth<766){
    for(let i=0; i<skillArray.length;i++){
        skillsSection.innerHTML+= `
     <div class= 'skill-container${i} containerSkill' style='background-image: url(${skillArray[i].imageSrc})'> 
     <h2>${skillArray[i].name}
     </h2> </br>
     <h4>${skillArray[i].aboutSkills}</h4> <br>
     <p>${skillArray[i].addDesrip}</p> <br>
   </div>`
    }}
    
   
    
    // form 
    //footer
    yearContainer.textContent=`${dateF.getDay()}. ${dateF.getMonth()+1}. ${dateF.getFullYear()}. godine ` 

