! function(e, t) {
	e.WxLogin = function(e) {
		var r = "default";
		!0 === e.self_redirect ? r = "true" : !1 === e.self_redirect && (r = "false");
		var n = t.createElement("iframe"),
			i = "https://open.weixin.qq.com/connect/qrconnect?appid=" + e.appid + "&scope=" + e.scope + "&redirect_uri=" + e.redirect_uri + "&state=" + e.state + "&login_type=jssdk&self_redirect=" + r + "&styletype=" + (e.styletype || "") + "&sizetype=" + (e.sizetype || "") + "&bgcolor=" + (e.bgcolor || "") + "&rst=" + (e.rst || "");
		i += e.style ? "&style=" + e.style : "", i += e.href ? "&href=" + e.href : "", i += "en" === e.lang ? "&lang=en" : "", n.src = i, n.frameBorder = "0", n.allowTransparency = "true", n.scrolling = "no", n.width = "300px", n.height = "400px";
		var s = t.getElementById(e.id);
		s.innerHTML = "", s.appendChild(n)
	}
}(window, document);