const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

// 2. DOM Level 0 Event Handlers on Button 2
button2.onclick = function() {
  alert("Button 2 clicked");
}

// 3. DOM Level 2 Event Listeners on Button 3
button3.addEventListener("click", () => {
  alert("Button 3 clicked");
})

// 4. Event Delegation on Button 4 and 5
const buttonChildContainer = document.getElementById("buttonChildContainer");
buttonChildContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    alert(`${e.target.textContent} clicked`);
    e.stopPropagation();
  }
})

// 5. DO NOT delete parent event listener
const buttonContainer = document.getElementById("buttonContainer");
buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});
