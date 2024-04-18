const textarea = document.getElementById("textarea");

textarea.addEventListener("input", setDataToLocalStorage);

function setDataToLocalStorage() {
    localStorage.setItem("dataSaved", textarea.value);
}

if (localStorage.getItem("dataSaved")) {
    textarea.value = localStorage.getItem("dataSaved");
}

