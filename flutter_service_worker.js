'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ddf33bc6edb6012389cf2db0138a004e",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "96f8e02cd73b27a0ef07e4ccfb47b262",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "8f5f5f6c0373c01fabada996b4833846",
".git/objects/0d/c87cbe359ed347bc9835caabba10249dd4a48b": "0998c1e0ea2d222d6a68a341412683d7",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3b/93802d851c71971595f46da4eeb72f3e230669": "8713f86371d8a70b6686a4e6f59a9aa0",
".git/objects/34/7981982afc2c4745eecdf9c4e606ed5daa0d0f": "d3f62d5177b5d3a4a7e06dca728f2150",
".git/objects/9d/4314f1fde97887fbf1c73971e59b6266b6cf11": "9a23b1c8009012b89efec98aca944bd7",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/d7/047e476524c04da654aed330c32e8e62789535": "674f355b3d9e78fd032d1b7f3a49315a",
".git/objects/b3/7ab5d6c1a5e01fbb043bd99295ca3d59d6fcb4": "6f6dce0e9a66ce3390d82f1aae1c5eeb",
".git/objects/df/26d9152e5238352a64c5382b823645dad74958": "1576914d33718a089f05c250c646b530",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/47d78d89f76610b053be3fc663d959d1784de0": "079117ab9c13fe960be3cc3cdd6866f4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/dd8adc8e9f6f7549974c07d2c385b17ad2e6b1": "3a8664edeb6d1dac5e1a625edf07839a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/56a044e21baf0e002af255354c27549f0b3ff5": "6dfbc8c41031e16fe1071d33fc3c7053",
".git/objects/cf/9fe06aa2ae766b1d9f809eafb12d3700443588": "cc588823be3bed0a2eb82e5bc707be7e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/85bb0a44aa7e812e6ef55183df89a5d25a0aea": "acfdc3089bed1e61d82ac0e5acdc310b",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/34a05cd51d0e746c47c05f3dd09f40c36980fb": "dd11bc6169e00c7758b026aa26c08405",
".git/objects/28/559f25932eb50a1170e22742ea6ff10cefe251": "401c9c3d4143111e06209af06865d079",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/290eda6d6d5ae8548077ecbbbb66e08ac32ab0": "96f85adc343204b32dfebafc1504a5ae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/caf2a986ff6a8b11a5c69d0ffe993ccda0f3b4": "d31b216d39e8ae1cca2204340bfaa407",
".git/objects/09/14dfa6ce97e7fad040ff3a0cf629c9d61ade74": "477039188c667d9b3a3f6de70e111752",
".git/objects/65/00fa01022b622f5c395cd798eb881cb355c0c5": "7b5ec9476d80e5cf1c5a74476a4583fd",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/5f8527ee13186b3e0d216988c5ba75cbd2b88c": "9adf7c85e409e9c7948e56fc0856fb75",
".git/objects/a9/5fa782bc76879d2b4df9379099d3853c4c7514": "00757a19216bb6683e187a73e7aa652f",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/690d9cc7319495bf7cf5e03dc47c5c1b881378": "29b32d44d47ff5fa53d981ed025d0f87",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/cd/939474915defa3a663635c67a69a3c05b2fe06": "61f231e39ae8765d2d2b0d155a3310b1",
".git/objects/fa/9e737e1b1da6717e61705c790665e2c4bbe54a": "0c29d3ab1c026c73151c3f48b3c614d6",
".git/objects/2d/2866e1652d7925e97b8393fedab2b40ba5dad4": "5cf2aeb9f15de5e25f5c263334b80339",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/77/5903e21a60d5112c12234ac2268018fce4f45a": "10f622ec84b4adbfbc5e3590ca29eb57",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/401d78675098118c742ad9086b05f4e90e3028": "a08ff178021ac47fb02128bc80bdf27b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/7f/78d1e8c3f9a67fd03ace6757824f7a4efdee85": "8da14071601f6360480c808b5960abf8",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "45036b213b0835024ae49a5c5a2decac",
".git/logs/refs/heads/main": "6e2a9a6daa6332c01fb1b22b9f4c5737",
".git/logs/refs/remotes/origin/main": "7e7c17158c4e4cd69b4b8dbb208668e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e3462103c533581e5cad001d6390c6a4",
".git/refs/remotes/origin/main": "e3462103c533581e5cad001d6390c6a4",
".git/index": "88d563a74dde64ad880411f11979cd54",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "07346aaf48f596264ea74c1504ccd4b3",
"assets/NOTICES": "99e445c88bd3e65cbb7ab929573f4155",
"assets/FontManifest.json": "1e2b2284e66a9e54db0bfe7ac4f8d5d6",
"assets/AssetManifest.bin.json": "26a34275050abc926df2a34435476010",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a0b36537f85972bf855b8025c8d825a7",
"assets/fonts/MaterialIcons-Regular.otf": "ccf7f79029d44ad3accae92615dc9279",
"assets/assets/apple-android.svg": "426bc60b883f3ef451bda1d4b66f56db",
"assets/assets/bg-triangle.svg": "403a781801154964e07a4bbbf0462a95",
"assets/assets/video/vid.mov": "bfc2aed308f14f62c50fb62318171450",
"assets/assets/android.svg": "d2b085c3705d2467edfb6ef2c99ef180",
"assets/assets/flutter.svg": "faf8f499559f6b2f815f454a5794eae3",
"assets/assets/icon-close.svg": "919ab92a5d671f1b7fdd3e5f97eb816c",
"assets/assets/icon-rock.svg": "8ce1e109bb43912192f5ba8dfcca005e",
"assets/assets/image-rules.svg": "5d74d25d9c64bde346585ec7e7587a69",
"assets/assets/sounds/spin.m4a": "4f2eb0c5566fd851551155cae074a0ff",
"assets/assets/sounds/spinning.mp3": "cd2d433e00f99128f038d5abacea8aee",
"assets/assets/dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/logo.png": "eb3d8b4dab0fbf12fb67f8f151d9dc31",
"assets/assets/icon-paper.svg": "69a8c2e96b659b35a3760c79123be610",
"assets/assets/ios.svg": "a73ff5f0e4b4b866f0ac994248d92695",
"assets/assets/fonts/MyFlutterApp.ttf": "49ce079f3993d4964652e9ce6c252fc5",
"assets/assets/icon-scissors.svg": "bec2f9b3d60cb80987106bb49205c53f",
"assets/assets/logo.svg": "759a207509c8dad61b7e365b27e0d0bd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
