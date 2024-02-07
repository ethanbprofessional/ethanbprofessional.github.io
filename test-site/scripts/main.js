const myHeading = document.querySelector("h1");
let num1 = 1;
let num2 = 0;
for(let i = 0; i < 5; i++) {
    num2 = num1 + num2;
}
myHeading.addEventListener("click", () => {
    alert("Sorry! No free hot dogs here.");
});

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/hot-dog.jpg") {
        myImage.setAttribute("src", "images/orange.jpeg");
    }
    else {
        myImage.setAttribute("src", "images/hot-dog.jpg");
    }
};
let myButton = document.querySelector("button");
let myHeading2 = document.querySelector("#header1-3");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading2.textContent = `I hope you dig this hot diggidy dog, ${myName}!`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading2.textContent = `I hope you dig this hot diggidy dog, ${storedName}!`;
}
myButton.onclick = () => {
    setUserName();
};