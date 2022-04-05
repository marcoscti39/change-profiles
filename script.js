const persons = [
    {author: "susan smith",
     job: "web developer",
     info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
     img: "assets/img/img1.jpg"},

     {author: "joe bulian",
     job: "web developer",
     info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus culpa distinctio quos quo est sapiente quia magni tempora, enim dicta. Nihil culpa accusantium quaerat. Aspernatur eius aperiam fuga nisi asperiores.",
     img: "assets/img/img2.jpg"},

     {author: "james jon",
     job: "web developer",
     info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus culpa distinctio quos quo est sapiente quia magni tempora, enim dicta. Nihil culpa accusantium quaerat. Aspernatur eius aperiam fuga nisi asperiores.",
     img: "assets/img/img3.jpg"},

     {author: "dan goulberg",
     job: "web developer",
     info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus culpa distinctio quos quo est sapiente quia magni tempora, enim dicta. Nihil culpa accusantium quaerat. Aspernatur eius aperiam fuga nisi asperiores.",
     img: "assets/img/img4.jpg"}

]


const next = document.querySelector(".next-btn")
const prev = document.querySelector(".prev-btn")
const random = document.querySelector(".random-btn")

let changeProfille = 0

window.addEventListener("DOMContentLoaded", ()=>{
    showPerson()
})


next.addEventListener("click", ()=>{
    if(changeProfille == (persons.length - 1)){
        changeProfille = -1
    }
    changeProfille++

    showPerson()
})


prev.addEventListener("click", ()=>{
    if(changeProfille == 0){
        changeProfille = persons.length 
    }
    changeProfille--
    showPerson()
})

random.addEventListener("click", ()=>{
    changeProfille = Math.floor(Math.random()* persons.length)
    showPerson()
})

function showPerson(){
    document.querySelector(".author").innerHTML = persons[changeProfille].author
    document.querySelector(".job").innerHTML = persons[changeProfille].job
    document.querySelector(".info").innerHTML = persons[changeProfille].info
    document.querySelector(".img-perfil").src = persons[changeProfille].img

}