
let polylineStyleJson={
  "lines": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      }
    }
  },
  "LINES_18": {//冷锋
    "glyph" : "LINES_18", //根据这个名字查找对应的样式
     "lineStyle": {
       "Style": {
         "stroke": {//线条的样式
           "Stroke": {
             "color": "rgb(0,0,255)", //颜色 也可以是rgba 
             "width": 2  //线条的宽度
           }
         }
       }
     },
     "options": {
       "angle":  Math.PI /4 ,//0.7853981633974483,//弧度  默认值 Math.PI / 4,
       "sqrt_2": 1.414, //square 默认值 建议不修改
       "color": "rgb(255,0,0)",
       "radius":10,//绘制的半圆的半径
       "distance":60,//绘制图形的间隔 贴合线的半圆的距离间隔
       "coefficient":0.8,//曲线的系数  值越小，越接近真实绘制的曲线，值越大，曲率越大
     }
 },
 
  "LINES_19": {//暖锋
      "glyph" : "LINES_19", //根据这个名字查找对应的样式
        "lineStyle": {
          "Style": {
            "stroke": {//线条的样式
              "Stroke": {
                "color": "rgba(0,0,255,1)", //颜色 也可以是rgba 
                "width": 2  //线条的宽度
              }
            }
          }
        },
        "options": {
          "color": "rgba(0,0,255,1)",
          "radius":10,//绘制的半圆的半径
          "distance":60,//绘制图形的间隔 贴合线的半圆的距离间隔
          "coefficient":0.8,//曲线的系数  值越小，越接近真实绘制的曲线，值越大，曲率越大
        }
  },
  "LINES_20": {//暖锋
    "glyph" : "LINES_19", //根据这个名字查找对应的样式
      "lineStyle": {
        "Style": {
          "stroke": {//线条的样式
            "Stroke": {
              "color": "rgb(255,0,0)", //颜色 也可以是rgba 
              "width": 2  //线条的宽度
            }
          }
        }
      },
      "options": {
        "color": "rgb(255,0,0)",
        "radius":10,//绘制的半圆的半径
        "distance":60,//绘制图形的间隔 贴合线的半圆的距离间隔
        "coefficient":0.8,//曲线的系数  值越小，越接近真实绘制的曲线，值越大，曲率越大
      }
},
  "LINES_41": {//  //静止锋
    "glyph" : "LINES_41", //根据这个名字查找对应的样式
    "lineStyle": {
      "Style": {
        "stroke": {//线条的样式
          "Stroke": {
            "color": "rgb(0,0,255)", //颜色 也可以是rgba 
            "width": 2  //线条的宽度
          }
        }
      }
    },
    "options": {
      "angle":  Math.PI /4 ,//0.7853981633974483,//弧度  默认值 Math.PI / 4,
      "sqrt_2": 1.414, //square 默认值 建议不修改
      "color": "rgb(255,0,0)",
      "radius":10,//绘制的半圆的半径

      "distance":60,//绘制图形的间隔 贴合线的半圆的距离间隔
      "coefficient":0.8,//曲线的系数  值越小，越接近真实绘制的曲线，值越大，曲率越大
    }
  },
  "LINES_51": {    //锢囚锋
    "glyph" : "LINES_51", //根据这个名字查找对应的样式
    "lineStyle": {
      "Style": {
        "stroke": {//线条的样式
          "Stroke": {
            "color": "rgb(0,0,255)", //颜色 也可以是rgba 
            "width": 2  //线条的宽度
          }
        }
      }
    },
    "options": {
      "angle":  Math.PI /4 ,//0.7853981633974483,//弧度  默认值 Math.PI / 4,
      "sqrt_2": 1.414, //square 默认值 建议不修改
      "color": "rgb(255,0,0)",
      "radius":10,//绘制的半圆的半径
      "distance":60,//绘制图形的间隔 贴合线的半圆的距离间隔
      "coefficient":0.8,//曲线的系数  值越小，越接近真实绘制的曲线，值越大，曲率越大
    }
  },

  "LINESYMBOLS_1218": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },

  "LINESYMBOLS_1219": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINESYMBOLS_1102": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "REGION_8": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "REGION_32": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "REGION_1": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "REGION_4": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "REGION_2": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "REGION_16": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINES_39": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },

  "LINES_21": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINES_31": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINES_38": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINESYMBOLS_0": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINESYMBOLS_1110": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINESYMBOLS_1111": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINESYMBOLS_1113": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINESYMBOLS_1112": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINESYMBOLS_1115": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINESYMBOLS_1114": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  },
  "LINESYMBOLS_1116": {
    "Style": {
      "stroke": {
        "Stroke": {
          "color": "red",
          "width": 5,
          "lineDash": [
            5,
            10,
            25
          ]
        }
      },
      "text": {
        "Text": {
          "text": "Sample Text",
          "font": "12px Calibri,sans-serif",
          "fill": {
            "Fill": {
              "color": "#ff0000ff"
            }
          },
          "stroke": {
            "Stroke": {
              "color": "#ffffff",
              "width": 2
            }
          },
          "offsetX": 0,
          "offsetY": 0,
          "textAlign": "center",
          "placement": "point",
          "textBaseline": "middle",
          "scale": 2,
          "maxAngle": 0.7853981633974483,
          "overflow": "truncate",
          "rotation": 0
        }
      }
    }
  }
}

// export default polylineStyleJson