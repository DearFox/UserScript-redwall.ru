// ==UserScript==
// @name         redwall.ru Фикс стиля
// @namespace    https://www.furaffinity.net/user/dearfox/
// @version      0.0.1
// @description  Этот юзерскрипт испровляет косяки в стилях сайта redwall.ru. Просто потому-что я перфекционист и люблю когда все идеально.
// @author       DearFox
// @match        https://www.redwall.ru/*
// @match        http://www.redwall.ru/*
// @downloadUrl  https://github.com/DearFox/UserScript-redwall.ru/raw/main/redwall-ru-fix-css.user.js
// @updateUrl    https://github.com/DearFox/UserScript-redwall.ru/raw/main/redwall-ru-fix-css.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
GM_addStyle(`
.ipsUserPhoto {
    background: #ffffff00;}
.ipsMemberCard {
    background: #3d3930;
    border: 1px solid #353029;}
.ipsType_unbold {
    color: #A79481 !important;}
`);
    // Your code here...
})();
