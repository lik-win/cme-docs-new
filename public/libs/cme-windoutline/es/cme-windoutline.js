import { ref as G, openBlock as U, createElementBlock as X } from "vue";
const $ = (I, E) => {
  const M = I.__vccOpts || I;
  for (const [y, h] of E)
    M[y] = h;
  return M;
}, ee = {
  id: "myEchart",
  class: "echart-comp"
}, te = {
  __name: "index",
  props: {
    isShow: { default: !1 },
    stationinfo: { type: Object }
  },
  setup(I, { expose: E }) {
    let M = window.echarts, y = "";
    const h = G(), W = I, T = G([]), C = W.stationinfo;
    let k = G("myEchart"), q, A = !0, O;
    const P = {
      outOfRange: {
        symbolSize: 0,
        color: "#dddddd"
      },
      dimension: 2,
      itemHeight: 20,
      hoverLink: !1,
      itemWidth: 12,
      itemGap: 1,
      align: "left",
      top: "68",
      right: "0",
      textStyle: {
        fontSize: 10
      },
      pieces: [
        {
          gte: 0,
          lt: 2,
          color: "rgb(0,236,236)",
          label: "0-2",
          show: !0
        },
        {
          gte: 2,
          lt: 4,
          color: "rgb(0,149,249)",
          label: "2-4",
          show: !0
        },
        {
          gte: 4,
          lt: 6,
          color: "rgb(4,82,175)",
          label: "4-6",
          show: !0
        },
        {
          gte: 6,
          lt: 8,
          color: "rgb(0,216,0)",
          label: "6-8",
          show: !0
        },
        {
          gte: 8,
          lt: 10,
          color: "rgb(42,135,4)",
          label: "8-10",
          show: !0
        },
        {
          gte: 10,
          lt: 12,
          color: "rgb(255,255,0)",
          label: "10-12",
          show: !0
        },
        {
          gte: 12,
          lt: 16,
          color: "rgb(255,171,0)",
          label: "12-16",
          show: !0
        },
        {
          gte: 16,
          lt: 20,
          color: "rgb(249,113,177)",
          label: "16-20",
          show: !0
        },
        {
          gte: 20,
          lt: 24,
          color: "rgb(253,0,0)",
          label: "20-24",
          show: !0
        },
        {
          gte: 24,
          lt: 28,
          color: "rgb(179,2,24)",
          label: "24-28",
          show: !0
        },
        {
          gte: 28,
          lt: 32,
          color: "rgb(112,2,20)",
          label: "28-32",
          show: !0
        },
        {
          gte: 32,
          lt: 36,
          color: "rgb(232,2,247)",
          label: "32-36",
          show: !0
        },
        {
          gte: 36,
          lt: 9999,
          color: "rgb(173,144,240)",
          label: "36-9999",
          show: !0
        }
      ]
    };
    let l = {
      title: [
        {
          text: "",
          subtext: "",
          left: "center",
          top: "5",
          textStyle: {
            fontWeight: "bold",
            fontSize: "14"
          }
        },
        {
          text: "",
          left: "25%",
          top: "60",
          textStyle: {
            fontWeight: "bold",
            fontSize: "12"
          }
        },
        {
          text: "",
          left: "70%",
          top: "60",
          textStyle: {
            fontWeight: "bold",
            fontSize: "12"
          }
        },
        {
          text: " 风速(m/s)",
          right: "10",
          top: "40",
          textStyle: {
            fontWeight: "normal",
            fontSize: "12"
          }
        },
        {
          text: "",
          right: "40",
          top: "62%",
          textStyle: {
            fontWeight: "normal",
            fontSize: "12"
          }
        },
        {
          text: "11-11 11:11",
          left: "15",
          bottom: "15",
          textStyle: {
            fontWeight: "normal",
            fontSize: "12"
          }
        },
        {
          text: "22-22 22:22",
          left: "40%",
          bottom: "15",
          textStyle: {
            fontWeight: "normal",
            fontSize: "12"
          }
        },
        {
          text: "33-33 33:33",
          left: "48%",
          bottom: "15",
          textStyle: {
            fontWeight: "normal",
            fontSize: "12"
          }
        },
        {
          text: "44-44 44:44",
          right: "50",
          bottom: "15",
          textStyle: {
            fontWeight: "normal",
            fontSize: "12"
          }
        }
      ],
      toolbox: {
        right: 15,
        feature: {
          dataZoom: {},
          saveAsImage: {
            show: !0
          },
          myChange: {
            show: !0,
            title: "反转",
            icon: "path://M4 10h20v6l8-8-8-8v6h-24v12h4zM28 22h-20v-6l-8 8 8 8v-6h24v-12h-4z",
            onclick: function() {
              l.xAxis[0].inverse == !0 ? (l.xAxis[0].inverse = !1, l.xAxis[1].inverse = !1) : (l.xAxis[0].inverse = !0, l.xAxis[1].inverse = !0), F(O);
            }
          }
        }
      },
      grid: [
        {
          top: "100",
          left: "20",
          width: "45%",
          bottom: "40",
          containLabel: !0
        },
        {
          top: "100",
          left: "46%",
          right: "110",
          bottom: "40",
          containLabel: !0
        }
      ],
      tooltip: {
        trigger: "item",
        axisPointer: {
          type: "cross"
        },
        formatter: function(t) {
          var e = t.value[3];
          e <= 11.25 && e >= 348.76 ? e = "北风" : e >= 11.26 && e <= 33.75 ? e = "偏北风" : e >= 33.76 && e <= 56.25 ? e = "东北风" : e >= 56.26 && e <= 78.75 ? e = "偏东风" : e >= 78.76 && e <= 101.25 ? e = "东风" : e >= 101.26 && e <= 123.75 ? e = "偏东风" : e >= 123.76 && e <= 146.25 ? e = "东南风" : e >= 146.26 && e <= 168.75 ? e = "偏南风" : e >= 168.76 && e <= 191.25 ? e = "南风" : e >= 191.26 && e <= 213.75 ? e = "偏南风" : e >= 213.76 && e <= 236.25 ? e = "西南风" : e >= 236.26 && e <= 258.75 ? e = "偏西风" : e >= 258.76 && e <= 281.25 ? e = "西风" : e >= 281.26 && e <= 303.75 ? e = "偏西风" : e >= 303.76 && e <= 326.25 ? e = "西北风" : e >= 326.26 && e <= 348.75 && (e = "偏北风"), parseInt(Number(t.value[2]) / 2);
          var i = "";
          return t.value[4] != null && (i = "可信度：" + t.value[4]), '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">日期：' + new Date(t.value[0]).toLocaleDateString() + '<br></div><span style="clear: both;float: left;">时间：' + new Date(new Date(t.value[0]).getTime() + 8 * 60 * 60 * 1e3).toLocaleTimeString() + "<br>高度：" + Number(t.value[1]).toFixed(1) + "米<br>风向：" + e + "(" + Number(t.value[3]).toFixed(0) + ")<br>风速：" + Number(t.value[2]).toFixed(2) + "m/s<br>" + i + "</span>";
        }
      },
      dataZoom: [
        {
          type: "inside",
          xAxisIndex: 0,
          filterMode: "empty"
        },
        {
          type: "inside",
          yAxisIndex: 0,
          filterMode: "empty"
        },
        {
          type: "inside",
          xAxisIndex: 0,
          filterMode: "empty"
        },
        {
          type: "inside",
          yAxisIndex: 0,
          filterMode: "empty"
        },
        {
          type: "inside",
          xAxisIndex: 1,
          filterMode: "empty"
        },
        {
          type: "inside",
          yAxisIndex: 1,
          filterMode: "empty"
        },
        {
          type: "inside",
          xAxisIndex: 1,
          filterMode: "empty"
        },
        {
          type: "inside",
          yAxisIndex: 1,
          filterMode: "empty"
        }
      ],
      xAxis: [
        {
          name: "",
          gridIndex: 0,
          type: "time",
          splitNumber: 7,
          inverse: A,
          axisLabel: {
            formatter: function(t) {
              var e = new Date(t);
              const i = e.getHours() < 10 ? "0" + e.getHours() : e.getHours(), d = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes();
              return i + ":" + d;
            }
          },
          splitLine: {
            show: !1
          }
        },
        {
          name: "",
          gridIndex: 1,
          type: "time",
          splitNumber: 7,
          inverse: A,
          axisLabel: {
            formatter: function(t) {
              var e = new Date(t);
              const i = e.getHours() < 10 ? "0" + e.getHours() : e.getHours(), d = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes();
              return i + ":" + d;
            }
          },
          splitLine: {
            show: !1
          }
        }
      ],
      yAxis: [
        {
          axisLabel: {
            formatter: function(t, e) {
              if (("" + t).length == 1)
                return "　　　　" + t;
              if (("" + t).length == 2)
                return "　　　" + t;
              if (("" + t).length == 3)
                return "　　" + t;
              if (("" + t).length == 4)
                return "　" + t;
              if (("" + t).length == 5)
                return t;
            }
          },
          offset: 20,
          name: "高度(m)　　　",
          gridIndex: 0,
          nameGap: 10,
          type: "value",
          splitNumber: 10,
          splitLine: {
            show: !1
          }
        },
        {
          show: !0,
          axisLabel: {
            formatter: function(t, e) {
              if (("" + t).length == 1)
                return "　　　　" + t;
              if (("" + t).length == 2)
                return "　　　" + t;
              if (("" + t).length == 3)
                return "　　" + t;
              if (("" + t).length == 4)
                return "　" + t;
              if (("" + t).length == 5)
                return t;
            }
          },
          offset: 20,
          name: "高度(m)　　　",
          gridIndex: 1,
          splitNumber: 10,
          nameGap: 10,
          type: "value",
          splitLine: {
            show: !1
          }
        }
      ],
      graphic: [
        //虚拟实线 补全X轴
        {
          type: "group",
          bounding: "all",
          left: "56",
          bottom: 59,
          z: 0,
          children: [
            {
              type: "rect",
              z: 100,
              shape: {
                width: 30,
                height: 1
              },
              style: {
                fill: "#333"
              }
            }
          ]
        },
        {
          type: "group",
          bounding: "all",
          left: "49.5%",
          bottom: 59,
          z: 200,
          children: [
            {
              type: "rect",
              z: 0,
              shape: {
                width: 29,
                height: 1
              },
              style: {
                fill: "#333"
              }
            }
          ]
        }
      ],
      visualMap: P,
      series: [
        {
          name: "质控前",
          hoverAnimation: !1,
          animation: !1,
          type: "scatter",
          xAxisIndex: 0,
          yAxisIndex: 0,
          data: []
        },
        {
          name: "可信度",
          hoverAnimation: !1,
          animation: !1,
          seriverIndex: 1,
          type: "scatter",
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: []
        }
      ]
    };
    const B = (t, e, i) => {
      t = "" + t;
      var d = t.substr(0, 4), c = t.substr(4, 2), b = t.substr(6, 2), p = t.substr(8, 2), a = t.substr(10, 2), m = /* @__PURE__ */ new Date("" + d + "/" + c + "/" + b + " " + p + ":" + a + ":00");
      if (i) {
        i.substr(0, 4);
        var g = i.substr(4, 2), o = i.substr(6, 2), s = i.substr(8, 2), n = i.substr(10, 2);
      } else {
        var x = /* @__PURE__ */ new Date();
        x.setTime(m.getTime() - 36e5 * parseInt(e)), x.getFullYear();
        var g = x.getMonth() + 1 + "";
        g.length == 1 && (g = "0" + g);
        var o = x.getDate() + "";
        o.length == 1 && (o = "0" + o);
        var s = x.getHours() + "";
        s.length == 1 && (s = "0" + s);
        var n = x.getMinutes() + "";
        n.length == 1 && (n = "0" + n);
      }
      return g + "-" + o + " " + s + ":" + n + " 至 " + c + "-" + b + " " + p + ":" + a;
    }, j = {
      nowDate: 0,
      halfhour: 1,
      onehour: 2
    };
    let D;
    const F = (t = null) => {
      var S, Z;
      var e = document.getElementById(k.value);
      D && D.dispose(), D = M.init(e), D.showLoading();
      var i = (t == null ? void 0 : t.datePicker) || null, d = i || "20240716140000", c = 2, b = 0;
      l.visualMap = P;
      var p = {
        stationCode: (t == null ? void 0 : t.address) || q,
        qualityControl: b,
        dataType: c,
        st: d,
        timeInterval: 6
      };
      p.timeInterval = 24;
      var a = 0, m = [], g = [];
      D.hideLoading();
      var o = T.value[y];
      if (o.length > 0) {
        o.length > 1 && (l.xAxis[0].axisLabel.formatter = function(_) {
          var L = new Date(_ + 288e5), Q = L.getHours() < 10 ? "0" + L.getHours() : L.getHours();
          return Q + ":00";
        }), l.title[1].text = "", l.title[2].text = "", l.title[4].text = "", l.xAxis[0].show = !0, l.xAxis[1].show = !1, l.yAxis[0].show = !0, l.yAxis[1].show = !1, l.grid = [
          {
            top: "100",
            left: "20",
            right: "110",
            bottom: "40",
            containLabel: !0
          },
          {
            top: "100",
            width: "0",
            bottom: "40",
            containLabel: !0
          }
        ];
        for (var s = 0; s < o.length; s++) {
          var n = ((S = o[s]) == null ? void 0 : S.SPEED_H) || "", x = ((Z = o[s]) == null ? void 0 : Z.DIRECTION_H) || "", H = o[s].Datetime;
          m.push({
            value: [H, o[s].HEIGHT, Number(n), Number(x)],
            symbolRotate: 90 - x,
            symbolSize: [1.5, 1.5],
            symbol: "windFeather",
            itemStyle: {
              normal: { borderWidth: 1.2 },
              emphasis: { borderWidth: 2 }
            }
          });
        }
        a = o.sort((_, L) => L.HEIGHT - _.HEIGHT), l.yAxis[0].max = a[0] ? a[0].HEIGHT : 1, l.xAxis[0].inverse == !1 ? l.toolbox.feature.myChange.title = "最新在左" : l.toolbox.feature.myChange.title = "最新在右";
      } else
        l.xAxis[0].inverse == !1 ? (l.toolbox.feature.myChange.title = "最新在左", l.title[1].text = "", l.title[2].text = "") : (l.toolbox.feature.myChange.title = "最新在右", l.title[1].text = "", l.title[2].text = ""), l.xAxis[0].axisLabel.formatter = function(_) {
          return "";
        }, e.innerHTML = "<div style='width:100%;text-align:center;height:100px;line-height:100px;font-size: 25px;'>暂无数据</div>";
      l.series[0].data = m, l.series[1].data = g;
      var z = B(t.eTime, p.timeInterval, t.sTime), v = "", w = "";
      v = "一小时平均";
      let f = h.value;
      w = "", l.title[0].text = f.stationName + "[" + f.Station_Id_C + "] " + v + "风羽图" + w + " " + z, l.title[0].subtext = "　海拔高度：" + f.HEIGHT + "米　经度：" + parseFloat(f.lon).toFixed(2) + "度　纬度：" + parseFloat(f.lat).toFixed(2) + "度";
      var u = z.split("至");
      l.title[6].text = "", l.title[7].text = "", l.xAxis[0].inverse ? (l.title[5].text = u[1], l.title[8].text = u[0]) : (l.title[5].text = u[0], l.title[8].text = u[1]), D.setOption(l), o.length == 0 && (e.innerHTML = "<div style='width:100%;text-align:center;height:100px;line-height:100px;font-size: 25px;'>暂无数据</div>");
    };
    var r = {};
    const V = (t, e) => t - e;
    var Y = {
      dimension: 2,
      itemHeight: 12,
      align: "left",
      itemWidth: 5,
      itemGap: 0,
      top: "14.5%",
      right: 2,
      textStyle: {
        fontSize: 10
      },
      pieces: [
        {
          lte: -999,
          color: "#951262",
          label: "-999"
        },
        {
          gt: -999,
          lte: -1,
          color: "#ed2226",
          label: "-1"
        },
        {
          gt: -1,
          lte: -0.9,
          color: "#eb3e22",
          label: "-0.9"
        },
        {
          gt: -0.9,
          lte: -0.8,
          color: "#ef6a26",
          label: "-0.8"
        },
        {
          gt: -0.8,
          lte: -0.7,
          color: "#f58324",
          label: "-0.7"
        },
        {
          gt: -0.7,
          lte: -0.6,
          color: "#f3a122",
          label: "-0.6"
        },
        {
          gt: -0.6,
          lte: -0.5,
          color: "#fdb52a",
          label: "-0.5"
        },
        {
          gt: -0.5,
          lte: -0.4,
          color: "#fdd31e",
          label: "-0.4"
        },
        {
          gt: -0.4,
          lte: -0.3,
          color: "#f9ef1a",
          label: "-0.3"
        },
        {
          gt: -0.3,
          lte: -0.1,
          color: "#f7fd1c",
          label: "-0.1"
        },
        {
          gt: -0.1,
          lte: 0.1,
          color: "#d9e9f1",
          label: "0.1"
        },
        {
          gt: 0.1,
          lte: 0.2,
          color: "#c7d7f1",
          label: "0.2"
        },
        {
          gt: 0.2,
          lte: 0.3,
          color: "#b1c7eb",
          label: "0.3"
        },
        {
          gt: 0.3,
          lte: 0.4,
          color: "#99b5e7",
          label: "0.4"
        },
        {
          gt: 0.4,
          lte: 0.5,
          color: "#83a5dd",
          label: "0.5"
        },
        {
          gt: 0.5,
          lte: 0.6,
          color: "#6e93d3",
          label: "0.6"
        },
        {
          gt: 0.6,
          lte: 0.7,
          color: "#6089cb",
          label: "0.7"
        },
        {
          gt: 0.7,
          lte: 0.8,
          color: "#4c7cc3",
          label: "0.8"
        },
        {
          gt: 0.8,
          lte: 0.9,
          color: "#4870bb",
          label: "0.9"
        },
        {
          gt: 0.9,
          lte: 1,
          color: "#406ab9",
          label: "1"
        },
        {
          gt: 1,
          lte: 1.5,
          color: "#2a42ab",
          label: "1.5"
        },
        {
          gt: 1.5,
          lte: 2,
          color: "#242681",
          label: "2"
        },
        {
          gt: 2,
          lte: 2.5,
          color: "#242074",
          label: "2.5"
        },
        {
          gt: 2.5,
          lte: 3,
          color: "#22206a",
          label: "3"
        },
        {
          gt: 3,
          lte: 4,
          color: "#1c622c",
          label: "4"
        },
        {
          gt: 4,
          lte: 5,
          color: "#067e42",
          label: "5"
        },
        {
          gt: 5,
          lte: 6,
          color: "#0c8b42",
          label: "6"
        },
        {
          gt: 6,
          lte: 7,
          color: "#30bd4c",
          label: "7"
        },
        {
          gt: 7,
          lte: 8,
          color: "#4ec14a",
          label: "8"
        },
        {
          gt: 8,
          lte: 9,
          color: "#58c546",
          label: "9"
        },
        {
          gt: 9,
          lte: 10,
          color: "#87742e",
          label: "10"
        }
      ]
    };
    const N = (t = null) => {
      r = {};
      var e = document.getElementById(k.value), i = M.init(e);
      i.showLoading();
      var d = (t == null ? void 0 : t.datePicker) || null, c = d || "20240716140000", b = j[t == null ? void 0 : t.type2] || 2, p = 0, a = [], m = [], g = [], o = [], s = T.value[y];
      t != null && t.address;
      var n;
      {
        a = s;
        for (var n = 0; n < a.length; n++)
          m.indexOf(a[n].Datetime) == -1 && m.push(a[n].Datetime), g.indexOf(a[n].HEIGHT + "") == -1 && g.push(a[n].HEIGHT + ""), o.push([a[n].Datetime, a[n].HEIGHT + "", a[n].SPEED_V + ""]);
      }
      r = {
        title: [
          {
            text: "",
            subtext: "",
            left: "center"
          },
          {
            text: "",
            right: "10",
            top: "10%",
            textStyle: {
              fontWeight: "normal",
              fontSize: "12"
            }
          },
          {},
          {},
          {
            text: "11-11 11:11",
            left: "15",
            bottom: "15",
            textStyle: {
              fontWeight: "normal",
              fontSize: "12"
            }
          },
          {
            text: "22-22 22:22",
            left: "40%",
            bottom: "15",
            textStyle: {
              fontWeight: "normal",
              fontSize: "12"
            }
          },
          {
            text: "33-33 33:33",
            left: "48%",
            bottom: "15",
            textStyle: {
              fontWeight: "normal",
              fontSize: "12"
            }
          },
          {
            text: "44-44 44:44",
            right: "50",
            bottom: "15",
            textStyle: {
              fontWeight: "normal",
              fontSize: "12"
            }
          }
        ],
        grid: [
          {
            top: "100",
            left: "20",
            right: "80",
            bottom: "40",
            width: "84%",
            containLabel: !0
          }
        ],
        tooltip: {
          showDelay: 0,
          formatter: function(f) {
            var u = '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">日期：' + new Date(f.value[0]).toLocaleDateString() + "</div>时间：" + new Date(new Date(f.value[0]).getTime() + 288e5).toLocaleTimeString() + "<br>高度：" + f.value[1] + "米<br>";
            return u += "垂直速度：" + parseFloat(f.value[2]).toFixed(2) + "<br>", u;
          }
        },
        toolbox: {
          right: 15,
          feature: {
            dataZoom: {},
            saveAsImage: {
              show: !0
            },
            myChange: {
              show: !0,
              title: "横坐标转换",
              icon: "path://M4 10h20v6l8-8-8-8v6h-24v12h4zM28 22h-20v-6l-8 8 8 8v-6h24v-12h-4z",
              onclick: function() {
                A == !0 ? A = !1 : A = !0, N(t);
              }
            }
          }
        },
        dataZoom: [
          //鼠标滚轴放大缩小
          {
            type: "inside",
            xAxisIndex: 0,
            filterMode: "empty"
          },
          {
            type: "inside",
            yAxisIndex: 0,
            filterMode: "empty"
          },
          {
            type: "inside",
            xAxisIndex: 0,
            filterMode: "empty"
          },
          {
            type: "inside",
            yAxisIndex: 0,
            filterMode: "empty"
          }
        ],
        xAxis: {
          type: "category",
          data: m.sort(V),
          name: "时间",
          scale: !0,
          inverse: A,
          axisLabel: {
            formatter: function(f) {
              if (f != "undefined" && f != null) {
                var u = f.substr(10, 3), S = Number(u) + 8;
                return S >= 24 && (S = S - 24), S.toString().padStart(2, "0") + ":00";
              } else
                return "";
            }
          }
        },
        yAxis: {
          type: "category",
          data: g.sort(V),
          name: "高度(m)　　　",
          nameGap: 10
        },
        series: [
          {
            name: "",
            type: "heatmap",
            data: o,
            itemStyle: {
              emphasis: {
                borderColor: "#333",
                borderWidth: 1
              }
            },
            progressive: 1e3,
            animation: !1
          }
        ]
      }, r.visualMap = Y;
      var x = B(t.eTime, 24, t.sTime), H = "", z = "";
      b == "0" ? H = "实时数据" : b == "1" ? H = "半小时平均" : b == "2" && (H = "一小时平均"), z = "";
      let v = h.value;
      r.title[0].text = v.stationName + "[" + v.Station_Id_C + "] " + H + "垂直速度" + z + " " + x, r.title[0].subtext = "　海拔高度：" + v.HEIGHT + "米　经度：" + parseFloat(v.lon).toFixed(2) + "度　纬度：" + parseFloat(v.lat).toFixed(2) + "度", r.xAxis.inverse == !1 ? (r.toolbox.feature.myChange.title = "最新在左", r.xAxis.nameLocation = "end") : (r.xAxis.nameLocation = "start", r.toolbox.feature.myChange.title = "最新在右"), i.hideLoading();
      var w = x.split("至");
      r.title[5].text = "", r.title[6].text = "", r.xAxis.inverse ? (r.title[4].text = w[1], r.title[7].text = w[0]) : (r.title[4].text = w[0], r.title[7].text = w[1]), i.setOption(r), o.length == 0 && (e.innerHTML = "<div style='width:100%;text-align:center;height:100px;line-height:100px;font-size: 25px;'>暂无数据</div>"), i.resize({
        width: 860,
        height: 400
      });
    }, J = (t, e) => {
      O = t, K(t, e);
    }, K = (t, e) => {
      var d, c;
      let i = {
        startTime: t.startTime,
        endTime: t.datePicker,
        elements: t.elements,
        staIds: t.address
        //站点
      };
      if (y = i.elements + i.startTime + i.staIds, T.value[y] && h.value)
        t.elements == "SPEED_V" ? N(t) : F(t);
      else {
        if (!(e != null && e.data)) return;
        T.value[y] = e.data, h.value = e.data[0] || {}, h.value.lon = ((d = W.stationinfo) == null ? void 0 : d.lon) || "", h.value.lat = ((c = W.stationinfo) == null ? void 0 : c.lat) || "", h.value.stationName = (C == null ? void 0 : C.stationName) || "", t.elements == "SPEED_V" ? N(t) : F(t);
      }
    };
    return E({
      setEchartsData: J
    }), (t, e) => (U(), X("div", ee));
  }
}, R = /* @__PURE__ */ $(te, [["__scopeId", "data-v-dbcab772"]]);
R.install = function(I) {
  I.component("cme-windoutline", R);
};
export {
  R as WindOutline
};
