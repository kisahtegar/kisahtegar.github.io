'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "7871a0a3afb4e7ede968bce2e309a353",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "395b63fcada77787413e08c2f6b1bf92",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a5e5f46b8ddf646116d43a19b1dec98c",
".git/logs/refs/heads/main": "fe1bc095fe4920c2245964ca66f966d9",
".git/logs/refs/remotes/origin/main": "3988eec03a0298c3f39fac38313a0258",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "0bf42f3a0a34f14c1568e94e1218d28e",
".git/objects/11/b17cf29e25e83a32ab6f9fc245cf327314a629": "7f002a4bbf8631cfe3c189e004dffa1f",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "3db61a28ddf5b372a0bb9c1aebee3548",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "fe2d8e778b22f092b9152a9ff9b15c75",
".git/objects/24/3a66460891f3a419fd001e6da6fa0c525a004e": "4fed63e1270f1e6dec4f3376f065883f",
".git/objects/27/c8fb75da0d589b3e4953f285ea4133cf6b67cd": "843e7bbba8d52801cc56f837a3cba83f",
".git/objects/27/f205d6749fa2526d11782d2be0743c45461c5b": "ec07116f43771be0ba5f81e1903df26a",
".git/objects/28/fcb415ccc5f4fdcc3689c6244655970fefa1da": "d5024c845dafc452de0e91cb82ab78a9",
".git/objects/2e/8a0e1f4255ff8d1c9667e07f025e231cb018c2": "50991f344a4b3d102e953ba003d2b6e7",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "bb9574ed7cb1d141f894d620747ed2eb",
".git/objects/38/10b719684487a0622e209b37c8759dda423532": "23767184fe6750d987da1ad821f5fdfc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "54f8ff0d387380c0b9c25486e6bb6bce",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "02ff1c25a33d1347946d8ccd1885bf56",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d1bd03faa2307e273558a266af9137e5",
".git/objects/4e/177df025f8b92be51e2e13a576f809bd4eb126": "470000aabb5c3ff1ce81eda243bef3c7",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "f074d68db6a8d60f7a342d33a00bd1e5",
".git/objects/53/639b4a98aaf2ef5eaa3d3d5ef2cb4e4a99cb18": "d17a723b38eb2ae513ee3dc2f3f5fb42",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "23cf995e86ed0d89e7f722e29761fbec",
".git/objects/5a/3c773ce8e53a20bdbf9e81810bc3d892d238f8": "45bdc139df255a4639a91b290b562265",
".git/objects/68/e55e92e08cc08e72c8262bebc5f8e1785230de": "5a746789947bebe535949f25f5ef16dd",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "1a8ec11d61f9193f1b84391f4ff607bc",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "9a990f3af0764c0597d34eee31ac5b45",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "5a97e1409617516f21f4a27552287f75",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "e15e7c29e3ba2dc11ccd41a6296eb02a",
".git/objects/7e/16a703efdce650816e7be8b72351ed4d7e9202": "871a757129358d44371e353e17a0fa2d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "e33c70e0eae492a795d978ed34591073",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "7661d6aba86f2c9273f89e786dbdee7f",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "42bb9b457e4cac5f56904079695d5a98",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/a3/c2522a4b19108dda924e81835509df3cc65a30": "d45564ceeddee13e9d86fe840bc509b8",
".git/objects/ab/0867b2eec61d81bf121cd0c6e3ce00201319e7": "0e96e94d1aea74b950023ca4281e7335",
".git/objects/b1/1635566001e1cf4a5c92371de07bb1228e4ac1": "0389bc48e330f7226ba86b214001a14c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "335043d4459101b7d18e321be7579883",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/bc/68129905b08879f3ed1fed9b5d2b820e000867": "6be65a8421398be2ca52d84ca8737ee9",
".git/objects/bc/6e9ccb02e97ed2ca2ef6cd1c7ad9fb52a8bc9d": "bff03e351b78b6fb906925777690199b",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "5fbdbcc2e1d8e32aa8d618046ddd679e",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "c72b94847e962b280e83accd95fe52c0",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "c790d6d58d78dbe985ba0c8219d5bc11",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f0/38e2d51258dae1e89df9cf6365aab5c2e5cc82": "e111cea9f3aaa05b6e254569b6e7352f",
".git/objects/f0/d92991a1ccca11ac633ecca836faab2e35c9b1": "65d7b2241b3b062e0c61417d5572eb55",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "8b1b72eb5a0628b5cb8bf5eeaab7a972",
".git/refs/heads/main": "426ca75abc48e74953a1f75d9c57495c",
".git/refs/remotes/origin/main": "426ca75abc48e74953a1f75d9c57495c",
"assets/AssetManifest.json": "0ee515e2b0cb98a6b53dd587b72e8a5a",
"assets/assets/images/background2_image.png": "1d6d5dc8e6ff8e5646d9089e4614551c",
"assets/assets/images/background3_image.jpg": "99308f6e2b1267d9c801fd6404ed1c23",
"assets/assets/images/background_image.png": "2ea237d6ae9b0db15db964efa559aab2",
"assets/assets/images/gw.jpg": "6d9f3c9d528735fff98b6c502a870dea",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/mine_image.png": "de144bcead7a6b2a7694df50c9980fde",
"assets/assets/images/mine_image_2.png": "4168d05e4d4b5f90e0bc5a18f40a0cec",
"assets/assets/images/sign.png": "09ce9472b81f95dc3193a4ce58872bfb",
"assets/assets/project_images/hmsi_app.jpg": "98d3fd1e551906ca24c1c8bf5fc0fca1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e890899ae486e9fbc72a89c2d5536b9b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "868fc8754d797446b9d8ca2a4b52ef72",
"/": "868fc8754d797446b9d8ca2a4b52ef72",
"main.dart.js": "4d082976149b77efe24993deb02d4b88",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
