document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('toggleCheckbox');

    // Load the current state from storage
    chrome.storage.sync.get("isEnabled", (data) => {
        toggleCheckbox.checked = data.isEnabled;
    });

    toggleCheckbox.addEventListener('change', function() {
        chrome.runtime.sendMessage({ action: "toggleScript" }, (response) => {
            toggleCheckbox.checked = response.isEnabled;
        });
    });
});
