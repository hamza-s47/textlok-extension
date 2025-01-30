// background.js (Service Worker)

chrome.runtime.onInstalled.addListener(() => {
    console.log("TextLok Extension Installed");
  });
  
  chrome.action.onClicked.addListener(function() {
    chrome.windows.create({
      url: "index.html",
      type: "popup",
      width: 500,
      height: 600
    });
  });
  