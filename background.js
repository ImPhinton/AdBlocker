/*
    This event triggers when the browser has committed to loading a webpage.
    This will allow ads to be removed as soon as possible.
*/
var enabled = true;
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("Blocked these ads:", details.url)
        return {cancel: true}
    },
    {urls: blocked_ads},
    ["blocking"]
)