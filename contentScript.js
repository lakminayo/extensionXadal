!(function (e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var r = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var r in e)
                    n.d(
                        i,
                        r,
                        function (t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return i;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 8));
})([
    function (e, t, n) {
        var i;
        !(function (t, n) {
            "use strict";
            "object" == typeof e.exports
                ? (e.exports = t.document
                      ? n(t, !0)
                      : function (e) {
                            if (e.document) return n(e);
                            throw new Error("jQuery requires a window with a document");
                        })
                : n(t);
        })("undefined" != typeof window ? window : this, function (n, r) {
            "use strict";
            function o(e) {
                return "function" == typeof e && "number" != typeof e.nodeType;
            }
            function a(e) {
                return null != e && e === e.window;
            }
            var s = [],
                c = n.document,
                l = Object.getPrototypeOf,
                u = s.slice,
                d = s.concat,
                p = s.push,
                f = s.indexOf,
                h = {},
                m = h.toString,
                g = h.hasOwnProperty,
                v = g.toString,
                y = v.call(Object),
                b = {},
                x = { type: !0, src: !0, noModule: !0 };
            function w(e, t, n) {
                var i,
                    r = (t = t || c).createElement("script");
                if (((r.text = e), n)) for (i in x) n[i] && (r[i] = n[i]);
                t.head.appendChild(r).parentNode.removeChild(r);
            }
            function T(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[m.call(e)] || "object" : typeof e;
            }
            var k = function (e, t) {
                    return new k.fn.init(e, t);
                },
                N = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function P(e) {
                var t = !!e && "length" in e && e.length,
                    n = T(e);
                return !o(e) && !a(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
            }
            function C(e, t, n) {
                for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (r && k(e).is(n)) break;
                        i.push(e);
                    }
                return i;
            }
            function S(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n;
            }
            (k.fn = k.prototype = {
                jquery: "3.3.1",
                constructor: k,
                length: 0,
                toArray: function () {
                    return u.call(this);
                },
                get: function (e) {
                    return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function (e) {
                    return ((e = k.merge(this.constructor(), e)).prevObject = this), e;
                },
                each: function (e) {
                    return k.each(this, e);
                },
                map: function (e) {
                    return this.pushStack(
                        k.map(this, function (t, n) {
                            return e.call(t, n, t);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(u.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                eq: function (e) {
                    var t = this.length;
                    e = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= e && e < t ? [this[e]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: p,
                sort: s.sort,
                splice: s.splice,
            }),
                (k.extend = k.fn.extend = function () {
                    var e,
                        t,
                        n,
                        i,
                        r,
                        a = arguments[0] || {},
                        s = 1,
                        c = arguments.length,
                        l = !1;
                    for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || o(a) || (a = {}), s === c && ((a = this), s--); s < c; s++)
                        if (null != (e = arguments[s]))
                            for (t in e)
                                (r = a[t]),
                                    a !== (n = e[t]) &&
                                        (l && n && (k.isPlainObject(n) || (i = Array.isArray(n)))
                                            ? ((r = i ? ((i = !1), r && Array.isArray(r) ? r : []) : r && k.isPlainObject(r) ? r : {}), (a[t] = k.extend(l, r, n)))
                                            : void 0 !== n && (a[t] = n));
                    return a;
                }),
                k.extend({
                    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e);
                    },
                    noop: function () {},
                    isPlainObject: function (e) {
                        return !(!e || "[object Object]" !== m.call(e) || ((e = l(e)) && ("function" != typeof (e = g.call(e, "constructor") && e.constructor) || v.call(e) !== y)));
                    },
                    isEmptyObject: function (e) {
                        for (var t in e) return !1;
                        return !0;
                    },
                    globalEval: function (e) {
                        w(e);
                    },
                    each: function (e, t) {
                        var n,
                            i = 0;
                        if (P(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                        return e;
                    },
                    trim: function (e) {
                        return null == e ? "" : (e + "").replace(N, "");
                    },
                    makeArray: function (e, t) {
                        return (t = t || []), null != e && (P(Object(e)) ? k.merge(t, "string" == typeof e ? [e] : e) : p.call(t, e)), t;
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : f.call(t, e, n);
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                        return (e.length = r), e;
                    },
                    grep: function (e, t, n) {
                        for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) != a && i.push(e[r]);
                        return i;
                    },
                    map: function (e, t, n) {
                        var i,
                            r,
                            o = 0,
                            a = [];
                        if (P(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
                        else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                        return d.apply([], a);
                    },
                    guid: 1,
                    support: b,
                }),
                "function" == typeof Symbol && (k.fn[Symbol.iterator] = s[Symbol.iterator]),
                k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    h["[object " + t + "]"] = t.toLowerCase();
                });
            s = (function (e) {
                function t(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
                }
                function n(e, t) {
                    return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                }
                function i() {
                    m();
                }
                var r,
                    o,
                    a,
                    s,
                    c,
                    l,
                    u,
                    d,
                    p,
                    f,
                    h,
                    m,
                    g,
                    v,
                    y,
                    b,
                    x,
                    w,
                    T,
                    k = "sizzle" + +new Date(),
                    N = e.document,
                    P = 0,
                    C = 0,
                    S = ae(),
                    A = ae(),
                    D = ae(),
                    I = function (e, t) {
                        return e === t && (h = !0), 0;
                    },
                    E = {}.hasOwnProperty,
                    _ = [],
                    j = _.pop,
                    L = _.push,
                    O = _.push,
                    M = _.slice,
                    q = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                        return -1;
                    },
                    $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    R = "[\\x20\\t\\r\\n\\f]",
                    B = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    H = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]",
                    W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                    V = new RegExp(R + "+", "g"),
                    J = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                    F = new RegExp("^" + R + "*," + R + "*"),
                    U = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                    z = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
                    X = new RegExp(W),
                    Q = new RegExp("^" + B + "$"),
                    K = {
                        ID: new RegExp("^#(" + B + ")"),
                        CLASS: new RegExp("^\\.(" + B + ")"),
                        TAG: new RegExp("^(" + B + "|[*])"),
                        ATTR: new RegExp("^" + H),
                        PSEUDO: new RegExp("^" + W),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + $ + ")$", "i"),
                        needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i"),
                    },
                    G = /^(?:input|select|textarea|button)$/i,
                    Y = /^h\d$/i,
                    Z = /^[^{]+\{\s*\[native \w/,
                    ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    te = /[+~]/,
                    ne = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
                    ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    re = ge(
                        function (e) {
                            return !0 === e.disabled && ("form" in e || "label" in e);
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    O.apply((_ = M.call(N.childNodes)), N.childNodes), _[N.childNodes.length].nodeType;
                } catch (e) {
                    O = {
                        apply: _.length
                            ? function (e, t) {
                                  L.apply(e, M.call(t));
                              }
                            : function (e, t) {
                                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                                  e.length = n - 1;
                              },
                    };
                }
                function oe(e, t, i, r) {
                    var a,
                        s,
                        c,
                        u,
                        p,
                        f,
                        h,
                        v = t && t.ownerDocument,
                        x = t ? t.nodeType : 9;
                    if (((i = i || []), "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))) return i;
                    if (!r && ((t ? t.ownerDocument || t : N) !== g && m(t), (t = t || g), y)) {
                        if (11 !== x && (p = ee.exec(e)))
                            if ((a = p[1])) {
                                if (9 === x) {
                                    if (!(c = t.getElementById(a))) return i;
                                    if (c.id === a) return i.push(c), i;
                                } else if (v && (c = v.getElementById(a)) && T(t, c) && c.id === a) return i.push(c), i;
                            } else {
                                if (p[2]) return O.apply(i, t.getElementsByTagName(e)), i;
                                if ((a = p[3]) && o.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(a)), i;
                            }
                        if (o.qsa && !D[e + " "] && (!b || !b.test(e))) {
                            if (1 !== x) (v = t), (h = e);
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((u = t.getAttribute("id")) ? (u = u.replace(ie, n)) : t.setAttribute("id", (u = k)), s = (f = l(e)).length; s--; ) f[s] = "#" + u + " " + me(f[s]);
                                (h = f.join(",")), (v = (te.test(e) && fe(t.parentNode)) || t);
                            }
                            if (h)
                                try {
                                    return O.apply(i, v.querySelectorAll(h)), i;
                                } catch (e) {
                                } finally {
                                    u === k && t.removeAttribute("id");
                                }
                        }
                    }
                    return d(e.replace(J, "$1"), t, i, r);
                }
                function ae() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > a.cacheLength && delete t[e.shift()], (t[n + " "] = i);
                    };
                }
                function se(e) {
                    return (e[k] = !0), e;
                }
                function ce(e) {
                    var t = g.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (e) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t);
                    }
                }
                function le(e, t) {
                    for (var n = e.split("|"), i = n.length; i--; ) a.attrHandle[n[i]] = t;
                }
                function ue(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function de(e) {
                    return function (t) {
                        return "form" in t
                            ? t.parentNode && !1 === t.disabled
                                ? "label" in t
                                    ? "label" in t.parentNode
                                        ? t.parentNode.disabled === e
                                        : t.disabled === e
                                    : t.isDisabled === e || (t.isDisabled !== !e && re(t) === e)
                                : t.disabled === e
                            : "label" in t && t.disabled === e;
                    };
                }
                function pe(e) {
                    return se(function (t) {
                        return (
                            (t = +t),
                            se(function (n, i) {
                                for (var r, o = e([], n.length, t), a = o.length; a--; ) n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
                            })
                        );
                    });
                }
                function fe(e) {
                    return e && void 0 !== e.getElementsByTagName && e;
                }
                for (r in ((o = oe.support = {}),
                (c = oe.isXML = function (e) {
                    return !!(e = e && (e.ownerDocument || e).documentElement) && "HTML" !== e.nodeName;
                }),
                (m = oe.setDocument = function (e) {
                    return (
                        (e = e ? e.ownerDocument || e : N) !== g &&
                            9 === e.nodeType &&
                            e.documentElement &&
                            ((v = (g = e).documentElement),
                            (y = !c(g)),
                            N !== g && (e = g.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", i, !1) : e.attachEvent && e.attachEvent("onunload", i)),
                            (o.attributes = ce(function (e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (o.getElementsByTagName = ce(function (e) {
                                return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length;
                            })),
                            (o.getElementsByClassName = Z.test(g.getElementsByClassName)),
                            (o.getById = ce(function (e) {
                                return (v.appendChild(e).id = k), !g.getElementsByName || !g.getElementsByName(k).length;
                            })),
                            o.getById
                                ? ((a.filter.ID = function (e) {
                                      var n = e.replace(ne, t);
                                      return function (e) {
                                          return e.getAttribute("id") === n;
                                      };
                                  }),
                                  (a.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && y) return (t = t.getElementById(e)) ? [t] : [];
                                  }))
                                : ((a.filter.ID = function (e) {
                                      var n = e.replace(ne, t);
                                      return function (e) {
                                          return (e = void 0 !== e.getAttributeNode && e.getAttributeNode("id")) && e.value === n;
                                      };
                                  }),
                                  (a.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && y) {
                                          var n,
                                              i,
                                              r,
                                              o = t.getElementById(e);
                                          if (o) {
                                              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                              for (r = t.getElementsByName(e), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                          }
                                          return [];
                                      }
                                  })),
                            (a.find.TAG = o.getElementsByTagName
                                ? function (e, t) {
                                      return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : o.qsa ? t.querySelectorAll(e) : void 0;
                                  }
                                : function (e, t) {
                                      var n,
                                          i = [],
                                          r = 0,
                                          o = t.getElementsByTagName(e);
                                      if ("*" !== e) return o;
                                      for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                                      return i;
                                  }),
                            (a.find.CLASS =
                                o.getElementsByClassName &&
                                function (e, t) {
                                    if (void 0 !== t.getElementsByClassName && y) return t.getElementsByClassName(e);
                                }),
                            (x = []),
                            (b = []),
                            (o.qsa = Z.test(g.querySelectorAll)) &&
                                (ce(function (e) {
                                    (v.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                        e.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + R + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || b.push("\\[" + R + "*(?:value|" + $ + ")"),
                                        e.querySelectorAll("[id~=" + k + "-]").length || b.push("~="),
                                        e.querySelectorAll(":checked").length || b.push(":checked"),
                                        e.querySelectorAll("a#" + k + "+*").length || b.push(".#.+[+~]");
                                }),
                                ce(function (e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = g.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length && b.push("name" + R + "*[*^$|!~]?="),
                                        2 !== e.querySelectorAll(":enabled").length && b.push(":enabled", ":disabled"),
                                        (v.appendChild(e).disabled = !0),
                                        2 !== e.querySelectorAll(":disabled").length && b.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        b.push(",.*:");
                                })),
                            (o.matchesSelector = Z.test((w = v.matches || v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector))) &&
                                ce(function (e) {
                                    (o.disconnectedMatch = w.call(e, "*")), w.call(e, "[s!='']:x"), x.push("!=", W);
                                }),
                            (b = b.length && new RegExp(b.join("|"))),
                            (x = x.length && new RegExp(x.join("|"))),
                            (e = Z.test(v.compareDocumentPosition)),
                            (T =
                                e || Z.test(v.contains)
                                    ? function (e, t) {
                                          var n = 9 === e.nodeType ? e.documentElement : e;
                                          return e === (t = t && t.parentNode) || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
                                      }
                                    : function (e, t) {
                                          if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                          return !1;
                                      }),
                            (I = e
                                ? function (e, t) {
                                      return e === t
                                          ? ((h = !0), 0)
                                          : !e.compareDocumentPosition - !t.compareDocumentPosition ||
                                                (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!o.sortDetached && t.compareDocumentPosition(e) === n)
                                                    ? e === g || (e.ownerDocument === N && T(N, e))
                                                        ? -1
                                                        : t === g || (t.ownerDocument === N && T(N, t))
                                                        ? 1
                                                        : f
                                                        ? q(f, e) - q(f, t)
                                                        : 0
                                                    : 4 & n
                                                    ? -1
                                                    : 1);
                                      var n;
                                  }
                                : function (e, t) {
                                      if (e === t) return (h = !0), 0;
                                      var n,
                                          i = 0,
                                          r = e.parentNode,
                                          o = t.parentNode,
                                          a = [e],
                                          s = [t];
                                      if (!r || !o) return e === g ? -1 : t === g ? 1 : r ? -1 : o ? 1 : f ? q(f, e) - q(f, t) : 0;
                                      if (r === o) return ue(e, t);
                                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                                      for (; a[i] === s[i]; ) i++;
                                      return i ? ue(a[i], s[i]) : a[i] === N ? -1 : s[i] === N ? 1 : 0;
                                  })),
                        g
                    );
                }),
                (oe.matches = function (e, t) {
                    return oe(e, null, null, t);
                }),
                (oe.matchesSelector = function (e, t) {
                    if (((e.ownerDocument || e) !== g && m(e), (t = t.replace(z, "='$1']")), o.matchesSelector && y && !D[t + " "] && (!x || !x.test(t)) && (!b || !b.test(t))))
                        try {
                            var n = w.call(e, t);
                            if (n || o.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                        } catch (e) {}
                    return 0 < oe(t, g, null, [e]).length;
                }),
                (oe.contains = function (e, t) {
                    return (e.ownerDocument || e) !== g && m(e), T(e, t);
                }),
                (oe.attr = function (e, t) {
                    var n;
                    return (
                        (e.ownerDocument || e) !== g && m(e),
                        void 0 !== (n = (n = a.attrHandle[t.toLowerCase()]) && E.call(a.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0)
                            ? n
                            : o.attributes || !y
                            ? e.getAttribute(t)
                            : (n = e.getAttributeNode(t)) && n.specified
                            ? n.value
                            : null
                    );
                }),
                (oe.escape = function (e) {
                    return (e + "").replace(ie, n);
                }),
                (oe.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }),
                (oe.uniqueSort = function (e) {
                    var t,
                        n = [],
                        i = 0,
                        r = 0;
                    if (((h = !o.detectDuplicates), (f = !o.sortStable && e.slice(0)), e.sort(I), h)) {
                        for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
                        for (; i--; ) e.splice(n[i], 1);
                    }
                    return (f = null), e;
                }),
                (s = oe.getText = function (e) {
                    var t,
                        n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
                        } else if (3 === r || 4 === r) return e.nodeValue;
                    } else for (; (t = e[i++]); ) n += s(t);
                    return n;
                }),
                ((a = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: se,
                    match: K,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (e) {
                            return (e[1] = e[1].replace(ne, t)), (e[3] = (e[3] || e[4] || e[5] || "").replace(ne, t)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[6] && e[2];
                            return K.CHILD.test(e[0])
                                ? null
                                : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = l(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var n = e.replace(ne, t).toLowerCase();
                            return "*" === e
                                ? function () {
                                      return !0;
                                  }
                                : function (e) {
                                      return e.nodeName && e.nodeName.toLowerCase() === n;
                                  };
                        },
                        CLASS: function (e) {
                            var t = S[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                                    S(e, function (e) {
                                        return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (e, t, n) {
                            return function (i) {
                                return null == (i = oe.attr(i, e))
                                    ? "!=" === t
                                    : !t ||
                                          ((i += ""),
                                          "=" === t
                                              ? i === n
                                              : "!=" === t
                                              ? i !== n
                                              : "^=" === t
                                              ? n && 0 === i.indexOf(n)
                                              : "*=" === t
                                              ? n && -1 < i.indexOf(n)
                                              : "$=" === t
                                              ? n && i.slice(-n.length) === n
                                              : "~=" === t
                                              ? -1 < (" " + i.replace(V, " ") + " ").indexOf(n)
                                              : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function (e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === r
                                ? function (e) {
                                      return !!e.parentNode;
                                  }
                                : function (t, n, c) {
                                      var l,
                                          u,
                                          d,
                                          p,
                                          f,
                                          h,
                                          m = o != a ? "nextSibling" : "previousSibling",
                                          g = t.parentNode,
                                          v = s && t.nodeName.toLowerCase(),
                                          y = !c && !s,
                                          b = !1;
                                      if (g) {
                                          if (o) {
                                              for (; m; ) {
                                                  for (p = t; (p = p[m]); ) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                                  h = m = "only" === e && !h && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                                              for (
                                                  b = (f = (l = (u = (d = (p = g)[k] || (p[k] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === P && l[1]) && l[2], p = f && g.childNodes[f];
                                                  (p = (++f && p && p[m]) || (b = f = 0) || h.pop());

                                              )
                                                  if (1 === p.nodeType && ++b && p === t) {
                                                      u[e] = [P, f, b];
                                                      break;
                                                  }
                                          } else if (!1 === (b = y ? (f = (l = (u = (d = (p = t)[k] || (p[k] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === P && l[1]) : b))
                                              for (
                                                  ;
                                                  (p = (++f && p && p[m]) || (b = f = 0) || h.pop()) &&
                                                  ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[k] || (p[k] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [P, b]), p !== t));

                                              );
                                          return (b -= r) === i || (b % i == 0 && 0 <= b / i);
                                      }
                                  };
                        },
                        PSEUDO: function (e, t) {
                            var n,
                                i = a.pseudos[e] || a.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return i[k]
                                ? i(t)
                                : 1 < i.length
                                ? ((n = [e, e, "", t]),
                                  a.setFilters.hasOwnProperty(e.toLowerCase())
                                      ? se(function (e, n) {
                                            for (var r, o = i(e, t), a = o.length; a--; ) e[(r = q(e, o[a]))] = !(n[r] = o[a]);
                                        })
                                      : function (e) {
                                            return i(e, 0, n);
                                        })
                                : i;
                        },
                    },
                    pseudos: {
                        not: se(function (e) {
                            var t = [],
                                n = [],
                                i = u(e.replace(J, "$1"));
                            return i[k]
                                ? se(function (e, t, n, r) {
                                      for (var o, a = i(e, null, r, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                                  })
                                : function (e, r, o) {
                                      return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                                  };
                        }),
                        has: se(function (e) {
                            return function (t) {
                                return 0 < oe(e, t).length;
                            };
                        }),
                        contains: se(function (e) {
                            return (
                                (e = e.replace(ne, t)),
                                function (t) {
                                    return -1 < (t.textContent || t.innerText || s(t)).indexOf(e);
                                }
                            );
                        }),
                        lang: se(function (e) {
                            return (
                                Q.test(e || "") || oe.error("unsupported lang: " + e),
                                (e = e.replace(ne, t).toLowerCase()),
                                function (t) {
                                    var n;
                                    do {
                                        if ((n = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function (e) {
                            return e === v;
                        },
                        focus: function (e) {
                            return e === g.activeElement && (!g.hasFocus || g.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: de(!1),
                        disabled: de(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !a.pseudos.empty(e);
                        },
                        header: function (e) {
                            return Y.test(e.nodeName);
                        },
                        input: function (e) {
                            return G.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && "button" === e.type) || "button" === t;
                        },
                        text: function (e) {
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
                        },
                        first: pe(function () {
                            return [0];
                        }),
                        last: pe(function (e, t) {
                            return [t - 1];
                        }),
                        eq: pe(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: pe(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: pe(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: pe(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
                            return e;
                        }),
                        gt: pe(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                            return e;
                        }),
                    },
                }).pseudos.nth = a.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                    a.pseudos[r] = (function (e) {
                        return function (t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e;
                        };
                    })(r);
                for (r in { submit: !0, reset: !0 })
                    a.pseudos[r] = (function (e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e;
                        };
                    })(r);
                function he() {}
                function me(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i;
                }
                function ge(e, t, n) {
                    var i = t.dir,
                        r = t.next,
                        o = r || i,
                        a = n && "parentNode" === o,
                        s = C++;
                    return t.first
                        ? function (t, n, r) {
                              for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, r);
                              return !1;
                          }
                        : function (t, n, c) {
                              var l,
                                  u,
                                  d = [P, s];
                              if (c) {
                                  for (; (t = t[i]); ) if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
                              } else
                                  for (; (t = t[i]); )
                                      if (1 === t.nodeType || a)
                                          if (((u = (u = t[k] || (t[k] = {}))[t.uniqueID] || (u[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t;
                                          else {
                                              if ((l = u[o]) && l[0] === P && l[1] === s) return (d[2] = l[2]);
                                              if (((u[o] = d)[2] = e(t, n, c))) return !0;
                                          }
                              return !1;
                          };
                }
                function ve(e) {
                    return 1 < e.length
                        ? function (t, n, i) {
                              for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                              return !0;
                          }
                        : e[0];
                }
                function ye(e, t, n, i, r) {
                    for (var o, a = [], s = 0, c = e.length, l = null != t; s < c; s++) !(o = e[s]) || (n && !n(o, i, r)) || (a.push(o), l && t.push(s));
                    return a;
                }
                function be(e, t, n, i, r, o) {
                    return (
                        i && !i[k] && (i = be(i)),
                        r && !r[k] && (r = be(r, o)),
                        se(function (o, a, s, c) {
                            var l,
                                u,
                                d,
                                p = [],
                                f = [],
                                h = a.length,
                                m =
                                    o ||
                                    (function (e, t, n) {
                                        for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                                        return n;
                                    })(t || "*", s.nodeType ? [s] : s, []),
                                g = !e || (!o && t) ? m : ye(m, p, e, s, c),
                                v = n ? (r || (o ? e : h || i) ? [] : a) : g;
                            if ((n && n(g, v, s, c), i)) for (l = ye(v, f), i(l, [], s, c), u = l.length; u--; ) (d = l[u]) && (v[f[u]] = !(g[f[u]] = d));
                            if (o) {
                                if (r || e) {
                                    if (r) {
                                        for (l = [], u = v.length; u--; ) (d = v[u]) && l.push((g[u] = d));
                                        r(null, (v = []), l, c);
                                    }
                                    for (u = v.length; u--; ) (d = v[u]) && -1 < (l = r ? q(o, d) : p[u]) && (o[l] = !(a[l] = d));
                                }
                            } else (v = ye(v === a ? v.splice(h, v.length) : v)), r ? r(null, a, v, c) : O.apply(a, v);
                        })
                    );
                }
                return (
                    (he.prototype = a.filters = a.pseudos),
                    (a.setFilters = new he()),
                    (l = oe.tokenize = function (e, t) {
                        var n,
                            i,
                            r,
                            o,
                            s,
                            c,
                            l,
                            u = A[e + " "];
                        if (u) return t ? 0 : u.slice(0);
                        for (s = e, c = [], l = a.preFilter; s; ) {
                            for (o in ((n && !(i = F.exec(s))) || (i && (s = s.slice(i[0].length) || s), c.push((r = []))),
                            (n = !1),
                            (i = U.exec(s)) && ((n = i.shift()), r.push({ value: n, type: i[0].replace(J, " ") }), (s = s.slice(n.length))),
                            a.filter))
                                !(i = K[o].exec(s)) || (l[o] && !(i = l[o](i))) || ((n = i.shift()), r.push({ value: n, type: o, matches: i }), (s = s.slice(n.length)));
                            if (!n) break;
                        }
                        return t ? s.length : s ? oe.error(e) : A(e, c).slice(0);
                    }),
                    (u = oe.compile = function (e, t) {
                        var n,
                            i = [],
                            r = [],
                            o = D[e + " "];
                        if (!o) {
                            for (n = (t = t || l(e)).length; n--; )
                                ((o = (function e(t) {
                                    for (
                                        var n,
                                            i,
                                            r,
                                            o = t.length,
                                            s = a.relative[t[0].type],
                                            c = s || a.relative[" "],
                                            l = s ? 1 : 0,
                                            u = ge(
                                                function (e) {
                                                    return e === n;
                                                },
                                                c,
                                                !0
                                            ),
                                            d = ge(
                                                function (e) {
                                                    return -1 < q(n, e);
                                                },
                                                c,
                                                !0
                                            ),
                                            f = [
                                                function (e, t, i) {
                                                    return (e = (!s && (i || t !== p)) || ((n = t).nodeType ? u : d)(e, t, i)), (n = null), e;
                                                },
                                            ];
                                        l < o;
                                        l++
                                    )
                                        if ((i = a.relative[t[l].type])) f = [ge(ve(f), i)];
                                        else {
                                            if ((i = a.filter[t[l].type].apply(null, t[l].matches))[k]) {
                                                for (r = ++l; r < o && !a.relative[t[r].type]; r++);
                                                return be(
                                                    1 < l && ve(f),
                                                    1 < l && me(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(J, "$1"),
                                                    i,
                                                    l < r && e(t.slice(l, r)),
                                                    r < o && e((t = t.slice(r))),
                                                    r < o && me(t)
                                                );
                                            }
                                            f.push(i);
                                        }
                                    return ve(f);
                                })(t[n]))[k]
                                    ? i
                                    : r
                                ).push(o);
                            (o = D(
                                e,
                                (function (e, t) {
                                    function n(n, o, s, c, l) {
                                        var u,
                                            d,
                                            f,
                                            h = 0,
                                            v = "0",
                                            b = n && [],
                                            x = [],
                                            w = p,
                                            T = n || (r && a.find.TAG("*", l)),
                                            k = (P += null == w ? 1 : Math.random() || 0.1),
                                            N = T.length;
                                        for (l && (p = o === g || o || l); v !== N && null != (u = T[v]); v++) {
                                            if (r && u) {
                                                for (d = 0, o || u.ownerDocument === g || (m(u), (s = !y)); (f = e[d++]); )
                                                    if (f(u, o || g, s)) {
                                                        c.push(u);
                                                        break;
                                                    }
                                                l && (P = k);
                                            }
                                            i && ((u = !f && u) && h--, n && b.push(u));
                                        }
                                        if (((h += v), i && v !== h)) {
                                            for (d = 0; (f = t[d++]); ) f(b, x, o, s);
                                            if (n) {
                                                if (0 < h) for (; v--; ) b[v] || x[v] || (x[v] = j.call(c));
                                                x = ye(x);
                                            }
                                            O.apply(c, x), l && !n && 0 < x.length && 1 < h + t.length && oe.uniqueSort(c);
                                        }
                                        return l && ((P = k), (p = w)), b;
                                    }
                                    var i = 0 < t.length,
                                        r = 0 < e.length;
                                    return i ? se(n) : n;
                                })(r, i)
                            )).selector = e;
                        }
                        return o;
                    }),
                    (d = oe.select = function (e, n, i, r) {
                        var o,
                            s,
                            c,
                            d,
                            p,
                            f = "function" == typeof e && e,
                            h = !r && l((e = f.selector || e));
                        if (((i = i || []), 1 === h.length)) {
                            if (2 < (s = h[0] = h[0].slice(0)).length && "ID" === (c = s[0]).type && 9 === n.nodeType && y && a.relative[s[1].type]) {
                                if (!(n = (a.find.ID(c.matches[0].replace(ne, t), n) || [])[0])) return i;
                                f && (n = n.parentNode), (e = e.slice(s.shift().value.length));
                            }
                            for (o = K.needsContext.test(e) ? 0 : s.length; o-- && ((c = s[o]), !a.relative[(d = c.type)]); )
                                if ((p = a.find[d]) && (r = p(c.matches[0].replace(ne, t), (te.test(s[0].type) && fe(n.parentNode)) || n))) {
                                    if ((s.splice(o, 1), (e = r.length && me(s)))) break;
                                    return O.apply(i, r), i;
                                }
                        }
                        return (f || u(e, h))(r, n, !y, i, !n || (te.test(e) && fe(n.parentNode)) || n), i;
                    }),
                    (o.sortStable = k.split("").sort(I).join("") === k),
                    (o.detectDuplicates = !!h),
                    m(),
                    (o.sortDetached = ce(function (e) {
                        return 1 & e.compareDocumentPosition(g.createElement("fieldset"));
                    })),
                    ce(function (e) {
                        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                    }) ||
                        le("type|href|height|width", function (e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                        }),
                    (o.attributes &&
                        ce(function (e) {
                            return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                        })) ||
                        le("value", function (e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                        }),
                    ce(function (e) {
                        return null == e.getAttribute("disabled");
                    }) ||
                        le($, function (e, t, n) {
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
                        }),
                    oe
                );
            })(n);
            var A =
                ((k.find = s),
                (k.expr = s.selectors),
                (k.expr[":"] = k.expr.pseudos),
                (k.uniqueSort = k.unique = s.uniqueSort),
                (k.text = s.getText),
                (k.isXMLDoc = s.isXML),
                (k.contains = s.contains),
                (k.escapeSelector = s.escape),
                k.expr.match.needsContext);
            function D(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function E(e, t, n) {
                return o(t)
                    ? k.grep(e, function (e, i) {
                          return !!t.call(e, i, e) !== n;
                      })
                    : t.nodeType
                    ? k.grep(e, function (e) {
                          return (e === t) !== n;
                      })
                    : "string" != typeof t
                    ? k.grep(e, function (e) {
                          return -1 < f.call(t, e) !== n;
                      })
                    : k.filter(t, e, n);
            }
            (k.filter = function (e, t, n) {
                var i = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === i.nodeType
                        ? k.find.matchesSelector(i, e)
                            ? [i]
                            : []
                        : k.find.matches(
                              e,
                              k.grep(t, function (e) {
                                  return 1 === e.nodeType;
                              })
                          )
                );
            }),
                k.fn.extend({
                    find: function (e) {
                        var t,
                            n,
                            i = this.length,
                            r = this;
                        if ("string" != typeof e)
                            return this.pushStack(
                                k(e).filter(function () {
                                    for (t = 0; t < i; t++) if (k.contains(r[t], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), t = 0; t < i; t++) k.find(e, r[t], n);
                        return 1 < i ? k.uniqueSort(n) : n;
                    },
                    filter: function (e) {
                        return this.pushStack(E(this, e || [], !1));
                    },
                    not: function (e) {
                        return this.pushStack(E(this, e || [], !0));
                    },
                    is: function (e) {
                        return !!E(this, "string" == typeof e && A.test(e) ? k(e) : e || [], !1).length;
                    },
                });
            var _,
                j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                L =
                    (((k.fn.init = function (e, t, n) {
                        if (!e) return this;
                        if (((n = n || _), "string" != typeof e)) return e.nodeType ? ((this[0] = e), (this.length = 1), this) : o(e) ? (void 0 !== n.ready ? n.ready(e) : e(k)) : k.makeArray(e, this);
                        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || (!i[1] && t)) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                        if (i[1]) {
                            if (((t = t instanceof k ? t[0] : t), k.merge(this, k.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : c, !0)), I.test(i[1]) && k.isPlainObject(t)))
                                for (var i in t) o(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                            return this;
                        }
                        return (n = c.getElementById(i[2])) && ((this[0] = n), (this.length = 1)), this;
                    }).prototype = k.fn),
                    (_ = k(c)),
                    /^(?:parents|prev(?:Until|All))/),
                O = { children: !0, contents: !0, next: !0, prev: !0 };
            function M(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
            }
            k.fn.extend({
                has: function (e) {
                    var t = k(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
                    });
                },
                closest: function (e, t) {
                    var n,
                        i = 0,
                        r = this.length,
                        o = [],
                        a = "string" != typeof e && k(e);
                    if (!A.test(e))
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break;
                                }
                    return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
                },
                index: function (e) {
                    return e ? ("string" == typeof e ? f.call(k(e), this[0]) : f.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (e, t) {
                    return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                },
            }),
                k.each(
                    {
                        parent: function (e) {
                            return (e = e.parentNode) && 11 !== e.nodeType ? e : null;
                        },
                        parents: function (e) {
                            return C(e, "parentNode");
                        },
                        parentsUntil: function (e, t, n) {
                            return C(e, "parentNode", n);
                        },
                        next: function (e) {
                            return M(e, "nextSibling");
                        },
                        prev: function (e) {
                            return M(e, "previousSibling");
                        },
                        nextAll: function (e) {
                            return C(e, "nextSibling");
                        },
                        prevAll: function (e) {
                            return C(e, "previousSibling");
                        },
                        nextUntil: function (e, t, n) {
                            return C(e, "nextSibling", n);
                        },
                        prevUntil: function (e, t, n) {
                            return C(e, "previousSibling", n);
                        },
                        siblings: function (e) {
                            return S((e.parentNode || {}).firstChild, e);
                        },
                        children: function (e) {
                            return S(e.firstChild);
                        },
                        contents: function (e) {
                            return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
                        },
                    },
                    function (e, t) {
                        k.fn[e] = function (n, i) {
                            var r = k.map(this, t, n);
                            return (i = "Until" !== e.slice(-5) ? n : i) && "string" == typeof i && (r = k.filter(i, r)), 1 < this.length && (O[e] || k.uniqueSort(r), L.test(e) && r.reverse()), this.pushStack(r);
                        };
                    }
                );
            var q = /[^\x20\t\r\n\f]+/g;
            function $(e) {
                return e;
            }
            function R(e) {
                throw e;
            }
            function B(e, t, n, i) {
                var r;
                try {
                    e && o((r = e.promise)) ? r.call(e).done(t).fail(n) : e && o((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
                } catch (e) {
                    n.apply(void 0, [e]);
                }
            }
            (k.Callbacks = function (e) {
                var t, n;
                function i() {
                    for (c = c || e.once, s = r = !0; u.length; d = -1) for (a = u.shift(); ++d < l.length; ) !1 === l[d].apply(a[0], a[1]) && e.stopOnFalse && ((d = l.length), (a = !1));
                    e.memory || (a = !1), (r = !1), c && (l = a ? [] : "");
                }
                e =
                    "string" == typeof e
                        ? ((t = e),
                          (n = {}),
                          k.each(t.match(q) || [], function (e, t) {
                              n[t] = !0;
                          }),
                          n)
                        : k.extend({}, e);
                var r,
                    a,
                    s,
                    c,
                    l = [],
                    u = [],
                    d = -1,
                    p = {
                        add: function () {
                            return (
                                l &&
                                    (a && !r && ((d = l.length - 1), u.push(a)),
                                    (function t(n) {
                                        k.each(n, function (n, i) {
                                            o(i) ? (e.unique && p.has(i)) || l.push(i) : i && i.length && "string" !== T(i) && t(i);
                                        });
                                    })(arguments),
                                    a && !r && i()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                k.each(arguments, function (e, t) {
                                    for (var n; -1 < (n = k.inArray(t, l, n)); ) l.splice(n, 1), n <= d && d--;
                                }),
                                this
                            );
                        },
                        has: function (e) {
                            return e ? -1 < k.inArray(e, l) : 0 < l.length;
                        },
                        empty: function () {
                            return (l = l && []), this;
                        },
                        disable: function () {
                            return (c = u = []), (l = a = ""), this;
                        },
                        disabled: function () {
                            return !l;
                        },
                        lock: function () {
                            return (c = u = []), a || r || (l = a = ""), this;
                        },
                        locked: function () {
                            return !!c;
                        },
                        fireWith: function (e, t) {
                            return c || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), r || i()), this;
                        },
                        fire: function () {
                            return p.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!s;
                        },
                    };
                return p;
            }),
                k.extend({
                    Deferred: function (e) {
                        var t = [
                                ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                                ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"],
                            ],
                            i = "pending",
                            r = {
                                state: function () {
                                    return i;
                                },
                                always: function () {
                                    return a.done(arguments).fail(arguments), this;
                                },
                                catch: function (e) {
                                    return r.then(null, e);
                                },
                                pipe: function () {
                                    var e = arguments;
                                    return k
                                        .Deferred(function (n) {
                                            k.each(t, function (t, i) {
                                                var r = o(e[i[4]]) && e[i[4]];
                                                a[i[1]](function () {
                                                    var e = r && r.apply(this, arguments);
                                                    e && o(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments);
                                                });
                                            }),
                                                (e = null);
                                        })
                                        .promise();
                                },
                                then: function (e, i, r) {
                                    var a = 0;
                                    function s(e, t, i, r) {
                                        return function () {
                                            function c() {
                                                var n, c;
                                                if (!(e < a)) {
                                                    if ((n = i.apply(l, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                    o((c = n && ("object" == typeof n || "function" == typeof n) && n.then))
                                                        ? r
                                                            ? c.call(n, s(a, t, $, r), s(a, t, R, r))
                                                            : (a++, c.call(n, s(a, t, $, r), s(a, t, R, r), s(a, t, $, t.notifyWith)))
                                                        : (i !== $ && ((l = void 0), (u = [n])), (r || t.resolveWith)(l, u));
                                                }
                                            }
                                            var l = this,
                                                u = arguments,
                                                d = r
                                                    ? c
                                                    : function () {
                                                          try {
                                                              c();
                                                          } catch (n) {
                                                              k.Deferred.exceptionHook && k.Deferred.exceptionHook(n, d.stackTrace), a <= e + 1 && (i !== R && ((l = void 0), (u = [n])), t.rejectWith(l, u));
                                                          }
                                                      };
                                            e ? d() : (k.Deferred.getStackHook && (d.stackTrace = k.Deferred.getStackHook()), n.setTimeout(d));
                                        };
                                    }
                                    return k
                                        .Deferred(function (n) {
                                            t[0][3].add(s(0, n, o(r) ? r : $, n.notifyWith)), t[1][3].add(s(0, n, o(e) ? e : $)), t[2][3].add(s(0, n, o(i) ? i : R));
                                        })
                                        .promise();
                                },
                                promise: function (e) {
                                    return null != e ? k.extend(e, r) : r;
                                },
                            },
                            a = {};
                        return (
                            k.each(t, function (e, n) {
                                var o = n[2],
                                    s = n[5];
                                (r[n[1]] = o.add),
                                    s &&
                                        o.add(
                                            function () {
                                                i = s;
                                            },
                                            t[3 - e][2].disable,
                                            t[3 - e][3].disable,
                                            t[0][2].lock,
                                            t[0][3].lock
                                        ),
                                    o.add(n[3].fire),
                                    (a[n[0]] = function () {
                                        return a[n[0] + "With"](this === a ? void 0 : this, arguments), this;
                                    }),
                                    (a[n[0] + "With"] = o.fireWith);
                            }),
                            r.promise(a),
                            e && e.call(a, a),
                            a
                        );
                    },
                    when: function (e) {
                        function t(e) {
                            return function (t) {
                                (r[e] = this), (a[e] = 1 < arguments.length ? u.call(arguments) : t), --n || s.resolveWith(r, a);
                            };
                        }
                        var n = arguments.length,
                            i = n,
                            r = Array(i),
                            a = u.call(arguments),
                            s = k.Deferred();
                        if (n <= 1 && (B(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || o(a[i] && a[i].then))) return s.then();
                        for (; i--; ) B(a[i], t(i), s.reject);
                        return s.promise();
                    },
                });
            var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
                W =
                    ((k.Deferred.exceptionHook = function (e, t) {
                        n.console && n.console.warn && e && H.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
                    }),
                    (k.readyException = function (e) {
                        n.setTimeout(function () {
                            throw e;
                        });
                    }),
                    k.Deferred());
            function V() {
                c.removeEventListener("DOMContentLoaded", V), n.removeEventListener("load", V), k.ready();
            }
            function J(e, t, n, i, r, a, s) {
                var c = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === T(n)) for (c in ((r = !0), n)) J(e, t, c, n[c], !0, a, s);
                else if (
                    void 0 !== i &&
                    ((r = !0),
                    o(i) || (s = !0),
                    (t = u
                        ? s
                            ? (t.call(e, i), null)
                            : ((u = t),
                              function (e, t, n) {
                                  return u.call(k(e), n);
                              })
                        : t))
                )
                    for (; c < l; c++) t(e[c], n, s ? i : i.call(e[c], c, t(e[c], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : a;
            }
            (k.fn.ready = function (e) {
                return (
                    W.then(e).catch(function (e) {
                        k.readyException(e);
                    }),
                    this
                );
            }),
                k.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (e) {
                        (!0 === e ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== e && 0 < --k.readyWait) || W.resolveWith(c, [k]);
                    },
                }),
                (k.ready.then = W.then),
                "complete" === c.readyState || ("loading" !== c.readyState && !c.documentElement.doScroll) ? n.setTimeout(k.ready) : (c.addEventListener("DOMContentLoaded", V), n.addEventListener("load", V));
            var F = /^-ms-/,
                U = /-([a-z])/g;
            function z(e, t) {
                return t.toUpperCase();
            }
            function X(e) {
                return e.replace(F, "ms-").replace(U, z);
            }
            function Q(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            }
            function K() {
                this.expando = k.expando + K.uid++;
            }
            (K.uid = 1),
                (K.prototype = {
                    cache: function (e) {
                        var t = e[this.expando];
                        return t || ((t = {}), Q(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                    },
                    set: function (e, t, n) {
                        var i,
                            r = this.cache(e);
                        if ("string" == typeof t) r[X(t)] = n;
                        else for (i in t) r[X(i)] = t[i];
                        return r;
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
                    },
                    access: function (e, t, n) {
                        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                    },
                    remove: function (e, t) {
                        var n,
                            i = e[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(q) || []).length;
                                for (; n--; ) delete i[t[n]];
                            }
                            (void 0 !== t && !k.isEmptyObject(i)) || (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                        }
                    },
                    hasData: function (e) {
                        return void 0 !== (e = e[this.expando]) && !k.isEmptyObject(e);
                    },
                });
            var G = new K(),
                Y = new K(),
                Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                ee = /[A-Z]/g;
            function te(e, t, n) {
                var i, r;
                if (void 0 === n && 1 === e.nodeType)
                    if (((i = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                        try {
                            n = "true" === (r = n) || ("false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r));
                        } catch (e) {}
                        Y.set(e, t, n);
                    } else n = void 0;
                return n;
            }
            function ne(e, t) {
                return "none" === (e = t || e).style.display || ("" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display"));
            }
            function ie(e, t, n, i) {
                var r,
                    o = {};
                for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
                for (r in ((n = n.apply(e, i || [])), t)) e.style[r] = o[r];
                return n;
            }
            k.extend({
                hasData: function (e) {
                    return Y.hasData(e) || G.hasData(e);
                },
                data: function (e, t, n) {
                    return Y.access(e, t, n);
                },
                removeData: function (e, t) {
                    Y.remove(e, t);
                },
                _data: function (e, t, n) {
                    return G.access(e, t, n);
                },
                _removeData: function (e, t) {
                    G.remove(e, t);
                },
            }),
                k.fn.extend({
                    data: function (e, t) {
                        var n,
                            i,
                            r,
                            o = this[0],
                            a = o && o.attributes;
                        if (void 0 !== e)
                            return "object" == typeof e
                                ? this.each(function () {
                                      Y.set(this, e);
                                  })
                                : J(
                                      this,
                                      function (t) {
                                          var n;
                                          if (o && void 0 === t) return void 0 !== (n = Y.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
                                          this.each(function () {
                                              Y.set(this, e, t);
                                          });
                                      },
                                      null,
                                      t,
                                      1 < arguments.length,
                                      null,
                                      !0
                                  );
                        if (this.length && ((r = Y.get(o)), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--; ) a[n] && 0 === (i = a[n].name).indexOf("data-") && ((i = X(i.slice(5))), te(o, i, r[i]));
                            G.set(o, "hasDataAttrs", !0);
                        }
                        return r;
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            Y.remove(this, e);
                        });
                    },
                }),
                k.extend({
                    queue: function (e, t, n) {
                        var i;
                        if (e) return (i = G.get(e, (t = (t || "fx") + "queue"))), n && (!i || Array.isArray(n) ? (i = G.access(e, t, k.makeArray(n))) : i.push(n)), i || [];
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = k.queue(e, t),
                            i = n.length,
                            r = n.shift(),
                            o = k._queueHooks(e, t);
                        "inprogress" === r && ((r = n.shift()), i--),
                            r &&
                                ("fx" === t && n.unshift("inprogress"),
                                delete o.stop,
                                r.call(
                                    e,
                                    function () {
                                        k.dequeue(e, t);
                                    },
                                    o
                                )),
                            !i && o && o.empty.fire();
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return (
                            G.get(e, n) ||
                            G.access(e, n, {
                                empty: k.Callbacks("once memory").add(function () {
                                    G.remove(e, [t + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                k.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return (
                            "string" != typeof e && ((t = e), (e = "fx"), n--),
                            arguments.length < n
                                ? k.queue(this[0], e)
                                : void 0 === t
                                ? this
                                : this.each(function () {
                                      var n = k.queue(this, e, t);
                                      k._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e);
                                  })
                        );
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            k.dequeue(this, e);
                        });
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function (e, t) {
                        function n() {
                            --r || o.resolveWith(a, [a]);
                        }
                        var i,
                            r = 1,
                            o = k.Deferred(),
                            a = this,
                            s = this.length;
                        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (i = G.get(a[s], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
                        return n(), o.promise(t);
                    },
                });
            s = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
            var re = new RegExp("^(?:([+-])=|)(" + s + ")([a-z%]*)$", "i"),
                oe = ["Top", "Right", "Bottom", "Left"];
            function ae(e, t, n, i) {
                var r,
                    o,
                    a = 20,
                    s = i
                        ? function () {
                              return i.cur();
                          }
                        : function () {
                              return k.css(e, t, "");
                          },
                    c = s(),
                    l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
                    u = (k.cssNumber[t] || ("px" !== l && +c)) && re.exec(k.css(e, t));
                if (u && u[3] !== l) {
                    for (l = l || u[3], u = +(c /= 2) || 1; a--; ) k.style(e, t, u + l), (1 - o) * (1 - (o = s() / c || 0.5)) <= 0 && (a = 0), (u /= o);
                    k.style(e, t, (u *= 2) + l), (n = n || []);
                }
                return n && ((u = +u || +c || 0), (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = l), (i.start = u), (i.end = r))), r;
            }
            var se = {};
            function ce(e, t) {
                for (var n, i, r, o, a, s = [], c = 0, l = e.length; c < l; c++)
                    (i = e[c]).style &&
                        ((n = i.style.display),
                        t
                            ? ("none" === n && ((s[c] = G.get(i, "display") || null), s[c] || (i.style.display = "")),
                              "" === i.style.display &&
                                  ne(i) &&
                                  (s[c] =
                                      ((a = o = void 0),
                                      (o = (r = i).ownerDocument),
                                      (r = r.nodeName),
                                      (a = se[r]) || ((o = o.body.appendChild(o.createElement(r))), (a = k.css(o, "display")), o.parentNode.removeChild(o), (se[r] = a = "none" === a ? "block" : a)))))
                            : "none" !== n && ((s[c] = "none"), G.set(i, "display", n)));
                for (c = 0; c < l; c++) null != s[c] && (e[c].style.display = s[c]);
                return e;
            }
            k.fn.extend({
                show: function () {
                    return ce(this, !0);
                },
                hide: function () {
                    return ce(this);
                },
                toggle: function (e) {
                    return "boolean" == typeof e
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              ne(this) ? k(this).show() : k(this).hide();
                          });
                },
            });
            var le = /^(?:checkbox|radio)$/i,
                ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                de = /^$|^module$|\/(?:java|ecma)script/i,
                pe = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""],
                };
            function fe(e, t) {
                var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || (t && D(e, t)) ? k.merge([e], n) : n;
            }
            function he(e, t) {
                for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
            }
            (pe.optgroup = pe.option), (pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead), (pe.th = pe.td);
            var me = /<|&#?\w+;/;
            function ge(e, t, n, i, r) {
                for (var o, a, s, c, l, u = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
                    if ((o = e[p]) || 0 === o)
                        if ("object" === T(o)) k.merge(d, o.nodeType ? [o] : o);
                        else if (me.test(o)) {
                            for (a = a || u.appendChild(t.createElement("div")), s = (ue.exec(o) || ["", ""])[1].toLowerCase(), s = pe[s] || pe._default, a.innerHTML = s[1] + k.htmlPrefilter(o) + s[2], l = s[0]; l--; ) a = a.lastChild;
                            k.merge(d, a.childNodes), ((a = u.firstChild).textContent = "");
                        } else d.push(t.createTextNode(o));
                for (u.textContent = "", p = 0; (o = d[p++]); )
                    if (i && -1 < k.inArray(o, i)) r && r.push(o);
                    else if (((c = k.contains(o.ownerDocument, o)), (a = fe(u.appendChild(o), "script")), c && he(a), n)) for (l = 0; (o = a[l++]); ) de.test(o.type || "") && n.push(o);
                return u;
            }
            (lt = c.createDocumentFragment().appendChild(c.createElement("div"))),
                (ct = c.createElement("input")).setAttribute("type", "radio"),
                ct.setAttribute("checked", "checked"),
                ct.setAttribute("name", "t"),
                lt.appendChild(ct),
                (b.checkClone = lt.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (lt.innerHTML = "<textarea>x</textarea>"),
                (b.noCloneChecked = !!lt.cloneNode(!0).lastChild.defaultValue);
            var ve = c.documentElement,
                ye = /^key/,
                be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                xe = /^([^.]*)(?:\.(.+)|)/;
            function we() {
                return !0;
            }
            function Te() {
                return !1;
            }
            function ke() {
                try {
                    return c.activeElement;
                } catch (e) {}
            }
            function Ne(e, t, n, i, r, o) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ne(e, s, n, i, t[s], o);
                    return e;
                }
                if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = Te;
                else if (!r) return e;
                return (
                    1 === o &&
                        ((a = r),
                        ((r = function (e) {
                            return k().off(e), a.apply(this, arguments);
                        }).guid = a.guid || (a.guid = k.guid++))),
                    e.each(function () {
                        k.event.add(this, t, r, i, n);
                    })
                );
            }
            (k.event = {
                global: {},
                add: function (e, t, n, i, r) {
                    var o,
                        a,
                        s,
                        c,
                        l,
                        u,
                        d,
                        p,
                        f,
                        h = G.get(e);
                    if (h)
                        for (
                            n.handler && ((n = (o = n).handler), (r = o.selector)),
                                r && k.find.matchesSelector(ve, r),
                                n.guid || (n.guid = k.guid++),
                                (s = h.events) || (s = h.events = {}),
                                (a = h.handle) ||
                                    (a = h.handle = function (t) {
                                        return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0;
                                    }),
                                c = (t = (t || "").match(q) || [""]).length;
                            c--;

                        )
                            (d = f = (p = xe.exec(t[c]) || [])[1]),
                                (p = (p[2] || "").split(".").sort()),
                                d &&
                                    ((l = k.event.special[d] || {}),
                                    (d = (r ? l.delegateType : l.bindType) || d),
                                    (l = k.event.special[d] || {}),
                                    (f = k.extend({ type: d, origType: f, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && k.expr.match.needsContext.test(r), namespace: p.join(".") }, o)),
                                    (u = s[d]) || (((u = s[d] = []).delegateCount = 0), (l.setup && !1 !== l.setup.call(e, i, p, a)) || (e.addEventListener && e.addEventListener(d, a))),
                                    l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)),
                                    r ? u.splice(u.delegateCount++, 0, f) : u.push(f),
                                    (k.event.global[d] = !0));
                },
                remove: function (e, t, n, i, r) {
                    var o,
                        a,
                        s,
                        c,
                        l,
                        u,
                        d,
                        p,
                        f,
                        h,
                        m,
                        g = G.hasData(e) && G.get(e);
                    if (g && (c = g.events)) {
                        for (l = (t = (t || "").match(q) || [""]).length; l--; )
                            if (((f = m = (s = xe.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), f)) {
                                for (d = k.event.special[f] || {}, p = c[(f = (i ? d.delegateType : d.bindType) || f)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--; )
                                    (u = p[o]),
                                        (!r && m !== u.origType) ||
                                            (n && n.guid !== u.guid) ||
                                            (s && !s.test(u.namespace)) ||
                                            (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                            (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                                a && !p.length && ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) || k.removeEvent(e, f, g.handle), delete c[f]);
                            } else for (f in c) k.event.remove(e, f + t[l], n, i, !0);
                        k.isEmptyObject(c) && G.remove(e, "handle events");
                    }
                },
                dispatch: function (e) {
                    var t,
                        n,
                        i,
                        r,
                        o,
                        a = k.event.fix(e),
                        s = new Array(arguments.length),
                        c = ((e = (G.get(this, "events") || {})[a.type] || []), k.event.special[a.type] || {});
                    for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                    if (((a.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, a))) {
                        for (o = k.event.handlers.call(this, a, e), t = 0; (i = o[t++]) && !a.isPropagationStopped(); )
                            for (a.currentTarget = i.elem, n = 0; (r = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                                (a.rnamespace && !a.rnamespace.test(r.namespace)) ||
                                    ((a.handleObj = r), (a.data = r.data), void 0 !== (r = ((k.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, a), a.result;
                    }
                },
                handlers: function (e, t) {
                    var n,
                        i,
                        r,
                        o,
                        a,
                        s = [],
                        c = t.delegateCount,
                        l = e.target;
                    if (c && l.nodeType && !("click" === e.type && 1 <= e.button))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (o = [], a = {}, n = 0; n < c; n++) void 0 === a[(r = (i = t[n]).selector + " ")] && (a[r] = i.needsContext ? -1 < k(r, this).index(l) : k.find(r, this, null, [l]).length), a[r] && o.push(i);
                                o.length && s.push({ elem: l, handlers: o });
                            }
                    return (l = this), c < t.length && s.push({ elem: l, handlers: t.slice(c) }), s;
                },
                addProp: function (e, t) {
                    Object.defineProperty(k.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: o(t)
                            ? function () {
                                  if (this.originalEvent) return t(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[e];
                              },
                        set: function (t) {
                            Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                        },
                    });
                },
                fix: function (e) {
                    return e[k.expando] ? e : new k.Event(e);
                },
                special: {
                    load: { noBubble: !0 },
                    focus: {
                        trigger: function () {
                            if (this !== ke() && this.focus) return this.focus(), !1;
                        },
                        delegateType: "focusin",
                    },
                    blur: {
                        trigger: function () {
                            if (this === ke() && this.blur) return this.blur(), !1;
                        },
                        delegateType: "focusout",
                    },
                    click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1;
                        },
                        _default: function (e) {
                            return D(e.target, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        },
                    },
                },
            }),
                (k.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }),
                (k.Event = function (e, t) {
                    if (!(this instanceof k.Event)) return new k.Event(e, t);
                    e && e.type
                        ? ((this.originalEvent = e),
                          (this.type = e.type),
                          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? we : Te),
                          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                          (this.currentTarget = e.currentTarget),
                          (this.relatedTarget = e.relatedTarget))
                        : (this.type = e),
                        t && k.extend(this, t),
                        (this.timeStamp = (e && e.timeStamp) || Date.now()),
                        (this[k.expando] = !0);
                }),
                (k.Event.prototype = {
                    constructor: k.Event,
                    isDefaultPrevented: Te,
                    isPropagationStopped: Te,
                    isImmediatePropagationStopped: Te,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = we), e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = we), e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        (this.isImmediatePropagationStopped = we), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                k.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (e) {
                            var t = e.button;
                            return null == e.which && ye.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && be.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                        },
                    },
                    k.event.addProp
                ),
                k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                    k.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n,
                                i = e.relatedTarget,
                                r = e.handleObj;
                            return (i && (i === this || k.contains(this, i))) || ((e.type = r.origType), (n = r.handler.apply(this, arguments)), (e.type = t)), n;
                        },
                    };
                }),
                k.fn.extend({
                    on: function (e, t, n, i) {
                        return Ne(this, e, t, n, i);
                    },
                    one: function (e, t, n, i) {
                        return Ne(this, e, t, n, i, 1);
                    },
                    off: function (e, t, n) {
                        var i, r;
                        if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), k(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if ("object" != typeof e)
                            return (
                                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                !1 === n && (n = Te),
                                this.each(function () {
                                    k.event.remove(this, e, n, t);
                                })
                            );
                        for (r in e) this.off(r, t, e[r]);
                        return this;
                    },
                });
            var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ce = /<script|<style|<link/i,
                Se = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function De(e, t) {
                return (D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0]) || e;
            }
            function Ie(e) {
                return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }
            function Ee(e) {
                return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
            }
            function _e(e, t) {
                var n, i, r, o, a, s;
                if (1 === t.nodeType) {
                    if (G.hasData(e) && ((o = G.access(e)), (a = G.set(t, o)), (s = o.events))) for (r in (delete a.handle, (a.events = {}), s)) for (n = 0, i = s[r].length; n < i; n++) k.event.add(t, r, s[r][n]);
                    Y.hasData(e) && ((o = Y.access(e)), (a = k.extend({}, o)), Y.set(t, a));
                }
            }
            function je(e, t, n, i) {
                t = d.apply([], t);
                var r,
                    a,
                    s,
                    c,
                    l,
                    u,
                    p = 0,
                    f = e.length,
                    h = f - 1,
                    m = t[0],
                    g = o(m);
                if (g || (1 < f && "string" == typeof m && !b.checkClone && Se.test(m)))
                    return e.each(function (r) {
                        var o = e.eq(r);
                        g && (t[0] = m.call(this, r, o.html())), je(o, t, n, i);
                    });
                if (f && ((a = (r = ge(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = a), a || i)) {
                    for (c = (s = k.map(fe(r, "script"), Ie)).length; p < f; p++) (l = r), p !== h && ((l = k.clone(l, !0, !0)), c && k.merge(s, fe(l, "script"))), n.call(e[p], l, p);
                    if (c)
                        for (u = s[s.length - 1].ownerDocument, k.map(s, Ee), p = 0; p < c; p++)
                            (l = s[p]),
                                de.test(l.type || "") && !G.access(l, "globalEval") && k.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? k._evalUrl && k._evalUrl(l.src) : w(l.textContent.replace(Ae, ""), u, l));
                }
                return e;
            }
            function Le(e, t, n) {
                for (var i, r = t ? k.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || k.cleanData(fe(i)), i.parentNode && (n && k.contains(i.ownerDocument, i) && he(fe(i, "script")), i.parentNode.removeChild(i));
                return e;
            }
            function Oe(e) {
                var t = e.ownerDocument.defaultView;
                return (t = t && t.opener ? t : n).getComputedStyle(e);
            }
            k.extend({
                htmlPrefilter: function (e) {
                    return e.replace(Pe, "<$1></$2>");
                },
                clone: function (e, t, n) {
                    var i,
                        r,
                        o,
                        a,
                        s,
                        c,
                        l,
                        u = e.cloneNode(!0),
                        d = k.contains(e.ownerDocument, e);
                    if (!(b.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || k.isXMLDoc(e)))
                        for (a = fe(u), i = 0, r = (o = fe(e)).length; i < r; i++)
                            (s = o[i]), void 0, "input" === (l = (c = a[i]).nodeName.toLowerCase()) && le.test(s.type) ? (c.checked = s.checked) : ("input" !== l && "textarea" !== l) || (c.defaultValue = s.defaultValue);
                    if (t)
                        if (n) for (o = o || fe(e), a = a || fe(u), i = 0, r = o.length; i < r; i++) _e(o[i], a[i]);
                        else _e(e, u);
                    return 0 < (a = fe(u, "script")).length && he(a, !d && fe(e, "script")), u;
                },
                cleanData: function (e) {
                    for (var t, n, i, r = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Q(n)) {
                            if ((t = n[G.expando])) {
                                if (t.events) for (i in t.events) r[i] ? k.event.remove(n, i) : k.removeEvent(n, i, t.handle);
                                n[G.expando] = void 0;
                            }
                            n[Y.expando] && (n[Y.expando] = void 0);
                        }
                },
            }),
                k.fn.extend({
                    detach: function (e) {
                        return Le(this, e, !0);
                    },
                    remove: function (e) {
                        return Le(this, e);
                    },
                    text: function (e) {
                        return J(
                            this,
                            function (e) {
                                return void 0 === e
                                    ? k.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                      });
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    append: function () {
                        return je(this, arguments, function (e) {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || De(this, e).appendChild(e);
                        });
                    },
                    prepend: function () {
                        return je(this, arguments, function (e) {
                            var t;
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (t = De(this, e)).insertBefore(e, t.firstChild);
                        });
                    },
                    before: function () {
                        return je(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function () {
                        return je(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(fe(e, !1)), (e.textContent = ""));
                        return this;
                    },
                    clone: function (e, t) {
                        return (
                            (e = null != e && e),
                            (t = null == t ? e : t),
                            this.map(function () {
                                return k.clone(this, e, t);
                            })
                        );
                    },
                    html: function (e) {
                        return J(
                            this,
                            function (e) {
                                var t = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !Ce.test(e) && !pe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = k.htmlPrefilter(e);
                                    try {
                                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(fe(t, !1)), (t.innerHTML = e));
                                        t = 0;
                                    } catch (e) {}
                                }
                                t && this.empty().append(e);
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var e = [];
                        return je(
                            this,
                            arguments,
                            function (t) {
                                var n = this.parentNode;
                                k.inArray(this, e) < 0 && (k.cleanData(fe(this)), n && n.replaceChild(t, this));
                            },
                            e
                        );
                    },
                }),
                k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                    k.fn[e] = function (e) {
                        for (var n, i = [], r = k(e), o = r.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), k(r[a])[t](n), p.apply(i, n.get());
                        return this.pushStack(i);
                    };
                });
            var Me,
                qe,
                $e,
                Re,
                Be,
                He,
                We,
                Ve = new RegExp("^(" + s + ")(?!px)[a-z%]+$", "i"),
                Je = new RegExp(oe.join("|"), "i");
            function Fe() {
                var e;
                We &&
                    ((He.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (We.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    ve.appendChild(He).appendChild(We),
                    (e = n.getComputedStyle(We)),
                    (Me = "1%" !== e.top),
                    (Be = 12 === Ue(e.marginLeft)),
                    (We.style.right = "60%"),
                    (Re = 36 === Ue(e.right)),
                    (qe = 36 === Ue(e.width)),
                    (We.style.position = "absolute"),
                    ($e = 36 === We.offsetWidth || "absolute"),
                    ve.removeChild(He),
                    (We = null));
            }
            function Ue(e) {
                return Math.round(parseFloat(e));
            }
            function ze(e, t, n) {
                var i,
                    r,
                    o = e.style;
                return (
                    (n = n || Oe(e)) &&
                        ("" !== (r = n.getPropertyValue(t) || n[t]) || k.contains(e.ownerDocument, e) || (r = k.style(e, t)),
                        !b.pixelBoxStyles() && Ve.test(r) && Je.test(t) && ((e = o.width), (t = o.minWidth), (i = o.maxWidth), (o.minWidth = o.maxWidth = o.width = r), (r = n.width), (o.width = e), (o.minWidth = t), (o.maxWidth = i))),
                    void 0 !== r ? r + "" : r
                );
            }
            function Xe(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get;
                    },
                };
            }
            (He = c.createElement("div")),
                (We = c.createElement("div")).style &&
                    ((We.style.backgroundClip = "content-box"),
                    (We.cloneNode(!0).style.backgroundClip = ""),
                    (b.clearCloneStyle = "content-box" === We.style.backgroundClip),
                    k.extend(b, {
                        boxSizingReliable: function () {
                            return Fe(), qe;
                        },
                        pixelBoxStyles: function () {
                            return Fe(), Re;
                        },
                        pixelPosition: function () {
                            return Fe(), Me;
                        },
                        reliableMarginLeft: function () {
                            return Fe(), Be;
                        },
                        scrollboxSize: function () {
                            return Fe(), $e;
                        },
                    }));
            var Qe = /^(none|table(?!-c[ea]).+)/,
                Ke = /^--/,
                Ge = { position: "absolute", visibility: "hidden", display: "block" },
                Ye = { letterSpacing: "0", fontWeight: "400" },
                Ze = ["Webkit", "Moz", "ms"],
                et = c.createElement("div").style;
            function tt(e) {
                return (
                    k.cssProps[e] ||
                    (k.cssProps[e] =
                        (function (e) {
                            if (e in et) return e;
                            for (var t = e[0].toUpperCase() + e.slice(1), n = Ze.length; n--; ) if ((e = Ze[n] + t) in et) return e;
                        })(e) || e)
                );
            }
            function nt(e, t, n) {
                var i = re.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
            }
            function it(e, t, n, i, r, o) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    c = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; a < 4; a += 2)
                    "margin" === n && (c += k.css(e, n + oe[a], !0, r)),
                        i
                            ? ("content" === n && (c -= k.css(e, "padding" + oe[a], !0, r)), "margin" !== n && (c -= k.css(e, "border" + oe[a] + "Width", !0, r)))
                            : ((c += k.css(e, "padding" + oe[a], !0, r)), "padding" !== n ? (c += k.css(e, "border" + oe[a] + "Width", !0, r)) : (s += k.css(e, "border" + oe[a] + "Width", !0, r)));
                return !i && 0 <= o && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - s - 0.5))), c;
            }
            function rt(e, t, n) {
                var i = Oe(e),
                    r = ze(e, t, i),
                    o = "border-box" === k.css(e, "boxSizing", !1, i),
                    a = o;
                if (Ve.test(r)) {
                    if (!n) return r;
                    r = "auto";
                }
                return (
                    (a = a && (b.boxSizingReliable() || r === e.style[t])),
                    ("auto" !== r && (parseFloat(r) || "inline" !== k.css(e, "display", !1, i))) || ((r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
                    (r = parseFloat(r) || 0) + it(e, t, n || (o ? "border" : "content"), a, i, r) + "px"
                );
            }
            function ot(e, t, n, i, r) {
                return new ot.prototype.init(e, t, n, i, r);
            }
            k.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) return "" === (t = ze(e, "opacity")) ? "1" : t;
                        },
                    },
                },
                cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: {},
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r,
                            o,
                            a,
                            s = X(t),
                            c = Ke.test(t),
                            l = e.style;
                        if ((c || (t = tt(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                        "string" == (o = typeof n) && (r = re.exec(n)) && r[1] && ((n = ae(e, t, r)), (o = "number")),
                            null != n &&
                                n == n &&
                                ("number" === o && (n += (r && r[3]) || (k.cssNumber[s] ? "" : "px")),
                                b.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                (a && "set" in a && void 0 === (n = a.set(e, n, i))) || (c ? l.setProperty(t, n) : (l[t] = n)));
                    }
                },
                css: function (e, t, n, i) {
                    var r,
                        o = X(t);
                    return (
                        Ke.test(t) || (t = tt(o)),
                        "normal" === (r = void 0 === (r = (o = k.cssHooks[t] || k.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : r) ? ze(e, t, i) : r) && t in Ye && (r = Ye[t]),
                        "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
                    );
                },
            }),
                k.each(["height", "width"], function (e, t) {
                    k.cssHooks[t] = {
                        get: function (e, n, i) {
                            if (n)
                                return !Qe.test(k.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                    ? rt(e, t, i)
                                    : ie(e, Ge, function () {
                                          return rt(e, t, i);
                                      });
                        },
                        set: function (e, n, i) {
                            var r = Oe(e),
                                o = "border-box" === k.css(e, "boxSizing", !1, r);
                            i = i && it(e, t, i, o, r);
                            return (
                                o && b.scrollboxSize() === r.position && (i -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - it(e, t, "border", !1, r) - 0.5)),
                                i && (o = re.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = k.css(e, t))),
                                nt(0, n, i)
                            );
                        },
                    };
                }),
                (k.cssHooks.marginLeft = Xe(b.reliableMarginLeft, function (e, t) {
                    if (t)
                        return (
                            (parseFloat(ze(e, "marginLeft")) ||
                                e.getBoundingClientRect().left -
                                    ie(e, { marginLeft: 0 }, function () {
                                        return e.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                k.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                    (k.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                            return r;
                        },
                    }),
                        "margin" !== e && (k.cssHooks[e + t].set = nt);
                }),
                k.fn.extend({
                    css: function (e, t) {
                        return J(
                            this,
                            function (e, t, n) {
                                var i,
                                    r,
                                    o = {},
                                    a = 0;
                                if (Array.isArray(t)) {
                                    for (i = Oe(e), r = t.length; a < r; a++) o[t[a]] = k.css(e, t[a], !1, i);
                                    return o;
                                }
                                return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                            },
                            e,
                            t,
                            1 < arguments.length
                        );
                    },
                }),
                (((k.Tween = ot).prototype = {
                    constructor: ot,
                    init: function (e, t, n, i, r, o) {
                        (this.elem = e), (this.prop = n), (this.easing = r || k.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (k.cssNumber[n] ? "" : "px"));
                    },
                    cur: function () {
                        var e = ot.propHooks[this.prop];
                        return (e && e.get ? e : ot.propHooks._default).get(this);
                    },
                    run: function (e) {
                        var t,
                            n = ot.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                            (this.now = (this.end - this.start) * t + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            (n && n.set ? n : ot.propHooks._default).set(this),
                            this
                        );
                    },
                }).init.prototype = ot.prototype),
                ((ot.propHooks = {
                    _default: {
                        get: function (e) {
                            return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (e = k.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
                        },
                        set: function (e) {
                            k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : k.style(e.elem, e.prop, e.now + e.unit);
                        },
                    },
                }).scrollTop = ot.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    },
                }),
                (k.easing = {
                    linear: function (e) {
                        return e;
                    },
                    swing: function (e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (k.fx = ot.prototype.init),
                (k.fx.step = {});
            var at,
                st,
                ct,
                lt,
                ut = /^(?:toggle|show|hide)$/,
                dt = /queueHooks$/;
            function pt() {
                st && (!1 === c.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(pt) : n.setTimeout(pt, k.fx.interval), k.fx.tick());
            }
            function ft() {
                return (
                    n.setTimeout(function () {
                        at = void 0;
                    }),
                    (at = Date.now())
                );
            }
            function ht(e, t) {
                var n,
                    i = 0,
                    r = { height: e };
                for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = oe[i])] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r;
            }
            function mt(e, t, n) {
                for (var i, r = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), o = 0, a = r.length; o < a; o++) if ((i = r[o].call(n, t, e))) return i;
            }
            function gt(e, t, n) {
                var i,
                    r,
                    a,
                    s,
                    c,
                    l,
                    u,
                    d = 0,
                    p = gt.prefilters.length,
                    f = k.Deferred().always(function () {
                        delete h.elem;
                    }),
                    h = function () {
                        if (r) return !1;
                        for (var t = at || ft(), n = 1 - ((t = Math.max(0, m.startTime + m.duration - t)) / m.duration || 0), i = 0, o = m.tweens.length; i < o; i++) m.tweens[i].run(n);
                        return f.notifyWith(e, [m, n, t]), n < 1 && o ? t : (o || f.notifyWith(e, [m, 1, 0]), f.resolveWith(e, [m]), !1);
                    },
                    m = f.promise({
                        elem: e,
                        props: k.extend({}, t),
                        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: at || ft(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            return (n = k.Tween(e, m.opts, t, n, m.opts.specialEasing[t] || m.opts.easing)), m.tweens.push(n), n;
                        },
                        stop: function (t) {
                            var n = 0,
                                i = t ? m.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n < i; n++) m.tweens[n].run(1);
                            return t ? (f.notifyWith(e, [m, 1, 0]), f.resolveWith(e, [m, t])) : f.rejectWith(e, [m, t]), this;
                        },
                    }),
                    g = m.props,
                    v = g,
                    y = m.opts.specialEasing;
                for (a in v)
                    if (((c = y[(s = X(a))]), (l = v[a]), Array.isArray(l) && ((c = l[1]), (l = v[a] = l[0])), a !== s && ((v[s] = l), delete v[a]), (u = k.cssHooks[s]) && "expand" in u))
                        for (a in ((l = u.expand(l)), delete v[s], l)) a in v || ((v[a] = l[a]), (y[a] = c));
                    else y[s] = c;
                for (; d < p; d++) if ((i = gt.prefilters[d].call(m, e, g, m.opts))) return o(i.stop) && (k._queueHooks(m.elem, m.opts.queue).stop = i.stop.bind(i)), i;
                return (
                    k.map(g, mt, m),
                    o(m.opts.start) && m.opts.start.call(e, m),
                    m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always),
                    k.fx.timer(k.extend(h, { elem: e, anim: m, queue: m.opts.queue })),
                    m
                );
            }
            (k.Animation = k.extend(gt, {
                tweeners: {
                    "*": [
                        function (e, t) {
                            var n = this.createTween(e, t);
                            return ae(n.elem, e, re.exec(t), n), n;
                        },
                    ],
                },
                tweener: function (e, t) {
                    for (var n, i = 0, r = (e = o(e) ? ((t = e), ["*"]) : e.match(q)).length; i < r; i++) (n = e[i]), (gt.tweeners[n] = gt.tweeners[n] || []), gt.tweeners[n].unshift(t);
                },
                prefilters: [
                    function (e, t, n) {
                        var i,
                            r,
                            o,
                            a,
                            s,
                            c,
                            l,
                            u = "width" in t || "height" in t,
                            d = this,
                            p = {},
                            f = e.style,
                            h = e.nodeType && ne(e),
                            m = G.get(e, "fxshow");
                        for (i in (n.queue ||
                            (null == (a = k._queueHooks(e, "fx")).unqueued &&
                                ((a.unqueued = 0),
                                (s = a.empty.fire),
                                (a.empty.fire = function () {
                                    a.unqueued || s();
                                })),
                            a.unqueued++,
                            d.always(function () {
                                d.always(function () {
                                    a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
                                });
                            })),
                        t))
                            if (((r = t[i]), ut.test(r))) {
                                if ((delete t[i], (o = o || "toggle" === r), r === (h ? "hide" : "show"))) {
                                    if ("show" !== r || !m || void 0 === m[i]) continue;
                                    h = !0;
                                }
                                p[i] = (m && m[i]) || k.style(e, i);
                            }
                        if ((c = !k.isEmptyObject(t)) || !k.isEmptyObject(p))
                            for (i in (u &&
                                1 === e.nodeType &&
                                ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                                null == (l = m && m.display) && (l = G.get(e, "display")),
                                "none" === (u = k.css(e, "display")) && (l ? (u = l) : (ce([e], !0), (l = e.style.display || l), (u = k.css(e, "display")), ce([e]))),
                                ("inline" === u || ("inline-block" === u && null != l)) &&
                                    "none" === k.css(e, "float") &&
                                    (c ||
                                        (d.done(function () {
                                            f.display = l;
                                        }),
                                        null == l && ((u = f.display), (l = "none" === u ? "" : u))),
                                    (f.display = "inline-block"))),
                            n.overflow &&
                                ((f.overflow = "hidden"),
                                d.always(function () {
                                    (f.overflow = n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2]);
                                })),
                            (c = !1),
                            p))
                                c ||
                                    (m ? "hidden" in m && (h = m.hidden) : (m = G.access(e, "fxshow", { display: l })),
                                    o && (m.hidden = !h),
                                    h && ce([e], !0),
                                    d.done(function () {
                                        for (i in (h || ce([e]), G.remove(e, "fxshow"), p)) k.style(e, i, p[i]);
                                    })),
                                    (c = mt(h ? m[i] : 0, i, d)),
                                    i in m || ((m[i] = c.start), h && ((c.end = c.start), (c.start = 0)));
                    },
                ],
                prefilter: function (e, t) {
                    t ? gt.prefilters.unshift(e) : gt.prefilters.push(e);
                },
            })),
                (k.speed = function (e, t, n) {
                    var i = e && "object" == typeof e ? k.extend({}, e) : { complete: n || (!n && t) || (o(e) && e), duration: e, easing: (n && t) || (t && !o(t) && t) };
                    return (
                        k.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in k.fx.speeds ? (i.duration = k.fx.speeds[i.duration]) : (i.duration = k.fx.speeds._default)),
                        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                        (i.old = i.complete),
                        (i.complete = function () {
                            o(i.old) && i.old.call(this), i.queue && k.dequeue(this, i.queue);
                        }),
                        i
                    );
                }),
                k.fn.extend({
                    fadeTo: function (e, t, n, i) {
                        return this.filter(ne).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
                    },
                    animate: function (e, t, n, i) {
                        function r() {
                            var t = gt(this, k.extend({}, e), a);
                            (o || G.get(this, "finish")) && t.stop(!0);
                        }
                        var o = k.isEmptyObject(e),
                            a = k.speed(t, n, i);
                        return (r.finish = r), o || !1 === a.queue ? this.each(r) : this.queue(a.queue, r);
                    },
                    stop: function (e, t, n) {
                        function i(e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        }
                        return (
                            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                            t && !1 !== e && this.queue(e || "fx", []),
                            this.each(function () {
                                var t = !0,
                                    r = null != e && e + "queueHooks",
                                    o = k.timers,
                                    a = G.get(this);
                                if (r) a[r] && a[r].stop && i(a[r]);
                                else for (r in a) a[r] && a[r].stop && dt.test(r) && i(a[r]);
                                for (r = o.length; r--; ) o[r].elem !== this || (null != e && o[r].queue !== e) || (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                                (!t && n) || k.dequeue(this, e);
                            })
                        );
                    },
                    finish: function (e) {
                        return (
                            !1 !== e && (e = e || "fx"),
                            this.each(function () {
                                var t,
                                    n = G.get(this),
                                    i = n[e + "queue"],
                                    r = n[e + "queueHooks"],
                                    o = k.timers,
                                    a = i ? i.length : 0;
                                for (n.finish = !0, k.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                k.each(["toggle", "show", "hide"], function (e, t) {
                    var n = k.fn[t];
                    k.fn[t] = function (e, i, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ht(t, !0), e, i, r);
                    };
                }),
                k.each({ slideDown: ht("show"), slideUp: ht("hide"), slideToggle: ht("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                    k.fn[e] = function (e, n, i) {
                        return this.animate(t, e, n, i);
                    };
                }),
                (k.timers = []),
                (k.fx.tick = function () {
                    var e,
                        t = 0,
                        n = k.timers;
                    for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || k.fx.stop(), (at = void 0);
                }),
                (k.fx.timer = function (e) {
                    k.timers.push(e), k.fx.start();
                }),
                (k.fx.interval = 13),
                (k.fx.start = function () {
                    st || ((st = !0), pt());
                }),
                (k.fx.stop = function () {
                    st = null;
                }),
                (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (k.fn.delay = function (e, t) {
                    return (
                        (e = (k.fx && k.fx.speeds[e]) || e),
                        this.queue((t = t || "fx"), function (t, i) {
                            var r = n.setTimeout(t, e);
                            i.stop = function () {
                                n.clearTimeout(r);
                            };
                        })
                    );
                }),
                (ct = c.createElement("input")),
                (lt = c.createElement("select").appendChild(c.createElement("option"))),
                (ct.type = "checkbox"),
                (b.checkOn = "" !== ct.value),
                (b.optSelected = lt.selected),
                ((ct = c.createElement("input")).value = "t"),
                (ct.type = "radio"),
                (b.radioValue = "t" === ct.value);
            var vt,
                yt = k.expr.attrHandle,
                bt =
                    (k.fn.extend({
                        attr: function (e, t) {
                            return J(this, k.attr, e, t, 1 < arguments.length);
                        },
                        removeAttr: function (e) {
                            return this.each(function () {
                                k.removeAttr(this, e);
                            });
                        },
                    }),
                    k.extend({
                        attr: function (e, t, n) {
                            var i,
                                r,
                                o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o)
                                return void 0 === e.getAttribute
                                    ? k.prop(e, t, n)
                                    : ((1 === o && k.isXMLDoc(e)) || (r = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? vt : void 0)),
                                      void 0 !== n
                                          ? null === n
                                              ? void k.removeAttr(e, t)
                                              : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                              ? i
                                              : (e.setAttribute(t, n + ""), n)
                                          : (r && "get" in r && null !== (i = r.get(e, t))) || null != (i = k.find.attr(e, t))
                                          ? i
                                          : void 0);
                        },
                        attrHooks: {
                            type: {
                                set: function (e, t) {
                                    var n;
                                    if (!b.radioValue && "radio" === t && D(e, "input")) return (n = e.value), e.setAttribute("type", t), n && (e.value = n), t;
                                },
                            },
                        },
                        removeAttr: function (e, t) {
                            var n,
                                i = 0,
                                r = t && t.match(q);
                            if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
                        },
                    }),
                    (vt = {
                        set: function (e, t, n) {
                            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
                        },
                    }),
                    k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
                        var n = yt[t] || k.find.attr;
                        yt[t] = function (e, t, i) {
                            var r,
                                o,
                                a = t.toLowerCase();
                            return i || ((o = yt[a]), (yt[a] = r), (r = null != n(e, t, i) ? a : null), (yt[a] = o)), r;
                        };
                    }),
                    /^(?:input|select|textarea|button)$/i),
                xt = /^(?:a|area)$/i;
            function wt(e) {
                return (e.match(q) || []).join(" ");
            }
            function Tt(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function kt(e) {
                return Array.isArray(e) ? e : ("string" == typeof e && e.match(q)) || [];
            }
            function Nt(e) {
                e.stopPropagation();
            }
            k.fn.extend({
                prop: function (e, t) {
                    return J(this, k.prop, e, t, 1 < arguments.length);
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[k.propFix[e] || e];
                    });
                },
            }),
                k.extend({
                    prop: function (e, t, n) {
                        var i,
                            r,
                            o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return (
                                (1 === o && k.isXMLDoc(e)) || ((t = k.propFix[t] || t), (r = k.propHooks[t])),
                                void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = k.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : bt.test(e.nodeName) || (xt.test(e.nodeName) && e.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                b.optSelected ||
                    (k.propHooks.selected = {
                        get: function (e) {
                            return (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex, null;
                        },
                        set: function (e) {
                            (e = e.parentNode) && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                        },
                    }),
                k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    k.propFix[this.toLowerCase()] = this;
                }),
                k.fn.extend({
                    addClass: function (e) {
                        var t,
                            n,
                            i,
                            r,
                            a,
                            s,
                            c = 0;
                        if (o(e))
                            return this.each(function (t) {
                                k(this).addClass(e.call(this, t, Tt(this)));
                            });
                        if ((t = kt(e)).length)
                            for (; (n = this[c++]); )
                                if (((s = Tt(n)), (i = 1 === n.nodeType && " " + wt(s) + " "))) {
                                    for (a = 0; (r = t[a++]); ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                    s !== (s = wt(i)) && n.setAttribute("class", s);
                                }
                        return this;
                    },
                    removeClass: function (e) {
                        var t,
                            n,
                            i,
                            r,
                            a,
                            s,
                            c = 0;
                        if (o(e))
                            return this.each(function (t) {
                                k(this).removeClass(e.call(this, t, Tt(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((t = kt(e)).length)
                            for (; (n = this[c++]); )
                                if (((s = Tt(n)), (i = 1 === n.nodeType && " " + wt(s) + " "))) {
                                    for (a = 0; (r = t[a++]); ) for (; -1 < i.indexOf(" " + r + " "); ) i = i.replace(" " + r + " ", " ");
                                    s !== (s = wt(i)) && n.setAttribute("class", s);
                                }
                        return this;
                    },
                    toggleClass: function (e, t) {
                        var n = typeof e,
                            i = "string" == n || Array.isArray(e);
                        return "boolean" == typeof t && i
                            ? t
                                ? this.addClass(e)
                                : this.removeClass(e)
                            : o(e)
                            ? this.each(function (n) {
                                  k(this).toggleClass(e.call(this, n, Tt(this), t), t);
                              })
                            : this.each(function () {
                                  var t, r, o, a;
                                  if (i) for (r = 0, o = k(this), a = kt(e); (t = a[r++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                  else (void 0 !== e && "boolean" != n) || ((t = Tt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", (!t && !1 !== e && G.get(this, "__className__")) || ""));
                              });
                    },
                    hasClass: function (e) {
                        for (var t, n = 0, i = " " + e + " "; (t = this[n++]); ) if (1 === t.nodeType && -1 < (" " + wt(Tt(t)) + " ").indexOf(i)) return !0;
                        return !1;
                    },
                });
            var Pt = /\r/g,
                Ct =
                    (k.fn.extend({
                        val: function (e) {
                            var t,
                                n,
                                i,
                                r = this[0];
                            return arguments.length
                                ? ((i = o(e)),
                                  this.each(function (n) {
                                      1 === this.nodeType &&
                                          (null == (n = i ? e.call(this, n, k(this).val()) : e)
                                              ? (n = "")
                                              : "number" == typeof n
                                              ? (n += "")
                                              : Array.isArray(n) &&
                                                (n = k.map(n, function (e) {
                                                    return null == e ? "" : e + "";
                                                })),
                                          ((t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, n, "value")) || (this.value = n));
                                  }))
                                : r
                                ? (t = k.valHooks[r.type] || k.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
                                    ? n
                                    : "string" == typeof (n = r.value)
                                    ? n.replace(Pt, "")
                                    : null == n
                                    ? ""
                                    : n
                                : void 0;
                        },
                    }),
                    k.extend({
                        valHooks: {
                            option: {
                                get: function (e) {
                                    var t = k.find.attr(e, "value");
                                    return null != t ? t : wt(k.text(e));
                                },
                            },
                            select: {
                                get: function (e) {
                                    for (var t, n = e.options, i = e.selectedIndex, r = "select-one" === e.type, o = r ? null : [], a = r ? i + 1 : n.length, s = i < 0 ? a : r ? i : 0; s < a; s++)
                                        if (((t = n[s]).selected || s === i) && !t.disabled && (!t.parentNode.disabled || !D(t.parentNode, "optgroup"))) {
                                            if (((t = k(t).val()), r)) return t;
                                            o.push(t);
                                        }
                                    return o;
                                },
                                set: function (e, t) {
                                    for (var n, i, r = e.options, o = k.makeArray(t), a = r.length; a--; ) ((i = r[a]).selected = -1 < k.inArray(k.valHooks.option.get(i), o)) && (n = !0);
                                    return n || (e.selectedIndex = -1), o;
                                },
                            },
                        },
                    }),
                    k.each(["radio", "checkbox"], function () {
                        (k.valHooks[this] = {
                            set: function (e, t) {
                                if (Array.isArray(t)) return (e.checked = -1 < k.inArray(k(e).val(), t));
                            },
                        }),
                            b.checkOn ||
                                (k.valHooks[this].get = function (e) {
                                    return null === e.getAttribute("value") ? "on" : e.value;
                                });
                    }),
                    (b.focusin = "onfocusin" in n),
                    /^(?:focusinfocus|focusoutblur)$/),
                St =
                    (k.extend(k.event, {
                        trigger: function (e, t, i, r) {
                            var s,
                                l,
                                u,
                                d,
                                p,
                                f,
                                h,
                                m = [i || c],
                                v = g.call(e, "type") ? e.type : e,
                                y = g.call(e, "namespace") ? e.namespace.split(".") : [],
                                b = (h = l = i = i || c);
                            if (
                                3 !== i.nodeType &&
                                8 !== i.nodeType &&
                                !Ct.test(v + k.event.triggered) &&
                                (-1 < v.indexOf(".") && ((v = (y = v.split(".")).shift()), y.sort()),
                                (d = v.indexOf(":") < 0 && "on" + v),
                                ((e = e[k.expando] ? e : new k.Event(v, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                                (e.namespace = y.join(".")),
                                (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                (e.result = void 0),
                                e.target || (e.target = i),
                                (t = null == t ? [e] : k.makeArray(t, [e])),
                                (f = k.event.special[v] || {}),
                                r || !f.trigger || !1 !== f.trigger.apply(i, t))
                            ) {
                                if (!r && !f.noBubble && !a(i)) {
                                    for (u = f.delegateType || v, Ct.test(u + v) || (b = b.parentNode); b; b = b.parentNode) m.push(b), (l = b);
                                    l === (i.ownerDocument || c) && m.push(l.defaultView || l.parentWindow || n);
                                }
                                for (s = 0; (b = m[s++]) && !e.isPropagationStopped(); )
                                    (h = b),
                                        (e.type = 1 < s ? u : f.bindType || v),
                                        (p = (G.get(b, "events") || {})[e.type] && G.get(b, "handle")) && p.apply(b, t),
                                        (p = d && b[d]) && p.apply && Q(b) && ((e.result = p.apply(b, t)), !1 === e.result && e.preventDefault());
                                return (
                                    (e.type = v),
                                    r ||
                                        e.isDefaultPrevented() ||
                                        (f._default && !1 !== f._default.apply(m.pop(), t)) ||
                                        !Q(i) ||
                                        (d &&
                                            o(i[v]) &&
                                            !a(i) &&
                                            ((l = i[d]) && (i[d] = null),
                                            (k.event.triggered = v),
                                            e.isPropagationStopped() && h.addEventListener(v, Nt),
                                            i[v](),
                                            e.isPropagationStopped() && h.removeEventListener(v, Nt),
                                            (k.event.triggered = void 0),
                                            l && (i[d] = l))),
                                    e.result
                                );
                            }
                        },
                        simulate: function (e, t, n) {
                            (n = k.extend(new k.Event(), n, { type: e, isSimulated: !0 })), k.event.trigger(n, null, t);
                        },
                    }),
                    k.fn.extend({
                        trigger: function (e, t) {
                            return this.each(function () {
                                k.event.trigger(e, t, this);
                            });
                        },
                        triggerHandler: function (e, t) {
                            var n = this[0];
                            if (n) return k.event.trigger(e, t, n, !0);
                        },
                    }),
                    b.focusin ||
                        k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                            function n(e) {
                                k.event.simulate(t, e.target, k.event.fix(e));
                            }
                            k.event.special[t] = {
                                setup: function () {
                                    var i = this.ownerDocument || this,
                                        r = G.access(i, t);
                                    r || i.addEventListener(e, n, !0), G.access(i, t, (r || 0) + 1);
                                },
                                teardown: function () {
                                    var i = this.ownerDocument || this,
                                        r = G.access(i, t) - 1;
                                    r ? G.access(i, t, r) : (i.removeEventListener(e, n, !0), G.remove(i, t));
                                },
                            };
                        }),
                    n.location),
                At = Date.now(),
                Dt = /\?/,
                It =
                    ((k.parseXML = function (e) {
                        var t;
                        if (!e || "string" != typeof e) return null;
                        try {
                            t = new n.DOMParser().parseFromString(e, "text/xml");
                        } catch (e) {
                            t = void 0;
                        }
                        return (t && !t.getElementsByTagName("parsererror").length) || k.error("Invalid XML: " + e), t;
                    }),
                    /\[\]$/),
                Et = /\r?\n/g,
                _t = /^(?:submit|button|image|reset|file)$/i,
                jt = /^(?:input|select|textarea|keygen)/i;
            (k.param = function (e, t) {
                function n(e, t) {
                    (t = o(t) ? t() : t), (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
                }
                var i,
                    r = [];
                if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
                    k.each(e, function () {
                        n(this.name, this.value);
                    });
                else
                    for (i in e)
                        !(function e(t, n, i, r) {
                            if (Array.isArray(n))
                                k.each(n, function (n, o) {
                                    i || It.test(t) ? r(t, o) : e(t + "[" + ("object" == typeof o && null != o ? n : "") + "]", o, i, r);
                                });
                            else if (i || "object" !== T(n)) r(t, n);
                            else for (var o in n) e(t + "[" + o + "]", n[o], i, r);
                        })(i, e[i], t, n);
                return r.join("&");
            }),
                k.fn.extend({
                    serialize: function () {
                        return k.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = k.prop(this, "elements");
                            return e ? k.makeArray(e) : this;
                        })
                            .filter(function () {
                                var e = this.type;
                                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !_t.test(e) && (this.checked || !le.test(e));
                            })
                            .map(function (e, t) {
                                var n = k(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? k.map(n, function (e) {
                                          return { name: t.name, value: e.replace(Et, "\r\n") };
                                      })
                                    : { name: t.name, value: n.replace(Et, "\r\n") };
                            })
                            .get();
                    },
                });
            var Lt = /%20/g,
                Ot = /#.*$/,
                Mt = /([?&])_=[^&]*/,
                qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                $t = /^(?:GET|HEAD)$/,
                Rt = /^\/\//,
                Bt = {},
                Ht = {},
                Wt = "*/".concat("*"),
                Vt = c.createElement("a");
            function Jt(e) {
                return function (t, n) {
                    "string" != typeof t && ((n = t), (t = "*"));
                    var i,
                        r = 0,
                        a = t.toLowerCase().match(q) || [];
                    if (o(n)) for (; (i = a[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
                };
            }
            function Ft(e, t, n, i) {
                var r = {},
                    o = e === Ht;
                function a(s) {
                    var c;
                    return (
                        (r[s] = !0),
                        k.each(e[s] || [], function (e, s) {
                            return "string" != typeof (s = s(t, n, i)) || o || r[s] ? (o ? !(c = s) : void 0) : (t.dataTypes.unshift(s), a(s), !1);
                        }),
                        c
                    );
                }
                return a(t.dataTypes[0]) || (!r["*"] && a("*"));
            }
            function Ut(e, t) {
                var n,
                    i,
                    r = k.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((r[n] ? e : (i = i || {}))[n] = t[n]);
                return i && k.extend(!0, e, i), e;
            }
            (Vt.href = St.href),
                k.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: St.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: { "*": Wt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (e, t) {
                        return t ? Ut(Ut(e, k.ajaxSettings), t) : Ut(k.ajaxSettings, e);
                    },
                    ajaxPrefilter: Jt(Bt),
                    ajaxTransport: Jt(Ht),
                    ajax: function (e, t) {
                        "object" == typeof e && ((t = e), (e = void 0));
                        var i,
                            r,
                            o,
                            a,
                            s,
                            l,
                            u,
                            d,
                            p = k.ajaxSetup({}, (t = t || {})),
                            f = p.context || p,
                            h = p.context && (f.nodeType || f.jquery) ? k(f) : k.event,
                            m = k.Deferred(),
                            g = k.Callbacks("once memory"),
                            v = p.statusCode || {},
                            y = {},
                            b = {},
                            x = "canceled",
                            w = {
                                readyState: 0,
                                getResponseHeader: function (e) {
                                    var t;
                                    if (l) {
                                        if (!a) for (a = {}; (t = qt.exec(o)); ) a[t[1].toLowerCase()] = t[2];
                                        t = a[e.toLowerCase()];
                                    }
                                    return null == t ? null : t;
                                },
                                getAllResponseHeaders: function () {
                                    return l ? o : null;
                                },
                                setRequestHeader: function (e, t) {
                                    return null == l && ((e = b[e.toLowerCase()] = b[e.toLowerCase()] || e), (y[e] = t)), this;
                                },
                                overrideMimeType: function (e) {
                                    return null == l && (p.mimeType = e), this;
                                },
                                statusCode: function (e) {
                                    if (e)
                                        if (l) w.always(e[w.status]);
                                        else for (var t in e) v[t] = [v[t], e[t]];
                                    return this;
                                },
                                abort: function (e) {
                                    return (e = e || x), i && i.abort(e), T(0, e), this;
                                },
                            };
                        if (
                            (m.promise(w),
                            (p.url = ((e || p.url || St.href) + "").replace(Rt, St.protocol + "//")),
                            (p.type = t.method || t.type || p.method || p.type),
                            (p.dataTypes = (p.dataType || "*").toLowerCase().match(q) || [""]),
                            null == p.crossDomain)
                        ) {
                            e = c.createElement("a");
                            try {
                                (e.href = p.url), (e.href = e.href), (p.crossDomain = Vt.protocol + "//" + Vt.host != e.protocol + "//" + e.host);
                            } catch (e) {
                                p.crossDomain = !0;
                            }
                        }
                        if ((p.data && p.processData && "string" != typeof p.data && (p.data = k.param(p.data, p.traditional)), Ft(Bt, p, t, w), l)) return w;
                        for (d in ((u = k.event && p.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
                        (p.type = p.type.toUpperCase()),
                        (p.hasContent = !$t.test(p.type)),
                        (r = p.url.replace(Ot, "")),
                        p.hasContent
                            ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Lt, "+"))
                            : ((e = p.url.slice(r.length)),
                              p.data && (p.processData || "string" == typeof p.data) && ((r += (Dt.test(r) ? "&" : "?") + p.data), delete p.data),
                              !1 === p.cache && ((r = r.replace(Mt, "$1")), (e = (Dt.test(r) ? "&" : "?") + "_=" + At++ + e)),
                              (p.url = r + e)),
                        p.ifModified && (k.lastModified[r] && w.setRequestHeader("If-Modified-Since", k.lastModified[r]), k.etag[r] && w.setRequestHeader("If-None-Match", k.etag[r])),
                        ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) && w.setRequestHeader("Content-Type", p.contentType),
                        w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : p.accepts["*"]),
                        p.headers))
                            w.setRequestHeader(d, p.headers[d]);
                        if (p.beforeSend && (!1 === p.beforeSend.call(f, w, p) || l)) return w.abort();
                        if (((x = "abort"), g.add(p.complete), w.done(p.success), w.fail(p.error), (i = Ft(Ht, p, t, w)))) {
                            if (((w.readyState = 1), u && h.trigger("ajaxSend", [w, p]), l)) return w;
                            p.async &&
                                0 < p.timeout &&
                                (s = n.setTimeout(function () {
                                    w.abort("timeout");
                                }, p.timeout));
                            try {
                                (l = !1), i.send(y, T);
                            } catch (e) {
                                if (l) throw e;
                                T(-1, e);
                            }
                        } else T(-1, "No Transport");
                        function T(e, t, a, c) {
                            var d,
                                y,
                                b,
                                x = t;
                            l ||
                                ((l = !0),
                                s && n.clearTimeout(s),
                                (i = void 0),
                                (o = c || ""),
                                (w.readyState = 0 < e ? 4 : 0),
                                (c = (200 <= e && e < 300) || 304 === e),
                                a &&
                                    (b = (function (e, t, n) {
                                        for (var i, r, o, a, s = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                        if (i)
                                            for (r in s)
                                                if (s[r] && s[r].test(i)) {
                                                    c.unshift(r);
                                                    break;
                                                }
                                        if (c[0] in n) o = c[0];
                                        else {
                                            for (r in n) {
                                                if (!c[0] || e.converters[r + " " + c[0]]) {
                                                    o = r;
                                                    break;
                                                }
                                                a = a || r;
                                            }
                                            o = o || a;
                                        }
                                        if (o) return o !== c[0] && c.unshift(o), n[o];
                                    })(p, w, a)),
                                (b = (function (e, t, n, i) {
                                    var r,
                                        o,
                                        a,
                                        s,
                                        c,
                                        l = {},
                                        u = e.dataTypes.slice();
                                    if (u[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                    for (o = u.shift(); o; )
                                        if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (c = o), (o = u.shift())))
                                            if ("*" === o) o = c;
                                            else if ("*" !== c && c !== o) {
                                                if (!(a = l[c + " " + o] || l["* " + o]))
                                                    for (r in l)
                                                        if ((s = r.split(" "))[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                                            !0 === a ? (a = l[r]) : !0 !== l[r] && ((o = s[0]), u.unshift(s[1]));
                                                            break;
                                                        }
                                                if (!0 !== a)
                                                    if (a && e.throws) t = a(t);
                                                    else
                                                        try {
                                                            t = a(t);
                                                        } catch (e) {
                                                            return { state: "parsererror", error: a ? e : "No conversion from " + c + " to " + o };
                                                        }
                                            }
                                    return { state: "success", data: t };
                                })(p, b, w, c)),
                                c
                                    ? (p.ifModified && ((a = w.getResponseHeader("Last-Modified")) && (k.lastModified[r] = a), (a = w.getResponseHeader("etag")) && (k.etag[r] = a)),
                                      204 === e || "HEAD" === p.type ? (x = "nocontent") : 304 === e ? (x = "notmodified") : ((x = b.state), (d = b.data), (c = !(y = b.error))))
                                    : ((y = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                                (w.status = e),
                                (w.statusText = (t || x) + ""),
                                c ? m.resolveWith(f, [d, x, w]) : m.rejectWith(f, [w, x, y]),
                                w.statusCode(v),
                                (v = void 0),
                                u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [w, p, c ? d : y]),
                                g.fireWith(f, [w, x]),
                                u && (h.trigger("ajaxComplete", [w, p]), --k.active || k.event.trigger("ajaxStop")));
                        }
                        return w;
                    },
                    getJSON: function (e, t, n) {
                        return k.get(e, t, n, "json");
                    },
                    getScript: function (e, t) {
                        return k.get(e, void 0, t, "script");
                    },
                }),
                k.each(["get", "post"], function (e, t) {
                    k[t] = function (e, n, i, r) {
                        return o(n) && ((r = r || i), (i = n), (n = void 0)), k.ajax(k.extend({ url: e, type: t, dataType: r, data: n, success: i }, k.isPlainObject(e) && e));
                    };
                }),
                (k._evalUrl = function (e) {
                    return k.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
                }),
                k.fn.extend({
                    wrapAll: function (e) {
                        return (
                            this[0] &&
                                (o(e) && (e = e.call(this[0])),
                                (e = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && e.insertBefore(this[0]),
                                e
                                    .map(function () {
                                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                        return e;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (e) {
                        return o(e)
                            ? this.each(function (t) {
                                  k(this).wrapInner(e.call(this, t));
                              })
                            : this.each(function () {
                                  var t = k(this),
                                      n = t.contents();
                                  n.length ? n.wrapAll(e) : t.append(e);
                              });
                    },
                    wrap: function (e) {
                        var t = o(e);
                        return this.each(function (n) {
                            k(this).wrapAll(t ? e.call(this, n) : e);
                        });
                    },
                    unwrap: function (e) {
                        return (
                            this.parent(e)
                                .not("body")
                                .each(function () {
                                    k(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (k.expr.pseudos.hidden = function (e) {
                    return !k.expr.pseudos.visible(e);
                }),
                (k.expr.pseudos.visible = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }),
                (k.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (e) {}
                });
            var zt = { 0: 200, 1223: 204 },
                Xt = k.ajaxSettings.xhr(),
                Qt =
                    ((b.cors = !!Xt && "withCredentials" in Xt),
                    (b.ajax = Xt = !!Xt),
                    k.ajaxTransport(function (e) {
                        var t, i;
                        if (b.cors || (Xt && !e.crossDomain))
                            return {
                                send: function (r, o) {
                                    var a,
                                        s = e.xhr();
                                    if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                    for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) s.setRequestHeader(a, r[a]);
                                    (t = function (e) {
                                        return function () {
                                            t &&
                                                ((t = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                                "abort" === e
                                                    ? s.abort()
                                                    : "error" === e
                                                    ? "number" != typeof s.status
                                                        ? o(0, "error")
                                                        : o(s.status, s.statusText)
                                                    : o(
                                                          zt[s.status] || s.status,
                                                          s.statusText,
                                                          "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                          s.getAllResponseHeaders()
                                                      ));
                                        };
                                    }),
                                        (s.onload = t()),
                                        (i = s.onerror = s.ontimeout = t("error")),
                                        void 0 !== s.onabort
                                            ? (s.onabort = i)
                                            : (s.onreadystatechange = function () {
                                                  4 === s.readyState &&
                                                      n.setTimeout(function () {
                                                          t && i();
                                                      });
                                              }),
                                        (t = t("abort"));
                                    try {
                                        s.send((e.hasContent && e.data) || null);
                                    } catch (r) {
                                        if (t) throw r;
                                    }
                                },
                                abort: function () {
                                    t && t();
                                },
                            };
                    }),
                    k.ajaxPrefilter(function (e) {
                        e.crossDomain && (e.contents.script = !1);
                    }),
                    k.ajaxSetup({
                        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                        contents: { script: /\b(?:java|ecma)script\b/ },
                        converters: {
                            "text script": function (e) {
                                return k.globalEval(e), e;
                            },
                        },
                    }),
                    k.ajaxPrefilter("script", function (e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                    }),
                    k.ajaxTransport("script", function (e) {
                        var t, n;
                        if (e.crossDomain)
                            return {
                                send: function (i, r) {
                                    (t = k("<script>")
                                        .prop({ charset: e.scriptCharset, src: e.url })
                                        .on(
                                            "load error",
                                            (n = function (e) {
                                                t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                            })
                                        )),
                                        c.head.appendChild(t[0]);
                                },
                                abort: function () {
                                    n && n();
                                },
                            };
                    }),
                    []),
                Kt = /(=)\?(?=&|$)|\?\?/,
                Gt =
                    (k.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function () {
                            var e = Qt.pop() || k.expando + "_" + At++;
                            return (this[e] = !0), e;
                        },
                    }),
                    k.ajaxPrefilter("json jsonp", function (e, t, i) {
                        var r,
                            a,
                            s,
                            c = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
                        if (c || "jsonp" === e.dataTypes[0])
                            return (
                                (r = e.jsonpCallback = o(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                                c ? (e[c] = e[c].replace(Kt, "$1" + r)) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                                (e.converters["script json"] = function () {
                                    return s || k.error(r + " was not called"), s[0];
                                }),
                                (e.dataTypes[0] = "json"),
                                (a = n[r]),
                                (n[r] = function () {
                                    s = arguments;
                                }),
                                i.always(function () {
                                    void 0 === a ? k(n).removeProp(r) : (n[r] = a), e[r] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(r)), s && o(a) && a(s[0]), (s = a = void 0);
                                }),
                                "script"
                            );
                    }),
                    (b.createHTMLDocument = (((s = c.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === s.childNodes.length)),
                    (k.parseHTML = function (e, t, n) {
                        return "string" != typeof e
                            ? []
                            : ("boolean" == typeof t && ((n = t), (t = !1)),
                              t || (b.createHTMLDocument ? (((i = (t = c.implementation.createHTMLDocument("")).createElement("base")).href = c.location.href), t.head.appendChild(i)) : (t = c)),
                              (i = !n && []),
                              (n = I.exec(e)) ? [t.createElement(n[1])] : ((n = ge([e], t, i)), i && i.length && k(i).remove(), k.merge([], n.childNodes)));
                        var i;
                    }),
                    (k.fn.load = function (e, t, n) {
                        var i,
                            r,
                            a,
                            s = this,
                            c = e.indexOf(" ");
                        return (
                            -1 < c && ((i = wt(e.slice(c))), (e = e.slice(0, c))),
                            o(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                            0 < s.length &&
                                k
                                    .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                                    .done(function (e) {
                                        (a = arguments), s.html(i ? k("<div>").append(k.parseHTML(e)).find(i) : e);
                                    })
                                    .always(
                                        n &&
                                            function (e, t) {
                                                s.each(function () {
                                                    n.apply(this, a || [e.responseText, t, e]);
                                                });
                                            }
                                    ),
                            this
                        );
                    }),
                    k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                        k.fn[t] = function (e) {
                            return this.on(t, e);
                        };
                    }),
                    (k.expr.pseudos.animated = function (e) {
                        return k.grep(k.timers, function (t) {
                            return e === t.elem;
                        }).length;
                    }),
                    (k.offset = {
                        setOffset: function (e, t, n) {
                            var i,
                                r,
                                a,
                                s,
                                c = k.css(e, "position"),
                                l = k(e),
                                u = {};
                            "static" === c && (e.style.position = "relative"),
                                (a = l.offset()),
                                (i = k.css(e, "top")),
                                (s = k.css(e, "left")),
                                (c = ("absolute" === c || "fixed" === c) && -1 < (i + s).indexOf("auto") ? ((r = (c = l.position()).top), c.left) : ((r = parseFloat(i) || 0), parseFloat(s) || 0)),
                                null != (t = o(t) ? t.call(e, n, k.extend({}, a)) : t).top && (u.top = t.top - a.top + r),
                                null != t.left && (u.left = t.left - a.left + c),
                                "using" in t ? t.using.call(e, u) : l.css(u);
                        },
                    }),
                    k.fn.extend({
                        offset: function (e) {
                            if (arguments.length)
                                return void 0 === e
                                    ? this
                                    : this.each(function (t) {
                                          k.offset.setOffset(this, e, t);
                                      });
                            var t,
                                n = this[0];
                            return n ? (n.getClientRects().length ? ((t = n.getBoundingClientRect()), (n = n.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                        },
                        position: function () {
                            if (this[0]) {
                                var e,
                                    t,
                                    n,
                                    i = this[0],
                                    r = { top: 0, left: 0 };
                                if ("fixed" === k.css(i, "position")) t = i.getBoundingClientRect();
                                else {
                                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"); ) e = e.parentNode;
                                    e && e !== i && 1 === e.nodeType && (((r = k(e).offset()).top += k.css(e, "borderTopWidth", !0)), (r.left += k.css(e, "borderLeftWidth", !0)));
                                }
                                return { top: t.top - r.top - k.css(i, "marginTop", !0), left: t.left - r.left - k.css(i, "marginLeft", !0) };
                            }
                        },
                        offsetParent: function () {
                            return this.map(function () {
                                for (var e = this.offsetParent; e && "static" === k.css(e, "position"); ) e = e.offsetParent;
                                return e || ve;
                            });
                        },
                    }),
                    k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                        var n = "pageYOffset" === t;
                        k.fn[e] = function (i) {
                            return J(
                                this,
                                function (e, i, r) {
                                    var o;
                                    if ((a(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === r)) return o ? o[t] : e[i];
                                    o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (e[i] = r);
                                },
                                e,
                                i,
                                arguments.length
                            );
                        };
                    }),
                    k.each(["top", "left"], function (e, t) {
                        k.cssHooks[t] = Xe(b.pixelPosition, function (e, n) {
                            if (n) return (n = ze(e, t)), Ve.test(n) ? k(e).position()[t] + "px" : n;
                        });
                    }),
                    k.each({ Height: "height", Width: "width" }, function (e, t) {
                        k.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                            k.fn[i] = function (r, o) {
                                var s = arguments.length && (n || "boolean" != typeof r),
                                    c = n || (!0 === r || !0 === o ? "margin" : "border");
                                return J(
                                    this,
                                    function (t, n, r) {
                                        var o;
                                        return a(t)
                                            ? 0 === i.indexOf("outer")
                                                ? t["inner" + e]
                                                : t.document.documentElement["client" + e]
                                            : 9 === t.nodeType
                                            ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                            : void 0 === r
                                            ? k.css(t, n, c)
                                            : k.style(t, n, r, c);
                                    },
                                    t,
                                    s ? r : void 0,
                                    s
                                );
                            };
                        });
                    }),
                    k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                        k.fn[t] = function (e, n) {
                            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
                        };
                    }),
                    k.fn.extend({
                        hover: function (e, t) {
                            return this.mouseenter(e).mouseleave(t || e);
                        },
                    }),
                    k.fn.extend({
                        bind: function (e, t, n) {
                            return this.on(e, null, t, n);
                        },
                        unbind: function (e, t) {
                            return this.off(e, null, t);
                        },
                        delegate: function (e, t, n, i) {
                            return this.on(t, e, n, i);
                        },
                        undelegate: function (e, t, n) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                        },
                    }),
                    (k.proxy = function (e, t) {
                        var n, i;
                        if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), o(e)))
                            return (
                                (n = u.call(arguments, 2)),
                                ((i = function () {
                                    return e.apply(t || this, n.concat(u.call(arguments)));
                                }).guid = e.guid = e.guid || k.guid++),
                                i
                            );
                    }),
                    (k.holdReady = function (e) {
                        e ? k.readyWait++ : k.ready(!0);
                    }),
                    (k.isArray = Array.isArray),
                    (k.parseJSON = JSON.parse),
                    (k.nodeName = D),
                    (k.isFunction = o),
                    (k.isWindow = a),
                    (k.camelCase = X),
                    (k.type = T),
                    (k.now = Date.now),
                    (k.isNumeric = function (e) {
                        var t = k.type(e);
                        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                    }),
                    void 0 !==
                        (i = function () {
                            return k;
                        }.apply(t, [])) && (e.exports = i),
                    n.jQuery),
                Yt = n.$;
            return (
                (k.noConflict = function (e) {
                    return n.$ === k && (n.$ = Yt), e && n.jQuery === k && (n.jQuery = Gt), k;
                }),
                r || (n.jQuery = n.$ = k),
                k
            );
        });
    },
    function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "rules", function () {
                return o;
            }),
            n.d(t, "addon", function () {
                return a;
            });
        t = n(0);
        var i = n.n(t),
            r = n(2),
            o = {
                translate: {
                    TAOBAO: {
                        basePrice: "#J_PriceName, #J_StrPriceModBox .tb-property-type",
                        promoPrice: ".tb-promo-price .tb-property-type",
                        stock: "dt:contains('數量'), dt:contains('数量')",
                        product: ".tb-amount-widget .mui-amount-unit",
                        size: "dt:contains('尺碼'), dt:contains('尺寸'), dt:contains('尺码'), dt:contains('参考身高'), dt:contains('鞋码'), dt:contains('大小描述')",
                        color: "dt:contains('顏色'), dt:contains('颜色分类'), dt:contains('颜色')",
                        stock_str: "em.tb-stock-tip, .tb-amount em",
                    },
                    TMALL: {
                        basePrice: "dt:contains('價格'), dt:contains('专柜价'), dt:contains('价格')",
                        promoPrice: "dt:contains('促銷價'), dt:contains('促销价'), dt:contains('狂欢价')",
                        stock: "dt:contains('數量'), dt:contains('数量')",
                        product: ".tb-amount-widget .mui-amount-unit",
                        size: "dt:contains('尺碼'), dt:contains('尺寸'), dt:contains('尺码'), dt:contains('套餐類型'), dt:contains('参考身高'), dt:contains('鞋码'), dt:contains('大小描述')",
                        color: "dt:contains('顏色'), dt:contains('颜色')",
                        stock_str: "#J_EmStock",
                        freight: "dt:contains('运费')",
                    },
                    cn1688: {
                        basePrice: "tr.price > td.price-title",
                        promoPrice: ".timer-txt",
                        stock: ".d-title:contains('采购量')",
                        product: "td.count .unit",
                        size: ".d-content .obj-sku .obj-title",
                        color: ".d-content .obj-leading .obj-title",
                        stock_str: "span.total",
                        condition: ".amount-title",
                    },
                },
                info: {
                    TAOBAO: {
                        shop: {
                            id_data_api: "#J_listBuyerOnView",
                            id_data_sellerid: "#J_Pine",
                            name_title: ".tb-shop-name a, .shop-name-title",
                            name_text: ".tb-shop-seller a",
                            link: ".tb-shop-name a, .tb-shop-seller a, .shop-name-link",
                            aliwangwang: ".ww-light",
                        },
                        product: {
                            id: "input[name=item_id]",
                            basePrice: "#J_StrPrice .tb-rmb-num, #J_StrPriceModBox .tb-rmb-num, #J_priceStd .tb-rmb-num",
                            promoPrice: "#J_PromoPrice .tb-rmb-num, #J_SPrice .tb-rmb-num, #J_PromoPriceNum",
                            hiddenPrice: "#J_PromoHd .tb-promo-type:contains('VIP')",
                            image: "#J_ThumbView, #J_ImgBooth",
                            title_content: "meta[property='og:title']",
                            title_data_title: ".tb-main-title",
                            saleLocation: "#J-From",
                            quantity: "#J_IptAmount, .mui-amount-input",
                            stock: "em.tb-stock-tip, .tb-amount em",
                        },
                        box_prepend: "#J_isSku, #J_isku, .tb-key",
                    },
                    TMALL: {
                        shop: {
                            id_shopid: "#dsr-userid",
                            id_eval: "meta[name='microscope-data']",
                            name_text: ".shopLink, .slogo-shopname strong",
                            name_value: "input[name=seller_nickname]",
                            name_data_nick: "span.ww-light",
                            link: ".hd-shop-name a, #J_DcShopArchive .enterShop, a.slogo-shopname, a.ShopHeader--board--1nOkGuN",
                            aliwangwang: "input[name=seller_nickname]",
                        },
                        product: {
                            id: "input[name=item_id]",
                            id_itemid: "#LineZing",
                            basePrice: "div.tm-fcs-panel > dl.tm-tagPrice-panel > dd > span, #J_StrPrice .tm-price, #J_StrPriceModBox .tm-price, #J_priceStd .tm-price",
                            promoPrice: "#J_PromoPrice .tm-price, #J_SPrice .tm-price, #J_PromoBox .tm-price, .Price--originPrice--1aJmU68 .Price--priceText--2nLbVda",
                            hiddenPrice: ".tm-promo-type:contains('vip')",
                            image: "#J_UlThumb img, .skuItemWrapper .current img",
                            title: "input[name=title]",
                            saleLocation: "#J_AddrSelectTrigger > span.mui_addr_tri_1",
                            quantity: "#J_IptAmount, .mui-amount-input, .quantityLine .countValueForPC",
                            stock: "#J_EmStock",
                        },
                        box_after: ".tm-fcs-panel",
                        box_prepend: ".Price--root--1CrVGjc",
                    },
                    cn1688: {
                        shop: {
                            id_data_mod_config: ".mod-detail-gallery",
                            id_data_seller_id: ".widget-custom-container .coupons-list-item",
                            name_json: "meta[property='og:product:nick']",
                            name_title: ".shop-info .base-info .company-name, .shopdetail .company-detail .company-name",
                            name_text: ".chinaname, .shop-info .base-info .company-name, .d-tab-company .company-name, .company-name .name",
                            link_href: ".shop-info .base-info > a, .companyName-box .logo >a, .chinaname, .enname, .enter-wp",
                            link_value: ".currentdomain",
                            aliwangwang_text: "#usermidid",
                            aliwangwang_json: "[data-alitalk]",
                        },
                        product: {
                            id_value: "#feedbackInfoId",
                            id_content: "meta[name='b2c_auction']",
                            priceWholesale: "#mod-detail-price .price",
                            amountWholesale: "#mod-detail-price .amount",
                            promoPrice: ".mod-detail-info-price .price-now, .mod-detail-daixiao-price .value",
                            image: "#J_DetailInside .tab-pane img",
                            title_content: "meta[property='og:title']",
                            title_text: ".d-title",
                            shop_text: "#hd_0 #hd_0_container_0 span",
                            saleLocation: ".delivery-addr, .address span.disc",
                            quantity: "",
                            stock: "span.total",
                        },
                        box_prepend: "div.offerdetail_ditto_purchasing",
                        box_prepend_v2: "div.od-pc-logistics-contain",
                    },
                },
                currentVersion: chrome.runtime.getManifest().version,
                newestVersion: "",
                exchangeNum: 0,
                exchangeRate: "",
            },
            a = {};
        i.a.get(chrome.runtime.getURL("toolbar.html"), function (e) {
            (e = i.a.parseHTML(e)), i()(e).find("a._chipo-home").attr("href", r.tool.baseUrl), i()(e).find("a._link-detail-cart").attr("href", 'https://client.hangve.com/cart-create'), (a.toolbar = e);
        }),
            i.a.get(chrome.runtime.getURL("popup.html"), function (e) {
                (e = i.a.parseHTML(e)), i()(e).find("a.btn-default").attr("href", r.tool.getCartUrl), (a.popup = e);
            }),
            i.a.get(chrome.runtime.getURL("onPageBox.html"), function (e) {
                (e = i.a.parseHTML(e)), i()(e).find("#exchange_rate").text(o.exchangeRate), (a.box = e);
            });
    },
    function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "tool", function () {
                return d;
            });
        t = n(0);
        var i,
            r,
            o,
            a = n.n(t);
        if (void 0 === a.a) throw new Error("Bootstrap's JavaScript requires jQuery");
        if (((t = a.a.fn.jquery.split(" ")[0].split("."))[0] < 2 && t[1] < 9) || (1 == t[0] && 9 == t[1] && t[2] < 1) || 3 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
        function s(e, t) {
            return this.each(function () {
                var n = r(this),
                    i = n.data("bs.chipoModal"),
                    o = r.extend({}, c.DEFAULTS, n.data(), "object" == typeof e && e);
                i || n.data("bs.chipoModal", (i = new c(this, o))), "string" == typeof e ? i[e](t) : o.show && i.show(t);
            });
        }
        function c(e, t) {
            (this.options = t),
                (this.$body = r(document.body)),
                (this.$element = r(e)),
                (this.$dialog = this.$element.find(".chipoModal-dialog")),
                (this.$backdrop = null),
                (this.isShown = null),
                (this.originalBodyPad = null),
                (this.scrollbarWidth = 0),
                (this.ignoreBackdropClick = !1),
                this.options.remote &&
                    this.$element.find(".chipoModal-content").load(
                        this.options.remote,
                        r.proxy(function () {
                            this.$element.trigger("loaded.bs.chipoModal");
                        }, this)
                    );
        }
        (r = a.a),
            (c.VERSION = "3.3.7"),
            (c.TRANSITION_DURATION = 300),
            (c.BACKDROP_TRANSITION_DURATION = 150),
            (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (c.prototype.toggle = function (e) {
                return this.isShown ? this.hide() : this.show(e);
            }),
            (c.prototype.show = function (e) {
                var t = this,
                    n = r.Event("show.bs.chipoModal", { relatedTarget: e });
                this.$element.trigger(n),
                    this.isShown ||
                        n.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.checkScrollbar(),
                        this.setScrollbar(),
                        this.$body.addClass("chipoModal-open"),
                        this.escape(),
                        this.resize(),
                        this.$element.on("click.dismiss.bs.chipoModal", '[data-dismiss="chipoModal"]', r.proxy(this.hide, this)),
                        this.$dialog.on("mousedown.dismiss.bs.chipoModal", function () {
                            t.$element.one("mouseup.dismiss.bs.chipoModal", function (e) {
                                r(e.target).is(t.$element) && (t.ignoreBackdropClick = !0);
                            });
                        }),
                        this.backdrop(function () {
                            var n = r.support.transition && t.$element.hasClass("fade"),
                                i =
                                    (t.$element.parent().length || t.$element.appendTo(t.$body),
                                    t.$element.show().scrollTop(0),
                                    t.adjustDialog(),
                                    n && t.$element[0].offsetWidth,
                                    t.$element.addClass("in"),
                                    t.enforceFocus(),
                                    r.Event("shown.bs.chipoModal", { relatedTarget: e }));
                            n
                                ? t.$dialog
                                      .one("bsTransitionEnd", function () {
                                          t.$element.trigger("focus").trigger(i);
                                      })
                                      .emulateTransitionEnd(c.TRANSITION_DURATION)
                                : t.$element.trigger("focus").trigger(i);
                        }));
            }),
            (c.prototype.hide = function (e) {
                e && e.preventDefault(),
                    (e = r.Event("hide.bs.chipoModal")),
                    this.$element.trigger(e),
                    this.isShown &&
                        !e.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.escape(),
                        this.resize(),
                        r(document).off("focusin.bs.chipoModal"),
                        this.$element.removeClass("in").off("click.dismiss.bs.chipoModal").off("mouseup.dismiss.bs.chipoModal"),
                        this.$dialog.off("mousedown.dismiss.bs.chipoModal"),
                        r.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", r.proxy(this.hideChipoModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideChipoModal());
            }),
            (c.prototype.enforceFocus = function () {
                r(document)
                    .off("focusin.bs.chipoModal")
                    .on(
                        "focusin.bs.chipoModal",
                        r.proxy(function (e) {
                            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus");
                        }, this)
                    );
            }),
            (c.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                          "keydown.dismiss.bs.chipoModal",
                          r.proxy(function (e) {
                              27 == e.which && this.hide();
                          }, this)
                      )
                    : this.isShown || this.$element.off("keydown.dismiss.bs.chipoModal");
            }),
            (c.prototype.resize = function () {
                this.isShown ? r(window).on("resize.bs.chipoModal", r.proxy(this.handleUpdate, this)) : r(window).off("resize.bs.chipoModal");
            }),
            (c.prototype.hideChipoModal = function () {
                var e = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        e.$body.removeClass("chipoModal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.chipoModal");
                    });
            }),
            (c.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
            }),
            (c.prototype.backdrop = function (e) {
                var t,
                    n = this,
                    i = this.$element.hasClass("fade") ? "fade" : "";
                this.isShown && this.options.backdrop
                    ? ((t = r.support.transition && i),
                      (this.$backdrop = r(document.createElement("div"))
                          .addClass("chipoModal-backdrop " + i)
                          .appendTo(this.$body)),
                      this.$element.on(
                          "click.dismiss.bs.chipoModal",
                          r.proxy(function (e) {
                              return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
                          }, this)
                      ),
                      t && this.$backdrop[0].offsetWidth,
                      this.$backdrop.addClass("in"),
                      e && (t ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : e()))
                    : !this.isShown && this.$backdrop
                    ? (this.$backdrop.removeClass("in"),
                      (i = function () {
                          n.removeBackdrop(), e && e();
                      }),
                      r.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : i())
                    : e && e();
            }),
            (c.prototype.handleUpdate = function () {
                this.adjustDialog();
            }),
            (c.prototype.adjustDialog = function () {
                var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({ paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : "" });
            }),
            (c.prototype.resetAdjustments = function () {
                this.$element.css({ paddingLeft: "", paddingRight: "" });
            }),
            (c.prototype.checkScrollbar = function () {
                var e,
                    t = window.innerWidth;
                t || (t = (e = document.documentElement.getBoundingClientRect()).right - Math.abs(e.left)), (this.bodyIsOverflowing = document.body.clientWidth < t), (this.scrollbarWidth = this.measureScrollbar());
            }),
            (c.prototype.setScrollbar = function () {
                var e = parseInt(this.$body.css("padding-right") || 0, 10);
                (this.originalBodyPad = document.body.style.paddingRight || ""), this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth);
            }),
            (c.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad);
            }),
            (c.prototype.measureScrollbar = function () {
                var e = document.createElement("div"),
                    t = ((e.className = "chipoModal-scrollbar-measure"), this.$body.append(e), e.offsetWidth - e.clientWidth);
                return this.$body[0].removeChild(e), t;
            }),
            (o = r.fn.chipoModal),
            (r.fn.chipoModal = s),
            (r.fn.chipoModal.Constructor = c),
            (r.fn.chipoModal.noConflict = function () {
                return (r.fn.chipoModal = o), this;
            }),
            r(document).on("click.bs.chipoModal.data-api", '[data-toggle="chipoModal"]', function (e) {
                var t = r(this),
                    n = t.attr("href"),
                    i = r(t.attr("data-target") || (n && n.replace(/.*(?=#[^\s]+$)/, "")));
                n = i.data("bs.chipoModal") ? "toggle" : r.extend({ remote: !/#/.test(n) && n }, i.data(), t.data());
                t.is("a") && e.preventDefault(),
                    i.one("show.bs.chipoModal", function (e) {
                        e.isDefaultPrevented() ||
                            i.one("hidden.bs.chipoModal", function () {
                                t.is(":visible") && t.trigger("focus");
                            });
                    }),
                    s.call(i, n, this);
            }),
            ((i = a.a).fn.emulateTransitionEnd = function (e) {
                var t = !1,
                    n = this;
                return (
                    i(this).one("bsTransitionEnd", function () {
                        t = !0;
                    }),
                    setTimeout(function () {
                        t || i(n).trigger(i.support.transition.end);
                    }, e),
                    this
                );
            }),
            i(function () {
                (i.support.transition = (function () {
                    var e,
                        t = document.createElement("bootstrap"),
                        n = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                    for (e in n) if (void 0 !== t.style[e]) return { end: n[e] };
                    return !1;
                })()),
                    i.support.transition &&
                        (i.event.special.bsTransitionEnd = {
                            bindType: i.support.transition.end,
                            delegateType: i.support.transition.end,
                            handle: function (e) {
                                return i(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
                            },
                        });
            });
        var l = n(1);
        const u = n(7);
        var d = new (function () {
            var e = this;
            (e.baseUrl = u.url),
                (e.getCartUrl = e.baseUrl + "backend/#/gio-hang"),
                (e.addToCartErrorUrl = e.baseUrl + "backend/product/detail/{site}/{itemId}"),
                (e.getSiteName = function () {
                    var e = window.location.href;
                    return e.match(/item.taobao/) || e.match(/taobao.com\/item\//)
                        ? "TAOBAO"
                        : e.match(/detail.tmall/) || e.match(/tmall.com\/item\//) || e.match(/yao.95095/)
                        ? "TMALL"
                        : e.match(/detail.1688/) || e.match(/[d]+[e]+[t]+[a]+[i]+[l]+.1688/)
                        ? "cn1688"
                        : e.match(/item.jd/)
                        ? "jd"
                        : "";
                }),
                (e.getUrlParameter = function (e) {
                    var t,
                        n = decodeURIComponent(window.location.search.substring(1)).split("&");
                    let i;
                    for (var r = 0; r < n.length; r++) (t = n[r].split("="))[0] === e && (i = void 0 === t[1] ? null : t[1]);
                    return i;
                }),
                (e.convertToVND = function (t) {
                    if (!a.a.isNumeric(t) && t) {
                        if (0 < t.indexOf("-")) {
                            var n,
                                i = t.split("-");
                            for (n in ((t = ""), i)) t += " " + e.convertToVND(i[n]) + " -";
                            return t.slice(0, -1);
                        }
                        return t;
                    }
                    t = parseFloat(t);
                    var r = l.rules.exchangeNum;
                    return (+Math.ceil(t * r)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                }),
                (e.calculateExchangeRate = function () {
                    e.sendAjax("api/config/exchange-rate", "GET", null, function (e) {
                        e && e.success
                            ? ((l.rules.exchangeNum = e.data), 0 < (e = parseInt(e.data).toLocaleString("vi")).indexOf(",") && (e = e.replace(",", ".")), (l.rules.exchangeRate = e + "đ"))
                            : ((l.rules.exchangeNum = 3575), (l.rules.exchangeRate = "3.575đ"), console.warn("Không thể kết nối với server"));
                    });
                }),
                (e.sendAjax = function (t, n, i, r) {
                    chrome.runtime.sendMessage({ url: e.baseUrl + t, method: n, data: i }, r);
                }),
                (e.addToCart = function (t, n) {
                    if ("CN1688" === n.website && a()(".translated-ltr").length)
                        return (
                            a()(".ls-warning").css("display", "block"),
                            a()("#myChipoModal-orderError").chipoModal("toggle"),
                            (i = '<a href="' + e.addToCartErrorUrl.replace("{site}", n.website).replace("{itemId}", t[0].itemId) + '" target="_blank">ĐÂY</a>'),
                            void a()(".ls-deposit-error p").html("Nhấn vào " + i + " để tiếp tục mua sản phẩm này")
                        );
                    a.a.each(t, function (t, n) {
                        n.stock.toString().indexOf(".") && (n.stock = n.stock.toString().replace(".", "")),
                            (n.stock = e.convertNumber(n.stock)),
                            (n.quantity = e.convertNumber(n.quantity)),
                            (n.itemPriceNDT = e.convertNumber(n.itemPriceNDT));
                    });
                    (a()(".translated-ltr").length ? a()(".ls-warning").css("display", "block") : a()(".ls-warning").css("display", "none"),
                    a()("#myChipoModal-order").chipoModal("toggle"),
                    a()(".ls-deposit p").text("Sản phẩm được thêm thành công vào giỏ hàng của bạn"),
                    a()("#chipo-textarea").val(""));
                }),
                (e.saveProduct = function (t, n) {
                    (t = { itemId: t.itemId, name: t.itemName, link: t.itemLink, price: t.itemPriceNDT, image: t.itemImage, website: n.website, shopId: n.shopId, shopName: n.shopName }),
                        e.sendAjax("cart/saveLink", "POST", t, function (e) {
                            e && e.success ? alert("Lưu sản phẩm thành công") : alert("Lưu sản phẩm không thành công");
                        });
                }),
                (e.convertNumber = function (e) {
                    return !e || a.a.isNumeric(e) ? e : (0 < e.toString().indexOf(",") && (e = e.toString().replace(/[,]+/, ".")), parseFloat(e));
                }),
                (e.goToSite = function (t) {
                    window.location.replace(e.baseUrl + t);
                }),
                (e.getProductLink = function () {
                    return window.location.href;
                }),
                (e.getNewestVersion = function () {
                    e.sendAjax("ext/version", "GET", null, function (e) {
                        e && e.success && e.data && (l.rules.newestVersion = e.data);
                    });
                }),
                (e.addToCartError = function (t, n) {
                    let i = "";
                    if (((i = Array.isArray(n) && 0 < n.length ? n[0].itemId : (n && n.itemId) || ""), (t = t.toUpperCase()), "" === i || null == i))
                        if ("CN1688" === t) {
                            let e = a()("meta[name='b2c_auction']").attr("content");
                            if (!e) {
                                e = (e = window.location.pathname.match(/offer\/(.+)\.html/i)) && 0 !== e.length ? e[1] : null;
                            }
                            i = e;
                        } else if ("TMALL" === t) {
                            // let e = a()("#LineZing").attr("itemid");
                            // e || ((n = window.location.pathname), (e = (e = /item\/(.+)\.htm/i.exec(n))[1])), (i = e);
                            let e = a()("input[name=item_id]").val();
                            if (!e) {
                                let t = window.location.href;
                                e = (e = (e = t.match(/item\/(.+)\.htm/i)) && e.length ? e : t.match(/id=(.+)&/)) && 1 < e.length ? e[1] : 0;
                            }
                            i = e;
                        } else if ("TAOBAO" === t) {
                            let e = a()("input[name=item_id]").val();
                            if (!e) {
                                let t = window.location.href;
                                e = (e = (e = t.match(/item\/(.+)\.htm/i)) && e.length ? e : t.match(/id=(.+)&/)) && 1 < e.length ? e[1] : 0;
                            }
                            i = e;
                        }
                    (n = e.addToCartErrorUrl.replace("{site}", t).replace("{itemId}", i)),
                        a()("#myChipoModal-orderError").chipoModal("toggle"),
                        (t = '<a href="' + n + '" target="_blank">ĐÂY</a>'),
                        a()(".ls-deposit-error p").html("Công cụ mua hàng đang gặp lỗi, nhấn vào " + t + " để tiếp tục mua"),
                        a()("#chipo-textarea").val("");
                });
        })();
    },
    function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "tmall", function () {
                return a;
            });
        t = n(0);
        var i = n.n(t),
            r = n(1),
            o = n(2),
            a = function () {
                var e = this;
                (e.first = !0),
                    (e.getShop = function () {
                        function e() {
                            var e = i()(r.rules.info.TMALL.shop.name_value).val();
                            return (e = (e = e || i()(r.rules.info.TMALL.shop.name_text).text()) || decodeURIComponent(i()(r.rules.info.TMALL.shop.name_data_nick).attr("data-nick"))) || "";
                        }
                        try {
                            var e_p = "",
                            t_p = i()("#tb-beacon-aplus");
                            if (t_p.length) {
                                var r_p = t_p.attr("exparams");
                                const n_p = /(at_alis=2%5f)(\d+)/gm;
                                let i_p;
                                for (; null !== (i_p = n_p.exec(r_p)); )
                                    i_p.index === n_p.lastIndex && n_p.lastIndex++,
                                        i_p.forEach((t_q, n_q) => {
                                            2 == n_q && (e_p = t_q);
                                        });
                            }
                            return {
                                shopId: i()(r.rules.info.TMALL.shop.id_shopid).attr("value") || i()("input[name=seller_id]").val() || e_p,
                                shopName: e(),
                                shopLink: (t = i()(r.rules.info.TMALL.shop.link).attr("href")) ? "https:" + t : "",
                                aliwangwang: i()(r.rules.info.TMALL.shop.aliwangwang).val() || e() || "",
                                website: "TMALL",
                            };
                        } catch (e) {
                            throw e;
                        }
                        var t;
                    }),
                    (e.getProduct = function () {
                        var t = this;
                        return (
                            (t.getProductId = function () {
                                var e,
                                    t = i()(r.rules.info.TMALL.product.id).val();
                                return (t = t || ((t = (t = (e = window.location.href).match(/item\/(.+)\.htm/i)) && t.length ? t : e.match(/id=(.+)&/)) && 1 < t.length ? t[1] : 0)) || 0;
                            }),
                            (t.getProductPrice = function () {
                                var e,
                                    t = i()(r.rules.info.TMALL.product.promoPrice).text();
                                for (e in ((t && t.trim().length) ||
                                    i()(r.rules.info.TMALL.product.basePrice).each(function () {
                                        "line-through" !== i()(this).css("text-decoration") && (t = i()(this).text());
                                    }),
                                t.includes("-") && (t = t.split("-")),
                                (t = Array.isArray(t) ? t : [t])))
                                    t[e].indexOf(".") < t[e].length - 3 && (t[e] = t[e].replace(".", "")), t[e].indexOf(",") && (t[e] = t[e].replace(",", "."));
                                return (t = 1 === t.length ? t[0] : t);
                            }),
                            (t.getProductImages = function () {
                                var e = i()(r.rules.info.TMALL.product.image).attr("src");
                                return e ? (0 <= e.indexOf("http") ? e : "https:" + e) : "";
                            }),
                            (t.getProductTitle = function () {
                                return i()(r.rules.info.TMALL.product.title).val() || document.getElementsByTagName("H1")[0].innerHTML;
                            }),
                            (t.getSaleLocation = function () {
                                return i()(r.rules.info.TMALL.product.saleLocation).text() || "";
                            }),
                            (t.updateView = function () {
                                var e = t.getProductPrice(),
                                    n = Array.isArray(e) && 1 < e.length ? o.tool.convertToVND(e[0]) + " đ - " + o.tool.convertToVND(e[1]) + "đ" : o.tool.convertToVND(e) + "đ";
                                i()(".chipo-box-info #sell_price").text(n), (e = t.getSelectStock());
                                i()(".chipo-box-info #stock").text(e);
                            }),
                            (t.getInputQuantity = function () {
                                return i()(r.rules.info.TMALL.product.quantity).val() || 1;
                            }),
                            (t.getSelectStock = function () {
                                var e = /[\d]+/.exec(i()(r.rules.info.TMALL.product.stock).text());
                                return e && e.length ? e[0] : i()(".ui-msg").is(":visible") || i()("#J_Sold-out-recommend").is(":visible") ? 0 : 10;
                            }),
                            (t.getCategoryId = function () {
                                var e = "",
                                    t = i()("#J_ZebraPriceDesc");
                                if (0 < t.length) {
                                    var n = t.attr("mdv-cfg");
                                    const o = /(catId:)(\d+)/gm;
                                    let a;
                                    for (; null !== (a = o.exec(n)); )
                                        a.index === o.lastIndex && o.lastIndex++,
                                            a.forEach((t, n) => {
                                                2 == n && (e = t);
                                            });
                                }
                                if (!e && 0 < (t = i()("#tb-beacon-aplus")).length) {
                                    var r = t.attr("exparams");
                                    const n = /(item%5f)(\d+)/gm;
                                    let i;
                                    for (; null !== (i = n.exec(r)); )
                                        i.index === n.lastIndex && n.lastIndex++,
                                            i.forEach((t, n) => {
                                                2 == n && (e = t);
                                            });
                                }
                                return e || "";
                            }),
                            (t.getProductProperties = function (e) {
                                var t = i()(".tm-sale-prop, .skuCate"),
                                    n = "",
                                    r =
                                        ((0 < i()(t).find("dt.tb-metatit .hidden").length ? i()(t).find("dt.tb-metatit .hidden") : i()(t).find("dt.tb-metatit, span.skuCateText")).each(function () {
                                            n += i()(this).text() + ";";
                                        }),
                                        i()(t).find(".J_TSaleProp, .skuItemWrapper")),
                                    a = ((!r || r.length <= 0) && (r = i()(t).find("#J_SKU dl")), i()(r).find("li.tb-selected, .skuItem.current"));
                                if (r.length > a.length)
                                    return (
                                        i()(r)
                                            .find("li, .skuItem")
                                            .each(function (e) {
                                                var t;
                                                i()(this).hasClass("tb-selected, current") ||
                                                    ((t = i()(this).parents(".tm-sale-prop, .skuItemWrapper")).css("border", "1px solid red"),
                                                    i()(this).click(function () {
                                                        t.css("border", "none");
                                                    }),
                                                    0 === e && i()("html, body").animate({ scrollTop: t.offset().top }, 1e3));
                                            }),
                                        alert("Xin chọn đủ thuộc tính của sản phẩm"),
                                        null
                                    );
                                for (var s = "", c = "", l = "", u = 0; u < a.length; u++) {
                                    s += i()(a[u]).attr("data-value") + ";";
                                    var d = i()(a[u]).find("a");
                                    if(d.length){
                                        (c += d.find("span").text() + ";"),
                                        d.attr("style") &&
                                            (l +=
                                                "http:" +
                                                d
                                                    .attr("style")
                                                    .match(/\/\/.+\..+\.[\w]{3,4}/g)[0]
                                                    .replace(/[\d]+x[\d]+/, "500x500") +
                                                ";");
                                    }else{
                                        d = i()(a[u]).find("div");
                                        let ff = i()(d).find("img");
                                        (c += d.find("span.skuValueName").text() + ";"),
                                        ff.attr("src") &&
                                            (l +=
                                                "https:" +
                                                ff
                                                    .attr("src")
                                                    .match(/\/\/.+\..+\.[\w]{3,4}/g)[0]
                                                    .replace(/[\d]+x[\d]+/, "500x500") +
                                                ";");
                                    }
                                }
                                return (e.propetiesType = n.slice(0, -1)), (e.propetiesId = s.slice(0, -1)), (e.propetiesName = c.slice(0, -1)), (e.propetiesImage = l.slice(0, -1)), (t = o.tool.getUrlParameter("skuId")) && (e.skuId = t), e;
                            }),
                            (t.calculateTotal = function (e) {
                                return (e.totalAmountNDT = Math.round(parseInt(e.quantity) * parseFloat(e.itemPriceNDT) * 100) / 100), e;
                            }),
                            (t.init = function () {
                                try {
                                    var n = {
                                        itemId: t.getProductId(),
                                        itemName: t.getProductTitle(),
                                        itemLink: o.tool.getProductLink(),
                                        itemImage: t.getProductImages(),
                                        saleLocation: t.getSaleLocation(),
                                        stock: t.getSelectStock(),
                                        quantity: t.getInputQuantity(),
                                        cateId: t.getCategoryId(),
                                        itemPriceNDT: t.getProductPrice(),
                                    };
                                    return (
                                        n.itemPriceNDT && Array.isArray(n.itemPriceNDT) ? (n.itemPrice = o.tool.convertToVND(n.itemPriceNDT[0]) + " đ - " + o.tool.convertToVND(n.itemPriceNDT[1])) : (n = t.calculateTotal(n)),
                                        e.first ? (n.updateView = t.updateView) : (n = t.getProductProperties(n)),
                                        n
                                    );
                                } catch (n) {
                                    throw n;
                                }
                            }),
                            t.init()
                        );
                    }),
                    (e.renderView = function (e) {
                        var t = i()("<div>"),
                            n = r.addon.box;
                        i()(t).html(n),
                            i()(t).addClass("tm-clear"),
                            i()(r.rules.info.TMALL.box_prepend).prepend(i()(t)),
                            i()(".chipo-box-info #stock").text(e.stock),
                            (n = ""),
                            (n = Array.isArray(e.itemPriceNDT) && 1 < e.itemPriceNDT.length ? o.tool.convertToVND(e.itemPriceNDT[0]) + "đ - " + o.tool.convertToVND(e.itemPriceNDT[1]) + "đ" : o.tool.convertToVND(e.itemPriceNDT) + "đ");
                        console.log(n);
                            i()(".chipo-box-info #sell_price").text(n);    
                        i()("#J_Sold-out-recommend").length && i()(".chipo-warning").text("Sản phẩm này đã hết hàng");
                    }),
                    (e.init = function () {
                        var t = e.getProduct();
                        (e.productView = t.productView), (e.first = !1), e.renderView(t);
                    });
            };
    },
    function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "jd", function () {
                return a;
            });
        t = n(0);
        var i = n.n(t),
            r = n(2),
            o = n(1),
            a = function () {
                var e = this,
                    t = {};
                (e.initEvent = function () {
                    var e = document.createElement("script");
                    (e.src = chrome.runtime.getURL("script.js")),
                        (e.onload = function () {
                            this.remove();
                        }),
                        (document.head || document.documentElement).appendChild(e);
                }),
                    document.addEventListener("extension-receive-JD-event", function (e) {
                        t = e.detail;
                    }),
                    (e.getShop = function () {
                        var e = i()(".contact .item > div > a").first();
                        function n() {
                            return i()(e).attr("title") || "";
                        }
                        return {
                            shopId: t.data.shopId || "",
                            shopName: n(),
                            shopLink: (function () {
                                var e = i()(".contact .item .name > a").first().attr("href");
                                return e ? "https:" + e + e : "";
                            })(),
                            aliwangwang: n(),
                            website: "JD",
                        };
                    }),
                    (e.getProduct = function () {
                        var e = this;
                        return (
                            (e.getproductId = function () {
                                return t.data.skuid || 0;
                            }),
                            (e.getProductPrice = function () {
                                return t.data.promoPrice || i()(".dd .p-price .price").html();
                            }),
                            (e.getInputQuantity = function () {
                                return i()("#buy-num").val() || 1;
                            }),
                            (e.getSelectStock = function () {
                                return i()("#buy-num").attr("data-max") || 10;
                            }),
                            (e.getSaleLocation = function () {
                                return i()("#area1 .ui-area-text").html() || "";
                            }),
                            (e.getProductTitle = function () {
                                return t.data.name || "";
                            }),
                            (e.getProductImage = function () {
                                var e = i()("#spec-img").attr("src");
                                return e ? "https:" + e : "";
                            }),
                            (e.calculateTotal = function (e) {
                                return (e.totalAmountNDT = Math.round(parseInt(e.quantity) * parseFloat(e.itemPriceNDT) * 100) / 100), e;
                            }),
                            (e.getproductWeight = function () {
                                var e = i()("#summary-weight .dd").html();
                                return e ? Number(e.replace(/[^0-9\.]+/g, "")) : 0;
                            }),
                            (e.getProductProperties = function (e) {
                                (e.propertiesId = t.data.skuid), (e.propertiesType = i()("#choose-attr-1 .dt").html()), (e.propetiesName = i()("#choose-attr-1 .dd .selected").first().attr("data-value"));
                                var n = i()("#choose-attr-1 .dd .selected > a > img").first().attr("src");
                                n && (e.propetiesImage = "https://" + n);
                            }),
                            (e.init = function () {
                                var t = {
                                    itemId: e.getproductId(),
                                    itemName: e.getProductTitle(),
                                    itemLink: r.tool.getProductLink(),
                                    itemImage: e.getProductImage(),
                                    saleLocation: e.getSaleLocation(),
                                    itemPriceNDT: e.getProductPrice(),
                                    quantity: e.getInputQuantity(),
                                    weight: e.getproductWeight(),
                                    stock: e.getSelectStock(),
                                };
                                return e.calculateTotal(t), e.getProductProperties(t), t;
                            }),
                            e.init()
                        );
                    }),
                    (e.renderView = function (e) {
                        var t = i()("<div>"),
                            n = o.addon.box;
                        i()(t).html(n),
                            i()(t).addClass("tm-clear"),
                            i()("#choose-attrs").prepend(i()(t)),
                            i()(".chipo-box-info #stock").text(e.stock),
                            (n = ""),
                            (n = Array.isArray(e.itemPriceNDT) && 1 < e.itemPriceNDT.length ? r.tool.convertToVND(e.itemPriceNDT[0]) + "đ - " + r.tool.convertToVND(e.itemPriceNDT[1]) + "đ" : r.tool.convertToVND(e.itemPriceNDT) + "đ");
                        i()(".chipo-box-info #sell_price").text(n);
                    }),
                    (e.init = function () {
                        var t = e.getProduct();
                        e.renderView(t);
                    });
            };
    },
    function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "taobao", function () {
                return a;
            });
        t = n(0);
        var i = n.n(t),
            r = n(1),
            o = n(2),
            a = function () {
                var e = this,
                    t = ((e.first = !0), {});
                (e.initEvent = function () {
                    var e = document.createElement("script");
                    (e.src = chrome.runtime.getURL("script.js")),
                        (e.onload = function () {
                            this.remove();
                        }),
                        (document.head || document.documentElement).appendChild(e);
                }),
                    document.addEventListener("extension-receive-TAOBAO-event", function (e) {
                        t = e.detail;
                    }),
                    (e.getShop = function () {
                        try {
                            return {
                                shopId:
                                    (n = (n = i()(r.rules.info.TAOBAO.shop.id_data_api).attr("data-api"))
                                        ? !(n = /\&seller_num_id=(.+)\&totalSQ/i.exec(n)) || n.length <= 1
                                            ? ""
                                            : n[1]
                                        : i()(r.rules.info.TAOBAO.shop.id_data_sellerid).attr("data-sellerid")) || "",
                                shopName: i()(r.rules.info.TAOBAO.shop.name_title).attr("title") || i()(r.rules.info.TAOBAO.shop.name_text).text() || "",
                                shopLink: (t = i()(r.rules.info.TAOBAO.shop.link).attr("href")) ? "https:" + t : "",
                                aliwangwang:
                                    (e = (e = (e = i()(r.rules.info.TAOBAO.shop.aliwangwang).attr("data-nick")) || i()(r.rules.info.TAOBAO.shop.aliwangwang).attr("data-tnick")) && 0 <= e.indexOf("%") ? decodeURIComponent(e) : e) || "",
                                website: "TAOBAO",
                            };
                        } catch (e) {
                            throw e;
                        }
                        var e, t, n;
                    }),
                    (e.getProduct = function () {
                        var n = this;
                        return (
                            (n.getProductId = function () {
                                var e,
                                    t = i()(r.rules.info.TAOBAO.product.id).val();
                                return (t = t || ((t = (t = (e = window.location.href).match(/item\/(.+)\.htm/i)) && t.length ? t : e.match(/id=(.+)&/)) && 1 < t.length ? t[1] : 0)) || 0;
                            }),
                            (n.getProductPrice = function () {
                                var e,
                                    t = i()(r.rules.info.TAOBAO.product.promoPrice)
                                        .text()
                                        .match(/[0-9,.]+/g);
                                for (e in (t =
                                    t && t.length
                                        ? t
                                        : i()(r.rules.info.TAOBAO.product.basePrice)
                                              .text()
                                              .match(/[0-9,.]+/g)))
                                    t[e].indexOf(".") < t[e].length - 3 && (t[e] = t[e].replace(".", "")), t[e].indexOf(",") && (t[e] = t[e].replace(",", "."));
                                return t && 1 < t.length ? t : t && t.length ? t[0] : 0;
                            }),
                            (n.getProductImages = function () {
                                var e = i()(r.rules.info.TAOBAO.product.image);
                                return 0 < e.length &&
                                    (e = i()(e)
                                        .attr("src")
                                        .replace(/[\d]+x[\d]+/, "500x500"))
                                    ? 0 <= e.indexOf("http")
                                        ? e
                                        : "https:" + e
                                    : "";
                            }),
                            (n.getProductTitle = function () {
                                var e = i()(r.rules.info.TAOBAO.product.title_content).attr("content");
                                return (e = e || i()(r.rules.info.TAOBAO.product.title_data_title).attr("data-title")) || "";
                            }),
                            (n.getSaleLocation = function () {
                                return i()(r.rules.info.TAOBAO.product.saleLocation).text() || "";
                            }),
                            (n.updateView = function () {
                                var e = n.getProductPrice(),
                                    t = Array.isArray(e) && 1 < e.length ? o.tool.convertToVND(e[0]) + "đ - " + o.tool.convertToVND(e[1]) + "đ" : o.tool.convertToVND(e) + "đ";
                                i()(".chipo-box-info #sell_price").text(t), (e = n.getSelectStock());
                                i()(".chipo-box-info #stock").text(e);
                            }),
                            (n.getInputQuantity = function () {
                                return i()(r.rules.info.TAOBAO.product.quantity).val() || 1;
                            }),
                            (n.getSelectStock = function () {
                                var e = /[\d]+/.exec(i()(r.rules.info.TAOBAO.product.stock).text());
                                return e && e.length ? e[0] : i()(".tb-stop").is(":visible") || i()(".J_TOffSale").is(":visible") ? 0 : 10;
                            }),
                            (n.getCategoryId = function () {
                                var e = i()("#detail-recommend-viewe2d").attr("data-catid");
                                return (e = e || i()("#detail-recommend-bought").attr("data-catid")) || "";
                            }),
                            (n.getProductProperties = function (e) {
                                var n = "",
                                    r =
                                        ((0 < i()("#J_SKU dt .hidden").length
                                            ? i()("#J_SKU dt .hidden")
                                            : 0 < i()("#J_SKU dt ").length
                                            ? i()("#J_SKU dt")
                                            : 0 < i()("#J_isku .J_Prop .tb-property-type .hidden").length
                                            ? i()("#J_isku .J_Prop .tb-property-type .hidden")
                                            : i()("#J_isku .J_Prop .tb-property-type")
                                        ).each(function () {
                                            n += i()(this).text() + ";";
                                        }),
                                        i()(".J_TSaleProp")),
                                    o = ((!r || r.length <= 0) && (r = i()("#J_SKU dl")), i()(r).find("li.tb-selected"));
                                if (r.length > o.length)
                                    return (
                                        i()(r)
                                            .find("li")
                                            .each(function (e) {
                                                var t;
                                                i()(this).hasClass("tb-selected") ||
                                                    ((t = i()(this).parents(".J_Prop")).css("border", "1px solid red"),
                                                    i()(this).click(function () {
                                                        t.css("border", "none");
                                                    }),
                                                    0 === e && i()("html, body").animate({ scrollTop: t.offset().top }, 1e3));
                                            }),
                                        alert("Xin chọn đủ thuộc tính của sản phẩm"),
                                        !1
                                    );
                                for (var a = "", s = "", c = "", l = 0; l < o.length; l++) {
                                    i()(o[l]).attr("data-pv") ? (a += i()(o[l]).attr("data-pv") + ";") : (a += i()(o[l]).attr("data-value") + ";");
                                    var u = i()(o[l]).find("a");
                                    (u.hasClass("tb-img") || u.attr("style")) && (c += "https:" + u.attr("style").match(/\/\/.+\..+\.[a-z]{3,4}/g) + ";"), u.attr("title") ? (s += u.attr("title") + ";") : (s += u.find("span").text() + ";");
                                }
                                (e.propetiesType = n.slice(0, -1)), (e.propetiesId = a.slice(0, -1)), (e.propetiesName = s.slice(0, -1)), (e.propetiesImage = c.slice(0, -1));
                                try {
                                    t &&
                                        e.propetiesId &&
                                        i.a.each(t, (t, n) => {
                                            t.includes(e.propetiesId) && (e.skuId = n.skuId);
                                        });
                                    if(typeof e.skuId === 'undefined') {
                                        e.propetiesId = e.propetiesId.split(';')[1] + ';' + e.propetiesId.split(';')[0];

                                        t && e.propetiesId && i.a.each(t, (t, n) => {
                                                t.includes(e.propetiesId) && (e.skuId = n.skuId);
                                            });
                                    }
                                } catch (n) {
                                    console.error(n);
                                }
                                return e;
                            }),
                            (n.calculateTotal = function (e) {
                                return (e.totalAmountNDT = Math.round(parseInt(e.quantity) * parseFloat(e.itemPriceNDT) * 100) / 100), e;
                            }),
                            (n.init = function () {
                                try {
                                    var t = {
                                        itemId: n.getProductId(),
                                        itemName: n.getProductTitle(),
                                        itemLink: o.tool.getProductLink(),
                                        itemImage: n.getProductImages(),
                                        saleLocation: n.getSaleLocation(),
                                        itemPriceNDT: n.getProductPrice(),
                                        cateId: n.getCategoryId(),
                                        stock: n.getSelectStock(),
                                    };
                                    if ((t.itemPriceNDT && 1 < t.itemPriceNDT.length && (t.itemPrice = "từ " + o.tool.convertToVND(t.itemPriceNDT[0]) + " đ đến " + o.tool.convertToVND(t.itemPriceNDT[1])), e.first))
                                        t.updateView = n.updateView;
                                    else {
                                        if (0 == (t = n.getProductProperties(t))) return;
                                        (t.quantity = n.getInputQuantity()), (t = n.calculateTotal(t));
                                    }
                                    return t;
                                } catch (t) {
                                    throw t;
                                }
                            }),
                            n.init()
                        );
                    }),
                    (e.renderView = function (e) {
                        var t = i()("<div>"),
                            n = r.addon.box;
                        i()(t).html(n),
                            i()(t).addClass("tm-clear"),
                            i()(r.rules.info.TAOBAO.box_prepend).prepend(i()(t)),
                            i()(".chipo-box-info #stock").text(e.stock),
                            (n = ""),
                            (n = Array.isArray(e.itemPriceNDT) && 1 < e.itemPriceNDT.length ? o.tool.convertToVND(e.itemPriceNDT[0]) + "đ - " + o.tool.convertToVND(e.itemPriceNDT[1]) + "đ" : o.tool.convertToVND(e.itemPriceNDT) + "đ");
                        i()(".chipo-box-info #sell_price").text(n);
                    }),
                    (e.init = function () {
                        var t = e.getProduct();
                        (e.udpateView = t.updateView), (e.first = !1), e.renderView(t);

                    });
            };
    },
    function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "cn1688", function () {
                return a;
            });
        t = n(0);
        var i = n.n(t),
            r = n(1),
            o = n(2),
            a = function () {
                var e = this,
                    t = ((e.first = !0), {});
                (e.initEvent = function () {
                    var e = document.createElement("script");
                    (e.src = chrome.runtime.getURL("script.js")),
                        (e.onload = function () {
                            this.remove();
                        }),
                        (document.head || document.documentElement).appendChild(e);
                }),
                    document.addEventListener("extension-receive-CN1688-event", function (e) {
                        t = e.detail;
                    }),
                    (e.getShop = function () {
                        try {
                            return {
                                shopId: (function () {
                                    var e,
                                        n = t.config.userId;
                                    if (
                                        (n || (0 < (e = i()(r.rules.info.cn1688.shop.id_data_mod_config)).length && (e = i()(e).attr("data-mod-config")) && (n = JSON.parse(e).userId)),
                                        n || (0 < (e = i()(r.rules.info.cn1688.shop.id_data_seller_id)).length && (n = i()(e).attr("data-seller-id"))),
                                        !n && !1 === i.a.isEmptyObject(t.dataNew))
                                    ) {
                                        let e = t.dataNew.globalData.offerBaseInfo;
                                        0 < e.sellerUserId.toString().length && (n = e.sellerUserId.toString());
                                    }
                                    return n ? n.trim() : "";
                                })(),
                                shopName:
                                    ((s =
                                        (s =
                                            (s = (s = 0 < i()(r.rules.info.cn1688.shop.name_json).length ? (s = i()(r.rules.info.cn1688.shop.name_json).attr("content")).match(/name=(.+);/) : s) && 1 < s.length ? s[1] : "") ||
                                            (0 < i()(r.rules.info.cn1688.shop.name_title).length ? i()(r.rules.info.cn1688.shop.name_title).attr("title") : "")) ||
                                        (0 < i()(r.rules.info.cn1688.shop.name_text).length ? i()(r.rules.info.cn1688.shop.name_text).text() : "")) ||
                                        !1 !== i.a.isEmptyObject(t.dataNew) ||
                                        (0 < (c = t.dataNew.globalData.tempModel).companyName.length && (s = c.companyName)),
                                    s || ""),
                                shopLink:
                                    ((a = (a = i()(r.rules.info.cn1688.shop.link_href).attr("href")) || i()(r.rules.info.cn1688.shop.link_value).val()) ||
                                        !1 !== i.a.isEmptyObject(t.dataNew) ||
                                        (0 < (o = t.dataNew.globalData.tempModel).winportUrl.length && (a = o.winportUrl)),
                                    a || ""),
                                aliwangwang:
                                    (t.config.loginId
                                        ? (n = t.config.loginId)
                                        : (n = i()(r.rules.info.cn1688.shop.aliwangwang_text).text()) || ((e = i()(r.rules.info.cn1688.shop.aliwangwang_json).attr("data-alitalk")) && (n = decodeURI(JSON.parse(e).id))),
                                    n || ""),
                                website: "CN1688",
                                version: r.rules.currentVersion,
                            };
                        } catch (e) {
                            throw e;
                        }
                        var e, n, o, a, s, c;
                    }),
                    (e.getProduct = function () {
                        var n = this;
                        return (
                            (n.getProductId = function () {
                                var e = i()(r.rules.info.cn1688.product.id_content).attr("content");
                                return (e = e || i()(r.rules.info.cn1688.product.id_value).val()) ? e || 0 : (e = window.location.pathname.match(/offer\/(.+)\.html/i)) && 0 !== e.length ? e[1] : null;
                            }),
                            (n.getProductPrice = function (e) {
                                e.wholesales = [];
                                var t = i()(r.rules.info.cn1688.product.priceWholesale);
                                if (0 < i()(t).find(".price-discount-sku").length) {
                                    var n = /[\d]+/.exec(i()("#mod-detail-price .amount .value").text()),
                                        o = [];
                                    for (c in (i()(t)
                                        .find(".price-discount-sku .value")
                                        .each(function () {
                                            o.push(i()(this).text());
                                        }),
                                    o))
                                        o[c].indexOf(".") < o[c].length - 3 && (o[c] = o[c].replace(".", "")), o[c].indexOf(",") && (o[c] = o[c].replace(",", "."));
                                    1 < o.length && (e.itemPrice = o), e.wholesales.push({ begin: parseInt(n), end: 0, price: o[0] });
                                } else if (0 < i()(t).find(".price-original-sku .value").length) {
                                    var a = [],
                                        s =
                                            (i()(t)
                                                .find(".price-original-sku .value")
                                                .each(function (e, t) {
                                                    a.push(i()(t).text());
                                                }),
                                            []);
                                    for (c in (i()(r.rules.info.cn1688.product.amountWholesale)
                                        .find(".value")
                                        .each(function (e, t) {
                                            (t = /[\d]+/.exec(i()(t).text())) && 0 < t.length && s.push(t[0]);
                                        }),
                                    a))
                                        a[c].indexOf(".") < a[c].length - 3 && (a[c] = a[c].replace(".", "")), a[c].indexOf(",") && (a[c] = a[c].replace(",", "."));
                                    for (c in ((e.itemPriceNDT = a[0]), s.length < a.length && (e.itemPrice = a), s)) e.wholesales.push({ begin: parseInt(s[c]), end: s[c + 1] ? parseInt(s[c + 1]) : 0, price: a[c] });
                                } else
                                    i()(t)
                                        .find(".value")
                                        .each(function (t, n) {
                                            (n = i()(n).parent().attr("data-range")) && ((n = JSON.parse(n)), e.wholesales.push({ begin: n.begin, end: n.end || 0, price: n.price }));
                                        });
                                if (!e.wholesales || !e.wholesales.length) {
                                    for (var c in ((t = []),
                                    i()(r.rules.info.cn1688.product.promoPrice).each(function () {
                                        t.push(i()(this).text());
                                    }),
                                    t))
                                        t[c].indexOf(".") < t[c].length - 3 && (t[c] = t[c].replace(".", ".")), t[c].indexOf(",") && (t[c] = t[c].replace(",", "."));
                                    t[0] && (1 == (n = t[0].split("-")).length ? (t[0] = n[0]) : 2 == n.length && ((t[0] = n[0]), (t[1] = n[1])));
                                    let o = 1,
                                        a = i()(".mod-detail-info-minimum").find(".obj-amount").text();
                                    a && (o = a.match(/[\d]+/)[0]), (e.wholesales = [{ begin: parseInt(o), end: 0, price: t[0] }]), 1 < t.length && (e.itemPrice = t);
                                }
                                if (((e.itemPriceNDT = e.wholesales[0].price), !e.itemPriceNDT)) {
                                    if (((e.wholesales = []), 0 < (n = i()(".step-price-wrapper")).length)) {
                                        var l = i()(n).find(".step-price-item");
                                        for (let t = l.length - 1; 0 <= t; t--) {
                                            var u = i()(l[t]).find(".price-box .price-text").text();
                                            var d = i()(l[t]).find(".step-unit-box .unit-text").text().match(/[\d]+/)[0];
                                            if (0 < d.length) {
                                                let n = 0;
                                                if (t === l.length - 1) n = 0;
                                                else {
                                                    n =
                                                        i()(l[t + 1])
                                                            .find(".step-unit-box .unit-text")
                                                            .text()
                                                            .match(/[\d]+/)[0] - 1;
                                                }
                                                e.wholesales.push({ begin: parseInt(d), end: n, price: u });
                                            }
                                        }
                                        e.wholesales.sort(function (e, t) {
                                            return e.begin - t.begin;
                                        });
                                    } else if (0 < i()(".price-wrapper").length) {
                                        n = i()(".price-wrapper").find("span.price-text")[0].innerText;
                                        var p = i()(".price-wrapper").find("span.unit-text").text().match(/[\d]+/)[0];
                                        0 < p.length && e.wholesales.push({ begin: parseInt(p), end: 0, price: n });
                                    } else if (((p = i()(".price-container")), i()(p).is("div"))) {
                                        n = i()(p).find(".row2").find("span.price-text.price-num")[0].innerText;
                                        var f = i()(p).find(".row3").find("span.price-text.price-num").text();
                                        f ? 0 < (f = Math.round(parseFloat(f) / parseFloat(n))) && e.wholesales.push({ begin: f, end: 0, price: n }) : e.wholesales.push({ begin: 1, end: 0, price: n });
                                    } else if (i()(p).is("table")) {
                                        (f = i()(p).find(".price-data-wrap").find(".price-item").find("span.price-text.price-num")[0].innerText),
                                            0 < (n = i()(p).find(".price-begin-wrap").find(".price-item").find("span")[0].innerText.match(/[\d]+/)[0]).length && e.wholesales.push({ begin: parseInt(n), end: 0, price: f });
                                    }
                                    e.itemPriceNDT = e.wholesales[0].price;
                                }
                                return e;
                            }),
                            (n.getProductImages = function () {
                                var e = i()(r.rules.info.cn1688.product.image).attr("src");
                                return (e = (e = e || i()("img.preview-img").attr("src")) || i()(".img-list-wrapper").find(".detail-gallery-img").attr("src")) || "";
                            }),
                            (n.getProductTitle = function () {
                                var e = i()(r.rules.info.cn1688.product.title_content).attr("content");
                                return (
                                    (e =
                                        (e =
                                            (e = (e = e || i()(r.rules.info.cn1688.product.title_text).text()) || i()(".title-first-column").find(".title-text").text()) || !1 !== i.a.isEmptyObject(t.dataNew)
                                                ? e
                                                : t.dataNew.globalData.tempModel.offerTitle) || document.title) || ""
                                );
                            }),
                            (n.getSaleLocation = function () {
                                var e;
                                return (
                                    i()(r.rules.info.cn1688.product.saleLocation).each(function () {
                                        !e && i()(this).text() && (e = i()(this).text());
                                    }),
                                    e || ""
                                );
                            }),
                            (n.getCategoryObj = function () {
                                var e = { cateId: "", shopName: "" };
                                return (
                                    i()("script").each(function (t) {
                                        if (30 < t && t < 100) {
                                            var n,
                                                r = i()(this).html();
                                            if (r.match(/categoryList/)) {
                                                console.log("INDEX=" + t);
                                                const i = /({.+\})/gm;
                                                let o;
                                                for (; null !== (o = i.exec(r)); )
                                                    o.index === i.lastIndex && regex.lastIndex++,
                                                        o.forEach((t, i) => {
                                                            0 == i && ((n = JSON.parse(t)), (e.shopName = n.categoryName), (e.cateId = n.categoryId));
                                                        });
                                            }
                                        }
                                    }),
                                    e.shopName = !e.shopName.length ? i()(r.rules.info.cn1688.product.shop_text).attr("title") : e.shopName,
                                    0 === e.cateId.length && !1 === i.a.isEmptyObject(t.dataNew) && (e.cateId = t.dataNew.globalData.tempModel.postCategoryId),
                                    e || null
                                );
                            }),
                            (n.getProductProperties = function (e) {
                                var t = { type: "", name: "", images: "" };
                                return (
                                    i()("div.obj-leading").each(function () {
                                        0 < i()(this).find("span.obj-title .hidden").length ? (t.type += i()(this).find("span.obj-title .hidden").text() + ";") : (t.type += i()(this).find("span.obj-title").text() + ";"),
                                            i()(this)
                                                .find(".list-leading li")
                                                .each(function () {
                                                    var e,
                                                        n = i()(this).find("a.selected");
                                                    0 < n.length && ((e = n.parent().attr("data-imgs")), (n = n.parent().attr("data-unit-config")), e && (t.images += JSON.parse(e).preview + ";"), n && (t.name += JSON.parse(n).name + ";"));
                                                });
                                    }),
                                    t && ((e.propetiesType = t.type.slice(0, -1)), (e.propetiesName = t.name.slice(0, -1)), (e.propetiesImage = t.images.slice(0, -1))),
                                    e
                                );
                            }),
                            (n.getInputQuantity = function (e) {
                                var o = i()("div.obj-sku"),
                                    a = [];
                                if (o && 0 < o.length)
                                    return (
                                        e.propetiesType && (e.propetiesType += ";"),
                                        0 < o.find(".obj-title .hidden").length ? (e.propetiesType += o.find(".obj-title .hidden").text()) : (e.propetiesType += o.find(".obj-title").text()),
                                        o.find("table.table-sku tr").each(function () {
                                            var n,
                                                r,
                                                o,
                                                s =
                                                    ((s = i()(this).attr("data-sku-config")) && ((n = (s = JSON.parse(s)).skuName), (r = parseInt(s.max))),
                                                    (n = n || ((n = (n = i()(this).find("td.name").text().trim()) || i()(this).find("td.name >span").attr("title").trim()) && JSON.parse(i()(this).attr("data-sku-config")).skuName)),
                                                    r || ((r = (r = i()(this).find("td.count .value").text()).match(/[\s.,]+/) ? r.replace(/[\s.,]+/, "") : r).includes("triệu") && (r = r.match(/[\d]+/)[0] + "000000")),
                                                    i()(this).find("span.image").attr("data-imgs")),
                                                c = i()(this).find("td.price .value").text(),
                                                l = (c.indexOf(",") && (c = c.replace(",", ".")), i()(this).find("td.amount .amount-input").val()),
                                                u = t.data.sku.skuMap,
                                                d = e.propetiesName;
                                            n &&
                                                c &&
                                                0 < r &&
                                                0 < l &&
                                                u &&
                                                ((o = i.a.extend({}, e)).propetiesName && (o.propetiesName += ";"),
                                                (o.propetiesName += n),
                                                s && (o.propetiesImage && (o.propetiesImage += ";"), (o.propetiesImage += JSON.parse(s).preview)),
                                                (o.propetiesId = o.propetiesName),
                                                (s = u[n] || u[d + "&gt;" + n]) && ((o.skuId = s.specId), (o.itemPriceNDT = s.discountPrice || s.price || s.retailPrice)),
                                                (!o.itemPriceNDT || (1 < o.wholesales.length && parseFloat(c) < parseFloat(o.itemPriceNDT))) && (o.itemPriceNDT = c),
                                                (o.stock = s.canBookCount || r),
                                                (o.quantity = parseInt(l)),
                                                a.push(o));
                                        }),
                                        i.a.each(a, function (e, t) {
                                            t.totalAmountNDT = n.calculateTotal(t);
                                        }),
                                        0 < a.length ? a : e
                                    );
                                if ((o = i()(".spu-list-content")) && o.length)
                                    return (
                                        e.propetiesType && (e.propetiesType += ";"),
                                        (e.propetiesType += i()(".spu-content li.opt-li .d-header").text()),
                                        o.find("#spu-opt-content table.static-table tr").each(function () {
                                            var n,
                                                r,
                                                o,
                                                s,
                                                c = i()(this).attr("data-sku-config"),
                                                l =
                                                    (c && ((n = (c = JSON.parse(c)).skuName), (r = parseInt(c.max))),
                                                    (n = n || i()(this).attr("data-sku-name")),
                                                    r || ((r = i()(this).find("td.spu-stock .content-wrapper").text()), (r = parseInt(r))),
                                                    (c = parseFloat(i()(this).find("td.spu-price").text().trim())),
                                                    (o = i()(this).find("td.spu-amount .no-control").is(":visible") ? 0 : i()(this).find("td.spu-amount input.amount-input").val()),
                                                    t.data.sku.skuMap),
                                                u = e.propetiesName;
                                            n &&
                                                c &&
                                                0 < r &&
                                                0 < o &&
                                                l &&
                                                ((s = i.a.extend({}, e)).propetiesName && (s.propetiesName += ";"),
                                                (s.propetiesName += n),
                                                (s.propetiesId = s.propetiesName),
                                                (l = l[n] || l[u + "&gt;" + n]) && ((s.skuId = l.skuId), (s.itemPriceNDT = l.discountPrice || l.price || l.retailPrice)),
                                                (!s.itemPriceNDT || (1 < s.wholesales.length && parseFloat(c) < parseFloat(s.itemPriceNDT))) && (s.itemPriceNDT = c),
                                                (s.stock = l.canBookCount || r),
                                                (s.quantity = parseInt(o)),
                                                a.push(s));
                                        }),
                                        i.a.each(a, function (e, t) {
                                            t.totalAmountNDT = n.calculateTotal(t);
                                        }),
                                        0 < a.length ? a : e
                                    );
                                if (0 < i()("#J_DetailInside .obj-amount .d-title .hidden").length)
                                    return (
                                        (e.propetiesType += ";" + i()("#J_DetailInside .obj-amount .d-title .hidden").text()),
                                        0 < (o = i()("#J_DetailInside .mod-detail-purchasing input.amount-input")).length && (c = i()(o).val()),
                                        (e.quantity = c ? parseInt(c) : 1),
                                        (o = i()(r.rules.info.cn1688.product.stock).text()).includes("triệu") ? (o = o.match(/[\d]+/)[0] + "000000") : (o = o.match(/[\d\s.,]+/)[0]).match(/[\s.,]+/g) && (o = o.replace(/[\s.,]/g, "")),
                                        (e.stock = o),
                                        e.wholesales &&
                                            e.wholesales.length &&
                                            e.wholesales.forEach(function (t) {
                                                parseInt(t.begin) <= parseInt(e.quantity) && (parseInt(t.end) >= parseInt(e.quantity) || 0 === parseInt(t.end)) && (e.itemPriceNDT = t.price);
                                            }),
                                        (e.totalAmountNDT = n.calculateTotal(e)),
                                        e
                                    );
                                if (!1 === i.a.isEmptyObject(t.dataNew)) {
                                    var s = i.a.extend({}, e),
                                        c = t.dataNew.globalData;
                                    o = i()(".sku-prop-module-name");
                                    if (
                                        (i.a.each(o, (e, t) => {
                                            s.propetiesType += i()(t).text() + ";";
                                        }),
                                        !s.propetiesType)
                                    ) {
                                        var l = c.skuModel.skuProps;
                                        for (let e = 0; e < l.length; e++) s.propetiesType += s.propetiesTypeskuProps[e].prop + ";";
                                    }
                                    s.propetiesType.endsWith(";") && (s.propetiesType = s.propetiesType.substring(0, s.propetiesType.length - 1)),
                                        0 < (o = i()(".pc-sku-wrapper").find(".prop-item-wrapper").find(".prop-item").find(".prop-item-inner-wrapper.active")).length &&
                                            ((s.propetiesName = i()(o).find(".prop-name").text()), (o = i()(o).find(".prop-img").css("background")) && ((o = /https:\/\/.+.jpg/.exec(o)), (s.propetiesImage = o ? o[0] : ""))),
                                        (o = i()(".pc-sku-wrapper").find(".sku-item-wrapper"));
                                    let n = c.skuModel.skuInfoMap;
                                    return (
                                        i.a.each(o, (e, t) => {
                                            if ((r = i()(t).find(".next-input-group-auto-width").find("input").val()) && 0 < parseInt(r)) {
                                                let e = i.a.extend({}, s),
                                                    o = e.propetiesName,
                                                    c =
                                                        ((e.quantity = parseInt(r)),
                                                        e.propetiesName
                                                            ? ((e.propetiesName += ";" + i()(t).find(".sku-item-name").text()), (o += "&gt;" + i()(t).find(".sku-item-name").text()))
                                                            : (e.propetiesName += i()(t).find(".sku-item-name").text()),
                                                        (e.propetiesId = e.propetiesName),
                                                        i()(t).find(".discountPrice-price").text());
                                                c && c != e.itemPriceNDT && (e.itemPriceNDT = c.match(/[\d\s.,]+/)[0]);
                                                var r = n[e.propetiesName] || n[o];
                                                (e.skuId = r ? r.specId : null), e.itemPriceNDT || ((e.itemPriceNDT = r.price), parseFloat(r.price) > parseFloat(r.discountPrice) && (e.itemPriceNDT = r.discountPrice));
                                                let l = i()(t).find(".sku-item-sale-num").text();
                                                l && (e.stock = l.match(/[\d]+/)[0]),
                                                    e.stock || (e.stock = r.canBookCount),
                                                    (null == e.propetiesImage || null == e.propetiesImage || "" == e.propetiesImage) &&
                                                        0 < i()(t).find(".sku-item-image").length &&
                                                        ((r = i()(t).find(".sku-item-image").css("background")), (r = /https:\/\/.+.jpg/.exec(r)), (e.propetiesImage = r ? r[0] : "")),
                                                    a.push(e);
                                            }
                                        }),
                                        a
                                    );
                                }
                            }),
                            (n.calculateTotal = function (e) {
                                return Math.round(parseFloat(e.itemPriceNDT) * parseInt(e.quantity) * 100) / 100;
                            }),
                            (n.updateView = function () {
                                var e = i()(".price .highlight-price");
                                e && e.length && (e = (e = i()(e).find(".value").text()).indexOf(",") ? e.replace(",", ".") : e) && ((e = o.tool.convertToVND(e) + "đ"), i()(".chipo-box-info #sell_price").text(e));
                            }),
                            (n.init = function () {
                                try {
                                    var t = "",
                                        i = "",
                                        r =
                                            (null != n.getCategoryObj() && ((t = n.getCategoryObj().cateId), (i = n.getCategoryObj().shopName)),
                                            { 
                                                itemId: n.getProductId(),
                                                itemName: n.getProductTitle(),
                                                itemImage: n.getProductImages(),
                                                saleLocation: n.getSaleLocation(),
                                                cateId: t,
                                                shopName: i,
                                                itemLink: o.tool.getProductLink() 
                                            });
                                    return (
                                        1 !== (r = n.getProductPrice(r)).wholesales.length || r.itemPriceNDT || (r.itemPriceNDT = n.getProductPrice(r).wholesales[0].price),
                                        (r.requireMin = parseInt(r.wholesales[0].begin)),
                                        e.first
                                            ? (r.updateView = n.updateView)
                                            : ((r = n.getProductProperties(r)), (r = n.getInputQuantity(r)).propetiesType && 0 === r.propetiesType.indexOf(";") && (r.propetiesType = r.propetiesType.slice(1))),
                                        r
                                    );
                                } catch (t) {
                                    throw t;
                                }
                            }),
                            n.init()
                        );
                    }),
                    (e.renderView = function (e) {
                        var n,
                            a,
                            s = i()("<div>"),
                            c = r.addon.box;
                        i()(s).html(c),
                            i()(s).addClass("widget-custom offerdetail_ditto_purchasing"),
                            i()(r.rules.info.cn1688.box_prepend).prepend(i()(s)),
                            0 < i()(".no-affix-wrapper").length
                                ? i()(r.rules.info.cn1688.box_prepend_v2).prepend(i()(s))
                                : 0 < i()(".obj-leading").length
                                ? i()(".obj-leading").prepend(i()(s))
                                : 0 < i()(".obj-sku").length && i()(".obj-sku").prepend(i()(s)),
                            t.data.sku && t.data.sku.canBookCount
                                ? (n = parseInt(t.data.sku.canBookCount))
                                : i()(".table-sku .count .value").each(function (e, t) {
                                      (t = (t = i()(t).text()).match(/[\s.,]+/) ? t.replace(/[\s.,]+/, "") : t).includes("triệu") && (t = t.match(/[\d]+/)[0] + "000000"), (n += parseInt(t));
                                  }),
                            n ||
                                ((c = (c = i()(r.rules.info.cn1688.product.stock).text()).includes("triệu") ? c.match(/[\d]+/)[0] + "000000" : c) &&
                                    ((s = c.match(/[\d\s.,]+/)) && s.length && (s = s[0].replace(/[\s.,]+/g, "")), (n = parseInt(s)))),
                            i()(".chipo-box-info #stock").text(n),
                            e.itemPrice && Array.isArray(e.itemPrice) && e.itemPrice.length >= e.wholesales.length
                                ? ((c = o.tool.convertToVND(e.itemPrice[0]) + "đ - " + o.tool.convertToVND(e.itemPrice[e.itemPrice.length - 1]) + "đ"), i()(".chipo-box-info #sell_price").text(c))
                                : 1 < e.wholesales.length
                                ? ((a = ""),
                                  i.a.each(e.wholesales, function (e, t) {
                                      a += "<tr><td>Mua ≥ " + t.begin + " sản phẩm</td><td class='text-chipo'>" + o.tool.convertToVND(t.price) + "đ </td></tr>";
                                  }),
                                  i()(".chipo-box-info .chipo-1688-price").html(a),
                                  i()(".chipo-box-info .chipo-advanced-info").removeClass("hidden"),
                                  i()(".chipo-box-info #sell_price").text(o.tool.convertToVND(e.itemPriceNDT) + "đ"))
                                : 1 < (s = i()(".price-wrapper").find("span.price-text")).length
                                ? ((c = o.tool.convertToVND(s[0].innerText) + "đ - " + o.tool.convertToVND(s[s.length - 1].innerText) + "đ"), i()(".chipo-box-info #sell_price").text(c))
                                : i()(".chipo-box-info #sell_price").text(o.tool.convertToVND(e.itemPriceNDT) + "đ"),
                            1 < e.requireMin && (i()(".chipo-warning").text("Cửa hàng yêu cầu mua tối thiểu " + e.requireMin + " sản phẩm"), i()(".chipo-warning").removeClass("hidden"));
                    }),
                    (e.getProducts = function () {
                        var t = [];
                        return (
                            i()("ul.list-leading .unit-detail-spec-operator a").each(function () {
                                var n;
                                if (i()(this).hasClass("selected")) n = e.getProduct();
                                else {
                                    if (!i()(this).hasClass("completed")) return;
                                    i()(this).children().trigger("click"), (n = e.getProduct());
                                }
                                n &&
                                    n.length &&
                                    (t.length
                                        ? n.forEach(function (e) {
                                              t.push(e);
                                          })
                                        : (t = n));
                            }),
                            t.length ? t : e.getProduct()
                        );
                    }),
                    (e.focusOnError = function () {
                        i()("div.obj-sku, li.opt-li, div.obj-amount, div.sku-scene-wrapper").each(function () {
                            i()(this).find("input:first").focus();
                            var e = { border: "1px solid red" };
                            i()("div.spu-list-content").css(e), i()(this).css(e), i()("html, body").animate({ scrollTop: i()(this).offset().top }, 1e3);
                        });
                    }),
                    (e.init = function () {
                        var t = e.getProduct();
                        (e.first = !1), e.renderView(t);
                    });
            };
    },
    function (e) {
        e.exports = JSON.parse(
            '{"name":"order-extension-vietnam","description":"Order Extension Vietnam","product":"NP","url":"https://api-client.hangve.com/","version":"3.0.1","private":true,"scripts":{"watch":"webpack --mode=development --watch --config config/webpack.config.js","build":"webpack --mode=production --config config/webpack.config.js"},"devDependencies":{"copy-webpack-plugin":"^6.4.1","css-loader":"^4.3.0","file-loader":"^6.2.0","mini-css-extract-plugin":"^0.10.1","uglifyjs-webpack-plugin":"^2.2.0","webpack":"^4.46.0","webpack-cli":"^3.3.12","webpack-merge":"^5.8.0"}}'
        );
    },
    function (e, t, n) {
        n(2), n(1), (e.exports = n(9));
    },
    function (e, t, n) {
        "use strict";
        n.r(t);
        t = n(0);
        var i,
            r,
            o = n.n(t),
            a = n(2),
            s = n(1),
            c = n(3),
            l = n(4),
            u = n(5),
            d = n(6);
        function p(e) {
            var t;
            o()(s.rules.translate[e].basePrice).find(".hidden").length ||
                o()(s.rules.translate[e].basePrice).each(function () {
                    (t = o()(this).text()), o()(this).html("<span class='hidden'>" + t + "</span>Giá");
                }),
                o()(s.rules.translate[e].promoPrice).find(".hidden").length ||
                    o()(s.rules.translate[e].promoPrice).each(function () {
                        (t = o()(this).text()), o()(this).html("<span class='hidden'>" + t + "</span>Khuyến mại");
                    }),
                o()(s.rules.translate[e].stock).find(".hidden").length ||
                    o()(s.rules.translate[e].stock).each(function () {
                        (t = o()(this).text()), o()(this).html("<span class='hidden'>" + t + "</span>Số lượng");
                    }),
                o()(s.rules.translate[e].product).find(".hidden").length ||
                    o()(s.rules.translate[e].product).each(function () {
                        (t = o()(this).text()), o()(this).html("<span class='hidden'>" + t + "</span>Sản phẩm");
                    }),
                o()(s.rules.translate[e].size).find(".hidden").length ||
                    o()(s.rules.translate[e].size).each(function () {
                        (t = o()(this).text()), o()(this).html("<span class='hidden'>" + t + "</span>Kích cỡ");
                    }),
                o()(s.rules.translate[e].color).find(".hidden").length ||
                    o()(s.rules.translate[e].color).each(function () {
                        (t = o()(this).text()), o()(this).html("<span class='hidden'>" + t + "</span>Màu sắc");
                    }),
                o()(s.rules.translate[e].stock_str).find(".hidden").length ||
                    o()(s.rules.translate[e].stock_str).each(function () {
                        var e = (t = o()(this).text()) ? /[\d]+/.exec(t)[0] : 0;
                        o()(this).html("<span class='hidden'>" + t + "</span> (Còn " + e + " sản phẩm)");
                    }),
                s.rules.translate[e].condition &&
                    !o()(s.rules.translate[e].condition).find(".hidden").length &&
                    o()(s.rules.translate[e].condition).each(function () {
                        (t = o()(this).text()), o()(this).html("<span class='hidden'>" + t + "</span>Điều kiện");
                    }),
                o()(s.rules.translate[e].freight).length &&
                    o()(s.rules.translate[e].freight).each(function () {
                        o()(this).text("Kho");
                    }),
                (r = !0);
        }
        o()(document).ready(function () {
            (function () {
                var e = a.tool.getSiteName();

                switch (e) {
                    case "TAOBAO":
                        (i = new u.taobao(a.tool)).initEvent();
                        break;
                    case "TMALL":
                        i = new c.tmall(a.tool);
                        break;
                    case "cn1688":
                        (i = new d.cn1688(a.tool)).initEvent();
                        break;
                    case "jd":
                        (i = new l.jd(a.tool)).initEvent();
                        break;
                    default:
                        return;
                }
                setTimeout(function () {
                    var t, n, c;
                    (t = e),
                        (n = document.createElement("div")),
                        o()(n).addClass("_chipo_template"),
                        document.body.insertBefore(n, document.body.childNodes[0]),
                        o()(n).css({ display: "block" }),
                        o()(n).html(s.addon.toolbar),
                        (c = s.addon.popup),
                        o()(c).appendTo(document.body),
                        // chrome.storage.sync.get("translateWarning", function (e) {
                        //     (c = "<div class='chipo-toggle-container'>"),
                        //         e.translateWarning || void 0 === e.translateWarning
                        //             ? (c += "<a href='javascript:;' id='chipo-toggle-addon'>Thu gọn</a>")
                        //             : ((c += "<a href='javascript:;' id='chipo-toggle-addon'>Mở rộng</a>"), o()(".chipo-alert").addClass("collapsed"), o()(".chipo-alert").hide()),
                        //         (c += "</div>"),
                        //         o()(c).appendTo(document.body);
                        // }),
                        chrome.storage.sync.get("translateAuto", function (e) {
                            e.translateAuto || void 0 === e.translateAuto ? (o()("#_is_translate").attr("checked", "checked"), p(t)) : o()("#_is_translate").removeAttr("checked");
                        }),
                        setTimeout(function () {
                            o()("#chipo-toggle-addon").click(function () {
                                o()(".chipo-alert").hasClass("collapsed")
                                    ? (o()(this).text("Thu gọn"), o()(".chipo-alert").removeClass("collapsed"), chrome.storage.sync.set({ translateWarning: !0 }))
                                    : (o()(this).text("Mở rộng"), o()(".chipo-alert").addClass("collapsed"), chrome.storage.sync.set({ translateWarning: !1 })),
                                    o()(".chipo-alert").toggle("1000");
                            }),
                                o()("#_is_translate").change(function () {
                                    var e, n;
                                    o()(this).is(":checked")
                                        ? (p(t), chrome.storage.sync.set({ translateAuto: !0 }))
                                        : ((e = t),
                                          o()(s.rules.translate[e].basePrice).each(function () {
                                              (n = o()(this).find(".hidden").text()), o()(this).text(n);
                                          }),
                                          o()(s.rules.translate[e].promoPrice).each(function () {
                                              (n = o()(this).find(".hidden").text()), o()(this).text(n);
                                          }),
                                          o()(s.rules.translate[e].stock).each(function () {
                                              (n = o()(this).find(".hidden").text()), o()(this).text(n);
                                          }),
                                          o()(s.rules.translate[e].product).each(function () {
                                              (n = o()(this).find(".hidden").text()), o()(this).text(n);
                                          }),
                                          o()(s.rules.translate[e].size).each(function () {
                                              (n = o()(this).find(".hidden").text()), o()(this).text(n);
                                          }),
                                          o()(s.rules.translate[e].color).each(function () {
                                              (n = o()(this).find(".hidden").text()), o()(this).text(n);
                                          }),
                                          o()(s.rules.translate[e].stock_str).each(function () {
                                              (n = o()(this).find(".hidden").text()), o()(this).text(n);
                                          }),
                                          s.rules.translate[e].condition &&
                                              o()(s.rules.translate[e].condition).each(function () {
                                                  (n = o()(this).find(".hidden").text()), o()(this).text(n);
                                              }),
                                          (r = !1),
                                          chrome.storage.sync.set({ translateAuto: !1 }));
                                }),
                                $('.show_detail').click(function(){
                                    fetchdata();
                                    $('#myChipoModal-order').show();
                                })
                                $('.close-pop').click(function(){
                                    $('#myChipoModal-order').hide();
                                })
                                
                                function getImgURL(url, callback){
                                  var xhr = new XMLHttpRequest();
                                  xhr.onload = function() {
                                      callback(xhr.response);
                                  };

                                  xhr.open('GET', url);
                                  xhr.responseType = 'blob';
                                  xhr.send();
                                }
                                function getCookie(name) {
                                        var cookieArr = document.cookie.split(";");
                                        for(var i = 0; i < cookieArr.length; i++) {
                                            var cookiePair = cookieArr[i].split("=");
                                            if(name == cookiePair[0].trim()) {
                                                return decodeURIComponent(cookiePair[1]);
                                            }
                                        }
                                        return null;
                                    }
                                var info=getCookie('info');
                                if(info!='') var info=JSON.parse(info);

                                function suc_pop(msg){
                                    $('.done_suc_text').text(msg);
                                    $('.done_succes').removeClass('hidden');
                                    $('.done_succes').show();
                                    setTimeout(function() {
                                        $(".done_succes").fadeOut(1000, function() {});
                                    }, 1000);
                                }
                                function delete_product(id_product){
                                    if(confirm("Bạn có chắc muốn xoá sản phẩm này?"))
                                    {
                                    $.ajax({
                                        url:"https://api-client.hangve.com/api/cart/ext/detail/"+id_product+"",
                                        method:"DELETE",
                                         headers:{         
                                              'Authorization' : 'Bearer '+info.token+'',
                                          },
                                        beforeSend: function(){
                                            $('.loader').show();
                                        },
                                        complete: function(){
                                            $('.loader').hide();
                                        },
                                        success:function(data)
                                        {
                                         var msg=data.message; 
                                         fetchdata();
                                         suc_pop(msg);
                                        }
                                    });
                                    }
                                }
                                function delete_supplier(id_supplier){
                                    if(confirm("Bạn có chắc muốn xoá nhà cung cấp này?"))
                                    {

                                    $.ajax({
                                        url:"https://api-client.hangve.com/api/cart/ext/supplier/"+id_supplier+"",
                                        method:"DELETE",
                                        
                                        headers:{         
                                              'Authorization' : 'Bearer '+info.token+'',
                                          },
                                        beforeSend: function(){
                                            $('.loader').show();
                                        },
                                        complete: function(){
                                            $('.loader').hide();
                                        },
                                        success:function(data)
                                        {
                                         var msg=data.message; 
                                         fetchdata();
                                         suc_pop(msg);
                                        }
                                    });
                                    }
                                }
                                
                                function save_product(){
                                    let key = 0;
                                    var arr_update = [];
                                    $('.product').each(function(){
                                        var note = $(this).find('.ghichu').val();
                                        var quantity = $(this).find('.val-quantity').val();
                                        var id_product = $(this).find('.del-product-single').attr('data-product-id');
                                        arr_update[key] = {};
                                        arr_update[key].note = note;
                                        arr_update[key].quantity = quantity;
                                        arr_update[key].id_product = id_product;
                                        key++;
                                    })
                                   var info_product=JSON.stringify(arr_update);
                                   var info_product=JSON.parse(info_product);
                                   for (var k = 0; k < info_product.length; k++) {
                                        $.ajax({
                                            url:"https://api-client.hangve.com/api/cart/ext/detail/"+info_product[k]['id_product']+"",
                                            data:JSON.stringify({
                                                quantity:info_product[k]['quantity'],
                                                note:info_product[k]['note']
                                            }),
                                            method:"PATCH",
                                            headers:{   
                                                'Accept' : 'application/json',
                                                'Content-Type' : 'application/json',    
                                                'Authorization' : 'Bearer '+info.token+'',
                                              },
                                            beforeSend: function(){
                                                $('.loader').show();
                                            },
                                            complete: function(){
                                                $('.loader').hide();
                                            },
                                            success:function(data)
                                            {
                                             var msg=data.message;    
                                             suc_pop(msg);
                                            },
                                        });
                                   }

                                }
                                function fetchdata(){
                                    if (info === null || (info && typeof info.token === 'undefined')) {
                                        console.log('no token: ' + info);
                                        return ;
                                    }
                                    $.ajax({
                                        url:"https://api-client.hangve.com/api/cart/ext",
                                        method:"GET",
                                        headers:{         
                                              'Authorization' : 'Bearer '+info.token+'',
                                          },
                                       
                                                                                     
                                        beforeSend: function(){
                                            $('.loader').show();
                                        },
                                        complete: function(){
                                            $('.loader').hide();
                                        },
                                        success:function(data)
                                        {
                                        var result=data.data;
                                        console.log(result);
                                        var html = '';
                                        var count_product=0;
                                        for (let i = 0; i < result.length; i++) {
                                            var html_product = '';
                                            var total=0;
                                            
                                            for (let j = 0; j < result[i]['products'].length; j++) {
                                                count_product++;
                                                total+=(result[i]['products'][j]['unit_price_cny']*result[i]['products'][j]['quantity']*result[i]['exchange_rate']);
                                                html_product+=`<div class="product d-flex ">
                                                                    <div class="w-40 d-flex align-items-center">
                                                                        <div class="right-15">
                                                                            <div  class="w-h-100"><img class="wh100" src="`+result[i]['products'][j]['image']+`" alt=""></div>
                                                                        </div>
                                                                        <div class="">
                                                                        <a href="`+result[i]['products'][j]['link']+`" class="name-product bot-5">`+result[i]['products'][j]['name']+`</a>
                                                                        <p class="price-product">`+result[i]['products'][j]['classification']+`</p>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    <div class="w-10 d-flex justify-content-center align-items-center">
                                                                        <div class="">
                                                                            <p class="price-product  bot-5 text-center">¥<span class="price-cny">`+result[i]['products'][j]['unit_price_cny']+`</span></p>
                                                                            <p class="price-product  text-center"><span class="price-vny">`+ (Math.round(result[i]['products'][j]['unit_price_cny']*result[i]['exchange_rate'])).toLocaleString('en-US') +`</span> đ</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="w-15 d-flex align-items-center justify-content-center">
                                                                        
                                                                        <div class="pro-qty d-flex align-items-center">
                                                                            <div data-id=''  class="qtybtn downdo quantity-change d-flex align-items-center justify-content-center pointer">-</div>
                                                                            <input type="text"  value="`+result[i]['products'][j]['quantity']+`" class="val-quantity">
                                                                            <div data-id=''  class="qtybtn inc pointer updo quantity-change d-flex align-items-center justify-content-center">+</div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    <div class="w-20 d-flex align-items-center ">
                                                                        <div class="">
                                                                            <textarea  class="ghichu"  name="" id="" placeholder="Ghi chú">`+((result[i]['products'][j]['note']==null) ? '' : result[i]['products'][j]['note'])+`</textarea>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div class="w-10 d-flex align-items-center justify-content-center">
                                                                        <div class="">
                                                                            <p class="text-red  bot-5"><span class="total-vny">`+Math.round(result[i]['products'][j]['unit_price_cny']*result[i]['products'][j]['quantity']*result[i]['exchange_rate']).toLocaleString('en-US')+`</span> đ</p>
                                                                            <p class="text-red price-china">¥<span class="total-cny">`+(result[i]['products'][j]['unit_price_cny']*result[i]['products'][j]['quantity'])+`</span></p>
                                                                        </div>
                                                                    </div>
                                                                    <div   class="w-5 d-flex align-items-center justify-content-center">
                                                                        <p data-product-id="`+result[i]['products'][j]['id']+`"  class="pointer price-product del-product-single">Xoá</p>
                                                                    </div>
                                                                </div>`;
                                            };
                                           html +=`<div class="box-deposit pd15 row bot-20">
                                                <div  class="ls-deposit2 w-100 ">
                                                    <div class="container-nhacc ">
                                                        <div class="nhacungcap-pro">
                                                            <div class="number-ncc">
                                                                <div class="head-main d-flex">
                                                                    <div class="w-40 ">
                                                                        <p class="font-700">Nhà cung cấp:`+result[i]['supplier']['name']+`</p>
                                                                    </div>
                                                                    <div class="w-10 dongia">
                                                                        <p>Đơn giá</p>
                                                                    </div>
                                                                    <div class="w-15 dongia">
                                                                        <p>Số lượng</p>
                                                                    </div>
                                                                    <div class="w-20 dongia">
                                                                        <p>Ghi chú</p>
                                                                    </div>
                                                                    <div class="w-10 dongia">
                                                                        <p>Thành tiền</p>
                                                                    </div>
                                                                    <div class="w-5 dongia">
                                                                        <p>Thao tác</p>
                                                                    </div>
                                                                </div>
                                                                <div class="nhacungcap">
                                                                    `+html_product+`
                                                                    <div class="row del-ncc">
                                                                        <div class="col-sm-8 ">
                                                                            <div data-supplier-id='`+result[i]['supplier']['id']+`' class="del-ncc-img pointer del-supplier-single"></div>
                                                                        </div>
                                                                        <div class="col-sm-4">
                                                                            <p class="price-product margin-bot-0">Tổng tiền:<span class="total-ncc">`+Math.round(total).toLocaleString('en-US')+`đ</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;
                                            
                                        }

                                         $('.render-data').html(html);
                                         $('.chipo-icon-count-cart').text(count_product);
                                         $('.val-quantity').keyup(function (evt) {
                                               if(!$.isNumeric($(this).val())){
                                                 $(this).val(1);
                                               }
                                            });
                                         $('.qtybtn').click(function(){
                                                var button = $(this);
                                                var oldValue = button.parent('.pro-qty').find('input').val();
                                                if (button.hasClass('inc')) {
                                                    var newVal = parseFloat(oldValue) + 1;
                                                    if (newVal>1000) newVal=1000;
                                                } else {
                                                    if (oldValue > 1) {
                                                        var newVal = parseFloat(oldValue) - 1;
                                                    } else {
                                                        newVal = 1;
                                                    }
                                                }
                                                button.parent('.pro-qty').find('input').val(newVal);
                                                $(this).parents('.pro-qty').find('.val-quantity').change();
                                                
                                            })
                                         $('.val-quantity').change(function(){
                                            var cny_product=($(this).parents('.product').find('.price-cny').text().replace(/,/g, '')) ;
                                            var vny_product=($(this).parents('.product').find('.price-vny').text().replace(/,/g, '')) ;
                                            var old_total_product=($(this).parents('.product').find('.total-vny').text().replace(/,/g, '')) ;
                                            var old_Total=($(this).parents('.box-deposit').find('.total-ncc').text().replace('đ','').replace(/,/g, '')) ;
                                            var val=$(this).val();

                                            var new_vny_total=Math.round(val*vny_product).toLocaleString('en-US');
                                            var new_Total=Math.round((old_Total - old_total_product) + (val*vny_product)).toLocaleString('en-US');
                                            var new_cny_total=(val*cny_product);

                                            $(this).parents('.product').find('.total-vny').text(new_vny_total);
                                            $(this).parents('.product').find('.total-cny').text(new_cny_total);
                                            $(this).parents('.box-deposit').find('.total-ncc').text(new_Total+'đ');
                                         })
                                         $('.del-product-single').click(function(){
                                            var id_product=$(this).attr('data-product-id');
                                            delete_product(id_product);
                                         });
                                         $('.del-supplier-single').click(function(){
                                            var id_supplier=$(this).attr('data-supplier-id');
                                            delete_supplier(id_supplier);
                                         });
                                         $('.btn-chipo-save').click(function(){
                                            save_product();
                                         });
                                        },
                                        error: function(xhr){
                                            var text=xhr.responseText;
                                            text=JSON.parse(text);
                                            console.log(text);
                                            $('.render-data').text(text.message);
                                        }
                                    });
                                }
                                $(document).ready(function(){
                                    fetchdata()
                                })
                                o()("._addToCart").click(function () {
                                    if (i)
                                        try {

                                            var info=getCookie('info');
                                            if(info!='') {
                                                var info=JSON.parse(info);
                                                var cus_id=info.user.id;
                                                var token=info.token;
                                            }
                                            var e = i.getProducts ? i.getProducts() : i.getProduct();
                                            if (!e) return;
                                            var n,
                                                r = i.getShop();
                                            
                                            var returnedTarget = Object.assign(e, r);
                                            var returnedTargets=JSON.stringify(returnedTarget);

                                            var returnedTargets=JSON.parse(returnedTargets);
                                            if(Array.isArray(returnedTargets)){
                                            }else{
                                                var newReturnedTargets = [];
                                                newReturnedTargets.push(returnedTargets);
                                                var returnedTargets = newReturnedTargets;
                                            }
                                            console.log(returnedTargets);
                                            var t_quantity = 0;
                                            var t_requireMin = 0;
                                            for (let k in returnedTargets) {
                                                t_quantity += returnedTargets[k].quantity;
                                                t_requireMin = typeof returnedTargets[k].wholesales !== 'undefined' && returnedTargets[k].wholesales[0] ? parseInt(returnedTargets[k].wholesales[0].begin) : 0;
                                            }
                                            if(t_quantity < t_requireMin){
                                                return void alert("Xin chọn tối thiểu " + t_requireMin + " sản phẩm");
                                            }
                                            for(let value in returnedTargets) {
                                                var myArray = returnedTargets[value].itemLink.split("?")[0];
                                                var link_product=myArray+'?id='+returnedTargets[value].itemId; 
                                                let url=returnedTargets[value].propetiesImage.replace('jpg_60x60','jpg_400x400').replace('jpg_30x30','jpg_400x400').replace('http:','https:');


                                                

                                                getImgURL(url, (imgBlob)=>{
                                                    let fileName = url;
                                                    let file = new File([imgBlob], fileName,{type:"image/jpeg", lastModified:new Date().getTime()}, 'utf-8');
                                                    var file_data = file;  
                                                    var form_data = new FormData();                  
                                                    form_data.append('file', file_data);
                                                                                
                                                    $.ajax({
                                                        url: 'https://api-admin.hangve.com/api/file/upload', 
                                                        dataType: 'text',  
                                                        cache: false,
                                                        contentType: false,
                                                        processData: false,
                                                        data: form_data,                         
                                                        type: 'post',

                                                        success:function(response)
                                                        {
                                                            var response=JSON.parse(response);
                                                            var link_img_new=response.data.id;
                                                            
                                                            $.ajax({
                                                            url:"https://api-client.hangve.com/api/cart/ext",
                                                            method:"POST",
                                                            data:{
                                                                supplier: returnedTargets[value].shopName || returnedTargets[value].cateId,
                                                                name:returnedTargets[value].itemName,   
                                                                image:link_img_new,   
                                                                link:link_product,   
                                                                classification:returnedTargets[value].propetiesName,   
                                                                unit_price_cny:returnedTargets[value].itemPriceNDT,   
                                                                quantity:returnedTargets[value].quantity,   
                                                                customer_id:cus_id,
                                                                sku: returnedTargets[value].skuId,
                                                            },
                                                            headers:{         
                                                                'Authorization' : 'Bearer '+token+'',
                                                            },
                                                            beforeSend: function(){
                                                                $('.loader').show();
                                                            },
                                                            complete: function(){
                                                                $('.loader').hide();
                                                            },
                                                            success:function(data)
                                                            {
                                                            var msg=data.message; 
                                                            fetchdata();
                                                            suc_pop(msg); 
                                                            },
                                                            error: function(xhr){
                                                                var text=xhr.responseText;
                                                                text=JSON.parse(text);
                                                                console.log(text);
                                                                $('.render-data').text(text.message);
                                                            }
                                                        });
                                                        },
                                                    });

                                                })
                                            }
                                            
                                            

                                            if (o.a.isEmptyObject(r)) alert("Có lỗi lấy dữ liệu sản phẩm. Xin bạn làm mới trang web và thử lại");
                                            else {
                                                if (Array.isArray(e) && 0 < e.length)
                                                    return (
                                                        (n = 0),
                                                        o.a.each(e, function () {
                                                            this.itemPrice && delete this.itemPrice, (this.note = o()("#chipo-textarea").val()), (n += parseInt(this.quantity));
                                                        }),
                                                        n < parseInt(e[0].wholesales[0].begin) ? void alert("Xin chọn tối thiểu " + e[0].wholesales[0].begin + " sản phẩm") : void a.tool.addToCart(e, r)
                                                    );
                                                if (!o.a.isEmptyObject(e) && e.quantity) {
                                                    if (e.wholesales && parseInt(e.quantity) < parseInt(e.wholesales[0].begin)) return void alert("Xin chọn tối thiểu " + e.wholesales[0].begin + " sản phẩm");
                                                    if (parseInt(e.quantity) <= parseInt(e.stock)) return (e.note = o()("#chipo-textarea").val()), e.itemPrice && delete e.itemPrice, (e = [e]), void a.tool.addToCart(e, r);
                                                    alert("Cửa hàng không còn đủ hàng");
                                                } else alert("Xin chọn ít nhất 1 sản phẩm");
                                            }
                                            i.focusOnError && i.focusOnError();
                                        } catch (n) {
                                            console.log(n), a.tool.addToCartError(t, e);
                                        }

                                });
                        }, 1e3),
                        i && i.init(),
                        setInterval(function () {
                            i.updateView && i.updateView(), o()("#_is_translate").is(":checked") && r && p(e);
                        }, 1e3);
                }, 2e3);
            })(),
                a.tool.calculateExchangeRate(),
                setTimeout(function () {
                    o()("#exchange_rate").text(s.rules.exchangeRate);
                }, 3e3);
        });
    },
]);
