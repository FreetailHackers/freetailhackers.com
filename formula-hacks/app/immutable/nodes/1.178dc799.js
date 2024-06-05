import {
    S as g,
    i as v,
    s as b,
    e as $,
    t as _,
    a as x,
    c as E,
    b as S,
    d as u,
    f as j,
    g as f,
    h as k,
    j as c,
    k as h,
    n as d,
    l as q
} from "../chunks/index.261a66a9.js";
import {
    p as y
} from "../chunks/stores.985a613e.js";

function C(n) {
    var p;
    let e, s = n[0].status + "",
        r, o, i = ((p = n[0].error) == null ? void 0 : p.message) + "",
        l;
    return {
        c() {
            e = $("h1"), r = _(s), o = x(), l = _(i)
        },
        l(t) {
            e = E(t, "H1", {});
            var a = S(e);
            r = u(a, s), o = j(a), l = u(a, i), a.forEach(f)
        },
        m(t, a) {
            k(t, e, a), c(e, r), c(e, o), c(e, l)
        },
        p(t, [a]) {
            var m;
            a & 1 && s !== (s = t[0].status + "") && h(r, s), a & 1 && i !== (i = ((m = t[0].error) == null ? void 0 : m.message) + "") && h(l, i)
        },
        i: d,
        o: d,
        d(t) {
            t && f(e)
        }
    }
}

function H(n, e, s) {
    let r;
    return q(n, y, o => s(0, r = o)), [r]
}
class A extends g {
    constructor(e) {
        super(), v(this, e, H, C, b, {})
    }
}
export {
    A as component
};