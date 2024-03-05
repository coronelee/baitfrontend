(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Pn(e, t) {
  const n = new Set(e.split(","));
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const K = {},
  Je = [],
  ue = () => {},
  Pi = () => !1,
  Ut = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  En = (e) => e.startsWith("onUpdate:"),
  Z = Object.assign,
  $n = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ei = Object.prototype.hasOwnProperty,
  M = (e, t) => Ei.call(e, t),
  T = Array.isArray,
  Xe = (e) => Kt(e) === "[object Map]",
  Os = (e) => Kt(e) === "[object Set]",
  I = (e) => typeof e == "function",
  J = (e) => typeof e == "string",
  st = (e) => typeof e == "symbol",
  D = (e) => e !== null && typeof e == "object",
  Ts = (e) => (D(e) || I(e)) && I(e.then) && I(e.catch),
  Ss = Object.prototype.toString,
  Kt = (e) => Ss.call(e),
  $i = (e) => Kt(e).slice(8, -1),
  Is = (e) => Kt(e) === "[object Object]",
  On = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  ut = Pn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Vt = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Oi = /-(\w)/g,
  et = Vt((e) => e.replace(Oi, (t, n) => (n ? n.toUpperCase() : ""))),
  Ti = /\B([A-Z])/g,
  it = Vt((e) => e.replace(Ti, "-$1").toLowerCase()),
  As = Vt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  nn = Vt((e) => (e ? `on${As(e)}` : "")),
  Fe = (e, t) => !Object.is(e, t),
  sn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  jt = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Si = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Jn;
const Rs = () =>
  Jn ||
  (Jn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function te(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = J(s) ? Mi(s) : te(s);
      if (i) for (const l in i) t[l] = i[l];
    }
    return t;
  } else if (J(e) || D(e)) return e;
}
const Ii = /;(?![^(]*\))/g,
  Ai = /:([^]+)/,
  Ri = /\/\*[^]*?\*\//g;
function Mi(e) {
  const t = {};
  return (
    e
      .replace(Ri, "")
      .split(Ii)
      .forEach((n) => {
        if (n) {
          const s = n.split(Ai);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Tn(e) {
  let t = "";
  if (J(e)) t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const s = Tn(e[n]);
      s && (t += s + " ");
    }
  else if (D(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Fi =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ji = Pn(Fi);
function Ms(e) {
  return !!e || e === "";
}
const Li = (e) =>
    J(e)
      ? e
      : e == null
        ? ""
        : T(e) || (D(e) && (e.toString === Ss || !I(e.toString)))
          ? JSON.stringify(e, Fs, 2)
          : String(e),
  Fs = (e, t) =>
    t && t.__v_isRef
      ? Fs(e, t.value)
      : Xe(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, i], l) => ((n[ln(s, l) + " =>"] = i), n),
              {}
            ),
          }
        : Os(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => ln(n)) }
          : st(t)
            ? ln(t)
            : D(t) && !T(t) && !Is(t)
              ? String(t)
              : t,
  ln = (e, t = "") => {
    var n;
    return st(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let de;
class Ni {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = de),
      !t && de && (this.index = (de.scopes || (de.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = de;
      try {
        return (de = this), t();
      } finally {
        de = n;
      }
    }
  }
  on() {
    de = this;
  }
  off() {
    de = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Hi(e, t = de) {
  t && t.active && t.effects.push(e);
}
function ki() {
  return de;
}
let Ke;
class Sn {
  constructor(t, n, s, i) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Hi(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), We();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Bi(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ze();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = Re,
      n = Ke;
    try {
      return (Re = !0), (Ke = this), this._runnings++, Xn(this), this.fn();
    } finally {
      Zn(this), this._runnings--, (Ke = n), (Re = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (Xn(this),
      Zn(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function Bi(e) {
  return e.value;
}
function Xn(e) {
  e._trackId++, (e._depsLength = 0);
}
function Zn(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) js(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function js(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let Re = !0,
  dn = 0;
const Ls = [];
function We() {
  Ls.push(Re), (Re = !1);
}
function ze() {
  const e = Ls.pop();
  Re = e === void 0 ? !0 : e;
}
function In() {
  dn++;
}
function An() {
  for (dn--; !dn && hn.length; ) hn.shift()();
}
function Ns(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && js(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const hn = [];
function Hs(e, t, n) {
  In();
  for (const s of e.keys()) {
    let i;
    s._dirtyLevel < t &&
      (i ?? (i = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
      (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (i ?? (i = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && hn.push(s.scheduler)));
  }
  An();
}
const ks = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  pn = new WeakMap(),
  Ve = Symbol(""),
  gn = Symbol("");
function ie(e, t, n) {
  if (Re && Ke) {
    let s = pn.get(e);
    s || pn.set(e, (s = new Map()));
    let i = s.get(n);
    i || s.set(n, (i = ks(() => s.delete(n)))), Ns(Ke, i);
  }
}
function $e(e, t, n, s, i, l) {
  const o = pn.get(e);
  if (!o) return;
  let f = [];
  if (t === "clear") f = [...o.values()];
  else if (n === "length" && T(e)) {
    const u = Number(s);
    o.forEach((a, h) => {
      (h === "length" || (!st(h) && h >= u)) && f.push(a);
    });
  } else
    switch ((n !== void 0 && f.push(o.get(n)), t)) {
      case "add":
        T(e)
          ? On(n) && f.push(o.get("length"))
          : (f.push(o.get(Ve)), Xe(e) && f.push(o.get(gn)));
        break;
      case "delete":
        T(e) || (f.push(o.get(Ve)), Xe(e) && f.push(o.get(gn)));
        break;
      case "set":
        Xe(e) && f.push(o.get(Ve));
        break;
    }
  In();
  for (const u of f) u && Hs(u, 4);
  An();
}
const Ui = Pn("__proto__,__v_isRef,__isVue"),
  Bs = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(st)
  ),
  Qn = Ki();
function Ki() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = j(this);
        for (let l = 0, o = this.length; l < o; l++) ie(s, "get", l + "");
        const i = s[t](...n);
        return i === -1 || i === !1 ? s[t](...n.map(j)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        We(), In();
        const s = j(this)[t].apply(this, n);
        return An(), ze(), s;
      };
    }),
    e
  );
}
function Vi(e) {
  const t = j(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
class Us {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    const i = this._isReadonly,
      l = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return l;
    if (n === "__v_raw")
      return s === (i ? (l ? nl : Ws) : l ? Ds : Vs).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = T(t);
    if (!i) {
      if (o && M(Qn, n)) return Reflect.get(Qn, n, s);
      if (n === "hasOwnProperty") return Vi;
    }
    const f = Reflect.get(t, n, s);
    return (st(n) ? Bs.has(n) : Ui(n)) || (i || ie(t, "get", n), l)
      ? f
      : le(f)
        ? o && On(n)
          ? f
          : f.value
        : D(f)
          ? i
            ? zs(f)
            : Fn(f)
          : f;
  }
}
class Ks extends Us {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let l = t[n];
    if (!this._isShallow) {
      const u = tt(l);
      if (
        (!Lt(s) && !tt(s) && ((l = j(l)), (s = j(s))), !T(t) && le(l) && !le(s))
      )
        return u ? !1 : ((l.value = s), !0);
    }
    const o = T(t) && On(n) ? Number(n) < t.length : M(t, n),
      f = Reflect.set(t, n, s, i);
    return (
      t === j(i) && (o ? Fe(s, l) && $e(t, "set", n, s) : $e(t, "add", n, s)), f
    );
  }
  deleteProperty(t, n) {
    const s = M(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && $e(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!st(n) || !Bs.has(n)) && ie(t, "has", n), s;
  }
  ownKeys(t) {
    return ie(t, "iterate", T(t) ? "length" : Ve), Reflect.ownKeys(t);
  }
}
class Di extends Us {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Wi = new Ks(),
  zi = new Di(),
  qi = new Ks(!0),
  Rn = (e) => e,
  Dt = (e) => Reflect.getPrototypeOf(e);
function Ct(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const i = j(e),
    l = j(t);
  n || (Fe(t, l) && ie(i, "get", t), ie(i, "get", l));
  const { has: o } = Dt(i),
    f = s ? Rn : n ? Ln : ht;
  if (o.call(i, t)) return f(e.get(t));
  if (o.call(i, l)) return f(e.get(l));
  e !== i && e.get(t);
}
function Pt(e, t = !1) {
  const n = this.__v_raw,
    s = j(n),
    i = j(e);
  return (
    t || (Fe(e, i) && ie(s, "has", e), ie(s, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function Et(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ie(j(e), "iterate", Ve), Reflect.get(e, "size", e)
  );
}
function es(e) {
  e = j(e);
  const t = j(this);
  return Dt(t).has.call(t, e) || (t.add(e), $e(t, "add", e, e)), this;
}
function ts(e, t) {
  t = j(t);
  const n = j(this),
    { has: s, get: i } = Dt(n);
  let l = s.call(n, e);
  l || ((e = j(e)), (l = s.call(n, e)));
  const o = i.call(n, e);
  return (
    n.set(e, t), l ? Fe(t, o) && $e(n, "set", e, t) : $e(n, "add", e, t), this
  );
}
function ns(e) {
  const t = j(this),
    { has: n, get: s } = Dt(t);
  let i = n.call(t, e);
  i || ((e = j(e)), (i = n.call(t, e))), s && s.call(t, e);
  const l = t.delete(e);
  return i && $e(t, "delete", e, void 0), l;
}
function ss() {
  const e = j(this),
    t = e.size !== 0,
    n = e.clear();
  return t && $e(e, "clear", void 0, void 0), n;
}
function $t(e, t) {
  return function (s, i) {
    const l = this,
      o = l.__v_raw,
      f = j(o),
      u = t ? Rn : e ? Ln : ht;
    return (
      !e && ie(f, "iterate", Ve), o.forEach((a, h) => s.call(i, u(a), u(h), l))
    );
  };
}
function Ot(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      l = j(i),
      o = Xe(l),
      f = e === "entries" || (e === Symbol.iterator && o),
      u = e === "keys" && o,
      a = i[e](...s),
      h = n ? Rn : t ? Ln : ht;
    return (
      !t && ie(l, "iterate", u ? gn : Ve),
      {
        next() {
          const { value: w, done: P } = a.next();
          return P
            ? { value: w, done: P }
            : { value: f ? [h(w[0]), h(w[1])] : h(w), done: P };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Te(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Gi() {
  const e = {
      get(l) {
        return Ct(this, l);
      },
      get size() {
        return Et(this);
      },
      has: Pt,
      add: es,
      set: ts,
      delete: ns,
      clear: ss,
      forEach: $t(!1, !1),
    },
    t = {
      get(l) {
        return Ct(this, l, !1, !0);
      },
      get size() {
        return Et(this);
      },
      has: Pt,
      add: es,
      set: ts,
      delete: ns,
      clear: ss,
      forEach: $t(!1, !0),
    },
    n = {
      get(l) {
        return Ct(this, l, !0);
      },
      get size() {
        return Et(this, !0);
      },
      has(l) {
        return Pt.call(this, l, !0);
      },
      add: Te("add"),
      set: Te("set"),
      delete: Te("delete"),
      clear: Te("clear"),
      forEach: $t(!0, !1),
    },
    s = {
      get(l) {
        return Ct(this, l, !0, !0);
      },
      get size() {
        return Et(this, !0);
      },
      has(l) {
        return Pt.call(this, l, !0);
      },
      add: Te("add"),
      set: Te("set"),
      delete: Te("delete"),
      clear: Te("clear"),
      forEach: $t(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
      (e[l] = Ot(l, !1, !1)),
        (n[l] = Ot(l, !0, !1)),
        (t[l] = Ot(l, !1, !0)),
        (s[l] = Ot(l, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [Yi, Ji, Xi, Zi] = Gi();
function Mn(e, t) {
  const n = t ? (e ? Zi : Xi) : e ? Ji : Yi;
  return (s, i, l) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
        ? e
        : i === "__v_raw"
          ? s
          : Reflect.get(M(n, i) && i in s ? n : s, i, l);
}
const Qi = { get: Mn(!1, !1) },
  el = { get: Mn(!1, !0) },
  tl = { get: Mn(!0, !1) },
  Vs = new WeakMap(),
  Ds = new WeakMap(),
  Ws = new WeakMap(),
  nl = new WeakMap();
function sl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function il(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : sl($i(e));
}
function Fn(e) {
  return tt(e) ? e : jn(e, !1, Wi, Qi, Vs);
}
function ll(e) {
  return jn(e, !1, qi, el, Ds);
}
function zs(e) {
  return jn(e, !0, zi, tl, Ws);
}
function jn(e, t, n, s, i) {
  if (!D(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const l = i.get(e);
  if (l) return l;
  const o = il(e);
  if (o === 0) return e;
  const f = new Proxy(e, o === 2 ? s : n);
  return i.set(e, f), f;
}
function Ze(e) {
  return tt(e) ? Ze(e.__v_raw) : !!(e && e.__v_isReactive);
}
function tt(e) {
  return !!(e && e.__v_isReadonly);
}
function Lt(e) {
  return !!(e && e.__v_isShallow);
}
function qs(e) {
  return Ze(e) || tt(e);
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Gs(e) {
  return Object.isExtensible(e) && jt(e, "__v_skip", !0), e;
}
const ht = (e) => (D(e) ? Fn(e) : e),
  Ln = (e) => (D(e) ? zs(e) : e);
class Ys {
  constructor(t, n, s, i) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Sn(
        () => t(this._value),
        () => St(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = j(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        Fe(t._value, (t._value = t.effect.run())) &&
        St(t, 4),
      Js(t),
      t.effect._dirtyLevel >= 2 && St(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function ol(e, t, n = !1) {
  let s, i;
  const l = I(e);
  return (
    l ? ((s = e), (i = ue)) : ((s = e.get), (i = e.set)),
    new Ys(s, i, l || !i, n)
  );
}
function Js(e) {
  var t;
  Re &&
    Ke &&
    ((e = j(e)),
    Ns(
      Ke,
      (t = e.dep) != null
        ? t
        : (e.dep = ks(() => (e.dep = void 0), e instanceof Ys ? e : void 0))
    ));
}
function St(e, t = 4, n) {
  e = j(e);
  const s = e.dep;
  s && Hs(s, t);
}
function le(e) {
  return !!(e && e.__v_isRef === !0);
}
function Nt(e) {
  return rl(e, !1);
}
function rl(e, t) {
  return le(e) ? e : new cl(e, t);
}
class cl {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : j(t)),
      (this._value = n ? t : ht(t));
  }
  get value() {
    return Js(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Lt(t) || tt(t);
    (t = n ? t : j(t)),
      Fe(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : ht(t)), St(this, 4));
  }
}
function ul(e) {
  return le(e) ? e.value : e;
}
const fl = {
  get: (e, t, n) => ul(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return le(i) && !le(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Xs(e) {
  return Ze(e) ? e : new Proxy(e, fl);
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Me(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Wt(i, t, n);
  }
}
function pe(e, t, n, s) {
  if (I(e)) {
    const l = Me(e, t, n, s);
    return (
      l &&
        Ts(l) &&
        l.catch((o) => {
          Wt(o, t, n);
        }),
      l
    );
  }
  const i = [];
  for (let l = 0; l < e.length; l++) i.push(pe(e[l], t, n, s));
  return i;
}
function Wt(e, t, n, s = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let l = t.parent;
    const o = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let h = 0; h < a.length; h++) if (a[h](e, o, f) === !1) return;
      }
      l = l.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Me(u, null, 10, [e, o, f]);
      return;
    }
  }
  al(e, n, i, s);
}
function al(e, t, n, s = !0) {
  console.error(e);
}
let pt = !1,
  mn = !1;
const X = [];
let ye = 0;
const Qe = [];
let Se = null,
  Ue = 0;
const Zs = Promise.resolve();
let Nn = null;
function dl(e) {
  const t = Nn || Zs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hl(e) {
  let t = ye + 1,
    n = X.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = X[s],
      l = gt(i);
    l < e || (l === e && i.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function Hn(e) {
  (!X.length || !X.includes(e, pt && e.allowRecurse ? ye + 1 : ye)) &&
    (e.id == null ? X.push(e) : X.splice(hl(e.id), 0, e), Qs());
}
function Qs() {
  !pt && !mn && ((mn = !0), (Nn = Zs.then(ti)));
}
function pl(e) {
  const t = X.indexOf(e);
  t > ye && X.splice(t, 1);
}
function gl(e) {
  T(e)
    ? Qe.push(...e)
    : (!Se || !Se.includes(e, e.allowRecurse ? Ue + 1 : Ue)) && Qe.push(e),
    Qs();
}
function is(e, t, n = pt ? ye + 1 : 0) {
  for (; n < X.length; n++) {
    const s = X[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue;
      X.splice(n, 1), n--, s();
    }
  }
}
function ei(e) {
  if (Qe.length) {
    const t = [...new Set(Qe)].sort((n, s) => gt(n) - gt(s));
    if (((Qe.length = 0), Se)) {
      Se.push(...t);
      return;
    }
    for (Se = t, Ue = 0; Ue < Se.length; Ue++) Se[Ue]();
    (Se = null), (Ue = 0);
  }
}
const gt = (e) => (e.id == null ? 1 / 0 : e.id),
  ml = (e, t) => {
    const n = gt(e) - gt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function ti(e) {
  (mn = !1), (pt = !0), X.sort(ml);
  try {
    for (ye = 0; ye < X.length; ye++) {
      const t = X[ye];
      t && t.active !== !1 && Me(t, null, 14);
    }
  } finally {
    (ye = 0),
      (X.length = 0),
      ei(),
      (pt = !1),
      (Nn = null),
      (X.length || Qe.length) && ti();
  }
}
function _l(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || K;
  let i = n;
  const l = t.startsWith("update:"),
    o = l && t.slice(7);
  if (o && o in s) {
    const h = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: w, trim: P } = s[h] || K;
    P && (i = n.map((S) => (J(S) ? S.trim() : S))), w && (i = n.map(Si));
  }
  let f,
    u = s[(f = nn(t))] || s[(f = nn(et(t)))];
  !u && l && (u = s[(f = nn(it(t)))]), u && pe(u, e, 6, i);
  const a = s[f + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[f]) return;
    (e.emitted[f] = !0), pe(a, e, 6, i);
  }
}
function ni(e, t, n = !1) {
  const s = t.emitsCache,
    i = s.get(e);
  if (i !== void 0) return i;
  const l = e.emits;
  let o = {},
    f = !1;
  if (!I(e)) {
    const u = (a) => {
      const h = ni(a, t, !0);
      h && ((f = !0), Z(o, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  return !l && !f
    ? (D(e) && s.set(e, null), null)
    : (T(l) ? l.forEach((u) => (o[u] = null)) : Z(o, l),
      D(e) && s.set(e, o),
      o);
}
function zt(e, t) {
  return !e || !Ut(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      M(e, t[0].toLowerCase() + t.slice(1)) || M(e, it(t)) || M(e, t));
}
let we = null,
  si = null;
function Ht(e) {
  const t = we;
  return (we = e), (si = (e && e.type.__scopeId) || null), t;
}
function xl(e, t = we, n) {
  if (!t || e._n) return e;
  const s = (...i) => {
    s._d && ps(-1);
    const l = Ht(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Ht(l), s._d && ps(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function on(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    props: l,
    propsOptions: [o],
    slots: f,
    attrs: u,
    emit: a,
    render: h,
    renderCache: w,
    data: P,
    setupState: S,
    ctx: W,
    inheritAttrs: L,
  } = e;
  let q, z;
  const ge = Ht(e);
  try {
    if (n.shapeFlag & 4) {
      const G = i || s,
        ce = G;
      (q = ve(h.call(ce, G, w, l, S, P, W))), (z = u);
    } else {
      const G = t;
      (q = ve(
        G.length > 1 ? G(l, { attrs: u, slots: f, emit: a }) : G(l, null)
      )),
        (z = t.props ? u : bl(u));
    }
  } catch (G) {
    (dt.length = 0), Wt(G, e, 1), (q = fe(De));
  }
  let k = q;
  if (z && L !== !1) {
    const G = Object.keys(z),
      { shapeFlag: ce } = k;
    G.length && ce & 7 && (o && G.some(En) && (z = vl(z, o)), (k = nt(k, z)));
  }
  return (
    n.dirs && ((k = nt(k)), (k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (k.transition = n.transition),
    (q = k),
    Ht(ge),
    q
  );
}
const bl = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Ut(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  vl = (e, t) => {
    const n = {};
    for (const s in e) (!En(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function yl(e, t, n) {
  const { props: s, children: i, component: l } = e,
    { props: o, children: f, patchFlag: u } = t,
    a = l.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return s ? ls(s, o, a) : !!o;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let w = 0; w < h.length; w++) {
        const P = h[w];
        if (o[P] !== s[P] && !zt(a, P)) return !0;
      }
    }
  } else
    return (i || f) && (!f || !f.$stable)
      ? !0
      : s === o
        ? !1
        : s
          ? o
            ? ls(s, o, a)
            : !0
          : !!o;
  return !1;
}
function ls(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    if (t[l] !== e[l] && !zt(n, l)) return !0;
  }
  return !1;
}
function wl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Cl = Symbol.for("v-ndc"),
  Pl = (e) => e.__isSuspense;
function El(e, t) {
  t && t.pendingBranch
    ? T(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : gl(e);
}
const $l = Symbol.for("v-scx"),
  Ol = () => At($l),
  Tt = {};
function rn(e, t, n) {
  return ii(e, t, n);
}
function ii(
  e,
  t,
  { immediate: n, deep: s, flush: i, once: l, onTrack: o, onTrigger: f } = K
) {
  if (t && l) {
    const F = t;
    t = (...Ce) => {
      F(...Ce), ce();
    };
  }
  const u = ne,
    a = (F) => (s === !0 ? F : Ye(F, s === !1 ? 1 : void 0));
  let h,
    w = !1,
    P = !1;
  if (
    (le(e)
      ? ((h = () => e.value), (w = Lt(e)))
      : Ze(e)
        ? ((h = () => a(e)), (w = !0))
        : T(e)
          ? ((P = !0),
            (w = e.some((F) => Ze(F) || Lt(F))),
            (h = () =>
              e.map((F) => {
                if (le(F)) return F.value;
                if (Ze(F)) return a(F);
                if (I(F)) return Me(F, u, 2);
              })))
          : I(e)
            ? t
              ? (h = () => Me(e, u, 2))
              : (h = () => (S && S(), pe(e, u, 3, [W])))
            : (h = ue),
    t && s)
  ) {
    const F = h;
    h = () => Ye(F());
  }
  let S,
    W = (F) => {
      S = k.onStop = () => {
        Me(F, u, 4), (S = k.onStop = void 0);
      };
    },
    L;
  if (Jt)
    if (
      ((W = ue),
      t ? n && pe(t, u, 3, [h(), P ? [] : void 0, W]) : h(),
      i === "sync")
    ) {
      const F = Ol();
      L = F.__watcherHandles || (F.__watcherHandles = []);
    } else return ue;
  let q = P ? new Array(e.length).fill(Tt) : Tt;
  const z = () => {
    if (!(!k.active || !k.dirty))
      if (t) {
        const F = k.run();
        (s || w || (P ? F.some((Ce, me) => Fe(Ce, q[me])) : Fe(F, q))) &&
          (S && S(),
          pe(t, u, 3, [F, q === Tt ? void 0 : P && q[0] === Tt ? [] : q, W]),
          (q = F));
      } else k.run();
  };
  z.allowRecurse = !!t;
  let ge;
  i === "sync"
    ? (ge = z)
    : i === "post"
      ? (ge = () => se(z, u && u.suspense))
      : ((z.pre = !0), u && (z.id = u.uid), (ge = () => Hn(z)));
  const k = new Sn(h, ue, ge),
    G = ki(),
    ce = () => {
      k.stop(), G && $n(G.effects, k);
    };
  return (
    t
      ? n
        ? z()
        : (q = k.run())
      : i === "post"
        ? se(k.run.bind(k), u && u.suspense)
        : k.run(),
    L && L.push(ce),
    ce
  );
}
function Tl(e, t, n) {
  const s = this.proxy,
    i = J(e) ? (e.includes(".") ? li(s, e) : () => s[e]) : e.bind(s, s);
  let l;
  I(t) ? (l = t) : ((l = t.handler), (n = t));
  const o = _t(this),
    f = ii(i, l.bind(s), n);
  return o(), f;
}
function li(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
function Ye(e, t, n = 0, s) {
  if (!D(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((s = s || new Set()), s.has(e))) return e;
  if ((s.add(e), le(e))) Ye(e.value, t, n, s);
  else if (T(e)) for (let i = 0; i < e.length; i++) Ye(e[i], t, n, s);
  else if (Os(e) || Xe(e))
    e.forEach((i) => {
      Ye(i, t, n, s);
    });
  else if (Is(e)) for (const i in e) Ye(e[i], t, n, s);
  return e;
}
function He(e, t, n, s) {
  const i = e.dirs,
    l = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const f = i[o];
    l && (f.oldValue = l[o].value);
    let u = f.dir[s];
    u && (We(), pe(u, n, 8, [e.el, f, e, t]), ze());
  }
}
const It = (e) => !!e.type.__asyncLoader,
  oi = (e) => e.type.__isKeepAlive;
function Sl(e, t) {
  ri(e, "a", t);
}
function Il(e, t) {
  ri(e, "da", t);
}
function ri(e, t, n = ne) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((qt(t, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      oi(i.parent.vnode) && Al(s, t, n, i), (i = i.parent);
  }
}
function Al(e, t, n, s) {
  const i = qt(t, e, s, !0);
  ci(() => {
    $n(s[t], i);
  }, n);
}
function qt(e, t, n = ne, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      l =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          We();
          const f = _t(n),
            u = pe(t, n, e, o);
          return f(), ze(), u;
        });
    return s ? i.unshift(l) : i.push(l), l;
  }
}
const Oe =
    (e) =>
    (t, n = ne) =>
      (!Jt || e === "sp") && qt(e, (...s) => t(...s), n),
  Rl = Oe("bm"),
  kn = Oe("m"),
  Ml = Oe("bu"),
  Fl = Oe("u"),
  jl = Oe("bum"),
  ci = Oe("um"),
  Ll = Oe("sp"),
  Nl = Oe("rtg"),
  Hl = Oe("rtc");
function kl(e, t = ne) {
  qt("ec", e, t);
}
const _n = (e) => (e ? (vi(e) ? Vn(e) || e.proxy : _n(e.parent)) : null),
  ft = Z(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _n(e.parent),
    $root: (e) => _n(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Bn(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), Hn(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = dl.bind(e.proxy)),
    $watch: (e) => Tl.bind(e),
  }),
  cn = (e, t) => e !== K && !e.__isScriptSetup && M(e, t),
  Bl = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: l,
        accessCache: o,
        type: f,
        appContext: u,
      } = e;
      let a;
      if (t[0] !== "$") {
        const S = o[t];
        if (S !== void 0)
          switch (S) {
            case 1:
              return s[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return l[t];
          }
        else {
          if (cn(s, t)) return (o[t] = 1), s[t];
          if (i !== K && M(i, t)) return (o[t] = 2), i[t];
          if ((a = e.propsOptions[0]) && M(a, t)) return (o[t] = 3), l[t];
          if (n !== K && M(n, t)) return (o[t] = 4), n[t];
          xn && (o[t] = 0);
        }
      }
      const h = ft[t];
      let w, P;
      if (h) return t === "$attrs" && ie(e, "get", t), h(e);
      if ((w = f.__cssModules) && (w = w[t])) return w;
      if (n !== K && M(n, t)) return (o[t] = 4), n[t];
      if (((P = u.config.globalProperties), M(P, t))) return P[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: l } = e;
      return cn(i, t)
        ? ((i[t] = n), !0)
        : s !== K && M(s, t)
          ? ((s[t] = n), !0)
          : M(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((l[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: l,
        },
      },
      o
    ) {
      let f;
      return (
        !!n[o] ||
        (e !== K && M(e, o)) ||
        cn(t, o) ||
        ((f = l[0]) && M(f, o)) ||
        M(s, o) ||
        M(ft, o) ||
        M(i.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : M(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function os(e) {
  return T(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let xn = !0;
function Ul(e) {
  const t = Bn(e),
    n = e.proxy,
    s = e.ctx;
  (xn = !1), t.beforeCreate && rs(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: l,
    methods: o,
    watch: f,
    provide: u,
    inject: a,
    created: h,
    beforeMount: w,
    mounted: P,
    beforeUpdate: S,
    updated: W,
    activated: L,
    deactivated: q,
    beforeDestroy: z,
    beforeUnmount: ge,
    destroyed: k,
    unmounted: G,
    render: ce,
    renderTracked: F,
    renderTriggered: Ce,
    errorCaptured: me,
    serverPrefetch: Xt,
    expose: je,
    inheritAttrs: lt,
    components: bt,
    directives: vt,
    filters: Zt,
  } = t;
  if ((a && Kl(a, s, null), o))
    for (const V in o) {
      const B = o[V];
      I(B) && (s[V] = B.bind(n));
    }
  if (i) {
    const V = i.call(n, n);
    D(V) && (e.data = Fn(V));
  }
  if (((xn = !0), l))
    for (const V in l) {
      const B = l[V],
        Le = I(B) ? B.bind(n, n) : I(B.get) ? B.get.bind(n, n) : ue,
        yt = !I(B) && I(B.set) ? B.set.bind(n) : ue,
        Ne = vo({ get: Le, set: yt });
      Object.defineProperty(s, V, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (_e) => (Ne.value = _e),
      });
    }
  if (f) for (const V in f) ui(f[V], s, n, V);
  if (u) {
    const V = I(u) ? u.call(n) : u;
    Reflect.ownKeys(V).forEach((B) => {
      Gl(B, V[B]);
    });
  }
  h && rs(h, e, "c");
  function Q(V, B) {
    T(B) ? B.forEach((Le) => V(Le.bind(n))) : B && V(B.bind(n));
  }
  if (
    (Q(Rl, w),
    Q(kn, P),
    Q(Ml, S),
    Q(Fl, W),
    Q(Sl, L),
    Q(Il, q),
    Q(kl, me),
    Q(Hl, F),
    Q(Nl, Ce),
    Q(jl, ge),
    Q(ci, G),
    Q(Ll, Xt),
    T(je))
  )
    if (je.length) {
      const V = e.exposed || (e.exposed = {});
      je.forEach((B) => {
        Object.defineProperty(V, B, {
          get: () => n[B],
          set: (Le) => (n[B] = Le),
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === ue && (e.render = ce),
    lt != null && (e.inheritAttrs = lt),
    bt && (e.components = bt),
    vt && (e.directives = vt);
}
function Kl(e, t, n = ue) {
  T(e) && (e = bn(e));
  for (const s in e) {
    const i = e[s];
    let l;
    D(i)
      ? "default" in i
        ? (l = At(i.from || s, i.default, !0))
        : (l = At(i.from || s))
      : (l = At(i)),
      le(l)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => l.value,
            set: (o) => (l.value = o),
          })
        : (t[s] = l);
  }
}
function rs(e, t, n) {
  pe(T(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ui(e, t, n, s) {
  const i = s.includes(".") ? li(n, s) : () => n[s];
  if (J(e)) {
    const l = t[e];
    I(l) && rn(i, l);
  } else if (I(e)) rn(i, e.bind(n));
  else if (D(e))
    if (T(e)) e.forEach((l) => ui(l, t, n, s));
    else {
      const l = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(l) && rn(i, l, e);
    }
}
function Bn(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: l,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    f = l.get(t);
  let u;
  return (
    f
      ? (u = f)
      : !i.length && !n && !s
        ? (u = t)
        : ((u = {}),
          i.length && i.forEach((a) => kt(u, a, o, !0)),
          kt(u, t, o)),
    D(t) && l.set(t, u),
    u
  );
}
function kt(e, t, n, s = !1) {
  const { mixins: i, extends: l } = t;
  l && kt(e, l, n, !0), i && i.forEach((o) => kt(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const f = Vl[o] || (n && n[o]);
      e[o] = f ? f(e[o], t[o]) : t[o];
    }
  return e;
}
const Vl = {
  data: cs,
  props: us,
  emits: us,
  methods: ct,
  computed: ct,
  beforeCreate: ee,
  created: ee,
  beforeMount: ee,
  mounted: ee,
  beforeUpdate: ee,
  updated: ee,
  beforeDestroy: ee,
  beforeUnmount: ee,
  destroyed: ee,
  unmounted: ee,
  activated: ee,
  deactivated: ee,
  errorCaptured: ee,
  serverPrefetch: ee,
  components: ct,
  directives: ct,
  watch: Wl,
  provide: cs,
  inject: Dl,
};
function cs(e, t) {
  return t
    ? e
      ? function () {
          return Z(
            I(e) ? e.call(this, this) : e,
            I(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Dl(e, t) {
  return ct(bn(e), bn(t));
}
function bn(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ct(e, t) {
  return e ? Z(Object.create(null), e, t) : t;
}
function us(e, t) {
  return e
    ? T(e) && T(t)
      ? [...new Set([...e, ...t])]
      : Z(Object.create(null), os(e), os(t ?? {}))
    : t;
}
function Wl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Z(Object.create(null), e);
  for (const s in t) n[s] = ee(e[s], t[s]);
  return n;
}
function fi() {
  return {
    app: null,
    config: {
      isNativeTag: Pi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let zl = 0;
function ql(e, t) {
  return function (s, i = null) {
    I(s) || (s = Z({}, s)), i != null && !D(i) && (i = null);
    const l = fi(),
      o = new WeakSet();
    let f = !1;
    const u = (l.app = {
      _uid: zl++,
      _component: s,
      _props: i,
      _container: null,
      _context: l,
      _instance: null,
      version: yo,
      get config() {
        return l.config;
      },
      set config(a) {},
      use(a, ...h) {
        return (
          o.has(a) ||
            (a && I(a.install)
              ? (o.add(a), a.install(u, ...h))
              : I(a) && (o.add(a), a(u, ...h))),
          u
        );
      },
      mixin(a) {
        return l.mixins.includes(a) || l.mixins.push(a), u;
      },
      component(a, h) {
        return h ? ((l.components[a] = h), u) : l.components[a];
      },
      directive(a, h) {
        return h ? ((l.directives[a] = h), u) : l.directives[a];
      },
      mount(a, h, w) {
        if (!f) {
          const P = fe(s, i);
          return (
            (P.appContext = l),
            w === !0 ? (w = "svg") : w === !1 && (w = void 0),
            h && t ? t(P, a) : e(P, a, w),
            (f = !0),
            (u._container = a),
            (a.__vue_app__ = u),
            Vn(P.component) || P.component.proxy
          );
        }
      },
      unmount() {
        f && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, h) {
        return (l.provides[a] = h), u;
      },
      runWithContext(a) {
        const h = at;
        at = u;
        try {
          return a();
        } finally {
          at = h;
        }
      },
    });
    return u;
  };
}
let at = null;
function Gl(e, t) {
  if (ne) {
    let n = ne.provides;
    const s = ne.parent && ne.parent.provides;
    s === n && (n = ne.provides = Object.create(s)), (n[e] = t);
  }
}
function At(e, t, n = !1) {
  const s = ne || we;
  if (s || at) {
    const i = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : at._context.provides;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && I(t) ? t.call(s && s.proxy) : t;
  }
}
function Yl(e, t, n, s = !1) {
  const i = {},
    l = {};
  jt(l, Yt, 1), (e.propsDefaults = Object.create(null)), ai(e, t, i, l);
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
  n ? (e.props = s ? i : ll(i)) : e.type.props ? (e.props = i) : (e.props = l),
    (e.attrs = l);
}
function Jl(e, t, n, s) {
  const {
      props: i,
      attrs: l,
      vnode: { patchFlag: o },
    } = e,
    f = j(i),
    [u] = e.propsOptions;
  let a = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const h = e.vnode.dynamicProps;
      for (let w = 0; w < h.length; w++) {
        let P = h[w];
        if (zt(e.emitsOptions, P)) continue;
        const S = t[P];
        if (u)
          if (M(l, P)) S !== l[P] && ((l[P] = S), (a = !0));
          else {
            const W = et(P);
            i[W] = vn(u, f, W, S, e, !1);
          }
        else S !== l[P] && ((l[P] = S), (a = !0));
      }
    }
  } else {
    ai(e, t, i, l) && (a = !0);
    let h;
    for (const w in f)
      (!t || (!M(t, w) && ((h = it(w)) === w || !M(t, h)))) &&
        (u
          ? n &&
            (n[w] !== void 0 || n[h] !== void 0) &&
            (i[w] = vn(u, f, w, void 0, e, !0))
          : delete i[w]);
    if (l !== f) for (const w in l) (!t || !M(t, w)) && (delete l[w], (a = !0));
  }
  a && $e(e, "set", "$attrs");
}
function ai(e, t, n, s) {
  const [i, l] = e.propsOptions;
  let o = !1,
    f;
  if (t)
    for (let u in t) {
      if (ut(u)) continue;
      const a = t[u];
      let h;
      i && M(i, (h = et(u)))
        ? !l || !l.includes(h)
          ? (n[h] = a)
          : ((f || (f = {}))[h] = a)
        : zt(e.emitsOptions, u) ||
          ((!(u in s) || a !== s[u]) && ((s[u] = a), (o = !0)));
    }
  if (l) {
    const u = j(n),
      a = f || K;
    for (let h = 0; h < l.length; h++) {
      const w = l[h];
      n[w] = vn(i, u, w, a[w], e, !M(a, w));
    }
  }
  return o;
}
function vn(e, t, n, s, i, l) {
  const o = e[n];
  if (o != null) {
    const f = M(o, "default");
    if (f && s === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && I(u)) {
        const { propsDefaults: a } = i;
        if (n in a) s = a[n];
        else {
          const h = _t(i);
          (s = a[n] = u.call(null, t)), h();
        }
      } else s = u;
    }
    o[0] &&
      (l && !f ? (s = !1) : o[1] && (s === "" || s === it(n)) && (s = !0));
  }
  return s;
}
function di(e, t, n = !1) {
  const s = t.propsCache,
    i = s.get(e);
  if (i) return i;
  const l = e.props,
    o = {},
    f = [];
  let u = !1;
  if (!I(e)) {
    const h = (w) => {
      u = !0;
      const [P, S] = di(w, t, !0);
      Z(o, P), S && f.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h);
  }
  if (!l && !u) return D(e) && s.set(e, Je), Je;
  if (T(l))
    for (let h = 0; h < l.length; h++) {
      const w = et(l[h]);
      fs(w) && (o[w] = K);
    }
  else if (l)
    for (const h in l) {
      const w = et(h);
      if (fs(w)) {
        const P = l[h],
          S = (o[w] = T(P) || I(P) ? { type: P } : Z({}, P));
        if (S) {
          const W = hs(Boolean, S.type),
            L = hs(String, S.type);
          (S[0] = W > -1),
            (S[1] = L < 0 || W < L),
            (W > -1 || M(S, "default")) && f.push(w);
        }
      }
    }
  const a = [o, f];
  return D(e) && s.set(e, a), a;
}
function fs(e) {
  return e[0] !== "$" && !ut(e);
}
function as(e) {
  return e === null
    ? "null"
    : typeof e == "function"
      ? e.name || ""
      : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function ds(e, t) {
  return as(e) === as(t);
}
function hs(e, t) {
  return T(t) ? t.findIndex((n) => ds(n, e)) : I(t) && ds(t, e) ? 0 : -1;
}
const hi = (e) => e[0] === "_" || e === "$stable",
  Un = (e) => (T(e) ? e.map(ve) : [ve(e)]),
  Xl = (e, t, n) => {
    if (t._n) return t;
    const s = xl((...i) => Un(t(...i)), n);
    return (s._c = !1), s;
  },
  pi = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
      if (hi(i)) continue;
      const l = e[i];
      if (I(l)) t[i] = Xl(i, l, s);
      else if (l != null) {
        const o = Un(l);
        t[i] = () => o;
      }
    }
  },
  gi = (e, t) => {
    const n = Un(t);
    e.slots.default = () => n;
  },
  Zl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = j(t)), jt(t, "_", n)) : pi(t, (e.slots = {}));
    } else (e.slots = {}), t && gi(e, t);
    jt(e.slots, Yt, 1);
  },
  Ql = (e, t, n) => {
    const { vnode: s, slots: i } = e;
    let l = !0,
      o = K;
    if (s.shapeFlag & 32) {
      const f = t._;
      f
        ? n && f === 1
          ? (l = !1)
          : (Z(i, t), !n && f === 1 && delete i._)
        : ((l = !t.$stable), pi(t, i)),
        (o = t);
    } else t && (gi(e, t), (o = { default: 1 }));
    if (l) for (const f in i) !hi(f) && o[f] == null && delete i[f];
  };
function yn(e, t, n, s, i = !1) {
  if (T(e)) {
    e.forEach((P, S) => yn(P, t && (T(t) ? t[S] : t), n, s, i));
    return;
  }
  if (It(s) && !i) return;
  const l = s.shapeFlag & 4 ? Vn(s.component) || s.component.proxy : s.el,
    o = i ? null : l,
    { i: f, r: u } = e,
    a = t && t.r,
    h = f.refs === K ? (f.refs = {}) : f.refs,
    w = f.setupState;
  if (
    (a != null &&
      a !== u &&
      (J(a)
        ? ((h[a] = null), M(w, a) && (w[a] = null))
        : le(a) && (a.value = null)),
    I(u))
  )
    Me(u, f, 12, [o, h]);
  else {
    const P = J(u),
      S = le(u);
    if (P || S) {
      const W = () => {
        if (e.f) {
          const L = P ? (M(w, u) ? w[u] : h[u]) : u.value;
          i
            ? T(L) && $n(L, l)
            : T(L)
              ? L.includes(l) || L.push(l)
              : P
                ? ((h[u] = [l]), M(w, u) && (w[u] = h[u]))
                : ((u.value = [l]), e.k && (h[e.k] = u.value));
        } else
          P
            ? ((h[u] = o), M(w, u) && (w[u] = o))
            : S && ((u.value = o), e.k && (h[e.k] = o));
      };
      o ? ((W.id = -1), se(W, n)) : W();
    }
  }
}
const se = El;
function eo(e) {
  return to(e);
}
function to(e, t) {
  const n = Rs();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: l,
      createElement: o,
      createText: f,
      createComment: u,
      setText: a,
      setElementText: h,
      parentNode: w,
      nextSibling: P,
      setScopeId: S = ue,
      insertStaticContent: W,
    } = e,
    L = (
      r,
      c,
      d,
      p = null,
      g = null,
      b = null,
      y = void 0,
      x = null,
      v = !!c.dynamicChildren
    ) => {
      if (r === c) return;
      r && !rt(r, c) && ((p = wt(r)), _e(r, g, b, !0), (r = null)),
        c.patchFlag === -2 && ((v = !1), (c.dynamicChildren = null));
      const { type: m, ref: C, shapeFlag: $ } = c;
      switch (m) {
        case Gt:
          q(r, c, d, p);
          break;
        case De:
          z(r, c, d, p);
          break;
        case Rt:
          r == null && ge(c, d, p, y);
          break;
        case Ee:
          bt(r, c, d, p, g, b, y, x, v);
          break;
        default:
          $ & 1
            ? ce(r, c, d, p, g, b, y, x, v)
            : $ & 6
              ? vt(r, c, d, p, g, b, y, x, v)
              : ($ & 64 || $ & 128) && m.process(r, c, d, p, g, b, y, x, v, qe);
      }
      C != null && g && yn(C, r && r.ref, b, c || r, !c);
    },
    q = (r, c, d, p) => {
      if (r == null) s((c.el = f(c.children)), d, p);
      else {
        const g = (c.el = r.el);
        c.children !== r.children && a(g, c.children);
      }
    },
    z = (r, c, d, p) => {
      r == null ? s((c.el = u(c.children || "")), d, p) : (c.el = r.el);
    },
    ge = (r, c, d, p) => {
      [r.el, r.anchor] = W(r.children, c, d, p, r.el, r.anchor);
    },
    k = ({ el: r, anchor: c }, d, p) => {
      let g;
      for (; r && r !== c; ) (g = P(r)), s(r, d, p), (r = g);
      s(c, d, p);
    },
    G = ({ el: r, anchor: c }) => {
      let d;
      for (; r && r !== c; ) (d = P(r)), i(r), (r = d);
      i(c);
    },
    ce = (r, c, d, p, g, b, y, x, v) => {
      c.type === "svg" ? (y = "svg") : c.type === "math" && (y = "mathml"),
        r == null ? F(c, d, p, g, b, y, x, v) : Xt(r, c, g, b, y, x, v);
    },
    F = (r, c, d, p, g, b, y, x) => {
      let v, m;
      const { props: C, shapeFlag: $, transition: E, dirs: O } = r;
      if (
        ((v = r.el = o(r.type, b, C && C.is, C)),
        $ & 8
          ? h(v, r.children)
          : $ & 16 && me(r.children, v, null, p, g, un(r, b), y, x),
        O && He(r, null, p, "created"),
        Ce(v, r, r.scopeId, y, p),
        C)
      ) {
        for (const N in C)
          N !== "value" &&
            !ut(N) &&
            l(v, N, null, C[N], b, r.children, p, g, Pe);
        "value" in C && l(v, "value", null, C.value, b),
          (m = C.onVnodeBeforeMount) && be(m, p, r);
      }
      O && He(r, null, p, "beforeMount");
      const A = no(g, E);
      A && E.beforeEnter(v),
        s(v, c, d),
        ((m = C && C.onVnodeMounted) || A || O) &&
          se(() => {
            m && be(m, p, r), A && E.enter(v), O && He(r, null, p, "mounted");
          }, g);
    },
    Ce = (r, c, d, p, g) => {
      if ((d && S(r, d), p)) for (let b = 0; b < p.length; b++) S(r, p[b]);
      if (g) {
        let b = g.subTree;
        if (c === b) {
          const y = g.vnode;
          Ce(r, y, y.scopeId, y.slotScopeIds, g.parent);
        }
      }
    },
    me = (r, c, d, p, g, b, y, x, v = 0) => {
      for (let m = v; m < r.length; m++) {
        const C = (r[m] = x ? Ie(r[m]) : ve(r[m]));
        L(null, C, c, d, p, g, b, y, x);
      }
    },
    Xt = (r, c, d, p, g, b, y) => {
      const x = (c.el = r.el);
      let { patchFlag: v, dynamicChildren: m, dirs: C } = c;
      v |= r.patchFlag & 16;
      const $ = r.props || K,
        E = c.props || K;
      let O;
      if (
        (d && ke(d, !1),
        (O = E.onVnodeBeforeUpdate) && be(O, d, c, r),
        C && He(c, r, d, "beforeUpdate"),
        d && ke(d, !0),
        m
          ? je(r.dynamicChildren, m, x, d, p, un(c, g), b)
          : y || B(r, c, x, null, d, p, un(c, g), b, !1),
        v > 0)
      ) {
        if (v & 16) lt(x, c, $, E, d, p, g);
        else if (
          (v & 2 && $.class !== E.class && l(x, "class", null, E.class, g),
          v & 4 && l(x, "style", $.style, E.style, g),
          v & 8)
        ) {
          const A = c.dynamicProps;
          for (let N = 0; N < A.length; N++) {
            const U = A[N],
              Y = $[U],
              ae = E[U];
            (ae !== Y || U === "value") &&
              l(x, U, Y, ae, g, r.children, d, p, Pe);
          }
        }
        v & 1 && r.children !== c.children && h(x, c.children);
      } else !y && m == null && lt(x, c, $, E, d, p, g);
      ((O = E.onVnodeUpdated) || C) &&
        se(() => {
          O && be(O, d, c, r), C && He(c, r, d, "updated");
        }, p);
    },
    je = (r, c, d, p, g, b, y) => {
      for (let x = 0; x < c.length; x++) {
        const v = r[x],
          m = c[x],
          C =
            v.el && (v.type === Ee || !rt(v, m) || v.shapeFlag & 70)
              ? w(v.el)
              : d;
        L(v, m, C, null, p, g, b, y, !0);
      }
    },
    lt = (r, c, d, p, g, b, y) => {
      if (d !== p) {
        if (d !== K)
          for (const x in d)
            !ut(x) && !(x in p) && l(r, x, d[x], null, y, c.children, g, b, Pe);
        for (const x in p) {
          if (ut(x)) continue;
          const v = p[x],
            m = d[x];
          v !== m && x !== "value" && l(r, x, m, v, y, c.children, g, b, Pe);
        }
        "value" in p && l(r, "value", d.value, p.value, y);
      }
    },
    bt = (r, c, d, p, g, b, y, x, v) => {
      const m = (c.el = r ? r.el : f("")),
        C = (c.anchor = r ? r.anchor : f(""));
      let { patchFlag: $, dynamicChildren: E, slotScopeIds: O } = c;
      O && (x = x ? x.concat(O) : O),
        r == null
          ? (s(m, d, p), s(C, d, p), me(c.children || [], d, C, g, b, y, x, v))
          : $ > 0 && $ & 64 && E && r.dynamicChildren
            ? (je(r.dynamicChildren, E, d, g, b, y, x),
              (c.key != null || (g && c === g.subTree)) && mi(r, c, !0))
            : B(r, c, d, C, g, b, y, x, v);
    },
    vt = (r, c, d, p, g, b, y, x, v) => {
      (c.slotScopeIds = x),
        r == null
          ? c.shapeFlag & 512
            ? g.ctx.activate(c, d, p, y, v)
            : Zt(c, d, p, g, b, y, v)
          : Dn(r, c, v);
    },
    Zt = (r, c, d, p, g, b, y) => {
      const x = (r.component = po(r, p, g));
      if ((oi(r) && (x.ctx.renderer = qe), go(x), x.asyncDep)) {
        if ((g && g.registerDep(x, Q), !r.el)) {
          const v = (x.subTree = fe(De));
          z(null, v, c, d);
        }
      } else Q(x, r, c, d, g, b, y);
    },
    Dn = (r, c, d) => {
      const p = (c.component = r.component);
      if (yl(r, c, d))
        if (p.asyncDep && !p.asyncResolved) {
          V(p, c, d);
          return;
        } else (p.next = c), pl(p.update), (p.effect.dirty = !0), p.update();
      else (c.el = r.el), (p.vnode = c);
    },
    Q = (r, c, d, p, g, b, y) => {
      const x = () => {
          if (r.isMounted) {
            let { next: C, bu: $, u: E, parent: O, vnode: A } = r;
            {
              const Ge = _i(r);
              if (Ge) {
                C && ((C.el = A.el), V(r, C, y)),
                  Ge.asyncDep.then(() => {
                    r.isUnmounted || x();
                  });
                return;
              }
            }
            let N = C,
              U;
            ke(r, !1),
              C ? ((C.el = A.el), V(r, C, y)) : (C = A),
              $ && sn($),
              (U = C.props && C.props.onVnodeBeforeUpdate) && be(U, O, C, A),
              ke(r, !0);
            const Y = on(r),
              ae = r.subTree;
            (r.subTree = Y),
              L(ae, Y, w(ae.el), wt(ae), r, g, b),
              (C.el = Y.el),
              N === null && wl(r, Y.el),
              E && se(E, g),
              (U = C.props && C.props.onVnodeUpdated) &&
                se(() => be(U, O, C, A), g);
          } else {
            let C;
            const { el: $, props: E } = c,
              { bm: O, m: A, parent: N } = r,
              U = It(c);
            if (
              (ke(r, !1),
              O && sn(O),
              !U && (C = E && E.onVnodeBeforeMount) && be(C, N, c),
              ke(r, !0),
              $ && tn)
            ) {
              const Y = () => {
                (r.subTree = on(r)), tn($, r.subTree, r, g, null);
              };
              U
                ? c.type.__asyncLoader().then(() => !r.isUnmounted && Y())
                : Y();
            } else {
              const Y = (r.subTree = on(r));
              L(null, Y, d, p, r, g, b), (c.el = Y.el);
            }
            if ((A && se(A, g), !U && (C = E && E.onVnodeMounted))) {
              const Y = c;
              se(() => be(C, N, Y), g);
            }
            (c.shapeFlag & 256 ||
              (N && It(N.vnode) && N.vnode.shapeFlag & 256)) &&
              r.a &&
              se(r.a, g),
              (r.isMounted = !0),
              (c = d = p = null);
          }
        },
        v = (r.effect = new Sn(x, ue, () => Hn(m), r.scope)),
        m = (r.update = () => {
          v.dirty && v.run();
        });
      (m.id = r.uid), ke(r, !0), m();
    },
    V = (r, c, d) => {
      c.component = r;
      const p = r.vnode.props;
      (r.vnode = c),
        (r.next = null),
        Jl(r, c.props, p, d),
        Ql(r, c.children, d),
        We(),
        is(r),
        ze();
    },
    B = (r, c, d, p, g, b, y, x, v = !1) => {
      const m = r && r.children,
        C = r ? r.shapeFlag : 0,
        $ = c.children,
        { patchFlag: E, shapeFlag: O } = c;
      if (E > 0) {
        if (E & 128) {
          yt(m, $, d, p, g, b, y, x, v);
          return;
        } else if (E & 256) {
          Le(m, $, d, p, g, b, y, x, v);
          return;
        }
      }
      O & 8
        ? (C & 16 && Pe(m, g, b), $ !== m && h(d, $))
        : C & 16
          ? O & 16
            ? yt(m, $, d, p, g, b, y, x, v)
            : Pe(m, g, b, !0)
          : (C & 8 && h(d, ""), O & 16 && me($, d, p, g, b, y, x, v));
    },
    Le = (r, c, d, p, g, b, y, x, v) => {
      (r = r || Je), (c = c || Je);
      const m = r.length,
        C = c.length,
        $ = Math.min(m, C);
      let E;
      for (E = 0; E < $; E++) {
        const O = (c[E] = v ? Ie(c[E]) : ve(c[E]));
        L(r[E], O, d, null, g, b, y, x, v);
      }
      m > C ? Pe(r, g, b, !0, !1, $) : me(c, d, p, g, b, y, x, v, $);
    },
    yt = (r, c, d, p, g, b, y, x, v) => {
      let m = 0;
      const C = c.length;
      let $ = r.length - 1,
        E = C - 1;
      for (; m <= $ && m <= E; ) {
        const O = r[m],
          A = (c[m] = v ? Ie(c[m]) : ve(c[m]));
        if (rt(O, A)) L(O, A, d, null, g, b, y, x, v);
        else break;
        m++;
      }
      for (; m <= $ && m <= E; ) {
        const O = r[$],
          A = (c[E] = v ? Ie(c[E]) : ve(c[E]));
        if (rt(O, A)) L(O, A, d, null, g, b, y, x, v);
        else break;
        $--, E--;
      }
      if (m > $) {
        if (m <= E) {
          const O = E + 1,
            A = O < C ? c[O].el : p;
          for (; m <= E; )
            L(null, (c[m] = v ? Ie(c[m]) : ve(c[m])), d, A, g, b, y, x, v), m++;
        }
      } else if (m > E) for (; m <= $; ) _e(r[m], g, b, !0), m++;
      else {
        const O = m,
          A = m,
          N = new Map();
        for (m = A; m <= E; m++) {
          const oe = (c[m] = v ? Ie(c[m]) : ve(c[m]));
          oe.key != null && N.set(oe.key, m);
        }
        let U,
          Y = 0;
        const ae = E - A + 1;
        let Ge = !1,
          qn = 0;
        const ot = new Array(ae);
        for (m = 0; m < ae; m++) ot[m] = 0;
        for (m = O; m <= $; m++) {
          const oe = r[m];
          if (Y >= ae) {
            _e(oe, g, b, !0);
            continue;
          }
          let xe;
          if (oe.key != null) xe = N.get(oe.key);
          else
            for (U = A; U <= E; U++)
              if (ot[U - A] === 0 && rt(oe, c[U])) {
                xe = U;
                break;
              }
          xe === void 0
            ? _e(oe, g, b, !0)
            : ((ot[xe - A] = m + 1),
              xe >= qn ? (qn = xe) : (Ge = !0),
              L(oe, c[xe], d, null, g, b, y, x, v),
              Y++);
        }
        const Gn = Ge ? so(ot) : Je;
        for (U = Gn.length - 1, m = ae - 1; m >= 0; m--) {
          const oe = A + m,
            xe = c[oe],
            Yn = oe + 1 < C ? c[oe + 1].el : p;
          ot[m] === 0
            ? L(null, xe, d, Yn, g, b, y, x, v)
            : Ge && (U < 0 || m !== Gn[U] ? Ne(xe, d, Yn, 2) : U--);
        }
      }
    },
    Ne = (r, c, d, p, g = null) => {
      const { el: b, type: y, transition: x, children: v, shapeFlag: m } = r;
      if (m & 6) {
        Ne(r.component.subTree, c, d, p);
        return;
      }
      if (m & 128) {
        r.suspense.move(c, d, p);
        return;
      }
      if (m & 64) {
        y.move(r, c, d, qe);
        return;
      }
      if (y === Ee) {
        s(b, c, d);
        for (let $ = 0; $ < v.length; $++) Ne(v[$], c, d, p);
        s(r.anchor, c, d);
        return;
      }
      if (y === Rt) {
        k(r, c, d);
        return;
      }
      if (p !== 2 && m & 1 && x)
        if (p === 0) x.beforeEnter(b), s(b, c, d), se(() => x.enter(b), g);
        else {
          const { leave: $, delayLeave: E, afterLeave: O } = x,
            A = () => s(b, c, d),
            N = () => {
              $(b, () => {
                A(), O && O();
              });
            };
          E ? E(b, A, N) : N();
        }
      else s(b, c, d);
    },
    _e = (r, c, d, p = !1, g = !1) => {
      const {
        type: b,
        props: y,
        ref: x,
        children: v,
        dynamicChildren: m,
        shapeFlag: C,
        patchFlag: $,
        dirs: E,
      } = r;
      if ((x != null && yn(x, null, d, r, !0), C & 256)) {
        c.ctx.deactivate(r);
        return;
      }
      const O = C & 1 && E,
        A = !It(r);
      let N;
      if ((A && (N = y && y.onVnodeBeforeUnmount) && be(N, c, r), C & 6))
        Ci(r.component, d, p);
      else {
        if (C & 128) {
          r.suspense.unmount(d, p);
          return;
        }
        O && He(r, null, c, "beforeUnmount"),
          C & 64
            ? r.type.remove(r, c, d, g, qe, p)
            : m && (b !== Ee || ($ > 0 && $ & 64))
              ? Pe(m, c, d, !1, !0)
              : ((b === Ee && $ & 384) || (!g && C & 16)) && Pe(v, c, d),
          p && Wn(r);
      }
      ((A && (N = y && y.onVnodeUnmounted)) || O) &&
        se(() => {
          N && be(N, c, r), O && He(r, null, c, "unmounted");
        }, d);
    },
    Wn = (r) => {
      const { type: c, el: d, anchor: p, transition: g } = r;
      if (c === Ee) {
        wi(d, p);
        return;
      }
      if (c === Rt) {
        G(r);
        return;
      }
      const b = () => {
        i(d), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (r.shapeFlag & 1 && g && !g.persisted) {
        const { leave: y, delayLeave: x } = g,
          v = () => y(d, b);
        x ? x(r.el, b, v) : v();
      } else b();
    },
    wi = (r, c) => {
      let d;
      for (; r !== c; ) (d = P(r)), i(r), (r = d);
      i(c);
    },
    Ci = (r, c, d) => {
      const { bum: p, scope: g, update: b, subTree: y, um: x } = r;
      p && sn(p),
        g.stop(),
        b && ((b.active = !1), _e(y, r, c, d)),
        x && se(x, c),
        se(() => {
          r.isUnmounted = !0;
        }, c),
        c &&
          c.pendingBranch &&
          !c.isUnmounted &&
          r.asyncDep &&
          !r.asyncResolved &&
          r.suspenseId === c.pendingId &&
          (c.deps--, c.deps === 0 && c.resolve());
    },
    Pe = (r, c, d, p = !1, g = !1, b = 0) => {
      for (let y = b; y < r.length; y++) _e(r[y], c, d, p, g);
    },
    wt = (r) =>
      r.shapeFlag & 6
        ? wt(r.component.subTree)
        : r.shapeFlag & 128
          ? r.suspense.next()
          : P(r.anchor || r.el);
  let Qt = !1;
  const zn = (r, c, d) => {
      r == null
        ? c._vnode && _e(c._vnode, null, null, !0)
        : L(c._vnode || null, r, c, null, null, null, d),
        Qt || ((Qt = !0), is(), ei(), (Qt = !1)),
        (c._vnode = r);
    },
    qe = {
      p: L,
      um: _e,
      m: Ne,
      r: Wn,
      mt: Zt,
      mc: me,
      pc: B,
      pbc: je,
      n: wt,
      o: e,
    };
  let en, tn;
  return (
    t && ([en, tn] = t(qe)), { render: zn, hydrate: en, createApp: ql(zn, en) }
  );
}
function un({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function ke({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function no(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function mi(e, t, n = !1) {
  const s = e.children,
    i = t.children;
  if (T(s) && T(i))
    for (let l = 0; l < s.length; l++) {
      const o = s[l];
      let f = i[l];
      f.shapeFlag & 1 &&
        !f.dynamicChildren &&
        ((f.patchFlag <= 0 || f.patchFlag === 32) &&
          ((f = i[l] = Ie(i[l])), (f.el = o.el)),
        n || mi(o, f)),
        f.type === Gt && (f.el = o.el);
    }
}
function so(e) {
  const t = e.slice(),
    n = [0];
  let s, i, l, o, f;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((i = n[n.length - 1]), e[i] < a)) {
        (t[s] = i), n.push(s);
        continue;
      }
      for (l = 0, o = n.length - 1; l < o; )
        (f = (l + o) >> 1), e[n[f]] < a ? (l = f + 1) : (o = f);
      a < e[n[l]] && (l > 0 && (t[s] = n[l - 1]), (n[l] = s));
    }
  }
  for (l = n.length, o = n[l - 1]; l-- > 0; ) (n[l] = o), (o = t[o]);
  return n;
}
function _i(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : _i(t);
}
const io = (e) => e.__isTeleport,
  Ee = Symbol.for("v-fgt"),
  Gt = Symbol.for("v-txt"),
  De = Symbol.for("v-cmt"),
  Rt = Symbol.for("v-stc"),
  dt = [];
let he = null;
function R(e = !1) {
  dt.push((he = e ? null : []));
}
function lo() {
  dt.pop(), (he = dt[dt.length - 1] || null);
}
let mt = 1;
function ps(e) {
  mt += e;
}
function xi(e) {
  return (
    (e.dynamicChildren = mt > 0 ? he || Je : null),
    lo(),
    mt > 0 && he && he.push(e),
    e
  );
}
function H(e, t, n, s, i, l) {
  return xi(_(e, t, n, s, i, l, !0));
}
function Be(e, t, n, s, i) {
  return xi(fe(e, t, n, s, i, !0));
}
function oo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Yt = "__vInternal",
  bi = ({ key: e }) => e ?? null,
  Mt = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? J(e) || le(e) || I(e)
        ? { i: we, r: e, k: t, f: !!n }
        : e
      : null
  );
function _(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  l = e === Ee ? 0 : 1,
  o = !1,
  f = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bi(t),
    ref: t && Mt(t),
    scopeId: si,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: l,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: we,
  };
  return (
    f
      ? (Kn(u, n), l & 128 && e.normalize(u))
      : n && (u.shapeFlag |= J(n) ? 8 : 16),
    mt > 0 &&
      !o &&
      he &&
      (u.patchFlag > 0 || l & 6) &&
      u.patchFlag !== 32 &&
      he.push(u),
    u
  );
}
const fe = ro;
function ro(e, t = null, n = null, s = 0, i = null, l = !1) {
  if (((!e || e === Cl) && (e = De), oo(e))) {
    const f = nt(e, t, !0);
    return (
      n && Kn(f, n),
      mt > 0 &&
        !l &&
        he &&
        (f.shapeFlag & 6 ? (he[he.indexOf(e)] = f) : he.push(f)),
      (f.patchFlag |= -2),
      f
    );
  }
  if ((bo(e) && (e = e.__vccOpts), t)) {
    t = co(t);
    let { class: f, style: u } = t;
    f && !J(f) && (t.class = Tn(f)),
      D(u) && (qs(u) && !T(u) && (u = Z({}, u)), (t.style = te(u)));
  }
  const o = J(e) ? 1 : Pl(e) ? 128 : io(e) ? 64 : D(e) ? 4 : I(e) ? 2 : 0;
  return _(e, t, n, s, i, o, l, !0);
}
function co(e) {
  return e ? (qs(e) || Yt in e ? Z({}, e) : e) : null;
}
function nt(e, t, n = !1) {
  const { props: s, ref: i, patchFlag: l, children: o } = e,
    f = t ? fo(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && bi(f),
    ref:
      t && t.ref ? (n && i ? (T(i) ? i.concat(Mt(t)) : [i, Mt(t)]) : Mt(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ee ? (l === -1 ? 16 : l | 16) : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && nt(e.ssContent),
    ssFallback: e.ssFallback && nt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function wn(e = " ", t = 0) {
  return fe(Gt, null, e, t);
}
function uo(e, t) {
  const n = fe(Rt, null, e);
  return (n.staticCount = t), n;
}
function re(e = "", t = !1) {
  return t ? (R(), Be(De, null, e)) : fe(De, null, e);
}
function ve(e) {
  return e == null || typeof e == "boolean"
    ? fe(De)
    : T(e)
      ? fe(Ee, null, e.slice())
      : typeof e == "object"
        ? Ie(e)
        : fe(Gt, null, String(e));
}
function Ie(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : nt(e);
}
function Kn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (T(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Kn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !(Yt in t)
        ? (t._ctx = we)
        : i === 3 &&
          we &&
          (we.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    I(t)
      ? ((t = { default: t, _ctx: we }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [wn(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function fo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Tn([t.class, s.class]));
      else if (i === "style") t.style = te([t.style, s.style]);
      else if (Ut(i)) {
        const l = t[i],
          o = s[i];
        o &&
          l !== o &&
          !(T(l) && l.includes(o)) &&
          (t[i] = l ? [].concat(l, o) : o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function be(e, t, n, s = null) {
  pe(e, t, 7, [n, s]);
}
const ao = fi();
let ho = 0;
function po(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || ao,
    l = {
      uid: ho++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Ni(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: di(s, i),
      emitsOptions: ni(s, i),
      emit: null,
      emitted: null,
      propsDefaults: K,
      inheritAttrs: s.inheritAttrs,
      ctx: K,
      data: K,
      props: K,
      attrs: K,
      slots: K,
      refs: K,
      setupState: K,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
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
      sp: null,
    };
  return (
    (l.ctx = { _: l }),
    (l.root = t ? t.root : l),
    (l.emit = _l.bind(null, l)),
    e.ce && e.ce(l),
    l
  );
}
let ne = null,
  Bt,
  Cn;
{
  const e = Rs(),
    t = (n, s) => {
      let i;
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(s),
        (l) => {
          i.length > 1 ? i.forEach((o) => o(l)) : i[0](l);
        }
      );
    };
  (Bt = t("__VUE_INSTANCE_SETTERS__", (n) => (ne = n))),
    (Cn = t("__VUE_SSR_SETTERS__", (n) => (Jt = n)));
}
const _t = (e) => {
    const t = ne;
    return (
      Bt(e),
      e.scope.on(),
      () => {
        e.scope.off(), Bt(t);
      }
    );
  },
  gs = () => {
    ne && ne.scope.off(), Bt(null);
  };
function vi(e) {
  return e.vnode.shapeFlag & 4;
}
let Jt = !1;
function go(e, t = !1) {
  t && Cn(t);
  const { props: n, children: s } = e.vnode,
    i = vi(e);
  Yl(e, n, i, t), Zl(e, s);
  const l = i ? mo(e, t) : void 0;
  return t && Cn(!1), l;
}
function mo(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Gs(new Proxy(e.ctx, Bl)));
  const { setup: s } = n;
  if (s) {
    const i = (e.setupContext = s.length > 1 ? xo(e) : null),
      l = _t(e);
    We();
    const o = Me(s, e, 0, [e.props, i]);
    if ((ze(), l(), Ts(o))) {
      if ((o.then(gs, gs), t))
        return o
          .then((f) => {
            ms(e, f, t);
          })
          .catch((f) => {
            Wt(f, e, 0);
          });
      e.asyncDep = o;
    } else ms(e, o, t);
  } else yi(e, t);
}
function ms(e, t, n) {
  I(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : D(t) && (e.setupState = Xs(t)),
    yi(e, n);
}
let _s;
function yi(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && _s && !s.render) {
      const i = s.template || Bn(e).template;
      if (i) {
        const { isCustomElement: l, compilerOptions: o } = e.appContext.config,
          { delimiters: f, compilerOptions: u } = s,
          a = Z(Z({ isCustomElement: l, delimiters: f }, o), u);
        s.render = _s(i, a);
      }
    }
    e.render = s.render || ue;
  }
  {
    const i = _t(e);
    We();
    try {
      Ul(e);
    } finally {
      ze(), i();
    }
  }
}
function _o(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return ie(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function xo(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return _o(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Vn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Xs(Gs(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in ft) return ft[n](e);
        },
        has(t, n) {
          return n in t || n in ft;
        },
      }))
    );
}
function bo(e) {
  return I(e) && "__vccOpts" in e;
}
const vo = (e, t) => ol(e, t, Jt),
  yo = "3.4.21";
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const wo = "http://www.w3.org/2000/svg",
  Co = "http://www.w3.org/1998/Math/MathML",
  Ae = typeof document < "u" ? document : null,
  xs = Ae && Ae.createElement("template"),
  Po = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const i =
        t === "svg"
          ? Ae.createElementNS(wo, e)
          : t === "mathml"
            ? Ae.createElementNS(Co, e)
            : Ae.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      );
    },
    createText: (e) => Ae.createTextNode(e),
    createComment: (e) => Ae.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ae.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, i, l) {
      const o = n ? n.previousSibling : t.lastChild;
      if (i && (i === l || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === l || !(i = i.nextSibling));

        );
      else {
        xs.innerHTML =
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e;
        const f = xs.content;
        if (s === "svg" || s === "mathml") {
          const u = f.firstChild;
          for (; u.firstChild; ) f.appendChild(u.firstChild);
          f.removeChild(u);
        }
        t.insertBefore(f, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Eo = Symbol("_vtc");
function $o(e, t, n) {
  const s = e[Eo];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t);
}
const bs = Symbol("_vod"),
  Oo = Symbol("_vsh"),
  To = Symbol(""),
  So = /(^|;)\s*display\s*:/;
function Io(e, t, n) {
  const s = e.style,
    i = J(n);
  let l = !1;
  if (n && !i) {
    if (t)
      if (J(t))
        for (const o of t.split(";")) {
          const f = o.slice(0, o.indexOf(":")).trim();
          n[f] == null && Ft(s, f, "");
        }
      else for (const o in t) n[o] == null && Ft(s, o, "");
    for (const o in n) o === "display" && (l = !0), Ft(s, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = s[To];
      o && (n += ";" + o), (s.cssText = n), (l = So.test(n));
    }
  } else t && e.removeAttribute("style");
  bs in e && ((e[bs] = l ? s.display : ""), e[Oo] && (s.display = "none"));
}
const vs = /\s*!important$/;
function Ft(e, t, n) {
  if (T(n)) n.forEach((s) => Ft(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Ao(e, t);
    vs.test(n)
      ? e.setProperty(it(s), n.replace(vs, ""), "important")
      : (e[s] = n);
  }
}
const ys = ["Webkit", "Moz", "ms"],
  fn = {};
function Ao(e, t) {
  const n = fn[t];
  if (n) return n;
  let s = et(t);
  if (s !== "filter" && s in e) return (fn[t] = s);
  s = As(s);
  for (let i = 0; i < ys.length; i++) {
    const l = ys[i] + s;
    if (l in e) return (fn[t] = l);
  }
  return t;
}
const ws = "http://www.w3.org/1999/xlink";
function Ro(e, t, n, s, i) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(ws, t.slice(6, t.length))
      : e.setAttributeNS(ws, t, n);
  else {
    const l = ji(t);
    n == null || (l && !Ms(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, l ? "" : n);
  }
}
function Mo(e, t, n, s, i, l, o) {
  if (t === "innerHTML" || t === "textContent") {
    s && o(s, i, l), (e[t] = n ?? "");
    return;
  }
  const f = e.tagName;
  if (t === "value" && f !== "PROGRESS" && !f.includes("-")) {
    const a = f === "OPTION" ? e.getAttribute("value") || "" : e.value,
      h = n ?? "";
    (a !== h || !("_value" in e)) && (e.value = h),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Ms(n))
      : n == null && a === "string"
        ? ((n = ""), (u = !0))
        : a === "number" && ((n = 0), (u = !0));
  }
  try {
    e[t] = n;
  } catch {}
  u && e.removeAttribute(t);
}
function Fo(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function jo(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Cs = Symbol("_vei");
function Lo(e, t, n, s, i = null) {
  const l = e[Cs] || (e[Cs] = {}),
    o = l[t];
  if (s && o) o.value = s;
  else {
    const [f, u] = No(t);
    if (s) {
      const a = (l[t] = Bo(s, i));
      Fo(e, f, a, u);
    } else o && (jo(e, f, o, u), (l[t] = void 0));
  }
}
const Ps = /(?:Once|Passive|Capture)$/;
function No(e) {
  let t;
  if (Ps.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Ps)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : it(e.slice(2)), t];
}
let an = 0;
const Ho = Promise.resolve(),
  ko = () => an || (Ho.then(() => (an = 0)), (an = Date.now()));
function Bo(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    pe(Uo(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = ko()), n;
}
function Uo(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return t;
}
const Es = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Ko = (e, t, n, s, i, l, o, f, u) => {
    const a = i === "svg";
    t === "class"
      ? $o(e, s, a)
      : t === "style"
        ? Io(e, n, s)
        : Ut(t)
          ? En(t) || Lo(e, t, n, s, o)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Vo(e, t, s, a)
              )
            ? Mo(e, t, s, l, o, f, u)
            : (t === "true-value"
                ? (e._trueValue = s)
                : t === "false-value" && (e._falseValue = s),
              Ro(e, t, s, a));
  };
function Vo(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Es(t) && I(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Es(t) && J(n) ? !1 : t in e;
}
const Do = Z({ patchProp: Ko }, Po);
let $s;
function Wo() {
  return $s || ($s = eo(Do));
}
const zo = (...e) => {
  const t = Wo().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const i = Go(s);
      if (!i) return;
      const l = t._component;
      !I(l) && !l.render && !l.template && (l.template = i.innerHTML),
        (i.innerHTML = "");
      const o = n(i, !1, qo(i));
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function qo(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Go(e) {
  return J(e) ? document.querySelector(e) : e;
}
const xt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, i] of t) n[s] = i;
    return n;
  },
  Yo = {},
  Jo = {
    class:
      "text-white w-5/6 h-[calc(100vh-7rem)] font-maintext text-xl flex justify-center items-center animate-[openPage_0.8s_ease-in-out]",
  },
  Xo = _("div", { class: "w-full m-auto" }, " front ", -1),
  Zo = [Xo];
function Qo(e, t) {
  return R(), H("div", Jo, Zo);
}
const er = xt(Yo, [["render", Qo]]),
  tr = {},
  nr = {
    class:
      "text-white w-5/6 h-[calc(100vh-7rem)] font-maintext text-xl flex justify-center items-center animate-[openPage_0.5s_ease-in-out]",
  },
  sr = _("div", { class: "w-1/2 m-auto" }, "back", -1),
  ir = [sr];
function lr(e, t) {
  return R(), H("div", nr, ir);
}
const or = xt(tr, [["render", lr]]),
  rr = {},
  cr = {
    class:
      "text-white w-5/6 h-[calc(100vh-7rem)] font-maintext text-xs flex justify-center items-center animate-[openPage_0.5s_ease-in-out]",
  },
  ur = _(
    "div",
    {
      class:
        "w-full h-full m-auto bg-[url('/mapsppt.png')] bg-cover bg-no-repeat bg-center flex items-center pr-44 justify-end max-xl:justify-center max-xl:pr-0",
    },
    [
      _(
        "div",
        {
          class:
            "text-center p-8 bg-[#0c0c0c] shadow-2xl p-4 rounded-xl flex flex-col gap-4 justify-center items-center max-xl:bg-[#0c0c0ccc]",
        },
        [
          _(
            "span",
            { class: "text-3xl max-[550px]:text-2xl max-[450px]:text-xl" },
            [wn(" Мы находимся в городе "), _("br"), wn(" Санкт-Петербург ")]
          ),
          _(
            "span",
            { class: "text-2xl max-[550px]:text-xl max-[450px]:text-lg" },
            "связь с нами"
          ),
          _("span", null, "vk tg"),
          _("span", null, "vk tg"),
          _("span", null, "vk tg"),
        ]
      ),
    ],
    -1
  ),
  fr = [ur];
function ar(e, t) {
  return R(), H("div", cr, fr);
}
const dr = xt(rr, [["render", ar]]),
  hr = {},
  pr = {
    class:
      "text-white w-5/6 h-[calc(100vh-7rem)] font-maintext text-xl flex justify-center items-center animate-[openPage_0.5s_ease-in-out]",
  },
  gr = uo(
    '<div class="w-full m-auto flex flex-col gap-8"><div class="text-center flex flex-col"><span class="text-2xl">У вас остались вопросы или хотите с нами сотрудничать?</span><span><b>напишите</b> нам</span></div><div class="flex [&amp;&gt;input]:w-1/2 gap-12 max-[800px]:flex-col max-[800px]:[&amp;&gt;input]:w-full m-auto [&amp;&gt;input]:h-10 [&amp;&gt;input]:bg-transparent [&amp;&gt;input]:text-white [&amp;&gt;input]:outline-none [&amp;&gt;input]:border-b [&amp;&gt;input]:border-white"><input type="text" placeholder="Имя"><input type="text" placeholder="Email"></div><button class="px-4 h-10 bg-[#0f33ff] m-auto font-bold uppercase tracking-widest"> Связаться </button></div>',
    1
  ),
  mr = [gr];
function _r(e, t) {
  return R(), H("div", pr, mr);
}
const xr = xt(hr, [["render", _r]]),
  br = "img/logo.svg",
  vr = { class: "w-full h-28 fixed top-0 flex justify-center" },
  yr = {
    class:
      "flex justify-between items-center w-8/12 h-full max-[800px]:w-10/12",
  },
  wr = _("div", { class: "w-full" }, null, -1),
  Cr = _("div", { class: "w-1/2" }, null, -1),
  Pr = _("div", { class: "w-1/3" }, null, -1),
  Er = [wr, Cr, Pr],
  $r = {
    __name: "HeaderComponent",
    props: { toggleHamburger: Function, editCountPage: Function },
    setup(e) {
      return (t, n) => (
        R(),
        H("header", vr, [
          _("div", yr, [
            _("img", {
              src: br,
              class: "w-14 h-14 cursor-pointer",
              alt: "",
              onClick: n[0] || (n[0] = (s) => e.editCountPage(0)),
            }),
            _(
              "button",
              {
                onClick:
                  n[1] ||
                  (n[1] = (...s) =>
                    e.toggleHamburger && e.toggleHamburger(...s)),
                class:
                  "group w-10 h-6 cursor-pointer [&>div]:h-1/6 [&>div]:bg-white [&>div]:rounded-full flex flex-col justify-between hover:items-end",
                alt: "",
              },
              Er
            ),
          ]),
        ])
      );
    },
  },
  Or = {
    class:
      "text-white h-[calc(100vh-7rem)] w-1/6 flex flex justify-center items-center font-numbers text-xl z-50",
  },
  Tr = {
    class:
      "h-full flex flex-col justify-center items-center [&>div:nth-child(even)]:-mt-2 [&>div:nth-child(even)]:h-2 [&>div:nth-child(even)>button]:z-10 [&>div:nth-child(even)>button]:bg-[#252525] [&>div:nth-child(even)>button]:rounded-full [&>div:nth-child(even)>button]:w-2 [&>div:nth-child(even)>button]:h-2 [&>div:nth-child(odd)]:w-px [&>div:nth-child(odd)]:h-[80px] [&>div:nth-child(odd)]:bg-[#252525]",
  },
  Sr = _("div", null, null, -1),
  Ir = _("div", null, null, -1),
  Ar = _("div", null, null, -1),
  Rr = _("div", null, null, -1),
  Mr = _("div", null, null, -1),
  Fr = _("div", null, null, -1),
  jr = _("div", null, null, -1),
  Lr = {
    class:
      "text-[#545454] h-full flex flex-col justify-center items-center [&>div:nth-child(even)>button]:text-left [&>div:nth-child(even)]:-mt-2 [&>div:nth-child(even)]:h-2 [&>div:nth-child(even)>button]:z-10 [&>div:nth-child(even)>button]:w-[100px] [&>div:nth-child(odd)]:w-px [&>div:nth-child(odd)]:h-[80px]",
  },
  Nr = _("div", null, null, -1),
  Hr = { key: 1 },
  kr = _("div", null, null, -1),
  Br = { key: 1 },
  Ur = _("div", null, null, -1),
  Kr = { key: 1 },
  Vr = _("div", null, null, -1),
  Dr = { key: 1 },
  Wr = _("div", null, null, -1),
  zr = { key: 1 },
  qr = _("div", null, null, -1),
  Gr = { key: 1 },
  Yr = _("div", null, null, -1),
  Jr = {
    __name: "CountPagesComponent",
    props: { editCountPage: Function, countPage: Number },
    setup(e) {
      return (t, n) => (
        R(),
        H("div", Or, [
          _("div", Tr, [
            Sr,
            _("div", null, [
              _(
                "button",
                {
                  onClick: n[0] || (n[0] = (s) => e.editCountPage(0)),
                  style: te(e.countPage === 0 ? "background: #e3e3e3" : ""),
                },
                null,
                4
              ),
            ]),
            Ir,
            _("div", null, [
              _(
                "button",
                {
                  onClick: n[1] || (n[1] = (s) => e.editCountPage(1)),
                  style: te(e.countPage === 1 ? "background: #e3e3e3" : ""),
                },
                null,
                4
              ),
            ]),
            Ar,
            _("div", null, [
              _(
                "button",
                {
                  onClick: n[2] || (n[2] = (s) => e.editCountPage(2)),
                  style: te(e.countPage === 2 ? "background: #e3e3e3" : ""),
                },
                null,
                4
              ),
            ]),
            Rr,
            _("div", null, [
              _(
                "button",
                {
                  onClick: n[3] || (n[3] = (s) => e.editCountPage(3)),
                  style: te(e.countPage === 3 ? "background: #e3e3e3" : ""),
                },
                null,
                4
              ),
            ]),
            Mr,
            _("div", null, [
              _(
                "button",
                {
                  onClick: n[4] || (n[4] = (s) => e.editCountPage(4)),
                  style: te(e.countPage === 4 ? "background: #e3e3e3" : ""),
                },
                null,
                4
              ),
            ]),
            Fr,
            _("div", null, [
              _(
                "button",
                {
                  onClick: n[5] || (n[5] = (s) => e.editCountPage(5)),
                  style: te(e.countPage === 5 ? "background: #e3e3e3" : ""),
                },
                null,
                4
              ),
            ]),
            jr,
          ]),
          _("div", Lr, [
            Nr,
            _("div", null, [
              _(
                "button",
                { onClick: n[6] || (n[6] = (s) => e.editCountPage(0)) },
                [
                  e.countPage === 0
                    ? (R(),
                      H(
                        "span",
                        {
                          key: 0,
                          id: "welcome",
                          style: te(e.countPage === 0 ? "color: #e3e3e3" : ""),
                        },
                        null,
                        4
                      ))
                    : (R(), H("span", Hr, "00")),
                ]
              ),
            ]),
            kr,
            _("div", null, [
              _(
                "button",
                { onClick: n[7] || (n[7] = (s) => e.editCountPage(1)) },
                [
                  e.countPage === 1
                    ? (R(),
                      H(
                        "span",
                        {
                          key: 0,
                          id: "front",
                          style: te(e.countPage === 1 ? "color: #e3e3e3" : ""),
                        },
                        null,
                        4
                      ))
                    : (R(), H("span", Br, "01")),
                ]
              ),
            ]),
            Ur,
            _("div", null, [
              _(
                "button",
                { onClick: n[8] || (n[8] = (s) => e.editCountPage(2)) },
                [
                  e.countPage === 2
                    ? (R(),
                      H(
                        "span",
                        {
                          key: 0,
                          id: "back",
                          style: te(e.countPage === 2 ? "color: #e3e3e3" : ""),
                        },
                        null,
                        4
                      ))
                    : (R(), H("span", Kr, "02")),
                ]
              ),
            ]),
            Vr,
            _("div", null, [
              _(
                "button",
                { onClick: n[9] || (n[9] = (s) => e.editCountPage(3)) },
                [
                  e.countPage === 3
                    ? (R(),
                      H(
                        "span",
                        {
                          key: 0,
                          id: "works",
                          style: te(e.countPage === 3 ? "color: #e3e3e3" : ""),
                        },
                        null,
                        4
                      ))
                    : (R(), H("span", Dr, "03")),
                ]
              ),
            ]),
            Wr,
            _("div", null, [
              _(
                "button",
                { onClick: n[10] || (n[10] = (s) => e.editCountPage(4)) },
                [
                  e.countPage === 4
                    ? (R(),
                      H(
                        "span",
                        {
                          key: 0,
                          id: "contacts",
                          style: te(e.countPage === 4 ? "color: #e3e3e3" : ""),
                        },
                        null,
                        4
                      ))
                    : (R(), H("span", zr, "04")),
                ]
              ),
            ]),
            qr,
            _("div", null, [
              _(
                "button",
                { onClick: n[11] || (n[11] = (s) => e.editCountPage(5)) },
                [
                  e.countPage === 5
                    ? (R(),
                      H(
                        "span",
                        {
                          key: 0,
                          id: "hire",
                          style: te(e.countPage === 5 ? "color: #e3e3e3" : ""),
                        },
                        null,
                        4
                      ))
                    : (R(), H("span", Gr, "05")),
                ]
              ),
            ]),
            Yr,
          ]),
        ])
      );
    },
  },
  Xr = {
    class:
      "text-white w-5/6 nax-[800px]:w-full h-[calc(100vh-7rem)] font-maintext text-xl flex justify-center items-center animate-[openPage_0.5s_ease-in-out]",
  },
  Zr = {
    class: "w-full h-full m-auto flex flex-col justify-center items-center",
  },
  Qr = {
    class:
      "w-full h-3/5 gap-8 border-b border-white flex justify-between items-end",
  },
  ec = {
    class:
      "w-1/2 h-full flex flex-col gap-4 justify-end items-start max-[600px]:w-full",
  },
  tc = _(
    "span",
    null,
    "Добро пожаловать в нашу веб-студию, где каждая страница — это искусство, а каждый проект — уникальная история вашего бренда.",
    -1
  ),
  nc = _(
    "div",
    {
      class:
        "w-1/2 h-full max-[600px]:hidden bg-[url('/welcome.png')] bg-bottom bg-contain bg-no-repeat float-bottom",
    },
    null,
    -1
  ),
  sc = {
    class: "w-full h-1/5 flex justify-between items-center 2xl:justify-center",
  },
  ic = { class: "2xl:hidden" },
  lc = _("b", null, "BAit это -", -1),
  oc = _(
    "div",
    {
      class:
        "flex justify-between items-center [&>span]:flex [&>span]:flex-col [&>span]:gap-2 max-2xl:hidden",
    },
    [
      _("span", null, [
        _("b", null, "BAit это -"),
        _("span", null, "Визуализация вашей мечты в онлайн-реальности"),
      ]),
      _("span", null, [
        _("b", null, "BAit это -"),
        _("span", null, "Дизайн, который оставит след в виртуальном мире"),
      ]),
      _("span", null, [
        _("b", null, "BAit это -"),
        _("span", null, "Создание эстетики в каждом пикселе вашего сайта"),
      ]),
    ],
    -1
  ),
  rc = {
    __name: "WelcomePage",
    props: { editCountPage: Function, countPage: Number },
    setup(e) {
      const t = Nt(0),
        n = [
          "Визуализация вашей мечты в онлайн-реальности",
          "Дизайн, который оставит след в виртуальном мире",
          "Создание эстетики в каждом пикселе вашего сайта",
        ],
        s = Nt(n[t.value]);
      return (
        kn(() => {
          setInterval(() => {
            (t.value = (1 + t.value) % 3), (s.value = n[t.value]);
          }, 5e3);
        }),
        (i, l) => (
          R(),
          H("div", Xr, [
            _("div", Zr, [
              _("div", Qr, [
                _("div", ec, [
                  tc,
                  _(
                    "button",
                    {
                      class:
                        "px-4 h-10 bg-[#0f33ff] font-bold tracking-widest mb-4",
                      onClick: l[0] || (l[0] = (o) => e.editCountPage(5)),
                    },
                    " Написать нам "
                  ),
                ]),
                nc,
              ]),
              _("div", sc, [
                _("div", ic, [
                  _("span", null, [lc, _("span", null, Li(s.value), 1)]),
                ]),
                oc,
              ]),
            ]),
          ])
        )
      );
    },
  },
  cc = {},
  uc = {
    class:
      "text-white w-5/6 h-[calc(100vh-7rem)] font-maintext text-xl flex justify-center items-center animate-[openPage_0.5s_ease-in-out]",
  },
  fc = _("div", { class: "w-1/2 m-auto" }, "works", -1),
  ac = [fc];
function dc(e, t) {
  return R(), H("div", uc, ac);
}
const hc = xt(cc, [["render", dc]]),
  pc = {
    class:
      "relative bg-[#0c0c0c] flex justify-center items-center overflow-hidden",
  },
  gc = {
    class: "bg-[#0c0c0c] h-screen w-screen overflow-hidden",
    id: "mainWindow",
  },
  mc = {
    class:
      "h-full flex justify-start items-end w-8/12 max-[800px]:w-10/12 m-auto",
  },
  _c = {
    key: 0,
    class:
      "absolute w-screen h-screen backdrop-blur-[1.5px] flex flex-col justify-center opacity-0 items-center text-white [&>span>div]:w-[calc(100%+4rem)] [&>span>div]:absolute [&>span>div]:h-3.5 [&>span>div]:bg-[#0f33ff] [&>span>div]:z-10 text-6xl gap-4 font-numbers animate-[openMenu_0.5s_ease-in-out] [&>span]:cursor-pointer [&>span]:flex [&>span]:justify-center [&>span]:items-center [&>span]:relative",
    id: "menu",
  },
  xc = { key: 0 },
  bc = _("span", { class: "" }, "Welcome", -1),
  vc = { key: 0 },
  yc = _("span", null, "Frontend", -1),
  wc = { key: 0 },
  Cc = _("span", null, "Backend", -1),
  Pc = { key: 0 },
  Ec = _("span", null, "Works", -1),
  $c = { key: 0 },
  Oc = _("span", null, "Contacts", -1),
  Tc = { key: 0 },
  Sc = _("span", null, "Hire us", -1),
  Ic = {
    __name: "App",
    setup(e) {
      const t = Nt(0),
        n = Nt(!1),
        s = (u) => {
          u != t.value && ((t.value = u), o(i[t.value]));
        },
        i = [
          { selector: "welcome", text: "Welcome" },
          { selector: "front", text: "Frontend" },
          { selector: "back", text: "Backend" },
          { selector: "works", text: "Works" },
          { selector: "contacts", text: "Contacts" },
          { selector: "hire", text: "Hire us" },
        ];
      let l = 0;
      const o = (u) => {
        if (l == 0)
          for (let a = 0; a < u.text.length; a++)
            setTimeout(() => {
              document.getElementById(u.selector).innerHTML += u.text.charAt(a);
            }, 100 * a);
      };
      kn(() => {
        window.addEventListener("wheel", (u) => {
          if (l === 0) {
            if (n.value) return;
            !n.value && t.value === 0 && u.deltaY < 0
              ? ((t.value = 5), o(i[t.value]))
              : !n.value && t.value === 5 && u.deltaY > 0
                ? ((t.value = 0), o(i[t.value]))
                : ((t.value += Math.sign(u.deltaY)), o(i[t.value])),
              (l = 1),
              setTimeout(() => {
                l = 0;
              }, 500);
          }
        }),
          o(i[t.value]);
      });
      const f = () => {
        const u = document.querySelector("#mainWindow");
        (n.value = !n.value),
          n.value
            ? (u.classList.remove("animate-[closeHamburger_0.4s_ease-in-out]"),
              u.classList.add("animate-[openHamburger_0.4s_ease-in-out]"),
              (u.style.outline = "30px solid #0f33ff"),
              setTimeout(() => {
                document.getElementById("menu").style.opacity = 1;
              }, 400),
              setTimeout(() => {
                u.style.transform =
                  "matrix3d(3.894348, 0.638783, 0, 0.002261,  0, 2.82, 0, 0,  0, 0, 1, 0, 101, 109, 0, 1) scaleY(0.2) scaleX(0.15)";
              }, 400))
            : n.value ||
              (u.classList.remove("animate-[openHamburger_0.4s_ease-in-out]"),
              u.classList.add("animate-[closeHamburger_0.4s_ease-in-out]"),
              (u.style.outline = "none"),
              (document.getElementById("menu").style.opacity = 0),
              setTimeout(() => {
                u.style.transform =
                  "matrix3d(1, 0, 0, 0,  0, 1, 0, 0,  0, 0, 1, 0, 0, 0, 0, 1) scale(1)";
              }, 400));
      };
      return (u, a) => (
        R(),
        H("div", pc, [
          _("div", gc, [
            fe($r, { toggleHamburger: f, editCountPage: s }),
            _("div", mc, [
              fe(Jr, { editCountPage: s, countPage: t.value }, null, 8, [
                "countPage",
              ]),
              t.value === 0
                ? (R(),
                  Be(
                    rc,
                    { key: 0, editCountPage: s, countPage: t.value },
                    null,
                    8,
                    ["countPage"]
                  ))
                : re("", !0),
              t.value === 1 ? (R(), Be(er, { key: 1 })) : re("", !0),
              t.value === 2 ? (R(), Be(or, { key: 2 })) : re("", !0),
              t.value === 3 ? (R(), Be(hc, { key: 3 })) : re("", !0),
              t.value === 4 ? (R(), Be(dr, { key: 4 })) : re("", !0),
              t.value === 5 ? (R(), Be(xr, { key: 5 })) : re("", !0),
            ]),
          ]),
          n.value
            ? (R(),
              H("div", _c, [
                _("span", { onClick: a[0] || (a[0] = (h) => (s(0), f())) }, [
                  t.value === 0 ? (R(), H("div", xc)) : re("", !0),
                  bc,
                ]),
                _("span", { onClick: a[1] || (a[1] = (h) => (s(1), f())) }, [
                  t.value === 1 ? (R(), H("div", vc)) : re("", !0),
                  yc,
                ]),
                _("span", { onClick: a[2] || (a[2] = (h) => (s(2), f())) }, [
                  t.value === 2 ? (R(), H("div", wc)) : re("", !0),
                  Cc,
                ]),
                _("span", { onClick: a[3] || (a[3] = (h) => (s(3), f())) }, [
                  t.value === 3 ? (R(), H("div", Pc)) : re("", !0),
                  Ec,
                ]),
                _("span", { onClick: a[4] || (a[4] = (h) => (s(4), f())) }, [
                  t.value === 4 ? (R(), H("div", $c)) : re("", !0),
                  Oc,
                ]),
                _("span", { onClick: a[5] || (a[5] = (h) => (s(5), f())) }, [
                  t.value === 5 ? (R(), H("div", Tc)) : re("", !0),
                  Sc,
                ]),
              ]))
            : re("", !0),
        ])
      );
    },
  };
zo(Ic).mount("#app");
