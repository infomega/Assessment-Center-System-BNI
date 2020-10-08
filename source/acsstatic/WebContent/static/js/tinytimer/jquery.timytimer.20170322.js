/*! tinytimer 0.1.4 */
(function(t) {
    t.tinyTimer = function(e) {
        var n, a = this,
            i = (a.options = e).element,
            o = new Date(e.from || e.to).getTime(),
            r = !!e.from || -1,
            u = Math,
            s = function() {};
        a.interval = setInterval(n = function() {
            if (!a.paused) {
                var n = u.max(u.round((Date.now() - o) * r / 1e3), 0),
                    l = {
                        S: n,
                        s: n % 60,
                        M: u.floor(n /= 60),
                        H: u.floor(n /= 60),
                        D: u.floor(n /= 24)
                    };
                l.m = l.M % 60, l.h = l.H % 24, l.d = l.D, l.text = (e.format || "%-H{:}%0m:%0s").replace(/%(-?)(0?)([dhms])(\s*)(?:\{(.+?)\})?/gi, e.replacer || function(t, e, n, a, i, o) {
                    var r = l[a];
                    return (o = (o || "").split("|"))[2] = o[2] || (o[1] = o[1] || o[0]), !r && e ? "" : (r > 9 ? "" : n) + r + i + o[+(1 != r) + (1 != r && (2 > r % 10 || r % 10 > 4) || r > 10 && 20 > r)]
                }), i ? t(i).html(l.text) : i = a, (e.onTick || s).call(i, a.val = l), 0 > r && !n && (clearInterval(a.interval), (e.onEnd || s).call(i, l))
            }
        }, 1e3), n(), a.pause = a.stop = function() {
            a.paused = Date.now()
        }, a.resume = function() {
            o -= (a.paused - Date.now()) * r, a.paused = 0
        }, a.start = function() {
            a.paused = 0;
        }, a.restart = function(dnew) {
            a.paused = 0;
            o = dnew
        }
    }, t.fn.tinyTimer = function(e) {
        return this.each(function() {
            t(this).data("tinyTimer", new t.tinyTimer(t.extend(e, {
                element: t(this)
            })))
        })
    }
})(jQuery);