
const hoverMe = document.getElementById("heading");
hover = (text) => {
    return [...text].map((text) => `<span>${text}</span>`).join("");
},
    hoverMe.innerHTML = hover(hoverMe.innerText);