System.register("chunks:///game.js", ["./index-953cd8ef.js", "cc"], function (exports, module) {
  "use strict";

  var _applyDecoratedDescriptor;
  var _inheritsLoose;
  var _initializerDefineProperty;
  var _assertThisInitialized;
  var node;
  var _createClass;
  var SpineKit;
  var _asyncToGenerator;
  var _regeneratorRuntime;
  var NearWinEffectComponent;
  var node$1;
  var node$2;
  var node$3;
  var BigWinComponent;
  var node$4;
  var node$5;
  var BaseState;
  var SlotBottomBarState;
  var node$6;
  var Common_IdleState;
  var CommonState;
  var node$7;
  var node$8;
  var node$9;
  var node$a;
  var DEFAULT_TITLE_KEY;
  var node$b;
  var _createForOfIteratorHelperLoose;
  var node$c;
  var SwitchOffKeyDefine;
  var node$d;
  var CommonEventName;
  var node$e;
  var BetValueChange;
  var BottomBar_UIName;
  var node$f;
  var node$g;
  var ManualComponent;
  var AstarteInit;
  var node$h;
  var node$i;
  var node$j;
  var node$k;
  var node$l;
  var cclegacy;
  var _decorator;
  var Label;
  var CCInteger;
  var Component;
  var Enum;
  var v3;
  var Sprite;
  var sp;
  var instantiate;
  var tween;
  var Vec3;
  var UIOpacity;
  var Prefab;
  var Node;
  var error;
  var log;
  var SpriteFrame;
  var UITransform;
  var Size;
  var screen;
  var view;
  var ResolutionPolicy;
  var Animation;
  var SpriteAtlas;
  var input;
  var Input;
  var KeyCode;
  var Button;
  var game;
  return {
    setters: [function (e) {
      _applyDecoratedDescriptor = e._;
      _inheritsLoose = e.a;
      _initializerDefineProperty = e.b;
      _assertThisInitialized = e.c;
      node = e.g;
      _createClass = e.d;
      SpineKit = e.v;
      _asyncToGenerator = e.o;
      _regeneratorRuntime = e.p;
      NearWinEffectComponent = e.N;
      node$1 = e.e;
      node$2 = e.l;
      node$3 = e.r;
      BigWinComponent = e.B;
      node$4 = e.h;
      node$5 = e.j;
      BaseState = e.w;
      SlotBottomBarState = e.t;
      node$6 = e.i;
      Common_IdleState = e.x;
      CommonState = e.k;
      node$7 = e.y;
      node$8 = e.z;
      node$9 = e.A;
      node$a = e.D;
      DEFAULT_TITLE_KEY = e.E;
      node$b = e.F;
      _createForOfIteratorHelperLoose = e.u;
      node$c = e.n;
      SwitchOffKeyDefine = e.S;
      node$d = e.f;
      CommonEventName = e.C;
      node$e = e.G;
      BetValueChange = e.H;
      BottomBar_UIName = e.I;
      node$f = e.J;
      node$g = e.K;
      ManualComponent = e.M;
      AstarteInit = e.L;
      node$h = e.O;
      node$i = e.P;
      node$j = e.Q;
      node$k = e.s;
      node$l = e.R;
    }, function (e) {
      cclegacy = e.cclegacy;
      _decorator = e._decorator;
      Label = e.Label;
      CCInteger = e.CCInteger;
      Component = e.Component;
      Enum = e.Enum;
      v3 = e.v3;
      Sprite = e.Sprite;
      sp = e.sp;
      instantiate = e.instantiate;
      tween = e.tween;
      Vec3 = e.Vec3;
      UIOpacity = e.UIOpacity;
      Prefab = e.Prefab;
      Node = e.Node;
      error = e.error;
      log = e.log;
      SpriteFrame = e.SpriteFrame;
      UITransform = e.UITransform;
      Size = e.Size;
      screen = e.screen;
      view = e.view;
      ResolutionPolicy = e.ResolutionPolicy;
      Animation = e.Animation;
      SpriteAtlas = e.SpriteAtlas;
      input = e.input;
      Input = e.Input;
      KeyCode = e.KeyCode;
      Button = e.Button;
      game = e.game;
    }],
    execute: function () {
      var _dec;
      var _dec2;
      var _dec3;
      var _class;
      var _class2;
      var _descriptor;
      var _descriptor2;
      cclegacy._RF.push({}, "bb829FLp0RN/4l5gkM4UyyM", "NumberRolling", undefined);
      var ccclass = _decorator.ccclass;
      var property = _decorator.property;
      _dec = ccclass("NumberRolling");
      _dec2 = property({
        type: Label,
        tooltip: "數字顯示",
        displayName: "Number Label"
      });
      _dec3 = property({
        type: CCInteger,
        tooltip: "數值變動所需時間(單位：毫秒)"
      });
      _class2 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_numberLabel", _descriptor, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_duration", _descriptor2, _assertThisInitialized(t));
          t.m_isRolling = false;
          t.m_currentValue = 0;
          t.m_targetValue = 0;
          t.m_deltaValue = 0;
          t.m_isDecimal = false;
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
          var o = this.m_duration;
          if ("number" == typeof i && i > 0) {
            o = i;
          }
          o = o <= 0 ? 1 : o;
          this.m_deltaValue = node.divide(node.minus(this.m_targetValue, this.m_currentValue), node.times(o, .001));
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
          i = this.m_formatCallback ? this.m_formatCallback(e, t) : node.FormatNumberThousands(e, node.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, false);
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
      _descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_numberLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_duration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1e3;
        }
      });
      var NumberRolling = _dec(_class = _class2) || _class;
      var _class$1;
      var _class2$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "797ddeUlDVOU4nf57irQN6d", "Game_Define", undefined);
      var ccclass$1 = _decorator.ccclass;
      var GameState;
      var Symbol;
      var JpType;
      var SpineParentType;
      var NudgeType;
      !function (e) {
        e[e.FEATURE_SHOW = 0] = "FEATURE_SHOW";
        e[e.WAIT_READY = 1] = "WAIT_READY";
        e[e.PLATE_SHOW = 2] = "PLATE_SHOW";
        e[e.AWARD = 3] = "AWARD";
        e[e.ROUND_END = 4] = "ROUND_END";
        e[e.ROUND_SHOW_END = 5] = "ROUND_SHOW_END";
        e[e.UNSHOW_PREPARE = 6] = "UNSHOW_PREPARE";
        e[e.LEVEL_UP = 7] = "LEVEL_UP";
      }(GameState || (GameState = {}));
      (function (e) {
        e[e.BAR1 = 0] = "BAR1";
        e[e.BAR2 = 1] = "BAR2";
        e[e.SEVEN7 = 2] = "SEVEN7";
        e[e.SEVEN77 = 3] = "SEVEN77";
        e[e.SEVEN777 = 4] = "SEVEN777";
        e[e.BAR1X2 = 5] = "BAR1X2";
        e[e.BAR2X2 = 6] = "BAR2X2";
        e[e.SEVEN7X2 = 7] = "SEVEN7X2";
        e[e.SEVEN77X2 = 8] = "SEVEN77X2";
        e[e.SEVEN777X2 = 9] = "SEVEN777X2";
        e[e.BAR1X3 = 10] = "BAR1X3";
        e[e.BAR2X3 = 11] = "BAR2X3";
        e[e.SEVEN7X3 = 12] = "SEVEN7X3";
        e[e.SEVEN77X3 = 13] = "SEVEN77X3";
        e[e.SEVEN777X3 = 14] = "SEVEN777X3";
        e[e.BAR1X5 = 15] = "BAR1X5";
        e[e.BAR2X5 = 16] = "BAR2X5";
        e[e.SEVEN7X5 = 17] = "SEVEN7X5";
        e[e.SEVEN77X5 = 18] = "SEVEN77X5";
        e[e.SEVEN777X5 = 19] = "SEVEN777X5";
        e[e.WILDTOP = 20] = "WILDTOP";
        e[e.WILD = 21] = "WILD";
        e[e.WILDBOT = 22] = "WILDBOT";
        e[e.Empty = 23] = "Empty";
      })(Symbol || (Symbol = {}));
      (function (e) {
        e[e.Line_2to9 = 0] = "Line_2to9";
        e[e.Line_1 = 1] = "Line_1";
      })(JpType || (JpType = {}));
      (function (e) {
        e[e.Normal = 0] = "Normal";
        e[e.Nudge = 1] = "Nudge";
      })(SpineParentType || (SpineParentType = {}));
      (function (e) {
        e[e.NoNudge = 0] = "NoNudge";
        e[e.TopNudge1 = 1] = "TopNudge1";
        e[e.TopNudge2 = 2] = "TopNudge2";
        e[e.BtmNudge1 = 3] = "BtmNudge1";
        e[e.BtmNudge2 = 4] = "BtmNudge2";
        e[e.NoNeedMove = 5] = "NoNeedMove";
      })(NudgeType || (NudgeType = {}));
      _class2$1 = function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        _inheritsLoose(t, e);
        t.OnExit = function () {
          this.BgAudioId = -1;
          this.NoScatterWheelLvl = 0;
          this.MaxWheelLvl = 0;
          this.AudioClips = {
            Debut: null,
            MG_BGM: null,
            Reel_Stop: null,
            Reel_WILD1: null,
            Reel_WILD2: null,
            Reel_WILD3: null,
            Award_Normal: null,
            Award_WILD: null,
            SmallWin: null,
            BigWin: null,
            Big_Win: null,
            Big_Win_End: null,
            Big_Win_Change: null,
            WILD_Nudge: null,
            NearWin: null,
            Reel_Spin: null
          };
          this.ShowDisplayValue = null;
        };
        return t;
      }(Component);
      _class2$1.BgAudioId = -1;
      _class2$1.NoScatterWheelLvl = 0;
      _class2$1.MaxWheelLvl = 0;
      _class2$1.LOG_DEBUG_STATE = true;
      _class2$1.Ver = "24";
      _class2$1.GameId = 447;
      _class2$1.ShortGameName = "c7d";
      _class2$1.SPICY_LEVEL = 3;
      _class2$1.GameState = Enum(GameState);
      _class2$1.Symbol = Enum(Symbol);
      _class2$1.JpType = Enum(JpType);
      _class2$1.SpineParent = Enum(SpineParentType);
      _class2$1.COL = 3;
      _class2$1.ROW = 3;
      _class2$1.ROW_CENTER = 1;
      _class2$1.UnshowSpinAck = null;
      _class2$1.WIN_ODDS = [1, 3, 6, 15, 30];
      _class2$1.AwardDely = .5;
      _class2$1.CrystalDis = 82.5;
      _class2$1.WaitNudgeOver = .4;
      _class2$1.WaitStartNudge = .3;
      _class2$1.StringKey = {
        FEATURES_LEFT: "FEATURE_LEFT",
        FEATURES_RIGHT: "FEATURE_RIGHT",
        EX_DESCRIPTION: "EX_DESCRIPTION"
      };
      _class2$1.MANUAL_STRING = ["String_01", "String_02", "String_03", "String_04"];
      _class2$1.MANUAL_TITLE_STRING = "String_00";
      _class2$1.SMALLPRIZE = {
        LEVEL: 5
      };
      _class2$1.FEATURE_BET_VALUE = 10;
      _class2$1.RAPID_FLY_EFFECT_KEY_NAME = "FX_Fly";
      _class2$1.ShowDisplayValue = null;
      _class2$1.NEED_PLAY_REEL_STOP_ANIM_SYMBOL = [Symbol.WILD, Symbol.WILDBOT, Symbol.WILDTOP];
      _class2$1.MGRandSymbolArray = [Symbol.BAR1, Symbol.BAR2, Symbol.SEVEN7, Symbol.SEVEN77, Symbol.SEVEN777, Symbol.BAR1X2, Symbol.BAR2X2, Symbol.SEVEN7X2, Symbol.SEVEN77X2, Symbol.SEVEN777X2, Symbol.BAR1X3, Symbol.BAR2X3, Symbol.SEVEN7X3, Symbol.SEVEN77X3, Symbol.SEVEN777X3, Symbol.BAR1X5, Symbol.BAR2X5, Symbol.SEVEN7X5, Symbol.SEVEN77X5, Symbol.SEVEN777X5, Symbol.WILDTOP, Symbol.WILD, Symbol.WILDBOT];
      _class2$1.MGRandStopSymbolArr = [Symbol.BAR1, Symbol.BAR2, Symbol.SEVEN7, Symbol.SEVEN77, Symbol.SEVEN777, Symbol.BAR1X2, Symbol.BAR2X2, Symbol.SEVEN7X2, Symbol.SEVEN77X2, Symbol.SEVEN777X2, Symbol.BAR1X3, Symbol.BAR2X3, Symbol.SEVEN7X3, Symbol.SEVEN77X3, Symbol.SEVEN777X3, Symbol.BAR1X5, Symbol.BAR2X5, Symbol.SEVEN7X5, Symbol.SEVEN77X5, Symbol.SEVEN777X5, Symbol.WILD];
      _class2$1.InitialPlateData = [[Symbol.BAR1, Symbol.Empty, Symbol.SEVEN7], [Symbol.SEVEN77, Symbol.Empty, Symbol.BAR2], [Symbol.SEVEN7, Symbol.Empty, Symbol.BAR1]];
      _class2$1.SYMBOL_LINE_VEC = [[v3(0, 1), v3(1, 1), v3(2, 1)], [v3(0, 0), v3(1, 0), v3(2, 0)], [v3(0, 2), v3(1, 2), v3(2, 2)], [v3(0, 0), v3(1, 1), v3(2, 2)], [v3(0, 2), v3(1, 1), v3(2, 0)], [v3(0, 1), v3(1, 0), v3(2, 1)], [v3(0, 1), v3(1, 2), v3(2, 1)], [v3(0, 2), v3(1, 1), v3(2, 2)], [v3(0, 0), v3(1, 1), v3(2, 0)]];
      _class2$1.JPPanel_TITLE1 = "MG_JP_txt02";
      _class2$1.JPPanel_TITLE23 = "MG_JP_txt04";
      _class2$1.JPPanel_TITLE49 = "MG_JP_txt05";
      _class2$1.RAPID_BAR_ODD = [2, 10, 30, 50, 100, 300];
      _class2$1.JP_BAR_ODD = [100, 300];
      _class2$1.EVENT_ID = {
        POSITION_ERROR: 2e3,
        SYMBOL_ERROR: 2001
      };
      _class2$1.BigWinEventName = "AnimationEvent";
      _class2$1.BigWinSound1 = "Sound1";
      _class2$1.BigWinSound2 = "Sound2";
      _class2$1.BigWinStartAnimName = "BigWin_Start";
      _class2$1.AWARD_SETTING = [{
        BetRate: 6,
        Lv1: 1
      }, {
        BetRate: 15,
        Lv1: 2
      }, {
        BetRate: 30,
        Lv1: 3
      }];
      _class2$1.AudioClips = {
        Debut: null,
        MG_BGM: null,
        Reel_Stop: null,
        Reel_WILD1: null,
        Reel_WILD2: null,
        Reel_WILD3: null,
        Award_Normal: null,
        Award_WILD: null,
        SmallWin: null,
        BigWin: null,
        Big_Win: null,
        Big_Win_End: null,
        Big_Win_Change: null,
        NearWin: null,
        WILD_Nudge: null,
        Reel_Spin: null
      };
      _class2$1.AudioFileRoot = "Sound/";
      _class2$1.AudioFilePath = {
        Debut: "Debut",
        MG_BGM: "MG_BGM",
        Reel_Stop: "Reel_Stop",
        Reel_WILD1: "reel_WILD1",
        Reel_WILD2: "reel_WILD2",
        Reel_WILD3: "reel_WILD3",
        Award_Normal: "symbol_award",
        Award_WILD: "symbol_award_WILD",
        SmallWin: "symbol_award_small",
        BigWin: "symbol_award_big",
        Big_Win: "Win_Big",
        Big_Win_End: "Win_Big_End",
        Big_Win_Change: "Win_Big_Change",
        NearWin: "nearwin",
        WILD_Nudge: "WILD_move",
        Reel_Spin: "Reel_Spin"
      };
      _class2$1.FeatureBetValue = 10;
      _class2$1.FeatrurePageL = "features/left/spriteFrame";
      _class2$1.FeatrurePageR = "features/right/spriteFrame";
      _class2$1.FeaturesSpinAck = [{
        RoundQueue: [{
          PlateVec: [{
            PlateSymbol: [{
              Col: [23, 21, 23]
            }, {
              Col: [23, 21, 23]
            }, {
              Col: [23, 21, 23]
            }],
            AwardDataVec: [{
              Symbol: 9,
              Count: 3,
              Mult: 1,
              Win: 400
            }],
            Win: 400
          }],
          SwitchResult: 4,
          AwardTypeFlag: 1,
          RoundWin: 400,
          NudgeTimes: [0, 0, 0]
        }],
        TotalWin: 400,
        RTP: .972
      }, {
        RoundQueue: [{
          PlateVec: [{
            PlateSymbol: [{
              Col: [22, 23, 3]
            }, {
              Col: [2, 23, 19]
            }, {
              Col: [0, 23, 20]
            }],
            AwardDataVec: [{
              Symbol: 3,
              Count: 3,
              Line: 2,
              Mult: 5,
              Win: 5
            }],
            Win: 5
          }, {
            PlateSymbol: [{
              Col: [21, 22, 23]
            }, {
              Col: [2, 23, 19]
            }, {
              Col: [23, 20, 21]
            }],
            AwardDataVec: [{
              Symbol: 4,
              Count: 3,
              Line: 5,
              Mult: 1,
              Win: 2
            }, {
              Symbol: 6,
              Count: 3,
              Line: 6,
              Mult: 5,
              Win: 40
            }],
            Win: 42
          }, {
            PlateSymbol: [{
              Col: [20, 21, 22]
            }, {
              Col: [2, 23, 19]
            }, {
              Col: [20, 21, 22]
            }],
            AwardDataVec: [{
              Symbol: 4,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: 2
            }, {
              Symbol: 6,
              Count: 3,
              Line: 2,
              Mult: 5,
              Win: 40
            }, {
              Symbol: 4,
              Count: 3,
              Line: 5,
              Mult: 1,
              Win: 2
            }, {
              Symbol: 6,
              Count: 3,
              Line: 6,
              Mult: 5,
              Win: 40
            }],
            Win: 84
          }],
          SwitchResult: 3,
          AwardTypeFlag: 1,
          RoundWin: 131,
          NudgeTimes: [-2, 0, 2]
        }],
        TotalWin: 131,
        RTP: .972
      }];
      _class2$1.Test = {
        RoundQueue: [{
          PlateVec: [{
            PlateSymbol: [{
              Col: [7, 4, 7]
            }, {
              Col: [7, 5, 7]
            }, {
              Col: [4, 7, 0]
            }]
          }],
          SwitchResult: 5,
          WildResult: 9
        }],
        RTP: .97
      };
      _class2$1.Test2 = {
        RoundQueue: [{
          PlateVec: [{
            PlateSymbol: [{
              Col: [6, 6, 6]
            }, {
              Col: [7, 1, 7]
            }, {
              Col: [7, 3, 7]
            }]
          }, {
            PlateSymbol: [{
              Col: [6, 6, 6]
            }, {
              Col: [6, 7, 1]
            }, {
              Col: [7, 3, 7]
            }]
          }, {
            PlateSymbol: [{
              Col: [6, 6, 6]
            }, {
              Col: [6, 6, 7]
            }, {
              Col: [7, 3, 7]
            }]
          }],
          WildResult: 1,
          AwardTypeFlag: 2,
          RoundWin: 30,
          GemWin: 30,
          Nudge: [1, 1]
        }],
        TotalWin: 30,
        RTP: .97
      };
      _class2$1.Test3 = {
        RoundQueue: [{
          PlateVec: [{
            PlateSymbol: [{
              Col: [7, 3, 7]
            }, {
              Col: [6, 6, 6]
            }, {
              Col: [6, 7, 3]
            }]
          }],
          SwitchResult: 3,
          WildResult: 1,
          RoundWin: 6,
          GemWin: 6
        }],
        TotalWin: 6,
        RTP: .97
      };
      _class2$1.NudgeSpinAck = {
        RoundQueue: [{
          PlateVec: [{
            PlateSymbol: [{
              Col: [2, 23, 20]
            }, {
              Col: [1, 23, 15]
            }, {
              Col: [4, 23, 20]
            }],
            AwardDataVec: [{
              Symbol: 1,
              Count: 3,
              Line: 2,
              Mult: 5,
              Win: 10.05
            }],
            Win: 10.05
          }, {
            PlateSymbol: [{
              Col: [23, 20, 21]
            }, {
              Col: [1, 23, 15]
            }, {
              Col: [23, 20, 21]
            }],
            AwardDataVec: [{
              Symbol: 1,
              Count: 3,
              Line: 2,
              Mult: 5,
              Win: 10.05
            }, {
              Symbol: 2,
              Count: 3,
              Line: 5,
              Mult: 1,
              Win: 3
            }, {
              Symbol: 1,
              Count: 3,
              Line: 6,
              Mult: 5,
              Win: 10.05
            }],
            Win: 23.1
          }, {
            PlateSymbol: [{
              Col: [20, 21, 22]
            }, {
              Col: [1, 23, 15]
            }, {
              Col: [20, 21, 22]
            }],
            AwardDataVec: [{
              Symbol: 2,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: 3
            }, {
              Symbol: 1,
              Count: 3,
              Line: 2,
              Mult: 5,
              Win: 10.05
            }, {
              Symbol: 2,
              Count: 3,
              Line: 5,
              Mult: 1,
              Win: 3
            }, {
              Symbol: 1,
              Count: 3,
              Line: 6,
              Mult: 5,
              Win: 10.05
            }],
            Win: 26.1
          }],
          AwardTypeFlag: 1,
          RoundWin: 59.25,
          NudgeTimes: [2, 0, 2]
        }],
        TotalWin: 59.25
      };
      _class2$1.WildSpinAck = {
        RoundQueue: [{
          PlateVec: [{
            PlateSymbol: [{
              Col: [23, 21, 23]
            }, {
              Col: [23, 21, 23]
            }, {
              Col: [23, 21, 23]
            }],
            AwardDataVec: [{
              Symbol: 9,
              Count: 3,
              Line: 0,
              Mult: 1,
              Win: 1200
            }],
            Win: 1200
          }],
          AwardTypeFlag: 1,
          RoundWin: 1200,
          NudgeTimes: [0, 0, 0]
        }],
        TotalWin: 1200
      };
      var Game_Define = ccclass$1(_class$1 = _class2$1) || _class$1;
      var _dec$1;
      var _dec2$1;
      var _dec3$1;
      var _dec4;
      var _dec5;
      var _dec6;
      var _dec7;
      var _dec8;
      var _dec9;
      var _dec10;
      var _class2$2;
      var _descriptor$1;
      var _descriptor2$1;
      var _descriptor3;
      var _descriptor4;
      var _descriptor5;
      var _descriptor6;
      var _descriptor7;
      var _descriptor8;
      var _descriptor9;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "48428r8f0tFq6Lgsc/0Ykyr", "JpBarMgr", undefined);
      var ccclass$2 = _decorator.ccclass;
      var property$1 = _decorator.property;
      _dec$1 = ccclass$2("JpBarMgr");
      _dec2$1 = property$1({
        type: NumberRolling,
        tooltip: "1LINE中獎文字"
      });
      _dec3$1 = property$1({
        type: NumberRolling,
        tooltip: "2-3LINE中獎文字"
      });
      _dec4 = property$1({
        type: NumberRolling,
        tooltip: "4-9LINE中獎文字"
      });
      _dec5 = property$1({
        type: Sprite,
        tooltip: "1LINE標題"
      });
      _dec6 = property$1({
        type: Sprite,
        tooltip: "2-3LINE標題"
      });
      _dec7 = property$1({
        type: Sprite,
        tooltip: "4-9LINE標題"
      });
      _dec8 = property$1({
        type: sp.Skeleton,
        tooltip: "1line面板spine"
      });
      _dec9 = property$1({
        type: sp.Skeleton,
        tooltip: "2-3line面板spine"
      });
      _dec10 = property$1({
        type: sp.Skeleton,
        tooltip: "4-9line面板spine"
      });
      _class2$2 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
          }
          (t = e.call.apply(e, [this].concat(n)) || this).m_jpAnimName = {
            Idle: "Idle",
            Bet: "Bet",
            NearWin: "NearWin",
            Win: "Win"
          };
          _initializerDefineProperty(t, "m_firstRolling", _descriptor$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_secondRolling", _descriptor2$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_thirdRolling", _descriptor3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_firstTitle", _descriptor4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_secondTitle", _descriptor5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_thirdTitle", _descriptor6, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_firstPanelSke", _descriptor7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_secondPanelSke", _descriptor8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_thirdPanelSke", _descriptor9, _assertThisInitialized(t));
          t.m_isPlayeingIdle = false;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.UpdateJPPanel = function (e) {
          this.m_firstRolling.RollNumberTo(node.strip(3600 * e / 9), 500);
          this.m_secondRolling.RollNumberTo(node.strip(720 * e / 9), 500);
          this.m_thirdRolling.RollNumberTo(node.strip(270 * e / 9), 500);
        };
        i.start = function () {
          this.Idle();
        };
        i.Idle = function () {
          if (!this.m_isPlayeingIdle) {
            this.m_isPlayeingIdle = true;
            SpineKit.PlayAnimation(this.m_firstPanelSke, this.m_jpAnimName.Idle, true);
            SpineKit.PlayAnimation(this.m_secondPanelSke, this.m_jpAnimName.Idle, true);
            SpineKit.PlayAnimation(this.m_thirdPanelSke, this.m_jpAnimName.Idle, true);
          }
        };
        i.Bet = function () {
          SpineKit.PlayAnimation(this.m_firstPanelSke, this.m_jpAnimName.Bet, false, 1);
          SpineKit.PlayAnimation(this.m_secondPanelSke, this.m_jpAnimName.Bet, false, 1);
          SpineKit.PlayAnimation(this.m_thirdPanelSke, this.m_jpAnimName.Bet, false, 1);
          this.m_isPlayeingIdle = false;
        };
        i.NearWin = function (e) {
          switch (this.GetNearWinJP(e)) {
            case 1:
              SpineKit.PlayAnimation(this.m_firstPanelSke, this.m_jpAnimName.NearWin, true);
              break;
            case 2:
              SpineKit.PlayAnimation(this.m_secondPanelSke, this.m_jpAnimName.NearWin, true);
              break;
            case 3:
              SpineKit.PlayAnimation(this.m_thirdPanelSke, this.m_jpAnimName.NearWin, true);
          }
          this.m_isPlayeingIdle = false;
        };
        i.Win1Line = function () {
          SpineKit.PlayAnimation(this.m_firstPanelSke, this.m_jpAnimName.Win, true);
          this.m_isPlayeingIdle = false;
        };
        i.Win23Line = function () {
          SpineKit.PlayAnimation(this.m_secondPanelSke, this.m_jpAnimName.Win, true);
          this.m_isPlayeingIdle = false;
        };
        i.Win49Line = function () {
          SpineKit.PlayAnimation(this.m_thirdPanelSke, this.m_jpAnimName.Win, true);
          this.m_isPlayeingIdle = false;
        };
        i.CheckWildWin = function (e) {
          if (9 == e.AwardDataVec[0].Symbol) {
            this.Win1Line();
          } else {
            for (var t = 0; t < e.AwardDataVec.length; ++t) {
              if (8 == e.AwardDataVec[t].Symbol) {
                this.Win23Line();
              } else if (7 == e.AwardDataVec[t].Symbol) {
                this.Win49Line();
              }
            }
          }
        };
        i.GetNearWinJP = function (e) {
          return e[0][1] == Game_Define.Symbol.WILD && e[1][1] == Game_Define.Symbol.WILD ? 1 : e[0][0] == Game_Define.Symbol.WILD && e[1][0] == Game_Define.Symbol.WILD || e[0][2] == Game_Define.Symbol.WILD && e[1][2] == Game_Define.Symbol.WILD ? 2 : 3;
        };
        return t;
      }(Component);
      _descriptor$1 = _applyDecoratedDescriptor(_class2$2.prototype, "m_firstRolling", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$1 = _applyDecoratedDescriptor(_class2$2.prototype, "m_secondRolling", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3 = _applyDecoratedDescriptor(_class2$2.prototype, "m_thirdRolling", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4 = _applyDecoratedDescriptor(_class2$2.prototype, "m_firstTitle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5 = _applyDecoratedDescriptor(_class2$2.prototype, "m_secondTitle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor6 = _applyDecoratedDescriptor(_class2$2.prototype, "m_thirdTitle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor7 = _applyDecoratedDescriptor(_class2$2.prototype, "m_firstPanelSke", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor8 = _applyDecoratedDescriptor(_class2$2.prototype, "m_secondPanelSke", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor9 = _applyDecoratedDescriptor(_class2$2.prototype, "m_thirdPanelSke", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$2;
      var _dec2$2;
      var _class$3;
      var _class2$3;
      var _descriptor$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ff64a2sV3VJHJ2CbrP1IWUr", "BaseSpine", undefined);
      var ccclass$3 = _decorator.ccclass;
      var property$2 = _decorator.property;
      _dec$2 = ccclass$3("BaseSpine");
      _dec2$2 = property$2({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _class2$3 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$2, _assertThisInitialized(t));
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
      _descriptor$2 = _applyDecoratedDescriptor(_class2$3.prototype, "m_spine", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var BaseSpine = _dec$2(_class$3 = _class2$3) || _class$3;
      var _dec$3;
      var _class$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a3a0d1lfVBFroYF4rf6gHTe", "SymbolSpine", undefined);
      var ccclass$4 = _decorator.ccclass;
      _dec$3 = ccclass$4("SymbolSpine");
      var SymbolSpine = _dec$3(_class$4 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
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
      }(BaseSpine)) || _class$4;
      var _dec$4;
      var _class$5;
      var _class2$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3d769yxz5hMsZtWAT+Ft2lW", "NodeObjPool", undefined);
      var ccclass$5 = _decorator.ccclass;
      _dec$4 = ccclass$5("ObjectPool");
      _class2$4 = function () {
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
            console.error("錯誤! Pool存入重複名稱:" + e);
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
          console.error("錯誤! 找不到名稱 " + e + " 的Prefab");
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
      _class2$4._instance = new _class2$4();
      var NodeObjPool = _dec$4(_class$5 = _class2$4) || _class$5;
      var _dec$5;
      var _dec2$3;
      var _dec3$2;
      var _dec4$1;
      var _dec5$1;
      var _dec6$1;
      var _class$6;
      var _class2$5;
      var _descriptor$3;
      var _descriptor2$2;
      var _descriptor3$1;
      var _descriptor4$1;
      var _descriptor5$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ea341eLioxCfLywAp9bJhaB", "CrystalSpine", undefined);
      var ccclass$6 = _decorator.ccclass;
      var property$3 = _decorator.property;
      _dec$5 = ccclass$6("CrystalSpine");
      _dec2$3 = property$3({
        type: sp.Skeleton,
        tooltip: "向下箭頭"
      });
      _dec3$2 = property$3({
        type: sp.Skeleton,
        tooltip: "向上箭頭"
      });
      _dec4$1 = property$3({
        type: sp.Skeleton,
        tooltip: "下面的水晶"
      });
      _dec5$1 = property$3({
        type: sp.Skeleton,
        tooltip: "中間的水晶"
      });
      _dec6$1 = property$3({
        type: sp.Skeleton,
        tooltip: "上面的水晶"
      });
      _class2$5 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
          }
          (t = e.call.apply(e, [this].concat(n)) || this).m_crystalAnimName = {
            Down: "Down",
            Up: "Up",
            Stop: "Stop",
            Win: "Win"
          };
          _initializerDefineProperty(t, "m_arrowDownSke", _descriptor$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_arrowUpSke", _descriptor2$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_symbolDownSke", _descriptor3$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_symbolMidSke", _descriptor4$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_symbolUpSke", _descriptor5$1, _assertThisInitialized(t));
          t.m_crystalDis = 82.5;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.DownOne = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    SpineKit.PlayAnimation(this.m_arrowDownSke, this.m_crystalAnimName.Down, true);
                    SpineKit.PlayAnimation(this.m_arrowUpSke, this.m_crystalAnimName.Down, true);
                    SpineKit.PlayAnimation(this.m_symbolDownSke, this.m_crystalAnimName.Down, true);
                    SpineKit.PlayAnimation(this.m_symbolMidSke, this.m_crystalAnimName.Down, true);
                    SpineKit.PlayAnimation(this.m_symbolUpSke, this.m_crystalAnimName.Down, true);
                    tween(this.node).to(.4, {
                      position: new Vec3(this.node.position.x, this.node.position.y - this.m_crystalDis, this.node.position.z)
                    }).call(function () {
                      t.m_arrowDownSke.clearTracks();
                      t.m_arrowUpSke.clearTracks();
                      SpineKit.PlayAnimation(t.m_symbolDownSke, t.m_crystalAnimName.Stop, false);
                      SpineKit.PlayAnimation(t.m_symbolMidSke, t.m_crystalAnimName.Stop, false);
                      SpineKit.PlayAnimation(t.m_symbolUpSke, t.m_crystalAnimName.Stop, false);
                    }).start();
                  case 6:
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
        i.UpOne = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    SpineKit.PlayAnimation(this.m_arrowDownSke, this.m_crystalAnimName.Up, true);
                    SpineKit.PlayAnimation(this.m_arrowUpSke, this.m_crystalAnimName.Up, true);
                    SpineKit.PlayAnimation(this.m_symbolDownSke, this.m_crystalAnimName.Up, true);
                    SpineKit.PlayAnimation(this.m_symbolMidSke, this.m_crystalAnimName.Up, true);
                    SpineKit.PlayAnimation(this.m_symbolUpSke, this.m_crystalAnimName.Up, true);
                    tween(this.node).to(.4, {
                      position: new Vec3(this.node.position.x, this.node.position.y + this.m_crystalDis, this.node.position.z)
                    }).call(function () {
                      t.m_arrowDownSke.clearTracks();
                      t.m_arrowUpSke.clearTracks();
                      SpineKit.PlayAnimation(t.m_symbolDownSke, t.m_crystalAnimName.Stop, false);
                      SpineKit.PlayAnimation(t.m_symbolMidSke, t.m_crystalAnimName.Stop, false);
                      SpineKit.PlayAnimation(t.m_symbolUpSke, t.m_crystalAnimName.Stop, false);
                    }).start();
                  case 6:
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
        i.ShowWin = function (e) {
          switch (e) {
            case 20:
              SpineKit.PlayAnimation(this.m_symbolUpSke, this.m_crystalAnimName.Win, true);
              break;
            case 21:
              SpineKit.PlayAnimation(this.m_symbolMidSke, this.m_crystalAnimName.Win, true);
              break;
            case 22:
              SpineKit.PlayAnimation(this.m_symbolDownSke, this.m_crystalAnimName.Win, true);
          }
        };
        i.ClearWin = function () {
          this.m_arrowDownSke.clearTracks();
          this.m_arrowUpSke.clearTracks();
          this.m_symbolDownSke.clearTracks();
          this.m_symbolMidSke.clearTracks();
          this.m_symbolUpSke.clearTracks();
        };
        i.onEnable = function () {
          SpineKit.PlayAnimation(this.m_symbolDownSke, this.m_crystalAnimName.Stop, false);
          SpineKit.PlayAnimation(this.m_symbolMidSke, this.m_crystalAnimName.Stop, false);
          SpineKit.PlayAnimation(this.m_symbolUpSke, this.m_crystalAnimName.Stop, false);
        };
        return t;
      }(Component);
      _descriptor$3 = _applyDecoratedDescriptor(_class2$5.prototype, "m_arrowDownSke", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$2 = _applyDecoratedDescriptor(_class2$5.prototype, "m_arrowUpSke", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$1 = _applyDecoratedDescriptor(_class2$5.prototype, "m_symbolDownSke", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$1 = _applyDecoratedDescriptor(_class2$5.prototype, "m_symbolMidSke", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$1 = _applyDecoratedDescriptor(_class2$5.prototype, "m_symbolUpSke", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var CrystalSpine = _dec$5(_class$6 = _class2$5) || _class$6;
      var _dec$6;
      var _class$7;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "7ea92yuY55LAoH00CoGaaF0", "NodeFadeTool", undefined);
      var ccclass$7 = _decorator.ccclass;
      _dec$6 = ccclass$7("NodeFadeTool");
      var NodeFadeTool = _dec$6(_class$7 = function () {
        function e() {}
        e.prototype.DoFade = function (e, t, i) {
          return new Promise(function (n) {
            var o = e.getComponent(UIOpacity);
            if (!o) {
              o = e.addComponent(UIOpacity);
            }
            tween(o).to(i, {
              opacity: t
            }, {
              easing: "smooth"
            }).call(function () {
              n();
            }).start();
          });
        };
        return e;
      }()) || _class$7;
      var _dec$7;
      var _dec2$4;
      var _dec3$3;
      var _dec4$2;
      var _dec5$2;
      var _dec6$2;
      var _dec7$1;
      var _dec8$1;
      var _class2$6;
      var _descriptor$4;
      var _descriptor2$3;
      var _descriptor3$2;
      var _descriptor4$2;
      var _descriptor5$2;
      var _descriptor6$1;
      var _descriptor7$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "394e72JYgpJK6UACSxatreM", "EffectPlate", undefined);
      var ccclass$8 = _decorator.ccclass;
      var property$4 = _decorator.property;
      _dec$7 = ccclass$8("EffectPlate");
      _dec2$4 = property$4({
        type: Prefab,
        tooltip: "symbol動態Prefabs"
      });
      _dec3$3 = property$4({
        type: Node,
        tooltip: "symbol特效的父節點"
      });
      _dec4$2 = property$4({
        type: NearWinEffectComponent,
        tooltip: "NearWin 特效_橫版"
      });
      _dec5$2 = property$4({
        type: CrystalSpine,
        tooltip: "左邊的水晶NUDGE"
      });
      _dec6$2 = property$4({
        type: CrystalSpine,
        tooltip: "右邊的水晶NUDGE"
      });
      _dec7$1 = property$4({
        type: Label,
        tooltip: "一般中獎金額顯示"
      });
      _dec8$1 = property$4({
        type: Node,
        tooltip: "一般中獎金額顯示背景"
      });
      _class2$6 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_symbolEffectPrefabs", _descriptor$4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_effectParent", _descriptor2$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_nearWinEffect", _descriptor3$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_nudgeLeft", _descriptor4$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_nudgeRight", _descriptor5$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_mgWinLabel", _descriptor6$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_mgWinBG", _descriptor7$1, _assertThisInitialized(t));
          t.m_moveTool = null;
          t.m_symbolSpines = [];
          t.m_gameView = null;
          t.m_slotReels = null;
          t.m_isLeftNudge = false;
          t.m_isRightNudge = false;
          t.m_nodeFadeTool = new NodeFadeTool();
          t.m_isLineLoop = false;
          t.m_currentLineIdx = 0;
          t.m_winLineData = [];
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
          this.m_nodeFadeTool = new NodeFadeTool();
        };
        i.Reset = function () {
          this.m_currentLineIdx = 0;
          this.m_isLineLoop = false;
          this.CleanAllSymbolAnim();
          this.m_winLineData = [];
        };
        i.ShowSymbolEffect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, i) {
            var n;
            var o;
            var r;
            var s;
            var a;
            var l;
            var c;
            var u;
            var m;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!i) {
                      e.next = 32;
                      break;
                    }
                    n = [];
                    o = 0;
                  case 3:
                    if (!(o < i.length)) {
                      e.next = 30;
                      break;
                    }
                    r = i[o].Line ? i[o].Line : 0;
                    s = Game_Define.SYMBOL_LINE_VEC[r];
                    a = 0;
                  case 7:
                    if (!(a < s.length)) {
                      e.next = 27;
                      break;
                    }
                    l = s[a].x;
                    c = s[a].y;
                    u = this.m_gameView.RoundDataProvider.GetPlateData(t)[l][c];
                    if (0 != l || !this.m_isLeftNudge) {
                      e.next = 15;
                      break;
                    }
                    if (u != Game_Define.Symbol.WILDTOP && u != Game_Define.Symbol.WILD && u != Game_Define.Symbol.WILDBOT) {
                      e.next = 15;
                      break;
                    }
                    this.m_nudgeLeft.ShowWin(u);
                    return e.abrupt("continue", 24);
                  case 15:
                    if (2 != l || !this.m_isRightNudge) {
                      e.next = 19;
                      break;
                    }
                    if (u != Game_Define.Symbol.WILDTOP && u != Game_Define.Symbol.WILD && u != Game_Define.Symbol.WILDBOT) {
                      e.next = 19;
                      break;
                    }
                    this.m_nudgeRight.ShowWin(u);
                    return e.abrupt("continue", 24);
                  case 19:
                    if (u != Game_Define.Symbol.Empty) {
                      e.next = 21;
                      break;
                    }
                    return e.abrupt("continue", 24);
                  case 21:
                    m = this.CreateSymbolSpine(l, c, u);
                    n.push(m.PlayWinShow());
                    this.m_slotReels.SetSymbolActive(l, c, false);
                  case 24:
                    a++;
                    e.next = 7;
                    break;
                  case 27:
                    o++;
                    e.next = 3;
                    break;
                  case 30:
                    e.next = 32;
                    return Promise.all(n);
                  case 32:
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
        i.ShowNudge = function (e, t) {
          var i = NudgeType.NoNudge;
          if (e[0] == Game_Define.Symbol.WILDTOP && e[2] == Game_Define.Symbol.WILDBOT) {
            if (this.m_slotReels.IsColOffset[t]) {
              this.m_slotReels.GetRealSymbol(t, 1).active = false;
              this.m_slotReels.GetRealSymbol(t, 2).active = false;
              this.m_slotReels.GetRealSymbol(t, 3).active = false;
            } else {
              this.m_slotReels.GetSymbol(t, 0).active = false;
              this.m_slotReels.GetSymbol(t, 1).active = false;
              this.m_slotReels.GetSymbol(t, 2).active = false;
            }
            i = NudgeType.NoNeedMove;
          } else if (e[0] == Game_Define.Symbol.WILD && e[1] == Game_Define.Symbol.WILDBOT) {
            if (this.m_slotReels.IsColOffset[t]) {
              this.m_slotReels.GetRealSymbol(t, 1).active = false;
              this.m_slotReels.GetRealSymbol(t, 2).active = false;
            } else {
              this.m_slotReels.GetSymbol(t, 0).active = false;
              this.m_slotReels.GetSymbol(t, 1).active = false;
            }
            i = NudgeType.TopNudge2;
          } else if (e[1] == Game_Define.Symbol.WILDTOP && e[2] == Game_Define.Symbol.WILD) {
            if (this.m_slotReels.IsColOffset[t]) {
              this.m_slotReels.GetRealSymbol(t, 2).active = false;
              this.m_slotReels.GetRealSymbol(t, 3).active = false;
            } else {
              this.m_slotReels.GetSymbol(t, 1).active = false;
              this.m_slotReels.GetSymbol(t, 2).active = false;
            }
            i = NudgeType.BtmNudge2;
          } else if (e[0] == Game_Define.Symbol.WILDBOT) {
            if (this.m_slotReels.IsColOffset[t]) {
              this.m_slotReels.GetRealSymbol(t, 1).active = false;
            } else {
              this.m_slotReels.GetSymbol(t, 0).active = false;
            }
            i = NudgeType.TopNudge1;
          } else if (e[2] == Game_Define.Symbol.WILDTOP) {
            if (this.m_slotReels.IsColOffset[t]) {
              this.m_slotReels.GetRealSymbol(t, 3).active = false;
            } else {
              this.m_slotReels.GetSymbol(t, 2).active = false;
            }
            i = NudgeType.BtmNudge1;
          }
          if (i !== NudgeType.NoNudge) {
            if (0 == t) {
              this.m_isLeftNudge = true;
              this.m_nudgeLeft.node.active = true;
              switch (i) {
                case NudgeType.NoNeedMove:
                  this.m_nudgeLeft.node.setPosition(this.m_nudgeLeft.node.position.x, 0, this.m_nudgeLeft.node.position.z);
                  break;
                case NudgeType.TopNudge1:
                  this.m_nudgeLeft.node.setPosition(this.m_nudgeLeft.node.position.x, 2 * Game_Define.CrystalDis, this.m_nudgeLeft.node.position.z);
                  break;
                case NudgeType.TopNudge2:
                  this.m_nudgeLeft.node.setPosition(this.m_nudgeLeft.node.position.x, 1 * Game_Define.CrystalDis, this.m_nudgeLeft.node.position.z);
                  break;
                case NudgeType.BtmNudge1:
                  this.m_nudgeLeft.node.setPosition(this.m_nudgeLeft.node.position.x, -2 * Game_Define.CrystalDis, this.m_nudgeLeft.node.position.z);
                  break;
                case NudgeType.BtmNudge2:
                  this.m_nudgeLeft.node.setPosition(this.m_nudgeLeft.node.position.x, -1 * Game_Define.CrystalDis, this.m_nudgeLeft.node.position.z);
              }
            } else {
              this.m_isRightNudge = true;
              this.m_nudgeRight.node.active = true;
              switch (i) {
                case NudgeType.NoNeedMove:
                  this.m_nudgeRight.node.setPosition(this.m_nudgeRight.node.position.x, 0, this.m_nudgeRight.node.position.z);
                  break;
                case NudgeType.TopNudge1:
                  this.m_nudgeRight.node.setPosition(this.m_nudgeRight.node.position.x, 2 * Game_Define.CrystalDis, this.m_nudgeRight.node.position.z);
                  break;
                case NudgeType.TopNudge2:
                  this.m_nudgeRight.node.setPosition(this.m_nudgeRight.node.position.x, 1 * Game_Define.CrystalDis, this.m_nudgeRight.node.position.z);
                  break;
                case NudgeType.BtmNudge1:
                  this.m_nudgeRight.node.setPosition(this.m_nudgeRight.node.position.x, -2 * Game_Define.CrystalDis, this.m_nudgeRight.node.position.z);
                  break;
                case NudgeType.BtmNudge2:
                  this.m_nudgeRight.node.setPosition(this.m_nudgeRight.node.position.x, -1 * Game_Define.CrystalDis, this.m_nudgeRight.node.position.z);
              }
            }
          }
        };
        i.PlayReelStopAnim = function (e, t) {
          var i = this;
          var n = function (n) {
            if (Game_Define.NEED_PLAY_REEL_STOP_ANIM_SYMBOL.includes(t[n])) {
              var o = i.CreateSymbolSpine(e, n, t[n]);
              i.m_slotReels.SetSymbolActive(e, n, false);
              o.PlayReelStop(function () {
                i.m_slotReels.SetSymbolActive(e, n, true);
              });
            }
          };
          for (var o = 0; o < t.length; o++) {
            n(o);
          }
        };
        i.CreateSymbolSpine = function (e, t, i, n) {
          if (undefined === n) {
            n = this.m_effectParent[0];
          }
          var o = this.m_slotReels.GetSymbolWorldPos(e, t);
          var r = "Symbol_" + i.toString().padStart(2, "0");
          var s = this.CreateSpineNode(r, n, o).getComponent(SymbolSpine);
          s.Col = e;
          s.Row = t;
          s.SetSpineIdx(i);
          if (i >= 0 && i <= Game_Define.Symbol.SEVEN777) {
            s.SetSkin("default");
          } else if (i >= Game_Define.Symbol.BAR1X2 && i <= Game_Define.Symbol.SEVEN777X2) {
            s.SetSkin("x2");
          } else if (i >= Game_Define.Symbol.BAR1X3 && i <= Game_Define.Symbol.SEVEN777X3) {
            s.SetSkin("x3");
          } else if (i >= Game_Define.Symbol.BAR1X5 && i <= Game_Define.Symbol.SEVEN777X5) {
            s.SetSkin("x5");
          }
          node.SetOrderedZindex(s.node, t);
          this.m_symbolSpines.push(s);
          return s;
        };
        i.CreateSpineNode = function (e, t, i) {
          var n = NodeObjPool.GetInstance().GetNode(e);
          n.setParent(t);
          n.active = true;
          n.setWorldPosition(i);
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
        i.PlayAllWinLine = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, i) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_winLineData = i;
                    this.CleanAllSymbolAnim();
                    e.next = 4;
                    return this.ShowSymbolEffect(t, i);
                  case 4:
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
        i.PlayWinSymbolLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var i;
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!(this.m_winLineData.length > 0)) {
                      e.next = 20;
                      break;
                    }
                    this.m_isLineLoop = true;
                    t = this.m_gameView.SpinRealAck.RoundQueue[0].PlateVec[this.m_gameView.SpinRealAck.RoundQueue[0].PlateVec.length - 1].AwardDataVec;
                  case 3:
                    if (!this.m_isLineLoop) {
                      e.next = 20;
                      break;
                    }
                    this.CleanAllSymbolAnim();
                    this.m_gameView.MachineView.HideLine();
                    i = t[this.m_currentLineIdx].Line ? t[this.m_currentLineIdx].Line : 0;
                    this.m_gameView.MachineView.PlayLineWin([i]);
                    if (this.IsNudgeLeft) {
                      this.NudgeLeft.ClearWin();
                    }
                    if (this.IsNudgeRight) {
                      this.NudgeRight.ClearWin();
                    }
                    n = false;
                    if (t[this.m_currentLineIdx].Symbol >= 7) {
                      n = true;
                    }
                    if (n) {
                      this.m_gameView.CharacterSpine.PlayCrystalWildWin();
                    } else {
                      this.m_gameView.CharacterSpine.PlayCrystalWin();
                    }
                    e.next = 15;
                    return this.ShowSymbolEffect(this.m_gameView.SpinRealAck.RoundQueue[0].PlateVec.length - 1, [t[this.m_currentLineIdx]]);
                  case 15:
                    this.m_gameView.CharacterSpine.PlayCrystalIdle();
                    this.m_currentLineIdx++;
                    if (this.m_currentLineIdx >= t.length) {
                      this.m_currentLineIdx = 0;
                    }
                    e.next = 3;
                    break;
                  case 20:
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
        i.ShowNearWinAnim = function (e) {
          var t = this.m_nearWinEffect;
          if (e) {
            t.node.active = e;
            t.FadeIn();
          } else {
            t.FadeOut().then(function () {
              t.node.active = e;
            });
          }
        };
        i.IsNudgeLeft = function () {
          return this.m_isLeftNudge;
        };
        i.IsNudgeRight = function () {
          return this.m_isRightNudge;
        };
        i.ShowMGWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_mgWinBG.active = true;
                    this.m_mgWinLabel.string = t.toString();
                    e.next = 4;
                    return this.m_nodeFadeTool.DoFade(this.m_mgWinBG, 255, .25);
                  case 4:
                    e.next = 6;
                    return node$1.Wait(this, 1.5);
                  case 6:
                    e.next = 8;
                    return this.m_nodeFadeTool.DoFade(this.m_mgWinBG, 0, .25);
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
        i.CloseMGWin = function () {
          this.m_mgWinBG.active = true;
          this.m_mgWinLabel.string = "";
          if (this.m_isLeftNudge) {
            this.m_nudgeLeft.ClearWin();
          }
          if (this.m_isRightNudge) {
            this.m_nudgeRight.ClearWin();
          }
          this.CleanAllSymbolAnim();
          this.m_symbolSpines = [];
          this.m_mgWinLabel.string = "";
          this.m_mgWinBG.active = false;
        };
        i.CleanAward = function () {
          if (this.m_isLeftNudge) {
            this.m_isLeftNudge = false;
            this.m_nudgeLeft.ClearWin();
            this.m_nudgeLeft.node.active = false;
          }
          if (this.m_isRightNudge) {
            this.m_isRightNudge = false;
            this.m_nudgeRight.ClearWin();
            this.m_nudgeRight.node.active = false;
          }
          this.CleanAllSymbolAnim();
          this.m_symbolSpines = [];
          this.m_mgWinLabel.string = "";
          this.m_mgWinBG.active = false;
        };
        _createClass(t, [{
          key: "NudgeLeft",
          get: function () {
            return this.m_nudgeLeft;
          }
        }, {
          key: "NudgeRight",
          get: function () {
            return this.m_nudgeRight;
          }
        }]);
        return t;
      }(Component);
      _descriptor$4 = _applyDecoratedDescriptor(_class2$6.prototype, "m_symbolEffectPrefabs", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$3 = _applyDecoratedDescriptor(_class2$6.prototype, "m_effectParent", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$2 = _applyDecoratedDescriptor(_class2$6.prototype, "m_nearWinEffect", [_dec4$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$2 = _applyDecoratedDescriptor(_class2$6.prototype, "m_nudgeLeft", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$2 = _applyDecoratedDescriptor(_class2$6.prototype, "m_nudgeRight", [_dec6$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor6$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_mgWinLabel", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor7$1 = _applyDecoratedDescriptor(_class2$6.prototype, "m_mgWinBG", [_dec8$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$8;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f745froIhFGyLnG7MXW7tT8", "GameSoundMgr", undefined);
      var ccclass$9 = _decorator.ccclass;
      _dec$8 = ccclass$9("GameSoundMgr");
      var _dec$9;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4b71897/HdBorZDooSe88ix", "AwardState", undefined);
      var ccclass$a = _decorator.ccclass;
      _dec$9 = ccclass$a("AwardState");
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d7d8fqaYE9D9JAra/WwWKgq", "CheckState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3e322Zg/15IgaW08e0Y6rD5", "FeatureShowState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1f34aXQ97pIircyjVweKvmp", "IdleState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0181e1hYhtOp6bTGF3W4dFm", "PlateShowState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5369dby1DhNdI0IAcuZXe4z", "RoundEndState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ee3d34KNrtLqYun6PqRLF5e", "RoundShowEndState", undefined);
      var _dec$a;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "92f12EH7DBCDr60HRj6R7fs", "SpinState", undefined);
      var ccclass$b = _decorator.ccclass;
      _dec$a = ccclass$b("SpineState");
      var _dec$b;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b330bfmWF9FyahCOfjoR7Tf", "UnshowPrepareState", undefined);
      var ccclass$c = _decorator.ccclass;
      _dec$b = ccclass$c("UnshowPrepareState");
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
        var o;
        return t ? (o = 0 <= (e >>>= 0) && e < 256) && (n = UINT_CACHE[e]) ? n : (i = new Long(e, 0, true), o && (UINT_CACHE[e] = i), i) : (o = -128 <= (e |= 0) && e < 128) && (n = INT_CACHE[e]) ? n : (i = new Long(e, e < 0 ? -1 : 0, false), o && (INT_CACHE[e] = i), i);
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
        var o = fromNumber(pow_dbl(i, 8));
        var r = ZERO;
        for (var s = 0; s < e.length; s += 8) {
          var a = Math.min(8, e.length - s);
          var l = parseInt(e.substring(s, s + a), i);
          if (a < 8) {
            var c = fromNumber(pow_dbl(i, a));
            r = r.mul(c).add(fromNumber(l));
          } else {
            r = (r = r.mul(o)).add(fromNumber(l));
          }
        }
        r.unsigned = t;
        return r;
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
        var o = fromNumber(pow_dbl(e, 6), this.unsigned);
        var r = this;
        for (var s = "";;) {
          var a = r.div(o);
          var l = (r.sub(a.mul(o)).toInt() >>> 0).toString(e);
          if ((r = a).isZero()) {
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
        var o = 65535 & this.low;
        var r = e.high >>> 16;
        var s = 65535 & e.high;
        var a = e.low >>> 16;
        var l = 0;
        var c = 0;
        var u = 0;
        var m = 0;
        u += (m += o + (65535 & e.low)) >>> 16;
        c += (u += n + a) >>> 16;
        l += (c += i + s) >>> 16;
        l += t + r;
        return new Long((u &= 65535) << 16 | (m &= 65535), (l &= 65535) << 16 | (c &= 65535), this.unsigned);
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
        var o = 65535 & this.low;
        var r = e.high >>> 16;
        var s = 65535 & e.high;
        var a = e.low >>> 16;
        var l = 65535 & e.low;
        var c = 0;
        var u = 0;
        var m = 0;
        var p = 0;
        m += (p += o * l) >>> 16;
        u += (m += n * l) >>> 16;
        m &= 65535;
        u += (m += o * a) >>> 16;
        c += (u += i * l) >>> 16;
        u &= 65535;
        c += (u += n * a) >>> 16;
        u &= 65535;
        c += (u += o * s) >>> 16;
        c += t * l + i * a + n * s + o * r;
        return new Long((m &= 65535) << 16 | (p &= 65535), (c &= 65535) << 16 | (u &= 65535), this.unsigned);
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
          var o = Math.ceil(Math.log(t) / Math.LN2);
          var r = o <= 48 ? 1 : pow_dbl(2, o - 48);
          var s = fromNumber(t);
          for (var a = s.mul(e); a.isNegative() || a.gt(i);) {
            a = (s = fromNumber(t -= r, this.unsigned)).mul(e);
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
          var o = i.resolveMap;
          var r = this._createRequire(e);
          var s = o ? this._createRequireWithResolveMap("function" == typeof o ? o() : o, r) : r;
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (e, t, i, n, o) {
        i.exports = function (e, t) {
          var i = new Array(arguments.length - 1);
          var n = 0;
          var o = 2;
          var r = true;
          for (; o < arguments.length;) {
            i[n++] = arguments[o++];
          }
          return new Promise(function (o, s) {
            i[n] = function (e) {
              if (r) {
                r = false;
                if (e) {
                  s(e);
                } else {
                  var t = new Array(arguments.length - 1);
                  for (var i = 0; i < t.length;) {
                    t[i++] = arguments[i];
                  }
                  o.apply(null, t);
                }
              }
            };
            try {
              e.apply(t || null, i);
            } catch (e) {
              if (r) {
                r = false;
                s(e);
              }
            }
          });
        };
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (e, t, i, n, o) {
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
          var o = null;
          var r = [];
          var a = 0;
          for (var l = 0; t < i;) {
            var c = e[t++];
            switch (l) {
              case 0:
                r[a++] = s[c >> 2];
                n = (3 & c) << 4;
                l = 1;
                break;
              case 1:
                r[a++] = s[n | c >> 4];
                n = (15 & c) << 2;
                l = 2;
                break;
              case 2:
                r[a++] = s[n | c >> 6];
                r[a++] = s[63 & c];
                l = 0;
            }
            if (a > 8191) {
              (o || (o = [])).push(String.fromCharCode.apply(String, r));
              a = 0;
            }
          }
          if (l) {
            r[a++] = s[n];
            r[a++] = 61;
            if (1 === l) {
              r[a++] = 61;
            }
          }
          return o ? (a && o.push(String.fromCharCode.apply(String, r.slice(0, a))), o.join("")) : String.fromCharCode.apply(String, r.slice(0, a));
        };
        e.decode = function (e, t, i) {
          var n;
          var o = i;
          var r = 0;
          for (var s = 0; s < e.length;) {
            var l = e.charCodeAt(s++);
            if (61 === l && r > 1) {
              break;
            }
            if (undefined === (l = a[l])) {
              throw Error("invalid encoding");
            }
            switch (r) {
              case 0:
                n = l;
                r = 1;
                break;
              case 1:
                t[i++] = n << 2 | (48 & l) >> 4;
                n = l;
                r = 2;
                break;
              case 2:
                t[i++] = (15 & n) << 4 | (60 & l) >> 2;
                n = l;
                r = 3;
                break;
              case 3:
                t[i++] = (3 & n) << 6 | l;
                r = 0;
            }
          }
          if (1 === r) {
            throw Error("invalid encoding");
          }
          return i - o;
        };
        e.test = function (e) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
        };
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (e, t, i, n, o) {
        function r() {
          this._listeners = {};
        }
        i.exports = r;
        r.prototype.on = function (e, t, i) {
          (this._listeners[e] || (this._listeners[e] = [])).push({
            fn: t,
            ctx: i || this
          });
          return this;
        };
        r.prototype.off = function (e, t) {
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
        r.prototype.emit = function (e) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (e, t, i, n, o) {
        function r(e) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var t = new Float32Array([-0]);
              var i = new Uint8Array(t.buffer);
              var n = 128 === i[3];
              function o(e, n, o) {
                t[0] = e;
                n[o] = i[0];
                n[o + 1] = i[1];
                n[o + 2] = i[2];
                n[o + 3] = i[3];
              }
              function r(e, n, o) {
                t[0] = e;
                n[o] = i[3];
                n[o + 1] = i[2];
                n[o + 2] = i[1];
                n[o + 3] = i[0];
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
              e.writeFloatLE = n ? o : r;
              e.writeFloatBE = n ? r : o;
              e.readFloatLE = n ? s : a;
              e.readFloatBE = n ? a : s;
            })();
          } else {
            (function () {
              function t(e, t, i, n) {
                var o = t < 0 ? 1 : 0;
                if (o) {
                  t = -t;
                }
                if (0 === t) {
                  e(1 / t > 0 ? 0 : 2147483648, i, n);
                } else if (isNaN(t)) {
                  e(2143289344, i, n);
                } else if (t > 34028234663852886e22) {
                  e((o << 31 | 2139095040) >>> 0, i, n);
                } else if (t < 11754943508222875e-54) {
                  e((o << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, i, n);
                } else {
                  var r = Math.floor(Math.log(t) / Math.LN2);
                  e((o << 31 | r + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -r) * 8388608)) >>> 0, i, n);
                }
              }
              function i(e, t, i) {
                var n = e(t, i);
                var o = 2 * (n >> 31) + 1;
                var r = n >>> 23 & 255;
                var s = 8388607 & n;
                return 255 === r ? s ? NaN : o * Infinity : 0 === r ? 1401298464324817e-60 * o * s : o * Math.pow(2, r - 150) * (s + 8388608);
              }
              e.writeFloatLE = t.bind(null, s);
              e.writeFloatBE = t.bind(null, a);
              e.readFloatLE = i.bind(null, l);
              e.readFloatBE = i.bind(null, c);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var t = new Float64Array([-0]);
              var i = new Uint8Array(t.buffer);
              var n = 128 === i[7];
              function o(e, n, o) {
                t[0] = e;
                n[o] = i[0];
                n[o + 1] = i[1];
                n[o + 2] = i[2];
                n[o + 3] = i[3];
                n[o + 4] = i[4];
                n[o + 5] = i[5];
                n[o + 6] = i[6];
                n[o + 7] = i[7];
              }
              function r(e, n, o) {
                t[0] = e;
                n[o] = i[7];
                n[o + 1] = i[6];
                n[o + 2] = i[5];
                n[o + 3] = i[4];
                n[o + 4] = i[3];
                n[o + 5] = i[2];
                n[o + 6] = i[1];
                n[o + 7] = i[0];
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
              e.writeDoubleLE = n ? o : r;
              e.writeDoubleBE = n ? r : o;
              e.readDoubleLE = n ? s : a;
              e.readDoubleBE = n ? a : s;
            })();
          } else {
            (function () {
              function t(e, t, i, n, o, r) {
                var s = n < 0 ? 1 : 0;
                if (s) {
                  n = -n;
                }
                if (0 === n) {
                  e(0, o, r + t);
                  e(1 / n > 0 ? 0 : 2147483648, o, r + i);
                } else if (isNaN(n)) {
                  e(0, o, r + t);
                  e(2146959360, o, r + i);
                } else if (n > 17976931348623157e292) {
                  e(0, o, r + t);
                  e((s << 31 | 2146435072) >>> 0, o, r + i);
                } else {
                  var a;
                  if (n < 22250738585072014e-324) {
                    e((a = n / 5e-324) >>> 0, o, r + t);
                    e((s << 31 | a / 4294967296) >>> 0, o, r + i);
                  } else {
                    var l = Math.floor(Math.log(n) / Math.LN2);
                    if (1024 === l) {
                      l = 1023;
                    }
                    e(4503599627370496 * (a = n * Math.pow(2, -l)) >>> 0, o, r + t);
                    e((s << 31 | l + 1023 << 20 | 1048576 * a & 1048575) >>> 0, o, r + i);
                  }
                }
              }
              function i(e, t, i, n, o) {
                var r = e(n, o + t);
                var s = e(n, o + i);
                var a = 2 * (s >> 31) + 1;
                var l = s >>> 20 & 2047;
                var c = 4294967296 * (1048575 & s) + r;
                return 2047 === l ? c ? NaN : a * Infinity : 0 === l ? 5e-324 * a * c : a * Math.pow(2, l - 1075) * (c + 4503599627370496);
              }
              e.writeDoubleLE = t.bind(null, s, 0, 4);
              e.writeDoubleBE = t.bind(null, a, 4, 0);
              e.readDoubleLE = i.bind(null, l, 0, 4);
              e.readDoubleBE = i.bind(null, c, 4, 0);
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
        function c(e, t) {
          return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
        }
        i.exports = r(r);
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (exports, require, module, __filename, __dirname) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (e, t, i, n, o) {
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
          var o = null;
          var r = [];
          for (var s = 0; t < i;) {
            if ((n = e[t++]) < 128) {
              r[s++] = n;
            } else if (n > 191 && n < 224) {
              r[s++] = (31 & n) << 6 | 63 & e[t++];
            } else if (n > 239 && n < 365) {
              n = ((7 & n) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536;
              r[s++] = 55296 + (n >> 10);
              r[s++] = 56320 + (1023 & n);
            } else {
              r[s++] = (15 & n) << 12 | (63 & e[t++]) << 6 | 63 & e[t++];
            }
            if (s > 8191) {
              (o || (o = [])).push(String.fromCharCode.apply(String, r));
              s = 0;
            }
          }
          return o ? (s && o.push(String.fromCharCode.apply(String, r.slice(0, s))), o.join("")) : String.fromCharCode.apply(String, r.slice(0, s));
        };
        e.write = function (e, t, i) {
          var n;
          var o;
          var r = i;
          for (var s = 0; s < e.length; ++s) {
            if ((n = e.charCodeAt(s)) < 128) {
              t[i++] = n;
            } else if (n < 2048) {
              t[i++] = n >> 6 | 192;
              t[i++] = 63 & n | 128;
            } else if (55296 == (64512 & n) && 56320 == (64512 & (o = e.charCodeAt(s + 1)))) {
              n = 65536 + ((1023 & n) << 10) + (1023 & o);
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
          return i - r;
        };
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (e, t, i, n, o) {
        i.exports = function (e, t, i) {
          var n = i || 8192;
          var o = n >>> 1;
          var r = null;
          var s = n;
          return function (i) {
            if (i < 1 || i > o) {
              return e(i);
            }
            if (s + i > n) {
              r = e(n);
              s = 0;
            }
            var a = t.call(r, s, s += i);
            if (7 & s) {
              s = 1 + (7 | s);
            }
            return a;
          };
        };
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (e, t, i, n, o) {
        i.exports = s;
        var r = t("../util/minimal");
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
          if (r.isString(e)) {
            if (!r.Long) {
              return s.fromNumber(parseInt(e, 10));
            }
            e = r.Long.fromString(e);
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
          return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
            low: 0 | this.lo,
            high: 0 | this.hi,
            unsigned: Boolean(e)
          };
        };
        var c = String.prototype.charCodeAt;
        s.fromHash = function (e) {
          return e === l ? a : new s((c.call(e, 0) | c.call(e, 1) << 8 | c.call(e, 2) << 16 | c.call(e, 3) << 24) >>> 0, (c.call(e, 4) | c.call(e, 5) << 8 | c.call(e, 6) << 16 | c.call(e, 7) << 24) >>> 0);
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
          "../util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (e, t, i, n, o) {
        function s(e, t, i) {
          var n = Object.keys(t);
          for (var o = 0; o < n.length; ++o) {
            if (!(undefined !== e[n[o]] && i)) {
              e[n[o]] = t[n[o]];
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
          "@protobufjs/aspromise": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/base64": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          "@protobufjs/eventemitter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          "@protobufjs/float": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          "@protobufjs/inquire": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          "@protobufjs/utf8": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          "@protobufjs/pool": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          "./longbits": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (e, t, i, n, o) {
        i.exports = h;
        var r;
        var s = t("./util/minimal");
        var a = s.LongBits;
        var l = s.base64;
        var c = s.utf8;
        function u(e, t, i) {
          this.fn = e;
          this.len = t;
          this.next = undefined;
          this.val = i;
        }
        function m() {}
        function p(e) {
          this.head = e.head;
          this.tail = e.tail;
          this.len = e.len;
          this.next = e.states;
        }
        function h() {
          this.len = 0;
          this.head = new u(m, 0, 0);
          this.tail = this.head;
          this.states = null;
        }
        var _ = function () {
          return s.Buffer ? function () {
            return (h.create = function () {
              return new r();
            })();
          } : function () {
            return new h();
          };
        };
        function d(e, t, i) {
          t[i] = 255 & e;
        }
        function f(e, t) {
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
        function g(e, t, i) {
          t[i] = 255 & e;
          t[i + 1] = e >>> 8 & 255;
          t[i + 2] = e >>> 16 & 255;
          t[i + 3] = e >>> 24;
        }
        h.create = _();
        h.alloc = function (e) {
          return new s.Array(e);
        };
        if (s.Array !== Array) {
          h.alloc = s.pool(h.alloc, s.Array.prototype.subarray);
        }
        h.prototype._push = function (e, t, i) {
          this.tail = this.tail.next = new u(e, t, i);
          this.len += t;
          return this;
        };
        f.prototype = Object.create(u.prototype);
        f.prototype.fn = function (e, t, i) {
          for (; e > 127;) {
            t[i++] = 127 & e | 128;
            e >>>= 7;
          }
          t[i] = e;
        };
        h.prototype.uint32 = function (e) {
          this.len += (this.tail = this.tail.next = new f((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
          return this;
        };
        h.prototype.int32 = function (e) {
          return e < 0 ? this._push(y, 10, a.fromNumber(e)) : this.uint32(e);
        };
        h.prototype.sint32 = function (e) {
          return this.uint32((e << 1 ^ e >> 31) >>> 0);
        };
        h.prototype.uint64 = function (e) {
          var t = a.from(e);
          return this._push(y, t.length(), t);
        };
        h.prototype.int64 = h.prototype.uint64;
        h.prototype.sint64 = function (e) {
          var t = a.from(e).zzEncode();
          return this._push(y, t.length(), t);
        };
        h.prototype.bool = function (e) {
          return this._push(d, 1, e ? 1 : 0);
        };
        h.prototype.fixed32 = function (e) {
          return this._push(g, 4, e >>> 0);
        };
        h.prototype.sfixed32 = h.prototype.fixed32;
        h.prototype.fixed64 = function (e) {
          var t = a.from(e);
          return this._push(g, 4, t.lo)._push(g, 4, t.hi);
        };
        h.prototype.sfixed64 = h.prototype.fixed64;
        h.prototype.float = function (e) {
          return this._push(s.float.writeFloatLE, 4, e);
        };
        h.prototype.double = function (e) {
          return this._push(s.float.writeDoubleLE, 8, e);
        };
        var S = s.Array.prototype.set ? function (e, t, i) {
          t.set(e, i);
        } : function (e, t, i) {
          for (var n = 0; n < e.length; ++n) {
            t[i + n] = e[n];
          }
        };
        h.prototype.bytes = function (e) {
          var t = e.length >>> 0;
          if (!t) {
            return this._push(d, 1, 0);
          }
          if (s.isString(e)) {
            var i = h.alloc(t = l.length(e));
            l.decode(e, i, 0);
            e = i;
          }
          return this.uint32(t)._push(S, t, e);
        };
        h.prototype.string = function (e) {
          var t = c.length(e);
          return t ? this.uint32(t)._push(c.write, t, e) : this._push(d, 1, 0);
        };
        h.prototype.fork = function () {
          this.states = new p(this);
          this.head = this.tail = new u(m, 0, 0);
          this.len = 0;
          return this;
        };
        h.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new u(m, 0, 0);
            this.len = 0;
          }
          return this;
        };
        h.prototype.ldelim = function () {
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
        h.prototype.finish = function () {
          var e = this.head.next;
          var t = this.constructor.alloc(this.len);
          for (var i = 0; e;) {
            e.fn(e.val, t, i);
            i += e.len;
            e = e.next;
          }
          return t;
        };
        h._configure = function (e) {
          r = e;
          h.create = _();
          r._configure();
        };
        i.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (e, t, i, n, o) {
        i.exports = a;
        var r = t("./writer");
        (a.prototype = Object.create(r.prototype)).constructor = a;
        var s = t("./util/minimal");
        function a() {
          r.call(this);
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
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (e, t, i, n, o) {
        i.exports = u;
        var r;
        var s = t("./util/minimal");
        var a = s.LongBits;
        var l = s.utf8;
        function u(e) {
          this.buf = e;
          this.pos = 0;
          this.len = e.length;
        }
        var m;
        var p = "undefined" != typeof Uint8Array ? function (e) {
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
        var h = function () {
          return s.Buffer ? function (e) {
            return (u.create = function (e) {
              return s.Buffer.isBuffer(e) ? new r(e) : p(e);
            })(e);
          } : p;
        };
        function _() {
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
        function f() {
          if (this.pos + 8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (8 || 1) + " > " + this.len);
          }
          return new a((this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0, (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0);
        }
        u.create = h();
        u.prototype._slice = s.Array.prototype.subarray || s.Array.prototype.slice;
        m = 4294967295;
        u.prototype.uint32 = function () {
          m = (127 & this.buf[this.pos]) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return m;
          }
          m = (m | (127 & this.buf[this.pos]) << 7) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return m;
          }
          m = (m | (127 & this.buf[this.pos]) << 14) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return m;
          }
          m = (m | (127 & this.buf[this.pos]) << 21) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return m;
          }
          m = (m | (15 & this.buf[this.pos]) << 28) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return m;
          }
          if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (10 || 1) + " > " + this.len);
          }
          return m;
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
          r = e;
          u.create = h();
          r._configure();
          var t = s.Long ? "toLong" : "toNumber";
          s.merge(u.prototype, {
            int64: function () {
              return _.call(this)[t](false);
            },
            uint64: function () {
              return _.call(this)[t](true);
            },
            sint64: function () {
              return _.call(this).zzDecode()[t](false);
            },
            fixed64: function () {
              return f.call(this)[t](true);
            },
            sfixed64: function () {
              return f.call(this)[t](false);
            }
          });
        };
        i.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (e, t, i, n, o) {
        i.exports = a;
        var r = t("./reader");
        (a.prototype = Object.create(r.prototype)).constructor = a;
        var s = t("./util/minimal");
        function a(e) {
          r.call(this, e);
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
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (e, t, i, n, o) {
        i.exports = s;
        var r = t("../util/minimal");
        function s(e, t, i) {
          if ("function" != typeof e) {
            throw TypeError("rpcImpl must be a function");
          }
          r.EventEmitter.call(this);
          this.rpcImpl = e;
          this.requestDelimited = Boolean(t);
          this.responseDelimited = Boolean(i);
        }
        (s.prototype = Object.create(r.EventEmitter.prototype)).constructor = s;
        s.prototype.rpcCall = function e(t, i, n, o, s) {
          if (!o) {
            throw TypeError("request must be specified");
          }
          var a = this;
          if (!s) {
            return r.asPromise(e, a, t, i, n, o);
          }
          if (a.rpcImpl) {
            try {
              return a.rpcImpl(t, i[a.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), function (e, i) {
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
          "../util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (e, t, i, n, o) {
        e.Service = t("./rpc/service");
        i.exports;
      }, function () {
        return {
          "./rpc/service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (e, t, i, n, o) {
        i.exports = {};
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (e, t, i, n, o) {
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
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./writer_buffer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./reader_buffer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./rpc": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          "./roots": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (e, t, i, n, o) {
        function r(e, t) {
          if ("string" == typeof e) {
            t = e;
            e = undefined;
          }
          var i = [];
          function n(e) {
            if ("string" != typeof e) {
              var t = "function " + (undefined || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + i.join("\n  ") + "\n}";
              if (r.verbose) {
                console.log("codegen: " + t);
              }
              t = "return " + t;
              if (e) {
                var s = Object.keys(e);
                var a = new Array(s.length + 1);
                var l = new Array(s.length);
                for (var c = 0; c < s.length;) {
                  a[c] = s[c];
                  l[c] = e[s[c++]];
                }
                a[c] = t;
                return Function.apply(null, a).apply(null, l);
              }
              return Function(t)();
            }
            var u = new Array(arguments.length - 1);
            for (var m = 0; m < u.length;) {
              u[m] = arguments[++m];
            }
            m = 0;
            e = e.replace(/%([%dfijs])/g, function (e, t) {
              var i = u[m++];
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
            if (m !== u.length) {
              throw Error("parameter count mismatch");
            }
            i.push(e);
            return n;
          }
          function o(n) {
            return "function " + (n || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + i.join("\n  ") + "\n}";
          }
          n.toString = o;
          return n;
        }
        i.exports = r;
        r.verbose = false;
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (e, t, i, n, o) {
        i.exports = a;
        var r = t("@protobufjs/aspromise");
        var s = t("@protobufjs/inquire")("fs");
        function a(e, t, i) {
          if ("function" == typeof t) {
            i = t;
            t = {};
          } else if (!t) {
            t = {};
          }
          return i ? !t.xhr && s && s.readFile ? s.readFile(e, function (n, o) {
            return n && "undefined" != typeof XMLHttpRequest ? a.xhr(e, t, i) : n ? i(n) : i(null, t.binary ? o : o.toString("utf8"));
          }) : a.xhr(e, t, i) : r(a, this, e, t);
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
                  for (var o = 0; o < n.responseText.length; ++o) {
                    e.push(255 & n.responseText.charCodeAt(o));
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
          "@protobufjs/aspromise": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/inquire": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (e, t, i, n, o) {
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
          for (var o = 0; o < t.length;) {
            if (".." === t[o]) {
              if (o > 0 && ".." !== t[o - 1]) {
                t.splice(--o, 2);
              } else if (i) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (e, t, i, n, o) {
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
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (e, t, i, n, o) {
        i.exports = m;
        var r = t("./object");
        ((m.prototype = Object.create(r.prototype)).constructor = m).className = "Field";
        var s;
        var a = t("./enum");
        var l = t("./types");
        var c = t("./util");
        var u = /^required|optional|repeated$/;
        function m(e, t, i, n, o, s, a) {
          if (c.isObject(n)) {
            a = o;
            s = n;
            n = o = undefined;
          } else if (c.isObject(o)) {
            a = s;
            s = o;
            o = undefined;
          }
          r.call(this, e, s);
          if (!c.isInteger(t) || t < 0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!c.isString(i)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== n && !u.test(n = n.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== o && !c.isString(o)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === n) {
            n = "optional";
          }
          this.rule = n && "optional" !== n ? n : undefined;
          this.type = i;
          this.id = t;
          this.extend = o || undefined;
          this.required = "required" === n;
          this.optional = !this.required;
          this.repeated = "repeated" === n;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!c.Long && undefined !== l.long[i];
          this.bytes = "bytes" === i;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = a;
        }
        m.fromJSON = function (e, t) {
          return new m(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
        };
        Object.defineProperty(m.prototype, "packed", {
          get: function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        m.prototype.setOption = function (e, t, i) {
          if ("packed" === e) {
            this._packed = null;
          }
          return r.prototype.setOption.call(this, e, t, i);
        };
        m.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return c.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
        };
        m.prototype.resolve = function () {
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
          if (this.parent instanceof s) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return r.prototype.resolve.call(this);
        };
        m.d = function (e, t, i, n) {
          if ("function" == typeof t) {
            t = c.decorateType(t).name;
          } else if (t && "object" == typeof t) {
            t = c.decorateEnum(t).name;
          }
          return function (o, r) {
            c.decorateType(o.constructor).add(new m(r, e, t, i, {
              default: n
            }));
          };
        };
        m._configure = function (e) {
          s = e;
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (e, t, i, n, o) {
        i.exports = l;
        var r = t("./object");
        ((l.prototype = Object.create(r.prototype)).constructor = l).className = "OneOf";
        var s = t("./field");
        var a = t("./util");
        function l(e, t, i, n) {
          if (!Array.isArray(t)) {
            i = t;
            t = undefined;
          }
          r.call(this, e, i);
          if (undefined !== t && !Array.isArray(t)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = t || [];
          this.fieldsArray = [];
          this.comment = n;
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
          c(this);
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
          r.prototype.onAdd.call(this, e);
          for (var t = 0; t < this.oneof.length; ++t) {
            var i = e.get(this.oneof[t]);
            if (i && !i.partOf) {
              i.partOf = this;
              this.fieldsArray.push(i);
            }
          }
          c(this);
        };
        l.prototype.onRemove = function (e) {
          var t;
          for (var i = 0; i < this.fieldsArray.length; ++i) {
            if ((t = this.fieldsArray[i]).parent) {
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
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (e, t, i, n, o) {
        i.exports = h;
        var r = t("./object");
        ((h.prototype = Object.create(r.prototype)).constructor = h).className = "Namespace";
        var s;
        var a;
        var l;
        var c = t("./field");
        var u = t("./util");
        var m = t("./oneof");
        function p(e, t) {
          if (e && e.length) {
            var i = {};
            for (var n = 0; n < e.length; ++n) {
              i[e[n].name] = e[n].toJSON(t);
            }
            return i;
          }
        }
        function h(e, t) {
          r.call(this, e, t);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _(e) {
          e._nestedArray = null;
          return e;
        }
        h.fromJSON = function (e, t) {
          return new h(e, t.options).addJSON(t.nested);
        };
        h.arrayToJSON = p;
        h.isReservedId = function (e, t) {
          if (e) {
            for (var i = 0; i < e.length; ++i) {
              if ("string" != typeof e[i] && e[i][0] <= t && e[i][1] > t) {
                return true;
              }
            }
          }
          return false;
        };
        h.isReservedName = function (e, t) {
          if (e) {
            for (var i = 0; i < e.length; ++i) {
              if (e[i] === t) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(h.prototype, "nestedArray", {
          get: function () {
            return this._nestedArray || (this._nestedArray = u.toArray(this.nested));
          }
        });
        h.prototype.toJSON = function (e) {
          return u.toObject(["options", this.options, "nested", p(this.nestedArray, e)]);
        };
        h.prototype.addJSON = function (e) {
          if (e) {
            var t;
            var i = Object.keys(e);
            for (var n = 0; n < i.length; ++n) {
              t = e[i[n]];
              this.add((undefined !== t.fields ? s.fromJSON : undefined !== t.values ? l.fromJSON : undefined !== t.methods ? a.fromJSON : undefined !== t.id ? c.fromJSON : h.fromJSON)(i[n], t));
            }
          }
          return this;
        };
        h.prototype.get = function (e) {
          return this.nested && this.nested[e] || null;
        };
        h.prototype.getEnum = function (e) {
          if (this.nested && this.nested[e] instanceof l) {
            return this.nested[e].values;
          }
          throw Error("no such enum: " + e);
        };
        h.prototype.add = function (e) {
          if (!(e instanceof c && undefined !== e.extend || e instanceof s || e instanceof m || e instanceof l || e instanceof a || e instanceof h)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var t = this.get(e.name);
            if (t) {
              if (!(t instanceof h && e instanceof h) || t instanceof s || t instanceof a) {
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
          return _(this);
        };
        h.prototype.remove = function (e) {
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
          return _(this);
        };
        h.prototype.define = function (e, t) {
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
              if (!((i = i.nested[n]) instanceof h)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              i.add(i = new h(n));
            }
          }
          if (t) {
            i.addJSON(t);
          }
          return i;
        };
        h.prototype.resolveAll = function () {
          var e = this.nestedArray;
          for (var t = 0; t < e.length;) {
            if (e[t] instanceof h) {
              e[t++].resolveAll();
            } else {
              e[t++].resolve();
            }
          }
          return this.resolve();
        };
        h.prototype.lookup = function (e, t, i) {
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
            } else if (n instanceof h && (n = n.lookup(e.slice(1), t, true))) {
              return n;
            }
          } else {
            for (var o = 0; o < this.nestedArray.length; ++o) {
              if (this._nestedArray[o] instanceof h && (n = this._nestedArray[o].lookup(e, t, true))) {
                return n;
              }
            }
          }
          return null === this.parent || i ? null : this.parent.lookup(e, t);
        };
        h.prototype.lookupType = function (e) {
          var t = this.lookup(e, [s]);
          if (!t) {
            throw Error("no such type: " + e);
          }
          return t;
        };
        h.prototype.lookupEnum = function (e) {
          var t = this.lookup(e, [l]);
          if (!t) {
            throw Error("no such Enum '" + e + "' in " + this);
          }
          return t;
        };
        h.prototype.lookupTypeOrEnum = function (e) {
          var t = this.lookup(e, [s, l]);
          if (!t) {
            throw Error("no such Type or Enum '" + e + "' in " + this);
          }
          return t;
        };
        h.prototype.lookupService = function (e) {
          var t = this.lookup(e, [a]);
          if (!t) {
            throw Error("no such Service '" + e + "' in " + this);
          }
          return t;
        };
        h._configure = function (e, t, i) {
          s = e;
          a = t;
          l = i;
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (e, t, i, n, o) {
        i.exports = l;
        var r = t("./field");
        ((l.prototype = Object.create(r.prototype)).constructor = l).className = "MapField";
        var s = t("./types");
        var a = t("./util");
        function l(e, t, i, n, o, s) {
          r.call(this, e, t, n, undefined, undefined, o, s);
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
          return r.prototype.resolve.call(this);
        };
        l.d = function (e, t, i) {
          if ("function" == typeof i) {
            i = a.decorateType(i).name;
          } else if (i && "object" == typeof i) {
            i = a.decorateEnum(i).name;
          }
          return function (n, o) {
            a.decorateType(n.constructor).add(new l(o, e, t, i));
          };
        };
        i.exports;
      }, function () {
        return {
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (e, t, i, n, o) {
        i.exports = a;
        var r = t("./object");
        ((a.prototype = Object.create(r.prototype)).constructor = a).className = "Method";
        var s = t("./util");
        function a(e, t, i, n, o, a, l, c, u) {
          if (s.isObject(o)) {
            l = o;
            o = a = undefined;
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
          r.call(this, e, l);
          this.type = t || "rpc";
          this.requestType = i;
          this.requestStream = !!o || undefined;
          this.responseType = n;
          this.responseStream = !!a || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = c;
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
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), r.prototype.resolve.call(this));
        };
        i.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (e, t, i, n, o) {
        i.exports = c;
        var r = t("./namespace");
        ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Service";
        var s = t("./method");
        var a = t("./util");
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
          var i = new c(e, t.options);
          if (t.methods) {
            var n = Object.keys(t.methods);
            for (var o = 0; o < n.length; ++o) {
              i.add(s.fromJSON(n[o], t.methods[n[o]]));
            }
          }
          if (t.nested) {
            i.addJSON(t.nested);
          }
          i.comment = t.comment;
          return i;
        };
        c.prototype.toJSON = function (e) {
          var t = r.prototype.toJSON.call(this, e);
          var i = !!e && Boolean(e.keepComments);
          return a.toObject(["options", t && t.options || undefined, "methods", r.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", i ? this.comment : undefined]);
        };
        Object.defineProperty(c.prototype, "methodsArray", {
          get: function () {
            return this._methodsArray || (this._methodsArray = a.toArray(this.methods));
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
          return e instanceof s ? (this.methods[e.name] = e, e.parent = this, u(this)) : r.prototype.add.call(this, e);
        };
        c.prototype.remove = function (e) {
          if (e instanceof s) {
            if (this.methods[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.methods[e.name];
            e.parent = null;
            return u(this);
          }
          return r.prototype.remove.call(this, e);
        };
        c.prototype.create = function (e, t, i) {
          var n;
          var o = new l.Service(e, t, i);
          for (var r = 0; r < this.methodsArray.length; ++r) {
            var s = a.lcFirst((n = this._methodsArray[r]).resolve().name).replace(/[^$\w_]/g, "");
            o[s] = a.codegen(["r", "c"], a.isReserved(s) ? s + "_" : s)("return this.rpcCall(m,q,s,r,c)")({
              m: n,
              q: n.resolvedRequestType.ctor,
              s: n.resolvedResponseType.ctor
            });
          }
          return o;
        };
        i.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./rpc": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (e, t, i, n, o) {
        i.exports = s;
        var r = t("./util/minimal");
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
          return this.$type.toObject(this, r.toJSONOptions);
        };
        i.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (e, t, i, n, o) {
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
            var o = n.resolvedType instanceof r ? "int32" : n.type;
            var c = "m" + a.safeProp(n.name);
            t("case %i: {", n.id);
            if (n.map) {
              t("if(%s===util.emptyObject)", c)("%s={}", c)("var c2 = r.uint32()+r.pos");
              if (undefined !== s.defaults[n.keyType]) {
                t("k=%j", s.defaults[n.keyType]);
              } else {
                t("k=null");
              }
              if (undefined !== s.defaults[o]) {
                t("value=%j", s.defaults[o]);
              } else {
                t("value=null");
              }
              t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", n.keyType)("case 2:");
              if (undefined === s.basic[o]) {
                t("value=types[%i].decode(r,r.uint32())", i);
              } else {
                t("value=r.%s()", o);
              }
              t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
              if (undefined !== s.long[n.keyType]) {
                t("%s[typeof k===\"object\"?util.longToHash(k):k]=value", c);
              } else {
                t("%s[k]=value", c);
              }
            } else if (n.repeated) {
              t("if(!(%s&&%s.length))", c, c)("%s=[]", c);
              if (undefined !== s.packed[o]) {
                t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", c, o)("}else");
              }
              if (undefined === s.basic[o]) {
                t(n.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", c, i);
              } else {
                t("%s.push(r.%s())", c, o);
              }
            } else if (undefined === s.basic[o]) {
              t(n.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", c, i);
            } else {
              t("%s=r.%s()", c, o);
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
        var r = t("./enum");
        var s = t("./types");
        var a = t("./util");
        i.exports;
      }, function () {
        return {
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (e, t, i, n, o) {
        i.exports = function (e) {
          var t = s.codegen(["m"], e.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var i = e.oneofsArray;
          var n = {};
          if (i.length) {
            t("var p={}");
          }
          for (var o = 0; o < e.fieldsArray.length; ++o) {
            var r = e._fieldsArray[o].resolve();
            var u = "m" + s.safeProp(r.name);
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
                var m = s.safeProp(r.partOf.name);
                if (1 === n[r.partOf.name]) {
                  t("if(p%s===1)", m)("return%j", r.partOf.name + ": multiple values");
                }
                n[r.partOf.name] = 1;
                t("p%s=1", m);
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
        var s = t("./util");
        function l(e, t, i, n) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof r) {
              e("switch(%s){", n)("default:")("return%j", t.name + ": " + "enum value" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              var o = Object.keys(t.resolvedType.values);
              for (var s = 0; s < o.length; ++s) {
                e("case %i:", t.resolvedType.values[o[s]]);
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
        function c(e, t, i) {
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
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (e, t, i, n, o) {
        var s = t("./enum");
        var a = t("./util");
        function l(e, t, i, n) {
          var o = false;
          if (t.resolvedType) {
            if (t.resolvedType instanceof s) {
              e("switch(d%s){", n);
              var r = t.resolvedType.values;
              var a = Object.keys(r);
              for (var l = 0; l < a.length; ++l) {
                if (!(r[a[l]] !== t.typeDefault || o)) {
                  e("default:")("if(typeof(d%s)===\"number\"){m%s=d%s;break}", n, n, n);
                  if (!t.repeated) {
                    e("break");
                  }
                  o = true;
                }
                e("case%j:", a[l])("case %i:", r[a[l]])("m%s=%j", n, r[a[l]])("break");
              }
              e("}");
            } else {
              e("if(typeof d%s!==\"object\")", n)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, i, n);
            }
          } else {
            var c = false;
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
                c = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, c)("else if(typeof d%s===\"string\")", n)("m%s=parseInt(d%s,10)", n, n)("else if(typeof d%s===\"number\")", n)("m%s=d%s", n, n)("else if(typeof d%s===\"object\")", n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, c ? "true" : "");
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
        function c(e, t, i, n) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof s) {
              e("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", n, i, n, n, i, n, n);
            } else {
              e("d%s=types[%i].toObject(m%s,o)", n, i, n);
            }
          } else {
            var o = false;
            switch (t.type) {
              case "double":
              case "float":
                e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
                break;
              case "uint64":
                o = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(typeof m%s===\"number\")", n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, o ? "true" : "", n);
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
            var o = t[n].resolve();
            var r = a.safeProp(o.name);
            if (o.map) {
              i("if(d%s){", r)("if(typeof d%s!==\"object\")", r)("throw TypeError(%j)", o.fullName + ": object expected")("m%s={}", r)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", r);
              l(i, o, n, r + "[ks[i]]")("}")("}");
            } else if (o.repeated) {
              i("if(d%s){", r)("if(!Array.isArray(d%s))", r)("throw TypeError(%j)", o.fullName + ": array expected")("m%s=[]", r)("for(var i=0;i<d%s.length;++i){", r);
              l(i, o, n, r + "[i]")("}")("}");
            } else {
              if (!(o.resolvedType instanceof s)) {
                i("if(d%s!=null){", r);
              }
              l(i, o, n, r);
              if (!(o.resolvedType instanceof s)) {
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
          var o = [];
          var r = [];
          for (var l = 0; l < t.length; ++l) {
            if (!t[l].partOf) {
              (t[l].resolve().repeated ? n : t[l].map ? o : r).push(t[l]);
            }
          }
          if (n.length) {
            i("if(o.arrays||o.defaults){");
            for (l = 0; l < n.length; ++l) {
              i("d%s=[]", a.safeProp(n[l].name));
            }
            i("}");
          }
          if (o.length) {
            i("if(o.objects||o.defaults){");
            for (l = 0; l < o.length; ++l) {
              i("d%s={}", a.safeProp(o[l].name));
            }
            i("}");
          }
          if (r.length) {
            i("if(o.defaults){");
            for (l = 0; l < r.length; ++l) {
              var u = r[l];
              var m = a.safeProp(u.name);
              if (u.resolvedType instanceof s) {
                i("d%s=o.enums===String?%j:%j", m, u.resolvedType.valuesById[u.typeDefault], u.typeDefault);
              } else if (u.long) {
                i("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", m)("}else")("d%s=o.longs===String?%j:%i", m, u.typeDefault.toString(), u.typeDefault.toNumber());
              } else if (u.bytes) {
                var p = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
                i("if(o.bytes===String)d%s=%j", m, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", m, p)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", m, m)("}");
              } else {
                i("d%s=%j", m, u.typeDefault);
              }
            }
            i("}");
          }
          var h = false;
          for (l = 0; l < t.length; ++l) {
            u = t[l];
            var _ = e._fieldsArray.indexOf(u);
            m = a.safeProp(u.name);
            if (u.map) {
              if (!h) {
                h = true;
                i("var ks2");
              }
              i("if(m%s&&(ks2=Object.keys(m%s)).length){", m, m)("d%s={}", m)("for(var j=0;j<ks2.length;++j){");
              c(i, u, _, m + "[ks2[j]]")("}");
            } else if (u.repeated) {
              i("if(m%s&&m%s.length){", m, m)("d%s=[]", m)("for(var j=0;j<m%s.length;++j){", m);
              c(i, u, _, m + "[j]")("}");
            } else {
              i("if(m%s!=null&&m.hasOwnProperty(%j)){", m, u.name);
              c(i, u, _, m);
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
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (e, t, i, n, o) {
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
              var o = this.lookup(n);
              if (o) {
                e = o.decode(e.value);
              }
            }
            if (!(e instanceof this.ctor) && e instanceof s) {
              var r = e.$type.toObject(e, t);
              if ("" === i) {
                i = "type.googleapis.com/";
              }
              n = i + ("." === e.$type.fullName[0] ? e.$type.fullName.slice(1) : e.$type.fullName);
              r["@type"] = n;
              return r;
            }
            return this.toObject(e, t);
          }
        };
        i.exports;
      }, function () {
        return {
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (e, t, i, n, o) {
        i.exports = b;
        var r = t("./namespace");
        ((b.prototype = Object.create(r.prototype)).constructor = b).className = "Type";
        var s = t("./enum");
        var a = t("./oneof");
        var l = t("./field");
        var c = t("./mapfield");
        var u = t("./service");
        var m = t("./message");
        var p = t("./reader");
        var h = t("./writer");
        var _ = t("./util");
        var d = t("./encoder");
        var f = t("./decoder");
        var y = t("./verifier");
        var g = t("./converter");
        var S = t("./wrappers");
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
              return this._fieldsArray || (this._fieldsArray = _.toArray(this.fields));
            }
          },
          oneofsArray: {
            get: function () {
              return this._oneofsArray || (this._oneofsArray = _.toArray(this.oneofs));
            }
          },
          ctor: {
            get: function () {
              return this._ctor || (this.ctor = b.generateConstructor(this)());
            },
            set: function (e) {
              var t = e.prototype;
              if (!(t instanceof m)) {
                (e.prototype = new m()).constructor = e;
                _.merge(e.prototype, t);
              }
              e.$type = e.prototype.$type = this;
              _.merge(e, m, true);
              this._ctor = e;
              for (var i = 0; i < this.fieldsArray.length; ++i) {
                this._fieldsArray[i].resolve();
              }
              var n = {};
              for (i = 0; i < this.oneofsArray.length; ++i) {
                n[this._oneofsArray[i].resolve().name] = {
                  get: _.oneOfGetter(this._oneofsArray[i].oneof),
                  set: _.oneOfSetter(this._oneofsArray[i].oneof)
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
          var i = _.codegen(["p"], e.name);
          for (var n = 0; n < e.fieldsArray.length; ++n) {
            if ((t = e._fieldsArray[n]).map) {
              i("this%s={}", _.safeProp(t.name));
            } else if (t.repeated) {
              i("this%s=[]", _.safeProp(t.name));
            }
          }
          return i("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        b.fromJSON = function (e, t) {
          var i = new b(e, t.options);
          i.extensions = t.extensions;
          i.reserved = t.reserved;
          var n = Object.keys(t.fields);
          for (var o = 0; o < n.length; ++o) {
            i.add((undefined !== t.fields[n[o]].keyType ? c.fromJSON : l.fromJSON)(n[o], t.fields[n[o]]));
          }
          if (t.oneofs) {
            n = Object.keys(t.oneofs);
            for (o = 0; o < n.length; ++o) {
              i.add(a.fromJSON(n[o], t.oneofs[n[o]]));
            }
          }
          if (t.nested) {
            n = Object.keys(t.nested);
            for (o = 0; o < n.length; ++o) {
              var m = t.nested[n[o]];
              i.add((undefined !== m.id ? l.fromJSON : undefined !== m.fields ? b.fromJSON : undefined !== m.values ? s.fromJSON : undefined !== m.methods ? u.fromJSON : r.fromJSON)(n[o], m));
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
          var t = r.prototype.toJSON.call(this, e);
          var i = !!e && Boolean(e.keepComments);
          return _.toObject(["options", t && t.options || undefined, "oneofs", r.arrayToJSON(this.oneofsArray, e), "fields", r.arrayToJSON(this.fieldsArray.filter(function (e) {
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
            return v(this);
          }
          return e instanceof a ? (this.oneofs || (this.oneofs = {}), this.oneofs[e.name] = e, e.onAdd(this), v(this)) : r.prototype.add.call(this, e);
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
          for (var i = 0; i < this.fieldsArray.length; ++i) {
            t.push(this._fieldsArray[i].resolve().resolvedType);
          }
          this.encode = d(this)({
            Writer: h,
            types: t,
            util: _
          });
          this.decode = f(this)({
            Reader: p,
            types: t,
            util: _
          });
          this.verify = y(this)({
            types: t,
            util: _
          });
          this.fromObject = g.fromObject(this)({
            types: t,
            util: _
          });
          this.toObject = g.toObject(this)({
            types: t,
            util: _
          });
          var n = S[e];
          if (n) {
            var o = Object.create(this);
            o.fromObject = this.fromObject;
            this.fromObject = n.fromObject.bind(o);
            o.toObject = this.toObject;
            this.toObject = n.toObject.bind(o);
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
          if (!(e instanceof p)) {
            e = p.create(e);
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
            _.decorateType(t, e);
          };
        };
        i.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./encoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./wrappers": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (e, t, i, n, o) {
        i.exports = h;
        var r = t("./namespace");
        ((h.prototype = Object.create(r.prototype)).constructor = h).className = "Root";
        var s;
        var a;
        var l;
        var c = t("./field");
        var u = t("./enum");
        var m = t("./oneof");
        var p = t("./util");
        function h(e) {
          r.call(this, "", e);
          this.deferred = [];
          this.files = [];
        }
        function _() {}
        h.fromJSON = function (e, t) {
          if (!t) {
            t = new h();
          }
          if (e.options) {
            t.setOptions(e.options);
          }
          return t.addJSON(e.nested);
        };
        h.prototype.resolvePath = p.path.resolve;
        h.prototype.fetch = p.fetch;
        h.prototype.load = function e(t, i, n) {
          if ("function" == typeof i) {
            n = i;
            i = undefined;
          }
          var o = this;
          if (!n) {
            return p.asPromise(e, o, t, i);
          }
          var r = n === _;
          function s(e, t) {
            if (n) {
              if (r) {
                throw e;
              }
              var i = n;
              n = null;
              i(e, t);
            }
          }
          function c(e) {
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
              if (p.isString(t) && "{" === t.charAt(0)) {
                t = JSON.parse(t);
              }
              if (p.isString(t)) {
                a.filename = e;
                var n;
                var l = a(t, o, i);
                var u = 0;
                if (l.imports) {
                  for (; u < l.imports.length; ++u) {
                    if (n = c(l.imports[u]) || o.resolvePath(e, l.imports[u])) {
                      m(n);
                    }
                  }
                }
                if (l.weakImports) {
                  for (u = 0; u < l.weakImports.length; ++u) {
                    if (n = c(l.weakImports[u]) || o.resolvePath(e, l.weakImports[u])) {
                      m(n, true);
                    }
                  }
                }
              } else {
                o.setOptions(t.options).addJSON(t.nested);
              }
            } catch (e) {
              s(e);
            }
            if (!(r || h)) {
              s(null, o);
            }
          }
          function m(e, t) {
            e = c(e) || e;
            if (!(o.files.indexOf(e) > -1)) {
              o.files.push(e);
              if (e in l) {
                if (r) {
                  u(e, l[e]);
                } else {
                  ++h;
                  setTimeout(function () {
                    --h;
                    u(e, l[e]);
                  });
                }
              } else if (r) {
                var i;
                try {
                  i = p.fs.readFileSync(e).toString("utf8");
                } catch (e) {
                  return void (t || s(e));
                }
                u(e, i);
              } else {
                ++h;
                o.fetch(e, function (i, r) {
                  --h;
                  if (n) {
                    if (i) {
                      if (t) {
                        if (!h) {
                          s(null, o);
                        }
                      } else {
                        s(i);
                      }
                    } else {
                      u(e, r);
                    }
                  }
                });
              }
            }
          }
          var h = 0;
          if (p.isString(t)) {
            t = [t];
          }
          var d;
          for (var f = 0; f < t.length; ++f) {
            if (d = o.resolvePath("", t[f])) {
              m(d);
            }
          }
          if (r) {
            return o;
          }
          if (!h) {
            s(null, o);
          }
        };
        h.prototype.loadSync = function (e, t) {
          if (!p.isNode) {
            throw Error("not supported");
          }
          return this.load(e, t, _);
        };
        h.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (e) {
              return "'extend " + e.extend + "' in " + e.parent.fullName;
            }).join(", "));
          }
          return r.prototype.resolveAll.call(this);
        };
        var d = /^[A-Z]/;
        function f(e, t) {
          var i = t.parent.lookup(t.extend);
          if (i) {
            var n = new c(t.fullName, t.id, t.type, t.rule, undefined, t.options);
            if (!i.get(n.name)) {
              n.declaringField = t;
              t.extensionField = n;
              i.add(n);
            }
            return true;
          }
          return false;
        }
        h.prototype._handleAdd = function (e) {
          if (e instanceof c) {
            if (!(undefined === e.extend || e.extensionField || f(0, e))) {
              this.deferred.push(e);
            }
          } else if (e instanceof u) {
            if (d.test(e.name)) {
              e.parent[e.name] = e.values;
            }
          } else if (!(e instanceof m)) {
            if (e instanceof s) {
              for (var t = 0; t < this.deferred.length;) {
                if (f(0, this.deferred[t])) {
                  this.deferred.splice(t, 1);
                } else {
                  ++t;
                }
              }
            }
            for (var i = 0; i < e.nestedArray.length; ++i) {
              this._handleAdd(e._nestedArray[i]);
            }
            if (d.test(e.name)) {
              e.parent[e.name] = e;
            }
          }
        };
        h.prototype._handleRemove = function (e) {
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
            if (d.test(e.name)) {
              delete e.parent[e.name];
            }
          } else if (e instanceof r) {
            for (var i = 0; i < e.nestedArray.length; ++i) {
              this._handleRemove(e._nestedArray[i]);
            }
            if (d.test(e.name)) {
              delete e.parent[e.name];
            }
          }
        };
        h._configure = function (e, t, i) {
          s = e;
          a = t;
          l = i;
        };
        i.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (e, t, i, n, o) {
        var r;
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
            var o = e[i++];
            if (undefined !== o) {
              t[n] = o;
            }
          }
          return t;
        };
        var c = /\\/g;
        var u = /"/g;
        a.isReserved = function (e) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e);
        };
        a.safeProp = function (e) {
          return !/^[$\w_]+$/.test(e) || a.isReserved(e) ? "[\"" + e.replace(c, "\\\\").replace(u, "\\\"") + "\"]" : "." + e;
        };
        a.ucFirst = function (e) {
          return e.charAt(0).toUpperCase() + e.substring(1);
        };
        var m = /_([a-z])/g;
        a.camelCase = function (e) {
          return e.substring(0, 1) + e.substring(1).replace(m, function (e, t) {
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
          if (!r) {
            r = t("./type");
          }
          var n = new r(i || e.name);
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
        var p = 0;
        a.decorateEnum = function (e) {
          if (e.$type) {
            return e.$type;
          }
          if (!s) {
            s = t("./enum");
          }
          var i = new s("Enum" + p++, e);
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
            var o = i.shift();
            if ("__proto__" === o || "prototype" === o) {
              return t;
            }
            if (i.length > 0) {
              t[o] = e(t[o] || {}, i, n);
            } else {
              var r = t[o];
              if (r) {
                n = [].concat(r).concat(n);
              }
              t[o] = n;
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
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./roots": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          "@protobufjs/codegen": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          "@protobufjs/fetch": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          "@protobufjs/path": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (e, t, i, n, o) {
        i.exports = a;
        a.className = "ReflectionObject";
        var r;
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
          if (t instanceof r) {
            t._handleAdd(this);
          }
        };
        a.prototype.onRemove = function (e) {
          var t = e.root;
          if (t instanceof r) {
            t._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        a.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof r) {
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
            var o = n.find(function (t) {
              return Object.prototype.hasOwnProperty.call(t, e);
            });
            if (o) {
              var r = o[e];
              s.setProperty(r, i, t);
            } else {
              (o = {})[e] = s.setProperty({}, i, t);
              n.push(o);
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
          r = e;
        };
        i.exports;
      }, function () {
        return {
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (e, t, i, n, o) {
        i.exports = l;
        var r = t("./object");
        ((l.prototype = Object.create(r.prototype)).constructor = l).className = "Enum";
        var s = t("./namespace");
        var a = t("./util");
        function l(e, t, i, n, o, s) {
          r.call(this, e, i);
          if (t && "object" != typeof t) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = n;
          this.comments = o || {};
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
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (e, t, i, n, o) {
        i.exports = function (e) {
          var t;
          var i = a.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()");
          var n = e.fieldsArray.slice().sort(a.compareFieldsById);
          for (var o = 0; o < n.length; ++o) {
            var c = n[o].resolve();
            var u = e._fieldsArray.indexOf(c);
            var m = c.resolvedType instanceof r ? "int32" : c.type;
            var p = s.basic[m];
            t = "m" + a.safeProp(c.name);
            if (c.map) {
              i("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, c.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (c.id << 3 | 2) >>> 0, 8 | s.mapKey[c.keyType], c.keyType);
              if (undefined === p) {
                i("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, t);
              } else {
                i(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | p, m, t);
              }
              i("}")("}");
            } else if (c.repeated) {
              i("if(%s!=null&&%s.length){", t, t);
              if (c.packed && undefined !== s.packed[m]) {
                i("w.uint32(%i).fork()", (c.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", m, t)("w.ldelim()");
              } else {
                i("for(var i=0;i<%s.length;++i)", t);
                if (undefined === p) {
                  if (c.resolvedType.group) {
                    i("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t + "[i]", (c.id << 3 | 3) >>> 0, (c.id << 3 | 4) >>> 0);
                  } else {
                    i("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t + "[i]", (c.id << 3 | 2) >>> 0);
                  }
                } else {
                  i("w.uint32(%i).%s(%s[i])", (c.id << 3 | p) >>> 0, m, t);
                }
              }
              i("}");
            } else {
              if (c.optional) {
                i("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, c.name);
              }
              if (undefined === p) {
                if (c.resolvedType.group) {
                  i("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t, (c.id << 3 | 3) >>> 0, (c.id << 3 | 4) >>> 0);
                } else {
                  i("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t, (c.id << 3 | 2) >>> 0);
                }
              } else {
                i("w.uint32(%i).%s(%s)", (c.id << 3 | p) >>> 0, m, t);
              }
            }
          }
          return i("return w");
        };
        var r = t("./enum");
        var s = t("./types");
        var a = t("./util");
        i.exports;
      }, function () {
        return {
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (e, t, i, n, o) {
        var r = i.exports = t("./index-minimal");
        r.build = "light";
        r.load = function (e, t, i) {
          if ("function" == typeof t) {
            i = t;
            t = new r.Root();
          } else if (!t) {
            t = new r.Root();
          }
          return t.load(e, i);
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
        i.exports;
      }, function () {
        return {
          "./index-minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          "./encoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./wrappers": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (e, t, i, n, o) {
        i.exports = d;
        var r = /[\s{}=;:[\],'"()<>]/g;
        var s = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var a = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var l = /^ *[*/]+ */;
        var c = /^\s*\*?\/*/;
        var u = /\n/g;
        var m = /\s/;
        var p = /\\(.?)/g;
        var h = {
          0: "\0",
          r: "\r",
          n: "\n",
          t: "\t"
        };
        function _(e) {
          return e.replace(p, function (e, t) {
            switch (t) {
              case "\\":
              case "":
                return t;
              default:
                return h[t] || "";
            }
          });
        }
        function d(e, t) {
          e = e.toString();
          var i = 0;
          var n = e.length;
          var o = 1;
          var p = 0;
          var h = {};
          var d = [];
          var f = null;
          function S(i, n, r) {
            var s;
            var a = {
              type: e.charAt(i++),
              lineEmpty: false,
              leading: r
            };
            var m = i - (t ? 2 : 3);
            do {
              if (--m < 0 || "\n" === (s = e.charAt(m))) {
                a.lineEmpty = true;
                break;
              }
            } while (" " === s || "\t" === s);
            var _ = e.substring(i, n).split(u);
            for (var d = 0; d < _.length; ++d) {
              _[d] = _[d].replace(t ? c : l, "").trim();
            }
            a.text = _.join("\n").trim();
            h[o] = a;
            p = o;
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
            if (d.length > 0) {
              return d.shift();
            }
            if (f) {
              return function () {
                var t = "'" === f ? a : s;
                t.lastIndex = i - 1;
                var n = t.exec(e);
                if (!n) {
                  throw Error("illegal string (line " + o + ")");
                }
                i = t.lastIndex;
                R(f);
                f = null;
                return _(n[1]);
              }();
            }
            var l;
            var c;
            var u;
            var p;
            var h;
            var w = 0 === i;
            do {
              if (i === n) {
                return null;
              }
              for (l = false; m.test(u = e.charAt(i));) {
                if ("\n" === u) {
                  w = true;
                  ++o;
                }
                if (++i === n) {
                  return null;
                }
              }
              if ("/" === e.charAt(i)) {
                if (++i === n) {
                  throw Error("illegal comment (line " + o + ")");
                }
                if ("/" === e.charAt(i)) {
                  if (t) {
                    p = i;
                    h = false;
                    if (b(i - 1)) {
                      h = true;
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
                    if (h) {
                      S(p, i, w);
                      w = true;
                    }
                    o++;
                    l = true;
                  } else {
                    for (h = "/" === e.charAt(p = i + 1); "\n" !== e.charAt(++i);) {
                      if (i === n) {
                        return null;
                      }
                    }
                    ++i;
                    if (h) {
                      S(p, i - 1, w);
                      w = true;
                    }
                    ++o;
                    l = true;
                  }
                } else {
                  if ("*" !== (u = e.charAt(i))) {
                    return "/";
                  }
                  p = i + 1;
                  h = t || "*" === e.charAt(p);
                  do {
                    if ("\n" === u) {
                      ++o;
                    }
                    if (++i === n) {
                      throw Error("illegal comment (line " + o + ")");
                    }
                    c = u;
                    u = e.charAt(i);
                  } while ("*" !== c || "/" !== u);
                  ++i;
                  if (h) {
                    S(p, i - 2, w);
                    w = true;
                  }
                  l = true;
                }
              }
            } while (l);
            var A = i;
            r.lastIndex = 0;
            if (!r.test(e.charAt(A++))) {
              for (; A < n && !r.test(e.charAt(A));) {
                ++A;
              }
            }
            var $ = e.substring(i, i = A);
            if (!("\"" !== $ && "'" !== $)) {
              f = $;
            }
            return $;
          }
          function R(e) {
            d.push(e);
          }
          function A() {
            if (!d.length) {
              var e = w();
              if (null === e) {
                return null;
              }
              R(e);
            }
            return d[0];
          }
          return Object.defineProperty({
            next: w,
            peek: A,
            push: R,
            skip: function (e, t) {
              var i = A();
              if (i === e) {
                w();
                return true;
              }
              if (!t) {
                throw Error("illegal " + ("token '" + i + "', '" + e + "' expected") + " (line " + o + ")");
              }
              return false;
            },
            cmnt: function (e) {
              var i;
              var n = null;
              if (undefined === e) {
                i = h[o - 1];
                delete h[o - 1];
                if (i && (t || "*" === i.type || i.lineEmpty)) {
                  n = i.leading ? i.text : null;
                }
              } else {
                if (p < e) {
                  A();
                }
                i = h[e];
                delete h[e];
                if (!(!i || i.lineEmpty || !t && "/" !== i.type)) {
                  n = i.leading ? null : i.text;
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
        d.unescape = _;
        i.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (e, t, i, n, o) {
        i.exports = D;
        D.filename = null;
        D.defaults = {
          keepCase: false
        };
        var r = t("./tokenize");
        var s = t("./root");
        var a = t("./type");
        var l = t("./field");
        var c = t("./mapfield");
        var u = t("./oneof");
        var m = t("./enum");
        var p = t("./service");
        var h = t("./method");
        var _ = t("./types");
        var d = t("./util");
        var f = /^[1-9][0-9]*$/;
        var y = /^-?[1-9][0-9]*$/;
        var g = /^0[x][0-9a-fA-F]+$/;
        var S = /^-?0[x][0-9a-fA-F]+$/;
        var b = /^0[0-7]+$/;
        var v = /^-?0[0-7]+$/;
        var w = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var R = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var A = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var $ = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function D(e, t, i) {
          if (!(t instanceof s)) {
            i = t;
            t = new s();
          }
          if (!i) {
            i = D.defaults;
          }
          var n;
          var o;
          var N;
          var P;
          var L;
          var T = i.preferTrailingComment || false;
          var I = r(e, i.alternateCommentMode || false);
          var E = I.next;
          var O = I.push;
          var k = I.peek;
          var W = I.skip;
          var C = I.cmnt;
          var M = true;
          var j = false;
          var B = t;
          var x = i.keepCase ? function (e) {
            return e;
          } : d.camelCase;
          function G(e, t, i) {
            var n = D.filename;
            if (!i) {
              D.filename = null;
            }
            return Error("illegal " + (t || "token") + " '" + e + "' (" + (n ? n + ", " : "") + "line " + I.line + ")");
          }
          function U() {
            var e;
            var t = [];
            do {
              if ("\"" !== (e = E()) && "'" !== e) {
                throw G(e);
              }
              t.push(E());
              W(e);
              e = k();
            } while ("\"" === e || "'" === e);
            return t.join("");
          }
          function V(e) {
            var t = E();
            switch (t) {
              case "'":
              case "\"":
                O(t);
                return U();
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
                if (f.test(e)) {
                  return i * parseInt(e, 10);
                }
                if (g.test(e)) {
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
              if (e && A.test(t)) {
                return t;
              }
              throw G(t, "value");
            }
          }
          function F(e, t) {
            var i;
            var n;
            do {
              if (!t || "\"" !== (i = k()) && "'" !== i) {
                e.push([n = z(E()), W("to", true) ? z(E()) : n]);
              } else {
                e.push(U());
              }
            } while (W(",", true));
            var o = {
              options: undefined,
              setOption: function (e, t) {
                if (undefined === this.options) {
                  this.options = {};
                }
                this.options[e] = t;
              }
            };
            J(o, function (e) {
              if ("option" !== e) {
                throw G(e);
              }
              ee(o, e);
              W(";");
            }, function () {
              ne(o);
            });
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
              throw G(e, "id");
            }
            if (y.test(e)) {
              return parseInt(e, 10);
            }
            if (S.test(e)) {
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
            n = E();
            if (!A.test(n)) {
              throw G(n, "name");
            }
            B = B.define(n);
            W(";");
          }
          function X() {
            var e;
            var t = k();
            switch (t) {
              case "weak":
                e = N || (N = []);
                E();
                break;
              case "public":
                E();
              default:
                e = o || (o = []);
            }
            t = U();
            W(";");
            e.push(t);
          }
          function K() {
            W("=");
            P = U();
            if (!(j = "proto3" === P) && "proto2" !== P) {
              throw G(P, "syntax");
            }
            t.setOption("syntax", P);
            W(";");
          }
          function q(e, t) {
            switch (t) {
              case "option":
                ee(e, t);
                W(";");
                return true;
              case "message":
                Q(e, t);
                return true;
              case "enum":
                Y(e, t);
                return true;
              case "service":
                (function (e, t) {
                  if (!R.test(t = E())) {
                    throw G(t, "service name");
                  }
                  var i = new p(t);
                  J(i, function (e) {
                    if (!q(i, e)) {
                      if ("rpc" !== e) {
                        throw G(e);
                      }
                      !function (e, t) {
                        var i = C();
                        var n = t;
                        if (!R.test(t = E())) {
                          throw G(t, "name");
                        }
                        var o;
                        var r;
                        var s;
                        var a;
                        var l = t;
                        W("(");
                        if (W("stream", true)) {
                          r = true;
                        }
                        if (!A.test(t = E())) {
                          throw G(t);
                        }
                        o = t;
                        W(")");
                        W("returns");
                        W("(");
                        if (W("stream", true)) {
                          a = true;
                        }
                        if (!A.test(t = E())) {
                          throw G(t);
                        }
                        s = t;
                        W(")");
                        var c = new h(l, n, o, s, r, a);
                        c.comment = i;
                        J(c, function (e) {
                          if ("option" !== e) {
                            throw G(e);
                          }
                          ee(c, e);
                          W(";");
                        });
                        e.add(c);
                      }(i, e);
                    }
                  });
                  e.add(i);
                })(e, t);
                return true;
              case "extend":
                (function (e, t) {
                  if (!A.test(t = E())) {
                    throw G(t, "reference");
                  }
                  var i = t;
                  J(null, function (t) {
                    switch (t) {
                      case "required":
                      case "repeated":
                        Z(e, t, i);
                        break;
                      case "optional":
                        Z(e, j ? "proto3_optional" : "optional", i);
                        break;
                      default:
                        if (!j || !A.test(t)) {
                          throw G(t);
                        }
                        O(t);
                        Z(e, "optional", i);
                    }
                  });
                })(e, t);
                return true;
            }
            return false;
          }
          function J(e, t, i) {
            var n = I.line;
            if (e) {
              if ("string" != typeof e.comment) {
                e.comment = C();
              }
              e.filename = D.filename;
            }
            if (W("{", true)) {
              for (var o; "}" !== (o = E());) {
                t(o);
              }
              W(";", true);
            } else {
              if (i) {
                i();
              }
              W(";");
              if (e && ("string" != typeof e.comment || T)) {
                e.comment = C(n) || e.comment;
              }
            }
          }
          function Q(e, t) {
            if (!R.test(t = E())) {
              throw G(t, "type name");
            }
            var i = new a(t);
            J(i, function (e) {
              if (!q(i, e)) {
                switch (e) {
                  case "map":
                    !function (e) {
                      W("<");
                      var t = E();
                      if (undefined === _.mapKey[t]) {
                        throw G(t, "type");
                      }
                      W(",");
                      var i = E();
                      if (!A.test(i)) {
                        throw G(i, "type");
                      }
                      W(">");
                      var n = E();
                      if (!R.test(n)) {
                        throw G(n, "name");
                      }
                      W("=");
                      var o = new c(x(n), z(E()), t, i);
                      J(o, function (e) {
                        if ("option" !== e) {
                          throw G(e);
                        }
                        ee(o, e);
                        W(";");
                      }, function () {
                        ne(o);
                      });
                      e.add(o);
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
                      if (!R.test(t = E())) {
                        throw G(t, "name");
                      }
                      var i = new u(x(t));
                      J(i, function (e) {
                        if ("option" === e) {
                          ee(i, e);
                          W(";");
                        } else {
                          O(e);
                          Z(i, "optional");
                        }
                      });
                      e.add(i);
                    }(i, e);
                    break;
                  case "extensions":
                    F(i.extensions || (i.extensions = []));
                    break;
                  case "reserved":
                    F(i.reserved || (i.reserved = []), true);
                    break;
                  default:
                    if (!j || !A.test(e)) {
                      throw G(e);
                    }
                    O(e);
                    Z(i, "optional");
                }
              }
            });
            e.add(i);
          }
          function Z(e, t, i) {
            var n = E();
            if ("group" !== n) {
              for (; n.endsWith(".") || k().startsWith(".");) {
                n += E();
              }
              if (!A.test(n)) {
                throw G(n, "type");
              }
              var o = E();
              if (!R.test(o)) {
                throw G(o, "name");
              }
              o = x(o);
              W("=");
              var r = new l(o, z(E()), n, t, i);
              J(r, function (e) {
                if ("option" !== e) {
                  throw G(e);
                }
                ee(r, e);
                W(";");
              }, function () {
                ne(r);
              });
              if ("proto3_optional" === t) {
                var s = new u("_" + o);
                r.setOption("proto3_optional", true);
                s.add(r);
                e.add(s);
              } else {
                e.add(r);
              }
              if (!(j || !r.repeated || undefined === _.packed[n] && undefined !== _.basic[n])) {
                r.setOption("packed", false, true);
              }
            } else {
              !function (e, t) {
                var i = E();
                if (!R.test(i)) {
                  throw G(i, "name");
                }
                var n = d.lcFirst(i);
                if (i === n) {
                  i = d.ucFirst(i);
                }
                W("=");
                var o = z(E());
                var r = new a(i);
                r.group = true;
                var s = new l(n, o, i, t);
                s.filename = D.filename;
                J(r, function (e) {
                  switch (e) {
                    case "option":
                      ee(r, e);
                      W(";");
                      break;
                    case "required":
                    case "repeated":
                      Z(r, e);
                      break;
                    case "optional":
                      Z(r, j ? "proto3_optional" : "optional");
                      break;
                    case "message":
                      Q(r, e);
                      break;
                    case "enum":
                      Y(r, e);
                      break;
                    default:
                      throw G(e);
                  }
                });
                e.add(r).add(s);
              }(e, t);
            }
          }
          function Y(e, t) {
            if (!R.test(t = E())) {
              throw G(t, "name");
            }
            var i = new m(t);
            J(i, function (e) {
              switch (e) {
                case "option":
                  ee(i, e);
                  W(";");
                  break;
                case "reserved":
                  F(i.reserved || (i.reserved = []), true);
                  break;
                default:
                  !function (e, t) {
                    if (!R.test(t)) {
                      throw G(t, "name");
                    }
                    W("=");
                    var i = z(E(), true);
                    var n = {
                      options: undefined,
                      setOption: function (e, t) {
                        if (undefined === this.options) {
                          this.options = {};
                        }
                        this.options[e] = t;
                      }
                    };
                    J(n, function (e) {
                      if ("option" !== e) {
                        throw G(e);
                      }
                      ee(n, e);
                      W(";");
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
            var i = W("(", true);
            if (!A.test(t = E())) {
              throw G(t, "name");
            }
            var n;
            var o = t;
            var r = o;
            if (i) {
              W(")");
              r = o = "(" + o + ")";
              t = k();
              if ($.test(t)) {
                n = t.slice(1);
                o += t;
                E();
              }
            }
            W("=");
            (function (e, t, i, n) {
              if (e.setParsedOption) {
                e.setParsedOption(t, i, n);
              }
            })(e, r, te(e, o), n);
          }
          function te(e, t) {
            if (W("{", true)) {
              for (var i = {}; !W("}", true);) {
                if (!R.test(L = E())) {
                  throw G(L, "name");
                }
                if (null === L) {
                  throw G(L, "end of input");
                }
                var n;
                var o = L;
                W(":", true);
                if ("{" === k()) {
                  n = te(e, t + "." + L);
                } else if ("[" === k()) {
                  var r;
                  n = [];
                  if (W("[", true)) {
                    do {
                      r = V(true);
                      n.push(r);
                    } while (W(",", true));
                    W("]");
                    if (undefined !== r) {
                      ie(e, t + "." + L, r);
                    }
                  }
                } else {
                  n = V(true);
                  ie(e, t + "." + L, n);
                }
                var s = i[o];
                if (s) {
                  n = [].concat(s).concat(n);
                }
                i[o] = n;
                W(",", true);
                W(";", true);
              }
              return i;
            }
            var a = V(true);
            ie(e, t, a);
            return a;
          }
          function ie(e, t, i) {
            if (e.setOption) {
              e.setOption(t, i);
            }
          }
          function ne(e) {
            if (W("[", true)) {
              do {
                ee(e, "option");
              } while (W(",", true));
              W("]");
            }
            return e;
          }
          for (; null !== (L = E());) {
            switch (L) {
              case "package":
                if (!M) {
                  throw G(L);
                }
                H();
                break;
              case "import":
                if (!M) {
                  throw G(L);
                }
                X();
                break;
              case "syntax":
                if (!M) {
                  throw G(L);
                }
                K();
                break;
              case "option":
                ee(B, L);
                W(";");
                break;
              default:
                if (q(B, L)) {
                  M = false;
                  continue;
                }
                throw G(L);
            }
          }
          D.filename = null;
          return {
            package: n,
            imports: o,
            weakImports: N,
            syntax: P,
            root: t
          };
        }
        i.exports;
      }, function () {
        return {
          "./tokenize": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (e, t, i, n, o) {
        i.exports = a;
        var r;
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
        a("timestamp", {
          Timestamp: r
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (e, t, i, n, o) {
        var r = i.exports = t("./index-light");
        r.build = "full";
        r.tokenize = t("./tokenize");
        r.parse = t("./parse");
        r.common = t("./common");
        r.Root._configure(r.Type, r.parse, r.common);
        i.exports;
      }, function () {
        return {
          "./index-light": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          "./tokenize": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./parse": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          "./common": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/index.js", function (e, t, i, n, o) {
        i.exports = t("./src/index");
        _cjsExports = i.exports;
      }, function () {
        return {
          "./src/index": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      loader.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/index.js");
      var _cjsExports$1;
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (e, t, i, n, o) {
        i.exports = t("./src/index-minimal");
        i.exports;
      }, function () {
        return {
          "./src/index-minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _dec$c;
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@old-rd1/crystal777deluxe-protocol/c7dproto.js", function (e, t, i, n, o) {
        var r;
        var s = t("protobufjs/minimal");
        var a = s.Reader;
        var l = s.Writer;
        var c = s.util;
        var u = s.roots.default || (s.roots.default = {});
        (r = {
          AwardData: function () {
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
            e.prototype.Mult = 0;
            e.prototype.Win = 0;
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
              if (null != e.Mult && Object.hasOwnProperty.call(e, "Mult")) {
                t.uint32(33).double(e.Mult);
              }
              if (null != e.Win && Object.hasOwnProperty.call(e, "Win")) {
                t.uint32(41).double(e.Win);
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
              for (var n = new u.c7dProto.AwardData(); e.pos < i;) {
                var o = e.uint32();
                switch (o >>> 3) {
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
                    n.Mult = e.double();
                    break;
                  case 5:
                    n.Win = e.double();
                    break;
                  default:
                    e.skipType(7 & o);
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
              return "object" != typeof e || null === e ? "object expected" : null != e.Symbol && e.hasOwnProperty("Symbol") && !c.isInteger(e.Symbol) ? "Symbol: integer expected" : null != e.Count && e.hasOwnProperty("Count") && !c.isInteger(e.Count) ? "Count: integer expected" : null != e.Line && e.hasOwnProperty("Line") && !c.isInteger(e.Line) ? "Line: integer expected" : null != e.Mult && e.hasOwnProperty("Mult") && "number" != typeof e.Mult ? "Mult: number expected" : null != e.Win && e.hasOwnProperty("Win") && "number" != typeof e.Win ? "Win: number expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.c7dProto.AwardData) {
                return e;
              }
              var t = new u.c7dProto.AwardData();
              if (null != e.Symbol) {
                t.Symbol = 0 | e.Symbol;
              }
              if (null != e.Count) {
                t.Count = 0 | e.Count;
              }
              if (null != e.Line) {
                t.Line = 0 | e.Line;
              }
              if (null != e.Mult) {
                t.Mult = Number(e.Mult);
              }
              if (null != e.Win) {
                t.Win = Number(e.Win);
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
                i.Mult = 0;
                i.Win = 0;
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
              if (null != e.Mult && e.hasOwnProperty("Mult")) {
                i.Mult = t.json && !isFinite(e.Mult) ? String(e.Mult) : e.Mult;
              }
              if (null != e.Win && e.hasOwnProperty("Win")) {
                i.Win = t.json && !isFinite(e.Win) ? String(e.Win) : e.Win;
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
              return e + "/c7dProto.AwardData";
            };
            return e;
          }(),
          SinglePlate: function () {
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
            e.prototype.PlateSymbol = c.emptyArray;
            e.prototype.AwardDataVec = c.emptyArray;
            e.prototype.Win = 0;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.PlateSymbol && e.PlateSymbol.length) {
                for (var i = 0; i < e.PlateSymbol.length; ++i) {
                  u.c7dProto.Column.encode(e.PlateSymbol[i], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.AwardDataVec && e.AwardDataVec.length) {
                for (i = 0; i < e.AwardDataVec.length; ++i) {
                  u.c7dProto.AwardData.encode(e.AwardDataVec[i], t.uint32(18).fork()).ldelim();
                }
              }
              if (null != e.Win && Object.hasOwnProperty.call(e, "Win")) {
                t.uint32(25).double(e.Win);
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
              for (var n = new u.c7dProto.SinglePlate(); e.pos < i;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (!(n.PlateSymbol && n.PlateSymbol.length)) {
                      n.PlateSymbol = [];
                    }
                    n.PlateSymbol.push(u.c7dProto.Column.decode(e, e.uint32()));
                    break;
                  case 2:
                    if (!(n.AwardDataVec && n.AwardDataVec.length)) {
                      n.AwardDataVec = [];
                    }
                    n.AwardDataVec.push(u.c7dProto.AwardData.decode(e, e.uint32()));
                    break;
                  case 3:
                    n.Win = e.double();
                    break;
                  default:
                    e.skipType(7 & o);
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
                  if (i = u.c7dProto.Column.verify(e.PlateSymbol[t])) {
                    return "PlateSymbol." + i;
                  }
                }
              }
              if (null != e.AwardDataVec && e.hasOwnProperty("AwardDataVec")) {
                if (!Array.isArray(e.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (t = 0; t < e.AwardDataVec.length; ++t) {
                  var i;
                  if (i = u.c7dProto.AwardData.verify(e.AwardDataVec[t])) {
                    return "AwardDataVec." + i;
                  }
                }
              }
              return null != e.Win && e.hasOwnProperty("Win") && "number" != typeof e.Win ? "Win: number expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.c7dProto.SinglePlate) {
                return e;
              }
              var t = new u.c7dProto.SinglePlate();
              if (e.PlateSymbol) {
                if (!Array.isArray(e.PlateSymbol)) {
                  throw TypeError(".c7dProto.SinglePlate.PlateSymbol: array expected");
                }
                t.PlateSymbol = [];
                for (var i = 0; i < e.PlateSymbol.length; ++i) {
                  if ("object" != typeof e.PlateSymbol[i]) {
                    throw TypeError(".c7dProto.SinglePlate.PlateSymbol: object expected");
                  }
                  t.PlateSymbol[i] = u.c7dProto.Column.fromObject(e.PlateSymbol[i]);
                }
              }
              if (e.AwardDataVec) {
                if (!Array.isArray(e.AwardDataVec)) {
                  throw TypeError(".c7dProto.SinglePlate.AwardDataVec: array expected");
                }
                t.AwardDataVec = [];
                for (i = 0; i < e.AwardDataVec.length; ++i) {
                  if ("object" != typeof e.AwardDataVec[i]) {
                    throw TypeError(".c7dProto.SinglePlate.AwardDataVec: object expected");
                  }
                  t.AwardDataVec[i] = u.c7dProto.AwardData.fromObject(e.AwardDataVec[i]);
                }
              }
              if (null != e.Win) {
                t.Win = Number(e.Win);
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
                i.Win = 0;
              }
              if (e.PlateSymbol && e.PlateSymbol.length) {
                i.PlateSymbol = [];
                for (var n = 0; n < e.PlateSymbol.length; ++n) {
                  i.PlateSymbol[n] = u.c7dProto.Column.toObject(e.PlateSymbol[n], t);
                }
              }
              if (e.AwardDataVec && e.AwardDataVec.length) {
                i.AwardDataVec = [];
                for (n = 0; n < e.AwardDataVec.length; ++n) {
                  i.AwardDataVec[n] = u.c7dProto.AwardData.toObject(e.AwardDataVec[n], t);
                }
              }
              if (null != e.Win && e.hasOwnProperty("Win")) {
                i.Win = t.json && !isFinite(e.Win) ? String(e.Win) : e.Win;
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
              return e + "/c7dProto.SinglePlate";
            };
            return e;
          }(),
          RoundInfo: function () {
            function e(e) {
              this.PlateVec = [];
              this.NudgeTimes = [];
              if (e) {
                var t = Object.keys(e);
                for (var i = 0; i < t.length; ++i) {
                  if (null != e[t[i]]) {
                    this[t[i]] = e[t[i]];
                  }
                }
              }
            }
            e.prototype.PlateVec = c.emptyArray;
            e.prototype.SwitchResult = 0;
            e.prototype.WildResult = 0;
            e.prototype.AwardTypeFlag = 0;
            e.prototype.RoundWin = 0;
            e.prototype.MaxFlag = false;
            e.prototype.NudgeTimes = c.emptyArray;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.PlateVec && e.PlateVec.length) {
                for (var i = 0; i < e.PlateVec.length; ++i) {
                  u.c7dProto.SinglePlate.encode(e.PlateVec[i], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.SwitchResult && Object.hasOwnProperty.call(e, "SwitchResult")) {
                t.uint32(16).int32(e.SwitchResult);
              }
              if (null != e.WildResult && Object.hasOwnProperty.call(e, "WildResult")) {
                t.uint32(24).int32(e.WildResult);
              }
              if (null != e.AwardTypeFlag && Object.hasOwnProperty.call(e, "AwardTypeFlag")) {
                t.uint32(32).int32(e.AwardTypeFlag);
              }
              if (null != e.RoundWin && Object.hasOwnProperty.call(e, "RoundWin")) {
                t.uint32(41).double(e.RoundWin);
              }
              if (null != e.MaxFlag && Object.hasOwnProperty.call(e, "MaxFlag")) {
                t.uint32(48).bool(e.MaxFlag);
              }
              if (null != e.NudgeTimes && e.NudgeTimes.length) {
                t.uint32(58).fork();
                for (i = 0; i < e.NudgeTimes.length; ++i) {
                  t.int32(e.NudgeTimes[i]);
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
              for (var n = new u.c7dProto.RoundInfo(); e.pos < i;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (!(n.PlateVec && n.PlateVec.length)) {
                      n.PlateVec = [];
                    }
                    n.PlateVec.push(u.c7dProto.SinglePlate.decode(e, e.uint32()));
                    break;
                  case 2:
                    n.SwitchResult = e.int32();
                    break;
                  case 3:
                    n.WildResult = e.int32();
                    break;
                  case 4:
                    n.AwardTypeFlag = e.int32();
                    break;
                  case 5:
                    n.RoundWin = e.double();
                    break;
                  case 6:
                    n.MaxFlag = e.bool();
                    break;
                  case 7:
                    if (!(n.NudgeTimes && n.NudgeTimes.length)) {
                      n.NudgeTimes = [];
                    }
                    if (2 == (7 & o)) {
                      for (var r = e.uint32() + e.pos; e.pos < r;) {
                        n.NudgeTimes.push(e.int32());
                      }
                    } else {
                      n.NudgeTimes.push(e.int32());
                    }
                    break;
                  default:
                    e.skipType(7 & o);
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
              if (null != e.PlateVec && e.hasOwnProperty("PlateVec")) {
                if (!Array.isArray(e.PlateVec)) {
                  return "PlateVec: array expected";
                }
                for (var t = 0; t < e.PlateVec.length; ++t) {
                  var i = u.c7dProto.SinglePlate.verify(e.PlateVec[t]);
                  if (i) {
                    return "PlateVec." + i;
                  }
                }
              }
              if (null != e.SwitchResult && e.hasOwnProperty("SwitchResult") && !c.isInteger(e.SwitchResult)) {
                return "SwitchResult: integer expected";
              }
              if (null != e.WildResult && e.hasOwnProperty("WildResult") && !c.isInteger(e.WildResult)) {
                return "WildResult: integer expected";
              }
              if (null != e.AwardTypeFlag && e.hasOwnProperty("AwardTypeFlag") && !c.isInteger(e.AwardTypeFlag)) {
                return "AwardTypeFlag: integer expected";
              }
              if (null != e.RoundWin && e.hasOwnProperty("RoundWin") && "number" != typeof e.RoundWin) {
                return "RoundWin: number expected";
              }
              if (null != e.MaxFlag && e.hasOwnProperty("MaxFlag") && "boolean" != typeof e.MaxFlag) {
                return "MaxFlag: boolean expected";
              }
              if (null != e.NudgeTimes && e.hasOwnProperty("NudgeTimes")) {
                if (!Array.isArray(e.NudgeTimes)) {
                  return "NudgeTimes: array expected";
                }
                for (t = 0; t < e.NudgeTimes.length; ++t) {
                  if (!c.isInteger(e.NudgeTimes[t])) {
                    return "NudgeTimes: integer[] expected";
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.c7dProto.RoundInfo) {
                return e;
              }
              var t = new u.c7dProto.RoundInfo();
              if (e.PlateVec) {
                if (!Array.isArray(e.PlateVec)) {
                  throw TypeError(".c7dProto.RoundInfo.PlateVec: array expected");
                }
                t.PlateVec = [];
                for (var i = 0; i < e.PlateVec.length; ++i) {
                  if ("object" != typeof e.PlateVec[i]) {
                    throw TypeError(".c7dProto.RoundInfo.PlateVec: object expected");
                  }
                  t.PlateVec[i] = u.c7dProto.SinglePlate.fromObject(e.PlateVec[i]);
                }
              }
              if (null != e.SwitchResult) {
                t.SwitchResult = 0 | e.SwitchResult;
              }
              if (null != e.WildResult) {
                t.WildResult = 0 | e.WildResult;
              }
              if (null != e.AwardTypeFlag) {
                t.AwardTypeFlag = 0 | e.AwardTypeFlag;
              }
              if (null != e.RoundWin) {
                t.RoundWin = Number(e.RoundWin);
              }
              if (null != e.MaxFlag) {
                t.MaxFlag = Boolean(e.MaxFlag);
              }
              if (e.NudgeTimes) {
                if (!Array.isArray(e.NudgeTimes)) {
                  throw TypeError(".c7dProto.RoundInfo.NudgeTimes: array expected");
                }
                t.NudgeTimes = [];
                for (i = 0; i < e.NudgeTimes.length; ++i) {
                  t.NudgeTimes[i] = 0 | e.NudgeTimes[i];
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
                i.PlateVec = [];
                i.NudgeTimes = [];
              }
              if (t.defaults) {
                i.SwitchResult = 0;
                i.WildResult = 0;
                i.AwardTypeFlag = 0;
                i.RoundWin = 0;
                i.MaxFlag = false;
              }
              if (e.PlateVec && e.PlateVec.length) {
                i.PlateVec = [];
                for (var n = 0; n < e.PlateVec.length; ++n) {
                  i.PlateVec[n] = u.c7dProto.SinglePlate.toObject(e.PlateVec[n], t);
                }
              }
              if (null != e.SwitchResult && e.hasOwnProperty("SwitchResult")) {
                i.SwitchResult = e.SwitchResult;
              }
              if (null != e.WildResult && e.hasOwnProperty("WildResult")) {
                i.WildResult = e.WildResult;
              }
              if (null != e.AwardTypeFlag && e.hasOwnProperty("AwardTypeFlag")) {
                i.AwardTypeFlag = e.AwardTypeFlag;
              }
              if (null != e.RoundWin && e.hasOwnProperty("RoundWin")) {
                i.RoundWin = t.json && !isFinite(e.RoundWin) ? String(e.RoundWin) : e.RoundWin;
              }
              if (null != e.MaxFlag && e.hasOwnProperty("MaxFlag")) {
                i.MaxFlag = e.MaxFlag;
              }
              if (e.NudgeTimes && e.NudgeTimes.length) {
                i.NudgeTimes = [];
                for (n = 0; n < e.NudgeTimes.length; ++n) {
                  i.NudgeTimes[n] = e.NudgeTimes[n];
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
              return e + "/c7dProto.RoundInfo";
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
            e.prototype.RoundQueue = c.emptyArray;
            e.prototype.FreeTotalWin = 0;
            e.prototype.TotalWin = 0;
            e.prototype.Extra = false;
            e.prototype.ShowIndex = "";
            e.prototype.NowMoney = 0;
            e.prototype.AckType = 0;
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
                  u.c7dProto.RoundInfo.encode(e.RoundQueue[i], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.FreeTotalWin && Object.hasOwnProperty.call(e, "FreeTotalWin")) {
                t.uint32(17).double(e.FreeTotalWin);
              }
              if (null != e.TotalWin && Object.hasOwnProperty.call(e, "TotalWin")) {
                t.uint32(25).double(e.TotalWin);
              }
              if (null != e.Extra && Object.hasOwnProperty.call(e, "Extra")) {
                t.uint32(32).bool(e.Extra);
              }
              if (null != e.ShowIndex && Object.hasOwnProperty.call(e, "ShowIndex")) {
                t.uint32(42).string(e.ShowIndex);
              }
              if (null != e.NowMoney && Object.hasOwnProperty.call(e, "NowMoney")) {
                t.uint32(49).double(e.NowMoney);
              }
              if (null != e.AckType && Object.hasOwnProperty.call(e, "AckType")) {
                t.uint32(56).int32(e.AckType);
              }
              if (null != e.RTP && Object.hasOwnProperty.call(e, "RTP")) {
                t.uint32(65).double(e.RTP);
              }
              if (null != e.Bet && Object.hasOwnProperty.call(e, "Bet")) {
                t.uint32(73).double(e.Bet);
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
              for (var n = new u.c7dProto.SpinAck(); e.pos < i;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (!(n.RoundQueue && n.RoundQueue.length)) {
                      n.RoundQueue = [];
                    }
                    n.RoundQueue.push(u.c7dProto.RoundInfo.decode(e, e.uint32()));
                    break;
                  case 2:
                    n.FreeTotalWin = e.double();
                    break;
                  case 3:
                    n.TotalWin = e.double();
                    break;
                  case 4:
                    n.Extra = e.bool();
                    break;
                  case 5:
                    n.ShowIndex = e.string();
                    break;
                  case 6:
                    n.NowMoney = e.double();
                    break;
                  case 7:
                    n.AckType = e.int32();
                    break;
                  case 8:
                    n.RTP = e.double();
                    break;
                  case 9:
                    n.Bet = e.double();
                    break;
                  default:
                    e.skipType(7 & o);
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
                  var i = u.c7dProto.RoundInfo.verify(e.RoundQueue[t]);
                  if (i) {
                    return "RoundQueue." + i;
                  }
                }
              }
              return null != e.FreeTotalWin && e.hasOwnProperty("FreeTotalWin") && "number" != typeof e.FreeTotalWin ? "FreeTotalWin: number expected" : null != e.TotalWin && e.hasOwnProperty("TotalWin") && "number" != typeof e.TotalWin ? "TotalWin: number expected" : null != e.Extra && e.hasOwnProperty("Extra") && "boolean" != typeof e.Extra ? "Extra: boolean expected" : null != e.ShowIndex && e.hasOwnProperty("ShowIndex") && !c.isString(e.ShowIndex) ? "ShowIndex: string expected" : null != e.NowMoney && e.hasOwnProperty("NowMoney") && "number" != typeof e.NowMoney ? "NowMoney: number expected" : null != e.AckType && e.hasOwnProperty("AckType") && !c.isInteger(e.AckType) ? "AckType: integer expected" : null != e.RTP && e.hasOwnProperty("RTP") && "number" != typeof e.RTP ? "RTP: number expected" : null != e.Bet && e.hasOwnProperty("Bet") && "number" != typeof e.Bet ? "Bet: number expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.c7dProto.SpinAck) {
                return e;
              }
              var t = new u.c7dProto.SpinAck();
              if (e.RoundQueue) {
                if (!Array.isArray(e.RoundQueue)) {
                  throw TypeError(".c7dProto.SpinAck.RoundQueue: array expected");
                }
                t.RoundQueue = [];
                for (var i = 0; i < e.RoundQueue.length; ++i) {
                  if ("object" != typeof e.RoundQueue[i]) {
                    throw TypeError(".c7dProto.SpinAck.RoundQueue: object expected");
                  }
                  t.RoundQueue[i] = u.c7dProto.RoundInfo.fromObject(e.RoundQueue[i]);
                }
              }
              if (null != e.FreeTotalWin) {
                t.FreeTotalWin = Number(e.FreeTotalWin);
              }
              if (null != e.TotalWin) {
                t.TotalWin = Number(e.TotalWin);
              }
              if (null != e.Extra) {
                t.Extra = Boolean(e.Extra);
              }
              if (null != e.ShowIndex) {
                t.ShowIndex = String(e.ShowIndex);
              }
              if (null != e.NowMoney) {
                t.NowMoney = Number(e.NowMoney);
              }
              if (null != e.AckType) {
                t.AckType = 0 | e.AckType;
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
                i.FreeTotalWin = 0;
                i.TotalWin = 0;
                i.Extra = false;
                i.ShowIndex = "";
                i.NowMoney = 0;
                i.AckType = 0;
                i.RTP = 0;
                i.Bet = 0;
              }
              if (e.RoundQueue && e.RoundQueue.length) {
                i.RoundQueue = [];
                for (var n = 0; n < e.RoundQueue.length; ++n) {
                  i.RoundQueue[n] = u.c7dProto.RoundInfo.toObject(e.RoundQueue[n], t);
                }
              }
              if (null != e.FreeTotalWin && e.hasOwnProperty("FreeTotalWin")) {
                i.FreeTotalWin = t.json && !isFinite(e.FreeTotalWin) ? String(e.FreeTotalWin) : e.FreeTotalWin;
              }
              if (null != e.TotalWin && e.hasOwnProperty("TotalWin")) {
                i.TotalWin = t.json && !isFinite(e.TotalWin) ? String(e.TotalWin) : e.TotalWin;
              }
              if (null != e.Extra && e.hasOwnProperty("Extra")) {
                i.Extra = e.Extra;
              }
              if (null != e.ShowIndex && e.hasOwnProperty("ShowIndex")) {
                i.ShowIndex = e.ShowIndex;
              }
              if (null != e.NowMoney && e.hasOwnProperty("NowMoney")) {
                i.NowMoney = t.json && !isFinite(e.NowMoney) ? String(e.NowMoney) : e.NowMoney;
              }
              if (null != e.AckType && e.hasOwnProperty("AckType")) {
                i.AckType = e.AckType;
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
              return e + "/c7dProto.SpinAck";
            };
            return e;
          }(),
          GameInfoData: function () {
            function e(e) {
              this.Mul = [];
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
            e.prototype.Mul = c.emptyArray;
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
              for (var n = new u.c7dProto.GameInfoData(); e.pos < i;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    n.ShowExtra = e.bool();
                    break;
                  case 2:
                    if (!(n.Mul && n.Mul.length)) {
                      n.Mul = [];
                    }
                    if (2 == (7 & o)) {
                      for (var r = e.uint32() + e.pos; e.pos < r;) {
                        n.Mul.push(e.double());
                      }
                    } else {
                      n.Mul.push(e.double());
                    }
                    break;
                  default:
                    e.skipType(7 & o);
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
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.c7dProto.GameInfoData) {
                return e;
              }
              var t = new u.c7dProto.GameInfoData();
              if (null != e.ShowExtra) {
                t.ShowExtra = Boolean(e.ShowExtra);
              }
              if (e.Mul) {
                if (!Array.isArray(e.Mul)) {
                  throw TypeError(".c7dProto.GameInfoData.Mul: array expected");
                }
                t.Mul = [];
                for (var i = 0; i < e.Mul.length; ++i) {
                  t.Mul[i] = Number(e.Mul[i]);
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
              return i;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, s.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/c7dProto.GameInfoData";
            };
            return e;
          }()
        }).Column = function () {
          function e(e) {
            this.Col = [];
            if (e) {
              var t = Object.keys(e);
              for (var i = 0; i < t.length; ++i) {
                if (null != e[t[i]]) {
                  this[t[i]] = e[t[i]];
                }
              }
            }
          }
          e.prototype.Col = c.emptyArray;
          e.create = function (t) {
            return new e(t);
          };
          e.encode = function (e, t) {
            if (!t) {
              t = l.create();
            }
            if (null != e.Col && e.Col.length) {
              t.uint32(10).fork();
              for (var i = 0; i < e.Col.length; ++i) {
                t.int32(e.Col[i]);
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
            for (var n = new u.c7dProto.Column(); e.pos < i;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  if (!(n.Col && n.Col.length)) {
                    n.Col = [];
                  }
                  if (2 == (7 & o)) {
                    for (var r = e.uint32() + e.pos; e.pos < r;) {
                      n.Col.push(e.int32());
                    }
                  } else {
                    n.Col.push(e.int32());
                  }
                  break;
                default:
                  e.skipType(7 & o);
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
            if (null != e.Col && e.hasOwnProperty("Col")) {
              if (!Array.isArray(e.Col)) {
                return "Col: array expected";
              }
              for (var t = 0; t < e.Col.length; ++t) {
                if (!c.isInteger(e.Col[t])) {
                  return "Col: integer[] expected";
                }
              }
            }
            return null;
          };
          e.fromObject = function (e) {
            if (e instanceof u.c7dProto.Column) {
              return e;
            }
            var t = new u.c7dProto.Column();
            if (e.Col) {
              if (!Array.isArray(e.Col)) {
                throw TypeError(".c7dProto.Column.Col: array expected");
              }
              t.Col = [];
              for (var i = 0; i < e.Col.length; ++i) {
                t.Col[i] = 0 | e.Col[i];
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
              i.Col = [];
            }
            if (e.Col && e.Col.length) {
              i.Col = [];
              for (var n = 0; n < e.Col.length; ++n) {
                i.Col[n] = e.Col[n];
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
            return e + "/c7dProto.Column";
          };
          return e;
        }();
        u.c7dProto = r;
        i.exports = u;
        _cjsExports$1 = i.exports;
      }, function () {
        return {
          "protobufjs/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      loader.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/Crystal777Deluxe/Client/Thai_UAT/node_modules/@old-rd1/crystal777deluxe-protocol/c7dproto.js");
      cclegacy._RF.push({}, "139135qziJDNLGkbAuWUodE", "RoundDataProvider", undefined);
      var ccclass$d = _decorator.ccclass;
      _dec$c = ccclass$d("RoundDataProvider");
      var _dec$d;
      var _dec2$5;
      var _dec3$4;
      var _class2$7;
      var _descriptor$5;
      var _descriptor2$4;
      var _descriptor3$3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "34de2pyU3tGgLxGDSuvsbBA", "SlotReels", undefined);
      var HARD_STOP_INTERVAL_TIME = 0;
      var NORMAL_SPIN_SPEED = .18;
      var DEFAULT_PLATE = [[]];
      var DEFAULT_REALPLATE = [[0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7]];
      var property$5 = _decorator.property;
      var NearWinTime = 2.52;
      _dec$d = property$5({
        type: SpriteFrame,
        tooltip: "Symbol 圖片"
      });
      _dec2$5 = property$5({
        type: SpriteFrame,
        tooltip: "X倍 symbol圖示"
      });
      _dec3$4 = property$5({
        type: Node,
        tooltip: "每行節點"
      });
      _class2$7 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_symbolSpriteFrames", _descriptor$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_mgMultiplyImgs", _descriptor2$4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_reelNodes", _descriptor3$3, _assertThisInitialized(t));
          t.m_reelPositionOffset = [v3(0, 30), v3(0, 30), v3(0, 30), v3(0, 30), v3(0, 30), v3(0, 30), v3(0, 30), v3(0, 30)];
          t.m_reelDistance = [-50, -33.3, -16.7, 0, 16.7, 33.3, 50, 66.7];
          t.m_offectDistance = 0;
          t.m_gameView = null;
          t.m_viewSize = null;
          t.m_symbolSize = null;
          t.m_symbols = [];
          t.m_saveSymbols = [];
          t.m_symbolMultiply = new Array();
          t.m_plateInfo = DEFAULT_PLATE;
          t.m_plateRealInfo = DEFAULT_REALPLATE;
          t.m_upperSymbols = [];
          t.m_lowerSymbols = [];
          t.m_riseTime = 0;
          t.m_upLength = 20;
          t.m_spinBufferTime01 = .05;
          t.m_spinBufferTime02 = .05;
          t.m_spinSpeed = .18;
          t.m_downLength = 30;
          t.m_timesOfBaseSpin = 4;
          t.m_spinIntervalTimes = 4;
          t.m_spinDelayTime = 0;
          t.m_timesOfNearWinSpin = 3;
          t.m_hardStopSpinSpeed = .16;
          t.m_time = 0;
          t.m_stopTime = 0;
          t.m_reelStopTimes = [];
          t.m_reelPreTimes = [];
          t.m_isStop = false;
          t.m_isClickStopBtn = false;
          t.m_isChangeSymbol = [];
          t.m_isChangeToFinalSymbol = [];
          t.m_nearWinLock = [true, true, true, true, true, true];
          t.m_nowStopColum = 0;
          t.m_startNearWinCol = -1;
          t.m_upSymbolAmount = 2;
          t.m_lowSymbolAmount = 3;
          t.m_isColOffset = Array(3).fill(false);
          t.m_currentMoveLength = [];
          t.m_symbolPos = [];
          t.m_symbolWorldPos = [];
          t.m_isColStops = [];
          t.m_onReelStop = null;
          t.m_isCheckAndChangeToRightSymbol = [[], [], []];
          t.m_symbolWeight2 = [{
            symbol: Game_Define.Symbol.BAR1,
            weight: 10
          }, {
            symbol: Game_Define.Symbol.BAR2,
            weight: 10
          }, {
            symbol: Game_Define.Symbol.SEVEN7,
            weight: 10
          }, {
            symbol: Game_Define.Symbol.SEVEN77,
            weight: 10
          }, {
            symbol: Game_Define.Symbol.SEVEN777,
            weight: 10
          }, {
            symbol: Game_Define.Symbol.BAR1X2,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.BAR2X2,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN7X2,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN77X2,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN777X2,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.BAR1X3,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.BAR2X3,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN7X3,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN77X3,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN777X3,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.BAR1X5,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.BAR2X5,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN7X5,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN77X5,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN777X5,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.WILD,
            weight: 5
          }];
          t.m_symbolWeight13 = [{
            symbol: Game_Define.Symbol.BAR1,
            weight: 10
          }, {
            symbol: Game_Define.Symbol.BAR2,
            weight: 10
          }, {
            symbol: Game_Define.Symbol.SEVEN7,
            weight: 10
          }, {
            symbol: Game_Define.Symbol.SEVEN77,
            weight: 10
          }, {
            symbol: Game_Define.Symbol.SEVEN777,
            weight: 10
          }, {
            symbol: Game_Define.Symbol.BAR1X2,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.BAR2X2,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN7X2,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN77X2,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN777X2,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.BAR1X3,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.BAR2X3,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN7X3,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN77X3,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN777X3,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.BAR1X5,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.BAR2X5,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN7X5,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN77X5,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.SEVEN777X5,
            weight: 5
          }, {
            symbol: Game_Define.Symbol.WILD,
            weight: 50
          }];
          t.m_symbolWeight_triple = [{
            symbol: Game_Define.Symbol.BAR1,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.BAR2,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN7,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN77,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN777,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.BAR1X2,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.BAR2X2,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN7X2,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN77X2,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN777X2,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.BAR1X3,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.BAR2X3,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN7X3,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN77X3,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN777X3,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.BAR1X5,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.BAR2X5,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN7X5,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN77X5,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.SEVEN777X5,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.WILDTOP,
            weight: 0
          }, {
            symbol: Game_Define.Symbol.WILD,
            weight: 1
          }, {
            symbol: Game_Define.Symbol.WILDBOT,
            weight: 10
          }];
          t.m_symbolTotalWeight2 = null;
          t.m_symbolTotalWeight13 = null;
          t.m_symbolTotalWeight_triple = null;
          t.EMPTY_SYMBOL_IDX = [-1, 1, 3, 5];
          t.m_nearWinSoundId = -1;
          t.m_isNearWinPlaying = false;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.onLoad = function () {
          var e = this;
          this.m_viewSize = this.node.getComponent(UITransform).contentSize;
          this.m_symbolSize = new Size(this.m_viewSize.width / 3, this.m_viewSize.height / 3 * .8);
          for (var t = 0; t < 3; t++) {
            this.m_upperSymbols[t] = [];
            this.m_symbolPos[t] = [];
            this.m_symbolWorldPos[t] = [];
            this.m_isChangeToFinalSymbol[t] = [];
            this.m_isChangeSymbol[t] = [];
            this.m_saveSymbols[t] = [];
            this.m_symbolMultiply[t] = [];
            for (var i = 0; i < 2; i++) {
              var n = -2 + i;
              var o = this.m_symbolSize.height * (2 - n + .5) + this.m_reelPositionOffset[t].y - this.m_viewSize.height / 2;
              var r = "Symbol_Up_" + i;
              var s = this.NewSymbolNode(r, 0);
              var a = this.NewSymbolMultiplyNode("Symbol_Mu", 0);
              this.m_reelNodes[t].addChild(s);
              s.addChild(a);
              s.setPosition(0, o);
              this.m_upperSymbols[t].push(s);
              this.m_symbolPos[t][n] = v3(0, o);
              this.m_symbolWorldPos[t][n] = s.getWorldPosition();
              this.m_isChangeToFinalSymbol[t][n] = false;
              this.m_isChangeSymbol[t][n] = false;
              this.m_saveSymbols[t].push(s);
              this.m_symbolMultiply[t].push(a);
            }
          }
          for (var l = 0; l < 3; l++) {
            this.m_reelStopTimes.push(null);
            this.m_reelPreTimes.push(null);
            var c = [];
            var u = new Array();
            for (var m = 0; m < 3; m++) {
              var p = "Symbol_" + m;
              var h = this.NewSymbolNode(p, Game_Define.InitialPlateData[l][m]);
              var _ = this.NewSymbolMultiplyNode("Symbol_Mu", 0);
              this.m_reelNodes[l].addChild(h);
              h.addChild(_);
              _.active = false;
              var d = this.m_symbolSize.height * (3 - (m + .5)) + this.m_reelPositionOffset[l].y - this.m_viewSize.height / 2;
              h.setPosition(0, d);
              c.push(h);
              u.push(_);
              this.m_symbolPos[l][m] = v3(0, d);
              this.m_symbolWorldPos[l][m] = h.getWorldPosition();
              this.m_isChangeToFinalSymbol[l][m] = false;
              this.m_isChangeSymbol[l][m] = false;
              this.m_saveSymbols[l].push(h);
              this.m_symbolMultiply[l].push(_);
            }
            this.m_symbols.push(c);
          }
          for (var f = 0; f < 3; f++) {
            var y = Game_Define.ROW;
            this.m_lowerSymbols[f] = [];
            for (var g = 0; g < this.m_lowSymbolAmount; g++) {
              var S = y + g;
              var b = this.m_symbolSize.height * -(g + .5) + this.m_reelPositionOffset[f].y - this.m_viewSize.height / 2;
              var v = "Symbol_Low_" + g;
              var w = this.NewSymbolNode(v, 0);
              var R = this.NewSymbolMultiplyNode("Symbol_Mu", 0);
              this.m_reelNodes[f].addChild(w);
              w.addChild(R);
              w.setPosition(0, b);
              this.m_lowerSymbols[f].push(w);
              this.m_symbolPos[f][S] = v3(0, b);
              this.m_symbolWorldPos[f][S] = w.getWorldPosition();
              this.m_isChangeToFinalSymbol[f][S] = false;
              this.m_isChangeSymbol[f][S] = false;
              this.m_saveSymbols[f].push(w);
              this.m_symbolMultiply[f].push(R);
            }
          }
          var A = function () {
            var t = node$8.TempoSetting.Crazy777;
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
            HARD_STOP_INTERVAL_TIME = t.BASE.HARD_STOP_INTERVAL_TIME;
            e.m_hardStopSpinSpeed = t.BASE.HARD_STOP_SPIN_SPEED;
            NORMAL_SPIN_SPEED = t.BASE.SPIN_SPEED;
            var i = Math.floor(2.5 / e.m_spinSpeed);
            i = e.m_spinSpeed * i < 2.5 ? i + 1 : i;
            NearWinTime = node.times(e.m_spinSpeed, i);
          };
          A();
          node$8.AddCb(A);
          this.m_symbolTotalWeight2 = this.m_symbolWeight2.reduce(function (e, t) {
            return e + t.weight;
          }, 0);
          this.m_symbolTotalWeight13 = this.m_symbolWeight13.reduce(function (e, t) {
            return e + t.weight;
          }, 0);
          this.m_symbolTotalWeight_triple = this.m_symbolWeight_triple.reduce(function (e, t) {
            return e + t.weight;
          }, 0);
          error("m_symbolTotalWeight2", this.m_symbolTotalWeight2);
          error("m_symbolTotalWeight13", this.m_symbolTotalWeight13);
          error("m_symbolTotalWeight_triple", this.m_symbolTotalWeight_triple);
          this.m_plateInfo = Game_Define.InitialPlateData;
          if (this.m_plateInfo && 0 != this.m_plateInfo[0].length) {
            this.SetFinalPlateInfo();
            this.MovePlate();
          }
          for (var $ = 0; $ < this.m_lowerSymbols.length; $++) {
            for (var D = 0; D < this.m_lowerSymbols[$].length; D++) {
              var N = 5 + D;
              this.SetSpriteFrame(this.m_lowerSymbols[$][D], this.m_plateRealInfo[$][N]);
              var P = 3 + D;
              this.ShowMultiplySymbol($, P, this.m_plateRealInfo[$][N]);
            }
          }
          for (var L = 0; L < this.m_upperSymbols.length; L++) {
            for (var T = 0; T < this.m_upperSymbols[L].length; T++) {
              this.SetSpriteFrame(this.m_upperSymbols[L][T], this.m_plateRealInfo[L][T]);
              var I = -2 + T;
              this.ShowMultiplySymbol(L, I, this.m_plateRealInfo[L][T]);
            }
          }
        };
        i.Init = function (e) {
          this.m_gameView = e;
        };
        i.NewSymbolNode = function (e, t) {
          var i = new Node();
          i.name = e;
          var n = i.addComponent(Sprite);
          n.sizeMode = Sprite.SizeMode.RAW;
          n.type = Sprite.Type.SIMPLE;
          n.trim = false;
          n.spriteFrame = this.m_symbolSpriteFrames[t];
          return i;
        };
        i.NewSymbolMultiplyNode = function (e, t) {
          var i = new Node();
          i.name = e;
          var n = i.addComponent(Sprite);
          n.sizeMode = Sprite.SizeMode.RAW;
          n.type = Sprite.Type.SIMPLE;
          n.trim = false;
          n.spriteFrame = this.m_mgMultiplyImgs[t];
          return i;
        };
        i.SetPlateInfo = function (e) {
          this.m_plateInfo = e;
          for (var t = 0; t < e.length; ++t) {
            for (var i = 0; i < e[t].length; ++i) {
              this.m_plateRealInfo[t][i + 2] = e[t][i];
            }
          }
          var n = this.m_riseTime * 3;
          var o = Math.ceil((this.m_time - n) / this.m_spinSpeed);
          if (this.m_isClickStopBtn) {
            this.m_stopTime = node.strip(this.m_spinSpeed * (o + 1) + this.m_spinDelayTime + n + this.m_spinBufferTime01 + this.m_spinBufferTime02 + HARD_STOP_INTERVAL_TIME);
            for (var r = 0; r < 3; r++) {
              this.m_reelStopTimes[r] = node.strip(this.m_spinSpeed * o + 1);
              this.m_reelPreTimes[r] = node.strip(this.m_spinSpeed * o);
            }
          } else {
            this.m_stopTime = node.strip(this.m_spinSpeed * (o + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * 2 + this.m_spinDelayTime + n + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var s = 0; s < 3; s++) {
              this.m_reelStopTimes[s] = node.strip(this.m_spinSpeed * (o + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * s * this.m_spinSpeed);
              this.m_reelPreTimes[s] = node.strip(this.m_reelStopTimes[s] - this.m_spinSpeed);
            }
          }
          if (this.m_plateInfo && 0 != this.m_plateInfo[0].length) {
            this.SetFinalPlateInfo();
            this.MovePlate();
          }
        };
        i.SetFinalPlateInfo = function () {
          for (var e = 0; e < 3; ++e) {
            if (this.m_plateInfo[e][0] == Game_Define.Symbol.Empty) {
              this.m_plateRealInfo[e][0] = Game_Define.Symbol.Empty;
              this.m_plateRealInfo[e][1] = this.GetRandomSymbol(e, -1, false);
            } else if (0 != e && 2 != e || this.m_plateInfo[e][0] != Game_Define.Symbol.WILD || this.m_plateInfo[e][1] != Game_Define.Symbol.WILDBOT) {
              this.m_plateRealInfo[e][0] = this.GetRandomSymbol(e, 0, false);
              this.m_plateRealInfo[e][1] = Game_Define.Symbol.Empty;
            } else {
              this.m_plateRealInfo[e][0] = Game_Define.Symbol.Empty;
              this.m_plateRealInfo[e][1] = Game_Define.Symbol.Empty;
            }
            if (this.m_plateInfo[e][2] == Game_Define.Symbol.Empty) {
              this.m_plateRealInfo[e][5] = this.GetRandomSymbol(e, 0, false);
            } else {
              this.m_plateRealInfo[e][5] = Game_Define.Symbol.Empty;
            }
            if (this.m_plateInfo[e][2] == Game_Define.Symbol.Empty || this.m_plateInfo[e][2] == Game_Define.Symbol.WILDTOP || this.m_plateInfo[e][2] == Game_Define.Symbol.WILD) {
              this.m_plateRealInfo[e][6] = Game_Define.Symbol.Empty;
              this.m_plateRealInfo[e][7] = this.GetRandomSymbol(e, 5, false);
            } else {
              this.m_plateRealInfo[e][6] = this.GetRandomSymbol(e, 4, false);
              this.m_plateRealInfo[e][7] = Game_Define.Symbol.Empty;
            }
          }
          error("SetFinalPlateInfo", this.m_plateRealInfo);
        };
        i.MovePlate = function () {
          var e = [];
          for (var t = 0; t < 3; t++) {
            e[t] = this.m_plateRealInfo[t];
            if (this.m_plateInfo[t][1] == Game_Define.Symbol.Empty || this.m_isColOffset[t]) {
              var i = -this.m_upSymbolAmount;
              var n = this.m_upSymbolAmount + Game_Define.ROW + this.m_lowSymbolAmount;
              for (var o = 0; o < n; o++) {
                var r = i + o;
                e[t][r] = this.m_plateRealInfo[t][r];
              }
            } else {
              for (var s = 0; s < 8; ++s) {
                e[t][s] = s + 1 >= 8 ? Game_Define.Symbol.Empty : this.m_plateRealInfo[t][s + 1];
              }
              var a = this.m_reelNodes[t].getPosition();
              a.y -= this.m_symbolSize.height;
              a.y += this.m_offectDistance;
              this.m_reelNodes[t].setPosition(a);
              this.m_isColOffset[t] = true;
            }
          }
          this.m_plateRealInfo = e;
        };
        i.SetPlateSymbol = function (e) {
          if (undefined === e) {
            e = [];
          }
          if (0 == e.length) {
            e = DEFAULT_PLATE;
          }
          this.m_plateInfo = e;
          for (var t = 0; t < 3; t++) {
            for (var i = 0; i < 3; i++) {
              var n = this.m_symbolSpriteFrames[e[t][i]];
              this.m_symbols[t][i].getComponent(Sprite).spriteFrame = n;
              var o = this.m_symbolSize.height * (3 - i - .5) + this.m_reelPositionOffset[t].y - this.m_viewSize.height / 2;
              this.m_symbols[t][i].setPosition(0, o);
            }
          }
          this.SetUpperAndLowerActive(false);
        };
        i.GetSymbol = function (e, t) {
          return this.m_symbols[e][t];
        };
        i.GetRealSymbol = function (e, t) {
          return this.m_saveSymbols[e][t];
        };
        i.Reset = function () {
          for (var e = 0; e < this.m_symbols.length; ++e) {
            for (var t = 0; t < this.m_symbols[e].length; ++t) {
              this.m_symbols[e][t].active = true;
            }
          }
          if (this.m_gameView.EffectPlate.IsNudgeLeft()) {
            this.m_saveSymbols[0][0].active = true;
            this.m_symbols[0][0].getComponent(Sprite).spriteFrame = null;
            this.m_symbols[0][1].getComponent(Sprite).spriteFrame = this.m_symbolSpriteFrames[Game_Define.Symbol.WILDTOP];
            this.m_symbols[0][2].getComponent(Sprite).spriteFrame = null;
          }
          if (this.m_gameView.EffectPlate.IsNudgeRight()) {
            this.m_saveSymbols[0][0].active = true;
            this.m_symbols[2][0].getComponent(Sprite).spriteFrame = null;
            this.m_symbols[2][1].getComponent(Sprite).spriteFrame = this.m_symbolSpriteFrames[Game_Define.Symbol.WILDTOP];
            this.m_symbols[2][2].getComponent(Sprite).spriteFrame = null;
          }
        };
        i.ResetSymbol = function () {
          for (var e = 0; e < this.m_symbols.length; ++e) {
            for (var t = 0; t < this.m_symbols[e].length; ++t) {
              this.m_symbols[e][t].active = true;
            }
          }
        };
        i.Spin = function (e) {
          this.m_time = node.strip(this.m_time + e);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple();
            if (this.m_time >= this.m_stopTime && 0 != this.m_stopTime) {
              this.m_isStop = true;
              this.CheckAndChangeSymbolToRight();
            }
          }
        };
        i.StartSpin = function () {
          this.m_spinSpeed = NORMAL_SPIN_SPEED;
          this.m_time = 0;
          this.m_stopTime = 0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_startNearWinCol = -1;
          this.m_isColStops = Array(Game_Define.COL).fill(false);
          this.m_isNearWinPlaying = false;
          this.SetUpperAndLowerActive(true);
          this.m_isColOffset = Array(3).fill(false);
          for (var e = 0; e < 3; e++) {
            this.m_reelStopTimes[e] = null;
            this.m_reelPreTimes[e] = null;
            this.m_currentMoveLength[e] = [];
            this.m_reelNodes[e].setPosition(this.m_reelNodes[e].position.x, 0);
          }
          for (var t = 0; t < 3; t++) {
            var i = Game_Define.ROW + this.m_lowSymbolAmount;
            for (var n = -this.m_upSymbolAmount; n < i; n++) {
              this.m_isChangeToFinalSymbol[t][n] = false;
            }
          }
          for (var o = 0; o < 3; o++) {
            for (var r = 0; r < 8; r++) {
              this.m_saveSymbols[o][r].active = true;
            }
          }
          for (var s = 0; s < 3; s++) {
            var a = Game_Define.ROW + this.m_lowSymbolAmount;
            for (var l = -this.m_upSymbolAmount; l < a; l++) {
              this.m_isCheckAndChangeToRightSymbol[s][l] = false;
            }
          }
        };
        i.Spin_RealSpinMultiple = function () {
          var e = this;
          var t = this.m_spinSpeed;
          var i = function (i) {
            var n = Game_Define.ROW;
            for (var o = e.m_lowSymbolAmount - 1; o >= 0; o--) {
              var r = n + o;
              var s = e.m_symbolSize.height * (e.m_lowSymbolAmount - o);
              e.SpinMoving(i, r, e.m_lowerSymbols[i][o], t, s);
            }
            for (var a = Game_Define.ROW - 1; a >= 0; a--) {
              var l = e.m_symbolSize.height * (Game_Define.ROW + e.m_lowSymbolAmount - a - 1 + .5);
              e.SpinMoving(i, a, e.m_symbols[i][a], t, l, function () {});
            }
            var c = function () {
              if (!e.m_isColStops[i]) {
                e.m_isColStops[i] = true;
                e.HandleOneReelStop(i);
              }
            };
            var u = -e.m_upSymbolAmount;
            for (var m = e.m_upSymbolAmount - 1; m >= 0; m--) {
              var p = u + m;
              var h = e.m_symbolSize.height * (e.m_upSymbolAmount + Game_Define.ROW - p - 1 - .5);
              e.SpinMoving(i, p, e.m_upperSymbols[i][m], t, h, c);
            }
            if (e.m_startNearWinCol > 0 && e.m_reelStopTimes[e.m_startNearWinCol] && e.m_time > e.m_reelStopTimes[e.m_startNearWinCol - 1]) {
              t = e.m_spinSpeed / 2;
              if (e.m_time > e.m_reelStopTimes[e.m_nowStopColum - 1]) {
                if (!e.m_nearWinLock[e.m_nowStopColum]) {
                  e.ShowNearWin();
                }
              }
            }
          };
          for (var n = 0; n < Game_Define.COL; n++) {
            i(n);
          }
        };
        i.SpinMoving = function (e, t, i, n, o, r) {
          var s = this.m_time;
          var a = this.m_reelStopTimes[e];
          var l = this.m_riseTime * Game_Define.COL;
          var c = this.m_symbolSize.height * (Game_Define.ROW + this.m_upSymbolAmount + this.m_lowSymbolAmount);
          var u = this.m_symbolPos[e][t].x;
          var m = this.m_symbolPos[e][t].y;
          var p = 0;
          if (s < this.m_riseTime * e) {
            ;
          } else if (s < this.m_riseTime * (e + 1)) {
            p = (s - this.m_riseTime * e) / this.m_riseTime * this.m_upLength;
          } else if (s < l) {
            p = this.m_upLength;
          } else if (null == a || s < a + l) {
            var h = (s - l) % n / n * c;
            p = -this.GetMovelength(h, o, c, e, t, i);
          } else if (s < a + l + this.m_spinBufferTime01) {
            p = -(s - a - l) / this.m_spinBufferTime01 * this.m_downLength;
            if (r) {
              r();
            }
            this.CheckChangeToFinalSymbol(e, t, i);
          } else if (s < a + l + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
            p = (s - a - l - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
            p -= this.m_downLength;
            if (r) {
              r();
            }
            this.CheckChangeToFinalSymbol(e, t, i);
          } else {
            p = 0;
            if (r) {
              r();
            }
            this.CheckChangeToFinalSymbol(e, t, i);
          }
          i.setPosition(u, m + p);
        };
        i.GetMovelength = function (e, t, i, n, o, r) {
          if (e >= t) {
            e -= i;
          }
          if (this.m_currentMoveLength[n][o] >= e) {
            if (!this.m_isChangeSymbol[n][o]) {
              this.m_isChangeSymbol[n][o] = true;
              this.ChangeSymbol(n, o, r, false);
            }
          } else {
            this.m_isChangeSymbol[n][o] = false;
          }
          this.m_currentMoveLength[n][o] = e;
          return e;
        };
        i.ChangeSymbol = function (e, t, i, n) {
          var o = this.m_reelPreTimes[e];
          var r = this.m_riseTime * 3;
          var s = 0;
          if (o && this.m_time - r > o || n) {
            if (t >= 0) {
              Game_Define.ROW;
            }
            s = this.m_plateRealInfo[e][t + 2];
            this.ShowMultiplySymbol(e, t, s);
            this.SetSpriteFrame(i, s, true);
          } else {
            s = this.GetRandomSymbol(e, t, true);
            this.ShowMultiplySymbol(e, t, s);
            this.SetSpriteFrame(i, s, false);
          }
        };
        i.ShowMultiplySymbol = function (e, t, i) {
          if (this.m_symbolMultiply[e][t + 2]) {
            if (i < Game_Define.Symbol.WILDTOP && i > 4) {
              this.m_symbolMultiply[e][t + 2].active = true;
              this.m_symbolMultiply[e][t + 2].getComponent(Sprite).spriteFrame = this.m_mgMultiplyImgs[Math.floor(i / 5) - 1];
            } else {
              this.m_symbolMultiply[e][t + 2].active = false;
            }
          }
        };
        i.GetSpecificSymbol = function (e, t) {
          var i;
          var n;
          var o;
          if (undefined === t) {
            t = false;
          }
          if (t) {
            n = Math.random() * this.m_symbolTotalWeight_triple;
            o = this.m_symbolWeight_triple;
          } else if (1 === e) {
            n = Math.random() * this.m_symbolTotalWeight2;
            o = this.m_symbolWeight2;
          } else {
            n = Math.random() * this.m_symbolTotalWeight13;
            o = this.m_symbolWeight13;
          }
          var r;
          var s = 0;
          for (var a = _createForOfIteratorHelperLoose(o); !(r = a()).done;) {
            var l = r.value;
            if (n <= (s += l.weight)) {
              i = l.symbol;
              break;
            }
          }
          return i;
        };
        i.GetRandomSymbol = function (e, t, i) {
          if (undefined === i) {
            i = false;
          }
          var n = Game_Define.Symbol.Empty;
          if (i) {
            if (1 == e) {
              if (!this.EMPTY_SYMBOL_IDX.includes(t)) {
                n = this.GetSpecificSymbol(e);
              }
            } else if (!this.EMPTY_SYMBOL_IDX.includes(t)) {
              n = 2 == t ? this.GetSpecificSymbol(e, true) : this.GetSpecificSymbol(e);
            }
          }
          if (!i) {
            if (3 == t) {
              n = this.m_plateInfo[e][2] == Game_Define.Symbol.Empty || this.m_plateRealInfo[e][0] == Game_Define.Symbol.Empty ? this.GetSpecificSymbol(e) : Game_Define.Symbol.Empty;
            } else if (-1 == t) {
              n = this.m_plateInfo[e][0] == Game_Define.Symbol.WILD && this.m_plateInfo[e][1] == Game_Define.Symbol.WILDBOT ? Game_Define.Symbol.Empty : this.m_plateInfo[e][0] == Game_Define.Symbol.Empty ? this.GetSpecificSymbol(e) : Game_Define.Symbol.Empty;
            } else if (-2 == t) {
              n = this.m_plateInfo[e][0] == Game_Define.Symbol.WILD && this.m_plateInfo[e][1] == Game_Define.Symbol.WILDBOT ? this.GetSpecificSymbol(e) : this.m_plateInfo[e][0] == Game_Define.Symbol.Empty ? Game_Define.Symbol.Empty : this.GetSpecificSymbol(e);
            } else if (4 == t) {
              n = this.m_plateInfo[e][2] == Game_Define.Symbol.Empty || this.m_plateRealInfo[e][0] == Game_Define.Symbol.Empty ? Game_Define.Symbol.Empty : this.GetSpecificSymbol(e);
            } else if (5 == t) {
              n = this.m_plateInfo[e][2] == Game_Define.Symbol.Empty || this.m_plateRealInfo[e][0] == Game_Define.Symbol.Empty ? this.GetSpecificSymbol(e) : Game_Define.Symbol.Empty;
            } else if (!this.EMPTY_SYMBOL_IDX.includes(t)) {
              n = this.GetSpecificSymbol(e);
            }
          }
          return n;
        };
        i.NudgeStart = function (e, t) {
          if (t > 0) {
            for (var i = 1; i < this.m_saveSymbols[e].length; ++i) {
              tween(this.m_saveSymbols[e][i]).to(.4, {
                position: new Vec3(this.m_saveSymbols[e][i - 1].position.x, this.m_saveSymbols[e][i - 1].position.y, this.m_saveSymbols[e][i - 1].position.z)
              }).start();
            }
            tween(this.m_saveSymbols[e][0]).to(.4, {
              position: new Vec3(this.m_saveSymbols[e][7].position.x, this.m_saveSymbols[e][0].position.y + 82.5, this.m_saveSymbols[e][7].position.z)
            }).start();
            if (0 == e) {
              this.m_gameView.EffectPlate.NudgeLeft.UpOne();
            } else {
              this.m_gameView.EffectPlate.NudgeRight.UpOne();
            }
          } else {
            for (var n = 0; n < this.m_saveSymbols[e].length - 1; ++n) {
              tween(this.m_saveSymbols[e][n]).to(.4, {
                position: new Vec3(this.m_saveSymbols[e][n + 1].position.x, this.m_saveSymbols[e][n + 1].position.y, this.m_saveSymbols[e][n + 1].position.z)
              }).start();
            }
            tween(this.m_saveSymbols[e][7]).to(.4, {
              position: new Vec3(this.m_saveSymbols[e][7].position.x, this.m_saveSymbols[e][7].position.y - 82.5, this.m_saveSymbols[e][7].position.z)
            }).start();
            this.m_saveSymbols[e][1].getComponent(Sprite).spriteFrame = null;
            if (0 == e) {
              this.m_gameView.EffectPlate.NudgeLeft.DownOne();
            } else {
              this.m_gameView.EffectPlate.NudgeRight.DownOne();
            }
          }
        };
        i.NudgeEnd = function (e, t, i) {
          if (t > 0) {
            for (var n = 0; n < this.m_saveSymbols[e].length; ++n) {
              this.m_saveSymbols[e][n].setPosition(this.m_symbolPos[e][n - 2].x, this.m_symbolPos[e][n - 2].y);
            }
            for (var o = 0; o < this.m_saveSymbols[e].length; ++o) {
              this.m_saveSymbols[e][o].getComponent(Sprite).spriteFrame = this.m_symbolSpriteFrames[this.m_plateRealInfo[e][o]];
              var r = this.m_plateRealInfo[e][o];
              if (o > 0) {
                if (r < Game_Define.Symbol.WILDTOP && r > 4) {
                  this.m_symbolMultiply[e][o].active = true;
                  this.m_symbolMultiply[e][o].getComponent(Sprite).spriteFrame = this.m_mgMultiplyImgs[Math.floor(r / 5) - 1];
                } else {
                  this.m_symbolMultiply[e][o].active = false;
                }
              }
            }
            if (1 == i) {
              if (1 == t || -1 == t) {
                for (var s = 0; s < this.m_saveSymbols[e].length; ++s) {
                  this.m_saveSymbols[e][s].active = false;
                }
              } else {
                for (var a = 2; a < 4; ++a) {
                  this.m_saveSymbols[e][a].active = false;
                }
              }
            }
            if (2 == i) {
              for (var l = 0; l < this.m_saveSymbols[e].length; ++l) {
                this.m_saveSymbols[e][l].active = false;
              }
            }
          } else {
            for (var c = 0; c < this.m_saveSymbols[e].length; ++c) {
              this.m_saveSymbols[e][c].setPosition(this.m_symbolPos[e][c - 2].x, this.m_symbolPos[e][c - 2].y);
            }
            for (var u = 0; u < this.m_saveSymbols[e].length; ++u) {
              this.m_saveSymbols[e][u].getComponent(Sprite).spriteFrame = this.m_symbolSpriteFrames[this.m_plateRealInfo[e][u]];
              var m = this.m_plateRealInfo[e][u];
              if (u > 0) {
                if (m < Game_Define.Symbol.WILDTOP && m > 4) {
                  this.m_symbolMultiply[e][u].active = true;
                  this.m_symbolMultiply[e][u].getComponent(Sprite).spriteFrame = this.m_mgMultiplyImgs[Math.floor(m / 5) - 1];
                } else {
                  this.m_symbolMultiply[e][u].active = false;
                }
              }
            }
            if (1 == i) {
              if (1 == t || -1 == t) {
                for (var p = 0; p < this.m_saveSymbols[e].length; ++p) {
                  this.m_saveSymbols[e][p].active = false;
                }
              } else {
                for (var h = 1; h < 4; ++h) {
                  this.m_saveSymbols[e][h].active = false;
                }
              }
            }
            if (2 == i) {
              for (var _ = 0; _ < this.m_saveSymbols[e].length; ++_) {
                this.m_saveSymbols[e][_].active = false;
              }
            }
          }
        };
        i.CheckChangeToFinalSymbol = function (e, t, i) {
          if (!this.m_isChangeToFinalSymbol[e][t]) {
            this.m_isChangeToFinalSymbol[e][t] = true;
            this.ChangeSymbol(e, t, i, true);
          }
        };
        i.SetOneReelStopEvent = function (e) {
          this.m_onReelStop = e;
        };
        i.HandleOneReelStop = function (e) {
          this.m_isColStops[e] = true;
          this.m_reelPositionOffset[e] = v3(0, 0, 0);
          if (this.m_onReelStop) {
            this.m_onReelStop(e, this.m_isClickStopBtn);
          }
        };
        i.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          if (0 != this.m_stopTime) {
            this.m_spinSpeed = this.m_hardStopSpinSpeed;
            var e = this.m_riseTime * 3;
            var t = Math.ceil((this.m_time - e) / this.m_spinSpeed);
            var i = (t = t > 0 ? t : 1) * this.m_spinSpeed + this.m_spinDelayTime + this.m_spinBufferTime01 + this.m_spinBufferTime02 + HARD_STOP_INTERVAL_TIME;
            if (i < this.m_stopTime) {
              this.m_stopTime = node.strip(i);
            }
            var n = t * this.m_spinSpeed;
            for (var o = 0; o < 3; o++) {
              if (this.m_reelStopTimes[o] > n) {
                this.m_reelStopTimes[o] = node.strip(n);
                this.m_reelPreTimes[o] = node.strip(n - this.m_spinSpeed);
              }
            }
          }
        };
        i.IsPlateStop = function () {
          return this.m_isStop;
        };
        i.GetSymbolPosition = function (e, t) {
          return this.m_symbolPos[e][t];
        };
        i.GetSymbolWorldPos = function (e, t) {
          if (this.m_isColOffset[e]) {
            t -= 1;
          }
          if (t < 0) {
            var i = t + this.m_upperSymbols[e].length;
            return this.m_upperSymbols[e][i].getWorldPosition();
          }
          if (t >= Game_Define.ROW) {
            var n = t - Game_Define.ROW;
            return this.m_lowerSymbols[e][n].getWorldPosition();
          }
          return this.m_symbols[e][t].getWorldPosition();
        };
        i.SetSymbolActive = function (e, t, i) {
          if (this.m_isColOffset[e]) {
            t -= 1;
          }
          if (t < 0) {
            var n = t + this.m_upperSymbols[e].length;
            if (this.m_upperSymbols[e][n].active != i) {
              this.m_upperSymbols[e][n].active = i;
            }
          } else if (t >= Game_Define.ROW) {
            var o = t - Game_Define.ROW;
            if (this.m_lowerSymbols[e][o].active != i) {
              this.m_lowerSymbols[e][o].active = i;
            }
          } else if (this.m_symbols[e][t].active != i) {
            this.m_symbols[e][t].active = i;
          }
        };
        i.SetUpperAndLowerActive = function (e) {
          for (var t = 0; t < Game_Define.COL; t++) {
            this.SetSymbolActive(t, -1, e);
            this.SetSymbolActive(t, Game_Define.COL, e);
          }
        };
        i.SetSpriteFrame = function (e, t, i) {
          if (undefined === i) {
            i = false;
          }
          var n = this.m_symbolSpriteFrames[t];
          e.getComponent(Sprite).spriteFrame = n;
          if (i) {
            e.getComponent(UITransform).setAnchorPoint(.5, .5);
          } else if (t == Game_Define.Symbol.WILDTOP || t == Game_Define.Symbol.WILDBOT) {
            e.getComponent(UITransform).setAnchorPoint(.5, .18);
          } else {
            e.getComponent(UITransform).setAnchorPoint(.5, .5);
          }
        };
        i.PushPlate = function (e, t) {
          if (e > 0) {
            for (var i = 0; i < this.m_plateRealInfo[t].length - 1; ++i) {
              var n = this.m_plateRealInfo[t][i + 1];
              this.m_plateRealInfo[t][i] = n;
            }
            this.m_plateRealInfo[t][5] = Game_Define.Symbol.Empty;
          } else {
            for (var o = this.m_plateRealInfo[t].length - 1; o > 0; --o) {
              var r = this.m_plateRealInfo[t][o - 1];
              this.m_plateRealInfo[t][o] = r;
            }
            this.m_plateRealInfo[t][0] = Game_Define.Symbol.Empty;
          }
        };
        i.SetIsNearWin = function (e) {
          if (!node$4.IsHardStop && e) {
            var t = this.m_riseTime * 3;
            this.m_startNearWinCol = 2;
            var i = this.m_startNearWinCol;
            this.m_nowStopColum = i;
            for (var n = 0; n < this.m_nearWinLock.length; n++) {
              if (n >= i) {
                this.m_nearWinLock[n] = false;
              }
            }
            for (var o = 0; o < Game_Define.COL; o++) {
              if (o >= i) {
                this.m_reelPreTimes[o] = node.strip(this.m_reelPreTimes[o - 1] + NearWinTime);
                this.m_reelStopTimes[o] = node.strip(this.m_reelStopTimes[o - 1] + NearWinTime);
              }
            }
            this.m_stopTime = this.m_reelStopTimes[Game_Define.COL - 1] + +t + this.m_spinBufferTime01 + this.m_spinBufferTime02;
          }
        };
        i.update = function () {};
        i.ShowNearWin = function () {
          this.m_nearWinLock[this.m_nowStopColum] = true;
          if (this.m_nowStopColum < Game_Define.COL && !this.m_isClickStopBtn) {
            if (-1 != this.m_nearWinSoundId) {
              this.m_gameView.GameSoundMgr.StopNearWin();
              this.m_nearWinSoundId = -1;
            }
            this.m_nearWinSoundId = this.m_gameView.GameSoundMgr.PlayNearWinSound();
            this.m_isNearWinPlaying = true;
            this.m_nowStopColum++;
          } else {
            if (-1 != this.m_nearWinSoundId) {
              this.m_gameView.GameSoundMgr.StopNearWin();
              this.m_nearWinSoundId = -1;
            }
            if (this.m_isNearWinPlaying) {
              this.m_gameView.NearWinEnd();
              this.m_isNearWinPlaying = false;
            }
          }
        };
        i.CheckAndChangeSymbolToRight = function () {
          var e = false;
          var t = false;
          var i = "";
          var n = "";
          for (var o = 0; o < 3; o++) {
            var r = Game_Define.ROW + this.m_lowSymbolAmount;
            for (var s = -this.m_upSymbolAmount; s < r; s++) {
              if (!this.m_isCheckAndChangeToRightSymbol[o][s]) {
                var a = this.GetSymbolNodeByRow(o, s);
                var l = a.position;
                var c = this.m_symbolPos[o][s];
                if (Math.abs(l.x - c.x) > 1 || Math.abs(l.y - c.y) > 1) {
                  e = true;
                  error("位置錯誤");
                  error("col:", o, "row:", s, "位置:", l);
                  error("正確位置：", c);
                  i += "[" + o.toString() + "][" + s.toString() + "] X: " + l.toString() + " | ";
                  a.setPosition(v3(c.x, c.y, 0));
                }
                var u = s + 2;
                var m = a.getComponent(Sprite).spriteFrame;
                var p = this.m_plateRealInfo[o][u];
                var h = this.m_symbolSpriteFrames[p];
                if (m && h) {
                  if (m.name != h.name) {
                    t = true;
                    error("Symbol錯誤");
                    error("col:", o, "row:", s, "Symbol:", m.name);
                    error("正確Symbol：", h.name);
                    n += "[" + o.toString() + "][" + s.toString() + "] X: " + m.name + " O: " + h.name + " | ";
                    a.getComponent(Sprite).spriteFrame = h;
                    this.ShowMultiplySymbol(o, s, p);
                    this.SetSpriteFrame(a, p, true);
                  }
                } else {
                  var _ = m ? m.name : "Empty";
                  var d = h ? h.name : "Empty";
                  if (_ != d) {
                    t = true;
                    error("Symbol錯誤");
                    error("col:", o, "row:", s, "Symbol:", _);
                    error("正確Symbol：", d);
                    n += "[" + o.toString() + "][" + s.toString() + "] X: " + _ + " O: " + d + " | ";
                    a.getComponent(Sprite).spriteFrame = h;
                    this.ShowMultiplySymbol(o, s, p);
                    this.SetSpriteFrame(a, p, true);
                  }
                }
                this.m_isCheckAndChangeToRightSymbol[o][s] = true;
              }
            }
          }
          if (e) {
            i += "stopTime:" + this.m_stopTime.toString() + ", reelStopTime:" + this.m_reelStopTimes.toString();
            this.m_gameView.SendVerificationEvent(Game_Define.EVENT_ID.POSITION_ERROR, i);
            error("stopTime:", this.m_stopTime, "; reelStopTime: ", this.m_reelStopTimes);
          }
          if (t) {
            this.m_gameView.SendVerificationEvent(Game_Define.EVENT_ID.SYMBOL_ERROR, n);
          }
        };
        i.GetSymbolNodeByRow = function (e, t) {
          switch (t) {
            case -2:
              return this.m_upperSymbols[e][0];
            case -1:
              return this.m_upperSymbols[e][1];
            case 0:
              return this.m_symbols[e][0];
            case 1:
              return this.m_symbols[e][1];
            case 2:
              return this.m_symbols[e][2];
            case 3:
              return this.m_lowerSymbols[e][0];
            case 4:
              return this.m_lowerSymbols[e][1];
            case 5:
              return this.m_lowerSymbols[e][2];
          }
        };
        _createClass(t, [{
          key: "PlateInfo",
          get: function () {
            return this.m_plateInfo;
          }
        }, {
          key: "IsColOffset",
          get: function () {
            return this.m_isColOffset;
          }
        }]);
        return t;
      }(Component);
      _descriptor$5 = _applyDecoratedDescriptor(_class2$7.prototype, "m_symbolSpriteFrames", [_dec$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$4 = _applyDecoratedDescriptor(_class2$7.prototype, "m_mgMultiplyImgs", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$3 = _applyDecoratedDescriptor(_class2$7.prototype, "m_reelNodes", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var _dec$e;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ecbc865MuZDT7AbvHbLCBKm", "ReelUnitBGSpine", undefined);
      var ccclass$f = _decorator.ccclass;
      _dec$e = ccclass$f("ReelBGSpine");
      var _dec$f;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a5ff2wandVAQIxBPuECiy98", "ReelBottomSpine", undefined);
      var ccclass$g = _decorator.ccclass;
      _dec$f = ccclass$g("ReelBottomSpine");
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1f7590Gx0xFOaVppXSgZXpy", "RotationMgr", undefined);
      var _dec$g;
      var _dec2$6;
      var _dec3$5;
      var _class$h;
      var _class2$8;
      var _descriptor$6;
      var _descriptor2$5;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "dec1cxdxz1AMZS/zAGY/gPq", "MutiLanguageUnit", undefined);
      var ccclass$h = _decorator.ccclass;
      var property$6 = _decorator.property;
      _dec$g = ccclass$h("MutiLanguageUnit");
      _dec2$6 = property$6({
        type: Sprite,
        tooltip: "需要換圖的Sprite"
      });
      _dec3$5 = property$6({
        tooltip: "SpriteFrame Name"
      });
      _class2$8 = function () {
        _initializerDefineProperty(this, "m_sprite", _descriptor$6, this);
        _initializerDefineProperty(this, "m_spriteFrameName", _descriptor2$5, this);
      };
      _descriptor$6 = _applyDecoratedDescriptor(_class2$8.prototype, "m_sprite", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$5 = _applyDecoratedDescriptor(_class2$8.prototype, "m_spriteFrameName", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      });
      var MutiLanguageUnit = _dec$g(_class$h = _class2$8) || _class$h;
      var _dec$h;
      var _dec2$7;
      var _dec3$6;
      var _class2$9;
      var _descriptor$7;
      var _descriptor2$6;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "900940Avi1CkIvJgUDN1Vaw", "MutiLanguageView", undefined);
      var ccclass$i = _decorator.ccclass;
      var property$7 = _decorator.property;
      _dec$h = ccclass$i("MutiLanguageView");
      _dec2$7 = property$7({
        type: [MutiLanguageUnit],
        tooltip: "需要換圖的Node Unit"
      });
      _dec3$6 = property$7({
        type: SpriteAtlas,
        tooltip: "LOGO合圖"
      });
      _class2$9 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_needChangeUnit", _descriptor$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titleSpriteAtlas", _descriptor2$6, _assertThisInitialized(t));
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
            this.m_titleSprite = this.m_titleSpriteAtlas.getSpriteFrame("logo_" + node$1.Lang.EN);
          }
        };
        i.SetTxt = function () {
          var e = this.m_titleSpriteAtlas.getSpriteFrame("logo_" + node$c.CurrLang);
          if (!e) {
            e = this.m_titleSpriteAtlas.getSpriteFrame("logo_" + node$1.Lang.EN);
          }
          this.m_gameView.Logo.spriteFrame = e;
          this.m_gameView.Manual.SetTxt(Game_Define.MANUAL_STRING, Game_Define.MANUAL_TITLE_STRING);
          var t = node$c.GetGameAtlas();
          for (var i = 0; i < this.m_needChangeUnit.length; i++) {
            var n = this.m_needChangeUnit[i].m_spriteFrameName;
            this.m_needChangeUnit[i].m_sprite.spriteFrame = t.getSpriteFrame(n);
          }
        };
        i.GetTitleSprite = function () {
          return this.m_titleSprite;
        };
        return t;
      }(Component);
      _descriptor$7 = _applyDecoratedDescriptor(_class2$9.prototype, "m_needChangeUnit", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$6 = _applyDecoratedDescriptor(_class2$9.prototype, "m_titleSpriteAtlas", [_dec3$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$i;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3c8ec7u2+xOcZjOfb7BATxk", "FeatureGameMgr", undefined);
      var ccclass$j = _decorator.ccclass;
      _dec$i = ccclass$j("FeatureGameView");
      var _dec$j;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d4485HFTh1KhaUz2swNg5iL", "BottomBarMgr", undefined);
      var ccclass$k = _decorator.ccclass;
      _dec$j = ccclass$k("BottomBarMgr");
      var _dec$k;
      var _dec2$8;
      var _dec3$7;
      var _dec4$3;
      var _dec5$3;
      var _dec6$3;
      var _class2$a;
      var _descriptor$8;
      var _descriptor2$7;
      var _descriptor3$4;
      var _descriptor4$3;
      var _descriptor5$3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ea8eeawvr9IlbNLQROwRCYA", "MachineView", undefined);
      var ccclass$l = _decorator.ccclass;
      var property$8 = _decorator.property;
      _dec$k = ccclass$l("MachineView");
      _dec2$8 = property$8({
        type: sp.Skeleton,
        tooltip: "機台特效"
      });
      _dec3$7 = property$8({
        type: [sp.Skeleton],
        tooltip: "連線左邊的動畫"
      });
      _dec4$3 = property$8({
        type: [Node],
        tooltip: "連線線條物件"
      });
      _dec5$3 = property$8({
        type: sp.Skeleton,
        tooltip: "大獎預告動畫"
      });
      _dec6$3 = property$8({
        type: sp.Skeleton,
        tooltip: "輪帶前特效"
      });
      _class2$a = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
          }
          (t = e.call.apply(e, [this].concat(n)) || this).m_machineAnimName = {
            NearWin: "NearWin",
            Idle: "Idle",
            WildWin: "Wild_Win",
            Win: "Win"
          };
          t.m_nearAnimName = {
            NearWin_End: "NearWin_End",
            NearWin_Loop: "NearWin_Loop",
            NearWin_Loop2: "NearWin_Loop2",
            NearWin_Start: "NearWin_Start"
          };
          t.m_frontAnimName = {
            NearWin: "NearWin",
            Win: "Win",
            Win2: "Win2"
          };
          t.m_lineAnimName = {
            Idle: "Idle",
            Lock: "Lock",
            Win: "Win"
          };
          _initializerDefineProperty(t, "m_mashineSke", _descriptor$8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_lineSkes", _descriptor2$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_lineNd", _descriptor3$4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_nearWinSke", _descriptor4$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_frontReelSke", _descriptor5$3, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_isPlayingIdle = false;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.RefreshView = function () {};
        i.Init = function (e) {
          this.m_gameView = e;
        };
        i.Reset = function (e) {
          if (undefined === e) {
            e = false;
          }
          if (!e) {
            this.PlayIDle();
          }
          this.HideLine();
          this.ResetReelSke();
        };
        i.PlayIDle = function () {
          if (!this.m_isPlayingIdle) {
            SpineKit.PlayAnimation(this.m_mashineSke, this.m_machineAnimName.Idle, true);
            this.m_isPlayingIdle = true;
          }
        };
        i.PlayNearWin = function (e) {
          var t = this;
          SpineKit.PlayAnimation(this.m_mashineSke, this.m_machineAnimName.NearWin, true);
          SpineKit.PlayAnimation(this.m_nearWinSke, this.m_nearAnimName.NearWin_Start, false);
          this.m_nearWinSke.setCompleteListener(function () {
            if (e) {
              SpineKit.PlayAnimation(t.m_nearWinSke, t.m_nearAnimName.NearWin_Loop2, true);
              SpineKit.PlayAnimation(t.m_frontReelSke, t.m_frontAnimName.NearWin, true);
            } else {
              SpineKit.PlayAnimation(t.m_nearWinSke, t.m_nearAnimName.NearWin_Loop, true);
            }
            t.m_nearWinSke.setCompleteListener(null);
          });
          this.m_isPlayingIdle = false;
        };
        i.PlayWildWin = function () {
          SpineKit.PlayAnimation(this.m_mashineSke, this.m_machineAnimName.WildWin, true);
          this.m_isPlayingIdle = false;
        };
        i.PlayWin = function () {
          SpineKit.PlayAnimation(this.m_mashineSke, this.m_machineAnimName.Win, true);
          this.m_isPlayingIdle = false;
        };
        i.PlayLineWin = function (e) {
          log(e);
          for (var t = 0; t < e.length; ++t) {
            this.m_lineNd[e[t]].active = true;
            SpineKit.PlayAnimation(this.m_lineSkes[e[t]], this.m_lineAnimName.Win, true);
          }
          for (var i = 0; i < this.m_lineSkes.length; ++i) {
            if (-1 == e.indexOf(i)) {
              SpineKit.PlayAnimation(this.m_lineSkes[i], this.m_lineAnimName.Lock, true);
            }
          }
        };
        i.PlaySingleLine = function (e) {
          this.m_lineNd[e].active = true;
          SpineKit.PlayAnimation(this.m_lineSkes[e], this.m_lineAnimName.Win, true);
          for (var t = 0; t < this.m_lineSkes.length; ++t) {
            if (e != t) {
              SpineKit.PlayAnimation(this.m_lineSkes[t], this.m_lineAnimName.Lock, true);
            }
          }
        };
        i.HideLine = function () {
          for (var e = 0; e < this.m_lineNd.length; ++e) {
            this.m_lineNd[e].active = false;
          }
          for (var t = 0; t < this.m_lineSkes.length; ++t) {
            SpineKit.PlayAnimation(this.m_lineSkes[t], this.m_lineAnimName.Idle, true);
          }
        };
        i.PlayReelNormalWin = function () {
          this.m_frontReelSke.node.active = true;
          SpineKit.PlayAnimation(this.m_frontReelSke, this.m_frontAnimName.Win2, true);
        };
        i.PlayReelSpeWin = function () {
          this.m_frontReelSke.node.active = true;
          SpineKit.PlayAnimation(this.m_frontReelSke, this.m_frontAnimName.Win, true);
        };
        i.ResetReelSke = function () {
          this.m_frontReelSke.clearTracks();
          this.m_frontReelSke.node.active = false;
        };
        return t;
      }(Component);
      _descriptor$8 = _applyDecoratedDescriptor(_class2$a.prototype, "m_mashineSke", [_dec2$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$7 = _applyDecoratedDescriptor(_class2$a.prototype, "m_lineSkes", [_dec3$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$4 = _applyDecoratedDescriptor(_class2$a.prototype, "m_lineNd", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor4$3 = _applyDecoratedDescriptor(_class2$a.prototype, "m_nearWinSke", [_dec5$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$3 = _applyDecoratedDescriptor(_class2$a.prototype, "m_frontReelSke", [_dec6$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$l;
      var _dec2$9;
      var _class2$b;
      var _descriptor$9;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a125eK2/wxEZpAc05CeKDgC", "CharacterSpine", undefined);
      var ccclass$m = _decorator.ccclass;
      var property$9 = _decorator.property;
      _dec$l = ccclass$m("CharacterSpine");
      _dec2$9 = property$9({
        type: sp.Skeleton,
        tooltip: "水晶動畫"
      });
      _class2$b = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
          }
          (t = e.call.apply(e, [this].concat(n)) || this).m_CryStalAniName = {
            Idle: "Idle",
            NearWin: "NearWin",
            WildWin: "WildWin",
            Win: "Win"
          };
          _initializerDefineProperty(t, "m_characterSke", _descriptor$9, _assertThisInitialized(t));
          t.m_isPlayingIdle = false;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.PlayCrystalIdle = function () {
          if (!this.m_isPlayingIdle) {
            this.m_isPlayingIdle = true;
            SpineKit.PlayAnimation(this.m_characterSke, this.m_CryStalAniName.Idle, true);
          }
        };
        i.PlayCrystalNearWin = function () {
          this.m_isPlayingIdle = false;
          SpineKit.PlayAnimation(this.m_characterSke, this.m_CryStalAniName.NearWin, true);
        };
        i.PlayCrystalWildWin = function () {
          this.m_isPlayingIdle = false;
          SpineKit.PlayAnimation(this.m_characterSke, this.m_CryStalAniName.WildWin, true);
        };
        i.PlayCrystalWin = function () {
          this.m_isPlayingIdle = false;
          SpineKit.PlayAnimation(this.m_characterSke, this.m_CryStalAniName.Win, true);
        };
        _createClass(t, [{
          key: "CharacterSke",
          get: function () {
            return this.m_characterSke;
          }
        }]);
        return t;
      }(Component);
      _descriptor$9 = _applyDecoratedDescriptor(_class2$b.prototype, "m_characterSke", [_dec2$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$m;
      var _descriptor$a;
      var _class3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f220fPUiqZITKIw3KOQxujS", "BackgroundSpine", undefined);
      var property$a = _decorator.property;
      _dec$m = property$a({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _class3 = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$a, _assertThisInitialized(t));
          t.m_gameView = null;
          t.isPlayingIdle = false;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.Init = function (e) {
          this.m_gameView = e;
        };
        i.RefreshView = function () {
          this.Reset();
          this.PlayMGIdle(true);
        };
        i.Reset = function () {
          this.m_spine.clearTracks();
          this.m_spine.setToSetupPose();
        };
        i.PlayMGIdle = function (e) {
          if (undefined === e) {
            e = false;
          }
          if (!(this.isPlayingIdle && !e)) {
            if (this.IsLandscape) {
              this.PlayAnimation(t.SpineAnimName.MG_IDLE_L, true);
            } else {
              this.PlayAnimation(t.SpineAnimName.MG_IDLE_S, true);
            }
            this.isPlayingIdle = true;
          }
        };
        i.PlayMGWildWin = function () {
          this.isPlayingIdle = false;
          if (this.IsLandscape) {
            this.PlayAnimation(t.SpineAnimName.MG_WILDWIN_L, true);
          } else {
            this.PlayAnimation(t.SpineAnimName.MG_WILDWIN_S, true);
          }
        };
        i.PlayMGWin = function () {
          this.isPlayingIdle = false;
          if (this.IsLandscape) {
            this.PlayAnimation(t.SpineAnimName.MG_WIN_L, true);
          } else {
            this.PlayAnimation(t.SpineAnimName.MG_WIN_S, true);
          }
        };
        i.PlayAnimation = function (e, t) {
          SpineKit.PlayAnimation(this.m_spine, e, t);
        };
        _createClass(t, [{
          key: "IsLandscape",
          get: function () {
            return this.m_gameView.RotationMgr.IsLandscape;
          }
        }]);
        return t;
      }(Component);
      _class3.SpineAnimName = {
        MG_IDLE_L: "Idle_L",
        MG_IDLE_S: "Idle_S",
        MG_WIN_L: "Win_L",
        MG_WIN_S: "Win_S",
        MG_WILDWIN_L: "Wild_Win_L",
        MG_WILDWIN_S: "Wild_Win_S"
      };
      _descriptor$a = _applyDecoratedDescriptor(_class3.prototype, "m_spine", [_dec$m], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$n;
      var _dec2$a;
      var _class2$d;
      var _descriptor$b;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "63bf9GduRJENobYP3Ft3FOQ", "IntroSpine", undefined);
      var ccclass$o = _decorator.ccclass;
      var property$b = _decorator.property;
      _dec$n = ccclass$o("IntroSpine");
      _dec2$a = property$b({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _class2$d = function (e) {
        function t() {
          var t;
          var i = arguments.length;
          var n = new Array(i);
          for (var o = 0; o < i; o++) {
            n[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(n)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$b, _assertThisInitialized(t));
          t.m_isIntroed = false;
          return t;
        }
        _inheritsLoose(t, e);
        var i = t.prototype;
        i.SetIntro = function () {
          if (!this.m_isIntroed) {
            this.node.active = true;
            this.PlayAnimation("GameIntro");
            this.m_spine.paused = true;
          }
        };
        i.PlayIntro = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_isIntroed = true;
                    this.m_spine.paused = false;
                    e.next = 4;
                    return this.PlayAnimation("GameIntro");
                  case 4:
                    this.node.active = false;
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
        i.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, i) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === i) {
                      i = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t, i);
                  case 3:
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
          key: "IsIntroed",
          set: function (e) {
            this.m_isIntroed = e;
          }
        }]);
        return t;
      }(Component);
      _descriptor$b = _applyDecoratedDescriptor(_class2$d.prototype, "m_spine", [_dec2$a], {
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
      cclegacy._RF.push({}, "452f0bLfpZPF42ip8bLBtSv", "MachineSpine", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "bd26eoCBsZG/ZLxqfIiwMi0", "WinLinePointSpine", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "25470yMSQxO/JfLQNp7nAQv", "ChangeScaleTool", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1f19diWFjdNf7KSiCXw3Vgq", "NodeMoveTool", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c9dc9xKcyxIKoSh5Jykhe2D", "NodeThrowTool", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3d6e7u9FE9ISLf5tiTdsOAi", "RunScoreTool", undefined);
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