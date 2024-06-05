import {
    N as me,
    W as _e
} from "../chunks/index.261a66a9.js";
import {
    S as Je,
    b as Ke,
    I as q,
    g as De,
    f as Ne,
    d as we,
    e as le,
    h as te,
    i as ye,
    s as F,
    j as z,
    P as qe,
    k as Xe
} from "../chunks/singletons.f080493a.js";
import {
    u as Qe
} from "../chunks/parse.bee59afc.js";

function Ze(n, o) {
    return n === "/" || o === "ignore" ? n : o === "never" ? n.endsWith("/") ? n.slice(0, -1) : n : o === "always" && !n.endsWith("/") ? n + "/" : n
}

function et(n) {
    return n.split("%25").map(decodeURI).join("%25")
}

function tt(n) {
    for (const o in n) n[o] = decodeURIComponent(n[o]);
    return n
}
const nt = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];

function at(n, o) {
    const l = new URL(n);
    for (const c of nt) Object.defineProperty(l, c, {
        get() {
            return o(), n[c]
        },
        enumerable: !0,
        configurable: !0
    });
    return rt(l), l
}

function rt(n) {
    Object.defineProperty(n, "hash", {
        get() {
            throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")
        }
    })
}
const ot = "/__data.json";

function it(n) {
    return n.replace(/\/$/, "") + ot
}

function st(...n) {
    let o = 5381;
    for (const l of n)
        if (typeof l == "string") {
            let c = l.length;
            for (; c;) o = o * 33 ^ l.charCodeAt(--c)
        } else if (ArrayBuffer.isView(l)) {
        const c = new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
        let p = c.length;
        for (; p;) o = o * 33 ^ c[--p]
    } else throw new TypeError("value must be a string or TypedArray");
    return (o >>> 0).toString(36)
}
const ze = window.fetch;
window.fetch = (n, o) => ((n instanceof Request ? n.method : (o == null ? void 0 : o.method) || "GET") !== "GET" && ae.delete(Ee(n)), ze(n, o));
const ae = new Map;

function ct(n, o) {
    const l = Ee(n, o),
        c = document.querySelector(l);
    if (c != null && c.textContent) {
        const {
            body: p,
            ...b
        } = JSON.parse(c.textContent), E = c.getAttribute("data-ttl");
        return E && ae.set(l, {
            body: p,
            init: b,
            ttl: 1e3 * Number(E)
        }), Promise.resolve(new Response(p, b))
    }
    return window.fetch(n, o)
}

function lt(n, o, l) {
    if (ae.size > 0) {
        const c = Ee(n, l),
            p = ae.get(c);
        if (p) {
            if (performance.now() < p.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(l == null ? void 0 : l.cache)) return new Response(p.body, p.init);
            ae.delete(c)
        }
    }
    return window.fetch(o, l)
}

