chrome.storage.sync.get("isEnabled", (data) => {
    if (data.isEnabled) {
        startClicking();
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggleScript") {
        let isEnabled = request.isEnabled;
        if (isEnabled) {
            startClicking();
        } else {
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
