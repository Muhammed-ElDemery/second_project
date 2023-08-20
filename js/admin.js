let deleteBtn = document.querySelectorAll(".box.tasks .content i")
let nonActivated = document.querySelectorAll(".activated i:last-child")
let activated = document.querySelectorAll(".activated i:first-child")
let divOfActive = document.querySelectorAll(".activated")
let boxInfo = document.querySelector(".box.info")

//########################################################

let removeBtn = document.querySelectorAll(".box.one .son:last-child p + div a:last-child")
//########################################################
let itemOne = document.querySelector("ul div:nth-child(1)")
let itemTwo = document.querySelector("ul div:nth-child(2)")
let itemThree = document.querySelector("ul div:nth-child(3)")
let itemFour = document.querySelector("ul div:nth-child(4)")
let itemFive = document.querySelector("ul div:nth-child(5)")
let itemSix = document.querySelector("ul div:nth-child(6)")
let itemSeven = document.querySelector("ul div:nth-child(7)")
let itemEight = document.querySelector("ul div:nth-child(8)")
let allItems = document.querySelectorAll("ul div")

itemOne.onclick = function () {
    location.href = "file:///C:/Users/FreeComp/Documents/secproject/index.html"
}
itemTwo.onclick = function () {
    location.href = "file:///C:/Users/FreeComp/Documents/secproject/settings.html"
}
itemThree.onclick = function () {
    location.href = "file:///C:/Users/FreeComp/Documents/secproject/profile.html"
}
itemFour.onclick = function () {
    location.href = "file:///C:/Users/FreeComp/Documents/secproject/projects.html"
}
itemFive.onclick = function () {
    location.href = "file:///C:/Users/FreeComp/Documents/secproject/Courses.html"
}
itemSix.onclick = function () {
    location.href = "file:///C:/Users/FreeComp/Documents/secproject/friend.html"
}
itemSeven.onclick = function () {
    location.href = "file:///C:/Users/FreeComp/Documents/secproject/file.html"
}
itemEight.onclick = function () {
    location.href = "file:///C:/Users/FreeComp/Documents/secproject/plan.html"
}





deleteBtn.forEach(function (e) {
    e.onclick = function () {
        e.parentElement.remove()
    }
})





nonActivated.forEach(function (e) {
    e.addEventListener("click" , function () {
        e.classList.toggle("active")
        e.parentElement.classList.toggle("active")
        activated.forEach(function (ele) {
            if (e.className.split(" ")[0] === ele.className.split(" ")[0]) {
                ele.classList.toggle("active")
            }
        })
    })
})
//####################################################


removeBtn.forEach(function (e) {
    e.onclick = function () {
        e.parentElement.parentElement.parentElement.remove()
    }
})

