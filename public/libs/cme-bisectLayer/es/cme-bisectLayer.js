var Le = Object.defineProperty;
var Pe = (f, p, _) => p in f ? Le(f, p, { enumerable: !0, configurable: !0, writable: !0, value: _ }) : f[p] = _;
var St = (f, p, _) => Pe(f, typeof p != "symbol" ? p + "" : p, _);
import { h as at, openBlock as kt, createElementBlock as Nt, createElementVNode as Et, Fragment as le, renderList as ce, normalizeStyle as ue, toDisplayString as de } from "vue";
/* @preserve
 * @terraformer/wkt - v2.2.0 - MIT
 * Copyright (c) 2012-2024 Environmental Systems Research Institute, Inc.
 * Wed May 15 2024 14:35:51 GMT-0700 (Pacific Daylight Time)
 */
var F = function(f, p, _, y) {
  for (_ = _ || {}, y = f.length; y--; _[f[y]] = p) ;
  return _;
}, Lt = [1, 9], Pt = [1, 10], Rt = [1, 11], jt = [1, 12], At = [1, 13], It = [1, 14], Ct = [1, 15], J = [5, 15, 19], vt = [1, 67], pt = [1, 73], Ft = [1, 87], Bt = [1, 104], K = [15, 19], xt = [1, 110], yt = [1, 116], Xt = [1, 130], Vt = [1, 136], Ut = {
  trace: function() {
  },
  yy: {},
  symbols_: {
    error: 2,
    expressions: 3,
    point: 4,
    EOF: 5,
    linestring: 6,
    polygon: 7,
    multipoint: 8,
    multilinestring: 9,
    multipolygon: 10,
    geometrycollection: 11,
    coordinate: 12,
    DOUBLE_TOK: 13,
    ptarray: 14,
    COMMA: 15,
    ring_list: 16,
    ring: 17,
    "(": 18,
    ")": 19,
    POINT: 20,
    Z: 21,
    ZM: 22,
    M: 23,
    EMPTY: 24,
    point_untagged: 25,
    polygon_list: 26,
    polygon_untagged: 27,
    point_list: 28,
    LINESTRING: 29,
    POLYGON: 30,
    MULTIPOINT: 31,
    MULTILINESTRING: 32,
    MULTIPOLYGON: 33,
    geometry: 34,
    geometry_collection: 35,
    GEOMETRYCOLLECTION: 36,
    $accept: 0,
    $end: 1
  },
  terminals_: {
    2: "error",
    5: "EOF",
    13: "DOUBLE_TOK",
    15: "COMMA",
    18: "(",
    19: ")",
    20: "POINT",
    21: "Z",
    22: "ZM",
    23: "M",
    24: "EMPTY",
    29: "LINESTRING",
    30: "POLYGON",
    31: "MULTIPOINT",
    32: "MULTILINESTRING",
    33: "MULTIPOLYGON",
    36: "GEOMETRYCOLLECTION"
  },
  productions_: [
    0,
    [3, 2],
    [3, 2],
    [3, 2],
    [3, 2],
    [3, 2],
    [3, 2],
    [3, 2],
    [12, 2],
    [12, 3],
    [12, 4],
    [14, 3],
    [14, 1],
    [16, 3],
    [16, 1],
    [17, 3],
    [4, 4],
    [4, 5],
    [4, 5],
    [4, 5],
    [4, 2],
    [25, 1],
    [25, 3],
    [26, 3],
    [26, 1],
    [27, 3],
    [28, 3],
    [28, 1],
    [6, 4],
    [6, 5],
    [6, 5],
    [6, 5],
    [6, 2],
    [7, 4],
    [7, 5],
    [7, 5],
    [7, 5],
    [7, 2],
    [8, 4],
    [8, 5],
    [8, 5],
    [8, 5],
    [8, 2],
    [9, 4],
    [9, 5],
    [9, 5],
    [9, 5],
    [9, 2],
    [10, 4],
    [10, 5],
    [10, 5],
    [10, 5],
    [10, 2],
    [34, 1],
    [34, 1],
    [34, 1],
    [34, 1],
    [34, 1],
    [34, 1],
    [34, 1],
    [35, 3],
    [35, 1],
    [11, 4],
    [11, 5],
    [11, 5],
    [11, 5],
    [11, 2]
  ],
  performAction: function(f, p, _, y, o, n, t) {
    var e = n.length - 1;
    switch (o) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return n[e - 1];
      case 8:
        this.$ = new Ht([Number(n[e - 1]), Number(n[e])]);
        break;
      case 9:
        this.$ = new Ht([Number(n[e - 2]), Number(n[e - 1]), Number(n[e])]);
        break;
      case 10:
        this.$ = new Ht([
          Number(n[e - 3]),
          Number(n[e - 2]),
          Number(n[e - 1]),
          Number(n[e])
        ]);
        break;
      case 11:
      case 26:
        this.$ = n[e - 2].addPoint(n[e]);
        break;
      case 12:
      case 21:
      case 27:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
      case 58:
      case 59:
        this.$ = n[e];
        break;
      case 13:
        this.$ = n[e - 2].addRing(n[e]);
        break;
      case 14:
        this.$ = new ie(n[e]);
        break;
      case 15:
        this.$ = new Ee(n[e - 1]);
        break;
      case 16:
        this.$ = { type: "Point", coordinates: n[e - 1].data[0] };
        break;
      case 17:
        this.$ = {
          type: "Point",
          coordinates: n[e - 1].data[0],
          properties: { z: !0 }
        };
        break;
      case 18:
        this.$ = {
          type: "Point",
          coordinates: n[e - 1].data[0],
          properties: { z: !0, m: !0 }
        };
        break;
      case 19:
        this.$ = {
          type: "Point",
          coordinates: n[e - 1].data[0],
          properties: { m: !0 }
        };
        break;
      case 20:
        this.$ = { type: "Point", coordinates: [] };
        break;
      case 22:
      case 25:
        this.$ = n[e - 1];
        break;
      case 23:
        this.$ = n[e - 2].addPolygon(n[e]);
        break;
      case 24:
        this.$ = new re(n[e]);
        break;
      case 28:
        this.$ = { type: "LineString", coordinates: n[e - 1].data };
        break;
      case 29:
        this.$ = {
          type: "LineString",
          coordinates: n[e - 1].data,
          properties: { z: !0 }
        };
        break;
      case 30:
        this.$ = {
          type: "LineString",
          coordinates: n[e - 1].data,
          properties: { m: !0 }
        };
        break;
      case 31:
        this.$ = {
          type: "LineString",
          coordinates: n[e - 1].data,
          properties: { z: !0, m: !0 }
        };
        break;
      case 32:
        this.$ = { type: "LineString", coordinates: [] };
        break;
      case 33:
        this.$ = { type: "Polygon", coordinates: n[e - 1].toJSON() };
        break;
      case 34:
        this.$ = {
          type: "Polygon",
          coordinates: n[e - 1].toJSON(),
          properties: { z: !0 }
        };
        break;
      case 35:
        this.$ = {
          type: "Polygon",
          coordinates: n[e - 1].toJSON(),
          properties: { m: !0 }
        };
        break;
      case 36:
        this.$ = {
          type: "Polygon",
          coordinates: n[e - 1].toJSON(),
          properties: { z: !0, m: !0 }
        };
        break;
      case 37:
        this.$ = { type: "Polygon", coordinates: [] };
        break;
      case 38:
        this.$ = { type: "MultiPoint", coordinates: n[e - 1].data };
        break;
      case 39:
        this.$ = {
          type: "MultiPoint",
          coordinates: n[e - 1].data,
          properties: { z: !0 }
        };
        break;
      case 40:
        this.$ = {
          type: "MultiPoint",
          coordinates: n[e - 1].data,
          properties: { m: !0 }
        };
        break;
      case 41:
        this.$ = {
          type: "MultiPoint",
          coordinates: n[e - 1].data,
          properties: { z: !0, m: !0 }
        };
        break;
      case 42:
        this.$ = { type: "MultiPoint", coordinates: [] };
        break;
      case 43:
        this.$ = { type: "MultiLineString", coordinates: n[e - 1].toJSON() };
        break;
      case 44:
        this.$ = {
          type: "MultiLineString",
          coordinates: n[e - 1].toJSON(),
          properties: { z: !0 }
        };
        break;
      case 45:
        this.$ = {
          type: "MultiLineString",
          coordinates: n[e - 1].toJSON(),
          properties: { m: !0 }
        };
        break;
      case 46:
        this.$ = {
          type: "MultiLineString",
          coordinates: n[e - 1].toJSON(),
          properties: { z: !0, m: !0 }
        };
        break;
      case 47:
        this.$ = { type: "MultiLineString", coordinates: [] };
        break;
      case 48:
        this.$ = { type: "MultiPolygon", coordinates: n[e - 1].toJSON() };
        break;
      case 49:
        this.$ = {
          type: "MultiPolygon",
          coordinates: n[e - 1].toJSON(),
          properties: { z: !0 }
        };
        break;
      case 50:
        this.$ = {
          type: "MultiPolygon",
          coordinates: n[e - 1].toJSON(),
          properties: { m: !0 }
        };
        break;
      case 51:
        this.$ = {
          type: "MultiPolygon",
          coordinates: n[e - 1].toJSON(),
          properties: { z: !0, m: !0 }
        };
        break;
      case 52:
        this.$ = { type: "MultiPolygon", coordinates: [] };
        break;
      case 60:
        this.$ = n[e - 2].addGeometry(n[e]);
        break;
      case 61:
        this.$ = new se(n[e]);
        break;
      case 62:
        this.$ = { type: "GeometryCollection", geometries: n[e - 1].toJSON() };
        break;
      case 63:
        this.$ = {
          type: "GeometryCollection",
          geometries: n[e - 1].toJSON(),
          properties: { z: !0 }
        };
        break;
      case 64:
        this.$ = {
          type: "GeometryCollection",
          geometries: n[e - 1].toJSON(),
          properties: { m: !0 }
        };
        break;
      case 65:
        this.$ = {
          type: "GeometryCollection",
          geometries: n[e - 1].toJSON(),
          properties: { z: !0, m: !0 }
        };
        break;
      case 66:
        this.$ = { type: "GeometryCollection", geometries: [] };
    }
  },
  table: [
    {
      3: 1,
      4: 2,
      6: 3,
      7: 4,
      8: 5,
      9: 6,
      10: 7,
      11: 8,
      20: Lt,
      29: Pt,
      30: Rt,
      31: jt,
      32: At,
      33: It,
      36: Ct
    },
    { 1: [3] },
    { 5: [1, 16] },
    { 5: [1, 17] },
    { 5: [1, 18] },
    { 5: [1, 19] },
    { 5: [1, 20] },
    { 5: [1, 21] },
    { 5: [1, 22] },
    { 18: [1, 23], 21: [1, 24], 22: [1, 25], 23: [1, 26], 24: [1, 27] },
    { 18: [1, 28], 21: [1, 29], 22: [1, 31], 23: [1, 30], 24: [1, 32] },
    { 18: [1, 33], 21: [1, 34], 22: [1, 36], 23: [1, 35], 24: [1, 37] },
    { 18: [1, 38], 21: [1, 39], 22: [1, 41], 23: [1, 40], 24: [1, 42] },
    { 18: [1, 43], 21: [1, 44], 22: [1, 46], 23: [1, 45], 24: [1, 47] },
    { 18: [1, 48], 21: [1, 49], 22: [1, 51], 23: [1, 50], 24: [1, 52] },
    { 18: [1, 53], 21: [1, 54], 22: [1, 56], 23: [1, 55], 24: [1, 57] },
    { 1: [2, 1] },
    { 1: [2, 2] },
    { 1: [2, 3] },
    { 1: [2, 4] },
    { 1: [2, 5] },
    { 1: [2, 6] },
    { 1: [2, 7] },
    { 12: 59, 13: at, 14: 58 },
    { 18: [1, 61] },
    { 18: [1, 62] },
    { 18: [1, 63] },
    F(J, [2, 20]),
    { 12: 66, 13: at, 18: vt, 25: 65, 28: 64 },
    { 18: [1, 68] },
    { 18: [1, 69] },
    { 18: [1, 70] },
    F(J, [2, 32]),
    { 16: 71, 17: 72, 18: pt },
    { 18: [1, 74] },
    { 18: [1, 75] },
    { 18: [1, 76] },
    F(J, [2, 37]),
    { 12: 66, 13: at, 18: vt, 25: 65, 28: 77 },
    { 18: [1, 78] },
    { 18: [1, 79] },
    { 18: [1, 80] },
    F(J, [2, 42]),
    { 16: 81, 17: 72, 18: pt },
    { 18: [1, 82] },
    { 18: [1, 83] },
    { 18: [1, 84] },
    F(J, [2, 47]),
    { 18: Ft, 26: 85, 27: 86 },
    { 18: [1, 88] },
    { 18: [1, 89] },
    { 18: [1, 90] },
    F(J, [2, 52]),
    {
      4: 93,
      6: 94,
      7: 95,
      8: 96,
      9: 97,
      10: 98,
      11: 99,
      20: Lt,
      29: Pt,
      30: Rt,
      31: jt,
      32: At,
      33: It,
      34: 92,
      35: 91,
      36: Ct
    },
    { 18: [1, 100] },
    { 18: [1, 101] },
    { 18: [1, 102] },
    F(J, [2, 66]),
    { 15: Bt, 19: [1, 103] },
    F(K, [2, 12]),
    { 13: [1, 105] },
    { 12: 59, 13: at, 14: 106 },
    { 12: 59, 13: at, 14: 107 },
    { 12: 59, 13: at, 14: 108 },
    { 15: xt, 19: [1, 109] },
    F(K, [2, 27]),
    F(K, [2, 21]),
    { 12: 111, 13: at },
    { 12: 66, 13: at, 18: vt, 25: 65, 28: 112 },
    { 12: 66, 13: at, 18: vt, 25: 65, 28: 113 },
    { 12: 66, 13: at, 18: vt, 25: 65, 28: 114 },
    { 15: yt, 19: [1, 115] },
    F(K, [2, 14]),
    { 12: 59, 13: at, 14: 117 },
    { 16: 118, 17: 72, 18: pt },
    { 16: 119, 17: 72, 18: pt },
    { 16: 120, 17: 72, 18: pt },
    { 15: xt, 19: [1, 121] },
    { 12: 66, 13: at, 18: vt, 25: 65, 28: 122 },
    { 12: 66, 13: at, 18: vt, 25: 65, 28: 123 },
    { 12: 66, 13: at, 18: vt, 25: 65, 28: 124 },
    { 15: yt, 19: [1, 125] },
    { 16: 126, 17: 72, 18: pt },
    { 16: 127, 17: 72, 18: pt },
    { 16: 128, 17: 72, 18: pt },
    { 15: Xt, 19: [1, 129] },
    F(K, [2, 24]),
    { 16: 131, 17: 72, 18: pt },
    { 18: Ft, 26: 132, 27: 86 },
    { 18: Ft, 26: 133, 27: 86 },
    { 18: Ft, 26: 134, 27: 86 },
    { 15: Vt, 19: [1, 135] },
    F(K, [2, 61]),
    F(K, [2, 53]),
    F(K, [2, 54]),
    F(K, [2, 55]),
    F(K, [2, 56]),
    F(K, [2, 57]),
    F(K, [2, 58]),
    F(K, [2, 59]),
    {
      4: 93,
      6: 94,
      7: 95,
      8: 96,
      9: 97,
      10: 98,
      11: 99,
      20: Lt,
      29: Pt,
      30: Rt,
      31: jt,
      32: At,
      33: It,
      34: 92,
      35: 137,
      36: Ct
    },
    {
      4: 93,
      6: 94,
      7: 95,
      8: 96,
      9: 97,
      10: 98,
      11: 99,
      20: Lt,
      29: Pt,
      30: Rt,
      31: jt,
      32: At,
      33: It,
      34: 92,
      35: 138,
      36: Ct
    },
    {
      4: 93,
      6: 94,
      7: 95,
      8: 96,
      9: 97,
      10: 98,
      11: 99,
      20: Lt,
      29: Pt,
      30: Rt,
      31: jt,
      32: At,
      33: It,
      34: 92,
      35: 139,
      36: Ct
    },
    F(J, [2, 16]),
    { 12: 140, 13: at },
    F(K, [2, 8], { 13: [1, 141] }),
    { 15: Bt, 19: [1, 142] },
    { 15: Bt, 19: [1, 143] },
    { 15: Bt, 19: [1, 144] },
    F(J, [2, 28]),
    { 12: 66, 13: at, 18: vt, 25: 145 },
    { 19: [1, 146] },
    { 15: xt, 19: [1, 147] },
    { 15: xt, 19: [1, 148] },
    { 15: xt, 19: [1, 149] },
    F(J, [2, 33]),
    { 17: 150, 18: pt },
    { 15: Bt, 19: [1, 151] },
    { 15: yt, 19: [1, 152] },
    { 15: yt, 19: [1, 153] },
    { 15: yt, 19: [1, 154] },
    F(J, [2, 38]),
    { 15: xt, 19: [1, 155] },
    { 15: xt, 19: [1, 156] },
    { 15: xt, 19: [1, 157] },
    F(J, [2, 43]),
    { 15: yt, 19: [1, 158] },
    { 15: yt, 19: [1, 159] },
    { 15: yt, 19: [1, 160] },
    F(J, [2, 48]),
    { 18: Ft, 27: 161 },
    { 15: yt, 19: [1, 162] },
    { 15: Xt, 19: [1, 163] },
    { 15: Xt, 19: [1, 164] },
    { 15: Xt, 19: [1, 165] },
    F(J, [2, 62]),
    {
      4: 93,
      6: 94,
      7: 95,
      8: 96,
      9: 97,
      10: 98,
      11: 99,
      20: Lt,
      29: Pt,
      30: Rt,
      31: jt,
      32: At,
      33: It,
      34: 166,
      36: Ct
    },
    { 15: Vt, 19: [1, 167] },
    { 15: Vt, 19: [1, 168] },
    { 15: Vt, 19: [1, 169] },
    F(K, [2, 11]),
    F(K, [2, 9], { 13: [1, 170] }),
    F(J, [2, 17]),
    F(J, [2, 18]),
    F(J, [2, 19]),
    F(K, [2, 26]),
    F(K, [2, 22]),
    F(J, [2, 29]),
    F(J, [2, 30]),
    F(J, [2, 31]),
    F(K, [2, 13]),
    F(K, [2, 15]),
    F(J, [2, 34]),
    F(J, [2, 35]),
    F(J, [2, 36]),
    F(J, [2, 39]),
    F(J, [2, 40]),
    F(J, [2, 41]),
    F(J, [2, 44]),
    F(J, [2, 45]),
    F(J, [2, 46]),
    F(K, [2, 23]),
    F(K, [2, 25]),
    F(J, [2, 49]),
    F(J, [2, 50]),
    F(J, [2, 51]),
    F(K, [2, 60]),
    F(J, [2, 63]),
    F(J, [2, 64]),
    F(J, [2, 65]),
    F(K, [2, 10])
  ],
  defaultActions: {
    16: [2, 1],
    17: [2, 2],
    18: [2, 3],
    19: [2, 4],
    20: [2, 5],
    21: [2, 6],
    22: [2, 7]
  },
  parseError: function(f, p) {
    if (!p.recoverable) {
      var _ = new Error(f);
      throw _.hash = p, _;
    }
    this.trace(f);
  },
  parse: function(f) {
    var p = this, _ = [0], y = [null], o = [], n = this.table, t = "", e = 0, i = 0, r = o.slice.call(arguments, 1), a = Object.create(this.lexer), h = { yy: {} };
    for (var l in this.yy)
      Object.prototype.hasOwnProperty.call(this.yy, l) && (h.yy[l] = this.yy[l]);
    a.setInput(f, h.yy), h.yy.lexer = a, h.yy.parser = this, a.yylloc === void 0 && (a.yylloc = {});
    var c = a.yylloc;
    o.push(c);
    var u = a.options && a.options.ranges;
    typeof h.yy.parseError == "function" ? this.parseError = h.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    for (var d, g, v, m, T, b, x, S, E, w = {}; ; ) {
      if (g = _[_.length - 1], this.defaultActions[g] ? v = this.defaultActions[g] : (d == null && (E = void 0, typeof (E = a.lex() || 1) != "number" && (E = p.symbols_[E] || E), d = E), v = n[g] && n[g][d]), v === void 0 || !v.length || !v[0]) {
        var L = "";
        for (T in S = [], n[g])
          this.terminals_[T] && T > 2 && S.push("'" + this.terminals_[T] + "'");
        L = a.showPosition ? "Parse error on line " + (e + 1) + `:
` + a.showPosition() + `
Expecting ` + S.join(", ") + ", got '" + (this.terminals_[d] || d) + "'" : "Parse error on line " + (e + 1) + ": Unexpected " + (d == 1 ? "end of input" : "'" + (this.terminals_[d] || d) + "'"), this.parseError(L, {
          text: a.match,
          token: this.terminals_[d] || d,
          line: a.yylineno,
          loc: c,
          expected: S
        });
      }
      if (v[0] instanceof Array && v.length > 1)
        throw new Error(
          "Parse Error: multiple actions possible at state: " + g + ", token: " + d
        );
      switch (v[0]) {
        case 1:
          _.push(d), y.push(a.yytext), o.push(a.yylloc), _.push(v[1]), d = null, i = a.yyleng, t = a.yytext, e = a.yylineno, c = a.yylloc;
          break;
        case 2:
          if (b = this.productions_[v[1]][1], w.$ = y[y.length - b], w._$ = {
            first_line: o[o.length - (b || 1)].first_line,
            last_line: o[o.length - 1].last_line,
            first_column: o[o.length - (b || 1)].first_column,
            last_column: o[o.length - 1].last_column
          }, u && (w._$.range = [
            o[o.length - (b || 1)].range[0],
            o[o.length - 1].range[1]
          ]), (m = this.performAction.apply(
            w,
            [t, i, e, h.yy, v[1], y, o].concat(r)
          )) !== void 0)
            return m;
          b && (_ = _.slice(0, -1 * b * 2), y = y.slice(0, -1 * b), o = o.slice(0, -1 * b)), _.push(this.productions_[v[1]][0]), y.push(w.$), o.push(w._$), x = n[_[_.length - 2]][_[_.length - 1]], _.push(x);
          break;
        case 3:
          return !0;
      }
    }
    return !0;
  }
}, Re = {
  EOF: 1,
  parseError: function(f, p) {
    if (!this.yy.parser) throw new Error(f);
    this.yy.parser.parseError(f, p);
  },
  setInput: function(f, p) {
    return this.yy = p || this.yy || {}, this._input = f, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
      first_line: 1,
      first_column: 0,
      last_line: 1,
      last_column: 0
    }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
  },
  input: function() {
    var f = this._input[0];
    return this.yytext += f, this.yyleng++, this.offset++, this.match += f, this.matched += f, f.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), f;
  },
  unput: function(f) {
    var p = f.length, _ = f.split(/(?:\r\n?|\n)/g);
    this._input = f + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - p), this.offset -= p;
    var y = this.match.split(/(?:\r\n?|\n)/g);
    this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), _.length - 1 && (this.yylineno -= _.length - 1);
    var o = this.yylloc.range;
    return this.yylloc = {
      first_line: this.yylloc.first_line,
      last_line: this.yylineno + 1,
      first_column: this.yylloc.first_column,
      last_column: _ ? (_.length === y.length ? this.yylloc.first_column : 0) + y[y.length - _.length].length - _[0].length : this.yylloc.first_column - p
    }, this.options.ranges && (this.yylloc.range = [o[0], o[0] + this.yyleng - p]), this.yyleng = this.yytext.length, this;
  },
  more: function() {
    return this._more = !0, this;
  },
  reject: function() {
    return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError(
      "Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(),
      { text: "", token: null, line: this.yylineno }
    );
  },
  less: function(f) {
    this.unput(this.match.slice(f));
  },
  pastInput: function() {
    var f = this.matched.substr(0, this.matched.length - this.match.length);
    return (f.length > 20 ? "..." : "") + f.substr(-20).replace(/\n/g, "");
  },
  upcomingInput: function() {
    var f = this.match;
    return f.length < 20 && (f += this._input.substr(0, 20 - f.length)), (f.substr(0, 20) + (f.length > 20 ? "..." : "")).replace(/\n/g, "");
  },
  showPosition: function() {
    var f = this.pastInput(), p = new Array(f.length + 1).join("-");
    return f + this.upcomingInput() + `
` + p + "^";
  },
  test_match: function(f, p) {
    var _, y, o;
    if (this.options.backtrack_lexer && (o = {
      yylineno: this.yylineno,
      yylloc: {
        first_line: this.yylloc.first_line,
        last_line: this.last_line,
        first_column: this.yylloc.first_column,
        last_column: this.yylloc.last_column
      },
      yytext: this.yytext,
      match: this.match,
      matches: this.matches,
      matched: this.matched,
      yyleng: this.yyleng,
      offset: this.offset,
      _more: this._more,
      _input: this._input,
      yy: this.yy,
      conditionStack: this.conditionStack.slice(0),
      done: this.done
    }, this.options.ranges && (o.yylloc.range = this.yylloc.range.slice(0))), (y = f[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += y.length), this.yylloc = {
      first_line: this.yylloc.last_line,
      last_line: this.yylineno + 1,
      first_column: this.yylloc.last_column,
      last_column: y ? y[y.length - 1].length - y[y.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + f[0].length
    }, this.yytext += f[0], this.match += f[0], this.matches = f, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(f[0].length), this.matched += f[0], _ = this.performAction.call(
      this,
      this.yy,
      this,
      p,
      this.conditionStack[this.conditionStack.length - 1]
    ), this.done && this._input && (this.done = !1), _)
      return _;
    if (this._backtrack) {
      for (var n in o) this[n] = o[n];
      return !1;
    }
    return !1;
  },
  next: function() {
    if (this.done) return this.EOF;
    var f, p, _, y;
    this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
    for (var o = this._currentRules(), n = 0; n < o.length; n++)
      if ((_ = this._input.match(this.rules[o[n]])) && (!p || _[0].length > p[0].length)) {
        if (p = _, y = n, this.options.backtrack_lexer) {
          if ((f = this.test_match(_, o[n])) !== !1) return f;
          if (this._backtrack) {
            p = !1;
            continue;
          }
          return !1;
        }
        if (!this.options.flex) break;
      }
    return p ? (f = this.test_match(p, o[y])) !== !1 && f : this._input === "" ? this.EOF : this.parseError(
      "Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(),
      { text: "", token: null, line: this.yylineno }
    );
  },
  lex: function() {
    var f = this.next();
    return f || this.lex();
  },
  begin: function(f) {
    this.conditionStack.push(f);
  },
  popState: function() {
    return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
  },
  _currentRules: function() {
    return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
  },
  topState: function(f) {
    return (f = this.conditionStack.length - 1 - Math.abs(f || 0)) >= 0 ? this.conditionStack[f] : "INITIAL";
  },
  pushState: function(f) {
    this.begin(f);
  },
  stateStackSize: function() {
    return this.conditionStack.length;
  },
  options: {},
  performAction: function(f, p, _, y) {
    switch (_) {
      case 0:
        break;
      case 1:
        return 18;
      case 2:
        return 19;
      case 3:
        return 13;
      case 4:
        return 20;
      case 5:
        return 29;
      case 6:
        return 30;
      case 7:
        return 31;
      case 8:
        return 32;
      case 9:
        return 33;
      case 10:
        return 36;
      case 11:
        return 15;
      case 12:
        return 24;
      case 13:
        return 23;
      case 14:
        return 21;
      case 15:
        return 22;
      case 16:
        return 5;
      case 17:
        return "INVALID";
    }
  },
  rules: [
    /^(?:\s+)/,
    /^(?:\()/,
    /^(?:\))/,
    /^(?:-?[0-9]+(\.[0-9]+)?([eE][\-\+]?[0-9]+)?)/,
    /^(?:POINT\b)/,
    /^(?:LINESTRING\b)/,
    /^(?:POLYGON\b)/,
    /^(?:MULTIPOINT\b)/,
    /^(?:MULTILINESTRING\b)/,
    /^(?:MULTIPOLYGON\b)/,
    /^(?:GEOMETRYCOLLECTION\b)/,
    /^(?:,)/,
    /^(?:EMPTY\b)/,
    /^(?:M\b)/,
    /^(?:Z\b)/,
    /^(?:ZM\b)/,
    /^(?:$)/,
    /^(?:.)/
  ],
  conditions: {
    INITIAL: {
      rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      inclusive: !0
    }
  }
};
function _e() {
  this.yy = {};
}
function Ht(f) {
  this.data = [f], this.type = "PointArray";
}
function Ee(f) {
  this.data = f, this.type = "Ring";
}
function ie(f) {
  this.data = [f], this.type = "RingList";
}
function se(f) {
  this.data = [f], this.type = "GeometryList";
}
function re(f) {
  this.data = [f], this.type = "PolygonList";
}
Ut.lexer = Re, _e.prototype = Ut, Ut.Parser = _e, Ut.yy.parseError = function(f) {
  throw f;
}, Ht.prototype.addPoint = function(f) {
  return f.type === "PointArray" ? this.data = this.data.concat(f.data) : this.data.push(f), this;
}, Ht.prototype.toJSON = function() {
  return this.data;
}, Ee.prototype.toJSON = function() {
  for (var f = [], p = 0; p < this.data.data.length; p++)
    f.push(this.data.data[p]);
  return f;
}, ie.prototype.addRing = function(f) {
  return this.data.push(f), this;
}, ie.prototype.toJSON = function() {
  for (var f = [], p = 0; p < this.data.length; p++)
    f.push(this.data[p].toJSON());
  return f.length, f;
}, se.prototype.addGeometry = function(f) {
  return this.data.push(f), this;
}, se.prototype.toJSON = function() {
  return this.data;
}, re.prototype.addPolygon = function(f) {
  return this.data.push(f), this;
}, re.prototype.toJSON = function() {
  for (var f = [], p = 0; p < this.data.length; p++)
    f = f.concat([this.data[p].toJSON()]);
  return f;
};
var fe = function(f) {
  var p;
  try {
    p = Ut.parse(f);
  } catch (_) {
    throw Error("Unable to parse: " + _);
  }
  return p;
};
let je = {
  0: [],
  4: [
    [[0, 0.5], [0.5, 1]]
  ],
  2: [
    [[0.5, 1], [1, 0.5]]
  ],
  6: [
    [[0, 0.5], [1, 0.5]]
  ],
  1: [
    [[0.5, 0], [1, 0.5]]
  ],
  5: [
    [[0, 0.5], [0.5, 0]],
    [[0.5, 1], [1, 0.5]]
  ],
  3: [
    [[0.5, 0], [0.5, 1]]
  ],
  7: [
    [[0, 0.5], [0.5, 0]]
  ],
  8: [
    [[0, 0.5], [0.5, 0]]
  ],
  12: [
    [[0.5, 0], [0.5, 1]]
  ],
  10: [
    [[0.5, 0], [1, 0.5]],
    [[0, 0.5], [0.5, 1]]
  ],
  14: [
    [[0.5, 0], [1, 0.5]]
  ],
  9: [
    [[0, 0.5], [1, 0.5]]
  ],
  13: [
    [[0.5, 1], [1, 0.5]]
  ],
  11: [
    [[0, 0.5], [0.5, 1]]
  ],
  15: []
}, Ae = 12, Ie = 50;
class ee {
  constructor() {
    St(this, "drawGeoJsonFieldMap", function(p, _, y, o, n) {
      _.fillStyle = "#00000000", p.features.forEach(function(t) {
        var e = t.geometry.coordinates[0];
        const i = e[0][0], r = e[0][1];
        _.lineWidth = 1;
        const a = i * o, h = canvas.height - r * n;
        _.beginPath(), _.moveTo(a, h);
        for (var l = 1; l < e.length; l++)
          _.lineTo(e[l][0] * o, canvas.height - e[l][1] * n);
        _.fillStyle = y[t.properties.value], _.closePath(), _.fill();
      });
    });
    /**
     * 颜色转换为rgba的集合
     * @param color 颜色支持#ffffff/#fff/rgb(1,1,1)/rgba(1,1,1,255)
     *
     * @return rgba int数组 [r, g, b, a]
     */
    St(this, "colorToRgba", function(p) {
      let _ = new Array(4);
      if (p.startsWith("#"))
        if (p.length === 7)
          _[0] = parseInt(p.substr(1, 2), 16), _[1] = parseInt(p.substr(3, 2), 16), _[2] = parseInt(p.substr(5, 2), 16), _[3] = 255;
        else if (p.length === 4)
          _[0] = parseInt(p.substr(1, 1), 16), _[1] = parseInt(p.substr(2, 1), 16), _[2] = parseInt(p.substr(3, 1), 16), _[3] = 255;
        else
          throw new Error("color to rgba, wrong color");
      else if (p.startsWith("rgb")) {
        let y = p.substring(p.indexOf("(") + 1, p.indexOf(")")).split(",");
        _[0] = parseInt(y[0].trim()), _[1] = parseInt(y[1].trim()), _[2] = parseInt(y[2].trim()), _[3] = p.startsWith("rgba") && y[3] ? parseInt(y[3].trim()) : 255;
      } else
        throw new Error("error color string");
      return _;
    });
    /**
     * 绘制等值线
     * @param data 数据矩阵
     * @param ctx canvas画笔
     * @param nums 值（等值线的值）
     * @param colors 等值线颜色的集合
     * @param drawNum 是否在等值线上绘制数值
     */
    St(this, "contourLine", function(p, _, y = [], o) {
      if (console.log("style", o), !p || p.length === 0)
        throw new Error("line, data is empty");
      this.lineCanvas(p, _, o);
    });
    /**
     * 获取等值线数据
     * @param data 数据矩阵
     * @param nums 等值线值的集合
     * @param colors 每个等值线值对应的颜色
     *
     * @return lineInfos 等值线点数据、值、颜色的集合[{color: "#fff", num: 10, lines: [{x: 1, y: 1, lines: []}]}]
     */
    St(this, "getLineDatas", function(p, _, y = ["#000"]) {
      console.log(p, _);
      let o = (/* @__PURE__ */ new Date()).getTime(), n = p.length, t = p[0].length, e = {};
      for (let a = 0; a < _.length; a++)
        e[_[a]] = {
          color: y[a < y.length - 1 ? a : y.length - 1],
          num: _[a],
          lines: []
        };
      let i = _.length;
      for (let a = 0, h = n - 1; a < h; a++)
        for (let l = 0, c = t - 1; l < c; l++) {
          let u = p[a][l], d = p[a + 1][l], g = p[a + 1][l + 1], v = p[a][l + 1];
          for (let m = 0; m < i; m++) {
            let T = _[m], b = e[T].lines, x = 0;
            x = u < T ? x : 1, x = d < T ? x : 2 | x, x = g < T ? x : 4 | x, x = v < T ? x : 8 | x, b.push({
              x: l,
              y: a,
              lines: je[x]
            });
          }
        }
      let r = (/* @__PURE__ */ new Date()).getTime();
      return console.log("提取等值线耗时:", r - o), e;
    });
    //  * 绘制等值线
    //  * @param w canvas宽度
    //  * @param h canvas高度
    //  * @param lineInfos 等值线点数据、值、颜色的集合
    //  * @param ctx 画笔 canvas.getContext('2d')
    //  */
    St(this, "lineCanvas", function(p, _, y) {
      const { stroke: o, width: n, LineDash: t, fontSize: e, fontColor: i } = y;
      _.strokeStyle = o || "#f00", _.lineWidth = n ?? 1, _.font = `${e}px 12px bold 黑体`, t && _.setLineDash(t), _.textAlign = "center", _.textBaseline = "middle", _.fillStyle = i ?? "#000000", p.features.forEach((r) => {
        const a = r.geometry.coordinates, h = r.properties.value;
        _.beginPath();
        let l = 0;
        a.forEach((c) => {
          const u = c[0], d = c[1];
          _.lineWidth = 1;
          const g = u * Ae, v = canvas.height - d * Ie;
          g && v && (_.lineTo(g, v), l == 0 && _.fillText(h, g, v), l++);
        }), _.stroke();
      });
    });
  }
}
function Ce(f, p) {
  const _ = [];
  _[0] = Math.sqrt(f * f + p * p);
  let y = 270 - Math.atan2(p, f) * 180 / Math.PI;
  return y >= 360 && (y = y - 360), y < 0 && (y = y + 360), _[1] = y, _;
}
var Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function De(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var xe = { exports: {} };
(function(f, p) {
  (function(_, y) {
    f.exports = y();
  })(typeof self < "u" ? self : Me, function() {
    return function(_) {
      function y(n) {
        if (o[n]) return o[n].exports;
        var t = o[n] = { i: n, l: !1, exports: {} };
        return _[n].call(t.exports, t, t.exports, y), t.l = !0, t.exports;
      }
      var o = {};
      return y.m = _, y.c = o, y.d = function(n, t, e) {
        y.o(n, t) || Object.defineProperty(n, t, { configurable: !1, enumerable: !0, get: e });
      }, y.n = function(n) {
        var t = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return y.d(t, "a", t), t;
      }, y.o = function(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t);
      }, y.p = "", y(y.s = 20);
    }([function(_, y) {
      (function() {
        _.exports = window.createjs;
      }).call(window);
    }, function(_, y) {
      (function() {
        /*!
        * EaselJS
        * Visit http://createjs.com/ for documentation, updates and examples.
        *
        * Copyright (c) 2010 gskinner.com, inc.
        *
        * Permission is hereby granted, free of charge, to any person
        * obtaining a copy of this software and associated documentation
        * files (the "Software"), to deal in the Software without
        * restriction, including without limitation the rights to use,
        * copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the
        * Software is furnished to do so, subject to the following
        * conditions:
        *
        * The above copyright notice and this permission notice shall be
        * included in all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
        * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
        * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
        * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
        * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
        * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
        * OTHER DEALINGS IN THE SOFTWARE.
        */
        this.createjs = this.createjs || {}, createjs.extend = function(o, n) {
          function t() {
            this.constructor = o;
          }
          return t.prototype = n.prototype, o.prototype = new t();
        }, this.createjs = this.createjs || {}, createjs.promote = function(o, n) {
          var t = o.prototype, e = Object.getPrototypeOf && Object.getPrototypeOf(t) || t.__proto__;
          if (e) {
            t[(n += "_") + "constructor"] = e.constructor;
            for (var i in e) t.hasOwnProperty(i) && typeof e[i] == "function" && (t[n + i] = e[i]);
          }
          return o;
        }, this.createjs = this.createjs || {}, createjs.indexOf = function(o, n) {
          for (var t = 0, e = o.length; t < e; t++) if (n === o[t]) return t;
          return -1;
        }, this.createjs = this.createjs || {}, function() {
          function o() {
            throw "UID cannot be instantiated";
          }
          o._nextID = 0, o.get = function() {
            return o._nextID++;
          }, createjs.UID = o;
        }(), this.createjs = this.createjs || {}, createjs.deprecate = function(o, n) {
          return function() {
            var t = "Deprecated property or method '" + n + "'. See docs for info.";
            return console && (console.warn ? console.warn(t) : console.log(t)), o && o.apply(this, arguments);
          };
        }, this.createjs = this.createjs || {}, function() {
          function o(t, e, i) {
            this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!e, this.cancelable = !!i, this.timeStamp = (/* @__PURE__ */ new Date()).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1;
          }
          var n = o.prototype;
          n.preventDefault = function() {
            this.defaultPrevented = this.cancelable && !0;
          }, n.stopPropagation = function() {
            this.propagationStopped = !0;
          }, n.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0;
          }, n.remove = function() {
            this.removed = !0;
          }, n.clone = function() {
            return new o(this.type, this.bubbles, this.cancelable);
          }, n.set = function(t) {
            for (var e in t) this[e] = t[e];
            return this;
          }, n.toString = function() {
            return "[Event (type=" + this.type + ")]";
          }, createjs.Event = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            this._listeners = null, this._captureListeners = null;
          }
          var n = o.prototype;
          o.initialize = function(t) {
            t.addEventListener = n.addEventListener, t.on = n.on, t.removeEventListener = t.off = n.removeEventListener, t.removeAllEventListeners = n.removeAllEventListeners, t.hasEventListener = n.hasEventListener, t.dispatchEvent = n.dispatchEvent, t._dispatchEvent = n._dispatchEvent, t.willTrigger = n.willTrigger;
          }, n.addEventListener = function(t, e, i) {
            var r;
            r = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var a = r[t];
            return a && this.removeEventListener(t, e, i), a = r[t], a ? a.push(e) : r[t] = [e], e;
          }, n.on = function(t, e, i, r, a, h) {
            return e.handleEvent && (i = i || e, e = e.handleEvent), i = i || this, this.addEventListener(t, function(l) {
              e.call(i, l, a), r && l.remove();
            }, h);
          }, n.removeEventListener = function(t, e, i) {
            var r = i ? this._captureListeners : this._listeners;
            if (r) {
              var a = r[t];
              if (a) {
                for (var h = 0, l = a.length; h < l; h++) if (a[h] == e) {
                  l == 1 ? delete r[t] : a.splice(h, 1);
                  break;
                }
              }
            }
          }, n.off = n.removeEventListener, n.removeAllEventListeners = function(t) {
            t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null;
          }, n.dispatchEvent = function(t, e, i) {
            if (typeof t == "string") {
              var r = this._listeners;
              if (!(e || r && r[t])) return !0;
              t = new createjs.Event(t, e, i);
            } else t.target && t.clone && (t = t.clone());
            try {
              t.target = this;
            } catch {
            }
            if (t.bubbles && this.parent) {
              for (var a = this, h = [a]; a.parent; ) h.push(a = a.parent);
              var l, c = h.length;
              for (l = c - 1; l >= 0 && !t.propagationStopped; l--) h[l]._dispatchEvent(t, 1 + (l == 0));
              for (l = 1; l < c && !t.propagationStopped; l++) h[l]._dispatchEvent(t, 3);
            } else this._dispatchEvent(t, 2);
            return !t.defaultPrevented;
          }, n.hasEventListener = function(t) {
            var e = this._listeners, i = this._captureListeners;
            return !!(e && e[t] || i && i[t]);
          }, n.willTrigger = function(t) {
            for (var e = this; e; ) {
              if (e.hasEventListener(t)) return !0;
              e = e.parent;
            }
            return !1;
          }, n.toString = function() {
            return "[EventDispatcher]";
          }, n._dispatchEvent = function(t, e) {
            var i, r, a = e <= 2 ? this._captureListeners : this._listeners;
            if (t && a && (r = a[t.type]) && (i = r.length)) {
              try {
                t.currentTarget = this;
              } catch {
              }
              try {
                t.eventPhase = 0 | e;
              } catch {
              }
              t.removed = !1, r = r.slice();
              for (var h = 0; h < i && !t.immediatePropagationStopped; h++) {
                var l = r[h];
                l.handleEvent ? l.handleEvent(t) : l(t), t.removed && (this.off(t.type, l, e == 1), t.removed = !1);
              }
            }
            e === 2 && this._dispatchEvent(t, 2.1);
          }, createjs.EventDispatcher = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            throw "Ticker cannot be instantiated.";
          }
          o.RAF_SYNCHED = "synched", o.RAF = "raf", o.TIMEOUT = "timeout", o.timingMode = null, o.maxDelta = 0, o.paused = !1, o.removeEventListener = null, o.removeAllEventListeners = null, o.dispatchEvent = null, o.hasEventListener = null, o._listeners = null, createjs.EventDispatcher.initialize(o), o._addEventListener = o.addEventListener, o.addEventListener = function() {
            return !o._inited && o.init(), o._addEventListener.apply(o, arguments);
          }, o._inited = !1, o._startTime = 0, o._pausedTime = 0, o._ticks = 0, o._pausedTicks = 0, o._interval = 50, o._lastTime = 0, o._times = null, o._tickTimes = null, o._timerId = null, o._raf = !0, o._setInterval = function(e) {
            o._interval = e, o._inited && o._setupTick();
          }, o.setInterval = createjs.deprecate(o._setInterval, "Ticker.setInterval"), o._getInterval = function() {
            return o._interval;
          }, o.getInterval = createjs.deprecate(o._getInterval, "Ticker.getInterval"), o._setFPS = function(e) {
            o._setInterval(1e3 / e);
          }, o.setFPS = createjs.deprecate(o._setFPS, "Ticker.setFPS"), o._getFPS = function() {
            return 1e3 / o._interval;
          }, o.getFPS = createjs.deprecate(o._getFPS, "Ticker.getFPS");
          try {
            Object.defineProperties(o, { interval: { get: o._getInterval, set: o._setInterval }, framerate: { get: o._getFPS, set: o._setFPS } });
          } catch (e) {
            console.log(e);
          }
          o.init = function() {
            o._inited || (o._inited = !0, o._times = [], o._tickTimes = [], o._startTime = o._getTime(), o._times.push(o._lastTime = 0), o.interval = o._interval);
          }, o.reset = function() {
            if (o._raf) {
              var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
              e && e(o._timerId);
            } else clearTimeout(o._timerId);
            o.removeAllEventListeners("tick"), o._timerId = o._times = o._tickTimes = null, o._startTime = o._lastTime = o._ticks = o._pausedTime = 0, o._inited = !1;
          }, o.getMeasuredTickTime = function(e) {
            var i = 0, r = o._tickTimes;
            if (!r || r.length < 1) return -1;
            e = Math.min(r.length, e || 0 | o._getFPS());
            for (var a = 0; a < e; a++) i += r[a];
            return i / e;
          }, o.getMeasuredFPS = function(e) {
            var i = o._times;
            return !i || i.length < 2 ? -1 : (e = Math.min(i.length - 1, e || 0 | o._getFPS()), 1e3 / ((i[0] - i[e]) / e));
          }, o.getTime = function(e) {
            return o._startTime ? o._getTime() - (e ? o._pausedTime : 0) : -1;
          }, o.getEventTime = function(e) {
            return o._startTime ? (o._lastTime || o._startTime) - (e ? o._pausedTime : 0) : -1;
          }, o.getTicks = function(e) {
            return o._ticks - (e ? o._pausedTicks : 0);
          }, o._handleSynch = function() {
            o._timerId = null, o._setupTick(), o._getTime() - o._lastTime >= 0.97 * (o._interval - 1) && o._tick();
          }, o._handleRAF = function() {
            o._timerId = null, o._setupTick(), o._tick();
          }, o._handleTimeout = function() {
            o._timerId = null, o._setupTick(), o._tick();
          }, o._setupTick = function() {
            if (o._timerId == null) {
              var e = o.timingMode;
              if (e == o.RAF_SYNCHED || e == o.RAF) {
                var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                if (i) return o._timerId = i(e == o.RAF ? o._handleRAF : o._handleSynch), void (o._raf = !0);
              }
              o._raf = !1, o._timerId = setTimeout(o._handleTimeout, o._interval);
            }
          }, o._tick = function() {
            var e = o.paused, i = o._getTime(), r = i - o._lastTime;
            if (o._lastTime = i, o._ticks++, e && (o._pausedTicks++, o._pausedTime += r), o.hasEventListener("tick")) {
              var a = new createjs.Event("tick"), h = o.maxDelta;
              a.delta = h && r > h ? h : r, a.paused = e, a.time = i, a.runTime = i - o._pausedTime, o.dispatchEvent(a);
            }
            for (o._tickTimes.unshift(o._getTime() - i); o._tickTimes.length > 100; ) o._tickTimes.pop();
            for (o._times.unshift(i); o._times.length > 100; ) o._times.pop();
          };
          var n = window, t = n.performance.now || n.performance.mozNow || n.performance.msNow || n.performance.oNow || n.performance.webkitNow;
          o._getTime = function() {
            return (t && t.call(n.performance) || (/* @__PURE__ */ new Date()).getTime()) - o._startTime;
          }, createjs.Ticker = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.readyState = t.readyState, this._video = t, this._canvas = null, this._lastTime = -1, this.readyState < 2 && t.addEventListener("canplaythrough", this._videoReady.bind(this));
          }
          var n = o.prototype;
          n.getImage = function() {
            if (!(this.readyState < 2)) {
              var t = this._canvas, e = this._video;
              if (t || (t = this._canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), t.width = e.videoWidth, t.height = e.videoHeight), e.readyState >= 2 && e.currentTime !== this._lastTime) {
                var i = t.getContext("2d");
                i.clearRect(0, 0, t.width, t.height), i.drawImage(e, 0, 0, t.width, t.height), this._lastTime = e.currentTime;
              }
              return t;
            }
          }, n._videoReady = function() {
            this.readyState = 2;
          }, createjs.VideoBuffer = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i, r, a, h, l, c, u, d, g) {
            this.Event_constructor(t, e, i), this.stageX = r, this.stageY = a, this.rawX = u ?? r, this.rawY = d ?? a, this.nativeEvent = h, this.pointerID = l, this.primary = !!c, this.relatedTarget = g;
          }
          var n = createjs.extend(o, createjs.Event);
          n._get_localX = function() {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).x;
          }, n._get_localY = function() {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).y;
          }, n._get_isTouch = function() {
            return this.pointerID !== -1;
          };
          try {
            Object.defineProperties(n, { localX: { get: n._get_localX }, localY: { get: n._get_localY }, isTouch: { get: n._get_isTouch } });
          } catch {
          }
          n.clone = function() {
            return new o(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY);
          }, n.toString = function() {
            return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]";
          }, createjs.MouseEvent = createjs.promote(o, "Event");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i, r, a, h) {
            this.setValues(t, e, i, r, a, h);
          }
          var n = o.prototype;
          o.DEG_TO_RAD = Math.PI / 180, o.identity = null, n.setValues = function(t, e, i, r, a, h) {
            return this.a = t ?? 1, this.b = e || 0, this.c = i || 0, this.d = r ?? 1, this.tx = a || 0, this.ty = h || 0, this;
          }, n.append = function(t, e, i, r, a, h) {
            var l = this.a, c = this.b, u = this.c, d = this.d;
            return t == 1 && e == 0 && i == 0 && r == 1 || (this.a = l * t + u * e, this.b = c * t + d * e, this.c = l * i + u * r, this.d = c * i + d * r), this.tx = l * a + u * h + this.tx, this.ty = c * a + d * h + this.ty, this;
          }, n.prepend = function(t, e, i, r, a, h) {
            var l = this.a, c = this.c, u = this.tx;
            return this.a = t * l + i * this.b, this.b = e * l + r * this.b, this.c = t * c + i * this.d, this.d = e * c + r * this.d, this.tx = t * u + i * this.ty + a, this.ty = e * u + r * this.ty + h, this;
          }, n.appendMatrix = function(t) {
            return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty);
          }, n.prependMatrix = function(t) {
            return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty);
          }, n.appendTransform = function(t, e, i, r, a, h, l, c, u) {
            if (a % 360) var d = a * o.DEG_TO_RAD, g = Math.cos(d), v = Math.sin(d);
            else g = 1, v = 0;
            return h || l ? (h *= o.DEG_TO_RAD, l *= o.DEG_TO_RAD, this.append(Math.cos(l), Math.sin(l), -Math.sin(h), Math.cos(h), t, e), this.append(g * i, v * i, -v * r, g * r, 0, 0)) : this.append(g * i, v * i, -v * r, g * r, t, e), (c || u) && (this.tx -= c * this.a + u * this.c, this.ty -= c * this.b + u * this.d), this;
          }, n.prependTransform = function(t, e, i, r, a, h, l, c, u) {
            if (a % 360) var d = a * o.DEG_TO_RAD, g = Math.cos(d), v = Math.sin(d);
            else g = 1, v = 0;
            return (c || u) && (this.tx -= c, this.ty -= u), h || l ? (h *= o.DEG_TO_RAD, l *= o.DEG_TO_RAD, this.prepend(g * i, v * i, -v * r, g * r, 0, 0), this.prepend(Math.cos(l), Math.sin(l), -Math.sin(h), Math.cos(h), t, e)) : this.prepend(g * i, v * i, -v * r, g * r, t, e), this;
          }, n.rotate = function(t) {
            t *= o.DEG_TO_RAD;
            var e = Math.cos(t), i = Math.sin(t), r = this.a, a = this.b;
            return this.a = r * e + this.c * i, this.b = a * e + this.d * i, this.c = -r * i + this.c * e, this.d = -a * i + this.d * e, this;
          }, n.skew = function(t, e) {
            return t *= o.DEG_TO_RAD, e *= o.DEG_TO_RAD, this.append(Math.cos(e), Math.sin(e), -Math.sin(t), Math.cos(t), 0, 0), this;
          }, n.scale = function(t, e) {
            return this.a *= t, this.b *= t, this.c *= e, this.d *= e, this;
          }, n.translate = function(t, e) {
            return this.tx += this.a * t + this.c * e, this.ty += this.b * t + this.d * e, this;
          }, n.identity = function() {
            return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this;
          }, n.invert = function() {
            var t = this.a, e = this.b, i = this.c, r = this.d, a = this.tx, h = t * r - e * i;
            return this.a = r / h, this.b = -e / h, this.c = -i / h, this.d = t / h, this.tx = (i * this.ty - r * a) / h, this.ty = -(t * this.ty - e * a) / h, this;
          }, n.isIdentity = function() {
            return this.tx === 0 && this.ty === 0 && this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1;
          }, n.equals = function(t) {
            return this.tx === t.tx && this.ty === t.ty && this.a === t.a && this.b === t.b && this.c === t.c && this.d === t.d;
          }, n.transformPoint = function(t, e, i) {
            return i = i || {}, i.x = t * this.a + e * this.c + this.tx, i.y = t * this.b + e * this.d + this.ty, i;
          }, n.decompose = function(t) {
            t == null && (t = {}), t.x = this.tx, t.y = this.ty, t.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), t.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
            var e = Math.atan2(-this.c, this.d), i = Math.atan2(this.b, this.a);
            return Math.abs(1 - e / i) < 1e-5 ? (t.rotation = i / o.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (t.rotation += t.rotation <= 0 ? 180 : -180), t.skewX = t.skewY = 0) : (t.skewX = e / o.DEG_TO_RAD, t.skewY = i / o.DEG_TO_RAD), t;
          }, n.copy = function(t) {
            return this.setValues(t.a, t.b, t.c, t.d, t.tx, t.ty);
          }, n.clone = function() {
            return new o(this.a, this.b, this.c, this.d, this.tx, this.ty);
          }, n.toString = function() {
            return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]";
          }, o.identity = new o(), createjs.Matrix2D = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i, r, a) {
            this.setValues(t, e, i, r, a);
          }
          var n = o.prototype;
          n.setValues = function(t, e, i, r, a) {
            return this.visible = t == null || !!t, this.alpha = e ?? 1, this.shadow = i, this.compositeOperation = r, this.matrix = a || this.matrix && this.matrix.identity() || new createjs.Matrix2D(), this;
          }, n.append = function(t, e, i, r, a) {
            return this.alpha *= e, this.shadow = i || this.shadow, this.compositeOperation = r || this.compositeOperation, this.visible = this.visible && t, a && this.matrix.appendMatrix(a), this;
          }, n.prepend = function(t, e, i, r, a) {
            return this.alpha *= e, this.shadow = this.shadow || i, this.compositeOperation = this.compositeOperation || r, this.visible = this.visible && t, a && this.matrix.prependMatrix(a), this;
          }, n.identity = function() {
            return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this;
          }, n.clone = function() {
            return new o(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone());
          }, createjs.DisplayProps = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e) {
            this.setValues(t, e);
          }
          var n = o.prototype;
          n.setValues = function(t, e) {
            return this.x = t || 0, this.y = e || 0, this;
          }, n.copy = function(t) {
            return this.x = t.x, this.y = t.y, this;
          }, n.clone = function() {
            return new o(this.x, this.y);
          }, n.toString = function() {
            return "[Point (x=" + this.x + " y=" + this.y + ")]";
          }, createjs.Point = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i, r) {
            this.setValues(t, e, i, r);
          }
          var n = o.prototype;
          n.setValues = function(t, e, i, r) {
            return this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this;
          }, n.extend = function(t, e, i, r) {
            return i = i || 0, r = r || 0, t + i > this.x + this.width && (this.width = t + i - this.x), e + r > this.y + this.height && (this.height = e + r - this.y), t < this.x && (this.width += this.x - t, this.x = t), e < this.y && (this.height += this.y - e, this.y = e), this;
          }, n.pad = function(t, e, i, r) {
            return this.x -= e, this.y -= t, this.width += e + r, this.height += t + i, this;
          }, n.copy = function(t) {
            return this.setValues(t.x, t.y, t.width, t.height);
          }, n.contains = function(t, e, i, r) {
            return i = i || 0, r = r || 0, t >= this.x && t + i <= this.x + this.width && e >= this.y && e + r <= this.y + this.height;
          }, n.union = function(t) {
            return this.clone().extend(t.x, t.y, t.width, t.height);
          }, n.intersection = function(t) {
            var e = t.x, i = t.y, r = e + t.width, a = i + t.height;
            return this.x > e && (e = this.x), this.y > i && (i = this.y), this.x + this.width < r && (r = this.x + this.width), this.y + this.height < a && (a = this.y + this.height), r <= e || a <= i ? null : new o(e, i, r - e, a - i);
          }, n.intersects = function(t) {
            return t.x <= this.x + this.width && this.x <= t.x + t.width && t.y <= this.y + this.height && this.y <= t.y + t.height;
          }, n.isEmpty = function() {
            return this.width <= 0 || this.height <= 0;
          }, n.clone = function() {
            return new o(this.x, this.y, this.width, this.height);
          }, n.toString = function() {
            return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]";
          }, createjs.Rectangle = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i, r, a, h, l) {
            t.addEventListener && (this.target = t, this.overLabel = i ?? "over", this.outLabel = e ?? "out", this.downLabel = r ?? "down", this.play = a, this._isPressed = !1, this._isOver = !1, this._enabled = !1, t.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), h && (l && (h.actionsEnabled = !1, h.gotoAndStop && h.gotoAndStop(l)), t.hitArea = h));
          }
          var n = o.prototype;
          n._setEnabled = function(t) {
            if (t != this._enabled) {
              var e = this.target;
              this._enabled = t, t ? (e.cursor = "pointer", e.addEventListener("rollover", this), e.addEventListener("rollout", this), e.addEventListener("mousedown", this), e.addEventListener("pressup", this), e._reset && (e.__reset = e._reset, e._reset = this._reset)) : (e.cursor = null, e.removeEventListener("rollover", this), e.removeEventListener("rollout", this), e.removeEventListener("mousedown", this), e.removeEventListener("pressup", this), e.__reset && (e._reset = e.__reset, delete e.__reset));
            }
          }, n.setEnabled = createjs.deprecate(n._setEnabled, "ButtonHelper.setEnabled"), n._getEnabled = function() {
            return this._enabled;
          }, n.getEnabled = createjs.deprecate(n._getEnabled, "ButtonHelper.getEnabled");
          try {
            Object.defineProperties(n, { enabled: { get: n._getEnabled, set: n._setEnabled } });
          } catch {
          }
          n.toString = function() {
            return "[ButtonHelper]";
          }, n.handleEvent = function(t) {
            var e, i = this.target, r = t.type;
            r == "mousedown" ? (this._isPressed = !0, e = this.downLabel) : r == "pressup" ? (this._isPressed = !1, e = this._isOver ? this.overLabel : this.outLabel) : r == "rollover" ? (this._isOver = !0, e = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, e = this._isPressed ? this.overLabel : this.outLabel), this.play ? i.gotoAndPlay && i.gotoAndPlay(e) : i.gotoAndStop && i.gotoAndStop(e);
          }, n._reset = function() {
            var t = this.paused;
            this.__reset(), this.paused = t;
          }, createjs.ButtonHelper = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i, r) {
            this.color = t || "black", this.offsetX = e || 0, this.offsetY = i || 0, this.blur = r || 0;
          }
          var n = o.prototype;
          o.identity = new o("transparent", 0, 0, 0), n.toString = function() {
            return "[Shadow]";
          }, n.clone = function() {
            return new o(this.color, this.offsetX, this.offsetY, this.blur);
          }, createjs.Shadow = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations = null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY = 0, this._spacing = 0, this._margin = 0, this._parseData(t);
          }
          var n = createjs.extend(o, createjs.EventDispatcher);
          n._getAnimations = function() {
            return this._animations.slice();
          }, n.getAnimations = createjs.deprecate(n._getAnimations, "SpriteSheet.getAnimations");
          try {
            Object.defineProperties(n, { animations: { get: n._getAnimations } });
          } catch {
          }
          n.getNumFrames = function(t) {
            if (t == null) return this._frames ? this._frames.length : this._numFrames || 0;
            var e = this._data[t];
            return e == null ? 0 : e.frames.length;
          }, n.getAnimation = function(t) {
            return this._data[t];
          }, n.getFrame = function(t) {
            var e;
            return this._frames && (e = this._frames[t]) ? e : null;
          }, n.getFrameBounds = function(t, e) {
            var i = this.getFrame(t);
            return i ? (e || new createjs.Rectangle()).setValues(-i.regX, -i.regY, i.rect.width, i.rect.height) : null;
          }, n.toString = function() {
            return "[SpriteSheet]";
          }, n.clone = function() {
            throw "SpriteSheet cannot be cloned.";
          }, n._parseData = function(t) {
            var e, i, r, a;
            if (t != null) {
              if (this.framerate = t.framerate || 0, t.images && (i = t.images.length) > 0) for (a = this._images = [], e = 0; e < i; e++) {
                var h = t.images[e];
                if (typeof h == "string") {
                  var l = h;
                  h = document.createElement("img"), h.src = l;
                }
                a.push(h), h.getContext || h.naturalWidth || (this._loadCount++, this.complete = !1, function(m, T) {
                  h.onload = function() {
                    m._handleImageLoad(T);
                  };
                }(this, l), function(m, T) {
                  h.onerror = function() {
                    m._handleImageError(T);
                  };
                }(this, l));
              }
              if (t.frames != null) if (Array.isArray(t.frames)) for (this._frames = [], a = t.frames, e = 0, i = a.length; e < i; e++) {
                var c = a[e];
                this._frames.push({ image: this._images[c[4] ? c[4] : 0], rect: new createjs.Rectangle(c[0], c[1], c[2], c[3]), regX: c[5] || 0, regY: c[6] || 0 });
              }
              else r = t.frames, this._frameWidth = r.width, this._frameHeight = r.height, this._regX = r.regX || 0, this._regY = r.regY || 0, this._spacing = r.spacing || 0, this._margin = r.margin || 0, this._numFrames = r.count, this._loadCount == 0 && this._calculateFrames();
              if (this._animations = [], (r = t.animations) != null) {
                this._data = {};
                var u;
                for (u in r) {
                  var d = { name: u }, g = r[u];
                  if (typeof g == "number") a = d.frames = [g];
                  else if (Array.isArray(g)) if (g.length == 1) d.frames = [g[0]];
                  else for (d.speed = g[3], d.next = g[2], a = d.frames = [], e = g[0]; e <= g[1]; e++) a.push(e);
                  else {
                    d.speed = g.speed, d.next = g.next;
                    var v = g.frames;
                    a = d.frames = typeof v == "number" ? [v] : v.slice(0);
                  }
                  d.next !== !0 && d.next !== void 0 || (d.next = u), (d.next === !1 || a.length < 2 && d.next == u) && (d.next = null), d.speed || (d.speed = 1), this._animations.push(u), this._data[u] = d;
                }
              }
            }
          }, n._handleImageLoad = function(t) {
            --this._loadCount == 0 && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"));
          }, n._handleImageError = function(t) {
            var e = new createjs.Event("error");
            e.src = t, this.dispatchEvent(e), --this._loadCount == 0 && this.dispatchEvent("complete");
          }, n._calculateFrames = function() {
            if (!this._frames && this._frameWidth != 0) {
              this._frames = [];
              var t = this._numFrames || 1e5, e = 0, i = this._frameWidth, r = this._frameHeight, a = this._spacing, h = this._margin;
              t: for (var l = 0, c = this._images; l < c.length; l++) for (var u = c[l], d = u.width || u.naturalWidth, g = u.height || u.naturalHeight, v = h; v <= g - h - r; ) {
                for (var m = h; m <= d - h - i; ) {
                  if (e >= t) break t;
                  e++, this._frames.push({ image: u, rect: new createjs.Rectangle(m, v, i, r), regX: this._regX, regY: this._regY }), m += i + a;
                }
                v += r + a;
              }
              this._numFrames = e;
            }
          }, createjs.SpriteSheet = createjs.promote(o, "EventDispatcher");
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null, this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this._fill = null, this._instructions = [], this._commitIndex = 0, this._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear();
          }
          var n = o.prototype, t = o;
          o.getRGB = function(i, r, a, h) {
            return i != null && a == null && (h = r, a = 255 & i, r = i >> 8 & 255, i = i >> 16 & 255), h == null ? "rgb(" + i + "," + r + "," + a + ")" : "rgba(" + i + "," + r + "," + a + "," + h + ")";
          }, o.getHSL = function(i, r, a, h) {
            return h == null ? "hsl(" + i % 360 + "," + r + "%," + a + "%)" : "hsla(" + i % 360 + "," + r + "%," + a + "%," + h + ")";
          }, o.BASE_64 = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25, a: 26, b: 27, c: 28, d: 29, e: 30, f: 31, g: 32, h: 33, i: 34, j: 35, k: 36, l: 37, m: 38, n: 39, o: 40, p: 41, q: 42, r: 43, s: 44, t: 45, u: 46, v: 47, w: 48, x: 49, y: 50, z: 51, 0: 52, 1: 53, 2: 54, 3: 55, 4: 56, 5: 57, 6: 58, 7: 59, 8: 60, 9: 61, "+": 62, "/": 63 }, o.STROKE_CAPS_MAP = ["butt", "round", "square"], o.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
          var e = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
          e.getContext && (o._ctx = e.getContext("2d"), e.width = e.height = 1), n._getInstructions = function() {
            return this._updateInstructions(), this._instructions;
          }, n.getInstructions = createjs.deprecate(n._getInstructions, "Graphics.getInstructions");
          try {
            Object.defineProperties(n, { instructions: { get: n._getInstructions } });
          } catch {
          }
          n.isEmpty = function() {
            return !(this._instructions.length || this._activeInstructions.length);
          }, n.draw = function(i, r) {
            this._updateInstructions();
            for (var a = this._instructions, h = this._storeIndex, l = a.length; h < l; h++) a[h].exec(i, r);
          }, n.drawAsPath = function(i) {
            this._updateInstructions();
            for (var r, a = this._instructions, h = this._storeIndex, l = a.length; h < l; h++) (r = a[h]).path !== !1 && r.exec(i);
          }, n.moveTo = function(i, r) {
            return this.append(new t.MoveTo(i, r), !0);
          }, n.lineTo = function(i, r) {
            return this.append(new t.LineTo(i, r));
          }, n.arcTo = function(i, r, a, h, l) {
            return this.append(new t.ArcTo(i, r, a, h, l));
          }, n.arc = function(i, r, a, h, l, c) {
            return this.append(new t.Arc(i, r, a, h, l, c));
          }, n.quadraticCurveTo = function(i, r, a, h) {
            return this.append(new t.QuadraticCurveTo(i, r, a, h));
          }, n.bezierCurveTo = function(i, r, a, h, l, c) {
            return this.append(new t.BezierCurveTo(i, r, a, h, l, c));
          }, n.rect = function(i, r, a, h) {
            return this.append(new t.Rect(i, r, a, h));
          }, n.closePath = function() {
            return this._activeInstructions.length ? this.append(new t.ClosePath()) : this;
          }, n.clear = function() {
            return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1, this;
          }, n.beginFill = function(i) {
            return this._setFill(i ? new t.Fill(i) : null);
          }, n.beginLinearGradientFill = function(i, r, a, h, l, c) {
            return this._setFill(new t.Fill().linearGradient(i, r, a, h, l, c));
          }, n.beginRadialGradientFill = function(i, r, a, h, l, c, u, d) {
            return this._setFill(new t.Fill().radialGradient(i, r, a, h, l, c, u, d));
          }, n.beginBitmapFill = function(i, r, a) {
            return this._setFill(new t.Fill(null, a).bitmap(i, r));
          }, n.endFill = function() {
            return this.beginFill();
          }, n.setStrokeStyle = function(i, r, a, h, l) {
            return this._updateInstructions(!0), this._strokeStyle = this.command = new t.StrokeStyle(i, r, a, h, l), this._stroke && (this._stroke.ignoreScale = l), this._strokeIgnoreScale = l, this;
          }, n.setStrokeDash = function(i, r) {
            return this._updateInstructions(!0), this._strokeDash = this.command = new t.StrokeDash(i, r), this;
          }, n.beginStroke = function(i) {
            return this._setStroke(i ? new t.Stroke(i) : null);
          }, n.beginLinearGradientStroke = function(i, r, a, h, l, c) {
            return this._setStroke(new t.Stroke().linearGradient(i, r, a, h, l, c));
          }, n.beginRadialGradientStroke = function(i, r, a, h, l, c, u, d) {
            return this._setStroke(new t.Stroke().radialGradient(i, r, a, h, l, c, u, d));
          }, n.beginBitmapStroke = function(i, r) {
            return this._setStroke(new t.Stroke().bitmap(i, r));
          }, n.endStroke = function() {
            return this.beginStroke();
          }, n.curveTo = n.quadraticCurveTo, n.drawRect = n.rect, n.drawRoundRect = function(i, r, a, h, l) {
            return this.drawRoundRectComplex(i, r, a, h, l, l, l, l);
          }, n.drawRoundRectComplex = function(i, r, a, h, l, c, u, d) {
            return this.append(new t.RoundRect(i, r, a, h, l, c, u, d));
          }, n.drawCircle = function(i, r, a) {
            return this.append(new t.Circle(i, r, a));
          }, n.drawEllipse = function(i, r, a, h) {
            return this.append(new t.Ellipse(i, r, a, h));
          }, n.drawPolyStar = function(i, r, a, h, l, c) {
            return this.append(new t.PolyStar(i, r, a, h, l, c));
          }, n.append = function(i, r) {
            return this._activeInstructions.push(i), this.command = i, r || (this._dirty = !0), this;
          }, n.decodePath = function(i) {
            for (var r = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], a = [2, 2, 4, 6, 0], h = 0, l = i.length, c = [], u = 0, d = 0, g = o.BASE_64; h < l; ) {
              var v = i.charAt(h), m = g[v], T = m >> 3, b = r[T];
              if (!b || 3 & m) throw "bad path data (@" + h + "): " + v;
              var x = a[T];
              T || (u = d = 0), c.length = 0, h++;
              for (var S = 2 + (m >> 2 & 1), E = 0; E < x; E++) {
                var w = g[i.charAt(h)], L = w >> 5 ? -1 : 1;
                w = (31 & w) << 6 | g[i.charAt(h + 1)], S == 3 && (w = w << 6 | g[i.charAt(h + 2)]), w = L * w / 10, E % 2 ? u = w += u : d = w += d, c[E] = w, h += S;
              }
              b.apply(this, c);
            }
            return this;
          }, n.store = function() {
            return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this;
          }, n.unstore = function() {
            return this._storeIndex = 0, this;
          }, n.clone = function() {
            var i = new o();
            return i.command = this.command, i._stroke = this._stroke, i._strokeStyle = this._strokeStyle, i._strokeDash = this._strokeDash, i._strokeIgnoreScale = this._strokeIgnoreScale, i._fill = this._fill, i._instructions = this._instructions.slice(), i._commitIndex = this._commitIndex, i._activeInstructions = this._activeInstructions.slice(), i._dirty = this._dirty, i._storeIndex = this._storeIndex, i;
          }, n.toString = function() {
            return "[Graphics]";
          }, n.mt = n.moveTo, n.lt = n.lineTo, n.at = n.arcTo, n.bt = n.bezierCurveTo, n.qt = n.quadraticCurveTo, n.a = n.arc, n.r = n.rect, n.cp = n.closePath, n.c = n.clear, n.f = n.beginFill, n.lf = n.beginLinearGradientFill, n.rf = n.beginRadialGradientFill, n.bf = n.beginBitmapFill, n.ef = n.endFill, n.ss = n.setStrokeStyle, n.sd = n.setStrokeDash, n.s = n.beginStroke, n.ls = n.beginLinearGradientStroke, n.rs = n.beginRadialGradientStroke, n.bs = n.beginBitmapStroke, n.es = n.endStroke, n.dr = n.drawRect, n.rr = n.drawRoundRect, n.rc = n.drawRoundRectComplex, n.dc = n.drawCircle, n.de = n.drawEllipse, n.dp = n.drawPolyStar, n.p = n.decodePath, n._updateInstructions = function(i) {
            var r = this._instructions, a = this._activeInstructions, h = this._commitIndex;
            if (this._dirty && a.length) {
              r.length = h, r.push(o.beginCmd);
              var l = a.length, c = r.length;
              r.length = c + l;
              for (var u = 0; u < l; u++) r[u + c] = a[u];
              this._fill && r.push(this._fill), this._stroke && (this._strokeDash !== this._oldStrokeDash && r.push(this._strokeDash), this._strokeStyle !== this._oldStrokeStyle && r.push(this._strokeStyle), i && (this._oldStrokeStyle = this._strokeStyle, this._oldStrokeDash = this._strokeDash), r.push(this._stroke)), this._dirty = !1;
            }
            i && (a.length = 0, this._commitIndex = r.length);
          }, n._setFill = function(i) {
            return this._updateInstructions(!0), this.command = this._fill = i, this;
          }, n._setStroke = function(i) {
            return this._updateInstructions(!0), (this.command = this._stroke = i) && (i.ignoreScale = this._strokeIgnoreScale), this;
          }, (t.LineTo = function(i, r) {
            this.x = i, this.y = r;
          }).prototype.exec = function(i) {
            i.lineTo(this.x, this.y);
          }, (t.MoveTo = function(i, r) {
            this.x = i, this.y = r;
          }).prototype.exec = function(i) {
            i.moveTo(this.x, this.y);
          }, (t.ArcTo = function(i, r, a, h, l) {
            this.x1 = i, this.y1 = r, this.x2 = a, this.y2 = h, this.radius = l;
          }).prototype.exec = function(i) {
            i.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
          }, (t.Arc = function(i, r, a, h, l, c) {
            this.x = i, this.y = r, this.radius = a, this.startAngle = h, this.endAngle = l, this.anticlockwise = !!c;
          }).prototype.exec = function(i) {
            i.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
          }, (t.QuadraticCurveTo = function(i, r, a, h) {
            this.cpx = i, this.cpy = r, this.x = a, this.y = h;
          }).prototype.exec = function(i) {
            i.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
          }, (t.BezierCurveTo = function(i, r, a, h, l, c) {
            this.cp1x = i, this.cp1y = r, this.cp2x = a, this.cp2y = h, this.x = l, this.y = c;
          }).prototype.exec = function(i) {
            i.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
          }, (t.Rect = function(i, r, a, h) {
            this.x = i, this.y = r, this.w = a, this.h = h;
          }).prototype.exec = function(i) {
            i.rect(this.x, this.y, this.w, this.h);
          }, (t.ClosePath = function() {
          }).prototype.exec = function(i) {
            i.closePath();
          }, (t.BeginPath = function() {
          }).prototype.exec = function(i) {
            i.beginPath();
          }, n = (t.Fill = function(i, r) {
            this.style = i, this.matrix = r;
          }).prototype, n.exec = function(i) {
            if (this.style) {
              i.fillStyle = this.style;
              var r = this.matrix;
              r && (i.save(), i.transform(r.a, r.b, r.c, r.d, r.tx, r.ty)), i.fill(), r && i.restore();
            }
          }, n.linearGradient = function(i, r, a, h, l, c) {
            for (var u = this.style = o._ctx.createLinearGradient(a, h, l, c), d = 0, g = i.length; d < g; d++) u.addColorStop(r[d], i[d]);
            return u.props = { colors: i, ratios: r, x0: a, y0: h, x1: l, y1: c, type: "linear" }, this;
          }, n.radialGradient = function(i, r, a, h, l, c, u, d) {
            for (var g = this.style = o._ctx.createRadialGradient(a, h, l, c, u, d), v = 0, m = i.length; v < m; v++) g.addColorStop(r[v], i[v]);
            return g.props = { colors: i, ratios: r, x0: a, y0: h, r0: l, x1: c, y1: u, r1: d, type: "radial" }, this;
          }, n.bitmap = function(i, r) {
            return (i.naturalWidth || i.getContext || i.readyState >= 2) && ((this.style = o._ctx.createPattern(i, r || "")).props = { image: i, repetition: r, type: "bitmap" }), this;
          }, n.path = !1, n = (t.Stroke = function(i, r) {
            this.style = i, this.ignoreScale = r;
          }).prototype, n.exec = function(i) {
            this.style && (i.strokeStyle = this.style, this.ignoreScale && (i.save(), i.setTransform(1, 0, 0, 1, 0, 0)), i.stroke(), this.ignoreScale && i.restore());
          }, n.linearGradient = t.Fill.prototype.linearGradient, n.radialGradient = t.Fill.prototype.radialGradient, n.bitmap = t.Fill.prototype.bitmap, n.path = !1, n = (t.StrokeStyle = function(i, r, a, h, l) {
            this.width = i, this.caps = r, this.joints = a, this.miterLimit = h, this.ignoreScale = l;
          }).prototype, n.exec = function(i) {
            i.lineWidth = this.width == null ? "1" : this.width, i.lineCap = this.caps == null ? "butt" : isNaN(this.caps) ? this.caps : o.STROKE_CAPS_MAP[this.caps], i.lineJoin = this.joints == null ? "miter" : isNaN(this.joints) ? this.joints : o.STROKE_JOINTS_MAP[this.joints], i.miterLimit = this.miterLimit == null ? "10" : this.miterLimit, i.ignoreScale = this.ignoreScale != null && this.ignoreScale;
          }, n.path = !1, (t.StrokeDash = function(i, r) {
            this.segments = i, this.offset = r || 0;
          }).prototype.exec = function(i) {
            i.setLineDash && (i.setLineDash(this.segments || t.StrokeDash.EMPTY_SEGMENTS), i.lineDashOffset = this.offset || 0);
          }, t.StrokeDash.EMPTY_SEGMENTS = [], (t.RoundRect = function(i, r, a, h, l, c, u, d) {
            this.x = i, this.y = r, this.w = a, this.h = h, this.radiusTL = l, this.radiusTR = c, this.radiusBR = u, this.radiusBL = d;
          }).prototype.exec = function(i) {
            var r = (g < v ? g : v) / 2, a = 0, h = 0, l = 0, c = 0, u = this.x, d = this.y, g = this.w, v = this.h, m = this.radiusTL, T = this.radiusTR, b = this.radiusBR, x = this.radiusBL;
            m < 0 && (m *= a = -1), m > r && (m = r), T < 0 && (T *= h = -1), T > r && (T = r), b < 0 && (b *= l = -1), b > r && (b = r), x < 0 && (x *= c = -1), x > r && (x = r), i.moveTo(u + g - T, d), i.arcTo(u + g + T * h, d - T * h, u + g, d + T, T), i.lineTo(u + g, d + v - b), i.arcTo(u + g + b * l, d + v + b * l, u + g - b, d + v, b), i.lineTo(u + x, d + v), i.arcTo(u - x * c, d + v + x * c, u, d + v - x, x), i.lineTo(u, d + m), i.arcTo(u - m * a, d - m * a, u + m, d, m), i.closePath();
          }, (t.Circle = function(i, r, a) {
            this.x = i, this.y = r, this.radius = a;
          }).prototype.exec = function(i) {
            i.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
          }, (t.Ellipse = function(i, r, a, h) {
            this.x = i, this.y = r, this.w = a, this.h = h;
          }).prototype.exec = function(i) {
            var r = this.x, a = this.y, h = this.w, l = this.h, c = 0.5522848, u = h / 2 * c, d = l / 2 * c, g = r + h, v = a + l, m = r + h / 2, T = a + l / 2;
            i.moveTo(r, T), i.bezierCurveTo(r, T - d, m - u, a, m, a), i.bezierCurveTo(m + u, a, g, T - d, g, T), i.bezierCurveTo(g, T + d, m + u, v, m, v), i.bezierCurveTo(m - u, v, r, T + d, r, T);
          }, (t.PolyStar = function(i, r, a, h, l, c) {
            this.x = i, this.y = r, this.radius = a, this.sides = h, this.pointSize = l, this.angle = c;
          }).prototype.exec = function(i) {
            var r = this.x, a = this.y, h = this.radius, l = (this.angle || 0) / 180 * Math.PI, c = this.sides, u = 1 - (this.pointSize || 0), d = Math.PI / c;
            i.moveTo(r + Math.cos(l) * h, a + Math.sin(l) * h);
            for (var g = 0; g < c; g++) l += d, u != 1 && i.lineTo(r + Math.cos(l) * h * u, a + Math.sin(l) * h * u), l += d, i.lineTo(r + Math.cos(l) * h, a + Math.sin(l) * h);
            i.closePath();
          }, o.beginCmd = new t.BeginPath(), createjs.Graphics = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.bitmapCache = null, this.id = createjs.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name = null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this.snapToPixel = !0, this.filters = null, this.mask = null, this.hitArea = null, this.cursor = null, this._props = new createjs.DisplayProps(), this._rectangle = new createjs.Rectangle(), this._bounds = null, this._webGLRenderStyle = o._StageGL_NONE;
          }
          var n = createjs.extend(o, createjs.EventDispatcher);
          o._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], o.suppressCrossDomainErrors = !1, o._snapToPixelEnabled = !1, o._StageGL_NONE = 0, o._StageGL_SPRITE = 1, o._StageGL_BITMAP = 2;
          var t = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
          t.getContext && (o._hitTestCanvas = t, o._hitTestContext = t.getContext("2d"), t.width = t.height = 1), n._getStage = function() {
            for (var e = this, i = createjs.Stage; e.parent; ) e = e.parent;
            return e instanceof i ? e : null;
          }, n.getStage = createjs.deprecate(n._getStage, "DisplayObject.getStage");
          try {
            Object.defineProperties(n, { stage: { get: n._getStage }, cacheID: { get: function() {
              return this.bitmapCache && this.bitmapCache.cacheID;
            }, set: function(e) {
              this.bitmapCache && (this.bitmapCache.cacheID = e);
            } }, scale: { get: function() {
              return this.scaleX;
            }, set: function(e) {
              this.scaleX = this.scaleY = e;
            } } });
          } catch {
          }
          n.isVisible = function() {
            return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0);
          }, n.draw = function(e, i) {
            var r = this.bitmapCache;
            return !(!r || i) && r.draw(e);
          }, n.updateContext = function(e) {
            var i = this, r = i.mask, a = i._props.matrix;
            r && r.graphics && !r.graphics.isEmpty() && (r.getMatrix(a), e.transform(a.a, a.b, a.c, a.d, a.tx, a.ty), r.graphics.drawAsPath(e), e.clip(), a.invert(), e.transform(a.a, a.b, a.c, a.d, a.tx, a.ty)), this.getMatrix(a);
            var h = a.tx, l = a.ty;
            o._snapToPixelEnabled && i.snapToPixel && (h = h + (h < 0 ? -0.5 : 0.5) | 0, l = l + (l < 0 ? -0.5 : 0.5) | 0), e.transform(a.a, a.b, a.c, a.d, h, l), e.globalAlpha *= i.alpha, i.compositeOperation && (e.globalCompositeOperation = i.compositeOperation), i.shadow && this._applyShadow(e, i.shadow);
          }, n.cache = function(e, i, r, a, h, l) {
            this.bitmapCache || (this.bitmapCache = new createjs.BitmapCache()), this.bitmapCache.define(this, e, i, r, a, h, l);
          }, n.updateCache = function(e) {
            if (!this.bitmapCache) throw "cache() must be called before updateCache()";
            this.bitmapCache.update(e);
          }, n.uncache = function() {
            this.bitmapCache && (this.bitmapCache.release(), this.bitmapCache = void 0);
          }, n.getCacheDataURL = function() {
            return this.bitmapCache ? this.bitmapCache.getDataURL() : null;
          }, n.localToGlobal = function(e, i, r) {
            return this.getConcatenatedMatrix(this._props.matrix).transformPoint(e, i, r || new createjs.Point());
          }, n.globalToLocal = function(e, i, r) {
            return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(e, i, r || new createjs.Point());
          }, n.localToLocal = function(e, i, r, a) {
            return a = this.localToGlobal(e, i, a), r.globalToLocal(a.x, a.y, a);
          }, n.setTransform = function(e, i, r, a, h, l, c, u, d) {
            return this.x = e || 0, this.y = i || 0, this.scaleX = r ?? 1, this.scaleY = a ?? 1, this.rotation = h || 0, this.skewX = l || 0, this.skewY = c || 0, this.regX = u || 0, this.regY = d || 0, this;
          }, n.getMatrix = function(e) {
            var i = this, r = e && e.identity() || new createjs.Matrix2D();
            return i.transformMatrix ? r.copy(i.transformMatrix) : r.appendTransform(i.x, i.y, i.scaleX, i.scaleY, i.rotation, i.skewX, i.skewY, i.regX, i.regY);
          }, n.getConcatenatedMatrix = function(e) {
            for (var i = this, r = this.getMatrix(e); i = i.parent; ) r.prependMatrix(i.getMatrix(i._props.matrix));
            return r;
          }, n.getConcatenatedDisplayProps = function(e) {
            e = e ? e.identity() : new createjs.DisplayProps();
            var i = this, r = i.getMatrix(e.matrix);
            do
              e.prepend(i.visible, i.alpha, i.shadow, i.compositeOperation), i != this && r.prependMatrix(i.getMatrix(i._props.matrix));
            while (i = i.parent);
            return e;
          }, n.hitTest = function(e, i) {
            var r = o._hitTestContext;
            r.setTransform(1, 0, 0, 1, -e, -i), this.draw(r);
            var a = this._testHit(r);
            return r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, 2, 2), a;
          }, n.set = function(e) {
            for (var i in e) this[i] = e[i];
            return this;
          }, n.getBounds = function() {
            if (this._bounds) return this._rectangle.copy(this._bounds);
            var e = this.cacheCanvas;
            if (e) {
              var i = this._cacheScale;
              return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, e.width / i, e.height / i);
            }
            return null;
          }, n.getTransformedBounds = function() {
            return this._getBounds();
          }, n.setBounds = function(e, i, r, a) {
            if (e == null) return void (this._bounds = e);
            this._bounds = (this._bounds || new createjs.Rectangle()).setValues(e, i, r, a);
          }, n.clone = function() {
            return this._cloneProps(new o());
          }, n.toString = function() {
            return "[DisplayObject (name=" + this.name + ")]";
          }, n._updateState = null, n._cloneProps = function(e) {
            return e.alpha = this.alpha, e.mouseEnabled = this.mouseEnabled, e.tickEnabled = this.tickEnabled, e.name = this.name, e.regX = this.regX, e.regY = this.regY, e.rotation = this.rotation, e.scaleX = this.scaleX, e.scaleY = this.scaleY, e.shadow = this.shadow, e.skewX = this.skewX, e.skewY = this.skewY, e.visible = this.visible, e.x = this.x, e.y = this.y, e.compositeOperation = this.compositeOperation, e.snapToPixel = this.snapToPixel, e.filters = this.filters == null ? null : this.filters.slice(0), e.mask = this.mask, e.hitArea = this.hitArea, e.cursor = this.cursor, e._bounds = this._bounds, e;
          }, n._applyShadow = function(e, i) {
            i = i || Shadow.identity, e.shadowColor = i.color, e.shadowOffsetX = i.offsetX, e.shadowOffsetY = i.offsetY, e.shadowBlur = i.blur;
          }, n._tick = function(e) {
            var i = this._listeners;
            i && i.tick && (e.target = null, e.propagationStopped = e.immediatePropagationStopped = !1, this.dispatchEvent(e));
          }, n._testHit = function(e) {
            try {
              var i = e.getImageData(0, 0, 1, 1).data[3] > 1;
            } catch {
              if (!o.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
            }
            return i;
          }, n._getBounds = function(e, i) {
            return this._transformBounds(this.getBounds(), e, i);
          }, n._transformBounds = function(e, i, r) {
            if (!e) return e;
            var a = e.x, h = e.y, l = e.width, c = e.height, u = this._props.matrix;
            u = r ? u.identity() : this.getMatrix(u), (a || h) && u.appendTransform(0, 0, 1, 1, 0, 0, 0, -a, -h), i && u.prependMatrix(i);
            var d = l * u.a, g = l * u.b, v = c * u.c, m = c * u.d, T = u.tx, b = u.ty, x = T, S = T, E = b, w = b;
            return (a = d + T) < x ? x = a : a > S && (S = a), (a = d + v + T) < x ? x = a : a > S && (S = a), (a = v + T) < x ? x = a : a > S && (S = a), (h = g + b) < E ? E = h : h > w && (w = h), (h = g + m + b) < E ? E = h : h > w && (w = h), (h = m + b) < E ? E = h : h > w && (w = h), e.setValues(x, E, S - x, w - E);
          }, n._hasMouseEventListener = function() {
            for (var e = o._MOUSE_EVENTS, i = 0, r = e.length; i < r; i++) if (this.hasEventListener(e[i])) return !0;
            return !!this.cursor;
          }, createjs.DisplayObject = createjs.promote(o, "EventDispatcher");
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this.tickChildren = !0;
          }
          var n = createjs.extend(o, createjs.DisplayObject);
          n._getNumChildren = function() {
            return this.children.length;
          }, n.getNumChildren = createjs.deprecate(n._getNumChildren, "Container.getNumChildren");
          try {
            Object.defineProperties(n, { numChildren: { get: n._getNumChildren } });
          } catch {
          }
          n.initialize = o, n.isVisible = function() {
            var t = this.cacheCanvas || this.children.length;
            return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && t);
          }, n.draw = function(t, e) {
            if (this.DisplayObject_draw(t, e)) return !0;
            for (var i = this.children.slice(), r = 0, a = i.length; r < a; r++) {
              var h = i[r];
              h.isVisible() && (t.save(), h.updateContext(t), h.draw(t), t.restore());
            }
            return !0;
          }, n.addChild = function(t) {
            if (t == null) return t;
            var e = arguments.length;
            if (e > 1) {
              for (var i = 0; i < e; i++) this.addChild(arguments[i]);
              return arguments[e - 1];
            }
            var r = t.parent, a = r === this;
            return r && r._removeChildAt(createjs.indexOf(r.children, t), a), t.parent = this, this.children.push(t), a || t.dispatchEvent("added"), t;
          }, n.addChildAt = function(t, e) {
            var i = arguments.length, r = arguments[i - 1];
            if (r < 0 || r > this.children.length) return arguments[i - 2];
            if (i > 2) {
              for (var a = 0; a < i - 1; a++) this.addChildAt(arguments[a], r + a);
              return arguments[i - 2];
            }
            var h = t.parent, l = h === this;
            return h && h._removeChildAt(createjs.indexOf(h.children, t), l), t.parent = this, this.children.splice(e, 0, t), l || t.dispatchEvent("added"), t;
          }, n.removeChild = function(t) {
            var e = arguments.length;
            if (e > 1) {
              for (var i = !0, r = 0; r < e; r++) i = i && this.removeChild(arguments[r]);
              return i;
            }
            return this._removeChildAt(createjs.indexOf(this.children, t));
          }, n.removeChildAt = function(t) {
            var e = arguments.length;
            if (e > 1) {
              for (var i = [], r = 0; r < e; r++) i[r] = arguments[r];
              i.sort(function(h, l) {
                return l - h;
              });
              for (var a = !0, r = 0; r < e; r++) a = a && this._removeChildAt(i[r]);
              return a;
            }
            return this._removeChildAt(t);
          }, n.removeAllChildren = function() {
            for (var t = this.children; t.length; ) this._removeChildAt(0);
          }, n.getChildAt = function(t) {
            return this.children[t];
          }, n.getChildByName = function(t) {
            for (var e = this.children, i = 0, r = e.length; i < r; i++) if (e[i].name == t) return e[i];
            return null;
          }, n.sortChildren = function(t) {
            this.children.sort(t);
          }, n.getChildIndex = function(t) {
            return createjs.indexOf(this.children, t);
          }, n.swapChildrenAt = function(t, e) {
            var i = this.children, r = i[t], a = i[e];
            r && a && (i[t] = a, i[e] = r);
          }, n.swapChildren = function(t, e) {
            for (var i, r, a = this.children, h = 0, l = a.length; h < l && (a[h] == t && (i = h), a[h] == e && (r = h), i == null || r == null); h++) ;
            h != l && (a[i] = e, a[r] = t);
          }, n.setChildIndex = function(t, e) {
            var i = this.children, r = i.length;
            if (!(t.parent != this || e < 0 || e >= r)) {
              for (var a = 0; a < r && i[a] != t; a++) ;
              a != r && a != e && (i.splice(a, 1), i.splice(e, 0, t));
            }
          }, n.contains = function(t) {
            for (; t; ) {
              if (t == this) return !0;
              t = t.parent;
            }
            return !1;
          }, n.hitTest = function(t, e) {
            return this.getObjectUnderPoint(t, e) != null;
          }, n.getObjectsUnderPoint = function(t, e, i) {
            var r = [], a = this.localToGlobal(t, e);
            return this._getObjectsUnderPoint(a.x, a.y, r, i > 0, i == 1), r;
          }, n.getObjectUnderPoint = function(t, e, i) {
            var r = this.localToGlobal(t, e);
            return this._getObjectsUnderPoint(r.x, r.y, null, i > 0, i == 1);
          }, n.getBounds = function() {
            return this._getBounds(null, !0);
          }, n.getTransformedBounds = function() {
            return this._getBounds();
          }, n.clone = function(t) {
            var e = this._cloneProps(new o());
            return t && this._cloneChildren(e), e;
          }, n.toString = function() {
            return "[Container (name=" + this.name + ")]";
          }, n._tick = function(t) {
            if (this.tickChildren) for (var e = this.children.length - 1; e >= 0; e--) {
              var i = this.children[e];
              i.tickEnabled && i._tick && i._tick(t);
            }
            this.DisplayObject__tick(t);
          }, n._cloneChildren = function(t) {
            t.children.length && t.removeAllChildren();
            for (var e = t.children, i = 0, r = this.children.length; i < r; i++) {
              var a = this.children[i].clone(!0);
              a.parent = t, e.push(a);
            }
          }, n._removeChildAt = function(t, e) {
            if (t < 0 || t > this.children.length - 1) return !1;
            var i = this.children[t];
            return i && (i.parent = null), this.children.splice(t, 1), e || i.dispatchEvent("removed"), !0;
          }, n._getObjectsUnderPoint = function(t, e, i, r, a, h) {
            if (!(h = h || 0) && !this._testMask(this, t, e)) return null;
            var l, c = createjs.DisplayObject._hitTestContext;
            a = a || r && this._hasMouseEventListener();
            for (var u = this.children, d = u.length, g = d - 1; g >= 0; g--) {
              var v = u[g], m = v.hitArea;
              if (v.visible && (m || v.isVisible()) && (!r || v.mouseEnabled) && (m || this._testMask(v, t, e))) if (!m && v instanceof o) {
                var T = v._getObjectsUnderPoint(t, e, i, r, a, h + 1);
                if (!i && T) return r && !this.mouseChildren ? this : T;
              } else {
                if (r && !a && !v._hasMouseEventListener()) continue;
                var b = v.getConcatenatedDisplayProps(v._props);
                if (l = b.matrix, m && (l.appendMatrix(m.getMatrix(m._props.matrix)), b.alpha = m.alpha), c.globalAlpha = b.alpha, c.setTransform(l.a, l.b, l.c, l.d, l.tx - t, l.ty - e), (m || v).draw(c), !this._testHit(c)) continue;
                if (c.setTransform(1, 0, 0, 1, 0, 0), c.clearRect(0, 0, 2, 2), !i) return r && !this.mouseChildren ? this : v;
                i.push(v);
              }
            }
            return null;
          }, n._testMask = function(t, e, i) {
            var r = t.mask;
            if (!r || !r.graphics || r.graphics.isEmpty()) return !0;
            var a = this._props.matrix, h = t.parent;
            a = h ? h.getConcatenatedMatrix(a) : a.identity(), a = r.getMatrix(r._props.matrix).prependMatrix(a);
            var l = createjs.DisplayObject._hitTestContext;
            return l.setTransform(a.a, a.b, a.c, a.d, a.tx - e, a.ty - i), r.graphics.drawAsPath(l), l.fillStyle = "#000", l.fill(), !!this._testHit(l) && (l.setTransform(1, 0, 0, 1, 0, 0), l.clearRect(0, 0, 2, 2), !0);
          }, n._getBounds = function(t, e) {
            var i = this.DisplayObject_getBounds();
            if (i) return this._transformBounds(i, t, e);
            var r = this._props.matrix;
            r = e ? r.identity() : this.getMatrix(r), t && r.prependMatrix(t);
            for (var a = this.children.length, h = null, l = 0; l < a; l++) {
              var c = this.children[l];
              c.visible && (i = c._getBounds(r)) && (h ? h.extend(i.x, i.y, i.width, i.height) : h = i.clone());
            }
            return h;
          }, createjs.Container = createjs.promote(o, "DisplayObject");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.Container_constructor(), this.autoClear = !0, this.canvas = typeof t == "string" ? document.getElementById(t) : t, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0);
          }
          var n = createjs.extend(o, createjs.Container);
          n._get_nextStage = function() {
            return this._nextStage;
          }, n._set_nextStage = function(t) {
            this._nextStage && (this._nextStage._prevStage = null), t && (t._prevStage = this), this._nextStage = t;
          };
          try {
            Object.defineProperties(n, { nextStage: { get: n._get_nextStage, set: n._set_nextStage } });
          } catch {
          }
          n.update = function(t) {
            if (this.canvas && (this.tickOnUpdate && this.tick(t), this.dispatchEvent("drawstart", !1, !0) !== !1)) {
              createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
              var e = this.drawRect, i = this.canvas.getContext("2d");
              i.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (e ? i.clearRect(e.x, e.y, e.width, e.height) : i.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)), i.save(), this.drawRect && (i.beginPath(), i.rect(e.x, e.y, e.width, e.height), i.clip()), this.updateContext(i), this.draw(i, !1), i.restore(), this.dispatchEvent("drawend");
            }
          }, n.tick = function(t) {
            if (this.tickEnabled && this.dispatchEvent("tickstart", !1, !0) !== !1) {
              var e = new createjs.Event("tick");
              if (t) for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              this._tick(e), this.dispatchEvent("tickend");
            }
          }, n.handleEvent = function(t) {
            t.type == "tick" && this.update(t);
          }, n.clear = function() {
            if (this.canvas) {
              var t = this.canvas.getContext("2d");
              t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);
            }
          }, n.toDataURL = function(t, e) {
            var i, r = this.canvas.getContext("2d"), a = this.canvas.width, h = this.canvas.height;
            if (t) {
              i = r.getImageData(0, 0, a, h);
              var l = r.globalCompositeOperation;
              r.globalCompositeOperation = "destination-over", r.fillStyle = t, r.fillRect(0, 0, a, h);
            }
            var c = this.canvas.toDataURL(e || "image/png");
            return t && (r.putImageData(i, 0, 0), r.globalCompositeOperation = l), c;
          }, n.enableMouseOver = function(t) {
            if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, t == 0 && this._testMouseOver(!0)), t == null) t = 20;
            else if (t <= 0) return;
            var e = this;
            this._mouseOverIntervalID = setInterval(function() {
              e._testMouseOver();
            }, 1e3 / Math.min(50, t));
          }, n.enableDOMEvents = function(t) {
            t == null && (t = !0);
            var e, i, r = this._eventListeners;
            if (!t && r) {
              for (e in r) i = r[e], i.t.removeEventListener(e, i.f, !1);
              this._eventListeners = null;
            } else if (t && !r && this.canvas) {
              var a = window.addEventListener ? window : document, h = this;
              r = this._eventListeners = {}, r.mouseup = { t: a, f: function(l) {
                h._handleMouseUp(l);
              } }, r.mousemove = { t: a, f: function(l) {
                h._handleMouseMove(l);
              } }, r.dblclick = { t: this.canvas, f: function(l) {
                h._handleDoubleClick(l);
              } }, r.mousedown = { t: this.canvas, f: function(l) {
                h._handleMouseDown(l);
              } };
              for (e in r) i = r[e], i.t.addEventListener(e, i.f, !1);
            }
          }, n.clone = function() {
            throw "Stage cannot be cloned.";
          }, n.toString = function() {
            return "[Stage (name=" + this.name + ")]";
          }, n._getElementRect = function(t) {
            var e;
            try {
              e = t.getBoundingClientRect();
            } catch {
              e = { top: t.offsetTop, left: t.offsetLeft, width: t.offsetWidth, height: t.offsetHeight };
            }
            var i = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0), r = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0), a = window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle, h = parseInt(a.paddingLeft) + parseInt(a.borderLeftWidth), l = parseInt(a.paddingTop) + parseInt(a.borderTopWidth), c = parseInt(a.paddingRight) + parseInt(a.borderRightWidth), u = parseInt(a.paddingBottom) + parseInt(a.borderBottomWidth);
            return { left: e.left + i + h, right: e.right + i - c, top: e.top + r + l, bottom: e.bottom + r - u };
          }, n._getPointerData = function(t) {
            var e = this._pointerData[t];
            return e || (e = this._pointerData[t] = { x: 0, y: 0 }), e;
          }, n._handleMouseMove = function(t) {
            t || (t = window.event), this._handlePointerMove(-1, t, t.pageX, t.pageY);
          }, n._handlePointerMove = function(t, e, i, r, a) {
            if ((!this._prevStage || a !== void 0) && this.canvas) {
              var h = this._nextStage, l = this._getPointerData(t), c = l.inBounds;
              this._updatePointerPosition(t, e, i, r), (c || l.inBounds || this.mouseMoveOutside) && (t === -1 && l.inBounds == !c && this._dispatchMouseEvent(this, c ? "mouseleave" : "mouseenter", !1, t, l, e), this._dispatchMouseEvent(this, "stagemousemove", !1, t, l, e), this._dispatchMouseEvent(l.target, "pressmove", !0, t, l, e)), h && h._handlePointerMove(t, e, i, r, null);
            }
          }, n._updatePointerPosition = function(t, e, i, r) {
            var a = this._getElementRect(this.canvas);
            i -= a.left, r -= a.top;
            var h = this.canvas.width, l = this.canvas.height;
            i /= (a.right - a.left) / h, r /= (a.bottom - a.top) / l;
            var c = this._getPointerData(t);
            (c.inBounds = i >= 0 && r >= 0 && i <= h - 1 && r <= l - 1) ? (c.x = i, c.y = r) : this.mouseMoveOutside && (c.x = i < 0 ? 0 : i > h - 1 ? h - 1 : i, c.y = r < 0 ? 0 : r > l - 1 ? l - 1 : r), c.posEvtObj = e, c.rawX = i, c.rawY = r, t !== this._primaryPointerID && t !== -1 || (this.mouseX = c.x, this.mouseY = c.y, this.mouseInBounds = c.inBounds);
          }, n._handleMouseUp = function(t) {
            this._handlePointerUp(-1, t, !1);
          }, n._handlePointerUp = function(t, e, i, r) {
            var a = this._nextStage, h = this._getPointerData(t);
            if (!this._prevStage || r !== void 0) {
              var l = null, c = h.target;
              r || !c && !a || (l = this._getObjectsUnderPoint(h.x, h.y, null, !0)), h.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, t, h, e, l), h.down = !1), l == c && this._dispatchMouseEvent(c, "click", !0, t, h, e), this._dispatchMouseEvent(c, "pressup", !0, t, h, e), i ? (t == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[t]) : h.target = null, a && a._handlePointerUp(t, e, i, r || l && this);
            }
          }, n._handleMouseDown = function(t) {
            this._handlePointerDown(-1, t, t.pageX, t.pageY);
          }, n._handlePointerDown = function(t, e, i, r, a) {
            this.preventSelection && e.preventDefault(), this._primaryPointerID != null && t !== -1 || (this._primaryPointerID = t), r != null && this._updatePointerPosition(t, e, i, r);
            var h = null, l = this._nextStage, c = this._getPointerData(t);
            a || (h = c.target = this._getObjectsUnderPoint(c.x, c.y, null, !0)), c.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, t, c, e, h), c.down = !0), this._dispatchMouseEvent(h, "mousedown", !0, t, c, e), l && l._handlePointerDown(t, e, i, r, a || h && this);
          }, n._testMouseOver = function(t, e, i) {
            if (!this._prevStage || e !== void 0) {
              var r = this._nextStage;
              if (!this._mouseOverIntervalID) return void (r && r._testMouseOver(t, e, i));
              var a = this._getPointerData(-1);
              if (a && (t || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
                var h, l, c, u = a.posEvtObj, d = i || u && u.target == this.canvas, g = null, v = -1, m = "";
                !e && (t || this.mouseInBounds && d) && (g = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
                var T = this._mouseOverTarget || [], b = T[T.length - 1], x = this._mouseOverTarget = [];
                for (h = g; h; ) x.unshift(h), m || (m = h.cursor), h = h.parent;
                for (this.canvas.style.cursor = m, !e && i && (i.canvas.style.cursor = m), l = 0, c = x.length; l < c && x[l] == T[l]; l++) v = l;
                for (b != g && this._dispatchMouseEvent(b, "mouseout", !0, -1, a, u, g), l = T.length - 1; l > v; l--) this._dispatchMouseEvent(T[l], "rollout", !1, -1, a, u, g);
                for (l = x.length - 1; l > v; l--) this._dispatchMouseEvent(x[l], "rollover", !1, -1, a, u, b);
                b != g && this._dispatchMouseEvent(g, "mouseover", !0, -1, a, u, b), r && r._testMouseOver(t, e || g && this, i || d && this);
              }
            }
          }, n._handleDoubleClick = function(t, e) {
            var i = null, r = this._nextStage, a = this._getPointerData(-1);
            e || (i = this._getObjectsUnderPoint(a.x, a.y, null, !0), this._dispatchMouseEvent(i, "dblclick", !0, -1, a, t)), r && r._handleDoubleClick(t, e || i && this);
          }, n._dispatchMouseEvent = function(t, e, i, r, a, h, l) {
            if (t && (i || t.hasEventListener(e))) {
              var c = new createjs.MouseEvent(e, i, !1, a.x, a.y, h, r, r === this._primaryPointerID || r === -1, a.rawX, a.rawY, l);
              t.dispatchEvent(c);
            }
          }, createjs.Stage = createjs.promote(o, "Container");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e) {
            if (this.Stage_constructor(t), e !== void 0) {
              if (typeof e != "object") throw "Invalid options object";
              var i = e.premultiply, r = e.transparent, a = e.antialias, h = e.preserveBuffer, l = e.autoPurge;
            }
            this.vocalDebug = !1, this._preserveBuffer = h || !1, this._antialias = a || !1, this._transparent = r || !1, this._premultiply = i || !1, this._autoPurge = void 0, this.autoPurge = l, this._viewportWidth = 0, this._viewportHeight = 0, this._projectionMatrix = null, this._webGLContext = null, this._clearColor = { r: 0.5, g: 0.5, b: 0.5, a: 0 }, this._maxCardsPerBatch = o.DEFAULT_MAX_BATCH_SIZE, this._activeShader = null, this._vertices = null, this._vertexPositionBuffer = null, this._uvs = null, this._uvPositionBuffer = null, this._indices = null, this._textureIndexBuffer = null, this._alphas = null, this._alphaBuffer = null, this._textureDictionary = [], this._textureIDs = {}, this._batchTextures = [], this._baseTextures = [], this._batchTextureCount = 8, this._lastTextureInsert = -1, this._batchID = 0, this._drawID = 0, this._slotBlacklist = [], this._isDrawing = 0, this._lastTrackedCanvas = 0, this.isCacheControlled = !1, this._cacheContainer = new createjs.Container(), this._initializeWebGL();
          }
          var n = createjs.extend(o, createjs.Stage);
          o.buildUVRects = function(t, e, i) {
            if (!t || !t._frames) return null;
            e === void 0 && (e = -1), i === void 0 && (i = !1);
            for (var r = e != -1 && i ? e : 0, a = e != -1 && i ? e + 1 : t._frames.length, h = r; h < a; h++) {
              var l = t._frames[h];
              if (!(l.uvRect || l.image.width <= 0 || l.image.height <= 0)) {
                var c = l.rect;
                l.uvRect = { t: c.y / l.image.height, l: c.x / l.image.width, b: (c.y + c.height) / l.image.height, r: (c.x + c.width) / l.image.width };
              }
            }
            return t._frames[e != -1 ? e : 0].uvRect || { t: 0, l: 0, b: 1, r: 1 };
          }, o.isWebGLActive = function(t) {
            return t && t instanceof WebGLRenderingContext && typeof WebGLRenderingContext < "u";
          }, o.VERTEX_PROPERTY_COUNT = 6, o.INDICIES_PER_CARD = 6, o.DEFAULT_MAX_BATCH_SIZE = 1e4, o.WEBGL_MAX_INDEX_NUM = Math.pow(2, 16), o.UV_RECT = { t: 0, l: 0, b: 1, r: 1 };
          try {
            o.COVER_VERT = new Float32Array([-1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1]), o.COVER_UV = new Float32Array([0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1]), o.COVER_UV_FLIP = new Float32Array([0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0]);
          } catch {
          }
          o.REGULAR_VARYING_HEADER = "precision mediump float;varying vec2 vTextureCoord;varying lowp float indexPicker;varying lowp float alphaValue;", o.REGULAR_VERTEX_HEADER = o.REGULAR_VARYING_HEADER + "attribute vec2 vertexPosition;attribute vec2 uvPosition;attribute lowp float textureIndex;attribute lowp float objectAlpha;uniform mat4 pMatrix;", o.REGULAR_FRAGMENT_HEADER = o.REGULAR_VARYING_HEADER + "uniform sampler2D uSampler[{{count}}];", o.REGULAR_VERTEX_BODY = "void main(void) {gl_Position = vec4((vertexPosition.x * pMatrix[0][0]) + pMatrix[3][0],(vertexPosition.y * pMatrix[1][1]) + pMatrix[3][1],pMatrix[3][2],1.0);alphaValue = objectAlpha;indexPicker = textureIndex;vTextureCoord = uvPosition;}", o.REGULAR_FRAGMENT_BODY = "void main(void) {vec4 color = vec4(1.0, 0.0, 0.0, 1.0);if (indexPicker <= 0.5) {color = texture2D(uSampler[0], vTextureCoord);{{alternates}}}{{fragColor}}}", o.REGULAR_FRAG_COLOR_NORMAL = "gl_FragColor = vec4(color.rgb, color.a * alphaValue);", o.REGULAR_FRAG_COLOR_PREMULTIPLY = "if(color.a > 0.0035) {gl_FragColor = vec4(color.rgb/color.a, color.a * alphaValue);} else {gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);}", o.PARTICLE_VERTEX_BODY = o.REGULAR_VERTEX_BODY, o.PARTICLE_FRAGMENT_BODY = o.REGULAR_FRAGMENT_BODY, o.COVER_VARYING_HEADER = "precision mediump float;varying highp vec2 vRenderCoord;varying highp vec2 vTextureCoord;", o.COVER_VERTEX_HEADER = o.COVER_VARYING_HEADER + "attribute vec2 vertexPosition;attribute vec2 uvPosition;uniform float uUpright;", o.COVER_FRAGMENT_HEADER = o.COVER_VARYING_HEADER + "uniform sampler2D uSampler;", o.COVER_VERTEX_BODY = "void main(void) {gl_Position = vec4(vertexPosition.x, vertexPosition.y, 0.0, 1.0);vRenderCoord = uvPosition;vTextureCoord = vec2(uvPosition.x, abs(uUpright - uvPosition.y));}", o.COVER_FRAGMENT_BODY = "void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);gl_FragColor = color;}", n._get_isWebGL = function() {
            return !!this._webGLContext;
          }, n._set_autoPurge = function(t) {
            t = isNaN(t) ? 1200 : t, t != -1 && (t = t < 10 ? 10 : t), this._autoPurge = t;
          }, n._get_autoPurge = function() {
            return Number(this._autoPurge);
          };
          try {
            Object.defineProperties(n, { isWebGL: { get: n._get_isWebGL }, autoPurge: { get: n._get_autoPurge, set: n._set_autoPurge } });
          } catch {
          }
          n._initializeWebGL = function() {
            if (this.canvas) {
              if (!this._webGLContext || this._webGLContext.canvas !== this.canvas) {
                var t = { depth: !1, alpha: this._transparent, stencil: !0, antialias: this._antialias, premultipliedAlpha: this._premultiply, preserveDrawingBuffer: this._preserveBuffer }, e = this._webGLContext = this._fetchWebGLContext(this.canvas, t);
                if (!e) return null;
                this.updateSimultaneousTextureCount(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), this._maxTextureSlots = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this._createBuffers(e), this._initTextures(e), e.disable(e.DEPTH_TEST), e.enable(e.BLEND), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiply), this._webGLContext.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a), this.updateViewport(this._viewportWidth || this.canvas.width, this._viewportHeight || this.canvas.height);
              }
            } else this._webGLContext = null;
            return this._webGLContext;
          }, n.update = function(t) {
            if (this.canvas) {
              if (this.tickOnUpdate && this.tick(t), this.dispatchEvent("drawstart"), this.autoClear && this.clear(), this._webGLContext) this._batchDraw(this, this._webGLContext), this._autoPurge == -1 || this._drawID % (this._autoPurge / 2 | 0) || this.purgeTextures(this._autoPurge);
              else {
                var e = this.canvas.getContext("2d");
                e.save(), this.updateContext(e), this.draw(e, !1), e.restore();
              }
              this.dispatchEvent("drawend");
            }
          }, n.clear = function() {
            if (this.canvas) if (o.isWebGLActive(this._webGLContext)) {
              var t = this._webGLContext, e = this._clearColor, i = this._transparent ? e.a : 1;
              this._webGLContext.clearColor(e.r * i, e.g * i, e.b * i, i), t.clear(t.COLOR_BUFFER_BIT), this._webGLContext.clearColor(e.r, e.g, e.b, e.a);
            } else this.Stage_clear();
          }, n.draw = function(t, e) {
            if (t === this._webGLContext && o.isWebGLActive(this._webGLContext)) {
              var i = this._webGLContext;
              return this._batchDraw(this, i, e), !0;
            }
            return this.Stage_draw(t, e);
          }, n.cacheDraw = function(t, e, i) {
            if (o.isWebGLActive(this._webGLContext)) {
              var r = this._webGLContext;
              return this._cacheDraw(r, t, e, i), !0;
            }
            return !1;
          }, n.protectTextureSlot = function(t, e) {
            if (t > this._maxTextureSlots || t < 0) throw "Slot outside of acceptable range";
            this._slotBlacklist[t] = !!e;
          }, n.getTargetRenderTexture = function(t, e, i) {
            var r, a = !1, h = this._webGLContext;
            if (t.__lastRT !== void 0 && t.__lastRT === t.__rtA && (a = !0), a ? (t.__rtB === void 0 ? t.__rtB = this.getRenderBufferTexture(e, i) : (e == t.__rtB._width && i == t.__rtB._height || this.resizeTexture(t.__rtB, e, i), this.setTextureParams(h)), r = t.__rtB) : (t.__rtA === void 0 ? t.__rtA = this.getRenderBufferTexture(e, i) : (e == t.__rtA._width && i == t.__rtA._height || this.resizeTexture(t.__rtA, e, i), this.setTextureParams(h)), r = t.__rtA), !r) throw "Problems creating render textures, known causes include using too much VRAM by not releasing WebGL texture instances";
            return t.__lastRT = r, r;
          }, n.releaseTexture = function(t) {
            var e, i;
            if (t) {
              if (t.children) for (e = 0, i = t.children.length; e < i; e++) this.releaseTexture(t.children[e]);
              t.cacheCanvas && t.uncache();
              var r = void 0;
              if (t._storeID !== void 0) {
                if (t === this._textureDictionary[t._storeID]) return this._killTextureObject(t), void (t._storeID = void 0);
                r = t;
              } else if (t._webGLRenderStyle === 2) r = t.image;
              else if (t._webGLRenderStyle === 1) {
                for (e = 0, i = t.spriteSheet._images.length; e < i; e++) this.releaseTexture(t.spriteSheet._images[e]);
                return;
              }
              if (r === void 0) return void (this.vocalDebug && console.log("No associated texture found on release"));
              this._killTextureObject(this._textureDictionary[r._storeID]), r._storeID = void 0;
            }
          }, n.purgeTextures = function(t) {
            t == null && (t = 100);
            for (var e = this._textureDictionary, i = e.length, r = 0; r < i; r++) {
              var a = e[r];
              a && a._drawID + t <= this._drawID && this._killTextureObject(a);
            }
          }, n.updateSimultaneousTextureCount = function(t) {
            var e = this._webGLContext, i = !1;
            for ((t < 1 || isNaN(t)) && (t = 1), this._batchTextureCount = t; !i; ) try {
              this._activeShader = this._fetchShaderProgram(e), i = !0;
            } catch (r) {
              if (this._batchTextureCount == 1) throw "Cannot compile shader " + r;
              this._batchTextureCount -= 4, this._batchTextureCount < 1 && (this._batchTextureCount = 1), this.vocalDebug && console.log("Reducing desired texture count due to errors: " + this._batchTextureCount);
            }
          }, n.updateViewport = function(t, e) {
            this._viewportWidth = 0 | t, this._viewportHeight = 0 | e;
            var i = this._webGLContext;
            i && (i.viewport(0, 0, this._viewportWidth, this._viewportHeight), this._projectionMatrix = new Float32Array([2 / this._viewportWidth, 0, 0, 0, 0, -2 / this._viewportHeight, 1, 0, 0, 0, 1, 0, -1, 1, 0.1, 0]), this._projectionMatrixFlip = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), this._projectionMatrixFlip.set(this._projectionMatrix), this._projectionMatrixFlip[5] *= -1, this._projectionMatrixFlip[13] *= -1);
          }, n.getFilterShader = function(t) {
            t || (t = this);
            var e = this._webGLContext, i = this._activeShader;
            if (t._builtShader) i = t._builtShader, t.shaderParamSetup && (e.useProgram(i), t.shaderParamSetup(e, this, i));
            else try {
              i = this._fetchShaderProgram(e, "filter", t.VTX_SHADER_BODY, t.FRAG_SHADER_BODY, t.shaderParamSetup && t.shaderParamSetup.bind(t)), t._builtShader = i, i._name = t.toString();
            } catch (r) {
              console && console.log("SHADER SWITCH FAILURE", r);
            }
            return i;
          }, n.getBaseTexture = function(t, e) {
            var i = Math.ceil(t > 0 ? t : 1) || 1, r = Math.ceil(e > 0 ? e : 1) || 1, a = this._webGLContext, h = a.createTexture();
            return this.resizeTexture(h, i, r), this.setTextureParams(a, !1), h;
          }, n.resizeTexture = function(t, e, i) {
            var r = this._webGLContext;
            r.bindTexture(r.TEXTURE_2D, t), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, e, i, 0, r.RGBA, r.UNSIGNED_BYTE, null), t.width = e, t.height = i;
          }, n.getRenderBufferTexture = function(t, e) {
            var i = this._webGLContext, r = this.getBaseTexture(t, e);
            if (!r) return null;
            var a = i.createFramebuffer();
            return a ? (r.width = t, r.height = e, i.bindFramebuffer(i.FRAMEBUFFER, a), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, r, 0), a._renderTexture = r, r._frameBuffer = a, r._storeID = this._textureDictionary.length, this._textureDictionary[r._storeID] = r, i.bindFramebuffer(i.FRAMEBUFFER, null), r) : null;
          }, n.setTextureParams = function(t, e) {
            e && this._antialias ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST)), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
          }, n.setClearColor = function(t) {
            var e, i, r, a, h;
            typeof t == "string" ? t.indexOf("#") == 0 ? (t.length == 4 && (t = "#" + t.charAt(1) + t.charAt(1) + t.charAt(2) + t.charAt(2) + t.charAt(3) + t.charAt(3)), e = +("0x" + t.slice(1, 3)) / 255, i = +("0x" + t.slice(3, 5)) / 255, r = +("0x" + t.slice(5, 7)) / 255, a = +("0x" + t.slice(7, 9)) / 255) : t.indexOf("rgba(") == 0 && (h = t.slice(5, -1).split(","), e = Number(h[0]) / 255, i = Number(h[1]) / 255, r = Number(h[2]) / 255, a = Number(h[3])) : (e = ((4278190080 & t) >>> 24) / 255, i = ((16711680 & t) >>> 16) / 255, r = ((65280 & t) >>> 8) / 255, a = (255 & t) / 255), this._clearColor.r = e || 0, this._clearColor.g = i || 0, this._clearColor.b = r || 0, this._clearColor.a = a || 0, this._webGLContext && this._webGLContext.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a);
          }, n.toString = function() {
            return "[StageGL (name=" + this.name + ")]";
          }, n._fetchWebGLContext = function(t, e) {
            var i;
            try {
              i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
            } catch {
            }
            if (i) i.viewportWidth = t.width, i.viewportHeight = t.height;
            else {
              var r = "Could not initialize WebGL";
              console.error ? console.error(r) : console.log(r);
            }
            return i;
          }, n._fetchShaderProgram = function(t, e, i, r, a) {
            t.useProgram(null);
            var h, l;
            switch (e) {
              case "filter":
                l = o.COVER_VERTEX_HEADER + (i || o.COVER_VERTEX_BODY), h = o.COVER_FRAGMENT_HEADER + (r || o.COVER_FRAGMENT_BODY);
                break;
              case "particle":
                l = o.REGULAR_VERTEX_HEADER + o.PARTICLE_VERTEX_BODY, h = o.REGULAR_FRAGMENT_HEADER + o.PARTICLE_FRAGMENT_BODY;
                break;
              case "override":
                l = o.REGULAR_VERTEX_HEADER + (i || o.REGULAR_VERTEX_BODY), h = o.REGULAR_FRAGMENT_HEADER + (r || o.REGULAR_FRAGMENT_BODY);
                break;
              case "regular":
              default:
                l = o.REGULAR_VERTEX_HEADER + o.REGULAR_VERTEX_BODY, h = o.REGULAR_FRAGMENT_HEADER + o.REGULAR_FRAGMENT_BODY;
            }
            var c = this._createShader(t, t.VERTEX_SHADER, l), u = this._createShader(t, t.FRAGMENT_SHADER, h), d = t.createProgram();
            if (t.attachShader(d, c), t.attachShader(d, u), t.linkProgram(d), d._type = e, !t.getProgramParameter(d, t.LINK_STATUS)) throw t.useProgram(this._activeShader), t.getProgramInfoLog(d);
            switch (t.useProgram(d), e) {
              case "filter":
                d.vertexPositionAttribute = t.getAttribLocation(d, "vertexPosition"), t.enableVertexAttribArray(d.vertexPositionAttribute), d.uvPositionAttribute = t.getAttribLocation(d, "uvPosition"), t.enableVertexAttribArray(d.uvPositionAttribute), d.samplerUniform = t.getUniformLocation(d, "uSampler"), t.uniform1i(d.samplerUniform, 0), d.uprightUniform = t.getUniformLocation(d, "uUpright"), t.uniform1f(d.uprightUniform, 0), a && a(t, this, d);
                break;
              case "override":
              case "particle":
              case "regular":
              default:
                d.vertexPositionAttribute = t.getAttribLocation(d, "vertexPosition"), t.enableVertexAttribArray(d.vertexPositionAttribute), d.uvPositionAttribute = t.getAttribLocation(d, "uvPosition"), t.enableVertexAttribArray(d.uvPositionAttribute), d.textureIndexAttribute = t.getAttribLocation(d, "textureIndex"), t.enableVertexAttribArray(d.textureIndexAttribute), d.alphaAttribute = t.getAttribLocation(d, "objectAlpha"), t.enableVertexAttribArray(d.alphaAttribute);
                for (var g = [], v = 0; v < this._batchTextureCount; v++) g[v] = v;
                d.samplerData = g, d.samplerUniform = t.getUniformLocation(d, "uSampler"), t.uniform1iv(d.samplerUniform, g), d.pMatrixUniform = t.getUniformLocation(d, "pMatrix");
            }
            return t.useProgram(this._activeShader), d;
          }, n._createShader = function(t, e, i) {
            i = i.replace(/{{count}}/g, this._batchTextureCount);
            for (var r = "", a = 1; a < this._batchTextureCount; a++) r += "} else if (indexPicker <= " + a + ".5) { color = texture2D(uSampler[" + a + "], vTextureCoord);";
            i = i.replace(/{{alternates}}/g, r), i = i.replace(/{{fragColor}}/g, this._premultiply ? o.REGULAR_FRAG_COLOR_PREMULTIPLY : o.REGULAR_FRAG_COLOR_NORMAL);
            var h = t.createShader(e);
            if (t.shaderSource(h, i), t.compileShader(h), !t.getShaderParameter(h, t.COMPILE_STATUS)) throw t.getShaderInfoLog(h);
            return h;
          }, n._createBuffers = function(t) {
            var e, i, r, a = this._maxCardsPerBatch * o.INDICIES_PER_CARD, h = this._vertexPositionBuffer = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, h), e = 2;
            var l = this._vertices = new Float32Array(a * e);
            for (i = 0, r = l.length; i < r; i += e) l[i] = l[i + 1] = 0;
            t.bufferData(t.ARRAY_BUFFER, l, t.DYNAMIC_DRAW), h.itemSize = e, h.numItems = a;
            var c = this._uvPositionBuffer = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, c), e = 2;
            var u = this._uvs = new Float32Array(a * e);
            for (i = 0, r = u.length; i < r; i += e) u[i] = u[i + 1] = 0;
            t.bufferData(t.ARRAY_BUFFER, u, t.DYNAMIC_DRAW), c.itemSize = e, c.numItems = a;
            var d = this._textureIndexBuffer = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, d), e = 1;
            var g = this._indices = new Float32Array(a * e);
            for (i = 0, r = g.length; i < r; i++) g[i] = 0;
            t.bufferData(t.ARRAY_BUFFER, g, t.DYNAMIC_DRAW), d.itemSize = e, d.numItems = a;
            var v = this._alphaBuffer = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, v), e = 1;
            var m = this._alphas = new Float32Array(a * e);
            for (i = 0, r = m.length; i < r; i++) m[i] = 1;
            t.bufferData(t.ARRAY_BUFFER, m, t.DYNAMIC_DRAW), v.itemSize = e, v.numItems = a;
          }, n._initTextures = function() {
            this._lastTextureInsert = -1, this._textureDictionary = [], this._textureIDs = {}, this._baseTextures = [], this._batchTextures = [];
            for (var t = 0; t < this._batchTextureCount; t++) {
              var e = this.getBaseTexture();
              if (this._baseTextures[t] = this._batchTextures[t] = e, !e) throw "Problems creating basic textures, known causes include using too much VRAM by not releasing WebGL texture instances";
            }
          }, n._loadTextureImage = function(t, e) {
            var i = e.src;
            i || (e._isCanvas = !0, i = e.src = "canvas_" + this._lastTrackedCanvas++);
            var r = this._textureIDs[i];
            r === void 0 && (r = this._textureIDs[i] = this._textureDictionary.length), this._textureDictionary[r] === void 0 && (this._textureDictionary[r] = this.getBaseTexture());
            var a = this._textureDictionary[r];
            if (a) a._batchID = this._batchID, a._storeID = r, a._imageData = e, this._insertTextureInBatch(t, a), e._storeID = r, e.complete || e.naturalWidth || e._isCanvas ? this._updateTextureImageData(t, e) : e.addEventListener("load", this._updateTextureImageData.bind(this, t, e));
            else {
              var h = "Problem creating desired texture, known causes include using too much VRAM by not releasing WebGL texture instances";
              console.error && console.error(h) || console.log(h), a = this._baseTextures[0], a._batchID = this._batchID, a._storeID = -1, a._imageData = a, this._insertTextureInBatch(t, a);
            }
            return a;
          }, n._updateTextureImageData = function(t, e) {
            var i = e.width & e.width - 1 || e.height & e.height - 1, r = this._textureDictionary[e._storeID];
            t.activeTexture(t.TEXTURE0 + r._activeIndex), t.bindTexture(t.TEXTURE_2D, r), r.isPOT = !i, this.setTextureParams(t, r.isPOT);
            try {
              t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
            } catch (h) {
              var a = `
An error has occurred. This is most likely due to security restrictions on WebGL images with local or cross-domain origins`;
              console.error ? (console.error(a), console.error(h)) : console && (console.log(a), console.log(h));
            }
            e._invalid = !1, r._w = e.width, r._h = e.height, this.vocalDebug && (i && console.warn("NPOT(Non Power of Two) Texture: " + e.src), (e.width > t.MAX_TEXTURE_SIZE || e.height > t.MAX_TEXTURE_SIZE) && console && console.error("Oversized Texture: " + e.width + "x" + e.height + " vs " + t.MAX_TEXTURE_SIZE + "max"));
          }, n._insertTextureInBatch = function(t, e) {
            if (this._batchTextures[e._activeIndex] !== e) {
              var i = -1, r = (this._lastTextureInsert + 1) % this._batchTextureCount, a = r;
              do {
                if (this._batchTextures[a]._batchID != this._batchID && !this._slotBlacklist[a]) {
                  i = a;
                  break;
                }
                a = (a + 1) % this._batchTextureCount;
              } while (a !== r);
              i === -1 && (this.batchReason = "textureOverflow", this._drawBuffers(t), this.batchCardCount = 0, i = r), this._batchTextures[i] = e, e._activeIndex = i;
              var h = e._imageData;
              h && h._invalid && e._drawID !== void 0 ? this._updateTextureImageData(t, h) : (t.activeTexture(t.TEXTURE0 + i), t.bindTexture(t.TEXTURE_2D, e), this.setTextureParams(t)), this._lastTextureInsert = i;
            } else {
              var h = e._imageData;
              e._storeID != null && h && h._invalid && this._updateTextureImageData(t, h);
            }
            e._drawID = this._drawID, e._batchID = this._batchID;
          }, n._killTextureObject = function(t) {
            if (t) {
              var e = this._webGLContext;
              if (t._storeID !== void 0 && t._storeID >= 0) {
                this._textureDictionary[t._storeID] = void 0;
                for (var i in this._textureIDs) this._textureIDs[i] == t._storeID && delete this._textureIDs[i];
                t._imageData && (t._imageData._storeID = void 0), t._imageData = t._storeID = void 0;
              }
              t._activeIndex !== void 0 && this._batchTextures[t._activeIndex] === t && (this._batchTextures[t._activeIndex] = this._baseTextures[t._activeIndex]);
              try {
                t._frameBuffer && e.deleteFramebuffer(t._frameBuffer), t._frameBuffer = void 0;
              } catch (r) {
                this.vocalDebug && console.log(r);
              }
              try {
                e.deleteTexture(t);
              } catch (r) {
                this.vocalDebug && console.log(r);
              }
            }
          }, n._backupBatchTextures = function(t, e) {
            var i = this._webGLContext;
            this._backupTextures || (this._backupTextures = []), e === void 0 && (e = this._backupTextures);
            for (var r = 0; r < this._batchTextureCount; r++) i.activeTexture(i.TEXTURE0 + r), t ? this._batchTextures[r] = e[r] : (e[r] = this._batchTextures[r], this._batchTextures[r] = this._baseTextures[r]), i.bindTexture(i.TEXTURE_2D, this._batchTextures[r]), this.setTextureParams(i, this._batchTextures[r].isPOT);
            t && e === this._backupTextures && (this._backupTextures = []);
          }, n._batchDraw = function(t, e, i) {
            this._isDrawing > 0 && this._drawBuffers(e), this._isDrawing++, this._drawID++, this.batchCardCount = 0, this.depth = 0, this._appendToBatchGroup(t, e, new createjs.Matrix2D(), this.alpha, i), this.batchReason = "drawFinish", this._drawBuffers(e), this._isDrawing--;
          }, n._cacheDraw = function(t, e, i, r) {
            var a, h = this._activeShader, l = this._slotBlacklist, c = this._maxTextureSlots - 1, u = this._viewportWidth, d = this._viewportHeight;
            this.protectTextureSlot(c, !0);
            var g = e.getMatrix();
            g = g.clone(), g.scale(1 / r.scale, 1 / r.scale), g = g.invert(), g.translate(-r.offX / r.scale * e.scaleX, -r.offY / r.scale * e.scaleY);
            var v = this._cacheContainer;
            v.children = [e], v.transformMatrix = g, this._backupBatchTextures(!1), i && i.length ? this._drawFilters(e, i, r) : this.isCacheControlled ? (t.clear(t.COLOR_BUFFER_BIT), this._batchDraw(v, t, !0)) : (t.activeTexture(t.TEXTURE0 + c), e.cacheCanvas = this.getTargetRenderTexture(e, r._drawWidth, r._drawHeight), a = e.cacheCanvas, t.bindFramebuffer(t.FRAMEBUFFER, a._frameBuffer), this.updateViewport(r._drawWidth, r._drawHeight), this._projectionMatrix = this._projectionMatrixFlip, t.clear(t.COLOR_BUFFER_BIT), this._batchDraw(v, t, !0), t.bindFramebuffer(t.FRAMEBUFFER, null), this.updateViewport(u, d)), this._backupBatchTextures(!0), this.protectTextureSlot(c, !1), this._activeShader = h, this._slotBlacklist = l;
          }, n._drawFilters = function(t, e, i) {
            var r, a = this._webGLContext, h = this._maxTextureSlots - 1, l = this._viewportWidth, c = this._viewportHeight, u = this._cacheContainer, d = e.length;
            a.activeTexture(a.TEXTURE0 + h), r = this.getTargetRenderTexture(t, i._drawWidth, i._drawHeight), a.bindFramebuffer(a.FRAMEBUFFER, r._frameBuffer), this.updateViewport(i._drawWidth, i._drawHeight), a.clear(a.COLOR_BUFFER_BIT), this._batchDraw(u, a, !0), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, r), this.setTextureParams(a);
            var g = !1, v = 0, m = e[v];
            do
              this._activeShader = this.getFilterShader(m), this._activeShader && (a.activeTexture(a.TEXTURE0 + h), r = this.getTargetRenderTexture(t, i._drawWidth, i._drawHeight), a.bindFramebuffer(a.FRAMEBUFFER, r._frameBuffer), a.viewport(0, 0, i._drawWidth, i._drawHeight), a.clear(a.COLOR_BUFFER_BIT), this._drawCover(a, g), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, r), this.setTextureParams(a), (d > 1 || e[0]._multiPass) && (g = !g), m = m._multiPass !== null ? m._multiPass : e[++v]);
            while (m);
            this.isCacheControlled ? (a.bindFramebuffer(a.FRAMEBUFFER, null), this.updateViewport(l, c), this._activeShader = this.getFilterShader(this), a.clear(a.COLOR_BUFFER_BIT), this._drawCover(a, g)) : (g && (a.activeTexture(a.TEXTURE0 + h), r = this.getTargetRenderTexture(t, i._drawWidth, i._drawHeight), a.bindFramebuffer(a.FRAMEBUFFER, r._frameBuffer), this._activeShader = this.getFilterShader(this), a.viewport(0, 0, i._drawWidth, i._drawHeight), a.clear(a.COLOR_BUFFER_BIT), this._drawCover(a, !g)), a.bindFramebuffer(a.FRAMEBUFFER, null), this.updateViewport(l, c), t.cacheCanvas = r);
          }, n._appendToBatchGroup = function(t, e, i, r, a) {
            t._glMtx || (t._glMtx = new createjs.Matrix2D());
            var h = t._glMtx;
            h.copy(i), t.transformMatrix ? h.appendMatrix(t.transformMatrix) : h.appendTransform(t.x, t.y, t.scaleX, t.scaleY, t.rotation, t.skewX, t.skewY, t.regX, t.regY);
            for (var l, c, u, d, g = t.children.length, v = 0; v < g; v++) {
              var m = t.children[v];
              if (m.visible && r) if (m.cacheCanvas && !a || (m._updateState && m._updateState(), !m.children)) {
                this.batchCardCount + 1 > this._maxCardsPerBatch && (this.batchReason = "vertexOverflow", this._drawBuffers(e), this.batchCardCount = 0), m._glMtx || (m._glMtx = new createjs.Matrix2D());
                var T = m._glMtx;
                T.copy(h), m.transformMatrix ? T.appendMatrix(m.transformMatrix) : T.appendTransform(m.x, m.y, m.scaleX, m.scaleY, m.rotation, m.skewX, m.skewY, m.regX, m.regY);
                var b, x, S, E, w, L, R = m.cacheCanvas && !a;
                if (m._webGLRenderStyle === 2 || R) S = !a && m.cacheCanvas || m.image;
                else {
                  if (m._webGLRenderStyle !== 1 || (E = m.spriteSheet.getFrame(m.currentFrame)) === null) continue;
                  S = E.image;
                }
                var P = this._uvs, O = this._vertices, H = this._indices, I = this._alphas;
                if (S) {
                  if (S._storeID === void 0) w = this._loadTextureImage(e, S), this._insertTextureInBatch(e, w);
                  else {
                    if (!(w = this._textureDictionary[S._storeID])) {
                      this.vocalDebug && console.log("Texture should not be looked up while not being stored.");
                      continue;
                    }
                    w._batchID !== this._batchID && this._insertTextureInBatch(e, w);
                  }
                  if (x = w._activeIndex, m._webGLRenderStyle === 2 || R) !R && m.sourceRect ? (m._uvRect || (m._uvRect = {}), L = m.sourceRect, b = m._uvRect, b.t = L.y / S.height, b.l = L.x / S.width, b.b = (L.y + L.height) / S.height, b.r = (L.x + L.width) / S.width, l = 0, c = 0, u = L.width + l, d = L.height + c) : (b = o.UV_RECT, R ? (L = m.bitmapCache, l = L.x + L._filterOffX / L.scale, c = L.y + L._filterOffY / L.scale, u = L._drawWidth / L.scale + l, d = L._drawHeight / L.scale + c) : (l = 0, c = 0, u = S.width + l, d = S.height + c));
                  else if (m._webGLRenderStyle === 1) {
                    var U = E.rect;
                    b = E.uvRect, b || (b = o.buildUVRects(m.spriteSheet, m.currentFrame, !1)), l = -E.regX, c = -E.regY, u = U.width - E.regX, d = U.height - E.regY;
                  }
                  var N = this.batchCardCount * o.INDICIES_PER_CARD, A = 2 * N;
                  O[A] = l * T.a + c * T.c + T.tx, O[A + 1] = l * T.b + c * T.d + T.ty, O[A + 2] = l * T.a + d * T.c + T.tx, O[A + 3] = l * T.b + d * T.d + T.ty, O[A + 4] = u * T.a + c * T.c + T.tx, O[A + 5] = u * T.b + c * T.d + T.ty, O[A + 6] = O[A + 2], O[A + 7] = O[A + 3], O[A + 8] = O[A + 4], O[A + 9] = O[A + 5], O[A + 10] = u * T.a + d * T.c + T.tx, O[A + 11] = u * T.b + d * T.d + T.ty, P[A] = b.l, P[A + 1] = b.t, P[A + 2] = b.l, P[A + 3] = b.b, P[A + 4] = b.r, P[A + 5] = b.t, P[A + 6] = b.l, P[A + 7] = b.b, P[A + 8] = b.r, P[A + 9] = b.t, P[A + 10] = b.r, P[A + 11] = b.b, H[N] = H[N + 1] = H[N + 2] = H[N + 3] = H[N + 4] = H[N + 5] = x, I[N] = I[N + 1] = I[N + 2] = I[N + 3] = I[N + 4] = I[N + 5] = m.alpha * r, this.batchCardCount++;
                }
              } else this._appendToBatchGroup(m, e, h, m.alpha * r);
            }
          }, n._drawBuffers = function(t) {
            if (!(this.batchCardCount <= 0)) {
              this.vocalDebug && console.log("Draw[" + this._drawID + ":" + this._batchID + "] : " + this.batchReason);
              var e = this._activeShader, i = this._vertexPositionBuffer, r = this._textureIndexBuffer, a = this._uvPositionBuffer, h = this._alphaBuffer;
              t.useProgram(e), t.bindBuffer(t.ARRAY_BUFFER, i), t.vertexAttribPointer(e.vertexPositionAttribute, i.itemSize, t.FLOAT, !1, 0, 0), t.bufferSubData(t.ARRAY_BUFFER, 0, this._vertices), t.bindBuffer(t.ARRAY_BUFFER, r), t.vertexAttribPointer(e.textureIndexAttribute, r.itemSize, t.FLOAT, !1, 0, 0), t.bufferSubData(t.ARRAY_BUFFER, 0, this._indices), t.bindBuffer(t.ARRAY_BUFFER, a), t.vertexAttribPointer(e.uvPositionAttribute, a.itemSize, t.FLOAT, !1, 0, 0), t.bufferSubData(t.ARRAY_BUFFER, 0, this._uvs), t.bindBuffer(t.ARRAY_BUFFER, h), t.vertexAttribPointer(e.alphaAttribute, h.itemSize, t.FLOAT, !1, 0, 0), t.bufferSubData(t.ARRAY_BUFFER, 0, this._alphas), t.uniformMatrix4fv(e.pMatrixUniform, t.FALSE, this._projectionMatrix);
              for (var l = 0; l < this._batchTextureCount; l++) {
                var c = this._batchTextures[l];
                t.activeTexture(t.TEXTURE0 + l), t.bindTexture(t.TEXTURE_2D, c), this.setTextureParams(t, c.isPOT);
              }
              t.drawArrays(t.TRIANGLES, 0, this.batchCardCount * o.INDICIES_PER_CARD), this._batchID++;
            }
          }, n._drawCover = function(t, e) {
            this._isDrawing > 0 && this._drawBuffers(t), this.vocalDebug && console.log("Draw[" + this._drawID + ":" + this._batchID + "] : Cover");
            var i = this._activeShader, r = this._vertexPositionBuffer, a = this._uvPositionBuffer;
            t.clear(t.COLOR_BUFFER_BIT), t.useProgram(i), t.bindBuffer(t.ARRAY_BUFFER, r), t.vertexAttribPointer(i.vertexPositionAttribute, r.itemSize, t.FLOAT, !1, 0, 0), t.bufferSubData(t.ARRAY_BUFFER, 0, o.COVER_VERT), t.bindBuffer(t.ARRAY_BUFFER, a), t.vertexAttribPointer(i.uvPositionAttribute, a.itemSize, t.FLOAT, !1, 0, 0), t.bufferSubData(t.ARRAY_BUFFER, 0, e ? o.COVER_UV_FLIP : o.COVER_UV), t.uniform1i(i.samplerUniform, 0), t.uniform1f(i.uprightUniform, e ? 0 : 1), t.drawArrays(t.TRIANGLES, 0, o.INDICIES_PER_CARD);
          }, createjs.StageGL = createjs.promote(o, "Stage");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.DisplayObject_constructor(), typeof t == "string" ? (this.image = document.createElement("img"), this.image.src = t) : this.image = t, this.sourceRect = null, this._webGLRenderStyle = createjs.DisplayObject._StageGL_BITMAP;
          }
          var n = createjs.extend(o, createjs.DisplayObject);
          n.initialize = o, n.isVisible = function() {
            var t = this.image, e = this.cacheCanvas || t && (t.naturalWidth || t.getContext || t.readyState >= 2);
            return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && e);
          }, n.draw = function(t, e) {
            if (this.DisplayObject_draw(t, e)) return !0;
            var i = this.image, r = this.sourceRect;
            if (i.getImage && (i = i.getImage()), !i) return !0;
            if (r) {
              var a = r.x, h = r.y, l = a + r.width, c = h + r.height, u = 0, d = 0, g = i.width, v = i.height;
              a < 0 && (u -= a, a = 0), l > g && (l = g), h < 0 && (d -= h, h = 0), c > v && (c = v), t.drawImage(i, a, h, l - a, c - h, u, d, l - a, c - h);
            } else t.drawImage(i, 0, 0);
            return !0;
          }, n.getBounds = function() {
            var t = this.DisplayObject_getBounds();
            if (t) return t;
            var e = this.image, i = this.sourceRect || e;
            return e && (e.naturalWidth || e.getContext || e.readyState >= 2) ? this._rectangle.setValues(0, 0, i.width, i.height) : null;
          }, n.clone = function(t) {
            var e = this.image;
            e && t && (e = e.cloneNode());
            var i = new o(e);
            return this.sourceRect && (i.sourceRect = this.sourceRect.clone()), this._cloneProps(i), i;
          }, n.toString = function() {
            return "[Bitmap (name=" + this.name + ")]";
          }, createjs.Bitmap = createjs.promote(o, "DisplayObject");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e) {
            this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this.paused = !0, this.spriteSheet = t, this.currentAnimationFrame = 0, this.framerate = 0, this._animation = null, this._currentFrame = null, this._skipAdvance = !1, this._webGLRenderStyle = createjs.DisplayObject._StageGL_SPRITE, e != null && this.gotoAndPlay(e);
          }
          var n = createjs.extend(o, createjs.DisplayObject);
          n.initialize = o, n.isVisible = function() {
            var t = this.cacheCanvas || this.spriteSheet.complete;
            return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && t);
          }, n.draw = function(t, e) {
            if (this.DisplayObject_draw(t, e)) return !0;
            this._normalizeFrame();
            var i = this.spriteSheet.getFrame(0 | this._currentFrame);
            if (!i) return !1;
            var r = i.rect;
            return r.width && r.height && t.drawImage(i.image, r.x, r.y, r.width, r.height, -i.regX, -i.regY, r.width, r.height), !0;
          }, n.play = function() {
            this.paused = !1;
          }, n.stop = function() {
            this.paused = !0;
          }, n.gotoAndPlay = function(t) {
            this.paused = !1, this._skipAdvance = !0, this._goto(t);
          }, n.gotoAndStop = function(t) {
            this.paused = !0, this._goto(t);
          }, n.advance = function(t) {
            var e = this.framerate || this.spriteSheet.framerate, i = e && t != null ? t / (1e3 / e) : 1;
            this._normalizeFrame(i);
          }, n.getBounds = function() {
            return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle);
          }, n.clone = function() {
            return this._cloneProps(new o(this.spriteSheet));
          }, n.toString = function() {
            return "[Sprite (name=" + this.name + ")]";
          }, n._cloneProps = function(t) {
            return this.DisplayObject__cloneProps(t), t.currentFrame = this.currentFrame, t.currentAnimation = this.currentAnimation, t.paused = this.paused, t.currentAnimationFrame = this.currentAnimationFrame, t.framerate = this.framerate, t._animation = this._animation, t._currentFrame = this._currentFrame, t._skipAdvance = this._skipAdvance, t;
          }, n._tick = function(t) {
            this.paused || (this._skipAdvance || this.advance(t && t.delta), this._skipAdvance = !1), this.DisplayObject__tick(t);
          }, n._normalizeFrame = function(t) {
            t = t || 0;
            var e, i = this._animation, r = this.paused, a = this._currentFrame;
            if (i) {
              var h = i.speed || 1, l = this.currentAnimationFrame;
              if (e = i.frames.length, l + t * h >= e) {
                var c = i.next;
                if (this._dispatchAnimationEnd(i, a, r, c, e - 1)) return;
                if (c) return this._goto(c, t - (e - l) / h);
                this.paused = !0, l = i.frames.length - 1;
              } else l += t * h;
              this.currentAnimationFrame = l, this._currentFrame = i.frames[0 | l];
            } else if (a = this._currentFrame += t, e = this.spriteSheet.getNumFrames(), a >= e && e > 0 && !this._dispatchAnimationEnd(i, a, r, e - 1) && (this._currentFrame -= e) >= e) return this._normalizeFrame();
            a = 0 | this._currentFrame, this.currentFrame != a && (this.currentFrame = a, this.dispatchEvent("change"));
          }, n._dispatchAnimationEnd = function(t, e, i, r, a) {
            var h = t ? t.name : null;
            if (this.hasEventListener("animationend")) {
              var l = new createjs.Event("animationend");
              l.name = h, l.next = r, this.dispatchEvent(l);
            }
            var c = this._animation != t || this._currentFrame != e;
            return c || i || !this.paused || (this.currentAnimationFrame = a, c = !0), c;
          }, n._goto = function(t, e) {
            if (this.currentAnimationFrame = 0, isNaN(t)) {
              var i = this.spriteSheet.getAnimation(t);
              i && (this._animation = i, this.currentAnimation = t, this._normalizeFrame(e));
            } else this.currentAnimation = this._animation = null, this._currentFrame = t, this._normalizeFrame();
          }, createjs.Sprite = createjs.promote(o, "DisplayObject");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.DisplayObject_constructor(), this.graphics = t || new createjs.Graphics();
          }
          var n = createjs.extend(o, createjs.DisplayObject);
          n.isVisible = function() {
            var t = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
            return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && t);
          }, n.draw = function(t, e) {
            return !!this.DisplayObject_draw(t, e) || (this.graphics.draw(t, this), !0);
          }, n.clone = function(t) {
            var e = t && this.graphics ? this.graphics.clone() : this.graphics;
            return this._cloneProps(new o(e));
          }, n.toString = function() {
            return "[Shape (name=" + this.name + ")]";
          }, createjs.Shape = createjs.promote(o, "DisplayObject");
        }(), this.createjs = this.createjs || {}, function() {
          function o(e, i, r) {
            this.DisplayObject_constructor(), this.text = e, this.font = i, this.color = r, this.textAlign = "left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight = 0, this.lineWidth = null;
          }
          var n = createjs.extend(o, createjs.DisplayObject), t = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
          t.getContext && (o._workingContext = t.getContext("2d"), t.width = t.height = 1), o.H_OFFSETS = { start: 0, left: 0, center: -0.5, end: -1, right: -1 }, o.V_OFFSETS = { top: 0, hanging: -0.01, middle: -0.4, alphabetic: -0.8, ideographic: -0.85, bottom: -1 }, n.isVisible = function() {
            var e = this.cacheCanvas || this.text != null && this.text !== "";
            return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && e);
          }, n.draw = function(e, i) {
            if (this.DisplayObject_draw(e, i)) return !0;
            var r = this.color || "#000";
            return this.outline ? (e.strokeStyle = r, e.lineWidth = 1 * this.outline) : e.fillStyle = r, this._drawText(this._prepContext(e)), !0;
          }, n.getMeasuredWidth = function() {
            return this._getMeasuredWidth(this.text);
          }, n.getMeasuredLineHeight = function() {
            return 1.2 * this._getMeasuredWidth("M");
          }, n.getMeasuredHeight = function() {
            return this._drawText(null, {}).height;
          }, n.getBounds = function() {
            var e = this.DisplayObject_getBounds();
            if (e) return e;
            if (this.text == null || this.text === "") return null;
            var i = this._drawText(null, {}), r = this.maxWidth && this.maxWidth < i.width ? this.maxWidth : i.width, a = r * o.H_OFFSETS[this.textAlign || "left"], h = this.lineHeight || this.getMeasuredLineHeight(), l = h * o.V_OFFSETS[this.textBaseline || "top"];
            return this._rectangle.setValues(a, l, r, i.height);
          }, n.getMetrics = function() {
            var e = { lines: [] };
            return e.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), e.vOffset = e.lineHeight * o.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, e, e.lines);
          }, n.clone = function() {
            return this._cloneProps(new o(this.text, this.font, this.color));
          }, n.toString = function() {
            return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]";
          }, n._cloneProps = function(e) {
            return this.DisplayObject__cloneProps(e), e.textAlign = this.textAlign, e.textBaseline = this.textBaseline, e.maxWidth = this.maxWidth, e.outline = this.outline, e.lineHeight = this.lineHeight, e.lineWidth = this.lineWidth, e;
          }, n._prepContext = function(e) {
            return e.font = this.font || "10px sans-serif", e.textAlign = this.textAlign || "left", e.textBaseline = this.textBaseline || "top", e.lineJoin = "miter", e.miterLimit = 2.5, e;
          }, n._drawText = function(e, i, r) {
            var a = !!e;
            a || (e = o._workingContext, e.save(), this._prepContext(e));
            for (var h = this.lineHeight || this.getMeasuredLineHeight(), l = 0, c = 0, u = String(this.text).split(/(?:\r\n|\r|\n)/), d = 0, g = u.length; d < g; d++) {
              var v = u[d], m = null;
              if (this.lineWidth != null && (m = e.measureText(v).width) > this.lineWidth) {
                var T = v.split(/(\s)/);
                v = T[0], m = e.measureText(v).width;
                for (var b = 1, x = T.length; b < x; b += 2) {
                  var S = e.measureText(T[b] + T[b + 1]).width;
                  m + S > this.lineWidth ? (a && this._drawTextLine(e, v, c * h), r && r.push(v), m > l && (l = m), v = T[b + 1], m = e.measureText(v).width, c++) : (v += T[b] + T[b + 1], m += S);
                }
              }
              a && this._drawTextLine(e, v, c * h), r && r.push(v), i && m == null && (m = e.measureText(v).width), m > l && (l = m), c++;
            }
            return i && (i.width = l, i.height = c * h), a || e.restore(), i;
          }, n._drawTextLine = function(e, i, r) {
            this.outline ? e.strokeText(i, 0, r, this.maxWidth || 65535) : e.fillText(i, 0, r, this.maxWidth || 65535);
          }, n._getMeasuredWidth = function(e) {
            var i = o._workingContext;
            i.save();
            var r = this._prepContext(i).measureText(e).width;
            return i.restore(), r;
          }, createjs.Text = createjs.promote(o, "DisplayObject");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e) {
            this.Container_constructor(), this.text = t || "", this.spriteSheet = e, this.lineHeight = 0, this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = { text: 0, spriteSheet: 0, lineHeight: 0, letterSpacing: 0, spaceWidth: 0 }, this._oldStage = null, this._drawAction = null;
          }
          var n = createjs.extend(o, createjs.Container);
          o.maxPoolSize = 100, o._spritePool = [], n.draw = function(t, e) {
            this.DisplayObject_draw(t, e) || (this._updateState(), this.Container_draw(t, e));
          }, n.getBounds = function() {
            return this._updateText(), this.Container_getBounds();
          }, n.isVisible = function() {
            var t = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
            return !!(this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0 && t);
          }, n.clone = function() {
            return this._cloneProps(new o(this.text, this.spriteSheet));
          }, n.addChild = n.addChildAt = n.removeChild = n.removeChildAt = n.removeAllChildren = function() {
          }, n._updateState = function() {
            this._updateText();
          }, n._cloneProps = function(t) {
            return this.Container__cloneProps(t), t.lineHeight = this.lineHeight, t.letterSpacing = this.letterSpacing, t.spaceWidth = this.spaceWidth, t;
          }, n._getFrameIndex = function(t, e) {
            var i, r = e.getAnimation(t);
            return r || (t != (i = t.toUpperCase()) || t != (i = t.toLowerCase()) || (i = null), i && (r = e.getAnimation(i))), r && r.frames[0];
          }, n._getFrame = function(t, e) {
            var i = this._getFrameIndex(t, e);
            return i == null ? i : e.getFrame(i);
          }, n._getLineHeight = function(t) {
            var e = this._getFrame("1", t) || this._getFrame("T", t) || this._getFrame("L", t) || t.getFrame(0);
            return e ? e.rect.height : 1;
          }, n._getSpaceWidth = function(t) {
            var e = this._getFrame("1", t) || this._getFrame("l", t) || this._getFrame("e", t) || this._getFrame("a", t) || t.getFrame(0);
            return e ? e.rect.width : 1;
          }, n._updateText = function() {
            var t, e = 0, i = 0, r = this._oldProps, a = !1, h = this.spaceWidth, l = this.lineHeight, c = this.spriteSheet, u = o._spritePool, d = this.children, g = 0, v = d.length;
            for (var m in r) r[m] != this[m] && (r[m] = this[m], a = !0);
            if (a) {
              var T = !!this._getFrame(" ", c);
              T || h || (h = this._getSpaceWidth(c)), l || (l = this._getLineHeight(c));
              for (var b = 0, x = this.text.length; b < x; b++) {
                var S = this.text.charAt(b);
                if (S != " " || T) if (S != `
` && S != "\r") {
                  var E = this._getFrameIndex(S, c);
                  E != null && (g < v ? t = d[g] : (d.push(t = u.length ? u.pop() : new createjs.Sprite()), t.parent = this, v++), t.spriteSheet = c, t.gotoAndStop(E), t.x = e, t.y = i, g++, e += t.getBounds().width + this.letterSpacing);
                } else S == "\r" && this.text.charAt(b + 1) == `
` && b++, e = 0, i += l;
                else e += h;
              }
              for (; v > g; ) u.push(t = d.pop()), t.parent = null, v--;
              u.length > o.maxPoolSize && (u.length = o.maxPoolSize);
            }
          }, createjs.BitmapText = createjs.promote(o, "Container");
        }(), this.createjs = this.createjs || {}, function() {
          function o(e) {
            this.Container_constructor(), !o.inited && o.init();
            var i, r, a, h;
            e instanceof String || arguments.length > 1 ? (i = e, r = arguments[1], a = arguments[2], h = arguments[3], a == null && (a = -1), e = null) : e && (i = e.mode, r = e.startPosition, a = e.loop, h = e.labels), e || (e = { labels: h }), this.mode = i || o.INDEPENDENT, this.startPosition = r || 0, this.loop = a === !0 ? -1 : a || 0, this.currentFrame = 0, this.paused = e.paused || !1, this.actionsEnabled = !0, this.autoReset = !0, this.frameBounds = this.frameBounds || e.frameBounds, this.framerate = null, e.useTicks = e.paused = !0, this.timeline = new createjs.Timeline(e), this._synchOffset = 0, this._rawPosition = -1, this._bound_resolveState = this._resolveState.bind(this), this._t = 0, this._managed = {};
          }
          function n() {
            throw "MovieClipPlugin cannot be instantiated.";
          }
          var t = createjs.extend(o, createjs.Container);
          o.INDEPENDENT = "independent", o.SINGLE_FRAME = "single", o.SYNCHED = "synched", o.inited = !1, o.init = function() {
            o.inited || (n.install(), o.inited = !0);
          }, t._getLabels = function() {
            return this.timeline.getLabels();
          }, t.getLabels = createjs.deprecate(t._getLabels, "MovieClip.getLabels"), t._getCurrentLabel = function() {
            return this.timeline.currentLabel;
          }, t.getCurrentLabel = createjs.deprecate(t._getCurrentLabel, "MovieClip.getCurrentLabel"), t._getDuration = function() {
            return this.timeline.duration;
          }, t.getDuration = createjs.deprecate(t._getDuration, "MovieClip.getDuration");
          try {
            Object.defineProperties(t, { labels: { get: t._getLabels }, currentLabel: { get: t._getCurrentLabel }, totalFrames: { get: t._getDuration }, duration: { get: t._getDuration } });
          } catch {
          }
          t.initialize = o, t.isVisible = function() {
            return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0);
          }, t.draw = function(e, i) {
            return !!this.DisplayObject_draw(e, i) || (this._updateState(), this.Container_draw(e, i), !0);
          }, t.play = function() {
            this.paused = !1;
          }, t.stop = function() {
            this.paused = !0;
          }, t.gotoAndPlay = function(e) {
            this.paused = !1, this._goto(e);
          }, t.gotoAndStop = function(e) {
            this.paused = !0, this._goto(e);
          }, t.advance = function(e) {
            var i = o.INDEPENDENT;
            if (this.mode === i) {
              for (var r = this, a = r.framerate; (r = r.parent) && a === null; ) r.mode === i && (a = r._framerate);
              if (this._framerate = a, !this.paused) {
                var h = a !== null && a !== -1 && e !== null ? e / (1e3 / a) + this._t : 1, l = 0 | h;
                for (this._t = h - l; l--; ) this._updateTimeline(this._rawPosition + 1, !1);
              }
            }
          }, t.clone = function() {
            throw "MovieClip cannot be cloned.";
          }, t.toString = function() {
            return "[MovieClip (name=" + this.name + ")]";
          }, t._updateState = function() {
            this._rawPosition !== -1 && this.mode === o.INDEPENDENT || this._updateTimeline(-1);
          }, t._tick = function(e) {
            this.advance(e && e.delta), this.Container__tick(e);
          }, t._goto = function(e) {
            var i = this.timeline.resolve(e);
            i != null && (this._t = 0, this._updateTimeline(i, !0));
          }, t._reset = function() {
            this._rawPosition = -1, this._t = this.currentFrame = 0, this.paused = !1;
          }, t._updateTimeline = function(e, i) {
            var r = this.mode !== o.INDEPENDENT, a = this.timeline;
            r && (e = this.startPosition + (this.mode === o.SINGLE_FRAME ? 0 : this._synchOffset)), e < 0 && (e = 0), (this._rawPosition !== e || r) && (this._rawPosition = e, a.loop = this.loop, a.setPosition(e, r || !this.actionsEnabled, i, this._bound_resolveState));
          }, t._renderFirstFrame = function() {
            var e = this.timeline, i = e.rawPosition;
            e.setPosition(0, !0, !0, this._bound_resolveState), e.rawPosition = i;
          }, t._resolveState = function() {
            var e = this.timeline;
            this.currentFrame = e.position;
            for (var i in this._managed) this._managed[i] = 1;
            for (var r = e.tweens, a = 0, h = r.length; a < h; a++) {
              var l = r[a], c = l.target;
              if (c !== this && !l.passive) {
                var u = l._stepPosition;
                c instanceof createjs.DisplayObject ? this._addManagedChild(c, u) : this._setState(c.state, u);
              }
            }
            var d = this.children;
            for (a = d.length - 1; a >= 0; a--) {
              var g = d[a].id;
              this._managed[g] === 1 && (this.removeChildAt(a), delete this._managed[g]);
            }
          }, t._setState = function(e, i) {
            if (e) for (var r = e.length - 1; r >= 0; r--) {
              var a = e[r], h = a.t, l = a.p;
              for (var c in l) h[c] = l[c];
              this._addManagedChild(h, i);
            }
          }, t._addManagedChild = function(e, i) {
            e._off || (this.addChildAt(e, 0), e instanceof o && (e._synchOffset = i, e.mode === o.INDEPENDENT && e.autoReset && !this._managed[e.id] && e._reset()), this._managed[e.id] = 2);
          }, t._getBounds = function(e, i) {
            var r = this.DisplayObject_getBounds();
            return r || this.frameBounds && (r = this._rectangle.copy(this.frameBounds[this.currentFrame])), r ? this._transformBounds(r, e, i) : this.Container__getBounds(e, i);
          }, createjs.MovieClip = createjs.promote(o, "Container"), n.priority = 100, n.ID = "MovieClip", n.install = function() {
            createjs.Tween._installPlugin(n);
          }, n.init = function(e, i, r) {
            i === "startPosition" && e.target instanceof o && e._addPlugin(n);
          }, n.step = function(e, i, r) {
          }, n.change = function(e, i, r, a, h, l) {
            if (r === "startPosition") return h === 1 ? i.props[r] : i.prev.props[r];
          };
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            throw "SpriteSheetUtils cannot be instantiated";
          }
          var n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
          n.getContext && (o._workingCanvas = n, o._workingContext = n.getContext("2d"), n.width = n.height = 1), o.extractFrame = function(t, e) {
            isNaN(e) && (e = t.getAnimation(e).frames[0]);
            var i = t.getFrame(e);
            if (!i) return null;
            var r = i.rect, a = o._workingCanvas;
            a.width = r.width, a.height = r.height, o._workingContext.drawImage(i.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
            var h = document.createElement("img");
            return h.src = a.toDataURL("image/png"), h;
          }, o.addFlippedFrames = createjs.deprecate(null, "SpriteSheetUtils.addFlippedFrames"), o.mergeAlpha = createjs.deprecate(null, "SpriteSheetUtils.mergeAlpha"), o._flip = function(t, e, i, r) {
            for (var a = t._images, h = o._workingCanvas, l = o._workingContext, c = a.length / e, u = 0; u < c; u++) {
              var d = a[u];
              d.__tmp = u, l.setTransform(1, 0, 0, 1, 0, 0), l.clearRect(0, 0, h.width + 1, h.height + 1), h.width = d.width, h.height = d.height, l.setTransform(i ? -1 : 1, 0, 0, r ? -1 : 1, i ? d.width : 0, r ? d.height : 0), l.drawImage(d, 0, 0);
              var g = document.createElement("img");
              g.src = h.toDataURL("image/png"), g.width = d.width || d.naturalWidth, g.height = d.height || d.naturalHeight, a.push(g);
            }
            var v = t._frames, m = v.length / e;
            for (u = 0; u < m; u++) {
              d = v[u];
              var T = d.rect.clone();
              g = a[d.image.__tmp + c * e];
              var b = { image: g, rect: T, regX: d.regX, regY: d.regY };
              i && (T.x = (g.width || g.naturalWidth) - T.x - T.width, b.regX = T.width - d.regX), r && (T.y = (g.height || g.naturalHeight) - T.y - T.height, b.regY = T.height - d.regY), v.push(b);
            }
            var x = "_" + (i ? "h" : "") + (r ? "v" : ""), S = t._animations, E = t._data, w = S.length / e;
            for (u = 0; u < w; u++) {
              var L = S[u];
              d = E[L];
              var R = { name: L + x, speed: d.speed, next: d.next, frames: [] };
              d.next && (R.next += x), v = d.frames;
              for (var P = 0, O = v.length; P < O; P++) R.frames.push(v[P] + m * e);
              E[R.name] = R, S.push(R.name);
            }
          }, createjs.SpriteSheetUtils = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = 0.3, this.progress = -1, this.framerate = t || 0, this._frames = [], this._animations = {}, this._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this._scale = 1;
          }
          var n = createjs.extend(o, createjs.EventDispatcher);
          o.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", o.ERR_RUNNING = "a build is already running", n.addFrame = function(t, e, i, r, a) {
            if (this._data) throw o.ERR_RUNNING;
            var h = e || t.bounds || t.nominalBounds;
            return !h && t.getBounds && (h = t.getBounds()), h ? (i = i || 1, this._frames.push({ source: t, sourceRect: h, scale: i, funct: r, data: a, index: this._frames.length, height: h.height * i }) - 1) : null;
          }, n.addAnimation = function(t, e, i, r) {
            if (this._data) throw o.ERR_RUNNING;
            this._animations[t] = { frames: e, next: i, speed: r };
          }, n.addMovieClip = function(t, e, i, r, a, h) {
            if (this._data) throw o.ERR_RUNNING;
            var l = t.frameBounds, c = e || t.bounds || t.nominalBounds;
            if (!c && t.getBounds && (c = t.getBounds()), c || l) {
              var u, d, g = this._frames.length, v = t.timeline.duration;
              for (u = 0; u < v; u++) {
                var m = l && l[u] ? l[u] : c;
                this.addFrame(t, m, i, this._setupMovieClipFrame, { i: u, f: r, d: a });
              }
              var T = t.timeline._labels, b = [];
              for (var x in T) b.push({ index: T[x], label: x });
              if (b.length) for (b.sort(function(P, O) {
                return P.index - O.index;
              }), u = 0, d = b.length; u < d; u++) {
                for (var S = b[u].label, E = g + b[u].index, w = g + (u == d - 1 ? v : b[u + 1].index), L = [], R = E; R < w; R++) L.push(R);
                h && !(S = h(S, t, E, w)) || this.addAnimation(S, L, !0);
              }
            }
          }, n.build = function() {
            if (this._data) throw o.ERR_RUNNING;
            for (this._startBuild(); this._drawNext(); ) ;
            return this._endBuild(), this.spriteSheet;
          }, n.buildAsync = function(t) {
            if (this._data) throw o.ERR_RUNNING;
            this.timeSlice = t, this._startBuild();
            var e = this;
            this._timerID = setTimeout(function() {
              e._run();
            }, 50 - 50 * Math.max(0.01, Math.min(0.99, this.timeSlice || 0.3)));
          }, n.stopAsync = function() {
            clearTimeout(this._timerID), this._data = null;
          }, n.clone = function() {
            throw "SpriteSheetBuilder cannot be cloned.";
          }, n.toString = function() {
            return "[SpriteSheetBuilder]";
          }, n._startBuild = function() {
            var t = this.padding || 0;
            this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
            var e = [];
            this._data = { images: [], frames: e, framerate: this.framerate, animations: this._animations };
            var i = this._frames.slice();
            if (i.sort(function(u, d) {
              return u.height <= d.height ? -1 : 1;
            }), i[i.length - 1].height + 2 * t > this.maxHeight) throw o.ERR_DIMENSIONS;
            for (var r = 0, a = 0, h = 0; i.length; ) {
              var l = this._fillRow(i, r, h, e, t);
              if (l.w > a && (a = l.w), r += l.h, !l.h || !i.length) {
                var c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                c.width = this._getSize(a, this.maxWidth), c.height = this._getSize(r, this.maxHeight), this._data.images[h] = c, l.h || (a = r = 0, h++);
              }
            }
          }, n._setupMovieClipFrame = function(t, e) {
            var i = t.actionsEnabled;
            t.actionsEnabled = !1, t.gotoAndStop(e.i), t.actionsEnabled = i, e.f && e.f(t, e.d, e.i);
          }, n._getSize = function(t, e) {
            for (var i = 4; Math.pow(2, ++i) < t; ) ;
            return Math.min(e, Math.pow(2, i));
          }, n._fillRow = function(t, e, i, r, a) {
            var h = this.maxWidth, l = this.maxHeight;
            e += a;
            for (var c = l - e, u = a, d = 0, g = t.length - 1; g >= 0; g--) {
              var v = t[g], m = this._scale * v.scale, T = v.sourceRect, b = v.source, x = Math.floor(m * T.x - a), S = Math.floor(m * T.y - a), E = Math.ceil(m * T.height + 2 * a), w = Math.ceil(m * T.width + 2 * a);
              if (w > h) throw o.ERR_DIMENSIONS;
              E > c || u + w > h || (v.img = i, v.rect = new createjs.Rectangle(u, e, w, E), d = d || E, t.splice(g, 1), r[v.index] = [u, e, w, E, i, Math.round(-x + m * b.regX - a), Math.round(-S + m * b.regY - a)], u += w);
            }
            return { w: u, h: d };
          }, n._endBuild = function() {
            this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete");
          }, n._run = function() {
            for (var t = 50 * Math.max(0.01, Math.min(0.99, this.timeSlice || 0.3)), e = (/* @__PURE__ */ new Date()).getTime() + t, i = !1; e > (/* @__PURE__ */ new Date()).getTime(); ) if (!this._drawNext()) {
              i = !0;
              break;
            }
            if (i) this._endBuild();
            else {
              var r = this;
              this._timerID = setTimeout(function() {
                r._run();
              }, 50 - t);
            }
            var a = this.progress = this._index / this._frames.length;
            if (this.hasEventListener("progress")) {
              var h = new createjs.Event("progress");
              h.progress = a, this.dispatchEvent(h);
            }
          }, n._drawNext = function() {
            var t = this._frames[this._index], e = t.scale * this._scale, i = t.rect, r = t.sourceRect, a = this._data.images[t.img], h = a.getContext("2d");
            return t.funct && t.funct(t.source, t.data), h.save(), h.beginPath(), h.rect(i.x, i.y, i.width, i.height), h.clip(), h.translate(Math.ceil(i.x - r.x * e), Math.ceil(i.y - r.y * e)), h.scale(e, e), t.source.draw(h), h.restore(), ++this._index < this._frames.length;
          }, createjs.SpriteSheetBuilder = createjs.promote(o, "EventDispatcher");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.DisplayObject_constructor(), typeof t == "string" && (t = document.getElementById(t)), this.mouseEnabled = !1;
            var e = t.style;
            e.position = "absolute", e.transformOrigin = e.WebkitTransformOrigin = e.msTransformOrigin = e.MozTransformOrigin = e.OTransformOrigin = "0% 0%", this.htmlElement = t, this._oldProps = null, this._oldStage = null, this._drawAction = null;
          }
          var n = createjs.extend(o, createjs.DisplayObject);
          n.isVisible = function() {
            return this.htmlElement != null;
          }, n.draw = function(t, e) {
            return !0;
          }, n.cache = function() {
          }, n.uncache = function() {
          }, n.updateCache = function() {
          }, n.hitTest = function() {
          }, n.localToGlobal = function() {
          }, n.globalToLocal = function() {
          }, n.localToLocal = function() {
          }, n.clone = function() {
            throw "DOMElement cannot be cloned.";
          }, n.toString = function() {
            return "[DOMElement (name=" + this.name + ")]";
          }, n._tick = function(t) {
            var e = this.stage;
            e && e !== this._oldStage && (this._drawAction && e.off("drawend", this._drawAction), this._drawAction = e.on("drawend", this._handleDrawEnd, this), this._oldStage = e), this.DisplayObject__tick(t);
          }, n._handleDrawEnd = function(t) {
            var e = this.htmlElement;
            if (e) {
              var i = e.style, r = this.getConcatenatedDisplayProps(this._props), a = r.matrix, h = r.visible ? "visible" : "hidden";
              if (h != i.visibility && (i.visibility = h), r.visible) {
                var l = this._oldProps, c = l && l.matrix, u = 1e4;
                if (!c || !c.equals(a)) {
                  var d = "matrix(" + (a.a * u | 0) / u + "," + (a.b * u | 0) / u + "," + (a.c * u | 0) / u + "," + (a.d * u | 0) / u + "," + (a.tx + 0.5 | 0);
                  i.transform = i.WebkitTransform = i.OTransform = i.msTransform = d + "," + (a.ty + 0.5 | 0) + ")", i.MozTransform = d + "px," + (a.ty + 0.5 | 0) + "px)", l || (l = this._oldProps = new createjs.DisplayProps(!0, null)), l.matrix.copy(a);
                }
                l.alpha != r.alpha && (i.opacity = "" + (r.alpha * u | 0) / u, l.alpha = r.alpha);
              }
            }
          }, createjs.DOMElement = createjs.promote(o, "DisplayObject");
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            this.usesContext = !1, this._multiPass = null, this.VTX_SHADER_BODY = null, this.FRAG_SHADER_BODY = null;
          }
          var n = o.prototype;
          n.getBounds = function(t) {
            return t;
          }, n.shaderParamSetup = function(t, e, i) {
          }, n.applyFilter = function(t, e, i, r, a, h, l, c) {
            h = h || t, l == null && (l = e), c == null && (c = i);
            try {
              var u = t.getImageData(e, i, r, a);
            } catch {
              return !1;
            }
            return !!this._applyFilter(u) && (h.putImageData(u, l, c), !0);
          }, n.toString = function() {
            return "[Filter]";
          }, n.clone = function() {
            return new o();
          }, n._applyFilter = function(t) {
            return !0;
          }, createjs.Filter = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            this.width = void 0, this.height = void 0, this.x = void 0, this.y = void 0, this.scale = 1, this.offX = 0, this.offY = 0, this.cacheID = 0, this._filterOffX = 0, this._filterOffY = 0, this._cacheDataURLID = 0, this._cacheDataURL = null, this._drawWidth = 0, this._drawHeight = 0;
          }
          var n = o.prototype;
          o.getFilterBounds = function(t, e) {
            e || (e = new createjs.Rectangle());
            var i = t.filters, r = i && i.length;
            if (!!r <= 0) return e;
            for (var a = 0; a < r; a++) {
              var h = i[a];
              if (h && h.getBounds) {
                var l = h.getBounds();
                l && (a == 0 ? e.setValues(l.x, l.y, l.width, l.height) : e.extend(l.x, l.y, l.width, l.height));
              }
            }
            return e;
          }, n.toString = function() {
            return "[BitmapCache]";
          }, n.define = function(t, e, i, r, a, h, l) {
            if (!t) throw "No symbol to cache";
            this._options = l, this.target = t, this.width = r >= 1 ? r : 1, this.height = a >= 1 ? a : 1, this.x = e || 0, this.y = i || 0, this.scale = h || 1, this.update();
          }, n.update = function(t) {
            if (!this.target) throw "define() must be called before update()";
            var e = o.getFilterBounds(this.target), i = this.target.cacheCanvas;
            this._drawWidth = Math.ceil(this.width * this.scale) + e.width, this._drawHeight = Math.ceil(this.height * this.scale) + e.height, i && this._drawWidth == i.width && this._drawHeight == i.height || this._updateSurface(), this._filterOffX = e.x, this._filterOffY = e.y, this.offX = this.x * this.scale + this._filterOffX, this.offY = this.y * this.scale + this._filterOffY, this._drawToCache(t), this.cacheID = this.cacheID ? this.cacheID + 1 : 1;
          }, n.release = function() {
            if (this._webGLCache) this._webGLCache.isCacheControlled || (this.__lastRT && (this.__lastRT = void 0), this.__rtA && this._webGLCache._killTextureObject(this.__rtA), this.__rtB && this._webGLCache._killTextureObject(this.__rtB), this.target && this.target.cacheCanvas && this._webGLCache._killTextureObject(this.target.cacheCanvas)), this._webGLCache = !1;
            else {
              var t = this.target.stage;
              t instanceof createjs.StageGL && t.releaseTexture(this.target.cacheCanvas);
            }
            this.target = this.target.cacheCanvas = null, this.cacheID = this._cacheDataURLID = this._cacheDataURL = void 0, this.width = this.height = this.x = this.y = this.offX = this.offY = 0, this.scale = 1;
          }, n.getCacheDataURL = function() {
            var t = this.target && this.target.cacheCanvas;
            return t ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURLID = this.cacheID, this._cacheDataURL = t.toDataURL ? t.toDataURL() : null), this._cacheDataURL) : null;
          }, n.draw = function(t) {
            return !!this.target && (t.drawImage(this.target.cacheCanvas, this.x + this._filterOffX / this.scale, this.y + this._filterOffY / this.scale, this._drawWidth / this.scale, this._drawHeight / this.scale), !0);
          }, n._updateSurface = function() {
            if (!this._options || !this._options.useGL) {
              var e = this.target.cacheCanvas;
              return e || (e = this.target.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), e.width = this._drawWidth, void (e.height = this._drawHeight);
            }
            if (!this._webGLCache) if (this._options.useGL === "stage") {
              if (!this.target.stage || !this.target.stage.isWebGL) {
                var t = "Cannot use 'stage' for cache because the object's parent stage is ";
                throw t += this.target.stage ? "non WebGL." : "not set, please addChild to the correct stage.";
              }
              this.target.cacheCanvas = !0, this._webGLCache = this.target.stage;
            } else if (this._options.useGL === "new") this.target.cacheCanvas = document.createElement("canvas"), this._webGLCache = new createjs.StageGL(this.target.cacheCanvas, { antialias: !0, transparent: !0, autoPurge: -1 }), this._webGLCache.isCacheControlled = !0;
            else {
              if (!(this._options.useGL instanceof createjs.StageGL)) throw "Invalid option provided to useGL, expected ['stage', 'new', StageGL, undefined], got " + this._options.useGL;
              this.target.cacheCanvas = !0, this._webGLCache = this._options.useGL, this._webGLCache.isCacheControlled = !0;
            }
            var e = this.target.cacheCanvas, i = this._webGLCache;
            i.isCacheControlled && (e.width = this._drawWidth, e.height = this._drawHeight, i.updateViewport(this._drawWidth, this._drawHeight)), this.target.filters ? (i.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight), i.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight)) : i.isCacheControlled || i.getTargetRenderTexture(this.target, this._drawWidth, this._drawHeight);
          }, n._drawToCache = function(t) {
            var e = this.target.cacheCanvas, i = this.target, r = this._webGLCache;
            if (r) r.cacheDraw(i, i.filters, this), e = this.target.cacheCanvas, e.width = this._drawWidth, e.height = this._drawHeight;
            else {
              var a = e.getContext("2d");
              t || a.clearRect(0, 0, this._drawWidth + 1, this._drawHeight + 1), a.save(), a.globalCompositeOperation = t, a.setTransform(this.scale, 0, 0, this.scale, -this._filterOffX, -this._filterOffY), a.translate(-this.x, -this.y), i.draw(a, !0), a.restore(), i.filters && i.filters.length && this._applyFilters(a);
            }
            e._invalid = !0;
          }, n._applyFilters = function(t) {
            var e, i = this.target.filters, r = this._drawWidth, a = this._drawHeight, h = 0, l = i[h];
            do
              l.usesContext ? (e && (t.putImageData(e, 0, 0), e = null), l.applyFilter(t, 0, 0, r, a)) : (e || (e = t.getImageData(0, 0, r, a)), l._applyFilter(e)), l = l._multiPass !== null ? l._multiPass : i[++h];
            while (l);
            e && t.putImageData(e, 0, 0);
          }, createjs.BitmapCache = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i) {
            this.Filter_constructor(), this._blurX = t, this._blurXTable = [], this._lastBlurX = null, this._blurY = e, this._blurYTable = [], this._lastBlurY = null, this._quality, this._lastQuality = null, this.FRAG_SHADER_TEMPLATE = "uniform float xWeight[{{blurX}}];uniform float yWeight[{{blurY}}];uniform vec2 textureOffset;void main(void) {vec4 color = vec4(0.0);float xAdj = ({{blurX}}.0-1.0)/2.0;float yAdj = ({{blurY}}.0-1.0)/2.0;vec2 sampleOffset;for(int i=0; i<{{blurX}}; i++) {for(int j=0; j<{{blurY}}; j++) {sampleOffset = vRenderCoord + (textureOffset * vec2(float(i)-xAdj, float(j)-yAdj));color += texture2D(uSampler, sampleOffset) * (xWeight[i] * yWeight[j]);}}gl_FragColor = color.rgba;}", (isNaN(i) || i < 1) && (i = 1), this.setQuality(0 | i);
          }
          var n = createjs.extend(o, createjs.Filter);
          n.getBlurX = function() {
            return this._blurX;
          }, n.getBlurY = function() {
            return this._blurY;
          }, n.setBlurX = function(t) {
            (isNaN(t) || t < 0) && (t = 0), this._blurX = t;
          }, n.setBlurY = function(t) {
            (isNaN(t) || t < 0) && (t = 0), this._blurY = t;
          }, n.getQuality = function() {
            return this._quality;
          }, n.setQuality = function(t) {
            (isNaN(t) || t < 0) && (t = 0), this._quality = 0 | t;
          }, n._getShader = function() {
            var t = this._lastBlurX !== this._blurX, e = this._lastBlurY !== this._blurY, i = this._lastQuality !== this._quality;
            return t || e || i ? ((t || i) && (this._blurXTable = this._getTable(this._blurX * this._quality)), (e || i) && (this._blurYTable = this._getTable(this._blurY * this._quality)), this._updateShader(), this._lastBlurX = this._blurX, this._lastBlurY = this._blurY, void (this._lastQuality = this._quality)) : this._compiledShader;
          }, n._setShader = function() {
            this._compiledShader;
          };
          try {
            Object.defineProperties(n, { blurX: { get: n.getBlurX, set: n.setBlurX }, blurY: { get: n.getBlurY, set: n.setBlurY }, quality: { get: n.getQuality, set: n.setQuality }, _builtShader: { get: n._getShader, set: n._setShader } });
          } catch (t) {
            console.log(t);
          }
          n._getTable = function(t) {
            if (t <= 1) return [1];
            var e = [], i = Math.ceil(2 * t);
            i += i % 2 ? 0 : 1;
            for (var r = i / 2 | 0, a = -r; a <= r; a++) {
              var h = a / r * 4.2;
              e.push(1 / Math.sqrt(2 * Math.PI) * Math.pow(Math.E, -Math.pow(h, 2) / 4));
            }
            var l = e.reduce(function(c, u) {
              return c + u;
            });
            return e.map(function(c, u, d) {
              return c / l;
            });
          }, n._updateShader = function() {
            if (this._blurX !== void 0 && this._blurY !== void 0) {
              var t = this.FRAG_SHADER_TEMPLATE;
              t = t.replace(/\{\{blurX\}\}/g, this._blurXTable.length.toFixed(0)), t = t.replace(/\{\{blurY\}\}/g, this._blurYTable.length.toFixed(0)), this.FRAG_SHADER_BODY = t;
            }
          }, n.shaderParamSetup = function(t, e, i) {
            t.uniform1fv(t.getUniformLocation(i, "xWeight"), this._blurXTable), t.uniform1fv(t.getUniformLocation(i, "yWeight"), this._blurYTable), t.uniform2f(t.getUniformLocation(i, "textureOffset"), 2 / (e._viewportWidth * this._quality), 2 / (e._viewportHeight * this._quality));
          }, o.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], o.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], n.getBounds = function(t) {
            var e = 0 | this.blurX, i = 0 | this.blurY;
            if (e <= 0 && i <= 0) return t;
            var r = Math.pow(this.quality, 0.2);
            return (t || new createjs.Rectangle()).pad(i * r + 1, e * r + 1, i * r + 1, e * r + 1);
          }, n.clone = function() {
            return new o(this.blurX, this.blurY, this.quality);
          }, n.toString = function() {
            return "[BlurFilter]";
          }, n._applyFilter = function(t) {
            var e = this._blurX >> 1;
            if (isNaN(e) || e < 0) return !1;
            var i = this._blurY >> 1;
            if (isNaN(i) || i < 0 || e == 0 && i == 0) return !1;
            var r = this.quality;
            (isNaN(r) || r < 1) && (r = 1), r |= 0, r > 3 && (r = 3), r < 1 && (r = 1);
            var a = t.data, h = 0, l = 0, c = 0, u = 0, d = 0, g = 0, v = 0, m = 0, T = 0, b = 0, x = 0, S = 0, E = 0, w = 0, L = 0, R = e + e + 1 | 0, P = i + i + 1 | 0, O = 0 | t.width, H = 0 | t.height, I = O - 1 | 0, U = H - 1 | 0, N = e + 1 | 0, A = i + 1 | 0, W = { r: 0, b: 0, g: 0, a: 0 }, z = W;
            for (c = 1; c < R; c++) z = z.n = { r: 0, b: 0, g: 0, a: 0 };
            z.n = W;
            var et = { r: 0, b: 0, g: 0, a: 0 }, $ = et;
            for (c = 1; c < P; c++) $ = $.n = { r: 0, b: 0, g: 0, a: 0 };
            $.n = et;
            for (var q = null, wt = 0 | o.MUL_TABLE[e], nt = 0 | o.SHG_TABLE[e], Z = 0 | o.MUL_TABLE[i], Mt = 0 | o.SHG_TABLE[i]; r-- > 0; ) {
              v = g = 0;
              var D = wt, st = nt;
              for (l = H; --l > -1; ) {
                for (m = N * (S = a[0 | g]), T = N * (E = a[g + 1 | 0]), b = N * (w = a[g + 2 | 0]), x = N * (L = a[g + 3 | 0]), z = W, c = N; --c > -1; ) z.r = S, z.g = E, z.b = w, z.a = L, z = z.n;
                for (c = 1; c < N; c++) u = g + ((I < c ? I : c) << 2) | 0, m += z.r = a[u], T += z.g = a[u + 1], b += z.b = a[u + 2], x += z.a = a[u + 3], z = z.n;
                for (q = W, h = 0; h < O; h++) a[g++] = m * D >>> st, a[g++] = T * D >>> st, a[g++] = b * D >>> st, a[g++] = x * D >>> st, u = v + ((u = h + e + 1) < I ? u : I) << 2, m -= q.r - (q.r = a[u]), T -= q.g - (q.g = a[u + 1]), b -= q.b - (q.b = a[u + 2]), x -= q.a - (q.a = a[u + 3]), q = q.n;
                v += O;
              }
              for (D = Z, st = Mt, h = 0; h < O; h++) {
                for (g = h << 2 | 0, m = A * (S = a[g]) | 0, T = A * (E = a[g + 1 | 0]) | 0, b = A * (w = a[g + 2 | 0]) | 0, x = A * (L = a[g + 3 | 0]) | 0, $ = et, c = 0; c < A; c++) $.r = S, $.g = E, $.b = w, $.a = L, $ = $.n;
                for (d = O, c = 1; c <= i; c++) g = d + h << 2, m += $.r = a[g], T += $.g = a[g + 1], b += $.b = a[g + 2], x += $.a = a[g + 3], $ = $.n, c < U && (d += O);
                if (g = h, q = et, r > 0) for (l = 0; l < H; l++) u = g << 2, a[u + 3] = L = x * D >>> st, L > 0 ? (a[u] = m * D >>> st, a[u + 1] = T * D >>> st, a[u + 2] = b * D >>> st) : a[u] = a[u + 1] = a[u + 2] = 0, u = h + ((u = l + A) < U ? u : U) * O << 2, m -= q.r - (q.r = a[u]), T -= q.g - (q.g = a[u + 1]), b -= q.b - (q.b = a[u + 2]), x -= q.a - (q.a = a[u + 3]), q = q.n, g += O;
                else for (l = 0; l < H; l++) u = g << 2, a[u + 3] = L = x * D >>> st, L > 0 ? (L = 255 / L, a[u] = (m * D >>> st) * L, a[u + 1] = (T * D >>> st) * L, a[u + 2] = (b * D >>> st) * L) : a[u] = a[u + 1] = a[u + 2] = 0, u = h + ((u = l + A) < U ? u : U) * O << 2, m -= q.r - (q.r = a[u]), T -= q.g - (q.g = a[u + 1]), b -= q.b - (q.b = a[u + 2]), x -= q.a - (q.a = a[u + 3]), q = q.n, g += O;
              }
            }
            return !0;
          }, createjs.BlurFilter = createjs.promote(o, "Filter");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.Filter_constructor(), this.alphaMap = t, this._alphaMap = null, this._mapData = null, this._mapTexture = null, this.FRAG_SHADER_BODY = "uniform sampler2D uAlphaSampler;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);vec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);gl_FragColor = vec4(color.rgb, color.a * (alphaMap.r * ceil(alphaMap.a)));}";
          }
          var n = createjs.extend(o, createjs.Filter);
          n.shaderParamSetup = function(t, e, i) {
            this._mapTexture || (this._mapTexture = t.createTexture()), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, this._mapTexture), e.setTextureParams(t), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.alphaMap), t.uniform1i(t.getUniformLocation(i, "uAlphaSampler"), 1);
          }, n.clone = function() {
            var t = new o(this.alphaMap);
            return t._alphaMap = this._alphaMap, t._mapData = this._mapData, t;
          }, n.toString = function() {
            return "[AlphaMapFilter]";
          }, n._applyFilter = function(t) {
            if (!this.alphaMap) return !0;
            if (!this._prepAlphaMap()) return !1;
            for (var e = t.data, i = this._mapData, r = 0, a = e.length; r < a; r += 4) e[r + 3] = i[r] || 0;
            return !0;
          }, n._prepAlphaMap = function() {
            if (!this.alphaMap) return !1;
            if (this.alphaMap == this._alphaMap && this._mapData) return !0;
            this._mapData = null;
            var t, e = this._alphaMap = this.alphaMap, i = e;
            e instanceof HTMLCanvasElement ? t = i.getContext("2d") : (i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), i.width = e.width, i.height = e.height, t = i.getContext("2d"), t.drawImage(e, 0, 0));
            try {
              var r = t.getImageData(0, 0, e.width, e.height);
            } catch {
              return !1;
            }
            return this._mapData = r.data, !0;
          }, createjs.AlphaMapFilter = createjs.promote(o, "Filter");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.Filter_constructor(), this.mask = t, this.usesContext = !0, this.FRAG_SHADER_BODY = "uniform sampler2D uAlphaSampler;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);vec4 alphaMap = texture2D(uAlphaSampler, vTextureCoord);gl_FragColor = vec4(color.rgb, color.a * alphaMap.a);}";
          }
          var n = createjs.extend(o, createjs.Filter);
          n.shaderParamSetup = function(t, e, i) {
            this._mapTexture || (this._mapTexture = t.createTexture()), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, this._mapTexture), e.setTextureParams(t), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.mask), t.uniform1i(t.getUniformLocation(i, "uAlphaSampler"), 1);
          }, n.applyFilter = function(t, e, i, r, a, h, l, c) {
            return !this.mask || (h = h || t, l == null && (l = e), c == null && (c = i), h.save(), t == h && (h.globalCompositeOperation = "destination-in", h.drawImage(this.mask, l, c), h.restore(), !0));
          }, n.clone = function() {
            return new o(this.mask);
          }, n.toString = function() {
            return "[AlphaMaskFilter]";
          }, createjs.AlphaMaskFilter = createjs.promote(o, "Filter");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i, r, a, h, l, c) {
            this.Filter_constructor(), this.redMultiplier = t ?? 1, this.greenMultiplier = e ?? 1, this.blueMultiplier = i ?? 1, this.alphaMultiplier = r ?? 1, this.redOffset = a || 0, this.greenOffset = h || 0, this.blueOffset = l || 0, this.alphaOffset = c || 0, this.FRAG_SHADER_BODY = "uniform vec4 uColorMultiplier;uniform vec4 uColorOffset;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);gl_FragColor = (color * uColorMultiplier) + uColorOffset;}";
          }
          var n = createjs.extend(o, createjs.Filter);
          n.shaderParamSetup = function(t, e, i) {
            t.uniform4f(t.getUniformLocation(i, "uColorMultiplier"), this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier), t.uniform4f(t.getUniformLocation(i, "uColorOffset"), this.redOffset / 255, this.greenOffset / 255, this.blueOffset / 255, this.alphaOffset / 255);
          }, n.toString = function() {
            return "[ColorFilter]";
          }, n.clone = function() {
            return new o(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
          }, n._applyFilter = function(t) {
            for (var e = t.data, i = e.length, r = 0; r < i; r += 4) e[r] = e[r] * this.redMultiplier + this.redOffset, e[r + 1] = e[r + 1] * this.greenMultiplier + this.greenOffset, e[r + 2] = e[r + 2] * this.blueMultiplier + this.blueOffset, e[r + 3] = e[r + 3] * this.alphaMultiplier + this.alphaOffset;
            return !0;
          }, createjs.ColorFilter = createjs.promote(o, "Filter");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i, r) {
            this.setColor(t, e, i, r);
          }
          var n = o.prototype;
          o.DELTA_INDEX = [0, 0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1, 0.11, 0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.2, 0.21, 0.22, 0.24, 0.25, 0.27, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62, 0.65, 0.68, 0.71, 0.74, 0.77, 0.8, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], o.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], o.LENGTH = o.IDENTITY_MATRIX.length, n.setColor = function(t, e, i, r) {
            return this.reset().adjustColor(t, e, i, r);
          }, n.reset = function() {
            return this.copy(o.IDENTITY_MATRIX);
          }, n.adjustColor = function(t, e, i, r) {
            return this.adjustHue(r), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i);
          }, n.adjustBrightness = function(t) {
            return t == 0 || isNaN(t) ? this : (t = this._cleanValue(t, 255), this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this);
          }, n.adjustContrast = function(t) {
            if (t == 0 || isNaN(t)) return this;
            t = this._cleanValue(t, 100);
            var e;
            return t < 0 ? e = 127 + t / 100 * 127 : (e = t % 1, e = e == 0 ? o.DELTA_INDEX[t] : o.DELTA_INDEX[t << 0] * (1 - e) + o.DELTA_INDEX[1 + (t << 0)] * e, e = 127 * e + 127), this._multiplyMatrix([e / 127, 0, 0, 0, 0.5 * (127 - e), 0, e / 127, 0, 0, 0.5 * (127 - e), 0, 0, e / 127, 0, 0.5 * (127 - e), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this;
          }, n.adjustSaturation = function(t) {
            if (t == 0 || isNaN(t)) return this;
            t = this._cleanValue(t, 100);
            var e = 1 + (t > 0 ? 3 * t / 100 : t / 100);
            return this._multiplyMatrix([0.3086 * (1 - e) + e, 0.6094 * (1 - e), 0.082 * (1 - e), 0, 0, 0.3086 * (1 - e), 0.6094 * (1 - e) + e, 0.082 * (1 - e), 0, 0, 0.3086 * (1 - e), 0.6094 * (1 - e), 0.082 * (1 - e) + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this;
          }, n.adjustHue = function(t) {
            if (t == 0 || isNaN(t)) return this;
            t = this._cleanValue(t, 180) / 180 * Math.PI;
            var e = Math.cos(t), i = Math.sin(t);
            return this._multiplyMatrix([0.213 + 0.787 * e + -0.213 * i, 0.715 + -0.715 * e + -0.715 * i, 0.072 + -0.072 * e + 0.928 * i, 0, 0, 0.213 + -0.213 * e + 0.143 * i, 0.715 + e * (1 - 0.715) + 0.14 * i, 0.072 + -0.072 * e + -0.283 * i, 0, 0, 0.213 + -0.213 * e + -0.787 * i, 0.715 + -0.715 * e + 0.715 * i, 0.072 + 0.928 * e + 0.072 * i, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this;
          }, n.concat = function(t) {
            return t = this._fixMatrix(t), t.length != o.LENGTH ? this : (this._multiplyMatrix(t), this);
          }, n.clone = function() {
            return new o().copy(this);
          }, n.toArray = function() {
            for (var t = [], e = 0, i = o.LENGTH; e < i; e++) t[e] = this[e];
            return t;
          }, n.copy = function(t) {
            for (var e = o.LENGTH, i = 0; i < e; i++) this[i] = t[i];
            return this;
          }, n.toString = function() {
            return "[ColorMatrix]";
          }, n._multiplyMatrix = function(t) {
            var e, i, r, a = [];
            for (e = 0; e < 5; e++) {
              for (i = 0; i < 5; i++) a[i] = this[i + 5 * e];
              for (i = 0; i < 5; i++) {
                var h = 0;
                for (r = 0; r < 5; r++) h += t[i + 5 * r] * a[r];
                this[i + 5 * e] = h;
              }
            }
          }, n._cleanValue = function(t, e) {
            return Math.min(e, Math.max(-e, t));
          }, n._fixMatrix = function(t) {
            return t instanceof o && (t = t.toArray()), t.length < o.LENGTH ? t = t.slice(0, t.length).concat(o.IDENTITY_MATRIX.slice(t.length, o.LENGTH)) : t.length > o.LENGTH && (t = t.slice(0, o.LENGTH)), t;
          }, createjs.ColorMatrix = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.Filter_constructor(), this.matrix = t, this.FRAG_SHADER_BODY = "uniform mat4 uColorMatrix;uniform vec4 uColorMatrixOffset;void main(void) {vec4 color = texture2D(uSampler, vRenderCoord);mat4 m = uColorMatrix;vec4 newColor = vec4(0,0,0,0);newColor.r = color.r*m[0][0] + color.g*m[0][1] + color.b*m[0][2] + color.a*m[0][3];newColor.g = color.r*m[1][0] + color.g*m[1][1] + color.b*m[1][2] + color.a*m[1][3];newColor.b = color.r*m[2][0] + color.g*m[2][1] + color.b*m[2][2] + color.a*m[2][3];newColor.a = color.r*m[3][0] + color.g*m[3][1] + color.b*m[3][2] + color.a*m[3][3];gl_FragColor = newColor + uColorMatrixOffset;}";
          }
          var n = createjs.extend(o, createjs.Filter);
          n.shaderParamSetup = function(t, e, i) {
            var r = this.matrix, a = new Float32Array([r[0], r[1], r[2], r[3], r[5], r[6], r[7], r[8], r[10], r[11], r[12], r[13], r[15], r[16], r[17], r[18]]);
            t.uniformMatrix4fv(t.getUniformLocation(i, "uColorMatrix"), !1, a), t.uniform4f(t.getUniformLocation(i, "uColorMatrixOffset"), r[4] / 255, r[9] / 255, r[14] / 255, r[19] / 255);
          }, n.toString = function() {
            return "[ColorMatrixFilter]";
          }, n.clone = function() {
            return new o(this.matrix);
          }, n._applyFilter = function(t) {
            for (var e, i, r, a, h = t.data, l = h.length, c = this.matrix, u = c[0], d = c[1], g = c[2], v = c[3], m = c[4], T = c[5], b = c[6], x = c[7], S = c[8], E = c[9], w = c[10], L = c[11], R = c[12], P = c[13], O = c[14], H = c[15], I = c[16], U = c[17], N = c[18], A = c[19], W = 0; W < l; W += 4) e = h[W], i = h[W + 1], r = h[W + 2], a = h[W + 3], h[W] = e * u + i * d + r * g + a * v + m, h[W + 1] = e * T + i * b + r * x + a * S + E, h[W + 2] = e * w + i * L + r * R + a * P + O, h[W + 3] = e * H + i * I + r * U + a * N + A;
            return !0;
          }, createjs.ColorMatrixFilter = createjs.promote(o, "Filter");
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            throw "Touch cannot be instantiated";
          }
          o.isSupported = function() {
            return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0);
          }, o.enable = function(n, t, e) {
            return !!(n && n.canvas && o.isSupported()) && (!!n.__touch || (n.__touch = { pointers: {}, multitouch: !t, preventDefault: !e, count: 0 }, "ontouchstart" in window ? o._IOS_enable(n) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && o._IE_enable(n), !0));
          }, o.disable = function(n) {
            n && ("ontouchstart" in window ? o._IOS_disable(n) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && o._IE_disable(n), delete n.__touch);
          }, o._IOS_enable = function(n) {
            var t = n.canvas, e = n.__touch.f = function(i) {
              o._IOS_handleEvent(n, i);
            };
            t.addEventListener("touchstart", e, !1), t.addEventListener("touchmove", e, !1), t.addEventListener("touchend", e, !1), t.addEventListener("touchcancel", e, !1);
          }, o._IOS_disable = function(n) {
            var t = n.canvas;
            if (t) {
              var e = n.__touch.f;
              t.removeEventListener("touchstart", e, !1), t.removeEventListener("touchmove", e, !1), t.removeEventListener("touchend", e, !1), t.removeEventListener("touchcancel", e, !1);
            }
          }, o._IOS_handleEvent = function(n, t) {
            if (n) {
              n.__touch.preventDefault && t.preventDefault && t.preventDefault();
              for (var e = t.changedTouches, i = t.type, r = 0, a = e.length; r < a; r++) {
                var h = e[r], l = h.identifier;
                h.target == n.canvas && (i == "touchstart" ? this._handleStart(n, l, t, h.pageX, h.pageY) : i == "touchmove" ? this._handleMove(n, l, t, h.pageX, h.pageY) : i != "touchend" && i != "touchcancel" || this._handleEnd(n, l, t));
              }
            }
          }, o._IE_enable = function(n) {
            var t = n.canvas, e = n.__touch.f = function(i) {
              o._IE_handleEvent(n, i);
            };
            window.navigator.pointerEnabled === void 0 ? (t.addEventListener("MSPointerDown", e, !1), window.addEventListener("MSPointerMove", e, !1), window.addEventListener("MSPointerUp", e, !1), window.addEventListener("MSPointerCancel", e, !1), n.__touch.preventDefault && (t.style.msTouchAction = "none")) : (t.addEventListener("pointerdown", e, !1), window.addEventListener("pointermove", e, !1), window.addEventListener("pointerup", e, !1), window.addEventListener("pointercancel", e, !1), n.__touch.preventDefault && (t.style.touchAction = "none")), n.__touch.activeIDs = {};
          }, o._IE_disable = function(n) {
            var t = n.__touch.f;
            window.navigator.pointerEnabled === void 0 ? (window.removeEventListener("MSPointerMove", t, !1), window.removeEventListener("MSPointerUp", t, !1), window.removeEventListener("MSPointerCancel", t, !1), n.canvas && n.canvas.removeEventListener("MSPointerDown", t, !1)) : (window.removeEventListener("pointermove", t, !1), window.removeEventListener("pointerup", t, !1), window.removeEventListener("pointercancel", t, !1), n.canvas && n.canvas.removeEventListener("pointerdown", t, !1));
          }, o._IE_handleEvent = function(n, t) {
            if (n) {
              n.__touch.preventDefault && t.preventDefault && t.preventDefault();
              var e = t.type, i = t.pointerId, r = n.__touch.activeIDs;
              if (e == "MSPointerDown" || e == "pointerdown") {
                if (t.srcElement != n.canvas) return;
                r[i] = !0, this._handleStart(n, i, t, t.pageX, t.pageY);
              } else r[i] && (e == "MSPointerMove" || e == "pointermove" ? this._handleMove(n, i, t, t.pageX, t.pageY) : e != "MSPointerUp" && e != "MSPointerCancel" && e != "pointerup" && e != "pointercancel" || (delete r[i], this._handleEnd(n, i, t)));
            }
          }, o._handleStart = function(n, t, e, i, r) {
            var a = n.__touch;
            if (a.multitouch || !a.count) {
              var h = a.pointers;
              h[t] || (h[t] = !0, a.count++, n._handlePointerDown(t, e, i, r));
            }
          }, o._handleMove = function(n, t, e, i, r) {
            n.__touch.pointers[t] && n._handlePointerMove(t, e, i, r);
          }, o._handleEnd = function(n, t, e) {
            var i = n.__touch, r = i.pointers;
            r[t] && (i.count--, n._handlePointerUp(t, e, !0), delete r[t]);
          }, createjs.Touch = o;
        }(), this.createjs = this.createjs || {}, function() {
          var o = createjs.EaselJS = createjs.EaselJS || {};
          o.version = "1.0.0", o.buildDate = "Thu, 14 Sep 2017 19:47:53 GMT";
        }();
      }).call(window);
    }, function(_, y) {
      (function() {
        /*!
        * TweenJS
        * Visit http://createjs.com/ for documentation, updates and examples.
        *
        * Copyright (c) 2010 gskinner.com, inc.
        *
        * Permission is hereby granted, free of charge, to any person
        * obtaining a copy of this software and associated documentation
        * files (the "Software"), to deal in the Software without
        * restriction, including without limitation the rights to use,
        * copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the
        * Software is furnished to do so, subject to the following
        * conditions:
        *
        * The above copyright notice and this permission notice shall be
        * included in all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
        * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
        * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
        * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
        * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
        * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
        * OTHER DEALINGS IN THE SOFTWARE.
        */
        this.createjs = this.createjs || {}, createjs.extend = function(o, n) {
          function t() {
            this.constructor = o;
          }
          return t.prototype = n.prototype, o.prototype = new t();
        }, this.createjs = this.createjs || {}, createjs.promote = function(o, n) {
          var t = o.prototype, e = Object.getPrototypeOf && Object.getPrototypeOf(t) || t.__proto__;
          if (e) {
            t[(n += "_") + "constructor"] = e.constructor;
            for (var i in e) t.hasOwnProperty(i) && typeof e[i] == "function" && (t[n + i] = e[i]);
          }
          return o;
        }, this.createjs = this.createjs || {}, createjs.deprecate = function(o, n) {
          return function() {
            var t = "Deprecated property or method '" + n + "'. See docs for info.";
            return console && (console.warn ? console.warn(t) : console.log(t)), o && o.apply(this, arguments);
          };
        }, this.createjs = this.createjs || {}, function() {
          function o(t, e, i) {
            this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!e, this.cancelable = !!i, this.timeStamp = (/* @__PURE__ */ new Date()).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1;
          }
          var n = o.prototype;
          n.preventDefault = function() {
            this.defaultPrevented = this.cancelable && !0;
          }, n.stopPropagation = function() {
            this.propagationStopped = !0;
          }, n.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0;
          }, n.remove = function() {
            this.removed = !0;
          }, n.clone = function() {
            return new o(this.type, this.bubbles, this.cancelable);
          }, n.set = function(t) {
            for (var e in t) this[e] = t[e];
            return this;
          }, n.toString = function() {
            return "[Event (type=" + this.type + ")]";
          }, createjs.Event = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            this._listeners = null, this._captureListeners = null;
          }
          var n = o.prototype;
          o.initialize = function(t) {
            t.addEventListener = n.addEventListener, t.on = n.on, t.removeEventListener = t.off = n.removeEventListener, t.removeAllEventListeners = n.removeAllEventListeners, t.hasEventListener = n.hasEventListener, t.dispatchEvent = n.dispatchEvent, t._dispatchEvent = n._dispatchEvent, t.willTrigger = n.willTrigger;
          }, n.addEventListener = function(t, e, i) {
            var r;
            r = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var a = r[t];
            return a && this.removeEventListener(t, e, i), a = r[t], a ? a.push(e) : r[t] = [e], e;
          }, n.on = function(t, e, i, r, a, h) {
            return e.handleEvent && (i = i || e, e = e.handleEvent), i = i || this, this.addEventListener(t, function(l) {
              e.call(i, l, a), r && l.remove();
            }, h);
          }, n.removeEventListener = function(t, e, i) {
            var r = i ? this._captureListeners : this._listeners;
            if (r) {
              var a = r[t];
              if (a) {
                for (var h = 0, l = a.length; h < l; h++) if (a[h] == e) {
                  l == 1 ? delete r[t] : a.splice(h, 1);
                  break;
                }
              }
            }
          }, n.off = n.removeEventListener, n.removeAllEventListeners = function(t) {
            t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null;
          }, n.dispatchEvent = function(t, e, i) {
            if (typeof t == "string") {
              var r = this._listeners;
              if (!(e || r && r[t])) return !0;
              t = new createjs.Event(t, e, i);
            } else t.target && t.clone && (t = t.clone());
            try {
              t.target = this;
            } catch {
            }
            if (t.bubbles && this.parent) {
              for (var a = this, h = [a]; a.parent; ) h.push(a = a.parent);
              var l, c = h.length;
              for (l = c - 1; l >= 0 && !t.propagationStopped; l--) h[l]._dispatchEvent(t, 1 + (l == 0));
              for (l = 1; l < c && !t.propagationStopped; l++) h[l]._dispatchEvent(t, 3);
            } else this._dispatchEvent(t, 2);
            return !t.defaultPrevented;
          }, n.hasEventListener = function(t) {
            var e = this._listeners, i = this._captureListeners;
            return !!(e && e[t] || i && i[t]);
          }, n.willTrigger = function(t) {
            for (var e = this; e; ) {
              if (e.hasEventListener(t)) return !0;
              e = e.parent;
            }
            return !1;
          }, n.toString = function() {
            return "[EventDispatcher]";
          }, n._dispatchEvent = function(t, e) {
            var i, r, a = e <= 2 ? this._captureListeners : this._listeners;
            if (t && a && (r = a[t.type]) && (i = r.length)) {
              try {
                t.currentTarget = this;
              } catch {
              }
              try {
                t.eventPhase = 0 | e;
              } catch {
              }
              t.removed = !1, r = r.slice();
              for (var h = 0; h < i && !t.immediatePropagationStopped; h++) {
                var l = r[h];
                l.handleEvent ? l.handleEvent(t) : l(t), t.removed && (this.off(t.type, l, e == 1), t.removed = !1);
              }
            }
            e === 2 && this._dispatchEvent(t, 2.1);
          }, createjs.EventDispatcher = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            throw "Ticker cannot be instantiated.";
          }
          o.RAF_SYNCHED = "synched", o.RAF = "raf", o.TIMEOUT = "timeout", o.timingMode = null, o.maxDelta = 0, o.paused = !1, o.removeEventListener = null, o.removeAllEventListeners = null, o.dispatchEvent = null, o.hasEventListener = null, o._listeners = null, createjs.EventDispatcher.initialize(o), o._addEventListener = o.addEventListener, o.addEventListener = function() {
            return !o._inited && o.init(), o._addEventListener.apply(o, arguments);
          }, o._inited = !1, o._startTime = 0, o._pausedTime = 0, o._ticks = 0, o._pausedTicks = 0, o._interval = 50, o._lastTime = 0, o._times = null, o._tickTimes = null, o._timerId = null, o._raf = !0, o._setInterval = function(e) {
            o._interval = e, o._inited && o._setupTick();
          }, o.setInterval = createjs.deprecate(o._setInterval, "Ticker.setInterval"), o._getInterval = function() {
            return o._interval;
          }, o.getInterval = createjs.deprecate(o._getInterval, "Ticker.getInterval"), o._setFPS = function(e) {
            o._setInterval(1e3 / e);
          }, o.setFPS = createjs.deprecate(o._setFPS, "Ticker.setFPS"), o._getFPS = function() {
            return 1e3 / o._interval;
          }, o.getFPS = createjs.deprecate(o._getFPS, "Ticker.getFPS");
          try {
            Object.defineProperties(o, { interval: { get: o._getInterval, set: o._setInterval }, framerate: { get: o._getFPS, set: o._setFPS } });
          } catch (e) {
            console.log(e);
          }
          o.init = function() {
            o._inited || (o._inited = !0, o._times = [], o._tickTimes = [], o._startTime = o._getTime(), o._times.push(o._lastTime = 0), o.interval = o._interval);
          }, o.reset = function() {
            if (o._raf) {
              var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
              e && e(o._timerId);
            } else clearTimeout(o._timerId);
            o.removeAllEventListeners("tick"), o._timerId = o._times = o._tickTimes = null, o._startTime = o._lastTime = o._ticks = o._pausedTime = 0, o._inited = !1;
          }, o.getMeasuredTickTime = function(e) {
            var i = 0, r = o._tickTimes;
            if (!r || r.length < 1) return -1;
            e = Math.min(r.length, e || 0 | o._getFPS());
            for (var a = 0; a < e; a++) i += r[a];
            return i / e;
          }, o.getMeasuredFPS = function(e) {
            var i = o._times;
            return !i || i.length < 2 ? -1 : (e = Math.min(i.length - 1, e || 0 | o._getFPS()), 1e3 / ((i[0] - i[e]) / e));
          }, o.getTime = function(e) {
            return o._startTime ? o._getTime() - (e ? o._pausedTime : 0) : -1;
          }, o.getEventTime = function(e) {
            return o._startTime ? (o._lastTime || o._startTime) - (e ? o._pausedTime : 0) : -1;
          }, o.getTicks = function(e) {
            return o._ticks - (e ? o._pausedTicks : 0);
          }, o._handleSynch = function() {
            o._timerId = null, o._setupTick(), o._getTime() - o._lastTime >= 0.97 * (o._interval - 1) && o._tick();
          }, o._handleRAF = function() {
            o._timerId = null, o._setupTick(), o._tick();
          }, o._handleTimeout = function() {
            o._timerId = null, o._setupTick(), o._tick();
          }, o._setupTick = function() {
            if (o._timerId == null) {
              var e = o.timingMode;
              if (e == o.RAF_SYNCHED || e == o.RAF) {
                var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                if (i) return o._timerId = i(e == o.RAF ? o._handleRAF : o._handleSynch), void (o._raf = !0);
              }
              o._raf = !1, o._timerId = setTimeout(o._handleTimeout, o._interval);
            }
          }, o._tick = function() {
            var e = o.paused, i = o._getTime(), r = i - o._lastTime;
            if (o._lastTime = i, o._ticks++, e && (o._pausedTicks++, o._pausedTime += r), o.hasEventListener("tick")) {
              var a = new createjs.Event("tick"), h = o.maxDelta;
              a.delta = h && r > h ? h : r, a.paused = e, a.time = i, a.runTime = i - o._pausedTime, o.dispatchEvent(a);
            }
            for (o._tickTimes.unshift(o._getTime() - i); o._tickTimes.length > 100; ) o._tickTimes.pop();
            for (o._times.unshift(i); o._times.length > 100; ) o._times.pop();
          };
          var n = window, t = n.performance.now || n.performance.mozNow || n.performance.msNow || n.performance.oNow || n.performance.webkitNow;
          o._getTime = function() {
            return (t && t.call(n.performance) || (/* @__PURE__ */ new Date()).getTime()) - o._startTime;
          }, createjs.Ticker = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.EventDispatcher_constructor(), this.ignoreGlobalPause = !1, this.loop = 0, this.useTicks = !1, this.reversed = !1, this.bounce = !1, this.timeScale = 1, this.duration = 0, this.position = 0, this.rawPosition = -1, this._paused = !0, this._next = null, this._prev = null, this._parent = null, this._labels = null, this._labelList = null, t && (this.useTicks = !!t.useTicks, this.ignoreGlobalPause = !!t.ignoreGlobalPause, this.loop = t.loop === !0 ? -1 : t.loop || 0, this.reversed = !!t.reversed, this.bounce = !!t.bounce, this.timeScale = t.timeScale || 1, t.onChange && this.addEventListener("change", t.onChange), t.onComplete && this.addEventListener("complete", t.onComplete));
          }
          var n = createjs.extend(o, createjs.EventDispatcher);
          n._setPaused = function(t) {
            return createjs.Tween._register(this, t), this;
          }, n.setPaused = createjs.deprecate(n._setPaused, "AbstractTween.setPaused"), n._getPaused = function() {
            return this._paused;
          }, n.getPaused = createjs.deprecate(n._getPaused, "AbstactTween.getPaused"), n._getCurrentLabel = function(t) {
            var e = this.getLabels();
            t == null && (t = this.position);
            for (var i = 0, r = e.length; i < r && !(t < e[i].position); i++) ;
            return i === 0 ? null : e[i - 1].label;
          }, n.getCurrentLabel = createjs.deprecate(n._getCurrentLabel, "AbstractTween.getCurrentLabel");
          try {
            Object.defineProperties(n, { paused: { set: n._setPaused, get: n._getPaused }, currentLabel: { get: n._getCurrentLabel } });
          } catch {
          }
          n.advance = function(t, e) {
            this.setPosition(this.rawPosition + t * this.timeScale, e);
          }, n.setPosition = function(t, e, i, r) {
            var a = this.duration, h = this.loop, l = this.rawPosition, c = 0, u = 0, d = !1;
            if (t < 0 && (t = 0), a === 0) {
              if (d = !0, l !== -1) return d;
            } else {
              if (c = t / a | 0, u = t - c * a, d = h !== -1 && t >= h * a + a, d && (t = (u = a) * (c = h) + a), t === l) return d;
              !this.reversed != !(this.bounce && c % 2) && (u = a - u);
            }
            this.position = u, this.rawPosition = t, this._updatePosition(i, d), d && (this.paused = !0), r && r(this), e || this._runActions(l, t, i, !i && l === -1), this.dispatchEvent("change"), d && this.dispatchEvent("complete");
          }, n.calculatePosition = function(t) {
            var e = this.duration, i = this.loop, r = 0, a = 0;
            return e === 0 ? 0 : (i !== -1 && t >= i * e + e ? (a = e, r = i) : t < 0 ? a = 0 : (r = t / e | 0, a = t - r * e), !this.reversed != !(this.bounce && r % 2) ? e - a : a);
          }, n.getLabels = function() {
            var t = this._labelList;
            if (!t) {
              t = this._labelList = [];
              var e = this._labels;
              for (var i in e) t.push({ label: i, position: e[i] });
              t.sort(function(r, a) {
                return r.position - a.position;
              });
            }
            return t;
          }, n.setLabels = function(t) {
            this._labels = t, this._labelList = null;
          }, n.addLabel = function(t, e) {
            this._labels || (this._labels = {}), this._labels[t] = e;
            var i = this._labelList;
            if (i) {
              for (var r = 0, a = i.length; r < a && !(e < i[r].position); r++) ;
              i.splice(r, 0, { label: t, position: e });
            }
          }, n.gotoAndPlay = function(t) {
            this.paused = !1, this._goto(t);
          }, n.gotoAndStop = function(t) {
            this.paused = !0, this._goto(t);
          }, n.resolve = function(t) {
            var e = Number(t);
            return isNaN(e) && (e = this._labels && this._labels[t]), e;
          }, n.toString = function() {
            return "[AbstractTween]";
          }, n.clone = function() {
            throw "AbstractTween can not be cloned.";
          }, n._init = function(t) {
            t && t.paused || (this.paused = !1), t && t.position != null && this.setPosition(t.position);
          }, n._updatePosition = function(t, e) {
          }, n._goto = function(t) {
            var e = this.resolve(t);
            e != null && this.setPosition(e, !1, !0);
          }, n._runActions = function(t, e, i, r) {
            if (this._actionHead || this.tweens) {
              var a, h, l, c, u = this.duration, d = this.reversed, g = this.bounce, v = this.loop;
              if (u === 0 ? (a = h = l = c = 0, d = g = !1) : (a = t / u | 0, h = e / u | 0, l = t - a * u, c = e - h * u), v !== -1 && (h > v && (c = u, h = v), a > v && (l = u, a = v)), i) return this._runActionsRange(c, c, i, r);
              if (a !== h || l !== c || i || r) {
                a === -1 && (a = l = 0);
                var m = t <= e, T = a;
                do {
                  var b = !d != !(g && T % 2), x = T === a ? l : m ? 0 : u, S = T === h ? c : m ? u : 0;
                  if (b && (x = u - x, S = u - S), !(g && T !== a && x === S)) {
                    if (this._runActionsRange(x, S, i, r || T !== a && !g)) return !0;
                  }
                  r = !1;
                } while (m && ++T <= h || !m && --T >= h);
              }
            }
          }, n._runActionsRange = function(t, e, i, r) {
          }, createjs.AbstractTween = createjs.promote(o, "EventDispatcher");
        }(), this.createjs = this.createjs || {}, function() {
          function o(i, r) {
            this.AbstractTween_constructor(r), this.pluginData = null, this.target = i, this.passive = !1, this._stepHead = new n(null, 0, 0, {}, null, !0), this._stepTail = this._stepHead, this._stepPosition = 0, this._actionHead = null, this._actionTail = null, this._plugins = null, this._pluginIds = null, this._injected = null, r && (this.pluginData = r.pluginData, r.override && o.removeTweens(i)), this.pluginData || (this.pluginData = {}), this._init(r);
          }
          function n(i, r, a, h, l, c) {
            this.next = null, this.prev = i, this.t = r, this.d = a, this.props = h, this.ease = l, this.passive = c, this.index = i ? i.index + 1 : 0;
          }
          function t(i, r, a, h, l) {
            this.next = null, this.prev = i, this.t = r, this.d = 0, this.scope = a, this.funct = h, this.params = l;
          }
          var e = createjs.extend(o, createjs.AbstractTween);
          o.IGNORE = {}, o._tweens = [], o._plugins = null, o._tweenHead = null, o._tweenTail = null, o.get = function(i, r) {
            return new o(i, r);
          }, o.tick = function(i, r) {
            for (var a = o._tweenHead; a; ) {
              var h = a._next;
              r && !a.ignoreGlobalPause || a._paused || a.advance(a.useTicks ? 1 : i), a = h;
            }
          }, o.handleEvent = function(i) {
            i.type === "tick" && this.tick(i.delta, i.paused);
          }, o.removeTweens = function(i) {
            if (i.tweenjs_count) {
              for (var r = o._tweenHead; r; ) {
                var a = r._next;
                r.target === i && o._register(r, !0), r = a;
              }
              i.tweenjs_count = 0;
            }
          }, o.removeAllTweens = function() {
            for (var i = o._tweenHead; i; ) {
              var r = i._next;
              i._paused = !0, i.target && (i.target.tweenjs_count = 0), i._next = i._prev = null, i = r;
            }
            o._tweenHead = o._tweenTail = null;
          }, o.hasActiveTweens = function(i) {
            return i ? !!i.tweenjs_count : !!o._tweenHead;
          }, o._installPlugin = function(i) {
            for (var r = i.priority = i.priority || 0, a = o._plugins = o._plugins || [], h = 0, l = a.length; h < l && !(r < a[h].priority); h++) ;
            a.splice(h, 0, i);
          }, o._register = function(i, r) {
            var a = i.target;
            if (!r && i._paused) {
              a && (a.tweenjs_count = a.tweenjs_count ? a.tweenjs_count + 1 : 1);
              var h = o._tweenTail;
              h ? (o._tweenTail = h._next = i, i._prev = h) : o._tweenHead = o._tweenTail = i, !o._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", o), o._inited = !0);
            } else if (r && !i._paused) {
              a && a.tweenjs_count--;
              var l = i._next, c = i._prev;
              l ? l._prev = c : o._tweenTail = c, c ? c._next = l : o._tweenHead = l, i._next = i._prev = null;
            }
            i._paused = r;
          }, e.wait = function(i, r) {
            return i > 0 && this._addStep(+i, this._stepTail.props, null, r), this;
          }, e.to = function(i, r, a) {
            (r == null || r < 0) && (r = 0);
            var h = this._addStep(+r, null, a);
            return this._appendProps(i, h), this;
          }, e.label = function(i) {
            return this.addLabel(i, this.duration), this;
          }, e.call = function(i, r, a) {
            return this._addAction(a || this.target, i, r || [this]);
          }, e.set = function(i, r) {
            return this._addAction(r || this.target, this._set, [i]);
          }, e.play = function(i) {
            return this._addAction(i || this, this._set, [{ paused: !1 }]);
          }, e.pause = function(i) {
            return this._addAction(i || this, this._set, [{ paused: !0 }]);
          }, e.w = e.wait, e.t = e.to, e.c = e.call, e.s = e.set, e.toString = function() {
            return "[Tween]";
          }, e.clone = function() {
            throw "Tween can not be cloned.";
          }, e._addPlugin = function(i) {
            var r = this._pluginIds || (this._pluginIds = {}), a = i.ID;
            if (a && !r[a]) {
              r[a] = !0;
              for (var h = this._plugins || (this._plugins = []), l = i.priority || 0, c = 0, u = h.length; c < u; c++) if (l < h[c].priority) return void h.splice(c, 0, i);
              h.push(i);
            }
          }, e._updatePosition = function(i, r) {
            var a = this._stepHead.next, h = this.position, l = this.duration;
            if (this.target && a) {
              for (var c = a.next; c && c.t <= h; ) a = a.next, c = a.next;
              var u = r ? l === 0 ? 1 : h / l : (h - a.t) / a.d;
              this._updateTargetProps(a, u, r);
            }
            this._stepPosition = a ? h - a.t : 0;
          }, e._updateTargetProps = function(i, r, a) {
            if (!(this.passive = !!i.passive)) {
              var h, l, c, u, d = i.prev.props, g = i.props;
              (u = i.ease) && (r = u(r, 0, 1, 1));
              var v = this._plugins;
              t: for (var m in d) {
                if (l = d[m], c = g[m], h = l !== c && typeof l == "number" ? l + (c - l) * r : r >= 1 ? c : l, v) for (var T = 0, b = v.length; T < b; T++) {
                  var x = v[T].change(this, i, m, h, r, a);
                  if (x === o.IGNORE) continue t;
                  x !== void 0 && (h = x);
                }
                this.target[m] = h;
              }
            }
          }, e._runActionsRange = function(i, r, a, h) {
            var l = i > r, c = l ? this._actionTail : this._actionHead, u = r, d = i;
            l && (u = i, d = r);
            for (var g = this.position; c; ) {
              var v = c.t;
              if ((v === r || v > d && v < u || h && v === i) && (c.funct.apply(c.scope, c.params), g !== this.position)) return !0;
              c = l ? c.prev : c.next;
            }
          }, e._appendProps = function(i, r, a) {
            var h, l, c, u, d, g = this._stepHead.props, v = this.target, m = o._plugins, T = r.prev, b = T.props, x = r.props || (r.props = this._cloneProps(b)), S = {};
            for (h in i) if (i.hasOwnProperty(h) && (S[h] = x[h] = i[h], g[h] === void 0)) {
              if (u = void 0, m) {
                for (l = m.length - 1; l >= 0; l--) if (c = m[l].init(this, h, u), c !== void 0 && (u = c), u === o.IGNORE) {
                  delete x[h], delete S[h];
                  break;
                }
              }
              u !== o.IGNORE && (u === void 0 && (u = v[h]), b[h] = u === void 0 ? null : u);
            }
            for (h in S) {
              c = i[h];
              for (var E, w = T; (E = w) && (w = E.prev); ) if (w.props !== E.props) {
                if (w.props[h] !== void 0) break;
                w.props[h] = b[h];
              }
            }
            if (a !== !1 && (m = this._plugins)) for (l = m.length - 1; l >= 0; l--) m[l].step(this, r, S);
            (d = this._injected) && (this._injected = null, this._appendProps(d, r, !1));
          }, e._injectProp = function(i, r) {
            (this._injected || (this._injected = {}))[i] = r;
          }, e._addStep = function(i, r, a, h) {
            var l = new n(this._stepTail, this.duration, i, r, a, h || !1);
            return this.duration += i, this._stepTail = this._stepTail.next = l;
          }, e._addAction = function(i, r, a) {
            var h = new t(this._actionTail, this.duration, i, r, a);
            return this._actionTail ? this._actionTail.next = h : this._actionHead = h, this._actionTail = h, this;
          }, e._set = function(i) {
            for (var r in i) this[r] = i[r];
          }, e._cloneProps = function(i) {
            var r = {};
            for (var a in i) r[a] = i[a];
            return r;
          }, createjs.Tween = createjs.promote(o, "AbstractTween");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            var e, i;
            t instanceof Array || t == null && arguments.length > 1 ? (e = t, i = arguments[1], t = arguments[2]) : t && (e = t.tweens, i = t.labels), this.AbstractTween_constructor(t), this.tweens = [], e && this.addTween.apply(this, e), this.setLabels(i), this._init(t);
          }
          var n = createjs.extend(o, createjs.AbstractTween);
          n.addTween = function(t) {
            t._parent && t._parent.removeTween(t);
            var e = arguments.length;
            if (e > 1) {
              for (var i = 0; i < e; i++) this.addTween(arguments[i]);
              return arguments[e - 1];
            }
            if (e === 0) return null;
            this.tweens.push(t), t._parent = this, t.paused = !0;
            var r = t.duration;
            return t.loop > 0 && (r *= t.loop + 1), r > this.duration && (this.duration = r), this.rawPosition >= 0 && t.setPosition(this.rawPosition), t;
          }, n.removeTween = function(t) {
            var e = arguments.length;
            if (e > 1) {
              for (var i = !0, r = 0; r < e; r++) i = i && this.removeTween(arguments[r]);
              return i;
            }
            if (e === 0) return !0;
            for (var a = this.tweens, r = a.length; r--; ) if (a[r] === t) return a.splice(r, 1), t._parent = null, t.duration >= this.duration && this.updateDuration(), !0;
            return !1;
          }, n.updateDuration = function() {
            this.duration = 0;
            for (var t = 0, e = this.tweens.length; t < e; t++) {
              var i = this.tweens[t], r = i.duration;
              i.loop > 0 && (r *= i.loop + 1), r > this.duration && (this.duration = r);
            }
          }, n.toString = function() {
            return "[Timeline]";
          }, n.clone = function() {
            throw "Timeline can not be cloned.";
          }, n._updatePosition = function(t, e) {
            for (var i = this.position, r = 0, a = this.tweens.length; r < a; r++) this.tweens[r].setPosition(i, !0, t);
          }, n._runActionsRange = function(t, e, i, r) {
            for (var a = this.position, h = 0, l = this.tweens.length; h < l; h++) if (this.tweens[h]._runActions(t, e, i, r), a !== this.position) return !0;
          }, createjs.Timeline = createjs.promote(o, "AbstractTween");
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            throw "Ease cannot be instantiated.";
          }
          o.linear = function(n) {
            return n;
          }, o.none = o.linear, o.get = function(n) {
            return n < -1 ? n = -1 : n > 1 && (n = 1), function(t) {
              return n == 0 ? t : n < 0 ? t * (t * -n + 1 + n) : t * ((2 - t) * n + (1 - n));
            };
          }, o.getPowIn = function(n) {
            return function(t) {
              return Math.pow(t, n);
            };
          }, o.getPowOut = function(n) {
            return function(t) {
              return 1 - Math.pow(1 - t, n);
            };
          }, o.getPowInOut = function(n) {
            return function(t) {
              return (t *= 2) < 1 ? 0.5 * Math.pow(t, n) : 1 - 0.5 * Math.abs(Math.pow(2 - t, n));
            };
          }, o.quadIn = o.getPowIn(2), o.quadOut = o.getPowOut(2), o.quadInOut = o.getPowInOut(2), o.cubicIn = o.getPowIn(3), o.cubicOut = o.getPowOut(3), o.cubicInOut = o.getPowInOut(3), o.quartIn = o.getPowIn(4), o.quartOut = o.getPowOut(4), o.quartInOut = o.getPowInOut(4), o.quintIn = o.getPowIn(5), o.quintOut = o.getPowOut(5), o.quintInOut = o.getPowInOut(5), o.sineIn = function(n) {
            return 1 - Math.cos(n * Math.PI / 2);
          }, o.sineOut = function(n) {
            return Math.sin(n * Math.PI / 2);
          }, o.sineInOut = function(n) {
            return -0.5 * (Math.cos(Math.PI * n) - 1);
          }, o.getBackIn = function(n) {
            return function(t) {
              return t * t * ((n + 1) * t - n);
            };
          }, o.backIn = o.getBackIn(1.7), o.getBackOut = function(n) {
            return function(t) {
              return --t * t * ((n + 1) * t + n) + 1;
            };
          }, o.backOut = o.getBackOut(1.7), o.getBackInOut = function(n) {
            return n *= 1.525, function(t) {
              return (t *= 2) < 1 ? t * t * ((n + 1) * t - n) * 0.5 : 0.5 * ((t -= 2) * t * ((n + 1) * t + n) + 2);
            };
          }, o.backInOut = o.getBackInOut(1.7), o.circIn = function(n) {
            return -(Math.sqrt(1 - n * n) - 1);
          }, o.circOut = function(n) {
            return Math.sqrt(1 - --n * n);
          }, o.circInOut = function(n) {
            return (n *= 2) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
          }, o.bounceIn = function(n) {
            return 1 - o.bounceOut(1 - n);
          }, o.bounceOut = function(n) {
            return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
          }, o.bounceInOut = function(n) {
            return n < 0.5 ? 0.5 * o.bounceIn(2 * n) : 0.5 * o.bounceOut(2 * n - 1) + 0.5;
          }, o.getElasticIn = function(n, t) {
            var e = 2 * Math.PI;
            return function(i) {
              if (i == 0 || i == 1) return i;
              var r = t / e * Math.asin(1 / n);
              return -n * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - r) * e / t);
            };
          }, o.elasticIn = o.getElasticIn(1, 0.3), o.getElasticOut = function(n, t) {
            var e = 2 * Math.PI;
            return function(i) {
              if (i == 0 || i == 1) return i;
              var r = t / e * Math.asin(1 / n);
              return n * Math.pow(2, -10 * i) * Math.sin((i - r) * e / t) + 1;
            };
          }, o.elasticOut = o.getElasticOut(1, 0.3), o.getElasticInOut = function(n, t) {
            var e = 2 * Math.PI;
            return function(i) {
              var r = t / e * Math.asin(1 / n);
              return (i *= 2) < 1 ? n * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - r) * e / t) * -0.5 : n * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - r) * e / t) * 0.5 + 1;
            };
          }, o.elasticInOut = o.getElasticInOut(1, 0.3 * 1.5), createjs.Ease = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            throw "MotionGuidePlugin cannot be instantiated.";
          }
          var n = o;
          n.priority = 0, n.ID = "MotionGuide", n.install = function() {
            return createjs.Tween._installPlugin(o), createjs.Tween.IGNORE;
          }, n.init = function(t, e, i) {
            e == "guide" && t._addPlugin(n);
          }, n.step = function(t, e, i) {
            for (var r in i) if (r === "guide") {
              var a = e.props.guide, h = n._solveGuideData(i.guide, a);
              a.valid = !h;
              var l = a.endData;
              if (t._injectProp("x", l.x), t._injectProp("y", l.y), h || !a.orient) break;
              var c = e.prev.props.rotation === void 0 ? t.target.rotation || 0 : e.prev.props.rotation;
              if (a.startOffsetRot = c - a.startData.rotation, a.orient == "fixed") a.endAbsRot = l.rotation + a.startOffsetRot, a.deltaRotation = 0;
              else {
                var u = i.rotation === void 0 ? t.target.rotation || 0 : i.rotation, d = u - a.endData.rotation - a.startOffsetRot, g = d % 360;
                switch (a.endAbsRot = u, a.orient) {
                  case "auto":
                    a.deltaRotation = d;
                    break;
                  case "cw":
                    a.deltaRotation = (g + 360) % 360 + 360 * Math.abs(d / 360 | 0);
                    break;
                  case "ccw":
                    a.deltaRotation = (g - 360) % 360 + -360 * Math.abs(d / 360 | 0);
                }
              }
              t._injectProp("rotation", a.endAbsRot);
            }
          }, n.change = function(t, e, i, r, a, h) {
            var l = e.props.guide;
            if (l && e.props !== e.prev.props && l !== e.prev.props.guide) return i === "guide" && !l.valid || i == "x" || i == "y" || i === "rotation" && l.orient ? createjs.Tween.IGNORE : void n._ratioToPositionData(a, l, t.target);
          }, n.debug = function(t, e, i) {
            t = t.guide || t;
            var r = n._findPathProblems(t);
            if (r && console.error(`MotionGuidePlugin Error found: 
` + r), !e) return r;
            var a, h = t.path, l = h.length;
            for (e.save(), e.lineCap = "round", e.lineJoin = "miter", e.beginPath(), e.moveTo(h[0], h[1]), a = 2; a < l; a += 4) e.quadraticCurveTo(h[a], h[a + 1], h[a + 2], h[a + 3]);
            e.strokeStyle = "black", e.lineWidth = 4.5, e.stroke(), e.strokeStyle = "white", e.lineWidth = 3, e.stroke(), e.closePath();
            var c = i.length;
            if (i && c) {
              var u = {}, d = {};
              n._solveGuideData(t, u);
              for (var a = 0; a < c; a++) u.orient = "fixed", n._ratioToPositionData(i[a], u, d), e.beginPath(), e.moveTo(d.x, d.y), e.lineTo(d.x + 9 * Math.cos(0.0174533 * d.rotation), d.y + 9 * Math.sin(0.0174533 * d.rotation)), e.strokeStyle = "black", e.lineWidth = 4.5, e.stroke(), e.strokeStyle = "red", e.lineWidth = 3, e.stroke(), e.closePath();
            }
            return e.restore(), r;
          }, n._solveGuideData = function(t, e) {
            var i = void 0;
            if (i = n.debug(t)) return i;
            var r = e.path = t.path;
            e.orient = t.orient, e.subLines = [], e.totalLength = 0, e.startOffsetRot = 0, e.deltaRotation = 0, e.startData = { ratio: 0 }, e.endData = { ratio: 1 }, e.animSpan = 1;
            var a, h, l, c, u, d, g, v, m, T = r.length, b = {};
            for (a = r[0], h = r[1], g = 2; g < T; g += 4) {
              l = r[g], c = r[g + 1], u = r[g + 2], d = r[g + 3];
              var x = { weightings: [], estLength: 0, portion: 0 }, S = a, E = h;
              for (v = 1; v <= 10; v++) {
                n._getParamsForCurve(a, h, l, c, u, d, v / 10, !1, b);
                var w = b.x - S, L = b.y - E;
                m = Math.sqrt(w * w + L * L), x.weightings.push(m), x.estLength += m, S = b.x, E = b.y;
              }
              for (e.totalLength += x.estLength, v = 0; v < 10; v++) m = x.estLength, x.weightings[v] = x.weightings[v] / m;
              e.subLines.push(x), a = u, h = d;
            }
            m = e.totalLength;
            var R = e.subLines.length;
            for (g = 0; g < R; g++) e.subLines[g].portion = e.subLines[g].estLength / m;
            var P = isNaN(t.start) ? 0 : t.start, O = isNaN(t.end) ? 1 : t.end;
            n._ratioToPositionData(P, e, e.startData), n._ratioToPositionData(O, e, e.endData), e.startData.ratio = P, e.endData.ratio = O, e.animSpan = e.endData.ratio - e.startData.ratio;
          }, n._ratioToPositionData = function(t, e, i) {
            var r, a, h, l, c, u = e.subLines, d = 0, g = t * e.animSpan + e.startData.ratio;
            for (a = u.length, r = 0; r < a; r++) {
              if (l = u[r].portion, d + l >= g) {
                c = r;
                break;
              }
              d += l;
            }
            c === void 0 && (c = a - 1, d -= l);
            var v = u[c].weightings, m = l;
            for (a = v.length, r = 0; r < a && (l = v[r] * m, !(d + l >= g)); r++) d += l;
            c = 4 * c + 2, h = r / 10 + (g - d) / l * 0.1;
            var T = e.path;
            return n._getParamsForCurve(T[c - 2], T[c - 1], T[c], T[c + 1], T[c + 2], T[c + 3], h, e.orient, i), e.orient && (t >= 0.99999 && t <= 1.00001 && e.endAbsRot !== void 0 ? i.rotation = e.endAbsRot : i.rotation += e.startOffsetRot + t * e.deltaRotation), i;
          }, n._getParamsForCurve = function(t, e, i, r, a, h, l, c, u) {
            var d = 1 - l;
            u.x = d * d * t + 2 * d * l * i + l * l * a, u.y = d * d * e + 2 * d * l * r + l * l * h, c && (u.rotation = 57.2957795 * Math.atan2((r - e) * d + (h - r) * l, (i - t) * d + (a - i) * l));
          }, n._findPathProblems = function(t) {
            var e = t.path, i = e && e.length || 0;
            if (i < 6 || (i - 2) % 4) {
              var r = "	Cannot parse 'path' array due to invalid number of entries in path. ";
              return r += "There should be an odd number of points, at least 3 points, and 2 entries per point (x & y). ", r += `See 'CanvasRenderingContext2D.quadraticCurveTo' for details as 'path' models a quadratic bezier.

`, r += "Only [ " + i + " ] values found. Expected: " + Math.max(4 * Math.ceil((i - 2) / 4) + 2, 6);
            }
            for (var a = 0; a < i; a++) if (isNaN(e[a])) return "All data in path array must be numeric";
            var h = t.start;
            if (isNaN(h) && h !== void 0) return "'start' out of bounds. Expected 0 to 1, got: " + h;
            var l = t.end;
            if (isNaN(l) && l !== void 0) return "'end' out of bounds. Expected 0 to 1, got: " + l;
            var c = t.orient;
            return c && c != "fixed" && c != "auto" && c != "cw" && c != "ccw" ? 'Invalid orientation value. Expected ["fixed", "auto", "cw", "ccw", undefined], got: ' + c : void 0;
          }, createjs.MotionGuidePlugin = o;
        }(), this.createjs = this.createjs || {}, function() {
          var o = createjs.TweenJS = createjs.TweenJS || {};
          o.version = "1.0.0", o.buildDate = "Thu, 14 Sep 2017 19:47:47 GMT";
        }();
      }).call(window);
    }, function(_, y, o) {
      (function(n, t) {
        var e;
        (function() {
          /*!
          * PreloadJS
          * Visit http://createjs.com/ for documentation, updates and examples.
          *
          * Copyright (c) 2010 gskinner.com, inc.
          *
          * Permission is hereby granted, free of charge, to any person
          * obtaining a copy of this software and associated documentation
          * files (the "Software"), to deal in the Software without
          * restriction, including without limitation the rights to use,
          * copy, modify, merge, publish, distribute, sublicense, and/or sell
          * copies of the Software, and to permit persons to whom the
          * Software is furnished to do so, subject to the following
          * conditions:
          *
          * The above copyright notice and this permission notice shall be
          * included in all copies or substantial portions of the Software.
          *
          * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
          * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
          * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
          * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
          * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
          * OTHER DEALINGS IN THE SOFTWARE.
          */
          this.createjs = this.createjs || {}, function() {
            var i = createjs.PreloadJS = createjs.PreloadJS || {};
            i.version = "1.0.0", i.buildDate = "Thu, 14 Sep 2017 19:47:47 GMT";
          }(), this.createjs = this.createjs || {}, createjs.extend = function(i, r) {
            function a() {
              this.constructor = i;
            }
            return a.prototype = r.prototype, i.prototype = new a();
          }, this.createjs = this.createjs || {}, createjs.promote = function(i, r) {
            var a = i.prototype, h = Object.getPrototypeOf && Object.getPrototypeOf(a) || a.__proto__;
            if (h) {
              a[(r += "_") + "constructor"] = h.constructor;
              for (var l in h) a.hasOwnProperty(l) && typeof h[l] == "function" && (a[r + l] = h[l]);
            }
            return i;
          }, this.createjs = this.createjs || {}, createjs.deprecate = function(i, r) {
            return function() {
              var a = "Deprecated property or method '" + r + "'. See docs for info.";
              return console && (console.warn ? console.warn(a) : console.log(a)), i && i.apply(this, arguments);
            };
          }, this.createjs = this.createjs || {}, function() {
            createjs.proxy = function(i, r) {
              var a = Array.prototype.slice.call(arguments, 2);
              return function() {
                return i.apply(r, Array.prototype.slice.call(arguments, 0).concat(a));
              };
            };
          }(), this.createjs = this.createjs || {}, createjs.indexOf = function(i, r) {
            for (var a = 0, h = i.length; a < h; a++) if (r === i[a]) return a;
            return -1;
          }, this.createjs = this.createjs || {}, function() {
            function i(a, h, l) {
              this.type = a, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!h, this.cancelable = !!l, this.timeStamp = (/* @__PURE__ */ new Date()).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1;
            }
            var r = i.prototype;
            r.preventDefault = function() {
              this.defaultPrevented = this.cancelable && !0;
            }, r.stopPropagation = function() {
              this.propagationStopped = !0;
            }, r.stopImmediatePropagation = function() {
              this.immediatePropagationStopped = this.propagationStopped = !0;
            }, r.remove = function() {
              this.removed = !0;
            }, r.clone = function() {
              return new i(this.type, this.bubbles, this.cancelable);
            }, r.set = function(a) {
              for (var h in a) this[h] = a[h];
              return this;
            }, r.toString = function() {
              return "[Event (type=" + this.type + ")]";
            }, createjs.Event = i;
          }(), this.createjs = this.createjs || {}, function() {
            function i(r, a, h) {
              this.Event_constructor("error"), this.title = r, this.message = a, this.data = h;
            }
            createjs.extend(i, createjs.Event).clone = function() {
              return new createjs.ErrorEvent(this.title, this.message, this.data);
            }, createjs.ErrorEvent = createjs.promote(i, "Event");
          }(), this.createjs = this.createjs || {}, function() {
            function i() {
              this._listeners = null, this._captureListeners = null;
            }
            var r = i.prototype;
            i.initialize = function(a) {
              a.addEventListener = r.addEventListener, a.on = r.on, a.removeEventListener = a.off = r.removeEventListener, a.removeAllEventListeners = r.removeAllEventListeners, a.hasEventListener = r.hasEventListener, a.dispatchEvent = r.dispatchEvent, a._dispatchEvent = r._dispatchEvent, a.willTrigger = r.willTrigger;
            }, r.addEventListener = function(a, h, l) {
              var c;
              c = l ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
              var u = c[a];
              return u && this.removeEventListener(a, h, l), u = c[a], u ? u.push(h) : c[a] = [h], h;
            }, r.on = function(a, h, l, c, u, d) {
              return h.handleEvent && (l = l || h, h = h.handleEvent), l = l || this, this.addEventListener(a, function(g) {
                h.call(l, g, u), c && g.remove();
              }, d);
            }, r.removeEventListener = function(a, h, l) {
              var c = l ? this._captureListeners : this._listeners;
              if (c) {
                var u = c[a];
                if (u) {
                  for (var d = 0, g = u.length; d < g; d++) if (u[d] == h) {
                    g == 1 ? delete c[a] : u.splice(d, 1);
                    break;
                  }
                }
              }
            }, r.off = r.removeEventListener, r.removeAllEventListeners = function(a) {
              a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null;
            }, r.dispatchEvent = function(a, h, l) {
              if (typeof a == "string") {
                var c = this._listeners;
                if (!(h || c && c[a])) return !0;
                a = new createjs.Event(a, h, l);
              } else a.target && a.clone && (a = a.clone());
              try {
                a.target = this;
              } catch {
              }
              if (a.bubbles && this.parent) {
                for (var u = this, d = [u]; u.parent; ) d.push(u = u.parent);
                var g, v = d.length;
                for (g = v - 1; g >= 0 && !a.propagationStopped; g--) d[g]._dispatchEvent(a, 1 + (g == 0));
                for (g = 1; g < v && !a.propagationStopped; g++) d[g]._dispatchEvent(a, 3);
              } else this._dispatchEvent(a, 2);
              return !a.defaultPrevented;
            }, r.hasEventListener = function(a) {
              var h = this._listeners, l = this._captureListeners;
              return !!(h && h[a] || l && l[a]);
            }, r.willTrigger = function(a) {
              for (var h = this; h; ) {
                if (h.hasEventListener(a)) return !0;
                h = h.parent;
              }
              return !1;
            }, r.toString = function() {
              return "[EventDispatcher]";
            }, r._dispatchEvent = function(a, h) {
              var l, c, u = h <= 2 ? this._captureListeners : this._listeners;
              if (a && u && (c = u[a.type]) && (l = c.length)) {
                try {
                  a.currentTarget = this;
                } catch {
                }
                try {
                  a.eventPhase = 0 | h;
                } catch {
                }
                a.removed = !1, c = c.slice();
                for (var d = 0; d < l && !a.immediatePropagationStopped; d++) {
                  var g = c[d];
                  g.handleEvent ? g.handleEvent(a) : g(a), a.removed && (this.off(a.type, g, h == 1), a.removed = !1);
                }
              }
              h === 2 && this._dispatchEvent(a, 2.1);
            }, createjs.EventDispatcher = i;
          }(), this.createjs = this.createjs || {}, function(i) {
            function r(a, h) {
              this.Event_constructor("progress"), this.loaded = a, this.total = h ?? 1, this.progress = h == 0 ? 0 : this.loaded / this.total;
            }
            createjs.extend(r, createjs.Event).clone = function() {
              return new createjs.ProgressEvent(this.loaded, this.total);
            }, createjs.ProgressEvent = createjs.promote(r, "Event");
          }(), (function() {
            function i(m, T) {
              function b(M) {
                if (b[M] !== U) return b[M];
                var B;
                if (M == "bug-string-char-index") B = !1;
                else if (M == "json") B = b("json-stringify") && b("json-parse");
                else {
                  var C, V = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                  if (M == "json-stringify") {
                    var j = T.stringify, G = typeof j == "function" && W;
                    if (G) {
                      (C = function() {
                        return 1;
                      }).toJSON = C;
                      try {
                        G = j(0) === "0" && j(new x()) === "0" && j(new S()) == '""' && j(A) === U && j(U) === U && j() === U && j(C) === "1" && j([C]) == "[1]" && j([U]) == "[null]" && j(null) == "null" && j([U, A, null]) == "[null,null,null]" && j({ a: [C, !0, !1, null, `\0\b
\f\r	`] }) == V && j(null, C) === "1" && j([1, 2], null, 1) == `[
 1,
 2
]` && j(new w(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && j(new w(864e13)) == '"+275760-09-13T00:00:00.000Z"' && j(new w(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && j(new w(-1)) == '"1969-12-31T23:59:59.999Z"';
                      } catch {
                        G = !1;
                      }
                    }
                    B = G;
                  }
                  if (M == "json-parse") {
                    var X = T.parse;
                    if (typeof X == "function") try {
                      if (X("0") === 0 && !X(!1)) {
                        C = X(V);
                        var k = C.a.length == 5 && C.a[0] === 1;
                        if (k) {
                          try {
                            k = !X('"	"');
                          } catch {
                          }
                          if (k) try {
                            k = X("01") !== 1;
                          } catch {
                          }
                          if (k) try {
                            k = X("1.") !== 1;
                          } catch {
                          }
                        }
                      }
                    } catch {
                      k = !1;
                    }
                    B = k;
                  }
                }
                return b[M] = !!B;
              }
              m || (m = l.Object()), T || (T = l.Object());
              var x = m.Number || l.Number, S = m.String || l.String, E = m.Object || l.Object, w = m.Date || l.Date, L = m.SyntaxError || l.SyntaxError, R = m.TypeError || l.TypeError, P = m.Math || l.Math, O = m.JSON || l.JSON;
              typeof O == "object" && O && (T.stringify = O.stringify, T.parse = O.parse);
              var H, I, U, N = E.prototype, A = N.toString, W = new w(-3509827334573292);
              try {
                W = W.getUTCFullYear() == -109252 && W.getUTCMonth() === 0 && W.getUTCDate() === 1 && W.getUTCHours() == 10 && W.getUTCMinutes() == 37 && W.getUTCSeconds() == 6 && W.getUTCMilliseconds() == 708;
              } catch {
              }
              if (!b("json")) {
                var z = b("bug-string-char-index");
                if (!W) var et = P.floor, $ = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], q = function(M, B) {
                  return $[B] + 365 * (M - 1970) + et((M - 1969 + (B = +(B > 1))) / 4) - et((M - 1901 + B) / 100) + et((M - 1601 + B) / 400);
                };
                if ((H = N.hasOwnProperty) || (H = function(M) {
                  var B, C = {};
                  return (C.__proto__ = null, C.__proto__ = { toString: 1 }, C).toString != A ? H = function(V) {
                    var j = this.__proto__, G = V in (this.__proto__ = null, this);
                    return this.__proto__ = j, G;
                  } : (B = C.constructor, H = function(V) {
                    var j = (this.constructor || B).prototype;
                    return V in this && !(V in j && this[V] === j[V]);
                  }), C = null, H.call(this, M);
                }), I = function(M, B) {
                  var C, V, j, G = 0;
                  (C = function() {
                    this.valueOf = 0;
                  }).prototype.valueOf = 0, V = new C();
                  for (j in V) H.call(V, j) && G++;
                  return C = V = null, G ? I = G == 2 ? function(X, k) {
                    var Y, Q = {}, ot = A.call(X) == "[object Function]";
                    for (Y in X) ot && Y == "prototype" || H.call(Q, Y) || !(Q[Y] = 1) || !H.call(X, Y) || k(Y);
                  } : function(X, k) {
                    var Y, Q, ot = A.call(X) == "[object Function]";
                    for (Y in X) ot && Y == "prototype" || !H.call(X, Y) || (Q = Y === "constructor") || k(Y);
                    (Q || H.call(X, Y = "constructor")) && k(Y);
                  } : (V = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], I = function(X, k) {
                    var Y, Q, ot = A.call(X) == "[object Function]", lt = !ot && typeof X.constructor != "function" && a[typeof X.hasOwnProperty] && X.hasOwnProperty || H;
                    for (Y in X) ot && Y == "prototype" || !lt.call(X, Y) || k(Y);
                    for (Q = V.length; Y = V[--Q]; lt.call(X, Y) && k(Y)) ;
                  }), I(M, B);
                }, !b("json-stringify")) {
                  var wt = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" }, nt = function(M, B) {
                    return ("000000" + (B || 0)).slice(-M);
                  }, Z = function(M) {
                    for (var B = '"', C = 0, V = M.length, j = !z || V > 10, G = j && (z ? M.split("") : M); C < V; C++) {
                      var X = M.charCodeAt(C);
                      switch (X) {
                        case 8:
                        case 9:
                        case 10:
                        case 12:
                        case 13:
                        case 34:
                        case 92:
                          B += wt[X];
                          break;
                        default:
                          if (X < 32) {
                            B += "\\u00" + nt(2, X.toString(16));
                            break;
                          }
                          B += j ? G[C] : M.charAt(C);
                      }
                    }
                    return B + '"';
                  }, Mt = function(M, B, C, V, j, G, X) {
                    var k, Y, Q, ot, lt, Dt, Wt, Jt, zt, $t, mt, Qt, Gt, Ot, Kt, Zt;
                    try {
                      k = B[M];
                    } catch {
                    }
                    if (typeof k == "object" && k) if ((Y = A.call(k)) != "[object Date]" || H.call(k, "toJSON")) typeof k.toJSON == "function" && (Y != "[object Number]" && Y != "[object String]" && Y != "[object Array]" || H.call(k, "toJSON")) && (k = k.toJSON(M));
                    else if (k > -1 / 0 && k < 1 / 0) {
                      if (q) {
                        for (lt = et(k / 864e5), Q = et(lt / 365.2425) + 1970 - 1; q(Q + 1, 0) <= lt; Q++) ;
                        for (ot = et((lt - q(Q, 0)) / 30.42); q(Q, ot + 1) <= lt; ot++) ;
                        lt = 1 + lt - q(Q, ot), Dt = (k % 864e5 + 864e5) % 864e5, Wt = et(Dt / 36e5) % 24, Jt = et(Dt / 6e4) % 60, zt = et(Dt / 1e3) % 60, $t = Dt % 1e3;
                      } else Q = k.getUTCFullYear(), ot = k.getUTCMonth(), lt = k.getUTCDate(), Wt = k.getUTCHours(), Jt = k.getUTCMinutes(), zt = k.getUTCSeconds(), $t = k.getUTCMilliseconds();
                      k = (Q <= 0 || Q >= 1e4 ? (Q < 0 ? "-" : "+") + nt(6, Q < 0 ? -Q : Q) : nt(4, Q)) + "-" + nt(2, ot + 1) + "-" + nt(2, lt) + "T" + nt(2, Wt) + ":" + nt(2, Jt) + ":" + nt(2, zt) + "." + nt(3, $t) + "Z";
                    } else k = null;
                    if (C && (k = C.call(B, M, k)), k === null) return "null";
                    if ((Y = A.call(k)) == "[object Boolean]") return "" + k;
                    if (Y == "[object Number]") return k > -1 / 0 && k < 1 / 0 ? "" + k : "null";
                    if (Y == "[object String]") return Z("" + k);
                    if (typeof k == "object") {
                      for (Ot = X.length; Ot--; ) if (X[Ot] === k) throw R();
                      if (X.push(k), mt = [], Kt = G, G += j, Y == "[object Array]") {
                        for (Gt = 0, Ot = k.length; Gt < Ot; Gt++) Qt = Mt(Gt, k, C, V, j, G, X), mt.push(Qt === U ? "null" : Qt);
                        Zt = mt.length ? j ? `[
` + G + mt.join(`,
` + G) + `
` + Kt + "]" : "[" + mt.join(",") + "]" : "[]";
                      } else I(V || k, function(te) {
                        var he = Mt(te, k, C, V, j, G, X);
                        he !== U && mt.push(Z(te) + ":" + (j ? " " : "") + he);
                      }), Zt = mt.length ? j ? `{
` + G + mt.join(`,
` + G) + `
` + Kt + "}" : "{" + mt.join(",") + "}" : "{}";
                      return X.pop(), Zt;
                    }
                  };
                  T.stringify = function(M, B, C) {
                    var V, j, G, X;
                    if (a[typeof B] && B) {
                      if ((X = A.call(B)) == "[object Function]") j = B;
                      else if (X == "[object Array]") {
                        G = {};
                        for (var k, Y = 0, Q = B.length; Y < Q; k = B[Y++], ((X = A.call(k)) == "[object String]" || X == "[object Number]") && (G[k] = 1)) ;
                      }
                    }
                    if (C) if ((X = A.call(C)) == "[object Number]") {
                      if ((C -= C % 1) > 0) for (V = "", C > 10 && (C = 10); V.length < C; V += " ") ;
                    } else X == "[object String]" && (V = C.length <= 10 ? C : C.slice(0, 10));
                    return Mt("", (k = {}, k[""] = M, k), j, G, V, "", []);
                  };
                }
                if (!b("json-parse")) {
                  var D, st, we = S.fromCharCode, Se = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "	", 110: `
`, 102: "\f", 114: "\r" }, rt = function() {
                    throw D = st = null, L();
                  }, bt = function() {
                    for (var M, B, C, V, j, G = st, X = G.length; D < X; ) switch (j = G.charCodeAt(D)) {
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        D++;
                        break;
                      case 123:
                      case 125:
                      case 91:
                      case 93:
                      case 58:
                      case 44:
                        return M = z ? G.charAt(D) : G[D], D++, M;
                      case 34:
                        for (M = "@", D++; D < X; ) if ((j = G.charCodeAt(D)) < 32) rt();
                        else if (j == 92) switch (j = G.charCodeAt(++D)) {
                          case 92:
                          case 34:
                          case 47:
                          case 98:
                          case 116:
                          case 110:
                          case 102:
                          case 114:
                            M += Se[j], D++;
                            break;
                          case 117:
                            for (B = ++D, C = D + 4; D < C; D++) (j = G.charCodeAt(D)) >= 48 && j <= 57 || j >= 97 && j <= 102 || j >= 65 && j <= 70 || rt();
                            M += we("0x" + G.slice(B, D));
                            break;
                          default:
                            rt();
                        }
                        else {
                          if (j == 34) break;
                          for (j = G.charCodeAt(D), B = D; j >= 32 && j != 92 && j != 34; ) j = G.charCodeAt(++D);
                          M += G.slice(B, D);
                        }
                        if (G.charCodeAt(D) == 34) return D++, M;
                        rt();
                      default:
                        if (B = D, j == 45 && (V = !0, j = G.charCodeAt(++D)), j >= 48 && j <= 57) {
                          for (j == 48 && (j = G.charCodeAt(D + 1)) >= 48 && j <= 57 && rt(), V = !1; D < X && (j = G.charCodeAt(D)) >= 48 && j <= 57; D++) ;
                          if (G.charCodeAt(D) == 46) {
                            for (C = ++D; C < X && (j = G.charCodeAt(C)) >= 48 && j <= 57; C++) ;
                            C == D && rt(), D = C;
                          }
                          if ((j = G.charCodeAt(D)) == 101 || j == 69) {
                            for (j = G.charCodeAt(++D), j != 43 && j != 45 || D++, C = D; C < X && (j = G.charCodeAt(C)) >= 48 && j <= 57; C++) ;
                            C == D && rt(), D = C;
                          }
                          return +G.slice(B, D);
                        }
                        if (V && rt(), G.slice(D, D + 4) == "true") return D += 4, !0;
                        if (G.slice(D, D + 5) == "false") return D += 5, !1;
                        if (G.slice(D, D + 4) == "null") return D += 4, null;
                        rt();
                    }
                    return "$";
                  }, Yt = function(M) {
                    var B, C;
                    if (M == "$" && rt(), typeof M == "string") {
                      if ((z ? M.charAt(0) : M[0]) == "@") return M.slice(1);
                      if (M == "[") {
                        for (B = []; (M = bt()) != "]"; C || (C = !0)) C && (M == "," ? (M = bt()) == "]" && rt() : rt()), M == "," && rt(), B.push(Yt(M));
                        return B;
                      }
                      if (M == "{") {
                        for (B = {}; (M = bt()) != "}"; C || (C = !0)) C && (M == "," ? (M = bt()) == "}" && rt() : rt()), M != "," && typeof M == "string" && (z ? M.charAt(0) : M[0]) == "@" && bt() == ":" || rt(), B[M.slice(1)] = Yt(bt());
                        return B;
                      }
                      rt();
                    }
                    return M;
                  }, ae = function(M, B, C) {
                    var V = oe(M, B, C);
                    V === U ? delete M[B] : M[B] = V;
                  }, oe = function(M, B, C) {
                    var V, j = M[B];
                    if (typeof j == "object" && j) if (A.call(j) == "[object Array]") for (V = j.length; V--; ) ae(j, V, C);
                    else I(j, function(G) {
                      ae(j, G, C);
                    });
                    return C.call(M, B, j);
                  };
                  T.parse = function(M, B) {
                    var C, V;
                    return D = 0, st = "" + M, C = Yt(bt()), bt() != "$" && rt(), D = st = null, B && A.call(B) == "[object Function]" ? oe((V = {}, V[""] = C, V), "", B) : C;
                  };
                }
              }
              return T.runInContext = i, T;
            }
            var r = o(6), a = { function: !0, object: !0 }, h = a[typeof y] && y && !y.nodeType && y, l = a[typeof window] && window || this, c = h && a[typeof n] && n && !n.nodeType && typeof t == "object" && t;
            if (!c || c.global !== c && c.window !== c && c.self !== c || (l = c), h && !r) i(l, h);
            else {
              var u = l.JSON, d = l.JSON3, g = !1, v = i(l, l.JSON3 = { noConflict: function() {
                return g || (g = !0, l.JSON = u, l.JSON3 = d, u = d = null), v;
              } });
              l.JSON = { parse: v.parse, stringify: v.stringify };
            }
            r && (e = (function() {
              return v;
            }).call(y, o, y, n)) !== void 0 && (n.exports = e);
          }).call(this), function() {
            var i = {};
            i.a = function() {
              return i.el("a");
            }, i.svg = function() {
              return i.el("svg");
            }, i.object = function() {
              return i.el("object");
            }, i.image = function() {
              return i.el("image");
            }, i.img = function() {
              return i.el("img");
            }, i.style = function() {
              return i.el("style");
            }, i.link = function() {
              return i.el("link");
            }, i.script = function() {
              return i.el("script");
            }, i.audio = function() {
              return i.el("audio");
            }, i.video = function() {
              return i.el("video");
            }, i.text = function(r) {
              return document.createTextNode(r);
            }, i.el = function(r) {
              return document.createElement(r);
            }, createjs.Elements = i;
          }(), function() {
            var i = {};
            i.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, i.RELATIVE_PATT = /^[.\/]*?\//i, i.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, i.parseURI = function(r) {
              var a = { absolute: !1, relative: !1, protocol: null, hostname: null, port: null, pathname: null, search: null, hash: null, host: null };
              if (r == null) return a;
              var h = createjs.Elements.a();
              h.href = r;
              for (var l in a) l in h && (a[l] = h[l]);
              var c = r.indexOf("?");
              c > -1 && (r = r.substr(0, c));
              var u;
              return i.ABSOLUTE_PATT.test(r) ? a.absolute = !0 : i.RELATIVE_PATT.test(r) && (a.relative = !0), (u = r.match(i.EXTENSION_PATT)) && (a.extension = u[1].toLowerCase()), a;
            }, i.formatQueryString = function(r, a) {
              if (r == null) throw new Error("You must specify data.");
              var h = [];
              for (var l in r) h.push(l + "=" + escape(r[l]));
              return a && (h = h.concat(a)), h.join("&");
            }, i.buildURI = function(r, a) {
              if (a == null) return r;
              var h = [], l = r.indexOf("?");
              if (l != -1) {
                var c = r.slice(l + 1);
                h = h.concat(c.split("&"));
              }
              return l != -1 ? r.slice(0, l) + "?" + this.formatQueryString(a, h) : r + "?" + this.formatQueryString(a, h);
            }, i.isCrossDomain = function(r) {
              var a = createjs.Elements.a();
              a.href = r.src;
              var h = createjs.Elements.a();
              return h.href = location.href, a.hostname != "" && (a.port != h.port || a.protocol != h.protocol || a.hostname != h.hostname);
            }, i.isLocal = function(r) {
              var a = createjs.Elements.a();
              return a.href = r.src, a.hostname == "" && a.protocol == "file:";
            }, createjs.URLUtils = i;
          }(), function() {
            var i = { container: null };
            i.appendToHead = function(r) {
              i.getHead().appendChild(r);
            }, i.appendToBody = function(r) {
              if (i.container == null) {
                i.container = document.createElement("div"), i.container.id = "preloadjs-container";
                var a = i.container.style;
                a.visibility = "hidden", a.position = "absolute", a.width = i.container.style.height = "10px", a.overflow = "hidden", a.transform = a.msTransform = a.webkitTransform = a.oTransform = "translate(-10px, -10px)", i.getBody().appendChild(i.container);
              }
              i.container.appendChild(r);
            }, i.getHead = function() {
              return document.head || document.getElementsByTagName("head")[0];
            }, i.getBody = function() {
              return document.body || document.getElementsByTagName("body")[0];
            }, i.removeChild = function(r) {
              r.parent && r.parent.removeChild(r);
            }, i.isImageTag = function(r) {
              return r instanceof HTMLImageElement;
            }, i.isAudioTag = function(r) {
              return !!window.HTMLAudioElement && r instanceof HTMLAudioElement;
            }, i.isVideoTag = function(r) {
              return !!window.HTMLVideoElement && r instanceof HTMLVideoElement;
            }, createjs.DomUtils = i;
          }(), function() {
            var i = {};
            i.parseXML = function(r) {
              var a = null;
              try {
                if (window.DOMParser) {
                  var h = new DOMParser();
                  a = h.parseFromString(r, "text/xml");
                }
              } catch {
              }
              if (!a) try {
                a = new ActiveXObject("Microsoft.XMLDOM"), a.async = !1, a.loadXML(r);
              } catch {
                a = null;
              }
              return a;
            }, i.parseJSON = function(r) {
              if (r == null) return null;
              try {
                return JSON.parse(r);
              } catch (a) {
                throw a;
              }
            }, createjs.DataUtils = i;
          }(), this.createjs = this.createjs || {}, function() {
            var i = {};
            i.BINARY = "binary", i.CSS = "css", i.FONT = "font", i.FONTCSS = "fontcss", i.IMAGE = "image", i.JAVASCRIPT = "javascript", i.JSON = "json", i.JSONP = "jsonp", i.MANIFEST = "manifest", i.SOUND = "sound", i.VIDEO = "video", i.SPRITESHEET = "spritesheet", i.SVG = "svg", i.TEXT = "text", i.XML = "xml", createjs.Types = i;
          }(), this.createjs = this.createjs || {}, function() {
            var i = {};
            i.POST = "POST", i.GET = "GET", createjs.Methods = i;
          }(), this.createjs = this.createjs || {}, function() {
            function i() {
              this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.Methods.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = a.LOAD_TIMEOUT_DEFAULT;
            }
            var r = i.prototype = {}, a = i;
            a.LOAD_TIMEOUT_DEFAULT = 8e3, a.create = function(h) {
              if (typeof h == "string") {
                var l = new i();
                return l.src = h, l;
              }
              if (h instanceof a) return h;
              if (h instanceof Object && h.src) return h.loadTimeout == null && (h.loadTimeout = a.LOAD_TIMEOUT_DEFAULT), h;
              throw new Error("Type not recognized.");
            }, r.set = function(h) {
              for (var l in h) this[l] = h[l];
              return this;
            }, createjs.LoadItem = a;
          }(), function() {
            var i = {};
            i.isBinary = function(r) {
              switch (r) {
                case createjs.Types.IMAGE:
                case createjs.Types.BINARY:
                  return !0;
                default:
                  return !1;
              }
            }, i.isText = function(r) {
              switch (r) {
                case createjs.Types.TEXT:
                case createjs.Types.JSON:
                case createjs.Types.MANIFEST:
                case createjs.Types.XML:
                case createjs.Types.CSS:
                case createjs.Types.SVG:
                case createjs.Types.JAVASCRIPT:
                case createjs.Types.SPRITESHEET:
                  return !0;
                default:
                  return !1;
              }
            }, i.getTypeByExtension = function(r) {
              if (r == null) return createjs.Types.TEXT;
              switch (r.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                  return createjs.Types.IMAGE;
                case "ogg":
                case "mp3":
                case "webm":
                  return createjs.Types.SOUND;
                case "mp4":
                case "webm":
                case "ts":
                  return createjs.Types.VIDEO;
                case "json":
                  return createjs.Types.JSON;
                case "xml":
                  return createjs.Types.XML;
                case "css":
                  return createjs.Types.CSS;
                case "js":
                  return createjs.Types.JAVASCRIPT;
                case "svg":
                  return createjs.Types.SVG;
                default:
                  return createjs.Types.TEXT;
              }
            }, createjs.RequestUtils = i;
          }(), this.createjs = this.createjs || {}, function() {
            function i(h, l, c) {
              this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = c, this.resultFormatter = null, this._item = h ? createjs.LoadItem.create(h) : null, this._preferXHR = l, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null;
            }
            var r = createjs.extend(i, createjs.EventDispatcher), a = i;
            try {
              Object.defineProperties(a, { POST: { get: createjs.deprecate(function() {
                return createjs.Methods.POST;
              }, "AbstractLoader.POST") }, GET: { get: createjs.deprecate(function() {
                return createjs.Methods.GET;
              }, "AbstractLoader.GET") }, BINARY: { get: createjs.deprecate(function() {
                return createjs.Types.BINARY;
              }, "AbstractLoader.BINARY") }, CSS: { get: createjs.deprecate(function() {
                return createjs.Types.CSS;
              }, "AbstractLoader.CSS") }, FONT: { get: createjs.deprecate(function() {
                return createjs.Types.FONT;
              }, "AbstractLoader.FONT") }, FONTCSS: { get: createjs.deprecate(function() {
                return createjs.Types.FONTCSS;
              }, "AbstractLoader.FONTCSS") }, IMAGE: { get: createjs.deprecate(function() {
                return createjs.Types.IMAGE;
              }, "AbstractLoader.IMAGE") }, JAVASCRIPT: { get: createjs.deprecate(function() {
                return createjs.Types.JAVASCRIPT;
              }, "AbstractLoader.JAVASCRIPT") }, JSON: { get: createjs.deprecate(function() {
                return createjs.Types.JSON;
              }, "AbstractLoader.JSON") }, JSONP: { get: createjs.deprecate(function() {
                return createjs.Types.JSONP;
              }, "AbstractLoader.JSONP") }, MANIFEST: { get: createjs.deprecate(function() {
                return createjs.Types.MANIFEST;
              }, "AbstractLoader.MANIFEST") }, SOUND: { get: createjs.deprecate(function() {
                return createjs.Types.SOUND;
              }, "AbstractLoader.SOUND") }, VIDEO: { get: createjs.deprecate(function() {
                return createjs.Types.VIDEO;
              }, "AbstractLoader.VIDEO") }, SPRITESHEET: { get: createjs.deprecate(function() {
                return createjs.Types.SPRITESHEET;
              }, "AbstractLoader.SPRITESHEET") }, SVG: { get: createjs.deprecate(function() {
                return createjs.Types.SVG;
              }, "AbstractLoader.SVG") }, TEXT: { get: createjs.deprecate(function() {
                return createjs.Types.TEXT;
              }, "AbstractLoader.TEXT") }, XML: { get: createjs.deprecate(function() {
                return createjs.Types.XML;
              }, "AbstractLoader.XML") } });
            } catch {
            }
            r.getItem = function() {
              return this._item;
            }, r.getResult = function(h) {
              return h ? this._rawResult : this._result;
            }, r.getTag = function() {
              return this._tag;
            }, r.setTag = function(h) {
              this._tag = h;
            }, r.load = function() {
              this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
              var h = new createjs.Event("initialize");
              h.loader = this._request, this.dispatchEvent(h), this._request.load();
            }, r.cancel = function() {
              this.canceled = !0, this.destroy();
            }, r.destroy = function() {
              this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners();
            }, r.getLoadedItems = function() {
              return this._loadedItems;
            }, r._createRequest = function() {
              this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
            }, r._createTag = function(h) {
              return null;
            }, r._sendLoadStart = function() {
              this._isCanceled() || this.dispatchEvent("loadstart");
            }, r._sendProgress = function(h) {
              if (!this._isCanceled()) {
                var l = null;
                typeof h == "number" ? (this.progress = h, l = new createjs.ProgressEvent(this.progress)) : (l = h, this.progress = h.loaded / h.total, l.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(l);
              }
            }, r._sendComplete = function() {
              if (!this._isCanceled()) {
                this.loaded = !0;
                var h = new createjs.Event("complete");
                h.rawResult = this._rawResult, this._result != null && (h.result = this._result), this.dispatchEvent(h);
              }
            }, r._sendError = function(h) {
              !this._isCanceled() && this.hasEventListener("error") && (h == null && (h = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(h));
            }, r._isCanceled = function() {
              return !(window.createjs != null && !this.canceled);
            }, r.resultFormatter = null, r.handleEvent = function(h) {
              switch (h.type) {
                case "complete":
                  this._rawResult = h.target._response;
                  var l = this.resultFormatter && this.resultFormatter(this);
                  l instanceof Function ? l.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = l || this._rawResult, this._sendComplete());
                  break;
                case "progress":
                  this._sendProgress(h);
                  break;
                case "error":
                  this._sendError(h);
                  break;
                case "loadstart":
                  this._sendLoadStart();
                  break;
                case "abort":
                case "timeout":
                  this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + h.type.toUpperCase() + "_ERROR"));
              }
            }, r._resultFormatSuccess = function(h) {
              this._result = h, this._sendComplete();
            }, r._resultFormatFailed = function(h) {
              this._sendError(h);
            }, r.toString = function() {
              return "[PreloadJS AbstractLoader]";
            }, createjs.AbstractLoader = createjs.promote(i, "EventDispatcher");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a, h, l) {
              this.AbstractLoader_constructor(a, h, l), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this);
            }
            var r = createjs.extend(i, createjs.AbstractLoader);
            r.load = function() {
              this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load();
            }, r._createTag = function() {
            }, r._createRequest = function() {
              this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
            }, r._updateXHR = function(a) {
              a.loader.setResponseType && a.loader.setResponseType("blob");
            }, r._formatResult = function(a) {
              if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
                var h = window.URL || window.webkitURL, l = a.getResult(!0);
                a.getTag().src = h.createObjectURL(l);
              }
              return a.getTag();
            }, createjs.AbstractMediaLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            var i = function(a) {
              this._item = a;
            }, r = createjs.extend(i, createjs.EventDispatcher);
            r.load = function() {
            }, r.destroy = function() {
            }, r.cancel = function() {
            }, createjs.AbstractRequest = createjs.promote(i, "EventDispatcher");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a, h, l) {
              this.AbstractRequest_constructor(a), this._tag = h, this._tagSrcAttribute = l, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1;
            }
            var r = createjs.extend(i, createjs.AbstractRequest);
            r.load = function() {
              this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
              var a = new createjs.Event("initialize");
              a.loader = this._tag, this.dispatchEvent(a), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, this._tag.parentNode == null && (createjs.DomUtils.appendToBody(this._tag), this._addedToDOM = !0);
            }, r.destroy = function() {
              this._clean(), this._tag = null, this.AbstractRequest_destroy();
            }, r._handleReadyStateChange = function() {
              clearTimeout(this._loadTimeout);
              var a = this._tag;
              a.readyState != "loaded" && a.readyState != "complete" || this._handleTagComplete();
            }, r._handleError = function() {
              this._clean(), this.dispatchEvent("error");
            }, r._handleTagComplete = function() {
              this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this.dispatchEvent("complete");
            }, r._handleTimeout = function() {
              this._clean(), this.dispatchEvent(new createjs.Event("timeout"));
            }, r._clean = function() {
              this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && this._tag.parentNode != null && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout);
            }, r._handleStalled = function() {
            }, createjs.TagRequest = createjs.promote(i, "AbstractRequest");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a, h, l) {
              this.AbstractRequest_constructor(a), this._tag = h, this._tagSrcAttribute = l, this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
            }
            var r = createjs.extend(i, createjs.TagRequest);
            r.load = function() {
              var a = createjs.proxy(this._handleStalled, this);
              this._stalledCallback = a;
              var h = createjs.proxy(this._handleProgress, this);
              this._handleProgress = h, this._tag.addEventListener("stalled", a), this._tag.addEventListener("progress", h), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load();
            }, r._handleReadyStateChange = function() {
              clearTimeout(this._loadTimeout);
              var a = this._tag;
              a.readyState != "loaded" && a.readyState != "complete" || this._handleTagComplete();
            }, r._handleStalled = function() {
            }, r._handleProgress = function(a) {
              if (a && !(a.loaded > 0 && a.total == 0)) {
                var h = new createjs.ProgressEvent(a.loaded, a.total);
                this.dispatchEvent(h);
              }
            }, r._clean = function() {
              this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean();
            }, createjs.MediaTagRequest = createjs.promote(i, "TagRequest");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a) {
              this.AbstractRequest_constructor(a), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), this._createXHR(a);
            }
            var r = createjs.extend(i, createjs.AbstractRequest);
            i.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], r.getResult = function(a) {
              return a && this._rawResponse ? this._rawResponse : this._response;
            }, r.cancel = function() {
              this.canceled = !0, this._clean(), this._request.abort();
            }, r.load = function() {
              if (this._request == null) return void this._handleError();
              this._request.addEventListener != null ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), this._xhrLevel == 1 && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
              try {
                this._item.values ? this._request.send(createjs.URLUtils.formatQueryString(this._item.values)) : this._request.send();
              } catch (a) {
                this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, a));
              }
            }, r.setResponseType = function(a) {
              a === "blob" && (a = window.URL ? "blob" : "arraybuffer", this._responseType = a), this._request.responseType = a;
            }, r.getAllResponseHeaders = function() {
              return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null;
            }, r.getResponseHeader = function(a) {
              return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null;
            }, r._handleProgress = function(a) {
              if (a && !(a.loaded > 0 && a.total == 0)) {
                var h = new createjs.ProgressEvent(a.loaded, a.total);
                this.dispatchEvent(h);
              }
            }, r._handleLoadStart = function(a) {
              clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart");
            }, r._handleAbort = function(a) {
              this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, a));
            }, r._handleError = function(a) {
              this._clean(), this.dispatchEvent(new createjs.ErrorEvent(a.message));
            }, r._handleReadyStateChange = function(a) {
              this._request.readyState == 4 && this._handleLoad();
            }, r._handleLoad = function(a) {
              if (!this.loaded) {
                this.loaded = !0;
                var h = this._checkError();
                if (h) return void this._handleError(h);
                if (this._response = this._getResponse(), this._responseType === "arraybuffer") try {
                  this._response = new Blob([this._response]);
                } catch (c) {
                  if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, c.name === "TypeError" && window.BlobBuilder) {
                    var l = new BlobBuilder();
                    l.append(this._response), this._response = l.getBlob();
                  }
                }
                this._clean(), this.dispatchEvent(new createjs.Event("complete"));
              }
            }, r._handleTimeout = function(a) {
              this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, a));
            }, r._checkError = function() {
              var a = parseInt(this._request.status);
              return a >= 400 && a <= 599 ? new Error(a) : a == 0 && /^https?:/.test(location.protocol) ? new Error(0) : null;
            }, r._getResponse = function() {
              if (this._response != null) return this._response;
              if (this._request.response != null) return this._request.response;
              try {
                if (this._request.responseText != null) return this._request.responseText;
              } catch {
              }
              try {
                if (this._request.responseXML != null) return this._request.responseXML;
              } catch {
              }
              return null;
            }, r._createXHR = function(a) {
              var h = createjs.URLUtils.isCrossDomain(a), l = {}, c = null;
              if (window.XMLHttpRequest) c = new XMLHttpRequest(), h && c.withCredentials === void 0 && window.XDomainRequest && (c = new XDomainRequest());
              else {
                for (var u = 0, d = s.ACTIVEX_VERSIONS.length; u < d; u++) {
                  var g = s.ACTIVEX_VERSIONS[u];
                  try {
                    c = new ActiveXObject(g);
                    break;
                  } catch {
                  }
                }
                if (c == null) return !1;
              }
              a.mimeType == null && createjs.RequestUtils.isText(a.type) && (a.mimeType = "text/plain; charset=utf-8"), a.mimeType && c.overrideMimeType && c.overrideMimeType(a.mimeType), this._xhrLevel = typeof c.responseType == "string" ? 2 : 1;
              var v = null;
              if (v = a.method == createjs.Methods.GET ? createjs.URLUtils.buildURI(a.src, a.values) : a.src, c.open(a.method || createjs.Methods.GET, v, !0), h && c instanceof XMLHttpRequest && this._xhrLevel == 1 && (l.Origin = location.origin), a.values && a.method == createjs.Methods.POST && (l["Content-Type"] = "application/x-www-form-urlencoded"), h || l["X-Requested-With"] || (l["X-Requested-With"] = "XMLHttpRequest"), a.headers) for (var m in a.headers) l[m] = a.headers[m];
              for (m in l) c.setRequestHeader(m, l[m]);
              return c instanceof XMLHttpRequest && a.withCredentials !== void 0 && (c.withCredentials = a.withCredentials), this._request = c, !0;
            }, r._clean = function() {
              clearTimeout(this._loadTimeout), this._request.removeEventListener != null ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null);
            }, r.toString = function() {
              return "[PreloadJS XHRRequest]";
            }, createjs.XHRRequest = createjs.promote(i, "AbstractRequest");
          }(), this.createjs = this.createjs || {}, function() {
            function i(h, l, c) {
              this.AbstractLoader_constructor(), this._plugins = [], this._typeCallbacks = {}, this._extensionCallbacks = {}, this.next = null, this.maintainScriptOrder = !0, this.stopOnError = !1, this._maxConnections = 1, this._availableLoaders = [createjs.FontLoader, createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length, this.init(h, l, c);
            }
            var r = createjs.extend(i, createjs.AbstractLoader), a = i;
            try {
              Object.defineProperties(a, { POST: { get: createjs.deprecate(function() {
                return createjs.Methods.POST;
              }, "AbstractLoader.POST") }, GET: { get: createjs.deprecate(function() {
                return createjs.Methods.GET;
              }, "AbstractLoader.GET") }, BINARY: { get: createjs.deprecate(function() {
                return createjs.Types.BINARY;
              }, "AbstractLoader.BINARY") }, CSS: { get: createjs.deprecate(function() {
                return createjs.Types.CSS;
              }, "AbstractLoader.CSS") }, FONT: { get: createjs.deprecate(function() {
                return createjs.Types.FONT;
              }, "AbstractLoader.FONT") }, FONTCSS: { get: createjs.deprecate(function() {
                return createjs.Types.FONTCSS;
              }, "AbstractLoader.FONTCSS") }, IMAGE: { get: createjs.deprecate(function() {
                return createjs.Types.IMAGE;
              }, "AbstractLoader.IMAGE") }, JAVASCRIPT: { get: createjs.deprecate(function() {
                return createjs.Types.JAVASCRIPT;
              }, "AbstractLoader.JAVASCRIPT") }, JSON: { get: createjs.deprecate(function() {
                return createjs.Types.JSON;
              }, "AbstractLoader.JSON") }, JSONP: { get: createjs.deprecate(function() {
                return createjs.Types.JSONP;
              }, "AbstractLoader.JSONP") }, MANIFEST: { get: createjs.deprecate(function() {
                return createjs.Types.MANIFEST;
              }, "AbstractLoader.MANIFEST") }, SOUND: { get: createjs.deprecate(function() {
                return createjs.Types.SOUND;
              }, "AbstractLoader.SOUND") }, VIDEO: { get: createjs.deprecate(function() {
                return createjs.Types.VIDEO;
              }, "AbstractLoader.VIDEO") }, SPRITESHEET: { get: createjs.deprecate(function() {
                return createjs.Types.SPRITESHEET;
              }, "AbstractLoader.SPRITESHEET") }, SVG: { get: createjs.deprecate(function() {
                return createjs.Types.SVG;
              }, "AbstractLoader.SVG") }, TEXT: { get: createjs.deprecate(function() {
                return createjs.Types.TEXT;
              }, "AbstractLoader.TEXT") }, XML: { get: createjs.deprecate(function() {
                return createjs.Types.XML;
              }, "AbstractLoader.XML") } });
            } catch {
            }
            r.init = function(h, l, c) {
              this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(h), this._paused = !1, this._basePath = l, this._crossOrigin = c, this._loadStartWasDispatched = !1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = NaN;
            }, r.registerLoader = function(h) {
              if (!h || !h.canLoadItem) throw new Error("loader is of an incorrect type.");
              if (this._availableLoaders.indexOf(h) != -1) throw new Error("loader already exists.");
              this._availableLoaders.unshift(h);
            }, r.unregisterLoader = function(h) {
              var l = this._availableLoaders.indexOf(h);
              l != -1 && l < this._defaultLoaderLength - 1 && this._availableLoaders.splice(l, 1);
            }, r.setPreferXHR = function(h) {
              return this.preferXHR = h != 0 && window.XMLHttpRequest != null, this.preferXHR;
            }, r.removeAll = function() {
              this.remove();
            }, r.remove = function(h) {
              var l = null;
              if (h && !Array.isArray(h)) l = [h];
              else if (h) l = h;
              else if (arguments.length > 0) return;
              var c = !1;
              if (l) {
                for (; l.length; ) {
                  var u = l.pop(), d = this.getResult(u);
                  for (g = this._loadQueue.length - 1; g >= 0; g--) if (v = this._loadQueue[g].getItem(), v.id == u || v.src == u) {
                    this._loadQueue.splice(g, 1)[0].cancel();
                    break;
                  }
                  for (g = this._loadQueueBackup.length - 1; g >= 0; g--) if (v = this._loadQueueBackup[g].getItem(), v.id == u || v.src == u) {
                    this._loadQueueBackup.splice(g, 1)[0].cancel();
                    break;
                  }
                  if (d) this._disposeItem(this.getItem(u));
                  else for (var g = this._currentLoads.length - 1; g >= 0; g--) {
                    var v = this._currentLoads[g].getItem();
                    if (v.id == u || v.src == u) {
                      this._currentLoads.splice(g, 1)[0].cancel(), c = !0;
                      break;
                    }
                  }
                }
                c && this._loadNext();
              } else {
                this.close();
                for (var m in this._loadItemsById) this._disposeItem(this._loadItemsById[m]);
                this.init(this.preferXHR, this._basePath);
              }
            }, r.reset = function() {
              this.close();
              for (var h in this._loadItemsById) this._disposeItem(this._loadItemsById[h]);
              for (var l = [], c = 0, u = this._loadQueueBackup.length; c < u; c++) l.push(this._loadQueueBackup[c].getItem());
              this.loadManifest(l, !1);
            }, r.installPlugin = function(h) {
              if (h != null && h.getPreloadHandlers != null) {
                this._plugins.push(h);
                var l = h.getPreloadHandlers();
                if (l.scope = h, l.types != null) for (var c = 0, u = l.types.length; c < u; c++) this._typeCallbacks[l.types[c]] = l;
                if (l.extensions != null) for (c = 0, u = l.extensions.length; c < u; c++) this._extensionCallbacks[l.extensions[c]] = l;
              }
            }, r.setMaxConnections = function(h) {
              this._maxConnections = h, !this._paused && this._loadQueue.length > 0 && this._loadNext();
            }, r.loadFile = function(h, l, c) {
              if (h == null) {
                var u = new createjs.ErrorEvent("PRELOAD_NO_FILE");
                return void this._sendError(u);
              }
              this._addItem(h, null, c), l !== !1 ? this.setPaused(!1) : this.setPaused(!0);
            }, r.loadManifest = function(h, l, c) {
              var u = null, d = null;
              if (Array.isArray(h)) {
                if (h.length == 0) {
                  var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
                  return void this._sendError(g);
                }
                u = h;
              } else if (typeof h == "string") u = [{ src: h, type: a.MANIFEST }];
              else {
                if (typeof h != "object") {
                  var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
                  return void this._sendError(g);
                }
                if (h.src !== void 0) {
                  if (h.type == null) h.type = a.MANIFEST;
                  else if (h.type != a.MANIFEST) {
                    var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
                    this._sendError(g);
                  }
                  u = [h];
                } else h.manifest !== void 0 && (u = h.manifest, d = h.path);
              }
              for (var v = 0, m = u.length; v < m; v++) this._addItem(u[v], d, c);
              l !== !1 ? this.setPaused(!1) : this.setPaused(!0);
            }, r.load = function() {
              this.setPaused(!1);
            }, r.getItem = function(h) {
              return this._loadItemsById[h] || this._loadItemsBySrc[h];
            }, r.getResult = function(h, l) {
              var c = this._loadItemsById[h] || this._loadItemsBySrc[h];
              if (c == null) return null;
              var u = c.id;
              return l && this._loadedRawResults[u] ? this._loadedRawResults[u] : this._loadedResults[u];
            }, r.getItems = function(h) {
              var l = [];
              for (var c in this._loadItemsById) {
                var u = this._loadItemsById[c], d = this.getResult(c);
                h === !0 && d == null || l.push({ item: u, result: d, rawResult: this.getResult(c, !0) });
              }
              return l;
            }, r.setPaused = function(h) {
              this._paused = h, this._paused || this._loadNext();
            }, r.close = function() {
              for (; this._currentLoads.length; ) this._currentLoads.pop().cancel();
              this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = NaN;
            }, r._addItem = function(h, l, c) {
              var u = this._createLoadItem(h, l, c);
              if (u != null) {
                var d = this._createLoader(u);
                d != null && ("plugins" in d && (d.plugins = this._plugins), u._loader = d, this._loadQueue.push(d), this._loadQueueBackup.push(d), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && u.type == createjs.Types.JAVASCRIPT || u.maintainOrder === !0) && (this._scriptOrder.push(u), this._loadedScripts.push(null)));
              }
            }, r._createLoadItem = function(h, l, c) {
              var u = createjs.LoadItem.create(h);
              if (u == null) return null;
              var d = "", g = c || this._basePath;
              if (u.src instanceof Object) {
                if (!u.type) return null;
                if (l) {
                  d = l;
                  var v = createjs.URLUtils.parseURI(l);
                  g == null || v.absolute || v.relative || (d = g + d);
                } else g != null && (d = g);
              } else {
                var m = createjs.URLUtils.parseURI(u.src);
                m.extension && (u.ext = m.extension), u.type == null && (u.type = createjs.RequestUtils.getTypeByExtension(u.ext));
                var T = u.src;
                if (!m.absolute && !m.relative) if (l) {
                  d = l;
                  var v = createjs.URLUtils.parseURI(l);
                  T = l + T, g == null || v.absolute || v.relative || (d = g + d);
                } else g != null && (d = g);
                u.src = d + u.src;
              }
              u.path = d, u.id !== void 0 && u.id !== null && u.id !== "" || (u.id = T);
              var b = this._typeCallbacks[u.type] || this._extensionCallbacks[u.ext];
              if (b) {
                var x = b.callback.call(b.scope, u, this);
                if (x === !1) return null;
                x === !0 || x != null && (u._loader = x), m = createjs.URLUtils.parseURI(u.src), m.extension != null && (u.ext = m.extension);
              }
              return this._loadItemsById[u.id] = u, this._loadItemsBySrc[u.src] = u, u.crossOrigin == null && (u.crossOrigin = this._crossOrigin), u;
            }, r._createLoader = function(h) {
              if (h._loader != null) return h._loader;
              for (var l = this.preferXHR, c = 0; c < this._availableLoaders.length; c++) {
                var u = this._availableLoaders[c];
                if (u && u.canLoadItem(h)) return new u(h, l);
              }
              return null;
            }, r._loadNext = function() {
              if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var h = 0; h < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); h++) {
                  var l = this._loadQueue[h];
                  this._canStartLoad(l) && (this._loadQueue.splice(h, 1), h--, this._loadItem(l));
                }
              }
            }, r._loadItem = function(h) {
              h.on("fileload", this._handleFileLoad, this), h.on("progress", this._handleProgress, this), h.on("complete", this._handleFileComplete, this), h.on("error", this._handleError, this), h.on("fileerror", this._handleFileError, this), this._currentLoads.push(h), this._sendFileStart(h.getItem()), h.load();
            }, r._handleFileLoad = function(h) {
              h.target = null, this.dispatchEvent(h);
            }, r._handleFileError = function(h) {
              var l = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, h.item);
              this._sendError(l);
            }, r._handleError = function(h) {
              var l = h.target;
              this._numItemsLoaded++, this._finishOrderedItem(l, !0), this._updateProgress();
              var c = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, l.getItem());
              this._sendError(c), this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(l), this._cleanLoadItem(l), this._loadNext());
            }, r._handleFileComplete = function(h) {
              var l = h.target, c = l.getItem(), u = l.getResult();
              this._loadedResults[c.id] = u;
              var d = l.getResult(!0);
              d != null && d !== u && (this._loadedRawResults[c.id] = d), this._saveLoadedItems(l), this._removeLoadItem(l), this._finishOrderedItem(l) || this._processFinishedLoad(c, l), this._cleanLoadItem(l);
            }, r._saveLoadedItems = function(h) {
              var l = h.getLoadedItems();
              if (l !== null) for (var c = 0; c < l.length; c++) {
                var u = l[c].item;
                this._loadItemsBySrc[u.src] = u, this._loadItemsById[u.id] = u, this._loadedResults[u.id] = l[c].result, this._loadedRawResults[u.id] = l[c].rawResult;
              }
            }, r._finishOrderedItem = function(h, l) {
              var c = h.getItem();
              if (this.maintainScriptOrder && c.type == createjs.Types.JAVASCRIPT || c.maintainOrder) {
                h instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
                var u = createjs.indexOf(this._scriptOrder, c);
                return u != -1 && (this._loadedScripts[u] = l === !0 || c, this._checkScriptLoadOrder(), !0);
              }
              return !1;
            }, r._checkScriptLoadOrder = function() {
              for (var h = this._loadedScripts.length, l = 0; l < h; l++) {
                var c = this._loadedScripts[l];
                if (c === null) break;
                if (c !== !0) {
                  var u = this._loadedResults[c.id];
                  c.type == createjs.Types.JAVASCRIPT && createjs.DomUtils.appendToHead(u);
                  var d = c._loader;
                  this._processFinishedLoad(c, d), this._loadedScripts[l] = !0;
                }
              }
            }, r._processFinishedLoad = function(h, l) {
              if (this._numItemsLoaded++, !this.maintainScriptOrder && h.type == createjs.Types.JAVASCRIPT) {
                var c = l.getTag();
                createjs.DomUtils.appendToHead(c);
              }
              this._updateProgress(), this._sendFileComplete(h, l), this._loadNext();
            }, r._canStartLoad = function(h) {
              if (!this.maintainScriptOrder || h.preferXHR) return !0;
              var l = h.getItem();
              if (l.type != createjs.Types.JAVASCRIPT) return !0;
              if (this._currentlyLoadingScript) return !1;
              for (var c = this._scriptOrder.indexOf(l), u = 0; u < c; ) {
                if (this._loadedScripts[u] == null) return !1;
                u++;
              }
              return this._currentlyLoadingScript = !0, !0;
            }, r._removeLoadItem = function(h) {
              for (var l = this._currentLoads.length, c = 0; c < l; c++) if (this._currentLoads[c] == h) {
                this._currentLoads.splice(c, 1);
                break;
              }
            }, r._cleanLoadItem = function(h) {
              var l = h.getItem();
              l && delete l._loader;
            }, r._handleProgress = function(h) {
              var l = h.target;
              this._sendFileProgress(l.getItem(), l.progress), this._updateProgress();
            }, r._updateProgress = function() {
              var h = this._numItemsLoaded / this._numItems, l = this._numItems - this._numItemsLoaded;
              if (l > 0) {
                for (var c = 0, u = 0, d = this._currentLoads.length; u < d; u++) c += this._currentLoads[u].progress;
                h += c / l * (l / this._numItems);
              }
              this._lastProgress != h && (this._sendProgress(h), this._lastProgress = h);
            }, r._disposeItem = function(h) {
              delete this._loadedResults[h.id], delete this._loadedRawResults[h.id], delete this._loadItemsById[h.id], delete this._loadItemsBySrc[h.src];
            }, r._sendFileProgress = function(h, l) {
              if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
                var c = new createjs.Event("fileprogress");
                c.progress = l, c.loaded = l, c.total = 1, c.item = h, this.dispatchEvent(c);
              }
            }, r._sendFileComplete = function(h, l) {
              if (!this._isCanceled() && !this._paused) {
                var c = new createjs.Event("fileload");
                c.loader = l, c.item = h, c.result = this._loadedResults[h.id], c.rawResult = this._loadedRawResults[h.id], h.completeHandler && h.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c);
              }
            }, r._sendFileStart = function(h) {
              var l = new createjs.Event("filestart");
              l.item = h, this.hasEventListener("filestart") && this.dispatchEvent(l);
            }, r.toString = function() {
              return "[PreloadJS LoadQueue]";
            }, createjs.LoadQueue = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(r) {
              this.AbstractLoader_constructor(r, !0, createjs.Types.TEXT);
            }
            createjs.extend(i, createjs.AbstractLoader), i.canLoadItem = function(r) {
              return r.type == createjs.Types.TEXT;
            }, createjs.TextLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a) {
              this.AbstractLoader_constructor(a, !0, createjs.Types.BINARY), this.on("initialize", this._updateXHR, this);
            }
            var r = createjs.extend(i, createjs.AbstractLoader);
            i.canLoadItem = function(a) {
              return a.type == createjs.Types.BINARY;
            }, r._updateXHR = function(a) {
              a.loader.setResponseType("arraybuffer");
            }, createjs.BinaryLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a, h) {
              this.AbstractLoader_constructor(a, h, createjs.Types.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", this._tag = h ? createjs.Elements.style() : createjs.Elements.link(), this._tag.rel = "stylesheet", this._tag.type = "text/css";
            }
            var r = createjs.extend(i, createjs.AbstractLoader);
            i.canLoadItem = function(a) {
              return a.type == createjs.Types.CSS;
            }, r._formatResult = function(a) {
              if (this._preferXHR) {
                var h = a.getTag();
                if (h.styleSheet) h.styleSheet.cssText = a.getResult(!0);
                else {
                  var l = createjs.Elements.text(a.getResult(!0));
                  h.appendChild(l);
                }
              } else h = this._tag;
              return createjs.DomUtils.appendToHead(h), h;
            }, createjs.CSSLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a, h) {
              this.AbstractLoader_constructor(a, h, a.type), this._faces = {}, this._watched = [], this._count = 0, this._watchInterval = null, this._loadTimeout = null, this._injectCSS = a.injectCSS === void 0 || a.injectCSS, this.dispatchEvent("initialize");
            }
            var r = createjs.extend(i, createjs.AbstractLoader);
            i.canLoadItem = function(a) {
              return a.type == createjs.Types.FONT || a.type == createjs.Types.FONTCSS;
            }, i.sampleText = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ", i._ctx = document.createElement("canvas").getContext("2d"), i._referenceFonts = ["serif", "monospace"], i.WEIGHT_REGEX = /[- ._]*(thin|normal|book|regular|medium|black|heavy|[1-9]00|(?:extra|ultra|semi|demi)?[- ._]*(?:light|bold))[- ._]*/gi, i.STYLE_REGEX = /[- ._]*(italic|oblique)[- ._]*/gi, i.FONT_FORMAT = { woff2: "woff2", woff: "woff", ttf: "truetype", otf: "truetype" }, i.FONT_WEIGHT = { thin: 100, extralight: 200, ultralight: 200, light: 300, semilight: 300, demilight: 300, book: "normal", regular: "normal", semibold: 600, demibold: 600, extrabold: 800, ultrabold: 800, black: 900, heavy: 900 }, i.WATCH_DURATION = 10, r.load = function() {
              if (this.type == createjs.Types.FONTCSS) {
                if (!this._watchCSS()) return void this.AbstractLoader_load();
              } else if (this._item.src instanceof Array) this._watchFontArray();
              else {
                var a = this._defFromSrc(this._item.src);
                this._watchFont(a), this._injectStyleTag(this._cssFromDef(a));
              }
              this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this.dispatchEvent("loadstart");
            }, r._handleTimeout = function() {
              this._stopWatching(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT"));
            }, r._createRequest = function() {
              return this._request;
            }, r.handleEvent = function(a) {
              switch (a.type) {
                case "complete":
                  this._rawResult = a.target._response, this._result = !0, this._parseCSS(this._rawResult);
                  break;
                case "error":
                  this._stopWatching(), this.AbstractLoader_handleEvent(a);
              }
            }, r._watchCSS = function() {
              var a = this._item.src;
              return a instanceof HTMLStyleElement && (this._injectCSS && !a.parentNode && (document.head || document.getElementsByTagName("head")[0]).appendChild(a), this._injectCSS = !1, a = `
` + a.textContent), a.search(/\n|\r|@font-face/i) !== -1 ? (this._parseCSS(a), !0) : (this._request = new createjs.XHRRequest(this._item), !1);
            }, r._parseCSS = function(a) {
              for (var h = /@font-face\s*\{([^}]+)}/g; ; ) {
                var l = h.exec(a);
                if (!l) break;
                this._watchFont(this._parseFontFace(l[1]));
              }
              this._injectStyleTag(a);
            }, r._watchFontArray = function() {
              for (var a, h = this._item.src, l = "", c = h.length - 1; c >= 0; c--) {
                var u = h[c];
                a = typeof u == "string" ? this._defFromSrc(u) : this._defFromObj(u), this._watchFont(a), l += this._cssFromDef(a) + `
`;
              }
              this._injectStyleTag(l);
            }, r._injectStyleTag = function(a) {
              if (this._injectCSS) {
                var h = document.head || document.getElementsByTagName("head")[0], l = document.createElement("style");
                l.type = "text/css", l.styleSheet ? l.styleSheet.cssText = a : l.appendChild(document.createTextNode(a)), h.appendChild(l);
              }
            }, r._parseFontFace = function(a) {
              var h = this._getCSSValue(a, "font-family"), l = this._getCSSValue(a, "src");
              return h && l ? this._defFromObj({ family: h, src: l, style: this._getCSSValue(a, "font-style"), weight: this._getCSSValue(a, "font-weight") }) : null;
            }, r._watchFont = function(a) {
              a && !this._faces[a.id] && (this._faces[a.id] = a, this._watched.push(a), this._count++, this._calculateReferenceSizes(a), this._startWatching());
            }, r._startWatching = function() {
              this._watchInterval == null && (this._watchInterval = setInterval(createjs.proxy(this._watch, this), i.WATCH_DURATION));
            }, r._stopWatching = function() {
              clearInterval(this._watchInterval), clearTimeout(this._loadTimeout), this._watchInterval = null;
            }, r._watch = function() {
              for (var a = this._watched, h = i._referenceFonts, l = a.length, c = l - 1; c >= 0; c--) for (var u = a[c], d = u.refs, g = d.length - 1; g >= 0; g--) {
                var v = this._getTextWidth(u.family + "," + h[g], u.weight, u.style);
                if (v != d[g]) {
                  var m = new createjs.Event("fileload");
                  u.type = "font-family", m.item = u, this.dispatchEvent(m), a.splice(c, 1);
                  break;
                }
              }
              if (l !== a.length) {
                var m = new createjs.ProgressEvent(this._count - a.length, this._count);
                this.dispatchEvent(m);
              }
              l === 0 && (this._stopWatching(), this._sendComplete());
            }, r._calculateReferenceSizes = function(a) {
              for (var h = i._referenceFonts, l = a.refs = [], c = 0; c < h.length; c++) l[c] = this._getTextWidth(h[c], a.weight, a.style);
            }, r._defFromSrc = function(a) {
              var h, l = /[- ._]+/g, c = a, u = null;
              h = c.search(/[?#]/), h !== -1 && (c = c.substr(0, h)), h = c.lastIndexOf("."), h !== -1 && (u = c.substr(h + 1), c = c.substr(0, h)), (h = c.lastIndexOf("/")) !== -1 && (c = c.substr(h + 1));
              var d = c, g = d.match(i.WEIGHT_REGEX);
              g && (g = g[0], d = d.replace(g, ""), g = g.replace(l, "").toLowerCase());
              var v = c.match(i.STYLE_REGEX);
              v && (d = d.replace(v[0], ""), v = "italic"), d = d.replace(l, "");
              var m = "local('" + c.replace(l, " ") + "'), url('" + a + "')", T = i.FONT_FORMAT[u];
              return T && (m += " format('" + T + "')"), this._defFromObj({ family: d, weight: i.FONT_WEIGHT[g] || g, style: v, src: m });
            }, r._defFromObj = function(a) {
              var h = { family: a.family, src: a.src, style: a.style || "normal", weight: a.weight || "normal" };
              return h.id = h.family + ";" + h.style + ";" + h.weight, h;
            }, r._cssFromDef = function(a) {
              return `@font-face {
	font-family: '` + a.family + `';
	font-style: ` + a.style + `;
	font-weight: ` + a.weight + `;
	src: ` + a.src + `;
}`;
            }, r._getTextWidth = function(a, h, l) {
              var c = i._ctx;
              return c.font = l + " " + h + " 72px " + a, c.measureText(i.sampleText).width;
            }, r._getCSSValue = function(a, h) {
              var l = new RegExp(h + ":s*([^;}]+?)s*[;}]"), c = l.exec(a);
              return c && c[1] ? c[1] : null;
            }, createjs.FontLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a, h) {
              this.AbstractLoader_constructor(a, h, createjs.Types.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.DomUtils.isImageTag(a) ? this._tag = a : createjs.DomUtils.isImageTag(a.src) ? this._tag = a.src : createjs.DomUtils.isImageTag(a.tag) && (this._tag = a.tag), this._tag != null ? this._preferXHR = !1 : this._tag = createjs.Elements.img(), this.on("initialize", this._updateXHR, this);
            }
            var r = createjs.extend(i, createjs.AbstractLoader);
            i.canLoadItem = function(a) {
              return a.type == createjs.Types.IMAGE;
            }, r.load = function() {
              if (this._tag.src != "" && this._tag.complete) return void this._sendComplete();
              var a = this._item.crossOrigin;
              a == 1 && (a = "Anonymous"), a == null || createjs.URLUtils.isLocal(this._item) || (this._tag.crossOrigin = a), this.AbstractLoader_load();
            }, r._updateXHR = function(a) {
              a.loader.mimeType = "text/plain; charset=x-user-defined-binary", a.loader.setResponseType && a.loader.setResponseType("blob");
            }, r._formatResult = function(a) {
              return this._formatImage;
            }, r._formatImage = function(a, h) {
              var l = this._tag, c = window.URL || window.webkitURL;
              if (this._preferXHR) if (c) {
                var u = c.createObjectURL(this.getResult(!0));
                l.src = u, l.addEventListener("load", this._cleanUpURL, !1), l.addEventListener("error", this._cleanUpURL, !1);
              } else l.src = this._item.src;
              l.complete ? a(l) : (l.onload = createjs.proxy(function() {
                a(this._tag), l.onload = l.onerror = null;
              }, this), l.onerror = createjs.proxy(function(d) {
                h(new createjs.ErrorEvent("IMAGE_FORMAT", null, d)), l.onload = l.onerror = null;
              }, this));
            }, r._cleanUpURL = function(a) {
              (window.URL || window.webkitURL).revokeObjectURL(a.target.src);
            }, createjs.ImageLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a, h) {
              this.AbstractLoader_constructor(a, h, createjs.Types.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(createjs.Elements.script());
            }
            var r = createjs.extend(i, createjs.AbstractLoader);
            i.canLoadItem = function(a) {
              return a.type == createjs.Types.JAVASCRIPT;
            }, r._formatResult = function(a) {
              var h = a.getTag();
              return this._preferXHR && (h.text = a.getResult(!0)), h;
            }, createjs.JavaScriptLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a) {
              this.AbstractLoader_constructor(a, !0, createjs.Types.JSON), this.resultFormatter = this._formatResult;
            }
            var r = createjs.extend(i, createjs.AbstractLoader);
            i.canLoadItem = function(a) {
              return a.type == createjs.Types.JSON;
            }, r._formatResult = function(a) {
              var h = null;
              try {
                h = createjs.DataUtils.parseJSON(a.getResult(!0));
              } catch (c) {
                var l = new createjs.ErrorEvent("JSON_FORMAT", null, c);
                return this._sendError(l), c;
              }
              return h;
            }, createjs.JSONLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a) {
              this.AbstractLoader_constructor(a, !1, createjs.Types.JSONP), this.setTag(createjs.Elements.script()), this.getTag().type = "text/javascript";
            }
            var r = createjs.extend(i, createjs.AbstractLoader);
            i.canLoadItem = function(a) {
              return a.type == createjs.Types.JSONP;
            }, r.cancel = function() {
              this.AbstractLoader_cancel(), this._dispose();
            }, r.load = function() {
              if (this._item.callback == null) throw new Error("callback is required for loading JSONP requests.");
              if (window[this._item.callback] != null) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
              window[this._item.callback] = createjs.proxy(this._handleLoad, this), createjs.DomUtils.appendToBody(this._tag), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag.src = this._item.src;
            }, r._handleLoad = function(a) {
              this._result = this._rawResult = a, this._sendComplete(), this._dispose();
            }, r._handleTimeout = function() {
              this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"));
            }, r._dispose = function() {
              createjs.DomUtils.removeChild(this._tag), delete window[this._item.callback], clearTimeout(this._loadTimeout);
            }, createjs.JSONPLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(h, l) {
              this.AbstractLoader_constructor(h, l, createjs.Types.MANIFEST), this.plugins = null, this._manifestQueue = null;
            }
            var r = createjs.extend(i, createjs.AbstractLoader), a = i;
            a.MANIFEST_PROGRESS = 0.25, a.canLoadItem = function(h) {
              return h.type == createjs.Types.MANIFEST;
            }, r.load = function() {
              this.AbstractLoader_load();
            }, r._createRequest = function() {
              var h = this._item.callback;
              this._request = h != null ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item);
            }, r.handleEvent = function(h) {
              switch (h.type) {
                case "complete":
                  return this._rawResult = h.target.getResult(!0), this._result = h.target.getResult(), this._sendProgress(a.MANIFEST_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                  return h.loaded *= a.MANIFEST_PROGRESS, this.progress = h.loaded / h.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(h);
              }
              this.AbstractLoader_handleEvent(h);
            }, r.destroy = function() {
              this.AbstractLoader_destroy(), this._manifestQueue.close();
            }, r._loadManifest = function(h) {
              if (h && h.manifest) {
                var l = this._manifestQueue = new createjs.LoadQueue(this._preferXHR);
                l.on("fileload", this._handleManifestFileLoad, this), l.on("progress", this._handleManifestProgress, this), l.on("complete", this._handleManifestComplete, this, !0), l.on("error", this._handleManifestError, this, !0);
                for (var c = 0, u = this.plugins.length; c < u; c++) l.installPlugin(this.plugins[c]);
                l.loadManifest(h);
              } else this._sendComplete();
            }, r._handleManifestFileLoad = function(h) {
              h.target = null, this.dispatchEvent(h);
            }, r._handleManifestComplete = function(h) {
              this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete();
            }, r._handleManifestProgress = function(h) {
              this.progress = h.progress * (1 - a.MANIFEST_PROGRESS) + a.MANIFEST_PROGRESS, this._sendProgress(this.progress);
            }, r._handleManifestError = function(h) {
              var l = new createjs.Event("fileerror");
              l.item = h.data, this.dispatchEvent(l);
            }, createjs.ManifestLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a, h) {
              this.AbstractMediaLoader_constructor(a, h, createjs.Types.SOUND), createjs.DomUtils.isAudioTag(a) ? this._tag = a : createjs.DomUtils.isAudioTag(a.src) ? this._tag = a : createjs.DomUtils.isAudioTag(a.tag) && (this._tag = createjs.DomUtils.isAudioTag(a) ? a : a.src), this._tag != null && (this._preferXHR = !1);
            }
            var r = createjs.extend(i, createjs.AbstractMediaLoader);
            i.canLoadItem = function(a) {
              return a.type == createjs.Types.SOUND;
            }, r._createTag = function(a) {
              var h = createjs.Elements.audio();
              return h.autoplay = !1, h.preload = "none", h.src = a, h;
            }, createjs.SoundLoader = createjs.promote(i, "AbstractMediaLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(h, l) {
              this.AbstractMediaLoader_constructor(h, l, createjs.Types.VIDEO), createjs.DomUtils.isVideoTag(h) || createjs.DomUtils.isVideoTag(h.src) ? (this.setTag(createjs.DomUtils.isVideoTag(h) ? h : h.src), this._preferXHR = !1) : this.setTag(this._createTag());
            }
            var r = createjs.extend(i, createjs.AbstractMediaLoader), a = i;
            r._createTag = function() {
              return createjs.Elements.video();
            }, a.canLoadItem = function(h) {
              return h.type == createjs.Types.VIDEO;
            }, createjs.VideoLoader = createjs.promote(i, "AbstractMediaLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(h, l) {
              this.AbstractLoader_constructor(h, l, createjs.Types.SPRITESHEET), this._manifestQueue = null;
            }
            var r = createjs.extend(i, createjs.AbstractLoader), a = i;
            a.SPRITESHEET_PROGRESS = 0.25, a.canLoadItem = function(h) {
              return h.type == createjs.Types.SPRITESHEET;
            }, r.destroy = function() {
              this.AbstractLoader_destroy(), this._manifestQueue.close();
            }, r._createRequest = function() {
              var h = this._item.callback;
              this._request = h != null ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item);
            }, r.handleEvent = function(h) {
              switch (h.type) {
                case "complete":
                  return this._rawResult = h.target.getResult(!0), this._result = h.target.getResult(), this._sendProgress(a.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                  return h.loaded *= a.SPRITESHEET_PROGRESS, this.progress = h.loaded / h.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(h);
              }
              this.AbstractLoader_handleEvent(h);
            }, r._loadManifest = function(h) {
              if (h && h.images) {
                var l = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
                l.on("complete", this._handleManifestComplete, this, !0), l.on("fileload", this._handleManifestFileLoad, this), l.on("progress", this._handleManifestProgress, this), l.on("error", this._handleManifestError, this, !0), l.loadManifest(h.images);
              }
            }, r._handleManifestFileLoad = function(h) {
              var l = h.result;
              if (l != null) {
                var c = this.getResult().images;
                c[c.indexOf(h.item.src)] = l;
              }
            }, r._handleManifestComplete = function(h) {
              this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete();
            }, r._handleManifestProgress = function(h) {
              this.progress = h.progress * (1 - a.SPRITESHEET_PROGRESS) + a.SPRITESHEET_PROGRESS, this._sendProgress(this.progress);
            }, r._handleManifestError = function(h) {
              var l = new createjs.Event("fileerror");
              l.item = h.data, this.dispatchEvent(l);
            }, createjs.SpriteSheetLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a, h) {
              this.AbstractLoader_constructor(a, h, createjs.Types.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", h ? this.setTag(createjs.Elements.svg()) : (this.setTag(createjs.Elements.object()), this.getTag().type = "image/svg+xml");
            }
            var r = createjs.extend(i, createjs.AbstractLoader);
            i.canLoadItem = function(a) {
              return a.type == createjs.Types.SVG;
            }, r._formatResult = function(a) {
              var h = createjs.DataUtils.parseXML(a.getResult(!0)), l = a.getTag();
              if (!this._preferXHR && document.body.contains(l) && document.body.removeChild(l), h.documentElement != null) {
                var c = h.documentElement;
                return document.importNode && (c = document.importNode(c, !0)), l.appendChild(c), l;
              }
              return h;
            }, createjs.SVGLoader = createjs.promote(i, "AbstractLoader");
          }(), this.createjs = this.createjs || {}, function() {
            function i(a) {
              this.AbstractLoader_constructor(a, !0, createjs.Types.XML), this.resultFormatter = this._formatResult;
            }
            var r = createjs.extend(i, createjs.AbstractLoader);
            i.canLoadItem = function(a) {
              return a.type == createjs.Types.XML;
            }, r._formatResult = function(a) {
              return createjs.DataUtils.parseXML(a.getResult(!0));
            }, createjs.XMLLoader = createjs.promote(i, "AbstractLoader");
          }();
        }).call(window);
      }).call(y, o(4)(_), o(5));
    }, function(_, y) {
      _.exports = function(o) {
        return o.webpackPolyfill || (o.deprecate = function() {
        }, o.paths = [], o.children || (o.children = []), Object.defineProperty(o, "loaded", { enumerable: !0, get: function() {
          return o.l;
        } }), Object.defineProperty(o, "id", { enumerable: !0, get: function() {
          return o.i;
        } }), o.webpackPolyfill = 1), o;
      };
    }, function(_, y) {
      var o;
      o = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        o = o || Function("return this")() || (0, eval)("this");
      } catch {
        typeof window == "object" && (o = window);
      }
      _.exports = o;
    }, function(_, y) {
      (function(o) {
        _.exports = o;
      }).call(y, {});
    }, function(_, y) {
      (function() {
        /*!
        * SoundJS
        * Visit http://createjs.com/ for documentation, updates and examples.
        *
        * Copyright (c) 2010 gskinner.com, inc.
        *
        * Permission is hereby granted, free of charge, to any person
        * obtaining a copy of this software and associated documentation
        * files (the "Software"), to deal in the Software without
        * restriction, including without limitation the rights to use,
        * copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the
        * Software is furnished to do so, subject to the following
        * conditions:
        *
        * The above copyright notice and this permission notice shall be
        * included in all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
        * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
        * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
        * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
        * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
        * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
        * OTHER DEALINGS IN THE SOFTWARE.
        */
        this.createjs = this.createjs || {}, function() {
          var o = createjs.SoundJS = createjs.SoundJS || {};
          o.version = "1.0.0", o.buildDate = "Thu, 14 Sep 2017 19:47:47 GMT";
        }(), this.createjs = this.createjs || {}, createjs.extend = function(o, n) {
          function t() {
            this.constructor = o;
          }
          return t.prototype = n.prototype, o.prototype = new t();
        }, this.createjs = this.createjs || {}, createjs.promote = function(o, n) {
          var t = o.prototype, e = Object.getPrototypeOf && Object.getPrototypeOf(t) || t.__proto__;
          if (e) {
            t[(n += "_") + "constructor"] = e.constructor;
            for (var i in e) t.hasOwnProperty(i) && typeof e[i] == "function" && (t[n + i] = e[i]);
          }
          return o;
        }, this.createjs = this.createjs || {}, createjs.deprecate = function(o, n) {
          return function() {
            var t = "Deprecated property or method '" + n + "'. See docs for info.";
            return console && (console.warn ? console.warn(t) : console.log(t)), o && o.apply(this, arguments);
          };
        }, this.createjs = this.createjs || {}, createjs.indexOf = function(o, n) {
          for (var t = 0, e = o.length; t < e; t++) if (n === o[t]) return t;
          return -1;
        }, this.createjs = this.createjs || {}, function() {
          createjs.proxy = function(o, n) {
            var t = Array.prototype.slice.call(arguments, 2);
            return function() {
              return o.apply(n, Array.prototype.slice.call(arguments, 0).concat(t));
            };
          };
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            throw "BrowserDetect cannot be instantiated";
          }
          var n = o.agent = window.navigator.userAgent;
          o.isWindowPhone = n.indexOf("IEMobile") > -1 || n.indexOf("Windows Phone") > -1, o.isFirefox = n.indexOf("Firefox") > -1, o.isOpera = window.opera != null, o.isChrome = n.indexOf("Chrome") > -1, o.isIOS = (n.indexOf("iPod") > -1 || n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1) && !o.isWindowPhone, o.isAndroid = n.indexOf("Android") > -1 && !o.isWindowPhone, o.isBlackberry = n.indexOf("Blackberry") > -1, createjs.BrowserDetect = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            this._listeners = null, this._captureListeners = null;
          }
          var n = o.prototype;
          o.initialize = function(t) {
            t.addEventListener = n.addEventListener, t.on = n.on, t.removeEventListener = t.off = n.removeEventListener, t.removeAllEventListeners = n.removeAllEventListeners, t.hasEventListener = n.hasEventListener, t.dispatchEvent = n.dispatchEvent, t._dispatchEvent = n._dispatchEvent, t.willTrigger = n.willTrigger;
          }, n.addEventListener = function(t, e, i) {
            var r;
            r = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var a = r[t];
            return a && this.removeEventListener(t, e, i), a = r[t], a ? a.push(e) : r[t] = [e], e;
          }, n.on = function(t, e, i, r, a, h) {
            return e.handleEvent && (i = i || e, e = e.handleEvent), i = i || this, this.addEventListener(t, function(l) {
              e.call(i, l, a), r && l.remove();
            }, h);
          }, n.removeEventListener = function(t, e, i) {
            var r = i ? this._captureListeners : this._listeners;
            if (r) {
              var a = r[t];
              if (a) {
                for (var h = 0, l = a.length; h < l; h++) if (a[h] == e) {
                  l == 1 ? delete r[t] : a.splice(h, 1);
                  break;
                }
              }
            }
          }, n.off = n.removeEventListener, n.removeAllEventListeners = function(t) {
            t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null;
          }, n.dispatchEvent = function(t, e, i) {
            if (typeof t == "string") {
              var r = this._listeners;
              if (!(e || r && r[t])) return !0;
              t = new createjs.Event(t, e, i);
            } else t.target && t.clone && (t = t.clone());
            try {
              t.target = this;
            } catch {
            }
            if (t.bubbles && this.parent) {
              for (var a = this, h = [a]; a.parent; ) h.push(a = a.parent);
              var l, c = h.length;
              for (l = c - 1; l >= 0 && !t.propagationStopped; l--) h[l]._dispatchEvent(t, 1 + (l == 0));
              for (l = 1; l < c && !t.propagationStopped; l++) h[l]._dispatchEvent(t, 3);
            } else this._dispatchEvent(t, 2);
            return !t.defaultPrevented;
          }, n.hasEventListener = function(t) {
            var e = this._listeners, i = this._captureListeners;
            return !!(e && e[t] || i && i[t]);
          }, n.willTrigger = function(t) {
            for (var e = this; e; ) {
              if (e.hasEventListener(t)) return !0;
              e = e.parent;
            }
            return !1;
          }, n.toString = function() {
            return "[EventDispatcher]";
          }, n._dispatchEvent = function(t, e) {
            var i, r, a = e <= 2 ? this._captureListeners : this._listeners;
            if (t && a && (r = a[t.type]) && (i = r.length)) {
              try {
                t.currentTarget = this;
              } catch {
              }
              try {
                t.eventPhase = 0 | e;
              } catch {
              }
              t.removed = !1, r = r.slice();
              for (var h = 0; h < i && !t.immediatePropagationStopped; h++) {
                var l = r[h];
                l.handleEvent ? l.handleEvent(t) : l(t), t.removed && (this.off(t.type, l, e == 1), t.removed = !1);
              }
            }
            e === 2 && this._dispatchEvent(t, 2.1);
          }, createjs.EventDispatcher = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i) {
            this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!e, this.cancelable = !!i, this.timeStamp = (/* @__PURE__ */ new Date()).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1;
          }
          var n = o.prototype;
          n.preventDefault = function() {
            this.defaultPrevented = this.cancelable && !0;
          }, n.stopPropagation = function() {
            this.propagationStopped = !0;
          }, n.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0;
          }, n.remove = function() {
            this.removed = !0;
          }, n.clone = function() {
            return new o(this.type, this.bubbles, this.cancelable);
          }, n.set = function(t) {
            for (var e in t) this[e] = t[e];
            return this;
          }, n.toString = function() {
            return "[Event (type=" + this.type + ")]";
          }, createjs.Event = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(n, t, e) {
            this.Event_constructor("error"), this.title = n, this.message = t, this.data = e;
          }
          createjs.extend(o, createjs.Event).clone = function() {
            return new createjs.ErrorEvent(this.title, this.message, this.data);
          }, createjs.ErrorEvent = createjs.promote(o, "Event");
        }(), this.createjs = this.createjs || {}, function(o) {
          function n(t, e) {
            this.Event_constructor("progress"), this.loaded = t, this.total = e ?? 1, this.progress = e == 0 ? 0 : this.loaded / this.total;
          }
          createjs.extend(n, createjs.Event).clone = function() {
            return new createjs.ProgressEvent(this.loaded, this.total);
          }, createjs.ProgressEvent = createjs.promote(n, "Event");
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.Methods.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = t.LOAD_TIMEOUT_DEFAULT;
          }
          var n = o.prototype = {}, t = o;
          t.LOAD_TIMEOUT_DEFAULT = 8e3, t.create = function(e) {
            if (typeof e == "string") {
              var i = new o();
              return i.src = e, i;
            }
            if (e instanceof t) return e;
            if (e instanceof Object && e.src) return e.loadTimeout == null && (e.loadTimeout = t.LOAD_TIMEOUT_DEFAULT), e;
            throw new Error("Type not recognized.");
          }, n.set = function(e) {
            for (var i in e) this[i] = e[i];
            return this;
          }, createjs.LoadItem = t;
        }(), this.createjs = this.createjs || {}, function() {
          var o = {};
          o.POST = "POST", o.GET = "GET", createjs.Methods = o;
        }(), this.createjs = this.createjs || {}, function() {
          var o = {};
          o.BINARY = "binary", o.CSS = "css", o.FONT = "font", o.FONTCSS = "fontcss", o.IMAGE = "image", o.JAVASCRIPT = "javascript", o.JSON = "json", o.JSONP = "jsonp", o.MANIFEST = "manifest", o.SOUND = "sound", o.VIDEO = "video", o.SPRITESHEET = "spritesheet", o.SVG = "svg", o.TEXT = "text", o.XML = "xml", createjs.Types = o;
        }(), function() {
          var o = {};
          o.a = function() {
            return o.el("a");
          }, o.svg = function() {
            return o.el("svg");
          }, o.object = function() {
            return o.el("object");
          }, o.image = function() {
            return o.el("image");
          }, o.img = function() {
            return o.el("img");
          }, o.style = function() {
            return o.el("style");
          }, o.link = function() {
            return o.el("link");
          }, o.script = function() {
            return o.el("script");
          }, o.audio = function() {
            return o.el("audio");
          }, o.video = function() {
            return o.el("video");
          }, o.text = function(n) {
            return document.createTextNode(n);
          }, o.el = function(n) {
            return document.createElement(n);
          }, createjs.Elements = o;
        }(), function() {
          var o = { container: null };
          o.appendToHead = function(n) {
            o.getHead().appendChild(n);
          }, o.appendToBody = function(n) {
            if (o.container == null) {
              o.container = document.createElement("div"), o.container.id = "preloadjs-container";
              var t = o.container.style;
              t.visibility = "hidden", t.position = "absolute", t.width = o.container.style.height = "10px", t.overflow = "hidden", t.transform = t.msTransform = t.webkitTransform = t.oTransform = "translate(-10px, -10px)", o.getBody().appendChild(o.container);
            }
            o.container.appendChild(n);
          }, o.getHead = function() {
            return document.head || document.getElementsByTagName("head")[0];
          }, o.getBody = function() {
            return document.body || document.getElementsByTagName("body")[0];
          }, o.removeChild = function(n) {
            n.parent && n.parent.removeChild(n);
          }, o.isImageTag = function(n) {
            return n instanceof HTMLImageElement;
          }, o.isAudioTag = function(n) {
            return !!window.HTMLAudioElement && n instanceof HTMLAudioElement;
          }, o.isVideoTag = function(n) {
            return !!window.HTMLVideoElement && n instanceof HTMLVideoElement;
          }, createjs.DomUtils = o;
        }(), function() {
          var o = {};
          o.isBinary = function(n) {
            switch (n) {
              case createjs.Types.IMAGE:
              case createjs.Types.BINARY:
                return !0;
              default:
                return !1;
            }
          }, o.isText = function(n) {
            switch (n) {
              case createjs.Types.TEXT:
              case createjs.Types.JSON:
              case createjs.Types.MANIFEST:
              case createjs.Types.XML:
              case createjs.Types.CSS:
              case createjs.Types.SVG:
              case createjs.Types.JAVASCRIPT:
              case createjs.Types.SPRITESHEET:
                return !0;
              default:
                return !1;
            }
          }, o.getTypeByExtension = function(n) {
            if (n == null) return createjs.Types.TEXT;
            switch (n.toLowerCase()) {
              case "jpeg":
              case "jpg":
              case "gif":
              case "png":
              case "webp":
              case "bmp":
                return createjs.Types.IMAGE;
              case "ogg":
              case "mp3":
              case "webm":
                return createjs.Types.SOUND;
              case "mp4":
              case "webm":
              case "ts":
                return createjs.Types.VIDEO;
              case "json":
                return createjs.Types.JSON;
              case "xml":
                return createjs.Types.XML;
              case "css":
                return createjs.Types.CSS;
              case "js":
                return createjs.Types.JAVASCRIPT;
              case "svg":
                return createjs.Types.SVG;
              default:
                return createjs.Types.TEXT;
            }
          }, createjs.RequestUtils = o;
        }(), function() {
          var o = {};
          o.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, o.RELATIVE_PATT = /^[.\/]*?\//i, o.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, o.parseURI = function(n) {
            var t = { absolute: !1, relative: !1, protocol: null, hostname: null, port: null, pathname: null, search: null, hash: null, host: null };
            if (n == null) return t;
            var e = createjs.Elements.a();
            e.href = n;
            for (var i in t) i in e && (t[i] = e[i]);
            var r = n.indexOf("?");
            r > -1 && (n = n.substr(0, r));
            var a;
            return o.ABSOLUTE_PATT.test(n) ? t.absolute = !0 : o.RELATIVE_PATT.test(n) && (t.relative = !0), (a = n.match(o.EXTENSION_PATT)) && (t.extension = a[1].toLowerCase()), t;
          }, o.formatQueryString = function(n, t) {
            if (n == null) throw new Error("You must specify data.");
            var e = [];
            for (var i in n) e.push(i + "=" + escape(n[i]));
            return t && (e = e.concat(t)), e.join("&");
          }, o.buildURI = function(n, t) {
            if (t == null) return n;
            var e = [], i = n.indexOf("?");
            if (i != -1) {
              var r = n.slice(i + 1);
              e = e.concat(r.split("&"));
            }
            return i != -1 ? n.slice(0, i) + "?" + this.formatQueryString(t, e) : n + "?" + this.formatQueryString(t, e);
          }, o.isCrossDomain = function(n) {
            var t = createjs.Elements.a();
            t.href = n.src;
            var e = createjs.Elements.a();
            return e.href = location.href, t.hostname != "" && (t.port != e.port || t.protocol != e.protocol || t.hostname != e.hostname);
          }, o.isLocal = function(n) {
            var t = createjs.Elements.a();
            return t.href = n.src, t.hostname == "" && t.protocol == "file:";
          }, createjs.URLUtils = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(e, i, r) {
            this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = r, this.resultFormatter = null, this._item = e ? createjs.LoadItem.create(e) : null, this._preferXHR = i, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null;
          }
          var n = createjs.extend(o, createjs.EventDispatcher), t = o;
          try {
            Object.defineProperties(t, { POST: { get: createjs.deprecate(function() {
              return createjs.Methods.POST;
            }, "AbstractLoader.POST") }, GET: { get: createjs.deprecate(function() {
              return createjs.Methods.GET;
            }, "AbstractLoader.GET") }, BINARY: { get: createjs.deprecate(function() {
              return createjs.Types.BINARY;
            }, "AbstractLoader.BINARY") }, CSS: { get: createjs.deprecate(function() {
              return createjs.Types.CSS;
            }, "AbstractLoader.CSS") }, FONT: { get: createjs.deprecate(function() {
              return createjs.Types.FONT;
            }, "AbstractLoader.FONT") }, FONTCSS: { get: createjs.deprecate(function() {
              return createjs.Types.FONTCSS;
            }, "AbstractLoader.FONTCSS") }, IMAGE: { get: createjs.deprecate(function() {
              return createjs.Types.IMAGE;
            }, "AbstractLoader.IMAGE") }, JAVASCRIPT: { get: createjs.deprecate(function() {
              return createjs.Types.JAVASCRIPT;
            }, "AbstractLoader.JAVASCRIPT") }, JSON: { get: createjs.deprecate(function() {
              return createjs.Types.JSON;
            }, "AbstractLoader.JSON") }, JSONP: { get: createjs.deprecate(function() {
              return createjs.Types.JSONP;
            }, "AbstractLoader.JSONP") }, MANIFEST: { get: createjs.deprecate(function() {
              return createjs.Types.MANIFEST;
            }, "AbstractLoader.MANIFEST") }, SOUND: { get: createjs.deprecate(function() {
              return createjs.Types.SOUND;
            }, "AbstractLoader.SOUND") }, VIDEO: { get: createjs.deprecate(function() {
              return createjs.Types.VIDEO;
            }, "AbstractLoader.VIDEO") }, SPRITESHEET: { get: createjs.deprecate(function() {
              return createjs.Types.SPRITESHEET;
            }, "AbstractLoader.SPRITESHEET") }, SVG: { get: createjs.deprecate(function() {
              return createjs.Types.SVG;
            }, "AbstractLoader.SVG") }, TEXT: { get: createjs.deprecate(function() {
              return createjs.Types.TEXT;
            }, "AbstractLoader.TEXT") }, XML: { get: createjs.deprecate(function() {
              return createjs.Types.XML;
            }, "AbstractLoader.XML") } });
          } catch {
          }
          n.getItem = function() {
            return this._item;
          }, n.getResult = function(e) {
            return e ? this._rawResult : this._result;
          }, n.getTag = function() {
            return this._tag;
          }, n.setTag = function(e) {
            this._tag = e;
          }, n.load = function() {
            this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
            var e = new createjs.Event("initialize");
            e.loader = this._request, this.dispatchEvent(e), this._request.load();
          }, n.cancel = function() {
            this.canceled = !0, this.destroy();
          }, n.destroy = function() {
            this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners();
          }, n.getLoadedItems = function() {
            return this._loadedItems;
          }, n._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
          }, n._createTag = function(e) {
            return null;
          }, n._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart");
          }, n._sendProgress = function(e) {
            if (!this._isCanceled()) {
              var i = null;
              typeof e == "number" ? (this.progress = e, i = new createjs.ProgressEvent(this.progress)) : (i = e, this.progress = e.loaded / e.total, i.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(i);
            }
          }, n._sendComplete = function() {
            if (!this._isCanceled()) {
              this.loaded = !0;
              var e = new createjs.Event("complete");
              e.rawResult = this._rawResult, this._result != null && (e.result = this._result), this.dispatchEvent(e);
            }
          }, n._sendError = function(e) {
            !this._isCanceled() && this.hasEventListener("error") && (e == null && (e = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(e));
          }, n._isCanceled = function() {
            return !(window.createjs != null && !this.canceled);
          }, n.resultFormatter = null, n.handleEvent = function(e) {
            switch (e.type) {
              case "complete":
                this._rawResult = e.target._response;
                var i = this.resultFormatter && this.resultFormatter(this);
                i instanceof Function ? i.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = i || this._rawResult, this._sendComplete());
                break;
              case "progress":
                this._sendProgress(e);
                break;
              case "error":
                this._sendError(e);
                break;
              case "loadstart":
                this._sendLoadStart();
                break;
              case "abort":
              case "timeout":
                this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + e.type.toUpperCase() + "_ERROR"));
            }
          }, n._resultFormatSuccess = function(e) {
            this._result = e, this._sendComplete();
          }, n._resultFormatFailed = function(e) {
            this._sendError(e);
          }, n.toString = function() {
            return "[PreloadJS AbstractLoader]";
          }, createjs.AbstractLoader = createjs.promote(o, "EventDispatcher");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i) {
            this.AbstractLoader_constructor(t, e, i), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this);
          }
          var n = createjs.extend(o, createjs.AbstractLoader);
          n.load = function() {
            this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load();
          }, n._createTag = function() {
          }, n._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
          }, n._updateXHR = function(t) {
            t.loader.setResponseType && t.loader.setResponseType("blob");
          }, n._formatResult = function(t) {
            if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
              var e = window.URL || window.webkitURL, i = t.getResult(!0);
              t.getTag().src = e.createObjectURL(i);
            }
            return t.getTag();
          }, createjs.AbstractMediaLoader = createjs.promote(o, "AbstractLoader");
        }(), this.createjs = this.createjs || {}, function() {
          var o = function(t) {
            this._item = t;
          }, n = createjs.extend(o, createjs.EventDispatcher);
          n.load = function() {
          }, n.destroy = function() {
          }, n.cancel = function() {
          }, createjs.AbstractRequest = createjs.promote(o, "EventDispatcher");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i) {
            this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = i, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1;
          }
          var n = createjs.extend(o, createjs.AbstractRequest);
          n.load = function() {
            this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
            var t = new createjs.Event("initialize");
            t.loader = this._tag, this.dispatchEvent(t), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, this._tag.parentNode == null && (createjs.DomUtils.appendToBody(this._tag), this._addedToDOM = !0);
          }, n.destroy = function() {
            this._clean(), this._tag = null, this.AbstractRequest_destroy();
          }, n._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var t = this._tag;
            t.readyState != "loaded" && t.readyState != "complete" || this._handleTagComplete();
          }, n._handleError = function() {
            this._clean(), this.dispatchEvent("error");
          }, n._handleTagComplete = function() {
            this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this.dispatchEvent("complete");
          }, n._handleTimeout = function() {
            this._clean(), this.dispatchEvent(new createjs.Event("timeout"));
          }, n._clean = function() {
            this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && this._tag.parentNode != null && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout);
          }, n._handleStalled = function() {
          }, createjs.TagRequest = createjs.promote(o, "AbstractRequest");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i) {
            this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = i, this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
          }
          var n = createjs.extend(o, createjs.TagRequest);
          n.load = function() {
            var t = createjs.proxy(this._handleStalled, this);
            this._stalledCallback = t;
            var e = createjs.proxy(this._handleProgress, this);
            this._handleProgress = e, this._tag.addEventListener("stalled", t), this._tag.addEventListener("progress", e), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load();
          }, n._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var t = this._tag;
            t.readyState != "loaded" && t.readyState != "complete" || this._handleTagComplete();
          }, n._handleStalled = function() {
          }, n._handleProgress = function(t) {
            if (t && !(t.loaded > 0 && t.total == 0)) {
              var e = new createjs.ProgressEvent(t.loaded, t.total);
              this.dispatchEvent(e);
            }
          }, n._clean = function() {
            this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean();
          }, createjs.MediaTagRequest = createjs.promote(o, "TagRequest");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.AbstractRequest_constructor(t), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), this._createXHR(t);
          }
          var n = createjs.extend(o, createjs.AbstractRequest);
          o.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n.getResult = function(t) {
            return t && this._rawResponse ? this._rawResponse : this._response;
          }, n.cancel = function() {
            this.canceled = !0, this._clean(), this._request.abort();
          }, n.load = function() {
            if (this._request == null) return void this._handleError();
            this._request.addEventListener != null ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), this._xhrLevel == 1 && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
            try {
              this._item.values ? this._request.send(createjs.URLUtils.formatQueryString(this._item.values)) : this._request.send();
            } catch (t) {
              this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, t));
            }
          }, n.setResponseType = function(t) {
            t === "blob" && (t = window.URL ? "blob" : "arraybuffer", this._responseType = t), this._request.responseType = t;
          }, n.getAllResponseHeaders = function() {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null;
          }, n.getResponseHeader = function(t) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(t) : null;
          }, n._handleProgress = function(t) {
            if (t && !(t.loaded > 0 && t.total == 0)) {
              var e = new createjs.ProgressEvent(t.loaded, t.total);
              this.dispatchEvent(e);
            }
          }, n._handleLoadStart = function(t) {
            clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart");
          }, n._handleAbort = function(t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, t));
          }, n._handleError = function(t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent(t.message));
          }, n._handleReadyStateChange = function(t) {
            this._request.readyState == 4 && this._handleLoad();
          }, n._handleLoad = function(t) {
            if (!this.loaded) {
              this.loaded = !0;
              var e = this._checkError();
              if (e) return void this._handleError(e);
              if (this._response = this._getResponse(), this._responseType === "arraybuffer") try {
                this._response = new Blob([this._response]);
              } catch (r) {
                if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, r.name === "TypeError" && window.BlobBuilder) {
                  var i = new BlobBuilder();
                  i.append(this._response), this._response = i.getBlob();
                }
              }
              this._clean(), this.dispatchEvent(new createjs.Event("complete"));
            }
          }, n._handleTimeout = function(t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, t));
          }, n._checkError = function() {
            var t = parseInt(this._request.status);
            return t >= 400 && t <= 599 ? new Error(t) : t == 0 && /^https?:/.test(location.protocol) ? new Error(0) : null;
          }, n._getResponse = function() {
            if (this._response != null) return this._response;
            if (this._request.response != null) return this._request.response;
            try {
              if (this._request.responseText != null) return this._request.responseText;
            } catch {
            }
            try {
              if (this._request.responseXML != null) return this._request.responseXML;
            } catch {
            }
            return null;
          }, n._createXHR = function(t) {
            var e = createjs.URLUtils.isCrossDomain(t), i = {}, r = null;
            if (window.XMLHttpRequest) r = new XMLHttpRequest(), e && r.withCredentials === void 0 && window.XDomainRequest && (r = new XDomainRequest());
            else {
              for (var a = 0, h = s.ACTIVEX_VERSIONS.length; a < h; a++) {
                var l = s.ACTIVEX_VERSIONS[a];
                try {
                  r = new ActiveXObject(l);
                  break;
                } catch {
                }
              }
              if (r == null) return !1;
            }
            t.mimeType == null && createjs.RequestUtils.isText(t.type) && (t.mimeType = "text/plain; charset=utf-8"), t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), this._xhrLevel = typeof r.responseType == "string" ? 2 : 1;
            var c = null;
            if (c = t.method == createjs.Methods.GET ? createjs.URLUtils.buildURI(t.src, t.values) : t.src, r.open(t.method || createjs.Methods.GET, c, !0), e && r instanceof XMLHttpRequest && this._xhrLevel == 1 && (i.Origin = location.origin), t.values && t.method == createjs.Methods.POST && (i["Content-Type"] = "application/x-www-form-urlencoded"), e || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), t.headers) for (var u in t.headers) i[u] = t.headers[u];
            for (u in i) r.setRequestHeader(u, i[u]);
            return r instanceof XMLHttpRequest && t.withCredentials !== void 0 && (r.withCredentials = t.withCredentials), this._request = r, !0;
          }, n._clean = function() {
            clearTimeout(this._loadTimeout), this._request.removeEventListener != null ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null);
          }, n.toString = function() {
            return "[PreloadJS XHRRequest]";
          }, createjs.XHRRequest = createjs.promote(o, "AbstractRequest");
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e) {
            this.AbstractMediaLoader_constructor(t, e, createjs.Types.SOUND), createjs.DomUtils.isAudioTag(t) ? this._tag = t : createjs.DomUtils.isAudioTag(t.src) ? this._tag = t : createjs.DomUtils.isAudioTag(t.tag) && (this._tag = createjs.DomUtils.isAudioTag(t) ? t : t.src), this._tag != null && (this._preferXHR = !1);
          }
          var n = createjs.extend(o, createjs.AbstractMediaLoader);
          o.canLoadItem = function(t) {
            return t.type == createjs.Types.SOUND;
          }, n._createTag = function(t) {
            var e = createjs.Elements.audio();
            return e.autoplay = !1, e.preload = "none", e.src = t, e;
          }, createjs.SoundLoader = createjs.promote(o, "AbstractMediaLoader");
        }(), this.createjs = this.createjs || {}, function() {
          var o = function() {
            this.interrupt = null, this.delay = null, this.offset = null, this.loop = null, this.volume = null, this.pan = null, this.startTime = null, this.duration = null;
          }, n = o.prototype = {}, t = o;
          t.create = function(e) {
            if (typeof e == "string") return console && (console.warn || console.log)("Deprecated behaviour. Sound.play takes a configuration object instead of individual arguments. See docs for info."), new createjs.PlayPropsConfig().set({ interrupt: e });
            if (e == null || e instanceof t || e instanceof Object) return new createjs.PlayPropsConfig().set(e);
            if (e == null) throw new Error("PlayProps configuration not recognized.");
          }, n.set = function(e) {
            if (e != null) for (var i in e) this[i] = e[i];
            return this;
          }, n.toString = function() {
            return "[PlayPropsConfig]";
          }, createjs.PlayPropsConfig = t;
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            throw "Sound cannot be instantiated";
          }
          function n(i, r) {
            this.init(i, r);
          }
          var t = o;
          t.INTERRUPT_ANY = "any", t.INTERRUPT_EARLY = "early", t.INTERRUPT_LATE = "late", t.INTERRUPT_NONE = "none", t.PLAY_INITED = "playInited", t.PLAY_SUCCEEDED = "playSucceeded", t.PLAY_INTERRUPTED = "playInterrupted", t.PLAY_FINISHED = "playFinished", t.PLAY_FAILED = "playFailed", t.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], t.EXTENSION_MAP = { m4a: "mp4" }, t.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, t.defaultInterruptBehavior = t.INTERRUPT_NONE, t.alternateExtensions = [], t.activePlugin = null, t._masterVolume = 1, t._getMasterVolume = function() {
            return this._masterVolume;
          }, t.getVolume = createjs.deprecate(t._getMasterVolume, "Sound.getVolume"), t._setMasterVolume = function(i) {
            if (Number(i) != null && (i = Math.max(0, Math.min(1, i)), t._masterVolume = i, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(i))) for (var r = this._instances, a = 0, h = r.length; a < h; a++) r[a].setMasterVolume(i);
          }, t.setVolume = createjs.deprecate(t._setMasterVolume, "Sound.setVolume"), t._masterMute = !1, t._getMute = function() {
            return this._masterMute;
          }, t.getMute = createjs.deprecate(t._getMute, "Sound.getMute"), t._setMute = function(i) {
            if (i != null && (this._masterMute = i, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(i))) for (var r = this._instances, a = 0, h = r.length; a < h; a++) r[a].setMasterMute(i);
          }, t.setMute = createjs.deprecate(t._setMute, "Sound.setMute"), t._getCapabilities = function() {
            return t.activePlugin == null ? null : t.activePlugin._capabilities;
          }, t.getCapabilities = createjs.deprecate(t._getCapabilities, "Sound.getCapabilities"), Object.defineProperties(t, { volume: { get: t._getMasterVolume, set: t._setMasterVolume }, muted: { get: t._getMute, set: t._setMute }, capabilities: { get: t._getCapabilities } }), t._pluginsRegistered = !1, t._lastID = 0, t._instances = [], t._idHash = {}, t._preloadHash = {}, t._defaultPlayPropsHash = {}, t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t.getPreloadHandlers = function() {
            return { callback: createjs.proxy(t.initLoad, t), types: ["sound"], extensions: t.SUPPORTED_EXTENSIONS };
          }, t._handleLoadComplete = function(i) {
            var r = i.target.getItem().src;
            if (t._preloadHash[r]) for (var a = 0, h = t._preloadHash[r].length; a < h; a++) {
              var l = t._preloadHash[r][a];
              if (t._preloadHash[r][a] = !0, t.hasEventListener("fileload")) {
                var i = new createjs.Event("fileload");
                i.src = l.src, i.id = l.id, i.data = l.data, i.sprite = l.sprite, t.dispatchEvent(i);
              }
            }
          }, t._handleLoadError = function(i) {
            var r = i.target.getItem().src;
            if (t._preloadHash[r]) for (var a = 0, h = t._preloadHash[r].length; a < h; a++) {
              var l = t._preloadHash[r][a];
              if (t._preloadHash[r][a] = !1, t.hasEventListener("fileerror")) {
                var i = new createjs.Event("fileerror");
                i.src = l.src, i.id = l.id, i.data = l.data, i.sprite = l.sprite, t.dispatchEvent(i);
              }
            }
          }, t._registerPlugin = function(i) {
            return !!i.isSupported() && (t.activePlugin = new i(), !0);
          }, t.registerPlugins = function(i) {
            t._pluginsRegistered = !0;
            for (var r = 0, a = i.length; r < a; r++) if (t._registerPlugin(i[r])) return !0;
            return !1;
          }, t.initializeDefaultPlugins = function() {
            return t.activePlugin != null || !t._pluginsRegistered && !!t.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]);
          }, t.isReady = function() {
            return t.activePlugin != null;
          }, t.initLoad = function(i) {
            return i.type == "video" || t._registerSound(i);
          }, t._registerSound = function(i) {
            if (!t.initializeDefaultPlugins()) return !1;
            var r;
            if (i.src instanceof Object ? (r = t._parseSrc(i.src), r.src = i.path + r.src) : r = t._parsePath(i.src), r == null) return !1;
            i.src = r.src, i.type = "sound";
            var a = i.data, h = null;
            if (a != null && (isNaN(a.channels) ? isNaN(a) || (h = parseInt(a)) : h = parseInt(a.channels), a.audioSprite)) for (var l, c = a.audioSprite.length; c--; ) l = a.audioSprite[c], t._idHash[l.id] = { src: i.src, startTime: parseInt(l.startTime), duration: parseInt(l.duration) }, l.defaultPlayProps && (t._defaultPlayPropsHash[l.id] = createjs.PlayPropsConfig.create(l.defaultPlayProps));
            i.id != null && (t._idHash[i.id] = { src: i.src });
            var u = t.activePlugin.register(i);
            return n.create(i.src, h), a != null && isNaN(a) ? i.data.channels = h || n.maxPerChannel() : i.data = h || n.maxPerChannel(), u.type && (i.type = u.type), i.defaultPlayProps && (t._defaultPlayPropsHash[i.src] = createjs.PlayPropsConfig.create(i.defaultPlayProps)), u;
          }, t.registerSound = function(i, r, a, h, l) {
            var c = { src: i, id: r, data: a, defaultPlayProps: l };
            i instanceof Object && i.src && (h = r, c = i), c = createjs.LoadItem.create(c), c.path = h, h == null || c.src instanceof Object || (c.src = h + c.src);
            var u = t._registerSound(c);
            if (!u) return !1;
            if (t._preloadHash[c.src] || (t._preloadHash[c.src] = []), t._preloadHash[c.src].push(c), t._preloadHash[c.src].length == 1) u.on("complete", this._handleLoadComplete, this), u.on("error", this._handleLoadError, this), t.activePlugin.preload(u);
            else if (t._preloadHash[c.src][0] == 1) return !0;
            return c;
          }, t.registerSounds = function(i, r) {
            var a = [];
            i.path && (r ? r += i.path : r = i.path, i = i.manifest);
            for (var h = 0, l = i.length; h < l; h++) a[h] = createjs.Sound.registerSound(i[h].src, i[h].id, i[h].data, r, i[h].defaultPlayProps);
            return a;
          }, t.removeSound = function(i, r) {
            if (t.activePlugin == null) return !1;
            i instanceof Object && i.src && (i = i.src);
            var a;
            if (i instanceof Object ? a = t._parseSrc(i) : (i = t._getSrcById(i).src, a = t._parsePath(i)), a == null) return !1;
            i = a.src, r != null && (i = r + i);
            for (var h in t._idHash) t._idHash[h].src == i && delete t._idHash[h];
            return n.removeSrc(i), delete t._preloadHash[i], t.activePlugin.removeSound(i), !0;
          }, t.removeSounds = function(i, r) {
            var a = [];
            i.path && (r ? r += i.path : r = i.path, i = i.manifest);
            for (var h = 0, l = i.length; h < l; h++) a[h] = createjs.Sound.removeSound(i[h].src, r);
            return a;
          }, t.removeAllSounds = function() {
            t._idHash = {}, t._preloadHash = {}, n.removeAll(), t.activePlugin && t.activePlugin.removeAllSounds();
          }, t.loadComplete = function(i) {
            if (!t.isReady()) return !1;
            var r = t._parsePath(i);
            return i = r ? t._getSrcById(r.src).src : t._getSrcById(i).src, t._preloadHash[i] != null && t._preloadHash[i][0] == 1;
          }, t._parsePath = function(i) {
            typeof i != "string" && (i = i.toString());
            var r = i.match(t.FILE_PATTERN);
            if (r == null) return !1;
            for (var a = r[4], h = r[5], l = t.capabilities, c = 0; !l[h]; ) if (h = t.alternateExtensions[c++], c > t.alternateExtensions.length) return null;
            return i = i.replace("." + r[5], "." + h), { name: a, src: i, extension: h };
          }, t._parseSrc = function(i) {
            var r = { name: void 0, src: void 0, extension: void 0 }, a = t.capabilities;
            for (var h in i) if (i.hasOwnProperty(h) && a[h]) {
              r.src = i[h], r.extension = h;
              break;
            }
            if (!r.src) return !1;
            var l = r.src.lastIndexOf("/");
            return r.name = l != -1 ? r.src.slice(l + 1) : r.src, r;
          }, t.play = function(i, r) {
            var a = createjs.PlayPropsConfig.create(r), h = t.createInstance(i, a.startTime, a.duration);
            return t._playInstance(h, a) || h._playFailed(), h;
          }, t.createInstance = function(i, r, a) {
            if (!t.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(i, r, a);
            var h = t._defaultPlayPropsHash[i];
            i = t._getSrcById(i);
            var l = t._parsePath(i.src), c = null;
            return l != null && l.src != null ? (n.create(l.src), r == null && (r = i.startTime), c = t.activePlugin.create(l.src, r, a || i.duration), (h = h || t._defaultPlayPropsHash[l.src]) && c.applyPlayProps(h)) : c = new createjs.DefaultSoundInstance(i, r, a), c.uniqueId = t._lastID++, c;
          }, t.stop = function() {
            for (var i = this._instances, r = i.length; r--; ) i[r].stop();
          }, t.setDefaultPlayProps = function(i, r) {
            i = t._getSrcById(i), t._defaultPlayPropsHash[t._parsePath(i.src).src] = createjs.PlayPropsConfig.create(r);
          }, t.getDefaultPlayProps = function(i) {
            return i = t._getSrcById(i), t._defaultPlayPropsHash[t._parsePath(i.src).src];
          }, t._playInstance = function(i, r) {
            var a = t._defaultPlayPropsHash[i.src] || {};
            if (r.interrupt == null && (r.interrupt = a.interrupt || t.defaultInterruptBehavior), r.delay == null && (r.delay = a.delay || 0), r.offset == null && (r.offset = i.position), r.loop == null && (r.loop = i.loop), r.volume == null && (r.volume = i.volume), r.pan == null && (r.pan = i.pan), r.delay == 0) {
              if (!t._beginPlaying(i, r)) return !1;
            } else {
              var h = setTimeout(function() {
                t._beginPlaying(i, r);
              }, r.delay);
              i.delayTimeoutId = h;
            }
            return this._instances.push(i), !0;
          }, t._beginPlaying = function(i, r) {
            if (!n.add(i, r.interrupt)) return !1;
            if (!i._beginPlaying(r)) {
              var a = createjs.indexOf(this._instances, i);
              return a > -1 && this._instances.splice(a, 1), !1;
            }
            return !0;
          }, t._getSrcById = function(i) {
            return t._idHash[i] || { src: i };
          }, t._playFinished = function(i) {
            n.remove(i);
            var r = createjs.indexOf(this._instances, i);
            r > -1 && this._instances.splice(r, 1);
          }, createjs.Sound = o, n.channels = {}, n.create = function(i, r) {
            return n.get(i) == null && (n.channels[i] = new n(i, r), !0);
          }, n.removeSrc = function(i) {
            var r = n.get(i);
            return r != null && (r._removeAll(), delete n.channels[i], !0);
          }, n.removeAll = function() {
            for (var i in n.channels) n.channels[i]._removeAll();
            n.channels = {};
          }, n.add = function(i, r) {
            var a = n.get(i.src);
            return a != null && a._add(i, r);
          }, n.remove = function(i) {
            var r = n.get(i.src);
            return r != null && (r._remove(i), !0);
          }, n.maxPerChannel = function() {
            return e.maxDefault;
          }, n.get = function(i) {
            return n.channels[i];
          };
          var e = n.prototype;
          e.constructor = n, e.src = null, e.max = null, e.maxDefault = 100, e.length = 0, e.init = function(i, r) {
            this.src = i, this.max = r || this.maxDefault, this.max == -1 && (this.max = this.maxDefault), this._instances = [];
          }, e._get = function(i) {
            return this._instances[i];
          }, e._add = function(i, r) {
            return !!this._getSlot(r, i) && (this._instances.push(i), this.length++, !0);
          }, e._remove = function(i) {
            var r = createjs.indexOf(this._instances, i);
            return r != -1 && (this._instances.splice(r, 1), this.length--, !0);
          }, e._removeAll = function() {
            for (var i = this.length - 1; i >= 0; i--) this._instances[i].stop();
          }, e._getSlot = function(i, r) {
            var a, h;
            if (i != o.INTERRUPT_NONE && (h = this._get(0)) == null) return !0;
            for (var l = 0, c = this.max; l < c; l++) {
              if ((a = this._get(l)) == null) return !0;
              if (a.playState == o.PLAY_FINISHED || a.playState == o.PLAY_INTERRUPTED || a.playState == o.PLAY_FAILED) {
                h = a;
                break;
              }
              i != o.INTERRUPT_NONE && (i == o.INTERRUPT_EARLY && a.position < h.position || i == o.INTERRUPT_LATE && a.position > h.position) && (h = a);
            }
            return h != null && (h._interrupt(), this._remove(h), !0);
          }, e.toString = function() {
            return "[Sound SoundChannel]";
          };
        }(), this.createjs = this.createjs || {}, function() {
          var o = function(t, e, i, r) {
            this.EventDispatcher_constructor(), this.src = t, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._volume = 1, Object.defineProperty(this, "volume", { get: this._getVolume, set: this._setVolume }), this._pan = 0, Object.defineProperty(this, "pan", { get: this._getPan, set: this._setPan }), this._startTime = Math.max(0, e || 0), Object.defineProperty(this, "startTime", { get: this._getStartTime, set: this._setStartTime }), this._duration = Math.max(0, i || 0), Object.defineProperty(this, "duration", { get: this._getDuration, set: this._setDuration }), this._playbackResource = null, Object.defineProperty(this, "playbackResource", { get: this._getPlaybackResource, set: this._setPlaybackResource }), r !== !1 && r !== !0 && this._setPlaybackResource(r), this._position = 0, Object.defineProperty(this, "position", { get: this._getPosition, set: this._setPosition }), this._loop = 0, Object.defineProperty(this, "loop", { get: this._getLoop, set: this._setLoop }), this._muted = !1, Object.defineProperty(this, "muted", { get: this._getMuted, set: this._setMuted }), this._paused = !1, Object.defineProperty(this, "paused", { get: this._getPaused, set: this._setPaused });
          }, n = createjs.extend(o, createjs.EventDispatcher);
          n.play = function(t) {
            var e = createjs.PlayPropsConfig.create(t);
            return this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(e), void (this._paused && this._setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, e), this);
          }, n.stop = function() {
            return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this;
          }, n.destroy = function() {
            this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners();
          }, n.applyPlayProps = function(t) {
            return t.offset != null && this._setPosition(t.offset), t.loop != null && this._setLoop(t.loop), t.volume != null && this._setVolume(t.volume), t.pan != null && this._setPan(t.pan), t.startTime != null && (this._setStartTime(t.startTime), this._setDuration(t.duration)), this;
          }, n.toString = function() {
            return "[AbstractSoundInstance]";
          }, n._getPaused = function() {
            return this._paused;
          }, n._setPaused = function(t) {
            if (!(t !== !0 && t !== !1 || this._paused == t || t == 1 && this.playState != createjs.Sound.PLAY_SUCCEEDED)) return this._paused = t, t ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this;
          }, n._setVolume = function(t) {
            return t == this._volume ? this : (this._volume = Math.max(0, Math.min(1, t)), this._muted || this._updateVolume(), this);
          }, n._getVolume = function() {
            return this._volume;
          }, n._setMuted = function(t) {
            if (t === !0 || t === !1) return this._muted = t, this._updateVolume(), this;
          }, n._getMuted = function() {
            return this._muted;
          }, n._setPan = function(t) {
            return t == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, t)), this._updatePan(), this);
          }, n._getPan = function() {
            return this._pan;
          }, n._getPosition = function() {
            return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position;
          }, n._setPosition = function(t) {
            return this._position = Math.max(0, t), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this;
          }, n._getStartTime = function() {
            return this._startTime;
          }, n._setStartTime = function(t) {
            return t == this._startTime ? this : (this._startTime = Math.max(0, t || 0), this._updateStartTime(), this);
          }, n._getDuration = function() {
            return this._duration;
          }, n._setDuration = function(t) {
            return t == this._duration ? this : (this._duration = Math.max(0, t || 0), this._updateDuration(), this);
          }, n._setPlaybackResource = function(t) {
            return this._playbackResource = t, this._duration == 0 && this._playbackResource && this._setDurationFromSource(), this;
          }, n._getPlaybackResource = function() {
            return this._playbackResource;
          }, n._getLoop = function() {
            return this._loop;
          }, n._setLoop = function(t) {
            this._playbackResource != null && (this._loop != 0 && t == 0 ? this._removeLooping(t) : this._loop == 0 && t != 0 && this._addLooping(t)), this._loop = t;
          }, n._sendEvent = function(t) {
            var e = new createjs.Event(t);
            this.dispatchEvent(e);
          }, n._cleanUp = function() {
            clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this);
          }, n._interrupt = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted");
          }, n._beginPlaying = function(t) {
            return this._setPosition(t.offset), this._setLoop(t.loop), this._setVolume(t.volume), this._setPan(t.pan), t.startTime != null && (this._setStartTime(t.startTime), this._setDuration(t.duration)), this._playbackResource != null && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1);
          }, n._playFailed = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed");
          }, n._handleSoundComplete = function(t) {
            if (this._position = 0, this._loop != 0) return this._loop--, this._handleLoop(), void this._sendEvent("loop");
            this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this._sendEvent("complete");
          }, n._handleSoundReady = function() {
          }, n._updateVolume = function() {
          }, n._updatePan = function() {
          }, n._updateStartTime = function() {
          }, n._updateDuration = function() {
          }, n._setDurationFromSource = function() {
          }, n._calculateCurrentPosition = function() {
          }, n._updatePosition = function() {
          }, n._removeLooping = function(t) {
          }, n._addLooping = function(t) {
          }, n._pause = function() {
          }, n._resume = function() {
          }, n._handleStop = function() {
          }, n._handleCleanUp = function() {
          }, n._handleLoop = function() {
          }, createjs.AbstractSoundInstance = createjs.promote(o, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance;
        }(), this.createjs = this.createjs || {}, function() {
          var o = function() {
            this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._volume = 1, this._loaderClass, this._soundInstanceClass;
          }, n = o.prototype;
          o._capabilities = null, o.isSupported = function() {
            return !0;
          }, n.register = function(t) {
            var e = this._loaders[t.src];
            return e && !e.canceled ? this._loaders[t.src] : (this._audioSources[t.src] = !0, this._soundInstances[t.src] = [], e = new this._loaderClass(t), e.on("complete", this._handlePreloadComplete, this), this._loaders[t.src] = e, e);
          }, n.preload = function(t) {
            t.on("error", this._handlePreloadError, this), t.load();
          }, n.isPreloadStarted = function(t) {
            return this._audioSources[t] != null;
          }, n.isPreloadComplete = function(t) {
            return !(this._audioSources[t] == null || this._audioSources[t] == 1);
          }, n.removeSound = function(t) {
            if (this._soundInstances[t]) {
              for (var e = this._soundInstances[t].length; e--; )
                this._soundInstances[t][e].destroy();
              delete this._soundInstances[t], delete this._audioSources[t], this._loaders[t] && this._loaders[t].destroy(), delete this._loaders[t];
            }
          }, n.removeAllSounds = function() {
            for (var t in this._audioSources) this.removeSound(t);
          }, n.create = function(t, e, i) {
            this.isPreloadStarted(t) || this.preload(this.register(t));
            var r = new this._soundInstanceClass(t, e, i, this._audioSources[t]);
            return this._soundInstances[t] && this._soundInstances[t].push(r), r.setMasterVolume && r.setMasterVolume(createjs.Sound.volume), r.setMasterMute && r.setMasterMute(createjs.Sound.muted), r;
          }, n.setVolume = function(t) {
            return this._volume = t, this._updateVolume(), !0;
          }, n.getVolume = function() {
            return this._volume;
          }, n.setMute = function(t) {
            return this._updateVolume(), !0;
          }, n.toString = function() {
            return "[AbstractPlugin]";
          }, n._handlePreloadComplete = function(t) {
            var e = t.target.getItem().src;
            this._audioSources[e] = t.result;
            for (var i = 0, r = this._soundInstances[e].length; i < r; i++)
              this._soundInstances[e][i].setPlaybackResource(this._audioSources[e]), this._soundInstances[e] = null;
          }, n._handlePreloadError = function(t) {
          }, n._updateVolume = function() {
          }, createjs.AbstractPlugin = o;
        }(), this.createjs = this.createjs || {}, function() {
          function o(t) {
            this.AbstractLoader_constructor(t, !0, createjs.Types.SOUND);
          }
          var n = createjs.extend(o, createjs.AbstractLoader);
          o.context = null, n.toString = function() {
            return "[WebAudioLoader]";
          }, n._createRequest = function() {
            this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer");
          }, n._sendComplete = function(t) {
            o.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this));
          }, n._handleAudioDecoded = function(t) {
            this._result = t, this.AbstractLoader__sendComplete();
          }, createjs.WebAudioLoader = createjs.promote(o, "AbstractLoader");
        }(), this.createjs = this.createjs || {}, function() {
          function o(e, i, r, a) {
            this.AbstractSoundInstance_constructor(e, i, r, a), this.gainNode = t.context.createGain(), this.panNode = t.context.createPanner(), this.panNode.panningModel = t._panningModel, this.panNode.connect(this.gainNode), this._updatePan(), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
          }
          var n = createjs.extend(o, createjs.AbstractSoundInstance), t = o;
          t.context = null, t._scratchBuffer = null, t.destinationNode = null, t._panningModel = "equalpower", n.destroy = function() {
            this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null;
          }, n.toString = function() {
            return "[WebAudioSoundInstance]";
          }, n._updatePan = function() {
            this.panNode.setPosition(this._pan, 0, -0.5);
          }, n._removeLooping = function(e) {
            this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
          }, n._addLooping = function(e) {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0));
          }, n._setDurationFromSource = function() {
            this._duration = 1e3 * this.playbackResource.duration;
          }, n._handleCleanUp = function() {
            this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), this.gainNode.numberOfOutputs != 0 && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0;
          }, n._cleanUpAudioNode = function(e) {
            if (e) {
              if (e.stop(0), e.disconnect(0), createjs.BrowserDetect.isIOS) try {
                e.buffer = t._scratchBuffer;
              } catch {
              }
              e = null;
            }
            return e;
          }, n._handleSoundReady = function(e) {
            this.gainNode.connect(t.destinationNode);
            var i = 1e-3 * this._duration, r = Math.min(1e-3 * Math.max(0, this._position), i);
            this.sourceNode = this._createAndPlayAudioNode(t.context.currentTime - i, r), this._playbackStartTime = this.sourceNode.startTime - r, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (i - r)), this._loop != 0 && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0));
          }, n._createAndPlayAudioNode = function(e, i) {
            var r = t.context.createBufferSource();
            r.buffer = this.playbackResource, r.connect(this.panNode);
            var a = 1e-3 * this._duration;
            return r.startTime = e + a, r.start(r.startTime, i + 1e-3 * this._startTime, a - i), r;
          }, n._pause = function() {
            this._position = 1e3 * (t.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), this.gainNode.numberOfOutputs != 0 && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout);
          }, n._resume = function() {
            this._handleSoundReady();
          }, n._updateVolume = function() {
            var e = this._muted ? 0 : this._volume;
            e != this.gainNode.gain.value && (this.gainNode.gain.value = e);
          }, n._calculateCurrentPosition = function() {
            return 1e3 * (t.context.currentTime - this._playbackStartTime);
          }, n._updatePosition = function() {
            this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady();
          }, n._handleLoop = function() {
            this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration);
          }, n._updateDuration = function() {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume());
          }, createjs.WebAudioSoundInstance = createjs.promote(o, "AbstractSoundInstance");
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            this.AbstractPlugin_constructor(), this._panningModel = t._panningModel, this.context = t.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = t._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses();
          }
          var n = createjs.extend(o, createjs.AbstractPlugin), t = o;
          t._capabilities = null, t._panningModel = "equalpower", t.context = null, t._scratchBuffer = null, t._unlocked = !1, t.DEFAULT_SAMPLE_RATE = 44100, t.isSupported = function() {
            var e = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
            return !(location.protocol == "file:" && !e && !this._isFileXHRSupported()) && (t._generateCapabilities(), t.context != null);
          }, t.playEmptySound = function() {
            if (t.context != null) {
              var e = t.context.createBufferSource();
              e.buffer = t._scratchBuffer, e.connect(t.context.destination), e.start(0, 0, 0);
            }
          }, t._isFileXHRSupported = function() {
            var e = !0, i = new XMLHttpRequest();
            try {
              i.open("GET", "WebAudioPluginTest.fail", !1);
            } catch {
              return e = !1;
            }
            i.onerror = function() {
              e = !1;
            }, i.onload = function() {
              e = this.status == 404 || this.status == 200 || this.status == 0 && this.response != "";
            };
            try {
              i.send();
            } catch {
              e = !1;
            }
            return e;
          }, t._generateCapabilities = function() {
            if (t._capabilities == null) {
              var e = document.createElement("audio");
              if (e.canPlayType == null || t.context == null && (t.context = t._createAudioContext(), t.context == null)) return null;
              t._scratchBuffer == null && (t._scratchBuffer = t.context.createBuffer(1, 1, 22050)), t._compatibilitySetUp(), "ontouchstart" in window && t.context.state != "running" && (t._unlock(), document.addEventListener("mousedown", t._unlock, !0), document.addEventListener("touchstart", t._unlock, !0), document.addEventListener("touchend", t._unlock, !0)), t._capabilities = { panning: !0, volume: !0, tracks: -1 };
              for (var i = createjs.Sound.SUPPORTED_EXTENSIONS, r = createjs.Sound.EXTENSION_MAP, a = 0, h = i.length; a < h; a++) {
                var l = i[a], c = r[l] || l;
                t._capabilities[l] = e.canPlayType("audio/" + l) != "no" && e.canPlayType("audio/" + l) != "" || e.canPlayType("audio/" + c) != "no" && e.canPlayType("audio/" + c) != "";
              }
              t.context.destination.numberOfChannels < 2 && (t._capabilities.panning = !1);
            }
          }, t._createAudioContext = function() {
            var e = window.AudioContext || window.webkitAudioContext;
            if (e == null) return null;
            var i = new e();
            if (/(iPhone|iPad)/i.test(navigator.userAgent) && i.sampleRate !== t.DEFAULT_SAMPLE_RATE) {
              var r = i.createBuffer(1, 1, t.DEFAULT_SAMPLE_RATE), a = i.createBufferSource();
              a.buffer = r, a.connect(i.destination), a.start(0), a.disconnect(), i.close(), i = new e();
            }
            return i;
          }, t._compatibilitySetUp = function() {
            if (t._panningModel = "equalpower", !t.context.createGain) {
              t.context.createGain = t.context.createGainNode;
              var e = t.context.createBufferSource();
              e.__proto__.start = e.__proto__.noteGrainOn, e.__proto__.stop = e.__proto__.noteOff, t._panningModel = 0;
            }
          }, t._unlock = function() {
            t._unlocked || (t.playEmptySound(), t.context.state == "running" && (document.removeEventListener("mousedown", t._unlock, !0), document.removeEventListener("touchend", t._unlock, !0), document.removeEventListener("touchstart", t._unlock, !0), t._unlocked = !0));
          }, n.toString = function() {
            return "[WebAudioPlugin]";
          }, n._addPropsToClasses = function() {
            var e = this._soundInstanceClass;
            e.context = this.context, e._scratchBuffer = t._scratchBuffer, e.destinationNode = this.gainNode, e._panningModel = this._panningModel, this._loaderClass.context = this.context;
          }, n._updateVolume = function() {
            var e = createjs.Sound._masterMute ? 0 : this._volume;
            e != this.gainNode.gain.value && (this.gainNode.gain.value = e);
          }, createjs.WebAudioPlugin = createjs.promote(o, "AbstractPlugin");
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            throw "HTMLAudioTagPool cannot be instantiated";
          }
          function n(i) {
            this._tags = [];
          }
          var t = o;
          t._tags = {}, t._tagPool = new n(), t._tagUsed = {}, t.get = function(i) {
            var r = t._tags[i];
            return r == null ? (r = t._tags[i] = t._tagPool.get(), r.src = i) : t._tagUsed[i] ? (r = t._tagPool.get(), r.src = i) : t._tagUsed[i] = !0, r;
          }, t.set = function(i, r) {
            r == t._tags[i] ? t._tagUsed[i] = !1 : t._tagPool.set(r);
          }, t.remove = function(i) {
            var r = t._tags[i];
            return r != null && (t._tagPool.set(r), delete t._tags[i], delete t._tagUsed[i], !0);
          }, t.getDuration = function(i) {
            var r = t._tags[i];
            return r != null && r.duration ? 1e3 * r.duration : 0;
          }, createjs.HTMLAudioTagPool = o;
          var e = n.prototype;
          e.constructor = n, e.get = function() {
            var i;
            return i = this._tags.length == 0 ? this._createTag() : this._tags.pop(), i.parentNode == null && document.body.appendChild(i), i;
          }, e.set = function(i) {
            createjs.indexOf(this._tags, i) == -1 && (this._tags.src = null, this._tags.push(i));
          }, e.toString = function() {
            return "[TagPool]";
          }, e._createTag = function() {
            var i = document.createElement("audio");
            return i.autoplay = !1, i.preload = "none", i;
          };
        }(), this.createjs = this.createjs || {}, function() {
          function o(t, e, i, r) {
            this.AbstractSoundInstance_constructor(t, e, i, r), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this._playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), i ? this._audioSpriteStopTime = 1e-3 * (e + i) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src);
          }
          var n = createjs.extend(o, createjs.AbstractSoundInstance);
          n.setMasterVolume = function(t) {
            this._updateVolume();
          }, n.setMasterMute = function(t) {
            this._updateVolume();
          }, n.toString = function() {
            return "[HTMLAudioSoundInstance]";
          }, n._removeLooping = function() {
            this._playbackResource != null && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1));
          }, n._addLooping = function() {
            this._playbackResource == null || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0);
          }, n._handleCleanUp = function() {
            var t = this._playbackResource;
            if (t != null) {
              t.pause(), t.loop = !1, t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
              try {
                t.currentTime = this._startTime;
              } catch {
              }
              createjs.HTMLAudioTagPool.set(this.src, t), this._playbackResource = null;
            }
          }, n._beginPlaying = function(t) {
            return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(t);
          }, n._handleSoundReady = function(t) {
            if (this._playbackResource.readyState !== 4) {
              var e = this._playbackResource;
              return e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), e.preload = "auto", void e.load();
            }
            this._updateVolume(), this._playbackResource.currentTime = 1e-3 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._loop != 0 && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play();
          }, n._handleTagReady = function(t) {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady();
          }, n._pause = function() {
            this._playbackResource.pause();
          }, n._resume = function() {
            this._playbackResource.play();
          }, n._updateVolume = function() {
            if (this._playbackResource != null) {
              var t = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
              t != this._playbackResource.volume && (this._playbackResource.volume = t);
            }
          }, n._calculateCurrentPosition = function() {
            return 1e3 * this._playbackResource.currentTime - this._startTime;
          }, n._updatePosition = function() {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
            try {
              this._playbackResource.currentTime = 1e-3 * (this._position + this._startTime);
            } catch {
              this._handleSetPositionSeek(null);
            }
          }, n._handleSetPositionSeek = function(t) {
            this._playbackResource != null && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1));
          }, n._handleAudioSpriteLoop = function(t) {
            this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), this._loop == 0 ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = 1e-3 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")));
          }, n._handleLoop = function(t) {
            this._loop == 0 && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1));
          }, n._updateStartTime = function() {
            this._audioSpriteStopTime = 1e-3 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1));
          }, n._updateDuration = function() {
            this._audioSpriteStopTime = 1e-3 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1));
          }, n._setDurationFromSource = function() {
            this._duration = createjs.HTMLAudioTagPool.getDuration(this.src), this._playbackResource = null;
          }, createjs.HTMLAudioSoundInstance = createjs.promote(o, "AbstractSoundInstance");
        }(), this.createjs = this.createjs || {}, function() {
          function o() {
            this.AbstractPlugin_constructor(), this._capabilities = t._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance;
          }
          var n = createjs.extend(o, createjs.AbstractPlugin), t = o;
          t.MAX_INSTANCES = 30, t._AUDIO_READY = "canplaythrough", t._AUDIO_ENDED = "ended", t._AUDIO_SEEKED = "seeked", t._AUDIO_STALLED = "stalled", t._TIME_UPDATE = "timeupdate", t._capabilities = null, t.isSupported = function() {
            return t._generateCapabilities(), t._capabilities != null;
          }, t._generateCapabilities = function() {
            if (t._capabilities == null) {
              var e = document.createElement("audio");
              if (e.canPlayType == null) return null;
              t._capabilities = { panning: !1, volume: !0, tracks: -1 };
              for (var i = createjs.Sound.SUPPORTED_EXTENSIONS, r = createjs.Sound.EXTENSION_MAP, a = 0, h = i.length; a < h; a++) {
                var l = i[a], c = r[l] || l;
                t._capabilities[l] = e.canPlayType("audio/" + l) != "no" && e.canPlayType("audio/" + l) != "" || e.canPlayType("audio/" + c) != "no" && e.canPlayType("audio/" + c) != "";
              }
            }
          }, n.register = function(e) {
            var i = createjs.HTMLAudioTagPool.get(e.src), r = this.AbstractPlugin_register(e);
            return r.setTag(i), r;
          }, n.removeSound = function(e) {
            this.AbstractPlugin_removeSound(e), createjs.HTMLAudioTagPool.remove(e);
          }, n.create = function(e, i, r) {
            var a = this.AbstractPlugin_create(e, i, r);
            return a.playbackResource = null, a;
          }, n.toString = function() {
            return "[HTMLAudioPlugin]";
          }, n.setVolume = n.getVolume = n.setMute = null, createjs.HTMLAudioPlugin = createjs.promote(o, "AbstractPlugin");
        }();
      }).call(window);
    }, , , , , , , , , , , , , function(_, y, o) {
      o(1), o(2), o(3), o(7), _.exports = o(0);
    }]);
  });
})(xe);
var Oe = xe.exports;
const it = /* @__PURE__ */ De(Oe);
function ke(f, p, _) {
  let y = function(e, i, r) {
    e.moveTo(i.x, i.y), e.lineTo(r.x, r.y);
  }, o = function(e, i, r) {
    let a = 0, h = 0, l, c, u, d = 60 * Math.PI / 180;
    a = i;
    let g = r.x - u * 4 + 10 * Math.cos(d), v = r.y + 10 * Math.sin(d);
    if (a > 0 && a < 20)
      for (h = Math.floor(a / 4) + 1, u = 0; u < h; u++)
        l = new it.Point(r.x - u * 4, r.y), h - 1 == u ? a % 4 >= 2 && (g = r.x - u * 4 + 6 * Math.cos(d), v = r.y + 6 * Math.sin(d), c = new it.Point(g, v), y(e, l, c)) : (g = r.x - u * 4 + 12 * Math.cos(d), v = r.y + 12 * Math.sin(d), c = new it.Point(g, v), y(e, l, c));
    else if (a <= 36)
      for (l = new it.Point(r.x, r.y), g = r.x - 4 + 12 * Math.cos(d), v = r.y + 12 * Math.sin(d), c = new it.Point(g, v), y(e, l, c), l = new it.Point(r.x - 4, r.y), c = new it.Point(g, v), y(e, l, c), h = Math.floor((a - 20) / 4) + 1, u = 0; u < h; u++)
        l = new it.Point(r.x - 7 - u * 4, r.y), h - 1 == u ? a % 4 >= 2 && (g = r.x - 7 - u * 4 + 6 * Math.cos(d), v = r.y + 6 * Math.sin(d), c = new it.Point(g, v), y(e, l, c)) : (g = r.x - 7 - u * 4 + 12 * Math.cos(d), v = r.y + 12 * Math.sin(d), c = new it.Point(g, v), y(e, l, c));
  }, n = 2 * Math.ceil(f / 2), t = p;
  _.graphics.setStrokeStyle(1), _.graphics.beginStroke("#0000ff"), n == 2 ? (y(_.graphics, new it.Point(0, 0), new it.Point(16, 0)), o(_.graphics, n, new it.Point(13, 0))) : (y(_.graphics, new it.Point(0, 0), new it.Point(20, 0)), o(_.graphics, n, new it.Point(20, 0))), _.rotation = -90 + t;
}
class pe {
  constructor() {
    this.lineList = [];
  }
  getLineNum() {
    return this.lineList.length;
  }
}
class ut {
  constructor(p, _, y, o) {
    this.xMin = p, this.xMax = _, this.yMin = y, this.yMax = o;
  }
  include(p) {
    return this.xMin <= p.xMin && this.xMax >= p.xMax && this.yMin <= p.yMin && this.yMax >= p.yMax;
  }
}
class Ne {
  constructor() {
    this.extent = new ut(), this.pointList = [], this.ijPointList = [];
  }
}
class tt {
  constructor(p = 0, _ = 0) {
    this.x = p, this.y = _;
  }
  clone() {
    return new tt(this.x, this.y);
  }
}
class dt {
  constructor() {
    this.point = new tt();
  }
  clone() {
    let p = new dt();
    return p.id = this.id, p.borderIdx = this.borderIdx, p.bInnerIdx = this.bInnerIdx, p.point = this.point, p.value = this.value, p;
  }
}
class Fe {
  constructor() {
    this.sPoint = new tt(), this.point = new tt();
  }
}
class ge {
  constructor(p, _) {
    this.i = p, this.j = _;
  }
}
class Tt {
  constructor() {
    this.pointList = [];
  }
}
function me(f, p) {
  let _ = Math.abs(f * 1e-5);
  return Math.abs(f - p) <= _;
}
function ve(f, p, _) {
  let y = (p.y - f.y) / (p.x - f.x), o = (y * y * f.x + y * (_.y - f.y) + _.x) / (y * y + 1), n = y * (o - f.x) + f.y;
  return Math.sqrt((_.y - n) * (_.y - n) + (_.x - o) * (_.x - o));
}
function Be(f) {
  let p, _, y, o, n, t = f[0];
  for (p = t.x, y = t.x, _ = t.y, o = t.y, n = 1; n < f.length; n++)
    t = f[n], t.x < p && (p = t.x), t.x > y && (y = t.x), t.y < _ && (_ = t.y), t.y > o && (o = t.y);
  let e = new ut();
  return e.xMin = p, e.yMin = _, e.xMax = y, e.yMax = o, e;
}
function _t(f, p) {
  let _, y, o, n, t, e, i = f[0];
  for (y = i.x, n = i.x, o = i.y, t = i.y, e = 1; e < f.length; e++)
    i = f[e], i.x < y && (y = i.x), i.x > n && (n = i.x), i.y < o && (o = i.y), i.y > t && (t = i.y);
  return p.xMin = y, p.yMin = o, p.xMax = n, p.yMax = t, _ = (n - y) * (t - o), _;
}
function gt(f) {
  let p, _, y = 0, o = 0;
  for (p = 0; p < f.length - 1; p++)
    _ = f[p], p === 0 ? (y = _.y, o = 0) : y < _.y && (y = _.y, o = p);
  let n, t, e, i, r, a;
  return i = o - 1, r = o, a = o + 1, o === 0 && (i = f.length - 2), n = f[i], t = f[r], e = f[a], (e.x - n.x) * (t.y - n.y) - (t.x - n.x) * (e.y - n.y) > 0;
}
function ft(f, p) {
  let _ = !1, y = f.length;
  if (y < 3)
    return !1;
  let o = f[y - 1].x, n = f[y - 1].y, t, e, i, r;
  for (let a = 0; a < y; a++) {
    const h = f[a].x, l = f[a].y;
    h > o ? (t = o, i = h, e = n, r = l) : (t = h, i = o, e = l, r = n), h < p.x == p.x <= o && (p.y - e) * (i - t) < (r - e) * (p.x - t) && (_ = !_), o = h, n = l;
  }
  return _;
}
function Ue(f, p, _, y) {
  let o, n, t = [], e, i, r;
  if (f.length === 0) {
    let u = _[0].value, d = _[0].value;
    for (let g of _)
      g.value > u && (u = g.value), g.value < d && (d = g.value);
    o = new ht(), i = y[0].value, i < d ? (u = d, d = i, o.isHighCenter = !0) : i > u && (d = u, u = i, o.isHighCenter = !1), n = new Tt(), n.type = "Border", n.value = i, t = [];
    for (let g of y)
      t.push(g.point);
    n.pointList = [], n.pointList.push(...t), n.pointList.length > 0 && (o.isBorder = !0, o.lowValue = d, o.highValue = u, e = new ut(), o.area = _t(n.pointList, e), o.isClockWise = gt(n.pointList), o.extent = e, o.outLine = n, o.holeLines = [], f.push(o));
  }
  f.push(...p);
  let a, h, l = f.length, c;
  for (let u = 1; u < l; u++)
    if (o = f[u], o.outLine.type === "Close") {
      a = o.extent, r = o.outLine.pointList[0];
      for (let d = u - 1; d >= 0; d--)
        if (c = f[d], h = c.extent, t = [], t.push(...c.outLine.pointList), ft(t, r) && a.xMin > h.xMin && a.yMin > h.yMin && a.xMax < h.xMax && a.yMax < h.yMax) {
          c.isHighCenter ? o.isHighCenter = o.highValue !== c.lowValue : o.isHighCenter = o.lowValue === c.highValue;
          break;
        }
    }
  return f;
}
function He(f, p) {
  for (let _ = 0; _ < p.length; _++) {
    let y = p[_], o = Be(y);
    for (let n = f.length - 1; n >= 0; n--) {
      let t = f[n];
      if (t.extent.include(o)) {
        let e = !0;
        for (let i of y)
          if (!ft(t.outLine.pointList, i)) {
            e = !1;
            break;
          }
        if (e) {
          t.addHole(y);
          break;
        }
      }
    }
  }
}
function Ge(f) {
  let p = [], _, y;
  for (_ = 0; _ < f.length; _++) {
    let o = f[_];
    (!o.isBorder || o.isInnerBorder) && (o.holeIndex = 1, p.push(o));
  }
  if (p.length === 0)
    return f;
  {
    let o = [];
    for (_ = 1; _ < p.length; _++) {
      let t = p[_];
      for (y = _ - 1; y >= 0; y--) {
        let e = p[y];
        if (e.extent.include(t.extent) && ft(e.outLine.pointList, t.outLine.pointList[0])) {
          t.holeIndex = e.holeIndex + 1, e.addHole(t);
          break;
        }
      }
    }
    let n = [];
    for (_ = 0; _ < p.length; _++)
      p[_].holeIndex === 1 && n.push(p[_]);
    for (_ = 0; _ < f.length; _++) {
      let t = f[_];
      if (t.isBorder && !t.isInnerBorder) {
        for (y = 0; y < n.length; y++) {
          let e = n[y];
          t.extent.include(e.extent) && ft(t.outLine.pointList, e.outLine.pointList[0]) && t.addHole(e);
        }
        o.push(t);
      }
    }
    return o.push(...p), o;
  }
}
class ht {
  constructor() {
    this.isInnerBorder = !1, this.extent = new ut(), this.outLine = new Tt(), this.holeLines = [];
  }
  clone() {
    let p = new ht();
    return p.isBorder = this.isBorder, p.lowValue = this.lowValue, p.highValue = this.highValue, p.isClockWise = this.isClockWise, p.startPointIdx = this.startPointIdx, p.isHighCenter = this.isHighCenter, p.extent = this.extent, p.area = this.area, p.outLine = this.outLine, p.holeLines = this.holeLines, p.holeIndex = this.holeIndex, p;
  }
  hasHoles() {
    return this.holeLines.length > 0;
  }
  addHole(p) {
    if (p instanceof ht)
      this.holeLines.push(p.outLine);
    else {
      let _ = p;
      gt(_) && (_ = _.reverse());
      const y = new Tt();
      y.pointList = _, this.holeLines.push(y);
    }
  }
}
function Xe(f, p, _, y, o, n) {
  let t = !0, e, i, r, a;
  return p < _ ? f[_][o - 1] === 1 && f[_][o + 1] === 1 ? (e = f[_ - 1][o - 1], i = f[_ + 1][o], r = f[_ + 1][o - 1], e !== 0 && i === 0 || e === 0 && i !== 0 && r !== 0 ? (n[0] = _, n[1] = o - 1) : (n[0] = _, n[1] = o + 1)) : f[_][o - 1] === 1 && f[_ + 1][o] === 1 ? (e = f[_ + 1][o - 1], i = f[_ + 1][o + 1], r = f[_][o - 1], a = f[_][o + 1], e === 0 || i === 0 || r === 0 || a === 0 ? e === 0 && a === 0 || i === 0 && r === 0 ? (n[0] = _, n[1] = o - 1) : (n[0] = _ + 1, n[1] = o) : (n[0] = _, n[1] = o - 1)) : f[_][o + 1] === 1 && f[_ + 1][o] === 1 ? (e = f[_ + 1][o - 1], i = f[_ + 1][o + 1], r = f[_][o - 1], a = f[_][o + 1], e === 0 || i === 0 || r === 0 || a === 0 ? e === 0 && a === 0 || i === 0 && r === 0 ? (n[0] = _, n[1] = o + 1) : (n[0] = _ + 1, n[1] = o) : (n[0] = _, n[1] = o + 1)) : f[_][o - 1] === 1 ? (n[0] = _, n[1] = o - 1) : f[_][o + 1] === 1 ? (n[0] = _, n[1] = o + 1) : f[_ + 1][o] === 1 ? (n[0] = _ + 1, n[1] = o) : t = !1 : y < o ? f[_ + 1][o] === 1 && f[_ - 1][o] === 1 ? (e = f[_ + 1][o - 1], i = f[_][o + 1], r = f[_ + 1][o + 1], e !== 0 && i === 0 || e === 0 && i !== 0 && r !== 0 ? (n[0] = _ + 1, n[1] = o) : (n[0] = _ - 1, n[1] = o)) : f[_ + 1][o] === 1 && f[_][o + 1] === 1 ? (r = f[_ - 1][o], a = f[_ + 1][o], e = f[_ - 1][o + 1], i = f[_ + 1][o + 1], e === 0 || i === 0 || r === 0 || a === 0 ? e === 0 && a === 0 || i === 0 && r === 0 ? (n[0] = _ + 1, n[1] = o) : (n[0] = _, n[1] = o + 1) : (n[0] = _ + 1, n[1] = o)) : f[_ - 1][o] === 1 && f[_][o + 1] === 1 ? (r = f[_ - 1][o], a = f[_ + 1][o], e = f[_ - 1][o + 1], i = f[_ + 1][o + 1], e === 0 || i === 0 || r === 0 || a === 0 ? e === 0 && a === 0 || i === 0 && r === 0 ? (n[0] = _ - 1, n[1] = o) : (n[0] = _, n[1] = o + 1) : (n[0] = _ - 1, n[1] = o)) : f[_ + 1][o] === 1 ? (n[0] = _ + 1, n[1] = o) : f[_ - 1][o] === 1 ? (n[0] = _ - 1, n[1] = o) : f[_][o + 1] === 1 ? (n[0] = _, n[1] = o + 1) : t = !1 : p > _ ? f[_][o - 1] === 1 && f[_][o + 1] === 1 ? (e = f[_ + 1][o - 1], i = f[_ - 1][o], r = f[_ - 1][o + 1], e !== 0 && i === 0 || e === 0 && i !== 0 && r !== 0 ? (n[0] = _, n[1] = o - 1) : (n[0] = _, n[1] = o + 1)) : f[_][o - 1] === 1 && f[_ - 1][o] === 1 ? (e = f[_ - 1][o - 1], i = f[_ - 1][o + 1], r = f[_][o - 1], a = f[_][o + 1], e === 0 || i === 0 || r === 0 || a === 0 ? e === 0 && a === 0 || i === 0 && r === 0 ? (n[0] = _, n[1] = o - 1) : (n[0] = _ - 1, n[1] = o) : (n[0] = _, n[1] = o - 1)) : f[_][o + 1] === 1 && f[_ - 1][o] === 1 ? (e = f[_ - 1][o - 1], i = f[_ - 1][o + 1], r = f[_][o - 1], a = f[_][o + 1], e === 0 || i === 0 || r === 0 || a === 0 ? e === 0 && a === 0 || i === 0 && r === 0 ? (n[0] = _, n[1] = o + 1) : (n[0] = _ - 1, n[1] = o) : (n[0] = _, n[1] = o + 1)) : f[_][o - 1] === 1 ? (n[0] = _, n[1] = o - 1) : f[_][o + 1] === 1 ? (n[0] = _, n[1] = o + 1) : f[_ - 1][o] === 1 ? (n[0] = _ - 1, n[1] = o) : t = !1 : y > o && (f[_ + 1][o] === 1 && f[_ - 1][o] === 1 ? (e = f[_ + 1][o + 1], i = f[_][o - 1], r = f[_ - 1][o - 1], e !== 0 && i === 0 || e === 0 && i !== 0 && r !== 0 ? (n[0] = _ + 1, n[1] = o) : (n[0] = _ - 1, n[1] = o)) : f[_ + 1][o] === 1 && f[_][o - 1] === 1 ? (r = f[_ - 1][o], a = f[_ + 1][o], e = f[_ - 1][o - 1], i = f[_ + 1][o - 1], e === 0 || i === 0 || r === 0 || a === 0 ? e === 0 && a === 0 || i === 0 && r === 0 ? (n[0] = _ + 1, n[1] = o) : (n[0] = _, n[1] = o - 1) : (n[0] = _ + 1, n[1] = o)) : f[_ - 1][o] === 1 && f[_][o - 1] === 1 ? (r = f[_ - 1][o], a = f[_ + 1][o], e = f[_ - 1][o - 1], i = f[_ + 1][o - 1], e === 0 || i === 0 || r === 0 || a === 0 ? e === 0 && a === 0 || i === 0 && r === 0 ? (n[0] = _ - 1, n[1] = o) : (n[0] = _, n[1] = o - 1) : (n[0] = _ - 1, n[1] = o)) : f[_ + 1][o] === 1 ? (n[0] = _ + 1, n[1] = o) : f[_ - 1][o] === 1 ? (n[0] = _ - 1, n[1] = o) : f[_][o - 1] === 1 ? (n[0] = _, n[1] = o - 1) : t = !1), t;
}
function qt(f, p, _, y, o, n, t, e, i, r, a, h) {
  let l = !0, c = 0, u = 0, d = 0, g = 0, v = !0;
  return f < p ? _[p][n] !== -2 && _[p][n + 1] !== -2 ? _[p][n] < _[p][n + 1] ? (c = t[n], u = e[p] + _[p][n] * (e[p + 1] - e[p]), d = p, g = n, _[d][g] = -2, v = !1) : (c = t[n + 1], u = e[p] + _[p][n + 1] * (e[p + 1] - e[p]), d = p, g = n + 1, _[d][g] = -2, v = !1) : _[p][n] !== -2 && _[p][n + 1] === -2 ? (c = t[n], u = e[p] + _[p][n] * (e[p + 1] - e[p]), d = p, g = n, _[d][g] = -2, v = !1) : _[p][n] === -2 && _[p][n + 1] !== -2 ? (c = t[n + 1], u = e[p] + _[p][n + 1] * (e[p + 1] - e[p]), d = p, g = n + 1, _[d][g] = -2, v = !1) : y[p + 1][n] !== -2 ? (c = t[n] + y[p + 1][n] * (t[n + 1] - t[n]), u = e[p + 1], d = p + 1, g = n, y[d][g] = -2, v = !0) : l = !1 : o < n ? y[p][n] !== -2 && y[p + 1][n] !== -2 ? y[p][n] < y[p + 1][n] ? (c = t[n] + y[p][n] * (t[n + 1] - t[n]), u = e[p], d = p, g = n, y[d][g] = -2, v = !0) : (c = t[n] + y[p + 1][n] * (t[n + 1] - t[n]), u = e[p + 1], d = p + 1, g = n, y[d][g] = -2, v = !0) : y[p][n] !== -2 && y[p + 1][n] === -2 ? (c = t[n] + y[p][n] * (t[n + 1] - t[n]), u = e[p], d = p, g = n, y[d][g] = -2, v = !0) : y[p][n] === -2 && y[p + 1][n] !== -2 ? (c = t[n] + y[p + 1][n] * (t[n + 1] - t[n]), u = e[p + 1], d = p + 1, g = n, y[d][g] = -2, v = !0) : _[p][n + 1] !== -2 ? (c = t[n + 1], u = e[p] + _[p][n + 1] * (e[p + 1] - e[p]), d = p, g = n + 1, _[d][g] = -2, v = !1) : l = !1 : t[n] < i ? _[p - 1][n] !== -2 && _[p - 1][n + 1] !== -2 ? _[p - 1][n] > _[p - 1][n + 1] ? (c = t[n], u = e[p - 1] + _[p - 1][n] * (e[p] - e[p - 1]), d = p - 1, g = n, _[d][g] = -2, v = !1) : (c = t[n + 1], u = e[p - 1] + _[p - 1][n + 1] * (e[p] - e[p - 1]), d = p - 1, g = n + 1, _[d][g] = -2, v = !1) : _[p - 1][n] !== -2 && _[p - 1][n + 1] === -2 ? (c = t[n], u = e[p - 1] + _[p - 1][n] * (e[p] - e[p - 1]), d = p - 1, g = n, _[d][g] = -2, v = !1) : _[p - 1][n] === -2 && _[p - 1][n + 1] !== -2 ? (c = t[n + 1], u = e[p - 1] + _[p - 1][n + 1] * (e[p] - e[p - 1]), d = p - 1, g = n + 1, _[d][g] = -2, v = !1) : y[p - 1][n] !== -2 ? (c = t[n] + y[p - 1][n] * (t[n + 1] - t[n]), u = e[p - 1], d = p - 1, g = n, y[d][g] = -2, v = !0) : l = !1 : y[p + 1][n - 1] !== -2 && y[p][n - 1] !== -2 ? y[p + 1][n - 1] > y[p][n - 1] ? (c = t[n - 1] + y[p + 1][n - 1] * (t[n] - t[n - 1]), u = e[p + 1], d = p + 1, g = n - 1, y[d][g] = -2, v = !0) : (c = t[n - 1] + y[p][n - 1] * (t[n] - t[n - 1]), u = e[p], d = p, g = n - 1, y[d][g] = -2, v = !0) : y[p + 1][n - 1] !== -2 && y[p][n - 1] === -2 ? (c = t[n - 1] + y[p + 1][n - 1] * (t[n] - t[n - 1]), u = e[p + 1], d = p + 1, g = n - 1, y[d][g] = -2, v = !0) : y[p + 1][n - 1] === -2 && y[p][n - 1] !== -2 ? (c = t[n - 1] + y[p][n - 1] * (t[n] - t[n - 1]), u = e[p], d = p, g = n - 1, y[d][g] = -2, v = !0) : _[p][n - 1] !== -2 ? (c = t[n - 1], u = e[p] + _[p][n - 1] * (e[p + 1] - e[p]), d = p, g = n - 1, _[d][g] = -2, v = !1) : l = !1, r[0] = d, r[1] = g, a[0] = c, a[1] = u, h[0] = v, l;
}
function Ve(f, p, _, y, o) {
  let n = [], t, e, i, r, a, h, l;
  t = [], t.push(...f);
  let c, u, d, g, v = [];
  for (v.length = p.length - 1, h = 0; h < v.length; h++)
    v[h] = 0;
  let m, T, b, x = 0, S = 0, E = 0, w = [], L, R, P;
  for (T = p.length, h = 0; h < T; h++) {
    if (p[h].id === -1)
      continue;
    m = h, w.push(p[h]);
    let W = !1;
    if (v[m] < 2) {
      d = p[m], P = d.bInnerIdx, c = [];
      let z = [];
      c.push(d.point), z.push(m), L = d.borderIdx, R = L, m += 1, P += 1, P === o[L] - 1 && (m = m - (o[L] - 1)), b = 0;
      do {
        if (d = p[m], d.id === -1) {
          if (v[m] === 1)
            break;
          E = d.value, c.push(d.point), v[m] += 1, z.push(m);
        } else {
          if (v[m] === 2)
            break;
          for (v[m] += 1, z.push(m), e = t[d.id], b === 0 ? (x = e.value, S = e.value, b += 1) : x === S && (e.value > x ? S = e.value : e.value < x && (x = e.value), b += 1), u = [], u.push(...e.pointList), i = u[0], d.point.x === i.x && d.point.y === i.y || u.reverse(), c.push(...u), l = 0; l < p.length; l++)
            if (l !== m && (g = p[l], g.id === d.id)) {
              m = l, P = g.bInnerIdx, v[m] += 1, z.push(m), R = g.borderIdx, d.borderIdx > 0 && d.borderIdx === g.borderIdx && (W = !0);
              break;
            }
        }
        if (m === h) {
          if (c.length > 0) {
            if (W) {
              let et = !1, $ = 0;
              for (let Z = 0; Z < d.borderIdx; Z++)
                $ += o[Z];
              let q = $, wt = $ + o[d.borderIdx], nt = q;
              for (let Z = q; Z < wt; Z++)
                if (z.indexOf(Z) < 0) {
                  nt = Z;
                  break;
                }
              if (ft(c, p[nt].point) && (et = !0), et)
                break;
            }
            r = new ht(), r.isBorder = !0, r.isInnerBorder = W, r.lowValue = x, r.highValue = S, a = new ut(), r.area = _t(c, a), r.isClockWise = !0, r.startPointIdx = w.length - 1, r.extent = a, r.outLine.pointList = c, r.outLine.value = x, r.isHighCenter = !0, x === S && E < x && (r.isHighCenter = !1), r.outLine.type = "Border", r.holeLines = [], n.push(r);
          }
          break;
        }
        m += 1, P += 1, L !== R && (L = R), P === o[L] - 1 && (m = m - (o[L] - 1), P = 0);
      } while (!0);
    }
    if (W = !1, m = h, v[m] < 2) {
      c = [];
      let z = [];
      d = p[m], P = d.bInnerIdx, c.push(d.point), z.push(m), L = d.borderIdx, R = L, m += -1, P += -1, P === -1 && (m = m + (o[L] - 1)), b = 0;
      do {
        if (d = p[m], d.id === -1) {
          if (v[m] === 1)
            break;
          E = d.value, c.push(d.point), z.push(m), v[m] += 1;
        } else {
          if (v[m] === 2)
            break;
          for (v[m] += 1, z.push(m), e = t[d.id], b === 0 ? (x = e.value, S = e.value, b += 1) : x === S && (e.value > x ? S = e.value : e.value < x && (x = e.value), b += 1), u = [], u.push(...e.pointList), i = u[0], d.point.x === i.x && d.point.y === i.y || u.reverse(), c.push(...u), l = 0; l < p.length; l++)
            if (l !== m && (g = p[l], g.id === d.id)) {
              m = l, P = g.bInnerIdx, v[m] += 1, z.push(m), R = g.borderIdx, d.borderIdx > 0 && d.borderIdx === g.borderIdx && (W = !0);
              break;
            }
        }
        if (m === h) {
          if (c.length > 0) {
            if (W) {
              let et = !1, $ = 0;
              for (let Z = 0; Z < d.borderIdx; Z++)
                $ += o[Z];
              let q = $, wt = $ + o[d.borderIdx], nt = q;
              for (let Z = q; Z < wt; Z++)
                if (z.indexOf(Z) < 0) {
                  nt = Z;
                  break;
                }
              if (ft(c, p[nt].point) && (et = !0), et)
                break;
            }
            r = new ht(), r.isBorder = !0, r.isInnerBorder = W, r.lowValue = x, r.highValue = S, a = new ut(), r.area = _t(c, a), r.isClockWise = !1, r.startPointIdx = w.length - 1, r.extent = a, r.outLine.pointList = c, r.outLine.value = x, r.isHighCenter = !0, x === S && E < x && (r.isHighCenter = !1), r.outLine.type = "Border", r.holeLines = [], n.push(r);
          }
          break;
        }
        m += -1, P += -1, L !== R && (L = R), P === -1 && (m = m + o[L], P = o[L] - 1);
      } while (!0);
    }
  }
  let O = [], H;
  for (h = 0; h < t.length; h++)
    if (e = t[h], e.type === "Close") {
      for (r = new ht(), r.isBorder = !1, r.lowValue = e.value, r.highValue = e.value, a = new ut(), r.area = _t(e.pointList, a), r.isClockWise = gt(e.pointList), r.extent = a, r.outLine = e, r.isHighCenter = !0, r.holeLines = [], H = !1, l = 0; l < O.length; l++)
        if (r.area > O[l].area) {
          O.splice(l, 0, r), H = !0;
          break;
        }
      H || O.push(r);
    }
  n.length === 0 && (e = new Tt(), e.type = "Border", e.value = y[0], e.pointList = [], e.pointList.push(..._.lineList[0].pointList), e.pointList.length > 0 && (r = new ht(), r.lowValue = e.value, r.highValue = e.value, a = new ut(), r.area = _t(e.pointList, a), r.isClockWise = gt(e.pointList), r.extent = a, r.outLine = e, r.isHighCenter = !1, n.push(r))), n.push(...O);
  let I, U, N = n.length, A;
  for (h = N - 1; h >= 0; h += -1)
    if (r = n[h], r.outLine.type === "Close") {
      for (I = r.extent, x = r.lowValue, i = r.outLine.pointList[0], l = h - 1; l >= 0; l += -1)
        if (A = n[l], U = A.extent, S = A.lowValue, u = [], u.push(...A.outLine.pointList), ft(u, i) && I.xMin > U.xMin && I.yMin > U.yMin && I.xMax < U.xMax && I.yMax < U.yMax) {
          (x < S || x === S && A.isHighCenter) && (r.isHighCenter = !1);
          break;
        }
    }
  return n;
}
function ye(f, p, _, y, o, n, t) {
  let e, i, r, a, h, l, c, u, d = y.length, g = o.length, v = y[1] - y[0], m = o[1] - o[0], T = n[0], b = n[1];
  if (e = p[T][b], i = p[T][b + 1], r = p[T + 1][b], a = p[T + 1][b + 1], h = e + (r - e) * ((f.y - o[T]) / m), l = i + (a - i) * ((f.y - o[T]) / m), c = h + (l - h) * ((f.x - y[b]) / v), e = _[T][b], i = _[T][b + 1], r = _[T + 1][b], a = _[T + 1][b + 1], h = e + (r - e) * ((f.y - o[T]) / m), l = i + (a - i) * ((f.y - o[T]) / m), u = h + (l - h) * ((f.x - y[b]) / v), t ? (f.x += c, f.y += u) : (f.x -= c, f.y -= u), !(f.x >= y[b] && f.x <= y[b + 1] && f.y >= o[T] && f.y <= o[T + 1])) {
    if (f.x < y[0] || f.x > y[y.length - 1] || f.y < o[0] || f.y > o[o.length - 1])
      return !1;
    for (let x = T - 2; x < T + 3; x++)
      if (x >= 0 && x < g && f.y >= o[x] && f.y <= o[x + 1]) {
        T = x;
        for (let S = b - 2; S < b + 3; S++)
          if (S >= 0 && S < d && f.x >= y[S] && f.x <= y[S + 1]) {
            b = S;
            break;
          }
        break;
      }
  }
  return n[0] = T, n[1] = b, !0;
}
const ct = class {
  constructor(f, p, _, y) {
    this._borders = [], this._s0 = f, this._m = f.length, this._n = f[0].length, this._xs = p, this._ys = _, this._undefData = y, this._s1 = this._tracingDataFlag(), this._borders = this._tracingBorders();
  }
  _tracingDataFlag() {
    let f = [];
    const { _s0: p, _m: _, _n: y, _undefData: o } = this;
    for (let t = 0; t < _; t++) {
      f[t] = [];
      for (let e = 0; e < y; e++)
        f[t][e] = me(p[t][e], o) ? 0 : 1;
    }
    for (let t = 1; t < _ - 1; t++)
      for (let e = 1; e < y - 1; e++)
        if (f[t][e] === 1) {
          let i = f[t][e - 1], r = f[t][e + 1], a = f[t - 1][e], h = f[t + 1][e], l = f[t - 1][e - 1], c = f[t - 1][e + 1], u = f[t + 1][e - 1], d = f[t + 1][e + 1];
          i > 0 && r > 0 && a > 0 && h > 0 && l > 0 && c > 0 && u > 0 && d > 0 && (f[t][e] = 2), i + r + a + h + l + c + u + d <= 2 && (f[t][e] = 0);
        }
    let n;
    for (; ; ) {
      n = !1;
      for (let t = 1; t < _ - 1; t++)
        for (let e = 1; e < y - 1; e++)
          if (f[t][e] === 1) {
            let i = f[t][e - 1], r = f[t][e + 1], a = f[t - 1][e], h = f[t + 1][e], l = f[t - 1][e - 1], c = f[t - 1][e + 1], u = f[t + 1][e - 1], d = f[t + 1][e + 1];
            (i === 0 && r === 0 || a === 0 && h === 0) && (f[t][e] = 0, n = !0), (u === 0 && r === 0 && a === 0 || d === 0 && i === 0 && a === 0 || l === 0 && r === 0 && h === 0 || c === 0 && i === 0 && h === 0) && (f[t][e] = 0, n = !0);
          }
      if (!n)
        break;
    }
    for (let t = 0; t < y; t++)
      f[0][t] === 1 && (f[1][t] === 0 ? f[0][t] = 0 : t === 0 ? f[0][t + 1] === 0 && (f[0][t] = 0) : t === y - 1 ? f[0][y - 2] === 0 && (f[0][t] = 0) : f[0][t - 1] === 0 && f[0][t + 1] === 0 && (f[0][t] = 0)), f[_ - 1][t] === 1 && (f[_ - 2][t] === 0 ? f[_ - 1][t] = 0 : t === 0 ? f[_ - 1][t + 1] === 0 && (f[_ - 1][t] = 0) : t === y - 1 ? f[_ - 1][y - 2] === 0 && (f[_ - 1][t] = 0) : f[_ - 1][t - 1] === 0 && f[_ - 1][t + 1] === 0 && (f[_ - 1][t] = 0));
    for (let t = 0; t < _; t++)
      f[t][0] === 1 && (f[t][1] === 0 ? f[t][0] = 0 : t === 0 ? f[t + 1][0] === 0 && (f[t][0] = 0) : t === _ - 1 ? f[_ - 2][0] === 0 && (f[t][0] = 0) : f[t - 1][0] === 0 && f[t + 1][0] === 0 && (f[t][0] = 0)), f[t][y - 1] === 1 && (f[t][y - 2] === 0 ? f[t][y - 1] = 0 : t === 0 ? f[t + 1][y - 1] === 0 && (f[t][y - 1] = 0) : t === _ - 1 ? f[_ - 2][y - 1] === 0 && (f[t][y - 1] = 0) : f[t - 1][y - 1] === 0 && f[t + 1][y - 1] === 0 && (f[t][y - 1] = 0));
    return f;
  }
  _tracingBorders() {
    const { _s1: f, _m: p, _n: _, _xs: y, _ys: o } = this;
    let n = [], t = [];
    for (let a = 0; a < p + 2; a++) {
      t[a] = [];
      for (let h = 0; h < _ + 2; h++)
        a === 0 || a === p + 1 || h === 0 || h === _ + 1 ? t[a][h] = 0 : t[a][h] = f[a - 1][h - 1];
    }
    let e = [];
    for (let a = 0; a < p + 2; a++) {
      e[a] = [];
      for (let h = 0; h < _ + 2; h++)
        if (t[a][h] === 1) {
          let l = t[a][h - 1], c = t[a][h + 1], u = t[a - 1][h], d = t[a + 1][h], g = t[a - 1][h - 1], v = t[a - 1][h + 1], m = t[a + 1][h - 1], T = t[a + 1][h + 1];
          l === 1 && c === 1 && u === 1 && d === 1 && (g === 0 && T === 0 || v === 0 && m === 0) ? e[a][h] = 2 : e[a][h] = 1;
        } else
          e[a][h] = 0;
    }
    for (let a = 1; a < p + 1; a++)
      for (let h = 1; h < _ + 1; h++)
        if (t[a][h] === 1) {
          let l = [], c = [];
          l.push(new tt(y[h - 1], o[a - 1])), c.push(new ge(a - 1, h - 1));
          let u = 0, d = 0, g = a, v = h, m = g, T = -1;
          for (; ; ) {
            let b = [];
            if (b[0] = u, b[1] = d, Xe(t, m, g, T, v, b))
              u = b[0], d = b[1], m = g, T = v, g = u, v = d, e[u][d] = e[u][d] - 1, e[u][d] === 0 && (t[u][d] = 3);
            else
              break;
            if (l.push(new tt(y[d - 1], o[u - 1])), c.push(new ge(u - 1, d - 1)), u === a && d === h)
              break;
          }
          if (e[a][h] = e[a][h] - 1, e[a][h] === 0 && (t[a][h] = 3), l.length > 1) {
            let b = new Ne();
            b.area = _t(l, b.extent), b.isOutLine = !0, b.isClockwise = !0, b.pointList = l, b.ijPointList = c, n.push(b);
          }
        }
    let i = [];
    for (let a = 1; a < n.length; a++) {
      const h = n[a];
      for (let l = 0; l < a; l++) {
        const c = n[a];
        if (h.area > c.area) {
          n.splice(a, 1), n.splice(l, 0, h);
          break;
        }
      }
    }
    let r;
    if (n.length === 1) {
      const a = n[0];
      gt(a.pointList) || (a.pointList = a.pointList.reverse(), a.ijPointList.reverse()), a.isClockwise = !0, r = [], r.push(a);
      let h = new pe();
      h.lineList = r, i.push(h);
    } else
      for (let a = 0; a < n.length && a !== n.length; a++) {
        const h = n[a];
        gt(h.pointList) || (h.pointList.reverse(), h.ijPointList.reverse()), h.isClockwise = !0, r = [], r.push(h);
        for (let c = a + 1; c < n.length && c !== n.length; c++) {
          const u = n[a];
          if (u.extent.xMin > h.extent.xMin && u.extent.xMax < h.extent.xMax && u.extent.yMin > h.extent.yMin && u.extent.yMax < h.extent.yMax) {
            const d = u.pointList[0];
            ft(h.pointList, d) && (u.isOutLine = !1, gt(u.pointList) && (u.pointList.reverse(), u.ijPointList.reverse()), u.isClockwise = !1, r.push(u), n.splice(c, 1), c = c - 1);
          }
        }
        let l = new pe();
        l.lineList = r, i.push(l);
      }
    return i;
  }
  tracingContourLines(f) {
    const { _s0: p, _s1: _, _xs: y, _ys: o, _m: n, _n: t, _borders: e, _undefData: i } = this;
    let r = [], a, h = f[0] * 1e-5;
    h === 0 && (h = 1e-5);
    for (let E = 0; E < n; E++)
      for (let w = 0; w < t; w++)
        me(p[E][w], i) || (p[E][w] = p[E][w] + h);
    let l = [], c = [];
    l[0] = [], l[1] = [], c[0] = [], c[1] = [];
    for (let E = 0; E < n; E++) {
      l[0][E] = [], l[1][E] = [], c[0][E] = [], c[1][E] = [];
      for (let w = 0; w < t; w++)
        w < t - 1 && (l[0][E][w] = -1, l[1][E][w] = -1), E < n - 1 && (c[0][E][w] = -1, c[1][E][w] = -1);
    }
    let u, d, g, v, m;
    for (let E = 0; E < e.length; E++) {
      const w = e[E];
      for (let L = 0; L < w.getLineNum(); L++) {
        const P = w.lineList[L].ijPointList;
        for (u = 0; u < P.length - 1; u++)
          v = P[u], m = P[u + 1], v.i === m.i ? (d = v.i, g = Math.min(v.j, m.j), l[0][d][g] = E, m.j > v.j ? l[1][d][g] = 1 : l[1][d][g] = 0) : (g = v.j, d = Math.min(v.i, m.i), c[0][d][g] = E, m.i > v.i ? c[1][d][g] = 0 : c[1][d][g] = 1);
      }
    }
    let T = [], b = [], x, S;
    for (S = 0; S < f.length; S++) {
      x = f[S];
      for (let E = 0; E < n; E++) {
        T[E] = [], b[E] = [];
        for (let w = 0; w < t; w++)
          w < t - 1 && (_[E][w] !== 0 && _[E][w + 1] !== 0 && (p[E][w] - x) * (p[E][w + 1] - x) < 0 ? T[E][w] = (x - p[E][w]) / (p[E][w + 1] - p[E][w]) : T[E][w] = -2), E < n - 1 && (_[E][w] !== 0 && _[E + 1][w] !== 0 && (p[E][w] - x) * (p[E + 1][w] - x) < 0 ? b[E][w] = (x - p[E][w]) / (p[E + 1][w] - p[E][w]) : b[E][w] = -2);
      }
      a = ct.isoline_UndefData(p, y, o, x, T, b, l, c, r.length);
      for (let E of a)
        r.push(E);
    }
    for (let E = 0; E < e.length; E++) {
      const L = e[E].lineList[0];
      for (let R = 0; R < r.length; R++) {
        const P = r[R];
        if (P.type === "Close") {
          const O = P.pointList[0];
          ft(L.pointList, O) && (P.borderIdx = E);
        }
        r.splice(R, 1), r.splice(R, 0, P);
      }
    }
    return r;
  }
  tracingPolygons(f, p) {
    const _ = this._s0, y = this._borders;
    let o = [], n = [], t, e = [], i, r, a, h, l, c, u, d = [], g = [], v, m, T, b = 0, x;
    for (c = 0; c < y.length; c++) {
      if (g = [], e = [], d = [], o = [], r = y[c], a = r.lineList[0], i = a.pointList, gt(i) || i.reverse(), r.getLineNum() === 1) {
        for (u = 0; u < i.length; u++)
          h = i[u], l = new dt(), l.id = -1, l.point = h, l.value = _[a.ijPointList[u].i][a.ijPointList[u].j], g.push(l);
        for (u = 0; u < f.length; u++)
          v = f[u], v.borderIdx === c && (d.push(v), v.type === "Border" && (h = v.pointList[0], l = new dt(), l.id = d.length - 1, l.point = h, l.value = v.value, e.push(l), h = v.pointList[v.pointList.length - 1], l = new dt(), l.id = d.length - 1, l.point = h, l.value = v.value, e.push(l)));
        if (d.length === 0) {
          if (T = a.ijPointList[0], m = new ht(), _[T.i][T.j] < p[0])
            b = p[0], m.isHighCenter = !1;
          else {
            for (u = p.length - 1; u >= 0; u--)
              if (_[T.i][T.j] > p[u]) {
                b = p[u];
                break;
              }
            m.isHighCenter = !0;
          }
          i.length > 0 && (m.isBorder = !0, m.highValue = b, m.lowValue = b, m.extent = new ut(), m.area = _t(i, m.extent), m.startPointIdx = 0, m.isClockWise = !0, m.outLine.type = "Border", m.outLine.value = b, m.outLine.borderIdx = c, m.outLine.pointList = i, m.holeLines = [], o.push(m));
        } else
          e.length > 0 ? t = ct.insertPoint2Border(e, g) : t = g, o = ct.tracingPolygons_Line_Border(d, t);
        o = ct.addPolygonHoles(o);
      } else {
        for (a = r.lineList[0], u = 0; u < f.length; u++)
          v = f[u], v.borderIdx === c && (d.push(v), v.type === "Border" && (h = v.pointList[0], l = new dt(), l.id = d.length - 1, l.point = h, l.value = v.value, e.push(l), h = v.pointList[v.pointList.length - 1], l = new dt(), l.id = d.length - 1, l.point = h, l.value = v.value, e.push(l)));
        if (d.length === 0) {
          if (T = a.ijPointList[0], m = new ht(), _[T.i][T.j] < p[0])
            b = p[0], m.isHighCenter = !1;
          else {
            for (u = p.length - 1; u >= 0; u--)
              if (_[T.i][T.j] > p[u]) {
                b = p[u];
                break;
              }
            m.isHighCenter = !0;
          }
          i.length > 0 && (m.isBorder = !0, m.highValue = b, m.lowValue = b, m.area = _t(i, m.extent), m.startPointIdx = 0, m.isClockWise = !0, m.outLine.type = "Border", m.outLine.value = b, m.outLine.borderIdx = c, m.outLine.pointList = i, m.holeLines = [], o.push(m));
        } else {
          x = [], x.length = r.getLineNum(), t = ct.insertPoint2Border_Ring(_, e, r, x), o = Ve(d, t, r, p, x);
          let E = [];
          for (; o.length > 0; ) {
            let w = !1;
            for (u = 0; u < E.length; u++)
              if (o[0].area > E[u].area) {
                E.push(o[0]), w = !0;
                break;
              }
            w || E.push(o[0]), o.splice(0, 1);
          }
          o = E;
        }
        let S = [];
        for (u = 0; u < r.getLineNum(); u++)
          S.push(r.lineList[u].pointList);
        S.length > 0 && He(o, S), o = Ge(o);
      }
      n.push(...o);
    }
    for (let S of n)
      gt(S.outLine.pointList) || S.outLine.pointList.reverse();
    return n;
  }
  static isoline_UndefData(f, p, _, y, o, n, t, e, i) {
    let r = [], a, h, l, c;
    a = f.length, h = f[0].length;
    let u, d, g, v, m = 0, T = 0, b, x, S = 0, E = 0, w, L, R, P, O, H = !0, I = new Fe();
    for (l = 0; l < a; l++)
      for (c = 0; c < h; c++) {
        if (c < h - 1 && t[0][l][c] > -1 && o[l][c] !== -2) {
          for (O = [], d = l, v = c, b = p[v] + o[d][v] * (p[v + 1] - p[v]), x = _[d], t[1][l][c] === 0 ? (u = -1, I.sPoint.x = p[c + 1], I.sPoint.y = _[l]) : (u = d, I.sPoint.x = p[c], I.sPoint.y = _[l]), g = v, R = new tt(), R.x = b, R.y = x, O.push(R), I.index = i + r.length, I.point = R, I.borderIdx = t[0][l][c], ct._endPointList.push(I), P = new Tt(), P.type = "Border", P.borderIdx = t[0][l][c]; ; ) {
            let U = [m, T], N = [S, E], A = [H];
            if (qt(u, d, n, o, g, v, p, _, b, U, N, A)) {
              if (m = U[0], T = U[1], S = N[0], E = N[1], H = A[0], R = new tt(), R.x = S, R.y = E, O.push(R), H) {
                if (t[0][m][T] > -1) {
                  t[1][m][T] === 0 ? (I.sPoint.x = p[T + 1], I.sPoint.y = _[m]) : (I.sPoint.x = p[T], I.sPoint.y = _[m]);
                  break;
                }
              } else if (e[0][m][T] > -1) {
                e[1][m][T] === 0 ? (I.sPoint.x = p[T], I.sPoint.y = _[m]) : (I.sPoint.x = p[T], I.sPoint.y = _[m + 1]);
                break;
              }
              b = S, u = d, g = v, d = m, v = T;
            } else {
              P.type = "Error";
              break;
            }
          }
          o[l][c] = -2, O.length > 1 && P.type !== "Error" ? (I.point = R, ct._endPointList.push(I), P.value = y, P.pointList = O, r.push(P)) : ct._endPointList.pop();
        }
        if (l < a - 1 && e[0][l][c] > -1 && n[l][c] !== -2) {
          for (O = [], d = l, v = c, b = p[v], x = _[d] + n[d][v] * (_[d + 1] - _[d]), u = d, e[1][l][c] === 0 ? (g = -1, I.sPoint.x = p[c], I.sPoint.y = _[l]) : (g = v, I.sPoint.x = p[c], I.sPoint.y = _[l + 1]), R = new tt(), R.x = b, R.y = x, O.push(R), I.index = i + r.length, I.point = R, I.borderIdx = e[0][l][c], ct._endPointList.push(I), P = new Tt(), P.type = "Border", P.borderIdx = e[0][l][c]; ; ) {
            let U = [m, T], N = [S, E], A = [H];
            if (qt(u, d, n, o, g, v, p, _, b, U, N, A)) {
              if (m = U[0], T = U[1], S = N[0], E = N[1], H = A[0], R = new tt(), R.x = S, R.y = E, O.push(R), H) {
                if (t[0][m][T] > -1) {
                  t[1][m][T] === 0 ? (I.sPoint.x = p[T + 1], I.sPoint.y = _[m]) : (I.sPoint.x = p[T], I.sPoint.y = _[m]);
                  break;
                }
              } else if (e[0][m][T] > -1) {
                e[1][m][T] === 0 ? (I.sPoint.x = p[T], I.sPoint.y = _[m]) : (I.sPoint.x = p[T], I.sPoint.y = _[m + 1]);
                break;
              }
              b = S, u = d, g = v, d = m, v = T;
            } else {
              P.type = "Error";
              break;
            }
          }
          n[l][c] = -2, O.length > 1 && P.type !== "Error" ? (I.point = R, ct._endPointList.push(I), P.value = y, P.pointList = O, r.push(P)) : ct._endPointList.pop();
        }
      }
    for (c = 0; c < h - 1; c++)
      o[0][c] !== -2 && (o[0][c] = -2), o[a - 1][c] !== -2 && (o[a - 1][c] = -2);
    for (l = 0; l < a - 1; l++)
      n[l][0] !== -2 && (n[l][0] = -2), n[l][h - 1] !== -2 && (n[l][h - 1] = -2);
    for (l = 1; l < a - 2; l++)
      for (c = 1; c < h - 1; c++)
        if (n[l][c] !== -2) {
          let U = [];
          for (d = l, v = c, b = p[v], x = _[l] + n[l][v] * (_[l + 1] - _[l]), g = -1, u = d, w = b, L = x, R = new tt(), R.x = b, R.y = x, U.push(R), P = new Tt(), P.type = "Close"; ; ) {
            let N = [], A = [];
            if (qt(u, d, n, o, g, v, p, _, b, N, A, [])) {
              if (m = N[0], T = N[1], S = A[0], E = A[1], R = new tt(), R.x = S, R.y = E, U.push(R), Math.abs(E - L) < 1e-6 && Math.abs(S - w) < 1e-6)
                break;
              b = S, u = d, g = v, d = m, v = T;
            } else {
              P.type = "Error";
              break;
            }
          }
          n[l][c] = -2, U.length > 1 && P.type !== "Error" && (P.value = y, P.pointList = U, r.push(P));
        }
    for (l = 1; l < a - 1; l++)
      for (c = 1; c < h - 2; c++)
        if (o[l][c] !== -2) {
          let U = [];
          for (d = l, v = c, b = p[v] + o[l][c] * (p[v + 1] - p[v]), x = _[l], g = v, u = -1, w = b, L = x, R = new tt(), R.x = b, R.y = x, U.push(R), P = new Tt(), P.type = "Close"; ; ) {
            let N = [], A = [];
            if (qt(u, d, n, o, g, v, p, _, b, N, A, [])) {
              if (m = N[0], T = N[1], S = A[0], E = A[1], R = new tt(), R.x = S, R.y = E, U.push(R), Math.abs(E - L) < 1e-6 && Math.abs(S - w) < 1e-6)
                break;
              b = S, u = d, g = v, d = m, v = T;
            } else {
              P.type = "Error";
              break;
            }
          }
          o[l][c] = -2, U.length > 1 && P.type !== "Error" && (P.value = y, P.pointList = U, r.push(P));
        }
    return r;
  }
  static tracingPolygons_Line_Border(f, p) {
    if (f.length === 0)
      return [];
    let _ = [], y = [], o, n, t, e, i, r;
    y.push(...f);
    let a, h, l, c = [];
    for (c.length = p.length - 1, i = 0; i < c.length; i++)
      c[i] = 0;
    let u, d, g, v, m = 0, T = 0, b = 0, x = [];
    for (d = p.length - 1, i = 0; i < d; i++)
      if (p[i].id !== -1) {
        if (u = i, a = [], x.push(p[i]), c[u] < 2)
          for (a.push(p[u].point), u += 1, u === d && (u = 0), g = 0, v = 0; ; ) {
            if (l = p[u], l.id === -1) {
              if (c[u] === 1)
                break;
              b = l.value, v += 1, a.push(l.point), c[u] += 1;
            } else {
              if (c[u] === 2)
                break;
              for (c[u] += 1, o = y[l.id], g === 0 ? (m = o.value, T = o.value, g += 1) : (o.value > m ? T = o.value : o.value < m && (m = o.value), g += 1), h = [], h.push(...o.pointList), n = h[0], l.point.x === n.x && l.point.y === n.y || h.reverse(), a.push(...h), r = 0; r < p.length - 1; r++)
                if (r !== u && p[r].id === l.id) {
                  u = r, c[u] += 1;
                  break;
                }
            }
            if (u === i) {
              a.length > 0 && (t = new ht(), t.isBorder = !0, t.lowValue = m, t.highValue = T, e = new ut(), t.area = _t(a, e), t.isClockWise = !0, t.startPointIdx = x.length - 1, t.extent = e, t.outLine.pointList = a, t.outLine.value = m, t.isHighCenter = !0, t.holeLines = [], v > 0 && b < m && (t.isHighCenter = !1, t.highValue = m), t.outLine.type = "Border", _.push(t));
              break;
            }
            u += 1, u === d && (u = 0);
          }
        if (u = i, c[u] < 2)
          for (a = [], a.push(p[u].point), u += -1, u === -1 && (u = d - 1), g = 0, v = 0; ; ) {
            if (l = p[u], l.id === -1) {
              if (c[u] === 1)
                break;
              b = l.value, v += 1, a.push(l.point), c[u] += 1;
            } else {
              if (c[u] === 2)
                break;
              for (c[u] += 1, o = y[l.id], g === 0 ? (m = o.value, T = o.value, g += 1) : (o.value > m ? T = o.value : o.value < m && (m = o.value), g += 1), h = [], h.push(...o.pointList), n = h[0], l.point.x === n.x && l.point.y === n.y || h.reverse(), a.push(...h), r = 0; r < p.length - 1; r++)
                if (r !== u && p[r].id === l.id) {
                  u = r, c[u] += 1;
                  break;
                }
            }
            if (u === i) {
              a.length > 0 && (t = new ht(), t.isBorder = !0, t.lowValue = m, t.highValue = T, e = new ut(), t.area = _t(a, e), t.isClockWise = !1, t.startPointIdx = x.length - 1, t.extent = e, t.outLine.pointList = a, t.outLine.value = m, t.isHighCenter = !0, t.holeLines = [], v > 0 && b < m && (t.isHighCenter = !1, t.highValue = m), t.outLine.type = "Border", _.push(t));
              break;
            }
            u += -1, u === -1 && (u = d - 1);
          }
      }
    let S = [], E;
    for (i = 0; i < y.length; i++)
      if (o = y[i], o.type === "Close" && o.pointList.length > 0) {
        for (t = new ht(), t.isBorder = !1, t.lowValue = o.value, t.highValue = o.value, e = new ut(), t.area = _t(o.pointList, e), t.isClockWise = gt(o.pointList), t.extent = e, t.outLine = o, t.isHighCenter = !0, t.holeLines = [], E = !1, r = 0; r < S.length; r++)
          if (t.area > S[r].area) {
            S.splice(r, 0, t), E = !0;
            break;
          }
        E || S.push(t);
      }
    return _ = Ue(_, S, y, p), _;
  }
  static addPolygonHoles(f) {
    let p = [], _, y;
    for (_ = 0; _ < f.length; _++) {
      let o = f[_];
      o.isBorder || (o.holeIndex = 1, p.push(o));
    }
    if (p.length === 0)
      return f;
    {
      let o = [];
      for (_ = 1; _ < p.length; _++) {
        let t = p[_];
        for (y = _ - 1; y >= 0; y--) {
          let e = p[y];
          if (e.extent.include(t.extent) && ft(e.outLine.pointList, t.outLine.pointList[0])) {
            t.holeIndex = e.holeIndex + 1, e.addHole(t);
            break;
          }
        }
      }
      let n = [];
      for (_ = 0; _ < p.length; _++)
        p[_].holeIndex === 1 && n.push(p[_]);
      for (_ = 0; _ < f.length; _++) {
        let t = f[_];
        if (t.isBorder === !0) {
          for (y = 0; y < n.length; y++) {
            let e = n[y];
            t.extent.include(e.extent) && ft(t.outLine.pointList, e.outLine.pointList[0]) && t.addHole(e);
          }
          o.push(t);
        }
      }
      return o.push(...p), o;
    }
  }
  tracingStreamline(f, p, _, y, o, n) {
    let t = [], e = f[1].length, i = f.length, r = [], a = [], h = _[1] - _[0], l = y[1] - y[0];
    n === 0 && (n = 1);
    let c = h / Math.pow(n, 2), u = c * 1.5, d, g;
    for (d = 0; d < i; d++)
      for (r[d] = [], a[d] = [], g = 0; g < e; g++)
        if (Math.abs(f[d][g] / o - 1) < 0.01)
          r[d][g] = 0.1, a[d][g] = 0.1;
        else {
          let S = Math.sqrt(f[d][g] * f[d][g] + p[d][g] * p[d][g]);
          S === 0 && (S = 1), r[d][g] = f[d][g] / S * h / n, a[d][g] = p[d][g] / S * l / n;
        }
    let v = [], m = [];
    for (d = 0; d < i - 1; d++)
      for (v[d] = [], m[d] = [], g = 0; g < e - 1; g++)
        d % 2 === 0 && g % 2 === 0 ? m[d][g] = 0 : m[d][g] = 1, v[d][g] = [];
    let T, b, x = 0;
    for (d = 0; d < i - 1; d++)
      for (g = 0; g < e - 1; g++)
        if (m[d][g] === 0) {
          let S = [], E = new tt(), w, L, R, P = new Tt();
          E.x = _[g] + h / 2, E.y = y[d] + l / 2, S.push(E.clone()), b = new dt(), b.point = E.clone(), b.id = x, v[d][g].push(b), m[d][g] = 1, w = d, L = g;
          let O = 500;
          for (R = 0; R < O; ) {
            let H = [];
            H[0] = w, H[1] = L;
            let I = ye(E, r, a, _, y, H, !0);
            if (w = H[0], L = H[1], I) {
              if (Math.abs(f[w][L] / o - 1) < 0.01 || Math.abs(f[w][L + 1] / o - 1) < 0.01 || Math.abs(f[w + 1][L] / o - 1) < 0.01 || Math.abs(f[w + 1][L + 1] / o - 1) < 0.01)
                break;
              {
                let U = !1;
                for (let N of v[w][L])
                  if (Math.sqrt((E.x - N.point.x) * (E.x - N.point.x) + (E.y - N.point.y) * (E.y - N.point.y)) < c) {
                    U = !0;
                    break;
                  }
                if (!U && v[w][L].length > 1) {
                  let N = v[w][L][0], A = v[w][L][1];
                  x === N.id && x === A.id || (T = ve(N.point, A.point, E), T < u && (U = !0));
                }
                if (!U)
                  S.push(E.clone()), b = new dt(), b.point = E.clone(), b.id = x, v[w][L].push(b), m[w][L] = 1;
                else
                  break;
              }
            } else
              break;
            R += 1;
          }
          for (E.x = _[g] + h / 2, E.y = y[d] + l / 2, w = d, L = g, R = 0; R < O; ) {
            let H = [];
            H[0] = w, H[1] = L;
            let I = ye(E, r, a, _, y, H, !1);
            if (w = H[0], L = H[1], I) {
              if (Math.abs(f[w][L] / o - 1) < 0.01 || Math.abs(f[w][L + 1] / o - 1) < 0.01 || Math.abs(f[w + 1][L] / o - 1) < 0.01 || Math.abs(f[w + 1][L + 1] / o - 1) < 0.01)
                break;
              {
                let U = !1;
                for (let N of v[w][L])
                  if (Math.sqrt((E.x - N.point.x) * (E.x - N.point.x) + (E.y - N.point.y) * (E.y - N.point.y)) < c) {
                    U = !0;
                    break;
                  }
                if (!U && v[w][L].length > 1) {
                  let N = v[w][L][0], A = v[w][L][1];
                  x === N.id && x === A.id || (T = ve(N.point, A.point, E), T < u && (U = !0));
                }
                if (!U)
                  S.splice(0, 0, E.clone()), b = new dt(), b.point = E.clone(), b.id = x, v[w][L].push(b), m[w][L] = 1;
                else
                  break;
              }
            } else
              break;
            R += 1;
          }
          S.length > 1 && (P.pointList = S, t.push(P), x += 1);
        }
    return t;
  }
  static insertPoint2Border(f, p) {
    let _, y, o, n, t, e, i, r = [];
    for (r.push(...p), o = 0; o < f.length; o++)
      for (y = f[o], i = y.point, _ = r[0], t = _.point, n = 1; n < r.length; n++) {
        if (_ = r[n], e = _.point, (i.x - t.x) * (i.x - e.x) <= 0 && (i.y - t.y) * (i.y - e.y) <= 0 && (i.x - t.x) * (e.y - t.y) - (e.x - t.x) * (i.y - t.y) === 0) {
          r.splice(n, 0, y);
          break;
        }
        t = e;
      }
    return r;
  }
  static insertPoint2Border_Ring(f, p, _, y) {
    let o, n, t, e, i, r, a, h, l, c = [], u = [], d = [];
    for (i = 0; i < _.getLineNum(); i++) {
      for (l = _.lineList[i], u = [], t = 0; t < l.pointList.length; t++)
        o = new dt(), o.id = -1, o.borderIdx = i, o.point = l.pointList[t], o.value = f[l.ijPointList[t].i][l.ijPointList[t].j], u.push(o);
      for (t = 0; t < p.length; t++)
        for (n = p[t].clone(), n.borderIdx = i, h = n.point, r = u[0].point.clone(), e = 1; e < u.length; e++) {
          if (a = u[e].point.clone(), (h.x - r.x) * (h.x - a.x) <= 0 && (h.y - r.y) * (h.y - a.y) <= 0 && (h.x - r.x) * (a.y - r.y) - (a.x - r.x) * (h.y - r.y) === 0) {
            u.splice(e, 0, n);
            break;
          }
          r = a;
        }
      for (d = [], t = 0; t < u.length; t++)
        n = u[t], n.bInnerIdx = t, d.push(n);
      y[i] = d.length, c.push(...d);
    }
    return c;
  }
};
let ne = ct;
ne._endPointList = [];
function qe(f, p, _) {
  const y = $e(p);
  let o = 0, n = 0;
  for (let t = 0; t < 4; t++) {
    const e = f[_ + t];
    o = o + y[t] * e.x, n = n + y[t] * e.y;
  }
  return [o, n];
}
function Ye(f) {
  return 1 / 6 * (-f + 1) * (-f + 1) * (-f + 1);
}
function We(f) {
  return 1 / 6 * (3 * f * f * f - 6 * f * f + 4);
}
function Je(f) {
  return 1 / 6 * (-3 * f * f * f + 3 * f * f + 3 * f + 1);
}
function ze(f) {
  return 1 / 6 * f * f * f;
}
function $e(f) {
  return [Ye(f), We(f), Je(f), ze(f)];
}
function Qe(f, p) {
  let _, y, o, n, t, e = [];
  if (p < 4)
    return null;
  let i = !1;
  t = f[0];
  let r = f[p - 1];
  for (t.x === r.x && t.y === r.y && (f.splice(0, 1), f.push(f[0]), f.push(f[1]), f.push(f[2]), f.push(f[3]), f.push(f[4]), f.push(f[5]), f.push(f[6]), i = !0), p = f.length, y = 0; y < p - 3; y++)
    for (_ = 0; _ <= 1; _ += 0.05) {
      let a = qe(f, _, y);
      o = a[0], n = a[1], i ? y > 3 && (t = new tt(), t.x = o, t.y = n, e.push(t)) : (t = new tt(), t.x = o, t.y = n, e.push(t));
    }
  return i ? e.push(e[0]) : (e.splice(0, 0, f[0]), e.push(f[f.length - 1])), e;
}
function Te(f) {
  let p = [];
  for (let _ = 0; _ < f.length; _++) {
    const y = f[_], o = y.pointList;
    if (o.length <= 1)
      continue;
    if (o.length === 2) {
      let t = new tt(), e = o[0], i = o[1];
      t.x = (i.x - e.x) / 4 + e.x, t.y = (i.y - e.y) / 4 + e.y, o.splice(1, 0, t), t = new tt(), t.x = (i.x - e.x) / 4 * 3 + e.x, t.y = (i.y - e.y) / 4 * 3 + e.y, o.splice(2, 0, t);
    }
    if (o.length === 3) {
      let t = new tt(), e = o[0], i = o[1];
      t.x = (i.x - e.x) / 2 + e.x, t.y = (i.y - e.y) / 2 + e.y, o.splice(1, 0, t);
    }
    const n = Qe(o, o.length);
    y.pointList = n, p.push(y);
  }
  return p;
}
function Ke(f) {
  return {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: f.pointList.map((_) => [_.x, _.y])
    },
    properties: { value: f.value }
  };
}
function Ze(f) {
  const p = [];
  for (const _ of f) {
    const y = Ke(_);
    p.push(y);
  }
  return {
    type: "FeatureCollection",
    features: p
  };
}
function ti(f, p) {
  const { outLine: _, holeLines: y } = f, n = [_.pointList.map((e) => [e.x, e.y])];
  let t = _.value;
  if (f.isHighCenter) {
    const e = p.indexOf(f.lowValue);
    e >= 0 && e < p.length - 1 ? t = p[e + 1] : t = f.lowValue;
  }
  if (f.hasHoles())
    for (let e = 0; e < y.length; e++) {
      const i = y[e], r = [];
      for (let a = 0, h = i.pointList; a < h.length; a++) {
        const l = h[a];
        r.push([l.x, l.y]);
      }
      n.push(r);
    }
  return {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: n
    },
    properties: { value: t }
  };
}
function ei(f, p) {
  const _ = [];
  for (const y of f) {
    const o = ti(y, p);
    _.push(o);
  }
  return {
    type: "FeatureCollection",
    features: _
  };
}
const ii = (f, p) => {
  const _ = f.__vccOpts || f;
  for (const [y, o] of p)
    _[y] = o;
  return _;
}, si = {
  name: "bisectLayer",
  props: {
    //剖切数据
    cutData: {
      type: Object,
      default: () => {
      }
    },
    //剖切配置
    cutConfig: {
      type: Object,
      default: () => {
      }
    },
    Verticalelement: {
      type: Array
      // 类型
    },
    currentMapInfo: {
      type: Array
      // 类型
    }
  },
  data() {
    return {
      xAxis: [],
      yAxis: [],
      map: null
    };
  },
  created() {
  },
  mounted() {
  },
  watch: {
    cutData: {
      immediate: !0,
      handler(f, p) {
        console.log("执行重绘"), this.$nextTick(() => {
          this.drawPlane();
        });
      }
    }
  },
  methods: {
    mapValuesToColors(f) {
      return f.reduce((p, [_, y]) => {
        const o = `rgba(${y.join(",")})`;
        return p[_] = o, p;
      }, {});
    },
    //绘制切面
    drawPlane() {
      this.$nextTick(() => {
        this.drawPlaningSurface();
      });
    },
    drawPlaningSurface() {
      const f = this.cutData, p = this.cutConfig;
      let _ = document.getElementById("parentBox"), y = document.getElementById("canvas"), o = document.getElementById("canvas1"), n = parseInt(_.getBoundingClientRect().width - 100), t = parseInt(_.getBoundingClientRect().height - 46);
      console.log(n, t), y.width = n, o.width = n, y.height = t, o.height = t, this.stage = new it.Stage(o);
      const e = [], i = [];
      for (let c = 0; c < f.geos.length; c++)
        e.push(c);
      for (let c = 0; c < f.levels.length; c++)
        i.push(c);
      it.Ticker.addEventListener("tick", this.stage);
      let r = y.getContext("2d");
      r.clearRect(0, 0, y.width, y.height);
      let a = p.fields.find((c) => c.type === "counter"), h = p.fields.find((c) => c.type === "grid"), l = p.fields.find((c) => c.type === "wind");
      if (h) {
        const { element: c, style: u, noData: d } = h, { offset: g, scale: v, legend: m } = u;
        let T = f.elements.findIndex((I) => I === c), b = f.data[T].map((I) => I.map((U) => U * v + g));
        console.log("gridData", b);
        const x = m.map((I) => I[0]) || [100, 70, 50, 30, 0], S = new ne(b, e, i, d), E = S.tracingContourLines(x);
        Te(E);
        const w = S.tracingPolygons(E, x), L = ei(w, x);
        let R = this.mapValuesToColors(m);
        const P = new ee();
        let O = n / f.geos.length, H = t / f.levels.length;
        P.drawGeoJsonFieldMap(L, r, R, O, H);
      }
      if (a) {
        const { element: c, style: u, noData: d } = a, { offset: g, scale: v, interval: m, width: T, stroke: b } = u;
        let x = f.elements.findIndex((R) => R === c), S = f.data[x].map((R) => R.map((P) => P * v + g));
        const E = new ne(S, e, i, d), w = m || [5, 10, 15, 20], L = E.tracingContourLines(w);
        this.drawContourLine(Ze(Te(L)), r, w, u);
      }
      if (l) {
        let c = p.fields.find((u) => u.type === "wind");
        this.drawWind(f, r, n, t, c);
      }
      this.drawAxis(f, n, t), this.cutConfig.sp && this.drawLine(f, r, n, t);
    },
    drawContourLine(f, p, _, y) {
      new ee().contourLine(f, p, _, y);
    },
    //绘制色斑图
    drawContourField(f, p, _, y, o) {
      new ee().drawGeoJsonFieldMap(f, p, o, _, y);
    },
    drawAxis(f, p, _) {
      const y = f.levels, o = _ / y.length + 1;
      this.yAxis = [];
      let n = 0;
      for (let a = _; a >= 0; a = a - o)
        this.yAxis.push({ top: a, value: y[n] / 100 }), n++;
      const t = f.geos, e = p / t.length + 1;
      this.xAxis = [];
      let i = fe(t.at(-1)).coordinates;
      this.xAxis.push({
        left: p,
        // value: `${cool[cool.length - 1][0].toFixed(2)},${cool[cool.length - 1][1].toFixed(2)}`
        value: `${i[0].toFixed(2)},${i[1].toFixed(2)}`
      });
      let r = 0;
      for (let a = 0; a < p; a = a + e) {
        if (r === 0) {
          let h = fe(t[r]).coordinates;
          this.xAxis.push({
            left: a,
            value: `${h[0].toFixed(2)},${h[1].toFixed(2)}`
          });
        }
        r++;
      }
      this.$forceUpdate();
    },
    drawLine(f, p, _, y) {
      const o = f.sp, n = Math.max.apply(null, f.y) / y, t = o.length / _, e = 0, i = Math.floor(Number(o[0]) / n);
      let r = new it.Shape();
      r.graphics.setStrokeStyle(2), r.graphics.beginStroke("#000"), r.graphics.beginFill("#ccc"), r.graphics.moveTo(e, i);
      for (let a = 1; a < o.length; a++) {
        const h = Math.floor(a / t), l = Math.floor(Number(o[a]) / n);
        r.graphics.lineTo(h, l);
      }
      r.graphics.lineTo(_, y), r.graphics.lineTo(0, y), r.graphics.lineTo(0, i), r.graphics.beginFill("#ccc"), this.stage.addChild(r);
    },
    drawWind(f, p, _, y, o) {
      const { element: n, style: t, noData: e } = o, { offset: i, scale: r } = t, a = f.elements.findIndex((T) => T === n[0]), h = f.elements.findIndex((T) => T === n[1]), l = f.data[a].map((T) => T.map((b) => b * r + i)), c = f.data[h].map((T) => T.map((b) => b * r + i));
      let u = [];
      for (let T = 0; T < l.length; T++) {
        const b = l[T], x = c[T];
        let S = [];
        for (let E = 0; E < b.length; E++) {
          let w = [];
          b[E] === e ? w = [e, e] : w = Ce(b[E], x[E]), S.push(w);
        }
        u.push(S);
      }
      const d = u, g = Math.ceil(_ / f.geos.length);
      let v = 0;
      const m = Math.ceil(y / f.levels.length);
      for (let T = y; T >= 0; T = T - m) {
        const b = d[v];
        let x = 0;
        for (let S = 0; S < _; S = S + g) {
          if (x % 4 === 0 && Math.floor(b[x][0]) > 0 && b[x][0] !== "-999") {
            let E = new it.Shape();
            E.x = S, E.y = T;
            const w = Math.floor(b[x][0]), L = Math.floor(b[x][1]);
            this.stage.addChild(E), new ke(w, L, E);
          }
          x++;
        }
        v++;
      }
    }
  }
}, ri = {
  class: "planing-surface",
  id: "parentBox"
}, ni = { class: "xAxis" }, ai = { id: "xAxis" }, oi = { class: "yAxis" }, hi = { id: "yAxis" };
function li(f, p, _, y, o, n) {
  return kt(), Nt("div", ri, [
    Et("div", ni, [
      Et("ul", ai, [
        (kt(!0), Nt(le, null, ce(o.xAxis, (t) => (kt(), Nt("li", {
          style: ue({ left: t.left + "px", bottom: "-5px" }),
          key: t.value
        }, [
          Et("span", null, de(t.value), 1)
        ], 4))), 128))
      ])
    ]),
    Et("div", oi, [
      Et("ul", hi, [
        (kt(!0), Nt(le, null, ce(o.yAxis, (t) => (kt(), Nt("li", {
          style: ue({ left: "-5px", top: t.top + "px" }),
          key: t.value
        }, [
          Et("span", null, de(t.value), 1)
        ], 4))), 128))
      ])
    ]),
    p[0] || (p[0] = Et("canvas", {
      id: "canvas",
      class: "canvas-layer"
    }, null, -1)),
    p[1] || (p[1] = Et("canvas", {
      id: "canvas1",
      class: "canvas-layer"
    }, null, -1))
  ]);
}
const be = /* @__PURE__ */ ii(si, [["render", li], ["__scopeId", "data-v-d2569451"]]);
be.install = function(f) {
  f.component("cme-bisect-layer", be);
};
export {
  be as BisectLayer
};