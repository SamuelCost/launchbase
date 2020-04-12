const modalOverlay = document.querySelector('#overlay')
const modal = document.querySelector('#modal')
const courses = document.querySelectorAll(".course")
const maximize = document.querySelector(".max-modal")

for (let course of courses){
    course.addEventListener("click", function(){
        const course_id = course.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${course_id}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ``
    modal.classList.remove("maximize")
})


maximize.addEventListener("click", function(){
    if (modal.classList.contains('maximize')){
        modal.classList.remove("maximize")
        document.querySelector(".modal-content").classList.remove("maximize")
    } else {
        modal.classList.add("maximize")
        document.querySelector(".modal-content").classList.add("maximize")
    }
})