function Ee(n, o) {
    let c = `script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;
    if (o != null && o.headers || o != null && o.body) {
        const p = [];
        o.headers && p.push([...new Headers(o.headers)].join(",")), o.body && (typeof o.body == "string" || ArrayBuffer.isView(o.body)) && p.push(o.body), c += `[data-hash="${st(...p)}"]`
    }
    return c
}
const ft = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function ut(n) {
    const o = [];
    return {
        pattern: n === "/" ? /^\/$/ : new RegExp(`^${pt(n).map(c=>{const p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(p)return o.push({name:p[1],matcher:p[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const b=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(b)return o.push({name:b[1],matcher:b[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const E=c.split(/\[(.+?)\](?!\])/);return"/"+E.map((g,m)=>{if(m%2){if(g.startsWith("x+"))return ve(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return ve(String.fromCharCode(...g.slice(2).split("-").map(O=>parseInt(O,16))));const h=ft.exec(g);if(!h)throw new Error(`
            Invalid param: $ {
                g
            }.Params and matcher names can only have underscores and alphanumeric characters.
            `);const[,C,D,T,U]=h;return o.push({name:T,matcher:U,optional:!!C,rest:!!D,chained:D?m===1&&E[0]==="":!1}),D?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return ve(g)}).join("")}).join("")}/?$`),
        params: o
    }
}

function dt(n) {
    return !/^\([^)]+\)$/.test(n)
}

function pt(n) {
    return n.slice(1).split("/").filter(dt)
}

function ht(n, o, l) {
    const c = {},
        p = n.slice(1),
        b = p.filter(w => w !== void 0);
    let E = 0;
    for (let w = 0; w < o.length; w += 1) {
        const g = o[w];
        let m = p[w - E];
        if (g.chained && g.rest && E && (m = p.slice(w - E, w + 1).filter(h => h).join("/"), E = 0), m === void 0) {
            g.rest && (c[g.name] = "");
            continue
        }
        if (!g.matcher || l[g.matcher](m)) {
            c[g.name] = m;
            const h = o[w + 1],
                C = p[w + 1];
            h && !h.rest && h.optional && C && g.chained && (E = 0), !h && !C && Object.keys(c).length === b.length && (E = 0);
            continue
        }
        if (g.optional && g.chained) {
            E++;
            continue
        }
        return
    }
    if (!E) return c
}

function ve(n) {
    return n.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function gt({
    nodes: n,
    server_loads: o,
    dictionary: l,
    matchers: c
}) {
    const p = new Set(o);
    return Object.entries(l).map(([w, [g, m, h]]) => {
        const {
            pattern: C,
            params: D
        } = ut(w), T = {
            id: w,
            exec: U => {
                const O = C.exec(U);
                if (O) return ht(O, D, c)
            },
            errors: [1, ...h || []].map(U => n[U]),
            layouts: [0, ...m || []].map(E),
            leaf: b(g)
        };
        return T.errors.length = T.layouts.length = Math.max(T.errors.length, T.layouts.length), T
    });

    function b(w) {
        const g = w < 0;
        return g && (w = ~w), [g, n[w]]
    }

    function E(w) {
        return w === void 0 ? w : [p.has(w), n[w]]
    }
}

function We(n) {
    try {
        return JSON.parse(sessionStorage[n])
    } catch {}
}

function Me(n, o) {
    const l = JSON.stringify(o);
    try {
        sessionStorage[n] = l
    } catch {}
}

function mt(n) {
    return n.filter(o => o != null)
}
const Be = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...Be];
const _t = new Set([...Be]);
[..._t];
async function wt(n) {
    var o;
    for (const l in n)
        if (typeof((o = n[l]) == null ? void 0 : o.then) == "function") return Object.fromEntries(await Promise.all(Object.entries(n).map(async ([c, p]) => [c, await p])));
    return n
}
class ne {
    constructor(o, l) {
        this.status = o, typeof l == "string" ? this.body = {
            message: l
        } : l ? this.body = l : this.body = {
            message: `Error: ${o}`
        }
    }
    toString() {
        return JSON.stringify(this.body)
    }
}
class Ve {
    constructor(o, l) {
        this.status = o, this.location = l
    }
}
const yt = "x-sveltekit-invalidated",
    vt = "x-sveltekit-trailing-slash",
    W = We(Je) ?? {},
    ee = We(Ke) ?? {};

function be(n) {
    W[n] = te()
}

function bt(n, o) {
    var je;
    const l = gt(n),
        c = n.nodes[0],
        p = n.nodes[1];
    c(), p();
    const b = document.documentElement,
        E = [],
        w = [];
    let g = null;
    const m = {
        before_navigate: [],
        on_navigate: [],
        after_navigate: []
    };
    let h = {
            branch: [],
            error: null,
            url: null
        },
        C = !1,
        D = !1,
        T = !0,
        U = !1,
        O = !1,
        H = !1,
        J = !1,
        M, j = (je = history.state) == null ? void 0 : je[q];
    j || (j = Date.now(), history.replaceState({
        ...history.state,
        [q]: j
    }, "", location.href));
    const fe = W[j];
    fe && (history.scrollRestoration = "manual", scrollTo(fe.x, fe.y));
    let V, B, Y;
    async function ke() {
        if (Y = Y || Promise.resolve(), await Y, !Y) return;
        Y = null;
        const e = new URL(location.href),
            i = Q(e, !0);
        g = null;
        const t = B = {},
            r = i && await pe(i);
        if (t === B && r) {
            if (r.type === "redirect") return re(new URL(r.location, e).href, {}, 1, t);
            r.props.page !== void 0 && (V = r.props.page), M.$set(r.props)
        }
    }

    function xe(e) {
        w.some(i => i == null ? void 0 : i.snapshot) && (ee[e] = w.map(i => {
            var t;
            return (t = i == null ? void 0 : i.snapshot) == null ? void 0 : t.capture()
        }))
    }

    function Re(e) {
        var i;
        (i = ee[e]) == null || i.forEach((t, r) => {
            var a, s;
            (s = (a = w[r]) == null ? void 0 : a.snapshot) == null || s.restore(t)
        })
    }

    function Le() {
        be(j), Me(Je, W), xe(j), Me(Ke, ee)
    }
    async function re(e, {
        noScroll: i = !1,
        replaceState: t = !1,
        keepFocus: r = !1,
        state: a = {},
        invalidateAll: s = !1
    }, f, y) {
        return typeof e == "string" && (e = new URL(e, De(document))), ce({
            url: e,
            scroll: i ? te() : null,
            keepfocus: r,
            redirect_count: f,
            details: {
                state: a,
                replaceState: t
            },
            nav_token: y,
            accepted: () => {
                s && (J = !0)
            },
            blocked: () => {},
            type: "goto"
        })
    }
    async function Ae(e) {
        return g = {
            id: e.id,
            promise: pe(e).then(i => (i.type === "loaded" && i.state.error && (g = null), i))
        }, g.promise
    }
    async function oe(...e) {
        const t = l.filter(r => e.some(a => r.exec(a))).map(r => Promise.all([...r.layouts, r.leaf].map(a => a == null ? void 0 : a[1]())));
        await Promise.all(t)
    }

    function Pe(e) {
        var r;
        h = e.state;
        const i = document.querySelector("style[data-sveltekit]");
        i && i.remove(), V = e.props.page, M = new n.root({
            target: o,
            props: {
                ...e.props,
                stores: F,
                components: w
            },
            hydrate: !0
        }), Re(j);
        const t = {
            from: null,
            to: {
                params: h.params,
                route: {
                    id: ((r = h.route) == null ? void 0 : r.id) ?? null
                },
                url: new URL(location.href)
            },
            willUnload: !1,
            type: "enter",
            complete: Promise.resolve()
        };
        m.after_navigate.forEach(a => a(t)), D = !0
    }
    async function X({
        url: e,
        params: i,
        branch: t,
        status: r,
        error: a,
        route: s,
        form: f
    }) {
        let y = "never";
        for (const d of t)(d == null ? void 0 : d.slash) !== void 0 && (y = d.slash);
        e.pathname = Ze(e.pathname, y), e.search = e.search;
        const v = {
            type: "loaded",
            state: {
                url: e,
                params: i,
                branch: t,
                error: a,
                route: s
            },
            props: {
                constructors: mt(t).map(d => d.node.component)
            }
        };
        f !== void 0 && (v.props.form = f);
        let _ = {},
            L = !V,
            x = 0;
        for (let d = 0; d < Math.max(t.length, h.branch.length); d += 1) {
            const u = t[d],
                P = h.branch[d];
            (u == null ? void 0 : u.data) !== (P == null ? void 0 : P.data) && (L = !0), u && (_ = {
                ..._,
                ...u.data
            }, L && (v.props[`data_${x}`] = _), x += 1)
        }
        return (!h.url || e.href !== h.url.href || h.error !== a || f !== void 0 && f !== V.form || L) && (v.props.page = {
            error: a,
            params: i,
            route: {
                id: (s == null ? void 0 : s.id) ?? null
            },
            status: r,
            url: new URL(e),
            form: f ?? null,
            data: L ? _ : V.data
        }), v
    }
    async function ue({
        loader: e,
        parent: i,
        url: t,
        params: r,
        route: a,
        server_data_node: s
    }) {
        var _, L, x;
        let f = null;
        const y = {
                dependencies: new Set,
                params: new Set,
                parent: !1,
                route: !1,
                url: !1
            },
            v = await e();
        if ((_ = v.universal) != null && _.load) {
            let A = function(...u) {
                for (const P of u) {
                    const {
                        href: I
                    } = new URL(P, t);
                    y.dependencies.add(I)
                }
            };
            const d = {
                route: new Proxy(a, {
                    get: (u, P) => (y.route = !0, u[P])
                }),
                params: new Proxy(r, {
                    get: (u, P) => (y.params.add(P), u[P])
                }),
                data: (s == null ? void 0 : s.data) ?? null,
                url: at(t, () => {
                    y.url = !0
                }),
                async fetch(u, P) {
                    let I;
                    u instanceof Request ? (I = u.url, P = {
                        body: u.method === "GET" || u.method === "HEAD" ? void 0 : await u.blob(),
                        cache: u.cache,
                        credentials: u.credentials,
                        headers: u.headers,
                        integrity: u.integrity,
                        keepalive: u.keepalive,
                        method: u.method,
                        mode: u.mode,
                        redirect: u.redirect,
                        referrer: u.referrer,
                        referrerPolicy: u.referrerPolicy,
                        signal: u.signal,
                        ...P
                    }) : I = u;
                    const N = new URL(I, t);
                    return A(N.href), N.origin === t.origin && (I = N.href.slice(t.origin.length)), D ? lt(I, N.href, P) : ct(I, P)
                },
                setHeaders: () => {},
                depends: A,
                parent() {
                    return y.parent = !0, i()
                }
            };
            f = await v.universal.load.call(null, d) ?? null, f = f ? await wt(f) : null
        }
        return {
            node: v,
            loader: e,
            server: s,
            universal: (L = v.universal) != null && L.load ? {
                type: "data",
                data: f,
                uses: y
            } : null,
            data: f ?? (s == null ? void 0 : s.data) ?? null,
            slash: ((x = v.universal) == null ? void 0 : x.trailingSlash) ?? (s == null ? void 0 : s.slash)
        }
    }

    function Oe(e, i, t, r, a) {
        if (J) return !0;
        if (!r) return !1;
        if (r.parent && e || r.route && i || r.url && t) return !0;
        for (const s of r.params)
            if (a[s] !== h.params[s]) return !0;
        for (const s of r.dependencies)
            if (E.some(f => f(new URL(s)))) return !0;
        return !1
    }

    function de(e, i) {
        return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? i ?? null : null
    }
    async function pe({
        id: e,
        invalidating: i,
        url: t,
        params: r,
        route: a
    }) {
        if ((g == null ? void 0 : g.id) === e) return g.promise;
        const {
            errors: s,
            layouts: f,
            leaf: y
        } = a, v = [...f, y];
        s.forEach(S => S == null ? void 0 : S().catch(() => {})), v.forEach(S => S == null ? void 0 : S[1]().catch(() => {}));
        let _ = null;
        const L = h.url ? e !== h.url.pathname + h.url.search : !1,
            x = h.route ? a.id !== h.route.id : !1;
        let A = !1;
        const d = v.map((S, R) => {
            var K;
            const k = h.branch[R],
                $ = !!(S != null && S[0]) && ((k == null ? void 0 : k.loader) !== S[1] || Oe(A, x, L, (K = k.server) == null ? void 0 : K.uses, r));
            return $ && (A = !0), $
        });
        if (d.some(Boolean)) {
            try {
                _ = await Fe(t, d)
            } catch (S) {
                return ie({
                    status: S instanceof ne ? S.status : 500,
                    error: await Z(S, {
                        url: t,
                        params: r,
                        route: {
                            id: a.id
                        }
                    }),
                    url: t,
                    route: a
                })
            }
            if (_.type === "redirect") return _
        }
        const u = _ == null ? void 0 : _.nodes;
        let P = !1;
        const I = v.map(async (S, R) => {
            var he;
            if (!S) return;
            const k = h.branch[R],
                $ = u == null ? void 0 : u[R];
            if ((!$ || $.type === "skip") && S[1] === (k == null ? void 0 : k.loader) && !Oe(P, x, L, (he = k.universal) == null ? void 0 : he.uses, r)) return k;
            if (P = !0, ($ == null ? void 0 : $.type) === "error") throw $;
            return ue({
                loader: S[1],
                url: t,
                params: r,
                route: a,
                parent: async () => {
                    var Te;
                    const Ce = {};
                    for (let ge = 0; ge < R; ge += 1) Object.assign(Ce, (Te = await I[ge]) == null ? void 0 : Te.data);
                    return Ce
                },
                server_data_node: de($ === void 0 && S[0] ? {
                    type: "skip"
                } : $ ?? null, S[0] ? k == null ? void 0 : k.server : void 0)
            })
        });
        for (const S of I) S.catch(() => {});
        const N = [];
        for (let S = 0; S < v.length; S += 1)
            if (v[S]) try {
                N.push(await I[S])
            } catch (R) {
                if (R instanceof Ve) return {
                    type: "redirect",
                    location: R.location
                };
                let k = 500,
                    $;
                if (u != null && u.includes(R)) k = R.status ?? k, $ = R.error;
                else if (R instanceof ne) k = R.status, $ = R.body;
                else {
                    if (await F.updated.check()) return await G(t);
                    $ = await Z(R, {
                        params: r,
                        url: t,
                        route: {
                            id: a.id
                        }
                    })
                }
                const K = await Ue(S, N, s);
                return K ? await X({
                    url: t,
                    params: r,
                    branch: N.slice(0, K.idx).concat(K.node),
                    status: k,
                    error: $,
                    route: a
                }) : await $e(t, {
                    id: a.id
                }, $, k)
            } else N.push(void 0);
        return await X({
            url: t,
            params: r,
            branch: N,
            status: 200,
            error: null,
            route: a,
            form: i ? void 0 : null
        })
    }
    async function Ue(e, i, t) {
        for (; e--;)
            if (t[e]) {
                let r = e;
                for (; !i[r];) r -= 1;
                try {
                    return {
                        idx: r + 1,
                        node: {
                            node: await t[e](),
                            loader: t[e],
                            data: {},
                            server: null,
                            universal: null
                        }
                    }
                } catch {
                    continue
                }
            }
    }
    async function ie({
        status: e,
        error: i,
        url: t,
        route: r
    }) {
        const a = {};
        let s = null;
        if (n.server_loads[0] === 0) try {
            const _ = await Fe(t, [!0]);
            if (_.type !== "data" || _.nodes[0] && _.nodes[0].type !== "data") throw 0;
            s = _.nodes[0] ?? null
        } catch {
            (t.origin !== location.origin || t.pathname !== location.pathname || C) && await G(t)
        }
        const y = await ue({
                loader: c,
                url: t,
                params: a,
                route: r,
                parent: () => Promise.resolve({}),
                server_data_node: de(s)
            }),
            v = {
                node: await p(),
                loader: p,
                universal: null,
                server: null,
                data: null
            };
        return await X({
            url: t,
            params: a,
            branch: [y, v],
            status: e,
            error: i,
            route: null
        })
    }

    function Q(e, i) {
        if (ye(e, z)) return;
        const t = se(e);
        for (const r of l) {
            const a = r.exec(t);
            if (a) return {
                id: e.pathname + e.search,
                invalidating: i,
                route: r,
                params: tt(a),
                url: e
            }
        }
    }

    function se(e) {
        return et(e.pathname.slice(z.length) || "/")
    }

    function Ie({
        url: e,
        type: i,
        intent: t,
        delta: r
    }) {
        let a = !1;
        const s = He(h, t, e, i);
        r !== void 0 && (s.navigation.delta = r);
        const f = {
            ...s.navigation,
            cancel: () => {
                a = !0, s.reject(new Error("navigation was cancelled"))
            }
        };
        return O || m.before_navigate.forEach(y => y(f)), a ? null : s
    }
    async function ce({
        url: e,
        scroll: i,
        keepfocus: t,
        redirect_count: r,
        details: a,
        type: s,
        delta: f,
        nav_token: y = {},
        accepted: v,
        blocked: _
    }) {
        var I, N, S;
        const L = Q(e, !1),
            x = Ie({
                url: e,
                type: s,
                delta: f,
                intent: L
            });
        if (!x) {
            _();
            return
        }
        const A = j;
        v(), O = !0, D && F.navigating.set(x.navigation), B = y;
        let d = L && await pe(L);
        if (!d) {
            if (ye(e, z)) return await G(e);
            d = await $e(e, {
                id: null
            }, await Z(new Error(`Not found: ${e.pathname}`), {
                url: e,
                params: {},
                route: {
                    id: null
                }
            }), 404)
        }
        if (e = (L == null ? void 0 : L.url) || e, B !== y) return x.reject(new Error("navigation was aborted")), !1;
        if (d.type === "redirect")
            if (r >= 20) d = await ie({
                status: 500,
                error: await Z(new Error("Redirect loop"), {
                    url: e,
                    params: {},
                    route: {
                        id: null
                    }
                }),
                url: e,
                route: {
                    id: null
                }
            });
            else return re(new URL(d.location, e).href, {}, r + 1, y), !1;
        else((I = d.props.page) == null ? void 0 : I.status) >= 400 && await F.updated.check() && await G(e);
        if (E.length = 0, J = !1, U = !0, be(A), xe(A), (N = d.props.page) != null && N.url && d.props.page.url.pathname !== e.pathname && (e.pathname = (S = d.props.page) == null ? void 0 : S.url.pathname), a) {
            const R = a.replaceState ? 0 : 1;
            if (a.state[q] = j += R, history[a.replaceState ? "replaceState" : "pushState"](a.state, "", e), !a.replaceState) {
                let k = j + 1;
                for (; ee[k] || W[k];) delete ee[k], delete W[k], k += 1
            }
        }
        if (g = null, D) {
            h = d.state, d.props.page && (d.props.page.url = e);
            const R = (await Promise.all(m.on_navigate.map(k => k(x.navigation)))).filter(k => typeof k == "function");
            if (R.length > 0) {
                let k = function() {
                    m.after_navigate = m.after_navigate.filter($ => !R.includes($))
                };
                R.push(k), m.after_navigate.push(...R)
            }
            M.$set(d.props)
        } else Pe(d);
        const {
            activeElement: u
        } = document;
        if (await _e(), T) {
            const R = e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
            i ? scrollTo(i.x, i.y) : R ? R.scrollIntoView() : scrollTo(0, 0)
        }
        const P = document.activeElement !== u && document.activeElement !== document.body;
        !t && !P && Se(), T = !0, d.props.page && (V = d.props.page), O = !1, s === "popstate" && Re(j), x.fulfil(void 0), m.after_navigate.forEach(R => R(x.navigation)), F.navigating.set(null), U = !1
    }
    async function $e(e, i, t, r) {
        return e.origin === location.origin && e.pathname === location.pathname && !C ? await ie({
            status: r,
            error: t,
            url: e,
            route: i
        }) : await G(e)
    }

    function G(e) {
        return location.href = e.href, new Promise(() => {})
    }

    function Ye() {
        let e;
        b.addEventListener("mousemove", s => {
            const f = s.target;
            clearTimeout(e), e = setTimeout(() => {
                r(f, 2)
            }, 20)
        });

        function i(s) {
            r(s.composedPath()[0], 1)
        }
        b.addEventListener("mousedown", i), b.addEventListener("touchstart", i, {
            passive: !0
        });
        const t = new IntersectionObserver(s => {
            for (const f of s) f.isIntersecting && (oe(se(new URL(f.target.href))), t.unobserve(f.target))
        }, {
            threshold: 0
        });

        function r(s, f) {
            const y = Ne(s, b);
            if (!y) return;
            const {
                url: v,
                external: _,
                download: L
            } = we(y, z);
            if (_ || L) return;
            const x = le(y);
            if (!x.reload)
                if (f <= x.preload_data) {
                    const A = Q(v, !1);
                    A && Ae(A)
                } else f <= x.preload_code && oe(se(v))
        }

        function a() {
            t.disconnect();
            for (const s of b.querySelectorAll("a")) {
                const {
                    url: f,
                    external: y,
                    download: v
                } = we(s, z);
                if (y || v) continue;
                const _ = le(s);
                _.reload || (_.preload_code === qe.viewport && t.observe(s), _.preload_code === qe.eager && oe(se(f)))
            }
        }
        m.after_navigate.push(a), a()
    }

    function Z(e, i) {
        return e instanceof ne ? e.body : n.hooks.handleError({
            error: e,
            event: i
        }) ?? {
            message: i.route.id != null ? "Internal Error" : "Not Found"
        }
    }
    return {
        after_navigate: e => {
            me(() => (m.after_navigate.push(e), () => {
                const i = m.after_navigate.indexOf(e);
                m.after_navigate.splice(i, 1)
            }))
        },
        before_navigate: e => {
            me(() => (m.before_navigate.push(e), () => {
                const i = m.before_navigate.indexOf(e);
                m.before_navigate.splice(i, 1)
            }))
        },
        on_navigate: e => {
            me(() => (m.on_navigate.push(e), () => {
                const i = m.on_navigate.indexOf(e);
                m.on_navigate.splice(i, 1)
            }))
        },
        disable_scroll_handling: () => {
            (U || !D) && (T = !1)
        },
        goto: (e, i = {}) => re(e, i, 0),
        invalidate: e => {
            if (typeof e == "function") E.push(e);
            else {
                const {
                    href: i
                } = new URL(e, location.href);
                E.push(t => t.href === i)
            }
            return ke()
        },
        invalidate_all: () => (J = !0, ke()),
        preload_data: async e => {
            const i = new URL(e, De(document)),
                t = Q(i, !1);
            if (!t) throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);
            await Ae(t)
        },
        preload_code: oe,
        apply_action: async e => {
            if (e.type === "error") {
                const i = new URL(location.href),
                    {
                        branch: t,
                        route: r
                    } = h;
                if (!r) return;
                const a = await Ue(h.branch.length, t, r.errors);
                if (a) {
                    const s = await X({
                        url: i,
                        params: h.params,
                        branch: t.slice(0, a.idx).concat(a.node),
                        status: e.status ?? 500,
                        error: e.error,
                        route: r
                    });
                    h = s.state, M.$set(s.props), _e().then(Se)
                }
            } else e.type === "redirect" ? re(e.location, {
                invalidateAll: !0
            }, 0) : (M.$set({
                form: null,
                page: {
                    ...V,
                    form: e.data,
                    status: e.status
                }
            }), await _e(), M.$set({
                form: e.data
            }), e.type === "success" && Se())
        },
        _start_router: () => {
            var i;
            history.scrollRestoration = "manual", addEventListener("beforeunload", t => {
                let r = !1;
                if (Le(), !O) {
                    const a = He(h, void 0, null, "leave"),
                        s = {
                            ...a.navigation,
                            cancel: () => {
                                r = !0, a.reject(new Error("navigation was cancelled"))
                            }
                        };
                    m.before_navigate.forEach(f => f(s))
                }
                r ? (t.preventDefault(), t.returnValue = "") : history.scrollRestoration = "auto"
            }), addEventListener("visibilitychange", () => {
                document.visibilityState === "hidden" && Le()
            }), (i = navigator.connection) != null && i.saveData || Ye(), b.addEventListener("click", t => {
                var A;
                if (t.button || t.which !== 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.defaultPrevented) return;
                const r = Ne(t.composedPath()[0], b);
                if (!r) return;
                const {
                    url: a,
                    external: s,
                    target: f,
                    download: y
                } = we(r, z);
                if (!a) return;
                if (f === "_parent" || f === "_top") {
                    if (window.parent !== window) return
                } else if (f && f !== "_self") return;
                const v = le(r);
                if (!(r instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || y) return;
                if (s || v.reload) {
                    Ie({
                        url: a,
                        type: "link"
                    }) ? O = !0 : t.preventDefault();
                    return
                }
                const [L, x] = a.href.split("#");
                if (x !== void 0 && L === location.href.split("#")[0]) {
                    if (h.url.hash === a.hash) {
                        t.preventDefault(), (A = r.ownerDocument.getElementById(x)) == null || A.scrollIntoView();
                        return
                    }
                    if (H = !0, be(j), e(a), !v.replace_state) return;
                    H = !1, t.preventDefault()
                }
                ce({
                    url: a,
                    scroll: v.noscroll ? te() : null,
                    keepfocus: v.keep_focus ?? !1,
                    redirect_count: 0,
                    details: {
                        state: {},
                        replaceState: v.replace_state ?? a.href === location.href
                    },
                    accepted: () => t.preventDefault(),
                    blocked: () => t.preventDefault(),
                    type: "link"
                })
            }), b.addEventListener("submit", t => {
                if (t.defaultPrevented) return;
                const r = HTMLFormElement.prototype.cloneNode.call(t.target),
                    a = t.submitter;
                if (((a == null ? void 0 : a.formMethod) || r.method) !== "get") return;
                const f = new URL((a == null ? void 0 : a.hasAttribute("formaction")) && (a == null ? void 0 : a.formAction) || r.action);
                if (ye(f, z)) return;
                const y = t.target,
                    {
                        keep_focus: v,
                        noscroll: _,
                        reload: L,
                        replace_state: x
                    } = le(y);
                if (L) return;
                t.preventDefault(), t.stopPropagation();
                const A = new FormData(y),
                    d = a == null ? void 0 : a.getAttribute("name");
                d && A.append(d, (a == null ? void 0 : a.getAttribute("value")) ?? ""), f.search = new URLSearchParams(A).toString(), ce({
                    url: f,
                    scroll: _ ? te() : null,
                    keepfocus: v ?? !1,
                    redirect_count: 0,
                    details: {
                        state: {},
                        replaceState: x ?? f.href === location.href
                    },
                    nav_token: {},
                    accepted: () => {},
                    blocked: () => {},
                    type: "form"
                })
            }), addEventListener("popstate", async t => {
                var r;
                if (B = {}, (r = t.state) != null && r[q]) {
                    if (t.state[q] === j) return;
                    const a = W[t.state[q]],
                        s = new URL(location.href);
                    if (h.url.href.split("#")[0] === location.href.split("#")[0]) {
                        e(s), W[j] = te(), j = t.state[q], scrollTo(a.x, a.y);
                        return
                    }
                    const f = t.state[q] - j;
                    await ce({
                        url: s,
                        scroll: a,
                        keepfocus: !1,
                        redirect_count: 0,
                        details: null,
                        accepted: () => {
                            j = t.state[q]
                        },
                        blocked: () => {
                            history.go(-f)
                        },
                        type: "popstate",
                        delta: f,
                        nav_token: B
                    })
                } else if (!H) {
                    const a = new URL(location.href);
                    e(a)
                }
            }), addEventListener("hashchange", () => {
                H && (H = !1, history.replaceState({
                    ...history.state,
                    [q]: ++j
                }, "", location.href))
            });
            for (const t of document.querySelectorAll("link")) t.rel === "icon" && (t.href = t.href);
            addEventListener("pageshow", t => {
                t.persisted && F.navigating.set(null)
            });

            function e(t) {
                h.url = t, F.page.set({
                    ...V,
                    url: t
                }), F.page.notify()
            }
        },
        _hydrate: async ({
            status: e = 200,
            error: i,
            node_ids: t,
            params: r,
            route: a,
            data: s,
            form: f
        }) => {
            C = !0;
            const y = new URL(location.href);
            ({
                params: r = {},
                route: a = {
                    id: null
                }
            } = Q(y, !1) || {});
            let v;
            try {
                const _ = t.map(async (A, d) => {
                        const u = s[d];
                        return u != null && u.uses && (u.uses = Ge(u.uses)), ue({
                            loader: n.nodes[A],
                            url: y,
                            params: r,
                            route: a,
                            parent: async () => {
                                const P = {};
                                for (let I = 0; I < d; I += 1) Object.assign(P, (await _[I]).data);
                                return P
                            },
                            server_data_node: de(u)
                        })
                    }),
                    L = await Promise.all(_),
                    x = l.find(({
                        id: A
                    }) => A === a.id);
                if (x) {
                    const A = x.layouts;
                    for (let d = 0; d < A.length; d++) A[d] || L.splice(d, 0, void 0)
                }
                v = await X({
                    url: y,
                    params: r,
                    branch: L,
                    status: e,
                    error: i,
                    form: f,
                    route: x ?? null
                })
            } catch (_) {
                if (_ instanceof Ve) {
                    await G(new URL(_.location, location.href));
                    return
                }
                v = await ie({
                    status: _ instanceof ne ? _.status : 500,
                    error: await Z(_, {
                        url: y,
                        params: r,
                        route: a
                    }),
                    url: y,
                    route: a
                })
            }
            Pe(v)
        }
    }
}
async function Fe(n, o) {
    const l = new URL(n);
    l.pathname = it(n.pathname), n.pathname.endsWith("/") && l.searchParams.append(vt, "1"), l.searchParams.append(yt, o.map(p => p ? "1" : "0").join(""));
    const c = await ze(l.href);
    if (!c.ok) throw new ne(c.status, await c.json());
    return new Promise(async p => {
        var h;
        const b = new Map,
            E = c.body.getReader(),
            w = new TextDecoder;

        function g(C) {
            return Qe(C, {
                Promise: D => new Promise((T, U) => {
                    b.set(D, {
                        fulfil: T,
                        reject: U
                    })
                })
            })
        }
        let m = "";
        for (;;) {
            const {
                done: C,
                value: D
            } = await E.read();
            if (C && !m) break;
            for (m += !D && m ? `
` : w.decode(D);;) {
                const T = m.indexOf(`
`);
                if (T === -1) break;
                const U = JSON.parse(m.slice(0, T));
                if (m = m.slice(T + 1), U.type === "redirect") return p(U);
                if (U.type === "data")(h = U.nodes) == null || h.forEach(O => {
                    (O == null ? void 0 : O.type) === "data" && (O.uses = Ge(O.uses), O.data = g(O.data))
                }), p(U);
                else if (U.type === "chunk") {
                    const {
                        id: O,
                        data: H,
                        error: J
                    } = U, M = b.get(O);
                    b.delete(O), J ? M.reject(g(J)) : M.fulfil(g(H))
                }
            }
        }
    })
}

function Ge(n) {
    return {
        dependencies: new Set((n == null ? void 0 : n.dependencies) ?? []),
        params: new Set((n == null ? void 0 : n.params) ?? []),
        parent: !!(n != null && n.parent),
        route: !!(n != null && n.route),
        url: !!(n != null && n.url)
    }
}

function Se() {
    const n = document.querySelector("[autofocus]");
    if (n) n.focus();
    else {
        const o = document.body,
            l = o.getAttribute("tabindex");
        o.tabIndex = -1, o.focus({
            preventScroll: !0,
            focusVisible: !1
        }), l !== null ? o.setAttribute("tabindex", l) : o.removeAttribute("tabindex");
        const c = getSelection();
        if (c && c.type !== "None") {
            const p = [];
            for (let b = 0; b < c.rangeCount; b += 1) p.push(c.getRangeAt(b));
            setTimeout(() => {
                if (c.rangeCount === p.length) {
                    for (let b = 0; b < c.rangeCount; b += 1) {
                        const E = p[b],
                            w = c.getRangeAt(b);
                        if (E.commonAncestorContainer !== w.commonAncestorContainer || E.startContainer !== w.startContainer || E.endContainer !== w.endContainer || E.startOffset !== w.startOffset || E.endOffset !== w.endOffset) return
                    }
                    c.removeAllRanges()
                }
            })
        }
    }
}

function He(n, o, l, c) {
    var g, m;
    let p, b;
    const E = new Promise((h, C) => {
        p = h, b = C
    });
    return E.catch(() => {}), {
        navigation: {
            from: {
                params: n.params,
                route: {
                    id: ((g = n.route) == null ? void 0 : g.id) ?? null
                },
                url: n.url
            },
            to: l && {
                params: (o == null ? void 0 : o.params) ?? null,
                route: {
                    id: ((m = o == null ? void 0 : o.route) == null ? void 0 : m.id) ?? null
                },
                url: l
            },
            willUnload: !o,
            type: c,
            complete: E
        },
        fulfil: p,
        reject: b
    }
}
async function xt(n, o, l) {
    const c = bt(n, o);
    Xe({
        client: c
    }), l ? await c._hydrate(l) : c.goto(location.href, {
        replaceState: !0
    }), c._start_router()
}
export {
    xt as start
};