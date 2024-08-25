chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ scriptEnabled: false });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.startsWith('https://site.gcntraining.com/')) {
        chrome.storage.local.get('scriptEnabled', function (data) {
            if (data.scriptEnabled) {
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    files: ['script.js']
                });
            }
        });
    }
});
