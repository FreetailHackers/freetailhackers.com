import {
    S as dt,
    i as mt,
    s as Oe,
    e as m,
    c as v,
    b as p,
    g as i,
    o as l,
    h as j,
    L as ct,
    Q as rl,
    R as il,
    M as ht,
    v as ie,
    w as ne,
    l as Yt,
    t as A,
    a as b,
    d as I,
    f as E,
    j as a,
    k as ol,
    F as Jt,
    a3 as xt,
    a4 as fl,
    n as He,
    x as el,
    z as tl,
    a5 as _t,
    J as ut,
    p as q,
    A as ll,
    D as al,
    N as nl,
    K as Ut,
    m as ul,
    u as cl,
    q as hl,
    r as _l,
    O as Rt
} from "../chunks/index.261a66a9.js";
import {
    p as dl
} from "../chunks/stores.985a613e.js";
import {
    f as ml,
    s as vl,
    c as pl,
    a as kl
} from "../chunks/global.71552cbe.js";
import {
    t as sl
} from "../chunks/stores.e7401337.js";
import {
    b as gl,
    a as bl
} from "../chunks/navigation.e6dc5f90.js";

function Wt(f, t, e) {
    const o = f.slice();
    return o[1] = t[e], o
}

function Vt(f, t) {
    let e, o = t[1].message + "",
        s, r, c, n, u;
    return {
        key: f,
        first: null,
        c() {
            e = m("li"), s = A(o), r = b(), this.h()
        },
        l(h) {
            e = v(h, "LI", {
                class: !0
            });
            var d = p(e);
            s = I(d, o), r = E(d), d.forEach(i), this.h()
        },
        h() {
            l(e, "class", "toast svelte-d59je3"), this.first = e
        },
        m(h, d) {
            j(h, e, d), a(e, s), a(e, r), u = !0
        },
        p(h, d) {
            t = h, (!u || d & 1) && o !== (o = t[1].message + "") && ol(s, o)
        },
        i(h) {
            u || (Jt(() => {
                n && n.end(1), c = xt(e, ml, {
                    x: 1e3,
                    duration: 500
                }), c.start()
            }), u = !0)
        },
        o(h) {
            c && c.invalidate(), n = fl(e, vl, {}), u = !1
        },
        d(h) {
            h && i(e), h && n && n.end()
        }
    }
}

function El(f) {
    let t, e = [],
        o = new Map,
        s, r = f[0];
    const c = n => n[1].id;
    for (let n = 0; n < r.length; n += 1) {
        let u = Wt(f, r, n),
            h = c(u);
        o.set(h, e[n] = Vt(h, u))
    }
    return {
        c() {
            t = m("ol");
            for (let n = 0; n < e.length; n += 1) e[n].c();
            this.h()
        },
        l(n) {
            t = v(n, "OL", {
                id: !0,
                class: !0
            });
            var u = p(t);
            for (let h = 0; h < e.length; h += 1) e[h].l(u);
            u.forEach(i), this.h()
        },
        h() {
            l(t, "id", "toasts"), l(t, "class", "svelte-d59je3")
        },
        m(n, u) {
            j(n, t, u);
            for (let h = 0; h < e.length; h += 1) e[h].m(t, null);
            s = !0
        },
        p(n, [u]) {
            u & 1 && (r = n[0], ct(), e = rl(e, u, c, 1, n, r, o, t, il, Vt, null, Wt), ht())
        },
        i(n) {
            if (!s) {
                for (let u = 0; u < r.length; u += 1) ie(e[u]);
                s = !0
            }
        },
        o(n) {
            for (let u = 0; u < e.length; u += 1) ne(e[u]);
            s = !1
        },
        d(n) {
            n && i(t);
            for (let u = 0; u < e.length; u += 1) e[u].d()
        }
    }
}

function Al(f, t, e) {
    let o;
    return Yt(f, sl, s => e(0, o = s)), [o]
}
class Il extends dt {
    constructor(t) {
        super(), mt(this, t, Al, El, Oe, {})
    }
}

