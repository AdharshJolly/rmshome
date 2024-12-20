!(function (a) {
  a.fn.hoverIntent = function (e, t, n) {
    var o,
      r,
      v,
      i,
      u = { interval: 100, sensitivity: 6, timeout: 0 };
    u =
      "object" == typeof e
        ? a.extend(u, e)
        : a.isFunction(t)
        ? a.extend(u, { over: e, out: t, selector: n })
        : a.extend(u, { over: e, out: e, selector: t });
    function s(e) {
      (o = e.pageX), (r = e.pageY);
    }
    function h(e) {
      var t = a.extend({}, e),
        n = this;
      n.hoverIntent_t && (n.hoverIntent_t = clearTimeout(n.hoverIntent_t)),
        "mouseenter" === e.type
          ? ((v = t.pageX),
            (i = t.pageY),
            a(n).on("mousemove.hoverIntent", s),
            n.hoverIntent_s ||
              (n.hoverIntent_t = setTimeout(function () {
                I(t, n);
              }, u.interval)))
          : (a(n).off("mousemove.hoverIntent", s),
            n.hoverIntent_s &&
              (n.hoverIntent_t = setTimeout(function () {
                !(function (e, t) {
                  (t.hoverIntent_t = clearTimeout(t.hoverIntent_t)),
                    (t.hoverIntent_s = !1),
                    u.out.apply(t, [e]);
                })(t, n);
              }, u.timeout)));
    }
    var I = function (e, t) {
      if (
        ((t.hoverIntent_t = clearTimeout(t.hoverIntent_t)),
        Math.sqrt((v - o) * (v - o) + (i - r) * (i - r)) < u.sensitivity)
      )
        return (
          a(t).off("mousemove.hoverIntent", s),
          (t.hoverIntent_s = !0),
          u.over.apply(t, [e])
        );
      (v = o),
        (i = r),
        (t.hoverIntent_t = setTimeout(function () {
          I(e, t);
        }, u.interval));
    };
    return this.on(
      { "mouseenter.hoverIntent": h, "mouseleave.hoverIntent": h },
      u.selector
    );
  };
})(jQuery);
