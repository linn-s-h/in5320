
//Function that returns an element that starts with a searched word
function startWithSearchWord(element, searchWord) {
    return element.toLowerCase().startsWith(searchWord.toLowerCase());
}

//Function returns list with words that fulfill startWithSearchWord(element, searchWord)
function filterListBySearchWord(list, searchWord) {
    return list.filter(item => startWithSearchWord(item, searchWord)); //Checks each element in array
}

let currencies = [];

function renderCurrencyList(filteredList) {

    //Our Currency List
    const list = document.getElementById("currencyList");
    list.innerHTML = "";

    //Create list item
    filteredList.forEach(currencyName => {
        const li = document.createElement("li");
        li.textContent = currencyName;

        //Create delete button
        const deleteButton = document.createElement("button"); //Create type button
        deleteButton.innerHTML = "&#10005;"; //Cross symbol
        deleteButton.classList.add("deleteButton"); //Add class to button

        //Remove li, when delete button is clicked
        deleteButton.addEventListener("click", function(){
            currencies = currencies.filter(c => c !== currencyName);
            renderCurrencyList(currencies);
        });

        list.appendChild(li); //Append li to list
        li.appendChild(deleteButton);  //Append delete button to li

    });

}

//Function 
function addCurrency(currencyName) {
    if (currencyName.trim() === "") return;
    currencies.push(currencyName);
    renderCurrencyList(currencies);
}

//Add currency listener
document.getElementById("addButton").addEventListener("click", function() {
    const input = document.getElementById("currencyInput");
    addCurrency(input.value);
    input.value = "";
    input.focus();

});

//Search input listener
document.getElementById("searchInput").addEventListener("input", function() {
    const searchWord = this.value;
    const filtered = filterListBySearchWord(currencies, searchWord);
    renderCurrencyList(filtered);
    //Her skal listen med currencies bli rendered!!!!!!1

})