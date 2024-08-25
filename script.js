if (window.location.href.startsWith("https://site.gcntraining.com/")) {
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
}
