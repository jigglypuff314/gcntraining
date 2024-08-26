document.getElementById('toggleButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: "toggleScript" }, (response) => {
        if (response.isEnabled) {
            document.getElementById('toggleButton').textContent = "Disable Script";
        } else {
            document.getElementById('toggleButton').textContent = "Enable Script";
        }
    });
});
