(function () {
  function injectOnload() {
    // inject HTML tag
    var htmlTag = document.getElementById('suggested-stories-container');
    var injectedHtml = '<suggested-widget></suggested-widget>';
    htmlTag.innerHTML += injectedHtml;

    // inject suggestedwidget.js script
    var element = document.createElement("script");
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    element.src = "./suggestedwidget.js";
    document.body.appendChild(element);

    // inject styles.css
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = './styles.css';
    link.media = 'all';
    head.appendChild(link);
  }
  // wait for window to load .
  if (window.addEventListener)
    window.addEventListener("load", injectOnload, false);
  else if (window.attachEvent)
    window.attachEvent("onload", injectOnload);
  else window.onload = injectOnload;
})();
