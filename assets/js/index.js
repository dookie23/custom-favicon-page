var faviconUrl = location.search.split('favicon-url=')[1] ? location.search.split('favicon-url=')[1].split('&')[0] : null;
var targetUrl = location.search.split('target-url=')[1] ? location.search.split('target-url=')[1].split('&')[0] : null;
var iframeOption = location.search.split('iframe-option=')[1] ? location.search.split('iframe-option=')[1].split('&')[0] : null;
var redirectionTimeout = location.search.split('redirection-timeout=')[1] ? parseInt(location.search.split('redirection-timeout=')[1].split('&')[0]) : 0;

// Redirection function
function redirect(url) {
    //window.location = url;
};


if (faviconUrl) {
  var link = document.createElement('link');
  link.id = 'favicon';
  link.rel = 'shortcut icon';
  link.href = faviconUrl;
  document.head.appendChild(link);
}

if (targetUrl) {
  var iframe = document.createElement('iframe');
  iframe.src = targetUrl;
  iframe.frameborder='0';
  if (iframeOption) document.body.appendChild(iframe);
    // IE9 and below does not support include additional params (e.g. targetUrl) 
    // to the function used by setTimeout 
  else setTimeout(redirect,redirectionTimeout, targetUrl);
}
