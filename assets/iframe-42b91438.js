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
    d: "",
    "clip-rule": "evenodd"
  }), m("path", {
    d: ""
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
    }, 
    {
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
  }, " What level of satisfaction do you have with NEURespond? ", -1),
  Nk = {
    class: "relative mt-2 rounded-md shadow-sm text-center justify-center"
  },
  qk = {
    key: 1
  },
  Uk = m("hr", {
    class: ""
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
    type: "submit"
  }),
  Qy = {
    role: "list",
    class: ""
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
                default: K(() => [_e(" Tones ")]),
                _: 1
              }), m("div", Yy, [m("div", null, [m("form", {
                id: "login-form",
                onSubmit: Br(s, ["prevent"])
              }, [m("div", Zy), m("div", Xy, [Jy, le(m("p", {
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
              }, "  ", 8, n0)]))), 128))])])])])])])]),
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
    throw console.error(t), new Error("Kindly start a new email and click the NEURespond logo to send it.")
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
      throw console.error(t), new Error("Kindly start a new email and click the NEURespond logo to send it.")
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
      throw console.error(t), new Error("Kindly start a new email and click the NEURespond logo to send it.")
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
      fra: " de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | à |t d|roi|dro| dr| le|té |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l’|t à| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |à l|nne|ons|ité|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d’| re|é d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| dé|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|és | na|us |com|our|ali|tra| ce|al |e o|e n|rté|ber|ibe|tes|r d|e r|its| di|êtr|pou|été|s c|à u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |éga| êt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| ét|t ê|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|ée |ser|l n| pl|anc|lig|t s|n e|s i|t e| ég|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pré|peu|rit|é e|t é|bre|sen|ill|l’a|d’a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l’e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|rés|cla|tés|oir|eut|e f|utr|doi|ibr|ais|ins|éra|’en|iét|l e|s é|nté| ré|ssi| as|nse|ces|é a",
      ita: " di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |tà |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|à e|ità|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rtà|ert|anz|eri|tut|à d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|rà |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|trà|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v",
      ceb: "sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya",
      tgl: "ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa"
    },
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
            this.error = `Your email is too short to ${this.selectedAction.toLowerCase()}. Please return to your email and compose a minimum of ten words. You have ` + r + " words.", this.messageToUser = "", this.info = "<ul class='max-w-md list-disc list-inside text-sm'><li>When copying a message from another source, paste it as plain text.</li><li>Ensure you're not writing within the signature section of your email.</li></ul>";
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
          this.error === "" ? (this.coolingDownTime = 5, this.rewriteButtonText = "Please wait..", setTimeout(() => {
            this.coolingDownTime = 0, this.selectedAction = this.actionOptions[t], this.rewriteButtonText = ` ${t}`
          }, 5e3)) : (this.selectedAction = this.actionOptions[t], this.rewriteButtonText = ` ${t}`)
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
  vx = Qo(() => m("span")),
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
    class: "ml-2 text-sm text-gray-900"
  })),
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
  }, [_e(" We are having trouble loading your Professionally. If this issue insist please email us: "), m("a", {
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
      class: "w-36 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6",
      onChange: e[0] || (e[0] = k => i.query = k.target.value)
    }), D(u, {
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
      }, 1032, ["value"]))), 128)), D(c, null)]),
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
    as: "div",
    class: "border-l",
    disabled: i.isRewriting || i.coolingDownTime > 0
  }, {
    default: K(() => [m("div", jx, [D(u), D(h, {
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
  }, 8, ["modelValue", "disabled"])], 2)]), m("div", Ex, [m("div", Cx,), le(m("div", Tx, [m("button", {
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
  }, " Welcome to Professionally ", -1),
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
    class: "p-5 settings-wrapper"
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
          default: K(() => [_e(" Default Language: ")]),
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
      }, " Tone List ")])]), m("div", null, [m("div", iE, [m("h1", oE, [D(F(Ck), {
        class: "h-5 w-5 text-emerald-500 mr-1"
      }), m("div", wE, [_e(" Every 125 words is considered one email. "), _E, _e(" You have used " + be(F(Ee).LicenseDetails.emailUsedThisMonth * 125) + " words this month. ", 1)])])])]), m("div", xE, [m("div", jE, [m("button",)]), m("div", EE, )]), m("div", CE, [D(ab, {
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
      }, [_e(" Invite a friend to start a trial with Professionally and extend your trial license by 15 days each time... "), FE])), i.value ? (H(), ee("div", PE, [_e(" Invite a friend to start a trial with Professionally and earn a 15-day extension on your own trial for "), RE, _e(" successful referral. Not only will you benefit, but your friend will also receive a "), IE, _e(" membership! Enjoy this perk up to a maximum of three months. ")])) : Fe("", !0)])]), m("div", $E, [ME, (H(!0), ee(Ge, null, kn(a.value, p => (H(), ee("div", {
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
      const e = M([ {
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
        return H(), ee("div", null, [m("header", OC, [m("nav", FC, [le(m("button", {
          class: "rounded-md px-1.5 py-0.5 text-xs text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
          onClick: a[0] || (a[0] = i => F(Ee).isSidebarOpen = !0),
          id: "hamburger-menu"
        }, [D(F(yk), {
          class: "h-6 w-6",
          "aria-hidden": "true"
        })], 512), [
          [ke, F(Ee).isLogin]
        ])]), PC, RC]), D(n), D(DC)])
      }
    }
  }),
  lm = Bg(IC);
lm.use(es);
lm.mount("#app");
window.onerror = function (t, e, a, n, i) {};