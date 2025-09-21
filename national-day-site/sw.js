const CACHE = 'nd95-v5';
const ASSETS = [
  '/', 'index.html', 'questions.html', 'offline.html',
  'assets/css/styles.css?v=8',
  'assets/js/app.js?v=6', 'assets/js/questions.js', 'assets/js/reveal.js?v=2',
  'img/logo-nd95-sm.png', 'img/logo-tuwaiq-sm.png',
  'img/icon-192.png', 'img/icon-512.png'
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e=>{
  const {request} = e;
  if(request.method !== 'GET') return;

  e.respondWith(
    caches.match(request).then(cached => 
      cached || fetch(request).then(resp=>{
        const copy = resp.clone();
        caches.open(CACHE).then(c=>c.put(request, copy));
        return resp;
      }).catch(()=> caches.match('offline.html'))
    )
  );
});