// src/utilities/base-path.ts
var basePath = "";
function setBasePath(path) {
  basePath = path;
}
function getBasePath() {
  return basePath.replace(/\/$/, "");
}
var scripts = [...document.getElementsByTagName("script")];
var configScript = scripts.find((script) => script.hasAttribute("data-tovuti"));
if (configScript) {
  setBasePath(configScript.getAttribute("data-tovuti"));
} else {
  const fallbackScript = scripts.find((s) => /tovuti(\.min)?\.js($|\?)/.test(s.src));
  let path = "";
  if (fallbackScript) {
    path = fallbackScript.getAttribute("src");
  }
  setBasePath(path.split("/").slice(0, -1).join("/"));
}

export {
  setBasePath,
  getBasePath
};
