let changeBtn = document.querySelector(".box.general.info .son:last-child div a")
let inpOfEmail = document.querySelector(".box.general.info .son:last-child div input")
let checkedBtn = document.querySelectorAll(".box span div")

changeBtn.addEventListener("click" , function () {
    inpOfEmail.removeAttribute("disabled")
})




checkedBtn.forEach(function (e) {
    e.onclick = function () {
        e.classList.toggle("active")
    }
})