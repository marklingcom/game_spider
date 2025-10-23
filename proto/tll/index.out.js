System.register("chunks:///game.js", ["./index-48cd8de3.js", "cc"], function (exports, module) {
  "use strict";

  var _applyDecoratedDescriptor;
  var _inheritsLoose;
  var _initializerDefineProperty;
  var _assertThisInitialized;
  var node;
  var node$1;
  var node$2;
  var node$3;
  var node$4;
  var CommonState;
  var node$5;
  var node$6;
  var _createClass;
  var _asyncToGenerator;
  var _regeneratorRuntime;
  var SpineKit;
  var Common_IdleState;
  var BaseState;
  var node$7;
  var SlotBottomBarState;
  var node$8;
  var node$9;
  var node$a;
  var node$b;
  var node$c;
  var ManualComponent;
  var BigWinComponent;
  var CommonBuyBonus;
  var AstarteInit;
  var node$d;
  var SwitchOffKeyDefine;
  var BigWinAnimName;
  var node$e;
  var CommonEventName;
  var node$f;
  var BottomBar_UIName;
  var DEFAULT_TITLE_KEY;
  var node$g;
  var node$h;
  var node$i;
  var node$j;
  var node$k;
  var node$l;
  var cclegacy;
  var _decorator;
  var Sprite;
  var CCString;
  var Label;
  var Component;
  var Node;
  var Animation;
  var Button;
  var color;
  var Enum;
  var sp;
  var Prefab;
  var SpriteFrame;
  var ParticleSystem2D;
  var instantiate;
  var UIRenderer;
  var UIOpacity;
  var v3;
  var log;
  var Tween;
  var Vec2;
  var Vec3;
  var Mask;
  var tween;
  var UITransform;
  var Size;
  var isValid;
  var Font;
  var error;
  var SpriteAtlas;
  var sys;
  var input;
  var Input;
  var KeyCode;
  var screen;
  var view;
  var ResolutionPolicy;
  return {
    setters: [function (e) {
      _applyDecoratedDescriptor = e._;
      _inheritsLoose = e.a;
      _initializerDefineProperty = e.b;
      _assertThisInitialized = e.c;
      node = e.i;
      node$1 = e.h;
      node$2 = e.e;
      node$3 = e.f;
      node$4 = e.m;
      CommonState = e.C;
      node$5 = e.g;
      node$6 = e.k;
      _createClass = e.d;
      _asyncToGenerator = e.l;
      _regeneratorRuntime = e.q;
      SpineKit = e.t;
      Common_IdleState = e.u;
      BaseState = e.B;
      node$7 = e.v;
      SlotBottomBarState = e.r;
      node$8 = e.w;
      node$9 = e.x;
      node$a = e.y;
      node$b = e.p;
      node$c = e.z;
      ManualComponent = e.M;
      BigWinComponent = e.A;
      CommonBuyBonus = e.D;
      AstarteInit = e.E;
      node$d = e.F;
      SwitchOffKeyDefine = e.S;
      BigWinAnimName = e.G;
      node$e = e.H;
      CommonEventName = e.I;
      node$f = e.J;
      BottomBar_UIName = e.K;
      DEFAULT_TITLE_KEY = e.L;
      node$g = e.N;
      node$h = e.O;
      node$i = e.P;
      node$j = e.Q;
      node$k = e.o;
      node$l = e.R;
    }, function (e) {
      cclegacy = e.cclegacy;
      _decorator = e._decorator;
      Sprite = e.Sprite;
      CCString = e.CCString;
      Label = e.Label;
      Component = e.Component;
      Node = e.Node;
      Animation = e.Animation;
      Button = e.Button;
      color = e.color;
      Enum = e.Enum;
      sp = e.sp;
      Prefab = e.Prefab;
      SpriteFrame = e.SpriteFrame;
      ParticleSystem2D = e.ParticleSystem2D;
      instantiate = e.instantiate;
      UIRenderer = e.UIRenderer;
      UIOpacity = e.UIOpacity;
      v3 = e.v3;
      log = e.log;
      Tween = e.Tween;
      Vec2 = e.Vec2;
      Vec3 = e.Vec3;
      Mask = e.Mask;
      tween = e.tween;
      UITransform = e.UITransform;
      Size = e.Size;
      isValid = e.isValid;
      Font = e.Font;
      error = e.error;
      SpriteAtlas = e.SpriteAtlas;
      sys = e.sys;
      input = e.input;
      Input = e.Input;
      KeyCode = e.KeyCode;
      screen = e.screen;
      view = e.view;
      ResolutionPolicy = e.ResolutionPolicy;
    }],
    execute: function () {
      var _dec;
      var _dec2;
      var _dec3;
      var _dec4;
      var _dec5;
      var _class2;
      var _descriptor;
      var _descriptor2;
      var _descriptor3;
      var _descriptor4;
      cclegacy._RF.push({}, "2fcff6MKDVGFZeMiNwJ8XdH", "BuyBonusCell", undefined);
      var ccclass = _decorator.ccclass;
      var property = _decorator.property;
      _dec = ccclass("BuyBonusCell");
      _dec2 = property({
        type: Sprite,
        tooltip: "購買文字"
      });
      _dec3 = property({
        type: Sprite,
        tooltip: "項目標題"
      });
      _dec4 = property({
        type: CCString,
        tooltip: "標題圖片名稱"
      });
      _dec5 = property({
        type: Label,
        tooltip: "金額"
      });
      _class2 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_buyHintSprite", _descriptor, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titleSprite", _descriptor2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titlePicName", _descriptor3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_priceLabel", _descriptor4, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.start = function () {};
        n.SetTxt = function () {
          var e = node.GetGameAtlas();
          this.m_buyHintSprite.spriteFrame = e.getSpriteFrame("Txt_Buy_Feature_Buy");
          this.m_titleSprite.spriteFrame = e.getSpriteFrame(this.m_titlePicName);
        };
        n.SetPrice = function (e) {
          this.m_priceLabel.string = e;
        };
        return t;
      }(Component);
      _descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_buyHintSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_titleSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_titlePicName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      });
      _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "m_priceLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "22634/ooSRFbLeSP9IM51I9", "BuyBonus", undefined);
      var GAMEVIEW_STATE;
      var DelayType;
      var Symbol;
      var EFFECT_Z_INDEX;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c41dc37h3tIzYWZ7C7PUUXM", "Game_Define", undefined);
      (function (e) {
        e[e.SET_BAR = 0] = "SET_BAR";
        e[e.GET_INFO = 1] = "GET_INFO";
        e[e.WAIT_RES = 2] = "WAIT_RES";
        e[e.WAIT_READY = 3] = "WAIT_READY";
        e[e.PLATE_SHOW = 4] = "PLATE_SHOW";
        e[e.FEATURE_SHOW = 5] = "FEATURE_SHOW";
        e[e.UNSHOW_PREPARE = 6] = "UNSHOW_PREPARE";
        e[e.FIRST_PLATE = 7] = "FIRST_PLATE";
        e[e.WIN = 8] = "WIN";
        e[e.NEAR_WIN = 9] = "NEAR_WIN";
        e[e.AWARD = 10] = "AWARD";
        e[e.ROUND_SHOW_END = 11] = "ROUND_SHOW_END";
        e[e.ENTER_FREE = 12] = "ENTER_FREE";
        e[e.LEAVE_FREE = 13] = "LEAVE_FREE";
        e[e.ROUND_END = 14] = "ROUND_END";
      })(GAMEVIEW_STATE || (GAMEVIEW_STATE = {}));
      (function (e) {
        e[e.Normal = 0] = "Normal";
        e[e.Get = 1] = "Get";
        e[e.NotGet = 2] = "NotGet";
      })(DelayType || (DelayType = {}));
      (function (e) {
        e[e.SYMBOL_00 = 0] = "SYMBOL_00";
        e[e.SYMBOL_01 = 1] = "SYMBOL_01";
        e[e.SYMBOL_02 = 2] = "SYMBOL_02";
        e[e.SYMBOL_03 = 3] = "SYMBOL_03";
        e[e.SYMBOL_04 = 4] = "SYMBOL_04";
        e[e.SYMBOL_05 = 5] = "SYMBOL_05";
        e[e.SYMBOL_06 = 6] = "SYMBOL_06";
        e[e.SYMBOL_07 = 7] = "SYMBOL_07";
        e[e.SYMBOL_08 = 8] = "SYMBOL_08";
        e[e.SYMBOL_09 = 9] = "SYMBOL_09";
        e[e.SYMBOL_10 = 10] = "SYMBOL_10";
        e[e.SYMBOL_G = 11] = "SYMBOL_G";
        e[e.SYMBOL_R = 12] = "SYMBOL_R";
        e[e.SYMBOL_P = 13] = "SYMBOL_P";
        e[e.SYMBOL_14 = 14] = "SYMBOL_14";
        e[e.SYMBOL_17 = 15] = "SYMBOL_17";
      })(Symbol || (Symbol = {}));
      (function (e) {
        e[e.Eft = 400] = "Eft";
        e[e.NearWin = 401] = "NearWin";
        e[e.BigWin = 402] = "BigWin";
      })(EFFECT_Z_INDEX || (EFFECT_Z_INDEX = {}));
      var Game_Define = function () {
        function e() {}
        e.OnExit = function () {
          this.AudioClips = {
            MG_BGM: null,
            FG_BGM: null,
            CriticalPartVoice_Hit: null,
            end_declare: null,
            FG_COIN_01: null,
            FG_declare: null,
            FG_in1: null,
            FG_LION_LV1: null,
            FG_LION_LV2: null,
            FG_LION_LV3: null,
            FG_LION_LV4: null,
            FG_near: null,
            FG_RED_FALL: null,
            FG_RED_GREEN: null,
            FG_Respin_01: null,
            FG_Respin: null,
            FG_SpinBall: null,
            Reel_Spin: null,
            JP_declare: null,
            MG_god: null,
            MG_FAKEGROW_02: null,
            MG_in: null,
            MG_scatter_collect_01: null,
            MG_scatter_collect_02: null,
            MG_scatter_collect_03: null,
            Open_door: null,
            reel_stop: null,
            respin_switch: null,
            scatter_add_end: null,
            scatter_add_fly: null,
            scatter_ring: null,
            scatter_stop: null,
            Small_Win01: null,
            Small_Win02: null,
            Small_Win03: null,
            Big_win: null,
            Big_win_end: null,
            ChangeWin_1: null,
            ChangeWin_2: null
          };
        };
        e.TimeScale = function () {
          var t = 1.2;
          if (node$1.IsHardStop) {
            t = e.FastTimeScale;
          }
          return t;
        };
        return e;
      }();
      Game_Define.COL = 5;
      Game_Define.ROW = 3;
      Game_Define.SeparateLineWidth = 4;
      Game_Define.NODE_PREFIX_NAME = ["low", "", "up"];
      Game_Define.MIDDLE_PLATE_INDEX = 1;
      Game_Define.MaxSymbolEachColumn = 3;
      Game_Define.MinSymbolEachColumn = 3;
      Game_Define.SymbolHeight = 100;
      Game_Define.FAKE_COIN_ODD = .2;
      Game_Define.FAKE_JP_ODD = .2;
      Game_Define.Color = {
        Light: color(255, 255, 255),
        Dark: color(101.25, 94.5, 73.5)
      };
      Game_Define.Opacity = {
        Light: 255,
        Dark: 0
      };
      Game_Define.Ver = "19";
      Game_Define.GameState = Enum(GAMEVIEW_STATE);
      Game_Define.VIEW = {
        WIDTH: 1136,
        HEIGHT: 640
      };
      Game_Define.FRAME_SPIN_SPEED = {
        Time_Speed: 2,
        Amime_Speed: 1
      };
      Game_Define.FastTimeScale = 1.3;
      Game_Define.DemoBet = 10;
      Game_Define.Symbol = Enum(Symbol);
      Game_Define.EFFECT_Z_INDEX = Enum(EFFECT_Z_INDEX);
      Game_Define.IsInFG = false;
      Game_Define.IsNearWin = false;
      Game_Define.Round = -1;
      Game_Define.PlateIdx = -1;
      Game_Define.TotalWin = 0;
      Game_Define.JPOdds = [];
      Game_Define.CrackLevels = [];
      Game_Define.CharacterFakeRate = .2;
      Game_Define.FreePlate = [];
      Game_Define.N_FLY = {
        Fly: .1
      };
      Game_Define.SC_FLY = {
        Fly: .5,
        FlyEnd: .5,
        ScaleMax: .2,
        ScaleFinal: .3,
        ScaleEnd: .5
      };
      Game_Define.SC_FLY_SETTING = {
        RotationSpeed: 2,
        RotationHighSpeed: 10,
        ScaleMax: .7,
        ScaleFinal: .3,
        FinalColAngle: 26,
        Threshold: .8
      };
      Game_Define.Time = {
        GameIntro: .1,
        SetBarNodeVisiable: .3,
        DemoWaitSpin: .5,
        WaitEnterFg: .5,
        EffectFgInit: .5,
        RoundFgInit: 1,
        RoundAdd: .2,
        RoundUpdate: .3,
        FgBounce: .5,
        RoundInit: .5,
        Lantern: .15,
        ZoneInit: .5,
        ZoneFadeIn: .5,
        WinLine: 1
      };
      Game_Define.Level = {
        NONE: 0,
        BIG: 1,
        MEGA: 2,
        SUPER: 3
      };
      Game_Define.PlateEftOdds = [1, 3, 6, 15, 30];
      Game_Define.AWARD_SETTING = [{
        BetRate: 6,
        Lvl: Game_Define.Level.BIG
      }, {
        BetRate: 15,
        Lvl: Game_Define.Level.MEGA
      }, {
        BetRate: 30,
        Lvl: Game_Define.Level.SUPER
      }];
      Game_Define.MgSlotReel = {
        col: 5,
        row: 1,
        oneCol: 1,
        oneRow: 3
      };
      Game_Define.FgSlotReel = {
        col: 5,
        row: 3,
        oneCol: 1,
        oneRow: 1
      };
      Game_Define.AudioPathPre = "Sound/";
      Game_Define.AudioClips = {
        MG_BGM: null,
        FG_BGM: null,
        CriticalPartVoice_Hit: null,
        end_declare: null,
        FG_COIN_01: null,
        FG_declare: null,
        FG_in1: null,
        FG_LION_LV1: null,
        FG_LION_LV2: null,
        FG_LION_LV3: null,
        FG_LION_LV4: null,
        FG_near: null,
        FG_RED_FALL: null,
        FG_RED_GREEN: null,
        FG_Respin_01: null,
        FG_Respin: null,
        FG_SpinBall: null,
        Reel_Spin: null,
        JP_declare: null,
        MG_god: null,
        MG_FAKEGROW_02: null,
        MG_in: null,
        MG_scatter_collect_01: null,
        MG_scatter_collect_02: null,
        MG_scatter_collect_03: null,
        Open_door: null,
        reel_stop: null,
        respin_switch: null,
        scatter_add_end: null,
        scatter_add_fly: null,
        scatter_ring: null,
        scatter_stop: null,
        Small_Win01: null,
        Small_Win02: null,
        Small_Win03: null,
        Big_win: null,
        Big_win_end: null,
        ChangeWin_1: null,
        ChangeWin_2: null
      };
      Game_Define.LinePos = [[1, 4, 7, 10, 13], [0, 3, 6, 9, 12], [2, 5, 8, 11, 14], [0, 4, 8, 10, 12], [2, 4, 6, 10, 14], [0, 3, 7, 11, 14], [2, 5, 7, 9, 12], [1, 3, 7, 11, 13], [1, 5, 7, 9, 13], [0, 4, 7, 10, 12], [2, 4, 7, 10, 14], [1, 3, 6, 10, 14], [1, 5, 8, 10, 12], [1, 4, 6, 10, 14], [1, 4, 8, 10, 12], [0, 3, 7, 11, 13], [2, 5, 7, 9, 13], [1, 3, 7, 11, 14], [1, 5, 7, 9, 12], [0, 3, 6, 10, 14], [2, 5, 8, 10, 12], [0, 4, 8, 11, 14], [2, 4, 6, 9, 12], [0, 4, 6, 10, 12], [2, 4, 8, 10, 14], [0, 4, 7, 10, 14], [2, 4, 7, 10, 12], [1, 3, 6, 9, 13], [1, 5, 8, 11, 13], [0, 4, 6, 10, 14], [2, 4, 8, 10, 12], [0, 4, 8, 11, 13], [2, 4, 6, 9, 13], [0, 4, 8, 10, 13], [2, 4, 6, 10, 13], [1, 5, 7, 11, 13], [1, 3, 7, 9, 13], [0, 4, 8, 10, 14], [2, 4, 6, 10, 12], [0, 3, 7, 9, 12], [2, 5, 7, 11, 14], [0, 3, 7, 10, 14], [2, 5, 7, 10, 12], [0, 4, 7, 11, 14], [2, 4, 7, 9, 12], [1, 4, 6, 10, 13], [1, 4, 8, 10, 13], [1, 3, 7, 10, 14], [1, 5, 7, 10, 12], [0, 4, 7, 11, 13]];
      Game_Define.MgSymbol = [{
        SymbolId: Symbol.SYMBOL_P,
        Weight: 80
      }, {
        SymbolId: Symbol.SYMBOL_R,
        Weight: 80
      }, {
        SymbolId: Symbol.SYMBOL_G,
        Weight: 80
      }, {
        SymbolId: Symbol.SYMBOL_00,
        Weight: 25
      }, {
        SymbolId: Symbol.SYMBOL_00,
        Weight: 75
      }, {
        SymbolId: Symbol.SYMBOL_00,
        Weight: 100
      }, {
        SymbolId: Symbol.SYMBOL_01,
        Weight: 25
      }, {
        SymbolId: Symbol.SYMBOL_01,
        Weight: 75
      }, {
        SymbolId: Symbol.SYMBOL_01,
        Weight: 100
      }, {
        SymbolId: Symbol.SYMBOL_02,
        Weight: 25
      }, {
        SymbolId: Symbol.SYMBOL_02,
        Weight: 75
      }, {
        SymbolId: Symbol.SYMBOL_02,
        Weight: 100
      }, {
        SymbolId: Symbol.SYMBOL_03,
        Weight: 25
      }, {
        SymbolId: Symbol.SYMBOL_03,
        Weight: 75
      }, {
        SymbolId: Symbol.SYMBOL_03,
        Weight: 100
      }, {
        SymbolId: Symbol.SYMBOL_04,
        Weight: 25
      }, {
        SymbolId: Symbol.SYMBOL_04,
        Weight: 75
      }, {
        SymbolId: Symbol.SYMBOL_04,
        Weight: 100
      }, {
        SymbolId: Symbol.SYMBOL_05,
        Weight: 25
      }, {
        SymbolId: Symbol.SYMBOL_05,
        Weight: 75
      }, {
        SymbolId: Symbol.SYMBOL_05,
        Weight: 100
      }, {
        SymbolId: Symbol.SYMBOL_06,
        Weight: 25
      }, {
        SymbolId: Symbol.SYMBOL_06,
        Weight: 75
      }, {
        SymbolId: Symbol.SYMBOL_06,
        Weight: 100
      }, {
        SymbolId: Symbol.SYMBOL_07,
        Weight: 25
      }, {
        SymbolId: Symbol.SYMBOL_07,
        Weight: 75
      }, {
        SymbolId: Symbol.SYMBOL_07,
        Weight: 100
      }, {
        SymbolId: Symbol.SYMBOL_08,
        Weight: 25
      }, {
        SymbolId: Symbol.SYMBOL_08,
        Weight: 75
      }, {
        SymbolId: Symbol.SYMBOL_08,
        Weight: 100
      }, {
        SymbolId: Symbol.SYMBOL_09,
        Weight: 25
      }, {
        SymbolId: Symbol.SYMBOL_09,
        Weight: 75
      }, {
        SymbolId: Symbol.SYMBOL_09,
        Weight: 100
      }, {
        SymbolId: Symbol.SYMBOL_10,
        Weight: 250
      }];
      Game_Define.FgSymbol = [{
        SymbolId: Symbol.SYMBOL_05,
        Weight: 15
      }, {
        SymbolId: Symbol.SYMBOL_06,
        Weight: 20
      }, {
        SymbolId: Symbol.SYMBOL_07,
        Weight: 20
      }, {
        SymbolId: Symbol.SYMBOL_08,
        Weight: 20
      }, {
        SymbolId: Symbol.SYMBOL_14,
        Weight: 25
      }];
      Game_Define.CoinValue = [1.5, 2, 2.25, 2.75, 3, 3.25, 3.5, 3.75, 4, 4.5, 5, 6];
      Game_Define.AckType = {
        login: 0,
        exchangeChips: 2,
        info: 11,
        spin: 12,
        buyBonus: 36,
        heartBeat: 98,
        serverMsg: 99
      };
      Game_Define.SERVER_RET_TYPE = {
        SERVER_SUCCESS: 0,
        SERVER_ERROR_SEATE: 799,
        SERVER_NOUSE: 899,
        SERVER_MAINTAIN: 231,
        SERVER_SHUTDOWN: 232,
        SERVER_NEED_UID: 233,
        SERVER_NEED_LOGIN: 234,
        SERVER_TOKEN_ERROR: 235
      };
      Game_Define.LOGIN_RESULT_TYPE = {
        LOGIN_SUCCESS: 0,
        LOGIN_FAIL: 1,
        API_VERIFY_FAIL: 235,
        API_LOGIN_REPEAT_FAIL: 2002
      };
      Game_Define.StringKey = {
        BONUS_GAME_TXT: "BONUS_GAME_TXT",
        FEATURE_LEFT: "FEATURE_LEFT",
        FEATURE_RIGHT: "FEATURE_RIGHT"
      };
      Game_Define.SPIN_ACK_TYPE = {
        AT_SUCCESS: 0,
        AT_MONEY_NOT_ENOUGH: 302,
        AT_MONEY_ABNORMAL: 301,
        AT_MONEY_NOT_ENOUGH_SINGLE: 305
      };
      Game_Define.isGetFG = false;
      Game_Define.isGetG = false;
      Game_Define.isGetR = false;
      Game_Define.isGetP = false;
      Game_Define.AWARD_TYPE = {
        AwardTypeNon: 0,
        AwardTypeLine: 1,
        AwardTypeGetFree: 2,
        AwardTypeInFree: 4,
        AwardTypeLeaveFree: 8,
        AwardTypeGetGreen: 16,
        AwardTypeGetRed: 32,
        AwardTypeGetPurple: 64
      };
      Game_Define.ShowDisplayValue = null;
      var FgCellInfo = function () {
        this.Symbol = undefined;
        this.Number = undefined;
        this.JPState = undefined;
        this.JPMult = undefined;
      };
      var _dec$2;
      var _dec2$2;
      var _dec3$2;
      var _dec4$2;
      var _dec5$2;
      var _descriptor$2;
      var _descriptor2$2;
      var _descriptor3$2;
      var _descriptor4$2;
      var _class3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5b19duR0d5FgpqqGSD44Ki5", "Character", undefined);
      var ccclass$2 = _decorator.ccclass;
      var property$2 = _decorator.property;
      var Event_AnimName;
      var LV;
      var TRACKID;
      var SKIN;
      !function (e) {
        e.FG_Declare = "FG_Declare";
      }(Event_AnimName || (Event_AnimName = {}));
      (function (e) {
        e[e.LV1 = 0] = "LV1";
        e[e.LV2 = 1] = "LV2";
        e[e.LV3 = 2] = "LV3";
        e[e.LV4 = 3] = "LV4";
      })(LV || (LV = {}));
      (function (e) {
        e[e.ID0 = 0] = "ID0";
        e[e.ID1 = 1] = "ID1";
        e[e.ID2 = 2] = "ID2";
      })(TRACKID || (TRACKID = {}));
      (function (e) {
        e.R = "R";
        e.P = "P";
        e.G = "G";
      })(SKIN || (SKIN = {}));
      _dec$2 = ccclass$2("Character");
      _dec2$2 = property$2({
        type: sp.Skeleton,
        tooltip: "人物"
      });
      _dec3$2 = property$2({
        type: Sprite,
        tooltip: "中間文字"
      });
      _dec4$2 = property$2({
        type: Sprite,
        tooltip: "R文字"
      });
      _dec5$2 = property$2({
        type: Sprite,
        tooltip: "L文字"
      });
      _class3 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spines", _descriptor$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_mTexts", _descriptor2$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_rTexts", _descriptor3$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_lTexts", _descriptor4$2, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_crackLevels = [0, 0, 0];
          t.m_spinCrackLevels = [0, 0, 0];
          t.m_isSoundRing = false;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          for (var t = 0; t < this.m_spines.length; t++) {
            this.m_spines[t].animation = null;
          }
        };
        n.ShowGameIntro = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_mTexts[0].node.parent.active = false;
                    this.m_lTexts[0].node.parent.active = false;
                    this.m_rTexts[0].node.parent.active = false;
                    for (t = 0; t < this.m_spines.length; t++) {
                      (n = this.m_spines[t]).node.active = false;
                      n.animation = null;
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
        n.ShowGameIntroEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_mTexts[0].node.parent.active = true;
                    this.m_lTexts[0].node.parent.active = true;
                    this.m_rTexts[0].node.parent.active = true;
                    for (t = 0; t < this.m_spines.length; t++) {
                      this.m_spines[t].node.active = true;
                      this.ShowIdle();
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
        n.ShowIdle = function (e) {
          if (undefined === e) {
            e = null;
          }
          for (var n = 0; n < this.m_spines.length; n++) {
            var i = LV.LV1;
            switch (n) {
              case 0:
                i = this.m_crackLevels[1];
                break;
              case 1:
                i = this.m_crackLevels[2];
                break;
              case 2:
                i = this.m_crackLevels[0];
            }
            var r = this.m_spines[n];
            if (r.animation !== t.AnimName.Idle) {
              if (n === 2) {
                r.setSkin(SKIN.G);
              } else if (n === 1) {
                r.setSkin(SKIN.P);
              } else if (n === 0) {
                r.setSkin(SKIN.R);
              }
              r.timeScale = e || Game_Define.TimeScale();
              SpineKit.PlayAnimation(r, t.AnimName.Idle, true, TRACKID.ID0);
              switch (i) {
                case LV.LV2:
                  SpineKit.PlayAnimation(r, t.AnimName.Track1_Level2, true, TRACKID.ID1);
                  break;
                case LV.LV3:
                  SpineKit.PlayAnimation(r, t.AnimName.Track1_Level3, true, TRACKID.ID1);
                  break;
                case LV.LV4:
                  SpineKit.PlayAnimation(r, t.AnimName.Track1_Level4, true, TRACKID.ID1);
              }
            }
          }
        };
        n.SetMTxt = function (e) {
          var t = node.GetGameAtlas();
          for (var n = 0; n < this.m_mTexts.length; n++) {
            if (t.getSpriteFrame(e[n])) {
              this.m_mTexts[n].spriteFrame = t.getSpriteFrame(e[n]);
            }
          }
        };
        n.SetRTxt = function (e) {
          var t = node.GetGameAtlas();
          for (var n = 0; n < this.m_rTexts.length; n++) {
            if (t.getSpriteFrame(e[n])) {
              this.m_rTexts[n].spriteFrame = t.getSpriteFrame(e[n]);
            }
          }
        };
        n.SetLTxt = function (e) {
          var t = node.GetGameAtlas();
          for (var n = 0; n < this.m_lTexts.length; n++) {
            if (t.getSpriteFrame(e[n])) {
              this.m_lTexts[n].spriteFrame = t.getSpriteFrame(e[n]);
            }
          }
        };
        n.ShowNearWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            var i;
            var r;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = this.GetChacterLevelIndex(n);
                    if (!(this.m_crackLevels[i] < LV.LV2)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    r = null;
                    e.t0 = this.m_crackLevels[i];
                    e.next = e.t0 === LV.LV2 ? 7 : e.t0 === LV.LV3 ? 9 : e.t0 === LV.LV4 ? 11 : 13;
                    break;
                  case 7:
                    r = t.AnimName.Level2_Nearwin;
                    return e.abrupt("break", 13);
                  case 9:
                    r = t.AnimName.Level3_Nearwin;
                    return e.abrupt("break", 13);
                  case 11:
                    r = t.AnimName.Level4_Nearwin;
                    return e.abrupt("break", 13);
                  case 13:
                    o = this.GetChacter(n);
                    if (r && o.animation !== r) {
                      SpineKit.PlayAnimation(o, r, true, TRACKID.ID2);
                    }
                  case 15:
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
        n.ShowMgWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var r;
            var o;
            var a;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = new Array();
                    i = [false, false, false];
                    r = 0;
                  case 3:
                    if (!(r < t.CSP.length)) {
                      e.next = 22;
                      break;
                    }
                    o = 0;
                  case 5:
                    if (!(o < t.CSP[r].Col.length)) {
                      e.next = 19;
                      break;
                    }
                    a = t.CSP[r].Col[o].Symbol;
                    e.t0 = a;
                    e.next = e.t0 === Game_Define.Symbol.SYMBOL_R ? 10 : e.t0 === Game_Define.Symbol.SYMBOL_G ? 12 : e.t0 === Game_Define.Symbol.SYMBOL_P ? 14 : 16;
                    break;
                  case 10:
                    if (!i[0]) {
                      i[0] = true;
                      n.push(this.PlayScFlyEnd(Game_Define.Symbol.SYMBOL_R));
                    }
                    return e.abrupt("break", 16);
                  case 12:
                    if (!i[2]) {
                      i[2] = true;
                      n.push(this.PlayScFlyEnd(Game_Define.Symbol.SYMBOL_G));
                    }
                    return e.abrupt("break", 16);
                  case 14:
                    if (!i[1]) {
                      i[1] = true;
                      n.push(this.PlayScFlyEnd(Game_Define.Symbol.SYMBOL_P));
                    }
                    return e.abrupt("break", 16);
                  case 16:
                    o++;
                    e.next = 5;
                    break;
                  case 19:
                    r++;
                    e.next = 3;
                    break;
                  case 22:
                    e.next = 24;
                    return Promise.all(n);
                  case 24:
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
        n.PlayScFlyEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.PlayNearWinEnd(t);
                    e.next = 3;
                    return this.PlayHit(t);
                  case 3:
                    n = this.GetChacterLevelIndex(t);
                    if (!(this.m_crackLevels[n] >= LV.LV4)) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return");
                  case 6:
                    if (this.m_crackLevels[n] === this.m_spinCrackLevels[n]) {
                      e.next = 12;
                      break;
                    }
                    e.next = 9;
                    return this.PlayLevelUp(t);
                  case 9:
                    this.PlayOneIdle(t);
                    e.next = 19;
                    break;
                  case 12:
                    if (!(Math.random() < Game_Define.CharacterFakeRate)) {
                      e.next = 18;
                      break;
                    }
                    e.next = 15;
                    return this.PlayLevelFakeUp(t);
                  case 15:
                    this.PlayOneIdle(t);
                    e.next = 19;
                    break;
                  case 18:
                    this.PlayOneIdle(t);
                  case 19:
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
        n.PlayNearWinEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.GetChacter(t).clearTrack(TRACKID.ID2);
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
        n.PlayLevelUp = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n, i) {
            var r;
            var o;
            var a;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === i) {
                      i = true;
                    }
                    r = this.GetChacterLevelIndex(n);
                    o = t.AnimName.Hit;
                    e.t0 = this.m_crackLevels[r];
                    e.next = e.t0 === LV.LV1 ? 6 : e.t0 === LV.LV2 ? 9 : e.t0 === LV.LV3 ? 12 : 15;
                    break;
                  case 6:
                    if (i) {
                      node$5.Play(Game_Define.AudioClips.FG_LION_LV1);
                    }
                    o = t.AnimName.LevelUp1to2;
                    return e.abrupt("break", 15);
                  case 9:
                    if (i) {
                      node$5.Play(Game_Define.AudioClips.FG_LION_LV2);
                    }
                    o = t.AnimName.LevelUp2to3;
                    return e.abrupt("break", 15);
                  case 12:
                    if (i) {
                      node$5.Play(Game_Define.AudioClips.FG_LION_LV3);
                    }
                    o = t.AnimName.LevelUp3to4;
                    return e.abrupt("break", 15);
                  case 15:
                    (a = this.GetChacter(n)).clearTracks();
                    e.next = 19;
                    return SpineKit.PlayAnimation(a, o);
                  case 19:
                    this.m_crackLevels[r] = this.m_spinCrackLevels[r];
                  case 20:
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
        n.PlayLevelFakeUp = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            var i;
            var r;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = this.GetChacterLevelIndex(n);
                    r = null;
                    e.t0 = this.m_crackLevels[i];
                    e.next = e.t0 === LV.LV2 ? 5 : e.t0 === LV.LV3 ? 8 : e.t0 === LV.LV4 ? 11 : 14;
                    break;
                  case 5:
                    node$5.Play(Game_Define.AudioClips.FG_LION_LV1);
                    r = t.AnimName.LevelUp2to2;
                    return e.abrupt("break", 14);
                  case 8:
                    node$5.Play(Game_Define.AudioClips.FG_LION_LV2);
                    r = t.AnimName.LevelUp3to3;
                    return e.abrupt("break", 14);
                  case 11:
                    node$5.Play(Game_Define.AudioClips.FG_LION_LV3);
                    r = t.AnimName.LevelUp4to4;
                    return e.abrupt("break", 14);
                  case 14:
                    if (!r) {
                      e.next = 19;
                      break;
                    }
                    (o = this.GetChacter(n)).clearTracks();
                    e.next = 19;
                    return SpineKit.PlayAnimation(o, r);
                  case 19:
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
        n.PlayHit = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = this.GetChacter(n);
                    e.next = 3;
                    return SpineKit.PlayAnimation(i, t.AnimName.Hit);
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
        n.PlayOneIdle = function (e) {
          var n = 0;
          var i = LV.LV1;
          switch (e) {
            case Game_Define.Symbol.SYMBOL_P:
              n = 1;
              i = this.m_crackLevels[2];
              break;
            case Game_Define.Symbol.SYMBOL_R:
              n = 0;
              i = this.m_crackLevels[1];
              break;
            case Game_Define.Symbol.SYMBOL_G:
              n = 2;
              i = this.m_crackLevels[0];
          }
          var r = this.m_spines[n];
          r.clearTrack(TRACKID.ID2);
          SpineKit.PlayAnimation(r, t.AnimName.Idle, true);
          switch (i) {
            case LV.LV2:
              SpineKit.PlayAnimation(r, t.AnimName.Track1_Level2, true, TRACKID.ID1);
              break;
            case LV.LV3:
              SpineKit.PlayAnimation(r, t.AnimName.Track1_Level3, true, TRACKID.ID1);
              break;
            case LV.LV4:
              SpineKit.PlayAnimation(r, t.AnimName.Track1_Level4, true, TRACKID.ID1);
          }
        };
        n.GetChacter = function (e) {
          var t = 0;
          switch (e) {
            case Game_Define.Symbol.SYMBOL_P:
              t = 1;
              break;
            case Game_Define.Symbol.SYMBOL_R:
              t = 0;
              break;
            case Game_Define.Symbol.SYMBOL_G:
              t = 2;
          }
          return this.m_spines[t];
        };
        n.GetChacterLevelIndex = function (e) {
          var t = 0;
          switch (e) {
            case Game_Define.Symbol.SYMBOL_P:
              t = 2;
              break;
            case Game_Define.Symbol.SYMBOL_R:
              t = 1;
              break;
            case Game_Define.Symbol.SYMBOL_G:
              t = 0;
          }
          return t;
        };
        n.SetCrackLevel = function (e) {
          for (var t = 0; t < e.length; t++) {
            this.m_crackLevels[t] = e[t];
            this.m_spinCrackLevels[t] = e[t];
          }
          this.ShowIdle();
        };
        n.AddCrackLevel = function (e) {
          for (var t = 0; t < e.length; t++) {
            if (e[t]) {
              var n = this.m_spinCrackLevels[t];
              n++;
              this.m_spinCrackLevels[t] = n;
            }
          }
        };
        n.PlayWinScatterSound = function () {
          var e = [];
          if (Game_Define.isGetG) {
            e.push(this.m_crackLevels[0]);
          }
          if (Game_Define.isGetP) {
            e.push(this.m_crackLevels[2]);
          }
          if (Game_Define.isGetR) {
            e.push(this.m_crackLevels[1]);
          }
          var t = LV.LV4;
          if (1 == e.length) {
            t = e[0];
          } else {
            for (var n = 0; n < e.length; n++) {
              if (e[n] < t) {
                t = e[n];
              }
            }
          }
          switch (t) {
            case LV.LV1:
              node$5.Play(Game_Define.AudioClips.FG_LION_LV1);
              break;
            case LV.LV2:
              node$5.Play(Game_Define.AudioClips.FG_LION_LV2);
              break;
            case LV.LV3:
              node$5.Play(Game_Define.AudioClips.FG_LION_LV3);
          }
        };
        n.ShowWinScatter = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.PlayWinScatterSound();
                    t = new Array();
                    for (n = 0; n < this.m_spines.length; n++) {
                      i = this.m_spinCrackLevels[n];
                      i++;
                      if (n == 0 && Game_Define.isGetG && this.m_crackLevels[0] !== LV.LV4) {
                        this.m_spinCrackLevels[n] = i;
                        t.push(this.PlayLevelUp(Game_Define.Symbol.SYMBOL_G, false));
                      } else if (n == 2 && Game_Define.isGetP && this.m_crackLevels[2] !== LV.LV4) {
                        this.m_spinCrackLevels[n] = i;
                        t.push(this.PlayLevelUp(Game_Define.Symbol.SYMBOL_P, false));
                      } else if (n == 1 && Game_Define.isGetR && this.m_crackLevels[1] !== LV.LV4) {
                        this.m_spinCrackLevels[n] = i;
                        t.push(this.PlayLevelUp(Game_Define.Symbol.SYMBOL_R, false));
                      }
                    }
                    e.next = 5;
                    return Promise.all(t);
                  case 5:
                    r = false;
                    if (this.m_crackLevels[0] !== LV.LV4 && Game_Define.isGetG || this.m_crackLevels[2] !== LV.LV4 && Game_Define.isGetP || this.m_crackLevels[1] !== LV.LV4 && Game_Define.isGetR) {
                      r = true;
                    }
                    if (!r) {
                      e.next = 10;
                      break;
                    }
                    e.next = 10;
                    return this.ShowWinScatter();
                  case 10:
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
        n.ShowFakeNearWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    node$5.Play(Game_Define.AudioClips.MG_FAKEGROW_02);
                    t = new Array();
                    for (n = 0; n < this.m_spines.length; n++) {
                      if (n == 0 && Game_Define.isGetG) {
                        t.push(this.PlayFakeNearWin(Game_Define.Symbol.SYMBOL_G));
                      } else if (n == 2 && Game_Define.isGetP) {
                        t.push(this.PlayFakeNearWin(Game_Define.Symbol.SYMBOL_P));
                      } else if (n == 1 && Game_Define.isGetR) {
                        t.push(this.PlayFakeNearWin(Game_Define.Symbol.SYMBOL_R));
                      }
                    }
                    e.next = 5;
                    return Promise.all(t);
                  case 5:
                    if (!(Math.random() < .3)) {
                      e.next = 8;
                      break;
                    }
                    e.next = 8;
                    return this.ShowFakeNearWin();
                  case 8:
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
        n.PlayFakeNearWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = this.GetChacter(n);
                    e.next = 3;
                    return SpineKit.PlayAnimation(i, t.AnimName.NearWin);
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
        n.ShowEnterFgWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_isSoundRing = false;
                    node$5.Play(Game_Define.AudioClips.FG_LION_LV4);
                    t = new Array();
                    for (n = 0; n < this.m_spines.length; n++) {
                      if (n == 0 && Game_Define.isGetG) {
                        t.push(this.PlayWin(Game_Define.Symbol.SYMBOL_G));
                      } else if (n == 2 && Game_Define.isGetP) {
                        t.push(this.PlayWin(Game_Define.Symbol.SYMBOL_P));
                      } else if (n == 1 && Game_Define.isGetR) {
                        t.push(this.PlayWin(Game_Define.Symbol.SYMBOL_R));
                      }
                    }
                    e.next = 6;
                    return Promise.all(t);
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
        n.PlayWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            var i;
            var r = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = this.GetChacter(n);
                    if (!this.m_isSoundRing) {
                      this.m_isSoundRing = true;
                      node$5.Play(Game_Define.AudioClips.scatter_ring);
                    }
                    e.next = 4;
                    return SpineKit.PlayAnimation(i, t.AnimName.Win, false, 0, function (e) {
                      if (e === Event_AnimName.FG_Declare) {
                        r.m_gameView.Declare.ShowDeclare(Game_Define.isGetP, Game_Define.isGetR, Game_Define.isGetG);
                      }
                    });
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
        n.ShowDeclareEnd = function () {
          for (var e = 0; e < this.m_spines.length; e++) {
            var t = this.m_spines[e];
            t.clearTracks();
            t.node.active = false;
          }
          for (var n = 0; n < this.m_mTexts.length; n++) {
            this.m_mTexts[n].node.active = false;
          }
          for (var i = 0; i < this.m_rTexts.length; i++) {
            this.m_rTexts[i].node.active = false;
          }
          for (var r = 0; r < this.m_lTexts.length; r++) {
            this.m_lTexts[r].node.active = false;
          }
          var o = [Game_Define.isGetR, Game_Define.isGetP, Game_Define.isGetG];
          var a = 0;
          for (var s = 0; s < o.length; s++) {
            if (o[s]) {
              a++;
            }
          }
          if (1 === a) {
            this.PlayOnelionFg();
          } else if (2 === a) {
            this.PlayTwolionFg();
          } else if (3 === a) {
            this.PlayThreelionFg();
          }
          if (Game_Define.isGetG) {
            this.m_crackLevels[0] = 0;
            this.m_spinCrackLevels[0] = 0;
          }
          if (Game_Define.isGetR) {
            this.m_crackLevels[1] = 0;
            this.m_spinCrackLevels[1] = 0;
          }
          if (Game_Define.isGetP) {
            this.m_crackLevels[2] = 0;
            this.m_spinCrackLevels[2] = 0;
          }
        };
        n.PlayOnelionFg = function () {
          var e = this.m_spines[0];
          e.node.active = true;
          if (Game_Define.isGetG) {
            this.m_mTexts[2].node.active = true;
            e.setSkin(SKIN.G);
            SpineKit.PlayAnimation(e, t.AnimName.FG_Idle, true);
          } else if (Game_Define.isGetP) {
            this.m_mTexts[1].node.active = true;
            e.setSkin(SKIN.P);
            SpineKit.PlayAnimation(e, t.AnimName.FG2, true);
          } else if (Game_Define.isGetR) {
            this.m_mTexts[0].node.active = true;
            e.setSkin(SKIN.R);
            SpineKit.PlayAnimation(e, t.AnimName.FG_Idle, true);
          }
        };
        n.PlayTwolionFg = function () {
          var e = this.m_spines[1];
          e.node.active = true;
          var n = this.m_spines[2];
          n.node.active = true;
          if (Game_Define.isGetG) {
            this.m_rTexts[0].node.active = true;
            n.setSkin(SKIN.G);
            if (Game_Define.isGetP) {
              this.m_lTexts[0].node.active = true;
              e.setSkin(SKIN.P);
              SpineKit.PlayAnimation(n, t.AnimName.FG2, true);
              SpineKit.PlayAnimation(e, t.AnimName.FG2, true);
            } else if (Game_Define.isGetR) {
              this.m_lTexts[1].node.active = true;
              e.setSkin(SKIN.R);
              SpineKit.PlayAnimation(n, t.AnimName.FG_Idle, true);
              SpineKit.PlayAnimation(e, t.AnimName.FG_Idle, true);
            }
          } else {
            this.m_lTexts[0].node.active = true;
            e.setSkin(SKIN.P);
            SpineKit.PlayAnimation(e, t.AnimName.FG2, true);
            this.m_rTexts[1].node.active = true;
            n.setSkin(SKIN.R);
            SpineKit.PlayAnimation(n, t.AnimName.FG2, true);
          }
        };
        n.PlayThreelionFg = function () {
          for (var e = 0; e < this.m_spines.length; e++) {
            var n = this.m_spines[e];
            n.node.active = true;
            if (e == 2 && Game_Define.isGetG) {
              this.m_rTexts[0].node.active = true;
              n.setSkin(SKIN.G);
            } else if (e == 1 && Game_Define.isGetP) {
              this.m_lTexts[0].node.active = true;
              n.setSkin(SKIN.P);
            } else if (e == 0 && Game_Define.isGetR) {
              this.m_mTexts[0].node.active = true;
              n.setSkin(SKIN.R);
            }
            SpineKit.PlayAnimation(n, t.AnimName.FG2, true);
          }
        };
        n.ShowLeaveFgWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var n;
            var i;
            var r;
            var o;
            var a;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = new Array();
                    for (i = 0; i < this.m_spines.length; i++) {
                      if ((r = this.m_spines[i]).node.active && r.animation === t.AnimName.FG_Idle) {
                        node$5.Play(Game_Define.AudioClips.FG_RED_GREEN);
                        n.push(SpineKit.PlayAnimation(r, t.AnimName.FG_Win));
                      }
                    }
                    e.next = 4;
                    return Promise.all(n);
                  case 4:
                    for (o = 0; o < this.m_spines.length; o++) {
                      if ((a = this.m_spines[o]).node.active) {
                        SpineKit.PlayAnimation(a, t.AnimName.FG_WinLoop, true);
                      }
                    }
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
        n.ShowTransMg = function () {
          for (var e = 0; e < this.m_spines.length; e++) {
            var t = this.m_spines[e];
            t.clearTracks();
            t.node.active = true;
          }
          this.ShowIdle();
        };
        n.ShowComplimentEnd = function (e) {
          for (var t = 0; t < this.m_mTexts.length; t++) {
            var n = this.m_mTexts[t];
            n.node.active = false;
            if (0 === t && e) {
              n.node.active = true;
            }
          }
          for (var i = 0; i < this.m_rTexts.length; i++) {
            var r = this.m_rTexts[i];
            r.node.active = false;
            if (0 === i && e) {
              r.node.active = true;
            }
          }
          for (var o = 0; o < this.m_lTexts.length; o++) {
            var a = this.m_lTexts[o];
            a.node.active = false;
            if (0 === o && e) {
              a.node.active = true;
            }
          }
        };
        n.GetNearWin = function () {
          var e = false;
          for (var t = 0; t < this.m_crackLevels.length; t++) {
            if (this.m_crackLevels[t] > LV.LV2) {
              e = true;
              break;
            }
          }
          return e;
        };
        _createClass(t, [{
          key: "CrackLevels",
          get: function () {
            return this.m_crackLevels;
          }
        }]);
        return t;
      }(Component);
      _class3.AnimName = {
        FG2: "FG2",
        FG_Idle: "FG_Idle",
        FG_Win: "FG_Win",
        FG_WinLoop: "FG_WinLoop",
        Hit: "Hit",
        Idle: "Idle",
        Level2_Nearwin: "Level2_Nearwin",
        Level3_Nearwin: "Level3_Nearwin",
        Level4_Nearwin: "Level4_Nearwin",
        LevelUp1to2: "LevelUp1to2",
        LevelUp1to4: "LevelUp1to4",
        LevelUp2to2: "LevelUp2to2",
        LevelUp2to3: "LevelUp2to3",
        LevelUp2to4: "LevelUp2to4",
        LevelUp3to3: "LevelUp3to3",
        LevelUp3to4: "LevelUp3to4",
        LevelUp4to4: "LevelUp4to4",
        MG_Omen: "MG_Omen",
        NearWin: "NearWin",
        Track1_Level2: "Track1_Level2",
        Track1_Level3: "Track1_Level3",
        Track1_Level4: "Track1_Level4",
        Win: "Win"
      };
      _descriptor$2 = _applyDecoratedDescriptor(_class3.prototype, "m_spines", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$2 = _applyDecoratedDescriptor(_class3.prototype, "m_mTexts", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$2 = _applyDecoratedDescriptor(_class3.prototype, "m_rTexts", [_dec4$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor4$2 = _applyDecoratedDescriptor(_class3.prototype, "m_lTexts", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var _dec$3;
      var _dec2$3;
      var _dec3$3;
      var _dec4$3;
      var _dec5$3;
      var _dec6$1;
      var _dec7$1;
      var _dec8$1;
      var _dec9$1;
      var _dec10$1;
      var _class$3;
      var _descriptor$3;
      var _descriptor2$3;
      var _descriptor3$3;
      var _descriptor4$3;
      var _descriptor5$1;
      var _descriptor6$1;
      var _descriptor7$1;
      var _descriptor8$1;
      var _descriptor9$1;
      var _class3$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1b9ebJ14OBPLJAlLQ64ReKT", "SymbolEffect", undefined);
      var ccclass$3 = _decorator.ccclass;
      var property$3 = _decorator.property;
      var TRACKID$1;
      !function (e) {
        e[e.ID0 = 0] = "ID0";
        e[e.ID1 = 1] = "ID1";
        e[e.ID2 = 2] = "ID2";
      }(TRACKID$1 || (TRACKID$1 = {}));
      _dec$3 = ccclass$3("SymbolEffect");
      _dec2$3 = property$3({
        type: sp.Skeleton
      });
      _dec3$3 = property$3({
        type: Node
      });
      _dec4$3 = property$3({
        type: Label
      });
      _dec5$3 = property$3({
        type: Label
      });
      _dec6$1 = property$3({
        type: Label
      });
      _dec7$1 = property$3(Prefab);
      _dec8$1 = property$3(SpriteFrame);
      _dec9$1 = property$3(Sprite);
      _dec10$1 = property$3(ParticleSystem2D);
      _class3$1 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_jpState", _descriptor2$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_rgpLabel", _descriptor3$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_nLabel", _descriptor4$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_nMultiplyLabel", _descriptor5$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_lightEffectPrefab", _descriptor6$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_symbolLights", _descriptor7$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_PFlyText", _descriptor8$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_particleSystem2D", _descriptor9$1, _assertThisInitialized(t));
          t.m_symbolNum = null;
          t.m_lightEffect = null;
          t.COIN_HIGH_VALUE_RATE = 3.5;
          t.skin = ["default", "MINI", "MINOR", "MAJOR", "GRAND"];
          t.m_isRun = false;
          t.m_win = 0;
          t.m_showWin = 0;
          t.m_step = 0;
          t.m_number = 0;
          t.m_jp = 0;
          t.m_fgWin = 0;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetRocketNum = function (e, n) {
          this.m_jpState.getComponent(Sprite).spriteFrame = NodePool.GetInstance().GetSymbolJpStates(e - 1);
          var i = node$1.GetNowBetValue();
          var r = node$3.times(i, this.COIN_HIGH_VALUE_RATE);
          if (this.m_rgpLabel) {
            this.m_rgpLabel.font = NodePool.GetInstance().GetSymbolFont(t.FONT.W);
            this.m_rgpLabel.string = "";
          }
          if (n > r) {
            this.m_rgpLabel.font = NodePool.GetInstance().GetSymbolFont(t.FONT.R);
          }
          if (n >= 1e4) {
            var o = node$3.FormatNumberThousands(node$3.strip(node$3.divide(n, 1e3)), node$3.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
            this.m_rgpLabel.string = o + "K";
          } else {
            this.m_rgpLabel.string = node$3.FormatNumberThousands(n, node$3.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
          }
        };
        n.SetSymbolEffect = function (e, n, i, r) {
          if (undefined === n) {
            n = null;
          }
          if (undefined === i) {
            i = null;
          }
          if (undefined === r) {
            r = null;
          }
          this.m_isRun = false;
          this.m_win = 0;
          this.m_showWin = 0;
          this.m_number = 0;
          this.m_jp = 0;
          this.m_fgWin = i;
          this.m_symbolNum = e;
          if (this.m_rgpLabel) {
            this.m_rgpLabel.font = NodePool.GetInstance().GetSymbolFont(t.FONT.W);
            this.m_rgpLabel.string = "";
          }
          if (this.m_nLabel) {
            this.m_nLabel.font = NodePool.GetInstance().GetSymbolFont(t.FONT.W);
            this.m_nLabel.string = "";
          }
          if (this.m_nMultiplyLabel) {
            this.m_nMultiplyLabel.string = "";
          }
          if (this.m_jpState) {
            this.m_jpState.getComponent(Sprite).spriteFrame = null;
          }
          if (this.m_lightEffectPrefab && !this.m_lightEffect) {
            this.m_lightEffect = instantiate(this.m_lightEffectPrefab);
            this.m_lightEffect.getComponent(Sprite).spriteFrame = this.m_symbolLights;
            this.node.insertChild(this.m_lightEffect, 0);
          }
          this.m_spine.clearTracks();
          if (this.m_particleSystem2D) {
            this.m_particleSystem2D.resetSystem();
          }
          this.node;
          switch (e) {
            case Game_Define.Symbol.SYMBOL_R:
            case Game_Define.Symbol.SYMBOL_G:
            case Game_Define.Symbol.SYMBOL_P:
              if (e === Game_Define.Symbol.SYMBOL_R) {
                this.m_spine.setSkin(t.Rocket_Skin.R);
              } else if (e === Game_Define.Symbol.SYMBOL_G) {
                this.m_spine.setSkin(t.Rocket_Skin.G);
              } else if (e === Game_Define.Symbol.SYMBOL_P) {
                this.m_spine.setSkin(t.Rocket_Skin.P);
              }
              if (this.m_lightEffect) {
                this.m_lightEffect.active = true;
              }
              this.m_spine.paused = true;
              SpineKit.PlayAnimation(this.m_spine, t.GPR_AnimName.Stop);
              if (n && 0 !== n && n < 4) {
                this.m_jpState.getComponent(Sprite).spriteFrame = NodePool.GetInstance().GetSymbolJpStates(n - 1);
              } else if (i) {
                var o = node$1.GetNowBetValue();
                if (i > node$3.times(o, this.COIN_HIGH_VALUE_RATE)) {
                  this.m_rgpLabel.font = NodePool.GetInstance().GetSymbolFont(t.FONT.R);
                }
                if (i >= 1e4) {
                  var a = node$3.FormatNumberThousands(node$3.strip(node$3.divide(i, 1e3)), node$3.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
                  this.m_rgpLabel.string = a + "K";
                } else {
                  this.m_rgpLabel.string = node$3.FormatNumberThousands(i, node$3.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
                }
              }
              break;
            case Game_Define.Symbol.SYMBOL_14:
              if (n && 0 !== n) {
                this.m_number = i;
                this.m_jp = n;
                this.m_spine.setSkin(this.skin[n]);
                this.PlayAnimation(t.N_AnimName.Track2_Ribbon, false, null, TRACKID$1.ID2);
              } else {
                this.m_number = i;
                this.m_spine.setSkin(this.skin[0]);
                var s = node$1.GetNowBetValue();
                if (i > node$3.times(s, this.COIN_HIGH_VALUE_RATE)) {
                  this.m_nLabel.font = NodePool.GetInstance().GetSymbolFont(t.FONT.R);
                }
                if (i >= 1e4) {
                  var l = node$3.FormatNumberThousands(node$3.strip(node$3.divide(i, 1e3)), node$3.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
                  this.m_nLabel.string = l + "K";
                } else {
                  this.m_nLabel.string = node$3.FormatNumberThousands(i, node$3.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
                }
                if (r) {
                  this.m_nMultiplyLabel.string = "";
                }
              }
          }
        };
        n.ShowWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!(this.m_symbolNum <= Game_Define.Symbol.SYMBOL_10)) {
                      e.next = 4;
                      break;
                    }
                    e.next = 3;
                    return this.PlayAnimation(t.AnimName.Win);
                  case 3:
                    this.PlayAnimation(t.AnimName.Win, true);
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
        n.ShowRPGBottm = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_symbolNum > Game_Define.Symbol.SYMBOL_10 && this.m_symbolNum < Game_Define.Symbol.SYMBOL_14) {
                      this.m_spine.node.active = false;
                    }
                  case 1:
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
        n.ShowRPGBottmLoop = function () {
          if (this.m_symbolNum > Game_Define.Symbol.SYMBOL_10 && this.m_symbolNum < Game_Define.Symbol.SYMBOL_14) {
            this.m_spine.node.active = true;
            this.m_spine.paused = false;
            SpineKit.PlayAnimation(this.m_spine, t.GPR_AnimName.Bottom, true);
          }
        };
        n.ShowRPGStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!(this.m_symbolNum > Game_Define.Symbol.SYMBOL_10 && this.m_symbolNum < Game_Define.Symbol.SYMBOL_14)) {
                      e.next = 7;
                      break;
                    }
                    if (this.m_rgpLabel) {
                      this.m_rgpLabel.string = "";
                    }
                    if (this.m_lightEffect) {
                      this.m_lightEffect.active = false;
                    }
                    this.m_spine.paused = false;
                    e.next = 6;
                    return SpineKit.PlayAnimation(this.m_spine, t.GPR_AnimName.Stop);
                  case 6:
                    SpineKit.PlayAnimation(this.m_spine, t.GPR_AnimName.Loop, true);
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
        n.ShowRPGEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!(this.m_symbolNum > Game_Define.Symbol.SYMBOL_10 && this.m_symbolNum < Game_Define.Symbol.SYMBOL_14)) {
                      e.next = 4;
                      break;
                    }
                    if (this.m_particleSystem2D) {
                      this.m_particleSystem2D.stopSystem();
                    }
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, t.GPR_AnimName.End);
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
        n.ShowNgoldIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_symbolNum != Game_Define.Symbol.SYMBOL_14) {
                      e.next = 4;
                      break;
                    }
                    this.PlayNgoldDark(false);
                    e.next = 4;
                    return this.PlayAnimation(t.N_AnimName.Idle);
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
        n.ShowNgoldLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_symbolNum == Game_Define.Symbol.SYMBOL_14) {
                      this.PlayNgoldDark(false);
                      this.PlayAnimation(t.N_AnimName.Loop, true);
                    }
                  case 1:
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
        n.ShowNgoldStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_symbolNum != Game_Define.Symbol.SYMBOL_14) {
                      e.next = 5;
                      break;
                    }
                    this.PlayNgoldDark(false);
                    e.next = 4;
                    return this.PlayAnimation(t.N_AnimName.Stop);
                  case 4:
                    this.PlayAnimation(t.N_AnimName.Loop, true);
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
        n.ShowNgoldEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_symbolNum != Game_Define.Symbol.SYMBOL_14) {
                      e.next = 4;
                      break;
                    }
                    this.PlayNgoldDark(true);
                    e.next = 4;
                    return this.PlayAnimation(t.N_AnimName.End);
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
        n.ShowNgoldMultiply = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n, i) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!(this.m_symbolNum == Game_Define.Symbol.SYMBOL_14 && this.m_jp > 0)) {
                      e.next = 6;
                      break;
                    }
                    this.m_nMultiplyLabel.string = n.toString() + "X";
                    this.PlayAnimation(t.N_AnimName.Track1_Multiply, false, null, TRACKID$1.ID1);
                    this.PlayAnimation(t.N_AnimName.Track2_Ribbon, false, null, TRACKID$1.ID2);
                    e.next = 18;
                    break;
                  case 6:
                    if (!i) {
                      e.next = 15;
                      break;
                    }
                    this.m_isRun = true;
                    this.m_showWin = this.m_number;
                    this.m_win = node$3.times(this.m_number, n);
                    this.m_step = node$3.divide(this.m_win, 1);
                    e.next = 13;
                    return node$2.Wait(this, 1);
                  case 13:
                    e.next = 18;
                    break;
                  case 15:
                    this.m_isRun = true;
                    this.m_win = node$3.times(this.m_number, n);
                    this.m_showWin = this.m_win;
                  case 18:
                    this.m_fgWin = node$3.times(this.m_number, n);
                  case 19:
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
        n.GetFgWin = function () {
          return this.m_fgWin;
        };
        n.update = function (e) {
          if (this.m_isRun) {
            this.m_showWin += this.m_step * e;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isRun = false;
            }
            var n = node$1.GetNowBetValue();
            var i = node$3.times(n, this.COIN_HIGH_VALUE_RATE);
            if (this.m_showWin > i) {
              this.m_nLabel.font = NodePool.GetInstance().GetSymbolFont(t.FONT.R);
            }
            if (this.m_showWin >= 1e4) {
              var r = node$3.divide(this.m_showWin, 1e3);
              var o = node$3.FormatNumberThousands(node$3.strip(Game_Define.ShowDisplayValue(r)), node$3.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
              this.m_nLabel.string = o + "K";
            } else {
              this.m_nLabel.string = node$3.FormatNumberThousands(node$3.strip(Game_Define.ShowDisplayValue(this.m_showWin)), node$3.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
            }
          }
        };
        n.PlayNgoldDark = function (e) {
          var n = t.Color.Light;
          if (e) {
            n = t.Color.Dark;
          }
          if (this.m_nLabel) {
            if (this.m_nLabel.node.getComponent(UIRenderer)) {
              this.m_nLabel.node.addComponent(UIRenderer);
            }
            this.m_nLabel.node.getComponent(UIRenderer).color = color(n, n, n);
          }
          if (this.m_nMultiplyLabel) {
            if (this.m_nMultiplyLabel.node.getComponent(UIRenderer)) {
              this.m_nMultiplyLabel.node.addComponent(UIRenderer);
            }
            this.m_nMultiplyLabel.node.getComponent(UIRenderer).color = color(n, n, n);
          }
        };
        n.ShowPgoldFly = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n, i, r, o, a, s) {
            var l;
            var c;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    l = node.GetGameAtlas();
                    c = l.getSpriteFrame(t.P_Txt.TXT_MG_Model02);
                    this.m_PFlyText.spriteFrame = c;
                    e.next = 5;
                    return SpineKit.PlayAnimation(this.m_spine, t.P_AnimName.Start, false, 0, function (e) {
                      if (e === t.AnimEvent.Hit) {
                        if (!(null == s)) {
                          s(n, i, r, o);
                        }
                      }
                    });
                  case 5:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, r, o, a) {
            return e.apply(this, arguments);
          };
        }();
        n.ShowRoundAdd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_rgpLabel) {
                      this.m_rgpLabel.string = "";
                    }
                    if (this.m_lightEffect) {
                      this.m_lightEffect.active = false;
                    }
                    this.m_spine.paused = false;
                    this.PlayAnimation(t.GPR_AnimName.End, false, n);
                    if (!this.node.getComponent(UIOpacity)) {
                      this.node.addComponent(UIOpacity);
                    }
                    this.node.getComponent(UIOpacity).opacity = 0;
                    e.next = 8;
                    return node$2.Wait(this, Game_Define.Time.RoundAdd);
                  case 8:
                    this.node.getComponent(UIOpacity).opacity = 255;
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, r) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    if (undefined === r) {
                      r = 0;
                    }
                    this.m_spine.timeScale = Game_Define.TimeScale();
                    e.next = 5;
                    return SpineKit.PlayAnimation(this.m_spine, t, n, r);
                  case 5:
                    if (!(null == i)) {
                      i();
                    }
                  case 6:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, r) {
            return e.apply(this, arguments);
          };
        }();
        n.test = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.name;
                    this.m_spine;
                    this.m_jp;
                    this.m_number;
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
        return t;
      }(Component);
      _class3$1.AnimName = {
        Win: "Win"
      };
      _class3$1.GPR_AnimName = {
        Bottom: "Bottom",
        End: "End",
        Loop: "Loop",
        Stop: "Stop"
      };
      _class3$1.N_AnimName = {
        Idle: "Idle",
        End: "End",
        Loop: "Loop",
        Stop: "Stop",
        Track1_Multiply: "Track1_Multiply",
        Track2_Ribbon: "Track2_Ribbon"
      };
      _class3$1.P_AnimName = {
        Start: "Start"
      };
      _class3$1.P_Txt = {
        TXT_MG_Model02: "TXT_MG_Model02"
      };
      _class3$1.AnimEvent = {
        Hit: "Hit"
      };
      _class3$1.FONT = {
        W: 0,
        R: 1
      };
      _class3$1.Rocket_Skin = {
        G: "G",
        P: "P",
        R: "R"
      };
      _class3$1.Color = {
        Light: 255,
        Dark: 144
      };
      _descriptor$3 = _applyDecoratedDescriptor(_class3$1.prototype, "m_spine", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$3 = _applyDecoratedDescriptor(_class3$1.prototype, "m_jpState", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$3 = _applyDecoratedDescriptor(_class3$1.prototype, "m_rgpLabel", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$3 = _applyDecoratedDescriptor(_class3$1.prototype, "m_nLabel", [_dec5$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$1 = _applyDecoratedDescriptor(_class3$1.prototype, "m_nMultiplyLabel", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor6$1 = _applyDecoratedDescriptor(_class3$1.prototype, "m_lightEffectPrefab", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor7$1 = _applyDecoratedDescriptor(_class3$1.prototype, "m_symbolLights", [_dec8$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor8$1 = _applyDecoratedDescriptor(_class3$1.prototype, "m_PFlyText", [_dec9$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor9$1 = _applyDecoratedDescriptor(_class3$1.prototype, "m_particleSystem2D", [_dec10$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var SymbolEffect = _dec$3(_class$3 = _class3$1) || _class$3;
      var _dec$4;
      var _dec2$4;
      var _dec3$4;
      var _class$4;
      var _descriptor$4;
      var _descriptor2$4;
      var _class3$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "333c0oLPe9J4qlArUmYSa2O", "Bonus", undefined);
      var ccclass$4 = _decorator.ccclass;
      var property$4 = _decorator.property;
      var ANIMATION_NAME;
      var Area_Type;
      var Area_Type_Skin;
      !function (e) {
        e.Start = "Start";
      }(ANIMATION_NAME || (ANIMATION_NAME = {}));
      (function (e) {
        e[e.O = 1] = "O";
        e[e.B = 2] = "B";
        e[e.G = 3] = "G";
        e[e.P = 4] = "P";
      })(Area_Type || (Area_Type = {}));
      (function (e) {
        e.O = "O";
        e.B = "B";
        e.G = "G";
        e.P = "P";
      })(Area_Type_Skin || (Area_Type_Skin = {}));
      _dec$4 = ccclass$4("Bouns");
      _dec2$4 = property$4({
        type: sp.Skeleton
      });
      _dec3$4 = property$4({
        type: Label
      });
      _class3$2 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_Label", _descriptor2$4, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.ShowMultiplier = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n, i, r) {
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.Close();
                    e.t0 = n;
                    e.next = e.t0 === Area_Type.O ? 4 : e.t0 === Area_Type.B ? 6 : e.t0 === Area_Type.G ? 8 : e.t0 === Area_Type.P ? 10 : 12;
                    break;
                  case 4:
                    this.m_spine.setSkin(Area_Type_Skin.O);
                    return e.abrupt("break", 12);
                  case 6:
                    this.m_spine.setSkin(Area_Type_Skin.B);
                    return e.abrupt("break", 12);
                  case 8:
                    this.m_spine.setSkin(Area_Type_Skin.G);
                    return e.abrupt("break", 12);
                  case 10:
                    this.m_spine.setSkin(Area_Type_Skin.P);
                    return e.abrupt("break", 12);
                  case 12:
                    if (this.m_Label.length > 0) {
                      this.m_Label[n - 1].node.active = true;
                      this.m_Label[n - 1].string = i.toString() + "X";
                    }
                    e.next = 15;
                    return SpineKit.PlayAnimation(this.m_spine, ANIMATION_NAME.Start, false, 0, function (e) {
                      if (e === t.AnimEvent.Hit && o.m_Label.length > 0) {
                        if (!(null == r)) {
                          r(n);
                        }
                      }
                    });
                  case 15:
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
        n.Close = function () {
          for (var e = 0; e < this.m_Label.length; e++) {
            this.m_Label[e].string = "";
            this.m_Label[e].node.active = false;
          }
        };
        return t;
      }(Component);
      _class3$2.AnimEvent = {
        Hit: "Hit"
      };
      _descriptor$4 = _applyDecoratedDescriptor(_class3$2.prototype, "m_spine", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$4 = _applyDecoratedDescriptor(_class3$2.prototype, "m_Label", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var Bouns = _dec$4(_class$4 = _class3$2) || _class$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c7d17Go/YdPR7vNxotYGUra", "NodePool", undefined);
      var NodePool = function () {
        var e = t.prototype;
        function t() {
          this.m_symbolSprites = new Array();
          this.m_symbols = new Array();
          this.m_symbolEftPrefabs = null;
          this.m_symbolEffects = null;
          this.m_symbolJpState = [];
          this.m_symbolFont = [];
          this.m_flyEffect = null;
          this.m_flyEffects = [];
          this.m_rocketEffect = null;
          this.m_rocketEffects = [];
          this.m_rocketNumEffect = null;
          this.m_rocketNumEffects = [];
          this.m_newrWinPrefab = null;
          this.m_newrWins = [];
          this.m_colLinePrefab = null;
          this.m_colLines = [];
          this.m_rowLinePrefab = null;
          this.m_rowLines = [];
          this.m_bonusCoinPrefab = null;
          this.m_bonusNumPrefab = null;
          this.m_bonusCoins = [];
          this.m_bonusNums = [];
          this.m_gBallPrefab = null;
          this.m_gBalls = [];
          t._instance = this;
        }
        e.SetGBall = function (e) {
          this.m_gBallPrefab = e;
        };
        e.GetGBall = function () {
          return this.m_gBalls.length > 0 ? this.m_gBalls.shift() : instantiate(this.m_gBallPrefab);
        };
        e.ReturnGBall = function (e) {
          if (this.m_gBalls) {
            this.m_gBalls.push(e);
          }
        };
        e.SetBonus = function (e, t) {
          this.m_bonusCoinPrefab = e;
          this.m_bonusNumPrefab = t;
        };
        e.GetBonus = function () {
          var e = null;
          if (this.m_bonusCoins.length > 0) {
            e = this.m_bonusCoins.shift();
          } else {
            e = instantiate(this.m_bonusCoinPrefab).getComponent(Bouns);
          }
          var t = null;
          if (this.m_bonusNums.length > 0) {
            t = this.m_bonusNums.shift();
          } else {
            t = instantiate(this.m_bonusNumPrefab).getComponent(Bouns);
          }
          return {
            coin: e,
            num: t
          };
        };
        e.ReturnBonus = function (e, t) {
          if (this.m_bonusCoins) {
            this.m_bonusCoins.push(e);
          }
          if (this.m_bonusNums) {
            this.m_bonusNums.push(t);
          }
        };
        e.SetColLine = function (e) {
          this.m_colLinePrefab = e;
        };
        e.GetColLine = function () {
          return this.m_colLines.length > 0 ? this.m_colLines.shift() : instantiate(this.m_colLinePrefab);
        };
        e.ReturnColLine = function (e) {
          if (this.m_colLines) {
            this.m_colLines.push(e);
          }
        };
        e.SetRowLine = function (e) {
          this.m_rowLinePrefab = e;
        };
        e.GetRowLine = function () {
          return this.m_rowLines.length > 0 ? this.m_rowLines.shift() : instantiate(this.m_rowLinePrefab);
        };
        e.ReturnRowLine = function (e) {
          if (this.m_rowLines) {
            this.m_rowLines.push(e);
          }
        };
        e.SetNearWinEffect = function (e) {
          this.m_newrWinPrefab = e;
        };
        e.GetNearWinEffect = function () {
          return this.m_newrWins.length > 0 ? this.m_newrWins.shift() : instantiate(this.m_newrWinPrefab);
        };
        e.ReturnNearWinEffect = function (e) {
          if (this.m_newrWins) {
            this.m_newrWins.push(e);
          }
        };
        e.SetRocketNumEffect = function (e) {
          this.m_rocketNumEffect = e;
        };
        e.GetRocketNumEffect = function () {
          return this.m_rocketNumEffects.length > 0 ? this.m_rocketNumEffects.shift() : instantiate(this.m_rocketNumEffect);
        };
        e.SetRocketNumEffectNode = function (e, t, n, i) {
          e.getComponent(SymbolEffect).SetRocketNum(n, i);
          e.name = "" + t;
        };
        e.ReturnRocketNumEffect = function (e) {
          if (this.m_rocketNumEffects) {
            this.m_rocketNumEffects.push(e);
          }
        };
        e.SetRocketEffect = function (e) {
          this.m_rocketEffect = e;
        };
        e.GetRocketEffect = function () {
          return this.m_rocketEffects.length > 0 ? this.m_rocketEffects.shift() : instantiate(this.m_rocketEffect);
        };
        e.SetRocketEffectNode = function (e, t) {
          e.getComponent(SymbolEffect).SetSymbolEffect(t);
          e.name = "" + t;
        };
        e.ReturnRocketEffect = function (e) {
          if (this.m_rocketEffects) {
            this.m_rocketEffects.push(e);
          }
        };
        e.SetPFlyEffect = function (e) {
          this.m_flyEffect = e;
        };
        e.GetPFlyEffect = function () {
          return this.m_flyEffects.length > 0 ? this.m_flyEffects.shift() : instantiate(this.m_flyEffect);
        };
        e.ReturnPFlyEffect = function (e) {
          if (this.m_flyEffects) {
            this.m_flyEffects.push(e);
          }
        };
        e.SetSymbolJpStates = function (e) {
          this.m_symbolJpState = e;
        };
        e.GetSymbolJpStates = function (e) {
          return this.m_symbolJpState[e];
        };
        e.SetSymbolFont = function (e) {
          this.m_symbolFont = e;
        };
        e.GetSymbolFont = function (e) {
          return this.m_symbolFont[e];
        };
        e.SetSymbolEffects = function (e) {
          this.m_symbolEftPrefabs = e;
          this.m_symbolEffects = new Array();
          for (var t = 0; t < e.length; t++) {
            this.m_symbolEffects.push(new Array());
          }
        };
        e.GetEffectNode = function (e) {
          if (this.m_symbolEffects[e]) {
            return this.m_symbolEffects[e].length > 0 ? this.m_symbolEffects[e].shift() : instantiate(this.m_symbolEftPrefabs[e]);
          }
        };
        e.SetEffectNode = function (e, t, n, i, r) {
          if (undefined === n) {
            n = null;
          }
          if (undefined === i) {
            i = null;
          }
          if (undefined === r) {
            r = null;
          }
          e.getComponent(SymbolEffect).SetSymbolEffect(t, n, i, r);
          e.name = "" + t;
        };
        e.ReturnEffect = function (e) {
          if (this.m_symbolEffects[e.name]) {
            e.active = true;
            this.m_symbolEffects[e.name].push(e);
          }
        };
        e.SetSymbolSprites = function (e) {
          this.m_symbolSprites = e;
        };
        e.GetSymbol = function (e) {
          if (this.m_symbols.length > 0) {
            var t = this.m_symbols.shift();
            t.getComponent(Sprite).spriteFrame = -1 === e ? null : this.m_symbolSprites[e];
            t.name = "" + e;
            return t;
          }
          var n = new Node();
          n.layer = node$2.Layer2D;
          n.name = "" + e;
          var i = n.addComponent(Sprite);
          i.type = Sprite.Type.SIMPLE;
          i.sizeMode = Sprite.SizeMode.RAW;
          i.trim = false;
          n.getComponent(Sprite).spriteFrame = -1 === e ? null : this.m_symbolSprites[e];
          return n;
        };
        e.SetSymbolSprite = function (e, t) {
          e.getComponent(Sprite).spriteFrame = this.m_symbolSprites[t];
          e.name = "" + t;
        };
        e.ReturnSymbol = function (e) {
          if (e.getComponent(Sprite)) {
            e.active = true;
            this.m_symbols.push(e);
          }
        };
        t.GetInstance = function () {
          return t._instance;
        };
        return t;
      }();
      var _dec$5;
      var _class$5;
      NodePool._instance = new NodePool();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8e0c3LMP3VIt45eyw0m+AJV", "ColumnSymbol", undefined);
      var ccclass$5 = _decorator.ccclass;
      _dec$5 = ccclass$5("ColumnSymbol");
      var ColumnSymbol = _dec$5(_class$5 = function () {
        function e(e, t, n, i) {
          this.m_parentNode = null;
          this.m_symbolNode = new Array();
          this.m_symbol = [];
          this.m_gameView = null;
          this.m_symbols = [];
          this.m_colName = "";
          this.m_name = "";
          this.m_basePos = v3(0, 0, 0);
          this.m_colName = i.toString();
          this.m_parentNode = e;
          this.m_gameView = n;
          for (var r = 0; r < Game_Define.ROW; ++r) {
            var o = NodePool.GetInstance().GetSymbol(-1);
            this.m_symbolNode[r] = o;
          }
          this.SetZindex(i);
        }
        var t = e.prototype;
        t.SetZindex = function (e) {
          for (var t = 0; t < this.m_symbolNode.length; t++) {
            node$3.SetZIndex(this.m_symbolNode[t], e * Game_Define.ROW + t);
          }
        };
        t.ClearSymbols = function () {
          for (var e = 0; e < this.m_symbolNode.length; ++e) {
            var t = this.m_symbolNode[e];
            t.removeFromParent();
            if (Number(t.name) <= Game_Define.Symbol.SYMBOL_10) {
              NodePool.GetInstance().ReturnSymbol(t);
            } else {
              NodePool.GetInstance().ReturnEffect(t);
            }
          }
          this.m_symbolNode = [];
        };
        t.SetSymbols = function (e, t, n) {
          if (undefined === n) {
            n = false;
          }
          this.ClearSymbols();
          for (var i = 0; i < e.length; ++i) {
            var r = e[i].Symbol ? e[i].Symbol : 0;
            var o = e[i].JPState ? e[i].JPState : null;
            var a = e[i].Number ? e[i].Number : 0;
            var s = e[i].JPMult ? e[i].JPMult : 0;
            if (r > Game_Define.Symbol.SYMBOL_10) {
              var l = NodePool.GetInstance().GetEffectNode(r);
              this.m_symbolNode[i] = l;
              this.m_parentNode.addChild(l);
              this.m_symbolNode[i].setPosition(this.CalPosY(i));
              NodePool.GetInstance().SetEffectNode(l, r, o, a, s);
              if (n) {
                var c = l.getComponent(SymbolEffect);
                c.ShowRPGBottm();
                c.ShowRPGBottmLoop();
              }
            } else {
              var u = NodePool.GetInstance().GetSymbol(r);
              this.m_symbolNode[i] = u;
              this.m_parentNode.addChild(u);
              this.m_symbolNode[i].setPosition(this.CalPosY(i));
            }
          }
          this.SetZindex(t);
        };
        t.SetPosition = function (e) {
          this.m_basePos = e;
          for (var t = 0; t < this.m_symbolNode.length; ++t) {
            var n = this.CalPosY(t);
            this.m_symbolNode[t].setPosition(n);
          }
        };
        t.CalPosY = function (e) {
          var t = this.m_basePos.clone();
          t.y += (Game_Define.ROW - 1.5 - e + .5) * Game_Define.SymbolHeight;
          return t;
        };
        t.CalStopPosY = function (e) {
          var t = v3(0, 0, 0);
          t.y += (Game_Define.ROW - 2.5 - e + .5) * Game_Define.SymbolHeight;
          return t;
        };
        t.HideSymbolByRow = function (e) {
          this.m_symbolNode[e].active = false;
        };
        t.SetColumnVisiable = function (e) {
          for (var t = 0; t < Game_Define.ROW; ++t) {
            this.m_symbolNode[t].active = e;
          }
        };
        t.SetSymbolDark = function (e, t) {
          for (var n = 0; n < Game_Define.ROW; ++n) {
            var i = this.m_symbolNode[n];
            var r = null;
            if (Number(i.name) <= Game_Define.Symbol.SYMBOL_10) {
              r = i.getComponent(Sprite);
            } else if (!t) {
              r = i.getComponentInChildren(Sprite);
            }
            if (r) {
              r.color = e ? Game_Define.Color.Dark : Game_Define.Color.Light;
            }
          }
        };
        t.GetSymbol = function (e) {
          return this.m_symbolNode[e];
        };
        _createClass(e, [{
          key: "Name",
          get: function () {
            return this.m_name;
          },
          set: function (e) {
            this.m_name = e;
          }
        }]);
        return e;
      }()) || _class$5;
      var _dec$6;
      var _dec2$5;
      var _dec3$5;
      var _dec4$4;
      var _descriptor$5;
      var _descriptor2$5;
      var _descriptor3$4;
      var _class3$3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "35ecdWKL0hOWYKTQ7N+iH3J", "Compliment", undefined);
      var ccclass$6 = _decorator.ccclass;
      var property$5 = _decorator.property;
      _dec$6 = ccclass$6("Compliment");
      _dec2$5 = property$5({
        type: sp.Skeleton,
        tooltip: "動畫"
      });
      _dec3$5 = property$5({
        type: Label,
        tooltip: "贏分數字"
      });
      _dec4$4 = property$5({
        type: Sprite,
        tooltip: "結算文字"
      });
      _class3$3 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_compliment", _descriptor$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_winNum", _descriptor2$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_complimentText", _descriptor3$4, _assertThisInitialized(t));
          t.m_gameView = undefined;
          t.m_win = 0;
          t.m_showWin = 0;
          t.m_step = 0;
          t.m_isShowAward = false;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          this.node.active = false;
        };
        n.ShowCompliment = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n) {
            var i;
            var r = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    this.m_winNum.string = "0";
                    this.m_showWin = 0;
                    this.m_win = n;
                    i = this.m_compliment.findAnimation("Start").duration;
                    this.m_step = node$3.divide(this.m_win, i);
                    this.m_isShowAward = true;
                    this.m_compliment.clearTracks();
                    node$5.Play(Game_Define.AudioClips.end_declare);
                    e.next = 11;
                    return SpineKit.PlayAnimation(this.m_compliment, "Start", false, 0, function (e) {
                      if (e === t.AnimEvent.Hit) {
                        r.m_showWin = r.m_win;
                        node$1.SetWinValue(r.m_win);
                      }
                    });
                  case 11:
                    SpineKit.PlayAnimation(this.m_compliment, "Loop", true);
                  case 12:
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
        n.ShowComplimentEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var n;
            var i;
            var r;
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_isShowAward = false;
                    n = 0;
                  case 2:
                    if (!(n < this.m_gameView.Character.CrackLevels.length)) {
                      e.next = 32;
                      break;
                    }
                    i = 1;
                    r = null;
                    e.t0 = n;
                    e.next = 0 === e.t0 ? 8 : 1 === e.t0 ? 11 : 2 === e.t0 ? 14 : 17;
                    break;
                  case 8:
                    i = 3;
                    r = "Track3_G";
                    return e.abrupt("break", 17);
                  case 11:
                    i = 1;
                    r = "Track1_R";
                    return e.abrupt("break", 17);
                  case 14:
                    i = 2;
                    r = "Track2_P";
                    return e.abrupt("break", 17);
                  case 17:
                    e.t1 = this.m_gameView.Character.CrackLevels[n];
                    e.next = e.t1 === LV.LV2 ? 20 : e.t1 === LV.LV3 ? 22 : e.t1 === LV.LV4 ? 24 : 26;
                    break;
                  case 20:
                    r += "2";
                    return e.abrupt("break", 28);
                  case 22:
                    r += "3";
                    return e.abrupt("break", 28);
                  case 24:
                    r += "4";
                    return e.abrupt("break", 28);
                  case 26:
                    r = null;
                    return e.abrupt("break", 28);
                  case 28:
                    if (r) {
                      SpineKit.PlayAnimation(this.m_compliment, r, false, i);
                    }
                  case 29:
                    n++;
                    e.next = 2;
                    break;
                  case 32:
                    e.next = 34;
                    return SpineKit.PlayAnimation(this.m_compliment, "End", false, 0, function (e) {
                      if (e === t.AnimEvent.Trans) {
                        o.m_gameView.SinglePlateMgr.node.active = false;
                        o.m_gameView.SinglePlateMgr2.node.active = false;
                        node$5.Play(Game_Define.AudioClips.Open_door);
                        o.m_gameView.Logo.node.active = true;
                        o.m_gameView.Character.ShowComplimentEnd(false);
                        o.m_gameView.Character.ShowTransMg();
                        o.m_gameView.Reel.ShowMg();
                        o.m_gameView.Effect.ClearLine();
                        o.m_gameView.Effect.CloseZone();
                        o.m_gameView.Effect.ClearFgGold();
                        o.m_gameView.SlotReels.node.active = true;
                        o.m_gameView.GameBg.ShowMg();
                      }
                    });
                  case 34:
                    this.node.active = false;
                    this.m_gameView.Character.ShowComplimentEnd(true);
                  case 36:
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
        n.SetTxt = function (e) {
          var t = node.GetGameAtlas();
          for (var n = 0; n < this.m_complimentText.length; n++) {
            if (t.getSpriteFrame(e[n])) {
              this.m_complimentText[n].spriteFrame = t.getSpriteFrame(e[n]);
            }
          }
        };
        n.update = function (e) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * e;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
            }
            this.m_winNum.string = node$3.FormatNumberThousands(node$3.strip(Game_Define.ShowDisplayValue ? Game_Define.ShowDisplayValue(this.m_showWin) : this.m_showWin), node$3.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        return t;
      }(Component);
      _class3$3.AnimEvent = {
        Hit: "Hit",
        Trans: "Trans"
      };
      _descriptor$5 = _applyDecoratedDescriptor(_class3$3.prototype, "m_compliment", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$5 = _applyDecoratedDescriptor(_class3$3.prototype, "m_winNum", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$4 = _applyDecoratedDescriptor(_class3$3.prototype, "m_complimentText", [_dec4$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
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
      function Long(e, t, n) {
        this.low = 0 | e;
        this.high = 0 | t;
        this.unsigned = !!n;
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
        var n;
        var i;
        var r;
        return t ? (r = 0 <= (e >>>= 0) && e < 256) && (i = UINT_CACHE[e]) ? i : (n = new Long(e, 0, true), r && (UINT_CACHE[e] = n), n) : (r = -128 <= (e |= 0) && e < 128) && (i = INT_CACHE[e]) ? i : (n = new Long(e, e < 0 ? -1 : 0, false), r && (INT_CACHE[e] = n), n);
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
      function fromBits(e, t, n) {
        return new Long(e, t, n);
      }
      Long.fromInt = fromInt;
      Long.fromNumber = fromNumber;
      Long.fromBits = fromBits;
      var pow_dbl = Math.pow;
      function fromString(e, t, n) {
        if (0 === e.length) {
          throw Error("empty string");
        }
        if ("number" == typeof t) {
          n = t;
          t = false;
        } else {
          t = !!t;
        }
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) {
          return t ? UZERO : ZERO;
        }
        if ((n = n || 10) < 2 || 36 < n) {
          throw RangeError("radix");
        }
        var i;
        if ((i = e.indexOf("-")) > 0) {
          throw Error("interior hyphen");
        }
        if (0 === i) {
          return fromString(e.substring(1), t, n).neg();
        }
        var r = fromNumber(pow_dbl(n, 8));
        var o = ZERO;
        for (var a = 0; a < e.length; a += 8) {
          var s = Math.min(8, e.length - a);
          var l = parseInt(e.substring(a, a + s), n);
          if (s < 8) {
            var c = fromNumber(pow_dbl(n, s));
            o = o.mul(c).add(fromNumber(l));
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
            var n = this.div(t);
            var i = n.mul(t).sub(this);
            return n.toString(e) + i.toInt().toString(e);
          }
          return "-" + this.neg().toString(e);
        }
        var r = fromNumber(pow_dbl(e, 6), this.unsigned);
        var o = this;
        for (var a = "";;) {
          var s = o.div(r);
          var l = (o.sub(s.mul(r)).toInt() >>> 0).toString(e);
          if ((o = s).isZero()) {
            return l + a;
          }
          for (; l.length < 6;) {
            l = "0" + l;
          }
          a = "" + l + a;
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
        var n = e.isNegative();
        return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
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
        var n = 65535 & this.high;
        var i = this.low >>> 16;
        var r = 65535 & this.low;
        var o = e.high >>> 16;
        var a = 65535 & e.high;
        var s = e.low >>> 16;
        var l = 0;
        var c = 0;
        var u = 0;
        var m = 0;
        u += (m += r + (65535 & e.low)) >>> 16;
        c += (u += i + s) >>> 16;
        l += (c += n + a) >>> 16;
        l += t + o;
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
        var n = 65535 & this.high;
        var i = this.low >>> 16;
        var r = 65535 & this.low;
        var o = e.high >>> 16;
        var a = 65535 & e.high;
        var s = e.low >>> 16;
        var l = 65535 & e.low;
        var c = 0;
        var u = 0;
        var m = 0;
        var _ = 0;
        m += (_ += r * l) >>> 16;
        u += (m += i * l) >>> 16;
        m &= 65535;
        u += (m += r * s) >>> 16;
        c += (u += n * l) >>> 16;
        u &= 65535;
        c += (u += i * s) >>> 16;
        u &= 65535;
        c += (u += r * a) >>> 16;
        c += t * l + n * s + i * a + r * o;
        return new Long((m &= 65535) << 16 | (_ &= 65535), (c &= 65535) << 16 | (u &= 65535), this.unsigned);
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
        var n;
        var i;
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
          i = UZERO;
        } else {
          if (this.eq(MIN_VALUE)) {
            return e.eq(ONE) || e.eq(NEG_ONE) ? MIN_VALUE : e.eq(MIN_VALUE) ? ONE : (t = this.shr(1).div(e).shl(1)).eq(ZERO) ? e.isNegative() ? ONE : NEG_ONE : (n = this.sub(e.mul(t)), i = t.add(n.div(e)));
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
          i = ZERO;
        }
        for (n = this; n.gte(e);) {
          t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
          var r = Math.ceil(Math.log(t) / Math.LN2);
          var o = r <= 48 ? 1 : pow_dbl(2, r - 48);
          var a = fromNumber(t);
          for (var s = a.mul(e); s.isNegative() || s.gt(n);) {
            s = (a = fromNumber(t -= o, this.unsigned)).mul(e);
          }
          if (a.isZero()) {
            a = ONE;
          }
          i = i.add(a);
          n = n.sub(s);
        }
        return i;
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
      Long.fromBytes = function (e, t, n) {
        return n ? Long.fromBytesLE(e, t) : Long.fromBytesBE(e, t);
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
          var r = n.resolveMap;
          var o = this._createRequire(e);
          var a = r ? this._createRequireWithResolveMap("function" == typeof r ? r() : r, o) : o;
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
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (e, t, n, i, r) {
        n.exports = function (e, t) {
          var n = new Array(arguments.length - 1);
          var i = 0;
          var r = 2;
          var o = true;
          for (; r < arguments.length;) {
            n[i++] = arguments[r++];
          }
          return new Promise(function (r, a) {
            n[i] = function (e) {
              if (o) {
                o = false;
                if (e) {
                  a(e);
                } else {
                  var t = new Array(arguments.length - 1);
                  for (var n = 0; n < t.length;) {
                    t[n++] = arguments[n];
                  }
                  r.apply(null, t);
                }
              }
            };
            try {
              e.apply(t || null, n);
            } catch (e) {
              if (o) {
                o = false;
                a(e);
              }
            }
          });
        };
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (e, t, n, i, r) {
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
          var r = null;
          var o = [];
          var s = 0;
          for (var l = 0; t < n;) {
            var c = e[t++];
            switch (l) {
              case 0:
                o[s++] = a[c >> 2];
                i = (3 & c) << 4;
                l = 1;
                break;
              case 1:
                o[s++] = a[i | c >> 4];
                i = (15 & c) << 2;
                l = 2;
                break;
              case 2:
                o[s++] = a[i | c >> 6];
                o[s++] = a[63 & c];
                l = 0;
            }
            if (s > 8191) {
              (r || (r = [])).push(String.fromCharCode.apply(String, o));
              s = 0;
            }
          }
          if (l) {
            o[s++] = a[i];
            o[s++] = 61;
            if (1 === l) {
              o[s++] = 61;
            }
          }
          return r ? (s && r.push(String.fromCharCode.apply(String, o.slice(0, s))), r.join("")) : String.fromCharCode.apply(String, o.slice(0, s));
        };
        e.decode = function (e, t, n) {
          var i;
          var r = n;
          var o = 0;
          for (var a = 0; a < e.length;) {
            var l = e.charCodeAt(a++);
            if (61 === l && o > 1) {
              break;
            }
            if (undefined === (l = s[l])) {
              throw Error("invalid encoding");
            }
            switch (o) {
              case 0:
                i = l;
                o = 1;
                break;
              case 1:
                t[n++] = i << 2 | (48 & l) >> 4;
                i = l;
                o = 2;
                break;
              case 2:
                t[n++] = (15 & i) << 4 | (60 & l) >> 2;
                i = l;
                o = 3;
                break;
              case 3:
                t[n++] = (3 & i) << 6 | l;
                o = 0;
            }
          }
          if (1 === o) {
            throw Error("invalid encoding");
          }
          return n - r;
        };
        e.test = function (e) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
        };
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (e, t, n, i, r) {
        function o() {
          this._listeners = {};
        }
        n.exports = o;
        o.prototype.on = function (e, t, n) {
          (this._listeners[e] || (this._listeners[e] = [])).push({
            fn: t,
            ctx: n || this
          });
          return this;
        };
        o.prototype.off = function (e, t) {
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
        o.prototype.emit = function (e) {
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
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (e, t, n, i, r) {
        function o(e) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var t = new Float32Array([-0]);
              var n = new Uint8Array(t.buffer);
              var i = 128 === n[3];
              function r(e, i, r) {
                t[0] = e;
                i[r] = n[0];
                i[r + 1] = n[1];
                i[r + 2] = n[2];
                i[r + 3] = n[3];
              }
              function o(e, i, r) {
                t[0] = e;
                i[r] = n[3];
                i[r + 1] = n[2];
                i[r + 2] = n[1];
                i[r + 3] = n[0];
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
              e.writeFloatLE = i ? r : o;
              e.writeFloatBE = i ? o : r;
              e.readFloatLE = i ? a : s;
              e.readFloatBE = i ? s : a;
            })();
          } else {
            (function () {
              function t(e, t, n, i) {
                var r = t < 0 ? 1 : 0;
                if (r) {
                  t = -t;
                }
                if (0 === t) {
                  e(1 / t > 0 ? 0 : 2147483648, n, i);
                } else if (isNaN(t)) {
                  e(2143289344, n, i);
                } else if (t > 34028234663852886e22) {
                  e((r << 31 | 2139095040) >>> 0, n, i);
                } else if (t < 11754943508222875e-54) {
                  e((r << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, n, i);
                } else {
                  var o = Math.floor(Math.log(t) / Math.LN2);
                  e((r << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, n, i);
                }
              }
              function n(e, t, n) {
                var i = e(t, n);
                var r = 2 * (i >> 31) + 1;
                var o = i >>> 23 & 255;
                var a = 8388607 & i;
                return 255 === o ? a ? NaN : r * Infinity : 0 === o ? 1401298464324817e-60 * r * a : r * Math.pow(2, o - 150) * (a + 8388608);
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
              function r(e, i, r) {
                t[0] = e;
                i[r] = n[0];
                i[r + 1] = n[1];
                i[r + 2] = n[2];
                i[r + 3] = n[3];
                i[r + 4] = n[4];
                i[r + 5] = n[5];
                i[r + 6] = n[6];
                i[r + 7] = n[7];
              }
              function o(e, i, r) {
                t[0] = e;
                i[r] = n[7];
                i[r + 1] = n[6];
                i[r + 2] = n[5];
                i[r + 3] = n[4];
                i[r + 4] = n[3];
                i[r + 5] = n[2];
                i[r + 6] = n[1];
                i[r + 7] = n[0];
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
              e.writeDoubleLE = i ? r : o;
              e.writeDoubleBE = i ? o : r;
              e.readDoubleLE = i ? a : s;
              e.readDoubleBE = i ? s : a;
            })();
          } else {
            (function () {
              function t(e, t, n, i, r, o) {
                var a = i < 0 ? 1 : 0;
                if (a) {
                  i = -i;
                }
                if (0 === i) {
                  e(0, r, o + t);
                  e(1 / i > 0 ? 0 : 2147483648, r, o + n);
                } else if (isNaN(i)) {
                  e(0, r, o + t);
                  e(2146959360, r, o + n);
                } else if (i > 17976931348623157e292) {
                  e(0, r, o + t);
                  e((a << 31 | 2146435072) >>> 0, r, o + n);
                } else {
                  var s;
                  if (i < 22250738585072014e-324) {
                    e((s = i / 5e-324) >>> 0, r, o + t);
                    e((a << 31 | s / 4294967296) >>> 0, r, o + n);
                  } else {
                    var l = Math.floor(Math.log(i) / Math.LN2);
                    if (1024 === l) {
                      l = 1023;
                    }
                    e(4503599627370496 * (s = i * Math.pow(2, -l)) >>> 0, r, o + t);
                    e((a << 31 | l + 1023 << 20 | 1048576 * s & 1048575) >>> 0, r, o + n);
                  }
                }
              }
              function n(e, t, n, i, r) {
                var o = e(i, r + t);
                var a = e(i, r + n);
                var s = 2 * (a >> 31) + 1;
                var l = a >>> 20 & 2047;
                var c = 4294967296 * (1048575 & a) + o;
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
        n.exports = o(o);
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
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (exports, require, module, __filename, __dirname) {
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
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (e, t, n, i, r) {
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
          var r = null;
          var o = [];
          for (var a = 0; t < n;) {
            if ((i = e[t++]) < 128) {
              o[a++] = i;
            } else if (i > 191 && i < 224) {
              o[a++] = (31 & i) << 6 | 63 & e[t++];
            } else if (i > 239 && i < 365) {
              i = ((7 & i) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536;
              o[a++] = 55296 + (i >> 10);
              o[a++] = 56320 + (1023 & i);
            } else {
              o[a++] = (15 & i) << 12 | (63 & e[t++]) << 6 | 63 & e[t++];
            }
            if (a > 8191) {
              (r || (r = [])).push(String.fromCharCode.apply(String, o));
              a = 0;
            }
          }
          return r ? (a && r.push(String.fromCharCode.apply(String, o.slice(0, a))), r.join("")) : String.fromCharCode.apply(String, o.slice(0, a));
        };
        e.write = function (e, t, n) {
          var i;
          var r;
          var o = n;
          for (var a = 0; a < e.length; ++a) {
            if ((i = e.charCodeAt(a)) < 128) {
              t[n++] = i;
            } else if (i < 2048) {
              t[n++] = i >> 6 | 192;
              t[n++] = 63 & i | 128;
            } else if (55296 == (64512 & i) && 56320 == (64512 & (r = e.charCodeAt(a + 1)))) {
              i = 65536 + ((1023 & i) << 10) + (1023 & r);
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
          return n - o;
        };
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (e, t, n, i, r) {
        n.exports = function (e, t, n) {
          var i = n || 8192;
          var r = i >>> 1;
          var o = null;
          var a = i;
          return function (n) {
            if (n < 1 || n > r) {
              return e(n);
            }
            if (a + n > i) {
              o = e(i);
              a = 0;
            }
            var s = t.call(o, a, a += n);
            if (7 & a) {
              a = 1 + (7 | a);
            }
            return s;
          };
        };
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (e, t, n, i, r) {
        n.exports = a;
        var o = t("../util/minimal");
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
          if (o.isString(e)) {
            if (!o.Long) {
              return a.fromNumber(parseInt(e, 10));
            }
            e = o.Long.fromString(e);
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
          return o.Long ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
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
          "../util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (e, t, n, i, r) {
        function a(e, t, n) {
          var i = Object.keys(t);
          for (var r = 0; r < i.length; ++r) {
            if (!(undefined !== e[i[r]] && n)) {
              e[i[r]] = t[i[r]];
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
          "@protobufjs/aspromise": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/base64": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          "@protobufjs/eventemitter": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          "@protobufjs/float": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          "@protobufjs/inquire": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          "@protobufjs/utf8": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          "@protobufjs/pool": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          "./longbits": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (e, t, n, i, r) {
        n.exports = p;
        var o;
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
        function m() {}
        function _(e) {
          this.head = e.head;
          this.tail = e.tail;
          this.len = e.len;
          this.next = e.states;
        }
        function p() {
          this.len = 0;
          this.head = new u(m, 0, 0);
          this.tail = this.head;
          this.states = null;
        }
        var h = function () {
          return a.Buffer ? function () {
            return (p.create = function () {
              return new o();
            })();
          } : function () {
            return new p();
          };
        };
        function f(e, t, n) {
          t[n] = 255 & e;
        }
        function d(e, t) {
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
        p.create = h();
        p.alloc = function (e) {
          return new a.Array(e);
        };
        if (a.Array !== Array) {
          p.alloc = a.pool(p.alloc, a.Array.prototype.subarray);
        }
        p.prototype._push = function (e, t, n) {
          this.tail = this.tail.next = new u(e, t, n);
          this.len += t;
          return this;
        };
        d.prototype = Object.create(u.prototype);
        d.prototype.fn = function (e, t, n) {
          for (; e > 127;) {
            t[n++] = 127 & e | 128;
            e >>>= 7;
          }
          t[n] = e;
        };
        p.prototype.uint32 = function (e) {
          this.len += (this.tail = this.tail.next = new d((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
          return this;
        };
        p.prototype.int32 = function (e) {
          return e < 0 ? this._push(y, 10, s.fromNumber(e)) : this.uint32(e);
        };
        p.prototype.sint32 = function (e) {
          return this.uint32((e << 1 ^ e >> 31) >>> 0);
        };
        p.prototype.uint64 = function (e) {
          var t = s.from(e);
          return this._push(y, t.length(), t);
        };
        p.prototype.int64 = p.prototype.uint64;
        p.prototype.sint64 = function (e) {
          var t = s.from(e).zzEncode();
          return this._push(y, t.length(), t);
        };
        p.prototype.bool = function (e) {
          return this._push(f, 1, e ? 1 : 0);
        };
        p.prototype.fixed32 = function (e) {
          return this._push(S, 4, e >>> 0);
        };
        p.prototype.sfixed32 = p.prototype.fixed32;
        p.prototype.fixed64 = function (e) {
          var t = s.from(e);
          return this._push(S, 4, t.lo)._push(S, 4, t.hi);
        };
        p.prototype.sfixed64 = p.prototype.fixed64;
        p.prototype.float = function (e) {
          return this._push(a.float.writeFloatLE, 4, e);
        };
        p.prototype.double = function (e) {
          return this._push(a.float.writeDoubleLE, 8, e);
        };
        var g = a.Array.prototype.set ? function (e, t, n) {
          t.set(e, n);
        } : function (e, t, n) {
          for (var i = 0; i < e.length; ++i) {
            t[n + i] = e[i];
          }
        };
        p.prototype.bytes = function (e) {
          var t = e.length >>> 0;
          if (!t) {
            return this._push(f, 1, 0);
          }
          if (a.isString(e)) {
            var n = p.alloc(t = l.length(e));
            l.decode(e, n, 0);
            e = n;
          }
          return this.uint32(t)._push(g, t, e);
        };
        p.prototype.string = function (e) {
          var t = c.length(e);
          return t ? this.uint32(t)._push(c.write, t, e) : this._push(f, 1, 0);
        };
        p.prototype.fork = function () {
          this.states = new _(this);
          this.head = this.tail = new u(m, 0, 0);
          this.len = 0;
          return this;
        };
        p.prototype.reset = function () {
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
        p.prototype.ldelim = function () {
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
        p.prototype.finish = function () {
          var e = this.head.next;
          var t = this.constructor.alloc(this.len);
          for (var n = 0; e;) {
            e.fn(e.val, t, n);
            n += e.len;
            e = e.next;
          }
          return t;
        };
        p._configure = function (e) {
          o = e;
          p.create = h();
          o._configure();
        };
        n.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (e, t, n, i, r) {
        n.exports = s;
        var o = t("./writer");
        (s.prototype = Object.create(o.prototype)).constructor = s;
        var a = t("./util/minimal");
        function s() {
          o.call(this);
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
          "./writer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (e, t, n, i, r) {
        n.exports = u;
        var o;
        var a = t("./util/minimal");
        var s = a.LongBits;
        var l = a.utf8;
        function u(e) {
          this.buf = e;
          this.pos = 0;
          this.len = e.length;
        }
        var m;
        var _ = "undefined" != typeof Uint8Array ? function (e) {
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
        var p = function () {
          return a.Buffer ? function (e) {
            return (u.create = function (e) {
              return a.Buffer.isBuffer(e) ? new o(e) : _(e);
            })(e);
          } : _;
        };
        function h() {
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
        function d() {
          if (this.pos + 8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (8 || 1) + " > " + this.len);
          }
          return new s((this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0, (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0);
        }
        u.create = p();
        u.prototype._slice = a.Array.prototype.subarray || a.Array.prototype.slice;
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
          if (Array.isArray(this.buf)) {
            return this.buf.slice(t, n);
          }
          if (t === n) {
            var i = a.Buffer;
            return i ? i.alloc(0) : new this.buf.constructor(0);
          }
          return this._slice.call(this.buf, t, n);
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
          u.create = p();
          o._configure();
          var t = a.Long ? "toLong" : "toNumber";
          a.merge(u.prototype, {
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
        n.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (e, t, n, i, r) {
        n.exports = s;
        var o = t("./reader");
        (s.prototype = Object.create(o.prototype)).constructor = s;
        var a = t("./util/minimal");
        function s(e) {
          o.call(this, e);
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
          "./reader": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (e, t, n, i, r) {
        n.exports = a;
        var o = t("../util/minimal");
        function a(e, t, n) {
          if ("function" != typeof e) {
            throw TypeError("rpcImpl must be a function");
          }
          o.EventEmitter.call(this);
          this.rpcImpl = e;
          this.requestDelimited = Boolean(t);
          this.responseDelimited = Boolean(n);
        }
        (a.prototype = Object.create(o.EventEmitter.prototype)).constructor = a;
        a.prototype.rpcCall = function e(t, n, i, r, a) {
          if (!r) {
            throw TypeError("request must be specified");
          }
          var s = this;
          if (!a) {
            return o.asPromise(e, s, t, n, i, r);
          }
          if (s.rpcImpl) {
            try {
              return s.rpcImpl(t, n[s.requestDelimited ? "encodeDelimited" : "encode"](r).finish(), function (e, n) {
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
          "../util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (e, t, n, i, r) {
        e.Service = t("./rpc/service");
        n.exports;
      }, function () {
        return {
          "./rpc/service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (e, t, n, i, r) {
        n.exports = {};
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (e, t, n, i, r) {
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
          "./writer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./writer_buffer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          "./reader": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./reader_buffer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./rpc": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          "./roots": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (e, t, n, i, r) {
        function o(e, t) {
          if ("string" == typeof e) {
            t = e;
            e = undefined;
          }
          var n = [];
          function i(e) {
            if ("string" != typeof e) {
              var t = "function " + (undefined || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + n.join("\n  ") + "\n}";
              if (o.verbose) {
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
            for (var m = 0; m < u.length;) {
              u[m] = arguments[++m];
            }
            m = 0;
            e = e.replace(/%([%dfijs])/g, function (e, t) {
              var n = u[m++];
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
            if (m !== u.length) {
              throw Error("parameter count mismatch");
            }
            n.push(e);
            return i;
          }
          function r(i) {
            return "function " + (i || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + n.join("\n  ") + "\n}";
          }
          i.toString = r;
          return i;
        }
        n.exports = o;
        o.verbose = false;
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (e, t, n, i, r) {
        n.exports = s;
        var o = t("@protobufjs/aspromise");
        var a = t("@protobufjs/inquire")("fs");
        function s(e, t, n) {
          if ("function" == typeof t) {
            n = t;
            t = {};
          } else if (!t) {
            t = {};
          }
          return n ? !t.xhr && a && a.readFile ? a.readFile(e, function (i, r) {
            return i && "undefined" != typeof XMLHttpRequest ? s.xhr(e, t, n) : i ? n(i) : n(null, t.binary ? r : r.toString("utf8"));
          }) : s.xhr(e, t, n) : o(s, this, e, t);
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
                  for (var r = 0; r < i.responseText.length; ++r) {
                    e.push(255 & i.responseText.charCodeAt(r));
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
          "@protobufjs/aspromise": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/inquire": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (e, t, n, i, r) {
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
          for (var r = 0; r < t.length;) {
            if (".." === t[r]) {
              if (r > 0 && ".." !== t[r - 1]) {
                t.splice(--r, 2);
              } else if (n) {
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
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (e, t, n, i, r) {
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
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (e, t, n, i, r) {
        n.exports = m;
        var o = t("./object");
        ((m.prototype = Object.create(o.prototype)).constructor = m).className = "Field";
        var a;
        var s = t("./enum");
        var l = t("./types");
        var c = t("./util");
        var u = /^required|optional|repeated$/;
        function m(e, t, n, i, r, a, s) {
          if (c.isObject(i)) {
            s = r;
            a = i;
            i = r = undefined;
          } else if (c.isObject(r)) {
            s = a;
            a = r;
            r = undefined;
          }
          o.call(this, e, a);
          if (!c.isInteger(t) || t < 0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!c.isString(n)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== i && !u.test(i = i.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== r && !c.isString(r)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === i) {
            i = "optional";
          }
          this.rule = i && "optional" !== i ? i : undefined;
          this.type = n;
          this.id = t;
          this.extend = r || undefined;
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
        m.prototype.setOption = function (e, t, n) {
          if ("packed" === e) {
            this._packed = null;
          }
          return o.prototype.setOption.call(this, e, t, n);
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
            if (this.resolvedType instanceof a) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
            }
          } else if (this.options && this.options.proto3_optional) {
            this.typeDefault = null;
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
          return o.prototype.resolve.call(this);
        };
        m.d = function (e, t, n, i) {
          if ("function" == typeof t) {
            t = c.decorateType(t).name;
          } else if (t && "object" == typeof t) {
            t = c.decorateEnum(t).name;
          }
          return function (r, o) {
            c.decorateType(r.constructor).add(new m(o, e, t, n, {
              default: i
            }));
          };
        };
        m._configure = function (e) {
          a = e;
        };
        n.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (e, t, n, i, r) {
        n.exports = l;
        var o = t("./object");
        ((l.prototype = Object.create(o.prototype)).constructor = l).className = "OneOf";
        var a = t("./field");
        var s = t("./util");
        function l(e, t, n, i) {
          if (!Array.isArray(t)) {
            n = t;
            t = undefined;
          }
          o.call(this, e, n);
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
          o.prototype.onAdd.call(this, e);
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
          o.prototype.onRemove.call(this, e);
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
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (e, t, n, i, r) {
        n.exports = p;
        var o = t("./object");
        ((p.prototype = Object.create(o.prototype)).constructor = p).className = "Namespace";
        var a;
        var s;
        var l;
        var c = t("./field");
        var u = t("./util");
        var m = t("./oneof");
        function _(e, t) {
          if (e && e.length) {
            var n = {};
            for (var i = 0; i < e.length; ++i) {
              n[e[i].name] = e[i].toJSON(t);
            }
            return n;
          }
        }
        function p(e, t) {
          o.call(this, e, t);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function h(e) {
          e._nestedArray = null;
          return e;
        }
        p.fromJSON = function (e, t) {
          return new p(e, t.options).addJSON(t.nested);
        };
        p.arrayToJSON = _;
        p.isReservedId = function (e, t) {
          if (e) {
            for (var n = 0; n < e.length; ++n) {
              if ("string" != typeof e[n] && e[n][0] <= t && e[n][1] > t) {
                return true;
              }
            }
          }
          return false;
        };
        p.isReservedName = function (e, t) {
          if (e) {
            for (var n = 0; n < e.length; ++n) {
              if (e[n] === t) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(p.prototype, "nestedArray", {
          get: function () {
            return this._nestedArray || (this._nestedArray = u.toArray(this.nested));
          }
        });
        p.prototype.toJSON = function (e) {
          return u.toObject(["options", this.options, "nested", _(this.nestedArray, e)]);
        };
        p.prototype.addJSON = function (e) {
          if (e) {
            var t;
            var n = Object.keys(e);
            for (var i = 0; i < n.length; ++i) {
              t = e[n[i]];
              this.add((undefined !== t.fields ? a.fromJSON : undefined !== t.values ? l.fromJSON : undefined !== t.methods ? s.fromJSON : undefined !== t.id ? c.fromJSON : p.fromJSON)(n[i], t));
            }
          }
          return this;
        };
        p.prototype.get = function (e) {
          return this.nested && this.nested[e] || null;
        };
        p.prototype.getEnum = function (e) {
          if (this.nested && this.nested[e] instanceof l) {
            return this.nested[e].values;
          }
          throw Error("no such enum: " + e);
        };
        p.prototype.add = function (e) {
          if (!(e instanceof c && undefined !== e.extend || e instanceof a || e instanceof m || e instanceof l || e instanceof s || e instanceof p)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var t = this.get(e.name);
            if (t) {
              if (!(t instanceof p && e instanceof p) || t instanceof a || t instanceof s) {
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
          return h(this);
        };
        p.prototype.remove = function (e) {
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
        p.prototype.define = function (e, t) {
          if (u.isString(e)) {
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
              if (!((n = n.nested[i]) instanceof p)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              n.add(n = new p(i));
            }
          }
          if (t) {
            n.addJSON(t);
          }
          return n;
        };
        p.prototype.resolveAll = function () {
          var e = this.nestedArray;
          for (var t = 0; t < e.length;) {
            if (e[t] instanceof p) {
              e[t++].resolveAll();
            } else {
              e[t++].resolve();
            }
          }
          return this.resolve();
        };
        p.prototype.lookup = function (e, t, n) {
          if ("boolean" == typeof t) {
            n = t;
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
          var i = this.get(e[0]);
          if (i) {
            if (1 === e.length) {
              if (!t || t.indexOf(i.constructor) > -1) {
                return i;
              }
            } else if (i instanceof p && (i = i.lookup(e.slice(1), t, true))) {
              return i;
            }
          } else {
            for (var r = 0; r < this.nestedArray.length; ++r) {
              if (this._nestedArray[r] instanceof p && (i = this._nestedArray[r].lookup(e, t, true))) {
                return i;
              }
            }
          }
          return null === this.parent || n ? null : this.parent.lookup(e, t);
        };
        p.prototype.lookupType = function (e) {
          var t = this.lookup(e, [a]);
          if (!t) {
            throw Error("no such type: " + e);
          }
          return t;
        };
        p.prototype.lookupEnum = function (e) {
          var t = this.lookup(e, [l]);
          if (!t) {
            throw Error("no such Enum '" + e + "' in " + this);
          }
          return t;
        };
        p.prototype.lookupTypeOrEnum = function (e) {
          var t = this.lookup(e, [a, l]);
          if (!t) {
            throw Error("no such Type or Enum '" + e + "' in " + this);
          }
          return t;
        };
        p.prototype.lookupService = function (e) {
          var t = this.lookup(e, [s]);
          if (!t) {
            throw Error("no such Service '" + e + "' in " + this);
          }
          return t;
        };
        p._configure = function (e, t, n) {
          a = e;
          s = t;
          l = n;
        };
        n.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (e, t, n, i, r) {
        n.exports = l;
        var o = t("./field");
        ((l.prototype = Object.create(o.prototype)).constructor = l).className = "MapField";
        var a = t("./types");
        var s = t("./util");
        function l(e, t, n, i, r, a) {
          o.call(this, e, t, i, undefined, undefined, r, a);
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
          return o.prototype.resolve.call(this);
        };
        l.d = function (e, t, n) {
          if ("function" == typeof n) {
            n = s.decorateType(n).name;
          } else if (n && "object" == typeof n) {
            n = s.decorateEnum(n).name;
          }
          return function (i, r) {
            s.decorateType(i.constructor).add(new l(r, e, t, n));
          };
        };
        n.exports;
      }, function () {
        return {
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (e, t, n, i, r) {
        n.exports = s;
        var o = t("./object");
        ((s.prototype = Object.create(o.prototype)).constructor = s).className = "Method";
        var a = t("./util");
        function s(e, t, n, i, r, s, l, c, u) {
          if (a.isObject(r)) {
            l = r;
            r = s = undefined;
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
          o.call(this, e, l);
          this.type = t || "rpc";
          this.requestType = n;
          this.requestStream = !!r || undefined;
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
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), o.prototype.resolve.call(this));
        };
        n.exports;
      }, function () {
        return {
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (e, t, n, i, r) {
        n.exports = c;
        var o = t("./namespace");
        ((c.prototype = Object.create(o.prototype)).constructor = c).className = "Service";
        var a = t("./method");
        var s = t("./util");
        var l = t("./rpc");
        function c(e, t) {
          o.call(this, e, t);
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
            for (var r = 0; r < i.length; ++r) {
              n.add(a.fromJSON(i[r], t.methods[i[r]]));
            }
          }
          if (t.nested) {
            n.addJSON(t.nested);
          }
          n.comment = t.comment;
          return n;
        };
        c.prototype.toJSON = function (e) {
          var t = o.prototype.toJSON.call(this, e);
          var n = !!e && Boolean(e.keepComments);
          return s.toObject(["options", t && t.options || undefined, "methods", o.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", n ? this.comment : undefined]);
        };
        Object.defineProperty(c.prototype, "methodsArray", {
          get: function () {
            return this._methodsArray || (this._methodsArray = s.toArray(this.methods));
          }
        });
        c.prototype.get = function (e) {
          return this.methods[e] || o.prototype.get.call(this, e);
        };
        c.prototype.resolveAll = function () {
          var e = this.methodsArray;
          for (var t = 0; t < e.length; ++t) {
            e[t].resolve();
          }
          return o.prototype.resolve.call(this);
        };
        c.prototype.add = function (e) {
          if (this.get(e.name)) {
            throw Error("duplicate name '" + e.name + "' in " + this);
          }
          return e instanceof a ? (this.methods[e.name] = e, e.parent = this, u(this)) : o.prototype.add.call(this, e);
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
          return o.prototype.remove.call(this, e);
        };
        c.prototype.create = function (e, t, n) {
          var i;
          var r = new l.Service(e, t, n);
          for (var o = 0; o < this.methodsArray.length; ++o) {
            var a = s.lcFirst((i = this._methodsArray[o]).resolve().name).replace(/[^$\w_]/g, "");
            r[a] = s.codegen(["r", "c"], s.isReserved(a) ? a + "_" : a)("return this.rpcCall(m,q,s,r,c)")({
              m: i,
              q: i.resolvedRequestType.ctor,
              s: i.resolvedResponseType.ctor
            });
          }
          return r;
        };
        n.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./method": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./rpc": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (e, t, n, i, r) {
        n.exports = a;
        var o = t("./util/minimal");
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
          return this.$type.toObject(this, o.toJSONOptions);
        };
        n.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (e, t, n, i, r) {
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
            var r = i.resolvedType instanceof o ? "int32" : i.type;
            var c = "m" + s.safeProp(i.name);
            t("case %i: {", i.id);
            if (i.map) {
              t("if(%s===util.emptyObject)", c)("%s={}", c)("var c2 = r.uint32()+r.pos");
              if (undefined !== a.defaults[i.keyType]) {
                t("k=%j", a.defaults[i.keyType]);
              } else {
                t("k=null");
              }
              if (undefined !== a.defaults[r]) {
                t("value=%j", a.defaults[r]);
              } else {
                t("value=null");
              }
              t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", i.keyType)("case 2:");
              if (undefined === a.basic[r]) {
                t("value=types[%i].decode(r,r.uint32())", n);
              } else {
                t("value=r.%s()", r);
              }
              t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
              if (undefined !== a.long[i.keyType]) {
                t("%s[typeof k===\"object\"?util.longToHash(k):k]=value", c);
              } else {
                t("%s[k]=value", c);
              }
            } else if (i.repeated) {
              t("if(!(%s&&%s.length))", c, c)("%s=[]", c);
              if (undefined !== a.packed[r]) {
                t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", c, r)("}else");
              }
              if (undefined === a.basic[r]) {
                t(i.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", c, n);
              } else {
                t("%s.push(r.%s())", c, r);
              }
            } else if (undefined === a.basic[r]) {
              t(i.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", c, n);
            } else {
              t("%s=r.%s()", c, r);
            }
            t("break")("}");
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
        var o = t("./enum");
        var a = t("./types");
        var s = t("./util");
        n.exports;
      }, function () {
        return {
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (e, t, n, i, r) {
        n.exports = function (e) {
          var t = a.codegen(["m"], e.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var n = e.oneofsArray;
          var i = {};
          if (n.length) {
            t("var p={}");
          }
          for (var r = 0; r < e.fieldsArray.length; ++r) {
            var o = e._fieldsArray[r].resolve();
            var u = "m" + a.safeProp(o.name);
            if (o.optional) {
              t("if(%s!=null&&m.hasOwnProperty(%j)){", u, o.name);
            }
            if (o.map) {
              t("if(!util.isObject(%s))", u)("return%j", o.name + ": " + "object" + (o.repeated && true ? "[]" : o.map && false ? "{k:" + o.keyType + "}" : "") + " expected")("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){");
              c(t, o, "k[i]");
              l(t, o, r, u + "[k[i]]")("}");
            } else if (o.repeated) {
              t("if(!Array.isArray(%s))", u)("return%j", o.name + ": " + "array" + (o.repeated && false ? "[]" : o.map && true ? "{k:" + o.keyType + "}" : "") + " expected")("for(var i=0;i<%s.length;++i){", u);
              l(t, o, r, u + "[i]")("}");
            } else {
              if (o.partOf) {
                var m = a.safeProp(o.partOf.name);
                if (1 === i[o.partOf.name]) {
                  t("if(p%s===1)", m)("return%j", o.partOf.name + ": multiple values");
                }
                i[o.partOf.name] = 1;
                t("p%s=1", m);
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
        var a = t("./util");
        function l(e, t, n, i) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof o) {
              e("switch(%s){", i)("default:")("return%j", t.name + ": " + "enum value" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              var r = Object.keys(t.resolvedType.values);
              for (var a = 0; a < r.length; ++a) {
                e("case %i:", t.resolvedType.values[r[a]]);
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
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (e, t, n, i, r) {
        var a = t("./enum");
        var s = t("./util");
        function l(e, t, n, i) {
          var r = false;
          if (t.resolvedType) {
            if (t.resolvedType instanceof a) {
              e("switch(d%s){", i);
              var o = t.resolvedType.values;
              var s = Object.keys(o);
              for (var l = 0; l < s.length; ++l) {
                if (!(o[s[l]] !== t.typeDefault || r)) {
                  e("default:")("if(typeof(d%s)===\"number\"){m%s=d%s;break}", i, i, i);
                  if (!t.repeated) {
                    e("break");
                  }
                  r = true;
                }
                e("case%j:", s[l])("case %i:", o[s[l]])("m%s=%j", i, o[s[l]])("break");
              }
              e("}");
            } else {
              e("if(typeof d%s!==\"object\")", i)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", i, n, i);
            }
          } else {
            var c = false;
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
                c = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", i, i, c)("else if(typeof d%s===\"string\")", i)("m%s=parseInt(d%s,10)", i, i)("else if(typeof d%s===\"number\")", i)("m%s=d%s", i, i)("else if(typeof d%s===\"object\")", i)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", i, i, i, c ? "true" : "");
                break;
              case "bytes":
                e("if(typeof d%s===\"string\")", i)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", i, i, i)("else if(d%s.length >= 0)", i)("m%s=d%s", i, i);
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
              e("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", i, n, i, i, n, i, i);
            } else {
              e("d%s=types[%i].toObject(m%s,o)", i, n, i);
            }
          } else {
            var r = false;
            switch (t.type) {
              case "double":
              case "float":
                e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", i, i, i, i);
                break;
              case "uint64":
                r = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(typeof m%s===\"number\")", i)("d%s=o.longs===String?String(m%s):m%s", i, i, i)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", i, i, i, i, r ? "true" : "", i);
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
            var r = t[i].resolve();
            var o = s.safeProp(r.name);
            if (r.map) {
              n("if(d%s){", o)("if(typeof d%s!==\"object\")", o)("throw TypeError(%j)", r.fullName + ": object expected")("m%s={}", o)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", o);
              l(n, r, i, o + "[ks[i]]")("}")("}");
            } else if (r.repeated) {
              n("if(d%s){", o)("if(!Array.isArray(d%s))", o)("throw TypeError(%j)", r.fullName + ": array expected")("m%s=[]", o)("for(var i=0;i<d%s.length;++i){", o);
              l(n, r, i, o + "[i]")("}")("}");
            } else {
              if (!(r.resolvedType instanceof a)) {
                n("if(d%s!=null){", o);
              }
              l(n, r, i, o);
              if (!(r.resolvedType instanceof a)) {
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
          var r = [];
          var o = [];
          for (var l = 0; l < t.length; ++l) {
            if (!t[l].partOf) {
              (t[l].resolve().repeated ? i : t[l].map ? r : o).push(t[l]);
            }
          }
          if (i.length) {
            n("if(o.arrays||o.defaults){");
            for (l = 0; l < i.length; ++l) {
              n("d%s=[]", s.safeProp(i[l].name));
            }
            n("}");
          }
          if (r.length) {
            n("if(o.objects||o.defaults){");
            for (l = 0; l < r.length; ++l) {
              n("d%s={}", s.safeProp(r[l].name));
            }
            n("}");
          }
          if (o.length) {
            n("if(o.defaults){");
            for (l = 0; l < o.length; ++l) {
              var u = o[l];
              var m = s.safeProp(u.name);
              if (u.resolvedType instanceof a) {
                n("d%s=o.enums===String?%j:%j", m, u.resolvedType.valuesById[u.typeDefault], u.typeDefault);
              } else if (u.long) {
                n("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", m)("}else")("d%s=o.longs===String?%j:%i", m, u.typeDefault.toString(), u.typeDefault.toNumber());
              } else if (u.bytes) {
                var _ = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
                n("if(o.bytes===String)d%s=%j", m, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", m, _)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", m, m)("}");
              } else {
                n("d%s=%j", m, u.typeDefault);
              }
            }
            n("}");
          }
          var p = false;
          for (l = 0; l < t.length; ++l) {
            u = t[l];
            var h = e._fieldsArray.indexOf(u);
            m = s.safeProp(u.name);
            if (u.map) {
              if (!p) {
                p = true;
                n("var ks2");
              }
              n("if(m%s&&(ks2=Object.keys(m%s)).length){", m, m)("d%s={}", m)("for(var j=0;j<ks2.length;++j){");
              c(n, u, h, m + "[ks2[j]]")("}");
            } else if (u.repeated) {
              n("if(m%s&&m%s.length){", m, m)("d%s=[]", m)("for(var j=0;j<m%s.length;++j){", m);
              c(n, u, h, m + "[j]")("}");
            } else {
              n("if(m%s!=null&&m.hasOwnProperty(%j)){", m, u.name);
              c(n, u, h, m);
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
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (e, t, n, i, r) {
        var a = t("./message");
        e[".google.protobuf.Any"] = {
          fromObject: function (e) {
            if (e && e["@type"]) {
              var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1);
              var n = this.lookup(t);
              if (n) {
                var i = "." === e["@type"].charAt(0) ? e["@type"].slice(1) : e["@type"];
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
              var r = this.lookup(i);
              if (r) {
                e = r.decode(e.value);
              }
            }
            if (!(e instanceof this.ctor) && e instanceof a) {
              var o = e.$type.toObject(e, t);
              if ("" === n) {
                n = "type.googleapis.com/";
              }
              i = n + ("." === e.$type.fullName[0] ? e.$type.fullName.slice(1) : e.$type.fullName);
              o["@type"] = i;
              return o;
            }
            return this.toObject(e, t);
          }
        };
        n.exports;
      }, function () {
        return {
          "./message": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (e, t, n, i, r) {
        n.exports = b;
        var o = t("./namespace");
        ((b.prototype = Object.create(o.prototype)).constructor = b).className = "Type";
        var a = t("./enum");
        var s = t("./oneof");
        var l = t("./field");
        var c = t("./mapfield");
        var u = t("./service");
        var m = t("./message");
        var _ = t("./reader");
        var p = t("./writer");
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
              if (!(t instanceof m)) {
                (e.prototype = new m()).constructor = e;
                h.merge(e.prototype, t);
              }
              e.$type = e.prototype.$type = this;
              h.merge(e, m, true);
              this._ctor = e;
              for (var n = 0; n < this.fieldsArray.length; ++n) {
                this._fieldsArray[n].resolve();
              }
              var i = {};
              for (n = 0; n < this.oneofsArray.length; ++n) {
                i[this._oneofsArray[n].resolve().name] = {
                  get: h.oneOfGetter(this._oneofsArray[n].oneof),
                  set: h.oneOfSetter(this._oneofsArray[n].oneof)
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
          var n = h.codegen(["p"], e.name);
          for (var i = 0; i < e.fieldsArray.length; ++i) {
            if ((t = e._fieldsArray[i]).map) {
              n("this%s={}", h.safeProp(t.name));
            } else if (t.repeated) {
              n("this%s=[]", h.safeProp(t.name));
            }
          }
          return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        b.fromJSON = function (e, t) {
          var n = new b(e, t.options);
          n.extensions = t.extensions;
          n.reserved = t.reserved;
          var i = Object.keys(t.fields);
          for (var r = 0; r < i.length; ++r) {
            n.add((undefined !== t.fields[i[r]].keyType ? c.fromJSON : l.fromJSON)(i[r], t.fields[i[r]]));
          }
          if (t.oneofs) {
            i = Object.keys(t.oneofs);
            for (r = 0; r < i.length; ++r) {
              n.add(s.fromJSON(i[r], t.oneofs[i[r]]));
            }
          }
          if (t.nested) {
            i = Object.keys(t.nested);
            for (r = 0; r < i.length; ++r) {
              var m = t.nested[i[r]];
              n.add((undefined !== m.id ? l.fromJSON : undefined !== m.fields ? b.fromJSON : undefined !== m.values ? a.fromJSON : undefined !== m.methods ? u.fromJSON : o.fromJSON)(i[r], m));
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
          var t = o.prototype.toJSON.call(this, e);
          var n = !!e && Boolean(e.keepComments);
          return h.toObject(["options", t && t.options || undefined, "oneofs", o.arrayToJSON(this.oneofsArray, e), "fields", o.arrayToJSON(this.fieldsArray.filter(function (e) {
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
          return e instanceof s ? (this.oneofs || (this.oneofs = {}), this.oneofs[e.name] = e, e.onAdd(this), v(this)) : o.prototype.add.call(this, e);
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
          if (e instanceof s) {
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
          for (var n = 0; n < this.fieldsArray.length; ++n) {
            t.push(this._fieldsArray[n].resolve().resolvedType);
          }
          this.encode = f(this)({
            Writer: p,
            types: t,
            util: h
          });
          this.decode = d(this)({
            Reader: _,
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
          var i = g[e];
          if (i) {
            var r = Object.create(this);
            r.fromObject = this.fromObject;
            this.fromObject = i.fromObject.bind(r);
            r.toObject = this.toObject;
            this.toObject = i.toObject.bind(r);
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
          if (!(e instanceof _)) {
            e = _.create(e);
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
        n.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./message": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./reader": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./writer": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./encoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./wrappers": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (e, t, n, i, r) {
        n.exports = p;
        var o = t("./namespace");
        ((p.prototype = Object.create(o.prototype)).constructor = p).className = "Root";
        var a;
        var s;
        var l;
        var c = t("./field");
        var u = t("./enum");
        var m = t("./oneof");
        var _ = t("./util");
        function p(e) {
          o.call(this, "", e);
          this.deferred = [];
          this.files = [];
        }
        function h() {}
        p.fromJSON = function (e, t) {
          if (!t) {
            t = new p();
          }
          if (e.options) {
            t.setOptions(e.options);
          }
          return t.addJSON(e.nested);
        };
        p.prototype.resolvePath = _.path.resolve;
        p.prototype.fetch = _.fetch;
        p.prototype.load = function e(t, n, i) {
          if ("function" == typeof n) {
            i = n;
            n = undefined;
          }
          var r = this;
          if (!i) {
            return _.asPromise(e, r, t, n);
          }
          var o = i === h;
          function a(e, t) {
            if (i) {
              if (o) {
                throw e;
              }
              var n = i;
              i = null;
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
              if (_.isString(t) && "{" === t.charAt(0)) {
                t = JSON.parse(t);
              }
              if (_.isString(t)) {
                s.filename = e;
                var i;
                var l = s(t, r, n);
                var u = 0;
                if (l.imports) {
                  for (; u < l.imports.length; ++u) {
                    if (i = c(l.imports[u]) || r.resolvePath(e, l.imports[u])) {
                      m(i);
                    }
                  }
                }
                if (l.weakImports) {
                  for (u = 0; u < l.weakImports.length; ++u) {
                    if (i = c(l.weakImports[u]) || r.resolvePath(e, l.weakImports[u])) {
                      m(i, true);
                    }
                  }
                }
              } else {
                r.setOptions(t.options).addJSON(t.nested);
              }
            } catch (e) {
              a(e);
            }
            if (!(o || p)) {
              a(null, r);
            }
          }
          function m(e, t) {
            e = c(e) || e;
            if (!(r.files.indexOf(e) > -1)) {
              r.files.push(e);
              if (e in l) {
                if (o) {
                  u(e, l[e]);
                } else {
                  ++p;
                  setTimeout(function () {
                    --p;
                    u(e, l[e]);
                  });
                }
              } else if (o) {
                var n;
                try {
                  n = _.fs.readFileSync(e).toString("utf8");
                } catch (e) {
                  return void (t || a(e));
                }
                u(e, n);
              } else {
                ++p;
                r.fetch(e, function (n, o) {
                  --p;
                  if (i) {
                    if (n) {
                      if (t) {
                        if (!p) {
                          a(null, r);
                        }
                      } else {
                        a(n);
                      }
                    } else {
                      u(e, o);
                    }
                  }
                });
              }
            }
          }
          var p = 0;
          if (_.isString(t)) {
            t = [t];
          }
          var f;
          for (var d = 0; d < t.length; ++d) {
            if (f = r.resolvePath("", t[d])) {
              m(f);
            }
          }
          if (o) {
            return r;
          }
          if (!p) {
            a(null, r);
          }
        };
        p.prototype.loadSync = function (e, t) {
          if (!_.isNode) {
            throw Error("not supported");
          }
          return this.load(e, t, h);
        };
        p.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (e) {
              return "'extend " + e.extend + "' in " + e.parent.fullName;
            }).join(", "));
          }
          return o.prototype.resolveAll.call(this);
        };
        var f = /^[A-Z]/;
        function d(e, t) {
          var n = t.parent.lookup(t.extend);
          if (n) {
            var i = new c(t.fullName, t.id, t.type, t.rule, undefined, t.options);
            if (!n.get(i.name)) {
              i.declaringField = t;
              t.extensionField = i;
              n.add(i);
            }
            return true;
          }
          return false;
        }
        p.prototype._handleAdd = function (e) {
          if (e instanceof c) {
            if (!(undefined === e.extend || e.extensionField || d(0, e))) {
              this.deferred.push(e);
            }
          } else if (e instanceof u) {
            if (f.test(e.name)) {
              e.parent[e.name] = e.values;
            }
          } else if (!(e instanceof m)) {
            if (e instanceof a) {
              for (var t = 0; t < this.deferred.length;) {
                if (d(0, this.deferred[t])) {
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
        p.prototype._handleRemove = function (e) {
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
          } else if (e instanceof o) {
            for (var n = 0; n < e.nestedArray.length; ++n) {
              this._handleRemove(e._nestedArray[n]);
            }
            if (f.test(e.name)) {
              delete e.parent[e.name];
            }
          }
        };
        p._configure = function (e, t, n) {
          a = e;
          s = t;
          l = n;
        };
        n.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (e, t, n, i, r) {
        var o;
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
            var r = e[n++];
            if (undefined !== r) {
              t[i] = r;
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
        var m = /_([a-z])/g;
        s.camelCase = function (e) {
          return e.substring(0, 1) + e.substring(1).replace(m, function (e, t) {
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
          if (!o) {
            o = t("./type");
          }
          var i = new o(n || e.name);
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
        var _ = 0;
        s.decorateEnum = function (e) {
          if (e.$type) {
            return e.$type;
          }
          if (!a) {
            a = t("./enum");
          }
          var n = new a("Enum" + _++, e);
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
            var r = n.shift();
            if ("__proto__" === r || "prototype" === r) {
              return t;
            }
            if (n.length > 0) {
              t[r] = e(t[r] || {}, n, i);
            } else {
              var o = t[r];
              if (o) {
                i = [].concat(o).concat(i);
              }
              t[r] = i;
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
          "./util/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./roots": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          "@protobufjs/codegen": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          "@protobufjs/fetch": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          "@protobufjs/path": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          "./type": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./root": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (e, t, n, i, r) {
        n.exports = s;
        s.className = "ReflectionObject";
        var o;
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
          if (t instanceof o) {
            t._handleAdd(this);
          }
        };
        s.prototype.onRemove = function (e) {
          var t = e.root;
          if (t instanceof o) {
            t._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        s.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof o) {
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
            var r = i.find(function (t) {
              return Object.prototype.hasOwnProperty.call(t, e);
            });
            if (r) {
              var o = r[e];
              a.setProperty(o, n, t);
            } else {
              (r = {})[e] = a.setProperty({}, n, t);
              i.push(r);
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
          o = e;
        };
        n.exports;
      }, function () {
        return {
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (e, t, n, i, r) {
        n.exports = l;
        var o = t("./object");
        ((l.prototype = Object.create(o.prototype)).constructor = l).className = "Enum";
        var a = t("./namespace");
        var s = t("./util");
        function l(e, t, n, i, r, a) {
          o.call(this, e, n);
          if (t && "object" != typeof t) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = i;
          this.comments = r || {};
          this.valuesOptions = a;
          this.reserved = undefined;
          if (t) {
            var s = Object.keys(t);
            for (var l = 0; l < s.length; ++l) {
              if ("number" == typeof t[s[l]]) {
                this.valuesById[this.values[s[l]] = t[s[l]]] = s[l];
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
          return s.toObject(["options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined]);
        };
        l.prototype.add = function (e, t, n, i) {
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
          if (i) {
            if (undefined === this.valuesOptions) {
              this.valuesOptions = {};
            }
            this.valuesOptions[e] = i || null;
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
          if (this.valuesOptions) {
            delete this.valuesOptions[e];
          }
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
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (e, t, n, i, r) {
        n.exports = function (e) {
          var t;
          var n = s.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()");
          var i = e.fieldsArray.slice().sort(s.compareFieldsById);
          for (var r = 0; r < i.length; ++r) {
            var c = i[r].resolve();
            var u = e._fieldsArray.indexOf(c);
            var m = c.resolvedType instanceof o ? "int32" : c.type;
            var _ = a.basic[m];
            t = "m" + s.safeProp(c.name);
            if (c.map) {
              n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, c.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (c.id << 3 | 2) >>> 0, 8 | a.mapKey[c.keyType], c.keyType);
              if (undefined === _) {
                n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, t);
              } else {
                n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | _, m, t);
              }
              n("}")("}");
            } else if (c.repeated) {
              n("if(%s!=null&&%s.length){", t, t);
              if (c.packed && undefined !== a.packed[m]) {
                n("w.uint32(%i).fork()", (c.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", m, t)("w.ldelim()");
              } else {
                n("for(var i=0;i<%s.length;++i)", t);
                if (undefined === _) {
                  if (c.resolvedType.group) {
                    n("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t + "[i]", (c.id << 3 | 3) >>> 0, (c.id << 3 | 4) >>> 0);
                  } else {
                    n("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t + "[i]", (c.id << 3 | 2) >>> 0);
                  }
                } else {
                  n("w.uint32(%i).%s(%s[i])", (c.id << 3 | _) >>> 0, m, t);
                }
              }
              n("}");
            } else {
              if (c.optional) {
                n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, c.name);
              }
              if (undefined === _) {
                if (c.resolvedType.group) {
                  n("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t, (c.id << 3 | 3) >>> 0, (c.id << 3 | 4) >>> 0);
                } else {
                  n("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t, (c.id << 3 | 2) >>> 0);
                }
              } else {
                n("w.uint32(%i).%s(%s)", (c.id << 3 | _) >>> 0, m, t);
              }
            }
          }
          return n("return w");
        };
        var o = t("./enum");
        var a = t("./types");
        var s = t("./util");
        n.exports;
      }, function () {
        return {
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (e, t, n, i, r) {
        var o = n.exports = t("./index-minimal");
        o.build = "light";
        o.load = function (e, t, n) {
          if ("function" == typeof t) {
            n = t;
            t = new o.Root();
          } else if (!t) {
            t = new o.Root();
          }
          return t.load(e, n);
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
        n.exports;
      }, function () {
        return {
          "./index-minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          "./encoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./object": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./root": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./type": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./mapfield": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./message": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./wrappers": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (e, t, n, i, r) {
        n.exports = f;
        var o = /[\s{}=;:[\],'"()<>]/g;
        var a = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var s = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var l = /^ *[*/]+ */;
        var c = /^\s*\*?\/*/;
        var u = /\n/g;
        var m = /\s/;
        var _ = /\\(.?)/g;
        var p = {
          0: "\0",
          r: "\r",
          n: "\n",
          t: "\t"
        };
        function h(e) {
          return e.replace(_, function (e, t) {
            switch (t) {
              case "\\":
              case "":
                return t;
              default:
                return p[t] || "";
            }
          });
        }
        function f(e, t) {
          e = e.toString();
          var n = 0;
          var i = e.length;
          var r = 1;
          var _ = 0;
          var p = {};
          var f = [];
          var d = null;
          function g(n, i, o) {
            var a;
            var s = {
              type: e.charAt(n++),
              lineEmpty: false,
              leading: o
            };
            var m = n - (t ? 2 : 3);
            do {
              if (--m < 0 || "\n" === (a = e.charAt(m))) {
                s.lineEmpty = true;
                break;
              }
            } while (" " === a || "\t" === a);
            var h = e.substring(n, i).split(u);
            for (var f = 0; f < h.length; ++f) {
              h[f] = h[f].replace(t ? c : l, "").trim();
            }
            s.text = h.join("\n").trim();
            p[r] = s;
            _ = r;
          }
          function b(t) {
            var n = v(t);
            var i = e.substring(t, n);
            return /^\s*\/\//.test(i);
          }
          function v(e) {
            for (var t = e; t < i && "\n" !== e.charAt(t);) {
              t++;
            }
            return t;
          }
          function R() {
            if (f.length > 0) {
              return f.shift();
            }
            if (d) {
              return function () {
                var t = "'" === d ? s : a;
                t.lastIndex = n - 1;
                var i = t.exec(e);
                if (!i) {
                  throw Error("illegal string (line " + r + ")");
                }
                n = t.lastIndex;
                N(d);
                d = null;
                return h(i[1]);
              }();
            }
            var l;
            var c;
            var u;
            var _;
            var p;
            var R = 0 === n;
            do {
              if (n === i) {
                return null;
              }
              for (l = false; m.test(u = e.charAt(n));) {
                if ("\n" === u) {
                  R = true;
                  ++r;
                }
                if (++n === i) {
                  return null;
                }
              }
              if ("/" === e.charAt(n)) {
                if (++n === i) {
                  throw Error("illegal comment (line " + r + ")");
                }
                if ("/" === e.charAt(n)) {
                  if (t) {
                    _ = n;
                    p = false;
                    if (b(n - 1)) {
                      p = true;
                      do {
                        if ((n = v(n)) === i) {
                          break;
                        }
                        n++;
                        if (!R) {
                          break;
                        }
                      } while (b(n));
                    } else {
                      n = Math.min(i, v(n) + 1);
                    }
                    if (p) {
                      g(_, n, R);
                      R = true;
                    }
                    r++;
                    l = true;
                  } else {
                    for (p = "/" === e.charAt(_ = n + 1); "\n" !== e.charAt(++n);) {
                      if (n === i) {
                        return null;
                      }
                    }
                    ++n;
                    if (p) {
                      g(_, n - 1, R);
                      R = true;
                    }
                    ++r;
                    l = true;
                  }
                } else {
                  if ("*" !== (u = e.charAt(n))) {
                    return "/";
                  }
                  _ = n + 1;
                  p = t || "*" === e.charAt(_);
                  do {
                    if ("\n" === u) {
                      ++r;
                    }
                    if (++n === i) {
                      throw Error("illegal comment (line " + r + ")");
                    }
                    c = u;
                    u = e.charAt(n);
                  } while ("*" !== c || "/" !== u);
                  ++n;
                  if (p) {
                    g(_, n - 2, R);
                    R = true;
                  }
                  l = true;
                }
              }
            } while (l);
            var L = n;
            o.lastIndex = 0;
            if (!o.test(e.charAt(L++))) {
              for (; L < i && !o.test(e.charAt(L));) {
                ++L;
              }
            }
            var w = e.substring(n, n = L);
            if (!("\"" !== w && "'" !== w)) {
              d = w;
            }
            return w;
          }
          function N(e) {
            f.push(e);
          }
          function L() {
            if (!f.length) {
              var e = R();
              if (null === e) {
                return null;
              }
              N(e);
            }
            return f[0];
          }
          return Object.defineProperty({
            next: R,
            peek: L,
            push: N,
            skip: function (e, t) {
              var n = L();
              if (n === e) {
                R();
                return true;
              }
              if (!t) {
                throw Error("illegal " + ("token '" + n + "', '" + e + "' expected") + " (line " + r + ")");
              }
              return false;
            },
            cmnt: function (e) {
              var n;
              var i = null;
              if (undefined === e) {
                n = p[r - 1];
                delete p[r - 1];
                if (n && (t || "*" === n.type || n.lineEmpty)) {
                  i = n.leading ? n.text : null;
                }
              } else {
                if (_ < e) {
                  L();
                }
                n = p[e];
                delete p[e];
                if (!(!n || n.lineEmpty || !t && "/" !== n.type)) {
                  i = n.leading ? null : n.text;
                }
              }
              return i;
            }
          }, "line", {
            get: function () {
              return r;
            }
          });
        }
        f.unescape = h;
        n.exports;
      }, {});
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (e, t, n, i, r) {
        n.exports = A;
        A.filename = null;
        A.defaults = {
          keepCase: false
        };
        var o = t("./tokenize");
        var a = t("./root");
        var s = t("./type");
        var l = t("./field");
        var c = t("./mapfield");
        var u = t("./oneof");
        var m = t("./enum");
        var _ = t("./service");
        var p = t("./method");
        var h = t("./types");
        var f = t("./util");
        var d = /^[1-9][0-9]*$/;
        var y = /^-?[1-9][0-9]*$/;
        var S = /^0[x][0-9a-fA-F]+$/;
        var g = /^-?0[x][0-9a-fA-F]+$/;
        var b = /^0[0-7]+$/;
        var v = /^-?0[0-7]+$/;
        var R = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var N = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var L = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var w = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function A(e, t, n) {
          if (!(t instanceof a)) {
            n = t;
            t = new a();
          }
          if (!n) {
            n = A.defaults;
          }
          var i;
          var r;
          var T;
          var P;
          var C;
          var $ = n.preferTrailingComment || false;
          var E = o(e, n.alternateCommentMode || false);
          var D = E.next;
          var I = E.push;
          var G = E.peek;
          var O = E.skip;
          var k = E.cmnt;
          var M = true;
          var F = false;
          var x = t;
          var B = n.keepCase ? function (e) {
            return e;
          } : f.camelCase;
          function W(e, t, n) {
            var i = A.filename;
            if (!n) {
              A.filename = null;
            }
            return Error("illegal " + (t || "token") + " '" + e + "' (" + (i ? i + ", " : "") + "line " + E.line + ")");
          }
          function V() {
            var e;
            var t = [];
            do {
              if ("\"" !== (e = D()) && "'" !== e) {
                throw W(e);
              }
              t.push(D());
              O(e);
              e = G();
            } while ("\"" === e || "'" === e);
            return t.join("");
          }
          function j(e) {
            var t = D();
            switch (t) {
              case "'":
              case "\"":
                I(t);
                return V();
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
                if (d.test(e)) {
                  return n * parseInt(e, 10);
                }
                if (S.test(e)) {
                  return n * parseInt(e, 16);
                }
                if (b.test(e)) {
                  return n * parseInt(e, 8);
                }
                if (R.test(e)) {
                  return n * parseFloat(e);
                }
                throw W(e, "number", t);
              }(t, true);
            } catch (n) {
              if (e && L.test(t)) {
                return t;
              }
              throw W(t, "value");
            }
          }
          function U(e, t) {
            var n;
            var i;
            do {
              if (!t || "\"" !== (n = G()) && "'" !== n) {
                e.push([i = z(D()), O("to", true) ? z(D()) : i]);
              } else {
                e.push(V());
              }
            } while (O(",", true));
            var r = {
              options: undefined,
              setOption: function (e, t) {
                if (undefined === this.options) {
                  this.options = {};
                }
                this.options[e] = t;
              }
            };
            X(r, function (e) {
              if ("option" !== e) {
                throw W(e);
              }
              ee(r, e);
              O(";");
            }, function () {
              ie(r);
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
              throw W(e, "id");
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
            throw W(e, "id");
          }
          function J() {
            if (undefined !== i) {
              throw W("package");
            }
            i = D();
            if (!L.test(i)) {
              throw W(i, "name");
            }
            x = x.define(i);
            O(";");
          }
          function H() {
            var e;
            var t = G();
            switch (t) {
              case "weak":
                e = T || (T = []);
                D();
                break;
              case "public":
                D();
              default:
                e = r || (r = []);
            }
            t = V();
            O(";");
            e.push(t);
          }
          function Y() {
            O("=");
            P = V();
            if (!(F = "proto3" === P) && "proto2" !== P) {
              throw W(P, "syntax");
            }
            t.setOption("syntax", P);
            O(";");
          }
          function K(e, t) {
            switch (t) {
              case "option":
                ee(e, t);
                O(";");
                return true;
              case "message":
                Z(e, t);
                return true;
              case "enum":
                Q(e, t);
                return true;
              case "service":
                (function (e, t) {
                  if (!N.test(t = D())) {
                    throw W(t, "service name");
                  }
                  var n = new _(t);
                  X(n, function (e) {
                    if (!K(n, e)) {
                      if ("rpc" !== e) {
                        throw W(e);
                      }
                      !function (e, t) {
                        var n = k();
                        var i = t;
                        if (!N.test(t = D())) {
                          throw W(t, "name");
                        }
                        var r;
                        var o;
                        var a;
                        var s;
                        var l = t;
                        O("(");
                        if (O("stream", true)) {
                          o = true;
                        }
                        if (!L.test(t = D())) {
                          throw W(t);
                        }
                        r = t;
                        O(")");
                        O("returns");
                        O("(");
                        if (O("stream", true)) {
                          s = true;
                        }
                        if (!L.test(t = D())) {
                          throw W(t);
                        }
                        a = t;
                        O(")");
                        var c = new p(l, i, r, a, o, s);
                        c.comment = n;
                        X(c, function (e) {
                          if ("option" !== e) {
                            throw W(e);
                          }
                          ee(c, e);
                          O(";");
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
                  if (!L.test(t = D())) {
                    throw W(t, "reference");
                  }
                  var n = t;
                  X(null, function (t) {
                    switch (t) {
                      case "required":
                      case "repeated":
                        q(e, t, n);
                        break;
                      case "optional":
                        q(e, F ? "proto3_optional" : "optional", n);
                        break;
                      default:
                        if (!F || !L.test(t)) {
                          throw W(t);
                        }
                        I(t);
                        q(e, "optional", n);
                    }
                  });
                })(e, t);
                return true;
            }
            return false;
          }
          function X(e, t, n) {
            var i = E.line;
            if (e) {
              if ("string" != typeof e.comment) {
                e.comment = k();
              }
              e.filename = A.filename;
            }
            if (O("{", true)) {
              for (var r; "}" !== (r = D());) {
                t(r);
              }
              O(";", true);
            } else {
              if (n) {
                n();
              }
              O(";");
              if (e && ("string" != typeof e.comment || $)) {
                e.comment = k(i) || e.comment;
              }
            }
          }
          function Z(e, t) {
            if (!N.test(t = D())) {
              throw W(t, "type name");
            }
            var n = new s(t);
            X(n, function (e) {
              if (!K(n, e)) {
                switch (e) {
                  case "map":
                    !function (e) {
                      O("<");
                      var t = D();
                      if (undefined === h.mapKey[t]) {
                        throw W(t, "type");
                      }
                      O(",");
                      var n = D();
                      if (!L.test(n)) {
                        throw W(n, "type");
                      }
                      O(">");
                      var i = D();
                      if (!N.test(i)) {
                        throw W(i, "name");
                      }
                      O("=");
                      var r = new c(B(i), z(D()), t, n);
                      X(r, function (e) {
                        if ("option" !== e) {
                          throw W(e);
                        }
                        ee(r, e);
                        O(";");
                      }, function () {
                        ie(r);
                      });
                      e.add(r);
                    }(n);
                    break;
                  case "required":
                  case "repeated":
                    q(n, e);
                    break;
                  case "optional":
                    q(n, F ? "proto3_optional" : "optional");
                    break;
                  case "oneof":
                    !function (e, t) {
                      if (!N.test(t = D())) {
                        throw W(t, "name");
                      }
                      var n = new u(B(t));
                      X(n, function (e) {
                        if ("option" === e) {
                          ee(n, e);
                          O(";");
                        } else {
                          I(e);
                          q(n, "optional");
                        }
                      });
                      e.add(n);
                    }(n, e);
                    break;
                  case "extensions":
                    U(n.extensions || (n.extensions = []));
                    break;
                  case "reserved":
                    U(n.reserved || (n.reserved = []), true);
                    break;
                  default:
                    if (!F || !L.test(e)) {
                      throw W(e);
                    }
                    I(e);
                    q(n, "optional");
                }
              }
            });
            e.add(n);
          }
          function q(e, t, n) {
            var i = D();
            if ("group" !== i) {
              for (; i.endsWith(".") || G().startsWith(".");) {
                i += D();
              }
              if (!L.test(i)) {
                throw W(i, "type");
              }
              var r = D();
              if (!N.test(r)) {
                throw W(r, "name");
              }
              r = B(r);
              O("=");
              var o = new l(r, z(D()), i, t, n);
              X(o, function (e) {
                if ("option" !== e) {
                  throw W(e);
                }
                ee(o, e);
                O(";");
              }, function () {
                ie(o);
              });
              if ("proto3_optional" === t) {
                var a = new u("_" + r);
                o.setOption("proto3_optional", true);
                a.add(o);
                e.add(a);
              } else {
                e.add(o);
              }
              if (!(F || !o.repeated || undefined === h.packed[i] && undefined !== h.basic[i])) {
                o.setOption("packed", false, true);
              }
            } else {
              !function (e, t) {
                var n = D();
                if (!N.test(n)) {
                  throw W(n, "name");
                }
                var i = f.lcFirst(n);
                if (n === i) {
                  n = f.ucFirst(n);
                }
                O("=");
                var r = z(D());
                var o = new s(n);
                o.group = true;
                var a = new l(i, r, n, t);
                a.filename = A.filename;
                X(o, function (e) {
                  switch (e) {
                    case "option":
                      ee(o, e);
                      O(";");
                      break;
                    case "required":
                    case "repeated":
                      q(o, e);
                      break;
                    case "optional":
                      q(o, F ? "proto3_optional" : "optional");
                      break;
                    case "message":
                      Z(o, e);
                      break;
                    case "enum":
                      Q(o, e);
                      break;
                    default:
                      throw W(e);
                  }
                });
                e.add(o).add(a);
              }(e, t);
            }
          }
          function Q(e, t) {
            if (!N.test(t = D())) {
              throw W(t, "name");
            }
            var n = new m(t);
            X(n, function (e) {
              switch (e) {
                case "option":
                  ee(n, e);
                  O(";");
                  break;
                case "reserved":
                  U(n.reserved || (n.reserved = []), true);
                  break;
                default:
                  !function (e, t) {
                    if (!N.test(t)) {
                      throw W(t, "name");
                    }
                    O("=");
                    var n = z(D(), true);
                    var i = {
                      options: undefined,
                      setOption: function (e, t) {
                        if (undefined === this.options) {
                          this.options = {};
                        }
                        this.options[e] = t;
                      }
                    };
                    X(i, function (e) {
                      if ("option" !== e) {
                        throw W(e);
                      }
                      ee(i, e);
                      O(";");
                    }, function () {
                      ie(i);
                    });
                    e.add(t, n, i.comment, i.options);
                  }(n, e);
              }
            });
            e.add(n);
          }
          function ee(e, t) {
            var n = O("(", true);
            if (!L.test(t = D())) {
              throw W(t, "name");
            }
            var i;
            var r = t;
            var o = r;
            if (n) {
              O(")");
              o = r = "(" + r + ")";
              t = G();
              if (w.test(t)) {
                i = t.slice(1);
                r += t;
                D();
              }
            }
            O("=");
            (function (e, t, n, i) {
              if (e.setParsedOption) {
                e.setParsedOption(t, n, i);
              }
            })(e, o, te(e, r), i);
          }
          function te(e, t) {
            if (O("{", true)) {
              for (var n = {}; !O("}", true);) {
                if (!N.test(C = D())) {
                  throw W(C, "name");
                }
                if (null === C) {
                  throw W(C, "end of input");
                }
                var i;
                var r = C;
                O(":", true);
                if ("{" === G()) {
                  i = te(e, t + "." + C);
                } else if ("[" === G()) {
                  var o;
                  i = [];
                  if (O("[", true)) {
                    do {
                      o = j(true);
                      i.push(o);
                    } while (O(",", true));
                    O("]");
                    if (undefined !== o) {
                      ne(e, t + "." + C, o);
                    }
                  }
                } else {
                  i = j(true);
                  ne(e, t + "." + C, i);
                }
                var a = n[r];
                if (a) {
                  i = [].concat(a).concat(i);
                }
                n[r] = i;
                O(",", true);
                O(";", true);
              }
              return n;
            }
            var s = j(true);
            ne(e, t, s);
            return s;
          }
          function ne(e, t, n) {
            if (e.setOption) {
              e.setOption(t, n);
            }
          }
          function ie(e) {
            if (O("[", true)) {
              do {
                ee(e, "option");
              } while (O(",", true));
              O("]");
            }
            return e;
          }
          for (; null !== (C = D());) {
            switch (C) {
              case "package":
                if (!M) {
                  throw W(C);
                }
                J();
                break;
              case "import":
                if (!M) {
                  throw W(C);
                }
                H();
                break;
              case "syntax":
                if (!M) {
                  throw W(C);
                }
                Y();
                break;
              case "option":
                ee(x, C);
                O(";");
                break;
              default:
                if (K(x, C)) {
                  M = false;
                  continue;
                }
                throw W(C);
            }
          }
          A.filename = null;
          return {
            package: i,
            imports: r,
            weakImports: T,
            syntax: P,
            root: t
          };
        }
        n.exports;
      }, function () {
        return {
          "./tokenize": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./root": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./type": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./oneof": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./enum": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./service": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./types": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (e, t, n, i, r) {
        n.exports = s;
        var o;
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
        s("timestamp", {
          Timestamp: o
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
      var _cjsExports;
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (e, t, n, i, r) {
        var o = n.exports = t("./index-light");
        o.build = "full";
        o.tokenize = t("./tokenize");
        o.parse = t("./parse");
        o.common = t("./common");
        o.Root._configure(o.Type, o.parse, o.common);
        n.exports;
      }, function () {
        return {
          "./index-light": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          "./tokenize": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./parse": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          "./common": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/index.js", function (e, t, n, i, r) {
        n.exports = t("./src/index");
        _cjsExports = n.exports;
      }, function () {
        return {
          "./src/index": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      loader.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/index.js");
      var _cjsExports$1;
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (e, t, n, i, r) {
        n.exports = t("./src/index-minimal");
        n.exports;
      }, function () {
        return {
          "./src/index-minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      loader.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@old-rd1/tripleluckylion-protocol/tllproto.js", function (e, t, n, i, r) {
        var o;
        var a = t("protobufjs/minimal");
        var s = a.Reader;
        var l = a.Writer;
        var c = a.util;
        var u = a.roots.default || (a.roots.default = {});
        (o = {
          CColumn: function () {
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
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.Col && e.Col.length) {
                for (var n = 0; n < e.Col.length; ++n) {
                  u.tllproto.CSymbol.encode(e.Col[n], t.uint32(10).fork()).ldelim();
                }
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tllproto.CColumn(); e.pos < n;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    if (!(i.Col && i.Col.length)) {
                      i.Col = [];
                    }
                    i.Col.push(u.tllproto.CSymbol.decode(e, e.uint32()));
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return i;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof s)) {
                e = new s(e);
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
                  var n = u.tllproto.CSymbol.verify(e.Col[t]);
                  if (n) {
                    return "Col." + n;
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tllproto.CColumn) {
                return e;
              }
              var t = new u.tllproto.CColumn();
              if (e.Col) {
                if (!Array.isArray(e.Col)) {
                  throw TypeError(".tllproto.CColumn.Col: array expected");
                }
                t.Col = [];
                for (var n = 0; n < e.Col.length; ++n) {
                  if ("object" != typeof e.Col[n]) {
                    throw TypeError(".tllproto.CColumn.Col: object expected");
                  }
                  t.Col[n] = u.tllproto.CSymbol.fromObject(e.Col[n]);
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var n = {};
              if (t.arrays || t.defaults) {
                n.Col = [];
              }
              if (e.Col && e.Col.length) {
                n.Col = [];
                for (var i = 0; i < e.Col.length; ++i) {
                  n.Col[i] = u.tllproto.CSymbol.toObject(e.Col[i], t);
                }
              }
              return n;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tllproto.CColumn";
            };
            return e;
          }(),
          CSymbolPlate: function () {
            function e(e) {
              this.CSP = [];
              if (e) {
                var t = Object.keys(e);
                for (var n = 0; n < t.length; ++n) {
                  if (null != e[t[n]]) {
                    this[t[n]] = e[t[n]];
                  }
                }
              }
            }
            e.prototype.CSP = c.emptyArray;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.CSP && e.CSP.length) {
                for (var n = 0; n < e.CSP.length; ++n) {
                  u.tllproto.CColumn.encode(e.CSP[n], t.uint32(10).fork()).ldelim();
                }
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tllproto.CSymbolPlate(); e.pos < n;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    if (!(i.CSP && i.CSP.length)) {
                      i.CSP = [];
                    }
                    i.CSP.push(u.tllproto.CColumn.decode(e, e.uint32()));
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return i;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof s)) {
                e = new s(e);
              }
              return this.decode(e, e.uint32());
            };
            e.verify = function (e) {
              if ("object" != typeof e || null === e) {
                return "object expected";
              }
              if (null != e.CSP && e.hasOwnProperty("CSP")) {
                if (!Array.isArray(e.CSP)) {
                  return "CSP: array expected";
                }
                for (var t = 0; t < e.CSP.length; ++t) {
                  var n = u.tllproto.CColumn.verify(e.CSP[t]);
                  if (n) {
                    return "CSP." + n;
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tllproto.CSymbolPlate) {
                return e;
              }
              var t = new u.tllproto.CSymbolPlate();
              if (e.CSP) {
                if (!Array.isArray(e.CSP)) {
                  throw TypeError(".tllproto.CSymbolPlate.CSP: array expected");
                }
                t.CSP = [];
                for (var n = 0; n < e.CSP.length; ++n) {
                  if ("object" != typeof e.CSP[n]) {
                    throw TypeError(".tllproto.CSymbolPlate.CSP: object expected");
                  }
                  t.CSP[n] = u.tllproto.CColumn.fromObject(e.CSP[n]);
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var n = {};
              if (t.arrays || t.defaults) {
                n.CSP = [];
              }
              if (e.CSP && e.CSP.length) {
                n.CSP = [];
                for (var i = 0; i < e.CSP.length; ++i) {
                  n.CSP[i] = u.tllproto.CColumn.toObject(e.CSP[i], t);
                }
              }
              return n;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tllproto.CSymbolPlate";
            };
            return e;
          }(),
          CSymbol: function () {
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
            e.prototype.JPState = 0;
            e.prototype.JPMult = 0;
            e.prototype.Number = 0;
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
              if (null != e.JPState && Object.hasOwnProperty.call(e, "JPState")) {
                t.uint32(16).int32(e.JPState);
              }
              if (null != e.JPMult && Object.hasOwnProperty.call(e, "JPMult")) {
                t.uint32(24).int32(e.JPMult);
              }
              if (null != e.Number && Object.hasOwnProperty.call(e, "Number")) {
                t.uint32(33).double(e.Number);
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tllproto.CSymbol(); e.pos < n;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    i.Symbol = e.int32();
                    break;
                  case 2:
                    i.JPState = e.int32();
                    break;
                  case 3:
                    i.JPMult = e.int32();
                    break;
                  case 4:
                    i.Number = e.double();
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return i;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof s)) {
                e = new s(e);
              }
              return this.decode(e, e.uint32());
            };
            e.verify = function (e) {
              return "object" != typeof e || null === e ? "object expected" : null != e.Symbol && e.hasOwnProperty("Symbol") && !c.isInteger(e.Symbol) ? "Symbol: integer expected" : null != e.JPState && e.hasOwnProperty("JPState") && !c.isInteger(e.JPState) ? "JPState: integer expected" : null != e.JPMult && e.hasOwnProperty("JPMult") && !c.isInteger(e.JPMult) ? "JPMult: integer expected" : null != e.Number && e.hasOwnProperty("Number") && "number" != typeof e.Number ? "Number: number expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tllproto.CSymbol) {
                return e;
              }
              var t = new u.tllproto.CSymbol();
              if (null != e.Symbol) {
                t.Symbol = 0 | e.Symbol;
              }
              if (null != e.JPState) {
                t.JPState = 0 | e.JPState;
              }
              if (null != e.JPMult) {
                t.JPMult = 0 | e.JPMult;
              }
              if (null != e.Number) {
                t.Number = Number(e.Number);
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var n = {};
              if (t.defaults) {
                n.Symbol = 0;
                n.JPState = 0;
                n.JPMult = 0;
                n.Number = 0;
              }
              if (null != e.Symbol && e.hasOwnProperty("Symbol")) {
                n.Symbol = e.Symbol;
              }
              if (null != e.JPState && e.hasOwnProperty("JPState")) {
                n.JPState = e.JPState;
              }
              if (null != e.JPMult && e.hasOwnProperty("JPMult")) {
                n.JPMult = e.JPMult;
              }
              if (null != e.Number && e.hasOwnProperty("Number")) {
                n.Number = t.json && !isFinite(e.Number) ? String(e.Number) : e.Number;
              }
              return n;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tllproto.CSymbol";
            };
            return e;
          }(),
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
            e.prototype.Line = 0;
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
              if (null != e.Win && Object.hasOwnProperty.call(e, "Win")) {
                t.uint32(33).double(e.Win);
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tllproto.AwardData(); e.pos < n;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    i.Symbol = e.int32();
                    break;
                  case 2:
                    i.Count = e.int32();
                    break;
                  case 3:
                    i.Line = e.int32();
                    break;
                  case 4:
                    i.Win = e.double();
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return i;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof s)) {
                e = new s(e);
              }
              return this.decode(e, e.uint32());
            };
            e.verify = function (e) {
              return "object" != typeof e || null === e ? "object expected" : null != e.Symbol && e.hasOwnProperty("Symbol") && !c.isInteger(e.Symbol) ? "Symbol: integer expected" : null != e.Count && e.hasOwnProperty("Count") && !c.isInteger(e.Count) ? "Count: integer expected" : null != e.Line && e.hasOwnProperty("Line") && !c.isInteger(e.Line) ? "Line: integer expected" : null != e.Win && e.hasOwnProperty("Win") && "number" != typeof e.Win ? "Win: number expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tllproto.AwardData) {
                return e;
              }
              var t = new u.tllproto.AwardData();
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
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var n = {};
              if (t.defaults) {
                n.Symbol = 0;
                n.Count = 0;
                n.Line = 0;
                n.Win = 0;
              }
              if (null != e.Symbol && e.hasOwnProperty("Symbol")) {
                n.Symbol = e.Symbol;
              }
              if (null != e.Count && e.hasOwnProperty("Count")) {
                n.Count = e.Count;
              }
              if (null != e.Line && e.hasOwnProperty("Line")) {
                n.Line = e.Line;
              }
              if (null != e.Win && e.hasOwnProperty("Win")) {
                n.Win = t.json && !isFinite(e.Win) ? String(e.Win) : e.Win;
              }
              return n;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tllproto.AwardData";
            };
            return e;
          }(),
          RoundInfo: function () {
            function e(e) {
              this.FreePlateSymbol = [];
              this.AwardDataVec = [];
              this.FreeRemainRound = [];
              this.AddCrack = [];
              this.FreeEndTag = [];
              this.RedFGRemainNums = [];
              if (e) {
                var t = Object.keys(e);
                for (var n = 0; n < t.length; ++n) {
                  if (null != e[t[n]]) {
                    this[t[n]] = e[t[n]];
                  }
                }
              }
            }
            e.prototype.MainPlateSymbol = null;
            e.prototype.FreePlateSymbol = c.emptyArray;
            e.prototype.AwardDataVec = c.emptyArray;
            e.prototype.AwardTypeFlag = 0;
            e.prototype.RoundWin = 0;
            e.prototype.FreeRemainRound = c.emptyArray;
            e.prototype.FreeNowRound = 0;
            e.prototype.MGReelWeightResult = 0;
            e.prototype.AddCrack = c.emptyArray;
            e.prototype.MaxFlag = false;
            e.prototype.FreeEndTag = c.emptyArray;
            e.prototype.RedFGRemainNums = c.emptyArray;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.MainPlateSymbol && Object.hasOwnProperty.call(e, "MainPlateSymbol")) {
                u.tllproto.CSymbolPlate.encode(e.MainPlateSymbol, t.uint32(10).fork()).ldelim();
              }
              if (null != e.FreePlateSymbol && e.FreePlateSymbol.length) {
                for (var n = 0; n < e.FreePlateSymbol.length; ++n) {
                  u.tllproto.CSymbolPlate.encode(e.FreePlateSymbol[n], t.uint32(18).fork()).ldelim();
                }
              }
              if (null != e.AwardDataVec && e.AwardDataVec.length) {
                for (n = 0; n < e.AwardDataVec.length; ++n) {
                  u.tllproto.AwardData.encode(e.AwardDataVec[n], t.uint32(26).fork()).ldelim();
                }
              }
              if (null != e.AwardTypeFlag && Object.hasOwnProperty.call(e, "AwardTypeFlag")) {
                t.uint32(32).int32(e.AwardTypeFlag);
              }
              if (null != e.RoundWin && Object.hasOwnProperty.call(e, "RoundWin")) {
                t.uint32(41).double(e.RoundWin);
              }
              if (null != e.FreeRemainRound && e.FreeRemainRound.length) {
                t.uint32(50).fork();
                for (n = 0; n < e.FreeRemainRound.length; ++n) {
                  t.int32(e.FreeRemainRound[n]);
                }
                t.ldelim();
              }
              if (null != e.FreeNowRound && Object.hasOwnProperty.call(e, "FreeNowRound")) {
                t.uint32(56).int32(e.FreeNowRound);
              }
              if (null != e.MGReelWeightResult && Object.hasOwnProperty.call(e, "MGReelWeightResult")) {
                t.uint32(64).int32(e.MGReelWeightResult);
              }
              if (null != e.AddCrack && e.AddCrack.length) {
                t.uint32(74).fork();
                for (n = 0; n < e.AddCrack.length; ++n) {
                  t.bool(e.AddCrack[n]);
                }
                t.ldelim();
              }
              if (null != e.MaxFlag && Object.hasOwnProperty.call(e, "MaxFlag")) {
                t.uint32(80).bool(e.MaxFlag);
              }
              if (null != e.FreeEndTag && e.FreeEndTag.length) {
                t.uint32(90).fork();
                for (n = 0; n < e.FreeEndTag.length; ++n) {
                  t.bool(e.FreeEndTag[n]);
                }
                t.ldelim();
              }
              if (null != e.RedFGRemainNums && e.RedFGRemainNums.length) {
                t.uint32(98).fork();
                for (n = 0; n < e.RedFGRemainNums.length; ++n) {
                  t.int32(e.RedFGRemainNums[n]);
                }
                t.ldelim();
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tllproto.RoundInfo(); e.pos < n;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    i.MainPlateSymbol = u.tllproto.CSymbolPlate.decode(e, e.uint32());
                    break;
                  case 2:
                    if (!(i.FreePlateSymbol && i.FreePlateSymbol.length)) {
                      i.FreePlateSymbol = [];
                    }
                    i.FreePlateSymbol.push(u.tllproto.CSymbolPlate.decode(e, e.uint32()));
                    break;
                  case 3:
                    if (!(i.AwardDataVec && i.AwardDataVec.length)) {
                      i.AwardDataVec = [];
                    }
                    i.AwardDataVec.push(u.tllproto.AwardData.decode(e, e.uint32()));
                    break;
                  case 4:
                    i.AwardTypeFlag = e.int32();
                    break;
                  case 5:
                    i.RoundWin = e.double();
                    break;
                  case 6:
                    if (!(i.FreeRemainRound && i.FreeRemainRound.length)) {
                      i.FreeRemainRound = [];
                    }
                    if (2 == (7 & r)) {
                      for (var o = e.uint32() + e.pos; e.pos < o;) {
                        i.FreeRemainRound.push(e.int32());
                      }
                    } else {
                      i.FreeRemainRound.push(e.int32());
                    }
                    break;
                  case 7:
                    i.FreeNowRound = e.int32();
                    break;
                  case 8:
                    i.MGReelWeightResult = e.int32();
                    break;
                  case 9:
                    if (!(i.AddCrack && i.AddCrack.length)) {
                      i.AddCrack = [];
                    }
                    if (2 == (7 & r)) {
                      for (o = e.uint32() + e.pos; e.pos < o;) {
                        i.AddCrack.push(e.bool());
                      }
                    } else {
                      i.AddCrack.push(e.bool());
                    }
                    break;
                  case 10:
                    i.MaxFlag = e.bool();
                    break;
                  case 11:
                    if (!(i.FreeEndTag && i.FreeEndTag.length)) {
                      i.FreeEndTag = [];
                    }
                    if (2 == (7 & r)) {
                      for (o = e.uint32() + e.pos; e.pos < o;) {
                        i.FreeEndTag.push(e.bool());
                      }
                    } else {
                      i.FreeEndTag.push(e.bool());
                    }
                    break;
                  case 12:
                    if (!(i.RedFGRemainNums && i.RedFGRemainNums.length)) {
                      i.RedFGRemainNums = [];
                    }
                    if (2 == (7 & r)) {
                      for (o = e.uint32() + e.pos; e.pos < o;) {
                        i.RedFGRemainNums.push(e.int32());
                      }
                    } else {
                      i.RedFGRemainNums.push(e.int32());
                    }
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return i;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof s)) {
                e = new s(e);
              }
              return this.decode(e, e.uint32());
            };
            e.verify = function (e) {
              if ("object" != typeof e || null === e) {
                return "object expected";
              }
              if (null != e.MainPlateSymbol && e.hasOwnProperty("MainPlateSymbol") && (n = u.tllproto.CSymbolPlate.verify(e.MainPlateSymbol))) {
                return "MainPlateSymbol." + n;
              }
              if (null != e.FreePlateSymbol && e.hasOwnProperty("FreePlateSymbol")) {
                if (!Array.isArray(e.FreePlateSymbol)) {
                  return "FreePlateSymbol: array expected";
                }
                for (var t = 0; t < e.FreePlateSymbol.length; ++t) {
                  if (n = u.tllproto.CSymbolPlate.verify(e.FreePlateSymbol[t])) {
                    return "FreePlateSymbol." + n;
                  }
                }
              }
              if (null != e.AwardDataVec && e.hasOwnProperty("AwardDataVec")) {
                if (!Array.isArray(e.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (t = 0; t < e.AwardDataVec.length; ++t) {
                  var n;
                  if (n = u.tllproto.AwardData.verify(e.AwardDataVec[t])) {
                    return "AwardDataVec." + n;
                  }
                }
              }
              if (null != e.AwardTypeFlag && e.hasOwnProperty("AwardTypeFlag") && !c.isInteger(e.AwardTypeFlag)) {
                return "AwardTypeFlag: integer expected";
              }
              if (null != e.RoundWin && e.hasOwnProperty("RoundWin") && "number" != typeof e.RoundWin) {
                return "RoundWin: number expected";
              }
              if (null != e.FreeRemainRound && e.hasOwnProperty("FreeRemainRound")) {
                if (!Array.isArray(e.FreeRemainRound)) {
                  return "FreeRemainRound: array expected";
                }
                for (t = 0; t < e.FreeRemainRound.length; ++t) {
                  if (!c.isInteger(e.FreeRemainRound[t])) {
                    return "FreeRemainRound: integer[] expected";
                  }
                }
              }
              if (null != e.FreeNowRound && e.hasOwnProperty("FreeNowRound") && !c.isInteger(e.FreeNowRound)) {
                return "FreeNowRound: integer expected";
              }
              if (null != e.MGReelWeightResult && e.hasOwnProperty("MGReelWeightResult") && !c.isInteger(e.MGReelWeightResult)) {
                return "MGReelWeightResult: integer expected";
              }
              if (null != e.AddCrack && e.hasOwnProperty("AddCrack")) {
                if (!Array.isArray(e.AddCrack)) {
                  return "AddCrack: array expected";
                }
                for (t = 0; t < e.AddCrack.length; ++t) {
                  if ("boolean" != typeof e.AddCrack[t]) {
                    return "AddCrack: boolean[] expected";
                  }
                }
              }
              if (null != e.MaxFlag && e.hasOwnProperty("MaxFlag") && "boolean" != typeof e.MaxFlag) {
                return "MaxFlag: boolean expected";
              }
              if (null != e.FreeEndTag && e.hasOwnProperty("FreeEndTag")) {
                if (!Array.isArray(e.FreeEndTag)) {
                  return "FreeEndTag: array expected";
                }
                for (t = 0; t < e.FreeEndTag.length; ++t) {
                  if ("boolean" != typeof e.FreeEndTag[t]) {
                    return "FreeEndTag: boolean[] expected";
                  }
                }
              }
              if (null != e.RedFGRemainNums && e.hasOwnProperty("RedFGRemainNums")) {
                if (!Array.isArray(e.RedFGRemainNums)) {
                  return "RedFGRemainNums: array expected";
                }
                for (t = 0; t < e.RedFGRemainNums.length; ++t) {
                  if (!c.isInteger(e.RedFGRemainNums[t])) {
                    return "RedFGRemainNums: integer[] expected";
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tllproto.RoundInfo) {
                return e;
              }
              var t = new u.tllproto.RoundInfo();
              if (null != e.MainPlateSymbol) {
                if ("object" != typeof e.MainPlateSymbol) {
                  throw TypeError(".tllproto.RoundInfo.MainPlateSymbol: object expected");
                }
                t.MainPlateSymbol = u.tllproto.CSymbolPlate.fromObject(e.MainPlateSymbol);
              }
              if (e.FreePlateSymbol) {
                if (!Array.isArray(e.FreePlateSymbol)) {
                  throw TypeError(".tllproto.RoundInfo.FreePlateSymbol: array expected");
                }
                t.FreePlateSymbol = [];
                for (var n = 0; n < e.FreePlateSymbol.length; ++n) {
                  if ("object" != typeof e.FreePlateSymbol[n]) {
                    throw TypeError(".tllproto.RoundInfo.FreePlateSymbol: object expected");
                  }
                  t.FreePlateSymbol[n] = u.tllproto.CSymbolPlate.fromObject(e.FreePlateSymbol[n]);
                }
              }
              if (e.AwardDataVec) {
                if (!Array.isArray(e.AwardDataVec)) {
                  throw TypeError(".tllproto.RoundInfo.AwardDataVec: array expected");
                }
                t.AwardDataVec = [];
                for (n = 0; n < e.AwardDataVec.length; ++n) {
                  if ("object" != typeof e.AwardDataVec[n]) {
                    throw TypeError(".tllproto.RoundInfo.AwardDataVec: object expected");
                  }
                  t.AwardDataVec[n] = u.tllproto.AwardData.fromObject(e.AwardDataVec[n]);
                }
              }
              if (null != e.AwardTypeFlag) {
                t.AwardTypeFlag = 0 | e.AwardTypeFlag;
              }
              if (null != e.RoundWin) {
                t.RoundWin = Number(e.RoundWin);
              }
              if (e.FreeRemainRound) {
                if (!Array.isArray(e.FreeRemainRound)) {
                  throw TypeError(".tllproto.RoundInfo.FreeRemainRound: array expected");
                }
                t.FreeRemainRound = [];
                for (n = 0; n < e.FreeRemainRound.length; ++n) {
                  t.FreeRemainRound[n] = 0 | e.FreeRemainRound[n];
                }
              }
              if (null != e.FreeNowRound) {
                t.FreeNowRound = 0 | e.FreeNowRound;
              }
              if (null != e.MGReelWeightResult) {
                t.MGReelWeightResult = 0 | e.MGReelWeightResult;
              }
              if (e.AddCrack) {
                if (!Array.isArray(e.AddCrack)) {
                  throw TypeError(".tllproto.RoundInfo.AddCrack: array expected");
                }
                t.AddCrack = [];
                for (n = 0; n < e.AddCrack.length; ++n) {
                  t.AddCrack[n] = Boolean(e.AddCrack[n]);
                }
              }
              if (null != e.MaxFlag) {
                t.MaxFlag = Boolean(e.MaxFlag);
              }
              if (e.FreeEndTag) {
                if (!Array.isArray(e.FreeEndTag)) {
                  throw TypeError(".tllproto.RoundInfo.FreeEndTag: array expected");
                }
                t.FreeEndTag = [];
                for (n = 0; n < e.FreeEndTag.length; ++n) {
                  t.FreeEndTag[n] = Boolean(e.FreeEndTag[n]);
                }
              }
              if (e.RedFGRemainNums) {
                if (!Array.isArray(e.RedFGRemainNums)) {
                  throw TypeError(".tllproto.RoundInfo.RedFGRemainNums: array expected");
                }
                t.RedFGRemainNums = [];
                for (n = 0; n < e.RedFGRemainNums.length; ++n) {
                  t.RedFGRemainNums[n] = 0 | e.RedFGRemainNums[n];
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var n = {};
              if (t.arrays || t.defaults) {
                n.FreePlateSymbol = [];
                n.AwardDataVec = [];
                n.FreeRemainRound = [];
                n.AddCrack = [];
                n.FreeEndTag = [];
                n.RedFGRemainNums = [];
              }
              if (t.defaults) {
                n.MainPlateSymbol = null;
                n.AwardTypeFlag = 0;
                n.RoundWin = 0;
                n.FreeNowRound = 0;
                n.MGReelWeightResult = 0;
                n.MaxFlag = false;
              }
              if (null != e.MainPlateSymbol && e.hasOwnProperty("MainPlateSymbol")) {
                n.MainPlateSymbol = u.tllproto.CSymbolPlate.toObject(e.MainPlateSymbol, t);
              }
              if (e.FreePlateSymbol && e.FreePlateSymbol.length) {
                n.FreePlateSymbol = [];
                for (var i = 0; i < e.FreePlateSymbol.length; ++i) {
                  n.FreePlateSymbol[i] = u.tllproto.CSymbolPlate.toObject(e.FreePlateSymbol[i], t);
                }
              }
              if (e.AwardDataVec && e.AwardDataVec.length) {
                n.AwardDataVec = [];
                for (i = 0; i < e.AwardDataVec.length; ++i) {
                  n.AwardDataVec[i] = u.tllproto.AwardData.toObject(e.AwardDataVec[i], t);
                }
              }
              if (null != e.AwardTypeFlag && e.hasOwnProperty("AwardTypeFlag")) {
                n.AwardTypeFlag = e.AwardTypeFlag;
              }
              if (null != e.RoundWin && e.hasOwnProperty("RoundWin")) {
                n.RoundWin = t.json && !isFinite(e.RoundWin) ? String(e.RoundWin) : e.RoundWin;
              }
              if (e.FreeRemainRound && e.FreeRemainRound.length) {
                n.FreeRemainRound = [];
                for (i = 0; i < e.FreeRemainRound.length; ++i) {
                  n.FreeRemainRound[i] = e.FreeRemainRound[i];
                }
              }
              if (null != e.FreeNowRound && e.hasOwnProperty("FreeNowRound")) {
                n.FreeNowRound = e.FreeNowRound;
              }
              if (null != e.MGReelWeightResult && e.hasOwnProperty("MGReelWeightResult")) {
                n.MGReelWeightResult = e.MGReelWeightResult;
              }
              if (e.AddCrack && e.AddCrack.length) {
                n.AddCrack = [];
                for (i = 0; i < e.AddCrack.length; ++i) {
                  n.AddCrack[i] = e.AddCrack[i];
                }
              }
              if (null != e.MaxFlag && e.hasOwnProperty("MaxFlag")) {
                n.MaxFlag = e.MaxFlag;
              }
              if (e.FreeEndTag && e.FreeEndTag.length) {
                n.FreeEndTag = [];
                for (i = 0; i < e.FreeEndTag.length; ++i) {
                  n.FreeEndTag[i] = e.FreeEndTag[i];
                }
              }
              if (e.RedFGRemainNums && e.RedFGRemainNums.length) {
                n.RedFGRemainNums = [];
                for (i = 0; i < e.RedFGRemainNums.length; ++i) {
                  n.RedFGRemainNums[i] = e.RedFGRemainNums[i];
                }
              }
              return n;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tllproto.RoundInfo";
            };
            return e;
          }(),
          SpinAck: function () {
            function e(e) {
              this.RoundQueue = [];
              this.FreeRedData = [];
              this.CrackLevels = [];
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
            e.prototype.ShowIndex = "";
            e.prototype.NowMoney = 0;
            e.prototype.AckType = 0;
            e.prototype.RTP = 0;
            e.prototype.Bet = 0;
            e.prototype.FreeRedData = c.emptyArray;
            e.prototype.CrackLevels = c.emptyArray;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.RoundQueue && e.RoundQueue.length) {
                for (var n = 0; n < e.RoundQueue.length; ++n) {
                  u.tllproto.RoundInfo.encode(e.RoundQueue[n], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.FreeTotalWin && Object.hasOwnProperty.call(e, "FreeTotalWin")) {
                t.uint32(17).double(e.FreeTotalWin);
              }
              if (null != e.TotalWin && Object.hasOwnProperty.call(e, "TotalWin")) {
                t.uint32(25).double(e.TotalWin);
              }
              if (null != e.ShowIndex && Object.hasOwnProperty.call(e, "ShowIndex")) {
                t.uint32(34).string(e.ShowIndex);
              }
              if (null != e.NowMoney && Object.hasOwnProperty.call(e, "NowMoney")) {
                t.uint32(41).double(e.NowMoney);
              }
              if (null != e.AckType && Object.hasOwnProperty.call(e, "AckType")) {
                t.uint32(48).int32(e.AckType);
              }
              if (null != e.RTP && Object.hasOwnProperty.call(e, "RTP")) {
                t.uint32(57).double(e.RTP);
              }
              if (null != e.Bet && Object.hasOwnProperty.call(e, "Bet")) {
                t.uint32(65).double(e.Bet);
              }
              if (null != e.FreeRedData && e.FreeRedData.length) {
                for (n = 0; n < e.FreeRedData.length; ++n) {
                  u.tllproto.FGRedAreaInfo.encode(e.FreeRedData[n], t.uint32(74).fork()).ldelim();
                }
              }
              if (null != e.CrackLevels && e.CrackLevels.length) {
                t.uint32(82).fork();
                for (n = 0; n < e.CrackLevels.length; ++n) {
                  t.int32(e.CrackLevels[n]);
                }
                t.ldelim();
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tllproto.SpinAck(); e.pos < n;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    if (!(i.RoundQueue && i.RoundQueue.length)) {
                      i.RoundQueue = [];
                    }
                    i.RoundQueue.push(u.tllproto.RoundInfo.decode(e, e.uint32()));
                    break;
                  case 2:
                    i.FreeTotalWin = e.double();
                    break;
                  case 3:
                    i.TotalWin = e.double();
                    break;
                  case 4:
                    i.ShowIndex = e.string();
                    break;
                  case 5:
                    i.NowMoney = e.double();
                    break;
                  case 6:
                    i.AckType = e.int32();
                    break;
                  case 7:
                    i.RTP = e.double();
                    break;
                  case 8:
                    i.Bet = e.double();
                    break;
                  case 9:
                    if (!(i.FreeRedData && i.FreeRedData.length)) {
                      i.FreeRedData = [];
                    }
                    i.FreeRedData.push(u.tllproto.FGRedAreaInfo.decode(e, e.uint32()));
                    break;
                  case 10:
                    if (!(i.CrackLevels && i.CrackLevels.length)) {
                      i.CrackLevels = [];
                    }
                    if (2 == (7 & r)) {
                      for (var o = e.uint32() + e.pos; e.pos < o;) {
                        i.CrackLevels.push(e.int32());
                      }
                    } else {
                      i.CrackLevels.push(e.int32());
                    }
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return i;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof s)) {
                e = new s(e);
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
                  if (n = u.tllproto.RoundInfo.verify(e.RoundQueue[t])) {
                    return "RoundQueue." + n;
                  }
                }
              }
              if (null != e.FreeTotalWin && e.hasOwnProperty("FreeTotalWin") && "number" != typeof e.FreeTotalWin) {
                return "FreeTotalWin: number expected";
              }
              if (null != e.TotalWin && e.hasOwnProperty("TotalWin") && "number" != typeof e.TotalWin) {
                return "TotalWin: number expected";
              }
              if (null != e.ShowIndex && e.hasOwnProperty("ShowIndex") && !c.isString(e.ShowIndex)) {
                return "ShowIndex: string expected";
              }
              if (null != e.NowMoney && e.hasOwnProperty("NowMoney") && "number" != typeof e.NowMoney) {
                return "NowMoney: number expected";
              }
              if (null != e.AckType && e.hasOwnProperty("AckType") && !c.isInteger(e.AckType)) {
                return "AckType: integer expected";
              }
              if (null != e.RTP && e.hasOwnProperty("RTP") && "number" != typeof e.RTP) {
                return "RTP: number expected";
              }
              if (null != e.Bet && e.hasOwnProperty("Bet") && "number" != typeof e.Bet) {
                return "Bet: number expected";
              }
              if (null != e.FreeRedData && e.hasOwnProperty("FreeRedData")) {
                if (!Array.isArray(e.FreeRedData)) {
                  return "FreeRedData: array expected";
                }
                for (t = 0; t < e.FreeRedData.length; ++t) {
                  var n;
                  if (n = u.tllproto.FGRedAreaInfo.verify(e.FreeRedData[t])) {
                    return "FreeRedData." + n;
                  }
                }
              }
              if (null != e.CrackLevels && e.hasOwnProperty("CrackLevels")) {
                if (!Array.isArray(e.CrackLevels)) {
                  return "CrackLevels: array expected";
                }
                for (t = 0; t < e.CrackLevels.length; ++t) {
                  if (!c.isInteger(e.CrackLevels[t])) {
                    return "CrackLevels: integer[] expected";
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tllproto.SpinAck) {
                return e;
              }
              var t = new u.tllproto.SpinAck();
              if (e.RoundQueue) {
                if (!Array.isArray(e.RoundQueue)) {
                  throw TypeError(".tllproto.SpinAck.RoundQueue: array expected");
                }
                t.RoundQueue = [];
                for (var n = 0; n < e.RoundQueue.length; ++n) {
                  if ("object" != typeof e.RoundQueue[n]) {
                    throw TypeError(".tllproto.SpinAck.RoundQueue: object expected");
                  }
                  t.RoundQueue[n] = u.tllproto.RoundInfo.fromObject(e.RoundQueue[n]);
                }
              }
              if (null != e.FreeTotalWin) {
                t.FreeTotalWin = Number(e.FreeTotalWin);
              }
              if (null != e.TotalWin) {
                t.TotalWin = Number(e.TotalWin);
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
              if (e.FreeRedData) {
                if (!Array.isArray(e.FreeRedData)) {
                  throw TypeError(".tllproto.SpinAck.FreeRedData: array expected");
                }
                t.FreeRedData = [];
                for (n = 0; n < e.FreeRedData.length; ++n) {
                  if ("object" != typeof e.FreeRedData[n]) {
                    throw TypeError(".tllproto.SpinAck.FreeRedData: object expected");
                  }
                  t.FreeRedData[n] = u.tllproto.FGRedAreaInfo.fromObject(e.FreeRedData[n]);
                }
              }
              if (e.CrackLevels) {
                if (!Array.isArray(e.CrackLevels)) {
                  throw TypeError(".tllproto.SpinAck.CrackLevels: array expected");
                }
                t.CrackLevels = [];
                for (n = 0; n < e.CrackLevels.length; ++n) {
                  t.CrackLevels[n] = 0 | e.CrackLevels[n];
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var n = {};
              if (t.arrays || t.defaults) {
                n.RoundQueue = [];
                n.FreeRedData = [];
                n.CrackLevels = [];
              }
              if (t.defaults) {
                n.FreeTotalWin = 0;
                n.TotalWin = 0;
                n.ShowIndex = "";
                n.NowMoney = 0;
                n.AckType = 0;
                n.RTP = 0;
                n.Bet = 0;
              }
              if (e.RoundQueue && e.RoundQueue.length) {
                n.RoundQueue = [];
                for (var i = 0; i < e.RoundQueue.length; ++i) {
                  n.RoundQueue[i] = u.tllproto.RoundInfo.toObject(e.RoundQueue[i], t);
                }
              }
              if (null != e.FreeTotalWin && e.hasOwnProperty("FreeTotalWin")) {
                n.FreeTotalWin = t.json && !isFinite(e.FreeTotalWin) ? String(e.FreeTotalWin) : e.FreeTotalWin;
              }
              if (null != e.TotalWin && e.hasOwnProperty("TotalWin")) {
                n.TotalWin = t.json && !isFinite(e.TotalWin) ? String(e.TotalWin) : e.TotalWin;
              }
              if (null != e.ShowIndex && e.hasOwnProperty("ShowIndex")) {
                n.ShowIndex = e.ShowIndex;
              }
              if (null != e.NowMoney && e.hasOwnProperty("NowMoney")) {
                n.NowMoney = t.json && !isFinite(e.NowMoney) ? String(e.NowMoney) : e.NowMoney;
              }
              if (null != e.AckType && e.hasOwnProperty("AckType")) {
                n.AckType = e.AckType;
              }
              if (null != e.RTP && e.hasOwnProperty("RTP")) {
                n.RTP = t.json && !isFinite(e.RTP) ? String(e.RTP) : e.RTP;
              }
              if (null != e.Bet && e.hasOwnProperty("Bet")) {
                n.Bet = t.json && !isFinite(e.Bet) ? String(e.Bet) : e.Bet;
              }
              if (e.FreeRedData && e.FreeRedData.length) {
                n.FreeRedData = [];
                for (i = 0; i < e.FreeRedData.length; ++i) {
                  n.FreeRedData[i] = u.tllproto.FGRedAreaInfo.toObject(e.FreeRedData[i], t);
                }
              }
              if (e.CrackLevels && e.CrackLevels.length) {
                n.CrackLevels = [];
                for (i = 0; i < e.CrackLevels.length; ++i) {
                  n.CrackLevels[i] = e.CrackLevels[i];
                }
              }
              return n;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tllproto.SpinAck";
            };
            return e;
          }(),
          StateInfo: function () {
            function e(e) {
              this.CrackLevels = [];
              if (e) {
                var t = Object.keys(e);
                for (var n = 0; n < t.length; ++n) {
                  if (null != e[t[n]]) {
                    this[t[n]] = e[t[n]];
                  }
                }
              }
            }
            e.prototype.CrackLevels = c.emptyArray;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.CrackLevels && e.CrackLevels.length) {
                t.uint32(10).fork();
                for (var n = 0; n < e.CrackLevels.length; ++n) {
                  t.int32(e.CrackLevels[n]);
                }
                t.ldelim();
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tllproto.StateInfo(); e.pos < n;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    if (!(i.CrackLevels && i.CrackLevels.length)) {
                      i.CrackLevels = [];
                    }
                    if (2 == (7 & r)) {
                      for (var o = e.uint32() + e.pos; e.pos < o;) {
                        i.CrackLevels.push(e.int32());
                      }
                    } else {
                      i.CrackLevels.push(e.int32());
                    }
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return i;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof s)) {
                e = new s(e);
              }
              return this.decode(e, e.uint32());
            };
            e.verify = function (e) {
              if ("object" != typeof e || null === e) {
                return "object expected";
              }
              if (null != e.CrackLevels && e.hasOwnProperty("CrackLevels")) {
                if (!Array.isArray(e.CrackLevels)) {
                  return "CrackLevels: array expected";
                }
                for (var t = 0; t < e.CrackLevels.length; ++t) {
                  if (!c.isInteger(e.CrackLevels[t])) {
                    return "CrackLevels: integer[] expected";
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tllproto.StateInfo) {
                return e;
              }
              var t = new u.tllproto.StateInfo();
              if (e.CrackLevels) {
                if (!Array.isArray(e.CrackLevels)) {
                  throw TypeError(".tllproto.StateInfo.CrackLevels: array expected");
                }
                t.CrackLevels = [];
                for (var n = 0; n < e.CrackLevels.length; ++n) {
                  t.CrackLevels[n] = 0 | e.CrackLevels[n];
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var n = {};
              if (t.arrays || t.defaults) {
                n.CrackLevels = [];
              }
              if (e.CrackLevels && e.CrackLevels.length) {
                n.CrackLevels = [];
                for (var i = 0; i < e.CrackLevels.length; ++i) {
                  n.CrackLevels[i] = e.CrackLevels[i];
                }
              }
              return n;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tllproto.StateInfo";
            };
            return e;
          }(),
          FGRedAreaInfo: function () {
            function e(e) {
              this.FgMultiplyDataVec = [];
              this.AreaTypePlate = [];
              if (e) {
                var t = Object.keys(e);
                for (var n = 0; n < t.length; ++n) {
                  if (null != e[t[n]]) {
                    this[t[n]] = e[t[n]];
                  }
                }
              }
            }
            e.prototype.FgMultiplyDataVec = c.emptyArray;
            e.prototype.AreaTypePlate = c.emptyArray;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.FgMultiplyDataVec && e.FgMultiplyDataVec.length) {
                for (var n = 0; n < e.FgMultiplyDataVec.length; ++n) {
                  u.tllproto.FGRedAreaData.encode(e.FgMultiplyDataVec[n], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.AreaTypePlate && e.AreaTypePlate.length) {
                for (n = 0; n < e.AreaTypePlate.length; ++n) {
                  u.tllproto.Column.encode(e.AreaTypePlate[n], t.uint32(18).fork()).ldelim();
                }
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tllproto.FGRedAreaInfo(); e.pos < n;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    if (!(i.FgMultiplyDataVec && i.FgMultiplyDataVec.length)) {
                      i.FgMultiplyDataVec = [];
                    }
                    i.FgMultiplyDataVec.push(u.tllproto.FGRedAreaData.decode(e, e.uint32()));
                    break;
                  case 2:
                    if (!(i.AreaTypePlate && i.AreaTypePlate.length)) {
                      i.AreaTypePlate = [];
                    }
                    i.AreaTypePlate.push(u.tllproto.Column.decode(e, e.uint32()));
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return i;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof s)) {
                e = new s(e);
              }
              return this.decode(e, e.uint32());
            };
            e.verify = function (e) {
              if ("object" != typeof e || null === e) {
                return "object expected";
              }
              if (null != e.FgMultiplyDataVec && e.hasOwnProperty("FgMultiplyDataVec")) {
                if (!Array.isArray(e.FgMultiplyDataVec)) {
                  return "FgMultiplyDataVec: array expected";
                }
                for (var t = 0; t < e.FgMultiplyDataVec.length; ++t) {
                  if (n = u.tllproto.FGRedAreaData.verify(e.FgMultiplyDataVec[t])) {
                    return "FgMultiplyDataVec." + n;
                  }
                }
              }
              if (null != e.AreaTypePlate && e.hasOwnProperty("AreaTypePlate")) {
                if (!Array.isArray(e.AreaTypePlate)) {
                  return "AreaTypePlate: array expected";
                }
                for (t = 0; t < e.AreaTypePlate.length; ++t) {
                  var n;
                  if (n = u.tllproto.Column.verify(e.AreaTypePlate[t])) {
                    return "AreaTypePlate." + n;
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tllproto.FGRedAreaInfo) {
                return e;
              }
              var t = new u.tllproto.FGRedAreaInfo();
              if (e.FgMultiplyDataVec) {
                if (!Array.isArray(e.FgMultiplyDataVec)) {
                  throw TypeError(".tllproto.FGRedAreaInfo.FgMultiplyDataVec: array expected");
                }
                t.FgMultiplyDataVec = [];
                for (var n = 0; n < e.FgMultiplyDataVec.length; ++n) {
                  if ("object" != typeof e.FgMultiplyDataVec[n]) {
                    throw TypeError(".tllproto.FGRedAreaInfo.FgMultiplyDataVec: object expected");
                  }
                  t.FgMultiplyDataVec[n] = u.tllproto.FGRedAreaData.fromObject(e.FgMultiplyDataVec[n]);
                }
              }
              if (e.AreaTypePlate) {
                if (!Array.isArray(e.AreaTypePlate)) {
                  throw TypeError(".tllproto.FGRedAreaInfo.AreaTypePlate: array expected");
                }
                t.AreaTypePlate = [];
                for (n = 0; n < e.AreaTypePlate.length; ++n) {
                  if ("object" != typeof e.AreaTypePlate[n]) {
                    throw TypeError(".tllproto.FGRedAreaInfo.AreaTypePlate: object expected");
                  }
                  t.AreaTypePlate[n] = u.tllproto.Column.fromObject(e.AreaTypePlate[n]);
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var n = {};
              if (t.arrays || t.defaults) {
                n.FgMultiplyDataVec = [];
                n.AreaTypePlate = [];
              }
              if (e.FgMultiplyDataVec && e.FgMultiplyDataVec.length) {
                n.FgMultiplyDataVec = [];
                for (var i = 0; i < e.FgMultiplyDataVec.length; ++i) {
                  n.FgMultiplyDataVec[i] = u.tllproto.FGRedAreaData.toObject(e.FgMultiplyDataVec[i], t);
                }
              }
              if (e.AreaTypePlate && e.AreaTypePlate.length) {
                n.AreaTypePlate = [];
                for (i = 0; i < e.AreaTypePlate.length; ++i) {
                  n.AreaTypePlate[i] = u.tllproto.Column.toObject(e.AreaTypePlate[i], t);
                }
              }
              return n;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tllproto.FGRedAreaInfo";
            };
            return e;
          }(),
          FGRedAreaData: function () {
            function e(e) {
              this.PosVec = [];
              if (e) {
                var t = Object.keys(e);
                for (var n = 0; n < t.length; ++n) {
                  if (null != e[t[n]]) {
                    this[t[n]] = e[t[n]];
                  }
                }
              }
            }
            e.prototype.PosVec = c.emptyArray;
            e.prototype.AreaType = 0;
            e.prototype.Multiplier = 0;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.PosVec && e.PosVec.length) {
                t.uint32(10).fork();
                for (var n = 0; n < e.PosVec.length; ++n) {
                  t.int32(e.PosVec[n]);
                }
                t.ldelim();
              }
              if (null != e.AreaType && Object.hasOwnProperty.call(e, "AreaType")) {
                t.uint32(16).int32(e.AreaType);
              }
              if (null != e.Multiplier && Object.hasOwnProperty.call(e, "Multiplier")) {
                t.uint32(24).int32(e.Multiplier);
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tllproto.FGRedAreaData(); e.pos < n;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    if (!(i.PosVec && i.PosVec.length)) {
                      i.PosVec = [];
                    }
                    if (2 == (7 & r)) {
                      for (var o = e.uint32() + e.pos; e.pos < o;) {
                        i.PosVec.push(e.int32());
                      }
                    } else {
                      i.PosVec.push(e.int32());
                    }
                    break;
                  case 2:
                    i.AreaType = e.int32();
                    break;
                  case 3:
                    i.Multiplier = e.int32();
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return i;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof s)) {
                e = new s(e);
              }
              return this.decode(e, e.uint32());
            };
            e.verify = function (e) {
              if ("object" != typeof e || null === e) {
                return "object expected";
              }
              if (null != e.PosVec && e.hasOwnProperty("PosVec")) {
                if (!Array.isArray(e.PosVec)) {
                  return "PosVec: array expected";
                }
                for (var t = 0; t < e.PosVec.length; ++t) {
                  if (!c.isInteger(e.PosVec[t])) {
                    return "PosVec: integer[] expected";
                  }
                }
              }
              return null != e.AreaType && e.hasOwnProperty("AreaType") && !c.isInteger(e.AreaType) ? "AreaType: integer expected" : null != e.Multiplier && e.hasOwnProperty("Multiplier") && !c.isInteger(e.Multiplier) ? "Multiplier: integer expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tllproto.FGRedAreaData) {
                return e;
              }
              var t = new u.tllproto.FGRedAreaData();
              if (e.PosVec) {
                if (!Array.isArray(e.PosVec)) {
                  throw TypeError(".tllproto.FGRedAreaData.PosVec: array expected");
                }
                t.PosVec = [];
                for (var n = 0; n < e.PosVec.length; ++n) {
                  t.PosVec[n] = 0 | e.PosVec[n];
                }
              }
              if (null != e.AreaType) {
                t.AreaType = 0 | e.AreaType;
              }
              if (null != e.Multiplier) {
                t.Multiplier = 0 | e.Multiplier;
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var n = {};
              if (t.arrays || t.defaults) {
                n.PosVec = [];
              }
              if (t.defaults) {
                n.AreaType = 0;
                n.Multiplier = 0;
              }
              if (e.PosVec && e.PosVec.length) {
                n.PosVec = [];
                for (var i = 0; i < e.PosVec.length; ++i) {
                  n.PosVec[i] = e.PosVec[i];
                }
              }
              if (null != e.AreaType && e.hasOwnProperty("AreaType")) {
                n.AreaType = e.AreaType;
              }
              if (null != e.Multiplier && e.hasOwnProperty("Multiplier")) {
                n.Multiplier = e.Multiplier;
              }
              return n;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tllproto.FGRedAreaData";
            };
            return e;
          }(),
          GameInfoData: function () {
            function e(e) {
              this.Mul = [];
              this.JPOdds = [];
              this.CrackLevels = [];
              if (e) {
                var t = Object.keys(e);
                for (var n = 0; n < t.length; ++n) {
                  if (null != e[t[n]]) {
                    this[t[n]] = e[t[n]];
                  }
                }
              }
            }
            e.prototype.ShowExtra = false;
            e.prototype.Mul = c.emptyArray;
            e.prototype.JPOdds = c.emptyArray;
            e.prototype.CrackLevels = c.emptyArray;
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
                for (var n = 0; n < e.Mul.length; ++n) {
                  t.double(e.Mul[n]);
                }
                t.ldelim();
              }
              if (null != e.JPOdds && e.JPOdds.length) {
                t.uint32(26).fork();
                for (n = 0; n < e.JPOdds.length; ++n) {
                  t.int32(e.JPOdds[n]);
                }
                t.ldelim();
              }
              if (null != e.CrackLevels && e.CrackLevels.length) {
                t.uint32(34).fork();
                for (n = 0; n < e.CrackLevels.length; ++n) {
                  t.int32(e.CrackLevels[n]);
                }
                t.ldelim();
              }
              return t;
            };
            e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim();
            };
            e.decode = function (e, t) {
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var n = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tllproto.GameInfoData(); e.pos < n;) {
                var r = e.uint32();
                switch (r >>> 3) {
                  case 1:
                    i.ShowExtra = e.bool();
                    break;
                  case 2:
                    if (!(i.Mul && i.Mul.length)) {
                      i.Mul = [];
                    }
                    if (2 == (7 & r)) {
                      for (var o = e.uint32() + e.pos; e.pos < o;) {
                        i.Mul.push(e.double());
                      }
                    } else {
                      i.Mul.push(e.double());
                    }
                    break;
                  case 3:
                    if (!(i.JPOdds && i.JPOdds.length)) {
                      i.JPOdds = [];
                    }
                    if (2 == (7 & r)) {
                      for (o = e.uint32() + e.pos; e.pos < o;) {
                        i.JPOdds.push(e.int32());
                      }
                    } else {
                      i.JPOdds.push(e.int32());
                    }
                    break;
                  case 4:
                    if (!(i.CrackLevels && i.CrackLevels.length)) {
                      i.CrackLevels = [];
                    }
                    if (2 == (7 & r)) {
                      for (o = e.uint32() + e.pos; e.pos < o;) {
                        i.CrackLevels.push(e.int32());
                      }
                    } else {
                      i.CrackLevels.push(e.int32());
                    }
                    break;
                  default:
                    e.skipType(7 & r);
                }
              }
              return i;
            };
            e.decodeDelimited = function (e) {
              if (!(e instanceof s)) {
                e = new s(e);
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
              if (null != e.JPOdds && e.hasOwnProperty("JPOdds")) {
                if (!Array.isArray(e.JPOdds)) {
                  return "JPOdds: array expected";
                }
                for (t = 0; t < e.JPOdds.length; ++t) {
                  if (!c.isInteger(e.JPOdds[t])) {
                    return "JPOdds: integer[] expected";
                  }
                }
              }
              if (null != e.CrackLevels && e.hasOwnProperty("CrackLevels")) {
                if (!Array.isArray(e.CrackLevels)) {
                  return "CrackLevels: array expected";
                }
                for (t = 0; t < e.CrackLevels.length; ++t) {
                  if (!c.isInteger(e.CrackLevels[t])) {
                    return "CrackLevels: integer[] expected";
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tllproto.GameInfoData) {
                return e;
              }
              var t = new u.tllproto.GameInfoData();
              if (null != e.ShowExtra) {
                t.ShowExtra = Boolean(e.ShowExtra);
              }
              if (e.Mul) {
                if (!Array.isArray(e.Mul)) {
                  throw TypeError(".tllproto.GameInfoData.Mul: array expected");
                }
                t.Mul = [];
                for (var n = 0; n < e.Mul.length; ++n) {
                  t.Mul[n] = Number(e.Mul[n]);
                }
              }
              if (e.JPOdds) {
                if (!Array.isArray(e.JPOdds)) {
                  throw TypeError(".tllproto.GameInfoData.JPOdds: array expected");
                }
                t.JPOdds = [];
                for (n = 0; n < e.JPOdds.length; ++n) {
                  t.JPOdds[n] = 0 | e.JPOdds[n];
                }
              }
              if (e.CrackLevels) {
                if (!Array.isArray(e.CrackLevels)) {
                  throw TypeError(".tllproto.GameInfoData.CrackLevels: array expected");
                }
                t.CrackLevels = [];
                for (n = 0; n < e.CrackLevels.length; ++n) {
                  t.CrackLevels[n] = 0 | e.CrackLevels[n];
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var n = {};
              if (t.arrays || t.defaults) {
                n.Mul = [];
                n.JPOdds = [];
                n.CrackLevels = [];
              }
              if (t.defaults) {
                n.ShowExtra = false;
              }
              if (null != e.ShowExtra && e.hasOwnProperty("ShowExtra")) {
                n.ShowExtra = e.ShowExtra;
              }
              if (e.Mul && e.Mul.length) {
                n.Mul = [];
                for (var i = 0; i < e.Mul.length; ++i) {
                  n.Mul[i] = t.json && !isFinite(e.Mul[i]) ? String(e.Mul[i]) : e.Mul[i];
                }
              }
              if (e.JPOdds && e.JPOdds.length) {
                n.JPOdds = [];
                for (i = 0; i < e.JPOdds.length; ++i) {
                  n.JPOdds[i] = e.JPOdds[i];
                }
              }
              if (e.CrackLevels && e.CrackLevels.length) {
                n.CrackLevels = [];
                for (i = 0; i < e.CrackLevels.length; ++i) {
                  n.CrackLevels[i] = e.CrackLevels[i];
                }
              }
              return n;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tllproto.GameInfoData";
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
          e.create = function (t) {
            return new e(t);
          };
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
          e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim();
          };
          e.decode = function (e, t) {
            if (!(e instanceof s)) {
              e = s.create(e);
            }
            var n = undefined === t ? e.len : e.pos + t;
            for (var i = new u.tllproto.Column(); e.pos < n;) {
              var r = e.uint32();
              switch (r >>> 3) {
                case 1:
                  if (!(i.Col && i.Col.length)) {
                    i.Col = [];
                  }
                  if (2 == (7 & r)) {
                    for (var o = e.uint32() + e.pos; e.pos < o;) {
                      i.Col.push(e.int32());
                    }
                  } else {
                    i.Col.push(e.int32());
                  }
                  break;
                default:
                  e.skipType(7 & r);
              }
            }
            return i;
          };
          e.decodeDelimited = function (e) {
            if (!(e instanceof s)) {
              e = new s(e);
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
            if (e instanceof u.tllproto.Column) {
              return e;
            }
            var t = new u.tllproto.Column();
            if (e.Col) {
              if (!Array.isArray(e.Col)) {
                throw TypeError(".tllproto.Column.Col: array expected");
              }
              t.Col = [];
              for (var n = 0; n < e.Col.length; ++n) {
                t.Col[n] = 0 | e.Col[n];
              }
            }
            return t;
          };
          e.toObject = function (e, t) {
            if (!t) {
              t = {};
            }
            var n = {};
            if (t.arrays || t.defaults) {
              n.Col = [];
            }
            if (e.Col && e.Col.length) {
              n.Col = [];
              for (var i = 0; i < e.Col.length; ++i) {
                n.Col[i] = e.Col[i];
              }
            }
            return n;
          };
          e.prototype.toJSON = function () {
            return this.constructor.toObject(this, a.util.toJSONOptions);
          };
          e.getTypeUrl = function (e) {
            if (undefined === e) {
              e = "type.googleapis.com";
            }
            return e + "/tllproto.Column";
          };
          return e;
        }();
        u.tllproto = o;
        n.exports = u;
        _cjsExports$1 = n.exports;
      }, function () {
        return {
          "protobufjs/minimal": "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      loader.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TripleLuckyLion/Client/Thai_UAT/node_modules/@old-rd1/tripleluckylion-protocol/tllproto.js");
      cclegacy._RF.push({}, "8c22fc1BP1BhqwtUxY2RXcG", "FeaturesAck", undefined);
      var FeaturesAck = function () {};
      var _dec$7;
      FeaturesAck.MG = {
        RoundQueue: [{
          MainPlateSymbol: {
            CSP: [{
              Col: [{
                Symbol: 9
              }, {
                Symbol: 9
              }, {
                Symbol: 9
              }]
            }, {
              Col: [{
                Symbol: 9
              }, {
                Symbol: 9
              }, {
                Symbol: 9
              }]
            }, {
              Col: [{
                Symbol: 9
              }, {
                Symbol: 9
              }, {
                Symbol: 9
              }]
            }, {
              Col: [{
                Symbol: 9
              }, {
                Symbol: 9
              }, {
                Symbol: 9
              }]
            }, {
              Col: [{
                Symbol: 9
              }, {
                Symbol: 9
              }, {
                Symbol: 9
              }]
            }]
          },
          FreePlateSymbol: [{}, {}],
          AwardDataVec: [{
            Symbol: 9,
            Count: 5,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 1,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 2,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 3,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 4,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 5,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 6,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 7,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 8,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 9,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 10,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 11,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 12,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 13,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 14,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 15,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 16,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 17,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 18,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 19,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 20,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 21,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 22,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 23,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 24,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 25,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 26,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 27,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 28,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 29,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 30,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 31,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 32,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 33,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 34,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 35,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 36,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 37,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 38,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 39,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 40,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 41,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 42,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 43,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 44,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 45,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 46,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 47,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 48,
            Win: 10
          }, {
            Symbol: 9,
            Count: 5,
            Line: 49,
            Win: 10
          }],
          AwardTypeFlag: 1,
          RoundWin: 500,
          FreeRemainRound: [0, 0],
          MGReelWeightResult: 11,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false]
        }],
        TotalWin: 500,
        RTP: .97,
        Bet: 1,
        FreeRedData: [{}, {}]
      };
      FeaturesAck.FG = {
        RoundQueue: [{
          MainPlateSymbol: {
            CSP: [{
              Col: [{
                Symbol: 13,
                Number: 2
              }, {}, {
                Symbol: 3
              }]
            }, {
              Col: [{
                Symbol: 11,
                Number: 2
              }, {}, {
                Symbol: 8
              }]
            }, {
              Col: [{
                Symbol: 12,
                Number: 5
              }, {
                Symbol: 6
              }, {
                Symbol: 4
              }]
            }, {
              Col: [{
                Symbol: 13,
                Number: 8
              }, {
                Symbol: 3
              }, {
                Symbol: 9
              }]
            }, {
              Col: [{
                Symbol: 3
              }, {
                Symbol: 12,
                Number: 8
              }, {
                Symbol: 6
              }]
            }]
          },
          FreePlateSymbol: [{}, {}],
          AwardTypeFlag: 114,
          FreeRemainRound: [4, 4],
          MGReelWeightResult: 1,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: []
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 1
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 10
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 1
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [4, 4],
          FreeNowRound: 1,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [1, 2, 2, 1, 1, 2, 3, 3]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 1
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 10
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 1
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 25
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 8
              }]
            }]
          }, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [4, 4],
          FreeNowRound: 2,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [1, 1, 2, 0, 1, 2, 2, 3]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 1
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 10
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 1
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 25
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 8
              }]
            }]
          }, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [3, 4],
          FreeNowRound: 3,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [1, 1, 2, 0, 0, 2, 2, 3]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 1
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 10
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 1
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 25
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 8
              }]
            }]
          }, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [4, 4],
          FreeNowRound: 4,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 2, 1, 3]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 1
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 10
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 1
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 25
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 8
              }]
            }]
          }, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [3, 3],
          FreeNowRound: 5,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 2, 1, 3]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 1
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 10
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 1
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 25
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 8
              }]
            }]
          }, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [2, 2],
          FreeNowRound: 6,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 2, 1, 3]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 1
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 10
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 1
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 25
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 8
              }]
            }]
          }, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [1, 4],
          FreeNowRound: 7,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 1, 1, 3]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 1
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 17
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                Number: 10
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 1
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 25
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                Number: 8
              }]
            }]
          }, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                JPState: 2,
                JPMult: 1,
                Number: 100
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [0, 4],
          FreeNowRound: 8,
          AddCrack: [false, false, false],
          FreeEndTag: [true, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 1, 1, 2]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{}, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                JPState: 2,
                JPMult: 1,
                Number: 100
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [0, 3],
          FreeNowRound: 9,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 1, 1, 2]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{}, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                JPState: 2,
                JPMult: 1,
                Number: 100
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [0, 2],
          FreeNowRound: 10,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 1, 1, 2]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{}, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 17
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                JPState: 2,
                JPMult: 1,
                Number: 100
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [0, 1],
          FreeNowRound: 11,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 1, 1, 2]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{}, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 14,
                Number: 15
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                JPState: 2,
                JPMult: 1,
                Number: 100
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [0, 4],
          FreeNowRound: 12,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 0, 1, 2]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{}, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 14,
                Number: 15
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                JPState: 2,
                JPMult: 1,
                Number: 100
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [0, 3],
          FreeNowRound: 13,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 0, 1, 2]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{}, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 14,
                Number: 15
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                JPState: 2,
                JPMult: 1,
                Number: 100
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [0, 2],
          FreeNowRound: 14,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 0, 1, 2]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{}, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 14,
                Number: 15
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                JPState: 2,
                JPMult: 1,
                Number: 100
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 4,
          FreeRemainRound: [0, 1],
          FreeNowRound: 15,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false],
          RedFGRemainNums: [0, 1, 2, 0, 0, 0, 1, 2]
        }, {
          MainPlateSymbol: {},
          FreePlateSymbol: [{}, {
            CSP: [{
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                JPState: 4,
                JPMult: 1,
                Number: 5e3
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 20
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 5
              }, {
                Symbol: 14,
                Number: 15
              }, {
                Symbol: 14,
                JPState: 1,
                JPMult: 1,
                Number: 50
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 14,
                JPState: 2,
                JPMult: 1,
                Number: 100
              }, {
                Symbol: 17
              }]
            }, {
              Col: [{
                Symbol: 14,
                Number: 2
              }, {
                Symbol: 14,
                Number: 8
              }, {
                Symbol: 17
              }]
            }]
          }],
          AwardTypeFlag: 12,
          RoundWin: 25581,
          FreeRemainRound: [0, 0],
          FreeNowRound: 16,
          AddCrack: [false, false, false],
          FreeEndTag: [false, true],
          RedFGRemainNums: [0, 1, 2, 0, 0, 0, 1, 2]
        }],
        FreeTotalWin: 25581,
        TotalWin: 25581,
        RTP: .97,
        Bet: 10,
        FreeRedData: [{
          FgMultiplyDataVec: [{
            PosVec: [0, 1, 3],
            AreaType: 1,
            Multiplier: 5
          }, {
            PosVec: [6, 7, 9, 12],
            AreaType: 2,
            Multiplier: 4
          }, {
            PosVec: [2, 4, 5, 8],
            AreaType: 3,
            Multiplier: 3
          }, {
            PosVec: [10, 11, 13, 14],
            AreaType: 4,
            Multiplier: 2
          }],
          AreaTypePlate: [{
            Col: [1, 1, 3]
          }, {
            Col: [1, 3, 3]
          }, {
            Col: [2, 2, 3]
          }, {
            Col: [2, 4, 4]
          }, {
            Col: [2, 4, 4]
          }]
        }, {
          FgMultiplyDataVec: [{
            PosVec: [0, 1, 3],
            AreaType: 1,
            Multiplier: 5
          }, {
            PosVec: [6, 7, 9, 12],
            AreaType: 2,
            Multiplier: 4
          }, {
            PosVec: [2, 4, 5, 8],
            AreaType: 3,
            Multiplier: 3
          }, {
            PosVec: [10, 11, 13, 14],
            AreaType: 4,
            Multiplier: 2
          }],
          AreaTypePlate: [{
            Col: [1, 1, 3]
          }, {
            Col: [1, 3, 3]
          }, {
            Col: [2, 2, 3]
          }, {
            Col: [2, 4, 4]
          }, {
            Col: [2, 4, 4]
          }]
        }]
      };
      FeaturesAck.test = {
        RoundQueue: [{
          MainPlateSymbol: {
            CSP: [{
              Col: [{}, {
                Symbol: 13,
                Number: .3
              }, {
                Symbol: 9
              }]
            }, {
              Col: [{
                Symbol: 11,
                Number: 7.5
              }, {
                Symbol: 8
              }, {
                Symbol: 4
              }]
            }, {
              Col: [{
                Symbol: 8
              }, {
                Symbol: 4
              }, {
                Symbol: 12,
                Number: .6
              }]
            }, {
              Col: [{
                Symbol: 4
              }, {
                Symbol: 9
              }, {
                Symbol: 12,
                Number: 2.4
              }]
            }, {
              Col: [{
                Symbol: 3
              }, {
                Symbol: 11,
                Number: 2.4
              }, {}]
            }]
          },
          FreePlateSymbol: [{}, {}],
          AwardTypeFlag: 82,
          FreeRemainRound: [4, 4],
          MGReelWeightResult: 5,
          AddCrack: [false, false, false],
          FreeEndTag: [false, false]
        }],
        FreeTotalWin: 97.8,
        TotalWin: 97.8,
        RTP: .97,
        Bet: 3,
        FreeRedData: [{}, {}]
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2b1408gqbhJ2YziPAhJDV1s", "IdleState", undefined);
      var ccclass$7 = _decorator.ccclass;
      _dec$7 = ccclass$7("IdleState");
      var _dec$8;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "965346ZF91GT6QTFG7N/8vq", "WaitResState", undefined);
      var ccclass$8 = _decorator.ccclass;
      _dec$8 = ccclass$8("WaitResState");
      var _dec$9;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "7def39gFq5M9qRDfN8MaPGy", "WaitReadyState", undefined);
      var ccclass$9 = _decorator.ccclass;
      _dec$9 = ccclass$9("WaitReadyState");
      var _dec$a;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0a345KaPClNJbGQkXf/7rHb", "PlateShowState", undefined);
      var ccclass$a = _decorator.ccclass;
      _dec$a = ccclass$a("PlateShowState");
      var _dec$b;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f4a7eQmEx5Cn7zm2c0KG/6V", "SpinState", undefined);
      var ccclass$b = _decorator.ccclass;
      _dec$b = ccclass$b("SpinState");
      var _dec$c;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0d05aJKz09ENJx+4hobIJ8E", "WinState", undefined);
      var ccclass$c = _decorator.ccclass;
      _dec$c = ccclass$c("WinState");
      var _dec$d;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "fa4b57e/shPa4G4GWFgrw5p", "NearWinState", undefined);
      var ccclass$d = _decorator.ccclass;
      _dec$d = ccclass$d("NearWinState");
      var _dec$e;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "bbbbeb95adFp6bwUQm3TSsa", "RoundShowEndState", undefined);
      var ccclass$e = _decorator.ccclass;
      _dec$e = ccclass$e("RoundShowEndState");
      var _dec$f;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "90fcceJzk9Lr6+rZfVxt8Xs", "RoundEndState", undefined);
      var ccclass$f = _decorator.ccclass;
      _dec$f = ccclass$f("RoundEndState");
      var _dec$g;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "999652jWqFJKLF3I3XG8jl2", "CheckState", undefined);
      var ccclass$g = _decorator.ccclass;
      _dec$g = ccclass$g("CheckState");
      var _dec$h;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8e825y08eNPtZd+5ZePKW3Q", "EnterFreeState", undefined);
      var ccclass$h = _decorator.ccclass;
      _dec$h = ccclass$h("EnterFreeState");
      var _dec$i;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3e8f7S3d7VG5pAEgGhAqg1h", "LeaveFreeState", undefined);
      var ccclass$i = _decorator.ccclass;
      _dec$i = ccclass$i("LeaveFreeState");
      var _dec$j;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a228cq1pBJD864NohVPKHg2", "AwardState", undefined);
      var ccclass$j = _decorator.ccclass;
      _dec$j = ccclass$j("AwardState");
      var _dec$k;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "734d8f48BFAha7pT908wYOj", "UnshowPerpareState", undefined);
      var ccclass$k = _decorator.ccclass;
      _dec$k = ccclass$k("UnshowPerpareState");
      var _dec$l;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "dc1dcD/Q99D+J5RbyWx7NHI", "FeatureShowState", undefined);
      var ccclass$l = _decorator.ccclass;
      _dec$l = ccclass$l("FeatureShowState");
      var _dec$m;
      var _dec2$6;
      var _class2$6;
      var _descriptor$6;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c3a9bwpzGBK74XIkqeipPoF", "GameBg", undefined);
      var ccclass$m = _decorator.ccclass;
      var property$6 = _decorator.property;
      var ANIMATION_SKIN;
      var ANIMATION_NAME$2;
      var TRACKID$2;
      !function (e) {
        e.MG = "MG";
        e.FG = "FG";
      }(ANIMATION_SKIN || (ANIMATION_SKIN = {}));
      (function (e) {
        e.MG = "MG";
        e.FG = "FG";
        e.Track1_FG_Win = "Track1_FG_Win";
        e.Track1_FG_WinLoop = "Track1_FG_WinLoop";
      })(ANIMATION_NAME$2 || (ANIMATION_NAME$2 = {}));
      (function (e) {
        e[e.ID0 = 0] = "ID0";
        e[e.ID1 = 1] = "ID1";
        e[e.ID2 = 2] = "ID2";
      })(TRACKID$2 || (TRACKID$2 = {}));
      _dec$m = ccclass$m("GameBg");
      _dec2$6 = property$6({
        type: sp.Skeleton,
        tooltip: "動畫"
      });
      _class2$6 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_bg", _descriptor$6, _assertThisInitialized(t));
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
        };
        n.ShowMg = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_bg.setSkin(ANIMATION_SKIN.MG);
                    SpineKit.PlayAnimation(this.m_bg, ANIMATION_NAME$2.MG, true, TRACKID$2.ID0);
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
        n.ShowFg = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_bg.setSkin(ANIMATION_SKIN.FG);
                    SpineKit.PlayAnimation(this.m_bg, ANIMATION_NAME$2.FG, true, TRACKID$2.ID0);
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
        n.ShowFgWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_bg.setSkin(ANIMATION_SKIN.FG);
                    SpineKit.PlayAnimation(this.m_bg, ANIMATION_NAME$2.Track1_FG_Win, false, TRACKID$2.ID1);
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
        n.ShowFgWinLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_bg.setSkin(ANIMATION_SKIN.FG);
                    SpineKit.PlayAnimation(this.m_bg, ANIMATION_NAME$2.Track1_FG_WinLoop, true, TRACKID$2.ID1);
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
        n.ShowFgWinEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_bg.setSkin(ANIMATION_SKIN.FG);
                    this.m_bg.clearTrack(TRACKID$2.ID1);
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
      _descriptor$6 = _applyDecoratedDescriptor(_class2$6.prototype, "m_bg", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$n;
      var _dec2$7;
      var _dec3$6;
      var _descriptor$7;
      var _descriptor2$6;
      var _class3$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8a710L98KRNr4qjruWzVkeZ", "Jp", undefined);
      var ccclass$n = _decorator.ccclass;
      var property$7 = _decorator.property;
      _dec$n = ccclass$n("Jp");
      _dec2$7 = property$7({
        type: sp.Skeleton,
        tooltip: "人物"
      });
      _dec3$6 = property$7({
        type: Label,
        tooltip: "mini數字"
      });
      _class3$4 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_jp", _descriptor$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_jpNum", _descriptor2$6, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_jpOdds = [];
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          this.PlayIdle();
        };
        n.PlayIdle = function (e) {
          if (undefined === e) {
            e = null;
          }
          for (var n = 0; n < this.m_jp.length; n++) {
            var i = this.m_jp[n];
            if (i.animation === t.AnimName.Idle) {
              return;
            }
            i.timeScale = e || Game_Define.TimeScale();
            SpineKit.PlayAnimation(i, t.AnimName.Idle, true);
          }
        };
        n.PlayBet = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var n;
            var i;
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = new Array();
                    for (i = 0; i < this.m_jp.length; i++) {
                      r = this.m_jp[i];
                      n.push(SpineKit.PlayAnimation(r, t.AnimName.Bet, false));
                    }
                    e.next = 4;
                    return Promise.all(n);
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
        n.SetJpNum = function (e) {
          this.m_jpOdds = e;
          this.ShowJpNum(false);
        };
        n.ShowJpNum = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var r;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = node$1.GetNowBetValue();
                    for (i = 0; i < this.m_jpOdds.length; i++) {
                      r = this.m_jpNum[i];
                      o = node$3.times(this.m_jpOdds[i], n);
                      r.string = node$3.FormatNumberThousands(o, node$3.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
                    }
                    e.next = 5;
                    return this.PlayBet();
                  case 5:
                    this.PlayIdle();
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
        return t;
      }(Component);
      _class3$4.JP = {
        MINI: 0,
        MINOR: 1,
        MAJOR: 2,
        GRAND: 3
      };
      _class3$4.AnimName = {
        Bet: "Bet",
        Idle: "Idle"
      };
      _descriptor$7 = _applyDecoratedDescriptor(_class3$4.prototype, "m_jp", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$6 = _applyDecoratedDescriptor(_class3$4.prototype, "m_jpNum", [_dec3$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var _dec$o;
      var _dec2$8;
      var _class$o;
      var _class2$8;
      var _descriptor$8;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c5f1fHl+PBPha9eeaPdZ8Q9", "Lantern", undefined);
      var ccclass$o = _decorator.ccclass;
      var property$8 = _decorator.property;
      var ANIMATION_NAME$3;
      !function (e) {
        e.Lantern_LB = "Lantern_LB";
        e.Lantern_LG = "Lantern_LG";
        e.Lantern_LO = "Lantern_LO";
        e.Lantern_LP = "Lantern_LP";
        e.Lantern_RB = "Lantern_RB";
        e.Lantern_RG = "Lantern_RG";
        e.Lantern_RO = "Lantern_RO";
        e.Lantern_RP = "Lantern_RP";
        e.Lantern_L = "Lantern_L";
        e.Lantern_R = "Lantern_R";
      }(ANIMATION_NAME$3 || (ANIMATION_NAME$3 = {}));
      _dec$o = ccclass$o("Lantern");
      _dec2$8 = property$8({
        type: Label,
        tooltip: "燈籠文字"
      });
      _class2$8 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_Lable", _descriptor$8, _assertThisInitialized(t));
          t.m_anime = undefined;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.ShowL = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    for (t = 0; t < this.m_Lable.length; t++) {
                      this.m_Lable[t].string = "";
                    }
                    this.m_anime = this.node.getComponent(Animation);
                    this.m_anime.play(ANIMATION_NAME$3.Lantern_L);
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
        n.ShowR = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    for (t = 0; t < this.m_Lable.length; t++) {
                      this.m_Lable[t].string = "";
                    }
                    this.m_anime = this.node.getComponent(Animation);
                    this.m_anime.play(ANIMATION_NAME$3.Lantern_R);
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
        n.ShowLantern = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    for (r = 0; r < this.m_Lable.length; r++) {
                      this.m_Lable[r].string = n.toString();
                    }
                    this.m_anime = this.node.getComponent(Animation);
                    e.t0 = t;
                    e.next = 1 === e.t0 ? 6 : 2 === e.t0 ? 8 : 3 === e.t0 ? 10 : 4 === e.t0 ? 12 : 14;
                    break;
                  case 6:
                    if (i) {
                      this.m_anime.play(ANIMATION_NAME$3.Lantern_LO);
                    } else {
                      this.m_anime.play(ANIMATION_NAME$3.Lantern_RO);
                    }
                    return e.abrupt("break", 15);
                  case 8:
                    if (i) {
                      this.m_anime.play(ANIMATION_NAME$3.Lantern_LB);
                    } else {
                      this.m_anime.play(ANIMATION_NAME$3.Lantern_RB);
                    }
                    return e.abrupt("break", 15);
                  case 10:
                    if (i) {
                      this.m_anime.play(ANIMATION_NAME$3.Lantern_LG);
                    } else {
                      this.m_anime.play(ANIMATION_NAME$3.Lantern_RG);
                    }
                    return e.abrupt("break", 15);
                  case 12:
                    if (i) {
                      this.m_anime.play(ANIMATION_NAME$3.Lantern_LP);
                    } else {
                      this.m_anime.play(ANIMATION_NAME$3.Lantern_RP);
                    }
                    return e.abrupt("break", 15);
                  case 14:
                    return e.abrupt("break", 15);
                  case 15:
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
        n.Close = function () {
          for (var e = 0; e < this.m_Lable.length; e++) {
            this.m_Lable[e].string = "";
          }
          this.node.active = false;
        };
        return t;
      }(Component);
      _descriptor$8 = _applyDecoratedDescriptor(_class2$8.prototype, "m_Lable", [_dec2$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var Lantern = _dec$o(_class$o = _class2$8) || _class$o;
      var _dec$p;
      var _dec2$9;
      var _dec3$7;
      var _dec4$5;
      var _dec5$4;
      var _dec6$2;
      var _dec7$2;
      var _dec8$2;
      var _dec9$2;
      var _dec10$2;
      var _dec11;
      var _dec12;
      var _dec13;
      var _dec14;
      var _dec15;
      var _descriptor$9;
      var _descriptor2$7;
      var _descriptor3$5;
      var _descriptor4$4;
      var _descriptor5$2;
      var _descriptor6$2;
      var _descriptor7$2;
      var _descriptor8$2;
      var _descriptor9$2;
      var _descriptor10;
      var _descriptor11;
      var _descriptor12;
      var _descriptor13;
      var _descriptor14;
      var _class3$5;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ce3a4dwaydL0qyT+1WOcfw8", "Reel", undefined);
      var ccclass$p = _decorator.ccclass;
      var property$9 = _decorator.property;
      var REEL_SKIN;
      var REEL_TEXT;
      var REEL_ANIMATION_NAME;
      var ANIMATION_NAME$4;
      var UP_DOWN;
      var ANIMATION_RESPIN;
      var ANIMATION_COLLECT_WIN;
      var REEL_LANTERN;
      !function (e) {
        e.MG = "MG";
        e.FG = "FG";
      }(REEL_SKIN || (REEL_SKIN = {}));
      (function (e) {
        e[e.L1 = 0] = "L1";
        e[e.R1 = 1] = "R1";
        e[e.L2 = 2] = "L2";
        e[e.R2 = 3] = "R2";
      })(REEL_TEXT || (REEL_TEXT = {}));
      (function (e) {
        e.Idle = "Idle";
        e.FG_Double = "FG_Double";
      })(REEL_ANIMATION_NAME || (REEL_ANIMATION_NAME = {}));
      (function (e) {
        e.FX_Fly_G = "FX_Fly_G";
      })(ANIMATION_NAME$4 || (ANIMATION_NAME$4 = {}));
      (function (e) {
        e[e.DOWN = 0] = "DOWN";
        e[e.UP = 1] = "UP";
      })(UP_DOWN || (UP_DOWN = {}));
      (function (e) {
        e.Start = "Start";
      })(ANIMATION_RESPIN || (ANIMATION_RESPIN = {}));
      (function (e) {
        e.CollectWin = "CollectWin";
      })(ANIMATION_COLLECT_WIN || (ANIMATION_COLLECT_WIN = {}));
      (function (e) {
        e[e.U = 0] = "U";
        e[e.M = 1] = "M";
        e[e.D = 2] = "D";
      })(REEL_LANTERN || (REEL_LANTERN = {}));
      _dec$p = ccclass$p("Reel");
      _dec2$9 = property$9({
        type: sp.Skeleton,
        tooltip: "動畫"
      });
      _dec3$7 = property$9({
        type: Sprite,
        tooltip: "文字"
      });
      _dec4$5 = property$9({
        type: Node,
        tooltip: "FG1 Group"
      });
      _dec5$4 = property$9({
        type: Node,
        tooltip: "FG1 Group"
      });
      _dec6$2 = property$9({
        type: Lantern,
        tooltip: "lanternL Group"
      });
      _dec7$2 = property$9({
        type: Lantern,
        tooltip: "lanternR Group"
      });
      _dec8$2 = property$9({
        type: Lantern,
        tooltip: "lanternL1 Group"
      });
      _dec9$2 = property$9({
        type: Lantern,
        tooltip: "lanternR1 Group"
      });
      _dec10$2 = property$9({
        type: Lantern,
        tooltip: "lanternL2 Group"
      });
      _dec11 = property$9({
        type: Lantern,
        tooltip: "lanternR2 Group"
      });
      _dec12 = property$9({
        type: Node,
        tooltip: "局數"
      });
      _dec13 = property$9({
        type: Label,
        tooltip: "count1 Group"
      });
      _dec14 = property$9({
        type: Node,
        tooltip: "停輪改局數"
      });
      _dec15 = property$9({
        type: sp.Skeleton,
        tooltip: "fxCollectWin1 / 2"
      });
      _class3$5 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_reel", _descriptor$9, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_texts", _descriptor2$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fg1Group", _descriptor3$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fg2Group", _descriptor4$4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_lanternL", _descriptor5$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_lanternR", _descriptor6$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_lanternL1", _descriptor7$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_lanternR1", _descriptor8$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_lanternL2", _descriptor9$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_lanternR2", _descriptor10, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_count", _descriptor11, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_countLabels", _descriptor12, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgRoundNode", _descriptor13, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fxCollectWin", _descriptor14, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_nowRounds = [0, 0];
          t.m_newRounds = [0, 0];
          t.m_step = 0;
          t.m_isEnd = false;
          t.m_isGPlay = false;
          t.m_isAdd = [false, false];
          t.m_nCount = 0;
          t.m_freeRedData = undefined;
          t.m_isRPlay = false;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          for (var t = 0; t < this.m_fgRoundNode.length; t++) {
            this.m_fgRoundNode[t].active = false;
          }
          for (var n = 0; n < this.m_fxCollectWin.length; n++) {
            this.m_fxCollectWin[n].node.active = false;
          }
          for (var i = 0; i < this.m_lanternL.length; i++) {
            this.m_lanternL[i].node.active = false;
            this.m_lanternR[i].node.active = false;
            this.m_lanternL1[i].node.active = false;
            this.m_lanternR1[i].node.active = false;
            this.m_lanternL2[i].node.active = false;
            this.m_lanternR2[i].node.active = false;
          }
        };
        n.ShowMg = function () {
          this.m_reel.setSkin(REEL_SKIN.MG);
          this.m_reel.setAnimation(0, REEL_ANIMATION_NAME.Idle, true);
          for (var e = 0; e < this.m_fg1Group.length; e++) {
            this.m_fg1Group[e].active = false;
          }
          for (var t = 0; t < this.m_fg2Group.length; t++) {
            this.m_fg2Group[t].active = false;
          }
          for (var n = 0; n < this.m_texts.length; n++) {
            this.m_texts[n].node.active = false;
          }
          for (var i = 0; i < this.m_countLabels.length; i++) {
            this.m_countLabels[i].node.active = false;
          }
          for (var r = 0; r < this.m_lanternL.length; r++) {
            this.m_lanternL[r].node.active = true;
            this.m_lanternL[r].ShowL();
            this.m_lanternR[r].node.active = true;
            this.m_lanternR[r].ShowR();
            this.m_lanternL1[r].node.active = false;
            this.m_lanternR1[r].node.active = false;
            this.m_lanternL2[r].node.active = false;
            this.m_lanternR2[r].node.active = false;
          }
        };
        n.ShowDeclareEnd = function () {
          this.m_reel.setSkin(REEL_SKIN.FG);
          if (Game_Define.isGetP) {
            this.PlayTowReelText(0, 0, 0, 0);
            this.m_reel.setAnimation(0, REEL_ANIMATION_NAME.FG_Double, true);
          } else {
            this.PlayOneReelFgText(0, 0);
            this.m_reel.setAnimation(0, REEL_ANIMATION_NAME.Idle, true);
          }
        };
        n.PlayOneReelFgText = function (e, t) {
          for (var n = 0; n < this.m_fg1Group.length; n++) {
            this.m_fg1Group[n].active = true;
          }
          this.m_texts[REEL_TEXT.L1].node.active = true;
          this.m_texts[REEL_TEXT.R1].node.active = true;
          this.m_count.active = true;
          this.m_countLabels[REEL_TEXT.L1].node.active = true;
          this.m_countLabels[REEL_TEXT.R1].node.active = true;
          this.m_countLabels[REEL_TEXT.L1].string = e.toString();
          this.m_countLabels[REEL_TEXT.R1].string = t.toString();
        };
        n.PlayTowReelText = function (e, t, n, i) {
          for (var r = 0; r < this.m_fg2Group.length; r++) {
            this.m_fg2Group[r].active = true;
          }
          this.m_texts[REEL_TEXT.L1].node.active = true;
          this.m_texts[REEL_TEXT.R1].node.active = true;
          this.m_texts[REEL_TEXT.L2].node.active = true;
          this.m_texts[REEL_TEXT.R2].node.active = true;
          this.m_count.active = true;
          this.m_countLabels[REEL_TEXT.L1].node.active = true;
          this.m_countLabels[REEL_TEXT.R1].node.active = true;
          this.m_countLabels[REEL_TEXT.L2].node.active = true;
          this.m_countLabels[REEL_TEXT.R2].node.active = true;
          this.m_countLabels[REEL_TEXT.L1].string = e.toString();
          this.m_countLabels[REEL_TEXT.R1].string = t.toString();
          this.m_countLabels[REEL_TEXT.L2].string = n.toString();
          this.m_countLabels[REEL_TEXT.R2].string = i.toString();
        };
        n.ShowFgInIt = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var r;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_freeRedData = i;
                    this.m_isRPlay = false;
                    this.m_nCount = 0;
                    for (r = 0; r < t.CSP.length; r++) {
                      for (o = 0; o < t.CSP[r].Col.length; o++) {
                        if (t.CSP[r].Col[o].Symbol > Game_Define.Symbol.SYMBOL_10) {
                          this.m_nCount++;
                        }
                      }
                    }
                    if (Game_Define.isGetP) {
                      this.PlayTowReelText(this.m_nCount, 0, this.m_nCount, 0);
                    } else {
                      this.PlayOneReelFgText(this.m_nCount, 0);
                    }
                    this.m_isGPlay = false;
                    this.m_nowRounds = [0, 0];
                    this.m_newRounds = [n[UP_DOWN.DOWN], n[UP_DOWN.UP]];
                    this.m_step = node$3.divide(this.m_newRounds[UP_DOWN.DOWN], this.m_newRounds[UP_DOWN.DOWN] * Game_Define.Time.RoundInit);
                    this.m_isEnd = true;
                    e.next = 12;
                    return node$2.Wait(this, this.m_newRounds[UP_DOWN.DOWN] * Game_Define.Time.RoundInit + 1);
                  case 12:
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
        n.PlaySoundFgRespin = function () {
          if (node$3.FormatNumberThousands(node$3.strip(Game_Define.ShowDisplayValue(this.m_nowRounds[UP_DOWN.DOWN]))) != this.m_countLabels[REEL_TEXT.R1].string) {
            node$5.Play(Game_Define.AudioClips.FG_Respin_01);
          }
        };
        n.update = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.m_isEnd) {
                      e.next = 14;
                      break;
                    }
                    this.m_nowRounds[UP_DOWN.DOWN] += this.m_step * t;
                    this.m_nowRounds[UP_DOWN.UP] += this.m_step * t;
                    n = node$3.FormatNumberThousands(node$3.strip(Game_Define.ShowDisplayValue(this.m_nowRounds[UP_DOWN.DOWN])));
                    i = node$3.FormatNumberThousands(node$3.strip(Game_Define.ShowDisplayValue(this.m_nowRounds[UP_DOWN.UP])));
                    if (Number(n) >= this.m_newRounds[UP_DOWN.DOWN]) {
                      this.m_nowRounds[UP_DOWN.DOWN] = this.m_newRounds[UP_DOWN.DOWN];
                      this.m_isEnd = false;
                    }
                    this.PlaySoundFgRespin();
                    if (Game_Define.isGetP) {
                      this.PlayTowReelText(this.m_nCount, Number(n), this.m_nCount, Number(i));
                    } else {
                      this.PlayOneReelFgText(this.m_nCount, Number(n));
                    }
                    if (Game_Define.isGetG && Number(n) > 3 && !this.m_isGPlay) {
                      this.m_isGPlay = true;
                      node$5.Play(Game_Define.AudioClips.FG_SpinBall);
                      this.m_gameView.Effect.ShowGBallAdd();
                    }
                    if (!(Game_Define.isGetR && Number(n) >= 3) || this.m_isRPlay) {
                      e.next = 14;
                      break;
                    }
                    this.m_isRPlay = true;
                    e.next = 13;
                    return node$2.Wait(this, Game_Define.Time.Lantern);
                  case 13:
                    if (Game_Define.isGetP) {
                      this.PlayLantern(this.m_lanternL1, this.m_lanternR1, this.m_freeRedData[0]);
                      this.PlayLantern(this.m_lanternL2, this.m_lanternR2, this.m_freeRedData[1]);
                    } else {
                      this.PlayLantern(this.m_lanternL, this.m_lanternR, this.m_freeRedData[0]);
                    }
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
        n.ShowSpinRound = function () {
          this.m_isAdd = [false, false];
          if (this.m_countLabels[REEL_TEXT.R1].node.active) {
            node$5.Play(Game_Define.AudioClips.FG_Respin);
            var e = Number(this.m_countLabels[REEL_TEXT.R1].string) - 1;
            if (e < 0) {
              e = 0;
            }
            this.m_countLabels[REEL_TEXT.R1].string = e.toString();
          }
          if (this.m_countLabels[REEL_TEXT.R2].node.active) {
            var t = Number(this.m_countLabels[REEL_TEXT.R2].string) - 1;
            if (t < 0) {
              t = 0;
            }
            this.m_countLabels[REEL_TEXT.R2].string = t.toString();
          }
        };
        n.ShowUpdateInfo = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var r;
            var o;
            var a;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = 0;
                    r = 0;
                    o = 0;
                    if (t == this.m_gameView.SinglePlateMgr.node.name) {
                      i = UP_DOWN.DOWN;
                      r = REEL_TEXT.R1;
                      o = REEL_TEXT.L1;
                    } else {
                      i = UP_DOWN.UP;
                      r = REEL_TEXT.R2;
                      o = REEL_TEXT.L2;
                    }
                    if (this.m_countLabels[o].node.active) {
                      a = Number(this.m_countLabels[o].string) + 1;
                      this.m_countLabels[o].string = a.toString();
                    }
                    e.next = 7;
                    return this.PlayUpdateInfo(n, i, r);
                  case 7:
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
        n.PlayUpdateInfo = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n, i, r) {
            var o;
            var a;
            var s = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_isAdd[i]) {
                      e.next = 14;
                      break;
                    }
                    this.m_isAdd[i] = true;
                    if (!this.m_countLabels[r].node.active) {
                      e.next = 14;
                      break;
                    }
                    if (!(Number(this.m_countLabels[r].string) < n[i])) {
                      e.next = 14;
                      break;
                    }
                    (o = this.m_fgRoundNode[i]).active = true;
                    a = o.getComponent(sp.Skeleton);
                    node$5.Play(Game_Define.AudioClips.FG_Respin_01);
                    e.next = 11;
                    return SpineKit.PlayAnimation(a, ANIMATION_RESPIN.Start, false, 0, function (e) {
                      if (e === t.AnimEvent.Hit) {
                        s.m_countLabels[r].string = n[i].toString();
                      }
                    });
                  case 11:
                    o.active = false;
                    e.next = 14;
                    return node$2.Wait(this, Game_Define.Time.RoundUpdate);
                  case 14:
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
        n.ShowLeaveFgWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    node$5.Play(Game_Define.AudioClips.respin_switch);
                    t = new Array();
                    if (this.m_countLabels[REEL_TEXT.R1].node.active) {
                      (n = this.m_fxCollectWin[UP_DOWN.DOWN]).node.active = true;
                      t.push(this.PlayCollectWin(n, UP_DOWN.DOWN));
                    }
                    if (this.m_countLabels[REEL_TEXT.R2].node.active) {
                      (i = this.m_fxCollectWin[UP_DOWN.UP]).node.active = true;
                      t.push(this.PlayCollectWin(i, UP_DOWN.UP));
                    }
                    e.next = 6;
                    return Promise.all(t);
                  case 6:
                    for (r = 0; r < this.m_fxCollectWin.length; r++) {
                      this.m_fxCollectWin[r].node.active = false;
                    }
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
        n.PlayCollectWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n, i) {
            var r = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(n, ANIMATION_COLLECT_WIN.CollectWin, false, 0, function (e) {
                      if (e === t.AnimEvent.HIT) {
                        if (i === UP_DOWN.DOWN) {
                          r.m_texts[REEL_TEXT.L1].node.active = false;
                          r.m_countLabels[REEL_TEXT.L1].node.active = false;
                          r.m_gameView.Effect.ShowCollectWin(i);
                        } else {
                          r.m_texts[REEL_TEXT.L2].node.active = false;
                          r.m_countLabels[REEL_TEXT.L2].node.active = false;
                          r.m_gameView.Effect.ShowCollectWin(i);
                        }
                      }
                    });
                  case 2:
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
        n.PlayLantern = function (e, t, n) {
          var i = [false, false, false, false];
          for (var r = 0; r < e.length; r++) {
            e[r].node.active = true;
            t[r].node.active = true;
          }
          var o = n.FgMultiplyDataVec;
          var a = [0, 0, 0, 0];
          for (var s = 0; s < o.length; s++) {
            a[o[s].AreaType - 1] = o[s].Multiplier;
          }
          var l = n.AreaTypePlate;
          var c = [l[0].Col[0], l[0].Col[l[0].Col.length - 1], l[l.length - 1].Col[0], l[l.length - 1].Col[l[l.length - 1].Col.length - 1]];
          for (var u = 0; u < c.length; u++) {
            var m = c[u] - 1;
            if (!i[m]) {
              i[m] = true;
              switch (u) {
                case 0:
                  e[REEL_LANTERN.U].ShowLantern(c[u], a[m], true);
                  break;
                case 1:
                  e[REEL_LANTERN.D].ShowLantern(c[u], a[m], true);
                  break;
                case 2:
                  t[REEL_LANTERN.U].ShowLantern(c[u], a[m], false);
                  break;
                case 3:
                  t[REEL_LANTERN.D].ShowLantern(c[u], a[m], false);
              }
            }
          }
          for (var _ = 0; _ < i.length; _++) {
            if (!i[_]) {
              for (var p = 0; p < o.length; p++) {
                if (_ === o[p].AreaType - 1) {
                  var h = o[p].AreaType;
                  var f = o[p].Multiplier;
                  if (-1 !== o[p].PosVec.indexOf(1)) {
                    e[REEL_LANTERN.M].ShowLantern(h, f, true);
                  } else if (-1 !== o[p].PosVec.indexOf(13)) {
                    t[REEL_LANTERN.M].ShowLantern(h, f, false);
                  }
                }
              }
            }
          }
        };
        n.Close = function () {
          for (var e = 0; e < this.m_fg1Group.length; e++) {
            this.m_fg1Group[e].active = false;
          }
          for (var t = 0; t < this.m_fg2Group.length; t++) {
            this.m_fg2Group[t].active = false;
          }
          for (var n = 0; n < this.m_countLabels.length; n++) {
            this.m_countLabels[n].node.active = false;
          }
          this.m_count.active = true;
          for (var i = 0; i < this.m_lanternL.length; i++) {
            this.m_lanternL[i].node.active = false;
            this.m_lanternR[i].node.active = false;
            this.m_lanternL1[i].node.active = false;
            this.m_lanternR1[i].node.active = false;
            this.m_lanternL2[i].node.active = false;
            this.m_lanternR2[i].node.active = false;
          }
        };
        n.SetRecoverFgPlateInfo = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var r;
            var o;
            var a;
            var s;
            var l;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_freeRedData = i;
                    r = [0, 0];
                    for (o = 0; o < t.length; o++) {
                      a = t[o];
                      for (s = 0; s < a.CSP.length; s++) {
                        for (l = 0; l < a.CSP[s].Col.length; l++) {
                          if (a.CSP[s].Col[l].Symbol === Game_Define.Symbol.SYMBOL_14) {
                            r[o]++;
                          }
                        }
                      }
                    }
                    if (Game_Define.isGetP) {
                      this.PlayTowReelText(r[0], n[0], r[1], n[1]);
                    } else {
                      this.PlayOneReelFgText(r[0], n[0]);
                    }
                    if (Game_Define.isGetR) {
                      if (Game_Define.isGetP) {
                        this.PlayLantern(this.m_lanternL1, this.m_lanternR1, this.m_freeRedData[0]);
                        this.PlayLantern(this.m_lanternL2, this.m_lanternR2, this.m_freeRedData[1]);
                      } else {
                        this.PlayLantern(this.m_lanternL, this.m_lanternR, this.m_freeRedData[0]);
                      }
                    }
                  case 5:
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
        n.SetTxt = function (e) {
          var t = node.GetGameAtlas();
          for (var n = 0; n < this.m_texts.length; n++) {
            if (t.getSpriteFrame(e[n])) {
              this.m_texts[n].spriteFrame = t.getSpriteFrame(e[n]);
            }
          }
        };
        return t;
      }(Component);
      _class3$5.AnimEvent = {
        Hit: "Hit",
        HIT: "HIT"
      };
      _descriptor$9 = _applyDecoratedDescriptor(_class3$5.prototype, "m_reel", [_dec2$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$7 = _applyDecoratedDescriptor(_class3$5.prototype, "m_texts", [_dec3$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$5 = _applyDecoratedDescriptor(_class3$5.prototype, "m_fg1Group", [_dec4$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor4$4 = _applyDecoratedDescriptor(_class3$5.prototype, "m_fg2Group", [_dec5$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor5$2 = _applyDecoratedDescriptor(_class3$5.prototype, "m_lanternL", [_dec6$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor6$2 = _applyDecoratedDescriptor(_class3$5.prototype, "m_lanternR", [_dec7$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor7$2 = _applyDecoratedDescriptor(_class3$5.prototype, "m_lanternL1", [_dec8$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor8$2 = _applyDecoratedDescriptor(_class3$5.prototype, "m_lanternR1", [_dec9$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor9$2 = _applyDecoratedDescriptor(_class3$5.prototype, "m_lanternL2", [_dec10$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor10 = _applyDecoratedDescriptor(_class3$5.prototype, "m_lanternR2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor11 = _applyDecoratedDescriptor(_class3$5.prototype, "m_count", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor12 = _applyDecoratedDescriptor(_class3$5.prototype, "m_countLabels", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor13 = _applyDecoratedDescriptor(_class3$5.prototype, "m_fgRoundNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor14 = _applyDecoratedDescriptor(_class3$5.prototype, "m_fxCollectWin", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var _dec$q;
      var _dec2$a;
      var _class2$a;
      var _descriptor$a;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b382cv/lr9GNKde76gwCd5V", "Win", undefined);
      var ccclass$q = _decorator.ccclass;
      var property$a = _decorator.property;
      _dec$q = ccclass$q("Win");
      _dec2$a = property$a({
        type: Label,
        tooltip: "贏分數字"
      });
      _class2$a = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_winNum", _descriptor$a, _assertThisInitialized(t));
          t.m_gameView = undefined;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          this.node.active = false;
        };
        n.ShowWin = function (e) {
          this.node.active = true;
          this.m_winNum.string = e.toString();
        };
        n.ShowWinEnd = function () {
          this.node.active = false;
        };
        return t;
      }(Component);
      _descriptor$a = _applyDecoratedDescriptor(_class2$a.prototype, "m_winNum", [_dec2$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$r;
      var _dec2$b;
      var _dec3$8;
      var _dec4$6;
      var _descriptor$b;
      var _descriptor2$8;
      var _descriptor3$6;
      var _class3$6;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4dc581PcAhNU7n3IOShLT83", "JpCompliment", undefined);
      var ccclass$r = _decorator.ccclass;
      var property$b = _decorator.property;
      var ANIMATION_SKIN$1;
      var ANIMATION_NAME$5;
      !function (e) {
        e.MINI = "MINI";
        e.MINOR = "MINOR";
        e.MAJOR = "MAJOR";
        e.GRAND = "GRAND";
      }(ANIMATION_SKIN$1 || (ANIMATION_SKIN$1 = {}));
      (function (e) {
        e.Start = "Start";
        e.Loop = "Loop";
        e.End = "End";
        e.Start_Multiply = "Start_Multiply";
      })(ANIMATION_NAME$5 || (ANIMATION_NAME$5 = {}));
      _dec$r = ccclass$r("JpCompliment");
      _dec2$b = property$b({
        type: sp.Skeleton,
        tooltip: "動畫"
      });
      _dec3$8 = property$b({
        type: Label,
        tooltip: "贏分"
      });
      _dec4$6 = property$b({
        type: Label,
        tooltip: "倍數"
      });
      _class3$6 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_jpCompliment", _descriptor$b, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_winNum", _descriptor2$8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_multiply", _descriptor3$6, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_win = 0;
          t.m_showWin = 0;
          t.m_step = 0;
          t.m_isShowAward = false;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          this.node.active = false;
        };
        n.ShowJpCompliment = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n, i) {
            var r;
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_gameView.ChangeFadeType(1);
                    node$5.Play(Game_Define.AudioClips.JP_declare);
                    this.m_gameView.TriLuck.ShowTriLuck();
                    this.node.active = true;
                    this.m_multiply.node.active = false;
                    this.m_winNum.string = "0";
                    this.m_win = n;
                    this.m_showWin = 0;
                    this.m_isShowAward = true;
                    this.m_jpCompliment.setSkin(this.GetSkin(i));
                    r = this.m_jpCompliment.findAnimation(ANIMATION_NAME$5.Start).duration;
                    this.m_step = node$3.divide(this.m_win, r);
                    this.m_jpCompliment.clearTracks();
                    e.next = 15;
                    return SpineKit.PlayAnimation(this.m_jpCompliment, ANIMATION_NAME$5.Start, false, 0, function (e) {
                      if (e === t.AnimEvent.Hit) {
                        o.m_showWin = o.m_win;
                      }
                    });
                  case 15:
                    SpineKit.PlayAnimation(this.m_jpCompliment, ANIMATION_NAME$5.Loop, true);
                  case 16:
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
        n.ShowJpMultiplyCompliment = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(n, i, r) {
            var o;
            var a;
            var s = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_gameView.ChangeFadeType(1);
                    node$5.Play(Game_Define.AudioClips.JP_declare);
                    this.m_gameView.TriLuck.ShowTriLuck();
                    this.node.active = true;
                    this.m_multiply.node.active = true;
                    this.m_multiply.string = i.toString() + "X";
                    o = node$3.times(n, i);
                    this.m_winNum.string = "0";
                    this.m_win = n;
                    this.m_showWin = 0;
                    this.m_isShowAward = true;
                    this.m_jpCompliment.setSkin(this.GetSkin(r));
                    a = this.m_jpCompliment.findAnimation(ANIMATION_NAME$5.Start_Multiply).duration;
                    this.m_step = node$3.divide(this.m_win, a);
                    this.m_jpCompliment.clearTracks();
                    e.next = 17;
                    return SpineKit.PlayAnimation(this.m_jpCompliment, ANIMATION_NAME$5.Start_Multiply, false, 0, function (e) {
                      if (e === t.AnimEvent.Hit) {
                        s.m_showWin = s.m_win;
                      } else if (e === t.AnimEvent.Hit2) {
                        node$5.Play(Game_Define.AudioClips.CriticalPartVoice_Hit);
                        s.m_winNum.string = node$3.FormatNumberThousands(node$3.strip(Game_Define.ShowDisplayValue ? Game_Define.ShowDisplayValue(o) : o), node$3.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                      }
                    });
                  case 17:
                    SpineKit.PlayAnimation(this.m_jpCompliment, ANIMATION_NAME$5.Loop, true);
                  case 18:
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
        n.ShowJpComplimentEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_isShowAward = false;
                    this.m_gameView.TriLuck.ShowTriLuckEnd();
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_jpCompliment, ANIMATION_NAME$5.End);
                  case 4:
                    this.node.active = false;
                    this.m_gameView.ChangeFadeType(0);
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
        n.GetSkin = function (e) {
          var t = ANIMATION_SKIN$1.MINI;
          switch (e) {
            case 1:
              t = ANIMATION_SKIN$1.MINI;
              break;
            case 2:
              t = ANIMATION_SKIN$1.MINOR;
              break;
            case 3:
              t = ANIMATION_SKIN$1.MAJOR;
              break;
            case 4:
              t = ANIMATION_SKIN$1.GRAND;
          }
          return t;
        };
        n.update = function (e) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * e;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
            }
            this.m_winNum.string = node$3.FormatNumberThousands(node$3.strip(Game_Define.ShowDisplayValue ? Game_Define.ShowDisplayValue(this.m_showWin) : this.m_showWin), node$3.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        return t;
      }(Component);
      _class3$6.AnimEvent = {
        Hit: "Hit",
        Hit2: "Hit2"
      };
      _descriptor$b = _applyDecoratedDescriptor(_class3$6.prototype, "m_jpCompliment", [_dec2$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$8 = _applyDecoratedDescriptor(_class3$6.prototype, "m_winNum", [_dec3$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$6 = _applyDecoratedDescriptor(_class3$6.prototype, "m_multiply", [_dec4$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$s;
      var _dec2$c;
      var _class2$c;
      var _descriptor$c;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5e19955BZFCKJqHPEoxFp7h", "MgOmen", undefined);
      var ccclass$s = _decorator.ccclass;
      var property$c = _decorator.property;
      var ANIMATION_NAME$6;
      !function (e) {
        e.Start = "Start";
      }(ANIMATION_NAME$6 || (ANIMATION_NAME$6 = {}));
      _dec$s = ccclass$s("MgOmen");
      _dec2$c = property$c({
        type: sp.Skeleton,
        tooltip: "動畫"
      });
      _class2$c = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_mgOmen", _descriptor$c, _assertThisInitialized(t));
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          this.node.active = false;
        };
        n.ShowMgOmen = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_mgOmen, ANIMATION_NAME$6.Start);
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
      _descriptor$c = _applyDecoratedDescriptor(_class2$c.prototype, "m_mgOmen", [_dec2$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$t;
      var _dec2$d;
      var _class2$d;
      var _descriptor$d;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d5441klgLlA6JXnjLOnw50o", "TriLuck", undefined);
      var ccclass$t = _decorator.ccclass;
      var property$d = _decorator.property;
      var ANIMATION_NAME$7;
      !function (e) {
        e.Start = "Start";
        e.Loop = "Loop";
        e.End = "End";
      }(ANIMATION_NAME$7 || (ANIMATION_NAME$7 = {}));
      _dec$t = ccclass$t("TriLuck");
      _dec2$d = property$d({
        type: sp.Skeleton,
        tooltip: "動畫"
      });
      _class2$d = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_triLuck", _descriptor$d, _assertThisInitialized(t));
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          this.node.active = false;
        };
        n.ShowTriLuck = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_triLuck, ANIMATION_NAME$7.Start);
                  case 3:
                    SpineKit.PlayAnimation(this.m_triLuck, ANIMATION_NAME$7.Loop, true);
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
        n.ShowTriLuckEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.node.active) {
                      e.next = 3;
                      break;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_triLuck, ANIMATION_NAME$7.End);
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
        return t;
      }(Component);
      _descriptor$d = _applyDecoratedDescriptor(_class2$d.prototype, "m_triLuck", [_dec2$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$u;
      var _dec2$e;
      var _class2$e;
      var _descriptor$e;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1a3c6gO7MpEfbSSDtTLBKhk", "GameIntro", undefined);
      var ccclass$u = _decorator.ccclass;
      var property$e = _decorator.property;
      var ANIMATION_NAME$8;
      var EVENTNAME;
      !function (e) {
        e.GAMEINTRO_L = "GameIntro_L";
        e.Start = "Start";
      }(ANIMATION_NAME$8 || (ANIMATION_NAME$8 = {}));
      (function (e) {
        e.MG_OPEN = "MG_Open";
      })(EVENTNAME || (EVENTNAME = {}));
      _dec$u = ccclass$u("GameIntro");
      _dec2$e = property$e({
        type: sp.Skeleton,
        tooltip: "動畫"
      });
      _class2$e = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_gameIntro", _descriptor$e, _assertThisInitialized(t));
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          this.node.active = true;
          this.InitSpine(this.m_gameIntro, ANIMATION_NAME$8.Start);
        };
        n.ShowUnGameIntro = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_gameView.Reel.ShowMg();
                    this.m_gameView.GameBg.ShowMg();
                    this.m_gameView.Character.ShowGameIntroEnd();
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
        n.ShowGameIntro = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    node$5.Play(Game_Define.AudioClips.MG_in);
                    this.m_gameView.Character.ShowGameIntro();
                    t = function (e) {
                      if ("Start" == e) {
                        n.m_gameView.Character.ShowGameIntroEnd();
                      }
                    };
                    this.m_gameIntro.paused = false;
                    e.next = 7;
                    return SpineKit.PlayAnimation(this.m_gameIntro, ANIMATION_NAME$8.Start, false, 0, t);
                  case 7:
                    this.m_gameView.Reel.ShowMg();
                    this.m_gameView.GameBg.ShowMg();
                    this.node.active = false;
                  case 10:
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
        n.InitSpine = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    SpineKit.PlayAnimation(t, n);
                    e.next = 3;
                    return node$2.Wait(this, Game_Define.Time.GameIntro);
                  case 3:
                    t.paused = true;
                  case 4:
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
        n.Close = function () {
          this.node.active = false;
        };
        return t;
      }(Component);
      _descriptor$e = _applyDecoratedDescriptor(_class2$e.prototype, "m_gameIntro", [_dec2$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var Shape;
      var Axial;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "81a33RMy9BPdLP1CIOgWAhn", "ZoneDefine", undefined);
      (function (e) {
        e[e.RECTANGLE = 0] = "RECTANGLE";
        e[e.L_SHAPE = 1] = "L_SHAPE";
        e[e.T_SHAPE = 2] = "T_SHAPE";
        e[e.U_SHAPE = 3] = "U_SHAPE";
        e[e.S_SHAPE = 4] = "S_SHAPE";
      })(Shape || (Shape = {}));
      (function (e) {
        e[e.NORMAL_UP = 0] = "NORMAL_UP";
        e[e.NORMAL_LEFT = 1] = "NORMAL_LEFT";
        e[e.NORMAL_DOWN = 2] = "NORMAL_DOWN";
        e[e.NORMAL_RIGHT = 3] = "NORMAL_RIGHT";
        e[e.MIRROR_UP = 4] = "MIRROR_UP";
        e[e.MIRROR_LEFT = 5] = "MIRROR_LEFT";
        e[e.MIRROR_DOWN = 6] = "MIRROR_DOWN";
        e[e.MIRROR_RIGHT = 7] = "MIRROR_RIGHT";
      })(Axial || (Axial = {}));
      var CONFIG_MAP = {
        "0001": {
          shape: Shape.RECTANGLE,
          axial: Axial.NORMAL_UP,
          width: 1,
          height: 1,
          centerX: 1,
          centerY: 1,
          edgesX: [0, 4],
          edgesY: [0, 4]
        },
        "0033": {
          shape: Shape.RECTANGLE,
          axial: Axial.NORMAL_UP,
          width: 2,
          height: 2,
          centerX: 2,
          centerY: 2,
          edgesX: [0, 1, 8, 9],
          edgesY: [0, 1, 8, 9]
        },
        "0777": {
          shape: Shape.RECTANGLE,
          axial: Axial.NORMAL_UP,
          width: 3,
          height: 3,
          centerX: 3,
          centerY: 3,
          edgesX: [0, 1, 2, 12, 13, 14],
          edgesY: [0, 1, 2, 12, 13, 14]
        },
        "0003": {
          shape: Shape.RECTANGLE,
          axial: Axial.NORMAL_UP,
          width: 2,
          height: 1,
          centerX: 2,
          centerY: 1,
          edgesX: [0, 1, 4, 5],
          edgesY: [0, 8]
        },
        "0011": {
          shape: Shape.RECTANGLE,
          axial: Axial.NORMAL_UP,
          width: 1,
          height: 2,
          centerX: 1,
          centerY: 2,
          edgesX: [0, 8],
          edgesY: [0, 1, 4, 5]
        },
        "0007": {
          shape: Shape.RECTANGLE,
          axial: Axial.NORMAL_UP,
          width: 3,
          height: 1,
          centerX: 3,
          centerY: 1,
          edgesX: [0, 1, 2, 4, 5, 6],
          edgesY: [0, 12]
        },
        "0111": {
          shape: Shape.RECTANGLE,
          axial: Axial.NORMAL_UP,
          width: 1,
          height: 3,
          centerX: 1,
          centerY: 3,
          edgesX: [0, 12],
          edgesY: [0, 1, 2, 4, 5, 6]
        },
        "0077": {
          shape: Shape.RECTANGLE,
          axial: Axial.NORMAL_UP,
          width: 3,
          height: 2,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 1, 2, 8, 9, 10],
          edgesY: [0, 1, 12, 13]
        },
        "0333": {
          shape: Shape.RECTANGLE,
          axial: Axial.NORMAL_UP,
          width: 2,
          height: 3,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 1, 12, 13],
          edgesY: [0, 1, 2, 8, 9, 10]
        },
        "0013": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_UP,
          width: 2,
          height: 2,
          centerX: 2,
          centerY: 2,
          edgesX: [0, 1, 5, 8],
          edgesY: [0, 1, 5, 8]
        },
        "0031": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_LEFT,
          width: 2,
          height: 2,
          centerX: 2,
          centerY: 2,
          edgesX: [0, 1, 5, 8],
          edgesY: [0, 1, 5, 8]
        },
        "0032": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_DOWN,
          width: 2,
          height: 2,
          centerX: 2,
          centerY: 2,
          edgesX: [0, 1, 5, 8],
          edgesY: [0, 1, 5, 8]
        },
        "0023": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_RIGHT,
          width: 2,
          height: 2,
          centerX: 2,
          centerY: 2,
          edgesX: [0, 1, 5, 8],
          edgesY: [0, 1, 5, 8]
        },
        "0113": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_UP,
          width: 2,
          height: 3,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 1, 5, 12],
          edgesY: [0, 1, 2, 5, 6, 8]
        },
        "0071": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_LEFT,
          width: 2,
          height: 3,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 1, 5, 12],
          edgesY: [0, 1, 2, 5, 6, 8]
        },
        "0322": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_DOWN,
          width: 2,
          height: 3,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 1, 5, 12],
          edgesY: [0, 1, 2, 5, 6, 8]
        },
        "0047": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_RIGHT,
          width: 2,
          height: 3,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 1, 5, 12],
          edgesY: [0, 1, 2, 5, 6, 8]
        },
        "0223": {
          shape: Shape.L_SHAPE,
          axial: Axial.MIRROR_UP,
          width: 2,
          height: 3,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 1, 5, 12],
          edgesY: [0, 1, 2, 5, 6, 8]
        },
        "0017": {
          shape: Shape.L_SHAPE,
          axial: Axial.MIRROR_LEFT,
          width: 2,
          height: 3,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 1, 5, 12],
          edgesY: [0, 1, 2, 5, 6, 8]
        },
        "0311": {
          shape: Shape.L_SHAPE,
          axial: Axial.MIRROR_DOWN,
          width: 2,
          height: 3,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 1, 5, 12],
          edgesY: [0, 1, 2, 5, 6, 8]
        },
        "0074": {
          shape: Shape.L_SHAPE,
          axial: Axial.MIRROR_RIGHT,
          width: 2,
          height: 3,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 1, 5, 12],
          edgesY: [0, 1, 2, 5, 6, 8]
        },
        "0037": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_UP,
          width: 3,
          height: 2,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 1, 2, 6, 8, 9],
          edgesY: [0, 1, 9, 12]
        },
        "0331": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_LEFT,
          width: 3,
          height: 2,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 1, 2, 6, 8, 9],
          edgesY: [0, 1, 9, 12]
        },
        "0076": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_DOWN,
          width: 3,
          height: 2,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 1, 2, 6, 8, 9],
          edgesY: [0, 1, 9, 12]
        },
        "0233": {
          shape: Shape.L_SHAPE,
          axial: Axial.NORMAL_RIGHT,
          width: 3,
          height: 2,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 1, 2, 6, 8, 9],
          edgesY: [0, 1, 9, 12]
        },
        "0067": {
          shape: Shape.L_SHAPE,
          axial: Axial.MIRROR_UP,
          width: 3,
          height: 2,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 1, 2, 6, 8, 9],
          edgesY: [0, 1, 9, 12]
        },
        "0133": {
          shape: Shape.L_SHAPE,
          axial: Axial.MIRROR_LEFT,
          width: 3,
          height: 2,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 1, 2, 6, 8, 9],
          edgesY: [0, 1, 9, 12]
        },
        "0073": {
          shape: Shape.L_SHAPE,
          axial: Axial.MIRROR_DOWN,
          width: 3,
          height: 2,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 1, 2, 6, 8, 9],
          edgesY: [0, 1, 9, 12]
        },
        "0332": {
          shape: Shape.L_SHAPE,
          axial: Axial.MIRROR_RIGHT,
          width: 3,
          height: 2,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 1, 2, 6, 8, 9],
          edgesY: [0, 1, 9, 12]
        },
        "0027": {
          shape: Shape.T_SHAPE,
          axial: Axial.NORMAL_UP,
          width: 3,
          height: 2,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 1, 2, 4, 6, 9],
          edgesY: [0, 5, 9, 12]
        },
        "0131": {
          shape: Shape.T_SHAPE,
          axial: Axial.NORMAL_LEFT,
          width: 3,
          height: 2,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 1, 2, 4, 6, 9],
          edgesY: [0, 5, 9, 12]
        },
        "0072": {
          shape: Shape.T_SHAPE,
          axial: Axial.NORMAL_DOWN,
          width: 3,
          height: 2,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 1, 2, 4, 6, 9],
          edgesY: [0, 5, 9, 12]
        },
        "0232": {
          shape: Shape.T_SHAPE,
          axial: Axial.NORMAL_RIGHT,
          width: 3,
          height: 2,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 1, 2, 4, 6, 9],
          edgesY: [0, 5, 9, 12]
        },
        "0075": {
          shape: Shape.U_SHAPE,
          axial: Axial.NORMAL_UP,
          width: 3,
          height: 2,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 2, 5, 8, 9, 10],
          edgesY: [0, 1, 4, 8, 12, 13]
        },
        "0323": {
          shape: Shape.U_SHAPE,
          axial: Axial.NORMAL_LEFT,
          width: 3,
          height: 2,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 2, 5, 8, 9, 10],
          edgesY: [0, 1, 4, 8, 12, 13]
        },
        "0057": {
          shape: Shape.U_SHAPE,
          axial: Axial.NORMAL_DOWN,
          width: 3,
          height: 2,
          centerX: 3,
          centerY: 2,
          edgesX: [0, 2, 5, 8, 9, 10],
          edgesY: [0, 1, 4, 8, 12, 13]
        },
        "0313": {
          shape: Shape.U_SHAPE,
          axial: Axial.NORMAL_RIGHT,
          width: 3,
          height: 2,
          centerX: 2,
          centerY: 3,
          edgesX: [0, 2, 5, 8, 9, 10],
          edgesY: [0, 1, 4, 8, 12, 13]
        },
        "0326": {
          shape: Shape.S_SHAPE,
          axial: Axial.NORMAL_UP,
          width: 3,
          height: 3,
          centerX: 3,
          centerY: 3,
          edgesX: [1, 2, 6, 8, 12, 13],
          edgesY: [2, 4, 5, 9, 10, 12]
        },
        "0471": {
          shape: Shape.S_SHAPE,
          axial: Axial.NORMAL_LEFT,
          width: 3,
          height: 3,
          centerX: 3,
          centerY: 3,
          edgesX: [1, 2, 6, 8, 12, 13],
          edgesY: [2, 4, 5, 9, 10, 12]
        },
        "0623": {
          shape: Shape.S_SHAPE,
          axial: Axial.MIRROR_UP,
          width: 3,
          height: 3,
          centerX: 3,
          centerY: 3,
          edgesX: [1, 2, 6, 8, 12, 13],
          edgesY: [2, 4, 5, 9, 10, 12]
        },
        "0174": {
          shape: Shape.S_SHAPE,
          axial: Axial.MIRROR_LEFT,
          width: 3,
          height: 3,
          centerX: 3,
          centerY: 3,
          edgesX: [1, 2, 6, 8, 12, 13],
          edgesY: [2, 4, 5, 9, 10, 12]
        }
      };
      var _ZONE_VECTOR;
      var _dec$v;
      var _dec2$f;
      var _class$v;
      var _descriptor$f;
      var _class3$7;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3f0bfQWDdJOj6GPwtiRTb6B", "Effect", undefined);
      var ccclass$v = _decorator.ccclass;
      var property$f = _decorator.property;
      var ANIMATION_NAME$9;
      var ANIMATION_NEAR_WIN;
      var ANIMATION_LINE;
      var FLY_END;
      !function (e) {
        e.FX_Fly_N = "FX_Fly_N";
      }(ANIMATION_NAME$9 || (ANIMATION_NAME$9 = {}));
      (function (e) {
        e.Start = "Start";
        e.Loop = "Loop";
        e.End = "End";
      })(ANIMATION_NEAR_WIN || (ANIMATION_NEAR_WIN = {}));
      (function (e) {
        e.Loop = "Loop";
      })(ANIMATION_LINE || (ANIMATION_LINE = {}));
      (function (e) {
        e[e.MG = 0] = "MG";
        e[e.FG_DOWN = 1] = "FG_DOWN";
        e[e.FG_UP = 2] = "FG_UP";
      })(FLY_END || (FLY_END = {}));
      var Area_Type$1;
      var Area_Type_Skin$1;
      !function (e) {
        e[e.O = 1] = "O";
        e[e.B = 2] = "B";
        e[e.G = 3] = "G";
        e[e.P = 4] = "P";
      }(Area_Type$1 || (Area_Type$1 = {}));
      (function (e) {
        e.O = "O";
        e.B = "B";
        e.G = "G";
        e.P = "P";
      })(Area_Type_Skin$1 || (Area_Type_Skin$1 = {}));
      _ZONE_VECTOR = {
        0: {
          x: -1,
          y: 1
        },
        1: {
          x: 1,
          y: 1
        },
        2: {
          x: -1,
          y: -1
        },
        3: {
          x: 1,
          y: -1
        }
      };
      _dec$v = ccclass$v("Effect");
      _dec2$f = property$f({
        type: Node,
        tooltip: "reelMask"
      });
      _class3$7 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_reelMask", _descriptor$f, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_scFlyPoss = [new Vec2(-186, 165), new Vec2(-30, 165), new Vec2(119, 165)];
          t.m_scFlyOffsets = [[new Vec2(0, 0), new Vec2(70, 70), new Vec2(70, 70), new Vec2(70, 70), new Vec2(70, 70)], [new Vec2(-35, 70), new Vec2(0, 0), new Vec2(35, 0), new Vec2(70, 35), new Vec2(70, 70)], [new Vec2(-35, 70), new Vec2(-35, 70), new Vec2(-17.5, 35), new Vec2(0, 0), new Vec2(70, 35)]];
          t.m_effect = [];
          t.m_scs = [];
          t.m_scNums = [];
          t.m_ns = [];
          t.m_reels = [];
          t.m_nFlyEndPos = [new Vec2(-190, 190), new Vec2(-190, 190), new Vec2(-190, 180)];
          t.m_nearWins = [];
          t.m_allLines = [false, false, false, false];
          t.m_rlLines = [];
          t.m_udLines = [];
          t.m_boardNodes = [];
          t.m_boardSprites = [];
          t.m_zoneNode = null;
          t.m_zoneScale = new Vec3(2.3, 2, 0);
          t.m_soundCollect01 = 0;
          t.m_isSoundCollect01 = false;
          t.m_isSoundCollect03 = false;
          t.m_isNearSound = false;
          t.m_nearSound = 0;
          t.m_isLineSound = false;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          if (!this.node.getComponent(Mask)) {
            this.node.addComponent(Mask);
          }
          this.node.getComponent(Mask).enabled = false;
          if (this.m_reelMask.length > 0) {
            this.m_zoneNode = new Node("ZONE");
            this.m_zoneNode.setScale(this.m_zoneScale);
            this.node.insertChild(this.m_zoneNode, 0);
            node$3.SetZIndex(this.m_zoneNode, 0);
          }
        };
        n.GetBezierPosition = function (e, t, n, i) {
          var r = (1 - e) * (1 - e) * t.x + 2 * (1 - e) * e * n.x + e * e * i.x;
          var o = (1 - e) * (1 - e) * t.y + 2 * (1 - e) * e * n.y + e * e * i.y;
          return new Vec2(r, o);
        };
        n.GetScAngle = function (e, n, i, r, o, a, s, l) {
          var c = o.x - n.x;
          var u = Math.abs(o.x - n.x) / a.width;
          var m = Game_Define.SC_FLY_SETTING.RotationSpeed;
          if (i.y > r.y) {
            m = Game_Define.SC_FLY_SETTING.RotationHighSpeed;
          }
          if (e === Game_Define.MgSlotReel.col - 1 && l === Game_Define.Symbol.SYMBOL_P && 0 === s) {
            s = Game_Define.SC_FLY_SETTING.FinalColAngle;
          }
          var _ = s;
          var p = t.ScAngle.U;
          if (2 === e && l === Game_Define.Symbol.SYMBOL_R) {
            if ((_ += m) > (p = t.ScAngle.U)) {
              _ = p;
            }
          } else if (c > 0) {
            if ((_ -= m) < (p = u < Game_Define.SC_FLY_SETTING.Threshold ? t.ScAngle.R_U : t.ScAngle.R)) {
              _ = p;
            }
          } else if (c < 0 && (_ += m) > (p = u < Game_Define.SC_FLY_SETTING.Threshold ? t.ScAngle.L_U : t.ScAngle.L)) {
            _ = p;
          }
          return _;
        };
        n.GetFirecrackerPos = function (e, n) {
          var i = 0;
          switch (n) {
            case Game_Define.Symbol.SYMBOL_P:
              i = t.ScFly.P;
              break;
            case Game_Define.Symbol.SYMBOL_R:
              i = t.ScFly.R;
              break;
            case Game_Define.Symbol.SYMBOL_G:
              i = t.ScFly.G;
          }
          var r = this.m_scFlyPoss[i].clone();
          r.x += this.m_scFlyOffsets[i][e].x;
          r.y += this.m_scFlyOffsets[i][e].y;
          return r;
        };
        n.GetMid = function (e, t, n, i, r) {
          var o = (n.x - t.x) / 2;
          var a = (n.y - t.y) / 2;
          var s = t.x + o;
          var l = t.y + a;
          switch (e) {
            case 0:
              if (!(i !== Game_Define.Symbol.SYMBOL_R && i !== Game_Define.Symbol.SYMBOL_G)) {
                l += r.height;
              }
              break;
            case 1:
              if (i === Game_Define.Symbol.SYMBOL_G) {
                l += r.height;
              }
              break;
            case 2:
              if (!(i !== Game_Define.Symbol.SYMBOL_P && i !== Game_Define.Symbol.SYMBOL_G)) {
                l += r.height;
              }
              break;
            case 3:
              if (i === Game_Define.Symbol.SYMBOL_P) {
                l += r.height;
              }
              break;
            case 4:
              if (!(i !== Game_Define.Symbol.SYMBOL_R && i !== Game_Define.Symbol.SYMBOL_P)) {
                l += r.height;
              }
          }
          return new Vec2(s, l);
        };
        n.ShowMgSC = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, r, o, a) {
            var s;
            var l;
            var c;
            var u;
            var m;
            var _;
            var p;
            var h;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    s = n;
                    l = i[t].Col;
                    c = l[s].Symbol ? l[s].Symbol : 0;
                    u = NodePool.GetInstance().GetRocketEffect();
                    this.node.addChild(u);
                    u.setPosition(r);
                    NodePool.GetInstance().SetRocketEffectNode(u, c);
                    this.SetZindex(u, t, s, 300);
                    m = l[s].JPState ? l[s].JPState : 0;
                    _ = l[s].Number ? l[s].Number : 0;
                    p = NodePool.GetInstance().GetRocketNumEffect();
                    this.node.addChild(p);
                    p.setPosition(r);
                    NodePool.GetInstance().SetRocketNumEffectNode(p, c, m, _);
                    this.SetZindex(p, t, s, 400);
                    this.m_gameView.Character.ShowNearWin(c);
                    h = u.getComponent(SymbolEffect);
                    e.next = 20;
                    return h.ShowRPGStop();
                  case 20:
                    a.getComponent(SymbolEffect).ShowRPGBottmLoop();
                    if (!this.m_isSoundCollect01) {
                      this.m_isSoundCollect01 = true;
                      this.m_soundCollect01 = node$5.Play(Game_Define.AudioClips.MG_scatter_collect_01, true);
                    }
                    this.m_scs.push({
                      col: t,
                      rocketEffect: u,
                      symbolIndex: c,
                      symbolSize: o
                    });
                    this.m_scNums.push(p);
                  case 25:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, r, o, a) {
            return e.apply(this, arguments);
          };
        }();
        n.ShowMgWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, r) {
            var o;
            var a;
            var s;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    o = n;
                    a = NodePool.GetInstance().GetEffectNode(r);
                    this.node.addChild(a);
                    a.setPosition(i);
                    this.SetZindex(a, t, o, 300);
                    this.m_effect.push(a);
                    s = a.getComponent(SymbolEffect);
                    e.next = 10;
                    return s.ShowWin();
                  case 10:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, r) {
            return e.apply(this, arguments);
          };
        }();
        n.ShowMgWinEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    for (t = 0; t < this.m_effect.length; t++) {
                      if (n = this.m_effect[t]) {
                        n.removeFromParent();
                        NodePool.GetInstance().ReturnEffect(n);
                      }
                    }
                    this.m_effect = [];
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
        n.ShowMgScFly = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            var r;
            var o;
            var a;
            var s;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_scs.length > 0) {
                      node$5.Stop(this.m_soundCollect01);
                      this.m_isSoundCollect01 = false;
                      node$5.Play(Game_Define.AudioClips.MG_scatter_collect_02);
                      this.m_isSoundCollect03 = null;
                    }
                    t = new Array();
                    for (n = 0; n < this.m_scs.length; n++) {
                      i = this.m_scs[n];
                      t.push(this.PlayMgScFly(i.col, i.rocketEffect, i.symbolIndex, i.symbolSize));
                    }
                    e.next = 5;
                    return Promise.all(t);
                  case 5:
                    for (r = 0; r < this.m_scs.length; r++) {
                      (o = this.m_scs[r]).rocketEffect.removeFromParent();
                      o.rocketEffect.angle = 0;
                      NodePool.GetInstance().ReturnRocketEffect(o.rocketEffect);
                    }
                    this.m_scs = [];
                    for (a = 0; a < this.m_scNums.length; a++) {
                      (s = this.m_scNums[a]).removeFromParent();
                      NodePool.GetInstance().ReturnRocketNumEffect(s);
                    }
                    this.m_scNums = [];
                  case 9:
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
        n.PlayMgScFly = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, r) {
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      var a = new Vec2(n.getPosition().x, n.getPosition().y);
                      var s = o.GetFirecrackerPos(t, i).clone();
                      var l = o.GetMid(t, a.clone(), s.clone(), i, r);
                      var c = s.clone();
                      tween({
                        value: 0
                      }).to(Game_Define.SC_FLY.Fly, {
                        value: 1
                      }, {
                        easing: "sineIn",
                        progress: function (e, u, m, _) {
                          var p = o.GetBezierPosition(_, a.clone(), l.clone(), c.clone());
                          n.setPosition(p.x, p.y, 1);
                          var h = o.GetScAngle(t, a.clone(), p.clone(), l.clone(), s.clone(), r, n.angle, i);
                          n.angle = h;
                          return _;
                        }
                      }).call(function () {
                        if (!o.m_isSoundCollect03) {
                          o.m_isSoundCollect03 = true;
                          node$5.Play(Game_Define.AudioClips.MG_scatter_collect_03);
                        }
                        n.getComponent(SymbolEffect).ShowRPGEnd();
                      }).to(Game_Define.SC_FLY.FlyEnd, {
                        value: 1
                      }).call(function () {
                        e();
                      }).start();
                      tween(n).to(Game_Define.SC_FLY.ScaleMax, {
                        scale: new Vec3(1.3, 1.3, 1.3)
                      }).to(Game_Define.SC_FLY.ScaleFinal, {
                        scale: new Vec3(.7, .7, .7)
                      }, {
                        easing: "sineIn"
                      }).to(Game_Define.SC_FLY.ScaleEnd, {
                        scale: new Vec3(1, 1, 1)
                      }, {
                        easing: "sineIn"
                      }).start();
                    }));
                  case 1:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }));
          return function (t, n, i, r) {
            return e.apply(this, arguments);
          };
        }();
        n.SetZindex = function (e, t, n, i) {
          var r = t * Game_Define.MgSlotReel.col + n + i;
          node$3.SetZIndex(e, r + 200);
        };
        n.ShowFgInScaling = function (e, t, n, i, r, o, a) {
          var s = this;
          if (undefined === r) {
            r = null;
          }
          if (undefined === o) {
            o = null;
          }
          if (undefined === a) {
            a = true;
          }
          return new Promise(function (l) {
            s.node.active = true;
            s.m_rlLines = [];
            s.m_udLines = [];
            s.m_nearWins = [];
            var c = NodePool.GetInstance().GetEffectNode(i);
            s.node.addChild(c);
            c.setPosition(n);
            NodePool.GetInstance().SetEffectNode(c, i, r, o);
            var u = e * Game_Define.FgSlotReel.row + t;
            s.m_ns[u] = c;
            s.SetGoldZindex();
            var m = c.getComponent(SymbolEffect);
            m.ShowNgoldIdle();
            if (a) {
              var _ = c.getComponent(UIOpacity);
              _.opacity = 0;
              tween(_).to(Game_Define.Time.EffectFgInit, {
                opacity: 255
              }).call(function () {
                m.ShowNgoldLoop();
                l();
              }).start();
            } else {
              m.ShowNgoldLoop();
              l();
            }
          });
        };
        n.ShowFgBounce = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, r) {
            var o;
            var a;
            var s;
            var l;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    node$5.Play(Game_Define.AudioClips.FG_COIN_01);
                    o = t * Game_Define.FgSlotReel.row + n;
                    a = this.m_ns[o];
                    s = NodePool.GetInstance().GetPFlyEffect();
                    this.node.addChild(s);
                    node$3.SetZIndex(s, 600);
                    s.setPosition(a.getPosition());
                    l = s.getComponent(SymbolEffect);
                    e.next = 11;
                    return l.ShowPgoldFly(t, n, a.getPosition(), i, false, r);
                  case 11:
                    s.removeFromParent();
                    NodePool.GetInstance().ReturnPFlyEffect(s);
                  case 13:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, r) {
            return e.apply(this, arguments);
          };
        }();
        n.ShowFgGold = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, r, o, a) {
            var s;
            var l;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === r) {
                      r = null;
                    }
                    if (undefined === o) {
                      o = null;
                    }
                    if (undefined === a) {
                      a = null;
                    }
                    this.node.active = true;
                    s = NodePool.GetInstance().GetEffectNode(i);
                    this.node.addChild(s);
                    s.setPosition(n);
                    NodePool.GetInstance().SetEffectNode(s, i, o, r, a);
                    this.m_ns[t] = s;
                    this.SetGoldZindex();
                    l = s.getComponent(SymbolEffect);
                    e.next = 13;
                    return l.ShowNgoldStop();
                  case 13:
                    if (this.m_nearWins[t]) {
                      this.PlayNearWinStop(t);
                    }
                  case 14:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, r, o, a) {
            return e.apply(this, arguments);
          };
        }();
        n.ShowLeaveFgWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, r) {
            var o;
            var a;
            var s;
            var l;
            var c;
            var u;
            var m;
            var _;
            var p;
            var h;
            var f;
            var d;
            var y;
            var S;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === r) {
                      r = 0;
                    }
                    o = this.m_gameView.SpinAck.RoundQueue[Game_Define.Round].RedFGRemainNums;
                    a = this.m_gameView.SpinAck.FreeRedData[r].FgMultiplyDataVec;
                    s = 0;
                  case 4:
                    if (!(s < Game_Define.FgSlotReel.row)) {
                      e.next = 51;
                      break;
                    }
                    l = 0;
                  case 6:
                    if (!(l < Game_Define.FgSlotReel.col)) {
                      e.next = 48;
                      break;
                    }
                    c = l * Game_Define.FgSlotReel.row + s;
                    if (!(u = this.m_ns[c])) {
                      e.next = 45;
                      break;
                    }
                    m = false;
                    _ = 1;
                    p = 0;
                  case 13:
                    if (!(p < a.length)) {
                      e.next = 28;
                      break;
                    }
                    h = 0;
                  case 15:
                    if (!(h < a[p].PosVec.length)) {
                      e.next = 23;
                      break;
                    }
                    if (a[p].PosVec[h] != c || 0 != o[p + 4 * r]) {
                      e.next = 20;
                      break;
                    }
                    m = true;
                    _ = a[p].Multiplier;
                    return e.abrupt("break", 23);
                  case 20:
                    h++;
                    e.next = 15;
                    break;
                  case 23:
                    if (!m) {
                      e.next = 25;
                      break;
                    }
                    return e.abrupt("break", 28);
                  case 25:
                    p++;
                    e.next = 13;
                    break;
                  case 28:
                    if (!((f = t.CSP[l].Col[s]).JPState > 2)) {
                      e.next = 39;
                      break;
                    }
                    if (!m) {
                      e.next = 35;
                      break;
                    }
                    e.next = 33;
                    return this.m_gameView.JpCompliment.ShowJpMultiplyCompliment(f.Number, _, f.JPState);
                  case 33:
                    e.next = 37;
                    break;
                  case 35:
                    e.next = 37;
                    return this.m_gameView.JpCompliment.ShowJpCompliment(f.Number, f.JPState);
                  case 37:
                    e.next = 39;
                    return this.m_gameView.JpCompliment.ShowJpComplimentEnd();
                  case 39:
                    (d = u.getComponent(SymbolEffect)).ShowNgoldEnd();
                    y = new Vec2(u.getPosition().x, u.getPosition().y);
                    S = this.m_nFlyEndPos[i].clone();
                    e.next = 45;
                    return this.PlayLeaveFgWin(d.GetFgWin(), l, y, S, n);
                  case 45:
                    l++;
                    e.next = 6;
                    break;
                  case 48:
                    s++;
                    e.next = 4;
                    break;
                  case 51:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, r) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayLeaveFgWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, r, o) {
            var a = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      node$5.Play(Game_Define.AudioClips.scatter_add_fly);
                      a.node.addChild(o);
                      o.active = true;
                      var c = a.GetGoldFlyMid(n, i.clone(), r.clone());
                      var u = r.clone();
                      tween({
                        value: 0
                      }).to(Game_Define.N_FLY.Fly, {
                        value: 1
                      }, {
                        easing: "sineIn",
                        progress: function (e, t, n, i) {
                          var r = a.GetBezierPosition(i, i.clone(), c.clone(), u.clone());
                          o.setPosition(r.x, r.y, 1);
                          return i;
                        }
                      }).call(function () {
                        var n = o.getComponent(Animation);
                        n.once(Animation.EventType.FINISHED, function () {
                          o.active = false;
                          o.removeFromParent();
                          e();
                        });
                        n.play(ANIMATION_NAME$9.FX_Fly_N);
                        node$5.Play(Game_Define.AudioClips.scatter_add_end);
                        a.m_gameView.Effect.ShowGoldFlyEndWin(a.node.name, t);
                      }).start();
                    }));
                  case 1:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }));
          return function (t, n, i, r, o) {
            return e.apply(this, arguments);
          };
        }();
        n.GetGoldFlyMid = function (e, t, n) {
          var i = (n.x - t.x) / 2;
          var r = (n.y - t.y) / 2;
          var o = t.x + i;
          var a = t.y + r;
          if (e > 0) {
            o += 100;
          } else {
            o -= 100;
          }
          return new Vec2(o, a);
        };
        n.ClearFgGold = function () {
          for (var e = 0; e < this.m_ns.length; e++) {
            var t = this.m_ns[e];
            if (t) {
              t.removeFromParent();
              NodePool.GetInstance().ReturnEffect(t);
            }
          }
          this.m_ns = [];
          for (var n = 0; n < this.m_reels.length; n++) {
            var i = this.m_reels[n];
            if (i) {
              i.removeFromParent();
            }
          }
          this.m_reels = [];
        };
        n.ShowGoldInReel = function (e, t, n, i) {
          for (var r = 0; r < this.m_reelMask.length; r++) {
            if (e === this.m_reelMask[r].name) {
              if (!this.m_reels[t]) {
                var o = new Node("Reel_" + t);
                this.m_reelMask[r].addChild(o);
                o.setPosition(n);
                if (!o.getComponent(UITransform)) {
                  o.addComponent(UITransform);
                }
                var a = new Size(110, 100);
                o.getComponent(UITransform).setContentSize(a);
                this.m_reels[t] = o;
              }
              this.m_reels[t].insertChild(i, 0);
            }
          }
        };
        n.SetGoldZindex = function () {
          for (var e = 0; e < this.m_ns.length; e++) {
            if (this.m_ns[e]) {
              this.m_ns[e].getComponent(SymbolEffect).test();
              node$3.SetZIndex(this.m_ns[e], e + 200);
            }
          }
        };
        n.ClearNearWinSound = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_nearSound = null;
                    this.m_isNearSound = false;
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
        n.GetNearWinSoundIsPlay = function () {
          return this.m_isNearSound;
        };
        n.SetIsClickStopBtn = function () {
          if (this.m_nearSound) {
            node$5.Stop(this.m_nearSound);
          }
        };
        n.ShowNearWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var r;
            var o;
            var a;
            var s;
            var l;
            var c;
            var u;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    r = -1;
                    o = t[0].PosVec;
                    for (a = 0; a < o.length; a++) {
                      s = o[a];
                      if (!this.m_ns[s]) {
                        r = s;
                      }
                    }
                    if (this.m_nearWins[r]) {
                      e.next = 16;
                      break;
                    }
                    this.m_isNearSound = true;
                    if (!n && i) {
                      this.m_nearSound = node$5.Play(Game_Define.AudioClips.FG_near);
                    }
                    l = NodePool.GetInstance().GetNearWinEffect();
                    this.node.addChild(l);
                    c = this.m_gameView.SinglePlateMgr.GetPosition(r);
                    l.setPosition(c);
                    this.m_nearWins[r] = l;
                    this.SetNearWinZindex();
                    u = l.getComponentInChildren(sp.Skeleton);
                    e.next = 15;
                    return SpineKit.PlayAnimation(u, ANIMATION_NEAR_WIN.Start);
                  case 15:
                    SpineKit.PlayAnimation(u, ANIMATION_NEAR_WIN.Loop, true);
                  case 16:
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
        n.PlayNearWinStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = this.m_nearWins[t];
                    i = n.getComponentInChildren(sp.Skeleton);
                    e.next = 4;
                    return SpineKit.PlayAnimation(i, ANIMATION_NEAR_WIN.End);
                  case 4:
                    this.m_nearWins[t] = null;
                    n.removeFromParent();
                    NodePool.GetInstance().ReturnNearWinEffect(n);
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
        n.ClearNearWin = function () {
          for (var e = 0; e < this.m_nearWins.length; e++) {
            var t = this.m_nearWins[e];
            if (t) {
              t.removeFromParent();
              NodePool.GetInstance().ReturnNearWinEffect(t);
            }
          }
          this.m_nearWins = [];
        };
        n.SetNearWinZindex = function () {
          for (var e = 0; e < this.m_nearWins.length; e++) {
            if (this.m_nearWins[e]) {
              node$3.SetZIndex(this.m_nearWins[e], e + 600);
            }
          }
        };
        n.ClearLineSound = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_isLineSound = false;
                  case 1:
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
        n.GetLineSoundIsPlay = function () {
          return this.m_isLineSound;
        };
        n.ShowAllLine = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var r;
            var o;
            var a;
            var s;
            var l;
            var c;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    r = 0;
                  case 1:
                    if (!(r < t.length)) {
                      e.next = 18;
                      break;
                    }
                    o = true;
                    a = t[r].PosVec;
                    s = t[r].AreaType;
                    l = 0;
                  case 6:
                    if (!(l < a.length)) {
                      e.next = 14;
                      break;
                    }
                    c = a[l];
                    if (this.m_ns[c]) {
                      e.next = 11;
                      break;
                    }
                    o = false;
                    return e.abrupt("break", 14);
                  case 11:
                    l++;
                    e.next = 6;
                    break;
                  case 14:
                    if (o && !this.m_allLines[s - 1]) {
                      if (!(n || this.m_isLineSound || !i)) {
                        this.m_isLineSound = true;
                        node$5.Play(Game_Define.AudioClips.FG_RED_FALL);
                      }
                      this.PlayAllLine(a, t[r].AreaType);
                    }
                  case 15:
                    r++;
                    e.next = 1;
                    break;
                  case 18:
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
        n.PlayAllLine = function (e, n) {
          var i = [];
          for (var r = 0; r < Game_Define.ROW; r++) {
            var o = [];
            for (var a = 0; a <= Game_Define.COL; a++) {
              o.push(null);
            }
            i.push(o);
          }
          var s = [];
          for (var l = 0; l < Game_Define.COL; l++) {
            var c = [];
            for (var u = 0; u <= Game_Define.ROW; u++) {
              c.push(null);
            }
            s.push(c);
          }
          for (var m = 0; m < e.length; m++) {
            var _ = Math.floor(e[m] / Game_Define.ROW);
            var p = Math.floor(e[m] % Game_Define.ROW);
            var h = this.m_gameView.SinglePlateMgr.GetPosition(e[m]);
            var f = _;
            var d = node$3.plus(_, 1);
            i[p][f] = this.GetLinePos(i, p, f, h, t.Line.L);
            i[p][d] = this.GetLinePos(i, p, d, h, t.Line.R);
            var y = p;
            var S = node$3.plus(p, 1);
            s[_][y] = this.GetLinePos(s, _, y, h, t.Line.U);
            s[_][S] = this.GetLinePos(s, _, S, h, t.Line.D);
          }
          this.PlayLineAddChild(i, true, n);
          this.PlayLineAddChild(s, false, n);
        };
        n.GetLinePos = function (e, n, i, r, o) {
          if (null !== e[n][i]) {
            return null;
          }
          var a = new Vec3(r.x, r.y, r.z);
          switch (o) {
            case t.Line.L:
              a.x -= 60;
              break;
            case t.Line.R:
              a.x += 60;
              break;
            case t.Line.U:
              a.y += 50;
              break;
            case t.Line.D:
              a.y -= 50;
          }
          return a;
        };
        n.PlayLineAddChild = function (e, t, n) {
          for (var i = 0; i < e.length; i++) {
            for (var r = 0; r < e[i].length; r++) {
              if (e[i][r]) {
                var o = null;
                o = t ? NodePool.GetInstance().GetColLine() : NodePool.GetInstance().GetRowLine();
                this.node.addChild(o);
                this.PlayLineAnime(o, n);
                o.setPosition(e[i][r]);
                if (t) {
                  if (!this.m_rlLines[n]) {
                    this.m_rlLines[n] = [];
                  }
                  this.m_rlLines[n].push(o);
                  this.SetLineZindex(this.m_rlLines);
                } else {
                  if (!this.m_udLines[n]) {
                    this.m_udLines[n] = [];
                  }
                  this.m_udLines[n].push(o);
                  this.SetLineZindex(this.m_udLines);
                }
              }
            }
          }
        };
        n.PlayLineAnime = function (e, t) {
          var n = null;
          n = e.getComponentInChildren(sp.Skeleton) ? e.getComponentInChildren(sp.Skeleton) : e.getComponent(sp.Skeleton);
          switch (t) {
            case Area_Type$1.O:
              n.setSkin(Area_Type_Skin$1.O);
              break;
            case Area_Type$1.B:
              n.setSkin(Area_Type_Skin$1.B);
              break;
            case Area_Type$1.G:
              n.setSkin(Area_Type_Skin$1.G);
              break;
            case Area_Type$1.P:
              n.setSkin(Area_Type_Skin$1.P);
          }
          SpineKit.PlayAnimation(n, ANIMATION_LINE.Loop, true);
        };
        n.ClearAreaTypeLine = function (e) {
          for (var t = 0; t < this.m_rlLines[e].length; t++) {
            if (this.m_rlLines[e][t]) {
              this.m_rlLines[e][t].removeFromParent();
              NodePool.GetInstance().ReturnColLine(this.m_rlLines[e][t]);
            }
          }
          this.m_rlLines[e] = [];
          for (var n = 0; n < this.m_udLines[e].length; n++) {
            if (this.m_udLines[e][n]) {
              this.m_udLines[e][n].removeFromParent();
              NodePool.GetInstance().ReturnRowLine(this.m_udLines[e][n]);
            }
          }
          this.m_udLines[e] = [];
        };
        n.ClearLine = function () {
          for (var e = 0; e < this.m_rlLines.length; e++) {
            if (this.m_rlLines[e]) {
              for (var t = 0; t < this.m_rlLines[e].length; t++) {
                if (this.m_rlLines[e][t]) {
                  this.m_rlLines[e][t].removeFromParent();
                  NodePool.GetInstance().ReturnColLine(this.m_rlLines[e][t]);
                }
              }
            }
          }
          this.m_rlLines = [];
          for (var n = 0; n < this.m_udLines.length; n++) {
            if (this.m_udLines[n]) {
              for (var i = 0; i < this.m_udLines[n].length; i++) {
                if (this.m_udLines[n][i]) {
                  this.m_udLines[n][i].removeFromParent();
                  NodePool.GetInstance().ReturnRowLine(this.m_udLines[n][i]);
                }
              }
            }
          }
          this.m_udLines = [];
          this.m_allLines = [false, false, false, false];
        };
        n.SetLineZindex = function (e) {
          for (var t = 0; t < e.length; t++) {
            if (e[t]) {
              for (var n = 0; n < e[t].length; n++) {
                if (e[t][n]) {
                  node$3.SetZIndex(e[t][n], t + n + 500);
                }
              }
            }
          }
        };
        n.ShowZone = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var r;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!Game_Define.isGetR) {
                      e.next = 11;
                      break;
                    }
                    r = 0;
                  case 2:
                    if (!(r < n.length)) {
                      e.next = 11;
                      break;
                    }
                    o = this.GetZoneInfo(t, n[r].AreaType);
                    this.CreateZoneBoard(n[r].AreaType, o, i);
                    if (!i) {
                      e.next = 8;
                      break;
                    }
                    e.next = 8;
                    return this.PlayFadeInZone(n[r].AreaType);
                  case 8:
                    r++;
                    e.next = 2;
                    break;
                  case 11:
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
        n.GetZoneInfo = function (e, t) {
          var n = [];
          for (var i = 0; i < e[0].Col.length; i++) {
            if (!n[i]) {
              n[i] = [];
            }
            for (var r = 0; r < e.length; r++) {
              n[i].push(e[r].Col[i]);
            }
          }
          var o = [];
          var a = [];
          for (var s = 0; s < n.length; s++) {
            for (var l = 0; l < n[s].length; l++) {
              if (n[s][l] == t) {
                o.push(s);
                a.push(l);
              }
            }
          }
          var c = Math.min.apply(Math, o);
          var u = Math.max.apply(Math, o);
          var m = Math.min.apply(Math, a);
          var _ = Math.max.apply(Math, a);
          var p = n.slice(c, u + 1).map(function (e) {
            return e.slice(m, _ + 1);
          });
          var h = new Array(4).fill(0).map(function (e, n) {
            var i;
            var r = null == p || null == (i = p[n]) ? undefined : i.reduce(function (e, n, i) {
              return e | (n == t ? 1 : 0) << i;
            }, 0);
            return (null != r ? r : 0).toString(16);
          }).reverse().join("");
          return CONFIG_MAP[h];
        };
        n.CreateZoneBoard = function (e, t, n) {
          var i = e - 1;
          if (isValid(this.m_boardNodes[i], true)) {
            var r = this.m_boardNodes[i];
            this.m_zoneNode.addChild(r);
          } else {
            var o = new Node("ZONE_" + e);
            this.m_zoneNode.addChild(o);
            var a = o.addComponent(Sprite);
            a.sizeMode = Sprite.SizeMode.CUSTOM;
            a.type = Sprite.Type.SLICED;
            a.trim = false;
            if (!o.getComponent(UIOpacity)) {
              o.addComponent(UIOpacity);
            }
            this.m_boardNodes[i] = o;
            this.m_boardSprites[i] = a;
          }
          this.m_boardNodes[i].getComponent(UIOpacity).opacity = n ? 0 : 255;
          this.ApplyZoneTransform(this.m_boardNodes[i], i, t);
          this.ApplyZoneImage(this.m_boardSprites[i], t, e);
        };
        n.ApplyZoneTransform = function (e, t, n) {
          var i;
          var r;
          var o;
          var a;
          var s;
          var l;
          var c;
          var u;
          var m;
          var _ = null != (i = null == n ? undefined : n.axial) ? i : Axial.NORMAL_UP;
          var p = null != (r = null == n ? undefined : n.width) ? r : 0;
          var h = null != (o = null == n ? undefined : n.height) ? o : 0;
          var f = null != (a = null == n ? undefined : n.centerX) ? a : 0;
          var d = null != (s = null == n ? undefined : n.centerY) ? s : 0;
          var y = null != (l = null == (c = _ZONE_VECTOR[t]) ? undefined : c.x) ? l : 0;
          var S = null != (u = null == (m = _ZONE_VECTOR[t]) ? undefined : m.y) ? u : 0;
          var g = new Size(p * 50, h * 50);
          e.getComponent(UITransform).setContentSize(g);
          var b = new Vec3(.5 * (5 - f) * 50 * y, .5 * (3 - d) * 50 * S);
          e.setPosition(b);
          switch (_) {
            case Axial.NORMAL_UP:
              e.angle = 0;
              e.setScale(new Vec3(1, e.scale.y, e.scale.z));
              break;
            case Axial.NORMAL_LEFT:
              e.angle = 90;
              e.setScale(new Vec3(1, e.scale.y, e.scale.z));
              break;
            case Axial.NORMAL_DOWN:
              e.angle = 180;
              e.setScale(new Vec3(1, e.scale.y, e.scale.z));
              break;
            case Axial.NORMAL_RIGHT:
              e.angle = 270;
              e.setScale(new Vec3(1, e.scale.y, e.scale.z));
              break;
            case Axial.MIRROR_UP:
              e.angle = 0;
              e.setScale(new Vec3(-1, e.scale.y, e.scale.z));
              break;
            case Axial.MIRROR_LEFT:
              e.angle = 90;
              e.setScale(new Vec3(-1, e.scale.y, e.scale.z));
              break;
            case Axial.MIRROR_DOWN:
              e.angle = 180;
              e.setScale(new Vec3(-1, e.scale.y, e.scale.z));
              break;
            case Axial.MIRROR_RIGHT:
              e.angle = 270;
              e.setScale(new Vec3(-1, e.scale.y, e.scale.z));
              break;
            default:
              e.angle = 0;
              e.setScale(new Vec3(1, e.scale.y, e.scale.z));
          }
        };
        n.ApplyZoneImage = function (e, t, n) {
          var i = null;
          switch (null == t ? undefined : t.shape) {
            case Shape.RECTANGLE:
              i = this.m_gameView.Effect.RShape;
              break;
            case Shape.L_SHAPE:
              i = this.m_gameView.Effect.LShape;
              break;
            case Shape.T_SHAPE:
              i = this.m_gameView.Effect.TShape;
              break;
            case Shape.U_SHAPE:
              i = this.m_gameView.Effect.UShape;
              break;
            case Shape.S_SHAPE:
              i = this.m_gameView.Effect.SShape;
          }
          if (isValid(e, true)) {
            e.spriteFrame = i[n - 1];
          }
        };
        n.PlayFadeInZone = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function (e) {
                      var i = t - 1;
                      var r = n.m_boardNodes[i].getComponent(UIOpacity);
                      r.opacity = 0;
                      tween(r).to(Game_Define.Time.ZoneFadeIn, {
                        opacity: 255
                      }).call(function () {
                        e();
                      }).start();
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
        n.CloseZone = function () {
          if (this.m_zoneNode) {
            this.m_zoneNode.removeAllChildren();
          }
        };
        n.ShowZoneWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var r;
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = _regeneratorRuntime().mark(function e(i) {
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
                              r = true;
                              a = t[i].PosVec;
                              s = t[i].AreaType;
                              l = t[i].Multiplier;
                              c = 0;
                            case 5:
                              if (!(c < a.length)) {
                                e.next = 13;
                                break;
                              }
                              u = a[c];
                              if (o.m_ns[u]) {
                                e.next = 10;
                                break;
                              }
                              r = false;
                              return e.abrupt("break", 13);
                            case 10:
                              c++;
                              e.next = 5;
                              break;
                            case 13:
                              if (!r || o.m_allLines[s - 1]) {
                                e.next = 23;
                                break;
                              }
                              o.m_allLines[s - 1] = true;
                              if (!n) {
                                e.next = 22;
                                break;
                              }
                              e.next = 18;
                              return o.PlayZoneWin(a, s, l, function () {
                                o.PlayZoneMultiply(a, l, n);
                              });
                            case 18:
                              e.next = 20;
                              return node$2.Wait(o, 1);
                            case 20:
                              e.next = 23;
                              break;
                            case 22:
                              o.PlayZoneMultiply(a, l, n);
                            case 23:
                            case "end":
                              return e.stop();
                          }
                        }
                      }, e);
                    });
                    r = 0;
                  case 2:
                    if (!(r < t.length)) {
                      e.next = 7;
                      break;
                    }
                    return e.delegateYield(i(r), "t0", 4);
                  case 4:
                    r++;
                    e.next = 2;
                    break;
                  case 7:
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
        n.PlayZoneWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, r) {
            var o;
            var a;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    o = NodePool.GetInstance().GetBonus();
                    this.node.addChild(o.coin.node);
                    this.node.addChild(o.num.node);
                    node$3.SetZIndex(o.coin.node, 700);
                    node$3.SetZIndex(o.num.node, 750);
                    this.PlayZoneMultiplierPos(o.coin.node, t);
                    this.PlayZoneMultiplierPos(o.num.node, t);
                    (a = new Array()).push(o.coin.ShowMultiplier(n, i, r));
                    a.push(o.num.ShowMultiplier(n, i, r));
                    e.next = 12;
                    return Promise.all(a);
                  case 12:
                    o.coin.node.removeFromParent();
                    o.num.node.removeFromParent();
                    NodePool.GetInstance().ReturnBonus(o.coin, o.num);
                  case 15:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, r) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayZoneMultiplierPos = function (e, t) {
          var n = t.sort(function (e, t) {
            return e - t;
          });
          var i = n[Math.floor(n.length / 2)];
          var r = this.m_gameView.SinglePlateMgr.GetPosition(i);
          e.setPosition(r);
        };
        n.PlayZoneMultiply = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var r;
            var o;
            var a;
            var s;
            var l;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    r = new Array();
                    for (o = 0; o < t.length; o++) {
                      a = t[o];
                      s = this.m_ns[a];
                      l = s.getComponent(SymbolEffect);
                      r.push(l.ShowNgoldMultiply(n, i));
                    }
                    e.next = 4;
                    return Promise.all(r);
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
        return t;
      }(Component);
      _class3$7.ScFly = {
        P: 0,
        R: 1,
        G: 2
      };
      _class3$7.ScAngle = {
        R_U: 0,
        U: 20,
        L_U: 64,
        L: 115,
        R: -48
      };
      _class3$7.Line = {
        L: "L",
        R: "R",
        U: "U",
        D: "D"
      };
      _descriptor$f = _applyDecoratedDescriptor(_class3$7.prototype, "m_reelMask", [_dec2$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var Effect = _dec$v(_class$v = _class3$7) || _class$v;
      var _dec$w;
      var _dec2$g;
      var _dec3$9;
      var _dec4$7;
      var _dec5$5;
      var _dec6$3;
      var _dec7$3;
      var _dec8$3;
      var _dec9$3;
      var _dec10$3;
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
      var _dec22;
      var _dec23;
      var _dec24;
      var _class2$g;
      var _descriptor$g;
      var _descriptor2$9;
      var _descriptor3$7;
      var _descriptor4$5;
      var _descriptor5$3;
      var _descriptor6$3;
      var _descriptor7$3;
      var _descriptor8$3;
      var _descriptor9$3;
      var _descriptor10$1;
      var _descriptor11$1;
      var _descriptor12$1;
      var _descriptor13$1;
      var _descriptor14$1;
      var _descriptor15;
      var _descriptor16;
      var _descriptor17;
      var _descriptor18;
      var _descriptor19;
      var _descriptor20;
      var _descriptor21;
      var _descriptor22;
      var _descriptor23;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b924aOP70RCFrerAUAjE9Ql", "EffectPlate", undefined);
      var ccclass$w = _decorator.ccclass;
      var property$g = _decorator.property;
      var ANIMATION_NAME$a;
      !function (e) {
        e.Collect_Win = "Collect_Win";
      }(ANIMATION_NAME$a || (ANIMATION_NAME$a = {}));
      (function (e) {
        e.FX_Fly_G = "FX_Fly_G";
      })(ANIMATION_NAME$a || (ANIMATION_NAME$a = {}));
      _dec$w = ccclass$w("EffectPlate");
      _dec2$g = property$g(SpriteFrame);
      _dec3$9 = property$g(Prefab);
      _dec4$7 = property$g(Font);
      _dec5$5 = property$g({
        type: Node,
        tooltip: "MG 特效表演"
      });
      _dec6$3 = property$g({
        type: Node,
        tooltip: "FG上盤面"
      });
      _dec7$3 = property$g({
        type: Node,
        tooltip: "FG下盤面"
      });
      _dec8$3 = property$g({
        type: Prefab,
        tooltip: "FG下盤飛上去"
      });
      _dec9$3 = property$g({
        type: Prefab,
        tooltip: "蒐集火花"
      });
      _dec10$3 = property$g({
        type: Prefab,
        tooltip: "火箭"
      });
      _dec11$1 = property$g({
        type: Prefab,
        tooltip: "火箭 數字"
      });
      _dec12$1 = property$g({
        type: Animation,
        tooltip: "CollectWin1 / 2"
      });
      _dec13$1 = property$g({
        type: Label,
        tooltip: "CollectWin1 / 2"
      });
      _dec14$1 = property$g({
        type: Prefab,
        tooltip: "NearWin"
      });
      _dec15$1 = property$g({
        type: Prefab,
        tooltip: "Col line"
      });
      _dec16 = property$g({
        type: Prefab,
        tooltip: "Row line"
      });
      _dec17 = property$g({
        type: SpriteFrame,
        tooltip: "R Shape"
      });
      _dec18 = property$g({
        type: SpriteFrame,
        tooltip: "L Shape"
      });
      _dec19 = property$g({
        type: SpriteFrame,
        tooltip: "T Shape"
      });
      _dec20 = property$g({
        type: SpriteFrame,
        tooltip: "U Shape"
      });
      _dec21 = property$g({
        type: SpriteFrame,
        tooltip: "S Shape"
      });
      _dec22 = property$g({
        type: Prefab,
        tooltip: "BonusCoin"
      });
      _dec23 = property$g({
        type: Prefab,
        tooltip: "BonusNum"
      });
      _dec24 = property$g({
        type: Prefab,
        tooltip: "綠球"
      });
      _class2$g = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_symbolJpState", _descriptor$g, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_symbolEffects", _descriptor2$9, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_symbolFont", _descriptor3$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_mgEffectNode", _descriptor4$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgUpEffectNode", _descriptor5$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgDonwEffectNode", _descriptor6$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_pFlyEffect", _descriptor7$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_nFlyPrefab", _descriptor8$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_rocketPrefab", _descriptor9$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_rocketNumPrefab", _descriptor10$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_collectWin", _descriptor11$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_collectWinLabel", _descriptor12$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_nearWinPrefab", _descriptor13$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_colLinePrefab", _descriptor14$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_rowLinePrefab", _descriptor15, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_RShape", _descriptor16, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_LShape", _descriptor17, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_TShape", _descriptor18, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_UShape", _descriptor19, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_SShape", _descriptor20, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_bonusCoinPrefab", _descriptor21, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_bonusNumPrefab", _descriptor22, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_gBallPrefab", _descriptor23, _assertThisInitialized(t));
          t.m_effects = [];
          t.m_mgEffect = null;
          t.m_fgUpEffect = null;
          t.m_fgDownEffect = null;
          t.m_nFly = null;
          t.m_gBallPos = [new Vec3(240, 184), new Vec3(210, 124), new Vec3(210, 428)];
          t.m_collectWins = [];
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.onLoad = function () {
          NodePool.GetInstance().SetSymbolEffects(this.m_symbolEffects);
          NodePool.GetInstance().SetSymbolJpStates(this.m_symbolJpState);
          NodePool.GetInstance().SetSymbolFont(this.m_symbolFont);
          NodePool.GetInstance().SetPFlyEffect(this.m_pFlyEffect);
          NodePool.GetInstance().SetRocketEffect(this.m_rocketPrefab);
          NodePool.GetInstance().SetRocketNumEffect(this.m_rocketNumPrefab);
          NodePool.GetInstance().SetNearWinEffect(this.m_nearWinPrefab);
          NodePool.GetInstance().SetColLine(this.m_colLinePrefab);
          NodePool.GetInstance().SetRowLine(this.m_rowLinePrefab);
          NodePool.GetInstance().SetGBall(this.m_gBallPrefab);
          NodePool.GetInstance().SetBonus(this.m_bonusCoinPrefab, this.m_bonusNumPrefab);
          this.m_nFly = instantiate(this.m_nFlyPrefab);
          for (var e = 0; e < this.m_collectWin.length; e++) {
            this.m_collectWin[e].node.active = false;
            this.m_collectWinLabel[e].node.active = false;
          }
        };
        n.Init = function (e) {
          this.m_gameView = e;
          this.m_mgEffect = this.m_mgEffectNode.getComponent(Effect);
          this.m_mgEffect.Init(e);
          this.m_effects.push(this.m_mgEffect);
          this.m_fgDownEffect = this.m_fgDonwEffectNode.getComponent(Effect);
          this.m_fgDownEffect.Init(e);
          this.m_effects.push(this.m_fgDownEffect);
          this.m_fgUpEffect = this.m_fgUpEffectNode.getComponent(Effect);
          this.m_fgUpEffect.Init(e);
          this.m_effects.push(this.m_fgUpEffect);
          this.m_mgEffectNode.active = false;
          this.m_fgUpEffectNode.active = false;
          this.m_fgDonwEffectNode.active = false;
        };
        n.ShowDeclareEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_mgEffectNode.active = false;
                    this.m_fgDonwEffectNode.active = true;
                    if (Game_Define.isGetP) {
                      this.m_fgUpEffectNode.active = true;
                      t = new Vec3(0, -30);
                      this.m_fgDonwEffectNode.setPosition(t);
                      n = new Vec3(.85, .85);
                      this.m_fgDonwEffectNode.setScale(n);
                    } else {
                      i = new Vec3(0, 0);
                      this.m_fgDonwEffectNode.setPosition(i);
                      r = new Vec3(1, 1);
                      this.m_fgDonwEffectNode.setScale(r);
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
        n.ShowMgScFly = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_mgEffect.ShowMgScFly();
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
        n.ShowFgUpPlantScaling = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, r, o, a, s) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === o) {
                      o = null;
                    }
                    if (undefined === a) {
                      a = null;
                    }
                    if (undefined === s) {
                      s = true;
                    }
                    e.next = 5;
                    return this.m_fgUpEffect.ShowFgInScaling(t, n, i, r, o, a, s);
                  case 5:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, n, i, r, o, a, s) {
            return e.apply(this, arguments);
          };
        }();
        n.ShowLeaveFgWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.m_mgEffectNode.active) {
                      e.next = 3;
                      break;
                    }
                    e.next = 3;
                    return this.m_mgEffect.ShowLeaveFgWin(t[0], this.m_nFly, FLY_END.MG, 0);
                  case 3:
                    if (!this.m_fgUpEffectNode.active) {
                      e.next = 6;
                      break;
                    }
                    e.next = 6;
                    return this.m_fgUpEffect.ShowLeaveFgWin(t[1], this.m_nFly, FLY_END.FG_UP, 1);
                  case 6:
                    if (!this.m_fgDonwEffectNode.active) {
                      e.next = 9;
                      break;
                    }
                    e.next = 9;
                    return this.m_fgDownEffect.ShowLeaveFgWin(t[0], this.m_nFly, FLY_END.FG_DOWN, 0);
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
        n.ClearFgGold = function () {
          for (var e = 0; e < this.m_effects.length; e++) {
            if (this.m_effects[e].node.active) {
              this.m_effects[e].ClearFgGold();
            }
          }
          for (var t = 0; t < this.m_collectWin.length; t++) {
            this.m_collectWin[t].node.active = false;
            this.m_collectWinLabel[t].node.active = false;
          }
        };
        n.ShowCollectWin = function (e) {
          this.m_collectWin[e].node.active = true;
          this.m_collectWinLabel[e].node.active = true;
          this.m_collectWinLabel[e].string = "0.00";
          this.m_collectWins[e] = 0;
        };
        n.ShowGoldFlyEndWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var r;
            var o;
            var a;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = 0;
                    if (t === this.m_fgUpEffectNode.name) {
                      i = 1;
                    }
                    r = this.m_collectWin[i];
                    o = this.m_collectWinLabel[i];
                    this.m_collectWins[i] = node$3.plus(this.m_collectWins[i], n);
                    a = this.m_collectWins[i];
                    o.string = node$3.FormatNumberThousands(node$3.strip(Game_Define.ShowDisplayValue(a)), node$3.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    r.play(ANIMATION_NAME$a.Collect_Win);
                  case 8:
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
        n.ShowZone = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = true;
                    }
                    if (!Game_Define.isGetR) {
                      e.next = 5;
                      break;
                    }
                    for (i = 0; i < t.length; i++) {
                      if (t[i].FgMultiplyDataVec) {
                        null;
                        (0 === i ? this.m_fgDownEffect : this.m_fgUpEffect).ShowZone(t[i].AreaTypePlate, t[i].FgMultiplyDataVec, n);
                      }
                    }
                    e.next = 5;
                    return node$2.Wait(this, Game_Define.Time.ZoneInit);
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
        n.CloseZone = function () {
          if (Game_Define.isGetR) {
            for (var e = 0; e < this.m_effects.length; e++) {
              if (this.m_effects[e].node.active) {
                this.m_effects[e].CloseZone();
              }
            }
          }
        };
        n.ShowNearWin = function (e, t, n) {
          if (undefined === n) {
            n = true;
          }
          this.m_fgDownEffect.ClearNearWinSound();
          this.m_fgUpEffect.ClearNearWinSound();
          var i = this.m_gameView.SpinAck.RoundQueue[Game_Define.Round - 1].RedFGRemainNums;
          var r = false;
          if (1 == i[0]) {
            r = this.m_fgDownEffect.GetNearWinSoundIsPlay();
            this.m_fgDownEffect.ShowNearWin(e[0].FgMultiplyDataVec, r, n);
          } else {
            this.m_fgDownEffect.ClearNearWin();
          }
          if (1 == i[4]) {
            r = this.m_fgUpEffect.GetNearWinSoundIsPlay();
            this.m_fgUpEffect.ShowNearWin(e[1].FgMultiplyDataVec, r, n);
          } else {
            this.m_fgUpEffect.ClearNearWin();
          }
        };
        n.ClearNearWin = function () {
          for (var e = 0; e < this.m_effects.length; e++) {
            if (this.m_effects[e].node.active) {
              this.m_effects[e].ClearNearWin();
            }
          }
        };
        n.SetIsClickStopBtn = function () {
          for (var e = 0; e < this.m_effects.length; e++) {
            if (this.m_effects[e].node.active) {
              this.m_effects[e].SetIsClickStopBtn();
            }
          }
        };
        n.ShowAllLine = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = true;
                    }
                    i = false;
                    if (Game_Define.isGetP) {
                      this.m_fgUpEffect.ClearLineSound();
                      this.m_fgUpEffect.ShowAllLine(t[1].FgMultiplyDataVec, i, n);
                    }
                    this.m_fgDownEffect.ClearLineSound();
                    i = this.m_fgUpEffect.GetLineSoundIsPlay();
                    this.m_fgDownEffect.ShowAllLine(t[0].FgMultiplyDataVec, i, n);
                  case 6:
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
        n.ShowZoneWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = true;
                    }
                    if (!Game_Define.isGetP) {
                      e.next = 4;
                      break;
                    }
                    e.next = 4;
                    return this.m_fgUpEffect.ShowZoneWin(t[1].FgMultiplyDataVec, n);
                  case 4:
                    e.next = 6;
                    return this.m_fgDownEffect.ShowZoneWin(t[0].FgMultiplyDataVec, n);
                  case 6:
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
        n.ClearLine = function () {
          for (var e = 0; e < this.m_effects.length; e++) {
            if (this.m_effects[e].node.active) {
              this.m_effects[e].ClearLine();
            }
          }
        };
        n.ShowGBallAdd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (Game_Define.isGetP) {
                      this.PlayGBallAdd(this.m_gBallPos[1]);
                      this.PlayGBallAdd(this.m_gBallPos[2]);
                    } else {
                      this.PlayGBallAdd(this.m_gBallPos[0]);
                    }
                  case 1:
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
        n.PlayGBallAdd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = NodePool.GetInstance().GetGBall();
                    this.node.addChild(n);
                    n.setPosition(t);
                    (i = n.getComponent(Animation)).once(Animation.EventType.FINISHED, function () {
                      i.node.active = false;
                      i.node.removeFromParent();
                      NodePool.GetInstance().ReturnGBall(i.node);
                    });
                    i.node.active = true;
                    i.play(ANIMATION_NAME$a.FX_Fly_G);
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
        n.SetRecoverFgPlateInfo = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var r;
            var o;
            var a;
            var s;
            var l;
            var c;
            var u;
            var m;
            var _;
            var p;
            var h;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    for (i = 0; i < n.length; i++) {
                      if (n[i].FgMultiplyDataVec && t[i].CSP && t[i].CSP.length > 0) {
                        r = null;
                        o = null;
                        if (0 === i) {
                          r = this.m_fgDownEffect;
                          o = this.m_gameView.SinglePlateMgr;
                        } else {
                          r = this.m_fgUpEffect;
                          o = this.m_gameView.SinglePlateMgr2;
                        }
                        r.node.active = true;
                        a = t[i].CSP;
                        for (s = 0; s < a.length; s++) {
                          for (l = 0; l < a[s].Col.length; l++) {
                            if ((c = a[s].Col[l].Symbol) === Game_Define.Symbol.SYMBOL_14) {
                              u = node$3.times(s, Game_Define.ROW) + l;
                              m = a[s].Col[l].Number;
                              _ = a[s].Col[l].JPState;
                              p = a[s].Col[l].JPMult;
                              h = o.GetPositionbyColRow(s, l);
                              r.ShowFgGold(u, h, c, m, _, p);
                            }
                          }
                        }
                      }
                    }
                    this.ShowZone(n, false);
                    this.ShowAllLine(n, false);
                    this.ShowZoneWin(n, false);
                  case 4:
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
          key: "RShape",
          get: function () {
            return this.m_RShape;
          }
        }, {
          key: "LShape",
          get: function () {
            return this.m_LShape;
          }
        }, {
          key: "TShape",
          get: function () {
            return this.m_TShape;
          }
        }, {
          key: "UShape",
          get: function () {
            return this.m_UShape;
          }
        }, {
          key: "SShape",
          get: function () {
            return this.m_SShape;
          }
        }]);
        return t;
      }(Component);
      _descriptor$g = _applyDecoratedDescriptor(_class2$g.prototype, "m_symbolJpState", [_dec2$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$9 = _applyDecoratedDescriptor(_class2$g.prototype, "m_symbolEffects", [_dec3$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$7 = _applyDecoratedDescriptor(_class2$g.prototype, "m_symbolFont", [_dec4$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor4$5 = _applyDecoratedDescriptor(_class2$g.prototype, "m_mgEffectNode", [_dec5$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$3 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fgUpEffectNode", [_dec6$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor6$3 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fgDonwEffectNode", [_dec7$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor7$3 = _applyDecoratedDescriptor(_class2$g.prototype, "m_pFlyEffect", [_dec8$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor8$3 = _applyDecoratedDescriptor(_class2$g.prototype, "m_nFlyPrefab", [_dec9$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor9$3 = _applyDecoratedDescriptor(_class2$g.prototype, "m_rocketPrefab", [_dec10$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor10$1 = _applyDecoratedDescriptor(_class2$g.prototype, "m_rocketNumPrefab", [_dec11$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor11$1 = _applyDecoratedDescriptor(_class2$g.prototype, "m_collectWin", [_dec12$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor12$1 = _applyDecoratedDescriptor(_class2$g.prototype, "m_collectWinLabel", [_dec13$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor13$1 = _applyDecoratedDescriptor(_class2$g.prototype, "m_nearWinPrefab", [_dec14$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor14$1 = _applyDecoratedDescriptor(_class2$g.prototype, "m_colLinePrefab", [_dec15$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor15 = _applyDecoratedDescriptor(_class2$g.prototype, "m_rowLinePrefab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor16 = _applyDecoratedDescriptor(_class2$g.prototype, "m_RShape", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor17 = _applyDecoratedDescriptor(_class2$g.prototype, "m_LShape", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor18 = _applyDecoratedDescriptor(_class2$g.prototype, "m_TShape", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor19 = _applyDecoratedDescriptor(_class2$g.prototype, "m_UShape", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor20 = _applyDecoratedDescriptor(_class2$g.prototype, "m_SShape", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor21 = _applyDecoratedDescriptor(_class2$g.prototype, "m_bonusCoinPrefab", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor22 = _applyDecoratedDescriptor(_class2$g.prototype, "m_bonusNumPrefab", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor23 = _applyDecoratedDescriptor(_class2$g.prototype, "m_gBallPrefab", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$x;
      var _dec2$h;
      var _dec3$a;
      var _dec4$8;
      var _class2$h;
      var _descriptor$h;
      var _descriptor2$a;
      var _descriptor3$8;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "45d6dsxLg9EvaxB5p6X9PkQ", "SlotReels", undefined);
      var NORMAL_COLUMNS = [0, 1, 2, 3, 4];
      var DEFAULT_CUL_SYMBOL = [6, 7, 10, 8, 9];
      var ccclass$x = _decorator.ccclass;
      var property$h = _decorator.property;
      _dec$x = ccclass$x("SlotReel");
      _dec2$h = property$h(SpriteFrame);
      _dec3$a = property$h({
        type: Prefab,
        tooltip: "Scatter"
      });
      _dec4$8 = property$h({
        type: Effect,
        tooltip: "MG Effect"
      });
      _class2$h = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_symbolSpriteFrames", _descriptor$h, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_scatterPrefab", _descriptor2$a, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_effect", _descriptor3$8, _assertThisInitialized(t));
          t.m_isLoadingComplete = false;
          t.m_viewSize = null;
          t.m_symbolSize = null;
          t.m_allColumns = [];
          t.m_totalLength = null;
          t.m_spinBufferTime01 = .1;
          t.m_spinBufferTime02 = .1;
          t.m_riseTime = 0;
          t.m_upLength = 0;
          t.m_downLength = 15;
          t.m_spinTime = .25;
          t.m_spinDelayTime = 0;
          t.m_time = 0;
          t.m_stopTime = 0;
          t.m_reelStopTime = new Array();
          t.m_reelPreTime = new Array();
          t.m_isClickStopBtn = false;
          t.m_lockColumn = new Array();
          t.m_timesOfBaseSpin = 2;
          t.m_spinIntervalTimes = 1;
          t.m_comparePos = [];
          t.m_reelXPos = [];
          t.m_reelYPos = [];
          t.m_isNotChangeSymbolThisRound = {};
          t.m_isStop = false;
          t.m_isChangeToFinalSymbol = new Array();
          t.m_scatterNum = -1;
          t.m_plateInfo = [];
          t.m_reelPositionOffset = [v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0)];
          t.m_FGInitPlate = [];
          t.m_isPlayStopSound = [false, false, false, false, false];
          t.m_isPlayStopEffect = [false, false, false, false, false];
          t.m_hasPlayedStopAllEffect = false;
          t.m_reelSoundId = null;
          t.m_nearWinSoundId = [-1, -1, -1, -1, -1, -1];
          t.m_isPlayingEffect = false;
          t.m_awardData = [];
          t.m_isWinLineStop = false;
          t.m_WinLineCount = 0;
          t.m_promises = new Array();
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.onLoad = function () {
          var e = this;
          NodePool.GetInstance().SetSymbolSprites(this.m_symbolSpriteFrames);
          this.m_viewSize = this.node.getComponent(UITransform).contentSize;
          this.m_symbolSize = new Size((this.m_viewSize.width - Game_Define.SeparateLineWidth * (Game_Define.COL - 1)) / Game_Define.COL, this.m_viewSize.height / Game_Define.ROW);
          for (var t = 0; t < 3; ++t) {
            this.m_comparePos.push(this.m_viewSize.height * t);
            this.m_reelYPos.push(this.m_viewSize.height * (t - 1.35));
          }
          for (var n = 0; n < Game_Define.COL; ++n) {
            this.m_reelXPos.push(this.m_symbolSize.width * (n + .5) - this.m_viewSize.width / 2 + Game_Define.SeparateLineWidth * n + this.m_reelPositionOffset[n].x);
          }
          this.m_totalLength = this.m_viewSize.height * 3;
          var i = function () {
            var t = node$c.TempoSetting.TripleCoinTreasure;
            e.m_riseTime = t.BASE.RISE_TIME;
            e.m_upLength = t.BASE.UP_LENGTH;
            e.m_spinBufferTime01 = t.BASE.SPIN_BUFFER_TIME_01;
            e.m_spinBufferTime02 = t.BASE.SPIN_BUFFER_TIME_02;
            e.m_downLength = t.BASE.DOWN_LENGTH;
            e.m_spinTime = t.BASE.SPIN_SPEED;
            e.m_timesOfBaseSpin = t.BASE.TIMES_OF_BASE_SPIN;
            e.m_spinIntervalTimes = t.BASE.SPIN_INTERVAL_TIMES;
            e.m_spinDelayTime = t.BASE.SPIN_DELAY_TIME;
          };
          i();
          node$c.AddCb(i);
        };
        n.Init = function (e) {
          this.m_gameView = e;
        };
        n.CreateSymbol = function () {
          for (var e = 0; e < 3; ++e) {
            var t = new Array();
            this.m_allColumns.push(t);
          }
          for (var n = 2; n >= 0; --n) {
            this.CreatePlate(n);
          }
        };
        n.CreatePlate = function (e) {
          for (var t = 0; t < Game_Define.COL; ++t) {
            var n = t.toString();
            var i = Game_Define.NODE_PREFIX_NAME[e] + n;
            var r = new ColumnSymbol(this.node, this.m_viewSize.height, this.m_gameView, t);
            r.Name = i;
            r.SetPosition(v3(this.m_reelXPos[t], this.m_reelYPos[e]));
            var o = [];
            for (var a = 0; a < Game_Define.ROW; ++a) {
              var s = new _cjsExports$1.tllproto.CSymbol();
              if (e === Game_Define.MIDDLE_PLATE_INDEX) {
                s.Symbol = DEFAULT_CUL_SYMBOL[t];
              } else {
                s.Symbol = Math.floor(Math.random() * Game_Define.Symbol.SYMBOL_10);
              }
              o.push(s);
            }
            r.SetSymbols(o, t);
            if (e === Game_Define.MIDDLE_PLATE_INDEX) {
              var l = new _cjsExports$1.tllproto.CColumn();
              l.Col = o;
              this.m_plateInfo.push(l);
              r.SetColumnVisiable(true);
            } else {
              r.SetColumnVisiable(false);
            }
            this.m_allColumns[e].push(r);
          }
        };
        n.SetPlateInfo = function (e) {
          error("This Plate is ", e);
          this.m_plateInfo = e;
          for (var t = 0; t < Game_Define.COL; t++) {
            for (var n = 0; n < Game_Define.ROW; n++) {
              var i = this.m_plateInfo[t].Col[n].Symbol;
              if (i > Game_Define.Symbol.SYMBOL_10 && i < Game_Define.Symbol.SYMBOL_14) {
                this.m_scatterNum++;
              }
            }
          }
          if (!this.m_gameView.IsMgOmen) {
            this.SetReelTimes();
          }
        };
        n.SetReelTimes = function (e) {
          var t = this.m_riseTime * Game_Define.COL;
          if (!e) {
            if (this.m_gameView.IsMgOmen) {
              return;
            }
            e = 0 !== (e = Math.ceil((this.m_time - t) / this.m_spinTime)) ? e : 1;
          }
          var n = 0;
          if (this.m_isClickStopBtn) {
            this.StopTime = node$3.strip(this.m_spinTime * e + this.m_spinDelayTime + t);
            var i = node$3.strip(this.m_spinTime * e);
            var r = node$3.strip(this.m_spinTime * (e - 1));
            for (var o = 0; o < Game_Define.COL; ++o) {
              this.m_reelStopTime[o] = i;
              this.m_reelPreTime[o] = r;
            }
          } else {
            this.StopTime = node$3.strip(this.m_spinTime * (e + this.m_timesOfBaseSpin + this.m_spinIntervalTimes * (Game_Define.COL - 1)) + this.m_spinDelayTime + t + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var a = 0; a < Game_Define.COL; ++a) {
              if (this.m_lockColumn[a]) {
                ++n;
              }
              this.m_reelStopTime[a] = node$3.strip(this.m_spinTime * (e + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinTime * (a - n));
              this.m_reelPreTime[a] = node$3.strip(this.m_reelStopTime[a] - this.m_spinTime);
            }
          }
        };
        n.SetPlateSymbol = function () {
          var e = this.m_plateInfo;
          for (var t = 0; t < Game_Define.COL; ++t) {
            this.m_reelStopTime[t] = this.m_reelPreTime[t] = null;
            this.m_allColumns[Game_Define.MIDDLE_PLATE_INDEX][t].SetSymbols(e[t].Col, t, true);
            this.m_allColumns[0][t].SetColumnVisiable(false);
            this.m_allColumns[2][t].SetColumnVisiable(false);
          }
          for (var n = 0; n < 3; ++n) {
            for (var i = 0; i < Game_Define.COL; ++i) {
              this.m_allColumns[n][i].SetPosition(v3(this.ReelXPos[i], this.m_reelYPos[n]));
            }
          }
        };
        n.RecoverPlate = function () {
          for (var e = 0; e < Game_Define.COL; ++e) {
            var t = [];
            for (var n = 0; n < Game_Define.ROW; ++n) {
              var i = new _cjsExports$1.tllproto.CSymbol();
              i.Symbol = e;
              t.push(i);
            }
            this.m_allColumns[Game_Define.MIDDLE_PLATE_INDEX][e].SetSymbols(t, e, true);
          }
        };
        n.RandomSymbol = function () {
          var e = new _cjsExports$1.tllproto.CSymbol();
          var t = Math.floor(Math.random() * Game_Define.Symbol.SYMBOL_R);
          if (t > Game_Define.Symbol.SYMBOL_10) {
            switch (Math.floor(3 * Math.random())) {
              case 0:
                t = Game_Define.Symbol.SYMBOL_G;
                break;
              case 1:
                t = Game_Define.Symbol.SYMBOL_R;
                break;
              case 2:
                t = Game_Define.Symbol.SYMBOL_P;
            }
            var n = node$3.FormatNumberThousands(100 * Math.random());
            var i = node$1.GetNowBetValue();
            var r = Number(n) % Game_Define.CoinValue.length;
            e.Symbol = t;
            e.JPState = 0;
            e.Number = node$3.times(i, Game_Define.CoinValue[r]);
            e.JPMult = 0;
          } else {
            e.Symbol = t;
          }
          return e;
        };
        n.StartSpin = function () {
          this.m_time = 0;
          this.StopTime = 0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_hasPlayedStopAllEffect = false;
          this.m_isPlayStopSound = [false, false, false, false, false];
          this.m_isPlayStopEffect = [false, false, false, false, false];
          this.m_scatterNum = 0;
          for (var e = 0; e < Game_Define.COL; ++e) {
            this.m_reelStopTime[e] = this.m_reelPreTime[e] = null;
          }
          for (var t = 0; t < this.m_isChangeToFinalSymbol.length; ++t) {
            this.m_isChangeToFinalSymbol[t] = this.m_lockColumn[t] = false;
          }
          for (var n in this.m_isNotChangeSymbolThisRound) this.m_isNotChangeSymbolThisRound[n] = true;
          if (!node$1.IsAutoSpin) {
            node$5.Play(Game_Define.AudioClips.Reel_Spin);
          }
          for (var i = 2; i >= 0; --i) {
            for (var r = 0; r < Game_Define.COL; ++r) {
              this.m_allColumns[i][r].SetColumnVisiable(true);
            }
          }
        };
        n.ClickStopBtn = function () {
          if (0 !== this.StopTime) {
            this.m_isClickStopBtn = true;
            var e = Math.floor(this.m_time / this.m_spinTime) * this.m_spinTime;
            var t = node$3.strip(e + this.m_spinTime);
            for (var n = 0; n < Game_Define.COL; ++n) {
              if (this.m_reelStopTime[n] > t) {
                this.m_reelStopTime[n] = t;
                this.m_reelPreTime[n] = e;
              }
            }
            var i = node$c.TempoSetting.TripleCoinTreasure.SPEED_UP_STOP_TIME(Game_Define.COL, this.m_time);
            if (i < this.m_stopTime) {
              this.StopTime = node$3.strip(i);
            }
          }
        };
        n.Spin = function (e) {
          this.m_time = node$3.strip(this.m_time + e);
          if (!this.m_isStop) {
            this.SpinAll(e, NORMAL_COLUMNS);
            if (!(0 === this.StopTime || this.m_time < this.m_stopTime)) {
              this.m_isStop = true;
              if (this.m_reelSoundId) {
                node$5.Stop(this.m_reelSoundId);
                this.m_reelSoundId = null;
              }
            }
          }
        };
        n.SpinAll = function (e, t) {
          for (var n = 0; n < t.length; ++n) {
            var i = this.m_spinTime;
            var r = (this.m_time - this.m_riseTime * Game_Define.COL) % i / i * this.m_totalLength;
            var o = t[n];
            for (var a = 0; a < 3; ++a) {
              this.Spin_RealSpinMultiple(o, this.m_allColumns[a][o], a, r);
            }
          }
        };
        n.Spin_RealSpinMultiple = function (e, t, n, i) {
          var r = this.m_time;
          var o = this.m_reelStopTime[e];
          var a = this.m_riseTime * Game_Define.COL;
          var s = this.m_reelXPos[e];
          var l = this.m_reelYPos[n];
          if (n === Game_Define.MIDDLE_PLATE_INDEX && r > o + a + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
            l = this.m_reelYPos[n];
            t.SetPosition(v3(s, l));
          }
          if (!(r < this.m_riseTime * e)) {
            if (r < this.m_riseTime * (e + 1)) {
              var c = (r - this.m_riseTime * e) / this.m_riseTime * this.m_upLength;
              t.SetPosition(v3(s, l + c));
            } else if (r < a) {
              t.SetPosition(v3(s, l + this.m_upLength));
            } else if (null === o || r < o + a) {
              var u = this.CheckMoveLength(i, this.m_comparePos[n], e, t);
              t.SetPosition(v3(s, l - u));
            } else if (r < o + a + this.m_spinBufferTime01) {
              var m = (r - o - a) / this.m_spinBufferTime01 * this.m_downLength;
              t.SetPosition(v3(s, l - m));
              this.CheckChangeToFinalSymbol(e, t, true);
              this.CheckPlayStopSoundAndEffect(e);
              this.HideSymbolCol(e, -.5, 2.5);
            } else if (r < o + a + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
              var _ = (r - o - a - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
              t.SetPosition(v3(s, l - this.m_downLength + _));
              this.CheckChangeToFinalSymbol(e, t, true);
              this.HideSymbolCol(e, 0, 2.5);
            } else {
              this.CheckChangeToFinalSymbol(e, t, true);
              t.SetPosition(v3(s, l));
              this.CheckPlayStopSoundAndEffect(e);
              this.HideSymbolCol(e, 0, 2.5);
              if (n === Game_Define.MIDDLE_PLATE_INDEX) {
                this.ShowStopSymbolEffect(this.m_isClickStopBtn, e, t);
              }
            }
          }
        };
        n.CheckMoveLength = function (e, t, n, i) {
          var r = Number(i.Name) % 10;
          return e < t ? e : (this.m_isNotChangeSymbolThisRound[r] && e - t < this.m_viewSize.height ? (this.ChangeSymbol(n, i, this.m_isClickStopBtn), this.m_isNotChangeSymbolThisRound[r] = false) : this.m_isNotChangeSymbolThisRound[r] = true, e - this.m_totalLength);
        };
        n.ChangeSymbol = function (e, t, n) {
          var i = Number(t.Name);
          var r = this.m_reelPreTime[e];
          var o = this.m_riseTime * this.m_viewSize.height * 3;
          var a = Math.floor(Math.random() * (Game_Define.MaxSymbolEachColumn - Game_Define.MinSymbolEachColumn)) + Game_Define.MinSymbolEachColumn;
          if (n) {
            if (isNaN(i)) {
              var s = this.CheckIsFreeGameAndGetSymbols(a);
              t.SetSymbols(s, e);
            } else {
              t.SetSymbols(this.m_plateInfo[i].Col, e);
            }
          } else if (!isNaN(i) && (null !== r && this.m_time >= r || Math.abs(this.m_time - (r + o)) < this.m_spinTime)) {
            t.SetSymbols(this.m_plateInfo[i].Col, e);
          } else {
            var l = this.CheckIsFreeGameAndGetSymbols(a);
            t.SetSymbols(l, e);
          }
        };
        n.CheckIsFreeGameAndGetSymbols = function (e) {
          var t = [];
          for (var n = 0; n < e; ++n) {
            t.push(this.RandomSymbol());
          }
          return t;
        };
        n.CheckChangeToFinalSymbol = function (e, t, n) {
          if (undefined === n) {
            n = false;
          }
          var i = t.Name;
          if (!this.m_isChangeToFinalSymbol[i]) {
            this.m_isChangeToFinalSymbol[i] = true;
            this.ChangeSymbol(e, t, n);
          }
        };
        n.HideSymbolCol = function (e, t, n) {
          var i = this.m_reelYPos[Game_Define.MIDDLE_PLATE_INDEX];
          i += (Game_Define.ROW - 1.5 - t + .5) * Game_Define.SymbolHeight;
          var r = this.m_reelYPos[Game_Define.MIDDLE_PLATE_INDEX];
          r += (Game_Define.ROW - 1.5 - n + .5) * Game_Define.SymbolHeight;
          for (var o = 0; o < 3; o++) {
            var a = this.m_allColumns[o][e];
            for (var s = 0; s < 3; ++s) {
              var l = a.GetSymbol(s).getPosition().y;
              a.GetSymbol(s).active = l <= i && l >= r;
            }
          }
        };
        n.CheckPlayStopSoundAndEffect = function (e) {
          if (!this.m_isPlayStopSound[e]) {
            this.m_isPlayStopSound[e] = true;
            if (this.m_isClickStopBtn) {
              this.m_isPlayStopSound = [true, true, true, true, true];
            }
            node$5.Play(Game_Define.AudioClips.reel_stop);
            if (this.m_isClickStopBtn && this.m_scatterNum > 0 && !Game_Define.IsInFG) {
              node$5.Play(Game_Define.AudioClips.scatter_stop);
            }
          }
        };
        n.AddReelTimes = function (e) {
          this.StopTime = this.StopTime + e * this.SpinTime;
          for (var t = 0; t < Game_Define.COL; ++t) {
            this.m_reelStopTime[t] = this.m_reelStopTime[t] + e * this.SpinTime;
            this.m_reelPreTime[t] = this.m_reelPreTime[t] + e * this.SpinTime;
          }
        };
        n.SetSymbolDark = function (e, t, n) {
          if (undefined === n) {
            n = false;
          }
          for (var i = 0; i < Game_Define.COL; ++i) {
            if (i !== t) {
              for (var r = 0; r < 3; ++r) {
                this.m_allColumns[r][i].SetSymbolDark(e, n);
              }
            } else {
              for (var o = 0; o < 3; ++o) {
                this.m_allColumns[o][i].SetSymbolDark(false, n);
              }
            }
          }
        };
        n.CheckFGPlateEqual = function (e) {
          for (var t = 0; t < e.length; ++t) {
            if (e[t] && e[t][0] && 0 !== e[t][0]) {
              return false;
            }
          }
          return true;
        };
        n.CheckColIsStop = function (e) {
          return this.m_time >= this.m_reelStopTime[e];
        };
        n.HidePlate = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === t) {
                      t = 0;
                    }
                    e.next = 3;
                    return node$2.Wait(this, t);
                  case 3:
                    for (n = 0; n < Game_Define.COL; ++n) {
                      this.AllColumns[Game_Define.MIDDLE_PLATE_INDEX][n].SetColumnVisiable(false);
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
        n.ShowPlate = function () {
          for (var e = 0; e < Game_Define.COL; ++e) {
            this.AllColumns[Game_Define.MIDDLE_PLATE_INDEX][e].SetColumnVisiable(true);
          }
        };
        n.ShowScStopEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return Promise.all(this.m_promises);
                  case 2:
                    this.m_promises = [];
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
        n.ShowMgWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var r;
            var o;
            var a;
            var s;
            var l;
            var c;
            var u;
            var m;
            var _;
            var p;
            var h;
            var f;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.node.active) {
                      e.next = 7;
                      break;
                    }
                    n = [];
                    for (i = 0; i < t.length; i++) {
                      r = t[i];
                      o = r.Line ? r.Line : 0;
                      a = r.Count ? r.Count : 0;
                      s = r.Symbol ? r.Symbol : 0;
                      for (l = 0; l < a; l++) {
                        c = Game_Define.LinePos[o][l];
                        if (-1 == n.indexOf(c) && s <= Game_Define.Symbol.SYMBOL_10) {
                          n.push(c);
                        }
                      }
                    }
                    u = new Array();
                    for (m = 0; m < n.length; m++) {
                      _ = this.GetColRow(n[m]).col;
                      p = this.GetColRow(n[m]).row;
                      this.m_allColumns[Game_Define.MIDDLE_PLATE_INDEX][_].HideSymbolByRow(p);
                      h = this.m_allColumns[Game_Define.MIDDLE_PLATE_INDEX][_].GetSymbol(p);
                      f = h.getPosition();
                      if (Number(h.name) <= Game_Define.Symbol.SYMBOL_10) {
                        u.push(this.m_effect.ShowMgWin(_, p, f, Number(h.name)));
                      }
                    }
                    e.next = 7;
                    return Promise.all(u);
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
        n.GetColRow = function (e) {
          return {
            col: Math.floor(e / Game_Define.ROW),
            row: Math.floor(e % Game_Define.ROW)
          };
        };
        n.ShowMgWinLine = function (e) {
          this.m_effect.ShowMgWinEnd();
          this.ShowPlate();
          this.m_awardData = e;
          this.m_isWinLineStop = false;
          this.m_WinLineCount = 0;
          this.PlayMgWinLine();
        };
        n.PlayMgWinLine = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            var r;
            var o;
            var a;
            var s;
            var l;
            var c;
            var u;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = this.m_awardData;
                    n = t[this.m_WinLineCount];
                    i = n.Line ? n.Line : 0;
                    r = n.Count ? n.Count : 0;
                    if ((n.Symbol ? n.Symbol : 0) <= Game_Define.Symbol.SYMBOL_10) {
                      for (o = 0; o < r; o++) {
                        a = Game_Define.LinePos[i][o];
                        s = this.GetColRow(a).col;
                        l = this.GetColRow(a).row;
                        this.m_allColumns[Game_Define.MIDDLE_PLATE_INDEX][s].HideSymbolByRow(l);
                        c = this.m_allColumns[Game_Define.MIDDLE_PLATE_INDEX][s].GetSymbol(l);
                        u = c.getPosition();
                        this.m_effect.ShowMgWin(s, l, u, Number(c.name));
                      }
                    }
                    e.next = 8;
                    return node$2.Wait(this, Game_Define.Time.WinLine);
                  case 8:
                    if (!this.m_isWinLineStop) {
                      this.ShowPlate();
                      this.m_effect.ShowMgWinEnd();
                      this.m_WinLineCount++;
                      if (this.m_WinLineCount >= t.length) {
                        this.m_WinLineCount = 0;
                      }
                      this.PlayMgWinLine();
                    }
                  case 9:
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
        n.ShowMgWinLineEnd = function () {
          this.m_isWinLineStop = true;
          this.m_awardData = [];
          this.m_effect.ShowMgWinEnd();
          this.ShowPlate();
          this.SetSymbolDark(false, -1);
        };
        n.ShowStopSymbolEffect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var r;
            var o;
            var a;
            var s;
            var l;
            var c;
            var u;
            var m;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.m_isPlayStopEffect[n]) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    this.m_isPlayStopEffect[n] = true;
                    r = false;
                    for (o = this.m_plateInfo[n].Col.length - 1; o >= 0; o--) {
                      if ((a = this.m_plateInfo[n].Col[o].Symbol) > Game_Define.Symbol.SYMBOL_10 && a < Game_Define.Symbol.SYMBOL_14) {
                        r = true;
                        s = i.GetSymbol(o);
                        s.getComponent(SymbolEffect).ShowRPGBottm();
                        l = s.getPosition().x;
                        c = i.CalPosY(o).y;
                        u = new Vec3(l, c);
                        m = new Size(this.m_symbolSize.width, this.m_symbolSize.height);
                        this.m_promises.push(this.m_effect.ShowMgSC(n, o, this.m_plateInfo, u, m, s));
                      }
                    }
                    if (r) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return");
                  case 7:
                    if (!t) {
                      node$5.Play(Game_Define.AudioClips.scatter_stop);
                    }
                  case 8:
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
        _createClass(t, [{
          key: "IsLoadingComplete",
          get: function () {
            return this.m_isLoadingComplete;
          }
        }, {
          key: "AllColumns",
          get: function () {
            return this.m_allColumns;
          }
        }, {
          key: "SpinTime",
          get: function () {
            return this.m_spinTime;
          },
          set: function (e) {
            this.m_spinTime = e;
          }
        }, {
          key: "StopTime",
          get: function () {
            return this.m_stopTime;
          },
          set: function (e) {
            this.m_stopTime = e;
          }
        }, {
          key: "IsClickStopBtn",
          get: function () {
            return this.m_isClickStopBtn;
          }
        }, {
          key: "SpinIntervalTimes",
          get: function () {
            return this.m_spinIntervalTimes;
          },
          set: function (e) {
            this.m_spinIntervalTimes = e;
          }
        }, {
          key: "ReelXPos",
          get: function () {
            return this.m_reelXPos;
          }
        }, {
          key: "IsStop",
          get: function () {
            return this.m_isStop;
          }
        }, {
          key: "ScatterNum",
          get: function () {
            return this.m_scatterNum;
          },
          set: function (e) {
            this.m_scatterNum = e;
          }
        }, {
          key: "PlateInfo",
          get: function () {
            return this.m_plateInfo;
          }
        }, {
          key: "FGInitPlate",
          get: function () {
            return this.m_FGInitPlate;
          }
        }, {
          key: "IsPlayingEffect",
          get: function () {
            return this.m_isPlayingEffect;
          }
        }]);
        return t;
      }(Component);
      _descriptor$h = _applyDecoratedDescriptor(_class2$h.prototype, "m_symbolSpriteFrames", [_dec2$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$a = _applyDecoratedDescriptor(_class2$h.prototype, "m_scatterPrefab", [_dec3$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$8 = _applyDecoratedDescriptor(_class2$h.prototype, "m_effect", [_dec4$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$y;
      var _class$y;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3d6ddlqi3pLrrW65J4JdSZu", "SingleCell", undefined);
      var ccclass$y = _decorator.ccclass;
      _dec$y = ccclass$y("SingleCell");
      var SingleCell = _dec$y(_class$y = function () {
        function e(e, t, n, i, r) {
          this.m_parentNode = null;
          this.m_symbolSprite = null;
          this.m_jpRibbonSprite = null;
          this.m_jpSprite = null;
          this.m_label = null;
          this.m_thisNode = null;
          this.m_gameView = null;
          this.m_symbol = 0;
          this.m_value = 0;
          this.m_name = "";
          this.m_effect = null;
          this.m_col = 0;
          this.m_symbolIndex = "";
          this.m_basePos = v3(0, 0, 0);
          this.m_parentNode = e;
          this.m_symbolIndex = e.name;
          this.m_effect = r;
          this.m_gameView = t;
          var o = NodePool.GetInstance().GetSymbol(-1);
          this.Name = n + i.toString();
          this.m_parentNode.addChild(o);
          this.m_thisNode = o;
          this.SetGrayScale();
        }
        var t = e.prototype;
        t.CreateSymbol = function (e) {
          this.ChangeSymbol(e);
          this.SetHideOpacity();
        };
        t.ChangeSymbol = function (e) {
          this.ClearAll();
          var t = e.Symbol;
          var n = e.JPState ? e.JPState : null;
          var i = e.Number ? e.Number : 0;
          var r = e.JPMult ? e.JPMult : 0;
          if (t === Game_Define.Symbol.SYMBOL_14) {
            this.m_thisNode = NodePool.GetInstance().GetEffectNode(t);
            var o = this.m_parentNode.parent.name;
            var a = this.m_parentNode.getComponent(SingleSlotReel);
            var s = a.Col * Game_Define.ROW + a.Row;
            this.m_effect.ShowGoldInReel(o, s, this.m_parentNode.getPosition(), this.m_thisNode);
            NodePool.GetInstance().SetEffectNode(this.m_thisNode, t, n, i, r);
          } else {
            this.m_thisNode = NodePool.GetInstance().GetSymbol(t);
            this.m_parentNode.insertChild(this.m_thisNode, 0);
          }
          this.SetGrayScale();
        };
        t.Init = function () {
          this.ClearAll();
          this.m_thisNode = NodePool.GetInstance().GetSymbol(-1);
          this.m_parentNode.insertChild(this.m_thisNode, 0);
          this.SetGrayScale();
        };
        t.SetInfo = function (e) {
          this.ChangeSymbol(e);
          this.m_thisNode.setPosition(this.CalPosY());
        };
        t.ClearAll = function () {
          if (this.m_thisNode) {
            if (Number(this.m_thisNode.name) !== Game_Define.Symbol.SYMBOL_14) {
              NodePool.GetInstance().ReturnSymbol(this.m_thisNode);
            } else {
              NodePool.GetInstance().ReturnEffect(this.m_thisNode);
            }
            this.SetUnGrayScale();
            this.ShowSymbol();
            this.SetShowOpacity();
            this.m_thisNode.removeFromParent();
            this.m_thisNode = null;
          }
        };
        t.SetPosition = function (e) {
          this.m_basePos = e;
          var t = this.CalPosY();
          this.m_thisNode.setPosition(t);
        };
        t.CalPosY = function (e) {
          if (undefined === e) {
            e = 0;
          }
          var t = this.m_basePos.clone();
          t.y += (0 - e + .5) * Game_Define.SymbolHeight;
          return t;
        };
        t.HideSymbol = function () {
          this.m_thisNode.active = false;
        };
        t.ShowSymbol = function () {
          this.m_thisNode.active = true;
        };
        t.SetSymbolVisiable = function (e) {
          this.m_thisNode.active = e;
        };
        t.SetSymbolDark = function (e) {
          var t = this.m_thisNode;
          var n = null;
          if (n = Number(t.name) <= Game_Define.Symbol.SYMBOL_10 ? t.getComponent(Sprite) : t.getComponentInChildren(Sprite)) {
            n.color = e ? Game_Define.Color.Dark : Game_Define.Color.Light;
          }
        };
        t.SetGrayScale = function () {
          if (this.m_thisNode.getComponent(Sprite)) {
            this.m_thisNode.getComponent(Sprite).grayscale = true;
          }
        };
        t.SetUnGrayScale = function () {
          if (this.m_thisNode.getComponent(Sprite)) {
            this.m_thisNode.getComponent(Sprite).grayscale = false;
          }
        };
        t.SetHideOpacity = function () {
          if (!this.m_thisNode.getComponent(UIOpacity)) {
            this.m_thisNode.addComponent(UIOpacity);
          }
          this.m_thisNode.getComponent(UIOpacity).opacity = Game_Define.Opacity.Dark;
        };
        t.SetShowOpacity = function () {
          if (!this.m_thisNode.getComponent(UIOpacity)) {
            this.m_thisNode.addComponent(UIOpacity);
          }
          this.m_thisNode.getComponent(UIOpacity).opacity = Game_Define.Opacity.Light;
        };
        _createClass(e, [{
          key: "ThisNode",
          get: function () {
            return this.m_thisNode;
          }
        }, {
          key: "Name",
          get: function () {
            return this.m_name;
          },
          set: function (e) {
            this.m_name = e;
          }
        }, {
          key: "SymbolIndex",
          get: function () {
            return this.m_symbolIndex;
          }
        }]);
        return e;
      }()) || _class$y;
      var _dec$z;
      var _class$z;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c020e2SF7BIrpbibhoI/p54", "SingleSlotReels", undefined);
      var ccclass$z = _decorator.ccclass;
      _dec$z = ccclass$z("SingleSlotReel");
      var SingleSlotReel = _dec$z(_class$z = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          (t = e.call.apply(e, [this].concat(i)) || this).m_isLoadingComplete = false;
          t.m_viewSize = null;
          t.m_effect = null;
          t.m_symbolSize = null;
          t.m_columnName = 0;
          t.m_allColumns = [];
          t.m_totalLength = null;
          t.m_spinBufferTime01 = .1;
          t.m_spinBufferTime02 = .1;
          t.m_riseTime = 0;
          t.m_upLength = 0;
          t.m_downLength = 15;
          t.m_spinTime = .25;
          t.m_spinDelayTime = 0;
          t.m_time = 0;
          t.m_stopTime = 0;
          t.m_reelStopTime = null;
          t.m_reelPreTime = null;
          t.m_isClickStopBtn = false;
          t.m_comparePos = [];
          t.m_reelXPos = 0;
          t.m_reelYPos = [];
          t.m_isNotChangeSymbolThisRound = {};
          t.m_isStop = false;
          t.m_isChangeToFinalSymbol = [false, false, false];
          t.m_nearWinNowCol = -1;
          t.m_nearWinMoreSpin = 6;
          t.m_nearWinLock = false;
          t.m_isScatter = false;
          t.m_isCoin = false;
          t.m_nearWinStartFunc = null;
          t.m_nearWinEndFunc = null;
          t.m_symbolInfo = undefined;
          t.m_reelPositionOffset = [v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0)];
          t.m_curNearWinSymbols = [];
          t.m_isPlayStopSound = false;
          t.m_isPlayStopEffect = false;
          t.m_reelSoundId = null;
          t.m_nearWinSoundId = [-1, -1, -1, -1, -1, -1];
          t.m_singleMgr = null;
          t.m_gameView = null;
          t.m_hasPlayNearWin = false;
          t.m_col = null;
          t.m_row = null;
          t.m_promises = new Array();
          t.m_isfgRounds = [];
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.onLoad = function () {
          var e = this;
          this.m_viewSize = this.node.getComponent(UITransform).contentSize;
          this.m_symbolSize = new Size(this.m_viewSize.width, this.m_viewSize.height);
          for (var t = 0; t < 3; ++t) {
            this.m_comparePos.push(this.m_viewSize.height * t);
            this.m_reelYPos.push(this.m_viewSize.height * (t - 1 - .5));
          }
          this.m_totalLength = this.m_viewSize.height * 3;
          var n = function () {
            var t = node$c.TempoSetting.TripleCoinTreasure;
            e.m_riseTime = t.BASE.RISE_TIME;
            e.m_upLength = t.BASE.UP_LENGTH;
            e.m_spinBufferTime01 = t.BASE.SPIN_BUFFER_TIME_01;
            e.m_spinBufferTime02 = t.BASE.SPIN_BUFFER_TIME_02;
            e.m_downLength = t.BASE.DOWN_LENGTH;
            e.m_spinTime = t.BASE.SPIN_SPEED;
            e.m_spinDelayTime = t.BASE.SPIN_DELAY_TIME;
          };
          n();
          node$c.AddCb(n);
        };
        n.Init = function (e, t, n, i, r, o) {
          this.m_gameView = e;
          this.m_singleMgr = r;
          this.m_symbolInfo = i;
          this.m_col = t;
          this.m_row = n;
          this.m_effect = o;
          this.CreateSymbol(this.m_col);
        };
        n.CreateSymbol = function (e) {
          for (var t = 0; t < 3; ++t) {
            this.m_allColumns.push(null);
          }
          for (var n = 2; n >= 0; --n) {
            var i = Game_Define.NODE_PREFIX_NAME[n];
            var r = new SingleCell(this.node, this.m_gameView, i, e, this.m_effect);
            this.m_allColumns[n] = r;
            if (2 == n) {
              r.CreateSymbol(this.RandomSymbolInfo());
            }
            this.m_allColumns[n].SetPosition(v3(this.ReelXPos, this.m_reelYPos[n]));
          }
          this.m_isLoadingComplete = true;
        };
        n.SetRecoverFgPlateInfo = function (e) {
          for (var t = 2; t >= 0; --t) {
            if (t == Game_Define.MIDDLE_PLATE_INDEX) {
              if (e.Symbol > Game_Define.Symbol.SYMBOL_14) {
                var n = this.RandomSymbolInfo(true);
                this.m_allColumns[t].ChangeSymbol(n);
              }
            } else {
              this.m_allColumns[t].CreateSymbol(this.RandomSymbolInfo());
            }
            this.m_allColumns[t].SetPosition(v3(this.ReelXPos, this.m_reelYPos[t]));
          }
        };
        n.ShowFgInit = function () {
          for (var e = 2; e >= 0; --e) {
            if (2 == e) {
              this.m_allColumns[e].CreateSymbol(this.RandomSymbolInfo());
            } else {
              this.m_allColumns[e].Init();
            }
            this.m_allColumns[e].SetPosition(v3(this.ReelXPos, this.m_reelYPos[e]));
          }
        };
        n.SetPlateSymbol = function (e) {
          this.m_reelStopTime = null;
          this.m_reelPreTime = null;
          this.m_allColumns[1].SetInfo(e);
          for (var t = 0; t < 3; ++t) {
            this.m_allColumns[t].SetPosition(v3(this.ReelXPos, this.m_reelYPos[t]));
          }
        };
        n.RandomSymbolInfo = function (e) {
          if (undefined === e) {
            e = false;
          }
          var t = new FgCellInfo();
          var n = Math.random();
          if (n < Game_Define.FAKE_COIN_ODD && !e) {
            var i = node$3.FormatNumberThousands(100 * Math.random());
            var r = node$1.GetNowBetValue();
            var o = Number(i) % Game_Define.CoinValue.length;
            t.Symbol = Game_Define.Symbol.SYMBOL_14;
            t.JPState = Number(node$3.FormatNumberThousands(4 * Math.random()));
            t.Number = Number(node$3.times(r, Game_Define.CoinValue[o]));
            t.JPMult = 0;
            if ((n = Math.random()) < Game_Define.FAKE_JP_ODD) {
              t.JPState = 0;
            }
          } else {
            t.Symbol = 5 + Math.floor(4 * Math.random());
          }
          return t;
        };
        n.StartSpin = function () {
          this.Time = 0;
          this.m_stopTime = 0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isPlayStopSound = false;
          this.m_isPlayStopEffect = false;
          this.m_hasPlayNearWin = false;
          this.m_nearWinNowCol = -1;
          this.IsScatter = false;
          this.IsCoin = false;
          this.m_reelStopTime = this.m_reelPreTime = null;
          this.m_isChangeToFinalSymbol = [false, false, false];
          for (var e in this.m_isNotChangeSymbolThisRound) this.m_isNotChangeSymbolThisRound[e] = true;
          for (var t = 0; t < 3; ++t) {
            this.m_allColumns[t].SetShowOpacity();
          }
        };
        n.PlayReelSound = function () {
          if (this.m_isClickStopBtn) {
            if (this.m_col == this.m_singleMgr.NowLastCow && this.m_row == this.m_singleMgr.NowLastRow && this.m_singleMgr.HasScatter) {
              node$5.Play(Game_Define.AudioClips.scatter_stop);
            } else if (this.m_col == this.m_singleMgr.NowLastCow && this.m_row == this.m_singleMgr.NowLastRow) {
              node$5.Play(Game_Define.AudioClips.reel_stop);
            }
          } else if (this.m_symbolInfo.Symbol === Game_Define.Symbol.SYMBOL_14) {
            node$5.Play(Game_Define.AudioClips.scatter_stop);
          } else {
            node$5.Play(Game_Define.AudioClips.reel_stop);
          }
        };
        n.ClickStopBtn = function () {
          if (0 !== this.m_stopTime) {
            this.m_isClickStopBtn = true;
            var e = Math.floor(this.Time / this.m_spinTime) * this.m_spinTime;
            var t = node$3.strip(e + this.m_spinTime);
            if (this.m_reelStopTime > t) {
              this.m_reelStopTime = t;
              this.m_reelPreTime = e;
            }
            var n = node$c.TempoSetting.TripleCoinTreasure.SPEED_UP_STOP_TIME(0, this.m_time);
            if (this.m_stopTime > n) {
              this.m_stopTime = node$3.strip(n);
            }
          }
        };
        n.Spin = function (e) {
          this.Time = node$3.strip(this.Time + e);
          if (!this.m_isStop) {
            this.SpinAll();
            if (!(0 === this.m_stopTime || this.Time < this.m_stopTime)) {
              this.m_isStop = true;
              if (this.m_nearWinEndFunc) {
                this.m_nearWinEndFunc();
                this.m_nearWinEndFunc = this.m_nearWinStartFunc = null;
              }
              if (this.m_reelSoundId) {
                node$5.Stop(this.m_reelSoundId);
                this.m_reelSoundId = null;
              }
            }
          }
        };
        n.SpinAll = function () {
          var e = this.CalculateSpinPos(false);
          for (var t = 0; t < 3; ++t) {
            this.Spin_RealSpinMultiple(this.m_allColumns[t], t, e);
          }
        };
        n.Spin_RealSpinMultiple = function (e, t, n) {
          var i = this.Time;
          var r = this.m_reelStopTime;
          var o = this.m_riseTime;
          var a = this.m_reelXPos;
          var s = this.m_reelYPos[t];
          if (t === Game_Define.MIDDLE_PLATE_INDEX && i > r + o + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
            s = this.m_reelYPos[t];
            e.SetPosition(v3(a, s));
          }
          if (i < this.m_riseTime) {
            e.SetPosition(v3(a, s + this.m_upLength));
          } else if (null === r || i < r + o) {
            var l = this.CheckMoveLength(n, this.m_comparePos[t], e, t);
            e.SetPosition(v3(a, s - l));
          } else if (i < r + o + this.m_spinBufferTime01) {
            var c = (i - r - o) / this.m_spinBufferTime01 * this.m_downLength;
            e.SetPosition(v3(a, s - c));
            this.CheckChangeToFinalSymbol(e, t, true);
          } else if (i < r + o + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
            var u = (i - r - o - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
            e.SetPosition(v3(a, s - this.m_downLength + u));
            this.CheckChangeToFinalSymbol(e, t, true);
          } else {
            this.CheckChangeToFinalSymbol(e, t, true);
            e.SetPosition(v3(a, s));
            this.CheckPlayStopSoundAndEffect();
            this.m_promises.push(this.ShowStopSymbolEffect());
          }
        };
        n.CheckMoveLength = function (e, t, n, i) {
          return e < t ? e : (this.m_isNotChangeSymbolThisRound[i] && e - t < this.m_viewSize.height ? (this.ChangeSymbol(n, this.m_isClickStopBtn, i), this.m_isNotChangeSymbolThisRound[i] = false) : this.m_isNotChangeSymbolThisRound[i] = true, e - this.m_totalLength);
        };
        n.ChangeSymbol = function (e, t, n) {
          var i = Number(e.Name);
          var r = this.m_reelPreTime;
          var o = this.m_riseTime * this.m_viewSize.height * 3;
          if (t) {
            if (1 === n) {
              if (this.m_symbolInfo.Symbol > Game_Define.Symbol.SYMBOL_14) {
                var a = this.RandomSymbolInfo(true);
                e.SetInfo(a);
              } else {
                e.SetInfo(this.m_symbolInfo);
              }
            } else {
              var s = this.RandomSymbolInfo();
              e.SetInfo(s);
            }
          } else if (i >= 0 && (null !== r && this.Time >= r || Math.abs(this.Time - (r + o)) < this.m_spinTime)) {
            if (this.m_symbolInfo.Symbol > Game_Define.Symbol.SYMBOL_14) {
              var l = this.RandomSymbolInfo(true);
              e.SetInfo(l);
            } else {
              e.SetInfo(this.m_symbolInfo);
            }
          } else {
            var c = this.RandomSymbolInfo();
            e.SetInfo(c);
          }
        };
        n.ClearAll = function () {
          this.m_allColumns[Game_Define.MIDDLE_PLATE_INDEX].ClearAll();
        };
        n.CheckChangeToFinalSymbol = function (e, t, n) {
          if (undefined === n) {
            n = false;
          }
          if (!this.m_isChangeToFinalSymbol[t]) {
            this.ChangeSymbol(e, n, t);
            this.m_isChangeToFinalSymbol[t] = true;
          }
        };
        n.CheckPlayStopSoundAndEffect = function () {
          if (!this.m_isPlayStopSound) {
            this.m_isPlayStopSound = true;
            this.PlayReelSound();
          }
        };
        n.SetSymbolInfos = function (e, t, n) {
          this.m_isfgRounds = n;
          this.m_symbolInfo = e;
          var i = this.m_riseTime;
          var r = Math.ceil((this.Time - i) / this.m_spinTime);
          r = 0 !== r ? r : 1;
          this.m_reelPreTime = this.m_spinTime * (t - 1 + r) + this.m_spinDelayTime + i;
          this.m_reelStopTime = this.m_spinTime * (t + r) + this.m_spinDelayTime + i;
          this.m_stopTime = this.m_reelStopTime + this.m_spinBufferTime01 + this.m_spinBufferTime02;
          if (e.Symbol === Game_Define.Symbol.SYMBOL_14) {
            this.IsCoin = true;
          }
        };
        n.SetSymbolDark = function (e) {
          for (var t = 0; t < 3; ++t) {
            this.m_allColumns[t].SetSymbolDark(e);
          }
        };
        n.CheckColIsStop = function () {
          return this.Time >= this.m_reelStopTime;
        };
        n.CalculateSpinPos = function (e) {
          if (undefined === e) {
            e = false;
          }
          var t = e ? this.m_spinTime / 2 : this.m_spinTime;
          return (this.Time - this.m_riseTime) % t / t * this.m_totalLength;
        };
        n.ShowStopSymbolEffect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            var r;
            var o;
            var a;
            var s;
            var l;
            var c;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    for (t = 0; t < 3; ++t) {
                      this.m_allColumns[t].HideSymbol();
                    }
                    if (this.IsCoin && !this.m_isPlayStopEffect) {
                      e.next = 4;
                      break;
                    }
                    this.m_allColumns[Game_Define.MIDDLE_PLATE_INDEX].ShowSymbol();
                    return e.abrupt("return");
                  case 4:
                    this.m_isPlayStopEffect = true;
                    n = this.m_symbolInfo.Symbol;
                    i = this.m_symbolInfo.JPState;
                    r = this.m_symbolInfo.Number;
                    o = this.m_symbolInfo.JPMult;
                    a = this.Col * Game_Define.ROW + this.Row;
                    s = this.node.getPosition().x;
                    l = this.node.parent.getPosition().y;
                    c = new Vec3(s, l);
                    this.m_singleMgr.SetLock(this.Col, this.Row);
                    e.next = 16;
                    return this.m_effect.ShowFgGold(a, c, n, r, i, o);
                  case 16:
                    e.next = 18;
                    return this.m_gameView.Reel.ShowUpdateInfo(this.m_singleMgr.node.name, this.m_isfgRounds);
                  case 18:
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
        n.ShowGoldStopEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return Promise.all(this.m_promises);
                  case 2:
                    this.m_promises = [];
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
        _createClass(t, [{
          key: "IsLoadingComplete",
          get: function () {
            return this.m_isLoadingComplete;
          }
        }, {
          key: "AllColumns",
          get: function () {
            return this.m_allColumns;
          }
        }, {
          key: "SpinTime",
          get: function () {
            return this.m_spinTime;
          },
          set: function (e) {
            this.m_spinTime = e;
          }
        }, {
          key: "Time",
          get: function () {
            return this.m_time;
          },
          set: function (e) {
            this.m_time = e;
          }
        }, {
          key: "IsClickStopBtn",
          get: function () {
            return this.m_isClickStopBtn;
          }
        }, {
          key: "ReelXPos",
          get: function () {
            return this.m_reelXPos;
          }
        }, {
          key: "IsStop",
          get: function () {
            return this.m_isStop;
          }
        }, {
          key: "IsScatter",
          get: function () {
            return this.m_isScatter;
          },
          set: function (e) {
            this.m_isScatter = e;
          }
        }, {
          key: "IsCoin",
          get: function () {
            return this.m_isCoin;
          },
          set: function (e) {
            this.m_isCoin = e;
          }
        }, {
          key: "SymbolInfo",
          get: function () {
            return this.m_symbolInfo;
          }
        }, {
          key: "CurNearWinSymbols",
          get: function () {
            return this.m_curNearWinSymbols;
          }
        }, {
          key: "Col",
          get: function () {
            return this.m_col;
          }
        }, {
          key: "Row",
          get: function () {
            return this.m_row;
          }
        }]);
        return t;
      }(Component)) || _class$z;
      var _dec$A;
      var _dec2$i;
      var _dec3$b;
      var _class2$i;
      var _descriptor$i;
      var _descriptor2$b;
      var _descriptor3$9;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8e2fcwF64dLtIGrXU2mohQ9", "SinglePlateMgr", undefined);
      var property$i = _decorator.property;
      _dec$A = property$i({
        type: Prefab,
        tooltip: "Single單一轉輪"
      });
      _dec2$i = property$i({
        type: Node,
        tooltip: "reelMask"
      });
      _dec3$b = property$i({
        type: Effect,
        tooltip: "MG Effect"
      });
      _class2$i = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_SingleSingleReel", _descriptor$i, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_reelMask", _descriptor2$b, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_effect", _descriptor3$9, _assertThisInitialized(t));
          t.m_hasScatter = false;
          t.m_nowLastCow = 0;
          t.m_nowLastRow = 0;
          t.m_singleReelNodes = new Array();
          t.m_spinTime = 0;
          t.m_SingleReelSpinTimes = [[1, 6, 11], [2, 7, 12], [3, 8, 13], [4, 9, 14], [5, 10, 15]];
          t.m_fastSingleReelSpinTimes = [[2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2], [2, 2, 2]];
          t.m_isLocked = [[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]];
          t.m_curCoinNum = 0;
          t.m_plateInfo = [];
          t.m_hasNewCoin = false;
          t.m_symbolSize = null;
          t.m_viewSize = null;
          t.m_count = 0;
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.onLoad = function () {};
        n.Init = function (e) {
          this.m_gameView = e;
          this.m_viewSize = this.node.getComponent(UITransform).contentSize;
          this.m_symbolSize = new Size((this.m_viewSize.width - Game_Define.SeparateLineWidth * (Game_Define.COL - 1)) / Game_Define.COL, this.m_viewSize.height / Game_Define.ROW);
          this.SetSingleReelSpinOrder();
          for (var t = 0; t < Game_Define.COL; ++t) {
            var n = [];
            var i = [];
            var r = this.m_symbolSize.width * (t + .5) - this.m_viewSize.width / 2 + Game_Define.SeparateLineWidth * t;
            for (var o = 0; o < Game_Define.ROW; ++o) {
              var a = instantiate(this.m_SingleSingleReel);
              this.m_reelMask[o].addChild(a);
              a.setPosition(r, 0);
              var s = 10 * t + o;
              a.name = s.toString();
              var l = new FgCellInfo();
              l.Symbol = Game_Define.Symbol.SYMBOL_14;
              a.getComponent(SingleSlotReel).Init(this.m_gameView, t, o, l, this, this.m_effect);
              n.push(a);
              i.push(false);
            }
            this.m_singleReelNodes.push(n);
            this.m_isLocked.push(i);
          }
        };
        n.SetRecoverFgPlateInfo = function (e) {
          this.PlateInfo = e;
          for (var t = 0; t < Game_Define.COL; ++t) {
            for (var n = 0; n < Game_Define.ROW; ++n) {
              var i = this.m_plateInfo[t].Col[n];
              var r = new FgCellInfo();
              r.Symbol = i.Symbol;
              r.Number = i.Number ? i.Number : 0;
              r.JPState = i.JPState ? r.JPState : 0;
              r.JPMult = i.JPMult ? r.JPMult : 0;
              this.m_singleReelNodes[t][n].getComponent(SingleSlotReel).SetRecoverFgPlateInfo(r);
              if (i.Symbol === Game_Define.Symbol.SYMBOL_14) {
                this.m_isLocked[t][n] = true;
              }
            }
          }
        };
        n.ShowFgInit = function () {
          this.ResetLock();
          this.m_gameView.SinglePlateMgr2.ResetLock();
          for (var e = 0; e < Game_Define.COL; ++e) {
            for (var t = 0; t < Game_Define.ROW; ++t) {
              this.m_singleReelNodes[e][t].getComponent(SingleSlotReel).ShowFgInit();
            }
          }
        };
        n.ShowFgInScaling = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var r;
            var o;
            var a;
            var s;
            var l;
            var c;
            var u;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = new Array();
                    for (i = 0; i < Game_Define.COL; ++i) {
                      for (r = 0; r < Game_Define.ROW; ++r) {
                        o = t.CSP[i].Col[r].Symbol ? t.CSP[i].Col[r].Symbol : 0;
                        a = t.CSP[i].Col[r].Number ? t.CSP[i].Col[r].Number : 0;
                        s = t.CSP[i].Col[r].JPState ? t.CSP[i].Col[r].JPState : null;
                        if (o > Game_Define.Symbol.SYMBOL_10 && o < Game_Define.Symbol.SYMBOL_17) {
                          this.m_isLocked[i][r] = true;
                          if (Game_Define.isGetP) {
                            this.m_gameView.SinglePlateMgr2.SetLock(i, r);
                          }
                          l = this.m_singleReelNodes[i][r].getComponent(SingleSlotReel).node.getPosition().x;
                          c = this.m_reelMask[r].getPosition().y;
                          u = new Vec3(l, c);
                          n.push(this.m_effect.ShowFgInScaling(i, r, u, Game_Define.Symbol.SYMBOL_14, s, a));
                        }
                      }
                    }
                    e.next = 4;
                    return Promise.all(n);
                  case 4:
                    if (!Game_Define.isGetP) {
                      e.next = 7;
                      break;
                    }
                    e.next = 7;
                    return this.PlayBounce(t);
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
        n.PlayBounce = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var r;
            var o;
            var a = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = new Array();
                    i = 0;
                  case 2:
                    if (!(i < t.CSP.length)) {
                      e.next = 13;
                      break;
                    }
                    r = _regeneratorRuntime().mark(function e(r) {
                      var o;
                      var s;
                      var l;
                      return _regeneratorRuntime().wrap(function (e) {
                        for (;;) {
                          switch (e.prev = e.next) {
                            case 0:
                              o = t.CSP[i].Col[r].Symbol ? t.CSP[i].Col[r].Symbol : 0;
                              s = t.CSP[i].Col[r].Number ? t.CSP[i].Col[r].Number : 0;
                              l = t.CSP[i].Col[r].JPState ? t.CSP[i].Col[r].JPState : null;
                              if (!(o > Game_Define.Symbol.SYMBOL_10)) {
                                e.next = 7;
                                break;
                              }
                              n.push(a.m_effect.ShowFgBounce(i, r, s, function (e, t, n, i) {
                                a.m_gameView.Effect.ShowFgUpPlantScaling(e, t, n, Game_Define.Symbol.SYMBOL_14, l, i, false);
                              }));
                              e.next = 7;
                              return node$2.Wait(a, Game_Define.Time.FgBounce);
                            case 7:
                            case "end":
                              return e.stop();
                          }
                        }
                      }, e);
                    });
                    o = 0;
                  case 5:
                    if (!(o < t.CSP[i].Col.length)) {
                      e.next = 10;
                      break;
                    }
                    return e.delegateYield(r(o), "t0", 7);
                  case 7:
                    o++;
                    e.next = 5;
                    break;
                  case 10:
                    i++;
                    e.next = 2;
                    break;
                  case 13:
                    e.next = 15;
                    return Promise.all(n);
                  case 15:
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
        n.SetLock = function (e, t) {
          this.m_isLocked[e][t] = true;
        };
        n.SetPlateInfo = function (e, t) {
          if (e.CSP && !(e.CSP.length < 1)) {
            this.PlateInfo = e.CSP;
            for (var n = 0; n < Game_Define.COL; ++n) {
              for (var i = 0; i < Game_Define.ROW; ++i) {
                if (!this.m_isLocked[n][i]) {
                  var r = this.m_plateInfo[n].Col[i];
                  var o = new FgCellInfo();
                  o.Symbol = r.Symbol;
                  o.Number = r.Number ? r.Number : 0;
                  o.JPState = r.JPState ? r.JPState : 0;
                  o.JPMult = r.JPMult ? r.JPMult : 0;
                  var a = 0;
                  if (Game_Define.isGetP && this.node.name == this.m_gameView.SinglePlateMgr.node.name) {
                    a = this.m_gameView.SinglePlateMgr2.Count;
                  }
                  var s = a + this.m_SingleReelSpinTimes[n][i];
                  this.m_singleReelNodes[n][i].getComponent(SingleSlotReel).SetSymbolInfos(o, s, t);
                }
              }
            }
          }
        };
        n.GetSymbolByIndex = function (e, t) {
          return this.m_singleReelNodes[e][t];
        };
        n.SetSingleReelSpinOrder = function () {
          this.m_count = 1;
          for (var e = 0; e < Game_Define.ROW; e++) {
            for (var t = 0; t < Game_Define.COL; t++) {
              if (!this.m_isLocked[t][e]) {
                this.m_SingleReelSpinTimes[t][e] = this.m_count;
                this.m_count++;
              }
            }
          }
        };
        n.SetSymbolDark = function (e, t, n) {
          if (undefined === n) {
            n = true;
          }
          this.m_singleReelNodes[e][t].getComponent(SingleSlotReel).SetSymbolDark(n);
        };
        n.ClickStopBtn = function () {
          this.m_hasScatter = false;
          for (var e = 0; e < Game_Define.COL; ++e) {
            for (var t = 0; t < Game_Define.ROW; ++t) {
              if (!this.m_isLocked[e][t]) {
                this.m_nowLastCow = e;
                this.m_nowLastRow = t;
                if (this.m_plateInfo[e].Col[t].Symbol === Game_Define.Symbol.SYMBOL_14) {
                  this.m_hasScatter = true;
                }
                this.m_singleReelNodes[e][t].getComponent(SingleSlotReel).ClickStopBtn();
              }
            }
          }
        };
        n.StartSpin = function (e) {
          if (!e.CSP || e.CSP.length < 1) {
            for (var t = 0; t < Game_Define.COL; ++t) {
              for (var n = 0; n < Game_Define.ROW; ++n) {
                this.m_isLocked[t][n] = true;
              }
            }
            this.m_count = 1;
          } else {
            this.SetSingleReelSpinOrder();
            this.HasNewCoin = false;
            this.m_spinTime = 0;
            for (var i = 0; i < Game_Define.COL; ++i) {
              for (var r = 0; r < Game_Define.ROW; ++r) {
                if (!this.m_isLocked[i][r]) {
                  this.m_singleReelNodes[i][r].getComponent(SingleSlotReel).StartSpin();
                }
              }
            }
          }
        };
        n.Spin = function (e) {
          if (!this.IsPlateStop()) {
            this.m_spinTime = node$3.strip(this.m_spinTime + e);
            for (var t = 0; t < Game_Define.COL; ++t) {
              for (var n = 0; n < Game_Define.ROW; ++n) {
                if (!this.m_isLocked[t][n]) {
                  this.m_singleReelNodes[t][n].getComponent(SingleSlotReel).Spin(e);
                }
              }
            }
          }
        };
        n.IsPlateStop = function () {
          if (!this.node.active) {
            return true;
          }
          for (var e = 0; e < Game_Define.COL; ++e) {
            for (var t = 0; t < Game_Define.ROW; ++t) {
              if (!this.m_isLocked[e][t] && !this.m_singleReelNodes[e][t].getComponent(SingleSlotReel).IsStop) {
                return false;
              }
            }
          }
          return true;
        };
        n.ClearAll = function () {
          for (var e = 0; e < Game_Define.COL; ++e) {
            for (var t = 0; t < Game_Define.ROW; ++t) {
              this.m_singleReelNodes[e][t].getComponent(SingleSlotReel).ClearAll();
            }
          }
          this.CurCoinNum = 0;
        };
        n.ResetLock = function () {
          for (var e = 0; e < Game_Define.COL; ++e) {
            for (var t = 0; t < Game_Define.ROW; ++t) {
              this.IsLocked[e][t] = false;
            }
          }
        };
        n.GetPosition = function (e) {
          var t = Math.floor(e / Game_Define.ROW);
          var n = Math.floor(e % Game_Define.ROW);
          var i = this.m_singleReelNodes[t][n].getComponent(SingleSlotReel).node.getPosition().x;
          var r = this.m_reelMask[n].getPosition().y;
          return new Vec3(i, r);
        };
        n.GetPositionbyColRow = function (e, t) {
          var n = this.m_singleReelNodes[e][t].getComponent(SingleSlotReel).node.getPosition().x;
          var i = this.m_reelMask[t].getPosition().y;
          return new Vec3(n, i);
        };
        n.ShowDeclareEnd = function () {
          if (Game_Define.isGetP) {
            var e = new Vec3(0, -30);
            this.m_gameView.SinglePlateMgr.node.setPosition(e);
            var t = new Vec3(.85, .85);
            this.m_gameView.SinglePlateMgr.node.setScale(t);
          } else {
            var n = new Vec3(0, 0);
            this.m_gameView.SinglePlateMgr.node.setPosition(n);
            var i = new Vec3(1, 1);
            this.m_gameView.SinglePlateMgr.node.setScale(i);
          }
        };
        n.ShowGoldStopEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = new Array();
                    for (n = 0; n < Game_Define.COL; ++n) {
                      for (i = 0; i < Game_Define.ROW; ++i) {
                        t.push(this.m_singleReelNodes[n][i].getComponent(SingleSlotReel).ShowGoldStopEnd());
                      }
                    }
                    e.next = 4;
                    return Promise.all(t);
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
        _createClass(t, [{
          key: "HasScatter",
          get: function () {
            return this.m_hasScatter;
          }
        }, {
          key: "NowLastCow",
          get: function () {
            return this.m_nowLastCow;
          }
        }, {
          key: "NowLastRow",
          get: function () {
            return this.m_nowLastRow;
          }
        }, {
          key: "SingleReelNodes",
          get: function () {
            return this.m_singleReelNodes;
          }
        }, {
          key: "IsLocked",
          get: function () {
            return this.m_isLocked;
          },
          set: function (e) {
            this.m_isLocked = e;
          }
        }, {
          key: "CurCoinNum",
          get: function () {
            return this.m_curCoinNum;
          },
          set: function (e) {
            this.m_curCoinNum = e;
          }
        }, {
          key: "PlateInfo",
          get: function () {
            return this.m_plateInfo;
          },
          set: function (e) {
            this.m_plateInfo = e;
          }
        }, {
          key: "HasNewCoin",
          get: function () {
            return this.m_hasNewCoin;
          },
          set: function (e) {
            this.m_hasNewCoin = e;
          }
        }, {
          key: "Count",
          get: function () {
            return this.m_count;
          }
        }]);
        return t;
      }(Component);
      _descriptor$i = _applyDecoratedDescriptor(_class2$i.prototype, "m_SingleSingleReel", [_dec$A], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$b = _applyDecoratedDescriptor(_class2$i.prototype, "m_reelMask", [_dec2$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$9 = _applyDecoratedDescriptor(_class2$i.prototype, "m_effect", [_dec3$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c0349IGpfVC+6phttlFCIyA", "GameView", undefined);
      var _dec$C;
      var _dec2$k;
      var _dec3$d;
      var _dec4$a;
      var _dec5$7;
      var _dec6$5;
      var _class2$k;
      var _descriptor$k;
      var _descriptor2$d;
      var _descriptor3$b;
      var _descriptor4$7;
      var _descriptor5$5;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "39a80IcKxhP+ZldEOvHBOmm", "Declare", undefined);
      var ccclass$C = _decorator.ccclass;
      var property$k = _decorator.property;
      var ANIMATION_SKIN$2;
      var ANIMATION_NAME$b;
      var Event_AnimName$1;
      !function (e) {
        e.D_1_G = "1_G";
        e.D_1_P = "1_P";
        e.D_1_R = "1_R";
        e.D_2_PG = "2_PG";
        e.D_2_PR = "2_PR";
        e.D_2_RG = "2_RG";
        e.D_3_PRG = "3_PRG";
      }(ANIMATION_SKIN$2 || (ANIMATION_SKIN$2 = {}));
      (function (e) {
        e.Start = "Start";
        e.Loop = "Loop";
        e.End = "End";
      })(ANIMATION_NAME$b || (ANIMATION_NAME$b = {}));
      (function (e) {
        e.Trans = "Trans";
      })(Event_AnimName$1 || (Event_AnimName$1 = {}));
      _dec$C = ccclass$C("Declare");
      _dec2$k = property$k({
        type: sp.Skeleton,
        tooltip: "動畫"
      });
      _dec3$d = property$k({
        type: Sprite,
        tooltip: "中間文字"
      });
      _dec4$a = property$k({
        type: Sprite,
        tooltip: "R文字"
      });
      _dec5$7 = property$k({
        type: Sprite,
        tooltip: "L文字"
      });
      _dec6$5 = property$k({
        type: Sprite,
        tooltip: "3個都有文字"
      });
      _class2$k = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var r = 0; r < n; r++) {
            i[r] = arguments[r];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_declare", _descriptor$k, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_mTexts", _descriptor2$d, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_rTexts", _descriptor3$b, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_lTexts", _descriptor4$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_texts", _descriptor5$5, _assertThisInitialized(t));
          t.m_gameView = null;
          t.promises = new Array();
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          this.node.active = false;
        };
        n.ShowDeclare = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var r;
            var o;
            var a;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.node.active) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    this.Close();
                    this.node.active = true;
                    r = null;
                    if (t && n && i) {
                      r = ANIMATION_SKIN$2.D_3_PRG;
                      for (o = 0; o < this.m_texts.length; o++) {
                        this.m_texts[o].node.active = true;
                      }
                    } else if (t && i) {
                      r = ANIMATION_SKIN$2.D_2_PG;
                      this.m_rTexts[0].node.active = true;
                      this.m_lTexts[0].node.active = true;
                    } else if (t && n) {
                      r = ANIMATION_SKIN$2.D_2_PR;
                      this.m_rTexts[1].node.active = true;
                      this.m_lTexts[1].node.active = true;
                    } else if (n && i) {
                      r = ANIMATION_SKIN$2.D_2_RG;
                      this.m_rTexts[2].node.active = true;
                      this.m_lTexts[2].node.active = true;
                    } else if (n) {
                      r = ANIMATION_SKIN$2.D_1_R;
                      this.m_mTexts[0].node.active = true;
                    } else if (t) {
                      r = ANIMATION_SKIN$2.D_1_P;
                      this.m_mTexts[1].node.active = true;
                    } else if (i) {
                      r = ANIMATION_SKIN$2.D_1_G;
                      this.m_mTexts[2].node.active = true;
                    }
                    this.m_declare.setSkin(r);
                    a = this.m_declare.findAnimation(ANIMATION_NAME$b.Start).duration;
                    this.promises.push(this.PlayWaitTime(a));
                    this.m_declare.clearTracks();
                    node$5.Play(Game_Define.AudioClips.FG_declare);
                    node$5.Play(Game_Define.AudioClips.MG_god);
                    e.next = 14;
                    return SpineKit.PlayAnimation(this.m_declare, ANIMATION_NAME$b.Start);
                  case 14:
                    SpineKit.PlayAnimation(this.m_declare, ANIMATION_NAME$b.Loop, true);
                  case 15:
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
        n.Close = function () {
          for (var e = 0; e < this.m_mTexts.length; e++) {
            this.m_mTexts[e].node.active = false;
          }
          for (var t = 0; t < this.m_rTexts.length; t++) {
            this.m_rTexts[t].node.active = false;
          }
          for (var n = 0; n < this.m_lTexts.length; n++) {
            this.m_lTexts[n].node.active = false;
          }
          for (var i = 0; i < this.m_texts.length; i++) {
            this.m_texts[i].node.active = false;
          }
        };
        n.PlayWaitTime = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return node$2.Wait(this, t);
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
        n.ShowDeclareEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return Promise.all(this.promises);
                  case 2:
                    node$5.Play(Game_Define.AudioClips.FG_in1);
                    e.next = 5;
                    return SpineKit.PlayAnimation(this.m_declare, ANIMATION_NAME$b.End, false, 0, function (e) {
                      if (e === Event_AnimName$1.Trans) {
                        t.m_gameView.SlotReels.node.active = false;
                        t.m_gameView.SinglePlateMgr.node.active = true;
                        t.m_gameView.Logo.node.active = false;
                        if (Game_Define.isGetP) {
                          t.m_gameView.SinglePlateMgr2.node.active = true;
                        }
                        t.m_gameView.SinglePlateMgr.ShowFgInit();
                        t.m_gameView.SinglePlateMgr2.ShowFgInit();
                        t.m_gameView.ChangeFadeType(1, Game_Define.AudioClips.FG_BGM);
                        t.m_gameView.Character.ShowDeclareEnd();
                        t.m_gameView.Effect.ShowDeclareEnd();
                        t.m_gameView.SinglePlateMgr.ShowDeclareEnd();
                        t.m_gameView.Reel.ShowDeclareEnd();
                        t.m_gameView.GameBg.ShowFg();
                      }
                    });
                  case 5:
                    this.node.active = false;
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
        n.SetMTxt = function (e) {
          var t = node.GetGameAtlas();
          for (var n = 0; n < this.m_mTexts.length; n++) {
            if (t.getSpriteFrame(e[n])) {
              this.m_mTexts[n].spriteFrame = t.getSpriteFrame(e[n]);
            }
          }
        };
        n.SetRTxt = function (e) {
          var t = node.GetGameAtlas();
          for (var n = 0; n < this.m_rTexts.length; n++) {
            if (t.getSpriteFrame(e[n])) {
              this.m_rTexts[n].spriteFrame = t.getSpriteFrame(e[n]);
            }
          }
        };
        n.SetLTxt = function (e) {
          var t = node.GetGameAtlas();
          for (var n = 0; n < this.m_lTexts.length; n++) {
            if (t.getSpriteFrame(e[n])) {
              this.m_lTexts[n].spriteFrame = t.getSpriteFrame(e[n]);
            }
          }
        };
        n.SetTxt = function (e) {
          var t = node.GetGameAtlas();
          for (var n = 0; n < this.m_texts.length; n++) {
            if (t.getSpriteFrame(e[n])) {
              this.m_texts[n].spriteFrame = t.getSpriteFrame(e[n]);
            }
          }
        };
        return t;
      }(Component);
      _descriptor$k = _applyDecoratedDescriptor(_class2$k.prototype, "m_declare", [_dec2$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$d = _applyDecoratedDescriptor(_class2$k.prototype, "m_mTexts", [_dec3$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$b = _applyDecoratedDescriptor(_class2$k.prototype, "m_rTexts", [_dec4$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor4$7 = _applyDecoratedDescriptor(_class2$k.prototype, "m_lTexts", [_dec5$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor5$5 = _applyDecoratedDescriptor(_class2$k.prototype, "m_texts", [_dec6$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
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