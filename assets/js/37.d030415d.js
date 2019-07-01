(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{215:function(t,e,s){"use strict";s.r(e);var a=s(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("The CAPTCHA is a feature intended to distinguish human from machine input and protect websites from the spam and different types of automated abuse. Imunify360 uses "),s("a",{attrs:{href:"https://www.google.com/recaptcha/intro/invisible.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("reCAPTCHA"),s("OutboundLink")],1),t._v(" service.")]),t._v(" "),s("p",[t._v("There are two layers in CAPTCHA behavior:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("It is also possible to enable the invisible reCAPTCHA via the Imunify360 "),s("router-link",{attrs:{to:"/dashboard/#settings"}},[s("span",{staticClass:"notranslate"},[t._v("Settings")]),t._v(" page")]),t._v(". With the invisible reCAPTCHA enabled, a human user is not required to go through human confirmation - the process will pass under the hood and a user will be redirected to the website. In case if invisible reCAPTCHA failed to detect if a user is a human or not, then visible reCAPTCHA appears.")],1),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("The CAPTCHA is always on guard of the websites and checks the activity of each IP. With the help of reCAPTCHA it blocks bots and protects websites from spam and abuse. To learn more about reCAPTCHA follow the "),s("a",{attrs:{href:"https://www.google.com/recaptcha/intro/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("The reCaptcha supports localization. Depending on user’s browser settings, reCaptcha will use the browser default language and allow to change it:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("There are three files:")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("To find information on supported browsers follow this link "),s("a",{attrs:{href:"https://support.google.com/recaptcha/answer/6223828",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://support.google.com/recaptcha/answer/6223828"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("A user can change the text of captcha messages for the supported languages. Note that adding custom language is not supported.")]),t._v(" "),s("p",[t._v("To change the text of the Imunify360 Captcha and update the localizations text, please do the following:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v("\n6. Block yourself (remove your IP from "),s("span",{staticClass:"notranslate"},[t._v("Imunify360 White List")]),t._v(" and try to log in to the server via ssh with wrong password until it blocks you). Then go to website and log in. Captcha should appear. Set Polish language and assert that new text is displayed.\n"),t._m(14),t._v(" "),s("p",[t._v("Starting from version 3.8 Imunify360 correctly graylists and blocks IPs behind Cloudflare and other CDNs (see "),s("router-link",{attrs:{to:"/webshield/#supported-cdn-providers"}},[t._v("here")]),t._v(" for the full list).")],1),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("The feature is disabled by default in Imunify360 version 3.8 but will be enabled in the future versions.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v("\nAnd restart "),s("span",{staticClass:"notranslate"},[t._v("WebShield")]),t._v("\nFor EL6:\n"),t._m(18),t._v("\nFor other systems:\n"),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"webshield"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webshield","aria-hidden":"true"}},[this._v("#")]),this._v(" WebShield")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"captcha"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#captcha","aria-hidden":"true"}},[this._v("#")]),this._v(" Captcha")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("If a user of a website is added to the "),e("span",{staticClass:"notranslate"},[this._v("Grey List")]),this._v(" (the access is blocked), then the CAPTCHA allows him to unblock himself. When he tries to get to the website he is redirected to the Captcha Server by ipset, where he can see the protection page asking to confirm that he is not a robot by ticking a checkbox.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/captcha.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("The IP address on the screenshot above is given as an example.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If successful, a user is redirected to the website, which means that the access is unblocked and the IP address of this user is removed from the "),e("span",{staticClass:"notranslate"},[this._v("Grey List")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/local.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"captcha-page-customization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#captcha-page-customization","aria-hidden":"true"}},[this._v("#")]),this._v(" Captcha page customization")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To modify footer, header or body of the CAPTCHA use the templates in "),e("span",{staticClass:"notranslate"},[e("code",[this._v("/usr/share/imunify360-webshield/captcha/templates/")])]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("code",[t._v("head.tpl")])]),t._v(" – this file goes inside "),s("span",{staticClass:"notranslate"},[s("code",[t._v("<head></head>")])]),t._v(" tags. So you can add JavaScript, CSS styles, etc.")])]),t._v(" "),s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("code",[t._v("body.tpl")])]),t._v(" – the main template file, modify it as you wish. CAPTCHA goes above all the layers.")])]),t._v(" "),s("li",[s("p",[s("span",{staticClass:"notranslate"},[s("code",[t._v("static")])]),t._v(" – here you can place images, CSS, JavaScript, etc. and access these files as "),s("span",{staticClass:"notranslate"},[s("code",[t._v("/static/<filename>")])]),t._v(".")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"update-captcha-localizations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-captcha-localizations","aria-hidden":"true"}},[this._v("#")]),this._v(" Update Captcha localizations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("Custom Captcha localization is available starting from Imunify360 version 2.6.0 and later.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("p",[t._v("Locate appropriate Captcha localization files by running:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ls /usr/share/imunify360-webshield/captcha/translations/locale/{lang}/LC_MESSAGES/messages.po\n")])])])]),t._v("\nFor example for Polish language the catalog looks like this: \n "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/usr/share/imunify360-webshield/captcha/translations/locale/pl/LC_MESSAGES/messages.po\n")])])])])]),t._v(" "),s("li",[s("p",[t._v("Update Captcha localization files by editing "),s("span",{staticClass:"notranslate"},[s("code",[t._v('msgstr "my customization or translation"')])]),t._v(" for appropriate "),s("span",{staticClass:"notranslate"},[s("code",[t._v('msgid “original plain english text"')])]),t._v(".")]),t._v(" "),s("p",[t._v("Where "),s("span",{staticClass:"notranslate"},[s("code",[t._v("msgstr")])]),t._v(" contains text that is shown to user and "),s("span",{staticClass:"notranslate"},[s("code",[t._v("msgid")])]),t._v(" contains Captcha original English text.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('#: templates/index.html:154\nmsgid ""\n"We have noticed an unusual activity from your '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("IP {client_ip}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(' and "\n"blocked access to this website."\nmsgstr ""\n"Zauważyliśmy nietypową aktywność związaną z twoim adresem '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('IP "\n"{client_ip}'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(' i zablokowaliśmy dostęp do tej strony internetowej"\n')])])])])]),t._v(" "),s("li",[s("p",[t._v("To add Polish translation edit text in the "),s("span",{staticClass:"notranslate"},[s("code",[t._v("msgstr")])]),t._v(" field. To change the text for a default English translation, edit text in the "),s("span",{staticClass:"notranslate"},[s("code",[t._v("msgid")])]),t._v(" field.")])]),t._v(" "),s("li",[s("p",[t._v("Save files.")])]),t._v(" "),s("li",[s("p",[t._v("When translation in "),s("span",{staticClass:"notranslate"},[s("code",[t._v("messages.po")])]),t._v(" files is finished, restart "),s("span",{staticClass:"notranslate"},[t._v("imunify360-webshield")]),t._v(" service:")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("service imunify360-webshield restart\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"cdn-support-3-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdn-support-3-8","aria-hidden":"true"}},[this._v("#")]),this._v(" CDN Support "),e("sup",[this._v("3.8+")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Imunify360 passes all requests from CDN through "),e("span",{staticClass:"notranslate"},[this._v("WebShield")]),this._v(", and uses "),e("span",{staticClass:"notranslate"},[this._v("CF-Connecting-IP")]),this._v(" and "),e("span",{staticClass:"notranslate"},[this._v("X-Forwarded-For")]),this._v(" headers to identify real IPs.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To enable it now, add the following section to the Imunify360 config file ("),e("span",{staticClass:"notranslate"},[e("em",[this._v("/etc/sysconfig/imunify360/imunify360.config")])]),this._v("):")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("WEBSHIELD:\n known_proxies_support: true\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("service imunify360-webshield restart\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("systemctl restart imunify360-webshield\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("If you are using cPanel/EasyApache3, Imunify360 will not automatically deploy "),e("em",[this._v("mod_remoteip")]),this._v(", and log files will show local server IP for visitors coming from CDN. EasyApache 3 is EOL in December 2018, and we don't plan to add automated "),e("em",[this._v("mod_remoteip")]),this._v(" setup and configuration for it.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("For cPanel/EasyApache 4, Plesk, DirectAdmin and LiteSpeed "),e("em",[this._v("mod_remoteip")]),this._v(" will be automatically installed and configured.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"supported-cdn-providers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-cdn-providers","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported CDN providers:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Cloudflare: December 2018")]),this._v(" "),e("li",[this._v("MaxCDN: December 2018")]),this._v(" "),e("li",[this._v("StackPath CDN: April 2019")]),this._v(" "),e("li",[this._v("KeyCDN is not supported at the moment, ETA is not yet available.")])])}],!1,null,null,null);e.default=i.exports}}]);