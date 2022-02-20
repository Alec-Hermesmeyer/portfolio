const landingGreet = document.querySelector('#landingGreeting');
const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.navLink');
const textLink = document.querySelector('#projLink')

menuItems.forEach((item, index) => {
    item.addEventListener("click", () =>{
        wrapper.style.transform = "translateY(-100)vh"
    })
})

landingGreet.addEventListener("click", () =>{
    wrapper.style.transform = "translateY(-100)vh"
})
textLink.addEventListener("click", () =>{
    wrapper.style.transform = "translateY(-200)vh"
})