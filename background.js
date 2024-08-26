chrome.runtime.onInstalled.addListener(() => {
    // Set initial state to enabled by default if it doesn't exist
    chrome.storage.sync.get("isEnabled", (data) => {
        if (data.isEnabled === undefined) {
            chrome.storage.sync.set({ isEnabled: true });
        }
    });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggleScript") {
        chrome.storage.sync.get("isEnabled", (data) => {
            const isEnabled = !data.isEnabled;
            chrome.storage.sync.set({ isEnabled: isEnabled });

            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { action: "toggleScript", isEnabled: isEnabled });
            });

            sendResponse({ isEnabled: isEnabled });
        });
    }
});
