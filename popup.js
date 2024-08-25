document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggleScript');

    // Load the toggle state
    chrome.storage.local.get(['scriptEnabled'], function (result) {
        toggle.checked = result.scriptEnabled || false;
    });

    // Handle toggle changes
    toggle.addEventListener('change', function () {
        const isEnabled = toggle.checked;
        chrome.storage.local.set({ scriptEnabled: isEnabled });

        // Notify content script about the state change
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { scriptEnabled: isEnabled });
        });
    });
});
