// main header
const header = document.querySelector(".header") 
    bigHeader = document.querySelector(".header__mainheader"),
    mainHeader = document.querySelector(".header__mainheader__poster")
    headerMainImg = document.querySelector(".header__mainheader__img"),
    webImgsArr = [] 

for (let i = 0; i <= 2; i++) {
    const webImgs = document.querySelector(`.header__mainheader__img__webimg${i}`)
    webImgsArr.push(webImgs)
}
// navbar
const navButton = document.querySelector(".header__nav__button"),
    navList = document.querySelector(".header__nav__navlist"),
    navUl = document.querySelector(".header__nav__navlist__lists");
// main
    const videoSection = document.querySelector(".main__videoSection"),
        video = document.querySelectorAll(".vidoe"),
        wonder = document.getElementsByClassName("main__wonderFull__img")

// when queries changes

    function mediaQuery(x) {
    if (x.matches) { 
        navButton.classList.remove("hide")
        navList.classList.add("hide")
        bigHeader.classList.remove("d-flex"),
        bigHeader.classList.remove("j-b"),
        headerMainImg.style.width = "100%",
        webImgsArr[0].classList.add("d-none"),
        webImgsArr[1].style.width = "40%",
        webImgsArr[1].style.right = "10%",
        webImgsArr[2].classList.add("d-none");
    } else {
        navButton.classList.add("hide"),
        navList.classList.remove("hide"),
        bigHeader.classList.add("d-flex"),
        bigHeader.classList.add("j-b"),
        headerMainImg.style.width = "60%",
        webImgsArr[0].classList.remove("d-none"),
        webImgsArr[2].classList.remove("d-none");
    }
}
const x = window.matchMedia("(max-width: 768px)")
mediaQuery(x) 
x.addListener(mediaQuery) 


function smallMediaQuery(y) { 
    if (y.matches) { 
        mainHeader.style.top = "140px"
        mainHeader.style.left = "20px"
        mainHeader.style.width = "75%"
        header.classList.add("bg-none")
        videoSection.style.margin = "185px auto"
    }else{
        mainHeader.style.top = "200px"
        mainHeader.style.left = "150px"
        header.classList.remove("bg-none")
        header.classList.add("bg-header")
        videoSection.style.margin = "0"

    }

}


const y = window.matchMedia("(max-width: 610px)")
smallMediaQuery(y) 
y.addListener(smallMediaQuery) 

navButton.onclick = function(){
    if (navList.classList.contains("hide")) {
        navList.classList.remove("hide")
        navUl.classList.remove("d-flex")
    }else{
        navList.classList.add("hide")
        navUl.classList.add("d-flex")
    }
}

// onscroll actions

window.onscroll = function(){

    if (scrollY == 500) {
        webImgsArr[1].classList.remove("po-f"),
        webImgsArr[1].classList.add("po-a"),
        video[0].classList.remove("halfVideo")
    }else{
        webImgsArr[1].classList.remove("po-a"),
        webImgsArr[1].classList.add("po-f"),
        video[0].classList.add("halfVideo");
    }

    if (scrollY >= 150){
        webImgsArr[1].style.width = `${scrollY / 10}%`
        webImgsArr[1].style.transform = "rotate(0deg)"
        webImgsArr[1].style.zIndex = "0"
    }else{
        webImgsArr[1].style.width = "20%"
        webImgsArr[1].style.transform = "rotate(-15deg)"
    }

    if (scrollY >= 500){
        webImgsArr[1].style.width = "20%",
        webImgsArr[1].classList.remove("po-f"),
        webImgsArr[1].classList.add("po-a"),
        webImgsArr[1].style.transform = "rotate(-15deg)",
        video[0].classList.remove("halfVideo");
    }

    if (scrollY >= 1383) {
        wonder[0].style.transform = `translateY(${(scrollY / 15 )  -1}px)`
        wonder[3].style.transform = `translateY(${(scrollY / 15 )  -1}px)`
        wonder[1].style.transform = `translateY(${(scrollY / -15 )}px)`
        wonder[2].style.transform = `translateY(${(scrollY / -15 )}px)`
    }
};

