const CACHE_NAME = 'golfwagers-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './pwa.css',
  './pwa.js',
  './app.js',
  './rules.js',
  './manifest.json',
  './clover-logo.png'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached response if found
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        // Make network request and cache the response
        return fetch(fetchRequest).then(
          (response) => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the response
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Handle PWA installation
self.addEventListener('beforeinstallprompt', (event) => {
  console.log('Before install prompt event fired');
  event.preventDefault();
  // Store the event for later use
  self.deferredPrompt = event;
});

// Handle app installation
self.addEventListener('appinstalled', (event) => {
  console.log('App was installed: ', event);
});
