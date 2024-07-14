'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f659c9986ef08a4fd51fd0e43f33a4fc",
"assets/AssetManifest.bin.json": "12ddb78d7e40cbaf74e5199c7be7a272",
"assets/AssetManifest.json": "facefe501995dc6c5a67c375ed053297",
"assets/assets/images/00-00-clear.png": "38d8bfd808622b0dd3a3d27f71628429",
"assets/assets/images/00-01-partlycloudy.png": "3cef6b926ad85d6ccd57025e8b9328f1",
"assets/assets/images/00-02-mist.png": "7b4ae870a5e98eeeaeb5b3f305397f28",
"assets/assets/images/00-03-cloudy.png": "e2b4de307725cc4149aadd054d045ae8",
"assets/assets/images/00-04-overcast.png": "fd230997c5e94ab40285448cd801312d",
"assets/assets/images/00-05-patchyrain.png": "496ba427f5ddaff65047c94a2f952056",
"assets/assets/images/00-06-patchsnow.png": "d2e95037b8180a6832b0b5eea805eb61",
"assets/assets/images/00-07-patchsnow.png": "d2e95037b8180a6832b0b5eea805eb61",
"assets/assets/images/00-08-thunder.png": "08ce6f378012eda70ad7f69c2e3df18a",
"assets/assets/images/00-09-fog.png": "7b4ae870a5e98eeeaeb5b3f305397f28",
"assets/assets/images/00-10-lightrain.png": "42d70b5a2d7a89c3c60fff21b524fc5d",
"assets/assets/images/00-11-heavyrain.png": "99b0b2d3f75b828c373dcd8207489b6f",
"assets/assets/images/00-12-lightsnow.png": "be2864bf36baf66e5fe3b6cbcc2cda0f",
"assets/assets/images/00-13-heavysnow.png": "aa0f83ebb5d1a92dbf8a33260e772baf",
"assets/assets/images/00-14-lightrainshower.png": "496ba427f5ddaff65047c94a2f952056",
"assets/assets/images/00-15-heavyrainshower.png": "7371371e7c17ca05a5b659f2199216ed",
"assets/assets/images/00-16-lightsnowshower.png": "e70d22b83dc2e8726ab5a2d3875caae8",
"assets/assets/images/00-17-heavysnowshawer.png": "e29233da213b57300b208c89dbff9e74",
"assets/assets/images/00-18-%2520heavysleet.png": "e29233da213b57300b208c89dbff9e74",
"assets/assets/images/00-19-lightrainwiththunder.png": "1185d7246e5879ff16fc95bae14c5206",
"assets/assets/images/00-20-heavyrainwiththunder.png": "67618b8968a2511bbe905426693ff511",
"assets/assets/images/00-21-snowwiththender.png": "e62c458964bfe95ae8a158dd60e98fef",
"assets/assets/images/01-00-clear.png": "af3a20d2d8cc46b0e64d6200fb06c002",
"assets/assets/images/01-01-partlycloudy.png": "c01ba88ea1edfd13108c4ae891a0fb8c",
"assets/assets/images/01-02-mist.png": "7718a8bf4ea3b847867094d218b04183",
"assets/assets/images/01-03-cloudy.png": "6b045b6812a46fb7520699b6e053a5a4",
"assets/assets/images/01-04-overcast.png": "814890439d9143227f8a291f911ae24d",
"assets/assets/images/01-05-patchyrain.png": "dfa0a621c6bd5955eb9715e188411eed",
"assets/assets/images/01-06-patchsnow.png": "be2864bf36baf66e5fe3b6cbcc2cda0f",
"assets/assets/images/01-07-patchysleet.png": "35b8d70e4f792bfdf9d4491e55bc5504",
"assets/assets/images/01-08-thunder.png": "08ce6f378012eda70ad7f69c2e3df18a",
"assets/assets/images/01-09-fog.png": "ae386303ce687ee4aefcaeb5212cbb42",
"assets/assets/images/01-10-lightrain.png": "42d70b5a2d7a89c3c60fff21b524fc5d",
"assets/assets/images/01-11-heavyrain.png": "99b0b2d3f75b828c373dcd8207489b6f",
"assets/assets/images/01-12-lightsnow.png": "be2864bf36baf66e5fe3b6cbcc2cda0f",
"assets/assets/images/01-13-heavysnow.png": "aa0f83ebb5d1a92dbf8a33260e772baf",
"assets/assets/images/01-14-lightrainshower.png": "6e29fbff1de30222983092a75c49d25e",
"assets/assets/images/01-15-heavytrainshower.png": "2954fe0530c9c0a402be5229e56c13e3",
"assets/assets/images/01-16-lightsnowshower.png": "db331749fe696dbcc5737820bcd429fd",
"assets/assets/images/01-17-heavysnowshawer.png": "e29233da213b57300b208c89dbff9e74",
"assets/assets/images/01-18-%2520heavysleet.png": "e29233da213b57300b208c89dbff9e74",
"assets/assets/images/01-19-lightrainwiththunder.png": "1185d7246e5879ff16fc95bae14c5206",
"assets/assets/images/01-20-heavyrainwiththunder.png": "67618b8968a2511bbe905426693ff511",
"assets/assets/images/01-21-snowwiththender.png": "e62c458964bfe95ae8a158dd60e98fef",
"assets/assets/images/cloud1.png": "8c80cdf6014ca49938b3a619f951eaf3",
"assets/assets/images/mountains.png": "f312c78428c353655c5e0cf4847ec12b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a15db195c8cbb2a367faa28b888669e6",
"assets/NOTICES": "c06fdb552ec0779ecfbf5afd8db32649",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "6e0c39e50c93b02139297cc52e596203",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "902e4898a7cf58b525b2bf46465a01eb",
"/": "902e4898a7cf58b525b2bf46465a01eb",
"main.dart.js": "8203c504c099b4da9761838375f03191",
"manifest.json": "b7b1a4f4f16f93ea2d81cdc6f8f9f82a",
"version.json": "aff7d8f4049fe12770f08564c3b574d1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
