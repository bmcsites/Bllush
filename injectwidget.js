(function () {
  function injectOnload() {
    var htmlTag = document.getElementById('suggested-stories-container');
    var injectedHtml = '<suggested-widget></suggested-widget>';
    htmlTag.innerHTML += injectedHtml;

    var element = document.createElement("script");
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    element.src = "./suggestedwidget.js";
    document.body.appendChild(element);

    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = './styles.css';
    link.media = 'all';
    head.appendChild(link);
  }

  if (window.addEventListener)
    window.addEventListener("load", injectOnload, false);
  else if (window.attachEvent)
    window.attachEvent("onload", injectOnload);
  else window.onload = injectOnload;
})();
