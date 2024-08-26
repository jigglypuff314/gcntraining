document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');

    // Load the current state from storage
    chrome.storage.sync.get("isEnabled", (data) => {
        toggleButton.textContent = data.isEnabled ? "Disable Script" : "Enable Script";
    });

    toggleButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({ action: "toggleScript" }, (response) => {
            toggleButton.textContent = response.isEnabled ? "Disable Script" : "Enable Script";
        });
    });
});
