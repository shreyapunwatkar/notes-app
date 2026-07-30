const CACHE_NAME = "notes-app-v1";

const urlsToCache = [
  "/notes-app/",
  "/notes-app/index.html",
  "/notes-app/manifest.webmanifest",
  "/notes-app/icon-192.png",
  "/notes-app/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
