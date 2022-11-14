'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "53fb59e54fb87bb44dba7c2200e1dead",
"index.html": "6f0eabaef7aedf26772ea5a18bdd3ca4",
"/": "6f0eabaef7aedf26772ea5a18bdd3ca4",
"main.dart.js": "1c6b4aa1cb0e71d2d6944aec690fba5c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ace26d0c71a6ddf01f5f72671a426a89",
".git/config": "9921a1cfff162084c7dc17a11f42e40d",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/68/40eba344df6b73261f7291b1b88bb6c9ca5753": "e9c242976fd81a1a2a4009e53c4d7e1f",
".git/objects/6f/53ac984c1d86b830f953f63af6a757748cecd2": "ef3142908a0e297611154c31fc05bc15",
".git/objects/03/368376ea2a407edea54260ad92ceae928c701d": "50937c4e6a9b347a092dbd0d8702b45f",
".git/objects/03/eee8eabc8209371ac81ab4b63995b5b8e47d8e": "4d131abbf94398c277177f28d70c2e76",
".git/objects/03/debd8c4fb3dbb30f90e518daa1f8e1c252d051": "197f7b8c415f187322553d7618298f85",
".git/objects/9e/5ed97639b88eb8f8f4299d6ecc09c924fd7769": "43bf519e9b4c30f532a5f414f7306a2d",
".git/objects/69/b02321c143d96768d0e7d447451db14627fcb0": "f0a38689cd08bca74089411674b296ba",
".git/objects/3c/d15ee94e98990e4e13aff020c265b6c9d5dc9b": "68629c2944984b70970a29f397477c18",
".git/objects/58/d9ce88861c316b37b8f8ecf29b27bb81c27acf": "d8b709d5d6eba5674cfbf49483fceea2",
".git/objects/34/bf7a6d636bf0f18495ab7a9dc7d939fcdced82": "9a133649e10ee04e9cf5c67a3a65bc76",
".git/objects/ad/281cda6f31ce277829e1b75de0fb427be9e939": "7a004acf55bf10f68d6daf558692576b",
".git/objects/df/fff0551445879c4fcd7cc4659b5d2339a58162": "2dfc38710ef4348fd3ac9d82df7f0201",
".git/objects/da/0a57a3e607b6998a6be4d11e9df9dc2762d1d4": "bd75af4bbaa99847ce5ad4518ab4dfa8",
".git/objects/a2/41f7a5794b4115022eeeb4f0ff460448368998": "b798855ae499540d27c357b77cd2c6ba",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "018219273c065162f9d3d7b8d5dafdb2",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/1a3ef34d998e6af1c8bda32ebf53f759f2bc54": "85a57d7e0f28e98a5672eae9943a5e08",
".git/objects/fc/95943b2b79fa21dcbde5b4448755e42cbf6ace": "01dd195960504d60b3128850e7d31eb0",
".git/objects/f5/7ec3d9ac14c4ae59cf757f58b5a860441bc424": "44bef75b9dbb79a73dbf37a6a7e8111f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/ebb2acd1ae922ac55bed92b32eff828704cb1f": "d73eb0a5a505830f011fefc0505641bf",
".git/objects/1f/77d3c5972ba2364d9e0a136ef81e2dfcf05b31": "afc0ebe89430eb9c38809aaf33d5b786",
".git/objects/1f/fee171800aeea22dbd352b03f4b0c4db967217": "249e0e3c2ab183624e6e56e7047e84b9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "19e60f5bc6222b1b9323c8f1c22f3eab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/11479fc414a160530ec547c3b042046462b132": "09b057faa71d63a5e791f1e6dd23f6ac",
".git/objects/4c/d382cb395921116892716311aacb04169c973b": "a040af89f47165f5690889ade21aad28",
".git/objects/21/49e9e45e85585999d4658300b6dfcb9002947d": "3f88270e79dd5dec0d927c69831096bc",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/2f/d3a125807c33e6944b4835012f15e91addfa62": "8fdeeadce64b84ac872efcf59c00e038",
".git/objects/2f/9f803e0d0a7f335d1cd92ac3426894d580b733": "a75f703a9a338db881e090865ad28999",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/00/b6be6cd11eb6938d0dba313e65c968992f9a1b": "841ad3aeefc6b64a4eac45704935d898",
".git/objects/6e/a567d1c38039380feb54cdf932e66f7ba34161": "84b7570d5dfe0233097e87afe11dfe4e",
".git/objects/9a/f4bfde35d436db3b9882431fd178e61ab9e53d": "a01927d5462b6ded9a52011178c707b6",
".git/objects/36/2614d79c50b4a6ef203e6bbad7621f3b3c4a3b": "c98747ebb3b4fca950ce87723cdc8417",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "eff1a99b44cd3e31fba44b70349430d8",
".git/objects/5d/3407e7b0522bab66316a4fdbf1f9dbef487e49": "267f89db76567c6e7f6a928ae2ed2b10",
".git/objects/3a/9b974520fbfeef05e71cf0abe4d7c4abd2e1f4": "ea5aef8cdafdcd9498ded8c24c84c10c",
".git/objects/53/6b8c6e9b1ec3c183ac39d50a906674fbdca30f": "00f86502b636c08ed10deea5f4e0b870",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "73f565104845037c88c50641f7d96474",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "9553e03344b770ad0280f1679afc6930",
".git/objects/ba/415e1cc1e320e8c319a63229a9040e095d8952": "acae735395a801ee52bb0db207cee985",
".git/objects/a9/6709f5ccf25420027f05662d9e56c1ba8f19ad": "3f41706f34d54227778dd4b08ce8bb92",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
".git/objects/d2/8177e74f817ddb531c5864cd9ae9bead336142": "2db06b4804be9d064f0785bd4189c43b",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "f03c79c10e0f4c2bf6eca1bb511eb632",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/9f7358fc313eac496ad722dc867847e2c28fef": "0328c4461a15093f2563d219213a297b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/84167f6dd46d85032d5880b6b13c5410f6103e": "c661690eb9b674a0fae77149b8bb2cd4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/d000be6cf1a9c0cb1584603880d7a99dbfd657": "040cb70d7facd70f47cc4c3d5ea68770",
".git/objects/e6/26bd6404dcd19ce9074ae3786ac0854e1305dc": "edf6a2ce293abcb2a85554a6a3d99c2b",
".git/objects/e6/6c3dda203b8175dd170d6630c6a7da4c1a0681": "c8fe7ead2cd08a9ac819924498d973ab",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/b2c44ab75726bee272547f2ac05cd0af241364": "3428120fcfba82fca114d3f59e3b2f9c",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "0146e01f93875c1ff3b92f71106cb50c",
".git/objects/f1/73ab92e4fb132da55cbdaf2a50c73883990cd7": "04e589f1d4eb41fab3d2606321d3f586",
".git/objects/f8/3d2b18c7f5c7567e52bef66bcc45b50e20ecc7": "45cd86bcedba3bc702ea2b4d3a13e5b0",
".git/objects/ce/4e775d3e952aae4749a15147e66b30613820b5": "b7bbbe7da9aaa71e16a84b6727b786fc",
".git/objects/ce/25c9f5823064578e7fc092ffcd23265ee87381": "77175388a99082091796138c5215e804",
".git/objects/e0/ce62ae9c7cc46bf206aa6cf9aff374663b4486": "9c5783f73733e595aea20989d3499c17",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/b45142a9b9d19c142dadce649ca5a116ed94bd": "a3fbd5f2a721488422bdeb0cca164a84",
".git/objects/1b/414f5c99741dedcefea03f0786675797b3c7d1": "201e5b9a89b746bfa4b619188b84ca2d",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "e3a854772bddd6793f54067b2b9bea5b",
".git/objects/77/2f59782716e4210b702608c05d0a6e6785ddc7": "65b3597cc2d842187970f9286754a1b5",
".git/objects/4a/f1d6f58899a78e0cc737212977da77fb166c09": "dbcfc0c5b4894d5aa59c3baf40e800ff",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/508483064a0487f72d55a6c0ddc6c5b0cab249": "742545b71d8650167b2c2daa9450a928",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "91eb2972e1419a37ffa9c1a3d03226ff",
".git/objects/76/0e885f9d5d1c8fb3913821b172f697576e0463": "422e8889f6eb3daceef89c644ef1913b",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/1c/f065a8fd71d0dc92f06ed0e7a7f702a3324372": "a0a5f1234e2a73ddf52cbd3b285339c7",
".git/objects/49/68a66c3a9ba3063380e8c973fe4af60122752d": "aa0e0467f7e009aca532687d0533bd87",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7a/21f83d4043859c8c0d4ab3844e97ac96b153a5": "129ca9e21f882e6551328506a2f319d8",
".git/objects/8e/57b314a8438d56a4da84ebd8e1ac3399302a93": "6bb008356c7f3d49e76adbc7a77d2b4e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44aadd190203e516211c965721c09289",
".git/logs/refs/heads/main": "561b04b313be8998b626b619a6d36bf7",
".git/logs/refs/remotes/origin/HEAD": "8af70ac9515e2f4390b9dd5833973c50",
".git/logs/refs/remotes/origin/main": "d6ad31f7f643f9a655cd1eda75b21c41",
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
".git/refs/heads/main": "5bef9340a4f295f4d1ab928322c584c5",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5bef9340a4f295f4d1ab928322c584c5",
".git/index": "d2ead834a692a3361f6b188b7019bfad",
".git/COMMIT_EDITMSG": "b064a020db8018f18ff5ae367d01b212",
".git/FETCH_HEAD": "8a60a75cc546985e06f634fddc66cee8",
"assets/AssetManifest.json": "9cb7199f0efa249dccbc5a1fe16edce4",
"assets/NOTICES": "75f32cd738e6b8d0cc3334fa20e31e6b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/shaders/ink_sparkle.frag": "282861aabe828a67fe36987689443b46",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/contracts/abi.json": "cc3d6885d7fa1fb17f1c3277fdd420f4",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
