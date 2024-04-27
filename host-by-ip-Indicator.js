/** @format */

const allowedWebsites = [
  "https://([^/]+)\.local/*",
  "https://164.90.221.46:2031/*",
  "https://atr1.hostman.co.il:2087/*",
];

function createHostIndicator(hostText) {
  const div = document.createElement("div");
  div.id = "host-by-ip-Indicator";
  div.style.cssText = `
    text-shadow: -1px -1px 0 #555, 1px -1px 0 #555, -1px 1px 0 #555, 1px 1px 0 #555;
    position: fixed;
    right: -72px;
    bottom: 45px;
    transform: rotate(-45deg);
    background-color: #B2DD07;
    opacity: 0.9;
    z-index: 2147483647;
    height: 55px;
    width: 290px;
    overflow-x: hidden;
    box-shadow: 7px 0px 9px #000;
    color: #fff;
    pointer-events: none;
  `;

  const textDiv = document.createElement("div");
  textDiv.id = "host-by-ip-Indicator-text";
  textDiv.style.cssText = `
    margin: 0px 45px;
    line-height: 55px;
    height: 100%;
    width: calc(100% - 90px);
    overflow: hidden;
    text-align: center;
  `;

  const span = document.createElement("span");
  span.classList.add("textFitted");
  span.style.cssText = `
    display: inline-block;
    text-align: center;
    font-size: 21px;
  `;

  // Replace "basmat-eden hetzner" with your actual logic to display the hostname
  span.textContent = hostText;

  textDiv.appendChild(span);
  div.appendChild(textDiv);

  document.body.appendChild(div);
}

function isWebsiteAllowed(url) {
  for (const allowedWebsite of allowedWebsites) {
    if (new RegExp(allowedWebsite).test(url)) {
      return true;
    }
  }
  return false;
}

if (isWebsiteAllowed(window.location.href)) {
  createHostIndicator(window.location.host);
}
