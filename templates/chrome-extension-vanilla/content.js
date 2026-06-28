(() => {
  chrome.runtime.onMessage.addListener((message) => {
    if (message?.type !== "extension:toggle") {
      return;
    }

    console.info("Chrome Extension Vanilla is active.");
  });
})();
