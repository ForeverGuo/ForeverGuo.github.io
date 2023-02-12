(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{615:function(v,_,t){"use strict";t.r(_);var r=t(7),a=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h3",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),t("p",[v._v("当我们在web浏览器的地址栏输入：www.baidu.com 具体发生了什么 ？")]),v._v(" "),t("h3",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),t("ol",[t("li",[v._v("对 www.baidu.com 这个网址进行 DNS域名解析，得到对应的 IP 地址")]),v._v(" "),t("li",[v._v("根据这个IP地址，找到对应的服务器，发起TCP的三次握手")]),v._v(" "),t("li",[v._v("建立TCP连接后发起HTTP请求")]),v._v(" "),t("li",[v._v("服务器响应HTTP请求，浏览器得到html代码")]),v._v(" "),t("li",[v._v("浏览器开始解析html代码，并请求html代码中的资源(如 js，css，图片等)(先得到html代码，才能去找这些资源)")]),v._v(" "),t("li",[v._v("浏览器对页面进行渲染呈现给用户")]),v._v(" "),t("li",[v._v("服务器关闭关闭TCP连接")])]),v._v(" "),t("h3",{attrs:{id:"问题系列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题系列"}},[v._v("#")]),v._v(" 问题系列")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("DNS怎么找到域名的 ？"),t("br")]),v._v(" "),t("p",[v._v("DNS域名解析采用的是递归查询的方式，过程是，先去找DNS缓存 -> 缓存找不到就去根域名服务器 -> 根域名又会去找下一级，这样递归查询之后，找到了，给我们的web浏览器")])]),v._v(" "),t("li",[t("p",[v._v("为什么HTTP协议要基于TCP来实现 ？"),t("br")]),v._v(" "),t("p",[v._v("TCP是一个端到端的可靠的面向连接的协议，HTTP基于传输层TCP协议不用担心数据传输的各种问题(当发生错误时，会重传)")])]),v._v(" "),t("li",[t("p",[v._v("最后一步浏览器是如何对页面进行渲染的 ？"),t("br")]),v._v(" "),t("p",[v._v("a. 解析html文件构成DOM树 "),t("br"),v._v("\nb. 解析CSS文件构成渲染树"),t("br"),v._v("\nc. 边解析，边渲染"),t("br"),v._v("\nd. JS单线程运行，JS有可能修改DOM结构，意味着JS执行完成前，后续所有资源的下载是没有必要的，所以JS是单线程，会阻塞后续资源下载")])])]),v._v(" "),t("h3",{attrs:{id:"dns解析-域名解析服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns解析-域名解析服务器"}},[v._v("#")]),v._v(" DNS解析(域名解析服务器)")]),v._v(" "),t("ol",[t("li",[v._v("首先会搜索浏览器自身的DNS缓存(缓存时间比较短，大概只有1分钟，且只能容纳1000条缓存)")]),v._v(" "),t("li",[v._v("如果浏览器自身的缓存里面没有找到，那么浏览器会搜索系统自身的DNS缓存")]),v._v(" "),t("li",[v._v("如果还没有找到，那么尝试从hosts文件里面去找")]),v._v(" "),t("li",[v._v("在前面三个过程都没有获取到的情况下，就递归的去域名服务器去查找")])]),v._v(" "),t("p",[v._v("注：\nDNS优化有两个方面： DNS缓存，DNS负载均衡")]),v._v(" "),t("h3",{attrs:{id:"tcp连接建立-三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接建立-三次握手"}},[v._v("#")]),v._v(" TCP连接建立(三次握手)")]),v._v(" "),t("h3",{attrs:{id:"发起http请求-建立连接后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发起http请求-建立连接后"}},[v._v("#")]),v._v(" 发起HTTP请求(建立连接后)")]),v._v(" "),t("p",[v._v("HTTP请求报文由三部分组成：请求行，请求头，空格，请求正文")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("请求行\n用于描述客户端的请求方式(GET/POST等)，请求的资源名称URL以及使用的HTTP协议的版本号")])]),v._v(" "),t("li",[t("p",[v._v("请求头\n用于描述客户端请求哪台主机及其端口，以及客户端的一些环境信息等")])]),v._v(" "),t("li",[t("p",[v._v("空行\n空行就是\\r\\n (POST请求时候有)")])]),v._v(" "),t("li",[t("p",[v._v("请求正文\n当使用POST等方法时，通常需要客户端向服务器传递数据，这些数据就存储在请求正文中，(GET方式是保存在url地址后面)")])]),v._v(" "),t("li",[t("p",[t("font",{attrs:{color:"#e93011"}},[v._v("问题汇总：")])],1),v._v(" "),t("ol",[t("li",[v._v("请求行中的请求方式有哪些，何时会用 ？")])]),v._v(" "),t("p",[v._v("GET：完整请求一个资源"),t("br"),v._v("\nHEAD：仅请求响应首部"),t("br"),v._v("\nPOST：提交表单"),t("br"),v._v("\nPUT：(webdav)上传文件（浏览器不支持该方法）"),t("br"),v._v("\nDELETE：(webdav)删除"),t("br"),v._v("\nOPTIONS: 返回请求的资源所支持的方法的方法"),t("br"),v._v("\nTRACE：追求一个资源请求中间所经过的代理（该方法不能由浏览器发出）"),t("br")]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[v._v("GET和POST区别 ？")])]),v._v(" "),t("li",[t("p",[v._v("空行的作用 ？\n主要是用在POST请求中 ，告诉服务端请求头已经结束")])]),v._v(" "),t("li",[t("p",[v._v("OPTIONS请求何时会触发 ？")]),v._v(" "),t("p",[v._v("CORS预检请求，Content-Type为application/json"),t("br"),v._v("\nMDN的CORS中提到"),t("br"),v._v("\n规范要求，对那些可能对服务器数据产生副作用的HTTP请求方法，(特别是GET以外HTTP请求，或者搭配某些MIME类型的POST请求)，浏览器必须首先使用OPTIONS方法发起一个预检请求(preflight request)，从而获知服务端是否允许该跨域请求")]),v._v(" "),t("p",[v._v("以下为简单请求触发条件：")]),v._v(" "),t("p",[v._v("请求方法：GET HEAD POST"),t("br"),v._v("\n首部字段：Accept，Accept-Language，Content-Language，Content-Type"),t("br"),v._v("\nContent-Type：text/plain，multipart/form-data，application/x-www-form-urlencoded"),t("br")]),v._v(" "),t("p",[v._v("优化OPTIONS请求：\nAccess-Control-Max-Age 这个响应首部表示 preflight request （预检请求）的返回结果")])])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);