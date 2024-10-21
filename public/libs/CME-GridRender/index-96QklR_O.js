var lo = Object.defineProperty;
var co = (i, e, t) => e in i ? lo(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Wi = (i, e, t) => (co(i, typeof e != "symbol" ? e + "" : e, t), t);
import { defineComponent as ho } from "vue";
class Yr {
  constructor() {
    this.disposed = !1;
  }
  /**
   * Clean up.
   */
  dispose() {
    this.disposed || (this.disposed = !0, this.disposeInternal());
  }
  /**
   * Extension point for disposable objects.
   * @protected
   */
  disposeInternal() {
  }
}
class Gt {
  /**
   * @param {string} type Type.
   */
  constructor(e) {
    this.propagationStopped, this.defaultPrevented, this.type = e, this.target = null;
  }
  /**
   * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
   * will be fired.
   * @api
   */
  preventDefault() {
    this.defaultPrevented = !0;
  }
  /**
   * Stop event propagation.
   * @api
   */
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
function ri(i, e) {
  return i > e ? 1 : i < e ? -1 : 0;
}
function uo(i, e) {
  return i < e ? 1 : i > e ? -1 : 0;
}
function mn(i, e, t) {
  if (i[0] <= e)
    return 0;
  const n = i.length;
  if (e <= i[n - 1])
    return n - 1;
  if (typeof t == "function") {
    for (let r = 1; r < n; ++r) {
      const s = i[r];
      if (s === e)
        return r;
      if (s < e)
        return t(e, i[r - 1], s) > 0 ? r - 1 : r;
    }
    return n - 1;
  }
  if (t > 0) {
    for (let r = 1; r < n; ++r)
      if (i[r] < e)
        return r - 1;
    return n - 1;
  }
  if (t < 0) {
    for (let r = 1; r < n; ++r)
      if (i[r] <= e)
        return r;
    return n - 1;
  }
  for (let r = 1; r < n; ++r) {
    if (i[r] == e)
      return r;
    if (i[r] < e)
      return i[r - 1] - e < e - i[r] ? r - 1 : r;
  }
  return n - 1;
}
function fo(i, e) {
  const t = Array.isArray(e) ? e : [e], n = t.length;
  for (let r = 0; r < n; r++)
    i[i.length] = t[r];
}
function Vr(i, e) {
  const t = i.length;
  if (t !== e.length)
    return !1;
  for (let n = 0; n < t; n++)
    if (i[n] !== e[n])
      return !1;
  return !0;
}
function go(i, e, t) {
  const n = e || ri;
  return i.every(function(r, s) {
    if (s === 0)
      return !0;
    const o = n(i[s - 1], r);
    return !(o > 0 || t && o === 0);
  });
}
function Yn() {
}
function mo(i) {
  let e, t, n;
  return function() {
    const r = Array.prototype.slice.call(arguments);
    return (!t || this !== n || !Vr(r, t)) && (n = this, t = r, e = i.apply(this, arguments)), e;
  };
}
function Kr(i) {
  function e() {
    let t;
    try {
      t = i();
    } catch (n) {
      return Promise.reject(n);
    }
    return t instanceof Promise ? t : Promise.resolve(t);
  }
  return e();
}
function si(i) {
  for (const e in i)
    delete i[e];
}
function _o(i) {
  let e;
  for (e in i)
    return !1;
  return !e;
}
class _n extends Yr {
  /**
   * @param {*} [target] Default event target for dispatched events.
   */
  constructor(e) {
    super(), this.eventTarget_ = e, this.pendingRemovals_ = null, this.dispatching_ = null, this.listeners_ = null;
  }
  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */
  addEventListener(e, t) {
    if (!e || !t)
      return;
    const n = this.listeners_ || (this.listeners_ = {}), r = n[e] || (n[e] = []);
    r.includes(t) || r.push(t);
  }
  /**
   * Dispatches an event and calls all listeners listening for events
   * of this type. The event parameter can either be a string or an
   * Object with a `type` property.
   *
   * @param {import("./Event.js").default|string} event Event object.
   * @return {boolean|undefined} `false` if anyone called preventDefault on the
   *     event object or if any of the listeners returned false.
   * @api
   */
  dispatchEvent(e) {
    const t = typeof e == "string", n = t ? e : e.type, r = this.listeners_ && this.listeners_[n];
    if (!r)
      return;
    const s = t ? new Gt(e) : (
      /** @type {Event} */
      e
    );
    s.target || (s.target = this.eventTarget_ || this);
    const o = this.dispatching_ || (this.dispatching_ = {}), a = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    n in o || (o[n] = 0, a[n] = 0), ++o[n];
    let l;
    for (let c = 0, h = r.length; c < h; ++c)
      if ("handleEvent" in r[c] ? l = /** @type {import("../events.js").ListenerObject} */
      r[c].handleEvent(s) : l = /** @type {import("../events.js").ListenerFunction} */
      r[c].call(this, s), l === !1 || s.propagationStopped) {
        l = !1;
        break;
      }
    if (--o[n] === 0) {
      let c = a[n];
      for (delete a[n]; c--; )
        this.removeEventListener(n, Yn);
      delete o[n];
    }
    return l;
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.listeners_ && si(this.listeners_);
  }
  /**
   * Get the listeners for a specified event type. Listeners are returned in the
   * order that they will be called in.
   *
   * @param {string} type Type.
   * @return {Array<import("../events.js").Listener>|undefined} Listeners.
   */
  getListeners(e) {
    return this.listeners_ && this.listeners_[e] || void 0;
  }
  /**
   * @param {string} [type] Type. If not provided,
   *     `true` will be returned if this event target has any listeners.
   * @return {boolean} Has listeners.
   */
  hasListener(e) {
    return this.listeners_ ? e ? e in this.listeners_ : Object.keys(this.listeners_).length > 0 : !1;
  }
  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */
  removeEventListener(e, t) {
    if (!this.listeners_)
      return;
    const n = this.listeners_[e];
    if (!n)
      return;
    const r = n.indexOf(t);
    r !== -1 && (this.pendingRemovals_ && e in this.pendingRemovals_ ? (n[r] = Yn, ++this.pendingRemovals_[e]) : (n.splice(r, 1), n.length === 0 && delete this.listeners_[e]));
  }
}
const Q = {
  /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event module:ol/events/Event~BaseEvent#change
   * @api
   */
  CHANGE: "change",
  /**
   * Generic error event. Triggered when an error occurs.
   * @event module:ol/events/Event~BaseEvent#error
   * @api
   */
  ERROR: "error",
  BLUR: "blur",
  CLEAR: "clear",
  CONTEXTMENU: "contextmenu",
  CLICK: "click",
  DBLCLICK: "dblclick",
  DRAGENTER: "dragenter",
  DRAGOVER: "dragover",
  DROP: "drop",
  FOCUS: "focus",
  KEYDOWN: "keydown",
  KEYPRESS: "keypress",
  LOAD: "load",
  RESIZE: "resize",
  TOUCHMOVE: "touchmove",
  WHEEL: "wheel"
}, b = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  /**
   * Indicates that tile loading failed
   * @type {number}
   */
  ERROR: 3,
  EMPTY: 4
};
function V() {
  throw new Error("Unimplemented abstract method.");
}
let po = 0;
function fe(i) {
  return i.ol_uid || (i.ol_uid = String(++po));
}
function Hr(i) {
  return Math.pow(i, 3);
}
function yo(i) {
  return 1 - Hr(1 - i);
}
function Eo(i) {
  return 3 * i * i - 2 * i * i * i;
}
class oi extends _n {
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {Options} [options] Tile options.
   */
  constructor(e, t, n) {
    super(), n = n || {}, this.tileCoord = e, this.state = t, this.key = "", this.transition_ = n.transition === void 0 ? 250 : n.transition, this.transitionStarts_ = {}, this.interpolate = !!n.interpolate;
  }
  /**
   * @protected
   */
  changed() {
    this.dispatchEvent(Q.CHANGE);
  }
  /**
   * Called by the tile cache when the tile is removed from the cache due to expiry
   */
  release() {
    this.state === b.ERROR && this.setState(b.EMPTY);
  }
  /**
   * @return {string} Key.
   */
  getKey() {
    return this.key + "/" + this.tileCoord;
  }
  /**
   * Get the tile coordinate for this tile.
   * @return {import("./tilecoord.js").TileCoord} The tile coordinate.
   * @api
   */
  getTileCoord() {
    return this.tileCoord;
  }
  /**
   * @return {import("./TileState.js").default} State.
   */
  getState() {
    return this.state;
  }
  /**
   * Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,
   * it is important to set the state correctly to {@link module:ol/TileState~ERROR}
   * when the tile cannot be loaded. Otherwise the tile cannot be removed from
   * the tile queue and will block other requests.
   * @param {import("./TileState.js").default} state State.
   * @api
   */
  setState(e) {
    if (this.state !== b.ERROR && this.state > e)
      throw new Error("Tile load sequence violation");
    this.state = e, this.changed();
  }
  /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   * @abstract
   * @api
   */
  load() {
    V();
  }
  /**
   * Get the alpha value for rendering.
   * @param {string} id An id for the renderer.
   * @param {number} time The render frame time.
   * @return {number} A number between 0 and 1.
   */
  getAlpha(e, t) {
    if (!this.transition_)
      return 1;
    let n = this.transitionStarts_[e];
    if (!n)
      n = t, this.transitionStarts_[e] = n;
    else if (n === -1)
      return 1;
    const r = t - n + 1e3 / 60;
    return r >= this.transition_ ? 1 : Hr(r / this.transition_);
  }
  /**
   * Determine if a tile is in an alpha transition.  A tile is considered in
   * transition if tile.getAlpha() has not yet been called or has been called
   * and returned 1.
   * @param {string} id An id for the renderer.
   * @return {boolean} The tile is in transition.
   */
  inTransition(e) {
    return this.transition_ ? this.transitionStarts_[e] !== -1 : !1;
  }
  /**
   * Mark a transition as complete.
   * @param {string} id An id for the renderer.
   */
  endTransition(e) {
    this.transition_ && (this.transitionStarts_[e] = -1);
  }
}
const ze = typeof navigator < "u" && typeof navigator.userAgent < "u" ? navigator.userAgent.toLowerCase() : "";
ze.includes("firefox");
const To = ze.includes("safari") && !ze.includes("chrom"), xo = To && (ze.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(ze));
ze.includes("webkit") && ze.includes("edge");
ze.includes("macintosh");
const Ro = typeof WorkerGlobalScope < "u" && typeof OffscreenCanvas < "u" && self instanceof WorkerGlobalScope, wo = typeof Image < "u" && Image.prototype.decode;
(function() {
  let i = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get: function() {
        i = !0;
      }
    });
    window.addEventListener("_", null, e), window.removeEventListener("_", null, e);
  } catch {
  }
  return i;
})();
function xe(i, e, t, n) {
  let r;
  return t && t.length ? r = /** @type {HTMLCanvasElement} */
  t.shift() : Ro ? r = new OffscreenCanvas(i || 300, e || 300) : r = document.createElement("canvas"), i && (r.width = i), e && (r.height = e), /** @type {CanvasRenderingContext2D} */
  r.getContext("2d", n);
}
let Sn;
function qi() {
  return Sn || (Sn = xe(1, 1)), Sn;
}
function vt(i) {
  const e = i.canvas;
  e.width = 1, e.height = 1, i.clearRect(0, 0, 1, 1);
}
function tn(i) {
  return i instanceof Image || i instanceof HTMLCanvasElement || i instanceof HTMLVideoElement || i instanceof ImageBitmap ? i : null;
}
function Vn(i) {
  return i instanceof Uint8Array || i instanceof Uint8ClampedArray || i instanceof Float32Array || i instanceof DataView ? i : null;
}
const Io = new Error("disposed");
let qe = null;
function Co(i) {
  qe || (qe = xe(
    i.width,
    i.height,
    void 0,
    { willReadFrequently: !0 }
  ));
  const e = qe.canvas, t = i.width;
  e.width !== t && (e.width = t);
  const n = i.height;
  return e.height !== n && (e.height = n), qe.clearRect(0, 0, t, n), qe.drawImage(i, 0, 0), qe.getImageData(0, 0, t, n).data;
}
const So = [256, 256];
class ai extends oi {
  /**
   * @param {Options} options Tile options.
   */
  constructor(e) {
    const t = b.IDLE;
    super(e.tileCoord, t, {
      transition: e.transition,
      interpolate: e.interpolate
    }), this.loader_ = e.loader, this.data_ = null, this.error_ = null, this.size_ = e.size || null, this.controller_ = e.controller || null;
  }
  /**
   * Get the tile size.
   * @return {import('./size.js').Size} Tile size.
   */
  getSize() {
    if (this.size_)
      return this.size_;
    const e = tn(this.data_);
    return e ? [e.width, e.height] : So;
  }
  /**
   * Get the data for the tile.
   * @return {Data} Tile data.
   * @api
   */
  getData() {
    return this.data_;
  }
  /**
   * Get any loading error.
   * @return {Error} Loading error.
   * @api
   */
  getError() {
    return this.error_;
  }
  /**
   * Load the tile data.
   * @api
   * @override
   */
  load() {
    if (this.state !== b.IDLE && this.state !== b.ERROR)
      return;
    this.state = b.LOADING, this.changed();
    const e = this;
    this.loader_().then(function(t) {
      e.data_ = t, e.state = b.LOADED, e.changed();
    }).catch(function(t) {
      e.error_ = t, e.state = b.ERROR, e.changed();
    });
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.controller_ && (this.controller_.abort(Io), this.controller_ = null), super.disposeInternal();
  }
}
const li = 0.5, q = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
};
function Kn(i) {
  const e = _t();
  for (let t = 0, n = i.length; t < n; ++t)
    qt(e, i[t]);
  return e;
}
function bo(i, e, t) {
  const n = Math.min.apply(null, i), r = Math.min.apply(null, e), s = Math.max.apply(null, i), o = Math.max.apply(null, e);
  return pt(n, r, s, o, t);
}
function Zr(i, e, t) {
  let n, r;
  return e < i[0] ? n = i[0] - e : i[2] < e ? n = e - i[2] : n = 0, t < i[1] ? r = i[1] - t : i[3] < t ? r = t - i[3] : r = 0, n * n + r * r;
}
function Mt(i, e) {
  return Wr(i, e[0], e[1]);
}
function Pt(i, e) {
  return i[0] <= e[0] && e[2] <= i[2] && i[1] <= e[1] && e[3] <= i[3];
}
function Wr(i, e, t) {
  return i[0] <= e && e <= i[2] && i[1] <= t && t <= i[3];
}
function Ji(i, e) {
  const t = i[0], n = i[1], r = i[2], s = i[3], o = e[0], a = e[1];
  let l = q.UNKNOWN;
  return o < t ? l = l | q.LEFT : o > r && (l = l | q.RIGHT), a < n ? l = l | q.BELOW : a > s && (l = l | q.ABOVE), l === q.UNKNOWN && (l = q.INTERSECTING), l;
}
function _t() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function pt(i, e, t, n, r) {
  return r ? (r[0] = i, r[1] = e, r[2] = t, r[3] = n, r) : [i, e, t, n];
}
function pn(i) {
  return pt(1 / 0, 1 / 0, -1 / 0, -1 / 0, i);
}
function Ao(i, e) {
  const t = i[0], n = i[1];
  return pt(t, n, t, n, e);
}
function vo(i, e, t, n, r) {
  const s = pn(r);
  return qr(s, i, e, t, n);
}
function Mo(i, e) {
  return i[0] == e[0] && i[2] == e[2] && i[1] == e[1] && i[3] == e[3];
}
function Po(i, e) {
  return e[0] < i[0] && (i[0] = e[0]), e[2] > i[2] && (i[2] = e[2]), e[1] < i[1] && (i[1] = e[1]), e[3] > i[3] && (i[3] = e[3]), i;
}
function qt(i, e) {
  e[0] < i[0] && (i[0] = e[0]), e[0] > i[2] && (i[2] = e[0]), e[1] < i[1] && (i[1] = e[1]), e[1] > i[3] && (i[3] = e[1]);
}
function qr(i, e, t, n, r) {
  for (; t < n; t += r)
    Do(i, e[t], e[t + 1]);
  return i;
}
function Do(i, e, t) {
  i[0] = Math.min(i[0], e), i[1] = Math.min(i[1], t), i[2] = Math.max(i[2], e), i[3] = Math.max(i[3], t);
}
function Jr(i, e) {
  let t;
  return t = e(yn(i)), t || (t = e(En(i)), t) || (t = e(Tn(i)), t) || (t = e(yt(i)), t) ? t : !1;
}
function Dt(i) {
  let e = 0;
  return He(i) || (e = j(i) * J(i)), e;
}
function yn(i) {
  return [i[0], i[1]];
}
function En(i) {
  return [i[2], i[1]];
}
function Me(i) {
  return [(i[0] + i[2]) / 2, (i[1] + i[3]) / 2];
}
function Oo(i, e) {
  let t;
  if (e === "bottom-left")
    t = yn(i);
  else if (e === "bottom-right")
    t = En(i);
  else if (e === "top-left")
    t = yt(i);
  else if (e === "top-right")
    t = Tn(i);
  else
    throw new Error("Invalid corner");
  return t;
}
function Qr(i, e, t, n, r) {
  const [s, o, a, l, c, h, u, f] = Lo(
    i,
    e,
    t,
    n
  );
  return pt(
    Math.min(s, a, c, u),
    Math.min(o, l, h, f),
    Math.max(s, a, c, u),
    Math.max(o, l, h, f),
    r
  );
}
function Lo(i, e, t, n) {
  const r = e * n[0] / 2, s = e * n[1] / 2, o = Math.cos(t), a = Math.sin(t), l = r * o, c = r * a, h = s * o, u = s * a, f = i[0], g = i[1];
  return [
    f - l + u,
    g - c - h,
    f - l - u,
    g - c + h,
    f + l - u,
    g + c + h,
    f + l + u,
    g + c - h,
    f - l + u,
    g - c - h
  ];
}
function J(i) {
  return i[3] - i[1];
}
function ge(i, e, t) {
  const n = t || _t();
  return Ut(i, e) ? (i[0] > e[0] ? n[0] = i[0] : n[0] = e[0], i[1] > e[1] ? n[1] = i[1] : n[1] = e[1], i[2] < e[2] ? n[2] = i[2] : n[2] = e[2], i[3] < e[3] ? n[3] = i[3] : n[3] = e[3]) : pn(n), n;
}
function yt(i) {
  return [i[0], i[3]];
}
function Tn(i) {
  return [i[2], i[3]];
}
function j(i) {
  return i[2] - i[0];
}
function Ut(i, e) {
  return i[0] <= e[2] && i[2] >= e[0] && i[1] <= e[3] && i[3] >= e[1];
}
function He(i) {
  return i[2] < i[0] || i[3] < i[1];
}
function Fo(i, e) {
  return e ? (e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e) : i;
}
function No(i, e) {
  const t = (i[2] - i[0]) / 2 * (e - 1), n = (i[3] - i[1]) / 2 * (e - 1);
  i[0] -= t, i[2] += t, i[1] -= n, i[3] += n;
}
function Go(i, e, t) {
  let n = !1;
  const r = Ji(i, e), s = Ji(i, t);
  if (r === q.INTERSECTING || s === q.INTERSECTING)
    n = !0;
  else {
    const o = i[0], a = i[1], l = i[2], c = i[3], h = e[0], u = e[1], f = t[0], g = t[1], m = (g - u) / (f - h);
    let d, p;
    s & q.ABOVE && !(r & q.ABOVE) && (d = f - (g - c) / m, n = d >= o && d <= l), !n && s & q.RIGHT && !(r & q.RIGHT) && (p = g - (f - l) * m, n = p >= a && p <= c), !n && s & q.BELOW && !(r & q.BELOW) && (d = f - (g - a) / m, n = d >= o && d <= l), !n && s & q.LEFT && !(r & q.LEFT) && (p = g - (f - o) * m, n = p >= a && p <= c);
  }
  return n;
}
function Uo(i, e, t, n) {
  if (He(i))
    return pn(t);
  let r = [];
  if (n > 1) {
    const a = i[2] - i[0], l = i[3] - i[1];
    for (let c = 0; c < n; ++c)
      r.push(
        i[0] + a * c / n,
        i[1],
        i[2],
        i[1] + l * c / n,
        i[2] - a * c / n,
        i[3],
        i[0],
        i[3] - l * c / n
      );
  } else
    r = [
      i[0],
      i[1],
      i[2],
      i[1],
      i[2],
      i[3],
      i[0],
      i[3]
    ];
  e(r, r, 2);
  const s = [], o = [];
  for (let a = 0, l = r.length; a < l; a += 2)
    s.push(r[a]), o.push(r[a + 1]);
  return bo(s, o, t);
}
function Xo(i, e) {
  const t = e.getExtent(), n = Me(i);
  if (e.canWrapX() && (n[0] < t[0] || n[0] >= t[2])) {
    const r = j(t), o = Math.floor(
      (n[0] - t[0]) / r
    ) * r;
    i[0] -= o, i[2] -= o;
  }
  return i;
}
function es(i, e, t) {
  if (e.canWrapX()) {
    const n = e.getExtent();
    if (!isFinite(i[0]) || !isFinite(i[2]))
      return [[n[0], i[1], n[2], i[3]]];
    Xo(i, e);
    const r = j(n);
    if (j(i) > r && !t)
      return [[n[0], i[1], n[2], i[3]]];
    if (i[0] < n[0])
      return [
        [i[0] + r, i[1], n[2], i[3]],
        [n[0], i[1], i[2], i[3]]
      ];
    if (i[2] > n[2])
      return [
        [i[0], i[1], n[2], i[3]],
        [n[0], i[1], i[2] - r, i[3]]
      ];
  }
  return [i];
}
const ko = {
  9001: "m",
  9002: "ft",
  9003: "us-ft",
  9101: "radians",
  9102: "degrees"
};
function Qi(i) {
  return ko[i];
}
const Ot = {
  // use the radius of the Normal sphere
  radians: 6370997 / (2 * Math.PI),
  degrees: 2 * Math.PI * 6370997 / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937
};
class nn {
  /**
   * @param {Options} options Projection options.
   */
  constructor(e) {
    this.code_ = e.code, this.units_ = /** @type {import("./Units.js").Units} */
    e.units, this.extent_ = e.extent !== void 0 ? e.extent : null, this.worldExtent_ = e.worldExtent !== void 0 ? e.worldExtent : null, this.axisOrientation_ = e.axisOrientation !== void 0 ? e.axisOrientation : "enu", this.global_ = e.global !== void 0 ? e.global : !1, this.canWrapX_ = !!(this.global_ && this.extent_), this.getPointResolutionFunc_ = e.getPointResolution, this.defaultTileGrid_ = null, this.metersPerUnit_ = e.metersPerUnit;
  }
  /**
   * @return {boolean} The projection is suitable for wrapping the x-axis
   */
  canWrapX() {
    return this.canWrapX_;
  }
  /**
   * Get the code for this projection, e.g. 'EPSG:4326'.
   * @return {string} Code.
   * @api
   */
  getCode() {
    return this.code_;
  }
  /**
   * Get the validity extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_;
  }
  /**
   * Get the units of this projection.
   * @return {import("./Units.js").Units} Units.
   * @api
   */
  getUnits() {
    return this.units_;
  }
  /**
   * Get the amount of meters per unit of this projection.  If the projection is
   * not configured with `metersPerUnit` or a units identifier, the return is
   * `undefined`.
   * @return {number|undefined} Meters.
   * @api
   */
  getMetersPerUnit() {
    return this.metersPerUnit_ || Ot[this.units_];
  }
  /**
   * Get the world extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getWorldExtent() {
    return this.worldExtent_;
  }
  /**
   * Get the axis orientation of this projection.
   * Example values are:
   * enu - the default easting, northing, elevation.
   * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
   *     or south orientated transverse mercator.
   * wnu - westing, northing, up - some planetary coordinate systems have
   *     "west positive" coordinate systems
   * @return {string} Axis orientation.
   * @api
   */
  getAxisOrientation() {
    return this.axisOrientation_;
  }
  /**
   * Is this projection a global projection which spans the whole world?
   * @return {boolean} Whether the projection is global.
   * @api
   */
  isGlobal() {
    return this.global_;
  }
  /**
   * Set if the projection is a global projection which spans the whole world
   * @param {boolean} global Whether the projection is global.
   * @api
   */
  setGlobal(e) {
    this.global_ = e, this.canWrapX_ = !!(e && this.extent_);
  }
  /**
   * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
   */
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }
  /**
   * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
   */
  setDefaultTileGrid(e) {
    this.defaultTileGrid_ = e;
  }
  /**
   * Set the validity extent for this projection.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */
  setExtent(e) {
    this.extent_ = e, this.canWrapX_ = !!(this.global_ && e);
  }
  /**
   * Set the world extent for this projection.
   * @param {import("../extent.js").Extent} worldExtent World extent
   *     [minlon, minlat, maxlon, maxlat].
   * @api
   */
  setWorldExtent(e) {
    this.worldExtent_ = e;
  }
  /**
   * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
   * for this projection.
   * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
   * @api
   */
  setGetPointResolution(e) {
    this.getPointResolutionFunc_ = e;
  }
  /**
   * Get the custom point resolution function for this projection (if set).
   * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
   * resolution function (if set).
   */
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}
const Xt = 6378137, lt = Math.PI * Xt, Bo = [-lt, -lt, lt, lt], zo = [-180, -85, 180, 85], zt = Xt * Math.log(Math.tan(Math.PI / 2));
class Je extends nn {
  /**
   * @param {string} code Code.
   */
  constructor(e) {
    super({
      code: e,
      units: "m",
      extent: Bo,
      global: !0,
      worldExtent: zo,
      getPointResolution: function(t, n) {
        return t / Math.cosh(n[1] / Xt);
      }
    });
  }
}
const er = [
  new Je("EPSG:3857"),
  new Je("EPSG:102100"),
  new Je("EPSG:102113"),
  new Je("EPSG:900913"),
  new Je("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new Je("http://www.opengis.net/gml/srs/epsg.xml#3857")
];
function jo(i, e, t, n) {
  const r = i.length;
  t = t > 1 ? t : 2, n = n ?? t, e === void 0 && (t > 2 ? e = i.slice() : e = new Array(r));
  for (let s = 0; s < r; s += n) {
    e[s] = lt * i[s] / 180;
    let o = Xt * Math.log(Math.tan(Math.PI * (+i[s + 1] + 90) / 360));
    o > zt ? o = zt : o < -zt && (o = -zt), e[s + 1] = o;
  }
  return e;
}
function $o(i, e, t, n) {
  const r = i.length;
  t = t > 1 ? t : 2, n = n ?? t, e === void 0 && (t > 2 ? e = i.slice() : e = new Array(r));
  for (let s = 0; s < r; s += n)
    e[s] = 180 * i[s] / lt, e[s + 1] = 360 * Math.atan(Math.exp(i[s + 1] / Xt)) / Math.PI - 90;
  return e;
}
const Yo = 6378137, tr = [-180, -90, 180, 90], Vo = Math.PI * Yo / 180;
class $e extends nn {
  /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */
  constructor(e, t) {
    super({
      code: e,
      units: "degrees",
      extent: tr,
      axisOrientation: t,
      global: !0,
      metersPerUnit: Vo,
      worldExtent: tr
    });
  }
}
const nr = [
  new $e("CRS:84"),
  new $e("EPSG:4326", "neu"),
  new $e("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new $e("urn:ogc:def:crs:OGC:2:84"),
  new $e("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new $e("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new $e("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
];
let Hn = {};
function Ko(i) {
  return Hn[i] || Hn[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
}
function Ho(i, e) {
  Hn[i] = e;
}
let ut = {};
function rn(i, e, t) {
  const n = i.getCode(), r = e.getCode();
  n in ut || (ut[n] = {}), ut[n][r] = t;
}
function Zo(i, e) {
  let t;
  return i in ut && e in ut[i] && (t = ut[i][e]), t;
}
function H(i, e, t) {
  return Math.min(Math.max(i, e), t);
}
function Wo(i, e, t, n, r, s) {
  const o = r - t, a = s - n;
  if (o !== 0 || a !== 0) {
    const l = ((i - t) * o + (e - n) * a) / (o * o + a * a);
    l > 1 ? (t = r, n = s) : l > 0 && (t += o * l, n += a * l);
  }
  return ft(i, e, t, n);
}
function ft(i, e, t, n) {
  const r = t - i, s = n - e;
  return r * r + s * s;
}
function qo(i) {
  const e = i.length;
  for (let n = 0; n < e; n++) {
    let r = n, s = Math.abs(i[n][n]);
    for (let a = n + 1; a < e; a++) {
      const l = Math.abs(i[a][n]);
      l > s && (s = l, r = a);
    }
    if (s === 0)
      return null;
    const o = i[r];
    i[r] = i[n], i[n] = o;
    for (let a = n + 1; a < e; a++) {
      const l = -i[a][n] / i[n][n];
      for (let c = n; c < e + 1; c++)
        n == c ? i[a][c] = 0 : i[a][c] += l * i[n][c];
    }
  }
  const t = new Array(e);
  for (let n = e - 1; n >= 0; n--) {
    t[n] = i[n][e] / i[n][n];
    for (let r = n - 1; r >= 0; r--)
      i[r][e] -= i[r][n] * t[n];
  }
  return t;
}
function Jt(i) {
  return i * Math.PI / 180;
}
function bt(i, e) {
  const t = i % e;
  return t * e < 0 ? t + e : t;
}
function Jo(i, e, t) {
  return i + t * (e - i);
}
function ts(i, e) {
  const t = Math.pow(10, e);
  return Math.round(i * t) / t;
}
function jt(i, e) {
  return Math.floor(ts(i, e));
}
function Xe(i, e) {
  return Math.ceil(ts(i, e));
}
function Qo(i, e) {
  return i[0] += +e[0], i[1] += +e[1], i;
}
function sn(i, e) {
  let t = !0;
  for (let n = i.length - 1; n >= 0; --n)
    if (i[n] != e[n]) {
      t = !1;
      break;
    }
  return t;
}
function ea(i, e) {
  const t = Math.cos(e), n = Math.sin(e), r = i[0] * t - i[1] * n, s = i[1] * t + i[0] * n;
  return i[0] = r, i[1] = s, i;
}
const ta = 63710088e-1;
function ir(i, e, t) {
  t = t || ta;
  const n = Jt(i[1]), r = Jt(e[1]), s = (r - n) / 2, o = Jt(e[0] - i[0]) / 2, a = Math.sin(s) * Math.sin(s) + Math.sin(o) * Math.sin(o) * Math.cos(n) * Math.cos(r);
  return 2 * t * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function na(...i) {
  console.warn(...i);
}
function rr(...i) {
  console.error(...i);
}
let Zn = !0;
function ia(i) {
  Zn = !(i === void 0 ? !0 : i);
}
function ci(i, e) {
  if (e !== void 0) {
    for (let t = 0, n = i.length; t < n; ++t)
      e[t] = i[t];
    e = e;
  } else
    e = i.slice();
  return e;
}
function ns(i, e) {
  if (e !== void 0 && i !== e) {
    for (let t = 0, n = i.length; t < n; ++t)
      e[t] = i[t];
    i = e;
  }
  return i;
}
function ra(i) {
  Ho(i.getCode(), i), rn(i, i, ci);
}
function sa(i) {
  i.forEach(ra);
}
function me(i) {
  return typeof i == "string" ? Ko(
    /** @type {string} */
    i
  ) : (
    /** @type {Projection} */
    i || null
  );
}
function sr(i, e, t, n) {
  i = me(i);
  let r;
  const s = i.getPointResolutionFunc();
  if (s) {
    if (r = s(e, t), n && n !== i.getUnits()) {
      const o = i.getMetersPerUnit();
      o && (r = r * o / Ot[n]);
    }
  } else {
    const o = i.getUnits();
    if (o == "degrees" && !n || n == "degrees")
      r = e;
    else {
      const a = ui(
        i,
        me("EPSG:4326")
      );
      if (a === ns && o !== "degrees")
        r = e * i.getMetersPerUnit();
      else {
        let c = [
          t[0] - e / 2,
          t[1],
          t[0] + e / 2,
          t[1],
          t[0],
          t[1] - e / 2,
          t[0],
          t[1] + e / 2
        ];
        c = a(c, c, 2);
        const h = ir(c.slice(0, 2), c.slice(2, 4)), u = ir(c.slice(4, 6), c.slice(6, 8));
        r = (h + u) / 2;
      }
      const l = n ? Ot[n] : i.getMetersPerUnit();
      l !== void 0 && (r /= l);
    }
  }
  return r;
}
function or(i) {
  sa(i), i.forEach(function(e) {
    i.forEach(function(t) {
      e !== t && rn(e, t, ci);
    });
  });
}
function oa(i, e, t, n) {
  i.forEach(function(r) {
    e.forEach(function(s) {
      rn(r, s, t), rn(s, r, n);
    });
  });
}
function hi(i, e) {
  return i ? typeof i == "string" ? me(i) : (
    /** @type {Projection} */
    i
  ) : me(e);
}
function Ve(i, e) {
  if (i === e)
    return !0;
  const t = i.getUnits() === e.getUnits();
  return (i.getCode() === e.getCode() || ui(i, e) === ci) && t;
}
function ui(i, e) {
  const t = i.getCode(), n = e.getCode();
  let r = Zo(t, n);
  return r || (r = ns), r;
}
function Lt(i, e) {
  const t = me(i), n = me(e);
  return ui(t, n);
}
function aa(i, e, t) {
  return Lt(e, t)(i, void 0, i.length);
}
function la(i, e, t, n) {
  const r = Lt(e, t);
  return Uo(i, r, void 0, n);
}
function on(i, e) {
  return i;
}
function Fe(i, e) {
  return Zn && !sn(i, [0, 0]) && i[0] >= -180 && i[0] <= 180 && i[1] >= -90 && i[1] <= 90 && (Zn = !1, na(
    "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
  )), i;
}
function fi(i, e) {
  return i;
}
function ke(i, e) {
  return i;
}
function ca() {
  or(er), or(nr), oa(
    nr,
    er,
    jo,
    $o
  );
}
ca();
const ha = 10, ar = 0.25;
class gi {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../extent.js").Extent} targetExtent Target extent to triangulate.
   * @param {import("../extent.js").Extent} maxSourceExtent Maximal source extent that can be used.
   * @param {number} errorThreshold Acceptable error (in source units).
   * @param {?number} destinationResolution The (optional) resolution of the destination.
   */
  constructor(e, t, n, r, s, o) {
    this.sourceProj_ = e, this.targetProj_ = t;
    let a = {};
    const l = Lt(this.targetProj_, this.sourceProj_);
    this.transformInv_ = function(_) {
      const R = _[0] + "/" + _[1];
      return a[R] || (a[R] = l(_)), a[R];
    }, this.maxSourceExtent_ = r, this.errorThresholdSquared_ = s * s, this.triangles_ = [], this.wrapsXInSource_ = !1, this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!r && !!this.sourceProj_.getExtent() && j(r) >= j(this.sourceProj_.getExtent()), this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? j(this.sourceProj_.getExtent()) : null, this.targetWorldWidth_ = this.targetProj_.getExtent() ? j(this.targetProj_.getExtent()) : null;
    const c = yt(n), h = Tn(n), u = En(n), f = yn(n), g = this.transformInv_(c), m = this.transformInv_(h), d = this.transformInv_(u), p = this.transformInv_(f), y = ha + (o ? Math.max(
      0,
      Math.ceil(
        Math.log2(
          Dt(n) / (o * o * 256 * 256)
        )
      )
    ) : 0);
    if (this.addQuad_(
      c,
      h,
      u,
      f,
      g,
      m,
      d,
      p,
      y
    ), this.wrapsXInSource_) {
      let _ = 1 / 0;
      this.triangles_.forEach(function(R, T, x) {
        _ = Math.min(
          _,
          R.source[0][0],
          R.source[1][0],
          R.source[2][0]
        );
      }), this.triangles_.forEach((R) => {
        if (Math.max(
          R.source[0][0],
          R.source[1][0],
          R.source[2][0]
        ) - _ > this.sourceWorldWidth_ / 2) {
          const T = [
            [R.source[0][0], R.source[0][1]],
            [R.source[1][0], R.source[1][1]],
            [R.source[2][0], R.source[2][1]]
          ];
          T[0][0] - _ > this.sourceWorldWidth_ / 2 && (T[0][0] -= this.sourceWorldWidth_), T[1][0] - _ > this.sourceWorldWidth_ / 2 && (T[1][0] -= this.sourceWorldWidth_), T[2][0] - _ > this.sourceWorldWidth_ / 2 && (T[2][0] -= this.sourceWorldWidth_);
          const x = Math.min(
            T[0][0],
            T[1][0],
            T[2][0]
          );
          Math.max(
            T[0][0],
            T[1][0],
            T[2][0]
          ) - x < this.sourceWorldWidth_ / 2 && (R.source = T);
        }
      });
    }
    a = {};
  }
  /**
   * Adds triangle to the triangulation.
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @private
   */
  addTriangle_(e, t, n, r, s, o) {
    this.triangles_.push({
      source: [r, s, o],
      target: [e, t, n]
    });
  }
  /**
   * Adds quad (points in clock-wise order) to the triangulation
   * (and reprojects the vertices) if valid.
   * Performs quad subdivision if needed to increase precision.
   *
   * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
   * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
   * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
   * @param {import("../coordinate.js").Coordinate} d The target d coordinate.
   * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
   * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
   * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
   * @param {import("../coordinate.js").Coordinate} dSrc The source d coordinate.
   * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
   * @private
   */
  addQuad_(e, t, n, r, s, o, a, l, c) {
    const h = Kn([s, o, a, l]), u = this.sourceWorldWidth_ ? j(h) / this.sourceWorldWidth_ : null, f = (
      /** @type {number} */
      this.sourceWorldWidth_
    ), g = this.sourceProj_.canWrapX() && u > 0.5 && u < 1;
    let m = !1;
    if (c > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const p = Kn([e, t, n, r]);
        m = j(p) / this.targetWorldWidth_ > ar || m;
      }
      !g && this.sourceProj_.isGlobal() && u && (m = u > ar || m);
    }
    if (!m && this.maxSourceExtent_ && isFinite(h[0]) && isFinite(h[1]) && isFinite(h[2]) && isFinite(h[3]) && !Ut(h, this.maxSourceExtent_))
      return;
    let d = 0;
    if (!m && (!isFinite(s[0]) || !isFinite(s[1]) || !isFinite(o[0]) || !isFinite(o[1]) || !isFinite(a[0]) || !isFinite(a[1]) || !isFinite(l[0]) || !isFinite(l[1]))) {
      if (c > 0)
        m = !0;
      else if (d = (!isFinite(s[0]) || !isFinite(s[1]) ? 8 : 0) + (!isFinite(o[0]) || !isFinite(o[1]) ? 4 : 0) + (!isFinite(a[0]) || !isFinite(a[1]) ? 2 : 0) + (!isFinite(l[0]) || !isFinite(l[1]) ? 1 : 0), d != 1 && d != 2 && d != 4 && d != 8)
        return;
    }
    if (c > 0) {
      if (!m) {
        const p = [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2], y = this.transformInv_(p);
        let _;
        g ? _ = (bt(s[0], f) + bt(a[0], f)) / 2 - bt(y[0], f) : _ = (s[0] + a[0]) / 2 - y[0];
        const R = (s[1] + a[1]) / 2 - y[1];
        m = _ * _ + R * R > this.errorThresholdSquared_;
      }
      if (m) {
        if (Math.abs(e[0] - n[0]) <= Math.abs(e[1] - n[1])) {
          const p = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2], y = this.transformInv_(p), _ = [(r[0] + e[0]) / 2, (r[1] + e[1]) / 2], R = this.transformInv_(_);
          this.addQuad_(
            e,
            t,
            p,
            _,
            s,
            o,
            y,
            R,
            c - 1
          ), this.addQuad_(
            _,
            p,
            n,
            r,
            R,
            y,
            a,
            l,
            c - 1
          );
        } else {
          const p = [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2], y = this.transformInv_(p), _ = [(n[0] + r[0]) / 2, (n[1] + r[1]) / 2], R = this.transformInv_(_);
          this.addQuad_(
            e,
            p,
            _,
            r,
            s,
            y,
            R,
            l,
            c - 1
          ), this.addQuad_(
            p,
            t,
            n,
            _,
            y,
            o,
            a,
            R,
            c - 1
          );
        }
        return;
      }
    }
    if (g) {
      if (!this.canWrapXInSource_)
        return;
      this.wrapsXInSource_ = !0;
    }
    d & 11 || this.addTriangle_(e, n, r, s, a, l), d & 14 || this.addTriangle_(e, n, t, s, a, o), d && (d & 13 || this.addTriangle_(t, r, e, o, l, s), d & 7 || this.addTriangle_(t, r, n, o, l, a));
  }
  /**
   * Calculates extent of the `source` coordinates from all the triangles.
   *
   * @return {import("../extent.js").Extent} Calculated extent.
   */
  calculateSourceExtent() {
    const e = _t();
    return this.triangles_.forEach(function(t, n, r) {
      const s = t.source;
      qt(e, s[0]), qt(e, s[1]), qt(e, s[2]);
    }), e;
  }
  /**
   * @return {Array<Triangle>} Array of the calculated triangles.
   */
  getTriangles() {
    return this.triangles_;
  }
}
let bn;
const Pe = [];
function lr(i, e, t, n, r) {
  i.beginPath(), i.moveTo(0, 0), i.lineTo(e, t), i.lineTo(n, r), i.closePath(), i.save(), i.clip(), i.fillRect(0, 0, Math.max(e, n) + 1, Math.max(t, r)), i.restore();
}
function An(i, e) {
  return Math.abs(i[e * 4] - 210) > 2 || Math.abs(i[e * 4 + 3] - 0.75 * 255) > 2;
}
function ua() {
  if (bn === void 0) {
    const i = xe(6, 6, Pe);
    i.globalCompositeOperation = "lighter", i.fillStyle = "rgba(210, 0, 0, 0.75)", lr(i, 4, 5, 4, 0), lr(i, 4, 5, 0, 5);
    const e = i.getImageData(0, 0, 3, 3).data;
    bn = An(e, 0) || An(e, 4) || An(e, 8), vt(i), Pe.push(i.canvas);
  }
  return bn;
}
function Wn(i, e, t, n) {
  const r = aa(t, e, i);
  let s = sr(
    e,
    n,
    t
  );
  const o = e.getMetersPerUnit();
  o !== void 0 && (s *= o);
  const a = i.getMetersPerUnit();
  a !== void 0 && (s /= a);
  const l = i.getExtent();
  if (!l || Mt(l, r)) {
    const c = sr(i, s, r) / s;
    isFinite(c) && c > 0 && (s /= c);
  }
  return s;
}
function is(i, e, t, n) {
  const r = Me(t);
  let s = Wn(
    i,
    e,
    r,
    n
  );
  return (!isFinite(s) || s <= 0) && Jr(t, function(o) {
    return s = Wn(
      i,
      e,
      o,
      n
    ), isFinite(s) && s > 0;
  }), s;
}
function di(i, e, t, n, r, s, o, a, l, c, h, u, f, g) {
  const m = xe(
    Math.round(t * i),
    Math.round(t * e),
    Pe
  );
  if (u || (m.imageSmoothingEnabled = !1), l.length === 0)
    return m.canvas;
  m.scale(t, t);
  function d(x) {
    return Math.round(x * t) / t;
  }
  m.globalCompositeOperation = "lighter";
  const p = _t();
  l.forEach(function(x, I, w) {
    Po(p, x.extent);
  });
  let y;
  const _ = t / n, R = (u ? 1 : 1 + Math.pow(2, -24)) / _;
  if (!f || l.length !== 1 || c !== 0) {
    if (y = xe(
      Math.round(j(p) * _),
      Math.round(J(p) * _),
      Pe
    ), u || (y.imageSmoothingEnabled = !1), r && g) {
      const x = (r[0] - p[0]) * _, I = -(r[3] - p[3]) * _, w = j(r) * _, E = J(r) * _;
      y.rect(x, I, w, E), y.clip();
    }
    l.forEach(function(x, I, w) {
      if (x.image.width > 0 && x.image.height > 0) {
        if (x.clipExtent) {
          y.save();
          const P = (x.clipExtent[0] - p[0]) * _, G = -(x.clipExtent[3] - p[3]) * _, O = j(x.clipExtent) * _, z = J(x.clipExtent) * _;
          y.rect(
            u ? P : Math.round(P),
            u ? G : Math.round(G),
            u ? O : Math.round(P + O) - Math.round(P),
            u ? z : Math.round(G + z) - Math.round(G)
          ), y.clip();
        }
        const E = (x.extent[0] - p[0]) * _, S = -(x.extent[3] - p[3]) * _, v = j(x.extent) * _, A = J(x.extent) * _;
        y.drawImage(
          x.image,
          c,
          c,
          x.image.width - 2 * c,
          x.image.height - 2 * c,
          u ? E : Math.round(E),
          u ? S : Math.round(S),
          u ? v : Math.round(E + v) - Math.round(E),
          u ? A : Math.round(S + A) - Math.round(S)
        ), x.clipExtent && y.restore();
      }
    });
  }
  const T = yt(o);
  return a.getTriangles().forEach(function(x, I, w) {
    const E = x.source, S = x.target;
    let v = E[0][0], A = E[0][1], P = E[1][0], G = E[1][1], O = E[2][0], z = E[2][1];
    const $ = d((S[0][0] - T[0]) / s), le = d(
      -(S[0][1] - T[1]) / s
    ), ce = d((S[1][0] - T[0]) / s), K = d(
      -(S[1][1] - T[1]) / s
    ), _e = d((S[2][0] - T[0]) / s), Re = d(
      -(S[2][1] - T[1]) / s
    ), pe = v, Oe = A;
    v = 0, A = 0, P -= pe, G -= Oe, O -= pe, z -= Oe;
    const We = [
      [P, G, 0, 0, ce - $],
      [O, z, 0, 0, _e - $],
      [0, 0, P, G, K - le],
      [0, 0, O, z, Re - le]
    ], ie = qo(We);
    if (!ie)
      return;
    if (m.save(), m.beginPath(), ua() || !u) {
      m.moveTo(ce, K);
      const Y = 4, we = $ - ce, Le = le - K;
      for (let de = 0; de < Y; de++)
        m.lineTo(
          ce + d((de + 1) * we / Y),
          K + d(de * Le / (Y - 1))
        ), de != Y - 1 && m.lineTo(
          ce + d((de + 1) * we / Y),
          K + d((de + 1) * Le / (Y - 1))
        );
      m.lineTo(_e, Re);
    } else
      m.moveTo(ce, K), m.lineTo($, le), m.lineTo(_e, Re);
    m.clip(), m.transform(
      ie[0],
      ie[2],
      ie[1],
      ie[3],
      $,
      le
    ), m.translate(
      p[0] - pe,
      p[3] - Oe
    );
    let ne;
    if (y)
      ne = y.canvas, m.scale(R, -R);
    else {
      const Y = l[0], we = Y.extent;
      ne = Y.image, m.scale(
        j(we) / ne.width,
        -J(we) / ne.height
      );
    }
    m.drawImage(ne, 0, 0), m.restore();
  }), y && (vt(y), Pe.push(y.canvas)), h && (m.save(), m.globalCompositeOperation = "source-over", m.strokeStyle = "black", m.lineWidth = 1, a.getTriangles().forEach(function(x, I, w) {
    const E = x.target, S = (E[0][0] - T[0]) / s, v = -(E[0][1] - T[1]) / s, A = (E[1][0] - T[0]) / s, P = -(E[1][1] - T[1]) / s, G = (E[2][0] - T[0]) / s, O = -(E[2][1] - T[1]) / s;
    m.beginPath(), m.moveTo(A, P), m.lineTo(S, v), m.lineTo(G, O), m.closePath(), m.stroke();
  }), m.restore()), m.canvas;
}
function De(i, e, t, n, r) {
  if (r) {
    const o = t;
    t = function() {
      i.removeEventListener(e, t), o.apply(n ?? this, arguments);
    };
  } else
    n && n !== i && (t = t.bind(n));
  const s = {
    target: i,
    type: e,
    listener: t
  };
  return i.addEventListener(e, t), s;
}
function an(i, e, t, n) {
  return De(i, e, t, n, !0);
}
function Te(i) {
  i && i.target && (i.target.removeEventListener(i.type, i.listener), si(i));
}
class mi extends ai {
  /**
   * @param {Options} options Tile options.
   */
  constructor(e) {
    super({
      tileCoord: e.tileCoord,
      loader: () => Promise.resolve(new Uint8ClampedArray(4)),
      interpolate: e.interpolate,
      transition: e.transition
    }), this.pixelRatio_ = e.pixelRatio, this.gutter_ = e.gutter, this.reprojData_ = null, this.reprojError_ = null, this.reprojSize_ = void 0, this.sourceTileGrid_ = e.sourceTileGrid, this.targetTileGrid_ = e.targetTileGrid, this.wrappedTileCoord_ = e.wrappedTileCoord || e.tileCoord, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0;
    const t = e.sourceProj, n = t.getExtent(), r = e.sourceTileGrid.getExtent();
    this.clipExtent_ = t.canWrapX() ? r ? ge(n, r) : n : r;
    const s = this.targetTileGrid_.getTileCoordExtent(
      this.wrappedTileCoord_
    ), o = this.targetTileGrid_.getExtent();
    let a = this.sourceTileGrid_.getExtent();
    const l = o ? ge(s, o) : s;
    if (Dt(l) === 0) {
      this.state = b.EMPTY;
      return;
    }
    n && (a ? a = ge(a, n) : a = n);
    const c = this.targetTileGrid_.getResolution(
      this.wrappedTileCoord_[0]
    ), h = e.targetProj, u = is(
      t,
      h,
      l,
      c
    );
    if (!isFinite(u) || u <= 0) {
      this.state = b.EMPTY;
      return;
    }
    const f = e.errorThreshold !== void 0 ? e.errorThreshold : li;
    if (this.triangulation_ = new gi(
      t,
      h,
      l,
      a,
      u * f,
      c
    ), this.triangulation_.getTriangles().length === 0) {
      this.state = b.EMPTY;
      return;
    }
    this.sourceZ_ = this.sourceTileGrid_.getZForResolution(u);
    let g = this.triangulation_.calculateSourceExtent();
    if (a && (t.canWrapX() ? (g[1] = H(
      g[1],
      a[1],
      a[3]
    ), g[3] = H(
      g[3],
      a[1],
      a[3]
    )) : g = ge(g, a)), !Dt(g))
      this.state = b.EMPTY;
    else {
      let m = 0, d = 0;
      t.canWrapX() && (m = j(n), d = Math.floor(
        (g[0] - n[0]) / m
      )), es(
        g.slice(),
        t,
        !0
      ).forEach((y) => {
        const _ = this.sourceTileGrid_.getTileRangeForExtentAndZ(
          y,
          this.sourceZ_
        ), R = e.getTileFunction;
        for (let T = _.minX; T <= _.maxX; T++)
          for (let x = _.minY; x <= _.maxY; x++) {
            const I = R(this.sourceZ_, T, x, this.pixelRatio_);
            if (I) {
              const w = d * m;
              this.sourceTiles_.push({ tile: I, offset: w });
            }
          }
        ++d;
      }), this.sourceTiles_.length === 0 && (this.state = b.EMPTY);
    }
  }
  /**
   * Get the tile size.
   * @return {import('../size.js').Size} Tile size.
   * @override
   */
  getSize() {
    return this.reprojSize_;
  }
  /**
   * Get the data for the tile.
   * @return {import("../DataTile.js").Data} Tile data.
   * @override
   */
  getData() {
    return this.reprojData_;
  }
  /**
   * Get any loading error.
   * @return {Error} Loading error.
   * @override
   */
  getError() {
    return this.reprojError_;
  }
  /**
   * @private
   */
  reproject_() {
    const e = [];
    let t = !1;
    if (this.sourceTiles_.forEach((m) => {
      var le;
      const d = m.tile;
      if (!d || d.getState() !== b.LOADED)
        return;
      const p = d.getSize(), y = this.gutter_;
      let _;
      const R = Vn(d.getData());
      R ? _ = R : (t = !0, _ = Co(tn(d.getData())));
      const T = [p[0] + 2 * y, p[1] + 2 * y], x = _ instanceof Float32Array, I = T[0] * T[1], w = x ? Float32Array : Uint8ClampedArray, E = new w(_.buffer), S = w.BYTES_PER_ELEMENT, v = S * E.length / I, A = E.byteLength / T[1], P = Math.floor(
        A / S / T[0]
      ), G = I * P;
      let O = E;
      if (E.length !== G) {
        O = new w(G);
        let ce = 0, K = 0;
        const _e = T[0] * P;
        for (let Re = 0; Re < T[1]; ++Re) {
          for (let pe = 0; pe < _e; ++pe)
            O[ce++] = E[K + pe];
          K += A / S;
        }
      }
      const z = this.sourceTileGrid_.getTileCoordExtent(d.tileCoord);
      z[0] += m.offset, z[2] += m.offset;
      const $ = (le = this.clipExtent_) == null ? void 0 : le.slice();
      $ && ($[0] += m.offset, $[2] += m.offset), e.push({
        extent: z,
        clipExtent: $,
        data: new Uint8ClampedArray(O.buffer),
        dataType: w,
        bytesPerPixel: v,
        pixelSize: T
      });
    }), this.sourceTiles_.length = 0, e.length === 0) {
      this.state = b.ERROR, this.changed();
      return;
    }
    const n = this.wrappedTileCoord_[0], r = this.targetTileGrid_.getTileSize(n), s = typeof r == "number" ? r : r[0], o = typeof r == "number" ? r : r[1], a = this.targetTileGrid_.getResolution(n), l = this.sourceTileGrid_.getResolution(this.sourceZ_), c = this.targetTileGrid_.getTileCoordExtent(
      this.wrappedTileCoord_
    );
    let h, u;
    const f = e[0].bytesPerPixel, g = Math.ceil(f / 3);
    for (let m = g - 1; m >= 0; --m) {
      const d = [];
      for (let x = 0, I = e.length; x < I; ++x) {
        const w = e[x], E = w.data, S = w.pixelSize, v = S[0], A = S[1], P = xe(v, A, Pe), G = P.createImageData(v, A), O = G.data;
        let z = m * 3;
        for (let $ = 0, le = O.length; $ < le; $ += 4)
          O[$] = E[z], O[$ + 1] = E[z + 1], O[$ + 2] = E[z + 2], O[$ + 3] = 255, z += f;
        P.putImageData(G, 0, 0), d.push({
          extent: w.extent,
          clipExtent: w.clipExtent,
          image: P.canvas
        });
      }
      const p = di(
        s,
        o,
        this.pixelRatio_,
        l,
        this.sourceTileGrid_.getExtent(),
        a,
        c,
        this.triangulation_,
        d,
        this.gutter_,
        !1,
        !1,
        !1
      );
      for (let x = 0, I = d.length; x < I; ++x) {
        const E = d[x].image.getContext("2d");
        vt(E), Pe.push(E.canvas);
      }
      const y = p.getContext("2d"), _ = y.getImageData(0, 0, p.width, p.height);
      vt(y), Pe.push(p), h || (u = new Uint8ClampedArray(
        f * _.width * _.height
      ), h = new e[0].dataType(u.buffer));
      const R = _.data;
      let T = m * 3;
      for (let x = 0, I = R.length; x < I; x += 4)
        R[x + 3] === 255 ? (u[T] = R[x], u[T + 1] = R[x + 1], u[T + 2] = R[x + 2]) : (u[T] = 0, u[T + 1] = 0, u[T + 2] = 0), T += f;
    }
    if (t) {
      const m = xe(s, o), d = new ImageData(h, s);
      m.putImageData(d, 0, 0), this.reprojData_ = m.canvas;
    } else
      this.reprojData_ = h;
    this.reprojSize_ = [
      Math.round(s * this.pixelRatio_),
      Math.round(o * this.pixelRatio_)
    ], this.state = b.LOADED, this.changed();
  }
  /**
   * Load not yet loaded URI.
   * @override
   */
  load() {
    if (this.state !== b.IDLE && this.state !== b.ERROR)
      return;
    this.state = b.LOADING, this.changed();
    let e = 0;
    this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach(({ tile: t }) => {
      const n = t.getState();
      if (n !== b.IDLE && n !== b.LOADING)
        return;
      e++;
      const r = De(t, Q.CHANGE, () => {
        const s = t.getState();
        (s == b.LOADED || s == b.ERROR || s == b.EMPTY) && (Te(r), e--, e === 0 && (this.unlistenSources_(), this.reproject_()));
      });
      this.sourcesListenerKeys_.push(r);
    }), e === 0 ? setTimeout(this.reproject_.bind(this), 0) : this.sourceTiles_.forEach(function({ tile: t }) {
      t.getState() == b.IDLE && t.load();
    });
  }
  /**
   * @private
   */
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(Te), this.sourcesListenerKeys_ = null;
  }
}
function Z(i, e) {
  if (!i)
    throw new Error(e);
}
class rs {
  /**
   * @param {number} [highWaterMark] High water mark.
   */
  constructor(e) {
    this.highWaterMark = e !== void 0 ? e : 2048, this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  /**
   * Expire the cache.
   * @param {!Object<string, boolean>} [keep] Keys to keep. To be implemented by subclasses.
   */
  expireCache(e) {
    for (; this.canExpireCache(); )
      this.pop();
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null;
  }
  /**
   * @param {string} key Key.
   * @return {boolean} Contains key.
   */
  containsKey(e) {
    return this.entries_.hasOwnProperty(e);
  }
  /**
   * @param {function(T, string, LRUCache<T>): ?} f The function
   *     to call for every entry from the oldest to the newer. This function takes
   *     3 arguments (the entry value, the entry key and the LRUCache object).
   *     The return value is ignored.
   */
  forEach(e) {
    let t = this.oldest_;
    for (; t; )
      e(t.value_, t.key_, this), t = t.newer;
  }
  /**
   * @param {string} key Key.
   * @param {*} [options] Options (reserved for subclasses).
   * @return {T} Value.
   */
  get(e, t) {
    const n = this.entries_[e];
    return Z(
      n !== void 0,
      "Tried to get a value for a key that does not exist in the cache"
    ), n === this.newest_ || (n === this.oldest_ ? (this.oldest_ = /** @type {Entry} */
    this.oldest_.newer, this.oldest_.older = null) : (n.newer.older = n.older, n.older.newer = n.newer), n.newer = null, n.older = this.newest_, this.newest_.newer = n, this.newest_ = n), n.value_;
  }
  /**
   * Remove an entry from the cache.
   * @param {string} key The entry key.
   * @return {T} The removed entry.
   */
  remove(e) {
    const t = this.entries_[e];
    return Z(
      t !== void 0,
      "Tried to get a value for a key that does not exist in the cache"
    ), t === this.newest_ ? (this.newest_ = /** @type {Entry} */
    t.older, this.newest_ && (this.newest_.newer = null)) : t === this.oldest_ ? (this.oldest_ = /** @type {Entry} */
    t.newer, this.oldest_ && (this.oldest_.older = null)) : (t.newer.older = t.older, t.older.newer = t.newer), delete this.entries_[e], --this.count_, t.value_;
  }
  /**
   * @return {number} Count.
   */
  getCount() {
    return this.count_;
  }
  /**
   * @return {Array<string>} Keys.
   */
  getKeys() {
    const e = new Array(this.count_);
    let t = 0, n;
    for (n = this.newest_; n; n = n.older)
      e[t++] = n.key_;
    return e;
  }
  /**
   * @return {Array<T>} Values.
   */
  getValues() {
    const e = new Array(this.count_);
    let t = 0, n;
    for (n = this.newest_; n; n = n.older)
      e[t++] = n.value_;
    return e;
  }
  /**
   * @return {T} Last value.
   */
  peekLast() {
    return this.oldest_.value_;
  }
  /**
   * @return {string} Last key.
   */
  peekLastKey() {
    return this.oldest_.key_;
  }
  /**
   * Get the key of the newest item in the cache.  Throws if the cache is empty.
   * @return {string} The newest key.
   */
  peekFirstKey() {
    return this.newest_.key_;
  }
  /**
   * Return an entry without updating least recently used time.
   * @param {string} key Key.
   * @return {T|undefined} Value.
   */
  peek(e) {
    var t;
    return (t = this.entries_[e]) == null ? void 0 : t.value_;
  }
  /**
   * @return {T} value Value.
   */
  pop() {
    const e = this.oldest_;
    return delete this.entries_[e.key_], e.newer && (e.newer.older = null), this.oldest_ = /** @type {Entry} */
    e.newer, this.oldest_ || (this.newest_ = null), --this.count_, e.value_;
  }
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */
  replace(e, t) {
    this.get(e), this.entries_[e].value_ = t;
  }
  /**
   * @param {string} key Key.
   * @param {T} value Value.
   */
  set(e, t) {
    Z(
      !(e in this.entries_),
      "Tried to set a value for a key that is used already"
    );
    const n = {
      key_: e,
      newer: null,
      older: this.newest_,
      value_: t
    };
    this.newest_ ? this.newest_.newer = n : this.oldest_ = n, this.newest_ = n, this.entries_[e] = n, ++this.count_;
  }
  /**
   * Set a maximum number of entries for the cache.
   * @param {number} size Cache size.
   * @api
   */
  setSize(e) {
    this.highWaterMark = e;
  }
}
function ln(i, e, t, n) {
  return n !== void 0 ? (n[0] = i, n[1] = e, n[2] = t, n) : [i, e, t];
}
function qn(i, e, t) {
  return i + "/" + e + "/" + t;
}
function Ye(i) {
  return qn(i[0], i[1], i[2]);
}
function fa(i) {
  return i.split("/").map(Number);
}
function ga(i, e) {
  const t = i[0], n = i[1], r = i[2];
  if (e.getMinZoom() > t || t > e.getMaxZoom())
    return !1;
  const s = e.getFullTileRange(t);
  return s ? s.containsXY(n, r) : !0;
}
class ss extends rs {
  /**
   * @override
   */
  clear() {
    for (; this.getCount() > 0; )
      this.pop().release();
    super.clear();
  }
  /**
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   * @override
   */
  expireCache(e) {
    for (; this.canExpireCache() && !(this.peekLast().getKey() in e); )
      this.pop().release();
  }
  /**
   * Prune all tiles from the cache that don't have the same z as the newest tile.
   */
  pruneExceptNewestZ() {
    if (this.getCount() === 0)
      return;
    const e = this.peekFirstKey(), n = fa(e)[0];
    this.forEach((r) => {
      r.tileCoord[0] !== n && (this.remove(Ye(r.tileCoord)), r.release());
    });
  }
}
const vn = {
  /**
   * Triggered when a tile starts loading.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadstart
   * @api
   */
  TILELOADSTART: "tileloadstart",
  /**
   * Triggered when a tile finishes loading, either when its data is loaded,
   * or when loading was aborted because the tile is no longer needed.
   * @event module:ol/source/Tile.TileSourceEvent#tileloadend
   * @api
   */
  TILELOADEND: "tileloadend",
  /**
   * Triggered if tile loading results in an error. Note that this is not the
   * right place to re-fetch tiles. See {@link module:ol/ImageTile~ImageTile#load}
   * for details.
   * @event module:ol/source/Tile.TileSourceEvent#tileloaderror
   * @api
   */
  TILELOADERROR: "tileloaderror"
}, da = {
  /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */
  PROPERTYCHANGE: "propertychange"
};
class kt extends _n {
  constructor() {
    super(), this.on = /** @type {ObservableOnSignature<import("./events").EventsKey>} */
    this.onInternal, this.once = /** @type {ObservableOnSignature<import("./events").EventsKey>} */
    this.onceInternal, this.un = /** @type {ObservableOnSignature<void>} */
    this.unInternal, this.revision_ = 0;
  }
  /**
   * Increases the revision counter and dispatches a 'change' event.
   * @api
   */
  changed() {
    ++this.revision_, this.dispatchEvent(Q.CHANGE);
  }
  /**
   * Get the version number for this object.  Each time the object is modified,
   * its version number will be incremented.
   * @return {number} Revision.
   * @api
   */
  getRevision() {
    return this.revision_;
  }
  /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */
  onInternal(e, t) {
    if (Array.isArray(e)) {
      const n = e.length, r = new Array(n);
      for (let s = 0; s < n; ++s)
        r[s] = De(this, e[s], t);
      return r;
    }
    return De(
      this,
      /** @type {string} */
      e,
      t
    );
  }
  /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */
  onceInternal(e, t) {
    let n;
    if (Array.isArray(e)) {
      const r = e.length;
      n = new Array(r);
      for (let s = 0; s < r; ++s)
        n[s] = an(this, e[s], t);
    } else
      n = an(
        this,
        /** @type {string} */
        e,
        t
      );
    return t.ol_key = n, n;
  }
  /**
   * Unlisten for a certain type of event.
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @protected
   */
  unInternal(e, t) {
    const n = (
      /** @type {Object} */
      t.ol_key
    );
    if (n)
      ma(n);
    else if (Array.isArray(e))
      for (let r = 0, s = e.length; r < s; ++r)
        this.removeEventListener(e[r], t);
    else
      this.removeEventListener(e, t);
  }
}
kt.prototype.on;
kt.prototype.once;
kt.prototype.un;
function ma(i) {
  if (Array.isArray(i))
    for (let e = 0, t = i.length; e < t; ++e)
      Te(i[e]);
  else
    Te(
      /** @type {import("./events.js").EventsKey} */
      i
    );
}
class cr extends Gt {
  /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */
  constructor(e, t, n) {
    super(e), this.key = t, this.oldValue = n;
  }
}
class xn extends kt {
  /**
   * @param {Object<string, *>} [values] An object with key-value pairs.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, fe(this), this.values_ = null, e !== void 0 && this.setProperties(e);
  }
  /**
   * Gets a value.
   * @param {string} key Key name.
   * @return {*} Value.
   * @api
   */
  get(e) {
    let t;
    return this.values_ && this.values_.hasOwnProperty(e) && (t = this.values_[e]), t;
  }
  /**
   * Get a list of object property names.
   * @return {Array<string>} List of property names.
   * @api
   */
  getKeys() {
    return this.values_ && Object.keys(this.values_) || [];
  }
  /**
   * Get an object of all property names and values.
   * @return {Object<string, *>} Object.
   * @api
   */
  getProperties() {
    return this.values_ && Object.assign({}, this.values_) || {};
  }
  /**
   * Get an object of all property names and values.
   * @return {Object<string, *>?} Object.
   */
  getPropertiesInternal() {
    return this.values_;
  }
  /**
   * @return {boolean} The object has properties.
   */
  hasProperties() {
    return !!this.values_;
  }
  /**
   * @param {string} key Key name.
   * @param {*} oldValue Old value.
   */
  notify(e, t) {
    let n;
    n = `change:${e}`, this.hasListener(n) && this.dispatchEvent(new cr(n, e, t)), n = da.PROPERTYCHANGE, this.hasListener(n) && this.dispatchEvent(new cr(n, e, t));
  }
  /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */
  addChangeListener(e, t) {
    this.addEventListener(`change:${e}`, t);
  }
  /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */
  removeChangeListener(e, t) {
    this.removeEventListener(`change:${e}`, t);
  }
  /**
   * Sets a value.
   * @param {string} key Key name.
   * @param {*} value Value.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */
  set(e, t, n) {
    const r = this.values_ || (this.values_ = {});
    if (n)
      r[e] = t;
    else {
      const s = r[e];
      r[e] = t, s !== t && this.notify(e, s);
    }
  }
  /**
   * Sets a collection of key-value pairs.  Note that this changes any existing
   * properties and adds new ones (it does not remove any existing properties).
   * @param {Object<string, *>} values Values.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */
  setProperties(e, t) {
    for (const n in e)
      this.set(n, e[n], t);
  }
  /**
   * Apply any properties from another object without triggering events.
   * @param {BaseObject} source The source object.
   * @protected
   */
  applyProperties(e) {
    e.values_ && Object.assign(this.values_ || (this.values_ = {}), e.values_);
  }
  /**
   * Unsets a property.
   * @param {string} key Key name.
   * @param {boolean} [silent] Unset without triggering an event.
   * @api
   */
  unset(e, t) {
    if (this.values_ && e in this.values_) {
      const n = this.values_[e];
      delete this.values_[e], _o(this.values_) && (this.values_ = null), t || this.notify(e, n);
    }
  }
}
class os extends xn {
  /**
   * @param {Options} options Source options.
   */
  constructor(e) {
    super(), this.projection = me(e.projection), this.attributions_ = hr(e.attributions), this.attributionsCollapsible_ = e.attributionsCollapsible ?? !0, this.loading = !1, this.state_ = e.state !== void 0 ? e.state : "ready", this.wrapX_ = e.wrapX !== void 0 ? e.wrapX : !1, this.interpolate_ = !!e.interpolate, this.viewResolver = null, this.viewRejector = null;
    const t = this;
    this.viewPromise_ = new Promise(function(n, r) {
      t.viewResolver = n, t.viewRejector = r;
    });
  }
  /**
   * Get the attribution function for the source.
   * @return {?Attribution} Attribution function.
   * @api
   */
  getAttributions() {
    return this.attributions_;
  }
  /**
   * @return {boolean} Attributions are collapsible.
   * @api
   */
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  /**
   * Get the projection of the source.
   * @return {import("../proj/Projection.js").default|null} Projection.
   * @api
   */
  getProjection() {
    return this.projection;
  }
  /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   */
  getResolutions(e) {
    return null;
  }
  /**
   * @return {Promise<import("../View.js").ViewOptions>} A promise for view-related properties.
   */
  getView() {
    return this.viewPromise_;
  }
  /**
   * Get the state of the source, see {@link import("./Source.js").State} for possible states.
   * @return {import("./Source.js").State} State.
   * @api
   */
  getState() {
    return this.state_;
  }
  /**
   * @return {boolean|undefined} Wrap X.
   */
  getWrapX() {
    return this.wrapX_;
  }
  /**
   * @return {boolean} Use linear interpolation when resampling.
   */
  getInterpolate() {
    return this.interpolate_;
  }
  /**
   * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
   * @api
   */
  refresh() {
    this.changed();
  }
  /**
   * Set the attributions of the source.
   * @param {AttributionLike|undefined} attributions Attributions.
   *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
   *     or `undefined`.
   * @api
   */
  setAttributions(e) {
    this.attributions_ = hr(e), this.changed();
  }
  /**
   * Set the state of the source.
   * @param {import("./Source.js").State} state State.
   */
  setState(e) {
    this.state_ = e, this.changed();
  }
}
function hr(i) {
  return i ? typeof i == "function" ? i : (Array.isArray(i) || (i = [i]), (e) => i) : null;
}
class _i {
  /**
   * @param {number} minX Minimum X.
   * @param {number} maxX Maximum X.
   * @param {number} minY Minimum Y.
   * @param {number} maxY Maximum Y.
   */
  constructor(e, t, n, r) {
    this.minX = e, this.maxX = t, this.minY = n, this.maxY = r;
  }
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {boolean} Contains tile coordinate.
   */
  contains(e) {
    return this.containsXY(e[1], e[2]);
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Contains.
   */
  containsTileRange(e) {
    return this.minX <= e.minX && e.maxX <= this.maxX && this.minY <= e.minY && e.maxY <= this.maxY;
  }
  /**
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @return {boolean} Contains coordinate.
   */
  containsXY(e, t) {
    return this.minX <= e && e <= this.maxX && this.minY <= t && t <= this.maxY;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Equals.
   */
  equals(e) {
    return this.minX == e.minX && this.minY == e.minY && this.maxX == e.maxX && this.maxY == e.maxY;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   */
  extend(e) {
    e.minX < this.minX && (this.minX = e.minX), e.maxX > this.maxX && (this.maxX = e.maxX), e.minY < this.minY && (this.minY = e.minY), e.maxY > this.maxY && (this.maxY = e.maxY);
  }
  /**
   * @return {number} Height.
   */
  getHeight() {
    return this.maxY - this.minY + 1;
  }
  /**
   * @return {import("./size.js").Size} Size.
   */
  getSize() {
    return [this.getWidth(), this.getHeight()];
  }
  /**
   * @return {number} Width.
   */
  getWidth() {
    return this.maxX - this.minX + 1;
  }
  /**
   * @param {TileRange} tileRange Tile range.
   * @return {boolean} Intersects.
   */
  intersects(e) {
    return this.minX <= e.maxX && this.maxX >= e.minX && this.minY <= e.maxY && this.maxY >= e.minY;
  }
}
function Qe(i, e, t, n, r) {
  return r !== void 0 ? (r.minX = i, r.maxX = e, r.minY = t, r.maxY = n, r) : new _i(i, e, t, n);
}
const _a = 42, pi = 256;
function pa(i, e, t, n, r) {
  let s;
  for (e += n; e < t; e += n)
    if (s = r(
      i.slice(e - n, e),
      i.slice(e, e + n)
    ), s)
      return s;
  return !1;
}
function ya(i, e, t, n, r) {
  return !Jr(
    r,
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */
    function(o) {
      return !Ke(
        i,
        e,
        t,
        n,
        o[0],
        o[1]
      );
    }
  );
}
function Ke(i, e, t, n, r, s) {
  let o = 0, a = i[t - n], l = i[t - n + 1];
  for (; e < t; e += n) {
    const c = i[e], h = i[e + 1];
    l <= s ? h > s && (c - a) * (s - l) - (r - a) * (h - l) > 0 && o++ : h <= s && (c - a) * (s - l) - (r - a) * (h - l) < 0 && o--, a = c, l = h;
  }
  return o !== 0;
}
function as(i, e, t, n, r, s) {
  if (t.length === 0 || !Ke(i, e, t[0], n, r, s))
    return !1;
  for (let o = 1, a = t.length; o < a; ++o)
    if (Ke(i, t[o - 1], t[o], n, r, s))
      return !1;
  return !0;
}
function ls(i, e, t, n, r) {
  const s = qr(
    _t(),
    i,
    e,
    t,
    n
  );
  return Ut(r, s) ? Pt(r, s) || s[0] >= r[0] && s[2] <= r[2] || s[1] >= r[1] && s[3] <= r[3] ? !0 : pa(
    i,
    e,
    t,
    n,
    /**
     * @param {import("../../coordinate.js").Coordinate} point1 Start point.
     * @param {import("../../coordinate.js").Coordinate} point2 End point.
     * @return {boolean} `true` if the segment and the extent intersect,
     *     `false` otherwise.
     */
    function(o, a) {
      return Go(r, o, a);
    }
  ) : !1;
}
function cs(i, e, t, n, r) {
  return !!(ls(i, e, t, n, r) || Ke(
    i,
    e,
    t,
    n,
    r[0],
    r[1]
  ) || Ke(
    i,
    e,
    t,
    n,
    r[0],
    r[3]
  ) || Ke(
    i,
    e,
    t,
    n,
    r[2],
    r[1]
  ) || Ke(
    i,
    e,
    t,
    n,
    r[2],
    r[3]
  ));
}
function Ea(i, e, t, n, r) {
  if (!cs(i, e, t[0], n, r))
    return !1;
  if (t.length === 1)
    return !0;
  for (let s = 1, o = t.length; s < o; ++s)
    if (ya(
      i,
      t[s - 1],
      t[s],
      n,
      r
    ) && !ls(
      i,
      t[s - 1],
      t[s],
      n,
      r
    ))
      return !1;
  return !0;
}
function Ta(i, e, t) {
  return t === void 0 && (t = [0, 0]), t[0] = i[0] * e + 0.5 | 0, t[1] = i[1] * e + 0.5 | 0, t;
}
function se(i, e) {
  return Array.isArray(i) ? i : (e === void 0 ? e = [i, i] : (e[0] = i, e[1] = i), e);
}
const et = [0, 0, 0], Ne = 5;
class Rn {
  /**
   * @param {Options} options Tile grid options.
   */
  constructor(e) {
    this.minZoom = e.minZoom !== void 0 ? e.minZoom : 0, this.resolutions_ = e.resolutions, Z(
      go(
        this.resolutions_,
        /**
         * @param {number} a First resolution
         * @param {number} b Second resolution
         * @return {number} Comparison result
         */
        (r, s) => s - r,
        !0
      ),
      "`resolutions` must be sorted in descending order"
    );
    let t;
    if (!e.origins) {
      for (let r = 0, s = this.resolutions_.length - 1; r < s; ++r)
        if (!t)
          t = this.resolutions_[r] / this.resolutions_[r + 1];
        else if (this.resolutions_[r] / this.resolutions_[r + 1] !== t) {
          t = void 0;
          break;
        }
    }
    this.zoomFactor_ = t, this.maxZoom = this.resolutions_.length - 1, this.origin_ = e.origin !== void 0 ? e.origin : null, this.origins_ = null, e.origins !== void 0 && (this.origins_ = e.origins, Z(
      this.origins_.length == this.resolutions_.length,
      "Number of `origins` and `resolutions` must be equal"
    ));
    const n = e.extent;
    n !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = yt(n)), Z(
      !this.origin_ && this.origins_ || this.origin_ && !this.origins_,
      "Either `origin` or `origins` must be configured, never both"
    ), this.tileSizes_ = null, e.tileSizes !== void 0 && (this.tileSizes_ = e.tileSizes, Z(
      this.tileSizes_.length == this.resolutions_.length,
      "Number of `tileSizes` and `resolutions` must be equal"
    )), this.tileSize_ = e.tileSize !== void 0 ? e.tileSize : this.tileSizes_ ? null : pi, Z(
      !this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_,
      "Either `tileSize` or `tileSizes` must be configured, never both"
    ), this.extent_ = n !== void 0 ? n : null, this.fullTileRanges_ = null, this.tmpSize_ = [0, 0], this.tmpExtent_ = [0, 0, 0, 0], e.sizes !== void 0 ? this.fullTileRanges_ = e.sizes.map((r, s) => {
      const o = new _i(
        Math.min(0, r[0]),
        Math.max(r[0] - 1, -1),
        Math.min(0, r[1]),
        Math.max(r[1] - 1, -1)
      );
      if (n) {
        const a = this.getTileRangeForExtentAndZ(n, s);
        o.minX = Math.max(a.minX, o.minX), o.maxX = Math.min(a.maxX, o.maxX), o.minY = Math.max(a.minY, o.minY), o.maxY = Math.min(a.maxY, o.maxY);
      }
      return o;
    }) : n && this.calculateTileRanges_(n);
  }
  /**
   * Call a function with each tile coordinate for a given extent and zoom level.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} zoom Integer zoom level.
   * @param {function(import("../tilecoord.js").TileCoord): void} callback Function called with each tile coordinate.
   * @api
   */
  forEachTileCoord(e, t, n) {
    const r = this.getTileRangeForExtentAndZ(e, t);
    for (let s = r.minX, o = r.maxX; s <= o; ++s)
      for (let a = r.minY, l = r.maxY; a <= l; ++a)
        n([t, s, a]);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {function(number, import("../TileRange.js").default): boolean} callback Callback.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {boolean} Callback succeeded.
   */
  forEachTileCoordParentTileRange(e, t, n, r) {
    let s, o, a, l = null, c = e[0] - 1;
    for (this.zoomFactor_ === 2 ? (o = e[1], a = e[2]) : l = this.getTileCoordExtent(e, r); c >= this.minZoom; ) {
      if (o !== void 0 && a !== void 0 ? (o = Math.floor(o / 2), a = Math.floor(a / 2), s = Qe(o, o, a, a, n)) : s = this.getTileRangeForExtentAndZ(
        l,
        c,
        n
      ), t(c, s))
        return !0;
      --c;
    }
    return !1;
  }
  /**
   * Get the extent for this tile grid, if it was configured.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_;
  }
  /**
   * Get the maximum zoom level for the grid.
   * @return {number} Max zoom.
   * @api
   */
  getMaxZoom() {
    return this.maxZoom;
  }
  /**
   * Get the minimum zoom level for the grid.
   * @return {number} Min zoom.
   * @api
   */
  getMinZoom() {
    return this.minZoom;
  }
  /**
   * Get the origin for the grid at the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {import("../coordinate.js").Coordinate} Origin.
   * @api
   */
  getOrigin(e) {
    return this.origin_ ? this.origin_ : this.origins_[e];
  }
  /**
   * Get the resolution for the given zoom level.
   * @param {number} z Integer zoom level.
   * @return {number} Resolution.
   * @api
   */
  getResolution(e) {
    return this.resolutions_[e];
  }
  /**
   * Get the list of resolutions for the tile grid.
   * @return {Array<number>} Resolutions.
   * @api
   */
  getResolutions() {
    return this.resolutions_;
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */
  getTileCoordChildTileRange(e, t, n) {
    if (e[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const s = e[1] * 2, o = e[2] * 2;
        return Qe(
          s,
          s + 1,
          o,
          o + 1,
          t
        );
      }
      const r = this.getTileCoordExtent(
        e,
        n || this.tmpExtent_
      );
      return this.getTileRangeForExtentAndZ(
        r,
        e[0] + 1,
        t
      );
    }
    return null;
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
   * @return {import("../TileRange.js").default|null} Tile range.
   */
  getTileRangeForTileCoordAndZ(e, t, n) {
    if (t > this.maxZoom || t < this.minZoom)
      return null;
    const r = e[0], s = e[1], o = e[2];
    if (t === r)
      return Qe(
        s,
        o,
        s,
        o,
        n
      );
    if (this.zoomFactor_) {
      const l = Math.pow(this.zoomFactor_, t - r), c = Math.floor(s * l), h = Math.floor(o * l);
      if (t < r)
        return Qe(c, c, h, h, n);
      const u = Math.floor(l * (s + 1)) - 1, f = Math.floor(l * (o + 1)) - 1;
      return Qe(c, u, h, f, n);
    }
    const a = this.getTileCoordExtent(e, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(a, t, n);
  }
  /**
   * Get a tile range for the given extent and integer zoom level.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} z Integer zoom level.
   * @param {import("../TileRange.js").default} [tempTileRange] Temporary tile range object.
   * @return {import("../TileRange.js").default} Tile range.
   */
  getTileRangeForExtentAndZ(e, t, n) {
    this.getTileCoordForXYAndZ_(e[0], e[3], t, !1, et);
    const r = et[1], s = et[2];
    this.getTileCoordForXYAndZ_(e[2], e[1], t, !0, et);
    const o = et[1], a = et[2];
    return Qe(r, o, s, a, n);
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {import("../coordinate.js").Coordinate} Tile center.
   */
  getTileCoordCenter(e) {
    const t = this.getOrigin(e[0]), n = this.getResolution(e[0]), r = se(this.getTileSize(e[0]), this.tmpSize_);
    return [
      t[0] + (e[1] + 0.5) * r[0] * n,
      t[1] - (e[2] + 0.5) * r[1] * n
    ];
  }
  /**
   * Get the extent of a tile coordinate.
   *
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../extent.js").Extent} [tempExtent] Temporary extent object.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getTileCoordExtent(e, t) {
    const n = this.getOrigin(e[0]), r = this.getResolution(e[0]), s = se(this.getTileSize(e[0]), this.tmpSize_), o = n[0] + e[1] * s[0] * r, a = n[1] - (e[2] + 1) * s[1] * r, l = o + s[0] * r, c = a + s[1] * r;
    return pt(o, a, l, c, t);
  }
  /**
   * Get the tile coordinate for the given map coordinate and resolution.  This
   * method considers that coordinates that intersect tile boundaries should be
   * assigned the higher tile coordinate.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */
  getTileCoordForCoordAndResolution(e, t, n) {
    return this.getTileCoordForXYAndResolution_(
      e[0],
      e[1],
      t,
      !1,
      n
    );
  }
  /**
   * Note that this method should not be called for resolutions that correspond
   * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
   * @param {number} x X.
   * @param {number} y Y.
   * @param {number} resolution Resolution (for a non-integer zoom level).
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */
  getTileCoordForXYAndResolution_(e, t, n, r, s) {
    const o = this.getZForResolution(n), a = n / this.getResolution(o), l = this.getOrigin(o), c = se(this.getTileSize(o), this.tmpSize_);
    let h = a * (e - l[0]) / n / c[0], u = a * (l[1] - t) / n / c[1];
    return r ? (h = Xe(h, Ne) - 1, u = Xe(u, Ne) - 1) : (h = jt(h, Ne), u = jt(u, Ne)), ln(o, h, u, s);
  }
  /**
   * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
   * they should have separate implementations.  This method is for integer zoom
   * levels.  The other method should only be called for resolutions corresponding
   * to non-integer zoom levels.
   * @param {number} x Map x coordinate.
   * @param {number} y Map y coordinate.
   * @param {number} z Integer zoom level.
   * @param {boolean} reverseIntersectionPolicy Instead of letting edge
   *     intersections go to the higher tile coordinate, let edge intersections
   *     go to the lower tile coordinate.
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @private
   */
  getTileCoordForXYAndZ_(e, t, n, r, s) {
    const o = this.getOrigin(n), a = this.getResolution(n), l = se(this.getTileSize(n), this.tmpSize_);
    let c = (e - o[0]) / a / l[0], h = (o[1] - t) / a / l[1];
    return r ? (c = Xe(c, Ne) - 1, h = Xe(h, Ne) - 1) : (c = jt(c, Ne), h = jt(h, Ne)), ln(n, c, h, s);
  }
  /**
   * Get a tile coordinate given a map coordinate and zoom level.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} z Integer zoom level, e.g. the result of a `getZForResolution()` method call
   * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
   * @api
   */
  getTileCoordForCoordAndZ(e, t, n) {
    return this.getTileCoordForXYAndZ_(
      e[0],
      e[1],
      t,
      !1,
      n
    );
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @return {number} Tile resolution.
   */
  getTileCoordResolution(e) {
    return this.resolutions_[e[0]];
  }
  /**
   * Get the tile size for a zoom level. The type of the return value matches the
   * `tileSize` or `tileSizes` that the tile grid was configured with. To always
   * get an {@link import("../size.js").Size}, run the result through {@link module:ol/size.toSize}.
   * @param {number} z Z.
   * @return {number|import("../size.js").Size} Tile size.
   * @api
   */
  getTileSize(e) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[e];
  }
  /**
   * @param {number} z Zoom level.
   * @return {import("../TileRange.js").default|null} Extent tile range for the specified zoom level.
   */
  getFullTileRange(e) {
    return this.fullTileRanges_ ? this.fullTileRanges_[e] : this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, e) : null;
  }
  /**
   * @param {number} resolution Resolution.
   * @param {number|import("../array.js").NearestDirectionFunction} [opt_direction]
   *     If 0, the nearest resolution will be used.
   *     If 1, the nearest higher resolution (lower Z) will be used. If -1, the
   *     nearest lower resolution (higher Z) will be used. Default is 0.
   *     Use a {@link module:ol/array~NearestDirectionFunction} for more precise control.
   *
   * For example to change tile Z at the midpoint of zoom levels
   * ```js
   * function(value, high, low) {
   *   return value - low * Math.sqrt(high / low);
   * }
   * ```
   * @return {number} Z.
   * @api
   */
  getZForResolution(e, t) {
    const n = mn(
      this.resolutions_,
      e,
      t || 0
    );
    return H(n, this.minZoom, this.maxZoom);
  }
  /**
   * The tile with the provided tile coordinate intersects the given viewport.
   * @param {import('../tilecoord.js').TileCoord} tileCoord Tile coordinate.
   * @param {Array<number>} viewport Viewport as returned from {@link module:ol/extent.getRotatedViewport}.
   * @return {boolean} The tile with the provided tile coordinate intersects the given viewport.
   */
  tileCoordIntersectsViewport(e, t) {
    return cs(
      t,
      0,
      t.length,
      2,
      this.getTileCoordExtent(e)
    );
  }
  /**
   * @param {!import("../extent.js").Extent} extent Extent for this tile grid.
   * @private
   */
  calculateTileRanges_(e) {
    const t = this.resolutions_.length, n = new Array(t);
    for (let r = this.minZoom; r < t; ++r)
      n[r] = this.getTileRangeForExtentAndZ(e, r);
    this.fullTileRanges_ = n;
  }
}
function hs(i) {
  let e = i.getDefaultTileGrid();
  return e || (e = Ia(i), i.setDefaultTileGrid(e)), e;
}
function xa(i, e, t) {
  const n = e[0], r = i.getTileCoordCenter(e), s = yi(t);
  if (!Mt(s, r)) {
    const o = j(s), a = Math.ceil(
      (s[0] - r[0]) / o
    );
    return r[0] += o * a, i.getTileCoordForCoordAndZ(r, n);
  }
  return e;
}
function Ra(i, e, t, n) {
  n = n !== void 0 ? n : "top-left";
  const r = us(i, e, t);
  return new Rn({
    extent: i,
    origin: Oo(i, n),
    resolutions: r,
    tileSize: t
  });
}
function wa(i) {
  const e = i || {}, t = e.extent || me("EPSG:3857").getExtent(), n = {
    extent: t,
    minZoom: e.minZoom,
    tileSize: e.tileSize,
    resolutions: us(
      t,
      e.maxZoom,
      e.tileSize,
      e.maxResolution
    )
  };
  return new Rn(n);
}
function us(i, e, t, n) {
  e = e !== void 0 ? e : _a, t = se(t !== void 0 ? t : pi);
  const r = J(i), s = j(i);
  n = n > 0 ? n : Math.max(s / t[0], r / t[1]);
  const o = e + 1, a = new Array(o);
  for (let l = 0; l < o; ++l)
    a[l] = n / Math.pow(2, l);
  return a;
}
function Ia(i, e, t, n) {
  const r = yi(i);
  return Ra(r, e, t, n);
}
function yi(i) {
  i = me(i);
  let e = i.getExtent();
  if (!e) {
    const t = 180 * Ot.degrees / i.getMetersPerUnit();
    e = pt(-t, -t, t, t);
  }
  return e;
}
class Ca extends os {
  /**
   * @param {Options} options SourceTile source options.
   */
  constructor(e) {
    super({
      attributions: e.attributions,
      attributionsCollapsible: e.attributionsCollapsible,
      projection: e.projection,
      state: e.state,
      wrapX: e.wrapX,
      interpolate: e.interpolate
    }), this.on, this.once, this.un, this.tilePixelRatio_ = e.tilePixelRatio !== void 0 ? e.tilePixelRatio : 1, this.tileGrid = e.tileGrid !== void 0 ? e.tileGrid : null;
    const t = [256, 256];
    this.tileGrid && se(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), t), this.tileCache = new ss(e.cacheSize || 0), this.tmpSize = [0, 0], this.key_ = e.key || "", this.tileOptions = {
      transition: e.transition,
      interpolate: e.interpolate
    }, this.zDirection = e.zDirection ? e.zDirection : 0;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    return this.tileCache.canExpireCache();
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */
  expireCache(e, t) {
    const n = this.getTileCacheForProjection(e);
    n && n.expireCache(t);
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   */
  getGutterForProjection(e) {
    return 0;
  }
  /**
   * Return the key to be used for all tiles in the source.
   * @return {string} The key for all tiles.
   */
  getKey() {
    return this.key_;
  }
  /**
   * Set the value to be used as the key for all tiles in the source.
   * @param {string} key The key for tiles.
   * @protected
   */
  setKey(e) {
    this.key_ !== e && (this.key_ = e, this.changed());
  }
  /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   * @override
   */
  getResolutions(e) {
    const t = e ? this.getTileGridForProjection(e) : this.tileGrid;
    return t ? t.getResolutions() : null;
  }
  /**
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {TileType|null} Tile.
   */
  getTile(e, t, n, r, s) {
    return V();
  }
  /**
   * Return the tile grid of the tile source.
   * @return {import("../tilegrid/TileGrid.js").default|null} Tile grid.
   * @api
   */
  getTileGrid() {
    return this.tileGrid;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */
  getTileGridForProjection(e) {
    return this.tileGrid ? this.tileGrid : hs(e);
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   * @protected
   */
  getTileCacheForProjection(e) {
    const t = this.getProjection();
    return Z(
      t === null || Ve(t, e),
      "A VectorTile source can only be rendered if it has a projection compatible with the view projection."
    ), this.tileCache;
  }
  /**
   * Get the tile pixel ratio for this source. Subclasses may override this
   * method, which is meant to return a supported pixel ratio that matches the
   * provided `pixelRatio` as close as possible.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Tile pixel ratio.
   */
  getTilePixelRatio(e) {
    return this.tilePixelRatio_;
  }
  /**
   * @param {number} z Z.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../size.js").Size} Tile size.
   */
  getTilePixelSize(e, t, n) {
    const r = this.getTileGridForProjection(n), s = this.getTilePixelRatio(t), o = se(r.getTileSize(e), this.tmpSize);
    return s == 1 ? o : Ta(o, s, this.tmpSize);
  }
  /**
   * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
   * is outside the resolution and extent range of the tile grid, `null` will be
   * returned.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../proj/Projection.js").default} [projection] Projection.
   * @return {import("../tilecoord.js").TileCoord} Tile coordinate to be passed to the tileUrlFunction or
   *     null if no tile URL should be created for the passed `tileCoord`.
   */
  getTileCoordForTileUrlFunction(e, t) {
    t = t !== void 0 ? t : this.getProjection();
    const n = this.getTileGridForProjection(t);
    return this.getWrapX() && t.isGlobal() && (e = xa(n, e, t)), ga(e, n) ? e : null;
  }
  /**
   * Remove all cached tiles from the source. The next render cycle will fetch new tiles.
   * @api
   */
  clear() {
    this.tileCache.clear();
  }
  /**
   * @override
   */
  refresh() {
    this.clear(), super.refresh();
  }
  /**
   * Marks a tile coord as being used, without triggering a load.
   * @abstract
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  useTile(e, t, n, r) {
  }
}
class Sa extends Gt {
  /**
   * @param {string} type Type.
   * @param {import("../Tile.js").default} tile The tile.
   */
  constructor(e, t) {
    super(e), this.tile = t;
  }
}
class ba extends Ca {
  /**
   * @param {Options} options DataTile source options.
   */
  constructor(e) {
    const t = e.projection === void 0 ? "EPSG:3857" : e.projection;
    let n = e.tileGrid;
    n === void 0 && t && (n = wa({
      extent: yi(t),
      maxResolution: e.maxResolution,
      maxZoom: e.maxZoom,
      minZoom: e.minZoom,
      tileSize: e.tileSize
    })), super({
      cacheSize: 0.1,
      // don't cache on the source
      attributions: e.attributions,
      attributionsCollapsible: e.attributionsCollapsible,
      projection: t,
      tileGrid: n,
      state: e.state,
      wrapX: e.wrapX,
      transition: e.transition,
      interpolate: e.interpolate,
      key: e.key
    }), this.gutter_ = e.gutter !== void 0 ? e.gutter : 0, this.tileSize_ = e.tileSize ? se(e.tileSize) : null, this.tileSizes_ = null, this.tileLoadingKeys_ = {}, this.loader_ = e.loader, this.handleTileChange_ = this.handleTileChange_.bind(this), this.bandCount = e.bandCount === void 0 ? 4 : e.bandCount, this.tileGridForProjection_ = {}, this.tileCacheForProjection_ = {}, this.crossOrigin_ = e.crossOrigin || "anonymous";
  }
  /**
   * Set the source tile sizes.  The length of the array is expected to match the number of
   * levels in the tile grid.
   * @protected
   * @param {Array<import('../size.js').Size>} tileSizes An array of tile sizes.
   */
  setTileSizes(e) {
    this.tileSizes_ = e;
  }
  /**
   * Get the source tile size at the given zoom level.  This may be different than the rendered tile
   * size.
   * @protected
   * @param {number} z Tile zoom level.
   * @return {import('../size.js').Size} The source tile size.
   */
  getTileSize(e) {
    if (this.tileSizes_)
      return this.tileSizes_[e];
    if (this.tileSize_)
      return this.tileSize_;
    const t = this.getTileGrid();
    return t ? se(t.getTileSize(e)) : [256, 256];
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   * @override
   */
  getGutterForProjection(e) {
    const t = this.getProjection();
    return !t || Ve(t, e) ? this.gutter_ : 0;
  }
  /**
   * @param {Loader} loader The data loader.
   * @protected
   */
  setLoader(e) {
    this.loader_ = e;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../proj/Projection.js").default} targetProj The output projection.
   * @param {import("../proj/Projection.js").default} sourceProj The input projection.
   * @return {!TileType} Tile.
   */
  getReprojTile_(e, t, n, r, s) {
    const o = this.getTileCacheForProjection(r), a = qn(e, t, n);
    if (o.containsKey(a)) {
      const p = o.get(a);
      if (p && p.key == this.getKey())
        return p;
    }
    const l = this.getTileGrid(), c = Math.max.apply(
      null,
      l.getResolutions().map((p, y) => {
        const _ = se(l.getTileSize(y)), R = this.getTileSize(y);
        return Math.max(
          R[0] / _[0],
          R[1] / _[1]
        );
      })
    ), h = this.getTileGridForProjection(s), u = this.getTileGridForProjection(r), f = [e, t, n], g = this.getTileCoordForTileUrlFunction(
      f,
      r
    ), m = Object.assign(
      {
        sourceProj: s,
        sourceTileGrid: h,
        targetProj: r,
        targetTileGrid: u,
        tileCoord: f,
        wrappedTileCoord: g,
        pixelRatio: c,
        gutter: this.getGutterForProjection(s),
        getTileFunction: (p, y, _, R) => this.getTile(p, y, _, R, s)
      },
      /** @type {import("../reproj/DataTile.js").Options} */
      this.tileOptions
    ), d = (
      /** @type {TileType} */
      /** @type {*} */
      new mi(m)
    );
    return d.key = this.getKey(), d;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {TileType|null} Tile (or null if outside source extent).
   * @override
   */
  getTile(e, t, n, r, s) {
    const o = this.getProjection();
    if (o && s && !Ve(o, s))
      return this.getReprojTile_(e, t, n, s, o);
    const a = this.getTileSize(e), l = qn(e, t, n);
    if (this.tileCache.containsKey(l))
      return this.tileCache.get(l);
    const c = this.loader_, h = new AbortController(), u = {
      signal: h.signal,
      crossOrigin: this.crossOrigin_
    }, f = this.getTileCoordForTileUrlFunction([e, t, n]);
    if (!f)
      return null;
    const g = f[0], m = f[1], d = f[2];
    function p() {
      return Kr(function() {
        return c(g, m, d, u);
      });
    }
    const y = Object.assign(
      {
        tileCoord: [e, t, n],
        loader: p,
        size: a,
        controller: h
      },
      this.tileOptions
    ), _ = (
      /** @type {TileType} */
      /** @type {*} */
      new ai(y)
    );
    return _.key = this.getKey(), _.addEventListener(Q.CHANGE, this.handleTileChange_), this.tileCache.set(l, _), _;
  }
  /**
   * Handle tile change events.
   * @param {import("../events/Event.js").default} event Event.
   */
  handleTileChange_(e) {
    const t = (
      /** @type {import("../Tile.js").default} */
      e.target
    ), n = fe(t), r = t.getState();
    let s;
    r == b.LOADING ? (this.tileLoadingKeys_[n] = !0, s = vn.TILELOADSTART) : n in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[n], s = r == b.ERROR ? vn.TILELOADERROR : r == b.LOADED ? vn.TILELOADEND : void 0), s && this.dispatchEvent(new Sa(s, t));
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   * @override
   */
  getTileGridForProjection(e) {
    const t = this.getProjection();
    if (this.tileGrid && (!t || Ve(t, e)))
      return this.tileGrid;
    const n = fe(e);
    return n in this.tileGridForProjection_ || (this.tileGridForProjection_[n] = hs(e)), this.tileGridForProjection_[n];
  }
  /**
   * Sets the tile grid to use when reprojecting the tiles to the given
   * projection instead of the default tile grid for the projection.
   *
   * This can be useful when the default tile grid cannot be created
   * (e.g. projection has no extent defined) or
   * for optimization reasons (custom tile size, resolutions, ...).
   *
   * @param {import("../proj.js").ProjectionLike} projection Projection.
   * @param {import("../tilegrid/TileGrid.js").default} tilegrid Tile grid to use for the projection.
   * @api
   */
  setTileGridForProjection(e, t) {
    const n = me(e);
    if (n) {
      const r = fe(n);
      r in this.tileGridForProjection_ || (this.tileGridForProjection_[r] = t);
    }
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../TileCache.js").default} Tile cache.
   * @override
   */
  getTileCacheForProjection(e) {
    const t = this.getProjection();
    if (!t || Ve(t, e))
      return this.tileCache;
    const n = fe(e);
    return n in this.tileCacheForProjection_ || (this.tileCacheForProjection_[n] = new ss(0.1)), this.tileCacheForProjection_[n];
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   * @override
   */
  expireCache(e, t) {
    const n = this.getTileCacheForProjection(e);
    this.tileCache.expireCache(
      this.tileCache == n ? t : {}
    );
    for (const r in this.tileCacheForProjection_) {
      const s = this.tileCacheForProjection_[r];
      s.expireCache(s == n ? t : {});
    }
  }
  /**
   * @override
   */
  clear() {
    super.clear();
    for (const e in this.tileCacheForProjection_)
      this.tileCacheForProjection_[e].clear();
  }
}
function te(i) {
  return (e, ...t) => Aa(i, e, t);
}
function Et(i, e) {
  return te(
    fs(
      i,
      e
    ).get
  );
}
const {
  apply: Aa,
  construct: Au,
  defineProperty: vu,
  get: Mu,
  getOwnPropertyDescriptor: fs,
  getPrototypeOf: Ei,
  has: Pu,
  ownKeys: va,
  set: Du,
  setPrototypeOf: Ou
} = Reflect, {
  iterator: Bt,
  species: Lu,
  toStringTag: Ma,
  for: Fu
} = Symbol, Pa = Object, {
  create: Ti,
  defineProperty: Da,
  freeze: Nu,
  is: Gu
} = Pa, Oa = Array, La = Oa.prototype, gs = La[Bt], Fa = te(gs), ds = ArrayBuffer, Na = ds.prototype;
Et(Na, "byteLength");
const ur = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
ur && Et(ur.prototype, "byteLength");
const ms = Ei(Uint8Array);
ms.from;
const ae = ms.prototype;
ae[Bt];
te(ae.keys);
te(
  ae.values
);
te(
  ae.entries
);
te(ae.set);
te(
  ae.reverse
);
te(ae.fill);
te(
  ae.copyWithin
);
te(ae.sort);
te(ae.slice);
te(
  ae.subarray
);
Et(
  ae,
  "buffer"
);
Et(
  ae,
  "byteOffset"
);
Et(
  ae,
  "length"
);
Et(
  ae,
  Ma
);
const Ga = Uint8Array, _s = Uint16Array, xi = Uint32Array, Ua = Float32Array, Ft = Ei([][Bt]()), ps = te(Ft.next), Xa = te(function* () {
}().next), ka = Ei(Ft), Ba = DataView.prototype, za = te(
  Ba.getUint16
), Ri = WeakMap, ys = Ri.prototype, Es = te(ys.get), ja = te(ys.set), Ts = new Ri(), $a = Ti(null, {
  next: {
    value: function() {
      const e = Es(Ts, this);
      return ps(e);
    }
  },
  [Bt]: {
    value: function() {
      return this;
    }
  }
});
function Ya(i) {
  if (i[Bt] === gs && Ft.next === ps)
    return i;
  const e = Ti($a);
  return ja(Ts, e, Fa(i)), e;
}
const Va = new Ri(), Ka = Ti(ka, {
  next: {
    value: function() {
      const e = Es(Va, this);
      return Xa(e);
    },
    writable: !0,
    configurable: !0
  }
});
for (const i of va(Ft))
  i !== "next" && Da(Ka, i, fs(Ft, i));
const xs = new ds(4), Ha = new Ua(xs), Za = new xi(xs), Ie = new _s(512), Ce = new Ga(512);
for (let i = 0; i < 256; ++i) {
  const e = i - 127;
  e < -24 ? (Ie[i] = 0, Ie[i | 256] = 32768, Ce[i] = 24, Ce[i | 256] = 24) : e < -14 ? (Ie[i] = 1024 >> -e - 14, Ie[i | 256] = 1024 >> -e - 14 | 32768, Ce[i] = -e - 1, Ce[i | 256] = -e - 1) : e <= 15 ? (Ie[i] = e + 15 << 10, Ie[i | 256] = e + 15 << 10 | 32768, Ce[i] = 13, Ce[i | 256] = 13) : e < 128 ? (Ie[i] = 31744, Ie[i | 256] = 64512, Ce[i] = 24, Ce[i | 256] = 24) : (Ie[i] = 31744, Ie[i | 256] = 64512, Ce[i] = 13, Ce[i | 256] = 13);
}
const wi = new xi(2048);
for (let i = 1; i < 1024; ++i) {
  let e = i << 13, t = 0;
  for (; !(e & 8388608); )
    e <<= 1, t -= 8388608;
  e &= -8388609, t += 947912704, wi[i] = e | t;
}
for (let i = 1024; i < 2048; ++i)
  wi[i] = 939524096 + (i - 1024 << 13);
const Tt = new xi(64);
for (let i = 1; i < 31; ++i)
  Tt[i] = i << 23;
Tt[31] = 1199570944;
Tt[32] = 2147483648;
for (let i = 33; i < 63; ++i)
  Tt[i] = 2147483648 + (i - 32 << 23);
Tt[63] = 3347054592;
const Rs = new _s(64);
for (let i = 1; i < 64; ++i)
  i !== 32 && (Rs[i] = 1024);
function Wa(i) {
  const e = i >> 10;
  return Za[0] = wi[Rs[e] + (i & 1023)] + Tt[e], Ha[0];
}
function ws(i, e, ...t) {
  return Wa(
    za(i, e, ...Ya(t))
  );
}
function Is(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ii = { exports: {} };
function Cs(i, e, t) {
  const n = t && t.debug || !1;
  n && "" + e + i;
  const r = typeof i == "object" ? i.outer : i, s = r.slice(0, r.indexOf(">") + 1), o = ['"', "'"];
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = e + "\\=" + l + "([^" + l + "]*)" + l, u = new RegExp(c).exec(s);
    if (u)
      return u[1];
  }
}
Ii.exports = Cs;
Ii.exports.default = Cs;
var qa = Ii.exports;
const Mn = /* @__PURE__ */ Is(qa);
var Ci = { exports: {} }, Si = { exports: {} }, bi = { exports: {} };
function Ss(i, e, t) {
  const r = new RegExp(e).exec(i.slice(t));
  return r ? t + r.index : -1;
}
bi.exports = Ss;
bi.exports.default = Ss;
var Ja = bi.exports, Ai = { exports: {} };
function bs(i, e, t) {
  const r = new RegExp(e).exec(i.slice(t));
  return r ? t + r.index + r[0].length - 1 : -1;
}
Ai.exports = bs;
Ai.exports.default = bs;
var Qa = Ai.exports, vi = { exports: {} };
function As(i, e) {
  const t = new RegExp(e, "g"), n = i.match(t);
  return n ? n.length : 0;
}
vi.exports = As;
vi.exports.default = As;
var el = vi.exports;
const tl = Ja, Pn = Qa, fr = el;
function vs(i, e, t) {
  const n = t && t.debug || !1, r = !(t && typeof t.nested === !1), s = t && t.startIndex || 0, o = tl(i, `<${e}[ 
>/]`, s);
  if (o === -1)
    return;
  const a = i.slice(o + e.length);
  let l = Pn(a, "^[^<]*[ /]>", 0);
  const c = l !== -1 && a[l - 1] === "/";
  if (c === !1)
    if (r) {
      let g = 0, m = 1, d = 0;
      for (; (l = Pn(a, "[ /]" + e + ">", g)) !== -1; ) {
        const p = a.substring(g, l + 1);
        if (m += fr(p, "<" + e + `[ 
	>]`), d += fr(p, "</" + e + ">"), d >= m)
          break;
        g = l;
      }
    } else
      l = Pn(a, "[ /]" + e + ">", 0);
  const h = o + e.length + l + 1;
  if (h === -1)
    return;
  const u = i.slice(o, h);
  let f;
  return c ? f = null : f = u.slice(u.indexOf(">") + 1, u.lastIndexOf("<")), { inner: f, outer: u, start: o, end: h };
}
Si.exports = vs;
Si.exports.default = vs;
var nl = Si.exports;
const il = nl;
function Ms(i, e, t) {
  const n = [], r = t && t.debug || !1, s = t && typeof t.nested == "boolean" ? t.nested : !0;
  let o = t && t.startIndex || 0, a;
  for (; a = il(i, e, { debug: r, startIndex: o }); )
    s ? o = a.start + 1 + e.length : o = a.end, n.push(a);
  return r && n.length, n;
}
Ci.exports = Ms;
Ci.exports.default = Ms;
var rl = Ci.exports;
const sl = /* @__PURE__ */ Is(rl), At = {
  // TIFF Baseline
  315: "Artist",
  258: "BitsPerSample",
  265: "CellLength",
  264: "CellWidth",
  320: "ColorMap",
  259: "Compression",
  33432: "Copyright",
  306: "DateTime",
  338: "ExtraSamples",
  266: "FillOrder",
  289: "FreeByteCounts",
  288: "FreeOffsets",
  291: "GrayResponseCurve",
  290: "GrayResponseUnit",
  316: "HostComputer",
  270: "ImageDescription",
  257: "ImageLength",
  256: "ImageWidth",
  271: "Make",
  281: "MaxSampleValue",
  280: "MinSampleValue",
  272: "Model",
  254: "NewSubfileType",
  274: "Orientation",
  262: "PhotometricInterpretation",
  284: "PlanarConfiguration",
  296: "ResolutionUnit",
  278: "RowsPerStrip",
  277: "SamplesPerPixel",
  305: "Software",
  279: "StripByteCounts",
  273: "StripOffsets",
  255: "SubfileType",
  263: "Threshholding",
  282: "XResolution",
  283: "YResolution",
  // TIFF Extended
  326: "BadFaxLines",
  327: "CleanFaxData",
  343: "ClipPath",
  328: "ConsecutiveBadFaxLines",
  433: "Decode",
  434: "DefaultImageColor",
  269: "DocumentName",
  336: "DotRange",
  321: "HalftoneHints",
  346: "Indexed",
  347: "JPEGTables",
  285: "PageName",
  297: "PageNumber",
  317: "Predictor",
  319: "PrimaryChromaticities",
  532: "ReferenceBlackWhite",
  339: "SampleFormat",
  340: "SMinSampleValue",
  341: "SMaxSampleValue",
  559: "StripRowCounts",
  330: "SubIFDs",
  292: "T4Options",
  293: "T6Options",
  325: "TileByteCounts",
  323: "TileLength",
  324: "TileOffsets",
  322: "TileWidth",
  301: "TransferFunction",
  318: "WhitePoint",
  344: "XClipPathUnits",
  286: "XPosition",
  529: "YCbCrCoefficients",
  531: "YCbCrPositioning",
  530: "YCbCrSubSampling",
  345: "YClipPathUnits",
  287: "YPosition",
  // EXIF
  37378: "ApertureValue",
  40961: "ColorSpace",
  36868: "DateTimeDigitized",
  36867: "DateTimeOriginal",
  34665: "Exif IFD",
  36864: "ExifVersion",
  33434: "ExposureTime",
  41728: "FileSource",
  37385: "Flash",
  40960: "FlashpixVersion",
  33437: "FNumber",
  42016: "ImageUniqueID",
  37384: "LightSource",
  37500: "MakerNote",
  37377: "ShutterSpeedValue",
  37510: "UserComment",
  // IPTC
  33723: "IPTC",
  // ICC
  34675: "ICC Profile",
  // XMP
  700: "XMP",
  // GDAL
  42112: "GDAL_METADATA",
  42113: "GDAL_NODATA",
  // Photoshop
  34377: "Photoshop",
  // GeoTiff
  33550: "ModelPixelScale",
  33922: "ModelTiepoint",
  34264: "ModelTransformation",
  34735: "GeoKeyDirectory",
  34736: "GeoDoubleParams",
  34737: "GeoAsciiParams",
  // LERC
  50674: "LercParameters"
}, Se = {};
for (const i in At)
  At.hasOwnProperty(i) && (Se[At[i]] = parseInt(i, 10));
const ol = [
  Se.BitsPerSample,
  Se.ExtraSamples,
  Se.SampleFormat,
  Se.StripByteCounts,
  Se.StripOffsets,
  Se.StripRowCounts,
  Se.TileByteCounts,
  Se.TileOffsets,
  Se.SubIFDs
], Dn = {
  1: "BYTE",
  2: "ASCII",
  3: "SHORT",
  4: "LONG",
  5: "RATIONAL",
  6: "SBYTE",
  7: "UNDEFINED",
  8: "SSHORT",
  9: "SLONG",
  10: "SRATIONAL",
  11: "FLOAT",
  12: "DOUBLE",
  // IFD offset, suggested by https://owl.phy.queensu.ca/~phil/exiftool/standards.html
  13: "IFD",
  // introduced by BigTIFF
  16: "LONG8",
  17: "SLONG8",
  18: "IFD8"
}, F = {};
for (const i in Dn)
  Dn.hasOwnProperty(i) && (F[Dn[i]] = parseInt(i, 10));
const he = {
  WhiteIsZero: 0,
  BlackIsZero: 1,
  RGB: 2,
  Palette: 3,
  TransparencyMask: 4,
  CMYK: 5,
  YCbCr: 6,
  CIELab: 8,
  ICCLab: 9
}, al = {
  Unspecified: 0,
  Assocalpha: 1,
  Unassalpha: 2
}, Uu = {
  Version: 0,
  AddCompression: 1
}, Xu = {
  None: 0,
  Deflate: 1,
  Zstandard: 2
}, ll = {
  1024: "GTModelTypeGeoKey",
  1025: "GTRasterTypeGeoKey",
  1026: "GTCitationGeoKey",
  2048: "GeographicTypeGeoKey",
  2049: "GeogCitationGeoKey",
  2050: "GeogGeodeticDatumGeoKey",
  2051: "GeogPrimeMeridianGeoKey",
  2052: "GeogLinearUnitsGeoKey",
  2053: "GeogLinearUnitSizeGeoKey",
  2054: "GeogAngularUnitsGeoKey",
  2055: "GeogAngularUnitSizeGeoKey",
  2056: "GeogEllipsoidGeoKey",
  2057: "GeogSemiMajorAxisGeoKey",
  2058: "GeogSemiMinorAxisGeoKey",
  2059: "GeogInvFlatteningGeoKey",
  2060: "GeogAzimuthUnitsGeoKey",
  2061: "GeogPrimeMeridianLongGeoKey",
  2062: "GeogTOWGS84GeoKey",
  3072: "ProjectedCSTypeGeoKey",
  3073: "PCSCitationGeoKey",
  3074: "ProjectionGeoKey",
  3075: "ProjCoordTransGeoKey",
  3076: "ProjLinearUnitsGeoKey",
  3077: "ProjLinearUnitSizeGeoKey",
  3078: "ProjStdParallel1GeoKey",
  3079: "ProjStdParallel2GeoKey",
  3080: "ProjNatOriginLongGeoKey",
  3081: "ProjNatOriginLatGeoKey",
  3082: "ProjFalseEastingGeoKey",
  3083: "ProjFalseNorthingGeoKey",
  3084: "ProjFalseOriginLongGeoKey",
  3085: "ProjFalseOriginLatGeoKey",
  3086: "ProjFalseOriginEastingGeoKey",
  3087: "ProjFalseOriginNorthingGeoKey",
  3088: "ProjCenterLongGeoKey",
  3089: "ProjCenterLatGeoKey",
  3090: "ProjCenterEastingGeoKey",
  3091: "ProjCenterNorthingGeoKey",
  3092: "ProjScaleAtNatOriginGeoKey",
  3093: "ProjScaleAtCenterGeoKey",
  3094: "ProjAzimuthAngleGeoKey",
  3095: "ProjStraightVertPoleLongGeoKey",
  3096: "ProjRectifiedGridAngleGeoKey",
  4096: "VerticalCSTypeGeoKey",
  4097: "VerticalCitationGeoKey",
  4098: "VerticalDatumGeoKey",
  4099: "VerticalUnitsGeoKey"
};
function cl(i, e) {
  const { width: t, height: n } = i, r = new Uint8Array(t * n * 3);
  let s;
  for (let o = 0, a = 0; o < i.length; ++o, a += 3)
    s = 256 - i[o] / e * 256, r[a] = s, r[a + 1] = s, r[a + 2] = s;
  return r;
}
function hl(i, e) {
  const { width: t, height: n } = i, r = new Uint8Array(t * n * 3);
  let s;
  for (let o = 0, a = 0; o < i.length; ++o, a += 3)
    s = i[o] / e * 256, r[a] = s, r[a + 1] = s, r[a + 2] = s;
  return r;
}
function ul(i, e) {
  const { width: t, height: n } = i, r = new Uint8Array(t * n * 3), s = e.length / 3, o = e.length / 3 * 2;
  for (let a = 0, l = 0; a < i.length; ++a, l += 3) {
    const c = i[a];
    r[l] = e[c] / 65536 * 256, r[l + 1] = e[c + s] / 65536 * 256, r[l + 2] = e[c + o] / 65536 * 256;
  }
  return r;
}
function fl(i) {
  const { width: e, height: t } = i, n = new Uint8Array(e * t * 3);
  for (let r = 0, s = 0; r < i.length; r += 4, s += 3) {
    const o = i[r], a = i[r + 1], l = i[r + 2], c = i[r + 3];
    n[s] = 255 * ((255 - o) / 256) * ((255 - c) / 256), n[s + 1] = 255 * ((255 - a) / 256) * ((255 - c) / 256), n[s + 2] = 255 * ((255 - l) / 256) * ((255 - c) / 256);
  }
  return n;
}
function gl(i) {
  const { width: e, height: t } = i, n = new Uint8ClampedArray(e * t * 3);
  for (let r = 0, s = 0; r < i.length; r += 3, s += 3) {
    const o = i[r], a = i[r + 1], l = i[r + 2];
    n[s] = o + 1.402 * (l - 128), n[s + 1] = o - 0.34414 * (a - 128) - 0.71414 * (l - 128), n[s + 2] = o + 1.772 * (a - 128);
  }
  return n;
}
const dl = 0.95047, ml = 1, _l = 1.08883;
function pl(i) {
  const { width: e, height: t } = i, n = new Uint8Array(e * t * 3);
  for (let r = 0, s = 0; r < i.length; r += 3, s += 3) {
    const o = i[r + 0], a = i[r + 1] << 24 >> 24, l = i[r + 2] << 24 >> 24;
    let c = (o + 16) / 116, h = a / 500 + c, u = c - l / 200, f, g, m;
    h = dl * (h * h * h > 8856e-6 ? h * h * h : (h - 16 / 116) / 7.787), c = ml * (c * c * c > 8856e-6 ? c * c * c : (c - 16 / 116) / 7.787), u = _l * (u * u * u > 8856e-6 ? u * u * u : (u - 16 / 116) / 7.787), f = h * 3.2406 + c * -1.5372 + u * -0.4986, g = h * -0.9689 + c * 1.8758 + u * 0.0415, m = h * 0.0557 + c * -0.204 + u * 1.057, f = f > 31308e-7 ? 1.055 * f ** (1 / 2.4) - 0.055 : 12.92 * f, g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g, m = m > 31308e-7 ? 1.055 * m ** (1 / 2.4) - 0.055 : 12.92 * m, n[s] = Math.max(0, Math.min(1, f)) * 255, n[s + 1] = Math.max(0, Math.min(1, g)) * 255, n[s + 2] = Math.max(0, Math.min(1, m)) * 255;
  }
  return n;
}
const Ps = /* @__PURE__ */ new Map();
function je(i, e) {
  Array.isArray(i) || (i = [i]), i.forEach((t) => Ps.set(t, e));
}
async function Ds(i) {
  const e = Ps.get(i.Compression);
  if (!e)
    throw new Error(`Unknown compression method identifier: ${i.Compression}`);
  const t = await e();
  return new t(i);
}
je([void 0, 1], () => import("./raw-CcGKjn8q.js").then((i) => i.default));
je(5, () => import("./lzw-BOMhmEDy.js").then((i) => i.default));
je(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
je(7, () => import("./jpeg-DNfUpLwy.js").then((i) => i.default));
je([8, 32946], () => import("./deflate-Be2Arps5.js").then((i) => i.default));
je(32773, () => import("./packbits-DaUD6MLm.js").then((i) => i.default));
je(
  34887,
  () => import("./lerc-CAjp4b8f.js").then(async (i) => (await i.zstd.init(), i)).then((i) => i.default)
);
je(50001, () => import("./webimage-D2c098k3.js").then((i) => i.default));
function wn(i, e, t, n = 1) {
  return new (Object.getPrototypeOf(i)).constructor(e * t * n);
}
function yl(i, e, t, n, r) {
  const s = e / n, o = t / r;
  return i.map((a) => {
    const l = wn(a, n, r);
    for (let c = 0; c < r; ++c) {
      const h = Math.min(Math.round(o * c), t - 1);
      for (let u = 0; u < n; ++u) {
        const f = Math.min(Math.round(s * u), e - 1), g = a[h * e + f];
        l[c * n + u] = g;
      }
    }
    return l;
  });
}
function gt(i, e, t) {
  return (1 - t) * i + t * e;
}
function El(i, e, t, n, r) {
  const s = e / n, o = t / r;
  return i.map((a) => {
    const l = wn(a, n, r);
    for (let c = 0; c < r; ++c) {
      const h = o * c, u = Math.floor(h), f = Math.min(Math.ceil(h), t - 1);
      for (let g = 0; g < n; ++g) {
        const m = s * g, d = m % 1, p = Math.floor(m), y = Math.min(Math.ceil(m), e - 1), _ = a[u * e + p], R = a[u * e + y], T = a[f * e + p], x = a[f * e + y], I = gt(
          gt(_, R, d),
          gt(T, x, d),
          h % 1
        );
        l[c * n + g] = I;
      }
    }
    return l;
  });
}
function Tl(i, e, t, n, r, s = "nearest") {
  switch (s.toLowerCase()) {
    case "nearest":
      return yl(i, e, t, n, r);
    case "bilinear":
    case "linear":
      return El(i, e, t, n, r);
    default:
      throw new Error(`Unsupported resampling method: '${s}'`);
  }
}
function xl(i, e, t, n, r, s) {
  const o = e / n, a = t / r, l = wn(i, n, r, s);
  for (let c = 0; c < r; ++c) {
    const h = Math.min(Math.round(a * c), t - 1);
    for (let u = 0; u < n; ++u) {
      const f = Math.min(Math.round(o * u), e - 1);
      for (let g = 0; g < s; ++g) {
        const m = i[h * e * s + f * s + g];
        l[c * n * s + u * s + g] = m;
      }
    }
  }
  return l;
}
function Rl(i, e, t, n, r, s) {
  const o = e / n, a = t / r, l = wn(i, n, r, s);
  for (let c = 0; c < r; ++c) {
    const h = a * c, u = Math.floor(h), f = Math.min(Math.ceil(h), t - 1);
    for (let g = 0; g < n; ++g) {
      const m = o * g, d = m % 1, p = Math.floor(m), y = Math.min(Math.ceil(m), e - 1);
      for (let _ = 0; _ < s; ++_) {
        const R = i[u * e * s + p * s + _], T = i[u * e * s + y * s + _], x = i[f * e * s + p * s + _], I = i[f * e * s + y * s + _], w = gt(
          gt(R, T, d),
          gt(x, I, d),
          h % 1
        );
        l[c * n * s + g * s + _] = w;
      }
    }
  }
  return l;
}
function wl(i, e, t, n, r, s, o = "nearest") {
  switch (o.toLowerCase()) {
    case "nearest":
      return xl(
        i,
        e,
        t,
        n,
        r,
        s
      );
    case "bilinear":
    case "linear":
      return Rl(
        i,
        e,
        t,
        n,
        r,
        s
      );
    default:
      throw new Error(`Unsupported resampling method: '${o}'`);
  }
}
function Il(i, e, t) {
  let n = 0;
  for (let r = e; r < t; ++r)
    n += i[r];
  return n;
}
function Jn(i, e, t) {
  switch (i) {
    case 1:
      if (e <= 8)
        return new Uint8Array(t);
      if (e <= 16)
        return new Uint16Array(t);
      if (e <= 32)
        return new Uint32Array(t);
      break;
    case 2:
      if (e === 8)
        return new Int8Array(t);
      if (e === 16)
        return new Int16Array(t);
      if (e === 32)
        return new Int32Array(t);
      break;
    case 3:
      switch (e) {
        case 16:
        case 32:
          return new Float32Array(t);
        case 64:
          return new Float64Array(t);
      }
      break;
  }
  throw Error("Unsupported data format/bitsPerSample");
}
function Cl(i, e) {
  return (i === 1 || i === 2) && e <= 32 && e % 8 === 0 ? !1 : !(i === 3 && (e === 16 || e === 32 || e === 64));
}
function Sl(i, e, t, n, r, s, o) {
  const a = new DataView(i), l = t === 2 ? o * s : o * s * n, c = t === 2 ? 1 : n, h = Jn(e, r, l), u = parseInt("1".repeat(r), 2);
  if (e === 1) {
    let f;
    t === 1 ? f = n * r : f = r;
    let g = s * f;
    g & 7 && (g = g + 7 & -8);
    for (let m = 0; m < o; ++m) {
      const d = m * g;
      for (let p = 0; p < s; ++p) {
        const y = d + p * c * r;
        for (let _ = 0; _ < c; ++_) {
          const R = y + _ * r, T = (m * s + p) * c + _, x = Math.floor(R / 8), I = R % 8;
          if (I + r <= 8)
            h[T] = a.getUint8(x) >> 8 - r - I & u;
          else if (I + r <= 16)
            h[T] = a.getUint16(x) >> 16 - r - I & u;
          else if (I + r <= 24) {
            const w = a.getUint16(x) << 8 | a.getUint8(x + 2);
            h[T] = w >> 24 - r - I & u;
          } else
            h[T] = a.getUint32(x) >> 32 - r - I & u;
        }
      }
    }
  }
  return h.buffer;
}
class Os {
  /**
   * @constructor
   * @param {Object} fileDirectory The parsed file directory
   * @param {Object} geoKeys The parsed geo-keys
   * @param {DataView} dataView The DataView for the underlying file.
   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
   * @param {Boolean} cache Whether or not decoded tiles shall be cached
   * @param {import('./source/basesource').BaseSource} source The datasource to read from
   */
  constructor(e, t, n, r, s, o) {
    this.fileDirectory = e, this.geoKeys = t, this.dataView = n, this.littleEndian = r, this.tiles = s ? {} : null, this.isTiled = !e.StripOffsets;
    const a = e.PlanarConfiguration;
    if (this.planarConfiguration = typeof a > "u" ? 1 : a, this.planarConfiguration !== 1 && this.planarConfiguration !== 2)
      throw new Error("Invalid planar configuration.");
    this.source = o;
  }
  /**
   * Returns the associated parsed file directory.
   * @returns {Object} the parsed file directory
   */
  getFileDirectory() {
    return this.fileDirectory;
  }
  /**
   * Returns the associated parsed geo keys.
   * @returns {Object} the parsed geo keys
   */
  getGeoKeys() {
    return this.geoKeys;
  }
  /**
   * Returns the width of the image.
   * @returns {Number} the width of the image
   */
  getWidth() {
    return this.fileDirectory.ImageWidth;
  }
  /**
   * Returns the height of the image.
   * @returns {Number} the height of the image
   */
  getHeight() {
    return this.fileDirectory.ImageLength;
  }
  /**
   * Returns the number of samples per pixel.
   * @returns {Number} the number of samples per pixel
   */
  getSamplesPerPixel() {
    return typeof this.fileDirectory.SamplesPerPixel < "u" ? this.fileDirectory.SamplesPerPixel : 1;
  }
  /**
   * Returns the width of each tile.
   * @returns {Number} the width of each tile
   */
  getTileWidth() {
    return this.isTiled ? this.fileDirectory.TileWidth : this.getWidth();
  }
  /**
   * Returns the height of each tile.
   * @returns {Number} the height of each tile
   */
  getTileHeight() {
    return this.isTiled ? this.fileDirectory.TileLength : typeof this.fileDirectory.RowsPerStrip < "u" ? Math.min(this.fileDirectory.RowsPerStrip, this.getHeight()) : this.getHeight();
  }
  getBlockWidth() {
    return this.getTileWidth();
  }
  getBlockHeight(e) {
    return this.isTiled || (e + 1) * this.getTileHeight() <= this.getHeight() ? this.getTileHeight() : this.getHeight() - e * this.getTileHeight();
  }
  /**
   * Calculates the number of bytes for each pixel across all samples. Only full
   * bytes are supported, an exception is thrown when this is not the case.
   * @returns {Number} the bytes per pixel
   */
  getBytesPerPixel() {
    let e = 0;
    for (let t = 0; t < this.fileDirectory.BitsPerSample.length; ++t)
      e += this.getSampleByteSize(t);
    return e;
  }
  getSampleByteSize(e) {
    if (e >= this.fileDirectory.BitsPerSample.length)
      throw new RangeError(`Sample index ${e} is out of range.`);
    return Math.ceil(this.fileDirectory.BitsPerSample[e] / 8);
  }
  getReaderForSample(e) {
    const t = this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1, n = this.fileDirectory.BitsPerSample[e];
    switch (t) {
      case 1:
        if (n <= 8)
          return DataView.prototype.getUint8;
        if (n <= 16)
          return DataView.prototype.getUint16;
        if (n <= 32)
          return DataView.prototype.getUint32;
        break;
      case 2:
        if (n <= 8)
          return DataView.prototype.getInt8;
        if (n <= 16)
          return DataView.prototype.getInt16;
        if (n <= 32)
          return DataView.prototype.getInt32;
        break;
      case 3:
        switch (n) {
          case 16:
            return function(r, s) {
              return ws(this, r, s);
            };
          case 32:
            return DataView.prototype.getFloat32;
          case 64:
            return DataView.prototype.getFloat64;
        }
        break;
    }
    throw Error("Unsupported data format/bitsPerSample");
  }
  getSampleFormat(e = 0) {
    return this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1;
  }
  getBitsPerSample(e = 0) {
    return this.fileDirectory.BitsPerSample[e];
  }
  getArrayForSample(e, t) {
    const n = this.getSampleFormat(e), r = this.getBitsPerSample(e);
    return Jn(n, r, t);
  }
  /**
   * Returns the decoded strip or tile.
   * @param {Number} x the strip or tile x-offset
   * @param {Number} y the tile y-offset (0 for stripped images)
   * @param {Number} sample the sample to get for separated samples
   * @param {import("./geotiff").Pool|import("./geotiff").BaseDecoder} poolOrDecoder the decoder or decoder pool
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise.<ArrayBuffer>}
   */
  async getTileOrStrip(e, t, n, r, s) {
    const o = Math.ceil(this.getWidth() / this.getTileWidth()), a = Math.ceil(this.getHeight() / this.getTileHeight());
    let l;
    const { tiles: c } = this;
    this.planarConfiguration === 1 ? l = t * o + e : this.planarConfiguration === 2 && (l = n * o * a + t * o + e);
    let h, u;
    this.isTiled ? (h = this.fileDirectory.TileOffsets[l], u = this.fileDirectory.TileByteCounts[l]) : (h = this.fileDirectory.StripOffsets[l], u = this.fileDirectory.StripByteCounts[l]);
    const f = (await this.source.fetch([{ offset: h, length: u }], s))[0];
    let g;
    return c === null || !c[l] ? (g = (async () => {
      let m = await r.decode(this.fileDirectory, f);
      const d = this.getSampleFormat(), p = this.getBitsPerSample();
      return Cl(d, p) && (m = Sl(
        m,
        d,
        this.planarConfiguration,
        this.getSamplesPerPixel(),
        p,
        this.getTileWidth(),
        this.getBlockHeight(t)
      )), m;
    })(), c !== null && (c[l] = g)) : g = c[l], { x: e, y: t, sample: n, data: await g };
  }
  /**
   * Internal read function.
   * @private
   * @param {Array} imageWindow The image window in pixel coordinates
   * @param {Array} samples The selected samples (0-based indices)
   * @param {TypedArray|TypedArray[]} valueArrays The array(s) to write into
   * @param {Boolean} interleave Whether or not to write in an interleaved manner
   * @param {import("./geotiff").Pool|AbstractDecoder} poolOrDecoder the decoder or decoder pool
   * @param {number} width the width of window to be read into
   * @param {number} height the height of window to be read into
   * @param {number} resampleMethod the resampling method to be used when interpolating
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise<ReadRasterResult>}
   */
  async _readRaster(e, t, n, r, s, o, a, l, c) {
    const h = this.getTileWidth(), u = this.getTileHeight(), f = this.getWidth(), g = this.getHeight(), m = Math.max(Math.floor(e[0] / h), 0), d = Math.min(
      Math.ceil(e[2] / h),
      Math.ceil(f / h)
    ), p = Math.max(Math.floor(e[1] / u), 0), y = Math.min(
      Math.ceil(e[3] / u),
      Math.ceil(g / u)
    ), _ = e[2] - e[0];
    let R = this.getBytesPerPixel();
    const T = [], x = [];
    for (let E = 0; E < t.length; ++E)
      this.planarConfiguration === 1 ? T.push(Il(this.fileDirectory.BitsPerSample, 0, t[E]) / 8) : T.push(0), x.push(this.getReaderForSample(t[E]));
    const I = [], { littleEndian: w } = this;
    for (let E = p; E < y; ++E)
      for (let S = m; S < d; ++S) {
        let v;
        this.planarConfiguration === 1 && (v = this.getTileOrStrip(S, E, 0, s, c));
        for (let A = 0; A < t.length; ++A) {
          const P = A, G = t[A];
          this.planarConfiguration === 2 && (R = this.getSampleByteSize(G), v = this.getTileOrStrip(S, E, G, s, c));
          const O = v.then((z) => {
            const $ = z.data, le = new DataView($), ce = this.getBlockHeight(z.y), K = z.y * u, _e = z.x * h, Re = K + ce, pe = (z.x + 1) * h, Oe = x[P], We = Math.min(ce, ce - (Re - e[3]), g - K), ie = Math.min(h, h - (pe - e[2]), f - _e);
            for (let ne = Math.max(0, e[1] - K); ne < We; ++ne)
              for (let Y = Math.max(0, e[0] - _e); Y < ie; ++Y) {
                const we = (ne * h + Y) * R, Le = Oe.call(
                  le,
                  we + T[P],
                  w
                );
                let de;
                r ? (de = (ne + K - e[1]) * _ * t.length + (Y + _e - e[0]) * t.length + P, n[de] = Le) : (de = (ne + K - e[1]) * _ + Y + _e - e[0], n[P][de] = Le);
              }
          });
          I.push(O);
        }
      }
    if (await Promise.all(I), o && e[2] - e[0] !== o || a && e[3] - e[1] !== a) {
      let E;
      return r ? E = wl(
        n,
        e[2] - e[0],
        e[3] - e[1],
        o,
        a,
        t.length,
        l
      ) : E = Tl(
        n,
        e[2] - e[0],
        e[3] - e[1],
        o,
        a,
        l
      ), E.width = o, E.height = a, E;
    }
    return n.width = o || e[2] - e[0], n.height = a || e[3] - e[1], n;
  }
  /**
   * Reads raster data from the image. This function reads all selected samples
   * into separate arrays of the correct type for that sample or into a single
   * combined array when `interleave` is set. When provided, only a subset
   * of the raster is read for each sample.
   *
   * @param {ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded arrays as a promise
   */
  async readRasters({
    window: e,
    samples: t = [],
    interleave: n,
    pool: r = null,
    width: s,
    height: o,
    resampleMethod: a,
    fillValue: l,
    signal: c
  } = {}) {
    const h = e || [0, 0, this.getWidth(), this.getHeight()];
    if (h[0] > h[2] || h[1] > h[3])
      throw new Error("Invalid subsets");
    const u = h[2] - h[0], f = h[3] - h[1], g = u * f, m = this.getSamplesPerPixel();
    if (!t || !t.length)
      for (let _ = 0; _ < m; ++_)
        t.push(_);
    else
      for (let _ = 0; _ < t.length; ++_)
        if (t[_] >= m)
          return Promise.reject(new RangeError(`Invalid sample index '${t[_]}'.`));
    let d;
    if (n) {
      const _ = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, R = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      d = Jn(_, R, g * t.length), l && d.fill(l);
    } else {
      d = [];
      for (let _ = 0; _ < t.length; ++_) {
        const R = this.getArrayForSample(t[_], g);
        Array.isArray(l) && _ < l.length ? R.fill(l[_]) : l && !Array.isArray(l) && R.fill(l), d.push(R);
      }
    }
    const p = r || await Ds(this.fileDirectory);
    return await this._readRaster(
      h,
      t,
      d,
      n,
      p,
      s,
      o,
      a,
      c
    );
  }
  /**
   * Reads raster data from the image as RGB. The result is always an
   * interleaved typed array.
   * Colorspaces other than RGB will be transformed to RGB, color maps expanded.
   * When no other method is applicable, the first sample is used to produce a
   * grayscale image.
   * When provided, only a subset of the raster is read for each sample.
   *
   * @param {Object} [options] optional parameters
   * @param {Array<number>} [options.window] the subset to read data from in pixels.
   * @param {boolean} [options.interleave=true] whether the data shall be read
   *                                             in one single array or separate
   *                                             arrays.
   * @param {import("./geotiff").Pool} [options.pool=null] The optional decoder pool to use.
   * @param {number} [options.width] The desired width of the output. When the width is no the
   *                                 same as the images, resampling will be performed.
   * @param {number} [options.height] The desired height of the output. When the width is no the
   *                                  same as the images, resampling will be performed.
   * @param {string} [options.resampleMethod='nearest'] The desired resampling method.
   * @param {boolean} [options.enableAlpha=false] Enable reading alpha channel if present.
   * @param {AbortSignal} [options.signal] An AbortSignal that may be signalled if the request is
   *                                       to be aborted
   * @returns {Promise<ReadRasterResult>} the RGB array as a Promise
   */
  async readRGB({
    window: e,
    interleave: t = !0,
    pool: n = null,
    width: r,
    height: s,
    resampleMethod: o,
    enableAlpha: a = !1,
    signal: l
  } = {}) {
    const c = e || [0, 0, this.getWidth(), this.getHeight()];
    if (c[0] > c[2] || c[1] > c[3])
      throw new Error("Invalid subsets");
    const h = this.fileDirectory.PhotometricInterpretation;
    if (h === he.RGB) {
      let y = [0, 1, 2];
      if (this.fileDirectory.ExtraSamples !== al.Unspecified && a) {
        y = [];
        for (let _ = 0; _ < this.fileDirectory.BitsPerSample.length; _ += 1)
          y.push(_);
      }
      return this.readRasters({
        window: e,
        interleave: t,
        samples: y,
        pool: n,
        width: r,
        height: s,
        resampleMethod: o,
        signal: l
      });
    }
    let u;
    switch (h) {
      case he.WhiteIsZero:
      case he.BlackIsZero:
      case he.Palette:
        u = [0];
        break;
      case he.CMYK:
        u = [0, 1, 2, 3];
        break;
      case he.YCbCr:
      case he.CIELab:
        u = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const f = {
      window: c,
      interleave: !0,
      samples: u,
      pool: n,
      width: r,
      height: s,
      resampleMethod: o,
      signal: l
    }, { fileDirectory: g } = this, m = await this.readRasters(f), d = 2 ** this.fileDirectory.BitsPerSample[0];
    let p;
    switch (h) {
      case he.WhiteIsZero:
        p = cl(m, d);
        break;
      case he.BlackIsZero:
        p = hl(m, d);
        break;
      case he.Palette:
        p = ul(m, g.ColorMap);
        break;
      case he.CMYK:
        p = fl(m);
        break;
      case he.YCbCr:
        p = gl(m);
        break;
      case he.CIELab:
        p = pl(m);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!t) {
      const y = new Uint8Array(p.length / 3), _ = new Uint8Array(p.length / 3), R = new Uint8Array(p.length / 3);
      for (let T = 0, x = 0; T < p.length; T += 3, ++x)
        y[x] = p[T], _[x] = p[T + 1], R[x] = p[T + 2];
      p = [y, _, R];
    }
    return p.width = m.width, p.height = m.height, p;
  }
  /**
   * Returns an array of tiepoints.
   * @returns {Object[]}
   */
  getTiePoints() {
    if (!this.fileDirectory.ModelTiepoint)
      return [];
    const e = [];
    for (let t = 0; t < this.fileDirectory.ModelTiepoint.length; t += 6)
      e.push({
        i: this.fileDirectory.ModelTiepoint[t],
        j: this.fileDirectory.ModelTiepoint[t + 1],
        k: this.fileDirectory.ModelTiepoint[t + 2],
        x: this.fileDirectory.ModelTiepoint[t + 3],
        y: this.fileDirectory.ModelTiepoint[t + 4],
        z: this.fileDirectory.ModelTiepoint[t + 5]
      });
    return e;
  }
  /**
   * Returns the parsed GDAL metadata items.
   *
   * If sample is passed to null, dataset-level metadata will be returned.
   * Otherwise only metadata specific to the provided sample will be returned.
   *
   * @param {number} [sample=null] The sample index.
   * @returns {Object}
   */
  getGDALMetadata(e = null) {
    const t = {};
    if (!this.fileDirectory.GDAL_METADATA)
      return null;
    const n = this.fileDirectory.GDAL_METADATA;
    let r = sl(n, "Item");
    e === null ? r = r.filter((s) => Mn(s, "sample") === void 0) : r = r.filter((s) => Number(Mn(s, "sample")) === e);
    for (let s = 0; s < r.length; ++s) {
      const o = r[s];
      t[Mn(o, "name")] = o.inner;
    }
    return t;
  }
  /**
   * Returns the GDAL nodata value
   * @returns {number|null}
   */
  getGDALNoData() {
    if (!this.fileDirectory.GDAL_NODATA)
      return null;
    const e = this.fileDirectory.GDAL_NODATA;
    return Number(e.substring(0, e.length - 1));
  }
  /**
   * Returns the image origin as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @returns {Array<number>} The origin as a vector
   */
  getOrigin() {
    const e = this.fileDirectory.ModelTiepoint, t = this.fileDirectory.ModelTransformation;
    if (e && e.length === 6)
      return [
        e[3],
        e[4],
        e[5]
      ];
    if (t)
      return [
        t[3],
        t[7],
        t[11]
      ];
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns the image resolution as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @param {GeoTIFFImage} [referenceImage=null] A reference image to calculate the resolution from
   *                                             in cases when the current image does not have the
   *                                             required tags on its own.
   * @returns {Array<number>} The resolution as a vector
   */
  getResolution(e = null) {
    const t = this.fileDirectory.ModelPixelScale, n = this.fileDirectory.ModelTransformation;
    if (t)
      return [
        t[0],
        -t[1],
        t[2]
      ];
    if (n)
      return n[1] === 0 && n[4] === 0 ? [
        n[0],
        -n[5],
        n[10]
      ] : [
        Math.sqrt(n[0] * n[0] + n[4] * n[4]),
        -Math.sqrt(n[1] * n[1] + n[5] * n[5]),
        n[10]
      ];
    if (e) {
      const [r, s, o] = e.getResolution();
      return [
        r * e.getWidth() / this.getWidth(),
        s * e.getHeight() / this.getHeight(),
        o * e.getWidth() / this.getWidth()
      ];
    }
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns whether or not the pixels of the image depict an area (or point).
   * @returns {Boolean} Whether the pixels are a point
   */
  pixelIsArea() {
    return this.geoKeys.GTRasterTypeGeoKey === 1;
  }
  /**
   * Returns the image bounding box as an array of 4 values: min-x, min-y,
   * max-x and max-y. When the image has no affine transformation, then an
   * exception is thrown.
   * @param {boolean} [tilegrid=false] If true return extent for a tilegrid
   *                                   without adjustment for ModelTransformation.
   * @returns {Array<number>} The bounding box
   */
  getBoundingBox(e = !1) {
    const t = this.getHeight(), n = this.getWidth();
    if (this.fileDirectory.ModelTransformation && !e) {
      const [r, s, o, a, l, c, h, u] = this.fileDirectory.ModelTransformation, g = [
        [0, 0],
        [0, t],
        [n, 0],
        [n, t]
      ].map(([p, y]) => [
        a + r * p + s * y,
        u + l * p + c * y
      ]), m = g.map((p) => p[0]), d = g.map((p) => p[1]);
      return [
        Math.min(...m),
        Math.min(...d),
        Math.max(...m),
        Math.max(...d)
      ];
    } else {
      const r = this.getOrigin(), s = this.getResolution(), o = r[0], a = r[1], l = o + s[0] * n, c = a + s[1] * t;
      return [
        Math.min(o, l),
        Math.min(a, c),
        Math.max(o, l),
        Math.max(a, c)
      ];
    }
  }
}
class bl {
  constructor(e) {
    this._dataView = new DataView(e);
  }
  get buffer() {
    return this._dataView.buffer;
  }
  getUint64(e, t) {
    const n = this.getUint32(e, t), r = this.getUint32(e + 4, t);
    let s;
    if (t) {
      if (s = n + 2 ** 32 * r, !Number.isSafeInteger(s))
        throw new Error(
          `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return s;
    }
    if (s = 2 ** 32 * n + r, !Number.isSafeInteger(s))
      throw new Error(
        `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return s;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(e, t) {
    let n = 0;
    const r = (this._dataView.getUint8(e + (t ? 7 : 0)) & 128) > 0;
    let s = !0;
    for (let o = 0; o < 8; o++) {
      let a = this._dataView.getUint8(e + (t ? o : 7 - o));
      r && (s ? a !== 0 && (a = ~(a - 1) & 255, s = !1) : a = ~a & 255), n += a * 256 ** o;
    }
    return r && (n = -n), n;
  }
  getUint8(e, t) {
    return this._dataView.getUint8(e, t);
  }
  getInt8(e, t) {
    return this._dataView.getInt8(e, t);
  }
  getUint16(e, t) {
    return this._dataView.getUint16(e, t);
  }
  getInt16(e, t) {
    return this._dataView.getInt16(e, t);
  }
  getUint32(e, t) {
    return this._dataView.getUint32(e, t);
  }
  getInt32(e, t) {
    return this._dataView.getInt32(e, t);
  }
  getFloat16(e, t) {
    return ws(this._dataView, e, t);
  }
  getFloat32(e, t) {
    return this._dataView.getFloat32(e, t);
  }
  getFloat64(e, t) {
    return this._dataView.getFloat64(e, t);
  }
}
class Al {
  constructor(e, t, n, r) {
    this._dataView = new DataView(e), this._sliceOffset = t, this._littleEndian = n, this._bigTiff = r;
  }
  get sliceOffset() {
    return this._sliceOffset;
  }
  get sliceTop() {
    return this._sliceOffset + this.buffer.byteLength;
  }
  get littleEndian() {
    return this._littleEndian;
  }
  get bigTiff() {
    return this._bigTiff;
  }
  get buffer() {
    return this._dataView.buffer;
  }
  covers(e, t) {
    return this.sliceOffset <= e && this.sliceTop >= e + t;
  }
  readUint8(e) {
    return this._dataView.getUint8(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt8(e) {
    return this._dataView.getInt8(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint16(e) {
    return this._dataView.getUint16(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt16(e) {
    return this._dataView.getInt16(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint32(e) {
    return this._dataView.getUint32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt32(e) {
    return this._dataView.getInt32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat32(e) {
    return this._dataView.getFloat32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat64(e) {
    return this._dataView.getFloat64(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint64(e) {
    const t = this.readUint32(e), n = this.readUint32(e + 4);
    let r;
    if (this._littleEndian) {
      if (r = t + 2 ** 32 * n, !Number.isSafeInteger(r))
        throw new Error(
          `${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return r;
    }
    if (r = 2 ** 32 * t + n, !Number.isSafeInteger(r))
      throw new Error(
        `${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return r;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  readInt64(e) {
    let t = 0;
    const n = (this._dataView.getUint8(e + (this._littleEndian ? 7 : 0)) & 128) > 0;
    let r = !0;
    for (let s = 0; s < 8; s++) {
      let o = this._dataView.getUint8(
        e + (this._littleEndian ? s : 7 - s)
      );
      n && (r ? o !== 0 && (o = ~(o - 1) & 255, r = !1) : o = ~o & 255), t += o * 256 ** s;
    }
    return n && (t = -t), t;
  }
  readOffset(e) {
    return this._bigTiff ? this.readUint64(e) : this.readUint32(e);
  }
}
const vl = typeof navigator < "u" && navigator.hardwareConcurrency || 2;
class Ml {
  /**
   * @constructor
   * @param {Number} [size] The size of the pool. Defaults to the number of CPUs
   *                      available. When this parameter is `null` or 0, then the
   *                      decoding will be done in the main thread.
   * @param {function(): Worker} [createWorker] A function that creates the decoder worker.
   * Defaults to a worker with all decoders that ship with geotiff.js. The `createWorker()`
   * function is expected to return a `Worker` compatible with Web Workers. For code that
   * runs in Node, [web-worker](https://www.npmjs.com/package/web-worker) is a good choice.
   *
   * A worker that uses a custom lzw decoder would look like this `my-custom-worker.js` file:
   * ```js
   * import { addDecoder, getDecoder } from 'geotiff';
   * addDecoder(5, () => import ('./my-custom-lzw').then((m) => m.default));
   * self.addEventListener('message', async (e) => {
   *   const { id, fileDirectory, buffer } = e.data;
   *   const decoder = await getDecoder(fileDirectory);
   *   const decoded = await decoder.decode(fileDirectory, buffer);
   *   self.postMessage({ decoded, id }, [decoded]);
   * });
   * ```
   * The way the above code is built into a worker by the `createWorker()` function
   * depends on the used bundler. For most bundlers, something like this will work:
   * ```js
   * function createWorker() {
   *   return new Worker(new URL('./my-custom-worker.js', import.meta.url));
   * }
   * ```
   */
  constructor(e = vl, t) {
    this.workers = null, this._awaitingDecoder = null, this.size = e, this.messageId = 0, e && (this._awaitingDecoder = t ? Promise.resolve(t) : new Promise((n) => {
      import("./decoder-DJlmx386.js").then((r) => {
        n(r.create);
      });
    }), this._awaitingDecoder.then((n) => {
      this._awaitingDecoder = null, this.workers = [];
      for (let r = 0; r < e; r++)
        this.workers.push({ worker: n(), idle: !0 });
    }));
  }
  /**
   * Decode the given block of bytes with the set compression method.
   * @param {ArrayBuffer} buffer the array buffer of bytes to decode.
   * @returns {Promise<ArrayBuffer>} the decoded result as a `Promise`
   */
  async decode(e, t) {
    return this._awaitingDecoder && await this._awaitingDecoder, this.size === 0 ? Ds(e).then((n) => n.decode(e, t)) : new Promise((n) => {
      const r = this.workers.find((a) => a.idle) || this.workers[Math.floor(Math.random() * this.size)];
      r.idle = !1;
      const s = this.messageId++, o = (a) => {
        a.data.id === s && (r.idle = !0, n(a.data.decoded), r.worker.removeEventListener("message", o));
      };
      r.worker.addEventListener("message", o), r.worker.postMessage({ fileDirectory: e, buffer: t, id: s }, [t]);
    });
  }
  destroy() {
    this.workers && (this.workers.forEach((e) => {
      e.worker.terminate();
    }), this.workers = null);
  }
}
const gr = `\r
\r
`;
function Ls(i) {
  if (typeof Object.fromEntries < "u")
    return Object.fromEntries(i);
  const e = {};
  for (const [t, n] of i)
    e[t.toLowerCase()] = n;
  return e;
}
function Pl(i) {
  const e = i.split(`\r
`).map((t) => {
    const n = t.split(":").map((r) => r.trim());
    return n[0] = n[0].toLowerCase(), n;
  });
  return Ls(e);
}
function Dl(i) {
  const [e, ...t] = i.split(";").map((r) => r.trim()), n = t.map((r) => r.split("="));
  return { type: e, params: Ls(n) };
}
function Qn(i) {
  let e, t, n;
  return i && ([, e, t, n] = i.match(/bytes (\d+)-(\d+)\/(\d+)/), e = parseInt(e, 10), t = parseInt(t, 10), n = parseInt(n, 10)), { start: e, end: t, total: n };
}
function Ol(i, e) {
  let t = null;
  const n = new TextDecoder("ascii"), r = [], s = `--${e}`, o = `${s}--`;
  for (let a = 0; a < 10; ++a)
    n.decode(
      new Uint8Array(i, a, s.length)
    ) === s && (t = a);
  if (t === null)
    throw new Error("Could not find initial boundary");
  for (; t < i.byteLength; ) {
    const a = n.decode(
      new Uint8Array(
        i,
        t,
        Math.min(s.length + 1024, i.byteLength - t)
      )
    );
    if (a.length === 0 || a.startsWith(o))
      break;
    if (!a.startsWith(s))
      throw new Error("Part does not start with boundary");
    const l = a.substr(s.length + 2);
    if (l.length === 0)
      break;
    const c = l.indexOf(gr), h = Pl(l.substr(0, c)), { start: u, end: f, total: g } = Qn(h["content-range"]), m = t + s.length + c + gr.length, d = parseInt(f, 10) + 1 - parseInt(u, 10);
    r.push({
      headers: h,
      data: i.slice(m, m + d),
      offset: u,
      length: d,
      fileSize: g
    }), t = m + d + 4;
  }
  return r;
}
class Mi {
  /**
   *
   * @param {Slice[]} slices
   * @returns {ArrayBuffer[]}
   */
  async fetch(e, t = void 0) {
    return Promise.all(
      e.map((n) => this.fetchSlice(n, t))
    );
  }
  /**
   *
   * @param {Slice} slice
   * @returns {ArrayBuffer}
   */
  async fetchSlice(e) {
    throw new Error(`fetching of slice ${e} not possible, not implemented`);
  }
  /**
   * Returns the filesize if already determined and null otherwise
   */
  get fileSize() {
    return null;
  }
  async close() {
  }
}
class Ll extends Map {
  constructor(e = {}) {
    if (super(), !(e.maxSize && e.maxSize > 0))
      throw new TypeError("`maxSize` must be a number greater than 0");
    if (typeof e.maxAge == "number" && e.maxAge === 0)
      throw new TypeError("`maxAge` must be a number greater than 0");
    this.maxSize = e.maxSize, this.maxAge = e.maxAge || Number.POSITIVE_INFINITY, this.onEviction = e.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(), this._size = 0;
  }
  // TODO: Use private class methods when targeting Node.js 16.
  _emitEvictions(e) {
    if (typeof this.onEviction == "function")
      for (const [t, n] of e)
        this.onEviction(t, n.value);
  }
  _deleteIfExpired(e, t) {
    return typeof t.expiry == "number" && t.expiry <= Date.now() ? (typeof this.onEviction == "function" && this.onEviction(e, t.value), this.delete(e)) : !1;
  }
  _getOrDeleteIfExpired(e, t) {
    if (this._deleteIfExpired(e, t) === !1)
      return t.value;
  }
  _getItemValue(e, t) {
    return t.expiry ? this._getOrDeleteIfExpired(e, t) : t.value;
  }
  _peek(e, t) {
    const n = t.get(e);
    return this._getItemValue(e, n);
  }
  _set(e, t) {
    this.cache.set(e, t), this._size++, this._size >= this.maxSize && (this._size = 0, this._emitEvictions(this.oldCache), this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map());
  }
  _moveToRecent(e, t) {
    this.oldCache.delete(e), this._set(e, t);
  }
  *_entriesAscending() {
    for (const e of this.oldCache) {
      const [t, n] = e;
      this.cache.has(t) || this._deleteIfExpired(t, n) === !1 && (yield e);
    }
    for (const e of this.cache) {
      const [t, n] = e;
      this._deleteIfExpired(t, n) === !1 && (yield e);
    }
  }
  get(e) {
    if (this.cache.has(e)) {
      const t = this.cache.get(e);
      return this._getItemValue(e, t);
    }
    if (this.oldCache.has(e)) {
      const t = this.oldCache.get(e);
      if (this._deleteIfExpired(e, t) === !1)
        return this._moveToRecent(e, t), t.value;
    }
  }
  set(e, t, { maxAge: n = this.maxAge } = {}) {
    const r = typeof n == "number" && n !== Number.POSITIVE_INFINITY ? Date.now() + n : void 0;
    return this.cache.has(e) ? this.cache.set(e, {
      value: t,
      expiry: r
    }) : this._set(e, { value: t, expiry: r }), this;
  }
  has(e) {
    return this.cache.has(e) ? !this._deleteIfExpired(e, this.cache.get(e)) : this.oldCache.has(e) ? !this._deleteIfExpired(e, this.oldCache.get(e)) : !1;
  }
  peek(e) {
    if (this.cache.has(e))
      return this._peek(e, this.cache);
    if (this.oldCache.has(e))
      return this._peek(e, this.oldCache);
  }
  delete(e) {
    const t = this.cache.delete(e);
    return t && this._size--, this.oldCache.delete(e) || t;
  }
  clear() {
    this.cache.clear(), this.oldCache.clear(), this._size = 0;
  }
  resize(e) {
    if (!(e && e > 0))
      throw new TypeError("`maxSize` must be a number greater than 0");
    const t = [...this._entriesAscending()], n = t.length - e;
    n < 0 ? (this.cache = new Map(t), this.oldCache = /* @__PURE__ */ new Map(), this._size = t.length) : (n > 0 && this._emitEvictions(t.slice(0, n)), this.oldCache = new Map(t.slice(n)), this.cache = /* @__PURE__ */ new Map(), this._size = 0), this.maxSize = e;
  }
  *keys() {
    for (const [e] of this)
      yield e;
  }
  *values() {
    for (const [, e] of this)
      yield e;
  }
  *[Symbol.iterator]() {
    for (const e of this.cache) {
      const [t, n] = e;
      this._deleteIfExpired(t, n) === !1 && (yield [t, n.value]);
    }
    for (const e of this.oldCache) {
      const [t, n] = e;
      this.cache.has(t) || this._deleteIfExpired(t, n) === !1 && (yield [t, n.value]);
    }
  }
  *entriesDescending() {
    let e = [...this.cache];
    for (let t = e.length - 1; t >= 0; --t) {
      const n = e[t], [r, s] = n;
      this._deleteIfExpired(r, s) === !1 && (yield [r, s.value]);
    }
    e = [...this.oldCache];
    for (let t = e.length - 1; t >= 0; --t) {
      const n = e[t], [r, s] = n;
      this.cache.has(r) || this._deleteIfExpired(r, s) === !1 && (yield [r, s.value]);
    }
  }
  *entriesAscending() {
    for (const [e, t] of this._entriesAscending())
      yield [e, t.value];
  }
  get size() {
    if (!this._size)
      return this.oldCache.size;
    let e = 0;
    for (const t of this.oldCache.keys())
      this.cache.has(t) || e++;
    return Math.min(this._size + e, this.maxSize);
  }
  entries() {
    return this.entriesAscending();
  }
  forEach(e, t = this) {
    for (const [n, r] of this.entriesAscending())
      e.call(t, r, n, this);
  }
  get [Symbol.toStringTag]() {
    return JSON.stringify([...this.entriesAscending()]);
  }
}
async function Fl(i) {
  return new Promise((e) => setTimeout(e, i));
}
function Nl(i, e) {
  const t = Array.isArray(i) ? i : Array.from(i), n = Array.isArray(e) ? e : Array.from(e);
  return t.map((r, s) => [r, n[s]]);
}
class dt extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, dt), this.name = "AbortError";
  }
}
class Gl extends Error {
  constructor(e, t) {
    super(t), this.errors = e, this.message = t, this.name = "AggregateError";
  }
}
const Ul = Gl;
class Xl {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {ArrayBuffer} [data]
   */
  constructor(e, t, n = null) {
    this.offset = e, this.length = t, this.data = n;
  }
  /**
   * @returns {number} the top byte border
   */
  get top() {
    return this.offset + this.length;
  }
}
class dr {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {number[]} blockIds
   */
  constructor(e, t, n) {
    this.offset = e, this.length = t, this.blockIds = n;
  }
}
class kl extends Mi {
  /**
   *
   * @param {BaseSource} source The underlying source that shall be blocked and cached
   * @param {object} options
   * @param {number} [options.blockSize]
   * @param {number} [options.cacheSize]
   */
  constructor(e, { blockSize: t = 65536, cacheSize: n = 100 } = {}) {
    super(), this.source = e, this.blockSize = t, this.blockCache = new Ll({
      maxSize: n,
      onEviction: (r, s) => {
        this.evictedBlocks.set(r, s);
      }
    }), this.evictedBlocks = /* @__PURE__ */ new Map(), this.blockRequests = /* @__PURE__ */ new Map(), this.blockIdsToFetch = /* @__PURE__ */ new Set(), this.abortedBlockIds = /* @__PURE__ */ new Set();
  }
  get fileSize() {
    return this.source.fileSize;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   */
  async fetch(e, t) {
    const n = [], r = [], s = [];
    this.evictedBlocks.clear();
    for (const { offset: f, length: g } of e) {
      let m = f + g;
      const { fileSize: d } = this;
      d !== null && (m = Math.min(m, d));
      const p = Math.floor(f / this.blockSize) * this.blockSize;
      for (let y = p; y < m; y += this.blockSize) {
        const _ = Math.floor(y / this.blockSize);
        !this.blockCache.has(_) && !this.blockRequests.has(_) && (this.blockIdsToFetch.add(_), r.push(_)), this.blockRequests.has(_) && n.push(this.blockRequests.get(_)), s.push(_);
      }
    }
    await Fl(), this.fetchBlocks(t);
    const o = [];
    for (const f of r)
      this.blockRequests.has(f) && o.push(this.blockRequests.get(f));
    await Promise.allSettled(n), await Promise.allSettled(o);
    const a = [], l = s.filter((f) => this.abortedBlockIds.has(f) || !this.blockCache.has(f));
    if (l.forEach((f) => this.blockIdsToFetch.add(f)), l.length > 0 && t && !t.aborted) {
      this.fetchBlocks(null);
      for (const f of l) {
        const g = this.blockRequests.get(f);
        if (!g)
          throw new Error(`Block ${f} is not in the block requests`);
        a.push(g);
      }
      await Promise.allSettled(a);
    }
    if (t && t.aborted)
      throw new dt("Request was aborted");
    const c = s.map((f) => this.blockCache.get(f) || this.evictedBlocks.get(f)), h = c.filter((f) => !f);
    if (h.length)
      throw new Ul(h, "Request failed");
    const u = new Map(Nl(s, c));
    return this.readSliceData(e, u);
  }
  /**
   *
   * @param {AbortSignal} signal
   */
  fetchBlocks(e) {
    if (this.blockIdsToFetch.size > 0) {
      const t = this.groupBlocks(this.blockIdsToFetch), n = this.source.fetch(t, e);
      for (let r = 0; r < t.length; ++r) {
        const s = t[r];
        for (const o of s.blockIds)
          this.blockRequests.set(o, (async () => {
            try {
              const a = (await n)[r], l = o * this.blockSize, c = l - a.offset, h = Math.min(c + this.blockSize, a.data.byteLength), u = a.data.slice(c, h), f = new Xl(
                l,
                u.byteLength,
                u,
                o
              );
              this.blockCache.set(o, f), this.abortedBlockIds.delete(o);
            } catch (a) {
              if (a.name === "AbortError")
                a.signal = e, this.blockCache.delete(o), this.abortedBlockIds.add(o);
              else
                throw a;
            } finally {
              this.blockRequests.delete(o);
            }
          })());
      }
      this.blockIdsToFetch.clear();
    }
  }
  /**
   *
   * @param {Set} blockIds
   * @returns {BlockGroup[]}
   */
  groupBlocks(e) {
    const t = Array.from(e).sort((o, a) => o - a);
    if (t.length === 0)
      return [];
    let n = [], r = null;
    const s = [];
    for (const o of t)
      r === null || r + 1 === o ? (n.push(o), r = o) : (s.push(new dr(
        n[0] * this.blockSize,
        n.length * this.blockSize,
        n
      )), n = [o], r = o);
    return s.push(new dr(
      n[0] * this.blockSize,
      n.length * this.blockSize,
      n
    )), s;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   * @param {Map} blocks
   */
  readSliceData(e, t) {
    return e.map((n) => {
      let r = n.offset + n.length;
      this.fileSize !== null && (r = Math.min(this.fileSize, r));
      const s = Math.floor(n.offset / this.blockSize), o = Math.floor(r / this.blockSize), a = new ArrayBuffer(n.length), l = new Uint8Array(a);
      for (let c = s; c <= o; ++c) {
        const h = t.get(c), u = h.offset - n.offset, f = h.top - r;
        let g = 0, m = 0, d;
        u < 0 ? g = -u : u > 0 && (m = u), f < 0 ? d = h.length - g : d = r - h.offset - g;
        const p = new Uint8Array(h.data, g, d);
        l.set(p, m);
      }
      return a;
    });
  }
}
class Pi {
  /**
   * Returns whether the response has an ok'ish status code
   */
  get ok() {
    return this.status >= 200 && this.status <= 299;
  }
  /**
   * Returns the status code of the response
   */
  get status() {
    throw new Error("not implemented");
  }
  /**
   * Returns the value of the specified header
   * @param {string} headerName the header name
   * @returns {string} the header value
   */
  getHeader(e) {
    throw new Error("not implemented");
  }
  /**
   * @returns {ArrayBuffer} the response data of the request
   */
  async getData() {
    throw new Error("not implemented");
  }
}
class Di {
  constructor(e) {
    this.url = e;
  }
  /**
   * Send a request with the options
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<BaseResponse>}
   */
  async request({ headers: e, signal: t } = {}) {
    throw new Error("request is not implemented");
  }
}
class Bl extends Pi {
  /**
   * BaseResponse facade for fetch API Response
   * @param {Response} response
   */
  constructor(e) {
    super(), this.response = e;
  }
  get status() {
    return this.response.status;
  }
  getHeader(e) {
    return this.response.headers.get(e);
  }
  async getData() {
    return this.response.arrayBuffer ? await this.response.arrayBuffer() : (await this.response.buffer()).buffer;
  }
}
class zl extends Di {
  constructor(e, t) {
    super(e), this.credentials = t;
  }
  /**
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<FetchResponse>}
   */
  async request({ headers: e, signal: t } = {}) {
    this.url, e.Range && this.url + "" + e.Range.match(/=([^=]*)$/)[1];
    const n = await fetch(this.url, {
      headers: e,
      credentials: this.credentials,
      signal: t
    });
    return new Bl(n);
  }
}
class jl extends Pi {
  /**
   * BaseResponse facade for XMLHttpRequest
   * @param {XMLHttpRequest} xhr
   * @param {ArrayBuffer} data
   */
  constructor(e, t) {
    super(), this.xhr = e, this.data = t;
  }
  get status() {
    return this.xhr.status;
  }
  getHeader(e) {
    return this.xhr.getResponseHeader(e);
  }
  async getData() {
    return this.data;
  }
}
class $l extends Di {
  constructRequest(e, t) {
    return new Promise((n, r) => {
      const s = new XMLHttpRequest();
      s.open("GET", this.url), s.responseType = "arraybuffer";
      for (const [o, a] of Object.entries(e))
        s.setRequestHeader(o, a);
      s.onload = () => {
        const o = s.response;
        n(new jl(s, o));
      }, s.onerror = r, s.onabort = () => r(new dt("Request aborted")), s.send(), t && (t.aborted && s.abort(), t.addEventListener("abort", () => s.abort()));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
const On = {};
class Yl extends Pi {
  /**
   * BaseResponse facade for node HTTP/HTTPS API Response
   * @param {http.ServerResponse} response
   */
  constructor(e, t) {
    super(), this.response = e, this.dataPromise = t;
  }
  get status() {
    return this.response.statusCode;
  }
  getHeader(e) {
    return this.response.headers[e];
  }
  async getData() {
    return await this.dataPromise;
  }
}
class Vl extends Di {
  constructor(e) {
    super(e), this.parsedUrl = On.parse(this.url), this.httpApi = (this.parsedUrl.protocol === "http:", On);
  }
  constructRequest(e, t) {
    return new Promise((n, r) => {
      const s = this.httpApi.get(
        {
          ...this.parsedUrl,
          headers: e
        },
        (o) => {
          const a = new Promise((l) => {
            const c = [];
            o.on("data", (h) => {
              c.push(h);
            }), o.on("end", () => {
              const h = Buffer.concat(c).buffer;
              l(h);
            }), o.on("error", r);
          });
          n(new Yl(o, a));
        }
      );
      s.on("error", r), t && (t.aborted && s.destroy(new dt("Request aborted")), t.addEventListener("abort", () => s.destroy(new dt("Request aborted"))));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
class Oi extends Mi {
  /**
   *
   * @param {BaseClient} client
   * @param {object} headers
   * @param {numbers} maxRanges
   * @param {boolean} allowFullFile
   */
  constructor(e, t, n, r) {
    super(), this.client = e, this.headers = t, this.maxRanges = n, this.allowFullFile = r, this._fileSize = null;
  }
  /**
   *
   * @param {Slice[]} slices
   */
  async fetch(e, t) {
    return this.maxRanges >= e.length ? this.fetchSlices(e, t) : (this.maxRanges > 0 && e.length > 1, Promise.all(
      e.map((n) => this.fetchSlice(n, t))
    ));
  }
  async fetchSlices(e, t) {
    const n = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${e.map(({ offset: r, length: s }) => `${r}-${r + s}`).join(",")}`
      },
      signal: t
    });
    if (n.ok)
      if (n.status === 206) {
        const { type: r, params: s } = Dl(n.getHeader("content-type"));
        if (r === "multipart/byteranges") {
          const u = Ol(await n.getData(), s.boundary);
          return this._fileSize = u[0].fileSize || null, u;
        }
        const o = await n.getData(), { start: a, end: l, total: c } = Qn(n.getHeader("content-range"));
        this._fileSize = c || null;
        const h = [{
          data: o,
          offset: a,
          length: l - a
        }];
        if (e.length > 1) {
          const u = await Promise.all(e.slice(1).map((f) => this.fetchSlice(f, t)));
          return h.concat(u);
        }
        return h;
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const r = await n.getData();
        return this._fileSize = r.byteLength, [{
          data: r,
          offset: 0,
          length: r.byteLength
        }];
      }
    else
      throw new Error("Error fetching data.");
  }
  async fetchSlice(e, t) {
    const { offset: n, length: r } = e, s = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${n}-${n + r}`
      },
      signal: t
    });
    if (s.ok)
      if (s.status === 206) {
        const o = await s.getData(), { total: a } = Qn(s.getHeader("content-range"));
        return this._fileSize = a || null, {
          data: o,
          offset: n,
          length: r
        };
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const o = await s.getData();
        return this._fileSize = o.byteLength, {
          data: o,
          offset: 0,
          length: o.byteLength
        };
      }
    else
      throw new Error("Error fetching data.");
  }
  get fileSize() {
    return this._fileSize;
  }
}
function Li(i, { blockSize: e, cacheSize: t }) {
  return e === null ? i : new kl(i, { blockSize: e, cacheSize: t });
}
function Kl(i, { headers: e = {}, credentials: t, maxRanges: n = 0, allowFullFile: r = !1, ...s } = {}) {
  const o = new zl(i, t), a = new Oi(o, e, n, r);
  return Li(a, s);
}
function Hl(i, { headers: e = {}, maxRanges: t = 0, allowFullFile: n = !1, ...r } = {}) {
  const s = new $l(i), o = new Oi(s, e, t, n);
  return Li(o, r);
}
function Zl(i, { headers: e = {}, maxRanges: t = 0, allowFullFile: n = !1, ...r } = {}) {
  const s = new Vl(i), o = new Oi(s, e, t, n);
  return Li(o, r);
}
function ei(i, { forceXHR: e = !1, ...t } = {}) {
  return typeof fetch == "function" && !e ? Kl(i, t) : typeof XMLHttpRequest < "u" ? Hl(i, t) : Zl(i, t);
}
class Wl extends Mi {
  constructor(e) {
    super(), this.file = e;
  }
  async fetchSlice(e, t) {
    return new Promise((n, r) => {
      const s = this.file.slice(e.offset, e.offset + e.length), o = new FileReader();
      o.onload = (a) => n(a.target.result), o.onerror = r, o.onabort = r, o.readAsArrayBuffer(s), t && t.addEventListener("abort", () => o.abort());
    });
  }
}
function ql(i) {
  return new Wl(i);
}
function ti(i) {
  switch (i) {
    case F.BYTE:
    case F.ASCII:
    case F.SBYTE:
    case F.UNDEFINED:
      return 1;
    case F.SHORT:
    case F.SSHORT:
      return 2;
    case F.LONG:
    case F.SLONG:
    case F.FLOAT:
    case F.IFD:
      return 4;
    case F.RATIONAL:
    case F.SRATIONAL:
    case F.DOUBLE:
    case F.LONG8:
    case F.SLONG8:
    case F.IFD8:
      return 8;
    default:
      throw new RangeError(`Invalid field type: ${i}`);
  }
}
function Jl(i) {
  const e = i.GeoKeyDirectory;
  if (!e)
    return null;
  const t = {};
  for (let n = 4; n <= e[3] * 4; n += 4) {
    const r = ll[e[n]], s = e[n + 1] ? At[e[n + 1]] : null, o = e[n + 2], a = e[n + 3];
    let l = null;
    if (!s)
      l = a;
    else {
      if (l = i[s], typeof l > "u" || l === null)
        throw new Error(`Could not get value of geoKey '${r}'.`);
      typeof l == "string" ? l = l.substring(a, a + o - 1) : l.subarray && (l = l.subarray(a, a + o), o === 1 && (l = l[0]));
    }
    t[r] = l;
  }
  return t;
}
function tt(i, e, t, n) {
  let r = null, s = null;
  const o = ti(e);
  switch (e) {
    case F.BYTE:
    case F.ASCII:
    case F.UNDEFINED:
      r = new Uint8Array(t), s = i.readUint8;
      break;
    case F.SBYTE:
      r = new Int8Array(t), s = i.readInt8;
      break;
    case F.SHORT:
      r = new Uint16Array(t), s = i.readUint16;
      break;
    case F.SSHORT:
      r = new Int16Array(t), s = i.readInt16;
      break;
    case F.LONG:
    case F.IFD:
      r = new Uint32Array(t), s = i.readUint32;
      break;
    case F.SLONG:
      r = new Int32Array(t), s = i.readInt32;
      break;
    case F.LONG8:
    case F.IFD8:
      r = new Array(t), s = i.readUint64;
      break;
    case F.SLONG8:
      r = new Array(t), s = i.readInt64;
      break;
    case F.RATIONAL:
      r = new Uint32Array(t * 2), s = i.readUint32;
      break;
    case F.SRATIONAL:
      r = new Int32Array(t * 2), s = i.readInt32;
      break;
    case F.FLOAT:
      r = new Float32Array(t), s = i.readFloat32;
      break;
    case F.DOUBLE:
      r = new Float64Array(t), s = i.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${e}`);
  }
  if (e === F.RATIONAL || e === F.SRATIONAL)
    for (let a = 0; a < t; a += 2)
      r[a] = s.call(
        i,
        n + a * o
      ), r[a + 1] = s.call(
        i,
        n + (a * o + 4)
      );
  else
    for (let a = 0; a < t; ++a)
      r[a] = s.call(
        i,
        n + a * o
      );
  return e === F.ASCII ? new TextDecoder("utf-8").decode(r) : r;
}
class Ql {
  constructor(e, t, n) {
    this.fileDirectory = e, this.geoKeyDirectory = t, this.nextIFDByteOffset = n;
  }
}
class $t extends Error {
  constructor(e) {
    super(`No image at index ${e}`), this.index = e;
  }
}
class Fs {
  /**
   * (experimental) Reads raster data from the best fitting image. This function uses
   * the image with the lowest resolution that is still a higher resolution than the
   * requested resolution.
   * When specified, the `bbox` option is translated to the `window` option and the
   * `resX` and `resY` to `width` and `height` respectively.
   * Then, the [readRasters]{@link GeoTIFFImage#readRasters} method of the selected
   * image is called and the result returned.
   * @see GeoTIFFImage.readRasters
   * @param {import('./geotiffimage').ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded array(s), with `height` and `width`, as a promise
   */
  async readRasters(e = {}) {
    const { window: t, width: n, height: r } = e;
    let { resX: s, resY: o, bbox: a } = e;
    const l = await this.getImage();
    let c = l;
    const h = await this.getImageCount(), u = l.getBoundingBox();
    if (t && a)
      throw new Error('Both "bbox" and "window" passed.');
    if (n || r) {
      if (t) {
        const [m, d] = l.getOrigin(), [p, y] = l.getResolution();
        a = [
          m + t[0] * p,
          d + t[1] * y,
          m + t[2] * p,
          d + t[3] * y
        ];
      }
      const g = a || u;
      if (n) {
        if (s)
          throw new Error("Both width and resX passed");
        s = (g[2] - g[0]) / n;
      }
      if (r) {
        if (o)
          throw new Error("Both width and resY passed");
        o = (g[3] - g[1]) / r;
      }
    }
    if (s || o) {
      const g = [];
      for (let m = 0; m < h; ++m) {
        const d = await this.getImage(m), { SubfileType: p, NewSubfileType: y } = d.fileDirectory;
        (m === 0 || p === 2 || y & 1) && g.push(d);
      }
      g.sort((m, d) => m.getWidth() - d.getWidth());
      for (let m = 0; m < g.length; ++m) {
        const d = g[m], p = (u[2] - u[0]) / d.getWidth(), y = (u[3] - u[1]) / d.getHeight();
        if (c = d, s && s > p || o && o > y)
          break;
      }
    }
    let f = t;
    if (a) {
      const [g, m] = l.getOrigin(), [d, p] = c.getResolution(l);
      f = [
        Math.round((a[0] - g) / d),
        Math.round((a[1] - m) / p),
        Math.round((a[2] - g) / d),
        Math.round((a[3] - m) / p)
      ], f = [
        Math.min(f[0], f[2]),
        Math.min(f[1], f[3]),
        Math.max(f[0], f[2]),
        Math.max(f[1], f[3])
      ];
    }
    return c.readRasters({ ...e, window: f });
  }
}
let cn = class Ns extends Fs {
  /**
   * @constructor
   * @param {*} source The datasource to read from.
   * @param {boolean} littleEndian Whether the image uses little endian.
   * @param {boolean} bigTiff Whether the image uses bigTIFF conventions.
   * @param {number} firstIFDOffset The numeric byte-offset from the start of the image
   *                                to the first IFD.
   * @param {GeoTIFFOptions} [options] further options.
   */
  constructor(e, t, n, r, s = {}) {
    super(), this.source = e, this.littleEndian = t, this.bigTiff = n, this.firstIFDOffset = r, this.cache = s.cache || !1, this.ifdRequests = [], this.ghostValues = null;
  }
  async getSlice(e, t) {
    const n = this.bigTiff ? 4048 : 1024;
    return new Al(
      (await this.source.fetch([{
        offset: e,
        length: typeof t < "u" ? t : n
      }]))[0],
      e,
      this.littleEndian,
      this.bigTiff
    );
  }
  /**
   * Instructs to parse an image file directory at the given file offset.
   * As there is no way to ensure that a location is indeed the start of an IFD,
   * this function must be called with caution (e.g only using the IFD offsets from
   * the headers or other IFDs).
   * @param {number} offset the offset to parse the IFD at
   * @returns {Promise<ImageFileDirectory>} the parsed IFD
   */
  async parseFileDirectoryAt(e) {
    const t = this.bigTiff ? 20 : 12, n = this.bigTiff ? 8 : 2;
    let r = await this.getSlice(e);
    const s = this.bigTiff ? r.readUint64(e) : r.readUint16(e), o = s * t + (this.bigTiff ? 16 : 6);
    r.covers(e, o) || (r = await this.getSlice(e, o));
    const a = {};
    let l = e + (this.bigTiff ? 8 : 2);
    for (let u = 0; u < s; l += t, ++u) {
      const f = r.readUint16(l), g = r.readUint16(l + 2), m = this.bigTiff ? r.readUint64(l + 4) : r.readUint32(l + 4);
      let d, p;
      const y = ti(g), _ = l + (this.bigTiff ? 12 : 8);
      if (y * m <= (this.bigTiff ? 8 : 4))
        d = tt(r, g, m, _);
      else {
        const R = r.readOffset(_), T = ti(g) * m;
        if (r.covers(R, T))
          d = tt(r, g, m, R);
        else {
          const x = await this.getSlice(R, T);
          d = tt(x, g, m, R);
        }
      }
      m === 1 && ol.indexOf(f) === -1 && !(g === F.RATIONAL || g === F.SRATIONAL) ? p = d[0] : p = d, a[At[f]] = p;
    }
    const c = Jl(a), h = r.readOffset(
      e + n + t * s
    );
    return new Ql(
      a,
      c,
      h
    );
  }
  async requestIFD(e) {
    if (this.ifdRequests[e])
      return this.ifdRequests[e];
    if (e === 0)
      return this.ifdRequests[e] = this.parseFileDirectoryAt(this.firstIFDOffset), this.ifdRequests[e];
    if (!this.ifdRequests[e - 1])
      try {
        this.ifdRequests[e - 1] = this.requestIFD(e - 1);
      } catch (t) {
        throw t instanceof $t ? new $t(e) : t;
      }
    return this.ifdRequests[e] = (async () => {
      const t = await this.ifdRequests[e - 1];
      if (t.nextIFDByteOffset === 0)
        throw new $t(e);
      return this.parseFileDirectoryAt(t.nextIFDByteOffset);
    })(), this.ifdRequests[e];
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(e = 0) {
    const t = await this.requestIFD(e);
    return new Os(
      t.fileDirectory,
      t.geoKeyDirectory,
      this.dataView,
      this.littleEndian,
      this.cache,
      this.source
    );
  }
  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Promise<number>} the number of internal subfile images
   */
  async getImageCount() {
    let e = 0, t = !0;
    for (; t; )
      try {
        await this.requestIFD(e), ++e;
      } catch (n) {
        if (n instanceof $t)
          t = !1;
        else
          throw n;
      }
    return e;
  }
  /**
   * Get the values of the COG ghost area as a parsed map.
   * See https://gdal.org/drivers/raster/cog.html#header-ghost-area for reference
   * @returns {Promise<Object>} the parsed ghost area or null, if no such area was found
   */
  async getGhostValues() {
    const e = this.bigTiff ? 16 : 8;
    if (this.ghostValues)
      return this.ghostValues;
    const t = "GDAL_STRUCTURAL_METADATA_SIZE=", n = t.length + 100;
    let r = await this.getSlice(e, n);
    if (t === tt(r, F.ASCII, t.length, e)) {
      const o = tt(r, F.ASCII, n, e).split(`
`)[0], a = Number(o.split("=")[1].split(" ")[0]) + o.length;
      a > n && (r = await this.getSlice(e, a));
      const l = tt(r, F.ASCII, a, e);
      this.ghostValues = {}, l.split(`
`).filter((c) => c.length > 0).map((c) => c.split("=")).forEach(([c, h]) => {
        this.ghostValues[c] = h;
      });
    }
    return this.ghostValues;
  }
  /**
   * Parse a (Geo)TIFF file from the given source.
   *
   * @param {*} source The source of data to parse from.
   * @param {GeoTIFFOptions} [options] Additional options.
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   */
  static async fromSource(e, t, n) {
    const r = (await e.fetch([{ offset: 0, length: 1024 }], n))[0], s = new bl(r), o = s.getUint16(0, 0);
    let a;
    if (o === 18761)
      a = !0;
    else if (o === 19789)
      a = !1;
    else
      throw new TypeError("Invalid byte order value.");
    const l = s.getUint16(2, a);
    let c;
    if (l === 42)
      c = !1;
    else if (l === 43) {
      if (c = !0, s.getUint16(4, a) !== 8)
        throw new Error("Unsupported offset byte-size.");
    } else
      throw new TypeError("Invalid magic number.");
    const h = c ? s.getUint64(8, a) : s.getUint32(4, a);
    return new Ns(e, a, c, h, t);
  }
  /**
   * Closes the underlying file buffer
   * N.B. After the GeoTIFF has been completely processed it needs
   * to be closed but only if it has been constructed from a file.
   */
  close() {
    return typeof this.source.close == "function" ? this.source.close() : !1;
  }
};
class ec extends Fs {
  /**
   * Construct a new MultiGeoTIFF from a main and several overview files.
   * @param {GeoTIFF} mainFile The main GeoTIFF file.
   * @param {GeoTIFF[]} overviewFiles An array of overview files.
   */
  constructor(e, t) {
    super(), this.mainFile = e, this.overviewFiles = t, this.imageFiles = [e].concat(t), this.fileDirectoriesPerFile = null, this.fileDirectoriesPerFileParsing = null, this.imageCount = null;
  }
  async parseFileDirectoriesPerFile() {
    const e = [this.mainFile.parseFileDirectoryAt(this.mainFile.firstIFDOffset)].concat(this.overviewFiles.map((t) => t.parseFileDirectoryAt(t.firstIFDOffset)));
    return this.fileDirectoriesPerFile = await Promise.all(e), this.fileDirectoriesPerFile;
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(e = 0) {
    await this.getImageCount(), await this.parseFileDirectoriesPerFile();
    let t = 0, n = 0;
    for (let r = 0; r < this.imageFiles.length; r++) {
      const s = this.imageFiles[r];
      for (let o = 0; o < this.imageCounts[r]; o++) {
        if (e === t) {
          const a = await s.requestIFD(n);
          return new Os(
            a.fileDirectory,
            a.geoKeyDirectory,
            s.dataView,
            s.littleEndian,
            s.cache,
            s.source
          );
        }
        t++, n++;
      }
      n = 0;
    }
    throw new RangeError("Invalid image index");
  }
  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Promise<number>} the number of internal subfile images
   */
  async getImageCount() {
    if (this.imageCount !== null)
      return this.imageCount;
    const e = [this.mainFile.getImageCount()].concat(this.overviewFiles.map((t) => t.getImageCount()));
    return this.imageCounts = await Promise.all(e), this.imageCount = this.imageCounts.reduce((t, n) => t + n, 0), this.imageCount;
  }
}
async function tc(i, e = {}, t) {
  return cn.fromSource(ei(i, e), t);
}
async function nc(i, e) {
  return cn.fromSource(ql(i), e);
}
async function ic(i, e = [], t = {}, n) {
  const r = await cn.fromSource(ei(i, t), n), s = await Promise.all(
    e.map((o) => cn.fromSource(ei(o, t)))
  );
  return new ec(r, s);
}
function rc(i) {
  return ((i.fileDirectory.NewSubfileType || 0) & 4) === 4;
}
function sc(i, e) {
  if (!i)
    return !1;
  if (i === !0)
    return !0;
  if (e.getSamplesPerPixel() !== 3)
    return !1;
  const t = e.fileDirectory.PhotometricInterpretation, n = he;
  return t === n.CMYK || t === n.YCbCr || t === n.CIELab || t === n.ICCLab;
}
const mr = "STATISTICS_MAXIMUM", _r = "STATISTICS_MINIMUM", Ln = 256;
let Fn;
function oc() {
  return Fn || (Fn = new Ml()), Fn;
}
function ac(i) {
  try {
    return i.getBoundingBox();
  } catch {
    return [0, 0, i.getWidth(), i.getHeight()];
  }
}
function lc(i) {
  try {
    return i.getOrigin().slice(0, 2);
  } catch {
    return [0, i.getHeight()];
  }
}
function cc(i, e) {
  try {
    return i.getResolution(e);
  } catch {
    return [
      e.getWidth() / i.getWidth(),
      e.getHeight() / i.getHeight()
    ];
  }
}
function hc(i) {
  const e = i.geoKeys;
  if (!e)
    return null;
  if (e.ProjectedCSTypeGeoKey && e.ProjectedCSTypeGeoKey !== 32767) {
    const t = "EPSG:" + e.ProjectedCSTypeGeoKey;
    let n = me(t);
    if (!n) {
      const r = Qi(e.ProjLinearUnitsGeoKey);
      r && (n = new nn({
        code: t,
        units: r
      }));
    }
    return n;
  }
  if (e.GeographicTypeGeoKey && e.GeographicTypeGeoKey !== 32767) {
    const t = "EPSG:" + e.GeographicTypeGeoKey;
    let n = me(t);
    if (!n) {
      const r = Qi(e.GeogAngularUnitsGeoKey);
      r && (n = new nn({
        code: t,
        units: r
      }));
    }
    return n;
  }
  return null;
}
function uc(i) {
  return i.getImageCount().then(function(e) {
    const t = new Array(e);
    for (let n = 0; n < e; ++n)
      t[n] = i.getImage(n);
    return Promise.all(t);
  });
}
function fc(i, e) {
  let t;
  return i.blob ? t = nc(i.blob) : i.overviews ? t = ic(i.url, i.overviews, e) : t = tc(i.url, e), t.then(uc);
}
function wt(i, e, t, n, r) {
  if (Array.isArray(i)) {
    const s = i.length;
    if (!Array.isArray(e) || s != e.length) {
      const o = new Error(n);
      throw r(o), o;
    }
    for (let o = 0; o < s; ++o)
      wt(i[o], e[o], t, n, r);
    return;
  }
  if (e = /** @type {number} */
  e, Math.abs(i - e) > t * i)
    throw new Error(n);
}
function gc(i) {
  return i instanceof Int8Array ? -128 : i instanceof Int16Array ? -32768 : i instanceof Int32Array ? -2147483648 : i instanceof Float32Array ? 12e-39 : 0;
}
function dc(i) {
  return i instanceof Int8Array ? 127 : i instanceof Uint8Array || i instanceof Uint8ClampedArray ? 255 : i instanceof Int16Array ? 32767 : i instanceof Uint16Array ? 65535 : i instanceof Int32Array ? 2147483647 : i instanceof Uint32Array ? 4294967295 : i instanceof Float32Array ? 34e37 : 255;
}
class mc extends ba {
  /**
   * @param {Options} options Data tile options.
   */
  constructor(e) {
    super({
      state: "loading",
      tileGrid: null,
      projection: e.projection || null,
      transition: e.transition,
      interpolate: e.interpolate !== !1,
      wrapX: e.wrapX
    }), this.sourceInfo_ = e.sources;
    const t = this.sourceInfo_.length;
    this.sourceOptions_ = e.sourceOptions, this.sourceImagery_ = new Array(t), this.sourceMasks_ = new Array(t), this.resolutionFactors_ = new Array(t), this.samplesPerPixel_, this.nodataValues_, this.metadata_, this.normalize_ = e.normalize !== !1, this.addAlpha_ = !1, this.error_ = null, this.convertToRGB_ = e.convertToRGB || !1, this.setKey(this.sourceInfo_.map((s) => s.url).join(","));
    const n = this, r = new Array(t);
    for (let s = 0; s < t; ++s)
      r[s] = fc(
        this.sourceInfo_[s],
        this.sourceOptions_
      );
    Promise.all(r).then(function(s) {
      n.configure_(s);
    }).catch(function(s) {
      rr(s), n.error_ = s, n.setState("error");
    });
  }
  /**
   * @return {Error} A source loading error. When the source state is `error`, use this function
   * to get more information about the error. To debug a faulty configuration, you may want to use
   * a listener like
   * ```js
   * geotiffSource.on('change', () => {
   *   if (geotiffSource.getState() === 'error') {
   *     console.error(geotiffSource.getError());
   *   }
   * });
   * ```
   */
  getError() {
    return this.error_;
  }
  /**
   * Determine the projection of the images in this GeoTIFF.
   * The default implementation looks at the ProjectedCSTypeGeoKey and the GeographicTypeGeoKey
   * of each image in turn.
   * You can override this method in a subclass to support more projections.
   *
   * @param {Array<Array<GeoTIFFImage>>} sources Each source is a list of images
   * from a single GeoTIFF.
   */
  determineProjection(e) {
    const t = e[0];
    for (let n = t.length - 1; n >= 0; --n) {
      const r = t[n], s = hc(r);
      if (s) {
        this.projection = s;
        break;
      }
    }
  }
  /**
   * Configure the tile grid based on images within the source GeoTIFFs.  Each GeoTIFF
   * must have the same internal tiled structure.
   * @param {Array<Array<GeoTIFFImage>>} sources Each source is a list of images
   * from a single GeoTIFF.
   * @private
   */
  configure_(e) {
    let t, n, r, s, o;
    const a = new Array(e.length), l = new Array(e.length), c = new Array(e.length);
    let h = 0;
    const u = e.length;
    for (let d = 0; d < u; ++d) {
      const p = [], y = [];
      e[d].forEach((E) => {
        rc(E) ? y.push(E) : p.push(E);
      });
      const _ = p.length;
      if (y.length > 0 && y.length !== _)
        throw new Error(
          `Expected one mask per image found ${y.length} masks and ${_} images`
        );
      let R, T;
      const x = new Array(_), I = new Array(_), w = new Array(_);
      l[d] = new Array(_), c[d] = new Array(_);
      for (let E = 0; E < _; ++E) {
        const S = p[E], v = S.getGDALNoData();
        c[d][E] = S.getGDALMetadata(0), l[d][E] = v;
        const A = this.sourceInfo_[d].bands;
        a[d] = A ? A.length : S.getSamplesPerPixel();
        const P = _ - (E + 1);
        R || (R = ac(S)), T || (T = lc(S));
        const G = cc(S, p[0]);
        w[P] = G[0];
        const O = [S.getTileWidth(), S.getTileHeight()];
        O[0] !== O[1] && O[1] < Ln && (O[0] = Ln, O[1] = Ln), x[P] = O;
        const z = G[0] / Math.abs(G[1]);
        I[P] = [
          O[0],
          O[1] / z
        ];
      }
      if (t ? ge(t, R, t) : t = R, !n)
        n = T;
      else {
        const E = `Origin mismatch for source ${d}, got [${T}] but expected [${n}]`;
        wt(n, T, 0, E, this.viewRejector);
      }
      if (!o)
        o = w, this.resolutionFactors_[d] = 1;
      else {
        o.length - h > w.length && (h = o.length - w.length);
        const E = o[o.length - 1] / w[w.length - 1];
        this.resolutionFactors_[d] = E;
        const S = w.map(
          (A) => A *= E
        ), v = `Resolution mismatch for source ${d}, got [${S}] but expected [${o}]`;
        wt(
          o.slice(h, o.length),
          S,
          0.02,
          v,
          this.viewRejector
        );
      }
      r ? wt(
        r.slice(h, r.length),
        I,
        0.01,
        `Tile size mismatch for source ${d}`,
        this.viewRejector
      ) : r = I, s ? wt(
        s.slice(h, s.length),
        x,
        0,
        `Tile size mismatch for source ${d}`,
        this.viewRejector
      ) : s = x, this.sourceImagery_[d] = p.reverse(), this.sourceMasks_[d] = y.reverse();
    }
    for (let d = 0, p = this.sourceImagery_.length; d < p; ++d) {
      const y = this.sourceImagery_[d];
      for (; y.length < o.length; )
        y.unshift(void 0);
    }
    this.getProjection() || this.determineProjection(e), this.samplesPerPixel_ = a, this.nodataValues_ = l, this.metadata_ = c;
    e:
      for (let d = 0; d < u; ++d) {
        if (this.sourceInfo_[d].nodata !== void 0) {
          this.addAlpha_ = !0;
          break;
        }
        if (this.sourceMasks_[d].length) {
          this.addAlpha_ = !0;
          break;
        }
        const p = l[d], y = this.sourceInfo_[d].bands;
        if (y) {
          for (let _ = 0; _ < y.length; ++_)
            if (p[y[_] - 1] !== null) {
              this.addAlpha_ = !0;
              break e;
            }
          continue;
        }
        for (let _ = 0; _ < p.length; ++_)
          if (p[_] !== null) {
            this.addAlpha_ = !0;
            break e;
          }
      }
    let f = this.addAlpha_ ? 1 : 0;
    for (let d = 0; d < u; ++d)
      f += a[d];
    this.bandCount = f;
    const g = new Rn({
      extent: t,
      minZoom: h,
      origin: n,
      resolutions: o,
      tileSizes: r
    });
    this.tileGrid = g, this.setTileSizes(s), this.setLoader(this.loadTile_.bind(this)), this.setState("ready");
    const m = 1;
    o.length === 2 ? o = [o[0], o[1], o[1] / 2] : o.length === 1 && (o = [o[0] * 2, o[0], o[0] / 2]), this.viewResolver({
      showFullExtent: !0,
      projection: this.projection,
      resolutions: o,
      center: on(Me(t), this.projection),
      extent: fi(t, this.projection),
      zoom: m
    });
  }
  /**
   * @param {number} z The z tile index.
   * @param {number} x The x tile index.
   * @param {number} y The y tile index.
   * @param {import('./DataTile.js').LoaderOptions} options The loader options.
   * @return {Promise} The composed tile data.
   * @private
   */
  loadTile_(e, t, n, r) {
    const s = this.getTileSize(e), o = this.sourceImagery_.length, a = new Array(o * 2), l = this.nodataValues_, c = this.sourceInfo_, h = oc();
    for (let u = 0; u < o; ++u) {
      const f = c[u], g = this.resolutionFactors_[u], m = [
        Math.round(t * (s[0] * g)),
        Math.round(n * (s[1] * g)),
        Math.round((t + 1) * (s[0] * g)),
        Math.round((n + 1) * (s[1] * g))
      ], d = this.sourceImagery_[u][e];
      let p;
      f.bands && (p = f.bands.map(function(x) {
        return x - 1;
      }));
      let y;
      "nodata" in f && f.nodata !== null ? y = f.nodata : p ? y = p.map(function(x) {
        return l[u][x];
      }) : y = l[u];
      const _ = {
        window: m,
        width: s[0],
        height: s[1],
        samples: p,
        fillValue: y,
        pool: h,
        interleave: !1,
        signal: r.signal
      };
      sc(this.convertToRGB_, d) ? a[u] = d.readRGB(_) : a[u] = d.readRasters(_);
      const R = o + u, T = this.sourceMasks_[u][e];
      if (!T) {
        a[R] = Promise.resolve(null);
        continue;
      }
      a[R] = T.readRasters({
        window: m,
        width: s[0],
        height: s[1],
        samples: [0],
        pool: h,
        interleave: !1
      });
    }
    return Promise.all(a).then(this.composeTile_.bind(this, s)).catch(function(u) {
      throw rr(u), u;
    });
  }
  /**
   * @param {import("../size.js").Size} sourceTileSize The source tile size.
   * @param {Array} sourceSamples The source samples.
   * @return {import("../DataTile.js").Data} The composed tile data.
   * @private
   */
  composeTile_(e, t) {
    const n = this.metadata_, r = this.sourceInfo_, s = this.sourceImagery_.length, o = this.bandCount, a = this.samplesPerPixel_, l = this.nodataValues_, c = this.normalize_, h = this.addAlpha_, u = e[0] * e[1], f = u * o;
    let g;
    c ? g = new Uint8Array(f) : g = new Float32Array(f);
    let m = 0;
    for (let d = 0; d < u; ++d) {
      let p = h;
      for (let y = 0; y < s; ++y) {
        const _ = r[y];
        let R = _.min, T = _.max, x, I;
        if (c) {
          const w = n[y][0];
          R === void 0 && (w && _r in w ? R = parseFloat(w[_r]) : R = gc(t[y][0])), T === void 0 && (w && mr in w ? T = parseFloat(w[mr]) : T = dc(t[y][0])), x = 255 / (T - R), I = -R * x;
        }
        for (let w = 0; w < a[y]; ++w) {
          const E = t[y][w][d];
          let S;
          if (c ? S = H(x * E + I, 0, 255) : S = E, !h)
            g[m] = S;
          else {
            let v = _.nodata;
            if (v === void 0) {
              let P;
              _.bands ? P = _.bands[w] - 1 : P = w, v = l[y][P];
            }
            const A = isNaN(v);
            (!A && E !== v || A && !isNaN(E)) && (p = !1, g[m] = S);
          }
          m++;
        }
        if (!p) {
          const w = s + y, E = t[w];
          E && !E[0][d] && (p = !0);
        }
      }
      h && (p || (g[m] = 255), m++);
    }
    return g;
  }
}
const X = {
  OPACITY: "opacity",
  VISIBLE: "visible",
  EXTENT: "extent",
  Z_INDEX: "zIndex",
  MAX_RESOLUTION: "maxResolution",
  MIN_RESOLUTION: "minResolution",
  MAX_ZOOM: "maxZoom",
  MIN_ZOOM: "minZoom",
  SOURCE: "source",
  MAP: "map"
};
class _c extends xn {
  /**
   * @param {Options} options Layer options.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, this.background_ = e.background;
    const t = Object.assign({}, e);
    typeof e.properties == "object" && (delete t.properties, Object.assign(t, e.properties)), t[X.OPACITY] = e.opacity !== void 0 ? e.opacity : 1, Z(
      typeof t[X.OPACITY] == "number",
      "Layer opacity must be a number"
    ), t[X.VISIBLE] = e.visible !== void 0 ? e.visible : !0, t[X.Z_INDEX] = e.zIndex, t[X.MAX_RESOLUTION] = e.maxResolution !== void 0 ? e.maxResolution : 1 / 0, t[X.MIN_RESOLUTION] = e.minResolution !== void 0 ? e.minResolution : 0, t[X.MIN_ZOOM] = e.minZoom !== void 0 ? e.minZoom : -1 / 0, t[X.MAX_ZOOM] = e.maxZoom !== void 0 ? e.maxZoom : 1 / 0, this.className_ = t.className !== void 0 ? t.className : "ol-layer", delete t.className, this.setProperties(t), this.state_ = null;
  }
  /**
   * Get the background for this layer.
   * @return {BackgroundColor|false} Layer background.
   */
  getBackground() {
    return this.background_;
  }
  /**
   * @return {string} CSS class name.
   */
  getClassName() {
    return this.className_;
  }
  /**
   * This method is not meant to be called by layers or layer renderers because the state
   * is incorrect if the layer is included in a layer group.
   *
   * @param {boolean} [managed] Layer is managed.
   * @return {import("./Layer.js").State} Layer state.
   */
  getLayerState(e) {
    const t = this.state_ || /** @type {?} */
    {
      layer: this,
      managed: e === void 0 ? !0 : e
    }, n = this.getZIndex();
    return t.opacity = H(Math.round(this.getOpacity() * 100) / 100, 0, 1), t.visible = this.getVisible(), t.extent = this.getExtent(), t.zIndex = n === void 0 && !t.managed ? 1 / 0 : n, t.maxResolution = this.getMaxResolution(), t.minResolution = Math.max(this.getMinResolution(), 0), t.minZoom = this.getMinZoom(), t.maxZoom = this.getMaxZoom(), this.state_ = t, t;
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
   *     modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(e) {
    return V();
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
   *     states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(e) {
    return V();
  }
  /**
   * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
   * will be visible regardless of extent.
   * @return {import("../extent.js").Extent|undefined} The layer extent.
   * @observable
   * @api
   */
  getExtent() {
    return (
      /** @type {import("../extent.js").Extent|undefined} */
      this.get(X.EXTENT)
    );
  }
  /**
   * Return the maximum resolution of the layer. Returns Infinity if
   * the layer has no maximum resolution set.
   * @return {number} The maximum resolution of the layer.
   * @observable
   * @api
   */
  getMaxResolution() {
    return (
      /** @type {number} */
      this.get(X.MAX_RESOLUTION)
    );
  }
  /**
   * Return the minimum resolution of the layer. Returns 0 if
   * the layer has no minimum resolution set.
   * @return {number} The minimum resolution of the layer.
   * @observable
   * @api
   */
  getMinResolution() {
    return (
      /** @type {number} */
      this.get(X.MIN_RESOLUTION)
    );
  }
  /**
   * Return the minimum zoom level of the layer. Returns -Infinity if
   * the layer has no minimum zoom set.
   * @return {number} The minimum zoom level of the layer.
   * @observable
   * @api
   */
  getMinZoom() {
    return (
      /** @type {number} */
      this.get(X.MIN_ZOOM)
    );
  }
  /**
   * Return the maximum zoom level of the layer. Returns Infinity if
   * the layer has no maximum zoom set.
   * @return {number} The maximum zoom level of the layer.
   * @observable
   * @api
   */
  getMaxZoom() {
    return (
      /** @type {number} */
      this.get(X.MAX_ZOOM)
    );
  }
  /**
   * Return the opacity of the layer (between 0 and 1).
   * @return {number} The opacity of the layer.
   * @observable
   * @api
   */
  getOpacity() {
    return (
      /** @type {number} */
      this.get(X.OPACITY)
    );
  }
  /**
   * @abstract
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    return V();
  }
  /**
   * Return the value of this layer's `visible` property. To find out whether the layer
   * is visible on a map, use `isVisible()` instead.
   * @return {boolean} The value of the `visible` property of the layer.
   * @observable
   * @api
   */
  getVisible() {
    return (
      /** @type {boolean} */
      this.get(X.VISIBLE)
    );
  }
  /**
   * Return the Z-index of the layer, which is used to order layers before
   * rendering. Returns undefined if the layer is unmanaged.
   * @return {number|undefined} The Z-index of the layer.
   * @observable
   * @api
   */
  getZIndex() {
    return (
      /** @type {number|undefined} */
      this.get(X.Z_INDEX)
    );
  }
  /**
   * Sets the background color.
   * @param {BackgroundColor} [background] Background color.
   */
  setBackground(e) {
    this.background_ = e, this.changed();
  }
  /**
   * Set the extent at which the layer is visible.  If `undefined`, the layer
   * will be visible at all extents.
   * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
   * @observable
   * @api
   */
  setExtent(e) {
    this.set(X.EXTENT, e);
  }
  /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */
  setMaxResolution(e) {
    this.set(X.MAX_RESOLUTION, e);
  }
  /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */
  setMinResolution(e) {
    this.set(X.MIN_RESOLUTION, e);
  }
  /**
   * Set the maximum zoom (exclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} maxZoom The maximum zoom of the layer.
   * @observable
   * @api
   */
  setMaxZoom(e) {
    this.set(X.MAX_ZOOM, e);
  }
  /**
   * Set the minimum zoom (inclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} minZoom The minimum zoom of the layer.
   * @observable
   * @api
   */
  setMinZoom(e) {
    this.set(X.MIN_ZOOM, e);
  }
  /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */
  setOpacity(e) {
    Z(typeof e == "number", "Layer opacity must be a number"), this.set(X.OPACITY, e);
  }
  /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */
  setVisible(e) {
    this.set(X.VISIBLE, e);
  }
  /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */
  setZIndex(e) {
    this.set(X.Z_INDEX, e);
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal();
  }
}
const Ee = {
  /**
   * Triggered before a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#prerender
   * @api
   */
  PRERENDER: "prerender",
  /**
   * Triggered after a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#postrender
   * @api
   */
  POSTRENDER: "postrender",
  /**
   * Triggered before layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#precompose
   * @api
   */
  PRECOMPOSE: "precompose",
  /**
   * Triggered after layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#postcompose
   * @api
   */
  POSTCOMPOSE: "postcompose",
  /**
   * Triggered when rendering is complete, i.e. all sources and tiles have
   * finished loading for the current viewport, and all tiles are faded in.
   * The event object will not have a `context` set.
   * @event module:ol/render/Event~RenderEvent#rendercomplete
   * @api
   */
  RENDERCOMPLETE: "rendercomplete"
}, be = {
  ANIMATING: 0,
  INTERACTING: 1
}, ye = {
  CENTER: "center",
  RESOLUTION: "resolution",
  ROTATION: "rotation"
};
function pr(i, e, t) {
  return (
    /**
     * @param {import("./coordinate.js").Coordinate|undefined} center Center.
     * @param {number|undefined} resolution Resolution.
     * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @param {Array<number>} [centerShift] Shift between map center and viewport center.
     * @return {import("./coordinate.js").Coordinate|undefined} Center.
     */
    function(n, r, s, o, a) {
      if (!n)
        return;
      if (!r && !e)
        return n;
      const l = e ? 0 : s[0] * r, c = e ? 0 : s[1] * r, h = a ? a[0] : 0, u = a ? a[1] : 0;
      let f = i[0] + l / 2 + h, g = i[2] - l / 2 + h, m = i[1] + c / 2 + u, d = i[3] - c / 2 + u;
      f > g && (f = (g + f) / 2, g = f), m > d && (m = (d + m) / 2, d = m);
      let p = H(n[0], f, g), y = H(n[1], m, d);
      if (o && t && r) {
        const _ = 30 * r;
        p += -_ * Math.log(1 + Math.max(0, f - n[0]) / _) + _ * Math.log(1 + Math.max(0, n[0] - g) / _), y += -_ * Math.log(1 + Math.max(0, m - n[1]) / _) + _ * Math.log(1 + Math.max(0, n[1] - d) / _);
      }
      return [p, y];
    }
  );
}
function pc(i) {
  return i;
}
function Fi(i, e, t, n) {
  const r = j(e) / t[0], s = J(e) / t[1];
  return n ? Math.min(i, Math.max(r, s)) : Math.min(i, Math.min(r, s));
}
function Ni(i, e, t) {
  let n = Math.min(i, e);
  const r = 50;
  return n *= Math.log(1 + r * Math.max(0, i / e - 1)) / r + 1, t && (n = Math.max(n, t), n /= Math.log(1 + r * Math.max(0, t / i - 1)) / r + 1), H(n, t / 2, e * 2);
}
function yc(i, e, t, n) {
  return e = e !== void 0 ? e : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(r, s, o, a) {
    if (r !== void 0) {
      const l = i[0], c = i[i.length - 1], h = t ? Fi(
        l,
        t,
        o,
        n
      ) : l;
      if (a)
        return e ? Ni(
          r,
          h,
          c
        ) : H(r, c, h);
      const u = Math.min(h, r), f = Math.floor(mn(i, u, s));
      return i[f] > h && f < i.length - 1 ? i[f + 1] : i[f];
    }
  };
}
function Ec(i, e, t, n, r, s) {
  return n = n !== void 0 ? n : !0, t = t !== void 0 ? t : 0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(o, a, l, c) {
    if (o !== void 0) {
      const h = r ? Fi(
        e,
        r,
        l,
        s
      ) : e;
      if (c)
        return n ? Ni(
          o,
          h,
          t
        ) : H(o, t, h);
      const u = 1e-9, f = Math.ceil(
        Math.log(e / h) / Math.log(i) - u
      ), g = -a * (0.5 - u) + 0.5, m = Math.min(h, o), d = Math.floor(
        Math.log(e / m) / Math.log(i) + g
      ), p = Math.max(f, d), y = e / Math.pow(i, p);
      return H(y, t, h);
    }
  };
}
function yr(i, e, t, n, r) {
  return t = t !== void 0 ? t : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(s, o, a, l) {
    if (s !== void 0) {
      const c = n ? Fi(
        i,
        n,
        a,
        r
      ) : i;
      return !t || !l ? H(s, e, c) : Ni(
        s,
        c,
        e
      );
    }
  };
}
function Tc(i) {
  if (i !== void 0)
    return 0;
}
function Er(i) {
  if (i !== void 0)
    return i;
}
function xc(i) {
  const e = 2 * Math.PI / i;
  return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function(t, n) {
      if (n)
        return t;
      if (t !== void 0)
        return t = Math.floor(t / e + 0.5) * e, t;
    }
  );
}
function Rc(i) {
  const e = i === void 0 ? Jt(5) : i;
  return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function(t, n) {
      return n || t === void 0 ? t : Math.abs(t) <= e ? 0 : t;
    }
  );
}
const Gi = new Array(6);
function Be() {
  return [1, 0, 0, 1, 0, 0];
}
function wc(i) {
  return In(i, 1, 0, 0, 1, 0, 0);
}
function Ui(i, e) {
  const t = i[0], n = i[1], r = i[2], s = i[3], o = i[4], a = i[5], l = e[0], c = e[1], h = e[2], u = e[3], f = e[4], g = e[5];
  return i[0] = t * l + r * c, i[1] = n * l + s * c, i[2] = t * h + r * u, i[3] = n * h + s * u, i[4] = t * f + r * g + o, i[5] = n * f + s * g + a, i;
}
function In(i, e, t, n, r, s, o) {
  return i[0] = e, i[1] = t, i[2] = n, i[3] = r, i[4] = s, i[5] = o, i;
}
function Ae(i, e) {
  const t = e[0], n = e[1];
  return e[0] = i[0] * t + i[2] * n + i[4], e[1] = i[1] * t + i[3] * n + i[5], e;
}
function Ic(i, e) {
  const t = Math.cos(e), n = Math.sin(e);
  return Ui(i, In(Gi, t, n, -n, t, 0, 0));
}
function Tr(i, e, t) {
  return Ui(i, In(Gi, e, 0, 0, t, 0, 0));
}
function Cc(i, e, t) {
  return Ui(i, In(Gi, 1, 0, 0, 1, e, t));
}
function mt(i, e, t, n, r, s, o, a) {
  const l = Math.sin(s), c = Math.cos(s);
  return i[0] = n * c, i[1] = r * l, i[2] = -n * l, i[3] = r * c, i[4] = o * n * c - a * n * l + e, i[5] = o * r * l + a * r * c + t, i;
}
function Sc(i, e) {
  const t = bc(e);
  Z(t !== 0, "Transformation matrix cannot be inverted");
  const n = e[0], r = e[1], s = e[2], o = e[3], a = e[4], l = e[5];
  return i[0] = o / t, i[1] = -r / t, i[2] = -s / t, i[3] = n / t, i[4] = (s * l - o * a) / t, i[5] = -(n * l - r * a) / t, i;
}
function bc(i) {
  return i[0] * i[3] - i[1] * i[2];
}
const xr = [1e6, 1e6, 1e6, 1e6, 2, 2];
function Ac(i) {
  return "matrix(" + i.map(
    (t, n) => Math.round(t * xr[n]) / xr[n]
  ).join(", ") + ")";
}
function vc(i, e, t, n, r, s, o) {
  s = s || [], o = o || 2;
  let a = 0;
  for (let l = e; l < t; l += n) {
    const c = i[l], h = i[l + 1];
    s[a++] = r[0] * c + r[2] * h + r[4], s[a++] = r[1] * c + r[3] * h + r[5];
    for (let u = 2; u < o; u++)
      s[a++] = i[l + u];
  }
  return s && s.length != a && (s.length = a), s;
}
function Mc(i, e, t, n, r, s, o) {
  o = o || [];
  const a = Math.cos(r), l = Math.sin(r), c = s[0], h = s[1];
  let u = 0;
  for (let f = e; f < t; f += n) {
    const g = i[f] - c, m = i[f + 1] - h;
    o[u++] = c + g * a - m * l, o[u++] = h + g * l + m * a;
    for (let d = f + 2; d < f + n; ++d)
      o[u++] = i[d];
  }
  return o && o.length != u && (o.length = u), o;
}
function Pc(i, e, t, n, r, s, o, a) {
  a = a || [];
  const l = o[0], c = o[1];
  let h = 0;
  for (let u = e; u < t; u += n) {
    const f = i[u] - l, g = i[u + 1] - c;
    a[h++] = l + r * f, a[h++] = c + s * g;
    for (let m = u + 2; m < u + n; ++m)
      a[h++] = i[m];
  }
  return a && a.length != h && (a.length = h), a;
}
function Dc(i, e, t, n, r, s, o) {
  o = o || [];
  let a = 0;
  for (let l = e; l < t; l += n) {
    o[a++] = i[l] + r, o[a++] = i[l + 1] + s;
    for (let c = l + 2; c < l + n; ++c)
      o[a++] = i[c];
  }
  return o && o.length != a && (o.length = a), o;
}
const Rr = Be();
class Oc extends xn {
  constructor() {
    super(), this.extent_ = _t(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = mo(
      (e, t, n) => {
        if (!n)
          return this.getSimplifiedGeometry(t);
        const r = this.clone();
        return r.applyTransform(n), r.getSimplifiedGeometry(t);
      }
    );
  }
  /**
   * Get a transformed and simplified version of the geometry.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {Geometry} Simplified geometry.
   */
  simplifyTransformed(e, t) {
    return this.simplifyTransformedInternal(
      this.getRevision(),
      e,
      t
    );
  }
  /**
   * Make a complete copy of the geometry.
   * @abstract
   * @return {!Geometry} Clone.
   */
  clone() {
    return V();
  }
  /**
   * @abstract
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(e, t, n, r) {
    return V();
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(e, t) {
    const n = this.getClosestPoint([e, t]);
    return n[0] === e && n[1] === t;
  }
  /**
   * Return the closest point of the geometry to the passed point as
   * {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} point Point.
   * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
   * @return {import("../coordinate.js").Coordinate} Closest point.
   * @api
   */
  getClosestPoint(e, t) {
    return t = t || [NaN, NaN], this.closestPointXY(e[0], e[1], t, 1 / 0), t;
  }
  /**
   * Returns true if this geometry includes the specified coordinate. If the
   * coordinate is on the boundary of the geometry, returns false.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {boolean} Contains coordinate.
   * @api
   */
  intersectsCoordinate(e) {
    return this.containsXY(e[0], e[1]);
  }
  /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(e) {
    return V();
  }
  /**
   * Get the extent of the geometry.
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} extent Extent.
   * @api
   */
  getExtent(e) {
    if (this.extentRevision_ != this.getRevision()) {
      const t = this.computeExtent(this.extent_);
      (isNaN(t[0]) || isNaN(t[1])) && pn(t), this.extentRevision_ = this.getRevision();
    }
    return Fo(this.extent_, e);
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(e, t) {
    V();
  }
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */
  scale(e, t, n) {
    V();
  }
  /**
   * Create a simplified version of this geometry.  For linestrings, this uses
   * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
   * algorithm.  For polygons, a quantization-based
   * simplification is used to preserve topology.
   * @param {number} tolerance The tolerance distance for simplification.
   * @return {Geometry} A new, simplified version of the original geometry.
   * @api
   */
  simplify(e) {
    return this.getSimplifiedGeometry(e * e);
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker
   * algorithm.
   * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Geometry} Simplified geometry.
   */
  getSimplifiedGeometry(e) {
    return V();
  }
  /**
   * Get the type of this geometry.
   * @abstract
   * @return {Type} Geometry type.
   */
  getType() {
    return V();
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @abstract
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   */
  applyTransform(e) {
    V();
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */
  intersectsExtent(e) {
    return V();
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @abstract
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(e, t) {
    V();
  }
  /**
   * Transform each coordinate of the geometry from one coordinate reference
   * system to another. The geometry is modified in place.
   * For example, a line will be transformed to a line and a circle to a circle.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   *
   * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @return {this} This geometry.  Note that original geometry is
   *     modified in place.
   * @api
   */
  transform(e, t) {
    const n = me(e), r = n.getUnits() == "tile-pixels" ? function(s, o, a) {
      const l = n.getExtent(), c = n.getWorldExtent(), h = J(c) / J(l);
      return mt(
        Rr,
        c[0],
        c[3],
        h,
        -h,
        0,
        0,
        0
      ), vc(
        s,
        0,
        s.length,
        a,
        Rr,
        o
      ), Lt(n, t)(
        s,
        o,
        a
      );
    } : Lt(n, t);
    return this.applyTransform(r), this;
  }
}
class Xi extends Oc {
  constructor() {
    super(), this.layout = "XY", this.stride = 2, this.flatCoordinates;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   * @override
   */
  computeExtent(e) {
    return vo(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e
    );
  }
  /**
   * @abstract
   * @return {Array<*> | null} Coordinates.
   */
  getCoordinates() {
    return V();
  }
  /**
   * Return the first coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} First coordinate.
   * @api
   */
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  /**
   * @return {Array<number>} Flat coordinates.
   */
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  /**
   * Return the last coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} Last point.
   * @api
   */
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride
    );
  }
  /**
   * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
   * @return {import("./Geometry.js").GeometryLayout} Layout.
   * @api
   */
  getLayout() {
    return this.layout;
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @override
   */
  getSimplifiedGeometry(e) {
    if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), e < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && e <= this.simplifiedGeometryMaxMinSquaredTolerance)
      return this;
    const t = this.getSimplifiedGeometryInternal(e);
    return t.getFlatCoordinates().length < this.flatCoordinates.length ? t : (this.simplifiedGeometryMaxMinSquaredTolerance = e, this);
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @protected
   */
  getSimplifiedGeometryInternal(e) {
    return this;
  }
  /**
   * @return {number} Stride.
   */
  getStride() {
    return this.stride;
  }
  /**
   * @param {import("./Geometry.js").GeometryLayout} layout Layout.
   * @param {Array<number>} flatCoordinates Flat coordinates.
   */
  setFlatCoordinates(e, t) {
    this.stride = wr(e), this.layout = e, this.flatCoordinates = t;
  }
  /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  setCoordinates(e, t) {
    V();
  }
  /**
   * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
   * @param {Array<*>} coordinates Coordinates.
   * @param {number} nesting Nesting.
   * @protected
   */
  setLayout(e, t, n) {
    let r;
    if (e)
      r = wr(e);
    else {
      for (let s = 0; s < n; ++s) {
        if (t.length === 0) {
          this.layout = "XY", this.stride = 2;
          return;
        }
        t = /** @type {Array<unknown>} */
        t[0];
      }
      r = t.length, e = Lc(r);
    }
    this.layout = e, this.stride = r;
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   * @override
   */
  applyTransform(e) {
    this.flatCoordinates && (e(
      this.flatCoordinates,
      this.flatCoordinates,
      this.layout.startsWith("XYZ") ? 3 : 2,
      this.stride
    ), this.changed());
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in counter-clockwise radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   * @override
   */
  rotate(e, t) {
    const n = this.getFlatCoordinates();
    if (n) {
      const r = this.getStride();
      Mc(
        n,
        0,
        n.length,
        r,
        e,
        t,
        n
      ), this.changed();
    }
  }
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   * @override
   */
  scale(e, t, n) {
    t === void 0 && (t = e), n || (n = Me(this.getExtent()));
    const r = this.getFlatCoordinates();
    if (r) {
      const s = this.getStride();
      Pc(
        r,
        0,
        r.length,
        s,
        e,
        t,
        n,
        r
      ), this.changed();
    }
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   * @override
   */
  translate(e, t) {
    const n = this.getFlatCoordinates();
    if (n) {
      const r = this.getStride();
      Dc(
        n,
        0,
        n.length,
        r,
        e,
        t,
        n
      ), this.changed();
    }
  }
}
function Lc(i) {
  let e;
  return i == 2 ? e = "XY" : i == 3 ? e = "XYZ" : i == 4 && (e = "XYZM"), /** @type {import("./Geometry.js").GeometryLayout} */
  e;
}
function wr(i) {
  let e;
  return i == "XY" ? e = 2 : i == "XYZ" || i == "XYM" ? e = 3 : i == "XYZM" && (e = 4), /** @type {number} */
  e;
}
function Ir(i, e, t, n, r, s, o) {
  const a = i[e], l = i[e + 1], c = i[t] - a, h = i[t + 1] - l;
  let u;
  if (c === 0 && h === 0)
    u = e;
  else {
    const f = ((r - a) * c + (s - l) * h) / (c * c + h * h);
    if (f > 1)
      u = t;
    else if (f > 0) {
      for (let g = 0; g < n; ++g)
        o[g] = Jo(
          i[e + g],
          i[t + g],
          f
        );
      o.length = n;
      return;
    } else
      u = e;
  }
  for (let f = 0; f < n; ++f)
    o[f] = i[u + f];
  o.length = n;
}
function Gs(i, e, t, n, r) {
  let s = i[e], o = i[e + 1];
  for (e += n; e < t; e += n) {
    const a = i[e], l = i[e + 1], c = ft(s, o, a, l);
    c > r && (r = c), s = a, o = l;
  }
  return r;
}
function Fc(i, e, t, n, r) {
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s];
    r = Gs(i, e, a, n, r), e = a;
  }
  return r;
}
function Us(i, e, t, n, r, s, o, a, l, c, h) {
  if (e == t)
    return c;
  let u, f;
  if (r === 0) {
    if (f = ft(
      o,
      a,
      i[e],
      i[e + 1]
    ), f < c) {
      for (u = 0; u < n; ++u)
        l[u] = i[e + u];
      return l.length = n, f;
    }
    return c;
  }
  h = h || [NaN, NaN];
  let g = e + n;
  for (; g < t; )
    if (Ir(
      i,
      g - n,
      g,
      n,
      o,
      a,
      h
    ), f = ft(o, a, h[0], h[1]), f < c) {
      for (c = f, u = 0; u < n; ++u)
        l[u] = h[u];
      l.length = n, g += n;
    } else
      g += n * Math.max(
        (Math.sqrt(f) - Math.sqrt(c)) / r | 0,
        1
      );
  if (s && (Ir(
    i,
    t - n,
    e,
    n,
    o,
    a,
    h
  ), f = ft(o, a, h[0], h[1]), f < c)) {
    for (c = f, u = 0; u < n; ++u)
      l[u] = h[u];
    l.length = n;
  }
  return c;
}
function Nc(i, e, t, n, r, s, o, a, l, c, h) {
  h = h || [NaN, NaN];
  for (let u = 0, f = t.length; u < f; ++u) {
    const g = t[u];
    c = Us(
      i,
      e,
      g,
      n,
      r,
      s,
      o,
      a,
      l,
      c,
      h
    ), e = g;
  }
  return c;
}
function Gc(i, e, t, n) {
  for (let r = 0, s = t.length; r < s; ++r)
    i[e++] = t[r];
  return e;
}
function Xs(i, e, t, n) {
  for (let r = 0, s = t.length; r < s; ++r) {
    const o = t[r];
    for (let a = 0; a < n; ++a)
      i[e++] = o[a];
  }
  return e;
}
function Uc(i, e, t, n, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = Xs(
      i,
      e,
      t[o],
      n
    );
    r[s++] = l, e = l;
  }
  return r.length = s, r;
}
function Xc(i, e, t, n, r, s, o) {
  const a = (t - e) / n;
  if (a < 3) {
    for (; e < t; e += n)
      s[o++] = i[e], s[o++] = i[e + 1];
    return o;
  }
  const l = new Array(a);
  l[0] = 1, l[a - 1] = 1;
  const c = [e, t - n];
  let h = 0;
  for (; c.length > 0; ) {
    const u = c.pop(), f = c.pop();
    let g = 0;
    const m = i[f], d = i[f + 1], p = i[u], y = i[u + 1];
    for (let _ = f + n; _ < u; _ += n) {
      const R = i[_], T = i[_ + 1], x = Wo(R, T, m, d, p, y);
      x > g && (h = _, g = x);
    }
    g > r && (l[(h - e) / n] = 1, f + n < h && c.push(f, h), h + n < u && c.push(h, u));
  }
  for (let u = 0; u < a; ++u)
    l[u] && (s[o++] = i[e + u * n], s[o++] = i[e + u * n + 1]);
  return o;
}
function nt(i, e) {
  return e * Math.round(i / e);
}
function kc(i, e, t, n, r, s, o) {
  if (e == t)
    return o;
  let a = nt(i[e], r), l = nt(i[e + 1], r);
  e += n, s[o++] = a, s[o++] = l;
  let c, h;
  do
    if (c = nt(i[e], r), h = nt(i[e + 1], r), e += n, e == t)
      return s[o++] = c, s[o++] = h, o;
  while (c == a && h == l);
  for (; e < t; ) {
    const u = nt(i[e], r), f = nt(i[e + 1], r);
    if (e += n, u == c && f == h)
      continue;
    const g = c - a, m = h - l, d = u - a, p = f - l;
    if (g * p == m * d && (g < 0 && d < g || g == d || g > 0 && d > g) && (m < 0 && p < m || m == p || m > 0 && p > m)) {
      c = u, h = f;
      continue;
    }
    s[o++] = c, s[o++] = h, a = c, l = h, c = u, h = f;
  }
  return s[o++] = c, s[o++] = h, o;
}
function Bc(i, e, t, n, r, s, o, a) {
  for (let l = 0, c = t.length; l < c; ++l) {
    const h = t[l];
    o = kc(
      i,
      e,
      h,
      n,
      r,
      s,
      o
    ), a.push(o), e = h;
  }
  return o;
}
function ks(i, e, t, n, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = e; o < t; o += n)
    r[s++] = i.slice(o, o + n);
  return r.length = s, r;
}
function zc(i, e, t, n, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, a = t.length; o < a; ++o) {
    const l = t[o];
    r[s++] = ks(
      i,
      e,
      l,
      n,
      r[s]
    ), e = l;
  }
  return r.length = s, r;
}
function Bs(i, e, t, n) {
  let r = 0;
  const s = i[t - n], o = i[t - n + 1];
  let a = 0, l = 0;
  for (; e < t; e += n) {
    const c = i[e] - s, h = i[e + 1] - o;
    r += l * c - a * h, a = c, l = h;
  }
  return r / 2;
}
function jc(i, e, t, n) {
  let r = 0;
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s];
    r += Bs(i, e, a, n), e = a;
  }
  return r;
}
class Nt extends Xi {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(e, t) {
    super(), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, t !== void 0 && !Array.isArray(e[0]) ? this.setFlatCoordinates(
      t,
      /** @type {Array<number>} */
      e
    ) : this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      e,
      t
    );
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LinearRing} Clone.
   * @api
   * @override
   */
  clone() {
    return new Nt(this.flatCoordinates.slice(), this.layout);
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   * @override
   */
  closestPointXY(e, t, n, r) {
    return r < Zr(this.getExtent(), e, t) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Gs(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Us(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !0,
      e,
      t,
      n,
      r
    ));
  }
  /**
   * Return the area of the linear ring on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return Bs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * Return the coordinates of the linear ring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   * @override
   */
  getCoordinates() {
    return ks(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LinearRing} Simplified LinearRing.
   * @protected
   * @override
   */
  getSimplifiedGeometryInternal(e) {
    const t = [];
    return t.length = Xc(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      t,
      0
    ), new Nt(t, "XY");
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   * @override
   */
  getType() {
    return "LinearRing";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   * @override
   */
  intersectsExtent(e) {
    return !1;
  }
  /**
   * Set the coordinates of the linear ring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   * @override
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Xs(
      this.flatCoordinates,
      0,
      e,
      this.stride
    ), this.changed();
  }
}
class ki extends Xi {
  /**
   * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(e, t) {
    super(), this.setCoordinates(e, t);
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Point} Clone.
   * @api
   * @override
   */
  clone() {
    const e = new ki(this.flatCoordinates.slice(), this.layout);
    return e.applyProperties(this), e;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   * @override
   */
  closestPointXY(e, t, n, r) {
    const s = this.flatCoordinates, o = ft(
      e,
      t,
      s[0],
      s[1]
    );
    if (o < r) {
      const a = this.stride;
      for (let l = 0; l < a; ++l)
        n[l] = s[l];
      return n.length = a, o;
    }
    return r;
  }
  /**
   * Return the coordinate of the point.
   * @return {import("../coordinate.js").Coordinate} Coordinates.
   * @api
   * @override
   */
  getCoordinates() {
    return this.flatCoordinates.slice();
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   * @override
   */
  computeExtent(e) {
    return Ao(this.flatCoordinates, e);
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   * @override
   */
  getType() {
    return "Point";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   * @override
   */
  intersectsExtent(e) {
    return Wr(e, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   * @override
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Gc(
      this.flatCoordinates,
      0,
      e,
      this.stride
    ), this.changed();
  }
}
function $c(i, e, t, n, r, s, o) {
  let a, l, c, h, u, f, g;
  const m = r[s + 1], d = [];
  for (let _ = 0, R = t.length; _ < R; ++_) {
    const T = t[_];
    for (h = i[T - n], f = i[T - n + 1], a = e; a < T; a += n)
      u = i[a], g = i[a + 1], (m <= f && g <= m || f <= m && m <= g) && (c = (m - f) / (g - f) * (u - h) + h, d.push(c)), h = u, f = g;
  }
  let p = NaN, y = -1 / 0;
  for (d.sort(ri), h = d[0], a = 1, l = d.length; a < l; ++a) {
    u = d[a];
    const _ = Math.abs(u - h);
    _ > y && (c = (h + u) / 2, as(i, e, t, n, c, m) && (p = c, y = _)), h = u;
  }
  return isNaN(p) && (p = r[s]), o ? (o.push(p, m, y), o) : [p, m, y];
}
function Yc(i, e, t, n) {
  for (; e < t - n; ) {
    for (let r = 0; r < n; ++r) {
      const s = i[e + r];
      i[e + r] = i[t - n + r], i[t - n + r] = s;
    }
    e += n, t -= n;
  }
}
function zs(i, e, t, n) {
  let r = 0, s = i[t - n], o = i[t - n + 1];
  for (; e < t; e += n) {
    const a = i[e], l = i[e + 1];
    r += (a - s) * (l + o), s = a, o = l;
  }
  return r === 0 ? void 0 : r > 0;
}
function Vc(i, e, t, n, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s], l = zs(
      i,
      e,
      a,
      n
    );
    if (s === 0) {
      if (r && l || !r && !l)
        return !1;
    } else if (r && !l || !r && l)
      return !1;
    e = a;
  }
  return !0;
}
function Cr(i, e, t, n, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = t.length; s < o; ++s) {
    const a = t[s], l = zs(
      i,
      e,
      a,
      n
    );
    (s === 0 ? r && l || !r && !l : r && !l || !r && l) && Yc(i, e, a, n), e = a;
  }
  return e;
}
class hn extends Xi {
  /**
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
   *     Array of linear rings that define the polygon. The first linear ring of the
   *     array defines the outer-boundary or surface of the polygon. Each subsequent
   *     linear ring defines a hole in the surface of the polygon. A linear ring is
   *     an array of vertices' coordinates where the first coordinate and the last are
   *     equivalent. (For internal use, flat coordinates in combination with
   *     `layout` and `ends` are also accepted.)
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
   */
  constructor(e, t, n) {
    super(), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, t !== void 0 && n ? (this.setFlatCoordinates(
      t,
      /** @type {Array<number>} */
      e
    ), this.ends_ = n) : this.setCoordinates(
      /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
      e,
      t
    );
  }
  /**
   * Append the passed linear ring to this polygon.
   * @param {LinearRing} linearRing Linear ring.
   * @api
   */
  appendLinearRing(e) {
    this.flatCoordinates ? fo(this.flatCoordinates, e.getFlatCoordinates()) : this.flatCoordinates = e.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   * @override
   */
  clone() {
    const e = new hn(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice()
    );
    return e.applyProperties(this), e;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   * @override
   */
  closestPointXY(e, t, n, r) {
    return r < Zr(this.getExtent(), e, t) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Fc(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Nc(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      this.maxDelta_,
      !0,
      e,
      t,
      n,
      r
    ));
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   * @override
   */
  containsXY(e, t) {
    return as(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      e,
      t
    );
  }
  /**
   * Return the area of the polygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return jc(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride
    );
  }
  /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for polygons.
   *
   * @param {boolean} [right] Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   * @override
   */
  getCoordinates(e) {
    let t;
    return e !== void 0 ? (t = this.getOrientedFlatCoordinates().slice(), Cr(t, 0, this.ends_, this.stride, e)) : t = this.flatCoordinates, zc(t, 0, this.ends_, this.stride);
  }
  /**
   * @return {Array<number>} Ends.
   */
  getEnds() {
    return this.ends_;
  }
  /**
   * @return {Array<number>} Interior point.
   */
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const e = Me(this.getExtent());
      this.flatInteriorPoint_ = $c(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        e,
        0
      ), this.flatInteriorPointRevision_ = this.getRevision();
    }
    return (
      /** @type {import("../coordinate.js").Coordinate} */
      this.flatInteriorPoint_
    );
  }
  /**
   * Return an interior point of the polygon.
   * @return {Point} Interior point as XYM coordinate, where M is the
   * length of the horizontal intersection that the point belongs to.
   * @api
   */
  getInteriorPoint() {
    return new ki(this.getFlatInteriorPoint(), "XYM");
  }
  /**
   * Return the number of rings of the polygon,  this includes the exterior
   * ring and any interior rings.
   *
   * @return {number} Number of rings.
   * @api
   */
  getLinearRingCount() {
    return this.ends_.length;
  }
  /**
   * Return the Nth linear ring of the polygon geometry. Return `null` if the
   * given index is out of range.
   * The exterior linear ring is available at index `0` and the interior rings
   * at index `1` and beyond.
   *
   * @param {number} index Index.
   * @return {LinearRing|null} Linear ring.
   * @api
   */
  getLinearRing(e) {
    return e < 0 || this.ends_.length <= e ? null : new Nt(
      this.flatCoordinates.slice(
        e === 0 ? 0 : this.ends_[e - 1],
        this.ends_[e]
      ),
      this.layout
    );
  }
  /**
   * Return the linear rings of the polygon.
   * @return {Array<LinearRing>} Linear rings.
   * @api
   */
  getLinearRings() {
    const e = this.layout, t = this.flatCoordinates, n = this.ends_, r = [];
    let s = 0;
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o], c = new Nt(
        t.slice(s, l),
        e
      );
      r.push(c), s = l;
    }
    return r;
  }
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const e = this.flatCoordinates;
      Vc(e, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = e : (this.orientedFlatCoordinates_ = e.slice(), this.orientedFlatCoordinates_.length = Cr(
        this.orientedFlatCoordinates_,
        0,
        this.ends_,
        this.stride
      )), this.orientedRevision_ = this.getRevision();
    }
    return (
      /** @type {Array<number>} */
      this.orientedFlatCoordinates_
    );
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Polygon} Simplified Polygon.
   * @protected
   * @override
   */
  getSimplifiedGeometryInternal(e) {
    const t = [], n = [];
    return t.length = Bc(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      Math.sqrt(e),
      t,
      0,
      n
    ), new hn(t, "XY", n);
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   * @override
   */
  getType() {
    return "Polygon";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   * @override
   */
  intersectsExtent(e) {
    return Ea(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      e
    );
  }
  /**
   * Set the coordinates of the polygon.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   * @override
   */
  setCoordinates(e, t) {
    this.setLayout(t, e, 2), this.flatCoordinates || (this.flatCoordinates = []);
    const n = Uc(
      this.flatCoordinates,
      0,
      e,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1], this.changed();
  }
}
function Sr(i) {
  if (He(i))
    throw new Error("Cannot create polygon from empty extent");
  const e = i[0], t = i[1], n = i[2], r = i[3], s = [
    e,
    t,
    e,
    r,
    n,
    r,
    n,
    t,
    e,
    t
  ];
  return new hn(s, "XY", [s.length]);
}
const Nn = 0;
class br extends xn {
  /**
   * @param {ViewOptions} [options] View options.
   */
  constructor(e) {
    super(), this.on, this.once, this.un, e = Object.assign({}, e), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = hi(e.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, e.projection && ia(), e.center && (e.center = Fe(e.center, this.projection_)), e.extent && (e.extent = ke(e.extent, this.projection_)), this.applyOptions_(e);
  }
  /**
   * Set up the view with the given options.
   * @param {ViewOptions} options View options.
   */
  applyOptions_(e) {
    const t = Object.assign({}, e);
    for (const a in ye)
      delete t[a];
    this.setProperties(t, !0);
    const n = Hc(e);
    this.maxResolution_ = n.maxResolution, this.minResolution_ = n.minResolution, this.zoomFactor_ = n.zoomFactor, this.resolutions_ = e.resolutions, this.padding_ = e.padding, this.minZoom_ = n.minZoom;
    const r = Kc(e), s = n.constraint, o = Zc(e);
    this.constraints_ = {
      center: r,
      resolution: s,
      rotation: o
    }, this.setRotation(e.rotation !== void 0 ? e.rotation : 0), this.setCenterInternal(
      e.center !== void 0 ? e.center : null
    ), e.resolution !== void 0 ? this.setResolution(e.resolution) : e.zoom !== void 0 && this.setZoom(e.zoom);
  }
  /**
   * Padding (in css pixels).
   * If the map viewport is partially covered with other content (overlays) along
   * its edges, this setting allows to shift the center of the viewport away from that
   * content. The order of the values in the array is top, right, bottom, left.
   * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
   * @type {Array<number>|undefined}
   * @api
   */
  get padding() {
    return this.padding_;
  }
  set padding(e) {
    let t = this.padding_;
    this.padding_ = e;
    const n = this.getCenterInternal();
    if (n) {
      const r = e || [0, 0, 0, 0];
      t = t || [0, 0, 0, 0];
      const s = this.getResolution(), o = s / 2 * (r[3] - t[3] + t[1] - r[1]), a = s / 2 * (r[0] - t[0] + t[2] - r[2]);
      this.setCenterInternal([n[0] + o, n[1] - a]);
    }
  }
  /**
   * Get an updated version of the view options used to construct the view.  The
   * current resolution (or zoom), center, and rotation are applied to any stored
   * options.  The provided options can be used to apply new min/max zoom or
   * resolution limits.
   * @param {ViewOptions} newOptions New options to be applied.
   * @return {ViewOptions} New options updated with the current view state.
   */
  getUpdatedOptions_(e) {
    const t = this.getProperties();
    return t.resolution !== void 0 ? t.resolution = this.getResolution() : t.zoom = this.getZoom(), t.center = this.getCenterInternal(), t.rotation = this.getRotation(), Object.assign({}, t, e);
  }
  /**
   * Animate the view.  The view's center, zoom (or resolution), and rotation
   * can be animated for smooth transitions between view states.  For example,
   * to animate the view to a new zoom level:
   *
   *     view.animate({zoom: view.getZoom() + 1});
   *
   * By default, the animation lasts one second and uses in-and-out easing.  You
   * can customize this behavior by including `duration` (in milliseconds) and
   * `easing` options (see {@link module:ol/easing}).
   *
   * To chain together multiple animations, call the method with multiple
   * animation objects.  For example, to first zoom and then pan:
   *
   *     view.animate({zoom: 10}, {center: [0, 0]});
   *
   * If you provide a function as the last argument to the animate method, it
   * will get called at the end of an animation series.  The callback will be
   * called with `true` if the animation series completed on its own or `false`
   * if it was cancelled.
   *
   * Animations are cancelled by user interactions (e.g. dragging the map) or by
   * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
   * (or another method that calls one of these).
   *
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
   *     options.  Multiple animations can be run in series by passing multiple
   *     options objects.  To run multiple animations in parallel, call the method
   *     multiple times.  An optional callback can be provided as a final
   *     argument.  The callback will be called with a boolean indicating whether
   *     the animation completed without being cancelled.
   * @api
   */
  animate(e) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const t = new Array(arguments.length);
    for (let n = 0; n < t.length; ++n) {
      let r = arguments[n];
      r.center && (r = Object.assign({}, r), r.center = Fe(
        r.center,
        this.getProjection()
      )), r.anchor && (r = Object.assign({}, r), r.anchor = Fe(
        r.anchor,
        this.getProjection()
      )), t[n] = r;
    }
    this.animateInternal.apply(this, t);
  }
  /**
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
   */
  animateInternal(e) {
    let t = arguments.length, n;
    t > 1 && typeof arguments[t - 1] == "function" && (n = arguments[t - 1], --t);
    let r = 0;
    for (; r < t && !this.isDef(); ++r) {
      const h = arguments[r];
      h.center && this.setCenterInternal(h.center), h.zoom !== void 0 ? this.setZoom(h.zoom) : h.resolution && this.setResolution(h.resolution), h.rotation !== void 0 && this.setRotation(h.rotation);
    }
    if (r === t) {
      n && Yt(n, !0);
      return;
    }
    let s = Date.now(), o = this.targetCenter_.slice(), a = this.targetResolution_, l = this.targetRotation_;
    const c = [];
    for (; r < t; ++r) {
      const h = (
        /** @type {AnimationOptions} */
        arguments[r]
      ), u = {
        start: s,
        complete: !1,
        anchor: h.anchor,
        duration: h.duration !== void 0 ? h.duration : 1e3,
        easing: h.easing || Eo,
        callback: n
      };
      if (h.center && (u.sourceCenter = o, u.targetCenter = h.center.slice(), o = u.targetCenter), h.zoom !== void 0 ? (u.sourceResolution = a, u.targetResolution = this.getResolutionForZoom(h.zoom), a = u.targetResolution) : h.resolution && (u.sourceResolution = a, u.targetResolution = h.resolution, a = u.targetResolution), h.rotation !== void 0) {
        u.sourceRotation = l;
        const f = bt(h.rotation - l + Math.PI, 2 * Math.PI) - Math.PI;
        u.targetRotation = l + f, l = u.targetRotation;
      }
      Wc(u) ? u.complete = !0 : s += u.duration, c.push(u);
    }
    this.animations_.push(c), this.setHint(be.ANIMATING, 1), this.updateAnimations_();
  }
  /**
   * Determine if the view is being animated.
   * @return {boolean} The view is being animated.
   * @api
   */
  getAnimating() {
    return this.hints_[be.ANIMATING] > 0;
  }
  /**
   * Determine if the user is interacting with the view, such as panning or zooming.
   * @return {boolean} The view is being interacted with.
   * @api
   */
  getInteracting() {
    return this.hints_[be.INTERACTING] > 0;
  }
  /**
   * Cancel any ongoing animations.
   * @api
   */
  cancelAnimations() {
    this.setHint(be.ANIMATING, -this.hints_[be.ANIMATING]);
    let e;
    for (let t = 0, n = this.animations_.length; t < n; ++t) {
      const r = this.animations_[t];
      if (r[0].callback && Yt(r[0].callback, !1), !e)
        for (let s = 0, o = r.length; s < o; ++s) {
          const a = r[s];
          if (!a.complete) {
            e = a.anchor;
            break;
          }
        }
    }
    this.animations_.length = 0, this.cancelAnchor_ = e, this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
  }
  /**
   * Update all animations.
   */
  updateAnimations_() {
    if (this.updateAnimationKey_ !== void 0 && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), !this.getAnimating())
      return;
    const e = Date.now();
    let t = !1;
    for (let n = this.animations_.length - 1; n >= 0; --n) {
      const r = this.animations_[n];
      let s = !0;
      for (let o = 0, a = r.length; o < a; ++o) {
        const l = r[o];
        if (l.complete)
          continue;
        const c = e - l.start;
        let h = l.duration > 0 ? c / l.duration : 1;
        h >= 1 ? (l.complete = !0, h = 1) : s = !1;
        const u = l.easing(h);
        if (l.sourceCenter) {
          const f = l.sourceCenter[0], g = l.sourceCenter[1], m = l.targetCenter[0], d = l.targetCenter[1];
          this.nextCenter_ = l.targetCenter;
          const p = f + u * (m - f), y = g + u * (d - g);
          this.targetCenter_ = [p, y];
        }
        if (l.sourceResolution && l.targetResolution) {
          const f = u === 1 ? l.targetResolution : l.sourceResolution + u * (l.targetResolution - l.sourceResolution);
          if (l.anchor) {
            const g = this.getViewportSize_(this.getRotation()), m = this.constraints_.resolution(
              f,
              0,
              g,
              !0
            );
            this.targetCenter_ = this.calculateCenterZoom(
              m,
              l.anchor
            );
          }
          this.nextResolution_ = l.targetResolution, this.targetResolution_ = f, this.applyTargetState_(!0);
        }
        if (l.sourceRotation !== void 0 && l.targetRotation !== void 0) {
          const f = u === 1 ? bt(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : l.sourceRotation + u * (l.targetRotation - l.sourceRotation);
          if (l.anchor) {
            const g = this.constraints_.rotation(
              f,
              !0
            );
            this.targetCenter_ = this.calculateCenterRotate(
              g,
              l.anchor
            );
          }
          this.nextRotation_ = l.targetRotation, this.targetRotation_ = f;
        }
        if (this.applyTargetState_(!0), t = !0, !l.complete)
          break;
      }
      if (s) {
        this.animations_[n] = null, this.setHint(be.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        const o = r[0].callback;
        o && Yt(o, !0);
      }
    }
    this.animations_ = this.animations_.filter(Boolean), t && this.updateAnimationKey_ === void 0 && (this.updateAnimationKey_ = requestAnimationFrame(
      this.updateAnimations_.bind(this)
    ));
  }
  /**
   * @param {number} rotation Target rotation.
   * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
   */
  calculateCenterRotate(e, t) {
    let n;
    const r = this.getCenterInternal();
    return r !== void 0 && (n = [r[0] - t[0], r[1] - t[1]], ea(n, e - this.getRotation()), Qo(n, t)), n;
  }
  /**
   * @param {number} resolution Target resolution.
   * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
   */
  calculateCenterZoom(e, t) {
    let n;
    const r = this.getCenterInternal(), s = this.getResolution();
    if (r !== void 0 && s !== void 0) {
      const o = t[0] - e * (t[0] - r[0]) / s, a = t[1] - e * (t[1] - r[1]) / s;
      n = [o, a];
    }
    return n;
  }
  /**
   * Returns the current viewport size.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
   */
  getViewportSize_(e) {
    const t = this.viewportSize_;
    if (e) {
      const n = t[0], r = t[1];
      return [
        Math.abs(n * Math.cos(e)) + Math.abs(r * Math.sin(e)),
        Math.abs(n * Math.sin(e)) + Math.abs(r * Math.cos(e))
      ];
    }
    return t;
  }
  /**
   * Stores the viewport size on the view. The viewport size is not read every time from the DOM
   * to avoid performance hit and layout reflow.
   * This should be done on map size change.
   * Note: the constraints are not resolved during an animation to avoid stopping it
   * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
   */
  setViewportSize(e) {
    this.viewportSize_ = Array.isArray(e) ? e.slice() : [100, 100], this.getAnimating() || this.resolveConstraints(0);
  }
  /**
   * Get the view center.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   * @observable
   * @api
   */
  getCenter() {
    const e = this.getCenterInternal();
    return e && on(e, this.getProjection());
  }
  /**
   * Get the view center without transforming to user projection.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   */
  getCenterInternal() {
    return (
      /** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(ye.CENTER)
    );
  }
  /**
   * @return {Constraints} Constraints.
   */
  getConstraints() {
    return this.constraints_;
  }
  /**
   * @return {boolean} Resolution constraint is set
   */
  getConstrainResolution() {
    return this.get("constrainResolution");
  }
  /**
   * @param {Array<number>} [hints] Destination array.
   * @return {Array<number>} Hint.
   */
  getHints(e) {
    return e !== void 0 ? (e[0] = this.hints_[0], e[1] = this.hints_[1], e) : this.hints_.slice();
  }
  /**
   * Calculate the extent for the current view state and the passed box size.
   * @param {import("./size.js").Size} [size] The pixel dimensions of the box
   * into which the calculated extent should fit. Defaults to the size of the
   * map the view is associated with.
   * If no map or multiple maps are connected to the view, provide the desired
   * box size (e.g. `map.getSize()`).
   * @return {import("./extent.js").Extent} Extent.
   * @api
   */
  calculateExtent(e) {
    const t = this.calculateExtentInternal(e);
    return fi(t, this.getProjection());
  }
  /**
   * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
   * the map's last known viewport size will be used.
   * @return {import("./extent.js").Extent} Extent.
   */
  calculateExtentInternal(e) {
    e = e || this.getViewportSizeMinusPadding_();
    const t = (
      /** @type {!import("./coordinate.js").Coordinate} */
      this.getCenterInternal()
    );
    Z(t, "The view center is not defined");
    const n = (
      /** @type {!number} */
      this.getResolution()
    );
    Z(n !== void 0, "The view resolution is not defined");
    const r = (
      /** @type {!number} */
      this.getRotation()
    );
    return Z(r !== void 0, "The view rotation is not defined"), Qr(t, n, r, e);
  }
  /**
   * Get the maximum resolution of the view.
   * @return {number} The maximum resolution of the view.
   * @api
   */
  getMaxResolution() {
    return this.maxResolution_;
  }
  /**
   * Get the minimum resolution of the view.
   * @return {number} The minimum resolution of the view.
   * @api
   */
  getMinResolution() {
    return this.minResolution_;
  }
  /**
   * Get the maximum zoom level for the view.
   * @return {number} The maximum zoom level.
   * @api
   */
  getMaxZoom() {
    return (
      /** @type {number} */
      this.getZoomForResolution(this.minResolution_)
    );
  }
  /**
   * Set a new maximum zoom level for the view.
   * @param {number} zoom The maximum zoom level.
   * @api
   */
  setMaxZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: e }));
  }
  /**
   * Get the minimum zoom level for the view.
   * @return {number} The minimum zoom level.
   * @api
   */
  getMinZoom() {
    return (
      /** @type {number} */
      this.getZoomForResolution(this.maxResolution_)
    );
  }
  /**
   * Set a new minimum zoom level for the view.
   * @param {number} zoom The minimum zoom level.
   * @api
   */
  setMinZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: e }));
  }
  /**
   * Set whether the view should allow intermediary zoom levels.
   * @param {boolean} enabled Whether the resolution is constrained.
   * @api
   */
  setConstrainResolution(e) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: e }));
  }
  /**
   * Get the view projection.
   * @return {import("./proj/Projection.js").default} The projection of the view.
   * @api
   */
  getProjection() {
    return this.projection_;
  }
  /**
   * Get the view resolution.
   * @return {number|undefined} The resolution of the view.
   * @observable
   * @api
   */
  getResolution() {
    return (
      /** @type {number|undefined} */
      this.get(ye.RESOLUTION)
    );
  }
  /**
   * Get the resolutions for the view. This returns the array of resolutions
   * passed to the constructor of the View, or undefined if none were given.
   * @return {Array<number>|undefined} The resolutions of the view.
   * @api
   */
  getResolutions() {
    return this.resolutions_;
  }
  /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   * @api
   */
  getResolutionForExtent(e, t) {
    return this.getResolutionForExtentInternal(
      ke(e, this.getProjection()),
      t
    );
  }
  /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   */
  getResolutionForExtentInternal(e, t) {
    t = t || this.getViewportSizeMinusPadding_();
    const n = j(e) / t[0], r = J(e) / t[1];
    return Math.max(n, r);
  }
  /**
   * Return a function that returns a value between 0 and 1 for a
   * resolution. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Resolution for value function.
   */
  getResolutionForValueFunction(e) {
    e = e || 2;
    const t = this.getConstrainedResolution(this.maxResolution_), n = this.minResolution_, r = Math.log(t / n) / Math.log(e);
    return (
      /**
       * @param {number} value Value.
       * @return {number} Resolution.
       */
      function(s) {
        return t / Math.pow(e, s * r);
      }
    );
  }
  /**
   * Get the view rotation.
   * @return {number} The rotation of the view in radians.
   * @observable
   * @api
   */
  getRotation() {
    return (
      /** @type {number} */
      this.get(ye.ROTATION)
    );
  }
  /**
   * Return a function that returns a resolution for a value between
   * 0 and 1. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Value for resolution function.
   */
  getValueForResolutionFunction(e) {
    const t = Math.log(e || 2), n = this.getConstrainedResolution(this.maxResolution_), r = this.minResolution_, s = Math.log(n / r) / t;
    return (
      /**
       * @param {number} resolution Resolution.
       * @return {number} Value.
       */
      function(o) {
        return Math.log(n / o) / t / s;
      }
    );
  }
  /**
   * Returns the size of the viewport minus padding.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size reduced by the padding.
   */
  getViewportSizeMinusPadding_(e) {
    let t = this.getViewportSize_(e);
    const n = this.padding_;
    return n && (t = [
      t[0] - n[1] - n[3],
      t[1] - n[0] - n[2]
    ]), t;
  }
  /**
   * @return {State} View state.
   */
  getState() {
    const e = this.getProjection(), t = this.getResolution(), n = this.getRotation();
    let r = (
      /** @type {import("./coordinate.js").Coordinate} */
      this.getCenterInternal()
    );
    const s = this.padding_;
    if (s) {
      const o = this.getViewportSizeMinusPadding_();
      r = Gn(
        r,
        this.getViewportSize_(),
        [o[0] / 2 + s[3], o[1] / 2 + s[0]],
        t,
        n
      );
    }
    return {
      center: r.slice(0),
      projection: e !== void 0 ? e : null,
      resolution: t,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: n,
      zoom: this.getZoom()
    };
  }
  /**
   * @return {ViewStateLayerStateExtent} Like `FrameState`, but just `viewState` and `extent`.
   */
  getViewStateAndExtent() {
    return {
      viewState: this.getState(),
      extent: this.calculateExtent()
    };
  }
  /**
   * Get the current zoom level. This method may return non-integer zoom levels
   * if the view does not constrain the resolution, or if an interaction or
   * animation is underway.
   * @return {number|undefined} Zoom.
   * @api
   */
  getZoom() {
    let e;
    const t = this.getResolution();
    return t !== void 0 && (e = this.getZoomForResolution(t)), e;
  }
  /**
   * Get the zoom level for a resolution.
   * @param {number} resolution The resolution.
   * @return {number|undefined} The zoom level for the provided resolution.
   * @api
   */
  getZoomForResolution(e) {
    let t = this.minZoom_ || 0, n, r;
    if (this.resolutions_) {
      const s = mn(this.resolutions_, e, 1);
      t = s, n = this.resolutions_[s], s == this.resolutions_.length - 1 ? r = 2 : r = n / this.resolutions_[s + 1];
    } else
      n = this.maxResolution_, r = this.zoomFactor_;
    return t + Math.log(n / e) / Math.log(r);
  }
  /**
   * Get the resolution for a zoom level.
   * @param {number} zoom Zoom level.
   * @return {number} The view resolution for the provided zoom level.
   * @api
   */
  getResolutionForZoom(e) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1)
        return 0;
      const t = H(
        Math.floor(e),
        0,
        this.resolutions_.length - 2
      ), n = this.resolutions_[t] / this.resolutions_[t + 1];
      return this.resolutions_[t] / Math.pow(n, H(e - t, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, e - this.minZoom_);
  }
  /**
   * Fit the given geometry or extent based on the given map size and border.
   * The size is pixel dimensions of the box to fit the extent into.
   * In most cases you will want to use the map size, that is `map.getSize()`.
   * Takes care of the map angle.
   * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
   *     extent to fit the view to.
   * @param {FitOptions} [options] Options.
   * @api
   */
  fit(e, t) {
    let n;
    if (Z(
      Array.isArray(e) || typeof /** @type {?} */
      e.getSimplifiedGeometry == "function",
      "Invalid extent or geometry provided as `geometry`"
    ), Array.isArray(e)) {
      Z(
        !He(e),
        "Cannot fit empty extent provided as `geometry`"
      );
      const r = ke(e, this.getProjection());
      n = Sr(r);
    } else if (e.getType() === "Circle") {
      const r = ke(
        e.getExtent(),
        this.getProjection()
      );
      n = Sr(r), n.rotate(this.getRotation(), Me(r));
    } else
      n = e;
    this.fitInternal(n, t);
  }
  /**
   * Calculate rotated extent
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @return {import("./extent").Extent} The rotated extent for the geometry.
   */
  rotatedExtentForGeometry(e) {
    const t = this.getRotation(), n = Math.cos(t), r = Math.sin(-t), s = e.getFlatCoordinates(), o = e.getStride();
    let a = 1 / 0, l = 1 / 0, c = -1 / 0, h = -1 / 0;
    for (let u = 0, f = s.length; u < f; u += o) {
      const g = s[u] * n - s[u + 1] * r, m = s[u] * r + s[u + 1] * n;
      a = Math.min(a, g), l = Math.min(l, m), c = Math.max(c, g), h = Math.max(h, m);
    }
    return [a, l, c, h];
  }
  /**
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @param {FitOptions} [options] Options.
   */
  fitInternal(e, t) {
    t = t || {};
    let n = t.size;
    n || (n = this.getViewportSizeMinusPadding_());
    const r = t.padding !== void 0 ? t.padding : [0, 0, 0, 0], s = t.nearest !== void 0 ? t.nearest : !1;
    let o;
    t.minResolution !== void 0 ? o = t.minResolution : t.maxZoom !== void 0 ? o = this.getResolutionForZoom(t.maxZoom) : o = 0;
    const a = this.rotatedExtentForGeometry(e);
    let l = this.getResolutionForExtentInternal(a, [
      n[0] - r[1] - r[3],
      n[1] - r[0] - r[2]
    ]);
    l = isNaN(l) ? o : Math.max(l, o), l = this.getConstrainedResolution(l, s ? 0 : 1);
    const c = this.getRotation(), h = Math.sin(c), u = Math.cos(c), f = Me(a);
    f[0] += (r[1] - r[3]) / 2 * l, f[1] += (r[0] - r[2]) / 2 * l;
    const g = f[0] * u - f[1] * h, m = f[1] * u + f[0] * h, d = this.getConstrainedCenter([g, m], l), p = t.callback ? t.callback : Yn;
    t.duration !== void 0 ? this.animateInternal(
      {
        resolution: l,
        center: d,
        duration: t.duration,
        easing: t.easing
      },
      p
    ) : (this.targetResolution_ = l, this.targetCenter_ = d, this.applyTargetState_(!1, !0), Yt(p, !0));
  }
  /**
   * Center on coordinate and view position.
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   * @api
   */
  centerOn(e, t, n) {
    this.centerOnInternal(
      Fe(e, this.getProjection()),
      t,
      n
    );
  }
  /**
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   */
  centerOnInternal(e, t, n) {
    this.setCenterInternal(
      Gn(
        e,
        t,
        n,
        this.getResolution(),
        this.getRotation()
      )
    );
  }
  /**
   * Calculates the shift between map and viewport center.
   * @param {import("./coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {import("./size.js").Size} size Size.
   * @return {Array<number>|undefined} Center shift.
   */
  calculateCenterShift(e, t, n, r) {
    let s;
    const o = this.padding_;
    if (o && e) {
      const a = this.getViewportSizeMinusPadding_(-n), l = Gn(
        e,
        r,
        [a[0] / 2 + o[3], a[1] / 2 + o[0]],
        t,
        n
      );
      s = [
        e[0] - l[0],
        e[1] - l[1]
      ];
    }
    return s;
  }
  /**
   * @return {boolean} Is defined.
   */
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   * @api
   */
  adjustCenter(e) {
    const t = on(this.targetCenter_, this.getProjection());
    this.setCenter([
      t[0] + e[0],
      t[1] + e[1]
    ]);
  }
  /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   */
  adjustCenterInternal(e) {
    const t = this.targetCenter_;
    this.setCenterInternal([
      t[0] + e[0],
      t[1] + e[1]
    ]);
  }
  /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  adjustResolution(e, t) {
    t = t && Fe(t, this.getProjection()), this.adjustResolutionInternal(e, t);
  }
  /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  adjustResolutionInternal(e, t) {
    const n = this.getAnimating() || this.getInteracting(), r = this.getViewportSize_(this.getRotation()), s = this.constraints_.resolution(
      this.targetResolution_ * e,
      0,
      r,
      n
    );
    t && (this.targetCenter_ = this.calculateCenterZoom(s, t)), this.targetResolution_ *= e, this.applyTargetState_();
  }
  /**
   * Adds a value to the view zoom level, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom level.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  adjustZoom(e, t) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -e), t);
  }
  /**
   * Adds a value to the view rotation, optionally using an anchor. Any rotation
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   * @api
   */
  adjustRotation(e, t) {
    t && (t = Fe(t, this.getProjection())), this.adjustRotationInternal(e, t);
  }
  /**
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   */
  adjustRotationInternal(e, t) {
    const n = this.getAnimating() || this.getInteracting(), r = this.constraints_.rotation(
      this.targetRotation_ + e,
      n
    );
    t && (this.targetCenter_ = this.calculateCenterRotate(r, t)), this.targetRotation_ += e, this.applyTargetState_();
  }
  /**
   * Set the center of the current view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   * @observable
   * @api
   */
  setCenter(e) {
    this.setCenterInternal(
      e && Fe(e, this.getProjection())
    );
  }
  /**
   * Set the center using the view projection (not the user projection).
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   */
  setCenterInternal(e) {
    this.targetCenter_ = e, this.applyTargetState_();
  }
  /**
   * @param {import("./ViewHint.js").default} hint Hint.
   * @param {number} delta Delta.
   * @return {number} New value.
   */
  setHint(e, t) {
    return this.hints_[e] += t, this.changed(), this.hints_[e];
  }
  /**
   * Set the resolution for this view. Any resolution constraint will apply.
   * @param {number|undefined} resolution The resolution of the view.
   * @observable
   * @api
   */
  setResolution(e) {
    this.targetResolution_ = e, this.applyTargetState_();
  }
  /**
   * Set the rotation for this view. Any rotation constraint will apply.
   * @param {number} rotation The rotation of the view in radians.
   * @observable
   * @api
   */
  setRotation(e) {
    this.targetRotation_ = e, this.applyTargetState_();
  }
  /**
   * Zoom to a specific zoom level. Any resolution constrain will apply.
   * @param {number} zoom Zoom level.
   * @api
   */
  setZoom(e) {
    this.setResolution(this.getResolutionForZoom(e));
  }
  /**
   * Recompute rotation/resolution/center based on target values.
   * Note: we have to compute rotation first, then resolution and center considering that
   * parameters can influence one another in case a view extent constraint is present.
   * @param {boolean} [doNotCancelAnims] Do not cancel animations.
   * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
   * @private
   */
  applyTargetState_(e, t) {
    const n = this.getAnimating() || this.getInteracting() || t, r = this.constraints_.rotation(
      this.targetRotation_,
      n
    ), s = this.getViewportSize_(r), o = this.constraints_.resolution(
      this.targetResolution_,
      0,
      s,
      n
    ), a = this.constraints_.center(
      this.targetCenter_,
      o,
      s,
      n,
      this.calculateCenterShift(
        this.targetCenter_,
        o,
        r,
        s
      )
    );
    this.get(ye.ROTATION) !== r && this.set(ye.ROTATION, r), this.get(ye.RESOLUTION) !== o && (this.set(ye.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)), (!a || !this.get(ye.CENTER) || !sn(this.get(ye.CENTER), a)) && this.set(ye.CENTER, a), this.getAnimating() && !e && this.cancelAnimations(), this.cancelAnchor_ = void 0;
  }
  /**
   * If any constraints need to be applied, an animation will be triggered.
   * This is typically done on interaction end.
   * Note: calling this with a duration of 0 will apply the constrained values straight away,
   * without animation.
   * @param {number} [duration] The animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  resolveConstraints(e, t, n) {
    e = e !== void 0 ? e : 200;
    const r = t || 0, s = this.constraints_.rotation(this.targetRotation_), o = this.getViewportSize_(s), a = this.constraints_.resolution(
      this.targetResolution_,
      r,
      o
    ), l = this.constraints_.center(
      this.targetCenter_,
      a,
      o,
      !1,
      this.calculateCenterShift(
        this.targetCenter_,
        a,
        s,
        o
      )
    );
    if (e === 0 && !this.cancelAnchor_) {
      this.targetResolution_ = a, this.targetRotation_ = s, this.targetCenter_ = l, this.applyTargetState_();
      return;
    }
    n = n || (e === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, (this.getResolution() !== a || this.getRotation() !== s || !this.getCenterInternal() || !sn(this.getCenterInternal(), l)) && (this.getAnimating() && this.cancelAnimations(), this.animateInternal({
      rotation: s,
      center: l,
      resolution: a,
      duration: e,
      easing: yo,
      anchor: n
    }));
  }
  /**
   * Notify the View that an interaction has started.
   * The view state will be resolved to a stable one if needed
   * (depending on its constraints).
   * @api
   */
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(be.INTERACTING, 1);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  endInteraction(e, t, n) {
    n = n && Fe(n, this.getProjection()), this.endInteractionInternal(e, t, n);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  endInteractionInternal(e, t, n) {
    this.getInteracting() && (this.setHint(be.INTERACTING, -1), this.resolveConstraints(e, t, n));
  }
  /**
   * Get a valid position for the view center according to the current constraints.
   * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
   * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
   * This is useful to guess a valid center position at a different zoom level.
   * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
   */
  getConstrainedCenter(e, t) {
    const n = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(
      e,
      t || this.getResolution(),
      n
    );
  }
  /**
   * Get a valid zoom level according to the current view constraints.
   * @param {number|undefined} targetZoom Target zoom.
   * @param {number} [direction=0] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid zoom level.
   */
  getConstrainedZoom(e, t) {
    const n = this.getResolutionForZoom(e);
    return this.getZoomForResolution(
      this.getConstrainedResolution(n, t)
    );
  }
  /**
   * Get a valid resolution according to the current view constraints.
   * @param {number|undefined} targetResolution Target resolution.
   * @param {number} [direction=0] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid resolution.
   */
  getConstrainedResolution(e, t) {
    t = t || 0;
    const n = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(e, t, n);
  }
}
function Yt(i, e) {
  setTimeout(function() {
    i(e);
  }, 0);
}
function Kc(i) {
  if (i.extent !== void 0) {
    const t = i.smoothExtentConstraint !== void 0 ? i.smoothExtentConstraint : !0;
    return pr(i.extent, i.constrainOnlyCenter, t);
  }
  const e = hi(i.projection, "EPSG:3857");
  if (i.multiWorld !== !0 && e.isGlobal()) {
    const t = e.getExtent().slice();
    return t[0] = -1 / 0, t[2] = 1 / 0, pr(t, !1, !1);
  }
  return pc;
}
function Hc(i) {
  let e, t, n, o = i.minZoom !== void 0 ? i.minZoom : Nn, a = i.maxZoom !== void 0 ? i.maxZoom : 28;
  const l = i.zoomFactor !== void 0 ? i.zoomFactor : 2, c = i.multiWorld !== void 0 ? i.multiWorld : !1, h = i.smoothResolutionConstraint !== void 0 ? i.smoothResolutionConstraint : !0, u = i.showFullExtent !== void 0 ? i.showFullExtent : !1, f = hi(i.projection, "EPSG:3857"), g = f.getExtent();
  let m = i.constrainOnlyCenter, d = i.extent;
  if (!c && !d && f.isGlobal() && (m = !1, d = g), i.resolutions !== void 0) {
    const p = i.resolutions;
    t = p[o], n = p[a] !== void 0 ? p[a] : p[p.length - 1], i.constrainResolution ? e = yc(
      p,
      h,
      !m && d,
      u
    ) : e = yr(
      t,
      n,
      h,
      !m && d,
      u
    );
  } else {
    const y = (g ? Math.max(j(g), J(g)) : (
      // use an extent that can fit the whole world if need be
      360 * Ot.degrees / f.getMetersPerUnit()
    )) / pi / Math.pow(2, Nn), _ = y / Math.pow(2, 28 - Nn);
    t = i.maxResolution, t !== void 0 ? o = 0 : t = y / Math.pow(l, o), n = i.minResolution, n === void 0 && (i.maxZoom !== void 0 ? i.maxResolution !== void 0 ? n = t / Math.pow(l, a) : n = y / Math.pow(l, a) : n = _), a = o + Math.floor(
      Math.log(t / n) / Math.log(l)
    ), n = t / Math.pow(l, a - o), i.constrainResolution ? e = Ec(
      l,
      t,
      n,
      h,
      !m && d,
      u
    ) : e = yr(
      t,
      n,
      h,
      !m && d,
      u
    );
  }
  return {
    constraint: e,
    maxResolution: t,
    minResolution: n,
    minZoom: o,
    zoomFactor: l
  };
}
function Zc(i) {
  if (i.enableRotation !== void 0 ? i.enableRotation : !0) {
    const t = i.constrainRotation;
    return t === void 0 || t === !0 ? Rc() : t === !1 ? Er : typeof t == "number" ? xc(t) : Er;
  }
  return Tc;
}
function Wc(i) {
  return !(i.sourceCenter && i.targetCenter && !sn(i.sourceCenter, i.targetCenter) || i.sourceResolution !== i.targetResolution || i.sourceRotation !== i.targetRotation);
}
function Gn(i, e, t, n, r) {
  const s = Math.cos(-r);
  let o = Math.sin(-r), a = i[0] * s - i[1] * o, l = i[1] * s + i[0] * o;
  a += (e[0] / 2 - t[0]) * n, l += (t[1] - e[1] / 2) * n, o = -o;
  const c = a * s - l * o, h = l * s + a * o;
  return [c, h];
}
class js extends _c {
  /**
   * @param {Options<SourceType>} options Layer options.
   */
  constructor(e) {
    const t = Object.assign({}, e);
    delete t.source, super(t), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, e.render && (this.render = e.render), e.map && this.setMap(e.map), this.addChangeListener(
      X.SOURCE,
      this.handleSourcePropertyChange_
    );
    const n = e.source ? (
      /** @type {SourceType} */
      e.source
    ) : null;
    this.setSource(n);
  }
  /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   * @override
   */
  getLayersArray(e) {
    return e = e || [], e.push(this), e;
  }
  /**
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   * @override
   */
  getLayerStatesArray(e) {
    return e = e || [], e.push(this.getLayerState()), e;
  }
  /**
   * Get the layer source.
   * @return {SourceType|null} The layer source (or `null` if not yet set).
   * @observable
   * @api
   */
  getSource() {
    return (
      /** @type {SourceType} */
      this.get(X.SOURCE) || null
    );
  }
  /**
   * @return {SourceType|null} The source being rendered.
   */
  getRenderSource() {
    return this.getSource();
  }
  /**
   * @return {import("../source/Source.js").State} Source state.
   * @override
   */
  getSourceState() {
    const e = this.getSource();
    return e ? e.getState() : "undefined";
  }
  /**
   * @private
   */
  handleSourceChange_() {
    this.changed(), !(this.sourceReady_ || this.getSource().getState() !== "ready") && (this.sourceReady_ = !0, this.dispatchEvent("sourceready"));
  }
  /**
   * @private
   */
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ && (Te(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
    const e = this.getSource();
    e && (this.sourceChangeKey_ = De(
      e,
      Q.CHANGE,
      this.handleSourceChange_,
      this
    ), e.getState() === "ready" && (this.sourceReady_ = !0, setTimeout(() => {
      this.dispatchEvent("sourceready");
    }, 0))), this.changed();
  }
  /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */
  getFeatures(e) {
    return this.renderer_ ? this.renderer_.getFeatures(e) : Promise.resolve([]);
  }
  /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */
  getData(e) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(e);
  }
  /**
   * The layer is visible on the map view, i.e. within its min/max resolution or zoom and
   * extent, not set to `visible: false`, and not inside a layer group that is set
   * to `visible: false`.
   * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
   * Only required when the layer is not added to a map.
   * @return {boolean} The layer is visible in the map view.
   * @api
   */
  isVisible(e) {
    let t;
    const n = this.getMapInternal();
    !e && n && (e = n.getView()), e instanceof br ? t = {
      viewState: e.getState(),
      extent: e.calculateExtent()
    } : t = e, !t.layerStatesArray && n && (t.layerStatesArray = n.getLayerGroup().getLayerStatesArray());
    let r;
    t.layerStatesArray ? r = t.layerStatesArray.find(
      (o) => o.layer === this
    ) : r = this.getLayerState();
    const s = this.getExtent();
    return qc(r, t.viewState) && (!s || Ut(s, t.extent));
  }
  /**
   * Get the attributions of the source of this layer for the given view.
   * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
   * Only required when the layer is not added to a map.
   * @return {Array<string>} Attributions for this layer at the given view.
   * @api
   */
  getAttributions(e) {
    var s;
    if (!this.isVisible(e))
      return [];
    const t = (s = this.getSource()) == null ? void 0 : s.getAttributions();
    if (!t)
      return [];
    const n = e instanceof br ? e.getViewStateAndExtent() : e;
    let r = t(n);
    return Array.isArray(r) || (r = [r]), r;
  }
  /**
   * In charge to manage the rendering of the layer. One layer type is
   * bounded with one layer renderer.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target which the renderer may (but need not) use
   * for rendering its content.
   * @return {HTMLElement|null} The rendered element.
   */
  render(e, t) {
    const n = this.getRenderer();
    return n.prepareFrame(e) ? (this.rendered = !0, n.renderFrame(e, t)) : null;
  }
  /**
   * Called when a layer is not visible during a map render.
   */
  unrender() {
    this.rendered = !1;
  }
  /** @return {string} Declutter */
  getDeclutter() {
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {import("../layer/Layer.js").State} layerState Layer state.
   */
  renderDeclutter(e, t) {
  }
  /**
   * When the renderer follows a layout -> render approach, do the final rendering here.
   * @param {import('../Map.js').FrameState} frameState Frame state
   */
  renderDeferred(e) {
    const t = this.getRenderer();
    t && t.renderDeferred(e);
  }
  /**
   * For use inside the library only.
   * @param {import("../Map.js").default|null} map Map.
   */
  setMapInternal(e) {
    e || this.unrender(), this.set(X.MAP, e);
  }
  /**
   * For use inside the library only.
   * @return {import("../Map.js").default|null} Map.
   */
  getMapInternal() {
    return this.get(X.MAP);
  }
  /**
   * Sets the layer to be rendered on top of other layers on a map. The map will
   * not manage this layer in its layers collection. This
   * is useful for temporary layers. To remove an unmanaged layer from the map,
   * use `#setMap(null)`.
   *
   * To add the layer to a map and have it managed by the map, use
   * {@link module:ol/Map~Map#addLayer} instead.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */
  setMap(e) {
    this.mapPrecomposeKey_ && (Te(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), e || this.changed(), this.mapRenderKey_ && (Te(this.mapRenderKey_), this.mapRenderKey_ = null), e && (this.mapPrecomposeKey_ = De(
      e,
      Ee.PRECOMPOSE,
      (t) => {
        const r = /** @type {import("../render/Event.js").default} */ t.frameState.layerStatesArray, s = this.getLayerState(!1);
        Z(
          !r.some(function(o) {
            return o.layer === s.layer;
          }),
          "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."
        ), r.push(s);
      }
    ), this.mapRenderKey_ = De(this, Q.CHANGE, e.render, e), this.changed());
  }
  /**
   * Set the layer source.
   * @param {SourceType|null} source The layer source.
   * @observable
   * @api
   */
  setSource(e) {
    this.set(X.SOURCE, e);
  }
  /**
   * Get the renderer for this layer.
   * @return {RendererType|null} The layer renderer.
   */
  getRenderer() {
    return this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_;
  }
  /**
   * @return {boolean} The layer has a renderer.
   */
  hasRenderer() {
    return !!this.renderer_;
  }
  /**
   * Create a renderer for this layer.
   * @return {RendererType} A layer renderer.
   * @protected
   */
  createRenderer() {
    return null;
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_), this.setSource(null), super.disposeInternal();
  }
}
function qc(i, e) {
  if (!i.visible)
    return !1;
  const t = e.resolution;
  if (t < i.minResolution || t >= i.maxResolution)
    return !1;
  const n = e.zoom;
  return n > i.minZoom && n <= i.maxZoom;
}
const Vt = {
  PRELOAD: "preload",
  USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError"
};
class Jc extends js {
  /**
   * @param {Options<TileSourceType>} [options] Tile layer options.
   */
  constructor(e) {
    e = e || {};
    const t = Object.assign({}, e), n = e.cacheSize;
    delete e.cacheSize, delete t.preload, delete t.useInterimTilesOnError, super(t), this.on, this.once, this.un, this.cacheSize_ = n, this.setPreload(e.preload !== void 0 ? e.preload : 0), this.setUseInterimTilesOnError(
      e.useInterimTilesOnError !== void 0 ? e.useInterimTilesOnError : !0
    );
  }
  /**
   * @return {number|undefined} The suggested cache size
   * @protected
   */
  getCacheSize() {
    return this.cacheSize_;
  }
  /**
   * Return the level as number to which we will preload tiles up to.
   * @return {number} The level to preload tiles up to.
   * @observable
   * @api
   */
  getPreload() {
    return (
      /** @type {number} */
      this.get(Vt.PRELOAD)
    );
  }
  /**
   * Set the level as number to which we will preload tiles up to.
   * @param {number} preload The level to preload tiles up to.
   * @observable
   * @api
   */
  setPreload(e) {
    this.set(Vt.PRELOAD, e);
  }
  /**
   * Deprecated.  Whether we use interim tiles on error.
   * @return {boolean} Use interim tiles on error.
   * @observable
   * @api
   */
  getUseInterimTilesOnError() {
    return (
      /** @type {boolean} */
      this.get(Vt.USE_INTERIM_TILES_ON_ERROR)
    );
  }
  /**
   * Deprecated.  Set whether we use interim tiles on error.
   * @param {boolean} useInterimTilesOnError Use interim tiles on error.
   * @observable
   * @api
   */
  setUseInterimTilesOnError(e) {
    this.set(Vt.USE_INTERIM_TILES_ON_ERROR, e);
  }
  /**
   * Get data for a pixel location.  The return type depends on the source data.  For image tiles,
   * a four element RGBA array will be returned.  For data tiles, the array length will match the
   * number of bands in the dataset.  For requests outside the layer extent, `null` will be returned.
   * Data for a image tiles can only be retrieved if the source's `crossOrigin` property is set.
   *
   * ```js
   * // display layer data on every pointer move
   * map.on('pointermove', (event) => {
   *   console.log(layer.getData(event.pixel));
   * });
   * ```
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   * @api
   * @override
   */
  getData(e) {
    return super.getData(e);
  }
}
class Bi extends oi {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection.
   * @param {import("../tilegrid/TileGrid.js").default} sourceTileGrid Source tile grid.
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../tilegrid/TileGrid.js").default} targetTileGrid Target tile grid.
   * @param {import("../tilecoord.js").TileCoord} tileCoord Coordinate of the tile.
   * @param {import("../tilecoord.js").TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} gutter Gutter of the source tiles.
   * @param {FunctionType} getTileFunction
   *     Function returning source tiles (z, x, y, pixelRatio).
   * @param {number} [errorThreshold] Acceptable reprojection error (in px).
   * @param {boolean} [renderEdges] Render reprojection edges.
   * @param {import("../Tile.js").Options} [options] Tile options.
   */
  constructor(e, t, n, r, s, o, a, l, c, h, u, f) {
    super(s, b.IDLE, f), this.renderEdges_ = u !== void 0 ? u : !1, this.pixelRatio_ = a, this.gutter_ = l, this.canvas_ = null, this.sourceTileGrid_ = t, this.targetTileGrid_ = r, this.wrappedTileCoord_ = o || s, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0, this.clipExtent_ = e.canWrapX() ? e.getExtent() : void 0;
    const g = r.getTileCoordExtent(
      this.wrappedTileCoord_
    ), m = this.targetTileGrid_.getExtent();
    let d = this.sourceTileGrid_.getExtent();
    const p = m ? ge(g, m) : g;
    if (Dt(p) === 0) {
      this.state = b.EMPTY;
      return;
    }
    const y = e.getExtent();
    y && (d ? d = ge(d, y) : d = y);
    const _ = r.getResolution(
      this.wrappedTileCoord_[0]
    ), R = is(
      e,
      n,
      p,
      _
    );
    if (!isFinite(R) || R <= 0) {
      this.state = b.EMPTY;
      return;
    }
    const T = h !== void 0 ? h : li;
    if (this.triangulation_ = new gi(
      e,
      n,
      p,
      d,
      R * T,
      _
    ), this.triangulation_.getTriangles().length === 0) {
      this.state = b.EMPTY;
      return;
    }
    this.sourceZ_ = t.getZForResolution(R);
    let x = this.triangulation_.calculateSourceExtent();
    if (d && (e.canWrapX() ? (x[1] = H(
      x[1],
      d[1],
      d[3]
    ), x[3] = H(
      x[3],
      d[1],
      d[3]
    )) : x = ge(x, d)), !Dt(x))
      this.state = b.EMPTY;
    else {
      let I = 0, w = 0;
      e.canWrapX() && (I = j(y), w = Math.floor(
        (x[0] - y[0]) / I
      )), es(
        x.slice(),
        e,
        !0
      ).forEach((S) => {
        const v = t.getTileRangeForExtentAndZ(
          S,
          this.sourceZ_
        );
        for (let A = v.minX; A <= v.maxX; A++)
          for (let P = v.minY; P <= v.maxY; P++) {
            const G = c(this.sourceZ_, A, P, a);
            if (G) {
              const O = w * I;
              this.sourceTiles_.push({ tile: G, offset: O });
            }
          }
        ++w;
      }), this.sourceTiles_.length === 0 && (this.state = b.EMPTY);
    }
  }
  /**
   * Get the HTML Canvas element for this tile.
   * @return {HTMLCanvasElement} Canvas.
   */
  getImage() {
    return this.canvas_;
  }
  /**
   * @private
   */
  reproject_() {
    const e = [];
    if (this.sourceTiles_.forEach((t) => {
      var r;
      const n = t.tile;
      if (n && n.getState() == b.LOADED) {
        const s = this.sourceTileGrid_.getTileCoordExtent(n.tileCoord);
        s[0] += t.offset, s[2] += t.offset;
        const o = (r = this.clipExtent_) == null ? void 0 : r.slice();
        o && (o[0] += t.offset, o[2] += t.offset), e.push({
          extent: s,
          clipExtent: o,
          image: n.getImage()
        });
      }
    }), this.sourceTiles_.length = 0, e.length === 0)
      this.state = b.ERROR;
    else {
      const t = this.wrappedTileCoord_[0], n = this.targetTileGrid_.getTileSize(t), r = typeof n == "number" ? n : n[0], s = typeof n == "number" ? n : n[1], o = this.targetTileGrid_.getResolution(t), a = this.sourceTileGrid_.getResolution(
        this.sourceZ_
      ), l = this.targetTileGrid_.getTileCoordExtent(
        this.wrappedTileCoord_
      );
      this.canvas_ = di(
        r,
        s,
        this.pixelRatio_,
        a,
        this.sourceTileGrid_.getExtent(),
        o,
        l,
        this.triangulation_,
        e,
        this.gutter_,
        this.renderEdges_,
        this.interpolate
      ), this.state = b.LOADED;
    }
    this.changed();
  }
  /**
   * Load not yet loaded URI.
   * @override
   */
  load() {
    if (this.state == b.IDLE) {
      this.state = b.LOADING, this.changed();
      let e = 0;
      this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach(({ tile: t }) => {
        const n = t.getState();
        if (n == b.IDLE || n == b.LOADING) {
          e++;
          const r = De(t, Q.CHANGE, (s) => {
            const o = t.getState();
            (o == b.LOADED || o == b.ERROR || o == b.EMPTY) && (Te(r), e--, e === 0 && (this.unlistenSources_(), this.reproject_()));
          });
          this.sourcesListenerKeys_.push(r);
        }
      }), e === 0 ? setTimeout(this.reproject_.bind(this), 0) : this.sourceTiles_.forEach(function({ tile: t }, n, r) {
        t.getState() == b.IDLE && t.load();
      });
    }
  }
  /**
   * @private
   */
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(Te), this.sourcesListenerKeys_ = null;
  }
  /**
   * Remove from the cache due to expiry
   * @override
   */
  release() {
    this.canvas_ && (vt(this.canvas_.getContext("2d")), Pe.push(this.canvas_), this.canvas_ = null), super.release();
  }
}
const B = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4
};
class zi extends _n {
  /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number|Array<number>|undefined} resolution Resolution. If provided as array, x and y
   * resolution will be assumed.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("./ImageState.js").default|import("./Image.js").Loader} stateOrLoader State.
   */
  constructor(e, t, n, r) {
    super(), this.extent = e, this.pixelRatio_ = n, this.resolution = t, this.state = typeof r == "function" ? B.IDLE : r, this.image_ = null, this.loader = typeof r == "function" ? r : null;
  }
  /**
   * @protected
   */
  changed() {
    this.dispatchEvent(Q.CHANGE);
  }
  /**
   * @return {import("./extent.js").Extent} Extent.
   */
  getExtent() {
    return this.extent;
  }
  /**
   * @return {import('./DataTile.js').ImageLike} Image.
   */
  getImage() {
    return this.image_;
  }
  /**
   * @return {number} PixelRatio.
   */
  getPixelRatio() {
    return this.pixelRatio_;
  }
  /**
   * @return {number|Array<number>} Resolution.
   */
  getResolution() {
    return (
      /** @type {number} */
      this.resolution
    );
  }
  /**
   * @return {import("./ImageState.js").default} State.
   */
  getState() {
    return this.state;
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.state == B.IDLE && this.loader) {
      this.state = B.LOADING, this.changed();
      const e = this.getResolution(), t = Array.isArray(e) ? e[0] : e;
      Kr(
        () => this.loader(
          this.getExtent(),
          t,
          this.getPixelRatio()
        )
      ).then((n) => {
        "image" in n && (this.image_ = n.image), "extent" in n && (this.extent = n.extent), "resolution" in n && (this.resolution = n.resolution), "pixelRatio" in n && (this.pixelRatio_ = n.pixelRatio), (n instanceof HTMLImageElement || n instanceof ImageBitmap || n instanceof HTMLCanvasElement || n instanceof HTMLVideoElement) && (this.image_ = n), this.state = B.LOADED;
      }).catch((n) => {
        this.state = B.ERROR, console.error(n);
      }).finally(() => this.changed());
    }
  }
  /**
   * @param {import('./DataTile.js').ImageLike} image The image.
   */
  setImage(e) {
    this.image_ = e;
  }
  /**
   * @param {number|Array<number>} resolution Resolution.
   */
  setResolution(e) {
    this.resolution = e;
  }
}
function Qc(i, e, t) {
  const n = (
    /** @type {HTMLImageElement} */
    i
  );
  let r = !0, s = !1, o = !1;
  const a = [
    an(n, Q.LOAD, function() {
      o = !0, s || e();
    })
  ];
  return n.src && wo ? (s = !0, n.decode().then(function() {
    r && e();
  }).catch(function(l) {
    r && (o ? e() : t());
  })) : a.push(an(n, Q.ERROR, t)), function() {
    r = !1, a.forEach(Te);
  };
}
class $s extends oi {
  /**
   * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("./TileState.js").default} state State.
   * @param {string} src Image source URI.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
   * @param {import("./Tile.js").Options} [options] Tile options.
   */
  constructor(e, t, n, r, s, o) {
    super(e, t, o), this.crossOrigin_ = r, this.src_ = n, this.key = n, this.image_ = new Image(), r !== null && (this.image_.crossOrigin = r), this.unlisten_ = null, this.tileLoadFunction_ = s;
  }
  /**
   * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @api
   */
  getImage() {
    return this.image_;
  }
  /**
   * Sets an HTML image element for this tile (may be a Canvas or preloaded Image).
   * @param {HTMLCanvasElement|HTMLImageElement} element Element.
   */
  setImage(e) {
    this.image_ = e, this.state = b.LOADED, this.unlistenImage_(), this.changed();
  }
  /**
   * Tracks loading or read errors.
   *
   * @private
   */
  handleImageError_() {
    this.state = b.ERROR, this.unlistenImage_(), this.image_ = eh(), this.changed();
  }
  /**
   * Tracks successful image load.
   *
   * @private
   */
  handleImageLoad_() {
    const e = (
      /** @type {HTMLImageElement} */
      this.image_
    );
    e.naturalWidth && e.naturalHeight ? this.state = b.LOADED : this.state = b.EMPTY, this.unlistenImage_(), this.changed();
  }
  /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   *
   * To retry loading tiles on failed requests, use a custom `tileLoadFunction`
   * that checks for error status codes and reloads only when the status code is
   * 408, 429, 500, 502, 503 and 504, and only when not too many retries have been
   * made already:
   *
   * ```js
   * const retryCodes = [408, 429, 500, 502, 503, 504];
   * const retries = {};
   * source.setTileLoadFunction((tile, src) => {
   *   const image = tile.getImage();
   *   fetch(src)
   *     .then((response) => {
   *       if (retryCodes.includes(response.status)) {
   *         retries[src] = (retries[src] || 0) + 1;
   *         if (retries[src] <= 3) {
   *           setTimeout(() => tile.load(), retries[src] * 1000);
   *         }
   *         return Promise.reject();
   *       }
   *       return response.blob();
   *     })
   *     .then((blob) => {
   *       const imageUrl = URL.createObjectURL(blob);
   *       image.src = imageUrl;
   *       setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
   *     })
   *     .catch(() => tile.setState(3)); // error
   * });
   * ```
   * @api
   * @override
   */
  load() {
    this.state == b.ERROR && (this.state = b.IDLE, this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_)), this.state == b.IDLE && (this.state = b.LOADING, this.changed(), this.tileLoadFunction_(this, this.src_), this.unlisten_ = Qc(
      this.image_,
      this.handleImageLoad_.bind(this),
      this.handleImageError_.bind(this)
    ));
  }
  /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), this.unlisten_ = null);
  }
}
function eh() {
  const i = xe(1, 1);
  return i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1), i.canvas;
}
class th extends _n {
  /**
   * @param {TileRepresentationOptions<TileType>} options The tile representation options.
   */
  constructor(e) {
    super(), this.tile, this.handleTileChange_ = this.handleTileChange_.bind(this), this.gutter = e.gutter || 0, this.helper = e.helper, this.loaded = !1, this.ready = !1;
  }
  /**
   * @param {TileType} tile Tile.
   */
  setTile(e) {
    if (e !== this.tile)
      if (this.tile && this.tile.removeEventListener(Q.CHANGE, this.handleTileChange_), this.tile = e, this.loaded = e.getState() === b.LOADED, this.loaded)
        this.uploadTile();
      else {
        if (e instanceof $s) {
          const t = e.getImage();
          t instanceof Image && !t.crossOrigin && (t.crossOrigin = "anonymous");
        }
        e.addEventListener(Q.CHANGE, this.handleTileChange_);
      }
  }
  /**
   * @abstract
   * @protected
   */
  uploadTile() {
    V();
  }
  setReady() {
    this.ready = !0, this.dispatchEvent(Q.CHANGE);
  }
  handleTileChange_() {
    this.tile.getState() === b.LOADED && (this.loaded = !0, this.uploadTile());
  }
  /**
   * @param {import("./Helper.js").default} helper The WebGL helper.
   */
  setHelper(e) {
    this.helper = e, this.helper && this.loaded && this.uploadTile();
  }
  /**
   * @override
   */
  disposeInternal() {
    this.setHelper(null), this.tile.removeEventListener(Q.CHANGE, this.handleTileChange_);
  }
}
const ji = 34962, $i = 34963, nh = 35040, Yi = 35044, ih = 35048, rh = 5121, sh = 5123, oh = 5125, Ys = 5126, Ar = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
function ah(i, e) {
  e = Object.assign(
    {
      preserveDrawingBuffer: !0,
      antialias: !xo
      // https://bugs.webkit.org/show_bug.cgi?id=237906
    },
    e
  );
  const t = Ar.length;
  for (let n = 0; n < t; ++n)
    try {
      const r = i.getContext(Ar[n], e);
      if (r)
        return (
          /** @type {!WebGLRenderingContext} */
          r
        );
    } catch {
    }
  return null;
}
const lh = {
  STATIC_DRAW: Yi,
  STREAM_DRAW: nh,
  DYNAMIC_DRAW: ih
};
class Vs {
  /**
   * @param {number} type Buffer type, either ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER.
   * @param {number} [usage] Intended usage, either `STATIC_DRAW`, `STREAM_DRAW` or `DYNAMIC_DRAW`.
   * Default is `STATIC_DRAW`.
   */
  constructor(e, t) {
    this.array_ = null, this.type_ = e, Z(
      e === ji || e === $i,
      "A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`"
    ), this.usage_ = t !== void 0 ? t : lh.STATIC_DRAW;
  }
  /**
   * Populates the buffer with an array of the given size (all values will be zeroes).
   * @param {number} size Array size
   * @return {WebGLArrayBuffer} This
   */
  ofSize(e) {
    return this.array_ = new (Kt(this.type_))(e), this;
  }
  /**
   * Populates the buffer with an array of the given size.
   * @param {Array<number>} array Numerical array
   * @return {WebGLArrayBuffer} This
   */
  fromArray(e) {
    return this.array_ = Kt(this.type_).from(e), this;
  }
  /**
   * Populates the buffer with a raw binary array buffer.
   * @param {ArrayBuffer} buffer Raw binary buffer to populate the array with. Note that this buffer must have been
   * initialized for the same typed array class.
   * @return {WebGLArrayBuffer} This
   */
  fromArrayBuffer(e) {
    return this.array_ = new (Kt(this.type_))(e), this;
  }
  /**
   * @return {number} Buffer type.
   */
  getType() {
    return this.type_;
  }
  /**
   * Will return null if the buffer was not initialized
   * @return {Float32Array|Uint32Array|null} Array.
   */
  getArray() {
    return this.array_;
  }
  /**
   * @param {Float32Array|Uint32Array} array Array.
   */
  setArray(e) {
    const t = Kt(this.type_);
    if (!(e instanceof t))
      throw new Error(`Expected ${t}`);
    this.array_ = e;
  }
  /**
   * @return {number} Usage.
   */
  getUsage() {
    return this.usage_;
  }
  /**
   * Will return 0 if the buffer is not initialized
   * @return {number} Array size
   */
  getSize() {
    return this.array_ ? this.array_.length : 0;
  }
}
function Kt(i) {
  switch (i) {
    case ji:
      return Float32Array;
    case $i:
      return Uint32Array;
    default:
      return Float32Array;
  }
}
function Ks(i, e, t) {
  const n = t ? i.LINEAR : i.NEAREST;
  i.bindTexture(i.TEXTURE_2D, e), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, n), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, n);
}
function ch(i, e, t, n) {
  Ks(i, e, n), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, t);
}
function vr(i, e, t, n, r, s) {
  const o = i.getGL();
  let a, l;
  t instanceof Float32Array ? (a = o.FLOAT, i.getExtension("OES_texture_float"), l = i.getExtension("OES_texture_float_linear") !== null) : (a = o.UNSIGNED_BYTE, l = !0), Ks(o, e, s && l);
  const c = t.byteLength / n[1];
  let h = 1;
  c % 8 === 0 ? h = 8 : c % 4 === 0 ? h = 4 : c % 2 === 0 && (h = 2);
  let u;
  switch (r) {
    case 1: {
      u = o.LUMINANCE;
      break;
    }
    case 2: {
      u = o.LUMINANCE_ALPHA;
      break;
    }
    case 3: {
      u = o.RGB;
      break;
    }
    case 4: {
      u = o.RGBA;
      break;
    }
    default:
      throw new Error(`Unsupported number of bands: ${r}`);
  }
  const f = o.getParameter(o.UNPACK_ALIGNMENT);
  o.pixelStorei(o.UNPACK_ALIGNMENT, h), o.texImage2D(
    o.TEXTURE_2D,
    0,
    u,
    n[0],
    n[1],
    0,
    u,
    a,
    t
  ), o.pixelStorei(o.UNPACK_ALIGNMENT, f);
}
let ot = null;
function hh() {
  ot = xe(1, 1, void 0, {
    willReadFrequently: !0
  });
}
class uh extends th {
  /**
   * @param {import("./BaseTileRepresentation.js").TileRepresentationOptions<TileType>} options The tile texture options.
   */
  constructor(e) {
    super(e), this.textures = [], this.renderSize_ = se(
      e.grid.getTileSize(e.tile.tileCoord[0])
    ), this.bandCount = NaN;
    const t = new Vs(ji, Yi);
    t.fromArray([
      0,
      // P0
      1,
      1,
      // P1
      1,
      1,
      // P2
      0,
      0,
      // P3
      0
    ]), this.helper.flushBufferData(t), this.coords = t, this.setTile(e.tile);
  }
  /**
   * @override
   * @param {import("./Helper.js").default} helper The WebGL helper.
   */
  setHelper(e) {
    var n;
    const t = (n = this.helper) == null ? void 0 : n.getGL();
    if (t) {
      this.helper.deleteBuffer(this.coords);
      for (let r = 0; r < this.textures.length; ++r)
        t.deleteTexture(this.textures[r]);
    }
    super.setHelper(e), e && e.flushBufferData(this.coords);
  }
  /**
   * @override
   */
  uploadTile() {
    const e = this.helper, t = e.getGL(), n = this.tile;
    this.textures.length = 0;
    let r;
    n instanceof $s || n instanceof Bi ? r = n.getImage() : r = n.getData();
    const s = tn(r);
    if (s) {
      const _ = t.createTexture();
      this.textures.push(_), this.bandCount = 4, ch(t, _, s, n.interpolate), this.setReady();
      return;
    }
    r = Vn(r);
    const o = (
      /** @type {DataTile} */
      n.getSize()
    ), a = [
      o[0] + 2 * this.gutter,
      o[1] + 2 * this.gutter
    ], l = r instanceof Float32Array, c = a[0] * a[1], h = l ? Float32Array : Uint8Array, u = h.BYTES_PER_ELEMENT, f = r.byteLength / a[1];
    this.bandCount = Math.floor(f / u / a[0]);
    const g = Math.ceil(this.bandCount / 4);
    if (g === 1) {
      const _ = t.createTexture();
      this.textures.push(_), vr(
        e,
        _,
        r,
        a,
        this.bandCount,
        n.interpolate
      ), this.setReady();
      return;
    }
    const m = new Array(g);
    for (let _ = 0; _ < g; ++_) {
      const R = t.createTexture();
      this.textures.push(R);
      const T = _ < g - 1 ? 4 : (this.bandCount - 1) % 4 + 1;
      m[_] = new h(c * T);
    }
    let d = 0, p = 0;
    const y = a[0] * this.bandCount;
    for (let _ = 0; _ < a[1]; ++_) {
      for (let R = 0; R < y; ++R) {
        const T = r[p + R], x = Math.floor(d / this.bandCount), I = R % this.bandCount, w = Math.floor(I / 4), E = m[w], S = E.length / c, v = I % 4;
        E[x * S + v] = T, ++d;
      }
      p += f / u;
    }
    for (let _ = 0; _ < g; ++_) {
      const R = this.textures[_], T = m[_], x = T.length / c;
      vr(
        e,
        R,
        T,
        a,
        x,
        n.interpolate
      );
    }
    this.setReady();
  }
  /**
   * @param {import("../DataTile.js").ImageLike} image The image.
   * @param {number} renderCol The column index (in rendered tile space).
   * @param {number} renderRow The row index (in rendered tile space).
   * @return {Uint8ClampedArray|null} The data.
   * @private
   */
  getImagePixelData_(e, t, n) {
    const r = this.gutter, s = this.renderSize_[0], o = this.renderSize_[1];
    ot || hh(), ot.clearRect(0, 0, 1, 1);
    const a = e.width, l = e.height, c = a - 2 * r, h = l - 2 * r, u = r + Math.floor(c * (t / s)), f = r + Math.floor(h * (n / o));
    let g;
    try {
      ot.drawImage(e, u, f, 1, 1, 0, 0, 1, 1), g = ot.getImageData(0, 0, 1, 1).data;
    } catch {
      return ot = null, null;
    }
    return g;
  }
  /**
   * @param {import("../DataTile.js").ArrayLike} data The data.
   * @param {import("../size.js").Size} sourceSize The size.
   * @param {number} renderCol The column index (in rendered tile space).
   * @param {number} renderRow The row index (in rendered tile space).
   * @return {import("../DataTile.js").ArrayLike|null} The data.
   * @private
   */
  getArrayPixelData_(e, t, n, r) {
    const s = this.gutter, o = this.renderSize_[0], a = this.renderSize_[1], l = t[0], c = t[1], h = l + 2 * s, u = c + 2 * s, f = s + Math.floor(l * (n / o)), g = s + Math.floor(c * (r / a));
    if (e instanceof DataView) {
      const d = e.byteLength / (h * u), p = d * (g * h + f), y = e.buffer.slice(p, p + d);
      return new DataView(y);
    }
    const m = this.bandCount * (g * h + f);
    return e.slice(m, m + this.bandCount);
  }
  /**
   * Get data for a pixel.  If the tile is not loaded, null is returned.
   * @param {number} renderCol The column index (in rendered tile space).
   * @param {number} renderRow The row index (in rendered tile space).
   * @return {import("../DataTile.js").ArrayLike|null} The data.
   */
  getPixelData(e, t) {
    if (!this.loaded)
      return null;
    if (this.tile instanceof ai) {
      const n = this.tile.getData(), r = Vn(n);
      if (r) {
        const s = this.tile.getSize();
        return this.getArrayPixelData_(
          r,
          s,
          e,
          t
        );
      }
      return this.getImagePixelData_(tn(n), e, t);
    }
    return this.getImagePixelData_(this.tile.getImage(), e, t);
  }
}
const fh = 5;
class Hs extends kt {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(e) {
    super(), this.ready = !0, this.boundHandleImageChange_ = this.handleImageChange_.bind(this), this.layer_ = e, this.staleKeys_ = new Array(), this.maxStaleKeys = fh;
  }
  /**
   * @return {Array<string>} Get the list of stale keys.
   */
  getStaleKeys() {
    return this.staleKeys_;
  }
  /**
   * @param {string} key The new stale key.
   */
  prependStaleKey(e) {
    this.staleKeys_.unshift(e), this.staleKeys_.length > this.maxStaleKeys && (this.staleKeys_.length = this.maxStaleKeys);
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */
  getFeatures(e) {
    return V();
  }
  /**
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */
  getData(e) {
    return null;
  }
  /**
   * Determine whether render should be called.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(e) {
    return V();
  }
  /**
   * Render the layer.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement|null} target Target that may be used to render content to.
   * @return {HTMLElement|null} The rendered element.
   */
  renderFrame(e, t) {
    return V();
  }
  /**
   * @abstract
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("./Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(e, t, n, r, s) {
  }
  /**
   * @return {LayerType} Layer.
   */
  getLayer() {
    return this.layer_;
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @abstract
   */
  handleFontsChanged() {
  }
  /**
   * Handle changes in image state.
   * @param {import("../events/Event.js").default} event Image change event.
   * @private
   */
  handleImageChange_(e) {
    const t = (
      /** @type {import("../Image.js").default} */
      e.target
    );
    (t.getState() === B.LOADED || t.getState() === B.ERROR) && this.renderIfReadyAndVisible();
  }
  /**
   * Load the image if not already loaded, and register the image change
   * listener if needed.
   * @param {import("../Image.js").default} image Image.
   * @return {boolean} `true` if the image is already loaded, `false` otherwise.
   * @protected
   */
  loadImage(e) {
    let t = e.getState();
    return t != B.LOADED && t != B.ERROR && e.addEventListener(Q.CHANGE, this.boundHandleImageChange_), t == B.IDLE && (e.load(), t = e.getState()), t == B.LOADED;
  }
  /**
   * @protected
   */
  renderIfReadyAndVisible() {
    const e = this.getLayer();
    e && e.getVisible() && e.getSourceState() === "ready" && e.changed();
  }
  /**
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  renderDeferred(e) {
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
class Qt extends Gt {
  /**
   * @param {import("./EventType.js").default} type Type.
   * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
   *     CSS pixels to rendered pixels.
   * @param {import("../Map.js").FrameState} [frameState] Frame state.
   * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
   */
  constructor(e, t, n, r) {
    super(e), this.inversePixelTransform = t, this.frameState = n, this.context = r;
  }
}
const Ht = {
  LOST: "webglcontextlost",
  RESTORED: "webglcontextrestored"
}, gh = `
  precision mediump float;

  attribute vec2 a_position;
  varying vec2 v_texCoord;
  varying vec2 v_screenCoord;

  uniform vec2 u_screenSize;

  void main() {
    v_texCoord = a_position * 0.5 + 0.5;
    v_screenCoord = v_texCoord * u_screenSize;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`, dh = `
  precision mediump float;

  uniform sampler2D u_image;
  uniform float u_opacity;

  varying vec2 v_texCoord;

  void main() {
    gl_FragColor = texture2D(u_image, v_texCoord) * u_opacity;
  }
`;
class Mr {
  /**
   * @param {Options} options Options.
   */
  constructor(e) {
    this.gl_ = e.webGlContext;
    const t = this.gl_;
    this.scaleRatio_ = e.scaleRatio || 1, this.renderTargetTexture_ = t.createTexture(), this.renderTargetTextureSize_ = null, this.frameBuffer_ = t.createFramebuffer(), this.depthBuffer_ = t.createRenderbuffer();
    const n = t.createShader(t.VERTEX_SHADER);
    t.shaderSource(
      n,
      e.vertexShader || gh
    ), t.compileShader(n);
    const r = t.createShader(t.FRAGMENT_SHADER);
    t.shaderSource(
      r,
      e.fragmentShader || dh
    ), t.compileShader(r), this.renderTargetProgram_ = t.createProgram(), t.attachShader(this.renderTargetProgram_, n), t.attachShader(this.renderTargetProgram_, r), t.linkProgram(this.renderTargetProgram_), this.renderTargetVerticesBuffer_ = t.createBuffer();
    const s = [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1];
    t.bindBuffer(t.ARRAY_BUFFER, this.renderTargetVerticesBuffer_), t.bufferData(
      t.ARRAY_BUFFER,
      new Float32Array(s),
      t.STATIC_DRAW
    ), this.renderTargetAttribLocation_ = t.getAttribLocation(
      this.renderTargetProgram_,
      "a_position"
    ), this.renderTargetUniformLocation_ = t.getUniformLocation(
      this.renderTargetProgram_,
      "u_screenSize"
    ), this.renderTargetOpacityLocation_ = t.getUniformLocation(
      this.renderTargetProgram_,
      "u_opacity"
    ), this.renderTargetTextureLocation_ = t.getUniformLocation(
      this.renderTargetProgram_,
      "u_image"
    ), this.uniforms_ = [], e.uniforms && Object.keys(e.uniforms).forEach((o) => {
      this.uniforms_.push({
        value: e.uniforms[o],
        location: t.getUniformLocation(this.renderTargetProgram_, o)
      });
    });
  }
  getRenderTargetTexture() {
    return this.renderTargetTexture_;
  }
  /**
   * Get the WebGL rendering context
   * @return {WebGLRenderingContext} The rendering context.
   */
  getGL() {
    return this.gl_;
  }
  /**
   * Initialize the render target texture of the post process, make sure it is at the
   * right size and bind it as a render target for the next draw calls.
   * The last step to be initialized will be the one where the primitives are rendered.
   * @param {import("../Map.js").FrameState} frameState current frame state
   */
  init(e) {
    const t = this.getGL(), n = [
      t.drawingBufferWidth * this.scaleRatio_,
      t.drawingBufferHeight * this.scaleRatio_
    ];
    if (t.bindFramebuffer(t.FRAMEBUFFER, this.getFrameBuffer()), t.bindRenderbuffer(t.RENDERBUFFER, this.getDepthBuffer()), t.viewport(0, 0, n[0], n[1]), !this.renderTargetTextureSize_ || this.renderTargetTextureSize_[0] !== n[0] || this.renderTargetTextureSize_[1] !== n[1]) {
      this.renderTargetTextureSize_ = n;
      const r = 0, s = t.RGBA, o = 0, a = t.RGBA, l = t.UNSIGNED_BYTE, c = null;
      t.bindTexture(t.TEXTURE_2D, this.renderTargetTexture_), t.texImage2D(
        t.TEXTURE_2D,
        r,
        s,
        n[0],
        n[1],
        o,
        a,
        l,
        c
      ), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.framebufferTexture2D(
        t.FRAMEBUFFER,
        t.COLOR_ATTACHMENT0,
        t.TEXTURE_2D,
        this.renderTargetTexture_,
        0
      ), t.renderbufferStorage(
        t.RENDERBUFFER,
        t.DEPTH_COMPONENT16,
        n[0],
        n[1]
      ), t.framebufferRenderbuffer(
        t.FRAMEBUFFER,
        t.DEPTH_ATTACHMENT,
        t.RENDERBUFFER,
        this.depthBuffer_
      );
    }
  }
  /**
   * Render to the next postprocessing pass (or to the canvas if final pass).
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {WebGLPostProcessingPass} [nextPass] Next pass, optional
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [preCompose] Called before composing.
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [postCompose] Called before composing.
   */
  apply(e, t, n, r) {
    const s = this.getGL(), o = e.size;
    if (s.bindFramebuffer(
      s.FRAMEBUFFER,
      t ? t.getFrameBuffer() : null
    ), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, this.renderTargetTexture_), !t) {
      const l = fe(s.canvas);
      if (!e.renderTargets[l]) {
        const c = s.getContextAttributes();
        c && c.preserveDrawingBuffer && (s.clearColor(0, 0, 0, 0), s.clearDepth(1), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT)), e.renderTargets[l] = !0;
      }
    }
    s.disable(s.DEPTH_TEST), s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA), s.viewport(0, 0, s.drawingBufferWidth, s.drawingBufferHeight), s.bindBuffer(s.ARRAY_BUFFER, this.renderTargetVerticesBuffer_), s.useProgram(this.renderTargetProgram_), s.enableVertexAttribArray(this.renderTargetAttribLocation_), s.vertexAttribPointer(
      this.renderTargetAttribLocation_,
      2,
      s.FLOAT,
      !1,
      0,
      0
    ), s.uniform2f(this.renderTargetUniformLocation_, o[0], o[1]), s.uniform1i(this.renderTargetTextureLocation_, 0);
    const a = e.layerStatesArray[e.layerIndex].opacity;
    s.uniform1f(this.renderTargetOpacityLocation_, a), this.applyUniforms(e), n && n(s, e), s.drawArrays(s.TRIANGLES, 0, 6), r && r(s, e);
  }
  /**
   * @return {WebGLFramebuffer} Frame buffer
   */
  getFrameBuffer() {
    return this.frameBuffer_;
  }
  /**
   * @return {WebGLRenderbuffer} Depth buffer
   */
  getDepthBuffer() {
    return this.depthBuffer_;
  }
  /**
   * Sets the custom uniforms based on what was given in the constructor.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @private
   */
  applyUniforms(e) {
    const t = this.getGL();
    let n, r = 1;
    this.uniforms_.forEach(function(s) {
      if (n = typeof s.value == "function" ? s.value(e) : s.value, n instanceof HTMLCanvasElement || n instanceof ImageData)
        s.texture || (s.texture = t.createTexture()), t.activeTexture(t[`TEXTURE${r}`]), t.bindTexture(t.TEXTURE_2D, s.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), n instanceof ImageData ? t.texImage2D(
          t.TEXTURE_2D,
          0,
          t.RGBA,
          t.RGBA,
          n.width,
          n.height,
          0,
          t.UNSIGNED_BYTE,
          new Uint8Array(n.data)
        ) : t.texImage2D(
          t.TEXTURE_2D,
          0,
          t.RGBA,
          t.RGBA,
          t.UNSIGNED_BYTE,
          n
        ), t.uniform1i(s.location, r++);
      else if (Array.isArray(n))
        switch (n.length) {
          case 2:
            t.uniform2f(s.location, n[0], n[1]);
            return;
          case 3:
            t.uniform3f(s.location, n[0], n[1], n[2]);
            return;
          case 4:
            t.uniform4f(
              s.location,
              n[0],
              n[1],
              n[2],
              n[3]
            );
            return;
          default:
            return;
        }
      else
        typeof n == "number" && t.uniform1f(s.location, n);
    });
  }
}
function Zs() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function Ws(i, e) {
  return i[0] = e[0], i[1] = e[1], i[4] = e[2], i[5] = e[3], i[12] = e[4], i[13] = e[5], i;
}
const Ge = {
  PROJECTION_MATRIX: "u_projectionMatrix",
  SCREEN_TO_WORLD_MATRIX: "u_screenToWorldMatrix",
  TIME: "u_time",
  ZOOM: "u_zoom",
  RESOLUTION: "u_resolution",
  ROTATION: "u_rotation",
  VIEWPORT_SIZE_PX: "u_viewportSizePx",
  PIXEL_RATIO: "u_pixelRatio",
  HIT_DETECTION: "u_hitDetection"
}, It = {
  UNSIGNED_BYTE: rh,
  UNSIGNED_SHORT: sh,
  UNSIGNED_INT: oh,
  FLOAT: Ys
}, un = {};
function Pr(i) {
  return "shared/" + i;
}
let Dr = 0;
function mh() {
  const i = "unique/" + Dr;
  return Dr += 1, i;
}
function _h(i) {
  let e = un[i];
  if (!e) {
    const t = document.createElement("canvas");
    t.width = 1, t.height = 1, t.style.position = "absolute", t.style.left = "0", e = { users: 0, context: ah(t) }, un[i] = e;
  }
  return e.users += 1, e.context;
}
function ph(i) {
  const e = un[i];
  if (!e || (e.users -= 1, e.users > 0))
    return;
  const t = e.context, n = t.getExtension("WEBGL_lose_context");
  n && n.loseContext();
  const r = t.canvas;
  r.width = 1, r.height = 1, delete un[i];
}
class yh extends Yr {
  /**
   * @param {Options} [options] Options.
   */
  constructor(e) {
    super(), e = e || {}, this.boundHandleWebGLContextLost_ = this.handleWebGLContextLost.bind(this), this.boundHandleWebGLContextRestored_ = this.handleWebGLContextRestored.bind(this), this.canvasCacheKey_ = e.canvasCacheKey ? Pr(e.canvasCacheKey) : mh(), this.gl_ = _h(this.canvasCacheKey_), this.bufferCache_ = {}, this.extensionCache_ = {}, this.currentProgram_ = null, this.needsToBeRecreated_ = !1;
    const t = this.gl_.canvas;
    t.addEventListener(
      Ht.LOST,
      this.boundHandleWebGLContextLost_
    ), t.addEventListener(
      Ht.RESTORED,
      this.boundHandleWebGLContextRestored_
    ), this.offsetRotateMatrix_ = Be(), this.offsetScaleMatrix_ = Be(), this.tmpMat4_ = Zs(), this.uniformLocationsByProgram_ = {}, this.attribLocationsByProgram_ = {}, this.uniforms_ = [], e.uniforms && this.setUniforms(e.uniforms), this.postProcessPasses_ = e.postProcesses ? e.postProcesses.map(
      (n) => new Mr({
        webGlContext: this.gl_,
        scaleRatio: n.scaleRatio,
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        uniforms: n.uniforms
      })
    ) : [new Mr({ webGlContext: this.gl_ })], this.shaderCompileErrors_ = null, this.startTime_ = Date.now();
  }
  /**
   * @param {Object<string, UniformValue>} uniforms Uniform definitions.
   */
  setUniforms(e) {
    this.uniforms_ = [], this.addUniforms(e);
  }
  /**
   * @param {Object<string, UniformValue>} uniforms Uniform definitions.
   */
  addUniforms(e) {
    for (const t in e)
      this.uniforms_.push({
        name: t,
        value: e[t]
      });
  }
  /**
   * @param {string} canvasCacheKey The canvas cache key.
   * @return {boolean} The provided key matches the one this helper was constructed with.
   */
  canvasCacheKeyMatches(e) {
    return this.canvasCacheKey_ === Pr(e);
  }
  /**
   * Get a WebGL extension.  If the extension is not supported, null is returned.
   * Extensions are cached after they are enabled for the first time.
   * @param {string} name The extension name.
   * @return {Object|null} The extension or null if not supported.
   */
  getExtension(e) {
    if (e in this.extensionCache_)
      return this.extensionCache_[e];
    const t = this.gl_.getExtension(e);
    return this.extensionCache_[e] = t, t;
  }
  /**
   * Just bind the buffer if it's in the cache. Otherwise create
   * the WebGL buffer, bind it, populate it, and add an entry to
   * the cache.
   * @param {import("./Buffer").default} buffer Buffer.
   */
  bindBuffer(e) {
    const t = this.gl_, n = fe(e);
    let r = this.bufferCache_[n];
    if (!r) {
      const s = t.createBuffer();
      r = {
        buffer: e,
        webGlBuffer: s
      }, this.bufferCache_[n] = r;
    }
    t.bindBuffer(e.getType(), r.webGlBuffer);
  }
  /**
   * Update the data contained in the buffer array; this is required for the
   * new data to be rendered
   * @param {import("./Buffer").default} buffer Buffer.
   */
  flushBufferData(e) {
    const t = this.gl_;
    this.bindBuffer(e), t.bufferData(e.getType(), e.getArray(), e.getUsage());
  }
  /**
   * @param {import("./Buffer.js").default} buf Buffer.
   */
  deleteBuffer(e) {
    const t = fe(e);
    delete this.bufferCache_[t];
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    const e = this.gl_.canvas;
    e.removeEventListener(
      Ht.LOST,
      this.boundHandleWebGLContextLost_
    ), e.removeEventListener(
      Ht.RESTORED,
      this.boundHandleWebGLContextRestored_
    ), ph(this.canvasCacheKey_), delete this.gl_;
  }
  /**
   * Clear the buffer & set the viewport to draw.
   * Post process passes will be initialized here, the first one being bound as a render target for
   * subsequent draw calls.
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {boolean} [disableAlphaBlend] If true, no alpha blending will happen.
   * @param {boolean} [enableDepth] If true, enables depth testing.
   */
  prepareDraw(e, t, n) {
    const r = this.gl_, s = this.getCanvas(), o = e.size, a = e.pixelRatio;
    (s.width !== o[0] * a || s.height !== o[1] * a) && (s.width = o[0] * a, s.height = o[1] * a, s.style.width = o[0] + "px", s.style.height = o[1] + "px");
    for (let l = this.postProcessPasses_.length - 1; l >= 0; l--)
      this.postProcessPasses_[l].init(e);
    r.bindTexture(r.TEXTURE_2D, null), r.clearColor(0, 0, 0, 0), r.depthRange(0, 1), r.clearDepth(1), r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT), r.enable(r.BLEND), r.blendFunc(r.ONE, t ? r.ZERO : r.ONE_MINUS_SRC_ALPHA), n ? (r.enable(r.DEPTH_TEST), r.depthFunc(r.LEQUAL)) : r.disable(r.DEPTH_TEST);
  }
  /**
   * @param {WebGLFramebuffer|null} frameBuffer The frame buffer.
   * @param {WebGLTexture} [texture] The texture.
   */
  bindFrameBuffer(e, t) {
    const n = this.getGL();
    n.bindFramebuffer(n.FRAMEBUFFER, e), t && n.framebufferTexture2D(
      n.FRAMEBUFFER,
      n.COLOR_ATTACHMENT0,
      n.TEXTURE_2D,
      t,
      0
    );
  }
  /**
   * Bind the frame buffer from the initial render.
   */
  bindInitialFrameBuffer() {
    const e = this.getGL(), t = this.postProcessPasses_[0].getFrameBuffer();
    e.bindFramebuffer(e.FRAMEBUFFER, t);
    const n = this.postProcessPasses_[0].getRenderTargetTexture();
    e.framebufferTexture2D(
      e.FRAMEBUFFER,
      e.COLOR_ATTACHMENT0,
      e.TEXTURE_2D,
      n,
      0
    );
  }
  /**
   * Prepare a program to use a texture.
   * @param {WebGLTexture} texture The texture.
   * @param {number} slot The texture slot.
   * @param {string} uniformName The corresponding uniform name.
   */
  bindTexture(e, t, n) {
    const r = this.gl_;
    r.activeTexture(r.TEXTURE0 + t), r.bindTexture(r.TEXTURE_2D, e), r.uniform1i(this.getUniformLocation(n), t);
  }
  /**
   * Set up an attribute array buffer for use in the vertex shader.
   * @param {import("./Buffer").default} buffer The buffer.
   * @param {string} attributeName The attribute name.
   * @param {number} size The number of components per attribute vertex.
   */
  bindAttribute(e, t, n) {
    const r = this.getGL();
    this.bindBuffer(e);
    const s = this.getAttributeLocation(t);
    r.enableVertexAttribArray(s), r.vertexAttribPointer(s, n, r.FLOAT, !1, 0, 0);
  }
  /**
   * Clear the render target & bind it for future draw operations.
   * This is similar to `prepareDraw`, only post processes will not be applied.
   * Note: the whole viewport will be drawn to the render target, regardless of its size.
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {import("./RenderTarget.js").default} renderTarget Render target to draw to
   * @param {boolean} [disableAlphaBlend] If true, no alpha blending will happen.
   * @param {boolean} [enableDepth] If true, enables depth testing.
   */
  prepareDrawToRenderTarget(e, t, n, r) {
    const s = this.gl_, o = t.getSize();
    s.bindFramebuffer(s.FRAMEBUFFER, t.getFramebuffer()), s.bindRenderbuffer(s.RENDERBUFFER, t.getDepthbuffer()), s.viewport(0, 0, o[0], o[1]), s.bindTexture(s.TEXTURE_2D, t.getTexture()), s.clearColor(0, 0, 0, 0), s.depthRange(0, 1), s.clearDepth(1), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.enable(s.BLEND), s.blendFunc(s.ONE, n ? s.ZERO : s.ONE_MINUS_SRC_ALPHA), r ? (s.enable(s.DEPTH_TEST), s.depthFunc(s.LEQUAL)) : s.disable(s.DEPTH_TEST);
  }
  /**
   * Execute a draw call based on the currently bound program, texture, buffers, attributes.
   * @param {number} start Start index.
   * @param {number} end End index.
   */
  drawElements(e, t) {
    const n = this.gl_;
    this.getExtension("OES_element_index_uint");
    const r = n.UNSIGNED_INT, s = 4, o = t - e, a = e * s;
    n.drawElements(n.TRIANGLES, o, r, a);
  }
  /**
   * Apply the successive post process passes which will eventually render to the actual canvas.
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [preCompose] Called before composing.
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [postCompose] Called before composing.
   */
  finalizeDraw(e, t, n) {
    for (let r = 0, s = this.postProcessPasses_.length; r < s; r++)
      r === s - 1 ? this.postProcessPasses_[r].apply(
        e,
        null,
        t,
        n
      ) : this.postProcessPasses_[r].apply(
        e,
        this.postProcessPasses_[r + 1]
      );
  }
  /**
   * @return {HTMLCanvasElement} Canvas.
   */
  getCanvas() {
    return (
      /** @type {HTMLCanvasElement} */
      this.gl_.canvas
    );
  }
  /**
   * Get the WebGL rendering context
   * @return {WebGLRenderingContext} The rendering context.
   */
  getGL() {
    return this.gl_;
  }
  /**
   * Sets the default matrix uniforms for a given frame state. This is called internally in `prepareDraw`.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  applyFrameState(e) {
    const t = e.size, n = e.viewState.rotation, r = e.pixelRatio;
    this.setUniformFloatValue(
      Ge.TIME,
      (Date.now() - this.startTime_) * 1e-3
    ), this.setUniformFloatValue(Ge.ZOOM, e.viewState.zoom), this.setUniformFloatValue(
      Ge.RESOLUTION,
      e.viewState.resolution
    ), this.setUniformFloatValue(Ge.PIXEL_RATIO, r), this.setUniformFloatVec2(Ge.VIEWPORT_SIZE_PX, [
      t[0],
      t[1]
    ]), this.setUniformFloatValue(Ge.ROTATION, n);
  }
  /**
   * Sets the `u_hitDetection` uniform.
   * @param {boolean} enabled Whether to enable the hit detection code path
   */
  applyHitDetectionUniform(e) {
    const t = this.getUniformLocation(Ge.HIT_DETECTION);
    this.getGL().uniform1i(t, e ? 1 : 0), e && this.setUniformFloatValue(Ge.PIXEL_RATIO, 0.5);
  }
  /**
   * Sets the custom uniforms based on what was given in the constructor. This is called internally in `prepareDraw`.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  applyUniforms(e) {
    const t = this.gl_;
    let n, r = 0;
    this.uniforms_.forEach((s) => {
      if (n = typeof s.value == "function" ? s.value(e) : s.value, n instanceof HTMLCanvasElement || n instanceof HTMLImageElement || n instanceof ImageData || n instanceof WebGLTexture) {
        n instanceof WebGLTexture && !s.texture ? (s.prevValue = void 0, s.texture = n) : s.texture || (s.prevValue = void 0, s.texture = t.createTexture()), this.bindTexture(s.texture, r, s.name), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
        const o = !(n instanceof HTMLImageElement) || /** @type {HTMLImageElement} */
        n.complete;
        !(n instanceof WebGLTexture) && o && s.prevValue !== n && (s.prevValue = n, t.texImage2D(
          t.TEXTURE_2D,
          0,
          t.RGBA,
          t.RGBA,
          t.UNSIGNED_BYTE,
          n
        )), r++;
      } else if (Array.isArray(n) && n.length === 6)
        this.setUniformMatrixValue(
          s.name,
          Ws(this.tmpMat4_, n)
        );
      else if (Array.isArray(n) && n.length <= 4)
        switch (n.length) {
          case 2:
            t.uniform2f(
              this.getUniformLocation(s.name),
              n[0],
              n[1]
            );
            return;
          case 3:
            t.uniform3f(
              this.getUniformLocation(s.name),
              n[0],
              n[1],
              n[2]
            );
            return;
          case 4:
            t.uniform4f(
              this.getUniformLocation(s.name),
              n[0],
              n[1],
              n[2],
              n[3]
            );
            return;
          default:
            return;
        }
      else
        typeof n == "number" && t.uniform1f(this.getUniformLocation(s.name), n);
    });
  }
  /**
   * Set up a program for use. The program will be set as the current one. Then, the uniforms used
   * in the program will be set based on the current frame state and the helper configuration.
   * @param {WebGLProgram} program Program.
   * @param {import("../Map.js").FrameState} [frameState] Frame state.
   */
  useProgram(e, t) {
    this.gl_.useProgram(e), this.currentProgram_ = e, t && (this.applyFrameState(t), this.applyUniforms(t));
  }
  /**
   * Will attempt to compile a vertex or fragment shader based on source
   * On error, the shader will be returned but
   * `gl.getShaderParameter(shader, gl.COMPILE_STATUS)` will return `true`
   * Use `gl.getShaderInfoLog(shader)` to have details
   * @param {string} source Shader source
   * @param {ShaderType} type VERTEX_SHADER or FRAGMENT_SHADER
   * @return {WebGLShader} Shader object
   */
  compileShader(e, t) {
    const n = this.gl_, r = n.createShader(t);
    return n.shaderSource(r, e), n.compileShader(r), r;
  }
  /**
   * Create a program for a vertex and fragment shader.  Throws if shader compilation fails.
   * @param {string} fragmentShaderSource Fragment shader source.
   * @param {string} vertexShaderSource Vertex shader source.
   * @return {WebGLProgram} Program
   */
  getProgram(e, t) {
    const n = this.gl_, r = this.compileShader(
      e,
      n.FRAGMENT_SHADER
    ), s = this.compileShader(
      t,
      n.VERTEX_SHADER
    ), o = n.createProgram();
    if (n.attachShader(o, r), n.attachShader(o, s), n.linkProgram(o), !n.getShaderParameter(r, n.COMPILE_STATUS)) {
      const a = `Fragment shader compilation failed: ${n.getShaderInfoLog(
        r
      )}`;
      throw new Error(a);
    }
    if (n.deleteShader(r), !n.getShaderParameter(s, n.COMPILE_STATUS)) {
      const a = `Vertex shader compilation failed: ${n.getShaderInfoLog(
        s
      )}`;
      throw new Error(a);
    }
    if (n.deleteShader(s), !n.getProgramParameter(o, n.LINK_STATUS)) {
      const a = `GL program linking failed: ${n.getProgramInfoLog(
        o
      )}`;
      throw new Error(a);
    }
    return o;
  }
  /**
   * Will get the location from the shader or the cache
   * @param {string} name Uniform name
   * @return {WebGLUniformLocation} uniformLocation
   */
  getUniformLocation(e) {
    const t = fe(this.currentProgram_);
    return this.uniformLocationsByProgram_[t] === void 0 && (this.uniformLocationsByProgram_[t] = {}), this.uniformLocationsByProgram_[t][e] === void 0 && (this.uniformLocationsByProgram_[t][e] = this.gl_.getUniformLocation(this.currentProgram_, e)), this.uniformLocationsByProgram_[t][e];
  }
  /**
   * Will get the location from the shader or the cache
   * @param {string} name Attribute name
   * @return {number} attribLocation
   */
  getAttributeLocation(e) {
    const t = fe(this.currentProgram_);
    return this.attribLocationsByProgram_[t] === void 0 && (this.attribLocationsByProgram_[t] = {}), this.attribLocationsByProgram_[t][e] === void 0 && (this.attribLocationsByProgram_[t][e] = this.gl_.getAttribLocation(this.currentProgram_, e)), this.attribLocationsByProgram_[t][e];
  }
  /**
   * Sets the given transform to apply the rotation/translation/scaling of the given frame state.
   * The resulting transform can be used to convert world space coordinates to view coordinates in the [-1, 1] range.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {import("../transform").Transform} transform Transform to update.
   * @return {import("../transform").Transform} The updated transform object.
   */
  makeProjectionTransform(e, t) {
    const n = e.size, r = e.viewState.rotation, s = e.viewState.resolution, o = e.viewState.center;
    return mt(
      t,
      0,
      0,
      2 / (s * n[0]),
      2 / (s * n[1]),
      -r,
      -o[0],
      -o[1]
    ), t;
  }
  /**
   * Give a value for a standard float uniform
   * @param {string} uniform Uniform name
   * @param {number} value Value
   */
  setUniformFloatValue(e, t) {
    this.gl_.uniform1f(this.getUniformLocation(e), t);
  }
  /**
   * Give a value for a vec2 uniform
   * @param {string} uniform Uniform name
   * @param {Array<number>} value Array of length 4.
   */
  setUniformFloatVec2(e, t) {
    this.gl_.uniform2fv(this.getUniformLocation(e), t);
  }
  /**
   * Give a value for a vec4 uniform
   * @param {string} uniform Uniform name
   * @param {Array<number>} value Array of length 4.
   */
  setUniformFloatVec4(e, t) {
    this.gl_.uniform4fv(this.getUniformLocation(e), t);
  }
  /**
   * Give a value for a standard matrix4 uniform
   * @param {string} uniform Uniform name
   * @param {Array<number>} value Matrix value
   */
  setUniformMatrixValue(e, t) {
    this.gl_.uniformMatrix4fv(this.getUniformLocation(e), !1, t);
  }
  /**
   * Will set the currently bound buffer to an attribute of the shader program. Used by `#enableAttributes`
   * internally.
   * @param {string} attribName Attribute name
   * @param {number} size Number of components per attributes
   * @param {number} type UNSIGNED_INT, UNSIGNED_BYTE, UNSIGNED_SHORT or FLOAT
   * @param {number} stride Stride in bytes (0 means attribs are packed)
   * @param {number} offset Offset in bytes
   * @private
   */
  enableAttributeArray_(e, t, n, r, s) {
    const o = this.getAttributeLocation(e);
    o < 0 || (this.gl_.enableVertexAttribArray(o), this.gl_.vertexAttribPointer(o, t, n, !1, r, s));
  }
  /**
   * Will enable the following attributes to be read from the currently bound buffer,
   * i.e. tell the GPU where to read the different attributes in the buffer. An error in the
   * size/type/order of attributes will most likely break the rendering and throw a WebGL exception.
   * @param {Array<AttributeDescription>} attributes Ordered list of attributes to read from the buffer
   */
  enableAttributes(e) {
    const t = Eh(e);
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      this.enableAttributeArray_(
        s.name,
        s.size,
        s.type || Ys,
        t,
        n
      ), n += s.size * qs(s.type);
    }
  }
  /**
   * WebGL context was lost
   * @param {WebGLContextEvent} event The context loss event.
   * @private
   */
  handleWebGLContextLost(e) {
    si(this.bufferCache_), this.currentProgram_ = null, e.preventDefault();
  }
  /**
   * WebGL context was restored
   * @private
   */
  handleWebGLContextRestored() {
    this.needsToBeRecreated_ = !0;
  }
  /**
   * Returns whether this helper needs to be recreated, as the context was lost and then restored.
   * @return {boolean} Whether this helper needs to be recreated.
   */
  needsToBeRecreated() {
    return this.needsToBeRecreated_;
  }
  /**
   * Will create or reuse a given webgl texture and apply the given size. If no image data
   * specified, the texture will be empty, otherwise image data will be used and the `size`
   * parameter will be ignored.  If a Uint8Array is provided for data, a size must also be provided.
   * Note: wrap parameters are set to clamp to edge, min filter is set to linear.
   * @param {Array<number>} size Expected size of the texture
   * @param {ImageData|HTMLImageElement|HTMLCanvasElement|Uint8Array|null} data Image data/object to bind to the texture
   * @param {WebGLTexture} [texture] Existing texture to reuse
   * @param {boolean} [nearest] Use gl.NEAREST for min/mag filter.
   * @return {WebGLTexture} The generated texture
   */
  createTexture(e, t, n, r) {
    const s = this.gl_;
    n = n || s.createTexture();
    const o = r ? s.NEAREST : s.LINEAR;
    s.bindTexture(s.TEXTURE_2D, n), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, o), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, o), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE);
    const a = 0, l = s.RGBA, c = 0, h = s.RGBA, u = s.UNSIGNED_BYTE;
    return t instanceof Uint8Array ? s.texImage2D(
      s.TEXTURE_2D,
      a,
      l,
      e[0],
      e[1],
      c,
      h,
      u,
      t
    ) : t ? s.texImage2D(s.TEXTURE_2D, a, l, h, u, t) : s.texImage2D(
      s.TEXTURE_2D,
      a,
      l,
      e[0],
      e[1],
      c,
      h,
      u,
      null
    ), n;
  }
}
function Eh(i) {
  let e = 0;
  for (let t = 0; t < i.length; t++) {
    const n = i[t];
    e += n.size * qs(n.type);
  }
  return e;
}
function qs(i) {
  switch (i) {
    case It.UNSIGNED_BYTE:
      return Uint8Array.BYTES_PER_ELEMENT;
    case It.UNSIGNED_SHORT:
      return Uint16Array.BYTES_PER_ELEMENT;
    case It.UNSIGNED_INT:
      return Uint32Array.BYTES_PER_ELEMENT;
    case It.FLOAT:
    default:
      return Float32Array.BYTES_PER_ELEMENT;
  }
}
class Vi extends Hs {
  /**
   * @param {LayerType} layer Layer.
   * @param {Options} [options] Options.
   */
  constructor(e, t) {
    super(e), t = t || {}, this.inversePixelTransform_ = Be(), this.postProcesses_ = t.postProcesses, this.uniforms_ = t.uniforms, this.helper, this.onMapChanged_ = () => {
      this.clearCache(), this.removeHelper();
    }, e.addChangeListener(X.MAP, this.onMapChanged_), this.dispatchPreComposeEvent = this.dispatchPreComposeEvent.bind(this), this.dispatchPostComposeEvent = this.dispatchPostComposeEvent.bind(this);
  }
  /**
   * @param {WebGLRenderingContext} context The WebGL rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  dispatchPreComposeEvent(e, t) {
    const n = this.getLayer();
    if (n.hasListener(Ee.PRECOMPOSE)) {
      const r = new Qt(
        Ee.PRECOMPOSE,
        void 0,
        t,
        e
      );
      n.dispatchEvent(r);
    }
  }
  /**
   * @param {WebGLRenderingContext} context The WebGL rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  dispatchPostComposeEvent(e, t) {
    const n = this.getLayer();
    if (n.hasListener(Ee.POSTCOMPOSE)) {
      const r = new Qt(
        Ee.POSTCOMPOSE,
        void 0,
        t,
        e
      );
      n.dispatchEvent(r);
    }
  }
  /**
   * Reset options (only handles uniforms).
   * @param {Options} options Options.
   */
  reset(e) {
    this.uniforms_ = e.uniforms, this.helper && this.helper.setUniforms(this.uniforms_);
  }
  /**
   * @protected
   */
  removeHelper() {
    this.helper && (this.helper.dispose(), delete this.helper);
  }
  /**
   * Determine whether renderFrame should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrame(e) {
    if (this.getLayer().getRenderSource()) {
      let t = !0, n = -1, r;
      for (let o = 0, a = e.layerStatesArray.length; o < a; o++) {
        const l = e.layerStatesArray[o].layer, c = l.getRenderer();
        if (!(c instanceof Vi)) {
          t = !0;
          continue;
        }
        const h = l.getClassName();
        if ((t || h !== r) && (n += 1, t = !1), r = h, c === this)
          break;
      }
      const s = "map/" + e.mapId + "/group/" + n;
      (!this.helper || !this.helper.canvasCacheKeyMatches(s) || this.helper.needsToBeRecreated()) && (this.removeHelper(), this.helper = new yh({
        postProcesses: this.postProcesses_,
        uniforms: this.uniforms_,
        canvasCacheKey: s
      }), r && (this.helper.getCanvas().className = r), this.afterHelperCreated());
    }
    return this.prepareFrameInternal(e);
  }
  /**
   * @protected
   */
  afterHelperCreated() {
  }
  /**
   * Determine whether renderFrame should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @protected
   */
  prepareFrameInternal(e) {
    return !0;
  }
  /**
   * @protected
   */
  clearCache() {
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    var e;
    this.clearCache(), this.removeHelper(), (e = this.getLayer()) == null || e.removeChangeListener(
      X.MAP,
      this.onMapChanged_
    ), super.disposeInternal();
  }
  /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {WebGLRenderingContext} context The rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @private
   */
  dispatchRenderEvent_(e, t, n) {
    const r = this.getLayer();
    if (r.hasListener(e)) {
      mt(
        this.inversePixelTransform_,
        0,
        0,
        n.pixelRatio,
        -n.pixelRatio,
        0,
        0,
        -n.size[1]
      );
      const s = new Qt(
        e,
        this.inversePixelTransform_,
        n,
        t
      );
      r.dispatchEvent(s);
    }
  }
  /**
   * @param {WebGLRenderingContext} context The rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  preRender(e, t) {
    this.dispatchRenderEvent_(Ee.PRERENDER, e, t);
  }
  /**
   * @param {WebGLRenderingContext} context The rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  postRender(e, t) {
    this.dispatchRenderEvent_(Ee.POSTRENDER, e, t);
  }
}
const Th = {
  TILE_TRANSFORM: "u_tileTransform",
  TRANSITION_ALPHA: "u_transitionAlpha",
  DEPTH: "u_depth",
  RENDER_EXTENT: "u_renderExtent",
  // intersection of layer, source, and view extent
  PATTERN_ORIGIN: "u_patternOrigin",
  RESOLUTION: "u_resolution",
  ZOOM: "u_zoom",
  GLOBAL_ALPHA: "u_globalAlpha",
  PROJECTION_MATRIX: "u_projectionMatrix",
  SCREEN_TO_WORLD_MATRIX: "u_screenToWorldMatrix"
}, xh = {};
function Or(i) {
  return 1 / (i + 2);
}
function Rh() {
  return { tileIds: /* @__PURE__ */ new Set(), representationsByZ: {} };
}
function Lr(i, e) {
  return i.tileIds.has(fe(e));
}
function Fr(i, e, t) {
  const n = i.representationsByZ;
  t in n || (n[t] = /* @__PURE__ */ new Set()), n[t].add(e), i.tileIds.add(fe(e.tile));
}
function Un(i, e) {
  const t = i.layerStatesArray[i.layerIndex];
  t.extent && (e = ge(
    e,
    ke(t.extent, i.viewState.projection)
  ));
  const n = (
    /** @type {import("../../source/Tile.js").default} */
    t.layer.getRenderSource()
  );
  if (!n.getWrapX()) {
    const r = n.getTileGridForProjection(i.viewState.projection).getExtent();
    r && (e = ge(e, r));
  }
  return e;
}
function ni(i, e) {
  return `${i.getKey()},${Ye(e)}`;
}
class wh extends Vi {
  /**
   * @param {LayerType} tileLayer Tile layer.
   * @param {Options} options Options.
   */
  constructor(e, t) {
    super(e, {
      uniforms: t.uniforms,
      postProcesses: t.postProcesses
    }), this.renderComplete = !1, this.tileTransform_ = Be(), this.tempMat4 = Zs(), this.tempTileRange_ = new _i(0, 0, 0, 0), this.tempTileCoord_ = ln(0, 0, 0), this.tempSize_ = [0, 0];
    const n = t.cacheSize !== void 0 ? t.cacheSize : 512;
    this.tileRepresentationCache = new rs(n), this.frameState = null, this.projection_ = void 0;
  }
  /**
   * @param {Options} options Options.
   * @override
   */
  reset(e) {
    super.reset({
      uniforms: e.uniforms
    });
  }
  /**
   * Determine whether renderFrame should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrameInternal(e) {
    this.projection_ ? e.viewState.projection !== this.projection_ && (this.clearCache(), this.projection_ = e.viewState.projection) : this.projection_ = e.viewState.projection;
    const n = this.getLayer().getRenderSource();
    return !n || He(Un(e, e.extent)) ? !1 : n.getState() === "ready";
  }
  /**
   * @abstract
   * @param {import("../../webgl/BaseTileRepresentation.js").TileRepresentationOptions<TileType>} options tile representation options
   * @return {TileRepresentation} A new tile representation
   * @protected
   */
  createTileRepresentation(e) {
    return V();
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent The extent to be rendered.
   * @param {number} initialZ The zoom level.
   * @param {TileRepresentationLookup} tileRepresentationLookup The zoom level.
   * @param {number} preload Number of additional levels to load.
   */
  enqueueTiles(e, t, n, r, s) {
    const o = e.viewState, a = this.getLayer(), l = a.getRenderSource(), c = l.getTileGridForProjection(o.projection), h = l.getGutterForProjection(o.projection), u = fe(l);
    u in e.wantedTiles || (e.wantedTiles[u] = {});
    const f = e.wantedTiles[u], g = this.tileRepresentationCache, m = a.getMapInternal(), d = Math.max(
      n - s,
      c.getMinZoom(),
      c.getZForResolution(
        Math.min(
          a.getMaxResolution(),
          m ? m.getView().getResolutionForZoom(Math.max(a.getMinZoom(), 0)) : c.getResolution(0)
        ),
        l.zDirection
      )
    );
    for (let p = n; p >= d; --p) {
      const y = c.getTileRangeForExtentAndZ(
        t,
        p,
        this.tempTileRange_
      ), _ = c.getResolution(p);
      for (let R = y.minX; R <= y.maxX; ++R)
        for (let T = y.minY; T <= y.maxY; ++T) {
          const x = ln(p, R, T, this.tempTileCoord_), I = ni(l, x);
          let w, E;
          if (g.containsKey(I) && (w = g.get(I), E = w.tile), (!w || w.tile.key !== l.getKey()) && (E = l.getTile(
            p,
            R,
            T,
            e.pixelRatio,
            o.projection
          ), !E) || Lr(r, E))
            continue;
          w ? w.setTile(E) : (w = this.createTileRepresentation({
            tile: E,
            grid: c,
            helper: this.helper,
            gutter: h
          }), g.set(I, w)), Fr(
            r,
            w,
            p
          );
          const S = E.getKey();
          f[S] = !0, E.getState() === b.IDLE && (e.tileQueue.isKeyQueued(S) || e.tileQueue.enqueue([
            E,
            u,
            c.getTileCoordCenter(x),
            _
          ]));
        }
    }
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {boolean} tilesWithAlpha True if at least one of the rendered tiles has alpha
   * @protected
   */
  beforeTilesRender(e, t) {
    this.helper.prepareDraw(this.frameState, !t, !0);
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} If returns false, tile mask rendering will be skipped
   * @protected
   */
  beforeTilesMaskRender(e) {
    return !1;
  }
  /**
   * @param {TileRepresentation} tileRepresentation Tile representation
   * @param {import("../../transform.js").Transform} tileTransform Tile transform
   * @param {import("../../Map.js").FrameState} frameState Frame state
   * @param {import("../../extent.js").Extent} renderExtent Render extent
   * @param {number} tileResolution Tile resolution
   * @param {import("../../size.js").Size} tileSize Tile size
   * @param {import("../../coordinate.js").Coordinate} tileOrigin Tile origin
   * @param {import("../../extent.js").Extent} tileExtent tile Extent
   * @param {number} depth Depth
   * @param {number} gutter Gutter
   * @param {number} alpha Alpha
   * @protected
   */
  renderTile(e, t, n, r, s, o, a, l, c, h, u) {
  }
  /**
   * @param {TileRepresentation} tileRepresentation Tile representation
   * @param {number} tileZ Tile Z
   * @param {import("../../extent.js").Extent} extent Render extent
   * @param {number} depth Depth
   * @protected
   */
  renderTileMask(e, t, n, r) {
  }
  drawTile_(e, t, n, r, s, o, a) {
    if (!t.ready)
      return;
    const c = t.tile.tileCoord, h = Ye(c), u = h in o ? o[h] : 1, f = a.getResolution(n), g = se(a.getTileSize(n), this.tempSize_), m = a.getOrigin(n), d = a.getTileCoordExtent(c), p = u < 1 ? -1 : Or(n);
    u < 1 && (e.animate = !0);
    const y = e.viewState, _ = y.center[0], R = y.center[1], T = g[0] + 2 * r, x = g[1] + 2 * r, I = T / x, w = (_ - m[0]) / (g[0] * f), E = (m[1] - R) / (g[1] * f), S = y.resolution / f, v = c[1], A = c[2];
    wc(this.tileTransform_), Tr(
      this.tileTransform_,
      2 / (e.size[0] * S / T),
      -2 / (e.size[1] * S / T)
    ), Ic(this.tileTransform_, y.rotation), Tr(this.tileTransform_, 1, 1 / I), Cc(
      this.tileTransform_,
      (g[0] * (v - w) - r) / T,
      (g[1] * (A - E) - r) / x
    ), this.renderTile(
      /** @type {TileRepresentation} */
      t,
      this.tileTransform_,
      e,
      s,
      f,
      g,
      m,
      d,
      p,
      r,
      u
    );
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {HTMLElement} The rendered element.
   * @override
   */
  renderFrame(e) {
    this.frameState = e, this.renderComplete = !0;
    const t = this.helper.getGL();
    this.preRender(t, e);
    const n = e.viewState, r = this.getLayer(), s = r.getRenderSource(), o = s.getTileGridForProjection(n.projection), a = s.getGutterForProjection(n.projection), l = Un(e, e.extent), c = o.getZForResolution(
      n.resolution,
      s.zDirection
    ), h = Rh(), u = r.getPreload();
    if (e.nextExtent) {
      const I = o.getZForResolution(
        n.nextResolution,
        s.zDirection
      ), w = Un(e, e.nextExtent);
      this.enqueueTiles(
        e,
        w,
        I,
        h,
        u
      );
    }
    this.enqueueTiles(e, l, c, h, 0), u > 0 && setTimeout(() => {
      this.enqueueTiles(
        e,
        l,
        c - 1,
        h,
        u - 1
      );
    }, 0);
    const f = {}, g = fe(this), m = e.time;
    let d = !1;
    const p = h.representationsByZ;
    if (c in p)
      for (const I of p[c]) {
        const w = I.tile;
        if ((w instanceof Bi || w instanceof mi) && w.getState() === b.EMPTY)
          continue;
        const E = w.tileCoord;
        if (I.ready) {
          const A = w.getAlpha(g, m);
          if (A === 1) {
            w.endTransition(g);
            continue;
          }
          d = !0;
          const P = Ye(E);
          f[P] = A;
        }
        if (this.renderComplete = !1, this.findAltTiles_(
          o,
          E,
          c + 1,
          h
        ))
          continue;
        const v = o.getMinZoom();
        for (let A = c - 1; A >= v && !this.findAltTiles_(
          o,
          E,
          A,
          h
        ); --A)
          ;
      }
    const y = Object.keys(p).map(Number).sort(uo);
    if (this.beforeTilesMaskRender(e))
      for (let I = 0, w = y.length; I < w; ++I) {
        const E = y[I];
        for (const S of p[E]) {
          const v = S.tile.tileCoord;
          if (Ye(v) in f)
            continue;
          const P = o.getTileCoordExtent(v);
          this.renderTileMask(
            /** @type {TileRepresentation} */
            S,
            E,
            P,
            Or(E)
          );
        }
      }
    this.beforeTilesRender(e, d);
    for (let I = 0, w = y.length; I < w; ++I) {
      const E = y[I];
      for (const S of p[E]) {
        const v = S.tile.tileCoord;
        Ye(v) in f || this.drawTile_(
          e,
          S,
          E,
          a,
          l,
          f,
          o
        );
      }
    }
    if (c in p)
      for (const I of p[c]) {
        const w = I.tile.tileCoord;
        Ye(w) in f && this.drawTile_(
          e,
          I,
          c,
          a,
          l,
          f,
          o
        );
      }
    this.beforeFinalize(e), this.helper.finalizeDraw(
      e,
      this.dispatchPreComposeEvent,
      this.dispatchPostComposeEvent
    );
    const R = this.helper.getCanvas(), T = this.tileRepresentationCache;
    for (; T.canExpireCache(); )
      T.pop().dispose();
    const x = function(I, w) {
      s.expireCache(w.viewState.projection, xh);
    };
    return e.postRenderFunctions.push(x), this.postRender(t, e), R;
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  beforeFinalize(e) {
  }
  /**
   * Look for tiles covering the provided tile coordinate at an alternate
   * zoom level.  Loaded tiles will be added to the provided tile representation lookup.
   * @param {import("../../tilegrid/TileGrid.js").default} tileGrid The tile grid.
   * @param {import("../../tilecoord.js").TileCoord} tileCoord The target tile coordinate.
   * @param {number} altZ The alternate zoom level.
   * @param {TileRepresentationLookup} tileRepresentationLookup Lookup of
   * tile representations by zoom level.
   * @return {boolean} The tile coordinate is covered by loaded tiles at the alternate zoom level.
   * @private
   */
  findAltTiles_(e, t, n, r) {
    const s = e.getTileRangeForTileCoordAndZ(
      t,
      n,
      this.tempTileRange_
    );
    if (!s)
      return !1;
    let o = !0;
    const a = this.tileRepresentationCache, l = this.getLayer().getRenderSource();
    for (let c = s.minX; c <= s.maxX; ++c)
      for (let h = s.minY; h <= s.maxY; ++h) {
        const u = ni(l, [n, c, h]);
        let f = !1;
        if (a.containsKey(u)) {
          const g = a.get(u);
          g.ready && !Lr(r, g.tile) && (Fr(
            r,
            g,
            n
          ), f = !0);
        }
        f || (o = !1);
      }
    return o;
  }
  /**
   * @override
   */
  clearCache() {
    super.clearCache();
    const e = this.tileRepresentationCache;
    e.forEach(
      (t) => t.dispose()
    ), e.clear();
  }
  /**
   * @override
   */
  afterHelperCreated() {
    super.afterHelperCreated(), this.tileRepresentationCache.forEach(
      (e) => e.setHelper(this.helper)
    );
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    super.disposeInternal(), delete this.frameState;
  }
}
const D = {
  ...Th,
  TILE_TEXTURE_ARRAY: "u_tileTextures",
  TEXTURE_PIXEL_WIDTH: "u_texturePixelWidth",
  TEXTURE_PIXEL_HEIGHT: "u_texturePixelHeight",
  TEXTURE_RESOLUTION: "u_textureResolution",
  // map units per texture pixel
  TEXTURE_ORIGIN_X: "u_textureOriginX",
  // map x coordinate of left edge of texture
  TEXTURE_ORIGIN_Y: "u_textureOriginY"
  // map y coordinate of top edge of texture
}, en = {
  TEXTURE_COORD: "a_textureCoord"
}, Ih = [
  {
    name: en.TEXTURE_COORD,
    size: 2,
    type: It.FLOAT
  }
];
class Ch extends wh {
  /**
   * @param {LayerType} tileLayer Tile layer.
   * @param {Options} options Options.
   */
  constructor(e, t) {
    super(e, t), this.program_, this.vertexShader_ = t.vertexShader, this.fragmentShader_ = t.fragmentShader, this.indices_ = new Vs($i, Yi), this.indices_.fromArray([0, 1, 3, 1, 2, 3]), this.paletteTextures_ = t.paletteTextures || [];
  }
  /**
   * @param {Options} options Options.
   * @override
   */
  reset(e) {
    if (super.reset(e), this.helper) {
      const t = this.helper.getGL();
      for (const n of this.paletteTextures_)
        n.delete(t);
    }
    if (this.vertexShader_ = e.vertexShader, this.fragmentShader_ = e.fragmentShader, this.paletteTextures_ = e.paletteTextures || [], this.helper) {
      this.program_ = this.helper.getProgram(
        this.fragmentShader_,
        this.vertexShader_
      );
      const t = this.helper.getGL();
      for (const n of this.paletteTextures_)
        n.getTexture(t);
    }
  }
  /**
   * @override
   */
  afterHelperCreated() {
    super.afterHelperCreated();
    const e = this.helper.getGL();
    for (const t of this.paletteTextures_)
      t.getTexture(e);
    this.program_ = this.helper.getProgram(
      this.fragmentShader_,
      this.vertexShader_
    ), this.helper.flushBufferData(this.indices_);
  }
  /**
   * @override
   */
  removeHelper() {
    if (this.helper) {
      const e = this.helper.getGL();
      for (const t of this.paletteTextures_)
        t.delete(e);
    }
    super.removeHelper();
  }
  /**
   * @override
   */
  createTileRepresentation(e) {
    return new uh(e);
  }
  /**
   * @override
   */
  beforeTilesRender(e, t) {
    super.beforeTilesRender(e, t), this.helper.useProgram(this.program_, e);
  }
  /**
   * @override
   */
  renderTile(e, t, n, r, s, o, a, l, c, h, u) {
    const f = this.helper.getGL();
    this.helper.bindBuffer(e.coords), this.helper.bindBuffer(this.indices_), this.helper.enableAttributes(Ih);
    let g = 0;
    for (; g < e.textures.length; ) {
      const I = `${D.TILE_TEXTURE_ARRAY}[${g}]`;
      this.helper.bindTexture(
        e.textures[g],
        g,
        I
      ), ++g;
    }
    for (let I = 0; I < this.paletteTextures_.length; ++I) {
      const w = this.paletteTextures_[I], E = w.getTexture(f);
      this.helper.bindTexture(E, g, w.name), ++g;
    }
    const m = n.viewState, d = o[0] + 2 * h, p = o[1] + 2 * h, _ = e.tile.tileCoord, R = _[1], T = _[2];
    this.helper.setUniformMatrixValue(
      D.TILE_TRANSFORM,
      Ws(this.tempMat4, t)
    ), this.helper.setUniformFloatValue(D.TRANSITION_ALPHA, u), this.helper.setUniformFloatValue(D.DEPTH, c);
    let x = r;
    h > 0 && (x = l, ge(x, r, x)), this.helper.setUniformFloatVec4(D.RENDER_EXTENT, x), this.helper.setUniformFloatValue(D.RESOLUTION, m.resolution), this.helper.setUniformFloatValue(D.ZOOM, m.zoom), this.helper.setUniformFloatValue(
      D.TEXTURE_PIXEL_WIDTH,
      d
    ), this.helper.setUniformFloatValue(
      D.TEXTURE_PIXEL_HEIGHT,
      p
    ), this.helper.setUniformFloatValue(
      D.TEXTURE_RESOLUTION,
      s
    ), this.helper.setUniformFloatValue(
      D.TEXTURE_ORIGIN_X,
      a[0] + R * o[0] * s - h * s
    ), this.helper.setUniformFloatValue(
      D.TEXTURE_ORIGIN_Y,
      a[1] - T * o[1] * s + h * s
    ), this.helper.drawElements(0, this.indices_.getSize());
  }
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView} Data at the pixel location.
   * @override
   */
  getData(e) {
    if (!this.helper.getGL())
      return null;
    const n = this.frameState;
    if (!n)
      return null;
    const r = this.getLayer(), s = Ae(
      n.pixelToCoordinateTransform,
      e.slice()
    ), o = n.viewState, a = r.getExtent();
    if (a && !Mt(
      ke(a, o.projection),
      s
    ))
      return null;
    const l = r.getSources(
      Kn([s]),
      o.resolution
    );
    let c, h, u;
    for (c = l.length - 1; c >= 0; --c)
      if (h = l[c], h.getState() === "ready") {
        if (u = h.getTileGridForProjection(o.projection), h.getWrapX())
          break;
        const g = u.getExtent();
        if (!g || Mt(g, s))
          break;
      }
    if (c < 0)
      return null;
    const f = this.tileRepresentationCache;
    for (let g = u.getZForResolution(o.resolution); g >= u.getMinZoom(); --g) {
      const m = u.getTileCoordForCoordAndZ(s, g), d = ni(h, m);
      if (!f.containsKey(d))
        continue;
      const p = f.get(d), y = p.tile;
      if ((y instanceof Bi || y instanceof mi) && y.getState() === b.EMPTY)
        return null;
      if (!p.loaded)
        continue;
      const _ = u.getOrigin(g), R = se(u.getTileSize(g)), T = u.getResolution(g), x = (s[0] - _[0]) / T - m[1] * R[0], I = (_[1] - s[1]) / T - m[2] * R[1];
      return p.getPixelData(x, I);
    }
    return null;
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    const e = this.helper;
    if (e) {
      const t = e.getGL();
      for (const n of this.paletteTextures_)
        n.delete(t);
      this.paletteTextures_.length = 0, t.deleteProgram(this.program_), delete this.program_, e.deleteBuffer(this.indices_);
    }
    super.disposeInternal(), delete this.indices_;
  }
}
const fn = {
  name: "rgb",
  min: [0, 0, 0],
  max: [255, 255, 255],
  channel: ["red", "green", "blue"],
  alias: ["RGB"]
};
var oe = {
  name: "xyz",
  min: [0, 0, 0],
  channel: ["X", "Y", "Z"],
  alias: ["XYZ", "ciexyz", "cie1931"]
};
oe.whitepoint = {
  //1931 2°
  2: {
    //incadescent
    A: [109.85, 100, 35.585],
    // B:[],
    C: [98.074, 100, 118.232],
    D50: [96.422, 100, 82.521],
    D55: [95.682, 100, 92.149],
    //daylight
    D65: [95.045592705167, 100, 108.9057750759878],
    D75: [94.972, 100, 122.638],
    //flourescent
    // F1: [],
    F2: [99.187, 100, 67.395],
    // F3: [],
    // F4: [],
    // F5: [],
    // F6:[],
    F7: [95.044, 100, 108.755],
    // F8: [],
    // F9: [],
    // F10: [],
    F11: [100.966, 100, 64.37],
    // F12: [],
    E: [100, 100, 100]
  },
  //1964  10°
  10: {
    //incadescent
    A: [111.144, 100, 35.2],
    C: [97.285, 100, 116.145],
    D50: [96.72, 100, 81.427],
    D55: [95.799, 100, 90.926],
    //daylight
    D65: [94.811, 100, 107.304],
    D75: [94.416, 100, 120.641],
    //flourescent
    F2: [103.28, 100, 69.026],
    F7: [95.792, 100, 107.687],
    F11: [103.866, 100, 65.627],
    E: [100, 100, 100]
  }
};
oe.max = oe.whitepoint[2].D65;
oe.rgb = function(i, e) {
  e = e || oe.whitepoint[2].E;
  var t = i[0] / e[0], n = i[1] / e[1], r = i[2] / e[2], s, o, a;
  return s = t * 3.240969941904521 + n * -1.537383177570093 + r * -0.498610760293, o = t * -0.96924363628087 + n * 1.87596750150772 + r * 0.041555057407175, a = t * 0.055630079696993 + n * -0.20397695888897 + r * 1.056971514242878, s = s > 31308e-7 ? 1.055 * Math.pow(s, 1 / 2.4) - 0.055 : s = s * 12.92, o = o > 31308e-7 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : o = o * 12.92, a = a > 31308e-7 ? 1.055 * Math.pow(a, 1 / 2.4) - 0.055 : a = a * 12.92, s = Math.min(Math.max(0, s), 1), o = Math.min(Math.max(0, o), 1), a = Math.min(Math.max(0, a), 1), [s * 255, o * 255, a * 255];
};
fn.xyz = function(i, e) {
  var t = i[0] / 255, n = i[1] / 255, r = i[2] / 255;
  t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92, n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92, r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  var s = t * 0.41239079926595 + n * 0.35758433938387 + r * 0.18048078840183, o = t * 0.21263900587151 + n * 0.71516867876775 + r * 0.072192315360733, a = t * 0.019330818715591 + n * 0.11919477979462 + r * 0.95053215224966;
  return e = e || oe.whitepoint[2].E, [s * e[0], o * e[1], a * e[2]];
};
const Js = {
  name: "luv",
  //NOTE: luv has no rigidly defined limits
  //easyrgb fails to get proper coords
  //boronine states no rigid limits
  //colorMine refers this ones:
  min: [0, -134, -140],
  max: [100, 224, 122],
  channel: ["lightness", "u", "v"],
  alias: ["LUV", "cieluv", "cie1976"],
  xyz: function(i, e, t) {
    var n, r, s, o, a, l, c, h, u, f, g, m, d;
    if (s = i[0], o = i[1], a = i[2], s === 0)
      return [0, 0, 0];
    var p = 0.0011070564598794539;
    return e = e || "D65", t = t || 2, u = oe.whitepoint[t][e][0], f = oe.whitepoint[t][e][1], g = oe.whitepoint[t][e][2], m = 4 * u / (u + 15 * f + 3 * g), d = 9 * f / (u + 15 * f + 3 * g), n = o / (13 * s) + m || 0, r = a / (13 * s) + d || 0, c = s > 8 ? f * Math.pow((s + 16) / 116, 3) : f * s * p, l = c * 9 * n / (4 * r) || 0, h = c * (12 - 3 * n - 20 * r) / (4 * r) || 0, [l, c, h];
  }
};
oe.luv = function(i, e, t) {
  var n, r, s, o, a, l, c, h, u, f, g, m, d, p = 0.008856451679035631, y = 903.2962962962961;
  e = e || "D65", t = t || 2, u = oe.whitepoint[t][e][0], f = oe.whitepoint[t][e][1], g = oe.whitepoint[t][e][2], m = 4 * u / (u + 15 * f + 3 * g), d = 9 * f / (u + 15 * f + 3 * g), l = i[0], c = i[1], h = i[2], n = 4 * l / (l + 15 * c + 3 * h) || 0, r = 9 * c / (l + 15 * c + 3 * h) || 0;
  var _ = c / f;
  return s = _ <= p ? y * _ : 116 * Math.pow(_, 1 / 3) - 16, o = 13 * s * (n - m), a = 13 * s * (r - d), [s, o, a];
};
Js.lchuv = function(i) {
  var e = i[0], t = i[1], n = i[2], r = Math.sqrt(t * t + n * n), s = Math.atan2(n, t), o = s * 360 / 2 / Math.PI;
  return o < 0 && (o += 360), [e, r, o];
};
oe.lchuv = function(i) {
  return Js.lchuv(oe.luv(i));
};
const Nr = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
var Gr = {
  red: 0,
  orange: 60,
  yellow: 120,
  green: 180,
  blue: 240,
  purple: 300
};
function Sh(i) {
  var h, u;
  var e, t = [], n = 1, r;
  if (typeof i == "number")
    return { space: "rgb", values: [i >>> 16, (i & 65280) >>> 8, i & 255], alpha: 1 };
  if (typeof i == "number")
    return { space: "rgb", values: [i >>> 16, (i & 65280) >>> 8, i & 255], alpha: 1 };
  if (i = String(i).toLowerCase(), Nr[i])
    t = Nr[i].slice(), r = "rgb";
  else if (i === "transparent")
    n = 0, r = "rgb", t = [0, 0, 0];
  else if (i[0] === "#") {
    var s = i.slice(1), o = s.length, a = o <= 4;
    n = 1, a ? (t = [
      parseInt(s[0] + s[0], 16),
      parseInt(s[1] + s[1], 16),
      parseInt(s[2] + s[2], 16)
    ], o === 4 && (n = parseInt(s[3] + s[3], 16) / 255)) : (t = [
      parseInt(s[0] + s[1], 16),
      parseInt(s[2] + s[3], 16),
      parseInt(s[4] + s[5], 16)
    ], o === 8 && (n = parseInt(s[6] + s[7], 16) / 255)), t[0] || (t[0] = 0), t[1] || (t[1] = 0), t[2] || (t[2] = 0), r = "rgb";
  } else if (e = /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(i)) {
    var l = e[1];
    r = l.replace(/a$/, "");
    var c = r === "cmyk" ? 4 : r === "gray" ? 1 : 3;
    t = e[2].trim().split(/\s*[,\/]\s*|\s+/), r === "color" && (r = t.shift()), t = t.map(function(f, g) {
      if (f[f.length - 1] === "%")
        return f = parseFloat(f) / 100, g === 3 ? f : r === "rgb" ? f * 255 : r[0] === "h" || r[0] === "l" && !g ? f * 100 : r === "lab" ? f * 125 : r === "lch" ? g < 2 ? f * 150 : f * 360 : r[0] === "o" && !g ? f : r === "oklab" ? f * 0.4 : r === "oklch" ? g < 2 ? f * 0.4 : f * 360 : f;
      if (r[g] === "h" || g === 2 && r[r.length - 1] === "h") {
        if (Gr[f] !== void 0)
          return Gr[f];
        if (f.endsWith("deg"))
          return parseFloat(f);
        if (f.endsWith("turn"))
          return parseFloat(f) * 360;
        if (f.endsWith("grad"))
          return parseFloat(f) * 360 / 400;
        if (f.endsWith("rad"))
          return parseFloat(f) * 180 / Math.PI;
      }
      return f === "none" ? 0 : parseFloat(f);
    }), n = t.length > c ? t.pop() : 1;
  } else
    /[0-9](?:\s|\/|,)/.test(i) && (t = i.match(/([0-9]+)/g).map(function(f) {
      return parseFloat(f);
    }), r = ((u = (h = i.match(/([a-z])/ig)) == null ? void 0 : h.join("")) == null ? void 0 : u.toLowerCase()) || "rgb");
  return {
    space: r,
    values: t,
    alpha: n
  };
}
const Xn = {
  name: "hsl",
  min: [0, 0, 0],
  max: [360, 100, 100],
  channel: ["hue", "saturation", "lightness"],
  alias: ["HSL"],
  rgb: function(i) {
    var e = i[0] / 360, t = i[1] / 100, n = i[2] / 100, r, s, o, a, l, c = 0;
    if (t === 0)
      return l = n * 255, [l, l, l];
    for (s = n < 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - s, a = [0, 0, 0]; c < 3; )
      o = e + 1 / 3 * -(c - 1), o < 0 ? o++ : o > 1 && o--, l = 6 * o < 1 ? r + (s - r) * 6 * o : 2 * o < 1 ? s : 3 * o < 2 ? r + (s - r) * (2 / 3 - o) * 6 : r, a[c++] = l * 255;
    return a;
  }
};
fn.hsl = function(i) {
  var e = i[0] / 255, t = i[1] / 255, n = i[2] / 255, r = Math.min(e, t, n), s = Math.max(e, t, n), o = s - r, a, l, c;
  return s === r ? a = 0 : e === s ? a = (t - n) / o : t === s ? a = 2 + (n - e) / o : n === s && (a = 4 + (e - t) / o), a = Math.min(a * 60, 360), a < 0 && (a += 360), c = (r + s) / 2, s === r ? l = 0 : c <= 0.5 ? l = o / (s + r) : l = o / (2 - s - r), [a, l * 100, c * 100];
};
function bh(i) {
  Array.isArray(i) && i.raw && (i = String.raw(...arguments)), i instanceof Number && (i = +i);
  var e, t = Sh(i);
  if (!t.space)
    return [];
  const n = t.space[0] === "h" ? Xn.min : fn.min, r = t.space[0] === "h" ? Xn.max : fn.max;
  return e = Array(3), e[0] = Math.min(Math.max(t.values[0], n[0]), r[0]), e[1] = Math.min(Math.max(t.values[1], n[1]), r[1]), e[2] = Math.min(Math.max(t.values[2], n[2]), r[2]), t.space[0] === "h" && (e = Xn.rgb(e)), e.push(Math.min(Math.max(t.alpha, 0), 1)), e;
}
const Ah = [NaN, NaN, NaN, 0], vh = 1024, xt = {};
let kn = 0;
function Qs(i) {
  if (i === "none")
    return Ah;
  if (xt.hasOwnProperty(i))
    return xt[i];
  if (kn >= vh) {
    let t = 0;
    for (const n in xt)
      t++ & 3 || (delete xt[n], --kn);
  }
  const e = bh(i);
  if (e.length !== 4)
    throw new Error('failed to parse "' + i + '" as color');
  for (const t of e)
    if (isNaN(t))
      throw new Error('failed to parse "' + i + '" as color');
  return Mh(e), xt[i] = e, ++kn, e;
}
function gn(i) {
  return Array.isArray(i) ? i : Qs(i);
}
function Mh(i) {
  return i[0] = H(i[0] + 0.5 | 0, 0, 255), i[1] = H(i[1] + 0.5 | 0, 0, 255), i[2] = H(i[2] + 0.5 | 0, 0, 255), i[3] = H(i[3], 0, 1), i;
}
let Ze = 0;
const ue = 1 << Ze++, N = 1 << Ze++, re = 1 << Ze++, ve = 1 << Ze++, dn = 1 << Ze++, ct = 1 << Ze++, Zt = Math.pow(2, Ze) - 1, Ki = {
  [ue]: "boolean",
  [N]: "number",
  [re]: "string",
  [ve]: "color",
  [dn]: "number[]",
  [ct]: "size"
}, Ph = Object.keys(Ki).map(Number).sort(ri);
function Dh(i) {
  return i in Ki;
}
function ht(i) {
  const e = [];
  for (const t of Ph)
    Ct(i, t) && e.push(Ki[t]);
  return e.length === 0 ? "untyped" : e.length < 3 ? e.join(" or ") : e.slice(0, -1).join(", ") + ", or " + e[e.length - 1];
}
function Ct(i, e) {
  return (i & e) === e;
}
function Ue(i, e) {
  return i === e;
}
class W {
  /**
   * @param {number} type The value type.
   * @param {LiteralValue} value The literal value.
   */
  constructor(e, t) {
    if (!Dh(e))
      throw new Error(
        `literal expressions must have a specific type, got ${ht(e)}`
      );
    this.type = e, this.value = t;
  }
}
class eo {
  /**
   * @param {number} type The return type.
   * @param {string} operator The operator.
   * @param {...Expression} args The arguments.
   */
  constructor(e, t, ...n) {
    this.type = e, this.operator = t, this.args = n;
  }
}
function Oh() {
  return {
    variables: /* @__PURE__ */ new Set(),
    properties: /* @__PURE__ */ new Set(),
    featureId: !1,
    geometryType: !1
  };
}
function ee(i, e, t) {
  switch (typeof i) {
    case "boolean": {
      if (Ue(e, re))
        return new W(re, i ? "true" : "false");
      if (!Ct(e, ue))
        throw new Error(
          `got a boolean, but expected ${ht(e)}`
        );
      return new W(ue, i);
    }
    case "number": {
      if (Ue(e, ct))
        return new W(ct, se(i));
      if (Ue(e, ue))
        return new W(ue, !!i);
      if (Ue(e, re))
        return new W(re, i.toString());
      if (!Ct(e, N))
        throw new Error(`got a number, but expected ${ht(e)}`);
      return new W(N, i);
    }
    case "string": {
      if (Ue(e, ve))
        return new W(ve, Qs(i));
      if (Ue(e, ue))
        return new W(ue, !!i);
      if (!Ct(e, re))
        throw new Error(`got a string, but expected ${ht(e)}`);
      return new W(re, i);
    }
  }
  if (!Array.isArray(i))
    throw new Error("expression must be an array or a primitive value");
  if (i.length === 0)
    throw new Error("empty expression");
  if (typeof i[0] == "string")
    return $h(i, e, t);
  for (const n of i)
    if (typeof n != "number")
      throw new Error("expected an array of numbers");
  if (Ue(e, ct)) {
    if (i.length !== 2)
      throw new Error(
        `expected an array of two values for a size, got ${i.length}`
      );
    return new W(ct, i);
  }
  if (Ue(e, ve)) {
    if (i.length === 3)
      return new W(ve, [...i, 1]);
    if (i.length === 4)
      return new W(ve, i);
    throw new Error(
      `expected an array of 3 or 4 values for a color, got ${i.length}`
    );
  }
  if (!Ct(e, dn))
    throw new Error(
      `got an array of numbers, but expected ${ht(e)}`
    );
  return new W(dn, i);
}
const C = {
  Get: "get",
  Var: "var",
  Concat: "concat",
  GeometryType: "geometry-type",
  LineMetric: "line-metric",
  Any: "any",
  All: "all",
  Not: "!",
  Resolution: "resolution",
  Zoom: "zoom",
  Time: "time",
  Equal: "==",
  NotEqual: "!=",
  GreaterThan: ">",
  GreaterThanOrEqualTo: ">=",
  LessThan: "<",
  LessThanOrEqualTo: "<=",
  Multiply: "*",
  Divide: "/",
  Add: "+",
  Subtract: "-",
  Clamp: "clamp",
  Mod: "%",
  Pow: "^",
  Abs: "abs",
  Floor: "floor",
  Ceil: "ceil",
  Round: "round",
  Sin: "sin",
  Cos: "cos",
  Atan: "atan",
  Sqrt: "sqrt",
  Match: "match",
  Between: "between",
  Interpolate: "interpolate",
  Coalesce: "coalesce",
  Case: "case",
  In: "in",
  Number: "number",
  String: "string",
  Array: "array",
  Color: "color",
  Id: "id",
  Band: "band",
  Palette: "palette",
  ToString: "to-string",
  Has: "has"
}, Lh = {
  [C.Get]: M(L(1, 1 / 0), Ur),
  [C.Var]: M(L(1, 1), Fh),
  [C.Has]: M(L(1, 1 / 0), Ur),
  [C.Id]: M(Nh, it),
  [C.Concat]: M(
    L(2, 1 / 0),
    k(re)
  ),
  [C.GeometryType]: M(Gh, it),
  [C.LineMetric]: M(it),
  [C.Resolution]: M(it),
  [C.Zoom]: M(it),
  [C.Time]: M(it),
  [C.Any]: M(
    L(2, 1 / 0),
    k(ue)
  ),
  [C.All]: M(
    L(2, 1 / 0),
    k(ue)
  ),
  [C.Not]: M(
    L(1, 1),
    k(ue)
  ),
  [C.Equal]: M(
    L(2, 2),
    k(Zt)
  ),
  [C.NotEqual]: M(
    L(2, 2),
    k(Zt)
  ),
  [C.GreaterThan]: M(
    L(2, 2),
    k(N)
  ),
  [C.GreaterThanOrEqualTo]: M(
    L(2, 2),
    k(N)
  ),
  [C.LessThan]: M(
    L(2, 2),
    k(N)
  ),
  [C.LessThanOrEqualTo]: M(
    L(2, 2),
    k(N)
  ),
  [C.Multiply]: M(
    L(2, 1 / 0),
    Xr
  ),
  [C.Coalesce]: M(
    L(2, 1 / 0),
    Xr
  ),
  [C.Divide]: M(
    L(2, 2),
    k(N)
  ),
  [C.Add]: M(
    L(2, 1 / 0),
    k(N)
  ),
  [C.Subtract]: M(
    L(2, 2),
    k(N)
  ),
  [C.Clamp]: M(
    L(3, 3),
    k(N)
  ),
  [C.Mod]: M(
    L(2, 2),
    k(N)
  ),
  [C.Pow]: M(
    L(2, 2),
    k(N)
  ),
  [C.Abs]: M(
    L(1, 1),
    k(N)
  ),
  [C.Floor]: M(
    L(1, 1),
    k(N)
  ),
  [C.Ceil]: M(
    L(1, 1),
    k(N)
  ),
  [C.Round]: M(
    L(1, 1),
    k(N)
  ),
  [C.Sin]: M(
    L(1, 1),
    k(N)
  ),
  [C.Cos]: M(
    L(1, 1),
    k(N)
  ),
  [C.Atan]: M(
    L(1, 2),
    k(N)
  ),
  [C.Sqrt]: M(
    L(1, 1),
    k(N)
  ),
  [C.Match]: M(
    L(4, 1 / 0),
    kr,
    Xh
  ),
  [C.Between]: M(
    L(3, 3),
    k(N)
  ),
  [C.Interpolate]: M(
    L(6, 1 / 0),
    kr,
    kh
  ),
  [C.Case]: M(
    L(3, 1 / 0),
    Uh,
    Bh
  ),
  [C.In]: M(L(2, 2), zh),
  [C.Number]: M(
    L(1, 1 / 0),
    k(Zt)
  ),
  [C.String]: M(
    L(1, 1 / 0),
    k(Zt)
  ),
  [C.Array]: M(
    L(1, 1 / 0),
    k(N)
  ),
  [C.Color]: M(
    L(1, 4),
    k(N)
  ),
  [C.Band]: M(
    L(1, 3),
    k(N)
  ),
  [C.Palette]: M(
    L(2, 2),
    jh
  ),
  [C.ToString]: M(
    L(1, 1),
    k(ue | N | re | ve)
  )
};
function Ur(i, e, t) {
  const n = i.length - 1, r = new Array(n);
  for (let s = 0; s < n; ++s) {
    const o = i[s + 1];
    switch (typeof o) {
      case "number": {
        r[s] = new W(N, o);
        break;
      }
      case "string": {
        r[s] = new W(re, o);
        break;
      }
      default:
        throw new Error(
          `expected a string key or numeric array index for a get operation, got ${o}`
        );
    }
    s === 0 && t.properties.add(String(o));
  }
  return r;
}
function Fh(i, e, t) {
  const n = i[1];
  if (typeof n != "string")
    throw new Error("expected a string argument for var operation");
  return t.variables.add(n), [new W(re, n)];
}
function Nh(i, e, t) {
  t.featureId = !0;
}
function Gh(i, e, t) {
  t.geometryType = !0;
}
function it(i, e, t) {
  const n = i[0];
  if (i.length !== 1)
    throw new Error(`expected no arguments for ${n} operation`);
  return [];
}
function L(i, e) {
  return function(t, n, r) {
    const s = t[0], o = t.length - 1;
    if (i === e) {
      if (o !== i) {
        const a = i === 1 ? "" : "s";
        throw new Error(
          `expected ${i} argument${a} for ${s}, got ${o}`
        );
      }
    } else if (o < i || o > e) {
      const a = e === 1 / 0 ? `${i} or more` : `${i} to ${e}`;
      throw new Error(
        `expected ${a} arguments for ${s}, got ${o}`
      );
    }
  };
}
function Xr(i, e, t) {
  const n = i.length - 1, r = new Array(n);
  for (let s = 0; s < n; ++s) {
    const o = ee(i[s + 1], e, t);
    r[s] = o;
  }
  return r;
}
function k(i) {
  return function(e, t, n) {
    const r = e.length - 1, s = new Array(r);
    for (let o = 0; o < r; ++o) {
      const a = ee(e[o + 1], i, n);
      s[o] = a;
    }
    return s;
  };
}
function Uh(i, e, t) {
  const n = i[0], r = i.length - 1;
  if (r % 2 === 0)
    throw new Error(
      `expected an odd number of arguments for ${n}, got ${r} instead`
    );
}
function kr(i, e, t) {
  const n = i[0], r = i.length - 1;
  if (r % 2 === 1)
    throw new Error(
      `expected an even number of arguments for operation ${n}, got ${r} instead`
    );
}
function Xh(i, e, t) {
  const n = i.length - 1, r = re | N | ue, s = ee(i[1], r, t), o = ee(i[i.length - 1], e, t), a = new Array(n - 2);
  for (let l = 0; l < n - 2; l += 2) {
    try {
      const c = ee(i[l + 2], s.type, t);
      a[l] = c;
    } catch (c) {
      throw new Error(
        `failed to parse argument ${l + 1} of match expression: ${c.message}`
      );
    }
    try {
      const c = ee(i[l + 3], o.type, t);
      a[l + 1] = c;
    } catch (c) {
      throw new Error(
        `failed to parse argument ${l + 2} of match expression: ${c.message}`
      );
    }
  }
  return [s, ...a, o];
}
function kh(i, e, t) {
  const n = i[1];
  let r;
  switch (n[0]) {
    case "linear":
      r = 1;
      break;
    case "exponential":
      const l = n[1];
      if (typeof l != "number" || l <= 0)
        throw new Error(
          `expected a number base for exponential interpolation, got ${JSON.stringify(l)} instead`
        );
      r = l;
      break;
    default:
      throw new Error(
        `invalid interpolation type: ${JSON.stringify(n)}`
      );
  }
  const s = new W(N, r);
  let o;
  try {
    o = ee(i[2], N, t);
  } catch (l) {
    throw new Error(
      `failed to parse argument 1 in interpolate expression: ${l.message}`
    );
  }
  const a = new Array(i.length - 3);
  for (let l = 0; l < a.length; l += 2) {
    try {
      const c = ee(i[l + 3], N, t);
      a[l] = c;
    } catch (c) {
      throw new Error(
        `failed to parse argument ${l + 2} for interpolate expression: ${c.message}`
      );
    }
    try {
      const c = ee(i[l + 4], e, t);
      a[l + 1] = c;
    } catch (c) {
      throw new Error(
        `failed to parse argument ${l + 3} for interpolate expression: ${c.message}`
      );
    }
  }
  return [s, o, ...a];
}
function Bh(i, e, t) {
  const n = ee(i[i.length - 1], e, t), r = new Array(i.length - 1);
  for (let s = 0; s < r.length - 1; s += 2) {
    try {
      const o = ee(i[s + 1], ue, t);
      r[s] = o;
    } catch (o) {
      throw new Error(
        `failed to parse argument ${s} of case expression: ${o.message}`
      );
    }
    try {
      const o = ee(i[s + 2], n.type, t);
      r[s + 1] = o;
    } catch (o) {
      throw new Error(
        `failed to parse argument ${s + 1} of case expression: ${o.message}`
      );
    }
  }
  return r[r.length - 1] = n, r;
}
function zh(i, e, t) {
  let n = i[2];
  if (!Array.isArray(n))
    throw new Error(
      'the second argument for the "in" operator must be an array'
    );
  let r;
  if (typeof n[0] == "string") {
    if (n[0] !== "literal")
      throw new Error(
        'for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions'
      );
    if (!Array.isArray(n[1]))
      throw new Error(
        'failed to parse "in" expression: the literal operator must be followed by an array'
      );
    n = n[1], r = re;
  } else
    r = N;
  const s = new Array(n.length);
  for (let a = 0; a < s.length; a++)
    try {
      const l = ee(n[a], r, t);
      s[a] = l;
    } catch (l) {
      throw new Error(
        `failed to parse haystack item ${a} for "in" expression: ${l.message}`
      );
    }
  return [ee(i[1], r, t), ...s];
}
function jh(i, e, t) {
  let n;
  try {
    n = ee(i[1], N, t);
  } catch (o) {
    throw new Error(
      `failed to parse first argument in palette expression: ${o.message}`
    );
  }
  const r = i[2];
  if (!Array.isArray(r))
    throw new Error("the second argument of palette must be an array");
  const s = new Array(r.length);
  for (let o = 0; o < s.length; o++) {
    let a;
    try {
      a = ee(r[o], ve, t);
    } catch (l) {
      throw new Error(
        `failed to parse color at index ${o} in palette expression: ${l.message}`
      );
    }
    if (!(a instanceof W))
      throw new Error(
        `the palette color at index ${o} must be a literal value`
      );
    s[o] = a;
  }
  return [n, ...s];
}
function M(...i) {
  return function(e, t, n) {
    const r = e[0];
    let s;
    for (let o = 0; o < i.length; o++) {
      const a = i[o](e, t, n);
      if (o == i.length - 1) {
        if (!a)
          throw new Error(
            "expected last argument validator to return the parsed args"
          );
        s = a;
      }
    }
    return new eo(t, r, ...s);
  };
}
function $h(i, e, t) {
  const n = i[0], r = Lh[n];
  if (!r)
    throw new Error(`unknown operator: ${n}`);
  return r(i, e, t);
}
function to(i) {
  if (!i)
    return "";
  const e = i.getType();
  switch (e) {
    case "Point":
    case "LineString":
    case "Polygon":
      return e;
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
      return (
        /** @type {'Point'|'LineString'|'Polygon'} */
        e.substring(5)
      );
    case "Circle":
      return "Polygon";
    case "GeometryCollection":
      return to(
        /** @type {import("../geom/GeometryCollection.js").default} */
        i.getGeometries()[0]
      );
    default:
      return "";
  }
}
class Yh {
  /**
   * @param {string} name The name of the texture.
   * @param {Uint8Array} data The texture data.
   */
  constructor(e, t) {
    this.name = e, this.data = t, this.texture_ = null;
  }
  /**
   * @param {WebGLRenderingContext} gl Rendering context.
   * @return {WebGLTexture} The texture.
   */
  getTexture(e) {
    if (!this.texture_) {
      const t = e.createTexture();
      e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texImage2D(
        e.TEXTURE_2D,
        0,
        e.RGBA,
        this.data.length / 4,
        1,
        0,
        e.RGBA,
        e.UNSIGNED_BYTE,
        this.data
      ), this.texture_ = t;
    }
    return this.texture_;
  }
  /**
   * @param {WebGLRenderingContext} gl Rendering context.
   */
  delete(e) {
    this.texture_ && e.deleteTexture(this.texture_), this.texture_ = null;
  }
}
function Vh(i, e) {
  return `operator_${i}_${Object.keys(e.functions).length}`;
}
function Cn(i) {
  const e = i.toString();
  return e.includes(".") ? e : e + ".0";
}
function Hi(i) {
  if (i.length < 2 || i.length > 4)
    throw new Error(
      "`formatArray` can only output `vec2`, `vec3` or `vec4` arrays."
    );
  return `vec${i.length}(${i.map(Cn).join(", ")})`;
}
function Kh(i) {
  const e = gn(i), t = e.length > 3 ? e[3] : 1;
  return Hi([e[0] / 255, e[1] / 255, e[2] / 255, t]);
}
function Hh(i) {
  const e = se(i);
  return Hi(e);
}
const Bn = {};
let Zh = 0;
function no(i) {
  return i in Bn || (Bn[i] = Zh++), Bn[i];
}
function Wh(i) {
  return Cn(no(i));
}
function io(i) {
  return "u_var_" + i;
}
function qh() {
  return {
    inFragmentShader: !1,
    variables: {},
    properties: {},
    functions: {},
    bandCount: 0,
    style: {}
  };
}
const zn = "getBandValue", ro = "u_paletteTextures";
function Jh(i, e, t, n) {
  const r = ee(i, e, t);
  return Zi(r, e, n);
}
function U(i) {
  return (e, t, n) => {
    const r = t.args.length, s = new Array(r);
    for (let o = 0; o < r; ++o)
      s[o] = Zi(t.args[o], n, e);
    return i(s, e);
  };
}
const Qh = {
  [C.Get]: (i, e) => {
    const n = (
      /** @type {string} */
      /** @type {LiteralExpression} */
      e.args[0].value
    );
    return n in i.properties || (i.properties[n] = {
      name: n,
      type: e.type
    }), (i.inFragmentShader ? "v_prop_" : "a_prop_") + n;
  },
  [C.GeometryType]: (i, e, t) => {
    const n = "geometryType";
    return n in i.properties || (i.properties[n] = {
      name: n,
      type: re,
      evaluator: (o) => to(o.getGeometry())
    }), (i.inFragmentShader ? "v_prop_" : "a_prop_") + n;
  },
  [C.LineMetric]: () => "currentLineMetric",
  // this variable is assumed to always be present in shaders, default is 0.
  [C.Var]: (i, e) => {
    const n = (
      /** @type {string} */
      /** @type {LiteralExpression} */
      e.args[0].value
    );
    return n in i.variables || (i.variables[n] = {
      name: n,
      type: e.type
    }), io(n);
  },
  [C.Resolution]: () => "u_resolution",
  [C.Zoom]: () => "u_zoom",
  [C.Time]: () => "u_time",
  [C.Any]: U((i) => `(${i.join(" || ")})`),
  [C.All]: U((i) => `(${i.join(" && ")})`),
  [C.Not]: U(([i]) => `(!${i})`),
  [C.Equal]: U(
    ([i, e]) => `(${i} == ${e})`
  ),
  [C.NotEqual]: U(
    ([i, e]) => `(${i} != ${e})`
  ),
  [C.GreaterThan]: U(
    ([i, e]) => `(${i} > ${e})`
  ),
  [C.GreaterThanOrEqualTo]: U(
    ([i, e]) => `(${i} >= ${e})`
  ),
  [C.LessThan]: U(
    ([i, e]) => `(${i} < ${e})`
  ),
  [C.LessThanOrEqualTo]: U(
    ([i, e]) => `(${i} <= ${e})`
  ),
  [C.Multiply]: U(
    (i) => `(${i.join(" * ")})`
  ),
  [C.Divide]: U(
    ([i, e]) => `(${i} / ${e})`
  ),
  [C.Add]: U((i) => `(${i.join(" + ")})`),
  [C.Subtract]: U(
    ([i, e]) => `(${i} - ${e})`
  ),
  [C.Clamp]: U(
    ([i, e, t]) => `clamp(${i}, ${e}, ${t})`
  ),
  [C.Mod]: U(([i, e]) => `mod(${i}, ${e})`),
  [C.Pow]: U(([i, e]) => `pow(${i}, ${e})`),
  [C.Abs]: U(([i]) => `abs(${i})`),
  [C.Floor]: U(([i]) => `floor(${i})`),
  [C.Ceil]: U(([i]) => `ceil(${i})`),
  [C.Round]: U(([i]) => `floor(${i} + 0.5)`),
  [C.Sin]: U(([i]) => `sin(${i})`),
  [C.Cos]: U(([i]) => `cos(${i})`),
  [C.Atan]: U(([i, e]) => e !== void 0 ? `atan(${i}, ${e})` : `atan(${i})`),
  [C.Sqrt]: U(([i]) => `sqrt(${i})`),
  [C.Match]: U((i) => {
    const e = i[0], t = i[i.length - 1];
    let n = null;
    for (let r = i.length - 3; r >= 1; r -= 2) {
      const s = i[r], o = i[r + 1];
      n = `(${e} == ${s} ? ${o} : ${n || t})`;
    }
    return n;
  }),
  [C.Between]: U(
    ([i, e, t]) => `(${i} >= ${e} && ${i} <= ${t})`
  ),
  [C.Interpolate]: U(([i, e, ...t]) => {
    let n = "";
    for (let r = 0; r < t.length - 2; r += 2) {
      const s = t[r], o = n || t[r + 1], a = t[r + 2], l = t[r + 3];
      let c;
      i === Cn(1) ? c = `(${e} - ${s}) / (${a} - ${s})` : c = `(pow(${i}, (${e} - ${s})) - 1.0) / (pow(${i}, (${a} - ${s})) - 1.0)`, n = `mix(${o}, ${l}, clamp(${c}, 0.0, 1.0))`;
    }
    return n;
  }),
  [C.Case]: U((i) => {
    const e = i[i.length - 1];
    let t = null;
    for (let n = i.length - 3; n >= 0; n -= 2) {
      const r = i[n], s = i[n + 1];
      t = `(${r} ? ${s} : ${t || e})`;
    }
    return t;
  }),
  [C.In]: U(([i, ...e], t) => {
    const n = Vh("in", t), r = [];
    for (let s = 0; s < e.length; s += 1)
      r.push(`  if (inputValue == ${e[s]}) { return true; }`);
    return t.functions[n] = `bool ${n}(float inputValue) {
${r.join(`
`)}
  return false;
}`, `${n}(${i})`;
  }),
  [C.Array]: U(
    (i) => `vec${i.length}(${i.join(", ")})`
  ),
  [C.Color]: U((i) => {
    if (i.length === 1)
      return `vec4(vec3(${i[0]} / 255.0), 1.0)`;
    if (i.length === 2)
      return `vec4(vec3(${i[0]} / 255.0), ${i[1]})`;
    const e = i.slice(0, 3).map((n) => `${n} / 255.0`);
    if (i.length === 3)
      return `vec4(${e.join(", ")}, 1.0)`;
    const t = i[3];
    return `vec4(${e.join(", ")}, ${t})`;
  }),
  [C.Band]: U(([i, e, t], n) => {
    if (!(zn in n.functions)) {
      let r = "";
      const s = n.bandCount || 1;
      for (let o = 0; o < s; o++) {
        const a = Math.floor(o / 4);
        let l = o % 4;
        o === s - 1 && l === 1 && (l = 3);
        const c = `${D.TILE_TEXTURE_ARRAY}[${a}]`;
        r += `  if (band == ${o + 1}.0) {
    return texture2D(${c}, v_textureCoord + vec2(dx, dy))[${l}];
  }
`;
      }
      n.functions[zn] = `float getBandValue(float band, float xOffset, float yOffset) {
  float dx = xOffset / ${D.TEXTURE_PIXEL_WIDTH};
  float dy = yOffset / ${D.TEXTURE_PIXEL_HEIGHT};
${r}
}`;
    }
    return `${zn}(${i}, ${e ?? "0.0"}, ${t ?? "0.0"})`;
  }),
  [C.Palette]: (i, e) => {
    const [t, ...n] = e.args, r = n.length, s = new Uint8Array(r * 4);
    for (let c = 0; c < n.length; c++) {
      const h = (
        /** @type {string | Array<number>} */
        /** @type {LiteralExpression} */
        n[c].value
      ), u = gn(h), f = c * 4;
      s[f] = u[0], s[f + 1] = u[1], s[f + 2] = u[2], s[f + 3] = u[3] * 255;
    }
    i.paletteTextures || (i.paletteTextures = []);
    const o = `${ro}[${i.paletteTextures.length}]`, a = new Yh(o, s);
    i.paletteTextures.push(a);
    const l = Zi(t, N, i);
    return `texture2D(${o}, vec2((${l} + 0.5) / ${r}.0, 0.5))`;
  }
  // TODO: unimplemented
  // Ops.Number
  // Ops.String
  // Ops.Coalesce
  // Ops.Concat
  // Ops.ToString
};
function Zi(i, e, t) {
  if (i instanceof eo) {
    const n = Qh[i.operator];
    if (n === void 0)
      throw new Error(
        `No compiler defined for this operator: ${JSON.stringify(
          i.operator
        )}`
      );
    return n(t, i, e);
  }
  if ((i.type & N) > 0)
    return Cn(
      /** @type {number} */
      i.value
    );
  if ((i.type & ue) > 0)
    return i.value.toString();
  if ((i.type & re) > 0)
    return Wh(i.value.toString());
  if ((i.type & ve) > 0)
    return Kh(
      /** @type {Array<number> | string} */
      i.value
    );
  if ((i.type & dn) > 0)
    return Hi(
      /** @type {Array<number>} */
      i.value
    );
  if ((i.type & ct) > 0)
    return Hh(
      /** @type {number|import('../size.js').Size} */
      i.value
    );
  throw new Error(
    `Unexpected expression ${i.value} (expected type ${ht(
      e
    )})`
  );
}
function rt(i, e, t) {
  const n = Oh();
  return Jh(
    e,
    t,
    n,
    i
  );
}
function Br(i, e) {
  const t = `
    attribute vec2 ${en.TEXTURE_COORD};
    uniform mat4 ${D.TILE_TRANSFORM};
    uniform float ${D.TEXTURE_PIXEL_WIDTH};
    uniform float ${D.TEXTURE_PIXEL_HEIGHT};
    uniform float ${D.TEXTURE_RESOLUTION};
    uniform float ${D.TEXTURE_ORIGIN_X};
    uniform float ${D.TEXTURE_ORIGIN_Y};
    uniform float ${D.DEPTH};

    varying vec2 v_textureCoord;
    varying vec2 v_mapCoord;

    void main() {
      v_textureCoord = ${en.TEXTURE_COORD};
      v_mapCoord = vec2(
        ${D.TEXTURE_ORIGIN_X} + ${D.TEXTURE_RESOLUTION} * ${D.TEXTURE_PIXEL_WIDTH} * v_textureCoord[0],
        ${D.TEXTURE_ORIGIN_Y} - ${D.TEXTURE_RESOLUTION} * ${D.TEXTURE_PIXEL_HEIGHT} * v_textureCoord[1]
      );
      gl_Position = ${D.TILE_TRANSFORM} * vec4(${en.TEXTURE_COORD}, ${D.DEPTH}, 1.0);
    }
  `, n = {
    ...qh(),
    inFragmentShader: !0,
    bandCount: e,
    style: i
  }, r = [];
  if (i.color !== void 0) {
    const u = rt(n, i.color, ve);
    r.push(`color = ${u};`);
  }
  if (i.contrast !== void 0) {
    const u = rt(n, i.contrast, N);
    r.push(
      `color.rgb = clamp((${u} + 1.0) * color.rgb - (${u} / 2.0), vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`
    );
  }
  if (i.exposure !== void 0) {
    const u = rt(n, i.exposure, N);
    r.push(
      `color.rgb = clamp((${u} + 1.0) * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`
    );
  }
  if (i.saturation !== void 0) {
    const u = rt(n, i.saturation, N);
    r.push(`
      float saturation = ${u} + 1.0;
      float sr = (1.0 - saturation) * 0.2126;
      float sg = (1.0 - saturation) * 0.7152;
      float sb = (1.0 - saturation) * 0.0722;
      mat3 saturationMatrix = mat3(
        sr + saturation, sr, sr,
        sg, sg + saturation, sg,
        sb, sb, sb + saturation
      );
      color.rgb = clamp(saturationMatrix * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));
    `);
  }
  if (i.gamma !== void 0) {
    const u = rt(n, i.gamma, N);
    r.push(`color.rgb = pow(color.rgb, vec3(1.0 / ${u}));`);
  }
  if (i.brightness !== void 0) {
    const u = rt(n, i.brightness, N);
    r.push(
      `color.rgb = clamp(color.rgb + ${u}, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`
    );
  }
  const s = {}, o = Object.keys(n.variables).length;
  if (o > 1 && !i.variables)
    throw new Error(
      `Missing variables in style (expected ${n.variables})`
    );
  for (let u = 0; u < o; ++u) {
    const f = n.variables[Object.keys(n.variables)[u]];
    if (!(f.name in i.variables))
      throw new Error(`Missing '${f.name}' in style variables`);
    const g = io(f.name);
    s[g] = function() {
      let m = i.variables[f.name];
      return typeof m == "string" && (m = no(m)), m !== void 0 ? m : -9999999;
    };
  }
  const a = Object.keys(s).map(function(u) {
    return `uniform float ${u};`;
  }), l = Math.ceil(e / 4);
  a.push(
    `uniform sampler2D ${D.TILE_TEXTURE_ARRAY}[${l}];`
  ), n.paletteTextures && a.push(
    `uniform sampler2D ${ro}[${n.paletteTextures.length}];`
  );
  const c = Object.keys(n.functions).map(
    function(u) {
      return n.functions[u];
    }
  ), h = `
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif

    varying vec2 v_textureCoord;
    varying vec2 v_mapCoord;
    uniform vec4 ${D.RENDER_EXTENT};
    uniform float ${D.TRANSITION_ALPHA};
    uniform float ${D.TEXTURE_PIXEL_WIDTH};
    uniform float ${D.TEXTURE_PIXEL_HEIGHT};
    uniform float ${D.RESOLUTION};
    uniform float ${D.ZOOM};

    ${a.join(`
`)}

    ${c.join(`
`)}

    void main() {
      if (
        v_mapCoord[0] < ${D.RENDER_EXTENT}[0] ||
        v_mapCoord[1] < ${D.RENDER_EXTENT}[1] ||
        v_mapCoord[0] > ${D.RENDER_EXTENT}[2] ||
        v_mapCoord[1] > ${D.RENDER_EXTENT}[3]
      ) {
        discard;
      }

      vec4 color = texture2D(${D.TILE_TEXTURE_ARRAY}[0],  v_textureCoord);

      ${r.join(`
`)}

      gl_FragColor = color;
      gl_FragColor.rgb *= gl_FragColor.a;
      gl_FragColor *= ${D.TRANSITION_ALPHA};
    }`;
  return {
    vertexShader: t,
    fragmentShader: h,
    uniforms: s,
    paletteTextures: n.paletteTextures
  };
}
class so extends Jc {
  /**
   * @param {Options} options Tile layer options.
   */
  constructor(e) {
    e = e ? Object.assign({}, e) : {};
    const t = e.style || {};
    delete e.style, super(e), this.sources_ = e.sources, this.renderedSource_ = null, this.renderedResolution_ = NaN, this.style_ = t, this.styleVariables_ = this.style_.variables || {}, this.addChangeListener(X.SOURCE, this.handleSourceUpdate_);
  }
  /**
   * Gets the sources for this layer, for a given extent and resolution.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @return {Array<SourceType>} Sources.
   */
  getSources(e, t) {
    const n = this.getSource();
    return this.sources_ ? typeof this.sources_ == "function" ? this.sources_(e, t) : this.sources_ : n ? [n] : [];
  }
  /**
   * @return {SourceType} The source being rendered.
   * @override
   */
  getRenderSource() {
    return this.renderedSource_ || this.getSource();
  }
  /**
   * @return {import("../source/Source.js").State} Source state.
   * @override
   */
  getSourceState() {
    const e = this.getRenderSource();
    return e ? e.getState() : "undefined";
  }
  /**
   * @private
   */
  handleSourceUpdate_() {
    this.hasRenderer() && this.getRenderer().clearCache(), this.getSource() && this.setStyle(this.style_);
  }
  /**
   * @private
   * @return {number} The number of source bands.
   */
  getSourceBandCount_() {
    const e = Number.MAX_SAFE_INTEGER, t = this.getSources([-e, -e, e, e], e);
    return t && t.length && "bandCount" in t[0] ? t[0].bandCount : 4;
  }
  /**
   * @override
   */
  createRenderer() {
    const e = Br(this.style_, this.getSourceBandCount_());
    return new Ch(this, {
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader,
      uniforms: e.uniforms,
      cacheSize: this.getCacheSize(),
      paletteTextures: e.paletteTextures
    });
  }
  /**
   * @param {import("../Map").FrameState} frameState Frame state.
   * @param {Array<SourceType>} sources Sources.
   * @return {HTMLElement} Canvas.
   */
  renderSources(e, t) {
    const n = this.getRenderer();
    let r;
    for (let s = 0, o = t.length; s < o; ++s)
      this.renderedSource_ = t[s], n.prepareFrame(e) && (r = n.renderFrame(e));
    return r;
  }
  /**
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target which the renderer may (but need not) use
   * for rendering its content.
   * @return {HTMLElement} The rendered element.
   * @override
   */
  render(e, t) {
    this.rendered = !0;
    const n = e.viewState, r = this.getSources(e.extent, n.resolution);
    let s = !0;
    for (let a = 0, l = r.length; a < l; ++a) {
      const c = r[a], h = c.getState();
      if (h == "loading") {
        const u = () => {
          c.getState() == "ready" && (c.removeEventListener("change", u), this.changed());
        };
        c.addEventListener("change", u);
      }
      s = s && h == "ready";
    }
    const o = this.renderSources(e, r);
    if (this.getRenderer().renderComplete && s)
      return this.renderedResolution_ = n.resolution, o;
    if (this.renderedResolution_ > 0.5 * n.resolution) {
      const a = this.getSources(
        e.extent,
        this.renderedResolution_
      ).filter((l) => !r.includes(l));
      if (a.length > 0)
        return this.renderSources(e, a);
    }
    return o;
  }
  /**
   * Update the layer style.  The `updateStyleVariables` function is a more efficient
   * way to update layer rendering.  In cases where the whole style needs to be updated,
   * this method may be called instead.  Note that calling this method will also replace
   * any previously set variables, so the new style also needs to include new variables,
   * if needed.
   * @param {Style} style The new style.
   */
  setStyle(e) {
    if (this.styleVariables_ = e.variables || {}, this.style_ = e, this.hasRenderer()) {
      const t = Br(this.style_, this.getSourceBandCount_());
      this.getRenderer().reset({
        vertexShader: t.vertexShader,
        fragmentShader: t.fragmentShader,
        uniforms: t.uniforms,
        paletteTextures: t.paletteTextures
      }), this.changed();
    }
  }
  /**
   * Update any variables used by the layer style and trigger a re-render.
   * @param {Object<string, number>} variables Variables to update.
   * @api
   */
  updateStyleVariables(e) {
    Object.assign(this.styleVariables_, e), this.changed();
  }
}
so.prototype.dispose;
const eu = so;
function Rt(i, e, t) {
  let n = ["case", ["!=", ["band", 2], 0]], r = [
    "interpolate",
    ["linear"],
    ["band", 1]
  ];
  if (i == null)
    return null;
  if (t == 1) {
    for (let s = 0; s < i.length; s++)
      r = r.concat([i[s][0] * e, i[s][1]]);
    n.push(r), n.push(["color", 0, 0, 0, 0]), JSON.stringify(n);
  } else {
    const s = [
      "case",
      ["==", ["band", 2], 0],
      ["color", 0, 0, 0, 0],
      // 定义范围之外的值的透明颜色
      ["<=", ["band", 1], i[0][0] * e],
      ["color", ...i[0][1]]
    ];
    for (let o = 0; o < i.length; o++) {
      const [a, l] = i[o], [c, h] = o >= i.length - 1 ? i[o] : i[o + 1];
      s.push(["between", ["band", 1], a * e, c * e]), s.push(["color", ...l]);
    }
    s[s.length] = [
      "color",
      ...i[i.length - 1][1]
    ], n = s;
  }
  return JSON.stringify(n), n;
}
function zr(i) {
  let e = i.style;
  if (i.style)
    if (i.source)
      if (i.source.normalize)
        i.style = null;
      else {
        let t = e.bandsNumber, n = Number(e.offset) || 0, r = [];
        if (t == 2) {
          let s = ["-", ["band", 1], n], o = ["-", ["band", 2], n], a = [
            "+",
            ["*", s, s],
            ["*", o, o]
          ];
          if (r = Rt(e.color, e.scala, e.radio), e.radio == 1) {
            let l = r[2];
            l[2] = ["sqrt", a];
          } else
            for (let l = 3; l < r.length - 1; l = l + 2)
              r[l][1] = ["sqrt", a];
        } else if (t == 1)
          if (e.unit == "K")
            r = Rt(e.color, e.scala, e.radio);
          else if (e.unit == "℃") {
            let o = ["-", ["/", ["band", 1], e.scala], 273.15];
            if (r = Rt(e.color, e.scala / 10, e.radio), e.radio == 1)
              r[2][2] = o;
            else
              for (let a = 3; a < r.length - 1; a = a + 2)
                r[a][1] = o;
          } else
            r = Rt(e.color, e.scala, e.radio);
        else
          r = Rt(e.color, e.scala, e.radio);
        i.style.color = r;
      }
    else
      i.style = null;
  return i;
}
function oo(i, e) {
  const t = {};
  for (let n in i)
    i.hasOwnProperty(n) && (typeof i[n] == "object" && i[n] !== null ? t[n] = Object.assign({}, i[n]) : t[n] = i[n]);
  for (let n in e)
    e.hasOwnProperty(n) && (t.hasOwnProperty(n) && typeof t[n] == "object" && t[n] !== null ? t[n] = Object.assign({}, t[n], e[n]) : t[n] = e[n]);
  return t;
}
function tu(i, e) {
  let t = {};
  const n = Math.sqrt(i * i + e * e);
  let r = 270 - Math.atan2(e, i) * 180 / Math.PI;
  return r >= 360 && (r = r - 360), t.speed = n, t.direction = r.toString(), t;
}
function St(i, e, t, n, r) {
  if (Array.isArray(i)) {
    const s = i.length;
    if (!Array.isArray(e) || s != e.length) {
      const o = new Error(n);
      throw r(o), o;
    }
    for (let o = 0; o < s; ++o)
      St(i[o], e[o], t, n, r);
    return;
  }
  if (e = /** @type {number} */
  e, Math.abs(i - e) > t * i)
    throw new Error(n);
}
function nu(i) {
  return ((i.fileDirectory.NewSubfileType || 0) & 4) === 4;
}
function iu(i) {
  try {
    return i.getBoundingBox();
  } catch {
    return [0, 0, i.getWidth(), i.getHeight()];
  }
}
function ru(i) {
  try {
    return i.getOrigin().slice(0, 2);
  } catch {
    return [0, i.getHeight()];
  }
}
function su(i, e) {
  try {
    return i.getResolution(e);
  } catch {
    return [
      e.getWidth() / i.getWidth(),
      e.getHeight() / i.getHeight()
    ];
  }
}
function ou(i) {
  const n = new DOMParser().parseFromString(i, "text/xml").querySelectorAll("GDALMetadata Item"), r = {};
  return n.forEach((s) => {
    const o = s.getAttribute("name"), a = s.textContent.trim();
    r[o] = a;
  }), r;
}
const jn = 256;
class au extends mc {
  /**
   * @param {Options} options Data tile options.
   */
  constructor(e) {
    super(e), this.gdalMetaDatas = {}, this.extremums = [];
  }
  parseXMLMetas(e) {
    var n;
    if (!(e != null && e.length))
      return;
    const t = (n = e[0].fileDirectory) == null ? void 0 : n.GDAL_METADATA;
    t && (this.gdalMetaDatas = ou(t));
  }
  getExtremums(e) {
    return e[0].readRasters().then((t) => t.map((r) => {
      const s = r.reduce((a, l) => Math.min(a, l), 0), o = r.reduce((a, l) => Math.max(a, l), 0);
      return { minValue: s, maxValue: o };
    }));
  }
  getMetaDatas() {
    const { metadata_: e, normalize_: t, nodataValues_: n, bandCount: r, addAlpha_: s } = this, { extent_: o } = this.tileGrid, { code_: a } = this.getProjection();
    return {
      metadata: e[0][0],
      nodata: n[0][0],
      normalize: t,
      extent: o,
      proj: a,
      // @ts-ignore
      bandCount: r - (s ? 1 : 0),
      ...this.gdalMetaDatas
    };
  }
  configure_(e) {
    let t, n, r, s, o;
    const a = new Array(e.length), l = new Array(e.length), c = new Array(e.length);
    let h = 0;
    const u = e.length;
    for (let d = 0; d < u; ++d) {
      const p = [], y = [];
      e[d].forEach((E) => {
        nu(E) ? y.push(E) : p.push(E);
      });
      const _ = p.length;
      if (y.length > 0 && y.length !== _)
        throw new Error(
          `Expected one mask per image found ${y.length} masks and ${_} images`
        );
      let R, T;
      const x = new Array(_), I = new Array(_), w = new Array(_);
      l[d] = new Array(_), c[d] = new Array(_);
      for (let E = 0; E < _; ++E) {
        const S = p[E], v = S.getGDALNoData();
        c[d][E] = S.getGDALMetadata(0), l[d][E] = v;
        const A = this.sourceInfo_[d].bands;
        a[d] = A ? A.length : S.getSamplesPerPixel();
        const P = _ - (E + 1);
        R || (R = iu(S)), T || (T = ru(S));
        const G = su(S, p[0]);
        w[P] = G[0];
        const O = [S.getTileWidth(), S.getTileHeight()];
        O[0] !== O[1] && O[1] < jn && (O[0] = jn, O[1] = jn), x[P] = O;
        const z = G[0] / Math.abs(G[1]);
        I[P] = [
          O[0],
          O[1] / z
        ];
      }
      if (t ? ge(t, R, t) : t = R, !n)
        n = T;
      else {
        const E = `Origin mismatch for source ${d}, got [${T}] but expected [${n}]`;
        St(n, T, 0, E, this.viewRejector);
      }
      if (!o)
        o = w, this.resolutionFactors_[d] = 1;
      else {
        o.length - h > w.length && (h = o.length - w.length);
        const E = o[o.length - 1] / w[w.length - 1];
        this.resolutionFactors_[d] = E;
        const S = w.map(
          (A) => A *= E
        ), v = `Resolution mismatch for source ${d}, got [${S}] but expected [${o}]`;
        St(
          o.slice(h, o.length),
          S,
          0.02,
          v,
          this.viewRejector
        );
      }
      r ? St(
        r.slice(h, r.length),
        I,
        0.01,
        `Tile size mismatch for source ${d}`,
        this.viewRejector
      ) : r = I, s ? St(
        s.slice(h, s.length),
        x,
        0,
        `Tile size mismatch for source ${d}`,
        this.viewRejector
      ) : s = x, this.sourceImagery_[d] = p.reverse(), this.sourceMasks_[d] = y.reverse();
    }
    Promise.resolve().then(() => this.parseXMLMetas(e[0]));
    for (let d = 0, p = this.sourceImagery_.length; d < p; ++d) {
      const y = this.sourceImagery_[d];
      for (; y.length < o.length; )
        y.unshift(void 0);
    }
    this.getProjection() || this.determineProjection(e), this.samplesPerPixel_ = a, this.nodataValues_ = l, this.metadata_ = c;
    e:
      for (let d = 0; d < u; ++d) {
        if (this.sourceInfo_[d].nodata !== void 0) {
          this.addAlpha_ = !0;
          break;
        }
        if (this.sourceMasks_[d].length) {
          this.addAlpha_ = !0;
          break;
        }
        const p = l[d], y = this.sourceInfo_[d].bands;
        if (y) {
          for (let _ = 0; _ < y.length; ++_)
            if (p[y[_] - 1] !== null) {
              this.addAlpha_ = !0;
              break e;
            }
          continue;
        }
        for (let _ = 0; _ < p.length; ++_)
          if (p[_] !== null) {
            this.addAlpha_ = !0;
            break e;
          }
      }
    let f = this.addAlpha_ ? 1 : 0;
    for (let d = 0; d < u; ++d)
      f += a[d];
    this.bandCount = f;
    const g = new Rn({
      extent: t,
      minZoom: h,
      origin: n,
      resolutions: o,
      tileSizes: r
    });
    this.tileGrid = g, this.setTileSizes(s), this.setLoader(this.loadTile_.bind(this)), this.setState("ready");
    const m = 1;
    o.length === 2 ? o = [o[0], o[1], o[1] / 2] : o.length === 1 && (o = [o[0] * 2, o[0], o[0] / 2]), this.viewResolver({
      showFullExtent: !0,
      projection: this.projection,
      resolutions: o,
      center: on(Me(t), this.projection),
      extent: fi(t, this.projection),
      zoom: m
    });
  }
}
const st = au;
var lu = class extends eu {
  constructor() {
    let e = {};
    super(e), this.legendLimit = 250;
  }
  /**
   * 渲染选项并返回一个解析为true的Promise。
   *
   * @param {Object} options - 要渲染的选项。
   * @return {Promise} 一个解析为true的Promise。
   */
  _render(e) {
    let t = JSON.parse(JSON.stringify(e)), n = this;
    if (t.Greater && (t.style = this.getStyleOpactiy(t.Greater, t.style)), t.style && (t.style.color ? t.orignColor = JSON.parse(JSON.stringify(t.style.color)) : t.orignColor = {}), !t.style)
      throw Error('"options.style"参数缺失');
    if (t.CustomStyle = t.style, !t.source)
      throw Error('"options.source"参数缺失');
    return new Promise(
      (r) => {
        const s = new st(t.source);
        s.getView().then((o) => {
          const a = s.getMetaDatas(), { scale: l, scala: c, offset: h, unit: u } = t.style, f = {
            extent: a.extent,
            projection: a.proj || "EPSG:4326",
            unit: u || a.unit || ""
          };
          Object.assign(t.style, {
            bandsNumber: +a.bandCount || 1,
            offset: h || +a.offset || 0,
            scala: l || c || +a.scale || 1,
            unit: u || a.unit || ""
          }), t.proj = f, t.style.color && (t = zr(t)), n.options = JSON.parse(JSON.stringify(t)), n.style_ = t.style, s.values_ = t.source, n.setProperties({ ...t, source: s }), n.once("postrender", () => r(a));
        });
      }
    );
  }
  /**
   * 设置函数的来源。
   *
   * @param {type} paramName - 参数的描述
   * @return {type} 返回值的描述
   */
  _setSource(e) {
    let t = JSON.parse(JSON.stringify(e)), n = this;
    return t.source == null ? new Promise((r) => {
      r(!0);
    }) : new Promise((r) => {
      t.source ? t.source = new st(t.source) : t.source = new st(), t.source.getView().then((s) => {
        s.projection && s.projection.getCode(), n.once("sourceready", function(o) {
          r(!0);
        }), n.setSource(t.source);
      });
    });
  }
  _setSourceMap(e, t) {
    let n = JSON.parse(JSON.stringify(t));
    n.source.sources[0].url;
    let r = this;
    return n.source == null ? new Promise((s) => {
      s(!0);
    }) : new Promise((s) => {
      n.source ? n.source = new st(n.source) : n.source = new st(), n.source.getView().then((o) => {
        o.projection && o.projection.getCode(), e.once("rendercomplete", function() {
          s(!0);
        }), r.setSource(n.source);
      });
    });
  }
  /**
   * 对整个函数的描述。
   *
   * @param {type} paramName - 参数描述
   * @return {type} 返回值描述
   */
  _setStyle(e) {
    return e.Greater && (e.style = this.getStyleOpactiy(e.Greater, e.style)), e.style ? e.style.color ? this.options.orignColor = e.style.color : e.style.color = JSON.parse(JSON.stringify(this.options.orignColor)) : e.style.color = JSON.parse(JSON.stringify(this.options.orignColor)), new Promise((t) => {
      if (e.source && "interpolate" in e.source) {
        const r = this.getSource();
        if (r.getProperties().interpolate != e.source.interpolate) {
          r.set("interpolate", e.source.interpolate);
          let o = JSON.parse(JSON.stringify(o));
          this.setSource(new st(o)), r.setProperties(o);
        }
      }
      this.options = zr(oo(this.options, e)), this.style_ = this.options.style, this.options.CustomStyle = this.options.style;
      const n = JSON.parse(JSON.stringify(this.options.style));
      this.setStyle(n), t(!0);
    });
  }
  getStyleOpactiy(e, t) {
    let n = JSON.parse(JSON.stringify(t));
    if (e) {
      if (e[0] == 0) {
        let r = n.color[0][0];
        r = r - 0.1, n.color.unshift([r, [0, 0, 0, 0]]), n.color.unshift([-9999, [0, 0, 0, 0]]);
      }
      if (e[1] == 0) {
        let r = n.color[n.color.length - 1][0];
        r = r + 0.1, n.color.push([r, [0, 0, 0, 0]]);
      }
    }
    return n;
  }
  /**
   * 整个函数的描述。
   *
   */
  _remove() {
    this.dispose();
  }
  computedNewExtent(e, t) {
    let n = e[0] + 360 * t, r = e[2] + 360 * t;
    return [n, e[1], r, e[3]];
  }
  getSourceProperties(e) {
    let t = this.options.source.values_;
    for (let r in t)
      if (t.hasOwnProperty(r))
        for (let s in e.source)
          e.source.hasOwnProperty(s) && r == s && (t[r] = e.source[s]);
    let n = [];
    for (let r in t.sources)
      t.sources.hasOwnProperty(r) && n.push(t.sources[r]);
    return t.sources = n, t;
  }
};
class cu {
  constructor() {
    /**
     * @private
     * @param {...*} args Args.
     * @return {ZIndexContext} This.
     */
    Wi(this, "pushMethodArgs_", (...e) => (this.instructions_[this.zIndex + this.offset_].push(e), this));
    this.instructions_ = [], this.zIndex = 0, this.offset_ = 0, this.context_ = /** @type {ZIndexContextProxy} */
    new Proxy(qi(), {
      get: (e, t) => {
        if (typeof /** @type {*} */
        qi()[t] == "function")
          return this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(t), this.pushMethodArgs_;
      },
      set: (e, t, n) => (this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(t, n), !0)
    });
  }
  /**
   * Push a function that renders to the context directly.
   * @param {function(CanvasRenderingContext2D): void} render Function.
   */
  pushFunction(e) {
    this.instructions_[this.zIndex + this.offset_].push(e);
  }
  /**
   * Get a proxy for CanvasRenderingContext2D which does not support getting state
   * (e.g. `context.globalAlpha`, which will return `undefined`). To set state, if it relies on a
   * previous state (e.g. `context.globalAlpha = context.globalAlpha / 2`), set a function,
   * e.g. `context.globalAlpha = (context) => context.globalAlpha / 2`.
   * @return {ZIndexContextProxy} Context.
   */
  getContext() {
    return this.context_;
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   */
  draw(e) {
    this.instructions_.forEach((t) => {
      for (let n = 0, r = t.length; n < r; ++n) {
        const s = t[n];
        if (typeof s == "function") {
          s(e);
          continue;
        }
        const o = t[++n];
        if (typeof /** @type {*} */
        e[s] == "function")
          e[s](...o);
        else {
          if (typeof o == "function") {
            e[s] = o(e);
            continue;
          }
          e[s] = o;
        }
      }
    });
  }
  clear() {
    this.instructions_.length = 0, this.zIndex = 0, this.offset_ = 0;
  }
  /**
   * Offsets the zIndex by the highest current zIndex. Useful for rendering multiple worlds or tiles, to
   * avoid conflicting context.clip() or context.save()/restore() calls.
   */
  offset() {
    this.offset_ = this.instructions_.length, this.zIndex = 0;
  }
}
let at = null;
function hu() {
  at = xe(1, 1, void 0, {
    willReadFrequently: !0
  });
}
class uu extends Hs {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(e) {
    super(e), this.container = null, this.renderedResolution, this.tempTransform = Be(), this.pixelTransform = Be(), this.inversePixelTransform = Be(), this.context = null, this.deferredContext_ = null, this.containerReused = !1, this.frameState = null;
  }
  /**
   * @param {import('../../DataTile.js').ImageLike} image Image.
   * @param {number} col The column index.
   * @param {number} row The row index.
   * @return {Uint8ClampedArray|null} The image data.
   */
  getImageData(e, t, n) {
    at || hu(), at.clearRect(0, 0, 1, 1);
    let r;
    try {
      at.drawImage(e, t, n, 1, 1, 0, 0, 1, 1), r = at.getImageData(0, 0, 1, 1).data;
    } catch {
      return at = null, null;
    }
    return r;
  }
  /**
   * @param {import('../../Map.js').FrameState} frameState Frame state.
   * @return {string} Background color.
   */
  getBackground(e) {
    let n = this.getLayer().getBackground();
    return typeof n == "function" && (n = n(e.viewState.resolution)), n || void 0;
  }
  /**
   * Get a rendering container from an existing target, if compatible.
   * @param {HTMLElement} target Potential render target.
   * @param {string} transform CSS Transform.
   * @param {string} [backgroundColor] Background color.
   */
  useContainer(e, t, n) {
    const r = this.getLayer().getClassName();
    let s, o;
    if (e && e.className === r && (!n || e && e.style.backgroundColor && Vr(
      gn(e.style.backgroundColor),
      gn(n)
    ))) {
      const a = e.firstElementChild;
      a instanceof HTMLCanvasElement && (o = a.getContext("2d"));
    }
    if (o && o.canvas.style.transform === t ? (this.container = e, this.context = o, this.containerReused = !0) : this.containerReused ? (this.container = null, this.context = null, this.containerReused = !1) : this.container && (this.container.style.backgroundColor = null), !this.container) {
      s = document.createElement("div"), s.className = r;
      let a = s.style;
      a.position = "absolute", a.width = "100%", a.height = "100%", o = xe();
      const l = o.canvas;
      s.appendChild(l), a = l.style, a.position = "absolute", a.left = "0", a.transformOrigin = "top left", this.container = s, this.context = o;
    }
    !this.containerReused && n && !this.container.style.backgroundColor && (this.container.style.backgroundColor = n);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent Clip extent.
   * @protected
   */
  clipUnrotated(e, t, n) {
    const r = yt(n), s = Tn(n), o = En(n), a = yn(n);
    Ae(t.coordinateToPixelTransform, r), Ae(t.coordinateToPixelTransform, s), Ae(t.coordinateToPixelTransform, o), Ae(t.coordinateToPixelTransform, a);
    const l = this.inversePixelTransform;
    Ae(l, r), Ae(l, s), Ae(l, o), Ae(l, a), e.save(), e.beginPath(), e.moveTo(Math.round(r[0]), Math.round(r[1])), e.lineTo(Math.round(s[0]), Math.round(s[1])), e.lineTo(Math.round(o[0]), Math.round(o[1])), e.lineTo(Math.round(a[0]), Math.round(a[1])), e.clip();
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @protected
   */
  prepareContainer(e, t) {
    const n = e.extent, r = e.viewState.resolution, s = e.viewState.rotation, o = e.pixelRatio, a = Math.round(j(n) / r * o), l = Math.round(J(n) / r * o);
    mt(
      this.pixelTransform,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / o,
      1 / o,
      s,
      -a / 2,
      -l / 2
    ), Sc(this.inversePixelTransform, this.pixelTransform);
    const c = Ac(this.pixelTransform);
    if (this.useContainer(t, c, this.getBackground(e)), !this.containerReused) {
      const h = this.context.canvas;
      h.width != a || h.height != l ? (h.width = a, h.height = l) : this.context.clearRect(0, 0, a, l), c !== h.style.transform && (h.style.transform = c);
    }
  }
  /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @private
   */
  dispatchRenderEvent_(e, t, n) {
    const r = this.getLayer();
    if (r.hasListener(e)) {
      const s = new Qt(
        e,
        this.inversePixelTransform,
        n,
        t
      );
      r.dispatchEvent(s);
    }
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  preRender(e, t) {
    this.frameState = t, !t.declutter && this.dispatchRenderEvent_(Ee.PRERENDER, e, t);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  postRender(e, t) {
    t.declutter || this.dispatchRenderEvent_(Ee.POSTRENDER, e, t);
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeferredInternal(e) {
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {import('../../render/canvas/ZIndexContext.js').ZIndexContextProxy} Context.
   */
  getRenderContext(e) {
    return e.declutter && !this.deferredContext_ && (this.deferredContext_ = new cu()), e.declutter ? this.deferredContext_.getContext() : this.context;
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @override
   */
  renderDeferred(e) {
    e.declutter && (this.dispatchRenderEvent_(
      Ee.PRERENDER,
      this.context,
      e
    ), e.declutter && this.deferredContext_ && (this.deferredContext_.draw(this.context), this.deferredContext_.clear()), this.renderDeferredInternal(e), this.dispatchRenderEvent_(
      Ee.POSTRENDER,
      this.context,
      e
    ));
  }
  /**
   * Creates a transform for rendering to an element that will be rotated after rendering.
   * @param {import("../../coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} width Width of the rendered element (in pixels).
   * @param {number} height Height of the rendered element (in pixels).
   * @param {number} offsetX Offset on the x-axis in view coordinates.
   * @protected
   * @return {!import("../../transform.js").Transform} Transform.
   */
  getRenderTransform(e, t, n, r, s, o, a) {
    const l = s / 2, c = o / 2, h = r / t, u = -h, f = -e[0] + a, g = -e[1];
    return mt(
      this.tempTransform,
      l,
      c,
      h,
      u,
      -n,
      f,
      g
    );
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}
function ii(i) {
  return Array.isArray(i) ? Math.min(...i) : i;
}
class fu extends zi {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection (of the data).
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../extent.js").Extent} targetExtent Target extent.
   * @param {number} targetResolution Target resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {FunctionType} getImageFunction
   *     Function returning source images (extent, resolution, pixelRatio).
   * @param {boolean} interpolate Use linear interpolation when resampling.
   */
  constructor(e, t, n, r, s, o, a) {
    let l = e.getExtent();
    l && e.canWrapX() && (l = l.slice(), l[0] = -1 / 0, l[2] = 1 / 0);
    let c = t.getExtent();
    c && t.canWrapX() && (c = c.slice(), c[0] = -1 / 0, c[2] = 1 / 0);
    const h = c ? ge(n, c) : n, u = Me(h), f = Wn(
      e,
      t,
      u,
      r
    ), g = li, m = new gi(
      e,
      t,
      h,
      l,
      f * g,
      r
    ), d = m.calculateSourceExtent(), p = He(d) ? null : o(d, f, s), y = p ? B.IDLE : B.EMPTY, _ = p ? p.getPixelRatio() : 1;
    super(n, r, _, y), this.targetProj_ = t, this.maxSourceExtent_ = l, this.triangulation_ = m, this.targetResolution_ = r, this.targetExtent_ = n, this.sourceImage_ = p, this.sourcePixelRatio_ = _, this.interpolate_ = a, this.canvas_ = null, this.sourceListenerKey_ = null;
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.state == B.LOADING && this.unlistenSource_(), super.disposeInternal();
  }
  /**
   * @return {HTMLCanvasElement} Image.
   * @override
   */
  getImage() {
    return this.canvas_;
  }
  /**
   * @return {import("../proj/Projection.js").default} Projection.
   */
  getProjection() {
    return this.targetProj_;
  }
  /**
   * @private
   */
  reproject_() {
    const e = this.sourceImage_.getState();
    if (e == B.LOADED) {
      const t = j(this.targetExtent_) / this.targetResolution_, n = J(this.targetExtent_) / this.targetResolution_;
      this.canvas_ = di(
        t,
        n,
        this.sourcePixelRatio_,
        ii(this.sourceImage_.getResolution()),
        this.maxSourceExtent_,
        this.targetResolution_,
        this.targetExtent_,
        this.triangulation_,
        [
          {
            extent: this.sourceImage_.getExtent(),
            image: this.sourceImage_.getImage()
          }
        ],
        0,
        void 0,
        this.interpolate_,
        !0
      );
    }
    this.state = e, this.changed();
  }
  /**
   * Load not yet loaded URI.
   * @override
   */
  load() {
    if (this.state == B.IDLE) {
      this.state = B.LOADING, this.changed();
      const e = this.sourceImage_.getState();
      e == B.LOADED || e == B.ERROR ? this.reproject_() : (this.sourceListenerKey_ = De(
        this.sourceImage_,
        Q.CHANGE,
        (t) => {
          const n = this.sourceImage_.getState();
          (n == B.LOADED || n == B.ERROR) && (this.unlistenSource_(), this.reproject_());
        }
      ), this.sourceImage_.load());
    }
  }
  /**
   * @private
   */
  unlistenSource_() {
    Te(
      /** @type {!import("../events.js").EventsKey} */
      this.sourceListenerKey_
    ), this.sourceListenerKey_ = null;
  }
}
const Wt = 4, $n = {
  /**
   * Triggered when an image starts loading.
   * @event module:ol/source/Image.ImageSourceEvent#imageloadstart
   * @api
   */
  IMAGELOADSTART: "imageloadstart",
  /**
   * Triggered when an image finishes loading.
   * @event module:ol/source/Image.ImageSourceEvent#imageloadend
   * @api
   */
  IMAGELOADEND: "imageloadend",
  /**
   * Triggered if image loading results in an error.
   * @event module:ol/source/Image.ImageSourceEvent#imageloaderror
   * @api
   */
  IMAGELOADERROR: "imageloaderror"
};
class gu extends Gt {
  /**
   * @param {string} type Type.
   * @param {import("../Image.js").default} image The image.
   */
  constructor(e, t) {
    super(e), this.image = t;
  }
}
class du extends os {
  /**
   * @param {Options} options Single image source options.
   */
  constructor(e) {
    super({
      attributions: e.attributions,
      projection: e.projection,
      state: e.state,
      interpolate: e.interpolate !== void 0 ? e.interpolate : !0
    }), this.on, this.once, this.un, this.loader = e.loader || null, this.resolutions_ = e.resolutions !== void 0 ? e.resolutions : null, this.reprojectedImage_ = null, this.reprojectedRevision_ = 0, this.image = null, this.wantedExtent_, this.wantedResolution_, this.static_ = e.loader ? e.loader.length === 0 : !1, this.wantedProjection_ = null;
  }
  /**
   * @return {Array<number>|null} Resolutions.
   * @override
   */
  getResolutions() {
    return this.resolutions_;
  }
  /**
   * @param {Array<number>|null} resolutions Resolutions.
   */
  setResolutions(e) {
    this.resolutions_ = e;
  }
  /**
   * @protected
   * @param {number} resolution Resolution.
   * @return {number} Resolution.
   */
  findNearestResolution(e) {
    const t = this.getResolutions();
    if (t) {
      const n = mn(t, e, 0);
      e = t[n];
    }
    return e;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../Image.js").default} Single image.
   */
  getImage(e, t, n, r) {
    const s = this.getProjection();
    if (!s || !r || Ve(s, r))
      return s && (r = s), this.getImageInternal(e, t, n, r);
    if (this.reprojectedImage_) {
      if (this.reprojectedRevision_ == this.getRevision() && Ve(this.reprojectedImage_.getProjection(), r) && this.reprojectedImage_.getResolution() == t && Mo(this.reprojectedImage_.getExtent(), e))
        return this.reprojectedImage_;
      this.reprojectedImage_.dispose(), this.reprojectedImage_ = null;
    }
    return this.reprojectedImage_ = new fu(
      s,
      r,
      e,
      t,
      n,
      (o, a, l) => this.getImageInternal(o, a, l, s),
      this.getInterpolate()
    ), this.reprojectedRevision_ = this.getRevision(), this.reprojectedImage_;
  }
  /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../Image.js").default} Single image.
   * @protected
   */
  getImageInternal(e, t, n, r) {
    if (this.loader) {
      const s = mu(e, t, n, 1), o = this.findNearestResolution(t);
      if (this.image && (this.static_ || this.wantedProjection_ === r && (this.wantedExtent_ && Pt(this.wantedExtent_, s) || Pt(this.image.getExtent(), s)) && (this.wantedResolution_ && ii(this.wantedResolution_) === o || ii(this.image.getResolution()) === o)))
        return this.image;
      this.wantedProjection_ = r, this.wantedExtent_ = s, this.wantedResolution_ = o, this.image = new zi(
        s,
        o,
        n,
        this.loader
      ), this.image.addEventListener(
        Q.CHANGE,
        this.handleImageChange.bind(this)
      );
    }
    return this.image;
  }
  /**
   * Handle image change events.
   * @param {import("../events/Event.js").default} event Event.
   * @protected
   */
  handleImageChange(e) {
    const t = (
      /** @type {import("../Image.js").default} */
      e.target
    );
    let n;
    switch (t.getState()) {
      case B.LOADING:
        this.loading = !0, n = $n.IMAGELOADSTART;
        break;
      case B.LOADED:
        this.loading = !1, n = $n.IMAGELOADEND;
        break;
      case B.ERROR:
        this.loading = !1, n = $n.IMAGELOADERROR;
        break;
      default:
        return;
    }
    this.hasListener(n) && this.dispatchEvent(new gu(n, t));
  }
}
function mu(i, e, t, n) {
  const r = e / t, s = Me(i), o = Xe(j(i) / r, Wt), a = Xe(J(i) / r, Wt), l = Xe((n - 1) * o / 2, Wt), c = o + 2 * l, h = Xe((n - 1) * a / 2, Wt), u = a + 2 * h;
  return Qr(s, r, 0, [
    c,
    u
  ]);
}
class _u extends zi {
  /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {HTMLCanvasElement} canvas Canvas.
   * @param {Loader} [loader] Optional loader function to
   *     support asynchronous canvas drawing.
   */
  constructor(e, t, n, r, s) {
    const o = s !== void 0 ? B.IDLE : B.LOADED;
    super(e, t, n, o), this.loader_ = s !== void 0 ? s : null, this.canvas_ = r, this.error_ = null;
  }
  /**
   * Get any error associated with asynchronous rendering.
   * @return {?Error} Any error that occurred during rendering.
   */
  getError() {
    return this.error_;
  }
  /**
   * Handle async drawing complete.
   * @param {Error} [err] Any error during drawing.
   * @private
   */
  handleLoad_(e) {
    e ? (this.error_ = e, this.state = B.ERROR) : this.state = B.LOADED, this.changed();
  }
  /**
   * Load not yet loaded URI.
   * @override
   */
  load() {
    this.state == B.IDLE && (this.state = B.LOADING, this.changed(), this.loader_(this.handleLoad_.bind(this)));
  }
  /**
   * @return {HTMLCanvasElement} Canvas element.
   * @override
   */
  getImage() {
    return this.canvas_;
  }
}
class pu extends du {
  /**
   * @param {Options} [options] ImageCanvas options.
   */
  constructor(e) {
    e = e || {}, super({
      attributions: e.attributions,
      interpolate: e.interpolate,
      projection: e.projection,
      resolutions: e.resolutions,
      state: e.state
    }), this.canvasFunction_ = e.canvasFunction, this.canvas_ = null, this.renderedRevision_ = 0, this.ratio_ = e.ratio !== void 0 ? e.ratio : 1.5;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../ImageCanvas.js").default} Single image.
   * @override
   */
  getImageInternal(e, t, n, r) {
    t = this.findNearestResolution(t);
    let s = this.canvas_;
    if (s && this.renderedRevision_ == this.getRevision() && s.getResolution() == t && s.getPixelRatio() == n && Pt(s.getExtent(), e))
      return s;
    e = e.slice(), No(e, this.ratio_);
    const o = j(e) / t, a = J(e) / t, l = [o * n, a * n], c = this.canvasFunction_.call(
      this,
      e,
      t,
      n,
      l,
      r
    );
    return c && (s = new _u(e, t, n, c)), this.canvas_ = s, this.renderedRevision_ = this.getRevision(), s;
  }
}
class yu extends js {
  /**
   * @param {Options<ImageSourceType>} [options] Layer options.
   */
  constructor(e) {
    e = e || {}, super(e);
  }
}
class Eu extends uu {
  /**
   * @param {import("../../layer/Image.js").default} imageLayer Image layer.
   */
  constructor(e) {
    super(e), this.image = null;
  }
  /**
   * @return {import('../../DataTile.js').ImageLike} Image.
   */
  getImage() {
    return this.image ? this.image.getImage() : null;
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrame(e) {
    const t = e.layerStatesArray[e.layerIndex], n = e.pixelRatio, r = e.viewState, s = r.resolution, o = this.getLayer().getSource(), a = e.viewHints;
    let l = e.extent;
    if (t.extent !== void 0 && (l = ge(
      l,
      ke(t.extent, r.projection)
    )), !a[be.ANIMATING] && !a[be.INTERACTING] && !He(l))
      if (o) {
        const c = r.projection, h = o.getImage(
          l,
          s,
          n,
          c
        );
        h && (this.loadImage(h) ? this.image = h : h.getState() === B.EMPTY && (this.image = null));
      } else
        this.image = null;
    return !!this.image;
  }
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray} Data at the pixel location.
   * @override
   */
  getData(e) {
    const t = this.frameState;
    if (!t)
      return null;
    const n = this.getLayer(), r = Ae(
      t.pixelToCoordinateTransform,
      e.slice()
    ), s = n.getExtent();
    if (s && !Mt(s, r))
      return null;
    const o = this.image.getExtent(), a = this.image.getImage(), l = j(o), c = Math.floor(
      a.width * ((r[0] - o[0]) / l)
    );
    if (c < 0 || c >= a.width)
      return null;
    const h = J(o), u = Math.floor(
      a.height * ((o[3] - r[1]) / h)
    );
    return u < 0 || u >= a.height ? null : this.getImageData(a, c, u);
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   * @override
   */
  renderFrame(e, t) {
    const n = this.image, r = n.getExtent(), s = n.getResolution(), [o, a] = Array.isArray(s) ? s : [s, s], l = n.getPixelRatio(), c = e.layerStatesArray[e.layerIndex], h = e.pixelRatio, u = e.viewState, f = u.center, g = u.resolution, m = h * o / (g * l), d = h * a / (g * l);
    this.prepareContainer(e, t);
    const p = this.context.canvas.width, y = this.context.canvas.height, _ = this.getRenderContext(e);
    let R = !1, T = !0;
    if (c.extent) {
      const S = ke(
        c.extent,
        u.projection
      );
      T = Ut(S, e.extent), R = T && !Pt(S, e.extent), R && this.clipUnrotated(_, e, S);
    }
    const x = n.getImage(), I = mt(
      this.tempTransform,
      p / 2,
      y / 2,
      m,
      d,
      0,
      l * (r[0] - f[0]) / o,
      l * (f[1] - r[3]) / a
    );
    this.renderedResolution = a * h / l;
    const w = x.width * I[0], E = x.height * I[3];
    if (this.getLayer().getSource().getInterpolate() || (_.imageSmoothingEnabled = !1), this.preRender(_, e), T && w >= 0.5 && E >= 0.5) {
      const S = I[4], v = I[5], A = c.opacity;
      A !== 1 && (_.save(), _.globalAlpha = A), _.drawImage(x, 0, 0, +x.width, +x.height, S, v, w, E), A !== 1 && _.restore();
    }
    return this.postRender(this.context, e), R && _.restore(), _.imageSmoothingEnabled = !0, this.container;
  }
}
class Tu extends yu {
  /**
   * @param {import("./BaseImage.js").Options<ImageSourceType>} [options] Layer options.
   */
  constructor(e) {
    super(e);
  }
  /**
   * @override
   */
  createRenderer() {
    return new Eu(this);
  }
  /**
   * Get data for a pixel location.  A four element RGBA array will be returned.  For requests outside the
   * layer extent, `null` will be returned.  Data for an image can only be retrieved if the
   * source's `crossOrigin` property is set.
   *
   * ```js
   * // display layer data on every pointer move
   * map.on('pointermove', (event) => {
   *   console.log(layer.getData(event.pixel));
   * });
   * ```
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   * @api
   * @override
   */
  getData(e) {
    return super.getData(e);
  }
}
const xu = Tu;
function jr(i, e, t) {
  const [n, r] = i.getPixelFromCoordinate([e[0], e[3]]), [s, o] = i.getPixelFromCoordinate([e[2], e[1]]), a = [n, r, s, o];
  return t ? a.map((l, c) => l + (c < 2 ? t : -t)) : a;
}
function ao(i, e) {
  return Object.keys(e).forEach((t) => {
    if (i[t] === null || typeof i[t] != "object") {
      i[t] = e[t];
      return;
    }
    ao(i[t], e[t]);
  }), i;
}
function Ru(i, e) {
  const [t, n, r, s] = i;
  return e[0] >= t && e[0] <= r && e[1] >= n && e[1] <= s;
}
function wu(i, e, t, n) {
  const r = [], s = i[0] < 0 ? e - Math.abs(i[0] % e) : 0, o = i[1] < 0 ? e - Math.abs(i[1] % e) : 0, a = Math.max(i[0], t[0]) + s, l = Math.max(i[1], t[1]) + o, c = Math.min(i[2], t[2]), h = Math.min(i[3], t[3]);
  for (let u = a; u <= c; u += e)
    for (let f = l; f <= h; f += e)
      Ru(t, [u, f]) && r.push([u, f]);
  return r;
}
class Iu {
  constructor(e) {
    this.options = null, this.map = e, this.padding = 10, this.canvas = document.createElement("canvas");
  }
  /**
   * 使用给定参数初始化一个WebGL函数。
   * 这段代码片段初始化了一个用于单个参数的WebGL函数。
   * 它创建了一个具有特定选项和生成画布的函数的画布来源。该函数基于提供的范围、
   * 分辨率、像素比率、大小和投影等参数生成画布。然后，
   * 函数通过操作画布上下文根据选项对象中提供的数据绘制文本和图标。
   *
   * @param {Object} params - WebGL函数的参数。
   * @return {ImageCanvasSource} WebGL函数的画布源。
   */
  InitWebGLFunctionSingle(e) {
    this.options = e;
    const t = ["℃", "C"];
    function n(s, o) {
      return s >= o.min && s <= o.max;
    }
    return new pu({
      ratio: 1,
      projection: this.map.getView().getProjection().getCode(),
      //'EPSG:4326',
      /**
       * 根据给定的范围、分辨率、像素比率、大小和投影生成画布。
       *
       * @param {type} extent - 参数范围的描述
       * @param {type} resolution - 分辨率参数的描述
       * @param {type} pixelRatio - 像素比率参数的描述
       * @param {type} size - 大小参数的描述
       * @param {type} projection - 投影参数的描述
       * @return {type} 返回值描述
       */
      canvasFunction: (s, o, a, l, c) => {
        var We;
        const h = this.options, { distanceArrow: u, fixedPixel: f, layer: g, showTextRange: m, precision: d } = h, p = d || 1, y = g.style_, _ = g.getSource(), T = _.getResolutions().slice(-1)[0];
        let x = 0;
        if (_.getMetaDatas) {
          const { bandCount: ie } = _.getMetaDatas();
          x = ie;
        } else
          x = y.bandsNumber || 0;
        const I = Object.assign({ min: -9999, max: 9999 }, m);
        var w = this.canvas;
        w.width = l[0], w.height = l[1];
        var E = w.getContext("2d");
        E.scale(a, a);
        let S = {
          //文本样式
          font: "14px Calibri,sans-serif",
          //字体
          // textBaseline: "middle",//垂直对齐
          fill: {
            //填充
            color: "#000"
            //颜色
          },
          stroke: {
            //边框
            color: "#fff",
            //颜色
            width: 4
            //宽度
          }
        };
        h.textStyle && ao(S, h.textStyle), E.fillStyle = "#00000000", E.fillRect(0, 0, l[0], l[1]), E.fillStyle = ((We = S.fill) == null ? void 0 : We.color) || "#000000ff", S.stroke && (E.strokeStyle = S.stroke.strokeStyle || "#ffffff", E.lineWidth = S.stroke.lineWidth || 1), E.font = S.font, E.textAlign = "center";
        let v = c.getCode(), A = g.getProperties().proj, P = A.projection, G = A.offsetNumber || 0, O = A.unit;
        var z = A.extent;
        P != v && (z = la(A.extent, P, v));
        let $ = +u || 80;
        f && ($ = Math.max(T / o, $)), this.padding = Math.ceil($ / 5);
        const le = jr(this.map, s), ce = jr(this.map, z, this.padding), K = wu(ce, $, le, this.padding), { scala: _e, scale: Re, offset: pe } = y, Oe = Re || _e;
        for (let ie = 0; ie < K.length; ie++) {
          let ne = g.getData(K[ie]);
          if (!(ne && ne.length))
            continue;
          let Y = (ne[0] - pe) / Oe;
          if (x >= 2 ? Y = tu(Y, (ne[1] - pe) / Oe).speed : t.includes(O) && (Y -= 273.15), !n(Y, I))
            continue;
          Y = Y.toFixed(p);
          let we = K[ie][0] - G, Le = K[ie][1] - G;
          S.stroke && E.strokeText(Y, we, Le), E.fillText(Y, we, Le), E.fill();
        }
        return w;
      }
    });
  }
  setOptions(e) {
    this.options = e;
  }
}
var Cu = class extends xu {
  /**
   * 整个函数的描述。
   *
   * @param {type} options - 参数描述
   * @return {type} 返回值描述
   */
  constructor() {
    super({}), this.canvasSource = null, this.gridSource = null, this.options = null;
  }
  /**
   * 渲染选项并返回一个解析为true的Promise。
   *
   * @param {Object} options - 要渲染的选项。
   * @return {Promise} 一个解析为true的Promise。
   */
  _render(e) {
    var n;
    if (!((n = e.params) != null && n.layer))
      throw Error('参数options缺少"params.layer"参数');
    this.gridSource = new Iu(e.map), this.options = e;
    let t = this;
    return new Promise((r) => {
      t.canvasSource = t.gridSource.InitWebGLFunctionSingle(e.params), t.setSource(t.canvasSource);
      for (let s in e.params) {
        const o = e.params[s];
        t.set(s, o);
      }
      t.setProperties(e.params), t.set("params", e.params), e.map.once("rendercomplete", function() {
        t.canvasSource.changed(), r(!0);
      });
    });
  }
  /**
   * 设置函数的来源。
   *
   * @param {type} paramName - 参数的描述
   * @return {type} 返回值的描述
   */
  _setSource(e) {
    this.options.params.layer = e;
    let t = this;
    return new Promise((n) => {
      t.canvasSource = t.gridSource.InitWebGLFunctionSingle(t.options.params), t.setSource(t.canvasSource), t.once("sourceready", function(r) {
        t.once("postrender", function(s) {
          t.canvasSource.changed(), n(!0);
        });
      });
    });
  }
  /**
   * 对整个函数的描述。
   *
   * @param {type} paramName - 参数描述
   * @return {type} 返回值描述
   */
  _setStyle(e) {
    let t = {}, n = this.values_ || {};
    for (let s in n) {
      const o = n[s];
      s != "layer" && (t[s] = o);
    }
    let r = oo(t, e.params);
    for (let s in r) {
      const o = r[s];
      this.set(s, o);
    }
    return this.options.params = r, r.layer = n.layer, this.gridSource.setOptions(r), this.canvasSource.changed(), Promise.resolve(r);
  }
  getSource() {
    return this.canvasSource;
  }
  /**
   * 整个函数的描述。
   *
   */
  _remove() {
    this.dispose();
  }
};
const $r = ho({
  setup() {
    let i = null;
    const e = { tifLayer: null, textLayer: null }, t = {};
    let n = (a, l, c) => {
      var g;
      i = a, t.configUnit = c == null ? void 0 : c.configUnit;
      let h = [];
      c.normalize ? h = [
        {
          url: l
          //tif文件
        }
      ] : h = [
        {
          url: l,
          //tif文件
          min: -9999,
          max: 9999
        }
      ];
      let u = {
        layerName: c.id,
        type: "grid",
        zIndex: c.zIndex ?? 1,
        source: {
          //图层的数据源
          normalize: c.normalize ?? !1,
          //是否是多通道 true 表示是多通道，false表示单通道
          // sources: [{ url, min: -9999, max: 9999 }], // tif文件路径
          sources: h,
          // tif文件路径
          wrapX: c.wrapX ?? !0,
          interpolate: (c == null ? void 0 : c.interpolate) ?? !0
          // 控制图层展示是否平滑
        },
        style: {
          //渲染的样式
          color: ((g = c.legendData) == null ? void 0 : g.legend) ?? [],
          //颜色
          radio: +c.radio || 2,
          //颜色拉伸 1表示渐变拉伸，2表示区间值拉伸
          scale: +(c.scale || c.scala),
          // data.legendData?.scala ?? 0,//颜色拉伸
          offset: +c.offset || 0,
          unit: c.unit ?? ""
        },
        opacity: c.opacity ?? 0.78,
        //图层透明度
        sourceOptions: {
          allowFullFile: !1
        },
        mapproj: a.getView().getProjection().getCode()
      }, f = new lu();
      return a.addLayer(f), e.tifLayer = f, f._render(u).then((m) => (c.showText && r(a, f, c), Promise.resolve(e, m)));
    }, r = (a, l, c) => {
      var m;
      const h = { min: -9999, max: 9999 }, u = (((m = c == null ? void 0 : c.legendData) == null ? void 0 : m.legend) || []).map((d) => d[0]);
      u.length && (h.min = u.reduce((d, p) => Math.min(d, p), 0) - 10, h.max = u.reduce((d, p) => Math.max(d, p), 0) + 10);
      let f = {
        map: a,
        //地图实例
        params: {
          type: "grid",
          layer: l,
          //图层实例
          layerName: c.textId ?? c.id,
          //文本图层的图层名字,默认是栅格数据id名称加上_Text
          precision: 1,
          //格网数据显示的小数点的精度
          opacity: 1,
          //透明度
          maxZoom: 15,
          // 最大缩放级别
          zIndex: Number(c.zIndex) + 1,
          //图层层级
          showTextRange: h,
          distanceArrow: c.distanceArrow ?? 80,
          //距离
          textStyle: c.textStyle ?? {
            //文本样式
            font: "11px Calibri,sans-serif",
            //字体
            fill: {
              color: "#000000"
              //填充颜色
            },
            stroke: {
              // strokeStyle:'white',
              lineWidth: 5
            }
          }
        }
      }, g = new Cu();
      a.addLayer(g), g._render(f), e.tifLayer = g;
    };
    const s = (a, l) => {
      let c = l.getData(a), { scale: h = 1, unit: u, offset: f = 0, nodata: g, configUnit: m } = t, d = {
        value: null
      };
      if (c !== g) {
        try {
          m && m === "k" ? d.value = c[0] / h + f : u === "K" ? c[0] === 0 ? d.value = 0 : d.value = f + c[0] / h - 273.15 : d.value = c[0] / h + f;
        } catch {
        }
        return d;
      }
      return "";
    };
    function o() {
      Object.values(e).forEach((a) => {
        a && i && i.removeLayer(a);
      });
    }
    return {
      getData: s,
      addLayer: n,
      removeLayer: o
    };
  }
});
$r.install = function(i) {
  i.component("CME-GridRender", $r);
};
export {
  Uu as L,
  $r as _,
  Xu as a,
  Is as g
};
//# sourceMappingURL=index-96QklR_O.js.map
