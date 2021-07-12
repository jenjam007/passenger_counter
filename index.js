//document.getElementById("count-el").innerText = 5

// initialize the count as 0
//listen for clicks on the increment button
let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl)

function increment(){
    //increment the count variable when the button is clicked
    count += 1 
    //change the count-el in the HTML to reflect the new count
    countEl.innerText = count
}

function save(){
    //create a variable that contains both count and dash separator
    let  countStr = count + " - "
    //render the variable in the saveEl using innerText
    saveEl.textContent += countStr //textContent is alternative mdn(Mozilla Developer network) for innerText.
    //innerText can't see hidden things, like the spaces
    countEl.textContent = 0
    count = 0
}