function jl(f) {
    let t, e, o, s, r, c;
    return {
        c() {
            t = m("div"), e = m("style"), o = A(`:global(.loader-medium) {
    --loader-size: 2rem;
}

:global(.loader-large) {
    --loader-size: 3rem;
}`), s = b(), r = m("style"), c = A(`:global(.loader) {
    --loader-color: #000;
}`), this.h()
        },
        l(n) {
            t = v(n, "DIV", {
                class: !0
            });
            var u = p(t);
            e = v(u, "STYLE", {});
            var h = p(e);
            o = I(h, `:global(.loader-medium) {
    --loader-size: 2rem;
}

:global(.loader-large) {
    --loader-size: 3rem;
}`), h.forEach(i), s = E(u), r = v(u, "STYLE", {});
            var d = p(r);
            c = I(d, `:global(.loader) {
    --loader-color: #000;
}`), d.forEach(i), u.forEach(i), this.h()
        },
        h() {
            l(t, "class", "loader svelte-pzrc1t")
        },
        m(n, u) {
            j(n, t, u), a(t, e), a(e, o), a(t, s), a(t, r), a(r, c)
        },
        p: He,
        i: He,
        o: He,
        d(n) {
            n && i(t)
        }
    }
}
class ql extends dt {
    constructor(t) {
        super(), mt(this, t, null, jl, Oe, {})
    }
}

function zt(f) {
    let t, e, o, s, r, c, n, u, h, d, L, y, $, U, W, oe, B, V, fe;
    return {
        c() {
            t = m("li"), e = m("a"), o = A("Announcements"), s = b(), r = m("li"), c = m("a"), n = A("Schedule"), u = b(), h = m("li"), d = m("a"), L = A("FAQ"), y = b(), $ = m("li"), U = m("a"), W = A("Challenges"), oe = b(), B = m("li"), V = m("a"), fe = A("Sponsors"), this.h()
        },
        l(k) {
            t = v(k, "LI", {});
            var w = p(t);
            e = v(w, "A", {
                href: !0,
                class: !0
            });
            var ke = p(e);
            o = I(ke, "Announcements"), ke.forEach(i), w.forEach(i), s = E(k), r = v(k, "LI", {});
            var ue = p(r);
            c = v(ue, "A", {
                href: !0,
                class: !0
            });
            var ge = p(c);
            n = I(ge, "Schedule"), ge.forEach(i), ue.forEach(i), u = E(k), h = v(k, "LI", {});
            var ce = p(h);
            d = v(ce, "A", {
                href: !0,
                class: !0
            });
            var be = p(d);
            L = I(be, "FAQ"), be.forEach(i), ce.forEach(i), y = E(k), $ = v(k, "LI", {});
            var he = p($);
            U = v(he, "A", {
                href: !0,
                class: !0
            });
            var Z = p(U);
            W = I(Z, "Challenges"), Z.forEach(i), he.forEach(i), oe = E(k), B = v(k, "LI", {});
            var Ee = p(B);
            V = v(Ee, "A", {
                href: !0,
                class: !0
            });
            var _e = p(V);
            fe = I(_e, "Sponsors"), _e.forEach(i), Ee.forEach(i), this.h()
        },
        h() {
            l(e, "href", "#Announcements"), l(e, "class", "svelte-6afqtj"), q(e, "active", f[1].url.hash === "#Announcements"), l(c, "href", "#Schedule"), l(c, "class", "svelte-6afqtj"), q(c, "active", f[1].url.hash === "#Schedule"), l(d, "href", "#FAQ"), l(d, "class", "svelte-6afqtj"), q(d, "active", f[1].url.hash === "#FAQ"), l(U, "href", "#Challenges"), l(U, "class", "svelte-6afqtj"), q(U, "active", f[1].url.hash === "#Challenges"), l(V, "href", "#Sponsors"), l(V, "class", "svelte-6afqtj"), q(V, "active", f[1].url.hash === "#Sponsors")
        },
        m(k, w) {
            j(k, t, w), a(t, e), a(e, o), j(k, s, w), j(k, r, w), a(r, c), a(c, n), j(k, u, w), j(k, h, w), a(h, d), a(d, L), j(k, y, w), j(k, $, w), a($, U), a(U, W), j(k, oe, w), j(k, B, w), a(B, V), a(V, fe)
        },
        p(k, w) {
            w & 2 && q(e, "active", k[1].url.hash === "#Announcements"), w & 2 && q(c, "active", k[1].url.hash === "#Schedule"), w & 2 && q(d, "active", k[1].url.hash === "#FAQ"), w & 2 && q(U, "active", k[1].url.hash === "#Challenges"), w & 2 && q(V, "active", k[1].url.hash === "#Sponsors")
        },
        d(k) {
            k && i(t), k && i(s), k && i(r), k && i(u), k && i(h), k && i(y), k && i($), k && i(oe), k && i(B)
        }
    }
}

