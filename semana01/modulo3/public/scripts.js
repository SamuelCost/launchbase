const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards){
    card.addEventListener("click", function(){
        const video_id = card.getAttribute("id")
        window.location.href = `/courses/${video_id}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})
