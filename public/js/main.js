
//  le rendu lorsque je clique sur les boutons :
let divRendu=document.querySelectorAll('.box-body')[1]
let rendu = document.getElementById("rendu-rectangle")


// Mes variables boutons:

let btnwhite = document.querySelector('.btn-light')
let btnred = document.querySelector('.btn-danger')
let btnvert = document.querySelector('.btn-success')
let btnblue = document.querySelector('.btn-primary')


// Les bouton qui affiche le rendu en background (FONCTIONNE)

btnwhite.addEventListener('click', event => {
    rendu.setAttribute("class", "bg-light")

})

btnred.addEventListener('click', event => {
    rendu.setAttribute("class", "bg-danger")
})
btnvert.addEventListener('click', event => {
    rendu.setAttribute("class", "bg-success")
})
btnblue.addEventListener('click', event => {
    rendu.setAttribute("class", "bg-primary")
})

// les types de border:


// Déclarer mes variable de types de border:
let solid = document.getElementById('solid')
let dashed = document.getElementById('dashed')
let dotted = document.getElementById('dotted')

// Les boutons qui affiche les différents type de border (FONCTIONNE pas)

solid.addEventListener('click', event => {
    // rendu.setAttribute('id', 'solid')
    rendu.style.borderStyle='solid'

})
dashed.addEventListener('click', event => {
    // rendu.setAttribute('id', 'dashed')
    rendu.style.borderStyle="dashed"
})
dotted.addEventListener('click', event => {
    // rendu.setAttribute('id', 'dotted')
    rendu.style.borderStyle="dotted"
})



// Déclarer les variables pour les border top 

let borderTop0=document.getElementById('border-top-1')
let borderTop1=document.getElementById('border-top-2')
let borderTop2=document.getElementById('border-top-3')

borderTop0.addEventListener('click' , event =>{
    rendu.style.borderTopWidth ="0px"
    // rendu.setAttribute('class', 'border-top-1')
})

borderTop1.addEventListener('click', event =>{
    rendu.style.borderTopWidth = "3px"
// rendu.setAttribute('class', 'border-top-2')
})

borderTop2.addEventListener('click' ,event=>{
    rendu.style.borderTopWidth ="10px"
    // rendu.setAttribute('class', 'border-top-3')
})

// Mettre les border à des places différents

let sectionChange =document.getElementById('section-change')
let divSectWidth=document.getElementById('section-change').children[0]
let bordColor=document.querySelectorAll('.mt-2 .btn')[0]
let bordWidth=document.querySelectorAll('.mt-2 .btn')[1]
let bordTopWidth=document.querySelectorAll('.mt-2 .btn')[2]
let bordRightWidth=document.querySelectorAll('.mt-2 .btn')[3]
let bordBottomWidth=document.querySelectorAll('.mt-2 .btn')[4]
let bordLeftWidth=document.querySelectorAll('.mt-2 .btn')[5]

bordColor.addEventListener('change', event => {
   rendu.style.borderColor =bordColor.value
   
})
bordWidth.addEventListener('click' , event =>{
    rendu.setAttribute('class',"b-1")
})
bordTopWidth.addEventListener('click' , event=>{
    rendu.setAttribute('class' ,"bt-1")
})

bordRightWidth.addEventListener('click' , event =>{
    rendu.setAttribute("class" , "br-1")
})
 bordBottomWidth.addEventListener('click', event=>{
     rendu.setAttribute('class', "bb-1")
 })
 bordLeftWidth.addEventListener('click', event => {
    rendu.setAttribute("class","bl-1")

 })



// Mettre les border en radius sur différents types de coté

let divSectRadius=document.getElementById('section-change').children[2]
let bordRadius=document.querySelectorAll('.mt-2 .btn')[6]
let bordTopRadius=document.querySelectorAll('.mt-2 .btn')[7]
let bordTopRightRadius=document.querySelectorAll('.mt-2 .btn')[8]
let bordBottomRightRadius=document.querySelectorAll('.mt-2 .btn')[9]
let bordBottomLeftRadius=document.querySelectorAll('.mt-2 .btn')[10]

bordRadius.addEventListener('click', event =>{
    rendu.setAttribute('class', 'b-r-1')
})

bordTopRadius.addEventListener('click' , event =>{
    rendu.setAttribute('class', 'br-tl-1')
})

bordTopRightRadius.addEventListener("click", event=>{
    rendu.setAttribute('class', 'br-tr-1')
})

bordBottomRightRadius.addEventListener('click', event =>{
    rendu.setAttribute('class', "br-br-1")
})

bordBottomLeftRadius.addEventListener('click', event=>{
    rendu.setAttribute('class','br-bl-1')
    })

