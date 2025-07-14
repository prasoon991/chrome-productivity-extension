let activeTabId = null;
let startTime = Date.now();

console.log("✅ background.js loaded!");

chrome.tabs.onActivated.addListener((activeInfo) => {
  sendToBackend();
  startTime = Date.now();
  activeTabId = activeInfo.tabId;
});

chrome.tabs.onRemoved.addListener(() => {
  sendToBackend();
});

function sendToBackend() {
  if (!activeTabId) return;

  const timeSpent = Date.now() - startTime;

  chrome.tabs.get(activeTabId, (tab) => {
    if (chrome.runtime.lastError || !tab || !tab.url) return;

    const site = new URL(tab.url).hostname;

    console.log("⏱ Preparing to send:", site, timeSpent);

    fetch("http://127.0.0.1:5000/api/logs/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        site,
        timeSpent
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("✅ Response from server:", data);
    })
    .catch((err) => {
      console.error("❌ Failed to send log:", err);
    });
  });
}
