chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.scriptEnabled) {
        // Place your JavaScript code here
        console.log("Script is activated!");
        // Example action: alert("Script is active!");
        console.log("GCN Next Button");
    console.log("Checking whether next button is active...");
    var nextbutton = document.getElementsByClassName("next next-active");
    setInterval (function() {
        console.log("Checking...");
        nextbutton = document.getElementsByClassName("next next-active");
        if(nextbutton.length == 1){
            console.log("Clicking on the Next Button.");
            document.getElementsByClassName("next next-active")[0].click();
        }
    }, 10000);
    } else {
        console.log("Script is deactivated.");
    }
});
