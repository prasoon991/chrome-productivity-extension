chrome.storage.local.get(null, (data) => {
  const ul = document.getElementById("output");
  Object.entries(data).forEach(([site, ms]) => {
    const li = document.createElement("li");
    li.textContent = `${site} — ${Math.floor(ms / 1000)} sec`;
    ul.appendChild(li);
  });
});
