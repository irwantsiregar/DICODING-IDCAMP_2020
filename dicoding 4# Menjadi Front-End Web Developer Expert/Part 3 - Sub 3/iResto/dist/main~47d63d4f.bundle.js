!function(n){function e(e){for(var i,r,c=e[0],d=e[1],l=e[2],p=0,m=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(n[i]=d[i]);for(s&&s(e);m.length;)m.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],i=!0,c=1;c<t.length;c++){var d=t[c];0!==o[d]&&(i=!1)}i&&(a.splice(e--,1),n=r(r.s=t[0]))}return n}var i={},o={1:0},a=[];function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=i,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)r.d(t,i,function(e){return n[e]}.bind(null,i));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="";var c=window.webpackJsonp=window.webpackJsonp||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=d;a.push([27,4,3,2,0]),t()}({22:function(n,e,t){var i=t(23),o=t(24);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};i(o,a);n.exports=o.locals||{}},24:function(n,e,t){(e=t(25)(!1)).push([n.i,"* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  background-color: #f2f2f2;\n  overflow-x: hidden;\n}\n\nnav {\n  color: #f6f4e6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #000;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: 50px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  z-index: 3;\n  border-bottom: 1px solid rgba(248, 212, 8, 0.16);\n}\n\nnav #hamburger {\n  color: white;\n  font-size: 24px;\n  background-color: #000;\n  display: inline-block;\n  min-width: 44px;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  line-height: 44px;\n  padding-left: 5px;\n}\n\nnav .logo {\n  margin: 0 auto;\n}\n\nnav .logo a {\n  margin-left: -20px;\n  display: inline-block;\n  color: inherit;\n  min-width: 44px;\n  line-height: 44px;\n  font-family: \"Kaushan Script\", cursive;\n  font-size: 1.65em;\n  letter-spacing: 2px;\n  text-decoration: none;\n}\n\nnav ul {\n  width: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #000;\n  border-radius: 0 0 10px 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 60px 20px 20px;\n  z-index: -1;\n  -webkit-transform: translate(-100%, 0);\n          transform: translate(-100%, 0);\n  -webkit-transition: all 0.6s;\n  transition: all 0.6s;\n  opacity: 0;\n  list-style-type: none;\n}\n\nnav ul li a {\n  color: rgba(231, 231, 225, 0.75);\n  font-size: 14px;\n  text-transform: uppercase;\n  display: inline-block;\n  text-decoration: none;\n  min-width: 44px;\n  line-height: 44px;\n}\n\nnav ul li a:hover {\n  color: #e7e7e1;\n}\n\nnav ul li a:visited {\n  border: none;\n}\n\nnav ul li a.active {\n  color: #e7e7e1;\n  font-weight: 500;\n}\n\nnav ul.slide {\n  opacity: 1;\n  -webkit-transform: translate(0);\n          transform: translate(0);\n}\n\n.skip-link {\n  display: none;\n}\n\na:focus {\n  outline: 1px solid rgba(201, 173, 13, 0.5);\n}\n\n.jumbotron {\n  width: 100%;\n  height: 380px;\n}\n\n.jumbotron .imagehero {\n  width: 100%;\n  height: 100%;\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.jumbotron .title {\n  width: 100%;\n  color: #e7e7e1;\n  position: absolute;\n  top: 12%;\n  text-align: center;\n  padding: 20px;\n  z-index: 0;\n}\n\n.jumbotron .title h1 {\n  font-size: 1.3em;\n  font-weight: normal;\n  text-shadow: 1px 1px 1px #000;\n}\n\n.jumbotron .title p {\n  font-size: 14px;\n  text-shadow: 1px 1px 1px #000;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.jumbotron .title a {\n  display: block;\n  color: #000;\n  width: 100%;\n  min-width: 44px;\n  line-height: 44px;\n  font-weight: 500;\n  font-size: 1.1em;\n  text-decoration: none;\n  border-radius: 5px;\n  background-color: #fde047;\n  -webkit-transition: 0.3s opacity;\n  transition: 0.3s opacity;\n  opacity: 0.92;\n}\n\n.jumbotron .title a:hover {\n  opacity: 1;\n}\n\n#main-content {\n  max-width: 100%;\n  min-height: 100vh;\n  padding: 1.5em 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#main-content .search-favorite {\n  max-width: 100%;\n  padding-top: 1em;\n  padding-bottom: 1.5em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 20px auto -13px auto;\n}\n\n#main-content .search-favorite #query {\n  width: 100%;\n  padding: 6px 10px;\n  border: 1px solid rgba(89, 171, 196, 0.7);\n  border-radius: 2px;\n  resize: vertical;\n}\n\n#main-content .search-favorite #query::-webkit-input-placeholder {\n  color: #e2e2e2;\n}\n\n#main-content .search-favorite #query:-ms-input-placeholder {\n  color: #e2e2e2;\n}\n\n#main-content .search-favorite #query::-ms-input-placeholder {\n  color: #e2e2e2;\n}\n\n#main-content .search-favorite #query::placeholder {\n  color: #e2e2e2;\n}\n\n#main-content .search-favorite #query:focus {\n  outline: 1px solid rgba(89, 171, 196, 0.75);\n  border-bottom: 2px solid rgba(89, 171, 196, 0.75);\n  background-color: #fcfbfb;\n}\n\n#main-content .search-favorite #query:focus::-webkit-input-placeholder {\n  color: rgba(43, 125, 150, 0.4);\n}\n\n#main-content .search-favorite #query:focus:-ms-input-placeholder {\n  color: rgba(43, 125, 150, 0.4);\n}\n\n#main-content .search-favorite #query:focus::-ms-input-placeholder {\n  color: rgba(43, 125, 150, 0.4);\n}\n\n#main-content .search-favorite #query:focus::placeholder {\n  color: rgba(43, 125, 150, 0.4);\n}\n\n#main-content .search-favorite button {\n  width: 23%;\n  cursor: pointer;\n  margin-left: auto;\n  padding: 6px;\n  background-color: rgba(43, 125, 150, 0.8);\n  color: #fafafa;\n  border: 0;\n  text-transform: capitalize;\n}\n\n#main-content h2 {\n  text-align: center;\n  font-size: 1.5em;\n  font-weight: 500;\n}\n\n#main-content h2::after {\n  display: block;\n  content: '';\n  border-bottom: 1px solid #e2e2e2;\n  margin-top: 15px;\n}\n\n#main-content h2 .fa-heart-o {\n  color: green;\n}\n\n#main-content h2 .fa-users {\n  color: #2257e9;\n}\n\n#main-content h2 .fa-list-alt,\n#main-content h2 .fa-user,\n#main-content h2 .fa-wpforms {\n  color: #eba819;\n}\n\n#main-content .reviews {\n  font-size: 1em;\n  border-radius: 5px;\n  padding: 20px;\n  margin-bottom: 40px;\n  border: 1px solid #f0f0f0;\n  -webkit-box-shadow: 2px 5px 7px #e6e6e6;\n          box-shadow: 2px 5px 7px #e6e6e6;\n}\n\n#main-content .reviews .row-review .fa-user {\n  color: #2257e9;\n}\n\n#main-content .reviews .row-review .column-label,\n#main-content .reviews .row-review .column-input,\n#main-content .reviews .row-review #buttonAdd {\n  width: 100%;\n  margin-top: 0;\n}\n\n#main-content .reviews .row-review input[type=text],\n#main-content .reviews .row-review textarea {\n  width: 100%;\n  padding: 6px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  resize: vertical;\n}\n\n#main-content .reviews .row-review input[type=text]:focus,\n#main-content .reviews .row-review textarea:focus {\n  outline: 2px solid rgba(87, 178, 206, 0.9);\n  background-color: #fcfcfc;\n}\n\n#main-content .reviews .row-review label {\n  padding: 10px 10px 10px 0;\n  display: inline-block;\n}\n\n#main-content .reviews .row-review #buttonAdd {\n  color: white;\n  text-align: center;\n  padding: 10px 16px;\n  text-decoration: none;\n  background-color: #3b82f6;\n  display: inline-block;\n  margin-top: 5px;\n  border-radius: 5px;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  cursor: pointer;\n}\n\n#main-content .reviews .row-review #buttonAdd:hover {\n  -webkit-box-shadow: 0 8px 10px 0 rgba(119, 117, 117, 0.24), 0 8px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 8px 10px 0 rgba(119, 117, 117, 0.24), 0 8px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n#main-content .reviews .review-customer {\n  border-bottom: 1px solid #eeeeee;\n}\n\n#main-content .reviews .review-customer .customer {\n  color: rgba(90, 90, 90, 0.8);\n}\n\n#main-content .reviews .review-customer .customer h4 {\n  font-weight: 500;\n}\n\n#main-content .reviews .review-customer .customer p {\n  text-align: justify;\n  text-transform: capitalize;\n}\n\n#main-content .reviews .review-customer .customer .date-review {\n  font-size: 0.68rem;\n  font-weight: 300;\n  margin-top: 5px;\n}\n\n#main-content .detail-menu {\n  width: 100%;\n  margin-top: 24px;\n  background-color: #f7f7f7;\n}\n\n#main-content .detail-menu .detail-card {\n  font-size: 1em;\n  border-radius: 3px;\n  border: 1px solid #f0f0f0;\n  -webkit-box-shadow: 2px 5px 7px #e6e6e6;\n          box-shadow: 2px 5px 7px #e6e6e6;\n}\n\n#main-content .detail-menu .detail-card .detail-image {\n  max-width: 100%;\n  height: 270px;\n}\n\n#main-content .detail-menu .detail-card .detail-image img {\n  width: 100%;\n  height: 100%;\n  border-radius: 8px 8px 0 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  -webkit-box-shadow: 4px 8px 28px -7px rgba(160, 157, 157, 0.7);\n          box-shadow: 4px 8px 28px -7px rgba(160, 157, 157, 0.7);\n}\n\n#main-content .detail-menu .detail-card .detail-text {\n  padding: 20px;\n}\n\n#main-content .detail-menu .detail-card .detail-text .fa-map-marker {\n  font-size: 22px;\n  color: #c00000;\n}\n\n#main-content .detail-menu .detail-card .detail-text .star-detail {\n  font-size: 1.2em;\n  margin-bottom: 3px;\n}\n\n#main-content .detail-menu .detail-card .detail-text .title-detail {\n  color: #171577;\n  font-size: 1.2em;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n\n#main-content .detail-menu .detail-card .detail-text .title-item__detail {\n  font-weight: 500;\n  margin-top: 6px;\n}\n\n#main-content .detail-menu .detail-card .detail-text .desciption {\n  text-align: justify;\n  text-indent: 1.2rem;\n}\n\n#main-content .detail-menu .detail-card .detail-text ul.ul-list {\n  list-style-type: none;\n  padding-left: 20px;\n}\n\n#main-content .container-cards {\n  width: 100%;\n}\n\n#main-content .container-cards .cards {\n  max-width: 100%;\n  padding: 1em 0;\n}\n\n#main-content .container-cards .cards .card-item {\n  background-color: rgba(245, 245, 245, 0.9);\n  position: relative;\n  border-radius: 5px;\n  -webkit-box-shadow: 3px 7px 9px rgba(214, 214, 214, 0.7);\n          box-shadow: 3px 7px 9px rgba(214, 214, 214, 0.7);\n  z-index: 0;\n  -webkit-transition: 1s all;\n  transition: 1s all;\n}\n\n#main-content .container-cards .cards .card-item:hover {\n  -webkit-box-shadow: 5px 8px 26px -7px rgba(124, 124, 124, 0.7);\n          box-shadow: 5px 8px 26px -7px rgba(124, 124, 124, 0.7);\n  -webkit-transition: 1s all;\n  transition: 1s all;\n}\n\n#main-content .container-cards .cards .card-item .image--thumbnail {\n  overflow: hidden;\n  max-height: 270px;\n}\n\n#main-content .container-cards .cards .card-item .image--thumbnail img {\n  width: 100%;\n  height: 270px;\n  -webkit-box-flex: 100%;\n      -ms-flex: 100%;\n          flex: 100%;\n  border-radius: 7px 7px 0 0;\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 1px solid rgba(245, 245, 245, 0.9);\n  -webkit-transition: -webkit-transform 2s, -webkit-filter 1.5s ease-in-out;\n  transition: -webkit-transform 2s, -webkit-filter 1.5s ease-in-out;\n  transition: transform 2s, filter 1.5s ease-in-out;\n  transition: transform 2s, filter 1.5s ease-in-out, -webkit-transform 2s, -webkit-filter 1.5s ease-in-out;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  -webkit-filter: brightness(100%);\n          filter: brightness(100%);\n}\n\n#main-content .container-cards .cards .card-item .image--thumbnail img:hover {\n  -webkit-filter: brightness(125%);\n          filter: brightness(125%);\n  -webkit-transform: scale(1.19);\n          transform: scale(1.19);\n}\n\n#main-content .container-cards .cards .card-item .card-header {\n  width: 100%;\n  position: absolute;\n  z-index: 9;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n#main-content .container-cards .cards .card-item .card-header .rating {\n  background-color: rgba(230, 17, 17, 0.65);\n  color: #f7f7f7;\n  padding: 4px 14px;\n  border-radius: 0px 5px 0px 5px;\n}\n\n#main-content .container-cards .cards .card-item .card-header .rating span {\n  font-size: 1em;\n  font-weight: 700;\n  color: #eed91b;\n}\n\n#main-content .container-cards .cards .card-item .card-header .city {\n  background-color: rgba(230, 17, 17, 0.65);\n  color: #f7f7f7;\n  font-weight: 500;\n  padding: 4px 14px;\n  border-radius: 5px 0px 5px 0px;\n  -webkit-box-shadow: 0 1px 4px rgba(226, 226, 226, 0.596);\n          box-shadow: 0 1px 4px rgba(226, 226, 226, 0.596);\n}\n\n#main-content .container-cards .cards .card-item .item {\n  padding: 5px 15px 15px 15px;\n}\n\n#main-content .container-cards .cards .card-item .item .skeleton {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #e8e8e8;\n  color: #e8e8e8;\n}\n\n#main-content .container-cards .cards .card-item .item h3 {\n  text-transform: capitalize;\n  font-size: 1.2em;\n  font-weight: 500;\n  -webkit-transition: 0.3s opacity;\n  transition: 0.3s opacity;\n}\n\n#main-content .container-cards .cards .card-item .item h3 a {\n  color: rgba(49, 49, 49, 0.7);\n  min-width: 44px;\n  line-height: 44px;\n  display: inline-block;\n  text-decoration: none;\n  color: #000;\n}\n\n#main-content .container-cards .cards .card-item .item h3 a:hover {\n  opacity: 0.65;\n}\n\n#main-content .container-cards .cards .card-item .description {\n  font-size: 1rem;\n  color: rgba(21, 21, 21, 0.9);\n  text-align: justify;\n  text-indent: 1.2rem;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n}\n\n#main-content .container-cards .cards .card-item .booked {\n  font-size: 12px;\n}\n\n#main-content .container-cards .alert.danger,\n#main-content .detail-menu .alert.danger {\n  border: 1px solid #db0000;\n}\n\n#main-content .container-cards .alert.favorite,\n#main-content .detail-menu .alert.favorite {\n  border: 1px solid #eab308;\n}\n\n#main-content .container-cards .alert,\n#main-content .detail-menu .alert {\n  width: 100%;\n  padding: 14px 20px;\n  margin-top: 40px;\n  border-radius: 4px;\n}\n\n#main-content .container-cards .alert .text-alert,\n#main-content .detail-menu .alert .text-alert {\n  font-size: 1.1em;\n}\n\n#main-content .container-cards .alert .text-alert span,\n#main-content .detail-menu .alert .text-alert span {\n  font-weight: bold;\n  font-size: 1.5em;\n}\n\n#main-content .container-cards .alert.indicators,\n#main-content .detail-menu .alert.indicators {\n  text-align: center;\n  background-color: rgba(250, 250, 250, 0.7);\n  border: 1px solid rgba(240, 240, 240, 0.85);\n}\n\n#main-content .container-cards .alert.indicators .spinner,\n#main-content .detail-menu .alert.indicators .spinner {\n  width: 100px;\n  height: 100px;\n}\n\nfooter {\n  background-color: #1a1818;\n  text-align: center;\n  padding: 20px;\n}\n\nfooter p {\n  color: #cacaca;\n  font-size: 14px;\n  font-weight: 500;\n}\n\nfooter p .i-logo {\n  font-family: \"Kaushan Script\", cursive;\n  font-size: 1.3em;\n}\n\n/* Like - child main-content*/\n#likeButtonContainer .like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #db0000;\n  color: white;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n/* Responsive Tablet */\n@media (min-width: 768px) {\n  .skip-link {\n    color: #f6f4e6;\n    display: inline;\n    font-size: 12px;\n    background-color: rgba(65, 154, 236, 0.5);\n    min-width: 44px;\n    line-height: 44px;\n    position: absolute;\n    padding: 0 8px;\n    text-decoration: none;\n    top: -40px;\n    left: 0;\n    pointer-events: none;\n    cursor: default;\n    z-index: 10;\n  }\n  .skip-link:focus {\n    top: 0;\n  }\n  nav #hamburger {\n    display: none;\n  }\n  nav .logo {\n    margin: 0;\n  }\n  nav .logo a {\n    margin-left: 0;\n  }\n  nav ul {\n    width: 40%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    position: relative;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0;\n    height: 0;\n    z-index: 0;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n  }\n  nav ul li {\n    padding: 0 8px;\n  }\n  nav ul li a {\n    font-size: 1em;\n    text-transform: capitalize;\n  }\n  .menu-toggle {\n    display: none;\n  }\n  .jumbotron .title {\n    top: 12%;\n  }\n  .jumbotron .title a {\n    width: 40%;\n    margin: 0 auto;\n  }\n  .jumbotron .title h1 {\n    font-size: 1.8em;\n  }\n  .jumbotron .title p {\n    font-size: 1em;\n  }\n  #main-content h2 {\n    margin-bottom: 30px;\n    font-size: 1.8em;\n  }\n  #main-content .search-favorite {\n    max-width: 50%;\n    padding-bottom: 2em;\n  }\n  #main-content .detail-menu .detail-card .detail-text {\n    padding-left: 30px;\n    padding-right: 30px;\n    margin-top: 4px;\n  }\n  #main-content .detail-menu .detail-card .detail-image {\n    height: 350px;\n  }\n  #main-content .detail-menu .detail-card .detail-image img {\n    max-height: 100%;\n  }\n  #main-content .detail-menu .reviews .row-review {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  #main-content .detail-menu .reviews .row-review .column-label {\n    width: 30%;\n    margin-top: 6px;\n  }\n  #main-content .detail-menu .reviews .row-review .column-input {\n    width: 70%;\n    margin-top: 6px;\n  }\n  #main-content .detail-menu .reviews .submit #buttonAdd {\n    min-width: 30%;\n    margin-left: auto;\n  }\n  #main-content .container-cards {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n  #main-content .container-cards .cards {\n    width: 50%;\n    padding: 1em 1em;\n  }\n  #main-content .container-cards .cards .item h3 {\n    font-size: 1.2em;\n  }\n  #main-content .container-cards .cards .item .description {\n    font-size: 1em;\n  }\n  #main-content .container-cards .cards .card-header > .city {\n    font-size: 1em;\n  }\n  #main-content .container-cards .cards .alert {\n    width: 60%;\n  }\n  #main-content footer p {\n    font-size: 13px;\n  }\n}\n\n@media (min-width: 1024px) {\n  nav ul {\n    width: 35%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n  .jumbotron .title {\n    top: 14%;\n  }\n  .jumbotron .title a {\n    width: 25%;\n  }\n  .jumbotron .title h1 {\n    font-size: 1.5em;\n  }\n  #main-content .container-cards {\n    padding: 0 10%;\n  }\n  #main-content .container-cards .alert.favorite {\n    margin-left: 15%;\n    margin-right: 15%;\n  }\n  #main-content .container-cards .cards {\n    width: 33.333333%;\n  }\n  #main-content .container-cards .cards .card-item h2 {\n    font-size: 1.5em;\n  }\n  #main-content .container-cards .cards .card-item .item {\n    padding: 20px;\n  }\n  #main-content .container-cards .cards .card-item .item h3 {\n    font-size: 1.3em;\n  }\n  #main-content .container-cards .cards .card-item .item .booked {\n    font-size: 14px;\n  }\n  #main-content .container-cards .cards .card-item .card-header > .city {\n    font-size: 1em;\n  }\n  #main-content .detail-menu {\n    width: 60%;\n    margin: 20px auto;\n  }\n  #main-content .detail-menu .alert {\n    margin-top: 60px;\n  }\n  #main-content .detail-menu .detail-card .detail-image {\n    width: 100%;\n    height: 420px;\n  }\n  #main-content .detail-menu .detail-card .detail-image img {\n    max-height: 100%;\n  }\n  #main-content .detail-menu .detail-card .detail-text {\n    font-size: 1.1em;\n  }\n  #main-content .detail-menu .reviews {\n    padding: 50px;\n  }\n  #main-content .detail-menu .reviews margin .row-review.review-customer .column-label {\n    width: 25%;\n  }\n  #main-content .detail-menu .reviews margin .row-review.review-customer .column-input {\n    width: 75%;\n  }\n  #main-content .detail-menu .reviews .submit #buttonAdd {\n    width: 15%;\n  }\n}",""]),n.exports=e}});