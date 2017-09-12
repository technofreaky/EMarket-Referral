function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        envatousername: document.querySelector("#envatousername").value
    });
}

function restoreOptions() {

    function setCurrentChoice(result) {
        document.querySelector("#envatousername").value = result.envatousername || "varunsridaran";
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.local.get("envatousername");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);