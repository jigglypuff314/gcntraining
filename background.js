let isEnabled = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggleScript") {
        isEnabled = !isEnabled;
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "toggleScript", isEnabled: isEnabled });
        });
        sendResponse({ isEnabled: isEnabled });
    }
});
