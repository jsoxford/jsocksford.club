var CACHE = 'images-cache-v1';

self.addEventListener('fetch', function(event) {
  event.respondWith(fetchAndCache(event));
});

function fetchAndCache(event) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(event.request)
      .then(function(networkResponse) {
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      })
      .catch(function(err) {
        console.log(err)
        return caches.match(event.request);
      });
  });
}
