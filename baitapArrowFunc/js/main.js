
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let container = document.getElementById("colorContainer");

//Load danh sach o mau len UI
loadColor = () => {
    for (let i = 0; i < colorList.length; i++)
        container.innerHTML += 0 == i ? "<button class='color-button " + colorList[i] + " active'></button>" : "<button class='color-button " + colorList[i] + "'></button>";
},
    loadColor();

// Doi mau ngoi nha
changeColor = (i, c) => {
    for (let i = 0; i < color.length; i++)
        color[i].classList.remove("active");
    color[c].classList.add("active"),
        house.className = "house " + i;
};

let color = document.getElementsByClassName("color-button");
    house = document.getElementById("house");

for (let i = 0; i < color.length; i++)
    color[i].addEventListener("click", function () {
        changeColor(colorList[i], i);
    });


