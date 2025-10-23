System.register("chunks:///game.js", ["./index-b8ef2842.js", "cc"], function (exports, module) {
  "use strict";

  var _asyncToGenerator;
  var _regeneratorRuntime;
  var node;
  var _inheritsLoose;
  var _applyDecoratedDescriptor;
  var _initializerDefineProperty;
  var _assertThisInitialized;
  var SpineKit;
  var _createClass;
  var node$1;
  var node$2;
  var node$3;
  var node$4;
  var node$5;
  var _createForOfIteratorHelperLoose;
  var CommonState;
  var BaseState;
  var node$6;
  var Common_IdleState;
  var node$7;
  var node$8;
  var node$9;
  var node$a;
  var DEFAULT_TITLE_KEY;
  var node$b;
  var node$c;
  var ManualComponent;
  var AstarteInit;
  var SwitchOffKeyDefine;
  var SlotBottomBarState;
  var BetValueChange;
  var BottomBar_UIName;
  var node$d;
  var node$e;
  var node$f;
  var CommonEventName;
  var node$g;
  var node$h;
  var node$i;
  var node$j;
  var node$k;
  var node$l;
  var cclegacy;
  var _decorator;
  var Component;
  var error;
  var sp;
  var instantiate;
  var Enum;
  var color;
  var Prefab;
  var Node;
  var Animation;
  var Label;
  var UIOpacity;
  var tween;
  var v3;
  var SpriteFrame;
  var UITransform;
  var Size;
  var Sprite;
  var Vec3;
  var log;
  var CCInteger;
  var SpriteAtlas;
  var Button;
  var input;
  var Input;
  var KeyCode;
  var screen;
  var view;
  var ResolutionPolicy;
  return {
    setters: [function (e) {
      _asyncToGenerator = e.o;
      _regeneratorRuntime = e.p;
      node = e.e;
      _inheritsLoose = e.a;
      _applyDecoratedDescriptor = e._;
      _initializerDefineProperty = e.b;
      _assertThisInitialized = e.c;
      SpineKit = e.v;
      _createClass = e.d;
      node$1 = e.g;
      node$2 = e.w;
      node$3 = e.h;
      node$4 = e.j;
      node$5 = e.x;
      _createForOfIteratorHelperLoose = e.u;
      CommonState = e.k;
      BaseState = e.B;
      node$6 = e.i;
      Common_IdleState = e.y;
      node$7 = e.z;
      node$8 = e.A;
      node$9 = e.D;
      node$a = e.r;
      DEFAULT_TITLE_KEY = e.E;
      node$b = e.F;
      node$c = e.n;
      ManualComponent = e.M;
      AstarteInit = e.G;
      SwitchOffKeyDefine = e.S;
      SlotBottomBarState = e.t;
      BetValueChange = e.H;
      BottomBar_UIName = e.I;
      node$d = e.J;
      node$e = e.K;
      node$f = e.f;
      CommonEventName = e.C;
      node$g = e.L;
      node$h = e.N;
      node$i = e.O;
      node$j = e.P;
      node$k = e.Q;
      node$l = e.s;
    }, function (e) {
      cclegacy = e.cclegacy;
      _decorator = e._decorator;
      Component = e.Component;
      error = e.error;
      sp = e.sp;
      instantiate = e.instantiate;
      Enum = e.Enum;
      color = e.color;
      Prefab = e.Prefab;
      Node = e.Node;
      Animation = e.Animation;
      Label = e.Label;
      UIOpacity = e.UIOpacity;
      tween = e.tween;
      v3 = e.v3;
      SpriteFrame = e.SpriteFrame;
      UITransform = e.UITransform;
      Size = e.Size;
      Sprite = e.Sprite;
      Vec3 = e.Vec3;
      log = e.log;
      CCInteger = e.CCInteger;
      SpriteAtlas = e.SpriteAtlas;
      Button = e.Button;
      input = e.input;
      Input = e.Input;
      KeyCode = e.KeyCode;
      screen = e.screen;
      view = e.view;
      ResolutionPolicy = e.ResolutionPolicy;
    }],
    execute: function () {
      var _dec;
      var _class;
      cclegacy._RF.push({}, "3a89e8Dv7tGGJFJNNmytyD5", "AnimPlayer", undefined);
      var ccclass = _decorator.ccclass;
      _dec = ccclass("AnimPlayer");
      var AnimPlayer = _dec(_class = function () {
        function e(e) {
          this.m_useComponent = null;
          this.m_useComponent = e.getComponent(Component);
          if (!this.m_useComponent) {
            error("錯誤! 找不到Component");
          }
        }
        e.prototype.Play = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, i, n, r) {
            var o;
            var s;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    if (undefined === r) {
                      r = 1;
                    }
                    t.node.active = true;
                    if (o = t.getState(i)) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return");
                  case 6:
                    o.repeatCount = n ? Infinity : 1;
                    o.speed = r;
                    t.play(i);
                    if (n) {
                      e.next = 13;
                      break;
                    }
                    s = o.duration;
                    e.next = 13;
                    return node.Wait(this.m_useComponent, s);
                  case 13:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, i, n, r) {
            return e.apply(this, arguments);
          };
        }();
        return e;
      }()) || _class;
      var _class$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "714d0OibDZNQZHDcXUxjFni", "NodeShake", undefined);
      var ccclass$1 = _decorator.ccclass;
      var NodeShake = ccclass$1(_class$1 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          (t = e.call.apply(e, [this].concat(n)) || this).isShake = false;
          t.value = 0;
          t.m_posOffset = 0;
          t.m_oldPosY = null;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.ShakeStart = function () {
          this.m_oldPosY = this.node.position.y;
          this.isShake = true;
          this.value = 0;
        };
        i.ShakeEnd = function () {
          this.isShake = false;
          this.node.setPosition(this.node.position.x, this.m_oldPosY, this.node.position.z);
        };
        i.update = function (e) {
          if (this.isShake) {
            this.value += e;
            if (this.value >= .02) {
              this.value = 0;
              this.m_posOffset = this.node.position.y + 10 * Math.random() - 5;
              this.node.setPosition(this.node.position.x, this.m_posOffset, this.node.position.z);
            }
          }
        };
        return t;
      }(Component)) || _class$1;
      var _dec$1;
      var _dec2;
      var _class$2;
      var _class2;
      var _descriptor;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "97443TPBHZJ9b+sV1XivIW7", "DataStructure", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ff64a2sV3VJHJ2CbrP1IWUr", "BaseSpine", undefined);
      var ccclass$2 = _decorator.ccclass;
      var property = _decorator.property;
      _dec$1 = ccclass$2("BaseSpine");
      _dec2 = property({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _class2 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.Stop = function () {
          this.m_spine.clearTrack(0);
          this.m_spine.setToSetupPose();
        };
        i.SetSkin = function (e, t) {
          if (undefined === t) {
            t = this.m_spine;
          }
          t.setSkin(e);
          this.SetNodeActivity(false);
        };
        i.SetNodeActivity = function (e) {
          if (this.node.active != e) {
            this.node.active = e;
          }
        };
        i.GetAnimationTime = function (e, t) {
          if (undefined === t) {
            t = this.m_spine;
          }
          var i = t.node.parent.active;
          t.node.parent.active = true;
          var n = t.findAnimation(e).duration;
          t.node.parent.active = i;
          return n;
        };
        i.PlayAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, i, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === i) {
                      i = false;
                    }
                    if (undefined === n) {
                      n = 0;
                    }
                    this.SetNodeActivity(true);
                    e.next = 5;
                    return SpineKit.PlayAnimation(this.m_spine, t, i, n);
                  case 5:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, i, n) {
            return e.apply(this, arguments);
          };
        }();
        return t;
      }(Component);
      _descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var BaseSpine = _dec$1(_class$2 = _class2) || _class$2;
      var _dec$2;
      var _class$3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a3a0d1lfVBFroYF4rf6gHTe", "SymbolSpine", undefined);
      var ccclass$3 = _decorator.ccclass;
      _dec$2 = ccclass$3("SymbolSpine");
      var SymbolSpine = _dec$2(_class$3 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          (t = e.call.apply(e, [this].concat(n)) || this).WIN_ANIM = "Win";
          t.STOP_ANIM = "Stop";
          t.WILD_WIN_ANIM = "Wild_Win";
          t.NEARWIN_ANIM = "NearWin";
          t.DOWN_ANIM = "Down";
          t.NUDGE_START = "Nudge_Start";
          t.NUDGE_LOOP = "Nudge_Loop";
          t.NUDGE_END = "Nudge_End";
          t.NUDGE_BLACK = "Nudge_Black";
          t.COLLECT_ANIM = "Collect";
          t.m_symbolIdx = -1;
          t.m_col = 0;
          t.m_row = 0;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.GetSpineName = function () {
          return "Symbol_" + this.m_symbolIdx.toString().padStart(2, "0");
        };
        i.SetSpineIdx = function (e) {
          this.m_symbolIdx = e;
        };
        i.GetSpineIdx = function () {
          return this.m_symbolIdx;
        };
        i.PlayWinShow = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnim(this.WIN_ANIM, true);
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.PlayReelStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, this.STOP_ANIM);
                  case 2:
                    this.SetNodeActivity(false);
                    if (t) {
                      t();
                    }
                  case 4:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }();
        i.PlayNearWin = function () {
          this.PlayAnim(this.NEARWIN_ANIM, true);
        };
        i.PlayNudgeStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnim(this.NUDGE_START);
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.PlayNudgeLoop = function () {
          this.PlayAnim(this.NUDGE_LOOP, true);
        };
        i.PlayNudgeEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnim(this.NUDGE_END);
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.PlayCollect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnim(this.COLLECT_ANIM);
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.PlayDown = function () {
          this.PlayAnim(this.DOWN_ANIM);
        };
        i.GetDownAnimDuration = function () {
          return this.GetAnimationTime(this.DOWN_ANIM);
        };
        _createClass(t, [{
          key: "Col",
          get: function () {
            return this.m_col;
          },
          set: function (e) {
            this.m_col = e;
          }
        }, {
          key: "Row",
          get: function () {
            return this.m_row;
          },
          set: function (e) {
            this.m_row = e;
          }
        }]);
        return t;
      }(BaseSpine)) || _class$3;
      var _dec$3;
      var _class$4;
      var _class2$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3d769yxz5hMsZtWAT+Ft2lW", "NodeObjPool", undefined);
      var ccclass$4 = _decorator.ccclass;
      _dec$3 = ccclass$4("ObjectPool");
      _class2$1 = function () {
        function e() {
          this.m_prefabData = new Map();
          this.pool = new Map();
          if (e._instance) {
            throw new Error("Error: Instantiation failed: Use NodePool.getInstance() instead of new.");
          }
          e._instance = this;
        }
        e.GetInstance = function () {
          if (!this._instance) {
            this._instance = new e();
          }
          return e._instance;
        };
        var t = e.prototype;
        t.SetPrefabData = function (e, t) {
          if (this.m_prefabData.has(e)) {
            error("錯誤! Pool存入重複名稱:" + e);
          } else {
            this.m_prefabData.set(e, t);
          }
        };
        t.GetNode = function (e) {
          if (this.pool.has(e) && this.pool.get(e).length > 0) {
            return this.pool.get(e).pop();
          }
          if (this.m_prefabData.has(e)) {
            var t = this.m_prefabData.get(e);
            return instantiate(t);
          }
          error("錯誤! 找不到名稱 " + e + " 的Prefab");
        };
        t.ReturnNode = function (e, t) {
          if (!this.pool.has(e)) {
            this.pool.set(e, []);
          }
          t.parent = null;
          this.pool.get(e).push(t);
        };
        t.clearPool = function (e) {
          if (this.pool.has(e)) {
            this.pool.get(e).forEach(function (e) {
              return e.destroy();
            });
            this.pool.get(e).length = 0;
          }
        };
        t.ClearAll = function () {
          this.pool.forEach(function (e) {
            e.forEach(function (e) {
              return e.destroy();
            });
          });
          this.pool.clear();
        };
        return e;
      }();
      _class2$1._instance = new _class2$1();
      var NodeObjPool = _dec$3(_class$4 = _class2$1) || _class$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "596e9MhMqpHVIQDNe/qOdAx", "FeatureAck", undefined);
      var FeatureAck_MG = {
        RoundQueue: [{
          PlateSymbol: [2, 2, 2, 10],
          AwardDataVec: [{
            Count: 3,
            Win: 5e3,
            Mult: 10,
            Award: 5
          }],
          RespinTotalMult: 10,
          RoundWin: 5e3,
          RespinMult: 10
        }],
        TotalWin: 5e3,
        RTP: .97,
        Bet: 15
      };
      var FeatureAck_BG = {
        RoundQueue: [{
          PlateSymbol: [3, 3, 3, 5],
          AwardDataVec: [{
            Count: 3,
            Win: 1e3,
            Mult: 1,
            Award: 6
          }],
          AwardTypeFlag: 2,
          RespinTotalMult: 1,
          RoundWin: 1e3,
          RespinMult: 1
        }, {
          PlateSymbol: [3, 3, 3, 6],
          AwardDataVec: [{
            Count: 3,
            Win: 1e3,
            Mult: 1,
            Award: 6
          }],
          AwardTypeFlag: 4,
          RespinNowRound: 1,
          RespinTotalMult: 2,
          RoundWin: 1e3,
          RespinMult: 1
        }, {
          PlateSymbol: [3, 3, 3, 7],
          AwardDataVec: [{
            Count: 3,
            Win: 2e3,
            Mult: 2,
            Award: 6
          }],
          AwardTypeFlag: 4,
          RespinNowRound: 2,
          RespinTotalMult: 4,
          RoundWin: 2e3,
          RespinMult: 2
        }, {
          PlateSymbol: [3, 3, 3, 8],
          AwardDataVec: [{
            Count: 3,
            Win: 3e3,
            Mult: 3,
            Award: 6
          }],
          AwardTypeFlag: 4,
          RespinNowRound: 3,
          RespinTotalMult: 7,
          RoundWin: 3e3,
          RespinMult: 3
        }, {
          PlateSymbol: [3, 3, 3, 9],
          AwardDataVec: [{
            Count: 3,
            Win: 5e3,
            Mult: 5,
            Award: 6
          }],
          AwardTypeFlag: 4,
          RespinNowRound: 4,
          RespinTotalMult: 12,
          RoundWin: 5e3,
          RespinMult: 5
        }, {
          PlateSymbol: [3, 3, 3, 10],
          AwardDataVec: [{
            Count: 3,
            Win: 1e4,
            Mult: 10,
            Award: 6
          }],
          AwardTypeFlag: 4,
          RespinNowRound: 5,
          RespinTotalMult: 22,
          RoundWin: 1e4,
          RespinMult: 10
        }, {
          PlateSymbol: [3, 3, 3, 11],
          AwardTypeFlag: 12,
          RespinNowRound: 6,
          RespinTotalMult: 22
        }],
        TotalWin: 22e3,
        RTP: .97,
        Bet: 15
      };
      var _class$5;
      var _class2$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "797ddeUlDVOU4nf57irQN6d", "Game_Define", undefined);
      var ccclass$5 = _decorator.ccclass;
      var GameState;
      var Symbol;
      var Award_Type;
      var Award_Mult;
      !function (e) {
        e[e.WAIT_READY = 0] = "WAIT_READY";
        e[e.UNSHOW_PREPARE = 1] = "UNSHOW_PREPARE";
        e[e.FEATURE_SHOW = 2] = "FEATURE_SHOW";
        e[e.PLATE_SHOW = 3] = "PLATE_SHOW";
        e[e.AWARD = 4] = "AWARD";
        e[e.RESPIN = 5] = "RESPIN";
        e[e.ROUND_SHOW_END = 6] = "ROUND_SHOW_END";
        e[e.ROUND_END = 7] = "ROUND_END";
      }(GameState || (GameState = {}));
      (function (e) {
        e[e.BAR = 0] = "BAR";
        e[e.BAR2 = 1] = "BAR2";
        e[e.SEVEN = 2] = "SEVEN";
        e[e.SEVEN2 = 3] = "SEVEN2";
        e[e.SEVEN3 = 4] = "SEVEN3";
        e[e.RESPIN = 5] = "RESPIN";
        e[e.X1 = 6] = "X1";
        e[e.X2 = 7] = "X2";
        e[e.X3 = 8] = "X3";
        e[e.X5 = 9] = "X5";
        e[e.X10 = 10] = "X10";
        e[e.EMPTY = 11] = "EMPTY";
      })(Symbol || (Symbol = {}));
      (function (e) {
        e[e.Any = 0] = "Any";
        e[e.AnyBar = 1] = "AnyBar";
        e[e.Any7 = 2] = "Any7";
        e[e.Bar = 3] = "Bar";
        e[e.Bar2 = 4] = "Bar2";
        e[e.Seven = 5] = "Seven";
        e[e.Seven2 = 6] = "Seven2";
        e[e.Seven3 = 7] = "Seven3";
      })(Award_Type || (Award_Type = {}));
      (function (e) {
        e[e.X1 = 1] = "X1";
        e[e.X2 = 2] = "X2";
        e[e.X3 = 3] = "X3";
        e[e.X5 = 5] = "X5";
        e[e.X10 = 10] = "X10";
      })(Award_Mult || (Award_Mult = {}));
      _class2$2 = function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        _inheritsLoose(t, e);
        t.OnExit = function () {
          this.AudioClips = {
            Debut: null,
            MG_BGM: null,
            Reel_Spin: null,
            Reel_Stop: null,
            Win_Small: null,
            Win_Big_03: null,
            Bonus_Stop_0: null,
            Bonus_Stop_X1: null,
            Bonus_Stop_X2: null,
            Bonus_Stop_X3: null,
            Bonus_Stop_X5: null,
            Bonus_Stop_X10: null,
            Bonus_Stop_Respin: null,
            Reel_Nudge: null,
            Award_bar: null,
            Award_7: null,
            Award_77: null,
            Award_777: null,
            Respin_Start: null,
            Respin_BGM: null,
            Respin_Nearwin: null,
            Respin_End: null,
            Bonus_Fly: null,
            Bonus_Hit: null
          };
        };
        return t;
      }(Component);
      _class2$2.Ver = "001";
      _class2$2.SPICY_LEVEL = 3;
      _class2$2.GameState = Enum(GameState);
      _class2$2.Symbol = Enum(Symbol);
      _class2$2.AwardType = Enum(Award_Type);
      _class2$2.Award_Mult = Enum(Award_Mult);
      _class2$2.BonusCol = 3;
      _class2$2.BIGWIN_RATE = [6, 15, 30];
      _class2$2.RespinTime = 1;
      _class2$2.COL = 3;
      _class2$2.ROW = 3;
      _class2$2.ROW_CENTER_S = 0;
      _class2$2.SYMBOL_DARK_RGB = color(60, 60, 60);
      _class2$2.BaseWinTime = .5;
      _class2$2.SmallWinTime = 1;
      _class2$2.BigWinTime = 7;
      _class2$2.ReSpinEndTime = 5;
      _class2$2.MachineAniTime = .3;
      _class2$2.ReelOffectProbability = 50;
      _class2$2.WaitToAwardTime = .2;
      _class2$2.ShowLabelTime = .5;
      _class2$2.WaitToShake = .2;
      _class2$2.ShakeTime = .2;
      _class2$2.WaitToNudge = .05;
      _class2$2.NudgeTime = .2;
      _class2$2.NudgeAllTime = .7;
      _class2$2.StringKey = {
        FEATURES_LEFT: "FEATURE_LEFT",
        FEATURES_RIGHT: "FEATURE_RIGHT"
      };
      _class2$2.MANUAL_STRING = ["String_01"];
      _class2$2.MANUAL_TITLE_STRING = "String_00";
      _class2$2.FEATURE_BET_VALUE = 15;
      _class2$2.FeaturesSpinAck = [FeatureAck_MG, FeatureAck_BG];
      _class2$2.AudioClips = {
        Debut: null,
        MG_BGM: null,
        Reel_Spin: null,
        Reel_Stop: null,
        Win_Small: null,
        Win_Big_03: null,
        Bonus_Stop_0: null,
        Bonus_Stop_X1: null,
        Bonus_Stop_X2: null,
        Bonus_Stop_X3: null,
        Bonus_Stop_X5: null,
        Bonus_Stop_X10: null,
        Bonus_Stop_Respin: null,
        Reel_Nudge: null,
        Award_bar: null,
        Award_7: null,
        Award_77: null,
        Award_777: null,
        Respin_Start: null,
        Respin_BGM: null,
        Respin_Nearwin: null,
        Respin_End: null,
        Bonus_Fly: null,
        Bonus_Hit: null
      };
      _class2$2.AudioFileRoot = "Sound/";
      _class2$2.AudioFilePath = {
        Debut: "Debut",
        MG_BGM: "MG_BGM",
        Reel_Spin: "Reel_Spin",
        Reel_Stop: "Reel_Stop",
        Win_Small: "Win_Small",
        Win_Big_03: "Win_Big_03",
        Bonus_Stop_0: "Bonus_Stop_0",
        Bonus_Stop_X1: "Bonus_Stop_X1",
        Bonus_Stop_X2: "Bonus_Stop_X2",
        Bonus_Stop_X3: "Bonus_Stop_X3",
        Bonus_Stop_X5: "Bonus_Stop_X5",
        Bonus_Stop_X10: "Bonus_Stop_X10",
        Bonus_Stop_Respin: "Bonus_Stop_Respin",
        Reel_Nudge: "Reel_Nudge",
        Award_bar: "Award_bar",
        Award_7: "Award_7",
        Award_77: "Award_77",
        Award_777: "Award_777",
        Respin_Start: "Respin_Start",
        Respin_BGM: "Respin_BGM",
        Respin_NearWin: "Respin_NearWin",
        Respin_End: "Respin_End"
      };
      _class2$2.MGRandSymbolArray = [Symbol.BAR, Symbol.BAR2, Symbol.SEVEN, Symbol.SEVEN2, Symbol.SEVEN3];
      _class2$2.MGBonusRandSymbolArr = [Symbol.RESPIN, Symbol.X2, Symbol.X3, Symbol.X5, Symbol.X10];
      _class2$2.BGBonusRandSymbolArr = [Symbol.X1, Symbol.X2, Symbol.X3, Symbol.X5, Symbol.X10];
      _class2$2.SMALL_WIN_ANIM = {
        Win_Start: "Win_Start_1",
        Win_End: "Win_End"
      };
      _class2$2.GAMEVIEW_ANIM = {
        GameView_S: "GameView_S",
        GameView_L: "GameView_L"
      };
      _class2$2.MAINGAME_ANIM = {
        MainGame_S: "MainGame_S",
        MainGame_L: "MainGame_L"
      };
      _class2$2.POSITIONSET_ANIM = {
        Respin_Start: "Respin_Start",
        Respin_Loop: "Respin_Loop",
        Respin_End: "Respin_End"
      };
      var Game_Define = ccclass$5(_class$5 = _class2$2) || _class$5;
      var _dec$4;
      var _dec2$1;
      var _dec3;
      var _dec4;
      var _dec5;
      var _dec6;
      var _dec7;
      var _dec8;
      var _dec9;
      var _dec10;
      var _dec11;
      var _dec12;
      var _dec13;
      var _dec14;
      var _dec15;
      var _class2$3;
      var _descriptor$1;
      var _descriptor2;
      var _descriptor3;
      var _descriptor4;
      var _descriptor5;
      var _descriptor6;
      var _descriptor7;
      var _descriptor8;
      var _descriptor9;
      var _descriptor10;
      var _descriptor11;
      var _descriptor12;
      var _descriptor13;
      var _descriptor14;
      var _descriptor15;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "394e72JYgpJK6UACSxatreM", "EffectPlate", undefined);
      var property$1 = _decorator.property;
      _dec$4 = property$1({
        type: Prefab,
        tooltip: "Symbol 動態"
      });
      _dec2$1 = property$1({
        type: Node,
        tooltip: "symbol特效的父節點"
      });
      _dec3 = property$1({
        type: Node,
        tooltip: "中線橫"
      });
      _dec4 = property$1({
        type: Node,
        tooltip: "中線直"
      });
      _dec5 = property$1({
        type: Animation,
        tooltip: "中線橫動畫"
      });
      _dec6 = property$1({
        type: Animation,
        tooltip: "中線直動畫"
      });
      _dec7 = property$1({
        type: Node,
        tooltip: "中獎機台特效橫"
      });
      _dec8 = property$1({
        type: Node,
        tooltip: "中獎機台特效直"
      });
      _dec9 = property$1({
        type: Animation,
        tooltip: "中respin宣告跟結算"
      });
      _dec10 = property$1({
        type: Label,
        tooltip: "respin結算金額"
      });
      _dec11 = property$1({
        type: sp.Skeleton,
        tooltip: "respin乘倍版"
      });
      _dec12 = property$1({
        type: Label,
        tooltip: "respin倍率顯示"
      });
      _dec13 = property$1({
        type: Node,
        tooltip: "整個respin"
      });
      _dec14 = property$1({
        type: sp.Skeleton,
        tooltip: "respinFly物件"
      });
      _dec15 = property$1({
        type: Label,
        tooltip: "respinFlyLabel"
      });
      _class2$3 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_symbolEffectPrefabs", _descriptor$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_effectParent", _descriptor2, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_slotReels = null;
          t.m_symbolSpines = [];
          t.m_declareAnimName = {
            RespinL: "Declare_Respin_L",
            RespinS: "Declare_Respin_S",
            ComplimentL: "Compliment_Start_L",
            ComplimentS: "Compliment_Start_S"
          };
          t.m_respinAnimName = {
            Start_L: "Start_L",
            Start_S: "Start_S",
            End_L: "End_L",
            End_S: "End_S",
            Plus_L: "Plus_L",
            Plus_S: "Plus_S",
            Loop_L: "Loop_L",
            Loop_S: "Loop_S"
          };
          t.m_respinFlyAniName = {
            Fly1: "Fly1",
            Fly2: "Fly2"
          };
          _initializerDefineProperty(t, "m_line_L", _descriptor3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_line_S", _descriptor4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_aniLine_L", _descriptor5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_aniLine_S", _descriptor6, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_machineFX_L", _descriptor7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_machineFX_S", _descriptor8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_declare", _descriptor9, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_declareLabel", _descriptor10, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_respinFx", _descriptor11, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_respinLabel", _descriptor12, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_respin", _descriptor13, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_respinFly", _descriptor14, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_respinFlyLabel", _descriptor15, _assertThisInitialized(t));
          t.m_nowRespinMu = 1;
          t.m_respinBgmId = 0;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.Init = function (e, t) {
          this.m_gameView = e;
          this.m_slotReels = t;
          for (var i = 0; i < this.m_symbolEffectPrefabs.length; i++) {
            var n = "Symbol_" + i.toString().padStart(2, "0");
            NodeObjPool.GetInstance().SetPrefabData(n, this.m_symbolEffectPrefabs[i]);
          }
        };
        i.onDisable = function () {};
        i.DoFade = function (e, t, i) {
          return new Promise(function (n) {
            var r = e.getComponent(UIOpacity);
            if (!r) {
              r = e.addComponent(UIOpacity);
            }
            tween(r).to(i, {
              opacity: t
            }, {
              easing: "smooth"
            }).call(function () {
              n();
            }).start();
          });
        };
        i.ShowWinLine = function () {
          if (this.m_gameView.IsLandscape) {
            this.m_aniLine_L.node.active = true;
            this.m_aniLine_S.node.active = false;
          } else {
            this.m_aniLine_S.node.active = true;
            this.m_aniLine_L.node.active = false;
          }
        };
        i.CheckRotation = function () {
          if (this.m_aniLine_L.node.active || this.m_aniLine_S.node.active) {
            this.ShowWinLine();
          }
        };
        i.PlayAllWinLine = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, i) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.ShowSymbolEffect(t, i);
                  case 1:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, i) {
            return e.apply(this, arguments);
          };
        }();
        i.CloseAward = function () {
          this.CleanAllSymbolAnim();
          this.m_symbolSpines = [];
          this.m_aniLine_L.node.active = false;
          this.m_aniLine_S.node.active = false;
        };
        i.ShowMachineFX = function () {
          if (this.m_gameView.IsLandscape) {
            this.m_machineFX_L.active = true;
            this.DoFade(this.m_machineFX_L, 255, Game_Define.MachineAniTime);
            this.m_machineFX_S.active = false;
          } else {
            this.m_machineFX_L.active = false;
            this.m_machineFX_S.active = true;
            this.DoFade(this.m_machineFX_S, 255, Game_Define.MachineAniTime);
          }
        };
        i.CloseMachineFX = function () {
          if (this.m_gameView.IsLandscape) {
            this.DoFade(this.m_machineFX_L, 0, Game_Define.MachineAniTime);
            this.m_machineFX_S.active = false;
          } else {
            this.m_machineFX_L.active = false;
            this.DoFade(this.m_machineFX_S, 0, Game_Define.MachineAniTime);
          }
        };
        i.ResetMachineFX = function () {
          this.DoFade(this.m_machineFX_L, 0, 0);
          this.DoFade(this.m_machineFX_S, 0, 0);
        };
        i.ReSpinStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = new AnimPlayer(this.m_gameView.node);
                    node$3.SetEnterFree();
                    this.m_declare.node.active = true;
                    node$2.Play(Game_Define.AudioClips.Respin_Start);
                    if (!this.m_gameView.IsLandscape) {
                      e.next = 9;
                      break;
                    }
                    e.next = 7;
                    return t.Play(this.m_declare, this.m_declareAnimName.RespinL, false, 1);
                  case 7:
                    e.next = 11;
                    break;
                  case 9:
                    e.next = 11;
                    return t.Play(this.m_declare, this.m_declareAnimName.RespinS, false, 1);
                  case 11:
                    this.m_machineFX_L.getComponent(UIOpacity).opacity = 255;
                    this.m_machineFX_S.getComponent(UIOpacity).opacity = 255;
                    this.m_gameView.PositionSetAnim.play(Game_Define.POSITIONSET_ANIM.Respin_Start);
                    node$2.Stop(this.m_gameView.MgBgmId);
                    this.m_respinBgmId = node$2.Play(Game_Define.AudioClips.Respin_BGM, true);
                    this.m_declare.node.active = false;
                    this.m_respin.active = true;
                    this.m_respinFx.node.active = true;
                    this.m_respinLabel.node.active = true;
                    this.m_respinLabel.string = "1X";
                    this.m_nowRespinMu = 1;
                    if (!this.m_gameView.IsLandscape) {
                      e.next = 27;
                      break;
                    }
                    e.next = 25;
                    return SpineKit.PlayAnimation(this.m_respinFx, this.m_respinAnimName.Start_L, false);
                  case 25:
                    e.next = 29;
                    break;
                  case 27:
                    e.next = 29;
                    return SpineKit.PlayAnimation(this.m_respinFx, this.m_respinAnimName.Start_S, false);
                  case 29:
                    this.m_gameView.PositionSetAnim.play(Game_Define.POSITIONSET_ANIM.Respin_Loop);
                    if (this.m_gameView.IsLandscape) {
                      SpineKit.PlayAnimation(this.m_respinFx, this.m_respinAnimName.Loop_L, true);
                    } else {
                      SpineKit.PlayAnimation(this.m_respinFx, this.m_respinAnimName.Loop_S, true);
                    }
                    this.m_gameView.ReSpinReelStart();
                  case 32:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.ReSpinEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var i = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return node.Wait(this.m_gameView, 1);
                  case 2:
                    this.m_declare.node.active = true;
                    if (this.m_gameView.IsLandscape) {
                      this.m_declare.play(this.m_declareAnimName.ComplimentL);
                      this.m_declare.getState(this.m_declareAnimName.ComplimentL).speed = .35;
                    } else {
                      this.m_declare.play(this.m_declareAnimName.ComplimentS);
                      this.m_declare.getState(this.m_declareAnimName.ComplimentS).speed = .35;
                    }
                    this.m_declareLabel.string = node$1.FormatNumberThousands(node$3.GetDisplayValue(t), node$1.FORMAT_NUMBER_TYPE.PERMANENT_DOT, true, 2);
                    node$2.Play(Game_Define.AudioClips.Respin_End);
                    e.next = 8;
                    return node.Wait(this, Game_Define.ReSpinEndTime);
                  case 8:
                    node$2.Stop(this.m_respinBgmId);
                    this.m_gameView.MgBgmId = node$2.Play(Game_Define.AudioClips.MG_BGM, true);
                    this.m_declare.node.active = false;
                    node$2.Play(Game_Define.AudioClips.Reel_Nudge);
                    tween(this.m_respinLabel.getComponent(UIOpacity)).to(.25, {
                      opacity: .1
                    }, {
                      easing: "smooth"
                    }).call(function () {
                      i.m_respinLabel.getComponent(UIOpacity).opacity = 255;
                      i.m_respinLabel.node.active = false;
                    }).start();
                    if (!this.m_gameView.IsLandscape) {
                      e.next = 18;
                      break;
                    }
                    e.next = 16;
                    return SpineKit.PlayAnimation(this.m_respinFx, this.m_respinAnimName.End_L, false);
                  case 16:
                    e.next = 20;
                    break;
                  case 18:
                    e.next = 20;
                    return SpineKit.PlayAnimation(this.m_respinFx, this.m_respinAnimName.End_S, false);
                  case 20:
                    this.m_gameView.PositionSetAnim.play(Game_Define.POSITIONSET_ANIM.Respin_End);
                    this.m_respinFx.node.active = false;
                    this.m_respin.active = false;
                    node$3.SetLeaveFree();
                    node$4.NextState(Game_Define.GameState.ROUND_SHOW_END);
                  case 25:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }();
        i.UpdateRespinMu = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var i = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_nowRespinMu += t;
                    this.m_respinFly.node.active = true;
                    this.m_respinFly.setEventListener(function () {
                      i.m_respinLabel.string = i.m_nowRespinMu + "X";
                      if (i.m_gameView.IsLandscape) {
                        SpineKit.PlayAnimation(i.m_respinFx, i.m_respinAnimName.Plus_L, false);
                      } else {
                        SpineKit.PlayAnimation(i.m_respinFx, i.m_respinAnimName.Plus_S, false);
                      }
                    });
                    this.m_respinFlyLabel.string = t.toString();
                    node$2.Play(Game_Define.AudioClips.Bonus_Fly);
                    e.next = 7;
                    return SpineKit.PlayAnimation(this.m_respinFly, this.m_respinFlyAniName.Fly2, false);
                  case 7:
                    this.m_respinFly.node.active = false;
                    node$2.Play(Game_Define.AudioClips.Bonus_Hit);
                    if (this.m_gameView.IsLandscape) {
                      SpineKit.PlayAnimation(this.m_respinFx, this.m_respinAnimName.Loop_L, true);
                    } else {
                      SpineKit.PlayAnimation(this.m_respinFx, this.m_respinAnimName.Loop_S, true);
                    }
                  case 10:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }();
        i.CreateSymbolSpine = function (e, t, i, n) {
          if (undefined === n) {
            n = this.m_effectParent;
          }
          var r = this.m_slotReels.GetSymbolWorldPos(e, t);
          var o = "Symbol_" + i.toString().padStart(2, "0");
          var s = this.CreateSpine(o, n, r).getComponent(SymbolSpine);
          s.Col = e;
          s.Row = t;
          s.SetSpineIdx(i);
          node$1.SetOrderedZindex(s.node, t);
          this.m_symbolSpines.push(s);
          return s;
        };
        i.CreateSpine = function (e, t, i) {
          var n = null;
          (n = NodeObjPool.GetInstance().GetNode(e).getComponent(BaseSpine)).node.setParent(t);
          n.node.active = true;
          n.node.setWorldPosition(i);
          n.Stop();
          return n;
        };
        i.ReturnSpine = function (e, t) {
          t.Stop();
          NodeObjPool.GetInstance().ReturnNode(e, t.node);
        };
        i.CleanAllSymbolAnim = function () {
          for (var e = 0; e < this.m_symbolSpines.length; e++) {
            var t = this.m_symbolSpines[e];
            this.ReturnSpine(t.GetSpineName(), t);
            this.m_slotReels.SetSymbolActive(t.Col, t.Row, true);
          }
          this.m_symbolSpines = [];
        };
        i.ShowSymbolEffect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, i) {
            var n;
            var r;
            var o;
            var s;
            var a;
            var l;
            var p;
            var u;
            var c;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!i) {
                      e.next = 8;
                      break;
                    }
                    n = [];
                    for (r = 0; r < Game_Define.BonusCol; r++) {
                      o = this.m_gameView.SpinAck.RoundQueue[t].PlateSymbol[r];
                      s = this.CreateSymbolSpine(r, 3, o, this.m_gameView.SlotReels.GetSymbol(r, 3));
                      n.push(s.PlayWinShow());
                      this.m_slotReels.SetSymbolActive(r, 3, false);
                    }
                    if (0 == t) {
                      if (!(1 == i.Mult && this.m_gameView.SpinAck.RoundQueue[t].PlateSymbol[3] != Game_Define.Symbol.RESPIN)) {
                        a = this.m_gameView.SpinAck.RoundQueue[t].PlateSymbol[3];
                        l = this.CreateSymbolSpine(3, 3, a, this.m_gameView.SlotReels.GetSymbol(3, 3));
                        n.push(l.PlayWinShow());
                        this.m_slotReels.SetSymbolActive(3, 3, false);
                      }
                    } else if (!(0 == i.Mult && this.m_gameView.SpinAck.RoundQueue[t].PlateSymbol[3] != Game_Define.Symbol.RESPIN)) {
                      p = this.m_gameView.SpinAck.RoundQueue[t].PlateSymbol[3];
                      u = this.CreateSymbolSpine(3, 3, p, this.m_gameView.SlotReels.GetSymbol(3, 3));
                      n.push(u.PlayWinShow());
                      this.m_slotReels.SetSymbolActive(3, 3, false);
                    }
                    if ((c = i.Win / node$3.GetNowBetValue()) >= 50) {
                      if (0 !== this.m_gameView.Round) {
                        node$2.Play(Game_Define.AudioClips.Win_Small);
                      } else {
                        node$2.Play(Game_Define.AudioClips.Win_Big_03);
                      }
                    } else if (c >= 1 && c < 50) {
                      node$2.Play(Game_Define.AudioClips.Win_Small);
                    }
                    e.next = 8;
                    return Promise.all(n);
                  case 8:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, i) {
            return e.apply(this, arguments);
          };
        }();
        _createClass(t, [{
          key: "MachineFX_L",
          get: function () {
            return this.m_machineFX_L;
          }
        }, {
          key: "MachineFX_S",
          get: function () {
            return this.m_machineFX_S;
          }
        }]);
        return t;
      }(Component);
      _descriptor$1 = _applyDecoratedDescriptor(_class2$3.prototype, "m_symbolEffectPrefabs", [_dec$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2 = _applyDecoratedDescriptor(_class2$3.prototype, "m_effectParent", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3 = _applyDecoratedDescriptor(_class2$3.prototype, "m_line_L", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4 = _applyDecoratedDescriptor(_class2$3.prototype, "m_line_S", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5 = _applyDecoratedDescriptor(_class2$3.prototype, "m_aniLine_L", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor6 = _applyDecoratedDescriptor(_class2$3.prototype, "m_aniLine_S", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor7 = _applyDecoratedDescriptor(_class2$3.prototype, "m_machineFX_L", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor8 = _applyDecoratedDescriptor(_class2$3.prototype, "m_machineFX_S", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor9 = _applyDecoratedDescriptor(_class2$3.prototype, "m_declare", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor10 = _applyDecoratedDescriptor(_class2$3.prototype, "m_declareLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor11 = _applyDecoratedDescriptor(_class2$3.prototype, "m_respinFx", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor12 = _applyDecoratedDescriptor(_class2$3.prototype, "m_respinLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor13 = _applyDecoratedDescriptor(_class2$3.prototype, "m_respin", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor14 = _applyDecoratedDescriptor(_class2$3.prototype, "m_respinFly", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor15 = _applyDecoratedDescriptor(_class2$3.prototype, "m_respinFlyLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$5;
      var _dec2$2;
      var _dec3$1;
      var _dec4$1;
      var _dec5$1;
      var _class2$4;
      var _descriptor$2;
      var _descriptor2$1;
      var _descriptor3$1;
      var _descriptor4$1;
      var _descriptor5$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "34de2pyU3tGgLxGDSuvsbBA", "SlotReels", undefined);
      var VISIBLE_ROW = [3];
      var DEFAULT_PLATE = [[1, 11, 1, 11, 0, 11], [11, 3, 11, 4, 11, 3], [1, 11, 3, 11, 2, 11], [1, 11, 5, 11, 10, 11]];
      var REEL_POSITION_OFFSET = [v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0)];
      var SYMBOL_ODDS = [43, 33, 10, 7, 7];
      var property$2 = _decorator.property;
      var BonusOffectType;
      !function (e) {
        e[e.None = 0] = "None";
        e[e.Up = 1] = "Up";
        e[e.Down = 2] = "Down";
      }(BonusOffectType || (BonusOffectType = {}));
      _dec$5 = property$2({
        type: SpriteFrame,
        tooltip: "Symbol 圖片"
      });
      _dec2$2 = property$2({
        type: SpriteFrame,
        tooltip: "Bonus Symbol 圖片"
      });
      _dec3$1 = property$2({
        type: Node,
        tooltip: "每一欄位圖騰的父節點"
      });
      _dec4$1 = property$2({
        type: Node,
        tooltip: "Symbol 圖片"
      });
      _dec5$1 = property$2({
        type: Node,
        tooltip: "Symbol 圖片"
      });
      _class2$4 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_symbolSpriteFrames", _descriptor$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_symbolBonusSprFs", _descriptor2$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_slotParents", _descriptor3$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_slotFrame_L", _descriptor4$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_slotFrame_S", _descriptor5$1, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_viewSize = null;
          t.m_symbolSize = null;
          t.m_symbols = [];
          t.m_plateInfo = [];
          t.m_riseTime = 0;
          t.m_upLength = 0;
          t.m_spinBufferTime01 = .1;
          t.m_spinBufferTime02 = .08;
          t.m_downLength = 30;
          t.m_spinSpeed = .18;
          t.m_timesOfBaseSpin = 4;
          t.m_spinIntervalTimes = 4;
          t.m_spinDelayTime = 0;
          t.m_timesOfNearWinSpin = 3.4;
          t.m_time = 0;
          t.m_stopTime = 0;
          t.m_reelStopTime = [];
          t.m_reelPreTime = [];
          t.m_isStop = false;
          t.m_isClickStopBtn = false;
          t.m_isChangeToFinalSymbol = [];
          t.m_isChangeSymbol = new Map();
          t.m_currentMoveLength = new Map();
          t.m_colOffsetY = 0;
          t.m_isColOffset = Array(4).fill(false);
          t.m_isRespin = false;
          t.m_isColReelsStop = [];
          t.m_bonusReelOffect = BonusOffectType.None;
          t.m_hardStopIntervalTime = 0;
          t.m_hardStopSpinSpeed = .16;
          t.m_symbolOdds = [];
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.onLoad = function () {
          this.m_viewSize = this.node.getComponent(UITransform).contentSize;
          this.m_symbolSize = new Size(this.m_viewSize.width / 4, this.m_viewSize.height / 1 * .8);
          this.m_colOffsetY = -this.m_symbolSize.height / 2;
          var e = 0;
          for (var t = 0; t < 4; t++) {
            var i = new Array();
            for (var n = 0; n < 6; n++) {
              var r = new Node();
              this.m_slotParents[t].addChild(r);
              r.name = e.toString();
              e++;
              var o = r.addComponent(Sprite);
              if (t == Game_Define.BonusCol) {
                r.addComponent(NodeShake);
              }
              o.sizeMode = Sprite.SizeMode.RAW;
              o.type = Sprite.Type.SIMPLE;
              o.trim = false;
              var s = this.m_symbolSize.height / 2 * (3 - n) + REEL_POSITION_OFFSET[t].y - 20;
              r.setPosition(0, s);
              i.push(r);
              this.m_isChangeSymbol.set(r.name, false);
              this.m_currentMoveLength.set(r.name, 0);
            }
            this.m_symbols.push(i);
          }
          this.m_reelStopTime = Array(4).fill(null);
          this.m_reelPreTime = Array(4).fill(null);
          this.m_isChangeToFinalSymbol = Array(e).fill(false);
          this.SetPlateSymbol(DEFAULT_PLATE);
          var a = 0;
          for (var l = 0; l < SYMBOL_ODDS.length; l++) {
            a += SYMBOL_ODDS[l];
            this.m_symbolOdds.push(a);
          }
        };
        i.Init = function (e) {
          this.m_gameView = e;
        };
        i.start = function () {
          var e = this;
          var t = function () {
            var t = node$5.TempoSetting.Crazy777;
            e.m_riseTime = t.BASE.RISE_TIME;
            e.m_upLength = t.BASE.UP_LENGTH;
            e.m_spinBufferTime01 = t.BASE.SPIN_BUFFER_TIME_01;
            e.m_spinBufferTime02 = t.BASE.SPIN_BUFFER_TIME_02;
            e.m_downLength = t.BASE.DOWN_LENGTH;
            e.m_spinSpeed = t.BASE.SPIN_SPEED;
            e.m_timesOfBaseSpin = t.BASE.TIMES_OF_BASE_SPIN;
            e.m_spinIntervalTimes = t.BASE.SPIN_INTERVAL_TIMES;
            e.m_timesOfNearWinSpin = t.BASE.TIMES_OF_NEAR_WIN_SPIN;
            e.m_spinDelayTime = t.BASE.SPIN_DELAY_TIME;
            e.m_hardStopIntervalTime = t.BASE.HARD_STOP_INTERVAL_TIME;
            e.m_hardStopSpinSpeed = t.BASE.HARD_STOP_SPIN_SPEED;
          };
          t();
          node$5.AddCb(t);
        };
        i.SetPlateSymbol = function (e) {
          for (var i = 0; i < 4; i++) {
            REEL_POSITION_OFFSET[i].y = 0;
            for (var n = 0; n < 6; n++) {
              this.m_symbols[i][n].getComponent(Sprite).spriteFrame = this.m_symbolSpriteFrames[e[i][n]];
              var r = this.m_symbolSize.height / 2 * (3 - n) + REEL_POSITION_OFFSET[i].y - 20;
              this.m_symbols[i][n].setPosition(0, r);
              this.m_symbols[i][n].active = true;
            }
          }
        };
        i.StartSpin = function () {
          this.m_spinSpeed = node$5.TempoSetting.Crazy777.BASE.SPIN_SPEED;
          this.m_time = 0;
          this.m_stopTime = 0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isRespin = false;
          this.m_isColReelsStop = [false, false, false, false];
          for (var e = 0; e < 4; e++) {
            REEL_POSITION_OFFSET[e].y = 0;
            this.m_reelStopTime[e] = null;
            this.m_reelPreTime[e] = null;
            this.m_isColOffset[e] = false;
          }
          for (var t = 0; t < this.m_isChangeToFinalSymbol.length; t++) {
            this.m_isChangeToFinalSymbol[t] = false;
          }
          var i;
          for (var n = _createForOfIteratorHelperLoose(this.m_currentMoveLength.keys()); !(i = n()).done;) {
            var r = i.value;
            this.m_currentMoveLength.set(r, 0);
          }
        };
        i.SetPlateInfo = function (e) {
          this.m_plateInfo = this.CompletePlate(e);
          var t = this.m_riseTime * 4;
          var i = Math.floor((this.m_time - t) / this.m_spinSpeed) + 2;
          if (i < 2) {
            i = 2;
          }
          if (this.m_isClickStopBtn) {
            this.m_stopTime = node$1.strip((i + 1) * this.m_spinSpeed + this.m_spinDelayTime + t + this.m_hardStopIntervalTime * this.m_spinSpeed * 3);
            for (var n = 0; n < 4; n++) {
              var r = (i + 1) * this.m_spinSpeed + this.m_hardStopIntervalTime * this.m_spinSpeed * n;
              this.m_reelStopTime[n] = node$1.strip(r);
              this.m_reelPreTime[n] = node$1.strip(r - this.m_spinSpeed);
            }
          } else {
            this.m_stopTime = node$1.strip(this.m_spinSpeed * (i + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * 3 + this.m_spinDelayTime + t + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var o = 0; o < 4; o++) {
              this.m_reelStopTime[o] = node$1.strip(this.m_spinSpeed * (i + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * o);
              this.m_reelPreTime[o] = node$1.strip(this.m_spinSpeed * (i + this.m_timesOfBaseSpin - 1) + this.m_spinIntervalTimes * this.m_spinSpeed * o);
            }
          }
        };
        i.SetIsClickStopBtn = function () {
          this.m_spinSpeed = this.m_hardStopSpinSpeed;
          this.m_isClickStopBtn = true;
          if (0 != this.m_stopTime) {
            switch (this.m_bonusReelOffect) {
              case BonusOffectType.Down:
                REEL_POSITION_OFFSET[Game_Define.BonusCol].y -= this.m_colOffsetY;
                break;
              case BonusOffectType.Up:
                REEL_POSITION_OFFSET[Game_Define.BonusCol].y += this.m_colOffsetY;
            }
            this.m_bonusReelOffect = BonusOffectType.None;
            var e = Math.ceil(this.m_time / this.m_spinSpeed);
            e = e > 0 ? e : 1;
            var t = node$5.TempoSetting.Crazy777.SPEED_UP_STOP_TIME(4, this.m_time);
            if (t < this.m_stopTime) {
              this.m_stopTime = node$1.strip(t);
            }
            for (var i = 0; i < 4; i++) {
              var n = e * this.m_spinSpeed;
              if (n < this.m_reelStopTime[i]) {
                this.m_reelStopTime[i] = node$1.strip(n);
                this.m_reelPreTime[i] = node$1.strip(n - this.m_spinSpeed);
              }
            }
          }
        };
        i.Spin = function (e) {
          this.m_time = node$1.strip(this.m_time + e);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple(this.m_isRespin);
            if (0 != this.m_stopTime && this.m_time >= this.m_stopTime) {
              this.m_isStop = true;
              if (this.m_isRespin) {
                this.m_gameView.ReSpinReelEnd();
              } else if (this.m_isClickStopBtn) {
                node$2.Play(Game_Define.AudioClips.Reel_Stop);
              }
            }
          }
        };
        i.GetSymbolWorldPos = function (e, t) {
          if (this.m_isColOffset[e]) {
            t -= 1;
          }
          return this.m_symbols[e][t].getWorldPosition();
        };
        i.StartReSpin = function () {
          this.m_time = 0;
          this.m_stopTime = 0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isRespin = true;
          this.m_isColReelsStop = [false, false, false, false];
          REEL_POSITION_OFFSET[Game_Define.BonusCol].y = 0;
          this.m_reelStopTime[Game_Define.BonusCol] = null;
          this.m_reelPreTime[Game_Define.BonusCol] = null;
          this.m_isColOffset[Game_Define.BonusCol] = false;
          var e = 1 * this.m_riseTime;
          var t = Math.floor((this.m_time - e) / this.m_spinSpeed) + 2;
          this.m_stopTime = node$1.strip(this.m_spinSpeed * (t + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * 1 + this.m_spinDelayTime + e + this.m_spinBufferTime01 + this.m_spinBufferTime02);
          for (var i = 0; i < this.m_isChangeToFinalSymbol.length; i++) {
            this.m_isChangeToFinalSymbol[i] = false;
          }
          var n;
          for (var r = _createForOfIteratorHelperLoose(this.m_currentMoveLength.keys()); !(n = r()).done;) {
            var o = n.value;
            this.m_currentMoveLength.set(o, 0);
          }
        };
        i.StartNudge = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var i;
            var n;
            var r;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return node.Wait(this, Game_Define.WaitToShake);
                  case 2:
                    node$2.Play(Game_Define.AudioClips.Reel_Nudge);
                    t = Game_Define.BonusCol;
                    for (i = 0; i < this.m_symbols[t].length; ++i) {
                      this.m_symbols[t][i].getComponent(NodeShake).ShakeStart();
                    }
                    e.next = 7;
                    return node.Wait(this, Game_Define.ShakeTime);
                  case 7:
                    for (n = 0; n < this.m_symbols[t].length; ++n) {
                      this.m_symbols[t][n].getComponent(NodeShake).ShakeEnd();
                    }
                    e.next = 10;
                    return node.Wait(this, Game_Define.WaitToNudge);
                  case 10:
                    r = this.m_bonusReelOffect == BonusOffectType.Down ? -this.m_colOffsetY : this.m_colOffsetY;
                    for (o = 0; o < this.m_symbols[t].length; ++o) {
                      tween(this.m_symbols[t][o]).to(Game_Define.NudgeTime, {
                        position: new Vec3(this.m_symbols[t][o].position.x, this.m_symbols[t][o].position.y + r, this.m_symbols[t][o].position.z)
                      }).start();
                    }
                    this.m_bonusReelOffect = BonusOffectType.None;
                  case 13:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        i.Spin_RealSpinMultiple = function (e) {
          if (undefined === e) {
            e = false;
          }
          var t = this.m_symbolSize.height * 3;
          for (var i = e ? Game_Define.BonusCol : 0; i < 4; i++) {
            var n = this.m_spinSpeed;
            var r = this.m_time;
            var o = this.m_reelStopTime[i];
            var s = this.m_riseTime * 4;
            for (var a = 0; a < 6; a++) {
              var l = this.m_symbols[i][a];
              var p = this.m_symbolSize.height / 2 * (3 - a) + REEL_POSITION_OFFSET[i].y - 20;
              var u = 0;
              var c = this.m_symbolSize.height / 2 * (6 - a);
              if (r < this.m_riseTime * (i + 1)) {
                u = (r - this.m_riseTime * i) / this.m_riseTime * this.m_upLength;
              } else if (r < s) {
                u = this.m_upLength;
              } else if (null == o || r < o + s) {
                var m = (r - s) % n / n * t;
                u = -this.GetMovelength(m, c, t, i, a, l);
              } else if (r < o + s + this.m_spinBufferTime01 && !this.m_isClickStopBtn) {
                u = -(r - o - s) / this.m_spinBufferTime01 * this.m_downLength;
                this.CheckChangeToFinalSymbol(i, a, l);
              } else if (r < o + s + this.m_spinBufferTime01 + this.m_spinBufferTime02 && !this.m_isClickStopBtn) {
                u = (r - o - s - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength - this.m_downLength;
                this.CheckChangeToFinalSymbol(i, a, l);
              } else {
                this.CheckChangeToFinalSymbol(i, a, l);
              }
              this.m_symbols[i][a].setPosition(0, p + u);
            }
            if (o && r >= o + s + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
              if (this.m_isColReelsStop[i]) {
                continue;
              }
              this.m_isColReelsStop[i] = true;
              if (e) {
                this.m_gameView.ReSpinReelEnd();
              } else {
                node$2.Play(Game_Define.AudioClips.Reel_Stop);
              }
            }
          }
        };
        i.GetMovelength = function (e, t, i, n, r, o) {
          if (e >= t) {
            e -= i;
          }
          if (this.m_currentMoveLength.get(o.name) >= e) {
            if (!this.m_isChangeSymbol.get(o.name)) {
              this.m_isChangeSymbol.set(o.name, true);
              this.ChangeSymbol(n, r, o, false);
            }
          } else {
            this.m_isChangeSymbol.set(o.name, false);
          }
          this.m_currentMoveLength.set(o.name, e);
          return e;
        };
        i.ChangeSymbol = function (e, t, i, n) {
          var r = this.m_reelPreTime[e];
          var o = this.m_riseTime * 4;
          if (n || r && this.m_time - o >= r) {
            var s = this.m_plateInfo[e][t];
            i.getComponent(Sprite).spriteFrame = this.m_symbolSpriteFrames[s];
          } else {
            var a = Game_Define.Symbol.EMPTY;
            if (t % 2 == 0) {
              if (0 !== t) {
                a = this.GetRandomSymbol(e, t);
              } else {
                do {
                  a = this.GetRandomSymbol(e, t);
                } while (a == Game_Define.Symbol.RESPIN);
              }
            }
            i.getComponent(Sprite).spriteFrame = this.m_symbolSpriteFrames[a];
          }
        };
        i.CheckChangeToFinalSymbol = function (e, t, i) {
          var n = Number(i.name);
          if (!this.m_isChangeToFinalSymbol[n]) {
            this.m_isChangeToFinalSymbol[n] = true;
            this.ChangeSymbol(e, t, i, true);
          }
        };
        i.IsPlateStop = function () {
          return this.m_isStop;
        };
        i.GetRandomSymbol = function (e, t) {
          var i = Game_Define.Symbol.EMPTY;
          if (e == Game_Define.BonusCol) {
            if (this.m_isRespin) {
              var n = Game_Define.BGBonusRandSymbolArr.length;
              i = Game_Define.BGBonusRandSymbolArr[Math.floor(Math.random() * n)];
            } else {
              var r = Game_Define.MGBonusRandSymbolArr.length;
              if (0 == t) {
                do {
                  i = Game_Define.MGBonusRandSymbolArr[Math.floor(Math.random() * r)];
                } while (i == Game_Define.Symbol.RESPIN);
              } else {
                i = Game_Define.MGBonusRandSymbolArr[Math.floor(Math.random() * r)];
              }
            }
          } else {
            var o = Game_Define.MGRandSymbolArray.length;
            var s = Math.floor(100 * Math.random());
            for (var a = 0; a < o; a++) {
              if (s < this.m_symbolOdds[a]) {
                i = Game_Define.MGRandSymbolArray[a];
                break;
              }
            }
          }
          return i;
        };
        i.SetSymbolActive = function (e, t, i) {
          var n = t;
          if (this.m_isColOffset[e]) {
            n--;
          }
          this.m_symbols[e][n].active = i;
        };
        i.GetSymbolPosition = function (e, t) {
          var i = 3 + (t - Game_Define.ROW_CENTER_S);
          return this.m_symbols[e][i].getPosition();
        };
        i.SetAllSymbolDark = function (e) {
          var t = color(180, 180, 180);
          for (var i = 0; i < 4; i++) {
            for (var n = 0; n < 6; n++) {
              this.m_symbols[i][n].getComponent(Sprite).color = e ? t : color(255, 255, 255);
            }
          }
        };
        i.GetSymbol = function (e, t) {
          return this.m_symbols[e][t];
        };
        i.CompletePlate = function (e) {
          var t = [[1, 11, 1, 11, 1, 11], [1, 11, 1, 11, 1, 11], [1, 11, 1, 11, 1, 11], [1, 11, 1, 11, 1, 11]];
          for (var i = 0; i < 4; i++) {
            for (var n = 0; n < 6; n++) {
              if (this.CheckRealRow(n)) {
                t[i][n] = e[i][0];
              } else {
                t[i][n] = Game_Define.Symbol.EMPTY;
              }
            }
          }
          for (var r = 0; r < 4; r++) {
            if (t[r][3] != Game_Define.Symbol.EMPTY) {
              t[r].shift();
              t[r].push(Game_Define.Symbol.EMPTY);
              this.m_isColOffset[r] = true;
              REEL_POSITION_OFFSET[r].y += this.m_colOffsetY;
              if (r == Game_Define.BonusCol && node$4.Current() == CommonState.SPIN) {
                if (this.m_gameView.SpinAck.TotalWin > 0) {
                  if (Math.floor(100 * Math.random()) <= Game_Define.ReelOffectProbability) {
                    if (0 == Math.floor(2 * Math.random())) {
                      this.m_bonusReelOffect = BonusOffectType.Down;
                      REEL_POSITION_OFFSET[r].y += this.m_colOffsetY;
                    } else {
                      this.m_bonusReelOffect = BonusOffectType.Up;
                      REEL_POSITION_OFFSET[r].y -= this.m_colOffsetY;
                    }
                  }
                }
              }
            }
            for (var o = 0; o < 6; o++) {
              if (o % 2 == 0 && t[r][o] == Game_Define.Symbol.EMPTY) {
                t[r][o] = this.GetRandomSymbol(r, o);
              }
            }
          }
          return t;
        };
        i.CheckRealRow = function (e) {
          return VISIBLE_ROW.includes(e);
        };
        _createClass(t, [{
          key: "IsClickStopBtn",
          get: function () {
            return this.m_isClickStopBtn;
          }
        }, {
          key: "BonusReelOffect",
          get: function () {
            return this.m_bonusReelOffect;
          }
        }]);
        return t;
      }(Component);
      _descriptor$2 = _applyDecoratedDescriptor(_class2$4.prototype, "m_symbolSpriteFrames", [_dec$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$1 = _applyDecoratedDescriptor(_class2$4.prototype, "m_symbolBonusSprFs", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$1 = _applyDecoratedDescriptor(_class2$4.prototype, "m_slotParents", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor4$1 = _applyDecoratedDescriptor(_class2$4.prototype, "m_slotFrame_L", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$1 = _applyDecoratedDescriptor(_class2$4.prototype, "m_slotFrame_S", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4b71897/HdBorZDooSe88ix", "AwardState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d7d8fqaYE9D9JAra/WwWKgq", "CheckState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3e322Zg/15IgaW08e0Y6rD5", "FeatureShowState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1f34aXQ97pIircyjVweKvmp", "IdleState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0181e1hYhtOp6bTGF3W4dFm", "PlateShowState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e55cclD1BFLqbcynCTnlX7R", "ReSpinState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5369dby1DhNdI0IAcuZXe4z", "RoundEndState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ee3d34KNrtLqYun6PqRLF5e", "RoundShowEndState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "92f12EH7DBCDr60HRj6R7fs", "SpinState", undefined);
      var _dec$6;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b330bfmWF9FyahCOfjoR7Tf", "UnshowPrepareState", undefined);
      var ccclass$8 = _decorator.ccclass;
      _dec$6 = ccclass$8("UnshowPrepareState");
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e7a7f3qnGxPwpvUFfU5H+ZR", "WaitReadyState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "24eaasgw4VJGpr7e5XTEUL+", "WaitResState", undefined);
      cclegacy._RF.pop();
      /**
             * @license
             * Copyright 2009 The Closure Library Authors
             * Copyright 2020 Daniel Wirtz / The long.js Authors.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *     http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             *
             * SPDX-License-Identifier: Apache-2.0
             */
      var wasm = null;
      try {
        wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
      } catch (e) {}
      function Long(e, t, i) {
        this.low = 0 | e;
        this.high = 0 | t;
        this.unsigned = !!i;
      }
      function isLong(e) {
        return true === (e && e.__isLong__);
      }
      function ctz32(e) {
        var t = Math.clz32(e & -e);
        return e ? 31 - t : t;
      }
      Long.prototype.__isLong__;
      Object.defineProperty(Long.prototype, "__isLong__", {
        value: true
      });
      Long.isLong = isLong;
      var INT_CACHE = {};
      var UINT_CACHE = {};
      function fromInt(e, t) {
        var i;
        var n;
        var r;
        return t ? (r = 0 <= (e >>>= 0) && e < 256) && (n = UINT_CACHE[e]) ? n : (i = new Long(e, 0, true), r && (UINT_CACHE[e] = i), i) : (r = -128 <= (e |= 0) && e < 128) && (n = INT_CACHE[e]) ? n : (i = new Long(e, e < 0 ? -1 : 0, false), r && (INT_CACHE[e] = i), i);
      }
      function fromNumber(e, t) {
        if (isNaN(e)) {
          return t ? UZERO : ZERO;
        }
        if (t) {
          if (e < 0) {
            return UZERO;
          }
          if (e >= 18446744073709552000) {
            return MAX_UNSIGNED_VALUE;
          }
        } else {
          if (e <= -9223372036854776000) {
            return MIN_VALUE;
          }
          if (e + 1 >= 9223372036854776000) {
            return MAX_VALUE;
          }
        }
        return e < 0 ? fromNumber(-e, t).neg() : new Long(e % 4294967296 | 0, e / 4294967296 | 0, t);
      }
      function fromBits(e, t, i) {
        return new Long(e, t, i);
      }
      Long.fromInt = fromInt;
      Long.fromNumber = fromNumber;
      Long.fromBits = fromBits;
      var pow_dbl = Math.pow;
      function fromString(e, t, i) {
        if (0 === e.length) {
          throw Error("empty string");
        }
        if ("number" == typeof t) {
          i = t;
          t = false;
        } else {
          t = !!t;
        }
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) {
          return t ? UZERO : ZERO;
        }
        if ((i = i || 10) < 2 || 36 < i) {
          throw RangeError("radix");
        }
        var n;
        if ((n = e.indexOf("-")) > 0) {
          throw Error("interior hyphen");
        }
        if (0 === n) {
          return fromString(e.substring(1), t, i).neg();
        }
        var r = fromNumber(pow_dbl(i, 8));
        var o = ZERO;
        for (var s = 0; s < e.length; s += 8) {
          var a = Math.min(8, e.length - s);
          var l = parseInt(e.substring(s, s + a), i);
          if (a < 8) {
            var p = fromNumber(pow_dbl(i, a));
            o = o.mul(p).add(fromNumber(l));
          } else {
            o = (o = o.mul(r)).add(fromNumber(l));
          }
        }
        o.unsigned = t;
        return o;
      }
      function fromValue(e, t) {
        return "number" == typeof e ? fromNumber(e, t) : "string" == typeof e ? fromString(e, t) : new Long(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
      }
      Long.fromString = fromString;
      Long.fromValue = fromValue;
      var TWO_PWR_24 = fromInt(16777216);
      var ZERO = fromInt(0);
      Long.ZERO = ZERO;
      var UZERO = fromInt(0, true);
      Long.UZERO = UZERO;
      var ONE = fromInt(1);
      Long.ONE = ONE;
      var UONE = fromInt(1, true);
      Long.UONE = UONE;
      var NEG_ONE = fromInt(-1);
      Long.NEG_ONE = NEG_ONE;
      var MAX_VALUE = new Long(-1, 2147483647, false);
      Long.MAX_VALUE = MAX_VALUE;
      var MAX_UNSIGNED_VALUE = new Long(-1, -1, true);
      Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
      var MIN_VALUE = new Long(0, -2147483648, false);
      Long.MIN_VALUE = MIN_VALUE;
      var LongPrototype = Long.prototype;
      LongPrototype.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      };
      LongPrototype.toNumber = function () {
        return this.unsigned ? (this.high >>> 0) * 4294967296 + (this.low >>> 0) : this.high * 4294967296 + (this.low >>> 0);
      };
      LongPrototype.toString = function (e) {
        if ((e = e || 10) < 2 || 36 < e) {
          throw RangeError("radix");
        }
        if (this.isZero()) {
          return "0";
        }
        if (this.isNegative()) {
          if (this.eq(MIN_VALUE)) {
            var t = fromNumber(e);
            var i = this.div(t);
            var n = i.mul(t).sub(this);
            return i.toString(e) + n.toInt().toString(e);
          }
          return "-" + this.neg().toString(e);
        }
        var r = fromNumber(pow_dbl(e, 6), this.unsigned);
        var o = this;
        for (var s = "";;) {
          var a = o.div(r);
          var l = (o.sub(a.mul(r)).toInt() >>> 0).toString(e);
          if ((o = a).isZero()) {
            return l + s;
          }
          for (; l.length < 6;) {
            l = "0" + l;
          }
          s = "" + l + s;
        }
      };
      LongPrototype.getHighBits = function () {
        return this.high;
      };
      LongPrototype.getHighBitsUnsigned = function () {
        return this.high >>> 0;
      };
      LongPrototype.getLowBits = function () {
        return this.low;
      };
      LongPrototype.getLowBitsUnsigned = function () {
        return this.low >>> 0;
      };
      LongPrototype.getNumBitsAbs = function () {
        if (this.isNegative()) {
          return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        }
        var e = 0 != this.high ? this.high : this.low;
        for (var t = 31; t > 0 && 0 == (e & 1 << t); t--) {
          ;
        }
        return 0 != this.high ? t + 33 : t + 1;
      };
      LongPrototype.isZero = function () {
        return 0 === this.high && 0 === this.low;
      };
      LongPrototype.eqz = LongPrototype.isZero;
      LongPrototype.isNegative = function () {
        return !this.unsigned && this.high < 0;
      };
      LongPrototype.isPositive = function () {
        return this.unsigned || this.high >= 0;
      };
      LongPrototype.isOdd = function () {
        return 1 == (1 & this.low);
      };
      LongPrototype.isEven = function () {
        return 0 == (1 & this.low);
      };
      LongPrototype.equals = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
      };
      LongPrototype.eq = LongPrototype.equals;
      LongPrototype.notEquals = function (e) {
        return !this.eq(e);
      };
      LongPrototype.neq = LongPrototype.notEquals;
      LongPrototype.ne = LongPrototype.notEquals;
      LongPrototype.lessThan = function (e) {
        return this.comp(e) < 0;
      };
      LongPrototype.lt = LongPrototype.lessThan;
      LongPrototype.lessThanOrEqual = function (e) {
        return this.comp(e) <= 0;
      };
      LongPrototype.lte = LongPrototype.lessThanOrEqual;
      LongPrototype.le = LongPrototype.lessThanOrEqual;
      LongPrototype.greaterThan = function (e) {
        return this.comp(e) > 0;
      };
      LongPrototype.gt = LongPrototype.greaterThan;
      LongPrototype.greaterThanOrEqual = function (e) {
        return this.comp(e) >= 0;
      };
      LongPrototype.gte = LongPrototype.greaterThanOrEqual;
      LongPrototype.ge = LongPrototype.greaterThanOrEqual;
      LongPrototype.compare = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        if (this.eq(e)) {
          return 0;
        }
        var t = this.isNegative();
        var i = e.isNegative();
        return t && !i ? -1 : !t && i ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
      };
      LongPrototype.comp = LongPrototype.compare;
      LongPrototype.negate = function () {
        return !this.unsigned && this.eq(MIN_VALUE) ? MIN_VALUE : this.not().add(ONE);
      };
      LongPrototype.neg = LongPrototype.negate;
      LongPrototype.add = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        var t = this.high >>> 16;
        var i = 65535 & this.high;
        var n = this.low >>> 16;
        var r = 65535 & this.low;
        var o = e.high >>> 16;
        var s = 65535 & e.high;
        var a = e.low >>> 16;
        var l = 0;
        var p = 0;
        var u = 0;
        var c = 0;
        u += (c += r + (65535 & e.low)) >>> 16;
        p += (u += n + a) >>> 16;
        l += (p += i + s) >>> 16;
        l += t + o;
        return new Long((u &= 65535) << 16 | (c &= 65535), (l &= 65535) << 16 | (p &= 65535), this.unsigned);
      };
      LongPrototype.subtract = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return this.add(e.neg());
      };
      LongPrototype.sub = LongPrototype.subtract;
      LongPrototype.multiply = function (e) {
        if (this.isZero()) {
          return this;
        }
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        if (wasm) {
          return new Long(wasm.mul(this.low, this.high, e.low, e.high), wasm.get_high(), this.unsigned);
        }
        if (e.isZero()) {
          return this.unsigned ? UZERO : ZERO;
        }
        if (this.eq(MIN_VALUE)) {
          return e.isOdd() ? MIN_VALUE : ZERO;
        }
        if (e.eq(MIN_VALUE)) {
          return this.isOdd() ? MIN_VALUE : ZERO;
        }
        if (this.isNegative()) {
          return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        }
        if (e.isNegative()) {
          return this.mul(e.neg()).neg();
        }
        if (this.lt(TWO_PWR_24) && e.lt(TWO_PWR_24)) {
          return fromNumber(this.toNumber() * e.toNumber(), this.unsigned);
        }
        var t = this.high >>> 16;
        var i = 65535 & this.high;
        var n = this.low >>> 16;
        var r = 65535 & this.low;
        var o = e.high >>> 16;
        var s = 65535 & e.high;
        var a = e.low >>> 16;
        var l = 65535 & e.low;
        var p = 0;
        var u = 0;
        var c = 0;
        var m = 0;
        c += (m += r * l) >>> 16;
        u += (c += n * l) >>> 16;
        c &= 65535;
        u += (c += r * a) >>> 16;
        p += (u += i * l) >>> 16;
        u &= 65535;
        p += (u += n * a) >>> 16;
        u &= 65535;
        p += (u += r * s) >>> 16;
        p += t * l + i * a + n * s + r * o;
        return new Long((c &= 65535) << 16 | (m &= 65535), (p &= 65535) << 16 | (u &= 65535), this.unsigned);
      };
      LongPrototype.mul = LongPrototype.multiply;
      LongPrototype.divide = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        if (e.isZero()) {
          throw Error("division by zero");
        }
        var t;
        var i;
        var n;
        if (wasm) {
          return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? new Long((this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, e.low, e.high), wasm.get_high(), this.unsigned) : this;
        }
        if (this.isZero()) {
          return this.unsigned ? UZERO : ZERO;
        }
        if (this.unsigned) {
          if (!e.unsigned) {
            e = e.toUnsigned();
          }
          if (e.gt(this)) {
            return UZERO;
          }
          if (e.gt(this.shru(1))) {
            return UONE;
          }
          n = UZERO;
        } else {
          if (this.eq(MIN_VALUE)) {
            return e.eq(ONE) || e.eq(NEG_ONE) ? MIN_VALUE : e.eq(MIN_VALUE) ? ONE : (t = this.shr(1).div(e).shl(1)).eq(ZERO) ? e.isNegative() ? ONE : NEG_ONE : (i = this.sub(e.mul(t)), n = t.add(i.div(e)));
          }
          if (e.eq(MIN_VALUE)) {
            return this.unsigned ? UZERO : ZERO;
          }
          if (this.isNegative()) {
            return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
          }
          if (e.isNegative()) {
            return this.div(e.neg()).neg();
          }
          n = ZERO;
        }
        for (i = this; i.gte(e);) {
          t = Math.max(1, Math.floor(i.toNumber() / e.toNumber()));
          var r = Math.ceil(Math.log(t) / Math.LN2);
          var o = r <= 48 ? 1 : pow_dbl(2, r - 48);
          var s = fromNumber(t);
          for (var a = s.mul(e); a.isNegative() || a.gt(i);) {
            a = (s = fromNumber(t -= o, this.unsigned)).mul(e);
          }
          if (s.isZero()) {
            s = ONE;
          }
          n = n.add(s);
          i = i.sub(a);
        }
        return n;
      };
      LongPrototype.div = LongPrototype.divide;
      LongPrototype.modulo = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return wasm ? new Long((this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, e.low, e.high), wasm.get_high(), this.unsigned) : this.sub(this.div(e).mul(e));
      };
      LongPrototype.mod = LongPrototype.modulo;
      LongPrototype.rem = LongPrototype.modulo;
      LongPrototype.not = function () {
        return new Long(~this.low, ~this.high, this.unsigned);
      };
      LongPrototype.countLeadingZeros = function () {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
      };
      LongPrototype.clz = LongPrototype.countLeadingZeros;
      LongPrototype.countTrailingZeros = function () {
        return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
      };
      LongPrototype.ctz = LongPrototype.countTrailingZeros;
      LongPrototype.and = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return new Long(this.low & e.low, this.high & e.high, this.unsigned);
      };
      LongPrototype.or = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return new Long(this.low | e.low, this.high | e.high, this.unsigned);
      };
      LongPrototype.xor = function (e) {
        if (!(true === (e && e.__isLong__))) {
          e = "number" == typeof e ? fromNumber(e, undefined) : "string" == typeof e ? fromString(e, undefined) : new Long(e.low, e.high, e.unsigned);
        }
        return new Long(this.low ^ e.low, this.high ^ e.high, this.unsigned);
      };
      LongPrototype.shiftLeft = function (e) {
        if (true === (e && e.__isLong__)) {
          e = e.toInt();
        }
        return 0 == (e &= 63) ? this : e < 32 ? new Long(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : new Long(0, this.low << e - 32, this.unsigned);
      };
      LongPrototype.shl = LongPrototype.shiftLeft;
      LongPrototype.shiftRight = function (e) {
        if (true === (e && e.__isLong__)) {
          e = e.toInt();
        }
        return 0 == (e &= 63) ? this : e < 32 ? new Long(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : new Long(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
      };
      LongPrototype.shr = LongPrototype.shiftRight;
      LongPrototype.shiftRightUnsigned = function (e) {
        if (true === (e && e.__isLong__)) {
          e = e.toInt();
        }
        return 0 == (e &= 63) ? this : e < 32 ? new Long(this.low >>> e | this.high << 32 - e, this.high >>> e, this.unsigned) : new Long(32 === e ? this.high : this.high >>> e - 32, 0, this.unsigned);
      };
      LongPrototype.shru = LongPrototype.shiftRightUnsigned;
      LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
      LongPrototype.rotateLeft = function (e) {
        var t;
        if (true === (e && e.__isLong__)) {
          e = e.toInt();
        }
        return 0 == (e &= 63) ? this : 32 === e ? new Long(this.high, this.low, this.unsigned) : e < 32 ? (t = 32 - e, new Long(this.low << e | this.high >>> t, this.high << e | this.low >>> t, this.unsigned)) : (t = 32 - (e -= 32), new Long(this.high << e | this.low >>> t, this.low << e | this.high >>> t, this.unsigned));
      };
      LongPrototype.rotl = LongPrototype.rotateLeft;
      LongPrototype.rotateRight = function (e) {
        var t;
        if (true === (e && e.__isLong__)) {
          e = e.toInt();
        }
        return 0 == (e &= 63) ? this : 32 === e ? new Long(this.high, this.low, this.unsigned) : e < 32 ? (t = 32 - e, new Long(this.high << t | this.low >>> e, this.low << t | this.high >>> e, this.unsigned)) : (t = 32 - (e -= 32), new Long(this.low << t | this.high >>> e, this.high << t | this.low >>> e, this.unsigned));
      };
      LongPrototype.rotr = LongPrototype.rotateRight;
      LongPrototype.toSigned = function () {
        return this.unsigned ? new Long(this.low, this.high, false) : this;
      };
      LongPrototype.toUnsigned = function () {
        return this.unsigned ? this : new Long(this.low, this.high, true);
      };
      LongPrototype.toBytes = function (e) {
        return e ? this.toBytesLE() : this.toBytesBE();
      };
      LongPrototype.toBytesLE = function () {
        var e = this.high;
        var t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24];
      };
      LongPrototype.toBytesBE = function () {
        var e = this.high;
        var t = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t];
      };
      Long.fromBytes = function (e, t, i) {
        return i ? Long.fromBytesLE(e, t) : Long.fromBytesBE(e, t);
      };
      Long.fromBytesLE = function (e, t) {
        return new Long(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t);
      };
      Long.fromBytesBE = function (e, t) {
        return new Long(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t);
      };
      var CjsLoader = function () {
        function e() {
          this._registry = {};
          this._moduleCache = {};
        }
        var t = e.prototype;
        t.define = function (e, t, i) {
          this._registry[e] = {
            factory: t,
            resolveMap: i
          };
        };
        t.require = function (e) {
          return this._require(e);
        };
        t.throwInvalidWrapper = function (e, t) {
          throw new Error("Module '" + e + "' imported from '" + t + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        t._require = function (e, t) {
          var i = this._moduleCache[e];
          if (i) {
            return i.exports;
          }
          var n = {
            id: e,
            exports: {}
          };
          this._moduleCache[e] = n;
          this._tryModuleLoad(n, e);
          return n.exports;
        };
        t._resolve = function (e, t) {
          return this._resolveFromInfos(e, t) || this._throwUnresolved(e, t);
        };
        t._resolveFromInfos = function (e, t) {
          var i;
          var n;
          return e in cjsInfos ? e : t && null != (i = null == (n = cjsInfos[t]) ? undefined : n.resolveCache[e]) ? i : undefined;
        };
        t._tryModuleLoad = function (e, t) {
          var i = true;
          try {
            this._load(e, t);
            i = false;
          } finally {
            if (i) {
              delete this._moduleCache[t];
            }
          }
        };
        t._load = function (e, t) {
          var i = this._loadWrapper(t);
          var n = i.factory;
          var r = i.resolveMap;
          var o = this._createRequire(e);
          var s = r ? this._createRequireWithResolveMap("function" == typeof r ? r() : r, o) : o;
          n(e.exports, s, e);
        };
        t._loadWrapper = function (e) {
          return e in this._registry ? this._registry[e] : this._loadHostProvidedModules(e);
        };
        t._loadHostProvidedModules = function (e) {
          return {
            factory: function (t, i, n) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + e + "'.");
              }
              try {
                n.exports = require(e);
              } catch (t) {
                throw new Error("Exception thrown when calling host defined require('" + e + "').", {
                  cause: t
                });
              }
            }
          };
        };
        t._createRequire = function (e) {
          var t = this;
          return function (i) {
            return t._require(i, e);
          };
        };
        t._createRequireWithResolveMap = function (e, t) {
          return function (i) {
            var n = e[i];
            if (n) {
              return t(n);
            }
            throw new Error("Unresolved specifier " + i);
          };
        };
        t._throwUnresolved = function (e, t) {
          throw new Error("Unable to resolve " + e + " from " + parent + ".");
        };
        return e;
      }();
      var loader = new CjsLoader();
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (e, t, i, n, r) {
        i.exports = function (e, t) {
          var i = new Array(arguments.length - 1);
          var n = 0;
          var r = 2;
          var o = true;
          for (; r < arguments.length;) {
            i[n++] = arguments[r++];
          }
          return new Promise(function (r, s) {
            i[n] = function (e) {
              if (o) {
                o = false;
                if (e) {
                  s(e);
                } else {
                  var t = new Array(arguments.length - 1);
                  for (var i = 0; i < t.length;) {
                    t[i++] = arguments[i];
                  }
                  r.apply(null, t);
                }
              }
            };
            try {
              e.apply(t || null, i);
            } catch (e) {
              if (o) {
                o = false;
                s(e);
              }
            }
          });
        };
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (e, t, i, n, r) {
        e.length = function (e) {
          var t = e.length;
          if (!t) {
            return 0;
          }
          for (var i = 0; --t % 4 > 1 && "=" === e.charAt(t);) {
            ++i;
          }
          return Math.ceil(3 * e.length) / 4 - i;
        };
        var s = new Array(64);
        var a = new Array(123);
        for (var l = 0; l < 64;) {
          a[s[l] = l < 26 ? l + 65 : l < 52 ? l + 71 : l < 62 ? l - 4 : l - 59 | 43] = l++;
        }
        e.encode = function (e, t, i) {
          var n;
          var r = null;
          var o = [];
          var a = 0;
          for (var l = 0; t < i;) {
            var p = e[t++];
            switch (l) {
              case 0:
                o[a++] = s[p >> 2];
                n = (3 & p) << 4;
                l = 1;
                break;
              case 1:
                o[a++] = s[n | p >> 4];
                n = (15 & p) << 2;
                l = 2;
                break;
              case 2:
                o[a++] = s[n | p >> 6];
                o[a++] = s[63 & p];
                l = 0;
            }
            if (a > 8191) {
              (r || (r = [])).push(String.fromCharCode.apply(String, o));
              a = 0;
            }
          }
          if (l) {
            o[a++] = s[n];
            o[a++] = 61;
            if (1 === l) {
              o[a++] = 61;
            }
          }
          return r ? (a && r.push(String.fromCharCode.apply(String, o.slice(0, a))), r.join("")) : String.fromCharCode.apply(String, o.slice(0, a));
        };
        e.decode = function (e, t, i) {
          var n;
          var r = i;
          var o = 0;
          for (var s = 0; s < e.length;) {
            var l = e.charCodeAt(s++);
            if (61 === l && o > 1) {
              break;
            }
            if (undefined === (l = a[l])) {
              throw Error("invalid encoding");
            }
            switch (o) {
              case 0:
                n = l;
                o = 1;
                break;
              case 1:
                t[i++] = n << 2 | (48 & l) >> 4;
                n = l;
                o = 2;
                break;
              case 2:
                t[i++] = (15 & n) << 4 | (60 & l) >> 2;
                n = l;
                o = 3;
                break;
              case 3:
                t[i++] = (3 & n) << 6 | l;
                o = 0;
            }
          }
          if (1 === o) {
            throw Error("invalid encoding");
          }
          return i - r;
        };
        e.test = function (e) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
        };
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (e, t, i, n, r) {
        function o() {
          this._listeners = {};
        }
        i.exports = o;
        o.prototype.on = function (e, t, i) {
          (this._listeners[e] || (this._listeners[e] = [])).push({
            fn: t,
            ctx: i || this
          });
          return this;
        };
        o.prototype.off = function (e, t) {
          if (undefined === e) {
            this._listeners = {};
          } else if (undefined === t) {
            this._listeners[e] = [];
          } else {
            var i = this._listeners[e];
            for (var n = 0; n < i.length;) {
              if (i[n].fn === t) {
                i.splice(n, 1);
              } else {
                ++n;
              }
            }
          }
          return this;
        };
        o.prototype.emit = function (e) {
          var t = this._listeners[e];
          if (t) {
            var i = [];
            for (var n = 1; n < arguments.length;) {
              i.push(arguments[n++]);
            }
            for (n = 0; n < t.length;) {
              t[n].fn.apply(t[n++].ctx, i);
            }
          }
          return this;
        };
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (e, t, i, n, r) {
        function o(e) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var t = new Float32Array([-0]);
              var i = new Uint8Array(t.buffer);
              var n = 128 === i[3];
              function r(e, n, r) {
                t[0] = e;
                n[r] = i[0];
                n[r + 1] = i[1];
                n[r + 2] = i[2];
                n[r + 3] = i[3];
              }
              function o(e, n, r) {
                t[0] = e;
                n[r] = i[3];
                n[r + 1] = i[2];
                n[r + 2] = i[1];
                n[r + 3] = i[0];
              }
              function s(e, n) {
                i[0] = e[n];
                i[1] = e[n + 1];
                i[2] = e[n + 2];
                i[3] = e[n + 3];
                return t[0];
              }
              function a(e, n) {
                i[3] = e[n];
                i[2] = e[n + 1];
                i[1] = e[n + 2];
                i[0] = e[n + 3];
                return t[0];
              }
              e.writeFloatLE = n ? r : o;
              e.writeFloatBE = n ? o : r;
              e.readFloatLE = n ? s : a;
              e.readFloatBE = n ? a : s;
            })();
          } else {
            (function () {
              function t(e, t, i, n) {
                var r = t < 0 ? 1 : 0;
                if (r) {
                  t = -t;
                }
                if (0 === t) {
                  e(1 / t > 0 ? 0 : 2147483648, i, n);
                } else if (isNaN(t)) {
                  e(2143289344, i, n);
                } else if (t > 34028234663852886e22) {
                  e((r << 31 | 2139095040) >>> 0, i, n);
                } else if (t < 11754943508222875e-54) {
                  e((r << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, i, n);
                } else {
                  var o = Math.floor(Math.log(t) / Math.LN2);
                  e((r << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, i, n);
                }
              }
              function i(e, t, i) {
                var n = e(t, i);
                var r = 2 * (n >> 31) + 1;
                var o = n >>> 23 & 255;
                var s = 8388607 & n;
                return 255 === o ? s ? NaN : r * Infinity : 0 === o ? 1401298464324817e-60 * r * s : r * Math.pow(2, o - 150) * (s + 8388608);
              }
              e.writeFloatLE = t.bind(null, s);
              e.writeFloatBE = t.bind(null, a);
              e.readFloatLE = i.bind(null, l);
              e.readFloatBE = i.bind(null, p);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var t = new Float64Array([-0]);
              var i = new Uint8Array(t.buffer);
              var n = 128 === i[7];
              function r(e, n, r) {
                t[0] = e;
                n[r] = i[0];
                n[r + 1] = i[1];
                n[r + 2] = i[2];
                n[r + 3] = i[3];
                n[r + 4] = i[4];
                n[r + 5] = i[5];
                n[r + 6] = i[6];
                n[r + 7] = i[7];
              }
              function o(e, n, r) {
                t[0] = e;
                n[r] = i[7];
                n[r + 1] = i[6];
                n[r + 2] = i[5];
                n[r + 3] = i[4];
                n[r + 4] = i[3];
                n[r + 5] = i[2];
                n[r + 6] = i[1];
                n[r + 7] = i[0];
              }
              function s(e, n) {
                i[0] = e[n];
                i[1] = e[n + 1];
                i[2] = e[n + 2];
                i[3] = e[n + 3];
                i[4] = e[n + 4];
                i[5] = e[n + 5];
                i[6] = e[n + 6];
                i[7] = e[n + 7];
                return t[0];
              }
              function a(e, n) {
                i[7] = e[n];
                i[6] = e[n + 1];
                i[5] = e[n + 2];
                i[4] = e[n + 3];
                i[3] = e[n + 4];
                i[2] = e[n + 5];
                i[1] = e[n + 6];
                i[0] = e[n + 7];
                return t[0];
              }
              e.writeDoubleLE = n ? r : o;
              e.writeDoubleBE = n ? o : r;
              e.readDoubleLE = n ? s : a;
              e.readDoubleBE = n ? a : s;
            })();
          } else {
            (function () {
              function t(e, t, i, n, r, o) {
                var s = n < 0 ? 1 : 0;
                if (s) {
                  n = -n;
                }
                if (0 === n) {
                  e(0, r, o + t);
                  e(1 / n > 0 ? 0 : 2147483648, r, o + i);
                } else if (isNaN(n)) {
                  e(0, r, o + t);
                  e(2146959360, r, o + i);
                } else if (n > 17976931348623157e292) {
                  e(0, r, o + t);
                  e((s << 31 | 2146435072) >>> 0, r, o + i);
                } else {
                  var a;
                  if (n < 22250738585072014e-324) {
                    e((a = n / 5e-324) >>> 0, r, o + t);
                    e((s << 31 | a / 4294967296) >>> 0, r, o + i);
                  } else {
                    var l = Math.floor(Math.log(n) / Math.LN2);
                    if (1024 === l) {
                      l = 1023;
                    }
                    e(4503599627370496 * (a = n * Math.pow(2, -l)) >>> 0, r, o + t);
                    e((s << 31 | l + 1023 << 20 | 1048576 * a & 1048575) >>> 0, r, o + i);
                  }
                }
              }
              function i(e, t, i, n, r) {
                var o = e(n, r + t);
                var s = e(n, r + i);
                var a = 2 * (s >> 31) + 1;
                var l = s >>> 20 & 2047;
                var p = 4294967296 * (1048575 & s) + o;
                return 2047 === l ? p ? NaN : a * Infinity : 0 === l ? 5e-324 * a * p : a * Math.pow(2, l - 1075) * (p + 4503599627370496);
              }
              e.writeDoubleLE = t.bind(null, s, 0, 4);
              e.writeDoubleBE = t.bind(null, a, 4, 0);
              e.readDoubleLE = i.bind(null, l, 0, 4);
              e.readDoubleBE = i.bind(null, p, 4, 0);
            })();
          }
          return e;
        }
        function s(e, t, i) {
          t[i] = 255 & e;
          t[i + 1] = e >>> 8 & 255;
          t[i + 2] = e >>> 16 & 255;
          t[i + 3] = e >>> 24;
        }
        function a(e, t, i) {
          t[i] = e >>> 24;
          t[i + 1] = e >>> 16 & 255;
          t[i + 2] = e >>> 8 & 255;
          t[i + 3] = 255 & e;
        }
        function l(e, t) {
          return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
        }
        function p(e, t) {
          return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
        }
        i.exports = o(o);
        i.exports;
        i.exports.writeFloatLE;
        i.exports.writeFloatBE;
        i.exports.readFloatLE;
        i.exports.readFloatBE;
        i.exports.writeDoubleLE;
        i.exports.writeDoubleBE;
        i.exports.readDoubleLE;
        i.exports.readDoubleBE;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (exports, require, module, __filename, __dirname) {
        function inquire(moduleName) {
          try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) {
              return mod;
            }
          } catch (e) {}
          return null;
        }
        module.exports = inquire;
        module.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (e, t, i, n, r) {
        e.length = function (e) {
          var t = 0;
          var i = 0;
          for (var n = 0; n < e.length; ++n) {
            if ((i = e.charCodeAt(n)) < 128) {
              t += 1;
            } else if (i < 2048) {
              t += 2;
            } else if (55296 == (64512 & i) && 56320 == (64512 & e.charCodeAt(n + 1))) {
              ++n;
              t += 4;
            } else {
              t += 3;
            }
          }
          return t;
        };
        e.read = function (e, t, i) {
          if (i - t < 1) {
            return "";
          }
          var n;
          var r = null;
          var o = [];
          for (var s = 0; t < i;) {
            if ((n = e[t++]) < 128) {
              o[s++] = n;
            } else if (n > 191 && n < 224) {
              o[s++] = (31 & n) << 6 | 63 & e[t++];
            } else if (n > 239 && n < 365) {
              n = ((7 & n) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536;
              o[s++] = 55296 + (n >> 10);
              o[s++] = 56320 + (1023 & n);
            } else {
              o[s++] = (15 & n) << 12 | (63 & e[t++]) << 6 | 63 & e[t++];
            }
            if (s > 8191) {
              (r || (r = [])).push(String.fromCharCode.apply(String, o));
              s = 0;
            }
          }
          return r ? (s && r.push(String.fromCharCode.apply(String, o.slice(0, s))), r.join("")) : String.fromCharCode.apply(String, o.slice(0, s));
        };
        e.write = function (e, t, i) {
          var n;
          var r;
          var o = i;
          for (var s = 0; s < e.length; ++s) {
            if ((n = e.charCodeAt(s)) < 128) {
              t[i++] = n;
            } else if (n < 2048) {
              t[i++] = n >> 6 | 192;
              t[i++] = 63 & n | 128;
            } else if (55296 == (64512 & n) && 56320 == (64512 & (r = e.charCodeAt(s + 1)))) {
              n = 65536 + ((1023 & n) << 10) + (1023 & r);
              ++s;
              t[i++] = n >> 18 | 240;
              t[i++] = n >> 12 & 63 | 128;
              t[i++] = n >> 6 & 63 | 128;
              t[i++] = 63 & n | 128;
            } else {
              t[i++] = n >> 12 | 224;
              t[i++] = n >> 6 & 63 | 128;
              t[i++] = 63 & n | 128;
            }
          }
          return i - o;
        };
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (e, t, i, n, r) {
        i.exports = function (e, t, i) {
          var n = i || 8192;
          var r = n >>> 1;
          var o = null;
          var s = n;
          return function (i) {
            if (i < 1 || i > r) {
              return e(i);
            }
            if (s + i > n) {
              o = e(n);
              s = 0;
            }
            var a = t.call(o, s, s += i);
            if (7 & s) {
              s = 1 + (7 | s);
            }
            return a;
          };
        };
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (e, t, i, n, r) {
        i.exports = s;
        var o = t("../util/minimal");
        function s(e, t) {
          this.lo = e >>> 0;
          this.hi = t >>> 0;
        }
        var a = s.zero = new s(0, 0);
        a.toNumber = function () {
          return 0;
        };
        a.zzEncode = a.zzDecode = function () {
          return this;
        };
        a.length = function () {
          return 1;
        };
        var l = s.zeroHash = "\0\0\0\0\0\0\0\0";
        s.fromNumber = function (e) {
          if (0 === e) {
            return a;
          }
          var t = e < 0;
          if (t) {
            e = -e;
          }
          var i = e >>> 0;
          var n = (e - i) / 4294967296 >>> 0;
          if (t) {
            n = ~n >>> 0;
            i = ~i >>> 0;
            if (++i > 4294967295) {
              i = 0;
              if (++n > 4294967295) {
                n = 0;
              }
            }
          }
          return new s(i, n);
        };
        s.from = function (e) {
          if ("number" == typeof e) {
            return s.fromNumber(e);
          }
          if (o.isString(e)) {
            if (!o.Long) {
              return s.fromNumber(parseInt(e, 10));
            }
            e = o.Long.fromString(e);
          }
          return e.low || e.high ? new s(e.low >>> 0, e.high >>> 0) : a;
        };
        s.prototype.toNumber = function (e) {
          if (!e && this.hi >>> 31) {
            var t = 1 + ~this.lo >>> 0;
            var i = ~this.hi >>> 0;
            if (!t) {
              i = i + 1 >>> 0;
            }
            return -(t + 4294967296 * i);
          }
          return this.lo + 4294967296 * this.hi;
        };
        s.prototype.toLong = function (e) {
          return o.Long ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
            low: 0 | this.lo,
            high: 0 | this.hi,
            unsigned: Boolean(e)
          };
        };
        var p = String.prototype.charCodeAt;
        s.fromHash = function (e) {
          return e === l ? a : new s((p.call(e, 0) | p.call(e, 1) << 8 | p.call(e, 2) << 16 | p.call(e, 3) << 24) >>> 0, (p.call(e, 4) | p.call(e, 5) << 8 | p.call(e, 6) << 16 | p.call(e, 7) << 24) >>> 0);
        };
        s.prototype.toHash = function () {
          return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
        };
        s.prototype.zzEncode = function () {
          var e = this.hi >> 31;
          this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0;
          this.lo = (this.lo << 1 ^ e) >>> 0;
          return this;
        };
        s.prototype.zzDecode = function () {
          var e = -(1 & this.lo);
          this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0;
          this.hi = (this.hi >>> 1 ^ e) >>> 0;
          return this;
        };
        s.prototype.length = function () {
          var e = this.lo;
          var t = (this.lo >>> 28 | this.hi << 4) >>> 0;
          var i = this.hi >>> 24;
          return 0 === i ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : i < 128 ? 9 : 10;
        };
        i.exports;
      }, function () {
        return {
          "../util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (e, t, i, n, r) {
        function s(e, t, i) {
          var n = Object.keys(t);
          for (var r = 0; r < n.length; ++r) {
            if (!(undefined !== e[n[r]] && i)) {
              e[n[r]] = t[n[r]];
            }
          }
          return e;
        }
        function a(e) {
          function t(e, i) {
            if (!(this instanceof t)) {
              return new t(e, i);
            }
            Object.defineProperty(this, "message", {
              get: function () {
                return e;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, t);
            } else {
              Object.defineProperty(this, "stack", {
                value: new Error().stack || ""
              });
            }
            if (i) {
              s(this, i);
            }
          }
          t.prototype = Object.create(Error.prototype, {
            constructor: {
              value: t,
              writable: true,
              enumerable: false,
              configurable: true
            },
            name: {
              get: function () {
                return e;
              },
              set: undefined,
              enumerable: false,
              configurable: true
            },
            toString: {
              value: function () {
                return this.name + ": " + this.message;
              },
              writable: true,
              enumerable: false,
              configurable: true
            }
          });
          return t;
        }
        e.asPromise = t("@protobufjs/aspromise");
        e.base64 = t("@protobufjs/base64");
        e.EventEmitter = t("@protobufjs/eventemitter");
        e.float = t("@protobufjs/float");
        e.inquire = t("@protobufjs/inquire");
        e.utf8 = t("@protobufjs/utf8");
        e.pool = t("@protobufjs/pool");
        e.LongBits = t("./longbits");
        e.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        e.global = e.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        e.emptyArray = Object.freeze ? Object.freeze([]) : [];
        e.emptyObject = Object.freeze ? Object.freeze({}) : {};
        e.isInteger = Number.isInteger || function (e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        };
        e.isString = function (e) {
          return "string" == typeof e || e instanceof String;
        };
        e.isObject = function (e) {
          return e && "object" == typeof e;
        };
        e.isset = e.isSet = function (e, t) {
          var i = e[t];
          return !(null == i || !e.hasOwnProperty(t)) && ("object" != typeof i || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0);
        };
        e.Buffer = function () {
          try {
            var e = e.inquire("buffer").Buffer;
            return e.prototype.utf8Write ? e : null;
          } catch (e) {
            return null;
          }
        }();
        e._Buffer_from = null;
        e._Buffer_allocUnsafe = null;
        e.newBuffer = function (e) {
          return "number" == typeof e ? e.Buffer ? e._Buffer_allocUnsafe(e) : new e.Array(e) : e.Buffer ? e._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e);
        };
        e.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        e.Long = e.global.dcodeIO && e.global.dcodeIO.Long || e.global.Long || e.inquire("long");
        e.key2Re = /^true|false|0|1$/;
        e.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        e.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        e.longToHash = function (e) {
          return e ? e.LongBits.from(e).toHash() : e.LongBits.zeroHash;
        };
        e.longFromHash = function (e, t) {
          var i = e.LongBits.fromHash(e);
          return e.Long ? e.Long.fromBits(i.lo, i.hi, t) : i.toNumber(Boolean(t));
        };
        e.merge = s;
        e.lcFirst = function (e) {
          return e.charAt(0).toLowerCase() + e.substring(1);
        };
        e.newError = a;
        e.ProtocolError = a("ProtocolError");
        e.oneOfGetter = function (e) {
          var t = {};
          for (var i = 0; i < e.length; ++i) {
            t[e[i]] = 1;
          }
          return function () {
            var e = Object.keys(this);
            for (var i = e.length - 1; i > -1; --i) {
              if (1 === t[e[i]] && undefined !== this[e[i]] && null !== this[e[i]]) {
                return e[i];
              }
            }
          };
        };
        e.oneOfSetter = function (e) {
          return function (t) {
            for (var i = 0; i < e.length; ++i) {
              if (e[i] !== t) {
                delete this[e[i]];
              }
            }
          };
        };
        e.toJSONOptions = {
          longs: String,
          enums: String,
          bytes: String,
          json: true
        };
        e._configure = function () {
          var e = e.Buffer;
          if (e) {
            e._Buffer_from = e.from !== Uint8Array.from && e.from || function (t, i) {
              return new e(t, i);
            };
            e._Buffer_allocUnsafe = e.allocUnsafe || function (t) {
              return new e(t);
            };
          } else {
            e._Buffer_from = e._Buffer_allocUnsafe = null;
          }
        };
        i.exports;
      }, function () {
        return {
          "@protobufjs/aspromise": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/base64": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          "@protobufjs/eventemitter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          "@protobufjs/float": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          "@protobufjs/inquire": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          "@protobufjs/utf8": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          "@protobufjs/pool": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          "./longbits": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (e, t, i, n, r) {
        i.exports = _;
        var o;
        var s = t("./util/minimal");
        var a = s.LongBits;
        var l = s.base64;
        var p = s.utf8;
        function u(e, t, i) {
          this.fn = e;
          this.len = t;
          this.next = undefined;
          this.val = i;
        }
        function c() {}
        function m(e) {
          this.head = e.head;
          this.tail = e.tail;
          this.len = e.len;
          this.next = e.states;
        }
        function _() {
          this.len = 0;
          this.head = new u(c, 0, 0);
          this.tail = this.head;
          this.states = null;
        }
        var h = function () {
          return s.Buffer ? function () {
            return (_.create = function () {
              return new o();
            })();
          } : function () {
            return new _();
          };
        };
        function f(e, t, i) {
          t[i] = 255 & e;
        }
        function d(e, t) {
          this.len = e;
          this.next = undefined;
          this.val = t;
        }
        function y(e, t, i) {
          for (; e.hi;) {
            t[i++] = 127 & e.lo | 128;
            e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0;
            e.hi >>>= 7;
          }
          for (; e.lo > 127;) {
            t[i++] = 127 & e.lo | 128;
            e.lo = e.lo >>> 7;
          }
          t[i++] = e.lo;
        }
        function S(e, t, i) {
          t[i] = 255 & e;
          t[i + 1] = e >>> 8 & 255;
          t[i + 2] = e >>> 16 & 255;
          t[i + 3] = e >>> 24;
        }
        _.create = h();
        _.alloc = function (e) {
          return new s.Array(e);
        };
        if (s.Array !== Array) {
          _.alloc = s.pool(_.alloc, s.Array.prototype.subarray);
        }
        _.prototype._push = function (e, t, i) {
          this.tail = this.tail.next = new u(e, t, i);
          this.len += t;
          return this;
        };
        d.prototype = Object.create(u.prototype);
        d.prototype.fn = function (e, t, i) {
          for (; e > 127;) {
            t[i++] = 127 & e | 128;
            e >>>= 7;
          }
          t[i] = e;
        };
        _.prototype.uint32 = function (e) {
          this.len += (this.tail = this.tail.next = new d((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
          return this;
        };
        _.prototype.int32 = function (e) {
          return e < 0 ? this._push(y, 10, a.fromNumber(e)) : this.uint32(e);
        };
        _.prototype.sint32 = function (e) {
          return this.uint32((e << 1 ^ e >> 31) >>> 0);
        };
        _.prototype.uint64 = function (e) {
          var t = a.from(e);
          return this._push(y, t.length(), t);
        };
        _.prototype.int64 = _.prototype.uint64;
        _.prototype.sint64 = function (e) {
          var t = a.from(e).zzEncode();
          return this._push(y, t.length(), t);
        };
        _.prototype.bool = function (e) {
          return this._push(f, 1, e ? 1 : 0);
        };
        _.prototype.fixed32 = function (e) {
          return this._push(S, 4, e >>> 0);
        };
        _.prototype.sfixed32 = _.prototype.fixed32;
        _.prototype.fixed64 = function (e) {
          var t = a.from(e);
          return this._push(S, 4, t.lo)._push(S, 4, t.hi);
        };
        _.prototype.sfixed64 = _.prototype.fixed64;
        _.prototype.float = function (e) {
          return this._push(s.float.writeFloatLE, 4, e);
        };
        _.prototype.double = function (e) {
          return this._push(s.float.writeDoubleLE, 8, e);
        };
        var g = s.Array.prototype.set ? function (e, t, i) {
          t.set(e, i);
        } : function (e, t, i) {
          for (var n = 0; n < e.length; ++n) {
            t[i + n] = e[n];
          }
        };
        _.prototype.bytes = function (e) {
          var t = e.length >>> 0;
          if (!t) {
            return this._push(f, 1, 0);
          }
          if (s.isString(e)) {
            var i = _.alloc(t = l.length(e));
            l.decode(e, i, 0);
            e = i;
          }
          return this.uint32(t)._push(g, t, e);
        };
        _.prototype.string = function (e) {
          var t = p.length(e);
          return t ? this.uint32(t)._push(p.write, t, e) : this._push(f, 1, 0);
        };
        _.prototype.fork = function () {
          this.states = new m(this);
          this.head = this.tail = new u(c, 0, 0);
          this.len = 0;
          return this;
        };
        _.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new u(c, 0, 0);
            this.len = 0;
          }
          return this;
        };
        _.prototype.ldelim = function () {
          var e = this.head;
          var t = this.tail;
          var i = this.len;
          this.reset().uint32(i);
          if (i) {
            this.tail.next = e.next;
            this.tail = t;
            this.len += i;
          }
          return this;
        };
        _.prototype.finish = function () {
          var e = this.head.next;
          var t = this.constructor.alloc(this.len);
          for (var i = 0; e;) {
            e.fn(e.val, t, i);
            i += e.len;
            e = e.next;
          }
          return t;
        };
        _._configure = function (e) {
          o = e;
          _.create = h();
          o._configure();
        };
        i.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (e, t, i, n, r) {
        i.exports = a;
        var o = t("./writer");
        (a.prototype = Object.create(o.prototype)).constructor = a;
        var s = t("./util/minimal");
        function a() {
          o.call(this);
        }
        function l(e, t, i) {
          if (e.length < 40) {
            s.utf8.write(e, t, i);
          } else if (t.utf8Write) {
            t.utf8Write(e, i);
          } else {
            t.write(e, i);
          }
        }
        a._configure = function () {
          a.alloc = s._Buffer_allocUnsafe;
          a.writeBytesBuffer = s.Buffer && s.Buffer.prototype instanceof Uint8Array && "set" === s.Buffer.prototype.set.name ? function (e, t, i) {
            t.set(e, i);
          } : function (e, t, i) {
            if (e.copy) {
              e.copy(t, i, 0, e.length);
            } else {
              for (var n = 0; n < e.length;) {
                t[i++] = e[n++];
              }
            }
          };
        };
        a.prototype.bytes = function (e) {
          if (s.isString(e)) {
            e = s._Buffer_from(e, "base64");
          }
          var t = e.length >>> 0;
          this.uint32(t);
          if (t) {
            this._push(a.writeBytesBuffer, t, e);
          }
          return this;
        };
        a.prototype.string = function (e) {
          var t = s.Buffer.byteLength(e);
          this.uint32(t);
          if (t) {
            this._push(l, t, e);
          }
          return this;
        };
        a._configure();
        i.exports;
      }, function () {
        return {
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (e, t, i, n, r) {
        i.exports = u;
        var o;
        var s = t("./util/minimal");
        var a = s.LongBits;
        var l = s.utf8;
        function u(e) {
          this.buf = e;
          this.pos = 0;
          this.len = e.length;
        }
        var c;
        var m = "undefined" != typeof Uint8Array ? function (e) {
          if (e instanceof Uint8Array || Array.isArray(e)) {
            return new u(e);
          }
          throw Error("illegal buffer");
        } : function (e) {
          if (Array.isArray(e)) {
            return new u(e);
          }
          throw Error("illegal buffer");
        };
        var _ = function () {
          return s.Buffer ? function (e) {
            return (u.create = function (e) {
              return s.Buffer.isBuffer(e) ? new o(e) : m(e);
            })(e);
          } : m;
        };
        function h() {
          var e = new a(0, 0);
          var t = 0;
          if (!(this.len - this.pos > 4)) {
            for (; t < 3; ++t) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 1) + " > " + this.len);
              }
              e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0;
              if (this.buf[this.pos++] < 128) {
                return e;
              }
            }
            e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0;
            return e;
          }
          for (; t < 4; ++t) {
            e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0;
            if (this.buf[this.pos++] < 128) {
              return e;
            }
          }
          e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0;
          e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return e;
          }
          t = 0;
          if (this.len - this.pos > 4) {
            for (; t < 5; ++t) {
              e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0;
              if (this.buf[this.pos++] < 128) {
                return e;
              }
            }
          } else {
            for (; t < 5; ++t) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 1) + " > " + this.len);
              }
              e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0;
              if (this.buf[this.pos++] < 128) {
                return e;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function d() {
          if (this.pos + 8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (8 || 1) + " > " + this.len);
          }
          return new a((this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0, (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0);
        }
        u.create = _();
        u.prototype._slice = s.Array.prototype.subarray || s.Array.prototype.slice;
        c = 4294967295;
        u.prototype.uint32 = function () {
          c = (127 & this.buf[this.pos]) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return c;
          }
          c = (c | (127 & this.buf[this.pos]) << 7) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return c;
          }
          c = (c | (127 & this.buf[this.pos]) << 14) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return c;
          }
          c = (c | (127 & this.buf[this.pos]) << 21) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return c;
          }
          c = (c | (15 & this.buf[this.pos]) << 28) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return c;
          }
          if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (10 || 1) + " > " + this.len);
          }
          return c;
        };
        u.prototype.int32 = function () {
          return 0 | this.uint32();
        };
        u.prototype.sint32 = function () {
          var e = this.uint32();
          return e >>> 1 ^ -(1 & e) | 0;
        };
        u.prototype.bool = function () {
          return 0 !== this.uint32();
        };
        u.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0;
        };
        u.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
          }
          return 0 | (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0;
        };
        u.prototype.float = function () {
          if (this.pos + 4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
          }
          var e = s.float.readFloatLE(this.buf, this.pos);
          this.pos += 4;
          return e;
        };
        u.prototype.double = function () {
          if (this.pos + 8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
          }
          var e = s.float.readDoubleLE(this.buf, this.pos);
          this.pos += 8;
          return e;
        };
        u.prototype.bytes = function () {
          var e = this.uint32();
          var t = this.pos;
          var i = this.pos + e;
          if (i > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (e || 1) + " > " + this.len);
          }
          this.pos += e;
          if (Array.isArray(this.buf)) {
            return this.buf.slice(t, i);
          }
          if (t === i) {
            var n = s.Buffer;
            return n ? n.alloc(0) : new this.buf.constructor(0);
          }
          return this._slice.call(this.buf, t, i);
        };
        u.prototype.string = function () {
          var e = this.bytes();
          return l.read(e, 0, e.length);
        };
        u.prototype.skip = function (e) {
          if ("number" == typeof e) {
            if (this.pos + e > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (e || 1) + " > " + this.len);
            }
            this.pos += e;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 1) + " > " + this.len);
              }
            } while (128 & this.buf[this.pos++]);
          }
          return this;
        };
        u.prototype.skipType = function (e) {
          switch (e) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              for (; 4 != (e = 7 & this.uint32());) {
                this.skipType(e);
              }
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + e + " at offset " + this.pos);
          }
          return this;
        };
        u._configure = function (e) {
          o = e;
          u.create = _();
          o._configure();
          var t = s.Long ? "toLong" : "toNumber";
          s.merge(u.prototype, {
            int64: function () {
              return h.call(this)[t](false);
            },
            uint64: function () {
              return h.call(this)[t](true);
            },
            sint64: function () {
              return h.call(this).zzDecode()[t](false);
            },
            fixed64: function () {
              return d.call(this)[t](true);
            },
            sfixed64: function () {
              return d.call(this)[t](false);
            }
          });
        };
        i.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (e, t, i, n, r) {
        i.exports = a;
        var o = t("./reader");
        (a.prototype = Object.create(o.prototype)).constructor = a;
        var s = t("./util/minimal");
        function a(e) {
          o.call(this, e);
        }
        a._configure = function () {
          if (s.Buffer) {
            a.prototype._slice = s.Buffer.prototype.slice;
          }
        };
        a.prototype.string = function () {
          var e = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
        };
        a._configure();
        i.exports;
      }, function () {
        return {
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (e, t, i, n, r) {
        i.exports = s;
        var o = t("../util/minimal");
        function s(e, t, i) {
          if ("function" != typeof e) {
            throw TypeError("rpcImpl must be a function");
          }
          o.EventEmitter.call(this);
          this.rpcImpl = e;
          this.requestDelimited = Boolean(t);
          this.responseDelimited = Boolean(i);
        }
        (s.prototype = Object.create(o.EventEmitter.prototype)).constructor = s;
        s.prototype.rpcCall = function e(t, i, n, r, s) {
          if (!r) {
            throw TypeError("request must be specified");
          }
          var a = this;
          if (!s) {
            return o.asPromise(e, a, t, i, n, r);
          }
          if (a.rpcImpl) {
            try {
              return a.rpcImpl(t, i[a.requestDelimited ? "encodeDelimited" : "encode"](r).finish(), function (e, i) {
                if (e) {
                  a.emit("error", e, t);
                  return s(e);
                }
                if (null !== i) {
                  if (!(i instanceof n)) {
                    try {
                      i = n[a.responseDelimited ? "decodeDelimited" : "decode"](i);
                    } catch (e) {
                      a.emit("error", e, t);
                      return s(e);
                    }
                  }
                  a.emit("data", i, t);
                  return s(null, i);
                }
                a.end(true);
              });
            } catch (e) {
              a.emit("error", e, t);
              return void setTimeout(function () {
                s(e);
              }, 0);
            }
          } else {
            setTimeout(function () {
              s(Error("already ended"));
            }, 0);
          }
        };
        s.prototype.end = function (e) {
          if (this.rpcImpl) {
            if (!e) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        i.exports;
      }, function () {
        return {
          "../util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (e, t, i, n, r) {
        e.Service = t("./rpc/service");
        i.exports;
      }, function () {
        return {
          "./rpc/service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (e, t, i, n, r) {
        i.exports = {};
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (e, t, i, n, r) {
        function s() {
          e.util._configure();
          e.Writer._configure(e.BufferWriter);
          e.Reader._configure(e.BufferReader);
        }
        e.build = "minimal";
        e.Writer = t("./writer");
        e.BufferWriter = t("./writer_buffer");
        e.Reader = t("./reader");
        e.BufferReader = t("./reader_buffer");
        e.util = t("./util/minimal");
        e.rpc = t("./rpc");
        e.roots = t("./roots");
        e.configure = s;
        s();
        i.exports;
      }, function () {
        return {
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./writer_buffer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./reader_buffer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./rpc": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          "./roots": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (e, t, i, n, r) {
        function o(e, t) {
          if ("string" == typeof e) {
            t = e;
            e = undefined;
          }
          var i = [];
          function n(e) {
            if ("string" != typeof e) {
              var t = "function " + (undefined || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + i.join("\n  ") + "\n}";
              if (o.verbose) {
                console.log("codegen: " + t);
              }
              t = "return " + t;
              if (e) {
                var s = Object.keys(e);
                var a = new Array(s.length + 1);
                var l = new Array(s.length);
                for (var p = 0; p < s.length;) {
                  a[p] = s[p];
                  l[p] = e[s[p++]];
                }
                a[p] = t;
                return Function.apply(null, a).apply(null, l);
              }
              return Function(t)();
            }
            var u = new Array(arguments.length - 1);
            for (var c = 0; c < u.length;) {
              u[c] = arguments[++c];
            }
            c = 0;
            e = e.replace(/%([%dfijs])/g, function (e, t) {
              var i = u[c++];
              switch (t) {
                case "d":
                case "f":
                  return String(Number(i));
                case "i":
                  return String(Math.floor(i));
                case "j":
                  return JSON.stringify(i);
                case "s":
                  return String(i);
              }
              return "%";
            });
            if (c !== u.length) {
              throw Error("parameter count mismatch");
            }
            i.push(e);
            return n;
          }
          function r(n) {
            return "function " + (n || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + i.join("\n  ") + "\n}";
          }
          n.toString = r;
          return n;
        }
        i.exports = o;
        o.verbose = false;
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (e, t, i, n, r) {
        i.exports = a;
        var o = t("@protobufjs/aspromise");
        var s = t("@protobufjs/inquire")("fs");
        function a(e, t, i) {
          if ("function" == typeof t) {
            i = t;
            t = {};
          } else if (!t) {
            t = {};
          }
          return i ? !t.xhr && s && s.readFile ? s.readFile(e, function (n, r) {
            return n && "undefined" != typeof XMLHttpRequest ? a.xhr(e, t, i) : n ? i(n) : i(null, t.binary ? r : r.toString("utf8"));
          }) : a.xhr(e, t, i) : o(a, this, e, t);
        }
        a.xhr = function (e, t, i) {
          var n = new XMLHttpRequest();
          n.onreadystatechange = function () {
            if (4 === n.readyState) {
              if (0 !== n.status && 200 !== n.status) {
                return i(Error("status " + n.status));
              }
              if (t.binary) {
                var e = n.response;
                if (!e) {
                  e = [];
                  for (var r = 0; r < n.responseText.length; ++r) {
                    e.push(255 & n.responseText.charCodeAt(r));
                  }
                }
                return i(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e);
              }
              return i(null, n.responseText);
            }
          };
          if (t.binary) {
            if ("overrideMimeType" in n) {
              n.overrideMimeType("text/plain; charset=x-user-defined");
            }
            n.responseType = "arraybuffer";
          }
          n.open("GET", e);
          n.send();
        };
        i.exports;
      }, function () {
        return {
          "@protobufjs/aspromise": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/inquire": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (e, t, i, n, r) {
        var s = e.isAbsolute = function (e) {
          return /^(?:\/|\w+:)/.test(e);
        };
        var a = e.normalize = function (e) {
          var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/");
          var i = s(e);
          var n = "";
          if (i) {
            n = t.shift() + "/";
          }
          for (var r = 0; r < t.length;) {
            if (".." === t[r]) {
              if (r > 0 && ".." !== t[r - 1]) {
                t.splice(--r, 2);
              } else if (i) {
                t.splice(r, 1);
              } else {
                ++r;
              }
            } else if ("." === t[r]) {
              t.splice(r, 1);
            } else {
              ++r;
            }
          }
          return n + t.join("/");
        };
        e.resolve = function (e, t, i) {
          if (!i) {
            t = a(t);
          }
          return s(t) ? t : (i || (e = a(e)), (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? a(e + "/" + t) : t);
        };
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (e, t, i, n, r) {
        var s = t("./util");
        var a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function l(e, t) {
          var i = 0;
          var n = {};
          for (t |= 0; i < e.length;) {
            n[a[i + t]] = e[i++];
          }
          return n;
        }
        e.basic = l([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
        e.defaults = l([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", s.emptyArray, null]);
        e.long = l([0, 0, 0, 1, 1], 7);
        e.mapKey = l([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
        e.packed = l([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
        i.exports;
      }, function () {
        return {
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (e, t, i, n, r) {
        i.exports = c;
        var o = t("./object");
        ((c.prototype = Object.create(o.prototype)).constructor = c).className = "Field";
        var s;
        var a = t("./enum");
        var l = t("./types");
        var p = t("./util");
        var u = /^required|optional|repeated$/;
        function c(e, t, i, n, r, s, a) {
          if (p.isObject(n)) {
            a = r;
            s = n;
            n = r = undefined;
          } else if (p.isObject(r)) {
            a = s;
            s = r;
            r = undefined;
          }
          o.call(this, e, s);
          if (!p.isInteger(t) || t < 0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!p.isString(i)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== n && !u.test(n = n.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== r && !p.isString(r)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === n) {
            n = "optional";
          }
          this.rule = n && "optional" !== n ? n : undefined;
          this.type = i;
          this.id = t;
          this.extend = r || undefined;
          this.required = "required" === n;
          this.optional = !this.required;
          this.repeated = "repeated" === n;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!p.Long && undefined !== l.long[i];
          this.bytes = "bytes" === i;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = a;
        }
        c.fromJSON = function (e, t) {
          return new c(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
        };
        Object.defineProperty(c.prototype, "packed", {
          get: function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        c.prototype.setOption = function (e, t, i) {
          if ("packed" === e) {
            this._packed = null;
          }
          return o.prototype.setOption.call(this, e, t, i);
        };
        c.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return p.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
        };
        c.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = l.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof s) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
            }
          } else if (this.options && this.options.proto3_optional) {
            this.typeDefault = null;
          }
          if (this.options && null != this.options.default) {
            this.typeDefault = this.options.default;
            if (this.resolvedType instanceof a && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof a))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = p.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else if (this.bytes && "string" == typeof this.typeDefault) {
            var e;
            if (p.base64.test(this.typeDefault)) {
              p.base64.decode(this.typeDefault, e = p.newBuffer(p.base64.length(this.typeDefault)), 0);
            } else {
              p.utf8.write(this.typeDefault, e = p.newBuffer(p.utf8.length(this.typeDefault)), 0);
            }
            this.typeDefault = e;
          }
          if (this.map) {
            this.defaultValue = p.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = p.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof s) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return o.prototype.resolve.call(this);
        };
        c.d = function (e, t, i, n) {
          if ("function" == typeof t) {
            t = p.decorateType(t).name;
          } else if (t && "object" == typeof t) {
            t = p.decorateEnum(t).name;
          }
          return function (r, o) {
            p.decorateType(r.constructor).add(new c(o, e, t, i, {
              default: n
            }));
          };
        };
        c._configure = function (e) {
          s = e;
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (e, t, i, n, r) {
        i.exports = l;
        var o = t("./object");
        ((l.prototype = Object.create(o.prototype)).constructor = l).className = "OneOf";
        var s = t("./field");
        var a = t("./util");
        function l(e, t, i, n) {
          if (!Array.isArray(t)) {
            i = t;
            t = undefined;
          }
          o.call(this, e, i);
          if (undefined !== t && !Array.isArray(t)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = t || [];
          this.fieldsArray = [];
          this.comment = n;
        }
        function p(e) {
          if (e.parent) {
            for (var t = 0; t < e.fieldsArray.length; ++t) {
              if (!e.fieldsArray[t].parent) {
                e.parent.add(e.fieldsArray[t]);
              }
            }
          }
        }
        l.fromJSON = function (e, t) {
          return new l(e, t.oneof, t.options, t.comment);
        };
        l.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return a.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : undefined]);
        };
        l.prototype.add = function (e) {
          if (!(e instanceof s)) {
            throw TypeError("field must be a Field");
          }
          if (e.parent && e.parent !== this.parent) {
            e.parent.remove(e);
          }
          this.oneof.push(e.name);
          this.fieldsArray.push(e);
          e.partOf = this;
          p(this);
          return this;
        };
        l.prototype.remove = function (e) {
          if (!(e instanceof s)) {
            throw TypeError("field must be a Field");
          }
          var t = this.fieldsArray.indexOf(e);
          if (t < 0) {
            throw Error(e + " is not a member of " + this);
          }
          this.fieldsArray.splice(t, 1);
          if ((t = this.oneof.indexOf(e.name)) > -1) {
            this.oneof.splice(t, 1);
          }
          e.partOf = null;
          return this;
        };
        l.prototype.onAdd = function (e) {
          o.prototype.onAdd.call(this, e);
          for (var t = 0; t < this.oneof.length; ++t) {
            var i = e.get(this.oneof[t]);
            if (i && !i.partOf) {
              i.partOf = this;
              this.fieldsArray.push(i);
            }
          }
          p(this);
        };
        l.prototype.onRemove = function (e) {
          var t;
          for (var i = 0; i < this.fieldsArray.length; ++i) {
            if ((t = this.fieldsArray[i]).parent) {
              t.parent.remove(t);
            }
          }
          o.prototype.onRemove.call(this, e);
        };
        l.d = function () {
          var e = new Array(arguments.length);
          for (var t = 0; t < arguments.length;) {
            e[t] = arguments[t++];
          }
          return function (t, i) {
            a.decorateType(t.constructor).add(new l(i, e));
            Object.defineProperty(t, i, {
              get: a.oneOfGetter(e),
              set: a.oneOfSetter(e)
            });
          };
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (e, t, i, n, r) {
        i.exports = _;
        var o = t("./object");
        ((_.prototype = Object.create(o.prototype)).constructor = _).className = "Namespace";
        var s;
        var a;
        var l;
        var p = t("./field");
        var u = t("./util");
        var c = t("./oneof");
        function m(e, t) {
          if (e && e.length) {
            var i = {};
            for (var n = 0; n < e.length; ++n) {
              i[e[n].name] = e[n].toJSON(t);
            }
            return i;
          }
        }
        function _(e, t) {
          o.call(this, e, t);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function h(e) {
          e._nestedArray = null;
          return e;
        }
        _.fromJSON = function (e, t) {
          return new _(e, t.options).addJSON(t.nested);
        };
        _.arrayToJSON = m;
        _.isReservedId = function (e, t) {
          if (e) {
            for (var i = 0; i < e.length; ++i) {
              if ("string" != typeof e[i] && e[i][0] <= t && e[i][1] > t) {
                return true;
              }
            }
          }
          return false;
        };
        _.isReservedName = function (e, t) {
          if (e) {
            for (var i = 0; i < e.length; ++i) {
              if (e[i] === t) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_.prototype, "nestedArray", {
          get: function () {
            return this._nestedArray || (this._nestedArray = u.toArray(this.nested));
          }
        });
        _.prototype.toJSON = function (e) {
          return u.toObject(["options", this.options, "nested", m(this.nestedArray, e)]);
        };
        _.prototype.addJSON = function (e) {
          if (e) {
            var t;
            var i = Object.keys(e);
            for (var n = 0; n < i.length; ++n) {
              t = e[i[n]];
              this.add((undefined !== t.fields ? s.fromJSON : undefined !== t.values ? l.fromJSON : undefined !== t.methods ? a.fromJSON : undefined !== t.id ? p.fromJSON : _.fromJSON)(i[n], t));
            }
          }
          return this;
        };
        _.prototype.get = function (e) {
          return this.nested && this.nested[e] || null;
        };
        _.prototype.getEnum = function (e) {
          if (this.nested && this.nested[e] instanceof l) {
            return this.nested[e].values;
          }
          throw Error("no such enum: " + e);
        };
        _.prototype.add = function (e) {
          if (!(e instanceof p && undefined !== e.extend || e instanceof s || e instanceof c || e instanceof l || e instanceof a || e instanceof _)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var t = this.get(e.name);
            if (t) {
              if (!(t instanceof _ && e instanceof _) || t instanceof s || t instanceof a) {
                throw Error("duplicate name '" + e.name + "' in " + this);
              }
              var i = t.nestedArray;
              for (var n = 0; n < i.length; ++n) {
                e.add(i[n]);
              }
              this.remove(t);
              if (!this.nested) {
                this.nested = {};
              }
              e.setOptions(t.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[e.name] = e;
          e.onAdd(this);
          return h(this);
        };
        _.prototype.remove = function (e) {
          if (!(e instanceof o)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (e.parent !== this) {
            throw Error(e + " is not a member of " + this);
          }
          delete this.nested[e.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          e.onRemove(this);
          return h(this);
        };
        _.prototype.define = function (e, t) {
          if (u.isString(e)) {
            e = e.split(".");
          } else if (!Array.isArray(e)) {
            throw TypeError("illegal path");
          }
          if (e && e.length && "" === e[0]) {
            throw Error("path must be relative");
          }
          for (var i = this; e.length > 0;) {
            var n = e.shift();
            if (i.nested && i.nested[n]) {
              if (!((i = i.nested[n]) instanceof _)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              i.add(i = new _(n));
            }
          }
          if (t) {
            i.addJSON(t);
          }
          return i;
        };
        _.prototype.resolveAll = function () {
          var e = this.nestedArray;
          for (var t = 0; t < e.length;) {
            if (e[t] instanceof _) {
              e[t++].resolveAll();
            } else {
              e[t++].resolve();
            }
          }
          return this.resolve();
        };
        _.prototype.lookup = function (e, t, i) {
          if ("boolean" == typeof t) {
            i = t;
            t = undefined;
          } else if (t && !Array.isArray(t)) {
            t = [t];
          }
          if (u.isString(e) && e.length) {
            if ("." === e) {
              return this.root;
            }
            e = e.split(".");
          } else if (!e.length) {
            return this;
          }
          if ("" === e[0]) {
            return this.root.lookup(e.slice(1), t);
          }
          var n = this.get(e[0]);
          if (n) {
            if (1 === e.length) {
              if (!t || t.indexOf(n.constructor) > -1) {
                return n;
              }
            } else if (n instanceof _ && (n = n.lookup(e.slice(1), t, true))) {
              return n;
            }
          } else {
            for (var r = 0; r < this.nestedArray.length; ++r) {
              if (this._nestedArray[r] instanceof _ && (n = this._nestedArray[r].lookup(e, t, true))) {
                return n;
              }
            }
          }
          return null === this.parent || i ? null : this.parent.lookup(e, t);
        };
        _.prototype.lookupType = function (e) {
          var t = this.lookup(e, [s]);
          if (!t) {
            throw Error("no such type: " + e);
          }
          return t;
        };
        _.prototype.lookupEnum = function (e) {
          var t = this.lookup(e, [l]);
          if (!t) {
            throw Error("no such Enum '" + e + "' in " + this);
          }
          return t;
        };
        _.prototype.lookupTypeOrEnum = function (e) {
          var t = this.lookup(e, [s, l]);
          if (!t) {
            throw Error("no such Type or Enum '" + e + "' in " + this);
          }
          return t;
        };
        _.prototype.lookupService = function (e) {
          var t = this.lookup(e, [a]);
          if (!t) {
            throw Error("no such Service '" + e + "' in " + this);
          }
          return t;
        };
        _._configure = function (e, t, i) {
          s = e;
          a = t;
          l = i;
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (e, t, i, n, r) {
        i.exports = l;
        var o = t("./field");
        ((l.prototype = Object.create(o.prototype)).constructor = l).className = "MapField";
        var s = t("./types");
        var a = t("./util");
        function l(e, t, i, n, r, s) {
          o.call(this, e, t, n, undefined, undefined, r, s);
          if (!a.isString(i)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = i;
          this.resolvedKeyType = null;
          this.map = true;
        }
        l.fromJSON = function (e, t) {
          return new l(e, t.id, t.keyType, t.type, t.options, t.comment);
        };
        l.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return a.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
        };
        l.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === s.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return o.prototype.resolve.call(this);
        };
        l.d = function (e, t, i) {
          if ("function" == typeof i) {
            i = a.decorateType(i).name;
          } else if (i && "object" == typeof i) {
            i = a.decorateEnum(i).name;
          }
          return function (n, r) {
            a.decorateType(n.constructor).add(new l(r, e, t, i));
          };
        };
        i.exports;
      }, function () {
        return {
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (e, t, i, n, r) {
        i.exports = a;
        var o = t("./object");
        ((a.prototype = Object.create(o.prototype)).constructor = a).className = "Method";
        var s = t("./util");
        function a(e, t, i, n, r, a, l, p, u) {
          if (s.isObject(r)) {
            l = r;
            r = a = undefined;
          } else if (s.isObject(a)) {
            l = a;
            a = undefined;
          }
          if (undefined !== t && !s.isString(t)) {
            throw TypeError("type must be a string");
          }
          if (!s.isString(i)) {
            throw TypeError("requestType must be a string");
          }
          if (!s.isString(n)) {
            throw TypeError("responseType must be a string");
          }
          o.call(this, e, l);
          this.type = t || "rpc";
          this.requestType = i;
          this.requestStream = !!r || undefined;
          this.responseType = n;
          this.responseStream = !!a || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = p;
          this.parsedOptions = u;
        }
        a.fromJSON = function (e, t) {
          return new a(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment, t.parsedOptions);
        };
        a.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return s.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        a.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), o.prototype.resolve.call(this));
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (e, t, i, n, r) {
        i.exports = p;
        var o = t("./namespace");
        ((p.prototype = Object.create(o.prototype)).constructor = p).className = "Service";
        var s = t("./method");
        var a = t("./util");
        var l = t("./rpc");
        function p(e, t) {
          o.call(this, e, t);
          this.methods = {};
          this._methodsArray = null;
        }
        function u(e) {
          e._methodsArray = null;
          return e;
        }
        p.fromJSON = function (e, t) {
          var i = new p(e, t.options);
          if (t.methods) {
            var n = Object.keys(t.methods);
            for (var r = 0; r < n.length; ++r) {
              i.add(s.fromJSON(n[r], t.methods[n[r]]));
            }
          }
          if (t.nested) {
            i.addJSON(t.nested);
          }
          i.comment = t.comment;
          return i;
        };
        p.prototype.toJSON = function (e) {
          var t = o.prototype.toJSON.call(this, e);
          var i = !!e && Boolean(e.keepComments);
          return a.toObject(["options", t && t.options || undefined, "methods", o.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", i ? this.comment : undefined]);
        };
        Object.defineProperty(p.prototype, "methodsArray", {
          get: function () {
            return this._methodsArray || (this._methodsArray = a.toArray(this.methods));
          }
        });
        p.prototype.get = function (e) {
          return this.methods[e] || o.prototype.get.call(this, e);
        };
        p.prototype.resolveAll = function () {
          var e = this.methodsArray;
          for (var t = 0; t < e.length; ++t) {
            e[t].resolve();
          }
          return o.prototype.resolve.call(this);
        };
        p.prototype.add = function (e) {
          if (this.get(e.name)) {
            throw Error("duplicate name '" + e.name + "' in " + this);
          }
          return e instanceof s ? (this.methods[e.name] = e, e.parent = this, u(this)) : o.prototype.add.call(this, e);
        };
        p.prototype.remove = function (e) {
          if (e instanceof s) {
            if (this.methods[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.methods[e.name];
            e.parent = null;
            return u(this);
          }
          return o.prototype.remove.call(this, e);
        };
        p.prototype.create = function (e, t, i) {
          var n;
          var r = new l.Service(e, t, i);
          for (var o = 0; o < this.methodsArray.length; ++o) {
            var s = a.lcFirst((n = this._methodsArray[o]).resolve().name).replace(/[^$\w_]/g, "");
            r[s] = a.codegen(["r", "c"], a.isReserved(s) ? s + "_" : s)("return this.rpcCall(m,q,s,r,c)")({
              m: n,
              q: n.resolvedRequestType.ctor,
              s: n.resolvedResponseType.ctor
            });
          }
          return r;
        };
        i.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./rpc": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (e, t, i, n, r) {
        i.exports = s;
        var o = t("./util/minimal");
        function s(e) {
          if (e) {
            var t = Object.keys(e);
            for (var i = 0; i < t.length; ++i) {
              this[t[i]] = e[t[i]];
            }
          }
        }
        s.create = function (e) {
          return this.$type.create(e);
        };
        s.encode = function (e, t) {
          return this.$type.encode(e, t);
        };
        s.encodeDelimited = function (e, t) {
          return this.$type.encodeDelimited(e, t);
        };
        s.decode = function (e) {
          return this.$type.decode(e);
        };
        s.decodeDelimited = function (e) {
          return this.$type.decodeDelimited(e);
        };
        s.verify = function (e) {
          return this.$type.verify(e);
        };
        s.fromObject = function (e) {
          return this.$type.fromObject(e);
        };
        s.toObject = function (e, t) {
          return this.$type.toObject(e, t);
        };
        s.prototype.toJSON = function () {
          return this.$type.toObject(this, o.toJSONOptions);
        };
        i.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (e, t, i, n, r) {
        i.exports = function (e) {
          var t = a.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function (e) {
            return e.map;
          }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
          if (e.group) {
            t("if((t&7)===4)")("break");
          }
          t("switch(t>>>3){");
          for (var i = 0; i < e.fieldsArray.length; ++i) {
            var n = e._fieldsArray[i].resolve();
            var r = n.resolvedType instanceof o ? "int32" : n.type;
            var p = "m" + a.safeProp(n.name);
            t("case %i: {", n.id);
            if (n.map) {
              t("if(%s===util.emptyObject)", p)("%s={}", p)("var c2 = r.uint32()+r.pos");
              if (undefined !== s.defaults[n.keyType]) {
                t("k=%j", s.defaults[n.keyType]);
              } else {
                t("k=null");
              }
              if (undefined !== s.defaults[r]) {
                t("value=%j", s.defaults[r]);
              } else {
                t("value=null");
              }
              t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", n.keyType)("case 2:");
              if (undefined === s.basic[r]) {
                t("value=types[%i].decode(r,r.uint32())", i);
              } else {
                t("value=r.%s()", r);
              }
              t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
              if (undefined !== s.long[n.keyType]) {
                t("%s[typeof k===\"object\"?util.longToHash(k):k]=value", p);
              } else {
                t("%s[k]=value", p);
              }
            } else if (n.repeated) {
              t("if(!(%s&&%s.length))", p, p)("%s=[]", p);
              if (undefined !== s.packed[r]) {
                t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", p, r)("}else");
              }
              if (undefined === s.basic[r]) {
                t(n.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", p, i);
              } else {
                t("%s.push(r.%s())", p, r);
              }
            } else if (undefined === s.basic[r]) {
              t(n.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", p, i);
            } else {
              t("%s=r.%s()", p, r);
            }
            t("break")("}");
          }
          t("default:")("r.skipType(t&7)")("break")("}")("}");
          for (i = 0; i < e._fieldsArray.length; ++i) {
            var u = e._fieldsArray[i];
            if (u.required) {
              t("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + u.name + "'");
            }
          }
          return t("return m");
        };
        var o = t("./enum");
        var s = t("./types");
        var a = t("./util");
        i.exports;
      }, function () {
        return {
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (e, t, i, n, r) {
        i.exports = function (e) {
          var t = s.codegen(["m"], e.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var i = e.oneofsArray;
          var n = {};
          if (i.length) {
            t("var p={}");
          }
          for (var r = 0; r < e.fieldsArray.length; ++r) {
            var o = e._fieldsArray[r].resolve();
            var u = "m" + s.safeProp(o.name);
            if (o.optional) {
              t("if(%s!=null&&m.hasOwnProperty(%j)){", u, o.name);
            }
            if (o.map) {
              t("if(!util.isObject(%s))", u)("return%j", o.name + ": " + "object" + (o.repeated && true ? "[]" : o.map && false ? "{k:" + o.keyType + "}" : "") + " expected")("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){");
              p(t, o, "k[i]");
              l(t, o, r, u + "[k[i]]")("}");
            } else if (o.repeated) {
              t("if(!Array.isArray(%s))", u)("return%j", o.name + ": " + "array" + (o.repeated && false ? "[]" : o.map && true ? "{k:" + o.keyType + "}" : "") + " expected")("for(var i=0;i<%s.length;++i){", u);
              l(t, o, r, u + "[i]")("}");
            } else {
              if (o.partOf) {
                var c = s.safeProp(o.partOf.name);
                if (1 === n[o.partOf.name]) {
                  t("if(p%s===1)", c)("return%j", o.partOf.name + ": multiple values");
                }
                n[o.partOf.name] = 1;
                t("p%s=1", c);
              }
              l(t, o, r, u);
            }
            if (o.optional) {
              t("}");
            }
          }
          return t("return null");
        };
        var o = t("./enum");
        var s = t("./util");
        function l(e, t, i, n) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof o) {
              e("switch(%s){", n)("default:")("return%j", t.name + ": " + "enum value" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              var r = Object.keys(t.resolvedType.values);
              for (var s = 0; s < r.length; ++s) {
                e("case %i:", t.resolvedType.values[r[s]]);
              }
              e("break")("}");
            } else {
              e("{")("var e=types[%i].verify(%s);", i, n)("if(e)")("return%j+e", t.name + ".")("}");
            }
          } else {
            switch (t.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                e("if(!util.isInteger(%s))", n)("return%j", t.name + ": " + "integer" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", n, n, n, n)("return%j", t.name + ": " + "integer|Long" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "float":
              case "double":
                e("if(typeof %s!==\"number\")", n)("return%j", t.name + ": " + "number" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "bool":
                e("if(typeof %s!==\"boolean\")", n)("return%j", t.name + ": " + "boolean" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "string":
                e("if(!util.isString(%s))", n)("return%j", t.name + ": " + "string" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "bytes":
                e("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", n, n, n)("return%j", t.name + ": " + "buffer" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
            }
          }
          return e;
        }
        function p(e, t, i) {
          switch (t.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              e("if(!util.key32Re.test(%s))", i)("return%j", t.name + ": " + "integer key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              e("if(!util.key64Re.test(%s))", i)("return%j", t.name + ": " + "integer|Long key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              break;
            case "bool":
              e("if(!util.key2Re.test(%s))", i)("return%j", t.name + ": " + "boolean key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
          }
          return e;
        }
        i.exports;
      }, function () {
        return {
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (e, t, i, n, r) {
        var s = t("./enum");
        var a = t("./util");
        function l(e, t, i, n) {
          var r = false;
          if (t.resolvedType) {
            if (t.resolvedType instanceof s) {
              e("switch(d%s){", n);
              var o = t.resolvedType.values;
              var a = Object.keys(o);
              for (var l = 0; l < a.length; ++l) {
                if (!(o[a[l]] !== t.typeDefault || r)) {
                  e("default:")("if(typeof(d%s)===\"number\"){m%s=d%s;break}", n, n, n);
                  if (!t.repeated) {
                    e("break");
                  }
                  r = true;
                }
                e("case%j:", a[l])("case %i:", o[a[l]])("m%s=%j", n, o[a[l]])("break");
              }
              e("}");
            } else {
              e("if(typeof d%s!==\"object\")", n)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, i, n);
            }
          } else {
            var p = false;
            switch (t.type) {
              case "double":
              case "float":
                e("m%s=Number(d%s)", n, n);
                break;
              case "uint32":
              case "fixed32":
                e("m%s=d%s>>>0", n, n);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                e("m%s=d%s|0", n, n);
                break;
              case "uint64":
                p = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, p)("else if(typeof d%s===\"string\")", n)("m%s=parseInt(d%s,10)", n, n)("else if(typeof d%s===\"number\")", n)("m%s=d%s", n, n)("else if(typeof d%s===\"object\")", n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, p ? "true" : "");
                break;
              case "bytes":
                e("if(typeof d%s===\"string\")", n)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n, n, n)("else if(d%s.length >= 0)", n)("m%s=d%s", n, n);
                break;
              case "string":
                e("m%s=String(d%s)", n, n);
                break;
              case "bool":
                e("m%s=Boolean(d%s)", n, n);
            }
          }
          return e;
        }
        function p(e, t, i, n) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof s) {
              e("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", n, i, n, n, i, n, n);
            } else {
              e("d%s=types[%i].toObject(m%s,o)", n, i, n);
            }
          } else {
            var r = false;
            switch (t.type) {
              case "double":
              case "float":
                e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
                break;
              case "uint64":
                r = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(typeof m%s===\"number\")", n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, r ? "true" : "", n);
                break;
              case "bytes":
                e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n, n, n, n, n);
                break;
              default:
                e("d%s=m%s", n, n);
            }
          }
          return e;
        }
        e.fromObject = function (e) {
          var t = e.fieldsArray;
          var i = a.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!t.length) {
            return i("return new this.ctor");
          }
          i("var m=new this.ctor");
          for (var n = 0; n < t.length; ++n) {
            var r = t[n].resolve();
            var o = a.safeProp(r.name);
            if (r.map) {
              i("if(d%s){", o)("if(typeof d%s!==\"object\")", o)("throw TypeError(%j)", r.fullName + ": object expected")("m%s={}", o)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", o);
              l(i, r, n, o + "[ks[i]]")("}")("}");
            } else if (r.repeated) {
              i("if(d%s){", o)("if(!Array.isArray(d%s))", o)("throw TypeError(%j)", r.fullName + ": array expected")("m%s=[]", o)("for(var i=0;i<d%s.length;++i){", o);
              l(i, r, n, o + "[i]")("}")("}");
            } else {
              if (!(r.resolvedType instanceof s)) {
                i("if(d%s!=null){", o);
              }
              l(i, r, n, o);
              if (!(r.resolvedType instanceof s)) {
                i("}");
              }
            }
          }
          return i("return m");
        };
        e.toObject = function (e) {
          var t = e.fieldsArray.slice().sort(a.compareFieldsById);
          if (!t.length) {
            return a.codegen()("return {}");
          }
          var i = a.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var n = [];
          var r = [];
          var o = [];
          for (var l = 0; l < t.length; ++l) {
            if (!t[l].partOf) {
              (t[l].resolve().repeated ? n : t[l].map ? r : o).push(t[l]);
            }
          }
          if (n.length) {
            i("if(o.arrays||o.defaults){");
            for (l = 0; l < n.length; ++l) {
              i("d%s=[]", a.safeProp(n[l].name));
            }
            i("}");
          }
          if (r.length) {
            i("if(o.objects||o.defaults){");
            for (l = 0; l < r.length; ++l) {
              i("d%s={}", a.safeProp(r[l].name));
            }
            i("}");
          }
          if (o.length) {
            i("if(o.defaults){");
            for (l = 0; l < o.length; ++l) {
              var u = o[l];
              var c = a.safeProp(u.name);
              if (u.resolvedType instanceof s) {
                i("d%s=o.enums===String?%j:%j", c, u.resolvedType.valuesById[u.typeDefault], u.typeDefault);
              } else if (u.long) {
                i("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", c)("}else")("d%s=o.longs===String?%j:%i", c, u.typeDefault.toString(), u.typeDefault.toNumber());
              } else if (u.bytes) {
                var m = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
                i("if(o.bytes===String)d%s=%j", c, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", c, m)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", c, c)("}");
              } else {
                i("d%s=%j", c, u.typeDefault);
              }
            }
            i("}");
          }
          var _ = false;
          for (l = 0; l < t.length; ++l) {
            u = t[l];
            var h = e._fieldsArray.indexOf(u);
            c = a.safeProp(u.name);
            if (u.map) {
              if (!_) {
                _ = true;
                i("var ks2");
              }
              i("if(m%s&&(ks2=Object.keys(m%s)).length){", c, c)("d%s={}", c)("for(var j=0;j<ks2.length;++j){");
              p(i, u, h, c + "[ks2[j]]")("}");
            } else if (u.repeated) {
              i("if(m%s&&m%s.length){", c, c)("d%s=[]", c)("for(var j=0;j<m%s.length;++j){", c);
              p(i, u, h, c + "[j]")("}");
            } else {
              i("if(m%s!=null&&m.hasOwnProperty(%j)){", c, u.name);
              p(i, u, h, c);
              if (u.partOf) {
                i("if(o.oneofs)")("d%s=%j", a.safeProp(u.partOf.name), u.name);
              }
            }
            i("}");
          }
          return i("return d");
        };
        i.exports;
      }, function () {
        return {
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (e, t, i, n, r) {
        var s = t("./message");
        e[".google.protobuf.Any"] = {
          fromObject: function (e) {
            if (e && e["@type"]) {
              var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1);
              var i = this.lookup(t);
              if (i) {
                var n = "." === e["@type"].charAt(0) ? e["@type"].slice(1) : e["@type"];
                if (-1 === n.indexOf("/")) {
                  n = "/" + n;
                }
                return this.create({
                  type_url: n,
                  value: i.encode(i.fromObject(e)).finish()
                });
              }
            }
            return this.fromObject(e);
          },
          toObject: function (e, t) {
            var i = "";
            var n = "";
            if (t && t.json && e.type_url && e.value) {
              n = e.type_url.substring(e.type_url.lastIndexOf("/") + 1);
              i = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
              var r = this.lookup(n);
              if (r) {
                e = r.decode(e.value);
              }
            }
            if (!(e instanceof this.ctor) && e instanceof s) {
              var o = e.$type.toObject(e, t);
              if ("" === i) {
                i = "type.googleapis.com/";
              }
              n = i + ("." === e.$type.fullName[0] ? e.$type.fullName.slice(1) : e.$type.fullName);
              o["@type"] = n;
              return o;
            }
            return this.toObject(e, t);
          }
        };
        i.exports;
      }, function () {
        return {
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (e, t, i, n, r) {
        i.exports = b;
        var o = t("./namespace");
        ((b.prototype = Object.create(o.prototype)).constructor = b).className = "Type";
        var s = t("./enum");
        var a = t("./oneof");
        var l = t("./field");
        var p = t("./mapfield");
        var u = t("./service");
        var c = t("./message");
        var m = t("./reader");
        var _ = t("./writer");
        var h = t("./util");
        var f = t("./encoder");
        var d = t("./decoder");
        var y = t("./verifier");
        var S = t("./converter");
        var g = t("./wrappers");
        function b(e, t) {
          o.call(this, e, t);
          this.fields = {};
          this.oneofs = undefined;
          this.extensions = undefined;
          this.reserved = undefined;
          this.group = undefined;
          this._fieldsById = null;
          this._fieldsArray = null;
          this._oneofsArray = null;
          this._ctor = null;
        }
        function v(e) {
          e._fieldsById = e._fieldsArray = e._oneofsArray = null;
          delete e.encode;
          delete e.decode;
          delete e.verify;
          return e;
        }
        Object.defineProperties(b.prototype, {
          fieldsById: {
            get: function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var e = Object.keys(this.fields);
              for (var t = 0; t < e.length; ++t) {
                var i = this.fields[e[t]];
                var n = i.id;
                if (this._fieldsById[n]) {
                  throw Error("duplicate id " + n + " in " + this);
                }
                this._fieldsById[n] = i;
              }
              return this._fieldsById;
            }
          },
          fieldsArray: {
            get: function () {
              return this._fieldsArray || (this._fieldsArray = h.toArray(this.fields));
            }
          },
          oneofsArray: {
            get: function () {
              return this._oneofsArray || (this._oneofsArray = h.toArray(this.oneofs));
            }
          },
          ctor: {
            get: function () {
              return this._ctor || (this.ctor = b.generateConstructor(this)());
            },
            set: function (e) {
              var t = e.prototype;
              if (!(t instanceof c)) {
                (e.prototype = new c()).constructor = e;
                h.merge(e.prototype, t);
              }
              e.$type = e.prototype.$type = this;
              h.merge(e, c, true);
              this._ctor = e;
              for (var i = 0; i < this.fieldsArray.length; ++i) {
                this._fieldsArray[i].resolve();
              }
              var n = {};
              for (i = 0; i < this.oneofsArray.length; ++i) {
                n[this._oneofsArray[i].resolve().name] = {
                  get: h.oneOfGetter(this._oneofsArray[i].oneof),
                  set: h.oneOfSetter(this._oneofsArray[i].oneof)
                };
              }
              if (i) {
                Object.defineProperties(e.prototype, n);
              }
            }
          }
        });
        b.generateConstructor = function (e) {
          var t;
          var i = h.codegen(["p"], e.name);
          for (var n = 0; n < e.fieldsArray.length; ++n) {
            if ((t = e._fieldsArray[n]).map) {
              i("this%s={}", h.safeProp(t.name));
            } else if (t.repeated) {
              i("this%s=[]", h.safeProp(t.name));
            }
          }
          return i("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        b.fromJSON = function (e, t) {
          var i = new b(e, t.options);
          i.extensions = t.extensions;
          i.reserved = t.reserved;
          var n = Object.keys(t.fields);
          for (var r = 0; r < n.length; ++r) {
            i.add((undefined !== t.fields[n[r]].keyType ? p.fromJSON : l.fromJSON)(n[r], t.fields[n[r]]));
          }
          if (t.oneofs) {
            n = Object.keys(t.oneofs);
            for (r = 0; r < n.length; ++r) {
              i.add(a.fromJSON(n[r], t.oneofs[n[r]]));
            }
          }
          if (t.nested) {
            n = Object.keys(t.nested);
            for (r = 0; r < n.length; ++r) {
              var c = t.nested[n[r]];
              i.add((undefined !== c.id ? l.fromJSON : undefined !== c.fields ? b.fromJSON : undefined !== c.values ? s.fromJSON : undefined !== c.methods ? u.fromJSON : o.fromJSON)(n[r], c));
            }
          }
          if (t.extensions && t.extensions.length) {
            i.extensions = t.extensions;
          }
          if (t.reserved && t.reserved.length) {
            i.reserved = t.reserved;
          }
          if (t.group) {
            i.group = true;
          }
          if (t.comment) {
            i.comment = t.comment;
          }
          return i;
        };
        b.prototype.toJSON = function (e) {
          var t = o.prototype.toJSON.call(this, e);
          var i = !!e && Boolean(e.keepComments);
          return h.toObject(["options", t && t.options || undefined, "oneofs", o.arrayToJSON(this.oneofsArray, e), "fields", o.arrayToJSON(this.fieldsArray.filter(function (e) {
            return !e.declaringField;
          }), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", i ? this.comment : undefined]);
        };
        b.prototype.resolveAll = function () {
          var e = this.fieldsArray;
          for (var t = 0; t < e.length;) {
            e[t++].resolve();
          }
          var i = this.oneofsArray;
          for (t = 0; t < i.length;) {
            i[t++].resolve();
          }
          return o.prototype.resolveAll.call(this);
        };
        b.prototype.get = function (e) {
          return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null;
        };
        b.prototype.add = function (e) {
          if (this.get(e.name)) {
            throw Error("duplicate name '" + e.name + "' in " + this);
          }
          if (e instanceof l && undefined === e.extend) {
            if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) {
              throw Error("duplicate id " + e.id + " in " + this);
            }
            if (this.isReservedId(e.id)) {
              throw Error("id " + e.id + " is reserved in " + this);
            }
            if (this.isReservedName(e.name)) {
              throw Error("name '" + e.name + "' is reserved in " + this);
            }
            if (e.parent) {
              e.parent.remove(e);
            }
            this.fields[e.name] = e;
            e.message = this;
            e.onAdd(this);
            return v(this);
          }
          return e instanceof a ? (this.oneofs || (this.oneofs = {}), this.oneofs[e.name] = e, e.onAdd(this), v(this)) : o.prototype.add.call(this, e);
        };
        b.prototype.remove = function (e) {
          if (e instanceof l && undefined === e.extend) {
            if (!this.fields || this.fields[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.fields[e.name];
            e.parent = null;
            e.onRemove(this);
            return v(this);
          }
          if (e instanceof a) {
            if (!this.oneofs || this.oneofs[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.oneofs[e.name];
            e.parent = null;
            e.onRemove(this);
            return v(this);
          }
          return o.prototype.remove.call(this, e);
        };
        b.prototype.isReservedId = function (e) {
          return o.isReservedId(this.reserved, e);
        };
        b.prototype.isReservedName = function (e) {
          return o.isReservedName(this.reserved, e);
        };
        b.prototype.create = function (e) {
          return new this.ctor(e);
        };
        b.prototype.setup = function () {
          var e = this.fullName;
          var t = [];
          for (var i = 0; i < this.fieldsArray.length; ++i) {
            t.push(this._fieldsArray[i].resolve().resolvedType);
          }
          this.encode = f(this)({
            Writer: _,
            types: t,
            util: h
          });
          this.decode = d(this)({
            Reader: m,
            types: t,
            util: h
          });
          this.verify = y(this)({
            types: t,
            util: h
          });
          this.fromObject = S.fromObject(this)({
            types: t,
            util: h
          });
          this.toObject = S.toObject(this)({
            types: t,
            util: h
          });
          var n = g[e];
          if (n) {
            var r = Object.create(this);
            r.fromObject = this.fromObject;
            this.fromObject = n.fromObject.bind(r);
            r.toObject = this.toObject;
            this.toObject = n.toObject.bind(r);
          }
          return this;
        };
        b.prototype.encode = function (e, t) {
          return this.setup().encode(e, t);
        };
        b.prototype.encodeDelimited = function (e, t) {
          return this.encode(e, t && t.len ? t.fork() : t).ldelim();
        };
        b.prototype.decode = function (e, t) {
          return this.setup().decode(e, t);
        };
        b.prototype.decodeDelimited = function (e) {
          if (!(e instanceof m)) {
            e = m.create(e);
          }
          return this.decode(e, e.uint32());
        };
        b.prototype.verify = function (e) {
          return this.setup().verify(e);
        };
        b.prototype.fromObject = function (e) {
          return this.setup().fromObject(e);
        };
        b.prototype.toObject = function (e, t) {
          return this.setup().toObject(e, t);
        };
        b.d = function (e) {
          return function (t) {
            h.decorateType(t, e);
          };
        };
        i.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./encoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./wrappers": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (e, t, i, n, r) {
        i.exports = _;
        var o = t("./namespace");
        ((_.prototype = Object.create(o.prototype)).constructor = _).className = "Root";
        var s;
        var a;
        var l;
        var p = t("./field");
        var u = t("./enum");
        var c = t("./oneof");
        var m = t("./util");
        function _(e) {
          o.call(this, "", e);
          this.deferred = [];
          this.files = [];
        }
        function h() {}
        _.fromJSON = function (e, t) {
          if (!t) {
            t = new _();
          }
          if (e.options) {
            t.setOptions(e.options);
          }
          return t.addJSON(e.nested);
        };
        _.prototype.resolvePath = m.path.resolve;
        _.prototype.fetch = m.fetch;
        _.prototype.load = function e(t, i, n) {
          if ("function" == typeof i) {
            n = i;
            i = undefined;
          }
          var r = this;
          if (!n) {
            return m.asPromise(e, r, t, i);
          }
          var o = n === h;
          function s(e, t) {
            if (n) {
              if (o) {
                throw e;
              }
              var i = n;
              n = null;
              i(e, t);
            }
          }
          function p(e) {
            var t = e.lastIndexOf("google/protobuf/");
            if (t > -1) {
              var i = e.substring(t);
              if (i in l) {
                return i;
              }
            }
            return null;
          }
          function u(e, t) {
            try {
              if (m.isString(t) && "{" === t.charAt(0)) {
                t = JSON.parse(t);
              }
              if (m.isString(t)) {
                a.filename = e;
                var n;
                var l = a(t, r, i);
                var u = 0;
                if (l.imports) {
                  for (; u < l.imports.length; ++u) {
                    if (n = p(l.imports[u]) || r.resolvePath(e, l.imports[u])) {
                      c(n);
                    }
                  }
                }
                if (l.weakImports) {
                  for (u = 0; u < l.weakImports.length; ++u) {
                    if (n = p(l.weakImports[u]) || r.resolvePath(e, l.weakImports[u])) {
                      c(n, true);
                    }
                  }
                }
              } else {
                r.setOptions(t.options).addJSON(t.nested);
              }
            } catch (e) {
              s(e);
            }
            if (!(o || _)) {
              s(null, r);
            }
          }
          function c(e, t) {
            e = p(e) || e;
            if (!(r.files.indexOf(e) > -1)) {
              r.files.push(e);
              if (e in l) {
                if (o) {
                  u(e, l[e]);
                } else {
                  ++_;
                  setTimeout(function () {
                    --_;
                    u(e, l[e]);
                  });
                }
              } else if (o) {
                var i;
                try {
                  i = m.fs.readFileSync(e).toString("utf8");
                } catch (e) {
                  return void (t || s(e));
                }
                u(e, i);
              } else {
                ++_;
                r.fetch(e, function (i, o) {
                  --_;
                  if (n) {
                    if (i) {
                      if (t) {
                        if (!_) {
                          s(null, r);
                        }
                      } else {
                        s(i);
                      }
                    } else {
                      u(e, o);
                    }
                  }
                });
              }
            }
          }
          var _ = 0;
          if (m.isString(t)) {
            t = [t];
          }
          var f;
          for (var d = 0; d < t.length; ++d) {
            if (f = r.resolvePath("", t[d])) {
              c(f);
            }
          }
          if (o) {
            return r;
          }
          if (!_) {
            s(null, r);
          }
        };
        _.prototype.loadSync = function (e, t) {
          if (!m.isNode) {
            throw Error("not supported");
          }
          return this.load(e, t, h);
        };
        _.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (e) {
              return "'extend " + e.extend + "' in " + e.parent.fullName;
            }).join(", "));
          }
          return o.prototype.resolveAll.call(this);
        };
        var f = /^[A-Z]/;
        function d(e, t) {
          var i = t.parent.lookup(t.extend);
          if (i) {
            var n = new p(t.fullName, t.id, t.type, t.rule, undefined, t.options);
            if (!i.get(n.name)) {
              n.declaringField = t;
              t.extensionField = n;
              i.add(n);
            }
            return true;
          }
          return false;
        }
        _.prototype._handleAdd = function (e) {
          if (e instanceof p) {
            if (!(undefined === e.extend || e.extensionField || d(0, e))) {
              this.deferred.push(e);
            }
          } else if (e instanceof u) {
            if (f.test(e.name)) {
              e.parent[e.name] = e.values;
            }
          } else if (!(e instanceof c)) {
            if (e instanceof s) {
              for (var t = 0; t < this.deferred.length;) {
                if (d(0, this.deferred[t])) {
                  this.deferred.splice(t, 1);
                } else {
                  ++t;
                }
              }
            }
            for (var i = 0; i < e.nestedArray.length; ++i) {
              this._handleAdd(e._nestedArray[i]);
            }
            if (f.test(e.name)) {
              e.parent[e.name] = e;
            }
          }
        };
        _.prototype._handleRemove = function (e) {
          if (e instanceof p) {
            if (undefined !== e.extend) {
              if (e.extensionField) {
                e.extensionField.parent.remove(e.extensionField);
                e.extensionField = null;
              } else {
                var t = this.deferred.indexOf(e);
                if (t > -1) {
                  this.deferred.splice(t, 1);
                }
              }
            }
          } else if (e instanceof u) {
            if (f.test(e.name)) {
              delete e.parent[e.name];
            }
          } else if (e instanceof o) {
            for (var i = 0; i < e.nestedArray.length; ++i) {
              this._handleRemove(e._nestedArray[i]);
            }
            if (f.test(e.name)) {
              delete e.parent[e.name];
            }
          }
        };
        _._configure = function (e, t, i) {
          s = e;
          a = t;
          l = i;
        };
        i.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (e, t, i, n, r) {
        var o;
        var s;
        var a = i.exports = t("./util/minimal");
        var l = t("./roots");
        a.codegen = t("@protobufjs/codegen");
        a.fetch = t("@protobufjs/fetch");
        a.path = t("@protobufjs/path");
        a.fs = a.inquire("fs");
        a.toArray = function (e) {
          if (e) {
            var t = Object.keys(e);
            var i = new Array(t.length);
            for (var n = 0; n < t.length;) {
              i[n] = e[t[n++]];
            }
            return i;
          }
          return [];
        };
        a.toObject = function (e) {
          var t = {};
          for (var i = 0; i < e.length;) {
            var n = e[i++];
            var r = e[i++];
            if (undefined !== r) {
              t[n] = r;
            }
          }
          return t;
        };
        var p = /\\/g;
        var u = /"/g;
        a.isReserved = function (e) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e);
        };
        a.safeProp = function (e) {
          return !/^[$\w_]+$/.test(e) || a.isReserved(e) ? "[\"" + e.replace(p, "\\\\").replace(u, "\\\"") + "\"]" : "." + e;
        };
        a.ucFirst = function (e) {
          return e.charAt(0).toUpperCase() + e.substring(1);
        };
        var c = /_([a-z])/g;
        a.camelCase = function (e) {
          return e.substring(0, 1) + e.substring(1).replace(c, function (e, t) {
            return t.toUpperCase();
          });
        };
        a.compareFieldsById = function (e, t) {
          return e.id - t.id;
        };
        a.decorateType = function (e, i) {
          if (e.$type) {
            if (i && e.$type.name !== i) {
              a.decorateRoot.remove(e.$type);
              e.$type.name = i;
              a.decorateRoot.add(e.$type);
            }
            return e.$type;
          }
          if (!o) {
            o = t("./type");
          }
          var n = new o(i || e.name);
          a.decorateRoot.add(n);
          n.ctor = e;
          Object.defineProperty(e, "$type", {
            value: n,
            enumerable: false
          });
          Object.defineProperty(e.prototype, "$type", {
            value: n,
            enumerable: false
          });
          return n;
        };
        var m = 0;
        a.decorateEnum = function (e) {
          if (e.$type) {
            return e.$type;
          }
          if (!s) {
            s = t("./enum");
          }
          var i = new s("Enum" + m++, e);
          a.decorateRoot.add(i);
          Object.defineProperty(e, "$type", {
            value: i,
            enumerable: false
          });
          return i;
        };
        a.setProperty = function (e, t, i) {
          if ("object" != typeof e) {
            throw TypeError("dst must be an object");
          }
          if (!t) {
            throw TypeError("path must be specified");
          }
          return function e(t, i, n) {
            var r = i.shift();
            if ("__proto__" === r || "prototype" === r) {
              return t;
            }
            if (i.length > 0) {
              t[r] = e(t[r] || {}, i, n);
            } else {
              var o = t[r];
              if (o) {
                n = [].concat(o).concat(n);
              }
              t[r] = n;
            }
            return t;
          }(e, t = t.split("."), i);
        };
        Object.defineProperty(a, "decorateRoot", {
          get: function () {
            return l.decorated || (l.decorated = new (t("./root"))());
          }
        });
        i.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./roots": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          "@protobufjs/codegen": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          "@protobufjs/fetch": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          "@protobufjs/path": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (e, t, i, n, r) {
        i.exports = a;
        a.className = "ReflectionObject";
        var o;
        var s = t("./util");
        function a(e, t) {
          if (!s.isString(e)) {
            throw TypeError("name must be a string");
          }
          if (t && !s.isObject(t)) {
            throw TypeError("options must be an object");
          }
          this.options = t;
          this.parsedOptions = null;
          this.name = e;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(a.prototype, {
          root: {
            get: function () {
              for (var e = this; null !== e.parent;) {
                e = e.parent;
              }
              return e;
            }
          },
          fullName: {
            get: function () {
              var e = [this.name];
              for (var t = this.parent; t;) {
                e.unshift(t.name);
                t = t.parent;
              }
              return e.join(".");
            }
          }
        });
        a.prototype.toJSON = function () {
          throw Error();
        };
        a.prototype.onAdd = function (e) {
          if (this.parent && this.parent !== e) {
            this.parent.remove(this);
          }
          this.parent = e;
          this.resolved = false;
          var t = e.root;
          if (t instanceof o) {
            t._handleAdd(this);
          }
        };
        a.prototype.onRemove = function (e) {
          var t = e.root;
          if (t instanceof o) {
            t._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        a.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof o) {
              this.resolved = true;
            }
          }
          return this;
        };
        a.prototype.getOption = function (e) {
          if (this.options) {
            return this.options[e];
          }
        };
        a.prototype.setOption = function (e, t, i) {
          if (!(i && this.options && undefined !== this.options[e])) {
            (this.options || (this.options = {}))[e] = t;
          }
          return this;
        };
        a.prototype.setParsedOption = function (e, t, i) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var n = this.parsedOptions;
          if (i) {
            var r = n.find(function (t) {
              return Object.prototype.hasOwnProperty.call(t, e);
            });
            if (r) {
              var o = r[e];
              s.setProperty(o, i, t);
            } else {
              (r = {})[e] = s.setProperty({}, i, t);
              n.push(r);
            }
          } else {
            var a = {
              e: t
            };
            n.push(a);
          }
          return this;
        };
        a.prototype.setOptions = function (e, t) {
          if (e) {
            var i = Object.keys(e);
            for (var n = 0; n < i.length; ++n) {
              this.setOption(i[n], e[i[n]], t);
            }
          }
          return this;
        };
        a.prototype.toString = function () {
          var e = this.constructor.className;
          var t = this.fullName;
          return t.length ? e + " " + t : e;
        };
        a._configure = function (e) {
          o = e;
        };
        i.exports;
      }, function () {
        return {
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (e, t, i, n, r) {
        i.exports = l;
        var o = t("./object");
        ((l.prototype = Object.create(o.prototype)).constructor = l).className = "Enum";
        var s = t("./namespace");
        var a = t("./util");
        function l(e, t, i, n, r, s) {
          o.call(this, e, i);
          if (t && "object" != typeof t) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = n;
          this.comments = r || {};
          this.valuesOptions = s;
          this.reserved = undefined;
          if (t) {
            var a = Object.keys(t);
            for (var l = 0; l < a.length; ++l) {
              if ("number" == typeof t[a[l]]) {
                this.valuesById[this.values[a[l]] = t[a[l]]] = a[l];
              }
            }
          }
        }
        l.fromJSON = function (e, t) {
          var i = new l(e, t.values, t.options, t.comment, t.comments);
          i.reserved = t.reserved;
          return i;
        };
        l.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return a.toObject(["options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined]);
        };
        l.prototype.add = function (e, t, i, n) {
          if (!a.isString(e)) {
            throw TypeError("name must be a string");
          }
          if (!a.isInteger(t)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[e]) {
            throw Error("duplicate name '" + e + "' in " + this);
          }
          if (this.isReservedId(t)) {
            throw Error("id " + t + " is reserved in " + this);
          }
          if (this.isReservedName(e)) {
            throw Error("name '" + e + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[t]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + t + " in " + this);
            }
            this.values[e] = t;
          } else {
            this.valuesById[this.values[e] = t] = e;
          }
          if (n) {
            if (undefined === this.valuesOptions) {
              this.valuesOptions = {};
            }
            this.valuesOptions[e] = n || null;
          }
          this.comments[e] = i || null;
          return this;
        };
        l.prototype.remove = function (e) {
          if (!a.isString(e)) {
            throw TypeError("name must be a string");
          }
          var t = this.values[e];
          if (null == t) {
            throw Error("name '" + e + "' does not exist in " + this);
          }
          delete this.valuesById[t];
          delete this.values[e];
          delete this.comments[e];
          if (this.valuesOptions) {
            delete this.valuesOptions[e];
          }
          return this;
        };
        l.prototype.isReservedId = function (e) {
          return s.isReservedId(this.reserved, e);
        };
        l.prototype.isReservedName = function (e) {
          return s.isReservedName(this.reserved, e);
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (e, t, i, n, r) {
        i.exports = function (e) {
          var t;
          var i = a.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()");
          var n = e.fieldsArray.slice().sort(a.compareFieldsById);
          for (var r = 0; r < n.length; ++r) {
            var p = n[r].resolve();
            var u = e._fieldsArray.indexOf(p);
            var c = p.resolvedType instanceof o ? "int32" : p.type;
            var m = s.basic[c];
            t = "m" + a.safeProp(p.name);
            if (p.map) {
              i("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, p.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (p.id << 3 | 2) >>> 0, 8 | s.mapKey[p.keyType], p.keyType);
              if (undefined === m) {
                i("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, t);
              } else {
                i(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | m, c, t);
              }
              i("}")("}");
            } else if (p.repeated) {
              i("if(%s!=null&&%s.length){", t, t);
              if (p.packed && undefined !== s.packed[c]) {
                i("w.uint32(%i).fork()", (p.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", c, t)("w.ldelim()");
              } else {
                i("for(var i=0;i<%s.length;++i)", t);
                if (undefined === m) {
                  if (p.resolvedType.group) {
                    i("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t + "[i]", (p.id << 3 | 3) >>> 0, (p.id << 3 | 4) >>> 0);
                  } else {
                    i("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t + "[i]", (p.id << 3 | 2) >>> 0);
                  }
                } else {
                  i("w.uint32(%i).%s(%s[i])", (p.id << 3 | m) >>> 0, c, t);
                }
              }
              i("}");
            } else {
              if (p.optional) {
                i("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, p.name);
              }
              if (undefined === m) {
                if (p.resolvedType.group) {
                  i("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t, (p.id << 3 | 3) >>> 0, (p.id << 3 | 4) >>> 0);
                } else {
                  i("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t, (p.id << 3 | 2) >>> 0);
                }
              } else {
                i("w.uint32(%i).%s(%s)", (p.id << 3 | m) >>> 0, c, t);
              }
            }
          }
          return i("return w");
        };
        var o = t("./enum");
        var s = t("./types");
        var a = t("./util");
        i.exports;
      }, function () {
        return {
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (e, t, i, n, r) {
        var o = i.exports = t("./index-minimal");
        o.build = "light";
        o.load = function (e, t, i) {
          if ("function" == typeof t) {
            i = t;
            t = new o.Root();
          } else if (!t) {
            t = new o.Root();
          }
          return t.load(e, i);
        };
        o.loadSync = function (e, t) {
          if (!t) {
            t = new o.Root();
          }
          return t.loadSync(e);
        };
        o.encoder = t("./encoder");
        o.decoder = t("./decoder");
        o.verifier = t("./verifier");
        o.converter = t("./converter");
        o.ReflectionObject = t("./object");
        o.Namespace = t("./namespace");
        o.Root = t("./root");
        o.Enum = t("./enum");
        o.Type = t("./type");
        o.Field = t("./field");
        o.OneOf = t("./oneof");
        o.MapField = t("./mapfield");
        o.Service = t("./service");
        o.Method = t("./method");
        o.Message = t("./message");
        o.wrappers = t("./wrappers");
        o.types = t("./types");
        o.util = t("./util");
        o.ReflectionObject._configure(o.Root);
        o.Namespace._configure(o.Type, o.Service, o.Enum);
        o.Root._configure(o.Type);
        o.Field._configure(o.Type);
        i.exports;
      }, function () {
        return {
          "./index-minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          "./encoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./wrappers": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (e, t, i, n, r) {
        i.exports = f;
        var o = /[\s{}=;:[\],'"()<>]/g;
        var s = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var a = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var l = /^ *[*/]+ */;
        var p = /^\s*\*?\/*/;
        var u = /\n/g;
        var c = /\s/;
        var m = /\\(.?)/g;
        var _ = {
          0: "\0",
          r: "\r",
          n: "\n",
          t: "\t"
        };
        function h(e) {
          return e.replace(m, function (e, t) {
            switch (t) {
              case "\\":
              case "":
                return t;
              default:
                return _[t] || "";
            }
          });
        }
        function f(e, t) {
          e = e.toString();
          var i = 0;
          var n = e.length;
          var r = 1;
          var m = 0;
          var _ = {};
          var f = [];
          var d = null;
          function g(i, n, o) {
            var s;
            var a = {
              type: e.charAt(i++),
              lineEmpty: false,
              leading: o
            };
            var c = i - (t ? 2 : 3);
            do {
              if (--c < 0 || "\n" === (s = e.charAt(c))) {
                a.lineEmpty = true;
                break;
              }
            } while (" " === s || "\t" === s);
            var h = e.substring(i, n).split(u);
            for (var f = 0; f < h.length; ++f) {
              h[f] = h[f].replace(t ? p : l, "").trim();
            }
            a.text = h.join("\n").trim();
            _[r] = a;
            m = r;
          }
          function b(t) {
            var i = v(t);
            var n = e.substring(t, i);
            return /^\s*\/\//.test(n);
          }
          function v(e) {
            for (var t = e; t < n && "\n" !== e.charAt(t);) {
              t++;
            }
            return t;
          }
          function w() {
            if (f.length > 0) {
              return f.shift();
            }
            if (d) {
              return function () {
                var t = "'" === d ? a : s;
                t.lastIndex = i - 1;
                var n = t.exec(e);
                if (!n) {
                  throw Error("illegal string (line " + r + ")");
                }
                i = t.lastIndex;
                R(d);
                d = null;
                return h(n[1]);
              }();
            }
            var l;
            var p;
            var u;
            var m;
            var _;
            var w = 0 === i;
            do {
              if (i === n) {
                return null;
              }
              for (l = false; c.test(u = e.charAt(i));) {
                if ("\n" === u) {
                  w = true;
                  ++r;
                }
                if (++i === n) {
                  return null;
                }
              }
              if ("/" === e.charAt(i)) {
                if (++i === n) {
                  throw Error("illegal comment (line " + r + ")");
                }
                if ("/" === e.charAt(i)) {
                  if (t) {
                    m = i;
                    _ = false;
                    if (b(i - 1)) {
                      _ = true;
                      do {
                        if ((i = v(i)) === n) {
                          break;
                        }
                        i++;
                        if (!w) {
                          break;
                        }
                      } while (b(i));
                    } else {
                      i = Math.min(n, v(i) + 1);
                    }
                    if (_) {
                      g(m, i, w);
                      w = true;
                    }
                    r++;
                    l = true;
                  } else {
                    for (_ = "/" === e.charAt(m = i + 1); "\n" !== e.charAt(++i);) {
                      if (i === n) {
                        return null;
                      }
                    }
                    ++i;
                    if (_) {
                      g(m, i - 1, w);
                      w = true;
                    }
                    ++r;
                    l = true;
                  }
                } else {
                  if ("*" !== (u = e.charAt(i))) {
                    return "/";
                  }
                  m = i + 1;
                  _ = t || "*" === e.charAt(m);
                  do {
                    if ("\n" === u) {
                      ++r;
                    }
                    if (++i === n) {
                      throw Error("illegal comment (line " + r + ")");
                    }
                    p = u;
                    u = e.charAt(i);
                  } while ("*" !== p || "/" !== u);
                  ++i;
                  if (_) {
                    g(m, i - 2, w);
                    w = true;
                  }
                  l = true;
                }
              }
            } while (l);
            var $ = i;
            o.lastIndex = 0;
            if (!o.test(e.charAt($++))) {
              for (; $ < n && !o.test(e.charAt($));) {
                ++$;
              }
            }
            var T = e.substring(i, i = $);
            if (!("\"" !== T && "'" !== T)) {
              d = T;
            }
            return T;
          }
          function R(e) {
            f.push(e);
          }
          function $() {
            if (!f.length) {
              var e = w();
              if (null === e) {
                return null;
              }
              R(e);
            }
            return f[0];
          }
          return Object.defineProperty({
            next: w,
            peek: $,
            push: R,
            skip: function (e, t) {
              var i = $();
              if (i === e) {
                w();
                return true;
              }
              if (!t) {
                throw Error("illegal " + ("token '" + i + "', '" + e + "' expected") + " (line " + r + ")");
              }
              return false;
            },
            cmnt: function (e) {
              var i;
              var n = null;
              if (undefined === e) {
                i = _[r - 1];
                delete _[r - 1];
                if (i && (t || "*" === i.type || i.lineEmpty)) {
                  n = i.leading ? i.text : null;
                }
              } else {
                if (m < e) {
                  $();
                }
                i = _[e];
                delete _[e];
                if (!(!i || i.lineEmpty || !t && "/" !== i.type)) {
                  n = i.leading ? null : i.text;
                }
              }
              return n;
            }
          }, "line", {
            get: function () {
              return r;
            }
          });
        }
        f.unescape = h;
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (e, t, i, n, r) {
        i.exports = O;
        O.filename = null;
        O.defaults = {
          keepCase: false
        };
        var o = t("./tokenize");
        var s = t("./root");
        var a = t("./type");
        var l = t("./field");
        var p = t("./mapfield");
        var u = t("./oneof");
        var c = t("./enum");
        var m = t("./service");
        var _ = t("./method");
        var h = t("./types");
        var f = t("./util");
        var d = /^[1-9][0-9]*$/;
        var y = /^-?[1-9][0-9]*$/;
        var S = /^0[x][0-9a-fA-F]+$/;
        var g = /^-?0[x][0-9a-fA-F]+$/;
        var b = /^0[0-7]+$/;
        var v = /^-?0[0-7]+$/;
        var w = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var R = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var $ = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var T = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function O(e, t, i) {
          if (!(t instanceof s)) {
            i = t;
            t = new s();
          }
          if (!i) {
            i = O.defaults;
          }
          var n;
          var r;
          var A;
          var L;
          var D;
          var P = i.preferTrailingComment || false;
          var E = o(e, i.alternateCommentMode || false);
          var C = E.next;
          var N = E.push;
          var I = E.peek;
          var M = E.skip;
          var k = E.cmnt;
          var B = true;
          var j = false;
          var F = t;
          var U = i.keepCase ? function (e) {
            return e;
          } : f.camelCase;
          function G(e, t, i) {
            var n = O.filename;
            if (!i) {
              O.filename = null;
            }
            return Error("illegal " + (t || "token") + " '" + e + "' (" + (n ? n + ", " : "") + "line " + E.line + ")");
          }
          function x() {
            var e;
            var t = [];
            do {
              if ("\"" !== (e = C()) && "'" !== e) {
                throw G(e);
              }
              t.push(C());
              M(e);
              e = I();
            } while ("\"" === e || "'" === e);
            return t.join("");
          }
          function W(e) {
            var t = C();
            switch (t) {
              case "'":
              case "\"":
                N(t);
                return x();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (e, t) {
                var i = 1;
                if ("-" === e.charAt(0)) {
                  i = -1;
                  e = e.substring(1);
                }
                switch (e) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return i * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case "0":
                    return 0;
                }
                if (d.test(e)) {
                  return i * parseInt(e, 10);
                }
                if (S.test(e)) {
                  return i * parseInt(e, 16);
                }
                if (b.test(e)) {
                  return i * parseInt(e, 8);
                }
                if (w.test(e)) {
                  return i * parseFloat(e);
                }
                throw G(e, "number", t);
              }(t, true);
            } catch (i) {
              if (e && $.test(t)) {
                return t;
              }
              throw G(t, "value");
            }
          }
          function z(e, t) {
            var i;
            var n;
            do {
              if (!t || "\"" !== (i = I()) && "'" !== i) {
                e.push([n = V(C()), M("to", true) ? V(C()) : n]);
              } else {
                e.push(x());
              }
            } while (M(",", true));
            var r = {
              options: undefined,
              setOption: function (e, t) {
                if (undefined === this.options) {
                  this.options = {};
                }
                this.options[e] = t;
              }
            };
            Y(r, function (e) {
              if ("option" !== e) {
                throw G(e);
              }
              ee(r, e);
              M(";");
            }, function () {
              ne(r);
            });
          }
          function V(e, t) {
            switch (e) {
              case "max":
              case "MAX":
              case "Max":
                return 536870911;
              case "0":
                return 0;
            }
            if (!t && "-" === e.charAt(0)) {
              throw G(e, "id");
            }
            if (y.test(e)) {
              return parseInt(e, 10);
            }
            if (g.test(e)) {
              return parseInt(e, 16);
            }
            if (v.test(e)) {
              return parseInt(e, 8);
            }
            throw G(e, "id");
          }
          function H() {
            if (undefined !== n) {
              throw G("package");
            }
            n = C();
            if (!$.test(n)) {
              throw G(n, "name");
            }
            F = F.define(n);
            M(";");
          }
          function X() {
            var e;
            var t = I();
            switch (t) {
              case "weak":
                e = A || (A = []);
                C();
                break;
              case "public":
                C();
              default:
                e = r || (r = []);
            }
            t = x();
            M(";");
            e.push(t);
          }
          function q() {
            M("=");
            L = x();
            if (!(j = "proto3" === L) && "proto2" !== L) {
              throw G(L, "syntax");
            }
            M(";");
          }
          function J(e, t) {
            switch (t) {
              case "option":
                ee(e, t);
                M(";");
                return true;
              case "message":
                K(e, t);
                return true;
              case "enum":
                Q(e, t);
                return true;
              case "service":
                (function (e, t) {
                  if (!R.test(t = C())) {
                    throw G(t, "service name");
                  }
                  var i = new m(t);
                  Y(i, function (e) {
                    if (!J(i, e)) {
                      if ("rpc" !== e) {
                        throw G(e);
                      }
                      !function (e, t) {
                        var i = k();
                        var n = t;
                        if (!R.test(t = C())) {
                          throw G(t, "name");
                        }
                        var r;
                        var o;
                        var s;
                        var a;
                        var l = t;
                        M("(");
                        if (M("stream", true)) {
                          o = true;
                        }
                        if (!$.test(t = C())) {
                          throw G(t);
                        }
                        r = t;
                        M(")");
                        M("returns");
                        M("(");
                        if (M("stream", true)) {
                          a = true;
                        }
                        if (!$.test(t = C())) {
                          throw G(t);
                        }
                        s = t;
                        M(")");
                        var p = new _(l, n, r, s, o, a);
                        p.comment = i;
                        Y(p, function (e) {
                          if ("option" !== e) {
                            throw G(e);
                          }
                          ee(p, e);
                          M(";");
                        });
                        e.add(p);
                      }(i, e);
                    }
                  });
                  e.add(i);
                })(e, t);
                return true;
              case "extend":
                (function (e, t) {
                  if (!$.test(t = C())) {
                    throw G(t, "reference");
                  }
                  var i = t;
                  Y(null, function (t) {
                    switch (t) {
                      case "required":
                      case "repeated":
                        Z(e, t, i);
                        break;
                      case "optional":
                        Z(e, j ? "proto3_optional" : "optional", i);
                        break;
                      default:
                        if (!j || !$.test(t)) {
                          throw G(t);
                        }
                        N(t);
                        Z(e, "optional", i);
                    }
                  });
                })(e, t);
                return true;
            }
            return false;
          }
          function Y(e, t, i) {
            var n = E.line;
            if (e) {
              if ("string" != typeof e.comment) {
                e.comment = k();
              }
              e.filename = O.filename;
            }
            if (M("{", true)) {
              for (var r; "}" !== (r = C());) {
                t(r);
              }
              M(";", true);
            } else {
              if (i) {
                i();
              }
              M(";");
              if (e && ("string" != typeof e.comment || P)) {
                e.comment = k(n) || e.comment;
              }
            }
          }
          function K(e, t) {
            if (!R.test(t = C())) {
              throw G(t, "type name");
            }
            var i = new a(t);
            Y(i, function (e) {
              if (!J(i, e)) {
                switch (e) {
                  case "map":
                    !function (e) {
                      M("<");
                      var t = C();
                      if (undefined === h.mapKey[t]) {
                        throw G(t, "type");
                      }
                      M(",");
                      var i = C();
                      if (!$.test(i)) {
                        throw G(i, "type");
                      }
                      M(">");
                      var n = C();
                      if (!R.test(n)) {
                        throw G(n, "name");
                      }
                      M("=");
                      var r = new p(U(n), V(C()), t, i);
                      Y(r, function (e) {
                        if ("option" !== e) {
                          throw G(e);
                        }
                        ee(r, e);
                        M(";");
                      }, function () {
                        ne(r);
                      });
                      e.add(r);
                    }(i);
                    break;
                  case "required":
                  case "repeated":
                    Z(i, e);
                    break;
                  case "optional":
                    Z(i, j ? "proto3_optional" : "optional");
                    break;
                  case "oneof":
                    !function (e, t) {
                      if (!R.test(t = C())) {
                        throw G(t, "name");
                      }
                      var i = new u(U(t));
                      Y(i, function (e) {
                        if ("option" === e) {
                          ee(i, e);
                          M(";");
                        } else {
                          N(e);
                          Z(i, "optional");
                        }
                      });
                      e.add(i);
                    }(i, e);
                    break;
                  case "extensions":
                    z(i.extensions || (i.extensions = []));
                    break;
                  case "reserved":
                    z(i.reserved || (i.reserved = []), true);
                    break;
                  default:
                    if (!j || !$.test(e)) {
                      throw G(e);
                    }
                    N(e);
                    Z(i, "optional");
                }
              }
            });
            e.add(i);
          }
          function Z(e, t, i) {
            var n = C();
            if ("group" !== n) {
              for (; n.endsWith(".") || I().startsWith(".");) {
                n += C();
              }
              if (!$.test(n)) {
                throw G(n, "type");
              }
              var r = C();
              if (!R.test(r)) {
                throw G(r, "name");
              }
              r = U(r);
              M("=");
              var o = new l(r, V(C()), n, t, i);
              Y(o, function (e) {
                if ("option" !== e) {
                  throw G(e);
                }
                ee(o, e);
                M(";");
              }, function () {
                ne(o);
              });
              if ("proto3_optional" === t) {
                var s = new u("_" + r);
                o.setOption("proto3_optional", true);
                s.add(o);
                e.add(s);
              } else {
                e.add(o);
              }
              if (!(j || !o.repeated || undefined === h.packed[n] && undefined !== h.basic[n])) {
                o.setOption("packed", false, true);
              }
            } else {
              !function (e, t) {
                var i = C();
                if (!R.test(i)) {
                  throw G(i, "name");
                }
                var n = f.lcFirst(i);
                if (i === n) {
                  i = f.ucFirst(i);
                }
                M("=");
                var r = V(C());
                var o = new a(i);
                o.group = true;
                var s = new l(n, r, i, t);
                s.filename = O.filename;
                Y(o, function (e) {
                  switch (e) {
                    case "option":
                      ee(o, e);
                      M(";");
                      break;
                    case "required":
                    case "repeated":
                      Z(o, e);
                      break;
                    case "optional":
                      Z(o, j ? "proto3_optional" : "optional");
                      break;
                    case "message":
                      K(o, e);
                      break;
                    case "enum":
                      Q(o, e);
                      break;
                    default:
                      throw G(e);
                  }
                });
                e.add(o).add(s);
              }(e, t);
            }
          }
          function Q(e, t) {
            if (!R.test(t = C())) {
              throw G(t, "name");
            }
            var i = new c(t);
            Y(i, function (e) {
              switch (e) {
                case "option":
                  ee(i, e);
                  M(";");
                  break;
                case "reserved":
                  z(i.reserved || (i.reserved = []), true);
                  break;
                default:
                  !function (e, t) {
                    if (!R.test(t)) {
                      throw G(t, "name");
                    }
                    M("=");
                    var i = V(C(), true);
                    var n = {
                      options: undefined,
                      setOption: function (e, t) {
                        if (undefined === this.options) {
                          this.options = {};
                        }
                        this.options[e] = t;
                      }
                    };
                    Y(n, function (e) {
                      if ("option" !== e) {
                        throw G(e);
                      }
                      ee(n, e);
                      M(";");
                    }, function () {
                      ne(n);
                    });
                    e.add(t, i, n.comment, n.options);
                  }(i, e);
              }
            });
            e.add(i);
          }
          function ee(e, t) {
            var i = M("(", true);
            if (!$.test(t = C())) {
              throw G(t, "name");
            }
            var n;
            var r = t;
            var o = r;
            if (i) {
              M(")");
              o = r = "(" + r + ")";
              t = I();
              if (T.test(t)) {
                n = t.slice(1);
                r += t;
                C();
              }
            }
            M("=");
            (function (e, t, i, n) {
              if (e.setParsedOption) {
                e.setParsedOption(t, i, n);
              }
            })(e, o, te(e, r), n);
          }
          function te(e, t) {
            if (M("{", true)) {
              for (var i = {}; !M("}", true);) {
                if (!R.test(D = C())) {
                  throw G(D, "name");
                }
                if (null === D) {
                  throw G(D, "end of input");
                }
                var n;
                var r = D;
                M(":", true);
                if ("{" === I()) {
                  n = te(e, t + "." + D);
                } else if ("[" === I()) {
                  var o;
                  n = [];
                  if (M("[", true)) {
                    do {
                      o = W(true);
                      n.push(o);
                    } while (M(",", true));
                    M("]");
                    if (undefined !== o) {
                      ie(e, t + "." + D, o);
                    }
                  }
                } else {
                  n = W(true);
                  ie(e, t + "." + D, n);
                }
                var s = i[r];
                if (s) {
                  n = [].concat(s).concat(n);
                }
                i[r] = n;
                M(",", true);
                M(";", true);
              }
              return i;
            }
            var a = W(true);
            ie(e, t, a);
            return a;
          }
          function ie(e, t, i) {
            if (e.setOption) {
              e.setOption(t, i);
            }
          }
          function ne(e) {
            if (M("[", true)) {
              do {
                ee(e, "option");
              } while (M(",", true));
              M("]");
            }
            return e;
          }
          for (; null !== (D = C());) {
            switch (D) {
              case "package":
                if (!B) {
                  throw G(D);
                }
                H();
                break;
              case "import":
                if (!B) {
                  throw G(D);
                }
                X();
                break;
              case "syntax":
                if (!B) {
                  throw G(D);
                }
                q();
                break;
              case "option":
                ee(F, D);
                M(";");
                break;
              default:
                if (J(F, D)) {
                  B = false;
                  continue;
                }
                throw G(D);
            }
          }
          O.filename = null;
          return {
            package: n,
            imports: r,
            weakImports: A,
            syntax: L,
            root: t
          };
        }
        i.exports;
      }, function () {
        return {
          "./tokenize": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (e, t, i, n, r) {
        i.exports = a;
        var o;
        var s = /\/|\./;
        function a(e, t) {
          if (!s.test(e)) {
            e = "google/protobuf/" + e + ".proto";
            t = {
              nested: {
                google: {
                  nested: {
                    protobuf: {
                      nested: t
                    }
                  }
                }
              }
            };
          }
          a[e] = t;
        }
        a("any", {
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          }
        });
        a("duration", {
          Duration: o = {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          }
        });
        a("timestamp", {
          Timestamp: o
        });
        a("empty", {
          Empty: {
            fields: {}
          }
        });
        a("struct", {
          Struct: {
            fields: {
              fields: {
                keyType: "string",
                type: "Value",
                id: 1
              }
            }
          },
          Value: {
            oneofs: {
              kind: {
                oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
              }
            },
            fields: {
              nullValue: {
                type: "NullValue",
                id: 1
              },
              numberValue: {
                type: "double",
                id: 2
              },
              stringValue: {
                type: "string",
                id: 3
              },
              boolValue: {
                type: "bool",
                id: 4
              },
              structValue: {
                type: "Struct",
                id: 5
              },
              listValue: {
                type: "ListValue",
                id: 6
              }
            }
          },
          NullValue: {
            values: {
              NULL_VALUE: 0
            }
          },
          ListValue: {
            fields: {
              values: {
                rule: "repeated",
                type: "Value",
                id: 1
              }
            }
          }
        });
        a("wrappers", {
          DoubleValue: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          FloatValue: {
            fields: {
              value: {
                type: "float",
                id: 1
              }
            }
          },
          Int64Value: {
            fields: {
              value: {
                type: "int64",
                id: 1
              }
            }
          },
          UInt64Value: {
            fields: {
              value: {
                type: "uint64",
                id: 1
              }
            }
          },
          Int32Value: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          UInt32Value: {
            fields: {
              value: {
                type: "uint32",
                id: 1
              }
            }
          },
          BoolValue: {
            fields: {
              value: {
                type: "bool",
                id: 1
              }
            }
          },
          StringValue: {
            fields: {
              value: {
                type: "string",
                id: 1
              }
            }
          },
          BytesValue: {
            fields: {
              value: {
                type: "bytes",
                id: 1
              }
            }
          }
        });
        a("field_mask", {
          FieldMask: {
            fields: {
              paths: {
                rule: "repeated",
                type: "string",
                id: 1
              }
            }
          }
        });
        a.get = function (e) {
          return a[e] || null;
        };
        i.exports;
      }, {});
      var _cjsExports;
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (e, t, i, n, r) {
        var o = i.exports = t("./index-light");
        o.build = "full";
        o.tokenize = t("./tokenize");
        o.parse = t("./parse");
        o.common = t("./common");
        o.Root._configure(o.Type, o.parse, o.common);
        i.exports;
      }, function () {
        return {
          "./index-light": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          "./tokenize": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./parse": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          "./common": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/index.js", function (e, t, i, n, r) {
        i.exports = t("./src/index");
        _cjsExports = i.exports;
      }, function () {
        return {
          "./src/index": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      loader.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/index.js");
      var _cjsExports$1;
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (e, t, i, n, r) {
        i.exports = t("./src/index-minimal");
        i.exports;
      }, function () {
        return {
          "./src/index-minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _dec$7;
      var _dec2$3;
      var _dec3$2;
      var _dec4$2;
      var _class$9;
      var _class2$5;
      var _descriptor$3;
      var _descriptor2$2;
      var _descriptor3$2;
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@old-rd1/crazy7772-proto/cz72Proto.js", function (e, t, i, n, r) {
        var o;
        var s = t("protobufjs/minimal");
        var a = s.Reader;
        var l = s.Writer;
        var p = s.util;
        var u = s.roots.default || (s.roots.default = {});
        (o = {
          RoundInfo: function () {
            function e(e) {
              this.PlateSymbol = [];
              this.AwardDataVec = [];
              if (e) {
                var t = Object.keys(e);
                for (var i = 0; i < t.length; ++i) {
                  if (null != e[t[i]]) {
                    this[t[i]] = e[t[i]];
                  }
                }
              }
            }
            e.prototype.PlateSymbol = p.emptyArray;
            e.prototype.AwardDataVec = p.emptyArray;
            e.prototype.AwardTypeFlag = 0;
            e.prototype.RespinNowRound = 0;
            e.prototype.RespinTotalMult = 0;
            e.prototype.RoundWin = 0;
            e.prototype.MaxFlag = false;
            e.prototype.RespinMult = 0;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.PlateSymbol && e.PlateSymbol.length) {
                t.uint32(10).fork();
                for (var i = 0; i < e.PlateSymbol.length; ++i) {
                  t.int32(e.PlateSymbol[i]);
                }
                t.ldelim();
              }
              if (null != e.AwardDataVec && e.AwardDataVec.length) {
                for (i = 0; i < e.AwardDataVec.length; ++i) {
                  u.cz72Proto.AwardData.encode(e.AwardDataVec[i], t.uint32(18).fork()).ldelim();
                }
              }
              if (null != e.AwardTypeFlag && Object.hasOwnProperty.call(e, "AwardTypeFlag")) {
                t.uint32(24).int32(e.AwardTypeFlag);
              }
              if (null != e.RespinNowRound && Object.hasOwnProperty.call(e, "RespinNowRound")) {
                t.uint32(32).int32(e.RespinNowRound);
              }
              if (null != e.RespinTotalMult && Object.hasOwnProperty.call(e, "RespinTotalMult")) {
                t.uint32(41).double(e.RespinTotalMult);
              }
              if (null != e.RoundWin && Object.hasOwnProperty.call(e, "RoundWin")) {
                t.uint32(49).double(e.RoundWin);
              }
              if (null != e.MaxFlag && Object.hasOwnProperty.call(e, "MaxFlag")) {
                t.uint32(56).bool(e.MaxFlag);
              }
              if (null != e.RespinMult && Object.hasOwnProperty.call(e, "RespinMult")) {
                t.uint32(65).double(e.RespinMult);
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof a)) {
                e = a.create(e);
              }
              var i = undefined === t ? e.len : e.pos + t;
              for (var n = new u.cz72Proto.RoundInfo(); e.pos < i;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    if (!(n.PlateSymbol && n.PlateSymbol.length)) {
                      n.PlateSymbol = [];
                    }
                    if (2 == (7 & r)) {
                      for (var o = e.uint32() + e.pos; e.pos < o;) {
                        n.PlateSymbol.push(e.int32());
                      }
                    } else {
                      n.PlateSymbol.push(e.int32());
                    }
                    break;
                  case 2:
                    if (!(n.AwardDataVec && n.AwardDataVec.length)) {
                      n.AwardDataVec = [];
                    }
                    n.AwardDataVec.push(u.cz72Proto.AwardData.decode(e, e.uint32()));
                    break;
                  case 3:
                    n.AwardTypeFlag = e.int32();
                    break;
                  case 4:
                    n.RespinNowRound = e.int32();
                    break;
                  case 5:
                    n.RespinTotalMult = e.double();
                    break;
                  case 6:
                    n.RoundWin = e.double();
                    break;
                  case 7:
                    n.MaxFlag = e.bool();
                    break;
                  case 8:
                    n.RespinMult = e.double();
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return n;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof a)) {
                e = new a(e);
              }
              return this.decode(e, e.uint32());
            };
            e.verify = function (e) {
              if ("object" != typeof e || null === e) {
                return "object expected";
              }
              if (null != e.PlateSymbol && e.hasOwnProperty("PlateSymbol")) {
                if (!Array.isArray(e.PlateSymbol)) {
                  return "PlateSymbol: array expected";
                }
                for (var t = 0; t < e.PlateSymbol.length; ++t) {
                  if (!p.isInteger(e.PlateSymbol[t])) {
                    return "PlateSymbol: integer[] expected";
                  }
                }
              }
              if (null != e.AwardDataVec && e.hasOwnProperty("AwardDataVec")) {
                if (!Array.isArray(e.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (t = 0; t < e.AwardDataVec.length; ++t) {
                  var i = u.cz72Proto.AwardData.verify(e.AwardDataVec[t]);
                  if (i) {
                    return "AwardDataVec." + i;
                  }
                }
              }
              return null != e.AwardTypeFlag && e.hasOwnProperty("AwardTypeFlag") && !p.isInteger(e.AwardTypeFlag) ? "AwardTypeFlag: integer expected" : null != e.RespinNowRound && e.hasOwnProperty("RespinNowRound") && !p.isInteger(e.RespinNowRound) ? "RespinNowRound: integer expected" : null != e.RespinTotalMult && e.hasOwnProperty("RespinTotalMult") && "number" != typeof e.RespinTotalMult ? "RespinTotalMult: number expected" : null != e.RoundWin && e.hasOwnProperty("RoundWin") && "number" != typeof e.RoundWin ? "RoundWin: number expected" : null != e.MaxFlag && e.hasOwnProperty("MaxFlag") && "boolean" != typeof e.MaxFlag ? "MaxFlag: boolean expected" : null != e.RespinMult && e.hasOwnProperty("RespinMult") && "number" != typeof e.RespinMult ? "RespinMult: number expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.cz72Proto.RoundInfo) {
                return e;
              }
              var t = new u.cz72Proto.RoundInfo();
              if (e.PlateSymbol) {
                if (!Array.isArray(e.PlateSymbol)) {
                  throw TypeError(".cz72Proto.RoundInfo.PlateSymbol: array expected");
                }
                t.PlateSymbol = [];
                for (var i = 0; i < e.PlateSymbol.length; ++i) {
                  t.PlateSymbol[i] = 0 | e.PlateSymbol[i];
                }
              }
              if (e.AwardDataVec) {
                if (!Array.isArray(e.AwardDataVec)) {
                  throw TypeError(".cz72Proto.RoundInfo.AwardDataVec: array expected");
                }
                t.AwardDataVec = [];
                for (i = 0; i < e.AwardDataVec.length; ++i) {
                  if ("object" != typeof e.AwardDataVec[i]) {
                    throw TypeError(".cz72Proto.RoundInfo.AwardDataVec: object expected");
                  }
                  t.AwardDataVec[i] = u.cz72Proto.AwardData.fromObject(e.AwardDataVec[i]);
                }
              }
              if (null != e.AwardTypeFlag) {
                t.AwardTypeFlag = 0 | e.AwardTypeFlag;
              }
              if (null != e.RespinNowRound) {
                t.RespinNowRound = 0 | e.RespinNowRound;
              }
              if (null != e.RespinTotalMult) {
                t.RespinTotalMult = Number(e.RespinTotalMult);
              }
              if (null != e.RoundWin) {
                t.RoundWin = Number(e.RoundWin);
              }
              if (null != e.MaxFlag) {
                t.MaxFlag = Boolean(e.MaxFlag);
              }
              if (null != e.RespinMult) {
                t.RespinMult = Number(e.RespinMult);
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var i = {};
              if (t.arrays || t.defaults) {
                i.PlateSymbol = [];
                i.AwardDataVec = [];
              }
              if (t.defaults) {
                i.AwardTypeFlag = 0;
                i.RespinNowRound = 0;
                i.RespinTotalMult = 0;
                i.RoundWin = 0;
                i.MaxFlag = false;
                i.RespinMult = 0;
              }
              if (e.PlateSymbol && e.PlateSymbol.length) {
                i.PlateSymbol = [];
                for (var n = 0; n < e.PlateSymbol.length; ++n) {
                  i.PlateSymbol[n] = e.PlateSymbol[n];
                }
              }
              if (e.AwardDataVec && e.AwardDataVec.length) {
                i.AwardDataVec = [];
                for (n = 0; n < e.AwardDataVec.length; ++n) {
                  i.AwardDataVec[n] = u.cz72Proto.AwardData.toObject(e.AwardDataVec[n], t);
                }
              }
              if (null != e.AwardTypeFlag && e.hasOwnProperty("AwardTypeFlag")) {
                i.AwardTypeFlag = e.AwardTypeFlag;
              }
              if (null != e.RespinNowRound && e.hasOwnProperty("RespinNowRound")) {
                i.RespinNowRound = e.RespinNowRound;
              }
              if (null != e.RespinTotalMult && e.hasOwnProperty("RespinTotalMult")) {
                i.RespinTotalMult = t.json && !isFinite(e.RespinTotalMult) ? String(e.RespinTotalMult) : e.RespinTotalMult;
              }
              if (null != e.RoundWin && e.hasOwnProperty("RoundWin")) {
                i.RoundWin = t.json && !isFinite(e.RoundWin) ? String(e.RoundWin) : e.RoundWin;
              }
              if (null != e.MaxFlag && e.hasOwnProperty("MaxFlag")) {
                i.MaxFlag = e.MaxFlag;
              }
              if (null != e.RespinMult && e.hasOwnProperty("RespinMult")) {
                i.RespinMult = t.json && !isFinite(e.RespinMult) ? String(e.RespinMult) : e.RespinMult;
              }
              return i;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/cz72Proto.RoundInfo";
            };
            return e;
          }(),
          SpinAck: function () {
            function e(e) {
              this.RoundQueue = [];
              if (e) {
                var t = Object.keys(e);
                for (var i = 0; i < t.length; ++i) {
                  if (null != e[t[i]]) {
                    this[t[i]] = e[t[i]];
                  }
                }
              }
            }
            e.prototype.RoundQueue = p.emptyArray;
            e.prototype.TotalWin = 0;
            e.prototype.RTP = 0;
            e.prototype.Bet = 0;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.RoundQueue && e.RoundQueue.length) {
                for (var i = 0; i < e.RoundQueue.length; ++i) {
                  u.cz72Proto.RoundInfo.encode(e.RoundQueue[i], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.TotalWin && Object.hasOwnProperty.call(e, "TotalWin")) {
                t.uint32(17).double(e.TotalWin);
              }
              if (null != e.RTP && Object.hasOwnProperty.call(e, "RTP")) {
                t.uint32(25).double(e.RTP);
              }
              if (null != e.Bet && Object.hasOwnProperty.call(e, "Bet")) {
                t.uint32(33).double(e.Bet);
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof a)) {
                e = a.create(e);
              }
              var i = undefined === t ? e.len : e.pos + t;
              for (var n = new u.cz72Proto.SpinAck(); e.pos < i;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    if (!(n.RoundQueue && n.RoundQueue.length)) {
                      n.RoundQueue = [];
                    }
                    n.RoundQueue.push(u.cz72Proto.RoundInfo.decode(e, e.uint32()));
                    break;
                  case 2:
                    n.TotalWin = e.double();
                    break;
                  case 3:
                    n.RTP = e.double();
                    break;
                  case 4:
                    n.Bet = e.double();
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return n;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof a)) {
                e = new a(e);
              }
              return this.decode(e, e.uint32());
            };
            e.verify = function (e) {
              if ("object" != typeof e || null === e) {
                return "object expected";
              }
              if (null != e.RoundQueue && e.hasOwnProperty("RoundQueue")) {
                if (!Array.isArray(e.RoundQueue)) {
                  return "RoundQueue: array expected";
                }
                for (var t = 0; t < e.RoundQueue.length; ++t) {
                  var i = u.cz72Proto.RoundInfo.verify(e.RoundQueue[t]);
                  if (i) {
                    return "RoundQueue." + i;
                  }
                }
              }
              return null != e.TotalWin && e.hasOwnProperty("TotalWin") && "number" != typeof e.TotalWin ? "TotalWin: number expected" : null != e.RTP && e.hasOwnProperty("RTP") && "number" != typeof e.RTP ? "RTP: number expected" : null != e.Bet && e.hasOwnProperty("Bet") && "number" != typeof e.Bet ? "Bet: number expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.cz72Proto.SpinAck) {
                return e;
              }
              var t = new u.cz72Proto.SpinAck();
              if (e.RoundQueue) {
                if (!Array.isArray(e.RoundQueue)) {
                  throw TypeError(".cz72Proto.SpinAck.RoundQueue: array expected");
                }
                t.RoundQueue = [];
                for (var i = 0; i < e.RoundQueue.length; ++i) {
                  if ("object" != typeof e.RoundQueue[i]) {
                    throw TypeError(".cz72Proto.SpinAck.RoundQueue: object expected");
                  }
                  t.RoundQueue[i] = u.cz72Proto.RoundInfo.fromObject(e.RoundQueue[i]);
                }
              }
              if (null != e.TotalWin) {
                t.TotalWin = Number(e.TotalWin);
              }
              if (null != e.RTP) {
                t.RTP = Number(e.RTP);
              }
              if (null != e.Bet) {
                t.Bet = Number(e.Bet);
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var i = {};
              if (t.arrays || t.defaults) {
                i.RoundQueue = [];
              }
              if (t.defaults) {
                i.TotalWin = 0;
                i.RTP = 0;
                i.Bet = 0;
              }
              if (e.RoundQueue && e.RoundQueue.length) {
                i.RoundQueue = [];
                for (var n = 0; n < e.RoundQueue.length; ++n) {
                  i.RoundQueue[n] = u.cz72Proto.RoundInfo.toObject(e.RoundQueue[n], t);
                }
              }
              if (null != e.TotalWin && e.hasOwnProperty("TotalWin")) {
                i.TotalWin = t.json && !isFinite(e.TotalWin) ? String(e.TotalWin) : e.TotalWin;
              }
              if (null != e.RTP && e.hasOwnProperty("RTP")) {
                i.RTP = t.json && !isFinite(e.RTP) ? String(e.RTP) : e.RTP;
              }
              if (null != e.Bet && e.hasOwnProperty("Bet")) {
                i.Bet = t.json && !isFinite(e.Bet) ? String(e.Bet) : e.Bet;
              }
              return i;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/cz72Proto.SpinAck";
            };
            return e;
          }(),
          GameInfoData: function () {
            function e(e) {
              this.Mul = [];
              this.Odds = [];
              if (e) {
                var t = Object.keys(e);
                for (var i = 0; i < t.length; ++i) {
                  if (null != e[t[i]]) {
                    this[t[i]] = e[t[i]];
                  }
                }
              }
            }
            e.prototype.ShowExtra = false;
            e.prototype.Mul = p.emptyArray;
            e.prototype.Odds = p.emptyArray;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.ShowExtra && Object.hasOwnProperty.call(e, "ShowExtra")) {
                t.uint32(8).bool(e.ShowExtra);
              }
              if (null != e.Mul && e.Mul.length) {
                t.uint32(18).fork();
                for (var i = 0; i < e.Mul.length; ++i) {
                  t.double(e.Mul[i]);
                }
                t.ldelim();
              }
              if (null != e.Odds && e.Odds.length) {
                t.uint32(26).fork();
                for (i = 0; i < e.Odds.length; ++i) {
                  t.double(e.Odds[i]);
                }
                t.ldelim();
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof a)) {
                e = a.create(e);
              }
              var i = undefined === t ? e.len : e.pos + t;
              for (var n = new u.cz72Proto.GameInfoData(); e.pos < i;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    n.ShowExtra = e.bool();
                    break;
                  case 2:
                    if (!(n.Mul && n.Mul.length)) {
                      n.Mul = [];
                    }
                    if (2 == (7 & r)) {
                      for (var o = e.uint32() + e.pos; e.pos < o;) {
                        n.Mul.push(e.double());
                      }
                    } else {
                      n.Mul.push(e.double());
                    }
                    break;
                  case 3:
                    if (!(n.Odds && n.Odds.length)) {
                      n.Odds = [];
                    }
                    if (2 == (7 & r)) {
                      for (o = e.uint32() + e.pos; e.pos < o;) {
                        n.Odds.push(e.double());
                      }
                    } else {
                      n.Odds.push(e.double());
                    }
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return n;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof a)) {
                e = new a(e);
              }
              return this.decode(e, e.uint32());
            };
            e.verify = function (e) {
              if ("object" != typeof e || null === e) {
                return "object expected";
              }
              if (null != e.ShowExtra && e.hasOwnProperty("ShowExtra") && "boolean" != typeof e.ShowExtra) {
                return "ShowExtra: boolean expected";
              }
              if (null != e.Mul && e.hasOwnProperty("Mul")) {
                if (!Array.isArray(e.Mul)) {
                  return "Mul: array expected";
                }
                for (var t = 0; t < e.Mul.length; ++t) {
                  if ("number" != typeof e.Mul[t]) {
                    return "Mul: number[] expected";
                  }
                }
              }
              if (null != e.Odds && e.hasOwnProperty("Odds")) {
                if (!Array.isArray(e.Odds)) {
                  return "Odds: array expected";
                }
                for (t = 0; t < e.Odds.length; ++t) {
                  if ("number" != typeof e.Odds[t]) {
                    return "Odds: number[] expected";
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.cz72Proto.GameInfoData) {
                return e;
              }
              var t = new u.cz72Proto.GameInfoData();
              if (null != e.ShowExtra) {
                t.ShowExtra = Boolean(e.ShowExtra);
              }
              if (e.Mul) {
                if (!Array.isArray(e.Mul)) {
                  throw TypeError(".cz72Proto.GameInfoData.Mul: array expected");
                }
                t.Mul = [];
                for (var i = 0; i < e.Mul.length; ++i) {
                  t.Mul[i] = Number(e.Mul[i]);
                }
              }
              if (e.Odds) {
                if (!Array.isArray(e.Odds)) {
                  throw TypeError(".cz72Proto.GameInfoData.Odds: array expected");
                }
                t.Odds = [];
                for (i = 0; i < e.Odds.length; ++i) {
                  t.Odds[i] = Number(e.Odds[i]);
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var i = {};
              if (t.arrays || t.defaults) {
                i.Mul = [];
                i.Odds = [];
              }
              if (t.defaults) {
                i.ShowExtra = false;
              }
              if (null != e.ShowExtra && e.hasOwnProperty("ShowExtra")) {
                i.ShowExtra = e.ShowExtra;
              }
              if (e.Mul && e.Mul.length) {
                i.Mul = [];
                for (var n = 0; n < e.Mul.length; ++n) {
                  i.Mul[n] = t.json && !isFinite(e.Mul[n]) ? String(e.Mul[n]) : e.Mul[n];
                }
              }
              if (e.Odds && e.Odds.length) {
                i.Odds = [];
                for (n = 0; n < e.Odds.length; ++n) {
                  i.Odds[n] = t.json && !isFinite(e.Odds[n]) ? String(e.Odds[n]) : e.Odds[n];
                }
              }
              return i;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/cz72Proto.GameInfoData";
            };
            return e;
          }()
        }).AwardData = function () {
          function e(e) {
            if (e) {
              var t = Object.keys(e);
              for (var i = 0; i < t.length; ++i) {
                if (null != e[t[i]]) {
                  this[t[i]] = e[t[i]];
                }
              }
            }
          }
          e.prototype.Symbol = 0;
          e.prototype.Count = 0;
          e.prototype.Line = 0;
          e.prototype.Win = 0;
          e.prototype.Mult = 0;
          e.prototype.Award = 0;
          e.create = function (t) {
            return new e(t);
          };
          e.encode = function (e, t) {
            if (!t) {
              t = l.create();
            }
            if (null != e.Symbol && Object.hasOwnProperty.call(e, "Symbol")) {
              t.uint32(8).int32(e.Symbol);
            }
            if (null != e.Count && Object.hasOwnProperty.call(e, "Count")) {
              t.uint32(16).int32(e.Count);
            }
            if (null != e.Line && Object.hasOwnProperty.call(e, "Line")) {
              t.uint32(24).int32(e.Line);
            }
            if (null != e.Win && Object.hasOwnProperty.call(e, "Win")) {
              t.uint32(33).double(e.Win);
            }
            if (null != e.Mult && Object.hasOwnProperty.call(e, "Mult")) {
              t.uint32(41).double(e.Mult);
            }
            if (null != e.Award && Object.hasOwnProperty.call(e, "Award")) {
              t.uint32(48).int32(e.Award);
            }
            return t;
          };
          e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          };
          e.decode = function (e, t) {
            if (!(e instanceof a)) {
              e = a.create(e);
            }
            var i = undefined === t ? e.len : e.pos + t;
            for (var n = new u.cz72Proto.AwardData(); e.pos < i;) {
              var r = e.uint32();
              switch (r >>> 3) {
                case 1:
                  n.Symbol = e.int32();
                  break;
                case 2:
                  n.Count = e.int32();
                  break;
                case 3:
                  n.Line = e.int32();
                  break;
                case 4:
                  n.Win = e.double();
                  break;
                case 5:
                  n.Mult = e.double();
                  break;
                case 6:
                  n.Award = e.int32();
                  break;
                default:
                  e.skipType(7 & r);
              }
            }
            return n;
          };
          e.decodeDelimited = function (e) {
            if (!(e instanceof a)) {
              e = new a(e);
            }
            return this.decode(e, e.uint32());
          };
          e.verify = function (e) {
            return "object" != typeof e || null === e ? "object expected" : null != e.Symbol && e.hasOwnProperty("Symbol") && !p.isInteger(e.Symbol) ? "Symbol: integer expected" : null != e.Count && e.hasOwnProperty("Count") && !p.isInteger(e.Count) ? "Count: integer expected" : null != e.Line && e.hasOwnProperty("Line") && !p.isInteger(e.Line) ? "Line: integer expected" : null != e.Win && e.hasOwnProperty("Win") && "number" != typeof e.Win ? "Win: number expected" : null != e.Mult && e.hasOwnProperty("Mult") && "number" != typeof e.Mult ? "Mult: number expected" : null != e.Award && e.hasOwnProperty("Award") && !p.isInteger(e.Award) ? "Award: integer expected" : null;
          };
          e.fromObject = function (e) {
            if (e instanceof u.cz72Proto.AwardData) {
              return e;
            }
            var t = new u.cz72Proto.AwardData();
            if (null != e.Symbol) {
              t.Symbol = 0 | e.Symbol;
            }
            if (null != e.Count) {
              t.Count = 0 | e.Count;
            }
            if (null != e.Line) {
              t.Line = 0 | e.Line;
            }
            if (null != e.Win) {
              t.Win = Number(e.Win);
            }
            if (null != e.Mult) {
              t.Mult = Number(e.Mult);
            }
            if (null != e.Award) {
              t.Award = 0 | e.Award;
            }
            return t;
          };
          e.toObject = function (e, t) {
            if (!t) {
              t = {};
            }
            var i = {};
            if (t.defaults) {
              i.Symbol = 0;
              i.Count = 0;
              i.Line = 0;
              i.Win = 0;
              i.Mult = 0;
              i.Award = 0;
            }
            if (null != e.Symbol && e.hasOwnProperty("Symbol")) {
              i.Symbol = e.Symbol;
            }
            if (null != e.Count && e.hasOwnProperty("Count")) {
              i.Count = e.Count;
            }
            if (null != e.Line && e.hasOwnProperty("Line")) {
              i.Line = e.Line;
            }
            if (null != e.Win && e.hasOwnProperty("Win")) {
              i.Win = t.json && !isFinite(e.Win) ? String(e.Win) : e.Win;
            }
            if (null != e.Mult && e.hasOwnProperty("Mult")) {
              i.Mult = t.json && !isFinite(e.Mult) ? String(e.Mult) : e.Mult;
            }
            if (null != e.Award && e.hasOwnProperty("Award")) {
              i.Award = e.Award;
            }
            return i;
          };
          e.prototype.toJSON = function () {
            return this.constructor.toObject(this, s.util.toJSONOptions);
          };
          e.getTypeUrl = function (e) {
            if (undefined === e) {
              e = "type.googleapis.com";
            }
            return e + "/cz72Proto.AwardData";
          };
          return e;
        }();
        u.cz72Proto = o;
        i.exports = u;
        _cjsExports$1 = i.exports;
      }, function () {
        return {
          "protobufjs/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      loader.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crazy7772/Client/Thai_UAT/node_modules/@old-rd1/crazy7772-proto/cz72Proto.js");
      cclegacy._RF.push({}, "bb829FLp0RN/4l5gkM4UyyM", "NumberRolling", undefined);
      var ccclass$9 = _decorator.ccclass;
      var property$3 = _decorator.property;
      _dec$7 = ccclass$9("NumberRolling");
      _dec2$3 = property$3({
        type: Label,
        tooltip: "數字顯示",
        displayName: "Number Label"
      });
      _dec3$2 = property$3({
        type: CCInteger,
        tooltip: "數值變動所需時間(單位：毫秒)"
      });
      _dec4$2 = property$3({
        type: Boolean,
        tooltip: "是否帶小數"
      });
      _class2$5 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_numberLabel", _descriptor$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_duration", _descriptor2$2, _assertThisInitialized(t));
          t.m_isRolling = false;
          t.m_currentValue = 0;
          t.m_targetValue = 0;
          t.m_deltaValue = 0;
          _initializerDefineProperty(t, "m_isDecimal", _descriptor3$2, _assertThisInitialized(t));
          t.m_formatCallback = null;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.start = function () {};
        i.update = function (e) {
          if (this.m_isRolling) {
            this.UpdateLabel(e);
          }
        };
        i.SetValue = function (e, t) {
          this.m_currentValue = e;
          this.m_targetValue = e;
          this.NumberUpdate(e, t);
        };
        i.RollNumberTo = function (e, t) {
          this.RollNumber(this.m_currentValue, e, t, true);
        };
        i.RollNumber = function (e, t, i, n) {
          if (undefined === n) {
            n = false;
          }
          this.m_currentValue = n ? this.m_currentValue : e;
          this.m_targetValue = t;
          var r = this.m_duration;
          if ("number" == typeof i && i > 0) {
            r = i;
          }
          r = r <= 0 ? 1 : r;
          this.m_deltaValue = node$1.divide(node$1.minus(this.m_targetValue, this.m_currentValue), node$1.times(r, .001));
          this.m_isRolling = 0 != this.m_deltaValue;
        };
        i.SetFormatCallback = function (e) {
          this.m_formatCallback = e;
        };
        i.UpdateLabel = function (e) {
          var t = this.m_deltaValue * e;
          var i = this.m_currentValue + t;
          if (t > 0 ? i >= this.m_targetValue : i <= this.m_targetValue) {
            this.m_currentValue = this.m_targetValue;
            this.NumberUpdate(this.m_currentValue, true);
            this.Reset();
          } else {
            this.m_currentValue = i;
            this.NumberUpdate(this.m_currentValue);
          }
        };
        i.NumberUpdate = function (e, t) {
          if (undefined === t) {
            t = false;
          }
          var i = "";
          i = t ? this.m_formatCallback ? this.m_formatCallback(e, t) : node$1.FormatNumberThousands(e, node$1.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, false, 2) : this.m_formatCallback ? this.m_formatCallback(e, t) : this.m_isDecimal ? node$1.FormatNumberThousands(e, node$1.FORMAT_NUMBER_TYPE.DEFINE_DOT, false, 2) : node$1.FormatNumberThousands(e, node$1.FORMAT_NUMBER_TYPE.NONE_DOT, false);
          this.m_numberLabel.string = i;
        };
        i.Reset = function () {
          this.m_isRolling = false;
          this.m_deltaValue = 0;
        };
        _createClass(t, [{
          key: "string",
          get: function () {
            return this.m_numberLabel.string;
          }
        }, {
          key: "IsRolling",
          get: function () {
            return this.m_isRolling;
          }
        }, {
          key: "CurrentValue",
          get: function () {
            return this.m_currentValue;
          }
        }, {
          key: "Value",
          get: function () {
            return this.m_targetValue;
          }
        }]);
        return t;
      }(Component);
      _descriptor$3 = _applyDecoratedDescriptor(_class2$5.prototype, "m_numberLabel", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$2 = _applyDecoratedDescriptor(_class2$5.prototype, "m_duration", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1e3;
        }
      });
      _descriptor3$2 = _applyDecoratedDescriptor(_class2$5.prototype, "m_isDecimal", [_dec4$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      });
      var NumberRolling = _dec$7(_class$9 = _class2$5) || _class$9;
      var _dec$8;
      var _dec2$4;
      var _dec3$3;
      var _dec4$3;
      var _dec5$2;
      var _dec6$1;
      var _dec7$1;
      var _dec8$1;
      var _dec9$1;
      var _dec10$1;
      var _dec11$1;
      var _dec12$1;
      var _dec13$1;
      var _dec14$1;
      var _dec15$1;
      var _dec16;
      var _dec17;
      var _dec18;
      var _dec19;
      var _dec20;
      var _dec21;
      var _class2$6;
      var _descriptor$4;
      var _descriptor2$3;
      var _descriptor3$3;
      var _descriptor4$2;
      var _descriptor5$2;
      var _descriptor6$1;
      var _descriptor7$1;
      var _descriptor8$1;
      var _descriptor9$1;
      var _descriptor10$1;
      var _descriptor11$1;
      var _descriptor12$1;
      var _descriptor13$1;
      var _descriptor14$1;
      var _descriptor15$1;
      var _descriptor16;
      var _descriptor17;
      var _descriptor18;
      var _descriptor19;
      var _descriptor20;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "48428r8f0tFq6Lgsc/0Ykyr", "TableBarMgr", undefined);
      var ccclass$a = _decorator.ccclass;
      var property$4 = _decorator.property;
      _dec$8 = ccclass$a("TableBarMgr");
      _dec2$4 = property$4({
        type: NumberRolling,
        tooltip: "777"
      });
      _dec3$3 = property$4({
        type: NumberRolling,
        tooltip: "77"
      });
      _dec4$3 = property$4({
        type: NumberRolling,
        tooltip: "7"
      });
      _dec5$2 = property$4({
        type: NumberRolling,
        tooltip: "bar2"
      });
      _dec6$1 = property$4({
        type: NumberRolling,
        tooltip: "bar"
      });
      _dec7$1 = property$4({
        type: NumberRolling,
        tooltip: "any7"
      });
      _dec8$1 = property$4({
        type: NumberRolling,
        tooltip: "anyBar"
      });
      _dec9$1 = property$4({
        type: NumberRolling,
        tooltip: "any"
      });
      _dec10$1 = property$4({
        type: Animation,
        tooltip: "seven3Ani"
      });
      _dec11$1 = property$4({
        type: Animation,
        tooltip: "seven2Ani"
      });
      _dec12$1 = property$4({
        type: Animation,
        tooltip: "sevenAni"
      });
      _dec13$1 = property$4({
        type: Animation,
        tooltip: "bar2Ani"
      });
      _dec14$1 = property$4({
        type: Animation,
        tooltip: "barAni"
      });
      _dec15$1 = property$4({
        type: Animation,
        tooltip: "anySevenAni"
      });
      _dec16 = property$4({
        type: Animation,
        tooltip: "anyBarAni"
      });
      _dec17 = property$4({
        type: Animation,
        tooltip: "anyAni"
      });
      _dec18 = property$4({
        type: Animation,
        tooltip: "multiple2"
      });
      _dec19 = property$4({
        type: Animation,
        tooltip: "multiple3"
      });
      _dec20 = property$4({
        type: Animation,
        tooltip: "multiple5"
      });
      _dec21 = property$4({
        type: Animation,
        tooltip: "multiple10"
      });
      _class2$6 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_paySeven3", _descriptor$4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_paySeven2", _descriptor2$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_paySeven1", _descriptor3$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_payBar2", _descriptor4$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_payBar", _descriptor5$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_payAny7", _descriptor6$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_payAnyBar", _descriptor7$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_payAny", _descriptor8$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_seven3Ani", _descriptor9$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_seven2Ani", _descriptor10$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_sevenAni", _descriptor11$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_bar2Ani", _descriptor12$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_barAni", _descriptor13$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_anySevenAni", _descriptor14$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_anyBarAni", _descriptor15$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_anyAni", _descriptor16, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_multiple2Ani", _descriptor17, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_multiple3Ani", _descriptor18, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_multiple5Ani", _descriptor19, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_multiple10Ani", _descriptor20, _assertThisInitialized(t));
          t.m_nowPlayingAni = null;
          t.m_nowPlayingMulAni = null;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.UpdateJPPanel = function (e) {
          this.m_paySeven3.RollNumberTo(node$1.strip(1e3 * e / 3), 500);
          this.m_paySeven2.RollNumberTo(node$1.strip(200 * e / 3), 500);
          this.m_paySeven1.RollNumberTo(node$1.strip(100 * e / 3), 500);
          this.m_payBar2.RollNumberTo(node$1.strip(40 * e / 3), 500);
          this.m_payBar.RollNumberTo(node$1.strip(20 * e / 3), 500);
          this.m_payAny7.RollNumberTo(node$1.strip(40 * e / 3), 500);
          this.m_payAnyBar.RollNumberTo(node$1.strip(10 * e / 3), 500);
          this.m_payAny.RollNumberTo(node$1.strip(4 * e / 3), 500);
        };
        i.PlayPayAnimation = function (e) {
          switch (e) {
            case Game_Define.AwardType.Any:
              this.m_anyAni.play();
              this.m_nowPlayingAni = this.m_anyAni;
              break;
            case Game_Define.AwardType.AnyBar:
              this.m_anyBarAni.play();
              this.m_nowPlayingAni = this.m_anyBarAni;
              break;
            case Game_Define.AwardType.Any7:
              this.m_anySevenAni.play();
              this.m_nowPlayingAni = this.m_anySevenAni;
              break;
            case Game_Define.AwardType.Bar:
              this.m_barAni.play();
              this.m_nowPlayingAni = this.m_barAni;
              break;
            case Game_Define.AwardType.Bar2:
              this.m_bar2Ani.play();
              this.m_nowPlayingAni = this.m_bar2Ani;
              break;
            case Game_Define.AwardType.Seven:
              this.m_sevenAni.play();
              this.m_nowPlayingAni = this.m_sevenAni;
              break;
            case Game_Define.AwardType.Seven2:
              this.m_seven2Ani.play();
              this.m_nowPlayingAni = this.m_seven2Ani;
              break;
            case Game_Define.AwardType.Seven3:
              this.m_seven3Ani.play();
              this.m_nowPlayingAni = this.m_seven3Ani;
          }
        };
        i.PlayMulAnimation = function (e) {
          switch (e) {
            case Game_Define.Award_Mult.X2:
              this.m_multiple2Ani.play();
              this.m_nowPlayingMulAni = this.m_multiple2Ani;
              break;
            case Game_Define.Award_Mult.X3:
              this.m_multiple3Ani.play();
              this.m_nowPlayingMulAni = this.m_multiple3Ani;
              break;
            case Game_Define.Award_Mult.X5:
              this.m_multiple5Ani.play();
              this.m_nowPlayingMulAni = this.m_multiple5Ani;
              break;
            case Game_Define.Award_Mult.X10:
              this.m_multiple10Ani.play();
              this.m_nowPlayingMulAni = this.m_multiple10Ani;
          }
        };
        i.ClearAnimation = function () {
          if (null != this.m_nowPlayingAni) {
            this.m_nowPlayingAni.stop();
            this.m_nowPlayingAni = null;
          }
          if (null != this.m_nowPlayingMulAni) {
            this.m_nowPlayingMulAni.stop();
            this.m_nowPlayingMulAni = null;
          }
        };
        return t;
      }(Component);
      _descriptor$4 = _applyDecoratedDescriptor(_class2$6.prototype, "m_paySeven3", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$3 = _applyDecoratedDescriptor(_class2$6.prototype, "m_paySeven2", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$3 = _applyDecoratedDescriptor(_class2$6.prototype, "m_paySeven1", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$2 = _applyDecoratedDescriptor(_class2$6.prototype, "m_payBar2", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$2 = _applyDecoratedDescriptor(_class2$6.prototype, "m_payBar", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor6$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_payAny7", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor7$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_payAnyBar", [_dec8$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor8$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_payAny", [_dec9$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor9$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_seven3Ani", [_dec10$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor10$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_seven2Ani", [_dec11$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor11$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_sevenAni", [_dec12$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor12$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_bar2Ani", [_dec13$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor13$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_barAni", [_dec14$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor14$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_anySevenAni", [_dec15$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor15$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_anyBarAni", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor16 = _applyDecoratedDescriptor(_class2$6.prototype, "m_anyAni", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor17 = _applyDecoratedDescriptor(_class2$6.prototype, "m_multiple2Ani", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor18 = _applyDecoratedDescriptor(_class2$6.prototype, "m_multiple3Ani", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor19 = _applyDecoratedDescriptor(_class2$6.prototype, "m_multiple5Ani", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor20 = _applyDecoratedDescriptor(_class2$6.prototype, "m_multiple10Ani", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$9;
      var _dec2$5;
      var _dec3$4;
      var _class$b;
      var _class2$7;
      var _descriptor$5;
      var _descriptor2$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "dec1cxdxz1AMZS/zAGY/gPq", "MutiLanguageUnit", undefined);
      var ccclass$b = _decorator.ccclass;
      var property$5 = _decorator.property;
      _dec$9 = ccclass$b("MutiLanguageUnit");
      _dec2$5 = property$5({
        type: Sprite,
        tooltip: "需要換圖的Sprite"
      });
      _dec3$4 = property$5({
        tooltip: "SpriteFrame Name"
      });
      _class2$7 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_sprite", _descriptor$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_spriteFrameName", _descriptor2$4, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        return t;
      }(Component);
      _descriptor$5 = _applyDecoratedDescriptor(_class2$7.prototype, "m_sprite", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$4 = _applyDecoratedDescriptor(_class2$7.prototype, "m_spriteFrameName", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      });
      var MutiLanguageUnit = _dec$9(_class$b = _class2$7) || _class$b;
      var _dec$a;
      var _dec2$6;
      var _dec3$5;
      var _class2$8;
      var _descriptor$6;
      var _descriptor2$5;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "900940Avi1CkIvJgUDN1Vaw", "MutiLanguageView", undefined);
      var ccclass$c = _decorator.ccclass;
      var property$6 = _decorator.property;
      _dec$a = ccclass$c("MutiLanguageView");
      _dec2$6 = property$6({
        type: [MutiLanguageUnit],
        tooltip: "需要換圖的Node Unit"
      });
      _dec3$5 = property$6({
        type: SpriteAtlas,
        tooltip: "LOGO合圖"
      });
      _class2$8 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var r = 0; r < i; r++) {
            n[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_needChangeUnit", _descriptor$6, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titleSpriteAtlas", _descriptor2$5, _assertThisInitialized(t));
          t.m_titleSprite = null;
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.Init = function (e) {
          this.m_gameView = e;
        };
        i.SetLogo = function () {
          this.m_titleSprite = this.m_titleSpriteAtlas.getSpriteFrame("logo_" + node$c.CurrLang);
          if (!this.m_titleSprite) {
            this.m_titleSprite = this.m_titleSpriteAtlas.getSpriteFrame("logo_" + node.Lang.EN);
          }
        };
        i.SetTxt = function () {
          var e = this.m_titleSpriteAtlas.getSpriteFrame("logo_" + node$c.CurrLang);
          if (!e) {
            e = this.m_titleSpriteAtlas.getSpriteFrame("logo_" + node.Lang.EN);
          }
          for (var t = 0; t < this.m_gameView.Logos.length; ++t) {
            this.m_gameView.Logos[t].spriteFrame = e;
          }
          this.m_gameView.Manual.SetTxt(Game_Define.MANUAL_STRING, Game_Define.MANUAL_TITLE_STRING);
          var i = node$c.GetGameAtlas();
          for (var n = 0; n < this.m_needChangeUnit.length; n++) {
            var r = this.m_needChangeUnit[n].m_spriteFrameName;
            this.m_needChangeUnit[n].m_sprite.spriteFrame = i.getSpriteFrame(r);
          }
        };
        i.GetTitleSprite = function () {
          return this.m_titleSprite;
        };
        return t;
      }(Component);
      _descriptor$6 = _applyDecoratedDescriptor(_class2$8.prototype, "m_needChangeUnit", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$5 = _applyDecoratedDescriptor(_class2$8.prototype, "m_titleSpriteAtlas", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e7a72q0wLNPWZqcdH9Ty9PF", "GameView", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "85800dC6spPJZBsNOWw9Nx2", "NodePool", undefined);
      var NodePool = function () {
        function e() {
          this.m_symbolSprites = [];
          this.m_symbolEffectPrefabs = null;
          this.m_symbolEffects = null;
        }
        e.GetInstance = function () {
          if (!this._instance) {
            this._instance = new e();
          }
          return this._instance;
        };
        var t = e.prototype;
        t.GetSymbolSprite = function () {
          if (this.m_symbolSprites.length > 0) {
            return this.m_symbolSprites.pop();
          }
          var e = new Node();
          var t = e.addComponent(Sprite);
          t.type = Sprite.Type.SIMPLE;
          t.sizeMode = Sprite.SizeMode.RAW;
          t.trim = false;
          return e;
        };
        t.ReturnSymbolSprite = function (e) {
          e.getComponent(Sprite).color = color(255, 255, 255);
          e.removeFromParent();
          e.active = false;
          this.m_symbolSprites.push(e);
        };
        t.SetSymbolEffectPrefabs = function (e) {
          this.m_symbolEffectPrefabs = new Array();
          this.m_symbolEffects = new Array();
          for (var t = 0; t < e.length; t++) {
            this.m_symbolEffectPrefabs.push(e[t]);
            this.m_symbolEffects.push([]);
          }
        };
        t.GetSymbolEffectNode = function (e) {
          return this.m_symbolEffects[e].length > 0 ? this.m_symbolEffects[e].pop() : instantiate(this.m_symbolEffectPrefabs[e]);
        };
        t.ReturnSymbolEffectNode = function (e, t) {
          t.removeFromParent();
          t.active = false;
          this.m_symbolEffects[e].push(t);
        };
        return e;
      }();
      NodePool._instance = null;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "602b66hqVRKdKYlxK3aVSTT", "SlotReels_Normal", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "aefb0KvAlZCRpzQjnKv4zR4", "SlotReels_OneLineSlot", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "abf8e+LrFJMX7O317/+l5IP", "SlotReels_Spin_TileMatch", undefined);
      cclegacy._RF.pop();
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