function Qt(f) {
    let t, e, o;
    return {
        c() {
            t = m("li"), e = m("a"), o = A("My Hacker ID"), this.h()
        },
        l(s) {
            t = v(s, "LI", {});
            var r = p(t);
            e = v(r, "A", {
                href: !0,
                class: !0
            });
            var c = p(e);
            o = I(c, "My Hacker ID"), c.forEach(i), r.forEach(i), this.h()
        },
        h() {
            l(e, "href", "id"), l(e, "class", "svelte-6afqtj"), q(e, "active", f[1].url.pathname.startsWith("id"))
        },
        m(s, r) {
            j(s, t, r), a(t, e), a(e, o)
        },
        p(s, r) {
            r & 2 && q(e, "active", s[1].url.pathname.startsWith("id"))
        },
        d(s) {
            s && i(t)
        }
    }
}

function Gt(f) {
    let t, e, o;
    return {
        c() {
            t = m("li"), e = m("a"), o = A("Scan"), this.h()
        },
        l(s) {
            t = v(s, "LI", {});
            var r = p(t);
            e = v(r, "A", {
                href: !0,
                class: !0
            });
            var c = p(e);
            o = I(c, "Scan"), c.forEach(i), r.forEach(i), this.h()
        },
        h() {
            l(e, "href", "scan"), l(e, "class", "svelte-6afqtj"), q(e, "active", f[1].url.pathname.startsWith("scan"))
        },
        m(s, r) {
            j(s, t, r), a(t, e), a(e, o)
        },
        p(s, r) {
            r & 2 && q(e, "active", s[1].url.pathname.startsWith("scan"))
        },
        d(s) {
            s && i(t)
        }
    }
}

function Kt(f) {
    let t, e, o;
    return {
        c() {
            t = m("li"), e = m("a"), o = A("Apply"), this.h()
        },
        l(s) {
            t = v(s, "LI", {});
            var r = p(t);
            e = v(r, "A", {
                href: !0,
                class: !0
            });
            var c = p(e);
            o = I(c, "Apply"), c.forEach(i), r.forEach(i), this.h()
        },
        h() {
            l(e, "href", "apply"), l(e, "class", "svelte-6afqtj"), q(e, "active", f[1].url.pathname.startsWith("apply"))
        },
        m(s, r) {
            j(s, t, r), a(t, e), a(e, o)
        },
        p(s, r) {
            r & 2 && q(e, "active", s[1].url.pathname.startsWith("apply"))
        },
        d(s) {
            s && i(t)
        }
    }
}

function $t(f) {
    var u;
    let t, e, o, s, r = (u = f[0].user) == null ? void 0 : u.roles.includes("ADMIN"),
        c, n = r && Bt(f);
    return {
        c() {
            t = m("li"), e = m("a"), o = A("Users"), s = b(), n && n.c(), c = Ut(), this.h()
        },
        l(h) {
            t = v(h, "LI", {});
            var d = p(t);
            e = v(d, "A", {
                href: !0,
                "data-sveltekit-reload": !0,
                class: !0
            });
            var L = p(e);
            o = I(L, "Users"), L.forEach(i), d.forEach(i), s = E(h), n && n.l(h), c = Ut(), this.h()
        },
        h() {
            l(e, "href", "users"), l(e, "data-sveltekit-reload", ""), l(e, "class", "svelte-6afqtj"), q(e, "active", f[1].url.pathname.startsWith("users"))
        },
        m(h, d) {
            j(h, t, d), a(t, e), a(e, o), j(h, s, d), n && n.m(h, d), j(h, c, d)
        },
        p(h, d) {
            var L;
            d & 2 && q(e, "active", h[1].url.pathname.startsWith("users")), d & 1 && (r = (L = h[0].user) == null ? void 0 : L.roles.includes("ADMIN")), r ? n ? n.p(h, d) : (n = Bt(h), n.c(), n.m(c.parentNode, c)) : n && (n.d(1), n = null)
        },
        d(h) {
            h && i(t), h && i(s), n && n.d(h), h && i(c)
        }
    }
}

