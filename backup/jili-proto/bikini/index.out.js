System.register("chunks:///game.js", ["./index-f0f9ab7c.js", "cc"], function (exports, module) {
  "use strict";

  var _applyDecoratedDescriptor;
  var _inheritsLoose;
  var _initializerDefineProperty;
  var _assertThisInitialized;
  var _asyncToGenerator;
  var _regeneratorRuntime;
  var SpineKit;
  var node;
  var node$1;
  var _createClass;
  var node$2;
  var node$3;
  var BaseState;
  var BigWinComponent;
  var node$4;
  var SlotBottomBarState;
  var node$5;
  var SwitchOffKeyDefine;
  var node$6;
  var node$7;
  var Common_IdleState;
  var node$8;
  var CommonState;
  var node$9;
  var node$a;
  var node$b;
  var node$c;
  var ManualComponent;
  var AstarteInit;
  var node$d;
  var BigWinAnimName;
  var BottomBar_UIName;
  var node$e;
  var CommonEventName;
  var node$f;
  var node$g;
  var node$h;
  var node$i;
  var node$j;
  var node$k;
  var cclegacy;
  var _decorator;
  var sp;
  var Component;
  var Enum;
  var v2;
  var Sprite;
  var Label;
  var Node;
  var tween;
  var UITransform;
  var instantiate;
  var Prefab;
  var SpriteFrame;
  var color;
  var v3;
  var Size;
  var Vec3;
  var UIRenderer;
  var log;
  var Animation;
  var SpriteAtlas;
  var Button;
  var sys;
  var input;
  var Input;
  var KeyCode;
  var screen;
  var view;
  var ResolutionPolicy;
  var js;
  var error;
  return {
    setters: [function (e) {
      _applyDecoratedDescriptor = e._;
      _inheritsLoose = e.a;
      _initializerDefineProperty = e.b;
      _assertThisInitialized = e.c;
      _asyncToGenerator = e.o;
      _regeneratorRuntime = e.p;
      SpineKit = e.v;
      node = e.n;
      node$1 = e.l;
      _createClass = e.d;
      node$2 = e.g;
      node$3 = e.e;
      BaseState = e.B;
      BigWinComponent = e.w;
      node$4 = e.h;
      SlotBottomBarState = e.t;
      node$5 = e.j;
      SwitchOffKeyDefine = e.S;
      node$6 = e.r;
      node$7 = e.i;
      Common_IdleState = e.x;
      node$8 = e.y;
      CommonState = e.k;
      node$9 = e.z;
      node$a = e.A;
      node$b = e.D;
      node$c = e.E;
      ManualComponent = e.M;
      AstarteInit = e.F;
      node$d = e.G;
      BigWinAnimName = e.H;
      BottomBar_UIName = e.I;
      node$e = e.f;
      CommonEventName = e.C;
      node$f = e.J;
      node$g = e.K;
      node$h = e.L;
      node$i = e.N;
      node$j = e.O;
      node$k = e.s;
    }, function (e) {
      cclegacy = e.cclegacy;
      _decorator = e._decorator;
      sp = e.sp;
      Component = e.Component;
      Enum = e.Enum;
      v2 = e.v2;
      Sprite = e.Sprite;
      Label = e.Label;
      Node = e.Node;
      tween = e.tween;
      UITransform = e.UITransform;
      instantiate = e.instantiate;
      Prefab = e.Prefab;
      SpriteFrame = e.SpriteFrame;
      color = e.color;
      v3 = e.v3;
      Size = e.Size;
      Vec3 = e.Vec3;
      UIRenderer = e.UIRenderer;
      log = e.log;
      Animation = e.Animation;
      SpriteAtlas = e.SpriteAtlas;
      Button = e.Button;
      sys = e.sys;
      input = e.input;
      Input = e.Input;
      KeyCode = e.KeyCode;
      screen = e.screen;
      view = e.view;
      ResolutionPolicy = e.ResolutionPolicy;
      js = e.js;
      error = e.error;
    }],
    execute: function () {
      var _dec;
      var _class;
      var _descriptor;
      var _class3;
      cclegacy._RF.push({}, "e06faGhxHdDPr60J02jJIfP", "AddSpinDeclareSpine", undefined);
      var ccclass = _decorator.ccclass;
      var property = _decorator.property;
      _dec = property({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Start, false);
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
        n.PlayLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Loop, false);
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
        n.PlayEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.End, false);
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
        return t;
      }(Component);
      _class3.AnimName = {
        Start: "Start",
        Loop: "Loop",
        End: "End"
      };
      _descriptor = _applyDecoratedDescriptor(_class3.prototype, "m_spine", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var AddSpinDeclareSpine = ccclass(_class = _class3) || _class;
      var GAMEVIEW_STATE;
      var Symbol;
      var ComboTag;
      var BonusType;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "997b5JwxHpCfIj3pFdIBFgE", "Game_Define", undefined);
      (function (e) {
        e[e.WAIT_READY = 0] = "WAIT_READY";
        e[e.PLATE_SHOW = 1] = "PLATE_SHOW";
        e[e.FEATURE_SHOW = 2] = "FEATURE_SHOW";
        e[e.CHECK_MATCH = 3] = "CHECK_MATCH";
        e[e.CONNECTION_LINE = 4] = "CONNECTION_LINE";
        e[e.SYMBOL_REMOVE = 5] = "SYMBOL_REMOVE";
        e[e.SYMBOL_EXCHANGE = 6] = "SYMBOL_EXCHANGE";
        e[e.PATCH_UP = 7] = "PATCH_UP";
        e[e.AWARD = 8] = "AWARD";
        e[e.MAIN_GAME_BONUS_STATE = 9] = "MAIN_GAME_BONUS_STATE";
        e[e.ROUND_SHOW_END = 10] = "ROUND_SHOW_END";
        e[e.ROUND_END = 11] = "ROUND_END";
        e[e.ENTER_FREE = 12] = "ENTER_FREE";
        e[e.FREE_GAME_ADD_SPIN_STATE = 13] = "FREE_GAME_ADD_SPIN_STATE";
        e[e.LEAVE_FREE = 14] = "LEAVE_FREE";
        e[e.UNSHOW_PREPARE = 15] = "UNSHOW_PREPARE";
      })(GAMEVIEW_STATE || (GAMEVIEW_STATE = {}));
      (function (e) {
        e[e.Q = 0] = "Q";
        e[e.K = 1] = "K";
        e[e.A = 2] = "A";
        e[e.UMBRELLA = 3] = "UMBRELLA";
        e[e.STARFISH = 4] = "STARFISH";
        e[e.BEACH_BALL = 5] = "BEACH_BALL";
        e[e.STRAW_HAT = 6] = "STRAW_HAT";
        e[e.SWIMMING_RING = 7] = "SWIMMING_RING";
        e[e.BOAT = 8] = "BOAT";
        e[e.LADY = 9] = "LADY";
        e[e.BONUS_BUBBLES = 10] = "BONUS_BUBBLES";
        e[e.BONUS_COCONUT_WATER = 11] = "BONUS_COCONUT_WATER";
        e[e.BONUS_COCKTAIL = 12] = "BONUS_COCKTAIL";
        e[e.BONUS_SHAVED_ICE = 13] = "BONUS_SHAVED_ICE";
        e[e.SCATTER = 14] = "SCATTER";
        e[e.FREE_SPIN = 15] = "FREE_SPIN";
        e[e.BONUS_EMPTY = 16] = "BONUS_EMPTY";
      })(Symbol || (Symbol = {}));
      (function (e) {
        e[e.TagEliminate = 1] = "TagEliminate";
        e[e.TagExchange = 2] = "TagExchange";
        e[e.TagAdd = 4] = "TagAdd";
        e[e.TagUp = 8] = "TagUp";
      })(ComboTag || (ComboTag = {}));
      (function (e) {
        e[e.General = 0] = "General";
        e[e.Add = 1] = "Add";
        e[e.Up = 2] = "Up";
      })(BonusType || (BonusType = {}));
      var Game_Define = function () {
        function e() {}
        e.OnExit = function () {
          this.AudioClips = {
            Debut: null,
            MG_BGM: null,
            Spin: null,
            Reel_Stop: null,
            NearWin: null,
            Scatter1: null,
            Scatter2: null,
            Scatter3: null,
            Combo_1: null,
            Combo_2: null,
            Combo_3: null,
            Combo_4: null,
            Combo_5: null,
            Combo_1_fast: null,
            Combo_2_fast: null,
            Combo_3_fast: null,
            Combo_4_fast: null,
            Combo_5_fast: null,
            Small_win_01: null,
            Small_win_02: null,
            Small_win_03: null,
            Big_win: null,
            ChangeWin: null,
            ChangeWin_2: null,
            Big_win_end: null,
            BONUS1: null,
            BONUS2: null,
            BONUS3: null,
            BONUS_Symbol_Change: null,
            BONUS_Symbol_UP: null,
            Fly: null,
            Multiplier01: null,
            Multiplier02: null,
            Multiplier03: null,
            Scatter_bell: null,
            FG_Into: null,
            FG_BGM: null,
            FG_End: null,
            Lady_01: null,
            Lady_02: null,
            Lady_03: null,
            Lady_BONUS1: null,
            Lady_BONUS2: null,
            Lady_BONUS3: null,
            FG_Into_Show: null,
            FG_Add_Start: null,
            FG_Add: null
          };
        };
        e.ConvertIndex2ColRow = function (t) {
          if (t >= 0 && t < e.COL * e.ROW) {
            var n = v2(-1, -1);
            n.y = t % e.ROW;
            n.x = (t - n.y) / e.ROW;
            return n;
          }
          return null;
        };
        return e;
      }();
      var _dec$1;
      var _dec2;
      var _dec3;
      var _dec4;
      var _class2$1;
      var _descriptor$1;
      var _descriptor2;
      var _descriptor3;
      var _descriptor4;
      Game_Define.Ver = "18";
      Game_Define.EXTRA_RATE = [1, 1.5];
      Game_Define.IsInFG = false;
      Game_Define.Symbol = Enum(Symbol);
      Game_Define.AnimEventName = {
        AnimEvetFunc: "AnimationEvent",
        GameIntro: "GameIntro_ShowBar"
      };
      Game_Define.ComboTag = Enum(ComboTag);
      Game_Define.BonusType = Enum(BonusType);
      Game_Define.FEATURE_BET_VALUE = 10;
      Game_Define.CHILI_SPICY_HOT = 3;
      Game_Define.BGM_FADE_IN_TIME = 1;
      Game_Define.BGM_FADE_OUT_TIME = 1;
      Game_Define.BGM_MAX_VOLUME = 1;
      Game_Define.MANUAL_STRINGS = ["String_01", "String_02", "String_03"];
      Game_Define.MANUAL_TITLE_STRING = "String_00";
      Game_Define.INIT_PLATE = [[Symbol.K, Symbol.STRAW_HAT, Symbol.STRAW_HAT, Symbol.LADY, Symbol.A], [Symbol.LADY, Symbol.STRAW_HAT, Symbol.STRAW_HAT, Symbol.LADY, Symbol.K], [Symbol.BOAT, Symbol.BEACH_BALL, Symbol.BEACH_BALL, Symbol.BOAT, Symbol.Q], [Symbol.SWIMMING_RING, Symbol.STARFISH, Symbol.STARFISH, Symbol.SWIMMING_RING, Symbol.A], [Symbol.SCATTER, Symbol.UMBRELLA, Symbol.UMBRELLA, Symbol.SCATTER, Symbol.K], [Symbol.K, Symbol.K, Symbol.A, Symbol.Q, Symbol.Q]];
      Game_Define.COL = 6;
      Game_Define.ROW = 5;
      Game_Define.MIN_FG_SYMBOL = 11;
      Game_Define.DEFAULT_TIME_SCALE = 1;
      Game_Define.HARD_STOP_TIME_SCALE = 1.5;
      Game_Define.BONUS_COL = 3;
      Game_Define.BONUS_ROW = 1;
      Game_Define.BONUS_INIT_PLATE = [[Symbol.BONUS_COCONUT_WATER], [Symbol.BONUS_COCKTAIL], [Symbol.BONUS_SHAVED_ICE]];
      Game_Define.BONUS_REEL_SYMBOLS = [[Symbol.BONUS_BUBBLES, Symbol.BONUS_COCONUT_WATER], [Symbol.BONUS_BUBBLES, Symbol.BONUS_COCKTAIL], [Symbol.BONUS_BUBBLES, Symbol.BONUS_SHAVED_ICE]];
      Game_Define.BonusMultiplier = [5, 10, 20];
      Game_Define.AudioFileRoot = "Sound/";
      Game_Define.AudioFilePath = {
        Debut: "Debut",
        MG_BGM: "MG_BGM",
        Spin: "Spin",
        Reel_Stop: "Reel_Stop",
        NearWin: "NearWin",
        Scatter1: "Scatter1",
        Scatter2: "Scatter2",
        Scatter3: "Scatter3",
        Combo_1: "Combo_1",
        Combo_2: "Combo_2",
        Combo_3: "Combo_3",
        Combo_4: "Combo_4",
        Combo_5: "Combo_5",
        Combo_1_fast: "Combo_1_fast",
        Combo_2_fast: "Combo_2_fast",
        Combo_3_fast: "Combo_3_fast",
        Combo_4_fast: "Combo_4_fast",
        Combo_5_fast: "Combo_5_fast",
        Small_win_01: "Small_win_01",
        Small_win_02: "Small_win_02",
        Small_win_03: "Small_win_03",
        Big_win: "Big_win",
        ChangeWin: "ChangeWin",
        ChangeWin_2: "ChangeWin_2",
        Big_win_end: "Big_win_end",
        BONUS1: "BONUS1",
        BONUS2: "BONUS2",
        BONUS3: "BONUS3",
        BONUS_Symbol_Change: "BONUS_Symbol_Change",
        BONUS_Symbol_UP: "BONUS_Symbol_UP",
        Fly: "Fly",
        Multiplier01: "Multiplier01",
        Multiplier02: "Multiplier02",
        Multiplier03: "Multiplier03",
        Scatter_bell: "Scatter_bell",
        FG_Into: "FG_Into",
        FG_BGM: "FG_BGM",
        FG_End: "FG_End",
        Lady_01: "Lady_01",
        Lady_02: "Lady_02",
        Lady_03: "Lady_03",
        Lady_BONUS1: "Lady_BONUS1",
        Lady_BONUS2: "Lady_BONUS2",
        Lady_BONUS3: "Lady_BONUS3",
        FG_Into_Show: "FG_Into_Show",
        FG_Add_Start: "FG_Add_Start",
        FG_Add: "FG_Add"
      };
      Game_Define.AudioClips = {
        Debut: null,
        MG_BGM: null,
        Spin: null,
        Reel_Stop: null,
        NearWin: null,
        Scatter1: null,
        Scatter2: null,
        Scatter3: null,
        Combo_1: null,
        Combo_2: null,
        Combo_3: null,
        Combo_4: null,
        Combo_5: null,
        Combo_1_fast: null,
        Combo_2_fast: null,
        Combo_3_fast: null,
        Combo_4_fast: null,
        Combo_5_fast: null,
        Small_win_01: null,
        Small_win_02: null,
        Small_win_03: null,
        Big_win: null,
        ChangeWin: null,
        ChangeWin_2: null,
        Big_win_end: null,
        BONUS1: null,
        BONUS2: null,
        BONUS3: null,
        BONUS_Symbol_Change: null,
        BONUS_Symbol_UP: null,
        Fly: null,
        Multiplier01: null,
        Multiplier02: null,
        Multiplier03: null,
        Scatter_bell: null,
        FG_Into: null,
        FG_BGM: null,
        FG_End: null,
        Lady_01: null,
        Lady_02: null,
        Lady_03: null,
        Lady_BONUS1: null,
        Lady_BONUS2: null,
        Lady_BONUS3: null,
        FG_Into_Show: null,
        FG_Add_Start: null,
        FG_Add: null
      };
      Game_Define.StringKey = {
        FEATURE_LEFT: "FEATURE_LEFT",
        FEATURE_RIGHT: "FEATURE_RIGHT"
      };
      Game_Define.SmallAward = [2, 4, 6];
      Game_Define.AWARD_SETTING = [{
        BetRate: 6,
        Lvl: 1
      }, {
        BetRate: 15,
        Lvl: 2
      }, {
        BetRate: 30,
        Lvl: 3
      }];
      Game_Define.BigWinEventName = "AnimationEvent";
      Game_Define.BigWinSound1 = "Sound1";
      Game_Define.BigWinSound2 = "Sound2";
      Game_Define.SpinClickEvent = 0;
      Game_Define.IsUsingItem = false;
      Game_Define.UsingItemReason = 0;
      Game_Define.UsingItemRemainTimes = 0;
      Game_Define.ItemAward = 0;
      Game_Define.IsShowItemEnd = false;
      Game_Define.MissionReward = 0;
      Game_Define.JpType = 0;
      Game_Define.JpWin = 0;
      Game_Define.FullJpWin = 0;
      Game_Define.FreeSpinRemain = 0;
      Game_Define.FreeSpinAward = 0;
      Game_Define.IsShowFreeSpinEnd = false;
      Game_Define.IsExtraBuyMode = true;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f8a555NWLhBkZGSOWixkbCo", "AddSpinDeclare", undefined);
      var property$1 = _decorator.property;
      _dec$1 = property$1({
        type: AddSpinDeclareSpine,
        tooltip: "Spine"
      });
      _dec2 = property$1({
        type: Sprite,
        tooltip: "語系字1"
      });
      _dec3 = property$1({
        type: Sprite,
        tooltip: "語系字2"
      });
      _dec4 = property$1({
        type: Label,
        tooltip: "局數"
      });
      _class2$1 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_txt1", _descriptor2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_txt2", _descriptor3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_numLabel", _descriptor4, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetTxt = function () {
          var e = node.GetGameAtlas();
          this.m_txt1.spriteFrame = e.getSpriteFrame("TXT_FG_AddSpins_01");
          this.m_txt2.spriteFrame = e.getSpriteFrame("TXT_FG_AddSpins_02");
        };
        n.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_numLabel.string = "+" + t;
                    node$1.Play(Game_Define.AudioClips.FG_Add);
                    this.node.active = true;
                    e.next = 5;
                    return this.m_spine.PlayStart();
                  case 5:
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
        n.PlayLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_spine.PlayLoop();
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
        n.PlayEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_spine.PlayEnd();
                  case 2:
                    this.node.active = false;
                  case 3:
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
        return t;
      }(Component);
      _descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "m_spine", [_dec$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2 = _applyDecoratedDescriptor(_class2$1.prototype, "m_txt1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3 = _applyDecoratedDescriptor(_class2$1.prototype, "m_txt2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4 = _applyDecoratedDescriptor(_class2$1.prototype, "m_numLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$2;
      var _dec2$1;
      var _dec3$1;
      var _dec4$1;
      var _class2$2;
      var _descriptor$2;
      var _descriptor2$1;
      var _descriptor3$1;
      var _descriptor4$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "18ebeGYtRVHFbpDdKwM1B+/", "Background", undefined);
      var property$2 = _decorator.property;
      _dec$2 = property$2({
        type: Node,
        tooltip: "MG 背景父節點"
      });
      _dec2$1 = property$2({
        type: Node,
        tooltip: "FG 背景父節點"
      });
      _dec3$1 = property$2({
        type: Node,
        tooltip: "MG 角色遮罩"
      });
      _dec4$1 = property$2({
        type: Node,
        tooltip: "FG 角色遮罩"
      });
      _class2$2 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_mgNode", _descriptor$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgNode", _descriptor2$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_mgCoverNodes", _descriptor3$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgCoverNodes", _descriptor4$1, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        t.prototype.SetBackground = function (e, t) {
          this.m_mgNode.active = !e;
          this.m_fgNode.active = e;
          this.m_mgCoverNodes.forEach(function (n) {
            return n.active = !e && !t;
          });
          this.m_fgCoverNodes.forEach(function (n) {
            return n.active = e && !t;
          });
        };
        return t;
      }(Component);
      _descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "m_mgNode", [_dec$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$1 = _applyDecoratedDescriptor(_class2$2.prototype, "m_fgNode", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$1 = _applyDecoratedDescriptor(_class2$2.prototype, "m_mgCoverNodes", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor4$1 = _applyDecoratedDescriptor(_class2$2.prototype, "m_fgCoverNodes", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var _dec$3;
      var _class$3;
      var _descriptor$3;
      var _class3$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "36958B5L/BFoaiYmCeMxVrb", "BonusNumbersSpine", undefined);
      var ccclass$3 = _decorator.ccclass;
      var property$3 = _decorator.property;
      _dec$3 = property$3({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3$1 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$3, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayBonusWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n, i) {
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    o = function (e) {
                      if ("Spawn" === e) {
                        if (n) {
                          n();
                        }
                      } else if ("AnimationEvent" === e && i) {
                        i();
                      }
                    };
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Bonus_Win, false, 0, o);
                  case 4:
                    this.node.active = false;
                  case 5:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayBonusWin2 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n, i, o) {
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    r = function (e) {
                      if ("Spawn" === e) {
                        if (i) {
                          i();
                        }
                      } else if ("AnimationEvent" === e && o) {
                        o();
                      }
                    };
                    if (!n) {
                      e.next = 7;
                      break;
                    }
                    e.next = 5;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Bonus_Win2_L, false, 0, r);
                  case 5:
                    e.next = 9;
                    break;
                  case 7:
                    e.next = 9;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Bonus_Win2_S, false, 0, r);
                  case 9:
                    this.node.active = false;
                  case 10:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i) {
            return e.apply(this, arguments);
          };
        }();
        return t;
      }(Component);
      _class3$1.AnimName = {
        Bonus_Win: "Bonus_Win",
        Bonus_Win2_L: "Bonus_Win2_L",
        Bonus_Win2_S: "Bonus_Win2_S"
      };
      _descriptor$3 = _applyDecoratedDescriptor(_class3$1.prototype, "m_spine", [_dec$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var BonusNumbersSpine = ccclass$3(_class$3 = _class3$1) || _class$3;
      var _dec$4;
      var _class$4;
      var _descriptor$4;
      var _class3$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1f836znT3VAOrUOazz2frZE", "BonusSpine", undefined);
      var ccclass$4 = _decorator.ccclass;
      var property$4 = _decorator.property;
      _dec$4 = property$4({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3$2 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$4, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayBonus01Win = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Bonus_01_Win, false);
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
        n.PlayBonus02Win = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Bonus_02_Win, false);
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
        n.PlayBonus03Win = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Bonus_03_Win, false);
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
        return t;
      }(Component);
      _class3$2.AnimName = {
        Bonus_01_Win: "Bonus_01_Win",
        Bonus_02_Win: "Bonus_02_Win",
        Bonus_03_Win: "Bonus_03_Win"
      };
      _descriptor$4 = _applyDecoratedDescriptor(_class3$2.prototype, "m_spine", [_dec$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var BonusSpine = ccclass$4(_class$4 = _class3$2) || _class$4;
      var _dec$5;
      var _dec2$2;
      var _dec3$2;
      var _class2$5;
      var _descriptor$5;
      var _descriptor2$2;
      var _descriptor3$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "18f71P3R8hBOr7RUgpIV0Ib", "Bonus", undefined);
      var property$5 = _decorator.property;
      _dec$5 = property$5({
        type: BonusSpine,
        tooltip: "bonus特效spine"
      });
      _dec2$2 = property$5({
        type: BonusNumbersSpine,
        tooltip: "bonus numbers特效spine"
      });
      _dec3$2 = property$5({
        type: Label,
        tooltip: "bonus numbers文字"
      });
      _class2$5 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_bonusSpine", _descriptor$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_bonusNumbersSpine", _descriptor2$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_bonusNumbersLabel", _descriptor3$2, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_isAlreadyPlayLady_01 = false;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
        };
        n.StartSpin = function () {
          this.m_isAlreadyPlayLady_01 = false;
        };
        n.PlayBonus01Win = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            var r;
            var a = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.m_isAlreadyPlayLady_01) {
                      this.m_isAlreadyPlayLady_01 = true;
                      node$1.Play(Game_Define.AudioClips.Lady_01);
                    }
                    e.next = 3;
                    return this.m_gameView.CharacterSpine.PlayBonus1(Game_Define.IsInFG);
                  case 3:
                    i = this.node.getComponent(UITransform).convertToNodeSpaceAR(this.m_gameView.BonusSlotReels.GetSymbolNode(0, 0).getWorldPosition());
                    this.m_bonusSpine.node.setPosition(i);
                    node$1.Play(Game_Define.AudioClips.BONUS1);
                    node$1.Play(Game_Define.AudioClips.Lady_BONUS1);
                    this.node.active = true;
                    (o = []).push(this.m_bonusSpine.PlayBonus01Win());
                    r = this.node.getComponent(UITransform).convertToNodeSpaceAR(this.m_gameView.SlotReels.node.getWorldPosition());
                    o.push(this.PlayFly(this.m_bonusSpine.node, 1, r));
                    this.m_bonusNumbersLabel.string = "+" + t;
                    o.push(this.m_bonusNumbersSpine.PlayBonusWin(function () {
                      a.m_bonusNumbersLabel.node.active = true;
                    }, function () {
                      a.m_gameView.EffectPlate.PlayChangeSymbol(Game_Define.ComboTag.TagAdd, n);
                    }));
                    e.next = 16;
                    return Promise.all(o);
                  case 16:
                    this.m_bonusNumbersLabel.node.active = false;
                    this.node.active = false;
                  case 18:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayBonus02Win = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.m_isAlreadyPlayLady_01) {
                      this.m_isAlreadyPlayLady_01 = true;
                      node$1.Play(Game_Define.AudioClips.Lady_01);
                    }
                    e.next = 3;
                    return this.m_gameView.CharacterSpine.PlayBonus2(Game_Define.IsInFG);
                  case 3:
                    n = this.node.getComponent(UITransform).convertToNodeSpaceAR(this.m_gameView.BonusSlotReels.GetSymbolNode(1, 0).getWorldPosition());
                    this.m_bonusSpine.node.setPosition(n);
                    node$1.Play(Game_Define.AudioClips.BONUS2);
                    node$1.Play(Game_Define.AudioClips.Lady_BONUS2);
                    this.node.active = true;
                    (i = []).push(this.m_bonusSpine.PlayBonus02Win());
                    o = this.node.getComponent(UITransform).convertToNodeSpaceAR(this.m_gameView.SlotReels.node.getWorldPosition());
                    i.push(this.PlayFly(this.m_bonusSpine.node, 1, o));
                    i.push(this.m_bonusNumbersSpine.PlayBonusWin());
                    i.push(this.m_gameView.EffectPlate.PlayUpgrade(Game_Define.ComboTag.TagUp, t));
                    e.next = 16;
                    return Promise.all(i);
                  case 16:
                    this.node.active = false;
                  case 17:
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
        n.PlayBonus03Win = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var o;
            var r;
            var a;
            var s = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.m_isAlreadyPlayLady_01) {
                      this.m_isAlreadyPlayLady_01 = true;
                      node$1.Play(Game_Define.AudioClips.Lady_01);
                    }
                    e.next = 3;
                    return this.m_gameView.CharacterSpine.PlayBonus3(Game_Define.IsInFG);
                  case 3:
                    if (1 == this.m_gameView.IsShowWin) {
                      e.next = 6;
                      break;
                    }
                    e.next = 6;
                    return this.m_gameView.PlayWinFadeIn(t);
                  case 6:
                    o = this.node.getComponent(UITransform).convertToNodeSpaceAR(this.m_gameView.BonusSlotReels.GetSymbolNode(2, 0).getWorldPosition());
                    this.m_bonusSpine.node.setPosition(o);
                    node$1.Play(Game_Define.AudioClips.BONUS3);
                    node$1.Play(Game_Define.AudioClips.Lady_BONUS3);
                    this.node.active = true;
                    (r = []).push(this.m_bonusSpine.PlayBonus03Win());
                    a = this.node.getComponent(UITransform).convertToNodeSpaceAR(this.m_gameView.SlotReels.node.getWorldPosition());
                    r.push(this.PlayFly(this.m_bonusSpine.node, 1, a));
                    this.m_bonusNumbersLabel.string = "X" + n;
                    r.push(this.m_bonusNumbersSpine.PlayBonusWin2(this.m_gameView.IsLandscape, function () {
                      s.m_bonusNumbersLabel.node.active = true;
                    }, function () {
                      s.m_gameView.PlayWinChange(i, n);
                    }));
                    e.next = 19;
                    return Promise.all(r);
                  case 19:
                    this.m_bonusNumbersLabel.node.active = false;
                    this.node.active = false;
                  case 21:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayFly = function (e, t, n) {
          return new Promise(function (i) {
            tween(e).to(t, {
              position: n
            }).call(function () {
              i();
            }).start();
          });
        };
        return t;
      }(Component);
      _descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "m_bonusSpine", [_dec$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$2 = _applyDecoratedDescriptor(_class2$5.prototype, "m_bonusNumbersSpine", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$2 = _applyDecoratedDescriptor(_class2$5.prototype, "m_bonusNumbersLabel", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$6;
      var _class$6;
      var _descriptor$6;
      var _class3$3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "05218NWA6xNBpBrDph8JiCT", "BonusBubbleSpine", undefined);
      var ccclass$6 = _decorator.ccclass;
      var property$6 = _decorator.property;
      _dec$6 = property$6({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3$3 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$6, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayStart1 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Start_1, false);
                  case 3:
                    this.PlayLoop();
                  case 4:
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
        n.PlayStart2 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Start_2, false);
                  case 3:
                    this.PlayLoop();
                  case 4:
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
        n.PlayStart3 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Start_3, false);
                  case 3:
                    this.PlayLoop();
                  case 4:
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
        n.PlayLoop = function () {
          this.node.active = true;
          SpineKit.PlayAnimation(this.m_spine, t.AnimName.Loop, true);
        };
        n.Hide = function () {
          this.node.active = false;
        };
        return t;
      }(Component);
      _class3$3.AnimName = {
        Loop: "Loop",
        Start_1: "Start_1",
        Start_2: "Start_2",
        Start_3: "Start_3"
      };
      _descriptor$6 = _applyDecoratedDescriptor(_class3$3.prototype, "m_spine", [_dec$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var BonusBubbleSpine = ccclass$6(_class$6 = _class3$3) || _class$6;
      var _dec$7;
      var _dec2$3;
      var _dec3$3;
      var _class2$7;
      var _descriptor$7;
      var _descriptor2$3;
      var _descriptor3$3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6d7e6Ldl3FNVZwWPsTM+5cW", "BonusBubble", undefined);
      var property$7 = _decorator.property;
      _dec$7 = property$7({
        type: BonusBubbleSpine,
        tooltip: "bonus泡泡spine1"
      });
      _dec2$3 = property$7({
        type: BonusBubbleSpine,
        tooltip: "bonus泡泡spine2"
      });
      _dec3$3 = property$7({
        type: BonusBubbleSpine,
        tooltip: "bonus泡泡spine3"
      });
      _class2$7 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine1", _descriptor$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_spine2", _descriptor2$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_spine3", _descriptor3$3, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayStart1 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_spine1.PlayStart1();
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
        n.PlayStart2 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_spine2.PlayStart2();
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
        n.PlayStart3 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_spine3.PlayStart3();
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
        n.PlayLoop = function () {
          this.m_spine1.PlayLoop();
          this.m_spine2.PlayLoop();
          this.m_spine3.PlayLoop();
        };
        n.HideAll = function () {
          this.m_spine1.Hide();
          this.m_spine2.Hide();
          this.m_spine3.Hide();
        };
        return t;
      }(Component);
      _descriptor$7 = _applyDecoratedDescriptor(_class2$7.prototype, "m_spine1", [_dec$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$3 = _applyDecoratedDescriptor(_class2$7.prototype, "m_spine2", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$3 = _applyDecoratedDescriptor(_class2$7.prototype, "m_spine3", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$8;
      var _dec2$4;
      var _class$8;
      var _descriptor$8;
      var _descriptor2$4;
      var _class3$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0ca9d85VaxPebozM/p5+G3s", "BonusSymbolEffect", undefined);
      var ccclass$8 = _decorator.ccclass;
      var property$8 = _decorator.property;
      _dec$8 = property$8({
        type: Number,
        tooltip: "Symbol"
      });
      _dec2$4 = property$8({
        type: sp.Skeleton,
        tooltip: "Symbol動畫"
      });
      _class3$4 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_symbol", _descriptor$8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_spine", _descriptor2$4, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    e.next = 3;
                    return this.PlayAnimation(t.AnimName.Stop, false);
                  case 3:
                    this.node.active = false;
                  case 4:
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n) {
            return e.apply(this, arguments);
          };
        }();
        _createClass(t, [{
          key: "Symbol",
          get: function () {
            return this.m_symbol;
          }
        }, {
          key: "Spine",
          get: function () {
            return this.m_spine;
          }
        }]);
        return t;
      }(Component);
      _class3$4.AnimName = {
        Stop: "Stop"
      };
      _descriptor$8 = _applyDecoratedDescriptor(_class3$4.prototype, "m_symbol", [_dec$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -1;
        }
      });
      _descriptor2$4 = _applyDecoratedDescriptor(_class3$4.prototype, "m_spine", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var BonusSymbolEffect = ccclass$8(_class$8 = _class3$4) || _class$8;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "7f445TweKZNYptBsFLlqzr2", "NodePool", undefined);
      var NodePool = function () {
        function e(e) {
          this.m_prefabSample = null;
          this.m_availableNodes = Array();
          this.m_totalCount = 0;
          this.m_prefabSample = e;
        }
        var t = e.prototype;
        t.BorrowPrefab = function () {
          if (this.m_availableNodes.length <= 0) {
            var e = instantiate(this.m_prefabSample);
            this.m_totalCount++;
            e.active = true;
            return e;
          }
          var t = this.m_availableNodes.pop();
          t.active = true;
          return t;
        };
        t.ReturnPrefab = function (e) {
          e.active = false;
          e.removeFromParent();
          this.m_availableNodes.push(e);
        };
        _createClass(e, [{
          key: "PrefabCount",
          get: function () {
            return this.m_totalCount;
          }
        }]);
        return e;
      }();
      var _dec$9;
      var _class2$9;
      var _descriptor$9;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5b82cawDcNP1Iiek9WjQSPs", "BonusEffectPlate", undefined);
      var property$9 = _decorator.property;
      _dec$9 = property$9({
        type: Prefab,
        tooltip: "symbol動畫"
      });
      _class2$9 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_symbolEftPrefabs", _descriptor$9, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_symbolEffects = new Array();
          t.m_symbolEffectPoolList = [];
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          for (var t = 0; t < this.m_symbolEftPrefabs.length; t++) {
            this.m_symbolEffectPoolList.push(new NodePool(this.m_symbolEftPrefabs[t]));
          }
          this.SetInitPlate();
        };
        n.SetInitPlate = function () {
          for (var e = 0; e < Game_Define.BONUS_COL; e++) {
            this.m_symbolEffects[e] = [];
          }
        };
        n.StartSpin = function () {
          for (var e = 0; e < Game_Define.BONUS_COL; e++) {
            for (var t = 0; t < Game_Define.BONUS_ROW; t++) {
              if (this.m_symbolEffects[e][t]) {
                this.RemoveSymbolEffect(e, t);
              }
            }
          }
        };
        n.ShowNewPlate = function (e) {
          for (var t = 0; t < Game_Define.BONUS_COL; t++) {
            for (var n = 0; n < Game_Define.BONUS_ROW; n++) {
              if (e[t][n] !== Game_Define.Symbol.BONUS_BUBBLES) {
                this.CreateSymbolEffect(t, n, e[t][n]);
              }
            }
          }
        };
        n.GetSymbolEffects = function () {
          return this.m_symbolEffects;
        };
        n.GetSymbolEffect = function (e, t) {
          return this.m_symbolEffects[e][t];
        };
        n.RemoveSymbolEffect = function (e, t) {
          var n = this.m_symbolEffects[e][t];
          this.m_symbolEffects[e][t] = null;
          var i = n.getComponent(BonusSymbolEffect).Symbol - Game_Define.MIN_FG_SYMBOL;
          this.m_symbolEffectPoolList[i].ReturnPrefab(n);
        };
        n.CreateSymbolEffect = function (e, t, n) {
          var i = this.m_gameView.BonusSlotReels.GetSymbolPosition(e, t);
          var o = n - Game_Define.MIN_FG_SYMBOL;
          var r = this.m_symbolEffectPoolList[o].BorrowPrefab();
          r.active = false;
          this.m_symbolEffects[e][t] = r;
          this.node.addChild(r);
          r.setPosition(i);
          return r;
        };
        n.PlayStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_symbolEffects[t][n].getComponent(BonusSymbolEffect).PlayStop();
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n) {
            return e.apply(this, arguments);
          };
        }();
        return t;
      }(Component);
      _descriptor$9 = _applyDecoratedDescriptor(_class2$9.prototype, "m_symbolEftPrefabs", [_dec$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var _dec$a;
      var _dec2$5;
      var _dec3$4;
      var _class$a;
      var _class2$a;
      var _descriptor$a;
      var _descriptor2$5;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "75635A/97pJ5KhlVFLjYKv6", "SymbolControl", undefined);
      var ccclass$a = _decorator.ccclass;
      var property$a = _decorator.property;
      _dec$a = ccclass$a("SymbolControl");
      _dec2$5 = property$a({
        type: SpriteFrame,
        tooltip: "Symbol 圖片"
      });
      _dec3$4 = property$a({
        type: Sprite,
        tooltip: "Sprite 組件"
      });
      _class2$a = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_symbolSpriteFrames", _descriptor$a, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_symbolSprite", _descriptor2$5, _assertThisInitialized(t));
          t.m_symbolId = 0;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetSymbol = function (e) {
          this.m_symbolId = e;
          this.m_symbolSprite.spriteFrame = this.m_symbolSpriteFrames[this.m_symbolId];
        };
        n.GetSymbolId = function () {
          return this.m_symbolId;
        };
        n.SetDark = function (e) {
          var t = e ? 120 : 255;
          this.SetColor(t);
        };
        n.SetColor = function (e) {
          this.m_symbolSprite.color = color(e, e, e);
        };
        return t;
      }(Component);
      _descriptor$a = _applyDecoratedDescriptor(_class2$a.prototype, "m_symbolSpriteFrames", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$5 = _applyDecoratedDescriptor(_class2$a.prototype, "m_symbolSprite", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var SymbolControl = _dec$a(_class$a = _class2$a) || _class$a;
      var _dec$b;
      var _class2$b;
      var _descriptor$b;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4bb2exgq0NFnYRWkgih24td", "BonusSlotReels", undefined);
      var property$b = _decorator.property;
      _dec$b = property$b({
        type: Prefab,
        tooltip: "動態生成的symbol基底Sprite"
      });
      _class2$b = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_symbolPrefab", _descriptor$b, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_viewSize = null;
          t.m_symbolSize = null;
          t.m_symbolPool = null;
          t.m_columnSymbols = [];
          t.m_upperSymbols = [];
          t.m_lowerSymbols = [];
          t.m_reelSymbolIndex = [0, 0, 0];
          t.m_plate = new Array();
          t.m_isHardStop = false;
          t.m_reelPositionOffset = [v3(0, 0), v3(0, 0), v3(0, 0)];
          t.m_reelStopTime = new Array();
          t.m_reelPreTime = new Array();
          t.m_isChangeSymbol = {};
          t.m_isChangeToFinalSymbol = new Array();
          t.m_isPlaySymbolAnim = new Array();
          t.m_time = 0;
          t.m_stopTime = 0;
          t.m_riseTime = 0;
          t.m_spinBufferTime01 = .1;
          t.m_spinBufferTime02 = .1;
          t.m_downLength = 12;
          t.m_spinSpeed = .25;
          t.m_upLength = 0;
          t.m_numberOfSymbol = 0;
          t.m_timesOfBaseSpin = 1.25;
          t.m_spinIntervalTimes = 1;
          t.m_spinDelayTime = 0;
          t.m_isStop = false;
          t.m_isClickStopBtn = false;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          this.m_viewSize = this.node.getComponent(UITransform).contentSize;
          this.m_symbolSize = new Size(this.m_viewSize.width / Game_Define.BONUS_COL, this.m_viewSize.height / Game_Define.BONUS_ROW);
          this.m_plate = Game_Define.BONUS_INIT_PLATE;
          this.m_symbolPool = new NodePool(this.m_symbolPrefab);
          this.CreateSymbol();
        };
        n.CreateSymbol = function () {
          for (var e = 0; e < Game_Define.BONUS_COL; e++) {
            this.m_isChangeToFinalSymbol.push(false);
            this.m_isPlaySymbolAnim.push(false);
            this.m_reelStopTime.push(null);
            this.m_reelPreTime.push(null);
            this.m_columnSymbols.push(new Array());
            this.SymbolInit(this.m_columnSymbols[e], this.m_plate[e]);
            var t = this.m_symbolSize.width * (e + .5) + this.m_reelPositionOffset[e].x - this.m_viewSize.width / 2;
            for (var n = 0; n < Game_Define.BONUS_ROW; n++) {
              this.m_columnSymbols[e][n].setPosition(v3(t, 0));
              this.m_columnSymbols[e][n].name = this.m_numberOfSymbol.toString();
              this.node.addChild(this.m_columnSymbols[e][n]);
            }
            this.m_numberOfSymbol += 1;
          }
          for (var i = 0; i < Game_Define.BONUS_COL; i++) {
            var o = this.m_symbolPool.BorrowPrefab();
            this.m_upperSymbols.push(o);
            this.SetSymbol(o, this.RandSymbol());
            var r = this.m_symbolSize.width * (i + .5) + this.m_reelPositionOffset[i].x - this.m_viewSize.width / 2;
            var a = this.m_symbolSize.height * (Game_Define.BONUS_ROW + .5) + this.m_reelPositionOffset[i].y - this.m_viewSize.height / 2;
            o.setPosition(v3(r, a));
            o.name = (this.m_numberOfSymbol + i).toString();
            this.node.addChild(o);
            a = -.5 * this.m_symbolSize.height + this.m_reelPositionOffset[i].y - this.m_viewSize.height / 2;
            var s = this.m_symbolPool.BorrowPrefab();
            this.m_lowerSymbols.push(s);
            this.SetSymbol(s, this.RandSymbol());
            s.setPosition(v3(r, a));
            s.name = (-(i + 1)).toString();
            this.node.addChild(s);
          }
        };
        n.GetRandomSymbol = function (e) {
          var t;
          var n = this.m_reelSymbolIndex[e];
          var i = Math.random();
          if (n > 0 && i < 1) {
            t = Game_Define.BONUS_REEL_SYMBOLS[e][n];
            this.m_reelSymbolIndex[e] = 0;
          } else {
            t = Game_Define.BONUS_REEL_SYMBOLS[e][0];
            this.m_reelSymbolIndex[e] = 1;
          }
          return t;
        };
        n.GetSymbolList = function () {
          return [Game_Define.Symbol.BONUS_BUBBLES];
        };
        n.RandSymbol = function () {
          var e = this.GetSymbolList();
          return e[Math.floor(Math.random() * e.length)];
        };
        n.StartSpin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var o;
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_isHardStop = t;
                    this.m_time = 0;
                    this.m_stopTime = 0;
                    this.m_isStop = false;
                    this.m_isClickStopBtn = false;
                    for (n = 0; n < Game_Define.BONUS_COL; n++) {
                      this.m_reelStopTime[n] = null;
                      this.m_reelPreTime[n] = null;
                    }
                    for (i = 0; i < this.m_isChangeToFinalSymbol.length; i++) {
                      this.m_isChangeToFinalSymbol[i] = false;
                      this.m_isPlaySymbolAnim[i] = false;
                    }
                    for (o = 0; o < Game_Define.BONUS_COL; o++) {
                      for (r = 0; r < Game_Define.BONUS_ROW; r++) {
                        this.GetSymbolNode(o, r).active = true;
                      }
                    }
                    this.SetUpperAndLowerSymbolActive(true);
                  case 9:
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
        n.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          if (0 != this.m_stopTime) {
            var e = Math.ceil(this.m_time / this.m_spinSpeed);
            var t = (e + 1) * this.m_spinSpeed + this.m_spinDelayTime + this.m_spinBufferTime01 + this.m_spinBufferTime02 + 0 * this.m_spinSpeed * (Game_Define.BONUS_COL - 1);
            if (t < this.m_stopTime) {
              this.m_stopTime = node$2.strip(t);
            }
            var n = (e + 1) * this.m_spinSpeed;
            for (var i = 0; i < Game_Define.BONUS_COL; i++) {
              if (this.m_reelStopTime[i] > n) {
                this.m_reelStopTime[i] = node$2.strip(n);
                this.m_reelPreTime[i] = node$2.strip(e * this.m_spinSpeed);
              }
            }
          }
        };
        n.GetSymbolNode = function (e, t) {
          return e >= 0 && e < Game_Define.BONUS_COL && t >= 0 && t < Game_Define.BONUS_ROW && this.m_columnSymbols[e][t] ? this.m_columnSymbols[e][t] : null;
        };
        n.Spin = function (e) {
          this.m_time = node$2.strip(this.m_time + e);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple();
            if (this.m_time >= this.m_stopTime && 0 != this.m_stopTime) {
              this.m_isStop = true;
              this.SetUpperAndLowerSymbolActive(false);
            }
          }
        };
        n.SetUpperAndLowerSymbolActive = function (e) {
          for (var t = 0; t < Game_Define.BONUS_COL; t++) {
            this.m_upperSymbols[t].active = e;
            this.m_lowerSymbols[t].active = e;
          }
        };
        n.Spin_RealSpinMultiple = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = this.m_spinSpeed;
                    n = function (e) {
                      o.SpinMoving(e, 0, o.m_columnSymbols[e][0], t, function () {
                        o.PlayStopColumn(e);
                      });
                      o.SpinMoving(e, Game_Define.BONUS_ROW, o.m_upperSymbols[e], t);
                      o.SpinMoving(e, -1, o.m_lowerSymbols[e], t);
                    };
                    for (i = 0; i < Game_Define.BONUS_COL; i++) {
                      n(i);
                    }
                  case 3:
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
        n.SpinMoving = function (e, t, n, i, o) {
          var r = this.m_time;
          var a = this.m_reelStopTime[e];
          var s = this.m_riseTime * Game_Define.BONUS_COL;
          var l = this.m_symbolSize.height * (Game_Define.BONUS_ROW + 2);
          var c = this.m_symbolSize.height * (Game_Define.BONUS_ROW - t + .5);
          var u = this.m_symbolSize.width * (e + .5) + this.m_reelPositionOffset[e].x - this.m_viewSize.width / 2;
          var p = this.m_symbolSize.height * (Game_Define.BONUS_ROW - (t + .5)) + this.m_reelPositionOffset[e].y - this.m_viewSize.height / 2;
          var m = 0;
          if (r < this.m_riseTime * e) {
            ;
          } else if (r < this.m_riseTime * (e + 1)) {
            m = (r - this.m_riseTime * e) / this.m_riseTime * this.m_upLength;
          } else if (r < s) {
            m = this.m_upLength;
          } else if (null == a || r < a + s) {
            var _ = (r - s) % i / i * l;
            m = -this.GetMovelength(_, c, l, e, t, n);
          } else if (r < a + s + this.m_spinBufferTime01) {
            m = -(r - a - s) / this.m_spinBufferTime01 * this.m_downLength;
            this.CheckChangeToFinalSymbol(e, t, n);
          } else if (r < a + s + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
            m = (r - a - s - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
            m -= this.m_downLength;
            this.CheckChangeToFinalSymbol(e, t, n);
          } else {
            this.CheckChangeToFinalSymbol(e, t, n);
          }
          n.setPosition(u, p + m);
          if (a && r >= a + s + this.m_spinBufferTime01 + this.m_spinBufferTime02 && o) {
            o();
          }
        };
        n.GetMovelength = function (e, t, n, i, o, r) {
          var a = Number(r.name);
          if (e >= t) {
            e -= n;
            if (this.m_isChangeSymbol[a]) {
              this.m_isChangeSymbol[a] = false;
              this.ChangeSymbol(i, o, r, false);
            }
          } else {
            this.m_isChangeSymbol[a] = true;
          }
          return e;
        };
        n.ChangeSymbol = function (e, t, n, i) {
          var o = this.m_reelPreTime[e];
          var r = this.m_riseTime;
          if (o && this.m_time - r > o || i) {
            if (t >= 0 && t < Game_Define.BONUS_ROW) {
              this.SetSymbol(n, this.m_plate[e][t]);
            } else {
              var a = this.GetRandomSymbol(e);
              this.SetSymbol(n, a);
            }
          } else {
            var s = this.GetRandomSymbol(e);
            this.SetSymbol(n, s);
          }
        };
        n.CheckChangeToFinalSymbol = function (e, t, n) {
          var i = Number(n.name);
          if (!this.m_isChangeToFinalSymbol[i]) {
            this.m_isChangeToFinalSymbol[i] = true;
            this.ChangeSymbol(e, t, n, true);
          }
        };
        n.SetPlateInfo = function (e) {
          this.m_plate = JSON.parse(JSON.stringify(e));
          this.m_plate.splice(Game_Define.BONUS_COL);
          this.m_gameView.BonusEffectPlate.ShowNewPlate(e);
          if (!Game_Define.IsInFG) {
            this.SetStopInfo();
          }
        };
        n.SetStopInfo = function () {
          var e = this.m_riseTime * Game_Define.BONUS_COL;
          var t = Math.ceil((this.m_time - e) / this.m_spinSpeed);
          if (this.m_isClickStopBtn) {
            this.m_stopTime = node$2.strip(this.m_spinSpeed * (t + 1) + this.m_spinDelayTime + e + this.m_spinBufferTime01 + this.m_spinBufferTime02 + 0);
            for (var n = 0; n < Game_Define.BONUS_COL; n++) {
              this.m_reelStopTime[n] = node$2.strip(this.m_spinSpeed * t + 1);
              this.m_reelPreTime[n] = node$2.strip(this.m_spinSpeed * t);
            }
          } else {
            this.m_stopTime = node$2.strip(this.m_spinSpeed * (t + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (Game_Define.BONUS_COL - 1) + this.m_spinDelayTime + e + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var i = 0; i < Game_Define.BONUS_COL; i++) {
              this.m_reelStopTime[i] = node$2.strip(this.m_spinSpeed * (t + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * i);
              this.m_reelPreTime[i] = node$2.strip(this.m_spinSpeed * (t + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (i - 1));
            }
          }
        };
        n.PlayStopColumn = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var o;
            var r;
            var a;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = [];
                    for (i = 0; i < Game_Define.BONUS_ROW; i++) {
                      if ((o = this.GetSymbolNode(t, i)).getComponent(SymbolControl).GetSymbolId() !== Game_Define.Symbol.BONUS_BUBBLES) {
                        o.active = false;
                        n.push(this.m_gameView.BonusEffectPlate.PlayStop(t, i));
                      }
                    }
                    e.next = 4;
                    return Promise.all(n);
                  case 4:
                    for (r = 0; r < Game_Define.BONUS_ROW; r++) {
                      if ((a = this.GetSymbolNode(t, r)).getComponent(SymbolControl).GetSymbolId() !== Game_Define.Symbol.BONUS_BUBBLES) {
                        a.active = true;
                      }
                    }
                  case 5:
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
        n.RecoverPlate = function (e) {
          for (var t = 0; t < Game_Define.BONUS_COL; t++) {
            for (var n = 0; n < Game_Define.BONUS_ROW; n++) {
              this.SetSymbol(this.m_columnSymbols[t][n], e[t][n]);
              this.m_columnSymbols[t][n].setPosition(this.GetSymbolPosition(t, n));
            }
            this.m_upperSymbols[t].setPosition(this.GetSymbolPosition(t, Game_Define.BONUS_ROW));
            this.m_upperSymbols[t].active = false;
            this.m_lowerSymbols[t].setPosition(this.GetSymbolPosition(t, -1));
            this.m_lowerSymbols[t].active = false;
          }
        };
        n.GetSymbolPosition = function (e, t) {
          var n = this.m_symbolSize.width * (e + .5) + this.m_reelPositionOffset[e].x - this.m_viewSize.width / 2;
          var i = this.m_symbolSize.height * (t + .5) + this.m_reelPositionOffset[e].y - this.m_viewSize.height / 2;
          return new Vec3(n, i);
        };
        n.HideSymbolNode = function (e, t) {
          this.GetSymbolNode(e, t).active = false;
        };
        n.ShowSymbolNode = function (e, t) {
          this.GetSymbolNode(e, t).active = true;
        };
        n.FGLockSymbols = function () {
          for (var e = 0; e < Game_Define.BONUS_COL; e++) {
            this.SetSymbol(this.m_columnSymbols[e][0], Game_Define.Symbol.BONUS_COCONUT_WATER + e);
          }
        };
        n.SymbolInit = function (e, t) {
          for (var n = 0; n < t.length; n++) {
            e.push(this.m_symbolPool.BorrowPrefab());
          }
          this.SetSymbols(e, t);
        };
        n.SetSymbol = function (e, t) {
          if (!(null === e && undefined === e)) {
            e.getComponent(SymbolControl).SetSymbol(t);
          }
        };
        n.SetSymbols = function (e, t) {
          for (var n = 0; n < t.length; n++) {
            if (!e[n]) {
              e[n] = this.GetNewSymbolNode();
            }
            this.SetSymbol(e[n], t[n]);
          }
        };
        n.SetDark = function (e, t) {
          for (var n = 0; n < Game_Define.ROW; n++) {
            var i = t ? 120 : 255;
            if (e[n].active) {
              this.SetColor(e[n], i);
            }
          }
        };
        n.SetActive = function (e, t) {
          for (var n = 0; n < e.length; n++) {
            e[n].active = t;
          }
        };
        n.GetNewSymbolNode = function () {
          var e = this.m_symbolPool.BorrowPrefab();
          if (!e.parent) {
            this.node.addChild(e);
          }
          return e;
        };
        n.SetColor = function (e, t) {
          if (e.getComponent(UIRenderer)) {
            e.getComponent(UIRenderer).color = color(t, t, t);
          }
        };
        _createClass(t, [{
          key: "IsStop",
          get: function () {
            return this.m_isStop;
          }
        }, {
          key: "IsClickStopBtn",
          get: function () {
            return this.m_isClickStopBtn;
          }
        }, {
          key: "IsHardStop",
          get: function () {
            return this.m_isHardStop;
          }
        }]);
        return t;
      }(Component);
      _descriptor$b = _applyDecoratedDescriptor(_class2$b.prototype, "m_symbolPrefab", [_dec$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$c;
      var _class$c;
      var _descriptor$c;
      var _class3$5;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "68cc2E0UmJBXo1Qoxwm1ywJ", "CounterSpine", undefined);
      var ccclass$c = _decorator.ccclass;
      var property$c = _decorator.property;
      _dec$c = property$c({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3$5 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$c, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayFGStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!n) {
                      e.next = 5;
                      break;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.FG_Start_L, false);
                  case 3:
                    e.next = 7;
                    break;
                  case 5:
                    e.next = 7;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.FG_Start_S, false);
                  case 7:
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
        n.PlayFGIdle = function (e) {
          if (e) {
            SpineKit.PlayAnimation(this.m_spine, t.AnimName.FG_Idle_L, true);
          } else {
            SpineKit.PlayAnimation(this.m_spine, t.AnimName.FG_Idle_S, true);
          }
        };
        n.PlayFGHit = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!n) {
                      e.next = 5;
                      break;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.FG_Hit_L, false);
                  case 3:
                    e.next = 7;
                    break;
                  case 5:
                    e.next = 7;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.FG_Hit_S, false);
                  case 7:
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
        return t;
      }(Component);
      _class3$5.AnimName = {
        FG_Hit_L: "FG_Hit_L",
        FG_Hit_S: "FG_Hit_S",
        FG_Idle_L: "FG_Idle_L",
        FG_Idle_S: "FG_Idle_S",
        FG_Start_L: "FG_Start_L",
        FG_Start_S: "FG_Start_S"
      };
      _descriptor$c = _applyDecoratedDescriptor(_class3$5.prototype, "m_spine", [_dec$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var CounterSpine = ccclass$c(_class$c = _class3$5) || _class$c;
      var _dec$d;
      var _dec2$6;
      var _dec3$5;
      var _dec4$2;
      var _dec5;
      var _dec6;
      var _dec7;
      var _dec8;
      var _dec9;
      var _class2$d;
      var _descriptor$d;
      var _descriptor2$6;
      var _descriptor3$4;
      var _descriptor4$2;
      var _descriptor5;
      var _descriptor6;
      var _descriptor7;
      var _descriptor8;
      var _descriptor9;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "81d1fccuVhOyZduyklsKUoh", "Counter", undefined);
      var property$d = _decorator.property;
      _dec$d = property$d({
        type: CounterSpine,
        tooltip: "Counter動畫"
      });
      _dec2$6 = property$d({
        type: Sprite,
        tooltip: "FG語系字1"
      });
      _dec3$5 = property$d({
        type: Label,
        tooltip: "FG剩餘局數 / FG總局數 文字"
      });
      _dec4$2 = property$d({
        type: Label,
        tooltip: "加局字型顏色"
      });
      _dec5 = property$d({
        type: Node,
        tooltip: "MG_L 衝浪板節點"
      });
      _dec6 = property$d({
        type: Node,
        tooltip: "FG_L 衝浪板節點"
      });
      _dec7 = property$d({
        type: Node,
        tooltip: "FG_S 衝浪板節點"
      });
      _dec8 = property$d({
        type: Node,
        tooltip: "MG 顯示控制"
      });
      _dec9 = property$d({
        type: Node,
        tooltip: "FG 顯示控制"
      });
      _class2$d = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_counterSpine", _descriptor$d, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgTxt1", _descriptor2$6, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgCounterLabel", _descriptor3$4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgCounterAddLabel", _descriptor4$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_mgLNode", _descriptor5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgLNode", _descriptor6, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgSNode", _descriptor7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_mgNode", _descriptor8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgNode", _descriptor9, _assertThisInitialized(t));
          t.m_fgTotalRound = -1;
          t.m_fgRemainRound = -1;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetTxt = function () {
          var e = node.GetGameAtlas();
          this.m_fgTxt1.spriteFrame = e.getSpriteFrame("TXT_FG_Counter_01");
        };
        n.SetView = function (e) {
          this.m_mgNode.active = !e;
          this.m_fgNode.active = e;
        };
        n.OnRotation = function (e, t) {
          this.m_mgNode.active = !e;
          this.m_fgNode.active = e;
          this.m_mgLNode.active = t;
          this.m_fgLNode.active = t;
          this.m_fgSNode.active = !t;
          if (e) {
            this.m_counterSpine.PlayFGIdle(t);
          }
        };
        n.SetRound = function (e, t) {
          this.m_fgTotalRound = e;
          this.m_fgRemainRound = t;
          this.UpdateCounterLabel();
        };
        n.UpdateCounterLabel = function () {
          var e = this.m_fgRemainRound + "/" + this.m_fgTotalRound;
          this.m_fgCounterLabel.string = e;
          this.m_fgCounterAddLabel.string = e;
        };
        n.PlayEnterFreeGame = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, o) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetView(true);
                    this.m_fgCounterAddLabel.node.active = false;
                    this.SetRound(t, n);
                    if (o) {
                      e.next = 7;
                      break;
                    }
                    e.next = 6;
                    return this.m_counterSpine.PlayFGStart(i);
                  case 6:
                    this.m_counterSpine.PlayFGIdle(i);
                  case 7:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, o) {
            return e.apply(this, arguments);
          };
        }();
        n.DecreaseFreeRound = function () {
          this.m_fgRemainRound--;
          this.UpdateCounterLabel();
        };
        n.PlayFGHit = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_fgCounterLabel.node.active = false;
                    this.m_fgCounterAddLabel.node.active = true;
                    e.next = 4;
                    return this.m_counterSpine.PlayFGHit(t);
                  case 4:
                    this.m_fgCounterLabel.node.active = true;
                    this.m_fgCounterAddLabel.node.active = false;
                    this.m_counterSpine.PlayFGIdle(t);
                  case 7:
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
        _createClass(t, [{
          key: "FGTotalRound",
          get: function () {
            return this.m_fgTotalRound;
          }
        }]);
        return t;
      }(Component);
      _descriptor$d = _applyDecoratedDescriptor(_class2$d.prototype, "m_counterSpine", [_dec$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$6 = _applyDecoratedDescriptor(_class2$d.prototype, "m_fgTxt1", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$4 = _applyDecoratedDescriptor(_class2$d.prototype, "m_fgCounterLabel", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$2 = _applyDecoratedDescriptor(_class2$d.prototype, "m_fgCounterAddLabel", [_dec4$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5 = _applyDecoratedDescriptor(_class2$d.prototype, "m_mgLNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor6 = _applyDecoratedDescriptor(_class2$d.prototype, "m_fgLNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor7 = _applyDecoratedDescriptor(_class2$d.prototype, "m_fgSNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor8 = _applyDecoratedDescriptor(_class2$d.prototype, "m_mgNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor9 = _applyDecoratedDescriptor(_class2$d.prototype, "m_fgNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$e;
      var _class$e;
      var _descriptor$e;
      var _class3$6;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ed4addsZRZKarA7HrCv8ar9", "FxRemoveSpine", undefined);
      var ccclass$e = _decorator.ccclass;
      var property$e = _decorator.property;
      _dec$e = property$e({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3$6 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$e, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetTimeScale = function (e) {
          this.m_spine.timeScale = e ? Game_Define.HARD_STOP_TIME_SCALE : Game_Define.DEFAULT_TIME_SCALE;
        };
        n.PlayFxRemove = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.FX_Remove, false);
                  case 3:
                    this.node.active = false;
                  case 4:
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
        n.Hide = function () {
          this.node.active = false;
        };
        return t;
      }(Component);
      _class3$6.AnimName = {
        FX_Remove: "FX_Remove"
      };
      _descriptor$e = _applyDecoratedDescriptor(_class3$6.prototype, "m_spine", [_dec$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FxRemoveSpine = ccclass$e(_class$e = _class3$6) || _class$e;
      var _dec$f;
      var _class$f;
      var _descriptor$f;
      var _class3$7;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "9284bQUGsNLrrHtB4WgkKJJ", "FxSymbolSpine", undefined);
      var ccclass$f = _decorator.ccclass;
      var property$f = _decorator.property;
      _dec$f = property$f({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3$7 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$f, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetTimeScale = function (e) {
          this.m_spine.timeScale = e ? Game_Define.HARD_STOP_TIME_SCALE : Game_Define.DEFAULT_TIME_SCALE;
        };
        n.PlayLoop = function () {
          this.node.active = true;
          SpineKit.PlayAnimation(this.m_spine, t.AnimName.Loop, true);
        };
        n.PlayWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Win, false);
                  case 3:
                    this.SetTimeScale(false);
                    this.PlayLoop();
                  case 5:
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
        n.Hide = function () {
          this.node.active = false;
        };
        n.PlayUpgrade = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Upgrade, false);
                  case 3:
                    this.PlayLoop();
                  case 4:
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
        n.PlayLock = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    i = function (e) {
                      if ("AnimationEvent" == e && n) {
                        n();
                      }
                    };
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Lock, false, 0, i);
                  case 4:
                    this.PlayLoop();
                  case 5:
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
        return t;
      }(Component);
      _class3$7.AnimName = {
        Lock: "Lock",
        Win: "Win",
        Loop: "Loop",
        Upgrade: "Upgrade"
      };
      _descriptor$f = _applyDecoratedDescriptor(_class3$7.prototype, "m_spine", [_dec$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FxSymbolSpine = ccclass$f(_class$f = _class3$7) || _class$f;
      var _dec$g;
      var _dec2$7;
      var _class$g;
      var _descriptor$g;
      var _descriptor2$7;
      var _class3$8;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4a19arpVLlFRLxBF4K5hYMa", "SymbolEffect", undefined);
      var ccclass$g = _decorator.ccclass;
      var property$g = _decorator.property;
      _dec$g = property$g({
        type: Number,
        tooltip: "Symbol"
      });
      _dec2$7 = property$g({
        type: sp.Skeleton,
        tooltip: "Symbol動畫"
      });
      _class3$8 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_symbol", _descriptor$g, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_spine", _descriptor2$7, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetTimeScale = function (e) {
          this.m_spine.timeScale = e ? Game_Define.HARD_STOP_TIME_SCALE : Game_Define.DEFAULT_TIME_SCALE;
        };
        n.PlayWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    e.next = 3;
                    return this.PlayAnimation(t.AnimName.Win, n);
                  case 3:
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
        n.PlayRemove = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation(t.AnimName.Remove, false);
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
        n.PlayStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation(t.AnimName.Stop, false);
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
        n.PlayNearWin = function () {
          this.PlayAnimation(t.AnimName.NearWin, true);
        };
        n.PlayUpgradeStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation(t.AnimName.Upgrade_Start, false);
                  case 2:
                    this.node.active = false;
                  case 3:
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
        n.PlayUpgradeEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation(t.AnimName.Upgrade_End, false);
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n) {
            return e.apply(this, arguments);
          };
        }();
        _createClass(t, [{
          key: "Symbol",
          get: function () {
            return this.m_symbol;
          }
        }, {
          key: "Spine",
          get: function () {
            return this.m_spine;
          }
        }]);
        return t;
      }(Component);
      _class3$8.AnimName = {
        Win: "Win",
        Upgrade_Start: "Upgrade_Start",
        Upgrade_End: "Upgrade_End",
        Remove: "Remove",
        Stop: "Stop",
        NearWin: "NearWin"
      };
      _descriptor$g = _applyDecoratedDescriptor(_class3$8.prototype, "m_symbol", [_dec$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -1;
        }
      });
      _descriptor2$7 = _applyDecoratedDescriptor(_class3$8.prototype, "m_spine", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var SymbolEffect = ccclass$g(_class$g = _class3$8) || _class$g;
      var _dec$h;
      var _dec2$8;
      var _dec3$6;
      var _dec4$3;
      var _dec5$1;
      var _class2$h;
      var _descriptor$h;
      var _descriptor2$8;
      var _descriptor3$5;
      var _descriptor4$3;
      var _descriptor5$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "dbb4c5caxdLwIdSZaspObns", "EffectPlate", undefined);
      var property$h = _decorator.property;
      var COL = Game_Define.COL;
      var ROW = Game_Define.ROW;
      _dec$h = property$h({
        type: Prefab,
        tooltip: "symbol動畫"
      });
      _dec2$8 = property$h({
        type: Prefab,
        tooltip: "動態生成的fxSymbol基底"
      });
      _dec3$6 = property$h({
        type: Prefab,
        tooltip: "動態生成的fxRemove基底"
      });
      _dec4$3 = property$h({
        type: Node,
        tooltip: "SymbolEffect 父節點"
      });
      _dec5$1 = property$h({
        type: Node,
        tooltip: "Fx 父節點"
      });
      _class2$h = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_symbolEftPrefabs", _descriptor$h, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fxSymbolPrefab", _descriptor2$8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fxRemovePrefab", _descriptor3$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_symbolEffectParent", _descriptor4$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fxEffectParent", _descriptor5$1, _assertThisInitialized(t));
          t.m_symbolEffects = new Array();
          t.m_symbolEffectPoolList = [];
          t.m_gameView = null;
          t.m_fxSymbols = new Array();
          t.m_fxSymbolPool = null;
          t.m_fxRemoves = new Array();
          t.m_fxRemovePool = null;
          t.m_isAlreadyPlayWin = null;
          t.m_scatterEffects = [];
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          for (var t = 0; t < this.m_symbolEftPrefabs.length; t++) {
            this.m_symbolEffectPoolList.push(new NodePool(this.m_symbolEftPrefabs[t]));
          }
          this.m_fxSymbolPool = new NodePool(this.m_fxSymbolPrefab);
          this.m_fxRemovePool = new NodePool(this.m_fxRemovePrefab);
          this.m_isAlreadyPlayWin = new Array();
          for (var n = 0; n < Game_Define.COL; n++) {
            var i = [];
            for (var o = 0; o < Game_Define.ROW; o++) {
              i.push(false);
            }
            this.m_isAlreadyPlayWin.push(i);
          }
          this.SetInitPlate();
        };
        n.SetInitPlate = function () {
          for (var e = 0; e < COL; e++) {
            this.m_symbolEffects[e] = [];
            this.m_fxSymbols[e] = [];
            this.m_fxRemoves[e] = [];
          }
        };
        n.StartSpin = function () {
          for (var e = 0; e < COL; e++) {
            for (var t = 0; t < ROW; t++) {
              if (this.m_symbolEffects[e][t]) {
                this.RemoveSymbolEffect(e, t);
              }
              if (this.m_fxSymbols[e][t]) {
                this.RemoveFxSymbol(e, t);
              }
              if (this.m_fxRemoves[e][t]) {
                this.RemoveFxRemove(e, t);
              }
            }
          }
          this.m_scatterEffects = [];
          this.ResetFlag();
        };
        n.ConnectionLine = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, o, r) {
            var a;
            var s;
            var l;
            var c;
            var u;
            var p;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    a = [];
                    for (s = 0; s < t.KeepSymbol.length; s++) {
                      l = t.KeepSymbol[s];
                      a.push(this.PlayWinSpecifiedSymbol(l, n, true, t.ComboStageSymbol));
                    }
                    if (r) {
                      if (i < 4) {
                        c = i + 1;
                        u = o ? "Combo_" + c + "_fast" : "Combo_" + c;
                        node$1.Play(Game_Define.AudioClips[u]);
                      } else {
                        5;
                        p = o ? "Combo_5_fast" : "Combo_5";
                        node$1.Play(Game_Define.AudioClips[p]);
                      }
                    }
                    if (true === n) {
                      this.m_gameView.SlotReels.ShowDarkOrLightSymbol(t.FinalStageSymbol, t.KeepSymbol);
                    } else {
                      this.m_gameView.SlotReels.ShowDarkOrLightSymbol(t.ComboStageSymbol, t.KeepSymbol);
                    }
                    this.m_gameView.FrameSpine.PlayWin();
                    e.next = 7;
                    return Promise.all(a);
                  case 7:
                    this.m_gameView.FrameSpine.PlayIdle();
                    if (!n) {
                      this.m_gameView.SlotReels.SetAllSymbolDarkOrLight(false);
                    }
                  case 9:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, o, r) {
            return e.apply(this, arguments);
          };
        }();
        n.SetAlreadyPlayWin = function (e, t, n) {
          for (var i = 0; i < COL; i++) {
            var o = 0;
            for (var r = 0; r < ROW; r++) {
              if (e.includes(t[i].Col[r])) {
                o++;
              }
            }
            for (var a = n[i].Col.length; a >= 0; a--) {
              if (e.includes(n[i].Col[a])) {
                o--;
              }
            }
            for (var s = 0; s < o; s++) {
              this.m_isAlreadyPlayWin[i][s] = true;
            }
          }
        };
        n.PlayWinSpecifiedSymbol = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, o) {
            var r;
            var a;
            var s;
            var l = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    r = [];
                    a = function (e) {
                      var a = function (a) {
                        var s;
                        if (n && (null == (s = l.m_symbolEffects[e][a]) ? undefined : s.getComponent(SymbolEffect).Symbol) === t || !n && o[e].Col[a] === t && 0 == l.m_isAlreadyPlayWin[e][a]) {
                          l.m_gameView.SlotReels.HideSymbolNode(e, a);
                          l.CreateSymbolEffect(e, a, t);
                          l.m_symbolEffects[e][a].getComponent(SymbolEffect).SetTimeScale(l.m_gameView.IsHardStop);
                          r.push(l.m_symbolEffects[e][a].getComponent(SymbolEffect).PlayWin().then(function () {
                            l.m_symbolEffects[e][a].active = false;
                            l.m_gameView.SlotReels.ShowSymbolNode(e, a);
                          }));
                          if (i) {
                            if (!l.m_fxSymbols[e][a]) {
                              l.CreateFxSymbol(e, a);
                            }
                            l.m_fxSymbols[e][a].getComponent(FxSymbolSpine).SetTimeScale(l.m_gameView.IsHardStop);
                            r.push(l.m_fxSymbols[e][a].getComponent(FxSymbolSpine).PlayWin());
                          }
                        }
                      };
                      for (var s = 0; s < ROW; s++) {
                        a(s);
                      }
                    };
                    for (s = 0; s < COL; s++) {
                      a(s);
                    }
                    e.next = 5;
                    return Promise.all(r);
                  case 5:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }));
          return function (t, n, i, o) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayLock = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = [];
                    for (i = 0; i < t.KeepSymbol.length; i++) {
                      o = t.KeepSymbol[i];
                      n.concat(this.PlayLockSpecifiedSymbol(o, t.ComboStageSymbol));
                    }
                    if (0 !== n.length) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return");
                  case 4:
                    e.next = 6;
                    return Promise.all(n);
                  case 6:
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
        n.PlayLockSpecifiedSymbol = function (e, t) {
          var n = [];
          for (var i = 0; i < COL; i++) {
            for (var o = 0; o < ROW; o++) {
              if (t[i].Col[o] === e && 0 == this.m_isAlreadyPlayWin[i][o]) {
                if (!this.m_fxSymbols[i][o]) {
                  this.CreateFxSymbol(i, o);
                }
                this.m_fxSymbols[i][o].getComponent(FxSymbolSpine).SetTimeScale(this.m_gameView.IsHardStop);
                n.push(this.m_fxSymbols[i][o].getComponent(FxSymbolSpine).PlayLock());
              }
            }
          }
          return n;
        };
        n.PlayRemove = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var o;
            var r;
            var a;
            var s;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = [];
                    for (i = 0; i < COL; i++) {
                      for (o = 0; o < ROW; o++) {
                        if (t.ComboTag[i].Col[o] === Game_Define.ComboTag.TagEliminate) {
                          this.m_gameView.SlotReels.RemoveSymbolNode(i, o);
                          (r = this.CreateSymbolEffect(i, o, t.ComboStageSymbol[i].Col[o])).getComponent(SymbolEffect).SetTimeScale(this.m_gameView.IsHardStop);
                          n.push(r.getComponent(SymbolEffect).PlayRemove());
                          this.CreateFxRemove(i, o);
                          this.m_fxRemoves[i][o].getComponent(FxRemoveSpine).SetTimeScale(this.m_gameView.IsHardStop);
                          n.push(this.m_fxRemoves[i][o].getComponent(FxRemoveSpine).PlayFxRemove());
                        }
                      }
                    }
                    e.next = 4;
                    return Promise.all(n);
                  case 4:
                    for (a = 0; a < COL; a++) {
                      for (s = 0; s < ROW; s++) {
                        if (t.ComboTag[a].Col[s] === Game_Define.ComboTag.TagEliminate) {
                          this.RemoveSymbolEffect(a, s);
                          this.RemoveFxRemove(a, s);
                        }
                      }
                    }
                  case 5:
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
        n.GetSymbolEffects = function () {
          return this.m_symbolEffects;
        };
        n.GetSymbolEffect = function (e, t) {
          return this.m_symbolEffects[e][t];
        };
        n.GetFxSymbols = function () {
          return this.m_fxSymbols;
        };
        n.RemoveSymbolEffect = function (e, t) {
          var n = this.m_symbolEffects[e][t];
          this.m_symbolEffects[e][t] = null;
          var i = n.getComponent(SymbolEffect).Symbol;
          this.m_symbolEffectPoolList[i].ReturnPrefab(n);
        };
        n.RemoveFxSymbol = function (e, t) {
          var n = this.m_fxSymbols[e][t];
          this.m_fxSymbols[e][t] = null;
          n.active = false;
          this.m_fxSymbolPool.ReturnPrefab(n);
        };
        n.RemoveFxRemove = function (e, t) {
          var n = this.m_fxRemoves[e][t];
          this.m_fxRemoves[e][t] = null;
          n.active = false;
          this.m_fxRemovePool.ReturnPrefab(n);
        };
        n.CreateSymbolEffect = function (e, t, n) {
          var i = this.m_gameView.SlotReels.GetSymbolPosition(e, t);
          var o = null;
          if (!this.m_symbolEffects[e][t]) {
            this.m_symbolEffects[e][t] = this.m_symbolEffectPoolList[n].BorrowPrefab();
          }
          (o = this.m_symbolEffects[e][t]).active = true;
          this.m_symbolEffectParent.addChild(o);
          o.setPosition(i);
          return o;
        };
        n.CreateFxSymbol = function (e, t) {
          var n = this.m_gameView.SlotReels.GetSymbolPosition(e, t);
          var i = this.m_fxSymbolPool.BorrowPrefab();
          i.active = true;
          this.m_fxSymbols[e][t] = i;
          this.m_fxEffectParent.addChild(i);
          i.setPosition(n);
          return i;
        };
        n.CreateFxRemove = function (e, t) {
          var n = this.m_gameView.SlotReels.GetSymbolPosition(e, t);
          var i = this.m_fxRemovePool.BorrowPrefab();
          i.active = true;
          this.m_fxRemoves[e][t] = i;
          this.m_fxEffectParent.addChild(i);
          i.setPosition(n);
          return i;
        };
        n.PlayStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.CreateSymbolEffect(t, n, i);
                    this.m_symbolEffects[t][n].getComponent(SymbolEffect).SetTimeScale(this.m_gameView.IsHardStop);
                    e.next = 4;
                    return this.m_symbolEffects[t][n].getComponent(SymbolEffect).PlayStop();
                  case 4:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayScatterNearWin = function (e, t) {
          this.CreateSymbolEffect(e, t, Game_Define.Symbol.SCATTER);
          this.m_scatterEffects.push(this.m_symbolEffects[e][t]);
          for (var n = 0; n < this.m_scatterEffects.length; n++) {
            var i = this.m_scatterEffects[n].getComponent(SymbolEffect);
            i.SetTimeScale(this.m_gameView.IsHardStop);
            i.PlayNearWin();
          }
        };
        n.PlayNearWinFail = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    for (t = 0; t < COL; t++) {
                      for (n = 0; n < ROW; n++) {
                        if ((null == (i = this.m_symbolEffects[t][n]) ? undefined : i.getComponent(SymbolEffect).Symbol) == Game_Define.Symbol.SCATTER) {
                          this.m_symbolEffects[t][n].active = false;
                          this.m_gameView.SlotReels.ShowSymbolNode(t, n);
                        }
                      }
                    }
                    this.m_gameView.FrameSpine.PlayIdle();
                    e.next = 4;
                    return this.m_gameView.CharacterSpine.PlayNearWinFail();
                  case 4:
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
        n.PlayNearWinSuccess = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = [];
                    node$1.Play(Game_Define.AudioClips.Scatter_bell);
                    t.push(this.PlayScatterWin(2));
                    t.push(this.m_gameView.CharacterSpine.PlayScatterWin());
                    e.next = 6;
                    return Promise.all(t);
                  case 6:
                    this.m_gameView.FrameSpine.PlayIdle();
                  case 7:
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
        n.PlayScatterWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = 0;
                  case 1:
                    if (!(n < t)) {
                      e.next = 7;
                      break;
                    }
                    e.next = 4;
                    return this.PlayWinSpecifiedSymbol(Game_Define.Symbol.SCATTER, true, false);
                  case 4:
                    n++;
                    e.next = 1;
                    break;
                  case 7:
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
        n.PlayUpgrade = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            var r;
            var a;
            var s;
            var l;
            var c;
            var u;
            var p;
            var m;
            var _;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = [];
                    for (o = 0; o < COL; o++) {
                      for (r = 0; r < ROW; r++) {
                        if (n.ComboTag[o].Col[r] === t) {
                          if (!this.m_fxSymbols[o][r]) {
                            this.CreateFxSymbol(o, r);
                          }
                          (a = this.m_fxSymbols[o][r].getComponent(FxSymbolSpine)).SetTimeScale(this.m_gameView.IsHardStop);
                          a.PlayUpgrade();
                          s = n.ComboStageSymbol[o].Col[r];
                          (l = this.CreateSymbolEffect(o, r, s).getComponent(SymbolEffect)).SetTimeScale(this.m_gameView.IsHardStop);
                          i.push(l.PlayUpgradeStart());
                          this.m_gameView.SlotReels.HideSymbolNode(o, r);
                        }
                      }
                    }
                    e.next = 4;
                    return Promise.all(i);
                  case 4:
                    c = [];
                    u = n.KeepSymbol[0];
                    for (p = 0; p < COL; p++) {
                      for (m = 0; m < ROW; m++) {
                        if (n.ComboTag[p].Col[m] === t) {
                          this.m_gameView.SlotReels.ResetSymbol(p, m, u);
                          this.RemoveSymbolEffect(p, m);
                          (_ = this.CreateSymbolEffect(p, m, u).getComponent(SymbolEffect)).SetTimeScale(this.m_gameView.IsHardStop);
                          c.push(_.PlayUpgradeEnd());
                        }
                      }
                    }
                    node$1.Play(Game_Define.AudioClips.BONUS_Symbol_UP);
                    e.next = 10;
                    return Promise.all(c);
                  case 10:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayChangeSymbol = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            var r;
            var a;
            var s;
            var l = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = n.KeepSymbol[0];
                    o = [];
                    r = false;
                    a = function (e) {
                      var a = function (a) {
                        if (n.ComboTag[e].Col[a] === t) {
                          o.push(new Promise(function (t) {
                            if (!l.m_fxSymbols[e][a]) {
                              l.CreateFxSymbol(e, a);
                            }
                            var n = l.m_fxSymbols[e][a].getComponent(FxSymbolSpine);
                            n.SetTimeScale(l.m_gameView.IsHardStop);
                            n.PlayLock(function () {
                              l.m_gameView.SlotReels.ResetSymbol(e, a, i);
                              l.m_gameView.SlotReels.HideSymbolNode(e, a);
                              var n = l.CreateSymbolEffect(e, a, i).getComponent(SymbolEffect);
                              n.SetTimeScale(l.m_gameView.IsHardStop);
                              n.PlayUpgradeEnd().then(t);
                              if (!r) {
                                node$1.Play(Game_Define.AudioClips.BONUS_Symbol_Change);
                                r = true;
                              }
                            });
                          }));
                        }
                      };
                      for (var s = 0; s < ROW; s++) {
                        a(s);
                      }
                    };
                    for (s = 0; s < COL; s++) {
                      a(s);
                    }
                    if (0 !== o.length) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return");
                  case 7:
                    e.next = 9;
                    return Promise.all(o);
                  case 9:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }));
          return function (t, n) {
            return e.apply(this, arguments);
          };
        }();
        n.ResetFlag = function () {
          for (var e = 0; e < Game_Define.COL; e++) {
            for (var t = 0; t < Game_Define.ROW; t++) {
              this.m_isAlreadyPlayWin[e][t] = false;
            }
          }
        };
        n.IsAlreadyPlayWin = function (e, t) {
          return this.m_isAlreadyPlayWin[e][t];
        };
        return t;
      }(Component);
      _descriptor$h = _applyDecoratedDescriptor(_class2$h.prototype, "m_symbolEftPrefabs", [_dec$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$8 = _applyDecoratedDescriptor(_class2$h.prototype, "m_fxSymbolPrefab", [_dec2$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$5 = _applyDecoratedDescriptor(_class2$h.prototype, "m_fxRemovePrefab", [_dec3$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$3 = _applyDecoratedDescriptor(_class2$h.prototype, "m_symbolEffectParent", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$1 = _applyDecoratedDescriptor(_class2$h.prototype, "m_fxEffectParent", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$i;
      var _class$i;
      var _descriptor$i;
      var _class3$9;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ae9f9+NA25E/qWbjdPpnYQV", "FGComplimentSpine", undefined);
      var ccclass$i = _decorator.ccclass;
      var property$i = _decorator.property;
      _dec$i = property$i({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3$9 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$i, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = this.m_spine.findAnimation(t.AnimName.Start_L);
                    if (!n || !i) {
                      e.next = 6;
                      break;
                    }
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Start_L, false);
                  case 4:
                    e.next = 8;
                    break;
                  case 6:
                    e.next = 8;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Start_S, false);
                  case 8:
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
        n.PlayLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = this.m_spine.findAnimation(t.AnimName.Loop_L);
                    if (!n || !i) {
                      e.next = 6;
                      break;
                    }
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Loop_L, false);
                  case 4:
                    e.next = 8;
                    break;
                  case 6:
                    e.next = 8;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Loop_S, false);
                  case 8:
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
        n.PlayEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = this.m_spine.findAnimation(t.AnimName.End_L);
                    if (!n || !i) {
                      e.next = 6;
                      break;
                    }
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.End_L, false);
                  case 4:
                    e.next = 8;
                    break;
                  case 6:
                    e.next = 8;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.End_S, false);
                  case 8:
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
        return t;
      }(Component);
      _class3$9.AnimName = {
        Start_L: "Start_L",
        Start_S: "Start_S",
        Loop_L: "Loop_L",
        Loop_S: "Loop_S",
        End_L: "End_L",
        End_S: "End_S"
      };
      _descriptor$i = _applyDecoratedDescriptor(_class3$9.prototype, "m_spine", [_dec$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FGComplimentSpine = ccclass$i(_class$i = _class3$9) || _class$i;
      var _dec$j;
      var _dec2$9;
      var _dec3$7;
      var _dec4$4;
      var _dec5$2;
      var _class2$j;
      var _descriptor$j;
      var _descriptor2$9;
      var _descriptor3$6;
      var _descriptor4$4;
      var _descriptor5$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d2f0cpLGHBLc6kWP1fqCOp4", "FGCompliment", undefined);
      var property$j = _decorator.property;
      _dec$j = property$j({
        type: FGComplimentSpine,
        tooltip: "動畫"
      });
      _dec2$9 = property$j({
        type: Label,
        tooltip: "贏分"
      });
      _dec3$7 = property$j({
        type: Sprite,
        tooltip: "恭喜大標題"
      });
      _dec4$4 = property$j({
        type: Label,
        tooltip: "局數"
      });
      _dec5$2 = property$j({
        type: Sprite,
        tooltip: "FG"
      });
      _class2$j = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$j, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_winLabel", _descriptor2$9, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_congratSprite", _descriptor3$6, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_roundLabel", _descriptor4$4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgSprite", _descriptor5$2, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetTxt = function () {
          var e = node.GetGameAtlas();
          this.m_congratSprite.spriteFrame = e.getSpriteFrame("TXT_FG_Copliment_01");
          this.m_fgSprite.spriteFrame = e.getSpriteFrame("TXT_FG_Copliment_02");
        };
        n.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var o;
            var r;
            var a;
            var s;
            var l = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_winLabel.node.active = false;
                    this.m_congratSprite.node.active = false;
                    this.m_roundLabel.node.active = false;
                    this.m_fgSprite.node.active = false;
                    this.m_roundLabel.string = n.toString();
                    o = node$2.FORMAT_NUMBER_TYPE.NONE_DOT;
                    if (t < 1e3) {
                      o = node$2.FORMAT_NUMBER_TYPE.PERMANENT_DOT;
                    }
                    this.m_winLabel.string = "0";
                    this.node.active = true;
                    this.m_spine.PlayStart(i);
                    1;
                    tween(this.node).delay(1).call(function () {
                      l.m_winLabel.node.active = true;
                      l.m_congratSprite.node.active = true;
                      l.m_roundLabel.node.active = true;
                      l.m_fgSprite.node.active = true;
                    }).start();
                    5;
                    4;
                    r = 0;
                    a = node$2.divide(3.5, .02);
                    s = node$2.divide(t, a);
                    tween(this.node).repeat(a, tween().call(function () {
                      if ((r += s) >= t) {
                        r = t;
                      }
                      l.m_winLabel.string = node$2.FormatNumberThousands(r, o);
                    }).delay(.02)).call(function () {
                      l.m_winLabel.string = node$2.FormatNumberThousands(t, o);
                    }).start();
                    e.next = 20;
                    return node$3.Wait(this, 5);
                  case 20:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_spine.PlayLoop(t);
                  case 2:
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
        n.PlayEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_winLabel.node.active = false;
                    this.m_congratSprite.node.active = false;
                    this.m_roundLabel.node.active = false;
                    this.m_fgSprite.node.active = false;
                    e.next = 6;
                    return this.m_spine.PlayEnd(t);
                  case 6:
                    this.node.active = false;
                  case 7:
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
        return t;
      }(Component);
      _descriptor$j = _applyDecoratedDescriptor(_class2$j.prototype, "m_spine", [_dec$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$9 = _applyDecoratedDescriptor(_class2$j.prototype, "m_winLabel", [_dec2$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$6 = _applyDecoratedDescriptor(_class2$j.prototype, "m_congratSprite", [_dec3$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$4 = _applyDecoratedDescriptor(_class2$j.prototype, "m_roundLabel", [_dec4$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$2 = _applyDecoratedDescriptor(_class2$j.prototype, "m_fgSprite", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$k;
      var _class$k;
      var _descriptor$k;
      var _class3$a;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "fe96d7Cbk9Oy4bpgMuy0pre", "FGDeclareSpine", undefined);
      var ccclass$k = _decorator.ccclass;
      var property$k = _decorator.property;
      _dec$k = property$k({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3$a = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$k, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!n) {
                      e.next = 5;
                      break;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Start_L, false);
                  case 3:
                    e.next = 7;
                    break;
                  case 5:
                    e.next = 7;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Start_S, false);
                  case 7:
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
        n.PlayLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!n) {
                      e.next = 5;
                      break;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Loop_L, false);
                  case 3:
                    e.next = 7;
                    break;
                  case 5:
                    e.next = 7;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.Loop_S, false);
                  case 7:
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
        n.PlayEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!n) {
                      e.next = 5;
                      break;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.End_L, false);
                  case 3:
                    e.next = 7;
                    break;
                  case 5:
                    e.next = 7;
                    return SpineKit.PlayAnimation(this.m_spine, t.AnimName.End_S, false);
                  case 7:
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
        return t;
      }(Component);
      _class3$a.AnimName = {
        Start_L: "Start_L",
        Start_S: "Start_S",
        Loop_L: "Loop_L",
        Loop_S: "Loop_S",
        End_L: "End_L",
        End_S: "End_S"
      };
      _descriptor$k = _applyDecoratedDescriptor(_class3$a.prototype, "m_spine", [_dec$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FGDeclareSpine = ccclass$k(_class$k = _class3$a) || _class$k;
      var _dec$l;
      var _dec2$a;
      var _dec3$8;
      var _dec4$5;
      var _class2$l;
      var _descriptor$l;
      var _descriptor2$a;
      var _descriptor3$7;
      var _descriptor4$5;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "051152YixRB/LSCz2KBXeh4", "FGDeclare", undefined);
      var property$l = _decorator.property;
      _dec$l = property$l({
        type: FGDeclareSpine,
        tooltip: "Spine"
      });
      _dec2$a = property$l({
        type: Sprite,
        tooltip: "語系字1"
      });
      _dec3$8 = property$l({
        type: Sprite,
        tooltip: "語系字2"
      });
      _dec4$5 = property$l({
        type: Label,
        tooltip: "局數"
      });
      _class2$l = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$l, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_txt1", _descriptor2$a, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_txt2", _descriptor3$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_numLabel", _descriptor4$5, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetTxt = function () {
          var e = node.GetGameAtlas();
          this.m_txt1.spriteFrame = e.getSpriteFrame("TXT_FG_Copliment_01");
          this.m_txt2.spriteFrame = e.getSpriteFrame("TXT_FG_Copliment_02");
        };
        n.SetNumLabel = function (e) {
          this.m_numLabel.string = e.toString();
        };
        n.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    e.next = 3;
                    return this.m_spine.PlayStart(t);
                  case 3:
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
        n.PlayLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_spine.PlayLoop(t);
                  case 2:
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
        n.PlayEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_spine.PlayEnd(t);
                  case 2:
                    this.node.active = false;
                  case 3:
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
        return t;
      }(Component);
      _descriptor$l = _applyDecoratedDescriptor(_class2$l.prototype, "m_spine", [_dec$l], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$a = _applyDecoratedDescriptor(_class2$l.prototype, "m_txt1", [_dec2$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$7 = _applyDecoratedDescriptor(_class2$l.prototype, "m_txt2", [_dec3$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$5 = _applyDecoratedDescriptor(_class2$l.prototype, "m_numLabel", [_dec4$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a9cffBwzpZCxZkVyQqZnpnI", "FeaturesAck", undefined);
      var FeaturesAck = function () {};
      var _dec$m;
      var _dec2$b;
      var _class2$m;
      var _descriptor$m;
      var _descriptor2$b;
      FeaturesAck.MG = {
        RoundQueue: [{
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [3, 3, 1, 1, 0]
            }, {
              Col: [6, 9, 9, 1, 1]
            }, {
              Col: [1, 1, 2, 2, 5]
            }, {
              Col: [8, 1, 1, 4, 4]
            }, {
              Col: [0, 3, 3, 1, 1]
            }, {
              Col: [6, 6, 9, 9, 2]
            }],
            FinalStageSymbol: [{
              Col: [1, 1, 2, 2, 6]
            }, {
              Col: [1, 1, 4, 4, 9]
            }, {
              Col: [1, 1, 6, 6, 0]
            }, {
              Col: [1, 1, 8, 8, 5]
            }, {
              Col: [1, 1, 0, 0, 3]
            }, {
              Col: [2, 9, 9, 4, 4]
            }],
            AwardDataVec: [],
            KeepSymbol: [1],
            ComboTag: [{
              Col: [1, 1, 0, 0, 1]
            }, {
              Col: [1, 1, 1, 0, 0]
            }, {
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [1, 0, 0, 1, 1]
            }, {
              Col: [1, 1, 1, 0, 0]
            }, {
              Col: [1, 1, 1, 1, 1]
            }],
            FillSymbols: [{
              Col: [2, 2, 6]
            }, {
              Col: [4, 4, 9]
            }, {
              Col: [6, 6, 0]
            }, {
              Col: [8, 8, 5]
            }, {
              Col: [0, 0, 3]
            }, {
              Col: [2, 9, 9, 4, 4]
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }, {
            ComboStageSymbol: [{
              Col: [1, 1, 2, 2, 6]
            }, {
              Col: [1, 1, 4, 4, 9]
            }, {
              Col: [1, 1, 6, 6, 0]
            }, {
              Col: [1, 1, 8, 8, 5]
            }, {
              Col: [1, 1, 0, 0, 3]
            }, {
              Col: [2, 9, 9, 4, 4]
            }],
            FinalStageSymbol: [{
              Col: [1, 1, 2, 1, 6]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [1, 1, 0, 1, 1]
            }, {
              Col: [2, 1, 9, 4, 1]
            }],
            AwardDataVec: [],
            KeepSymbol: [1],
            ComboTag: [{
              Col: [0, 0, 0, 4, 0]
            }, {
              Col: [0, 0, 4, 4, 4]
            }, {
              Col: [0, 0, 4, 4, 4]
            }, {
              Col: [0, 0, 4, 4, 4]
            }, {
              Col: [0, 0, 0, 4, 4]
            }, {
              Col: [0, 4, 0, 0, 4]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            BonusType: 1,
            ComboStageWin: 0,
            GetTrans: false,
            GetBonus: false
          }, {
            ComboStageSymbol: [{
              Col: [1, 1, 2, 1, 6]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [1, 1, 0, 1, 1]
            }, {
              Col: [2, 1, 9, 4, 1]
            }],
            FinalStageSymbol: [{
              Col: [7, 7, 2, 7, 6]
            }, {
              Col: [7, 7, 7, 7, 7]
            }, {
              Col: [7, 7, 7, 7, 7]
            }, {
              Col: [7, 7, 7, 7, 7]
            }, {
              Col: [7, 7, 0, 7, 7]
            }, {
              Col: [2, 7, 9, 4, 7]
            }],
            AwardDataVec: [{
              Symbol: 7,
              Count: 24,
              Win: 1800
            }],
            KeepSymbol: [7],
            ComboTag: [{
              Col: [8, 8, 0, 8, 0]
            }, {
              Col: [8, 8, 8, 8, 8]
            }, {
              Col: [8, 8, 8, 8, 8]
            }, {
              Col: [8, 8, 8, 8, 8]
            }, {
              Col: [8, 8, 0, 8, 8]
            }, {
              Col: [0, 8, 0, 0, 8]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            ComboStageWin: 1800,
            BonusType: 2,
            GetTrans: false,
            GetBonus: false
          }],
          BounsData: [14, 6, 10],
          RoundWin: 1800,
          AwardTypeFlag: 9,
          FreeRemainRound: 0,
          FreeTotalRound: 0,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }],
        FreeTotalWin: 0,
        TotalWin: 1800
      };
      FeaturesAck.FG = {
        RoundQueue: [{
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [14, 1, 1, 6, 6]
            }, {
              Col: [4, 4, 3, 3, 8]
            }, {
              Col: [2, 2, 0, 0, 7]
            }, {
              Col: [14, 9, 9, 5, 5]
            }, {
              Col: [1, 1, 6, 6, 14]
            }, {
              Col: [4, 4, 3, 3, 14]
            }],
            FinalStageSymbol: [{
              Col: [14, 1, 1, 6, 6]
            }, {
              Col: [4, 4, 3, 3, 8]
            }, {
              Col: [2, 2, 0, 0, 7]
            }, {
              Col: [14, 9, 9, 5, 5]
            }, {
              Col: [1, 1, 6, 6, 14]
            }, {
              Col: [4, 4, 3, 3, 14]
            }],
            AwardDataVec: [],
            KeepSymbol: [],
            ComboTag: [{
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            ComboStageWin: 0,
            GetTrans: false,
            GetBonus: false,
            BonusType: 0
          }],
          BounsData: [0, 0, 0],
          FreeRemainRound: 10,
          FreeTotalRound: 10,
          SpecialCount: 4,
          AddRounds: 10,
          AwardTypeFlag: 2,
          RoundWin: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [5, 5, 7, 7, 9]
            }, {
              Col: [6, 6, 4, 4, 2]
            }, {
              Col: [1, 1, 3, 3, 0]
            }, {
              Col: [5, 8, 8, 7, 7]
            }, {
              Col: [6, 9, 9, 4, 4]
            }, {
              Col: [3, 1, 1, 2, 2]
            }],
            FinalStageSymbol: [{
              Col: [5, 5, 7, 7, 9]
            }, {
              Col: [6, 6, 4, 4, 2]
            }, {
              Col: [1, 1, 3, 3, 0]
            }, {
              Col: [5, 8, 8, 7, 7]
            }, {
              Col: [6, 9, 9, 4, 4]
            }, {
              Col: [3, 1, 1, 2, 2]
            }],
            AwardDataVec: [],
            KeepSymbol: [],
            ComboTag: [{
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }],
          BounsData: [2, 1, 11],
          FreeRemainRound: 9,
          FreeTotalRound: 10,
          AwardTypeFlag: 4,
          RoundWin: 0,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [2, 2, 1, 1, 8]
            }, {
              Col: [0, 1, 1, 5, 5]
            }, {
              Col: [6, 6, 7, 7, 1]
            }, {
              Col: [1, 1, 4, 4, 3]
            }, {
              Col: [2, 2, 1, 1, 8]
            }, {
              Col: [7, 5, 5, 0, 0]
            }],
            FinalStageSymbol: [{
              Col: [1, 1, 5, 5, 3]
            }, {
              Col: [1, 1, 8, 8, 2]
            }, {
              Col: [1, 4, 4, 8, 8]
            }, {
              Col: [1, 1, 3, 3, 4]
            }, {
              Col: [1, 1, 2, 2, 7]
            }, {
              Col: [6, 7, 7, 0, 0]
            }],
            AwardDataVec: [],
            KeepSymbol: [1],
            ComboTag: [{
              Col: [1, 1, 0, 0, 1]
            }, {
              Col: [1, 0, 0, 1, 1]
            }, {
              Col: [1, 1, 1, 1, 0]
            }, {
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [1, 1, 0, 0, 1]
            }, {
              Col: [1, 1, 1, 1, 1]
            }],
            FillSymbols: [{
              Col: [5, 5, 3]
            }, {
              Col: [8, 8, 2]
            }, {
              Col: [4, 4, 8, 8]
            }, {
              Col: [3, 3, 4]
            }, {
              Col: [2, 2, 7]
            }, {
              Col: [6, 7, 7, 0, 0]
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }, {
            ComboStageSymbol: [{
              Col: [1, 1, 5, 5, 3]
            }, {
              Col: [1, 1, 8, 8, 2]
            }, {
              Col: [1, 4, 4, 8, 8]
            }, {
              Col: [1, 1, 3, 3, 4]
            }, {
              Col: [1, 1, 2, 2, 7]
            }, {
              Col: [6, 7, 7, 0, 0]
            }],
            FinalStageSymbol: [{
              Col: [1, 1, 5, 1, 3]
            }, {
              Col: [1, 1, 1, 8, 2]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 1, 4]
            }, {
              Col: [1, 1, 2, 1, 7]
            }, {
              Col: [1, 1, 7, 0, 1]
            }],
            AwardDataVec: [],
            KeepSymbol: [1],
            ComboTag: [{
              Col: [0, 0, 0, 4, 0]
            }, {
              Col: [0, 0, 4, 0, 0]
            }, {
              Col: [0, 4, 4, 4, 4]
            }, {
              Col: [0, 0, 4, 4, 0]
            }, {
              Col: [0, 0, 0, 4, 0]
            }, {
              Col: [4, 4, 0, 0, 4]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            BonusType: 1,
            ComboStageWin: 0,
            GetTrans: false,
            GetBonus: false
          }, {
            ComboStageSymbol: [{
              Col: [1, 1, 5, 1, 3]
            }, {
              Col: [1, 1, 1, 8, 2]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 1, 4]
            }, {
              Col: [1, 1, 2, 1, 7]
            }, {
              Col: [1, 1, 7, 0, 1]
            }],
            FinalStageSymbol: [{
              Col: [9, 9, 5, 9, 3]
            }, {
              Col: [9, 9, 9, 8, 2]
            }, {
              Col: [9, 9, 9, 9, 9]
            }, {
              Col: [9, 9, 9, 9, 4]
            }, {
              Col: [9, 9, 2, 9, 7]
            }, {
              Col: [9, 9, 7, 0, 9]
            }],
            AwardDataVec: [{
              Symbol: 9,
              Count: 21,
              Win: 6e3
            }],
            KeepSymbol: [9],
            ComboTag: [{
              Col: [8, 8, 0, 8, 0]
            }, {
              Col: [8, 8, 8, 0, 0]
            }, {
              Col: [8, 8, 8, 8, 8]
            }, {
              Col: [8, 8, 8, 8, 0]
            }, {
              Col: [8, 8, 0, 8, 0]
            }, {
              Col: [8, 8, 0, 0, 8]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            ComboStageWin: 6e3,
            BonusType: 2,
            GetTrans: false,
            GetBonus: false
          }],
          BounsData: [12, 8, 20],
          RoundWin: 6e3,
          FreeRemainRound: 8,
          FreeTotalRound: 10,
          AwardTypeFlag: 5,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [5, 5, 0, 0, 7]
            }, {
              Col: [8, 8, 15, 9, 9]
            }, {
              Col: [1, 1, 0, 0, 15]
            }, {
              Col: [0, 0, 4, 4, 3]
            }, {
              Col: [5, 6, 6, 0, 0]
            }, {
              Col: [9, 0, 0, 7, 7]
            }],
            FinalStageSymbol: [{
              Col: [0, 0, 3, 3, 6]
            }, {
              Col: [15, 4, 4, 7, 7]
            }, {
              Col: [0, 0, 15, 5, 5]
            }, {
              Col: [0, 0, 0, 0, 1]
            }, {
              Col: [0, 0, 8, 8, 9]
            }, {
              Col: [0, 0, 1, 1, 0]
            }],
            AwardDataVec: [],
            KeepSymbol: [0],
            ComboTag: [{
              Col: [1, 1, 0, 0, 1]
            }, {
              Col: [1, 1, 0, 1, 1]
            }, {
              Col: [1, 1, 0, 0, 0]
            }, {
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 0, 0]
            }, {
              Col: [1, 0, 0, 1, 1]
            }],
            FillSymbols: [{
              Col: [3, 3, 6]
            }, {
              Col: [4, 4, 7, 7]
            }, {
              Col: [5, 5]
            }, {
              Col: [0, 0, 1]
            }, {
              Col: [8, 8, 9]
            }, {
              Col: [1, 1, 0]
            }],
            ComboStageWin: 0,
            GetTrans: false,
            GetBonus: false,
            BonusType: 0
          }, {
            ComboStageSymbol: [{
              Col: [0, 0, 3, 3, 6]
            }, {
              Col: [15, 4, 4, 7, 7]
            }, {
              Col: [0, 0, 15, 5, 5]
            }, {
              Col: [0, 0, 0, 0, 1]
            }, {
              Col: [0, 0, 8, 8, 9]
            }, {
              Col: [0, 0, 1, 1, 0]
            }],
            FinalStageSymbol: [{
              Col: [0, 0, 8, 8, 9]
            }, {
              Col: [15, 1, 1, 5, 5]
            }, {
              Col: [0, 0, 15, 3, 3]
            }, {
              Col: [0, 0, 0, 0, 6]
            }, {
              Col: [0, 0, 0, 0, 7]
            }, {
              Col: [0, 0, 0, 4, 4]
            }],
            AwardDataVec: [],
            KeepSymbol: [0],
            ComboTag: [{
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [0, 1, 1, 1, 1]
            }, {
              Col: [0, 0, 0, 1, 1]
            }, {
              Col: [0, 0, 0, 0, 1]
            }, {
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [0, 0, 1, 1, 0]
            }],
            FillSymbols: [{
              Col: [8, 8, 9]
            }, {
              Col: [1, 1, 5, 5]
            }, {
              Col: [3, 3]
            }, {
              Col: [6]
            }, {
              Col: [0, 0, 7]
            }, {
              Col: [4, 4]
            }],
            ComboStageWin: 0,
            GetTrans: false,
            GetBonus: false,
            BonusType: 0
          }, {
            ComboStageSymbol: [{
              Col: [0, 0, 8, 8, 9]
            }, {
              Col: [15, 1, 1, 5, 5]
            }, {
              Col: [0, 0, 15, 3, 3]
            }, {
              Col: [0, 0, 0, 0, 6]
            }, {
              Col: [0, 0, 0, 0, 7]
            }, {
              Col: [0, 0, 0, 4, 4]
            }],
            FinalStageSymbol: [{
              Col: [0, 0, 4, 4, 5]
            }, {
              Col: [15, 6, 6, 1, 1]
            }, {
              Col: [0, 0, 15, 3, 3]
            }, {
              Col: [0, 0, 0, 0, 8]
            }, {
              Col: [0, 0, 0, 0, 9]
            }, {
              Col: [0, 0, 0, 7, 7]
            }],
            AwardDataVec: [],
            KeepSymbol: [0],
            ComboTag: [{
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [0, 1, 1, 1, 1]
            }, {
              Col: [0, 0, 0, 1, 1]
            }, {
              Col: [0, 0, 0, 0, 1]
            }, {
              Col: [0, 0, 0, 0, 1]
            }, {
              Col: [0, 0, 0, 1, 1]
            }],
            FillSymbols: [{
              Col: [4, 4, 5]
            }, {
              Col: [6, 6, 1, 1]
            }, {
              Col: [3, 3]
            }, {
              Col: [8]
            }, {
              Col: [9]
            }, {
              Col: [7, 7]
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }, {
            ComboStageSymbol: [{
              Col: [0, 0, 4, 4, 5]
            }, {
              Col: [15, 6, 6, 1, 1]
            }, {
              Col: [0, 0, 15, 3, 3]
            }, {
              Col: [0, 0, 0, 0, 8]
            }, {
              Col: [0, 0, 0, 0, 9]
            }, {
              Col: [0, 0, 0, 7, 7]
            }],
            FinalStageSymbol: [{
              Col: [0, 0, 4, 0, 5]
            }, {
              Col: [15, 6, 6, 1, 1]
            }, {
              Col: [0, 0, 15, 3, 3]
            }, {
              Col: [0, 0, 0, 0, 8]
            }, {
              Col: [0, 0, 0, 0, 9]
            }, {
              Col: [0, 0, 0, 0, 7]
            }],
            AwardDataVec: [],
            KeepSymbol: [0],
            ComboTag: [{
              Col: [0, 0, 0, 4, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 4, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            BonusType: 1,
            ComboStageWin: 0,
            GetTrans: false,
            GetBonus: false
          }, {
            ComboStageSymbol: [{
              Col: [0, 0, 4, 0, 5]
            }, {
              Col: [15, 6, 6, 1, 1]
            }, {
              Col: [0, 0, 15, 3, 3]
            }, {
              Col: [0, 0, 0, 0, 8]
            }, {
              Col: [0, 0, 0, 0, 9]
            }, {
              Col: [0, 0, 0, 0, 7]
            }],
            FinalStageSymbol: [{
              Col: [2, 2, 4, 2, 5]
            }, {
              Col: [15, 6, 6, 1, 1]
            }, {
              Col: [2, 2, 15, 3, 3]
            }, {
              Col: [2, 2, 2, 2, 8]
            }, {
              Col: [2, 2, 2, 2, 9]
            }, {
              Col: [2, 2, 2, 2, 7]
            }],
            AwardDataVec: [{
              Symbol: 2,
              Count: 17,
              Win: 9
            }],
            KeepSymbol: [2],
            ComboTag: [{
              Col: [8, 8, 0, 8, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [8, 8, 0, 0, 0]
            }, {
              Col: [8, 8, 8, 8, 0]
            }, {
              Col: [8, 8, 8, 8, 0]
            }, {
              Col: [8, 8, 8, 8, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            ComboStageWin: 9,
            BonusType: 2,
            GetTrans: false,
            GetBonus: false
          }],
          BounsData: [2, 2, 3],
          RoundWin: 9,
          FreeRemainRound: 9,
          FreeTotalRound: 12,
          SpecialCount: 2,
          AddRounds: 2,
          AwardTypeFlag: 21,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [0, 0, 1, 1, 9]
            }, {
              Col: [4, 8, 8, 3, 3]
            }, {
              Col: [6, 5, 5, 0, 0]
            }, {
              Col: [1, 0, 0, 7, 7]
            }, {
              Col: [0, 3, 3, 9, 9]
            }, {
              Col: [0, 8, 8, 4, 4]
            }],
            FinalStageSymbol: [{
              Col: [0, 0, 9, 9, 3]
            }, {
              Col: [7, 7, 5, 5, 4]
            }, {
              Col: [0, 0, 1, 1, 9]
            }, {
              Col: [0, 0, 6, 6, 8]
            }, {
              Col: [0, 3, 3, 5, 5]
            }, {
              Col: [0, 8, 8, 1, 1]
            }],
            AwardDataVec: [],
            KeepSymbol: [0],
            ComboTag: [{
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 0, 0]
            }, {
              Col: [1, 0, 0, 1, 1]
            }, {
              Col: [0, 1, 1, 1, 1]
            }, {
              Col: [0, 1, 1, 1, 1]
            }],
            FillSymbols: [{
              Col: [9, 9, 3]
            }, {
              Col: [7, 7, 5, 5, 4]
            }, {
              Col: [1, 1, 9]
            }, {
              Col: [6, 6, 8]
            }, {
              Col: [3, 3, 5, 5]
            }, {
              Col: [8, 8, 1, 1]
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }, {
            ComboStageSymbol: [{
              Col: [0, 0, 9, 9, 3]
            }, {
              Col: [7, 7, 5, 5, 4]
            }, {
              Col: [0, 0, 1, 1, 9]
            }, {
              Col: [0, 0, 6, 6, 8]
            }, {
              Col: [0, 3, 3, 5, 5]
            }, {
              Col: [0, 8, 8, 1, 1]
            }],
            FinalStageSymbol: [{
              Col: [0, 0, 9, 9, 3]
            }, {
              Col: [0, 7, 5, 5, 4]
            }, {
              Col: [0, 0, 1, 1, 9]
            }, {
              Col: [0, 0, 6, 6, 8]
            }, {
              Col: [0, 3, 3, 5, 5]
            }, {
              Col: [0, 8, 8, 0, 1]
            }],
            AwardDataVec: [],
            KeepSymbol: [0],
            ComboTag: [{
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [4, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 4, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            BonusType: 1,
            ComboStageWin: 0,
            GetTrans: false,
            GetBonus: false
          }, {
            ComboStageSymbol: [{
              Col: [0, 0, 9, 9, 3]
            }, {
              Col: [0, 7, 5, 5, 4]
            }, {
              Col: [0, 0, 1, 1, 9]
            }, {
              Col: [0, 0, 6, 6, 8]
            }, {
              Col: [0, 3, 3, 5, 5]
            }, {
              Col: [0, 8, 8, 0, 1]
            }],
            FinalStageSymbol: [{
              Col: [2, 2, 9, 9, 3]
            }, {
              Col: [2, 7, 5, 5, 4]
            }, {
              Col: [2, 2, 1, 1, 9]
            }, {
              Col: [2, 2, 6, 6, 8]
            }, {
              Col: [2, 3, 3, 5, 5]
            }, {
              Col: [2, 8, 8, 2, 1]
            }],
            AwardDataVec: [{
              Symbol: 2,
              Count: 10,
              Win: 5.4
            }],
            KeepSymbol: [2],
            ComboTag: [{
              Col: [8, 8, 0, 0, 0]
            }, {
              Col: [8, 0, 0, 0, 0]
            }, {
              Col: [8, 8, 0, 0, 0]
            }, {
              Col: [8, 8, 0, 0, 0]
            }, {
              Col: [8, 0, 0, 0, 0]
            }, {
              Col: [8, 0, 0, 8, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            ComboStageWin: 5.4,
            BonusType: 2,
            GetTrans: false,
            GetBonus: false
          }],
          BounsData: [2, 2, 9],
          RoundWin: 5.4,
          FreeRemainRound: 8,
          FreeTotalRound: 12,
          AwardTypeFlag: 5,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [15, 5, 5, 1, 1]
            }, {
              Col: [3, 9, 9, 4, 4]
            }, {
              Col: [0, 0, 2, 2, 8]
            }, {
              Col: [6, 6, 7, 7, 1]
            }, {
              Col: [9, 5, 5, 4, 4]
            }, {
              Col: [2, 2, 3, 3, 0]
            }],
            FinalStageSymbol: [{
              Col: [15, 5, 5, 1, 1]
            }, {
              Col: [3, 9, 9, 4, 4]
            }, {
              Col: [0, 0, 2, 2, 8]
            }, {
              Col: [6, 6, 7, 7, 1]
            }, {
              Col: [9, 5, 5, 4, 4]
            }, {
              Col: [2, 2, 3, 3, 0]
            }],
            AwardDataVec: [],
            KeepSymbol: [],
            ComboTag: [{
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }],
          BounsData: [3, 6, 14],
          FreeRemainRound: 8,
          FreeTotalRound: 13,
          SpecialCount: 1,
          AddRounds: 1,
          AwardTypeFlag: 20,
          RoundWin: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [8, 8, 4, 4, 3]
            }, {
              Col: [2, 6, 6, 9, 9]
            }, {
              Col: [5, 0, 0, 1, 1]
            }, {
              Col: [4, 7, 7, 8, 8]
            }, {
              Col: [9, 6, 6, 3, 3]
            }, {
              Col: [0, 1, 1, 2, 2]
            }],
            FinalStageSymbol: [{
              Col: [8, 8, 4, 4, 3]
            }, {
              Col: [2, 6, 6, 9, 9]
            }, {
              Col: [5, 0, 0, 1, 1]
            }, {
              Col: [4, 7, 7, 8, 8]
            }, {
              Col: [9, 6, 6, 3, 3]
            }, {
              Col: [0, 1, 1, 2, 2]
            }],
            AwardDataVec: [],
            KeepSymbol: [],
            ComboTag: [{
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }],
          BounsData: [8, 9, 8],
          FreeRemainRound: 7,
          FreeTotalRound: 13,
          AwardTypeFlag: 4,
          RoundWin: 0,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [4, 8, 8, 9, 9]
            }, {
              Col: [5, 5, 7, 7, 1]
            }, {
              Col: [2, 2, 3, 3, 6]
            }, {
              Col: [8, 9, 9, 0, 0]
            }, {
              Col: [4, 4, 7, 7, 5]
            }, {
              Col: [1, 1, 2, 2, 3]
            }],
            FinalStageSymbol: [{
              Col: [4, 8, 8, 9, 9]
            }, {
              Col: [5, 5, 7, 7, 1]
            }, {
              Col: [2, 2, 3, 3, 6]
            }, {
              Col: [8, 9, 9, 0, 0]
            }, {
              Col: [4, 4, 7, 7, 5]
            }, {
              Col: [1, 1, 2, 2, 3]
            }],
            AwardDataVec: [],
            KeepSymbol: [],
            ComboTag: [{
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }],
          BounsData: [5, 1, 11],
          FreeRemainRound: 6,
          FreeTotalRound: 13,
          AwardTypeFlag: 4,
          RoundWin: 0,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [8, 8, 4, 4, 0]
            }, {
              Col: [0, 0, 5, 5, 6]
            }, {
              Col: [3, 3, 0, 0, 9]
            }, {
              Col: [0, 0, 7, 7, 1]
            }, {
              Col: [4, 4, 8, 8, 5]
            }, {
              Col: [0, 3, 3, 6, 6]
            }],
            FinalStageSymbol: [{
              Col: [0, 4, 4, 8, 8]
            }, {
              Col: [0, 0, 1, 1, 5]
            }, {
              Col: [0, 0, 6, 6, 9]
            }, {
              Col: [0, 0, 7, 7, 3]
            }, {
              Col: [1, 1, 3, 3, 5]
            }, {
              Col: [0, 9, 9, 7, 7]
            }],
            AwardDataVec: [],
            KeepSymbol: [0],
            ComboTag: [{
              Col: [1, 1, 1, 1, 0]
            }, {
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [1, 1, 0, 0, 1]
            }, {
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [0, 1, 1, 1, 1]
            }],
            FillSymbols: [{
              Col: [4, 4, 8, 8]
            }, {
              Col: [1, 1, 5]
            }, {
              Col: [6, 6, 9]
            }, {
              Col: [7, 7, 3]
            }, {
              Col: [1, 1, 3, 3, 5]
            }, {
              Col: [9, 9, 7, 7]
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }, {
            ComboStageSymbol: [{
              Col: [0, 4, 4, 8, 8]
            }, {
              Col: [0, 0, 1, 1, 5]
            }, {
              Col: [0, 0, 6, 6, 9]
            }, {
              Col: [0, 0, 7, 7, 3]
            }, {
              Col: [1, 1, 3, 3, 5]
            }, {
              Col: [0, 9, 9, 7, 7]
            }],
            FinalStageSymbol: [{
              Col: [0, 0, 4, 8, 8]
            }, {
              Col: [0, 0, 1, 1, 5]
            }, {
              Col: [0, 0, 6, 6, 9]
            }, {
              Col: [0, 0, 7, 7, 3]
            }, {
              Col: [1, 1, 3, 3, 5]
            }, {
              Col: [0, 9, 9, 7, 7]
            }],
            AwardDataVec: [],
            KeepSymbol: [0],
            ComboTag: [{
              Col: [0, 4, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            BonusType: 1,
            ComboStageWin: 0,
            GetTrans: false,
            GetBonus: false
          }, {
            ComboStageSymbol: [{
              Col: [0, 0, 4, 8, 8]
            }, {
              Col: [0, 0, 1, 1, 5]
            }, {
              Col: [0, 0, 6, 6, 9]
            }, {
              Col: [0, 0, 7, 7, 3]
            }, {
              Col: [1, 1, 3, 3, 5]
            }, {
              Col: [0, 9, 9, 7, 7]
            }],
            FinalStageSymbol: [{
              Col: [2, 2, 4, 8, 8]
            }, {
              Col: [2, 2, 1, 1, 5]
            }, {
              Col: [2, 2, 6, 6, 9]
            }, {
              Col: [2, 2, 7, 7, 3]
            }, {
              Col: [1, 1, 3, 3, 5]
            }, {
              Col: [2, 9, 9, 7, 7]
            }],
            AwardDataVec: [{
              Symbol: 2,
              Count: 9,
              Win: 1.5
            }],
            KeepSymbol: [2],
            ComboTag: [{
              Col: [8, 8, 0, 0, 0]
            }, {
              Col: [8, 8, 0, 0, 0]
            }, {
              Col: [8, 8, 0, 0, 0]
            }, {
              Col: [8, 8, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [8, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            ComboStageWin: 1.5,
            BonusType: 2,
            GetTrans: false,
            GetBonus: false
          }],
          BounsData: [1, 2, 5],
          RoundWin: 1.5,
          FreeRemainRound: 5,
          FreeTotalRound: 13,
          AwardTypeFlag: 5,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [3, 3, 9, 9, 7]
            }, {
              Col: [5, 5, 1, 1, 6]
            }, {
              Col: [8, 8, 0, 0, 4]
            }, {
              Col: [3, 2, 2, 9, 9]
            }, {
              Col: [1, 1, 7, 7, 5]
            }, {
              Col: [8, 0, 0, 6, 6]
            }],
            FinalStageSymbol: [{
              Col: [3, 3, 9, 9, 7]
            }, {
              Col: [5, 5, 1, 1, 6]
            }, {
              Col: [8, 8, 0, 0, 4]
            }, {
              Col: [3, 2, 2, 9, 9]
            }, {
              Col: [1, 1, 7, 7, 5]
            }, {
              Col: [8, 0, 0, 6, 6]
            }],
            AwardDataVec: [],
            KeepSymbol: [],
            ComboTag: [{
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }],
          BounsData: [2, 6, 5],
          FreeRemainRound: 4,
          FreeTotalRound: 13,
          AwardTypeFlag: 4,
          RoundWin: 0,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [2, 2, 1, 1, 5]
            }, {
              Col: [6, 6, 2, 2, 0]
            }, {
              Col: [9, 8, 8, 2, 2]
            }, {
              Col: [4, 7, 7, 2, 2]
            }, {
              Col: [1, 1, 5, 5, 6]
            }, {
              Col: [0, 0, 8, 8, 2]
            }],
            FinalStageSymbol: [{
              Col: [2, 2, 1, 1, 4]
            }, {
              Col: [2, 2, 9, 9, 8]
            }, {
              Col: [2, 2, 5, 5, 2]
            }, {
              Col: [2, 2, 9, 9, 8]
            }, {
              Col: [7, 7, 6, 6, 0]
            }, {
              Col: [2, 5, 5, 6, 6]
            }],
            AwardDataVec: [],
            KeepSymbol: [2],
            ComboTag: [{
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [1, 1, 0, 0, 1]
            }, {
              Col: [1, 1, 1, 0, 0]
            }, {
              Col: [1, 1, 1, 0, 0]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 1, 0]
            }],
            FillSymbols: [{
              Col: [1, 1, 4]
            }, {
              Col: [9, 9, 8]
            }, {
              Col: [5, 5, 2]
            }, {
              Col: [9, 9, 8]
            }, {
              Col: [7, 7, 6, 6, 0]
            }, {
              Col: [5, 5, 6, 6]
            }],
            ComboStageWin: 0,
            GetTrans: false,
            GetBonus: false,
            BonusType: 0
          }, {
            ComboStageSymbol: [{
              Col: [2, 2, 1, 1, 4]
            }, {
              Col: [2, 2, 9, 9, 8]
            }, {
              Col: [2, 2, 5, 5, 2]
            }, {
              Col: [2, 2, 9, 9, 8]
            }, {
              Col: [7, 7, 6, 6, 0]
            }, {
              Col: [2, 5, 5, 6, 6]
            }],
            FinalStageSymbol: [{
              Col: [2, 2, 0, 0, 6]
            }, {
              Col: [2, 2, 4, 4, 7]
            }, {
              Col: [2, 2, 2, 5, 5]
            }, {
              Col: [2, 2, 8, 8, 9]
            }, {
              Col: [1, 1, 0, 0, 6]
            }, {
              Col: [2, 5, 5, 8, 8]
            }],
            AwardDataVec: [],
            KeepSymbol: [2],
            ComboTag: [{
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [0, 0, 1, 1, 0]
            }, {
              Col: [0, 0, 1, 1, 1]
            }, {
              Col: [1, 1, 1, 1, 1]
            }, {
              Col: [0, 1, 1, 1, 1]
            }],
            FillSymbols: [{
              Col: [0, 0, 6]
            }, {
              Col: [4, 4, 7]
            }, {
              Col: [5, 5]
            }, {
              Col: [8, 8, 9]
            }, {
              Col: [1, 1, 0, 0, 6]
            }, {
              Col: [5, 5, 8, 8]
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }, {
            ComboStageSymbol: [{
              Col: [2, 2, 0, 0, 6]
            }, {
              Col: [2, 2, 4, 4, 7]
            }, {
              Col: [2, 2, 2, 5, 5]
            }, {
              Col: [2, 2, 8, 8, 9]
            }, {
              Col: [1, 1, 0, 0, 6]
            }, {
              Col: [2, 5, 5, 8, 8]
            }],
            FinalStageSymbol: [{
              Col: [2, 2, 2, 0, 6]
            }, {
              Col: [2, 2, 4, 4, 7]
            }, {
              Col: [2, 2, 2, 5, 5]
            }, {
              Col: [2, 2, 8, 8, 9]
            }, {
              Col: [1, 1, 0, 0, 6]
            }, {
              Col: [2, 5, 5, 8, 8]
            }],
            AwardDataVec: [],
            KeepSymbol: [2],
            ComboTag: [{
              Col: [0, 0, 4, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            BonusType: 1,
            ComboStageWin: 0,
            GetTrans: false,
            GetBonus: false
          }, {
            ComboStageSymbol: [{
              Col: [2, 2, 2, 0, 6]
            }, {
              Col: [2, 2, 4, 4, 7]
            }, {
              Col: [2, 2, 2, 5, 5]
            }, {
              Col: [2, 2, 8, 8, 9]
            }, {
              Col: [1, 1, 0, 0, 6]
            }, {
              Col: [2, 5, 5, 8, 8]
            }],
            FinalStageSymbol: [{
              Col: [3, 3, 3, 0, 6]
            }, {
              Col: [3, 3, 4, 4, 7]
            }, {
              Col: [3, 3, 3, 5, 5]
            }, {
              Col: [3, 3, 8, 8, 9]
            }, {
              Col: [1, 1, 0, 0, 6]
            }, {
              Col: [3, 5, 5, 8, 8]
            }],
            AwardDataVec: [{
              Symbol: 3,
              Count: 11,
              Win: 8.4
            }],
            KeepSymbol: [3],
            ComboTag: [{
              Col: [8, 8, 8, 0, 0]
            }, {
              Col: [8, 8, 0, 0, 0]
            }, {
              Col: [8, 8, 8, 0, 0]
            }, {
              Col: [8, 8, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [8, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            ComboStageWin: 8.4,
            BonusType: 2,
            GetTrans: false,
            GetBonus: false
          }],
          BounsData: [1, 1, 7],
          RoundWin: 8.4,
          FreeRemainRound: 3,
          FreeTotalRound: 13,
          AwardTypeFlag: 5,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [0, 3, 3, 8, 8]
            }, {
              Col: [9, 9, 2, 2, 1]
            }, {
              Col: [4, 6, 6, 5, 5]
            }, {
              Col: [3, 3, 7, 7, 8]
            }, {
              Col: [2, 9, 9, 0, 0]
            }, {
              Col: [5, 6, 6, 1, 1]
            }],
            FinalStageSymbol: [{
              Col: [0, 3, 3, 8, 8]
            }, {
              Col: [9, 9, 2, 2, 1]
            }, {
              Col: [4, 6, 6, 5, 5]
            }, {
              Col: [3, 3, 7, 7, 8]
            }, {
              Col: [2, 9, 9, 0, 0]
            }, {
              Col: [5, 6, 6, 1, 1]
            }],
            AwardDataVec: [],
            KeepSymbol: [],
            ComboTag: [{
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }],
          BounsData: [4, 3, 8],
          FreeRemainRound: 2,
          FreeTotalRound: 13,
          AwardTypeFlag: 4,
          RoundWin: 0,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [2, 2, 9, 9, 0]
            }, {
              Col: [7, 4, 4, 1, 1]
            }, {
              Col: [8, 8, 5, 5, 3]
            }, {
              Col: [9, 6, 6, 2, 2]
            }, {
              Col: [1, 0, 0, 4, 4]
            }, {
              Col: [7, 7, 5, 5, 8]
            }],
            FinalStageSymbol: [{
              Col: [2, 2, 9, 9, 0]
            }, {
              Col: [7, 4, 4, 1, 1]
            }, {
              Col: [8, 8, 5, 5, 3]
            }, {
              Col: [9, 6, 6, 2, 2]
            }, {
              Col: [1, 0, 0, 4, 4]
            }, {
              Col: [7, 7, 5, 5, 8]
            }],
            AwardDataVec: [],
            KeepSymbol: [],
            ComboTag: [{
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }],
          BounsData: [6, 1, 12],
          FreeRemainRound: 1,
          FreeTotalRound: 13,
          AwardTypeFlag: 4,
          RoundWin: 0,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }, {
          ComboStageData: [{
            ComboStageSymbol: [{
              Col: [6, 6, 1, 1, 4]
            }, {
              Col: [7, 7, 0, 0, 8]
            }, {
              Col: [5, 5, 2, 2, 3]
            }, {
              Col: [6, 6, 9, 9, 1]
            }, {
              Col: [0, 7, 7, 4, 4]
            }, {
              Col: [5, 2, 2, 8, 8]
            }],
            FinalStageSymbol: [{
              Col: [6, 6, 1, 1, 4]
            }, {
              Col: [7, 7, 0, 0, 8]
            }, {
              Col: [5, 5, 2, 2, 3]
            }, {
              Col: [6, 6, 9, 9, 1]
            }, {
              Col: [0, 7, 7, 4, 4]
            }, {
              Col: [5, 2, 2, 8, 8]
            }],
            AwardDataVec: [],
            KeepSymbol: [],
            ComboTag: [{
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0, 0]
            }],
            FillSymbols: [{
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }, {
              Col: []
            }],
            GetBonus: true,
            ComboStageWin: 0,
            GetTrans: false,
            BonusType: 0
          }],
          BounsData: [3, 5, 4],
          FreeTotalRound: 13,
          AwardTypeFlag: 12,
          RoundWin: 0,
          FreeRemainRound: 0,
          SpecialCount: 0,
          AddRounds: 0,
          MaxFlag: false
        }],
        FreeTotalWin: 6024.3,
        TotalWin: 6024.3
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "7eb002U3WdBP4RM4BO0UBoz", "GameIntro", undefined);
      var property$m = _decorator.property;
      _dec$m = property$m({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _dec2$b = property$m({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class2$m = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spineC01", _descriptor$m, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_spineC02", _descriptor2$b, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        t.prototype.PlayGameIntro = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = [];
                    i = "Start_S";
                    if (t) {
                      i = "Start_L";
                    }
                    n.push(SpineKit.PlayAnimation(this.m_spineC01, i));
                    n.push(SpineKit.PlayAnimation(this.m_spineC02, i));
                    e.next = 7;
                    return Promise.all(n);
                  case 7:
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
        return t;
      }(Component);
      _descriptor$m = _applyDecoratedDescriptor(_class2$m.prototype, "m_spineC01", [_dec$m], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$b = _applyDecoratedDescriptor(_class2$m.prototype, "m_spineC02", [_dec2$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "27087y2bqVF3qXVgHLNLNyr", "AwardState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "fd983Rv/wRCe5CVA8GAF0Qw", "CheckMatchState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ff894bniGNEo437LBhmsPdA", "CheckState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "74d53ZTwslEHLZhVfof/wJj", "ConnectionLineState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "98cdcOeGQRP97FsotBq9t55", "EnterFreeState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8aabeawrORN54gSR2DjzQn0", "FeatureShowState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c084dvlS2tClrS7FiwWkdL9", "FreeGameAddSpinState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0c4d5dPawVPN6qYRVDovkJN", "IdleState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f09e9jbTtxCtaCh/j48wN9e", "LeaveFreeState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3e5eeLI9zxDCJadL/X2ddBj", "MainGameBonusState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e0311wAFutMdLqL9SqLi2CJ", "PatchUpState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6ce304+WgxJD4K2Z3SrZ6VR", "PlateShowState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "887078LMgZNgrfQDpkkDpJg", "RoundEndState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6326cYW7NND4YGL/+sTZiQY", "RoundShowEndState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6c5c0/57DtKU4d+sIHC1uS3", "SpinState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ce879qRJbFPFZHmiQhUB/1+", "SymbolExchangeState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "08918vBWrVDhIqTtnoiCCSi", "SymbolRemoveState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "31de1eqVQhPZ4IziugL5rSQ", "UnshowPrepareState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2ac578j7h1G+Lx4A6jmURpB", "WaitReadyState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "47017ObaytBkJbuF4whKGyN", "WaitResState", undefined);
      cclegacy._RF.pop();
      var CjsLoader = function () {
        function e() {
          this._registry = {};
          this._moduleCache = {};
        }
        var t = e.prototype;
        t.define = function (e, t, n) {
          this._registry[e] = {
            factory: t,
            resolveMap: n
          };
        };
        t.require = function (e) {
          return this._require(e);
        };
        t.throwInvalidWrapper = function (e, t) {
          throw new Error("Module '" + e + "' imported from '" + t + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        t._require = function (e, t) {
          var n = this._moduleCache[e];
          if (n) {
            return n.exports;
          }
          var i = {
            id: e,
            exports: {}
          };
          this._moduleCache[e] = i;
          this._tryModuleLoad(i, e);
          return i.exports;
        };
        t._resolve = function (e, t) {
          return this._resolveFromInfos(e, t) || this._throwUnresolved(e, t);
        };
        t._resolveFromInfos = function (e, t) {
          var n;
          var i;
          return e in cjsInfos ? e : t && null != (n = null == (i = cjsInfos[t]) ? undefined : i.resolveCache[e]) ? n : undefined;
        };
        t._tryModuleLoad = function (e, t) {
          var n = true;
          try {
            this._load(e, t);
            n = false;
          } finally {
            if (n) {
              delete this._moduleCache[t];
            }
          }
        };
        t._load = function (e, t) {
          var n = this._loadWrapper(t);
          var i = n.factory;
          var o = n.resolveMap;
          var r = this._createRequire(e);
          var a = o ? this._createRequireWithResolveMap("function" == typeof o ? o() : o, r) : r;
          i(e.exports, a, e);
        };
        t._loadWrapper = function (e) {
          return e in this._registry ? this._registry[e] : this._loadHostProvidedModules(e);
        };
        t._loadHostProvidedModules = function (e) {
          return {
            factory: function (t, n, i) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + e + "'.");
              }
              try {
                i.exports = require(e);
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
          return function (n) {
            return t._require(n, e);
          };
        };
        t._createRequireWithResolveMap = function (e, t) {
          return function (n) {
            var i = e[n];
            if (i) {
              return t(i);
            }
            throw new Error("Unresolved specifier " + n);
          };
        };
        t._throwUnresolved = function (e, t) {
          throw new Error("Unable to resolve " + e + " from " + parent + ".");
        };
        return e;
      }();
      var loader = new CjsLoader();
      var _cjsExports;
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/long/src/long.js", function (e, t, n, i, o) {
        n.exports = a;
        var r = null;
        try {
          r = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
        } catch (e) {}
        function a(e, t, n) {
          this.low = 0 | e;
          this.high = 0 | t;
          this.unsigned = !!n;
        }
        function s(e) {
          return true === (e && e.__isLong__);
        }
        a.prototype.__isLong__;
        Object.defineProperty(a.prototype, "__isLong__", {
          value: true
        });
        a.isLong = s;
        var l = {};
        var c = {};
        function u(e, t) {
          var n;
          var i;
          var o;
          return t ? (o = 0 <= (e >>>= 0) && e < 256) && (i = c[e]) ? i : (n = new a(e, (0 | e) < 0 ? -1 : 0, true), o && (c[e] = n), n) : (o = -128 <= (e |= 0) && e < 128) && (i = l[e]) ? i : (n = new a(e, e < 0 ? -1 : 0, false), o && (l[e] = n), n);
        }
        function p(e, t) {
          if (isNaN(e)) {
            return t ? C : b;
          }
          if (t) {
            if (e < 0) {
              return C;
            }
            if (e >= 18446744073709552000) {
              return R;
            }
          } else {
            if (e <= -9223372036854776000) {
              return T;
            }
            if (e + 1 >= 9223372036854776000) {
              return A;
            }
          }
          return e < 0 ? p(-e, t).neg() : new a(e % 4294967296 | 0, e / 4294967296 | 0, t);
        }
        function m(e, t, n) {
          return new a(e, t, n);
        }
        a.fromInt = u;
        a.fromNumber = p;
        a.fromBits = m;
        var _ = Math.pow;
        function d(e, t, n) {
          if (0 === e.length) {
            throw Error("empty string");
          }
          if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) {
            return b;
          }
          if ("number" == typeof t) {
            n = t;
            t = false;
          } else {
            t = !!t;
          }
          if ((n = n || 10) < 2 || 36 < n) {
            throw RangeError("radix");
          }
          var i;
          if ((i = e.indexOf("-")) > 0) {
            throw Error("interior hyphen");
          }
          if (0 === i) {
            return d(e.substring(1), t, n).neg();
          }
          var o = p(_(n, 8));
          var r = b;
          for (var a = 0; a < e.length; a += 8) {
            var s = Math.min(8, e.length - a);
            var l = parseInt(e.substring(a, a + s), n);
            if (s < 8) {
              var c = p(_(n, s));
              r = r.mul(c).add(p(l));
            } else {
              r = (r = r.mul(o)).add(p(l));
            }
          }
          r.unsigned = t;
          return r;
        }
        function f(e, t) {
          return "number" == typeof e ? p(e, t) : "string" == typeof e ? d(e, t) : new a(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
        }
        a.fromString = d;
        a.fromValue = f;
        var g = u(16777216);
        var b = u(0);
        a.ZERO = b;
        var C = u(0, true);
        a.UZERO = C;
        var v = u(1);
        a.ONE = v;
        var w = u(1, true);
        a.UONE = w;
        var $ = u(-1);
        a.NEG_ONE = $;
        var A = new a(-1, 2147483647, false);
        a.MAX_VALUE = A;
        var R = new a(-1, -1, true);
        a.MAX_UNSIGNED_VALUE = R;
        var T = new a(0, -2147483648, false);
        a.MIN_VALUE = T;
        var E = a.prototype;
        E.toInt = function () {
          return this.unsigned ? this.low >>> 0 : this.low;
        };
        E.toNumber = function () {
          return this.unsigned ? (this.high >>> 0) * 4294967296 + (this.low >>> 0) : this.high * 4294967296 + (this.low >>> 0);
        };
        E.toString = function (e) {
          if ((e = e || 10) < 2 || 36 < e) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return "0";
          }
          if (this.isNegative()) {
            if (this.eq(T)) {
              var t = p(e);
              var n = this.div(t);
              var i = n.mul(t).sub(this);
              return n.toString(e) + i.toInt().toString(e);
            }
            return "-" + this.neg().toString(e);
          }
          var o = p(_(e, 6), this.unsigned);
          var r = this;
          for (var a = "";;) {
            var s = r.div(o);
            var l = (r.sub(s.mul(o)).toInt() >>> 0).toString(e);
            if ((r = s).isZero()) {
              return l + a;
            }
            for (; l.length < 6;) {
              l = "0" + l;
            }
            a = "" + l + a;
          }
        };
        E.getHighBits = function () {
          return this.high;
        };
        E.getHighBitsUnsigned = function () {
          return this.high >>> 0;
        };
        E.getLowBits = function () {
          return this.low;
        };
        E.getLowBitsUnsigned = function () {
          return this.low >>> 0;
        };
        E.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(T) ? 64 : this.neg().getNumBitsAbs();
          }
          var e = 0 != this.high ? this.high : this.low;
          for (var t = 31; t > 0 && 0 == (e & 1 << t); t--) {
            ;
          }
          return 0 != this.high ? t + 33 : t + 1;
        };
        E.isZero = function () {
          return 0 === this.high && 0 === this.low;
        };
        E.eqz = E.isZero;
        E.isNegative = function () {
          return !this.unsigned && this.high < 0;
        };
        E.isPositive = function () {
          return this.unsigned || this.high >= 0;
        };
        E.isOdd = function () {
          return 1 == (1 & this.low);
        };
        E.isEven = function () {
          return 0 == (1 & this.low);
        };
        E.equals = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? p(e, undefined) : "string" == typeof e ? d(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
        };
        E.eq = E.equals;
        E.notEquals = function (e) {
          return !this.eq(e);
        };
        E.neq = E.notEquals;
        E.ne = E.notEquals;
        E.lessThan = function (e) {
          return this.comp(e) < 0;
        };
        E.lt = E.lessThan;
        E.lessThanOrEqual = function (e) {
          return this.comp(e) <= 0;
        };
        E.lte = E.lessThanOrEqual;
        E.le = E.lessThanOrEqual;
        E.greaterThan = function (e) {
          return this.comp(e) > 0;
        };
        E.gt = E.greaterThan;
        E.greaterThanOrEqual = function (e) {
          return this.comp(e) >= 0;
        };
        E.gte = E.greaterThanOrEqual;
        E.ge = E.greaterThanOrEqual;
        E.compare = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? p(e, undefined) : "string" == typeof e ? d(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          if (this.eq(e)) {
            return 0;
          }
          var t = this.isNegative();
          var n = e.isNegative();
          return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
        };
        E.comp = E.compare;
        E.negate = function () {
          return !this.unsigned && this.eq(T) ? T : this.not().add(v);
        };
        E.neg = E.negate;
        E.add = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? p(e, undefined) : "string" == typeof e ? d(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          var t = this.high >>> 16;
          var n = 65535 & this.high;
          var i = this.low >>> 16;
          var o = 65535 & this.low;
          var r = e.high >>> 16;
          var a = 65535 & e.high;
          var l = e.low >>> 16;
          var c = 0;
          var u = 0;
          var p = 0;
          var _ = 0;
          p += (_ += o + (65535 & e.low)) >>> 16;
          u += (p += i + l) >>> 16;
          c += (u += n + a) >>> 16;
          c += t + r;
          return new a((p &= 65535) << 16 | (_ &= 65535), (c &= 65535) << 16 | (u &= 65535), this.unsigned);
        };
        E.subtract = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? p(e, undefined) : "string" == typeof e ? d(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return this.add(e.neg());
        };
        E.sub = E.subtract;
        E.multiply = function (e) {
          if (this.isZero()) {
            return b;
          }
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? p(e, undefined) : "string" == typeof e ? d(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          if (r) {
            return new a(r.mul(this.low, this.high, e.low, e.high), r.get_high(), this.unsigned);
          }
          if (e.isZero()) {
            return b;
          }
          if (this.eq(T)) {
            return e.isOdd() ? T : b;
          }
          if (e.eq(T)) {
            return this.isOdd() ? T : b;
          }
          if (this.isNegative()) {
            return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
          }
          if (e.isNegative()) {
            return this.mul(e.neg()).neg();
          }
          if (this.lt(g) && e.lt(g)) {
            return p(this.toNumber() * e.toNumber(), this.unsigned);
          }
          var t = this.high >>> 16;
          var n = 65535 & this.high;
          var i = this.low >>> 16;
          var o = 65535 & this.low;
          var a = e.high >>> 16;
          var l = 65535 & e.high;
          var c = e.low >>> 16;
          var u = 65535 & e.low;
          var _ = 0;
          var d = 0;
          var h = 0;
          var y = 0;
          h += (y += o * u) >>> 16;
          d += (h += i * u) >>> 16;
          h &= 65535;
          d += (h += o * c) >>> 16;
          _ += (d += n * u) >>> 16;
          d &= 65535;
          _ += (d += i * c) >>> 16;
          d &= 65535;
          _ += (d += o * l) >>> 16;
          _ += t * u + n * c + i * l + o * a;
          return new a((h &= 65535) << 16 | (y &= 65535), (_ &= 65535) << 16 | (d &= 65535), this.unsigned);
        };
        E.mul = E.multiply;
        E.divide = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? p(e, undefined) : "string" == typeof e ? d(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          if (e.isZero()) {
            throw Error("division by zero");
          }
          var t;
          var n;
          var i;
          if (r) {
            return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? new a((this.unsigned ? r.div_u : r.div_s)(this.low, this.high, e.low, e.high), r.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? C : b;
          }
          if (this.unsigned) {
            if (!e.unsigned) {
              e = e.toUnsigned();
            }
            if (e.gt(this)) {
              return C;
            }
            if (e.gt(this.shru(1))) {
              return w;
            }
            i = C;
          } else {
            if (this.eq(T)) {
              return e.eq(v) || e.eq($) ? T : e.eq(T) ? v : (t = this.shr(1).div(e).shl(1)).eq(b) ? e.isNegative() ? v : $ : (n = this.sub(e.mul(t)), i = t.add(n.div(e)));
            }
            if (e.eq(T)) {
              return this.unsigned ? C : b;
            }
            if (this.isNegative()) {
              return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            }
            if (e.isNegative()) {
              return this.div(e.neg()).neg();
            }
            i = b;
          }
          for (n = this; n.gte(e);) {
            t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
            var o = Math.ceil(Math.log(t) / Math.LN2);
            var a = o <= 48 ? 1 : _(2, o - 48);
            var l = p(t);
            for (var c = l.mul(e); c.isNegative() || c.gt(n);) {
              c = (l = p(t -= a, this.unsigned)).mul(e);
            }
            if (l.isZero()) {
              l = v;
            }
            i = i.add(l);
            n = n.sub(c);
          }
          return i;
        };
        E.div = E.divide;
        E.modulo = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? p(e, undefined) : "string" == typeof e ? d(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return r ? new a((this.unsigned ? r.rem_u : r.rem_s)(this.low, this.high, e.low, e.high), r.get_high(), this.unsigned) : this.sub(this.div(e).mul(e));
        };
        E.mod = E.modulo;
        E.rem = E.modulo;
        E.not = function () {
          return new a(~this.low, ~this.high, this.unsigned);
        };
        E.and = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? p(e, undefined) : "string" == typeof e ? d(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return new a(this.low & e.low, this.high & e.high, this.unsigned);
        };
        E.or = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? p(e, undefined) : "string" == typeof e ? d(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return new a(this.low | e.low, this.high | e.high, this.unsigned);
        };
        E.xor = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? p(e, undefined) : "string" == typeof e ? d(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return new a(this.low ^ e.low, this.high ^ e.high, this.unsigned);
        };
        E.shiftLeft = function (e) {
          if (true === (e && e.__isLong__)) {
            e = e.toInt();
          }
          return 0 == (e &= 63) ? this : e < 32 ? new a(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : new a(0, this.low << e - 32, this.unsigned);
        };
        E.shl = E.shiftLeft;
        E.shiftRight = function (e) {
          if (true === (e && e.__isLong__)) {
            e = e.toInt();
          }
          return 0 == (e &= 63) ? this : e < 32 ? new a(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : new a(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        };
        E.shr = E.shiftRight;
        E.shiftRightUnsigned = function (e) {
          if (true === (e && e.__isLong__)) {
            e = e.toInt();
          }
          if (0 === (e &= 63)) {
            return this;
          }
          var t = this.high;
          return e < 32 ? new a(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : new a(32 === e ? t : t >>> e - 32, 0, this.unsigned);
        };
        E.shru = E.shiftRightUnsigned;
        E.shr_u = E.shiftRightUnsigned;
        E.toSigned = function () {
          return this.unsigned ? new a(this.low, this.high, false) : this;
        };
        E.toUnsigned = function () {
          return this.unsigned ? this : new a(this.low, this.high, true);
        };
        E.toBytes = function (e) {
          return e ? this.toBytesLE() : this.toBytesBE();
        };
        E.toBytesLE = function () {
          var e = this.high;
          var t = this.low;
          return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24];
        };
        E.toBytesBE = function () {
          var e = this.high;
          var t = this.low;
          return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t];
        };
        a.fromBytes = function (e, t, n) {
          return n ? a.fromBytesLE(e, t) : a.fromBytesBE(e, t);
        };
        a.fromBytesLE = function (e, t) {
          return new a(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t);
        };
        a.fromBytesBE = function (e, t) {
          return new a(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t);
        };
        _cjsExports = n.exports;
      }, {});
      loader.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/long/src/long.js");
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (e, t, n, i, o) {
        n.exports = function (e, t) {
          var n = new Array(arguments.length - 1);
          var i = 0;
          var o = 2;
          var r = true;
          for (; o < arguments.length;) {
            n[i++] = arguments[o++];
          }
          return new Promise(function (o, a) {
            n[i] = function (e) {
              if (r) {
                r = false;
                if (e) {
                  a(e);
                } else {
                  var t = new Array(arguments.length - 1);
                  for (var n = 0; n < t.length;) {
                    t[n++] = arguments[n];
                  }
                  o.apply(null, t);
                }
              }
            };
            try {
              e.apply(t || null, n);
            } catch (e) {
              if (r) {
                r = false;
                a(e);
              }
            }
          });
        };
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (e, t, n, i, o) {
        e.length = function (e) {
          var t = e.length;
          if (!t) {
            return 0;
          }
          for (var n = 0; --t % 4 > 1 && "=" === e.charAt(t);) {
            ++n;
          }
          return Math.ceil(3 * e.length) / 4 - n;
        };
        var a = new Array(64);
        var s = new Array(123);
        for (var l = 0; l < 64;) {
          s[a[l] = l < 26 ? l + 65 : l < 52 ? l + 71 : l < 62 ? l - 4 : l - 59 | 43] = l++;
        }
        e.encode = function (e, t, n) {
          var i;
          var o = null;
          var r = [];
          var s = 0;
          for (var l = 0; t < n;) {
            var c = e[t++];
            switch (l) {
              case 0:
                r[s++] = a[c >> 2];
                i = (3 & c) << 4;
                l = 1;
                break;
              case 1:
                r[s++] = a[i | c >> 4];
                i = (15 & c) << 2;
                l = 2;
                break;
              case 2:
                r[s++] = a[i | c >> 6];
                r[s++] = a[63 & c];
                l = 0;
            }
            if (s > 8191) {
              (o || (o = [])).push(String.fromCharCode.apply(String, r));
              s = 0;
            }
          }
          if (l) {
            r[s++] = a[i];
            r[s++] = 61;
            if (1 === l) {
              r[s++] = 61;
            }
          }
          return o ? (s && o.push(String.fromCharCode.apply(String, r.slice(0, s))), o.join("")) : String.fromCharCode.apply(String, r.slice(0, s));
        };
        e.decode = function (e, t, n) {
          var i;
          var o = n;
          var r = 0;
          for (var a = 0; a < e.length;) {
            var l = e.charCodeAt(a++);
            if (61 === l && r > 1) {
              break;
            }
            if (undefined === (l = s[l])) {
              throw Error("invalid encoding");
            }
            switch (r) {
              case 0:
                i = l;
                r = 1;
                break;
              case 1:
                t[n++] = i << 2 | (48 & l) >> 4;
                i = l;
                r = 2;
                break;
              case 2:
                t[n++] = (15 & i) << 4 | (60 & l) >> 2;
                i = l;
                r = 3;
                break;
              case 3:
                t[n++] = (3 & i) << 6 | l;
                r = 0;
            }
          }
          if (1 === r) {
            throw Error("invalid encoding");
          }
          return n - o;
        };
        e.test = function (e) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
        };
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (e, t, n, i, o) {
        function r() {
          this._listeners = {};
        }
        n.exports = r;
        r.prototype.on = function (e, t, n) {
          (this._listeners[e] || (this._listeners[e] = [])).push({
            fn: t,
            ctx: n || this
          });
          return this;
        };
        r.prototype.off = function (e, t) {
          if (undefined === e) {
            this._listeners = {};
          } else if (undefined === t) {
            this._listeners[e] = [];
          } else {
            var n = this._listeners[e];
            for (var i = 0; i < n.length;) {
              if (n[i].fn === t) {
                n.splice(i, 1);
              } else {
                ++i;
              }
            }
          }
          return this;
        };
        r.prototype.emit = function (e) {
          var t = this._listeners[e];
          if (t) {
            var n = [];
            for (var i = 1; i < arguments.length;) {
              n.push(arguments[i++]);
            }
            for (i = 0; i < t.length;) {
              t[i].fn.apply(t[i++].ctx, n);
            }
          }
          return this;
        };
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (e, t, n, i, o) {
        function r(e) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var t = new Float32Array([-0]);
              var n = new Uint8Array(t.buffer);
              var i = 128 === n[3];
              function o(e, i, o) {
                t[0] = e;
                i[o] = n[0];
                i[o + 1] = n[1];
                i[o + 2] = n[2];
                i[o + 3] = n[3];
              }
              function r(e, i, o) {
                t[0] = e;
                i[o] = n[3];
                i[o + 1] = n[2];
                i[o + 2] = n[1];
                i[o + 3] = n[0];
              }
              function a(e, i) {
                n[0] = e[i];
                n[1] = e[i + 1];
                n[2] = e[i + 2];
                n[3] = e[i + 3];
                return t[0];
              }
              function s(e, i) {
                n[3] = e[i];
                n[2] = e[i + 1];
                n[1] = e[i + 2];
                n[0] = e[i + 3];
                return t[0];
              }
              e.writeFloatLE = i ? o : r;
              e.writeFloatBE = i ? r : o;
              e.readFloatLE = i ? a : s;
              e.readFloatBE = i ? s : a;
            })();
          } else {
            (function () {
              function t(e, t, n, i) {
                var o = t < 0 ? 1 : 0;
                if (o) {
                  t = -t;
                }
                if (0 === t) {
                  e(1 / t > 0 ? 0 : 2147483648, n, i);
                } else if (isNaN(t)) {
                  e(2143289344, n, i);
                } else if (t > 34028234663852886e22) {
                  e((o << 31 | 2139095040) >>> 0, n, i);
                } else if (t < 11754943508222875e-54) {
                  e((o << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, n, i);
                } else {
                  var r = Math.floor(Math.log(t) / Math.LN2);
                  e((o << 31 | r + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -r) * 8388608)) >>> 0, n, i);
                }
              }
              function n(e, t, n) {
                var i = e(t, n);
                var o = 2 * (i >> 31) + 1;
                var r = i >>> 23 & 255;
                var a = 8388607 & i;
                return 255 === r ? a ? NaN : o * Infinity : 0 === r ? 1401298464324817e-60 * o * a : o * Math.pow(2, r - 150) * (a + 8388608);
              }
              e.writeFloatLE = t.bind(null, a);
              e.writeFloatBE = t.bind(null, s);
              e.readFloatLE = n.bind(null, l);
              e.readFloatBE = n.bind(null, c);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var t = new Float64Array([-0]);
              var n = new Uint8Array(t.buffer);
              var i = 128 === n[7];
              function o(e, i, o) {
                t[0] = e;
                i[o] = n[0];
                i[o + 1] = n[1];
                i[o + 2] = n[2];
                i[o + 3] = n[3];
                i[o + 4] = n[4];
                i[o + 5] = n[5];
                i[o + 6] = n[6];
                i[o + 7] = n[7];
              }
              function r(e, i, o) {
                t[0] = e;
                i[o] = n[7];
                i[o + 1] = n[6];
                i[o + 2] = n[5];
                i[o + 3] = n[4];
                i[o + 4] = n[3];
                i[o + 5] = n[2];
                i[o + 6] = n[1];
                i[o + 7] = n[0];
              }
              function a(e, i) {
                n[0] = e[i];
                n[1] = e[i + 1];
                n[2] = e[i + 2];
                n[3] = e[i + 3];
                n[4] = e[i + 4];
                n[5] = e[i + 5];
                n[6] = e[i + 6];
                n[7] = e[i + 7];
                return t[0];
              }
              function s(e, i) {
                n[7] = e[i];
                n[6] = e[i + 1];
                n[5] = e[i + 2];
                n[4] = e[i + 3];
                n[3] = e[i + 4];
                n[2] = e[i + 5];
                n[1] = e[i + 6];
                n[0] = e[i + 7];
                return t[0];
              }
              e.writeDoubleLE = i ? o : r;
              e.writeDoubleBE = i ? r : o;
              e.readDoubleLE = i ? a : s;
              e.readDoubleBE = i ? s : a;
            })();
          } else {
            (function () {
              function t(e, t, n, i, o, r) {
                var a = i < 0 ? 1 : 0;
                if (a) {
                  i = -i;
                }
                if (0 === i) {
                  e(0, o, r + t);
                  e(1 / i > 0 ? 0 : 2147483648, o, r + n);
                } else if (isNaN(i)) {
                  e(0, o, r + t);
                  e(2146959360, o, r + n);
                } else if (i > 17976931348623157e292) {
                  e(0, o, r + t);
                  e((a << 31 | 2146435072) >>> 0, o, r + n);
                } else {
                  var s;
                  if (i < 22250738585072014e-324) {
                    e((s = i / 5e-324) >>> 0, o, r + t);
                    e((a << 31 | s / 4294967296) >>> 0, o, r + n);
                  } else {
                    var l = Math.floor(Math.log(i) / Math.LN2);
                    if (1024 === l) {
                      l = 1023;
                    }
                    e(4503599627370496 * (s = i * Math.pow(2, -l)) >>> 0, o, r + t);
                    e((a << 31 | l + 1023 << 20 | 1048576 * s & 1048575) >>> 0, o, r + n);
                  }
                }
              }
              function n(e, t, n, i, o) {
                var r = e(i, o + t);
                var a = e(i, o + n);
                var s = 2 * (a >> 31) + 1;
                var l = a >>> 20 & 2047;
                var c = 4294967296 * (1048575 & a) + r;
                return 2047 === l ? c ? NaN : s * Infinity : 0 === l ? 5e-324 * s * c : s * Math.pow(2, l - 1075) * (c + 4503599627370496);
              }
              e.writeDoubleLE = t.bind(null, a, 0, 4);
              e.writeDoubleBE = t.bind(null, s, 4, 0);
              e.readDoubleLE = n.bind(null, l, 0, 4);
              e.readDoubleBE = n.bind(null, c, 4, 0);
            })();
          }
          return e;
        }
        function a(e, t, n) {
          t[n] = 255 & e;
          t[n + 1] = e >>> 8 & 255;
          t[n + 2] = e >>> 16 & 255;
          t[n + 3] = e >>> 24;
        }
        function s(e, t, n) {
          t[n] = e >>> 24;
          t[n + 1] = e >>> 16 & 255;
          t[n + 2] = e >>> 8 & 255;
          t[n + 3] = 255 & e;
        }
        function l(e, t) {
          return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
        }
        function c(e, t) {
          return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
        }
        n.exports = r(r);
        n.exports;
        n.exports.writeFloatLE;
        n.exports.writeFloatBE;
        n.exports.readFloatLE;
        n.exports.readFloatBE;
        n.exports.writeDoubleLE;
        n.exports.writeDoubleBE;
        n.exports.readDoubleLE;
        n.exports.readDoubleBE;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (exports, require, module, __filename, __dirname) {
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
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (e, t, n, i, o) {
        e.length = function (e) {
          var t = 0;
          var n = 0;
          for (var i = 0; i < e.length; ++i) {
            if ((n = e.charCodeAt(i)) < 128) {
              t += 1;
            } else if (n < 2048) {
              t += 2;
            } else if (55296 == (64512 & n) && 56320 == (64512 & e.charCodeAt(i + 1))) {
              ++i;
              t += 4;
            } else {
              t += 3;
            }
          }
          return t;
        };
        e.read = function (e, t, n) {
          if (n - t < 1) {
            return "";
          }
          var i;
          var o = null;
          var r = [];
          for (var a = 0; t < n;) {
            if ((i = e[t++]) < 128) {
              r[a++] = i;
            } else if (i > 191 && i < 224) {
              r[a++] = (31 & i) << 6 | 63 & e[t++];
            } else if (i > 239 && i < 365) {
              i = ((7 & i) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536;
              r[a++] = 55296 + (i >> 10);
              r[a++] = 56320 + (1023 & i);
            } else {
              r[a++] = (15 & i) << 12 | (63 & e[t++]) << 6 | 63 & e[t++];
            }
            if (a > 8191) {
              (o || (o = [])).push(String.fromCharCode.apply(String, r));
              a = 0;
            }
          }
          return o ? (a && o.push(String.fromCharCode.apply(String, r.slice(0, a))), o.join("")) : String.fromCharCode.apply(String, r.slice(0, a));
        };
        e.write = function (e, t, n) {
          var i;
          var o;
          var r = n;
          for (var a = 0; a < e.length; ++a) {
            if ((i = e.charCodeAt(a)) < 128) {
              t[n++] = i;
            } else if (i < 2048) {
              t[n++] = i >> 6 | 192;
              t[n++] = 63 & i | 128;
            } else if (55296 == (64512 & i) && 56320 == (64512 & (o = e.charCodeAt(a + 1)))) {
              i = 65536 + ((1023 & i) << 10) + (1023 & o);
              ++a;
              t[n++] = i >> 18 | 240;
              t[n++] = i >> 12 & 63 | 128;
              t[n++] = i >> 6 & 63 | 128;
              t[n++] = 63 & i | 128;
            } else {
              t[n++] = i >> 12 | 224;
              t[n++] = i >> 6 & 63 | 128;
              t[n++] = 63 & i | 128;
            }
          }
          return n - r;
        };
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (e, t, n, i, o) {
        n.exports = function (e, t, n) {
          var i = n || 8192;
          var o = i >>> 1;
          var r = null;
          var a = i;
          return function (n) {
            if (n < 1 || n > o) {
              return e(n);
            }
            if (a + n > i) {
              r = e(i);
              a = 0;
            }
            var s = t.call(r, a, a += n);
            if (7 & a) {
              a = 1 + (7 | a);
            }
            return s;
          };
        };
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (e, t, n, i, o) {
        n.exports = a;
        var r = t("../util/minimal");
        function a(e, t) {
          this.lo = e >>> 0;
          this.hi = t >>> 0;
        }
        var s = a.zero = new a(0, 0);
        s.toNumber = function () {
          return 0;
        };
        s.zzEncode = s.zzDecode = function () {
          return this;
        };
        s.length = function () {
          return 1;
        };
        var l = a.zeroHash = "\0\0\0\0\0\0\0\0";
        a.fromNumber = function (e) {
          if (0 === e) {
            return s;
          }
          var t = e < 0;
          if (t) {
            e = -e;
          }
          var n = e >>> 0;
          var i = (e - n) / 4294967296 >>> 0;
          if (t) {
            i = ~i >>> 0;
            n = ~n >>> 0;
            if (++n > 4294967295) {
              n = 0;
              if (++i > 4294967295) {
                i = 0;
              }
            }
          }
          return new a(n, i);
        };
        a.from = function (e) {
          if ("number" == typeof e) {
            return a.fromNumber(e);
          }
          if (r.isString(e)) {
            if (!r.Long) {
              return a.fromNumber(parseInt(e, 10));
            }
            e = r.Long.fromString(e);
          }
          return e.low || e.high ? new a(e.low >>> 0, e.high >>> 0) : s;
        };
        a.prototype.toNumber = function (e) {
          if (!e && this.hi >>> 31) {
            var t = 1 + ~this.lo >>> 0;
            var n = ~this.hi >>> 0;
            if (!t) {
              n = n + 1 >>> 0;
            }
            return -(t + 4294967296 * n);
          }
          return this.lo + 4294967296 * this.hi;
        };
        a.prototype.toLong = function (e) {
          return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
            low: 0 | this.lo,
            high: 0 | this.hi,
            unsigned: Boolean(e)
          };
        };
        var c = String.prototype.charCodeAt;
        a.fromHash = function (e) {
          return e === l ? s : new a((c.call(e, 0) | c.call(e, 1) << 8 | c.call(e, 2) << 16 | c.call(e, 3) << 24) >>> 0, (c.call(e, 4) | c.call(e, 5) << 8 | c.call(e, 6) << 16 | c.call(e, 7) << 24) >>> 0);
        };
        a.prototype.toHash = function () {
          return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
        };
        a.prototype.zzEncode = function () {
          var e = this.hi >> 31;
          this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0;
          this.lo = (this.lo << 1 ^ e) >>> 0;
          return this;
        };
        a.prototype.zzDecode = function () {
          var e = -(1 & this.lo);
          this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0;
          this.hi = (this.hi >>> 1 ^ e) >>> 0;
          return this;
        };
        a.prototype.length = function () {
          var e = this.lo;
          var t = (this.lo >>> 28 | this.hi << 4) >>> 0;
          var n = this.hi >>> 24;
          return 0 === n ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10;
        };
        n.exports;
      }, function () {
        return {
          "../util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (e, t, n, i, o) {
        function a(e, t, n) {
          var i = Object.keys(t);
          for (var o = 0; o < i.length; ++o) {
            if (!(undefined !== e[i[o]] && n)) {
              e[i[o]] = t[i[o]];
            }
          }
          return e;
        }
        function s(e) {
          function t(e, n) {
            if (!(this instanceof t)) {
              return new t(e, n);
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
            if (n) {
              a(this, n);
            }
          }
          (t.prototype = Object.create(Error.prototype)).constructor = t;
          Object.defineProperty(t.prototype, "name", {
            get: function () {
              return e;
            }
          });
          t.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
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
          var n = e[t];
          return !(null == n || !e.hasOwnProperty(t)) && ("object" != typeof n || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0);
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
          var n = e.LongBits.fromHash(e);
          return e.Long ? e.Long.fromBits(n.lo, n.hi, t) : n.toNumber(Boolean(t));
        };
        e.merge = a;
        e.lcFirst = function (e) {
          return e.charAt(0).toLowerCase() + e.substring(1);
        };
        e.newError = s;
        e.ProtocolError = s("ProtocolError");
        e.oneOfGetter = function (e) {
          var t = {};
          for (var n = 0; n < e.length; ++n) {
            t[e[n]] = 1;
          }
          return function () {
            var e = Object.keys(this);
            for (var n = e.length - 1; n > -1; --n) {
              if (1 === t[e[n]] && undefined !== this[e[n]] && null !== this[e[n]]) {
                return e[n];
              }
            }
          };
        };
        e.oneOfSetter = function (e) {
          return function (t) {
            for (var n = 0; n < e.length; ++n) {
              if (e[n] !== t) {
                delete this[e[n]];
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
            e._Buffer_from = e.from !== Uint8Array.from && e.from || function (t, n) {
              return new e(t, n);
            };
            e._Buffer_allocUnsafe = e.allocUnsafe || function (t) {
              return new e(t);
            };
          } else {
            e._Buffer_from = e._Buffer_allocUnsafe = null;
          }
        };
        n.exports;
      }, function () {
        return {
          "@protobufjs/aspromise": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/base64": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          "@protobufjs/eventemitter": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          "@protobufjs/float": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          "@protobufjs/inquire": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          "@protobufjs/utf8": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          "@protobufjs/pool": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          "./longbits": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (e, t, n, i, o) {
        n.exports = _;
        var r;
        var a = t("./util/minimal");
        var s = a.LongBits;
        var l = a.base64;
        var c = a.utf8;
        function u(e, t, n) {
          this.fn = e;
          this.len = t;
          this.next = undefined;
          this.val = n;
        }
        function p() {}
        function m(e) {
          this.head = e.head;
          this.tail = e.tail;
          this.len = e.len;
          this.next = e.states;
        }
        function _() {
          this.len = 0;
          this.head = new u(p, 0, 0);
          this.tail = this.head;
          this.states = null;
        }
        var d = function () {
          return a.Buffer ? function () {
            return (_.create = function () {
              return new r();
            })();
          } : function () {
            return new _();
          };
        };
        function f(e, t, n) {
          t[n] = 255 & e;
        }
        function h(e, t) {
          this.len = e;
          this.next = undefined;
          this.val = t;
        }
        function y(e, t, n) {
          for (; e.hi;) {
            t[n++] = 127 & e.lo | 128;
            e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0;
            e.hi >>>= 7;
          }
          for (; e.lo > 127;) {
            t[n++] = 127 & e.lo | 128;
            e.lo = e.lo >>> 7;
          }
          t[n++] = e.lo;
        }
        function S(e, t, n) {
          t[n] = 255 & e;
          t[n + 1] = e >>> 8 & 255;
          t[n + 2] = e >>> 16 & 255;
          t[n + 3] = e >>> 24;
        }
        _.create = d();
        _.alloc = function (e) {
          return new a.Array(e);
        };
        if (a.Array !== Array) {
          _.alloc = a.pool(_.alloc, a.Array.prototype.subarray);
        }
        _.prototype._push = function (e, t, n) {
          this.tail = this.tail.next = new u(e, t, n);
          this.len += t;
          return this;
        };
        h.prototype = Object.create(u.prototype);
        h.prototype.fn = function (e, t, n) {
          for (; e > 127;) {
            t[n++] = 127 & e | 128;
            e >>>= 7;
          }
          t[n] = e;
        };
        _.prototype.uint32 = function (e) {
          this.len += (this.tail = this.tail.next = new h((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
          return this;
        };
        _.prototype.int32 = function (e) {
          return e < 0 ? this._push(y, 10, s.fromNumber(e)) : this.uint32(e);
        };
        _.prototype.sint32 = function (e) {
          return this.uint32((e << 1 ^ e >> 31) >>> 0);
        };
        _.prototype.uint64 = function (e) {
          var t = s.from(e);
          return this._push(y, t.length(), t);
        };
        _.prototype.int64 = _.prototype.uint64;
        _.prototype.sint64 = function (e) {
          var t = s.from(e).zzEncode();
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
          var t = s.from(e);
          return this._push(S, 4, t.lo)._push(S, 4, t.hi);
        };
        _.prototype.sfixed64 = _.prototype.fixed64;
        _.prototype.float = function (e) {
          return this._push(a.float.writeFloatLE, 4, e);
        };
        _.prototype.double = function (e) {
          return this._push(a.float.writeDoubleLE, 8, e);
        };
        var g = a.Array.prototype.set ? function (e, t, n) {
          t.set(e, n);
        } : function (e, t, n) {
          for (var i = 0; i < e.length; ++i) {
            t[n + i] = e[i];
          }
        };
        _.prototype.bytes = function (e) {
          var t = e.length >>> 0;
          if (!t) {
            return this._push(f, 1, 0);
          }
          if (a.isString(e)) {
            var n = _.alloc(t = l.length(e));
            l.decode(e, n, 0);
            e = n;
          }
          return this.uint32(t)._push(g, t, e);
        };
        _.prototype.string = function (e) {
          var t = c.length(e);
          return t ? this.uint32(t)._push(c.write, t, e) : this._push(f, 1, 0);
        };
        _.prototype.fork = function () {
          this.states = new m(this);
          this.head = this.tail = new u(p, 0, 0);
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
            this.head = this.tail = new u(p, 0, 0);
            this.len = 0;
          }
          return this;
        };
        _.prototype.ldelim = function () {
          var e = this.head;
          var t = this.tail;
          var n = this.len;
          this.reset().uint32(n);
          if (n) {
            this.tail.next = e.next;
            this.tail = t;
            this.len += n;
          }
          return this;
        };
        _.prototype.finish = function () {
          var e = this.head.next;
          var t = this.constructor.alloc(this.len);
          for (var n = 0; e;) {
            e.fn(e.val, t, n);
            n += e.len;
            e = e.next;
          }
          return t;
        };
        _._configure = function (e) {
          r = e;
          _.create = d();
          r._configure();
        };
        n.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (e, t, n, i, o) {
        n.exports = s;
        var r = t("./writer");
        (s.prototype = Object.create(r.prototype)).constructor = s;
        var a = t("./util/minimal");
        function s() {
          r.call(this);
        }
        function l(e, t, n) {
          if (e.length < 40) {
            a.utf8.write(e, t, n);
          } else if (t.utf8Write) {
            t.utf8Write(e, n);
          } else {
            t.write(e, n);
          }
        }
        s._configure = function () {
          s.alloc = a._Buffer_allocUnsafe;
          s.writeBytesBuffer = a.Buffer && a.Buffer.prototype instanceof Uint8Array && "set" === a.Buffer.prototype.set.name ? function (e, t, n) {
            t.set(e, n);
          } : function (e, t, n) {
            if (e.copy) {
              e.copy(t, n, 0, e.length);
            } else {
              for (var i = 0; i < e.length;) {
                t[n++] = e[i++];
              }
            }
          };
        };
        s.prototype.bytes = function (e) {
          if (a.isString(e)) {
            e = a._Buffer_from(e, "base64");
          }
          var t = e.length >>> 0;
          this.uint32(t);
          if (t) {
            this._push(s.writeBytesBuffer, t, e);
          }
          return this;
        };
        s.prototype.string = function (e) {
          var t = a.Buffer.byteLength(e);
          this.uint32(t);
          if (t) {
            this._push(l, t, e);
          }
          return this;
        };
        s._configure();
        n.exports;
      }, function () {
        return {
          "./writer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (e, t, n, i, o) {
        n.exports = u;
        var r;
        var a = t("./util/minimal");
        var s = a.LongBits;
        var l = a.utf8;
        function u(e) {
          this.buf = e;
          this.pos = 0;
          this.len = e.length;
        }
        var p;
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
          return a.Buffer ? function (e) {
            return (u.create = function (e) {
              return a.Buffer.isBuffer(e) ? new r(e) : m(e);
            })(e);
          } : m;
        };
        function d() {
          var e = new s(0, 0);
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
        function h() {
          if (this.pos + 8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (8 || 1) + " > " + this.len);
          }
          return new s((this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0, (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0);
        }
        u.create = _();
        u.prototype._slice = a.Array.prototype.subarray || a.Array.prototype.slice;
        p = 4294967295;
        u.prototype.uint32 = function () {
          p = (127 & this.buf[this.pos]) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return p;
          }
          p = (p | (127 & this.buf[this.pos]) << 7) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return p;
          }
          p = (p | (127 & this.buf[this.pos]) << 14) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return p;
          }
          p = (p | (127 & this.buf[this.pos]) << 21) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return p;
          }
          p = (p | (15 & this.buf[this.pos]) << 28) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return p;
          }
          if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (10 || 1) + " > " + this.len);
          }
          return p;
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
          var e = a.float.readFloatLE(this.buf, this.pos);
          this.pos += 4;
          return e;
        };
        u.prototype.double = function () {
          if (this.pos + 8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (4 || 1) + " > " + this.len);
          }
          var e = a.float.readDoubleLE(this.buf, this.pos);
          this.pos += 8;
          return e;
        };
        u.prototype.bytes = function () {
          var e = this.uint32();
          var t = this.pos;
          var n = this.pos + e;
          if (n > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (e || 1) + " > " + this.len);
          }
          this.pos += e;
          return Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n);
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
          r = e;
          u.create = _();
          r._configure();
          var t = a.Long ? "toLong" : "toNumber";
          a.merge(u.prototype, {
            int64: function () {
              return d.call(this)[t](false);
            },
            uint64: function () {
              return d.call(this)[t](true);
            },
            sint64: function () {
              return d.call(this).zzDecode()[t](false);
            },
            fixed64: function () {
              return h.call(this)[t](true);
            },
            sfixed64: function () {
              return h.call(this)[t](false);
            }
          });
        };
        n.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (e, t, n, i, o) {
        n.exports = s;
        var r = t("./reader");
        (s.prototype = Object.create(r.prototype)).constructor = s;
        var a = t("./util/minimal");
        function s(e) {
          r.call(this, e);
        }
        s._configure = function () {
          if (a.Buffer) {
            s.prototype._slice = a.Buffer.prototype.slice;
          }
        };
        s.prototype.string = function () {
          var e = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
        };
        s._configure();
        n.exports;
      }, function () {
        return {
          "./reader": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (e, t, n, i, o) {
        n.exports = a;
        var r = t("../util/minimal");
        function a(e, t, n) {
          if ("function" != typeof e) {
            throw TypeError("rpcImpl must be a function");
          }
          r.EventEmitter.call(this);
          this.rpcImpl = e;
          this.requestDelimited = Boolean(t);
          this.responseDelimited = Boolean(n);
        }
        (a.prototype = Object.create(r.EventEmitter.prototype)).constructor = a;
        a.prototype.rpcCall = function e(t, n, i, o, a) {
          if (!o) {
            throw TypeError("request must be specified");
          }
          var s = this;
          if (!a) {
            return r.asPromise(e, s, t, n, i, o);
          }
          if (s.rpcImpl) {
            try {
              return s.rpcImpl(t, n[s.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), function (e, n) {
                if (e) {
                  s.emit("error", e, t);
                  return a(e);
                }
                if (null !== n) {
                  if (!(n instanceof i)) {
                    try {
                      n = i[s.responseDelimited ? "decodeDelimited" : "decode"](n);
                    } catch (e) {
                      s.emit("error", e, t);
                      return a(e);
                    }
                  }
                  s.emit("data", n, t);
                  return a(null, n);
                }
                s.end(true);
              });
            } catch (e) {
              s.emit("error", e, t);
              return void setTimeout(function () {
                a(e);
              }, 0);
            }
          } else {
            setTimeout(function () {
              a(Error("already ended"));
            }, 0);
          }
        };
        a.prototype.end = function (e) {
          if (this.rpcImpl) {
            if (!e) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        n.exports;
      }, function () {
        return {
          "../util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (e, t, n, i, o) {
        e.Service = t("./rpc/service");
        n.exports;
      }, function () {
        return {
          "./rpc/service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (e, t, n, i, o) {
        n.exports = {};
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (e, t, n, i, o) {
        function a() {
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
        e.configure = a;
        a();
        n.exports;
      }, function () {
        return {
          "./writer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./writer_buffer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          "./reader": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./reader_buffer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./rpc": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          "./roots": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (e, t, n, i, o) {
        function r(e, t) {
          if ("string" == typeof e) {
            t = e;
            e = undefined;
          }
          var n = [];
          function i(e) {
            if ("string" != typeof e) {
              var t = "function " + (undefined || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + n.join("\n  ") + "\n}";
              if (r.verbose) {
                console.log("codegen: " + t);
              }
              t = "return " + t;
              if (e) {
                var a = Object.keys(e);
                var s = new Array(a.length + 1);
                var l = new Array(a.length);
                for (var c = 0; c < a.length;) {
                  s[c] = a[c];
                  l[c] = e[a[c++]];
                }
                s[c] = t;
                return Function.apply(null, s).apply(null, l);
              }
              return Function(t)();
            }
            var u = new Array(arguments.length - 1);
            for (var p = 0; p < u.length;) {
              u[p] = arguments[++p];
            }
            p = 0;
            e = e.replace(/%([%dfijs])/g, function (e, t) {
              var n = u[p++];
              switch (t) {
                case "d":
                case "f":
                  return String(Number(n));
                case "i":
                  return String(Math.floor(n));
                case "j":
                  return JSON.stringify(n);
                case "s":
                  return String(n);
              }
              return "%";
            });
            if (p !== u.length) {
              throw Error("parameter count mismatch");
            }
            n.push(e);
            return i;
          }
          function o(i) {
            return "function " + (i || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + n.join("\n  ") + "\n}";
          }
          i.toString = o;
          return i;
        }
        n.exports = r;
        r.verbose = false;
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (e, t, n, i, o) {
        n.exports = s;
        var r = t("@protobufjs/aspromise");
        var a = t("@protobufjs/inquire")("fs");
        function s(e, t, n) {
          if ("function" == typeof t) {
            n = t;
            t = {};
          } else if (!t) {
            t = {};
          }
          return n ? !t.xhr && a && a.readFile ? a.readFile(e, function (i, o) {
            return i && "undefined" != typeof XMLHttpRequest ? s.xhr(e, t, n) : i ? n(i) : n(null, t.binary ? o : o.toString("utf8"));
          }) : s.xhr(e, t, n) : r(s, this, e, t);
        }
        s.xhr = function (e, t, n) {
          var i = new XMLHttpRequest();
          i.onreadystatechange = function () {
            if (4 === i.readyState) {
              if (0 !== i.status && 200 !== i.status) {
                return n(Error("status " + i.status));
              }
              if (t.binary) {
                var e = i.response;
                if (!e) {
                  e = [];
                  for (var o = 0; o < i.responseText.length; ++o) {
                    e.push(255 & i.responseText.charCodeAt(o));
                  }
                }
                return n(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e);
              }
              return n(null, i.responseText);
            }
          };
          if (t.binary) {
            if ("overrideMimeType" in i) {
              i.overrideMimeType("text/plain; charset=x-user-defined");
            }
            i.responseType = "arraybuffer";
          }
          i.open("GET", e);
          i.send();
        };
        n.exports;
      }, function () {
        return {
          "@protobufjs/aspromise": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/inquire": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (e, t, n, i, o) {
        var a = e.isAbsolute = function (e) {
          return /^(?:\/|\w+:)/.test(e);
        };
        var s = e.normalize = function (e) {
          var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/");
          var n = a(e);
          var i = "";
          if (n) {
            i = t.shift() + "/";
          }
          for (var o = 0; o < t.length;) {
            if (".." === t[o]) {
              if (o > 0 && ".." !== t[o - 1]) {
                t.splice(--o, 2);
              } else if (n) {
                t.splice(o, 1);
              } else {
                ++o;
              }
            } else if ("." === t[o]) {
              t.splice(o, 1);
            } else {
              ++o;
            }
          }
          return i + t.join("/");
        };
        e.resolve = function (e, t, n) {
          if (!n) {
            t = s(t);
          }
          return a(t) ? t : (n || (e = s(e)), (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? s(e + "/" + t) : t);
        };
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (e, t, n, i, o) {
        var a = t("./util");
        var s = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function l(e, t) {
          var n = 0;
          var i = {};
          for (t |= 0; n < e.length;) {
            i[s[n + t]] = e[n++];
          }
          return i;
        }
        e.basic = l([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
        e.defaults = l([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", a.emptyArray, null]);
        e.long = l([0, 0, 0, 1, 1], 7);
        e.mapKey = l([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
        e.packed = l([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
        n.exports;
      }, function () {
        return {
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (e, t, n, i, o) {
        n.exports = p;
        var r = t("./object");
        ((p.prototype = Object.create(r.prototype)).constructor = p).className = "Field";
        var a;
        var s = t("./enum");
        var l = t("./types");
        var c = t("./util");
        var u = /^required|optional|repeated$/;
        function p(e, t, n, i, o, a, s) {
          if (c.isObject(i)) {
            s = o;
            a = i;
            i = o = undefined;
          } else if (c.isObject(o)) {
            s = a;
            a = o;
            o = undefined;
          }
          r.call(this, e, a);
          if (!c.isInteger(t) || t < 0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!c.isString(n)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== i && !u.test(i = i.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== o && !c.isString(o)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === i) {
            i = "optional";
          }
          this.rule = i && "optional" !== i ? i : undefined;
          this.type = n;
          this.id = t;
          this.extend = o || undefined;
          this.required = "required" === i;
          this.optional = !this.required;
          this.repeated = "repeated" === i;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!c.Long && undefined !== l.long[n];
          this.bytes = "bytes" === n;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = s;
        }
        p.fromJSON = function (e, t) {
          return new p(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
        };
        Object.defineProperty(p.prototype, "packed", {
          get: function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        p.prototype.setOption = function (e, t, n) {
          if ("packed" === e) {
            this._packed = null;
          }
          return r.prototype.setOption.call(this, e, t, n);
        };
        p.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return c.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
        };
        p.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = l.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof a) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
            }
          }
          if (this.options && null != this.options.default) {
            this.typeDefault = this.options.default;
            if (this.resolvedType instanceof s && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof s))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = c.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else if (this.bytes && "string" == typeof this.typeDefault) {
            var e;
            if (c.base64.test(this.typeDefault)) {
              c.base64.decode(this.typeDefault, e = c.newBuffer(c.base64.length(this.typeDefault)), 0);
            } else {
              c.utf8.write(this.typeDefault, e = c.newBuffer(c.utf8.length(this.typeDefault)), 0);
            }
            this.typeDefault = e;
          }
          if (this.map) {
            this.defaultValue = c.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = c.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof a) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return r.prototype.resolve.call(this);
        };
        p.d = function (e, t, n, i) {
          if ("function" == typeof t) {
            t = c.decorateType(t).name;
          } else if (t && "object" == typeof t) {
            t = c.decorateEnum(t).name;
          }
          return function (o, r) {
            c.decorateType(o.constructor).add(new p(r, e, t, n, {
              default: i
            }));
          };
        };
        p._configure = function (e) {
          a = e;
        };
        n.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (e, t, n, i, o) {
        n.exports = l;
        var r = t("./object");
        ((l.prototype = Object.create(r.prototype)).constructor = l).className = "OneOf";
        var a = t("./field");
        var s = t("./util");
        function l(e, t, n, i) {
          if (!Array.isArray(t)) {
            n = t;
            t = undefined;
          }
          r.call(this, e, n);
          if (undefined !== t && !Array.isArray(t)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = t || [];
          this.fieldsArray = [];
          this.comment = i;
        }
        function c(e) {
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
          return s.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : undefined]);
        };
        l.prototype.add = function (e) {
          if (!(e instanceof a)) {
            throw TypeError("field must be a Field");
          }
          if (e.parent && e.parent !== this.parent) {
            e.parent.remove(e);
          }
          this.oneof.push(e.name);
          this.fieldsArray.push(e);
          e.partOf = this;
          c(this);
          return this;
        };
        l.prototype.remove = function (e) {
          if (!(e instanceof a)) {
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
          r.prototype.onAdd.call(this, e);
          for (var t = 0; t < this.oneof.length; ++t) {
            var n = e.get(this.oneof[t]);
            if (n && !n.partOf) {
              n.partOf = this;
              this.fieldsArray.push(n);
            }
          }
          c(this);
        };
        l.prototype.onRemove = function (e) {
          var t;
          for (var n = 0; n < this.fieldsArray.length; ++n) {
            if ((t = this.fieldsArray[n]).parent) {
              t.parent.remove(t);
            }
          }
          r.prototype.onRemove.call(this, e);
        };
        l.d = function () {
          var e = new Array(arguments.length);
          for (var t = 0; t < arguments.length;) {
            e[t] = arguments[t++];
          }
          return function (t, n) {
            s.decorateType(t.constructor).add(new l(n, e));
            Object.defineProperty(t, n, {
              get: s.oneOfGetter(e),
              set: s.oneOfSetter(e)
            });
          };
        };
        n.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (e, t, n, i, o) {
        n.exports = _;
        var r = t("./object");
        ((_.prototype = Object.create(r.prototype)).constructor = _).className = "Namespace";
        var a;
        var s;
        var l;
        var c = t("./field");
        var u = t("./oneof");
        var p = t("./util");
        function m(e, t) {
          if (e && e.length) {
            var n = {};
            for (var i = 0; i < e.length; ++i) {
              n[e[i].name] = e[i].toJSON(t);
            }
            return n;
          }
        }
        function _(e, t) {
          r.call(this, e, t);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function d(e) {
          e._nestedArray = null;
          return e;
        }
        _.fromJSON = function (e, t) {
          return new _(e, t.options).addJSON(t.nested);
        };
        _.arrayToJSON = m;
        _.isReservedId = function (e, t) {
          if (e) {
            for (var n = 0; n < e.length; ++n) {
              if ("string" != typeof e[n] && e[n][0] <= t && e[n][1] > t) {
                return true;
              }
            }
          }
          return false;
        };
        _.isReservedName = function (e, t) {
          if (e) {
            for (var n = 0; n < e.length; ++n) {
              if (e[n] === t) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_.prototype, "nestedArray", {
          get: function () {
            return this._nestedArray || (this._nestedArray = p.toArray(this.nested));
          }
        });
        _.prototype.toJSON = function (e) {
          return p.toObject(["options", this.options, "nested", m(this.nestedArray, e)]);
        };
        _.prototype.addJSON = function (e) {
          if (e) {
            var t;
            var n = Object.keys(e);
            for (var i = 0; i < n.length; ++i) {
              t = e[n[i]];
              this.add((undefined !== t.fields ? a.fromJSON : undefined !== t.values ? l.fromJSON : undefined !== t.methods ? s.fromJSON : undefined !== t.id ? c.fromJSON : _.fromJSON)(n[i], t));
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
          if (!(e instanceof c && undefined !== e.extend || e instanceof a || e instanceof l || e instanceof s || e instanceof _ || e instanceof u)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var t = this.get(e.name);
            if (t) {
              if (!(t instanceof _ && e instanceof _) || t instanceof a || t instanceof s) {
                throw Error("duplicate name '" + e.name + "' in " + this);
              }
              var n = t.nestedArray;
              for (var i = 0; i < n.length; ++i) {
                e.add(n[i]);
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
          return d(this);
        };
        _.prototype.remove = function (e) {
          if (!(e instanceof r)) {
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
          return d(this);
        };
        _.prototype.define = function (e, t) {
          if (p.isString(e)) {
            e = e.split(".");
          } else if (!Array.isArray(e)) {
            throw TypeError("illegal path");
          }
          if (e && e.length && "" === e[0]) {
            throw Error("path must be relative");
          }
          for (var n = this; e.length > 0;) {
            var i = e.shift();
            if (n.nested && n.nested[i]) {
              if (!((n = n.nested[i]) instanceof _)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              n.add(n = new _(i));
            }
          }
          if (t) {
            n.addJSON(t);
          }
          return n;
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
        _.prototype.lookup = function (e, t, n) {
          if ("boolean" == typeof t) {
            n = t;
            t = undefined;
          } else if (t && !Array.isArray(t)) {
            t = [t];
          }
          if (p.isString(e) && e.length) {
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
          var i = this.get(e[0]);
          if (i) {
            if (1 === e.length) {
              if (!t || t.indexOf(i.constructor) > -1) {
                return i;
              }
            } else if (i instanceof _ && (i = i.lookup(e.slice(1), t, true))) {
              return i;
            }
          } else {
            for (var o = 0; o < this.nestedArray.length; ++o) {
              if (this._nestedArray[o] instanceof _ && (i = this._nestedArray[o].lookup(e, t, true))) {
                return i;
              }
            }
          }
          return null === this.parent || n ? null : this.parent.lookup(e, t);
        };
        _.prototype.lookupType = function (e) {
          var t = this.lookup(e, [a]);
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
          var t = this.lookup(e, [a, l]);
          if (!t) {
            throw Error("no such Type or Enum '" + e + "' in " + this);
          }
          return t;
        };
        _.prototype.lookupService = function (e) {
          var t = this.lookup(e, [s]);
          if (!t) {
            throw Error("no such Service '" + e + "' in " + this);
          }
          return t;
        };
        _._configure = function (e, t, n) {
          a = e;
          s = t;
          l = n;
        };
        n.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (e, t, n, i, o) {
        n.exports = l;
        var r = t("./field");
        ((l.prototype = Object.create(r.prototype)).constructor = l).className = "MapField";
        var a = t("./types");
        var s = t("./util");
        function l(e, t, n, i, o, a) {
          r.call(this, e, t, i, undefined, undefined, o, a);
          if (!s.isString(n)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = n;
          this.resolvedKeyType = null;
          this.map = true;
        }
        l.fromJSON = function (e, t) {
          return new l(e, t.id, t.keyType, t.type, t.options, t.comment);
        };
        l.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return s.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
        };
        l.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === a.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return r.prototype.resolve.call(this);
        };
        l.d = function (e, t, n) {
          if ("function" == typeof n) {
            n = s.decorateType(n).name;
          } else if (n && "object" == typeof n) {
            n = s.decorateEnum(n).name;
          }
          return function (i, o) {
            s.decorateType(i.constructor).add(new l(o, e, t, n));
          };
        };
        n.exports;
      }, function () {
        return {
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (e, t, n, i, o) {
        n.exports = s;
        var r = t("./object");
        ((s.prototype = Object.create(r.prototype)).constructor = s).className = "Method";
        var a = t("./util");
        function s(e, t, n, i, o, s, l, c, u) {
          if (a.isObject(o)) {
            l = o;
            o = s = undefined;
          } else if (a.isObject(s)) {
            l = s;
            s = undefined;
          }
          if (undefined !== t && !a.isString(t)) {
            throw TypeError("type must be a string");
          }
          if (!a.isString(n)) {
            throw TypeError("requestType must be a string");
          }
          if (!a.isString(i)) {
            throw TypeError("responseType must be a string");
          }
          r.call(this, e, l);
          this.type = t || "rpc";
          this.requestType = n;
          this.requestStream = !!o || undefined;
          this.responseType = i;
          this.responseStream = !!s || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = c;
          this.parsedOptions = u;
        }
        s.fromJSON = function (e, t) {
          return new s(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment, t.parsedOptions);
        };
        s.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return a.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        s.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), r.prototype.resolve.call(this));
        };
        n.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (e, t, n, i, o) {
        n.exports = c;
        var r = t("./namespace");
        ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Service";
        var a = t("./method");
        var s = t("./util");
        var l = t("./rpc");
        function c(e, t) {
          r.call(this, e, t);
          this.methods = {};
          this._methodsArray = null;
        }
        function u(e) {
          e._methodsArray = null;
          return e;
        }
        c.fromJSON = function (e, t) {
          var n = new c(e, t.options);
          if (t.methods) {
            var i = Object.keys(t.methods);
            for (var o = 0; o < i.length; ++o) {
              n.add(a.fromJSON(i[o], t.methods[i[o]]));
            }
          }
          if (t.nested) {
            n.addJSON(t.nested);
          }
          n.comment = t.comment;
          return n;
        };
        c.prototype.toJSON = function (e) {
          var t = r.prototype.toJSON.call(this, e);
          var n = !!e && Boolean(e.keepComments);
          return s.toObject(["options", t && t.options || undefined, "methods", r.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", n ? this.comment : undefined]);
        };
        Object.defineProperty(c.prototype, "methodsArray", {
          get: function () {
            return this._methodsArray || (this._methodsArray = s.toArray(this.methods));
          }
        });
        c.prototype.get = function (e) {
          return this.methods[e] || r.prototype.get.call(this, e);
        };
        c.prototype.resolveAll = function () {
          var e = this.methodsArray;
          for (var t = 0; t < e.length; ++t) {
            e[t].resolve();
          }
          return r.prototype.resolve.call(this);
        };
        c.prototype.add = function (e) {
          if (this.get(e.name)) {
            throw Error("duplicate name '" + e.name + "' in " + this);
          }
          return e instanceof a ? (this.methods[e.name] = e, e.parent = this, u(this)) : r.prototype.add.call(this, e);
        };
        c.prototype.remove = function (e) {
          if (e instanceof a) {
            if (this.methods[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.methods[e.name];
            e.parent = null;
            return u(this);
          }
          return r.prototype.remove.call(this, e);
        };
        c.prototype.create = function (e, t, n) {
          var i;
          var o = new l.Service(e, t, n);
          for (var r = 0; r < this.methodsArray.length; ++r) {
            var a = s.lcFirst((i = this._methodsArray[r]).resolve().name).replace(/[^$\w_]/g, "");
            o[a] = s.codegen(["r", "c"], s.isReserved(a) ? a + "_" : a)("return this.rpcCall(m,q,s,r,c)")({
              m: i,
              q: i.resolvedRequestType.ctor,
              s: i.resolvedResponseType.ctor
            });
          }
          return o;
        };
        n.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./method": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./rpc": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (e, t, n, i, o) {
        n.exports = a;
        var r = t("./util/minimal");
        function a(e) {
          if (e) {
            var t = Object.keys(e);
            for (var n = 0; n < t.length; ++n) {
              this[t[n]] = e[t[n]];
            }
          }
        }
        a.create = function (e) {
          return this.$type.create(e);
        };
        a.encode = function (e, t) {
          return this.$type.encode(e, t);
        };
        a.encodeDelimited = function (e, t) {
          return this.$type.encodeDelimited(e, t);
        };
        a.decode = function (e) {
          return this.$type.decode(e);
        };
        a.decodeDelimited = function (e) {
          return this.$type.decodeDelimited(e);
        };
        a.verify = function (e) {
          return this.$type.verify(e);
        };
        a.fromObject = function (e) {
          return this.$type.fromObject(e);
        };
        a.toObject = function (e, t) {
          return this.$type.toObject(e, t);
        };
        a.prototype.toJSON = function () {
          return this.$type.toObject(this, r.toJSONOptions);
        };
        n.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (e, t, n, i, o) {
        n.exports = function (e) {
          var t = s.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function (e) {
            return e.map;
          }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
          if (e.group) {
            t("if((t&7)===4)")("break");
          }
          t("switch(t>>>3){");
          for (var n = 0; n < e.fieldsArray.length; ++n) {
            var i = e._fieldsArray[n].resolve();
            var o = i.resolvedType instanceof r ? "int32" : i.type;
            var c = "m" + s.safeProp(i.name);
            t("case %i:", i.id);
            if (i.map) {
              t("if(%s===util.emptyObject)", c)("%s={}", c)("var c2 = r.uint32()+r.pos");
              if (undefined !== a.defaults[i.keyType]) {
                t("k=%j", a.defaults[i.keyType]);
              } else {
                t("k=null");
              }
              if (undefined !== a.defaults[o]) {
                t("value=%j", a.defaults[o]);
              } else {
                t("value=null");
              }
              t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", i.keyType)("case 2:");
              if (undefined === a.basic[o]) {
                t("value=types[%i].decode(r,r.uint32())", n);
              } else {
                t("value=r.%s()", o);
              }
              t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
              if (undefined !== a.long[i.keyType]) {
                t("%s[typeof k===\"object\"?util.longToHash(k):k]=value", c);
              } else {
                t("%s[k]=value", c);
              }
            } else if (i.repeated) {
              t("if(!(%s&&%s.length))", c, c)("%s=[]", c);
              if (undefined !== a.packed[o]) {
                t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", c, o)("}else");
              }
              if (undefined === a.basic[o]) {
                t(i.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", c, n);
              } else {
                t("%s.push(r.%s())", c, o);
              }
            } else if (undefined === a.basic[o]) {
              t(i.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", c, n);
            } else {
              t("%s=r.%s()", c, o);
            }
            t("break");
          }
          t("default:")("r.skipType(t&7)")("break")("}")("}");
          for (n = 0; n < e._fieldsArray.length; ++n) {
            var u = e._fieldsArray[n];
            if (u.required) {
              t("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + u.name + "'");
            }
          }
          return t("return m");
        };
        var r = t("./enum");
        var a = t("./types");
        var s = t("./util");
        n.exports;
      }, function () {
        return {
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (e, t, n, i, o) {
        n.exports = function (e) {
          var t = a.codegen(["m"], e.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var n = e.oneofsArray;
          var i = {};
          if (n.length) {
            t("var p={}");
          }
          for (var o = 0; o < e.fieldsArray.length; ++o) {
            var r = e._fieldsArray[o].resolve();
            var u = "m" + a.safeProp(r.name);
            if (r.optional) {
              t("if(%s!=null&&m.hasOwnProperty(%j)){", u, r.name);
            }
            if (r.map) {
              t("if(!util.isObject(%s))", u)("return%j", r.name + ": " + "object" + (r.repeated && true ? "[]" : r.map && false ? "{k:" + r.keyType + "}" : "") + " expected")("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){");
              c(t, r, "k[i]");
              l(t, r, o, u + "[k[i]]")("}");
            } else if (r.repeated) {
              t("if(!Array.isArray(%s))", u)("return%j", r.name + ": " + "array" + (r.repeated && false ? "[]" : r.map && true ? "{k:" + r.keyType + "}" : "") + " expected")("for(var i=0;i<%s.length;++i){", u);
              l(t, r, o, u + "[i]")("}");
            } else {
              if (r.partOf) {
                var p = a.safeProp(r.partOf.name);
                if (1 === i[r.partOf.name]) {
                  t("if(p%s===1)", p)("return%j", r.partOf.name + ": multiple values");
                }
                i[r.partOf.name] = 1;
                t("p%s=1", p);
              }
              l(t, r, o, u);
            }
            if (r.optional) {
              t("}");
            }
          }
          return t("return null");
        };
        var r = t("./enum");
        var a = t("./util");
        function l(e, t, n, i) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof r) {
              e("switch(%s){", i)("default:")("return%j", t.name + ": " + "enum value" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              var o = Object.keys(t.resolvedType.values);
              for (var a = 0; a < o.length; ++a) {
                e("case %i:", t.resolvedType.values[o[a]]);
              }
              e("break")("}");
            } else {
              e("{")("var e=types[%i].verify(%s);", n, i)("if(e)")("return%j+e", t.name + ".")("}");
            }
          } else {
            switch (t.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                e("if(!util.isInteger(%s))", i)("return%j", t.name + ": " + "integer" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", i, i, i, i)("return%j", t.name + ": " + "integer|Long" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "float":
              case "double":
                e("if(typeof %s!==\"number\")", i)("return%j", t.name + ": " + "number" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "bool":
                e("if(typeof %s!==\"boolean\")", i)("return%j", t.name + ": " + "boolean" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "string":
                e("if(!util.isString(%s))", i)("return%j", t.name + ": " + "string" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
                break;
              case "bytes":
                e("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", i, i, i)("return%j", t.name + ": " + "buffer" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
            }
          }
          return e;
        }
        function c(e, t, n) {
          switch (t.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              e("if(!util.key32Re.test(%s))", n)("return%j", t.name + ": " + "integer key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              e("if(!util.key64Re.test(%s))", n)("return%j", t.name + ": " + "integer|Long key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              break;
            case "bool":
              e("if(!util.key2Re.test(%s))", n)("return%j", t.name + ": " + "boolean key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
          }
          return e;
        }
        n.exports;
      }, function () {
        return {
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (e, t, n, i, o) {
        var a = t("./enum");
        var s = t("./util");
        function l(e, t, n, i) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof a) {
              e("switch(d%s){", i);
              var o = t.resolvedType.values;
              var r = Object.keys(o);
              for (var s = 0; s < r.length; ++s) {
                if (t.repeated && o[r[s]] === t.typeDefault) {
                  e("default:");
                }
                e("case%j:", r[s])("case %i:", o[r[s]])("m%s=%j", i, o[r[s]])("break");
              }
              e("}");
            } else {
              e("if(typeof d%s!==\"object\")", i)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", i, n, i);
            }
          } else {
            var l = false;
            switch (t.type) {
              case "double":
              case "float":
                e("m%s=Number(d%s)", i, i);
                break;
              case "uint32":
              case "fixed32":
                e("m%s=d%s>>>0", i, i);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                e("m%s=d%s|0", i, i);
                break;
              case "uint64":
                l = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", i, i, l)("else if(typeof d%s===\"string\")", i)("m%s=parseInt(d%s,10)", i, i)("else if(typeof d%s===\"number\")", i)("m%s=d%s", i, i)("else if(typeof d%s===\"object\")", i)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", i, i, i, l ? "true" : "");
                break;
              case "bytes":
                e("if(typeof d%s===\"string\")", i)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", i, i, i)("else if(d%s.length)", i)("m%s=d%s", i, i);
                break;
              case "string":
                e("m%s=String(d%s)", i, i);
                break;
              case "bool":
                e("m%s=Boolean(d%s)", i, i);
            }
          }
          return e;
        }
        function c(e, t, n, i) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof a) {
              e("d%s=o.enums===String?types[%i].values[m%s]:m%s", i, n, i, i);
            } else {
              e("d%s=types[%i].toObject(m%s,o)", i, n, i);
            }
          } else {
            var o = false;
            switch (t.type) {
              case "double":
              case "float":
                e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", i, i, i, i);
                break;
              case "uint64":
                o = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(typeof m%s===\"number\")", i)("d%s=o.longs===String?String(m%s):m%s", i, i, i)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", i, i, i, i, o ? "true" : "", i);
                break;
              case "bytes":
                e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", i, i, i, i, i);
                break;
              default:
                e("d%s=m%s", i, i);
            }
          }
          return e;
        }
        e.fromObject = function (e) {
          var t = e.fieldsArray;
          var n = s.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!t.length) {
            return n("return new this.ctor");
          }
          n("var m=new this.ctor");
          for (var i = 0; i < t.length; ++i) {
            var o = t[i].resolve();
            var r = s.safeProp(o.name);
            if (o.map) {
              n("if(d%s){", r)("if(typeof d%s!==\"object\")", r)("throw TypeError(%j)", o.fullName + ": object expected")("m%s={}", r)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", r);
              l(n, o, i, r + "[ks[i]]")("}")("}");
            } else if (o.repeated) {
              n("if(d%s){", r)("if(!Array.isArray(d%s))", r)("throw TypeError(%j)", o.fullName + ": array expected")("m%s=[]", r)("for(var i=0;i<d%s.length;++i){", r);
              l(n, o, i, r + "[i]")("}")("}");
            } else {
              if (!(o.resolvedType instanceof a)) {
                n("if(d%s!=null){", r);
              }
              l(n, o, i, r);
              if (!(o.resolvedType instanceof a)) {
                n("}");
              }
            }
          }
          return n("return m");
        };
        e.toObject = function (e) {
          var t = e.fieldsArray.slice().sort(s.compareFieldsById);
          if (!t.length) {
            return s.codegen()("return {}");
          }
          var n = s.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var i = [];
          var o = [];
          var r = [];
          for (var l = 0; l < t.length; ++l) {
            if (!t[l].partOf) {
              (t[l].resolve().repeated ? i : t[l].map ? o : r).push(t[l]);
            }
          }
          if (i.length) {
            n("if(o.arrays||o.defaults){");
            for (l = 0; l < i.length; ++l) {
              n("d%s=[]", s.safeProp(i[l].name));
            }
            n("}");
          }
          if (o.length) {
            n("if(o.objects||o.defaults){");
            for (l = 0; l < o.length; ++l) {
              n("d%s={}", s.safeProp(o[l].name));
            }
            n("}");
          }
          if (r.length) {
            n("if(o.defaults){");
            for (l = 0; l < r.length; ++l) {
              var u = r[l];
              var p = s.safeProp(u.name);
              if (u.resolvedType instanceof a) {
                n("d%s=o.enums===String?%j:%j", p, u.resolvedType.valuesById[u.typeDefault], u.typeDefault);
              } else if (u.long) {
                n("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", p)("}else")("d%s=o.longs===String?%j:%i", p, u.typeDefault.toString(), u.typeDefault.toNumber());
              } else if (u.bytes) {
                var m = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
                n("if(o.bytes===String)d%s=%j", p, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", p, m)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", p, p)("}");
              } else {
                n("d%s=%j", p, u.typeDefault);
              }
            }
            n("}");
          }
          var _ = false;
          for (l = 0; l < t.length; ++l) {
            u = t[l];
            var d = e._fieldsArray.indexOf(u);
            p = s.safeProp(u.name);
            if (u.map) {
              if (!_) {
                _ = true;
                n("var ks2");
              }
              n("if(m%s&&(ks2=Object.keys(m%s)).length){", p, p)("d%s={}", p)("for(var j=0;j<ks2.length;++j){");
              c(n, u, d, p + "[ks2[j]]")("}");
            } else if (u.repeated) {
              n("if(m%s&&m%s.length){", p, p)("d%s=[]", p)("for(var j=0;j<m%s.length;++j){", p);
              c(n, u, d, p + "[j]")("}");
            } else {
              n("if(m%s!=null&&m.hasOwnProperty(%j)){", p, u.name);
              c(n, u, d, p);
              if (u.partOf) {
                n("if(o.oneofs)")("d%s=%j", s.safeProp(u.partOf.name), u.name);
              }
            }
            n("}");
          }
          return n("return d");
        };
        n.exports;
      }, function () {
        return {
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (e, t, n, i, o) {
        var a = t("./message");
        e[".google.protobuf.Any"] = {
          fromObject: function (e) {
            if (e && e["@type"]) {
              var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1);
              var n = this.lookup(t);
              if (n) {
                var i = "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"];
                if (-1 === i.indexOf("/")) {
                  i = "/" + i;
                }
                return this.create({
                  type_url: i,
                  value: n.encode(n.fromObject(e)).finish()
                });
              }
            }
            return this.fromObject(e);
          },
          toObject: function (e, t) {
            var n = "";
            var i = "";
            if (t && t.json && e.type_url && e.value) {
              i = e.type_url.substring(e.type_url.lastIndexOf("/") + 1);
              n = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
              var o = this.lookup(i);
              if (o) {
                e = o.decode(e.value);
              }
            }
            if (!(e instanceof this.ctor) && e instanceof a) {
              var r = e.$type.toObject(e, t);
              if ("" === n) {
                n = "type.googleapis.com/";
              }
              i = n + ("." === e.$type.fullName[0] ? e.$type.fullName.substr(1) : e.$type.fullName);
              r["@type"] = i;
              return r;
            }
            return this.toObject(e, t);
          }
        };
        n.exports;
      }, function () {
        return {
          "./message": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (e, t, n, i, o) {
        n.exports = b;
        var r = t("./namespace");
        ((b.prototype = Object.create(r.prototype)).constructor = b).className = "Type";
        var a = t("./enum");
        var s = t("./oneof");
        var l = t("./field");
        var c = t("./mapfield");
        var u = t("./service");
        var p = t("./message");
        var m = t("./reader");
        var _ = t("./writer");
        var d = t("./util");
        var f = t("./encoder");
        var h = t("./decoder");
        var y = t("./verifier");
        var S = t("./converter");
        var g = t("./wrappers");
        function b(e, t) {
          r.call(this, e, t);
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
        function C(e) {
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
                var n = this.fields[e[t]];
                var i = n.id;
                if (this._fieldsById[i]) {
                  throw Error("duplicate id " + i + " in " + this);
                }
                this._fieldsById[i] = n;
              }
              return this._fieldsById;
            }
          },
          fieldsArray: {
            get: function () {
              return this._fieldsArray || (this._fieldsArray = d.toArray(this.fields));
            }
          },
          oneofsArray: {
            get: function () {
              return this._oneofsArray || (this._oneofsArray = d.toArray(this.oneofs));
            }
          },
          ctor: {
            get: function () {
              return this._ctor || (this.ctor = b.generateConstructor(this)());
            },
            set: function (e) {
              var t = e.prototype;
              if (!(t instanceof p)) {
                (e.prototype = new p()).constructor = e;
                d.merge(e.prototype, t);
              }
              e.$type = e.prototype.$type = this;
              d.merge(e, p, true);
              this._ctor = e;
              for (var n = 0; n < this.fieldsArray.length; ++n) {
                this._fieldsArray[n].resolve();
              }
              var i = {};
              for (n = 0; n < this.oneofsArray.length; ++n) {
                i[this._oneofsArray[n].resolve().name] = {
                  get: d.oneOfGetter(this._oneofsArray[n].oneof),
                  set: d.oneOfSetter(this._oneofsArray[n].oneof)
                };
              }
              if (n) {
                Object.defineProperties(e.prototype, i);
              }
            }
          }
        });
        b.generateConstructor = function (e) {
          var t;
          var n = d.codegen(["p"], e.name);
          for (var i = 0; i < e.fieldsArray.length; ++i) {
            if ((t = e._fieldsArray[i]).map) {
              n("this%s={}", d.safeProp(t.name));
            } else if (t.repeated) {
              n("this%s=[]", d.safeProp(t.name));
            }
          }
          return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        b.fromJSON = function (e, t) {
          var n = new b(e, t.options);
          n.extensions = t.extensions;
          n.reserved = t.reserved;
          var i = Object.keys(t.fields);
          for (var o = 0; o < i.length; ++o) {
            n.add((undefined !== t.fields[i[o]].keyType ? c.fromJSON : l.fromJSON)(i[o], t.fields[i[o]]));
          }
          if (t.oneofs) {
            i = Object.keys(t.oneofs);
            for (o = 0; o < i.length; ++o) {
              n.add(s.fromJSON(i[o], t.oneofs[i[o]]));
            }
          }
          if (t.nested) {
            i = Object.keys(t.nested);
            for (o = 0; o < i.length; ++o) {
              var p = t.nested[i[o]];
              n.add((undefined !== p.id ? l.fromJSON : undefined !== p.fields ? b.fromJSON : undefined !== p.values ? a.fromJSON : undefined !== p.methods ? u.fromJSON : r.fromJSON)(i[o], p));
            }
          }
          if (t.extensions && t.extensions.length) {
            n.extensions = t.extensions;
          }
          if (t.reserved && t.reserved.length) {
            n.reserved = t.reserved;
          }
          if (t.group) {
            n.group = true;
          }
          if (t.comment) {
            n.comment = t.comment;
          }
          return n;
        };
        b.prototype.toJSON = function (e) {
          var t = r.prototype.toJSON.call(this, e);
          var n = !!e && Boolean(e.keepComments);
          return d.toObject(["options", t && t.options || undefined, "oneofs", r.arrayToJSON(this.oneofsArray, e), "fields", r.arrayToJSON(this.fieldsArray.filter(function (e) {
            return !e.declaringField;
          }), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", n ? this.comment : undefined]);
        };
        b.prototype.resolveAll = function () {
          var e = this.fieldsArray;
          for (var t = 0; t < e.length;) {
            e[t++].resolve();
          }
          var n = this.oneofsArray;
          for (t = 0; t < n.length;) {
            n[t++].resolve();
          }
          return r.prototype.resolveAll.call(this);
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
            return C(this);
          }
          return e instanceof s ? (this.oneofs || (this.oneofs = {}), this.oneofs[e.name] = e, e.onAdd(this), C(this)) : r.prototype.add.call(this, e);
        };
        b.prototype.remove = function (e) {
          if (e instanceof l && undefined === e.extend) {
            if (!this.fields || this.fields[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.fields[e.name];
            e.parent = null;
            e.onRemove(this);
            return C(this);
          }
          if (e instanceof s) {
            if (!this.oneofs || this.oneofs[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.oneofs[e.name];
            e.parent = null;
            e.onRemove(this);
            return C(this);
          }
          return r.prototype.remove.call(this, e);
        };
        b.prototype.isReservedId = function (e) {
          return r.isReservedId(this.reserved, e);
        };
        b.prototype.isReservedName = function (e) {
          return r.isReservedName(this.reserved, e);
        };
        b.prototype.create = function (e) {
          return new this.ctor(e);
        };
        b.prototype.setup = function () {
          var e = this.fullName;
          var t = [];
          for (var n = 0; n < this.fieldsArray.length; ++n) {
            t.push(this._fieldsArray[n].resolve().resolvedType);
          }
          this.encode = f(this)({
            Writer: _,
            types: t,
            util: d
          });
          this.decode = h(this)({
            Reader: m,
            types: t,
            util: d
          });
          this.verify = y(this)({
            types: t,
            util: d
          });
          this.fromObject = S.fromObject(this)({
            types: t,
            util: d
          });
          this.toObject = S.toObject(this)({
            types: t,
            util: d
          });
          var i = g[e];
          if (i) {
            var o = Object.create(this);
            o.fromObject = this.fromObject;
            this.fromObject = i.fromObject.bind(o);
            o.toObject = this.toObject;
            this.toObject = i.toObject.bind(o);
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
            d.decorateType(t, e);
          };
        };
        n.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./message": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./reader": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./writer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./encoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./wrappers": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (e, t, n, i, o) {
        n.exports = _;
        var r = t("./namespace");
        ((_.prototype = Object.create(r.prototype)).constructor = _).className = "Root";
        var a;
        var s;
        var l;
        var c = t("./field");
        var u = t("./enum");
        var p = t("./oneof");
        var m = t("./util");
        function _(e) {
          r.call(this, "", e);
          this.deferred = [];
          this.files = [];
        }
        function d() {}
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
        _.prototype.load = function e(t, n, i) {
          if ("function" == typeof n) {
            i = n;
            n = undefined;
          }
          var o = this;
          if (!i) {
            return m.asPromise(e, o, t, n);
          }
          var r = i === d;
          function a(e, t) {
            if (i) {
              var n = i;
              i = null;
              if (r) {
                throw e;
              }
              n(e, t);
            }
          }
          function c(e) {
            var t = e.lastIndexOf("google/protobuf/");
            if (t > -1) {
              var n = e.substring(t);
              if (n in l) {
                return n;
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
                s.filename = e;
                var i;
                var l = s(t, o, n);
                var u = 0;
                if (l.imports) {
                  for (; u < l.imports.length; ++u) {
                    if (i = c(l.imports[u]) || o.resolvePath(e, l.imports[u])) {
                      p(i);
                    }
                  }
                }
                if (l.weakImports) {
                  for (u = 0; u < l.weakImports.length; ++u) {
                    if (i = c(l.weakImports[u]) || o.resolvePath(e, l.weakImports[u])) {
                      p(i, true);
                    }
                  }
                }
              } else {
                o.setOptions(t.options).addJSON(t.nested);
              }
            } catch (e) {
              a(e);
            }
            if (!(r || _)) {
              a(null, o);
            }
          }
          function p(e, t) {
            if (!(o.files.indexOf(e) > -1)) {
              o.files.push(e);
              if (e in l) {
                if (r) {
                  u(e, l[e]);
                } else {
                  ++_;
                  setTimeout(function () {
                    --_;
                    u(e, l[e]);
                  });
                }
              } else if (r) {
                var n;
                try {
                  n = m.fs.readFileSync(e).toString("utf8");
                } catch (e) {
                  return void (t || a(e));
                }
                u(e, n);
              } else {
                ++_;
                o.fetch(e, function (n, r) {
                  --_;
                  if (i) {
                    if (n) {
                      if (t) {
                        if (!_) {
                          a(null, o);
                        }
                      } else {
                        a(n);
                      }
                    } else {
                      u(e, r);
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
          for (var h = 0; h < t.length; ++h) {
            if (f = o.resolvePath("", t[h])) {
              p(f);
            }
          }
          if (r) {
            return o;
          }
          if (!_) {
            a(null, o);
          }
        };
        _.prototype.loadSync = function (e, t) {
          if (!m.isNode) {
            throw Error("not supported");
          }
          return this.load(e, t, d);
        };
        _.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (e) {
              return "'extend " + e.extend + "' in " + e.parent.fullName;
            }).join(", "));
          }
          return r.prototype.resolveAll.call(this);
        };
        var f = /^[A-Z]/;
        function h(e, t) {
          var n = t.parent.lookup(t.extend);
          if (n) {
            var i = new c(t.fullName, t.id, t.type, t.rule, undefined, t.options);
            i.declaringField = t;
            t.extensionField = i;
            n.add(i);
            return true;
          }
          return false;
        }
        _.prototype._handleAdd = function (e) {
          if (e instanceof c) {
            if (!(undefined === e.extend || e.extensionField || h(0, e))) {
              this.deferred.push(e);
            }
          } else if (e instanceof u) {
            if (f.test(e.name)) {
              e.parent[e.name] = e.values;
            }
          } else if (!(e instanceof p)) {
            if (e instanceof a) {
              for (var t = 0; t < this.deferred.length;) {
                if (h(0, this.deferred[t])) {
                  this.deferred.splice(t, 1);
                } else {
                  ++t;
                }
              }
            }
            for (var n = 0; n < e.nestedArray.length; ++n) {
              this._handleAdd(e._nestedArray[n]);
            }
            if (f.test(e.name)) {
              e.parent[e.name] = e;
            }
          }
        };
        _.prototype._handleRemove = function (e) {
          if (e instanceof c) {
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
          } else if (e instanceof r) {
            for (var n = 0; n < e.nestedArray.length; ++n) {
              this._handleRemove(e._nestedArray[n]);
            }
            if (f.test(e.name)) {
              delete e.parent[e.name];
            }
          }
        };
        _._configure = function (e, t, n) {
          a = e;
          s = t;
          l = n;
        };
        n.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (e, t, n, i, o) {
        var r;
        var a;
        var s = n.exports = t("./util/minimal");
        var l = t("./roots");
        s.codegen = t("@protobufjs/codegen");
        s.fetch = t("@protobufjs/fetch");
        s.path = t("@protobufjs/path");
        s.fs = s.inquire("fs");
        s.toArray = function (e) {
          if (e) {
            var t = Object.keys(e);
            var n = new Array(t.length);
            for (var i = 0; i < t.length;) {
              n[i] = e[t[i++]];
            }
            return n;
          }
          return [];
        };
        s.toObject = function (e) {
          var t = {};
          for (var n = 0; n < e.length;) {
            var i = e[n++];
            var o = e[n++];
            if (undefined !== o) {
              t[i] = o;
            }
          }
          return t;
        };
        var c = /\\/g;
        var u = /"/g;
        s.isReserved = function (e) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e);
        };
        s.safeProp = function (e) {
          return !/^[$\w_]+$/.test(e) || s.isReserved(e) ? "[\"" + e.replace(c, "\\\\").replace(u, "\\\"") + "\"]" : "." + e;
        };
        s.ucFirst = function (e) {
          return e.charAt(0).toUpperCase() + e.substring(1);
        };
        var p = /_([a-z])/g;
        s.camelCase = function (e) {
          return e.substring(0, 1) + e.substring(1).replace(p, function (e, t) {
            return t.toUpperCase();
          });
        };
        s.compareFieldsById = function (e, t) {
          return e.id - t.id;
        };
        s.decorateType = function (e, n) {
          if (e.$type) {
            if (n && e.$type.name !== n) {
              s.decorateRoot.remove(e.$type);
              e.$type.name = n;
              s.decorateRoot.add(e.$type);
            }
            return e.$type;
          }
          if (!r) {
            r = t("./type");
          }
          var i = new r(n || e.name);
          s.decorateRoot.add(i);
          i.ctor = e;
          Object.defineProperty(e, "$type", {
            value: i,
            enumerable: false
          });
          Object.defineProperty(e.prototype, "$type", {
            value: i,
            enumerable: false
          });
          return i;
        };
        var m = 0;
        s.decorateEnum = function (e) {
          if (e.$type) {
            return e.$type;
          }
          if (!a) {
            a = t("./enum");
          }
          var n = new a("Enum" + m++, e);
          s.decorateRoot.add(n);
          Object.defineProperty(e, "$type", {
            value: n,
            enumerable: false
          });
          return n;
        };
        s.setProperty = function (e, t, n) {
          if ("object" != typeof e) {
            throw TypeError("dst must be an object");
          }
          if (!t) {
            throw TypeError("path must be specified");
          }
          return function e(t, n, i) {
            var o = n.shift();
            if ("__proto__" === o || "prototype" === o) {
              return t;
            }
            if (n.length > 0) {
              t[o] = e(t[o] || {}, n, i);
            } else {
              var r = t[o];
              if (r) {
                i = [].concat(r).concat(i);
              }
              t[o] = i;
            }
            return t;
          }(e, t = t.split("."), n);
        };
        Object.defineProperty(s, "decorateRoot", {
          get: function () {
            return l.decorated || (l.decorated = new (t("./root"))());
          }
        });
        n.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./roots": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          "@protobufjs/codegen": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          "@protobufjs/fetch": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          "@protobufjs/path": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          "./type": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./root": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (e, t, n, i, o) {
        n.exports = s;
        s.className = "ReflectionObject";
        var r;
        var a = t("./util");
        function s(e, t) {
          if (!a.isString(e)) {
            throw TypeError("name must be a string");
          }
          if (t && !a.isObject(t)) {
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
        Object.defineProperties(s.prototype, {
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
        s.prototype.toJSON = function () {
          throw Error();
        };
        s.prototype.onAdd = function (e) {
          if (this.parent && this.parent !== e) {
            this.parent.remove(this);
          }
          this.parent = e;
          this.resolved = false;
          var t = e.root;
          if (t instanceof r) {
            t._handleAdd(this);
          }
        };
        s.prototype.onRemove = function (e) {
          var t = e.root;
          if (t instanceof r) {
            t._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        s.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof r) {
              this.resolved = true;
            }
          }
          return this;
        };
        s.prototype.getOption = function (e) {
          if (this.options) {
            return this.options[e];
          }
        };
        s.prototype.setOption = function (e, t, n) {
          if (!(n && this.options && undefined !== this.options[e])) {
            (this.options || (this.options = {}))[e] = t;
          }
          return this;
        };
        s.prototype.setParsedOption = function (e, t, n) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var i = this.parsedOptions;
          if (n) {
            var o = i.find(function (t) {
              return Object.prototype.hasOwnProperty.call(t, e);
            });
            if (o) {
              var r = o[e];
              a.setProperty(r, n, t);
            } else {
              (o = {})[e] = a.setProperty({}, n, t);
              i.push(o);
            }
          } else {
            var s = {
              e: t
            };
            i.push(s);
          }
          return this;
        };
        s.prototype.setOptions = function (e, t) {
          if (e) {
            var n = Object.keys(e);
            for (var i = 0; i < n.length; ++i) {
              this.setOption(n[i], e[n[i]], t);
            }
          }
          return this;
        };
        s.prototype.toString = function () {
          var e = this.constructor.className;
          var t = this.fullName;
          return t.length ? e + " " + t : e;
        };
        s._configure = function (e) {
          r = e;
        };
        n.exports;
      }, function () {
        return {
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (e, t, n, i, o) {
        n.exports = l;
        var r = t("./object");
        ((l.prototype = Object.create(r.prototype)).constructor = l).className = "Enum";
        var a = t("./namespace");
        var s = t("./util");
        function l(e, t, n, i, o) {
          r.call(this, e, n);
          if (t && "object" != typeof t) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = i;
          this.comments = o || {};
          this.reserved = undefined;
          if (t) {
            var a = Object.keys(t);
            for (var s = 0; s < a.length; ++s) {
              if ("number" == typeof t[a[s]]) {
                this.valuesById[this.values[a[s]] = t[a[s]]] = a[s];
              }
            }
          }
        }
        l.fromJSON = function (e, t) {
          var n = new l(e, t.values, t.options, t.comment, t.comments);
          n.reserved = t.reserved;
          return n;
        };
        l.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return s.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined]);
        };
        l.prototype.add = function (e, t, n) {
          if (!s.isString(e)) {
            throw TypeError("name must be a string");
          }
          if (!s.isInteger(t)) {
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
          this.comments[e] = n || null;
          return this;
        };
        l.prototype.remove = function (e) {
          if (!s.isString(e)) {
            throw TypeError("name must be a string");
          }
          var t = this.values[e];
          if (null == t) {
            throw Error("name '" + e + "' does not exist in " + this);
          }
          delete this.valuesById[t];
          delete this.values[e];
          delete this.comments[e];
          return this;
        };
        l.prototype.isReservedId = function (e) {
          return a.isReservedId(this.reserved, e);
        };
        l.prototype.isReservedName = function (e) {
          return a.isReservedName(this.reserved, e);
        };
        n.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (e, t, n, i, o) {
        n.exports = function (e) {
          var t;
          var n = s.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()");
          var i = e.fieldsArray.slice().sort(s.compareFieldsById);
          for (var o = 0; o < i.length; ++o) {
            var c = i[o].resolve();
            var u = e._fieldsArray.indexOf(c);
            var p = c.resolvedType instanceof r ? "int32" : c.type;
            var m = a.basic[p];
            t = "m" + s.safeProp(c.name);
            if (c.map) {
              n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, c.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (c.id << 3 | 2) >>> 0, 8 | a.mapKey[c.keyType], c.keyType);
              if (undefined === m) {
                n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, t);
              } else {
                n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | m, p, t);
              }
              n("}")("}");
            } else if (c.repeated) {
              n("if(%s!=null&&%s.length){", t, t);
              if (c.packed && undefined !== a.packed[p]) {
                n("w.uint32(%i).fork()", (c.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", p, t)("w.ldelim()");
              } else {
                n("for(var i=0;i<%s.length;++i)", t);
                if (undefined === m) {
                  if (c.resolvedType.group) {
                    n("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t + "[i]", (c.id << 3 | 3) >>> 0, (c.id << 3 | 4) >>> 0);
                  } else {
                    n("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t + "[i]", (c.id << 3 | 2) >>> 0);
                  }
                } else {
                  n("w.uint32(%i).%s(%s[i])", (c.id << 3 | m) >>> 0, p, t);
                }
              }
              n("}");
            } else {
              if (c.optional) {
                n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, c.name);
              }
              if (undefined === m) {
                if (c.resolvedType.group) {
                  n("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t, (c.id << 3 | 3) >>> 0, (c.id << 3 | 4) >>> 0);
                } else {
                  n("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t, (c.id << 3 | 2) >>> 0);
                }
              } else {
                n("w.uint32(%i).%s(%s)", (c.id << 3 | m) >>> 0, p, t);
              }
            }
          }
          return n("return w");
        };
        var r = t("./enum");
        var a = t("./types");
        var s = t("./util");
        n.exports;
      }, function () {
        return {
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (e, t, n, i, o) {
        var r = n.exports = t("./index-minimal");
        r.build = "light";
        r.load = function (e, t, n) {
          if ("function" == typeof t) {
            n = t;
            t = new r.Root();
          } else if (!t) {
            t = new r.Root();
          }
          return t.load(e, n);
        };
        r.loadSync = function (e, t) {
          if (!t) {
            t = new r.Root();
          }
          return t.loadSync(e);
        };
        r.encoder = t("./encoder");
        r.decoder = t("./decoder");
        r.verifier = t("./verifier");
        r.converter = t("./converter");
        r.ReflectionObject = t("./object");
        r.Namespace = t("./namespace");
        r.Root = t("./root");
        r.Enum = t("./enum");
        r.Type = t("./type");
        r.Field = t("./field");
        r.OneOf = t("./oneof");
        r.MapField = t("./mapfield");
        r.Service = t("./service");
        r.Method = t("./method");
        r.Message = t("./message");
        r.wrappers = t("./wrappers");
        r.types = t("./types");
        r.util = t("./util");
        r.ReflectionObject._configure(r.Root);
        r.Namespace._configure(r.Type, r.Service, r.Enum);
        r.Root._configure(r.Type);
        r.Field._configure(r.Type);
        n.exports;
      }, function () {
        return {
          "./index-minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          "./encoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./root": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./type": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./mapfield": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./message": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./wrappers": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (e, t, n, i, o) {
        n.exports = f;
        var r = /[\s{}=;:[\],'"()<>]/g;
        var a = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var s = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var l = /^ *[*/]+ */;
        var c = /^\s*\*?\/*/;
        var u = /\n/g;
        var p = /\s/;
        var m = /\\(.?)/g;
        var _ = {
          0: "\0",
          r: "\r",
          n: "\n",
          t: "\t"
        };
        function d(e) {
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
          var n = 0;
          var i = e.length;
          var o = 1;
          var m = null;
          var _ = null;
          var f = 0;
          var h = false;
          var y = false;
          var S = [];
          var g = null;
          function v(n, i, r) {
            m = e.charAt(n++);
            f = o;
            h = false;
            y = r;
            var a;
            var s = n - (t ? 2 : 3);
            do {
              if (--s < 0 || "\n" === (a = e.charAt(s))) {
                h = true;
                break;
              }
            } while (" " === a || "\t" === a);
            var p = e.substring(n, i).split(u);
            for (var d = 0; d < p.length; ++d) {
              p[d] = p[d].replace(t ? c : l, "").trim();
            }
            _ = p.join("\n").trim();
          }
          function w(t) {
            var n = $(t);
            var i = e.substring(t, n);
            return /^\s*\/{1,2}/.test(i);
          }
          function $(e) {
            for (var t = e; t < i && "\n" !== e.charAt(t);) {
              t++;
            }
            return t;
          }
          function A() {
            if (S.length > 0) {
              return S.shift();
            }
            if (g) {
              return function () {
                var t = "'" === g ? s : a;
                t.lastIndex = n - 1;
                var i = t.exec(e);
                if (!i) {
                  throw Error("illegal string (line " + o + ")");
                }
                n = t.lastIndex;
                R(g);
                g = null;
                return d(i[1]);
              }();
            }
            var l;
            var c;
            var u;
            var m;
            var _;
            var f = 0 === n;
            do {
              if (n === i) {
                return null;
              }
              for (l = false; p.test(u = e.charAt(n));) {
                if ("\n" === u) {
                  f = true;
                  ++o;
                }
                if (++n === i) {
                  return null;
                }
              }
              if ("/" === e.charAt(n)) {
                if (++n === i) {
                  throw Error("illegal comment (line " + o + ")");
                }
                if ("/" === e.charAt(n)) {
                  if (t) {
                    m = n;
                    _ = false;
                    if (w(n)) {
                      _ = true;
                      do {
                        if ((n = $(n)) === i) {
                          break;
                        }
                        n++;
                      } while (w(n));
                    } else {
                      n = Math.min(i, $(n) + 1);
                    }
                    if (_) {
                      v(m, n, f);
                    }
                    o++;
                    l = true;
                  } else {
                    for (_ = "/" === e.charAt(m = n + 1); "\n" !== e.charAt(++n);) {
                      if (n === i) {
                        return null;
                      }
                    }
                    ++n;
                    if (_) {
                      v(m, n - 1, f);
                    }
                    ++o;
                    l = true;
                  }
                } else {
                  if ("*" !== (u = e.charAt(n))) {
                    return "/";
                  }
                  m = n + 1;
                  _ = t || "*" === e.charAt(m);
                  do {
                    if ("\n" === u) {
                      ++o;
                    }
                    if (++n === i) {
                      throw Error("illegal comment (line " + o + ")");
                    }
                    c = u;
                    u = e.charAt(n);
                  } while ("*" !== c || "/" !== u);
                  ++n;
                  if (_) {
                    v(m, n - 2, f);
                  }
                  l = true;
                }
              }
            } while (l);
            var h = n;
            r.lastIndex = 0;
            if (!r.test(e.charAt(h++))) {
              for (; h < i && !r.test(e.charAt(h));) {
                ++h;
              }
            }
            var y = e.substring(n, n = h);
            if (!("\"" !== y && "'" !== y)) {
              g = y;
            }
            return y;
          }
          function R(e) {
            S.push(e);
          }
          function T() {
            if (!S.length) {
              var e = A();
              if (null === e) {
                return null;
              }
              R(e);
            }
            return S[0];
          }
          return Object.defineProperty({
            next: A,
            peek: T,
            push: R,
            skip: function (e, t) {
              var n = T();
              if (n === e) {
                A();
                return true;
              }
              if (!t) {
                throw Error("illegal " + ("token '" + n + "', '" + e + "' expected") + " (line " + o + ")");
              }
              return false;
            },
            cmnt: function (e) {
              var n = null;
              if (undefined === e) {
                if (f === o - 1 && (t || "*" === m || h)) {
                  n = y ? _ : null;
                }
              } else {
                if (f < e) {
                  T();
                }
                if (!(f !== e || h || !t && "/" !== m)) {
                  n = y ? null : _;
                }
              }
              return n;
            }
          }, "line", {
            get: function () {
              return o;
            }
          });
        }
        f.unescape = d;
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (e, t, n, i, o) {
        n.exports = R;
        R.filename = null;
        R.defaults = {
          keepCase: false
        };
        var r = t("./tokenize");
        var a = t("./root");
        var s = t("./type");
        var l = t("./field");
        var c = t("./mapfield");
        var u = t("./oneof");
        var p = t("./enum");
        var m = t("./service");
        var _ = t("./method");
        var d = t("./types");
        var f = t("./util");
        var h = /^[1-9][0-9]*$/;
        var y = /^-?[1-9][0-9]*$/;
        var S = /^0[x][0-9a-fA-F]+$/;
        var g = /^-?0[x][0-9a-fA-F]+$/;
        var b = /^0[0-7]+$/;
        var C = /^-?0[0-7]+$/;
        var v = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var w = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var $ = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var A = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function R(e, t, n) {
          if (!(t instanceof a)) {
            n = t;
            t = new a();
          }
          if (!n) {
            n = R.defaults;
          }
          var i;
          var o;
          var T;
          var E;
          var D;
          var L = n.preferTrailingComment || false;
          var P = r(e, n.alternateCommentMode || false);
          var I = P.next;
          var B = P.push;
          var N = P.peek;
          var k = P.skip;
          var O = P.cmnt;
          var G = true;
          var F = false;
          var x = t;
          var U = n.keepCase ? function (e) {
            return e;
          } : f.camelCase;
          function M(e, t, n) {
            var i = R.filename;
            if (!n) {
              R.filename = null;
            }
            return Error("illegal " + (t || "token") + " '" + e + "' (" + (i ? i + ", " : "") + "line " + P.line + ")");
          }
          function j() {
            var e;
            var t = [];
            do {
              if ("\"" !== (e = I()) && "'" !== e) {
                throw M(e);
              }
              t.push(I());
              k(e);
              e = N();
            } while ("\"" === e || "'" === e);
            return t.join("");
          }
          function W(e) {
            var t = I();
            switch (t) {
              case "'":
              case "\"":
                B(t);
                return j();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (e, t) {
                var n = 1;
                if ("-" === e.charAt(0)) {
                  n = -1;
                  e = e.substring(1);
                }
                switch (e) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return n * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case "0":
                    return 0;
                }
                if (h.test(e)) {
                  return n * parseInt(e, 10);
                }
                if (S.test(e)) {
                  return n * parseInt(e, 16);
                }
                if (b.test(e)) {
                  return n * parseInt(e, 8);
                }
                if (v.test(e)) {
                  return n * parseFloat(e);
                }
                throw M(e, "number", t);
              }(t, true);
            } catch (n) {
              if (e && $.test(t)) {
                return t;
              }
              throw M(t, "value");
            }
          }
          function V(e, t) {
            var n;
            var i;
            do {
              if (!t || "\"" !== (n = N()) && "'" !== n) {
                e.push([i = z(I()), k("to", true) ? z(I()) : i]);
              } else {
                e.push(j());
              }
            } while (k(",", true));
            k(";");
          }
          function z(e, t) {
            switch (e) {
              case "max":
              case "MAX":
              case "Max":
                return 536870911;
              case "0":
                return 0;
            }
            if (!t && "-" === e.charAt(0)) {
              throw M(e, "id");
            }
            if (y.test(e)) {
              return parseInt(e, 10);
            }
            if (g.test(e)) {
              return parseInt(e, 16);
            }
            if (C.test(e)) {
              return parseInt(e, 8);
            }
            throw M(e, "id");
          }
          function H() {
            if (undefined !== i) {
              throw M("package");
            }
            i = I();
            if (!$.test(i)) {
              throw M(i, "name");
            }
            x = x.define(i);
            k(";");
          }
          function K() {
            var e;
            var t = N();
            switch (t) {
              case "weak":
                e = T || (T = []);
                I();
                break;
              case "public":
                I();
              default:
                e = o || (o = []);
            }
            t = j();
            k(";");
            e.push(t);
          }
          function q() {
            k("=");
            E = j();
            if (!(F = "proto3" === E) && "proto2" !== E) {
              throw M(E, "syntax");
            }
            k(";");
          }
          function Y(e, t) {
            switch (t) {
              case "option":
                X(e, t);
                k(";");
                return true;
              case "message":
                (function (e, t) {
                  if (!w.test(t = I())) {
                    throw M(t, "type name");
                  }
                  var n = new s(t);
                  Q(n, function (e) {
                    if (!Y(n, e)) {
                      switch (e) {
                        case "map":
                          !function (e) {
                            k("<");
                            var t = I();
                            if (undefined === d.mapKey[t]) {
                              throw M(t, "type");
                            }
                            k(",");
                            var n = I();
                            if (!$.test(n)) {
                              throw M(n, "type");
                            }
                            k(">");
                            var i = I();
                            if (!w.test(i)) {
                              throw M(i, "name");
                            }
                            k("=");
                            var o = new c(U(i), z(I()), t, n);
                            Q(o, function (e) {
                              if ("option" !== e) {
                                throw M(e);
                              }
                              X(o, e);
                              k(";");
                            }, function () {
                              te(o);
                            });
                            e.add(o);
                          }(n);
                          break;
                        case "required":
                        case "repeated":
                          J(n, e);
                          break;
                        case "optional":
                          J(n, F ? "proto3_optional" : "optional");
                          break;
                        case "oneof":
                          !function (e, t) {
                            if (!w.test(t = I())) {
                              throw M(t, "name");
                            }
                            var n = new u(U(t));
                            Q(n, function (e) {
                              if ("option" === e) {
                                X(n, e);
                                k(";");
                              } else {
                                B(e);
                                J(n, "optional");
                              }
                            });
                            e.add(n);
                          }(n, e);
                          break;
                        case "extensions":
                          V(n.extensions || (n.extensions = []));
                          break;
                        case "reserved":
                          V(n.reserved || (n.reserved = []), true);
                          break;
                        default:
                          if (!F || !$.test(e)) {
                            throw M(e);
                          }
                          B(e);
                          J(n, "optional");
                      }
                    }
                  });
                  e.add(n);
                })(e, t);
                return true;
              case "enum":
                (function (e, t) {
                  if (!w.test(t = I())) {
                    throw M(t, "name");
                  }
                  var n = new p(t);
                  Q(n, function (e) {
                    switch (e) {
                      case "option":
                        X(n, e);
                        k(";");
                        break;
                      case "reserved":
                        V(n.reserved || (n.reserved = []), true);
                        break;
                      default:
                        !function (e, t) {
                          if (!w.test(t)) {
                            throw M(t, "name");
                          }
                          k("=");
                          var n = z(I(), true);
                          var i = {};
                          Q(i, function (e) {
                            if ("option" !== e) {
                              throw M(e);
                            }
                            X(i, e);
                            k(";");
                          }, function () {
                            te(i);
                          });
                          e.add(t, n, i.comment);
                        }(n, e);
                    }
                  });
                  e.add(n);
                })(e, t);
                return true;
              case "service":
                (function (e, t) {
                  if (!w.test(t = I())) {
                    throw M(t, "service name");
                  }
                  var n = new m(t);
                  Q(n, function (e) {
                    if (!Y(n, e)) {
                      if ("rpc" !== e) {
                        throw M(e);
                      }
                      !function (e, t) {
                        var n = O();
                        var i = t;
                        if (!w.test(t = I())) {
                          throw M(t, "name");
                        }
                        var o;
                        var r;
                        var a;
                        var s;
                        var l = t;
                        k("(");
                        if (k("stream", true)) {
                          r = true;
                        }
                        if (!$.test(t = I())) {
                          throw M(t);
                        }
                        o = t;
                        k(")");
                        k("returns");
                        k("(");
                        if (k("stream", true)) {
                          s = true;
                        }
                        if (!$.test(t = I())) {
                          throw M(t);
                        }
                        a = t;
                        k(")");
                        var c = new _(l, i, o, a, r, s);
                        c.comment = n;
                        Q(c, function (e) {
                          if ("option" !== e) {
                            throw M(e);
                          }
                          X(c, e);
                          k(";");
                        });
                        e.add(c);
                      }(n, e);
                    }
                  });
                  e.add(n);
                })(e, t);
                return true;
              case "extend":
                (function (e, t) {
                  if (!$.test(t = I())) {
                    throw M(t, "reference");
                  }
                  var n = t;
                  Q(null, function (t) {
                    switch (t) {
                      case "required":
                      case "repeated":
                        J(e, t, n);
                        break;
                      case "optional":
                        J(e, F ? "proto3_optional" : "optional", n);
                        break;
                      default:
                        if (!F || !$.test(t)) {
                          throw M(t);
                        }
                        B(t);
                        J(e, "optional", n);
                    }
                  });
                })(e, t);
                return true;
            }
            return false;
          }
          function Q(e, t, n) {
            var i = P.line;
            if (e) {
              if ("string" != typeof e.comment) {
                e.comment = O();
              }
              e.filename = R.filename;
            }
            if (k("{", true)) {
              for (var o; "}" !== (o = I());) {
                t(o);
              }
              k(";", true);
            } else {
              if (n) {
                n();
              }
              k(";");
              if (e && ("string" != typeof e.comment || L)) {
                e.comment = O(i) || e.comment;
              }
            }
          }
          function J(e, t, n) {
            var i = I();
            if ("group" !== i) {
              if (!$.test(i)) {
                throw M(i, "type");
              }
              var o = I();
              if (!w.test(o)) {
                throw M(o, "name");
              }
              o = U(o);
              k("=");
              var r = new l(o, z(I()), i, t, n);
              Q(r, function (e) {
                if ("option" !== e) {
                  throw M(e);
                }
                X(r, e);
                k(";");
              }, function () {
                te(r);
              });
              if ("proto3_optional" === t) {
                var a = new u("_" + o);
                r.setOption("proto3_optional", true);
                a.add(r);
                e.add(a);
              } else {
                e.add(r);
              }
              if (!(F || !r.repeated || undefined === d.packed[i] && undefined !== d.basic[i])) {
                r.setOption("packed", false, true);
              }
            } else {
              !function (e, t) {
                var n = I();
                if (!w.test(n)) {
                  throw M(n, "name");
                }
                var i = f.lcFirst(n);
                if (n === i) {
                  n = f.ucFirst(n);
                }
                k("=");
                var o = z(I());
                var r = new s(n);
                r.group = true;
                var a = new l(i, o, n, t);
                a.filename = R.filename;
                Q(r, function (e) {
                  switch (e) {
                    case "option":
                      X(r, e);
                      k(";");
                      break;
                    case "required":
                    case "repeated":
                      J(r, e);
                      break;
                    case "optional":
                      J(r, F ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw M(e);
                  }
                });
                e.add(r).add(a);
              }(e, t);
            }
          }
          function X(e, t) {
            var n = k("(", true);
            if (!$.test(t = I())) {
              throw M(t, "name");
            }
            var i;
            var o = t;
            var r = o;
            if (n) {
              k(")");
              r = o = "(" + o + ")";
              t = N();
              if (A.test(t)) {
                i = t.substr(1);
                o += t;
                I();
              }
            }
            k("=");
            (function (e, t, n, i) {
              if (e.setParsedOption) {
                e.setParsedOption(t, n, i);
              }
            })(e, r, Z(e, o), i);
          }
          function Z(e, t) {
            if (k("{", true)) {
              for (var n = {}; !k("}", true);) {
                if (!w.test(D = I())) {
                  throw M(D, "name");
                }
                var i;
                var o = D;
                if ("{" === N()) {
                  i = Z(e, t + "." + D);
                } else {
                  k(":");
                  if ("{" === N()) {
                    i = Z(e, t + "." + D);
                  } else {
                    i = W(true);
                    ee(e, t + "." + D, i);
                  }
                }
                var r = n[o];
                if (r) {
                  i = [].concat(r).concat(i);
                }
                n[o] = i;
                k(",", true);
              }
              return n;
            }
            var a = W(true);
            ee(e, t, a);
            return a;
          }
          function ee(e, t, n) {
            if (e.setOption) {
              e.setOption(t, n);
            }
          }
          function te(e) {
            if (k("[", true)) {
              do {
                X(e, "option");
              } while (k(",", true));
              k("]");
            }
            return e;
          }
          for (; null !== (D = I());) {
            switch (D) {
              case "package":
                if (!G) {
                  throw M(D);
                }
                H();
                break;
              case "import":
                if (!G) {
                  throw M(D);
                }
                K();
                break;
              case "syntax":
                if (!G) {
                  throw M(D);
                }
                q();
                break;
              case "option":
                X(x, D);
                k(";");
                break;
              default:
                if (Y(x, D)) {
                  G = false;
                  continue;
                }
                throw M(D);
            }
          }
          R.filename = null;
          return {
            package: i,
            imports: o,
            weakImports: T,
            syntax: E,
            root: t
          };
        }
        n.exports;
      }, function () {
        return {
          "./tokenize": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./root": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./type": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (e, t, n, i, o) {
        n.exports = s;
        var r;
        var a = /\/|\./;
        function s(e, t) {
          if (!a.test(e)) {
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
          s[e] = t;
        }
        s("any", {
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
        s("duration", {
          Duration: r = {
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
        s("timestamp", {
          Timestamp: r
        });
        s("empty", {
          Empty: {
            fields: {}
          }
        });
        s("struct", {
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
        s("wrappers", {
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
        s("field_mask", {
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
        s.get = function (e) {
          return s[e] || null;
        };
        n.exports;
      }, {});
      var _cjsExports$1;
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (e, t, n, i, o) {
        var r = n.exports = t("./index-light");
        r.build = "full";
        r.tokenize = t("./tokenize");
        r.parse = t("./parse");
        r.common = t("./common");
        r.Root._configure(r.Type, r.parse, r.common);
        n.exports;
      }, function () {
        return {
          "./index-light": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          "./tokenize": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./parse": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          "./common": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/index.js", function (e, t, n, i, o) {
        n.exports = t("./src/index");
        _cjsExports$1 = n.exports;
      }, function () {
        return {
          "./src/index": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      loader.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/index.js");
      var _cjsExports$2;
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (e, t, n, i, o) {
        n.exports = t("./src/index-minimal");
        n.exports;
      }, function () {
        return {
          "./src/index-minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _dec$n;
      var _class$n;
      var _descriptor$n;
      var _class3$b;
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/assets/game/Script/Proto/bikiniProto.js", function (e, t, n, i, o) {
        var r;
        var a = t("protobufjs/minimal");
        var s = a.Reader;
        var l = a.Writer;
        var c = a.util;
        var u = a.roots.default || (a.roots.default = {});
        (r = {
          AwardData: function () {
            function e(e) {
              if (e) {
                var t = Object.keys(e);
                for (var n = 0; n < t.length; ++n) {
                  if (null != e[t[n]]) {
                    this[t[n]] = e[t[n]];
                  }
                }
              }
            }
            e.prototype.Symbol = 0;
            e.prototype.Count = 0;
            e.prototype.Win = 0;
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
              if (null != e.Win && Object.hasOwnProperty.call(e, "Win")) {
                t.uint32(25).double(e.Win);
              }
              return t;
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.bikiniProto.AwardData(); e.pos < n;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    i.Symbol = e.int32();
                    break;
                  case 2:
                    i.Count = e.int32();
                    break;
                  case 3:
                    i.Win = e.double();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return i;
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/bikiniProto.AwardData";
            };
            return e;
          }(),
          ComboStageInfo: function () {
            function e(e) {
              this.ComboStageSymbol = [];
              this.FinalStageSymbol = [];
              this.AwardDataVec = [];
              this.KeepSymbol = [];
              this.ComboTag = [];
              this.FillSymbols = [];
              if (e) {
                var t = Object.keys(e);
                for (var n = 0; n < t.length; ++n) {
                  if (null != e[t[n]]) {
                    this[t[n]] = e[t[n]];
                  }
                }
              }
            }
            e.prototype.ComboStageSymbol = c.emptyArray;
            e.prototype.FinalStageSymbol = c.emptyArray;
            e.prototype.ComboStageWin = 0;
            e.prototype.AwardDataVec = c.emptyArray;
            e.prototype.GetTrans = false;
            e.prototype.KeepSymbol = c.emptyArray;
            e.prototype.ComboTag = c.emptyArray;
            e.prototype.FillSymbols = c.emptyArray;
            e.prototype.GetBonus = false;
            e.prototype.BonusType = 0;
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.ComboStageSymbol && e.ComboStageSymbol.length) {
                for (var n = 0; n < e.ComboStageSymbol.length; ++n) {
                  u.bikiniProto.Column.encode(e.ComboStageSymbol[n], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.FinalStageSymbol && e.FinalStageSymbol.length) {
                for (n = 0; n < e.FinalStageSymbol.length; ++n) {
                  u.bikiniProto.Column.encode(e.FinalStageSymbol[n], t.uint32(18).fork()).ldelim();
                }
              }
              if (null != e.ComboStageWin && Object.hasOwnProperty.call(e, "ComboStageWin")) {
                t.uint32(25).double(e.ComboStageWin);
              }
              if (null != e.AwardDataVec && e.AwardDataVec.length) {
                for (n = 0; n < e.AwardDataVec.length; ++n) {
                  u.bikiniProto.AwardData.encode(e.AwardDataVec[n], t.uint32(34).fork()).ldelim();
                }
              }
              if (null != e.GetTrans && Object.hasOwnProperty.call(e, "GetTrans")) {
                t.uint32(40).bool(e.GetTrans);
              }
              if (null != e.KeepSymbol && e.KeepSymbol.length) {
                t.uint32(50).fork();
                for (n = 0; n < e.KeepSymbol.length; ++n) {
                  t.int32(e.KeepSymbol[n]);
                }
                t.ldelim();
              }
              if (null != e.ComboTag && e.ComboTag.length) {
                for (n = 0; n < e.ComboTag.length; ++n) {
                  u.bikiniProto.Column.encode(e.ComboTag[n], t.uint32(58).fork()).ldelim();
                }
              }
              if (null != e.FillSymbols && e.FillSymbols.length) {
                for (n = 0; n < e.FillSymbols.length; ++n) {
                  u.bikiniProto.Column.encode(e.FillSymbols[n], t.uint32(66).fork()).ldelim();
                }
              }
              if (null != e.GetBonus && Object.hasOwnProperty.call(e, "GetBonus")) {
                t.uint32(72).bool(e.GetBonus);
              }
              if (null != e.BonusType && Object.hasOwnProperty.call(e, "BonusType")) {
                t.uint32(80).int32(e.BonusType);
              }
              return t;
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.bikiniProto.ComboStageInfo(); e.pos < n;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (!(i.ComboStageSymbol && i.ComboStageSymbol.length)) {
                      i.ComboStageSymbol = [];
                    }
                    i.ComboStageSymbol.push(u.bikiniProto.Column.decode(e, e.uint32()));
                    break;
                  case 2:
                    if (!(i.FinalStageSymbol && i.FinalStageSymbol.length)) {
                      i.FinalStageSymbol = [];
                    }
                    i.FinalStageSymbol.push(u.bikiniProto.Column.decode(e, e.uint32()));
                    break;
                  case 3:
                    i.ComboStageWin = e.double();
                    break;
                  case 4:
                    if (!(i.AwardDataVec && i.AwardDataVec.length)) {
                      i.AwardDataVec = [];
                    }
                    i.AwardDataVec.push(u.bikiniProto.AwardData.decode(e, e.uint32()));
                    break;
                  case 5:
                    i.GetTrans = e.bool();
                    break;
                  case 6:
                    if (!(i.KeepSymbol && i.KeepSymbol.length)) {
                      i.KeepSymbol = [];
                    }
                    if (2 == (7 & o)) {
                      for (var r = e.uint32() + e.pos; e.pos < r;) {
                        i.KeepSymbol.push(e.int32());
                      }
                    } else {
                      i.KeepSymbol.push(e.int32());
                    }
                    break;
                  case 7:
                    if (!(i.ComboTag && i.ComboTag.length)) {
                      i.ComboTag = [];
                    }
                    i.ComboTag.push(u.bikiniProto.Column.decode(e, e.uint32()));
                    break;
                  case 8:
                    if (!(i.FillSymbols && i.FillSymbols.length)) {
                      i.FillSymbols = [];
                    }
                    i.FillSymbols.push(u.bikiniProto.Column.decode(e, e.uint32()));
                    break;
                  case 9:
                    i.GetBonus = e.bool();
                    break;
                  case 10:
                    i.BonusType = e.int32();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return i;
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/bikiniProto.ComboStageInfo";
            };
            return e;
          }(),
          RoundInfo: function () {
            function e(e) {
              this.ComboStageData = [];
              this.BounsData = [];
              if (e) {
                var t = Object.keys(e);
                for (var n = 0; n < t.length; ++n) {
                  if (null != e[t[n]]) {
                    this[t[n]] = e[t[n]];
                  }
                }
              }
            }
            e.prototype.ComboStageData = c.emptyArray;
            e.prototype.RoundWin = 0;
            e.prototype.BounsData = c.emptyArray;
            e.prototype.FreeRemainRound = 0;
            e.prototype.FreeTotalRound = 0;
            e.prototype.SpecialCount = 0;
            e.prototype.AddRounds = 0;
            e.prototype.AwardTypeFlag = 0;
            e.prototype.MaxFlag = false;
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.ComboStageData && e.ComboStageData.length) {
                for (var n = 0; n < e.ComboStageData.length; ++n) {
                  u.bikiniProto.ComboStageInfo.encode(e.ComboStageData[n], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.RoundWin && Object.hasOwnProperty.call(e, "RoundWin")) {
                t.uint32(17).double(e.RoundWin);
              }
              if (null != e.BounsData && e.BounsData.length) {
                t.uint32(26).fork();
                for (n = 0; n < e.BounsData.length; ++n) {
                  t.int32(e.BounsData[n]);
                }
                t.ldelim();
              }
              if (null != e.FreeRemainRound && Object.hasOwnProperty.call(e, "FreeRemainRound")) {
                t.uint32(32).int32(e.FreeRemainRound);
              }
              if (null != e.FreeTotalRound && Object.hasOwnProperty.call(e, "FreeTotalRound")) {
                t.uint32(40).int32(e.FreeTotalRound);
              }
              if (null != e.SpecialCount && Object.hasOwnProperty.call(e, "SpecialCount")) {
                t.uint32(48).int32(e.SpecialCount);
              }
              if (null != e.AddRounds && Object.hasOwnProperty.call(e, "AddRounds")) {
                t.uint32(56).int32(e.AddRounds);
              }
              if (null != e.AwardTypeFlag && Object.hasOwnProperty.call(e, "AwardTypeFlag")) {
                t.uint32(64).int32(e.AwardTypeFlag);
              }
              if (null != e.MaxFlag && Object.hasOwnProperty.call(e, "MaxFlag")) {
                t.uint32(72).bool(e.MaxFlag);
              }
              return t;
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.bikiniProto.RoundInfo(); e.pos < n;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (!(i.ComboStageData && i.ComboStageData.length)) {
                      i.ComboStageData = [];
                    }
                    i.ComboStageData.push(u.bikiniProto.ComboStageInfo.decode(e, e.uint32()));
                    break;
                  case 2:
                    i.RoundWin = e.double();
                    break;
                  case 3:
                    if (!(i.BounsData && i.BounsData.length)) {
                      i.BounsData = [];
                    }
                    if (2 == (7 & o)) {
                      for (var r = e.uint32() + e.pos; e.pos < r;) {
                        i.BounsData.push(e.int32());
                      }
                    } else {
                      i.BounsData.push(e.int32());
                    }
                    break;
                  case 4:
                    i.FreeRemainRound = e.int32();
                    break;
                  case 5:
                    i.FreeTotalRound = e.int32();
                    break;
                  case 6:
                    i.SpecialCount = e.int32();
                    break;
                  case 7:
                    i.AddRounds = e.int32();
                    break;
                  case 8:
                    i.AwardTypeFlag = e.int32();
                    break;
                  case 9:
                    i.MaxFlag = e.bool();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return i;
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/bikiniProto.RoundInfo";
            };
            return e;
          }(),
          SpinAck: function () {
            function e(e) {
              this.RoundQueue = [];
              if (e) {
                var t = Object.keys(e);
                for (var n = 0; n < t.length; ++n) {
                  if (null != e[t[n]]) {
                    this[t[n]] = e[t[n]];
                  }
                }
              }
            }
            e.prototype.RoundQueue = c.emptyArray;
            e.prototype.FreeTotalWin = 0;
            e.prototype.TotalWin = 0;
            e.prototype.RTP = 0;
            e.prototype.LID = 0;
            e.prototype.RID = 0;
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.RoundQueue && e.RoundQueue.length) {
                for (var n = 0; n < e.RoundQueue.length; ++n) {
                  u.bikiniProto.RoundInfo.encode(e.RoundQueue[n], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.FreeTotalWin && Object.hasOwnProperty.call(e, "FreeTotalWin")) {
                t.uint32(17).double(e.FreeTotalWin);
              }
              if (null != e.TotalWin && Object.hasOwnProperty.call(e, "TotalWin")) {
                t.uint32(25).double(e.TotalWin);
              }
              if (null != e.RTP && Object.hasOwnProperty.call(e, "RTP")) {
                t.uint32(33).double(e.RTP);
              }
              if (null != e.LID && Object.hasOwnProperty.call(e, "LID")) {
                t.uint32(40).int32(e.LID);
              }
              if (null != e.RID && Object.hasOwnProperty.call(e, "RID")) {
                t.uint32(48).int32(e.RID);
              }
              return t;
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.bikiniProto.SpinAck(); e.pos < n;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (!(i.RoundQueue && i.RoundQueue.length)) {
                      i.RoundQueue = [];
                    }
                    i.RoundQueue.push(u.bikiniProto.RoundInfo.decode(e, e.uint32()));
                    break;
                  case 2:
                    i.FreeTotalWin = e.double();
                    break;
                  case 3:
                    i.TotalWin = e.double();
                    break;
                  case 4:
                    i.RTP = e.double();
                    break;
                  case 5:
                    i.LID = e.int32();
                    break;
                  case 6:
                    i.RID = e.int32();
                    break;
                  default:
                    e.skipType(7 & o);
                }
              }
              return i;
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/bikiniProto.SpinAck";
            };
            return e;
          }()
        }).Column = function () {
          function e(e) {
            this.Col = [];
            if (e) {
              var t = Object.keys(e);
              for (var n = 0; n < t.length; ++n) {
                if (null != e[t[n]]) {
                  this[t[n]] = e[t[n]];
                }
              }
            }
          }
          e.prototype.Col = c.emptyArray;
          e.encode = function (e, t) {
            if (!t) {
              t = l.create();
            }
            if (null != e.Col && e.Col.length) {
              t.uint32(10).fork();
              for (var n = 0; n < e.Col.length; ++n) {
                t.int32(e.Col[n]);
              }
              t.ldelim();
            }
            return t;
          };
          e.decode = function (e, t) {
            if (!(e instanceof s)) {
              e = s.create(e);
            }
            var n = undefined === t ? e.len : e.pos + t;
            for (var i = new u.bikiniProto.Column(); e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  if (!(i.Col && i.Col.length)) {
                    i.Col = [];
                  }
                  if (2 == (7 & o)) {
                    for (var r = e.uint32() + e.pos; e.pos < r;) {
                      i.Col.push(e.int32());
                    }
                  } else {
                    i.Col.push(e.int32());
                  }
                  break;
                default:
                  e.skipType(7 & o);
              }
            }
            return i;
          };
          e.getTypeUrl = function (e) {
            if (undefined === e) {
              e = "type.googleapis.com";
            }
            return e + "/bikiniProto.Column";
          };
          return e;
        }();
        u.bikiniProto = r;
        n.exports = u;
        _cjsExports$2 = n.exports;
      }, function () {
        return {
          "protobufjs/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      loader.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/BikiniLady/Client/Thai_UAT/assets/game/Script/Proto/bikiniProto.js");
      cclegacy._RF.push({}, "7a38evCHpVBj4N+mep+dpof", "NearWinSpine", undefined);
      var ccclass$n = _decorator.ccclass;
      var property$n = _decorator.property;
      _dec$n = property$n({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3$b = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$n, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayNearWin = function () {
          SpineKit.PlayAnimation(this.m_spine, t.AnimName.NearWin, true);
        };
        n.PlayNearWinDrop = function () {
          SpineKit.PlayAnimation(this.m_spine, t.AnimName.NearWin_Drop, true);
        };
        return t;
      }(Component);
      _class3$b.AnimName = {
        NearWin: "NearWin",
        NearWin_Drop: "NearWin_Drop"
      };
      _descriptor$n = _applyDecoratedDescriptor(_class3$b.prototype, "m_spine", [_dec$n], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var NearWinSpine = ccclass$n(_class$n = _class3$b) || _class$n;
      var _dec$o;
      var _class2$o;
      var _descriptor$o;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f53acMmQc9FToCNlyZEUTCQ", "NearWin", undefined);
      var property$o = _decorator.property;
      _dec$o = property$o({
        type: NearWinSpine,
        tooltip: "NearWin動畫"
      });
      _class2$o = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_nearWins", _descriptor$o, _assertThisInitialized(t));
          t.m_nearWinAudioId = [-1, -1, -1, -1, -1];
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayNearWin = function (e) {
          this.StopAll();
          this.m_nearWins[e].node.active = true;
          this.m_nearWins[e].PlayNearWin();
          this.m_nearWinAudioId[e] = node$1.Play(Game_Define.AudioClips.NearWin);
        };
        n.StopNearWin = function (e) {
          if (-1 !== this.m_nearWinAudioId[e]) {
            node$1.Stop(this.m_nearWinAudioId[e]);
            this.m_nearWinAudioId[e] = -1;
          }
          this.m_nearWins[e].node.active = false;
        };
        n.StopAll = function () {
          for (var e = 0; e < this.m_nearWins.length; e++) {
            this.StopNearWin(e);
          }
        };
        n.PlayNearWinDrop = function (e) {
          this.StopAll();
          this.m_nearWins[e].node.active = true;
          this.m_nearWins[e].PlayNearWinDrop();
        };
        return t;
      }(Component);
      _descriptor$o = _applyDecoratedDescriptor(_class2$o.prototype, "m_nearWins", [_dec$o], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var _dec$p;
      var _class2$p;
      var _descriptor$p;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "29086wE/MBNNJqbeyt8AzIT", "SlotReels", undefined);
      var property$p = _decorator.property;
      var COL$1 = Game_Define.COL;
      var ROW$1 = Game_Define.ROW;
      var SymbolZIndex = {
        NORMAL: 0,
        SCATTER: COL$1 * ROW$1
      };
      var NEW_PLATE_DELAY_TIME_FOR_X = .05;
      var NEW_PLATE_DELAY_TIME_FOR_Y = .03;
      var SYMBOL_LEAVE_PLATE_TIME = .15;
      var DELAY_TIME_FOR_X = .1;
      var DELAY_TIME_FOR_Y = .02;
      var SYMBOL_MOVE_TIME = .2;
      var BOUNCE_UP_TIME = .05;
      var BOUNCE_DOWN_TIME = .05;
      var BOUNCE_DISTANCE = 12;
      _dec$p = property$p({
        type: Prefab,
        tooltip: "動態生成的symbol基底Sprite"
      });
      _class2$p = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_symbolPrefab", _descriptor$p, _assertThisInitialized(t));
          t.m_symbols = [];
          t.m_symbolPool = null;
          t.m_symbolSize = null;
          t.m_viewSize = null;
          t.m_reelPositionOffset = [v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0)];
          t.m_gameView = null;
          t.m_isStop = false;
          t.m_isPlateSet = true;
          t.m_isPlateClear = false;
          t.m_isHardStop = false;
          t.m_scatterCount = 0;
          t.m_totalScatterCount = 0;
          t.m_plateInfo = new Array();
          t.m_isTriggerLastReq = false;
          t.m_isTriggerNearWin = false;
          t.m_isAlreadyPlayNearWin = null;
          t.m_isPlayedSound = false;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.onLoad = function () {
          this.m_symbolPool = new NodePool(this.m_symbolPrefab);
          this.m_viewSize = this.node.getComponent(UITransform).contentSize;
          this.m_symbolSize = new Size(this.m_viewSize.width / COL$1, this.m_viewSize.height / ROW$1);
          this.m_isAlreadyPlayNearWin = new Array();
          for (var e = 0; e < Game_Define.COL; e++) {
            var t = [];
            for (var n = 0; n < Game_Define.ROW; n++) {
              t.push(false);
            }
            this.m_isAlreadyPlayNearWin.push(t);
          }
          this.SetPlateSymbol(Game_Define.INIT_PLATE);
          var i = function () {
            var e = node$9.TempoSetting.BikiniLady;
            NEW_PLATE_DELAY_TIME_FOR_X = e.NEW_PLATE_DELAY_TIME_FOR_X;
            NEW_PLATE_DELAY_TIME_FOR_Y = e.NEW_PLATE_DELAY_TIME_FOR_Y;
            SYMBOL_LEAVE_PLATE_TIME = e.SYMBOL_LEAVE_PLATE_TIME;
            DELAY_TIME_FOR_X = e.DELAY_TIME_FOR_X;
            DELAY_TIME_FOR_Y = e.DELAY_TIME_FOR_Y;
            SYMBOL_MOVE_TIME = e.SYMBOL_MOVE_TIME;
            BOUNCE_UP_TIME = e.BOUNCE_UP_TIME;
            BOUNCE_DOWN_TIME = e.BOUNCE_DOWN_TIME;
            BOUNCE_DISTANCE = e.BOUNCE_DISTANCE;
          };
          i();
          node$9.AddCb(i);
        };
        n.Init = function (e) {
          this.m_gameView = e;
        };
        n.SetPlateSymbol = function (e) {
          log("Set plate symbol");
          for (var t = 0; t < this.m_symbols.length; t++) {
            for (var n = 0; n < this.m_symbols[t].length; n++) {
              var i = this.m_symbols[t][n];
              this.m_symbols[t][n] = null;
              this.m_symbolPool.ReturnPrefab(i);
            }
          }
          this.m_symbols = [];
          for (var o = 0; o < e.length; o++) {
            var r = new Array();
            for (var a = 0; a < e[o].length; a++) {
              var s = e[o][a];
              var l = this.m_symbolPool.BorrowPrefab();
              l.active = true;
              l.getComponent(SymbolControl).SetSymbol(s);
              this.node.addChild(l);
              r.push(l);
              var c = this.m_symbolSize.width * (o + .5) + this.m_reelPositionOffset[o].x - this.m_viewSize.width / 2;
              var u = this.m_symbolSize.height * (a + .5) + this.m_reelPositionOffset[o].y - this.m_viewSize.height / 2;
              l.setPosition(c, u);
              this.SetZIndex(l, s, o, a);
            }
            this.m_symbols.push(r);
          }
        };
        n.RecoverPlate = function (e) {
          this.m_isTriggerLastReq = true;
          this.SetPlateSymbol(e);
        };
        n.SetZIndex = function (e, t, n, i) {
          var o = 0;
          if (t == Game_Define.Symbol.SCATTER) {
            o = SymbolZIndex.SCATTER;
          }
          node$2.SetOrderedZindex(e, o + n * Game_Define.ROW + (Game_Define.ROW - i - 1));
        };
        n.StartSpin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_isStop = false;
                    this.m_isPlateSet = false;
                    this.m_isHardStop = t;
                    this.m_scatterCount = 0;
                    this.m_isTriggerLastReq = false;
                    this.m_isTriggerNearWin = false;
                    this.m_isPlayedSound = false;
                    this.ResetFlag();
                    n = [];
                    for (i = 0; i < COL$1; i++) {
                      for (o = 0; o < ROW$1; o++) {
                        this.ShowSymbolNode(i, o);
                        n.push(this.LeavePlate(i, o, this.m_isHardStop));
                      }
                    }
                    e.next = 12;
                    return Promise.all(n);
                  case 12:
                    this.SetAllSymbolDarkOrLight(false);
                    this.m_isPlateClear = true;
                  case 14:
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
        n.LeavePlate = function (e, t, n) {
          var i = this;
          return new Promise(function (o) {
            var r = i.GetDropOutPlateDelayTime(e, t, n);
            tween(i.m_symbols[e][t]).delay(r).by(SYMBOL_LEAVE_PLATE_TIME, {
              position: new Vec3(0, -500)
            }, {
              easing: "sineIn"
            }).call(function () {
              o();
            }).start();
          });
        };
        n.GetDropOutPlateDelayTime = function (e, t, n) {
          var i = 0;
          return n ? i : i = e * NEW_PLATE_DELAY_TIME_FOR_X + t * NEW_PLATE_DELAY_TIME_FOR_Y;
        };
        n.SetPlateInfo = function (e) {
          this.m_plateInfo = e.map(function (e) {
            return e.slice();
          });
          this.m_isPlateSet = true;
        };
        n.ShowNewPlate = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            var o;
            var r;
            var a;
            var s;
            var l;
            var c;
            var u;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_isPlateClear) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    this.m_isPlateClear = false;
                    for (t = 0; t < COL$1; t++) {
                      for (n = 0; n < ROW$1; n++) {
                        i = this.m_symbols[t][n];
                        this.m_symbols[t][n] = null;
                        this.m_symbolPool.ReturnPrefab(i);
                      }
                    }
                    o = null;
                    this.m_totalScatterCount = this.m_scatterCount;
                    for (r = 0; r < COL$1; r++) {
                      for (a = 0; a < ROW$1; a++) {
                        if (this.m_plateInfo[r][a] === Game_Define.Symbol.SCATTER) {
                          this.m_totalScatterCount++;
                        }
                      }
                    }
                    s = [];
                    l = 0;
                  case 9:
                    if (!(l < COL$1)) {
                      e.next = 21;
                      break;
                    }
                    if (!this.m_isHardStop && null == o && this.m_scatterCount >= 2) {
                      o = l;
                    }
                    if (null == o) {
                      e.next = 17;
                      break;
                    }
                    e.next = 14;
                    return Promise.all(s);
                  case 14:
                    s = [];
                    if (l == o) {
                      this.TriggerNearWin();
                    }
                    this.m_gameView.NearWin.PlayNearWin(l);
                  case 17:
                    for (c = 0; c < ROW$1; c++) {
                      if ((u = this.m_plateInfo[l][c]) == Game_Define.Symbol.SCATTER) {
                        this.m_scatterCount++;
                      }
                      s.push(this.EnterPlate(l, c, u, ROW$1, o));
                    }
                  case 18:
                    l++;
                    e.next = 9;
                    break;
                  case 21:
                    if (!(s.length > 0)) {
                      e.next = 24;
                      break;
                    }
                    e.next = 24;
                    return Promise.all(s);
                  case 24:
                    if (null != o) {
                      this.m_gameView.NearWin.StopAll();
                    }
                    this.m_isStop = true;
                  case 26:
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
        n.EnterPlate = function (e, t, n, i, o, r) {
          var a = this;
          if (undefined === r) {
            r = .6;
          }
          var s = this.GetSymbolPosition(e, t);
          var l = this.m_symbolSize.height * (ROW$1 + .5) + this.m_reelPositionOffset[e].y - this.m_viewSize.height / 2 + this.m_symbolSize.height * (t - (ROW$1 - i));
          var c = this.m_symbolPool.BorrowPrefab();
          c.getComponent(SymbolControl).SetSymbol(n);
          this.m_symbols[e][t] = c;
          this.node.addChild(c);
          c.name = String(e * Game_Define.ROW + (Game_Define.ROW - t - 1));
          c.setPosition(s.x, l);
          this.SetZIndex(c, n, e, t);
          return new Promise(function (l) {
            var u = DELAY_TIME_FOR_X * e + DELAY_TIME_FOR_Y * (t - (ROW$1 - i));
            if (a.m_isHardStop) {
              u = 0;
            } else if (null != o) {
              u = .6 + r * (t - (ROW$1 - i));
            }
            a.CreateDropTween(c, u, i, s, function () {
              if (a.m_isHardStop) {
                if (!a.m_isPlayedSound) {
                  a.PlayReelStopSound(a.m_totalScatterCount);
                  a.m_isPlayedSound = true;
                }
              } else if (n == Game_Define.Symbol.SCATTER) {
                a.PlayReelStopSound(a.m_scatterCount);
              } else {
                node$1.Play(Game_Define.AudioClips.Reel_Stop);
              }
            }, function () {
              if (n === Game_Define.Symbol.SCATTER) {
                c.active = false;
                a.m_gameView.EffectPlate.PlayStop(e, t, n).then(function () {
                  if (null != o && e >= o) {
                    a.m_gameView.EffectPlate.PlayScatterNearWin(e, t);
                  } else {
                    c.active = true;
                  }
                });
              } else if (n === Game_Define.Symbol.FREE_SPIN) {
                c.active = false;
                a.m_gameView.EffectPlate.PlayStop(e, t, n).then(function () {
                  c.active = true;
                });
              }
              l();
            });
          });
        };
        n.PatchUp = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var o;
            var r;
            var a;
            var s;
            var l;
            var c;
            var u;
            var p;
            var m;
            var _;
            var d;
            var f;
            var h;
            var y;
            var S;
            var g;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_isPlayedSound = false;
                    n = [];
                    i = this.m_gameView.EffectPlate.GetSymbolEffects();
                    o = this.m_gameView.EffectPlate.GetFxSymbols();
                    for (r = 0; r < COL$1; r++) {
                      for (a = ROW$1 - 1; a >= 0; a--) {
                        if (null == this.m_symbols[r][a]) {
                          this.m_symbols[r].splice(a, 1);
                          i[r].splice(a, 1);
                          o[r].splice(a, 1);
                        }
                      }
                    }
                    s = false;
                    l = function () {
                      if (!s) {
                        node$1.Play(Game_Define.AudioClips.Reel_Stop);
                        s = true;
                      }
                    };
                    for (c = 0; c < COL$1; c++) {
                      for (u = 0; u < ROW$1; u++) {
                        if (this.m_symbols[c][u]) {
                          n.push(this.DropSymbol(c, u, this.m_symbols[c][u], l));
                          n.push(this.DropSymbol(c, u, i[c][u]));
                          if (o[c][u]) {
                            n.push(this.DropSymbol(c, u, o[c][u]));
                          }
                        }
                      }
                    }
                    e.next = 10;
                    return Promise.all(n);
                  case 10:
                    n = [];
                    p = t.FillSymbols;
                    m = this.m_isHardStop || this.m_scatterCount != 2 ? null : 0;
                    this.m_totalScatterCount = this.m_scatterCount;
                    for (_ = 0; _ < COL$1; _++) {
                      for (d = 0; d < p[_].Col.length; d++) {
                        if (p[_].Col[d] == Game_Define.Symbol.SCATTER) {
                          this.m_totalScatterCount++;
                        }
                      }
                    }
                    f = 0;
                  case 16:
                    if (!(f < COL$1)) {
                      e.next = 28;
                      break;
                    }
                    if (!this.m_isHardStop && !this.m_isTriggerNearWin && this.m_scatterCount >= 2) {
                      m = f;
                    }
                    if (null == m) {
                      e.next = 24;
                      break;
                    }
                    e.next = 21;
                    return Promise.all(n);
                  case 21:
                    n = [];
                    if (!this.m_isTriggerNearWin) {
                      n.push(this.TriggerNearWin());
                    }
                    this.m_gameView.NearWin.PlayNearWinDrop(f);
                  case 24:
                    for (h = 0; h < p[f].Col.length; h++) {
                      y = p[f].Col[h];
                      S = ROW$1 - p[f].Col.length + h;
                      g = p[f].Col.length;
                      if (y == Game_Define.Symbol.SCATTER) {
                        this.m_scatterCount++;
                      }
                      n.push(this.EnterPlate(f, S, y, g, m, DELAY_TIME_FOR_Y));
                    }
                  case 25:
                    f++;
                    e.next = 16;
                    break;
                  case 28:
                    if (!(n.length > 0)) {
                      e.next = 31;
                      break;
                    }
                    e.next = 31;
                    return Promise.all(n);
                  case 31:
                    if (null != m) {
                      this.m_gameView.NearWin.StopAll();
                    }
                  case 32:
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
        n.GetSymbolPosition = function (e, t) {
          var n = this.m_symbolSize.width * (e + .5) + this.m_reelPositionOffset[e].x - this.m_viewSize.width / 2;
          var i = this.m_symbolSize.height * (t + .5) + this.m_reelPositionOffset[e].y - this.m_viewSize.height / 2;
          return new Vec3(n, i);
        };
        n.TriggerNearWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_isTriggerNearWin = true;
                    this.m_gameView.CharacterSpine.PlayNearWin();
                    this.m_gameView.FrameSpine.PlayNearWin();
                    for (t = 0; t < COL$1; t++) {
                      for (n = 0; n < ROW$1; n++) {
                        if ((null == (i = this.m_symbols[t][n]) ? undefined : i.getComponent(SymbolControl).GetSymbolId()) === Game_Define.Symbol.SCATTER) {
                          this.m_symbols[t][n].active = false;
                          this.m_gameView.EffectPlate.PlayScatterNearWin(t, n);
                          this.m_isAlreadyPlayNearWin[t][n] = true;
                        }
                      }
                    }
                  case 4:
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
        n.IsTriggerNearWin = function () {
          return this.m_isTriggerNearWin;
        };
        n.HideSymbolNode = function (e, t) {
          this.m_symbols[e][t].active = false;
        };
        n.ShowSymbolNode = function (e, t) {
          this.m_symbols[e][t].active = true;
        };
        n.RemoveSymbolNode = function (e, t) {
          var n = this.m_symbols[e][t];
          this.m_symbols[e][t] = null;
          this.m_symbolPool.ReturnPrefab(n);
        };
        n.ResetSymbol = function (e, t, n) {
          this.m_symbols[e][t].getComponent(SymbolControl).SetSymbol(n);
        };
        n.ResetFlag = function () {
          for (var e = 0; e < Game_Define.COL; e++) {
            for (var t = 0; t < Game_Define.ROW; t++) {
              this.m_isAlreadyPlayNearWin[e][t] = false;
            }
          }
        };
        n.CreateDropTween = function (e, t, n, i, o, r) {
          var a = node$2.strip(SYMBOL_MOVE_TIME * n / ROW$1);
          tween(e).delay(t).to(a, {
            position: i
          }, {
            easing: "sineIn"
          }).call(function () {
            if (o) {
              o();
            }
          }).by(BOUNCE_UP_TIME, {
            position: v3(0, BOUNCE_DISTANCE)
          }).by(BOUNCE_DOWN_TIME, {
            position: v3(0, -BOUNCE_DISTANCE)
          }).call(function () {
            e.setPosition(i);
            if (r) {
              r();
            }
          }).start();
        };
        n.DropSymbol = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, o) {
            var r;
            var a;
            var s;
            var l;
            var c;
            var u = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    r = i.getPosition();
                    a = this.GetSymbolPosition(t, n);
                    s = Math.floor(a.y - r.y);
                    l = Math.abs(s) / this.m_symbolSize.height;
                    c = DELAY_TIME_FOR_Y * n;
                    if (this.m_isHardStop) {
                      c = 0;
                    }
                    if (0 == s) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return", new Promise(function (e) {
                      u.CreateDropTween(i, c, l, a, o, e);
                    }));
                  case 8:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, o) {
            return e.apply(this, arguments);
          };
        }();
        n.SetAllSymbolDarkOrLight = function (e) {
          for (var t = 0; t < Game_Define.COL; t++) {
            for (var n = 0; n < Game_Define.ROW; n++) {
              if (this.m_symbols[t][n].getComponent(SymbolControl)) {
                this.m_symbols[t][n].getComponent(SymbolControl).SetDark(e);
              }
            }
          }
        };
        n.ShowDarkOrLightSymbol = function (e, t) {
          for (var n = 0; n < t.length; n++) {
            for (var i = 0; i < Game_Define.COL; i++) {
              for (var o = 0; o < Game_Define.ROW; o++) {
                var r = this.m_symbols[i][o].getComponent(SymbolControl);
                if (r) {
                  r.SetDark(e[i].Col[o] !== t[n]);
                }
              }
            }
          }
        };
        n.PlayReelStopSound = function (e) {
          switch (e) {
            case 0:
              node$1.Play(Game_Define.AudioClips.Reel_Stop);
              break;
            case 1:
              node$1.Play(Game_Define.AudioClips.Scatter1);
              break;
            case 2:
              node$1.Play(Game_Define.AudioClips.Scatter2);
              break;
            default:
              node$1.Play(Game_Define.AudioClips.Scatter3);
              node$1.Play(Game_Define.AudioClips.Lady_02);
          }
        };
        _createClass(t, [{
          key: "IsStop",
          get: function () {
            return this.m_isStop;
          }
        }, {
          key: "IsPlateSet",
          get: function () {
            return this.m_isPlateSet;
          }
        }, {
          key: "IsPlateClear",
          get: function () {
            return this.m_isPlateClear;
          }
        }]);
        return t;
      }(Component);
      _descriptor$p = _applyDecoratedDescriptor(_class2$p.prototype, "m_symbolPrefab", [_dec$p], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$q;
      var _dec2$c;
      var _class2$q;
      var _descriptor$q;
      var _descriptor2$c;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3aa84FtSClD+YUaITi5sSi9", "CharacterSpine", undefined);
      var property$q = _decorator.property;
      _dec$q = property$q({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _dec2$c = property$q({
        type: Node,
        tooltip: "橫版位置節點"
      });
      _class2$q = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$q, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_characterLNode", _descriptor2$c, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.OnRotation = function (e) {
          if (e) {
            this.m_spine.node.setParent(this.m_characterLNode);
          } else {
            this.m_spine.node.setParent(this.node);
          }
        };
        n.PlayIdle = function () {
          SpineKit.PlayAnimation(this.m_spine, "Idle", true);
        };
        n.PlayNearWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, "NearWin_Start", false);
                  case 2:
                    SpineKit.PlayAnimation(this.m_spine, "NearWin", true);
                  case 3:
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
        n.PlayNearWinFail = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, "NearWin_Fail", false);
                  case 2:
                    this.PlayIdle();
                  case 3:
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
        n.PlayScatterWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, "ScatterWin", false);
                  case 2:
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, "ScatterWin_Idle", true);
                  case 4:
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
        n.PlayWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, "Win", false);
                  case 2:
                    this.PlayIdle();
                  case 3:
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
        n.PlayIdle2 = function () {
          var e = this;
          SpineKit.PlayAnimation(this.m_spine, "Bonus_End").then(function () {
            SpineKit.PlayAnimation(e.m_spine, "Idle2", true);
          });
        };
        n.PlayBonus1 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      SpineKit.PlayAnimation(n.m_spine, "Bonus_1", false, 0, function (t) {
                        if ("AnimationEvent" == t) {
                          e();
                        }
                      }).then(function () {
                        if (t) {
                          n.PlayIdle2();
                        } else {
                          n.PlayIdle();
                        }
                        e();
                      });
                    }));
                  case 1:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayBonus2 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      SpineKit.PlayAnimation(n.m_spine, "Bonus_2", false, 0, function (t) {
                        if ("AnimationEvent" == t) {
                          e();
                        }
                      }).then(function () {
                        if (t) {
                          n.PlayIdle2();
                        } else {
                          n.PlayIdle();
                        }
                        e();
                      });
                    }));
                  case 1:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayBonus3 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      SpineKit.PlayAnimation(n.m_spine, "Bonus_3", false, 0, function (t) {
                        if ("AnimationEvent" == t) {
                          e();
                        }
                      }).then(function () {
                        if (t) {
                          n.PlayIdle2();
                        } else {
                          n.PlayIdle();
                        }
                        e();
                      });
                    }));
                  case 1:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }();
        return t;
      }(Component);
      _descriptor$q = _applyDecoratedDescriptor(_class2$q.prototype, "m_spine", [_dec$q], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$c = _applyDecoratedDescriptor(_class2$q.prototype, "m_characterLNode", [_dec2$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$r;
      var _descriptor$r;
      var _class3$c;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "27de8xsH4hKX6KZHRPQ74C3", "FrameSpine", undefined);
      var property$r = _decorator.property;
      _dec$r = property$r({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3$c = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$r, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayIdle = function () {
          SpineKit.PlayAnimation(this.m_spine, t.AnimName.Idle, true);
        };
        n.PlayNearWin = function () {
          SpineKit.PlayAnimation(this.m_spine, t.AnimName.NearWin, true);
        };
        n.PlayWin = function () {
          SpineKit.PlayAnimation(this.m_spine, t.AnimName.Win, true);
        };
        return t;
      }(Component);
      _class3$c.AnimName = {
        Idle: "Idle",
        NearWin: "NearWin",
        Win: "Win"
      };
      _descriptor$r = _applyDecoratedDescriptor(_class3$c.prototype, "m_spine", [_dec$r], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6b447C2filGBrgfMAe9EfNd", "GameView", undefined);
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