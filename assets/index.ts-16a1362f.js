chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
 .catch((e) => console.error(e));

const a = { id: "", tabId: 0, windowId: 0, hostName: "" };

function d(e, o) {
  const n = e.tab.id,
    t = e.tab.windowId;
  c(n, t);
  a.id = o.messageSectionId;
  a.tabId = n;
  a.windowId = t;
  a.hostName = new URL(e.tab.url).hostname;
}

chrome.runtime.onMessage.addListener((e, o, n) => {
  switch (e.type) {
    case "openSidePanel":
      d(o, e);
      break;
    case "getFocusedElementData":
      n(a);
      break;
    default:
      console.warn("Unknown message type", e.type);
      break;
  }
});

function c(e, o) {
  chrome.sidePanel.open({ tabId: e, windowId: o })
   .catch((n) => console.error("Failed to open the side panel:", n));
}