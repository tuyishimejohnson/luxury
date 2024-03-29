// Codes for adding a box shadow on the bottom of the navigation when scrolling.

const navigation = document.querySelector('.navigation');

window.addEventListener("scroll", () => {
    if(window.scrollY > 0)
        return navigation.classList.add("scrolling-effect");
    else 
        return navigation.classList.remove("scrolling-effect");
})