var um = Object.defineProperty;
var dm = (t, e, a) => e in t ? um(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: a
}) : t[e] = a;
var ma = (t, e, a) => (dm(t, typeof e != "symbol" ? e + "" : e, a), a);
import {
  h as po
} from "./index-0e8d7234.js";
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver(i => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function a(i) {
    const o = {};
    return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
  }

  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = a(i);
    fetch(i.href, o)
  }
})();
/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function br(t, e) {
  const a = new Set(t.split(","));
  return e ? n => a.has(n.toLowerCase()) : n => a.has(n)
}
const Pe = {},
  Pn = [],
  $t = () => {},
  cm = () => !1,
  Po = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  yr = t => t.startsWith("onUpdate:"),
  at = Object.assign,
  vr = (t, e) => {
    const a = t.indexOf(e);
    a > -1 && t.splice(a, 1)
  },
  hm = Object.prototype.hasOwnProperty,
  ve = (t, e) => hm.call(t, e),
  oe = Array.isArray,
  Rn = t => $i(t) === "[object Map]",
  Ro = t => $i(t) === "[object Set]",
  Tl = t => $i(t) === "[object Date]",
  me = t => typeof t == "function",
  Qe = t => typeof t == "string",
  Na = t => typeof t == "symbol",
  Te = t => t !== null && typeof t == "object",
  od = t => (Te(t) || me(t)) && me(t.then) && me(t.catch),
  sd = Object.prototype.toString,
  $i = t => sd.call(t),
  mm = t => $i(t).slice(8, -1),
  rd = t => $i(t) === "[object Object]",
  wr = t => Qe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  hi = br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  Io = t => {
    const e = Object.create(null);
    return a => e[a] || (e[a] = t(a))
  },
  fm = /-(\w)/g,
  ra = Io(t => t.replace(fm, (e, a) => a ? a.toUpperCase() : "")),
  gm = /\B([A-Z])/g,
  Jn = Io(t => t.replace(gm, "-$1").toLowerCase()),
  $o = Io(t => t.charAt(0).toUpperCase() + t.slice(1)),
  ts = Io(t => t ? `on${$o(t)}` : ""),
  qa = (t, e) => !Object.is(t, e),
  oo = (t, e) => {
    for (let a = 0; a < t.length; a++) t[a](e)
  },
  ko = (t, e, a) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      value: a
    })
  },
  As = t => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e
  },
  pm = t => {
    const e = Qe(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e
  };
let Al;
const ld = () => Al || (Al = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function _r(t) {
  if (oe(t)) {
    const e = {};
    for (let a = 0; a < t.length; a++) {
      const n = t[a],
        i = Qe(n) ? vm(n) : _r(n);
      if (i)
        for (const o in i) e[o] = i[o]
    }
    return e
  } else if (Qe(t) || Te(t)) return t
}
const km = /;(?![^(]*\))/g,
  bm = /:([^]+)/,
  ym = /\/\*[^]*?\*\//g;

function vm(t) {
  const e = {};
  return t.replace(ym, "").split(km).forEach(a => {
    if (a) {
      const n = a.split(bm);
      n.length > 1 && (e[n[0].trim()] = n[1].trim())
    }
  }), e
}

function fe(t) {
  let e = "";
  if (Qe(t)) e = t;
  else if (oe(t))
    for (let a = 0; a < t.length; a++) {
      const n = fe(t[a]);
      n && (e += n + " ")
    } else if (Te(t))
      for (const a in t) t[a] && (e += a + " ");
  return e.trim()
}
const wm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  _m = br(wm);

function ud(t) {
  return !!t || t === ""
}

function xm(t, e) {
  if (t.length !== e.length) return !1;
  let a = !0;
  for (let n = 0; a && n < t.length; n++) a = Mo(t[n], e[n]);
  return a
}

function Mo(t, e) {
  if (t === e) return !0;
  let a = Tl(t),
    n = Tl(e);
  if (a || n) return a && n ? t.getTime() === e.getTime() : !1;
  if (a = Na(t), n = Na(e), a || n) return t === e;
  if (a = oe(t), n = oe(e), a || n) return a && n ? xm(t, e) : !1;
  if (a = Te(t), n = Te(e), a || n) {
    if (!a || !n) return !1;
    const i = Object.keys(t).length,
      o = Object.keys(e).length;
    if (i !== o) return !1;
    for (const s in t) {
      const r = t.hasOwnProperty(s),
        l = e.hasOwnProperty(s);
      if (r && !l || !r && l || !Mo(t[s], e[s])) return !1
    }
  }
  return String(t) === String(e)
}

function dd(t, e) {
  return t.findIndex(a => Mo(a, e))
}
const be = t => Qe(t) ? t : t == null ? "" : oe(t) || Te(t) && (t.toString === sd || !me(t.toString)) ? JSON.stringify(t, cd, 2) : String(t),
  cd = (t, e) => e && e.__v_isRef ? cd(t, e.value) : Rn(e) ? {
    [`Map(${e.size})`]: [...e.entries()].reduce((a, [n, i], o) => (a[as(n, o) + " =>"] = i, a), {})
  } : Ro(e) ? {
    [`Set(${e.size})`]: [...e.values()].map(a => as(a))
  } : Na(e) ? as(e) : Te(e) && !oe(e) && !rd(e) ? String(e) : e,
  as = (t, e = "") => {
    var a;
    return Na(t) ? `Symbol(${(a=t.description)!=null?a:e})` : t
  };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Pt;
class jm {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Pt, !e && Pt && (this.index = (Pt.scopes || (Pt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(e) {
    if (this._active) {
      const a = Pt;
      try {
        return Pt = this, e()
      } finally {
        Pt = a
      }
    }
  }
  on() {
    Pt = this
  }
  off() {
    Pt = this.parent
  }
  stop(e) {
    if (this._active) {
      let a, n;
      for (a = 0, n = this.effects.length; a < n; a++) this.effects[a].stop();
      for (a = 0, n = this.cleanups.length; a < n; a++) this.cleanups[a]();
      if (this.scopes)
        for (a = 0, n = this.scopes.length; a < n; a++) this.scopes[a].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
      }
      this.parent = void 0, this._active = !1
    }
  }
}

function Em(t, e = Pt) {
  e && e.active && e.effects.push(t)
}

function Cm() {
  return Pt
}

function zm(t) {
  Pt && Pt.cleanups.push(t)
}
let dn;
class xr {
  constructor(e, a, n, i) {
    this.fn = e, this.trigger = a, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Em(this, i)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, _n();
      for (let e = 0; e < this._depsLength; e++) {
        const a = this.deps[e];
        if (a.computed && (Sm(a.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), xn()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0
  }
  run() {
    if (this._dirtyLevel = 0, !this.active) return this.fn();
    let e = $a,
      a = dn;
    try {
      return $a = !0, dn = this, this._runnings++, Dl(this), this.fn()
    } finally {
      Ol(this), this._runnings--, dn = a, $a = e
    }
  }
  stop() {
    var e;
    this.active && (Dl(this), Ol(this), (e = this.onStop) == null || e.call(this), this.active = !1)
  }
}

function Sm(t) {
  return t.value
}

function Dl(t) {
  t._trackId++, t._depsLength = 0
}

function Ol(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++) hd(t.deps[e], t);
    t.deps.length = t._depsLength
  }
}

function hd(t, e) {
  const a = t.get(e);
  a !== void 0 && e._trackId !== a && (t.delete(e), t.size === 0 && t.cleanup())
}
let $a = !0,
  Ds = 0;
const md = [];

function _n() {
  md.push($a), $a = !1
}

function xn() {
  const t = md.pop();
  $a = t === void 0 ? !0 : t
}

function jr() {
  Ds++
}

function Er() {
  for (Ds--; !Ds && Os.length;) Os.shift()()
}

function fd(t, e, a) {
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const n = t.deps[t._depsLength];
    n !== e ? (n && hd(n, t), t.deps[t._depsLength++] = e) : t._depsLength++
  }
}
const Os = [];

function gd(t, e, a) {
  jr();
  for (const n of t.keys()) {
    let i;
    n._dirtyLevel < e && (i ?? (i = t.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = e), n._shouldSchedule && (i ?? (i = t.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && Os.push(n.scheduler)))
  }
  Er()
}
const pd = (t, e) => {
    const a = new Map;
    return a.cleanup = t, a.computed = e, a
  },
  Fs = new WeakMap,
  cn = Symbol(""),
  Ps = Symbol("");

function St(t, e, a) {
  if ($a && dn) {
    let n = Fs.get(t);
    n || Fs.set(t, n = new Map);
    let i = n.get(a);
    i || n.set(a, i = pd(() => n.delete(a))), fd(dn, i)
  }
}

function ba(t, e, a, n, i, o) {
  const s = Fs.get(t);
  if (!s) return;
  let r = [];
  if (e === "clear") r = [...s.values()];
  else if (a === "length" && oe(t)) {
    const l = Number(n);
    s.forEach((u, d) => {
      (d === "length" || !Na(d) && d >= l) && r.push(u)
    })
  } else switch (a !== void 0 && r.push(s.get(a)), e) {
    case "add":
      oe(t) ? wr(a) && r.push(s.get("length")) : (r.push(s.get(cn)), Rn(t) && r.push(s.get(Ps)));
      break;
    case "delete":
      oe(t) || (r.push(s.get(cn)), Rn(t) && r.push(s.get(Ps)));
      break;
    case "set":
      Rn(t) && r.push(s.get(cn));
      break
  }
  jr();
  for (const l of r) l && gd(l, 4);
  Er()
}
const Tm = br("__proto__,__v_isRef,__isVue"),
  kd = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(Na)),
  Fl = Am();

function Am() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
    t[e] = function (...a) {
      const n = ue(this);
      for (let o = 0, s = this.length; o < s; o++) St(n, "get", o + "");
      const i = n[e](...a);
      return i === -1 || i === !1 ? n[e](...a.map(ue)) : i
    }
  }), ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
    t[e] = function (...a) {
      _n(), jr();
      const n = ue(this)[e].apply(this, a);
      return Er(), xn(), n
    }
  }), t
}

function Dm(t) {
  const e = ue(this);
  return St(e, "has", t), e.hasOwnProperty(t)
}
class bd {
  constructor(e = !1, a = !1) {
    this._isReadonly = e, this._isShallow = a
  }
  get(e, a, n) {
    const i = this._isReadonly,
      o = this._isShallow;
    if (a === "__v_isReactive") return !i;
    if (a === "__v_isReadonly") return i;
    if (a === "__v_isShallow") return o;
    if (a === "__v_raw") return n === (i ? o ? Vm : _d : o ? wd : vd).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
    const s = oe(e);
    if (!i) {
      if (s && ve(Fl, a)) return Reflect.get(Fl, a, n);
      if (a === "hasOwnProperty") return Dm
    }
    const r = Reflect.get(e, a, n);
    return (Na(a) ? kd.has(a) : Tm(a)) || (i || St(e, "get", a), o) ? r : Tt(r) ? s && wr(a) ? r : r.value : Te(r) ? i ? jd(r) : ha(r) : r
  }
}
class yd extends bd {
  constructor(e = !1) {
    super(!1, e)
  }
  set(e, a, n, i) {
    let o = e[a];
    if (!this._isShallow) {
      const l = qn(o);
      if (!bo(n) && !qn(n) && (o = ue(o), n = ue(n)), !oe(e) && Tt(o) && !Tt(n)) return l ? !1 : (o.value = n, !0)
    }
    const s = oe(e) && wr(a) ? Number(a) < e.length : ve(e, a),
      r = Reflect.set(e, a, n, i);
    return e === ue(i) && (s ? qa(n, o) && ba(e, "set", a, n) : ba(e, "add", a, n)), r
  }
  deleteProperty(e, a) {
    const n = ve(e, a);
    e[a];
    const i = Reflect.deleteProperty(e, a);
    return i && n && ba(e, "delete", a, void 0), i
  }
  has(e, a) {
    const n = Reflect.has(e, a);
    return (!Na(a) || !kd.has(a)) && St(e, "has", a), n
  }
  ownKeys(e) {
    return St(e, "iterate", oe(e) ? "length" : cn), Reflect.ownKeys(e)
  }
}
class Om extends bd {
  constructor(e = !1) {
    super(!0, e)
  }
  set(e, a) {
    return !0
  }
  deleteProperty(e, a) {
    return !0
  }
}
const Fm = new yd,
  Pm = new Om,
  Rm = new yd(!0),
  Cr = t => t,
  Lo = t => Reflect.getPrototypeOf(t);

function Wi(t, e, a = !1, n = !1) {
  t = t.__v_raw;
  const i = ue(t),
    o = ue(e);
  a || (qa(e, o) && St(i, "get", e), St(i, "get", o));
  const {
    has: s
  } = Lo(i), r = n ? Cr : a ? Tr : xi;
  if (s.call(i, e)) return r(t.get(e));
  if (s.call(i, o)) return r(t.get(o));
  t !== i && t.get(e)
}

function Gi(t, e = !1) {
  const a = this.__v_raw,
    n = ue(a),
    i = ue(t);
  return e || (qa(t, i) && St(n, "has", t), St(n, "has", i)), t === i ? a.has(t) : a.has(t) || a.has(i)
}

function Ki(t, e = !1) {
  return t = t.__v_raw, !e && St(ue(t), "iterate", cn), Reflect.get(t, "size", t)
}

function Pl(t) {
  t = ue(t);
  const e = ue(this);
  return Lo(e).has.call(e, t) || (e.add(t), ba(e, "add", t, t)), this
}

function Rl(t, e) {
  e = ue(e);
  const a = ue(this),
    {
      has: n,
      get: i
    } = Lo(a);
  let o = n.call(a, t);
  o || (t = ue(t), o = n.call(a, t));
  const s = i.call(a, t);
  return a.set(t, e), o ? qa(e, s) && ba(a, "set", t, e) : ba(a, "add", t, e), this
}

function Il(t) {
  const e = ue(this),
    {
      has: a,
      get: n
    } = Lo(e);
  let i = a.call(e, t);
  i || (t = ue(t), i = a.call(e, t)), n && n.call(e, t);
  const o = e.delete(t);
  return i && ba(e, "delete", t, void 0), o
}

function $l() {
  const t = ue(this),
    e = t.size !== 0,
    a = t.clear();
  return e && ba(t, "clear", void 0, void 0), a
}

function Yi(t, e) {
  return function (n, i) {
    const o = this,
      s = o.__v_raw,
      r = ue(s),
      l = e ? Cr : t ? Tr : xi;
    return !t && St(r, "iterate", cn), s.forEach((u, d) => n.call(i, l(u), l(d), o))
  }
}

function Zi(t, e, a) {
  return function (...n) {
    const i = this.__v_raw,
      o = ue(i),
      s = Rn(o),
      r = t === "entries" || t === Symbol.iterator && s,
      l = t === "keys" && s,
      u = i[t](...n),
      d = a ? Cr : e ? Tr : xi;
    return !e && St(o, "iterate", l ? Ps : cn), {
      next() {
        const {
          value: c,
          done: h
        } = u.next();
        return h ? {
          value: c,
          done: h
        } : {
          value: r ? [d(c[0]), d(c[1])] : d(c),
          done: h
        }
      },
      [Symbol.iterator]() {
        return this
      }
    }
  }
}

function xa(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this
  }
}

function Im() {
  const t = {
      get(o) {
        return Wi(this, o)
      },
      get size() {
        return Ki(this)
      },
      has: Gi,
      add: Pl,
      set: Rl,
      delete: Il,
      clear: $l,
      forEach: Yi(!1, !1)
    },
    e = {
      get(o) {
        return Wi(this, o, !1, !0)
      },
      get size() {
        return Ki(this)
      },
      has: Gi,
      add: Pl,
      set: Rl,
      delete: Il,
      clear: $l,
      forEach: Yi(!1, !0)
    },
    a = {
      get(o) {
        return Wi(this, o, !0)
      },
      get size() {
        return Ki(this, !0)
      },
      has(o) {
        return Gi.call(this, o, !0)
      },
      add: xa("add"),
      set: xa("set"),
      delete: xa("delete"),
      clear: xa("clear"),
      forEach: Yi(!0, !1)
    },
    n = {
      get(o) {
        return Wi(this, o, !0, !0)
      },
      get size() {
        return Ki(this, !0)
      },
      has(o) {
        return Gi.call(this, o, !0)
      },
      add: xa("add"),
      set: xa("set"),
      delete: xa("delete"),
      clear: xa("clear"),
      forEach: Yi(!0, !0)
    };
  return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
    t[o] = Zi(o, !1, !1), a[o] = Zi(o, !0, !1), e[o] = Zi(o, !1, !0), n[o] = Zi(o, !0, !0)
  }), [t, a, e, n]
}
const [$m, Mm, Lm, Bm] = Im();

function zr(t, e) {
  const a = e ? t ? Bm : Lm : t ? Mm : $m;
  return (n, i, o) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? n : Reflect.get(ve(a, i) && i in n ? a : n, i, o)
}
const Nm = {
    get: zr(!1, !1)
  },
  qm = {
    get: zr(!1, !0)
  },
  Um = {
    get: zr(!0, !1)
  },
  vd = new WeakMap,
  wd = new WeakMap,
  _d = new WeakMap,
  Vm = new WeakMap;

function Hm(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0
  }
}

function Wm(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Hm(mm(t))
}

function ha(t) {
  return qn(t) ? t : Sr(t, !1, Fm, Nm, vd)
}

function xd(t) {
  return Sr(t, !1, Rm, qm, wd)
}

function jd(t) {
  return Sr(t, !0, Pm, Um, _d)
}

function Sr(t, e, a, n, i) {
  if (!Te(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
  const o = i.get(t);
  if (o) return o;
  const s = Wm(t);
  if (s === 0) return t;
  const r = new Proxy(t, s === 2 ? n : a);
  return i.set(t, r), r
}

function In(t) {
  return qn(t) ? In(t.__v_raw) : !!(t && t.__v_isReactive)
}

function qn(t) {
  return !!(t && t.__v_isReadonly)
}

function bo(t) {
  return !!(t && t.__v_isShallow)
}

function Ed(t) {
  return In(t) || qn(t)
}

function ue(t) {
  const e = t && t.__v_raw;
  return e ? ue(e) : t
}

function Cd(t) {
  return Object.isExtensible(t) && ko(t, "__v_skip", !0), t
}
const xi = t => Te(t) ? ha(t) : t,
  Tr = t => Te(t) ? jd(t) : t;
class zd {
  constructor(e, a, n, i) {
    this.getter = e, this._setter = a, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new xr(() => e(this._value), () => mi(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = n
  }
  get value() {
    const e = ue(this);
    return (!e._cacheable || e.effect.dirty) && qa(e._value, e._value = e.effect.run()) && mi(e, 4), Sd(e), e.effect._dirtyLevel >= 2 && mi(e, 2), e._value
  }
  set value(e) {
    this._setter(e)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(e) {
    this.effect.dirty = e
  }
}

function Gm(t, e, a = !1) {
  let n, i;
  const o = me(t);
  return o ? (n = t, i = $t) : (n = t.get, i = t.set), new zd(n, i, o || !i, a)
}

function Sd(t) {
  var e;
  $a && dn && (t = ue(t), fd(dn, (e = t.dep) != null ? e : t.dep = pd(() => t.dep = void 0, t instanceof zd ? t : void 0)))
}

function mi(t, e = 4, a) {
  t = ue(t);
  const n = t.dep;
  n && gd(n, e)
}

function Tt(t) {
  return !!(t && t.__v_isRef === !0)
}

function M(t) {
  return Td(t, !1)
}

function Ar(t) {
  return Td(t, !0)
}

function Td(t, e) {
  return Tt(t) ? t : new Km(t, e)
}
class Km {
  constructor(e, a) {
    this.__v_isShallow = a, this.dep = void 0, this.__v_isRef = !0, this._rawValue = a ? e : ue(e), this._value = a ? e : xi(e)
  }
  get value() {
    return Sd(this), this._value
  }
  set value(e) {
    const a = this.__v_isShallow || bo(e) || qn(e);
    e = a ? e : ue(e), qa(e, this._rawValue) && (this._rawValue = e, this._value = a ? e : xi(e), mi(this, 4))
  }
}

function Ml(t) {
  mi(t, 4)
}

function F(t) {
  return Tt(t) ? t.value : t
}
const Ym = {
  get: (t, e, a) => F(Reflect.get(t, e, a)),
  set: (t, e, a, n) => {
    const i = t[e];
    return Tt(i) && !Tt(a) ? (i.value = a, !0) : Reflect.set(t, e, a, n)
  }
};

function Ad(t) {
  return In(t) ? t : new Proxy(t, Ym)
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function Ma(t, e, a, n) {
  try {
    return n ? t(...n) : t()
  } catch (i) {
    Bo(i, e, a)
  }
}

function Wt(t, e, a, n) {
  if (me(t)) {
    const o = Ma(t, e, a, n);
    return o && od(o) && o.catch(s => {
      Bo(s, e, a)
    }), o
  }
  const i = [];
  for (let o = 0; o < t.length; o++) i.push(Wt(t[o], e, a, n));
  return i
}

function Bo(t, e, a, n = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let o = e.parent;
    const s = e.proxy,
      r = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; o;) {
      const u = o.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](t, s, r) === !1) return
      }
      o = o.parent
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      Ma(l, null, 10, [t, s, r]);
      return
    }
  }
  Zm(t, a, i, n)
}

function Zm(t, e, a, n = !0) {
  console.error(t)
}
let ji = !1,
  Rs = !1;
const mt = [];
let na = 0;
const $n = [];
let za = null,
  nn = 0;
const Dd = Promise.resolve();
let Dr = null;

function ut(t) {
  const e = Dr || Dd;
  return t ? e.then(this ? t.bind(this) : t) : e
}

function Xm(t) {
  let e = na + 1,
    a = mt.length;
  for (; e < a;) {
    const n = e + a >>> 1,
      i = mt[n],
      o = Ei(i);
    o < t || o === t && i.pre ? e = n + 1 : a = n
  }
  return e
}

function Or(t) {
  (!mt.length || !mt.includes(t, ji && t.allowRecurse ? na + 1 : na)) && (t.id == null ? mt.push(t) : mt.splice(Xm(t.id), 0, t), Od())
}

function Od() {
  !ji && !Rs && (Rs = !0, Dr = Dd.then(Pd))
}

function Jm(t) {
  const e = mt.indexOf(t);
  e > na && mt.splice(e, 1)
}

function Qm(t) {
  oe(t) ? $n.push(...t) : (!za || !za.includes(t, t.allowRecurse ? nn + 1 : nn)) && $n.push(t), Od()
}

function Ll(t, e, a = ji ? na + 1 : 0) {
  for (; a < mt.length; a++) {
    const n = mt[a];
    if (n && n.pre) {
      if (t && n.id !== t.uid) continue;
      mt.splice(a, 1), a--, n()
    }
  }
}

function Fd(t) {
  if ($n.length) {
    const e = [...new Set($n)].sort((a, n) => Ei(a) - Ei(n));
    if ($n.length = 0, za) {
      za.push(...e);
      return
    }
    for (za = e, nn = 0; nn < za.length; nn++) za[nn]();
    za = null, nn = 0
  }
}
const Ei = t => t.id == null ? 1 / 0 : t.id,
  ef = (t, e) => {
    const a = Ei(t) - Ei(e);
    if (a === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1
    }
    return a
  };

function Pd(t) {
  Rs = !1, ji = !0, mt.sort(ef);
  const e = $t;
  try {
    for (na = 0; na < mt.length; na++) {
      const a = mt[na];
      a && a.active !== !1 && Ma(a, null, 14)
    }
  } finally {
    na = 0, mt.length = 0, Fd(), ji = !1, Dr = null, (mt.length || $n.length) && Pd()
  }
}

function tf(t, e, ...a) {
  if (t.isUnmounted) return;
  const n = t.vnode.props || Pe;
  let i = a;
  const o = e.startsWith("update:"),
    s = o && e.slice(7);
  if (s && s in n) {
    const d = `${s==="modelValue"?"model":s}Modifiers`,
      {
        number: c,
        trim: h
      } = n[d] || Pe;
    h && (i = a.map(f => Qe(f) ? f.trim() : f)), c && (i = a.map(As))
  }
  let r, l = n[r = ts(e)] || n[r = ts(ra(e))];
  !l && o && (l = n[r = ts(Jn(e))]), l && Wt(l, t, 6, i);
  const u = n[r + "Once"];
  if (u) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[r]) return;
    t.emitted[r] = !0, Wt(u, t, 6, i)
  }
}

function Rd(t, e, a = !1) {
  const n = e.emitsCache,
    i = n.get(t);
  if (i !== void 0) return i;
  const o = t.emits;
  let s = {},
    r = !1;
  if (!me(t)) {
    const l = u => {
      const d = Rd(u, e, !0);
      d && (r = !0, at(s, d))
    };
    !a && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l)
  }
  return !o && !r ? (Te(t) && n.set(t, null), null) : (oe(o) ? o.forEach(l => s[l] = null) : at(s, o), Te(t) && n.set(t, s), s)
}

function No(t, e) {
  return !t || !Po(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), ve(t, e[0].toLowerCase() + e.slice(1)) || ve(t, Jn(e)) || ve(t, e))
}
let vt = null,
  qo = null;

function yo(t) {
  const e = vt;
  return vt = t, qo = t && t.type.__scopeId || null, e
}

function af(t) {
  qo = t
}

function nf() {
  qo = null
}

function K(t, e = vt, a) {
  if (!e || t._n) return t;
  const n = (...i) => {
    n._d && Ql(-1);
    const o = yo(e);
    let s;
    try {
      s = t(...i)
    } finally {
      yo(o), n._d && Ql(1)
    }
    return s
  };
  return n._n = !0, n._c = !0, n._d = !0, n
}

function ns(t) {
  const {
    type: e,
    vnode: a,
    proxy: n,
    withProxy: i,
    props: o,
    propsOptions: [s],
    slots: r,
    attrs: l,
    emit: u,
    render: d,
    renderCache: c,
    data: h,
    setupState: f,
    ctx: p,
    inheritAttrs: g
  } = t;
  let k, w;
  const y = yo(t);
  try {
    if (a.shapeFlag & 4) {
      const v = i || n,
        E = v;
      k = aa(d.call(E, v, c, o, f, h, p)), w = l
    } else {
      const v = e;
      k = aa(v.length > 1 ? v(o, {
        attrs: l,
        slots: r,
        emit: u
      }) : v(o, null)), w = e.props ? l : of (l)
    }
  } catch (v) {
    ki.length = 0, Bo(v, t, 1), k = D(Xt)
  }
  let j = k;
  if (w && g !== !1) {
    const v = Object.keys(w),
      {
        shapeFlag: E
      } = j;
    v.length && E & 7 && (s && v.some(yr) && (w = sf(w, s)), j = la(j, w))
  }
  return a.dirs && (j = la(j), j.dirs = j.dirs ? j.dirs.concat(a.dirs) : a.dirs), a.transition && (j.transition = a.transition), k = j, yo(y), k
}
const of = t => {
  let e;
  for (const a in t)(a === "class" || a === "style" || Po(a)) && ((e || (e = {}))[a] = t[a]);
  return e
}, sf = (t, e) => {
  const a = {};
  for (const n in t)(!yr(n) || !(n.slice(9) in e)) && (a[n] = t[n]);
  return a
};

function rf(t, e, a) {
  const {
    props: n,
    children: i,
    component: o
  } = t, {
    props: s,
    children: r,
    patchFlag: l
  } = e, u = o.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (a && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return n ? Bl(n, s, u) : !!s;
    if (l & 8) {
      const d = e.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        const h = d[c];
        if (s[h] !== n[h] && !No(u, h)) return !0
      }
    }
  } else return (i || r) && (!r || !r.$stable) ? !0 : n === s ? !1 : n ? s ? Bl(n, s, u) : !0 : !!s;
  return !1
}

function Bl(t, e, a) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (e[o] !== t[o] && !No(a, o)) return !0
  }
  return !1
}

function lf({
  vnode: t,
  parent: e
}, a) {
  for (; e;) {
    const n = e.subTree;
    if (n.suspense && n.suspense.activeBranch === t && (n.el = t.el), n === t)(t = e.vnode).el = a, e = e.parent;
    else break
  }
}
const Id = "components";

function xt(t, e) {
  return df(Id, t, !0, e) || t
}
const uf = Symbol.for("v-ndc");

function df(t, e, a = !0, n = !1) {
  const i = vt || dt;
  if (i) {
    const o = i.type;
    if (t === Id) {
      const r = rg(o, !1);
      if (r && (r === e || r === ra(e) || r === $o(ra(e)))) return o
    }
    const s = Nl(i[t] || o[t], e) || Nl(i.appContext[t], e);
    return !s && n ? o : s
  }
}

function Nl(t, e) {
  return t && (t[e] || t[ra(e)] || t[$o(ra(e))])
}
const cf = t => t.__isSuspense;

function hf(t, e) {
  e && e.pendingBranch ? oe(t) ? e.effects.push(...t) : e.effects.push(t) : Qm(t)
}
const mf = Symbol.for("v-scx"),
  ff = () => Re(mf);

function nt(t, e) {
  return Fr(t, null, e)
}
const Xi = {};

function He(t, e, a) {
  return Fr(t, e, a)
}

function Fr(t, e, {
  immediate: a,
  deep: n,
  flush: i,
  once: o,
  onTrack: s,
  onTrigger: r
} = Pe) {
  if (e && o) {
    const C = e;
    e = (...T) => {
      C(...T), E()
    }
  }
  const l = dt,
    u = C => n === !0 ? C : rn(C, n === !1 ? 1 : void 0);
  let d, c = !1,
    h = !1;
  if (Tt(t) ? (d = () => t.value, c = bo(t)) : In(t) ? (d = () => u(t), c = !0) : oe(t) ? (h = !0, c = t.some(C => In(C) || bo(C)), d = () => t.map(C => {
      if (Tt(C)) return C.value;
      if (In(C)) return u(C);
      if (me(C)) return Ma(C, l, 2)
    })) : me(t) ? e ? d = () => Ma(t, l, 2) : d = () => (f && f(), Wt(t, l, 3, [p])) : d = $t, e && n) {
    const C = d;
    d = () => rn(C())
  }
  let f, p = C => {
      f = j.onStop = () => {
        Ma(C, l, 4), f = j.onStop = void 0
      }
    },
    g;
  if (Go)
    if (p = $t, e ? a && Wt(e, l, 3, [d(), h ? [] : void 0, p]) : d(), i === "sync") {
      const C = ff();
      g = C.__watcherHandles || (C.__watcherHandles = [])
    } else return $t;
  let k = h ? new Array(t.length).fill(Xi) : Xi;
  const w = () => {
    if (!(!j.active || !j.dirty))
      if (e) {
        const C = j.run();
        (n || c || (h ? C.some((T, _) => qa(T, k[_])) : qa(C, k))) && (f && f(), Wt(e, l, 3, [C, k === Xi ? void 0 : h && k[0] === Xi ? [] : k, p]), k = C)
      } else j.run()
  };
  w.allowRecurse = !!e;
  let y;
  i === "sync" ? y = w : i === "post" ? y = () => _t(w, l && l.suspense) : (w.pre = !0, l && (w.id = l.uid), y = () => Or(w));
  const j = new xr(d, $t, y),
    v = Cm(),
    E = () => {
      j.stop(), v && vr(v.effects, j)
    };
  return e ? a ? w() : k = j.run() : i === "post" ? _t(j.run.bind(j), l && l.suspense) : j.run(), g && g.push(E), E
}

function gf(t, e, a) {
  const n = this.proxy,
    i = Qe(t) ? t.includes(".") ? $d(n, t) : () => n[t] : t.bind(n, n);
  let o;
  me(e) ? o = e : (o = e.handler, a = e);
  const s = Mi(this),
    r = Fr(i, o.bind(n), a);
  return s(), r
}

function $d(t, e) {
  const a = e.split(".");
  return () => {
    let n = t;
    for (let i = 0; i < a.length && n; i++) n = n[a[i]];
    return n
  }
}

function rn(t, e, a = 0, n) {
  if (!Te(t) || t.__v_skip) return t;
  if (e && e > 0) {
    if (a >= e) return t;
    a++
  }
  if (n = n || new Set, n.has(t)) return t;
  if (n.add(t), Tt(t)) rn(t.value, e, a, n);
  else if (oe(t))
    for (let i = 0; i < t.length; i++) rn(t[i], e, a, n);
  else if (Ro(t) || Rn(t)) t.forEach(i => {
    rn(i, e, a, n)
  });
  else if (rd(t))
    for (const i in t) rn(t[i], e, a, n);
  return t
}

function le(t, e) {
  if (vt === null) return t;
  const a = Ko(vt) || vt.proxy,
    n = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [o, s, r, l = Pe] = e[i];
    o && (me(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && rn(s), n.push({
      dir: o,
      instance: a,
      value: s,
      oldValue: void 0,
      arg: r,
      modifiers: l
    }))
  }
  return t
}

function Ya(t, e, a, n) {
  const i = t.dirs,
    o = e && e.dirs;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    o && (r.oldValue = o[s].value);
    let l = r.dir[n];
    l && (_n(), Wt(l, a, 8, [t.el, r, t, e]), xn())
  }
}
const Sa = Symbol("_leaveCb"),
  Ji = Symbol("_enterCb");

function pf() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map
  };
  return qe(() => {
    t.isMounted = !0
  }), qd(() => {
    t.isUnmounting = !0
  }), t
}
const qt = [Function, Array],
  Md = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: qt,
    onEnter: qt,
    onAfterEnter: qt,
    onEnterCancelled: qt,
    onBeforeLeave: qt,
    onLeave: qt,
    onAfterLeave: qt,
    onLeaveCancelled: qt,
    onBeforeAppear: qt,
    onAppear: qt,
    onAfterAppear: qt,
    onAppearCancelled: qt
  },
  kf = {
    name: "BaseTransition",
    props: Md,
    setup(t, {
      slots: e
    }) {
      const a = ec(),
        n = pf();
      return () => {
        const i = e.default && Bd(e.default(), !0);
        if (!i || !i.length) return;
        let o = i[0];
        if (i.length > 1) {
          for (const h of i)
            if (h.type !== Xt) {
              o = h;
              break
            }
        }
        const s = ue(t),
          {
            mode: r
          } = s;
        if (n.isLeaving) return is(o);
        const l = ql(o);
        if (!l) return is(o);
        const u = Is(l, s, n, a);
        $s(l, u);
        const d = a.subTree,
          c = d && ql(d);
        if (c && c.type !== Xt && !on(l, c)) {
          const h = Is(c, s, n, a);
          if ($s(c, h), r === "out-in") return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, a.update.active !== !1 && (a.effect.dirty = !0, a.update())
          }, is(o);
          r === "in-out" && l.type !== Xt && (h.delayLeave = (f, p, g) => {
            const k = Ld(n, c);
            k[String(c.key)] = c, f[Sa] = () => {
              p(), f[Sa] = void 0, delete u.delayedLeave
            }, u.delayedLeave = g
          })
        }
        return o
      }
    }
  },
  bf = kf;

function Ld(t, e) {
  const {
    leavingVNodes: a
  } = t;
  let n = a.get(e.type);
  return n || (n = Object.create(null), a.set(e.type, n)), n
}

function Is(t, e, a, n) {
  const {
    appear: i,
    mode: o,
    persisted: s = !1,
    onBeforeEnter: r,
    onEnter: l,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: c,
    onLeave: h,
    onAfterLeave: f,
    onLeaveCancelled: p,
    onBeforeAppear: g,
    onAppear: k,
    onAfterAppear: w,
    onAppearCancelled: y
  } = e, j = String(t.key), v = Ld(a, t), E = (_, z) => {
    _ && Wt(_, n, 9, z)
  }, C = (_, z) => {
    const S = z[1];
    E(_, z), oe(_) ? _.every($ => $.length <= 1) && S() : _.length <= 1 && S()
  }, T = {
    mode: o,
    persisted: s,
    beforeEnter(_) {
      let z = r;
      if (!a.isMounted)
        if (i) z = g || r;
        else return;
      _[Sa] && _[Sa](!0);
      const S = v[j];
      S && on(t, S) && S.el[Sa] && S.el[Sa](), E(z, [_])
    },
    enter(_) {
      let z = l,
        S = u,
        $ = d;
      if (!a.isMounted)
        if (i) z = k || l, S = w || u, $ = y || d;
        else return;
      let O = !1;
      const L = _[Ji] = Q => {
        O || (O = !0, Q ? E($, [_]) : E(S, [_]), T.delayedLeave && T.delayedLeave(), _[Ji] = void 0)
      };
      z ? C(z, [_, L]) : L()
    },
    leave(_, z) {
      const S = String(t.key);
      if (_[Ji] && _[Ji](!0), a.isUnmounting) return z();
      E(c, [_]);
      let $ = !1;
      const O = _[Sa] = L => {
        $ || ($ = !0, z(), L ? E(p, [_]) : E(f, [_]), _[Sa] = void 0, v[S] === t && delete v[S])
      };
      v[S] = t, h ? C(h, [_, O]) : O()
    },
    clone(_) {
      return Is(_, e, a, n)
    }
  };
  return T
}

function is(t) {
  if (Uo(t)) return t = la(t), t.children = null, t
}

function ql(t) {
  return Uo(t) ? t.children ? t.children[0] : void 0 : t
}

function $s(t, e) {
  t.shapeFlag & 6 && t.component ? $s(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}

function Bd(t, e = !1, a) {
  let n = [],
    i = 0;
  for (let o = 0; o < t.length; o++) {
    let s = t[o];
    const r = a == null ? s.key : String(a) + String(s.key != null ? s.key : o);
    s.type === Ge ? (s.patchFlag & 128 && i++, n = n.concat(Bd(s.children, e, r))) : (e || s.type !== Xt) && n.push(r != null ? la(s, {
      key: r
    }) : s)
  }
  if (i > 1)
    for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
  return n
} /*! #__NO_SIDE_EFFECTS__ */
function ge(t, e) {
  return me(t) ? (() => at({
    name: t.name
  }, e, {
    setup: t
  }))() : t
}
const so = t => !!t.type.__asyncLoader,
  Uo = t => t.type.__isKeepAlive;

function yf(t, e) {
  Nd(t, "a", e)
}

function vf(t, e) {
  Nd(t, "da", e)
}

function Nd(t, e, a = dt) {
  const n = t.__wdc || (t.__wdc = () => {
    let i = a;
    for (; i;) {
      if (i.isDeactivated) return;
      i = i.parent
    }
    return t()
  });
  if (Vo(e, n, a), a) {
    let i = a.parent;
    for (; i && i.parent;) Uo(i.parent.vnode) && wf(n, e, a, i), i = i.parent
  }
}

function wf(t, e, a, n) {
  const i = Vo(e, t, n, !0);
  At(() => {
    vr(n[e], i)
  }, a)
}

function Vo(t, e, a = dt, n = !1) {
  if (a) {
    const i = a[t] || (a[t] = []),
      o = e.__weh || (e.__weh = (...s) => {
        if (a.isUnmounted) return;
        _n();
        const r = Mi(a),
          l = Wt(e, a, t, s);
        return r(), xn(), l
      });
    return n ? i.unshift(o) : i.push(o), o
  }
}
const wa = t => (e, a = dt) => (!Go || t === "sp") && Vo(t, (...n) => e(...n), a),
  _f = wa("bm"),
  qe = wa("m"),
  xf = wa("bu"),
  jf = wa("u"),
  qd = wa("bum"),
  At = wa("um"),
  Ef = wa("sp"),
  Cf = wa("rtg"),
  zf = wa("rtc");

function Sf(t, e = dt) {
  Vo("ec", t, e)
}

function kn(t, e, a, n) {
  let i;
  const o = a && a[n];
  if (oe(t) || Qe(t)) {
    i = new Array(t.length);
    for (let s = 0, r = t.length; s < r; s++) i[s] = e(t[s], s, void 0, o && o[s])
  } else if (typeof t == "number") {
    i = new Array(t);
    for (let s = 0; s < t; s++) i[s] = e(s + 1, s, void 0, o && o[s])
  } else if (Te(t))
    if (t[Symbol.iterator]) i = Array.from(t, (s, r) => e(s, r, void 0, o && o[r]));
    else {
      const s = Object.keys(t);
      i = new Array(s.length);
      for (let r = 0, l = s.length; r < l; r++) {
        const u = s[r];
        i[r] = e(t[u], u, r, o && o[r])
      }
    }
  else i = [];
  return a && (a[n] = i), i
}
const Ms = t => t ? tc(t) ? Ko(t) || t.proxy : Ms(t.parent) : null,
  fi = at(Object.create(null), {
    $: t => t,
    $el: t => t.vnode.el,
    $data: t => t.data,
    $props: t => t.props,
    $attrs: t => t.attrs,
    $slots: t => t.slots,
    $refs: t => t.refs,
    $parent: t => Ms(t.parent),
    $root: t => Ms(t.root),
    $emit: t => t.emit,
    $options: t => Pr(t),
    $forceUpdate: t => t.f || (t.f = () => {
      t.effect.dirty = !0, Or(t.update)
    }),
    $nextTick: t => t.n || (t.n = ut.bind(t.proxy)),
    $watch: t => gf.bind(t)
  }),
  os = (t, e) => t !== Pe && !t.__isScriptSetup && ve(t, e),
  Tf = {
    get({
      _: t
    }, e) {
      const {
        ctx: a,
        setupState: n,
        data: i,
        props: o,
        accessCache: s,
        type: r,
        appContext: l
      } = t;
      let u;
      if (e[0] !== "$") {
        const f = s[e];
        if (f !== void 0) switch (f) {
          case 1:
            return n[e];
          case 2:
            return i[e];
          case 4:
            return a[e];
          case 3:
            return o[e]
        } else {
          if (os(n, e)) return s[e] = 1, n[e];
          if (i !== Pe && ve(i, e)) return s[e] = 2, i[e];
          if ((u = t.propsOptions[0]) && ve(u, e)) return s[e] = 3, o[e];
          if (a !== Pe && ve(a, e)) return s[e] = 4, a[e];
          Ls && (s[e] = 0)
        }
      }
      const d = fi[e];
      let c, h;
      if (d) return e === "$attrs" && St(t, "get", e), d(t);
      if ((c = r.__cssModules) && (c = c[e])) return c;
      if (a !== Pe && ve(a, e)) return s[e] = 4, a[e];
      if (h = l.config.globalProperties, ve(h, e)) return h[e]
    },
    set({
      _: t
    }, e, a) {
      const {
        data: n,
        setupState: i,
        ctx: o
      } = t;
      return os(i, e) ? (i[e] = a, !0) : n !== Pe && ve(n, e) ? (n[e] = a, !0) : ve(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (o[e] = a, !0)
    },
    has({
      _: {
        data: t,
        setupState: e,
        accessCache: a,
        ctx: n,
        appContext: i,
        propsOptions: o
      }
    }, s) {
      let r;
      return !!a[s] || t !== Pe && ve(t, s) || os(e, s) || (r = o[0]) && ve(r, s) || ve(n, s) || ve(fi, s) || ve(i.config.globalProperties, s)
    },
    defineProperty(t, e, a) {
      return a.get != null ? t._.accessCache[e] = 0 : ve(a, "value") && this.set(t, e, a.value, null), Reflect.defineProperty(t, e, a)
    }
  };

function Ul(t) {
  return oe(t) ? t.reduce((e, a) => (e[a] = null, e), {}) : t
}
let Ls = !0;

function Af(t) {
  const e = Pr(t),
    a = t.proxy,
    n = t.ctx;
  Ls = !1, e.beforeCreate && Vl(e.beforeCreate, t, "bc");
  const {
    data: i,
    computed: o,
    methods: s,
    watch: r,
    provide: l,
    inject: u,
    created: d,
    beforeMount: c,
    mounted: h,
    beforeUpdate: f,
    updated: p,
    activated: g,
    deactivated: k,
    beforeDestroy: w,
    beforeUnmount: y,
    destroyed: j,
    unmounted: v,
    render: E,
    renderTracked: C,
    renderTriggered: T,
    errorCaptured: _,
    serverPrefetch: z,
    expose: S,
    inheritAttrs: $,
    components: O,
    directives: L,
    filters: Q
  } = e;
  if (u && Df(u, n, null), s)
    for (const ae in s) {
      const se = s[ae];
      me(se) && (n[ae] = se.bind(a))
    }
  if (i) {
    const ae = i.call(a, a);
    Te(ae) && (t.data = ha(ae))
  }
  if (Ls = !0, o)
    for (const ae in o) {
      const se = o[ae],
        tt = me(se) ? se.bind(a, a) : me(se.get) ? se.get.bind(a, a) : $t,
        rt = !me(se) && me(se.set) ? se.set.bind(a) : $t,
        he = N({
          get: tt,
          set: rt
        });
      Object.defineProperty(n, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => he.value,
        set: de => he.value = de
      })
    }
  if (r)
    for (const ae in r) Ud(r[ae], n, a, ae);
  if (l) {
    const ae = me(l) ? l.call(a) : l;
    Reflect.ownKeys(ae).forEach(se => {
      ct(se, ae[se])
    })
  }
  d && Vl(d, t, "c");

  function J(ae, se) {
    oe(se) ? se.forEach(tt => ae(tt.bind(a))) : se && ae(se.bind(a))
  }
  if (J(_f, c), J(qe, h), J(xf, f), J(jf, p), J(yf, g), J(vf, k), J(Sf, _), J(zf, C), J(Cf, T), J(qd, y), J(At, v), J(Ef, z), oe(S))
    if (S.length) {
      const ae = t.exposed || (t.exposed = {});
      S.forEach(se => {
        Object.defineProperty(ae, se, {
          get: () => a[se],
          set: tt => a[se] = tt
        })
      })
    } else t.exposed || (t.exposed = {});
  E && t.render === $t && (t.render = E), $ != null && (t.inheritAttrs = $), O && (t.components = O), L && (t.directives = L)
}

function Df(t, e, a = $t) {
  oe(t) && (t = Bs(t));
  for (const n in t) {
    const i = t[n];
    let o;
    Te(i) ? "default" in i ? o = Re(i.from || n, i.default, !0) : o = Re(i.from || n) : o = Re(i), Tt(o) ? Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: s => o.value = s
    }) : e[n] = o
  }
}

function Vl(t, e, a) {
  Wt(oe(t) ? t.map(n => n.bind(e.proxy)) : t.bind(e.proxy), e, a)
}

function Ud(t, e, a, n) {
  const i = n.includes(".") ? $d(a, n) : () => a[n];
  if (Qe(t)) {
    const o = e[t];
    me(o) && He(i, o)
  } else if (me(t)) He(i, t.bind(a));
  else if (Te(t))
    if (oe(t)) t.forEach(o => Ud(o, e, a, n));
    else {
      const o = me(t.handler) ? t.handler.bind(a) : e[t.handler];
      me(o) && He(i, o, t)
    }
}

function Pr(t) {
  const e = t.type,
    {
      mixins: a,
      extends: n
    } = e,
    {
      mixins: i,
      optionsCache: o,
      config: {
        optionMergeStrategies: s
      }
    } = t.appContext,
    r = o.get(e);
  let l;
  return r ? l = r : !i.length && !a && !n ? l = e : (l = {}, i.length && i.forEach(u => vo(l, u, s, !0)), vo(l, e, s)), Te(e) && o.set(e, l), l
}

function vo(t, e, a, n = !1) {
  const {
    mixins: i,
    extends: o
  } = e;
  o && vo(t, o, a, !0), i && i.forEach(s => vo(t, s, a, !0));
  for (const s in e)
    if (!(n && s === "expose")) {
      const r = Of[s] || a && a[s];
      t[s] = r ? r(t[s], e[s]) : e[s]
    } return t
}
const Of = {
  data: Hl,
  props: Wl,
  emits: Wl,
  methods: li,
  computed: li,
  beforeCreate: bt,
  created: bt,
  beforeMount: bt,
  mounted: bt,
  beforeUpdate: bt,
  updated: bt,
  beforeDestroy: bt,
  beforeUnmount: bt,
  destroyed: bt,
  unmounted: bt,
  activated: bt,
  deactivated: bt,
  errorCaptured: bt,
  serverPrefetch: bt,
  components: li,
  directives: li,
  watch: Pf,
  provide: Hl,
  inject: Ff
};

function Hl(t, e) {
  return e ? t ? function () {
    return at(me(t) ? t.call(this, this) : t, me(e) ? e.call(this, this) : e)
  } : e : t
}

function Ff(t, e) {
  return li(Bs(t), Bs(e))
}

function Bs(t) {
  if (oe(t)) {
    const e = {};
    for (let a = 0; a < t.length; a++) e[t[a]] = t[a];
    return e
  }
  return t
}

function bt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e
}

function li(t, e) {
  return t ? at(Object.create(null), t, e) : e
}

function Wl(t, e) {
  return t ? oe(t) && oe(e) ? [...new Set([...t, ...e])] : at(Object.create(null), Ul(t), Ul(e ?? {})) : e
}

function Pf(t, e) {
  if (!t) return e;
  if (!e) return t;
  const a = at(Object.create(null), t);
  for (const n in e) a[n] = bt(t[n], e[n]);
  return a
}

function Vd() {
  return {
    app: null,
    config: {
      isNativeTag: cm,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap,
    propsCache: new WeakMap,
    emitsCache: new WeakMap
  }
}
let Rf = 0;

function If(t, e) {
  return function (n, i = null) {
    me(n) || (n = at({}, n)), i != null && !Te(i) && (i = null);
    const o = Vd(),
      s = new WeakSet;
    let r = !1;
    const l = o.app = {
      _uid: Rf++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: ug,
      get config() {
        return o.config
      },
      set config(u) {},
      use(u, ...d) {
        return s.has(u) || (u && me(u.install) ? (s.add(u), u.install(l, ...d)) : me(u) && (s.add(u), u(l, ...d))), l
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), l
      },
      component(u, d) {
        return d ? (o.components[u] = d, l) : o.components[u]
      },
      directive(u, d) {
        return d ? (o.directives[u] = d, l) : o.directives[u]
      },
      mount(u, d, c) {
        if (!r) {
          const h = D(n, i);
          return h.appContext = o, c === !0 ? c = "svg" : c === !1 && (c = void 0), d && e ? e(h, u) : t(h, u, c), r = !0, l._container = u, u.__vue_app__ = l, Ko(h.component) || h.component.proxy
        }
      },
      unmount() {
        r && (t(null, l._container), delete l._container.__vue_app__)
      },
      provide(u, d) {
        return o.provides[u] = d, l
      },
      runWithContext(u) {
        const d = gi;
        gi = l;
        try {
          return u()
        } finally {
          gi = d
        }
      }
    };
    return l
  }
}
let gi = null;

function ct(t, e) {
  if (dt) {
    let a = dt.provides;
    const n = dt.parent && dt.parent.provides;
    n === a && (a = dt.provides = Object.create(n)), a[t] = e
  }
}

function Re(t, e, a = !1) {
  const n = dt || vt;
  if (n || gi) {
    const i = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : gi._context.provides;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return a && me(e) ? e.call(n && n.proxy) : e
  }
}

function $f(t, e, a, n = !1) {
  const i = {},
    o = {};
  ko(o, Wo, 1), t.propsDefaults = Object.create(null), Hd(t, e, i, o);
  for (const s in t.propsOptions[0]) s in i || (i[s] = void 0);
  a ? t.props = n ? i : xd(i) : t.type.props ? t.props = i : t.props = o, t.attrs = o
}

function Mf(t, e, a, n) {
  const {
    props: i,
    attrs: o,
    vnode: {
      patchFlag: s
    }
  } = t, r = ue(i), [l] = t.propsOptions;
  let u = !1;
  if ((n || s > 0) && !(s & 16)) {
    if (s & 8) {
      const d = t.vnode.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        let h = d[c];
        if (No(t.emitsOptions, h)) continue;
        const f = e[h];
        if (l)
          if (ve(o, h)) f !== o[h] && (o[h] = f, u = !0);
          else {
            const p = ra(h);
            i[p] = Ns(l, r, p, f, t, !1)
          }
        else f !== o[h] && (o[h] = f, u = !0)
      }
    }
  } else {
    Hd(t, e, i, o) && (u = !0);
    let d;
    for (const c in r)(!e || !ve(e, c) && ((d = Jn(c)) === c || !ve(e, d))) && (l ? a && (a[c] !== void 0 || a[d] !== void 0) && (i[c] = Ns(l, r, c, void 0, t, !0)) : delete i[c]);
    if (o !== r)
      for (const c in o)(!e || !ve(e, c)) && (delete o[c], u = !0)
  }
  u && ba(t, "set", "$attrs")
}

function Hd(t, e, a, n) {
  const [i, o] = t.propsOptions;
  let s = !1,
    r;
  if (e)
    for (let l in e) {
      if (hi(l)) continue;
      const u = e[l];
      let d;
      i && ve(i, d = ra(l)) ? !o || !o.includes(d) ? a[d] = u : (r || (r = {}))[d] = u : No(t.emitsOptions, l) || (!(l in n) || u !== n[l]) && (n[l] = u, s = !0)
    }
  if (o) {
    const l = ue(a),
      u = r || Pe;
    for (let d = 0; d < o.length; d++) {
      const c = o[d];
      a[c] = Ns(i, l, c, u[c], t, !ve(u, c))
    }
  }
  return s
}

function Ns(t, e, a, n, i, o) {
  const s = t[a];
  if (s != null) {
    const r = ve(s, "default");
    if (r && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && me(l)) {
        const {
          propsDefaults: u
        } = i;
        if (a in u) n = u[a];
        else {
          const d = Mi(i);
          n = u[a] = l.call(null, e), d()
        }
      } else n = l
    }
    s[0] && (o && !r ? n = !1 : s[1] && (n === "" || n === Jn(a)) && (n = !0))
  }
  return n
}

function Wd(t, e, a = !1) {
  const n = e.propsCache,
    i = n.get(t);
  if (i) return i;
  const o = t.props,
    s = {},
    r = [];
  let l = !1;
  if (!me(t)) {
    const d = c => {
      l = !0;
      const [h, f] = Wd(c, e, !0);
      at(s, h), f && r.push(...f)
    };
    !a && e.mixins.length && e.mixins.forEach(d), t.extends && d(t.extends), t.mixins && t.mixins.forEach(d)
  }
  if (!o && !l) return Te(t) && n.set(t, Pn), Pn;
  if (oe(o))
    for (let d = 0; d < o.length; d++) {
      const c = ra(o[d]);
      Gl(c) && (s[c] = Pe)
    } else if (o)
      for (const d in o) {
        const c = ra(d);
        if (Gl(c)) {
          const h = o[d],
            f = s[c] = oe(h) || me(h) ? {
              type: h
            } : at({}, h);
          if (f) {
            const p = Zl(Boolean, f.type),
              g = Zl(String, f.type);
            f[0] = p > -1, f[1] = g < 0 || p < g, (p > -1 || ve(f, "default")) && r.push(c)
          }
        }
      }
  const u = [s, r];
  return Te(t) && n.set(t, u), u
}

function Gl(t) {
  return t[0] !== "$" && !hi(t)
}

function Kl(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || ""
}

function Yl(t, e) {
  return Kl(t) === Kl(e)
}

function Zl(t, e) {
  return oe(e) ? e.findIndex(a => Yl(a, t)) : me(e) && Yl(e, t) ? 0 : -1
}
const Gd = t => t[0] === "_" || t === "$stable",
  Rr = t => oe(t) ? t.map(aa) : [aa(t)],
  Lf = (t, e, a) => {
    if (e._n) return e;
    const n = K((...i) => Rr(e(...i)), a);
    return n._c = !1, n
  },
  Kd = (t, e, a) => {
    const n = t._ctx;
    for (const i in t) {
      if (Gd(i)) continue;
      const o = t[i];
      if (me(o)) e[i] = Lf(i, o, n);
      else if (o != null) {
        const s = Rr(o);
        e[i] = () => s
      }
    }
  },
  Yd = (t, e) => {
    const a = Rr(e);
    t.slots.default = () => a
  },
  Bf = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const a = e._;
      a ? (t.slots = ue(e), ko(e, "_", a)) : Kd(e, t.slots = {})
    } else t.slots = {}, e && Yd(t, e);
    ko(t.slots, Wo, 1)
  },
  Nf = (t, e, a) => {
    const {
      vnode: n,
      slots: i
    } = t;
    let o = !0,
      s = Pe;
    if (n.shapeFlag & 32) {
      const r = e._;
      r ? a && r === 1 ? o = !1 : (at(i, e), !a && r === 1 && delete i._) : (o = !e.$stable, Kd(e, i)), s = e
    } else e && (Yd(t, e), s = {
      default: 1
    });
    if (o)
      for (const r in i) !Gd(r) && s[r] == null && delete i[r]
  };

function qs(t, e, a, n, i = !1) {
  if (oe(t)) {
    t.forEach((h, f) => qs(h, e && (oe(e) ? e[f] : e), a, n, i));
    return
  }
  if (so(n) && !i) return;
  const o = n.shapeFlag & 4 ? Ko(n.component) || n.component.proxy : n.el,
    s = i ? null : o,
    {
      i: r,
      r: l
    } = t,
    u = e && e.r,
    d = r.refs === Pe ? r.refs = {} : r.refs,
    c = r.setupState;
  if (u != null && u !== l && (Qe(u) ? (d[u] = null, ve(c, u) && (c[u] = null)) : Tt(u) && (u.value = null)), me(l)) Ma(l, r, 12, [s, d]);
  else {
    const h = Qe(l),
      f = Tt(l);
    if (h || f) {
      const p = () => {
        if (t.f) {
          const g = h ? ve(c, l) ? c[l] : d[l] : l.value;
          i ? oe(g) && vr(g, o) : oe(g) ? g.includes(o) || g.push(o) : h ? (d[l] = [o], ve(c, l) && (c[l] = d[l])) : (l.value = [o], t.k && (d[t.k] = l.value))
        } else h ? (d[l] = s, ve(c, l) && (c[l] = s)) : f && (l.value = s, t.k && (d[t.k] = s))
      };
      s ? (p.id = -1, _t(p, a)) : p()
    }
  }
}
const _t = hf;

function qf(t) {
  return Uf(t)
}

function Uf(t, e) {
  const a = ld();
  a.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: r,
    createComment: l,
    setText: u,
    setElementText: d,
    parentNode: c,
    nextSibling: h,
    setScopeId: f = $t,
    insertStaticContent: p
  } = t, g = (b, x, A, I = null, P = null, U = null, G = void 0, q = null, V = !!x.dynamicChildren) => {
    if (b === x) return;
    b && !on(b, x) && (I = R(b), de(b, P, U, !0), b = null), x.patchFlag === -2 && (V = !1, x.dynamicChildren = null);
    const {
      type: B,
      ref: Z,
      shapeFlag: re
    } = x;
    switch (B) {
      case Ho:
        k(b, x, A, I);
        break;
      case Xt:
        w(b, x, A, I);
        break;
      case rs:
        b == null && y(x, A, I, G);
        break;
      case Ge:
        O(b, x, A, I, P, U, G, q, V);
        break;
      default:
        re & 1 ? E(b, x, A, I, P, U, G, q, V) : re & 6 ? L(b, x, A, I, P, U, G, q, V) : (re & 64 || re & 128) && B.process(b, x, A, I, P, U, G, q, V, ne)
    }
    Z != null && P && qs(Z, b && b.ref, U, x || b, !x)
  }, k = (b, x, A, I) => {
    if (b == null) n(x.el = r(x.children), A, I);
    else {
      const P = x.el = b.el;
      x.children !== b.children && u(P, x.children)
    }
  }, w = (b, x, A, I) => {
    b == null ? n(x.el = l(x.children || ""), A, I) : x.el = b.el
  }, y = (b, x, A, I) => {
    [b.el, b.anchor] = p(b.children, x, A, I, b.el, b.anchor)
  }, j = ({
    el: b,
    anchor: x
  }, A, I) => {
    let P;
    for (; b && b !== x;) P = h(b), n(b, A, I), b = P;
    n(x, A, I)
  }, v = ({
    el: b,
    anchor: x
  }) => {
    let A;
    for (; b && b !== x;) A = h(b), i(b), b = A;
    i(x)
  }, E = (b, x, A, I, P, U, G, q, V) => {
    x.type === "svg" ? G = "svg" : x.type === "math" && (G = "mathml"), b == null ? C(x, A, I, P, U, G, q, V) : z(b, x, P, U, G, q, V)
  }, C = (b, x, A, I, P, U, G, q) => {
    let V, B;
    const {
      props: Z,
      shapeFlag: re,
      transition: ie,
      dirs: ce
    } = b;
    if (V = b.el = s(b.type, U, Z && Z.is, Z), re & 8 ? d(V, b.children) : re & 16 && _(b.children, V, null, I, P, ss(b, U), G, q), ce && Ya(b, null, I, "created"), T(V, b, b.scopeId, G, I), Z) {
      for (const ze in Z) ze !== "value" && !hi(ze) && o(V, ze, null, Z[ze], U, b.children, I, P, Ze);
      "value" in Z && o(V, "value", null, Z.value, U), (B = Z.onVnodeBeforeMount) && ea(B, I, b)
    }
    ce && Ya(b, null, I, "beforeMount");
    const pe = Vf(P, ie);
    pe && ie.beforeEnter(V), n(V, x, A), ((B = Z && Z.onVnodeMounted) || pe || ce) && _t(() => {
      B && ea(B, I, b), pe && ie.enter(V), ce && Ya(b, null, I, "mounted")
    }, P)
  }, T = (b, x, A, I, P) => {
    if (A && f(b, A), I)
      for (let U = 0; U < I.length; U++) f(b, I[U]);
    if (P) {
      let U = P.subTree;
      if (x === U) {
        const G = P.vnode;
        T(b, G, G.scopeId, G.slotScopeIds, P.parent)
      }
    }
  }, _ = (b, x, A, I, P, U, G, q, V = 0) => {
    for (let B = V; B < b.length; B++) {
      const Z = b[B] = q ? Ta(b[B]) : aa(b[B]);
      g(null, Z, x, A, I, P, U, G, q)
    }
  }, z = (b, x, A, I, P, U, G) => {
    const q = x.el = b.el;
    let {
      patchFlag: V,
      dynamicChildren: B,
      dirs: Z
    } = x;
    V |= b.patchFlag & 16;
    const re = b.props || Pe,
      ie = x.props || Pe;
    let ce;
    if (A && Za(A, !1), (ce = ie.onVnodeBeforeUpdate) && ea(ce, A, x, b), Z && Ya(x, b, A, "beforeUpdate"), A && Za(A, !0), B ? S(b.dynamicChildren, B, q, A, I, ss(x, P), U) : G || se(b, x, q, null, A, I, ss(x, P), U, !1), V > 0) {
      if (V & 16) $(q, x, re, ie, A, I, P);
      else if (V & 2 && re.class !== ie.class && o(q, "class", null, ie.class, P), V & 4 && o(q, "style", re.style, ie.style, P), V & 8) {
        const pe = x.dynamicProps;
        for (let ze = 0; ze < pe.length; ze++) {
          const $e = pe[ze],
            it = re[$e],
            Yt = ie[$e];
          (Yt !== it || $e === "value") && o(q, $e, it, Yt, P, b.children, A, I, Ze)
        }
      }
      V & 1 && b.children !== x.children && d(q, x.children)
    } else !G && B == null && $(q, x, re, ie, A, I, P);
    ((ce = ie.onVnodeUpdated) || Z) && _t(() => {
      ce && ea(ce, A, x, b), Z && Ya(x, b, A, "updated")
    }, I)
  }, S = (b, x, A, I, P, U, G) => {
    for (let q = 0; q < x.length; q++) {
      const V = b[q],
        B = x[q],
        Z = V.el && (V.type === Ge || !on(V, B) || V.shapeFlag & 70) ? c(V.el) : A;
      g(V, B, Z, null, I, P, U, G, !0)
    }
  }, $ = (b, x, A, I, P, U, G) => {
    if (A !== I) {
      if (A !== Pe)
        for (const q in A) !hi(q) && !(q in I) && o(b, q, A[q], null, G, x.children, P, U, Ze);
      for (const q in I) {
        if (hi(q)) continue;
        const V = I[q],
          B = A[q];
        V !== B && q !== "value" && o(b, q, B, V, G, x.children, P, U, Ze)
      }
      "value" in I && o(b, "value", A.value, I.value, G)
    }
  }, O = (b, x, A, I, P, U, G, q, V) => {
    const B = x.el = b ? b.el : r(""),
      Z = x.anchor = b ? b.anchor : r("");
    let {
      patchFlag: re,
      dynamicChildren: ie,
      slotScopeIds: ce
    } = x;
    ce && (q = q ? q.concat(ce) : ce), b == null ? (n(B, A, I), n(Z, A, I), _(x.children || [], A, Z, P, U, G, q, V)) : re > 0 && re & 64 && ie && b.dynamicChildren ? (S(b.dynamicChildren, ie, A, P, U, G, q), (x.key != null || P && x === P.subTree) && Ir(b, x, !0)) : se(b, x, A, Z, P, U, G, q, V)
  }, L = (b, x, A, I, P, U, G, q, V) => {
    x.slotScopeIds = q, b == null ? x.shapeFlag & 512 ? P.ctx.activate(x, A, I, G, V) : Q(x, A, I, P, U, G, V) : te(b, x, V)
  }, Q = (b, x, A, I, P, U, G) => {
    const q = b.component = ag(b, I, P);
    if (Uo(b) && (q.ctx.renderer = ne), ng(q), q.asyncDep) {
      if (P && P.registerDep(q, J), !b.el) {
        const V = q.subTree = D(Xt);
        w(null, V, x, A)
      }
    } else J(q, b, x, A, P, U, G)
  }, te = (b, x, A) => {
    const I = x.component = b.component;
    if (rf(b, x, A))
      if (I.asyncDep && !I.asyncResolved) {
        ae(I, x, A);
        return
      } else I.next = x, Jm(I.update), I.effect.dirty = !0, I.update();
    else x.el = b.el, I.vnode = x
  }, J = (b, x, A, I, P, U, G) => {
    const q = () => {
        if (b.isMounted) {
          let {
            next: Z,
            bu: re,
            u: ie,
            parent: ce,
            vnode: pe
          } = b; {
            const zn = Zd(b);
            if (zn) {
              Z && (Z.el = pe.el, ae(b, Z, G)), zn.asyncDep.then(() => {
                b.isUnmounted || q()
              });
              return
            }
          }
          let ze = Z,
            $e;
          Za(b, !1), Z ? (Z.el = pe.el, ae(b, Z, G)) : Z = pe, re && oo(re), ($e = Z.props && Z.props.onVnodeBeforeUpdate) && ea($e, ce, Z, pe), Za(b, !0);
          const it = ns(b),
            Yt = b.subTree;
          b.subTree = it, g(Yt, it, c(Yt.el), R(Yt), b, P, U), Z.el = it.el, ze === null && lf(b, it.el), ie && _t(ie, P), ($e = Z.props && Z.props.onVnodeUpdated) && _t(() => ea($e, ce, Z, pe), P)
        } else {
          let Z;
          const {
            el: re,
            props: ie
          } = x, {
            bm: ce,
            m: pe,
            parent: ze
          } = b, $e = so(x);
          if (Za(b, !1), ce && oo(ce), !$e && (Z = ie && ie.onVnodeBeforeMount) && ea(Z, ze, x), Za(b, !0), re && Ie) {
            const it = () => {
              b.subTree = ns(b), Ie(re, b.subTree, b, P, null)
            };
            $e ? x.type.__asyncLoader().then(() => !b.isUnmounted && it()) : it()
          } else {
            const it = b.subTree = ns(b);
            g(null, it, A, I, b, P, U), x.el = it.el
          }
          if (pe && _t(pe, P), !$e && (Z = ie && ie.onVnodeMounted)) {
            const it = x;
            _t(() => ea(Z, ze, it), P)
          }(x.shapeFlag & 256 || ze && so(ze.vnode) && ze.vnode.shapeFlag & 256) && b.a && _t(b.a, P), b.isMounted = !0, x = A = I = null
        }
      },
      V = b.effect = new xr(q, $t, () => Or(B), b.scope),
      B = b.update = () => {
        V.dirty && V.run()
      };
    B.id = b.uid, Za(b, !0), B()
  }, ae = (b, x, A) => {
    x.component = b;
    const I = b.vnode.props;
    b.vnode = x, b.next = null, Mf(b, x.props, I, A), Nf(b, x.children, A), _n(), Ll(b), xn()
  }, se = (b, x, A, I, P, U, G, q, V = !1) => {
    const B = b && b.children,
      Z = b ? b.shapeFlag : 0,
      re = x.children,
      {
        patchFlag: ie,
        shapeFlag: ce
      } = x;
    if (ie > 0) {
      if (ie & 128) {
        rt(B, re, A, I, P, U, G, q, V);
        return
      } else if (ie & 256) {
        tt(B, re, A, I, P, U, G, q, V);
        return
      }
    }
    ce & 8 ? (Z & 16 && Ze(B, P, U), re !== B && d(A, re)) : Z & 16 ? ce & 16 ? rt(B, re, A, I, P, U, G, q, V) : Ze(B, P, U, !0) : (Z & 8 && d(A, ""), ce & 16 && _(re, A, I, P, U, G, q, V))
  }, tt = (b, x, A, I, P, U, G, q, V) => {
    b = b || Pn, x = x || Pn;
    const B = b.length,
      Z = x.length,
      re = Math.min(B, Z);
    let ie;
    for (ie = 0; ie < re; ie++) {
      const ce = x[ie] = V ? Ta(x[ie]) : aa(x[ie]);
      g(b[ie], ce, A, null, P, U, G, q, V)
    }
    B > Z ? Ze(b, P, U, !0, !1, re) : _(x, A, I, P, U, G, q, V, re)
  }, rt = (b, x, A, I, P, U, G, q, V) => {
    let B = 0;
    const Z = x.length;
    let re = b.length - 1,
      ie = Z - 1;
    for (; B <= re && B <= ie;) {
      const ce = b[B],
        pe = x[B] = V ? Ta(x[B]) : aa(x[B]);
      if (on(ce, pe)) g(ce, pe, A, null, P, U, G, q, V);
      else break;
      B++
    }
    for (; B <= re && B <= ie;) {
      const ce = b[re],
        pe = x[ie] = V ? Ta(x[ie]) : aa(x[ie]);
      if (on(ce, pe)) g(ce, pe, A, null, P, U, G, q, V);
      else break;
      re--, ie--
    }
    if (B > re) {
      if (B <= ie) {
        const ce = ie + 1,
          pe = ce < Z ? x[ce].el : I;
        for (; B <= ie;) g(null, x[B] = V ? Ta(x[B]) : aa(x[B]), A, pe, P, U, G, q, V), B++
      }
    } else if (B > ie)
      for (; B <= re;) de(b[B], P, U, !0), B++;
    else {
      const ce = B,
        pe = B,
        ze = new Map;
      for (B = pe; B <= ie; B++) {
        const Ft = x[B] = V ? Ta(x[B]) : aa(x[B]);
        Ft.key != null && ze.set(Ft.key, B)
      }
      let $e, it = 0;
      const Yt = ie - pe + 1;
      let zn = !1,
        Cl = 0;
      const Qn = new Array(Yt);
      for (B = 0; B < Yt; B++) Qn[B] = 0;
      for (B = ce; B <= re; B++) {
        const Ft = b[B];
        if (it >= Yt) {
          de(Ft, P, U, !0);
          continue
        }
        let Qt;
        if (Ft.key != null) Qt = ze.get(Ft.key);
        else
          for ($e = pe; $e <= ie; $e++)
            if (Qn[$e - pe] === 0 && on(Ft, x[$e])) {
              Qt = $e;
              break
            } Qt === void 0 ? de(Ft, P, U, !0) : (Qn[Qt - pe] = B + 1, Qt >= Cl ? Cl = Qt : zn = !0, g(Ft, x[Qt], A, null, P, U, G, q, V), it++)
      }
      const zl = zn ? Hf(Qn) : Pn;
      for ($e = zl.length - 1, B = Yt - 1; B >= 0; B--) {
        const Ft = pe + B,
          Qt = x[Ft],
          Sl = Ft + 1 < Z ? x[Ft + 1].el : I;
        Qn[B] === 0 ? g(null, Qt, A, Sl, P, U, G, q, V) : zn && ($e < 0 || B !== zl[$e] ? he(Qt, A, Sl, 2) : $e--)
      }
    }
  }, he = (b, x, A, I, P = null) => {
    const {
      el: U,
      type: G,
      transition: q,
      children: V,
      shapeFlag: B
    } = b;
    if (B & 6) {
      he(b.component.subTree, x, A, I);
      return
    }
    if (B & 128) {
      b.suspense.move(x, A, I);
      return
    }
    if (B & 64) {
      G.move(b, x, A, ne);
      return
    }
    if (G === Ge) {
      n(U, x, A);
      for (let re = 0; re < V.length; re++) he(V[re], x, A, I);
      n(b.anchor, x, A);
      return
    }
    if (G === rs) {
      j(b, x, A);
      return
    }
    if (I !== 2 && B & 1 && q)
      if (I === 0) q.beforeEnter(U), n(U, x, A), _t(() => q.enter(U), P);
      else {
        const {
          leave: re,
          delayLeave: ie,
          afterLeave: ce
        } = q, pe = () => n(U, x, A), ze = () => {
          re(U, () => {
            pe(), ce && ce()
          })
        };
        ie ? ie(U, pe, ze) : ze()
      }
    else n(U, x, A)
  }, de = (b, x, A, I = !1, P = !1) => {
    const {
      type: U,
      props: G,
      ref: q,
      children: V,
      dynamicChildren: B,
      shapeFlag: Z,
      patchFlag: re,
      dirs: ie
    } = b;
    if (q != null && qs(q, null, A, b, !0), Z & 256) {
      x.ctx.deactivate(b);
      return
    }
    const ce = Z & 1 && ie,
      pe = !so(b);
    let ze;
    if (pe && (ze = G && G.onVnodeBeforeUnmount) && ea(ze, x, b), Z & 6) ht(b.component, A, I);
    else {
      if (Z & 128) {
        b.suspense.unmount(A, I);
        return
      }
      ce && Ya(b, null, x, "beforeUnmount"), Z & 64 ? b.type.remove(b, x, A, P, ne, I) : B && (U !== Ge || re > 0 && re & 64) ? Ze(B, x, A, !1, !0) : (U === Ge && re & 384 || !P && Z & 16) && Ze(V, x, A), I && We(b)
    }(pe && (ze = G && G.onVnodeUnmounted) || ce) && _t(() => {
      ze && ea(ze, x, b), ce && Ya(b, null, x, "unmounted")
    }, A)
  }, We = b => {
    const {
      type: x,
      el: A,
      anchor: I,
      transition: P
    } = b;
    if (x === Ge) {
      Ce(A, I);
      return
    }
    if (x === rs) {
      v(b);
      return
    }
    const U = () => {
      i(A), P && !P.persisted && P.afterLeave && P.afterLeave()
    };
    if (b.shapeFlag & 1 && P && !P.persisted) {
      const {
        leave: G,
        delayLeave: q
      } = P, V = () => G(A, U);
      q ? q(b.el, U, V) : V()
    } else U()
  }, Ce = (b, x) => {
    let A;
    for (; b !== x;) A = h(b), i(b), b = A;
    i(x)
  }, ht = (b, x, A) => {
    const {
      bum: I,
      scope: P,
      update: U,
      subTree: G,
      um: q
    } = b;
    I && oo(I), P.stop(), U && (U.active = !1, de(G, b, x, A)), q && _t(q, x), _t(() => {
      b.isUnmounted = !0
    }, x), x && x.pendingBranch && !x.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve())
  }, Ze = (b, x, A, I = !1, P = !1, U = 0) => {
    for (let G = U; G < b.length; G++) de(b[G], x, A, I, P)
  }, R = b => b.shapeFlag & 6 ? R(b.component.subTree) : b.shapeFlag & 128 ? b.suspense.next() : h(b.anchor || b.el);
  let Y = !1;
  const W = (b, x, A) => {
      b == null ? x._vnode && de(x._vnode, null, null, !0) : g(x._vnode || null, b, x, null, null, null, A), Y || (Y = !0, Ll(), Fd(), Y = !1), x._vnode = b
    },
    ne = {
      p: g,
      um: de,
      m: he,
      r: We,
      mt: Q,
      mc: _,
      pc: se,
      pbc: S,
      n: R,
      o: t
    };
  let je, Ie;
  return e && ([je, Ie] = e(ne)), {
    render: W,
    hydrate: je,
    createApp: If(W, je)
  }
}

function ss({
  type: t,
  props: e
}, a) {
  return a === "svg" && t === "foreignObject" || a === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : a
}

function Za({
  effect: t,
  update: e
}, a) {
  t.allowRecurse = e.allowRecurse = a
}

function Vf(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted
}

function Ir(t, e, a = !1) {
  const n = t.children,
    i = e.children;
  if (oe(n) && oe(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let r = i[o];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = i[o] = Ta(i[o]), r.el = s.el), a || Ir(s, r)), r.type === Ho && (r.el = s.el)
    }
}

function Hf(t) {
  const e = t.slice(),
    a = [0];
  let n, i, o, s, r;
  const l = t.length;
  for (n = 0; n < l; n++) {
    const u = t[n];
    if (u !== 0) {
      if (i = a[a.length - 1], t[i] < u) {
        e[n] = i, a.push(n);
        continue
      }
      for (o = 0, s = a.length - 1; o < s;) r = o + s >> 1, t[a[r]] < u ? o = r + 1 : s = r;
      u < t[a[o]] && (o > 0 && (e[n] = a[o - 1]), a[o] = n)
    }
  }
  for (o = a.length, s = a[o - 1]; o-- > 0;) a[o] = s, s = e[s];
  return a
}

function Zd(t) {
  const e = t.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : Zd(e)
}
const Wf = t => t.__isTeleport,
  pi = t => t && (t.disabled || t.disabled === ""),
  Xl = t => typeof SVGElement < "u" && t instanceof SVGElement,
  Jl = t => typeof MathMLElement == "function" && t instanceof MathMLElement,
  Us = (t, e) => {
    const a = t && t.to;
    return Qe(a) ? e ? e(a) : null : a
  },
  Gf = {
    name: "Teleport",
    __isTeleport: !0,
    process(t, e, a, n, i, o, s, r, l, u) {
      const {
        mc: d,
        pc: c,
        pbc: h,
        o: {
          insert: f,
          querySelector: p,
          createText: g,
          createComment: k
        }
      } = u, w = pi(e.props);
      let {
        shapeFlag: y,
        children: j,
        dynamicChildren: v
      } = e;
      if (t == null) {
        const E = e.el = g(""),
          C = e.anchor = g("");
        f(E, a, n), f(C, a, n);
        const T = e.target = Us(e.props, p),
          _ = e.targetAnchor = g("");
        T && (f(_, T), s === "svg" || Xl(T) ? s = "svg" : (s === "mathml" || Jl(T)) && (s = "mathml"));
        const z = (S, $) => {
          y & 16 && d(j, S, $, i, o, s, r, l)
        };
        w ? z(a, C) : T && z(T, _)
      } else {
        e.el = t.el;
        const E = e.anchor = t.anchor,
          C = e.target = t.target,
          T = e.targetAnchor = t.targetAnchor,
          _ = pi(t.props),
          z = _ ? a : C,
          S = _ ? E : T;
        if (s === "svg" || Xl(C) ? s = "svg" : (s === "mathml" || Jl(C)) && (s = "mathml"), v ? (h(t.dynamicChildren, v, z, i, o, s, r), Ir(t, e, !0)) : l || c(t, e, z, S, i, o, s, r, !1), w) _ ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Qi(e, a, E, u, 1);
        else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
          const $ = e.target = Us(e.props, p);
          $ && Qi(e, $, null, u, 0)
        } else _ && Qi(e, C, T, u, 1)
      }
      Xd(e)
    },
    remove(t, e, a, n, {
      um: i,
      o: {
        remove: o
      }
    }, s) {
      const {
        shapeFlag: r,
        children: l,
        anchor: u,
        targetAnchor: d,
        target: c,
        props: h
      } = t;
      if (c && o(d), s && o(u), r & 16) {
        const f = s || !pi(h);
        for (let p = 0; p < l.length; p++) {
          const g = l[p];
          i(g, e, a, f, !!g.dynamicChildren)
        }
      }
    },
    move: Qi,
    hydrate: Kf
  };

function Qi(t, e, a, {
  o: {
    insert: n
  },
  m: i
}, o = 2) {
  o === 0 && n(t.targetAnchor, e, a);
  const {
    el: s,
    anchor: r,
    shapeFlag: l,
    children: u,
    props: d
  } = t, c = o === 2;
  if (c && n(s, e, a), (!c || pi(d)) && l & 16)
    for (let h = 0; h < u.length; h++) i(u[h], e, a, 2);
  c && n(r, e, a)
}

function Kf(t, e, a, n, i, o, {
  o: {
    nextSibling: s,
    parentNode: r,
    querySelector: l
  }
}, u) {
  const d = e.target = Us(e.props, l);
  if (d) {
    const c = d._lpa || d.firstChild;
    if (e.shapeFlag & 16)
      if (pi(e.props)) e.anchor = u(s(t), e, r(t), a, n, i, o), e.targetAnchor = c;
      else {
        e.anchor = s(t);
        let h = c;
        for (; h;)
          if (h = s(h), h && h.nodeType === 8 && h.data === "teleport anchor") {
            e.targetAnchor = h, d._lpa = e.targetAnchor && s(e.targetAnchor);
            break
          } u(c, e, d, a, n, i, o)
      } Xd(e)
  }
  return e.anchor && s(e.anchor)
}
const Yf = Gf;

function Xd(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let a = t.children[0].el;
    for (; a && a !== t.targetAnchor;) a.nodeType === 1 && a.setAttribute("data-v-owner", e.uid), a = a.nextSibling;
    e.ut()
  }
}
const Ge = Symbol.for("v-fgt"),
  Ho = Symbol.for("v-txt"),
  Xt = Symbol.for("v-cmt"),
  rs = Symbol.for("v-stc"),
  ki = [];
let Zt = null;

function H(t = !1) {
  ki.push(Zt = t ? null : [])
}

function Zf() {
  ki.pop(), Zt = ki[ki.length - 1] || null
}
let Ci = 1;

function Ql(t) {
  Ci += t
}

function Jd(t) {
  return t.dynamicChildren = Ci > 0 ? Zt || Pn : null, Zf(), Ci > 0 && Zt && Zt.push(t), t
}

function ee(t, e, a, n, i, o) {
  return Jd(m(t, e, a, n, i, o, !0))
}

function wt(t, e, a, n, i) {
  return Jd(D(t, e, a, n, i, !0))
}

function Vs(t) {
  return t ? t.__v_isVNode === !0 : !1
}

function on(t, e) {
  return t.type === e.type && t.key === e.key
}
const Wo = "__vInternal",
  Qd = ({
    key: t
  }) => t ?? null,
  ro = ({
    ref: t,
    ref_key: e,
    ref_for: a
  }) => (typeof t == "number" && (t = "" + t), t != null ? Qe(t) || Tt(t) || me(t) ? {
    i: vt,
    r: t,
    k: e,
    f: !!a
  } : t : null);

function m(t, e = null, a = null, n = 0, i = null, o = t === Ge ? 0 : 1, s = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Qd(e),
    ref: e && ro(e),
    scopeId: qo,
    slotScopeIds: null,
    children: a,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: vt
  };
  return r ? ($r(l, a), o & 128 && t.normalize(l)) : a && (l.shapeFlag |= Qe(a) ? 8 : 16), Ci > 0 && !s && Zt && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && Zt.push(l), l
}
const D = Xf;

function Xf(t, e = null, a = null, n = 0, i = null, o = !1) {
  if ((!t || t === uf) && (t = Xt), Vs(t)) {
    const r = la(t, e, !0);
    return a && $r(r, a), Ci > 0 && !o && Zt && (r.shapeFlag & 6 ? Zt[Zt.indexOf(t)] = r : Zt.push(r)), r.patchFlag |= -2, r
  }
  if (lg(t) && (t = t.__vccOpts), e) {
    e = Jf(e);
    let {
      class: r,
      style: l
    } = e;
    r && !Qe(r) && (e.class = fe(r)), Te(l) && (Ed(l) && !oe(l) && (l = at({}, l)), e.style = _r(l))
  }
  const s = Qe(t) ? 1 : cf(t) ? 128 : Wf(t) ? 64 : Te(t) ? 4 : me(t) ? 2 : 0;
  return m(t, e, a, n, i, s, o, !0)
}

function Jf(t) {
  return t ? Ed(t) || Wo in t ? at({}, t) : t : null
}

function la(t, e, a = !1) {
  const {
    props: n,
    ref: i,
    patchFlag: o,
    children: s
  } = t, r = e ? Qf(n || {}, e) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: r,
    key: r && Qd(r),
    ref: e && e.ref ? a && i ? oe(i) ? i.concat(ro(e)) : [i, ro(e)] : ro(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: s,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== Ge ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && la(t.ssContent),
    ssFallback: t.ssFallback && la(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  }
}

function _e(t = " ", e = 0) {
  return D(Ho, null, t, e)
}

function Fe(t = "", e = !1) {
  return e ? (H(), wt(Xt, null, t)) : D(Xt, null, t)
}

function aa(t) {
  return t == null || typeof t == "boolean" ? D(Xt) : oe(t) ? D(Ge, null, t.slice()) : typeof t == "object" ? Ta(t) : D(Ho, null, String(t))
}

function Ta(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : la(t)
}

function $r(t, e) {
  let a = 0;
  const {
    shapeFlag: n
  } = t;
  if (e == null) e = null;
  else if (oe(e)) a = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), $r(t, i()), i._c && (i._d = !0));
      return
    } else {
      a = 32;
      const i = e._;
      !i && !(Wo in e) ? e._ctx = vt : i === 3 && vt && (vt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
    }
  else me(e) ? (e = {
    default: e,
    _ctx: vt
  }, a = 32) : (e = String(e), n & 64 ? (a = 16, e = [_e(e)]) : a = 8);
  t.children = e, t.shapeFlag |= a
}

function Qf(...t) {
  const e = {};
  for (let a = 0; a < t.length; a++) {
    const n = t[a];
    for (const i in n)
      if (i === "class") e.class !== n.class && (e.class = fe([e.class, n.class]));
      else if (i === "style") e.style = _r([e.style, n.style]);
    else if (Po(i)) {
      const o = e[i],
        s = n[i];
      s && o !== s && !(oe(o) && o.includes(s)) && (e[i] = o ? [].concat(o, s) : s)
    } else i !== "" && (e[i] = n[i])
  }
  return e
}

function ea(t, e, a, n = null) {
  Wt(t, e, 7, [a, n])
}
const eg = Vd();
let tg = 0;

function ag(t, e, a) {
  const n = t.type,
    i = (e ? e.appContext : t.appContext) || eg,
    o = {
      uid: tg++,
      vnode: t,
      type: n,
      parent: e,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new jm(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Wd(n, i),
      emitsOptions: Rd(n, i),
      emit: null,
      emitted: null,
      propsDefaults: Pe,
      inheritAttrs: n.inheritAttrs,
      ctx: Pe,
      data: Pe,
      props: Pe,
      attrs: Pe,
      slots: Pe,
      refs: Pe,
      setupState: Pe,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: a,
      suspenseId: a ? a.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return o.ctx = {
    _: o
  }, o.root = e ? e.root : o, o.emit = tf.bind(null, o), t.ce && t.ce(o), o
}
let dt = null;
const ec = () => dt || vt;
let wo, Hs; {
  const t = ld(),
    e = (a, n) => {
      let i;
      return (i = t[a]) || (i = t[a] = []), i.push(n), o => {
        i.length > 1 ? i.forEach(s => s(o)) : i[0](o)
      }
    };
  wo = e("__VUE_INSTANCE_SETTERS__", a => dt = a), Hs = e("__VUE_SSR_SETTERS__", a => Go = a)
}
const Mi = t => {
    const e = dt;
    return wo(t), t.scope.on(), () => {
      t.scope.off(), wo(e)
    }
  },
  eu = () => {
    dt && dt.scope.off(), wo(null)
  };

function tc(t) {
  return t.vnode.shapeFlag & 4
}
let Go = !1;

function ng(t, e = !1) {
  e && Hs(e);
  const {
    props: a,
    children: n
  } = t.vnode, i = tc(t);
  $f(t, a, i, e), Bf(t, n);
  const o = i ? ig(t, e) : void 0;
  return e && Hs(!1), o
}

function ig(t, e) {
  const a = t.type;
  t.accessCache = Object.create(null), t.proxy = Cd(new Proxy(t.ctx, Tf));
  const {
    setup: n
  } = a;
  if (n) {
    const i = t.setupContext = n.length > 1 ? sg(t) : null,
      o = Mi(t);
    _n();
    const s = Ma(n, t, 0, [t.props, i]);
    if (xn(), o(), od(s)) {
      if (s.then(eu, eu), e) return s.then(r => {
        tu(t, r, e)
      }).catch(r => {
        Bo(r, t, 0)
      });
      t.asyncDep = s
    } else tu(t, s, e)
  } else ac(t, e)
}

function tu(t, e, a) {
  me(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Te(e) && (t.setupState = Ad(e)), ac(t, a)
}
let au;

function ac(t, e, a) {
  const n = t.type;
  if (!t.render) {
    if (!e && au && !n.render) {
      const i = n.template || Pr(t).template;
      if (i) {
        const {
          isCustomElement: o,
          compilerOptions: s
        } = t.appContext.config, {
          delimiters: r,
          compilerOptions: l
        } = n, u = at(at({
          isCustomElement: o,
          delimiters: r
        }, s), l);
        n.render = au(i, u)
      }
    }
    t.render = n.render || $t
  } {
    const i = Mi(t);
    _n();
    try {
      Af(t)
    } finally {
      xn(), i()
    }
  }
}

function og(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(t.attrs, {
    get(e, a) {
      return St(t, "get", "$attrs"), e[a]
    }
  }))
}

function sg(t) {
  const e = a => {
    t.exposed = a || {}
  };
  return {
    get attrs() {
      return og(t)
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  }
}

function Ko(t) {
  if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy(Ad(Cd(t.exposed)), {
    get(e, a) {
      if (a in e) return e[a];
      if (a in fi) return fi[a](t)
    },
    has(e, a) {
      return a in e || a in fi
    }
  }))
}

function rg(t, e = !0) {
  return me(t) ? t.displayName || t.name : t.name || e && t.__name
}

function lg(t) {
  return me(t) && "__vccOpts" in t
}
const N = (t, e) => Gm(t, e, Go);

function Oe(t, e, a) {
  const n = arguments.length;
  return n === 2 ? Te(e) && !oe(e) ? Vs(e) ? D(t, null, [e]) : D(t, e) : D(t, null, e) : (n > 3 ? a = Array.prototype.slice.call(arguments, 2) : n === 3 && Vs(a) && (a = [a]), D(t, e, a))
}
const ug = "3.4.21";
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const dg = "http://www.w3.org/2000/svg",
  cg = "http://www.w3.org/1998/Math/MathML",
  Aa = typeof document < "u" ? document : null,
  nu = Aa && Aa.createElement("template"),
  hg = {
    insert: (t, e, a) => {
      e.insertBefore(t, a || null)
    },
    remove: t => {
      const e = t.parentNode;
      e && e.removeChild(t)
    },
    createElement: (t, e, a, n) => {
      const i = e === "svg" ? Aa.createElementNS(dg, t) : e === "mathml" ? Aa.createElementNS(cg, t) : Aa.createElement(t, a ? {
        is: a
      } : void 0);
      return t === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i
    },
    createText: t => Aa.createTextNode(t),
    createComment: t => Aa.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e
    },
    setElementText: (t, e) => {
      t.textContent = e
    },
    parentNode: t => t.parentNode,
    nextSibling: t => t.nextSibling,
    querySelector: t => Aa.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "")
    },
    insertStaticContent(t, e, a, n, i, o) {
      const s = a ? a.previousSibling : e.lastChild;
      if (i && (i === o || i.nextSibling))
        for (; e.insertBefore(i.cloneNode(!0), a), !(i === o || !(i = i.nextSibling)););
      else {
        nu.innerHTML = n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t;
        const r = nu.content;
        if (n === "svg" || n === "mathml") {
          const l = r.firstChild;
          for (; l.firstChild;) r.appendChild(l.firstChild);
          r.removeChild(l)
        }
        e.insertBefore(r, a)
      }
      return [s ? s.nextSibling : e.firstChild, a ? a.previousSibling : e.lastChild]
    }
  },
  ja = "transition",
  ei = "animation",
  zi = Symbol("_vtc"),
  Mr = (t, {
    slots: e
  }) => Oe(bf, mg(t), e);
Mr.displayName = "Transition";
const nc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Mr.props = at({}, Md, nc);
const Xa = (t, e = []) => {
    oe(t) ? t.forEach(a => a(...e)) : t && t(...e)
  },
  iu = t => t ? oe(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;

function mg(t) {
  const e = {};
  for (const O in t) O in nc || (e[O] = t[O]);
  if (t.css === !1) return e;
  const {
    name: a = "v",
    type: n,
    duration: i,
    enterFromClass: o = `${a}-enter-from`,
    enterActiveClass: s = `${a}-enter-active`,
    enterToClass: r = `${a}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: u = s,
    appearToClass: d = r,
    leaveFromClass: c = `${a}-leave-from`,
    leaveActiveClass: h = `${a}-leave-active`,
    leaveToClass: f = `${a}-leave-to`
  } = t, p = fg(i), g = p && p[0], k = p && p[1], {
    onBeforeEnter: w,
    onEnter: y,
    onEnterCancelled: j,
    onLeave: v,
    onLeaveCancelled: E,
    onBeforeAppear: C = w,
    onAppear: T = y,
    onAppearCancelled: _ = j
  } = e, z = (O, L, Q) => {
    Ja(O, L ? d : r), Ja(O, L ? u : s), Q && Q()
  }, S = (O, L) => {
    O._isLeaving = !1, Ja(O, c), Ja(O, f), Ja(O, h), L && L()
  }, $ = O => (L, Q) => {
    const te = O ? T : y,
      J = () => z(L, O, Q);
    Xa(te, [L, J]), ou(() => {
      Ja(L, O ? l : o), Ea(L, O ? d : r), iu(te) || su(L, n, g, J)
    })
  };
  return at(e, {
    onBeforeEnter(O) {
      Xa(w, [O]), Ea(O, o), Ea(O, s)
    },
    onBeforeAppear(O) {
      Xa(C, [O]), Ea(O, l), Ea(O, u)
    },
    onEnter: $(!1),
    onAppear: $(!0),
    onLeave(O, L) {
      O._isLeaving = !0;
      const Q = () => S(O, L);
      Ea(O, c), kg(), Ea(O, h), ou(() => {
        O._isLeaving && (Ja(O, c), Ea(O, f), iu(v) || su(O, n, k, Q))
      }), Xa(v, [O, Q])
    },
    onEnterCancelled(O) {
      z(O, !1), Xa(j, [O])
    },
    onAppearCancelled(O) {
      z(O, !0), Xa(_, [O])
    },
    onLeaveCancelled(O) {
      S(O), Xa(E, [O])
    }
  })
}

function fg(t) {
  if (t == null) return null;
  if (Te(t)) return [ls(t.enter), ls(t.leave)]; {
    const e = ls(t);
    return [e, e]
  }
}

function ls(t) {
  return pm(t)
}

function Ea(t, e) {
  e.split(/\s+/).forEach(a => a && t.classList.add(a)), (t[zi] || (t[zi] = new Set)).add(e)
}

function Ja(t, e) {
  e.split(/\s+/).forEach(n => n && t.classList.remove(n));
  const a = t[zi];
  a && (a.delete(e), a.size || (t[zi] = void 0))
}

function ou(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t)
  })
}
let gg = 0;

function su(t, e, a, n) {
  const i = t._endId = ++gg,
    o = () => {
      i === t._endId && n()
    };
  if (a) return setTimeout(o, a);
  const {
    type: s,
    timeout: r,
    propCount: l
  } = pg(t, e);
  if (!s) return n();
  const u = s + "end";
  let d = 0;
  const c = () => {
      t.removeEventListener(u, h), o()
    },
    h = f => {
      f.target === t && ++d >= l && c()
    };
  setTimeout(() => {
    d < l && c()
  }, r + 1), t.addEventListener(u, h)
}

function pg(t, e) {
  const a = window.getComputedStyle(t),
    n = p => (a[p] || "").split(", "),
    i = n(`${ja}Delay`),
    o = n(`${ja}Duration`),
    s = ru(i, o),
    r = n(`${ei}Delay`),
    l = n(`${ei}Duration`),
    u = ru(r, l);
  let d = null,
    c = 0,
    h = 0;
  e === ja ? s > 0 && (d = ja, c = s, h = o.length) : e === ei ? u > 0 && (d = ei, c = u, h = l.length) : (c = Math.max(s, u), d = c > 0 ? s > u ? ja : ei : null, h = d ? d === ja ? o.length : l.length : 0);
  const f = d === ja && /\b(transform|all)(,|$)/.test(n(`${ja}Property`).toString());
  return {
    type: d,
    timeout: c,
    propCount: h,
    hasTransform: f
  }
}

function ru(t, e) {
  for (; t.length < e.length;) t = t.concat(t);
  return Math.max(...e.map((a, n) => lu(a) + lu(t[n])))
}

function lu(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3
}

function kg() {
  return document.body.offsetHeight
}

function bg(t, e, a) {
  const n = t[zi];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? t.removeAttribute("class") : a ? t.setAttribute("class", e) : t.className = e
}
const _o = Symbol("_vod"),
  ic = Symbol("_vsh"),
  ke = {
    beforeMount(t, {
      value: e
    }, {
      transition: a
    }) {
      t[_o] = t.style.display === "none" ? "" : t.style.display, a && e ? a.beforeEnter(t) : ti(t, e)
    },
    mounted(t, {
      value: e
    }, {
      transition: a
    }) {
      a && e && a.enter(t)
    },
    updated(t, {
      value: e,
      oldValue: a
    }, {
      transition: n
    }) {
      !e != !a && (n ? e ? (n.beforeEnter(t), ti(t, !0), n.enter(t)) : n.leave(t, () => {
        ti(t, !1)
      }) : ti(t, e))
    },
    beforeUnmount(t, {
      value: e
    }) {
      ti(t, e)
    }
  };

function ti(t, e) {
  t.style.display = e ? t[_o] : "none", t[ic] = !e
}
const yg = Symbol(""),
  vg = /(^|;)\s*display\s*:/;

function wg(t, e, a) {
  const n = t.style,
    i = Qe(a);
  let o = !1;
  if (a && !i) {
    if (e)
      if (Qe(e))
        for (const s of e.split(";")) {
          const r = s.slice(0, s.indexOf(":")).trim();
          a[r] == null && lo(n, r, "")
        } else
          for (const s in e) a[s] == null && lo(n, s, "");
    for (const s in a) s === "display" && (o = !0), lo(n, s, a[s])
  } else if (i) {
    if (e !== a) {
      const s = n[yg];
      s && (a += ";" + s), n.cssText = a, o = vg.test(a)
    }
  } else e && t.removeAttribute("style");
  _o in t && (t[_o] = o ? n.display : "", t[ic] && (n.display = "none"))
}
const uu = /\s*!important$/;

function lo(t, e, a) {
  if (oe(a)) a.forEach(n => lo(t, e, n));
  else if (a == null && (a = ""), e.startsWith("--")) t.setProperty(e, a);
  else {
    const n = _g(t, e);
    uu.test(a) ? t.setProperty(Jn(n), a.replace(uu, ""), "important") : t[n] = a
  }
}
const du = ["Webkit", "Moz", "ms"],
  us = {};

function _g(t, e) {
  const a = us[e];
  if (a) return a;
  let n = ra(e);
  if (n !== "filter" && n in t) return us[e] = n;
  n = $o(n);
  for (let i = 0; i < du.length; i++) {
    const o = du[i] + n;
    if (o in t) return us[e] = o
  }
  return e
}
const cu = "http://www.w3.org/1999/xlink";

function xg(t, e, a, n, i) {
  if (n && e.startsWith("xlink:")) a == null ? t.removeAttributeNS(cu, e.slice(6, e.length)) : t.setAttributeNS(cu, e, a);
  else {
    const o = _m(e);
    a == null || o && !ud(a) ? t.removeAttribute(e) : t.setAttribute(e, o ? "" : a)
  }
}

function jg(t, e, a, n, i, o, s) {
  if (e === "innerHTML" || e === "textContent") {
    n && s(n, i, o), t[e] = a ?? "";
    return
  }
  const r = t.tagName;
  if (e === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const u = r === "OPTION" ? t.getAttribute("value") || "" : t.value,
      d = a ?? "";
    (u !== d || !("_value" in t)) && (t.value = d), a == null && t.removeAttribute(e), t._value = a;
    return
  }
  let l = !1;
  if (a === "" || a == null) {
    const u = typeof t[e];
    u === "boolean" ? a = ud(a) : a == null && u === "string" ? (a = "", l = !0) : u === "number" && (a = 0, l = !0)
  }
  try {
    t[e] = a
  } catch {}
  l && t.removeAttribute(e)
}

function sn(t, e, a, n) {
  t.addEventListener(e, a, n)
}

function Eg(t, e, a, n) {
  t.removeEventListener(e, a, n)
}
const hu = Symbol("_vei");

function Cg(t, e, a, n, i = null) {
  const o = t[hu] || (t[hu] = {}),
    s = o[e];
  if (n && s) s.value = n;
  else {
    const [r, l] = zg(e);
    if (n) {
      const u = o[e] = Ag(n, i);
      sn(t, r, u, l)
    } else s && (Eg(t, r, s, l), o[e] = void 0)
  }
}
const mu = /(?:Once|Passive|Capture)$/;

function zg(t) {
  let e;
  if (mu.test(t)) {
    e = {};
    let n;
    for (; n = t.match(mu);) t = t.slice(0, t.length - n[0].length), e[n[0].toLowerCase()] = !0
  }
  return [t[2] === ":" ? t.slice(3) : Jn(t.slice(2)), e]
}
let ds = 0;
const Sg = Promise.resolve(),
  Tg = () => ds || (Sg.then(() => ds = 0), ds = Date.now());

function Ag(t, e) {
  const a = n => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= a.attached) return;
    Wt(Dg(n, a.value), e, 5, [n])
  };
  return a.value = t, a.attached = Tg(), a
}

function Dg(t, e) {
  if (oe(e)) {
    const a = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      a.call(t), t._stopped = !0
    }, e.map(n => i => !i._stopped && n && n(i))
  } else return e
}
const fu = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
  Og = (t, e, a, n, i, o, s, r, l) => {
    const u = i === "svg";
    e === "class" ? bg(t, n, u) : e === "style" ? wg(t, a, n) : Po(e) ? yr(e) || Cg(t, e, a, n, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Fg(t, e, n, u)) ? jg(t, e, n, o, s, r, l) : (e === "true-value" ? t._trueValue = n : e === "false-value" && (t._falseValue = n), xg(t, e, n, u))
  };

function Fg(t, e, a, n) {
  if (n) return !!(e === "innerHTML" || e === "textContent" || e in t && fu(e) && me(a));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA") return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1
  }
  return fu(e) && Qe(a) ? !1 : e in t
}
const xo = t => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return oe(e) ? a => oo(e, a) : e
};

function Pg(t) {
  t.target.composing = !0
}

function gu(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}
const Mn = Symbol("_assign"),
  Lt = {
    created(t, {
      modifiers: {
        lazy: e,
        trim: a,
        number: n
      }
    }, i) {
      t[Mn] = xo(i);
      const o = n || i.props && i.props.type === "number";
      sn(t, e ? "change" : "input", s => {
        if (s.target.composing) return;
        let r = t.value;
        a && (r = r.trim()), o && (r = As(r)), t[Mn](r)
      }), a && sn(t, "change", () => {
        t.value = t.value.trim()
      }), e || (sn(t, "compositionstart", Pg), sn(t, "compositionend", gu), sn(t, "change", gu))
    },
    mounted(t, {
      value: e
    }) {
      t.value = e ?? ""
    },
    beforeUpdate(t, {
      value: e,
      modifiers: {
        lazy: a,
        trim: n,
        number: i
      }
    }, o) {
      if (t[Mn] = xo(o), t.composing) return;
      const s = i || t.type === "number" ? As(t.value) : t.value,
        r = e ?? "";
      s !== r && (document.activeElement === t && t.type !== "range" && (a || n && t.value.trim() === r) || (t.value = r))
    }
  },
  Lr = {
    deep: !0,
    created(t, e, a) {
      t[Mn] = xo(a), sn(t, "change", () => {
        const n = t._modelValue,
          i = Rg(t),
          o = t.checked,
          s = t[Mn];
        if (oe(n)) {
          const r = dd(n, i),
            l = r !== -1;
          if (o && !l) s(n.concat(i));
          else if (!o && l) {
            const u = [...n];
            u.splice(r, 1), s(u)
          }
        } else if (Ro(n)) {
          const r = new Set(n);
          o ? r.add(i) : r.delete(i), s(r)
        } else s(oc(t, o))
      })
    },
    mounted: pu,
    beforeUpdate(t, e, a) {
      t[Mn] = xo(a), pu(t, e, a)
    }
  };

function pu(t, {
  value: e,
  oldValue: a
}, n) {
  t._modelValue = e, oe(e) ? t.checked = dd(e, n.props.value) > -1 : Ro(e) ? t.checked = e.has(n.props.value) : e !== a && (t.checked = Mo(e, oc(t, !0)))
}

function Rg(t) {
  return "_value" in t ? t._value : t.value
}

function oc(t, e) {
  const a = e ? "_trueValue" : "_falseValue";
  return a in t ? t[a] : e
}
const Ig = ["ctrl", "shift", "alt", "meta"],
  $g = {
    stop: t => t.stopPropagation(),
    prevent: t => t.preventDefault(),
    self: t => t.target !== t.currentTarget,
    ctrl: t => !t.ctrlKey,
    shift: t => !t.shiftKey,
    alt: t => !t.altKey,
    meta: t => !t.metaKey,
    left: t => "button" in t && t.button !== 0,
    middle: t => "button" in t && t.button !== 1,
    right: t => "button" in t && t.button !== 2,
    exact: (t, e) => Ig.some(a => t[`${a}Key`] && !e.includes(a))
  },
  Br = (t, e) => {
    const a = t._withMods || (t._withMods = {}),
      n = e.join(".");
    return a[n] || (a[n] = (i, ...o) => {
      for (let s = 0; s < e.length; s++) {
        const r = $g[e[s]];
        if (r && r(i, e)) return
      }
      return t(i, ...o)
    })
  },
  Mg = at({
    patchProp: Og
  }, hg);
let ku;

function Lg() {
  return ku || (ku = qf(Mg))
}
const Bg = (...t) => {
  const e = Lg().createApp(...t),
    {
      mount: a
    } = e;
  return e.mount = n => {
    const i = qg(n);
    if (!i) return;
    const o = e._component;
    !me(o) && !o.render && !o.template && (o.template = i.innerHTML), i.innerHTML = "";
    const s = a(i, !1, Ng(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s
  }, e
};

function Ng(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml"
}

function qg(t) {
  return Qe(t) ? document.querySelector(t) : t
}
const Ug = "/assets/NEURespond_Logo-16.png";

function Sn(t, e, a) {
  let n = a.initialDeps ?? [],
    i;
  return () => {
    var o, s, r, l;
    let u;
    a.key && ((o = a.debug) != null && o.call(a)) && (u = Date.now());
    const d = t();
    if (!(d.length !== n.length || d.some((f, p) => n[p] !== f))) return i;
    n = d;
    let h;
    if (a.key && ((s = a.debug) != null && s.call(a)) && (h = Date.now()), i = e(...d), a.key && ((r = a.debug) != null && r.call(a))) {
      const f = Math.round((Date.now() - u) * 100) / 100,
        p = Math.round((Date.now() - h) * 100) / 100,
        g = p / 16,
        k = (w, y) => {
          for (w = String(w); w.length < y;) w = " " + w;
          return w
        };
      console.info(`%c⏱ ${k(p,5)} /${k(f,5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*g,120))}deg 100% 31%);`, a == null ? void 0 : a.key)
    }
    return (l = a == null ? void 0 : a.onChange) == null || l.call(a, i), i
  }
}

function cs(t, e) {
  if (t === void 0) throw new Error(`Unexpected undefined${e?`: ${e}`:""}`);
  return t
}
const Vg = (t, e) => Math.abs(t - e) < 1,
  Hg = t => t,
  Wg = t => {
    const e = Math.max(t.startIndex - t.overscan, 0),
      a = Math.min(t.endIndex + t.overscan, t.count - 1),
      n = [];
    for (let i = e; i <= a; i++) n.push(i);
    return n
  },
  Gg = (t, e) => {
    const a = t.scrollElement;
    if (!a) return;
    const n = o => {
      const {
        width: s,
        height: r
      } = o;
      e({
        width: Math.round(s),
        height: Math.round(r)
      })
    };
    if (n(a.getBoundingClientRect()), typeof ResizeObserver > "u") return () => {};
    const i = new ResizeObserver(o => {
      const s = o[0];
      if (s != null && s.borderBoxSize) {
        const r = s.borderBoxSize[0];
        if (r) {
          n({
            width: r.inlineSize,
            height: r.blockSize
          });
          return
        }
      }
      n(a.getBoundingClientRect())
    });
    return i.observe(a, {
      box: "border-box"
    }), () => {
      i.unobserve(a)
    }
  },
  Kg = (t, e) => {
    const a = t.scrollElement;
    if (!a) return;
    const n = () => {
      e(a[t.options.horizontal ? "scrollLeft" : "scrollTop"])
    };
    return n(), a.addEventListener("scroll", n, {
      passive: !0
    }), () => {
      a.removeEventListener("scroll", n)
    }
  },
  Yg = (t, e, a) => {
    if (e != null && e.borderBoxSize) {
      const n = e.borderBoxSize[0];
      if (n) return Math.round(n[a.options.horizontal ? "inlineSize" : "blockSize"])
    }
    return Math.round(t.getBoundingClientRect()[a.options.horizontal ? "width" : "height"])
  },
  Zg = (t, {
    adjustments: e = 0,
    behavior: a
  }, n) => {
    var i, o;
    const s = t + e;
    (o = (i = n.scrollElement) == null ? void 0 : i.scrollTo) == null || o.call(i, {
      [n.options.horizontal ? "left" : "top"]: s,
      behavior: a
    })
  };
class Xg {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.isScrolling = !1, this.isScrollingTimeoutId = null, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = new Map, this.pendingMeasuredCacheIndexes = [], this.scrollDirection = null, this.scrollAdjustments = 0, this.measureElementCache = new Map, this.observer = (() => {
      let a = null;
      const n = () => a || (typeof ResizeObserver < "u" ? a = new ResizeObserver(i => {
        i.forEach(o => {
          this._measureElement(o.target, o)
        })
      }) : null);
      return {
        disconnect: () => {
          var i;
          return (i = n()) == null ? void 0 : i.disconnect()
        },
        observe: i => {
          var o;
          return (o = n()) == null ? void 0 : o.observe(i, {
            box: "border-box"
          })
        },
        unobserve: i => {
          var o;
          return (o = n()) == null ? void 0 : o.unobserve(i)
        }
      }
    })(), this.range = null, this.setOptions = a => {
      Object.entries(a).forEach(([n, i]) => {
        typeof i > "u" && delete a[n]
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Hg,
        rangeExtractor: Wg,
        onChange: () => {},
        measureElement: Yg,
        initialRect: {
          width: 0,
          height: 0
        },
        scrollMargin: 0,
        gap: 0,
        scrollingDelay: 150,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        ...a
      }
    }, this.notify = a => {
      var n, i;
      (i = (n = this.options).onChange) == null || i.call(n, this, a)
    }, this.maybeNotify = Sn(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), a => {
      this.notify(a)
    }, {
      key: !1,
      debug: () => this.options.debug,
      initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
    }), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach(a => a()), this.unsubs = [], this.scrollElement = null
    }, this._didMount = () => (this.measureElementCache.forEach(this.observer.observe), () => {
      this.observer.disconnect(), this.cleanup()
    }), this._willUpdate = () => {
      const a = this.options.getScrollElement();
      this.scrollElement !== a && (this.cleanup(), this.scrollElement = a, this._scrollToOffset(this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      }), this.unsubs.push(this.options.observeElementRect(this, n => {
        this.scrollRect = n, this.maybeNotify()
      })), this.unsubs.push(this.options.observeElementOffset(this, n => {
        this.scrollAdjustments = 0, this.scrollOffset !== n && (this.isScrollingTimeoutId !== null && (clearTimeout(this.isScrollingTimeoutId), this.isScrollingTimeoutId = null), this.isScrolling = !0, this.scrollDirection = this.scrollOffset < n ? "forward" : "backward", this.scrollOffset = n, this.maybeNotify(), this.isScrollingTimeoutId = setTimeout(() => {
          this.isScrollingTimeoutId = null, this.isScrolling = !1, this.scrollDirection = null, this.maybeNotify()
        }, this.options.scrollingDelay))
      })))
    }, this.getSize = () => this.scrollRect[this.options.horizontal ? "width" : "height"], this.memoOptions = Sn(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey], (a, n, i, o) => (this.pendingMeasuredCacheIndexes = [], {
      count: a,
      paddingStart: n,
      scrollMargin: i,
      getItemKey: o
    }), {
      key: !1
    }), this.getFurthestMeasurement = (a, n) => {
      const i = new Map,
        o = new Map;
      for (let s = n - 1; s >= 0; s--) {
        const r = a[s];
        if (i.has(r.lane)) continue;
        const l = o.get(r.lane);
        if (l == null || r.end > l.end ? o.set(r.lane, r) : r.end < l.end && i.set(r.lane, !0), i.size === this.options.lanes) break
      }
      return o.size === this.options.lanes ? Array.from(o.values()).sort((s, r) => s.end === r.end ? s.index - r.index : s.end - r.end)[0] : void 0
    }, this.getMeasurements = Sn(() => [this.memoOptions(), this.itemSizeCache], ({
      count: a,
      paddingStart: n,
      scrollMargin: i,
      getItemKey: o
    }, s) => {
      const r = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
      this.pendingMeasuredCacheIndexes = [];
      const l = this.measurementsCache.slice(0, r);
      for (let u = r; u < a; u++) {
        const d = o(u),
          c = this.options.lanes === 1 ? l[u - 1] : this.getFurthestMeasurement(l, u),
          h = c ? c.end + this.options.gap : n + i,
          f = s.get(d),
          p = typeof f == "number" ? f : this.options.estimateSize(u),
          g = h + p,
          k = c ? c.lane : u % this.options.lanes;
        l[u] = {
          index: u,
          start: h,
          size: p,
          end: g,
          key: d,
          lane: k
        }
      }
      return this.measurementsCache = l, l
    }, {
      key: !1,
      debug: () => this.options.debug
    }), this.calculateRange = Sn(() => [this.getMeasurements(), this.getSize(), this.scrollOffset], (a, n, i) => this.range = a.length > 0 && n > 0 ? Jg({
      measurements: a,
      outerSize: n,
      scrollOffset: i
    }) : null, {
      key: !1,
      debug: () => this.options.debug
    }), this.getIndexes = Sn(() => [this.options.rangeExtractor, this.calculateRange(), this.options.overscan, this.options.count], (a, n, i, o) => n === null ? [] : a({
      ...n,
      overscan: i,
      count: o
    }), {
      key: !1,
      debug: () => this.options.debug
    }), this.indexFromElement = a => {
      const n = this.options.indexAttribute,
        i = a.getAttribute(n);
      return i ? parseInt(i, 10) : (console.warn(`Missing attribute name '${n}={index}' on measured element.`), -1)
    }, this._measureElement = (a, n) => {
      const i = this.measurementsCache[this.indexFromElement(a)];
      if (!i || !a.isConnected) {
        this.measureElementCache.forEach((r, l) => {
          r === a && (this.observer.unobserve(a), this.measureElementCache.delete(l))
        });
        return
      }
      const o = this.measureElementCache.get(i.key);
      o !== a && (o && this.observer.unobserve(o), this.observer.observe(a), this.measureElementCache.set(i.key, a));
      const s = this.options.measureElement(a, n, this);
      this.resizeItem(i, s)
    }, this.resizeItem = (a, n) => {
      const i = this.itemSizeCache.get(a.key) ?? a.size,
        o = n - i;
      o !== 0 && (a.start < this.scrollOffset + this.scrollAdjustments && this._scrollToOffset(this.scrollOffset, {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(a.index), this.itemSizeCache = new Map(this.itemSizeCache.set(a.key, n)), this.notify(!1))
    }, this.measureElement = a => {
      a && this._measureElement(a, void 0)
    }, this.getVirtualItems = Sn(() => [this.getIndexes(), this.getMeasurements()], (a, n) => {
      const i = [];
      for (let o = 0, s = a.length; o < s; o++) {
        const r = a[o],
          l = n[r];
        i.push(l)
      }
      return i
    }, {
      key: !1,
      debug: () => this.options.debug
    }), this.getVirtualItemForOffset = a => {
      const n = this.getMeasurements();
      return cs(n[sc(0, n.length - 1, i => cs(n[i]).start, a)])
    }, this.getOffsetForAlignment = (a, n) => {
      const i = this.getSize();
      n === "auto" && (a <= this.scrollOffset ? n = "start" : a >= this.scrollOffset + i ? n = "end" : n = "start"), n === "start" ? a = a : n === "end" ? a = a - i : n === "center" && (a = a - i / 2);
      const o = this.options.horizontal ? "scrollWidth" : "scrollHeight",
        r = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[o] : this.scrollElement[o] : 0) - this.getSize();
      return Math.max(Math.min(r, a), 0)
    }, this.getOffsetForIndex = (a, n = "auto") => {
      a = Math.max(0, Math.min(a, this.options.count - 1));
      const i = cs(this.getMeasurements()[a]);
      if (n === "auto")
        if (i.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd) n = "end";
        else if (i.start <= this.scrollOffset + this.options.scrollPaddingStart) n = "start";
      else return [this.scrollOffset, n];
      const o = n === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(o, n), n]
    }, this.isDynamicMode = () => this.measureElementCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && (clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null)
    }, this.scrollToOffset = (a, {
      align: n = "start",
      behavior: i
    } = {}) => {
      this.cancelScrollToIndex(), i === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(a, n), {
        adjustments: void 0,
        behavior: i
      })
    }, this.scrollToIndex = (a, {
      align: n = "auto",
      behavior: i
    } = {}) => {
      a = Math.max(0, Math.min(a, this.options.count - 1)), this.cancelScrollToIndex(), i === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
      const [o, s] = this.getOffsetForIndex(a, n);
      this._scrollToOffset(o, {
        adjustments: void 0,
        behavior: i
      }), i !== "smooth" && this.isDynamicMode() && (this.scrollToIndexTimeoutId = setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.measureElementCache.has(this.options.getItemKey(a))) {
          const [l] = this.getOffsetForIndex(a, s);
          Vg(l, this.scrollOffset) || this.scrollToIndex(a, {
            align: s,
            behavior: i
          })
        } else this.scrollToIndex(a, {
          align: s,
          behavior: i
        })
      }))
    }, this.scrollBy = (a, {
      behavior: n
    } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.scrollOffset + a, {
        adjustments: void 0,
        behavior: n
      })
    }, this.getTotalSize = () => {
      var a;
      const n = this.getMeasurements();
      let i;
      return n.length === 0 ? i = this.options.paddingStart : i = this.options.lanes === 1 ? ((a = n[n.length - 1]) == null ? void 0 : a.end) ?? 0 : Math.max(...n.slice(-this.options.lanes).map(o => o.end)), i - this.options.scrollMargin + this.options.paddingEnd
    }, this._scrollToOffset = (a, {
      adjustments: n,
      behavior: i
    }) => {
      this.options.scrollToFn(a, {
        behavior: i,
        adjustments: n
      }, this)
    }, this.measure = () => {
      this.itemSizeCache = new Map, this.notify(!1)
    }, this.setOptions(e), this.scrollRect = this.options.initialRect, this.scrollOffset = this.options.initialOffset, this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach(a => {
      this.itemSizeCache.set(a.key, a.size)
    }), this.maybeNotify()
  }
}
const sc = (t, e, a, n) => {
  for (; t <= e;) {
    const i = (t + e) / 2 | 0,
      o = a(i);
    if (o < n) t = i + 1;
    else if (o > n) e = i - 1;
    else return i
  }
  return t > 0 ? t - 1 : 0
};

function Jg({
  measurements: t,
  outerSize: e,
  scrollOffset: a
}) {
  const n = t.length - 1,
    o = sc(0, n, r => t[r].start, a);
  let s = o;
  for (; s < n && t[s].end < a + e;) s++;
  return {
    startIndex: o,
    endIndex: s
  }
}

function Qg(t) {
  const e = new Xg(F(t)),
    a = Ar(e),
    n = e._didMount();
  return He(() => F(t).getScrollElement(), i => {
    i && e._willUpdate()
  }, {
    immediate: !0
  }), He(() => F(t), i => {
    e.setOptions({
      ...i,
      onChange: (o, s) => {
        var r;
        Ml(a), (r = i.onChange) == null || r.call(i, o, s)
      }
    }), e._willUpdate(), Ml(a)
  }, {
    immediate: !0
  }), zm(n), a
}

function ep(t) {
  return Qg(N(() => ({
    observeElementRect: Gg,
    observeElementOffset: Kg,
    scrollToFn: Zg,
    ...F(t)
  })))
}

function Nr(t, e, a) {
  let n = M(a == null ? void 0 : a.value),
    i = N(() => t.value !== void 0);
  return [N(() => i.value ? t.value : n.value), function (o) {
    return i.value || (n.value = o), e == null ? void 0 : e(o)
  }]
}
let tp = Symbol("headlessui.useid"),
  ap = 0;

function Ot() {
  return Re(tp, () => `${++ap}`)()
}

function X(t) {
  var e;
  if (t == null || t.value == null) return null;
  let a = (e = t.value.$el) != null ? e : t.value;
  return a instanceof Node ? a : null
}

function Ne(t, e, ...a) {
  if (t in e) {
    let i = e[t];
    return typeof i == "function" ? i(...a) : i
  }
  let n = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(i=>`"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Ne), n
}
var np = Object.defineProperty,
  ip = (t, e, a) => e in t ? np(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
  }) : t[e] = a,
  bu = (t, e, a) => (ip(t, typeof e != "symbol" ? e + "" : e, a), a);
let op = class {
    constructor() {
      bu(this, "current", this.detect()), bu(this, "currentId", 0)
    }
    set(e) {
      this.current !== e && (this.currentId = 0, this.current = e)
    }
    reset() {
      this.set(this.detect())
    }
    nextId() {
      return ++this.currentId
    }
    get isServer() {
      return this.current === "server"
    }
    get isClient() {
      return this.current === "client"
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client"
    }
  },
  Li = new op;

function Ha(t) {
  if (Li.isServer) return null;
  if (t instanceof Node) return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let e = X(t);
    if (e) return e.ownerDocument
  }
  return document
}
let Ws = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(t => `${t}:not([tabindex='-1'])`).join(",");
var Oa = (t => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(Oa || {}),
  rc = (t => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(rc || {}),
  sp = (t => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(sp || {});

function rp(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(Ws)).sort((e, a) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (a.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var qr = (t => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(qr || {});

function lc(t, e = 0) {
  var a;
  return t === ((a = Ha(t)) == null ? void 0 : a.body) ? !1 : Ne(e, {
    0() {
      return t.matches(Ws)
    },
    1() {
      let n = t;
      for (; n !== null;) {
        if (n.matches(Ws)) return !0;
        n = n.parentElement
      }
      return !1
    }
  })
}
var lp = (t => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(lp || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", t => {
  t.metaKey || t.altKey || t.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", t => {
  t.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : t.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function hn(t) {
  t == null || t.focus({
    preventScroll: !0
  })
}
let up = ["textarea", "input"].join(",");

function dp(t) {
  var e, a;
  return (a = (e = t == null ? void 0 : t.matches) == null ? void 0 : e.call(t, up)) != null ? a : !1
}

function Ur(t, e = a => a) {
  return t.slice().sort((a, n) => {
    let i = e(a),
      o = e(n);
    if (i === null || o === null) return 0;
    let s = i.compareDocumentPosition(o);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
  })
}

function uo(t, e, {
  sorted: a = !0,
  relativeTo: n = null,
  skipElements: i = []
} = {}) {
  var o;
  let s = (o = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? o : document,
    r = Array.isArray(t) ? a ? Ur(t) : t : rp(t);
  i.length > 0 && r.length > 1 && (r = r.filter(p => !i.includes(p))), n = n ?? s.activeElement;
  let l = (() => {
      if (e & 5) return 1;
      if (e & 10) return -1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    })(),
    u = (() => {
      if (e & 1) return 0;
      if (e & 2) return Math.max(0, r.indexOf(n)) - 1;
      if (e & 4) return Math.max(0, r.indexOf(n)) + 1;
      if (e & 8) return r.length - 1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    })(),
    d = e & 32 ? {
      preventScroll: !0
    } : {},
    c = 0,
    h = r.length,
    f;
  do {
    if (c >= h || c + h <= 0) return 0;
    let p = u + c;
    if (e & 16) p = (p + h) % h;
    else {
      if (p < 0) return 3;
      if (p >= h) return 1
    }
    f = r[p], f == null || f.focus(d), c += l
  } while (f !== s.activeElement);
  return e & 6 && dp(f) && f.select(), 2
}

function uc() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function cp() {
  return /Android/gi.test(window.navigator.userAgent)
}

function dc() {
  return uc() || cp()
}

function eo(t, e, a) {
  Li.isServer || nt(n => {
    document.addEventListener(t, e, a), n(() => document.removeEventListener(t, e, a))
  })
}

function cc(t, e, a) {
  Li.isServer || nt(n => {
    window.addEventListener(t, e, a), n(() => window.removeEventListener(t, e, a))
  })
}

function Vr(t, e, a = N(() => !0)) {
  function n(o, s) {
    if (!a.value || o.defaultPrevented) return;
    let r = s(o);
    if (r === null || !r.getRootNode().contains(r)) return;
    let l = function u(d) {
      return typeof d == "function" ? u(d()) : Array.isArray(d) || d instanceof Set ? d : [d]
    }(t);
    for (let u of l) {
      if (u === null) continue;
      let d = u instanceof HTMLElement ? u : X(u);
      if (d != null && d.contains(r) || o.composed && o.composedPath().includes(d)) return
    }
    return !lc(r, qr.Loose) && r.tabIndex !== -1 && o.preventDefault(), e(o, r)
  }
  let i = M(null);
  eo("pointerdown", o => {
    var s, r;
    a.value && (i.value = ((r = (s = o.composedPath) == null ? void 0 : s.call(o)) == null ? void 0 : r[0]) || o.target)
  }, !0), eo("mousedown", o => {
    var s, r;
    a.value && (i.value = ((r = (s = o.composedPath) == null ? void 0 : s.call(o)) == null ? void 0 : r[0]) || o.target)
  }, !0), eo("click", o => {
    dc() || i.value && (n(o, () => i.value), i.value = null)
  }, !0), eo("touchend", o => n(o, () => o.target instanceof HTMLElement ? o.target : null), !0), cc("blur", o => n(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function yu(t, e) {
  if (t) return t;
  let a = e ?? "button";
  if (typeof a == "string" && a.toLowerCase() === "button") return "button"
}

function Hr(t, e) {
  let a = M(yu(t.value.type, t.value.as));
  return qe(() => {
    a.value = yu(t.value.type, t.value.as)
  }), nt(() => {
    var n;
    a.value || X(e) && X(e) instanceof HTMLButtonElement && !((n = X(e)) != null && n.hasAttribute("type")) && (a.value = "button")
  }), a
}

function vu(t) {
  return [t.screenX, t.screenY]
}

function hc() {
  let t = M([-1, -1]);
  return {
    wasMoved(e) {
      let a = vu(e);
      return t.value[0] === a[0] && t.value[1] === a[1] ? !1 : (t.value = a, !0)
    },
    update(e) {
      t.value = vu(e)
    }
  }
}

function hp({
  container: t,
  accept: e,
  walk: a,
  enabled: n
}) {
  nt(() => {
    let i = t.value;
    if (!i || n !== void 0 && !n.value) return;
    let o = Ha(t);
    if (!o) return;
    let s = Object.assign(l => e(l), {
        acceptNode: e
      }),
      r = o.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, s, !1);
    for (; r.nextNode();) a(r.currentNode)
  })
}
var ua = (t => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(ua || {}),
  Fa = (t => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(Fa || {});

function Ye({
  visible: t = !0,
  features: e = 0,
  ourProps: a,
  theirProps: n,
  ...i
}) {
  var o;
  let s = fc(n, a),
    r = Object.assign(i, {
      props: s
    });
  if (t || e & 2 && s.static) return hs(r);
  if (e & 1) {
    let l = (o = s.unmount) == null || o ? 0 : 1;
    return Ne(l, {
      0() {
        return null
      },
      1() {
        return hs({
          ...i,
          props: {
            ...s,
            hidden: !0,
            style: {
              display: "none"
            }
          }
        })
      }
    })
  }
  return hs(r)
}

function hs({
  props: t,
  attrs: e,
  slots: a,
  slot: n,
  name: i
}) {
  var o, s;
  let {
    as: r,
    ...l
  } = jn(t, ["unmount", "static"]), u = (o = a.default) == null ? void 0 : o.call(a, n), d = {};
  if (n) {
    let c = !1,
      h = [];
    for (let [f, p] of Object.entries(n)) typeof p == "boolean" && (c = !0), p === !0 && h.push(f);
    c && (d["data-headlessui-state"] = h.join(" "))
  }
  if (r === "template") {
    if (u = mc(u ?? []), Object.keys(l).length > 0 || Object.keys(e).length > 0) {
      let [c, ...h] = u ?? [];
      if (!mp(c) || h.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(e)).map(g => g.trim()).filter((g, k, w) => w.indexOf(g) === k).sort((g, k) => g.localeCompare(k)).map(g => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(g => `  - ${g}`).join(`
`)].join(`
`));
      let f = fc((s = c.props) != null ? s : {}, l, d),
        p = la(c, f, !0);
      for (let g in f) g.startsWith("on") && (p.props || (p.props = {}), p.props[g] = f[g]);
      return p
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u
  }
  return Oe(r, Object.assign({}, l, d), {
    default: () => u
  })
}

function mc(t) {
  return t.flatMap(e => e.type === Ge ? mc(e.children) : [e])
}

function fc(...t) {
  if (t.length === 0) return {};
  if (t.length === 1) return t[0];
  let e = {},
    a = {};
  for (let n of t)
    for (let i in n) i.startsWith("on") && typeof n[i] == "function" ? (a[i] != null || (a[i] = []), a[i].push(n[i])) : e[i] = n[i];
  if (e.disabled || e["aria-disabled"]) return Object.assign(e, Object.fromEntries(Object.keys(a).map(n => [n, void 0])));
  for (let n in a) Object.assign(e, {
    [n](i, ...o) {
      let s = a[n];
      for (let r of s) {
        if (i instanceof Event && i.defaultPrevented) return;
        r(i, ...o)
      }
    }
  });
  return e
}

function Wr(t) {
  let e = Object.assign({}, t);
  for (let a in e) e[a] === void 0 && delete e[a];
  return e
}

function jn(t, e = []) {
  let a = Object.assign({}, t);
  for (let n of e) n in a && delete a[n];
  return a
}

function mp(t) {
  return t == null ? !1 : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function"
}
var bn = (t => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(bn || {});
let Un = ge({
    name: "Hidden",
    props: {
      as: {
        type: [Object, String],
        default: "div"
      },
      features: {
        type: Number,
        default: 1
      }
    },
    setup(t, {
      slots: e,
      attrs: a
    }) {
      return () => {
        var n;
        let {
          features: i,
          ...o
        } = t, s = {
          "aria-hidden": (i & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0,
          style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(i & 4) === 4 && (i & 2) !== 2 && {
              display: "none"
            }
          }
        };
        return Ye({
          ourProps: s,
          theirProps: o,
          slot: {},
          attrs: a,
          slots: e,
          name: "Hidden"
        })
      }
    }
  }),
  gc = Symbol("Context");
var Je = (t => (t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t))(Je || {});

function fp() {
  return Bi() !== null
}

function Bi() {
  return Re(gc, null)
}

function Gr(t) {
  ct(gc, t)
}
var we = (t => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(we || {});

function gp(t) {
  function e() {
    document.readyState !== "loading" && (t(), document.removeEventListener("DOMContentLoaded", e))
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", e), e())
}
let ka = [];
gp(() => {
  function t(e) {
    e.target instanceof HTMLElement && e.target !== document.body && ka[0] !== e.target && (ka.unshift(e.target), ka = ka.filter(a => a != null && a.isConnected), ka.splice(10))
  }
  window.addEventListener("click", t, {
    capture: !0
  }), window.addEventListener("mousedown", t, {
    capture: !0
  }), window.addEventListener("focus", t, {
    capture: !0
  }), document.body.addEventListener("click", t, {
    capture: !0
  }), document.body.addEventListener("mousedown", t, {
    capture: !0
  }), document.body.addEventListener("focus", t, {
    capture: !0
  })
});

function pp(t) {
  throw new Error("Unexpected object: " + t)
}
var xe = (t => (t[t.First = 0] = "First", t[t.Previous = 1] = "Previous", t[t.Next = 2] = "Next", t[t.Last = 3] = "Last", t[t.Specific = 4] = "Specific", t[t.Nothing = 5] = "Nothing", t))(xe || {});

function Gs(t, e) {
  let a = e.resolveItems();
  if (a.length <= 0) return null;
  let n = e.resolveActiveIndex(),
    i = n ?? -1;
  switch (t.focus) {
    case 0: {
      for (let o = 0; o < a.length; ++o)
        if (!e.resolveDisabled(a[o], o, a)) return o;
      return n
    }
    case 1: {
      i === -1 && (i = a.length);
      for (let o = i - 1; o >= 0; --o)
        if (!e.resolveDisabled(a[o], o, a)) return o;
      return n
    }
    case 2: {
      for (let o = i + 1; o < a.length; ++o)
        if (!e.resolveDisabled(a[o], o, a)) return o;
      return n
    }
    case 3: {
      for (let o = a.length - 1; o >= 0; --o)
        if (!e.resolveDisabled(a[o], o, a)) return o;
      return n
    }
    case 4: {
      for (let o = 0; o < a.length; ++o)
        if (e.resolveId(a[o], o, a) === t.id) return o;
      return n
    }
    case 5:
      return null;
    default:
      pp(t)
  }
}

function Kr(t) {
  typeof queueMicrotask == "function" ? queueMicrotask(t) : Promise.resolve().then(t).catch(e => setTimeout(() => {
    throw e
  }))
}

function yn() {
  let t = [],
    e = {
      addEventListener(a, n, i, o) {
        return a.addEventListener(n, i, o), e.add(() => a.removeEventListener(n, i, o))
      },
      requestAnimationFrame(...a) {
        let n = requestAnimationFrame(...a);
        e.add(() => cancelAnimationFrame(n))
      },
      nextFrame(...a) {
        e.requestAnimationFrame(() => {
          e.requestAnimationFrame(...a)
        })
      },
      setTimeout(...a) {
        let n = setTimeout(...a);
        e.add(() => clearTimeout(n))
      },
      microTask(...a) {
        let n = {
          current: !0
        };
        return Kr(() => {
          n.current && a[0]()
        }), e.add(() => {
          n.current = !1
        })
      },
      style(a, n, i) {
        let o = a.style.getPropertyValue(n);
        return Object.assign(a.style, {
          [n]: i
        }), this.add(() => {
          Object.assign(a.style, {
            [n]: o
          })
        })
      },
      group(a) {
        let n = yn();
        return a(n), this.add(() => n.dispose())
      },
      add(a) {
        return t.push(a), () => {
          let n = t.indexOf(a);
          if (n >= 0)
            for (let i of t.splice(n, 1)) i()
        }
      },
      dispose() {
        for (let a of t.splice(0)) a()
      }
    };
  return e
}

function Yr(t = {}, e = null, a = []) {
  for (let [n, i] of Object.entries(t)) kc(a, pc(e, n), i);
  return a
}

function pc(t, e) {
  return t ? t + "[" + e + "]" : e
}

function kc(t, e, a) {
  if (Array.isArray(a))
    for (let [n, i] of a.entries()) kc(t, pc(e, n.toString()), i);
  else a instanceof Date ? t.push([e, a.toISOString()]) : typeof a == "boolean" ? t.push([e, a ? "1" : "0"]) : typeof a == "string" ? t.push([e, a]) : typeof a == "number" ? t.push([e, `${a}`]) : a == null ? t.push([e, ""]) : Yr(a, e, t)
}

function kp(t) {
  var e, a;
  let n = (e = t == null ? void 0 : t.form) != null ? e : t.closest("form");
  if (n) {
    for (let i of n.elements)
      if (i !== t && (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image")) {
        i.click();
        return
      }(a = n.requestSubmit) == null || a.call(n)
  }
}

function bp(t, e) {
  return t === e
}
var yp = (t => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(yp || {}),
  vp = (t => (t[t.Single = 0] = "Single", t[t.Multi = 1] = "Multi", t))(vp || {}),
  wp = (t => (t[t.Pointer = 0] = "Pointer", t[t.Focus = 1] = "Focus", t[t.Other = 2] = "Other", t))(wp || {});
let bc = Symbol("ComboboxContext");

function En(t) {
  let e = Re(bc, null);
  if (e === null) {
    let a = new Error(`<${t} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, En), a
  }
  return e
}
let yc = Symbol("VirtualContext"),
  _p = ge({
    name: "VirtualProvider",
    setup(t, {
      slots: e
    }) {
      let a = En("VirtualProvider"),
        n = N(() => {
          let r = X(a.optionsRef);
          if (!r) return {
            start: 0,
            end: 0
          };
          let l = window.getComputedStyle(r);
          return {
            start: parseFloat(l.paddingBlockStart || l.paddingTop),
            end: parseFloat(l.paddingBlockEnd || l.paddingBottom)
          }
        }),
        i = ep(N(() => ({
          scrollPaddingStart: n.value.start,
          scrollPaddingEnd: n.value.end,
          count: a.virtual.value.options.length,
          estimateSize() {
            return 40
          },
          getScrollElement() {
            return X(a.optionsRef)
          },
          overscan: 12
        }))),
        o = N(() => {
          var r;
          return (r = a.virtual.value) == null ? void 0 : r.options
        }),
        s = M(0);
      return He([o], () => {
        s.value += 1
      }), ct(yc, a.virtual.value ? i : null), () => [Oe("div", {
        style: {
          position: "relative",
          width: "100%",
          height: `${i.value.getTotalSize()}px`
        },
        ref: r => {
          if (r) {
            if (typeof process < "u" && {}.JEST_WORKER_ID !== void 0 || a.activationTrigger.value === 0) return;
            a.activeOptionIndex.value !== null && a.virtual.value.options.length > a.activeOptionIndex.value && i.value.scrollToIndex(a.activeOptionIndex.value)
          }
        }
      }, i.value.getVirtualItems().map(r => la(e.default({
        option: a.virtual.value.options[r.index],
        open: a.comboboxState.value === 0
      })[0], {
        key: `${s.value}-${r.index}`,
        "data-index": r.index,
        "aria-setsize": a.virtual.value.options.length,
        "aria-posinset": r.index + 1,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${r.start}px)`,
          overflowAnchor: "none"
        }
      })))]
    }
  }),
  xp = ge({
    name: "Combobox",
    emits: {
      "update:modelValue": t => !0
    },
    props: {
      as: {
        type: [Object, String],
        default: "template"
      },
      disabled: {
        type: [Boolean],
        default: !1
      },
      by: {
        type: [String, Function],
        nullable: !0,
        default: null
      },
      modelValue: {
        type: [Object, String, Number, Boolean],
        default: void 0
      },
      defaultValue: {
        type: [Object, String, Number, Boolean],
        default: void 0
      },
      form: {
        type: String,
        optional: !0
      },
      name: {
        type: String,
        optional: !0
      },
      nullable: {
        type: Boolean,
        default: !1
      },
      multiple: {
        type: [Boolean],
        default: !1
      },
      immediate: {
        type: [Boolean],
        default: !1
      },
      virtual: {
        type: Object,
        default: null
      }
    },
    inheritAttrs: !1,
    setup(t, {
      slots: e,
      attrs: a,
      emit: n
    }) {
      let i = M(1),
        o = M(null),
        s = M(null),
        r = M(null),
        l = M(null),
        u = M({
          static: !1,
          hold: !1
        }),
        d = M([]),
        c = M(null),
        h = M(2),
        f = M(!1);

      function p(S = $ => $) {
        let $ = c.value !== null ? d.value[c.value] : null,
          O = S(d.value.slice()),
          L = O.length > 0 && O[0].dataRef.order.value !== null ? O.sort((te, J) => te.dataRef.order.value - J.dataRef.order.value) : Ur(O, te => X(te.dataRef.domRef)),
          Q = $ ? L.indexOf($) : null;
        return Q === -1 && (Q = null), {
          options: L,
          activeOptionIndex: Q
        }
      }
      let g = N(() => t.multiple ? 1 : 0),
        k = N(() => t.nullable),
        [w, y] = Nr(N(() => t.modelValue), S => n("update:modelValue", S), N(() => t.defaultValue)),
        j = N(() => w.value === void 0 ? Ne(g.value, {
          1: [],
          0: void 0
        }) : w.value),
        v = null,
        E = null;

      function C(S) {
        return Ne(g.value, {
          0() {
            return y == null ? void 0 : y(S)
          },
          1: () => {
            let $ = ue(_.value.value).slice(),
              O = ue(S),
              L = $.findIndex(Q => _.compare(O, ue(Q)));
            return L === -1 ? $.push(O) : $.splice(L, 1), y == null ? void 0 : y($)
          }
        })
      }
      let T = N(() => {});
      He([T], ([S], [$]) => {
        if (_.virtual.value && S && $ && c.value !== null) {
          let O = S.indexOf($[c.value]);
          O !== -1 ? c.value = O : c.value = null
        }
      });
      let _ = {
        comboboxState: i,
        value: j,
        mode: g,
        compare(S, $) {
          if (typeof t.by == "string") {
            let O = t.by;
            return (S == null ? void 0 : S[O]) === ($ == null ? void 0 : $[O])
          }
          return t.by === null ? bp(S, $) : t.by(S, $)
        },
        calculateIndex(S) {
          return _.virtual.value ? t.by === null ? _.virtual.value.options.indexOf(S) : _.virtual.value.options.findIndex($ => _.compare($, S)) : d.value.findIndex($ => _.compare($.dataRef.value, S))
        },
        defaultValue: N(() => t.defaultValue),
        nullable: k,
        immediate: N(() => !1),
        virtual: N(() => null),
        inputRef: s,
        labelRef: o,
        buttonRef: r,
        optionsRef: l,
        disabled: N(() => t.disabled),
        options: d,
        change(S) {
          y(S)
        },
        activeOptionIndex: N(() => {
          if (f.value && c.value === null && (_.virtual.value ? _.virtual.value.options.length > 0 : d.value.length > 0)) {
            if (_.virtual.value) {
              let $ = _.virtual.value.options.findIndex(O => {
                var L;
                return !((L = _.virtual.value) != null && L.disabled(O))
              });
              if ($ !== -1) return $
            }
            let S = d.value.findIndex($ => !$.dataRef.disabled);
            if (S !== -1) return S
          }
          return c.value
        }),
        activationTrigger: h,
        optionsPropsRef: u,
        closeCombobox() {
          f.value = !1, !t.disabled && i.value !== 1 && (i.value = 1, c.value = null)
        },
        openCombobox() {
          if (f.value = !0, !t.disabled && i.value !== 0) {
            if (_.value.value) {
              let S = _.calculateIndex(_.value.value);
              S !== -1 && (c.value = S)
            }
            i.value = 0
          }
        },
        setActivationTrigger(S) {
          h.value = S
        },
        goToOption(S, $, O) {
          f.value = !1, v !== null && cancelAnimationFrame(v), v = requestAnimationFrame(() => {
            if (t.disabled || l.value && !u.value.static && i.value === 1) return;
            if (_.virtual.value) {
              c.value = S === xe.Specific ? $ : Gs({
                focus: S
              }, {
                resolveItems: () => _.virtual.value.options,
                resolveActiveIndex: () => {
                  var te, J;
                  return (J = (te = _.activeOptionIndex.value) != null ? te : _.virtual.value.options.findIndex(ae => {
                    var se;
                    return !((se = _.virtual.value) != null && se.disabled(ae))
                  })) != null ? J : null
                },
                resolveDisabled: te => _.virtual.value.disabled(te),
                resolveId() {
                  throw new Error("Function not implemented.")
                }
              }), h.value = O ?? 2;
              return
            }
            let L = p();
            if (L.activeOptionIndex === null) {
              let te = L.options.findIndex(J => !J.dataRef.disabled);
              te !== -1 && (L.activeOptionIndex = te)
            }
            let Q = S === xe.Specific ? $ : Gs({
              focus: S
            }, {
              resolveItems: () => L.options,
              resolveActiveIndex: () => L.activeOptionIndex,
              resolveId: te => te.id,
              resolveDisabled: te => te.dataRef.disabled
            });
            c.value = Q, h.value = O ?? 2, d.value = L.options
          })
        },
        selectOption(S) {
          let $ = d.value.find(L => L.id === S);
          if (!$) return;
          let {
            dataRef: O
          } = $;
          C(O.value)
        },
        selectActiveOption() {
          if (_.activeOptionIndex.value !== null) {
            if (_.virtual.value) C(_.virtual.value.options[_.activeOptionIndex.value]);
            else {
              let {
                dataRef: S
              } = d.value[_.activeOptionIndex.value];
              C(S.value)
            }
            _.goToOption(xe.Specific, _.activeOptionIndex.value)
          }
        },
        registerOption(S, $) {
          let O = ha({
            id: S,
            dataRef: $
          });
          if (_.virtual.value) {
            d.value.push(O);
            return
          }
          E && cancelAnimationFrame(E);
          let L = p(Q => (Q.push(O), Q));
          c.value === null && _.isSelected($.value.value) && (L.activeOptionIndex = L.options.indexOf(O)), d.value = L.options, c.value = L.activeOptionIndex, h.value = 2, L.options.some(Q => !X(Q.dataRef.domRef)) && (E = requestAnimationFrame(() => {
            let Q = p();
            d.value = Q.options, c.value = Q.activeOptionIndex
          }))
        },
        unregisterOption(S, $) {
          if (v !== null && cancelAnimationFrame(v), $ && (f.value = !0), _.virtual.value) {
            d.value = d.value.filter(L => L.id !== S);
            return
          }
          let O = p(L => {
            let Q = L.findIndex(te => te.id === S);
            return Q !== -1 && L.splice(Q, 1), L
          });
          d.value = O.options, c.value = O.activeOptionIndex, h.value = 2
        },
        isSelected(S) {
          return Ne(g.value, {
            0: () => _.compare(ue(_.value.value), ue(S)),
            1: () => ue(_.value.value).some($ => _.compare(ue($), ue(S)))
          })
        },
        isActive(S) {
          return c.value === _.calculateIndex(S)
        }
      };
      Vr([s, r, l], () => _.closeCombobox(), N(() => i.value === 0)), ct(bc, _), Gr(N(() => Ne(i.value, {
        0: Je.Open,
        1: Je.Closed
      })));
      let z = N(() => {
        var S;
        return (S = X(s)) == null ? void 0 : S.closest("form")
      });
      return qe(() => {
        He([z], () => {
          if (!z.value || t.defaultValue === void 0) return;

          function S() {
            _.change(t.defaultValue)
          }
          return z.value.addEventListener("reset", S), () => {
            var $;
            ($ = z.value) == null || $.removeEventListener("reset", S)
          }
        }, {
          immediate: !0
        })
      }), () => {
        var S, $, O;
        let {
          name: L,
          disabled: Q,
          form: te,
          ...J
        } = t, ae = {
          open: i.value === 0,
          disabled: Q,
          activeIndex: _.activeOptionIndex.value,
          activeOption: _.activeOptionIndex.value === null ? null : _.virtual.value ? _.virtual.value.options[(S = _.activeOptionIndex.value) != null ? S : 0] : (O = ($ = _.options.value[_.activeOptionIndex.value]) == null ? void 0 : $.dataRef.value) != null ? O : null,
          value: j.value
        };
        return Oe(Ge, [...L != null && j.value != null ? Yr({
          [L]: j.value
        }).map(([se, tt]) => Oe(Un, Wr({
          features: bn.Hidden,
          key: se,
          as: "input",
          type: "hidden",
          hidden: !0,
          readOnly: !0,
          form: te,
          name: se,
          value: tt
        }))) : [], Ye({
          theirProps: {
            ...a,
            ...jn(J, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"])
          },
          ourProps: {},
          slot: ae,
          slots: e,
          attrs: a,
          name: "Combobox"
        })])
      }
    }
  }),
  jp = ge({
    name: "ComboboxLabel",
    props: {
      as: {
        type: [Object, String],
        default: "label"
      },
      id: {
        type: String,
        default: null
      }
    },
    setup(t, {
      attrs: e,
      slots: a
    }) {
      var n;
      let i = (n = t.id) != null ? n : `headlessui-combobox-label-${Ot()}`,
        o = En("ComboboxLabel");

      function s() {
        var r;
        (r = X(o.inputRef)) == null || r.focus({
          preventScroll: !0
        })
      }
      return () => {
        let r = {
            open: o.comboboxState.value === 0,
            disabled: o.disabled.value
          },
          {
            ...l
          } = t,
          u = {
            id: i,
            ref: o.labelRef,
            onClick: s
          };
        return Ye({
          ourProps: u,
          theirProps: l,
          slot: r,
          attrs: e,
          slots: a,
          name: "ComboboxLabel"
        })
      }
    }
  }),
  Ep = ge({
    name: "ComboboxButton",
    props: {
      as: {
        type: [Object, String],
        default: "button"
      },
      id: {
        type: String,
        default: null
      }
    },
    setup(t, {
      attrs: e,
      slots: a,
      expose: n
    }) {
      var i;
      let o = (i = t.id) != null ? i : `headlessui-combobox-button-${Ot()}`,
        s = En("ComboboxButton");
      n({
        el: s.buttonRef,
        $el: s.buttonRef
      });

      function r(d) {
        s.disabled.value || (s.comboboxState.value === 0 ? s.closeCombobox() : (d.preventDefault(), s.openCombobox()), ut(() => {
          var c;
          return (c = X(s.inputRef)) == null ? void 0 : c.focus({
            preventScroll: !0
          })
        }))
      }

      function l(d) {
        switch (d.key) {
          case we.ArrowDown:
            d.preventDefault(), d.stopPropagation(), s.comboboxState.value === 1 && s.openCombobox(), ut(() => {
              var c;
              return (c = s.inputRef.value) == null ? void 0 : c.focus({
                preventScroll: !0
              })
            });
            return;
          case we.ArrowUp:
            d.preventDefault(), d.stopPropagation(), s.comboboxState.value === 1 && (s.openCombobox(), ut(() => {
              s.value.value || s.goToOption(xe.Last)
            })), ut(() => {
              var c;
              return (c = s.inputRef.value) == null ? void 0 : c.focus({
                preventScroll: !0
              })
            });
            return;
          case we.Escape:
            if (s.comboboxState.value !== 0) return;
            d.preventDefault(), s.optionsRef.value && !s.optionsPropsRef.value.static && d.stopPropagation(), s.closeCombobox(), ut(() => {
              var c;
              return (c = s.inputRef.value) == null ? void 0 : c.focus({
                preventScroll: !0
              })
            });
            return
        }
      }
      let u = Hr(N(() => ({
        as: t.as,
        type: e.type
      })), s.buttonRef);
      return () => {
        var d, c;
        let h = {
            open: s.comboboxState.value === 0,
            disabled: s.disabled.value,
            value: s.value.value
          },
          {
            ...f
          } = t,
          p = {
            ref: s.buttonRef,
            id: o,
            type: u.value,
            tabindex: "-1",
            "aria-haspopup": "listbox",
            "aria-controls": (d = X(s.optionsRef)) == null ? void 0 : d.id,
            "aria-expanded": s.comboboxState.value === 0,
            "aria-labelledby": s.labelRef.value ? [(c = X(s.labelRef)) == null ? void 0 : c.id, o].join(" ") : void 0,
            disabled: s.disabled.value === !0 ? !0 : void 0,
            onKeydown: l,
            onClick: r
          };
        return Ye({
          ourProps: p,
          theirProps: f,
          slot: h,
          attrs: e,
          slots: a,
          name: "ComboboxButton"
        })
      }
    }
  }),
  Cp = ge({
    name: "ComboboxInput",
    props: {
      as: {
        type: [Object, String],
        default: "input"
      },
      static: {
        type: Boolean,
        default: !1
      },
      unmount: {
        type: Boolean,
        default: !0
      },
      displayValue: {
        type: Function
      },
      defaultValue: {
        type: String,
        default: void 0
      },
      id: {
        type: String,
        default: null
      }
    },
    emits: {
      change: t => !0
    },
    setup(t, {
      emit: e,
      attrs: a,
      slots: n,
      expose: i
    }) {
      var o;
      let s = (o = t.id) != null ? o : `headlessui-combobox-input-${Ot()}`,
        r = En("ComboboxInput"),
        l = N(() => Ha(X(r.inputRef))),
        u = {
          value: !1
        };
      i({
        el: r.inputRef,
        $el: r.inputRef
      });

      function d() {
        r.change(null);
        let v = X(r.optionsRef);
        v && (v.scrollTop = 0), r.goToOption(xe.Nothing)
      }
      let c = N(() => {
        var v;
        let E = r.value.value;
        return X(r.inputRef) ? typeof t.displayValue < "u" && E !== void 0 ? (v = t.displayValue(E)) != null ? v : "" : typeof E == "string" ? E : "" : ""
      });
      qe(() => {
        He([c, r.comboboxState, l], ([v, E], [C, T]) => {
          if (u.value) return;
          let _ = X(r.inputRef);
          _ && ((T === 0 && E === 1 || v !== C) && (_.value = v), requestAnimationFrame(() => {
            var z;
            if (u.value || !_ || ((z = l.value) == null ? void 0 : z.activeElement) !== _) return;
            let {
              selectionStart: S,
              selectionEnd: $
            } = _;
            Math.abs(($ ?? 0) - (S ?? 0)) === 0 && S === 0 && _.setSelectionRange(_.value.length, _.value.length)
          }))
        }, {
          immediate: !0
        }), He([r.comboboxState], ([v], [E]) => {
          if (v === 0 && E === 1) {
            if (u.value) return;
            let C = X(r.inputRef);
            if (!C) return;
            let T = C.value,
              {
                selectionStart: _,
                selectionEnd: z,
                selectionDirection: S
              } = C;
            C.value = "", C.value = T, S !== null ? C.setSelectionRange(_, z, S) : C.setSelectionRange(_, z)
          }
        })
      });
      let h = M(!1);

      function f() {
        h.value = !0
      }

      function p() {
        yn().nextFrame(() => {
          h.value = !1
        })
      }

      function g(v) {
        switch (u.value = !0, v.key) {
          case we.Enter:
            if (u.value = !1, r.comboboxState.value !== 0 || h.value) return;
            if (v.preventDefault(), v.stopPropagation(), r.activeOptionIndex.value === null) {
              r.closeCombobox();
              return
            }
            r.selectActiveOption(), r.mode.value === 0 && r.closeCombobox();
            break;
          case we.ArrowDown:
            return u.value = !1, v.preventDefault(), v.stopPropagation(), Ne(r.comboboxState.value, {
              0: () => r.goToOption(xe.Next),
              1: () => r.openCombobox()
            });
          case we.ArrowUp:
            return u.value = !1, v.preventDefault(), v.stopPropagation(), Ne(r.comboboxState.value, {
              0: () => r.goToOption(xe.Previous),
              1: () => {
                r.openCombobox(), ut(() => {
                  r.value.value || r.goToOption(xe.Last)
                })
              }
            });
          case we.Home:
            if (v.shiftKey) break;
            return u.value = !1, v.preventDefault(), v.stopPropagation(), r.goToOption(xe.First);
          case we.PageUp:
            return u.value = !1, v.preventDefault(), v.stopPropagation(), r.goToOption(xe.First);
          case we.End:
            if (v.shiftKey) break;
            return u.value = !1, v.preventDefault(), v.stopPropagation(), r.goToOption(xe.Last);
          case we.PageDown:
            return u.value = !1, v.preventDefault(), v.stopPropagation(), r.goToOption(xe.Last);
          case we.Escape:
            if (u.value = !1, r.comboboxState.value !== 0) return;
            v.preventDefault(), r.optionsRef.value && !r.optionsPropsRef.value.static && v.stopPropagation(), r.nullable.value && r.mode.value === 0 && r.value.value === null && d(), r.closeCombobox();
            break;
          case we.Tab:
            if (u.value = !1, r.comboboxState.value !== 0) return;
            r.mode.value === 0 && r.activationTrigger.value !== 1 && r.selectActiveOption(), r.closeCombobox();
            break
        }
      }

      function k(v) {
        e("change", v), r.nullable.value && r.mode.value === 0 && v.target.value === "" && d(), r.openCombobox()
      }

      function w(v) {
        var E, C, T;
        let _ = (E = v.relatedTarget) != null ? E : ka.find(z => z !== v.currentTarget);
        if (u.value = !1, !((C = X(r.optionsRef)) != null && C.contains(_)) && !((T = X(r.buttonRef)) != null && T.contains(_)) && r.comboboxState.value === 0) return v.preventDefault(), r.mode.value === 0 && (r.nullable.value && r.value.value === null ? d() : r.activationTrigger.value !== 1 && r.selectActiveOption()), r.closeCombobox()
      }

      function y(v) {
        var E, C, T;
        let _ = (E = v.relatedTarget) != null ? E : ka.find(z => z !== v.currentTarget);
        (C = X(r.buttonRef)) != null && C.contains(_) || (T = X(r.optionsRef)) != null && T.contains(_) || r.disabled.value || r.immediate.value && r.comboboxState.value !== 0 && (r.openCombobox(), yn().nextFrame(() => {
          r.setActivationTrigger(1)
        }))
      }
      let j = N(() => {
        var v, E, C, T;
        return (T = (C = (E = t.defaultValue) != null ? E : r.defaultValue.value !== void 0 ? (v = t.displayValue) == null ? void 0 : v.call(t, r.defaultValue.value) : null) != null ? C : r.defaultValue.value) != null ? T : ""
      });
      return () => {
        var v, E, C, T, _, z, S;
        let $ = {
            open: r.comboboxState.value === 0
          },
          {
            displayValue: O,
            onChange: L,
            ...Q
          } = t,
          te = {
            "aria-controls": (v = r.optionsRef.value) == null ? void 0 : v.id,
            "aria-expanded": r.comboboxState.value === 0,
            "aria-activedescendant": r.activeOptionIndex.value === null ? void 0 : r.virtual.value ? (E = r.options.value.find(J => !r.virtual.value.disabled(J.dataRef.value) && r.compare(J.dataRef.value, r.virtual.value.options[r.activeOptionIndex.value]))) == null ? void 0 : E.id : (C = r.options.value[r.activeOptionIndex.value]) == null ? void 0 : C.id,
            "aria-labelledby": (z = (T = X(r.labelRef)) == null ? void 0 : T.id) != null ? z : (_ = X(r.buttonRef)) == null ? void 0 : _.id,
            "aria-autocomplete": "list",
            id: s,
            onCompositionstart: f,
            onCompositionend: p,
            onKeydown: g,
            onInput: k,
            onFocus: y,
            onBlur: w,
            role: "combobox",
            type: (S = a.type) != null ? S : "text",
            tabIndex: 0,
            ref: r.inputRef,
            defaultValue: j.value,
            disabled: r.disabled.value === !0 ? !0 : void 0
          };
        return Ye({
          ourProps: te,
          theirProps: Q,
          slot: $,
          attrs: a,
          slots: n,
          features: ua.RenderStrategy | ua.Static,
          name: "ComboboxInput"
        })
      }
    }
  }),
  zp = ge({
    name: "ComboboxOptions",
    props: {
      as: {
        type: [Object, String],
        default: "ul"
      },
      static: {
        type: Boolean,
        default: !1
      },
      unmount: {
        type: Boolean,
        default: !0
      },
      hold: {
        type: [Boolean],
        default: !1
      }
    },
    setup(t, {
      attrs: e,
      slots: a,
      expose: n
    }) {
      let i = En("ComboboxOptions"),
        o = `headlessui-combobox-options-${Ot()}`;
      n({
        el: i.optionsRef,
        $el: i.optionsRef
      }), nt(() => {
        i.optionsPropsRef.value.static = t.static
      }), nt(() => {
        i.optionsPropsRef.value.hold = t.hold
      });
      let s = Bi(),
        r = N(() => s !== null ? (s.value & Je.Open) === Je.Open : i.comboboxState.value === 0);
      return hp({
        container: N(() => X(i.optionsRef)),
        enabled: N(() => i.comboboxState.value === 0),
        accept(l) {
          return l.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : l.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        },
        walk(l) {
          l.setAttribute("role", "none")
        }
      }), () => {
        var l, u, d;
        let c = {
            open: i.comboboxState.value === 0
          },
          h = {
            "aria-labelledby": (d = (l = X(i.labelRef)) == null ? void 0 : l.id) != null ? d : (u = X(i.buttonRef)) == null ? void 0 : u.id,
            id: o,
            ref: i.optionsRef,
            role: "listbox",
            "aria-multiselectable": i.mode.value === 1 ? !0 : void 0
          },
          f = jn(t, ["hold"]);
        return Ye({
          ourProps: h,
          theirProps: f,
          slot: c,
          attrs: e,
          slots: i.virtual.value && i.comboboxState.value === 0 ? {
            ...a,
            default: () => [Oe(_p, {}, a.default)]
          } : a,
          features: ua.RenderStrategy | ua.Static,
          visible: r.value,
          name: "ComboboxOptions"
        })
      }
    }
  }),
  Sp = ge({
    name: "ComboboxOption",
    props: {
      as: {
        type: [Object, String],
        default: "li"
      },
      value: {
        type: [Object, String, Number, Boolean]
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      order: {
        type: [Number],
        default: null
      }
    },
    setup(t, {
      slots: e,
      attrs: a,
      expose: n
    }) {
      let i = En("ComboboxOption"),
        o = `headlessui-combobox-option-${Ot()}`,
        s = M(null);
      n({
        el: s,
        $el: s
      });
      let r = N(() => {
          var w;
          return i.virtual.value ? i.activeOptionIndex.value === i.calculateIndex(t.value) : i.activeOptionIndex.value === null ? !1 : ((w = i.options.value[i.activeOptionIndex.value]) == null ? void 0 : w.id) === o
        }),
        l = N(() => i.isSelected(t.value)),
        u = Re(yc, null),
        d = N(() => ({
          disabled: t.disabled,
          value: t.value,
          domRef: s,
          order: N(() => t.order)
        }));
      qe(() => i.registerOption(o, d)), At(() => i.unregisterOption(o, r.value)), nt(() => {
        let w = X(s);
        w && (u == null || u.value.measureElement(w))
      }), nt(() => {
        i.comboboxState.value === 0 && r.value && (i.virtual.value || i.activationTrigger.value !== 0 && ut(() => {
          var w, y;
          return (y = (w = X(s)) == null ? void 0 : w.scrollIntoView) == null ? void 0 : y.call(w, {
            block: "nearest"
          })
        }))
      });

      function c(w) {
        var y;
        if (t.disabled || (y = i.virtual.value) != null && y.disabled(t.value)) return w.preventDefault();
        i.selectOption(o), dc() || requestAnimationFrame(() => {
          var j;
          return (j = X(i.inputRef)) == null ? void 0 : j.focus({
            preventScroll: !0
          })
        }), i.mode.value === 0 && requestAnimationFrame(() => i.closeCombobox())
      }

      function h() {
        var w;
        if (t.disabled || (w = i.virtual.value) != null && w.disabled(t.value)) return i.goToOption(xe.Nothing);
        let y = i.calculateIndex(t.value);
        i.goToOption(xe.Specific, y)
      }
      let f = hc();

      function p(w) {
        f.update(w)
      }

      function g(w) {
        var y;
        if (!f.wasMoved(w) || t.disabled || (y = i.virtual.value) != null && y.disabled(t.value) || r.value) return;
        let j = i.calculateIndex(t.value);
        i.goToOption(xe.Specific, j, 0)
      }

      function k(w) {
        var y;
        f.wasMoved(w) && (t.disabled || (y = i.virtual.value) != null && y.disabled(t.value) || r.value && (i.optionsPropsRef.value.hold || i.goToOption(xe.Nothing)))
      }
      return () => {
        let {
          disabled: w
        } = t, y = {
          active: r.value,
          selected: l.value,
          disabled: w
        }, j = {
          id: o,
          ref: s,
          role: "option",
          tabIndex: w === !0 ? void 0 : -1,
          "aria-disabled": w === !0 ? !0 : void 0,
          "aria-selected": l.value,
          disabled: void 0,
          onClick: c,
          onFocus: h,
          onPointerenter: p,
          onMouseenter: p,
          onPointermove: g,
          onMousemove: g,
          onPointerleave: k,
          onMouseleave: k
        }, v = jn(t, ["order", "value"]);
        return Ye({
          ourProps: j,
          theirProps: v,
          slot: y,
          attrs: a,
          slots: e,
          name: "ComboboxOption"
        })
      }
    }
  });

function vc(t, e, a, n) {
  Li.isServer || nt(i => {
    t = t ?? window, t.addEventListener(e, a, n), i(() => t.removeEventListener(e, a, n))
  })
}
var ui = (t => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(ui || {});

function Tp() {
  let t = M(0);
  return cc("keydown", e => {
    e.key === "Tab" && (t.value = e.shiftKey ? 1 : 0)
  }), t
}

function wc(t) {
  if (!t) return new Set;
  if (typeof t == "function") return new Set(t());
  let e = new Set;
  for (let a of t.value) {
    let n = X(a);
    n instanceof HTMLElement && e.add(n)
  }
  return e
}
var _c = (t => (t[t.None = 1] = "None", t[t.InitialFocus = 2] = "InitialFocus", t[t.TabLock = 4] = "TabLock", t[t.FocusLock = 8] = "FocusLock", t[t.RestoreFocus = 16] = "RestoreFocus", t[t.All = 30] = "All", t))(_c || {});
let ai = Object.assign(ge({
  name: "FocusTrap",
  props: {
    as: {
      type: [Object, String],
      default: "div"
    },
    initialFocus: {
      type: Object,
      default: null
    },
    features: {
      type: Number,
      default: 30
    },
    containers: {
      type: [Object, Function],
      default: M(new Set)
    }
  },
  inheritAttrs: !1,
  setup(t, {
    attrs: e,
    slots: a,
    expose: n
  }) {
    let i = M(null);
    n({
      el: i,
      $el: i
    });
    let o = N(() => Ha(i)),
      s = M(!1);
    qe(() => s.value = !0), At(() => s.value = !1), Dp({
      ownerDocument: o
    }, N(() => s.value && !!(t.features & 16)));
    let r = Op({
      ownerDocument: o,
      container: i,
      initialFocus: N(() => t.initialFocus)
    }, N(() => s.value && !!(t.features & 2)));
    Fp({
      ownerDocument: o,
      container: i,
      containers: t.containers,
      previousActiveElement: r
    }, N(() => s.value && !!(t.features & 8)));
    let l = Tp();

    function u(f) {
      let p = X(i);
      p && (g => g())(() => {
        Ne(l.value, {
          [ui.Forwards]: () => {
            uo(p, Oa.First, {
              skipElements: [f.relatedTarget]
            })
          },
          [ui.Backwards]: () => {
            uo(p, Oa.Last, {
              skipElements: [f.relatedTarget]
            })
          }
        })
      })
    }
    let d = M(!1);

    function c(f) {
      f.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
        d.value = !1
      }))
    }

    function h(f) {
      if (!s.value) return;
      let p = wc(t.containers);
      X(i) instanceof HTMLElement && p.add(X(i));
      let g = f.relatedTarget;
      g instanceof HTMLElement && g.dataset.headlessuiFocusGuard !== "true" && (xc(p, g) || (d.value ? uo(X(i), Ne(l.value, {
        [ui.Forwards]: () => Oa.Next,
        [ui.Backwards]: () => Oa.Previous
      }) | Oa.WrapAround, {
        relativeTo: f.target
      }) : f.target instanceof HTMLElement && hn(f.target)))
    }
    return () => {
      let f = {},
        p = {
          ref: i,
          onKeydown: c,
          onFocusout: h
        },
        {
          features: g,
          initialFocus: k,
          containers: w,
          ...y
        } = t;
      return Oe(Ge, [!!(g & 4) && Oe(Un, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: u,
        features: bn.Focusable
      }), Ye({
        ourProps: p,
        theirProps: {
          ...e,
          ...y
        },
        slot: f,
        attrs: e,
        slots: a,
        name: "FocusTrap"
      }), !!(g & 4) && Oe(Un, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: u,
        features: bn.Focusable
      })])
    }
  }
}), {
  features: _c
});

function Ap(t) {
  let e = M(ka.slice());
  return He([t], ([a], [n]) => {
    n === !0 && a === !1 ? Kr(() => {
      e.value.splice(0)
    }) : n === !1 && a === !0 && (e.value = ka.slice())
  }, {
    flush: "post"
  }), () => {
    var a;
    return (a = e.value.find(n => n != null && n.isConnected)) != null ? a : null
  }
}

function Dp({
  ownerDocument: t
}, e) {
  let a = Ap(e);
  qe(() => {
    nt(() => {
      var n, i;
      e.value || ((n = t.value) == null ? void 0 : n.activeElement) === ((i = t.value) == null ? void 0 : i.body) && hn(a())
    }, {
      flush: "post"
    })
  }), At(() => {
    e.value && hn(a())
  })
}

function Op({
  ownerDocument: t,
  container: e,
  initialFocus: a
}, n) {
  let i = M(null),
    o = M(!1);
  return qe(() => o.value = !0), At(() => o.value = !1), qe(() => {
    He([e, a, n], (s, r) => {
      if (s.every((u, d) => (r == null ? void 0 : r[d]) === u) || !n.value) return;
      let l = X(e);
      l && Kr(() => {
        var u, d;
        if (!o.value) return;
        let c = X(a),
          h = (u = t.value) == null ? void 0 : u.activeElement;
        if (c) {
          if (c === h) {
            i.value = h;
            return
          }
        } else if (l.contains(h)) {
          i.value = h;
          return
        }
        c ? hn(c) : uo(l, Oa.First | Oa.NoScroll) === rc.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (d = t.value) == null ? void 0 : d.activeElement
      })
    }, {
      immediate: !0,
      flush: "post"
    })
  }), i
}

function Fp({
  ownerDocument: t,
  container: e,
  containers: a,
  previousActiveElement: n
}, i) {
  var o;
  vc((o = t.value) == null ? void 0 : o.defaultView, "focus", s => {
    if (!i.value) return;
    let r = wc(a);
    X(e) instanceof HTMLElement && r.add(X(e));
    let l = n.value;
    if (!l) return;
    let u = s.target;
    u && u instanceof HTMLElement ? xc(r, u) ? (n.value = u, hn(u)) : (s.preventDefault(), s.stopPropagation(), hn(l)) : hn(n.value)
  }, !0)
}

function xc(t, e) {
  for (let a of t)
    if (a.contains(e)) return !0;
  return !1
}

function Pp(t) {
  let e = Ar(t.getSnapshot());
  return At(t.subscribe(() => {
    e.value = t.getSnapshot()
  })), e
}

function Rp(t, e) {
  let a = t(),
    n = new Set;
  return {
    getSnapshot() {
      return a
    },
    subscribe(i) {
      return n.add(i), () => n.delete(i)
    },
    dispatch(i, ...o) {
      let s = e[i].call(a, ...o);
      s && (a = s, n.forEach(r => r()))
    }
  }
}

function Ip() {
  let t;
  return {
    before({
      doc: e
    }) {
      var a;
      let n = e.documentElement;
      t = ((a = e.defaultView) != null ? a : window).innerWidth - n.clientWidth
    },
    after({
      doc: e,
      d: a
    }) {
      let n = e.documentElement,
        i = n.clientWidth - n.offsetWidth,
        o = t - i;
      a.style(n, "paddingRight", `${o}px`)
    }
  }
}

function $p() {
  return uc() ? {
    before({
      doc: t,
      d: e,
      meta: a
    }) {
      function n(i) {
        return a.containers.flatMap(o => o()).some(o => o.contains(i))
      }
      e.microTask(() => {
        var i;
        if (window.getComputedStyle(t.documentElement).scrollBehavior !== "auto") {
          let r = yn();
          r.style(t.documentElement, "scrollBehavior", "auto"), e.add(() => e.microTask(() => r.dispose()))
        }
        let o = (i = window.scrollY) != null ? i : window.pageYOffset,
          s = null;
        e.addEventListener(t, "click", r => {
          if (r.target instanceof HTMLElement) try {
            let l = r.target.closest("a");
            if (!l) return;
            let {
              hash: u
            } = new URL(l.href), d = t.querySelector(u);
            d && !n(d) && (s = d)
          } catch {}
        }, !0), e.addEventListener(t, "touchstart", r => {
          if (r.target instanceof HTMLElement)
            if (n(r.target)) {
              let l = r.target;
              for (; l.parentElement && n(l.parentElement);) l = l.parentElement;
              e.style(l, "overscrollBehavior", "contain")
            } else e.style(r.target, "touchAction", "none")
        }), e.addEventListener(t, "touchmove", r => {
          if (r.target instanceof HTMLElement)
            if (n(r.target)) {
              let l = r.target;
              for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth);) l = l.parentElement;
              l.dataset.headlessuiPortal === "" && r.preventDefault()
            } else r.preventDefault()
        }, {
          passive: !1
        }), e.add(() => {
          var r;
          let l = (r = window.scrollY) != null ? r : window.pageYOffset;
          o !== l && window.scrollTo(0, o), s && s.isConnected && (s.scrollIntoView({
            block: "nearest"
          }), s = null)
        })
      })
    }
  } : {}
}

function Mp() {
  return {
    before({
      doc: t,
      d: e
    }) {
      e.style(t.documentElement, "overflow", "hidden")
    }
  }
}

function Lp(t) {
  let e = {};
  for (let a of t) Object.assign(e, a(e));
  return e
}
let ln = Rp(() => new Map, {
  PUSH(t, e) {
    var a;
    let n = (a = this.get(t)) != null ? a : {
      doc: t,
      count: 0,
      d: yn(),
      meta: new Set
    };
    return n.count++, n.meta.add(e), this.set(t, n), this
  },
  POP(t, e) {
    let a = this.get(t);
    return a && (a.count--, a.meta.delete(e)), this
  },
  SCROLL_PREVENT({
    doc: t,
    d: e,
    meta: a
  }) {
    let n = {
        doc: t,
        d: e,
        meta: Lp(a)
      },
      i = [$p(), Ip(), Mp()];
    i.forEach(({
      before: o
    }) => o == null ? void 0 : o(n)), i.forEach(({
      after: o
    }) => o == null ? void 0 : o(n))
  },
  SCROLL_ALLOW({
    d: t
  }) {
    t.dispose()
  },
  TEARDOWN({
    doc: t
  }) {
    this.delete(t)
  }
});
ln.subscribe(() => {
  let t = ln.getSnapshot(),
    e = new Map;
  for (let [a] of t) e.set(a, a.documentElement.style.overflow);
  for (let a of t.values()) {
    let n = e.get(a.doc) === "hidden",
      i = a.count !== 0;
    (i && !n || !i && n) && ln.dispatch(a.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", a), a.count === 0 && ln.dispatch("TEARDOWN", a)
  }
});

function Bp(t, e, a) {
  let n = Pp(ln),
    i = N(() => {
      let o = t.value ? n.value.get(t.value) : void 0;
      return o ? o.count > 0 : !1
    });
  return He([t, e], ([o, s], [r], l) => {
    if (!o || !s) return;
    ln.dispatch("PUSH", o, a);
    let u = !1;
    l(() => {
      u || (ln.dispatch("POP", r ?? o, a), u = !0)
    })
  }, {
    immediate: !0
  }), i
}
let ms = new Map,
  ni = new Map;

function wu(t, e = M(!0)) {
  nt(a => {
    var n;
    if (!e.value) return;
    let i = X(t);
    if (!i) return;
    a(function () {
      var s;
      if (!i) return;
      let r = (s = ni.get(i)) != null ? s : 1;
      if (r === 1 ? ni.delete(i) : ni.set(i, r - 1), r !== 1) return;
      let l = ms.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, ms.delete(i))
    });
    let o = (n = ni.get(i)) != null ? n : 0;
    ni.set(i, o + 1), o === 0 && (ms.set(i, {
      "aria-hidden": i.getAttribute("aria-hidden"),
      inert: i.inert
    }), i.setAttribute("aria-hidden", "true"), i.inert = !0)
  })
}

function Np({
  defaultContainers: t = [],
  portals: e,
  mainTreeNodeRef: a
} = {}) {
  let n = M(null),
    i = Ha(n);

  function o() {
    var s, r, l;
    let u = [];
    for (let d of t) d !== null && (d instanceof HTMLElement ? u.push(d) : "value" in d && d.value instanceof HTMLElement && u.push(d.value));
    if (e != null && e.value)
      for (let d of e.value) u.push(d);
    for (let d of (s = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? s : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(X(n)) || d.contains((l = (r = X(n)) == null ? void 0 : r.getRootNode()) == null ? void 0 : l.host) || u.some(c => d.contains(c)) || u.push(d));
    return u
  }
  return {
    resolveContainers: o,
    contains(s) {
      return o().some(r => r.contains(s))
    },
    mainTreeNodeRef: n,
    MainTreeNode() {
      return a != null ? null : Oe(Un, {
        features: bn.Hidden,
        ref: n
      })
    }
  }
}
let jc = Symbol("ForcePortalRootContext");

function qp() {
  return Re(jc, !1)
}
let _u = ge({
    name: "ForcePortalRoot",
    props: {
      as: {
        type: [Object, String],
        default: "template"
      },
      force: {
        type: Boolean,
        default: !1
      }
    },
    setup(t, {
      slots: e,
      attrs: a
    }) {
      return ct(jc, t.force), () => {
        let {
          force: n,
          ...i
        } = t;
        return Ye({
          theirProps: i,
          ourProps: {},
          slot: {},
          slots: e,
          attrs: a,
          name: "ForcePortalRoot"
        })
      }
    }
  }),
  Ec = Symbol("StackContext");
var Ks = (t => (t[t.Add = 0] = "Add", t[t.Remove = 1] = "Remove", t))(Ks || {});

function Up() {
  return Re(Ec, () => {})
}

function Vp({
  type: t,
  enabled: e,
  element: a,
  onUpdate: n
}) {
  let i = Up();

  function o(...s) {
    n == null || n(...s), i(...s)
  }
  qe(() => {
    He(e, (s, r) => {
      s ? o(0, t, a) : r === !0 && o(1, t, a)
    }, {
      immediate: !0,
      flush: "sync"
    })
  }), At(() => {
    e.value && o(1, t, a)
  }), ct(Ec, o)
}
let Hp = Symbol("DescriptionContext");

function Wp({
  slot: t = M({}),
  name: e = "Description",
  props: a = {}
} = {}) {
  let n = M([]);

  function i(o) {
    return n.value.push(o), () => {
      let s = n.value.indexOf(o);
      s !== -1 && n.value.splice(s, 1)
    }
  }
  return ct(Hp, {
    register: i,
    slot: t,
    name: e,
    props: a
  }), N(() => n.value.length > 0 ? n.value.join(" ") : void 0)
}

function Gp(t) {
  let e = Ha(t);
  if (!e) {
    if (t === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`)
  }
  let a = e.getElementById("headlessui-portal-root");
  if (a) return a;
  let n = e.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), e.body.appendChild(n)
}
let Kp = ge({
    name: "Portal",
    props: {
      as: {
        type: [Object, String],
        default: "div"
      }
    },
    setup(t, {
      slots: e,
      attrs: a
    }) {
      let n = M(null),
        i = N(() => Ha(n)),
        o = qp(),
        s = Re(Cc, null),
        r = M(o === !0 || s == null ? Gp(n.value) : s.resolveTarget()),
        l = M(!1);
      qe(() => {
        l.value = !0
      }), nt(() => {
        o || s != null && (r.value = s.resolveTarget())
      });
      let u = Re(Ys, null),
        d = !1,
        c = ec();
      return He(n, () => {
        if (d || !u) return;
        let h = X(n);
        h && (At(u.register(h), c), d = !0)
      }), At(() => {
        var h, f;
        let p = (h = i.value) == null ? void 0 : h.getElementById("headlessui-portal-root");
        p && r.value === p && r.value.children.length <= 0 && ((f = r.value.parentElement) == null || f.removeChild(r.value))
      }), () => {
        if (!l.value || r.value === null) return null;
        let h = {
          ref: n,
          "data-headlessui-portal": ""
        };
        return Oe(Yf, {
          to: r.value
        }, Ye({
          ourProps: h,
          theirProps: t,
          slot: {},
          attrs: a,
          slots: e,
          name: "Portal"
        }))
      }
    }
  }),
  Ys = Symbol("PortalParentContext");

function Yp() {
  let t = Re(Ys, null),
    e = M([]);

  function a(o) {
    return e.value.push(o), t && t.register(o), () => n(o)
  }

  function n(o) {
    let s = e.value.indexOf(o);
    s !== -1 && e.value.splice(s, 1), t && t.unregister(o)
  }
  let i = {
    register: a,
    unregister: n,
    portals: e
  };
  return [e, ge({
    name: "PortalWrapper",
    setup(o, {
      slots: s
    }) {
      return ct(Ys, i), () => {
        var r;
        return (r = s.default) == null ? void 0 : r.call(s)
      }
    }
  })]
}
let Cc = Symbol("PortalGroupContext"),
  Zp = ge({
    name: "PortalGroup",
    props: {
      as: {
        type: [Object, String],
        default: "template"
      },
      target: {
        type: Object,
        default: null
      }
    },
    setup(t, {
      attrs: e,
      slots: a
    }) {
      let n = ha({
        resolveTarget() {
          return t.target
        }
      });
      return ct(Cc, n), () => {
        let {
          target: i,
          ...o
        } = t;
        return Ye({
          theirProps: o,
          ourProps: {},
          slot: {},
          attrs: e,
          slots: a,
          name: "PortalGroup"
        })
      }
    }
  });
var Xp = (t => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Xp || {});
let Zs = Symbol("DialogContext");

function Zr(t) {
  let e = Re(Zs, null);
  if (e === null) {
    let a = new Error(`<${t} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, Zr), a
  }
  return e
}
let to = "DC8F892D-2EBD-447C-A4C8-A03058436FF4",
  Wa = ge({
    name: "Dialog",
    inheritAttrs: !1,
    props: {
      as: {
        type: [Object, String],
        default: "div"
      },
      static: {
        type: Boolean,
        default: !1
      },
      unmount: {
        type: Boolean,
        default: !0
      },
      open: {
        type: [Boolean, String],
        default: to
      },
      initialFocus: {
        type: Object,
        default: null
      },
      id: {
        type: String,
        default: null
      },
      role: {
        type: String,
        default: "dialog"
      }
    },
    emits: {
      close: t => !0
    },
    setup(t, {
      emit: e,
      attrs: a,
      slots: n,
      expose: i
    }) {
      var o, s;
      let r = (o = t.id) != null ? o : `headlessui-dialog-${Ot()}`,
        l = M(!1);
      qe(() => {
        l.value = !0
      });
      let u = !1,
        d = N(() => t.role === "dialog" || t.role === "alertdialog" ? t.role : (u || (u = !0, console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")),
        c = M(0),
        h = Bi(),
        f = N(() => t.open === to && h !== null ? (h.value & Je.Open) === Je.Open : t.open),
        p = M(null),
        g = N(() => Ha(p));
      if (i({
          el: p,
          $el: p
        }), !(t.open !== to || h !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
      if (typeof f.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value===to?void 0:t.open}`);
      let k = N(() => l.value && f.value ? 0 : 1),
        w = N(() => k.value === 0),
        y = N(() => c.value > 1),
        j = Re(Zs, null) !== null,
        [v, E] = Yp(),
        {
          resolveContainers: C,
          mainTreeNodeRef: T,
          MainTreeNode: _
        } = Np({
          portals: v,
          defaultContainers: [N(() => {
            var he;
            return (he = ae.panelRef.value) != null ? he : p.value
          })]
        }),
        z = N(() => y.value ? "parent" : "leaf"),
        S = N(() => h !== null ? (h.value & Je.Closing) === Je.Closing : !1),
        $ = N(() => j || S.value ? !1 : w.value),
        O = N(() => {
          var he, de, We;
          return (We = Array.from((de = (he = g.value) == null ? void 0 : he.querySelectorAll("body > *")) != null ? de : []).find(Ce => Ce.id === "headlessui-portal-root" ? !1 : Ce.contains(X(T)) && Ce instanceof HTMLElement)) != null ? We : null
        });
      wu(O, $);
      let L = N(() => y.value ? !0 : w.value),
        Q = N(() => {
          var he, de, We;
          return (We = Array.from((de = (he = g.value) == null ? void 0 : he.querySelectorAll("[data-headlessui-portal]")) != null ? de : []).find(Ce => Ce.contains(X(T)) && Ce instanceof HTMLElement)) != null ? We : null
        });
      wu(Q, L), Vp({
        type: "Dialog",
        enabled: N(() => k.value === 0),
        element: p,
        onUpdate: (he, de) => {
          if (de === "Dialog") return Ne(he, {
            [Ks.Add]: () => c.value += 1,
            [Ks.Remove]: () => c.value -= 1
          })
        }
      });
      let te = Wp({
          name: "DialogDescription",
          slot: N(() => ({
            open: f.value
          }))
        }),
        J = M(null),
        ae = {
          titleId: J,
          panelRef: M(null),
          dialogState: k,
          setTitleId(he) {
            J.value !== he && (J.value = he)
          },
          close() {
            e("close", !1)
          }
        };
      ct(Zs, ae);
      let se = N(() => !(!w.value || y.value));
      Vr(C, (he, de) => {
        ae.close(), ut(() => de == null ? void 0 : de.focus())
      }, se);
      let tt = N(() => !(y.value || k.value !== 0));
      vc((s = g.value) == null ? void 0 : s.defaultView, "keydown", he => {
        tt.value && (he.defaultPrevented || he.key === we.Escape && (he.preventDefault(), he.stopPropagation(), ae.close()))
      });
      let rt = N(() => !(S.value || k.value !== 0 || j));
      return Bp(g, rt, he => {
        var de;
        return {
          containers: [...(de = he.containers) != null ? de : [], C]
        }
      }), nt(he => {
        if (k.value !== 0) return;
        let de = X(p);
        if (!de) return;
        let We = new ResizeObserver(Ce => {
          for (let ht of Ce) {
            let Ze = ht.target.getBoundingClientRect();
            Ze.x === 0 && Ze.y === 0 && Ze.width === 0 && Ze.height === 0 && ae.close()
          }
        });
        We.observe(de), he(() => We.disconnect())
      }), () => {
        let {
          open: he,
          initialFocus: de,
          ...We
        } = t, Ce = {
          ...a,
          ref: p,
          id: r,
          role: d.value,
          "aria-modal": k.value === 0 ? !0 : void 0,
          "aria-labelledby": J.value,
          "aria-describedby": te.value
        }, ht = {
          open: k.value === 0
        };
        return Oe(_u, {
          force: !0
        }, () => [Oe(Kp, () => Oe(Zp, {
          target: p.value
        }, () => Oe(_u, {
          force: !1
        }, () => Oe(ai, {
          initialFocus: de,
          containers: C,
          features: w.value ? Ne(z.value, {
            parent: ai.features.RestoreFocus,
            leaf: ai.features.All & ~ai.features.FocusLock
          }) : ai.features.None
        }, () => Oe(E, {}, () => Ye({
          ourProps: Ce,
          theirProps: {
            ...We,
            ...a
          },
          slot: ht,
          attrs: a,
          slots: n,
          visible: k.value === 0,
          features: ua.RenderStrategy | ua.Static,
          name: "Dialog"
        })))))), Oe(_)])
      }
    }
  }),
  Ga = ge({
    name: "DialogPanel",
    props: {
      as: {
        type: [Object, String],
        default: "div"
      },
      id: {
        type: String,
        default: null
      }
    },
    setup(t, {
      attrs: e,
      slots: a,
      expose: n
    }) {
      var i;
      let o = (i = t.id) != null ? i : `headlessui-dialog-panel-${Ot()}`,
        s = Zr("DialogPanel");
      n({
        el: s.panelRef,
        $el: s.panelRef
      });

      function r(l) {
        l.stopPropagation()
      }
      return () => {
        let {
          ...l
        } = t, u = {
          id: o,
          ref: s.panelRef,
          onClick: r
        };
        return Ye({
          ourProps: u,
          theirProps: l,
          slot: {
            open: s.dialogState.value === 0
          },
          attrs: e,
          slots: a,
          name: "DialogPanel"
        })
      }
    }
  }),
  da = ge({
    name: "DialogTitle",
    props: {
      as: {
        type: [Object, String],
        default: "h2"
      },
      id: {
        type: String,
        default: null
      }
    },
    setup(t, {
      attrs: e,
      slots: a
    }) {
      var n;
      let i = (n = t.id) != null ? n : `headlessui-dialog-title-${Ot()}`,
        o = Zr("DialogTitle");
      return qe(() => {
        o.setTitleId(i), At(() => o.setTitleId(null))
      }), () => {
        let {
          ...s
        } = t;
        return Ye({
          ourProps: {
            id: i
          },
          theirProps: s,
          slot: {
            open: o.dialogState.value === 0
          },
          attrs: e,
          slots: a,
          name: "DialogTitle"
        })
      }
    }
  }),
  xu = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

function ju(t) {
  var e, a;
  let n = (e = t.innerText) != null ? e : "",
    i = t.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return n;
  let o = !1;
  for (let r of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) r.remove(), o = !0;
  let s = o ? (a = i.innerText) != null ? a : "" : n;
  return xu.test(s) && (s = s.replace(xu, "")), s
}

function Jp(t) {
  let e = t.getAttribute("aria-label");
  if (typeof e == "string") return e.trim();
  let a = t.getAttribute("aria-labelledby");
  if (a) {
    let n = a.split(" ").map(i => {
      let o = document.getElementById(i);
      if (o) {
        let s = o.getAttribute("aria-label");
        return typeof s == "string" ? s.trim() : ju(o).trim()
      }
      return null
    }).filter(Boolean);
    if (n.length > 0) return n.join(", ")
  }
  return ju(t).trim()
}

function Qp(t) {
  let e = M(""),
    a = M("");
  return () => {
    let n = X(t);
    if (!n) return "";
    let i = n.innerText;
    if (e.value === i) return a.value;
    let o = Jp(n).trim().toLowerCase();
    return e.value = i, a.value = o, o
  }
}

function ek(t, e) {
  return t === e
}
var tk = (t => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(tk || {}),
  ak = (t => (t[t.Single = 0] = "Single", t[t.Multi = 1] = "Multi", t))(ak || {}),
  nk = (t => (t[t.Pointer = 0] = "Pointer", t[t.Other = 1] = "Other", t))(nk || {});

function ik(t) {
  requestAnimationFrame(() => requestAnimationFrame(t))
}
let zc = Symbol("ListboxContext");

function Ni(t) {
  let e = Re(zc, null);
  if (e === null) {
    let a = new Error(`<${t} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, Ni), a
  }
  return e
}
let ok = ge({
    name: "Listbox",
    emits: {
      "update:modelValue": t => !0
    },
    props: {
      as: {
        type: [Object, String],
        default: "template"
      },
      disabled: {
        type: [Boolean],
        default: !1
      },
      by: {
        type: [String, Function],
        default: () => ek
      },
      horizontal: {
        type: [Boolean],
        default: !1
      },
      modelValue: {
        type: [Object, String, Number, Boolean],
        default: void 0
      },
      defaultValue: {
        type: [Object, String, Number, Boolean],
        default: void 0
      },
      form: {
        type: String,
        optional: !0
      },
      name: {
        type: String,
        optional: !0
      },
      multiple: {
        type: [Boolean],
        default: !1
      }
    },
    inheritAttrs: !1,
    setup(t, {
      slots: e,
      attrs: a,
      emit: n
    }) {
      let i = M(1),
        o = M(null),
        s = M(null),
        r = M(null),
        l = M([]),
        u = M(""),
        d = M(null),
        c = M(1);

      function h(j = v => v) {
        let v = d.value !== null ? l.value[d.value] : null,
          E = Ur(j(l.value.slice()), T => X(T.dataRef.domRef)),
          C = v ? E.indexOf(v) : null;
        return C === -1 && (C = null), {
          options: E,
          activeOptionIndex: C
        }
      }
      let f = N(() => t.multiple ? 1 : 0),
        [p, g] = Nr(N(() => t.modelValue), j => n("update:modelValue", j), N(() => t.defaultValue)),
        k = N(() => p.value === void 0 ? Ne(f.value, {
          1: [],
          0: void 0
        }) : p.value),
        w = {
          listboxState: i,
          value: k,
          mode: f,
          compare(j, v) {
            if (typeof t.by == "string") {
              let E = t.by;
              return (j == null ? void 0 : j[E]) === (v == null ? void 0 : v[E])
            }
            return t.by(j, v)
          },
          orientation: N(() => t.horizontal ? "horizontal" : "vertical"),
          labelRef: o,
          buttonRef: s,
          optionsRef: r,
          disabled: N(() => t.disabled),
          options: l,
          searchQuery: u,
          activeOptionIndex: d,
          activationTrigger: c,
          closeListbox() {
            t.disabled || i.value !== 1 && (i.value = 1, d.value = null)
          },
          openListbox() {
            t.disabled || i.value !== 0 && (i.value = 0)
          },
          goToOption(j, v, E) {
            if (t.disabled || i.value === 1) return;
            let C = h(),
              T = Gs(j === xe.Specific ? {
                focus: xe.Specific,
                id: v
              } : {
                focus: j
              }, {
                resolveItems: () => C.options,
                resolveActiveIndex: () => C.activeOptionIndex,
                resolveId: _ => _.id,
                resolveDisabled: _ => _.dataRef.disabled
              });
            u.value = "", d.value = T, c.value = E ?? 1, l.value = C.options
          },
          search(j) {
            if (t.disabled || i.value === 1) return;
            let v = u.value !== "" ? 0 : 1;
            u.value += j.toLowerCase();
            let E = (d.value !== null ? l.value.slice(d.value + v).concat(l.value.slice(0, d.value + v)) : l.value).find(T => T.dataRef.textValue.startsWith(u.value) && !T.dataRef.disabled),
              C = E ? l.value.indexOf(E) : -1;
            C === -1 || C === d.value || (d.value = C, c.value = 1)
          },
          clearSearch() {
            t.disabled || i.value !== 1 && u.value !== "" && (u.value = "")
          },
          registerOption(j, v) {
            let E = h(C => [...C, {
              id: j,
              dataRef: v
            }]);
            l.value = E.options, d.value = E.activeOptionIndex
          },
          unregisterOption(j) {
            let v = h(E => {
              let C = E.findIndex(T => T.id === j);
              return C !== -1 && E.splice(C, 1), E
            });
            l.value = v.options, d.value = v.activeOptionIndex, c.value = 1
          },
          theirOnChange(j) {
            t.disabled || g(j)
          },
          select(j) {
            t.disabled || g(Ne(f.value, {
              0: () => j,
              1: () => {
                let v = ue(w.value.value).slice(),
                  E = ue(j),
                  C = v.findIndex(T => w.compare(E, ue(T)));
                return C === -1 ? v.push(E) : v.splice(C, 1), v
              }
            }))
          }
        };
      Vr([s, r], (j, v) => {
        var E;
        w.closeListbox(), lc(v, qr.Loose) || (j.preventDefault(), (E = X(s)) == null || E.focus())
      }, N(() => i.value === 0)), ct(zc, w), Gr(N(() => Ne(i.value, {
        0: Je.Open,
        1: Je.Closed
      })));
      let y = N(() => {
        var j;
        return (j = X(s)) == null ? void 0 : j.closest("form")
      });
      return qe(() => {
        He([y], () => {
          if (!y.value || t.defaultValue === void 0) return;

          function j() {
            w.theirOnChange(t.defaultValue)
          }
          return y.value.addEventListener("reset", j), () => {
            var v;
            (v = y.value) == null || v.removeEventListener("reset", j)
          }
        }, {
          immediate: !0
        })
      }), () => {
        let {
          name: j,
          modelValue: v,
          disabled: E,
          form: C,
          ...T
        } = t, _ = {
          open: i.value === 0,
          disabled: E,
          value: k.value
        };
        return Oe(Ge, [...j != null && k.value != null ? Yr({
          [j]: k.value
        }).map(([z, S]) => Oe(Un, Wr({
          features: bn.Hidden,
          key: z,
          as: "input",
          type: "hidden",
          hidden: !0,
          readOnly: !0,
          form: C,
          name: z,
          value: S
        }))) : [], Ye({
          ourProps: {},
          theirProps: {
            ...a,
            ...jn(T, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"])
          },
          slot: _,
          slots: e,
          attrs: a,
          name: "Listbox"
        })])
      }
    }
  }),
  sk = ge({
    name: "ListboxLabel",
    props: {
      as: {
        type: [Object, String],
        default: "label"
      },
      id: {
        type: String,
        default: null
      }
    },
    setup(t, {
      attrs: e,
      slots: a
    }) {
      var n;
      let i = (n = t.id) != null ? n : `headlessui-listbox-label-${Ot()}`,
        o = Ni("ListboxLabel");

      function s() {
        var r;
        (r = X(o.buttonRef)) == null || r.focus({
          preventScroll: !0
        })
      }
      return () => {
        let r = {
            open: o.listboxState.value === 0,
            disabled: o.disabled.value
          },
          {
            ...l
          } = t,
          u = {
            id: i,
            ref: o.labelRef,
            onClick: s
          };
        return Ye({
          ourProps: u,
          theirProps: l,
          slot: r,
          attrs: e,
          slots: a,
          name: "ListboxLabel"
        })
      }
    }
  }),
  rk = ge({
    name: "ListboxButton",
    props: {
      as: {
        type: [Object, String],
        default: "button"
      },
      id: {
        type: String,
        default: null
      }
    },
    setup(t, {
      attrs: e,
      slots: a,
      expose: n
    }) {
      var i;
      let o = (i = t.id) != null ? i : `headlessui-listbox-button-${Ot()}`,
        s = Ni("ListboxButton");
      n({
        el: s.buttonRef,
        $el: s.buttonRef
      });

      function r(c) {
        switch (c.key) {
          case we.Space:
          case we.Enter:
          case we.ArrowDown:
            c.preventDefault(), s.openListbox(), ut(() => {
              var h;
              (h = X(s.optionsRef)) == null || h.focus({
                preventScroll: !0
              }), s.value.value || s.goToOption(xe.First)
            });
            break;
          case we.ArrowUp:
            c.preventDefault(), s.openListbox(), ut(() => {
              var h;
              (h = X(s.optionsRef)) == null || h.focus({
                preventScroll: !0
              }), s.value.value || s.goToOption(xe.Last)
            });
            break
        }
      }

      function l(c) {
        switch (c.key) {
          case we.Space:
            c.preventDefault();
            break
        }
      }

      function u(c) {
        s.disabled.value || (s.listboxState.value === 0 ? (s.closeListbox(), ut(() => {
          var h;
          return (h = X(s.buttonRef)) == null ? void 0 : h.focus({
            preventScroll: !0
          })
        })) : (c.preventDefault(), s.openListbox(), ik(() => {
          var h;
          return (h = X(s.optionsRef)) == null ? void 0 : h.focus({
            preventScroll: !0
          })
        })))
      }
      let d = Hr(N(() => ({
        as: t.as,
        type: e.type
      })), s.buttonRef);
      return () => {
        var c, h;
        let f = {
            open: s.listboxState.value === 0,
            disabled: s.disabled.value,
            value: s.value.value
          },
          {
            ...p
          } = t,
          g = {
            ref: s.buttonRef,
            id: o,
            type: d.value,
            "aria-haspopup": "listbox",
            "aria-controls": (c = X(s.optionsRef)) == null ? void 0 : c.id,
            "aria-expanded": s.listboxState.value === 0,
            "aria-labelledby": s.labelRef.value ? [(h = X(s.labelRef)) == null ? void 0 : h.id, o].join(" ") : void 0,
            disabled: s.disabled.value === !0 ? !0 : void 0,
            onKeydown: r,
            onKeyup: l,
            onClick: u
          };
        return Ye({
          ourProps: g,
          theirProps: p,
          slot: f,
          attrs: e,
          slots: a,
          name: "ListboxButton"
        })
      }
    }
  }),
  lk = ge({
    name: "ListboxOptions",
    props: {
      as: {
        type: [Object, String],
        default: "ul"
      },
      static: {
        type: Boolean,
        default: !1
      },
      unmount: {
        type: Boolean,
        default: !0
      },
      id: {
        type: String,
        default: null
      }
    },
    setup(t, {
      attrs: e,
      slots: a,
      expose: n
    }) {
      var i;
      let o = (i = t.id) != null ? i : `headlessui-listbox-options-${Ot()}`,
        s = Ni("ListboxOptions"),
        r = M(null);
      n({
        el: s.optionsRef,
        $el: s.optionsRef
      });

      function l(c) {
        switch (r.value && clearTimeout(r.value), c.key) {
          case we.Space:
            if (s.searchQuery.value !== "") return c.preventDefault(), c.stopPropagation(), s.search(c.key);
          case we.Enter:
            if (c.preventDefault(), c.stopPropagation(), s.activeOptionIndex.value !== null) {
              let h = s.options.value[s.activeOptionIndex.value];
              s.select(h.dataRef.value)
            }
            s.mode.value === 0 && (s.closeListbox(), ut(() => {
              var h;
              return (h = X(s.buttonRef)) == null ? void 0 : h.focus({
                preventScroll: !0
              })
            }));
            break;
          case Ne(s.orientation.value, {
            vertical: we.ArrowDown,
            horizontal: we.ArrowRight
          }):
            return c.preventDefault(), c.stopPropagation(), s.goToOption(xe.Next);
          case Ne(s.orientation.value, {
            vertical: we.ArrowUp,
            horizontal: we.ArrowLeft
          }):
            return c.preventDefault(), c.stopPropagation(), s.goToOption(xe.Previous);
          case we.Home:
          case we.PageUp:
            return c.preventDefault(), c.stopPropagation(), s.goToOption(xe.First);
          case we.End:
          case we.PageDown:
            return c.preventDefault(), c.stopPropagation(), s.goToOption(xe.Last);
          case we.Escape:
            c.preventDefault(), c.stopPropagation(), s.closeListbox(), ut(() => {
              var h;
              return (h = X(s.buttonRef)) == null ? void 0 : h.focus({
                preventScroll: !0
              })
            });
            break;
          case we.Tab:
            c.preventDefault(), c.stopPropagation();
            break;
          default:
            c.key.length === 1 && (s.search(c.key), r.value = setTimeout(() => s.clearSearch(), 350));
            break
        }
      }
      let u = Bi(),
        d = N(() => u !== null ? (u.value & Je.Open) === Je.Open : s.listboxState.value === 0);
      return () => {
        var c, h;
        let f = {
            open: s.listboxState.value === 0
          },
          {
            ...p
          } = t,
          g = {
            "aria-activedescendant": s.activeOptionIndex.value === null || (c = s.options.value[s.activeOptionIndex.value]) == null ? void 0 : c.id,
            "aria-multiselectable": s.mode.value === 1 ? !0 : void 0,
            "aria-labelledby": (h = X(s.buttonRef)) == null ? void 0 : h.id,
            "aria-orientation": s.orientation.value,
            id: o,
            onKeydown: l,
            role: "listbox",
            tabIndex: 0,
            ref: s.optionsRef
          };
        return Ye({
          ourProps: g,
          theirProps: p,
          slot: f,
          attrs: e,
          slots: a,
          features: ua.RenderStrategy | ua.Static,
          visible: d.value,
          name: "ListboxOptions"
        })
      }
    }
  }),
  uk = ge({
    name: "ListboxOption",
    props: {
      as: {
        type: [Object, String],
        default: "li"
      },
      value: {
        type: [Object, String, Number, Boolean]
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      id: {
        type: String,
        default: null
      }
    },
    setup(t, {
      slots: e,
      attrs: a,
      expose: n
    }) {
      var i;
      let o = (i = t.id) != null ? i : `headlessui-listbox-option-${Ot()}`,
        s = Ni("ListboxOption"),
        r = M(null);
      n({
        el: r,
        $el: r
      });
      let l = N(() => s.activeOptionIndex.value !== null ? s.options.value[s.activeOptionIndex.value].id === o : !1),
        u = N(() => Ne(s.mode.value, {
          0: () => s.compare(ue(s.value.value), ue(t.value)),
          1: () => ue(s.value.value).some(j => s.compare(ue(j), ue(t.value)))
        })),
        d = N(() => Ne(s.mode.value, {
          1: () => {
            var j;
            let v = ue(s.value.value);
            return ((j = s.options.value.find(E => v.some(C => s.compare(ue(C), ue(E.dataRef.value))))) == null ? void 0 : j.id) === o
          },
          0: () => u.value
        })),
        c = Qp(r),
        h = N(() => ({
          disabled: t.disabled,
          value: t.value,
          get textValue() {
            return c()
          },
          domRef: r
        }));
      qe(() => s.registerOption(o, h)), At(() => s.unregisterOption(o)), qe(() => {
        He([s.listboxState, u], () => {
          s.listboxState.value === 0 && u.value && Ne(s.mode.value, {
            1: () => {
              d.value && s.goToOption(xe.Specific, o)
            },
            0: () => {
              s.goToOption(xe.Specific, o)
            }
          })
        }, {
          immediate: !0
        })
      }), nt(() => {
        s.listboxState.value === 0 && l.value && s.activationTrigger.value !== 0 && ut(() => {
          var j, v;
          return (v = (j = X(r)) == null ? void 0 : j.scrollIntoView) == null ? void 0 : v.call(j, {
            block: "nearest"
          })
        })
      });

      function f(j) {
        if (t.disabled) return j.preventDefault();
        s.select(t.value), s.mode.value === 0 && (s.closeListbox(), ut(() => {
          var v;
          return (v = X(s.buttonRef)) == null ? void 0 : v.focus({
            preventScroll: !0
          })
        }))
      }

      function p() {
        if (t.disabled) return s.goToOption(xe.Nothing);
        s.goToOption(xe.Specific, o)
      }
      let g = hc();

      function k(j) {
        g.update(j)
      }

      function w(j) {
        g.wasMoved(j) && (t.disabled || l.value || s.goToOption(xe.Specific, o, 0))
      }

      function y(j) {
        g.wasMoved(j) && (t.disabled || l.value && s.goToOption(xe.Nothing))
      }
      return () => {
        let {
          disabled: j
        } = t, v = {
          active: l.value,
          selected: u.value,
          disabled: j
        }, {
          value: E,
          disabled: C,
          ...T
        } = t, _ = {
          id: o,
          ref: r,
          role: "option",
          tabIndex: j === !0 ? void 0 : -1,
          "aria-disabled": j === !0 ? !0 : void 0,
          "aria-selected": u.value,
          disabled: void 0,
          onClick: f,
          onFocus: p,
          onPointerenter: k,
          onMouseenter: k,
          onPointermove: w,
          onMousemove: w,
          onPointerleave: y,
          onMouseleave: y
        };
        return Ye({
          ourProps: _,
          theirProps: T,
          slot: v,
          attrs: a,
          slots: e,
          name: "ListboxOption"
        })
      }
    }
  }),
  dk = Symbol("GroupContext"),
  ck = ge({
    name: "Switch",
    emits: {
      "update:modelValue": t => !0
    },
    props: {
      as: {
        type: [Object, String],
        default: "button"
      },
      modelValue: {
        type: Boolean,
        default: void 0
      },
      defaultChecked: {
        type: Boolean,
        optional: !0
      },
      form: {
        type: String,
        optional: !0
      },
      name: {
        type: String,
        optional: !0
      },
      value: {
        type: String,
        optional: !0
      },
      id: {
        type: String,
        default: null
      }
    },
    inheritAttrs: !1,
    setup(t, {
      emit: e,
      attrs: a,
      slots: n,
      expose: i
    }) {
      var o;
      let s = (o = t.id) != null ? o : `headlessui-switch-${Ot()}`,
        r = Re(dk, null),
        [l, u] = Nr(N(() => t.modelValue), y => e("update:modelValue", y), N(() => t.defaultChecked));

      function d() {
        u(!l.value)
      }
      let c = M(null),
        h = r === null ? c : r.switchRef,
        f = Hr(N(() => ({
          as: t.as,
          type: a.type
        })), h);
      i({
        el: h,
        $el: h
      });

      function p(y) {
        y.preventDefault(), d()
      }

      function g(y) {
        y.key === we.Space ? (y.preventDefault(), d()) : y.key === we.Enter && kp(y.currentTarget)
      }

      function k(y) {
        y.preventDefault()
      }
      let w = N(() => {
        var y, j;
        return (j = (y = X(h)) == null ? void 0 : y.closest) == null ? void 0 : j.call(y, "form")
      });
      return qe(() => {
        He([w], () => {
          if (!w.value || t.defaultChecked === void 0) return;

          function y() {
            u(t.defaultChecked)
          }
          return w.value.addEventListener("reset", y), () => {
            var j;
            (j = w.value) == null || j.removeEventListener("reset", y)
          }
        }, {
          immediate: !0
        })
      }), () => {
        let {
          name: y,
          value: j,
          form: v,
          ...E
        } = t, C = {
          checked: l.value
        }, T = {
          id: s,
          ref: h,
          role: "switch",
          type: f.value,
          tabIndex: 0,
          "aria-checked": l.value,
          "aria-labelledby": r == null ? void 0 : r.labelledby.value,
          "aria-describedby": r == null ? void 0 : r.describedby.value,
          onClick: p,
          onKeyup: g,
          onKeypress: k
        };
        return Oe(Ge, [y != null && l.value != null ? Oe(Un, Wr({
          features: bn.Hidden,
          as: "input",
          type: "checkbox",
          hidden: !0,
          readOnly: !0,
          checked: l.value,
          form: v,
          name: y,
          value: j
        })) : null, Ye({
          ourProps: T,
          theirProps: {
            ...a,
            ...jn(E, ["modelValue", "defaultChecked"])
          },
          slot: C,
          attrs: a,
          slots: n,
          name: "Switch"
        })])
      }
    }
  });

function hk(t) {
  let e = {
    called: !1
  };
  return (...a) => {
    if (!e.called) return e.called = !0, t(...a)
  }
}

function fs(t, ...e) {
  t && e.length > 0 && t.classList.add(...e)
}

function ao(t, ...e) {
  t && e.length > 0 && t.classList.remove(...e)
}
var Xs = (t => (t.Finished = "finished", t.Cancelled = "cancelled", t))(Xs || {});

function mk(t, e) {
  let a = yn();
  if (!t) return a.dispose;
  let {
    transitionDuration: n,
    transitionDelay: i
  } = getComputedStyle(t), [o, s] = [n, i].map(r => {
    let [l = 0] = r.split(",").filter(Boolean).map(u => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, d) => d - u);
    return l
  });
  return o !== 0 ? a.setTimeout(() => e("finished"), o + s) : e("finished"), a.add(() => e("cancelled")), a.dispose
}

function Eu(t, e, a, n, i, o) {
  let s = yn(),
    r = o !== void 0 ? hk(o) : () => {};
  return ao(t, ...i), fs(t, ...e, ...a), s.nextFrame(() => {
    ao(t, ...a), fs(t, ...n), s.add(mk(t, l => (ao(t, ...n, ...e), fs(t, ...i), r(l))))
  }), s.add(() => ao(t, ...e, ...a, ...n, ...i)), s.add(() => r("cancelled")), s.dispose
}

function Qa(t = "") {
  return t.split(/\s+/).filter(e => e.length > 1)
}
let Xr = Symbol("TransitionContext");
var fk = (t => (t.Visible = "visible", t.Hidden = "hidden", t))(fk || {});

function gk() {
  return Re(Xr, null) !== null
}

function pk() {
  let t = Re(Xr, null);
  if (t === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return t
}

function kk() {
  let t = Re(Jr, null);
  if (t === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return t
}
let Jr = Symbol("NestingContext");

function Yo(t) {
  return "children" in t ? Yo(t.children) : t.value.filter(({
    state: e
  }) => e === "visible").length > 0
}

function Sc(t) {
  let e = M([]),
    a = M(!1);
  qe(() => a.value = !0), At(() => a.value = !1);

  function n(o, s = Fa.Hidden) {
    let r = e.value.findIndex(({
      id: l
    }) => l === o);
    r !== -1 && (Ne(s, {
      [Fa.Unmount]() {
        e.value.splice(r, 1)
      },
      [Fa.Hidden]() {
        e.value[r].state = "hidden"
      }
    }), !Yo(e) && a.value && (t == null || t()))
  }

  function i(o) {
    let s = e.value.find(({
      id: r
    }) => r === o);
    return s ? s.state !== "visible" && (s.state = "visible") : e.value.push({
      id: o,
      state: "visible"
    }), () => n(o, Fa.Unmount)
  }
  return {
    children: e,
    register: i,
    unregister: n
  }
}
let Tc = ua.RenderStrategy,
  kt = ge({
    props: {
      as: {
        type: [Object, String],
        default: "div"
      },
      show: {
        type: [Boolean],
        default: null
      },
      unmount: {
        type: [Boolean],
        default: !0
      },
      appear: {
        type: [Boolean],
        default: !1
      },
      enter: {
        type: [String],
        default: ""
      },
      enterFrom: {
        type: [String],
        default: ""
      },
      enterTo: {
        type: [String],
        default: ""
      },
      entered: {
        type: [String],
        default: ""
      },
      leave: {
        type: [String],
        default: ""
      },
      leaveFrom: {
        type: [String],
        default: ""
      },
      leaveTo: {
        type: [String],
        default: ""
      }
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0
    },
    setup(t, {
      emit: e,
      attrs: a,
      slots: n,
      expose: i
    }) {
      let o = M(0);

      function s() {
        o.value |= Je.Opening, e("beforeEnter")
      }

      function r() {
        o.value &= ~Je.Opening, e("afterEnter")
      }

      function l() {
        o.value |= Je.Closing, e("beforeLeave")
      }

      function u() {
        o.value &= ~Je.Closing, e("afterLeave")
      }
      if (!gk() && fp()) return () => Oe(_a, {
        ...t,
        onBeforeEnter: s,
        onAfterEnter: r,
        onBeforeLeave: l,
        onAfterLeave: u
      }, n);
      let d = M(null),
        c = N(() => t.unmount ? Fa.Unmount : Fa.Hidden);
      i({
        el: d,
        $el: d
      });
      let {
        show: h,
        appear: f
      } = pk(), {
        register: p,
        unregister: g
      } = kk(), k = M(h.value ? "visible" : "hidden"), w = {
        value: !0
      }, y = Ot(), j = {
        value: !1
      }, v = Sc(() => {
        !j.value && k.value !== "hidden" && (k.value = "hidden", g(y), u())
      });
      qe(() => {
        let L = p(y);
        At(L)
      }), nt(() => {
        if (c.value === Fa.Hidden && y) {
          if (h.value && k.value !== "visible") {
            k.value = "visible";
            return
          }
          Ne(k.value, {
            hidden: () => g(y),
            visible: () => p(y)
          })
        }
      });
      let E = Qa(t.enter),
        C = Qa(t.enterFrom),
        T = Qa(t.enterTo),
        _ = Qa(t.entered),
        z = Qa(t.leave),
        S = Qa(t.leaveFrom),
        $ = Qa(t.leaveTo);
      qe(() => {
        nt(() => {
          if (k.value === "visible") {
            let L = X(d);
            if (L instanceof Comment && L.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
          }
        })
      });

      function O(L) {
        let Q = w.value && !f.value,
          te = X(d);
        !te || !(te instanceof HTMLElement) || Q || (j.value = !0, h.value && s(), h.value || l(), L(h.value ? Eu(te, E, C, T, _, J => {
          j.value = !1, J === Xs.Finished && r()
        }) : Eu(te, z, S, $, _, J => {
          j.value = !1, J === Xs.Finished && (Yo(v) || (k.value = "hidden", g(y), u()))
        })))
      }
      return qe(() => {
        He([h], (L, Q, te) => {
          O(te), w.value = !1
        }, {
          immediate: !0
        })
      }), ct(Jr, v), Gr(N(() => Ne(k.value, {
        visible: Je.Open,
        hidden: Je.Closed
      }) | o.value)), () => {
        let {
          appear: L,
          show: Q,
          enter: te,
          enterFrom: J,
          enterTo: ae,
          entered: se,
          leave: tt,
          leaveFrom: rt,
          leaveTo: he,
          ...de
        } = t, We = {
          ref: d
        }, Ce = {
          ...de,
          ...f.value && h.value && Li.isServer ? {
            class: fe([a.class, de.class, ...E, ...C])
          } : {}
        };
        return Ye({
          theirProps: Ce,
          ourProps: We,
          slot: {},
          slots: n,
          attrs: a,
          features: Tc,
          visible: k.value === "visible",
          name: "TransitionChild"
        })
      }
    }
  }),
  bk = kt,
  _a = ge({
    inheritAttrs: !1,
    props: {
      as: {
        type: [Object, String],
        default: "div"
      },
      show: {
        type: [Boolean],
        default: null
      },
      unmount: {
        type: [Boolean],
        default: !0
      },
      appear: {
        type: [Boolean],
        default: !1
      },
      enter: {
        type: [String],
        default: ""
      },
      enterFrom: {
        type: [String],
        default: ""
      },
      enterTo: {
        type: [String],
        default: ""
      },
      entered: {
        type: [String],
        default: ""
      },
      leave: {
        type: [String],
        default: ""
      },
      leaveFrom: {
        type: [String],
        default: ""
      },
      leaveTo: {
        type: [String],
        default: ""
      }
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0
    },
    setup(t, {
      emit: e,
      attrs: a,
      slots: n
    }) {
      let i = Bi(),
        o = N(() => t.show === null && i !== null ? (i.value & Je.Open) === Je.Open : t.show);
      nt(() => {
        if (![!0, !1].includes(o.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')
      });
      let s = M(o.value ? "visible" : "hidden"),
        r = Sc(() => {
          s.value = "hidden"
        }),
        l = M(!0),
        u = {
          show: o,
          appear: N(() => t.appear || !l.value)
        };
      return qe(() => {
        nt(() => {
          l.value = !1, o.value ? s.value = "visible" : Yo(r) || (s.value = "hidden")
        })
      }), ct(Jr, r), ct(Xr, u), () => {
        let d = jn(t, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]),
          c = {
            unmount: t.unmount
          };
        return Ye({
          ourProps: {
            ...c,
            as: "template"
          },
          theirProps: {},
          slot: {},
          slots: {
            ...n,
            default: () => [Oe(bk, {
              onBeforeEnter: () => e("beforeEnter"),
              onAfterEnter: () => e("afterEnter"),
              onBeforeLeave: () => e("beforeLeave"),
              onAfterLeave: () => e("afterLeave"),
              ...a,
              ...c,
              ...d
            }, n.default)]
          },
          attrs: {},
          features: Tc,
          visible: s.value === "visible",
          name: "Transition"
        })
      }
    }
  });

function yk(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  })])
}

function vk(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  })])
}

function wk(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
  })])
}

function Vn(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  })])
}

function _k(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  })])
}

function xk(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
  })])
}

function Ac(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18 18 6M6 6l12 12"
  })])
}

function jk(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z",
    "clip-rule": "evenodd"
  })])
}

function Cu(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    d: "M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z"
  })])
}

function Dc(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
    "clip-rule": "evenodd"
  })])
}

function Oc(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    "clip-rule": "evenodd"
  })])
}

function Ek(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    "clip-rule": "evenodd"
  })])
}

function Fc(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    "clip-rule": "evenodd"
  })])
}

function Pc(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    "clip-rule": "evenodd"
  })])
}

function Ck(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M14 6a2.5 2.5 0 0 0-4-3 2.5 2.5 0 0 0-4 3H3.25C2.56 6 2 6.56 2 7.25v.5C2 8.44 2.56 9 3.25 9h6V6h1.5v3h6C17.44 9 18 8.44 18 7.75v-.5C18 6.56 17.44 6 16.75 6H14Zm-1-1.5a1 1 0 0 1-1 1h-1v-1a1 1 0 1 1 2 0Zm-6 0a1 1 0 0 0 1 1h1v-1a1 1 0 0 0-2 0Z",
    "clip-rule": "evenodd"
  }), m("path", {
    d: "M9.25 10.5H3v4.75A2.75 2.75 0 0 0 5.75 18h3.5v-7.5ZM10.75 18v-7.5H17v4.75A2.75 2.75 0 0 1 14.25 18h-3.5Z"
  })])
}

function Rc(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z",
    "clip-rule": "evenodd"
  })])
}

function zk(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    "clip-rule": "evenodd"
  })])
}

function gs(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  })])
}
const Gt = ha({
  refreshToken: "",
  refreshTokenExpiresIn: 0,
  deviceId: "",
  token: "",
  tokenExpiresIn: 0,
  licenseExpires: 0,
  isLicenseValid() {
    return this.isAuthenticated() ? this.licenseExpires > Date.now() : !1
  },
  isLogin() {
    const {
      refreshToken: t,
      refreshTokenExpiresIn: e
    } = this.getAuthenticationSettings();
    return !t || !e ? !1 : e > Date.now()
  },
  isAuthenticated() {
    const {
      token: t,
      tokenExpiresIn: e
    } = this.getAuthenticationSettings();
    return !t || !e ? !1 : e > Date.now()
  },
  isRefreshTokenExpired() {
    return !this.refreshToken || !this.refreshTokenExpiresIn ? !0 : this.refreshTokenExpiresIn < Date.now()
  },
  isLicenseRequired() {
    return !this.isRefreshTokenExpired()
  },
  getAuthenticationSettings() {
    const t = {
        refreshToken: "",
        refreshTokenExpiresIn: 0,
        deviceId: "",
        token: "",
        tokenExpiresIn: 0
      },
      e = localStorage.getItem("authenticationSettings");
    if (!e || e == "null") return this.refreshToken = "", this.refreshTokenExpiresIn = 0, this.deviceId = "", this.token = "", this.tokenExpiresIn = 0, t;
    const a = JSON.parse(e);
    return this.token = a.token, this.tokenExpiresIn = a.tokenExpiresIn, this.refreshToken = a.refreshToken, this.refreshTokenExpiresIn = a.refreshTokenExpiresIn, this.deviceId = a.deviceId, a
  },
  deleteAuthenticationSettings() {
    localStorage.removeItem("authenticationSettings"), this.refreshToken = "", this.refreshTokenExpiresIn = 0, this.deviceId = "", this.getAuthenticationSettings()
  },
  setAuthenticationSettings(t) {
    this.refreshToken = t.refreshToken, this.refreshTokenExpiresIn = t.refreshTokenExpiresIn, this.deviceId = t.deviceId, this.token = t.token, this.tokenExpiresIn = t.tokenExpiresIn, console.log("setAuthenticationSettings", t), localStorage.setItem("authenticationSettings", JSON.stringify(t))
  }
});
class Le {
  constructor() {
    ma(this, "rewriteUrl");
    ma(this, "baseApiUrl");
    ma(this, "token");
    ma(this, "refreshToken");
    ma(this, "tokenExpiresIn");
    ma(this, "refreshTokenExpiresIn");
    ma(this, "isLicenseExpired");
    ma(this, "autoRenewalId");
    this.rewriteUrl = "https://wysqbo6emxigmchu5xfidepl4q0lxueb.lambda-url.us-east-1.on.aws", this.baseApiUrl = "https://api.professionallyapp.com";
    const e = this.getAuthenticationSettings();
    this.refreshToken = e.refreshToken, this.refreshTokenExpiresIn = e.refreshTokenExpiresIn, this.token = e.token, this.tokenExpiresIn = e.tokenExpiresIn, this.isLicenseExpired = e.isLicenseExpired
  }
  loadCredentials() {
    const e = this.getAuthenticationSettings();
    this.refreshToken = e.refreshToken, this.refreshTokenExpiresIn = e.refreshTokenExpiresIn, this.token = e.token, this.tokenExpiresIn = e.tokenExpiresIn
  }
  getAuthenticationSettings() {
    return Gt.getAuthenticationSettings()
  }
  deleteAuthenticationSettings() {
    this.clearAutoRenewToken(), Gt.deleteAuthenticationSettings()
  }
  setAuthenticationSettings(e) {
    Gt.setAuthenticationSettings(e)
  }
  isAuthenticated() {
    return this.loadCredentials(), !this.token || !this.tokenExpiresIn ? !1 : this.tokenExpiresIn < Date.now() ? (this.clearAutoRenewToken(), !1) : !0
  }
  async renewToken() {
    const e = new Date().getTime();
    if (this.loadCredentials(), !this.refreshToken || this.refreshTokenExpiresIn < e) throw new Error("Refresh token is invalid or expired");
    const a = "/auth",
      n = this.getAuthenticationSettings().deviceId,
      i = {
        refreshToken: this.refreshToken,
        deviceId: n
      },
      o = await fetch(this.baseApiUrl + a, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(i)
      });
    if (!o.ok) {
      const r = await Le.getJsonErrorBody(o.body);
      throw o.status === 401 && (r.errorCode === "LICENSE_EXPIRED" ? (this.isLicenseExpired = !0, this.clearAutoRenewToken()) : this.deleteAuthenticationSettings()), new Error(`${r.message}`)
    }
    const s = await o.json();
    this.saveAuthentication(s, n) ? (this.clearAutoRenewToken(), this.autoRenewToken()) : this.clearAutoRenewToken()
  }
  saveAuthentication(e, a) {
    return this.token = e.token.token, this.tokenExpiresIn = e.token.expiresIn, this.refreshToken = e.refreshToken.token, this.refreshTokenExpiresIn = e.refreshToken.expiresIn, this.refreshToken ? (this.setAuthenticationSettings({
      refreshToken: this.refreshToken,
      refreshTokenExpiresIn: this.refreshTokenExpiresIn,
      deviceId: a,
      token: e.token.token,
      tokenExpiresIn: e.token.expiresIn,
      isLicenseExpired: this.isLicenseExpired
    }), !0) : (this.deleteAuthenticationSettings(), !1)
  }
  autoRenewToken() {
    this.autoRenewalId && clearInterval(this.autoRenewalId), this.autoRenewalId = setInterval(() => {
      new Date().getTime() > this.tokenExpiresIn - 1e3 * 30 && this.renewToken()
    }, 1e3)
  }
  clearAutoRenewToken() {
    clearInterval(this.autoRenewalId)
  }
  async performActionOnText(e, a, n, i) {
    const o = "https://wysqbo6emxigmchu5xfidepl4q0lxueb.lambda-url.us-east-1.on.aws",
      s = {
        model: 3,
        taskType: e,
        outputLanguage: i,
        tone: a,
        content: n
      },
      r = await fetch(o, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify(s)
      });
    if (!r.ok) {
      const l = await Le.getJsonErrorBody(r.body);
      throw r.status === 401 && this.deleteAuthenticationSettings(), new Error(`${l.message}`)
    }
    if (!r.body) throw new Error("No response body.");
    return r.body.getReader()
  }
  async signUp({
    email: e,
    firstName: a,
    lastName: n,
    isSubscribedToMarketingEmails: i
  }) {
    const o = "/sign-up",
      s = navigator.language,
      r = Intl.DateTimeFormat().resolvedOptions().timeZone,
      l = {
        email: e,
        firstName: a,
        lastName: n,
        isSubscribedToMarketingEmails: i,
        language: s,
        timezone: r
      },
      u = await fetch(this.baseApiUrl + o, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(l)
      });
    if (!u.ok) {
      const d = await Le.getJsonErrorBody(u.body);
      throw new Error(d.message)
    }
    return await u.json()
  }
  async signIn(e, a, n, i) {
    const o = "/sign-in",
      s = navigator.language,
      r = Intl.DateTimeFormat().resolvedOptions().timeZone,
      l = {
        email: e,
        password: a,
        deviceId: n,
        deviceInfo: i,
        language: s,
        timezone: r
      },
      u = await fetch(this.baseApiUrl + o, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(l)
      });
    if (!u.ok) {
      const d = await Le.getJsonErrorBody(u.body);
      throw new Error(d.message)
    }
    return await u.json()
  }
  async socialSignIn(e, a, n, i, o, s, r, l, u) {
    const d = "/exchange-code-for-token",
      c = navigator.language,
      h = Intl.DateTimeFormat().resolvedOptions().timeZone,
      f = {
        authCode: a,
        provider: e,
        clientId: n,
        deviceId: i,
        deviceInfo: o,
        isSubscribedToMarketingEmails: s,
        language: c,
        timezone: h,
        redirectUri: u
      };
    e == "apple" && (f.firstName = r, f.lastName = l);
    const p = await fetch(this.baseApiUrl + d, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(f)
    });
    if (!p.ok) {
      const g = await Le.getJsonErrorBody(p.body);
      throw new Error(g.message)
    }
    return await p.json()
  }
  async resetPassword(e) {
    const a = "/reset-password",
      n = await fetch(this.baseApiUrl + a, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: e
        })
      });
    if (!n.ok) {
      const i = await Le.getJsonErrorBody(n.body);
      throw new Error(i.message)
    }
    return n.json()
  }
  getReferralPoints() {
    const e = "/referral-reward";
    return this.authenticatedGetRequest(e)
  }
  getLicenseDetails() {
    const e = "/license-details";
    return this.authenticatedGetRequest(e)
  }
  getUserInfo() {
    const e = "/user";
    return this.authenticatedGetRequest(e)
  }
  async authenticatedGetRequest(e) {
    const a = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        }
      },
      n = await fetch(this.baseApiUrl + e, a);
    if (!n.ok) {
      const i = await Le.getJsonErrorBody(n.body);
      throw n.status === 401 && this.deleteAuthenticationSettings(), new Error(`${i.message}`)
    }
    return n.json()
  }
  async updateUserProfile(e, a) {
    const n = "/update-user-profile",
      i = {
        firstName: e,
        lastName: a
      },
      o = await fetch(this.baseApiUrl + n, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify(i)
      });
    if (!o.ok) {
      const s = await Le.getJsonErrorBody(o.body);
      throw new Error(`${s.message}`)
    }
  }
  async sendFeedback(e, a) {
    const n = "/send-feedback",
      i = {
        message: e,
        rating: a
      },
      o = await fetch(this.baseApiUrl + n, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify(i)
      });
    if (!o.ok) {
      const s = await Le.getJsonErrorBody(o.body);
      throw o.status === 401 && this.deleteAuthenticationSettings(), new Error(`${s.message}`)
    }
  }
  async redeemReferralReward() {
    const e = "/redeem-referral-reward",
      a = await fetch(this.baseApiUrl + e, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        }
      });
    if (!a.ok) {
      const n = await Le.getJsonErrorBody(a.body);
      throw a.status === 401 && this.deleteAuthenticationSettings(), new Error(`${n.message}`)
    }
    return a.json()
  }
  async sendReferralInvite(e) {
    const a = "/send-referral-invite",
      n = await fetch(this.baseApiUrl + a, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify(e)
      });
    if (!n.ok) {
      const i = await Le.getJsonErrorBody(n.body);
      throw n.status === 401 && this.deleteAuthenticationSettings(), new Error(`${i.message}`)
    }
    return n.json()
  }
  static async getJsonErrorBody(e) {
    if (!e) return {
      errorCode: "unknown",
      message: "No body was received from API"
    };
    const a = await e.getReader().read(),
      n = new TextDecoder().decode(a.value),
      i = JSON.parse(n ?? '{"errorCode": "unknown", "message": "No body was received from API"}');
    return {
      errorCode: i.errorCode,
      message: i.message
    }
  }
}
const An = {
    tone: "Formal",
    rewriteAtStart: !0,
    outputLanguage: "auto",
    toneList: ["Formal", "Friendly", "Business", "Confident", "Persuasive", "Casual", "Technical"],
    languages: [{
      id: "auto",
      name: "None",
      francCode: "auto"
    }, {
      id: "en-US",
      name: "English U.S.",
      francCode: "eng"
    }, {
      id: "en-UK",
      name: "English U.K.",
      francCode: "eng"
    }, {
      id: "es-ES",
      name: "Spanish Spain",
      francCode: "spa"
    }, {
      id: "es-MX",
      name: "Spanish Mexico",
      francCode: "spa"
    }, {
      id: "fr-FR",
      name: "French France",
      francCode: "fra"
    }, {
      id: "fr-CA",
      name: "French Canada",
      francCode: "fra"
    }, {
      id: "de-De",
      name: "German",
      francCode: "deu"
    }, {
      id: "ar-SA",
      name: "Arabic",
      francCode: "arb"
    }, {
      id: "zh-CN",
      name: "Chinese",
      francCode: "cmn"
    }, {
      id: "ja-JP",
      name: "Japanese",
      francCode: "jpn"
    }, {
      id: "pt-PT",
      name: "Portuguese Portugal",
      francCode: "por"
    }, {
      id: "pt-BR",
      name: "Portuguese Brazil",
      francCode: "por"
    }, {
      id: "it-IT",
      name: "Italian",
      francCode: "ita"
    }, {
      id: "ru-RU",
      name: "Russian",
      francCode: "rus"
    }, {
      id: "ko-KR",
      name: "Korean",
      francCode: "kor"
    }, {
      id: "fa-IR",
      name: "Persian",
      francCode: "pes"
    }]
  },
  ii = {
    ...An,
    ...JSON.parse(localStorage.getItem("appSettings"))
  },
  Ae = ha({
    tone: ii.tone,
    rewriteAtStart: ii.rewriteAtStart ?? !0,
    outputLanguage: ii.outputLanguage ?? An.outputLanguage,
    toneList: ii.toneList ?? An.toneList,
    languages: ii.languages,
    setTone(t) {
      this.tone = t, this.saveSettings(this.toJson())
    },
    setRewriteAtStart(t) {
      this.rewriteAtStart = t, this.saveSettings(this.toJson())
    },
    setOutputLanguage(t) {
      this.outputLanguage = t, this.saveSettings(this.toJson())
    },
    setToneList(t) {
      this.toneList = t, this.saveSettings(this.toJson())
    },
    saveSettings(t) {
      t && (this.tone = t.tone, this.rewriteAtStart = t.rewriteAtStart), localStorage.setItem("appSettings", JSON.stringify(this.toJson()))
    },
    loadSettings() {
      const t = localStorage.getItem("appSettings"),
        e = An;
      if (t && t.length > 0) {
        const a = JSON.parse(t);
        Object.assign(e, a)
      }
      return console.log(e), e
    },
    toJson() {
      return {
        tone: this.tone,
        rewriteAtStart: this.rewriteAtStart ?? !0,
        outputLanguage: this.outputLanguage ?? An.outputLanguage,
        toneList: this.toneList ?? An.toneList
      }
    }
  }),
  Ee = ha({
    isSidebarOpen: !1,
    referralPoints: 0,
    isLogin: !1,
    isAppReady: !1,
    LicenseDetails: {
      isExpired: !1,
      isTrial: !1,
      endDate: 0,
      emailUsedThisMonth: 0,
      monthlyEmailAllowance: 0
    },
    userEmail: ""
  });

function co(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    "clip-rule": "evenodd"
  })])
}

function ho(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    "clip-rule": "evenodd"
  })])
}

function Sk(t, e) {
  return H(), ee("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [m("path", {
    "fill-rule": "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
    "clip-rule": "evenodd"
  })])
}
const Tk = {
    class: "flex"
  },
  Ak = ["onClick"],
  Dk = ge({
    __name: "star-rating",
    props: {
      defaultRating: {
        type: Number,
        required: !0
      }
    },
    emits: ["input"],
    setup(t) {
      return (e, a) => (H(), ee("div", Tk, [(H(), ee(Ge, null, kn(5, n => m("button", {
        key: n,
        type: "button",
        class: fe({
          "mr-1": n < 5
        }),
        onClick: i => e.$emit("input", n)
      }, [D(F(Sk), {
        class: fe(["block h-8 w-8", {
          "text-amber-500": n <= t.defaultRating,
          "text-gray-400": n > t.defaultRating
        }])
      }, null, 8, ["class"])], 10, Ak)), 64))]))
    }
  }),
  Ok = m("div", {
    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  }, null, -1),
  Fk = {
    class: "w-full fixed inset-0 z-10 overflow-y-auto"
  },
  Pk = {
    class: "flex items-end justify-center p-4 text-center sm:items-center sm:p-0"
  },
  Rk = {
    class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
  },
  Ik = {
    class: "mt-3 text-center sm:mt-5"
  },
  $k = {
    key: 0
  },
  Mk = {
    class: "mt-2"
  },
  Lk = {
    class: "flex flex-col mt-2"
  },
  Bk = m("h2", {
    class: "text-left text-xs"
  }, " How satisfied are you with NEURespond? ", -1),
  Nk = {
    class: "relative mt-2 rounded-md shadow-sm text-center justify-center"
  },
  qk = {
    key: 1
  },
  Uk = m("hr", {
    class: "divide-gray-400 my-2"
  }, null, -1),
  Vk = {
    key: 2,
    class: "rounded-md bg-blue-50 p-4"
  },
  Hk = {
    class: "flex"
  },
  Wk = {
    class: "flex-shrink-0"
  },
  Gk = {
    class: "ml-3 flex-1 md:flex md:justify-between"
  },
  Kk = {
    class: "text-sm text-blue-700"
  },
  Yk = {
    key: 3,
    class: "rounded-md bg-red-50 p-4"
  },
  Zk = {
    class: "flex"
  },
  Xk = {
    class: "flex-shrink-0"
  },
  Jk = {
    class: "ml-3 flex-1 md:flex md:justify-between"
  },
  Qk = {
    class: "text-sm text-red-700"
  },
  eb = {
    class: "mt-5 sm:mt-6"
  },
  tb = ["disabled"],
  ab = ge({
    __name: "feedback-overlays",
    props: {
      isOpen: Boolean
    },
    emits: ["close"],
    setup(t, {
      emit: e
    }) {
      const a = M(""),
        n = M(""),
        i = M(!1),
        o = M(!1),
        s = e,
        r = async () => {
          o.value = !0;
          const c = new Le;
          try {
            await c.sendFeedback(l.value, u.value), i.value = !0, d.value = 2, n.value = ""
          } catch (h) {
            n.value = h.message
          } finally {
            o.value = !1
          }
        }, l = M(""), u = M(3), d = M(1);
      return (c, h) => (H(), wt(F(_a), {
        as: "template",
        show: t.isOpen
      }, {
        default: K(() => [D(F(Wa), {
          as: "div",
          class: "relative z-10",
          onClose: h[3] || (h[3] = f => s("close"))
        }, {
          default: K(() => [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: K(() => [Ok]),
            _: 1
          }), m("div", Fk, [m("div", Pk, [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            default: K(() => [D(F(Ga), {
              class: "w-full relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            }, {
              default: K(() => [m("div", null, [m("div", Rk, [D(F(wk), {
                class: "h-6 w-6 text-green-600",
                "aria-hidden": "true"
              })]), m("div", Ik, [d.value === 1 ? (H(), ee("div", $k, [D(F(da), {
                as: "h3",
                class: "text-base font-semibold leading-6 text-gray-900"
              }, {
                default: K(() => [_e(" Feedback/Bug Report ")]),
                _: 1
              }), m("div", null, [m("div", Mk, [le(m("textarea", {
                id: "comment",
                "onUpdate:modelValue": h[0] || (h[0] = f => l.value = f),
                rows: "4",
                name: "comment",
                placeholder: "Enter your feedback or bug report here",
                class: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              }, null, 512), [
                [Lt, l.value]
              ])])]), m("div", Lk, [Bk, m("div", Nk, [D(Dk, {
                class: "w-5",
                "default-rating": u.value,
                onInput: h[1] || (h[1] = f => {
                  u.value = f
                })
              }, null, 8, ["default-rating"])])])])) : Fe("", !0), d.value === 2 ? (H(), ee("div", qk, [D(F(da), {
                as: "h3",
                class: "text-base font-semibold leading-6 text-gray-900"
              }, {
                default: K(() => [_e(" Thank you for your feedback! ")]),
                _: 1
              })])) : Fe("", !0), Uk, a.value.length ? (H(), ee("div", Vk, [m("div", Hk, [m("div", Wk, [D(F(Vn), {
                class: "h-5 w-5 text-blue-400",
                "aria-hidden": "true"
              })]), m("div", Gk, [m("p", Kk, be(a.value), 1)])])])) : Fe("", !0), n.value.length ? (H(), ee("div", Yk, [m("div", Zk, [m("div", Xk, [D(F(Vn), {
                class: "h-5 w-5 text-red-600",
                "aria-hidden": "true"
              })]), m("div", Jk, [m("p", Qk, be(n.value), 1)])])])) : Fe("", !0)])]), m("div", eb, [d.value === 1 ? le((H(), ee("button", {
                key: 0,
                type: "button",
                class: fe(["inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600", {
                  "cursor-not-allowed opacity-50": o.value
                }]),
                disabled: o.value,
                onClick: r
              }, " Submit ", 10, tb)), [
                [ke, !i.value]
              ]) : Fe("", !0), d.value === 2 ? (H(), ee("button", {
                key: 1,
                type: "button",
                class: "inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
                onClick: h[2] || (h[2] = f => s("close"))
              }, " Close ")) : Fe("", !0)])]),
              _: 1
            })]),
            _: 1
          })])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["show"]))
    }
  });

function ga(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function Ic(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Bt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
  Hn = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
  Qr, gt, Be, Vt = 1e8,
  De = 1 / Vt,
  Js = Math.PI * 2,
  nb = Js / 4,
  ib = 0,
  $c = Math.sqrt,
  ob = Math.cos,
  sb = Math.sin,
  st = function (e) {
    return typeof e == "string"
  },
  Ke = function (e) {
    return typeof e == "function"
  },
  ya = function (e) {
    return typeof e == "number"
  },
  el = function (e) {
    return typeof e > "u"
  },
  ca = function (e) {
    return typeof e == "object"
  },
  jt = function (e) {
    return e !== !1
  },
  tl = function () {
    return typeof window < "u"
  },
  no = function (e) {
    return Ke(e) || st(e)
  },
  Mc = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {},
  pt = Array.isArray,
  Qs = /(?:-?\.?\d|\.)+/gi,
  Lc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  On = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  ps = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Bc = /[+-]=-?[.\d]+/,
  Nc = /[^,'"\[\]\s]+/gi,
  rb = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Ue, ta, er, al, Nt = {},
  jo = {},
  qc, Uc = function (e) {
    return (jo = vn(e, Nt)) && Dt
  },
  nl = function (e, a) {
    return console.warn("Invalid property", e, "set to", a, "Missing plugin? gsap.registerPlugin()")
  },
  Si = function (e, a) {
    return !a && console.warn(e)
  },
  Vc = function (e, a) {
    return e && (Nt[e] = a) && jo && (jo[e] = a) || Nt
  },
  Ti = function () {
    return 0
  },
  lb = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
  },
  mo = {
    suppressEvents: !0,
    kill: !1
  },
  ub = {
    suppressEvents: !0
  },
  il = {},
  La = [],
  tr = {},
  Hc, Rt = {},
  ks = {},
  zu = 30,
  fo = [],
  ol = "",
  sl = function (e) {
    var a = e[0],
      n, i;
    if (ca(a) || Ke(a) || (e = [e]), !(n = (a._gsap || {}).harness)) {
      for (i = fo.length; i-- && !fo[i].targetTest(a););
      n = fo[i]
    }
    for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new gh(e[i], n))) || e.splice(i, 1);
    return e
  },
  mn = function (e) {
    return e._gsap || sl(Ht(e))[0]._gsap
  },
  Wc = function (e, a, n) {
    return (n = e[a]) && Ke(n) ? e[a]() : el(n) && e.getAttribute && e.getAttribute(a) || n
  },
  Et = function (e, a) {
    return (e = e.split(",")).forEach(a) || e
  },
  Xe = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  ot = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0
  },
  Ln = function (e, a) {
    var n = a.charAt(0),
      i = parseFloat(a.substr(2));
    return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
  },
  db = function (e, a) {
    for (var n = a.length, i = 0; e.indexOf(a[i]) < 0 && ++i < n;);
    return i < n
  },
  Eo = function () {
    var e = La.length,
      a = La.slice(0),
      n, i;
    for (tr = {}, La.length = 0, n = 0; n < e; n++) i = a[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
  },
  Gc = function (e, a, n, i) {
    La.length && !gt && Eo(), e.render(a, n, i || gt && a < 0 && (e._initted || e._startAt)), La.length && !gt && Eo()
  },
  Kc = function (e) {
    var a = parseFloat(e);
    return (a || a === 0) && (e + "").match(Nc).length < 2 ? a : st(e) ? e.trim() : e
  },
  Yc = function (e) {
    return e
  },
  Kt = function (e, a) {
    for (var n in a) n in e || (e[n] = a[n]);
    return e
  },
  cb = function (e) {
    return function (a, n) {
      for (var i in n) i in a || i === "duration" && e || i === "ease" || (a[i] = n[i])
    }
  },
  vn = function (e, a) {
    for (var n in a) e[n] = a[n];
    return e
  },
  Su = function t(e, a) {
    for (var n in a) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = ca(a[n]) ? t(e[n] || (e[n] = {}), a[n]) : a[n]);
    return e
  },
  Co = function (e, a) {
    var n = {},
      i;
    for (i in e) i in a || (n[i] = e[i]);
    return n
  },
  bi = function (e) {
    var a = e.parent || Ue,
      n = e.keyframes ? cb(pt(e.keyframes)) : Kt;
    if (jt(e.inherit))
      for (; a;) n(e, a.vars.defaults), a = a.parent || a._dp;
    return e
  },
  hb = function (e, a) {
    for (var n = e.length, i = n === a.length; i && n-- && e[n] === a[n];);
    return n < 0
  },
  Zc = function (e, a, n, i, o) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var s = e[i],
      r;
    if (o)
      for (r = a[o]; s && s[o] > r;) s = s._prev;
    return s ? (a._next = s._next, s._next = a) : (a._next = e[n], e[n] = a), a._next ? a._next._prev = a : e[i] = a, a._prev = s, a.parent = a._dp = e, a
  },
  Zo = function (e, a, n, i) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var o = a._prev,
      s = a._next;
    o ? o._next = s : e[n] === a && (e[n] = s), s ? s._prev = o : e[i] === a && (e[i] = o), a._next = a._prev = a.parent = null
  },
  Ua = function (e, a) {
    e.parent && (!a || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
  },
  fn = function (e, a) {
    if (e && (!a || a._end > e._dur || a._start < 0))
      for (var n = e; n;) n._dirty = 1, n = n.parent;
    return e
  },
  mb = function (e) {
    for (var a = e.parent; a && a.parent;) a._dirty = 1, a.totalDuration(), a = a.parent;
    return e
  },
  ar = function (e, a, n, i) {
    return e._startAt && (gt ? e._startAt.revert(mo) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(a, !0, i))
  },
  fb = function t(e) {
    return !e || e._ts && t(e.parent)
  },
  Tu = function (e) {
    return e._repeat ? Wn(e._tTime, e = e.duration() + e._rDelay) * e : 0
  },
  Wn = function (e, a) {
    var n = Math.floor(e /= a);
    return e && n === e ? n - 1 : n
  },
  zo = function (e, a) {
    return (e - a._start) * a._ts + (a._ts >= 0 ? 0 : a._dirty ? a.totalDuration() : a._tDur)
  },
  Xo = function (e) {
    return e._end = ot(e._start + (e._tDur / Math.abs(e._ts || e._rts || De) || 0))
  },
  Jo = function (e, a) {
    var n = e._dp;
    return n && n.smoothChildTiming && e._ts && (e._start = ot(n._time - (e._ts > 0 ? a / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - a) / -e._ts)), Xo(e), n._dirty || fn(n, e)), e
  },
  Xc = function (e, a) {
    var n;
    if ((a._time || !a._dur && a._initted || a._start < e._time && (a._dur || !a.add)) && (n = zo(e.rawTime(), a), (!a._dur || qi(0, a.totalDuration(), n) - a._tTime > De) && a.render(n, !0)), fn(e, a)._dp && e._initted && e._time >= e._dur && e._ts) {
      if (e._dur < e.duration())
        for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
      e._zTime = -De
    }
  },
  ia = function (e, a, n, i) {
    return a.parent && Ua(a), a._start = ot((ya(n) ? n : n || e !== Ue ? Ut(e, n, a) : e._time) + a._delay), a._end = ot(a._start + (a.totalDuration() / Math.abs(a.timeScale()) || 0)), Zc(e, a, "_first", "_last", e._sort ? "_start" : 0), nr(a) || (e._recent = a), i || Xc(e, a), e._ts < 0 && Jo(e, e._tTime), e
  },
  Jc = function (e, a) {
    return (Nt.ScrollTrigger || nl("scrollTrigger", a)) && Nt.ScrollTrigger.create(a, e)
  },
  Qc = function (e, a, n, i, o) {
    if (ll(e, a, o), !e._initted) return 1;
    if (!n && e._pt && !gt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Hc !== It.frame) return La.push(e), e._lazy = [o, i], 1
  },
  gb = function t(e) {
    var a = e.parent;
    return a && a._ts && a._initted && !a._lock && (a.rawTime() < 0 || t(a))
  },
  nr = function (e) {
    var a = e.data;
    return a === "isFromStart" || a === "isStart"
  },
  pb = function (e, a, n, i) {
    var o = e.ratio,
      s = a < 0 || !a && (!e._start && gb(e) && !(!e._initted && nr(e)) || (e._ts < 0 || e._dp._ts < 0) && !nr(e)) ? 0 : 1,
      r = e._rDelay,
      l = 0,
      u, d, c;
    if (r && e._repeat && (l = qi(0, e._tDur, a), d = Wn(l, r), e._yoyo && d & 1 && (s = 1 - s), d !== Wn(e._tTime, r) && (o = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== o || gt || i || e._zTime === De || !a && e._zTime) {
      if (!e._initted && Qc(e, a, i, n, l)) return;
      for (c = e._zTime, e._zTime = a || (n ? De : 0), n || (n = a && !c), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = l, u = e._pt; u;) u.r(s, u.d), u = u._next;
      a < 0 && ar(e, a, n, !0), e._onUpdate && !n && Mt(e, "onUpdate"), l && e._repeat && !n && e.parent && Mt(e, "onRepeat"), (a >= e._tDur || a < 0) && e.ratio === s && (s && Ua(e, 1), !n && !gt && (Mt(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
    } else e._zTime || (e._zTime = a)
  },
  kb = function (e, a, n) {
    var i;
    if (n > a)
      for (i = e._first; i && i._start <= n;) {
        if (i.data === "isPause" && i._start > a) return i;
        i = i._next
      } else
        for (i = e._last; i && i._start >= n;) {
          if (i.data === "isPause" && i._start < a) return i;
          i = i._prev
        }
  },
  Gn = function (e, a, n, i) {
    var o = e._repeat,
      s = ot(a) || 0,
      r = e._tTime / e._tDur;
    return r && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = o ? o < 0 ? 1e10 : ot(s * (o + 1) + e._rDelay * o) : s, r > 0 && !i && Jo(e, e._tTime = e._tDur * r), e.parent && Xo(e), n || fn(e.parent, e), e
  },
  Au = function (e) {
    return e instanceof yt ? fn(e) : Gn(e, e._dur)
  },
  bb = {
    _start: 0,
    endTime: Ti,
    totalDuration: Ti
  },
  Ut = function t(e, a, n) {
    var i = e.labels,
      o = e._recent || bb,
      s = e.duration() >= Vt ? o.endTime(!1) : e._dur,
      r, l, u;
    return st(a) && (isNaN(a) || a in i) ? (l = a.charAt(0), u = a.substr(-1) === "%", r = a.indexOf("="), l === "<" || l === ">" ? (r >= 0 && (a = a.replace(/=/, "")), (l === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(a.substr(1)) || 0) * (u ? (r < 0 ? o : n).totalDuration() / 100 : 1)) : r < 0 ? (a in i || (i[a] = s), i[a]) : (l = parseFloat(a.charAt(r - 1) + a.substr(r + 1)), u && n && (l = l / 100 * (pt(n) ? n[0] : n).totalDuration()), r > 1 ? t(e, a.substr(0, r - 1), n) + l : s + l)) : a == null ? s : +a
  },
  yi = function (e, a, n) {
    var i = ya(a[1]),
      o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      s = a[o],
      r, l;
    if (i && (s.duration = a[1]), s.parent = n, e) {
      for (r = s, l = n; l && !("immediateRender" in r);) r = l.vars.defaults || {}, l = jt(l.vars.inherit) && l.parent;
      s.immediateRender = jt(r.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = a[o - 1]
    }
    return new et(a[0], s, a[o + 1])
  },
  Ka = function (e, a) {
    return e || e === 0 ? a(e) : a
  },
  qi = function (e, a, n) {
    return n < e ? e : n > a ? a : n
  },
  ft = function (e, a) {
    return !st(e) || !(a = rb.exec(e)) ? "" : a[1]
  },
  yb = function (e, a, n) {
    return Ka(n, function (i) {
      return qi(e, a, i)
    })
  },
  ir = [].slice,
  eh = function (e, a) {
    return e && ca(e) && "length" in e && (!a && !e.length || e.length - 1 in e && ca(e[0])) && !e.nodeType && e !== ta
  },
  vb = function (e, a, n) {
    return n === void 0 && (n = []), e.forEach(function (i) {
      var o;
      return st(i) && !a || eh(i, 1) ? (o = n).push.apply(o, Ht(i)) : n.push(i)
    }) || n
  },
  Ht = function (e, a, n) {
    return Be && !a && Be.selector ? Be.selector(e) : st(e) && !n && (er || !Kn()) ? ir.call((a || al).querySelectorAll(e), 0) : pt(e) ? vb(e, n) : eh(e) ? ir.call(e, 0) : e ? [e] : []
  },
  or = function (e) {
    return e = Ht(e)[0] || Si("Invalid scope") || {},
      function (a) {
        var n = e.current || e.nativeElement || e;
        return Ht(a, n.querySelectorAll ? n : n === e ? Si("Invalid scope") || al.createElement("div") : e)
      }
  },
  th = function (e) {
    return e.sort(function () {
      return .5 - Math.random()
    })
  },
  ah = function (e) {
    if (Ke(e)) return e;
    var a = ca(e) ? e : {
        each: e
      },
      n = gn(a.ease),
      i = a.from || 0,
      o = parseFloat(a.base) || 0,
      s = {},
      r = i > 0 && i < 1,
      l = isNaN(i) || r,
      u = a.axis,
      d = i,
      c = i;
    return st(i) ? d = c = {
        center: .5,
        edges: .5,
        end: 1
      } [i] || 0 : !r && l && (d = i[0], c = i[1]),
      function (h, f, p) {
        var g = (p || a).length,
          k = s[g],
          w, y, j, v, E, C, T, _, z;
        if (!k) {
          if (z = a.grid === "auto" ? 0 : (a.grid || [1, Vt])[1], !z) {
            for (T = -Vt; T < (T = p[z++].getBoundingClientRect().left) && z < g;);
            z < g && z--
          }
          for (k = s[g] = [], w = l ? Math.min(z, g) * d - .5 : i % z, y = z === Vt ? 0 : l ? g * c / z - .5 : i / z | 0, T = 0, _ = Vt, C = 0; C < g; C++) j = C % z - w, v = y - (C / z | 0), k[C] = E = u ? Math.abs(u === "y" ? v : j) : $c(j * j + v * v), E > T && (T = E), E < _ && (_ = E);
          i === "random" && th(k), k.max = T - _, k.min = _, k.v = g = (parseFloat(a.amount) || parseFloat(a.each) * (z > g ? g - 1 : u ? u === "y" ? g / z : z : Math.max(z, g / z)) || 0) * (i === "edges" ? -1 : 1), k.b = g < 0 ? o - g : o, k.u = ft(a.amount || a.each) || 0, n = n && g < 0 ? hh(n) : n
        }
        return g = (k[h] - k.min) / k.max || 0, ot(k.b + (n ? n(g) : g) * k.v) + k.u
      }
  },
  sr = function (e) {
    var a = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (n) {
      var i = ot(Math.round(parseFloat(n) / e) * e * a);
      return (i - i % 1) / a + (ya(n) ? 0 : ft(n))
    }
  },
  nh = function (e, a) {
    var n = pt(e),
      i, o;
    return !n && ca(e) && (i = n = e.radius || Vt, e.values ? (e = Ht(e.values), (o = !ya(e[0])) && (i *= i)) : e = sr(e.increment)), Ka(a, n ? Ke(e) ? function (s) {
      return o = e(s), Math.abs(o - s) <= i ? o : s
    } : function (s) {
      for (var r = parseFloat(o ? s.x : s), l = parseFloat(o ? s.y : 0), u = Vt, d = 0, c = e.length, h, f; c--;) o ? (h = e[c].x - r, f = e[c].y - l, h = h * h + f * f) : h = Math.abs(e[c] - r), h < u && (u = h, d = c);
      return d = !i || u <= i ? e[d] : s, o || d === s || ya(s) ? d : d + ft(s)
    } : sr(e))
  },
  ih = function (e, a, n, i) {
    return Ka(pt(e) ? !a : n === !0 ? !!(n = 0) : !i, function () {
      return pt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (a - e + n * .99)) / n) * n * i) / i
    })
  },
  wb = function () {
    for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
    return function (i) {
      return a.reduce(function (o, s) {
        return s(o)
      }, i)
    }
  },
  _b = function (e, a) {
    return function (n) {
      return e(parseFloat(n)) + (a || ft(n))
    }
  },
  xb = function (e, a, n) {
    return sh(e, a, 0, 1, n)
  },
  oh = function (e, a, n) {
    return Ka(n, function (i) {
      return e[~~a(i)]
    })
  },
  jb = function t(e, a, n) {
    var i = a - e;
    return pt(e) ? oh(e, t(0, e.length), a) : Ka(n, function (o) {
      return (i + (o - e) % i) % i + e
    })
  },
  Eb = function t(e, a, n) {
    var i = a - e,
      o = i * 2;
    return pt(e) ? oh(e, t(0, e.length - 1), a) : Ka(n, function (s) {
      return s = (o + (s - e) % o) % o || 0, e + (s > i ? o - s : s)
    })
  },
  Ai = function (e) {
    for (var a = 0, n = "", i, o, s, r; ~(i = e.indexOf("random(", a));) s = e.indexOf(")", i), r = e.charAt(i + 7) === "[", o = e.substr(i + 7, s - i - 7).match(r ? Nc : Qs), n += e.substr(a, i - a) + ih(r ? o : +o[0], r ? 0 : +o[1], +o[2] || 1e-5), a = s + 1;
    return n + e.substr(a, e.length - a)
  },
  sh = function (e, a, n, i, o) {
    var s = a - e,
      r = i - n;
    return Ka(o, function (l) {
      return n + ((l - e) / s * r || 0)
    })
  },
  Cb = function t(e, a, n, i) {
    var o = isNaN(e + a) ? 0 : function (f) {
      return (1 - f) * e + f * a
    };
    if (!o) {
      var s = st(e),
        r = {},
        l, u, d, c, h;
      if (n === !0 && (i = 1) && (n = null), s) e = {
        p: e
      }, a = {
        p: a
      };
      else if (pt(e) && !pt(a)) {
        for (d = [], c = e.length, h = c - 2, u = 1; u < c; u++) d.push(t(e[u - 1], e[u]));
        c--, o = function (p) {
          p *= c;
          var g = Math.min(h, ~~p);
          return d[g](p - g)
        }, n = a
      } else i || (e = vn(pt(e) ? [] : {}, e));
      if (!d) {
        for (l in a) rl.call(r, e, l, "get", a[l]);
        o = function (p) {
          return cl(p, r) || (s ? e.p : e)
        }
      }
    }
    return Ka(n, o)
  },
  Du = function (e, a, n) {
    var i = e.labels,
      o = Vt,
      s, r, l;
    for (s in i) r = i[s] - a, r < 0 == !!n && r && o > (r = Math.abs(r)) && (l = s, o = r);
    return l
  },
  Mt = function (e, a, n) {
    var i = e.vars,
      o = i[a],
      s = Be,
      r = e._ctx,
      l, u, d;
    if (o) return l = i[a + "Params"], u = i.callbackScope || e, n && La.length && Eo(), r && (Be = r), d = l ? o.apply(u, l) : o.call(u), Be = s, d
  },
  di = function (e) {
    return Ua(e), e.scrollTrigger && e.scrollTrigger.kill(!!gt), e.progress() < 1 && Mt(e, "onInterrupt"), e
  },
  Fn, rh = [],
  lh = function (e) {
    if (e)
      if (e = !e.name && e.default || e, tl() || e.headless) {
        var a = e.name,
          n = Ke(e),
          i = a && !n && e.init ? function () {
            this._props = []
          } : e,
          o = {
            init: Ti,
            render: cl,
            add: rl,
            kill: qb,
            modifier: Nb,
            rawVars: 0
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: dl,
            aliases: {},
            register: 0
          };
        if (Kn(), e !== i) {
          if (Rt[a]) return;
          Kt(i, Kt(Co(e, o), s)), vn(i.prototype, vn(o, Co(e, s))), Rt[i.prop = a] = i, e.targetTest && (fo.push(i), il[a] = 1), a = (a === "css" ? "CSS" : a.charAt(0).toUpperCase() + a.substr(1)) + "Plugin"
        }
        Vc(a, i), e.register && e.register(Dt, i, Ct)
      } else rh.push(e)
  },
  Se = 255,
  ci = {
    aqua: [0, Se, Se],
    lime: [0, Se, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Se],
    navy: [0, 0, 128],
    white: [Se, Se, Se],
    olive: [128, 128, 0],
    yellow: [Se, Se, 0],
    orange: [Se, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Se, 0, 0],
    pink: [Se, 192, 203],
    cyan: [0, Se, Se],
    transparent: [Se, Se, Se, 0]
  },
  bs = function (e, a, n) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? a + (n - a) * e * 6 : e < .5 ? n : e * 3 < 2 ? a + (n - a) * (2 / 3 - e) * 6 : a) * Se + .5 | 0
  },
  uh = function (e, a, n) {
    var i = e ? ya(e) ? [e >> 16, e >> 8 & Se, e & Se] : 0 : ci.black,
      o, s, r, l, u, d, c, h, f, p;
    if (!i) {
      if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ci[e]) i = ci[e];
      else if (e.charAt(0) === "#") {
        if (e.length < 6 && (o = e.charAt(1), s = e.charAt(2), r = e.charAt(3), e = "#" + o + o + s + s + r + r + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Se, i & Se, parseInt(e.substr(7), 16) / 255];
        e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Se, e & Se]
      } else if (e.substr(0, 3) === "hsl") {
        if (i = p = e.match(Qs), !a) l = +i[0] % 360 / 360, u = +i[1] / 100, d = +i[2] / 100, s = d <= .5 ? d * (u + 1) : d + u - d * u, o = d * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = bs(l + 1 / 3, o, s), i[1] = bs(l, o, s), i[2] = bs(l - 1 / 3, o, s);
        else if (~e.indexOf("=")) return i = e.match(Lc), n && i.length < 4 && (i[3] = 1), i
      } else i = e.match(Qs) || ci.transparent;
      i = i.map(Number)
    }
    return a && !p && (o = i[0] / Se, s = i[1] / Se, r = i[2] / Se, c = Math.max(o, s, r), h = Math.min(o, s, r), d = (c + h) / 2, c === h ? l = u = 0 : (f = c - h, u = d > .5 ? f / (2 - c - h) : f / (c + h), l = c === o ? (s - r) / f + (s < r ? 6 : 0) : c === s ? (r - o) / f + 2 : (o - s) / f + 4, l *= 60), i[0] = ~~(l + .5), i[1] = ~~(u * 100 + .5), i[2] = ~~(d * 100 + .5)), n && i.length < 4 && (i[3] = 1), i
  },
  dh = function (e) {
    var a = [],
      n = [],
      i = -1;
    return e.split(Ba).forEach(function (o) {
      var s = o.match(On) || [];
      a.push.apply(a, s), n.push(i += s.length + 1)
    }), a.c = n, a
  },
  Ou = function (e, a, n) {
    var i = "",
      o = (e + i).match(Ba),
      s = a ? "hsla(" : "rgba(",
      r = 0,
      l, u, d, c;
    if (!o) return e;
    if (o = o.map(function (h) {
        return (h = uh(h, a, 1)) && s + (a ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
      }), n && (d = dh(e), l = n.c, l.join(i) !== d.c.join(i)))
      for (u = e.replace(Ba, "1").split(On), c = u.length - 1; r < c; r++) i += u[r] + (~l.indexOf(r) ? o.shift() || s + "0,0,0,0)" : (d.length ? d : o.length ? o : n).shift());
    if (!u)
      for (u = e.split(Ba), c = u.length - 1; r < c; r++) i += u[r] + o[r];
    return i + u[c]
  },
  Ba = function () {
    var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in ci) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi")
  }(),
  zb = /hsl[a]?\(/,
  ch = function (e) {
    var a = e.join(" "),
      n;
    if (Ba.lastIndex = 0, Ba.test(a)) return n = zb.test(a), e[1] = Ou(e[1], n), e[0] = Ou(e[0], n, dh(e[1])), !0
  },
  Di, It = function () {
    var t = Date.now,
      e = 500,
      a = 33,
      n = t(),
      i = n,
      o = 1e3 / 240,
      s = o,
      r = [],
      l, u, d, c, h, f, p = function g(k) {
        var w = t() - i,
          y = k === !0,
          j, v, E, C;
        if ((w > e || w < 0) && (n += w - a), i += w, E = i - n, j = E - s, (j > 0 || y) && (C = ++c.frame, h = E - c.time * 1e3, c.time = E = E / 1e3, s += j + (j >= o ? 4 : o - j), v = 1), y || (l = u(g)), v)
          for (f = 0; f < r.length; f++) r[f](E, h, C, k)
      };
    return c = {
      time: 0,
      frame: 0,
      tick: function () {
        p(!0)
      },
      deltaRatio: function (k) {
        return h / (1e3 / (k || 60))
      },
      wake: function () {
        qc && (!er && tl() && (ta = er = window, al = ta.document || {}, Nt.gsap = Dt, (ta.gsapVersions || (ta.gsapVersions = [])).push(Dt.version), Uc(jo || ta.GreenSockGlobals || !ta.gsap && ta || {}), rh.forEach(lh)), d = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && c.sleep(), u = d || function (k) {
          return setTimeout(k, s - c.time * 1e3 + 1 | 0)
        }, Di = 1, p(2))
      },
      sleep: function () {
        (d ? cancelAnimationFrame : clearTimeout)(l), Di = 0, u = Ti
      },
      lagSmoothing: function (k, w) {
        e = k || 1 / 0, a = Math.min(w || 33, e)
      },
      fps: function (k) {
        o = 1e3 / (k || 240), s = c.time * 1e3 + o
      },
      add: function (k, w, y) {
        var j = w ? function (v, E, C, T) {
          k(v, E, C, T), c.remove(j)
        } : k;
        return c.remove(k), r[y ? "unshift" : "push"](j), Kn(), j
      },
      remove: function (k, w) {
        ~(w = r.indexOf(k)) && r.splice(w, 1) && f >= w && f--
      },
      _listeners: r
    }, c
  }(),
  Kn = function () {
    return !Di && It.wake()
  },
  ye = {},
  Sb = /^[\d.\-M][\d.\-,\s]/,
  Tb = /["']/g,
  Ab = function (e) {
    for (var a = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], o = 1, s = n.length, r, l, u; o < s; o++) l = n[o], r = o !== s - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, r), a[i] = isNaN(u) ? u.replace(Tb, "").trim() : +u, i = l.substr(r + 1).trim();
    return a
  },
  Db = function (e) {
    var a = e.indexOf("(") + 1,
      n = e.indexOf(")"),
      i = e.indexOf("(", a);
    return e.substring(a, ~i && i < n ? e.indexOf(")", n + 1) : n)
  },
  Ob = function (e) {
    var a = (e + "").split("("),
      n = ye[a[0]];
    return n && a.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Ab(a[1])] : Db(e).split(",").map(Kc)) : ye._CE && Sb.test(e) ? ye._CE("", e) : n
  },
  hh = function (e) {
    return function (a) {
      return 1 - e(1 - a)
    }
  },
  mh = function t(e, a) {
    for (var n = e._first, i; n;) n instanceof yt ? t(n, a) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== a && (n.timeline ? t(n.timeline, a) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = a)), n = n._next
  },
  gn = function (e, a) {
    return e && (Ke(e) ? e : ye[e] || Ob(e)) || a
  },
  Cn = function (e, a, n, i) {
    n === void 0 && (n = function (l) {
      return 1 - a(1 - l)
    }), i === void 0 && (i = function (l) {
      return l < .5 ? a(l * 2) / 2 : 1 - a((1 - l) * 2) / 2
    });
    var o = {
        easeIn: a,
        easeOut: n,
        easeInOut: i
      },
      s;
    return Et(e, function (r) {
      ye[r] = Nt[r] = o, ye[s = r.toLowerCase()] = n;
      for (var l in o) ye[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = ye[r + "." + l] = o[l]
    }), o
  },
  fh = function (e) {
    return function (a) {
      return a < .5 ? (1 - e(1 - a * 2)) / 2 : .5 + e((a - .5) * 2) / 2
    }
  },
  ys = function t(e, a, n) {
    var i = a >= 1 ? a : 1,
      o = (n || (e ? .3 : .45)) / (a < 1 ? a : 1),
      s = o / Js * (Math.asin(1 / i) || 0),
      r = function (d) {
        return d === 1 ? 1 : i * Math.pow(2, -10 * d) * sb((d - s) * o) + 1
      },
      l = e === "out" ? r : e === "in" ? function (u) {
        return 1 - r(1 - u)
      } : fh(r);
    return o = Js / o, l.config = function (u, d) {
      return t(e, u, d)
    }, l
  },
  vs = function t(e, a) {
    a === void 0 && (a = 1.70158);
    var n = function (s) {
        return s ? --s * s * ((a + 1) * s + a) + 1 : 0
      },
      i = e === "out" ? n : e === "in" ? function (o) {
        return 1 - n(1 - o)
      } : fh(n);
    return i.config = function (o) {
      return t(e, o)
    }, i
  };
Et("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var a = e < 5 ? e + 1 : e;
  Cn(t + ",Power" + (a - 1), e ? function (n) {
    return Math.pow(n, a)
  } : function (n) {
    return n
  }, function (n) {
    return 1 - Math.pow(1 - n, a)
  }, function (n) {
    return n < .5 ? Math.pow(n * 2, a) / 2 : 1 - Math.pow((1 - n) * 2, a) / 2
  })
});
ye.Linear.easeNone = ye.none = ye.Linear.easeIn;
Cn("Elastic", ys("in"), ys("out"), ys());
(function (t, e) {
  var a = 1 / e,
    n = 2 * a,
    i = 2.5 * a,
    o = function (r) {
      return r < a ? t * r * r : r < n ? t * Math.pow(r - 1.5 / e, 2) + .75 : r < i ? t * (r -= 2.25 / e) * r + .9375 : t * Math.pow(r - 2.625 / e, 2) + .984375
    };
  Cn("Bounce", function (s) {
    return 1 - o(1 - s)
  }, o)
})(7.5625, 2.75);
Cn("Expo", function (t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0
});
Cn("Circ", function (t) {
  return -($c(1 - t * t) - 1)
});
Cn("Sine", function (t) {
  return t === 1 ? 1 : -ob(t * nb) + 1
});
Cn("Back", vs("in"), vs("out"), vs());
ye.SteppedEase = ye.steps = Nt.SteppedEase = {
  config: function (e, a) {
    e === void 0 && (e = 1);
    var n = 1 / e,
      i = e + (a ? 0 : 1),
      o = a ? 1 : 0,
      s = 1 - De;
    return function (r) {
      return ((i * qi(0, s, r) | 0) + o) * n
    }
  }
};
Hn.ease = ye["quad.out"];
Et("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
  return ol += t + "," + t + "Params,"
});
var gh = function (e, a) {
    this.id = ib++, e._gsap = this, this.target = e, this.harness = a, this.get = a ? a.get : Wc, this.set = a ? a.getSetter : dl
  },
  Oi = function () {
    function t(a) {
      this.vars = a, this._delay = +a.delay || 0, (this._repeat = a.repeat === 1 / 0 ? -2 : a.repeat || 0) && (this._rDelay = a.repeatDelay || 0, this._yoyo = !!a.yoyo || !!a.yoyoEase), this._ts = 1, Gn(this, +a.duration, 1, 1), this.data = a.data, Be && (this._ctx = Be, Be.data.push(this)), Di || It.wake()
    }
    var e = t.prototype;
    return e.delay = function (n) {
      return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay
    }, e.duration = function (n) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur
    }, e.totalDuration = function (n) {
      return arguments.length ? (this._dirty = 0, Gn(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, e.totalTime = function (n, i) {
      if (Kn(), !arguments.length) return this._tTime;
      var o = this._dp;
      if (o && o.smoothChildTiming && this._ts) {
        for (Jo(this, n), !o._dp || o.parent || Xc(o, this); o && o.parent;) o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0), o = o.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && ia(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === De || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Gc(this, n, i)), this
    }, e.time = function (n, i) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + Tu(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time
    }, e.totalProgress = function (n, i) {
      return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }, e.progress = function (n, i) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + Tu(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }, e.iteration = function (n, i) {
      var o = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (n - 1) * o, i) : this._repeat ? Wn(this._tTime, o) + 1 : 1
    }, e.timeScale = function (n, i) {
      if (!arguments.length) return this._rts === -De ? 0 : this._rts;
      if (this._rts === n) return this;
      var o = this.parent && this._ts ? zo(this.parent._time, this) : this._tTime;
      return this._rts = +n || 0, this._ts = this._ps || n === -De ? 0 : this._rts, this.totalTime(qi(-Math.abs(this._delay), this._tDur, o), i !== !1), Xo(this), mb(this)
    }, e.paused = function (n) {
      return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Kn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== De && (this._tTime -= De)))), this) : this._ps
    }, e.startTime = function (n) {
      if (arguments.length) {
        this._start = n;
        var i = this.parent || this._dp;
        return i && (i._sort || !this.parent) && ia(i, this, n - this._delay), this
      }
      return this._start
    }, e.endTime = function (n) {
      return this._start + (jt(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, e.rawTime = function (n) {
      var i = this.parent || this._dp;
      return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? zo(i.rawTime(n), this) : this._tTime : this._tTime
    }, e.revert = function (n) {
      n === void 0 && (n = ub);
      var i = gt;
      return gt = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), gt = i, this
    }, e.globalTime = function (n) {
      for (var i = this, o = arguments.length ? n : i.rawTime(); i;) o = i._start + o / (Math.abs(i._ts) || 1), i = i._dp;
      return !this.parent && this._sat ? this._sat.globalTime(n) : o
    }, e.repeat = function (n) {
      return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, Au(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }, e.repeatDelay = function (n) {
      if (arguments.length) {
        var i = this._time;
        return this._rDelay = n, Au(this), i ? this.time(i) : this
      }
      return this._rDelay
    }, e.yoyo = function (n) {
      return arguments.length ? (this._yoyo = n, this) : this._yoyo
    }, e.seek = function (n, i) {
      return this.totalTime(Ut(this, n), jt(i))
    }, e.restart = function (n, i) {
      return this.play().totalTime(n ? -this._delay : 0, jt(i))
    }, e.play = function (n, i) {
      return n != null && this.seek(n, i), this.reversed(!1).paused(!1)
    }, e.reverse = function (n, i) {
      return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1)
    }, e.pause = function (n, i) {
      return n != null && this.seek(n, i), this.paused(!0)
    }, e.resume = function () {
      return this.paused(!1)
    }, e.reversed = function (n) {
      return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -De : 0)), this) : this._rts < 0
    }, e.invalidate = function () {
      return this._initted = this._act = 0, this._zTime = -De, this
    }, e.isActive = function () {
      var n = this.parent || this._dp,
        i = this._start,
        o;
      return !!(!n || this._ts && this._initted && n.isActive() && (o = n.rawTime(!0)) >= i && o < this.endTime(!0) - De)
    }, e.eventCallback = function (n, i, o) {
      var s = this.vars;
      return arguments.length > 1 ? (i ? (s[n] = i, o && (s[n + "Params"] = o), n === "onUpdate" && (this._onUpdate = i)) : delete s[n], this) : s[n]
    }, e.then = function (n) {
      var i = this;
      return new Promise(function (o) {
        var s = Ke(n) ? n : Yc,
          r = function () {
            var u = i.then;
            i.then = null, Ke(s) && (s = s(i)) && (s.then || s === i) && (i.then = u), o(s), i.then = u
          };
        i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? r() : i._prom = r
      })
    }, e.kill = function () {
      di(this)
    }, t
  }();
Kt(Oi.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -De,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var yt = function (t) {
  Ic(e, t);

  function e(n, i) {
    var o;
    return n === void 0 && (n = {}), o = t.call(this, n) || this, o.labels = {}, o.smoothChildTiming = !!n.smoothChildTiming, o.autoRemoveChildren = !!n.autoRemoveChildren, o._sort = jt(n.sortChildren), Ue && ia(n.parent || Ue, ga(o), i), n.reversed && o.reverse(), n.paused && o.paused(!0), n.scrollTrigger && Jc(ga(o), n.scrollTrigger), o
  }
  var a = e.prototype;
  return a.to = function (i, o, s) {
    return yi(0, arguments, this), this
  }, a.from = function (i, o, s) {
    return yi(1, arguments, this), this
  }, a.fromTo = function (i, o, s, r) {
    return yi(2, arguments, this), this
  }, a.set = function (i, o, s) {
    return o.duration = 0, o.parent = this, bi(o).repeatDelay || (o.repeat = 0), o.immediateRender = !!o.immediateRender, new et(i, o, Ut(this, s), 1), this
  }, a.call = function (i, o, s) {
    return ia(this, et.delayedCall(0, i, o), s)
  }, a.staggerTo = function (i, o, s, r, l, u, d) {
    return s.duration = o, s.stagger = s.stagger || r, s.onComplete = u, s.onCompleteParams = d, s.parent = this, new et(i, s, Ut(this, l)), this
  }, a.staggerFrom = function (i, o, s, r, l, u, d) {
    return s.runBackwards = 1, bi(s).immediateRender = jt(s.immediateRender), this.staggerTo(i, o, s, r, l, u, d)
  }, a.staggerFromTo = function (i, o, s, r, l, u, d, c) {
    return r.startAt = s, bi(r).immediateRender = jt(r.immediateRender), this.staggerTo(i, o, r, l, u, d, c)
  }, a.render = function (i, o, s) {
    var r = this._time,
      l = this._dirty ? this.totalDuration() : this._tDur,
      u = this._dur,
      d = i <= 0 ? 0 : ot(i),
      c = this._zTime < 0 != i < 0 && (this._initted || !u),
      h, f, p, g, k, w, y, j, v, E, C, T;
    if (this !== Ue && d > l && i >= 0 && (d = l), d !== this._tTime || s || c) {
      if (r !== this._time && u && (d += this._time - r, i += this._time - r), h = d, v = this._start, j = this._ts, w = !j, c && (u || (r = this._zTime), (i || !o) && (this._zTime = i)), this._repeat) {
        if (C = this._yoyo, k = u + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(k * 100 + i, o, s);
        if (h = ot(d % k), d === l ? (g = this._repeat, h = u) : (g = ~~(d / k), g && g === d / k && (h = u, g--), h > u && (h = u)), E = Wn(this._tTime, k), !r && this._tTime && E !== g && this._tTime - E * k - this._dur <= 0 && (E = g), C && g & 1 && (h = u - h, T = 1), g !== E && !this._lock) {
          var _ = C && E & 1,
            z = _ === (C && g & 1);
          if (g < E && (_ = !_), r = _ ? 0 : d % u ? u : d, this._lock = 1, this.render(r || (T ? 0 : ot(g * k)), o, !u)._lock = 0, this._tTime = d, !o && this.parent && Mt(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1), r && r !== this._time || w !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (u = this._dur, l = this._tDur, z && (this._lock = 2, r = _ ? u : -1e-4, this.render(r, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !w) return this;
          mh(this, T)
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = kb(this, ot(r), ot(h)), y && (d -= h - (h = y._start))), this._tTime = d, this._time = h, this._act = !j, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, r = 0), !r && h && !o && !g && (Mt(this, "onStart"), this._tTime !== d)) return this;
      if (h >= r && i >= 0)
        for (f = this._first; f;) {
          if (p = f._next, (f._act || h >= f._start) && f._ts && y !== f) {
            if (f.parent !== this) return this.render(i, o, s);
            if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, o, s), h !== this._time || !this._ts && !w) {
              y = 0, p && (d += this._zTime = -De);
              break
            }
          }
          f = p
        } else {
          f = this._last;
          for (var S = i < 0 ? i : h; f;) {
            if (p = f._prev, (f._act || S <= f._end) && f._ts && y !== f) {
              if (f.parent !== this) return this.render(i, o, s);
              if (f.render(f._ts > 0 ? (S - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (S - f._start) * f._ts, o, s || gt && (f._initted || f._startAt)), h !== this._time || !this._ts && !w) {
                y = 0, p && (d += this._zTime = S ? -De : De);
                break
              }
            }
            f = p
          }
        }
      if (y && !o && (this.pause(), y.render(h >= r ? 0 : -De)._zTime = h >= r ? 1 : -1, this._ts)) return this._start = v, Xo(this), this.render(i, o, s);
      this._onUpdate && !o && Mt(this, "onUpdate", !0), (d === l && this._tTime >= this.totalDuration() || !d && r) && (v === this._start || Math.abs(j) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (d === l && this._ts > 0 || !d && this._ts < 0) && Ua(this, 1), !o && !(i < 0 && !r) && (d || r || !l) && (Mt(this, d === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom())))
    }
    return this
  }, a.add = function (i, o) {
    var s = this;
    if (ya(o) || (o = Ut(this, o, i)), !(i instanceof Oi)) {
      if (pt(i)) return i.forEach(function (r) {
        return s.add(r, o)
      }), this;
      if (st(i)) return this.addLabel(i, o);
      if (Ke(i)) i = et.delayedCall(0, i);
      else return this
    }
    return this !== i ? ia(this, i, o) : this
  }, a.getChildren = function (i, o, s, r) {
    i === void 0 && (i = !0), o === void 0 && (o = !0), s === void 0 && (s = !0), r === void 0 && (r = -Vt);
    for (var l = [], u = this._first; u;) u._start >= r && (u instanceof et ? o && l.push(u) : (s && l.push(u), i && l.push.apply(l, u.getChildren(!0, o, s)))), u = u._next;
    return l
  }, a.getById = function (i) {
    for (var o = this.getChildren(1, 1, 1), s = o.length; s--;)
      if (o[s].vars.id === i) return o[s]
  }, a.remove = function (i) {
    return st(i) ? this.removeLabel(i) : Ke(i) ? this.killTweensOf(i) : (Zo(this, i), i === this._recent && (this._recent = this._last), fn(this))
  }, a.totalTime = function (i, o) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ot(It.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), t.prototype.totalTime.call(this, i, o), this._forcing = 0, this) : this._tTime
  }, a.addLabel = function (i, o) {
    return this.labels[i] = Ut(this, o), this
  }, a.removeLabel = function (i) {
    return delete this.labels[i], this
  }, a.addPause = function (i, o, s) {
    var r = et.delayedCall(0, o || Ti, s);
    return r.data = "isPause", this._hasPause = 1, ia(this, r, Ut(this, i))
  }, a.removePause = function (i) {
    var o = this._first;
    for (i = Ut(this, i); o;) o._start === i && o.data === "isPause" && Ua(o), o = o._next
  }, a.killTweensOf = function (i, o, s) {
    for (var r = this.getTweensOf(i, s), l = r.length; l--;) Pa !== r[l] && r[l].kill(i, o);
    return this
  }, a.getTweensOf = function (i, o) {
    for (var s = [], r = Ht(i), l = this._first, u = ya(o), d; l;) l instanceof et ? db(l._targets, r) && (u ? (!Pa || l._initted && l._ts) && l.globalTime(0) <= o && l.globalTime(l.totalDuration()) > o : !o || l.isActive()) && s.push(l) : (d = l.getTweensOf(r, o)).length && s.push.apply(s, d), l = l._next;
    return s
  }, a.tweenTo = function (i, o) {
    o = o || {};
    var s = this,
      r = Ut(s, i),
      l = o,
      u = l.startAt,
      d = l.onStart,
      c = l.onStartParams,
      h = l.immediateRender,
      f, p = et.to(s, Kt({
        ease: o.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: r,
        overwrite: "auto",
        duration: o.duration || Math.abs((r - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || De,
        onStart: function () {
          if (s.pause(), !f) {
            var k = o.duration || Math.abs((r - (u && "time" in u ? u.time : s._time)) / s.timeScale());
            p._dur !== k && Gn(p, k, 0, 1).render(p._time, !0, !0), f = 1
          }
          d && d.apply(p, c || [])
        }
      }, o));
    return h ? p.render(0) : p
  }, a.tweenFromTo = function (i, o, s) {
    return this.tweenTo(o, Kt({
      startAt: {
        time: Ut(this, i)
      }
    }, s))
  }, a.recent = function () {
    return this._recent
  }, a.nextLabel = function (i) {
    return i === void 0 && (i = this._time), Du(this, Ut(this, i))
  }, a.previousLabel = function (i) {
    return i === void 0 && (i = this._time), Du(this, Ut(this, i), 1)
  }, a.currentLabel = function (i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + De)
  }, a.shiftChildren = function (i, o, s) {
    s === void 0 && (s = 0);
    for (var r = this._first, l = this.labels, u; r;) r._start >= s && (r._start += i, r._end += i), r = r._next;
    if (o)
      for (u in l) l[u] >= s && (l[u] += i);
    return fn(this)
  }, a.invalidate = function (i) {
    var o = this._first;
    for (this._lock = 0; o;) o.invalidate(i), o = o._next;
    return t.prototype.invalidate.call(this, i)
  }, a.clear = function (i) {
    i === void 0 && (i = !0);
    for (var o = this._first, s; o;) s = o._next, this.remove(o), o = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), fn(this)
  }, a.totalDuration = function (i) {
    var o = 0,
      s = this,
      r = s._last,
      l = Vt,
      u, d, c;
    if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (c = s.parent; r;) u = r._prev, r._dirty && r.totalDuration(), d = r._start, d > l && s._sort && r._ts && !s._lock ? (s._lock = 1, ia(s, r, d - r._delay, 1)._lock = 0) : l = d, d < 0 && r._ts && (o -= d, (!c && !s._dp || c && c.smoothChildTiming) && (s._start += d / s._ts, s._time -= d, s._tTime -= d), s.shiftChildren(-d, !1, -1 / 0), l = 0), r._end > o && r._ts && (o = r._end), r = u;
      Gn(s, s === Ue && s._time > o ? s._time : o, 1, 1), s._dirty = 0
    }
    return s._tDur
  }, e.updateRoot = function (i) {
    if (Ue._ts && (Gc(Ue, zo(i, Ue)), Hc = It.frame), It.frame >= zu) {
      zu += Bt.autoSleep || 120;
      var o = Ue._first;
      if ((!o || !o._ts) && Bt.autoSleep && It._listeners.length < 2) {
        for (; o && !o._ts;) o = o._next;
        o || It.sleep()
      }
    }
  }, e
}(Oi);
Kt(yt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Fb = function (e, a, n, i, o, s, r) {
    var l = new Ct(this._pt, e, a, 0, 1, wh, null, o),
      u = 0,
      d = 0,
      c, h, f, p, g, k, w, y;
    for (l.b = n, l.e = i, n += "", i += "", (w = ~i.indexOf("random(")) && (i = Ai(i)), s && (y = [n, i], s(y, e, a), n = y[0], i = y[1]), h = n.match(ps) || []; c = ps.exec(i);) p = c[0], g = i.substring(u, c.index), f ? f = (f + 1) % 5 : g.substr(-5) === "rgba(" && (f = 1), p !== h[d++] && (k = parseFloat(h[d - 1]) || 0, l._pt = {
      _next: l._pt,
      p: g || d === 1 ? g : ",",
      s: k,
      c: p.charAt(1) === "=" ? Ln(k, p) - k : parseFloat(p) - k,
      m: f && f < 4 ? Math.round : 0
    }, u = ps.lastIndex);
    return l.c = u < i.length ? i.substring(u, i.length) : "", l.fp = r, (Bc.test(i) || w) && (l.e = 0), this._pt = l, l
  },
  rl = function (e, a, n, i, o, s, r, l, u, d) {
    Ke(i) && (i = i(o || 0, e, s));
    var c = e[a],
      h = n !== "get" ? n : Ke(c) ? u ? e[a.indexOf("set") || !Ke(e["get" + a.substr(3)]) ? a : "get" + a.substr(3)](u) : e[a]() : c,
      f = Ke(c) ? u ? Mb : yh : ul,
      p;
    if (st(i) && (~i.indexOf("random(") && (i = Ai(i)), i.charAt(1) === "=" && (p = Ln(h, i) + (ft(h) || 0), (p || p === 0) && (i = p))), !d || h !== i || rr) return !isNaN(h * i) && i !== "" ? (p = new Ct(this._pt, e, a, +h || 0, i - (h || 0), typeof c == "boolean" ? Bb : vh, 0, f), u && (p.fp = u), r && p.modifier(r, this, e), this._pt = p) : (!c && !(a in e) && nl(a, i), Fb.call(this, e, a, h, i, f, l || Bt.stringFilter, u))
  },
  Pb = function (e, a, n, i, o) {
    if (Ke(e) && (e = vi(e, o, a, n, i)), !ca(e) || e.style && e.nodeType || pt(e) || Mc(e)) return st(e) ? vi(e, o, a, n, i) : e;
    var s = {},
      r;
    for (r in e) s[r] = vi(e[r], o, a, n, i);
    return s
  },
  ph = function (e, a, n, i, o, s) {
    var r, l, u, d;
    if (Rt[e] && (r = new Rt[e]).init(o, r.rawVars ? a[e] : Pb(a[e], i, o, s, n), n, i, s) !== !1 && (n._pt = l = new Ct(n._pt, o, e, 0, 1, r.render, r, 0, r.priority), n !== Fn))
      for (u = n._ptLookup[n._targets.indexOf(o)], d = r._props.length; d--;) u[r._props[d]] = l;
    return r
  },
  Pa, rr, ll = function t(e, a, n) {
    var i = e.vars,
      o = i.ease,
      s = i.startAt,
      r = i.immediateRender,
      l = i.lazy,
      u = i.onUpdate,
      d = i.runBackwards,
      c = i.yoyoEase,
      h = i.keyframes,
      f = i.autoRevert,
      p = e._dur,
      g = e._startAt,
      k = e._targets,
      w = e.parent,
      y = w && w.data === "nested" ? w.vars.targets : k,
      j = e._overwrite === "auto" && !Qr,
      v = e.timeline,
      E, C, T, _, z, S, $, O, L, Q, te, J, ae;
    if (v && (!h || !o) && (o = "none"), e._ease = gn(o, Hn.ease), e._yEase = c ? hh(gn(c === !0 ? o : c, Hn.ease)) : 0, c && e._yoyo && !e._repeat && (c = e._yEase, e._yEase = e._ease, e._ease = c), e._from = !v && !!i.runBackwards, !v || h && !i.stagger) {
      if (O = k[0] ? mn(k[0]).harness : 0, J = O && i[O.prop], E = Co(i, il), g && (g._zTime < 0 && g.progress(1), a < 0 && d && r && !f ? g.render(-1, !0) : g.revert(d && p ? mo : lb), g._lazy = 0), s) {
        if (Ua(e._startAt = et.set(k, Kt({
            data: "isStart",
            overwrite: !1,
            parent: w,
            immediateRender: !0,
            lazy: !g && jt(l),
            startAt: null,
            delay: 0,
            onUpdate: u && function () {
              return Mt(e, "onUpdate")
            },
            stagger: 0
          }, s))), e._startAt._dp = 0, e._startAt._sat = e, a < 0 && (gt || !r && !f) && e._startAt.revert(mo), r && p && a <= 0 && n <= 0) {
          a && (e._zTime = a);
          return
        }
      } else if (d && p && !g) {
        if (a && (r = !1), T = Kt({
            overwrite: !1,
            data: "isFromStart",
            lazy: r && !g && jt(l),
            immediateRender: r,
            stagger: 0,
            parent: w
          }, E), J && (T[O.prop] = J), Ua(e._startAt = et.set(k, T)), e._startAt._dp = 0, e._startAt._sat = e, a < 0 && (gt ? e._startAt.revert(mo) : e._startAt.render(-1, !0)), e._zTime = a, !r) t(e._startAt, De, De);
        else if (!a) return
      }
      for (e._pt = e._ptCache = 0, l = p && jt(l) || l && !p, C = 0; C < k.length; C++) {
        if (z = k[C], $ = z._gsap || sl(k)[C]._gsap, e._ptLookup[C] = Q = {}, tr[$.id] && La.length && Eo(), te = y === k ? C : y.indexOf(z), O && (L = new O).init(z, J || E, e, te, y) !== !1 && (e._pt = _ = new Ct(e._pt, z, L.name, 0, 1, L.render, L, 0, L.priority), L._props.forEach(function (se) {
            Q[se] = _
          }), L.priority && (S = 1)), !O || J)
          for (T in E) Rt[T] && (L = ph(T, E, e, te, z, y)) ? L.priority && (S = 1) : Q[T] = _ = rl.call(e, z, T, "get", E[T], te, y, 0, i.stringFilter);
        e._op && e._op[C] && e.kill(z, e._op[C]), j && e._pt && (Pa = e, Ue.killTweensOf(z, Q, e.globalTime(a)), ae = !e.parent, Pa = 0), e._pt && l && (tr[$.id] = 1)
      }
      S && _h(e), e._onInit && e._onInit(e)
    }
    e._onUpdate = u, e._initted = (!e._op || e._pt) && !ae, h && a <= 0 && v.render(Vt, !0, !0)
  },
  Rb = function (e, a, n, i, o, s, r, l) {
    var u = (e._pt && e._ptCache || (e._ptCache = {}))[a],
      d, c, h, f;
    if (!u)
      for (u = e._ptCache[a] = [], h = e._ptLookup, f = e._targets.length; f--;) {
        if (d = h[f][a], d && d.d && d.d._pt)
          for (d = d.d._pt; d && d.p !== a && d.fp !== a;) d = d._next;
        if (!d) return rr = 1, e.vars[a] = "+=0", ll(e, r), rr = 0, l ? Si(a + " not eligible for reset") : 1;
        u.push(d)
      }
    for (f = u.length; f--;) c = u[f], d = c._pt || c, d.s = (i || i === 0) && !o ? i : d.s + (i || 0) + s * d.c, d.c = n - d.s, c.e && (c.e = Xe(n) + ft(c.e)), c.b && (c.b = d.s + ft(c.b))
  },
  Ib = function (e, a) {
    var n = e[0] ? mn(e[0]).harness : 0,
      i = n && n.aliases,
      o, s, r, l;
    if (!i) return a;
    o = vn({}, a);
    for (s in i)
      if (s in o)
        for (l = i[s].split(","), r = l.length; r--;) o[l[r]] = o[s];
    return o
  },
  $b = function (e, a, n, i) {
    var o = a.ease || i || "power1.inOut",
      s, r;
    if (pt(a)) r = n[e] || (n[e] = []), a.forEach(function (l, u) {
      return r.push({
        t: u / (a.length - 1) * 100,
        v: l,
        e: o
      })
    });
    else
      for (s in a) r = n[s] || (n[s] = []), s === "ease" || r.push({
        t: parseFloat(e),
        v: a[s],
        e: o
      })
  },
  vi = function (e, a, n, i, o) {
    return Ke(e) ? e.call(a, n, i, o) : st(e) && ~e.indexOf("random(") ? Ai(e) : e
  },
  kh = ol + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  bh = {};
Et(kh + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return bh[t] = 1
});
var et = function (t) {
  Ic(e, t);

  function e(n, i, o, s) {
    var r;
    typeof i == "number" && (o.duration = i, i = o, o = null), r = t.call(this, s ? i : bi(i)) || this;
    var l = r.vars,
      u = l.duration,
      d = l.delay,
      c = l.immediateRender,
      h = l.stagger,
      f = l.overwrite,
      p = l.keyframes,
      g = l.defaults,
      k = l.scrollTrigger,
      w = l.yoyoEase,
      y = i.parent || Ue,
      j = (pt(n) || Mc(n) ? ya(n[0]) : "length" in i) ? [n] : Ht(n),
      v, E, C, T, _, z, S, $;
    if (r._targets = j.length ? sl(j) : Si("GSAP target " + n + " not found. https://gsap.com", !Bt.nullTargetWarn) || [], r._ptLookup = [], r._overwrite = f, p || h || no(u) || no(d)) {
      if (i = r.vars, v = r.timeline = new yt({
          data: "nested",
          defaults: g || {},
          targets: y && y.data === "nested" ? y.vars.targets : j
        }), v.kill(), v.parent = v._dp = ga(r), v._start = 0, h || no(u) || no(d)) {
        if (T = j.length, S = h && ah(h), ca(h))
          for (_ in h) ~kh.indexOf(_) && ($ || ($ = {}), $[_] = h[_]);
        for (E = 0; E < T; E++) C = Co(i, bh), C.stagger = 0, w && (C.yoyoEase = w), $ && vn(C, $), z = j[E], C.duration = +vi(u, ga(r), E, z, j), C.delay = (+vi(d, ga(r), E, z, j) || 0) - r._delay, !h && T === 1 && C.delay && (r._delay = d = C.delay, r._start += d, C.delay = 0), v.to(z, C, S ? S(E, z, j) : 0), v._ease = ye.none;
        v.duration() ? u = d = 0 : r.timeline = 0
      } else if (p) {
        bi(Kt(v.vars.defaults, {
          ease: "none"
        })), v._ease = gn(p.ease || i.ease || "none");
        var O = 0,
          L, Q, te;
        if (pt(p)) p.forEach(function (J) {
          return v.to(j, J, ">")
        }), v.duration();
        else {
          C = {};
          for (_ in p) _ === "ease" || _ === "easeEach" || $b(_, p[_], C, p.easeEach);
          for (_ in C)
            for (L = C[_].sort(function (J, ae) {
                return J.t - ae.t
              }), O = 0, E = 0; E < L.length; E++) Q = L[E], te = {
              ease: Q.e,
              duration: (Q.t - (E ? L[E - 1].t : 0)) / 100 * u
            }, te[_] = Q.v, v.to(j, te, O), O += te.duration;
          v.duration() < u && v.to({}, {
            duration: u - v.duration()
          })
        }
      }
      u || r.duration(u = v.duration())
    } else r.timeline = 0;
    return f === !0 && !Qr && (Pa = ga(r), Ue.killTweensOf(j), Pa = 0), ia(y, ga(r), o), i.reversed && r.reverse(), i.paused && r.paused(!0), (c || !u && !p && r._start === ot(y._time) && jt(c) && fb(ga(r)) && y.data !== "nested") && (r._tTime = -De, r.render(Math.max(0, -d) || 0)), k && Jc(ga(r), k), r
  }
  var a = e.prototype;
  return a.render = function (i, o, s) {
    var r = this._time,
      l = this._tDur,
      u = this._dur,
      d = i < 0,
      c = i > l - De && !d ? l : i < De ? 0 : i,
      h, f, p, g, k, w, y, j, v;
    if (!u) pb(this, i, o, s);
    else if (c !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d) {
      if (h = c, j = this.timeline, this._repeat) {
        if (g = u + this._rDelay, this._repeat < -1 && d) return this.totalTime(g * 100 + i, o, s);
        if (h = ot(c % g), c === l ? (p = this._repeat, h = u) : (p = ~~(c / g), p && p === ot(c / g) && (h = u, p--), h > u && (h = u)), w = this._yoyo && p & 1, w && (v = this._yEase, h = u - h), k = Wn(this._tTime, g), h === r && !s && this._initted && p === k) return this._tTime = c, this;
        p !== k && (j && this._yEase && mh(j, w), this.vars.repeatRefresh && !w && !this._lock && this._time !== g && this._initted && (this._lock = s = 1, this.render(ot(g * p), !0).invalidate()._lock = 0))
      }
      if (!this._initted) {
        if (Qc(this, d ? i : h, s, o, c)) return this._tTime = 0, this;
        if (r !== this._time && !(s && this.vars.repeatRefresh && p !== k)) return this;
        if (u !== this._dur) return this.render(i, o, s)
      }
      if (this._tTime = c, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (v || this._ease)(h / u), this._from && (this.ratio = y = 1 - y), h && !r && !o && !p && (Mt(this, "onStart"), this._tTime !== c)) return this;
      for (f = this._pt; f;) f.r(y, f.d), f = f._next;
      j && j.render(i < 0 ? i : j._dur * j._ease(h / this._dur), o, s) || this._startAt && (this._zTime = i), this._onUpdate && !o && (d && ar(this, i, o, s), Mt(this, "onUpdate")), this._repeat && p !== k && this.vars.onRepeat && !o && this.parent && Mt(this, "onRepeat"), (c === this._tDur || !c) && this._tTime === c && (d && !this._onUpdate && ar(this, i, !0, !0), (i || !u) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && Ua(this, 1), !o && !(d && !r) && (c || r || w) && (Mt(this, c === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom()))
    }
    return this
  }, a.targets = function () {
    return this._targets
  }, a.invalidate = function (i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), t.prototype.invalidate.call(this, i)
  }, a.resetTo = function (i, o, s, r, l) {
    Di || It.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
      d;
    return this._initted || ll(this, u), d = this._ease(u / this._dur), Rb(this, i, o, s, r, d, u, l) ? this.resetTo(i, o, s, r, 1) : (Jo(this, 0), this.parent || Zc(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
  }, a.kill = function (i, o) {
    if (o === void 0 && (o = "all"), !i && (!o || o === "all")) return this._lazy = this._pt = 0, this.parent ? di(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, o, Pa && Pa.vars.overwrite !== !0)._first || di(this), this.parent && s !== this.timeline.totalDuration() && Gn(this, this._dur * this.timeline._tDur / s, 0, 1), this
    }
    var r = this._targets,
      l = i ? Ht(i) : r,
      u = this._ptLookup,
      d = this._pt,
      c, h, f, p, g, k, w;
    if ((!o || o === "all") && hb(r, l)) return o === "all" && (this._pt = 0), di(this);
    for (c = this._op = this._op || [], o !== "all" && (st(o) && (g = {}, Et(o, function (y) {
        return g[y] = 1
      }), o = g), o = Ib(r, o)), w = r.length; w--;)
      if (~l.indexOf(r[w])) {
        h = u[w], o === "all" ? (c[w] = o, p = h, f = {}) : (f = c[w] = c[w] || {}, p = o);
        for (g in p) k = h && h[g], k && ((!("kill" in k.d) || k.d.kill(g) === !0) && Zo(this, k, "_pt"), delete h[g]), f !== "all" && (f[g] = 1)
      } return this._initted && !this._pt && d && di(this), this
  }, e.to = function (i, o) {
    return new e(i, o, arguments[2])
  }, e.from = function (i, o) {
    return yi(1, arguments)
  }, e.delayedCall = function (i, o, s, r) {
    return new e(o, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: o,
      onReverseComplete: o,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: r
    })
  }, e.fromTo = function (i, o, s) {
    return yi(2, arguments)
  }, e.set = function (i, o) {
    return o.duration = 0, o.repeatDelay || (o.repeat = 0), new e(i, o)
  }, e.killTweensOf = function (i, o, s) {
    return Ue.killTweensOf(i, o, s)
  }, e
}(Oi);
Kt(et.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Et("staggerTo,staggerFrom,staggerFromTo", function (t) {
  et[t] = function () {
    var e = new yt,
      a = ir.call(arguments, 0);
    return a.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, a)
  }
});
var ul = function (e, a, n) {
    return e[a] = n
  },
  yh = function (e, a, n) {
    return e[a](n)
  },
  Mb = function (e, a, n, i) {
    return e[a](i.fp, n)
  },
  Lb = function (e, a, n) {
    return e.setAttribute(a, n)
  },
  dl = function (e, a) {
    return Ke(e[a]) ? yh : el(e[a]) && e.setAttribute ? Lb : ul
  },
  vh = function (e, a) {
    return a.set(a.t, a.p, Math.round((a.s + a.c * e) * 1e6) / 1e6, a)
  },
  Bb = function (e, a) {
    return a.set(a.t, a.p, !!(a.s + a.c * e), a)
  },
  wh = function (e, a) {
    var n = a._pt,
      i = "";
    if (!e && a.b) i = a.b;
    else if (e === 1 && a.e) i = a.e;
    else {
      for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
      i += a.c
    }
    a.set(a.t, a.p, i, a)
  },
  cl = function (e, a) {
    for (var n = a._pt; n;) n.r(e, n.d), n = n._next
  },
  Nb = function (e, a, n, i) {
    for (var o = this._pt, s; o;) s = o._next, o.p === i && o.modifier(e, a, n), o = s
  },
  qb = function (e) {
    for (var a = this._pt, n, i; a;) i = a._next, a.p === e && !a.op || a.op === e ? Zo(this, a, "_pt") : a.dep || (n = 1), a = i;
    return !n
  },
  Ub = function (e, a, n, i) {
    i.mSet(e, a, i.m.call(i.tween, n, i.mt), i)
  },
  _h = function (e) {
    for (var a = e._pt, n, i, o, s; a;) {
      for (n = a._next, i = o; i && i.pr > a.pr;) i = i._next;
      (a._prev = i ? i._prev : s) ? a._prev._next = a: o = a, (a._next = i) ? i._prev = a : s = a, a = n
    }
    e._pt = o
  },
  Ct = function () {
    function t(a, n, i, o, s, r, l, u, d) {
      this.t = n, this.s = o, this.c = s, this.p = i, this.r = r || vh, this.d = l || this, this.set = u || ul, this.pr = d || 0, this._next = a, a && (a._prev = this)
    }
    var e = t.prototype;
    return e.modifier = function (n, i, o) {
      this.mSet = this.mSet || this.set, this.set = Ub, this.m = n, this.mt = o, this.tween = i
    }, t
  }();
Et(ol + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
  return il[t] = 1
});
Nt.TweenMax = Nt.TweenLite = et;
Nt.TimelineLite = Nt.TimelineMax = yt;
Ue = new yt({
  sortChildren: !1,
  defaults: Hn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Bt.stringFilter = ch;
var pn = [],
  go = {},
  Vb = [],
  Fu = 0,
  Hb = 0,
  ws = function (e) {
    return (go[e] || Vb).map(function (a) {
      return a()
    })
  },
  lr = function () {
    var e = Date.now(),
      a = [];
    e - Fu > 2 && (ws("matchMediaInit"), pn.forEach(function (n) {
      var i = n.queries,
        o = n.conditions,
        s, r, l, u;
      for (r in i) s = ta.matchMedia(i[r]).matches, s && (l = 1), s !== o[r] && (o[r] = s, u = 1);
      u && (n.revert(), l && a.push(n))
    }), ws("matchMediaRevert"), a.forEach(function (n) {
      return n.onMatch(n, function (i) {
        return n.add(null, i)
      })
    }), Fu = e, ws("matchMedia"))
  },
  xh = function () {
    function t(a, n) {
      this.selector = n && or(n), this.data = [], this._r = [], this.isReverted = !1, this.id = Hb++, a && this.add(a)
    }
    var e = t.prototype;
    return e.add = function (n, i, o) {
      Ke(n) && (o = i, i = n, n = Ke);
      var s = this,
        r = function () {
          var u = Be,
            d = s.selector,
            c;
          return u && u !== s && u.data.push(s), o && (s.selector = or(o)), Be = s, c = i.apply(s, arguments), Ke(c) && s._r.push(c), Be = u, s.selector = d, s.isReverted = !1, c
        };
      return s.last = r, n === Ke ? r(s, function (l) {
        return s.add(null, l)
      }) : n ? s[n] = r : r
    }, e.ignore = function (n) {
      var i = Be;
      Be = null, n(this), Be = i
    }, e.getTweens = function () {
      var n = [];
      return this.data.forEach(function (i) {
        return i instanceof t ? n.push.apply(n, i.getTweens()) : i instanceof et && !(i.parent && i.parent.data === "nested") && n.push(i)
      }), n
    }, e.clear = function () {
      this._r.length = this.data.length = 0
    }, e.kill = function (n, i) {
      var o = this;
      if (n ? function () {
          for (var r = o.getTweens(), l = o.data.length, u; l--;) u = o.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function (d) {
            return r.splice(r.indexOf(d), 1)
          }));
          for (r.map(function (d) {
              return {
                g: d._dur || d._delay || d._sat && !d._sat.vars.immediateRender ? d.globalTime(0) : -1 / 0,
                t: d
              }
            }).sort(function (d, c) {
              return c.g - d.g || -1 / 0
            }).forEach(function (d) {
              return d.t.revert(n)
            }), l = o.data.length; l--;) u = o.data[l], u instanceof yt ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof et) && u.revert && u.revert(n);
          o._r.forEach(function (d) {
            return d(n, o)
          }), o.isReverted = !0
        }() : this.data.forEach(function (r) {
          return r.kill && r.kill()
        }), this.clear(), i)
        for (var s = pn.length; s--;) pn[s].id === this.id && pn.splice(s, 1)
    }, e.revert = function (n) {
      this.kill(n || {})
    }, t
  }(),
  Wb = function () {
    function t(a) {
      this.contexts = [], this.scope = a, Be && Be.data.push(this)
    }
    var e = t.prototype;
    return e.add = function (n, i, o) {
      ca(n) || (n = {
        matches: n
      });
      var s = new xh(0, o || this.scope),
        r = s.conditions = {},
        l, u, d;
      Be && !s.selector && (s.selector = Be.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = n;
      for (u in n) u === "all" ? d = 1 : (l = ta.matchMedia(n[u]), l && (pn.indexOf(s) < 0 && pn.push(s), (r[u] = l.matches) && (d = 1), l.addListener ? l.addListener(lr) : l.addEventListener("change", lr)));
      return d && i(s, function (c) {
        return s.add(null, c)
      }), this
    }, e.revert = function (n) {
      this.kill(n || {})
    }, e.kill = function (n) {
      this.contexts.forEach(function (i) {
        return i.kill(n, !0)
      })
    }, t
  }(),
  So = {
    registerPlugin: function () {
      for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
      a.forEach(function (i) {
        return lh(i)
      })
    },
    timeline: function (e) {
      return new yt(e)
    },
    getTweensOf: function (e, a) {
      return Ue.getTweensOf(e, a)
    },
    getProperty: function (e, a, n, i) {
      st(e) && (e = Ht(e)[0]);
      var o = mn(e || {}).get,
        s = n ? Yc : Kc;
      return n === "native" && (n = ""), e && (a ? s((Rt[a] && Rt[a].get || o)(e, a, n, i)) : function (r, l, u) {
        return s((Rt[r] && Rt[r].get || o)(e, r, l, u))
      })
    },
    quickSetter: function (e, a, n) {
      if (e = Ht(e), e.length > 1) {
        var i = e.map(function (d) {
            return Dt.quickSetter(d, a, n)
          }),
          o = i.length;
        return function (d) {
          for (var c = o; c--;) i[c](d)
        }
      }
      e = e[0] || {};
      var s = Rt[a],
        r = mn(e),
        l = r.harness && (r.harness.aliases || {})[a] || a,
        u = s ? function (d) {
          var c = new s;
          Fn._pt = 0, c.init(e, n ? d + n : d, Fn, 0, [e]), c.render(1, c), Fn._pt && cl(1, Fn)
        } : r.set(e, l);
      return s ? u : function (d) {
        return u(e, l, n ? d + n : d, r, 1)
      }
    },
    quickTo: function (e, a, n) {
      var i, o = Dt.to(e, vn((i = {}, i[a] = "+=0.1", i.paused = !0, i), n || {})),
        s = function (l, u, d) {
          return o.resetTo(a, l, u, d)
        };
      return s.tween = o, s
    },
    isTweening: function (e) {
      return Ue.getTweensOf(e, !0).length > 0
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = gn(e.ease, Hn.ease)), Su(Hn, e || {})
    },
    config: function (e) {
      return Su(Bt, e || {})
    },
    registerEffect: function (e) {
      var a = e.name,
        n = e.effect,
        i = e.plugins,
        o = e.defaults,
        s = e.extendTimeline;
      (i || "").split(",").forEach(function (r) {
        return r && !Rt[r] && !Nt[r] && Si(a + " effect requires " + r + " plugin.")
      }), ks[a] = function (r, l, u) {
        return n(Ht(r), Kt(l || {}, o), u)
      }, s && (yt.prototype[a] = function (r, l, u) {
        return this.add(ks[a](r, ca(l) ? l : (u = l) && {}, this), u)
      })
    },
    registerEase: function (e, a) {
      ye[e] = gn(a)
    },
    parseEase: function (e, a) {
      return arguments.length ? gn(e, a) : ye
    },
    getById: function (e) {
      return Ue.getById(e)
    },
    exportRoot: function (e, a) {
      e === void 0 && (e = {});
      var n = new yt(e),
        i, o;
      for (n.smoothChildTiming = jt(e.smoothChildTiming), Ue.remove(n), n._dp = 0, n._time = n._tTime = Ue._time, i = Ue._first; i;) o = i._next, (a || !(!i._dur && i instanceof et && i.vars.onComplete === i._targets[0])) && ia(n, i, i._start - i._delay), i = o;
      return ia(Ue, n, 0), n
    },
    context: function (e, a) {
      return e ? new xh(e, a) : Be
    },
    matchMedia: function (e) {
      return new Wb(e)
    },
    matchMediaRefresh: function () {
      return pn.forEach(function (e) {
        var a = e.conditions,
          n, i;
        for (i in a) a[i] && (a[i] = !1, n = 1);
        n && e.revert()
      }) || lr()
    },
    addEventListener: function (e, a) {
      var n = go[e] || (go[e] = []);
      ~n.indexOf(a) || n.push(a)
    },
    removeEventListener: function (e, a) {
      var n = go[e],
        i = n && n.indexOf(a);
      i >= 0 && n.splice(i, 1)
    },
    utils: {
      wrap: jb,
      wrapYoyo: Eb,
      distribute: ah,
      random: ih,
      snap: nh,
      normalize: xb,
      getUnit: ft,
      clamp: yb,
      splitColor: uh,
      toArray: Ht,
      selector: or,
      mapRange: sh,
      pipe: wb,
      unitize: _b,
      interpolate: Cb,
      shuffle: th
    },
    install: Uc,
    effects: ks,
    ticker: It,
    updateRoot: yt.updateRoot,
    plugins: Rt,
    globalTimeline: Ue,
    core: {
      PropTween: Ct,
      globals: Vc,
      Tween: et,
      Timeline: yt,
      Animation: Oi,
      getCache: mn,
      _removeLinkedListItem: Zo,
      reverting: function () {
        return gt
      },
      context: function (e) {
        return e && Be && (Be.data.push(e), e._ctx = Be), Be
      },
      suppressOverwrites: function (e) {
        return Qr = e
      }
    }
  };
Et("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return So[t] = et[t]
});
It.add(yt.updateRoot);
Fn = So.to({}, {
  duration: 0
});
var Gb = function (e, a) {
    for (var n = e._pt; n && n.p !== a && n.op !== a && n.fp !== a;) n = n._next;
    return n
  },
  Kb = function (e, a) {
    var n = e._targets,
      i, o, s;
    for (i in a)
      for (o = n.length; o--;) s = e._ptLookup[o][i], s && (s = s.d) && (s._pt && (s = Gb(s, i)), s && s.modifier && s.modifier(a[i], e, n[o], i))
  },
  _s = function (e, a) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, o, s) {
        s._onInit = function (r) {
          var l, u;
          if (st(o) && (l = {}, Et(o, function (d) {
              return l[d] = 1
            }), o = l), a) {
            l = {};
            for (u in o) l[u] = a(o[u]);
            o = l
          }
          Kb(r, o)
        }
      }
    }
  },
  Dt = So.registerPlugin({
    name: "attr",
    init: function (e, a, n, i, o) {
      var s, r, l;
      this.tween = n;
      for (s in a) l = e.getAttribute(s) || "", r = this.add(e, "setAttribute", (l || 0) + "", a[s], i, o, 0, 0, s), r.op = s, r.b = l, this._props.push(s)
    },
    render: function (e, a) {
      for (var n = a._pt; n;) gt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
    }
  }, {
    name: "endArray",
    init: function (e, a) {
      for (var n = a.length; n--;) this.add(e, n, e[n] || 0, a[n], 0, 0, 0, 0, 0, 1)
    }
  }, _s("roundProps", sr), _s("modifiers"), _s("snap", nh)) || So;
et.version = yt.version = Dt.version = "3.12.5";
qc = 1;
tl() && Kn();
ye.Power0;
ye.Power1;
ye.Power2;
ye.Power3;
ye.Power4;
ye.Linear;
ye.Quad;
ye.Cubic;
ye.Quart;
ye.Quint;
ye.Strong;
ye.Elastic;
ye.Back;
ye.SteppedEase;
ye.Bounce;
ye.Sine;
ye.Expo;
ye.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Pu, Ra, Bn, hl, un, Ru, ml, Yb = function () {
    return typeof window < "u"
  },
  va = {},
  an = 180 / Math.PI,
  Nn = Math.PI / 180,
  Tn = Math.atan2,
  Iu = 1e8,
  fl = /([A-Z])/g,
  Zb = /(left|right|width|margin|padding|x)/i,
  Xb = /[\s,\(]\S/,
  oa = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  ur = function (e, a) {
    return a.set(a.t, a.p, Math.round((a.s + a.c * e) * 1e4) / 1e4 + a.u, a)
  },
  Jb = function (e, a) {
    return a.set(a.t, a.p, e === 1 ? a.e : Math.round((a.s + a.c * e) * 1e4) / 1e4 + a.u, a)
  },
  Qb = function (e, a) {
    return a.set(a.t, a.p, e ? Math.round((a.s + a.c * e) * 1e4) / 1e4 + a.u : a.b, a)
  },
  ey = function (e, a) {
    var n = a.s + a.c * e;
    a.set(a.t, a.p, ~~(n + (n < 0 ? -.5 : .5)) + a.u, a)
  },
  jh = function (e, a) {
    return a.set(a.t, a.p, e ? a.e : a.b, a)
  },
  Eh = function (e, a) {
    return a.set(a.t, a.p, e !== 1 ? a.b : a.e, a)
  },
  ty = function (e, a, n) {
    return e.style[a] = n
  },
  ay = function (e, a, n) {
    return e.style.setProperty(a, n)
  },
  ny = function (e, a, n) {
    return e._gsap[a] = n
  },
  iy = function (e, a, n) {
    return e._gsap.scaleX = e._gsap.scaleY = n
  },
  oy = function (e, a, n, i, o) {
    var s = e._gsap;
    s.scaleX = s.scaleY = n, s.renderTransform(o, s)
  },
  sy = function (e, a, n, i, o) {
    var s = e._gsap;
    s[a] = n, s.renderTransform(o, s)
  },
  Ve = "transform",
  zt = Ve + "Origin",
  ry = function t(e, a) {
    var n = this,
      i = this.target,
      o = i.style,
      s = i._gsap;
    if (e in va && o) {
      if (this.tfm = this.tfm || {}, e !== "transform") e = oa[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function (r) {
        return n.tfm[r] = pa(i, r)
      }) : this.tfm[e] = s.x ? s[e] : pa(i, e), e === zt && (this.tfm.zOrigin = s.zOrigin);
      else return oa.transform.split(",").forEach(function (r) {
        return t.call(n, r, a)
      });
      if (this.props.indexOf(Ve) >= 0) return;
      s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(zt, a, "")), e = Ve
    }(o || a) && this.props.push(e, a, o[e])
  },
  Ch = function (e) {
    e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
  },
  ly = function () {
    var e = this.props,
      a = this.target,
      n = a.style,
      i = a._gsap,
      o, s;
    for (o = 0; o < e.length; o += 3) e[o + 1] ? a[e[o]] = e[o + 2] : e[o + 2] ? n[e[o]] = e[o + 2] : n.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(fl, "-$1").toLowerCase());
    if (this.tfm) {
      for (s in this.tfm) i[s] = this.tfm[s];
      i.svg && (i.renderTransform(), a.setAttribute("data-svg-origin", this.svgo || "")), o = ml(), (!o || !o.isStart) && !n[Ve] && (Ch(n), i.zOrigin && n[zt] && (n[zt] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
    }
  },
  zh = function (e, a) {
    var n = {
      target: e,
      props: [],
      revert: ly,
      save: ry
    };
    return e._gsap || Dt.core.getCache(e), a && a.split(",").forEach(function (i) {
      return n.save(i)
    }), n
  },
  Sh, dr = function (e, a) {
    var n = Ra.createElementNS ? Ra.createElementNS((a || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ra.createElement(e);
    return n && n.style ? n : Ra.createElement(e)
  },
  sa = function t(e, a, n) {
    var i = getComputedStyle(e);
    return i[a] || i.getPropertyValue(a.replace(fl, "-$1").toLowerCase()) || i.getPropertyValue(a) || !n && t(e, Yn(a) || a, 1) || ""
  },
  $u = "O,Moz,ms,Ms,Webkit".split(","),
  Yn = function (e, a, n) {
    var i = a || un,
      o = i.style,
      s = 5;
    if (e in o && !n) return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !($u[s] + e in o););
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? $u[s] : "") + e
  },
  cr = function () {
    Yb() && window.document && (Pu = window, Ra = Pu.document, Bn = Ra.documentElement, un = dr("div") || {
      style: {}
    }, dr("div"), Ve = Yn(Ve), zt = Ve + "Origin", un.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Sh = !!Yn("perspective"), ml = Dt.core.reverting, hl = 1)
  },
  xs = function t(e) {
    var a = dr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      n = this.parentNode,
      i = this.nextSibling,
      o = this.style.cssText,
      s;
    if (Bn.appendChild(a), a.appendChild(this), this.style.display = "block", e) try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
    } catch {} else this._gsapBBox && (s = this._gsapBBox());
    return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), Bn.removeChild(a), this.style.cssText = o, s
  },
  Mu = function (e, a) {
    for (var n = a.length; n--;)
      if (e.hasAttribute(a[n])) return e.getAttribute(a[n])
  },
  Th = function (e) {
    var a;
    try {
      a = e.getBBox()
    } catch {
      a = xs.call(e, !0)
    }
    return a && (a.width || a.height) || e.getBBox === xs || (a = xs.call(e, !0)), a && !a.width && !a.x && !a.y ? {
      x: +Mu(e, ["x", "cx", "x1"]) || 0,
      y: +Mu(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : a
  },
  Ah = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Th(e))
  },
  wn = function (e, a) {
    if (a) {
      var n = e.style,
        i;
      a in va && a !== zt && (a = Ve), n.removeProperty ? (i = a.substr(0, 2), (i === "ms" || a.substr(0, 6) === "webkit") && (a = "-" + a), n.removeProperty(i === "--" ? a : a.replace(fl, "-$1").toLowerCase())) : n.removeAttribute(a)
    }
  },
  Ia = function (e, a, n, i, o, s) {
    var r = new Ct(e._pt, a, n, 0, 1, s ? Eh : jh);
    return e._pt = r, r.b = i, r.e = o, e._props.push(n), r
  },
  Lu = {
    deg: 1,
    rad: 1,
    turn: 1
  },
  uy = {
    grid: 1,
    flex: 1
  },
  Va = function t(e, a, n, i) {
    var o = parseFloat(n) || 0,
      s = (n + "").trim().substr((o + "").length) || "px",
      r = un.style,
      l = Zb.test(a),
      u = e.tagName.toLowerCase() === "svg",
      d = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      c = 100,
      h = i === "px",
      f = i === "%",
      p, g, k, w;
    if (i === s || !o || Lu[i] || Lu[s]) return o;
    if (s !== "px" && !h && (o = t(e, a, n, "px")), w = e.getCTM && Ah(e), (f || s === "%") && (va[a] || ~a.indexOf("adius"))) return p = w ? e.getBBox()[l ? "width" : "height"] : e[d], Xe(f ? o / p * c : o / 100 * p);
    if (r[l ? "width" : "height"] = c + (h ? s : i), g = ~a.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, w && (g = (e.ownerSVGElement || {}).parentNode), (!g || g === Ra || !g.appendChild) && (g = Ra.body), k = g._gsap, k && f && k.width && l && k.time === It.time && !k.uncache) return Xe(o / k.width * c);
    if (f && (a === "height" || a === "width")) {
      var y = e.style[a];
      e.style[a] = c + i, p = e[d], y ? e.style[a] = y : wn(e, a)
    } else(f || s === "%") && !uy[sa(g, "display")] && (r.position = sa(e, "position")), g === e && (r.position = "static"), g.appendChild(un), p = un[d], g.removeChild(un), r.position = "absolute";
    return l && f && (k = mn(g), k.time = It.time, k.width = g[d]), Xe(h ? p * o / c : p && o ? c / p * o : 0)
  },
  pa = function (e, a, n, i) {
    var o;
    return hl || cr(), a in oa && a !== "transform" && (a = oa[a], ~a.indexOf(",") && (a = a.split(",")[0])), va[a] && a !== "transform" ? (o = Pi(e, i), o = a !== "transformOrigin" ? o[a] : o.svg ? o.origin : Ao(sa(e, zt)) + " " + o.zOrigin + "px") : (o = e.style[a], (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = To[a] && To[a](e, a, n) || sa(e, a) || Wc(e, a) || (a === "opacity" ? 1 : 0))), n && !~(o + "").trim().indexOf(" ") ? Va(e, a, o, n) + n : o
  },
  dy = function (e, a, n, i) {
    if (!n || n === "none") {
      var o = Yn(a, e, 1),
        s = o && sa(e, o, 1);
      s && s !== n ? (a = o, n = s) : a === "borderColor" && (n = sa(e, "borderTopColor"))
    }
    var r = new Ct(this._pt, e.style, a, 0, 1, wh),
      l = 0,
      u = 0,
      d, c, h, f, p, g, k, w, y, j, v, E;
    if (r.b = n, r.e = i, n += "", i += "", i === "auto" && (g = e.style[a], e.style[a] = i, i = sa(e, a) || i, g ? e.style[a] = g : wn(e, a)), d = [n, i], ch(d), n = d[0], i = d[1], h = n.match(On) || [], E = i.match(On) || [], E.length) {
      for (; c = On.exec(i);) k = c[0], y = i.substring(l, c.index), p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1), k !== (g = h[u++] || "") && (f = parseFloat(g) || 0, v = g.substr((f + "").length), k.charAt(1) === "=" && (k = Ln(f, k) + v), w = parseFloat(k), j = k.substr((w + "").length), l = On.lastIndex - j.length, j || (j = j || Bt.units[a] || v, l === i.length && (i += j, r.e += j)), v !== j && (f = Va(e, a, g, j) || 0), r._pt = {
        _next: r._pt,
        p: y || u === 1 ? y : ",",
        s: f,
        c: w - f,
        m: p && p < 4 || a === "zIndex" ? Math.round : 0
      });
      r.c = l < i.length ? i.substring(l, i.length) : ""
    } else r.r = a === "display" && i === "none" ? Eh : jh;
    return Bc.test(i) && (r.e = 0), this._pt = r, r
  },
  Bu = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
  cy = function (e) {
    var a = e.split(" "),
      n = a[0],
      i = a[1] || "50%";
    return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), a[0] = Bu[n] || n, a[1] = Bu[i] || i, a.join(" ")
  },
  hy = function (e, a) {
    if (a.tween && a.tween._time === a.tween._dur) {
      var n = a.t,
        i = n.style,
        o = a.u,
        s = n._gsap,
        r, l, u;
      if (o === "all" || o === !0) i.cssText = "", l = 1;
      else
        for (o = o.split(","), u = o.length; --u > -1;) r = o[u], va[r] && (l = 1, r = r === "transformOrigin" ? zt : Ve), wn(n, r);
      l && (wn(n, Ve), s && (s.svg && n.removeAttribute("transform"), Pi(n, 1), s.uncache = 1, Ch(i)))
    }
  },
  To = {
    clearProps: function (e, a, n, i, o) {
      if (o.data !== "isFromStart") {
        var s = e._pt = new Ct(e._pt, a, n, 0, 0, hy);
        return s.u = i, s.pr = -10, s.tween = o, e._props.push(n), 1
      }
    }
  },
  Fi = [1, 0, 0, 1, 0, 0],
  Dh = {},
  Oh = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
  },
  Nu = function (e) {
    var a = sa(e, Ve);
    return Oh(a) ? Fi : a.substr(7).match(Lc).map(Xe)
  },
  gl = function (e, a) {
    var n = e._gsap || mn(e),
      i = e.style,
      o = Nu(e),
      s, r, l, u;
    return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, o = [l.a, l.b, l.c, l.d, l.e, l.f], o.join(",") === "1,0,0,1,0,0" ? Fi : o) : (o === Fi && !e.offsetParent && e !== Bn && !n.svg && (l = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent) && (u = 1, r = e.nextElementSibling, Bn.appendChild(e)), o = Nu(e), l ? i.display = l : wn(e, "display"), u && (r ? s.insertBefore(e, r) : s ? s.appendChild(e) : Bn.removeChild(e))), a && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
  },
  hr = function (e, a, n, i, o, s) {
    var r = e._gsap,
      l = o || gl(e, !0),
      u = r.xOrigin || 0,
      d = r.yOrigin || 0,
      c = r.xOffset || 0,
      h = r.yOffset || 0,
      f = l[0],
      p = l[1],
      g = l[2],
      k = l[3],
      w = l[4],
      y = l[5],
      j = a.split(" "),
      v = parseFloat(j[0]) || 0,
      E = parseFloat(j[1]) || 0,
      C, T, _, z;
    n ? l !== Fi && (T = f * k - p * g) && (_ = v * (k / T) + E * (-g / T) + (g * y - k * w) / T, z = v * (-p / T) + E * (f / T) - (f * y - p * w) / T, v = _, E = z) : (C = Th(e), v = C.x + (~j[0].indexOf("%") ? v / 100 * C.width : v), E = C.y + (~(j[1] || j[0]).indexOf("%") ? E / 100 * C.height : E)), i || i !== !1 && r.smooth ? (w = v - u, y = E - d, r.xOffset = c + (w * f + y * g) - w, r.yOffset = h + (w * p + y * k) - y) : r.xOffset = r.yOffset = 0, r.xOrigin = v, r.yOrigin = E, r.smooth = !!i, r.origin = a, r.originIsAbsolute = !!n, e.style[zt] = "0px 0px", s && (Ia(s, r, "xOrigin", u, v), Ia(s, r, "yOrigin", d, E), Ia(s, r, "xOffset", c, r.xOffset), Ia(s, r, "yOffset", h, r.yOffset)), e.setAttribute("data-svg-origin", v + " " + E)
  },
  Pi = function (e, a) {
    var n = e._gsap || new gh(e);
    if ("x" in n && !a && !n.uncache) return n;
    var i = e.style,
      o = n.scaleX < 0,
      s = "px",
      r = "deg",
      l = getComputedStyle(e),
      u = sa(e, zt) || "0",
      d, c, h, f, p, g, k, w, y, j, v, E, C, T, _, z, S, $, O, L, Q, te, J, ae, se, tt, rt, he, de, We, Ce, ht;
    return d = c = h = g = k = w = y = j = v = 0, f = p = 1, n.svg = !!(e.getCTM && Ah(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[Ve] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Ve] !== "none" ? l[Ve] : "")), i.scale = i.rotate = i.translate = "none"), T = gl(e, n.svg), n.svg && (n.uncache ? (se = e.getBBox(), u = n.xOrigin - se.x + "px " + (n.yOrigin - se.y) + "px", ae = "") : ae = !a && e.getAttribute("data-svg-origin"), hr(e, ae || u, !!ae || n.originIsAbsolute, n.smooth !== !1, T)), E = n.xOrigin || 0, C = n.yOrigin || 0, T !== Fi && ($ = T[0], O = T[1], L = T[2], Q = T[3], d = te = T[4], c = J = T[5], T.length === 6 ? (f = Math.sqrt($ * $ + O * O), p = Math.sqrt(Q * Q + L * L), g = $ || O ? Tn(O, $) * an : 0, y = L || Q ? Tn(L, Q) * an + g : 0, y && (p *= Math.abs(Math.cos(y * Nn))), n.svg && (d -= E - (E * $ + C * L), c -= C - (E * O + C * Q))) : (ht = T[6], We = T[7], rt = T[8], he = T[9], de = T[10], Ce = T[11], d = T[12], c = T[13], h = T[14], _ = Tn(ht, de), k = _ * an, _ && (z = Math.cos(-_), S = Math.sin(-_), ae = te * z + rt * S, se = J * z + he * S, tt = ht * z + de * S, rt = te * -S + rt * z, he = J * -S + he * z, de = ht * -S + de * z, Ce = We * -S + Ce * z, te = ae, J = se, ht = tt), _ = Tn(-L, de), w = _ * an, _ && (z = Math.cos(-_), S = Math.sin(-_), ae = $ * z - rt * S, se = O * z - he * S, tt = L * z - de * S, Ce = Q * S + Ce * z, $ = ae, O = se, L = tt), _ = Tn(O, $), g = _ * an, _ && (z = Math.cos(_), S = Math.sin(_), ae = $ * z + O * S, se = te * z + J * S, O = O * z - $ * S, J = J * z - te * S, $ = ae, te = se), k && Math.abs(k) + Math.abs(g) > 359.9 && (k = g = 0, w = 180 - w), f = Xe(Math.sqrt($ * $ + O * O + L * L)), p = Xe(Math.sqrt(J * J + ht * ht)), _ = Tn(te, J), y = Math.abs(_) > 2e-4 ? _ * an : 0, v = Ce ? 1 / (Ce < 0 ? -Ce : Ce) : 0), n.svg && (ae = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Oh(sa(e, Ve)), ae && e.setAttribute("transform", ae))), Math.abs(y) > 90 && Math.abs(y) < 270 && (o ? (f *= -1, y += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (p *= -1, y += y <= 0 ? 180 : -180)), a = a || n.uncache, n.x = d - ((n.xPercent = d && (!a && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + s, n.y = c - ((n.yPercent = c && (!a && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + s, n.z = h + s, n.scaleX = Xe(f), n.scaleY = Xe(p), n.rotation = Xe(g) + r, n.rotationX = Xe(k) + r, n.rotationY = Xe(w) + r, n.skewX = y + r, n.skewY = j + r, n.transformPerspective = v + s, (n.zOrigin = parseFloat(u.split(" ")[2]) || !a && n.zOrigin || 0) && (i[zt] = Ao(u)), n.xOffset = n.yOffset = 0, n.force3D = Bt.force3D, n.renderTransform = n.svg ? fy : Sh ? Fh : my, n.uncache = 0, n
  },
  Ao = function (e) {
    return (e = e.split(" "))[0] + " " + e[1]
  },
  js = function (e, a, n) {
    var i = ft(a);
    return Xe(parseFloat(a) + parseFloat(Va(e, "x", n + "px", i))) + i
  },
  my = function (e, a) {
    a.z = "0px", a.rotationY = a.rotationX = "0deg", a.force3D = 0, Fh(e, a)
  },
  en = "0deg",
  oi = "0px",
  tn = ") ",
  Fh = function (e, a) {
    var n = a || this,
      i = n.xPercent,
      o = n.yPercent,
      s = n.x,
      r = n.y,
      l = n.z,
      u = n.rotation,
      d = n.rotationY,
      c = n.rotationX,
      h = n.skewX,
      f = n.skewY,
      p = n.scaleX,
      g = n.scaleY,
      k = n.transformPerspective,
      w = n.force3D,
      y = n.target,
      j = n.zOrigin,
      v = "",
      E = w === "auto" && e && e !== 1 || w === !0;
    if (j && (c !== en || d !== en)) {
      var C = parseFloat(d) * Nn,
        T = Math.sin(C),
        _ = Math.cos(C),
        z;
      C = parseFloat(c) * Nn, z = Math.cos(C), s = js(y, s, T * z * -j), r = js(y, r, -Math.sin(C) * -j), l = js(y, l, _ * z * -j + j)
    }
    k !== oi && (v += "perspective(" + k + tn), (i || o) && (v += "translate(" + i + "%, " + o + "%) "), (E || s !== oi || r !== oi || l !== oi) && (v += l !== oi || E ? "translate3d(" + s + ", " + r + ", " + l + ") " : "translate(" + s + ", " + r + tn), u !== en && (v += "rotate(" + u + tn), d !== en && (v += "rotateY(" + d + tn), c !== en && (v += "rotateX(" + c + tn), (h !== en || f !== en) && (v += "skew(" + h + ", " + f + tn), (p !== 1 || g !== 1) && (v += "scale(" + p + ", " + g + tn), y.style[Ve] = v || "translate(0, 0)"
  },
  fy = function (e, a) {
    var n = a || this,
      i = n.xPercent,
      o = n.yPercent,
      s = n.x,
      r = n.y,
      l = n.rotation,
      u = n.skewX,
      d = n.skewY,
      c = n.scaleX,
      h = n.scaleY,
      f = n.target,
      p = n.xOrigin,
      g = n.yOrigin,
      k = n.xOffset,
      w = n.yOffset,
      y = n.forceCSS,
      j = parseFloat(s),
      v = parseFloat(r),
      E, C, T, _, z;
    l = parseFloat(l), u = parseFloat(u), d = parseFloat(d), d && (d = parseFloat(d), u += d, l += d), l || u ? (l *= Nn, u *= Nn, E = Math.cos(l) * c, C = Math.sin(l) * c, T = Math.sin(l - u) * -h, _ = Math.cos(l - u) * h, u && (d *= Nn, z = Math.tan(u - d), z = Math.sqrt(1 + z * z), T *= z, _ *= z, d && (z = Math.tan(d), z = Math.sqrt(1 + z * z), E *= z, C *= z)), E = Xe(E), C = Xe(C), T = Xe(T), _ = Xe(_)) : (E = c, _ = h, C = T = 0), (j && !~(s + "").indexOf("px") || v && !~(r + "").indexOf("px")) && (j = Va(f, "x", s, "px"), v = Va(f, "y", r, "px")), (p || g || k || w) && (j = Xe(j + p - (p * E + g * T) + k), v = Xe(v + g - (p * C + g * _) + w)), (i || o) && (z = f.getBBox(), j = Xe(j + i / 100 * z.width), v = Xe(v + o / 100 * z.height)), z = "matrix(" + E + "," + C + "," + T + "," + _ + "," + j + "," + v + ")", f.setAttribute("transform", z), y && (f.style[Ve] = z)
  },
  gy = function (e, a, n, i, o) {
    var s = 360,
      r = st(o),
      l = parseFloat(o) * (r && ~o.indexOf("rad") ? an : 1),
      u = l - i,
      d = i + u + "deg",
      c, h;
    return r && (c = o.split("_")[1], c === "short" && (u %= s, u !== u % (s / 2) && (u += u < 0 ? s : -s)), c === "cw" && u < 0 ? u = (u + s * Iu) % s - ~~(u / s) * s : c === "ccw" && u > 0 && (u = (u - s * Iu) % s - ~~(u / s) * s)), e._pt = h = new Ct(e._pt, a, n, i, u, Jb), h.e = d, h.u = "deg", e._props.push(n), h
  },
  qu = function (e, a) {
    for (var n in a) e[n] = a[n];
    return e
  },
  py = function (e, a, n) {
    var i = qu({}, n._gsap),
      o = "perspective,force3D,transformOrigin,svgOrigin",
      s = n.style,
      r, l, u, d, c, h, f, p;
    i.svg ? (u = n.getAttribute("transform"), n.setAttribute("transform", ""), s[Ve] = a, r = Pi(n, 1), wn(n, Ve), n.setAttribute("transform", u)) : (u = getComputedStyle(n)[Ve], s[Ve] = a, r = Pi(n, 1), s[Ve] = u);
    for (l in va) u = i[l], d = r[l], u !== d && o.indexOf(l) < 0 && (f = ft(u), p = ft(d), c = f !== p ? Va(n, l, u, p) : parseFloat(u), h = parseFloat(d), e._pt = new Ct(e._pt, r, l, c, h - c, ur), e._pt.u = p || 0, e._props.push(l));
    qu(r, i)
  };
Et("padding,margin,Width,Radius", function (t, e) {
  var a = "Top",
    n = "Right",
    i = "Bottom",
    o = "Left",
    s = (e < 3 ? [a, n, i, o] : [a + o, a + n, i + n, i + o]).map(function (r) {
      return e < 2 ? t + r : "border" + r + t
    });
  To[e > 1 ? "border" + t : t] = function (r, l, u, d, c) {
    var h, f;
    if (arguments.length < 4) return h = s.map(function (p) {
      return pa(r, p, u)
    }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (d + "").split(" "), f = {}, s.forEach(function (p, g) {
      return f[p] = h[g] = h[g] || h[(g - 1) / 2 | 0]
    }), r.init(l, f, c)
  }
});
var Ph = {
  name: "css",
  register: cr,
  targetTest: function (e) {
    return e.style && e.nodeType
  },
  init: function (e, a, n, i, o) {
    var s = this._props,
      r = e.style,
      l = n.vars.startAt,
      u, d, c, h, f, p, g, k, w, y, j, v, E, C, T, _;
    hl || cr(), this.styles = this.styles || zh(e), _ = this.styles.props, this.tween = n;
    for (g in a)
      if (g !== "autoRound" && (d = a[g], !(Rt[g] && ph(g, a, n, i, e, o)))) {
        if (f = typeof d, p = To[g], f === "function" && (d = d.call(n, i, e, o), f = typeof d), f === "string" && ~d.indexOf("random(") && (d = Ai(d)), p) p(this, e, g, d, n) && (T = 1);
        else if (g.substr(0, 2) === "--") u = (getComputedStyle(e).getPropertyValue(g) + "").trim(), d += "", Ba.lastIndex = 0, Ba.test(u) || (k = ft(u), w = ft(d)), w ? k !== w && (u = Va(e, g, u, w) + w) : k && (d += k), this.add(r, "setProperty", u, d, i, o, 0, 0, g), s.push(g), _.push(g, 0, r[g]);
        else if (f !== "undefined") {
          if (l && g in l ? (u = typeof l[g] == "function" ? l[g].call(n, i, e, o) : l[g], st(u) && ~u.indexOf("random(") && (u = Ai(u)), ft(u + "") || u === "auto" || (u += Bt.units[g] || ft(pa(e, g)) || ""), (u + "").charAt(1) === "=" && (u = pa(e, g))) : u = pa(e, g), h = parseFloat(u), y = f === "string" && d.charAt(1) === "=" && d.substr(0, 2), y && (d = d.substr(2)), c = parseFloat(d), g in oa && (g === "autoAlpha" && (h === 1 && pa(e, "visibility") === "hidden" && c && (h = 0), _.push("visibility", 0, r.visibility), Ia(this, r, "visibility", h ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), g !== "scale" && g !== "transform" && (g = oa[g], ~g.indexOf(",") && (g = g.split(",")[0]))), j = g in va, j) {
            if (this.styles.save(g), v || (E = e._gsap, E.renderTransform && !a.parseTransform || Pi(e, a.parseTransform), C = a.smoothOrigin !== !1 && E.smooth, v = this._pt = new Ct(this._pt, r, Ve, 0, 1, E.renderTransform, E, 0, -1), v.dep = 1), g === "scale") this._pt = new Ct(this._pt, E, "scaleY", E.scaleY, (y ? Ln(E.scaleY, y + c) : c) - E.scaleY || 0, ur), this._pt.u = 0, s.push("scaleY", g), g += "X";
            else if (g === "transformOrigin") {
              _.push(zt, 0, r[zt]), d = cy(d), E.svg ? hr(e, d, 0, C, 0, this) : (w = parseFloat(d.split(" ")[2]) || 0, w !== E.zOrigin && Ia(this, E, "zOrigin", E.zOrigin, w), Ia(this, r, g, Ao(u), Ao(d)));
              continue
            } else if (g === "svgOrigin") {
              hr(e, d, 1, C, 0, this);
              continue
            } else if (g in Dh) {
              gy(this, E, g, h, y ? Ln(h, y + d) : d);
              continue
            } else if (g === "smoothOrigin") {
              Ia(this, E, "smooth", E.smooth, d);
              continue
            } else if (g === "force3D") {
              E[g] = d;
              continue
            } else if (g === "transform") {
              py(this, d, e);
              continue
            }
          } else g in r || (g = Yn(g) || g);
          if (j || (c || c === 0) && (h || h === 0) && !Xb.test(d) && g in r) k = (u + "").substr((h + "").length), c || (c = 0), w = ft(d) || (g in Bt.units ? Bt.units[g] : k), k !== w && (h = Va(e, g, u, w)), this._pt = new Ct(this._pt, j ? E : r, g, h, (y ? Ln(h, y + c) : c) - h, !j && (w === "px" || g === "zIndex") && a.autoRound !== !1 ? ey : ur), this._pt.u = w || 0, k !== w && w !== "%" && (this._pt.b = u, this._pt.r = Qb);
          else if (g in r) dy.call(this, e, g, u, y ? y + d : d);
          else if (g in e) this.add(e, g, u || e[g], y ? y + d : d, i, o);
          else if (g !== "parseTransform") {
            nl(g, d);
            continue
          }
          j || (g in r ? _.push(g, 0, r[g]) : _.push(g, 1, u || e[g])), s.push(g)
        }
      } T && _h(this)
  },
  render: function (e, a) {
    if (a.tween._time || !ml())
      for (var n = a._pt; n;) n.r(e, n.d), n = n._next;
    else a.styles.revert()
  },
  get: pa,
  aliases: oa,
  getSetter: function (e, a, n) {
    var i = oa[a];
    return i && i.indexOf(",") < 0 && (a = i), a in va && a !== zt && (e._gsap.x || pa(e, "x")) ? n && Ru === n ? a === "scale" ? iy : ny : (Ru = n || {}) && (a === "scale" ? oy : sy) : e.style && !el(e.style[a]) ? ty : ~a.indexOf("-") ? ay : dl(e, a)
  },
  core: {
    _removeProperty: wn,
    _getMatrix: gl
  }
};
Dt.utils.checkPrefix = Yn;
Dt.core.getStyleSaver = zh;
(function (t, e, a, n) {
  var i = Et(t + "," + e + "," + a, function (o) {
    va[o] = 1
  });
  Et(e, function (o) {
    Bt.units[o] = "deg", Dh[o] = 1
  }), oa[i[13]] = t + "," + e, Et(n, function (o) {
    var s = o.split(":");
    oa[s[1]] = i[s[0]]
  })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Et("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
  Bt.units[t] = "px"
});
Dt.registerPlugin(Ph);
var Rh = Dt.registerPlugin(Ph) || Dt;
Rh.core.Tween;
const ky = ge({
    __name: "number-animation",
    props: {
      number: {
        type: Number,
        default: 0
      }
    },
    setup(t) {
      const e = ha({
          number: 0
        }),
        a = M(0),
        n = t;
      return setTimeout(() => {
        a.value = n.number
      }, 500), He(a, i => {
        Rh.to(e, {
          duration: 1,
          number: i
        })
      }), (i, o) => be(e.number.toFixed(0))
    }
  }),
  by = m("div", {
    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  }, null, -1),
  yy = {
    class: "w-full fixed inset-0 z-10 overflow-y-auto"
  },
  vy = {
    class: "flex items-end justify-center p-4 text-center sm:items-center sm:p-0"
  },
  wy = {
    class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full"
  },
  _y = {
    class: "mt-3 text-center sm:mt-5"
  },
  xy = {
    key: 0
  },
  jy = {
    class: "mt-2"
  },
  Ey = {
    class: "text-sm text-gray-500"
  },
  Cy = {
    key: 1
  },
  zy = {
    class: "mt-2"
  },
  Sy = {
    class: "text-xl text-emerald-600 font-semibold"
  },
  Ty = {
    class: "mt-2"
  },
  Ay = {
    class: "text-sm text-gray-500"
  },
  Dy = m("hr", {
    class: "divide-gray-400 my-2"
  }, null, -1),
  Oy = {
    key: 2,
    class: "rounded-md bg-blue-50 p-4"
  },
  Fy = {
    class: "flex"
  },
  Py = {
    class: "flex-shrink-0"
  },
  Ry = {
    class: "ml-3 flex-1 md:flex md:justify-between"
  },
  Iy = {
    class: "text-sm text-blue-700"
  },
  $y = {
    key: 3,
    class: "rounded-md bg-red-50 p-4"
  },
  My = {
    class: "flex"
  },
  Ly = {
    class: "flex-shrink-0"
  },
  By = {
    class: "ml-3 flex-1 md:flex md:justify-between"
  },
  Ny = {
    class: "text-sm text-red-700"
  },
  qy = {
    class: "mt-5 sm:mt-6"
  },
  Uy = ["disabled"],
  Vy = ge({
    __name: "redeem-points-overlay",
    props: {
      isOpen: {
        type: Boolean,
        default: !1
      },
      points: {
        default: 0
      }
    },
    emits: ["close"],
    setup(t, {
      emit: e
    }) {
      const a = M(""),
        n = M(""),
        i = M(0),
        o = M(!1),
        s = M(!1),
        r = M(1),
        l = e,
        u = async () => {
          try {
            s.value = !0;
            const h = await new Le().redeemReferralReward();
            a.value = h.message, i.value = h.daysTrialExtended ?? 0, Ee.referralPoints = 0, r.value = 2
          } catch (c) {
            console.log(c), n.value = c.response.message
          }
          s.value = !1, o.value = !0
        }, d = () => {
          l("close"), a.value = "", n.value = "", i.value = 0, o.value = !1, s.value = !1, r.value = 1
        };
      return (c, h) => (H(), wt(F(_a), {
        as: "template",
        show: c.isOpen
      }, {
        default: K(() => [D(F(Wa), {
          as: "div",
          class: "relative z-10",
          onClose: d
        }, {
          default: K(() => [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: K(() => [by]),
            _: 1
          }), m("div", yy, [m("div", vy, [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            default: K(() => [D(F(Ga), {
              class: "w-full relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            }, {
              default: K(() => [m("div", null, [m("div", wy, [D(F(_k), {
                class: "w-full text-amber-500",
                "aria-hidden": "true"
              })]), m("div", _y, [r.value === 1 ? (H(), ee("div", xy, [D(F(da), {
                as: "h3",
                class: "text-base font-semibold leading-6 text-gray-900"
              }, {
                default: K(() => [_e(" You are about to redeem " + be(c.points) + " points. ", 1)]),
                _: 1
              }), m("div", null, [m("div", jy, [m("p", Ey, " Your trial license will be extend by " + be(c.points / 500 * 15) + " days. ", 1)])])])) : Fe("", !0), r.value === 2 ? (H(), ee("div", Cy, [D(F(da), {
                as: "h3",
                class: "text-base font-semibold leading-6 text-gray-900"
              }, {
                default: K(() => [_e(" Congratulations! ")]),
                _: 1
              }), m("div", null, [m("div", zy, [m("p", Sy, [_e(" + "), D(ky, {
                number: i.value
              }, null, 8, ["number"]), _e(" days ")])]), m("div", Ty, [m("p", Ay, " Your trial license has been extended by " + be(i.value) + " days. ", 1)])])])) : Fe("", !0), Dy, a.value.length ? (H(), ee("div", Oy, [m("div", Fy, [m("div", Py, [D(F(Vn), {
                class: "h-5 w-5 text-blue-400",
                "aria-hidden": "true"
              })]), m("div", Ry, [m("p", Iy, be(a.value), 1)])])])) : Fe("", !0), n.value.length ? (H(), ee("div", $y, [m("div", My, [m("div", Ly, [D(F(Vn), {
                class: "h-5 w-5 text-red-600",
                "aria-hidden": "true"
              })]), m("div", By, [m("p", Ny, be(n.value), 1)])])])) : Fe("", !0)])]), m("div", qy, [r.value === 1 ? le((H(), ee("button", {
                key: 0,
                type: "button",
                class: fe(["inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600", {
                  "cursor-not-allowed opacity-50": s.value
                }]),
                disabled: s.value,
                onClick: u
              }, " Redeem Points ", 10, Uy)), [
                [ke, !o.value]
              ]) : Fe("", !0), r.value === 2 ? (H(), ee("button", {
                key: 1,
                type: "button",
                class: "inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
                onClick: d
              }, " Close ")) : Fe("", !0)])]),
              _: 1
            })]),
            _: 1
          })])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["show"]))
    }
  }),
  Hy = m("div", {
    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  }, null, -1),
  Wy = {
    class: "fixed inset-0 z-10 overflow-y-auto"
  },
  Gy = {
    class: "flex items-end justify-center p-4 text-center sm:items-center sm:p-0"
  },
  Ky = {
    class: "mt-3 text-center sm:mt-5"
  },
  Yy = {
    class: "mt-2"
  },
  Zy = {
    class: "relative mt-2 rounded-md shadow-sm"
  },
  Xy = {
    class: "mt-2"
  },
  Jy = m("button", {
    type: "submit",
    class: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
  }, " Add ", -1),
  Qy = {
    role: "list",
    class: "divide-y divide-gray-100"
  },
  e0 = {
    class: "flex min-w-0 gap-x-4"
  },
  t0 = {
    class: "min-w-0 flex-auto"
  },
  a0 = {
    class: "text-sm font-semibold leading-6 text-gray-900"
  },
  n0 = ["onClick"],
  pl = ge({
    __name: "edit-tones-overlay",
    props: {
      isOpen: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["close"],
    setup(t) {
      const e = t,
        a = Ae.toneList,
        n = M(""),
        i = M(""),
        o = M(""),
        s = () => {
          if (n.value.length < 3) {
            i.value = "Tone must be at least 3 characters";
            return
          }
          if (n.value.length > 32) {
            i.value = "Tone must be less than 32 characters";
            return
          }
          if (a.includes(n.value)) {
            i.value = "Tone already exists";
            return
          }
          if (a.length >= 10) {
            i.value = "You can only have 10 tones";
            return
          }
          i.value = "", a.unshift(n.value), n.value = ""
        },
        r = l => {
          if (a.length === 1) {
            i.value = "You must have at least 1 tone";
            return
          }
          const u = a.indexOf(l);
          u > -1 && a.splice(u, 1)
        };
      return He(a, l => {
        Ae.setTone(l), console.info("toneList saved to appSettings")
      }), (l, u) => (H(), wt(F(_a), {
        as: "template",
        show: e.isOpen
      }, {
        default: K(() => [D(F(Wa), {
          as: "div",
          class: "relative z-10",
          onClose: u[2] || (u[2] = d => l.$emit("close"))
        }, {
          default: K(() => [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: K(() => [Hy]),
            _: 1
          }), m("div", Wy, [m("div", Gy, [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            default: K(() => [D(F(Ga), {
              class: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            }, {
              default: K(() => [D(F(Ac), {
                class: "h-4 w-4 text-gray-500 absolute top-4 right-4 cursor-pointer",
                "aria-hidden": "true",
                onClick: u[0] || (u[0] = d => l.$emit("close"))
              }), m("div", null, [m("div", Ky, [D(F(da), {
                as: "h3",
                class: "text-base font-semibold leading-6 text-gray-900"
              }, {
                default: K(() => [_e(" Edit Tones ")]),
                _: 1
              }), m("div", Yy, [m("div", null, [m("form", {
                id: "login-form",
                onSubmit: Br(s, ["prevent"])
              }, [m("div", Zy, [le(m("input", {
                "onUpdate:modelValue": u[1] || (u[1] = d => n.value = d),
                type: "text",
                class: "block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset xs:text-xs sm:leading-6 text-sm",
                placeholder: "eg. Customer Service",
                "aria-invalid": "true",
                min: "3",
                max: "32"
              }, null, 512), [
                [Lt, n.value]
              ])]), m("div", Xy, [Jy, le(m("p", {
                id: "sign-in-error",
                class: "mt-2 text-sm"
              }, be(o.value), 513), [
                [ke, o.value.length]
              ]), le(m("p", {
                id: "sign-in-error",
                class: "mt-2 text-sm text-red-600"
              }, be(i.value), 513), [
                [ke, i.value.length]
              ])])], 32), m("div", null, [m("ul", Qy, [(H(!0), ee(Ge, null, kn(F(a), d => (H(), ee("li", {
                key: d,
                class: "flex items-center justify-between gap-x-6 py-5"
              }, [m("div", e0, [m("div", t0, [m("p", a0, be(d), 1)])]), m("button", {
                class: "rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 hover:text-white hover:ring-red-500",
                onClick: c => r(d)
              }, " Delete ", 8, n0)]))), 128))])])])])])])]),
              _: 1
            })]),
            _: 1
          })])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["show"]))
    }
  });
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const Dn = typeof document < "u";

function i0(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module"
}
const Me = Object.assign;

function Es(t, e) {
  const a = {};
  for (const n in e) {
    const i = e[n];
    a[n] = Jt(i) ? i.map(t) : t(i)
  }
  return a
}
const wi = () => {},
  Jt = Array.isArray,
  Ih = /#/g,
  o0 = /&/g,
  s0 = /\//g,
  r0 = /=/g,
  l0 = /\?/g,
  $h = /\+/g,
  u0 = /%5B/g,
  d0 = /%5D/g,
  Mh = /%5E/g,
  c0 = /%60/g,
  Lh = /%7B/g,
  h0 = /%7C/g,
  Bh = /%7D/g,
  m0 = /%20/g;

function kl(t) {
  return encodeURI("" + t).replace(h0, "|").replace(u0, "[").replace(d0, "]")
}

function f0(t) {
  return kl(t).replace(Lh, "{").replace(Bh, "}").replace(Mh, "^")
}

function mr(t) {
  return kl(t).replace($h, "%2B").replace(m0, "+").replace(Ih, "%23").replace(o0, "%26").replace(c0, "`").replace(Lh, "{").replace(Bh, "}").replace(Mh, "^")
}

function g0(t) {
  return mr(t).replace(r0, "%3D")
}

function p0(t) {
  return kl(t).replace(Ih, "%23").replace(l0, "%3F")
}

function k0(t) {
  return t == null ? "" : p0(t).replace(s0, "%2F")
}

function Ri(t) {
  try {
    return decodeURIComponent("" + t)
  } catch {}
  return "" + t
}
const b0 = /\/$/,
  y0 = t => t.replace(b0, "");

function Cs(t, e, a = "/") {
  let n, i = {},
    o = "",
    s = "";
  const r = e.indexOf("#");
  let l = e.indexOf("?");
  return r < l && r >= 0 && (l = -1), l > -1 && (n = e.slice(0, l), o = e.slice(l + 1, r > -1 ? r : e.length), i = t(o)), r > -1 && (n = n || e.slice(0, r), s = e.slice(r, e.length)), n = x0(n ?? e, a), {
    fullPath: n + (o && "?") + o + s,
    path: n,
    query: i,
    hash: Ri(s)
  }
}

function v0(t, e) {
  const a = e.query ? t(e.query) : "";
  return e.path + (a && "?") + a + (e.hash || "")
}

function w0(t, e, a) {
  const n = e.matched.length - 1,
    i = a.matched.length - 1;
  return n > -1 && n === i && Zn(e.matched[n], a.matched[i]) && Nh(e.params, a.params) && t(e.query) === t(a.query) && e.hash === a.hash
}

function Zn(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e)
}

function Nh(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const a in t)
    if (!_0(t[a], e[a])) return !1;
  return !0
}

function _0(t, e) {
  return Jt(t) ? Uu(t, e) : Jt(e) ? Uu(e, t) : t === e
}

function Uu(t, e) {
  return Jt(e) ? t.length === e.length && t.every((a, n) => a === e[n]) : t.length === 1 && t[0] === e
}

function x0(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const a = e.split("/"),
    n = t.split("/"),
    i = n[n.length - 1];
  (i === ".." || i === ".") && n.push("");
  let o = a.length - 1,
    s, r;
  for (s = 0; s < n.length; s++)
    if (r = n[s], r !== ".")
      if (r === "..") o > 1 && o--;
      else break;
  return a.slice(0, o).join("/") + "/" + n.slice(s).join("/")
}
var Ii;
(function (t) {
  t.pop = "pop", t.push = "push"
})(Ii || (Ii = {}));
var Do;
(function (t) {
  t.back = "back", t.forward = "forward", t.unknown = ""
})(Do || (Do = {}));
const zs = "";

function j0(t) {
  if (!t)
    if (Dn) {
      const e = document.querySelector("base");
      t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "")
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), y0(t)
}
const E0 = /^[^#]+#/;

function C0(t, e) {
  return t.replace(E0, "#") + e
}

function z0(t, e) {
  const a = document.documentElement.getBoundingClientRect(),
    n = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: n.left - a.left - (e.left || 0),
    top: n.top - a.top - (e.top || 0)
  }
}
const S0 = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function T0(t) {
  let e;
  if ("el" in t) {
    const a = t.el,
      n = typeof a == "string" && a.startsWith("#"),
      i = typeof a == "string" ? n ? document.getElementById(a.slice(1)) : document.querySelector(a) : a;
    if (!i) return;
    e = z0(i, t)
  } else e = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY)
}

function Vu(t, e) {
  return (history.state ? history.state.position - e : -1) + t
}
const fr = new Map;

function A0(t, e) {
  fr.set(t, e)
}

function D0(t) {
  const e = fr.get(t);
  return fr.delete(t), e
}

function O0(t = "") {
  let e = [],
    a = [zs],
    n = 0;
  t = j0(t);

  function i(r) {
    n++, n !== a.length && a.splice(n), a.push(r)
  }

  function o(r, l, {
    direction: u,
    delta: d
  }) {
    const c = {
      direction: u,
      delta: d,
      type: Ii.pop
    };
    for (const h of e) h(r, l, c)
  }
  const s = {
    location: zs,
    state: {},
    base: t,
    createHref: C0.bind(null, t),
    replace(r) {
      a.splice(n--, 1), i(r)
    },
    push(r, l) {
      i(r)
    },
    listen(r) {
      return e.push(r), () => {
        const l = e.indexOf(r);
        l > -1 && e.splice(l, 1)
      }
    },
    destroy() {
      e = [], a = [zs], n = 0
    },
    go(r, l = !0) {
      const u = this.location,
        d = r < 0 ? Do.back : Do.forward;
      n = Math.max(0, Math.min(n + r, a.length - 1)), l && o(this.location, u, {
        direction: d,
        delta: r
      })
    }
  };
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => a[n]
  }), s
}

function F0(t) {
  return typeof t == "string" || t && typeof t == "object"
}

function qh(t) {
  return typeof t == "string" || typeof t == "symbol"
}
const Ca = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  Uh = Symbol("");
var Hu;
(function (t) {
  t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated"
})(Hu || (Hu = {}));

function Xn(t, e) {
  return Me(new Error, {
    type: t,
    [Uh]: !0
  }, e)
}

function fa(t, e) {
  return t instanceof Error && Uh in t && (e == null || !!(t.type & e))
}
const Wu = "[^/]+?",
  P0 = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  },
  R0 = /[.+*?^${}()[\]/\\]/g;

function I0(t, e) {
  const a = Me({}, P0, e),
    n = [];
  let i = a.start ? "^" : "";
  const o = [];
  for (const u of t) {
    const d = u.length ? [] : [90];
    a.strict && !u.length && (i += "/");
    for (let c = 0; c < u.length; c++) {
      const h = u[c];
      let f = 40 + (a.sensitive ? .25 : 0);
      if (h.type === 0) c || (i += "/"), i += h.value.replace(R0, "\\$&"), f += 40;
      else if (h.type === 1) {
        const {
          value: p,
          repeatable: g,
          optional: k,
          regexp: w
        } = h;
        o.push({
          name: p,
          repeatable: g,
          optional: k
        });
        const y = w || Wu;
        if (y !== Wu) {
          f += 10;
          try {
            new RegExp(`(${y})`)
          } catch (v) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${y}): ` + v.message)
          }
        }
        let j = g ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        c || (j = k && u.length < 2 ? `(?:/${j})` : "/" + j), k && (j += "?"), i += j, f += 20, k && (f += -8), g && (f += -20), y === ".*" && (f += -50)
      }
      d.push(f)
    }
    n.push(d)
  }
  if (a.strict && a.end) {
    const u = n.length - 1;
    n[u][n[u].length - 1] += .7000000000000001
  }
  a.strict || (i += "/?"), a.end ? i += "$" : a.strict && (i += "(?:/|$)");
  const s = new RegExp(i, a.sensitive ? "" : "i");

  function r(u) {
    const d = u.match(s),
      c = {};
    if (!d) return null;
    for (let h = 1; h < d.length; h++) {
      const f = d[h] || "",
        p = o[h - 1];
      c[p.name] = f && p.repeatable ? f.split("/") : f
    }
    return c
  }

  function l(u) {
    let d = "",
      c = !1;
    for (const h of t) {
      (!c || !d.endsWith("/")) && (d += "/"), c = !1;
      for (const f of h)
        if (f.type === 0) d += f.value;
        else if (f.type === 1) {
        const {
          value: p,
          repeatable: g,
          optional: k
        } = f, w = p in u ? u[p] : "";
        if (Jt(w) && !g) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
        const y = Jt(w) ? w.join("/") : w;
        if (!y)
          if (k) h.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : c = !0);
          else throw new Error(`Missing required param "${p}"`);
        d += y
      }
    }
    return d || "/"
  }
  return {
    re: s,
    score: n,
    keys: o,
    parse: r,
    stringify: l
  }
}

function $0(t, e) {
  let a = 0;
  for (; a < t.length && a < e.length;) {
    const n = e[a] - t[a];
    if (n) return n;
    a++
  }
  return t.length < e.length ? t.length === 1 && t[0] === 40 + 40 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0
}

function M0(t, e) {
  let a = 0;
  const n = t.score,
    i = e.score;
  for (; a < n.length && a < i.length;) {
    const o = $0(n[a], i[a]);
    if (o) return o;
    a++
  }
  if (Math.abs(i.length - n.length) === 1) {
    if (Gu(n)) return 1;
    if (Gu(i)) return -1
  }
  return i.length - n.length
}

function Gu(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0
}
const L0 = {
    type: 0,
    value: ""
  },
  B0 = /[a-zA-Z0-9_]/;

function N0(t) {
  if (!t) return [
    []
  ];
  if (t === "/") return [
    [L0]
  ];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);

  function e(f) {
    throw new Error(`ERR (${a})/"${u}": ${f}`)
  }
  let a = 0,
    n = a;
  const i = [];
  let o;

  function s() {
    o && i.push(o), o = []
  }
  let r = 0,
    l, u = "",
    d = "";

  function c() {
    u && (a === 0 ? o.push({
      type: 0,
      value: u
    }) : a === 1 || a === 2 || a === 3 ? (o.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), o.push({
      type: 1,
      value: u,
      regexp: d,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : e("Invalid state to consume buffer"), u = "")
  }

  function h() {
    u += l
  }
  for (; r < t.length;) {
    if (l = t[r++], l === "\\" && a !== 2) {
      n = a, a = 4;
      continue
    }
    switch (a) {
      case 0:
        l === "/" ? (u && c(), s()) : l === ":" ? (c(), a = 1) : h();
        break;
      case 4:
        h(), a = n;
        break;
      case 1:
        l === "(" ? a = 2 : B0.test(l) ? h() : (c(), a = 0, l !== "*" && l !== "?" && l !== "+" && r--);
        break;
      case 2:
        l === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + l : a = 3 : d += l;
        break;
      case 3:
        c(), a = 0, l !== "*" && l !== "?" && l !== "+" && r--, d = "";
        break;
      default:
        e("Unknown state");
        break
    }
  }
  return a === 2 && e(`Unfinished custom RegExp for param "${u}"`), c(), s(), i
}

function q0(t, e, a) {
  const n = I0(N0(t.path), a),
    i = Me(n, {
      record: t,
      parent: e,
      children: [],
      alias: []
    });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i
}

function U0(t, e) {
  const a = [],
    n = new Map;
  e = Zu({
    strict: !1,
    end: !0,
    sensitive: !1
  }, e);

  function i(d) {
    return n.get(d)
  }

  function o(d, c, h) {
    const f = !h,
      p = V0(d);
    p.aliasOf = h && h.record;
    const g = Zu(e, d),
      k = [p];
    if ("alias" in d) {
      const j = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const v of j) k.push(Me({}, p, {
        components: h ? h.record.components : p.components,
        path: v,
        aliasOf: h ? h.record : p
      }))
    }
    let w, y;
    for (const j of k) {
      const {
        path: v
      } = j;
      if (c && v[0] !== "/") {
        const E = c.record.path,
          C = E[E.length - 1] === "/" ? "" : "/";
        j.path = c.record.path + (v && C + v)
      }
      if (w = q0(j, c, g), h ? h.alias.push(w) : (y = y || w, y !== w && y.alias.push(w), f && d.name && !Yu(w) && s(d.name)), p.children) {
        const E = p.children;
        for (let C = 0; C < E.length; C++) o(E[C], w, h && h.children[C])
      }
      h = h || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && l(w)
    }
    return y ? () => {
      s(y)
    } : wi
  }

  function s(d) {
    if (qh(d)) {
      const c = n.get(d);
      c && (n.delete(d), a.splice(a.indexOf(c), 1), c.children.forEach(s), c.alias.forEach(s))
    } else {
      const c = a.indexOf(d);
      c > -1 && (a.splice(c, 1), d.record.name && n.delete(d.record.name), d.children.forEach(s), d.alias.forEach(s))
    }
  }

  function r() {
    return a
  }

  function l(d) {
    let c = 0;
    for (; c < a.length && M0(d, a[c]) >= 0 && (d.record.path !== a[c].record.path || !Vh(d, a[c]));) c++;
    a.splice(c, 0, d), d.record.name && !Yu(d) && n.set(d.record.name, d)
  }

  function u(d, c) {
    let h, f = {},
      p, g;
    if ("name" in d && d.name) {
      if (h = n.get(d.name), !h) throw Xn(1, {
        location: d
      });
      g = h.record.name, f = Me(Ku(c.params, h.keys.filter(y => !y.optional).concat(h.parent ? h.parent.keys.filter(y => y.optional) : []).map(y => y.name)), d.params && Ku(d.params, h.keys.map(y => y.name))), p = h.stringify(f)
    } else if (d.path != null) p = d.path, h = a.find(y => y.re.test(p)), h && (f = h.parse(p), g = h.record.name);
    else {
      if (h = c.name ? n.get(c.name) : a.find(y => y.re.test(c.path)), !h) throw Xn(1, {
        location: d,
        currentLocation: c
      });
      g = h.record.name, f = Me({}, c.params, d.params), p = h.stringify(f)
    }
    const k = [];
    let w = h;
    for (; w;) k.unshift(w.record), w = w.parent;
    return {
      name: g,
      path: p,
      params: f,
      matched: k,
      meta: W0(k)
    }
  }
  return t.forEach(d => o(d)), {
    addRoute: o,
    resolve: u,
    removeRoute: s,
    getRoutes: r,
    getRecordMatcher: i
  }
}

function Ku(t, e) {
  const a = {};
  for (const n of e) n in t && (a[n] = t[n]);
  return a
}

function V0(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: H0(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set,
    updateGuards: new Set,
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && {
      default: t.component
    }
  }
}

function H0(t) {
  const e = {},
    a = t.props || !1;
  if ("component" in t) e.default = a;
  else
    for (const n in t.components) e[n] = typeof a == "object" ? a[n] : a;
  return e
}

function Yu(t) {
  for (; t;) {
    if (t.record.aliasOf) return !0;
    t = t.parent
  }
  return !1
}

function W0(t) {
  return t.reduce((e, a) => Me(e, a.meta), {})
}

function Zu(t, e) {
  const a = {};
  for (const n in t) a[n] = n in e ? e[n] : t[n];
  return a
}

function Vh(t, e) {
  return e.children.some(a => a === t || Vh(t, a))
}

function G0(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const n = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let i = 0; i < n.length; ++i) {
    const o = n[i].replace($h, " "),
      s = o.indexOf("="),
      r = Ri(s < 0 ? o : o.slice(0, s)),
      l = s < 0 ? null : Ri(o.slice(s + 1));
    if (r in e) {
      let u = e[r];
      Jt(u) || (u = e[r] = [u]), u.push(l)
    } else e[r] = l
  }
  return e
}

function Xu(t) {
  let e = "";
  for (let a in t) {
    const n = t[a];
    if (a = g0(a), n == null) {
      n !== void 0 && (e += (e.length ? "&" : "") + a);
      continue
    }(Jt(n) ? n.map(o => o && mr(o)) : [n && mr(n)]).forEach(o => {
      o !== void 0 && (e += (e.length ? "&" : "") + a, o != null && (e += "=" + o))
    })
  }
  return e
}

function K0(t) {
  const e = {};
  for (const a in t) {
    const n = t[a];
    n !== void 0 && (e[a] = Jt(n) ? n.map(i => i == null ? null : "" + i) : n == null ? n : "" + n)
  }
  return e
}
const Y0 = Symbol(""),
  Ju = Symbol(""),
  bl = Symbol(""),
  Hh = Symbol(""),
  gr = Symbol("");

function si() {
  let t = [];

  function e(n) {
    return t.push(n), () => {
      const i = t.indexOf(n);
      i > -1 && t.splice(i, 1)
    }
  }

  function a() {
    t = []
  }
  return {
    add: e,
    list: () => t.slice(),
    reset: a
  }
}

function Da(t, e, a, n, i, o = s => s()) {
  const s = n && (n.enterCallbacks[i] = n.enterCallbacks[i] || []);
  return () => new Promise((r, l) => {
    const u = h => {
        h === !1 ? l(Xn(4, {
          from: a,
          to: e
        })) : h instanceof Error ? l(h) : F0(h) ? l(Xn(2, {
          from: e,
          to: h
        })) : (s && n.enterCallbacks[i] === s && typeof h == "function" && s.push(h), r())
      },
      d = o(() => t.call(n && n.instances[i], e, a, u));
    let c = Promise.resolve(d);
    t.length < 3 && (c = c.then(u)), c.catch(h => l(h))
  })
}

function Ss(t, e, a, n, i = o => o()) {
  const o = [];
  for (const s of t)
    for (const r in s.components) {
      let l = s.components[r];
      if (!(e !== "beforeRouteEnter" && !s.instances[r]))
        if (Z0(l)) {
          const d = (l.__vccOpts || l)[e];
          d && o.push(Da(d, a, n, s, r, i))
        } else {
          let u = l();
          o.push(() => u.then(d => {
            if (!d) return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${s.path}"`));
            const c = i0(d) ? d.default : d;
            s.components[r] = c;
            const f = (c.__vccOpts || c)[e];
            return f && Da(f, a, n, s, r, i)()
          }))
        }
    }
  return o
}

function Z0(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t
}

function Qu(t) {
  const e = Re(bl),
    a = Re(Hh),
    n = N(() => e.resolve(F(t.to))),
    i = N(() => {
      const {
        matched: l
      } = n.value, {
        length: u
      } = l, d = l[u - 1], c = a.matched;
      if (!d || !c.length) return -1;
      const h = c.findIndex(Zn.bind(null, d));
      if (h > -1) return h;
      const f = ed(l[u - 2]);
      return u > 1 && ed(d) === f && c[c.length - 1].path !== f ? c.findIndex(Zn.bind(null, l[u - 2])) : h
    }),
    o = N(() => i.value > -1 && ev(a.params, n.value.params)),
    s = N(() => i.value > -1 && i.value === a.matched.length - 1 && Nh(a.params, n.value.params));

  function r(l = {}) {
    return Q0(l) ? e[F(t.replace) ? "replace" : "push"](F(t.to)).catch(wi) : Promise.resolve()
  }
  return {
    route: n,
    href: N(() => n.value.href),
    isActive: o,
    isExactActive: s,
    navigate: r
  }
}
const X0 = ge({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [String, Object],
        required: !0
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink: Qu,
    setup(t, {
      slots: e
    }) {
      const a = ha(Qu(t)),
        {
          options: n
        } = Re(bl),
        i = N(() => ({
          [td(t.activeClass, n.linkActiveClass, "router-link-active")]: a.isActive,
          [td(t.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: a.isExactActive
        }));
      return () => {
        const o = e.default && e.default(a);
        return t.custom ? o : Oe("a", {
          "aria-current": a.isExactActive ? t.ariaCurrentValue : null,
          href: a.href,
          onClick: a.navigate,
          class: i.value
        }, o)
      }
    }
  }),
  J0 = X0;

function Q0(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return
    }
    return t.preventDefault && t.preventDefault(), !0
  }
}

function ev(t, e) {
  for (const a in e) {
    const n = e[a],
      i = t[a];
    if (typeof n == "string") {
      if (n !== i) return !1
    } else if (!Jt(i) || i.length !== n.length || n.some((o, s) => o !== i[s])) return !1
  }
  return !0
}

function ed(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}
const td = (t, e, a) => t ?? e ?? a,
  tv = ge({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(t, {
      attrs: e,
      slots: a
    }) {
      const n = Re(gr),
        i = N(() => t.route || n.value),
        o = Re(Ju, 0),
        s = N(() => {
          let u = F(o);
          const {
            matched: d
          } = i.value;
          let c;
          for (;
            (c = d[u]) && !c.components;) u++;
          return u
        }),
        r = N(() => i.value.matched[s.value]);
      ct(Ju, N(() => s.value + 1)), ct(Y0, r), ct(gr, i);
      const l = M();
      return He(() => [l.value, r.value, t.name], ([u, d, c], [h, f, p]) => {
        d && (d.instances[c] = u, f && f !== d && u && u === h && (d.leaveGuards.size || (d.leaveGuards = f.leaveGuards), d.updateGuards.size || (d.updateGuards = f.updateGuards))), u && d && (!f || !Zn(d, f) || !h) && (d.enterCallbacks[c] || []).forEach(g => g(u))
      }, {
        flush: "post"
      }), () => {
        const u = i.value,
          d = t.name,
          c = r.value,
          h = c && c.components[d];
        if (!h) return ad(a.default, {
          Component: h,
          route: u
        });
        const f = c.props[d],
          p = f ? f === !0 ? u.params : typeof f == "function" ? f(u) : f : null,
          k = Oe(h, Me({}, p, e, {
            onVnodeUnmounted: w => {
              w.component.isUnmounted && (c.instances[d] = null)
            },
            ref: l
          }));
        return ad(a.default, {
          Component: k,
          route: u
        }) || k
      }
    }
  });

function ad(t, e) {
  if (!t) return null;
  const a = t(e);
  return a.length === 1 ? a[0] : a
}
const av = tv;

function nv(t) {
  const e = U0(t.routes, t),
    a = t.parseQuery || G0,
    n = t.stringifyQuery || Xu,
    i = t.history,
    o = si(),
    s = si(),
    r = si(),
    l = Ar(Ca);
  let u = Ca;
  Dn && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = Es.bind(null, R => "" + R),
    c = Es.bind(null, k0),
    h = Es.bind(null, Ri);

  function f(R, Y) {
    let W, ne;
    return qh(R) ? (W = e.getRecordMatcher(R), ne = Y) : ne = R, e.addRoute(ne, W)
  }

  function p(R) {
    const Y = e.getRecordMatcher(R);
    Y && e.removeRoute(Y)
  }

  function g() {
    return e.getRoutes().map(R => R.record)
  }

  function k(R) {
    return !!e.getRecordMatcher(R)
  }

  function w(R, Y) {
    if (Y = Me({}, Y || l.value), typeof R == "string") {
      const x = Cs(a, R, Y.path),
        A = e.resolve({
          path: x.path
        }, Y),
        I = i.createHref(x.fullPath);
      return Me(x, A, {
        params: h(A.params),
        hash: Ri(x.hash),
        redirectedFrom: void 0,
        href: I
      })
    }
    let W;
    if (R.path != null) W = Me({}, R, {
      path: Cs(a, R.path, Y.path).path
    });
    else {
      const x = Me({}, R.params);
      for (const A in x) x[A] == null && delete x[A];
      W = Me({}, R, {
        params: c(x)
      }), Y.params = c(Y.params)
    }
    const ne = e.resolve(W, Y),
      je = R.hash || "";
    ne.params = d(h(ne.params));
    const Ie = v0(n, Me({}, R, {
        hash: f0(je),
        path: ne.path
      })),
      b = i.createHref(Ie);
    return Me({
      fullPath: Ie,
      hash: je,
      query: n === Xu ? K0(R.query) : R.query || {}
    }, ne, {
      redirectedFrom: void 0,
      href: b
    })
  }

  function y(R) {
    return typeof R == "string" ? Cs(a, R, l.value.path) : Me({}, R)
  }

  function j(R, Y) {
    if (u !== R) return Xn(8, {
      from: Y,
      to: R
    })
  }

  function v(R) {
    return T(R)
  }

  function E(R) {
    return v(Me(y(R), {
      replace: !0
    }))
  }

  function C(R) {
    const Y = R.matched[R.matched.length - 1];
    if (Y && Y.redirect) {
      const {
        redirect: W
      } = Y;
      let ne = typeof W == "function" ? W(R) : W;
      return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = y(ne) : {
        path: ne
      }, ne.params = {}), Me({
        query: R.query,
        hash: R.hash,
        params: ne.path != null ? {} : R.params
      }, ne)
    }
  }

  function T(R, Y) {
    const W = u = w(R),
      ne = l.value,
      je = R.state,
      Ie = R.force,
      b = R.replace === !0,
      x = C(W);
    if (x) return T(Me(y(x), {
      state: typeof x == "object" ? Me({}, je, x.state) : je,
      force: Ie,
      replace: b
    }), Y || W);
    const A = W;
    A.redirectedFrom = Y;
    let I;
    return !Ie && w0(n, ne, W) && (I = Xn(16, {
      to: A,
      from: ne
    }), he(ne, ne, !0, !1)), (I ? Promise.resolve(I) : S(A, ne)).catch(P => fa(P) ? fa(P, 2) ? P : rt(P) : se(P, A, ne)).then(P => {
      if (P) {
        if (fa(P, 2)) return T(Me({
          replace: b
        }, y(P.to), {
          state: typeof P.to == "object" ? Me({}, je, P.to.state) : je,
          force: Ie
        }), Y || A)
      } else P = O(A, ne, !0, b, je);
      return $(A, ne, P), P
    })
  }

  function _(R, Y) {
    const W = j(R, Y);
    return W ? Promise.reject(W) : Promise.resolve()
  }

  function z(R) {
    const Y = Ce.values().next().value;
    return Y && typeof Y.runWithContext == "function" ? Y.runWithContext(R) : R()
  }

  function S(R, Y) {
    let W;
    const [ne, je, Ie] = iv(R, Y);
    W = Ss(ne.reverse(), "beforeRouteLeave", R, Y);
    for (const x of ne) x.leaveGuards.forEach(A => {
      W.push(Da(A, R, Y))
    });
    const b = _.bind(null, R, Y);
    return W.push(b), Ze(W).then(() => {
      W = [];
      for (const x of o.list()) W.push(Da(x, R, Y));
      return W.push(b), Ze(W)
    }).then(() => {
      W = Ss(je, "beforeRouteUpdate", R, Y);
      for (const x of je) x.updateGuards.forEach(A => {
        W.push(Da(A, R, Y))
      });
      return W.push(b), Ze(W)
    }).then(() => {
      W = [];
      for (const x of Ie)
        if (x.beforeEnter)
          if (Jt(x.beforeEnter))
            for (const A of x.beforeEnter) W.push(Da(A, R, Y));
          else W.push(Da(x.beforeEnter, R, Y));
      return W.push(b), Ze(W)
    }).then(() => (R.matched.forEach(x => x.enterCallbacks = {}), W = Ss(Ie, "beforeRouteEnter", R, Y, z), W.push(b), Ze(W))).then(() => {
      W = [];
      for (const x of s.list()) W.push(Da(x, R, Y));
      return W.push(b), Ze(W)
    }).catch(x => fa(x, 8) ? x : Promise.reject(x))
  }

  function $(R, Y, W) {
    r.list().forEach(ne => z(() => ne(R, Y, W)))
  }

  function O(R, Y, W, ne, je) {
    const Ie = j(R, Y);
    if (Ie) return Ie;
    const b = Y === Ca,
      x = Dn ? history.state : {};
    W && (ne || b ? i.replace(R.fullPath, Me({
      scroll: b && x && x.scroll
    }, je)) : i.push(R.fullPath, je)), l.value = R, he(R, Y, W, b), rt()
  }
  let L;

  function Q() {
    L || (L = i.listen((R, Y, W) => {
      if (!ht.listening) return;
      const ne = w(R),
        je = C(ne);
      if (je) {
        T(Me(je, {
          replace: !0
        }), ne).catch(wi);
        return
      }
      u = ne;
      const Ie = l.value;
      Dn && A0(Vu(Ie.fullPath, W.delta), S0()), S(ne, Ie).catch(b => fa(b, 12) ? b : fa(b, 2) ? (T(b.to, ne).then(x => {
        fa(x, 20) && !W.delta && W.type === Ii.pop && i.go(-1, !1)
      }).catch(wi), Promise.reject()) : (W.delta && i.go(-W.delta, !1), se(b, ne, Ie))).then(b => {
        b = b || O(ne, Ie, !1), b && (W.delta && !fa(b, 8) ? i.go(-W.delta, !1) : W.type === Ii.pop && fa(b, 20) && i.go(-1, !1)), $(ne, Ie, b)
      }).catch(wi)
    }))
  }
  let te = si(),
    J = si(),
    ae;

  function se(R, Y, W) {
    rt(R);
    const ne = J.list();
    return ne.length ? ne.forEach(je => je(R, Y, W)) : console.error(R), Promise.reject(R)
  }

  function tt() {
    return ae && l.value !== Ca ? Promise.resolve() : new Promise((R, Y) => {
      te.add([R, Y])
    })
  }

  function rt(R) {
    return ae || (ae = !R, Q(), te.list().forEach(([Y, W]) => R ? W(R) : Y()), te.reset()), R
  }

  function he(R, Y, W, ne) {
    const {
      scrollBehavior: je
    } = t;
    if (!Dn || !je) return Promise.resolve();
    const Ie = !W && D0(Vu(R.fullPath, 0)) || (ne || !W) && history.state && history.state.scroll || null;
    return ut().then(() => je(R, Y, Ie)).then(b => b && T0(b)).catch(b => se(b, R, Y))
  }
  const de = R => i.go(R);
  let We;
  const Ce = new Set,
    ht = {
      currentRoute: l,
      listening: !0,
      addRoute: f,
      removeRoute: p,
      hasRoute: k,
      getRoutes: g,
      resolve: w,
      options: t,
      push: v,
      replace: E,
      go: de,
      back: () => de(-1),
      forward: () => de(1),
      beforeEach: o.add,
      beforeResolve: s.add,
      afterEach: r.add,
      onError: J.add,
      isReady: tt,
      install(R) {
        const Y = this;
        R.component("RouterLink", J0), R.component("RouterView", av), R.config.globalProperties.$router = Y, Object.defineProperty(R.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => F(l)
        }), Dn && !We && l.value === Ca && (We = !0, v(i.location).catch(je => {}));
        const W = {};
        for (const je in Ca) Object.defineProperty(W, je, {
          get: () => l.value[je],
          enumerable: !0
        });
        R.provide(bl, Y), R.provide(Hh, xd(W)), R.provide(gr, l);
        const ne = R.unmount;
        Ce.add(R), R.unmount = function () {
          Ce.delete(R), Ce.size < 1 && (u = Ca, L && L(), L = null, l.value = Ca, We = !1, ae = !1), ne()
        }
      }
    };

  function Ze(R) {
    return R.reduce((Y, W) => Y.then(() => z(W)), Promise.resolve())
  }
  return ht
}

function iv(t, e) {
  const a = [],
    n = [],
    i = [],
    o = Math.max(e.matched.length, t.matched.length);
  for (let s = 0; s < o; s++) {
    const r = e.matched[s];
    r && (t.matched.find(u => Zn(u, r)) ? n.push(r) : a.push(r));
    const l = t.matched[s];
    l && (e.matched.find(u => Zn(u, l)) || i.push(l))
  }
  return [a, n, i]
}

function yl(t) {
  console.warn("removeElementsFromPage:", t);
  for (const e of t) {
    console.log(`selector: ${e}`);
    const a = document.querySelectorAll(e);
    for (const n of a) n.remove()
  }
  return document
}

function vl(t, e) {
  const a = document.querySelector(e),
    n = (i, o) => {
      const s = r => {
        for (const l of i)
          if (r.matches(l)) return !0;
        return !1
      };
      console.log("context:"), console.log(o.childNodes);
      for (let r = o.childNodes.length - 1; r >= 0; r--) {
        const l = o.childNodes[r];
        if (console.log("checking element:"), console.log(l), l.nodeType === Node.TEXT_NODE) console.log("Removing text node:", l), l.remove();
        else if (l.nodeType === Node.ELEMENT_NODE) {
          const u = l;
          if (s(l)) {
            console.log("Matched selector:", l);
            continue
          } else u.children.length > 0 ? (console.log("Recursively calling function with child:", l), n(i, u)) : (console.log("Removing element:", l), l.remove());
          u.children.length === 0 && l.remove()
        }
      }
    };
  n(t, a)
}

function wl(t, e) {
  const a = document.querySelector(e),
    n = document.createElement("div");
  n.innerHTML = t, a.prepend(n)
}

function _l(t) {
  return console.log(document.title), console.log(`selector: ${t}`), document.querySelector(t).innerHTML
}

function xl(t) {
  return console.log(document.title), console.log(`selector: ${t}`), document.querySelector(t).outerHTML
}
const ov = async t => {
  const e = await Ui();
  if (!e) throw new Error("No tab");
  console.log(`tab: ${e}`);
  const a = await chrome.scripting.executeScript({
    target: {
      tabId: e.id
    },
    func: _l,
    args: [t]
  });
  return console.log(`result: ${a[0].result}`), new DOMParser().parseFromString(a[0].result, "text/html")
}, sv = async () => {
  try {
    const t = await Wh('img[is-professionally-active="true"]');
    console.log(t);
    const e = t.querySelector('img[is-professionally-active="true"]'),
      a = e.getAttribute("message-region-id"),
      n = e.getAttribute("host-name");
    return {
      id: a,
      hostName: n
    }
  } catch (t) {
    throw console.error(t), new Error("Create a new email and then select the NEURespond icon adjacent to the send button.")
  }
}, Wh = async t => {
  const e = await Ui();
  if (!e) throw new Error("No tab");
  console.log(`tab: ${e}`);
  const a = await chrome.scripting.executeScript({
    target: {
      tabId: e.id
    },
    func: xl,
    args: [t]
  });
  if (console.log(`result: ${a[0].result}`), !a[0].result) throw new Error("No result");
  return new DOMParser().parseFromString(a[0].result, "text/html")
}, rv = async t => {
  const e = await Ui();
  if (!e) throw new Error("No tab");
  console.log(`tab: ${e}`);
  const a = await chrome.scripting.executeScript({
    target: {
      tabId: e.id
    },
    func: yl,
    args: [t]
  });
  return console.log(`result: ${a[0].result}`), a[0].result
};
async function lv(t, e) {
  const a = await Ui();
  if (!a) throw new Error("No tab");
  console.log(`tab: ${a}`), await chrome.scripting.executeScript({
    target: {
      tabId: a.id
    },
    func: vl,
    args: [t, e]
  })
}
async function uv(t, e) {
  const a = await Ui();
  if (!a) throw new Error("No tab");
  console.log(`tab: ${a}`);
  const n = await chrome.scripting.executeScript({
    target: {
      tabId: a.id
    },
    func: wl,
    args: [t, e]
  });
  return console.log(`result: ${n[0].result}`), n[0].result
}
async function Ui() {
  const t = {
      active: !0,
      lastFocusedWindow: !0
    },
    [e] = await chrome.tabs.query(t);
  return e
}
const dv = Object.freeze(Object.defineProperty({
    __proto__: null,
    getFocusedElementData: sv,
    getInnerElement: ov,
    getOuterElement: Wh,
    insertMessageToBody: uv,
    removeElements: rv,
    removeElementsFromContextExcept: lv
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  cv = async t => {
    const e = await Vi();
    if (!e) throw new Error("No tab");
    console.log(`tab: ${e}`);
    const a = await chrome.scripting.executeScript({
      target: {
        tabId: e.id
      },
      func: _l,
      args: [t]
    });
    return console.log(`result: ${a[0].result}`), new DOMParser().parseFromString(a[0].result, "text/html")
  }, hv = async () => {
    try {
      const t = await Gh('img[is-professionally-active="true"]');
      console.log(t);
      const e = t.querySelector('img[is-professionally-active="true"]'),
        a = e.getAttribute("message-region-id"),
        n = e.getAttribute("host-name");
      return {
        id: a,
        hostName: n
      }
    } catch (t) {
      throw console.error(t), new Error("Create a new email and then select the NEURespond icon adjacent to the send button.")
    }
  }, Gh = async t => {
    const e = await Vi();
    if (!e) throw new Error("No tab");
    console.log(`tab: ${e}`);
    const a = await chrome.scripting.executeScript({
      target: {
        tabId: e.id
      },
      func: xl,
      args: [t]
    });
    if (console.log(`result: ${a[0].result}`), !a[0].result) throw new Error("No result");
    return new DOMParser().parseFromString(a[0].result, "text/html")
  }, mv = async t => {
    const e = await Vi();
    if (!e) throw new Error("No tab");
    console.log(`tab: ${e}`);
    const a = await chrome.scripting.executeScript({
      target: {
        tabId: e.id
      },
      func: yl,
      args: [t]
    });
    return console.log(`result: ${a[0].result}`), a[0].result
  };
async function fv(t, e) {
  const a = await Vi();
  if (!a) throw new Error("No tab");
  console.log(`tab: ${a}`), await chrome.scripting.executeScript({
    target: {
      tabId: a.id
    },
    func: vl,
    args: [t, e]
  })
}
async function gv(t, e) {
  const a = await Vi();
  if (!a) throw new Error("No tab");
  console.log(`tab: ${a}`);
  const n = await chrome.scripting.executeScript({
    target: {
      tabId: a.id
    },
    func: wl,
    args: [t, e]
  });
  return console.log(`result: ${n[0].result}`), n[0].result
}
async function Vi() {
  const t = {
      active: !0,
      lastFocusedWindow: !0
    },
    [e] = await chrome.tabs.query(t);
  return e
}
const pv = Object.freeze(Object.defineProperty({
    __proto__: null,
    getFocusedElementData: hv,
    getInnerElement: cv,
    getOuterElement: Gh,
    insertMessageToBody: gv,
    removeElements: mv,
    removeElementsFromContextExcept: fv
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  kv = async t => {
    const e = await Hi();
    if (!e) throw new Error("No tab");
    console.log(`tab: ${e}`);
    const a = await chrome.scripting.executeScript({
      target: {
        tabId: e.id
      },
      func: _l,
      args: [t]
    });
    return console.log(`result: ${a[0].result}`), new DOMParser().parseFromString(a[0].result, "text/html")
  }, bv = async () => {
    try {
      const t = await Kh('img[is-professionally-active="true"]');
      console.log(t);
      const e = t.querySelector('img[is-professionally-active="true"]'),
        a = e.getAttribute("message-region-id"),
        n = e.getAttribute("host-name");
      return {
        id: a,
        hostName: n
      }
    } catch (t) {
      throw console.error(t), new Error("Create a new email and then select the NEURespond icon adjacent to the send button.")
    }
  }, Kh = async t => {
    const e = await Hi();
    if (!e) throw new Error("No tab");
    console.log(`tab: ${e}`);
    const a = await chrome.scripting.executeScript({
      target: {
        tabId: e.id
      },
      func: xl,
      args: [t]
    });
    if (console.log(`result: ${a[0].result}`), !a[0].result) throw new Error("No result");
    return new DOMParser().parseFromString(a[0].result, "text/html")
  }, yv = async t => {
    const e = await Hi();
    if (!e) throw new Error("No tab");
    console.log(`tab: ${e}`);
    const a = await chrome.scripting.executeScript({
      target: {
        tabId: e.id
      },
      func: yl,
      args: [t]
    });
    return console.log(`result: ${a[0].result}`), a[0].result
  };
async function vv(t, e) {
  const a = await Hi();
  if (!a) throw new Error("No tab");
  console.log(`tab: ${a}`), await chrome.scripting.executeScript({
    target: {
      tabId: a.id
    },
    func: vl,
    args: [t, e]
  })
}
async function wv(t, e) {
  const a = await Hi();
  if (!a) throw new Error("No tab");
  console.log(`tab: ${a}`);
  const n = await chrome.scripting.executeScript({
    target: {
      tabId: a.id
    },
    func: wl,
    args: [t, e]
  });
  return console.log(`result: ${n[0].result}`), n[0].result
}
async function Hi() {
  const t = {
      active: !0,
      lastFocusedWindow: !0
    },
    [e] = await chrome.tabs.query(t);
  return e
}
const _v = Object.freeze(Object.defineProperty({
    __proto__: null,
    getFocusedElementData: bv,
    getInnerElement: kv,
    getOuterElement: Kh,
    insertMessageToBody: wv,
    removeElements: yv,
    removeElementsFromContextExcept: vv
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  xv = Object.freeze(Object.defineProperty({
    __proto__: null,
    chrome: dv,
    edge: pv,
    safari: _v
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Yh = El(),
  _i = xv[Yh];
console.log(`browser: ${Yh}`);
async function jv(t, e, a, n, i) {
  return console.info(t.isAuthenticated()), t.isAuthenticated() || await t.renewToken(), t.performActionOnText(e, a, n, i)
}
async function Ev() {
  var r;
  const t = await _i.getFocusedElementData();
  console.log(t.id);
  const a = `#${sm(t.id)} ${po[t.hostName].messageSection}`,
    n = await _i.getInnerElement(a),
    i = po[t.hostName].elementsToNotRead;
  for (const l of i) console.log(`selector: ${l}`), (r = n.querySelector(l)) == null || r.remove();
  const o = n.body.innerHTML.replaceAll(/<br\s*\/?>/gi, ` 
 `),
    s = document.createElement("div");
  return s.innerHTML = o, s.textContent
}
async function Cv(t) {
  const e = await _i.getFocusedElementData(),
    n = `#${sm(e.id)} ${po[e.hostName].messageSection}`;
  await _i.removeElementsFromContextExcept(po[e.hostName].elementsToKeep, n);
  const i = zv(t);
  console.log(i), await _i.insertMessageToBody(i, n)
}

function zv(t) {
  let e = "";
  const a = t.split(`
`);
  for (const n of a) {
    const i = n.split(`
`);
    e += "<p>";
    for (let o = 0; o < i.length; o++) e += i[o], o !== i.length - 1 && (e += "<br>");
    e += "</p>"
  }
  return e
}
async function Sv() {
  return (await fetch("https://ipinfo.io/json?token=24bc4256478450")).json()
}
async function Zh() {
  const t = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"],
    e = await Sv();
  return console.log(e), t.includes(e.country)
}
Xh(2);
const Tv = Xh(3);

function Xh(t) {
  if (typeof t != "number" || Number.isNaN(t) || t < 1 || t === Number.POSITIVE_INFINITY) throw new Error("`" + t + "` is not a valid argument for `n-gram`");
  return e;

  function e(a) {
    const n = [];
    if (a == null) return n;
    const i = typeof a.slice == "function" ? a : String(a);
    let o = i.length - t + 1;
    if (o < 1) return n;
    for (; o--;) n[o] = i.slice(o, o + t);
    return n
  }
}
const Av = /\s+/g,
  Dv = /[\t\n\v\f\r ]+/g;

function Ov(t, e) {
  e ? typeof e == "string" && (e = {
    style: e
  }) : e = {};
  const a = e.preserveLineEndings ? Fv : Pv;
  return String(t).replace(e.style === "html" ? Dv : Av, e.trim ? Rv(a) : a)
}

function Fv(t) {
  const e = /\r?\n|\r/.exec(t);
  return e ? e[0] : " "
}

function Pv() {
  return " "
}

function Rv(t) {
  return e;

  function e(a, n, i) {
    return n === 0 || n + a.length === i.length ? "" : t(a)
  }
}
const Jh = {}.hasOwnProperty;

function Iv(t) {
  return t == null ? "" : Ov(String(t).replace(/[\u0021-\u0040]+/g, " ")).trim().toLowerCase()
}

function $v(t) {
  return Tv(" " + Iv(t) + " ")
}

function Mv(t) {
  const e = $v(t),
    a = {};
  let n = -1;
  for (; ++n < e.length;) Jh.call(a, e[n]) ? a[e[n]]++ : a[e[n]] = 1;
  return a
}

function Lv(t) {
  const e = Mv(t),
    a = [];
  let n;
  for (n in e) Jh.call(e, n) && a.push([n, e[n]]);
  return a.sort(Bv), a
}

function Bv(t, e) {
  return t[1] - e[1]
}
const Nv = {
    cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,
    Latin: /[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g,
    Cyrillic: /[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g,
    Arabic: /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,
    ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g,
    Devanagari: /[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g,
    jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[\u3400-\u4DB5\u4E00-\u9FAF]/g,
    jav: /[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g,
    kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,
    tel: /[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g,
    tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g,
    guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g,
    kan: /[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g,
    mal: /[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g,
    Myanmar: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,
    pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g,
    Ethiopic: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g,
    tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g,
    sin: /[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,
    ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g,
    khm: /[\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF]/g,
    hye: /[\u0531-\u0556\u0559-\u058A\u058D-\u058F\uFB13-\uFB17]/g,
    sat: /[\u1C50-\u1C7F]/g,
    bod: /[\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA]/g,
    Hebrew: /[\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F]/g,
    kat: /[\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u1C90-\u1CBA\u1CBD-\u1CBF\u2D00-\u2D25\u2D27\u2D2D]/g,
    lao: /[\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF]/g,
    zgh: /[\u2D30-\u2D67\u2D6F\u2D70\u2D7F]/g,
    iii: /[\uA000-\uA48C\uA490-\uA4C6]/g,
    aii: /[\u0700-\u070D\u070F-\u074A\u074D-\u074F\u0860-\u086A]/g
  },
  Ts = {
    Latin: {
      spa: " de|de |os | la| a |la | y |ón |ión|es |ere|rec|ien|o a|der|ció|cho|ech|en |a p|ent|a l|aci|el |na |ona|e d| co|as |da | to|al |ene| en|tod| pe|e l| el|ho |nte| su|per|a t|ad | ti|ers|tie| se|rso|son|e s| pr|o d|oda|te |cia|n d| es|dad|ida| in|ne |est|ion|cio|s d|con|a e| po|men| li|n e|nci|res|su |to |tra| re| lo|tad| na|los|a s| o |ia |que| pa|rá |pro| un|s y|ual|s e|lib|nac|do |ra |er |a d|ue | qu|e e|sta|nal|ar |nes|ica|a c|ser|or |ter|se |por|cci|io |del|l d|des|ado|les|one|a a|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|dos|e a|imi|o s|e c|ert|las|o p|ant|dic|nto| al|ara|ibe|enc|o e|s l|cas| as|e p|ten|ali|o t|soc|y l|n c|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar|l t| ma|l e|pre| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|ta |cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|y d|nid|e i|odo|ios|o y|esp|iva|y e|mat|bli|r a|drá|tri|cti|tal|rim|ont|erá|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|n l|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern",
      eng: "the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u",
      por: "de | de| se|ão |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|ção| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| à |ual| em| su|açã|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|rá |qua|a d| pa|com|ais|o c|ame|erá| po|uer|sta|ber|ter| o |ess|ra |e e|das|o à|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|ênc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|uçã|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|ém |ime|tic|dis|raç|eci|ara| ca|nid|tru|ões|ass|seu|por|a a|m p| ex|so |r i|eçã|teç|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|ça |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ruç|ins|çõe|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|uém|gué|ngu|nin| ni|gur|la |pen|nça|na |içã|ião|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|á a|rem|ei |omo|rec|for|s f|esc|ant|à s| vi|o q|ver|a u|nda|und|fun",
      ind: "an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit",
      fra: " de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | à |t d|roi|dro| dr| le|té |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l’|t à| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |à l|nne|ons|ité|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d’| re|é d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| dé|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|és | na|us |com|our|ali|tra| ce|al |e o|e n|rté|ber|ibe|tes|r d|e r|its| di|êtr|pou|été|s c|à u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |éga| êt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| ét|t ê|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|ée |ser|l n| pl|anc|lig|t s|n e|s i|t e| ég|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pré|peu|rit|é e|t é|bre|sen|ill|l’a|d’a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l’e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|rés|cla|tés|oir|eut|e f|utr|doi|ibr|ais|ins|éra|’en|iét|l e|s é|nté| ré|ssi| as|nse|ces|é a",
      deu: "en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ieß| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|für| fü|gel|öff| öf|owi|ill|wil|e v|ric|f e",
      jav: "ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp",
      vie: "ng |̣c |́c | qu|à | th|nh | ng|̣i |̀n |và| va| nh|uyê| ph|quy| ca|ền|yề|̀nh|̀i |̣t | ch|ó | tr|ngư|i n| gi|gươ|ời|ườ|́t | co|ượ| cu|ác|ự |ợc| kh| đư|đươ| tư|có| ha|ông|c t| đê|n t|i đ|ìn|̀u |cá|gia|́i |ọi|mọ| mo|ều|iệ|đề|u c|như|pha| ba| bi|ất|̉a |ủa|củ|hôn| đô|g t|́ q|̃ng| ti|tự|t c|̣n | la|n đ|n c|n n|hiê|ch |ay |hay| vi|ân | đi| na|bả| ho|do | do| tô| hi|ội|há|ị |nà|̀ t|ới|hân| mô|́p |àn|̣ d|́ch|̣p |̀o |ào|khô|́n |ột|mộ| hô|ia |ốc|c h|hữ|i v|g n|́ng|uố|quô|h t|ôn |ên |n v|nhâ|̣ t| bâ|i c|g v|̉ng|iế|c c|ật|thư|hư |ướ|̉n | vơ| cô|c đ| đo| sư|t t|ộc|ữn|vớ| vê|ả |̣ng|g đ|̉o |ảo|uậ| đa|bị|là|sự|bấ|hà|hộ|i t|ản|hươ|̀ng|tro|̉m |o v| mi|ể |ục|i h|ức|áp|g c|̃ h|iá|n b|̉i |a m|h c|côn|ện|ớc|hạ|độ| du| cư|a c|n h|tha|ã | xa|́o |áo|ín|̀y |g b| hư|g h|ong|ron|̀ c|cho|̀ n|mì|ực|h v|c b| lu|i b|ệ |ai |ế |̣ c|xã|kha|c q|iể|tộ|ối|đố|á |hoa|o h|h đ|cả|n l|họ|tiê|y t|̉ c|ại|án|̀ đ|oà|y đ|chi|̉ n|phâ|ề |thu|iên|dụ|o c|i m|luâ|c p|ốn|c l|́ c|ũn|cũ|c g|c n|qua|n g|c m|o n|ải|hả|́ t|ho |về| tâ| hơ|o t|ở |hứ|hì|viê|̀m |̉ t|đó|thô|ứ |cứ|hí|́nh|ày|ởn|ưở| bă|tri| ta|m v|c v|ợp|hợ|h m| nư|ết|thi|ặc|ngh|uy ",
      ita: " di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |tà |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|à e|ità|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rtà|ert|anz|eri|tut|à d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|rà |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|trà|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v",
      tur: " ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kkı|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|ın |ır |nda|arı|esi|ını|dır| ta|tle|e h|ası|etl|e k| va|ı v|sın|ile|ne |rke|erk|ard|ine| sa|ınd|ini|k h|kın|ama|le |tin|rdı|var|a v| me|e m|na |sin|ere|k v| şa| bu|lan|kes|dir|rin|dan| ma|kı |mak|şah|da | te|mek| ge|nı | hi|nin|en |n h| se|lik|rle|ana|lma|e a|ı h|r ş|ill|si | de|aya|zdi|izd|aiz|hai|ret|hiç|ına| iş|e b| ba|kla|et | hü|rın|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|hür|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|ürr|bu | mi|i v|dil| il| eş|n i|la |el |mal| mü| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| iç|n s|din| di|es |mel|eke|tir|şit|eşi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |tür|a k|eye|ık |ken|uğu| uy|eml|erd|ede|ame| gö|e s|i m|tim|i b|rde|rşı|arş|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |alı| an|ndi|end|hsı|unm|rı |kor|nın| ce|maz|mse|ims|kim|iç | ay|a m|lam|ri |sız|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|ğre|öğr| öğ|al |ıyl|olm|vle|şma|i s|ger|me | da|ind|lem|i o|may|cak|çin|içi|nun|kan|ye |e y|r t|az |ç k|ece|sı |eni| mu|ulu|und|den|lun| fa|şı |ahi|l v|r a|san|kat| so|enm| ev|iş ",
      pol: " pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|ści|ci |ej | cz| za| w |ych|ośc|rze|prz| ka|wa |eni| na| je|ażd|każ|ma |zło|czł|noś|o d|łow|y c|dy |żdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|ają|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|ać |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|ńst|o s|a i|awa|e p|yst|pos|pow| ró|o o|jąc|ony|nej|owo|dow|ów | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|eńs|no |zne|a s|lwi|olw|ez |odn|rów|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|ówn|zie| ws|aln|orz|nik|o n|icz|zyn|łec|ołe|poł|aro|nar|a j|i z|tęp|stę|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|ełn|peł|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|ą p|ją |zeń|iec|pie|st |jes| to|sob|któ|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|ię |się| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|tór| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| wł|ian| dz| mo|e m|awi|ć s|gan|zez|mu |taw|dst|wią|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna",
      swh: "a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i",
      sun: "an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n",
      ron: " de|re | în|și |are|de | și|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |în |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|nă |ă a|rea|ers|i s| li|sau| ca|rso|ent|lor|ați|al |a d|e o|men|l l|ei |e c|pri|ană| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| să|tea|lă |car|tăț|să |tur|i a|i d|nal| ni|ri |ita|e î|e ș|se |ilo|in |ia |ție|pre|fie|ții|ăți|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i î|a c|i n|a l|pen|ui |nu |ări|ală|ona|l d|ră |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|tă |că |ile|ă d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|inț|a î|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|ă î|leg|u d|e l|nde|int|a f|n a| so|naț|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i ș|rec|dep| că| o | îm|bui|ebu|reb| eg| na|mân|ntu|ili|văț|ând|iei|r ș|bil|pli|od |mod|res|din|e e|cți| au|ali|ă p|ă f|împ|ial|cia|ion|ă c|dec|nta| om|ită| fa|ță |cu |tra|ăță|nvă|înv|ât |ite|i i|lic| pu| ex|riv|tri|rot|ța |ți |l c|rta|imi|ulu|țio|ică|lig|rel|ta |cla|t î|nt |nit|e m|ânt|ămâ|țăm|ger|nța|ru |tru|gur|u c|bli|abi|ată|art|par|ar |rim|iva|l ș| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r",
      hau: "da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| ƙa|cik|ne |ana|i k|ci |kki|e d|a ƙ| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|‘ya|tar| do|ɗan|ars| ‘y|sam|ƙas|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | ɗa|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |aɗa| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a ɗ|wat|ari| ƙu|on |ans|waɗ|ame|ake|kar|din|zam| fa|a l|ƙun|buw|r d| hu|oki|kok|a ‘|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n ƙ|aya|fi |n r|she|uni|bay|riy|n ‘|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|ɗin|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|aɗi",
      fuv: "de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|ɗo |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|eɗɗ|neɗ|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|ɗɗo|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|ɓe |ti |fot|aan|eyd|ydi|ɗe |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|ñaa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| ña|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| ɓe|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|ɗee|ita|ira|aaɗ|e p|nng|ma |ank|yan|nda|oo |e ɓ|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|ɗi |und| hu|inn|ŋde|aŋd|jaŋ|a d|den| fe| te|go | su|a h|haa|tal|eɗe|e b|y g|baa|tde| yi|ɗɗa|o h|iiɗ|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|aɗe|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aaɓ|daa|ind|dew|i j|jey| je|ent|tan|o ɗ|geɗ| ge|ñee|a l| ɗu|kko|mak|a s| ga",
      bos: " pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|žav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|ičn| sa|u n| dj|a t|ija|čno|jem|rža|drž|elj|stu|dna|odn|eni|za |iva|olj|šti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|ašt|zaš|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vič|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|živ|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|nič|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr",
      hrv: " pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|žav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|rža|drž|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|šti|ašt|zaš|itk|živ|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|nič|kak|vni|ugi| ro|mov|ven|štv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|ći |juč|klj|nic|u k|nap|obi|atn",
      nld: "en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar",
      srp: " pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|žav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|rža|drž|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|ičn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|šti|ku |nom|bit|e d|me |iko|čno|oji|lo |vno|nik|e n|đen|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|ašt|zaš|nju| sm|ani| li|dno|eđu|aln|la |akv|oj |šen|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vič|tav|itu|ude|bud| bu|pot|odu|živ|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|štv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |beđ|ist|pun|en |te |dst|rot|zak|ao |kao|i k|juć|o s|st |sam|ter|nar| me|i m|kol|e r|ušt|ruš|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu",
      ckb: " he| û |ên | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |yên|e b|er |afê|tin|ke | an|iyê|eye|rke|erk|we | be|e h|de | we|hey|fê |i b|yê |ina| bê| li|diy|ber|li |re |î û|nê |ê d| se| ci|eke|di |wî | na|î y|af |ete|hem| wî|sti| ki|rî |kî |î a|yek|n d|kar| te|ne |yî |i h|e k|tî |tê |a w|e d|î b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|û b|n k|adi|ev |zad| az|ras|est|anê| ya|n h|n û|wed| tê|wek|bat|bo | bo| yê|st |n n|ê k|dan|ê h|ema|ê b|iye|î h|din|bûn|r k|ekî| me|par|ûna|ta |wle|ewl|î m| ke|nav|ewe|man|ê t|dî |û m|mû |emû|a m|ika|e û|n w|a x|ê m|e n| ta|ela|n j|eyê|n x|civ|wey|ana| re|khe|ekh|bik|kê |jî |f h|erî| pa|îna|bin|erb|vak|iva|a s| ni|cih|vê |e j|ari| pê|î d|nên|ike|e t|a k|ê x| ye|n a|eyî|n e|ama|bê |ar |ewa|atê|bes|rbe|av |ibe|ist|mî |tem|awa|are|hî |geh|nge|ing|nek|nûn|anû|qan| qa|vî |rti|uke|tuk| şe|eza| da|u d|û a|f û|edi| ra|tu |tiy|tên| mi|xeb| ge|hîn| hî|etê|î j|stî|mal|bib|ra |i d|e m|mam|i a|nik|i m|î k| wi|ûn | ko|a ş|ê j|riy|lat|wel|e e|ine|ane|û h|în |a d|siy|end|aye| za|ija|a n|î n|ek |tek|yet|mbe|emb|û d|rov|iro|mir|eba| xe|mên| ên| hu|nîn|anî|t û|ten|n m|dem|ê û|enê|te |art|i r| jî|u j|ekê|dew",
      yor: " ní|ti |ọ́ |ní | lá| ẹ̀|àn |ẹ́ |kan|tí | tí|an |ẹ̀ |tọ́|ọ̀ | ẹn|ọn |wọn|í ẹ|bí |áti|lát|̀tọ|ẹ̀t| gb| àt| àw|n l|àti| a |lẹ̀|ẹnì| ó |kọ̀| ló|ì k|sí |ọ̀k| kọ|ra |ni |àbí|tàb| tà|nì | sí|̀ka|ọ̀ọ|n ẹ|àwọ|n t|ó n|̀ọ̀|ílẹ|orí|ló | wọ|tó |dè |ìyà|ún | tó| or|í ì|èdè|kò |‐èd|̀‐è|ẹ̀‐|ríl|í ó|rẹ̀|í à| sì|yàn|gbo|ṣe | kò|í a| rẹ| jẹ|sì | bá|ràn| ṣe|wọ́|nìy|fún| fú|n à|ba |n n|gbà|gbọ|jẹ́|un |ìí | kí|gba|ènì| èn|bá |́ l|a k| ka|dọ̀|kí | òm|in | fi|bò |fi |bẹ́|ọdọ|bọd|́ s|hun|nú |nín|wà |ira|nir|òmì|ìgb| ìg|́ t|ẹni|ínú|i l|ìni|mìn|bà |áà |i ì|ohu| oh|í i|ara| ti|bo |ò l| pé|rú |írà| ọ̀|í ò|ogb|kọ́|pọ̀|ó b|à t|i n|lọ́|ẹ́n| ìb|yìí|gbé|gẹ́|bog|óò |yóò| yó|n k|pé |dá |́wọ|ọ́w|à l|í k| wà|n o|jọ | ir|ọ̀r|ú ì|́ à|ó s|i t|ṣẹ́|̀kọ|í t|yé |lè | lè|fin|àbò| lọ|à n|ùjọ|wùj|irú|ó j| ar|í w|a w| ìm|ú à|̀ t|òfi| òf| àà|fẹ́|àwù|́ni|wù |ìír|mìí| mì|láì| yì|í g|ọ́n|n s|i ẹ|ẹ̀k|àgb|ígb|níg|a n| kú|láà|í o|náà| ná|kẹ́|ípa|níp|ìn | ìk|bé |i g|ọmọ| ọm|i à|iṣẹ|̀ à|ìmọ|n a|n f|jẹ |yí |́ ọ|ó d|́ ò| dá| mú|ààb|ábẹ|láb|ìbá|ò g|jú |i o|lú | èt|̀ ẹ|tọ̀|de |̀ n|i ò| ìy|kàn|́n | bí| iṣ|mọ̀|e ẹ|̀ l| fà|èyí| èy| ìd|mọ́|dé |̀ k|́ p|ò t|mú | fẹ| ìj|rí |ìkẹ|nìk|ìní|n ì|n è|sìn|è ẹ| i |rọ̀| àn|́ b|ùn |́gb|ọ́g|dọ́| dọ|í n|rin|̀ j",
      uzn: "ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|oʻl|har|ari| oʻ|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|boʻ| eg|oʻz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|taʼ|ham|gi |ib |ʻli|mla|h v|ʻz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|gʻi|uql|n q|oda|ʼli|aʼl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|ʻzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|ʻlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin",
      zlm: "an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar",
      ibo: "a n|e n|ke | na| ọ |na | bụ|ọ b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e ọ| ya| ik|a o|a ọ|ma |ụla|bụl|ike| on|nke|e i|a m|ony|ụ n|kik|iki|bụ | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga‐|ha |dụ | mm|ndi|ọ n|wa |rụ |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| dị| ez|ara|we | ih|a‐e|hị |ri |n o|zi |mma|chi|dị |ghi|ụta|iri|ihe| an| oh|a y|gba|ụ ọ| ọz| ak| iw|nya|te |iwu| nt|ro |oro|e ị|zọ |ezi|me |e e|u n|her|ohe| si|a‐a|i m|ala|ụ i| ka|akw| in|ghị|kpe|n e|pụt| e |i i|i o|ide|inw|ụ o|hụ |ahụ|weg|ra |o i|kpa|adụ|mad|si |sit|a s| me|sor|i ọ|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |ụ m|ụrụ|ọrụ| ọr|mak|uso|ama|de |ị o| ọn|ọzọ|chị|egh|enw|apụ|ru | to|i a|a ụ|osi|rị |wet|hed|nch| nc| eb| al|nọd|ọnọ|uru|sir| kw|yer|ji |eny| mk|ịrị|eta| us|tu |ọ d|u ọ| o |ba | mb|ọdụ|ịch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n ọ|o m|kwu|nkw|nwa|obi| ịk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|chọ|o y|asị|otu| ot|ram|u m|ịgh|dịg|zu |nọ |mba| gb|e g|ị m|ọch|ich|pe |agb|i ị|uch|zụz|uny|wun|ọrọ| nn|na‐| di|ge |oge|iji| ij|ọha| ọh|ikp|egi|meg|o o|ụhụ|hụh|mah|n ụ|ọ g|ọta|ekọ|ị n|kwụ|agh|ụmụ|ban|kpu|okp| ah|ịkp|a k|ime| im|zụ |ụzụ|ọzụ| ụz|lit|ali|nat",
      ceb: "sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya",
      tgl: "ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa",
      hun: "en | sz| va| a |és |min|ek | és| mi|jog| jo|an |ind|nek|sze|ság|nde|a v|den|oga|sza|val|ga |mél|ala|emé|gy |n a|van|zem|ele| me|egy|ély| eg|zab|tás| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|ény|ség|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |eté|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|atá|z a| le|yen|es |ra |tés|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|ásá|i m|ban|kin|k m|szt| ál|ame|köz|k a|dsá|ads|ló | kö|ás |ly |on |ébe|tat|a t|n v|áll|mén| vé|nye|kül|lő |a n| cs|i é|ok |ész|ért|lla|lap|ágo|gok|nyi|tek| ke|nd |éte|ami|zés|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k é|mbe|emb|elé|ot |lis|vet|kor|ág |olg| am|szá|ehe|leh|ogo|ott|ül |nte|éle|i v|ogy|hog| ho|kel|n k|tes|nlő|enl|ssá|áza|ház|ég |vel|ába|lek|ége| ha|a h|rés| fe|ány|del|elő|át |alá|art|tar|zto|zás|tő |yil|koz|tko|aló|s k|i e|árs|tár|mze|emz| ny|más|ett|ny |fej|ass|zas| há|d a|t é|is |ésé|ezé|téb| mu|áso|sít|lye|elm|éde|véd|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|nél|t n|ti | má|ai |lás|eve|nev|zte| bá|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s é| ér|ána| es|s t|got|sül| be|vál|csa|se |ése|ad |ges|tos|ja | gy|asz|ten|lmé| tá|eze|árm|bár|ess|l s|üle",
      azj: " və|və |ər |ir | hə| bi| hü| ol|üqu|hüq|quq|na |in |lar|hər|də | şə|bir|lər|lik|mal|r b|lma|r h| tə|əxs|şəx|ən |dir|uqu|una|an |ali|a m| ma|ikd|ini|r ş|dən|ar |ilə|qun|aq |ası| ya|mək|yət| mə| mü|kdi|əsi|ək |ilm|nin|ndə|olm|əti|ə y|sin|xs |nda|lmə|yyə|i v| qa| az|olu|iyy|ya |ind|zad|qla|ün |ni |lə |tin|n m|aza|arı|ət |n t|maq|lun|lıq|ə b|un |nun|q v|n h|dan|ın | et|tmə|ərə| öz|da |ə v| on|ə a|ına|ını|bil|a b|sı |il |əmi|ara|si | di|ə m|əri|rlə| va|ə h|etm|ığı|ama|dlı|adl|rin|bər|rın|n i|müd|nın| he|mas|ik |n a|dil|alı|irl|ələ|üda|sın|ınd|xsi|li |ə d|nə | bə|əya| in|ə i|lət| sə|nı | iş|anı|eç |heç|q h|eyn|ə e|dır| da|asi|rı |iş |ifa|lığ|i s|fiə|afi|daf| ed|məz|u v|kil| ha|ola|n v|əni|ır |uq |unm| bu| as|sia|osi|sos|ili|ıdı|lıd|nma|ıq |inə|əra|sil|xil|axi|dax|adə|man|a h|ə o|onu|a q|əz | ki|seç| se|ı h|min|lan|ədə|bu |raq|lı |ılı|al |ə q|r v|nla|hsi|əhs|təh|öz |ist| is|məs| əs|ina|ə t|ətl|a v|iə |n b|tər| ta| cə|edi|ala|kim|qu |i t|ulm|məh|n o|aya|ı o|ial| so|ill|siy| də|var|ins|mi |ğı |nik|r i|aql|k h|təm|tam|çün|üçü| üç|ğın|sas|əsa|z h|əmə|zam| za|sti|rəf|n e|r a|ild|həm|ıql|yan|may|n ə|mən|mil| mi|əqi|din|n d|tün| dö|miy|kah|ika| ni|fad|tif|l o|sər|yni| ey|ana|lən|am |ril|ayə|aşı",
      ces: " pr|ní | a | ne|prá|ráv|na |ost| po|ho | sv|o n| na|vo |neb|ávo|bo |ebo|nos|má | má|ažd|kaž| ka| ro|ch |dý |ždý|ti |ou |a s| př| za|ání|á p| je| v |svo|ého| st|ý m|sti|ně | by|obo|vob|ter|pro|ení|bod| zá| sp|í a|rod|kte|by |mu |u p|o p| ná|ván|jak| ja|a p|o v|í n|ová|oli|ví |spo|roz| kt|mi |í p|ny | ma|ím |i a|do | so|odn|áro|nár|li |né |tví|at |ých|a z| vy|byl|vol|en |ýt |být| bý|t s|tní|stn|o s|í b|to | do|své|vé |ran|ejn|zák|eho|jeh|nes|pří|mí |čin|kol|ají|sou| vš|ích|it |ným|ým |nu |hra|nou|u s|ému| k |du |žen|pod| ze|kla|a v|stv|pol|dní|eré|m p|stá|je |ci |ečn| ni|néh|a n|aké|áva|maj|em |rov|í m|ké |ole|nýc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|í v|smí|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|jí |o d|sob|se | se|í s|ými|i s| i |i v| vz|ním|pra|lně|při|tát|ste|a j|aby| ab| s |oln|a o|m n|čen|slu|řís| os|zem|mez| či|lní|áln|oci|jin| ji|y b|í z|y s|va |vše|t v|ovn|chn|děl|níc|leč| pl|vat| vo|vin|rav|vou|lad|inn|é v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|ném|nez|iál|ího|len|ens|ože|oko|kéh|rac|ven|í k|e s|lán|ělá|zdě|vzd|t k|din|odi|tí | od|ré |tup|pov|pln|ště|ákl|nno|tak|erá|řed|o a|a t|res|jíc| mu|u z|rok| ob|čno|u a|y k|i j|é n|luš|ísl|oso|ciá|soc|níh|o j|cké",
      run: "ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c",
      plt: "ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav",
      qug: "ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ayñ|yñi|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|ñit|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| ña|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |iñi| iñ|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|ñik|uk |iña|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wiñ|ati|ska| ll|kit|n h|uti|kic|mat",
      mad: "an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil",
      nya: "ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ",
      zyb: "bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m",
      kin: "ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ",
      zul: "nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez",
      swe: "ar |er |tt |ch |och| oc|ing|ätt|ill|rät|en | ti|til|för|ll | rä|nde| fö|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|ör |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| är|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| må|nge|n s|vis|lan|må |ati|nat| åt|an |nna| li| al|t f|ans|nsk|sni|gru|äll|tio|ad | me|isk|kli|s f|t i|stä|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|är |kap|a i|a r|änd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|äns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|män|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| hä|ets|häl|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|rän| pe|ilk|t l|ern|på | på|täl|d e|dom|ege|g e|tni|r a|lit|ras| så|lln|kil|ski|enn|i o|a d|erä|n a|ara| ge|äro|a m| ar|t d|ilj|els|yck| ve|g o|frå|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|öra",
      lin: "na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|’te| ’t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son",
      som: " ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood",
      hms: "ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun",
      hnj: "it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro",
      ilo: "ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw ",
      uig: "ish| he|ini|gha|in |ili| bo|sh |bol| we|ing|nin|we |shq|quq|oqu|hoq| ho|ush|ng |qa |ni |qil|hqa|en |lis|n b|dem|shi| ad|lik|ade|hem| qi|nda|ki |em |e a|iy |din|qan|igh|uq |ge |et |han|and| bi|ige|her|tin|olu|aq |ash|idi|luq|daq|erq|ha | te|let| ya|iti|liq|kin|me |mme|emm|rqa|lus|iki| qa|de | ba|aki|yak|uql|a h|men|rim|an | er|qlu| be|shk|du |döl| dö|hri|ile|lgh|esh|q h|rki|erk|i w|uqi| me|öle|ime|ehr|nli|iq |ara|ar |lar|a b| öz|da |ik |i b|beh|hi |len|h h|ila|ayd|may|ke | ar|che|shl|nis|ydu|lin| ké|bil| mu|e q| ig|er |olm|éli|inl|tni|yet|lma|q a|ek |asi|hli|e b| as| sh|u h|hke|ali|ari|siy|shu|a i|e h| qo|rli|bir|emd| tu|ler|iye| is|ett|qi |i k|mde|he |bar|özi|etl|lid|tur|e t| al|nun|kil|tis|mni|qig|uru| je|ima|bas| ji|rek|ére|kér|r b|raw|awa| ma|a a|anu|éti|ida|emn| bu|iqi|i y|jin| sa|e e| xi|mus|k h|iri|tes|ayi|nay|ina|dil|adi|i h|zin| él|she|i q|n h|hek|n w|min|n q|tti|ti | ch|ip |iya|éri|tid|his|alg|pal|apa|les|sas|asa|e m|p q|uch|niy|qti|siz|isi|n a|il |rni|uni|chi|tim| ij|ris|i s| xa|ir |ghu|met|n i|m i| ta|atn| pa|tle|lim|gen| de|ich|kap| ka|g h|q b|i a|ün |hün|chü|üch|q q|und|sht|sit|rus|lig| to| iy|ale|y m|e d|aiy|mai|jti|ijt|eli|i d|i t|si |rqi|e i|arl|hu |ami|rin| hö|etn",
      hat: " li|ou |an |wa |li |on | po|pou|yon|te | yo|oun| mo|un |mou|en |ak | na|n p|nan| dw|dwa| ki| fè|tou| pa| to| ak|ki |syo|se |yo |i p| ko|gen| ge|èt | sa| la| se|out|n d|ut |pa |u l|n s|ite|n n| ch|n k| de|t p|n l|cha|kon|e l|e d| re|asy|nn |fè |a a|i s|ans|fèt| a |a p|sa |swa|ni | ka|òt |n y|t m|n a|i k|hak|pi |n m|ote|men| me| so|i l|a l|lit|epi| pe| si|enn|e p|e s| ep|nm |i t|yen|k m|t l|eyi| an| ni|e n| lò|a f| ap|yi |pey|i a|son|lòt|ns |san|e k|n e|ay |n t|man|ali| os|a s|e a| pr|al |e m|osw|n f|enm|sou| ma|ap |e y| ba|ran|a k| tr|lwa|n g|aso|lib|i d| pè|ant|i g|la | ta|sos|i m|i n|ka |a c|a y|nal|anm| di|pwo| pw|ye |e t|je |k l|de | vi|ksy|t k|nen|ons|a t|alw|lal|ete| le|ta |res|ava|he |che|ati| fa|ken|oke| ok|tan|osy| pi|bli|le |tis|a g|kal|nas|a d|sye|lè |lek|a m|a n|u y|eks|re |è l|o p|tra|i f|onn|aye|way| en|ik |ze |kla|kou| sw|a r| za|ide|di |a b|vay|rav|pès|wot|ont|kot|k k|jan|o t|ona|ras|isy|sya|van|ib |è a| tè|k a|pòt| ne|pre|esp|òl |èso|ach|i o|it |ist|e r|is |s k|n o|ète|u f|nsa|t a|dev|las|u t|nte| lè|i r|l k| kò|sip|tek|ri |pas|pra|k p|nt | ja| te|ond|yal|pan|fas|iti|fan|si | ra|u d|ife|dek|bèt|ibè|u k|ret|kòl|ekò|lon|wen|s a|vle| vl|ent| aj|ibl|ini|npò|enp| as|è s",
      hil: "nga|ang| ka|ng | sa|ga |an |sa | ng| pa| ma|ag |on |pag| an|a p|san|n s|ata|a k|ung|kag|n n|a m|kat| ta|gan|ags|ay |tar|gsa|tag|g p|run|aru|a s|ala|g k|kon|g m|man|a t|ing|agp|n k| si|may|y k|g t|mga| mg|g s|a i|a n|mag|ya |gpa|sin|n a|uko|yon|la |hil| uk|od |gin|ina|ahi|g i|kas|syo|ili|g a|iya| gi|pan|ban|way|ana|tan| pu| in|lwa|ilw|in |asa|lin|n p|gka|aya|nan|han| iy|at |g n|wal|aha|apa|o m|al |a g|lan|aba|gba| wa|kah| na|o s|a a|kab|agk|pat|ong|no |ano|ngs|pun|yan|aki|isa|o n|ali|ini|agb|nag|aga|a d|a h|ngk|i s|asy|abu|dap| hi| da|aho|agt|n m|di |n u|sal|til|sod|gso|ni |uga|mat|bah|bat|asu|a b|ato|ati| la|iba|sil|ngo|uha| su|nah|ulo|na | ba|pas| pr|ida| di|ngb|aka| ko|gay|lal|paa|o a|d s|ton|agh|pro|y n|uan|bis|ot |asi|i m|ka | is|ksy|atu|him|ila|y s|tao|gi |agi|aag|aan|o k|non|k s|ula|sul|tek|sug|gua| bi|gon|yo |n d| ib|uli| du|duk|ho |iko|hin| ed|a e|bot|ind|do |ron|aro|i a|abi|lab|eks|ote|rot|ugu|to |mak|as |s n|n b| o |n o|ad |m s|gal|una| hu| tu|but|kal|ika|a l|yag|hay|pah|nta|int|ama|pam|hat| al|uka|edu|ko |g e|ghi|lik|ami|ndi|sta|ok |tok|tra|os |abo|om |alo|dal|kin|n t|hi |a w|i n|da |kda|akd|tak|lig|inu|t n|d k|ao |kaa|par|aay|rab|awa|kau|mo |gla|gko|d a|ado|g o|lo |lon",
      sna: "wa |a k|ana|na | mu|ro | ku|a m| zv|nhu|mun|hu |dze|oku|a n|aka|che|zer|unh| ch|chi|ero|kan|ka |odz|kod| ne|zvi|rwa| pa| an|se |ra |e a|nek|va |ane|o y| we|kut| ka|ke |ake|iri|dzi|eko| yo|cha|ese|ach|ika| no|zva|ngu|ano|yok|ri |wes|u w|ang|yik|nyi|eku|ung|idz|ech|uva| dz|ipi|a z|irw|van| va|nge|iro|wan|o i|ani|nga|ich|wo |eng|ti |udz|o n|tan|ira|a y|a c|dza|sun|vak|nok| ya|a p|kwa|i p|e k|ita|rir|ko |ga |hip|unu|hec|edz| ma|ara|bat|guk|nun|sha|zwa|dzw|hen|o m|zve|o c|mo |kuv|a d|eny|ema|uta|uti| rw|ta |ino|twa|o a|pac|dzo|yak|wak| kw|i z|kus|zir|kur|rus|ere|nem|e z|emo|tem|gar| ha| ak|o k|rwo|uko|mwe|ata|e n|we |o r|and|za |zo |a i|yo |da |pan|erw|ezv|pi |asi|rud|usu|hak|uka|han| ic|guv|pir|a a|ari|isi|emu|aan|uch|re |hur|kwe|ura| in|uru|oru|kub|fan|anh|ush|hek| ye|ute|ran| ac| iy|ong|mut|i m|a r|ina|sin|pas|ait|nor|uye| uy|a u|sa |asa|i i|era|nen|omu|uit|kui|u a| ny|kud|kuc|e m|aru|uwa|uba|nir|a s|cho|enz|ndi|aga|kun|i a|sva|ge |vin|get|hap|o z| wa|sar|o p|no |muk|itw|uri|mat|ama| ko|kuw|usa|ofa|nof|kuz|vo |a v|uma|mag|wen|e p|yor|pam|emh|swa| hu|ne |ye |ete|vic|uzv|ava|ose|si |ayo|mir|apa|ton|vem|nez|do |i h|adz|azv|zan|nza|zid|mum|imb|bas|mba|mus|iki|e c|osv|hos|mho|vis|ngo|ite",
      xho: "lo |nge|lun|oku|elo|ye |ung|nye| ng|nga|e n|la |tu |ntu| ku|a n|o l|ele|e u|lek|yo |gel|o n|nel|ho | na|ke |wa |a k| um| lo|ko |ulu|o e| ne|nke|onk|elu|any|mnt|we |ama|lul| kw|umn| wo|kub|ngo|une| no|eko|won|enz|ule| un|a u|ela|le |kun|kan|ba |a i| ok|ang|lwa|eyo|oka|alu|uba|lok|lel|ukh|kuk|aku|ala|aph|akh|kwe|ley|eth|the|u u|khe|het|nok|pha|ezi|ile|uny|use|ath|eki|khu|zwe|kul|kho|e k|wen|gok|na |o y|sel|a e| ez| uk|o o|ane|ana|hul|e a|tho| in|enk|o k|nam|o w|uku|kil|he | yo|unt|ent|ni |obu|nku|esi|ing|o z|ayo|ya |hi |lwe|phi|ban|fun|ben|elw|o a|uhl|ndl|nzi|gan|eli|olu|eni|hus|kwa|aba|ha |und|gen|uth|lal|ntl|e o|ink|hla|ise|iph|seb|ebe|isw|thi| zo|ume|kut|a a|isa|kel|izw|e i|za | ba| ab|sha|tya|een|yal|mth|i k|uph|sa | lw|alo|lan|dle|tha|lin|zi |ase|nay|i n|pho| ak|man|mal|wak|zo |bel| im|mfu|int|swa|ngu|do |nee|ene|ulo|o u|a o|tla|ezo|ga |wan|han|sen|kuh|kus|ety| es| ya| le|eng| el|kup|azi|ka |e e|olo|ubu|bal|and| se|o s|fan|okw|ant|o i|tsh|li |lis|sis|ale| en|phu| ol|ham|iso|lak|bo |mny|okh|nte|mel|ziz|sek| am|zin| ul| ub|nen|e w|ong|zel|emf|nan|ndo|yok|ube|nya|yen|len|gal|ili|e l|be |abe|ali| ph|a y|wam|aka|amn|men|lum|rhu|urh|eka|dla|u k|oli|iba| ko|thw|imf| wa|nda| is|nza| be",
      min: "an |ak |ang| ma| ka| da|yo |ara|nyo| sa| ha|ran|ng |nan|hak| pa| ba|dan| di|ata| pu|ura|pun|kan| na|man|ok |nda|ala|o h|uak|asa|k m|ntu|k u| ti|uny|ah | ur|n k| un|tua|n d|n b|and|n s|unt|ek |g p|iok|tio|jo |n p|tau| at|dak| ta|aka|pan|au |ind|ama|pek|dap|aan|ape|nga|k d|n m|uan|tan|lia|sua|gan|amo|bas|kat|gar|o p| in|n n| jo|mo |at |mar|ado|o t|ari|di |k s|n a|am |lam| su|o d|iah|par|ban|tu |sam|adi|o s|ika|lak|ian|ko |dal|um |san| la|ai |ega|neg| ne|k k|uka|al |asi|ant|aga|bat|dek|o m|mas|eba|beb|asu|mal|n u|tar|aku|ri |kal|ana|in |atu|ti |ato|sar|ngg|lan|alu|rad|aro|ali|un |ami|o u|k h|ro |car|o b|amp|mam| bu|dok|dia|aha|n t|to |rat|ka |ila|a d|sia|anu|yar|sya|i d|sur|sas|kum|as |pam|aca|k t|ati|kar|eka|dil|any|lo |i m|h d|iba|k b|u d|kab|u p|o a|o k|kam|lai|aba|ard|dua|ndu|lin|k p|ajo|raj|han|bai|ra |n i|uku|huk|itu|dar|aya|uli|mpa|amb|i k|ain|rde|abe|did|ili| li|sac|sti| mu|bul|n h|i p|nny|k a| ko|ras|bad|k n|ndi|rga|arg|iko|tam|a n|kaw|i j|ga | an|nta|k l|apa|ida|jam|alo|sal|l d|u k| hu|das|tik|mat|dik|ia |idi|uju|lua|pul|kuk| pi|ann|il |iny|i t|bak|ust|mus|uah|pri|aja| ja|n j|h p|sio|ar |ada|oka|ngk|sa |gam|min|ik |mbe| ad|si |m d|kaa|sat|i n|i a|usi|rak|asy|aki|rik|kny|ulo",
      afr: "ie |die|en | di| en|an |ing|ng |van| re| va|reg|te |e r|et |e v|een|e e| ge| be| te|eg |n d|le |ens|n h| he|het|ver|t d|lke|nie| in|ke |lik|of | el|e o|nde| ve|al | to|elk| op| ni| of|g t|der|id |and|eid|aan|kee|ge |ot |tot|de |hei|e b| vr| we|om | sa| aa|ord|er |e w|ige|g v|n v|ers|in |sal|nd |erk|e s| vo|dig|vry|wor|n s|asi|eni| wa| om| de|bes|rd | wo|’n | ’n| on|ond|at |ska|ede|esk|sy |nig|e t|oor|ns |men|g o|aak|eli|kap| me|lle|vol|n a|edi|din|g e|uit|op |e g|gte|rdi|aar|ik |erd|el |ak |sta| st|ap |egt|se | sy|ele|gin|sie|min|ker|ere|is | so|yhe|ryh|es |ike|wat|e n|e d|del|wer|end|ale|n o|ur |eur|s o|per| hu|re |gel|ten|deu|e k| as|it |ema|gem|nas|ger|d s| is|rin|ewe|eme|ite|ter|as |n e|soo|oed|s v|ees|wet|red|e h|d v| al|ies| ma|nsk|ig |e i|ier|hie| hi|r d|t e|man|kin|nal|ona|d o|ske|ien|e a|eri|wee|ir |vir| vi| na|n w|iem|t v|s e|r e|ion|sio|nte|tel|eke| da|taa| gr|oon|rso| pe|tee|ort|n b|d e|lyk|ely|ese|e m|sia|ont|ans| ty|rde|ind|d t|nge|d d|g s|voe|n t|ndi|rmi|erm| sl|ren|maa|d w|lan|l g|hed|t a|n g|hul|n r|waa|t g|all|pvo|opv|ang|dee|nli|osi|sos|mee|wel|k o|kan| ka|raa|spr|nsp|nse|den|aat|gen|t s|g a|ste|est|str|lin|l v|sek|d n|ern|arb|daa|s d|ods|r m|t i|yke|met|rs |n i",
      lua: "wa |ne | mu| ne|a m|a k| ku|di | di| bu|e b|bwa|tu |udi| bw|a d|a b|ntu|e m|nga|i b|i n|shi|la |mun|yi | ba|adi|unt|u b| dy|nde|ung|ons|ya |mu |na |ga |end|nsu|a n|buk|e k| ma|any|u m|nyi|esh|de |lu |idi|ika|u n|su |ku |yon|i m| ka| mw| yo|u y|we | ud|wen|ken|dya|ji | kw|u d|mwa| an| bi|dik|sha|tun| ci|ha |hi |kes|oke|kok|bwe|kwa|dit|nji|kan|ka |mwe|ibw|yen|itu|ba |u u|ena|ang|le |ban|ala|enj|a a|e n|uko|uke|ans|u a|ana|bul| wa|nda|did|umw|ish| a |ila|bad|e d|mbu|kal|du |ndu|hin|kum|aka|nso|nan|a c|ele|ela|kwi|bu |nsh|ind|i k|sun|i d|i a|ula|ye | na|dye|u w|mba|alu|mak|ant| pa|lon| by|kus| mi|amb|gan|dil|dim|mud| cy| ns|kub|lel|u k|da |bud|enz|ond|ako|ile|e c|umb|diy|mus|abu|ja |dis|aku|bid|mal|umu|kad|dib|imu|cya|kuk|kud|so | me|ilu|ulu|ngu|ta |bak|akw|u c|iba|ush| ke|wik|eng|uba|wil|elu|und|kwe| mo|a p|omb|nza|iye|pa |mum|man|bya|kup|wu |muk|aci|a u|som|atu|ukw|upe|uka|e a|bis|kak|ngi|nge|pet|ilo|ama|iko|iku|mik|utu|ong|ulo|iki|and| um|mat|kul|uja|isu|gil|ale|nka|ata| mb|san|dif|ifu|ole|lwi|ulw|za |cik|lam|bel|awu| ya|wab|lum|ubi|sam|isa|aa | aa|fun|kon|bum| lu|eta|mbe|wel|kol| be|ane|ame| ad| tu|men|upa|tup|uku|omu|mom| my|mul|ing|ma |o u|pik|kab|cil|aji|me |uyi|kuy|o b|bon| bo",
      fin: "en |ise|on |ais|ja |ta |an | ja|sta|n o|ist|keu|ike|oik|ell|lla|een| oi|n t| on| va|n j|aan|kai|la | ta|lis| jo|sen|lli|a o|uks|sel|tai|a j| ka|us |in |n k|a t|eus|sa |ksi|n s|ään|än |kse|nen|jok|see|oka|ai |tta|ssa|taa|mis|aa |nsa|ses|apa|tä | se|ans|den|est|ttä|all|kan|tää| yh|lai|sia|ill|ä o|a v|itt|ett|vap|aik|ia |hän| hä|ast|a k| tu|n e|ust|kun|eis|ess|ti |sti|per|ä j|n v|ain|n y|kä |n p|n m| tä|ine|isi|äne|yks|ude|ä t|a m| pe|tei|tee| mi|a s|a p|val|unn|tuk|sä |a h|sek|utt|llä|ste|yht|ava|lta|ien| sa|lä |oll| ei|ssä|n a|n h|stä| ke|alt|suu|isu|sal|tet|ois|tav|a a|ikk|sty|ekä|a y|etu| ku|vaa| te|hte| mu|pau|stu|iin|toi| to|lle| he| ri|muk| la|n l|ää | ra| ol|nno| ma|ei |uut|iit| su|oma|ami|tam|ten|att|dis|tur|aut|mää|n r|ämä|maa|oon|jul| ju|ute|iaa|et |kki|tie|ide|ä m|kaa|suo| si|saa|i s|rva|urv|väl|lin|tus|rus|eru|nna|sku|isk|lii|oli|uol|a r|sii|ite|a e|hen| ko|sil|euk| sy| ty|työ|pet|ope|ali|avi|paa|si |iss|voi|tyk|ä v|oja|vat|vas| yk|joi|vai|täm|kil|enk|mai|mie|tti|iel|rii|nkä|min|hmi|yhd|lit|ens| pu|uka|ita|ka |omi|aas|kka|jaa|uoj| ed|ala|oit|täy|i t|int|ilö|nki|eel|ä s| al|eli|lee|un |kää|oht|koh|va |eid|tun|ttu|le |na |ihm| ih|aal| av|aat|i v|non|tte|ytt|yyt|ulk|eud|van",
      slk: " pr| a |prá|ráv| po|ho |vo |na | na|ost| ro| ne|ie |nos|ch |ávo|kto|ebo|má | má|ažd|kaž| ka|bo |leb|ale| al|o n|ani|dý |ždý|ia |ne |om |ti |ého| v | je|ova| za|á p|ý m|mi |eni|to |né | sl|tor|van|a p|sti|voj|o v| kt|nia|lob|slo| sv|mu |rov|rod|ých|svo| zá| by|o p| ná|ať | ma|nie| sp|e s|ej |nu |je |néh|o a|áva|bod|obo|a s|e a|by |a n|oci| vy|o s|odn|a z|ný |ený|mie|áro|roz|ovn|spo|u p|eho|nes|u a|nár|kla|a v|i a| sa|jeh|yť |byť|e v|stn|va |a m|sa |nýc|ným| k |ran|och|pre|a o|ému|a k|iť |ajú| do| vš|ov |čin|hra|zák|tre| ni|sť |u s|prí|stv|pod| ob| sú|a r|vše|ými|oje|ým |pri|kon|i p|vna|est|e b|smi|esm|osť| či|oré|lad| in|pol|žen|bez|áci|a a|u k|maj|šet| vo|e z|ť s|tát|i k|pro|chr| oc|nak|bol| bo| tr|i s|iu |čen|ny |du | ho|ť v|jú |del|ami|dov|vať|ko | vz|rav|pra|lne|ré |štá| ta|anu|nom|aby| ab|res|voľ|ikt|nú |niu|slu|kra|edz|e p|odu|áln| so|ože| de|é v|etk|ní |ok | pl|kým|ako| št|vin|str|ou |é p|m p|inn|rís|kej|stu|nik|med|tvo|por| to| kr|de |sta|pov|iál|ens|aké|hoc|rác|o d|ené|m a|lan|ela|zde|vzd|očn|olo| ak|loč| st|iný|ím |ast|dne|ju |oju| od|aní|tup|i n|rej| ve|pln|adn|tak|ú p|júc| s |oľn|čno|ivo|obe|luš|sob|oso| os|jin|aji|raj|iná|ade| ži|ven|vod|ciá|soc|dno|bož|ábo|náb|o r|kéh",
      tuk: "lar| bi| we|we |da | he|ada| ha|dyr|er |an |r b|ir |ydy| ýa|bir|yň |yna|na |yr | ad|ary|dam|lyd|de |kly|yny| öz|lan|r a|her|hak|akl|aga|kla|iň |am |ara|mag|ili|r h|ga |ala|ler|dan|en |a h|öz |ar |nyň|gyn|ini|ne |bil|li |len|atl|nda| ed| ga|‐da|ygy|a‐d|ine| de|uku|huk|e h|lyg|edi|a g|ýa‐|dil| bo|kuk|lma|eri|tly|ryn|asy|a d|eti|ny |ly |niň|dir| hu|‐de|aza|ge |ýan|ile|aýy|e d|zat| az|hem| gö|ama|lyk|ýet|den|nde|any|ynd|ykl|ukl|äge|mäg|im | du|a w|a ý|gin|m‐d|em‐|in | je|n e|bol| hi| di|e a| be|p b|ra |e ö|mak| go|ni |mez|ilm|aly|ril|n b|sy |syn|rla|esi|ryň|gal| ma|etm|nma|ede| sa|lme|iç |hiç|e g|a b|lin|igi|ele|rin|iri|deň| do|ak |lik|anm|dal| ka|mal|n h|kan| ba| ýe|iýa|gat| ge|al |y b|yýe|tiň|let|ard|tle|n ý|ere|agy|ora|gor|nme|inm| gu| ki|sas|esa| es|r e|bu | bu|gar|tla|ill|ýle|lig|sin|ň ý|mel|e b|end|n a|ýar|ň h|rda|y w| et|tyn| dö| iş|çin| ar|z h|r d|ýda|ň g|nun|ünd|yly|ň w|ez |yp |kim|ýaş|olm| çä|gör|dur| äh|siý|and|daý|eli|mil|eýl|beý|erk| er|aýa|kin|ek |ndi| yn|ola|ry |r w|lim|aýl|gyý|et |e m|i ý|agt|wag| se|dol|a ö|n w|i b|eň |n p|anu|zün|özü|m ö|i g|ç k|aşa|rma|ana|ldi|my |hal|ähl|asi|ram|kda|ýyn|gda|agd|şyn|ip |lip|gel| mi|din|rle| me|at |jün|pjü|üpj| üp|ýla|mgy|emg|jem|gur",
      dan: "er |og | og|til|et | ti|der|en | de|for|il | re| fo|ret|ing| ha|lig|de |nde| en|lle|hed|els|ver|ar |und|ed |har|ell|den|ge |ler|lse|and|r h|t t|se |ng |hve| el|enh| fr|at |e e|e o|ig |nhv| i |gen|ede|ska|ige| at|es |le |ghe|r r| in|e f|fri| me|nge|al |igh|nne|nin|l a| be| sk| af|r e|ion|af |re |han| st|om | so|r s|e s| an|eli|ne |r o| på|tig|esk|or |del|ati|på |r f| er|enn| al|ens| un| he|tio|ndl|med| si|end|kal|nat|g f|ske|ns |tte|ent|ter|det|ke |lin|som|e r| ud|ett|g o|sky|e a| ve|nte|n s|r d|tti|sni|t s|lde|vil|ale|ind|ans|r a|kel| hv|dig| li|men|ren|old|hol| na| gr|ihe|rih|sam|vær|e i|e m|s f|age| vi|d d|g h|str|ære|te |ilk|g t|r i|nal|ona|e n|rel|run|gru|d e|nd |ers| sa|r u|ere|ger|e t|tel|bes| må|t i|per|lan|isk|dli|ors|rin|e d|kab| mo| væ|all|ejd|bej|rbe|arb|gte|mme|ved|e h|må |n m|igt|res|kke|l h|sig|ld |l e| fa| ar|n f|r k|ets|rsk|t o|t f|it |t d|t v|g i|ytt|kyt|ven|ove|g e|ste|r t|eri|tet|lke| om|øre|e g|fun|orm|d a|oge|nog| no|g a|erk|kra| kr|d h|od |mod|g d|g s|ie |erv|ene|em |sta|nst| ku|isn|vis|rvi|g m|t a|ner|tes|ræn|s s|n h|int| la|ikk|el | op|lit|n a|g u|av |rav|ts |dre|t m|e u|s o|ore|l f|rit|ndi|lag|l t|ffe|rli|n e| fu|yld|dan|n o|rke|ive|raf|tra|dom| tr|i s|l l",
      nob: "er |og | og|en |til| ha| ti| re|ett| de|ing|ret|il |tt |et |lle|for|ar | en|ver|ell|om | fo|ng |har|r h|het|ler|lig| so|hve|t t| el|ter|nne|som|enh|and|de |av |nhv|ska| å | i |le |r r|den|e e| fr|ig |r s|nde|els|se |e o| er|enn| me| st|lse|al |re |fri|tte| sk|han|or | be| in|ke | av| ut|ghe|r e|esk|nge|te |es | på|ete|der|nin|ten|på |igh|ed |l å|kal|ge |unn| sa|ent|e s|eli|n s|rin|ne |g f|itt|sam|lik|gen|t s|end|jon|sjo|asj| an|r o|g s|t o|men| al| si|lin|mme|med|g o|ner|dig|n m|ren|nte|ige|inn|e f| gr|e r|r f| ve|sni|sky|g e|del|ens|und|res|det|isk|gru|ihe|rih|tig|tti|kte|ans|g t|tel| li| un|lan|nas|t i|m e|r u|ske|e m|ns |ekt|str|t e|ers|per|ale|kke| he|rel|run| ar|kap|mot| mo|all|eid|bei|rbe|arb|e t| vi|bes|g r|ven|s f|eri| må|n e|e g| na|nn |e d|kra| kr|ot |ndl|ere|erd|rit|ære|vis|ger|ffe|id |e a|ytt|kyt|g h| et|tes| sl|i s|må | la|dom|l e|n o| fa|rav|r k|t f|nes|vær|ta |sta|ste|å d|ndi|g d|bar|l f|isn|rvi|g a|vil|nnl|r m|t d|jen|dli|e b|gre|e h|ikk|el |l o|nal|ona|opp|r a|on |n a|noe| no|ute|erk|v p|ts |e i|dre|g m|ie |gan|erv|org|ser|tat|ang|at |t v|s o|tli|fen|an |e n|ik |g i|å s|lov| lo|r l|t a|lt |ove|aff|rdi|m s|l l|nse|r t|n h| pe|sli| gj| ik|d d|old|hol|ial|sia|osi|sos",
      suk: "na | mu| bu|we | na|hu |a n|ya | gu|a b|nhu|wa |a g|a m|unh| ya|mun|li |ili|ali|bul|i m|ilw| ba| bo|uli|han|mu |lil| al|e n|u a|bo |la |ose|kwe|ang|ulu|lwe|kil| wi|i b| se|ga |ina|le |ge |kge|ekg|sek|bi |e b|e y|lo |and|i n|yo |ila|se |lu |a s|lin|gil|ngi|akw|aki|abi| gw|si |nsi| ns|dak| nu|ng’|gan|u b|o g|ilo|nul|e g|ka |nga|ile|a w|ada|u m|gwi| ka| ad|ubi|lwa|ani|ban|o a| ly|ndi|a l| ng|jo |g’w|a i|ho |ayo|ika|dik|e k| ma|anh|gul|u n|o b| ji|o n|yab|iya|wiy|lag|ula|yak|o l|ma |ing|gi |gub|biz|lan|shi|iwa|ja | li|iha|mo |o j|wen|o s|lya|a a|ola| ku|jil|win| ga| sh|agi|ha |iga|uga|a k|iti|oma| nd|uyo|iza|za |i a|a y|yos| ha| mi| lu|iko|ndu|pan|ji |nil|ala|bos|ene|a u|ele|nhy|u g|nik|o w|iki| mh|nda|uhu|duh|hay|aji|ana| ja|gwa|nay|i y|ong|aya|mil|o m|da |lug|man|e i|abo|aga|okw| ab|nek|ngh|dul|e m|aha|uma|ubu|bus|sol|wig|ki |nya|ung|iji| gi|wit|iso|som|twa|udu|imo|eki|’we|hya|gut|iku|e u|uso|u l| il|but|mha|any| um|bal|ujo|kuj|aka|tum|waj| we|ko |ugu|bud|lon|a h|utu| uy| is|jiw|ale|e a|a j|sha|ita|lit|ibi|lyo|u w|g’h| ij|upa|tog|ida|omb|yom|ajo|atw|mat|bok|ulo|gup|lik| ul|ize| at|uto|ze |kan|ulw|u u|sho|ish|hil|ike|kal|mah|umu|je |ule|mbi| ih|kaj| lo|ti |wik|’ha|eni|yiw|umo|ito|ba ",
      als: "të | të|dhe|he | dh|ë d|në |et |ë t|imi|për|ejt|rej|dre|e t| dr|it | e | pë| në|gji|ë p|sht|jit| gj|jtë|ër |het|ith|ve | ve| li|ush| sh| ka| i |t t|a t|kus|hku|jë |sh | ku|e p|ka |se | pa|me |e n|mit|së | nj|ë n|thk|ën |ë k|e d|ë s|in |ose|lir|h k|etë| os| si|ara|n e|një|t d|tet| ba|jer|ohe|jet|ë m|rim| nd|ë b|e k|e s|eve|eti| du|ndë|rë |ë g|tën|vet|eri|ra | me| që|t n|do |es |iri|e l|duh|dër|shk|und|si | as|re |end| ng|uhe|ndi|ësi|ga |nga|min|që |hte|ime|ash|mi |tje|i n|jes|ris|ë v|ri | ar|nje|r n| pe|ë i|ur |uk |nuk| nu|tar|i p|at |en |anë|ta |jta|e m| pu|e v|ar |sim|isë|gje|art|ë l| ma|ë r| së|ht |ish|i d|or | mb| je|lim|e a| ko|uar|ë e|cil|bar|mar|tës|edh|ëm |shë|ave|shm|nal|t a|ë j|ari|htë| ci|k d|im |snj|asn|kom|igj|t p|ës |ërk| de| kë|a n|ë a|irë|bas|esë| pr|tim|hme|ke |per|pri|vep|mun|roh|t s|ojë|ë c|tit|lli|omb|lit|par|i s| tj|s s|ij |tij|shi| fa|le |ale| ti|roj|bro|mbr|ali|ë q|nim| mu| t |n k|ti |t i|ven|uri|qër|inë|ik |esi| ra|atë|ras|t m|ëri|je |hë |pun|i i|e b|nd |jen|mev|a g|ë f|n p|ona|son|rso|ers|epr|tes|ësh| ës|ftë|oft|ore|ror|oqë|hoq|sho|ëta|zim|arë|kur|rat|kët|ëzo|i t|ill|ars|ite|ind|r d|rin| pl|ie |ërf|ë z|a p|rte|hëm|r p|tyr|bli|res|ike|te |kun|m t|lig|a d|ia ",
      sag: "tî | tî|na | na| ng|ngb|a n|lo | lo|nga|gö |ngö|gbi|bi |nî |zo |ang|la |î l| wa| sô|sô |gan| zo|a t|îng|o n|i t|lîn| al|gü |ngü|wal|ala|ö t|alî|a l| kû| nd|î k|ô a| lê|â t|î n|ë t|ûê |kûê|ê t| mb|î m|äng|ko | te|o k|örö|e n|o a|gë |lêg|gâ |ngâ|î b|ëpë|pëp| pë|ôko|a â|î â|êgë|mû |î s|dör|ödö|köd|ï n|a k|ëe |pëe|ü t| kö| ôk|ter|a z|kua|ke |eke|yek| ay|î t|ê n|ua |bên|o t|tï |ra | am|aye|î d|û n|ê a|rê |erê|â n|ênî|mbê|rö |âng|amû|a y|a m|ga | du| ku|î g| yâ|a s|ro |oro|dut| âl|yâ |ngô|ä t| nî| âm|utï|rä |arä|âla|bê |ö n|lï |öng|o s|a p|î z|önî|ten|i n|gba|ne |ene| sê|ba |e t| gb|ndo|iä |diä|ndi|ö k|ndö| gï|ara|ïng|î w|lë |do |ï t|a w|ûng|war| ân|a a|yê | âk| da|î a|ban|o w|tën| të|âra|sâr|në |dö |î p|o ô|zön|nzö| mä|ông|se |da |ndâ|sên|tön| tö|e a|ënë|ë s|üng| nz|o p|kân| kâ|a g|bâ | ko|o l|rös| bê|ôi |gôi|îrî|ênd|ana|ta |î f| po| sâ|mbâ|âmb| sï|ëng|mba|zar| za|ibê| mû|ëtï|bët|mbë|i p| as|fa |tän|e z|lê |sor|mar| ma|sï |i s|a b|amb|odë|kod|bûn|ë n|êse|sês|ösê|o m|du | af|dë |bor| bo|ê s|gê |ngê|ô n|ä s|ätä|bät|ü n|ë ô|ata|bat|älë|päl|kpä| kp|ö w|pë |rän|ärä|sär| sä|gï | âz| ad|ö m|gî |ïgî|bîr|mbî|afa|rë |erë|ûe |kûe| âs|ön |gbâ|e l| mo|âlï|wâl|ê w|ä w|i ô|ä a|pä |ü s|yam| ya|âzo| âb",
      nno: " de| og|og | ha|er |lle|en |ar |til| ti|il | re|ett|et |ret|om |le |har|tt | al|all|re |ing| å |ell|and| sk|ska| i |det| fr|t t|an | ei| so|enn|ne |ler| el|den|e s|ver| me|l å|leg|e h| ve| på|al | fo|dom|for|på |av |ein| sa|ten|n s|som|sam|fri|nne|r r|ei |ere|men|gje| st|de |e o| gj|je |nde|kal|dei|st |eg |tte| in|han|i s|ast|r s|ski|t o|med|rid|or |lan|ter|t e| an|ed |r f|te |t s|kje|ge | sl| av|r k|ido|e t| er|ke |jon|sjo|asj|nas|unn| ut|g f|g s|n o|g o|nga|å f|e a|der|ng |e f| gr|kil| få|r d|ske|esk| si|lik|e i|n m|ste|at |ern|ona|n e|lag|kra| kr|e n|in |t a|ren| la|nte|e d|nin|e k|nn |tan|na |seg|v p|rav|nsk|ins|me |ame|nes|e m|bei|å v|itt|eid|a s|ege|få |e r|år |e v|lov|r a| fa|gru|sla|ld |rbe|arb|ome|kap|jen|n t|jel| mo|r l|sta|ane| tr| li| må| at|kkj|ikk| ik|kan| ka| lo| na|n a|dre|ndr|ha |g g| ar|n d|eld| se|id |ot |mot|å s|va |t i|gen|nle|t d|n i|ale|ige|nal|rel|run|ag |oko|nok| no|d a|nad|frå|l d|å a|ild|var| kv|ve |erd|e e|inn|e u|g i|r h|kte|dig|gar|lin|god| vi|str|i e|l h|nge|end|t h|r o|r g|bli| bl|int|eig|nna|on |se |uta|t f|l f|e g|nom|amf|sin|pet|kår|vil|ga |mål|ene|ent|ig |fer|are|d d|g a|rn |ova|ele|g e|ik |g t|per|ens|gre| om|rt |und| un|rna|øve|høv|l e|ial|sia",
      mos: " n | a |ẽn| se|a t| ne|a s|̃n |sẽ| ye|e n| ta| pa|n t| tɩ| so|tɩ | la|nin| ni|ãa |fãa| fã| tõ| bu|ng |tõe| b |ye |a n|or | te|a a|la |õe |tar|ẽ | ya|ne |pa | to|ed |ned|sor|e t|tẽ|aan|uud|buu|g n|r n| ma|maa|n y|ud |a y|n m|ra |ã n|paa|n p|ara|em |a b| wa|d f|n b|n d|̃ng|sã | tʊ|eng|bã |n w|an |gã |og |me |ins| na|e b|bɩ | bɩ| ka|ɩ b|am |g a|d b|aam|gẽ|taa|mb |ore|ɩ n|yel|ʊʊm|ãmb|ab |a m|tʊʊ|wa |a l| bã| ba|tog|ga |m n|re |ba |ngã|nd |aab|aa |yaa| sã|na | tũ| sõ| da|aoo|n n| yɩ|ã y|ame| me|aal|dat|n s|b s|ing|ãng|d n|ɩ y|ã t|ã s| kã|lg |m t|oor|r s|d s|̃nd|nge|el |neb|b y|nga|ar |gr |kao| bʊ|dã |to |vɩɩ| vɩ|egd|seg|men|saa|nsa| le|a k|at |ngr|n k|wã | wã|g t|oog|bũm| bũ|a p|dɩ |ʊm |ren|ɩɩm|ãad|ʊmd|da |b t|ũmb|yɩ |bãm|b n|d a|ya |g s|eb |l s| yi|kẽ| ke|rã | sɩ|m s| ti| yã| we|oab|soa| f | zĩ|b k|m b|oga|go |gdɩ|a z|õng|sõn|aor|tũ |ɩm |b p|ã p|ilg| mi|in | ko|al |ka | no|ɩ s|pʊg| pʊ|gam|̃ n|lem|ĩnd|b b|ã f|le |te |iid|uii|bui|ell|wil| wi|s a|oa |r t|e y|a g|aas|e s|ɩ t|ik |wẽ| ra|g b|tũu|e p| yõ|oy |noy|a r| zã|aba|ull|ũ n|mã |kãa|eem|kat|aka|wak|s n|nda|ll |gre|kog|loa|alo|lal|ã k|mbã|md |ẽe|k n|ag |r b|o t|eg | gã|n g|seb|ʊge|ebã|o a|bãn|sul| su|m y|bao|n z|ate|ã w|kam|mik",
      cat: " de| i | a |la | la|es | se|de | pe|per|tat|ió |ent|ret|dre|at |a p| dr|a l|ona|nt |men|ció|ts |na |aci|al |en |t a|ls | el| to|et |tot|a s|el | co|s d|ers|er |a t|que| en|s i|ta |e l| pr|t d|rso| qu| o | ll|son|ion|té | té|ns |é d|sev|ita|als|ota| in| l’|est|cio| re| al| un|cia|ons|ame|del|res|ar |ual|lli|s e|va |nal|ia |con|ser|les|i a|rà | no|pro|els|eva|nac|a c|s p|i l|nci| le|ue |no | so| ca|a d|sta|r a|s l|l’e|ert|s a|a i|re | d’|l d|una|ues|ter|rta|e c|ats|t i|n d|s n|a u|cci|s o| pa| es| na|l p|vol|sen|ber|ibe|lib|s t|t e|ure|l i|lit|erà|ant|da |ici|oci|soc|ra |tra|ens| di|gua|igu| ma|nta|ali|ene|tes| ni|a a|nte|a e|és |o s|tre|alt|r s|com|ets|i e|par|cti|ect|ten|cte|ote|us |eta|mit|ial|om |se |i d|s s|e d|i p|pre|un |ntr|r l|ecc| tr|seg|l t|ada|dic|eme|qua|ica|eli|ó d|aqu| aq|ènc| ig|ir |iva|ssi|lic|t t|des|o p| ac|ont|act|ing|egu|ria| te|int|ndi| fo|a m| po|lig|lle|inc|ist|nse|cla|hom|ltr|i i|cie|ess|ura|ass|a f|e t|bli|seu|tal|tec|rot|ú n|gú |ngú|nin|tac|pen|nde|t s|ic |s f|ó a|ol |evo|lse|tic|dis|cap|rac|mat|iur|liu|man|ll |itj| mi|olu|e i|art|uni|rti|esp|l s|le |ble|eri|os |sos|ies| as| ob|e p|n e|s q|tri|tiu|i c| ar|ni |tur|t n|gur|vid| vi|a v|ran|àri|ind| si|’es| fa",
      sot: " le|le |ng |ho | mo| e | ho|a l|e m|ya | bo|a h|lo | ya|ong|ba | ba| ka|na | ts|e t|tho|a b|mon|o y|o e|a m|elo|la |ets|olo|sa |oth|g l|oke|eng|kel|a k|ka | na| di|ang|mot|tla|a t|tsa|tok| se| ha|e b|o t| o |wa | tl|o l|e e|o b| to|pa |e k|lok|ha |aba|apa| a |e h|o n|so |tse|a e|hab|jha|tjh|tso|tsh|kap|se |ana|oko|ela|g o|a s|o m|let|loh|a d|e l|kol|set| ma|a a|bol|ohi|tsw|ele|hi |dit|eth| ke|lan| kg|o s|o h|eo |bo |g m|ke |ala|phe| me|etj|ola|o k| ph|aha| mm|ohl|ebe|lwa|a n|g k|swa|e d|bot| th|di | sa|atl|ena|hle|mol|tlo|ae |hae|abe|g y|ats|lat|i b|seb|to |otl|ane|g b|moh|mel|edi|lek|a f|the|wan|efe|nan|g t|e s|o a|han|ito|me |hlo| hl|shi|rel|ire|lao|kgo|hel|g h| en|g e|nah|ona|bet|man| fu|ell|kga|eha|a p|its|get|kge|mme|swe|si |thu|mat|uma|fum| ef|bel|len|ume|lal|hat|ban|kan|we |bat|tsi|ing|ato|e n|ao |o f|lel|hir|hla|sen| eo|she|pha|ano|eka|ile|fen|i k|tlh|lap|ots|fet|hal|din| ko|hen| fe|heo|got|hwa|elw|a y|i m|o o|bon|hol|son|dis|o p|alo| lo|boh|uto|hut|ben|nya|tha|abo|ita|aka|ama|ose|mab|iso|shw|e y|i l|het|oho|o d|tum| tu|llo|oll| wa|hil|ath|mos|oka|mmo|ikg|mo |uso|hah|emo|adi|boi|llw|dik|nts|lle|non|sel|all| yo|tle|e i|ike|rab|wen|meh|ame|lho|mee|ken| si|eny|oph|yal|pan|g s",
      bcl: "an | sa|in | na|ng |sa |na | pa|nin|ang| ni| ka| ma|pag| an|n s|ion|sin|asi| as|on |cio|n n|a m| de|n a|ban|a n|a p|kan|rec|ere|der|aro|cho|ech|aci|ga |a s|n d|o n| la|mga| mg|g s|n p|o s|man|sar| o |ho |n l|asa|n k|ay |n m|wa |gwa|igw|al | ig|mba|amb|kat|o i|sai|ong|lam|ata|ro |os |iya|a a|ara|o a|agk|apa|kas|tal|a k|yan|aiy|gka|nac|ali|may|g p|san|ina|aba|a d|lin| ba| da|ag |nka|ink|o m|yo |a i|iba|aka| in|ad |ing| ga|ent|no |ayo|nta|par| pr|ano|ini|hay|aha|iri|dap|ida|abo|han|sta|nal|kai|og |agt|at |pat| co|a g|ant|pro|g n|nte|n i|t n|ia |cia|con| si|dad|do |o k|a b|tan|ron|l n|s a|mag|ran|g m|aki|s n|men|es |g d|y n|tra| so|ona|a l|ra |min|agp|uha|n b|g o|a o|n o|a c|g k|mak|aya|hos|as |ado|o p|ter|bas|ags|i n|lan|ba |g i|bos|gab|bah|li |ico|l a|kap|cci|ecc|tec|ami|isa|imi|ton|ial| re|en |g a|tay|pin|n e|ili|rab|bal|hon|ote|rot|rim|cri|ast|gpa|y m|say|iis|sii|pan|sad|nag| se|ala|gan|bil|n c|nda|d a| di|nga|taw|gta|i a|ios| es|pak|bo |aan|res| pu|a e|sab|ey |ley| le|atu|buh|mit|om |abi|e s|kab|ika|rin|ici|gsa|ale|ica|ni |ipa|nci|ind|nan| ip|cac|waa|nwa|anw| ed|lid|nes|ura|le |ibo|uli| hu|sal| gi|awe|gaw|agi|y p|to |air| bu|rar|int|ito|ndi|kam|dir|agh|oci|soc|lig| li|aen|lar| bi",
      glg: " de|de |os |ión| a | e |to |da |en |ció|ón |der|n d|ere|ito| se|a p|eit|rei|ent|as | co|ade| pe|dad|aci|per| te|do |o d|nte|e a|ten|men| to|e d|al | pr|rso|ers|s e|a t|tod|que|soa| ou|ida| da|te | in| po|s d|oa |cia|es |o a|est| á |ra |oda| do| li|a e| es|a s|ou |con|e e|res|tra| re|nci| o |súa| sú|pro|a d|o e| pa|ar |e c|tos|lib|ue | qu|rá | na|ser|a a|er |úa | ca|ter|ia |dos| en|erá|e s|ica|a c|sta|s p|ber|nac|s n|s s| no|e o|a o| ni|ns | un|ado|e p|o á|io |cci|era|nin|des|nal|is |óns|ame|nto| so|or |se |com|pre|par|no |o t|o p|ona|e n|sen|s t|por|ais|das| as|cto|á s|eme|cio|ha |nha|unh|ara|rda|erd|ant|ici|n p|n s|ibe|n e| di|cas|nta| ac|ont|n t|dic|ndi|oci|soc|ion|ing|s o|enc|tiv|so |ali| ma|o s|a u|ngu|tad|e i|ese| me|lic|seu|ect|n c|lid|vid|ria| tr|e t|eli|e l|gua|igu| ig|l e|o m|r a|re |cti|act|ntr|ecc|ual|rec|a l|ido|nde|ind|o n|a n|cal|dis|ta | os|o ó|r d|iva|ada|mat|ste|fun| fu|tri| ó |á p|tor|nda|pen|na |on |n a|o o|ori|uer|lqu|alq|ca |rac|n o|tar|nid|bre|ibr|lo |aso|esp|a v|a i|ode|pod|und|s a|tec|ote|rot|tes|ena|ura|ín |uín|guí|egu|seg|ita|ome|ari|s i|ase| fa|ond|ial|tic|ixi|inc|sti|ist|cla|cie|e r|omo|s c|man|bal|spe|ati|edi|med|uni|ios|isf| sa|ias|ren| mo|lle|co |ico",
      lit: "as |ir | ir|eis|tei| te|uri|ti |s t|iek|is |os | ki|us |vie|ri |tur|ai | tu| pa|ien| vi|ali|i t|žmo|sę |isę| žm|mog|kie|ena|ais| ne|ini|kvi|ekv| la|gus|lai|ogu|nas|ės |mą | į | jo| bū|s ž|vis| ar|būt| su|ant|mo |ių | ka|s i| pr|s s|mas|pri|isv|ūti|oki|s k|s a|ar | sa|sav| ti| ap| ta|tin|kai|ę į|ama|i b|s v|inė|isi|imą|s n|val|imo|jo |aci|gal| nu|s p|rin|men|i p| ku|dar|cij|sta|kur|nim|je |li |i k|tas|ms |i i|arb|ina|sin|jos| na|mis|lyg|i v|i s|asi|tik|ijo|oti|vo |mok|tie| mo| va|tų |išk|aik|iam|tai|aut|s b|lin|kit|eik|r t| ly|ntu|jim| iš|tuo|sty|ą i|r p|ega|neg|ma | įs| re| be|i n|s j|isė|nės|si |ybė|din|įst|tat|aus|es |nti|kia|i a|mų |ara|oje|aud| ga|iai| at|tis|avo|r l|suo|isu|ek |tyb|ą k|am |mos|pag|aug|aty|ieš|rie|int|nt |sva| ve|gyv|ava|tar|šal| da|o n|ima|kal| sk|kla|omi|ip |aip|o a|ito|r j|avi|ų i|ven|yve|als|jų |kim|alt|ika|agr|nuo|sau|ymo|kio|tym|tu |ška|nam|eka|uti|lie| ša|oma|nac|kin|iki|tok| ši| ji|s g|s l|ksl|ink|vai|ome|pat|o l|rei|o p|o t|ios|psa|aps|io |san|nių|uo |min|nie| ni| as|vę |ver|o k|ikl|cia|oci|soc|r k|eli|yti| to|ų t|irt|kių|s š|pas|udo|u k| or|uom|uok|eny|eno|imų|sla|i į|ati|tą |a t|lst|vei|ran|ėji|ary|tim|usi|a k|lti|gas|uot|tos|ist|ndi|ėms|ją |o v|gą ",
      umb: "kwe| om|e o|oku| ok|a o|a k|nda| kw|ko | ly|da |wen|la |end|nu |unu|mun|omu|wa |oko|ka |o l| ko|kwa|omo|mok|iwa|le |we |o y|i o|okw|te |eka|mwe|olo| vy|a v|osi|o k|ali|ete| ey|lyo|wet|si |yok| yo|lo |vo |ang|ong|kut|sok|iso|u e|u o|a e|a l|ye |oci|gi |eye|oka|fek|ofe|nde|iñg|nga|o o|ata|ñgi| li|eci| nd|i k|ngi|wat|kal|ilo|ovo|vyo| va|pan| oc|li |so |a y|owi|ci |kuk|e k|nge|wiñ| al|avo|kul|lon|ga |ing|ili|e l|ale|lom|ala|ge |ovi|ta |ngo|ati| ya|imw|go |eli|vya|a a|uli| ol|he |ahe|iha|ele|ika| wo| ku|lil|isa|a u|ti |yo |alo|kol|o v| ov|lis|i v|lya|lin|cih|uti| yi|yal|ako|ukw| lo|wav|ung|akw|ikw|yos|val|tiw|upa| ye|onj|i l|lim|and|uka| vo| el|gol|sa |su |kok|aka|e y|lyu|ñgo| ka|yov|vik|e v|eko|yah|gis|omw| wa| la|lik|e u|ava|tav|olw|ila|e e|vak|kov|omb|aso|a c|tis| ce|tat|iyo|epa|dec|a n|va |u c|eso|ela|ama|kat| ek|kup| ha|o e|co |ekw|asu|has|yon|asi|yow| ke|i c|upi| ci|wil|cit|ole|eyo| co|liw| yu| ca|kas| ec|uta|yim|wal|yol|kiy|e w|yuk|lye| of|o w|o c|i a|ita|ola|lwi|uva|lit|iti|njo| on|apo|ipa|sil| um|lof|wam|kun|i e|anj|cel|del|han| ak|u y|añg| up|o a|tun|atu|kak|yik|yof|iki|eti|fet|oñg|loñ|ulo|koc|yi |wiw|kwi| ow| os|kuv|ndu| es|vos|yel|uyu|mak|san|mbo|jon|i w|ngu|oco|lok|yas|e n",
      tsn: " le|le | mo|ng |go | ts|we |gwe| go|ya |ong| ya|lo |ngw| bo| e | di|a l|tsh|sa |e t|elo|a g|tlh|tsa|e m|olo|a b|wa |na |e l|o y|o t|a t|wan| kg|eng|kgo|o n| tl|a k|mon|la | na|ets|ane|mo | o |hwa|shw|tse| ba|e e|nel|a m|ka | ga|tla|ots|o m| ka|ele|o l|ba |e d|dit|e g|got|di | a |se | se|ang|a d|otl|bot|e o|lho|o e|ga |lol|e b| nn|a n|lha|so |lel|tso|o b|seg|ose|let|ola|ego|gol|o o|g l|kan|eka|nng|e k| ma|aka|atl|mol|sen|o g|aba|ela|its|los|tho|ano|gat|oth|yo |agi|tsw|e n|e y|len| yo|hab|o k|to | th|o s| nt|lhe|ho |agw|gag|g y|kga|mel|rel|ire|tlo|o a|ana|lek|iwa|aga|bon|g m|tir|edi|šha|tšh|lao|g k|i k|tle|ntl| te|dir|ao |e s|lwa|hir|shi|a e|pe |o d|any|a a|i l|a s|ale|alo|a y|g t|jwa| jw|hol|mot|gi |kwa|dik|lon|etl|tet| wa|mai|swe|set|thu|ko |non|ats| me|han|ume|ala| mm|nya|iti|he |bat|hut|nna|ira|itl|no | ne|ro |iro|nan|elw|she|ona|i b|hot|oag|log|a p|wen|i t|ikg|adi| ti|o i|lat|g g|ame|mog|bo |okg|hel|tha| sa|nag|bod|emo|nyo|isi|ile|hok|ogo|uto|si |pa | it| ko|the|diw|ope| op|tek|itš|odi|rwa|sep| ph| kw|pol|gis|bok|me |o j|aag|baa|hop|yal|opa|are|kar|ing|oke|ato|lam|bak|leb|ke | ke|amo|eny|gwa|mok|g n|nye|swa|boa|tum| ja|gan|g a|hag|gon|lan|net|mme| la|ban| fe|ika|rag|ne |g e|nen",
      vec: " de|de | ła|ła |el | el|ion|ar | e |sio|on |to |e ł|o d|rit| in|par| pa| co|a ł|eri|łe |ga |der|tà |a d| ga|un | a |a s|asi|n e| i |ito|e i|a e| on|te |onj|e d|ti |’l |ent|con|int|l d| re|nte|só | só|l g|o a|he | da|a p|e a| łe| pr|jun|nju|da |che| o |e c|sar|e e| ch|ałe|n c|na |e o|ità| na|e’l|art|ta |ens|èsa| ès|e p|men| po| se|tar|a c|sa |bar|ałi|o e|ona|e n| so| łi|i d|i e|pro|dar|e s|à d|nas|nał|sta|i i|sia|rà |ars|osi|ze |rso|n d|a n|eze|nji|se |ro |esi|nta|ara|iba|łib|nsa|tut| l’|tri|ame|o o|arà|ist|a g|usi|i s| cu|io |ita|nes| ne|rtà| tu|r ł| un|nto| ma| si|l p|ond|sos|tra|so |nsi|sun|esu|à p|e r|iti|ji |onp|ren|ont|tes|ste|in |ia |de’|l s|rio|isi|ra |dis|ras|ghe|łi |e f|sie|r d|i p|man|r e|nda|res|ca |nca|anc|a a|str|a i|o i|go | st| fa|n o|iał|sen|’st| ’s|i c|ntr|ien| di|o c|ver|est|r a|o p|nti|l m|pie|nde|son|ego|ega|ari|r i|var| an|rim|a’l|i o|e m|pod|imi| al|n p|pre|o s|co |ani|ri |uti|rus|tru|l’i|età|e l| ca|ato| fo|ó d|łit| a’|ant|dez| cr| me|ten|à è|oda|ó p|à o|den|en | vi|a v|o n|ne |rte|ltr|teg|nio|ini|or |sti|una|ełi|i g| ze|à e|npa|ni |ers|a r|a è| su|com| vo|ans|ja |à i| ar|fon|esp|tro|ote|rot|ura|re |o ł|cia|r t|à c|min|ene|alt|opi|eso|oło|n s|ute|e t|rse|anj",
      nso: "go | le|le | go|a g|lo |ba |o y|ng | ma|ka | di|ya | ya| ka| mo|a m|etš|a l|elo| tš|a k|ang|e m|o l|na |e t|man|wa |o t| bo|tok| a |e g|la |a b| ga|a t|we |oke| se|gwe|kel| ba|ša |o a|o m|tša| na|e l|o k|tše|a s| to| o |ele|a d|o b|ago|ego|dit|tšh|o g|oba|gob|e d|tho| e |šo |ngw| ye|ong|g l|di |o n| tl|ga |swa|let|olo|tla|tšw|mo |ane|ho |še |oko|aba|šha| kg|tšo|wan|ela|hab| sw| th|g o|ola|ye |e b|a n|kgo|šwa|eo |set|ito|e s|ona|log|mol| wa|se |oth|ao |eth|ogo|thu|to |eng|a y|o d|hut|e k|o s|net|kol|lok|a a|gag|rel|ire|e e|nag|agw| wo|ana|o w| yo|hlo|lel| bj|šwe|alo|aga|leg|wag| ph|yo |lwa|mel|pha|wo |get|kge|ano|aka|ato|lat|din|o o|hir|šeg|o e|ala|mok|šom| la|mog|nya|e y|lao| ts|mot|i g|ke | ke|kan|iti| me|kar|g y|gwa|eba|ohl|šhi|hel|phe|oph|bo |bot|ume|pol|a w|sa | sa|gon| lo| am|are|gel|ale|a p|len|e n|atš|itš|rwa|o f|emo|edi|bon|bja|ta |tle|ban|no |ušo|tlh|amo|wel|išo|ing|ge | ge|the|leb|o š|ko |hla|bop|dir|e a|ahl|aem|mae|ntl|šon| mm|mon| fi|lek|oka|uto|omo|i b|ret|ape|oge|lal| nn|ošo|pel|okg|abo|gab|lon|lag|yeo|a f|ile|moš|kga|dik|ši |yal|i l|tlo|a e|tsh|otl|elw|odi|i t| fe|med|dum|mal|ora|oll|hol| nt|jo |boi|lwe|i s|bat|hom|lho|ikg|tha|nel|muš|mmu|ha |apa|ne |adi|eny|iri|šal",
      ban: "ng |an | sa|ang|ing|san| ma|rin|ane| pa|ne |n s|ak | ka| ke| ha|hak| ri|nga|ma | ng| ja|in |sal|lan| pe|n k|uwe|iri|g s|ara|alu|lui|gan|uir|duw|adu|mad|adi|yan|nma|anm|jan|asa|n p|we |g p|g j|pun|a s|a m|man|e h|nge|tan|n m|awi| la|kan|nin|ra |uta| ne|pan|ur | tu|ih |ala|aya|n n|wan|eng|nte|un |ngg|tur|ah | da|en | ut|ana|bas|beb|nan|lih| wi|apa| ta|are|aha|ent|iad|wia|eba|han|ian|ani|ten|din|wi |taw|aan|a n|gar|asi|n w|pen|ebe|da |ika|ngk|a p|keb|ama|ata|aje|n r|aka|ipu|kal|e s|saj|g n|nen|g k|ado|oni|ron|ero|jer|ela|dan|ate|ka |anu|dos|dad|nya|al |aki|i k|a t| wa|ami|ren|ksa|ega|sak|gka|nay|ewa|mar|nik|ep |e p|aks|ndi|sar|iwa|upa|era|neg|oli|ina|uni| pu| se|h s|pat|ban|lak|h p|rep|os |ran|a k|ali|ngs|aga|sa |ar |e m|ung|atu|arg|n l|usa|sam|ngu|ewe|tat|nip|swa| sw|n t| pi|n d|i n|a u|kat|osa|eda| mu|ena|e k| me|r n|lah|k r|nda|ayo|ida|um |uku|k p|gsa|kew| ba|ras|r p|wen|par|pak|k h|eka| ny|i m|end|ari|yom|gay|kab|uan|pa |gi |kin|kum|huk| hu|n u|h r|war|dik|mal|g t|ta |ti |sti|sap| su|s k|per| in|ntu|pol| po|car|rga|pin|eh |r m|tah|ant|nus|mi |idi|did|rya|ary| pr|ngi|kar|pag|gew|ha |k k|min|uru|ut |tut|ita|eta|dil|oma|ri |ust|mus|ira|g d|sio|gam| ag|as |abi|i p|g h|g r|il |awa|lar",
      bug: "na |ng | na|eng| ri|ang|nge|nna|ngn|gng|ge |sen| ma|app| si| ta|nap|ase|a r| pa|ddi|a n|ri |tau|a t|ale|edd|au |ega|ria| ha|ai |hak|len|e n|ias|ak |ga |a a|pun|inn|ing|ass|a s|nai|pa |nin|sin|ppu|ini|are|gen| ru|ngi|upa|g r|una|rup|ana|ye | ye|gi |ama|i h|lal|man|asa|enn|ara|le |i r|ila| de| ke|ssa|g n|ae | as|e a|san|a m|din|a p|di |sed|ane| se|e r|u n|ada|ann|ala|ren|e p| la|da |lan| we|nas|aga|ipa|i a|e s|pan| ad|wed|reg| ar|sal|pad|ole|i n|g a|lai|asi|pas|a k|i s|ung|rip|g s|ena|jam|ola| pe|ran|ppa|e m|i l|akk|gan|ngk|ong|map|ril|aji|ttu|kan|gar|neg| ne|gka|att|g m|ain| ja|nar|ett| e |k r|i p|nan|i t|ra |e d|ban|gag|bas|eba|beb|ata|sib|nen|i m|unn|iba| mo| wa|ebe|keb|uwe|de | te| sa|par|kel|g p| ba|kun|ura|a d|uru|mas|aka|bol| al|u r|ko |we |kol|tu |add|o r|e y| hu|pol| po|mak|deg| at|bbi|ian|elo|kko|ell|auw|nga|cen|iga|nat|g t|dan| di| tu|apa|uku|huk|ro |tte|ma |ngs|atu|leb|iko|sik|ssi|rga|arg|ekk|rel|uan|la |an |ece|pat|gau| to|ele|a w|e w|a y|lu |a b|gsa|sil|rus|ie |ire|ebb|oe |wet|rek|llu|ppi|tun|dec|wa |awa|baw|u w|ten|ter|ka |per|mat|g y|pak| an|lua|sse|pig|dde|nre|anr|ton|olo| ia|caj|nca|ona|nro|onr|sa |tur|k n|e h|u p|bir|lin|a e|eri|mae|e k|si |elu|a l|tam|ru |ntu|ade",
      knc: "nzə|ro | a |be |ye | kə|zə |mbe| ka|a k| ha|akk|abe|kki|hak|ndu| nd|a n|a a| ya| la|adə|ben|aye|en |inz|kin|yay|əbe|ji | mb|lan|ma |də |eji|bej|ə a|o a|aro|əla|du |e m|kəl|əna|kən| ba| ga|ga |lar|e a|u y|an |rdə| ad|anz|shi| sh|ard|əga| ku|au | au|e h|n k|a s|uro|wa | na| ye|so |obe| sa|ara|iya|kal|ama| nə| su|amb|n n|in |ənd|ndo|kur|inb|dəg|u a|kam|na | fa| nz|and|ida|ba |ə k|awa|la |nyi|a b| fu|dəb|a l|nəm|sur|e s|aso|ana|gan| ci| ab|a d|tə |a g|kar|dən|uru|a y|baa|ə n|ru | da|wo |əra|ndi|ya | sə|tən|ade|gad|asa|ta |aar|aa |al | as|aya|i k| du|e n| ta|uwu|din| tə|nam|ata|e k|o k|am |a f|o n|təg|i a|əmk|ə s|nba|awu|iga|nga|wu |ala|utu|o w|da |nza|zəg|əli|gin|ima|zən|u k|adi|owu|cid|əwa| wa|san|əgi|laa|awo|de |bem|fut|n a|wan|rad|do |ali|i n|mka|e l|u s|zəb|o s|ayi|wur|n y|ibe|iwa|əgə|za |mar|a t|wal|mər| mə|tu |ndə|azə|wum|fuw|kun|gən|uma| ng|o g|ema|yir|gay|o h|on |tam|kat|ada|lmu|ilm| il|jam| ja|dob| ny|dəw|yaw| ay|ən |hir|i s|liw|ela|bel|how| ho|atə|nat|iro|aid|zəl|ltə|hi |tin|dum|nbe|o t|ə f|irt|rta|n d|kiw|a h| wo|mu |sad|ə h|ədə|taw|lil|dal|sha|n f|iwo|o f|enz|diy|ədi|səd|yi |əny|ang|nab|nya|wob|unz| aw| ra| ji|lam| al|nad|wow|ram|ə y|dar|a i|utə| yi|u n|di |kas|fan|ənz|təb",
      kng: " ya|na |ya |a k| na|a y|a m| ku|a n|u y|and|a b| mu|wan| ba| lu|yin|tu |ve |yan| ki|ka | yi|nda| mp|a l|di |ndi|la |ana|ntu|si |so |da |ons|e n|mpe|nso|aka| ke|pe |mun|unt|lu |i y|alu|sal| ma|o m|luv|ta |ina|nza|ke |u m|e y|uve|ndu|ala|u n|i m|za |ban|amb|u k|isa|fwa| ko|to |kon|ayi|ma |du |kim|ulu|o y|kan| me|wa |usa|kus|anz|ama|ang|end| ve|yon|nyo| ny|a v|a d| to|i k|nsi|ins|i n|sa |mos| mo|mbu|e k|und| bi|osi| fw|ika|kuz|len|uti|imp|mab|uka|ata| le|ind|vwa|tin|pwa|mpw|kuk|ba | at|kis|adi|mba|olo|ngu|bu | di|uta|mut|lo |sam| sa|sik|isi|e m|su |ila|ula|e l|mu |usu|abu|nga| nz|lus|yi |yay|ngi|but|o n|ni | nt| ka|dya|kak|dil|esa|amu|ti |imv|o k| bu|bal|e b|wu |awu|kul|ant|gu |ngo|inz|bun|a t|mpa|utu|dis| dy|nka|ank|mvu|kin|u f|iku|ong|uzi|zwa|i l|bim|sad| mb|vuk|dik|uzw|lam|tan|mef|idi|kat|lwa|fun|kuv|ga |ken|bak|ing|luz|baw|bis|yal|uya|luy|bay|nsa|mak|usi|mus|nta|ibu|kub|a a|atu|ufu|uvw|i a|ani|swa|uza| ni|ela|tuk|kol|lak|uso|ola| ns|twa|uko|pam|kut|bam|i s|eng|ku |umb|don|ndo|yak|i t|iti|mbi|eta| nk|iki|gi |uku|a s|luk|sol|nzo|te |nak|oko|mam|tal|efw|pes|dib|u b|ati|gid|uke|nu | nd|umu| vw|ilw|dus|luf|zo |u t|mvw|met|bum| ng|sul|ima|wel|kwe|ukw|zol|yam|ota|kot|lan|zit|i b|i v|kun",
      ibb: " nd|ke |e u| mm|ndi| ke|me |de |e n| em|o e|en |nye|mme|owo| en| ow|wo |yen|ene|mi |emi|ye |i e|e e|eny| un|nen|eke|une|edi| ek|e o| uk|et |n n|ne |e i|n e|e m| ed|e k| ye| es|ana|em | id|ede|esi| mb|un |di | nk|iet|kpo|na |ukp|sie|kem|kpu| in|kie|eme|did|ie |idu| nt|nam|am |ndo|o u|o o|mo |o n|mmo|yun|t e|din|dib|kpe| uf|o m|ked|nyu|no |ded|o k|an |on |nkp|e a|du |m e|iny|kpa|po |ho | kp|ade|om |ina|dut|ono| ub|m u|uke|bo |ikp|i o| ki|ini|bet|mbe|ida|t m|ode|in |oho|wem|uwe| uw|bio|ut | ot|ru |uru|pur|uto|ni |i m|do |fen|omo|dom|u u|ok | us|to |dik|iso| ut|mde|tom|ibo| is|n i|ri |o i|oki|mok|edu|ide| et|a n| on| ak|diy|ak |nek|a e|n o|i u|man|u o|puk|akp|pan|idi|m n| ob|ara| or|a m|op |a k|t k| ny|ema| as|io |kar|pon|nwa| ik|oto|boh|ubo|n k|ufo| an|i k|m k|k n|pem|uka|o a|i n|uk |ed |wed|nwe| nw|usu|uan|te |mad|ti |e y|a u|asa| mi|obi| ef|n m|m m|dud|sun|n y|ka |o y| ey|t i|ro |oro|ond| of|ra |aba|tod|fin|re |nte|nde|ko |efe| ab|k u|dis|n u| eb|ony|pa |nti|pe |med|da |ndu|mbo|eye|dem|aha|ban|ena|nka|san|i a|sop|ibi|sin|ion|eko|se |he |ruk|oru|eto|sua|d e|odu| od|a o|mba|ama|fok|iok|a a|anw|mek|so |ufe|m o|kon|k m|ha | se|si |asi|bas|ufi|ito|dit|ere|ike|son|ori|pep|fon|u n|a y|bon",
      lug: "a o| ok| mu|wa |oku|nga|mu |ga | ob|a e|tu |ntu|bwa|na |a a|ba |ang|ra |a m| ng|wan|aba| n |a n|li |oba|a k|unt|la | ab|era|a b|ibw|mun|u n|ka |ali|tee|ate|i m|uli|bul|obu|eek|u a| bu|dde|za | ku|ana|ban|sa |edd|ala| eb|mbe|iri|ye |gwa|emb|omu| om| ek|u b|ant|ira|e o|n o|be |amu| en|eki|kwa| er|dem| ed| ki|nna|okw|ama|kuk|eer| ye|eri|kus| ba|ggw|kol| wa| em|usa|ula| am|inz| ly|eka|any|ola|i e|ina|kwe|o e| eg| ky|ekw|u m|mus| bw|kir|ere|ebi|u e|ri |n e|uyi|a y|y o|a l|onn|uso|u k|ger|e e|bal|egg|o o|mat|zib|izi|aan| at|awa|no |ko |yo |bwe|yin|kul|bir|zes|wal|aga|nge|ako|gan|ebw|nza|lin|esa|e m|oze| ma|riz| te|nyi|kut|ya |ufu|kub|sin|we |ngi|obo|kan|nka|yen|eby|y e|gir|eta|una|aka|lye|tuu|wo |bee|u o|ku |i y|ino|kin|e b|a w|isa|o b|sob|zi |e n|wam|imu|e l|uku|bon|de |san| by|ata|wat|iko|kuy| ag|boz| al|ngo|lwa|umu|ulu|utu|uki|ewa|taa|o n|ong|si |nsi|by |e k|muk|usi|rwa|ne |i o|i n|enk|bye|rir|ma |kug|mbi|iza|lal|uko|kis|enn| og|ole|kye|a g|asa|add|ani|nya|sib|ens|ni |ini|uka|i k| aw|uga|gi |yam|n a|tab|uma|umb|kyo|wen|uwa|bib|wee|ing|a z| ey|ze |emu|ete| et|tew|a t|yiz|mul|awo|u g|nzi| kw|tal|o a|o k|fun|afu|and|i b|ibi|ung|ro |amb|igi|aku|saa|baa|nyu|yig|ayi|gya|wet|kik|go |a s|ti ",
      ace: "an |ng |eun| ha|ang|oe |peu|ak |on |ngo|gon|ah |nya| ta|na | ny|ung| ng|reu|yan| na| pe|ure|meu|roe| ke|eut|hak|keu| me| ba| ur|at |teu|ee |han|a h|dro|ban| di|ara| be|ata|g n|iep|tie|am |eur| sa|nan|jeu|ut |n n|ep |eug|tap|seu| la| te| ti|uga|e n|euk| da|ala| at|a n|eba|beb|awa|ong|ra |tan|n t|eum|eh |n b|p u|ih | se|nda|h n|a t|a b|h t|ape|eu | pi|oh |eub|e p|lam|e t|ai | ma|um | si|dan|eul|asa|t n|und|neu|ana|n p| wa|n a|bah|lah|and|lan|wa |euh|n k|nyo|n h|eus|ula| bu|k t| je| dr|anj| pa|ma |g s|n m|h p|eng|nga|ran|n d|om |hai|a s|yoe|e b|mas|san|ngg| ra|ta |beu|g d|nje|taw|uka|ek |a k|una|a m|ura|yar|sya|gan|soe|n s| li|sid|ya |sab|aka|k n|ka |dum|ndu|har|ot |di |idr|aya| ka|kat|e u|e d|ok |a p|bat|aba|euj|gah|adi|lak|pat|et |n j| ja|kom|uko|kan|en |asi|ari|t t|aan|un |h d|sa |ame|ate|ama|sia|oih|usa|h h|g k|i n|sal|ila|bue|dee|lin|h b|ieh|g p|bak|aja|huk|ade|k m|dip| in|lee|uny|uh |rak|dar|uta| so|gar| ne|nto|ant|rat|uja|h s|aro| le|g h|nta|ep‐|ina|k a|uma|t b| ji|don|gro| hu|k h|ile|t h|t s|ngs|gam|aga| ag|m p|n l|heu|e s|ahe|a l|ane|e a|ggr|‐ti|p‐t|g b|ue |toe|jam|oe‐|eud|k k|ngk|ika|ino|ute|ie |wah|ham|n u|taa|yat|k b|tam|sam|a d|ia |man|use|t l|uk | an|aso|ga |g m| ya|ri ",
      bam: " ka|ka |ni |a k|an | ni|kan| bɛ| la|i k|la |ya |n k|ye | ye|ɔgɔ|na |li |ɛɛ |bɛɛ|ɛ k|ali| ma| i |man|sir|ra | da|en |ama|gɔ |wal| wa|ira|n n| kɛ|mɔg| ja|a n|a b| mi|ma |a d|ana| mɔ| ba|’i |ɔrɔ|min| o |iya| si| sa|in |ara| na| kɔ|i m|i j|dan| k’|i d|a s|len| jo|bɛ |jam|a m|ɛrɛ|i n| n’|a l|a y|kɔn| fɛ|kɛ | tɛ|iri|ari|’a |aw |ɛ s|a i|ɔnɔ|i t|ɛ b|n b|ani| an|riy|sar|ɛ m|tɛ |rɔ |ko |a w|i b|si |asi|a t|k’i|ɛn |o j|a f|a j| fa|den|aya|nɔ |n y|i s|ale| de|ang|aar|baa|ila|ala|kal| di|inn|tig|o b|ɛ j|ɲa |i f|olo|nu |nnu|osi|jos|raw|kun|ati|e k|w n|ɛ n|aga| se|ɔ m|nɛ |inɛ|nti| ta|lan|bɔ |i y|ɔ b|don|ga |ugu|a a|fɛn|da | jɛ|igɛ|ɔn |ɲɔg| ɲɔ|nɲa|u k|ada|bil|abi|rɛ |n’i|o l|ɔ k| fo| a | ti|aba|nw |jo |n i|a ɲ|go |ɔ s|iɲɛ|o m|yɔr|n o|n’a|ri |hɔr|i h|gɔn|afa|kab|un | ko|i l|aka|lak|on |e m|igi|a o| bɔ|o f| sɔ|n f| fi|ant| hɔ| cɛ|ɛ l|dam| ha|aay|maa|fur| fu| ku| tɔ|ti |ile|gu |mɛn|riw|e b|’o |e f|iwa|ɛ y|uya|nna|n m| do|ago|nga|kar|nka| du|o k|ɲɛ |n w| jɔ|iir|n d|fan|oma|lom|wol|nin|n j|cɛ |u b|ili|a h|nen|ɲɛn|ade|ɛɛr|u d|nba|ru |uru|tɔn|ɛku|jɛ |dil|gan|i i|sug| su|w l|ɛmɛ|w k|uma|ew |fɛ |aju|ɔ o|diɲ|ɛ i|ɔ n|sɔr|isi|ɛya|ank| t’|ɔnɲ|rɔn|i ɲ|wa | b’|taa|anb|mad|had|lu |yir| yi|amu|aam|lad|ɛna| ɲɛ|sag",
      tzm: "en | ye| d |an | n |ur | s |ad | ad|ḥe|lḥ| lh| gh|agh|n i| i |̣eq|d y|n t|eqq| ta|ett|qq |s l|dan| is|gh |la |hur|ell|ra |d t|r s|ghu|is | na| am|nag|i t|mda|ll |n g|a y|yet|t i| te| ti|di |n a|l a| di|akk|in |ara|a d|n d| ar|ma |ghe|n l|ull|it |edd|dd |kul| ku|amd| ur| id| wa| we| ma|a n|q a|li |rt | yi| ak|d a|as |a t|lla|men|es |d i|a i| le|sen|lli|lel|a a|n s|t t|ar |na |n n|eg | tm|n y| dd|tta|t a| as|r a|ken|kw |kkw|twa|i w|n u|d u|deg|mur|t n| tu|s d| ag|at |wen|gar|i l|win|ttu|wak|n w| tl| de|s t|ḍe|i n|hel|d l|tam| se|rfa|wan|w d|urt|er |h d|iya|gi |sse|yes|erf|zer| tt| ik|ddu|q i|ḥu| in|tle|nt |hed|r i|wa |arw|mga|idd|sef|fan|ize|n m| im|ya |udd|ttw|i u|uḥ|mad|tim|s n|i d|emd|wem|tmu|ef |ame|rwa|i g|̣en|iḍ|ddi|iḥ|ili|ess| u |el |t d|awa|msa|lan|a l|kke|tte|ikh|em |wad|way|̣ud|s y|mma|s k|i i|ant| ya|siy|̣ṛ|un |agi|dda|til|khe|med|tes|ana|taw|l n|d n|chu|all|yek|am |g w|aḥ|r d| iz| ne|nun|anu|qan|lqa| lq|t l|iwi| ss|den|gha|ert|der|nes|man|tag|s u|hwa|ehw|yeh|ala|ila|lna|eln| la|ṛr|ray|ṣe|yed|iwe|n k| lâ|yen|ile| il|ha |ski|esk|lt |hul|ekh|del|i a|kra| kr|yn |ayn|a s|h a|ir |ezm|net|eḥ|awi|ki |u a|leq|fel| fe|ssi|use|ine|il |r t|tem|edm|hef|ail|aw |naw|yas|asi",
      kmb: "a k|la | ku|ya |ala| mu| ki|a m|kal| o |u k|o k|ni | ni| ky|mu | dy|dya|a o|lu |ang| ya|tok|kya|nga|na |so |oso|a n|oka|nge|mba|i k|a d|kut|xi | wa|kwa| ka|mut|hu |elu|thu|ba |uth| kw|uka|gel|ka |a i|wal|wa |uto|ene|ban|ga |i m|kuk|ku | mb|e k|u m|ne |ana|kik|u n|a y|ngu|iji| ng|u y|ela|u w|i y|ixi| mw|kit|kel|ye |ika|wen|isa|nda|ji |oke|u i| ji|ena|and|und|kil|ilu|ung|ke |iba|ila|aka|a w|o w|yos|ten|kus|ulu|kub|e m|ta |alu|sa |oxi|mox|amb|olo|kum|gu |wos| wo|wat|ate|muk|gan|lo |tun|du |ndu| it|mwe|kan|san|kis|ita|o m|luk|imo|ong| ph|kye|a t|i d| ye|di |ato|nji|kij|sok|idi| ix|u d|kud|u u|ula|tes|we |e o| ke|a s|o i| di|uku|da |udi|ma |lun|lak|eng|ele|wij|yat| we|nu |wan|uba|e n|hal|pha| se|e y|yen|kib|a j|uke|ki |o n| yo|ito|itu|a u|i n|jin|kwe| im|lon|u o|uta|su |i w|ja | ja|utu|kat|iki|fol|ute| ut|kul|i u| en|kim|adi|ikw|tal|esa|nde|dal|yan|ngo|fun| ko|jil|eny|i o|uki|nen| ik|umu|lel|atu| uf|ing|uso|vwa|o y|esu|u j|ge |ufu|lan|o d|nyo|jya|uma|i j|jix|ukw|usa|unj|ite|o a|kuz|sak|dib|kyo|mun| os|mbo|imb|go |kos|u p|ijy| ib| tu|te |i i| a |han|xil|exi| il|kam|dit| un|a a|ilo|gam|kwi|tul|ivw|ubu|lul|a p| so|iku|uni|se |oko|o o|mwi|ote| to|kex| uk| bh|ufo|e a|ind|bul|sen|inu|ngh|kiv",
      lun: "ng | mu|la | ku|a k|di |aku|tu |chi|g a| a |ntu|mun|ma | ch|a n|unt|a m|ndi|ela| we| na|aka|ima|ind|jim|eji| ni|i m| in|u w|a i|wu |i k|a w|shi|awu|hi |lon|u m|wej|sha|ing|kul|wa |nak|i n|ala| ja|na |ung| kw|muk|ulo|kum|ka |a c|hak|cha|iku|ewa|wen|a h| wa|g o|u j|kut| ha|ana|vu |ovu| ov|yi |idi|u c|him|nik|ong|adi|mbi|kwa|jak|kuk| an|ang|tun|bi |nsh|tel|ha |esh|amu|han|kus|kwi|ate|ila| he|uch|ula|imb|ilu|a a|kew|enk|uku|mu |u a|hin|a y|zat|nke|u n|kal|hel|ond|i a|ham|eka|eng|mwi|a d|itu|and|del|nde|wak|ins|nin|i c| ya|ona|mon|ina|nji|i h|ach| yi|ama| ak|nat| mw|nyi|kin|umo|lu |ata|uma|sak|ku |udi|ta |ati|uza|kuz|mul|wes|ich|i y|awa|u k|uta|muc|i j|wal|uka|kuy|uke|wit| di|yid|naw|kam|bul|ayi|wan| ko|i i|kad|waw|akw|ni |ken|ji |uki|iha|dik|u y|g e|ush|mbu|si |osi|kos|ahi|ika|ish|kud|ash|twe|atw|any|dil|hih| ye|da |eni|kwe|wil|imu|dim|li |ya |kun|yin|g i|nan|yan|win|iwa|din|tam|etu|ant|amb|mwe|his|nda|hik|til|ule|umu|was|inj|jin|hu |nam|mpi|iki|wah|hiw|kuh|jil| da|eyi|ney| ne|isa|hid|usa|jaw|wat|wun|tan|umb| ma|uya|una|end|lun|pin| ji|ahu|nka|omw| om| ny| i |hen|che|yej|wik|u h|eta|tal|kuc|ulu|sem|wet|fwe|twa|utw|uyi| hi|iji|iwu|mpe|omp|ilo|yil|nic| en|a e|iyi| at|haw|lek|mba|emb| ew",
      war: "an |nga|ga | ng| pa| ha| ka|han|pag| hi|in | ma| an|ata|mga|hin| mg|kat|ay |ya |a m|a p|gan|on |da |n n|n h|ug |n p|n k|ung| ug|iya|a h|a k|ha |n i|adu|n m|dun|tad|ada| iy|sa | o |ara|may|a n| ta| di|a t|n a| na|y k|o h|pan|kad|tag|n u|yon|ags|ud |o n|ang|al |a s|ana|gsa|gad|a u|o p|man|syo|asa|ala| ba|ag | in|a i|g h|n b|agp|asy|awo|ray|war| wa|to |a d|wo |a a|usa| us|g a|nas|ina|was|taw|nal|ing|gpa|ali|iri|dir|agt|i h|ra |ng |aha|ri |bal|san|ad |kas|aka|g p|o a|a b|ida|awa|hat|no |g m|ini|uga|ahi|y h|o m|tan|ili| bu|uha|buh|gka|agi|bah|aba|i n| su|tal|him|at |pin| pi|hiy|kan|int|mo |n t|did|a o|aya|sya| ko| tu|nah|nan|iba| bi|n o|od |agb|la |kon|lwa|alw|gba|aho|tra|uro|o u|l n|ona|yo |ho |pam|o k|agk|ano|d a|sud|asu|gin|ngo|ni | la|hi |as |rab|uma|ton|os |par| sa|sal|ati|ko |iko|upa|lin|ami|gar|ban|n d|ern|gi |aag|abu|a g|kal|d h|aga|yan|n e|yal|d m|gtu|ak |mil|rin|ba |lip|mah|aud|lau|ka | so| ig|lig|ama| ki|ihi|tik|ras|aso|mag|gud|g i|tun|g k|duk|osy|sos|kau|uka| un|hon|n s| pu| ib|ro |imo|tub|mak|pak|ila|n w|yer|bye|ent|ito|ika|amo|it |sug|n g|dad|ira|edu| ed|tum|aup|ngb|til|non|anu|pod|upo|sak|sam|ari| pr|agh|alu|ato|ta |nta|gon|lik|bli|s h|d i|k h|uyo|ig |uli|bul|dto|adt|isa",
      dyu: "a’ | ká| kà|ye | ye|kà | à |ni |la | bɛ|án |kán| la| ni|ya’| i |ɔgɔ|ya |ká |mɔg|a k| mɔ|bɛɛ|á k|ɛɛ |na |ɔrɔ|n k| mí|’ y|mín|ín |i y|’ k| be|’ l|be | ya| kɛ|te |ma |à k|’ m| te| jà| wá|n n|nya|ɛ k|ɛrɛ|i’ |a b|wál|ra |àma|áli| ò |ima| ní|jàm|ɛn |gɔ | mà|e k|à l|ɔ’ |lim|ní |n’ | lá|iya| kɔ|à à|o’ |e à|e b| há|rɛ |ana|man|rɔ |n b|i k| sà|ɛ y|à m|e s|à b|li’|ɔnɔ|kɔn|hák| dí|gbɛ| bá|n y|ara|bɛn|’ s|kɛ |mà | bɔ|’ n| kó|aw |’ b| sɔ|riy|à y|a m|nɔ |e m|sàr|a j| sí| fà|ɔ k|àni|à s| gb|kɛr|sɔr|yɛr| yɛ| fɛ|gɔ’|n m|báa| sì| tá|àri|na’|e w|yɔr|a d|i m|a s|a n|ákɛ| là|lá |áar|dí |à i|ali|a f|en | cɛ|bɔ |an’| dà|yaw|ólo|’ t|dén|ìgi|sìg| àn|’ f| sé|ɔ s|ána|ɛra|ógo|bɛr| ó |a t|w n|ɔn |ra’|e i|à t|i à|à d|si |se | se|’ d| a |aya| ɲá| tɔ|cóg| có|sí |fɛn|i b|àra| má|ɛya|lan|kàl|á d|ɛ l|ɔ à|nga|n s|a w|àng|li |a à|ɛ’ |à n|ko | í | dɔ|gɔn|e ò|a y|tá |í i|i t|àla| na| dò|so’|u’ |e’ |rɔ’|a i|a g|ina|kan|nin|ɔny|a h|kó | ù |ili|ɔ b|w l|kɛy|e n|den|ama| dé|fúr| fú|i n|i ɲ|úny|dún| dú|ma’|kùn| kù|òn |dòn|i l|e d|ga |nna|go |ò k|i s|len|kél| ké|í t| nà|ɛ n|a c|i f|ɛnn|dàn|í à| lɔ|dɔ |tig|áki|rɔn|hɔr| wó|da’|gid|ɲɔg| ɲɔ|la’|úru|ò b|ow | bè| fá|ɛ t| yɔ|ɔ y|jɔn|ìna|mìn| mì|ɲán|ɛ b|e j|in |í y|éle|ból|àga|íin|díi",
      wol: "am | ci|ci | sa|sañ|añ | na|it | ak| am| mb|lu |ak |aa |ñ s|mu |na |m n|ne | ko|al | ku|baa|mba|te | mu|ko | wa|a s|ñu | ni|u n| te| ne|nit|u a|e a| lu|t k|i a|oo |u m|ar |ku |ay | it|pp | do|u k|gu |u y|éew|rée| ré|war| ta| ñu|i w| bu|xal|llu|épp|oom| li|u c|on | xa|ul |àll|wàl| wà|loo| yo| di|kk | ya| aa|u d| gu|yoo|oon|i d|i b|mën| më|fee|doo|bu |nn | bo|ew |e m|o c|r n| xe|eex|i m|boo| yi|nam|aay|m a| nj|ara| du|ju |xee|yu |en |een|naa|uy |ana|enn|aar|aju| bi|taa|ama|igg|oot| lé|yi | pa|di | aj|ti |ën |okk|k s|taw|lig|gée|ral|ee |u l|i l|m m|und|dun| de|li |u j|n w|an |w m|ala| me|eet| se|axa|ata| ba| so|n t|a a| dë|m c|yam|mi |éey|ggé|ota| gi|ir |ewa| an|a m|aam| ja| ke|ngu|om | su|a d|see|amu| ay|ax |ex |wfe|awf|dam| mi| ng|ey |p l|i n|o n|u t|a n|ool|jaa|ken|une| ye|la |n m|k l|kan|a l|et | yu|bok|mbo|u x|i t|àng|jàn| së|k i|nee|i j|e b|men|ok |em |ndi|i k|ñ ñ| lo|m g|nda|ñoo|kun|opp|ali| ti|laa|j a|l x|n n|lee|nd | da|ada|aad|are|njà|eem|y d| fe| jo|y a|lép|tee|aw |l c|wam|k c|n a|l l|nja|ëng|le |a b| mo|aan| fa|e n|m r|oxa|dox|n c|l a|ska|ask| as|aat|a c|mul|l b|aax|u s|y t|eg | jë|k n|ng |g m|gi |gir|k t|ëy |sëy|ëra|góo|kku|uñu| bé|tax|ba |e s|m s|i r|i c|k b|añu|t a|u w",
      nds: "en |at |un | da|n d| de|een|dat| un|de |t d| ee| he|cht|n s|n e|sch|ht |er |ech| wa|rec|tt | si| to|vun| vu|ett|ten| re| ge|n h|ver|nne|k u|elk| el|t w|ien|lk |sie|to |het|gen|n u|t u|n w|orr| an|n v|r d| in| ve|ch |war|ann| or|ör |t r|rn | fö|it |rer|ner|för| st|rre|den|t g|n f|up | up|eit|t a|t e|rie| fr|aar|nd |ich| sc|chu|wat|n g|fri|nn |ege|on |oon|rrn|daa|t h| bi|is | is|rt |ell| se|hte|len|n o|n k| ma|kee|in |ik |lt |e s| mi|n i|aat| we| na|ven|hei|t s|t t|hn |lle|n t|n m| dr|ok | ok|doo|ers| ke|se |lie| sü|nsc|ken|n a|arr|sta|ünn|gel|r s|ren|rd |che|ll |ill|he |e a|nen|ene|men|ie |ins|ahn| gr| wi|ede|kt |öff|röf|drö|raa|sik|llt|n b|an |kan|ard|und|e g|gru|dee|ff |s d|sse|sün|all| ka|run| dö|eke|st | do|ere| ün|ehe|ebb|heb| gl|min|e e|ens|taa|rch|örc|dör|ig |nee|maa| so|al |aal|cho|tsc|e f|ieh|e v|t v|ünd|iet|t m|enn|p s|el |hör| wo|t o|t n| fa|iht|eih|hen| al| ar|bei|rbe|arb|pp |upp|hup|e w|ehr| eh|utt| be| ut|na |inn|nre|lan|nst|ats|huu|as |weg|t f|e r|öve|eel|et | ni|mut| mu|pen|t b|a d|wen|ul |uul|e d| ah|str|eve|lic|ert|aak|hee|t k|ste|erk|üss|düs| dü|t i|der|iek|e m|mit|d d|nic|ent|gt |anr|set| as|aaf|tra|art|oot|r t| eg|ach|t l|l s|ter|akt|and|ame|hon|nat|n ü|r e|ite",
      fuf: " e | ka| ha|ndi|al |de |di |and| no|han|no | ma|o h|nde|e d|aa |e n|dyi|he |i e|un |a n|ala|dhi|yi |la |gol|re |dho|ka |eed|ho | wo|kal| dy|maa|dhe|o k| bh| ne|ko |ann|ni |hi | dh|bhe| nd|edd|won|ol |e e|ddh| mu|haa|ned|mun|e m| le| sa|i m| go|nnd|taa|aan|e h| fo|ede|eyd|ley|dan|e k|gal|aad|ii |i k|o n|sar|ond| fa|en |dya| ko|e b|tta|a k| he|ow |ana|uud|adh|iya|riy|yaa|bha|aak|ani|ett|het|ngu|aar|ydi|ari|i d|e f|i n|tal|le |ral|ira|ita|oni|ya |oo |na |nga|goo|dir|ndh|nda|ee |ydh| ta|e l|are|e g|ina|n n| wa|faa|fow| hu|i w| fi|akk|naa|ree|e w|udh|yan|ugo|i h|to |oto|nan| ng|oot|dyo|udy|oll|ore|fii|kko|mak|e s| da|a d|l m|on |dhu|dii|iid|ude|aam|i f|a e|o f|ady|den|n m|yee| on|e t|laa| la| na|l d|e a|idy|l n|l e|fot|ke |awt|lle|oor|in |o e| do|ubh|n k|a h|a b|a o|tan| ya|yng|att| ho|an |ake|nya|hen|a l|ewa|hun|i s|i t|mo |amu|te |n e|huu|taw|tor| o | ad|lli|onn|bon| bo|dee|bhu| an|ere|hoo|n h| ny|woo|iin|o w| mo|ku |er |der|ota|n f|dha|ant|l h|wti|tin| ke|tit|l l|yam|o b|aal|l s|a f|guu|ell|edy| se|und|n d| ga|ago|a t|eyn| ku|l g|gur|ama|a w|a m|oon|ndu|rew|waa|u m|nee|mu |tii|ri |nta|hin|wal|kaw|bhi| de|tug|dud|ure|uur|hey| fe|wad|do | si|too|o s|ing| te|tay|eta|o t|adu|ang|rda|urd",
      vmw: "tth|la |thu|a e|na |a m|ana|we |hu |kha| mu|a o|awe|ela|wa | ed|to |ire|ala|hal|dir|edi|ito|eit|rei|ni |mut|aan| wa|a w|u o|akh| on|a n|haa|ya | ni|o y|a a| yo|wak|utt|nla| ot| oh|iwa|ka |okh|att|oha| n’|the|oth|mwa|mul|ari|ne | si|iya|aku|apo|lap|unl|kun|aka| el| wi|tha|ott| ok|ha |oni|e m|e a| at|ale|le | sa|e n| va|ene|ihi| aw|owa|o o|ett|e s|ele|hen|hav|oot|lel|ta |moo|ula|amu|iha| kh| en|e o|han|o n| ak|o a|ota| mo|i a|e w|po | mw|row|nro|ara|’we|anl|i m|e e|de |ade|aya|a s|waw|ihe|ra |hel|eli|dad|a i|o s|ina|vo |a’w|nak| ah|lan|i e|i o|ika|sin| et|wi |eri|n’a|onr| ya|ri |var|ona|liw|hiy|nna|aa |wal|u a|a v|kan|oli| so|ko |huk|her|hiw|riw|avo|u e|wan|thi|aha|kel| an|eko|tek|hwa|sa |yot|itt|e k|uku|laa|riy|una|hun|ntt|yar|khw|ane|ath|pon|e y|o e|iwe|lei|ali|kho|wih| ep|n’e| es|ida|ani| a |nih|n’h|vih|avi|him|ei |lo | ma|aki|kum|i n|i w|nkh|uth| nn|a y|ahi|ile|rda|erd|ber|ibe|lib|i v|ia |ute|ole| it|som|i s|yok| na|ola|nuw|nnu| eh| yi|va |mih|saa|lih|hop|’at|man|hik|a k|ikh|iri|nin|mu |elo|’el|yaw|tte|mur|ont|ila|lik|hol|u s|uma|ma |uwi|inn|ehi|u y|nal|kin|saw|enk|in’|nan| wo|tti|ena|mak| ek|pel|ope|oma|sik|epo|ulu|ro |ira|wir|nli|pwe|mpw|emp|lem|sil|pot|tel| oo|iko|esi|n’o|era",
      ewe: "me |le |ame|e a|wo |kpɔ|ƒe | am| si|ɖe | me| wo| le|si |sia|e d|aɖe|esi|be |pɔ |e l|la |e w| ɖe| la| ƒe| kp|na |e e| mɔ| du| be|a a| aɖ|nye| dz|e s| ŋu|ukɔ|duk| na|e n|ome|ye |dzi|e m|kpl|e b|nya|ɔkp|pɔk|ɔ a|ple|ke |ɔ l|ɔnu|woa| o |iwo| nu|ɔ m| al|evi|u a|awo|mes|ɖek|nu |ŋu |o a|ɔwɔ|e ɖ|nɔ |ekp|gbe|mɔn|kɔ |ɔme|eƒe|eke|lo |alo| eƒ|i n| ny|o n|o m|ya |dze| ab|ia |e ŋ|e k|siw|iam|o d|ubu|bub| bu|o k|zi |ukp|li |a m|wɔ |nuk|mek| ha|i s|kpe|e ƒ|eny|any|ɔ s| go|e g| li|mev|ŋut|eme|akp|ã |anɔ|gom| ey|blɔ|dɔw|mɔ | wò|enɔ|tso|iny|ɔɖe|bɔ |oma|ɔna|a k| ta|e t|to |nɔn| gb|iaɖ|ɖes|ɔe |bu |egb|a s|vi | ƒo| dɔ| he| to|a ƒ|o e|ɖo | ɖo|ele|wɔw|awɔ|i l| an|lɔɖ|abl|ƒom|e h|i w|a n|wɔn|i d|ene|oto|yen|ɔ ɖ|meg|i a|ɔ ƒ|xɔ |ti | ts|afi|wom|agb| ag|nan|so |uwo|o g|ɔnɔ| vo|eɖo|tɔ |a l|etɔ| at|o ƒ| ad|ee |se | se|ne | xɔ|gbɔ|uti| ma|ovo|vov|vin|ɔwo|wòa|i b|i t|a ŋ|a d| af|ats|eŋu|e x|ɖok|o l| ne|ado|e v|de |ɔ b|ta |eye| ka|gɔm| gɔ|te |a e|ben| es|ana|a t|i ɖ|rɔ̃|mee|o t| ak|ewo|ɔ k|sɔ |i o|ɔ e|i m|ema|ded|ẽ |man| el|yi |ɖev|ata|odz|eɖe|u s|kɔm|ate|da | xe|axɔ| en| aw|edz|ui |buw|heh|uny|peɖ|o s|ze |i e| sɔ|bet|a g|udɔ|ehe|ada|o ŋ|o h|abe|he |o w|tsɔ|u ɖ|ku |isi|kui|oku|ɔ n| ke|ma |e o| tɔ|men|ade|dzɔ|oɖo",
      slv: " pr|in |rav| in|do |pra|ti |avi|anj| do|nje|vic|je |o d|no |li |ih |a p|ega| vs|o i|ost| za|ne | po|ga |ja | dr|co |ico|ako|vsa| v |kdo|sak| ka|ali|ima| im|e s|sti| na|van|i s| ne|akd|svo| sv| al|nja|nih|ma |pri|i d|stv|nos|o p|dru|i p|o s|pre|e n|jo | iz|red|iti| de|i i|neg|o v|ki |avn|vo |ni |em |i v|oli|a v|a i| so| nj|jan|obo|vob|ova|na | ki|ati| bi| ob|ko |ego|i z|tva|gov|rža|drž|i n|kol|i k|e v|kak| ra|bod|se |eva|ruž|jeg|e i|vlj| sk|žen| mo|e p|sto|nak|ena| se|del|n p|ter|žav|jem|kon|sme|a d|voj|lja| ni|enj|pol| en|ovo| te| ta|va |imi|zak| st|bit| sm|var|a n|i o| z |mi |ve |kat|di |pos|lov|nsk|me |krš|aro| sp|o k|n s|en | je|tvo|odn|vat|ate|a z|vol|ri |ed |ju |sta|a s| va|ji |sam|a k|o a| s |ene|uži|rug|ora|mor|jen|ans|elo|avl|itv|e m|eja|dej|rst|vne|nan|ove|e b| me|lje|ršn|akr|nar|čin|živ|čen|i m|o z|so |eni|rod|pno|za |oln|dol|h i|olj|tak|ars|nju|ebn|mu |o o|ičn|cij|aci|šči|h p|vič| ve|raz|nst|ajo|ode|kup|sku|e d|v n|u s|otr|nim|jav|šne|vi |vni|rim|kaz|ta |ovi|ski|n n|če |ose|v s|o t|da |ev |nik|rem| ko|ara|n d|bra|e o|ijo|si |i u|ra |žev|raž|vez|dov|ons|zni|obr| ja| sa|ljn|elj|dst|dis|bre|i b|m v|zna|sod|nem|šni|ina|an |seb|pro|ere|oji|mej|amo|skr| bo|edn|med|iko|ust|mož",
      ayr: "apa|nak| ja|aka|ata| ma|aki|asi|aña|ana|aqe|ñap|cha|aw |mar|ti |jha|iw |paw|pat|spa|ark|tak|ama| ch|ani| ta|una|jh |hat|kap|kan|a j|jaq|rka| uk|a m|aru|ki |kis|jan|taq| ar|pa |qe | wa|na |a a|niw|may|kas|iti|ach|i j| kh|ayn|ina|pan| mu| ya|ati|a u|yni|ha | am|amp|w k|as |uka|iña|sa |mun|at |hit|isp|t a|is |ch |ka |khi|ñan|e m|an |isi|oqa|ru |asp|siñ|ejh|ta |qha|kam|h a|ajh|pjh|atä| uñ|han|mpi|sis|sti| in|ita|qen|ham|ñat|äña|täñ|sin|rus| sa|ma |iri|ara|sit|yas|ñja|ska| ut|yat| ku|arj|qat|tis|tap|kha|pas| ji|ura|uñj|jam|a y|nin|nch|kañ| ju|hañ|ukh|nañ|kat|qas|i t|noq|rjh|lir|ili|ña |kun|tas| ka|ans|tha|kak|utj|w m|aya|pi | as|i u|nka|us |aqa|kiw|a t|has|jil| lu|tat|sna|tan|tay|w u|ino|i m|in |w j|rak|s a|apj|jas|nsa|asn|pis|i a|mas|wak| ay|w t|i c|njh|ipa| a |s j|s m|chi|kaj|sip|rañ|lur|mp |tañ|a k|uki|rin|upa|iru|hac|ena|uya|muy|amu|wa |a i|llu|yll|ayl|api|hap|nip|ak |aqh|yaq|n m|a c|tja|eqa|uch|ayk|isa|ank|asa|sap|k a|anq|awa|s u|lan|h j|pam|i y| pa|ask|h u|a w|ap |juc|anc|run|nap|ri |ali|auk|inc|nir| aj|tir|ast|ink|anj|isk|kar|jac|ist|ni |usk|khu|yan|mat|a s| ap|pka|en |ñas|sir|qer|i k|kit|heq|che|mä | mä|s k|e j|yt |ayt|way|qañ|naq|nas|n j|sar|war|s w|s c|ika|hik|a l|t u|hus|h k",
      bem: " uk|uku|la |wa |a i|kwa|a u|ali|ta | mu|a n| na|ya |amb| ya| in|ata|sam|shi|ula|nsa|nga|ang| ku|bu |mbu|wat|se |nse| pa|ins|ons|kul| ba|li | no|aku|lo |ngu|nan|a m|gu | al|ala|mo |a a|fya|a k|ntu|yak| ca|ikw|ing|u u|lik|na |e a|ili|alo|nok| on|u y| um|tu |a p|ga |o n|mu |lwa|lin|sha|i n|ka |ila| ci|ku |uli|oku|ika|and|ulu|ukw|ana|kup|akw|ko |ama|we |cal|a c|amo|umu|aka|a b|aba|kus|lil|o u|cit|kan|yal|mbi|ndu|mul|pa |o a|ish|le |ile|o b|hi |u m|bal|kub|u c|kal|u a|uci|ba |ne |unt|e u|any|ton|kwe| sh|po |ha |yo |bul| fi| if|nsh| ab|du |kuc| fy|e n|abu|ung|u n|cil|nka| ne|kum|a l|fwa|o c|lan|o i|i u|a f|kut| am|und|ush|nda|kuk|afw|no |gan|pan|upo|a o|win|aya|ale|bi | ta|ify|utu| ng| ka|tun| bu|int|wil|fwi|u b|pam|lam|apo|way|ako| ic|bil|ans|uko|apa|wab|mun|ma |nya|cin|ban|tan|wal|ela|o y|ine| af|imi|lul|kap|ngw| li|ubu|e b|mas|nta| ma|ilw|ti |iti|gil|ngi|eka|imb| im|twa|e k|uma|umw|i k|tul|pat| ak|gwa|u k|ita|onk|ant|bom|usa|a s|but|eng|e p|iwa|umo|ici|o f|afu|sa |da |atu| ns| is| wa|mut|o m|nto|ont|uka|baf|ilo|min|mba|kuf|ini|u s|pok|ye |ily|men|kwi|hiw|pal|ind|ute|cak|mak|tak| at|ash|u i|lel|ina|alw|lu |asa|asu|kat|o o|aik|ubo|suk|ule|ufy|upe|e i|til|lya|pak|nam|mwi|efw|lef|ate|tek",
      emk: " ka|a k|ka | a |an |la | la| ma|kan|na |a l|a a|n k|ya |ni |ama|a m|ma |ɛɛ | di|lu | ja| bɛ|ana|aka|man|di |a b|bɛɛ|iya|dɔ |a d|ara|jam| si|a s|mɔɔ| mɔ| sa| dɔ|en |ɔɔ | tɛ|alu|i s|da |tɛ |sar|den|a j|riy|ila| ye|ani| kɛ| i |i a|ye |ari| ni|n d|kak|ɛ k|ɛn |a t| ba| al|i d|ra |nna|len|ɲa |aar|n m| se| bo|olo|ɔn |sil|ele|ɔdɔ|n n| kɔ|i k|ank|ɔ a|baa|e k|a ɲ|se |bol|ɛ d|lo |u d|kel| sɔ| na| da|n s| ke|ɔnɔ|fan|a f| fa| de|nda|a i|ɛ s|ade|ada|mɛn|ala|i b| mi|and|ɔ s|lak|ɛ m|ɛ y|li | ha|dɔn|sɔd|nu | ko|ɔ b|kɔn|ina| su|ɛda|kɛd| wo|han| mɛ|kar|ko |aya|a n|ɔ m|i m|nɔ |ɔ k|ɲɔɔ|n a|ata|ɔya|nɲa|nnu| wa|n b|in |nka|kɛ |olu|a h|i l|dan| an|mad|le | le|ran| gb|a g|u l|e m|i j|si |kun| ku|u m|ɛnɛ|ii |suu|lat|enn|nad|nin|on |don| ɲa|ɛ l|aji|ɛ b|mak|u k|yan|a w|u s|ɛnn|i t|sii|n t| ɲɔ|wo |dam| ad|awa|law|u t|ɔnn|ɛdɛ|nba|enb|bɔ |ibi|jib|waj|gbɛ|ɲin| ɲi|o m|nan| lɔ|fɛ | fɛ|bɛn|din|kol|fɛn|afɛ|maf|su |usu|uus|taa|u y|e a|ta | ta|aba|ɔrɔ| dɛ|dɛɛ|asa|iri|mir|ba |udu|fud| fu|ini|bɛd|aha|dah|du | bɔ|ɔ j|tan|dal|te |ida|lan|biy|ant| do| te|i w|kɔd|ɲɛ |lɔn|ɔɔy|min|ɛ j|nal|nɛn|ɔɔn|aam|e b|ili|kil|nki|enɲ| du|nni|wan|tii|was|dɛ |a y|o s|ɛbɛ|bay|ali|lɔ |fɔl| fɔ|ɛ a|ɔ n| tɔ|bil| bi|e i|nfa|anf|iil|e f|ɔ l|san|ɔ d",
      bci: "an | ɔ |be | be|un | i |wla|ran|kwl|la |sra| sr|in |n b| kw|n s|kɛ | kɛ|n k|le |a k|n n| nu| ng|lɛ |nun| a |n i|man|n ɔ|ɛ n|n m|kun|a b|e k|i s| ku|ɛn |nga| su|mun| n | ti| fa| mu|su |ga |ti | ni|e n|e a|ɔ f| li|ɛ ɔ|nin|a n|e s|a s|i n|ɔ n|a ɔ| le|tin| at|ɔ k|wa |ati|ɔ l|ɛ i| sɔ|ta |ata|fat|ɛ b| ma| mɔ| sa|mɔ |sɔ |a a|iɛ |akw|di | sɛ|vle|nvl| nv|lak| kl|ɛ m|i b|i k|liɛ|dɛ |ndɛ| nd|sɛ | wu| yo|lik|ɔ ɔ|n a| ka|ɔ t|ɛ s| mm|e w|yo | di|i a|ba |ngb|ke | an|und|sa |a m|mɛn|e t|uma| fi|ike| ju|e y| mɛ|mla|mml|ɔ b| ny|i i| bo| ye| si| aw| yɛ|e m|bo |e b|fa |n f|ndi|ɔ i|i f|e i|o n| tr|jum|ɛ a|a w|kan|i w|wie|wun|a y|n l|yɛ |awa|ɔ y|ge |nge|ing|uɛ |ie |ka | fɔ|b a| b | fl| o | wl| wi|fin|tra|klu|i m|lo | uf|a i|ang|ɔun|fɔu|n t|gba| wa|ua |uwa|luw|flu|o i|bɔ |wuk|uan|flɛ|e l|ye |n y|nan|n w| ba|ɔbɔ|bɔb|ɔ d|o ɔ|ufl|nzɛ|anz|kpa| kp|ɛ k|alɛ|dan| ak|e ɔ|sie|te | af| bɔ|lun|nyi|kle|nua|u m|lu | na|u i|ilɛ|i t|zɛ |fuɛ|ɛ w|a t|ika|u b|ɔ s|anm|bɛn|gbɛ| bl|ci |aci|i ɔ|n u|o m|wlɛ|i l| bu|se | se|e f|iɛn|wo | wo|bu |elɛ| yi|afi|uka|a j|i j|ian|nma|san|u n|aka|anu|u s|a l|unm|ɔ w|nda|ote|vot| vo|fiɛ|e j|wan| kɔ| ja|o b|usu|ɔn |n j|anw|ɔlɛ| jɔ|w a| w |kac|o s| ya|i y|ngu| e |u ɔ|dil|tua|yi |yan|nya|ja ",
      bum: "e a|od |an | mo|e n|mod|ne |am |se | ab|e m| me| os|ai | ai| ng| ak|ose| y | an|e e|y a| nn|le |d o|nna|a a| be| en| dz|nam|ele|ane|i n|nde|i a|n a|de |a m|iñ |end| a |ie |na | na|a n|bel|abe|e d| as|nyi|ki |a b|ngu| ya| ay|ven|mve|ge |m a|ul |gul|da |li |ya | ki|asu|be | bo| e |su | et|oe |l y|i m|yiñ|dzi|ebe|yia|eny|ene| mv|i e|ian|ala|e b|nge|en |og | mb|ili|e y| mi|ege|bod|tob| ma|nda|ayi| at|e k|la |abo|ñ m|ban|bog|ñ a|ve |om |eti| to|bo | ny|fe | bi|e v|o a|g a|d m|fil| fi|dzo|mem|ben| se|abi| si|beb| nd|n e|woe| wo| fe| ek|zie|aye|oan| nt|emv|ia |bia|ato|e f| ad| da|ga |nga|n m|u m| ve|mbo|a e| te|ial|sie|me |ond|ug |lug|m e|obo| al|do |n b|uan|ae |n k|di |k m|e s|eñ |zia|e t|d b|to | ba|alu|ako|o m|si |a s| di|oba|ma |edz|man|ama|n y|m w| vo|n n|d a|bi |aka|m y|min|ōk |kōk|akō|zen|em | nk|ñ d|mis|tie|i b|ali|kom| es|eku| ze|ii |mam|ziñ| zi|ndo|o e|s a|i d|ye |añ |ake|vom|a f| ev| eb|m m|fam| fa|men|lu |ulu|ñ e| mf|dze|boa|gan|sog|tso|s m|is |sal|esa|ses|teg|ese|yeg|mon|u a|kua|any|ela|ad |lad|ete|und|kun|nku|uma|aku|o n|e o|bon|ui |dza|ó m|ñ n|adi|e z|die|tii|us |ebo|meb|a d|zo |u n|med|nye|kam|l a|voe|deg|dañ|ol |ke |l n|yae|kya|aky|m s|eki|d e|kal|m o|te |oga|nts|i s|omo",
      epo: "aj | la|la |kaj| ka|oj |on | de|iu |raj| ra|as |ajt|de | ĉi|aŭ | li|j k|eco|ĉiu|ia |jn | pr|o k|e l| al|est| aŭ| ki| es|jto|co |kon| ko|en |tas|n k|an | en|pro| po|a p|ta |io |ere|ber|ibe|lib|j p|n a| ne| se|o d|to |aci|kiu| in|o e|a k|ajn|j l|ton| pe|do |o a|cio|j e|jta|iaj|eni|ro | ha|taj|ita|rec|lia|toj|ado|vas|hav|per| re|a a|o ĉ|sta|iuj| si|a l|stu|cia|j r|ala|n p| ri|ekt|je | je|ter|tu |nac|al |j d| di|tra|sia|ava|nta|a s| so| aj|sen| ti|ali|uj |a r|nec|int|n d|s r|ent|kto|oci|soc|por|ega|j a|n l|rim|ojn|u h|e s|s l|or |a e|u a|j ĉ|pri|ntr|ont|evi|u r|n j|re |nte|ata| fa| pl| na|ika|igi|tiu|laj|gal| eg|raŭ|cev|ice|ric|ne | ku|ĝi |lan| ju|nen|j s|n s|no |era|pre| el|ian|bla|ebl|vi |tek|e a| pu|don|u s|u e|ers|art| su|iĝo|j n|o p|igo|ren|e p|ons|li |j i|ena|er |len|ple|n r|ote|rot|sti|s e|for|n ĉ|niu|imi|son|tat|o n|o r|u l|con|ili|duk|bor|abo|lab|edu| ed|tan|iĝi|ioj|is |ni |uzi|lo | ek|res|men|un |dis|e e|el | ma|erv|i e|ern|ato|ĝo |a d|lig|go |ĉi |coj|unu|ti |laŭ|moj|hom| ho|kad|kun|edz| ce|ŝta| ŝt|i k|zo | ar|n i|u k|ra |kri| ag| kr|j f| vi|ura|nda|ono|rso|par|ndo|and|jur|far|ven|ŭ s|ka |eli|sek|ĉu | ĉu|kia|kla|ini|uka|r l|ele|rto| pa|i l|ora|edo|le | ge|l l|opr|ive|ziv|luz",
      pam: "ng |ing|ang|an | ka| pa|g k| at|ala|at | ma|g p| ki|apa|kin|lan|g m|ata|yan|pam|kar|ara|pat|tan| in| ba|pan|n a|aya|ung| a |g a|g b|rap|ama|man| ni|nin|n k|tin|ati|n i|tun|a a|iya|bal| me|ami| la| di| iy|asa| o |etu|nga|mag|met|ban|in |din|a k|nan|a i|ya |mak| na|ari| mi|kay|aka|yun|ipa| sa|sa | al|rin|a m|na |kal|ant|g s|par|ana|al |ali|ika| da|t k|san|gan|ran|lay|u m|nu |g l|un |a n|atu|kat|awa|a p|t m|ti |iti|syu|mip|ila|aba|n n|la |kas|as |ili|nsa|wa |kap|mal|ra |n d|aki|g n|t p|g i|anu|t a|tas|ans|ita|iwa|uli|i a|mil|a d|bat|sal|ira|li |una|lal| it| pr|dap|ral|ad |usa|o p|kab| an|mik|tul|e p|nte|iba|tau|be |ag |s a|aga| e |lit|mas|wan|lir| ta|abe|g e|abi|n o|n p|lip| li|lam|pro|n l|te |au |kan|g g|ap | ar|ani|alu|e k|it |sab|ale|a b|t i|eng|tek|uri|lab|ail|l a|nti|mam|i i|gaw| tu|ily|ian|liw|inu|da |g d|g t|bra|obr|u i|mba|ina|aru|abu|ie |bie|mit|am |o k|lya|pun|o a|a o|asy|gga|lub|pag|gal|bla|abl|en |len|lat| bi|pak|tur|lin|ksy|eks|ote|rot|e m|ril|sar|u a|u n|tu |gpa|agp|n m| ke| pi|ipu|ka |wal| re|ta |tik|ngg|nap|rti|art|ema|gam|ko |kia|kai|aun|d a|tad|nta|amb|a l|rus|g o| ya|lak|bus| ga|gob|dan|sas|ags|nun| nu|sak| ag|e d|a e|agl|are|bil|ndi|and| pe|iyu|rel|kul|i k|upa|isa",
      tiv: "an | u | na|nan| sh|en | a |shi|ha | i |sha|a i|or | er|er | ma|u n|n i|han|ar |n s|gh |r n|n u|a m|in |yô |n a|na |n n|hin| ha|u a|a u|a k|mba|n m|a n|nge| lu|kwa|man|n k|ana| ke| ve|r u| kw| mb| ga|ren|lu |a t|agh|ir |ga |aor|mao| yô|a s|nma|anm|ang|wag| ia|gen|a a|ba |ma | ci| ng| gb|i n|ken|ere|ian| or|aa | kp|e u| ta|ve |r i|ii |gu |ngu| la|ity| he|om |a h|hen|n g|ge |la | ts|n t|e n|oo |gba|kpa|u i|ese|se |aha|cii|r m|tar|r s| ka|ol | ne|tom|u k|ugh|ish| ku|ev | it|doo|ior|n e|on |ene|u s|hi | de|n h| te|yol|oug|a v| to|igh|u t|tyô|ind|i u|i d|ima|iyo|h u|paa|a l|ua |ndi|o u|him| is|r k|i m|ie |hie|tes|u e|yan|hir|ker|di |e s|uma|r a|a e| do|m u|nen|era| io|e a| ya|un | as|ne |tin|ee |mak|u h|tse|n y| za|a g| in|bar| mi|ka |i a|ron|ôro| iy|men|ase|e e|de |ô i|a o|nah|ave| zu|gbe|ran| ti|i v|io |u l| ik|r t|n l| ig| mk|nja|inj|eng|ant| wa|e h|mi |a d|ra |kur| ij|a y|end|hio|lun|l i|r l|av | fa|u z|h s|e i|do |ndo|i k|i i|ta |nta|ake|ash|uan|zua|u m|e m|i l|a w|ura|ôm |môm|vou| vo|i e|iji|e k| hi|da |nda|ghi|kig|iky|see|v s|a f|n c|was|ce |ace|mac|soo| so|r c| mt|vir|ivi|civ|zou|mzo| mz|a c|nev|ves|emb|sen|jir| mô|e l|e g|i y|een|uer|lue|alu| al|u u|ô u|zan| im|ônd|n z|e y|em ",
      tpi: "ng |ong|lon| lo|im | ol| na|la |ela|pel| ma| yu|at |ait|gat|ri | ra|na | bi|ol |t l|it |rai| ka| o |mi |umi|bil|yum|ilo|man|t r| i |eri|ing|iga| ig|mer|ara| wa|i o|rap|tin|ta |eta|get|lge|olg| sa|wan|ap |ain|ape|nar|in |a m|ini|ant| no|i i|em |m o|g k|n o|sim|an |as |mas|i n| wo|yu |nme|anm|wok|g y| me|kai| ga|ok |tri| pa| ha|ntr|kan|g o|m n|a l| st|g s|i b|a i|g w|a k|g l|i m|g n|gut|ama|isi|o m|l n|sam|kim| in|lo |pim|aim|kam|p l|sin|amt|a s| gu|i l|tai|mti| ko|t w| la| ki|m l|en |g b|tpe|no |nog|m k|a t|utp|tap|sta|m y|nim|nap|api|g p|tu |ts |a p|nem|i y| tu|kis|lai|oga|tim|spe|isp|its|a o|a n|nka|map|nta|l i|usi|g g|o i|s b|sem|lse|ols| sk|n s|t n|m s|g t| ti|luk| lu|ni |iki|o b|sen|o l|os |et |iti|kin|dis| di|a y|asi|pas|ane|ari| pi|ili|ina|o k|aus|s i|ot |a h| ba|npe|anp|nin|aun|yet| ye|ik |lim|gti|ngt|m g|i g|pik|aik|u y|sai|kot|ut |k b|uti|aut|kau|pos|sap|un |a g|s o| ta|am |ve |ave|sav|i s|s n|t o|ank|a w| fr|ul |kul|sku|ti |m b|go | go|u n|g h|n i|ese|i w| ne|ati|vim|ivi|ali|t m|n b|gav|o n|apo|rau|n m|l m|hap|o w|oli|s l|es |les|ple|m m| em|l s|a r|m i|fri|liv|hal| si|bun|pai|dau|nsa|ins|upe| hu|g r|kom|ana|san|n r|nis|gar|aga|bag|n n| pe|m p|m w|s s|avm|uka| as|g m|g e",
      ven: "na | na| mu|a m| vh| u |ha |we |a n|wa |tsh|hu |a u|ṅwe| ts| ya|lo |ya |ana|nga|vha|ho |o y|uṅw|a v|thu|ane|muṅ|shi|e n| dz|vhu| pf|elo| kh|nel|ga |a p|a t|fan|ne | zw| ng|pfa|sha|u n|uth|aho| a |a k|mut| ka| hu|a h|ele|kan|kha|o n|edz|wo |dza|zwa|la |u m|a z| mb|e u|dzi|hum|si |i n| wa|a d|mul|e a|zwi|u t|fho|ang|ḓo | ha|u s|o v|gan|olo|vho|ela| ḓo|lwa|o d|hol| i |ula|aka|o m|no |za |o k|hi |he |shu|han|o t|zo |ofh|lel|led|rel|low|u v|awe|tsi|hak| sh| ma|ka |mbo|ano|e k|yo |elw|a i|a s|bof|ngo|o i| te|nah|owo|iṅw|hil|its|o h|dzo|zi |dzw|mba|lan|e m|i k|sa | mi| si|ing|one|hon|and|ush|go |isa|li |het|e v|a l|swa|ire|sir|i h|i t|a ḓ| nd| lu|eth|umb|hat| fh|dzh| it|ine|wi |avh|khe|u k|ea |tea|unz|ni |ṱhe|ath|ndu|hen|ila|u a|mo |wah|kon|ulo|vhe|wan|o w|u w|mis|a a|a y|i ḓ|isw| an|iwa|hus|hel|e y| sa|alo|mbu| ḽa|oṱh|le |du |mus|o a|uts|ayo|tel|nda|amb|uvh| ho|vel|fun|i v|zan| ny|a w|zwo|o ḽ|pfu|u i|adz|hut| bv|kat|lay|hav|hit|afh| ḓi|evh|i m| ko| li|umi|aṅw|so |fha|ene|nyi|she| o |mal| iṅ|nḓa|mel|zhe|ivh|zit|hii|san|lis|ili|eli|ala|hul|u h|o u|ura|bul|nzo|umo|i i|mbi|haw|hin|o z|u ḓ| th|o f|oni|lus| yo|alu|lwo|ḓa |anḓ|fhe|zhi|u d|eah|usi|a ṱ| re|une|ite|ere|rer|hur|mbe|hal|lul|ule|thi",
      ssw: "nge|ntf|e n| le|tfu|eku| ng|a n|o l|la |lo |fu |khe| ku|nga|tsi| ne|le |unt| lo|he |mun|a l|nkh|ma |si |ele|elo|ung|nom|oma| no| um|wa |ni |ent|lel|lek|eli|lun|kut|ko |nel|gel|eni|pha| ba|onk| la|e l| em|ats|tfo|a k|e u|o n|e k|nye|hla|ela|umu|ban|oku|ulu|aka|akh|lil|won|ema|lok|lul|hul|a e|eti|ala|tse|khu|uts|ilu|i l| wo|ane|ye |nti|ndl|ang| na|ule|ve |we |esi|nek|na |ke |any|aph|ana|fo |set| li| ye| un|ale|lan|u u|hat|une|te |e b|eko|aba| ka|kwe|and|gan|lwa|ka |gen|tin|nem|phi|fan|wen|ben|mph|nal|kan|i n|ile|lal| ek|i k|gek|kel|o y|lab|ant|seb|u l|len|ahl|‐ke|let|e e|ako|ebe|lom|ive|be |ing|a b|kha|etf|uhl|ba |isw|kus|kho|ukh|yel|wo | kw|ikh|o k| im|uma|kat|kub|ne |ndz|sit|alo|ise|ini|omu|uph|abe|ngu|e i|alu|mal|nak|a i|kuv|sen|tis|kun|elw|lwe|e w|iph| in|fun|enk|sek|eke|dle|ti |lin|ase|a a|sa |use|hak|gab|a‐k|e a|les|kul|nen|kuh|ta |cal| ti|isa|tfw|ona|swa|ene|ma‐|hol|jen|ali|eki|bon| se|to |fol|utf|yen|ula|o e|lon|kuk|ike|liv|sel|ute|sik|lak|eng|hi |ume|kuf|alw|int|sha|nhl| ya|its|i e|fut|i a|und| bu|i u| ab|ebu|emb|dza|ndv|kil|emp|had|yak|ets|ifa|vik|emt|phe|emi|ite| si|tsa|kwa|u n|dla|a u|olo|imi|o m|han|gap|nan|ufa|ata|wem|mts|end|uvi|i w|ekh|owo|low|ind|i i|uba|mel|vum|dvo",
      nyn: "omu| om|a o| ku|tu |ntu|wa |ari| ob|ra |a k|obu|mun|uri|mu |unt|a n| mu|nga|ri | na|ho |e o|bwa|aba|rik|a e|gye|han|ga |ang|oku|a a|bur| bu|iku|re |ush|aha|iri|uga|ka |i m|ndi|sho|ain|kur|u a|we |ere|ira|ibw|ire|na |e n|ne |ine|iha|aho|ung|and|e k|ye | eb|a b|ban|eki|ing|bug| ni| ab|ba |kut|ura|uba|be |ro |u b|sa | kw|bir|ebi|u n|kwe|e b|gir| ok|i n|kir|zi |abe| bw| ah|o o|kub|i k|gab|ish|sha|era|o e| no| ai|u o|ate|tee| ek|di |rwa|ha |kuk|rin|mer|wah|kwa|i b|bwe| ba|ant|zib|u m|end|ngo|i a|ngi|bus|nib|ama|baa|kuh|iro|iki|eka|eek|i o|nar|o g|go |kug|ya |kan| ka|ngy|ana| ar|o b|agi| ti| or|hi |shi| gw|eme|ash|gan|bwo|o k|rag|uru|ute|ris|ja |mur|ora|tar| nk|she|o a|i e|oro|iba|yes|wee|tek|ara| en|bya|ija|mus| ha|kus|mwe|eir|hem| ne|obw| n |eih|rir|za | we|ekw|naa|yen|o n|uta|iho|rih|har| by|egy| er|e e|amb|da |nda|rei|gi |wen|kwi|aar|eby|rer|yam|a y|isa|yaa|nko| bi|aka|sib|aab|ind|riz|uku|irw|si |nsi|ens|iin|aij|mub|a r|ugi|oon|ata|ki |dii|nka|utu|bas|hob|aga|kor|uko|n o|eri|bye| am|amu|ika|ham|mut|umu|nok|aat|izi|uzi|o m|ebw|oba|emi| em|rim|azi|uka|rye|ona|okw|u k|e a|kum|tuu|ibi|ahu|gwa|bor|mo |aas| ya|ent|ete|u e|ori| ei|bo |ani|amw|aah| ky|uma|eer|der|nde|ugy|a z|ikw|tih|ong|yob",
      yao: "ndu|chi| wa|du |akw|aku|a m|kwe| ch|und|ni | mu|wak|mun|la |e m| ak|wa |wan|amb| ku|ulu|mbo|ali|u w|we |ila|kut|lu |bo | ma|kwa|a n|ful|ufu|le |se |a k| ni|hil|nga|ose|ete|e u|ang|jwa| jw| ga|na |kul| uf|lam|ne |amu|aka|son| na|e a| pa|oni|u j| so|ngo|wal|and|go |mwa| yi|te |wet|ana|uti|nda|yak|che|lij|gan|i a|a c|ele|cha|o s|e n|jos| ya|o c|ijo|i m|ti |pa |ga | mw|kam|ya |ula|asa|ala|ind|yin|e k|isy|ich|kas|ile|li | ka|ili|o m|ani|si |ach|u a|nam|ela|jil|ikw|a w|mul|yo |uch|aga|a u|hak|asi|kap|gal|kus|mbi|mba|mal|ma |ule|ape|o a|lan|i w|imb|pe |his| al|e w|end|a p|usi|ika|uli| ng|ope|sye|a j|aji|kum|ase|i k|ine|pen| ja|lem|him|u y|e c|mas|ka |och|ena|ekw|sya|ako|kup|a y|any|man|ane|ten|kol|hel|i y|ola|i u|wo |wam|e y| ul|kwi| kw|awo|gam|cho|gak|o n|eng|sen|pel| mp|iwa|da |gwa|sop|jo | ji|mch|ite|ama| li|ngw|hik|syo|u g|mpe|je |oso|ye |emw|ujo|duj|uwa|kuw|bom|ja |i g|mus|waj| mc|iga|tam|upi|jak|ong|dan|a s|sa |was|ole|nde|nji|ene|oma|nya|poc|ons|lo |apo|a l|i n|alo|mka|ale|one|o k|lil|uma|lic|ung|i j|ban| bo|mag|ata|usa|win|lik|hos|o g|sik|lig|lek|kan|anj|iku|pan|ing|u m|wu | aw| mm|eje|uku| yo|omb|pak|a a|he |hin|e s|esy|nag|muc|iji|lwa|mma|kal|ba |nil|uta| nd|awa|i p|ipa|no |ano",
      lvs: "as |ība|ies|tie|bas|ai |un | un| ti|sīb|esī|ien|ir | ir|vie| vi| va|bu |am |ību|iem|m i|em | ne|s u|r t|vai| uz| pa|uz |ena|ās |pie| pi| iz| sa|nam|dzī|šan|isk|ar | ar|kvi|ikv| ik|viņ|brī| br|es |rīv| ka| at|u u| ci|i i|s p|cij| no|edr|inā|āci|s v|iņa|drī|dar|s t|u p|u a|pār| pr|i a|ot |nu |s s| la|zīb|ska| ie|aiz|jas|ija|vīb| jā| ap|ībā|īgi|vis|arb|tīb|gu | st|kā |s i|val|īvī|ām |īdz|st |ied|bai|īgu|s b|ņa |t p|arī|lst|als|ana|s n|gi |līd|s l|mu |umu|kas|jum|ju |iju|kum|u i|ba |u n|izs|n p| ai|ā v| da|nīg|ama|u k|u v|i v|rdz|son| tā|kst|īks|rīk|ned| so|iec|s k|ajā|cit|sav|līt|stī|pil|u d|t v|per| pe|bā |nīb|i n|not|stā| dz|s d|m u|ras|tu |cie|n v|kat|ā a|mat|enā| li|evi|nev| kā|kur|aut|nas| pā|skā| re|a a|a v|kād|ebk|jeb| je|bez| be|jā |līb|i u|i p|bie|tik| ta|n i|pam|mie|ard|sar|zsa|nāc|iku|lik|iet|r j|būt|rso|ers|du |ikt|sta|ciā|oci|soc|cīb|tis|rīb|āda|tīt|ītī|glī|zgl|izg|abi|ulī|aul|lau|tra|atr| lī|ais|tot|atv|umi|nod|anu|t s|a u|ram|ier| ku|a p|tās|kt |klā|a s|ta |ant|iāl|ma | ve|n b|nāt|ekl|ret|pre|ā u|lvē|ilv|cil|jāb|sab|eja|oši|mēr|āti|roš|dro|pat|m k|kri|rie|ūt |m v|ēt |t t|zīv|īga|a i|kar|atk|nea|ts |ādu|āt |s m|lās|nāl| na|ecī|tas|iģi|liģ|eli|rel|uma|sas| ga|s g|et |m p",
      quz: "una|an |nan|as |pas|apa|ana|cha| ka|lla|man| ru| ll|sqa|run|qa |aq | ma|ach|ta |pa |paq|npa|mi |taq|na | ch|a r|kun|hay|anp|tin|nta|nch|yta|chu|asq|chi|aku|lap|ant|qan|kuy|in |ama|aqm| wa|qmi|a a|ay | ya|ata|nap|ati|ipa|wan| ju|ina|a k|aqa| at|may| ja|a l|aqt|ayt|a m|kan|ima| pi|n k|s m|nin|ank|tap|anc|qta|his|hu |pip| mu|n j|all|a c|spa|uku|ypa|qpa|iku|yac|pi | pa|ion|uch|naq|pan|n m|a p|kam|un |han|ayp|a j|aci|nac|awa|n r|laq|s k|nma|anm|usa|aus|kau|isq|k a|n l|cio|asp|lan|n c|ayk|yan|nak|oq |yoq|ayn|inc|nat|uy |n p|yku| im|mun|jin| ji| yu|i k|has|q j|tan|inp|tuk| tu|n y|ura|kay|uyt|kus|ña | na| sa|is |nmi|s t|s w| qa|mac|tun|atu|jat|asi|yni|uya|api|pac|nk | ay|kaq|tiy|waw|inm|ech| de|n t| ri|q k|a y|ma |hik|nti|sin|kas|lin|lli| al|ari|nku|juc|was|nal| aj|i m|pay|rmi|arm|war|a q|yay|yuy|q y|say|i p| ti|usq| an| as|qti|n a|npi|pap|hur|a w|rec|ere|der|ita|q c|rim|s p|aqp|s y|yqa|iyo|niy|ani|i l|unt|s j|juj|kin|iya|q a|huy|a s|ywa|nka|sap|u l|ras|int|sta|uma|kuk|piq|iqp|hak|tay| ta|qas|q r|ypi|maq| su|ash|y r|uj |qsi|lak|heq|che|min|a t| ni|yma|t a|s a| ki|uyp|q q| re|muc|nqa|cho|unc|yas|s l|ayo|y l|qha| qh|ist|pur| pu|la |ill|mas|nam|pis|isp|hap|q w|lat| si|mik|y k|y s|ayq|pat|ali",
      src: " de|de |e s| sa|os |tu | a | su|tzi|one|sa |ne |ent| in|ion| e |a s|su |der|zio|u d|ret|e d|as |ess|ere|es |men| pr| pe|et |ten|ade|etu|nte| cu|ale|er |re | so|s i|atz| te|in | un| s |ene|a p|zi |ida|e e| on|sos| es|e t|nzi|onz|are|chi| si|le |te |s d| is|dad|u s|a d|net|u a|e c|tad|sse|ame|sso|t d| ch| o |son|at |pro|e i|i p|e a|pes|e p|nt |ntu| co|na |a c|du |hi |u e| li|e o|s e|int|s a| at|sas|un |cun|nu |per| po|ter|n s|ber|ser|nes|tra|zia| di|res|ro |s c|si |adu|sta|nat|s p|unu|era|ia |t s|tos|t a|da |nal|pod|u c| re|s s|sua|ona|ica|ist|ibe|lib|rar|egu|ntr|s o|ua |a a|o s|pre|ntz|ant| ne|ust| da|ndi|una|rta| fa|ode|u p|a e| to|est|nta|a l| pa|u o|und|ra |ada|ert|iss| na|otu|con| ma|a u|ae |dae|o a|otz|dis|eru|cus|les|a i|pet|lid|ali|i s|iat|sia|u t|sot|rat|epe|s n|tot|ssi|t e|ime|unt| ca| as|a n|ind|sti|eto|st |etz|lic|ont|a b|a t|iu |fun|ta |ine|a o| se|nen|nid|suo|s f| tr|ass|e u|nda| fu|ial|ena|sen|das|ghe|e f|pen|ual|gua| eg|pri| fi|par|a f|ria|u i|for|t p|emo|seg|ner|icu|tut| no|eli|run|det|itu|dep|inn|man|tar|lu |dos|r p|art| pu| bo|cum|ina|i d|ura|u n|tes|mos|nem|gur| bi|idu|nde|cu |ata|us |o d|tic|e l|e r|cam|des|ènt|din|ral|cas|uni|ios|com|u l|ado|sio|fin|nsi|n a|ire",
      rup: "ri | sh|ari|i s|hi |shi| a | ca|ti |ea |i a|tsi|rea|i c|tu | s |ndr|dre|i n|a a|ptu|ept|rep|câ | nd| un| di|la | la|i l|i u|a s| tu|ear|di |ui |lui| li|are|a l| ar|un |â s|li |caf|ati|tat|afi|lje|fi | lu|ats|icâ|â t|ei |râ |bâ |nâ |ibâ|car|i t|jei|si |ali| câ|tul|hib| hi|s h|tâ |or |u c|n a|â c| in| cu|ul |i d|ilj| ti|â a|a p|a c|a n|lor|tea|u s| al|int| co|u a|cu |tur|ber|ibe|lib| ic|lu |i p|eas|tsâ|i i|u p|sea|lji|min|u l| nu|â n|nal| pi| pr|ii |url|rar|nu |sta|ots|alâ|ji | po|â p|sti| ts|sii| si|al |oat|can|til|ura|â l|anâ|its|i f|lâ |nat|ina|ist|ert|sâ |i m| st|sia| so|pri|â d|poa|ips| fa|sht|tut|tse| ac| ap|ând|t c|ita|nts|gur|a d|sot|ent|sh |lip| su| as|ate| lj|urâ|pur| ân|at |ili|uni|a i|ona|â i| de|âts|ash|zea|i e|ucr|luc|itâ|unâ| ma|act|bli| pu|nit| sc|con|tar|alt| mi|nde|ind|tât|hti|ntu|rli|ilo|ntr|par|r s|a t|apu|imi|rim|mlu| ni|com|igu|sig|rta|i b|ial| na|tic|l l|ica|est|tsl|âlj|art|pse|chi|iti|unt|sun| ea|r a|adz|l s|tlu|atâ|ter|sit|asi|pi |apt|ia |rlo|ârâ|fâr| fâ|oml|uts|scu| ba|na |lit|ndu|pis|dit|gal|ega| eg|fac|s f|ru |acâ|câr|ead|atl|ra | ta|arâ|cul|rti|nte| cr|iil|i v|lic|ubl|pub|vre| vr|s l|cri|nom|scâ|asc|nji|ire|ion|aes| ae| du|rtâ|idi|ini|sin|eal|uti|cru|vit",
      sco: " th|the|he |nd | an|and|al | o |ae | in|es |in |t t| ta|cht|or |tae|ich|ric| ri|ion| aw| be|is |s t|tio|ht |bod|dy |ody|s a|e a| he|e r|ent|on | co|his|hes| or| na|ati|wbo|awb|ty | fr| hi|be |e t|n t| sh|ts |sha|er |hal|nal| on|y h|ng |l b|ree|fre|ing|l a|e o|y a| pe|o t|it | ti|e s|ter|s o|air| ma|nat|for|n a|nt |il |til|aw | fo|ona|e c|ny |ony|tit|nti| a |men|ity|e w|at |d t|t o| wi|her|e f|dom|edo|eed|d f|d a|ce |con|an |e i|e e|r t|nte|ar |lit|oun| re|ic |n o|nae|t i| it|ont|sta|oci|soc| as|y i|r i|ith|ne |ane|ons|ed | di| so|ly | wa| fa| pr|y s|ers| ha| se|int|und|e g| st| de| fu| en|nce|hts|d o|o h|res|com| no|le |e h|nin|r a|ie |e p|ear|ial|r o| la|inc|ite|wi |re |ual|qua|equ| eq|ns | le|ess|ali| pu|en |per|e m|cia|as |thi|lt |elt|rit| is|d i| we|imi|din|ild|eil|nor|r h|t n|e b|tri|ntr|ir |iou|eli|ge |lan|s r|s f|ms |tel|cie| me|lea|fai|y t|hat|tha|l t|law|g a|om |y o|sec|e l|ver| tr|ds |r b|l o|iti|un |cti|dis|e d|s d|id |hei|ld |are|rou| un|omm|s c| at|ssi|war|n h|me | ac|ten|bei|t a|uni|eme|tho|rt | ga|s n|m o|hau| li|tie|g o|rni| wh|s w|rie|ern| gr|mai|tat|n n|ica|igi|age|n w|oms|s e|d s| ar|nit|ee |n f|man|arn|rk |ark|eri|ral|e u|k a|el |te |ose|pos|ak |ces|s h| ch|lic",
      tso: " ku|ku |ni |a k|hi |i n| ni|a n| a |ka |i k|wa | ya|na |ya |fan| ma|la | ti| hi|nel|iwa|a m|ane|hu |a t| sv|ela| na| ka|lo |svi|u n|mbe|nhu| à | mu|u k|a w|eli|ndz|li |vi |be |kum|ihi|umb|i l|wu |ele|elo|mun| wu|a h|a l|nfa|u l| fa|liw| va|aka|wih| wi|unh|nga|lan| nf|a s| wa|u y|u h|iku|tik| ng|i m|u t| xi|va |o y|le |i a|nu |yel|amb|e k| le|anu|han| ha|isa|ana|eni|a x|lel|ma | kh|a a| la|ga |ndl|i h| li| nt|irh| ko| è |a y|ti |ani|ta |sa |in |kwe|u a|i w|any|lek|u v|pfu| ye|van|yen|u w|i s|yi |tir|à n|and| nd|mel|e y|eke|i t|a v|n k| lo|à k|isi| kw|hin|we |ang|è k|wan|aye|ko |a f|mah|rhu|i y|end|ham|mba|u f|lul|ulu|hul|khu|kwa|nti|hla|ngo|kel| si|eka|dle|dzi|may|ule|aha|u s|u m|i à|ati|thx| th|dze|nth|anh|eki|oko|eyi|u à| lè|mat|n w|xi |fum|vu |nye|zis|i f|thl|lok|rhi|ava|a è|lak|o n|mbi|tà |mu |ke |tin|ond|o l|ngu|e n| dj|ong| mi|siw|a à|vik|lwe| ts|uma|naw| tà|hak|èli|à m| là|xa |ume|u p|sik|gan|e a|wak|xiw|ind|u d|esv|les|ike|wey| lw|e h|awu|mha| hà| ta|za |dza|i x|nyi|ths|fun|avu|wav|kot|ki |jon|djo|rha|umu|ba |sin|ha |xih|kar|lon|hxu|àwu| nh|to |ung|a u|ola|kol|ali|fu |int|akw|nan|àkw|gul|sun|wen|ikw|gom|kon|sva|kho|hel|sem|tse|sek| y |zen|ìhi|là |mi |e w|hlo|e m|exi|lex|nya",
      men: " ng|ɔɔ |a n|i n|ti | gb| ti| i |i l|ngi| ma|gi |aa | nu| kɔ|a k|ia |ma | na| ye| ta|kɔɔ|ɛɛ |ei | a |hu |bi |gbi|a m|na | hu|a t|i y| lɔ|u g|ya | nd|ii |i h|a h|i m|ɔny| kɛ|ɛ n|nya|lɔn|mia| mi|ɔ t|uu |ngɔ|ɔ i|ee |nga|lɔ |la |ao |tao| kp|i t|ye |nge|ɔ n|i g|gaa|gɔ |i k| le|hou|a y|ung|ni |ind| yɛ|e n|nuu|a l|nda| hi|umu|num|hin|mu |ugb|hug|oun|kɛɛ|eng|gba|a a|maa|a i| ɔɔ|da |ɔlɔ|ahu|le |i i| sa|ndɔ| ji|a w|ɔma|mah|yɛ |e t| lo|saw|o k| va|ta |gbɔ|u n|i w|li |va |u k|bat| ho| ya|sia|lei|ahi|e a|i j|nde|e m| ki|yei|isi| wo|kpa|dɔl|gbu|ɔ k|ge |awa| gu|wei|awe|e k|ila|ani| wa| ii|ji |aho|ale|ndu|kpɛ| ha|kɔl|a g|gbɛ|wa |nah|i b|yek|ein|yil|bua|atɛ| la| ny|tɛ |ɛ t|kpɔ|taa| ɛɛ|ɔ s|ie |ɛ k| we|bɔm|kpe|ekp|hei|nun|uni|ɛi |u t|ɛ y|ɛlɛ|gen|te |ote|wot|ɔ g|ama|i ɛ|ulɔ|gul|lee|kɛ |eke|pe |tii|ɔ y|pɛl|yen|bɛɛ|e y|ɛ g|ɔle|ga |a b| tɔ|u w|aah|baa|lek|o g|a v|bu | he|ili|kia|uvu|aal|jɔɔ|ajɔ|maj|nye| bɛ| sɔ|lɔl|ka |ɛmb| wi| ka|e h|iti|akp|ang|bɛm| ba|u m|u ɔ| yi|ɛ i|e g|lii|uah|nuv|lɛɛ|gua|yɛn|sɔɔ|ui | lɛ|dei| pe|i p|mbo|uam|ong|lon|ngo|oko|lok|a p|a s|haa|i v|ula|hii|yee|yan|u a|ati|wat|hi |ke |wee|e i|u i|ewɔ|ɔ h|wu |nyɛ|oi |ɔhu|ɛ h|u y|vuu|boi|paw|ɛng|wie|ɛ w| ga|lɛ |ɔɔh|bla|ɛ a|ɔli|ua |mɛi|amɛ|oma",
      fon: " e |na | na| ɖo|ɔn |ɖo |nu |o n|kpo| nu| ɔ | kp|mɛ | mɛ| gb| é |tɔn|po |do |yi | si| tɔ| al| to|gbɛ|wɛ |bo |e n|ɖe |lɛ | lɛ| do|lo |in | bo|e ɖ|ɛn |o a| wɛ|ɛtɔ|to |tɔ |ɔ e|sin|o e|a n|ɛ b|acɛ| ac|o t|nyi| ny|ɔ ɖ|okp|nɔ |ee |bɛt|ɖok|cɛ |ɛ ɔ|bɔ |an |ɛ n|a ɖ| ɖe|ɛ ɖ|o ɔ|n e|ji |ɔ n| bɔ| ǎ | en|mɔ | mɔ|n b| hw|i ɖ|alo|lin|n n|ɔ é|n a|nɛ |ɛ e|un |o ɖ|bi | bi|mɛɖ| yi|i n| ye|kpl| jl| wa|ɛɖe|enɛ| ji|u e|i e| ɖɔ|alɔ|a d|n m|ɔ b|é n|nun|hɛn| hɛ|e m|e e|ɔ m|e k|ɖɔ | nɔ|lɔ |ɛ é|é ɖ|odo|gbɔ|wa |n k|a y|kpa|sɛn|a s|ɖee|ɛ k|a t|jlo|ɔ w|ɔ t| sɛ|e j|kɔn|ɔ g|nnu|inu|pod|bɔn|o g|e s|ɔ s|unɔ|n ɖ|ɔ a|o s|a b|n t|hwɛ|o j|e w|o m|i t|bɛ |xu |ixu|six|eɖe|etɔ|ɔ k|lɔn|bǐ | bǐ| we| ka|nuk|o h|n ɔ|ba |zɔn|ukɔ|a m|ɛ a|n d|ma |o l|hwe|si |u k|azɔ| az|ema|wem|ogu|tog|nmɛ|o y|sɔ | sɔ|ali|ɛ l|jɛ |n l|ayi| ay|ɛ s|plɔ| zɔ|a z|ɖè |i k|onu|n w|u w|u a|u m|a e|hun|o b| lo|gun|n s|e ɔ|ka |dan|o d|gan| i |a g|i w|ɖó | ɖó|n g|wu |u t|yet|ɛ g|su | su|oko|a j|ɛ w| hu|ɛnn|obo|u l|kwɛ| ga|a w|i s| fi|a l| ee|pan|lee| le|ɛ t| ɛ |e b|evo|ɖev| wu|u g|i a| ma|ɖi | ɖi|ye |o w|isi|sis|zɔ |ǐ ɖ|o k|nú | nú| vi|ple|emɛ|we | ɖ |wɛn| ba|o é|nya| da|ɔ h|gba|ɛ m|fi |ya |kan| jɛ|e g|i m|jij|mɛt|ɔnu|u n|nuɖ| eɖ|e t|xo |ɔ y| li|enu|wen|ɔmɛ",
      nhn: "aj |tla| ti| tl|ej |j t| ma|li |a t|tij|an |i t|sej|kaj|eki|uan| to| no| te|ij |j m| ua|chi| se|noj| ki|ma |ika|laj|j k|j u|pa |tle|man|aka|oj |ka |lis|ech|tek|se |uaj|ano|ise|iaj|tec|amp|iua|ali|pia|j n|och| mo|pan|mpa|a k|kua| pa|n t|is |ya | am|uel| ue|eli|ual|ili|en |len|kit|ajt|a m|jto|j s|kin|ijp|amo|ia |jki|tim| ke|mo |hi |ant|ama|ani|noc|opa|oli|aua|j i|ase|tli|nek|itl| ik|ijk|tok|nij|imo|ati|kam|jpi|tik|ipa|one|tis| o |oua|tit|ra |ara|par|nop|tl |jya|a s|iti|lal|cht|ok |ojk| ku|o t|kiu| ka|maj|kej|lak|leu|alt|ijt|mej|lau|kia|ana|ki |kij| ak|jka|n n|lam|i m|mon|e t|til|s t|nti|j a|k t|ita|kip|kem|j p|lan|jtl|tep|lti|lat|ema|uat|ose|iki| ip|ats| ni|ntl|ajy|e a|stl|ach|tou|eua|tot|kat|uam|atl|eui|toj|ni |nau|nka|ist|epa|ite|ale|pal|oka|tia|ajk|ini|j o|tsa|n m|ipi|kui|eyi|uey|jua|a i|n k|mat|nit|i n|oju|a a|onk| on|o o|uik|uil|n s|ken|ijn|ank|a n|ote|i u|i k|otl| sa|kon|as |ino|hiu|xtl|tos|its|tsi|n a|oyo|eka|chp|san|mpo|uak|ko |a u|tol|oke|yek|yol| ya|uas|pam|nok|tin|aui|htl|o k|sij|yok| me|nem|las|jke|ejy|hti|jne|nko|jti| ax|mac|emi| in|i i|mot|oui|ame|yi |lit|i a|kol|jku|sek|epe|lte|pil|nan|axt|ami|ejk|ine|int|ojt|ate|ias|ela|mel|aku|ina|uis|etl|kis|mik|ito|ui |ak | ye|ona",
      dip: " ku|en |ic | bi|bi |ku | yi| ke|yic|an | ci|aan|raa| th|c b| ka|n e|n a| eb|ci | ra|c k|ŋ y|kua|i l|i k|ka |in |th |ben|ny |ebe|kem| ek| al|eme|men| ye|k e|höm|nhö| nh|öm |ai |alɛ|lɛ̈|i y| lo|n k|t k|c e|thi| la| er|ɛ̈ŋ|ɔc |̈ŋ |kɔc|ek |yen|ua |m k|de |t e|ŋ k|a l|ok |aci| te|n b|at |u l|ith|n t| ep| ac|k k|it |i r| lu| e |uat|ke |u k|aai|oŋ |te |cin|ken|e y|eŋ |ui |epi|baa|ath| lɛ|tho|ɛŋ |hin|era|n c|e w| mi|a c|hii|lau|h k|ekɔ|n y|el | ti|u t|l k|au |kek|nde|lɛŋ| pa|n r|n l| et|h e|a k|u b|nhi|a t|thö|pio|la |c t|e k|ot |rot| kɔ|iny|pin|ŋ e|ak |loo| le| pi|i e|eba|ëk |ik |im |iim|ŋ n|oi | ro| ny| tu|kak| el|i m| kö|hok|y k|pan| we| ba|i t|iic|m e|u n|ye |oc |ioc|loi|k a|lui|wic| wi|e c|and|e l|eu |pir|i p|wen|ɛt | lö| li|mit|ëŋ |eth|yit| ey|öŋ |u m|nyo| aw|e e|i b| ew|i d|den|any|iit|iek| aa|k t|uc |köu| ko|leu|ir |r e|t t|e r| dh|ök |uee|tue|y b|e t|eny|uny|ooŋ|i c|cit|u c|n w| ya|l e| ec|kic|höŋ|eeŋ|dhi|a p|uan|m b|ut | ak|yii|y e|ewe|wuc|awu| mɛ|pat|i n|ien| ed|h t|uk |tii|öun|lie|ɛ̈n|elo|am |cii|r k|t c|wel|löi| wɛ|bai|thë|u y|tha|eku| en|k c|thɛ|hök|ɛɛt|il |hil| cɔ|ieŋ|cie|öny|kön|aku|m r|tic|oui|lou|ale|t a|war| wa|eka|ynh|nyn|kue|eke|eri|oth|yoo|loŋ|p k|up |k y|m a|y r|die",
      kde: "na | na|la |nu | va| wa|a k| ku|ila|wa |a w|unu| mu|a v|chi|mun|e n|a m|a n|van|ya |ele|ana|le | ch|amb|ave|sa |lam|asa| vi|ohe|mbo|aka|u a|was|e v|bo | n’|ne |e m|ke |u v|vel| pa|ala|a u|ake| av|hil|ika|ng’|ing|ngo|he |a l|ve |ile|anu|ela|vak|any| ma|vil| li|a a|go |a i|wun|uku|ili|lan|bel|mbe|ene| mw|nda|kuw|ama|nya|ola|ali|kol|kan| di|g’a|au | au|emb|den|eng|lik|uni|wak|a d|’an|e a|lem|ong|o v|ulu|kuk|an’| ak|ach|a p|kal|ma |dya|n’n|lew|mad|aya|and|mwa|uwu|kum|ye |a c| vy|apa|va |ava|ane|hel|mbi|kut|o m|hi |we |ula|ole|u m|umi|din|ton|ji |nji|nil|ewa| il|voh|ade|und|ni |kul|dye|dan|kay|uko|idy|kav|tuk|nan|kam|ka |ia |lia|eli| dy| in|ndo|ond|hin| la|uva| ul|ani|vya|i n|o n|wen|mwe|da |e k|e u|o c|lel|pal|nje|yik|aha|uwa|lil|n’t|nga|ata| ka|she|pan|cho|ang|no |u i|lon|ulo|lim|uli|’ch|dil|hev|i w|u l|e w|mba|niw|mil|ba |yoh|uma| um| kw|u n|wal|vin|vyo| an|bi |a s| ya|dol|hoh|u c|awa|lin| al|ilo|’ni|e p|ale|n’c|mu |imu|lun|kup|yak|yac|’ma|n’m|mah|atu|wav|kuv|hon| lu|i v|hih|jel|utu|hap|uka|o l|u w|itu|ga |o a|i d|umb|a y|inj|taw|ita|lit|lek|val|e c|oko|aku|me |bu |paw|kuy|mak|e i|yen|iho|amw|woh| ih|iku|pil|kun|onj|tul|nah|awu|ahe|i a|kat|mat| wu|pac|ina|olo|uto|ech|kwa|i c|li |ngi",
      kbp: "aa | pa|se | se|na |nɛ | nɛ| wa| yɔ|yʊ |ɖɛ |aɖɛ|a w|ɛwɛ|ɛna|ɛ s|ɩ ɛ|paa|a ɛ| ɛy| ɛw| ɛ |ɛ p|e ɛ|waɖ|ɛ ɛ|e p|a p|wɛn| pɩ|yɔ |yɩ |aɣ |ɛyʊ|ɔɔ |ʊʊ | ta|ala|yɔɔ|yɛ |ɔ p|a n| ɩ |yaa|taa|ʊ n|a a|ʊ ɛ| tɔ|ʊ w|zɩ |la |wɛɛ|nɩ | an|ɛ t| kɩ|anɩ|ɛ y|maɣ|ɛ n|nɔɔ| nɔ|ɛyɩ|ɔm |tɔm|ɩ t| we| pʊ|ɩ p|ɛ ɖ|ɩɣ | ŋg|ama|kpa|a t|ɩyɛ|ayɩ|a k| tʊ| kʊ| pɔ|daa| wɛ|pa |ʊ t|ʊ p|tʊ |ʊ y| ɛs|wal| pɛ| na|ɔɔy| ya|fɛy| ɖɩ|ɖɩ |ɔɖɔ|ɔ ɛ| ɛl|i ɛ|ɩ ɖ|wɛ |ɛ k|ɛɛ | tɩ|ɩ n|paɣ|ɩ s|ɛja| ɛj|ɖɔ | ɖɔ|ɔ s|ɛla| ɛk|a s| mb|ɩ y|ɛya|pal|a y|ʊma|ɔyʊ|a ɩ|jaɖ|ɖɔɖ|kpe|ɩzɩ|ɩna| ñɩ|yi |eyi|kɛ |bʊ |mbʊ|ʊ k|mɩy|tʊm|alɩ|ŋgb|ɛzɩ| fa|ʊyʊ|ɩ ɩ|ɩfɛ| ɛt|kɩ |wey|ma |lɩ |ɔɔl|nda|ɩma|gbɛ|sam| sa|li | lɛ|ɩsɩ|akp|pak|ɣtʊ|ya |lab|sɩ |ŋ p|pɩf|day|and|kan|ɣ ɛ|sɔɔ| ye|ɩm |kɩm| kp|uli|kul|ɛyɛ|ʊmɩ|laa|iya|ɩ k|e e| ɖo|ʊ s| ha|aʊ |maʊ| ɖe|aɣt|ɔ k|ɔ y|a l| ke|pɩz|ŋgʊ|ɣ p| kɛ|eki|ɔŋ |aŋ |tɩ |ɛhɛ|bɛy|ʊ ŋ|pʊ |ba | sɔ| ɛd|nʊm| nʊ| pe|ɖʊ |ada|pad|ɣna|le | le|ʊ ɖ|ñɩn|pe |zɩɣ|ɛpɩ|naa|gʊ |ñɩm|ɣ t|a ñ| la|hal|ɛda| ɛɖ|ndʊ|m n|zʊʊ|ɖe |ana|akɩ|bɩ |abɩ|lɛ |ɛɛn|m t|ɔyɔ|ekp| ɛp|dʊ |tɩŋ|ɛkɛ|ɖam| ɖa|ina|maŋ|alʊ|uku|suk| su|kʊ |ɛsɔ|ɛtɩ|lal|ɛ l|tɛ |e l|lʊ | kɔ|ɩlɩ|ɛɛk|i p|pan| tɛ|ŋŋ |aka|pɩw|bʊy|abʊ|nab|lak|ee |yee|e w|ʊna|m p|e t|ye |iye|uu |a ɖ|nɖɩ| nɖ|dɩ |eek|pee|ga |ŋga|yaɣ|a m",
      tem: "a ʌ|uni| ɔ |ni |wun| wu| tə|yi | ka| yi| ʌŋ|ka | kə| kʌ|tək|kə |ɔŋ |əkə| aŋ|mar|nɛ | ʌm|ma |i t| th|ri | ɔw| a |i k|a k| ma|i m|ari| ba|wa |tha| kɔ| mʌ|ɔwa|thɔ|ba |ɔm | o |lɔm|ʌma|kɔ |i ɔ|a y|‐e |o w|ŋ k|a a|alɔ|te |i o|hal|ɔ b|aŋ |ɔ y|a m|ŋth|ŋ y| rʌ| ʌt| mə|kom|ema|yem|mʌ |ɔ k|om | ye|hɔf|ɔf | mɔ|th |e ɔ|ɛ t|ʌnɛ| ŋa| sɔ| gb| ro|ʌŋt|ɔ t|ʌth|a ɔ|ar |yɛ |ʌte|m k|ʌŋ |m ʌ|hɔ |ank|wan|ŋa |anɛ|ŋ ɔ|ŋɔŋ| ŋɔ|nko|rʌw|kʌm|ki |kət| yɛ| te|a t|ʌwa|ɔ ʌ|ʌmʌ|e a|kʌt|thi|i r|əm |ra |kəl|a w|ə k| yɔ|ʌme|me |a r|mɔ |kəp|aŋf|əŋ |e t|pa |əth|fəm|a‐e|ələ|ləŋ|ɛ k|ʌ k|ŋe |yɔ |ro |rʌ |ɔ m|gba|thə|ŋfə|li |ə b| ʌk|ə t| rə|m r|ɛ ʌ|i ʌ|ʌŋe|ta | ta|e m|bot|əpa|nʌn|m a|ma‐|sɔŋ|kəs|e w| ra|təm|ŋ t| tʌ|ath|gbə|ʌkə|ə s|ɛth|ɔ a| bo|i a|ŋ a|ŋ b|ɛ ŋ| bɛ|ʌrʌ|nth|ant|əli|bəl|o ɔ|ɔkɔ| pə| tɔ|əs |e y|kar|nka|ran|r k|ʌlə|əyi|m t|ə y|sɔ |ɔ ɔ|ŋgb|tʌŋ|ɔth|sɔt|mʌy|t k|ot |ith|ɛ m|tɔŋ|tət|ləs|mɔŋ|rək|ɔ r|thɛ| po|tə |wop| wo|gbʌ|f ʌ|ʌyi|ʌ ʌ|e k|ɛ a|mʌs|ə g|ənʌ|hən|bɛ |ara|pan|hit| ʌr|kɔŋ|a ɛ| wa|iki|ɔ g|to | to|lɔk|o t|ɛ r|eŋ |mʌl|gbɛ|ʌgb|hi |pi |tho|mə |ŋʌn|ər |oŋ |roŋ|m ŋ|hɛ |po |i‐e|mʌt|ʌ t|ʌy |ti |‐o |f ŋ|op |ɔ w|na |shɔ|nsh|ekr|sek|ʌse|aŋk|bas|mət|raŋ|kʌr|ʌtʌ|wat| ɛm|h k|i y|han|ək | ya|kəb|kɔn|yik|ayi|yir|pəy|ʌ ɔ|ɛŋ |əte",
      toi: " ku|a k|wa |a m| mu|la |e k|a a|ula|ali|ya |i a|de |ang|aku|tu |kwa|aan|ntu|na |lim| al|ulu|lwa|mun|ngu|luk|ele|gul|mwi|wi |gwa|kub|imw|ons| oo|oon|se |nse|ant|zyi|unt|ela|si | ak| ba| an|and|a b|ala| ci|uki|isi|nyi|ide|kid|zya| lw|ba | kw|uny|eel|laa| ul|cis|yin|kun|uli| zy| ka|tel|nte|ina|kul|kuk| ma|ili|waa|uba|wee|kwe|ede|led|nda|we |mul|nga|kus|da |izy|kut|wab|ana|i m| ya|ukw|o k|amb|yan|ka |e a|lil| bu| am|uci|a l|ilw|a c|li |sal|ban|e m|e u|u o|ila|bwa|aka|bo |bul|akw|wak|ale|kal|o a|i k|amu|bil|umi|bel|mbu|lan|usa|egw|abi|lo |awo|kuy|kup|igw|ko |uko|kak|wo |law|aci|i b|u b|ati|o l|yig|asy|ubu|wii|ika| bw|le | mb|ga |ung|kum|kka|ku |ndi|aam|muk|cit|mal|bun|yo |ukk|ind| wa|i c|bi |aya|ne |ene|len|mo | ab|upe|a n|mbi|eya|kuc| lu|ndu|a y|syi|u z|uta|ile|abo|u a|a z|ita|uka|aba|bal|imo|ley|iin|yi |ti |u u|lik|du |asi|yak|o y|u k|ube|iko|cik|zum|muc|ani|ule|mil| mi|mbo|twa|e b|umu|was|di |o n|ngw|lwe|nzy|peg|zye|abu|buk|kwi|liz| nk|i n|bam|ta |kab|alw|eka|mas|u m|imb|onz|kon|sya|miz|gan|tal| we|uum|no |yil|int|lem|del|nde|end|mbe|uya|oba|azy|iyo|i z|lek| ng|o o|cii|i o|a u|mba|mu |a o|ako|yik|yeg|ezy|a w|mi |ni |omb|kom|o b|syo|iya|usi|min| ca|e c|aul|lau|uku| aa|yee|ama|yal|kam",
      ekk: "sel|le |se |ja | ja|use|ise|mis|õig| va|ele|ste|ust|gus|us |igu|st | võ| õi|dus| on|on |el |te |ma |al |iga|või|a v| in|nim|ini|da |e j| te|ist| ig|ime|l o|lik|mes|e k|õi |est| ko|l i| ka|end|iku|ese|adu|gal| se|e v|tus|lt |ami|n õ|ema|aba|vab|a k| ra|lis|val|a i|atu| ku|tsi|ud | mi|ada|ali|e t| ta|ta |stu|ast|ks |ole|tam|sta|nda|es |ell|tes| pe|e s|ik |a t|is |i v|ahe|rah|t v|ava|bad|kul|ine|ne |t k|vah|ei | ei|e e|ga | ol|lus|kon|s v|ida|s t|gi |a r|mat|ioo|tud|tel|kus|oma| om|dse|kõi|teg|ees|i t|aal|ndu|a s|a j|ing|a a|iel|s k|vas|tse| ee|tem|ul |igi|lle|s s|i s|ili|vus|uta|elt| sa|aja|e a|eks|min|its|asu|a p|s o|sus|sli|i m|oni|oon|sio|ses|e o|ete|abi|ühi|ega| ki|ari|emi|si |i e| ke|uma| ri|usl|ahv|ats|eva|lev|ab |pea|eis|nis|rds|õrd|võr|sed| kõ|töö| ni| ab| üh|rid|nna|saa|teo|sek|ni |kor|ale|imi|ait|t i|sik|isi|eli|e õ|dis|ots| so|ata|lem|eab|üks|tum|dam| mõ|a o|õik|idu|har| tö|e h|nin|alt|onn|ite|ult|e m|mal|isk|kai|ead|sea|koh|d k|as |jal|põh| põ|aks|rit|hvu|dum|een|e p| ük|s j|set|ed |ng |bie|a ü|uri|s a|kin|ald|e r|t m|eri|i k| al|eel|lli|eta|dad|ule|elu|s p|i p|rii|hel| to|ndi|lse|als|iaa|sia|sot|rat|ara| kä| ve|and|umi| su|de |etu| vä|na | sü| ha|a m|e i|lit|lu |per|nud",
      snk: "an | a |na | na|re |a n| su| ga|a k|ga | ka|a a|en |su | se|a s|ta |ma |e s| ta|ser|ere|ama| i |aan| ra|un |nta| ma|n s|do | ki| ja|a g|jam|ne |nan| do| nt|ana| da| ya|ane|wa |ŋa |n ŋ|ri |e k|u k|a d| ŋa|ndi|ni |ra |raa| ku|taq|maa| si| ba|a r|tan| ke|aaw| sa|ren|gan|and|a b| be|a i|awa|di |i s|oxo|aqu|oro|kit|me |lli| go|tta|ini|ya |a j|ari|a m| xa|iri|aar|oll|gol|a t|e m|i a|i k|xo |sir|n d|aax|lle|a y|be |on |baa|n g|ran|din|ara|u r|e d|u n|qu | so|axu|are|o a|a f|ke | wa| ko| an|man|xar|dan|kan|ron|sor|li |de |nu |fo | fo| no|kuu|n t|pa |nde|n k|i g|len| ña| du|n n|nme|aad|u b|ang|axa|e y| fa| mo|ppa|app|kap|o k|o s| fe|ell|a x|att|kat|ure|i x|xun|e n|aba|mox|ti |i t|n y|yan|enm|ada|n f| bo|n b|a ñ| yi|i m|u t| di|da |iti|qun|nga|u a|xu |itt| ha|le |i d|sel|i n| me|ill|e t|riy|o b|ro |u d|du |saa| re|dam|haa|ind|xa |n x|ono|i i|nen|lla| mu|ond| ro|o n|udo|uud|ant|aga|ku |la | wu|nma|eye| tu|edd|fed|nox|no |o d|uur|sar|gu |e g|kil|ñaa|ire| bi|inm|ken|e b|tey|ite|ira|yu |a w|ina|iin|yi | xo|n w|o t|taa|ka |u s|anŋ|uga|und|i r|ore|bur|i b|fan|iba|xib| xi|een|u m|ogu|bog|bag|oqu|noq|oor|e r|bir| ti|i j|ban|ye |dii|o m|anm|ene|kka| ye|ña |rey| le|iña|ita|mun|ura|kaf|ank|e i|liŋ| li",
      cjk: " ku|a k|yi |nyi| ny|la | ci|a n|a c|wa |we | mu| ha|nga|i k|ga |ana|uli|kul|a m|esw|ela|ze |mwe| ka|ha |sa |tel|a h|swe|ung|ci |a u|ate|ma | wa|u m|kwa|han|e m|kut| mw|uci|mbu|mut|nji|nat|ya |uth|e k|na |pwa|kup|thu| ma|wes| ca|ji |kan| ya|lit|hu |i m|aku|asa|i n|mu | ul|ca |ang|e a|ina|anj|ali|imb|cip|amb|mba|i c|li |e n|i u|ka |muk|a i|awa|naw| na|fuc|ifu|uta|upw|ing|ize|ula|lin| xi|ukw|lim|ong| kw| an|ite|xim|ta |ita|umw|ulo|umu|has|kuh|kha|u c|ala|nge| mb|wo |ila| ce|cif|a a|kus|ama|tam|mwi|ili|te |imw|bu |o k| ng|ba |ipw|lo |bun|ikh|wik|ulu|mo |ufu| ak|o m|utu|ngu|imo|mil| mi|ko |a w|kun|ciz|i y|a y|kuk|eny|aze|aci|pwe|aka|o n|yum|uha|uka|e w|o y|lon|kum|e u|cim|ku |swa|e h|e c|mbi|emu|no |nal|a x|was|fun| un|uma| ja|usa| li|wil|uze| ye|o w|isa|o c|nda|ngi| es|kat|e y| in|aha|waz|yul|esa|yes|una|wen|aco|i h|cik|ema|pem|nyu|ika|kal|bi | ik|mah|zan|aso|so | uf|ata| iz|apw|tum|tal|o l|wam|iku|sak|ja | up|kwo|umb|oze|yoz|uni|ges|cen|kuz|wak|mul|wan|ulw|o u|cyu| cy|u i|e i|tan|mun| um|kuc|ngw|cin|co |go |ngo|da |ipe|ge |lem| uk| yo|lwi|nin|ikw|u k|kuf|uso|i w|upi|lum|gwe|uki|upu|and|pha|ces|ond|i j|man|ile|ule|uku|gik|akw|ino|ele| if|hac|tha|cil|eka|za |vul|uvu|hel|lu | it|ke |lya",
      ada: "mi | e |nɛ | nɔ| nɛ|nɔ | he|he |ɔ n| a | ng|e n|a n|kɛ | kɛ|aa |ɛ e|blɔ| bl|i k|i n|gɛ |ngɛ|ɛ n|lɔ |e b| mi| ma| ko|ɛ h| ts|ko |ɛ a|e h| ni|hi |ɛɛ |ɔ k|a m|i h| ɔ |tsu|ma |ami|a k| ny|ɔ f|oo |loo|i a| be|ya |e m|be |ni | kp|o n| si|si |nya|emi|ɛ m|fɛɛ| fɛ|laa|a h|a b|e j|a t| hi|e k|umi| ka|kpa| je|ɔ h|e s| lo| ye|ɔ e|i t|pee|omi|mɛ | pe|mla|i m| wo|je | ha|ɔmi|ɔ m|maa|sum|ke |i b|o e|ɛ k|ɔ t|alo| ml|ee | sa|ɛ ɔ|ɔɔ |ha | na|lɛ | lɛ|a a|i l|ɔ́ |a s|ɛ s| hɛ| gb| su|nɔ́|e p| al|eɔ |ɛ b|ne |i s|ɛmi| fa|uaa|sua| bɔ|ɔ a| to| ji|o k|kaa|bɔ |a e|ihi|u n|e ɔ|o a|yem|ane|e w|suɔ|imi|e y| ke|ɛ y|ɛ t| hu|san| we| jɔ|ɔhi|lɔh|e e|ahi|i j| bu|ɛ j|pa | ja| ku|wom|ngɔ|a j|him| bi|ue |e a| ya|tom|ɔ b|gba|o m|jam|́ k|fa |ake|ɛ p|uu |ba |hla| hl|sa |ɔ s|hu |e f|hɛɛ|uɔ | tu|e t|ji |tsɔ|jɔm|i ɔ|kuu|kak|ɛ g|a l|wo | sɔ|tue|o h| gu|isi|ɔ y|sɛ |o b|sɔɔ|gɔ |ia | ju| kɔ|eem|e l|akp|pak|li |e g|sɔs|a p|uɛ | yi|ti |sis| sɛ|to |ɔ l|ɔ w|ɛ w|yɛm|na |hia| nu|ɔsɔ|ye | mɛ|sem|ase|kas|hiɔ|naa|íhi|níh| ní|kpe|usu|uam|onɛ|kon|nih|eeɔ|mah|o l|a w|lam|ɔɛ |sɔɛ| pu|hɛ | ba|gu |a g|a y|ɛti|pɛt|kpɛ|o s| fɔ|bi |nyu|o j|we |se |uo |suo|ade| ad|bua|su |ngm| fi|iɔ |u k|haa|oɔ |koj| am|ɔ ɔ|ɛpɛ|i p|i e|guɛ| wa|io |jio|bam|ɔ j|yo ",
      quy: "chi|nch|hik|anc| ka|una|man|aq |pas|ana|kun|as |paq|nan|kan|ikp|cha|sqa|qa |ik |apa|aku|ech|kpa| de|cho|rec|ere|der|spa| ma|asq|am |an |taq|pa |nam| ru| ch|yoq|ta |na |a k|ina|mi |qan|ima| ll|aqa|lli|oyo|hoy|ant|ach|run|nap| im|pi |nak|hay|asp|ayn|wan|q k|ipa|nta|hin|oq |cio| hi|iw |liw|inc|ion|aci|chu|lla|pip|nas|npa|nin|qmi|kay|kas|ota|a m|anp| hu|all|nac| na|yna| ya|ari|api|i k|w r|nku|iku|in |a c|ama| pi|may|hu |kuy|ay |nma|has|onc|hon| ot| wa|aqm|anm|a p|n h|ata| li|ikm|hwa|chw|ma |awa|a d|qta|ara|pan|m d|pap|yku|yni|a l|kma|q l|ich|kin|huk|a r| ha|yan|uwa| ca|nqa|kta|ikt|q m|a i|n k|kpi|mun| sa|cas|usp|q h|wsa|aws|kaw|bre|ibr|lib|lin| al|k c| mu|ask|kus|a h|s l|ank|q d|yta|e k|tap|q c|mpa|pak|ski|qaq|ien|i c| qa|tin|re |nni|uch|isq|a s|was|ern|s m|a a|ayk|onn|s y|oqm|aqt|ruw|qpa|aqp|par|amp| am|nmi|ley| le|ayp|nat|i h|yma|onk|law|ier|map|a f|war|ita| ni|naq|yac|tar|naw|ayt|sak|n a|anq| pa|a q|aya|val| va|ypi|sti|ast|ura|n c|m p|s o|w n|rno|bie|obi|gob| go|rma|qar|nit|m i| ta|say|haw|s i|k l|asa|k h|rur|pun|wac|onm|tan| fa|tam|kap|oqt|i d|s c|ici| ju|a t|ras|ran|uy |uku| tu|qay|k k|ku |q i|arm|uk |a y|nti|awk|um |igu|esq|k m|sap|ati|aw |a o|asi|n p|sic|isp|aru|ukl|ten|pti|qku",
      rmn: "aj | te|te |en | sa| le|el | si|si |aka|sar|pen|les|kaj|es |ipe|sav|qe |j t| ha| th|ja |hak| e |and| o |ave|i l|ar |ta |esq| an|a s|sqe| ma| ja|ia |nas| ta|imn|e t|as |mna|kas|e s|haj|tha|s s|ark|asq|e a|nd |i t|s h|rka| na| i | pe|mes|isa|vel|cia| bi|ne |bar|kan| aj| me|avo|utn|the|e k|lo |o s|est|qo |e p|n s|ard|hem|a a| av| so| ba| pr|õl |a t|mat|ima|l p|e r|e m|e o| ka|man|orr|e d| di|o t|rel|sqo|re | ov|ika| re|qi | ak|enq|ere|vor|e b|res|ove|avi|ve |ver|o a|n t|o m|akh|rak|rim|a p|no |ana| ra|sti|d o|len|aja|rre|but| va|sqi|ker|r s|de |ata|ren|ali|ara|ste|ti |e l|r t|vip| ke|na |i s|ang|àci|tim|nqe|kon| ph|n a|nip| de|j b|àlo|al | pa| bu|are|vi |dõl| ni|tar| ko|naś| pu|o k|n n|l a| po|śaj| śa|on |lim|er |ari|i a|ven|pe |śti|aśt|a l|o p|e n|dik|rdõ|nik|l s|tis|ast|tne|a m|a e|erd|ndi|ni |pes|rin|j s|e h|aba|rab|khe|tni|eme|uti|rip|uj |amu|ano|ćar|a j|ća |la |khl|l t|e z|do |o z|ri |mut|kri|alo|soc|i p|so |ran|del|kar|nuś|anu|pra|din|nge|nis|ută|rde|vo |muj|mam|i d|nća|enć|ate|uni| as|iko| zi|rdo|l o|j p|eri|emu|ane|i b|o j|oci|i r|a d|ing| je|iàl|e e|l l|ɵar| za|tes|ćha|pal| vi|l b|ɵe |l e|aća|one|kin|to |ziv|imi|a n|per|ter|ris| kr|s a| st|o b| ćh|a i|kla|da |nda|e j|ekh|jek",
      bin: "e o|ne | ne|an |en |be | o |e e|wan|mwa|n n|vbe|mwe|emw|evb|na |omw|e n| em|in | na|ie |gha|n e| gh|re | om|wen|e a|ha | ke|e i|n o|gie|bo | vb|wee| kh|win| ir|vbo| ev|o n|gbe|he |hia|nmw|o r|a r|o k| no|ogi|nog|kev|tin|eti| et| mw|e u|mwi|a g|ra | ya|een|ee |a n|a o|ke | re| we|rri|ghe|ogh| og|a e|n k| a |ia |ya |o g|ien| uh| rr|ye |khi|ran|ira|ere|a m|a k|ian| ot|ro |n i|ovb|o m| ye|egb| ra|hi |de |kpa| eg| hi|n y|o e|hae| ok|a y|eke|mie| mi| gb|o y|ba |oto|rhi|n m| iw| ru| er|arr| ar|unm|rro| ov|e k|okp|aen|n a|hek|khe|nna|inn|ugi|hie|a u|ru |ae |to |wun|mwu|hun|otu|i k|i n|a v|nde|and| do| or|uem|rue|dom|n w|oba|iob|rio|e r|tu |ze |ehe|pa |e v| ma|aya|iru|iwi|ma | rh|un |uhu|yan|mo |gba|e y|o h| la|a i|rie|irr|ai |uhi|ho |u o|ren|yi | ni|egh|u e|u a| ug|ugh| al| iy|beh|aan|a d|n g|gho|ue |onm|ghi|anm|iko| ai|ene|i r|a a|aze| az|khu|i e|bi |vbi| i |yaa| yi| ek|hin|bie|on | ay|emo| od|aro|obo|e d|rov|o w|e g|ii |nii|se |kom| ow|ron|kha|o v| se|a s|rre| de|lug|alu|owa|wu |a w|aa |e w| bi|a b|n h|dia|fue|ifu| if|ebe| eb|ode|sa | os|nug|anu|wa |oo |gue|uwu| uw|ese|bug|vbu| en|n r| lo|n l|ugb|kug|la |uyi| uy|i v|o o|i g|rra|aku| ab| es|abe|aik|oro|enr| eh|eha|o a|a l|we |n u|i o|okh",
      gaa: "mɔ | ni|ni |kɛ | ak|lɛ |ɛ a|ɛ m| mɔ|akɛ| ko| he|gbɛ|i a|ɛɛ | lɛ|ɔ n|ɛ e|ko |aa |bɛ |yɛ |i e| kɛ|ɔ k| yɛ|li |ɛ h| ml|egb|oo |fɛɛ| fɛ|shi|aŋ |heg|mli|ɔɔ |a a| es| gb|i n|loo|ɛ n|maŋ| ma|ɛ k|i k| nɔ|ɔ y|nɔ |ɔ f| al|he |esa| sh|alo| ek|ɔ m|ii |amɔ| eh| en|emɔ|ji |naa|bɔ |e n|fee|o a|oni|kon|o n|ee | hu|o e| bɔ|i m|hi | am|ɔ l|hu |tsu|umɔ|ɛi |aaa|na |nii|sum|sa |ɔmɔ|ena|i y|ɛji|nɛɛ| nɛ|ɛ g|baa|eem|ɔ e|a l|kwɛ|yɔɔ|eɔ |amɛ|tsɔ| sa|ana| ts|saa|kɛj|ɔ a|ehe|a m|toi|eli|yel|aji|i l| ah|mɛi| at|e e|gba|a n| an|ane|hiɛ| na|eko|eye| ey|o h|kom|mla| kr| ej| as|ŋ n|san| ay|i s|nit|ash|ekɛ|ha |e k|ne | hi|i h|ɛ t|esh|efe|iɔ |its|iaŋ|ku |o k|ats|kpa| kp|ome|gbɔ|ets| ab|ɔ b|ɛ b|ye | et|a e|shw|oko|a k| bɛ|ɔ h|ɛ y| af| ku|sɛ |tsɛ|ŋ h|uɔ |ŋŋ | to|ŋmɛ|ɛ s| mɛ|oi |mɔɔ|aye|hwe| ef|la |ehi|rok|kro| ji|ŋ k|o m|aka|akw|o y| lo|o s|jɛ | ny|e a|ŋmɔ| ba|bii|aan|ŋts|ɛŋt|iɛŋ|diɛ| di|ai |u k|o l|ŋ m| eb|ɔ s|aha|nyɔ|i j|a h|ɛ l|wɛ |usu| aw| ja|suɔ|eni|i f|agb| ag|bɔm|sem|bua|any|ɛ d|i b|maj|mɛb|a s|eŋm|awo|e b|afe|hik| yi|u e|e s|ish|nak|anɔ|hey|ŋ a|o g|jam|u m|o b|aŋm| yɔ|bɛi|yeɔ| su|nyɛ|hew|me |ɔ g|ɔse| ee|ilɛ|hil|ihi|hih|las|̃la|ãl|bã| ŋm|nyo|te |esu|kai|ate|ŋma|eee|ɛmɔ|ɛia| eg|alɛ|jia|ɔŋ |ala|wal|hiɔ|ɛ f|his",
      ndo: "na |oku| na|wa |a o|a n| om| uu| ok|e o|ong|ka |uth|mba| ne|ntu|ba |tu |omu|nge|he |a u|the|uut|emb|hem|o o|o n|ehe|unt|e n|a w|nga|kal| wo| ke|ang| iy|lon|mun|no |lo |la |o i|ku | no|oka|keh|ulu|u n|we |shi|a m|ala|ko |ga |a k|ge |eng|nen|u k|ilo|osh|ngo|han|a y|elo|gwa|ngu|ye |li |ano|hil| mo|gul|ana|luk|a e|tha|dhi|uka| pa|lwa|go |ath|ho |man|kwa|ta |oma| sh|a p|wan|thi|uko| ko|wok| ta|ha |mwe|ya |wo |e p| yo|gel|a i|e m| os|nka|ika|uun|hi | ka|o g|sho|ema| li|kuk|iya|o w|i n|ith|and|men|ame|gam|ele|pan|opa|ash|ndj|po |hik|yom| po|le |ing|alo| el|olo|sha|kul|nok|ilw|kug|o k|a a|adh|aka|lat|aa |pam| ye|kan|iyo|mbo| we|kut|nin|e e|umb|onk|ndu| go|ike|ond|non|gan|omo|una|a s| e |mon| ga|ela|und|waa| ng|yok|ne |ulo|amw|oye| oy|aan|a l|iil|okw|eta| a |wen| ku|i k| gw|aku|igw|ila|a t| nd|ina|yuu|ene|ke | on| dh|iye|mo |pau|bo |him|lyo|o s|ula|wat|ota|yon|e t|eko|yaa|o e| me|a g|yop|e g|lun|alu|ngw|omb|ane| th|yi |o y| ii|nom|ili|dho|ono|mok|uga|vet|eho|ome|kun|iyu|i m|ali|epa| ni|lwe|opo|lok|oko|hok|i o|lol|djo|ung|oon|i t| yi|alw| ot|ukw|uuk|uki|egu|mii|o m| wu| mb|awa|naw|edh|ani|kat|nwa|enw|e k|taa|ont|a h|u t|lel|uni|ndo|wom| mw|she|ola|pwa|dyo|ndy|nem|ndi|yeh|aye|fut|nek|udh|omi"
    },
    Cyrillic: {
      rus: " пр| и |рав| на|пра|ств|го |ени|во |ове| ка|на |ть | по|ия |о н| об|ет | в |сво| св|аво|ани|ост|ого|ый |ажд|лов|т п| им|ния| че| со|ело|име| не|льн|ли |чел|каж|ест|век|ать|ова|или| ра|ек |й ч|дый|жды| до|ие |еет|мее|но | ил|ии |ся |его|обо|и п|ние|к и| бы|и с|и и|ми |бод|воб|ван| за|ой |ых |ом |лен|аци|енн|о с|о п|ьно|тва|тво|при|ног|аль|ако|ва |и н|сти|ных|то |бра|олж|дол|сто|и в|ным|ое | ег|нов|их |ель|тел|ти |нос|не |пол|раз| вс|и о| ли|и р|ыть|быт|вле|ред|ию |тор| ос|ься|тьс|оди|щес|я и|как|про|жен|ым |пре|а с|сно|е д|нно|о и|ий | ко|о в| ни| де|сту|лжн|сов|е в|ном|оль|ран|оже|иче|ей |аст|нны| от|туп|м и|одн|зов|рес| мо|осу|ля |осн|а о|вен| то|о б|шен|тве|общ|а и|е м|ьны|обр|вер|чен|я н|жно|чес|ак |лич|нии|е и|все|бще|ват|есп|мож|й и|ное|о д|бес| во|я в|ду | ст|дно|она|нац|ден|ежд|х и| бе|и д|ны |дос|для| дл| та|льс|ате|ции|я п|ую |ите|е о|ной|под|ото|стр|ста| ме|ели| ре|я к|тоя|ами|ен |ь в|ю и|азо|гос|м п|ь п|т б|жет|уча|суд|ьст|дст|щит|ащи|защ|кон|нию|ам |оду|ере|гра|печ|о о|оро|кот|и к|тра|ник|уще|циа|оци|соц|нал|еск|о р|ког|дру| др|ни |ава|нст|ем |авн|ыми|едс|дин|дов| го| вы|в к|ые |обе|му |я е|слу|уда|так|кой|ту |иту|зак|ход|вол|раб|кто|икт|ичн|нич|от |ина| к |тер|род|нар",
      ukr: "на | пр|пра| і |рав| на| по|ня |ння| за|ого|ти |во |го | ко|аво| ма|люд|о н| не| лю|юди|ожн|кож|льн|жна|дин|ати|ає |их |ина|пов|сво| св|анн|є п|має|або|а л| бу|не |енн|бо | аб|а м|ови|ні | ви| ос|аці|вин| та|без|обо| ві| як|ере| до|і п|ува|о п|аль|них|ом |ми |іль|ног|та |ий |при|ою |ть |ста| об|ван|инн|ті |ост| у |ся |ват|бут|ист| мо|езп|ути|нов|пер|ії |и п|бод|воб|ств| в |о в|від| бе|ако|під|тис|кон|но |ва |нні|і с|а п|сті| сп|ний|ду |ьно|она| ін|дно|ним|ій |а з|ну |мож|її | її|ля |соб|му |ої |яко| пе| ра|ід | де|і в|и і|чин|вно|ому|ном|у п|і н|а с| су|а о|нен|ися|ово|нан|одн|у в|і д|ава|ідн|рів| рі|і р|ими|віл|им |ції|о д|а в|сту|оду|буд|ова| пі| ні|я н|е п|нац|и с|нна| од| ро|нос|ьни|ють|и з|ки |і з|а б|спр|чен|же |оже|е м|овн|рим|е б|то |ніх|осо|удь|ві | ре| ст|рац|до | со|роз|лен|вни|івн|род| вс|спі|ков|зпе|ів |для| дл|ї о|хис|ахи|зах|‐як|ь‐я|дь‐|я і|так|зна|заб|сть|ту |ною|а н|тор|сно|о с|жен|ціа|оці|соц|інш|і м|кла|и в|тер| ді|іст|ові|у с|я в|аро|сі |віт|сві|осв|роб|піл|рес|за |печ|абе|ку |лив|ерж|дер|в і|авн|тав|ав |ами|ком|вле|о б|ь п| що|їх |тво|хто|іхт|ког| кр|ано|тан|іал|нал|нь |х п|жно|леж|але|про|тва|рат|о о|х в|нар|льс|цій|кор|час|ржа|ї с|ину|дст|о з|раз|мін|а р|зак",
      bos: " пр| и |рав|на |ма |пра| на|има| св|а с|да |а п|во |је |ко |ако|о и| по|аво|е с|а и|ти | им| да| у |сва|но | за|о н|ва |и п|или|вак|ли | ко|не | ил|кој| не| др|ост| сл|ња |им |и с|у с|и и|ава|ије|а у| би|ств|се |вањ|а д|ом |јед|бод|обо|лоб|сло| се| ра|их |сти|а н|ње | об| је|при|дру|у и|ју |о д|ити|вој|раз|ање|ова|дје| ос|е и|ло |е п|ања|ује|и д|бра|тре| тр| су|у з|а к|ог |у п|оје|циј|реб|а о|а б| ње|и у|миј|ни |нос|ба |едн|сво|њег| из|про|е д|жав|бит| ни|и о|ста|а з|авн|вје| ка|бил|ово|а ј|ају|ист|и н|них|јел|ту |ред|гов| од|е о|оји| см|ја |о к|ило|аци|е у|пре|о п|еба|у о|су |вим|ичн| са| дј|а т|ија|шти|чно|ржа|држ|сту|дна|одн|ени|за |ива|ном|ем |ду |ран|вно|сми|јер|е б|е н|де |пос|м и| до|у д|нак|а р|обр| мо|ним|его| кр|тит|кри|ве |ан |ико|ник|ну |и м|ног|ено|сно|е к|туп|руг|ка |ода|рив|вољ|алн|м с|иту|ашт|заш|ани|сам| ст|акв|ови|осн|род|аро| ми|ји |тва|дно|нст|ак |ите|љу |вич|рад|у н|у м| та|дст|тив|нац|рим|кон|ку |њу |оду|жив|амо|тво|тељ|под|ећу|г п|нов|ина|нар| вј|и б|ој | ов|аве|ву |анс|оја|зов|азо|уде|буд| бу|е т|и в|ења|еди|ниц|нап|мје| ис|слу|едс|о о|зак|и к|м п|тно|иво|ере|нич|как|ада|вни|уги| ро|мов|вен|о с|то |те | вр| бе|ара|кла| бр|у б|у у|и т|она| он|ави|јал|дни| ск",
      srp: " пр| и |рав|на |пра| на|ма | св|има|да |а п|во |ко |ти |аво| по|а и|ако|а с| за| у |о и| им|и п|ва |сва|вак| да|о н|е с|ост| ко|ња |ли |или|не |ом | не|а н| сл| ил|је | др|и с|но |кој|у с|ава| ра|ог |сло|ју |им |сти|бод|обо|лоб|ити|а о|ств|и у|а д|ни |јед|у п|при|едн| би|и и|а к|о д|ста|их |дру|а у| је|ања| ос| ни|нос|про|ају|и о| де| су|у и|се |ње |ја |ова|и д|циј| об|ује|ред|жав|е и|е п|а ј|дна| се| од|ве | ка|ени|ржа|држ|а з|авн|ења|аци|вој|ово|у у|м и|оја|вањ| из|ија|у з|ање|ран|е о|род|и н|е б|раз|за | ње|гов|ичн| ст|нов|сно|осн|ду |пре| тр|су |ву |одн|а б|сво|њег|ним|них|ту |тит|шти|ку |ном|бит|е д|ме |ико|чно|оји|ло |вно|ник|ика|без|ара|де |у о|вим|нак| са|рив|аве|ан |вољ| кр|о п|сме|е к|ног|ји | ов|е у|тва|бра|руг|реб|тре|у д|ода| мо| вр|ављ|у н|его|дел|м с|кри|о к|ашт|заш|њу | см|ани| ли|дно|еђу|алн|ла |акв|ој |ком|сту|уги|ави|а р|ка |рад|оди|вич|тав|иту|уде|буд| бу|пот|оду|жив|ере|тво|ило|бил|аро|е н|ови|пор|ено|штв|нац|ове|м п|туп|пос|рем|дни|ба |нст|а т|оју|аст|ива|е м|вре|вља|ну |беђ|ист|ен |те |дст|рот|зак|ао |као|и к|јућ|о с|ст |сам|м н|тер|нар| ме|и м|кол|е р|ушт|руш|вер|как| бе|и б|кла|ада|еба|ена|она| он|тву|анс| до|рак|слу|и в|ниц|у к|мен|врш|еме|едс|иви|о о|јав",
      uzn: "ан |лар|га |ир | би|ар | ва|да |ига| ҳу|ва |бир|уқу|қуқ|ҳуқ| ҳа|р б|ган|иш |ида| та|а э|ини|ади|нг |дир|иши|лик|лиш|ий |или|ари|уқи|ҳар|лан|инг|ши |дан|нин|инс|кин|сон|нсо| ин| му|қиг| ма|он |р и| бў|эга| эг| ўз|ни |бўл|гад|и б|ки |ила|ёки| ёк|а б|н б|ин |р ҳ|ала|эрк| эр|лга| қа|рки|ш ҳ|и ҳ|н м| бо| ба|ик |ара|иги|лиг|ри |қил|а т|бил| эт|ниш|нли|кла|и в|бош|эти|ани|им |и м|оли|қла|а ҳ|лаш|атл|тил|а қ| ол|оси|мас|қар|инл|лат| қи|таъ|ҳам|ги |иб |мла|ўз |н э|мум| да| бу|ат |ш в|ун |ати|мки|умк|тла|иро|ўли|бар|ири|риш|ият|али| бе| қо|а ш|аро| ке|и т|рла| те|ча |рча|арч|а ў| шу|тиш|н ҳ|тга| са|аси| ха|рак|лин|ола|имо|шқа|ли | ту|амл|лла|сид|н ў| ас|нид|а и| ки|н т|нда|к б|ера|ошқ|сиз|ор |а м|р в|енг|тен|мат|мда|амд|лим|й т|ят |и а|ино|илг| то|тни|ана|ас |эма| эм|а ё| ша|аш |а а|тар|кат|ака|ак | де|аза|илл|сий| си| со|уқл|н қ|ода|ъли|аъл|ник|ада| ни|тда|гин|уни|сит|ай |қон|н о| жа|ким|еч |ҳеч| ҳе|ўзи|лак|кер|икл|лли|ур |зар|шла|риг|ирл|дам|коҳ|ико|а д|ам |н в|рти|тиб|тал| иш|чун|учу| уч|сла|а у|рин|сос|асо| ун|на | ка|муҳ|диг|ч к|асл|лма|ра |бу |хал|ўлг|и к|екл|р д|қат|ага|и қ|оий|мил| ми|қа |и с|жин| жи|син|рор|а в|лад|а о|тли|мия|н и|аб |тир|з м|дав|рга|аги|а к|нла|ақт|вақ|арт|аёт|лаб",
      azj: " вә|вә |әр |ир | һә| би| һү| ол|үгу|һүг|гуг|на |ин |лар|һәр|дә | шә|бир|ләр|лик|мал|р б|лма|р һ| тә|әхс|шәх|ән |дир|угу|уна|ан |али|а м| ма|икд|ини|р ш|дән|ар |илә|гун|аг |асы| ја|мәк|јәт| мә| мү|кди|әси|әк |илм|нин|ндә|олм|әти|ә ј|син|хс |нда|лмә|јјә|и в| га| аз|олу|ијј|ја |инд|зад|гла|үн |ни |лә |тин|н м|аза|ары|әт |н т|маг|лун|лыг|ә б|ун |нун|г в|н һ|дан|ын | ет|тмә|әрә| өз|да |ә в| он|ә а|ына|ыны|бил|а б|сы |ил |әми|ара|си | ди|ә м|әри|рлә| ва|ә һ|етм|ығы|ама|длы|адл|рин|бәр|рын|н и|мүд|нын| һе|мас|ик |н а|дил|алы|ирл|әлә|үда|сын|ынд|хси|ли |ә д|нә | бә|әја| ин|ә и|ләт| сә|ны | иш|аны|еч |һеч|г һ|ејн|ә е|дыр| да|аси|ры |иш |ифа|лығ|и с|фиә|афи|даф| ед|мәз|у в|кил| һа|ола|н в|әни|ыр |уг |унм| бу| ас|сиа|оси|сос|или|ыды|лыд|нма|ыг |инә|әра|сил|хил|ахи|дах|адә|ман|а һ|ә о|ону|а г|әз | ки|сеч| се|ы һ|мин|лан|әдә|бу |раг|лы |ылы|ал |ә г|р в|нла|һси|әһс|тәһ|өз |ист| ис|мәс| әс|ина|ә т|әтл|а в|иә |н б|тәр| та| ҹә|еди|ала|ким|гу |и т|улм|мәһ|н о|аја|ы о|иал| со|илл|сиј| дә|вар|инс|ми |ғы |ник|р и|агл|к һ|тәм|там|чүн|үчү| үч|ғын|сас|әса|з һ|әмә|зам| за|сти|рәф|н е|р а|илд|һәм|ыгл|јан|мај|н ә|мән|мил| ми|әги|дин|н д|түн| дө|миј|каһ|ика| ни|фад|тиф|л о|сәр|јни| еј|ана|лән|ам |рил|ајә|ашы",
      koi: "ны |ӧн | бы|да | пр|лӧн|рав| мо|пра| да|быд| ве|орт|лӧ |ӧй |мор|ӧм |аво| не|во |ыд |ыс |нӧй|ын |м п|д м|ыны|тны| ас|тӧм|льн| эм|вер|сь |ьнӧ|эм |н э|тлӧ| кы|сӧ | по|ерм|сьӧ|ртл|аль| кӧ|эз | ӧт|ӧ в|то |ето|нет|ылӧ| ко|тшӧ| от| и |ы с|бы |ӧ б|ств|кӧр| вӧ|шӧм|кыт|та |на |з в| се| до|вол|ӧс | сы|ы а|ола|рмӧ|ас |оз | оз| сі|а с|тво|с о| вы|ліс|ӧ к|ытш|ӧ д|ис |ісь|ӧтн|ась| ол| на|аци| эт|а в|злӧ|сет| во| чу|лас|лан|мӧ |тыс|рты|ӧрт|ы п|ӧтл|о с|эта|дз |кӧт|ӧдн|вны| мы|н н|удж| уд|выл|ӧ м|рті|орй|ись| со|воэ|ыдӧ|й о|кол| го|с с|сси|сыл|ысл|йын|кин|олӧ|тӧн| сь|ана|ӧр |ция|а д|ӧмӧ| ви|з к| эз|ы б|тӧг|ӧт |мӧд|ест|ост|ӧны|тир|оти|укӧ|чук|н п|онд|пон|слӧ|кер| ке| об|сис|суд|а н|дор|кон|нек|н б|лӧт|с в|ті |ьӧр|тра| ст|нал|она|нац|н к|кӧд|ӧг |скӧ|ть |етӧ|дӧс|быт|рны|ӧ н|тсӧ|рре|а б|нда|с д|асс|ы к|асл| ло|ьны|сьн|ы м|еки|ы д| мӧ|ь м|ы н|ытӧ| ме|рйӧ|иал|й д|итӧ|а к|ӧсь|мӧс|овн|зын|а п|отс| ли|оля|ӧ а|осу|ӧя |нӧя|езл|рез|мед|с м| сэ|ь к|рйы|ако|зак| за|ьын|ннё|мӧл|умӧ| ум|ы у|н в|м д|н с| дз|н о|ран|стр|озь|поз|з п|о д|циа|оци|соц|ион|а м|еск|чес|нӧ |з д|тсь|бӧр| бӧ| ов|вес|кыд|ӧ с|воы|код|тко|ӧтк|оль|дбы|едб|сьы|чын|тчы|ӧтч|тла|мӧн|сла|йӧз| йӧ|т в|ы и|ез |о в|оны|йӧ |анн|ӧль| пы|ан |нӧс|нит| су|м с",
      bel: " пр|пра| і |ава|на |рав| на| па|ны |ва |або|ць | аб|ае | ма|аве|анн|ацы|сва| св|е п|льн| ча|не |ння|ала|а н|ай |лав|чал| ко| ад| не|га |ожн|кож|век|ня | як|жны|ы ч|мае|а п|ага|бо |ек |а а|ца |цца| ў | за|ых |пав|а с|го |він|дна|бод|мі |ваб|ван|ам | вы| са| да|ста|аві|нне|асц|най|цыя|наг|ара|і н|к м|яго| яг|ьна|пры|аць|і п|одн|ств|ама|ных| бы|тва|дзе|аль| ра|ні |і с|і а|ыць|а б|енн|лен|ці |оўн|ым |рац|інн|іх | ас| та|то |нас|які| дз|чын|оль|і д|аво|ад | ні|сці|ымі|ным|быц|я п|ьны|ыя |аро|ана|іна|і і|рад| гр|ля |ўле|о п|а ў|рым|пад|ыі | ін|амі|дзя|рам|цыі|аба|а і|ду |жна|ўна|нал|нац|ры |эта|гэт| гэ|нен|да |ах |гра|кац|ука|а з|кі |адс|ў і|нст|энн|я а|нні|оду|а р|нна|ход|нан|пер|х п| у |адз|і р|мад|м п|е м|аду|дст|для| дл|оў |нае|і м|ако| ка|ы ў|бар|е а|ацц|ую |ыцц|сам|яўл|але|род|раб| пе|што| ўс|адн| су|роў| ро|дук|люб|ь с| шл|раз|нав|зна|вол|удз|ада|жыц|чна|ве |а т|асн|сац|ера| рэ|яко|кла|аны| шт|ь у|аюц|нар| ус|соб|асо|пам|я ў|авя|чэн|воў|так|ну |ю а|ь п|зак|кар|е і|ь а|бес|ія |кія|х і|заб|аса|ім |жав|і з|леж|тан|ахо|яль|ыял|о с|яна|кан|ака|інш|алі|вы | мо|нах|я я|м н|ога| бе|й д|о а| ст|ены|і ў|а д|есп|шлю|цця|ы і|ыст|рыс|люч|клю|тац|уль|ынс|ачы|спр| сп|аў |ыма|ары|кам|е ў|і к|кон",
      bul: " на|на | пр|то | и |рав|да | да|пра|ств|ва |а с|а п|во |но |ите|та |о и|ени| за|не | не|а н| вс|ван|аво|ото|е н|о н|а и|ки |ие |те |ни |има| им|ли |или|ия | по|ове|ане|чов|ма | чо|и ч|а д|ние|и д|ест| ил|ани|век|все| об|ек |еки|сек|ава|тво|сво| св|вот|а в|и с|ост| ра|ова|а о|е и|ват|и н|е п|к и|а б| в |и п|лно|о д| се|раз|ето|ъде|бъд| бъ|при|ата| ко| тр| ос| съ|бод|обо|воб|ат |за |тел| е |аци|о с|де |о п|ен |бра|и в| от|се |ния|алн| де|его|нег| из|от |ран|ята|как|оди|е с|и и|ден|пре|бва|ябв|ряб|тря|нит| ка|ява|про|ст |а з|гов|вен|тве|о о|а р|акв|о в|и з|ред|нос|ият|е д|щес|нов| ни|ция| до|йст|о т|е т|ржа|ърж|дър|ено|пол| с |обр|тва|нот|рес|ейс|и о|е в|кой|общ|лен|она|нац|иче|ез |без| бе|ежд|ува|вит|ри |зак|и к| ли|а е|под|ели|ник|си |е о|а т|авн|и р|т с|ка |оет|елн|нен|ой |гра|жен|дру| ре|а к|сно|осн|лич|зи | та|са |нст|вни|чки|ичк|сич|вси|люч|клю|дно| мо|еме|а у|изв|тви|дей|я н|кри|ато|о р|й н|ико|ичн|жав| дъ| то|бще|иал| со|лит|т н| си|т и|одн|жда|зов|азо|уча| гр|кое|тъп|стъ|вол|лни|сре| ср|ква|кон|тно|ака|и у|ко |ган|ода|чен|лст|елс|стр| къ|ста|род|нар|и м|нал|руг| др|чес|въз|ди | са| те|сто|дос|раж|рез|чре|гат|еоб|а м|о е|ине|аст|ово|чно|аве|му | му|ано|ита|ими|ако|нак|лаг|ови",
      kaz: "не | құ|ен |ұқы| ба| қа|құқ|ық |ға | жә|әне|жән| не| бо|де |дам|ада|а қ|тар|ына| ад|ылы| әр|ың |ан |ін |қыл|ар |еме|на |р а|лық|уға|ала|ықт| өз|мес|әр | жа|мен|ығы|лы | де|қта|ның|н қ|ған|іне|бас|ары| ме| қо|еке|ын |да |е қ|ды |асы|се |есе|ам |бол|анд|нем| бі|ара|ы б|ста|тан|нды|н б|ің |е б|ілі|тиі| ти|бар|ғы |нде|етт|иіс|қығ|іс |лар|ге |ы т|інд|ік |бір| бе| ке|алу|е а|алы|луы|а ж|ері|олы| те|қық|н к| та|н ж|ғын|тті|іні|тын| ер|нда|ім | са|е ж|аты| ар|рға|еті|ана|ы ә|уын|лға|өзі|ост|егі|тік|қа |сқа|рын|кін|луғ|ң қ|нің|уы |бос|асқ|қар|дық|нан|мыс|мны|амн|ы м|айд|ке | же|зін|рде|рін|е т|ген|ып |ры |ті |сын|қам|ден|і б|гіз|рал|е ө|лан|сы |ама|тта|тық|бер|ді |біл|ркі|өз |зде|кет|қор|дай|уге|ы е|ынд|нег|оны|ей |мет|аны|а т|жас|ауы|лге|аса|еге|дар|ру |ау |ерк|ы ж|рыл| то|н н|е н|тін|ір |сіз|тер|лма|і т|кім| ал|р м|лік| мү|е м|түр| тү|кел|лып|ең |тең|рлы|лім|рды|ард|атт|с б|ыры|сыз|ыс |елг|дал|йда|орғ|рқы|арқ| жү|тал|ылм|а б|ігі|лде|із |қты| еш|дей|ай |жағ|кті|ікт|гін| әл|тты|ұлт| ұл|е д|ыны|лін|р б|еле|кұқ| кұ|амд|м б| ет|оға|құр| кө|аға|тол|шін|айы| қы|қал|жек|і н|ес |ағы|е о|елі| ел|н е|зі |шкі|ешк|олу|ция|мас|ғда|ағд|лтт|імд|ным| да|а д|әсі|с ә|қат|ірі| со|ң б|аза|мда|айл| ас|ғам|қоғ",
      tat: " һә|лар|га |кук|оку|хок| хо|әм |рга|һәм| ке| бе|ар |еше|әр |ан |кеш|ләр|гә | ба|ең |нең| бу|кла|ргә|ырг|һәр| ти| то|р к|да |ене|бер|ән |дә | үз|а т|тор|ен | ка|нә | ал|ы б|на |ган|ара|ире|бул| дә|бар|енә|укл|тие|а х| ит|иеш|ары|кы |ка |ә т|н б|укы| ир|екл|еле|ына|ше |ала|н т|лык|ле |шен|еш |кар|лы |лан|лән|рын|ә к|елә|ерг|нда|рек|тел|ез |ите|а к|бел| та|лыр|ә б|ын | га|ел |сә | як|алы|әрг|а б|яис| яи|тә |дан|а а|үз |ә х|ш т|е б|ынд|сез|клә|исә|р б|улы| эш|чен|а һ|ем | са|н и|шка|тен|үзе|ы һ|әт |ять|гез|иге|аны|ә һ|орм| тү| ха| тә| ни|р һ| ту|мәт|кле|үлә|лу |ть |м а|лга|штә| ки|м и| мә|не |лек|мыш|рмы|гел|түг|лер|ди |зен|уга|сен|гән|акы|клы|ләт|алу|ны |ешт|веш|әве|рәв| рә|тәр|рлә|үге|а я|ль |рен|баш|ә д|ә и|илл|ер |р а|циа|оци|соц|айл|рдә| аш|рак|рда|ард|рне|әрн|якл|лә | җә|н м|ың |ның|кка|әре|орг|тан|мас|сын|нди|инд|нин|рел| би|ык |лем|аль|ни |ин |кер|м т|әүл|шла|н я|тын|ндә| оч|бу |кон|а д|арт|кем|рке|ылы|кта|кә | ил|р и|ерә| җи|ң т|ция|а и|ашк| сә| ди|асы|ый |мил| ми| мө|та |л һ|нна|гын|иал| со|змә|езм|хез| хе|ыят|гыя|мгы|шыр|ә я|ерл|нлы|ере| кы|ек |уры|тыр|н х|елү|ако|зак| за|итә| да|чар|ныр| ко| ан|иле|әсе|ыш |аци| де|аер| ае|ану|ина|ә с| тө|әте|ана|н һ|бир|нан|ры |йла|ә а|әлә",
      tuk: " би| ве|ве |да |лар|ир |бир| хе|ада|р б| ха|ер | ад|га |или|дыр|дам|ен |ыр |ара|ары|хер|лан|р а|ыды|р х|ам |кла|ага|ала|нда|бил|хак|клы|акл|лыд|лы | бо| өз|ың |ан |‐да|лен|ыны|маг|не |лер|ин |я‐д| я‐|ине|на | эд|а х|ына|ынд|дан|уку|хук| ху|ны |лма|е х|иле|ери| де|ге |иң |ли |атл|алы|ар |ден|ере| ба|дил|лиг| га|асы|лик|лыг|а г|кин|бол|кук|өз |е а|ама|де |эрк|рын| эр| хи|ини|гын|иги|айы|а д| ма|мак|п б|аны|эди|ни |ыгы|баш|лык|йда|рки|әге|ети|ич |хич| та|ак |шга|ашг|сын|мал| до|гда|ы б|ры |ги |мәг| җе|ыет|сас|эса| эс|лме|илм|мез|ип |ыкл|тлы|н э|дак|дай|ягд| яг|укл|хем|гал|ы в|чин|им |мек|рил|ян |рин| се|ал |ән |йән|ның|а б|дир|ола| ка|нде|ы д|сы |лин|е д|гин|зат|а в|екл|кы |акы|н м|кан|ылы| са| дә|хал|дол|чил| гө|тме| ге|н х|а а|айд|дең| ал|лет| дө| иш|н г|е б|уң | гу|дәл| го|ири|ик | он|ң д|сер|лип|ели| со|илл| ди|аза| аз|гар|и в|лим|ник|е в|еле|нли|үчи| үч|нме|з х|рап|тар|нуң|ону|мел|е г|кда|сиз|кле|ыз |сыз|ниң|дал|а я|циа|оци|соц|а с|мил| ми|кли|олм|и б| бе|н б|ра | дү|ең |еси|этм| эт|ы ө|ика| ни| ар|е м|дөв|ет |к э|тал|н а|гы |ез |инм|ып |олы|ора|гор|ч б|нун|ану|м х|алм|лйә| ки|ек |н я|анд|үни|рет|тла|гат|айл|ция|н д|ң х| ме|гые|мгы|емг|җем|ете|аха|мах|тле|тиң|а э|ң э|лам|пла|н в",
      tgk: "ар | ҳа| ба|ад | да| ва|он | та|ва | ин|ба | до|дар|ти |аро|дор| ки|ои | як|д ҳ| бо|бар|ҳар|як |ора|ки | на|нсо|инс| ма|сон|и м|р я|и о|ҳақ|рад|аи |к и|уқу|ард|и ҳ|қ д|ин |ни | му| аз|ии | ҳу| ша|аз |ҳои|ақ |яд |она| ка|и д| ё |и б|ояд|дан|анд|қуқ|ҳуқ|зод|озо| оз|ият|д б|а б|нд |да |ди |н б|амо| ху|уда|оди|гар|дон|и и|ат |моя|нам|и с|ст |ҳам|н ҳ|рда|худ|ан |боя|ода|ава|и т|оша|бош|қи |и х|а ш|аст|ӣ в|мил| ди| он| ме|шав|они|е к|ила|шад|имо|и н|оба|оми|кор|д к|кар|рои|ри |вад|уд |ро |ӣ ё|оти| бе|ани|яти|таҳ|мин|н д|ят |та |на |ати|оси|бо |и а|роб|а ҳ|таъ|и ҷ|а м|д а|р к|и ӯ|а в|лат|ист| фа|и к|шуд|р ҳ| ас|ида|ига| со|а д|ара|иҳо|д в|одо|н м|т б| ӯ |т ҳ|ама|тар|ор |фи | са|вар| шу|лӣ | ми|ли |рон|диг|ҳо |и ш|дав|бот| ҳи|иро|уна| ни|кас|еҷ |а т|або| ақ|нҳо|раф|мон|н в|авр|ино| ко| су| ҷа|оҳ | ҳе|д т|маҳ|сти|сар|а о|д д|диҳ|р а|уни|р б|уқ |а а|ми | во|н и|р в|тав|ори|н н|мум|ари|яи |ояи| қо| эъ|ҳеҷ|рии|дӣ |рдо|оли| ис|уди|р д|асо|фар|киш|ӣ ҳ|наи|даа|лом| иҷ|ран|ахс|шта|р м|ӣ б|ита|сит|вос|у о|о д|аҳр|нти|инт|ифо|тиф|ибо|тҳо|қу |а к|ир |рра|рат|ҳим|ону|қон|зди|ун |офи|и қ|нда|ла | гу|наб|гон|а н|қар|оят|шва|ишв|лал|ия |мия|ами|тим|ҷти|иҷт|сӣ | за|ошт|янд|оян|атҳ|а и|аъл|ник|ққи|аққ|ихо",
      kir: " жа|на |ана| би|жан|бир|уку|га | ук|ар |уу | ка|кук|укт|луу|ууг|тар|уга| ад|ан |ен |ык | ар|ада|ир |дам|олу|ган| бо|ам |р б| же| ме|туу|ын |ара|бол|мен|кту| ба|анд|нен|ене|ары|ына|р а|нда|н к|ин |үн |н б| өз|эрк| ко|а ж| ал| эр|да |кта|же | та|аны|а т|рки|а у|дык|ард|а к|кин|инд|иш |тий| ти|ийи|н ж|үү |гө |н а|ала|н э|алы|ук |или|н т|йиш|кыл|лар|рды|алу|нди|тер| ма|үгө|у а|кар|нын| кы|а а|баш|бар|лга|им |ун | эм| ээ|лык| ту|а б|а э| ан|нан|өз |тур|рүү|дай|алд|улу| са|рын|дар|тта|үүг|етт|рга| ки|кан|иги|н у|күн|ка |нды|у б| бе|м а|үчү|мес|эме|ры |дик|р м|ушу| мү| со|к ж|тук|үнө|не |ине|алг|кам|түү|үнү|эч |еке|ке |ес | эч|өзү|гин|икт|еги|лды|ө ж|ери|к м|уп |лим|бил|атт|кет|у м|чүн|тал|угу| ке|руу|к т|лук|ч к|е к|ээ |кте|у ж| де|ул | не|шка|дин| ди| тү|мда|амд|гон| иш|ы м|кал|к к| то|кор|рде|ыз |сыз|рго|орг|ай |уну| эл|е а|нүн|айд|зүн|ыгы|ге |ция|раб|ыкт|гиз|нег|ашк|ылу|е б|рин| те|ик |он |мкү|ү ж|ү ү|оо |н м|нуу|тык|ашт|уна|ей |дей|ирд|абы| мы|м ө|ерд|лоо|мсы|н н|ект|дыр|диг|акт|мак|ага|е э|лан|аци|тан|айы|циа|оци|соц|иле|рал|ынд|де |коо|ник|аты| өл|лго|олг|рди|амс|үмк|мүм|өсү|мду|н и|ш ж| үч|шты|гун|зги|бер|өн | бу|бын|сал|ким|у э|н с|өнү|ктө|а ө|дыг|ды |з к| кө|дан|ылы|рма| ай|иал",
      mkd: " на|на | пр| и |во | се|рав|пра|та |а с| не|то |да | да|а п|ува|ите|те |о н|ва |а н|ој |кој|и с|но |а и|ата|аво| им|еко|ма | за| со|ств|ни |има|от |ње | во| по|ли |ја |а д|ост|сек|е н|ова|се |или| ил|о с|е п|а о|ање|и п| сл|ат |е и|вањ|ија|о д|ото|ен |о и|сло|ред|и д|обо|при| од|бод|лоб|ј и|и н|вот|ста|ст |и и|его|нег| би|а в|нос| ра| ќе|гов|пре| ни| ко|т и| об|е с|ава|акв|ќе |бид| де| др|со |тво|ват|ако|аци|што|раз|едн|аат|про|бра|иде|ани|а з|а б|как|циј|ест|де | е |а е| шт| ка|е б|одн|од |и о|нит|т с|ј н|ран|е д|и з|ено|ди |кон|ени| ед| си|еме|сно|осн| ос|тит|ови|јат|о п|вен|лно|алн| ја|ед |дру|ваа|сто|дна|за |нот|дно|е о| до|ви |ове|еди|држ|о в|ние|нов|чно|ник|жив|ето|а к|иот| ст|нац|ели|вни|д н|без|ара|о о|и в|т н|руг|ден|дни|сит|обр|а р|луч|а г| вр|не |пор|шти|ичн|чув|ка |авн|тве|ко | бе| оп|бот|або|раб|а м|цел| це|тен|ело|олн|дел|нув|е в|ита|ашт|заш|кри|род|нио|т п|зем|ема|нем|оја|ез |им | ов|оди|пшт|опш|он |ие |нст|нак|аѓа|ште|чов| чо|ван|зов|азо|кот|слу|жав|ржа| из|о к|рем|ист|ење|вол|оре|ги |н и| то|ти |ико|ода| жи|лас|аро| ме| зе|ло |бед|лит| ре|ипа|рип|еде|о ќ|ово| мо|нап|т д|вре|јст|ејс|ора|иви|рив|ри |зво|век|лни|кво|вно| сп|о е|ква|н н|жен|дат|нет|ине|иво|под|али|ика",
      khk: " эр|эрх| хү|н б|эй |тэй|х э| бо|ах | бү|ний|ан |ийг|йн |хүн|бол| ба|эн |оло|ийн|уул|й х| ха|бүр|эх |бай| бу|гаа|рхт|хтэ|гүй|рх |үр |үн |аар|йг |ар |лах|он | хэ|ий |аа | за|н х|й б| ор|өлө|лэх|үй |лөө|ула| ху|ын |үнд|эл |эр | ул| ч | ёс|н э| ни|лон|хий| ту|р х|өөр| гэ|сан|чөл| чө|улс| үн|гээ|оро|ны |н т|юу |уюу|бую| ша|хан|эд |ох |ээ |нь | нь| тэ|сэн|н а|р э|ай |л х|хам|лаг| то|х ё| эд|ндэ|лга| тө|рол|ж б| ал|үлэ|х б|лий| хө|ол |л б|лс |эг |ээр|йгэ|ава|тай|гэм|гуу|д х|бус| өө|өтэ|өөт|төр|ыг |лго|луу|хуу|үүл|нд |хэн|сон|дэс| ял|лд |алд|хар|гий| нэ|лов|г б|рэг|эрэ|үйл|аал|н з|г х|х т|эни| ам|рла|гэр|үни|ой |той|ал | га|ад |рий|аан|й а| аж|вср| зо|ура|лла| ав| хи|эдэ|дсэ| үй|мга|амг|йх |айх|ч б| ол|рга|өрө|эс |ага| са|н д|оо |ана|ин |аг |н н|овс| со|олц|эгт|дэл|али|гөө|тэг|хээ|хэр|вах|арл|үү |хүү|лаа| дэ|с о| тү|мий|йгм| шү|н ш|арг|р ч|өр |аса|дил|ади| ад| мэ|сро| би|а х|илг|раа|й т|хүр| та|өх |ард|дээ|лох|лан|ваа|ива|лив|алу|тгэ|ори|лын| да| яв|л н|үрэ|айг|д б|огт|тог|айл|өри|аши|ялг|мар|лал|гла| эн|н ү|рон| хо|н г|н у|айд|х ч|длэ|р т|ата|бие|анг|й э|нэг| су|лцо|бүл|лж |д н|лөх|дах|рхи|лэл|г ү| ду|гох|тоо|эрг|олг|ас |эж |йлд|х а|гш |эгш|ули| ши|х ш|г н|игл|сгү|ёсг|дар|х х|амь|р а|о х",
      kbd: "гъэ|ыгъ| къ| ху|ыху|ныг| зы|ну |хуи|эм |ъэ |хуэ| и |уит|тын|гъу|э з|къы|эхэ|ӏых|э и|эр | зэ|ъэр|ым |хьэ|ъуэ|цӏы| цӏ|эху|ыны|иты|зы |нэ |хэм|агъ|уэ |къэ|эну| дэ|эу |эгъ|м и|энэ|хъу|эщ |рал|тхэ|этх|эра|хэн|дэт|м х|игъ|э х|ӏэ |щхь|ы ц|ыну|эны|у х| хэ|у з| гъ|зэх|кӏэ|ъэх|ум |хум|іэ |эдэ|рэ | ик|ъун| щы|щӏэ|уэд|и х|уэн|э к|хэт|уэф|иіэ| иі|хэр|э щ| е |ми |лъы|экӏ|іэщ|эти|ти |хуа|м к|эры|у д|щіэ|къу|р з|зэр|мрэ|экі|кіэ|ъым|уну| хъ|ӏи |ауэ| нэ|ъэм|лъэ|эмр|э г|уэх|езы|ншэ|ъэп|зых|алъ|у к|ащэ|фащ|кӏи|икӏ|ъых|укъ|алы|ал |у и|бзэ|ъэщ| мы|эфа| пс|іуэ|абз| ха|ӏуэ| гу| лъ|зым| щӏ| щх|псо|умэ|ъум|хаб|нук|иӏэ| иӏ|щыт|ӏэщ| я |ри |ху | ез|риг|и к|м щ|у щ|и ц|лым|шэу|ъыщ|ыхэ|эпэ|эщӏ|щэх|ыхь|эн |хъэ| ун|ъэк|ъэж|ъыт|м е|уу |эпс|щӏы|у п|сэн|мал|ама| ам|пхъ| щі|щіа|мэн|эхъ|ьэ |эжы|ылъ|э е|эщх|іых|ціы| ці|м з|ту |ьэх|эсэ|ьэн|апщ|эри|жьэ|ъэз|ъэу|дэ |пщӏ|псэ|и н|ынш|жын|уэщ|нэг|ьэп|н х|ъуа|ыкӏ|хур|лъх|дэу|э я|ъэс|псы|э п|эты|э д| ир|р и|эщі|нэх|зэг|ызэ|и л|и и|ней|уне|ыт | зи|уна|энш|хэг|гуп|ыщы|хуе|ыр |иту|и щ|сом|сэх|эзэ|ыкъ|эгу| те|апх|къе| за|лхэ|алх|и д|э л|и у|уэт|ам |мы |ын |и з|эжь|жьы|щ е|уэм|м д|зэ |ъэг|егъ| іу|щ з|л х|бгъ|ытэ| пщ|наг|р щ|сэу|м я|кэ |т х|имы|оми|э а|эмы|тэн|мыл|хэк|у е|хуб|уиг|уей"
    },
    Arabic: {
      arb: " ال|ية |في | في|الح| أو|أو | وا|وال|حق |ة ا|لحق|الت|كل |الم|لكل| لك|لى |ق ف|ته |و ا|ة و|شخص|ة ل|ات |الأ|ي أ|ون | شخ|م ا|أي | أي|ان |أن |مة |ي ا|الا|لا |ها |اء | أن| عل|خص |ن ا| لل|د ا|من |فرد|ما |الع|ت ا|حري|على|ل ف|رد |ل ش| لا|رية| إل|ة أ|ا ا|ن ي| ول|ا ل|ا ي| فر| من|ة م|الق|جتم|ن أ|ق ا|الإ| حر|له |ه ل|اية|لك |ه ا| دو|دة |اً |ين |ه و|لة |ي ح| عن|ماع|ي ت|ذا | حق|قوق|حقو|، و|ن ت|مع |ص ا|ام |د أ| كا|هذا|الو| إن|مل |امة|ع ا|إلى|ة ع|ماي|حما|ن و|لتع| وي|ير |نون|ي و|اسي|الج| هذ|نسا|وق |ترا|عية|ه أ| له|سية| يج| با|دول|انو|قان|لقا|ة ب|ة ت|تما|الد|يات|ع ب|سان|إنس|هم |علي| مت|لمج|ذلك|عمل|لأس|وز |جوز|يجو|بال|غير|ك ا|كان|ساس|أسا|دم |لاد|اعي|الر|تمي|دون|تمت|لتم| يع|ليه|ساو|اجت|ي م|لعا|لجم|تعل|ر و|تمع|مجت| مع|يه |ى أ|فيه|ى ا| كل|لات|ملا|ود |انت|الف|يها|ي إ|تي |الب|لي |قدم|ال |اد |ل ا|يز |ييز|ميي| تم|لحر|تع |متع|ا ب|عام|ا و|ق و|رام|ل ل|لاج|را |الش| وإ|يم |ليم|شتر|ا ح|واج|لزو|ول |ا ف|ولة|لحم|أسر| ذل|ه ف|اته|مسا|لمس| تع|عن |ه ع|وله|يته|ن ل|رة | وس|اة |يد | تح| مس|ي ي|لتي|عة |ولي|لدو| أس| وف|ل و|أية|ني |الس|لان|لإع|ة ف|ريا|ل إ|م ب|امل|كرا|تسا|ميع|جمي| جم|أول|بية|عيش|تحق|ادة|س ا| مم|معي|جما|عات|اعا|ارس|مار|مما|م و|راك|اشت|الط|اج |زوا|الز| وم|حدة|تحد|لمت|مم |لأم|ده |بلا| بل|ار |يار|تيا|ختي|اخت|ن م| مر",
      urd: "ور | او|اور|کے | کے| کی| کا|یں | حق|کی |کا | کو|ئے |ے ک|یا |سے |کو |شخص| شخ|نے | اس| ہے|میں|حق | ہو| می|خص |ے ا| جا|اس | سے| یا|ہر |ی ا| کر| ہر|ے۔ |سی |ہیں|ا ح|ص ک|وں |ے م| ان|ر ش|۔ ہ|ائے|زاد|آزا| آز|ام |ر ا|ق ہ|ادی|جائ|ں ک|ہے۔|م ک| کس|ا ج|ی ک|س ک|کسی| پر|ے گ|ہے |ار |ت ک|دی |پر |و ا| حا| جو| ہی|ان |ی ج|ری | نہ| مع|جو |ل ک|ی ت|ن ک|کرن|ئی |ل ہ|تی |ہو |ہ ا| ای|صل |اصل|حاص|رنے|ی ش|نہ |۔ ا|ں۔ |یں۔|ر ک|ر م| مل|وہ |معا|رے |ں ا|نہی|ے ہ|ے ب|ایس|ے ل| تع| گا|یت |ی ح|ا ا|ی م|اپن| اپ|کیا|می |ی س| جس|ہ ک|نی |اشر|عاش| دو|لئے| لئ|انہ|وق |قوق|حقو|مل | قا|کہ | گی|ر ب|ہ م| وہ| بن|ی ب|ملک|جس |ا۔ |ریق|ر ن|ے ج|اد |ات |گی |د ک|ے ح|دار|ر ہ|گا۔|قوم| قو|ے، |ا س|دوس|ر پ| و | شا|ی آ|ں م|ق ح| پو| با|خلا|انے|یم |لیم|و ت|ون | کہ|ی، |۔ ک|ا پ|ن ا|لک |علا|ا م|ق ک|ائی|وسر|ی ہ|وئی|یر |ا ہ|علی|و گ|وری|دگی|ندگ|و ک|یسے| من|ائد|رائ| مر|پور| طر|ومی|ے خ|سب |نون|انو|قان| سک|وام|ین | رک|تعل|لاق|غیر|دان|، ا| بی| مس|یوں|نا | بھ| بر|رتی|ادا|امل|یہ | یہ|ہ و| عا|ی پ| بچ|اف |لاف| خل|ی۔ |گی۔| دی|ھی |بھی|دہ |جا |پنی|قوا|اقو|رکھ|ے ی| عل|کوئ|، م| چا|ے س|ر ع| پی|برا|ر س|ر ح|سان|م ا|کام|شرت| را|شام|من |زند| زن|ب ک|ت م|اہ |اری|س م|ر ج| مح|ورا|ے پ|طری|ہوں|ال |ں س|ی ن|کرے| مق|ت س|تحف| تح|و۔ |ہو۔|بند| اق|د ہ| ام|امی|الا|لت |شرے|ے ع|ا ک|فری",
      pes: " و | حق| با|ند |رد |دار| دا|که |هر | در| که|در | هر|ر ک|حق |د ه|از |یت | از|یا |کس |ود |ارد| یا| کس|ای |د و| بر| خو|ق د|باش|شد |د ک|ار |د ب| را|ه ب|ان |آزا| آز|را |اشد|ی و|ه ا|ین |ید |زاد|س ح|خود|ی ب| اس|ده |دی |ور |اید|ه د|ری |و ا|تما|ات | نم|ی ک|ادی|نه |رای|د ا| آن|است|ر ا|ر م| اج|مای|ون |قوق|حقو|و م| ان|انه| هم|وق |ایت| شو|ی ا| مو| بی|با | تا|ورد|انو|ست |وان|برا|ام |شود|آن |جتم|ی ی| کن|ر ب|کند| مر|ت م|های|ت ا| مس|ی، |ماع|اجت|توا|یگر|و ب|دان|ت و|ا م| بد|عی |کار| من|مور| مق|ی د| زن|ی م|ن ب|ر خ|اه |ا ب|اری|د آ|مل | به|اعی|د، |دیگ|ت ب|بای|این| می|ن و|ق م| عم| کا|ن ا|و آ| حم|نون|ه و|و د|د ش| ای|شور|کشو| کش|لی |نی |ه م|بعی|ر ش|یه | مل|میت|ی ر|رند| شر|می |وی |ساو|قان| قا|مقا|او | او|د م|گی |نمی| اح| مح|مین|ئی |ادا| آم|خوا|گرد| گر|مند| شد|ائی| دی|ز ح|هیچ| هی|اده| مت|نما|ت ک|ران| بم|ن ح|ر ت|حما|ارن|مسا|دگی|ومی|ن ت|ملل|بر |هد |واه|بهر| اع|‌ها|ق و|، ا|عیت|یتو|ا ر|ن م| عق|همه|ا ه|زش |وزش|موز|آمو|انت|تی |جام|موم|عمو|تخا| فر|طور|د د|ه ح|ردا|اوی|نوا|انی|رار| مج|ی ن|حدی|احد|ندگ|زند|شخص| شخ|‌من|ه‌م|ره‌|هره|شده|ع ا|و ه|اسی|هٔ |یده|عقی|ا ا|مه | بش|اد |دیه|ا د|دوا|ی ح|ابع|ی ت|خاب|نتخ|رور|و ر|شرا| خا|ٔمی|أم|تأ|اً |امل|له |د ر|اسا|خور|بل |ابل|قاب|یک |سان|قرا|ا ن|خصی| ام| بو|یر |الم|بین|اهد|تبع| تب",
      zlm: " دا|ان |دان| بر| او|ن س|رڠ |دال| ڤر|له |كن | كڤ|ن ا|ن ك|ن د|يڠ | يڠ|ڤد |حق |ورڠ|تيا|ياڤ|ارا|كڤد|اور|رحق|برح|اله|أن |ولي| ات|اتا|ڠن |تاو|اڤ |ستي|ليه|او | ست|ڤ ا|يه |را |ه ب|ه د|عدا| عد|ن ڤ|ن ب|ين | تر|ق ك|ن ي|يبس|بيب| تي| سو| كب| سا|ن م|ن ت|لم |الم|د س|ڠ ع| من|چار|د ڤ|رن |سام| ما|ڽ س|ن، | بو| اي|ندق| حق|ڬار|نڬا|بول|سبا| سب|اتو|ا س|قله| ڤم| مم|وان|سچا| سچ| كس|ا ب|سن | سم|ڤرل|اون|نڽ |تن | با|هن |سيا|ا ڤ|ارڠ|بار|ڤا |بسن|كبي|ام |يند|ي د|اڬي|ڠ ب|باڬ|ي ا|مان| لا| د |دقل|هند| هن|ت د|ادي|وين|يكن| نڬ|، ك|ن٢ | ڤو|بڠس|ق٢ |ات |اول|اكن|اڽ | سس|ون |اد | كو|اين|دڠن| دڠ|ائن|تو |تي |ن ه|ڬي |سي |ق م|وڠن|دوڠ|ندو|لين|رلي|نتو|ڤون|وات|ياد|تيك|ڠسا|ڤمب|ترم|٢ د|حق٢|وا |لوا|ماس|وق |ه م|ل د| مل|وند| ڤڠ|ا، |، ت|لائ|اي |مڤو|يك |ي ك|رات|مرا| بي|سمو|و ك|، د|سوا|ڠ م|ڠ س|ڠ٢ |ڤري|يري|دير|ا ا|اسا|ڤ٢ |تا |سوس|، س|جوا|ڠ ت|رأن| ان|سأن|ريك|يأن|ري | در|امر|كرج| ڤل|ا د|جرن|اجر|ارك|لاج|د ك|وار|برس|ونت|منو|سال|ينڠ|دڠ٢|ندڠ| مڠ|اڤا|سسي|ساس|نن |ڤول|اڬا| بڠ| سڤ|مبي| اڤ|ڠ ا|ارأ|ڤرا|ي س|بس | دل|ا م|موا|ڤلا|ملا|ڤرك|كور|وبو| كأ|وكن|أنڽ|كسا|ڠڬو|ادڤ|هاد|رها|تره|كوم|توق|م س|ڠ د|دي | دي|٢ س|ندي|اس |ادا|بوا| دب|ڠ ڤ|ڽ، |اڤ٢|رتا|ال |يال|وسي| كت|أن،|نڤا|تنڤ| تن|م ڤ|رسا|ممڤ| مر|ن ح| كم|نسي|جأن|ؤي |لؤي|الؤ|لال|كڤر|كت |ركت|شار|مشا| مش|جاد|رڬا",
      skr: "تے |اں |دی |دے | ۔ |وں | تے| دا| کو|کوں| حق|دا | دی|یاں| دے|یں |ے ا|شخص| شخ|ہر |ے ۔|اصل| حا|حق |خص | ہر|صل |حاص|ہے | ہے|ال |ق ح|ل ہ| نا| کی| وچ|۔ ہ|یا |سی |ے م| او|وچ |اتے|کیت|ا ح|ادی|نال|ص ک| ات|ر ش|ہیں| یا|ں د| ای|یسی| مل|وند|کہی| کہ|ی ت|زاد|ازا| از|ندے|ں ک|ار | وی|ے ک|ئے | ان|ڻ د|نہ | کر|اون|ے و|دیا|ی د|ں ا|ے ب|ویس|وڻ |ی ن| ہو|تی |ی ۔| نہ|ی ا|یند|و ڄ|آپڻ| آپ|ا و|ے ج| کن|ے ن|ندی|ت د|ے ح|ی ک|ئی |ملک|یتے|ن ۔|تھی| تھ|ون |ں م| بچ|۔ ا|نوں|کنو|ڻے |اری|ا ا|ے ہ|ل ت| ڄئ|وق |قوق|حقو|ل ک|خلا| جی|لک |دار|یت |کرڻ|انہ|کو |ہکو| ہک|ن ا|مل | وس|ں و|پڻے| تع|ی م|اف |ے خ|نون|قنو| قن| لو|۔ ک|ری |لے |تا |یتا| قو| چا|ہاں|ڄئے|ق ت|ایہ|رڻ |ے د|ر ک| و |لاف| خل| جو|ی و|او |ہو |ئو |چئو|بچئ|یر |ہوو|ا م|ی ج|الا|ین | جا|می |نہا|ان |ات |سڱد| سڱ|یب |سیب|وسی| شا|ب د|یوڻ|ام |اوڻ|ے ت|ڻ ک| مط|ں ت| ون| کم|ن د|رکھ| رک|ڻی |ں آ|ریا|ی ہ|اد |یاد|علا|ر ہ|ں س|ی ح|جھی|ائد|ہی |لوک| ڋو| سم| سا| من| مع|بق |ابق|طاب|مطا|ھیو|ں ف|ہن | ہن|جو |و ک|ں ش|ر ت|کار|م د|ھیا| ٻا|غیر|و ل|وئی|جیا|وام|قوا|ی س| جھ|ل ا|قوم| سی|ذہب|مذہ| مذ|اے | اے|دن |ا ت|سان|نسا|انس|رے |لیم|علی|تعل|امل|ہ د|ے ر|د ا|کم |یہو|فائ|چ ا| کھ|م ت|را |ورا|پور|ں ب|ق د|ے ق|وکو|کھی|ا ک|و د|ے ذ|پڻی|بند| فر|کوئ|امی|ی ی|ائی|لاق|ایں|ہ ا| نظ|سما|ومی|ی، |ے س|ت و|ھین|ے ع|یم |سہو| سہ",
      pbu: " د | او|او |په | په|ي۔ | حق|چې | چې|ره |ي ا|ې د| هر|نه |هر |حق | څو|وک |څوک|و ا|ه د|ه ا|۔ ه|ه و| شي| لر|ي چ|و د|ري |لري|ق ل| کښ|وي |ښې |کښې|ه ک|غه |لو |ر څ|سره| سر|ه پ| ټو|و پ|له |يت |ټول|يا |کړي| کو|خه |ي، |دي | له| از|د م| هي| وا| يا| څخ|ازا|د ا|ولو|ه ت|څخه| کړ|ول |هغه|ه ش|ي د| هغ|کول|زاد|نو | وي|و ي|ه ب|شي۔|دې |يو | دي|ته |خپل| پر|اد |د د|ک ح| تو|ه م|ګه |ه ه|قوق|حقو|و م|ه ح|د ه| تر| مس|شي | نه|ړي۔|ني |د پ|واد|ې پ|ادي|ولن| يو|د ت|ونو|وګه|ي و|لي | دا|يد | با|تون| خپ|ي پ|توګ|ار |اند|يوا|ې و|دان| بر|ړي | عم|انه| ده|يڅ |هيڅ|امي|لني|بعي|ډول| ډو|ه ل|ايد|باي|اتو|ه ګ| تا|پل | مل|ايت|وم |ون | لا|هيو| شو| دغ|م د|ده |ې ا|ان | ته|کار|تو |مي |اره|اوي|ساو|مسا|نون|دهغ|و ت|ي ش|انو| مح|ين |اخل| ګټ|شوي|دغه|و ح|وي،|نيز|سي |اسي|وند|قو |وقو|و ک|ونه|ومي| وک|ي ت| ان|قان|ندې|و ر|ک د|ه ي|مين|پر |ټه |لام|غو |هغو|د ټ|و ه|ل ت|لے |ولے|وون|کي |رو |ن ک|موم|وکړ|پار|ن ش|من | نو| وړ| قا|ې چ| وس|څ څ|شخص| شخ|ژون| ژو|تر |ګټه|و څ|هم |عقي|رته| ور|بل | بل|و ب|ه س|ښوو| ښو| کا|ې ک|و س|اده|ونک| غو|دو |و ن|ت ک|مل |عمو|ل ه| پي|وسي|ړان|وړا|يز |خصي|ي م|ا ب|ادا|ه ن|خلي|واخ|ديو|، د|د ق| هم|ا د| بي|تبع| تب|ه چ| عق|پلو|و ل| را|د ب|راي| دخ|نې |نکي|ت د|ابع| مق|د خ|وره|شرا| شر|ر م|رسر|تام|ه ټ| من|طه |سطه|اسط|واس|لې | اس|۔ د|برخ|ې ن",
      uig: " ئا| ھە|ە ئ|ىنى| بو|ىلى| ئى|بول| ۋە|ۋە |ىن |نىڭ|قۇق|وقۇ|ھوق| ھو|شقا|قىل|ىڭ |نى |قا |لىش|ن ب|ەن |ئاد|ھەم|لىك|دەم| قى|ادە| ئە|كى |ندا|دىن|قان|ى ئ|گە |ەم |ىش |ىي |ۇق | بى|غان|ىغا|اند|تىن|ىگە|ولۇ|ەت |ھەر|ىشى|كىن|ىدى|اق |ىتى|لۇق|ەرق|ىكى|مە |لەت| يا|لۇش|لىق|ممە|ەمم| ئۆ|داق|رقا| تە| قا| با|ىشق|اكى|غا |ۇقل|ا ھ|ياك|مەن|رىم| بە|ا ئ|دە |ئەر|قلۇ|دۇ |دۆل| دۆ|ىلە|ان |ق ھ|ركى|ەرك|ۇقى| مە|ى ب|ىمە|ەھر|نلى|ىق |ن ئ|ارا|ئۆز|ى ۋ|ۆلە|ھرى|ار |لار| ئې|بەھ|لەن|لغا|ش ھ|ىلا|ۇشق|شى |نىش|ق ئ|ئار|لىن|بىل| ئۇ|ا ب|ايد|ماي|كە |ولم|يدۇ|ئىي| كې|اسى| مۇ|ە ق|ەر |، ئ|ىنل|يەت|ىك |لما| ئو|م ئ|ېلى|مائ|ە ب|ئىگ|تنى|ا، |ش ئ|ۇ ھ|شكە|الى|ڭ ئ|ارى|ەك | قو|سىي|رلى|ى ك|بىر|ەمد|ە ھ|لەر|ۆزى|ئال|ىيە|منى|ەتت|ائى|شلى|مدە| تۇ|بار|ەشك|ەتل|لىد|كىل|ئىش|قىغ|چە |ۇشى|ىما|اشق| جى|رەك|ېرە|كېر|ر ئ|ر ب|راۋ|ن، |اۋا| ما|ايى|ادى|تۇر|نۇن|انۇ|ېتى|تىش|ىشل|دا |ىدا|ۇرۇ|قى | جە|باش|جىن|ى، | سا| خى|ېرى|ناي|ىنا|ى ھ|زىن|ە ت|ى ق|ەمن| بۇ|رنى|ن ق|تتى|تى |ىقى|ى ي|ك ھ|ىرى|ائا|ي ئ|تەش|شىش|لەش|دىل|تىد|دا،|ساس|اسا|ە م|سىت|پ ق|ئېل|نىي|ن ۋ|سىز|ىسى|ىل |اش |ي، |مىن|ۇنى|ىپ |تىم|ەلى|رىش|ىيا|ۇش |مۇش| خا|ىر |مەت| تا| پا|تلە|الغ|لىم|پال|اپا|كاپ| كا|انل|ڭ ھ|ۇند| تو|قتى|الە|ن ھ|ە د|جتى|ىجت|ئىج|رقى|ىيى|ارل|امى| ھۆ| بې|ەتن|اتن|ىكا|ي م|اتى|شكى|سى | ئۈ|ە، |ت ئ|گەن| دە|ق ق|ولغ|ق ب",
      prs: " و | حق|رد | با|ند |دار| دا| در|هر |که | هر|در | که|د ه| به|حق |ر ک| از|از |یت |به |کس |ود | کس|یا |ارد| یا| بر|د و|ق د|د ک| را|ار |ای | خو| اس|ه ب|باش|ید |آزا| آز|را |ین |ان |ه د|زاد|اشد|ی و|ه ا|اید|س ح|ده |د ب|ی ب|است|خود| آن|شد |ور | هم|تما|ی ا|ات |ر ا|ادی|نه |ری |رای|و ا|و م| نم|ی ک| مو| اج|د، |مای|ون |برا|قوق|حقو| شو| ان|انه| مس|ه م|ر ب|وق |ایت|آن |های|ر م|هیچ| هی| تا|ه و|ورد|شود|انو|ست | بی|ام |وان|یگر|با | مر|ن ا|ی د|دی |ی م|د آ|ر ش|ماع|جتم|اجت|ی ی|سی | کن|دیگ|بای|ت و|عی |کند|ت م|ت ا| من|مور| عم|و د|ر خ|اه |لی |ا ب|بر |نی | شد|ی، |اعی| دی|توا|ت ب|دان|کار|د ا|ن و| شر|می | کا|و آ| حم|ساو|مسا|نون| او| زن|د ش| مح|ن ب|ه ش|شور|کشو| کش|اری|مل |بعی|مند|یی | مل|ی ر|و ب|د م|وی |قان| قا| مق|او |انی|گی |این| ای|مین|ادا| آم|خوا|گرد| گر|ه ح|، ا|ز ح|میت|رند|ا ه|یل |اده|نما|ق م|ت ک|ران|ن ح|د د|حما|ارن|اوی|انت|شد،|چکس|یچک|دگی|ومی|ملل|هد |واه|‌من|ه‌م|ره‌|هره|بهر|، ب|یه | اع|دیه|ق و|عیت|هٔ |ا ر| عق|همه|ابر|راب| می|ا م|زش |وزش|موز|آمو|ا د|دوا|تی |جام|موم|عمو| مت| وس| فر|ق ا|ر ت|مقا|یک |نوا|رار|نمی|زند|شخص| شخ|ایی|ت، |و ه|اسی|یده|عقی|اً | بد|یتو|مه | تم|رش |طور|ازد|ی ح|ابع|ی ت|خاب|تخا|نتخ|رور|و ر|شرا| خا|اب |ٔمی|أم|تأ|‌ها|یرد|و ی|امل|له |اسا|ردا|خور|ا ا|سان|قرا| مج|ی ن|ا ن|کسی|خصی| ام|ندگ|دود"
    },
    Devanagari: {
      hin: "के |प्र| प्| का| के| । |और | और|का | को|कार|ार |ति |या |को |ने |ों |िका|्रत| है| कि|ं क|है |धिक|व्य|अधि| अध|्ति| सम|्यक|ि क|क्त|ा अ|की |ा क| व्|ें | हो|यक्|सी |से |े क| या| की|में|न्त| मे|त्य|ै ।|ता |रत्|क्ष|ेक |येक|्ये|िक |र ह|भी |किस| जा| स्|क व|ा ज|िसी|मान| वि|र स|त्र|ी स|। प| कर|्रा|गा |ित | अप| पर|स्व|ी क| से|ा स|्य | अन|्त्|िया|ा ह| सा|ना |्त |प्त|समा|ान |र क|ाप्|तन्| भी| उस|राप|वतन|्वत|रों|वार|े स|था |हो |े अ|ा ।|न क| न |देश| रा|षा |अन्|त ह|्षा|्वा|जाए|ी प|करन|ा प|अपन|ष्ट| सं|े व|होग|िवा|ट्र|्ट्|ाष्|राष|सके| मा|ओं |ाओं|री |क स|े प| नि|ीय |रक्|ो स|ाएग|रने| इस|व क|पर |रता|र अ| सभ|तथा| तथ| ऐस|रा |पने|्री|िक्|किय|ा व|माज|ं औ|र उ|द्ध|सभी|श्य| जि|ाने|ार्|ारा|द्व| द्|एगा|सम्|ेश |िए |ाव |र प| दे|्तर|ा औ|ारो|यों|परा|पूर|चित|्ध |रूप| रू| सु| लि|त क|ो प|ं स|े ल|शिक| शि|वाह|े औ|जो |राध|जिस|ूर्|ी भ|ूप |ोगा|स्थ|रीय|तिक|्र |। इ|इस | उन|ले |े म|लिए|म क|कता|े य| जो|न म|अपर| पू|ो क|ा उ|ाह |नून|ानू|गी |दी |ारी|ं म|। क|तर्|ी र|श क|परि|स्त|ोई |कोई|र्य|ी अ|हित|भाव| भा|ताओ|ास |साम|विक|विव|म्म| सक|कर |ाना|ध क|निक|य क|उसक|कृत| क़ा|न स|जीव|्या|रका|्रक|ाज |न्य|्म |र्ण|क़ ह|हक़ | हक़|ी म|जिक|ाजि|ामा|क औ|मिल|ेने|लेन| ले|ये |ो अ|े ज|रिव|मय |समय|वश्|आवश| आव|ऐसी|ाध |र द|र्व|सार|प स|बन्| सह|िधा|विध|ी न|ून |क़ान",
      mar: "्या|या |त्य|याच|चा |ण्य|ाचा| व |कार|प्र| प्|िका|धिक|ार | अध|अधि|च्य|आहे| आह|ा अ|हे |ा क|ास |वा |्ये|्रत| स्|ता |ा स| अस| कर|स्व| का|ल्य|रत्|ाहि|कोण| को|िक |येक|्वा|ा व| त्|र आ|्य |त्र|ेका|क्ष|ा न| सं|ामा|ाच्|ंवा|िंव|किं| कि|ात |ष्ट|कास| या|यां|ांच|र्य|मिळ| मि| सा|व्य|ोणत|ने |े प|काम| सम|ंत्|ये | रा|समा|तंत|करण|ा आ|े क|हि |े स|ना |िळण|ून |ा प|ट्र|्ट्|ाष्|राष|ीय |व स|क्त|मान|र्व| आप|ळण्|्र्|ातं|वात|चे | वि|्षण|रण्| दे| व्|आपल|ही |ार्|नये| नय|मा |यास| जा|लेल| नि|े अ| पा|ा म|ले |ाही|बंध|े व|्यक| मा|शिक| शि|देश|ा द|माज|्री|ली |ान |ांन|पल्| हो|ा ह|षण |जे |िजे|हिज|पाह|ारा|यात|सर्| सर|रां|असल|ंबं|संब|िक्|ी प|ंच्|रक्|णत्| आण|ला |स्थ|रीय|ीत |ंना|त व|्व |क व|णे |ाचे|न क|त क|रता|्रा|याह|्त |ची |य क|द्ध|्वत|यक्|णि |आणि|स स|ंधा|क स|च्छ|य अ|त स|ीने|ोणा|करत|त्व|ील |ी अ|सार|र व|भाव|व त|थवा|अथव| अथ|े त|े ज|याय|ंचा|ेल्|ाने|ेण्|क आ|क्क|हक्| हक|ण म|ंरक|संर|न्य|ायद|ा त|त आ| उप|वस्|िवा|ेशा|साम|े य|े आ|ी व|व म|तीन|व आ|ध्य| अश|धात|कृत|्क |द्य|ित |सले|ेश |तो |ेल |ती |्ती|असे|इतर| इत|स्त|र्ण|ा ब|ेले| के|हीर|जाह|ा ज|ेत |ूर्|पूर|ेच | वा|ाजा|ी स|शा |य व| न्|याव|द्द|्ध |रून|यद्|काय|ा श|गण्|क क|राध| शा|यत्|ल अ|्यव|ी क|ाव |ा य|त्त|जिक|ाजि|रणा| धर|ा ध|भेद| बा|रका|्रक|केल|ि व|िष्|तील|योग|साध|ांत|विव|श्र| धे| मु|वतः",
      mai: "ाक |प्र|कार| प्|ार |िका|्यक|धिक|क अ|्रत|्ति|व्य| अध|ेँ |अधि|िक | व्|आʼ | आʼ|क्त|यक्|तिक|केँ|क व|बाक|क स|छैक| छै|त्य|मे |ेक | सम|क्ष|हि |रत्|र छ|येक|्ये|न्त|वा |िके|क। |ैक।|। प| अप| स्| वि| जा|ित |सँ | हो|कोन| को|त्र|स्व| वा|क आ|ष्ट| कर|अपन|मान| का| अन|ति |्त्|नो |नहि| पर|ट्र|्य | एह|ि क|्ट्|ाष्|राष| रा|समा|ोनो|ल ज| नह|ताक|ार्|पन |तन्|वतन|्वत|्षा| कए| सा|्री| नि|ा आ|िवा| सं| दे|जाए|ीय |करब|था |एबा|ा प|ना |्वा|देश|त। |रक |क ह|ँ अ| सभ| आ |त क|चित|्त |वार|ता |ारक|माज|ा स|रीय|न्य|रता|ान |्रा|्या|रक्|ारण|परि|एल |कएल|अन्|रबा|क प|ओर |आओर| आओ|अछि| अछ|िर्|ान्|नक |होए|कर |धार|स्थ|ा अ|िमे|र आ|एहि| एक|े स|तथा| तथ| मा|िक्|शिक| शि|प्त|र्व|निर|च्छ|र्य|ँ स|क क|हो |ाहि|एत।|र प|ामा|साम|षा |ʼ स|ँ ए|ैक |द्ध|र अ|क ज|स्त|ाप्|ँ क| सक|यक |कान|हन |एहन|ेल |ोएत|त आ|ा व|। क|्तर|ाएत|्रक|हु |क उ|पूर|विव|ʼ अ|छि | ले|न प|ास |राप|धक |पएब| पए|रा |यता|रूप|न व| के|षाक|य प|त ह|जाह| ओ |भाव|पर |थवा|अथव| अथ|सम्|जिक|ाजि|ूर्|रति| दो|सभक|। स| जन|सभ |बाध|अनु|िसँ| सह|ँ व|ए स|रिव|तु |ेतु|हेत| हे|ाध |ेबा|न स|िष्|राध| अव|ित्|वास|चार| उच|ारा|न क|वक |ा क|नून|ानू|एत |री |ेओ |केओ|रण |्रस|ि द|ओ व| भे|नहु|ोनह|्थि|पत्|म्प|राज| भा|हिम| हक|ामे|्ण |र्ण|हार|ि स|क द|न अ|त अ|लेब| अभ|िश्|जक |ाजक|न आ|वाह|काज|श्य|वस्|ओहि| ओह|योग|। ए|कए |े ओ|अपर",
      bho: " के|के |े क|ार |कार|िका|धिक|अधि| अध|ओर |आओर| आओ|े अ|े स|ा क| सं|िक |र ह|ा स| हो|र स|ें |में| मे| कर| से|नो |क्ष|से | का|। स|खे |ा। |रा | सम| सब|्रा| सक|र क|न क|वे |ौनो|कौन| कौ|चाह| चा| बा|प्र| प्|था |ि क|ति | जा| सा|े आ|पन |करे|ता |होख|त क|े। |े ब|तथा| तथ| आप|केल|सके| स्|रे |सबह|कर |आपन|े ओ|जा | पर|ष्ट| रा|ना |हवे| हव|ला |ेला|बहि| ओक|ोखे|र ब|ह। | ह।|न स|ाष्|राष|्त | और|े च|। क|संग|र आ|ट्र|्ट्|षा |मान|ा आ|ं क|ा प|्षा|रक्|हे |ाहे|ाति|ावे| जे|ही |ओकर|मिल|ित |ो स|ल ज|इखे|नइख| नइ|त्र|माज| बि|वे।|े ज|क स|िं |हिं|करा|और |े म|समा|हु | ओ |पर |े न|स्थ|रीय|्री|ला।|ाज |ान |कान|े त|िर |तिर|खात| खा|े उ|नून|ानू|ाम | सु| दे|ी क| मा|र म|प्त|िया|ाही|बा।|योग|ी स|ल ह|ून |व्य|ु क|ए क|े व|ंत्|स्व|केह|ीय |खल |साम|यता|तिक|े ह|ाप्|राप|र प|र अ| लो| सह|जे |ोग |म क|ले | नि|ेकर|ा ह|पूर|र न|ेहु|्य |या | या|देश|दी |ा म|ाव | दो|े द| पा|हि |िक्|शिक| शि|बा |िल | उप|्रत| वि| ही| ले|रो |े ख|ठन |गठन|ंगठ| मि|षण |्षण|ंरक|संर| आद| एक|ने | अप|तंत|वतं|्वत|्तर|्या|ेश |ादी|्ति|जिक|ाजि|क आ|्म |चार| उच| शा|री |ाह |याह|बिय|चित|क्त|पयो|उपय|रता|र व|न म|लोग|ह क|न प|काम| पू| इ |आदि|ईल | कई| व्|मी |ुरक|सुर| जी|धार|य स|तर्|भे |सभे| सभ|भाव|्थि|ामा|सर |र्म| को| बे|ोसर|दोस|ण क|ास |े प|जाद|आजा| आज|उचि|ग क|ारी| जर|गे |ज क|ी ब|सन |हो |ा त",
      npi: "को |ने | र |ार |क्त|कार|प्र| प्|्यक|व्य| गर|िका| व्|्रत|धिक|्ति|यक्|अधि| अध|ाई |मा |लाई|त्य|िक | । | सम|वा | वा|क व|्ने|र्न|गर्|न्त|छ ।|तिल|रत्|त्र|ेक |येक|्ये|िला|र स|ो स| स्|मान|क्ष| वि|हुन|ा स| हु| छ |र छ|्त्|समा|स्व|। प| सं|नेछ|ुने|हरु|तन्|वतन|े अ|िने|ो अ|्वत| का|े छ|गरि| रा|्र |ति |ाको| कु|ष्ट|ना |स्त|क स|ुनै|कुन|ट्र|ले | नि|ान |छैन| छै|्ट्|ाष्|राष|तिक|छ। |ार्|ता |ित |नै |ा अ| सा|ा व|रु | मा| अन|ा र|रता|र र|हरू|ेछ |ा प|रक्|्त | पर|था | ला|परि|देश|सको| यस|माज|ामा|्रा|िवा|ाहर|ो प|्य |वार|न स|। क|नि |्षा| त्|द्ध|र ह|तथा| तथ|यस्|्यस|री |र व|पनि|रिन|ंरक|संर|भाव|ै व|सबै| सब| शि| सह|ताक|े र|त र|लाग| सु|्षण|द्द| अप|ैन |ो व|िक्|ाव |धार|्या|्रि|ा भ|एको|र म|न अ|ो ल| उस|शिक|ात्|स्थ|वाह|ूर्|श्य|ित्|रको|ारक|ुद्|तो |्तो|ाउन|कान|िएक|ा न| पन|न। |ैन।|का |ेछ।| भे|र्य|सम्|त्प|साम|रिय|चार|निज|ुन |गि |ागि|उसक| मत| अभ|पूर|र त| सक|सार|राध|परा|अपर|ुक्|जको| उप|रा |ारा|्वा|विध|्न |ा त|न ग|णको| पा| दि|क र|र प|अन्|भेद|ारम|ो आ| अर|जिक|ाजि|िय |षा |ाट |बाट| बा|ि र| छ।|त्व|त स|रू |छ र|रका|विक|र उ|ोग |्दे|रिव|सकि|ै प|रति|अनु| आव|युक|ा ग|नमा|योग|ग ग|क अ|द्व|्ध |रुद| बि|। स|उने|ान्|ा म|िको|र्द|ारी|्तर|ो ह|हित| दे|रिक|ा क| आध|राज|र्म|्ण |र्ण|ि व|्यव|विच|बै |सहि|रोज|र्स|ई उ|्प |रात|निक|मिक|च्छ|्था|विव|कता|अभि|्धा",
      mag: " के|के |ार | हई|कार|ई। |हई।|िका|े अ|धिक|अधि| अध|र ह|े क|और | और|ा क|े स|सब | सब| कर|ें |था |में| मे|तथा| तथ|िक | हो| सम|क्ष|ना |ब क|र स| सं|ा स|कर | भी|। स| सा| से| का| अप|्रा|प्र| प्|से |भी | को|त क| पर|रा |क ह|पन |अपन| सक|या |ति |र क|ी क| या|करे| जा|रे | ओक|्त |सक |नो |ान |मान|ओकर|ा प|न क|ेल | ना|। क|रक्| स्|ही |होए| एक|पर |दी |ट्र|ता |व्य|हई | शा|े उ| दे|त्र|ादी| रा| ही|कान|ित |म क|ल ज|ाम |ी स|े भ|न स|माज|ष्ट|षा | ले|क स|बे |वे |ावे|मिल|र म|्य |ा ह|ला |प्त|नून|ानू|जा |ेकर|्षा|्रत|ंत्|र औ|ोई |कोई|्ट्|ाष्|राष| मा|रो | जे|करा|ोए |ाप्|राप|समा|ून |ो स|स्व|्ति|साम|ोनो|कोन| व्|र अ|्म | वि| सह|े म|क्त|योग|र व|काम|ल ह| नि|देश|पूर|वार| इ |ंरक|संर|ए क|र प| सु|तंत|वतं|्वत|ा म|व क|े व|ाथ |साथ| दो|होब| पा|ो क|े ब|ोग | उप|स्त|परि|न प|े त|्तर|लेल|े ओ|चाह| चा|य क|वा |ेश |य स|न ह|षण |ा ब|। त|एक |एल |ीय |केक|े ह|र आ|ि क|स्थ|जिक|ाजि|ामा|रीय|्री|तिक|ाति| बि|चार|े आ|ास | उच|ा त|यक्|्यक|िल |मय |समय|शाद|पयो|उपय|े ख|रिव| पू|े ल|े च|ौनो|कौन| कौ|ं क|संग|न द|ं स|ण प|्षण|र न|े न|ो भ|करो|ा औ|रता|ाव |भाव|क औ|र्म|ोसर|दोस|ण क|े प|न औ|ब ह|िक्|शिक| शि|ाबे|निय|चित|उचि|ित्|ग क|े। |त स|ी श|ं श|एकर|। ए|तन | ओ |री |्र |जे |क क| सी|सन |िवा| अन|ूरा| बच|ए। | बे|त ह| तक| मि|धार|थवा|अथव| अथ|िला|्वा|ि म| आद|ने |कएल| कए|्या"
    },
    Myanmar: {
      mya: "င့်|င်း|ိုင|ုင်|သည်|့် |ွင့|ခွင|ကို|ည်း|ောင|သော|ာင်|ြစ်|တို|နို|်းက|ို |င် | အခ|ြင်|ဖြစ|လည်| လူ|် အ|ရှိ|ျား|မျာ|်ခွ|်။ |ည်။|ကော|းကေ|နှင|ှင့|ို့|ရေး|်း |င်ခ|း၊ |် လ|ော |ခြင|ွင်|မှု|်စေ|တွင|်း၊|ှိသ|ောက|ိသည|းကိ|ည့်|ော်|ာက်|တ်လ|စ်စ|လပ်|ွတ်|လွတ| မိ|လူတ|်လပ|ူတိ|်လည|်းမ| ဖြ|စွာ| လွ|င်ရ|ွာ |ုပ်|်၊ |့် |ထို|်သေ|းတွ|။ လ|ြား|အရေ|့်အ|အခွ|ိမိ|ွက်|ာ်လ|ေ၊ |ား |မည်| သေ|က် |ိုး|်ရှ|ည် |မိမ|်စွ|စေ၊|့်ရ| ထိ|်အရ|ြင့|န် |းနှ|်းတ|မ်း|ဖြင|် မ|အား|်သည| ပြ|န်း|အခြ|်ငံ|င်င|ပို|ာ အ|်မှ|ပ်စ|ရန်| နိ|ဆို|းမျ|ားက| ရှ|စေရ|ွယ်|းသည|လုပ|် ပ|တစ်|၊ အ|း အ|် ဖ|ုံး|ခြာ|ဝင်|ရမည|် ရ|ြည်|ုတ်|သို|းခြ|းဖြ|းမှ|အပြ|်ခြ|စား| လည|်းသ|်နိ|အတွ|ပြု|ပြည|်းပ|ခံစ| ခံ|း မ|ေးမ|ပြင|င်သ|ဟုတ|မဟု|ပ်ခ|့ အ|ားသ|ကြေ|တ် |က်မ|တွက|ားန|ပဒေ|ဥပဒ|ု အ|သား|် သ|်းခ|၊ မ|ပညာ|ိုက|မှ |မျှ|ည်သ|ြော|ရ။ |စည်|်ဖြ|တည်|ျက်|ကွယ| အာ|ေး | သိ|ားဖ| အလ|်မျ|သင်|ွဲ့|ဖွဲ|ရား|တရာ|်ကိ| ဥပ|ေးခ|ပြစ|တ်ခ|်ရန|က်သ|်ချ|ု့တ|၊ လ|ားလ|်ရွ|မိ၏|ု သ|ုက်|သက်| အက|ားရ|ခြေ|် န|်မြ|စ်မ|်းန|၊ န| ကိ|၊ သ|ျို|လူမ|းချ|်နှ|ူမျ|ူညီ|တူည| တူ|လို|ားစ| အတ|းသေ|ဆော|င်၊|ဒေအ|ပေး|ှု |ာ လ|်သူ|ှော|ိမ်|ားခ|ံစာ|် ခ|ျင်|ွေး|အလု|ါဝင|ပါဝ| နှ|ားတ|ပ် |း န|းစွ|ု လ|ေအရ| အပ|ားမ|်ရေ|ာ သ|ေးက|။ မ| လု|် ထ|်ရာ|ေရ။| အဆ|းမဟ|့တည|၊ က|ထား|် က|ိုသ|ပ်သ|် တ| ပါ|အဖွ|ရွက|အခါ|ေးရ|် စ|ခံရ|၏ အ|က်ခ|်းအ|းအဖ|အဖြ|ွန်|ျှ |ုမျ|ှင်|ုယ်|ိုယ|ာင့| တိ",
      shn: "င်ႈ|ၼ်း|လႆႈ|င်း|်း |ူၼ်|ုၼ်|ၼ်ႉ|ူင်|ဝ်း|ွင်|ၼၼ်|ိူင|်ႇလ|မ်ႇ|ူဝ်|်ႈလ|ၼ်ႇ|ႇလႆ|်းၵ|တႃႇ|မိူ|ဢမ်|ၵူၼ|မီး|တ်ႈ|တ်း|သုၼ|ဝ်ႈ|လွင|လႄႈ|င်ႇ|ုင်|ၼႆႉ|ၢင်|ဢၼ်|ၵေႃ|်ႈ | လွ|ႆႉ |ႈ တ|ိူဝ|မ်း|ႆႈ | တႃ|ႄႈ |ၼ် |ွတ်|်းၼ| ၵူ|ိုင|းသု|ယူႇ|်းလ|ၢၼ်|ဵၼ်|ီးသ|ၵ်း|ႅဝ်|လႅဝ|လွတ|ုၵ်| မီ|ေႃႉ| ဢၼ|ၵ်ႇ| လႄ|ဵင်|ႈ လ|ၵၼ်|်ႈၵ|ပိူ|ၵူႊ|်းပ|ွၼ်|်းတ|်ႈတ|ႃႉၼ|်ႉ |်ႈမ|။ ၵ|်းသ|ႇ။ | တေ|ၸႂ်|်းမ|ူႇ။|ၵ်ႈ|သေ |်ႇ |ႉၼႆ|ႊၵေ|ူႊၵ|းၵူ|ႉ မ|ႈလႅ|်ႈပ|်ႇၼ|ပဵၼ|တီႈ|ႈမိ|ၵၢၼ|ေဢမ|ဝ်ႇ|ိုၼ|ၶဝ်|ဵတ်|ႁဵတ|လႂ်|ုမ်|းၼၼ|ၸို|ိင်|ႂ်ႈ|ၼ်ႈ|ပ်ႉ|မ်ႈ|ိူၼ|ၢႆး|်၊ |်းၶ|ႈလွ|င် |် လ|်ႇမ|်းၸ|်းယ|ႃႈ |တင်|တေႃ|ုဝ်|ိုဝ|ၼ်လ|်ႇၵ|ပၼ်|း လ|်ႉလ|ၾိင|်ႇပ|တ်ႇ|းပိ|ႁႂ်|မၼ်|ႃႇ |ေႃႈ|ၼႃႈ|်ၼၼ|်းႁ|ႈတႃ|ထုၵ|်ႈၼ| ဢမ|်ႉတ|်ႈႁ|တၢင|တေဢ|ေႃႇ|ူၺ်|ၼ်ၵ|ၵဝ်|ႉ တ|ႇၼၼ|းမိ|ၢမ်|ၢႆႇ|း ဢ|ပၢႆ|်ႈၸ|ႈ ဢ|ႃႇၶ|ႆႈတ|ွမ်|ေလႆ|တေလ|ူမ်|်ႈဢ|ၢဝ်|ၼ်ပ|သၢင|ၼ်ၼ|်ႈယ|လိူ|ဝ် |်သေ|ၽဵင|ၼ်ဢ|ၸွမ|ပ်း|ႈလႆ|ဢဝ်|သင်|ႉယူ|်ႉယ|်ႉၵ|်းဢ| မိ|် ဢ|ထို|ၶွင|ၼ်တ|ၾၢႆ|ႁပ်|ႂ်း|ၼႂ်|်ႉႁ|ၺ်ႈ|းလႅ|းသေ|်ႇၶ|ၼင်|ႂ်ႉ|်ႇၽ|ပို|ွၵ်|ၼ်မ|်ၼႆ|ပဵင|လူၺ| ပိ|ူပ်|လုၵ|ႇ လ|ႈသင|တူဝ|ႈ ပ|ႅင်|် တ|ႁူမ|်ႇႁ|ႃႇလ|ႇၶဝ| ၾၢ|်ႇၸ|်ႇတ|းလွ|ႆႈမ|ၼ်ၽ|ႃႇၵ|တို|းသၢ|ဝ်ၼ|ႇပဵ|ူၵ်|ၵ်ႉ|ႄႈသ|ယဵၼ|ႈထု|ႆႈထ|းၵၢ|ပၵ်|ႆႈပ|ႅတ်|ႉ လ|ၽူႈ|ဝႃႈ|်ၵူ|င်ၸ|ႉ။ |းၼႆ|ႈ မ|ႈမီ|ႁၼ်|းတေ|ၼ်သ|ဝႆႉ| သု|ူတ်|ၵိူ|်ဢၼ|မ်ႉ|ၸုမ| တီ|ႃႇႁ|ႉၼၼ|ၺ်း|်ႉသ|းၵေ|်ၸိ|ဝ်ႉ|၊ လ|ၼ်ႊ|း၊ |ိၵ်| ၼႂ|ႉႁၼ|ိတ်|ႇၵၼ|်။ |ႃႇၸ|င်သ|။ ပ|သွၼ|ၵတ်|ၸဝ်|်ၸႂ|င်ပ|ႂ်၊|ႅၼ်|သေဢ|်ဢမ"
    },
    Ethiopic: {
      amh: "፡መብ|ሰው፡|ት፡አ|ብት፡|፡ሰው|መብት|፡አለ|ይም፡|ወይም|፡ወይ|ነት፡|ለው።|አለው|ንዱ፡|ዳንዱ|ንዳን|ያንዳ|እያን|ዱ፡ሰ|፡እን|ት፡መ|ው። | እያ|፡የመ|። እ|እንዲ|፡ነጻ|፡የተ|ም፡በ|ው፡የ|ም፡የ|፡የሚ|ን፡የ|ና፡በ|ና፡የ|፡አይ|፡የማ|ነጻነ|ው፡በ|ሆነ፡|ቶች፡|ት፡የ|ው።፡|፡በሚ|ትና፡|ኀብረ|፡መን|ትን፡|ውም፡|ብቻ፡|፡ለመ|ም፡ሰ|ም። |ኛውም|ንኛው|ማንኛ|ንም፡|፡አገ|መብቶ|፡ያለ|እኩል|ረት፡|መንግ|፡ለማ|ት፡በ|ሆን፡|በት፡|፡በተ|ለት፡|፡እኩ|ጋብቻ|ዎች፡|ወንጀ|ህንነ|ደህን|ኩል፡|ማንም| ማን|። ማ|ጠበቅ|ጻነት|ብቶች|፡ልዩ|ራዊ፡|ሰብ፡|ም፡እ|ግኘት|ማግኘ|ች፡በ|ሥራ፡|ነጻ፡|ርድ፡|ፍርድ|፡በሆ|፡ድር|ል፡መ|፡ደህ|ተግባ|፡የሆ|ት፡ወ|በትም|ፈጸም|ር፡ወ|ይነት|ትም፡|፡በመ|፡ሁሉ|ቸው፡|ኘት፡|ማኀበ|የማግ|በር፡|ም፡መ|በኀብ|፡በኀ|ችና፡|፡ኑሮ|፡ሥራ|፡ጊዜ|፡ወን|መሠረ|፡መሠ|ቱን፡|ሕግ፡|ባር፡|ግባር|ነትና|ነቶች|ጻነቶ|ንና፡|ዩነት|ልዩነ|ደረጃ|፡ደረ|ብ፡የ|ዓይነ|፡ዓይ|ይማኖ|ሃይማ|ል። |ነው።|፡ነው|ሁሉ፡|ርት፡|ህርት|ምህር|ትምህ|ንነት|ና፡ለ|በት።|ለበት|አለበ|መሆን|ን፡አ|ን፡ወ|፡መሰ|ብረ፡|፡ብቻ|፡አላ|ርጅት|ድርጅ|ንግሥ|ተባበ|ሎች፡|ሌሎች|የሚያ|ቤተሰ|እንደ|ት፡ድ|፡መሆ|ች፡የ|ትክክ|፡ማን|በሆነ|ሆኑ፡|ን፡መ|።፡ |ት፡ለ|ረግ፡|፡ይህ|ዲጠበ|ንዲጠ|ት፡እ|ነቱ፡|፡በሕ|የሆነ|ጸም፡|በቅ፡|የመኖ|ትም።|ገር፡|፡ከሚ|ው፡ከ|ሩት፡|የኀብ|፡የኀ|ሔራዊ|ብሔራ|፡አስ|ር፡የ|ይገባ|ውን፡|ጥ፡የ|ንስ፡|፡ትም|ኑሮ፡|ን፡ለ|ች፡እ|ሁኔታ|፡ሁኔ|ስት፡|፡በአ|፡ማኀ|ብረሰ|መሰረ|ረ፡ሰ|የሚፈ|ላቸው|አላቸ|መፈጸ|፡ጋብ|ር፡በ|ዜግነ|ችን፡|ጅት፡|የተባ|ነትን|ዚህ፡|ብነት|ገብነ|፡ገብ|ስጥ፡|ውስጥ|፡ውስ|ሰቡ፡|መው፡|ፈጸመ|ጊዜ፡|ት፡ጊ|ሆኖ፡|፡ሆኖ|ፈላጊ|ው፡ለ|ሙሉ፡|ክለኛ|ክክለ|ጀል፡|ንጀል|ሁም፡|ዲሁም|ንዲሁ|፡በግ|ው፡ያ|ታዊ፡|ረታዊ|ንግስ|፡ እ|ደረግ|።፡ይ|ነ፡መ|ነቱን|ንነቱ|ሉ፡በ|በሕግ|፡ተግ|ዓዊ፡|ብዓዊ|ሰብዓ|ም፡ከ|ቅ፡መ|መጠበ|፡መጠ|በነጻ|፡በነ|መኖር|ምበት|አይፈ|ም፡ዓ|፡በማ|ቢሆን|፡ቢሆ|ር፡አ|ገሩ፡|አገሩ|ናል፡|ሽናል|ናሽና|ርናሽ|ተርና|ንተር|ኢንተ|፡የአ|አገር|ንድ፡|አንድ|ህም፡|ና፡ነ|፡ውሳ|ረጃ፡|ኖት፡",
      tir: "፡፡ | መሰ|ሰብ | ሰብ| ኦለ|ኦለዎ|ናይ | ናይ|ዎ፡፡|ለዎ፡|መሰል|ሰል |ሕድሕ|ሕድ |ድሕድ| ሕድ|ይ ም|ል ኦ| ኦብ|ድ ሰ|ትን |ውን |፡ ሕ|ካብ |ኦብ |ወይ | ወይ|ን መ|ብ ዝ| ካብ| መን| ነፃ|ነት |ብ መ|ዝኾነ|ብ ብ| እን|ኾነ | ዝኾ|ን ነ| ምር|ን፡፡|ኹን | እዚ|ርካብ|ምርካ| ኦይ|ይኹን| ይኹ|ታትን|ነፃነ|እዚ |ን ኦ|ሕጊ |ነ ይ|ታት |ት ኦ|ይ ብ|ን ም| ከም|ብ ኦ| ብሕ| ፣ |ንግስ|መንግ| ሃገ|፣ ብ|ዊ መ|ማዕሪ|ስራሕ|ን ን| ንም|ዕሪ | ንክ|ኦዊ |ን ብ|’ውን|መሰላ|ራዊ |ማሕበ|ኦት | ዝተ| ማዕ|ሎም |ርን | ስራ|ተሰብ|ዓት |ነቱ |ብኦዊ|ሰብኦ|ት ወ|ነታት|ላትን|ሕበራ|ልኦት|ካልኦ| ብዘ|ን ዝ|ም፡፡|ርቲ |ህርቲ|ምህር|ትምህ| ትም|ራሕ | ማሕ|ኸውን| ገበ|ብሕጊ|ቱ ን| ብዝ|ፃነታ|ሰላት|ዚ ድ| ኦድ|ዎም፡|ለዎም|ታዊ |እንት|ሪተሰ|ብሪተ|ሕብሪ| ሕብ|ብን |ራት |ን ሰ|ዋን |ኡ’ው|ምኡ’|ከምኡ|፣ ኦ|ርዓት|ስርዓ| ስር|ዕሊ |ን ና|ነትን|ት ና|ይ ኦ|ነፃ |ገሩ |ሃገሩ|ም መ|ንጋገ|ድንጋ| ድን|እንተ|በራዊ| ብማ|ይማኖ|ሃይማ|ኩሎም| ኩሎ|ልን |ክኸው| ክኸ|ት ስ|ን ሓ| ሃይ|ት መ|፡ እ| ካል|እን |ቤተሰ| ቤተ|እዋን| እዋ|በን |ን ዘ|ተደን|መሰሪ|ግስቲ|ን ካ|ሓለዋ| ሓለ|ብዘይ| ምዃ| ሕጊ|ን፣ |ዊ ወ|ፃነት| ዘይ|ሓደ |ን ተ|ት፣ |ናን | ምስ|ፃን |ነፃን| ክብ|፡ ት|ብማዕ|ት ብ|ታውን|ብነፃ| ብነ|ብ ና|ዜግነ| ዜግ|ስታት|ግስታ|ብ ሕ|ዊ ኦ|ብ ን|ባርን|፡ ዝ| ብሓ|ነቲ | ነቲ|ሪጋገ|ገበን|ፍትሓ|ላውን|፣ ከ|ፃኢ |ወፃኢ| ወፃ|ገ ስ|ገገ |ንገገ|ደንገ|ዝተደ|ጊ ካ|ሃገራ|ሰሪታ|ሉ መ|ስቲ |ዚ ብ|ለዋ |ዘይ |ልዕሊ| ልዕ|ድ ኦ|ክብሩ|ዊ ክ|ል እ|ት ክ| ድሕ| ምን|ህይወ|ይፍፀ|ዓለም|፣ ሕ|ብ እ| ምም|ር፣ | ሓደ|፡ ብ|ገ እ|ጋገ |ልዎ |ድልዎ|ኦድል| ብሃ| ብም|ም ብ|ት እ|ባት |ባለ |ዕባለ|ምዕባ| ምዕ| ብር|ድሕነ|ብ ሰ|ሪ ክ|ን ስ|ቱን |ቲ ብ|ዊ ው| ምጥ| መሪ|፣ ም| ምግ|ቱ ወ| ንብ|ር ን|ባር |ምስ |ጉጅለ| ጉጅ|ሕን | ፍት|ን ፍ|ሓዳር| ሓዳ|ንን |ቱ ክ|ገልግ|ተግባ| ተግ|ቡራት|ሕቡራ| ሕቡ|ድብ |ውድብ| ውድ|ዚ መ|ሕታት"
    },
    Hebrew: {
      heb: "ות |ים |כל | כל|דם |אדם| זכ|ל א|יות| אד|ת ה|י ל|כאי|אי |זכא| של|לא | ול|ל ה|ית |של |רות|או | או|ת ו|ם ז| לא|ויו|ין |ירו|זכו|רה | לה|ת ל|ת ש|ם ל| המ|ון |ו ב| וה|ה ש| הח|ו ל|ותי|חיר|תו |יים|ת ב|נה |את |ה ה|ת א| וב| במ|וך |ת כ|על |א י|לה |ה א|יה | את|דה | על|ם ו|ם ב|ני |ו כ| שו| שה|כות|ה כ|כוי| לב|בוד|בות|ם ה|בחי| בי|נות|ה ל| הא|אומ|ה ב|ה ו|החי|לית|ירה|ת מ|ינו| לע|ן ש|ה מ|לאו|מי |פלי|וה |שוו|ן ו|חינ|ו א|ו ו| הכ|חוק|החו|י ה|ם א|דות|לו |בין|עה | אח|ליה| לפ|ן ל| חו| בנ|נוך|ופש|חופ|ור |וד |הגנ|וק | בכ|ילי| יה| הז|י ו| הי|וא |אלי|ו ה|פי |ולה|ומי|ל מ| הפ|וצי|ך ה|ן ב|ואי|רך |חות|אין|רצו|רבו|ם ש|ליל|יו |שוא| למ|ר א|ן ה| הד| בח|ווה|להג|פני|היה| לח| לו|יבו|לת |נתו| הו|מדי|לל |אחר|ה פ|יא |היא|ללא|זו |הכר| בה|רוי| אי|נו |תיה|דו |בני|ל ב|עבו|יאל|ציא|סוצ| סו|ודה| חי|שית|פשי|דרך| דר|הן | הע|חה | בש|וי |תוך|מעש|גנה|הכל|שיו|משפ| עב|יהי|לחי|גבל|שרי| שר|מנו|י ש|דינ| יו| מע|חבר|שהי| זו|זה |איש|לפי|הם |ם נ|י א|כלל|עות|נשו|ותו|יהן|גוד|יפו|א ב|ארצ| אר|כבו| בז|שה |שות|ק ב| פל|תיו|ריר|והח|סוד|יסו|ת ז|רים|עם |ל ז|אים|ום |ולא| לכ|ישי|ן א|הזכ|ם י|הגב| הג|ונו|ובי|הוא|תה |המד|ד א|ידה| לי|תי |א ל|פול| לש|הפל|א ה| לל|ה ז| שנ|חרו| בת|ם כ| בע| וש|שר |ובח|השת|ידי| הר|בור|ציב| אמ|ברה|עית|ה ח|הנש| הנ|רחו|זרח|אזר|וחד|מות",
      ydd: " פֿ|ער |ון |ט א|דער| אַ|ן א| או|אַר|און| אױ|ען |ן פ| אי|פֿו|רעכ| רע|עכט|ֿון|ױף |אױף|פֿא| דע|כט |אַ | זײ|זײַ| גע|אָס|ונג|ֿאַ| הא|האָ|ן ד| אָ|ַן | די|אַל|װאָ| װא|נג |אַנ|ניט|אָט|די |ײַן|ָט |אָל|יט |עדע|יעד| יע|ן ז|אָר|רײַ|ָס |מען|באַ| מע| בא|נאַ|טן |זאָ|ַ ר|אָד|ר א|ין |אין|פֿר|ן ג|ר ה|ן װ|ֿרײ|ָדע|יז | זא| צו|ע א|אַצ|איז|ַצי|ַנד|ײַנ|לעכ| פּ|ַפֿ|אַפ| ני| װע|ײט |עזע|געז|טער|ראַ|ָל |אָנ|לאַ|פֿט|מיט|רן |דיק|לן |ן נ|ט ד|בן |ַלע|קט |טיק|שאַ| מי|ענט|ר מ|טלע|אַק|נען|ף א|כער|טאָ|ערע|יע |ַנע|רונ|עכע|יק | דא|יקע|ַרב|יט־|סער|הײט|ַהײ|ײַה|לע |ן ב| זי|ן מ|פּר|גן |עם |ר ג| קײ|ָר | טא|יאָ|ציא|ישע|ע פ|־אי|ט־א|־ני|טאַ|מענ|נגע|אױס|פֿע|דאָ|ן ק|ר פ|עט |ָנא|ר־נ|ער־|ָסע|ציע|ט פ|צו |ג א|ט צ|יקט|יך |זיך|נד |קן |לײַ| גל|װער|זעל|קײט|אָב|קע |כע |יקן| צי|ײנע|ענע|ערן| נא|נדע|נטע|ר ד|ֿט |ן י|ף פ|גען|דור|ס א|ן ל|ן ה|ט װ| שו|עס |ס ז|פּע| לא|קער|אַט|יטע|רע |שע |ונט|ַרא|ל ז|גלײ|לשא|עלש|בעט| דו|עפֿ|כן |שן |ים |שטע|ן ש|נעם|קײנ|אָפ|נט |טעט|ליט| שט|ײטן|ר װ|נטש|רבע|יונ|רך |ורך|ערצ|י פ|רעס| גר|ײַכ|ראָ|ג פ|צי |ם ט|רענ|ק א|ָפּ|לער|אינ|רעל|ֿאָ|ע ר|י א|ַרע|ר ז| כּ|ך א|ציו|רצי|ג ז|ר ב| מא|עמע|צן |נעמ|שפּ|אַן|נטל|ָבן|ַקט|ן צ|גער|ערי| קע|ן ע|עץ |זעץ|לױט| לױ| װי|ם א|אים|ום |טרא|פֿן|ַרז|אומ|מאָ| קו|ַלי|פּא|ליג|ז א|קלא|ף ד|ערש|פֿי|אַש"
    }
  },
  qv = 2048,
  Uv = 10,
  Qh = 300,
  Oo = {}.hasOwnProperty;
let ri;
const Fo = {};
for (ri in Ts)
  if (Oo.call(Ts, ri)) {
    const t = Ts[ri];
    let e;
    Fo[ri] = {};
    for (e in t)
      if (Oo.call(t, e)) {
        const a = t[e].split("|"),
          n = {};
        let i = a.length;
        for (; i--;) n[a[i]] = i;
        Fo[ri][e] = n
      }
  }
function Vv(t, e) {
  return Hv(t, e)[0][0]
}

function Hv(t, e = {}) {
  const a = [...e.whitelist || [], ...e.only || []],
    n = [...e.blacklist || [], ...e.ignore || []],
    i = e.minLength !== null && e.minLength !== void 0 ? e.minLength : Uv;
  if (!t || t.length < i) return pr();
  t = t.slice(0, qv);
  const o = Gv(t, Nv);
  return !o[0] || !(o[0] in Fo) ? !o[0] || o[1] === 0 || !em(o[0], a, n) ? pr() : tm(o[0]) : Wv(t, Yv(Lv(t), Fo[o[0]], a, n))
}

function Wv(t, e) {
  const a = e[0][1],
    n = t.length * Qh - a;
  let i = -1;
  for (; ++i < e.length;) e[i][1] = 1 - (e[i][1] - a) / n || 0;
  return e
}

function Gv(t, e) {
  let a = -1,
    n, i;
  for (i in e)
    if (Oo.call(e, i)) {
      const o = Kv(t, e[i]);
      o > a && (a = o, n = i)
    } return [n, a]
}

function Kv(t, e) {
  const a = t.match(e);
  return (a ? a.length : 0) / t.length || 0
}

function Yv(t, e, a, n) {
  e = Xv(e, a, n);
  const i = [];
  let o;
  if (e)
    for (o in e) Oo.call(e, o) && i.push([o, Zv(t, e[o])]);
  return i.length === 0 ? pr() : i.sort(Jv)
}

function Zv(t, e) {
  let a = 0,
    n = -1;
  for (; ++n < t.length;) {
    const i = t[n];
    let o = Qh;
    i[0] in e && (o = i[1] - e[i[0]] - 1, o < 0 && (o = -o)), a += o
  }
  return a
}

function Xv(t, e, a) {
  if (e.length === 0 && a.length === 0) return t;
  const n = {};
  let i;
  for (i in t) em(i, e, a) && (n[i] = t[i]);
  return n
}

function em(t, e, a) {
  return e.length === 0 && a.length === 0 ? !0 : (e.length === 0 || e.includes(t)) && !a.includes(t)
}

function pr() {
  return tm("und")
}

function tm(t) {
  return [
    [t, 1]
  ]
}

function Jv(t, e) {
  return t[1] - e[1]
}
const Qv = "zh-CN",
  ew = "es-ES",
  tw = "en-US",
  aw = "ru-RU",
  nw = "ar-SA",
  iw = "bn-BD",
  ow = "hi-IN",
  sw = "pt-PT",
  rw = "id-ID",
  lw = "ja-JP",
  uw = "fr-FR",
  dw = "de-DE",
  cw = "jv-ID",
  hw = "ko-KR",
  mw = "te-IN",
  fw = "vi-VN",
  gw = "mr-IN",
  pw = "it-IT",
  kw = "ta-IN",
  bw = "tr-TR",
  yw = "ur-PK",
  vw = "gu-IN",
  ww = "pl-PL",
  _w = "uk-UA",
  xw = "kn-IN",
  jw = "mai-IN",
  Ew = "ml-IN",
  Cw = "fa-IR",
  zw = "my-MM",
  Sw = "sw-KE",
  Tw = "su-ID",
  Aw = "ro-RO",
  Dw = "pa-IN",
  Ow = "bho-IN",
  Fw = "am-ET",
  Pw = "ha-NG",
  Rw = "ff-NG",
  Iw = "bs-BA",
  $w = "hr-HR",
  Mw = "nl-NL",
  Lw = "sr-RS",
  Bw = "th-TH",
  Nw = "ku-IQ",
  qw = "yo-NG",
  Uw = "uz-UZ",
  Vw = "ms-MY",
  Hw = "ig-NG",
  Ww = "ne-NP",
  Gw = "ceb-PH",
  Kw = "skr-PK",
  Yw = "tl-PH",
  Zw = "hu-HU",
  Xw = "az-AZ",
  Jw = "si-LK",
  Qw = "kv-RU",
  e_ = "el-GR",
  t_ = "cs-CZ",
  a_ = "mag-IN",
  n_ = "rn-BI",
  i_ = "be-BY",
  o_ = "mg-MG",
  s_ = "qu-EC",
  r_ = "mad-ID",
  l_ = "ny-MW",
  u_ = "za-CN",
  d_ = "ps-AF",
  c_ = "rw-RW",
  h_ = "zu-ZA",
  m_ = "bg-BG",
  f_ = "sv-SE",
  g_ = "ln-CD",
  p_ = "so-SO",
  k_ = "hmn-CN",
  b_ = "hmn-LA",
  y_ = "ilo-PH",
  v_ = "kk-KZ",
  w_ = "ug-CN",
  __ = "ht-HT",
  x_ = "km-KH",
  j_ = "fa-AF",
  E_ = "hil-PH",
  C_ = "sn-ZW",
  z_ = "tt-RU",
  S_ = "xh-ZA",
  T_ = "hy-AM",
  A_ = "min-ID",
  D_ = "af-ZA",
  O_ = "lua-CD",
  F_ = "sat-IN",
  P_ = "bo-CN",
  R_ = "ti-ER",
  I_ = "fi-FI",
  $_ = "sk-SK",
  M_ = "tk-TM",
  L_ = "da-DK",
  B_ = "nb-NO",
  N_ = "suk-TZ",
  q_ = "sq-AL",
  U_ = "sg-CF",
  V_ = "nn-NO",
  H_ = "he-IL",
  W_ = "mos-BF",
  G_ = "tg-TJ",
  K_ = "ca-ES",
  Y_ = "st-ZA",
  Z_ = "ka-GE",
  X_ = "bcl-PH",
  J_ = "gl-ES",
  Q_ = "lo-LA",
  e1 = "lt-LT",
  t1 = "umb-AO",
  a1 = "tn-BW",
  n1 = "vec-IT",
  i1 = "nso-ZA",
  o1 = "ban-ID",
  s1 = "bug-ID",
  r1 = "kr-NE",
  l1 = "kg-CG",
  u1 = "ibb-NG",
  d1 = "lg-UG",
  c1 = "ace-ID",
  h1 = "bm-ML",
  m1 = "tzm-MA",
  f1 = "yi-IL",
  g1 = "kmb-AO",
  p1 = "lun-ZM",
  k1 = "shn-MM",
  b1 = "war-PH",
  y1 = "dyu-BF",
  v1 = "wo-SN",
  w1 = "ky-KG",
  _1 = "nds-DE",
  x1 = "ff-GN",
  j1 = "mk-MK",
  E1 = "vmw-MZ",
  C1 = "zgh-MA",
  z1 = "ee-GH",
  S1 = "mn-MN",
  T1 = "sl-SI",
  A1 = "ay-PE",
  D1 = "bem-ZM",
  O1 = "man-GM",
  F1 = "bci-CI",
  P1 = "bum-CM",
  R1 = "eo-XX",
  I1 = "pam-PH",
  $1 = "tiv-NG",
  M1 = "tpi-PG",
  L1 = "ve-ZA",
  B1 = "ss-SZ",
  N1 = "nyn-UG",
  q1 = "kbd-RU",
  U1 = "ii-CN",
  V1 = "yao-MW",
  H1 = "lv-LV",
  W1 = "qu-PE",
  G1 = "sc-IT",
  K1 = "ro-MD",
  Y1 = "sco-GB",
  Z1 = "ts-ZA",
  X1 = "men-SL",
  J1 = "fon-BJ",
  Q1 = "nah-MX",
  ex = "dip-SS",
  tx = "kde-TZ",
  ax = "kbp-TG",
  nx = "tem-SL",
  ix = "toi-ZM",
  ox = "et-EE",
  sx = "snk-ML",
  rx = "cjk-AO",
  lx = "ada-GH",
  ux = "aii-IQ",
  dx = "qu-PE",
  cx = "rom-RO",
  hx = "bin-NG",
  mx = "gaa-GH",
  fx = "ng-NA",
  gx = {
    cmn: Qv,
    spa: ew,
    eng: tw,
    rus: aw,
    arb: nw,
    ben: iw,
    hin: ow,
    por: sw,
    ind: rw,
    jpn: lw,
    fra: uw,
    deu: dw,
    jav: cw,
    kor: hw,
    tel: mw,
    vie: fw,
    mar: gw,
    ita: pw,
    tam: kw,
    tur: bw,
    urd: yw,
    guj: vw,
    pol: ww,
    ukr: _w,
    kan: xw,
    mai: jw,
    mal: Ew,
    pes: Cw,
    mya: zw,
    swh: Sw,
    sun: Tw,
    ron: Aw,
    pan: Dw,
    bho: Ow,
    amh: Fw,
    hau: Pw,
    fuv: Rw,
    bos: Iw,
    hrv: $w,
    nld: Mw,
    srp: Lw,
    tha: Bw,
    ckb: Nw,
    yor: qw,
    uzn: Uw,
    zlm: Vw,
    ibo: Hw,
    npi: Ww,
    ceb: Gw,
    skr: Kw,
    tgl: Yw,
    hun: Zw,
    azj: Xw,
    sin: Jw,
    koi: Qw,
    ell: e_,
    ces: t_,
    mag: a_,
    run: n_,
    bel: i_,
    plt: o_,
    qug: s_,
    mad: r_,
    nya: l_,
    zyb: u_,
    pbu: d_,
    kin: c_,
    zul: h_,
    bul: m_,
    swe: f_,
    lin: g_,
    som: p_,
    hms: k_,
    hnj: b_,
    ilo: y_,
    kaz: v_,
    uig: w_,
    hat: __,
    khm: x_,
    prs: j_,
    hil: E_,
    sna: C_,
    tat: z_,
    xho: S_,
    hye: T_,
    min: A_,
    afr: D_,
    lua: O_,
    sat: F_,
    bod: P_,
    tir: R_,
    fin: I_,
    slk: $_,
    tuk: M_,
    dan: L_,
    nob: B_,
    suk: N_,
    als: q_,
    sag: U_,
    nno: V_,
    heb: H_,
    mos: W_,
    tgk: G_,
    cat: K_,
    sot: Y_,
    kat: Z_,
    bcl: X_,
    glg: J_,
    lao: Q_,
    lit: e1,
    umb: t1,
    tsn: a1,
    vec: n1,
    nso: i1,
    ban: o1,
    bug: s1,
    knc: r1,
    kng: l1,
    ibb: u1,
    lug: d1,
    ace: c1,
    bam: h1,
    tzm: m1,
    ydd: f1,
    kmb: g1,
    lun: p1,
    shn: k1,
    war: b1,
    dyu: y1,
    wol: v1,
    kir: w1,
    nds: _1,
    fuf: x1,
    mkd: j1,
    vmw: E1,
    zgh: C1,
    ewe: z1,
    khk: S1,
    slv: T1,
    ayr: A1,
    bem: D1,
    emk: O1,
    bci: F1,
    bum: P1,
    epo: R1,
    pam: I1,
    tiv: $1,
    tpi: M1,
    ven: L1,
    ssw: B1,
    nyn: N1,
    kbd: q1,
    iii: U1,
    yao: V1,
    lvs: H1,
    quz: W1,
    src: G1,
    rup: K1,
    sco: Y1,
    tso: Z1,
    men: X1,
    fon: J1,
    nhn: Q1,
    dip: ex,
    kde: tx,
    kbp: ax,
    tem: nx,
    toi: ix,
    ekk: ox,
    snk: sx,
    cjk: rx,
    ada: lx,
    aii: ux,
    quy: dx,
    rmn: cx,
    bin: hx,
    gaa: mx,
    ndo: fx
  },
  px = {
    components: {
      EditTonesOverlay: pl,
      Combobox: xp,
      ComboboxButton: Ep,
      ComboboxInput: Cp,
      ComboboxLabel: jp,
      ComboboxOption: Sp,
      ComboboxOptions: zp,
      CheckIcon: Oc,
      ChevronDownIcon: Ek,
      ChevronUpDownIcon: Fc
    },
    data() {
      return {
        query: "",
        resultArea: "",
        coolingDownTime: 0,
        messageToUser: "",
        error: "",
        info: "",
        licenseKey: "",
        selectedTone: Ae.toneList[0],
        rewriteButtonText: "Rewrite",
        isRewriting: !1,
        api: new Le,
        showBuyButton: !1,
        toneList: Ae.toneList,
        appSettings: Ae,
        textDirection: "ltr",
        showEditTonesOverlay: !1,
        outputLanguage: Ae.outputLanguage,
        rewriteHistory: [],
        actionOptions: { 
          //Rewrite: "Rewrite",
          Rewrite: "Rewrite"
        },
        selectedAction: "Rewrite",
        showSignaturePlaceholder: !0,
        originalRewrittenText: ""
      }
    },
    async mounted() {
      Ae.loadSettings(), console.log(this.toneList), Gt.getAuthenticationSettings(), Ee.isLogin = Gt.isLogin(), Ee.isLogin || this.$router.push({
        name: "activation"
      });
      try {
        await this.api.renewToken()
      } catch {
        Ee.isLogin = Gt.isLogin()
      }
      this.selectedTone = Ae.tone, Ae.toneList.includes(this.selectedTone) || (this.selectedTone = Ae.toneList[0]);
      try {
        Ae.rewriteAtStart ? this.performActionOnText() : this.info = "You can rewrite your email by clicking on the <b>Rewrite</b> button."
      } catch (t) {
        console.error(t)
      }
    },
    methods: {
      async performActionOnText() {
        try {
          this.error = "", this.isRewriting = !0, this.rewriteButtonText = this.selectedAction == "Rewrite" ? "Rewriting..." : "Improving...", this.resultArea = "", this.messageToUser = '<i class="fa-solid fa-pen-nib"></i>&nbsp;', this.messageToUser += this.selectedAction == "Rewrite" ? " Rewriting..." : " Improving...";
          const t = await Ev(),
            e = id(t);
          if (e < 10) {
            const r = id(t);
            this.error = `Your email is too short to ${this.selectedAction.toLowerCase()}. Please return to your email and ensure you write a minimum of ten words. You have ` + r + " words.", this.messageToUser = "", this.info = "";
            return
          }
          if (this.info = "", e > 1e3) {
            this.error = `Your email is too long to ${this.selectedAction.toLowerCase()}. Please write less than 1000 words.`, this.messageToUser = "";
            return
          }
          let a = Ae.outputLanguage;
          if (a.toLowerCase() === "auto") {
            const r = Ae.languages.map(l => l.francCode);
            a = gx[Vv(t, {
              only: r
            })] || "en"
          }
          a.slice(0, 2) === "fa" || a.slice(0, 2) === "ar" ? this.textDirection = "rtl" : this.textDirection = "ltr";
          let n = this.selectedAction == "Rewrite" ? "rewrite email" : "Improve Grammar";
          const i = n == "Improve Grammar" ? "unchanged" : this.selectedTone,
            o = await jv(this.api, n, i, t, a);
          let s = await o.read();
          for (; !s.done;) {
            const r = new TextDecoder().decode(s.value);
            this.resultArea += r, s = await o.read()
          }
          this.originalRewrittenText = this.resultArea, this.messageToUser = '<i class="fa fa-check"></i>&nbsp; EMAIL GENERATION DONE!', this.rewriteHistory.push(this.originalRewrittenText)
        } catch (t) {
          if (t instanceof Error) {
            const e = t.message;
            e.includes("license") && e.includes("expired") && (this.showBuyButton = !0), this.error = e, this.messageToUser = ""
          }
        } finally {
          this.isRewriting = !1;
          let t = Object.keys(this.actionOptions).find(e => this.actionOptions[e] == this.selectedAction);
          this.error === "" ? (this.coolingDownTime = 5, this.rewriteButtonText = "Cooling down", setTimeout(() => {
            this.coolingDownTime = 0, this.selectedAction = this.actionOptions[t], this.rewriteButtonText = `${t}`
          }, 5e3)) : (this.selectedAction = this.actionOptions[t], this.rewriteButtonText = `${t}`)
        }
      },
      insert() {
        Cv(this.resultArea)
      },
      autoResize() {
        const t = this.$refs.resultArea;
        t.style.height = "auto", t.style.height = t.scrollHeight + 50 + "px", console.info("autoResize", t.scrollHeight)
      },
      changeSelectedRewrite(t) {
        if (t == "prev") {
          if (this.isFirstRewriteSelected) return;
          this.originalRewrittenText = this.rewriteHistory[this.selectedRewriteIndex - 1];
          return
        }
        if (t == "next") {
          if (this.isLastRewriteSelected) return;
          this.originalRewrittenText = this.rewriteHistory[this.selectedRewriteIndex + 1];
          return
        }
      },
      toggleSignaturePlaceholder() {
        const t = /\[[^\]]+\]$/,
          e = /\n\n.*?\n*?\[?[A-Za-z\s]+\]?\s*$/;
        if (!this.showSignaturePlaceholder && t.test(this.originalRewrittenText.trim())) {
          this.resultArea = this.originalRewrittenText.replace(e, ""), this.resultArea.trim();
          return
        }
        this.resultArea = this.originalRewrittenText, this.resultArea.trim()
      }
    },
    computed: {
      isAppReady() {
        return Ee.isAppReady
      },
      filteredTones() {
        return this.query === "" ? this.toneList : this.toneList.filter(t => t.toLowerCase().includes(this.query.toLowerCase()))
      },
      rewriteHistoryLabel() {
        return this.isRewriting ? ` ${this.rewriteHistory.length+1} / ${this.rewriteHistory.length+1} ` : ` ${this.selectedRewriteIndex+1} / ${this.rewriteHistory.length} `
      },
      isFirstRewriteSelected() {
        return this.selectedRewriteIndex == 0
      },
      isLastRewriteSelected() {
        return this.selectedRewriteIndex == this.rewriteHistory.length - 1
      },
      selectedRewriteIndex() {
        return this.rewriteHistory.indexOf(this.originalRewrittenText)
      }
    },
    watch: {
      resultArea() {
        this.$nextTick(() => {
          this.autoResize()
        })
      },
      selectedTone() {
        this.toneList.includes(this.selectedTone) || (this.selectedTone = this.toneList[0]), Ae.setTone(this.selectedTone)
      },
      showSignaturePlaceholder() {
        this.toggleSignaturePlaceholder()
      },
      originalRewrittenText() {
        this.toggleSignaturePlaceholder()
      },
      selectedAction() {
        if (this.selectedAction == "Improve Grammar") {
          this.rewriteButtonText = "> Grammar";
          return
        }
        this.rewriteButtonText = "> " + this.selectedAction
      }
    }
  };
const jl = (t, e) => {
    const a = t.__vccOpts || t;
    for (const [n, i] of e) a[n] = i;
    return a
  },
  Qo = t => (af("data-v-dbc1bc2a"), t = t(), nf(), t),
  kx = {
    class: "bg-gray-100 p-2"
  },
  bx = {
    class: "home-wrapper"
  },
  yx = {
    class: "relative mt-2"
  },
  vx = Qo(() => m("span", {
    class: "block truncate"
  }, " + Add Tone ", -1)),
  wx = Qo(() => m("span", {
    class: "absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600"
  }, null, -1)),
  _x = [vx, wx],
  xx = ["disabled"],
  jx = {
        class: "relative mt-1"
    },
  Ex = {
    class: "flex justify-between mt-3 mr-3"
  },
  Cx = {
    class: "flex items-center"
  },
  zx = ["disabled"],
  Sx = Qo(() => m("label", {
    class: "ml-2 text-sm text-gray-900",
    for: "add-signature"
  }, "", -1)),
  Tx = {
    class: "flex items-center text-sm"
  },
  Ax = ["disabled"],
  Dx = {
    class: "mx-0.5 text-gray-500"
  },
  Ox = ["disabled"],
  Fx = {
    id: "sideload-msg",
    class: "ms-welcome__main"
  },
  Px = Qo(() => m("div", {
    class: "ms-font-xl"
  }, [_e(" We are having trouble loading your NEURespond. If this issue insist please email us: "), m("a", {
    target: "_blank",
    href: "mailto:support@professionallyapp.com"
  }, "support@professionallyapp.com")], -1)),
  Rx = [Px],
  Ix = {
    id: "app-body",
    class: "ms-welcome__main"
  },
  $x = {
    id: "rewrite",
    class: "flex w-full justify-center flex-col"
  },
  Mx = ["innerHTML"],
  Lx = ["innerHTML"],
  Bx = ["innerHTML"],
  Nx = {
    class: "rounded bg-primary-600 px-2 py-1 text-sm font-semibold text-white text-center cursor-pointer shadow-sm hover:bg-opacity-90",
    target: "_blank",
    href: "https://professionally.ai/pages/pricing"
  },
  qx = ["lang", "dir"];

function Ux(t, e, a, n, i, o) {
  const s = xt("ComboboxLabel"),
    r = xt("ComboboxInput"),
    l = xt("ChevronUpDownIcon"),
    u = xt("ComboboxButton"),
    d = xt("CheckIcon"),
    c = xt("ComboboxOption"),
    h = xt("ComboboxOptions"),
    f = xt("Combobox"),
    p = xt("ChevronDownIcon"),
    g = pl;
  return H(), ee("div", null, [m("div", kx, [m("div", bx, [m("div", null, [D(f, {
    modelValue: i.selectedTone,
    "onUpdate:modelValue": e[2] || (e[2] = k => i.selectedTone = k),
    as: "div"
  }, {
    default: K(() => [D(s, {
      class: "block text-sm font-medium leading-6 text-gray-900"
    }, {
      default: K(() => [_e(" Select your tone ")]),
      _: 1
    }), m("div", yx, [D(r, {
      class: "w-36 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6",
      readonly: true,
      onChange: e[0] || (e[0] = k => i.query = k.target.value)
    }), D(u,  {
      class: "absolute inset-y-0 right-0 flex items-center rounded-md px-2 focus:outline-none"
  }, {
      default: K(() => [D(l, {
        class: "h-5 w-5 text-gray-400",
        "aria-hidden": "true"
      })]),
      _: 1
    }), o.filteredTones.length > 0 ? (H(), wt(h, {
      key: 0,
      class: "absolute z-10 mt-1 max-h-60 w-full min-w-fit overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
    }, {
      default: K(() => [(H(!0), ee(Ge, null, kn(o.filteredTones, k => (H(), wt(c, {
        key: k,
        value: k,
        as: "template"
      }, {
        default: K(({
          active: w,
          selected: y
        }) => [m("li", {
          class: fe(["relative cursor-default select-none py-2 pl-3 pr-9", w ? "bg-primary-600 text-white" : "text-gray-900"])
        }, [m("span", {
          class: fe(["block truncate", y && "font-semibold"])
        }, be(k), 3), y ? (H(), ee("span", {
          key: 0,
          class: fe(["absolute inset-y-0 right-0 flex items-center pr-4", w ? "text-white" : "text-primary-600"])
        }, [D(d, {
          class: "h-5 w-5",
          "aria-hidden": "true"
        })], 2)) : Fe("", !0)], 2)]),
        _: 2
      }, 1032, ["value"]))), 128)), D(c, null, {
        default: K(() => [m("li", {
          class: "relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-primary-600 hover:text-white",
          onClick: e[1] || (e[1] = k => i.showEditTonesOverlay = !0)
        }, _x)]),
        _: 1
      })]),
      _: 1
    })) : Fe("", !0)])]),
    _: 1
  }, 8, ["modelValue"])]), m("div", {
    role: "button",
    class: fe(["flex justify-center rounded-md bg-primary-600 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600", {
      "cool-down-animation": i.coolingDownTime,
      "text-xs": i.coolingDownTime || i.isRewriting
    }])
  }, [m("button", {
    class: "px-2 py-1.5",
    disabled: i.isRewriting || i.coolingDownTime > 0,
    onClick: e[3] || (e[3] = (...k) => o.performActionOnText && o.performActionOnText(...k))
  }, be(i.rewriteButtonText), 9, xx), D(f, {
    modelValue: i.selectedAction,
    "onUpdate:modelValue": e[4] || (e[4] = k => i.selectedAction = k),
    disabled: i.isRewriting || i.coolingDownTime > 0
  }, {
    default: K(() => [m("div", jx, [D(u, {
      class: "items-center rounded-md px-1 py-1.5 focus:outline-none",
      disabled: i.isRewriting || i.coolingDownTime > 0
    }, {
      default: K(() => [D(p, {
        class: "h-5 w-5 cursor-pointer",
        "aria-hidden": "true"
      })]),
      _: 1
    }, 8, ["disabled"]), D(h, {
      class: "absolute right-1 mt-0.5 z-10 max-h-60 w-full min-w-fit overflow-auto rounded-md bg-white shadow-lg font-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
    }, {
      default: K(() => [(H(!0), ee(Ge, null, kn(i.actionOptions, (k, w) => (H(), wt(c, {
        key: w,
        value: k,
        as: "template"
      }, {
        default: K(({
          active: y,
          selected: j
        }) => [m("li", {
          class: fe(["relative cursor-default select-none py-2 pl-3 pr-9", y ? "bg-primary-600 text-white" : "text-gray-900"])
        }, [m("span", {
          class: fe(["block truncate", j && "font-semibold"])
        }, be(k), 3), j ? (H(), ee("span", {
          key: 0,
          class: fe(["absolute inset-y-0 right-0 flex items-center pr-4", y ? "text-white" : "text-primary-600"])
        }, [D(d, {
          class: "h-5 w-5",
          "aria-hidden": "true"
        })], 2)) : Fe("", !0)], 2)]),
        _: 2
      }, 1032, ["value"]))), 128))]),
      _: 1
    })])]),
    _: 1
  }, 8, ["modelValue", "disabled"])], 2)]), m("div", Ex, [m("div", Cx), le(m("div", Tx, [m("button", {
    class: fe(["text-gray-500", {
      "cursor-not-allowed": o.isFirstRewriteSelected || i.isRewriting
    }]),
    disabled: i.isRewriting,
    onClick: e[6] || (e[6] = k => o.changeSelectedRewrite("prev"))
  }, " < ", 10, Ax), m("span", Dx, be(o.rewriteHistoryLabel), 1), m("button", {
    class: fe(["text-gray-500", {
      "cursor-not-allowed": o.isLastRewriteSelected || i.isRewriting
    }]),
    disabled: i.isRewriting,
    onClick: e[7] || (e[7] = k => o.changeSelectedRewrite("next"))
  }, " > ", 10, Ox)], 512), [
    [ke, i.rewriteHistory.length > 1]
  ])])]), le(m("section", Fx, Rx, 512), [
    [ke, !o.isAppReady]
  ]), le(m("main", Ix, [m("div", $x, [m("h2", {
    id: "top-message-bar",
    class: "text-lg flex flex-row justify-center items-center",
    innerHTML: i.messageToUser
  }, null, 8, Mx), le(m("div", {
    id: "error",
    class: "bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 text-sm",
    innerHTML: i.error
  }, null, 8, Lx), [
    [ke, i.error.length]
  ]), le(m("div", {
    id: "info",
    class: "bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 text-sm",
    innerHTML: i.info
  }, null, 8, Bx), [
    [ke, i.info.length]
  ]), le(m("a", Nx, " Buy Now ", 512), [
    [ke, i.showBuyButton]
  ]), le(m("button", {
    class: "rounded bg-primary-50 px-2 py-1 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-100",
    onClick: e[8] || (e[8] = (...k) => o.insert && o.insert(...k))
  }, " Insert to email ", 512), [
    [ke, !i.isRewriting && i.resultArea.length]
  ]), le(m("textarea", {
    id: "result-area",
    ref: "resultArea",
    "onUpdate:modelValue": e[9] || (e[9] = k => i.resultArea = k),
    readonly: "",
    lang: i.outputLanguage,
    dir: i.textDirection
  }, null, 8, qx), [
    [Lt, i.resultArea]
  ])])], 512), [
    [ke, o.isAppReady]
  ]), D(g, {
    "is-open": i.showEditTonesOverlay,
    onClose: e[10] || (e[10] = k => i.showEditTonesOverlay = !1)
  }, null, 8, ["is-open"])])
}
const Vx = jl(px, [
    ["render", Ux],
    ["__scopeId", "data-v-dbc1bc2a"]
  ]),
  Hx = m("div", {
    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  }, null, -1),
  Wx = {
    class: "fixed inset-0 z-10 overflow-y-auto"
  },
  Gx = {
    class: "flex items-end justify-center p-4 text-center sm:items-center sm:p-0"
  },
  Kx = {
    class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
  },
  Yx = {
    class: "mt-3 text-center sm:mt-5"
  },
  Zx = m("hr", {
    class: "mt-2"
  }, null, -1),
  Xx = ["innerHTML"],
  am = ge({
    __name: "general-message-overlay",
    props: {
      title: {},
      message: {},
      open: {
        type: Boolean
      },
      closeButtonTitle: {}
    },
    emits: ["close"],
    setup(t, {
      emit: e
    }) {
      const a = t,
        n = e;
      return (i, o) => (H(), wt(F(_a), {
        as: "template",
        show: a.open
      }, {
        default: K(() => [D(F(Wa), {
          as: "div",
          class: "relative z-10",
          onClose: o[1] || (o[1] = s => n("close"))
        }, {
          default: K(() => [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: K(() => [Hx]),
            _: 1
          }), m("div", Wx, [m("div", Gx, [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            default: K(() => [D(F(Ga), {
              class: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            }, {
              default: K(() => [m("div", null, [m("div", Kx, [D(F(vk), {
                class: "h-12 w-12 text-green-600",
                "aria-hidden": "true"
              })]), m("div", Yx, [D(F(da), {
                as: "h3",
                class: "text-base font-semibold leading-6 text-gray-900"
              }, {
                default: K(() => [_e(be(a.title), 1)]),
                _: 1
              }), Zx, m("div", null, [m("div", {
                class: "relative mt-2 text-sm",
                innerHTML: a.message
              }, null, 8, Xx), m("div", null, [le(m("button", {
                type: "button",
                class: "mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm",
                onClick: o[0] || (o[0] = s => n("close"))
              }, be(a.closeButtonTitle), 513), [
                [ke, a.closeButtonTitle]
              ])])])])])]),
              _: 1
            })]),
            _: 1
          })])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["show"]))
    }
  });
let io;
const Jx = new Uint8Array(16);

function Qx() {
  if (!io && (io = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !io)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return io(Jx)
}
const lt = [];
for (let t = 0; t < 256; ++t) lt.push((t + 256).toString(16).slice(1));

function ej(t, e = 0) {
  return lt[t[e + 0]] + lt[t[e + 1]] + lt[t[e + 2]] + lt[t[e + 3]] + "-" + lt[t[e + 4]] + lt[t[e + 5]] + "-" + lt[t[e + 6]] + lt[t[e + 7]] + "-" + lt[t[e + 8]] + lt[t[e + 9]] + "-" + lt[t[e + 10]] + lt[t[e + 11]] + lt[t[e + 12]] + lt[t[e + 13]] + lt[t[e + 14]] + lt[t[e + 15]]
}
const tj = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  nd = {
    randomUUID: tj
  };

function nm(t, e, a) {
  if (nd.randomUUID && !e && !t) return nd.randomUUID();
  t = t || {};
  const n = t.random || (t.rng || Qx)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    a = a || 0;
    for (let i = 0; i < 16; ++i) e[a + i] = n[i];
    return e
  }
  return ej(n)
}
const aj = {
    components: {
      CheckCircleIcon: co,
      ExclamationCircleIcon: ho
    },
    props: ["P_authInProgress", "P_parentName"],
    data() {
      return {
        userFirstName: "",
        userLastName: "",
        api: null,
        authInProgress: !1,
        showEmailConsentPopUp: !1,
        showProfileDetailsPopUp: !1,
        selectedLoginService: "",
        isSubscribedToMarketingEmails: !0,
        isUserFromEU: !1,
        authCreds: {
          code: "",
          clientId: "",
          redirectUrl: ""
        }
      }
    },
    mounted() {
      this.api = new Le, Zh().then(t => {
        t && (this.isUserFromEU = !0, this.isSubscribedToMarketingEmails = !1)
      })
    },
    computed: {
      signingInProgress() {
        return this.P_authInProgress || this.authInProgress
      },
      isEmailConsentRequired() {
        return this.isUserFromEU && this.P_parentName == "sign-up"
      }
    },
    methods: {
      initSocialLogin(t) {
        if (this.selectedLoginService = t, this.isEmailConsentRequired) {
          this.showEmailConsentPopUp = !0;
          return
        }
        this.callLogin(!0)
      },
      callLogin() {
        this.authInProgress = !0, this.showEmailConsentPopUp = !1, this.$emit("toggle-loading", !0), this.$emit("error", ""), this.authCreds.code = "";
        let t = null,
          e = "",
          a = El();
        switch (this.selectedLoginService) {
          case "google":
            this.authCreds.clientId = "248211854573-650vodtqbpdb22iq16uadv01th5m0en2.apps.googleusercontent.com", this.authCreds.redirectUrl = "https://outlook.professionallyapp.com", e = "https://accounts.google.com/o/oauth2/auth", e += `?client_id=${this.authCreds.clientId}`, e += `&redirect_uri=${this.authCreds.redirectUrl}`, e += "&scope=email%20profile&response_type=code", t = this.handleGoogleSuccessResponse;
            break;
          case "microsoft":
            this.authCreds.clientId = "425aca6b-ff18-42de-96c9-a463b2eb63c8", this.authCreds.redirectUrl = "https://outlook.professionallyapp.com/index.html", e = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", e += `?client_id=${this.authCreds.clientId}`, e += `&redirect_uri=${this.authCreds.redirectUrl}`, e += "&response_type=token&scope=user.read openid profile offline_access", t = this.handleMicrosoftSuccessResponse;
            break;
          case "apple":
            this.authCreds.clientId = "com.professionallyapp.applelogin", this.authCreds.redirectUrl = "https://outlook.professionallyapp.com/", e = "https://appleid.apple.com/auth/authorize", e += `?client_id=${this.authCreds.clientId}`, e += `&redirect_uri=${this.authCreds.redirectUrl}`, e += "&response_mode=fragment&response_type=code%20id_token", t = this.handleAppleSuccessResponse;
            break
        }
        if (a == "chrome" || a == "edge") {
          const n = (o, s) => {
              o && s.isWindowClosing && this.authCreds.code.length == 0 && this.handleAuthFailure("Oops! An issue while logging in. Please refresh and try again later."), chrome.tabs.onRemoved.removeListener(n), chrome.webNavigation.onDOMContentLoaded.removeListener(i)
            },
            i = o => {
              const s = o.url,
                r = o.tabId;
              s && s.startsWith(this.authCreds.redirectUrl) && (t(s), chrome.tabs.remove(r), chrome.webNavigation.onDOMContentLoaded.removeListener(i))
            };
          chrome.windows.create({
            url: e,
            type: "popup",
            width: 500,
            height: 400
          }, () => {
            chrome.webNavigation.onDOMContentLoaded.addListener(i, {
              url: [{
                schemes: ["http", "https"]
              }]
            }), chrome.tabs.onRemoved.addListener(n)
          })
        } else a == "safari" && browser.windows.create({
          url: e,
          type: "popup",
          width: 500,
          height: 400
        }, n => {
          const o = setInterval(() => {
            if (!n || !n.tabs || n.tabs.length < 0) {
              this.handleAuthFailure("Oops! An issue while logging in. Please refresh and try again later."), clearInterval(o);
              return
            }
            browser.tabs.query({
              windowId: n.id
            }, s => {
              s.length > 0 ? s.forEach(r => {
                let l = r.url;
                if (l.startsWith(this.authCreds.redirectUrl)) {
                  clearInterval(o), t(l), browser.windows.remove(n.id);
                  return
                }
              }) : (this.handleAuthFailure("Oops! An issue while logging in. Please refresh and try again later."), clearInterval(o))
            })
          }, 1e3)
        })
      },
      handleGoogleSuccessResponse(t) {
        if (chrome.runtime.lastError || !t) {
          this.handleAuthFailure("Oops! An issue while logging in with Google. Please refresh and try again later.");
          return
        }
        const e = new URLSearchParams(new URL(t).search).get("code");
        this.authCreds.code = e, this.authApiCall()
      },
      handleMicrosoftSuccessResponse(t) {
        if (chrome.runtime.lastError || !t) {
          this.handleAuthFailure("Oops! An issue while logging in with Microsoft. Please refresh and try again later.");
          return
        }
        const a = new URLSearchParams(new URL(t).hash.substring(1)).get("access_token");
        this.authCreds.code = a, this.authApiCall()
      },
      handleAppleSuccessResponse(t) {
        if (chrome.runtime.lastError || !t) {
          this.handleAuthFailure("Oops! An issue while logging in with Apple. Please refresh and try again later.");
          return
        }
        const e = new URLSearchParams(new URL(t).hash.substring(1)),
          a = e.get("id_token");
        this.userFirstName = e.get("first_name") || " ", this.userLastName = e.get("last_name") || " ", this.authCreds.code = a, this.authApiCall()
      },
      async authApiCall() {
        try {
          const t = rm(),
            e = nm(),
            a = await this.api.socialSignIn(this.selectedLoginService, this.authCreds.code, this.authCreds.clientId, e, t, this.isSubscribedToMarketingEmails, this.userFirstName, this.userLastName, this.authCreds.redirectUrl);
          if (a.token && a.refreshToken) {
            if (Gt.setAuthenticationSettings({
                token: a.token.token,
                tokenExpiresIn: a.token.expiresIn,
                refreshToken: a.refreshToken.token,
                refreshTokenExpiresIn: a.refreshToken.expiresIn,
                deviceId: e
              }), this.selectedLoginService == "apple") {
              this.api = new Le;
              const n = await this.api.getUserInfo();
              if (n.firstName.length < 2 || n.lastName.length < 2) {
                this.userFirstName = "", this.userLastName = "", this.showProfileDetailsPopUp = !0, this.$emit("toggle-user-info-modal-state", !0);
                return
              }
            }
            this.loginAndRedirectToHome()
          }
        } catch {
          this.handleAuthFailure("Oops! An issue occurred while logging in. Please refresh and try again later.")
        } finally {
          this.showProfileDetailsPopUp == !1 && (this.authCreds.code = "", this.authInProgress = !1, this.$emit("toggle-loading", !1))
        }
      },
      async updateUserProfile() {
        this.showProfileDetailsPopUp = !1, this.$emit("toggle-user-info-modal-state", !1);
        try {
          await this.api.updateUserProfile(this.userFirstName, this.userLastName)
        } catch {
          this.handleAuthFailure("Oops! An issue occurred while updating profile details.")
        } finally {
          this.authCreds.code = "", this.authInProgress = !1, this.$emit("toggle-loading", !1), this.loginAndRedirectToHome()
        }
      },
      loginAndRedirectToHome() {
        Ee.isLogin = !0, es.push({
          name: "home"
        })
      },
      handleAuthFailure(t) {
        this.authCreds.code = "", this.authInProgress = !1, this.$emit("error", t), this.$emit("toggle-loading", !1)
      },
      isNameValid(t) {
        return t.length > 3
      }
    }
  },
  nj = "/assets/google-logo-4a7937da.svg",
  ij = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsSAAALEgHS3X78AAAAVElEQVQ4jWP8//8/A7UBC8i8z4HKBE3mXX+XsWE3I0F1Da7/GZmo7kwGBoZRQ0cNpTKgXY5iXPqBoMn/owUYGXYRzlEMbqM5atTQoWEo9XMUAwMDAGSOGCOVddy/AAAAAElFTkSuQmCC",
  oj = "/assets/apple-logo-d4e97802.svg",
  sj = {
    class: "mt-2"
  },
  rj = ["disabled"],
  lj = m("span", {
    class: "absolute ml-3"
  }, [m("img", {
    src: nj
  })], -1),
  uj = m("span", {
    class: "text-gray-700 w-full text-center"
  }, "Continue with Google", -1),
  dj = [lj, uj],
  cj = ["disabled"],
  hj = m("img", {
    src: ij,
    class: "h-4 w-4 absolute ml-3"
  }, null, -1),
  mj = m("span", {
    class: "text-gray-700 w-full text-center ml-3"
  }, "Continue with Microsoft", -1),
  fj = [hj, mj],
  gj = ["disabled"],
  pj = m("img", {
    src: oj,
    class: "h-4 w-4 absolute ml-3"
  }, null, -1),
  kj = m("span", {
    class: "text-gray-700 w-full text-center -ml-1"
  }, " Continue with Apple ", -1),
  bj = [pj, kj],
  yj = {
    key: 0,
    class: "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10"
  },
  vj = {
    class: "bg-white p-8 rounded shadow-lg max-w-md"
  },
  wj = m("h2", {
    class: "mb-4 font-semibold"
  }, "Profile Details", -1),
  _j = {
    class: "mb-2"
  },
  xj = {
    class: "relative mt-2 rounded-md shadow-sm"
  },
  jj = {
    class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
  },
  Ej = {
    class: "relative mt-2 rounded-md shadow-sm"
  },
  Cj = {
    class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
  },
  zj = {
    class: "flex justify-center mt-4"
  },
  Sj = ["disabled"],
  Tj = {
    key: 1,
    class: "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10"
  },
  Aj = {
    class: "bg-white p-8 rounded shadow-lg max-w-md"
  },
  Dj = m("h2", {
    class: "mb-4 font-semibold"
  }, "Important", -1),
  Oj = {
    class: "relative flex items-start"
  },
  Fj = {
    class: "flex h-6 items-center"
  },
  Pj = m("div", {
    class: "ml-3 text-sm leading-6"
  }, [m("label", {
    for: "email-consent",
    class: "text-black cursor-pointer"
  }, [m("p", {
    class: "text-xs text-left"
  }, " I want to receive promotional emails, including product updates, special offers.")])], -1),
  Rj = {
    class: "flex justify-center mt-4"
  };

function Ij(t, e, a, n, i, o) {
  const s = xt("ExclamationCircleIcon"),
    r = xt("CheckCircleIcon");
  return H(), ee("div", sj, [m("button", {
    onClick: e[0] || (e[0] = l => o.initSocialLogin("google")),
    class: fe(["border w-full h-9 rounded-md flex items-center relative mb-2", {
      "cursor-not-allowed opacity-50": o.signingInProgress
    }]),
    disabled: o.signingInProgress
  }, dj, 10, rj), m("button", {
    class: fe(["border w-full h-9 rounded-md flex items-center relative mb-2", {
      "cursor-not-allowed opacity-50": o.signingInProgress
    }]),
    disabled: o.signingInProgress,
    onClick: e[1] || (e[1] = l => o.initSocialLogin("microsoft"))
  }, fj, 10, cj), m("button", {
    onClick: e[2] || (e[2] = l => o.initSocialLogin("apple")),
    class: fe(["border w-full h-9 rounded-md flex items-center relative mb-2", {
      "cursor-not-allowed opacity-50": o.signingInProgress
    }]),
    disabled: o.signingInProgress
  }, bj, 10, gj), i.showProfileDetailsPopUp ? (H(), ee("div", yj, [m("div", vj, [wj, m("div", _j, [m("div", xj, [le(m("input", {
    "onUpdate:modelValue": e[3] || (e[3] = l => i.userFirstName = l),
    type: "text",
    name: "first-name",
    class: fe(["w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset xs:text-xs xs:leading-6 text-sm", {
      "text-red-500 ring-red-300 placeholder:text-red-300 focus:ring-red-500": !o.isNameValid(i.userFirstName)
    }]),
    placeholder: "Your first name",
    "aria-invalid": "true",
    "aria-describedby": "license-error"
  }, null, 2), [
    [Lt, i.userFirstName]
  ]), m("div", jj, [le(D(s, {
    class: "h-5 w-5 text-red-500",
    "aria-hidden": "true"
  }, null, 512), [
    [ke, !o.isNameValid(i.userFirstName)]
  ]), le(D(r, {
    class: "h-5 w-5 text-green-500",
    "aria-hidden": "true"
  }, null, 512), [
    [ke, o.isNameValid(i.userFirstName)]
  ])])]), m("div", Ej, [le(m("input", {
    "onUpdate:modelValue": e[4] || (e[4] = l => i.userLastName = l),
    type: "text",
    name: "last-name",
    class: fe(["w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset xs:text-xs xs:leading-6 text-sm", {
      "text-red-500 ring-red-300 placeholder:text-red-300 focus:ring-red-500": !o.isNameValid(i.userLastName)
    }]),
    placeholder: "Your last name",
    "aria-invalid": "true",
    "aria-describedby": "license-error"
  }, null, 2), [
    [Lt, i.userLastName]
  ]), m("div", Cj, [le(D(s, {
    class: "h-5 w-5 text-red-500",
    "aria-hidden": "true"
  }, null, 512), [
    [ke, !o.isNameValid(i.userLastName)]
  ]), le(D(r, {
    class: "h-5 w-5 text-green-500",
    "aria-hidden": "true"
  }, null, 512), [
    [ke, o.isNameValid(i.userLastName)]
  ])])])]), m("div", zj, [m("button", {
    onClick: e[5] || (e[5] = l => o.updateUserProfile()),
    class: fe(["bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm", {
      "cursor-not-allowed opacity-50": !o.isNameValid(i.userLastName) || !o.isNameValid(i.userFirstName)
    }]),
    disabled: !o.isNameValid(i.userLastName) || !o.isNameValid(i.userFirstName)
  }, " Continue", 10, Sj)])])])) : Fe("", !0), i.showEmailConsentPopUp ? (H(), ee("div", Tj, [m("div", Aj, [Dj, m("div", Oj, [m("div", Fj, [le(m("input", {
    id: "email-consent",
    "onUpdate:modelValue": e[6] || (e[6] = l => i.isSubscribedToMarketingEmails = l),
    name: "email-consent",
    type: "checkbox",
    class: "h-4 w-4 rounded border-primary-300 border-2 text-primary-600 focus:ring-primary-600 cursor-pointer"
  }, null, 512), [
    [Lr, i.isSubscribedToMarketingEmails]
  ])]), Pj]), m("div", Rj, [m("button", {
    onClick: e[7] || (e[7] = l => o.callLogin()),
    class: "bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
  }, " Continue")])])])) : Fe("", !0)])
}
const im = jl(aj, [
    ["render", Ij]
  ]),
  $j = m("div", {
    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  }, null, -1),
  Mj = {
    class: "fixed inset-0 z-10 overflow-y-auto"
  },
  Lj = {
    class: "flex items-end justify-center p-4 text-center sm:items-center"
  },
  Bj = {
    class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
  },
  Nj = {
    class: "mt-3 text-center sm:mt-5"
  },
  qj = {
    class: "rounded-md bg-blue-50 p-4"
  },
  Uj = {
    class: "flex"
  },
  Vj = {
    class: "flex-shrink-0"
  },
  Hj = {
    class: "ml-3 flex-1 md:flex md:justify-between"
  },
  Wj = {
    class: "text-sm text-blue-700"
  },
  Gj = {
    class: "rounded-md bg-red-50 p-4"
  },
  Kj = {
    class: "flex"
  },
  Yj = {
    class: "flex-shrink-0"
  },
  Zj = {
    class: "ml-3 flex-1 md:flex md:justify-between"
  },
  Xj = {
    class: "text-sm text-red-700"
  },
  Jj = m("div", {
    class: "relative my-3"
  }, [m("div", {
    class: "absolute inset-0 flex items-center"
  }, [m("div", {
    class: "w-full border-t border-gray-300"
  })]), m("div", {
    class: "relative flex justify-center text-sm"
  }, [m("span", {
    class: "px-2 bg-white text-gray-500"
  }, " Or continue with email ")])], -1),
  Qj = {
    class: "relative mt-2 rounded-md shadow-sm"
  },
  e2 = {
    class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
  },
  t2 = {
    class: "relative mt-2 rounded-md shadow-sm"
  },
  a2 = {
    class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
  },
  n2 = {
    class: "relative mt-2 rounded-md shadow-sm"
  },
  i2 = {
    class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
  },
  o2 = {
    class: "space-y-1 mt-2"
  },
  s2 = {
    class: "relative flex items-start"
  },
  r2 = {
    class: "flex h-6 items-center"
  },
  l2 = m("div", {
    class: "ml-3 text-sm leading-6"
  }, [m("label", {
    for: "marketing-terms",
    class: "text-black"
  }, [m("p", {
    class: "text-xs text-left"
  }, " I want to receive promotional emails, including product updates, special offers. ")])], -1),
  u2 = m("div", {
    class: "relative flex items-start"
  }, [m("div", {
    class: "ml-3 text-sm leading-6"
  }, [m("label", {
    for: "terms",
    class: "text-gray-900"
  }, [m("p", {
    class: "text-xs text-left"
  }, [_e(" By Signin up you agree to "), m("a", {
    class: "text-blue-700 font-medium",
    target: "_blank",
    href: "https://professionally.ai/pages/terms-of-use"
  }, "Terms of Use"), _e(", "), m("a", {
    class: "text-blue-700 font-medium",
    target: "_blank",
    href: "https://professionally.ai/pages/privacy-policy-outlook-add-in"
  }, " Privacy Policy"), _e(", and "), m("a", {
    class: "text-blue-700 font-medium",
    target: "_blank",
    href: "https://professionally.ai/pages/cookie-policy"
  }, "Cookie Policy"), _e(". ")])])])], -1),
  d2 = {
    class: "mt-5 sm:mt-6"
  },
  c2 = ["disabled"],
  om = ge({
    __name: "sign-up-overlay",
    props: {
      open: {
        type: Boolean
      }
    },
    emits: ["close", "registered"],
    setup(t, {
      emit: e
    }) {
      const a = t,
        n = M(""),
        i = M(""),
        o = M(""),
        s = M(!1),
        r = M(!1),
        l = M(!0),
        u = M(!1),
        d = M(""),
        c = M(""),
        h = M(""),
        f = new Le,
        p = M(!1),
        g = e;
      Zh().then(_ => {
        console.log("user in EU:", _), _ && (l.value = !1, u.value = !0)
      });
      const k = () => w() && y(i.value) && y(o.value),
        w = () => /\S+@\S+\.\S+/.test(n.value) ? (h.value = "", !0) : (h.value = "Not a valid email address.", !1),
        y = _ => _.length > 3,
        j = async () => {
          if (r.value = !0, !k()) {
            r.value = !1;
            return
          }
          try {
            d.value = "Please wait...";
            const _ = {
              firstName: i.value,
              lastName: o.value,
              email: n.value,
              isSubscribedToMarketingEmails: l.value
            };
            await f.signUp(_), s.value = !0, Ee.userEmail = n.value, g("registered"), g("close"), event("register", {
              outlook_platform: "Chrome"
            }), T()
          } catch (_) {
            d.value = "", _ instanceof Error ? c.value = _.message : c.value = "Something went wrong. Please try again later."
          } finally {
            r.value = !1
          }
        }, v = _ => {
          c.value = _
        }, E = _ => {
          r.value = _
        }, C = _ => {
          p.value = _
        }, T = () => {
          s.value = !1, r.value = !1, l.value = !1, d.value = "", c.value = "", h.value = ""
        };
      return (_, z) => (H(), wt(F(_a), {
        as: "template",
        show: a.open
      }, {
        default: K(() => [D(F(Wa), {
          as: "div",
          class: "relative z-10",
          onClose: z[5] || (z[5] = S => {
            p.value == !1 && _.$emit("close")
          })
        }, {
          default: K(() => [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: K(() => [$j]),
            _: 1
          }), m("div", Mj, [m("div", Lj, [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            default: K(() => [D(F(Ga), {
              class: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:max-w-sm w-full sm:p-6"
            }, {
              default: K(() => [m("div", null, [m("div", Bj, [D(F(xk), {
                class: "h-6 w-6 text-green-600",
                "aria-hidden": "true"
              })]), m("div", Nj, [D(F(da), {
                as: "h3",
                class: "text-base font-semibold leading-6 text-gray-900"
              }, {
                default: K(() => [_e(" Sign up ")]),
                _: 1
              }), le(m("div", qj, [m("div", Uj, [m("div", Vj, [D(F(Vn), {
                class: "h-5 w-5 text-blue-400",
                "aria-hidden": "true"
              })]), m("div", Hj, [m("p", Wj, be(d.value), 1)])])], 512), [
                [ke, d.value.length]
              ]), le(m("div", Gj, [m("div", Kj, [m("div", Yj, [D(F(Vn), {
                class: "h-5 w-5 text-red-400",
                "aria-hidden": "true"
              })]), m("div", Zj, [m("p", Xj, be(c.value), 1)])])], 512), [
                [ke, c.value.length]
              ]), D(im, {
                onError: v,
                onToggleLoading: E,
                onToggleUserInfoModalState: C,
                P_authInProgress: r.value,
                P_parentName: "sign-up"
              }, null, 8, ["P_authInProgress"]), Jj, m("form", {
                id: "signup-form",
                onSubmit: Br(j, ["prevent"])
              }, [m("div", null, [m("div", Qj, [le(m("input", {
                "onUpdate:modelValue": z[0] || (z[0] = S => i.value = S),
                type: "text",
                name: "first-name",
                class: fe(["w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset xs:text-xs xs:leading-6 text-sm", {
                  "text-red-500 ring-red-300 placeholder:text-red-300 focus:ring-red-500": !y(i.value)
                }]),
                placeholder: "Your first name",
                "aria-invalid": "true",
                "aria-describedby": "license-error"
              }, null, 2), [
                [Lt, i.value]
              ]), m("div", e2, [le(D(F(ho), {
                class: "h-5 w-5 text-red-500",
                "aria-hidden": "true"
              }, null, 512), [
                [ke, !y(i.value)]
              ]), le(D(F(co), {
                class: "h-5 w-5 text-green-500",
                "aria-hidden": "true"
              }, null, 512), [
                [ke, y(i.value)]
              ])])]), m("div", t2, [le(m("input", {
                "onUpdate:modelValue": z[1] || (z[1] = S => o.value = S),
                type: "text",
                name: "last-name",
                class: fe(["w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset xs:text-xs xs:leading-6 text-sm", {
                  "text-red-500 ring-red-300 placeholder:text-red-300 focus:ring-red-500": !y(o.value)
                }]),
                placeholder: "Your last name",
                "aria-invalid": "true",
                "aria-describedby": "license-error"
              }, null, 2), [
                [Lt, o.value]
              ]), m("div", a2, [le(D(F(ho), {
                class: "h-5 w-5 text-red-500",
                "aria-hidden": "true"
              }, null, 512), [
                [ke, !y(o.value)]
              ]), le(D(F(co), {
                class: "h-5 w-5 text-green-500",
                "aria-hidden": "true"
              }, null, 512), [
                [ke, y(o.value)]
              ])])]), m("div", n2, [le(m("input", {
                "onUpdate:modelValue": z[2] || (z[2] = S => n.value = S),
                type: "email",
                name: "email",
                class: fe(["block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset xs:text-xs xs:leading-6 text-sm", {
                  "text-red-500 ring-red-300 placeholder:text-red-300 focus:ring-red-500": h.value.length > 0 && n.value.length > 0
                }]),
                placeholder: "john.smith@example.com",
                "aria-invalid": "true",
                "aria-describedby": "license-error",
                onInput: z[3] || (z[3] = S => w())
              }, null, 34), [
                [Lt, n.value]
              ]), m("div", i2, [le(D(F(ho), {
                class: "h-5 w-5 text-red-500",
                "aria-hidden": "true"
              }, null, 512), [
                [ke, h.value.length]
              ]), le(D(F(co), {
                class: "h-5 w-5 text-green-500",
                "aria-hidden": "true"
              }, null, 512), [
                [ke, h.value.length == 0]
              ])])])]), m("div", o2, [le(m("div", s2, [m("div", r2, [le(m("input", {
                id: "marketing-terms",
                "onUpdate:modelValue": z[4] || (z[4] = S => l.value = S),
                "aria-describedby": "comments-description",
                name: "marketing-terms",
                type: "checkbox",
                class: "h-4 w-4 rounded border-primary-300 border-2 text-primary-600 focus:ring-primary-600"
              }, null, 512), [
                [Lr, l.value]
              ])]), l2], 512), [
                [ke, u.value]
              ]), u2])], 32)])]), m("div", d2, [le(m("button", {
                type: "submit",
                form: "signup-form",
                class: fe(["inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600", {
                  "cursor-not-allowed opacity-50": !k() || r.value
                }]),
                disabled: !k() || r.value
              }, " Get started ", 10, c2), [
                [ke, !s.value]
              ])])]),
              _: 1
            })]),
            _: 1
          })])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["show"]))
    }
  }),
  h2 = m("div", {
    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  }, null, -1),
  m2 = {
    class: "fixed inset-0 z-10 overflow-y-auto"
  },
  f2 = {
    class: "flex items-end justify-center p-4 text-center sm:items-center"
  },
  g2 = {
    class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
  },
  p2 = {
    class: "mt-3 text-center sm:mt-5"
  },
  k2 = m("div", {
    class: "relative my-3"
  }, [m("div", {
    class: "absolute inset-0 flex items-center"
  }, [m("div", {
    class: "w-full border-t border-gray-300"
  })]), m("div", {
    class: "relative flex justify-center text-sm"
  }, [m("span", {
    class: "px-2 bg-white text-gray-500"
  }, " Or continue with email ")])], -1),
  b2 = {
    class: "mt-2"
  },
  y2 = {
    class: "relative mt-2 rounded-md shadow-sm"
  },
  v2 = {
    class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
  },
  w2 = {
    class: "relative mt-2 rounded-md shadow-sm"
  },
  _2 = {
    class: "mt-5 sm:mt-6"
  },
  x2 = ["disabled"],
  j2 = ge({
    __name: "sign-in-overlay",
    props: {
      open: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["close", "forgot-password"],
    setup(t) {
      const e = t,
        a = new Le,
        n = M(""),
        i = M(Ee.userEmail || "");
      He(() => Ee.userEmail, p => {
        i.value = p || ""
      });
      const o = M(""),
        s = M(""),
        r = M(!1),
        l = M(!1),
        u = () => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(i.value),
        d = async () => {
          if (!u()) {
            n.value = "Please enter a valid email address";
            return
          }
          r.value = !0;
          const p = rm(),
            g = nm();
          try {
            const k = await a.signIn(i.value, o.value, g, p);
            k.token && k.refreshToken && (Gt.setAuthenticationSettings({
              token: k.token.token,
              tokenExpiresIn: k.token.expiresIn,
              refreshToken: k.refreshToken.token,
              refreshTokenExpiresIn: k.refreshToken.expiresIn,
              deviceId: g
            }), Ee.isLogin = !0, Ee.userEmail = i.value, es.push({
              name: "home"
            }))
          } catch (k) {
            n.value = k.message
          } finally {
            r.value = !1
          }
        }, c = p => {
          n.value = p
        }, h = p => {
          r.value = p
        }, f = p => {
          l.value = p
        };
      return (p, g) => (H(), wt(F(_a), {
        as: "template",
        show: e.open
      }, {
        default: K(() => [D(F(Wa), {
          as: "div",
          class: "relative z-10",
          onClose: g[3] || (g[3] = k => {
            l.value == !1 && p.$emit("close")
          })
        }, {
          default: K(() => [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: K(() => [h2]),
            _: 1
          }), m("div", m2, [m("div", f2, [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            default: K(() => [D(F(Ga), {
              class: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:max-w-sm w-full sm:p-6"
            }, {
              default: K(() => [m("div", null, [m("div", g2, [D(F(Rc), {
                class: "h-6 w-6 text-green-600",
                "aria-hidden": "true"
              })]), m("div", p2, [D(F(da), {
                as: "h3",
                class: "text-base font-semibold leading-6 text-gray-900"
              }, {
                default: K(() => [_e(" Login ")]),
                _: 1
              }), le(m("p", {
                id: "sign-in-error",
                class: "mt-2 text-sm"
              }, be(s.value), 513), [
                [ke, s.value.length]
              ]), le(m("p", {
                id: "sign-in-error",
                class: "mt-2 text-sm text-red-600"
              }, be(n.value), 513), [
                [ke, n.value.length]
              ]), D(im, {
                onError: c,
                onToggleLoading: h,
                onToggleUserInfoModalState: f,
                P_authInProgress: r.value,
                P_parentName: "sign-in"
              }, null, 8, ["P_authInProgress"]), k2, m("div", b2, [m("div", null, [m("form", {
                id: "login-form",
                onSubmit: Br(d, ["prevent"])
              }, [m("div", y2, [le(m("input", {
                "onUpdate:modelValue": g[0] || (g[0] = k => i.value = k),
                type: "email",
                class: fe(["block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset xs:text-xs sm:leading-6 text-sm", {
                  "text-red-500 ring-red-300 placeholder:text-red-300 focus:ring-red-500": !u() && i.value.length > 0
                }]),
                placeholder: "Email",
                "aria-invalid": "true",
                "aria-describedby": "email-error"
              }, null, 2), [
                [Lt, i.value]
              ]), m("div", v2, [le(D(F(Pc), {
                class: "h-5 w-5 text-red-500",
                "aria-hidden": "true"
              }, null, 512), [
                [ke, !u() && i.value.length > 0]
              ]), le(D(F(Dc), {
                class: "h-5 w-5 text-green-500",
                "aria-hidden": "true"
              }, null, 512), [
                [ke, u() && i.value.length > 0]
              ])])]), m("div", w2, [le(m("input", {
                "onUpdate:modelValue": g[1] || (g[1] = k => o.value = k),
                type: "password",
                class: "block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset xs:text-xs sm:leading-6 text-sm",
                placeholder: "Password"
              }, null, 512), [
                [Lt, o.value]
              ])])], 32)])])]), m("div", null, [m("a", {
                href: "#",
                class: "text-sm text-primary-600 hover:text-primary-500",
                onClick: g[2] || (g[2] = k => {
                  p.$emit("forgot-password"), p.$emit("close")
                })
              }, " Forgot your password? ")]), m("div", _2, [m("button", {
                type: "submit",
                form: "login-form",
                class: fe(["inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600", {
                  "cursor-not-allowed opacity-50": r.value
                }]),
                disabled: r.value
              }, " Login ", 10, x2)])])]),
              _: 1
            })]),
            _: 1
          })])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["show"]))
    }
  }),
  E2 = m("div", {
    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  }, null, -1),
  C2 = {
    class: "fixed inset-0 z-10 overflow-y-auto"
  },
  z2 = {
    class: "flex items-end justify-center p-4 text-center sm:items-center sm:p-0"
  },
  S2 = {
    class: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
  },
  T2 = {
    class: "mt-3 text-center sm:mt-5 w-48"
  },
  A2 = {
    class: "w-full mt-2"
  },
  D2 = {
    class: "relative mt-2 rounded-md shadow-sm"
  },
  O2 = {
    class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
  },
  F2 = {
    class: "mt-5 sm:mt-6"
  },
  P2 = ge({
    name: "ResetPasswordOverlay",
    methods: {
      isUsernameValid() {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.username)
      },
      async resetPassword() {
        if (this.isWaiting = !0, this.isUsernameValid()) {
          const t = new Le;
          try {
            await t.resetPassword(this.username), this.error = "", this.message = "Please check your email for the reset password link"
          } catch (e) {
            this.error = e.message, this.message = ""
          }
        }
      }
    },
    data() {
      return {
        api: new Le,
        error: "",
        username: "",
        message: "",
        isWaiting: !1
      }
    }
  }),
  R2 = ge({
    ...P2,
    props: {
      open: Boolean
    },
    emits: ["close"],
    setup(t) {
      const e = t;
      return (a, n) => (H(), wt(F(_a), {
        as: "template",
        show: e.open
      }, {
        default: K(() => [D(F(Wa), {
          as: "div",
          class: "relative z-10",
          onClose: n[2] || (n[2] = i => a.$emit("close"))
        }, {
          default: K(() => [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: K(() => [E2]),
            _: 1
          }), m("div", C2, [m("div", z2, [D(F(kt), {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            default: K(() => [D(F(Ga), {
              class: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            }, {
              default: K(() => [m("div", null, [m("div", S2, [D(F(Rc), {
                class: "h-6 w-6 text-green-600",
                "aria-hidden": "true"
              }), D(F(jk), {
                class: "h-6 w-6 text-green-600",
                "aria-hidden": "true"
              })]), m("div", T2, [D(F(da), {
                as: "h3",
                class: "text-base font-semibold leading-6 text-gray-900"
              }, {
                default: K(() => [_e(" Reset Password ")]),
                _: 1
              }), m("div", A2, [m("div", null, [m("div", D2, [le(m("input", {
                "onUpdate:modelValue": n[0] || (n[0] = i => a.username = i),
                type: "text",
                class: fe(["block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset xs:text-xs sm:leading-6 text-sm", {
                  "text-red-500 ring-red-300 placeholder:text-red-300 focus:ring-red-500": !a.isUsernameValid() && a.username.length > 0
                }]),
                placeholder: "Username",
                "aria-invalid": "true",
                "aria-describedby": "username-error"
              }, null, 2), [
                [Lt, a.username]
              ]), m("div", O2, [le(D(F(Pc), {
                class: "h-5 w-5 text-red-500",
                "aria-hidden": "true"
              }, null, 512), [
                [ke, !a.isUsernameValid() && a.username.length > 0]
              ]), le(D(F(Dc), {
                class: "h-5 w-5 text-green-500",
                "aria-hidden": "true"
              }, null, 512), [
                [ke, a.isUsernameValid() && a.username.length > 0]
              ])])]), le(m("p", {
                id: "reset-password-error",
                class: "mt-2 text-sm text-green-600"
              }, be(a.message), 513), [
                [ke, a.message.length]
              ]), le(m("p", {
                id: "sign-in-error",
                class: "mt-2 text-sm text-red-600"
              }, be(a.error), 513), [
                [ke, a.error.length]
              ])])])]), m("div", F2, [m("button", {
                type: "button",
                class: "inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
                onClick: n[1] || (n[1] = (...i) => a.resetPassword && a.resetPassword(...i))
              }, " Reset Password ")])])]),
              _: 1
            })]),
            _: 1
          })])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["show"]))
    }
  }),
  I2 = {
    components: {
      GeneralMessageOverlay: am,
      ResetPasswordOverlay: R2,
      SignUpOverlay: om,
      SignInOverLay: j2
    },
    data() {
      return {
        licenseKey: "",
        signUpOverlayOpen: !1,
        signInOverlayOpen: !1,
        resetPasswordOverlayOpen: !1,
        generalMessageOverlayOpen: !1
      }
    },
    methods: {
      openSignUpOverlay() {
        this.signUpOverlayOpen = !0
      },
      closeSignUpOverlay() {
        this.signUpOverlayOpen = !1
      },
      openSignInOverlay() {
        this.signInOverlayOpen = !0
      },
      closeSignInOverlay() {
        this.signInOverlayOpen = !1
      },
      closeResetPasswordOverlay() {
        console.log("closeResetPasswordOverlay"), this.resetPasswordOverlayOpen = !1
      },
      openResetPasswordOverlay() {
        console.log("openResetPasswordOverlay"), this.resetPasswordOverlayOpen = !0
      },
      openGeneralMessageOverlay() {
        console.log("openGeneralMessageOverlay"), this.generalMessageOverlayOpen = !0
      },
      closeGeneralMessageOverlay() {
        console.log("closeGeneralMessageOverlay"), this.generalMessageOverlayOpen = !1
      }
    }
  },
  $2 = {
    class: "flex flex-col p-2"
  },
  M2 = m("h1", {
    class: "w-full flex font-medium justify-center content-center"
  }, " Welcome to NEURespond ", -1),
  L2 = {
    class: "relative justify-center text-sm font-medium shadow p-3"
  },
  B2 = {
    id: "activation-buttons",
    class: "flex flex-col justify-evenly mt-3"
  },
  N2 = m("a", {
    type: "button",
    class: "rounded-md my-1 bg-green-800 px-2.5 py-1.5 text-sm text-center text-white font-semiboldshadow-sm hover:bg-green-700",
    href: "https://professionally.ai/products/professionally-outlook-plugin",
    target: "_blank"
  }, " Buy a License ", -1);

function q2(t, e, a, n, i, o) {
  const s = om,
    r = xt("sign-in-over-lay"),
    l = xt("reset-password-overlay"),
    u = am;
  return H(), ee("div", $2, [M2, m("p", L2, [_e(" Your go-to tool for crafting perfectly toned emails. In one click, turn your drafts into tone-aligned messages that resonate with your readers. Click the button below to start your "), m("span", {
    onClick: e[0] || (e[0] = (...d) => o.openSignUpOverlay && o.openSignUpOverlay(...d))
  }, "free trial"), _e(". ")]), m("div", B2, [m("button", {
    class: "rounded-md my-1 bg-primary-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
    onClick: e[1] || (e[1] = (...d) => o.openSignUpOverlay && o.openSignUpOverlay(...d))
  }, " Start Trial "), m("button", {
    type: "button",
    class: "rounded-md my-1 bg-gray-700 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
    onClick: e[2] || (e[2] = (...d) => o.openSignInOverlay && o.openSignInOverlay(...d))
  }, " Login "), N2]), D(s, {
    open: i.signUpOverlayOpen,
    onClose: o.closeSignUpOverlay,
    onRegistered: o.openGeneralMessageOverlay
  }, null, 8, ["open", "onClose", "onRegistered"]), D(r, {
    open: i.signInOverlayOpen,
    onClose: o.closeSignInOverlay,
    onForgotPassword: o.openResetPasswordOverlay
  }, null, 8, ["open", "onClose", "onForgotPassword"]), D(l, {
    open: i.resetPasswordOverlayOpen,
    onClose: o.closeResetPasswordOverlay
  }, null, 8, ["open", "onClose"]), D(u, {
    title: "Check your email",
    message: "We have sent you an email with a link to <b>activate</b> your account. Please click the link in the email to activate your account.",
    "close-button-title": "Close",
    open: i.generalMessageOverlayOpen,
    onClose: o.closeGeneralMessageOverlay
  }, null, 8, ["open", "onClose"])])
}
const U2 = jl(I2, [
    ["render", q2]
  ]),
  es = nv({
    history: O0("/"),
    routes: [{
      path: "/",
      name: "home",
      component: Vx
    }, {
      path: "/activation",
      name: "activation",
      component: U2
    }]
  }),
  V2 = El();
console.log(`browser: ${V2}`);

function El() {
  const t = navigator.userAgent;
  return t.includes("Firefox") ? "firefox" : t.includes("Chrome") ? t.includes("Edg") ? "edge" : "chrome" : t.includes("Safari") ? "safari" : "Unknown"
}

function sm(t) {
  return [".", "#", "*", ">", "+", "~", "[", "]", ":", "^", "$", "|", " "].forEach(a => {
    const n = new RegExp(`\\${a}`, "g");
    t = t.replace(n, `\\${a}`)
  }), t
}

function id(t) {
  const e = /[\wÀ-ÿ]+/g,
    a = /[\u4e00-\u9fa5]/g,
    n = /[\u0621-\u064A\u0660-\u0669\uFB50-\uFDFF\uFE70-\uFEFF]+/g,
    i = /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FBF]/g,
    o = /[\uAC00-\uD7AF]+/g;
  let s = (t.match(e) || []).length;
  return s += (t.match(a) || []).length, s += (t.match(n) || []).length, s += (t.match(i) || []).length, s += (t.match(o) || []).length, s
}

function rm() {
  const t = [{
      s: "Windows 10",
      r: /(Windows 10.0|Windows NT 10.0)/
    }, {
      s: "Windows 8.1",
      r: /(Windows 8.1|Windows NT 6.3)/
    }, {
      s: "Windows 8",
      r: /(Windows 8|Windows NT 6.2)/
    }, {
      s: "Windows 7",
      r: /(Windows 7|Windows NT 6.1)/
    }, {
      s: "Windows Vista",
      r: /Windows NT 6.0/
    }, {
      s: "Windows Server 2003",
      r: /Windows NT 5.2/
    }, {
      s: "Windows XP",
      r: /(Windows NT 5.1|Windows XP)/
    }, {
      s: "Windows 2000",
      r: /(Windows NT 5.0|Windows 2000)/
    }, {
      s: "Windows ME",
      r: /(Win 9x 4.90|Windows ME)/
    }, {
      s: "Windows 98",
      r: /(Windows 98|Win98)/
    }, {
      s: "Windows 95",
      r: /(Windows 95|Win95|Windows_95)/
    }, {
      s: "Windows NT 4.0",
      r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
    }, {
      s: "Windows CE",
      r: /Windows CE/
    }, {
      s: "Windows 3.11",
      r: /Win16/
    }, {
      s: "Android",
      r: /Android/
    }, {
      s: "Open BSD",
      r: /OpenBSD/
    }, {
      s: "Sun OS",
      r: /SunOS/
    }, {
      s: "Chrome OS",
      r: /CrOS/
    }, {
      s: "Linux",
      r: /(Linux|X11(?!.*CrOS))/
    }, {
      s: "iOS",
      r: /(iPhone|iPad|iPod)/
    }, {
      s: "Mac OS X",
      r: /Mac OS X/
    }, {
      s: "Mac OS",
      r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
    }, {
      s: "QNX",
      r: /QNX/
    }, {
      s: "UNIX",
      r: /UNIX/
    }, {
      s: "BeOS",
      r: /BeOS/
    }, {
      s: "OS/2",
      r: /OS\/2/
    }, {
      s: "Search Bot",
      r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
    }],
    e = navigator.userAgent;
  let a = "unknown";
  for (const n in t) {
    const i = t[n];
    if (i.r.test(e)) {
      a = i.s;
      break
    }
  }
  return {
    platform: "Chrome",
    outlookVersion: "unknown",
    outlookPlatform: "",
    operatingSystem: a,
    host: "",
    displayLanguage: "",
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`
  }
}
const kr = () => {
    const t = new Le;
    Gt.deleteAuthenticationSettings(), t.deleteAuthenticationSettings(), Ee.isLogin = !1, Ee.isSidebarOpen = !1, es.push({
      name: "activation"
    })
  },
  H2 = {
    class: "p-5 divide-y settings-wrapper"
  },
  W2 = {
    class: "relative flex items-start"
  },
  G2 = {
    class: "flex h-6 items-center"
  },
  K2 = m("svg", {
    class: "h-3 w-3 text-gray-400",
    fill: "none",
    viewBox: "0 0 12 12"
  }, [m("path", {
    d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })], -1),
  Y2 = [K2],
  Z2 = m("svg", {
    class: "h-3 w-3 text-primary-600",
    fill: "currentColor",
    viewBox: "0 0 12 12"
  }, [m("path", {
    d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
  })], -1),
  X2 = [Z2],
  J2 = m("div", {
    class: "ml-3 text-sm leading-6"
  }, [m("label", {
    for: "rewrite-at-start",
    class: "font-medium text-gray-900"
  }, "Auto rewrite at start")], -1),
  Q2 = {
    class: "w-full"
  },
  eE = {
    class: "relative mt-2"
  },
  tE = {
    class: "block truncate"
  },
  aE = {
    class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
  },
  nE = {
    class: "w-full"
  },
  iE = {
    class: "flex-1 md:flex md:justify-between"
  },
  oE = {
    class: "font-bold font-sans text-center flex"
  },
  sE = m("div", {
    class: "ml-4"
  }, [m("p", {
    class: "text-gray-700 text-xs mt-2"
  }, " Each successful referral will earn you 500 reward points. "), m("p", {
    class: "text-xs"
  }, [_e(" 500 points = 15 Days "), m("span", {
    class: "text-emerald-800"
  }, "Free")])], -1),
  rE = {
    class: "pb-4"
  },
  lE = {
    class: "pb-2"
  },
  uE = m("h3", {
    class: "text-base font-medium text-gray-900"
  }, " License and usage ", -1),
  dE = {
    class: "pl-2"
  },
  cE = m("label", {
    class: "text-sm"
  }, " Expiration: ", -1),
  hE = {
    class: "text-sm"
  },
  mE = {
    class: "pl-2"
  },
  fE = m("label", {
    class: "text-sm"
  }, " License type: ", -1),
  gE = {
    class: "text-sm"
  },
  pE = {
    class: "pl-2 flex flex-wrap"
  },
  kE = m("label", {
    class: "text-sm mr-1"
  }, " Usage: ", -1),
  bE = {
    class: "text-sm"
  },
  yE = m("span", {
    class: "text-sm"
  }, "emails", -1),
  vE = {
    class: "relative"
  },
  wE = {
    id: "usage-info",
    role: "tooltip",
    class: "absolute invisible -ml-14 w-28 z-20 px-3 py-2 text-xs font-medium text-white bg-primary-800 rounded-lg shadow-sm"
  },
  _E = m("br", null, null, -1),
  xE = {
    class: "flex flex-col justify-center content-center"
  },
  jE = {
    class: "pt-4"
  },
  EE = {
    class: "pt-4 flex justify-center content-center"
  },
  CE = {
    id: "overlays"
  },
  zE = ge({
    __name: "settings-menu",
    setup(t) {
      const e = Ae.languages,
        a = M(Ae.outputLanguage ? e.find(d => d.id === Ae.outputLanguage) : e[0]),
        n = () => {
          Ae.saveSettings()
        },
        i = M(!1),
        o = M(!1),
        s = M(!1);
      qe(async () => {
        const d = new Le;
        Ee.LicenseDetails = await d.getLicenseDetails();
        const {
          rewardPoints: c
        } = await d.getReferralPoints();
        Ee.referralPoints = c
      });
      const r = d => {
          const c = document.getElementById(d);
          c.classList.remove("invisible"), c.classList.add("visible")
        },
        l = d => {
          const c = document.getElementById(d);
          c.classList.remove("visible"), c.classList.add("invisible")
        },
        u = () => {
          Ae.outputLanguage = a.value.id, Ae.saveSettings()
        };
      return (d, c) => (H(), ee("div", H2, [m("div", null, [m("div", W2, [m("div", G2, [D(F(ck), {
        id: "rewrite-at-start",
        modelValue: F(Ae).rewriteAtStart,
        "onUpdate:modelValue": [c[0] || (c[0] = h => F(Ae).rewriteAtStart = h), n],
        class: fe([F(Ae).rewriteAtStart ? "bg-primary-600" : "bg-gray-200", "relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"])
      }, {
        default: K(() => [m("span", {
          class: fe([F(Ae).rewriteAtStart ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])
        }, [m("span", {
          class: fe([F(Ae).rewriteAtStart ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"]),
          "aria-hidden": "true"
        }, Y2, 2), m("span", {
          class: fe([F(Ae).rewriteAtStart ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"]),
          "aria-hidden": "true"
        }, X2, 2)], 2)]),
        _: 1
      }, 8, ["modelValue", "class"])]), J2])]), m("div", null, [m("div", Q2, [D(F(ok), {
        modelValue: a.value,
        "onUpdate:modelValue": [c[1] || (c[1] = h => a.value = h), u],
        as: "div"
      }, {
        default: K(() => [D(F(sk), {
          class: "block text-sm font-medium leading-6 text-gray-900"
        }, {
          default: K(() => [_e(" Translate to ")]),
          _: 1
        }), m("div", eE, [D(F(rk), {
          class: "relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
        }, {
          default: K(() => [m("span", tE, be(a.value.name), 1), m("span", aE, [D(F(Fc), {
            class: "h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          })])]),
          _: 1
        }), D(Mr, {
          "leave-active-class": "transition ease-in duration-100",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: K(() => [D(F(lk), {
            class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          }, {
            default: K(() => [(H(!0), ee(Ge, null, kn(F(e), h => (H(), wt(F(uk), {
              key: h.id,
              as: "template",
              value: h
            }, {
              default: K(({
                active: f,
                selected: p
              }) => [m("li", {
                class: fe([f ? "bg-primary-600 text-white" : "text-gray-900", "relative cursor-default select-none py-2 pl-8 pr-4"])
              }, [m("span", {
                class: fe([p ? "font-semibold" : "font-normal", "block truncate"])
              }, be(h.name), 3), p ? (H(), ee("span", {
                key: 0,
                class: fe([f ? "text-white" : "text-primary-600", "absolute inset-y-0 left-0 flex items-center pl-1.5"])
              }, [D(F(Oc), {
                class: "h-5 w-5",
                "aria-hidden": "true"
              })], 2)) : Fe("", !0)], 2)]),
              _: 2
            }, 1032, ["value"]))), 128))]),
            _: 1
          })]),
          _: 1
        })])]),
        _: 1
      }, 8, ["modelValue"])])]), m("div", null, [m("div", nE, [m("button", {
        type: "button",
        class: "w-full rounded-md border-primary-600 border-2 px-3 py-2 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-700 hover:text-white hover:border-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
        onClick: c[2] || (c[2] = h => s.value = !0)
      }, " Edit Tones ")])]), m("div", null, [m("div", iE, [m("h1", oE, [D(F(Ck), {
        class: "h-5 w-5 text-emerald-500 mr-1"
      }), _e(" Your Reward Points ")]), sE, m("div", rE, [m("p", null, "Your reward points: " + be(F(Ee).referralPoints), 1)]), m("div", lE, [m("button", {
        type: "button",
        class: "w-full rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
        onClick: c[3] || (c[3] = h => o.value = !0)
      }, " Redeem Points ")])])]), m("div", null, [uE, m("div", dE, [cE, m("span", hE, be(new Date(F(Ee).LicenseDetails.endDate).toLocaleDateString()), 1)]), m("div", mE, [fE, m("span", gE, be(F(Ee).LicenseDetails.isTrial ? "Trial" : "Premium"), 1)]), m("div", pE, [kE, m("p", bE, [_e(be(F(Ee).LicenseDetails.emailUsedThisMonth) + " / " + be(F(Ee).LicenseDetails.monthlyEmailAllowance) + " ", 1), yE]), m("div", vE, [D(F(zk), {
        class: "w-4 h-4 text-blue-400 ml-1 mt-0.5",
        onMouseover: c[4] || (c[4] = h => r("usage-info")),
        onMouseout: c[5] || (c[5] = h => l("usage-info"))
      }), m("div", wE, [_e(" Every 125 words is considered one email. "), _E, _e(" You have used " + be(F(Ee).LicenseDetails.emailUsedThisMonth * 125) + " words this month. ", 1)])])])]), m("div", xE, [m("div", jE, [m("button", {
        class: "w-full h-7 bg-gray-700 text-gray-100 hover:text-white hover:bg-gray-600 rounded",
        onClick: c[6] || (c[6] = () => {
          i.value = !0
        })
      }, " Feedback ")]), m("div", EE, [m("button", {
        class: "w-full h-7 bg-gray-700 text-gray-100 hover:text-white hover:bg-gray-600 rounded",
        onClick: c[7] || (c[7] = (...h) => F(kr) && F(kr)(...h))
      }, " Sign out ")])]), m("div", CE, [D(ab, {
        "is-open": i.value,
        onClose: c[8] || (c[8] = h => i.value = !1)
      }, null, 8, ["is-open"]), D(Vy, {
        "is-open": o.value,
        points: F(Ee).referralPoints,
        onClose: c[9] || (c[9] = h => o.value = !1)
      }, null, 8, ["is-open", "points"]), D(pl, {
        "is-open": s.value,
        onClose: c[10] || (c[10] = h => s.value = !1)
      }, null, 8, ["is-open"])])]))
    }
  }),
  SE = {
    class: "overflow-hidden"
  },
  TE = {
    class: "px-4 py-5 sm:px-6"
  },
  AE = {
    class: "ml-3 flex-1 md:flex md:justify-between"
  },
  DE = {
    class: "font-sans text-center flex justify-evenly"
  },
  OE = m("span", null, [_e(" Up to 3 Months "), m("strong", null, "FREE")], -1),
  FE = m("a", {
    class: "underline",
    href: "#"
  }, "Learn more", -1),
  PE = {
    key: 1,
    class: "text-gray-700 text-sm mt-2"
  },
  RE = m("strong", null, "each", -1),
  IE = m("strong", null, "two-month free", -1),
  $E = {
    class: "bg-gray-50 px-4 py-5 sm:p-6 divide-y flex justify-center flex-col"
  },
  ME = m("div", {
    class: "pb-4"
  }, [m("h1", {
    class: "font-medium"
  }, " Invite ")], -1),
  LE = {
    class: "isolate -space-y-px rounded-md shadow-sm"
  },
  BE = m("label", {
    for: "name",
    class: "block text-xs font-medium text-gray-900 h-5"
  }, "Name", -1),
  NE = ["onClick"],
  qE = ["onUpdate:modelValue", "onChange"],
  UE = m("label", {
    for: "job-title",
    class: "block text-xs font-medium text-gray-900"
  }, "Email", -1),
  VE = ["onUpdate:modelValue", "onChange"],
  HE = {
    key: 0,
    class: "rounded-md bg-green-50 p-4"
  },
  WE = {
    class: "flex"
  },
  GE = {
    class: "ml-3"
  },
  KE = {
    class: "text-sm font-medium text-green-800"
  },
  YE = {
    class: "ml-auto pl-3"
  },
  ZE = {
    class: "-mx-1.5 -my-1.5"
  },
  XE = m("span", {
    class: "sr-only"
  }, "Dismiss", -1),
  JE = {
    key: 1,
    class: "rounded-md bg-blue-50 p-4"
  },
  QE = {
    class: "flex"
  },
  eC = {
    class: "ml-3"
  },
  tC = {
    class: "text-sm font-medium text-blue-800"
  },
  aC = {
    class: "ml-auto pl-3"
  },
  nC = {
    class: "-mx-1.5 -my-1.5"
  },
  iC = m("span", {
    class: "sr-only"
  }, "Dismiss", -1),
  oC = {
    key: 2,
    class: "rounded-md bg-red-50 p-4"
  },
  sC = {
    class: "flex"
  },
  rC = {
    class: "ml-3"
  },
  lC = {
    class: "text-sm font-medium text-red-800"
  },
  uC = {
    class: "ml-auto pl-3"
  },
  dC = {
    class: "-mx-1.5 -my-1.5"
  },
  cC = m("span", {
    class: "sr-only"
  }, "Dismiss", -1),
  hC = ["disabled"],
  mC = ge({
    __name: "invite-contact",
    setup(t) {
      const e = {
          id: 1,
          name: "",
          email: "",
          isNameValid: !0,
          isEmailValid: !0
        },
        a = M([e]),
        n = M(!1),
        i = M(!1),
        o = () => {
          a.value.push({
            id: a.value.length + 1,
            name: "",
            email: "",
            isNameValid: !0,
            isEmailValid: !0
          })
        },
        s = h => {
          a.value = a.value.filter(f => f.id !== h)
        },
        r = h => (h.email = h.email.trim(), h.name = h.name.trim(), h && (h.isNameValid = h.name.length > 3, h.isEmailValid = l(h.email)), h.isNameValid && h.isEmailValid),
        l = h => /\S+@\S+\.\S+/.test(h),
        u = M({
          text: "",
          type: ""
        }),
        d = async () => {
          const h = [];
          for (const p of a.value) r(p) && h.push(p);
          if (h.length !== a.value.length) {
            u.value = {
              text: "Please check your contacts and try again.",
              type: "error"
            };
            return
          }
          n.value = !0, u.value = {
            text: "Please wait while we send your invites.",
            type: "info"
          };
          const f = new Le;
          try {
            await f.sendReferralInvite(h), u.value = {
              text: "Your contacts have been invited.",
              type: "success"
            }, e.name = "", e.email = "", a.value = [e]
          } catch (p) {
            u.value = {
              text: p.message,
              type: "error"
            }
          } finally {
            n.value = !1
          }
        }, c = () => {
          u.value = {
            text: "",
            type: ""
          }
        };
      return (h, f) => (H(), ee("div", null, [m("div", SE, [m("div", TE, [m("div", AE, [m("h1", DE, [D(F(Cu), {
        class: "h-5 w-5 text-amber-600"
      }), OE, D(F(Cu), {
        class: "h-5 w-5 text-amber-600"
      })]), i.value ? Fe("", !0) : (H(), ee("div", {
        key: 0,
        class: "text-gray-700 text-sm mt-2",
        onClick: f[0] || (f[0] = p => i.value = !0)
      }, [_e(" Invite a friend to start a trial with NEURespond and extend your trial license by 15 days each time... "), FE])), i.value ? (H(), ee("div", PE, [_e(" Invite a friend to start a trial with NEURespond and earn a 15-day extension on your own trial for "), RE, _e(" successful referral. Not only will you benefit, but your friend will also receive a "), IE, _e(" membership! Enjoy this perk up to a maximum of three months. ")])) : Fe("", !0)])]), m("div", $E, [ME, (H(!0), ee(Ge, null, kn(a.value, p => (H(), ee("div", {
        key: p.id,
        class: "pt-2 pb-2"
      }, [m("div", LE, [m("div", {
        class: fe(["relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-primary-600", {
          "ring-red-600": !p.isNameValid
        }])
      }, [BE, m("button", {
        class: "absolute right-0 top-0 mt-1 mr-2 text-xs bg-red-400 rounded p-1 text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600",
        onClick: g => s(p.id)
      }, " Remove ", 8, NE), le(m("input", {
        "onUpdate:modelValue": g => p.name = g,
        type: "text",
        class: "block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",
        placeholder: "Jane Smith",
        onChange: g => r(p)
      }, null, 40, qE), [
        [Lt, p.name]
      ])], 2), m("div", {
        class: fe(["relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-primary-600", {
          "ring-red-600": !p.isEmailValid
        }])
      }, [UE, le(m("input", {
        "onUpdate:modelValue": g => p.email = g,
        type: "text",
        class: "block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",
        placeholder: "john@outlook.com",
        onChange: g => r(p)
      }, null, 40, VE), [
        [Lt, p.email]
      ])], 2)])]))), 128)), m("div", {
        class: "pt-2 pb-2 w-full flex"
      }, [m("button", {
        type: "button",
        class: "rounded-md bg-primary-100 px-3 py-2 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-100",
        onClick: o
      }, " + Add another ")]), u.value.type === "success" ? (H(), ee("div", HE, [m("div", WE, [m("div", GE, [m("p", KE, be(u.value.text), 1)]), m("div", YE, [m("div", ZE, [m("button", {
        type: "button",
        class: "inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50",
        onClick: f[1] || (f[1] = p => c())
      }, [XE, D(F(gs), {
        class: "h-5 w-5",
        "aria-hidden": "true"
      })])])])])])) : Fe("", !0), u.value.type === "info" ? (H(), ee("div", JE, [m("div", QE, [m("div", eC, [m("p", tC, be(u.value.text), 1)]), m("div", aC, [m("div", nC, [m("button", {
        type: "button",
        class: "inline-flex rounded-md bg-blue-50 p-1.5 text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50",
        onClick: f[2] || (f[2] = p => c())
      }, [iC, D(F(gs), {
        class: "h-5 w-5",
        "aria-hidden": "true"
      })])])])])])) : Fe("", !0), u.value.type === "error" ? (H(), ee("div", oC, [m("div", sC, [m("div", rC, [m("p", lC, be(u.value.text), 1)]), m("div", uC, [m("div", dC, [m("button", {
        type: "button",
        class: "inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50",
        onClick: f[3] || (f[3] = p => c())
      }, [cC, D(F(gs), {
        class: "h-5 w-5",
        "aria-hidden": "true"
      })])])])])])) : Fe("", !0), m("button", {
        type: "button",
        disabled: n.value,
        class: fe([{
          "opacity-50 cursor-not-allowed": n.value
        }, "rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"]),
        onClick: d
      }, " Invite ", 10, hC)])])]))
    }
  }),
  fC = m("div", {
    class: "fixed inset-0"
  }, null, -1),
  gC = {
    class: "fixed inset-0 overflow-hidden"
  },
  pC = {
    class: "absolute inset-0 overflow-hidden"
  },
  kC = {
    class: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
  },
  bC = {
    class: "flex h-full flex-col overflow-y-auto bg-white shadow-xl"
  },
  yC = {
    class: "p-6"
  },
  vC = {
    class: "flex items-start justify-between"
  },
  wC = {
    class: "ml-3 flex h-7 items-center"
  },
  _C = m("span", {
    class: "sr-only"
  }, "Close panel", -1),
  xC = {
    class: "border-b border-gray-200"
  },
  jC = {
    class: "px-6"
  },
  EC = {
    class: "-mb-px flex space-x-6",
    "x-descriptions": "Tab component"
  },
  CC = ["href", "onClick"],
  zC = {
    key: 0,
    class: "absolute flex h-3 w-3 -top-2 -right-2"
  },
  SC = m("span", {
    class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
  }, null, -1),
  TC = m("span", {
    class: "relative inline-flex rounded-full h-3 w-3 bg-red-500"
  }, null, -1),
  AC = [SC, TC],
  DC = ge({
    __name: "slide-out-menu",
    setup(t) {
      const e = M([{
          name: "Invite a Friend",
          href: "#invite",
          current: !1
        }, {
          name: "Settings",
          href: "#settings",
          current: !0
        }]),
        a = M("Settings"),
        n = o => {
          e.value.forEach(s => {
            s.current = s.name === o
          }), a.value = o
        },
        i = () => {
          Ee.isSidebarOpen = !1
        };
      return (o, s) => (H(), wt(F(_a), {
        as: "template",
        show: F(Ee).isSidebarOpen
      }, {
        default: K(() => [D(F(Wa), {
          as: "div",
          class: "relative z-10",
          onClose: i
        }, {
          default: K(() => [fC, m("div", gC, [m("div", pC, [m("div", kC, [D(F(kt), {
            as: "template",
            enter: "transform transition ease-in-out duration-500 sm:duration-700",
            "enter-from": "translate-x-full",
            "enter-to": "translate-x-0",
            leave: "transform transition ease-in-out duration-500 sm:duration-700",
            "leave-from": "translate-x-0",
            "leave-to": "translate-x-full"
          }, {
            default: K(() => [D(F(Ga), {
              class: "pointer-events-auto w-screen max-w-md"
            }, {
              default: K(() => [m("div", bC, [m("div", yC, [m("div", vC, [D(F(da), {
                class: "text-base font-semibold leading-6 text-gray-900"
              }, {
                default: K(() => [_e(" Menu ")]),
                _: 1
              }), m("div", wC, [m("button", {
                type: "button",
                class: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-primary-500",
                onClick: i
              }, [_C, D(F(Ac), {
                class: "h-6 w-6",
                "aria-hidden": "true"
              })])])])]), m("div", xC, [m("div", jC, [m("nav", EC, [(H(!0), ee(Ge, null, kn(e.value, r => (H(), ee("a", {
                key: r.name,
                href: r.href,
                class: fe(["relative", [r.current ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700", "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"]]),
                onClick: l => n(r.name)
              }, [_e(be(r.name) + " ", 1), r.href === "#invite" ? (H(), ee("span", zC, AC)) : Fe("", !0)], 10, CC))), 128))])])]), a.value == "Settings" ? (H(), wt(zE, {
                key: 0
              })) : Fe("", !0), a.value == "Invite a Friend" ? (H(), wt(mC, {
                key: 1
              })) : Fe("", !0)])]),
              _: 1
            })]),
            _: 1
          })])])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["show"]))
    }
  }),
  OC = {
    class: "ms-welcome__header bg-gray-100 flex flex-row justify-end"
  },
  FC = {
    class: "w-full flex flex-row justify-end content-end flex-end"
  },
  PC = m("img", {
    width: "75",
    height: "75",
    src: Ug
  }, null, -1),
  RC = m("h1", {
    class: "text-2xl"
  }, "NEURespond", -1),
  IC = ge({
    __name: "App",
    setup(t) {
      return Ee.isLogin = Gt.isLogin(), Ee.isAppReady = !0, nt(() => {
        console.log("isLogin", Gt.isLogin()), Ee.isLogin = Gt.isLogin(), Ee.isLogin || kr()
      }), (e, a) => {
        const n = xt("RouterView");
        return H(), ee("div", null, [m("header", OC, [m("nav", FC), PC, RC]), D(n), D(DC)])
      }
    }
  }),
  lm = Bg(IC);
lm.use(es);
lm.mount("#app");
window.onerror = function (t, e, a, n, i) {};