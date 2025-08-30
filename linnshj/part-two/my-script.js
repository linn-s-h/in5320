

function addCurrency(currencyName) {
    if (currencyName.trim() === "") return;

    //Our Currency List
    const list = document.getElementById("currencyList");

    //Create list item
    const li = document.createElement("li");
    li.textContent = currencyName;

    //Create delete button
    const deleteButton = document.createElement("button"); //Create type button
    deleteButton.innerHTML = "&#10005;"; //Cross symbol
    deleteButton.classList.add("deleteButton"); //Add class to button

    //Remove li, when delete button is clicked
    deleteButton.addEventListener("click", function(){
        list.removeChild(li);
    });

    //Append li to list
    list.appendChild(li);

    //Append delete button to li
    li.appendChild(deleteButton);

}

document.getElementById("addButton").addEventListener("click", function() {
    const input = document.getElementById("currencyInput");
    addCurrency(input.value);
    input.value = "";
    input.focus();
});