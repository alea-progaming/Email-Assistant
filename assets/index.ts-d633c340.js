import { h as u } from "./index-0e8d7234.js";
const m = new MutationObserver(() => {
  const n = new URL(window.location.href).hostname,
    t = u[n].sendButton,
    o = document.querySelectorAll(t);
  for (const r of o) {
    const s = a(r).querySelector('img[data-professionally-added="true"]');
    r &&
     !s &&
      (console.log(r),
      g(r));
  }
});
m.observe(document.body, { childList: true, subtree: true });

function g(n) {
  console.log("Adding button");
  const t = a(n),
    o = document.createElement("td"),
    r = f(n, "region"),
    e = document.createElement("img");
  e.src = chrome.runtime.getURL("common/assets/images/NEURespond_Logo-128.png"),
    e.id = p(),
    e.setAttribute("data-professionally-added", "true"),
    e.setAttribute("message-region-id", r.id),
    e.setAttribute("is-professionally-active", "false"),
    e.setAttribute("host-name", window.location.hostname),
    e.alt = "NEURespond Logo",
    e.style.position = "relative",
    e.style.width = "30px",
    e.style.height = "30px",
    e.style.borderRadius = "100%",
    e.style.cursor = "pointer",
    e.style.padding = "2px",
    e.addEventListener("click", (d) => {
      console.log("NEURespond clicked");
      const c = document.querySelectorAll('img[data-professionally-added="true"]');
      for (const l of c) l.style.border = "none", l.setAttribute("is-professionally-active", "false");
      const i = d.target;
      i.style.border = "2px solid #1646CE",
        i.setAttribute("is-professionally-active", "true"),
        chrome.runtime.sendMessage({ type: "openSidePanel", messageSectionId: r.id, website: "gmail" });
    }),
    o.appendChild(e);
  const s = t.querySelector("td");
  s && s.nextElementSibling
   ? t.insertBefore(o, s.nextElementSibling)
    : t.appendChild(o);
}

function a(n) {
  let t = n.parentElement;
  for (; t.tagName!== "TR";) t = t.parentElement;
  return t;
}

function f(n, t) {
  let o = n.parentElement;
  for (;!o.getAttribute("role") || o.getAttribute("role").toLowerCase()!== t.toLowerCase();) o = o.parentElement;
  return o;
}

function p() {
  return window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
}