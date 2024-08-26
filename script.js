chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggleScript") {
        let isEnabled = request.isEnabled;
        if (isEnabled) {
            console.log("Enabling Next Button Clicker");
            startClicking();
        } else {
            console.log("Disabling Next Button Clicker");
            stopClicking();
        }
    }
});

let intervalId;

function startClicking() {
    intervalId = setInterval(function() {
        let nextButton = document.querySelector(".next.next-active");
        if (nextButton) {
            console.log("Clicking on the Next Button.");
            nextButton.click();
        }
    }, 10000);
}

function stopClicking() {
    clearInterval(intervalId);
}
