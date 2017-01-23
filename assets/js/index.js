var faviconUrl = location.search.split('favicon-url=')[1];

if (faviconUrl) {
  var link = document.createElement('link');
  link.id = 'favicon';
  link.rel = 'shortcut icon';
  link.href = faviconUrl;
  document.head.appendChild(link);
  
  // var faviconImg = document.createElement('img');
  // faviconImg.setAttribute('src', faviconUrl);
  // faviconImg.setAttribute('id', 'favicon-img');
  
  // document.getElementsByClassName('page-header')[0].appendChild(faviconImg);
}