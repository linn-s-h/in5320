
function addCurrency(currencyName) {
    if (currencyName.trim() === "") return;

    const list = document.getElementById("currencyList");
    const li = document.createElement("li");
    li.textContent = currencyName;
    list.appendChild(li);
}

document.getElementById("addButton").addEventListener("click", function() {
    const input = document.getElementById("currencyInput");
    addCurrency(input.value);
    input.value = "";
    input.focus();
});