function Bt(f) {
    let t, e, o, s, r, c, n;
    return {
        c() {
            t = m("li"), e = m("a"), o = A("Admin"), s = b(), r = m("li"), c = m("a"), n = A("Admissions"), this.h()
        },
        l(u) {
            t = v(u, "LI", {});
            var h = p(t);
            e = v(h, "A", {
                href: !0,
                class: !0
            });
            var d = p(e);
            o = I(d, "Admin"), d.forEach(i), h.forEach(i), s = E(u), r = v(u, "LI", {});
            var L = p(r);
            c = v(L, "A", {
                href: !0,
                class: !0
            });
            var y = p(c);
            n = I(y, "Admissions"), y.forEach(i), L.forEach(i), this.h()
        },
        h() {
            l(e, "href", "admin"), l(e, "class", "svelte-6afqtj"), q(e, "active", f[1].url.pathname.startsWith("admin")), l(c, "href", "admissions"), l(c, "class", "svelte-6afqtj"), q(c, "active", f[1].url.pathname.startsWith("admissions"))
        },
        m(u, h) {
            j(u, t, h), a(t, e), a(e, o), j(u, s, h), j(u, r, h), a(r, c), a(c, n)
        },
        p(u, h) {
            h & 2 && q(e, "active", u[1].url.pathname.startsWith("admin")), h & 2 && q(c, "active", u[1].url.pathname.startsWith("admissions"))
        },
        d(u) {
            u && i(t), u && i(s), u && i(r)
        }
    }
}

function yl(f) {
    let t, e, o;
    return {
        c() {
            t = m("form"), e = m("button"), o = A("Logout"), this.h()
        },
        l(s) {
            t = v(s, "FORM", {
                method: !0,
                action: !0
            });
            var r = p(t);
            e = v(r, "BUTTON", {
                class: !0,
                type: !0
            });
            var c = p(e);
            o = I(c, "Logout"), c.forEach(i), r.forEach(i), this.h()
        },
        h() {
            l(e, "class", "button svelte-6afqtj"), l(e, "type", "submit"), l(t, "method", "POST"), l(t, "action", "logout")
        },
        m(s, r) {
            j(s, t, r), a(t, e), a(e, o)
        },
        p: He,
        d(s) {
            s && i(t)
        }
    }
}

function Pt(f) {
    let t, e, o;
    return e = new ql({}), {
        c() {
            t = m("div"), el(e.$$.fragment), this.h()
        },
        l(s) {
            t = v(s, "DIV", {
                class: !0
            });
            var r = p(t);
            tl(e.$$.fragment, r), r.forEach(i), this.h()
        },
        h() {
            l(t, "class", "overlay svelte-6afqtj")
        },
        m(s, r) {
            j(s, t, r), ll(e, t, null), o = !0
        },
        i(s) {
            o || (ie(e.$$.fragment, s), o = !0)
        },
        o(s) {
            ne(e.$$.fragment, s), o = !1
        },
        d(s) {
            s && i(t), al(e)
        }
    }
}

function Zt(f) {
    let t, e, o;
    return {
        c() {
            t = m("a"), e = m("img"), this.h()
        },
        l(s) {
            t = v(s, "A", {
                class: !0,
                id: !0,
                href: !0,
                target: !0,
                rel: !0
            });
            var r = p(t);
            e = v(r, "IMG", {
                src: !0,
                alt: !0,
                id: !0,
                class: !0
            }), r.forEach(i), this.h()
        },
        h() {
            _t(e.src, o = "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-red.svg") || l(e, "src", o), l(e, "alt", "Major League Hacking 2024 Hackathon Season"), l(e, "id", "mlh-badge-image"), l(e, "class", "svelte-6afqtj"), l(t, "class", "banner svelte-6afqtj"), l(t, "id", "mlh-trust-badge"), l(t, "href", "https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=red"), l(t, "target", "_blank"), l(t, "rel", "noreferrer")
        },
        m(s, r) {
            j(s, t, r), a(t, e)
        },
        d(s) {
            s && i(t)
        }
    }
}

function Xt(f) {
    let t, e, o;
    const s = f[6].default,
        r = ul(s, f, f[5], null);
    return {
        c() {
            t = m("div"), r && r.c()
        },
        l(c) {
            t = v(c, "DIV", {});
            var n = p(t);
            r && r.l(n), n.forEach(i)
        },
        m(c, n) {
            j(c, t, n), r && r.m(t, null), o = !0
        },
        p(c, n) {
            f = c, r && r.p && (!o || n & 32) && cl(r, s, f, f[5], o ? _l(s, f[5], n, null) : hl(f[5]), null)
        },
        i(c) {
            o || (ie(r, c), e || Jt(() => {
                e = xt(t, kl, {
                    easing: pl,
                    duration: 300
                }), e.start()
            }), o = !0)
        },
        o(c) {
            ne(r, c), o = !1
        },
        d(c) {
            c && i(t), r && r.d(c)
        }
    }
}

