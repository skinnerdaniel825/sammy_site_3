const myImage = document.querySelector("img");

myImage.addEventListener("click", () =>
{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/sammyphoto-smaller.jpg")
        myImage.setAttribute("src", "images/sammyphoto-upside-down.jpg");
    else
        myImage.setAttribute("src", "images/sammyphoto-smaller.jpg");
})

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setTxt()
{
    const myName = prompt("Password");
    localStorage.setItem("name", myName);
    myHeading.textContent = `What up, ${myName}`;
}

if (!localStorage.getItem("name"))
    setUserName();
else
{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `What's up, ${storedName}`;
}

myButton.addEventListener("click", () => 
{
    setUserName();
});