importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

if (workbox) {
  workbox.routing.registerRoute(
    "/index.html",
    new workbox.strategies.NetworkFirst()
  );
  workbox.routing.registerRoute("/", new workbox.strategies.NetworkFirst());
  workbox.routing.registerRoute(/\.js$/, new workbox.strategies.CacheFirst());
  workbox.routing.registerRoute(/\.css$/, new workbox.strategies.CacheFirst());
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
