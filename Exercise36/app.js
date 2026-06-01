const colorPicker=document.querySelector("#colorPicker");
const colorHistory=document.querySelector("#colorHistory");
const clearHistoryButton=document.querySelector("#clearHistoryButton");
const colorPreview=document.querySelector("#colorPreview");

colorPicker.addEventListener("input",()=>{
    const selectedColor=colorPicker.value;
    colorPreview.style.backgroundColor=selectedColor;
    addColorToHistory(selectedColor);
});

function addColorToHistory(color){
    const li=document.createElement("li");
    li.textContent=color;
    li.style.color=color;
    colorHistory.appendChild(li);
}

clearHistoryButton.addEventListener("click",()=>{
    colorHistory.innerHTML=""; // Clear the color history list
});