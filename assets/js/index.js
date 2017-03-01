var faviconUrl = location.search.split('favicon-url=')[1] ? location.search.split('favicon-url=')[1].split('&')[0] : null;
var targetUrl = location.search.split('target-url=')[1] ? location.search.split('target-url=')[1].split('&')[0] : null;

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
  document.body.appendChild(iframe);
}