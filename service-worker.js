/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8b30bde6f436a7b8abe57596df002544"
  },
  {
    "url": "assets/css/0.styles.9b71e8e9.css",
    "revision": "746dcc73998540bdf894a389e1a44e97"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/cli0.6258a2ea.png",
    "revision": "6258a2ea514dcf6717b6913f1efadf61"
  },
  {
    "url": "assets/img/cli1.157d815b.png",
    "revision": "157d815b542174c7107d63b6715d74df"
  },
  {
    "url": "assets/img/cli10.28211ec6.png",
    "revision": "28211ec6e69c63ff1f3c91b13142ce35"
  },
  {
    "url": "assets/img/cli11.63df73b6.png",
    "revision": "63df73b621e32a4b7f864a29e1540d9c"
  },
  {
    "url": "assets/img/cli12.92ca2d4a.png",
    "revision": "92ca2d4aa6be9ee4cedf6a2dc00fc783"
  },
  {
    "url": "assets/img/cli13.47267d69.png",
    "revision": "47267d6923585e11c603c1cdac200b69"
  },
  {
    "url": "assets/img/cli2.6e58fccb.png",
    "revision": "6e58fccb408fb6f7225fe12ff83c2e0a"
  },
  {
    "url": "assets/img/cli3.cb017fe6.png",
    "revision": "cb017fe6e2080494b01d30000a267a14"
  },
  {
    "url": "assets/img/cli4.fe12d4b5.png",
    "revision": "fe12d4b5eb2514d002ca773ef0b1fa74"
  },
  {
    "url": "assets/img/cli5.089ce792.png",
    "revision": "089ce792b06c482e4d731c10e00a81d0"
  },
  {
    "url": "assets/img/cli6.92c13d41.png",
    "revision": "92c13d4178d1d2d6df0d827a738e5c37"
  },
  {
    "url": "assets/img/cli7.5a8dcb19.png",
    "revision": "5a8dcb19665d9b47bc1c4d35c340fa84"
  },
  {
    "url": "assets/img/cli8.af25dd8a.png",
    "revision": "af25dd8a6e769827a44ee69c41cb4de4"
  },
  {
    "url": "assets/img/cli9.4b1436f8.png",
    "revision": "4b1436f804e49152127d4aaa13bddc6c"
  },
  {
    "url": "assets/img/get_result.e6fad5cc.png",
    "revision": "e6fad5cc8fceaca20c48a23a3d5b7cfc"
  },
  {
    "url": "assets/img/login_pro.c0870f74.jpg",
    "revision": "c0870f74664b31a2e83f613bb847e9ff"
  },
  {
    "url": "assets/img/login_pro2.7b41fbfb.jpg",
    "revision": "7b41fbfb617590d3d5e5c37f426a0e79"
  },
  {
    "url": "assets/img/performance_manage.e0904df9.png",
    "revision": "e0904df9e7dba82af2ad542641db1cb1"
  },
  {
    "url": "assets/img/process.7d0ead65.png",
    "revision": "7d0ead6547036efabc638ab6535cef6f"
  },
  {
    "url": "assets/img/sell_target.a8d8eabe.png",
    "revision": "a8d8eabe359865212c19c55a342845b2"
  },
  {
    "url": "assets/img/wx_login.2fcc9f35.jpg",
    "revision": "2fcc9f3575982a8fc3f05f29ae2748c1"
  },
  {
    "url": "assets/js/1.43efb79e.js",
    "revision": "ab23a52c99459aec3ae447757a760c27"
  },
  {
    "url": "assets/js/10.86661fab.js",
    "revision": "59af5599f5da848a8dfdcd67c5b6275a"
  },
  {
    "url": "assets/js/11.9284f3fb.js",
    "revision": "d45d43f8cbab45240af9da0818261c10"
  },
  {
    "url": "assets/js/12.15007db8.js",
    "revision": "1fa6f0ed27937de51fe5494ba799ddde"
  },
  {
    "url": "assets/js/13.b05cf968.js",
    "revision": "16d77163adae1f6e62e36d2d7e215146"
  },
  {
    "url": "assets/js/14.9bc216f3.js",
    "revision": "296ff0d8e9da84f0f6be7621bf3f88b3"
  },
  {
    "url": "assets/js/15.43b71447.js",
    "revision": "91e71e4c734192e18e4ab17c1650f552"
  },
  {
    "url": "assets/js/16.a5b3aaf8.js",
    "revision": "c4e5608c17332fcded3ab1f901e34211"
  },
  {
    "url": "assets/js/17.f0632293.js",
    "revision": "144f5e18d8e01e4cba155d351ff2a8b0"
  },
  {
    "url": "assets/js/18.cf30dd93.js",
    "revision": "f3fe68fb908250c94efae7e3210eec96"
  },
  {
    "url": "assets/js/19.962611ba.js",
    "revision": "63cd8f92749f20311773211f9fcb03d0"
  },
  {
    "url": "assets/js/2.ab78cd66.js",
    "revision": "e1faa5a2eab75d7935cca80401b0f6e4"
  },
  {
    "url": "assets/js/20.5fd90141.js",
    "revision": "6749438818219772b9cc24f0f6e85d99"
  },
  {
    "url": "assets/js/21.0ccf5833.js",
    "revision": "b59fd94175fa720ec6ff5d136c1cd9b7"
  },
  {
    "url": "assets/js/22.86e5998e.js",
    "revision": "b8621363b1e234393da6a49a9692c909"
  },
  {
    "url": "assets/js/23.72dd629e.js",
    "revision": "eb97255c76e07f24ea9de72af3b36b9a"
  },
  {
    "url": "assets/js/24.c2bd8914.js",
    "revision": "92f1b9036dbc86eb7b341f4a114cb1a2"
  },
  {
    "url": "assets/js/25.48c71f35.js",
    "revision": "3a8d23ba682013c5d2b84199c909ce51"
  },
  {
    "url": "assets/js/26.02ca05d2.js",
    "revision": "6c47eae2c5d5cadac217711536637da5"
  },
  {
    "url": "assets/js/27.68a19490.js",
    "revision": "2cd3a736d38e4342b98a55257663e587"
  },
  {
    "url": "assets/js/28.bf4ac0ff.js",
    "revision": "c782e02cc2d62d85ab18d84c219d307f"
  },
  {
    "url": "assets/js/29.dd0e2efe.js",
    "revision": "c9abb420d13b384ec7b637ded4f87148"
  },
  {
    "url": "assets/js/30.8ae24bc0.js",
    "revision": "fee0f5ee62ce2e992be4bb5226c0e5f7"
  },
  {
    "url": "assets/js/31.5c9fbc44.js",
    "revision": "f8a6f088e7abc02aa58e4d725a85e581"
  },
  {
    "url": "assets/js/32.d1f16935.js",
    "revision": "489b37e2c51a509b669f4e00a2ac26fc"
  },
  {
    "url": "assets/js/33.c837d2a3.js",
    "revision": "fb21c85f887221941ce468ea43c0c24e"
  },
  {
    "url": "assets/js/34.271bc466.js",
    "revision": "37202bc7ba88efde840834bfa64114e9"
  },
  {
    "url": "assets/js/35.29bee1ed.js",
    "revision": "da21d8aa0e67dabf47310bec0d70a586"
  },
  {
    "url": "assets/js/36.2304bdf1.js",
    "revision": "cda86e717f3bb6d6a1177fdfd1c57cc6"
  },
  {
    "url": "assets/js/37.e93cac58.js",
    "revision": "54960fad094adb7f508eecae582c805f"
  },
  {
    "url": "assets/js/38.816db319.js",
    "revision": "5d7a8cdb64e2df56a907bc8f56c6f374"
  },
  {
    "url": "assets/js/39.0d4bb9cf.js",
    "revision": "0cb2b63dce750c82170f1a2c24052797"
  },
  {
    "url": "assets/js/4.fb892f91.js",
    "revision": "f0f281810447273ff6421698cd1713c2"
  },
  {
    "url": "assets/js/40.6fb75ff2.js",
    "revision": "6c7ec8fa21daceaa90dc89db19c50187"
  },
  {
    "url": "assets/js/41.b40b5d94.js",
    "revision": "261b872869cfac6f9347fa869af94b97"
  },
  {
    "url": "assets/js/42.dd9d45f0.js",
    "revision": "333992235271bd72b498f4c5ee44d362"
  },
  {
    "url": "assets/js/43.70cbd464.js",
    "revision": "4e86b89efe09f35543d77b82ee532b22"
  },
  {
    "url": "assets/js/44.0e4683f4.js",
    "revision": "6704c8985562f9ef0e23d460909abcee"
  },
  {
    "url": "assets/js/45.a9de11f2.js",
    "revision": "1224d2c0dd1408e4d8c21a13ff6d75ff"
  },
  {
    "url": "assets/js/46.ed3dab7d.js",
    "revision": "527f47001e869e3b329001c222d29151"
  },
  {
    "url": "assets/js/47.7ecc3081.js",
    "revision": "f322649e5c390f45db83b51ff45b6556"
  },
  {
    "url": "assets/js/5.b66c608a.js",
    "revision": "3b805ecb87694143be2272510ee7483f"
  },
  {
    "url": "assets/js/6.e0d88385.js",
    "revision": "c9654978df56e06bc26f74356d438bbb"
  },
  {
    "url": "assets/js/7.28e67498.js",
    "revision": "d962832426962676651f472352b1c1fd"
  },
  {
    "url": "assets/js/8.e5291ea1.js",
    "revision": "2fc7e11f5dc17acbbd4b79e16e1b7fad"
  },
  {
    "url": "assets/js/9.f3623830.js",
    "revision": "488033c9bb3366b344ed770ff7305ae8"
  },
  {
    "url": "assets/js/app.e39775f7.js",
    "revision": "89b3f2222394b0de6455451ea74c8adb"
  },
  {
    "url": "categories/http/index.html",
    "revision": "138a09df59f9c13d5ceb9995e5f387c8"
  },
  {
    "url": "categories/https/index.html",
    "revision": "f29fedfd7203622f5a8c902b34ba308f"
  },
  {
    "url": "categories/index.html",
    "revision": "56cb724b6a37973305af14fb145686e1"
  },
  {
    "url": "categories/issue/index.html",
    "revision": "dab9a323dc55071ea149e4bb93d962ef"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "f47e80bf39687ccc87ee4a91a80bff84"
  },
  {
    "url": "categories/小程序/index.html",
    "revision": "c39dfd6572eb33cc451315b86cddd511"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "61d8e4549f767dbecd33670342538cea"
  },
  {
    "url": "categories/管理工作坊/index.html",
    "revision": "825be030556368278f597bd070a2b918"
  },
  {
    "url": "category/applets/01.html",
    "revision": "16a3aed53ff5c33e45d36f5bf2bfa415"
  },
  {
    "url": "category/applets/02.html",
    "revision": "bb78513942fee7fb67904328872a0baf"
  },
  {
    "url": "category/applets/03.html",
    "revision": "bffde1a433079f7625c1e071ae6db70a"
  },
  {
    "url": "category/applets/04.html",
    "revision": "9ef7804525b8bb7288536b862e1b0b0e"
  },
  {
    "url": "category/browser/01.html",
    "revision": "3cd0cafc4d844601ba70b12749e0b6d8"
  },
  {
    "url": "category/browser/02.html",
    "revision": "2babc572ca6864a316bb0058e46fe5fb"
  },
  {
    "url": "category/browser/03.html",
    "revision": "bcc4df6977b9021966595f111f899b33"
  },
  {
    "url": "category/browser/04.html",
    "revision": "5d39cca3ac3ee81266f6b01c6e4f83ac"
  },
  {
    "url": "category/browser/05.html",
    "revision": "f92dae9e489d89c3cca7bcc8dd00ce00"
  },
  {
    "url": "category/browser/06.html",
    "revision": "88bf7ec92015f57da33497d504ce2741"
  },
  {
    "url": "category/browser/07.html",
    "revision": "ee8463a816ff12dc52063e74d3ef0a99"
  },
  {
    "url": "category/browser/08.html",
    "revision": "68676fe93d6e8aa9da5f210f90c832ff"
  },
  {
    "url": "category/browser/09.html",
    "revision": "c421561ae5695e8dd5a29d57901b4418"
  },
  {
    "url": "category/browser/10.html",
    "revision": "17b57e9f08e05f23fa033734842c6a32"
  },
  {
    "url": "category/http/01.html",
    "revision": "99d63b425839f504874e5da630aad300"
  },
  {
    "url": "category/http/02.html",
    "revision": "8ff234bbc1dd76af64125d831d34ec43"
  },
  {
    "url": "category/http/03.html",
    "revision": "d350b3b178a2d949c3249943a773eba9"
  },
  {
    "url": "category/http/04.html",
    "revision": "6b959cae05c8305183101e5aeaa2ce7e"
  },
  {
    "url": "category/http/05.html",
    "revision": "61951e3dfe582e413852b394d79c75f2"
  },
  {
    "url": "category/javascript/01.html",
    "revision": "02c3eefdefc9ffa753ce5edc124808bd"
  },
  {
    "url": "category/javascript/02.html",
    "revision": "5e5b4c683d162b1fd1829f6eee523457"
  },
  {
    "url": "category/javascript/03.html",
    "revision": "9fab98465379be8fbc008928defb0a6d"
  },
  {
    "url": "category/javascript/04.html",
    "revision": "1dcd7f63ab9b0fe7e3cbbe08cc533c0b"
  },
  {
    "url": "category/javascript/05.html",
    "revision": "f21c88495c8650c2b43bdc85e7b57fe0"
  },
  {
    "url": "category/javascript/06.html",
    "revision": "8ee22515e514c6716b8dc05f9d01b5df"
  },
  {
    "url": "category/javascript/07.html",
    "revision": "eefe6eccc0c089cec28eb68f5b7165fc"
  },
  {
    "url": "category/javascript/08.html",
    "revision": "6bf14903697526edc16b210628290e69"
  },
  {
    "url": "category/notes/01.html",
    "revision": "7aba4972eccfaed23ec0e04a9c3a896b"
  },
  {
    "url": "category/notes/02.html",
    "revision": "559cbfe6633a090dee4a32f8a55315b8"
  },
  {
    "url": "category/notes/03.html",
    "revision": "d37651ff9ab5a9f1a4d829ae071dc824"
  },
  {
    "url": "category/notes/04.html",
    "revision": "4be44af788bb2c14cc1856cd8861556f"
  },
  {
    "url": "category/notes/05.html",
    "revision": "167c5a086c0df70b3de928386e520ce5"
  },
  {
    "url": "category/notes/06.html",
    "revision": "ff495663037485d0ea7ca45056e26a2b"
  },
  {
    "url": "category/notes/index.html",
    "revision": "03f62490abcca3c23c3ad6c21475e3b5"
  },
  {
    "url": "images/avatar.jpeg",
    "revision": "60b285035a9432e3f26212dfa0f29adb"
  },
  {
    "url": "images/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "images/wx.jpeg",
    "revision": "7530accb9e7eb90c7a81162b89250c8e"
  },
  {
    "url": "index.html",
    "revision": "0ac2d6e6d655f6de7ace544f9db0e31d"
  },
  {
    "url": "js/snow.js",
    "revision": "a64f6c858b907786a2bd966ffc4f9941"
  },
  {
    "url": "tag/CLI/index.html",
    "revision": "8eed0f74551726a7cd717d0728f1b60d"
  },
  {
    "url": "tag/commonjs/index.html",
    "revision": "2b1dcdde4f29f257c2c9dc4df3056396"
  },
  {
    "url": "tag/cookie/index.html",
    "revision": "9b52d6a2d4c319687817b1160ee6481d"
  },
  {
    "url": "tag/css/index.html",
    "revision": "703c0d366f97f946c81d0df0a0a06c77"
  },
  {
    "url": "tag/dns/index.html",
    "revision": "37f70eef9ce233f7d9d938748a2fd16f"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "ec33575f035803f03abf14c9685e2ea7"
  },
  {
    "url": "tag/http/index.html",
    "revision": "f80286f50419161f7056ff70d43dd2db"
  },
  {
    "url": "tag/https/index.html",
    "revision": "59f368de79f6bdbe08fdc8a7c759c394"
  },
  {
    "url": "tag/index.html",
    "revision": "63d4b058b5a461ab4f95ea009925cd1b"
  },
  {
    "url": "tag/java/index.html",
    "revision": "d57a9cde7d97d82afa711b2ccd4718aa"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7f9ed10ad1907d85fc769061d2e84427"
  },
  {
    "url": "tag/Manager/index.html",
    "revision": "4bbaf288f4908c0705596f35ec9b9a30"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "c4d5c3c9422b389ba07ff56f29653d4e"
  },
  {
    "url": "tag/retrying/index.html",
    "revision": "0aacf864c582800fcbf02b7405eea593"
  },
  {
    "url": "tag/string/index.html",
    "revision": "6692bd1f05098d1fda4a3b7e36483036"
  },
  {
    "url": "tag/tcp/index.html",
    "revision": "dec6722de0254363d6575542e8c1d3a8"
  },
  {
    "url": "tag/uniapp/index.html",
    "revision": "ca8d52a9a599c78672df8d13b8e91b8e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "28304a1ccdef95386d27dc423d487ec1"
  },
  {
    "url": "tag/wasm/index.html",
    "revision": "fab9d225424d68791a50a71911609dcd"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "b8a4f6915ca86ddabef2e99ca4272cb9"
  },
  {
    "url": "tag/单进程/index.html",
    "revision": "fbf1c5ce24769c33f77d57d8507473c5"
  },
  {
    "url": "tag/同源/index.html",
    "revision": "fa71fd41e475fddebfd86b4c0f4e046d"
  },
  {
    "url": "tag/垃圾回收机制/index.html",
    "revision": "e5f7c3d03bfdf305943f340d284f0f1a"
  },
  {
    "url": "tag/多进程/index.html",
    "revision": "a69963a9dfe084537f47cfd5c0bde24b"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "1f39caa494fc704e6a1b1e6339dc4d5c"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "90d02d4333ee6139243dcce1ba283def"
  },
  {
    "url": "tag/并行/index.html",
    "revision": "ef4dcdcb8eaec78a7546b4961ee670da"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "d29ba25c8882ab28cf6e715385320a28"
  },
  {
    "url": "tag/线程/index.html",
    "revision": "f77978daaa9c93c85555f93d3f490347"
  },
  {
    "url": "tag/自执行函数/index.html",
    "revision": "25c2a21f1128a143ebdb85dbb97243b8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d3b951416e9842e5afe0122c1ad5e8c7"
  },
  {
    "url": "tag/进程/index.html",
    "revision": "0cc6b41c664b77262f375b2716e8632d"
  },
  {
    "url": "tag/通信/index.html",
    "revision": "c82a0c1fa743a85599f26867fb0c48ca"
  },
  {
    "url": "tag/遍历器/index.html",
    "revision": "fc51b67887eb7bd3430162c84e596fd5"
  },
  {
    "url": "tag/非同源/index.html",
    "revision": "3084bd2f00a3d94203e511db3243bcb0"
  },
  {
    "url": "timeline/index.html",
    "revision": "0371220c51b509bce83435f4080f2b7e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
