

/** @format */
/**
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns
 */

const hostname = window.location.host;

// Add a visual indicator using the hostname
document.body.style.border = `5px solid ${getBorderColor(hostname)}`;

function getBorderColor(host) {
  // You can define your logic here to assign different border colors
  // based on the hostname. For example:

  // if (host.includes("google")) {
  //   return "blue";
  // } else if (host.includes("facebook")) {
  //   return "red";
  // } else {
  //   return "green";
  // }

  // Replace with your desired default color
  return "orange";
}

// This is just an example, modify it to show the hostname in a way you prefer
console.log("Current hostname:", hostname);
