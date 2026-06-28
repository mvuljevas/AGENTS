chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) {
    return;
  }

  chrome.tabs.sendMessage(tab.id, { type: "extension:toggle" }).catch(() => {
    // The active tab may not have the content script available.
  });
});
