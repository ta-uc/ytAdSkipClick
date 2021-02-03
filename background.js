chrome.commands.onCommand.addListener(function (command, tab) {
  if (command === "run") {
    chrome.tabs.executeScript(tab.ib, {
      file: 'content.js'
    });    
  }
});
