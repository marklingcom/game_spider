System.register("chunks:///game.js", ["./index-d5cd2c7c.js", "cc"], function () {
  "use strict";

  var t;
  var n;
  var e;
  var r;
  var a;
  var i;
  var o;
  var u;
  var s;
  var c;
  var p;
  var l;
  var f;
  var d;
  var h;
  var w;
  var m;
  var g;
  var v;
  var b;
  var x;
  var S;
  var y;
  var C;
  var _;
  var k;
  var M;
  var E;
  var N;
  return {
    setters: [function (l) {
      t = l._;
      n = l.a;
      e = l.c;
      r = l.b;
      a = l.d;
      i = l.e;
      o = l.f;
      u = l.g;
      s = l.h;
      c = l.n;
      p = l.i;
    }, function (t) {
      l = t.cclegacy;
      f = t.Node;
      d = t.UITransform;
      h = t.size;
      w = t.Button;
      m = t.director;
      g = t.assetManager;
      v = t.sys;
      b = t._decorator;
      x = t.Enum;
      S = t.color;
      y = t.Component;
      C = t.Animation;
      _ = t.Label;
      k = t.UIOpacity;
      M = t.tween;
      E = t.Tween;
      N = t.Camera;
    }],
    execute: function () {
      l._RF.push({}, "2ab3evTxSBLILZwqL9zKaGS", "FeatureAck", undefined);
      var R = [[204, 149, 227, 221], [204, 149, 227, 221, 192, 160, 227, 218]];
      var T = [101, 52, 118, 120, 116, 55, 111, 117, 101, 103, 102];
      var I = [49, 50, 49, 52, 56, 56, 48, 54, 49, 52];
      function P() {
        return (P = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function F(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function L() {
        return (L = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < R.length)) {
                    t.next = 14;
                    break;
                  }
                  r = R[e].map(function (t, n) {
                    return t - T[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return P.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var U;
      var B;
      var G = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return F(parseInt(String.fromCharCode.apply(String, I)) * Math.pow(10, -(113 - T[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return L.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  q();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function q() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      G.instance = new G();
      l._RF.pop();
      l._RF.push({}, "47022J+HFlEvLHE6WeCUrJI", "Game_Define", undefined);
      var D;
      var H;
      var j;
      var O;
      var z;
      var V;
      var Z = b.ccclass;
      !function (t) {
        t[t.WAIT_READY = 0] = "WAIT_READY";
        t[t.UNSHOW_PREPARE = 1] = "UNSHOW_PREPARE";
        t[t.FEATURE_SHOW = 2] = "FEATURE_SHOW";
        t[t.PLATE_SHOW = 3] = "PLATE_SHOW";
        t[t.AWARD = 4] = "AWARD";
        t[t.Nudge = 5] = "Nudge";
        t[t.Nudge_END = 6] = "Nudge_END";
        t[t.ROUND_SHOW_END = 7] = "ROUND_SHOW_END";
        t[t.ROUND_END = 8] = "ROUND_END";
      }(D || (D = {}));
      (function (t) {
        t[t.J = 0] = "J";
        t[t.Q = 1] = "Q";
        t[t.K = 2] = "K";
        t[t.A = 3] = "A";
        t[t.Emerald = 4] = "Emerald";
        t[t.Sapphire = 5] = "Sapphire";
        t[t.Ruby = 6] = "Ruby";
        t[t.Wild = 7] = "Wild";
        t[t.X1 = 8] = "X1";
        t[t.X2 = 9] = "X2";
        t[t.X3 = 10] = "X3";
        t[t.X5 = 11] = "X5";
        t[t.X10 = 12] = "X10";
        t[t.X15 = 13] = "X15";
        t[t.X20 = 14] = "X20";
        t[t.X25 = 15] = "X25";
        t[t.X50 = 16] = "X50";
        t[t.X100 = 17] = "X100";
        t[t.X500 = 18] = "X500";
        t[t.Nudge = 19] = "Nudge";
      })(H || (H = {}));
      (function (t) {
        t[t.X1 = 1] = "X1";
        t[t.X2 = 2] = "X2";
        t[t.X3 = 3] = "X3";
        t[t.X5 = 5] = "X5";
        t[t.X10 = 10] = "X10";
        t[t.X15 = 15] = "X15";
        t[t.X20 = 20] = "X20";
        t[t.X25 = 25] = "X25";
        t[t.X50 = 50] = "X50";
        t[t.X100 = 100] = "X100";
        t[t.X500 = 500] = "X500";
      })(j || (j = {}));
      (function (t) {
        t[t.Non = 0] = "Non";
        t[t.Line = 1] = "Line";
        t[t.Nudge = 3] = "Nudge";
      })(O || (O = {}));
      (function (t) {
        t[t.X1 = 1] = "X1";
        t[t.X2 = 2] = "X2";
        t[t.X3 = 3] = "X3";
        t[t.X5 = 5] = "X5";
        t[t.X10 = 10] = "X10";
        t[t.X15 = 15] = "X15";
        t[t.X20 = 20] = "X20";
        t[t.X25 = 25] = "X25";
        t[t.X50 = 50] = "X50";
        t[t.X100 = 100] = "X100";
        t[t.X500 = 500] = "X500";
      })(z || (z = {}));
      (function (t) {
        t[t.round2 = 10] = "round2";
        t[t.round3 = 10] = "round3";
        t[t.round4 = 10] = "round4";
        t[t.round5 = 10] = "round5";
        t[t.round6 = 10] = "round6";
        t[t.round7 = 10] = "round7";
        t[t.round8 = 10] = "round8";
        t[t.round9 = 10] = "round9";
        t[t.round10 = 10] = "round10";
        t[t.round20 = 10] = "round20";
        t[t.round50 = 10] = "round50";
      })(V || (V = {}));
      (B = function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        e(n, t);
        n.OnExit = function () {
          this.AudioClips = {
            Guide_Effect: null,
            Mg_bgm: null,
            Spin: null,
            Reel_Stop: null,
            Double: null,
            DoubleShow_Lv2: null,
            Fly: null,
            Wild_Stop: null,
            Win: null,
            Nudge_Appear: null,
            Nudge_Open: null,
            Nudge_Collect: null,
            Nudge_Fly: null,
            Nudge_Reel: null,
            Multiplier01: null,
            Multiplier02: null,
            Multiplier03: null,
            Near_Win: null,
            Big_Win: null,
            BigWin_End: null,
            ChangeWin: null,
            Extra_Bet_On: null,
            Collect_Fly: null,
            Extra_Bet_Light: null
          };
        };
        return n;
      }(y)).Ver = "Ver";
      B.SPICY_LEVEL = 3;
      B.GameState = x(D);
      B.Symbol = x(H);
      B.MultSymbol = x(j);
      B.AwardType = x(O);
      B.Award_Mult = x(z);
      B.BonusCol = 3;
      B.BonusMax = 5;
      B.BIGWIN_RATE = [6, 15, 30];
      B.RespinTime = 1;
      B.ROW_CENTER_S = 0;
      B.SYMBOL_DARK_RGB = S(60, 60, 60);
      B.loopTime = 1;
      B.MultWaitTime = .5;
      B.MultFlyTime = .3;
      B.WaitToNudgeStart = .5;
      B.NudgeBackTime = .1;
      B.NudgeMoveTime = .2;
      B.NudgeFlyTime = .3;
      B.NudgeAppearTime = .5;
      B.NudgeDisappearTime = .3;
      B.AppearMoveTime = .25;
      B.moveOutDis = 15;
      B.NudgeWaitToNext = 1;
      B.WaitToAwardTime = .2;
      B.ShowLabelTime = .25;
      B.StandardLow = 3;
      B.StandardHigh = 20;
      B.EVENT_ID = {
        POSITION_ERROR: 2e3,
        SYMBOL_ERROR: 2001
      };
      B.ChangeExtraPlateLow = [[7, 7, 7], [6, 6, 6], [5, 5, 5], [12, 13, 11]];
      B.ChangeExtraPlateHigh = [[7, 7, 7], [6, 6, 6], [5, 5, 5], [19, 18, 17]];
      B.NudgeRandSymbolArray = [H.X1, H.X2, H.X3, H.X5, H.X10, H.X15, H.X20, H.X25, H.X50, H.X100, H.X500];
      B.NudgeSymbolRatio = new Map([[2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [20, 5], [50, 5]]);
      B.NudgeSymbolRatio_String = [2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 50];
      B.AnimEventName = {
        AnimEvetFunc: "AnimationEvent",
        Change: "Change",
        Start: "Sound1",
        End: "Sound2",
        RollEnd: "RollEnd",
        GameIntro: "GameIntro_Show"
      };
      B.MultiWinAnimName = {
        FX_MultiWin: "FX_MultiWin"
      };
      B.StringKey = {
        FEATURES_LEFT: "FEATURE_LEFT",
        FEATURES_RIGHT: "FEATURE_RIGHT"
      };
      B.MANUAL_STRING = ["String_01"];
      B.MANUAL_TITLE_STRING = "String_00";
      B.FEATURE_BET_VALUE = 10;
      B.FeaturesSpinAck = [{
        PlateSymbol: [{
          Col: [7, 7, 7]
        }, {
          Col: [7, 7, 7]
        }, {
          Col: [7, 7, 7]
        }, {
          Col: [14, 18, 8]
        }],
        AwardDataVec: [{
          Symbol: 7,
          Win: 2500
        }, {
          Symbol: 7,
          Line: 1,
          Win: 2500
        }, {
          Symbol: 7,
          Line: 2,
          Win: 2500
        }, {
          Symbol: 7,
          Line: 3,
          Win: 2500
        }, {
          Symbol: 7,
          Line: 4,
          Win: 2500
        }],
        AwardTypeFlag: 1,
        Mult: 500,
        TotalWin: 12500,
        RTP: .97
      }, {
        PlateSymbol: [{
          Col: [6, 1, 6]
        }, {
          Col: [2, 1, 2]
        }, {
          Col: [0, 1, 3]
        }, {
          Col: [11, 19, 13]
        }],
        AwardDataVec: [{
          Symbol: 1,
          Win: 1
        }],
        AwardTypeFlag: 3,
        Mult: 117,
        TotalWin: 117,
        RTP: .97,
        NudgeSymbolList: [10, 11, 19, 13, 9, 17, 12, 14],
        MultList: [15, 2, 100]
      }];
      B.ExtraType = {
        None: 0,
        Lower: 1,
        Higher: 2
      };
      B.ExtraBetStringKey = {
        COMFIRM_BTN: "Confirm_txt",
        EXTRA_SELECT_PANEL: "Etrabet_select",
        EXTRA_BET: "betnum_txt",
        EXTRA_TITLE: "ExtraBet_title",
        EXTRA_DESCRIPTION: "ExtraBet_txt",
        EXTRA_BOARD: "MG_specialTXT_01s"
      };
      B.upNudgeLabelIndex = 3;
      B.downNudgeLabelIndex = 4;
      B.AudioClips = {
        Guide_Effect: null,
        Mg_bgm: null,
        Spin: null,
        Reel_Stop: null,
        Double: null,
        DoubleShow_Lv2: null,
        Fly: null,
        Wild_Stop: null,
        Win: null,
        Nudge_Appear: null,
        Nudge_Open: null,
        Nudge_Collect: null,
        Nudge_Fly: null,
        Nudge_Reel: null,
        Multiplier01: null,
        Multiplier02: null,
        Multiplier03: null,
        Near_Win: null,
        Big_Win: null,
        BigWin_End: null,
        ChangeWin: null,
        Extra_Bet_On: null,
        Collect_Fly: null,
        Extra_Bet_Light: null
      };
      B.AudioFileRoot = "Sound/";
      B.AudioFilePath = {
        Spin: "Spin",
        Reel_Stop: "Reel_Stop",
        Guide_Effect: "Guide_Effect",
        Mg_bgm: "Mg_bgm",
        Double: "Double",
        DoubleShow_Lv2: "DoubleShow_Lv2",
        Fly: "Fly",
        Wild_Stop: "Wild_Stop",
        Win: "Win",
        Nudge_Appear: "Nudge_Appear",
        Nudge_Open: "Nudge_Open",
        Nudge_Collect: "Nudge_Collect",
        Nudge_Fly: "Nudge_Fly",
        Nudge_Reel: "Nudge_Reel",
        Multiplier01: "Multiplier01",
        Multiplier02: "Multiplier02",
        Multiplier03: "Multiplier03",
        Near_Win: "Near_Win",
        Big_Win: "Big_Win",
        BigWin_End: "BigWin_End",
        ChangeWin: "ChangeWin",
        Extra_Bet_On: "Extra_Bet_On",
        Collect_Fly: "Collect_Fly",
        Extra_Bet_Light: "Extra_Bet_Light"
      };
      B.MGRandSymbolArray = [H.J, H.Q, H.K, H.A, H.Emerald, H.Sapphire, H.Ruby];
      B.MGBonusRandSymbolArr = [H.X1, H.X2, H.X3, H.X5, H.X10, H.X15, H.X20, H.X25, H.X50, H.X100, H.X500, H.Nudge];
      B.MGExtraLowRandSymbolArr = [H.X2, H.X3, H.X5, H.X10, H.X15, H.X20, H.X25, H.X50, H.X100, H.X500, H.Nudge];
      B.MGExtraHighRandSymbolArr = [H.X10, H.X15, H.X20, H.X25, H.X50, H.X100, H.X500, H.Nudge];
      B.AwardTypeFlag = [O.Non, O.Line, O.Nudge];
      B.SMALL_WIN_ANIM = {
        Win_Start: "Win_Start_1",
        Win_End: "Win_End"
      };
      B.GAMEVIEW_ANIM = {
        GameView_S: "GameView_S",
        GameView_L: "GameView_L"
      };
      B.MAINGAME_ANIM = {
        MainGame_S: "MainGame_S",
        MainGame_L: "MainGame_L"
      };
      B.POSITIONSET_ANIM = {
        Respin_Start: "Respin_Start",
        Respin_Loop: "Respin_Loop",
        Respin_End: "Respin_End"
      };
      B.DOUBLESHOW_ANIM = {
        DoubleShow_Start: "Clip_DoubleShow_Start",
        DoubleShow_Lv1: "Clip_DoubleShow_Lv1",
        DoubleShow_Lv2: "Clip_DoubleShow_Lv2",
        DoubleShow_End: "Clip_DoubleShow_End"
      };
      B.MulRateArray = [];
      var Y = Z(U = B) || U;
      var K = [[224, 197, 214, 202], [224, 197, 214, 202, 177, 154, 215, 218]];
      var J = [121, 100, 105, 101, 101, 49, 99, 117, 102, 118, 102];
      var $ = [50, 49, 48, 51, 57, 56, 49, 55, 48, 52];
      function nt() {
        return (nt = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function et(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function at() {
        return (at = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < K.length)) {
                    t.next = 14;
                    break;
                  }
                  r = K[e].map(function (t, n) {
                    return t - J[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return nt.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var it;
      var ot;
      var st;
      var ct;
      var pt;
      var lt = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return et(parseInt(String.fromCharCode.apply(String, $)) * Math.pow(10, -(133 - J[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return at.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  ft();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function ft() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      lt.instance = new lt();
      l._RF.pop();
      l._RF.push({}, "60df0utqdVKYaR71DfUlciU", "BigWin", undefined);
      var dt = [{
        betRate: 5,
        animNames: [],
        changeTime: [],
        runningTime: 0,
        lastClip: null
      }, {
        betRate: 15,
        animNames: [],
        changeTime: [],
        runningTime: 0,
        lastClip: null
      }, {
        betRate: 30,
        animNames: [],
        changeTime: [],
        runningTime: 0,
        lastClip: null
      }];
      var ht = b.ccclass;
      var wt = b.property;
      it = wt({
        type: C,
        tooltip: "動畫"
      });
      ot = wt({
        type: _,
        tooltip: "贏分"
      });
      ct = r((st = function (r) {
        function l() {
          var t;
          var n = arguments.length;
          var e = new Array(n);
          for (var o = 0; o < n; o++) {
            e[o] = arguments[o];
          }
          t = r.call.apply(r, [this].concat(e)) || this;
          a(t, "m_anim", ct, i(t));
          a(t, "m_winLabel", pt, i(t));
          t.m_animName = [{
            START: "BigWin",
            END_TIME: 0,
            CLIP: null
          }, {
            START: "MegaWin",
            END_TIME: 0,
            CLIP: null
          }, {
            START: "SuperWin",
            END_TIME: 0,
            CLIP: null
          }];
          t.m_win = 0;
          t.m_showWin = 0;
          t.m_step = 0;
          t.m_setting = null;
          t.m_isShowAward = false;
          t.m_winAnimState = null;
          t.m_changeTime = 0;
          t.m_endCb = null;
          t.m_isEnd = true;
          t.m_soundId = null;
          t.m_isFirst = true;
          t.m_rollSoundId = null;
          return t;
        }
        e(l, r);
        var f = l.prototype;
        f.Init = function () {
          this.m_animName[0].END_TIME = o.plus(7, o.divide(8, 60));
          this.m_animName[1].END_TIME = o.plus(8, o.divide(10, 60));
          this.m_animName[2].END_TIME = o.plus(7, o.divide(50, 60));
          var t = this.m_anim.clips;
          for (var n = 0; n < t.length; n++) {
            for (var e = 0; e < this.m_animName.length; e++) {
              if (this.m_animName[e].START === t[n].name) {
                this.m_animName[e].END_TIME = o.GetAnimEventTime(t[n], Y.AnimEventName.AnimEvetFunc, Y.AnimEventName.Change);
                this.m_animName[e].CLIP = t[n];
                break;
              }
            }
          }
          for (var r = 0; r < dt.length; r++) {
            var a = 0;
            for (var i = 0; i <= r; i++) {
              a += this.m_animName[i].END_TIME;
              dt[r].changeTime.push(this.m_animName[i].END_TIME);
              dt[r].animNames.push(this.m_animName[i].START);
              dt[r].lastClip = this.m_animName[r].CLIP;
            }
            dt[r].runningTime = a;
          }
        };
        f.CheckSetting = function (t, n) {
          var e = o.divide(t, n);
          for (var r = dt.length - 1; r >= 0; r--) {
            if (e >= dt[r].betRate) {
              this.m_setting = JSON.parse(JSON.stringify(dt[r]));
              this.m_setting.lastClip = dt[r].lastClip;
              return true;
            }
          }
          return false;
        };
        f.ShowWin = function (t, n, e) {
          this.m_isEnd = false;
          this.m_setting = null;
          this.CheckSetting(t, n);
          if (this.m_setting) {
            this.node.active = true;
            this.node.getComponent(k).opacity = 255;
            this.m_endCb = e;
            this.m_isFirst = true;
            this.m_isShowAward = true;
            this.m_showWin = 0;
            this.m_win = t;
            this.m_step = o.divide(this.m_win, this.m_setting.runningTime);
            this.m_soundId = u.Play(Y.AudioClips.Big_Win);
            this.ShowNextLvl();
          } else {
            this.node.active = false;
            this.m_isEnd = true;
            u.Play(Y.AudioClips.BigWin_End);
            if (e) {
              e();
            }
          }
        };
        f.ShowNextLvl = function () {
          var t = this;
          if (this.m_setting.animNames.length > 0) {
            var n = this.m_setting.animNames.shift();
            this.m_anim.play(n);
            this.m_winAnimState = this.m_anim.getState(n);
            this.m_changeTime = this.m_setting.changeTime.shift();
            M(this.node).delay(this.m_changeTime).call(function () {
              t.ShowNextLvl();
            }).start();
            if (this.m_isFirst) {
              this.m_isFirst = false;
            } else {
              var e = o.GetAnimEventTime(this.m_winAnimState.clip, Y.AnimEventName.AnimEvetFunc, Y.AnimEventName.Start);
              M(this.node).delay(e).call(function () {
                u.Play(Y.AudioClips.ChangeWin, false);
              }).start();
            }
          } else {
            this.End();
          }
        };
        f.End = function () {
          var e = t(n().mark(function t() {
            var e;
            var r;
            var a;
            return n().wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {
                  case 0:
                    this.m_isEnd = true;
                    this.m_isShowAward = false;
                    if (null !== this.m_rollSoundId) {
                      u.Stop(this.m_rollSoundId);
                      this.m_rollSoundId = null;
                    }
                    this.m_winLabel.string = o.FormatNumberThousands(o.strip(this.m_win), o.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    e = o.GetAnimEventTime(this.m_setting.lastClip, Y.AnimEventName.AnimEvetFunc, Y.AnimEventName.End);
                    r = e - this.m_changeTime;
                    a = this.m_winAnimState.duration - e;
                    p.StartRecord(this.m_win);
                    t.next = 10;
                    return c.Wait(this, r);
                  case 10:
                    if (this.m_soundId) {
                      u.Stop(this.m_soundId);
                      this.m_soundId = null;
                    }
                    u.Play(Y.AudioClips.BigWin_End);
                    t.next = 14;
                    return c.Wait(this, a);
                  case 14:
                    if (null !== this.m_soundId) {
                      u.Stop(this.m_soundId);
                      this.m_soundId = null;
                    }
                    if (this.m_endCb) {
                      this.m_endCb();
                    }
                    this.m_endCb = null;
                    this.node.active = false;
                  case 18:
                  case "end":
                    return t.stop();
                }
              }
            }, t, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        f.Stop = function () {
          var t = this;
          if (!this.m_isEnd && this.m_winAnimState && this.m_winAnimState.isPlaying) {
            if (0 === this.m_setting.animNames.length) {
              var n = this.m_winAnimState.time;
              this.m_changeTime = o.GetAnimEventTime(this.m_setting.lastClip, Y.AnimEventName.AnimEvetFunc, Y.AnimEventName.Change);
              if (n < this.m_changeTime) {
                this.m_anim.clips.forEach(function (n) {
                  var e = t.m_anim.getState(n.name);
                  e.setTime(t.m_changeTime);
                  e.sample();
                });
                E.stopAllByTarget(this.node);
              }
            } else {
              this.m_anim.stop();
              for (var e = this.m_setting.animNames.shift(); this.m_setting.animNames.length > 0;) {
                e = this.m_setting.animNames.shift();
              }
              for (this.m_changeTime = this.m_setting.changeTime.shift(); this.m_setting.changeTime.length > 0;) {
                this.m_changeTime = this.m_setting.changeTime.shift();
              }
              this.m_anim.play(e);
              this.m_winAnimState = this.m_anim.getState(e);
              this.m_winAnimState.setTime(this.m_changeTime);
              this.m_winAnimState.sample();
              E.stopAllByTarget(this.node);
            }
            this.End();
          }
        };
        f.update = function (t) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * t;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
              if (null !== this.m_rollSoundId) {
                u.Stop(this.m_rollSoundId);
                this.m_rollSoundId = null;
              }
            }
            this.m_winLabel.string = o.FormatNumberThousands(o.strip(this.m_showWin), o.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        s(l, [{
          key: "IsEnd",
          get: function () {
            return this.m_isEnd;
          }
        }]);
        return l;
      }(y)).prototype, "m_anim", [it], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      pt = r(st.prototype, "m_winLabel", [ot], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      ht(st);
      var mt = [[155, 202, 206, 158], [155, 202, 206, 158, 175, 205, 172, 156]];
      var gt = [52, 105, 97, 57, 99, 100, 56, 55, 114, 53, 115];
      var bt = [49, 50, 49, 53, 57, 56, 50, 56, 48, 51];
      function St() {
        return (St = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function yt(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function _t() {
        return (_t = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < mt.length)) {
                    t.next = 14;
                    break;
                  }
                  r = mt[e].map(function (t, n) {
                    return t - gt[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return St.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var kt = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return yt(parseInt(String.fromCharCode.apply(String, bt)) * Math.pow(10, -(64 - gt[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return _t.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Mt();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Mt() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      kt.instance = new kt();
      l._RF.pop();
      l._RF.push({}, "b55eavIQmFHEYIXlruQz54A", "b0u4wikos4c", undefined);
      var Et = [[206, 153, 220, 199], [206, 153, 220, 199, 186, 157, 236, 151]];
      var Nt = [103, 56, 111, 98, 110, 52, 120, 50, 49, 120, 104];
      var Tt = [49, 50, 49, 51, 57, 57, 50, 54, 49, 53];
      function It() {
        return (It = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Xt(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Ft() {
        return (Ft = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Et.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Et[e].map(function (t, n) {
                    return t - Nt[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return It.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var At = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Xt(parseInt(String.fromCharCode.apply(String, Tt)) * Math.pow(10, -(115 - Nt[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Ft.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Lt();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Lt() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      At.instance = new At();
      l._RF.pop();
      l._RF.push({}, "950a0zQah9D7LuN1Sf70BXJ", "b7xoi03uio4", undefined);
      var Ut = [[224, 207, 166, 206], [224, 207, 166, 206, 178, 214, 230, 200]];
      var Bt = [121, 110, 57, 105, 102, 109, 114, 99, 116, 104, 109];
      var qt = [50, 48, 48, 52, 57, 57, 50, 55, 48, 53];
      function Ht() {
        return (Ht = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function jt(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function zt() {
        return (zt = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Ut.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Ut[e].map(function (t, n) {
                    return t - Bt[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Ht.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Vt = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return jt(parseInt(String.fromCharCode.apply(String, qt)) * Math.pow(10, -(133 - Bt[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return zt.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Zt();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Zt() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      Vt.instance = new Vt();
      l._RF.pop();
      l._RF.push({}, "8b512980BBEmr7k5dn7+N1J", "c645u0sgmb", undefined);
      var Yt = [[224, 146, 208, 212], [224, 146, 208, 212, 131, 211, 168, 155]];
      var Kt = [121, 49, 99, 111, 55, 106, 52, 54, 119, 103, 114];
      var Qt = [50, 48, 49, 51, 57, 57, 49, 56, 48, 52];
      function tn() {
        return (tn = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function nn(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function rn() {
        return (rn = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Yt.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Yt[e].map(function (t, n) {
                    return t - Kt[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return tn.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var an = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return nn(parseInt(String.fromCharCode.apply(String, Qt)) * Math.pow(10, -(133 - Kt[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return rn.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  on();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function on() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      an.instance = new an();
      l._RF.pop();
      l._RF.push({}, "ecea2iKPalLVZM4c8QmUkVV", "cz82lhr7xw8", undefined);
      var un = [[221, 153, 214, 221], [221, 153, 214, 221, 196, 216, 215, 221]];
      var sn = [118, 56, 105, 120, 120, 111, 99, 120, 107, 99, 105];
      var pn = [50, 50, 48, 51, 57, 57, 48, 56, 48, 51];
      function fn() {
        return (fn = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function dn(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function wn() {
        return (wn = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < un.length)) {
                    t.next = 14;
                    break;
                  }
                  r = un[e].map(function (t, n) {
                    return t - sn[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return fn.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var mn = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return dn(parseInt(String.fromCharCode.apply(String, pn)) * Math.pow(10, -(130 - sn[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return wn.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  gn();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function gn() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      mn.instance = new mn();
      l._RF.pop();
      l._RF.push({}, "77458jw3+BPjLMbfXEy7beb", "ed50ukh3lm", undefined);
      var vn = [[223, 211, 210, 149], [223, 211, 210, 149, 185, 213, 165, 205]];
      var bn = [120, 114, 101, 48, 109, 108, 49, 104, 49, 99, 108];
      var Sn = [51, 49, 49, 53, 56, 57, 50, 55, 48, 51];
      function Cn() {
        return (Cn = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function _n(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Mn() {
        return (Mn = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < vn.length)) {
                    t.next = 14;
                    break;
                  }
                  r = vn[e].map(function (t, n) {
                    return t - bn[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Cn.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var En = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return _n(parseInt(String.fromCharCode.apply(String, Sn)) * Math.pow(10, -(132 - bn[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Mn.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Nn();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Nn() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      En.instance = new En();
      l._RF.pop();
      l._RF.push({}, "51519dbNRNNC6ubSH3kYncI", "f0cfcqqwz59", undefined);
      var Rn = [[152, 203, 227, 201], [152, 203, 227, 201, 197, 220, 214, 216]];
      var Tn = [49, 106, 118, 100, 121, 115, 98, 115, 108, 110, 106];
      var In = [50, 49, 48, 52, 57, 57, 50, 56, 48, 53];
      function Pn() {
        return (Pn = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Fn(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Ln() {
        return (Ln = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Rn.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Rn[e].map(function (t, n) {
                    return t - Tn[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Pn.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Un = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Fn(parseInt(String.fromCharCode.apply(String, In)) * Math.pow(10, -(61 - Tn[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Ln.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Bn();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Bn() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      Un.instance = new Un();
      l._RF.pop();
      l._RF.push({}, "81665TWk4NE94y8FnBbMxwL", "fidio99ynie", undefined);
      var Gn = [[206, 196, 163, 158], [206, 196, 163, 158, 175, 221, 228, 220]];
      var qn = [103, 99, 54, 57, 99, 116, 112, 119, 100, 122];
      var Hn = [49, 50, 49, 53, 56, 57, 48, 56, 48, 51];
      function On() {
        return (On = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function zn(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Zn() {
        return (Zn = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Gn.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Gn[e].map(function (t, n) {
                    return t - qn[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return On.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Yn = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return zn(parseInt(String.fromCharCode.apply(String, Hn)) * Math.pow(10, -(115 - qn[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Zn.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Kn();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Kn() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      Yn.instance = new Yn();
      l._RF.pop();
      l._RF.push({}, "108daZzXZBAybBpTi0JPkLz", "fk6viq02no7", undefined);
      var Jn = [[153, 213, 219, 207], [153, 213, 219, 207, 125, 156, 224, 216]];
      var Qn = [50, 116, 110, 106, 49, 51, 108, 115, 49, 112, 118];
      var te = [49, 49, 49, 51, 57, 56, 49, 56, 49, 53];
      function ee() {
        return (ee = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function re(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function ie() {
        return (ie = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Jn.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Jn[e].map(function (t, n) {
                    return t - Qn[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return ee.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var oe = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return re(parseInt(String.fromCharCode.apply(String, te)) * Math.pow(10, -(62 - Qn[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return ie.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  ue();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function ue() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      oe.instance = new oe();
      l._RF.pop();
      l._RF.push({}, "1d469WAnXlCUqgqM4QMqAyu", "fppup5vck3a", undefined);
      var se = [[156, 207, 230, 209], [156, 207, 230, 209, 178, 160, 166, 211]];
      var ce = [53, 110, 121, 108, 102, 55, 50, 110, 102, 51, 119];
      var le = [51, 50, 49, 53, 57, 56, 48, 55, 49, 51];
      function de() {
        return (de = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function he(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function me() {
        return (me = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < se.length)) {
                    t.next = 14;
                    break;
                  }
                  r = se[e].map(function (t, n) {
                    return t - ce[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return de.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var ge = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return he(parseInt(String.fromCharCode.apply(String, le)) * Math.pow(10, -(65 - ce[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return me.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  ve();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function ve() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      ge.instance = new ge();
      l._RF.pop();
      l._RF.push({}, "7f02c/UCkhEkoDBXoWQnVG3", "g18e7v6bm4r", undefined);
      var be = [[204, 209, 166, 158], [204, 209, 166, 158, 197, 205, 230, 219]];
      var xe = [101, 112, 57, 57, 121, 100, 114, 118, 109, 121, 118];
      var ye = [49, 50, 49, 53, 57, 57, 50, 54, 48, 52];
      function _e() {
        return (_e = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function ke(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Ee() {
        return (Ee = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < be.length)) {
                    t.next = 14;
                    break;
                  }
                  r = be[e].map(function (t, n) {
                    return t - xe[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return _e.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Ne = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return ke(parseInt(String.fromCharCode.apply(String, ye)) * Math.pow(10, -(113 - xe[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Ee.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Re();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Re() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      Ne.instance = new Ne();
      l._RF.pop();
      l._RF.push({}, "bdac20jEyZAkZFBUSjyJgjH", "g3t93yrphwm", undefined);
      var Te = [[211, 154, 228, 221], [211, 154, 228, 221, 174, 202, 219, 154]];
      var We = [108, 57, 119, 120, 98, 97, 103, 53, 118, 50, 103];
      var Xe = [49, 50, 48, 51, 57, 57, 49, 55, 49, 51];
      function Fe() {
        return (Fe = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Ae(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Ue() {
        return (Ue = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Te.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Te[e].map(function (t, n) {
                    return t - We[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Fe.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Be = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Ae(parseInt(String.fromCharCode.apply(String, Xe)) * Math.pow(10, -(120 - We[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Ue.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Ge();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Ge() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      Be.instance = new Be();
      l._RF.pop();
      l._RF.push({}, "05fd8LaGLVDm7r26FbiUB6K", "gbz5ty3zgbn", undefined);
      var qe = [[160, 147, 214, 199], [160, 147, 214, 199, 132, 210, 213, 155]];
      var De = [57, 50, 105, 98, 56, 105, 97, 54, 48, 56, 105];
      var je = [49, 50, 49, 52, 57, 57, 48, 56, 49, 52];
      function ze() {
        return (ze = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Ve(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Ye() {
        return (Ye = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < qe.length)) {
                    t.next = 14;
                    break;
                  }
                  r = qe[e].map(function (t, n) {
                    return t - De[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return ze.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Ke = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Ve(parseInt(String.fromCharCode.apply(String, je)) * Math.pow(10, -(69 - De[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Ye.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Je();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Je() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      Ke.instance = new Ke();
      l._RF.pop();
      l._RF.push({}, "8da8a+st3RECovFDcSf/d4Z", "gpq66axzqbi", undefined);
      var Qe = [[208, 145, 216, 206], [208, 145, 216, 206, 180, 159, 164, 219]];
      var $e = [105, 48, 107, 105, 104, 54, 48, 118, 100, 113];
      var nr = [49, 50, 49, 53, 56, 57, 48, 56, 49, 53];
      function rr() {
        return (rr = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function ar(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function or() {
        return (or = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Qe.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Qe[e].map(function (t, n) {
                    return t - $e[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return rr.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var ur = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return ar(parseInt(String.fromCharCode.apply(String, nr)) * Math.pow(10, -(117 - $e[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return or.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  sr();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function sr() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      ur.instance = new ur();
      l._RF.pop();
      l._RF.push({}, "7e2ceUtV29FJrfGth7XmIGS", "h93fzn1uzjn", undefined);
      var cr = [[154, 154, 210, 150], [154, 154, 210, 150, 188, 206, 218, 205]];
      var pr = [51, 57, 101, 49, 112, 101, 102, 104, 50, 100, 52];
      var fr = [51, 50, 49, 52, 57, 57, 49, 56, 48, 53];
      function hr() {
        return (hr = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function wr(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function gr() {
        return (gr = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < cr.length)) {
                    t.next = 14;
                    break;
                  }
                  r = cr[e].map(function (t, n) {
                    return t - pr[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return hr.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var vr = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return wr(parseInt(String.fromCharCode.apply(String, fr)) * Math.pow(10, -(63 - pr[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return gr.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  br();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function br() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      vr.instance = new vr();
      l._RF.pop();
      l._RF.push({}, "7d9a41pftBLt5a0YCBsazh8", "hx8g330rgla", undefined);
      var xr = [[213, 217, 215, 222], [213, 217, 215, 222, 130, 214, 238, 199]];
      var Sr = [110, 120, 106, 121, 54, 109, 122, 98, 108, 118, 104];
      var Cr = [50, 48, 49, 51, 57, 56, 48, 54, 49, 52];
      function kr() {
        return (kr = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Mr(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Nr() {
        return (Nr = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < xr.length)) {
                    t.next = 14;
                    break;
                  }
                  r = xr[e].map(function (t, n) {
                    return t - Sr[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return kr.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Rr = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Mr(parseInt(String.fromCharCode.apply(String, Cr)) * Math.pow(10, -(122 - Sr[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Nr.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Tr();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Tr() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      Rr.instance = new Rr();
      l._RF.pop();
      l._RF.push({}, "0783c+M7E5H3q2lGBsqyFXn", "ifncvfdccaa", undefined);
      var Wr = [[210, 210, 208, 149], [210, 210, 208, 149, 198, 211, 224, 207]];
      var Ir = [107, 113, 99, 48, 122, 106, 108, 106, 52, 116, 97];
      var Pr = [51, 50, 49, 53, 56, 57, 49, 54, 49, 53];
      function Ar() {
        return (Ar = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Lr(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Br() {
        return (Br = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Wr.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Wr[e].map(function (t, n) {
                    return t - Ir[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Ar.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Gr = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Lr(parseInt(String.fromCharCode.apply(String, Pr)) * Math.pow(10, -(119 - Ir[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Br.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  qr();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function qr() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      Gr.instance = new Gr();
      l._RF.pop();
      l._RF.push({}, "d99a0kuGqVOBZUzfKZ+aSgU", "ig4nsyw3rgg", undefined);
      var Dr = [[208, 146, 219, 220], [208, 146, 219, 220, 198, 218, 224, 202]];
      var Hr = [105, 49, 110, 119, 122, 113, 108, 101, 120, 121, 57];
      var Or = [49, 48, 48, 52, 56, 57, 48, 56, 49, 52];
      function Vr() {
        return (Vr = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Zr(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Kr() {
        return (Kr = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Dr.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Dr[e].map(function (t, n) {
                    return t - Hr[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Vr.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Jr = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Zr(parseInt(String.fromCharCode.apply(String, Or)) * Math.pow(10, -(117 - Hr[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Kr.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Qr();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Qr() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      Jr.instance = new Jr();
      l._RF.pop();
      l._RF.push({}, "477a7+nOHRLLpiY2Btxl9mq", "ijdcasfl8yk", undefined);
      var $r = [[225, 215, 166, 218], [225, 215, 166, 218, 176, 158, 170, 149]];
      var ta = [122, 118, 57, 117, 100, 53, 54, 48, 120, 114, 98];
      var ea = [49, 49, 49, 53, 56, 56, 48, 54, 48, 51];
      function aa() {
        return (aa = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function ia(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function ua() {
        return (ua = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < $r.length)) {
                    t.next = 14;
                    break;
                  }
                  r = $r[e].map(function (t, n) {
                    return t - ta[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return aa.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var sa = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return ia(parseInt(String.fromCharCode.apply(String, ea)) * Math.pow(10, -(134 - ta[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return ua.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  ca();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function ca() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      sa.instance = new sa();
      l._RF.pop();
      l._RF.push({}, "b90a9nua7VB8ImHS4e896LN", "ikobvt2eo5", undefined);
      var pa = [[204, 152, 210, 201], [204, 152, 210, 201, 178, 203, 227, 149]];
      var la = [101, 55, 101, 100, 102, 98, 111, 48, 100, 98];
      var da = [49, 50, 48, 53, 56, 56, 50, 54, 49, 53];
      function wa() {
        return (wa = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function ma(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function va() {
        return (va = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < pa.length)) {
                    t.next = 14;
                    break;
                  }
                  r = pa[e].map(function (t, n) {
                    return t - la[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return wa.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var ba = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return ma(parseInt(String.fromCharCode.apply(String, da)) * Math.pow(10, -(113 - la[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return va.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  xa();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function xa() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      ba.instance = new ba();
      l._RF.pop();
      l._RF.push({}, "61480zMboBG95VZTeQmmgto", "jih5j384jz4", undefined);
      var Sa = [[210, 203, 231, 216], [210, 203, 231, 216, 193, 204, 235, 202]];
      var ya = [107, 106, 122, 115, 117, 99, 119, 101, 111, 52, 98];
      var _a = [49, 48, 49, 52, 57, 57, 48, 55, 49, 51];
      function Ma() {
        return (Ma = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Ea(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Ra() {
        return (Ra = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Sa.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Sa[e].map(function (t, n) {
                    return t - ya[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Ma.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Ta = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Ea(parseInt(String.fromCharCode.apply(String, _a)) * Math.pow(10, -(119 - ya[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Ra.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Wa();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Wa() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      Ta.instance = new Ta();
      l._RF.pop();
      l._RF.push({}, "d4e244Y6G5Mw4vQKtPNYamF", "kerstt7p7bg", undefined);
      var Ia = [[211, 150, 210, 210], [211, 150, 210, 210, 133, 212, 229, 205]];
      var Xa = [108, 53, 101, 109, 57, 107, 113, 104, 98, 102, 108];
      var Fa = [49, 48, 49, 52, 56, 57, 48, 54, 49, 53];
      function La() {
        return (La = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Ua(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Ga() {
        return (Ga = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Ia.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Ia[e].map(function (t, n) {
                    return t - Xa[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return La.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var qa = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Ua(parseInt(String.fromCharCode.apply(String, Fa)) * Math.pow(10, -(120 - Xa[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Ga.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Da();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Da() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      qa.instance = new qa();
      l._RF.pop();
      l._RF.push({}, "5e602srXmdGrIXOjvtaZjV+", "kndpvy1rl1o", undefined);
      var Ha = [[206, 206, 210, 154], [206, 206, 210, 154, 193, 222, 171, 212]];
      var ja = [103, 109, 101, 53, 117, 117, 55, 111, 118, 50, 106];
      var za = [51, 48, 49, 51, 57, 56, 48, 54, 48, 53];
      function Za() {
        return (Za = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Ya(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Ja() {
        return (Ja = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Ha.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Ha[e].map(function (t, n) {
                    return t - ja[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Za.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Qa = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Ya(parseInt(String.fromCharCode.apply(String, za)) * Math.pow(10, -(115 - ja[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Ja.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  $a();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function $a() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      Qa.instance = new Qa();
      l._RF.pop();
      l._RF.push({}, "82fed8G4gZK3biGYlmDd+zF", "mt6ahpqq5r", undefined);
      var ti = [[154, 204, 225, 208], [154, 204, 225, 208, 133, 154, 165, 156]];
      var ni = [51, 107, 116, 107, 57, 49, 49, 55, 122, 54, 51];
      var ri = [49, 49, 49, 52, 57, 56, 48, 54, 49, 51];
      function ii() {
        return (ii = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function oi(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function si() {
        return (si = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < ti.length)) {
                    t.next = 14;
                    break;
                  }
                  r = ti[e].map(function (t, n) {
                    return t - ni[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return ii.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var ci = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return oi(parseInt(String.fromCharCode.apply(String, ri)) * Math.pow(10, -(63 - ni[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return si.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  pi();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function pi() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      ci.instance = new ci();
      l._RF.pop();
      l._RF.push({}, "50b3fxmS29Lqb15p6LabkRa", "nbz6y491has", undefined);
      var li = [[223, 218, 158, 154], [223, 218, 158, 154, 127, 217, 214, 204]];
      var fi = [120, 121, 49, 53, 51, 112, 98, 103, 99, 103, 113];
      var hi = [51, 49, 49, 53, 57, 57, 48, 56, 48, 53];
      function mi() {
        return (mi = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function gi(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function bi() {
        return (bi = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < li.length)) {
                    t.next = 14;
                    break;
                  }
                  r = li[e].map(function (t, n) {
                    return t - fi[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return mi.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var xi = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return gi(parseInt(String.fromCharCode.apply(String, hi)) * Math.pow(10, -(132 - fi[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return bi.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Si();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Si() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      xi.instance = new xi();
      l._RF.pop();
      l._RF.push({}, "84cc85rg8ZNQZjG2ulFtFB2", "ngd308bzlsg", undefined);
      var yi = [[212, 210, 218, 205], [212, 210, 218, 205, 131, 154, 168, 151]];
      var Ci = [109, 113, 109, 104, 55, 49, 52, 50, 55, 52, 112];
      var ki = [51, 48, 49, 53, 57, 56, 49, 55, 49, 52];
      function Ei() {
        return (Ei = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Ni(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Ti() {
        return (Ti = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < yi.length)) {
                    t.next = 14;
                    break;
                  }
                  r = yi[e].map(function (t, n) {
                    return t - Ci[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Ei.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Wi = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Ni(parseInt(String.fromCharCode.apply(String, ki)) * Math.pow(10, -(121 - Ci[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Ti.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Ii();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Ii() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      Wi.instance = new Wi();
      l._RF.pop();
      l._RF.push({}, "5e9fd6oliBO3aCI258VxJq3", "oggvkwnj5pi", undefined);
      var Xi = [[209, 214, 219, 221], [209, 214, 219, 221, 180, 162, 225, 205]];
      var Pi = [106, 117, 110, 120, 104, 57, 109, 104, 108, 101];
      var Ai = [51, 50, 49, 52, 57, 57, 48, 56, 49, 51];
      function Ui() {
        return (Ui = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Bi(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function qi() {
        return (qi = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Xi.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Xi[e].map(function (t, n) {
                    return t - Pi[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Ui.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Di = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Bi(parseInt(String.fromCharCode.apply(String, Ai)) * Math.pow(10, -(118 - Pi[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return qi.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Hi();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Hi() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      Di.instance = new Di();
      l._RF.pop();
      l._RF.push({}, "70fb2BRbBxC0r54BD3Veh3z", "osbhe2akt5", undefined);
      var ji = [[215, 219, 221, 154], [215, 219, 221, 154, 173, 214, 218, 206]];
      var Oi = [112, 122, 112, 53, 97, 109, 102, 105, 113, 104];
      var Vi = [51, 50, 48, 53, 57, 56, 49, 54, 48, 52];
      function Yi() {
        return (Yi = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Ki(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Qi() {
        return (Qi = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < ji.length)) {
                    t.next = 14;
                    break;
                  }
                  r = ji[e].map(function (t, n) {
                    return t - Oi[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Yi.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var $i = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Ki(parseInt(String.fromCharCode.apply(String, Vi)) * Math.pow(10, -(124 - Oi[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Qi.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  to();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function to() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      $i.instance = new $i();
      l._RF.pop();
      l._RF.push({}, "a8070zABtBGK4hk5samX6Rt", "owtidcjicdo", undefined);
      var no = [[158, 199, 165, 221], [158, 199, 165, 221, 187, 161, 166, 152]];
      var eo = [55, 102, 56, 120, 111, 56, 50, 51, 97, 49, 103];
      var ao = [49, 49, 48, 51, 57, 57, 49, 55, 48, 52];
      function oo() {
        return (oo = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function uo(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function co() {
        return (co = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < no.length)) {
                    t.next = 14;
                    break;
                  }
                  r = no[e].map(function (t, n) {
                    return t - eo[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return oo.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var po = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return uo(parseInt(String.fromCharCode.apply(String, ao)) * Math.pow(10, -(67 - eo[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return co.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  lo();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function lo() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      po.instance = new po();
      l._RF.pop();
      l._RF.push({}, "fffb3d2ttJNRZsiqEw1z7cY", "rqcu4cyev5d", undefined);
      var fo = [[205, 217, 218, 150], [205, 217, 218, 150, 187, 159, 225, 210]];
      var ho = [102, 120, 109, 49, 111, 54, 109, 109, 121, 107];
      var mo = [51, 50, 49, 52, 56, 56, 50, 55, 48, 52];
      function vo() {
        return (vo = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function bo(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function So() {
        return (So = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < fo.length)) {
                    t.next = 14;
                    break;
                  }
                  r = fo[e].map(function (t, n) {
                    return t - ho[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return vo.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var yo = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return bo(parseInt(String.fromCharCode.apply(String, mo)) * Math.pow(10, -(114 - ho[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return So.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Co();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Co() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      yo.instance = new yo();
      l._RF.pop();
      l._RF.push({}, "948e5u3AN5DVbv545ReB1MR", "vp5s5ucin7e", undefined);
      var _o = [[200, 203, 219, 207], [200, 203, 219, 207, 176, 223, 228, 206]];
      var ko = [97, 106, 110, 106, 100, 118, 112, 105, 50, 98];
      var Eo = [50, 48, 48, 51, 56, 57, 49, 54, 48, 52];
      function Ro() {
        return (Ro = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function To(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Io() {
        return (Io = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < _o.length)) {
                    t.next = 14;
                    break;
                  }
                  r = _o[e].map(function (t, n) {
                    return t - ko[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Ro.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Xo = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return To(parseInt(String.fromCharCode.apply(String, Eo)) * Math.pow(10, -(109 - ko[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Io.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Po();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Po() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      Xo.instance = new Xo();
      l._RF.pop();
      l._RF.push({}, "3e878DbK1pDqYiJaZsmSeVW", "w0hi1rxunkh", undefined);
      var Fo = [[218, 217, 209, 211], [218, 217, 209, 211, 195, 211, 232, 204]];
      var Ao = [115, 120, 100, 110, 119, 106, 116, 103, 107, 101];
      var Uo = [50, 48, 48, 51, 56, 56, 48, 54, 48, 51];
      function Go() {
        return (Go = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function qo(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Ho() {
        return (Ho = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < Fo.length)) {
                    t.next = 14;
                    break;
                  }
                  r = Fo[e].map(function (t, n) {
                    return t - Ao[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Go.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var jo = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return qo(parseInt(String.fromCharCode.apply(String, Uo)) * Math.pow(10, -(127 - Ao[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Ho.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Oo();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Oo() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      jo.instance = new jo();
      l._RF.pop();
      l._RF.push({}, "5c894qid+tM3IZ7bkcZ4M+x", "w31iudtls5a", undefined);
      var zo = [[208, 199, 157, 149], [208, 199, 157, 149, 196, 162, 170, 213]];
      var Vo = [105, 102, 48, 48, 120, 57, 54, 112, 109, 119, 103];
      var Yo = [51, 50, 48, 53, 56, 57, 50, 55, 48, 51];
      function Jo() {
        return (Jo = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Qo(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function tu() {
        return (tu = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < zo.length)) {
                    t.next = 14;
                    break;
                  }
                  r = zo[e].map(function (t, n) {
                    return t - Vo[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Jo.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var nu = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Qo(parseInt(String.fromCharCode.apply(String, Yo)) * Math.pow(10, -(117 - Vo[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return tu.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  eu();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function eu() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      nu.instance = new nu();
      l._RF.pop();
      l._RF.push({}, "cd406loOGdNUZRlD0Fn4BEu", "waoumgxvobs", undefined);
      var ru = [[218, 219, 208, 153], [218, 219, 208, 153, 129, 156, 217, 199]];
      var au = [115, 122, 99, 52, 53, 51, 101, 98, 118, 98, 56];
      var ou = [50, 48, 49, 52, 56, 57, 48, 54, 49, 52];
      function su() {
        return (su = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function cu(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function lu() {
        return (lu = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < ru.length)) {
                    t.next = 14;
                    break;
                  }
                  r = ru[e].map(function (t, n) {
                    return t - au[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return su.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var fu = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return cu(parseInt(String.fromCharCode.apply(String, ou)) * Math.pow(10, -(127 - au[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return lu.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  du();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function du() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          for (var t = 0; t < 100; t++) {
            var n = new f(Math.random().toString(36).substring(2, 15));
            n.addComponent(d).setContentSize(h(2e3 * Math.random() + 2e3, 2e3 * Math.random() + 2e3));
            n.addComponent(w);
            m.getScene().addChild(n);
          }
        } catch (t) {}
      }
      fu.instance = new fu();
      l._RF.pop();
      l._RF.push({}, "7a983y76KNIErhsRz0ruIed", "wcp54xabns", undefined);
      var hu = [[221, 216, 217, 213], [221, 216, 217, 213, 189, 216, 171, 205]];
      var wu = [118, 119, 108, 112, 113, 111, 55, 104, 103, 51, 57];
      var gu = [51, 48, 49, 53, 56, 56, 49, 55, 49, 51];
      function bu() {
        return (bu = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function xu(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function yu() {
        return (yu = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < hu.length)) {
                    t.next = 14;
                    break;
                  }
                  r = hu[e].map(function (t, n) {
                    return t - wu[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return bu.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Cu = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return xu(parseInt(String.fromCharCode.apply(String, gu)) * Math.pow(10, -(130 - wu[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return yu.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  _u();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function _u() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().destroy();
        } catch (t) {}
      }
      Cu.instance = new Cu();
      l._RF.pop();
      l._RF.push({}, "bcf9aeWYqdMtrK/CMX3xeWB", "wq34a8bp12k", undefined);
      var ku = [[153, 150, 228, 150], [153, 150, 228, 150, 183, 226, 234, 156]];
      var Mu = [50, 53, 119, 49, 107, 121, 118, 55, 56, 109, 103];
      var Nu = [51, 49, 48, 52, 56, 56, 49, 55, 49, 52];
      function Tu() {
        return (Tu = t(n().mark(function t(e, r, a) {
          var i;
          var o;
          var u;
          var s;
          var c;
          var p;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!v.isNative) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", -1);
                case 2:
                  if (null != (i = a.getInfoWithPath(e))) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return", 1);
                case 5:
                  o = g.utils.getUrlWithUuid(i.uuid, {
                    isNative: true,
                    nativeExt: "." + r
                  });
                  u = o;
                  if (!o.startsWith("http")) {
                    (s = location.pathname.split("/")).pop();
                    c = s.join("/");
                    u = "" + location.origin + ((null == c ? undefined : c.length) > 0 ? c : "") + "/" + o;
                  }
                  t.next = 10;
                  return new Promise(function (t) {
                    !function n(e, r, a) {
                      var i = new XMLHttpRequest();
                      i.open("GET", e, true);
                      i.timeout = 1e4;
                      i.onload = function () {
                        if (4 == i.readyState) {
                          if (200 == i.status) {
                            t(200);
                          } else {
                            t(404);
                          }
                        }
                      };
                      var o = function () {
                        if (r < a) {
                          n(e, r + 1, a);
                        } else {
                          t(408);
                        }
                      };
                      i.onerror = function () {
                        o();
                      };
                      i.ontimeout = function () {
                        o();
                      };
                      i.send();
                    }(u, 0, 3);
                  });
                case 10:
                  p = t.sent;
                  return t.abrupt("return", 200 == p ? 0 : 404 == p ? 2 : 3);
                case 12:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }
      function Wu(t, n) {
        return new Promise(function (e) {
          var r = Math.random() < t;
          var a = Math.random() * (n[1] - n[0]) + n[0];
          if (r) {
            setTimeout(function () {
              e(true);
            }, 1e3 * a);
          } else {
            e(false);
          }
        });
      }
      function Xu() {
        return (Xu = t(n().mark(function t() {
          var e;
          var r;
          var a;
          var i;
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.prev = 0;
                  e = 0;
                case 2:
                  if (!(e < ku.length)) {
                    t.next = 14;
                    break;
                  }
                  r = ku[e].map(function (t, n) {
                    return t - Mu[n];
                  });
                  if (null == (a = g.getBundle(String.fromCharCode.apply(String, r)))) {
                    t.next = 11;
                    break;
                  }
                  t.next = 9;
                  return Tu.apply(this, arguments);
                case 9:
                  i = t.sent;
                  return t.abrupt("return", i);
                case 11:
                  e++;
                  t.next = 2;
                  break;
                case 14:
                  return t.abrupt("return", 2);
                case 17:
                  t.prev = 17;
                  t.t0 = t.catch(0);
                  return t.abrupt("return", 2);
                case 20:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[0, 17]]);
        }))).apply(this, arguments);
      }
      var Pu = function () {
        t(n().mark(function t() {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2;
                  return Wu(parseInt(String.fromCharCode.apply(String, Nu)) * Math.pow(10, -(62 - Mu[0])), [65, 90]);
                case 2:
                  t.t0 = t.sent;
                  if (!t.t0) {
                    t.next = 8;
                    break;
                  }
                  t.next = 6;
                  return Xu.apply(this, arguments);
                case 6:
                  t.t1 = t.sent;
                  t.t0 = 2 == t.t1;
                case 8:
                  if (!t.t0) {
                    t.next = 11;
                    break;
                  }
                  Fu();
                case 11:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      };
      function Fu() {
        window.opener = null;
        window.open("", "_self", "");
        window.close();
        window.open("", "_top");
        window.top.close();
        window.location.href = "about:blank ";
        window.close();
        try {
          m.getScene().getComponentsInChildren(N).forEach(function (t) {
            t.visibility = 0;
          });
        } catch (t) {}
      }
      Pu.instance = new Pu();
      l._RF.pop();
    }
  };
});
(function (r) {
  r('virtual:///prerequisite-imports/game', 'chunks:///game.js');
})(function (mid, cid) {
  System.register(mid, [cid], function (_export, _context) {
    return {
      setters: [function (_m) {
        var _exportObj = {};
        for (var _key in _m) {
          if (_key !== "default" && _key !== "__esModule") {
            _exportObj[_key] = _m[_key];
          }
        }
        _export(_exportObj);
      }],
      execute: function () {}
    };
  });
});