function wl(f) {
    var kt, gt, bt, Et, At, It;
    let t, e, o, s, r, c, n, u, h, d, L, y, $, U, W, oe, B, V = !((kt = f[0].user) != null && kt.roles.includes("ADMIN")),
        fe, k = f[0].user !== void 0 && (!f[0].user.roles.includes("HACKER") || f[0].user.roles.length > 1 || f[0].user.status === "CONFIRMED"),
        w, ke = ((gt = f[0].user) == null ? void 0 : gt.roles.includes("ORGANIZER")) || ((bt = f[0].user) == null ? void 0 : bt.roles.includes("ADMIN")),
        ue, ge = (Et = f[0].user) == null ? void 0 : Et.roles.includes("HACKER"),
        ce, be = ((At = f[0].user) == null ? void 0 : At.roles.includes("ADMIN")) || ((It = f[0].user) == null ? void 0 : It.roles.includes("SPONSOR")),
        he, Z, Ee, _e, Ae, vt = f[1].url.pathname,
        Ie, de, Ce, me, P, ve, Te, X, Ue, Re, D, je, We, Ve, Y, ze, Qe, J, Ge, Ke, x, $e, Be, ee, Pe, Ze, pe, Xe, Ye, S, qe, Je, xe, te, et, tt, le, lt, at, ae, st, rt, se, it, ot, re, ft, we, H = V && zt(f),
        C = k && Qt(f),
        F = ke && Gt(f),
        O = ge && Kt(f),
        T = be && $t(f);

    function pt(_, g) {
        return _[0].user === void 0 ? Ll : yl
    }
    let Fe = pt(f),
        K = Fe(f),
        N = f[4] && Pt(),
        R = f[1].url.pathname === "/formula-hacks/" && Zt(),
        z = Xt(f);
    return de = new Il({}), {
        c() {
            t = m("nav"), e = m("label"), o = m("img"), r = m("b"), c = A("MENU"), n = b(), u = m("input"), h = b(), d = m("menu"), L = m("img"), $ = b(), U = m("li"), W = m("a"), oe = A("Home"), B = b(), H && H.c(), fe = b(), C && C.c(), w = b(), F && F.c(), ue = b(), O && O.c(), ce = b(), T && T.c(), he = b(), Z = m("li"), K.c(), Ee = b(), N && N.c(), _e = b(), R && R.c(), Ae = b(), z.c(), Ie = b(), el(de.$$.fragment), Ce = b(), me = m("footer"), P = m("div"), ve = m("div"), Te = A("Made with ❤️ by "), X = m("a"), Ue = A("Freetail Hackers"), Re = b(), D = m("div"), je = m("div"), We = A("Links"), Ve = b(), Y = m("a"), ze = A("Instagram"), Qe = b(), J = m("a"), Ge = A("LinkedIn"), Ke = b(), x = m("a"), $e = A("Discord"), Be = b(), ee = m("a"), Pe = A("Feedback"), Ze = b(), pe = m("a"), Xe = A("Contact Us"), Ye = b(), S = m("div"), qe = m("div"), Je = A("Other Hackathons"), xe = b(), te = m("a"), et = A("RowdyHacks"), tt = b(), le = m("a"), lt = A("TAMUhack"), at = b(), ae = m("a"), st = A("HackUTD"), rt = b(), se = m("a"), it = A("HackUNT"), ot = b(), re = m("a"), ft = A("HackUTA"), this.h()
        },
        l(_) {
            t = v(_, "NAV", {
                class: !0
            });
            var g = p(t);
            e = v(g, "LABEL", {
                for: !0,
                id: !0,
                class: !0
            });
            var ye = p(e);
            o = v(ye, "IMG", {
                src: !0,
                alt: !0,
                id: !0,
                style: !0,
                class: !0
            }), r = v(ye, "B", {});
            var Ne = p(r);
            c = I(Ne, "MENU"), Ne.forEach(i), ye.forEach(i), n = E(g), u = v(g, "INPUT", {
                type: !0,
                id: !0,
                style: !0,
                class: !0
            }), h = E(g), d = v(g, "MENU", {
                id: !0,
                class: !0
            });
            var M = p(d);
            L = v(M, "IMG", {
                src: !0,
                id: !0,
                alt: !0,
                class: !0
            }), $ = E(M), U = v(M, "LI", {});
            var Me = p(U);
            W = v(Me, "A", {
                href: !0,
                class: !0
            });
            var De = p(W);
            oe = I(De, "Home"), De.forEach(i), Me.forEach(i), B = E(M), H && H.l(M), fe = E(M), C && C.l(M), w = E(M), F && F.l(M), ue = E(M), O && O.l(M), ce = E(M), T && T.l(M), he = E(M), Z = v(M, "LI", {});
            var Se = p(Z);
            K.l(Se), Se.forEach(i), M.forEach(i), Ee = E(g), N && N.l(g), g.forEach(i), _e = E(_), R && R.l(_), Ae = E(_), z.l(_), Ie = E(_), tl(de.$$.fragment, _), Ce = E(_), me = v(_, "FOOTER", {
                class: !0
            });
            var jt = p(me);
            P = v(jt, "DIV", {
                class: !0
            });
            var Le = p(P);
            ve = v(Le, "DIV", {
                class: !0
            });
            var nt = p(ve);
            Te = I(nt, "Made with ❤️ by "), X = v(nt, "A", {
                class: !0,
                target: !0,
                rel: !0,
                href: !0
            });
            var qt = p(X);
            Ue = I(qt, "Freetail Hackers"), qt.forEach(i), nt.forEach(i), Re = E(Le), D = v(Le, "DIV", {
                class: !0
            });
            var Q = p(D);
            je = v(Q, "DIV", {
                class: !0
            });
            var yt = p(je);
            We = I(yt, "Links"), yt.forEach(i), Ve = E(Q), Y = v(Q, "A", {
                target: !0,
                rel: !0,
                href: !0,
                class: !0
            });
            var Lt = p(Y);
            ze = I(Lt, "Instagram"), Lt.forEach(i), Qe = E(Q), J = v(Q, "A", {
                target: !0,
                rel: !0,
                href: !0,
                class: !0
            });
            var wt = p(J);
            Ge = I(wt, "LinkedIn"), wt.forEach(i), Ke = E(Q), x = v(Q, "A", {
                target: !0,
                rel: !0,
                href: !0,
                class: !0
            });
            var Nt = p(x);
            $e = I(Nt, "Discord"), Nt.forEach(i), Be = E(Q), ee = v(Q, "A", {
                target: !0,
                rel: !0,
                href: !0,
                class: !0
            });
            var Mt = p(ee);
            Pe = I(Mt, "Feedback"), Mt.forEach(i), Ze = E(Q), pe = v(Q, "A", {
                href: !0,
                class: !0
            });
            var Dt = p(pe);
            Xe = I(Dt, "Contact Us"), Dt.forEach(i), Q.forEach(i), Ye = E(Le), S = v(Le, "DIV", {
                class: !0
            });
            var G = p(S);
            qe = v(G, "DIV", {
                class: !0
            });
            var St = p(qe);
            Je = I(St, "Other Hackathons"), St.forEach(i), xe = E(G), te = v(G, "A", {
                target: !0,
                rel: !0,
                href: !0,
                class: !0
            });
            var Ht = p(te);
            et = I(Ht, "RowdyHacks"), Ht.forEach(i), tt = E(G), le = v(G, "A", {
                target: !0,
                rel: !0,
                href: !0,
                class: !0
            });
            var Ct = p(le);
            lt = I(Ct, "TAMUhack"), Ct.forEach(i), at = E(G), ae = v(G, "A", {
                target: !0,
                rel: !0,
                href: !0,
                class: !0
            });
            var Ft = p(ae);
            st = I(Ft, "HackUTD"), Ft.forEach(i), rt = E(G), se = v(G, "A", {
                target: !0,
                rel: !0,
                href: !0,
                class: !0
            });
            var Ot = p(se);
            it = I(Ot, "HackUNT"), Ot.forEach(i), ot = E(G), re = v(G, "A", {
                target: !0,
                rel: !0,
                href: !0,
                class: !0
            });
            var Tt = p(re);
            ft = I(Tt, "HackUTA"), Tt.forEach(i), G.forEach(i), Le.forEach(i), jt.forEach(i), this.h()
        },
        h() {
            _t(o.src, s = "burger_Menu.png") || l(o, "src", s), l(o, "alt", "Freetail logo"), l(o, "id", "hamburger-logo"), ut(o, "width", "50px"), ut(o, "height", "20px"), l(o, "class", "svelte-6afqtj"), l(e, "for", "hamburgerCheckbox"), l(e, "id", "hamburger"), l(e, "class", "svelte-6afqtj"), l(u, "type", "checkbox"), l(u, "id", "hamburgerCheckbox"), ut(u, "display", "none"), l(u, "class", "svelte-6afqtj"), _t(L.src, y = "Freetail_bat.png") || l(L, "src", y), l(L, "id", "menu-logo"), l(L, "alt", "Freetail logo"), l(L, "class", "svelte-6afqtj"), l(W, "href", ""), l(W, "class", "svelte-6afqtj"), q(W, "active", f[1].url.pathname === "" && f[1].url.hash === ""), l(d, "id", "menu"), l(d, "class", "svelte-6afqtj"), l(t, "class", "svelte-6afqtj"), l(X, "class", "freetail-link svelte-6afqtj"), l(X, "target", "_blank"), l(X, "rel", "noopener noreferrer"), l(X, "href", "https://freetailhackers.com"), l(ve, "class", "made-with-love svelte-6afqtj"), l(je, "class", "row category svelte-6afqtj"), l(Y, "target", "_blank"), l(Y, "rel", "noopener noreferrer"), l(Y, "href", "https://www.instagram.com/freetailhackers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="), l(Y, "class", "svelte-6afqtj"), l(J, "target", "_blank"), l(J, "rel", "noopener noreferrer"), l(J, "href", "https://www.linkedin.com/company/freetail-hackers"), l(J, "class", "svelte-6afqtj"), l(x, "target", "_blank"), l(x, "rel", "noopener noreferrer"), l(x, "href", "https://freetailhackers.com/discord"), l(x, "class", "svelte-6afqtj"), l(ee, "target", "_blank"), l(ee, "rel", "noopener noreferrer"), l(ee, "href", "https://docs.google.com/forms/d/e/1FAIpQLSdQld-vgVLXOuIXIcUNpTFMwii_7Cu9Vqj7CVxXs3ScFsCIrg/viewform?usp=sf_link"), l(ee, "class", "svelte-6afqtj"), l(pe, "href", "mailto:admin@freetailhackers.com"), l(pe, "class", "svelte-6afqtj"), l(D, "class", "flex-column svelte-6afqtj"), l(qe, "class", "row category svelte-6afqtj"), l(te, "target", "_blank"), l(te, "rel", "noopener noreferrer"), l(te, "href", "https://rowdyhacks.org/"), l(te, "class", "svelte-6afqtj"), l(le, "target", "_blank"), l(le, "rel", "noopener noreferrer"), l(le, "href", "https://tamuhack.org/"), l(le, "class", "svelte-6afqtj"), l(ae, "target", "_blank"), l(ae, "rel", "noopener noreferrer"), l(ae, "href", "https://hackutd.co/"), l(ae, "class", "svelte-6afqtj"), l(se, "target", "_blank"), l(se, "rel", "noopener noreferrer"), l(se, "href", "https://www.unthackathon.com/"), l(se, "class", "svelte-6afqtj"), l(re, "target", "_blank"), l(re, "rel", "noopener noreferrer"), l(re, "href", "https://hackuta.org"), l(re, "class", "svelte-6afqtj"), l(S, "class", "flex-column svelte-6afqtj"), l(P, "class", "footer-flex svelte-6afqtj"), l(me, "class", "svelte-6afqtj")
        },
        m(_, g) {
            j(_, t, g), a(t, e), a(e, o), a(e, r), a(r, c), a(t, n), a(t, u), f[7](u), a(t, h), a(t, d), a(d, L), a(d, $), a(d, U), a(U, W), a(W, oe), a(d, B), H && H.m(d, null), a(d, fe), C && C.m(d, null), a(d, w), F && F.m(d, null), a(d, ue), O && O.m(d, null), a(d, ce), T && T.m(d, null), a(d, he), a(d, Z), K.m(Z, null), f[8](d), a(t, Ee), N && N.m(t, null), j(_, _e, g), R && R.m(_, g), j(_, Ae, g), z.m(_, g), j(_, Ie, g), ll(de, _, g), j(_, Ce, g), j(_, me, g), a(me, P), a(P, ve), a(ve, Te), a(ve, X), a(X, Ue), a(P, Re), a(P, D), a(D, je), a(je, We), a(D, Ve), a(D, Y), a(Y, ze), a(D, Qe), a(D, J), a(J, Ge), a(D, Ke), a(D, x), a(x, $e), a(D, Be), a(D, ee), a(ee, Pe), a(D, Ze), a(D, pe), a(pe, Xe), a(P, Ye), a(P, S), a(S, qe), a(qe, Je), a(S, xe), a(S, te), a(te, et), a(S, tt), a(S, le), a(le, lt), a(S, at), a(S, ae), a(ae, st), a(S, rt), a(S, se), a(se, it), a(S, ot), a(S, re), a(re, ft), we = !0
        },
        p(_, [g]) {
            var ye, Ne, M, Me, De, Se;
            (!we || g & 2) && q(W, "active", _[1].url.pathname === "/formula-hacks/" && _[1].url.hash === ""), g & 1 && (V = !((ye = _[0].user) != null && ye.roles.includes("ADMIN"))), V ? H ? H.p(_, g) : (H = zt(_), H.c(), H.m(d, fe)) : H && (H.d(1), H = null), g & 1 && (k = _[0].user !== void 0 && (!_[0].user.roles.includes("HACKER") || _[0].user.roles.length > 1 || _[0].user.status === "CONFIRMED")), k ? C ? C.p(_, g) : (C = Qt(_), C.c(), C.m(d, w)) : C && (C.d(1), C = null), g & 1 && (ke = ((Ne = _[0].user) == null ? void 0 : Ne.roles.includes("ORGANIZER")) || ((M = _[0].user) == null ? void 0 : M.roles.includes("ADMIN"))), ke ? F ? F.p(_, g) : (F = Gt(_), F.c(), F.m(d, ue)) : F && (F.d(1), F = null), g & 1 && (ge = (Me = _[0].user) == null ? void 0 : Me.roles.includes("HACKER")), ge ? O ? O.p(_, g) : (O = Kt(_), O.c(), O.m(d, ce)) : O && (O.d(1), O = null), g & 1 && (be = ((De = _[0].user) == null ? void 0 : De.roles.includes("ADMIN")) || ((Se = _[0].user) == null ? void 0 : Se.roles.includes("SPONSOR"))), be ? T ? T.p(_, g) : (T = $t(_), T.c(), T.m(d, he)) : T && (T.d(1), T = null), Fe === (Fe = pt(_)) && K ? K.p(_, g) : (K.d(1), K = Fe(_), K && (K.c(), K.m(Z, null))), _[4] ? N ? g & 16 && ie(N, 1) : (N = Pt(), N.c(), ie(N, 1), N.m(t, null)) : N && (ct(), ne(N, 1, 1, () => {
                N = null
            }), ht()), _[1].url.pathname === "/formula-hacks/" ? R || (R = Zt(), R.c(), R.m(Ae.parentNode, Ae)) : R && (R.d(1), R = null), g & 2 && Oe(vt, vt = _[1].url.pathname) ? (ct(), ne(z, 1, 1, He), ht(), z = Xt(_), z.c(), ie(z, 1), z.m(Ie.parentNode, Ie)) : z.p(_, g)
        },
        i(_) {
            we || (ie(N), ie(z), ie(de.$$.fragment, _), we = !0)
        },
        o(_) {
            ne(N), ne(z), ne(de.$$.fragment, _), we = !1
        },
        d(_) {
            _ && i(t), f[7](null), H && H.d(), C && C.d(), F && F.d(), O && O.d(), T && T.d(), K.d(), f[8](null), N && N.d(), _ && i(_e), R && R.d(_), _ && i(Ae), z.d(_), _ && i(Ie), al(de, _), _ && i(Ce), _ && i(me)
        }
    }
}

function Nl(f, t, e) {
    let o;
    Yt(f, dl, y => e(1, o = y));
    let {
        $$slots: s = {},
        $$scope: r
    } = t, {
        data: c
    } = t, n, u, h = !1;
    gl(() => e(4, h = !0)), bl(() => e(4, h = !1)), nl(() => {
        for (const y of n.childNodes) y.addEventListener("click", () => {
            e(3, u.checked = !1, u)
        })
    });

    function d(y) {
        Rt[y ? "unshift" : "push"](() => {
            u = y, e(3, u)
        })
    }

    function L(y) {
        Rt[y ? "unshift" : "push"](() => {
            n = y, e(2, n)
        })
    }
    return f.$$set = y => {
        "data" in y && e(0, c = y.data), "$$scope" in y && e(5, r = y.$$scope)
    }, f.$$.update = () => {
        f.$$.dirty & 2 && typeof o.form == "string" && sl.notify(o.form)
    }, [c, o, n, u, h, r, s, d, L]
}
class Fl extends dt {
    constructor(t) {
        super(), mt(this, t, Nl, wl, Oe, {
            data: 0
        })
    }
}
export {
    Fl as component
};