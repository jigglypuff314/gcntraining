document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('toggleCheckbox');

    // Load the current state from storage
    chrome.storage.sync.get("isEnabled", (data) => {
        const isEnabled = data.isEnabled !== undefined ? data.isEnabled : true;
        toggleCheckbox.checked = isEnabled;
    });

    toggleCheckbox.addEventListener('change', function() {
        chrome.runtime.sendMessage({ action: "toggleScript" }, (response) => {
            toggleCheckbox.checked = response.isEnabled;
        });
    });
});
