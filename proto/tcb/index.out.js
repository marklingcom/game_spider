System.register("chunks:///main.js", ["./ConnectionManager-d745d076.js", "cc"], function (exports, module) {
  "use strict";

  var _applyDecoratedDescriptor;
  var _inheritsLoose;
  var _initializerDefineProperty;
  var _assertThisInitialized;
  var node;
  var _asyncToGenerator;
  var _regeneratorRuntime;
  var node$1;
  var node$2;
  var SlotBottomBarState;
  var node$3;
  var CommonState;
  var node$4;
  var CommonEventName;
  var node$5;
  var node$6;
  var BottomBar_UIName;
  var node$7;
  var _createClass;
  var node$8;
  var node$9;
  var _createForOfIteratorHelperLoose;
  var BaseState;
  var node$a;
  var node$b;
  var node$c;
  var node$d;
  var node$e;
  var DEFAULT_TITLE_KEY;
  var node$f;
  var UpdateAppManager;
  var UpdateAutoShow;
  var UpdateBackpack;
  var UpdateDailyMission;
  var UpdateGaiaManager;
  var UpdateStateManager;
  var UpdateIframeCommand;
  var UpdateLocaleString;
  var UpdateTrial;
  var UpdateBuyBonus;
  var UpdateCommonGame;
  var UpdatelocalStorage;
  var UpdateSoundManager;
  var UpdateSoundAudioManager;
  var UpdateDebris;
  var UpdateNewExtra;
  var UpdateGiftCode;
  var UpdateMsgBox;
  var UpdateNewBottombar;
  var UpdateEventManager;
  var UpdateLoadPrefabManager;
  var UpdateFunctionControlManager;
  var UpdateConnectionManager;
  var UpdateNotificationManager;
  var UpdateDefine;
  var UpdateTools;
  var UpdateRoundController;
  var UpdateExtraBetController;
  var UpdateFakeServer;
  var UpdateTempoSetting;
  var UpdateDebugManager;
  var node$g;
  var node$h;
  var node$i;
  var node$j;
  var node$k;
  var node$l;
  var node$m;
  var node$n;
  var node$o;
  var cclegacy;
  var _decorator;
  var sp;
  var Component;
  var instantiate;
  var Enum;
  var Vec3;
  var Prefab;
  var Button;
  var input;
  var Input;
  var KeyCode;
  var Node;
  var Sprite;
  var CCString;
  var Label;
  var Animation;
  var tween;
  var v3;
  var UITransform;
  var easing;
  var game;
  var Color;
  var log;
  var JsonAsset;
  var math;
  var ProgressBar;
  var UIOpacity;
  var error;
  var CCFloat;
  var v2;
  var director;
  var Director;
  var UIRenderer;
  var RichText;
  var CCBoolean;
  var Tween;
  var SpriteFrame;
  var randomRangeInt;
  var Size;
  var SpriteAtlas;
  var screen$1;
  var view;
  var ResolutionPolicy;
  var ccenum;
  var EventHandler;
  var assetManager;
  var lerp;
  var NodeEventType;
  var TransformBit;
  var Material;
  var Gradient;
  var v4;
  var Texture2D;
  var clamp01;
  var color;
  var EffectAsset;
  var CCInteger;
  var ImageAsset;
  var AnimationClip;
  var ParticleSystem2D;
  var Vec2;
  var TweenSystem;
  var ScrollView;
  var isValid;
  var CCClass;
  var sys;
  var js;
  var settings;
  var Settings;
  var VERSION;
  var find;
  return {
    setters: [function (e) {
      _applyDecoratedDescriptor = e._;
      _inheritsLoose = e.a;
      _initializerDefineProperty = e.b;
      _assertThisInitialized = e.c;
      node = e.n;
      _asyncToGenerator = e.d;
      _regeneratorRuntime = e.e;
      node$1 = e.f;
      node$2 = e.g;
      SlotBottomBarState = e.S;
      node$3 = e.h;
      CommonState = e.C;
      node$4 = e.i;
      CommonEventName = e.j;
      node$5 = e.k;
      node$6 = e.l;
      BottomBar_UIName = e.B;
      node$7 = e.m;
      _createClass = e.o;
      node$8 = e.p;
      node$9 = e.q;
      _createForOfIteratorHelperLoose = e.r;
      BaseState = e.s;
      node$a = e.t;
      node$b = e.u;
      node$c = e.v;
      node$d = e.w;
      node$e = e.x;
      DEFAULT_TITLE_KEY = e.D;
      node$f = e.y;
      UpdateAppManager = e.U;
      UpdateAutoShow = e.z;
      UpdateBackpack = e.A;
      UpdateDailyMission = e.E;
      UpdateGaiaManager = e.F;
      UpdateStateManager = e.G;
      UpdateIframeCommand = e.H;
      UpdateLocaleString = e.I;
      UpdateTrial = e.J;
      UpdateBuyBonus = e.K;
      UpdateCommonGame = e.L;
      UpdatelocalStorage = e.M;
      UpdateSoundManager = e.N;
      UpdateSoundAudioManager = e.O;
      UpdateDebris = e.P;
      UpdateNewExtra = e.Q;
      UpdateGiftCode = e.R;
      UpdateMsgBox = e.T;
      UpdateNewBottombar = e.V;
      UpdateEventManager = e.W;
      UpdateLoadPrefabManager = e.X;
      UpdateFunctionControlManager = e.Y;
      UpdateConnectionManager = e.Z;
      UpdateNotificationManager = e.$;
      UpdateDefine = e.a0;
      UpdateTools = e.a1;
      UpdateRoundController = e.a2;
      UpdateExtraBetController = e.a3;
      UpdateFakeServer = e.a4;
      UpdateTempoSetting = e.a5;
      UpdateDebugManager = e.a6;
      node$g = e.a7;
      node$h = e.a8;
      node$i = e.a9;
      node$j = e.aa;
      node$k = e.ab;
      node$l = e.ac;
      node$m = e.ad;
      node$n = e.ae;
      node$o = e.af;
    }, function (e) {
      cclegacy = e.cclegacy;
      _decorator = e._decorator;
      sp = e.sp;
      Component = e.Component;
      instantiate = e.instantiate;
      Enum = e.Enum;
      Vec3 = e.Vec3;
      Prefab = e.Prefab;
      Button = e.Button;
      input = e.input;
      Input = e.Input;
      KeyCode = e.KeyCode;
      Node = e.Node;
      Sprite = e.Sprite;
      CCString = e.CCString;
      Label = e.Label;
      Animation = e.Animation;
      tween = e.tween;
      v3 = e.v3;
      UITransform = e.UITransform;
      easing = e.easing;
      game = e.game;
      Color = e.Color;
      log = e.log;
      JsonAsset = e.JsonAsset;
      math = e.math;
      ProgressBar = e.ProgressBar;
      UIOpacity = e.UIOpacity;
      error = e.error;
      CCFloat = e.CCFloat;
      v2 = e.v2;
      director = e.director;
      Director = e.Director;
      UIRenderer = e.UIRenderer;
      RichText = e.RichText;
      CCBoolean = e.CCBoolean;
      Tween = e.Tween;
      SpriteFrame = e.SpriteFrame;
      randomRangeInt = e.randomRangeInt;
      Size = e.Size;
      SpriteAtlas = e.SpriteAtlas;
      screen$1 = e.screen;
      view = e.view;
      ResolutionPolicy = e.ResolutionPolicy;
      ccenum = e.ccenum;
      EventHandler = e.EventHandler;
      assetManager = e.assetManager;
      lerp = e.lerp;
      NodeEventType = e.NodeEventType;
      TransformBit = e.TransformBit;
      Material = e.Material;
      Gradient = e.Gradient;
      v4 = e.v4;
      Texture2D = e.Texture2D;
      clamp01 = e.clamp01;
      color = e.color;
      EffectAsset = e.EffectAsset;
      CCInteger = e.CCInteger;
      ImageAsset = e.ImageAsset;
      AnimationClip = e.AnimationClip;
      ParticleSystem2D = e.ParticleSystem2D;
      Vec2 = e.Vec2;
      TweenSystem = e.TweenSystem;
      ScrollView = e.ScrollView;
      isValid = e.isValid;
      CCClass = e.CCClass;
      sys = e.sys;
      js = e.js;
      settings = e.settings;
      Settings = e.Settings;
      VERSION = e.VERSION;
      find = e.find;
    }],
    execute: function () {
      var _dec;
      var _dec2;
      var _class;
      var _class2;
      var _descriptor;
      cclegacy._RF.push({}, "ff64a2sV3VJHJ2CbrP1IWUr", "BaseSpine", undefined);
      var ccclass = _decorator.ccclass;
      var property = _decorator.property;
      _dec = ccclass("BaseSpine");
      _dec2 = property({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _class2 = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.Stop = function () {
          this.m_spine.clearTrack(0);
          this.m_spine.setToSetupPose();
        };
        o.SetSkin = function (e, t) {
          if (undefined === t) {
            t = this.m_spine;
          }
          t.setSkin(e);
          this.SetNodeActivity(false);
        };
        o.SetNodeActivity = function (e) {
          if (this.node.active != e) {
            this.node.active = e;
          }
        };
        o.GetAnimationTime = function (e, t, o) {
          if (undefined === t) {
            t = false;
          }
          if (undefined === o) {
            o = this.m_spine;
          }
          o.node.parent.active = true;
          var i = o.findAnimation(e).duration;
          o.node.parent.active = t;
          return i;
        };
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
      var BaseSpine = _dec(_class = _class2) || _class;
      var _dec$1;
      var _class$1;
      var _class2$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3d769yxz5hMsZtWAT+Ft2lW", "NodeObjPool", undefined);
      var ccclass$1 = _decorator.ccclass;
      _dec$1 = ccclass$1("ObjectPool");
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
      _class2$1._instance = new _class2$1();
      var NodeObjPool = _dec$1(_class$1 = _class2$1) || _class$1;
      var _dec$2;
      var _class$2;
      var _class2$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1e66aEqUdhPVqwfMzZJLeIP", "GameDefine", undefined);
      var ccclass$2 = _decorator.ccclass;
      var SymbolType;
      !function (e) {
        e[e.Symbol_9 = 0] = "Symbol_9";
        e[e.Symbol_10 = 1] = "Symbol_10";
        e[e.Symbol_J = 2] = "Symbol_J";
        e[e.Symbol_Q = 3] = "Symbol_Q";
        e[e.Symbol_K = 4] = "Symbol_K";
        e[e.Symbol_A = 5] = "Symbol_A";
        e[e.DEER = 6] = "DEER";
        e[e.WOLF = 7] = "WOLF";
        e[e.BEAR = 8] = "BEAR";
        e[e.EAGLE = 9] = "EAGLE";
        e[e.BUFFALO = 10] = "BUFFALO";
        e[e.GOLD_BUFFALO_CHANGE = 11] = "GOLD_BUFFALO_CHANGE";
        e[e.WILD = 12] = "WILD";
        e[e.COIN1 = 13] = "COIN1";
        e[e.COIN2 = 14] = "COIN2";
        e[e.COIN3 = 15] = "COIN3";
        e[e.SCATTER = 16] = "SCATTER";
        e[e.COLLECT = 17] = "COLLECT";
        e[e.WILD_x2 = 18] = "WILD_x2";
        e[e.WILD_x3 = 19] = "WILD_x3";
        e[e.GOLD_BUFFALO = 20] = "GOLD_BUFFALO";
      }(SymbolType || (SymbolType = {}));
      var FGGameType;
      var FGGameType_From_API;
      var WinType;
      var GameState;
      !function (e) {
        e[e.DoubleUp = 0] = "DoubleUp";
        e[e.Gold = 1] = "Gold";
        e[e.Cash = 2] = "Cash";
        e[e.Total = 3] = "Total";
      }(FGGameType || (FGGameType = {}));
      (function (e) {
        e[e.MG = 0] = "MG";
        e[e.DoubleUp = 1] = "DoubleUp";
        e[e.Gold = 2] = "Gold";
        e[e.Cash = 3] = "Cash";
        e[e.Double_Gold = 4] = "Double_Gold";
        e[e.Double_Cash = 5] = "Double_Cash";
        e[e.Gold_Cash = 6] = "Gold_Cash";
        e[e.Double_Gold_Cash = 7] = "Double_Gold_Cash";
        e[e.Double_Gold_Cash_Super = 8] = "Double_Gold_Cash_Super";
      })(FGGameType_From_API || (FGGameType_From_API = {}));
      (function (e) {
        e[e.Normal = 0] = "Normal";
        e[e.Big = 1] = "Big";
        e[e.Mega = 2] = "Mega";
        e[e.Super = 3] = "Super";
      })(WinType || (WinType = {}));
      (function (e) {
        e[e.FEATURE_SHOW = 0] = "FEATURE_SHOW";
        e[e.WAIT_READY = 1] = "WAIT_READY";
        e[e.SHOW_INTRO = 2] = "SHOW_INTRO";
        e[e.ENTER_FREEGAME = 3] = "ENTER_FREEGAME";
        e[e.FREEGAME_READY = 4] = "FREEGAME_READY";
        e[e.FREEGAME_EFFECT = 5] = "FREEGAME_EFFECT";
        e[e.LEAVE_FREEGAME = 6] = "LEAVE_FREEGAME";
        e[e.FREEGAME_EFFECT_AFTER_AWARD = 7] = "FREEGAME_EFFECT_AFTER_AWARD";
        e[e.AWARD = 8] = "AWARD";
        e[e.ROUND_END = 9] = "ROUND_END";
        e[e.ROUND_SHOW_END = 10] = "ROUND_SHOW_END";
        e[e.UNSHOW_PREPARE = 11] = "UNSHOW_PREPARE";
        e[e.LEVEL_UP = 12] = "LEVEL_UP";
      })(GameState || (GameState = {}));
      _dec$2 = ccclass$2("GameDefine");
      _class2$2 = function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        _inheritsLoose(t, e);
        t.GetZIndex = function (e, o, i) {
          var n = e * t.ROW_LENGTH + (t.ROW_LENGTH - o);
          if (i == SymbolType.BUFFALO || i == SymbolType.GOLD_BUFFALO_CHANGE) {
            n = 100;
          } else if (i == SymbolType.COIN1 || i == SymbolType.COIN2 || i == SymbolType.COIN3 || i == SymbolType.SCATTER) {
            n = 200;
          } else if (i == SymbolType.GOLD_BUFFALO) {
            n = 300;
          }
          return n;
        };
        return t;
      }(Component);
      _class2$2.LOG_DEBUG_STATE = false;
      _class2$2.Ver = "31";
      _class2$2.CHILI_SPICY_HOT = 4;
      _class2$2.GameId = 460;
      _class2$2.ShortGameName = "tcb";
      _class2$2.IsPreviewPlaying = false;
      _class2$2.COL_LENGTH = 5;
      _class2$2.ROW_LENGTH = 4;
      _class2$2.UnshowSpinAck = null;
      _class2$2.SYMBOL_SPINE_PREFAB_KEY = "Symbol_";
      _class2$2.BARREL_HINT = "Barrel_Hint";
      _class2$2.BARREL_LEVEL_UP_EFFECT = "Barrel_Level_Up";
      _class2$2.GAME_STATE = Enum(GameState);
      _class2$2.CASH_FRAME_SPINE_KEY_NAME = "CashFrame_Spine";
      _class2$2.CASH_FRAME_SPRITE_KEY_NAME = "CashFrame_Sprite";
      _class2$2.WIN_ODDS = [1, 3, 6, 15, 30];
      _class2$2.EFFECT_LAYER_NUMS = 3;
      _class2$2.LevelUpLoopProbability = .15;
      _class2$2.STOP_ANIM_TIME = .5;
      _class2$2.SYMBOL_ZINDEX = {
        Layer_Min: -1,
        Layer0: 0,
        Layer1: 1,
        Layer2: 2,
        Layer3: 3,
        Layer4: 4,
        Layer_Max: 5
      };
      _class2$2.LAYERS = {
        Layer0: 0,
        Layer1: 1,
        Layer2: 2,
        Layer3: 3
      };
      _class2$2.SYMBOL_LAYER_TYPE = [{
        Layer: _class2$2.LAYERS.Layer0,
        SymbolIdx: [SymbolType.Symbol_9, SymbolType.Symbol_10, SymbolType.Symbol_J, SymbolType.Symbol_Q, SymbolType.Symbol_K, SymbolType.DEER, SymbolType.WOLF, SymbolType.BEAR, SymbolType.EAGLE, SymbolType.WILD, SymbolType.WILD_x2, SymbolType.WILD_x3]
      }, {
        Layer: _class2$2.LAYERS.Layer1,
        SymbolIdx: [SymbolType.SCATTER, SymbolType.COIN1, SymbolType.COIN2, SymbolType.COIN3, SymbolType.BUFFALO, SymbolType.GOLD_BUFFALO, SymbolType.GOLD_BUFFALO_CHANGE]
      }];
      _class2$2.HAS_CASH_SYMBOL = [SymbolType.BUFFALO, SymbolType.GOLD_BUFFALO, SymbolType.GOLD_BUFFALO_CHANGE, SymbolType.COLLECT];
      _class2$2.MANUAL_STRING = ["String_01", "String_02", "String_03", "String_04"];
      _class2$2.MANUAL_TITLE_STRING = "String_00";
      _class2$2.FG_DECLARE_TXT = ["Txt_BG_Declare_01", "Txt_BG_Declare_02"];
      _class2$2.USE_ITEM_REASON = {
        NORMAL: 0,
        USING: 1
      };
      _class2$2.ShowDisplayValue = null;
      _class2$2.NEED_PLAY_REEL_STOP_ANIM_SYMBOL = [SymbolType.COIN1, SymbolType.COIN2, SymbolType.COIN3, SymbolType.GOLD_BUFFALO, SymbolType.SCATTER];
      _class2$2.InitialPlateData = [[SymbolType.DEER, SymbolType.DEER, SymbolType.DEER, SymbolType.DEER], [SymbolType.WOLF, SymbolType.WOLF, SymbolType.WOLF, SymbolType.WOLF], [SymbolType.BEAR, SymbolType.BEAR, SymbolType.BEAR, SymbolType.BEAR], [SymbolType.BUFFALO, SymbolType.BUFFALO, SymbolType.BUFFALO, SymbolType.BUFFALO], [SymbolType.EAGLE, SymbolType.EAGLE, SymbolType.EAGLE, SymbolType.EAGLE]];
      _class2$2.MGRandSymbolArray = [SymbolType.Symbol_9, SymbolType.Symbol_10, SymbolType.Symbol_J, SymbolType.Symbol_Q, SymbolType.Symbol_K, SymbolType.Symbol_A, SymbolType.DEER, SymbolType.WOLF, SymbolType.BEAR, SymbolType.EAGLE, SymbolType.BUFFALO, SymbolType.WILD, SymbolType.COIN1, SymbolType.COIN2, SymbolType.COIN3];
      _class2$2.FGRandSymbolArray = [SymbolType.Symbol_9, SymbolType.Symbol_10, SymbolType.Symbol_J, SymbolType.Symbol_Q, SymbolType.Symbol_K, SymbolType.Symbol_A, SymbolType.DEER, SymbolType.WOLF, SymbolType.BEAR, SymbolType.BUFFALO, SymbolType.EAGLE, SymbolType.WILD, SymbolType.SCATTER];
      _class2$2.FakeRandSymbolArray = [SymbolType.Symbol_9, SymbolType.Symbol_10, SymbolType.Symbol_J, SymbolType.Symbol_Q, SymbolType.Symbol_K, SymbolType.Symbol_A];
      _class2$2.MG_SYMBOL_WEIGHT = [{
        symbol: SymbolType.Symbol_9,
        weight: 10
      }, {
        symbol: SymbolType.Symbol_10,
        weight: 10
      }, {
        symbol: SymbolType.Symbol_J,
        weight: 10
      }, {
        symbol: SymbolType.Symbol_Q,
        weight: 10
      }, {
        symbol: SymbolType.Symbol_K,
        weight: 10
      }, {
        symbol: SymbolType.Symbol_A,
        weight: 10
      }, {
        symbol: SymbolType.DEER,
        weight: 10
      }, {
        symbol: SymbolType.WOLF,
        weight: 10
      }, {
        symbol: SymbolType.BEAR,
        weight: 10
      }, {
        symbol: SymbolType.EAGLE,
        weight: 10
      }, {
        symbol: SymbolType.BUFFALO,
        weight: 30
      }, {
        symbol: SymbolType.WILD,
        weight: 10
      }, {
        symbol: SymbolType.COIN1,
        weight: 3
      }, {
        symbol: SymbolType.COIN2,
        weight: 3
      }, {
        symbol: SymbolType.COIN3,
        weight: 3
      }];
      _class2$2.FG_SYMBOL_WEIGHT = [{
        symbol: SymbolType.Symbol_9,
        weight: 10
      }, {
        symbol: SymbolType.Symbol_10,
        weight: 10
      }, {
        symbol: SymbolType.Symbol_J,
        weight: 10
      }, {
        symbol: SymbolType.Symbol_Q,
        weight: 10
      }, {
        symbol: SymbolType.Symbol_K,
        weight: 10
      }, {
        symbol: SymbolType.Symbol_A,
        weight: 10
      }, {
        symbol: SymbolType.DEER,
        weight: 10
      }, {
        symbol: SymbolType.WOLF,
        weight: 10
      }, {
        symbol: SymbolType.BEAR,
        weight: 10
      }, {
        symbol: SymbolType.EAGLE,
        weight: 10
      }, {
        symbol: SymbolType.BUFFALO,
        weight: 30
      }, {
        symbol: SymbolType.WILD,
        weight: 10
      }, {
        symbol: SymbolType.SCATTER,
        weight: 3
      }];
      _class2$2.RandomCashMutiple = [{
        value: .5,
        probability: 50
      }, {
        value: 1,
        probability: 100
      }, {
        value: 2,
        probability: 150
      }, {
        value: 5,
        probability: 150
      }, {
        value: 10,
        probability: 50
      }, {
        value: 15,
        probability: 50
      }, {
        value: 20,
        probability: 35
      }, {
        value: 25,
        probability: 35
      }, {
        value: 50,
        probability: 5
      }, {
        value: 1e3,
        probability: 5
      }];
      _class2$2.introSpineAnimationNumber = 1;
      _class2$2.AudioClips = {
        Debut: null,
        BGM_MG: null,
        CoinStop_01: null,
        CoinStop_02: null,
        CoinStop_03: null,
        Coin_Start: null,
        Coin_End: null,
        MG_FGBell: null,
        NearWin: null,
        Scatter_Count_01: null,
        Scatter_Count_02: null,
        Scatter_Count_03: null,
        Scatter_Count_04: null,
        Scatter_Count_05: null,
        Gold_Buffalo_Bar_Start: null,
        Gold_Buffalo_Stop: null,
        Gold_Buffalo_Collect: null,
        Gold_Buffalo_Fly_Change: null,
        Wild_Multiplier: null,
        FG_FGBell: null,
        FreeSpin_Board: null,
        FreeSpin_Add: null,
        FG_Transition: null,
        Double_Up: null,
        BGM_FG: null,
        FG_End: null,
        Symbol_Small: null,
        Symbol_06: null,
        Symbol_07: null,
        Symbol_08: null,
        Symbol_09: null,
        Symbol_10: null,
        Symbol_10_Voice: null,
        Symbol_17: null,
        Cash_Game_Start: null,
        Big_Win_Announcement: null,
        Barrel_Near_Win: null,
        Level_Up: null,
        Barrel_Drop: null,
        Small_Win_01: null,
        Small_Win_02: null,
        Small_Win_03: null,
        Big_win: null,
        Big_Win_Change: null,
        Big_win_end: null,
        Big_Win_Preview: null,
        ReelSpin: null,
        ReelStop: null,
        Common_BTN: null
      };
      _class2$2.AudioFileRoot = "Sound/";
      _class2$2.AudioFilePath = {
        Debut: "Debut",
        BGM_MG: "BGM_MG",
        CoinStop_01: "Feature_Coin_01",
        CoinStop_02: "Feature_Coin_02",
        CoinStop_03: "Feature_Coin_03",
        Coin_Start: "FCoin_01",
        Coin_End: "FCoin_02",
        MG_FGBell: "FG_Bell",
        NearWin: "Reel_NearWin",
        Scatter_Count_01: "Scatter_01",
        Scatter_Count_02: "Scatter_02",
        Scatter_Count_03: "Scatter_03",
        Scatter_Count_04: "Scatter_04",
        Scatter_Count_05: "Scatter_05",
        Gold_Buffalo_Bar_Start: "Collect_Up",
        Gold_Buffalo_Stop: "Symbol_11",
        Gold_Buffalo_Collect: "Collect_Gold_Buffalo",
        Gold_Buffalo_Fly_Change: "FG_Gold_Start",
        Wild_Multiplier: "Wild_Multiplier",
        FG_FGBell: "FreeSpin_Bell",
        FreeSpin_Board: "FreeSpin_Board",
        FreeSpin_Add: "FreeSpin_Add",
        FG_Transition: "FB_Transition",
        Double_Up: "Double_Up",
        BGM_FG: "BGM_FG",
        FG_End: "FB_Settlement",
        Symbol_Small: "Symbol_small",
        Symbol_06: "Symbol_06",
        Symbol_07: "Symbol_07",
        Symbol_08: "Symbol_08",
        Symbol_09: "Symbol_09",
        Symbol_10: "Symbol_10",
        Symbol_10_Voice: "Symbol_10_Voice",
        Symbol_17: "Symbol_17",
        Cash_Game_Start: "FG_Cash_Start",
        Big_Win_Announcement: "Big_Win_Announcement",
        Barrel_Near_Win: "Near_Win",
        Level_Up: "Level_Up",
        Barrel_Drop: "Barrel_Drop",
        Small_Win_01: "Small_Win_01",
        Small_Win_02: "Small_Win_02",
        Small_Win_03: "Small_Win_03",
        Big_win: "Big_Win",
        Big_Win_Change: "Big_Win_Change",
        Big_win_end: "Big_Win_End",
        ReelSpin: "Reel_Spin",
        ReelStop: "Reel_Stop",
        Common_BTN: "Common_BTN"
      };
      _class2$2.FeatureBetValue = 10;
      _class2$2.FeatrurePageL = "features/left/spriteFrame";
      _class2$2.FeatrurePageR = "features/right/spriteFrame";
      _class2$2.StringKey = {
        GAME_FEATURES_LEFT: "FEATURE_LEFT",
        GAME_FEATURES_RIGHT: "FEATURE_RIGHT",
        GAME_EX_DESCRIPTION: "EX_DESCRIPTION"
      };
      _class2$2.Test = {
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [4, 13, 1, 3]
            }, {
              Col: [5, 1, 6, 5]
            }, {
              Col: [15, 1, 7, 1]
            }, {
              Col: [1, 10, 10, 1]
            }, {
              Col: [6, 5, 14, 5]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 1,
              Count: 4,
              Line: 4,
              Mult: 1,
              Win: 2.4
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [2.4, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 8,
          AwardTypeFlag: 115,
          RoundWin: 2.4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 4, 17]
            }, {
              Col: [5, 1, 6, 5]
            }, {
              Col: [3, 10, 1, 7]
            }, {
              Col: [0, 10, 1, 17]
            }, {
              Col: [6, 1, 10, 8]
            }]
          }, {
            PSD: [{
              Col: [10, 2, 3, 9]
            }, {
              Col: [8, 4, 8, 10]
            }, {
              Col: [0, 17, 8, 0]
            }, {
              Col: [0, 5, 2, 17]
            }, {
              Col: [2, 6, 0, 10]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 3, 0, 0]
            }, {
              Col: [0, 6, 0, 0]
            }, {
              Col: [0, 0, 6, 0]
            }]
          }, {
            PND: [{
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 3]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 3]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 1,
              Count: 5,
              Line: 2,
              Mult: 1,
              Win: 3
            }, {
              Symbol: 17,
              Count: 2,
              Line: 2,
              Mult: 1,
              Win: 30
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 1,
              Mult: 1,
              Win: 9
            }, {
              Symbol: 17,
              Count: 2,
              Line: 2,
              Mult: 1,
              Win: 15
            }]
          }],
          Collected: 4,
          GoldPos: [{
            Col: [9, 18]
          }, {
            Col: [7, 19]
          }],
          CollectWin: [30, 15],
          LineWin: [3, 9],
          FreeRemainRound: 7,
          FreeTotalRound: 8,
          FreeNowRound: 1,
          AwardTypeFlag: 5,
          RoundWin: 57,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 10, 2]
            }, {
              Col: [6, 16, 5, 10]
            }, {
              Col: [1, 1, 7, 1]
            }, {
              Col: [1, 0, 8, 5]
            }, {
              Col: [6, 10, 11, 6]
            }]
          }, {
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [1, 5, 6, 1]
            }, {
              Col: [7, 3, 1, 1]
            }, {
              Col: [4, 3, 1, 10]
            }, {
              Col: [8, 10, 6, 6]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 45, 0]
            }, {
              Col: [0, 0, 0, 3]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 6, 3, 0]
            }]
          }, {
            PND: [{
              Col: [0, 30, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 60]
            }, {
              Col: [0, 6, 0, 0]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 1,
              Win: 3
            }]
          }, {}],
          Collected: 10,
          GoldLevel: 1,
          GoldPos: [{
            Col: [2, 7, 17]
          }, {
            Col: [1, 15, 17]
          }],
          CollectWin: [0, 0],
          LineWin: [3, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 8,
          FreeNowRound: 2,
          AwardTypeFlag: 5,
          RoundWin: 3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [7, 5, 11, 1]
            }, {
              Col: [0, 6, 2, 10]
            }, {
              Col: [10, 10, 10, 17]
            }, {
              Col: [2, 10, 1, 10]
            }, {
              Col: [10, 6, 10, 5]
            }]
          }, {
            PSD: [{
              Col: [11, 3, 10, 4]
            }, {
              Col: [7, 5, 5, 0]
            }, {
              Col: [10, 7, 0, 1]
            }, {
              Col: [1, 5, 5, 1]
            }, {
              Col: [2, 10, 0, 7]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 6, 0]
            }, {
              Col: [0, 0, 0, 30]
            }, {
              Col: [3, 6, 3, 0]
            }, {
              Col: [0, 6, 0, 3]
            }, {
              Col: [6, 0, 60, 0]
            }]
          }, {
            PND: [{
              Col: [30, 0, 6, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [15, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 6, 0, 0]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 16,
              Mult: 1,
              Win: 144
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 123
            }]
          }, {}],
          Collected: 21,
          GoldLevel: 2,
          GoldPos: [{
            Col: [7, 8, 9, 10, 13, 15, 16, 18]
          }, {
            Col: [2, 8, 17]
          }],
          CollectWin: [123, 0],
          LineWin: [144, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 8,
          FreeNowRound: 3,
          AwardTypeFlag: 5,
          RoundWin: 267,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 2, 11]
            }, {
              Col: [5, 11, 11, 10]
            }, {
              Col: [11, 10, 3, 1]
            }, {
              Col: [11, 0, 0, 1]
            }, {
              Col: [11, 10, 11, 11]
            }]
          }, {
            PSD: [{
              Col: [11, 11, 10, 4]
            }, {
              Col: [11, 11, 5, 1]
            }, {
              Col: [0, 0, 11, 11]
            }, {
              Col: [5, 5, 1, 0]
            }, {
              Col: [11, 11, 10, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 6]
            }, {
              Col: [0, 1.5, 3, 1.5]
            }, {
              Col: [1.5, 3, 0, 0]
            }, {
              Col: [3, 0, 0, 0]
            }, {
              Col: [6, 1.5, 6, 1.5]
            }]
          }, {
            PND: [{
              Col: [6, 1.5, 6, 0]
            }, {
              Col: [6, 1.5, 0, 0]
            }, {
              Col: [0, 0, 1.5, 6]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 3, 1.5, 6]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 24,
              Mult: 1,
              Win: 216
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 12,
              Mult: 1,
              Win: 72
            }]
          }],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [216, 72],
          FreeRemainRound: 4,
          FreeTotalRound: 8,
          FreeNowRound: 4,
          AwardTypeFlag: 5,
          RoundWin: 288,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 2, 4, 16]
            }, {
              Col: [11, 17, 11, 16]
            }, {
              Col: [11, 1, 11, 0]
            }, {
              Col: [3, 1, 17, 0]
            }, {
              Col: [5, 11, 5, 10]
            }]
          }, {
            PSD: [{
              Col: [10, 11, 3, 3]
            }, {
              Col: [11, 0, 10, 10]
            }, {
              Col: [1, 11, 2, 10]
            }, {
              Col: [10, 0, 11, 5]
            }, {
              Col: [1, 11, 10, 10]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [6, 0, 1.5, 0]
            }, {
              Col: [3, 0, 1.5, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 1.5, 0, 6]
            }]
          }, {
            PND: [{
              Col: [1.5, 3, 0, 0]
            }, {
              Col: [1.5, 0, 1.5, 3]
            }, {
              Col: [0, 3, 0, 1.5]
            }, {
              Col: [1.5, 0, 6, 0]
            }, {
              Col: [0, 6, 1.5, 45]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 12,
              Mult: 1,
              Win: 108
            }, {
              Symbol: 17,
              Count: 2,
              Line: 2,
              Mult: 1,
              Win: 42
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 72,
              Mult: 1,
              Win: 648
            }]
          }],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [42, 0],
          LineWin: [108, 648],
          FreeRemainRound: 8,
          FreeTotalRound: 13,
          FreeNowRound: 5,
          AddRounds: 5,
          AwardTypeFlag: 133,
          RoundWin: 798,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 10, 0, 11]
            }, {
              Col: [11, 3, 3, 11]
            }, {
              Col: [2, 11, 10, 11]
            }, {
              Col: [0, 11, 5, 10]
            }, {
              Col: [10, 3, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [11, 10, 10, 11]
            }, {
              Col: [3, 3, 11, 5]
            }, {
              Col: [10, 2, 11, 10]
            }, {
              Col: [3, 11, 5, 10]
            }, {
              Col: [1, 10, 11, 10]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [1.5, 3, 0, 3]
            }, {
              Col: [1.5, 0, 0, 3]
            }, {
              Col: [0, 1.5, 3, 3]
            }, {
              Col: [0, 1.5, 0, 6]
            }, {
              Col: [45, 0, 3, 6]
            }]
          }, {
            PND: [{
              Col: [1.5, 3, 6, 6]
            }, {
              Col: [0, 0, 6, 0]
            }, {
              Col: [15, 0, 3, 3]
            }, {
              Col: [0, 6, 0, 6]
            }, {
              Col: [0, 3, 6, 3]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 108,
              Mult: 1,
              Win: 972
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 72,
              Mult: 1,
              Win: 648
            }]
          }],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [972, 648],
          FreeRemainRound: 7,
          FreeTotalRound: 13,
          FreeNowRound: 6,
          AwardTypeFlag: 5,
          RoundWin: 1620,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [11, 4, 10, 3]
            }, {
              Col: [11, 0, 11, 10]
            }, {
              Col: [0, 11, 1, 2]
            }, {
              Col: [10, 0, 5, 5]
            }, {
              Col: [11, 11, 11, 11]
            }]
          }, {
            PSD: [{
              Col: [11, 4, 2, 3]
            }, {
              Col: [5, 10, 3, 10]
            }, {
              Col: [1, 1, 11, 1]
            }, {
              Col: [10, 0, 5, 5]
            }, {
              Col: [11, 11, 5, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [3, 0, 3, 0]
            }, {
              Col: [1.5, 0, 6, 45]
            }, {
              Col: [0, 3, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }, {
              Col: [1.5, 3, 1.5, 3]
            }]
          }, {
            PND: [{
              Col: [3, 0, 0, 0]
            }, {
              Col: [0, 3, 0, 3]
            }, {
              Col: [0, 0, 3, 0]
            }, {
              Col: [3, 0, 0, 0]
            }, {
              Col: [1.5, 6, 0, 3]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 24,
              Mult: 1,
              Win: 216
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 6,
              Mult: 1,
              Win: 54
            }]
          }],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [216, 54],
          FreeRemainRound: 6,
          FreeTotalRound: 13,
          FreeNowRound: 7,
          AwardTypeFlag: 5,
          RoundWin: 270,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 16, 3, 2]
            }, {
              Col: [1, 11, 5, 1]
            }, {
              Col: [1, 11, 0, 1]
            }, {
              Col: [0, 0, 3, 1]
            }, {
              Col: [11, 2, 11, 0]
            }]
          }, {
            PSD: [{
              Col: [11, 4, 10, 3]
            }, {
              Col: [5, 5, 11, 10]
            }, {
              Col: [1, 2, 0, 1]
            }, {
              Col: [11, 10, 11, 3]
            }, {
              Col: [11, 10, 11, 5]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 15, 0, 0]
            }, {
              Col: [0, 6, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [1.5, 0, 1.5, 0]
            }]
          }, {
            PND: [{
              Col: [75, 0, 6, 0]
            }, {
              Col: [0, 0, 6, 3]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [1.5, 3, 6, 0]
            }, {
              Col: [6, 3, 1.5, 0]
            }]
          }],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 4,
              Mult: 1,
              Win: 12
            }]
          }],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 12],
          FreeRemainRound: 5,
          FreeTotalRound: 13,
          FreeNowRound: 8,
          AwardTypeFlag: 5,
          RoundWin: 12,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 3, 11, 2]
            }, {
              Col: [1, 11, 4, 11]
            }, {
              Col: [10, 4, 11, 0]
            }, {
              Col: [1, 3, 10, 10]
            }, {
              Col: [11, 11, 11, 11]
            }]
          }, {
            PSD: [{
              Col: [3, 2, 4, 17]
            }, {
              Col: [1, 5, 11, 10]
            }, {
              Col: [2, 0, 4, 11]
            }, {
              Col: [10, 1, 4, 1]
            }, {
              Col: [11, 10, 11, 10]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [3, 0, 6, 0]
            }, {
              Col: [0, 3, 0, 3]
            }, {
              Col: [1.5, 0, 1.5, 0]
            }, {
              Col: [0, 0, 3, 150]
            }, {
              Col: [3, 6, 3, 15]
            }]
          }, {
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 3, 15]
            }, {
              Col: [0, 0, 0, 1.5]
            }, {
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [6, 3, 6, 1.5]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 64,
              Mult: 1,
              Win: 576
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 8,
              Mult: 1,
              Win: 72
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 37.5
            }]
          }],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 37.5],
          LineWin: [576, 72],
          FreeRemainRound: 4,
          FreeTotalRound: 13,
          FreeNowRound: 9,
          AwardTypeFlag: 5,
          RoundWin: 685.5,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [11, 2, 11, 10]
            }, {
              Col: [1, 5, 11, 3]
            }, {
              Col: [17, 1, 10, 2]
            }, {
              Col: [10, 10, 0, 11]
            }, {
              Col: [11, 10, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [10, 0, 10, 11]
            }, {
              Col: [11, 3, 1, 1]
            }, {
              Col: [4, 1, 10, 11]
            }, {
              Col: [11, 10, 10, 0]
            }, {
              Col: [10, 10, 11, 0]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [1.5, 0, 6, 3]
            }, {
              Col: [0, 0, 3, 0]
            }, {
              Col: [0, 0, 6, 0]
            }, {
              Col: [15, 1.5, 0, 3]
            }, {
              Col: [1.5, 1.5, 15, 6]
            }]
          }, {
            PND: [{
              Col: [3, 0, 3, 3]
            }, {
              Col: [6, 0, 0, 0]
            }, {
              Col: [0, 0, 6, 3]
            }, {
              Col: [3, 6, 3, 0]
            }, {
              Col: [1.5, 1.5, 1.5, 0]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 72,
              Mult: 1,
              Win: 648
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 63
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 54,
              Mult: 1,
              Win: 486
            }]
          }],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [63, 0],
          LineWin: [648, 486],
          FreeRemainRound: 3,
          FreeTotalRound: 13,
          FreeNowRound: 10,
          AwardTypeFlag: 5,
          RoundWin: 1197,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 11, 5, 11]
            }, {
              Col: [4, 11, 10, 10]
            }, {
              Col: [10, 11, 10, 5]
            }, {
              Col: [11, 5, 10, 10]
            }, {
              Col: [3, 11, 4, 10]
            }]
          }, {
            PSD: [{
              Col: [4, 4, 3, 10]
            }, {
              Col: [5, 1, 5, 1]
            }, {
              Col: [1, 1, 11, 0]
            }, {
              Col: [1, 0, 0, 10]
            }, {
              Col: [10, 11, 1, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [3, 6, 0, 6]
            }, {
              Col: [0, 3, 1.5, 6]
            }, {
              Col: [6, 6, 3, 0]
            }, {
              Col: [3, 0, 1.5, 1.5]
            }, {
              Col: [0, 3, 0, 1.5]
            }]
          }, {
            PND: [{
              Col: [0, 0, 0, 3e3]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 3, 0]
            }, {
              Col: [0, 0, 0, 6]
            }, {
              Col: [1.5, 6, 0, 6]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 162,
              Mult: 1,
              Win: 1458
            }]
          }, {}],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [1458, 0],
          FreeRemainRound: 2,
          FreeTotalRound: 13,
          FreeNowRound: 11,
          AwardTypeFlag: 5,
          RoundWin: 1458,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 3, 2, 10]
            }, {
              Col: [5, 1, 1, 5]
            }, {
              Col: [11, 1, 10, 10]
            }, {
              Col: [5, 2, 17, 0]
            }, {
              Col: [11, 11, 11, 2]
            }]
          }, {
            PSD: [{
              Col: [4, 2, 4, 3]
            }, {
              Col: [10, 11, 11, 11]
            }, {
              Col: [1, 2, 16, 1]
            }, {
              Col: [1, 3, 10, 0]
            }, {
              Col: [0, 11, 11, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [1.5, 0, 0, 6]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [30, 0, 6, 1.5]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 6, 3, 0]
            }]
          }, {
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [45, 6, 3, 150]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 3, 0]
            }, {
              Col: [0, 3, 1.5, 6]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 17,
              Count: 2,
              Line: 2,
              Mult: 1,
              Win: 120
            }]
          }, {}],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [120, 0],
          LineWin: [0, 0],
          FreeRemainRound: 1,
          FreeTotalRound: 13,
          FreeNowRound: 12,
          AwardTypeFlag: 4,
          RoundWin: 120,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 10, 4, 4]
            }, {
              Col: [2, 11, 10, 11]
            }, {
              Col: [1, 0, 1, 11]
            }, {
              Col: [11, 0, 16, 0]
            }, {
              Col: [10, 10, 10, 11]
            }]
          }, {
            PSD: [{
              Col: [10, 2, 4, 2]
            }, {
              Col: [1, 5, 11, 3]
            }, {
              Col: [10, 1, 17, 2]
            }, {
              Col: [3, 1, 10, 10]
            }, {
              Col: [10, 11, 10, 10]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [15, 1.5, 0, 0]
            }, {
              Col: [0, 3, 3, 3]
            }, {
              Col: [0, 0, 0, 3]
            }, {
              Col: [3, 0, 0, 0]
            }, {
              Col: [1.5, 6, 3, 6]
            }]
          }, {
            PND: [{
              Col: [6, 0, 0, 0]
            }, {
              Col: [0, 0, 6, 0]
            }, {
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [0, 0, 3, 1.5]
            }, {
              Col: [6, 75, 6, 3]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 24,
              Mult: 1,
              Win: 216
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 16,
              Mult: 1,
              Win: 144
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 108
            }]
          }],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 108],
          LineWin: [216, 144],
          FreeTotalRound: 13,
          FreeNowRound: 13,
          AwardTypeFlag: 13,
          RoundWin: 468,
          AddCrackLv: [0, 0, 0]
        }],
        Bet: 3,
        FreeTotalWin: 7243.5,
        TotalWin: 7245.9,
        GameType: 7
      };
      _class2$2.Test2 = {
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [2, 4, 14, 3]
            }, {
              Col: [5, 6, 3, 5]
            }, {
              Col: [2, 1, 13, 6]
            }, {
              Col: [5, 12, 1, 5]
            }, {
              Col: [15, 8, 6, 5]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 8,
          AwardTypeFlag: 114,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 10, 2]
            }, {
              Col: [1, 6, 1, 7]
            }, {
              Col: [10, 0, 4, 7]
            }, {
              Col: [1, 17, 0, 6]
            }, {
              Col: [10, 7, 5, 10]
            }]
          }, {
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [8, 1, 8, 10]
            }, {
              Col: [0, 1, 0, 1]
            }, {
              Col: [2, 17, 0, 5]
            }, {
              Col: [6, 6, 9, 6]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 3, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 0, 0, 6]
            }]
          }, {
            PND: [{
              Col: [0, 6, 0, 0]
            }, {
              Col: [0, 0, 0, 6]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 16.5
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 1,
              Win: 3
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 12
            }]
          }],
          Collected: 4,
          GoldPos: [{
            Col: [2, 8, 16]
          }, {
            Col: [1]
          }],
          CollectWin: [16.5, 12],
          LineWin: [0, 3],
          FreeRemainRound: 7,
          FreeTotalRound: 8,
          FreeNowRound: 1,
          AwardTypeFlag: 5,
          RoundWin: 31.5,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 4, 2, 3]
            }, {
              Col: [6, 1, 10, 5]
            }, {
              Col: [4, 7, 0, 10]
            }, {
              Col: [4, 3, 1, 10]
            }, {
              Col: [0, 7, 8, 6]
            }]
          }, {
            PSD: [{
              Col: [10, 16, 3, 2]
            }, {
              Col: [0, 6, 10, 5]
            }, {
              Col: [6, 7, 10, 5]
            }, {
              Col: [1, 0, 4, 0]
            }, {
              Col: [8, 10, 6, 6]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [0, 0, 6, 0]
            }, {
              Col: [0, 0, 0, 3]
            }, {
              Col: [0, 0, 0, 1.5]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {
            PND: [{
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [0, 0, 75, 0]
            }, {
              Col: [0, 0, 6, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 3, 0, 0]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 4,
              Line: 1,
              Mult: 1,
              Win: 7.5
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: 6
            }]
          }],
          Collected: 11,
          GoldLevel: 1,
          GoldPos: [{
            Col: [0, 6, 11, 15]
          }, {
            Col: [0, 6, 10]
          }],
          CollectWin: [0, 0],
          LineWin: [7.5, 6],
          FreeRemainRound: 6,
          FreeTotalRound: 8,
          FreeNowRound: 2,
          AwardTypeFlag: 5,
          RoundWin: 13.5,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [5, 5, 7, 3]
            }, {
              Col: [10, 10, 2, 10]
            }, {
              Col: [5, 10, 11, 0]
            }, {
              Col: [11, 5, 10, 10]
            }, {
              Col: [10, 10, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [16, 3, 2, 4]
            }, {
              Col: [6, 1, 7, 5]
            }, {
              Col: [1, 10, 0, 16]
            }, {
              Col: [0, 0, 3, 1]
            }, {
              Col: [6, 6, 7, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [3, 6, 0, 1.5]
            }, {
              Col: [0, 1.5, 1.5, 0]
            }, {
              Col: [1.5, 0, 1.5, 6]
            }, {
              Col: [1.5, 1.5, 6, 6]
            }]
          }, {
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 15, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 1.5]
            }]
          }],
          AwardDataVec: [{}, {}],
          Collected: 18,
          GoldLevel: 2,
          GoldPos: [{
            Col: [5, 7, 14, 15, 16, 17, 19]
          }, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 10,
          FreeTotalRound: 13,
          FreeNowRound: 3,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 4, 2]
            }, {
              Col: [11, 5, 1, 1]
            }, {
              Col: [11, 11, 10, 5]
            }, {
              Col: [4, 3, 10, 10]
            }, {
              Col: [11, 11, 11, 5]
            }]
          }, {
            PSD: [{
              Col: [3, 10, 2, 3]
            }, {
              Col: [1, 17, 5, 11]
            }, {
              Col: [10, 0, 10, 1]
            }, {
              Col: [10, 2, 17, 0]
            }, {
              Col: [11, 11, 11, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [3, 0, 0, 0]
            }, {
              Col: [3, 3, 6, 0]
            }, {
              Col: [0, 0, 6, 3]
            }, {
              Col: [3, 150, 3, 0]
            }]
          }, {
            PND: [{
              Col: [0, 3, 0, 0]
            }, {
              Col: [0, 0, 0, 3]
            }, {
              Col: [6, 0, 6, 0]
            }, {
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [3, 6, 1.5, 15]
            }]
          }],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 32,
              Mult: 1,
              Win: 288
            }, {
              Symbol: 17,
              Count: 2,
              Line: 2,
              Mult: 1,
              Win: 90
            }]
          }],
          Collected: 18,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 90],
          LineWin: [0, 288],
          FreeRemainRound: 9,
          FreeTotalRound: 13,
          FreeNowRound: 4,
          AwardTypeFlag: 5,
          RoundWin: 378,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 10, 4, 11]
            }, {
              Col: [11, 3, 11, 11]
            }, {
              Col: [1, 11, 3, 3]
            }, {
              Col: [3, 1, 10, 10]
            }, {
              Col: [11, 10, 11, 5]
            }]
          }, {
            PSD: [{
              Col: [4, 3, 10, 11]
            }, {
              Col: [1, 1, 11, 5]
            }, {
              Col: [10, 10, 10, 1]
            }, {
              Col: [11, 4, 11, 3]
            }, {
              Col: [10, 10, 10, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 6, 0, 6]
            }, {
              Col: [6, 0, 3, 6]
            }, {
              Col: [0, 1.5, 0, 0]
            }, {
              Col: [0, 0, 1.5, 1.5]
            }, {
              Col: [6, 1.5, 1.5, 0]
            }]
          }, {
            PND: [{
              Col: [0, 0, 1.5, 1.5]
            }, {
              Col: [0, 0, 6, 0]
            }, {
              Col: [1.5, 1.5, 6, 0]
            }, {
              Col: [3, 0, 6, 0]
            }, {
              Col: [3, 3, 3, 6]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 36,
              Mult: 1,
              Win: 324
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 48,
              Mult: 1,
              Win: 432
            }]
          }],
          Collected: 18,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [324, 432],
          FreeRemainRound: 8,
          FreeTotalRound: 13,
          FreeNowRound: 5,
          AwardTypeFlag: 5,
          RoundWin: 756,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [0, 1, 3, 2]
            }, {
              Col: [11, 11, 10, 1]
            }, {
              Col: [1, 11, 11, 3]
            }, {
              Col: [5, 5, 1, 5]
            }, {
              Col: [11, 10, 11, 11]
            }]
          }, {
            PSD: [{
              Col: [10, 10, 10, 0]
            }, {
              Col: [11, 17, 10, 10]
            }, {
              Col: [3, 10, 2, 10]
            }, {
              Col: [10, 11, 1, 1]
            }, {
              Col: [1, 11, 5, 10]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 6, 1.5, 0]
            }, {
              Col: [0, 1.5, 1.5, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [1.5, 3, 6, 3]
            }]
          }, {
            PND: [{
              Col: [3, 1.5, 1.5, 0]
            }, {
              Col: [6, 0, 3, 15]
            }, {
              Col: [0, 6, 0, 3]
            }, {
              Col: [60, 6, 0, 0]
            }, {
              Col: [0, 3, 0, 1.5]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 1,
              Count: 4,
              Line: 1,
              Mult: 1,
              Win: .6
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 96,
              Mult: 1,
              Win: 864
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 109.5
            }]
          }],
          Collected: 18,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 109.5],
          LineWin: [.6, 864],
          FreeRemainRound: 7,
          FreeTotalRound: 13,
          FreeNowRound: 6,
          AwardTypeFlag: 5,
          RoundWin: 974.1,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [1, 3, 10, 17]
            }, {
              Col: [10, 10, 2, 11]
            }, {
              Col: [11, 0, 1, 0]
            }, {
              Col: [1, 4, 1, 4]
            }, {
              Col: [11, 11, 11, 11]
            }]
          }, {
            PSD: [{
              Col: [10, 0, 11, 2]
            }, {
              Col: [11, 5, 5, 11]
            }, {
              Col: [10, 10, 4, 11]
            }, {
              Col: [5, 10, 2, 11]
            }, {
              Col: [10, 1, 11, 2]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 6, 0]
            }, {
              Col: [15, 3, 0, 1.5]
            }, {
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 1.5, 30, 1.5]
            }]
          }, {
            PND: [{
              Col: [1.5, 0, 3, 0]
            }, {
              Col: [15, 0, 0, 3]
            }, {
              Col: [30, 3, 0, 3]
            }, {
              Col: [0, 3, 0, 1.5]
            }, {
              Col: [1.5, 0, 6, 0]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 6,
              Mult: 1,
              Win: 36
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 66
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 48,
              Mult: 1,
              Win: 432
            }]
          }],
          Collected: 18,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [66, 0],
          LineWin: [36, 432],
          FreeRemainRound: 6,
          FreeTotalRound: 13,
          FreeNowRound: 7,
          AwardTypeFlag: 5,
          RoundWin: 534,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [1, 5, 11, 3]
            }, {
              Col: [10, 11, 4, 11]
            }, {
              Col: [0, 10, 10, 4]
            }, {
              Col: [1, 10, 0, 11]
            }, {
              Col: [10, 4, 11, 10]
            }]
          }, {
            PSD: [{
              Col: [4, 10, 1, 3]
            }, {
              Col: [5, 1, 5, 1]
            }, {
              Col: [3, 10, 10, 11]
            }, {
              Col: [10, 1, 0, 0]
            }, {
              Col: [11, 11, 11, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 6, 0]
            }, {
              Col: [6, 6, 0, 3]
            }, {
              Col: [0, 60, 3e3, 0]
            }, {
              Col: [0, 3, 0, 3]
            }, {
              Col: [3, 0, 6, 30]
            }]
          }, {
            PND: [{
              Col: [0, 1.5, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 1.5, 3, 1.5]
            }, {
              Col: [15, 0, 0, 0]
            }, {
              Col: [6, 30, 6, 1.5]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 36,
              Mult: 1,
              Win: 324
            }]
          }, {}],
          Collected: 18,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [324, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 13,
          FreeNowRound: 8,
          AwardTypeFlag: 5,
          RoundWin: 324,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 4, 3, 10]
            }, {
              Col: [10, 5, 5, 11]
            }, {
              Col: [11, 0, 11, 11]
            }, {
              Col: [5, 1, 11, 4]
            }, {
              Col: [10, 11, 11, 5]
            }]
          }, {
            PSD: [{
              Col: [3, 4, 0, 1]
            }, {
              Col: [1, 17, 5, 11]
            }, {
              Col: [0, 1, 11, 10]
            }, {
              Col: [5, 5, 1, 5]
            }, {
              Col: [11, 10, 10, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 30]
            }, {
              Col: [6, 0, 0, 6]
            }, {
              Col: [3, 0, 3, 3]
            }, {
              Col: [0, 0, 1.5, 0]
            }, {
              Col: [1.5, 3, 3, 0]
            }]
          }, {
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 1.5]
            }, {
              Col: [0, 0, 1.5, 1.5]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [3, 3, 6, 6]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 18,
              Mult: 1,
              Win: 162
            }]
          }, {
            ADV: [{
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: .3
            }, {
              Symbol: 1,
              Count: 4,
              Line: 2,
              Mult: 1,
              Win: 1.2
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 22.5
            }]
          }],
          Collected: 18,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 22.5],
          LineWin: [162, 1.5],
          FreeRemainRound: 4,
          FreeTotalRound: 13,
          FreeNowRound: 9,
          AwardTypeFlag: 5,
          RoundWin: 186,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 4, 0, 1]
            }, {
              Col: [11, 11, 5, 1]
            }, {
              Col: [3, 1, 1, 11]
            }, {
              Col: [17, 1, 5, 5]
            }, {
              Col: [1, 11, 11, 11]
            }]
          }, {
            PSD: [{
              Col: [11, 4, 10, 3]
            }, {
              Col: [11, 3, 11, 11]
            }, {
              Col: [17, 10, 0, 10]
            }, {
              Col: [17, 1, 5, 5]
            }, {
              Col: [11, 3, 16, 4]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [3, 6, 0, 0]
            }, {
              Col: [0, 0, 0, 3]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 1.5, 6, 6]
            }]
          }, {
            PND: [{
              Col: [1.5, 0, 6, 0]
            }, {
              Col: [1.5, 0, 1.5, 1.5]
            }, {
              Col: [0, 15, 0, 3]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 1,
              Count: 5,
              Line: 4,
              Mult: 1,
              Win: 6
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 25.5
            }]
          }, {
            ADV: [{
              Symbol: 3,
              Count: 5,
              Line: 1,
              Mult: 1,
              Win: 1.8
            }, {
              Symbol: 10,
              Count: 5,
              Line: 18,
              Mult: 1,
              Win: 162
            }, {
              Symbol: 17,
              Count: 2,
              Line: 2,
              Mult: 1,
              Win: 72
            }]
          }],
          Collected: 18,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [25.5, 72],
          LineWin: [6, 163.8],
          FreeRemainRound: 3,
          FreeTotalRound: 13,
          FreeNowRound: 10,
          AwardTypeFlag: 5,
          RoundWin: 267.3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [0, 3, 10, 10]
            }, {
              Col: [0, 10, 16, 5]
            }, {
              Col: [1, 10, 11, 1]
            }, {
              Col: [4, 1, 10, 3]
            }, {
              Col: [11, 10, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [10, 10, 0, 11]
            }, {
              Col: [1, 11, 5, 10]
            }, {
              Col: [3, 10, 4, 10]
            }, {
              Col: [10, 10, 2, 10]
            }, {
              Col: [1, 10, 11, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 3, 3]
            }, {
              Col: [0, 6, 0, 0]
            }, {
              Col: [0, 6, 15, 0]
            }, {
              Col: [0, 0, 6, 0]
            }, {
              Col: [1.5, 3, 6, 6]
            }]
          }, {
            PND: [{
              Col: [60, 6, 0, 1.5]
            }, {
              Col: [0, 3, 0, 6]
            }, {
              Col: [0, 1.5, 0, 1.5]
            }, {
              Col: [3, 3, 0, 3]
            }, {
              Col: [0, 6, 6, 3]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 16,
              Mult: 1,
              Win: 144
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 108,
              Mult: 1,
              Win: 972
            }]
          }],
          Collected: 18,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [144, 972],
          FreeRemainRound: 2,
          FreeTotalRound: 13,
          FreeNowRound: 11,
          AwardTypeFlag: 5,
          RoundWin: 1116,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 2, 4, 3]
            }, {
              Col: [10, 0, 5, 3]
            }, {
              Col: [10, 1, 0, 1]
            }, {
              Col: [10, 1, 4, 10]
            }, {
              Col: [11, 11, 11, 11]
            }]
          }, {
            PSD: [{
              Col: [3, 10, 2, 3]
            }, {
              Col: [3, 10, 10, 1]
            }, {
              Col: [10, 1, 2, 0]
            }, {
              Col: [10, 10, 10, 1]
            }, {
              Col: [11, 10, 5, 10]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [75, 0, 0, 0]
            }, {
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [1.5, 0, 0, 6]
            }, {
              Col: [1.5, 45, 6, 6]
            }]
          }, {
            PND: [{
              Col: [0, 15, 0, 0]
            }, {
              Col: [0, 3, 15, 0]
            }, {
              Col: [3, 0, 0, 0]
            }, {
              Col: [1.5, 3, 45, 0]
            }, {
              Col: [1.5, 6, 0, 1.5]
            }]
          }],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 18,
              Mult: 1,
              Win: 162
            }]
          }],
          Collected: 18,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 162],
          FreeRemainRound: 1,
          FreeTotalRound: 13,
          FreeNowRound: 12,
          AwardTypeFlag: 5,
          RoundWin: 162,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 17, 3]
            }, {
              Col: [11, 1, 5, 5]
            }, {
              Col: [0, 10, 11, 0]
            }, {
              Col: [11, 3, 10, 10]
            }, {
              Col: [11, 10, 11, 11]
            }]
          }, {
            PSD: [{
              Col: [2, 10, 10, 4]
            }, {
              Col: [1, 5, 10, 11]
            }, {
              Col: [10, 11, 0, 17]
            }, {
              Col: [0, 1, 0, 0]
            }, {
              Col: [11, 11, 11, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }, {
              Col: [0, 6, 6, 0]
            }, {
              Col: [6, 0, 3, 6]
            }, {
              Col: [3, 1.5, 1.5, 6]
            }]
          }, {
            PND: [{
              Col: [0, 6, 30, 0]
            }, {
              Col: [0, 0, 1.5, 6]
            }, {
              Col: [1.5, 3, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [3, 6, 1.5, 1.5]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 24,
              Mult: 1,
              Win: 216
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 45
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 12,
              Mult: 1,
              Win: 72
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 60
            }]
          }],
          Collected: 18,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [45, 60],
          LineWin: [216, 72],
          FreeTotalRound: 13,
          FreeNowRound: 13,
          AwardTypeFlag: 13,
          RoundWin: 393,
          AddCrackLv: [0, 0, 0]
        }],
        Bet: 3,
        FreeTotalWin: 5135.4,
        TotalWin: 5135.4,
        GameType: 7
      };
      _class2$2.Test3 = {
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [4, 14, 3, 4]
            }, {
              Col: [1, 8, 4, 8]
            }, {
              Col: [7, 3, 1, 14]
            }, {
              Col: [6, 0, 8, 8]
            }, {
              Col: [10, 6, 8, 13]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 8,
          AwardTypeFlag: 34,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 4, 3, 10]
            }, {
              Col: [2, 8, 10, 6]
            }, {
              Col: [5, 0, 2, 2]
            }, {
              Col: [5, 1, 5, 0]
            }, {
              Col: [8, 8, 8, 6]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 1,
              Win: 3
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [3, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 8,
          FreeNowRound: 1,
          AwardTypeFlag: 5,
          RoundWin: 3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 4, 2]
            }, {
              Col: [1, 18, 5, 6]
            }, {
              Col: [7, 1, 0, 19]
            }, {
              Col: [1, 1, 0, 19]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 2,
              Count: 4,
              Line: 2,
              Mult: 8,
              Win: 14.4
            }, {
              Symbol: 3,
              Count: 4,
              Line: 1,
              Mult: 8,
              Win: 7.2
            }, {
              Symbol: 4,
              Count: 4,
              Line: 1,
              Mult: 8,
              Win: 12
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [33.6, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 8,
          FreeNowRound: 2,
          AwardTypeFlag: 5,
          RoundWin: 33.6,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 4, 4, 3]
            }, {
              Col: [5, 8, 9, 5]
            }, {
              Col: [7, 0, 16, 1]
            }, {
              Col: [1, 0, 4, 0]
            }, {
              Col: [10, 10, 6, 1]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 8,
          FreeNowRound: 3,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [6, 2, 4, 2]
            }, {
              Col: [6, 5, 1, 5]
            }, {
              Col: [1, 1, 7, 0]
            }, {
              Col: [3, 10, 10, 1]
            }, {
              Col: [16, 4, 10, 10]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 2,
          GoldPos: [{
            Col: [13, 18]
          }, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 4,
          FreeTotalRound: 8,
          FreeNowRound: 4,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 2, 4, 16]
            }, {
              Col: [3, 5, 6, 1]
            }, {
              Col: [1, 7, 0, 16]
            }, {
              Col: [5, 18, 1, 5]
            }, {
              Col: [10, 6, 1, 7]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 2,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 13,
          FreeNowRound: 5,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 2, 4, 2]
            }, {
              Col: [8, 4, 8, 0]
            }, {
              Col: [0, 10, 1, 7]
            }, {
              Col: [0, 16, 0, 0]
            }, {
              Col: [7, 6, 7, 8]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 2,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 13,
          FreeNowRound: 6,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [6, 8, 2, 10]
            }, {
              Col: [9, 1, 10, 3]
            }, {
              Col: [0, 10, 5, 7]
            }, {
              Col: [9, 9, 1, 1]
            }, {
              Col: [10, 7, 3, 1]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: 6
            }]
          }, {}],
          Collected: 2,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [6, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 13,
          FreeNowRound: 7,
          AwardTypeFlag: 5,
          RoundWin: 6,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 0, 6, 4]
            }, {
              Col: [9, 3, 10, 5]
            }, {
              Col: [8, 3, 10, 2]
            }, {
              Col: [9, 9, 1, 1]
            }, {
              Col: [5, 10, 10, 1]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: 6
            }]
          }, {}],
          Collected: 2,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [6, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 13,
          FreeNowRound: 8,
          AwardTypeFlag: 5,
          RoundWin: 6,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 10, 10, 10]
            }, {
              Col: [10, 10, 10, 1]
            }, {
              Col: [9, 0, 10, 10]
            }, {
              Col: [6, 4, 5, 0]
            }, {
              Col: [9, 3, 10, 10]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 18,
              Mult: 1,
              Win: 108
            }]
          }, {}],
          Collected: 4,
          GoldPos: [{
            Col: [2, 10]
          }, {}],
          CollectWin: [0, 0],
          LineWin: [108, 0],
          FreeRemainRound: 4,
          FreeTotalRound: 13,
          FreeNowRound: 9,
          AwardTypeFlag: 5,
          RoundWin: 108,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 2, 3, 11]
            }, {
              Col: [16, 5, 1, 5]
            }, {
              Col: [0, 18, 1, 1]
            }, {
              Col: [0, 8, 5, 1]
            }, {
              Col: [7, 8, 7, 6]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 4,
          GoldLevel: 1,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 3,
          FreeTotalRound: 13,
          FreeNowRound: 10,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 4, 4]
            }, {
              Col: [6, 8, 1, 8]
            }, {
              Col: [1, 7, 0, 1]
            }, {
              Col: [18, 1, 1, 0]
            }, {
              Col: [8, 10, 10, 8]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 4,
          GoldLevel: 1,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 2,
          FreeTotalRound: 13,
          FreeNowRound: 11,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 4, 8, 0]
            }, {
              Col: [7, 3, 1, 10]
            }, {
              Col: [6, 2, 10, 3]
            }, {
              Col: [6, 4, 5, 0]
            }, {
              Col: [10, 5, 11, 1]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: 6
            }]
          }, {}],
          Collected: 4,
          GoldLevel: 1,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [6, 0],
          FreeRemainRound: 1,
          FreeTotalRound: 13,
          FreeNowRound: 12,
          AwardTypeFlag: 5,
          RoundWin: 6,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 10, 4, 6]
            }, {
              Col: [10, 10, 10, 1]
            }, {
              Col: [10, 10, 5, 7]
            }, {
              Col: [1, 8, 8, 2]
            }, {
              Col: [10, 10, 5, 7]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 12,
              Mult: 1,
              Win: 72
            }]
          }, {}],
          Collected: 5,
          GoldLevel: 1,
          GoldPos: [{
            Col: [0]
          }, {}],
          CollectWin: [0, 0],
          LineWin: [72, 0],
          FreeTotalRound: 13,
          FreeNowRound: 13,
          AwardTypeFlag: 13,
          RoundWin: 72,
          AddCrackLv: [0, 0, 0]
        }],
        Bet: 3,
        FreeTotalWin: 234.6,
        TotalWin: 234.6,
        GameType: 2
      };
      _class2$2.Test4 = {
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [13, 3, 7, 5]
            }, {
              Col: [10, 0, 6, 2]
            }, {
              Col: [15, 6, 0, 10]
            }, {
              Col: [6, 3, 10, 0]
            }, {
              Col: [13, 3, 9, 4]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 8,
          AwardTypeFlag: 66,
          AddCrackLv: [1, 1, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 10, 0, 8]
            }, {
              Col: [9, 3, 7, 5]
            }, {
              Col: [2, 10, 10, 3]
            }, {
              Col: [7, 10, 4, 3]
            }, {
              Col: [10, 3, 8, 2]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [3, 1.5, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 3, 6, 0]
            }, {
              Col: [0, 3, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 8,
          FreeNowRound: 1,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 7, 5, 3]
            }, {
              Col: [1, 5, 8, 9]
            }, {
              Col: [0, 10, 1, 2]
            }, {
              Col: [10, 1, 4, 1]
            }, {
              Col: [6, 7, 2, 6]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 3, 0, 0]
            }, {
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 8,
          FreeNowRound: 2,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [9, 3, 2, 4]
            }, {
              Col: [1, 6, 1, 7]
            }, {
              Col: [7, 3, 3, 2]
            }, {
              Col: [8, 0, 6, 0]
            }, {
              Col: [7, 8, 6, 6]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 8,
          FreeNowRound: 3,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [9, 4, 2, 3]
            }, {
              Col: [16, 5, 1, 5]
            }, {
              Col: [7, 2, 0, 10]
            }, {
              Col: [16, 0, 0, 1]
            }, {
              Col: [6, 8, 3, 16]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 1.5]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 16,
              Count: 3,
              Line: 3,
              Mult: 1,
              Win: 3
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [3, 0],
          FreeRemainRound: 12,
          FreeTotalRound: 16,
          FreeNowRound: 4,
          AddRounds: 8,
          AwardTypeFlag: 132,
          RoundWin: 3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 10, 4, 4]
            }, {
              Col: [6, 6, 1, 5]
            }, {
              Col: [0, 7, 1, 7]
            }, {
              Col: [5, 1, 5, 0]
            }, {
              Col: [10, 6, 1, 7]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 6, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 11,
          FreeTotalRound: 16,
          FreeNowRound: 5,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 0, 10, 4]
            }, {
              Col: [3, 9, 5, 5]
            }, {
              Col: [7, 4, 17, 1]
            }, {
              Col: [5, 0, 17, 6]
            }, {
              Col: [10, 8, 0, 6]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 3, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [3, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 17,
              Count: 2,
              Line: 2,
              Mult: 1,
              Win: 12
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [12, 0],
          LineWin: [0, 0],
          FreeRemainRound: 10,
          FreeTotalRound: 16,
          FreeNowRound: 6,
          AwardTypeFlag: 4,
          RoundWin: 12,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 10, 3, 6]
            }, {
              Col: [5, 6, 1, 6]
            }, {
              Col: [4, 7, 0, 17]
            }, {
              Col: [3, 1, 17, 0]
            }, {
              Col: [5, 7, 5, 6]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 3, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 6,
              Count: 5,
              Line: 2,
              Mult: 1,
              Win: 9
            }, {
              Symbol: 17,
              Count: 2,
              Line: 2,
              Mult: 1,
              Win: 6
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [6, 0],
          LineWin: [9, 0],
          FreeRemainRound: 9,
          FreeTotalRound: 16,
          FreeNowRound: 7,
          AwardTypeFlag: 5,
          RoundWin: 15,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 7, 5, 3]
            }, {
              Col: [1, 19, 5, 6]
            }, {
              Col: [1, 2, 6, 1]
            }, {
              Col: [5, 5, 5, 1]
            }, {
              Col: [6, 6, 7, 2]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 16,
          FreeNowRound: 8,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [0, 10, 4, 6]
            }, {
              Col: [3, 7, 5, 9]
            }, {
              Col: [5, 10, 8, 0]
            }, {
              Col: [10, 3, 7, 5]
            }, {
              Col: [4, 6, 5, 10]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 1.5, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 1.5, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 6]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 16,
          FreeNowRound: 9,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 10, 4, 8]
            }, {
              Col: [1, 5, 6, 1]
            }, {
              Col: [7, 0, 1, 0]
            }, {
              Col: [1, 9, 4, 8]
            }, {
              Col: [9, 6, 8, 3]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 45, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 16,
          FreeNowRound: 10,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 2, 10, 4]
            }, {
              Col: [6, 1, 17, 5]
            }, {
              Col: [2, 1, 7, 2]
            }, {
              Col: [7, 8, 0, 8]
            }, {
              Col: [8, 8, 6, 6]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 3, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 2,
              Count: 3,
              Line: 4,
              Mult: 1,
              Win: 2.4
            }, {
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 1,
              Win: 3
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 3
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [3, 0],
          LineWin: [5.4, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 16,
          FreeNowRound: 11,
          AwardTypeFlag: 5,
          RoundWin: 8.4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 9, 4, 10]
            }, {
              Col: [1, 17, 5, 6]
            }, {
              Col: [7, 0, 5, 0]
            }, {
              Col: [3, 10, 10, 1]
            }, {
              Col: [9, 5, 7, 6]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 3]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 3, 1.5, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 1,
              Win: 3
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 7.5
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [7.5, 0],
          LineWin: [3, 0],
          FreeRemainRound: 4,
          FreeTotalRound: 16,
          FreeNowRound: 12,
          AwardTypeFlag: 5,
          RoundWin: 10.5,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 2, 4, 4]
            }, {
              Col: [1, 7, 5, 5]
            }, {
              Col: [0, 1, 7, 0]
            }, {
              Col: [2, 17, 0, 5]
            }, {
              Col: [6, 7, 8, 7]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [3, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 3
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [3, 0],
          LineWin: [0, 0],
          FreeRemainRound: 3,
          FreeTotalRound: 16,
          FreeNowRound: 13,
          AwardTypeFlag: 4,
          RoundWin: 3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 0, 3]
            }, {
              Col: [0, 10, 10, 2]
            }, {
              Col: [17, 8, 0, 7]
            }, {
              Col: [1, 9, 4, 8]
            }, {
              Col: [7, 8, 6, 5]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 3, 6, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{
            ADV: [{
              Count: 3,
              Line: 2,
              Mult: 1,
              Win: .6
            }, {
              Symbol: 2,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: .6
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 9
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [9, 0],
          LineWin: [1.2, 0],
          FreeRemainRound: 2,
          FreeTotalRound: 16,
          FreeNowRound: 14,
          AwardTypeFlag: 5,
          RoundWin: 10.2,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [0, 8, 2, 10]
            }, {
              Col: [9, 9, 1, 3]
            }, {
              Col: [10, 5, 7, 0]
            }, {
              Col: [0, 7, 5, 10]
            }, {
              Col: [10, 5, 9, 1]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 3]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [3, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 3]
            }, {
              Col: [3, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 1,
          FreeTotalRound: 16,
          FreeNowRound: 15,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 2, 3, 10]
            }, {
              Col: [5, 0, 10, 10]
            }, {
              Col: [0, 10, 1, 2]
            }, {
              Col: [0, 6, 7, 17]
            }, {
              Col: [6, 5, 7, 6]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 3]
            }, {
              Col: [0, 0, 6, 3]
            }, {
              Col: [0, 6, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 4,
              Line: 2,
              Mult: 1,
              Win: 15
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 18
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [18, 0],
          LineWin: [15, 0],
          FreeTotalRound: 16,
          FreeNowRound: 16,
          AwardTypeFlag: 13,
          RoundWin: 33,
          AddCrackLv: [0, 0, 0]
        }],
        Bet: 3,
        FreeTotalWin: 95.1,
        TotalWin: 95.1,
        GameType: 3
      };
      _class2$2.Test5 = {
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [4, 13, 3, 2]
            }, {
              Col: [10, 10, 2, 8]
            }, {
              Col: [2, 13, 10, 0]
            }, {
              Col: [5, 1, 5, 0]
            }, {
              Col: [8, 13, 6, 6]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 2,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: .6
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [.6, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 8,
          AwardTypeFlag: 19,
          RoundWin: .6,
          AddCrackLv: [0, 1, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 10, 2, 9]
            }, {
              Col: [19, 5, 6, 6]
            }, {
              Col: [6, 7, 0, 5]
            }, {
              Col: [5, 5, 10, 1]
            }, {
              Col: [8, 7, 18, 10]
            }]
          }, {
            PSD: [{
              Col: [10, 4, 3, 4]
            }, {
              Col: [6, 1, 7, 5]
            }, {
              Col: [5, 10, 2, 2]
            }, {
              Col: [10, 1, 3, 1]
            }, {
              Col: [7, 5, 18, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 3,
              Win: 9
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [9, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 8,
          FreeNowRound: 1,
          AwardTypeFlag: 5,
          RoundWin: 9,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 4, 10, 10]
            }, {
              Col: [10, 5, 10, 6]
            }, {
              Col: [3, 7, 10, 7]
            }, {
              Col: [10, 10, 1, 4]
            }, {
              Col: [10, 10, 6, 8]
            }]
          }, {
            PSD: [{
              Col: [2, 9, 4, 2]
            }, {
              Col: [5, 0, 10, 10]
            }, {
              Col: [7, 0, 16, 1]
            }, {
              Col: [1, 0, 18, 1]
            }, {
              Col: [6, 10, 7, 8]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 16,
              Mult: 1,
              Win: 144
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [144, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 8,
          FreeNowRound: 2,
          AwardTypeFlag: 5,
          RoundWin: 144,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 10, 10]
            }, {
              Col: [9, 5, 1, 5]
            }, {
              Col: [1, 10, 10, 0]
            }, {
              Col: [0, 16, 0, 0]
            }, {
              Col: [6, 5, 7, 6]
            }]
          }, {
            PSD: [{
              Col: [3, 2, 4, 3]
            }, {
              Col: [1, 6, 5, 1]
            }, {
              Col: [10, 1, 7, 0]
            }, {
              Col: [8, 0, 0, 1]
            }, {
              Col: [10, 10, 8, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 8,
          FreeNowRound: 3,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 4, 3, 2]
            }, {
              Col: [6, 1, 6, 1]
            }, {
              Col: [1, 7, 1, 18]
            }, {
              Col: [9, 4, 8, 19]
            }, {
              Col: [10, 8, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [10, 2, 8, 4]
            }, {
              Col: [3, 10, 10, 5]
            }, {
              Col: [10, 10, 10, 10]
            }, {
              Col: [9, 1, 8, 2]
            }, {
              Col: [5, 10, 7, 3]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 8,
              Mult: 1,
              Win: 48
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 48],
          FreeRemainRound: 4,
          FreeTotalRound: 8,
          FreeNowRound: 4,
          AwardTypeFlag: 5,
          RoundWin: 48,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 10, 9, 4]
            }, {
              Col: [9, 3, 6, 6]
            }, {
              Col: [7, 1, 0, 19]
            }, {
              Col: [1, 5, 5, 1]
            }, {
              Col: [0, 7, 18, 6]
            }]
          }, {
            PSD: [{
              Col: [9, 9, 10, 4]
            }, {
              Col: [18, 7, 5, 5]
            }, {
              Col: [8, 0, 10, 9]
            }, {
              Col: [4, 3, 1, 10]
            }, {
              Col: [7, 7, 5, 9]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 3,
              Count: 3,
              Line: 1,
              Mult: 3,
              Win: 1.8
            }, {
              Symbol: 9,
              Count: 3,
              Line: 1,
              Mult: 3,
              Win: 9
            }]
          }, {
            ADV: [{
              Symbol: 9,
              Count: 3,
              Line: 2,
              Mult: 2,
              Win: 12
            }, {
              Symbol: 10,
              Count: 4,
              Line: 1,
              Mult: 2,
              Win: 15
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [10.8, 27],
          FreeRemainRound: 3,
          FreeTotalRound: 8,
          FreeNowRound: 5,
          AwardTypeFlag: 5,
          RoundWin: 37.8,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [5, 3, 2, 10]
            }, {
              Col: [10, 1, 18, 1]
            }, {
              Col: [6, 7, 0, 5]
            }, {
              Col: [10, 10, 5, 1]
            }, {
              Col: [6, 6, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [4, 2, 3, 18]
            }, {
              Col: [1, 6, 5, 1]
            }, {
              Col: [4, 7, 0, 18]
            }, {
              Col: [5, 1, 9, 4]
            }, {
              Col: [10, 10, 8, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 5,
              Count: 4,
              Line: 1,
              Mult: 2,
              Win: 3
            }, {
              Symbol: 10,
              Count: 2,
              Line: 2,
              Mult: 2,
              Win: 12
            }]
          }, {
            ADV: [{
              Symbol: 1,
              Count: 4,
              Line: 2,
              Mult: 4,
              Win: 4.8
            }, {
              Symbol: 5,
              Count: 4,
              Line: 1,
              Mult: 4,
              Win: 6
            }, {
              Symbol: 6,
              Count: 3,
              Line: 1,
              Mult: 4,
              Win: 6
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [15, 16.8],
          FreeRemainRound: 2,
          FreeTotalRound: 8,
          FreeNowRound: 6,
          AwardTypeFlag: 5,
          RoundWin: 31.8,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 4, 4, 3]
            }, {
              Col: [1, 6, 5, 1]
            }, {
              Col: [18, 1, 1, 7]
            }, {
              Col: [8, 5, 1, 0]
            }, {
              Col: [8, 6, 6, 10]
            }]
          }, {
            PSD: [{
              Col: [10, 3, 2, 0]
            }, {
              Col: [10, 5, 1, 5]
            }, {
              Col: [0, 8, 7, 0]
            }, {
              Col: [1, 1, 0, 8]
            }, {
              Col: [6, 0, 7, 8]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 1,
              Win: 3
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 3],
          FreeRemainRound: 1,
          FreeTotalRound: 8,
          FreeNowRound: 7,
          AwardTypeFlag: 5,
          RoundWin: 3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 2, 10]
            }, {
              Col: [0, 6, 10, 10]
            }, {
              Col: [7, 3, 1, 1]
            }, {
              Col: [1, 4, 1, 4]
            }, {
              Col: [10, 6, 0, 7]
            }]
          }, {
            PSD: [{
              Col: [10, 2, 4, 2]
            }, {
              Col: [7, 5, 1, 1]
            }, {
              Col: [1, 7, 3, 3]
            }, {
              Col: [5, 1, 9, 4]
            }, {
              Col: [8, 8, 6, 6]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 2,
              Mult: 1,
              Win: 6
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [6, 0],
          FreeTotalRound: 8,
          FreeNowRound: 8,
          AwardTypeFlag: 13,
          RoundWin: 6,
          AddCrackLv: [0, 0, 0]
        }],
        Bet: 3,
        FreeTotalWin: 279.6,
        TotalWin: 280.2,
        GameType: 1
      };
      _class2$2.Test6 = {
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [10, 4, 4, 14]
            }, {
              Col: [3, 6, 6, 1]
            }, {
              Col: [0, 7, 9, 13]
            }, {
              Col: [1, 5, 0, 5]
            }, {
              Col: [3, 15, 4, 10]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 8,
          AwardTypeFlag: 18,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 9, 4, 2]
            }, {
              Col: [1, 7, 5, 5]
            }, {
              Col: [1, 7, 1, 19]
            }, {
              Col: [18, 0, 6, 7]
            }, {
              Col: [7, 8, 6, 7]
            }]
          }, {
            PSD: [{
              Col: [3, 2, 9, 4]
            }, {
              Col: [8, 10, 6, 6]
            }, {
              Col: [0, 5, 0, 2]
            }, {
              Col: [3, 10, 10, 1]
            }, {
              Col: [7, 6, 6, 9]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 8,
          FreeNowRound: 1,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 10, 4, 3]
            }, {
              Col: [5, 3, 9, 3]
            }, {
              Col: [2, 1, 2, 6]
            }, {
              Col: [1, 5, 5, 1]
            }, {
              Col: [7, 7, 5, 9]
            }]
          }, {
            PSD: [{
              Col: [10, 10, 0, 6]
            }, {
              Col: [7, 3, 1, 10]
            }, {
              Col: [1, 6, 2, 10]
            }, {
              Col: [5, 5, 0, 9]
            }, {
              Col: [7, 5, 10, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 2,
              Mult: 1,
              Win: 12
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 12],
          FreeRemainRound: 6,
          FreeTotalRound: 8,
          FreeNowRound: 2,
          AwardTypeFlag: 5,
          RoundWin: 12,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 2, 9, 9]
            }, {
              Col: [5, 1, 6, 1]
            }, {
              Col: [0, 7, 1, 0]
            }, {
              Col: [0, 6, 0, 8]
            }, {
              Col: [7, 6, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [9, 3, 2, 4]
            }, {
              Col: [1, 5, 5, 6]
            }, {
              Col: [0, 7, 1, 2]
            }, {
              Col: [3, 1, 18, 0]
            }, {
              Col: [10, 10, 10, 8]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 8,
          FreeNowRound: 3,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 9, 4]
            }, {
              Col: [1, 5, 1, 7]
            }, {
              Col: [3, 7, 1, 7]
            }, {
              Col: [0, 0, 5, 2]
            }, {
              Col: [9, 6, 8, 3]
            }]
          }, {
            PSD: [{
              Col: [2, 4, 3, 4]
            }, {
              Col: [8, 10, 6, 6]
            }, {
              Col: [1, 0, 1, 7]
            }, {
              Col: [5, 2, 18, 0]
            }, {
              Col: [6, 5, 7, 6]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 4,
          FreeTotalRound: 8,
          FreeNowRound: 4,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 16, 3, 2]
            }, {
              Col: [1, 1, 6, 5]
            }, {
              Col: [5, 0, 2, 2]
            }, {
              Col: [1, 0, 0, 5]
            }, {
              Col: [6, 8, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [4, 10, 3, 6]
            }, {
              Col: [1, 5, 6, 3]
            }, {
              Col: [2, 1, 2, 6]
            }, {
              Col: [2, 18, 0, 5]
            }, {
              Col: [10, 10, 8, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 6,
              Count: 4,
              Line: 1,
              Mult: 2,
              Win: 6
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 6],
          FreeRemainRound: 3,
          FreeTotalRound: 8,
          FreeNowRound: 5,
          AwardTypeFlag: 5,
          RoundWin: 6,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 4, 0, 1]
            }, {
              Col: [16, 5, 1, 5]
            }, {
              Col: [2, 1, 7, 2]
            }, {
              Col: [4, 0, 16, 0]
            }, {
              Col: [8, 10, 10, 8]
            }]
          }, {
            PSD: [{
              Col: [16, 3, 2, 4]
            }, {
              Col: [10, 2, 8, 10]
            }, {
              Col: [1, 1, 7, 1]
            }, {
              Col: [0, 5, 2, 19]
            }, {
              Col: [6, 5, 7, 5]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 1,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: .3
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [.3, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 13,
          FreeNowRound: 6,
          AddRounds: 5,
          AwardTypeFlag: 133,
          RoundWin: .3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [0, 1, 3, 2]
            }, {
              Col: [6, 6, 1, 5]
            }, {
              Col: [7, 7, 3, 1]
            }, {
              Col: [0, 8, 8, 0]
            }, {
              Col: [8, 6, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [8, 2, 10, 6]
            }, {
              Col: [1, 1, 5, 9]
            }, {
              Col: [10, 5, 7, 0]
            }, {
              Col: [10, 3, 7, 5]
            }, {
              Col: [1, 7, 2, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 1,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: .3
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [.3, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 13,
          FreeNowRound: 7,
          AwardTypeFlag: 5,
          RoundWin: .3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [9, 3, 2, 4]
            }, {
              Col: [5, 1, 6, 1]
            }, {
              Col: [0, 7, 1, 2]
            }, {
              Col: [1, 19, 0, 6]
            }, {
              Col: [9, 5, 7, 6]
            }]
          }, {
            PSD: [{
              Col: [4, 3, 2, 4]
            }, {
              Col: [6, 5, 1, 5]
            }, {
              Col: [7, 0, 18, 8]
            }, {
              Col: [10, 10, 1, 3]
            }, {
              Col: [8, 6, 5, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 13,
          FreeNowRound: 8,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 4, 3, 10]
            }, {
              Col: [5, 1, 6, 1]
            }, {
              Col: [1, 7, 3, 3]
            }, {
              Col: [5, 1, 0, 5]
            }, {
              Col: [8, 6, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [4, 4, 3, 10]
            }, {
              Col: [1, 18, 5, 6]
            }, {
              Col: [1, 7, 1, 19]
            }, {
              Col: [0, 0, 1, 0]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 3,
              Count: 3,
              Line: 1,
              Mult: 5,
              Win: 3
            }, {
              Symbol: 4,
              Count: 3,
              Line: 2,
              Mult: 5,
              Win: 9
            }, {
              Symbol: 10,
              Count: 3,
              Line: 1,
              Mult: 5,
              Win: 30
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 42],
          FreeRemainRound: 4,
          FreeTotalRound: 13,
          FreeNowRound: 9,
          AwardTypeFlag: 5,
          RoundWin: 42,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 4, 3, 2]
            }, {
              Col: [1, 7, 5, 5]
            }, {
              Col: [1, 7, 0, 0]
            }, {
              Col: [5, 1, 0, 0]
            }, {
              Col: [6, 7, 8, 8]
            }]
          }, {
            PSD: [{
              Col: [10, 2, 4, 16]
            }, {
              Col: [6, 6, 1, 5]
            }, {
              Col: [7, 3, 3, 2]
            }, {
              Col: [1, 18, 0, 6]
            }, {
              Col: [8, 6, 5, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 3,
          FreeTotalRound: 13,
          FreeNowRound: 10,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 0, 8, 2]
            }, {
              Col: [9, 3, 7, 5]
            }, {
              Col: [6, 2, 10, 3]
            }, {
              Col: [6, 1, 10, 0]
            }, {
              Col: [5, 6, 0, 10]
            }]
          }, {
            PSD: [{
              Col: [2, 10, 4, 7]
            }, {
              Col: [5, 6, 0, 6]
            }, {
              Col: [2, 0, 1, 0]
            }, {
              Col: [0, 0, 3, 1]
            }, {
              Col: [6, 0, 7, 8]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 2,
          FreeTotalRound: 13,
          FreeNowRound: 11,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 16, 3, 2]
            }, {
              Col: [1, 18, 5, 6]
            }, {
              Col: [7, 0, 0, 8]
            }, {
              Col: [0, 5, 2, 18]
            }, {
              Col: [10, 10, 8, 10]
            }]
          }, {
            PSD: [{
              Col: [9, 9, 10, 4]
            }, {
              Col: [1, 1, 5, 1]
            }, {
              Col: [1, 1, 7, 0]
            }, {
              Col: [16, 0, 0, 1]
            }, {
              Col: [7, 6, 6, 9]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 1,
          FreeTotalRound: 13,
          FreeNowRound: 12,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [7, 5, 3, 2]
            }, {
              Col: [5, 1, 1, 6]
            }, {
              Col: [0, 7, 1, 7]
            }, {
              Col: [3, 1, 0, 4]
            }, {
              Col: [9, 6, 8, 3]
            }]
          }, {
            PSD: [{
              Col: [10, 3, 6, 2]
            }, {
              Col: [5, 1, 5, 1]
            }, {
              Col: [0, 10, 1, 7]
            }, {
              Col: [0, 3, 1, 18]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeTotalRound: 13,
          FreeNowRound: 13,
          AwardTypeFlag: 12,
          AddCrackLv: [0, 0, 0]
        }],
        Bet: 3,
        FreeTotalWin: 60.6,
        TotalWin: 60.6,
        GameType: 1
      };
      _class2$2.Test7 = {
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [15, 7, 5, 9]
            }, {
              Col: [4, 10, 0, 6]
            }, {
              Col: [6, 5, 13, 8]
            }, {
              Col: [10, 5, 6, 4]
            }, {
              Col: [10, 5, 9, 15]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 8,
          AwardTypeFlag: 66,
          AddCrackLv: [1, 2, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 6, 2, 4]
            }, {
              Col: [4, 8, 0, 5]
            }, {
              Col: [2, 6, 1, 3]
            }, {
              Col: [10, 1, 4, 1]
            }, {
              Col: [6, 9, 6, 8]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 8,
          FreeNowRound: 1,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 2, 10, 4]
            }, {
              Col: [1, 6, 5, 1]
            }, {
              Col: [2, 1, 2, 6]
            }, {
              Col: [0, 8, 5, 1]
            }, {
              Col: [3, 16, 4, 10]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 3, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 6]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 8,
          FreeNowRound: 2,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 10, 4]
            }, {
              Col: [6, 1, 5, 5]
            }, {
              Col: [0, 0, 7, 1]
            }, {
              Col: [10, 1, 4, 1]
            }, {
              Col: [6, 7, 8, 10]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 6, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 1.5]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 8,
          FreeNowRound: 3,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 4, 3, 10]
            }, {
              Col: [0, 6, 16, 5]
            }, {
              Col: [1, 7, 7, 0]
            }, {
              Col: [0, 4, 0, 16]
            }, {
              Col: [7, 8, 8, 6]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 1.5]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 9,
          FreeTotalRound: 13,
          FreeNowRound: 4,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 2, 10]
            }, {
              Col: [0, 5, 3, 9]
            }, {
              Col: [1, 1, 7, 1]
            }, {
              Col: [3, 1, 0, 4]
            }, {
              Col: [6, 7, 8, 10]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 3]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 60]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 13,
          FreeNowRound: 5,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [1, 3, 2, 0]
            }, {
              Col: [16, 5, 1, 1]
            }, {
              Col: [2, 0, 1, 0]
            }, {
              Col: [1, 4, 1, 4]
            }, {
              Col: [10, 10, 6, 5]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 1.5, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 1,
              Count: 4,
              Line: 4,
              Mult: 1,
              Win: 2.4
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [2.4, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 13,
          FreeNowRound: 6,
          AwardTypeFlag: 5,
          RoundWin: 2.4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [5, 9, 1, 1]
            }, {
              Col: [10, 2, 6, 8]
            }, {
              Col: [3, 6, 10, 10]
            }, {
              Col: [0, 6, 3, 10]
            }, {
              Col: [3, 9, 4, 10]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }, {
              Col: [0, 0, 1.5, 1.5]
            }, {
              Col: [0, 0, 0, 6]
            }, {
              Col: [0, 0, 0, 3]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 13,
          FreeNowRound: 7,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [7, 0, 3, 2]
            }, {
              Col: [5, 1, 5, 16]
            }, {
              Col: [18, 1, 1, 7]
            }, {
              Col: [0, 1, 16, 0]
            }, {
              Col: [6, 6, 9, 6]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 10,
          FreeTotalRound: 18,
          FreeNowRound: 8,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 10, 10, 0]
            }, {
              Col: [5, 9, 9, 1]
            }, {
              Col: [6, 10, 5, 2]
            }, {
              Col: [4, 3, 6, 10]
            }, {
              Col: [1, 10, 7, 3]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 3, 1.5, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 6, 0, 0]
            }, {
              Col: [0, 0, 0, 1.5]
            }, {
              Col: [0, 3, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 9,
          FreeTotalRound: 18,
          FreeNowRound: 9,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 8, 3, 4]
            }, {
              Col: [6, 8, 1, 8]
            }, {
              Col: [1, 7, 0, 1]
            }, {
              Col: [5, 5, 1, 9]
            }, {
              Col: [10, 6, 5, 10]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [1.5, 0, 0, 15]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 18,
          FreeNowRound: 10,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [16, 3, 2, 4]
            }, {
              Col: [6, 6, 1, 5]
            }, {
              Col: [1, 0, 0, 7]
            }, {
              Col: [6, 0, 8, 8]
            }, {
              Col: [6, 9, 6, 8]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 18,
          FreeNowRound: 11,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 10, 4, 8]
            }, {
              Col: [6, 1, 1, 5]
            }, {
              Col: [0, 7, 1, 0]
            }, {
              Col: [0, 0, 3, 1]
            }, {
              Col: [6, 7, 8, 7]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 3e3, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 18,
          FreeNowRound: 12,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 2, 4, 3]
            }, {
              Col: [6, 1, 5, 5]
            }, {
              Col: [7, 0, 5, 0]
            }, {
              Col: [10, 10, 1, 4]
            }, {
              Col: [6, 1, 7, 8]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 3, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 18,
          FreeNowRound: 13,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 9, 4]
            }, {
              Col: [1, 17, 5, 6]
            }, {
              Col: [0, 7, 1, 7]
            }, {
              Col: [10, 10, 1, 4]
            }, {
              Col: [8, 10, 10, 6]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 1.5, 0, 0]
            }, {
              Col: [0, 6, 3, 0]
            }]
          }, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 16.5
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [16.5, 0],
          LineWin: [0, 0],
          FreeRemainRound: 4,
          FreeTotalRound: 18,
          FreeNowRound: 14,
          AwardTypeFlag: 4,
          RoundWin: 16.5,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 4, 3, 2]
            }, {
              Col: [6, 1, 7, 5]
            }, {
              Col: [10, 0, 10, 1]
            }, {
              Col: [1, 1, 0, 8]
            }, {
              Col: [8, 6, 5, 7]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 0, 1.5, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 3,
          FreeTotalRound: 18,
          FreeNowRound: 15,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [8, 0, 10, 2]
            }, {
              Col: [7, 3, 1, 10]
            }, {
              Col: [9, 2, 10, 10]
            }, {
              Col: [2, 7, 7, 3]
            }, {
              Col: [10, 1, 7, 5]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 6, 0]
            }, {
              Col: [0, 0, 0, 3]
            }, {
              Col: [0, 0, 6, 6]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 2,
              Mult: 1,
              Win: 12
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [12, 0],
          FreeRemainRound: 2,
          FreeTotalRound: 18,
          FreeNowRound: 16,
          AwardTypeFlag: 5,
          RoundWin: 12,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 10, 10, 4]
            }, {
              Col: [5, 9, 9, 1]
            }, {
              Col: [9, 2, 10, 10]
            }, {
              Col: [1, 10, 0, 7]
            }, {
              Col: [10, 7, 3, 6]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 3, 3, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 1.5, 3]
            }, {
              Col: [0, 1.5, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 1,
          FreeTotalRound: 18,
          FreeNowRound: 17,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [5, 9, 1, 1]
            }, {
              Col: [6, 2, 10, 4]
            }, {
              Col: [2, 7, 10, 9]
            }, {
              Col: [3, 7, 5, 10]
            }, {
              Col: [10, 10, 10, 10]
            }]
          }, {}],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 3, 0]
            }, {
              Col: [0, 0, 1.5, 0]
            }, {
              Col: [0, 0, 0, 6]
            }, {
              Col: [60, 15, 3, 30]
            }]
          }, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeTotalRound: 18,
          FreeNowRound: 18,
          AwardTypeFlag: 12,
          AddCrackLv: [0, 0, 0]
        }],
        Bet: 3,
        FreeTotalWin: 30.9,
        TotalWin: 30.9,
        GameType: 3
      };
      _class2$2.Test8 = {
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [4, 2, 3, 2]
            }, {
              Col: [1, 5, 6, 1]
            }, {
              Col: [7, 0, 12, 8]
            }, {
              Col: [2, 12, 0, 5]
            }, {
              Col: [3, 15, 4, 10]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          AddCrackLv: [0, 0, 1]
        }],
        Bet: 3
      };
      _class2$2.BUG_TEST = {
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [2, 4, 14, 3]
            }, {
              Col: [6, 1, 5, 5]
            }, {
              Col: [7, 0, 12, 8]
            }, {
              Col: [8, 3, 10, 10]
            }, {
              Col: [5, 8, 7, 6]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 8,
          AwardTypeFlag: 34,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 2, 4, 4]
            }, {
              Col: [5, 1, 18, 5]
            }, {
              Col: [1, 7, 7, 0]
            }, {
              Col: [3, 1, 18, 0]
            }, {
              Col: [7, 5, 9, 5]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 2,
              Win: 2
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [2, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 8,
          FreeNowRound: 1,
          AwardTypeFlag: 5,
          RoundWin: 2,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 2, 4]
            }, {
              Col: [16, 5, 1, 5]
            }, {
              Col: [18, 8, 0, 7]
            }, {
              Col: [1, 16, 0, 0]
            }, {
              Col: [3, 16, 4, 10]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 16,
              Count: 3,
              Line: 3,
              Mult: 1,
              Win: 1
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [1, 0],
          FreeRemainRound: 14,
          FreeTotalRound: 16,
          FreeNowRound: 2,
          AddRounds: 8,
          AwardTypeFlag: 132,
          RoundWin: 1,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 0, 1, 3]
            }, {
              Col: [5, 6, 1, 18]
            }, {
              Col: [10, 1, 7, 7]
            }, {
              Col: [5, 1, 9, 4]
            }, {
              Col: [5, 9, 5, 7]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 1,
              Count: 4,
              Line: 2,
              Mult: 2,
              Win: .8
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [.8, 0],
          FreeRemainRound: 13,
          FreeTotalRound: 16,
          FreeNowRound: 3,
          AwardTypeFlag: 5,
          RoundWin: .8,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 4, 3, 10]
            }, {
              Col: [5, 6, 6, 1]
            }, {
              Col: [1, 1, 7, 0]
            }, {
              Col: [1, 0, 5, 19]
            }, {
              Col: [8, 3, 16, 4]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 12,
          FreeTotalRound: 16,
          FreeNowRound: 4,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 2, 10]
            }, {
              Col: [1, 18, 5, 6]
            }, {
              Col: [0, 0, 7, 1]
            }, {
              Col: [0, 1, 0, 0]
            }, {
              Col: [10, 8, 10, 10]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 2,
              Win: 2
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [2, 0],
          FreeRemainRound: 11,
          FreeTotalRound: 16,
          FreeNowRound: 5,
          AwardTypeFlag: 5,
          RoundWin: 2,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 4, 3, 10]
            }, {
              Col: [0, 10, 10, 2]
            }, {
              Col: [0, 1, 0, 7]
            }, {
              Col: [10, 10, 1, 3]
            }, {
              Col: [10, 10, 6, 8]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 2,
              Mult: 1,
              Win: 2
            }]
          }, {}],
          Collected: 2,
          GoldPos: [{
            Col: [12, 13]
          }, {}],
          CollectWin: [0, 0],
          LineWin: [2, 0],
          FreeRemainRound: 10,
          FreeTotalRound: 16,
          FreeNowRound: 6,
          AwardTypeFlag: 5,
          RoundWin: 2,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 8, 3, 4]
            }, {
              Col: [19, 3, 5, 6]
            }, {
              Col: [0, 10, 1, 2]
            }, {
              Col: [1, 4, 3, 1]
            }, {
              Col: [6, 10, 10, 6]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 2,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 9,
          FreeTotalRound: 16,
          FreeNowRound: 7,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 9, 4, 10]
            }, {
              Col: [5, 5, 6, 1]
            }, {
              Col: [0, 1, 7, 0]
            }, {
              Col: [1, 18, 0, 6]
            }, {
              Col: [6, 6, 7, 2]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 2,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 16,
          FreeNowRound: 8,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 4, 2]
            }, {
              Col: [1, 7, 5, 1]
            }, {
              Col: [0, 1, 7, 0]
            }, {
              Col: [4, 1, 4, 3]
            }, {
              Col: [5, 10, 10, 8]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 2,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 16,
          FreeNowRound: 9,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 2, 3, 2]
            }, {
              Col: [8, 9, 5, 1]
            }, {
              Col: [1, 3, 7, 1]
            }, {
              Col: [1, 5, 0, 5]
            }, {
              Col: [6, 6, 7, 8]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 2,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 16,
          FreeNowRound: 10,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 9, 4, 2]
            }, {
              Col: [3, 9, 3, 6]
            }, {
              Col: [3, 1, 1, 7]
            }, {
              Col: [10, 1, 4, 1]
            }, {
              Col: [4, 10, 10, 10]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 4,
          GoldPos: [{
            Col: [18, 19]
          }, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 16,
          FreeNowRound: 11,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 4, 4, 3]
            }, {
              Col: [5, 6, 1, 18]
            }, {
              Col: [7, 3, 1, 1]
            }, {
              Col: [5, 18, 1, 5]
            }, {
              Col: [6, 6, 7, 2]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 3,
              Count: 4,
              Line: 2,
              Mult: 4,
              Win: 2.4
            }]
          }, {}],
          Collected: 4,
          GoldLevel: 1,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [2.4, 0],
          FreeRemainRound: 4,
          FreeTotalRound: 16,
          FreeNowRound: 12,
          AwardTypeFlag: 5,
          RoundWin: 2.4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [0, 10, 10, 2]
            }, {
              Col: [2, 1, 2, 6]
            }, {
              Col: [1, 1, 0, 18]
            }, {
              Col: [8, 8, 8, 6]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 2,
              Count: 4,
              Line: 2,
              Mult: 2,
              Win: 1.2
            }, {
              Symbol: 10,
              Count: 2,
              Line: 2,
              Mult: 1,
              Win: 2
            }]
          }, {}],
          Collected: 5,
          GoldLevel: 1,
          GoldPos: [{
            Col: [5]
          }, {}],
          CollectWin: [0, 0],
          LineWin: [3.2, 0],
          FreeRemainRound: 3,
          FreeTotalRound: 16,
          FreeNowRound: 13,
          AwardTypeFlag: 5,
          RoundWin: 3.2,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [6, 10, 8, 2]
            }, {
              Col: [5, 5, 7, 3]
            }, {
              Col: [0, 10, 10, 4]
            }, {
              Col: [5, 6, 4, 10]
            }, {
              Col: [0, 10, 1, 8]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 6,
          GoldLevel: 1,
          GoldPos: [{
            Col: [17]
          }, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 2,
          FreeTotalRound: 16,
          FreeNowRound: 14,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 3, 10, 2]
            }, {
              Col: [8, 1, 8, 4]
            }, {
              Col: [10, 0, 10, 1]
            }, {
              Col: [4, 3, 1, 10]
            }, {
              Col: [7, 8, 6, 6]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          Collected: 7,
          GoldLevel: 1,
          GoldPos: [{
            Col: [8]
          }, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 1,
          FreeTotalRound: 16,
          FreeNowRound: 15,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [0, 1, 3, 2]
            }, {
              Col: [7, 5, 5, 0]
            }, {
              Col: [7, 1, 18, 2]
            }, {
              Col: [0, 1, 1, 0]
            }, {
              Col: [6, 7, 11, 10]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Count: 4,
              Line: 2,
              Mult: 2,
              Win: .8
            }]
          }, {}],
          Collected: 7,
          GoldLevel: 2,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [.8, 0],
          FreeTotalRound: 16,
          FreeNowRound: 16,
          AwardTypeFlag: 13,
          RoundWin: .8,
          AddCrackLv: [0, 0, 0]
        }],
        Bet: 1,
        FreeTotalWin: 14.2,
        TotalWin: 14.2,
        RTP: .971,
        GameType: 2
      };
      _class2$2.MAXWIN_TEST = {
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [4, 10, 3, 13]
            }, {
              Col: [6, 10, 5, 1]
            }, {
              Col: [1, 7, 15, 0]
            }, {
              Col: [4, 8, 3, 10]
            }, {
              Col: [8, 10, 13, 6]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 1,
              Win: 3
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [3, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 8,
          AwardTypeFlag: 19,
          RoundWin: 3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 4, 2, 3]
            }, {
              Col: [5, 1, 6, 5]
            }, {
              Col: [2, 0, 10, 0]
            }, {
              Col: [0, 4, 0, 16]
            }, {
              Col: [8, 8, 6, 6]
            }]
          }, {
            PSD: [{
              Col: [4, 3, 4, 3]
            }, {
              Col: [9, 5, 1, 5]
            }, {
              Col: [1, 0, 7, 1]
            }, {
              Col: [10, 1, 3, 1]
            }, {
              Col: [16, 4, 10, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 8,
          FreeNowRound: 1,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [0, 1, 3, 2]
            }, {
              Col: [1, 7, 5, 1]
            }, {
              Col: [7, 0, 1, 0]
            }, {
              Col: [0, 5, 5, 5]
            }, {
              Col: [7, 5, 9, 5]
            }]
          }, {
            PSD: [{
              Col: [10, 10, 10, 10]
            }, {
              Col: [3, 1, 10, 7]
            }, {
              Col: [7, 4, 10, 1]
            }, {
              Col: [5, 0, 0, 6]
            }, {
              Col: [5, 9, 1, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 1,
              Count: 3,
              Line: 2,
              Mult: 1,
              Win: .6
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 4,
              Mult: 1,
              Win: 24
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [.6, 24],
          FreeRemainRound: 6,
          FreeTotalRound: 8,
          FreeNowRound: 2,
          AwardTypeFlag: 5,
          RoundWin: 24.6,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 8, 0, 10]
            }, {
              Col: [1, 9, 3, 10]
            }, {
              Col: [9, 0, 10, 10]
            }, {
              Col: [2, 7, 3, 6]
            }, {
              Col: [10, 1, 7, 5]
            }]
          }, {
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [1, 1, 5, 1]
            }, {
              Col: [10, 1, 7, 7]
            }, {
              Col: [1, 10, 10, 1]
            }, {
              Col: [9, 6, 8, 3]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 2,
              Mult: 1,
              Win: 12
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [12, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 8,
          FreeNowRound: 3,
          AwardTypeFlag: 5,
          RoundWin: 12,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [1, 5, 16, 5]
            }, {
              Col: [1, 0, 19, 1]
            }, {
              Col: [0, 0, 1, 16]
            }, {
              Col: [8, 6, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [4, 4, 3, 10]
            }, {
              Col: [5, 5, 6, 1]
            }, {
              Col: [0, 4, 7, 0]
            }, {
              Col: [1, 0, 0, 5]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 9,
          FreeTotalRound: 13,
          FreeNowRound: 4,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 3, 9, 5]
            }, {
              Col: [8, 10, 0, 6]
            }, {
              Col: [10, 8, 0, 6]
            }, {
              Col: [10, 4, 3, 6]
            }, {
              Col: [9, 4, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [3, 10, 2, 3]
            }, {
              Col: [5, 16, 5, 1]
            }, {
              Col: [5, 0, 2, 2]
            }, {
              Col: [0, 1, 16, 0]
            }, {
              Col: [7, 5, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 13,
          FreeTotalRound: 18,
          FreeNowRound: 5,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 2, 4, 16]
            }, {
              Col: [5, 6, 6, 1]
            }, {
              Col: [6, 7, 0, 5]
            }, {
              Col: [1, 3, 1, 0]
            }, {
              Col: [8, 6, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [6, 2, 4, 2]
            }, {
              Col: [10, 10, 2, 8]
            }, {
              Col: [0, 7, 1, 7]
            }, {
              Col: [8, 0, 0, 1]
            }, {
              Col: [8, 10, 10, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 12,
          FreeTotalRound: 18,
          FreeNowRound: 6,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [9, 9, 1, 3]
            }, {
              Col: [6, 4, 8, 10]
            }, {
              Col: [8, 4, 10, 10]
            }, {
              Col: [5, 10, 2, 8]
            }, {
              Col: [9, 4, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [2, 4, 2, 3]
            }, {
              Col: [8, 10, 6, 6]
            }, {
              Col: [2, 0, 10, 1]
            }, {
              Col: [5, 5, 1, 5]
            }, {
              Col: [3, 16, 4, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 11,
          FreeTotalRound: 18,
          FreeNowRound: 7,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 4, 2, 9]
            }, {
              Col: [6, 6, 1, 5]
            }, {
              Col: [0, 18, 8, 0]
            }, {
              Col: [4, 0, 16, 0]
            }, {
              Col: [6, 7, 8, 6]
            }]
          }, {
            PSD: [{
              Col: [1, 5, 9, 3]
            }, {
              Col: [6, 4, 10, 0]
            }, {
              Col: [4, 1, 10, 7]
            }, {
              Col: [1, 7, 10, 4]
            }, {
              Col: [9, 4, 1, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 10,
          FreeTotalRound: 18,
          FreeNowRound: 8,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 4, 0, 1]
            }, {
              Col: [3, 9, 3, 6]
            }, {
              Col: [1, 0, 0, 7]
            }, {
              Col: [10, 1, 3, 1]
            }, {
              Col: [7, 8, 6, 5]
            }]
          }, {
            PSD: [{
              Col: [2, 4, 3, 10]
            }, {
              Col: [19, 5, 6, 0]
            }, {
              Col: [9, 6, 7, 0]
            }, {
              Col: [1, 0, 0, 3]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 3,
              Win: 9
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 9],
          FreeRemainRound: 9,
          FreeTotalRound: 18,
          FreeNowRound: 9,
          AwardTypeFlag: 5,
          RoundWin: 9,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [9, 4, 2, 3]
            }, {
              Col: [6, 1, 18, 5]
            }, {
              Col: [0, 0, 7, 1]
            }, {
              Col: [1, 3, 10, 10]
            }, {
              Col: [10, 6, 8, 10]
            }]
          }, {
            PSD: [{
              Col: [2, 4, 16, 3]
            }, {
              Col: [5, 18, 3, 5]
            }, {
              Col: [16, 1, 7, 3]
            }, {
              Col: [10, 10, 1, 4]
            }, {
              Col: [10, 6, 1, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 3,
              Count: 3,
              Line: 2,
              Mult: 2,
              Win: 2.4
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 2.4],
          FreeRemainRound: 13,
          FreeTotalRound: 23,
          FreeNowRound: 10,
          AddRounds: 5,
          AwardTypeFlag: 133,
          RoundWin: 2.4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 2, 10]
            }, {
              Col: [5, 5, 0, 10]
            }, {
              Col: [0, 18, 1, 1]
            }, {
              Col: [5, 5, 1, 9]
            }, {
              Col: [4, 10, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [10, 2, 6, 4]
            }, {
              Col: [7, 3, 1, 10]
            }, {
              Col: [4, 10, 1, 8]
            }, {
              Col: [8, 2, 7, 3]
            }, {
              Col: [5, 10, 7, 3]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 1,
              Mult: 2,
              Win: 12
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: 6
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [12, 6],
          FreeRemainRound: 12,
          FreeTotalRound: 23,
          FreeNowRound: 11,
          AwardTypeFlag: 5,
          RoundWin: 18,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 8, 3, 4]
            }, {
              Col: [1, 5, 6, 1]
            }, {
              Col: [0, 0, 8, 7]
            }, {
              Col: [18, 1, 1, 0]
            }, {
              Col: [16, 4, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [2, 2, 10, 4]
            }, {
              Col: [8, 1, 8, 4]
            }, {
              Col: [1, 7, 0, 0]
            }, {
              Col: [6, 7, 8, 0]
            }, {
              Col: [16, 4, 10, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 11,
          FreeTotalRound: 23,
          FreeNowRound: 12,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [5, 6, 1, 18]
            }, {
              Col: [16, 1, 7, 3]
            }, {
              Col: [0, 5, 2, 18]
            }, {
              Col: [7, 8, 8, 6]
            }]
          }, {
            PSD: [{
              Col: [3, 2, 10, 4]
            }, {
              Col: [8, 4, 8, 0]
            }, {
              Col: [0, 4, 7, 0]
            }, {
              Col: [0, 0, 1, 1]
            }, {
              Col: [8, 6, 5, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 3,
              Count: 4,
              Line: 1,
              Mult: 4,
              Win: 3.6
            }, {
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 2,
              Win: 6
            }]
          }, {
            ADV: [{
              Symbol: 4,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: .9
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [9.6, .9],
          FreeRemainRound: 10,
          FreeTotalRound: 23,
          FreeNowRound: 13,
          AwardTypeFlag: 5,
          RoundWin: 10.5,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 9, 9, 10]
            }, {
              Col: [6, 1, 5, 5]
            }, {
              Col: [7, 7, 0, 1]
            }, {
              Col: [4, 1, 3, 10]
            }, {
              Col: [6, 7, 8, 6]
            }]
          }, {
            PSD: [{
              Col: [4, 3, 2, 9]
            }, {
              Col: [5, 1, 5, 16]
            }, {
              Col: [0, 1, 0, 1]
            }, {
              Col: [0, 0, 1, 16]
            }, {
              Col: [10, 8, 10, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 14,
          FreeTotalRound: 28,
          FreeNowRound: 14,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [6, 8, 1, 8]
            }, {
              Col: [7, 0, 1, 7]
            }, {
              Col: [0, 3, 1, 18]
            }, {
              Col: [8, 10, 10, 8]
            }]
          }, {
            PSD: [{
              Col: [4, 7, 5, 3]
            }, {
              Col: [6, 1, 5, 6]
            }, {
              Col: [7, 7, 3, 1]
            }, {
              Col: [1, 0, 4, 0]
            }, {
              Col: [4, 10, 10, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 13,
          FreeTotalRound: 28,
          FreeNowRound: 15,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 4, 3, 10]
            }, {
              Col: [6, 6, 8, 1]
            }, {
              Col: [0, 1, 7, 0]
            }, {
              Col: [5, 2, 18, 0]
            }, {
              Col: [8, 7, 6, 5]
            }]
          }, {
            PSD: [{
              Col: [2, 4, 4, 3]
            }, {
              Col: [9, 3, 6, 6]
            }, {
              Col: [2, 0, 4, 7]
            }, {
              Col: [0, 6, 7, 8]
            }, {
              Col: [10, 10, 6, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 12,
          FreeTotalRound: 28,
          FreeNowRound: 16,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 2, 4, 4]
            }, {
              Col: [3, 6, 6, 1]
            }, {
              Col: [4, 7, 0, 18]
            }, {
              Col: [1, 9, 4, 8]
            }, {
              Col: [5, 9, 5, 7]
            }]
          }, {
            PSD: [{
              Col: [1, 3, 2, 0]
            }, {
              Col: [1, 5, 6, 3]
            }, {
              Col: [1, 2, 1, 2]
            }, {
              Col: [10, 1, 4, 1]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 1,
              Count: 4,
              Line: 4,
              Mult: 1,
              Win: 2.4
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 2.4],
          FreeRemainRound: 11,
          FreeTotalRound: 28,
          FreeNowRound: 17,
          AwardTypeFlag: 5,
          RoundWin: 2.4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 4, 2, 9]
            }, {
              Col: [5, 3, 9, 3]
            }, {
              Col: [4, 7, 0, 18]
            }, {
              Col: [2, 18, 0, 5]
            }, {
              Col: [6, 10, 10, 6]
            }]
          }, {
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [5, 1, 18, 5]
            }, {
              Col: [1, 18, 2, 0]
            }, {
              Col: [1, 18, 0, 6]
            }, {
              Col: [6, 6, 7, 8]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 9,
              Count: 4,
              Line: 1,
              Mult: 4,
              Win: 18
            }]
          }, {
            ADV: [{
              Symbol: 2,
              Count: 4,
              Line: 2,
              Mult: 6,
              Win: 10.8
            }, {
              Symbol: 3,
              Count: 4,
              Line: 1,
              Mult: 6,
              Win: 5.4
            }, {
              Symbol: 4,
              Count: 4,
              Line: 1,
              Mult: 6,
              Win: 9
            }, {
              Symbol: 10,
              Count: 4,
              Line: 1,
              Mult: 6,
              Win: 45
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [18, 70.2],
          FreeRemainRound: 10,
          FreeTotalRound: 28,
          FreeNowRound: 18,
          AwardTypeFlag: 5,
          RoundWin: 88.2,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 1, 1, 5]
            }, {
              Col: [10, 2, 6, 4]
            }, {
              Col: [10, 10, 4, 6]
            }, {
              Col: [10, 6, 2, 7]
            }, {
              Col: [6, 0, 10, 4]
            }]
          }, {
            PSD: [{
              Col: [4, 4, 3, 2]
            }, {
              Col: [8, 0, 5, 3]
            }, {
              Col: [7, 7, 3, 1]
            }, {
              Col: [5, 1, 5, 0]
            }, {
              Col: [6, 7, 8, 6]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 3,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: .6
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, .6],
          FreeRemainRound: 9,
          FreeTotalRound: 28,
          FreeNowRound: 19,
          AwardTypeFlag: 5,
          RoundWin: .6,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [5, 5, 0, 10]
            }, {
              Col: [8, 7, 0, 1]
            }, {
              Col: [10, 10, 1, 3]
            }, {
              Col: [7, 6, 6, 9]
            }]
          }, {
            PSD: [{
              Col: [3, 10, 2, 3]
            }, {
              Col: [8, 1, 8, 4]
            }, {
              Col: [18, 2, 0, 10]
            }, {
              Col: [0, 5, 18, 1]
            }, {
              Col: [3, 16, 4, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 1,
              Win: 3
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [3, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 28,
          FreeNowRound: 20,
          AwardTypeFlag: 5,
          RoundWin: 3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 3, 9, 3]
            }, {
              Col: [1, 19, 5, 6]
            }, {
              Col: [3, 1, 1, 7]
            }, {
              Col: [0, 6, 7, 8]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }, {
            PSD: [{
              Col: [2, 3, 10, 2]
            }, {
              Col: [1, 6, 1, 18]
            }, {
              Col: [19, 2, 0, 10]
            }, {
              Col: [18, 5, 1, 0]
            }, {
              Col: [8, 8, 6, 6]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 3,
              Count: 3,
              Line: 2,
              Mult: 3,
              Win: 3.6
            }]
          }, {
            ADV: [{
              Symbol: 2,
              Count: 4,
              Line: 4,
              Mult: 7,
              Win: 25.2
            }, {
              Symbol: 3,
              Count: 4,
              Line: 1,
              Mult: 7,
              Win: 6.3
            }, {
              Symbol: 10,
              Count: 4,
              Line: 2,
              Mult: 7,
              Win: 105
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [3.6, 136.5],
          FreeRemainRound: 7,
          FreeTotalRound: 28,
          FreeNowRound: 21,
          AwardTypeFlag: 5,
          RoundWin: 140.1,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 10, 2]
            }, {
              Col: [5, 1, 5, 8]
            }, {
              Col: [0, 0, 7, 1]
            }, {
              Col: [8, 8, 0, 0]
            }, {
              Col: [7, 6, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [0, 10, 4, 6]
            }, {
              Col: [1, 3, 7, 7]
            }, {
              Col: [1, 9, 2, 10]
            }, {
              Col: [10, 5, 6, 4]
            }, {
              Col: [2, 10, 10, 4]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 28,
          FreeNowRound: 22,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 10, 10, 0]
            }, {
              Col: [7, 3, 3, 9]
            }, {
              Col: [10, 7, 3, 6]
            }, {
              Col: [8, 3, 10, 10]
            }, {
              Col: [10, 10, 4, 6]
            }]
          }, {
            PSD: [{
              Col: [9, 3, 2, 4]
            }, {
              Col: [3, 9, 3, 6]
            }, {
              Col: [10, 1, 2, 0]
            }, {
              Col: [5, 18, 1, 5]
            }, {
              Col: [8, 6, 5, 8]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 28,
          FreeNowRound: 23,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [9, 10, 4, 2]
            }, {
              Col: [18, 5, 6, 6]
            }, {
              Col: [7, 0, 5, 0]
            }, {
              Col: [1, 10, 10, 1]
            }, {
              Col: [8, 10, 10, 6]
            }]
          }, {
            PSD: [{
              Col: [2, 4, 16, 3]
            }, {
              Col: [0, 6, 16, 5]
            }, {
              Col: [7, 0, 18, 8]
            }, {
              Col: [18, 0, 6, 7]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 2,
              Win: 6
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [6, 0],
          FreeRemainRound: 9,
          FreeTotalRound: 33,
          FreeNowRound: 24,
          AddRounds: 5,
          AwardTypeFlag: 133,
          RoundWin: 6,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 2, 4]
            }, {
              Col: [6, 8, 1, 8]
            }, {
              Col: [0, 1, 0, 0]
            }, {
              Col: [3, 10, 10, 1]
            }, {
              Col: [10, 10, 8, 10]
            }]
          }, {
            PSD: [{
              Col: [4, 3, 2, 9]
            }, {
              Col: [1, 5, 1, 6]
            }, {
              Col: [3, 1, 1, 7]
            }, {
              Col: [1, 0, 19, 1]
            }, {
              Col: [8, 7, 6, 5]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 33,
          FreeNowRound: 25,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 16, 3, 2]
            }, {
              Col: [6, 16, 5, 1]
            }, {
              Col: [1, 3, 7, 1]
            }, {
              Col: [0, 6, 7, 8]
            }, {
              Col: [7, 8, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [8, 3, 4, 0]
            }, {
              Col: [5, 8, 9, 5]
            }, {
              Col: [0, 7, 9, 6]
            }, {
              Col: [0, 3, 1, 18]
            }, {
              Col: [1, 7, 8, 6]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 12,
          FreeTotalRound: 38,
          FreeNowRound: 26,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 4, 3]
            }, {
              Col: [5, 6, 1, 6]
            }, {
              Col: [18, 2, 0, 10]
            }, {
              Col: [1, 0, 0, 3]
            }, {
              Col: [10, 10, 8, 10]
            }]
          }, {
            PSD: [{
              Col: [4, 8, 0, 10]
            }, {
              Col: [5, 7, 3, 1]
            }, {
              Col: [10, 5, 2, 7]
            }, {
              Col: [9, 4, 10, 3]
            }, {
              Col: [7, 10, 9, 4]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 11,
          FreeTotalRound: 38,
          FreeNowRound: 27,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [6, 2, 4, 2]
            }, {
              Col: [1, 18, 5, 6]
            }, {
              Col: [6, 18, 0, 5]
            }, {
              Col: [1, 18, 0, 6]
            }, {
              Col: [1, 7, 8, 6]
            }]
          }, {
            PSD: [{
              Col: [6, 2, 4, 2]
            }, {
              Col: [5, 6, 1, 6]
            }, {
              Col: [18, 2, 0, 10]
            }, {
              Col: [8, 8, 0, 0]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 2,
              Count: 4,
              Line: 2,
              Mult: 6,
              Win: 10.8
            }, {
              Symbol: 4,
              Count: 4,
              Line: 1,
              Mult: 6,
              Win: 9
            }, {
              Symbol: 6,
              Count: 5,
              Line: 8,
              Mult: 6,
              Win: 216
            }]
          }, {
            ADV: [{
              Symbol: 6,
              Count: 3,
              Line: 2,
              Mult: 2,
              Win: 6
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [235.8, 6],
          FreeRemainRound: 10,
          FreeTotalRound: 38,
          FreeNowRound: 28,
          AwardTypeFlag: 5,
          RoundWin: 241.8,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 4, 4, 3]
            }, {
              Col: [7, 5, 5, 0]
            }, {
              Col: [5, 0, 2, 2]
            }, {
              Col: [10, 10, 1, 3]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }, {
            PSD: [{
              Col: [2, 9, 9, 10]
            }, {
              Col: [8, 10, 6, 6]
            }, {
              Col: [2, 1, 2, 6]
            }, {
              Col: [18, 0, 5, 5]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 1,
              Win: 3
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 3],
          FreeRemainRound: 9,
          FreeTotalRound: 38,
          FreeNowRound: 29,
          AwardTypeFlag: 5,
          RoundWin: 3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 4, 3, 10]
            }, {
              Col: [8, 1, 8, 4]
            }, {
              Col: [3, 3, 2, 0]
            }, {
              Col: [1, 5, 0, 5]
            }, {
              Col: [10, 10, 6, 8]
            }]
          }, {
            PSD: [{
              Col: [3, 2, 9, 4]
            }, {
              Col: [1, 6, 1, 7]
            }, {
              Col: [0, 5, 0, 2]
            }, {
              Col: [0, 5, 18, 1]
            }, {
              Col: [6, 7, 8, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 38,
          FreeNowRound: 30,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [0, 1, 3, 2]
            }, {
              Col: [5, 6, 1, 1]
            }, {
              Col: [7, 1, 7, 0]
            }, {
              Col: [4, 8, 3, 10]
            }, {
              Col: [7, 5, 9, 5]
            }]
          }, {
            PSD: [{
              Col: [10, 10, 10, 0]
            }, {
              Col: [5, 9, 9, 1]
            }, {
              Col: [10, 1, 9, 2]
            }, {
              Col: [6, 10, 8, 5]
            }, {
              Col: [1, 8, 2, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 1,
              Count: 3,
              Line: 2,
              Mult: 1,
              Win: .6
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [.6, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 38,
          FreeNowRound: 31,
          AwardTypeFlag: 5,
          RoundWin: .6,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 2, 4, 4]
            }, {
              Col: [0, 5, 3, 9]
            }, {
              Col: [2, 2, 1, 7]
            }, {
              Col: [1, 5, 0, 5]
            }, {
              Col: [10, 10, 6, 5]
            }]
          }, {
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [5, 16, 5, 1]
            }, {
              Col: [7, 1, 0, 18]
            }, {
              Col: [1, 16, 0, 0]
            }, {
              Col: [6, 7, 2, 6]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 11,
          FreeTotalRound: 43,
          FreeNowRound: 32,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 10, 4, 7]
            }, {
              Col: [5, 8, 9, 5]
            }, {
              Col: [7, 7, 0, 1]
            }, {
              Col: [5, 0, 5, 5]
            }, {
              Col: [6, 6, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [10, 3, 6, 2]
            }, {
              Col: [8, 4, 8, 0]
            }, {
              Col: [7, 1, 7, 0]
            }, {
              Col: [2, 19, 0, 5]
            }, {
              Col: [8, 8, 8, 6]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 10,
          FreeTotalRound: 43,
          FreeNowRound: 33,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [5, 3, 2, 10]
            }, {
              Col: [3, 9, 3, 6]
            }, {
              Col: [7, 0, 1, 0]
            }, {
              Col: [1, 4, 1, 3]
            }, {
              Col: [10, 10, 10, 8]
            }]
          }, {
            PSD: [{
              Col: [3, 9, 3, 2]
            }, {
              Col: [5, 1, 5, 1]
            }, {
              Col: [0, 0, 7, 1]
            }, {
              Col: [3, 10, 10, 1]
            }, {
              Col: [6, 7, 8, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 9,
          FreeTotalRound: 43,
          FreeNowRound: 34,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [9, 10, 4, 2]
            }, {
              Col: [5, 5, 6, 1]
            }, {
              Col: [1, 2, 6, 1]
            }, {
              Col: [8, 3, 10, 10]
            }, {
              Col: [5, 10, 10, 8]
            }]
          }, {
            PSD: [{
              Col: [4, 2, 9, 9]
            }, {
              Col: [1, 5, 6, 1]
            }, {
              Col: [10, 1, 7, 7]
            }, {
              Col: [3, 1, 18, 0]
            }, {
              Col: [7, 8, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 43,
          FreeNowRound: 35,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [1, 3, 2, 0]
            }, {
              Col: [1, 5, 8, 9]
            }, {
              Col: [6, 18, 0, 5]
            }, {
              Col: [18, 1, 5, 5]
            }, {
              Col: [7, 6, 5, 7]
            }]
          }, {
            PSD: [{
              Col: [2, 3, 9, 3]
            }, {
              Col: [7, 5, 1, 1]
            }, {
              Col: [16, 1, 7, 3]
            }, {
              Col: [0, 3, 1, 19]
            }, {
              Col: [8, 8, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 1,
              Count: 4,
              Line: 2,
              Mult: 4,
              Win: 4.8
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [4.8, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 43,
          FreeNowRound: 36,
          AwardTypeFlag: 5,
          RoundWin: 4.8,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 2, 3, 2]
            }, {
              Col: [16, 5, 1, 5]
            }, {
              Col: [0, 16, 1, 7]
            }, {
              Col: [0, 0, 1, 16]
            }, {
              Col: [8, 6, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [4, 16, 3, 2]
            }, {
              Col: [6, 6, 1, 5]
            }, {
              Col: [7, 9, 6, 7]
            }, {
              Col: [0, 8, 5, 1]
            }, {
              Col: [16, 4, 10, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 16,
              Count: 3,
              Line: 3,
              Mult: 1,
              Win: 3
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [3, 0],
          FreeRemainRound: 19,
          FreeTotalRound: 56,
          FreeNowRound: 37,
          AddRounds: 13,
          AwardTypeFlag: 132,
          RoundWin: 3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 2, 3, 9]
            }, {
              Col: [5, 1, 1, 5]
            }, {
              Col: [1, 1, 7, 1]
            }, {
              Col: [1, 3, 1, 0]
            }, {
              Col: [7, 8, 6, 6]
            }]
          }, {
            PSD: [{
              Col: [7, 3, 1, 1]
            }, {
              Col: [4, 8, 10, 0]
            }, {
              Col: [1, 6, 2, 10]
            }, {
              Col: [10, 0, 6, 3]
            }, {
              Col: [3, 9, 4, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 18,
          FreeTotalRound: 56,
          FreeNowRound: 38,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [16, 3, 2, 4]
            }, {
              Col: [2, 8, 10, 6]
            }, {
              Col: [18, 1, 1, 7]
            }, {
              Col: [0, 8, 0, 6]
            }, {
              Col: [6, 6, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [8, 3, 4, 0]
            }, {
              Col: [1, 6, 5, 1]
            }, {
              Col: [0, 2, 2, 1]
            }, {
              Col: [1, 3, 10, 10]
            }, {
              Col: [10, 8, 10, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 2,
              Count: 3,
              Line: 1,
              Mult: 2,
              Win: 1.2
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [1.2, 0],
          FreeRemainRound: 17,
          FreeTotalRound: 56,
          FreeNowRound: 39,
          AwardTypeFlag: 5,
          RoundWin: 1.2,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 4, 3, 10]
            }, {
              Col: [1, 18, 5, 6]
            }, {
              Col: [0, 0, 8, 7]
            }, {
              Col: [1, 0, 5, 18]
            }, {
              Col: [6, 6, 7, 2]
            }]
          }, {
            PSD: [{
              Col: [3, 4, 0, 1]
            }, {
              Col: [6, 5, 1, 5]
            }, {
              Col: [1, 0, 0, 7]
            }, {
              Col: [6, 0, 8, 8]
            }, {
              Col: [6, 6, 7, 8]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 2,
              Win: 6
            }]
          }, {
            ADV: [{
              Symbol: 1,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: .3
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [6, .3],
          FreeRemainRound: 16,
          FreeTotalRound: 56,
          FreeNowRound: 40,
          AwardTypeFlag: 5,
          RoundWin: 6.3,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 3, 2, 9]
            }, {
              Col: [10, 10, 2, 8]
            }, {
              Col: [7, 7, 3, 1]
            }, {
              Col: [0, 18, 1, 1]
            }, {
              Col: [7, 2, 6, 0]
            }]
          }, {
            PSD: [{
              Col: [2, 3, 9, 3]
            }, {
              Col: [6, 1, 5, 6]
            }, {
              Col: [1, 0, 19, 1]
            }, {
              Col: [19, 0, 5, 5]
            }, {
              Col: [10, 6, 8, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 15,
          FreeTotalRound: 56,
          FreeNowRound: 41,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 10, 4, 4]
            }, {
              Col: [5, 1, 1, 6]
            }, {
              Col: [10, 1, 7, 7]
            }, {
              Col: [10, 1, 4, 1]
            }, {
              Col: [10, 10, 10, 6]
            }]
          }, {
            PSD: [{
              Col: [10, 0, 6, 4]
            }, {
              Col: [9, 5, 10, 7]
            }, {
              Col: [1, 8, 3, 10]
            }, {
              Col: [7, 2, 2, 6]
            }, {
              Col: [5, 10, 7, 3]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: 6
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 6],
          FreeRemainRound: 14,
          FreeTotalRound: 56,
          FreeNowRound: 42,
          AwardTypeFlag: 5,
          RoundWin: 6,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 4, 3, 4]
            }, {
              Col: [5, 6, 6, 1]
            }, {
              Col: [7, 1, 2, 1]
            }, {
              Col: [9, 4, 8, 3]
            }, {
              Col: [10, 6, 8, 10]
            }]
          }, {
            PSD: [{
              Col: [9, 3, 2, 4]
            }, {
              Col: [5, 1, 5, 16]
            }, {
              Col: [2, 0, 4, 7]
            }, {
              Col: [1, 16, 0, 0]
            }, {
              Col: [8, 7, 6, 5]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 18,
          FreeTotalRound: 61,
          FreeNowRound: 43,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 2, 10]
            }, {
              Col: [9, 3, 6, 6]
            }, {
              Col: [2, 0, 1, 0]
            }, {
              Col: [5, 1, 0, 0]
            }, {
              Col: [10, 10, 6, 5]
            }]
          }, {
            PSD: [{
              Col: [10, 2, 4, 16]
            }, {
              Col: [6, 5, 1, 5]
            }, {
              Col: [0, 8, 7, 0]
            }, {
              Col: [1, 0, 19, 1]
            }, {
              Col: [8, 7, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 17,
          FreeTotalRound: 61,
          FreeNowRound: 44,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 9, 9, 10]
            }, {
              Col: [6, 1, 5, 6]
            }, {
              Col: [2, 0, 1, 0]
            }, {
              Col: [5, 5, 1, 5]
            }, {
              Col: [6, 5, 7, 6]
            }]
          }, {
            PSD: [{
              Col: [4, 3, 10, 2]
            }, {
              Col: [6, 1, 5, 6]
            }, {
              Col: [7, 0, 1, 0]
            }, {
              Col: [2, 19, 0, 5]
            }, {
              Col: [6, 5, 10, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 16,
          FreeTotalRound: 61,
          FreeNowRound: 45,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 3, 10, 2]
            }, {
              Col: [5, 6, 0, 6]
            }, {
              Col: [7, 0, 19, 8]
            }, {
              Col: [8, 0, 8, 0]
            }, {
              Col: [7, 8, 8, 8]
            }]
          }, {
            PSD: [{
              Col: [2, 2, 10, 4]
            }, {
              Col: [1, 5, 8, 9]
            }, {
              Col: [1, 2, 6, 1]
            }, {
              Col: [5, 5, 1, 5]
            }, {
              Col: [5, 9, 5, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 15,
          FreeTotalRound: 61,
          FreeNowRound: 46,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [9, 10, 4, 2]
            }, {
              Col: [0, 5, 3, 9]
            }, {
              Col: [2, 0, 10, 0]
            }, {
              Col: [7, 8, 0, 8]
            }, {
              Col: [10, 10, 10, 6]
            }]
          }, {
            PSD: [{
              Col: [3, 2, 4, 2]
            }, {
              Col: [3, 9, 3, 6]
            }, {
              Col: [7, 7, 0, 1]
            }, {
              Col: [0, 1, 1, 0]
            }, {
              Col: [8, 7, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 14,
          FreeTotalRound: 61,
          FreeNowRound: 47,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 9, 4, 10]
            }, {
              Col: [1, 5, 6, 1]
            }, {
              Col: [7, 0, 18, 8]
            }, {
              Col: [0, 5, 2, 18]
            }, {
              Col: [7, 7, 5, 9]
            }]
          }, {
            PSD: [{
              Col: [10, 4, 3, 4]
            }, {
              Col: [16, 5, 1, 5]
            }, {
              Col: [1, 7, 0, 0]
            }, {
              Col: [0, 8, 0, 6]
            }, {
              Col: [6, 6, 7, 8]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 13,
          FreeTotalRound: 61,
          FreeNowRound: 48,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 6, 8, 10]
            }, {
              Col: [7, 5, 9, 1]
            }, {
              Col: [8, 3, 10, 2]
            }, {
              Col: [2, 9, 1, 10]
            }, {
              Col: [1, 10, 3, 8]
            }]
          }, {
            PSD: [{
              Col: [0, 3, 2, 10]
            }, {
              Col: [0, 6, 16, 5]
            }, {
              Col: [7, 3, 3, 2]
            }, {
              Col: [8, 0, 6, 0]
            }, {
              Col: [5, 6, 7, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 12,
          FreeTotalRound: 61,
          FreeNowRound: 49,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [9, 5, 5, 7]
            }, {
              Col: [10, 4, 8, 0]
            }, {
              Col: [6, 10, 5, 2]
            }, {
              Col: [10, 2, 8, 1]
            }, {
              Col: [10, 5, 9, 1]
            }]
          }, {
            PSD: [{
              Col: [4, 3, 2, 9]
            }, {
              Col: [8, 9, 5, 1]
            }, {
              Col: [8, 7, 0, 1]
            }, {
              Col: [8, 0, 0, 1]
            }, {
              Col: [7, 7, 5, 9]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 11,
          FreeTotalRound: 61,
          FreeNowRound: 50,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 7, 5, 3]
            }, {
              Col: [5, 5, 0, 10]
            }, {
              Col: [7, 0, 1, 7]
            }, {
              Col: [0, 8, 0, 6]
            }, {
              Col: [6, 0, 7, 8]
            }]
          }, {
            PSD: [{
              Col: [3, 2, 4, 3]
            }, {
              Col: [5, 6, 1, 5]
            }, {
              Col: [1, 0, 7, 1]
            }, {
              Col: [1, 3, 1, 0]
            }, {
              Col: [8, 7, 6, 5]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 10,
          FreeTotalRound: 61,
          FreeNowRound: 51,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [1, 1, 5, 6]
            }, {
              Col: [1, 7, 1, 18]
            }, {
              Col: [0, 18, 1, 1]
            }, {
              Col: [10, 8, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [10, 4, 2, 4]
            }, {
              Col: [1, 5, 6, 3]
            }, {
              Col: [0, 1, 7, 0]
            }, {
              Col: [3, 10, 10, 1]
            }, {
              Col: [8, 8, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 9,
          FreeTotalRound: 61,
          FreeNowRound: 52,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 2, 4]
            }, {
              Col: [5, 1, 6, 1]
            }, {
              Col: [7, 3, 1, 1]
            }, {
              Col: [9, 4, 8, 3]
            }, {
              Col: [8, 3, 16, 4]
            }]
          }, {
            PSD: [{
              Col: [2, 9, 4, 10]
            }, {
              Col: [19, 5, 6, 6]
            }, {
              Col: [0, 1, 7, 0]
            }, {
              Col: [0, 5, 5, 1]
            }, {
              Col: [5, 7, 6, 6]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 3,
              Win: 9
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 9],
          FreeRemainRound: 8,
          FreeTotalRound: 61,
          FreeNowRound: 53,
          AwardTypeFlag: 5,
          RoundWin: 9,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 10, 0, 8]
            }, {
              Col: [5, 9, 1, 1]
            }, {
              Col: [7, 4, 10, 1]
            }, {
              Col: [8, 5, 0, 10]
            }, {
              Col: [8, 0, 6, 10]
            }]
          }, {
            PSD: [{
              Col: [3, 2, 10, 4]
            }, {
              Col: [1, 7, 5, 5]
            }, {
              Col: [1, 7, 0, 16]
            }, {
              Col: [1, 4, 1, 4]
            }, {
              Col: [8, 6, 5, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 61,
          FreeNowRound: 54,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [8, 2, 6, 10]
            }, {
              Col: [9, 1, 3, 7]
            }, {
              Col: [1, 8, 3, 10]
            }, {
              Col: [5, 10, 2, 8]
            }, {
              Col: [8, 2, 10, 3]
            }]
          }, {
            PSD: [{
              Col: [2, 4, 3, 2]
            }, {
              Col: [6, 1, 6, 1]
            }, {
              Col: [18, 1, 1, 7]
            }, {
              Col: [5, 5, 1, 0]
            }, {
              Col: [8, 10, 10, 6]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 61,
          FreeNowRound: 55,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [9, 4, 10, 3]
            }, {
              Col: [16, 5, 1, 5]
            }, {
              Col: [1, 7, 1, 18]
            }, {
              Col: [10, 10, 1, 4]
            }, {
              Col: [6, 7, 8, 8]
            }]
          }, {
            PSD: [{
              Col: [10, 2, 4, 16]
            }, {
              Col: [1, 1, 5, 1]
            }, {
              Col: [0, 7, 1, 2]
            }, {
              Col: [0, 16, 0, 0]
            }, {
              Col: [6, 7, 8, 10]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 10,
          FreeTotalRound: 66,
          FreeNowRound: 56,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [5, 6, 1, 1]
            }, {
              Col: [1, 7, 0, 0]
            }, {
              Col: [1, 5, 5, 1]
            }, {
              Col: [6, 7, 8, 7]
            }]
          }, {
            PSD: [{
              Col: [2, 10, 4, 7]
            }, {
              Col: [5, 1, 7, 5]
            }, {
              Col: [0, 0, 7, 1]
            }, {
              Col: [0, 0, 1, 0]
            }, {
              Col: [7, 7, 5, 9]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 7,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: 1.5
            }]
          }],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 1.5],
          FreeRemainRound: 9,
          FreeTotalRound: 66,
          FreeNowRound: 57,
          AwardTypeFlag: 5,
          RoundWin: 1.5,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 10, 2, 4]
            }, {
              Col: [1, 5, 16, 5]
            }, {
              Col: [1, 7, 7, 0]
            }, {
              Col: [1, 16, 0, 0]
            }, {
              Col: [6, 7, 8, 10]
            }]
          }, {
            PSD: [{
              Col: [4, 2, 3, 10]
            }, {
              Col: [6, 1, 5, 6]
            }, {
              Col: [1, 0, 0, 7]
            }, {
              Col: [0, 6, 7, 8]
            }, {
              Col: [6, 10, 10, 6]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 13,
          FreeTotalRound: 71,
          FreeNowRound: 58,
          AddRounds: 5,
          AwardTypeFlag: 132,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 9, 4, 2]
            }, {
              Col: [5, 1, 5, 1]
            }, {
              Col: [0, 10, 0, 10]
            }, {
              Col: [4, 1, 4, 3]
            }, {
              Col: [8, 6, 6, 7]
            }]
          }, {
            PSD: [{
              Col: [2, 3, 9, 3]
            }, {
              Col: [7, 5, 1, 1]
            }, {
              Col: [7, 0, 1, 7]
            }, {
              Col: [19, 5, 1, 0]
            }, {
              Col: [6, 1, 7, 8]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 12,
          FreeTotalRound: 71,
          FreeNowRound: 59,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 2, 3, 10]
            }, {
              Col: [5, 1, 5, 1]
            }, {
              Col: [7, 9, 6, 7]
            }, {
              Col: [0, 3, 1, 19]
            }, {
              Col: [10, 10, 6, 8]
            }]
          }, {
            PSD: [{
              Col: [4, 3, 2, 10]
            }, {
              Col: [6, 8, 1, 8]
            }, {
              Col: [2, 6, 1, 3]
            }, {
              Col: [18, 1, 5, 5]
            }, {
              Col: [8, 7, 6, 5]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 11,
          FreeTotalRound: 71,
          FreeNowRound: 60,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [0, 6, 4, 10]
            }, {
              Col: [7, 3, 1, 1]
            }, {
              Col: [6, 5, 10, 8]
            }, {
              Col: [9, 4, 10, 3]
            }, {
              Col: [10, 10, 4, 6]
            }]
          }, {
            PSD: [{
              Col: [3, 2, 9, 4]
            }, {
              Col: [5, 6, 1, 6]
            }, {
              Col: [7, 0, 0, 8]
            }, {
              Col: [8, 3, 10, 10]
            }, {
              Col: [6, 5, 8, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 10,
          FreeTotalRound: 71,
          FreeNowRound: 61,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [8, 3, 4, 0]
            }, {
              Col: [6, 5, 1, 1]
            }, {
              Col: [0, 1, 0, 1]
            }, {
              Col: [2, 18, 0, 5]
            }, {
              Col: [4, 10, 10, 10]
            }]
          }, {
            PSD: [{
              Col: [4, 7, 5, 3]
            }, {
              Col: [10, 10, 2, 8]
            }, {
              Col: [2, 0, 4, 7]
            }, {
              Col: [18, 0, 6, 7]
            }, {
              Col: [7, 6, 7, 8]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 9,
          FreeTotalRound: 71,
          FreeNowRound: 62,
          AwardTypeFlag: 4,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [6, 0, 10, 2]
            }, {
              Col: [10, 10, 5, 7]
            }, {
              Col: [10, 10, 3, 8]
            }, {
              Col: [5, 0, 9, 1]
            }, {
              Col: [3, 10, 5, 9]
            }]
          }, {
            PSD: [{
              Col: [3, 2, 9, 4]
            }, {
              Col: [1, 5, 5, 6]
            }, {
              Col: [0, 0, 8, 7]
            }, {
              Col: [0, 16, 0, 0]
            }, {
              Col: [5, 7, 6, 7]
            }]
          }],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 4,
              Mult: 1,
              Win: 24
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [24, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 71,
          FreeNowRound: 63,
          AwardTypeFlag: 5,
          RoundWin: 3,
          AddCrackLv: [0, 0, 0],
          MaxFlag: true
        }],
        Bet: 3,
        FreeTotalWin: 597,
        TotalWin: 600,
        RTP: .971,
        GameType: 1
      };
      _class2$2.FeaturesSpinAck = [{
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [10, 10, 10, 7]
            }, {
              Col: [2, 10, 10, 10]
            }, {
              Col: [10, 9, 10, 10]
            }, {
              Col: [10, 9, 10, 10]
            }, {
              Col: [3, 10, 10, 10]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 243,
              Mult: 1,
              Win: 2187
            }]
          }, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [2187, 0],
          AwardTypeFlag: 1,
          RoundWin: 2187,
          AddCrackLv: [0, 0, 0]
        }],
        Bet: 3,
        TotalWin: 2187
      }, {
        RoundQueue: [{
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 10, 14]
            }, {
              Col: [5, 5, 6, 1]
            }, {
              Col: [1, 15, 2, 0]
            }, {
              Col: [1, 4, 1, 4]
            }, {
              Col: [6, 7, 13, 5]
            }]
          }, {}],
          PlateNum: [{}, {}],
          AwardDataVec: [{}, {}],
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 0],
          FreeRemainRound: 8,
          FreeTotalRound: 8,
          AwardTypeFlag: 114,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [3, 2, 2, 10]
            }, {
              Col: [9, 3, 6, 6]
            }, {
              Col: [1, 7, 3, 3]
            }, {
              Col: [0, 5, 5, 1]
            }, {
              Col: [8, 10, 10, 8]
            }]
          }, {
            PSD: [{
              Col: [2, 10, 4, 4]
            }, {
              Col: [5, 5, 6, 1]
            }, {
              Col: [7, 10, 1, 0]
            }, {
              Col: [0, 0, 3, 1]
            }, {
              Col: [8, 6, 7, 8]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 1.5]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 1.5, 6, 0]
            }]
          }, {
            PND: [{
              Col: [0, 1.5, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 1.5, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 3,
              Count: 3,
              Line: 2,
              Mult: 1,
              Win: 1.2
            }]
          }, {}],
          Collected: 2,
          GoldPos: [{
            Col: [3]
          }, {
            Col: [9]
          }],
          CollectWin: [0, 0],
          LineWin: [1.2, 0],
          FreeRemainRound: 7,
          FreeTotalRound: 8,
          FreeNowRound: 1,
          AwardTypeFlag: 5,
          RoundWin: 1.2,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [4, 3, 10, 2]
            }, {
              Col: [5, 5, 0, 10]
            }, {
              Col: [1, 7, 7, 0]
            }, {
              Col: [0, 5, 17, 1]
            }, {
              Col: [7, 6, 5, 7]
            }]
          }, {
            PSD: [{
              Col: [4, 2, 4, 3]
            }, {
              Col: [5, 8, 9, 5]
            }, {
              Col: [1, 7, 0, 0]
            }, {
              Col: [0, 6, 0, 8]
            }, {
              Col: [8, 6, 7, 8]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 3, 0]
            }, {
              Col: [0, 0, 0, 1.5]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }, {
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 1,
              Win: 3
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 4.5
            }]
          }, {}],
          Collected: 4,
          GoldPos: [{
            Col: [2, 7]
          }, {}],
          CollectWin: [4.5, 0],
          LineWin: [3, 0],
          FreeRemainRound: 6,
          FreeTotalRound: 8,
          FreeNowRound: 2,
          AwardTypeFlag: 5,
          RoundWin: 7.5,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [0, 10, 6, 8]
            }, {
              Col: [10, 1, 7, 5]
            }, {
              Col: [0, 10, 1, 6]
            }, {
              Col: [7, 7, 3, 3]
            }, {
              Col: [10, 3, 11, 5]
            }]
          }, {
            PSD: [{
              Col: [2, 4, 2, 3]
            }, {
              Col: [11, 3, 6, 6]
            }, {
              Col: [10, 4, 7, 0]
            }, {
              Col: [1, 4, 3, 1]
            }, {
              Col: [10, 10, 6, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 3, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }, {
              Col: [0, 3, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [3, 0, 1.5, 0]
            }]
          }, {
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [15, 0, 0, 0]
            }, {
              Col: [15, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [6, 6, 0, 3]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: 6
            }]
          }, {}],
          Collected: 10,
          GoldLevel: 1,
          GoldPos: [{
            Col: [1, 4, 9, 16]
          }, {
            Col: [8, 17]
          }],
          CollectWin: [0, 0],
          LineWin: [6, 0],
          FreeRemainRound: 5,
          FreeTotalRound: 8,
          FreeNowRound: 3,
          AwardTypeFlag: 5,
          RoundWin: 6,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 4, 7, 5]
            }, {
              Col: [5, 1, 5, 11]
            }, {
              Col: [11, 6, 7, 0]
            }, {
              Col: [17, 1, 1, 0]
            }, {
              Col: [10, 10, 6, 11]
            }]
          }, {
            PSD: [{
              Col: [11, 3, 2, 4]
            }, {
              Col: [5, 5, 0, 10]
            }, {
              Col: [0, 2, 2, 1]
            }, {
              Col: [17, 0, 6, 7]
            }, {
              Col: [6, 6, 10, 6]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [6, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 60]
            }, {
              Col: [6, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [3, 1.5, 0, 3]
            }]
          }, {
            PND: [{
              Col: [1.5, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 15]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 0, 3, 0]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 3,
              Mult: 1,
              Win: 27
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 79.5
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 2,
              Line: 1,
              Mult: 1,
              Win: 3
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 19.5
            }]
          }],
          Collected: 13,
          GoldLevel: 2,
          GoldPos: [{
            Col: [0, 17]
          }, {
            Col: [7]
          }],
          CollectWin: [79.5, 19.5],
          LineWin: [27, 3],
          FreeRemainRound: 4,
          FreeTotalRound: 8,
          FreeNowRound: 4,
          AwardTypeFlag: 5,
          RoundWin: 129,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 10, 4, 3]
            }, {
              Col: [5, 5, 0, 10]
            }, {
              Col: [10, 0, 10, 1]
            }, {
              Col: [4, 1, 3, 10]
            }, {
              Col: [10, 11, 11, 6]
            }]
          }, {
            PSD: [{
              Col: [10, 2, 6, 4]
            }, {
              Col: [5, 10, 10, 1]
            }, {
              Col: [17, 10, 3, 6]
            }, {
              Col: [3, 6, 6, 4]
            }, {
              Col: [3, 10, 5, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 3, 0, 0]
            }, {
              Col: [0, 0, 0, 30]
            }, {
              Col: [3, 0, 1.5, 0]
            }, {
              Col: [0, 0, 0, 45]
            }, {
              Col: [6, 1.5, 1.5, 0]
            }]
          }, {
            PND: [{
              Col: [6, 0, 0, 0]
            }, {
              Col: [0, 6, 3, 0]
            }, {
              Col: [0, 6, 0, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 6, 0, 1.5]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 6,
              Mult: 1,
              Win: 54
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 3,
              Line: 4,
              Mult: 1,
              Win: 24
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 28.5
            }]
          }],
          Collected: 21,
          GoldLevel: 3,
          GoldPos: [{
            Col: [1, 7, 10, 15]
          }, {
            Col: [5, 6, 9, 17]
          }],
          CollectWin: [0, 28.5],
          LineWin: [54, 24],
          FreeRemainRound: 3,
          FreeTotalRound: 8,
          FreeNowRound: 5,
          AwardTypeFlag: 5,
          RoundWin: 106.5,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 4, 16, 3]
            }, {
              Col: [5, 11, 1, 10]
            }, {
              Col: [0, 4, 10, 0]
            }, {
              Col: [4, 1, 4, 3]
            }, {
              Col: [11, 10, 2, 11]
            }]
          }, {
            PSD: [{
              Col: [4, 11, 0, 10]
            }, {
              Col: [11, 5, 10, 10]
            }, {
              Col: [10, 5, 11, 0]
            }, {
              Col: [1, 11, 2, 11]
            }, {
              Col: [5, 10, 11, 10]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 3, 0, 1.5]
            }, {
              Col: [0, 0, 45, 0]
            }, {
              Col: [0, 0, 0, 0]
            }, {
              Col: [1.5, 3, 0, 3]
            }]
          }, {
            PND: [{
              Col: [0, 6, 0, 60]
            }, {
              Col: [15, 0, 15, 3]
            }, {
              Col: [3, 0, 6, 0]
            }, {
              Col: [0, 6, 0, 3]
            }, {
              Col: [0, 6, 3, 150]
            }]
          }],
          AwardDataVec: [{}, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 72,
              Mult: 1,
              Win: 648
            }]
          }],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 0],
          LineWin: [0, 648],
          FreeRemainRound: 2,
          FreeTotalRound: 8,
          FreeNowRound: 6,
          AwardTypeFlag: 5,
          RoundWin: 648,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [10, 4, 10, 2]
            }, {
              Col: [5, 1, 1, 11]
            }, {
              Col: [0, 10, 1, 11]
            }, {
              Col: [11, 0, 11, 0]
            }, {
              Col: [3, 16, 4, 10]
            }]
          }, {
            PSD: [{
              Col: [11, 2, 10, 4]
            }, {
              Col: [5, 11, 3, 1]
            }, {
              Col: [17, 10, 10, 5]
            }, {
              Col: [4, 3, 11, 10]
            }, {
              Col: [1, 10, 3, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [6, 0, 6, 0]
            }, {
              Col: [0, 0, 0, 3]
            }, {
              Col: [0, 1.5, 0, 6]
            }, {
              Col: [6, 0, 1.5, 0]
            }, {
              Col: [0, 0, 0, 60]
            }]
          }, {
            PND: [{
              Col: [3, 0, 3, 0]
            }, {
              Col: [0, 3, 0, 0]
            }, {
              Col: [0, 3, 1.5, 0]
            }, {
              Col: [0, 0, 6, 6]
            }, {
              Col: [0, 3, 0, 3]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 8,
              Mult: 1,
              Win: 72
            }]
          }, {
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 24,
              Mult: 1,
              Win: 216
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 31.5
            }]
          }],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [0, 31.5],
          LineWin: [72, 216],
          FreeRemainRound: 1,
          FreeTotalRound: 8,
          FreeNowRound: 7,
          AwardTypeFlag: 5,
          RoundWin: 319.5,
          AddCrackLv: [0, 0, 0]
        }, {
          PlateSymbol: [{
            PSD: [{
              Col: [2, 11, 4, 10]
            }, {
              Col: [1, 10, 5, 1]
            }, {
              Col: [11, 1, 0, 17]
            }, {
              Col: [10, 11, 11, 0]
            }, {
              Col: [11, 11, 5, 11]
            }]
          }, {
            PSD: [{
              Col: [2, 4, 4, 3]
            }, {
              Col: [5, 11, 1, 17]
            }, {
              Col: [3, 11, 10, 11]
            }, {
              Col: [0, 1, 10, 0]
            }, {
              Col: [11, 11, 11, 11]
            }]
          }],
          PlateNum: [{
            PND: [{
              Col: [0, 15, 0, 3]
            }, {
              Col: [0, 3, 0, 0]
            }, {
              Col: [6, 0, 0, 0]
            }, {
              Col: [6, 3, 3, 0]
            }, {
              Col: [3, 6, 0, 3]
            }]
          }, {
            PND: [{
              Col: [0, 0, 0, 0]
            }, {
              Col: [0, 3, 0, 0]
            }, {
              Col: [0, 3, 1.5, 15]
            }, {
              Col: [0, 0, 1.5, 0]
            }, {
              Col: [1.5, 3, 1.5, 1.5]
            }]
          }],
          AwardDataVec: [{
            ADV: [{
              Symbol: 10,
              Count: 5,
              Line: 36,
              Mult: 1,
              Win: 324
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 51
            }]
          }, {
            ADV: [{
              Symbol: 3,
              Count: 3,
              Line: 1,
              Mult: 1,
              Win: .6
            }, {
              Symbol: 17,
              Count: 1,
              Line: 1,
              Mult: 1,
              Win: 31.5
            }]
          }],
          Collected: 21,
          GoldLevel: 4,
          GoldPos: [{}, {}],
          CollectWin: [51, 31.5],
          LineWin: [324, .6],
          FreeTotalRound: 8,
          FreeNowRound: 8,
          AwardTypeFlag: 13,
          RoundWin: 407.1,
          AddCrackLv: [0, 0, 0]
        }],
        Bet: 3,
        FreeTotalWin: 1624.8,
        TotalWin: 1624.8,
        GameType: 7
      }];
      var GameDefine = _dec$2(_class$2 = _class2$2) || _class$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "eb033pmYDhAjadYFiwbi8gp", "SpineKit", undefined);
      var SpineKit = function () {
        function e() {}
        e.ForceCancel = function (e, t) {
          var o;
          var i;
          var n;
          if (!(null == (o = this.m_cancelCbs) || null == (i = (n = o[e])[t]))) {
            i.call(n);
          }
        };
        e.PlayAnimation = function (e, t, o, i, n, r) {
          var a = this;
          if (undefined === o) {
            o = false;
          }
          if (undefined === i) {
            i = 0;
          }
          if (undefined === r) {
            r = true;
          }
          return new Promise(function (s) {
            a.m_cancelCbs[e.name] = {};
            a.m_cancelCbs[e.name][t] = function () {
              s(true);
            };
            var l = true;
            var c = e.getState();
            if (c) {
              var u = c.expandToIndex(i);
              if (u) {
                var d = u.animation.name + "." + t;
                l = undefined === c.data.animationToMixTime[d];
              }
            }
            if (l) {
              e.clearTrack(i);
              if (r) {
                e.setToSetupPose();
              }
            }
            var p = e.setAnimation(i, t, o);
            if (p) {
              e.setTrackEventListener(p, function (e, t) {
                if (p && p.animation.name == e.animation.name) {
                  if (!(null == n)) {
                    n(t.data.name);
                  }
                }
              });
              e.setTrackCompleteListener(p, function (o) {
                if (p && p.animation.name == o.animation.name) {
                  e.setTrackCompleteListener(p, function () {});
                  e.setTrackInterruptListener(p, function () {});
                  if (a.m_cancelCbs[e.name] && a.m_cancelCbs[e.name][t]) {
                    a.m_cancelCbs[e.name][t] = null;
                  }
                  s(false);
                }
              });
              e.setTrackInterruptListener(p, function (o) {
                if (p && p.animation.name == o.animation.name) {
                  e.setTrackCompleteListener(p, function () {});
                  e.setTrackInterruptListener(p, function () {});
                  if (a.m_cancelCbs[e.name] && a.m_cancelCbs[e.name][t]) {
                    a.m_cancelCbs[e.name][t] = null;
                  }
                  s(true);
                }
              });
            } else {
              e.setCompleteListener(function () {
                e.setCompleteListener(null);
                e.setInterruptListener(null);
                if (a.m_cancelCbs[e.name] && a.m_cancelCbs[e.name][t]) {
                  a.m_cancelCbs[e.name][t] = null;
                }
                s(false);
              });
              e.setInterruptListener(function () {
                e.setCompleteListener(null);
                e.setInterruptListener(null);
                if (a.m_cancelCbs[e.name] && a.m_cancelCbs[e.name][t]) {
                  a.m_cancelCbs[e.name][t] = null;
                }
                s(true);
              });
            }
          });
        };
        return e;
      }();
      var _dec$3;
      var _class$3;
      SpineKit.m_cancelCbs = {};
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "de66eINu+tOtbXFXymubOlK", "BarrelSpine", undefined);
      var ccclass$3 = _decorator.ccclass;
      _dec$3 = ccclass$3("BarrelSpine");
      var BarrelSpine = _dec$3(_class$3 = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          (t = e.call.apply(e, [this].concat(i)) || this).MAX_LEVEL = 4;
          t.m_level = 0;
          t.m_maxLevelEffect = null;
          t.START_ANIM_NAME = "Start";
          t.WIN_ANIM_NAME = "Win";
          t.WIN_IDLE_ANIM_NAME = "Win_ldle";
          t.ENTER_FG_ANIM = "FG_Prefix";
          t.m_addLevel = 0;
          t.LEVLE_UP_ANIM = "Lv_up";
          t.LEVEL_UP_UP_ANIM = "Lv_upup";
          t.LEVEL_UP_LOOP_ANIM = "FG_Hint";
          t.T1_Track_ANIM = "T1_Track";
          t.m_levelUpEffectNode = null;
          t.m_levelUpEffectSpine = null;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.SetLevel = function (e) {
          this.m_addLevel = e - this.m_level;
          if (this.m_level != e) {
            this.m_level = e;
            this.UpdateMaxLevelEffectActive();
          }
        };
        o.IsMaxLevel = function () {
          return this.m_level == this.MAX_LEVEL;
        };
        o.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.START_ANIM_NAME, false);
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
        o.PlayIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    t = "Lv" + (this.m_level + 1);
                    SpineKit.PlayAnimation(this.m_spine, t, true);
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
        o.PlayHit = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = "Lv" + (this.m_level + 1) + "_Hit";
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t, false);
                  case 3:
                    this.PlayIdle();
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
        o.PlayWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetLevel(0);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.WIN_ANIM_NAME, false);
                  case 3:
                    this.PlayWinIdle();
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
        o.PlayWinIdle = function () {
          SpineKit.PlayAnimation(this.m_spine, this.WIN_IDLE_ANIM_NAME, true);
        };
        o.PlayEnterFG = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, this.ENTER_FG_ANIM, false);
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
        o.UpdateMaxLevelEffectActive = function () {
          var e = this.m_level == this.MAX_LEVEL;
          if (e && null == this.m_maxLevelEffect) {
            this.m_maxLevelEffect = this.CreatetMaxLevelEffectSpine();
          } else if (!(e || null == this.m_maxLevelEffect)) {
            NodeObjPool.GetInstance().ReturnNode(GameDefine.BARREL_HINT, this.m_maxLevelEffect);
            this.m_maxLevelEffect = null;
          }
        };
        o.CreatetMaxLevelEffectSpine = function () {
          var e = NodeObjPool.GetInstance().GetNode(GameDefine.BARREL_HINT);
          e.setParent(this.node);
          node.SetOrderedZindex(e, 0);
          e.setPosition(Vec3.ZERO);
          return e;
        };
        o.PlayLevelUpLoopEffect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.m_levelUpEffectNode) {
                      this.CreateLevelUpEffectSpine();
                    }
                    SpineKit.PlayAnimation(this.m_levelUpEffectSpine, this.LEVEL_UP_LOOP_ANIM, true);
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
        o.PlayLevelUpEffect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.m_levelUpEffectNode) {
                      this.CreateLevelUpEffectSpine();
                    }
                    SpineKit.PlayAnimation(this.m_spine, this.T1_Track_ANIM, false, 1);
                    if (1 != this.m_addLevel) {
                      e.next = 7;
                      break;
                    }
                    e.next = 5;
                    return SpineKit.PlayAnimation(this.m_levelUpEffectSpine, this.LEVLE_UP_ANIM);
                  case 5:
                    e.next = 9;
                    break;
                  case 7:
                    e.next = 9;
                    return SpineKit.PlayAnimation(this.m_levelUpEffectSpine, this.LEVEL_UP_UP_ANIM);
                  case 9:
                    this.StopLevelUpLoopEffect();
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
        o.StopLevelUpLoopEffect = function () {
          if (this.m_levelUpEffectNode) {
            this.m_levelUpEffectSpine.clearTrack(0);
            this.m_levelUpEffectSpine.setToSetupPose();
            NodeObjPool.GetInstance().ReturnNode(GameDefine.BARREL_LEVEL_UP_EFFECT, this.m_levelUpEffectNode);
            this.m_levelUpEffectNode = null;
            this.m_levelUpEffectSpine = null;
          }
        };
        o.CreateLevelUpEffectSpine = function () {
          this.m_levelUpEffectNode = NodeObjPool.GetInstance().GetNode(GameDefine.BARREL_LEVEL_UP_EFFECT);
          this.m_levelUpEffectNode.setParent(this.node);
          node.SetOrderedZindex(this.m_levelUpEffectNode, 1);
          this.m_levelUpEffectNode.setPosition(Vec3.ZERO);
          this.m_levelUpEffectSpine = this.m_levelUpEffectNode.getComponentInChildren(sp.Skeleton);
        };
        return t;
      }(BaseSpine)) || _class$3;
      var _dec$4;
      var _dec2$1;
      var _dec3;
      var _dec4;
      var _class2$3;
      var _descriptor$1;
      var _descriptor2;
      var _descriptor3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e1de2RX/fFIcIppBGQVDHpJ", "BarrelMgr", undefined);
      var ccclass$4 = _decorator.ccclass;
      var property$1 = _decorator.property;
      _dec$4 = ccclass$4("BarrelMgr");
      _dec2$1 = property$1({
        type: BarrelSpine
      });
      _dec3 = property$1({
        type: Prefab,
        tooltip: "桶子聽牌"
      });
      _dec4 = property$1({
        type: Prefab,
        tooltip: "桶子升級特效"
      });
      _class2$3 = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_barrelSpine", _descriptor$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_barrelHintPrefab", _descriptor2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_barrelLevelUpEffectPrefab", _descriptor3, _assertThisInitialized(t));
          t.m_needPlayGameType = [false, false, false];
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.Init = function () {
          NodeObjPool.GetInstance().SetPrefabData(GameDefine.BARREL_HINT, this.m_barrelHintPrefab);
          NodeObjPool.GetInstance().SetPrefabData(GameDefine.BARREL_LEVEL_UP_EFFECT, this.m_barrelLevelUpEffectPrefab);
          for (var e = 0; e < this.m_barrelSpine.length; e++) {
            this.m_barrelSpine[e].node.active = false;
          }
        };
        o.SetCurrentLevel = function (e, t) {
          this.m_barrelSpine[e].SetLevel(t);
        };
        o.GetIsMaxLevel = function (e) {
          return this.m_barrelSpine[e].IsMaxLevel();
        };
        o.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = [];
                    for (o = 0; o < this.m_barrelSpine.length; o++) {
                      t.push(this.m_barrelSpine[o].PlayStart());
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
        o.PlayIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_barrelSpine[t].PlayIdle();
                  case 1:
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
        o.PlayHit = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_barrelSpine[t].PlayHit();
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
        o.PlayWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_barrelSpine[t].PlayWin();
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
        o.PlayEnterFG = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_barrelSpine[t].PlayEnterFG();
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
        o.SetFGGameType = function (e) {
          this.m_needPlayGameType = e;
        };
        o.PlayLevelUpEffect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_barrelSpine[t].PlayLevelUpEffect();
                    e.next = 3;
                    return node$1.Wait(this, .5);
                  case 3:
                    this.m_barrelSpine[t].PlayIdle();
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
        o.PlayLevelUpLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_barrelSpine[t].PlayLevelUpLoopEffect();
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
        o.StopLevelUpLoopEffect = function (e) {
          this.m_barrelSpine[e].StopLevelUpLoopEffect();
        };
        o.HideAllBarrel = function () {
          for (var e = 0; e < this.m_barrelSpine.length; e++) {
            this.m_barrelSpine[e].SetNodeActivity(false);
          }
        };
        return t;
      }(Component);
      _descriptor$1 = _applyDecoratedDescriptor(_class2$3.prototype, "m_barrelSpine", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2 = _applyDecoratedDescriptor(_class2$3.prototype, "m_barrelHintPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3 = _applyDecoratedDescriptor(_class2$3.prototype, "m_barrelLevelUpEffectPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var SwitchOffKeyDefine;
      var _dec$5;
      var _dec2$2;
      var _dec3$1;
      var _class2$4;
      var _descriptor$2;
      var _descriptor2$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1d854+nhA1JgLXZLaNHz9eU", "LicenseSetting", undefined);
      (function (e) {
        e[e.ShopingMall = 1] = "ShopingMall";
        e[e.ShowAutoSetting = 16] = "ShowAutoSetting";
        e[e.NoSoundUnder1 = 17] = "NoSoundUnder1";
        e[e.NoQuickSpin = 18] = "NoQuickSpin";
        e[e.CloseManual = 39] = "CloseManual";
        e[e.CloseExtraBet = 61] = "CloseExtraBet";
      })(SwitchOffKeyDefine || (SwitchOffKeyDefine = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d4485HFTh1KhaUz2swNg5iL", "BottomBarMgr", undefined);
      var ccclass$5 = _decorator.ccclass;
      var property$2 = _decorator.property;
      _dec$5 = ccclass$5("BottomBarMgr");
      _dec2$2 = property$2({
        type: Button,
        tooltip: "盤面停止按鈕"
      });
      _dec3$1 = property$2({
        type: Button,
        tooltip: "上盤面停止按鈕"
      });
      _class2$4 = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_plateSpinBtn", _descriptor$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_plateSpinBtn_Double", _descriptor2$1, _assertThisInitialized(t));
          t.m_spinClickEvent = 0;
          t.m_isFirstPlateSpin = true;
          t.m_gameView = null;
          t.m_autoplayInfos = null;
          t.m_canSpaceStop = false;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.GetCanPlateStop = function () {
          return this.m_canSpaceStop;
        };
        o.SetCanPlateStop = function (e) {
          this.m_canSpaceStop = e;
        };
        o.GetCanSpaceStop = function () {
          return this.m_canSpaceStop;
        };
        o.SetCanSpaceStop = function (e) {
          this.m_canSpaceStop = e;
        };
        o.init = function (e) {
          this.m_gameView = e;
          this.initKeyBoardEvent();
        };
        o.initKeyBoardEvent = function () {
          var e = this;
          if (!node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin)) {
            input.on(Input.EventType.KEY_DOWN, function (t) {
              switch (t.keyCode) {
                case KeyCode.SPACE:
                  node$2.SendSpinLog();
                  if (node$5 && !node$5.IsShowBackpack()) {
                    if (node$2.BtnState == SlotBottomBarState.IDLE) {
                      e.ClickSpin();
                    } else {
                      e.ClickStop();
                    }
                  }
              }
            });
          }
        };
        o.SettingBottomBar = function (e) {
          var t = this;
          node$2.VerString = "v_" + node$1.VERSION + "_" + GameDefine.Ver;
          node$2.IsSendBetChange = true;
          node$2.SetTouchEvet(function (e) {
            t.BarTouchCb(e);
          });
          node$2.SetWinValue(0);
          node$2.SetSpinState(SlotBottomBarState.IDLE);
          node$2.SetAutoplayConfirmCb(function (e) {
            t.m_autoplayInfos = JSON.parse(e);
            if (node$3.Current() === CommonState.IDLE) {
              node$4.Dispatch(CommonEventName.SpinReqNotify);
            }
            node$2.SetSpinState(SlotBottomBarState.CLICK_AUTOPLAY);
            t.m_gameView.BuyBonus.Hide();
          });
          node$2.ShowPlayReady(e, function () {
            return node$3.Current() !== GameDefine.GAME_STATE.WAIT_READY || (node$3.NextState(GameDefine.GAME_STATE.SHOW_INTRO), false);
          }, function () {
            if (node$3.Current() === GameDefine.GAME_STATE.WAIT_READY) {
              if (node$5.IsFeaturesDemo) {
                t.m_canSpaceStop = true;
                node$3.NextState(GameDefine.GAME_STATE.FEATURE_SHOW);
              } else {
                node$3.NextState(GameDefine.GAME_STATE.SHOW_INTRO);
              }
            }
          });
          node$2.SetGameLogo([this.m_gameView.Logo.node]);
          node$2.SetFollowNode(this.node);
          node.CloseIntroLoading.push(function () {
            if (node$6.HasUnshow) {
              node$3.NextState(GameDefine.GAME_STATE.UNSHOW_PREPARE);
            }
          });
          this.m_plateSpinBtn.node.on(Node.EventType.TOUCH_END, function (e) {
            t.BarTouchCb(e);
          });
          this.m_plateSpinBtn_Double.node.on(Node.EventType.TOUCH_END, function (e) {
            t.BarTouchCb(e);
          });
        };
        o.BarTouchCb = function (e) {
          var t = this;
          switch (e.target.name) {
            case this.m_plateSpinBtn.node.name:
            case this.m_plateSpinBtn_Double.node.name:
              if (node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin)) {
                break;
              }
              if (node$3.Current() !== CommonState.IDLE || node$2.IsAutoSpin) {
                this.ClickStop();
              } else if (this.m_isFirstPlateSpin) {
                this.m_isFirstPlateSpin = false;
                var o = {
                  contextKey: node$1.StringKey.MSGBOX_TOUCHPANEL_SPIN,
                  titleKey: node$1.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                  showCancelBtn: false,
                  showConfirmBtn: true,
                  showCloseBtn: true,
                  confirmCB: function () {
                    t.m_spinClickEvent = node$1.BTN_CLICK_EVENT.CLICK_PLATE;
                    t.ClickSpin();
                  }
                };
                node$7.PushMessageBoxSetting(o);
              } else {
                this.m_spinClickEvent = node$1.BTN_CLICK_EVENT.CLICK_PLATE;
                this.ClickSpin();
              }
              break;
            case BottomBar_UIName.BTN_SPIN:
              this.m_spinClickEvent = node$1.BTN_CLICK_EVENT.SPIN;
              this.ClickSpin();
              break;
            case BottomBar_UIName.BTN_SPINSTOP:
              this.ClickStop();
              break;
            case BottomBar_UIName.BTN_AUTOPLAY:
              if (!node.CheckSwitchOff(SwitchOffKeyDefine.ShowAutoSetting)) {
                node$2.SetSpinState(SlotBottomBarState.CLICK_AUTOPLAY);
                break;
              }
            case BottomBar_UIName.BTN_WISEAUTOPLAY:
              if (node$2.IsAutoSpin) {
                node$2.ShowAutoPlayState(false);
                node$2.SetSpinState(SlotBottomBarState.CLICK_CANCEL);
              }
              node$2.ShowAutoplaySettingView(node.strip(node$2.GetChips()));
              break;
            case BottomBar_UIName.BTN_AUTOSTOP_C:
            case BottomBar_UIName.BTN_AUTOSTOP:
              node$2.ShowAutoPlayState(false);
              node$2.SetSpinState(SlotBottomBarState.CLICK_CANCEL);
          }
        };
        o.ClickSpin = function () {
          if (node$3.Current() == CommonState.IDLE) {
            if (node$2.GetChips() >= this.m_gameView.BuyBonus.GetBuyBonusBet() || this.m_gameView.IsFreeGame || node$2.IsFreeSpin) {
              this.m_gameView.BuyBonus.Hide();
              node$2.SetSpinState(SlotBottomBarState.CLICK_SPIN);
              node$4.Dispatch(CommonEventName.SpinReqNotify);
            } else {
              this.m_gameView.BuyBonus.CleanInfo();
              var e = node$2.GetBetList();
              if (node$2.GetChips() < node.strip(e[0])) {
                node$7.ShowMessageBox(node$1.StringKey.MSGBOX_MONEY_NOT_ENOUGH);
              } else {
                node$7.ShowMessageBox(node$1.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET);
              }
            }
          }
        };
        o.ClickStop = function () {
          if (!node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin)) {
            if (node$3.Current() != CommonState.SPIN || GameDefine.IsPreviewPlaying) {
              if (node$3.Current() == GameDefine.GAME_STATE.AWARD && this.m_gameView.WinShowMgr.GetCanSkip()) {
                if (node$2.IsAutoSpin) {
                  node$2.SetSpinState(SlotBottomBarState.CLICK_AUTOPLAY_HARDSTOP);
                } else {
                  node$2.SetSpinState(SlotBottomBarState.CLICK_STOP);
                }
                this.m_gameView.WinShowMgr.Skip();
              }
            } else {
              if (node$2.IsAutoSpin) {
                if (!node$2.IsHardStop) {
                  node$2.SetSpinState(SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY);
                }
              } else {
                node$2.SetSpinState(SlotBottomBarState.CLICK_STOP);
              }
              this.m_gameView.SlotReels.SetIsClickStopBtn();
              if (this.m_gameView.RoundDataProvider.GetIsShowDoublePlate()) {
                this.m_gameView.SlotReels_Double.SetIsClickStopBtn();
              }
            }
          }
        };
        _createClass(t, [{
          key: "AutoplayInfos",
          get: function () {
            return this.m_autoplayInfos;
          }
        }]);
        return t;
      }(Component);
      _descriptor$2 = _applyDecoratedDescriptor(_class2$4.prototype, "m_plateSpinBtn", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$1 = _applyDecoratedDescriptor(_class2$4.prototype, "m_plateSpinBtn_Double", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$6;
      var _dec2$3;
      var _dec3$2;
      var _dec4$1;
      var _dec5;
      var _class2$5;
      var _descriptor$3;
      var _descriptor2$2;
      var _descriptor3$1;
      var _descriptor4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2fcff6MKDVGFZeMiNwJ8XdH", "BuyBonusCell", undefined);
      var ccclass$6 = _decorator.ccclass;
      var property$3 = _decorator.property;
      _dec$6 = ccclass$6("BuyBonusCell");
      _dec2$3 = property$3({
        type: Sprite,
        tooltip: "購買文字"
      });
      _dec3$2 = property$3({
        type: Sprite,
        tooltip: "項目標題"
      });
      _dec4$1 = property$3({
        type: CCString,
        tooltip: "標題圖片名稱"
      });
      _dec5 = property$3({
        type: Label,
        tooltip: "金額"
      });
      _class2$5 = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_buyHintSprite", _descriptor$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titleSprite", _descriptor2$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titlePicName", _descriptor3$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_priceLabel", _descriptor4, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.start = function () {};
        o.SetTxt = function () {
          var e = node$8.GetGameAtlas();
          this.m_buyHintSprite.spriteFrame = e.getSpriteFrame("Txt_Buy_Feature_Buy");
          this.m_titleSprite.spriteFrame = e.getSpriteFrame(this.m_titlePicName);
        };
        o.SetPrice = function (e) {
          this.m_priceLabel.string = e;
        };
        return t;
      }(Component);
      _descriptor$3 = _applyDecoratedDescriptor(_class2$5.prototype, "m_buyHintSprite", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$2 = _applyDecoratedDescriptor(_class2$5.prototype, "m_titleSprite", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$1 = _applyDecoratedDescriptor(_class2$5.prototype, "m_titlePicName", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      });
      _descriptor4 = _applyDecoratedDescriptor(_class2$5.prototype, "m_priceLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "22634/ooSRFbLeSP9IM51I9", "BuyBonus", undefined);
      var _dec$8;
      var _dec2$5;
      var _class$8;
      var _class2$7;
      var _descriptor$5;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a3a0d1lfVBFroYF4rf6gHTe", "SymbolSpine", undefined);
      var ccclass$8 = _decorator.ccclass;
      var property$5 = _decorator.property;
      _dec$8 = ccclass$8("SymbolSpine");
      _dec2$5 = property$5({
        type: Label
      });
      _class2$7 = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_cashLabel", _descriptor$5, _assertThisInitialized(t));
          t.COLLECT_START_ANIM = "Collect_Start";
          t.COLLECT_ANIM = "Collect";
          t.COLLECT_END_ANIM = "Collect_End";
          t.WIN_ANIM = "Win";
          t.Fly_ANIM = "Fly";
          t.STOP_ANIM = "Stop";
          t.CHANGE_ANIM = "Change";
          t.m_symbolIdx = -1;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.GetSpineName = function () {
          return "Symbol_" + this.m_symbolIdx.toString().padStart(2, "0");
        };
        o.SetSpineIdx = function (e) {
          this.m_symbolIdx = e;
        };
        o.GetSpineIdx = function () {
          return this.m_symbolIdx;
        };
        o.PlayWinShow = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    if (t == SymbolType.BUFFALO) {
                      this.m_spine.setSkin("Normal");
                    } else if (t == SymbolType.GOLD_BUFFALO_CHANGE) {
                      this.m_spine.setSkin("Plus");
                    }
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, this.WIN_ANIM);
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
        o.PlayWildMuiltiple = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = this.WIN_ANIM;
                    if (this.m_symbolIdx == SymbolType.WILD_x2) {
                      t += "_X2";
                    } else if (this.m_symbolIdx == SymbolType.WILD_x3) {
                      t += "_X3";
                    }
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, t);
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
        o.PlayFly = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.Fly_ANIM);
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
        o.PlayReelStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return SpineKit.PlayAnimation(this.m_spine, this.STOP_ANIM);
                  case 2:
                    if (t) {
                      t();
                    }
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
        o.PlayChange = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.CHANGE_ANIM);
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
        o.PlayGoldFadeOut = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    SpineKit.PlayAnimation(this.m_spine, this.CHANGE_ANIM);
                    o = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(t);
                    tween(this.node).delay(.017).parallel(tween().to(.35, {
                      position: o
                    }, {
                      easing: easing.sineIn
                    }), tween().to(.35, {
                      scale: v3(.7, .7, .7)
                    }, {
                      easing: easing.sineIn
                    })).start();
                    e.next = 6;
                    return node$1.Wait(this, .4);
                  case 6:
                    tween(this.node).to(0, {
                      scale: v3(1, 1, 1)
                    }).start();
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
        o.PlayCollectStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.COLLECT_START_ANIM);
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
        o.PlayCollect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.COLLECT_ANIM);
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
        o.PlayCollectEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.COLLECT_END_ANIM);
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
        o.SetCashValue = function (e) {
          if (this.m_cashLabel) {
            this.m_cashLabel.string = 0 == e ? "" : node.FormatNumberThousands(e, node.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
          }
        };
        return t;
      }(BaseSpine);
      _descriptor$5 = _applyDecoratedDescriptor(_class2$7.prototype, "m_cashLabel", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var SymbolSpine = _dec$8(_class$8 = _class2$7) || _class$8;
      var _dec$9;
      var _class$9;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c9dc9xKcyxIKoSh5Jykhe2D", "NodeThrowTool", undefined);
      var ccclass$9 = _decorator.ccclass;
      _dec$9 = ccclass$9("NodeThrowTool");
      var NodeThrowTool = _dec$9(_class$9 = function () {
        function e() {
          this.m_peakHeight = 400;
          this.m_FPS = 0;
          this.m_FPS = game.frameRate;
        }
        e.prototype.Throw = function (e, t, o) {
          var i = this;
          return new Promise(function (n) {
            var r = t.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0));
            var a = e.parent.getComponent(UITransform).convertToNodeSpaceAR(r);
            var s = e.position.clone();
            var l = 1 / i.m_FPS;
            var c = 0;
            var u = node.divide(o, l);
            tween(i).repeat(u, tween().call(function () {
              var t = (c += l) / o;
              var n = s.x + t * (a.x - s.x);
              var r = s.y + t * (a.y - s.y) + i.m_peakHeight * Math.sin(t * Math.PI);
              e.position = new Vec3(n, r, s.z);
            }).delay(l)).call(function () {
              e.position = a;
              n();
            }).start();
          });
        };
        return e;
      }()) || _class$9;
      var _dec$a;
      var _dec2$6;
      var _class$a;
      var _class2$8;
      var _descriptor$6;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f5e94woovdI/Lo7nccmc6zq", "CashFrameSpine", undefined);
      var ccclass$a = _decorator.ccclass;
      var property$6 = _decorator.property;
      _dec$a = ccclass$a("CashFrameSpine");
      _dec2$6 = property$6({
        type: Label
      });
      _class2$8 = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_cashLabel", _descriptor$6, _assertThisInitialized(t));
          t.STAY_ANIM = "Stay";
          t.COLLECT_ANIM = "Collect";
          t.COLLECT_END_ANIM = "Stay_End";
          t.m_cashValue = 0;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.SetCashValue = function (e) {
          this.m_cashValue = e;
          this.m_cashLabel.string = node.FormatNumberThousands(e, node.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
        };
        o.GetCashValue = function () {
          return this.m_cashValue;
        };
        o.PlayStayAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.STAY_ANIM);
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
        o.PlayCollect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.COLLECT_ANIM, true);
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
        o.PlayStayEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.COLLECT_END_ANIM);
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
        o.PlayFly = function (e) {
          var t = this;
          this.PlayCollect();
          return new Promise(function (o) {
            var i = t.node.parent.getComponent(UITransform).convertToNodeSpaceAR(e);
            tween(t.node).to(.3, {
              position: i
            }, {
              easing: easing.linear
            }).call(function () {
              o();
            }).start();
          });
        };
        o.SetCashFrameBGActive = function (e) {
          if (this.m_spine.node.active != e) {
            this.m_spine.node.active = e;
          }
        };
        return t;
      }(BaseSpine);
      _descriptor$6 = _applyDecoratedDescriptor(_class2$8.prototype, "m_cashLabel", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var CashFrameSpine = _dec$a(_class$a = _class2$8) || _class$a;
      var _dec$b;
      var _dec2$7;
      var _dec3$4;
      var _class$b;
      var _class2$9;
      var _descriptor$7;
      var _descriptor2$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d16d7OXiVtIKJjv73V/plQn", "CashFrameUnit", undefined);
      var ccclass$b = _decorator.ccclass;
      var property$7 = _decorator.property;
      _dec$b = ccclass$b("CashFrameUnit");
      _dec2$7 = property$7({
        type: Sprite
      });
      _dec3$4 = property$7({
        type: Label
      });
      _class2$9 = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_cashFrame", _descriptor$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_label", _descriptor2$4, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.SetCashMaskActive = function (e) {
          if (e) {
            this.m_label.color = Color.GRAY;
            this.m_cashFrame.color = Color.GRAY;
          } else {
            this.m_label.color = Color.WHITE;
            this.m_cashFrame.color = Color.WHITE;
          }
        };
        o.SetCashValue = function (e) {
          this.m_label.string = node.FormatNumberThousands(e, node.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
        };
        return t;
      }(Component);
      _descriptor$7 = _applyDecoratedDescriptor(_class2$9.prototype, "m_cashFrame", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$4 = _applyDecoratedDescriptor(_class2$9.prototype, "m_label", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var CashFrameUnit = _dec$b(_class$b = _class2$9) || _class$b;
      var _dec$c;
      var _dec2$8;
      var _dec3$5;
      var _dec4$3;
      var _dec5$2;
      var _dec6$1;
      var _class2$a;
      var _descriptor$8;
      var _descriptor2$5;
      var _descriptor3$3;
      var _descriptor4$2;
      var _descriptor5$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "67813e98e5A7p6NLbHvZZZ6", "EffectPlate", undefined);
      var ccclass$c = _decorator.ccclass;
      var property$8 = _decorator.property;
      _dec$c = ccclass$c("EffectPlate");
      _dec2$8 = property$8({
        type: Prefab,
        tooltip: "symbol動態Prefabs"
      });
      _dec3$5 = property$8({
        type: Node,
        tooltip: "symbol特效的父節點"
      });
      _dec4$3 = property$8({
        type: Node,
        tooltip: "CashFrame特效的父節點"
      });
      _dec5$2 = property$8({
        type: Node
      });
      _dec6$1 = property$8({
        type: Node,
        tooltip: "黃金牛飛行終點Node"
      });
      _class2$a = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_symbolEffectPrefabs", _descriptor$8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_effectParent", _descriptor2$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_cashFrameParent", _descriptor3$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_moveTarget", _descriptor4$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_goldBisonFlyTarget", _descriptor5$1, _assertThisInitialized(t));
          t.m_symbolSpines = new Array();
          t.NO_NEED_PLAY_ANIM_IDX = -1;
          t.m_gameView = null;
          t.m_slotReels = null;
          t.m_stopEffectNodes = new Array();
          t.m_barrelMgr = null;
          t.m_isBarrelHit = [];
          t.m_nodeMoveTool = new NodeThrowTool();
          t.m_winLineSymbolIdxData = [];
          t.m_isLineLoop = false;
          t.m_isOneLoopPlaying = false;
          t.m_currentLineIdx = 0;
          t.m_cashFrame = [];
          t.CASH_FRAME_ZINDEX = 10;
          t.CASH_FRAME_COW_BOY_ZINDEX = 11;
          t.m_isCashGame = false;
          t.m_playingCowBoySpine = null;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.onLoad = function () {
          log("");
          for (var e = 0; e < GameDefine.COL_LENGTH; e++) {
            this.m_stopEffectNodes.push(new Array());
            var t = [];
            for (var o = 0; o < GameDefine.ROW_LENGTH; o++) {
              t.push(Array());
            }
            this.m_symbolSpines.push(t);
          }
          this.InitNullArray(this.m_cashFrame);
        };
        o.InitNullArray = function (e) {
          for (var t = 0; t < GameDefine.COL_LENGTH; t++) {
            var o = [];
            for (var i = 0; i < GameDefine.ROW_LENGTH; i++) {
              o.push(null);
            }
            e.push(o);
          }
        };
        o.Init = function (e, t) {
          this.m_gameView = e;
          this.m_slotReels = t;
          this.m_barrelMgr = this.m_gameView.BarrelMgr;
        };
        o.InitSymbolPrefabData = function () {
          for (var e = 0; e < this.m_symbolEffectPrefabs.length; e++) {
            var t = "Symbol_" + e.toString().padStart(2, "0");
            NodeObjPool.GetInstance().SetPrefabData(t, this.m_symbolEffectPrefabs[e]);
          }
        };
        o.Reset = function () {
          this.m_winLineSymbolIdxData = [];
          this.m_currentLineIdx = 0;
          this.m_isLineLoop = false;
          this.CleanAllSymbolAnim();
          for (var e = 0; e < FGGameType.Total; e++) {
            this.m_isBarrelHit[e] = false;
          }
        };
        o.ShowSymbolEffect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o) {
            var i;
            var n;
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
                    if (undefined === o) {
                      o = false;
                    }
                    if (!t) {
                      e.next = 13;
                      break;
                    }
                    i = [];
                    n = [];
                    for (r = 0; r < t.length; r++) {
                      for (a = 0; a < t[r].length; a++) {
                        if (s = t[r][a] != this.NO_NEED_PLAY_ANIM_IDX) {
                          l = o ? GameDefine.LAYERS.Layer3 : -1;
                          c = this.CreateSymbolSpine(r, a, t[r][a], l);
                          i.push(c.PlayWinShow(t[r][a]));
                          if (!(t[r][a] != SymbolType.WILD_x2 && t[r][a] != SymbolType.WILD_x3)) {
                            n.push(c);
                          }
                          if ((u = this.m_slotReels.GetSymbolUnit(r, a)).GetHasCash()) {
                            if (u.GetSymbolIdx() != SymbolType.COLLECT) {
                              this.CreateCashFrameSprite(r, a, u.CashValue, u.IsCashFlyEnd);
                            } else {
                              c.SetCashValue(u.CashValue);
                            }
                          }
                        }
                        this.m_slotReels.SetSymbolActive(r, a, !s);
                      }
                    }
                    this.SetSymbolSpineZindex();
                    e.next = 8;
                    return Promise.all(i);
                  case 8:
                    if (!(n.length > 0)) {
                      e.next = 13;
                      break;
                    }
                    e.next = 11;
                    return node$1.Wait(this, .3);
                  case 11:
                    e.next = 13;
                    return this.PlayWildMutipleAnim(n);
                  case 13:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o) {
            return e.apply(this, arguments);
          };
        }();
        o.SetSymbolSpineZindex = function () {
          var e = this;
          var t = 0;
          var o = function (o, i) {
            if (undefined === i) {
              i = false;
            }
            for (var n = 0; n < e.m_symbolSpines.length; n++) {
              var r;
              var a = i ? [].concat(e.m_symbolSpines[n]).reverse() : e.m_symbolSpines[n];
              for (var s = _createForOfIteratorHelperLoose(a); !(r = s()).done;) {
                var l = r.value[o];
                if (l) {
                  node.SetOrderedZindex(l.node, t);
                  t++;
                }
              }
            }
          };
          if (this.m_isCashGame) {
            o(GameDefine.LAYERS.Layer2);
          } else {
            o(GameDefine.LAYERS.Layer0);
            o(GameDefine.LAYERS.Layer1, true);
          }
        };
        o.PlayWildMutipleAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    o = 0;
                  case 1:
                    if (!(o < t.length)) {
                      e.next = 8;
                      break;
                    }
                    this.m_gameView.GameSoundMgr.PlayEffectSound(GameDefine.AudioClips.Wild_Multiplier);
                    e.next = 5;
                    return t[o].PlayWildMuiltiple();
                  case 5:
                    o++;
                    e.next = 1;
                    break;
                  case 8:
                    e.next = 10;
                    return node$1.Wait(this, .5);
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
        o.PlayReelStopAnim = function (e, t) {
          var o = this;
          var i = function (i) {
            if (t[i] != o.NO_NEED_PLAY_ANIM_IDX) {
              var n = o.CreateSymbolSpine(e, i, t[i]);
              o.m_stopEffectNodes[e][i] = n.node;
              var r = o.m_slotReels.GetSymbolUnit(e, i).GetHasCash();
              var a = o.m_slotReels.GetSymbolUnit(e, i).CashValue;
              if (r) {
                o.CreateCashFrameSprite(e, i, a, false);
              }
              o.m_slotReels.SetSymbolActive(e, i, false);
              n.PlayReelStop(function () {
                o.m_slotReels.SetSymbolActive(e, i, true);
                o.RemoveCashFrameEffect(e, i);
              });
            }
          };
          for (var n = 0; n < t.length; n++) {
            i(n);
          }
        };
        o.SetStopEffectNodePos = function (e, t) {
          if (this.m_stopEffectNodes[e][t]) {
            var o = this.m_slotReels.GetSymbolWorldPos(e, t);
            this.m_stopEffectNodes[e][t].setWorldPosition(o);
          }
        };
        o.CreateSymbolSpine = function (e, t, o, i) {
          if (undefined === i) {
            i = -1;
          }
          var n = -1 == i ? this.GetSymbolLayer(o) : i;
          var r = this.m_symbolSpines[e][t][n];
          if (r) {
            NodeObjPool.GetInstance().ReturnNode(r.GetSpineName(), r.node);
          }
          var a;
          var s = this.m_slotReels.GetSymbolWorldPos(e, t);
          var l = null;
          if (o == SymbolType.GOLD_BUFFALO_CHANGE) {
            o = SymbolType.BUFFALO;
          }
          a = "Symbol_" + o.toString().padStart(2, "0");
          l = NodeObjPool.GetInstance().GetNode(a).getComponent(SymbolSpine);
          this.m_effectParent[n].addChild(l.node);
          l.SetSpineIdx(o);
          l.node.setWorldPosition(s);
          l.node.active = true;
          node.SetOrderedZindex(l.node, t);
          l.Stop();
          this.m_symbolSpines[e][t][n] = l;
          return l;
        };
        o.GetSymbolLayer = function (e) {
          if (this.m_isCashGame && GameDefine.HAS_CASH_SYMBOL.includes(e)) {
            return GameDefine.LAYERS.Layer2;
          }
          var t;
          for (var o = _createForOfIteratorHelperLoose(GameDefine.SYMBOL_LAYER_TYPE); !(t = o()).done;) {
            var i = t.value;
            if (i.SymbolIdx.includes(e)) {
              return i.Layer;
            }
          }
          return 0;
        };
        o.CleanAllSymbolAnim = function (e, t) {
          if (undefined === e) {
            e = true;
          }
          if (undefined === t) {
            t = true;
          }
          for (var o = 0; o < this.m_symbolSpines.length; o++) {
            for (var i = 0; i < this.m_symbolSpines[o].length; i++) {
              for (var n = 0; n < this.m_symbolSpines[o][i].length; n++) {
                if (this.m_symbolSpines[o][i][n]) {
                  var r = this.m_symbolSpines[o][i][n].GetSpineIdx();
                  var a = r == SymbolType.COLLECT;
                  var s = r == SymbolType.WILD_x2 || r == SymbolType.WILD_x3;
                  if (a && !e || s && !t) {
                    continue;
                  }
                  var l = this.m_symbolSpines[o][i][n];
                  l.Stop();
                  NodeObjPool.GetInstance().ReturnNode(l.GetSpineName(), l.node);
                  this.m_symbolSpines[o][i][n] = null;
                  this.m_slotReels.SetSymbolActive(o, i, true);
                }
              }
            }
          }
        };
        o.PlayCoinMoveAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var o;
            var i;
            var n;
            var r;
            var a;
            var s;
            var l;
            var c;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = [];
                    0;
                    o = this.m_gameView.RoundDataProvider.GetPlateData(0);
                    for (i = 0; i < o.length; i++) {
                      t[i] = [];
                      for (n = 0; n < o[i].length; n++) {
                        r = this.GetMoveTargetNode(o[i][n]);
                        t[i].push(r);
                      }
                    }
                    this.PlayBarrelHit();
                    a = false;
                    s = [];
                    for (l = 0; l < t.length; l++) {
                      for (c = 0; c < t[l].length; c++) {
                        if (t[l][c]) {
                          a = true;
                          s.push(this.StartCoinMove(l, c, o[l][c], t[l][c]));
                        }
                      }
                    }
                    if (a) {
                      this.m_gameView.GameSoundMgr.PlayEffectSound(GameDefine.AudioClips.Coin_Start);
                    }
                    e.next = 11;
                    return Promise.all(s);
                  case 11:
                    return e.abrupt("return", a);
                  case 12:
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
        o.StartCoinMove = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o, i, n) {
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    r = this.CreateSymbolSpine(t, o, i);
                    this.m_slotReels.SetSymbolActive(t, o, true);
                    r.PlayFly();
                    e.next = 5;
                    return this.m_nodeMoveTool.Throw(r.node, n, .5);
                  case 5:
                    r.SetNodeActivity(false);
                  case 6:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o, i, n) {
            return e.apply(this, arguments);
          };
        }();
        o.PlayBarrelHit = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    for (t = 0; t < this.m_isBarrelHit.length; t++) {
                      if (this.m_isBarrelHit[t]) {
                        this.m_barrelMgr.PlayHit(t);
                      }
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
        o.GetMoveTargetNode = function (e) {
          switch (e) {
            case SymbolType.COIN1:
              this.m_isBarrelHit[FGGameType.DoubleUp] = true;
              return this.m_moveTarget[FGGameType.DoubleUp];
            case SymbolType.COIN2:
              this.m_isBarrelHit[FGGameType.Gold] = true;
              return this.m_moveTarget[FGGameType.Gold];
            case SymbolType.COIN3:
              this.m_isBarrelHit[FGGameType.Cash] = true;
              return this.m_moveTarget[FGGameType.Cash];
          }
          return null;
        };
        o.PlayAllWinLine = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o) {
            var i;
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.CleanAllSymbolAnim(false);
                    for (i = 0; i < o.length; i++) {
                      if (o[i] != SymbolType.SCATTER) {
                        this.SaveWinLine_Normal(o[i], t);
                      } else {
                        this.SaveWinLine_Scatter(t);
                      }
                    }
                    n = this.GetAllNeedPlaySymbolData(t);
                    e.next = 5;
                    return this.ShowSymbolEffect(n);
                  case 5:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o) {
            return e.apply(this, arguments);
          };
        }();
        o.ShowScatterAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var o;
            var i;
            var n;
            var r;
            var a;
            var s;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    o = [];
                    i = 0;
                    for (n = 0; n < t.length; n++) {
                      o[n] = [];
                      for (r = 0; r < t[n].length; r++) {
                        if (t[n][r] == SymbolType.SCATTER) {
                          o[n][r] = SymbolType.SCATTER;
                          i++;
                          for (a = 0; a < this.m_symbolSpines[n][r].length; a++) {
                            if (s = this.m_symbolSpines[n][r][a]) {
                              s.Stop();
                              NodeObjPool.GetInstance().ReturnNode(s.GetSpineName(), s.node);
                              this.m_symbolSpines[n][r][a] = null;
                            }
                          }
                        } else {
                          o[n][r] = this.NO_NEED_PLAY_ANIM_IDX;
                        }
                      }
                    }
                    2;
                    if (i < 2) {
                      o = [];
                    }
                    this.m_gameView.GameSoundMgr.PlayEffectSound(GameDefine.AudioClips.FG_FGBell);
                    e.next = 8;
                    return this.ShowSymbolEffect(o, true);
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
        o.SaveWinLine_Normal = function (e, t) {
          var o = [];
          for (var i = 0; i < t.length; i++) {
            var n = false;
            o[i] = [];
            for (var r = 0; r < t[i].length; r++) {
              var a = t[i][r] == e || t[i][r] == SymbolType.WILD || t[i][r] == SymbolType.WILD_x2 || t[i][r] == SymbolType.WILD_x3 || t[i][r] == SymbolType.COLLECT || t[i][r] == SymbolType.GOLD_BUFFALO_CHANGE && e == SymbolType.BUFFALO;
              var s = t[i][r] == SymbolType.SCATTER;
              if (a && !s) {
                o[i][r] = t[i][r];
                n = true;
              } else {
                o[i][r] = this.NO_NEED_PLAY_ANIM_IDX;
              }
            }
            if (!n) {
              break;
            }
          }
          this.m_winLineSymbolIdxData.push(o);
        };
        o.SaveWinLine_Scatter = function (e) {
          var t = [];
          for (var o = 0; o < e.length; o++) {
            t[o] = [];
            for (var i = 0; i < e[o].length; i++) {
              var n = e[o][i] == SymbolType.SCATTER;
              t[o][i] = n ? e[o][i] : this.NO_NEED_PLAY_ANIM_IDX;
            }
          }
          this.m_winLineSymbolIdxData.push(t);
        };
        o.GetAllNeedPlaySymbolData = function (e) {
          var t = [];
          if (0 === this.m_winLineSymbolIdxData.length || 0 === e.length) {
            return t;
          }
          for (var o = 0; o < e.length; o++) {
            t[o] = new Array(e[o].length).fill(this.NO_NEED_PLAY_ANIM_IDX);
          }
          var i;
          for (var n = _createForOfIteratorHelperLoose(this.m_winLineSymbolIdxData); !(i = n()).done;) {
            var r = i.value;
            for (var a = 0; a < r.length; a++) {
              for (var s = 0; s < r[a].length; s++) {
                if (r[a][s] != this.NO_NEED_PLAY_ANIM_IDX) {
                  t[a][s] = r[a][s];
                }
              }
            }
          }
          return t;
        };
        o.PlayWinSymbolLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.CheckHasLoopData()) {
                      this.m_isLineLoop = true;
                      this.m_isOneLoopPlaying = false;
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
        o.CheckHasLoopData = function () {
          return this.m_winLineSymbolIdxData.length > 0;
        };
        o.StartPlayLoopAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_isOneLoopPlaying) {
                      e.next = 8;
                      break;
                    }
                    this.CleanAllSymbolAnim();
                    this.m_isOneLoopPlaying = true;
                    e.next = 5;
                    return this.ShowSymbolEffect(this.m_winLineSymbolIdxData[this.m_currentLineIdx]);
                  case 5:
                    this.m_isOneLoopPlaying = false;
                    this.m_currentLineIdx++;
                    if (this.m_currentLineIdx >= this.m_winLineSymbolIdxData.length) {
                      this.m_currentLineIdx = 0;
                    }
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
        o.OnProcess = function () {
          if (this.m_isLineLoop) {
            this.StartPlayLoopAnim();
          }
        };
        o.PlayGoldBuffaloFadeOut = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o) {
            var i;
            var n;
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = this.CreateSymbolSpine(t, o, SymbolType.GOLD_BUFFALO);
                    n = this.m_slotReels.GetSymbolUnit(t, o).CashValue;
                    if (this.m_slotReels.GetSymbolUnit(t, o).GetHasCash()) {
                      this.CreateCashFrameSprite(t, o, n, false);
                    }
                    (r = this.m_goldBisonFlyTarget.parent.getComponent(UITransform).convertToWorldSpaceAR(this.m_goldBisonFlyTarget.position)).y += 45;
                    e.next = 8;
                    return i.PlayGoldFadeOut(r);
                  case 8:
                    this.RemoveCashFrameEffect(t, o);
                    i.SetNodeActivity(false);
                  case 10:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o) {
            return e.apply(this, arguments);
          };
        }();
        o.PlayNormalBuffaloChange = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = this.CreateSymbolSpine(t, o, SymbolType.GOLD_BUFFALO_CHANGE);
                    e.next = 3;
                    return i.PlayChange();
                  case 3:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o) {
            return e.apply(this, arguments);
          };
        }();
        o.SetIsCashGame = function (e) {
          this.m_isCashGame = e;
        };
        o.CreateCashFrameSprite = function (e, t, o, i) {
          if (this.m_cashFrame[e][t]) {
            this.RemoveCashFrameEffect(e, t);
          }
          var n = GameDefine.CASH_FRAME_SPRITE_KEY_NAME;
          var r = NodeObjPool.GetInstance().GetNode(n).getComponent(CashFrameUnit);
          r.node.setParent(this.m_cashFrameParent);
          var a = this.m_slotReels.GetSymbolWorldPos(e, t);
          r.node.setWorldPosition(a);
          r.node.active = true;
          r.SetCashValue(o);
          r.SetCashMaskActive(i);
          this.m_cashFrame[e][t] = r;
          return r;
        };
        o.CreateCashFrameSpine = function (e, t, o) {
          var i = GameDefine.CASH_FRAME_SPINE_KEY_NAME;
          var n = NodeObjPool.GetInstance().GetNode(i).getComponent(CashFrameSpine);
          n.node.setParent(this.m_cashFrameParent);
          var r = this.m_slotReels.GetSymbolWorldPos(e, t);
          n.node.setWorldPosition(r);
          n.node.active = true;
          n.SetCashValue(o);
          n.PlayStayAnim();
          return n;
        };
        o.RemoveCashFrameEffect = function (e, t) {
          if (this.m_cashFrame[e][t]) {
            NodeObjPool.GetInstance().ReturnNode(GameDefine.CASH_FRAME_SPRITE_KEY_NAME, this.m_cashFrame[e][t].node);
            this.m_cashFrame[e][t] = null;
          }
        };
        o.RomoveAllCashFrameEffect = function () {
          if (this.m_cashFrame && this.m_cashFrame.length > 0) {
            for (var e = 0; e < this.m_cashFrame.length; e++) {
              for (var t = 0; t < this.m_cashFrame[e].length; t++) {
                this.RemoveCashFrameEffect(e, t);
              }
            }
          }
        };
        o.PlayCashFlyAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o, i, n) {
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
                    r = 0;
                    a = 0;
                  case 2:
                    if (!(a < i.length)) {
                      e.next = 23;
                      break;
                    }
                    s = i[a].length - 1;
                  case 4:
                    if (!(s >= 0)) {
                      e.next = 20;
                      break;
                    }
                    if (!(i[a][s] > 0)) {
                      e.next = 17;
                      break;
                    }
                    this.m_playingCowBoySpine.PlayCollect();
                    l = this.CreateCashFrameSpine(a, s, i[a][s]);
                    c = this.m_slotReels.GetSymbolWorldPos(t, o);
                    e.next = 11;
                    return l.PlayFly(c);
                  case 11:
                    if (n) {
                      (u = this.m_slotReels.GetSymbolUnit(a, s)).SetCashMaskActive(true);
                      u.IsCashFlyEnd = true;
                    }
                    NodeObjPool.GetInstance().ReturnNode(GameDefine.CASH_FRAME_SPINE_KEY_NAME, l.node);
                    r = node.strip(r + i[a][s]);
                    this.AddCowBoyCash(t, o, r);
                    e.next = 17;
                    return node$1.Wait(this, .2);
                  case 17:
                    s--;
                    e.next = 4;
                    break;
                  case 20:
                    a++;
                    e.next = 2;
                    break;
                  case 23:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o, i, n) {
            return e.apply(this, arguments);
          };
        }();
        o.ChangeCashFrameToFlyEnd = function (e) {
          for (var t = 0; t < e.length; t++) {
            for (var o = 0; o < e[t].length; o++) {
              if (e[t][o] > 0 && this.m_cashFrame[t][o]) {
                this.m_cashFrame[t][o].SetCashMaskActive(true);
              }
            }
          }
        };
        o.AddCowBoyCash = function (e, t, o) {
          this.m_playingCowBoySpine.SetCashValue(o);
          this.m_slotReels.GetSymbolUnit(e, t).SetCashFrameValue(o);
        };
        o.PlayCowBoyCollectAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_playingCowBoySpine = this.CreateSymbolSpine(t, o, SymbolType.COLLECT);
                    this.m_playingCowBoySpine.SetCashValue(0);
                    this.m_playingCowBoySpine.node.setParent(this.m_cashFrameParent);
                    this.m_gameView.GameSoundMgr.PlayEffectSound(GameDefine.AudioClips.Symbol_17);
                    this.m_slotReels.SetSymbolActive(t, o, false);
                    e.next = 7;
                    return this.m_playingCowBoySpine.PlayCollectStart();
                  case 7:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o) {
            return e.apply(this, arguments);
          };
        }();
        o.PlayCowBoyCollectEndAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_playingCowBoySpine.PlayCollectEnd();
                  case 2:
                    this.m_playingCowBoySpine.node.setParent(this.m_effectParent[GameDefine.LAYERS.Layer2]);
                    this.m_playingCowBoySpine = null;
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
          key: "StopEffectNodes",
          get: function () {
            return this.m_stopEffectNodes;
          }
        }, {
          key: "IsBarrelHit",
          get: function () {
            return this.m_isBarrelHit;
          }
        }]);
        return t;
      }(Component);
      _descriptor$8 = _applyDecoratedDescriptor(_class2$a.prototype, "m_symbolEffectPrefabs", [_dec2$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$5 = _applyDecoratedDescriptor(_class2$a.prototype, "m_effectParent", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$3 = _applyDecoratedDescriptor(_class2$a.prototype, "m_cashFrameParent", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$2 = _applyDecoratedDescriptor(_class2$a.prototype, "m_moveTarget", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor5$1 = _applyDecoratedDescriptor(_class2$a.prototype, "m_goldBisonFlyTarget", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$d;
      var _dec2$9;
      var _dec3$6;
      var _dec4$4;
      var _dec5$3;
      var _dec6$2;
      var _dec7$1;
      var _class$d;
      var _class2$b;
      var _descriptor$9;
      var _descriptor2$6;
      var _descriptor3$4;
      var _descriptor4$3;
      var _dec8$1;
      var _dec9$1;
      var _dec10;
      var _dec11;
      var _dec12;
      var _dec13;
      var _dec14;
      var _dec15;
      var _dec16;
      var _dec17;
      var _dec18;
      var _dec19;
      var _dec20;
      var _dec21;
      var _class4;
      var _class5;
      var _descriptor5$2;
      var _descriptor6$1;
      var _descriptor7$1;
      var _descriptor8$1;
      var _descriptor9;
      var _descriptor10;
      var _descriptor11;
      var _descriptor12;
      var _descriptor13;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "02e880GcB9Jw7QDr8UUWxEV", "ShakeComponent", undefined);
      var ccclass$d = _decorator.ccclass;
      var property$9 = _decorator.property;
      var executeInEditMode = _decorator.executeInEditMode;
      var help = _decorator.help;
      var tweenEasing = [{
        name: "backIn",
        desc: "回退:緩入"
      }, {
        name: "backInOut",
        desc: "回退:緩入緩出"
      }, {
        name: "backOut",
        desc: "回退:緩出"
      }, {
        name: "backOutIn",
        desc: "回退:緩出緩入"
      }, {
        name: "bounceIn",
        desc: "彈跳:緩入"
      }, {
        name: "bounceInOut",
        desc: "彈跳:緩入緩出"
      }, {
        name: "bounceOut",
        desc: "彈跳:緩出"
      }, {
        name: "bounceOutIn",
        desc: "彈跳:緩出緩入"
      }, {
        name: "circIn",
        desc: "迴圈:緩入 由慢到快"
      }, {
        name: "circInOut",
        desc: "迴圈:緩入緩出 由慢到很快再到慢"
      }, {
        name: "circOut",
        desc: "迴圈:緩出 由快到慢"
      }, {
        name: "circOutIn",
        desc: "迴圈:緩出緩入 由慢到很快再到慢"
      }, {
        name: "constant",
        desc: "constant"
      }, {
        name: "cubicIn",
        desc: "立方曲線緩入 由慢到快"
      }, {
        name: "cubicInOut",
        desc: "立方曲線緩入緩出 由慢到快再到慢"
      }, {
        name: "cubicOut",
        desc: "立方曲線緩出 由快到慢"
      }, {
        name: "cubicOutIn",
        desc: "立方曲線緩出緩入 由慢到快再到慢"
      }, {
        name: "elasticIn",
        desc: "彈簧回震:緩入"
      }, {
        name: "elasticInOut",
        desc: "彈簧回震:緩入緩出"
      }, {
        name: "elasticOut",
        desc: "彈簧回震:緩出"
      }, {
        name: "elasticOutIn",
        desc: "彈簧回震:緩出緩入"
      }, {
        name: "expoIn",
        desc: "指數曲線緩入 由慢到快"
      }, {
        name: "expoInOut",
        desc: "指數曲線緩入和緩出 由慢到很快再到慢"
      }, {
        name: "expoOut",
        desc: "指數曲線緩出 由快到慢"
      }, {
        name: "expoOutIn",
        desc: "指數曲線緩出緩入和 由慢到很快再到慢"
      }, {
        name: "fade",
        desc: "漸褪效果"
      }, {
        name: "linear",
        desc: "線性"
      }, {
        name: "quadIn",
        desc: "平方曲線緩入 由慢到快"
      }, {
        name: "quadInOut",
        desc: "平方曲線緩入緩出 由慢到快再到慢"
      }, {
        name: "quadOut",
        desc: "平方曲線緩出 由快到慢"
      }, {
        name: "quadOutIn",
        desc: "平方曲線緩出緩入 由慢到快再到慢"
      }, {
        name: "quartIn",
        desc: "四次方曲線緩入 由慢到快"
      }, {
        name: "quartInOut",
        desc: "四次方曲線緩入緩出 由慢到快再到慢"
      }, {
        name: "quartOut",
        desc: "四次方曲線緩出 由快到慢"
      }, {
        name: "quartOutIn",
        desc: "四次方曲線緩出緩入 由慢到快再到慢"
      }, {
        name: "quintIn",
        desc: "五次方曲線緩入 由慢到快"
      }, {
        name: "quintInOut",
        desc: "五次方曲線緩入緩出 由慢到快再到慢"
      }, {
        name: "quintOut",
        desc: "五次方曲線緩出 由慢到快"
      }, {
        name: "quintOutIn",
        desc: "五次方曲線緩出緩入 由慢到快再到慢"
      }, {
        name: "sineIn",
        desc: "正弦曲線緩入 由慢到快"
      }, {
        name: "sineInOut",
        desc: "正弦曲線緩入緩出 由慢到快再到慢"
      }, {
        name: "sineOut",
        desc: "正弦曲線緩出 由快到慢"
      }, {
        name: "sineOutIn",
        desc: "正弦曲線緩出緩入 由慢到快再到慢"
      }, {
        name: "smooth",
        desc: "平滑效果"
      }];
      var CCEasingName = Enum({});
      var CCShakeName = Enum({});
      var FadeEnum;
      !function (e) {
        e[e.None = 0] = "None";
        e[e.FadeIn = 1] = "FadeIn";
        e[e.FadeOut = 2] = "FadeOut";
      }(FadeEnum || (FadeEnum = {}));
      var CCFadeName = Enum({
        None: FadeEnum.None,
        FadeIn: FadeEnum.FadeIn,
        FadeOut: FadeEnum.FadeOut
      });
      var hash = function (e) {
        var t;
        var o = 0;
        if (0 === e.length) {
          return o;
        }
        for (t = 0; t < e.length; t++) {
          o = (o << 5) - o + e.charCodeAt(t);
          o |= 0;
        }
        return o;
      };
      _dec$d = ccclass$d("_TweenInfo");
      _dec2$9 = property$9({
        visible: false,
        tooltip: "Easing"
      });
      _dec3$6 = property$9({
        type: CCEasingName,
        visible: false
      });
      _dec4$4 = property$9({
        visible: true,
        displayName: "緩動效果",
        type: CCEasingName
      });
      _dec5$3 = property$9({
        type: CCFadeName,
        visible: false
      });
      _dec6$2 = property$9({
        visible: true,
        displayName: "fade type",
        type: CCFadeName
      });
      _dec7$1 = property$9({
        min: 0,
        visible: true,
        displayName: "時間"
      });
      _class2$b = function () {
        function e() {
          _initializerDefineProperty(this, "m_EasingName", _descriptor$9, this);
          _initializerDefineProperty(this, "__easingIdx", _descriptor2$6, this);
          _initializerDefineProperty(this, "__fadeType", _descriptor3$4, this);
          this._EasingEnumList = [];
          _initializerDefineProperty(this, "duration", _descriptor4$3, this);
        }
        _createClass(e, [{
          key: "_easingIdx",
          get: function () {},
          set: function (e) {}
        }, {
          key: "_fadeType",
          get: function () {
            return this.__fadeType;
          },
          set: function (e) {}
        }]);
        return e;
      }();
      _descriptor$9 = _applyDecoratedDescriptor(_class2$b.prototype, "m_EasingName", [_dec2$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      });
      _descriptor2$6 = _applyDecoratedDescriptor(_class2$b.prototype, "__easingIdx", [_dec3$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _applyDecoratedDescriptor(_class2$b.prototype, "_easingIdx", [_dec4$4], Object.getOwnPropertyDescriptor(_class2$b.prototype, "_easingIdx"), _class2$b.prototype);
      _descriptor3$4 = _applyDecoratedDescriptor(_class2$b.prototype, "__fadeType", [_dec5$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _applyDecoratedDescriptor(_class2$b.prototype, "_fadeType", [_dec6$2], Object.getOwnPropertyDescriptor(_class2$b.prototype, "_fadeType"), _class2$b.prototype);
      _descriptor4$3 = _applyDecoratedDescriptor(_class2$b.prototype, "duration", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      });
      var _TweenInfo = _dec$d(_class$d = _class2$b) || _class$d;
      _dec8$1 = ccclass$d("Shake");
      _dec9$1 = help("https://docs.cocos.com/creator/3.6/manual/zh/tween/tween-function.html#%E5%86%85%E7%BD%AE%E7%BC%93%E5%8A%A8%E5%87%BD%E6%95%B0");
      _dec10 = property$9({
        visible: false,
        displayName: "正負交替",
        tooltip: "重複次數>1時, 正負交替"
      });
      _dec11 = property$9({
        type: JsonAsset,
        displayName: "預先定義shake.json",
        visible: function () {
          if (this.shakeJson) {
            this._updateShakeEnum(this.shakeJson.json.shakelist);
          }
          return true;
        }
      });
      _dec12 = property$9({
        visible: true,
        tooltip: "自定義的shake name"
      });
      _dec13 = property$9({
        type: CCShakeName,
        visible: false
      });
      _dec14 = property$9({
        visible: true,
        displayName: "儲存到預先定義.json",
        tooltip: "若Shakename不為:custom,才會儲存"
      });
      _dec15 = property$9({
        visible: true,
        displayName: "預先定義",
        tooltip: "切換後會以預先定義的數值直接覆蓋所有設定值",
        type: CCShakeName
      });
      _dec16 = property$9({
        readonly: true,
        displayName: "總震動時間"
      });
      _dec17 = property$9({
        visible: true,
        displayName: "振幅"
      });
      _dec18 = property$9({
        min: 1,
        step: 1,
        visible: true,
        displayName: "震動頻率/秒"
      });
      _dec19 = property$9({
        step: 1,
        visible: true,
        displayName: "振幅x/y/z權重:%"
      });
      _dec20 = property$9({
        visible: false,
        type: [_TweenInfo]
      });
      _dec21 = property$9({
        type: [_TweenInfo],
        tooltip: "輸入更改 緩動效果 數量",
        displayName: "緩動效果"
      });
      _class5 = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "alternately", _descriptor5$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "shakeJson", _descriptor6$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "shakename", _descriptor7$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "__ShakeIdx", _descriptor8$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "Duration", _descriptor9, _assertThisInitialized(t));
          _initializerDefineProperty(t, "magnitude", _descriptor10, _assertThisInitialized(t));
          _initializerDefineProperty(t, "frequency", _descriptor11, _assertThisInitialized(t));
          _initializerDefineProperty(t, "weight", _descriptor12, _assertThisInitialized(t));
          _initializerDefineProperty(t, "_TweenList", _descriptor13, _assertThisInitialized(t));
          t._EasingEnumList = [];
          t._ShakeEnumList = [];
          t.originPos = new Vec3();
          t._TestShakeCnt = 0;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.updateDuration = function () {
          var e = 0;
          for (var t = 0; t < this._TweenList.length; t++) {
            e += this._TweenList[t].duration;
          }
          this.Duration = e;
        };
        o.setTweenJson = function (e) {
          var t = this.shakeJson.json.shakelist;
          if ("custom" != e) {
            t[e];
          } else {
            console.warn("custom 不會儲存到預先定義.json");
          }
        };
        o.getTweenJson = function () {
          var e = {
            magnitude: this.magnitude,
            frequency: this.frequency,
            weight: {
              x: this.weight.x,
              y: this.weight.y,
              z: this.weight.z
            }
          };
          var t = [];
          for (var o = 0; o < this._TweenList.length; o++) {
            var i = this._TweenList[o];
            t.push({
              m_EasingName: i.m_EasingName,
              _easingIdx: i._easingIdx,
              _fadeType: i._fadeType,
              duration: i.duration
            });
          }
          e._TweenList = t;
          return e;
        };
        o.getJsonData = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var o;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = {};
                    if (this.shakeJson && this.shakeJson.json) {
                      t = this.shakeJson.json;
                    }
                    if ("custom" == this.shakename) {
                      e.next = 19;
                      break;
                    }
                    (o = t.shakelist)[this.shakename] = this.getTweenJson();
                    t.shakelist = o;
                    e.next = 17;
                    break;
                  case 11:
                    i = e.sent;
                    console.log("path", i, "outJson", JSON.stringify(t, null, 2));
                    undefined.writeFileSync(i, JSON.stringify(t, null, 2), "utf-8");
                    e.next = 17;
                    break;
                  case 16:
                    console.log("請先指定 '預先定義shake.json'");
                  case 17:
                    e.next = 20;
                    break;
                  case 19:
                    console.warn("custom 不會儲存到預先定義.json");
                  case 20:
                    return e.abrupt("return", t);
                  case 21:
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
        o.onLoad = function () {
          if (this.shakeJson && this.shakeJson.json) {
            this._updateShakeEnum(this.shakeJson.json.shakelist);
            this.shakeJson.json;
          } else {
            this.getJsonData();
          }
          var e = [];
          for (var t = 0; t < tweenEasing.length; ++t) {
            var o = tweenEasing[t];
            e.push({
              name: o.desc,
              easingName: o.name,
              value: hash(o.name)
            });
          }
          e.sort(function (e, t) {
            return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
          });
          this._EasingEnumList = e;
          this._updateEasingEnum();
          this.updateDuration();
        };
        o._updateShakeEnum = function (e) {
          var t = [];
          if (e) {
            Object.keys(e).forEach(function (e) {
              t.push({
                name: e,
                value: hash(e)
              });
            });
            t.sort(function (e, t) {
              return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
            });
          }
          this._ShakeEnumList = t;
        };
        o._updateEasingEnum = function () {
          for (var e = 0; e < this._TweenList.length; e++) {
            this._TweenList[e]._EasingEnumList = this._EasingEnumList;
          }
        };
        o.start = function () {};
        o.fade = function (e, t, o, i, n, r, a) {
          this.originPos = this.node.getPosition();
          var s = 1 / o;
          var l = t / s;
          for (var c = 1; c <= l; c++) {
            var u = i;
            if (n == FadeEnum.FadeIn) {
              u *= c / l;
            } else if (n == FadeEnum.FadeOut) {
              u *= (l - c) / l;
            }
            var d = this.originPos.clone();
            var p = new Vec3(math.random() - .5, math.random() - .5, math.random() - .5);
            var _ = new Vec3(2 * u * r.x / 100, 2 * u * r.y / 100, 2 * u * r.z / 100);
            _ = _.multiply(p);
            d = d.add(_);
            e = e.to(s, {
              position: d
            }, {
              easing: a,
              onStart: function (e) {},
              onUpdate: function (e, t) {},
              onComplete: function (e) {}
            });
          }
          return e;
        };
        o.shake = function () {
          this._shake(this._TweenList, this.frequency, this.magnitude, this.weight);
        };
        o.testShake = function () {
          if (this.shakeJson && this.shakeJson.json.shakelist) {
            var e = this.shakeJson.json.shakelist;
            if (e) {
              var t = Object.keys(e);
              t.push("ErrorTest");
              var o = t[this._TestShakeCnt++ % t.length];
              this.ShakeWithName(o);
            }
          } else {
            console.log("ShakeWithName shakeJson not assign!");
          }
        };
        o.ShakeWithName = function (e) {
          if (this.shakeJson && this.shakeJson.json.shakelist) {
            var t = this.shakeJson.json.shakelist;
            if (!t[e]) {
              return void console.log("ShakeWithName shakename:" + e + " not found!");
            }
            var o = t[e];
            var i = o._TweenList;
            var n = o.weight;
            this._shake(i, o.frequency, o.magnitude, new Vec3(n.x, n.y, n.z));
          } else {
            console.log("ShakeWithName shakeJson not assign!");
          }
        };
        o._shake = function (e, t, o, i) {
          this.originPos = this.node.getPosition();
          var n = tween(this.node);
          for (var r = 0; r < e.length; r++) {
            var a = e[r];
            n = this.fade(n, a.duration, t, o, a._fadeType, i, a.m_EasingName);
          }
          (n = n.to(0, {
            position: this.originPos
          })).start();
        };
        _createClass(t, [{
          key: "saveshake",
          get: function () {
            return false;
          },
          set: function (e) {
            this.getJsonData();
          }
        }, {
          key: "_ShakeIdx",
          get: function () {
            return this.__ShakeIdx;
          },
          set: function (e) {}
        }, {
          key: "TweenList",
          get: function () {
            return this._TweenList;
          },
          set: function (e) {
            this._TweenList = e;
            this.updateDuration();
            this._updateEasingEnum();
          }
        }]);
        return t;
      }(Component);
      _descriptor5$2 = _applyDecoratedDescriptor(_class5.prototype, "alternately", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      });
      _descriptor6$1 = _applyDecoratedDescriptor(_class5.prototype, "shakeJson", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor7$1 = _applyDecoratedDescriptor(_class5.prototype, "shakename", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "custom";
        }
      });
      _descriptor8$1 = _applyDecoratedDescriptor(_class5.prototype, "__ShakeIdx", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _applyDecoratedDescriptor(_class5.prototype, "saveshake", [_dec14], Object.getOwnPropertyDescriptor(_class5.prototype, "saveshake"), _class5.prototype);
      _applyDecoratedDescriptor(_class5.prototype, "_ShakeIdx", [_dec15], Object.getOwnPropertyDescriptor(_class5.prototype, "_ShakeIdx"), _class5.prototype);
      _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "Duration", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      });
      _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "magnitude", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      });
      _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "frequency", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      });
      _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "weight", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      });
      _descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "_TweenList", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _applyDecoratedDescriptor(_class5.prototype, "TweenList", [_dec21], Object.getOwnPropertyDescriptor(_class5.prototype, "TweenList"), _class5.prototype);
      var Shake = _dec8$1(_class4 = executeInEditMode(_class4 = _dec9$1(_class4 = _class5) || _class4) || _class4) || _class4;
      var _dec$e;
      var _class$e;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3ae32wGiFlFgIj+t9zpAVgN", "DoublePlateDustSpine", undefined);
      var ccclass$e = _decorator.ccclass;
      _dec$e = ccclass$e("DoublePlateDustSpine");
      var DoublePlateDustSpine = _dec$e(_class$e = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          (t = e.call.apply(e, [this].concat(i)) || this).DOUBLE_PLATE_DUST_ANIM_NAME = "Bouble_Start";
          return t;
        }
        _inheritsLoose(t, e);
        t.prototype.PlayDust = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.DOUBLE_PLATE_DUST_ANIM_NAME);
                  case 3:
                    this.SetNodeActivity(false);
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
      }(BaseSpine)) || _class$e;
      var _dec$f;
      var _dec2$a;
      var _dec3$7;
      var _dec4$5;
      var _dec5$4;
      var _dec6$3;
      var _class2$c;
      var _descriptor$a;
      var _descriptor2$7;
      var _descriptor3$5;
      var _descriptor4$4;
      var _descriptor5$3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a4aa9sXjZNNgJNfgIW+w3YX", "DoublePlateMgr", undefined);
      var ccclass$f = _decorator.ccclass;
      var property$a = _decorator.property;
      _dec$f = ccclass$f("DoublePlateMgr");
      _dec2$a = property$a({
        type: Shake
      });
      _dec3$7 = property$a({
        type: Animation
      });
      _dec4$5 = property$a({
        type: Node
      });
      _dec5$4 = property$a({
        type: Node
      });
      _dec6$3 = property$a({
        type: DoublePlateDustSpine,
        tooltip: "雙盤升起的塵土特效"
      });
      _class2$c = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_shake", _descriptor$a, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_doubleUpAnim", _descriptor2$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_reelBG", _descriptor3$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_doublePlate", _descriptor4$4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_doublePlateDust", _descriptor5$3, _assertThisInitialized(t));
          t.m_originPos = null;
          t.m_onDoubleUpAnimFinished = null;
          t.m_gameSoundMgr = null;
          t.DOUBLE_PLATE_UP_ANIM_NAME = "FG_Reel_Start";
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.Init = function (e) {
          this.m_gameSoundMgr = e;
          this.m_originPos = new Vec3(this.m_doubleUpAnim.node.position.x, this.m_doubleUpAnim.node.position.y);
        };
        o.PlayDoubleUpAnim = function (e) {
          this.SetActive(true);
          this.m_shake.shake();
          this.m_onDoubleUpAnimFinished = e;
          this.m_doubleUpAnim.on(Animation.EventType.FINISHED, this.handleStartAnimFinished, this);
          this.m_doubleUpAnim.play(this.DOUBLE_PLATE_UP_ANIM_NAME);
          this.m_doublePlateDust.PlayDust();
          this.m_gameSoundMgr.PlayEffectSound(GameDefine.AudioClips.Double_Up);
        };
        o.ShowAndSkipUpAnim = function () {
          this.SetActive(true);
          this.m_onDoubleUpAnimFinished = null;
          this.m_doubleUpAnim.play(this.DOUBLE_PLATE_UP_ANIM_NAME);
          var e = this.m_doubleUpAnim.getState(this.DOUBLE_PLATE_UP_ANIM_NAME);
          e.setTime(e.duration);
        };
        o.handleStartAnimFinished = function () {
          if (this.m_onDoubleUpAnimFinished) {
            this.m_onDoubleUpAnimFinished();
            this.m_onDoubleUpAnimFinished = null;
          }
          this.m_doubleUpAnim.off(Animation.EventType.FINISHED, this.handleStartAnimFinished, this);
          this.m_doubleUpAnim.play("FG_Reel_Loop");
        };
        o.Reset = function () {
          this.SetActive(false);
          this.m_doubleUpAnim.stop();
          this.m_doubleUpAnim.node.setPosition(this.m_originPos);
        };
        o.SetActive = function (e) {
          if (this.m_reelBG.active != e) {
            this.m_doublePlate.active = e;
            this.m_reelBG.active = e;
          }
        };
        return t;
      }(Component);
      _descriptor$a = _applyDecoratedDescriptor(_class2$c.prototype, "m_shake", [_dec2$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$7 = _applyDecoratedDescriptor(_class2$c.prototype, "m_doubleUpAnim", [_dec3$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$5 = _applyDecoratedDescriptor(_class2$c.prototype, "m_reelBG", [_dec4$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$4 = _applyDecoratedDescriptor(_class2$c.prototype, "m_doublePlate", [_dec5$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$3 = _applyDecoratedDescriptor(_class2$c.prototype, "m_doublePlateDust", [_dec6$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$g;
      var _dec2$b;
      var _dec3$8;
      var _dec4$6;
      var _class$g;
      var _class2$d;
      var _descriptor$b;
      var _descriptor2$8;
      var _descriptor3$6;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "da0854HuvVM+rLYcFjv9eWc", "FGAddRoundSpine", undefined);
      var ccclass$g = _decorator.ccclass;
      var property$b = _decorator.property;
      _dec$g = ccclass$g("FGAddRoundSpine");
      _dec2$b = property$b({
        type: Label
      });
      _dec3$8 = property$b({
        type: Node,
        tooltip: "一般情況下飛行的終點"
      });
      _dec4$6 = property$b({
        type: Node,
        tooltip: "GoldGame情況下飛行的終點"
      });
      _class2$d = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_addRoundLabel", _descriptor$b, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_normalFlyTarget", _descriptor2$8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_goldFlyTarget", _descriptor3$6, _assertThisInitialized(t));
          t.START_ANIM = "Start";
          t.LOOP_ANIM = "Loop";
          t.END_ANIM = "End";
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.SetAddRoundNumber = function (e) {
          this.m_addRoundLabel.string = e.toString();
        };
        o.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.START_ANIM);
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
        o.PlayLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    SpineKit.PlayAnimation(this.m_spine, this.LOOP_ANIM, true);
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
        o.PlayEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.END_ANIM, false, 0, function (e) {
                      if ("Fly_Start" == e) {
                        var i = t ? o.m_goldFlyTarget : o.m_normalFlyTarget;
                        var n = o.m_spine.findBone("HP_Fly");
                        var r = o.m_spine.node.getComponent(UITransform).convertToNodeSpaceAR(i.worldPosition);
                        tween(n).to(.3, {
                          x: r.x,
                          y: r.y
                        }).start();
                      }
                    });
                  case 3:
                    this.SetNodeActivity(false);
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
        return t;
      }(BaseSpine);
      _descriptor$b = _applyDecoratedDescriptor(_class2$d.prototype, "m_addRoundLabel", [_dec2$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$8 = _applyDecoratedDescriptor(_class2$d.prototype, "m_normalFlyTarget", [_dec3$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$6 = _applyDecoratedDescriptor(_class2$d.prototype, "m_goldFlyTarget", [_dec4$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FGAddRoundSpine = _dec$g(_class$g = _class2$d) || _class$g;
      var _dec$h;
      var _dec2$c;
      var _class2$e;
      var _descriptor$c;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "398b3OFzyFBlqgLLdc4rsOr", "FGAddRoundMgr", undefined);
      var ccclass$h = _decorator.ccclass;
      var property$c = _decorator.property;
      _dec$h = ccclass$h("FGAddRoundMgr");
      _dec2$c = property$c({
        type: FGAddRoundSpine
      });
      _class2$e = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_addFGRoundSpine", _descriptor$c, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_isGoldGame = false;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.Init = function (e) {
          this.m_gameView = e;
        };
        o.SetIsGoldGame = function (e) {
          this.m_isGoldGame = e;
        };
        o.ShowAddScatterAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.m_gameView.IsFreeGame) {
                      e.next = 11;
                      break;
                    }
                    if (!((t = this.m_gameView.RoundDataProvider.GetFGAddRound()) > 0)) {
                      e.next = 11;
                      break;
                    }
                    this.SetSymbolMaskActive(true);
                    e.next = 6;
                    return this.PlaySymbolAnim();
                  case 6:
                    e.next = 8;
                    return node$1.Wait(this.m_gameView, .5);
                  case 8:
                    e.next = 10;
                    return this.PlayAddRoundAnim(t);
                  case 10:
                    this.SetSymbolMaskActive(false);
                  case 11:
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
        o.PlaySymbolAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = [];
                    o = this.m_gameView.RoundDataProvider.GetPlateData(0);
                    t.push(this.m_gameView.EffectPlate.ShowScatterAnim(o));
                    if (this.m_gameView.RoundDataProvider.GetIsShowDoublePlate()) {
                      o = this.m_gameView.RoundDataProvider.GetPlateData(1);
                      t.push(this.m_gameView.EffectPlate_Double.ShowScatterAnim(o));
                    }
                    e.next = 7;
                    return Promise.all(t);
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
        o.PlayAddRoundAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_addFGRoundSpine.SetAddRoundNumber(t);
                    this.m_gameView.GameSoundMgr.PlayEffectSound(GameDefine.AudioClips.FreeSpin_Board);
                    e.next = 4;
                    return this.m_addFGRoundSpine.PlayStart();
                  case 4:
                    e.next = 6;
                    return node$1.Wait(this.m_gameView, 2);
                  case 6:
                    e.next = 8;
                    return this.m_addFGRoundSpine.PlayEnd(this.m_isGoldGame);
                  case 8:
                    o = this.m_gameView.RoundDataProvider.GetMaxFGRound();
                    this.m_gameView.FGTopBarMgr.SetMaxRoundNumber(o);
                    this.m_gameView.GameSoundMgr.PlayEffectSound(GameDefine.AudioClips.FreeSpin_Add);
                    e.next = 13;
                    return node$1.Wait(this.m_gameView, 1);
                  case 13:
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
        o.SetSymbolMaskActive = function (e) {
          this.m_gameView.SlotReels.SetMaskActive(e);
          if (this.m_gameView.RoundDataProvider.GetIsShowDoublePlate()) {
            this.m_gameView.SlotReels_Double.SetMaskActive(e);
          }
        };
        return t;
      }(Component);
      _descriptor$c = _applyDecoratedDescriptor(_class2$e.prototype, "m_addFGRoundSpine", [_dec2$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$i;
      var _dec2$d;
      var _dec3$9;
      var _dec4$7;
      var _class$i;
      var _class2$f;
      var _descriptor$d;
      var _descriptor2$9;
      var _descriptor3$7;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "cd412rmC8VIZLSNcTWilCfq", "TopGoldBarSpine", undefined);
      var ccclass$i = _decorator.ccclass;
      var property$d = _decorator.property;
      _dec$i = ccclass$i("TopGoldBarSpine");
      _dec2$d = property$d({
        type: sp.Skeleton,
        tooltip: "左邊野牛spine(黃金)"
      });
      _dec3$9 = property$d({
        type: sp.Skeleton,
        tooltip: "右邊野牛spine"
      });
      _dec4$7 = property$d({
        type: sp.Skeleton,
        tooltip: "4個Symbol的Spine"
      });
      _class2$f = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_goldBisonSpine", _descriptor$d, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_bisonSpine", _descriptor2$9, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_symbolSpine", _descriptor3$7, _assertThisInitialized(t));
          t.m_nowLevel = 0;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    SpineKit.PlayAnimation(this.m_goldBisonSpine, "Start");
                    SpineKit.PlayAnimation(this.m_bisonSpine, "Start");
                    for (t = 0; t < this.m_symbolSpine.length; t++) {
                      SpineKit.PlayAnimation(this.m_symbolSpine[t], "Start");
                    }
                    e.next = 6;
                    return SpineKit.PlayAnimation(this.m_spine, "Start");
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
        o.PlayIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    SpineKit.PlayAnimation(this.m_spine, "Idle");
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
        o.PlayClose = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_nowLevel = 0;
                    this.SetNodeActivity(true);
                    SpineKit.PlayAnimation(this.m_bisonSpine, "Close");
                    for (t = 0; t < this.m_symbolSpine.length; t++) {
                      SpineKit.PlayAnimation(this.m_symbolSpine[t], "Close");
                    }
                    e.next = 6;
                    return SpineKit.PlayAnimation(this.m_spine, "Close");
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
        o.PlayLv = function (e) {
          SpineKit.PlayAnimation(this.m_spine, "LV" + e, false);
        };
        o.PlayFull = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.PlaySymbolFull(t);
                    tween(this.node).delay(.5).call(function () {
                      o.PlayLv(t);
                    }).start();
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, "T2_Full", false, 1);
                  case 4:
                    this.m_nowLevel = t;
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
        o.PlayFullAndSkipAnim = function (e) {
          this.SetNodeActivity(true);
          this.PlayLv(e);
          this.PlaySymbolOpen(e);
        };
        o.PlayCollect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    for (o = 0; o < t + 1; o++) {
                      if (o >= this.m_nowLevel && o < this.m_symbolSpine.length) {
                        SpineKit.PlayAnimation(this.m_symbolSpine[o], "Collect");
                      }
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_goldBisonSpine, "Collect");
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
        o.PlaySymbolFull = function (e) {
          for (var t = 0; t < e; t++) {
            if (t >= this.m_nowLevel) {
              SpineKit.PlayAnimation(this.m_symbolSpine[t], "Full");
            }
          }
        };
        o.PlaySymbolOpen = function (e) {
          for (var t = 0; t < e + 1; t++) {
            SpineKit.PlayAnimation(this.m_symbolSpine[t], "Open");
          }
        };
        return t;
      }(BaseSpine);
      _descriptor$d = _applyDecoratedDescriptor(_class2$f.prototype, "m_goldBisonSpine", [_dec2$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$9 = _applyDecoratedDescriptor(_class2$f.prototype, "m_bisonSpine", [_dec3$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$7 = _applyDecoratedDescriptor(_class2$f.prototype, "m_symbolSpine", [_dec4$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var TopGoldBarSpine = _dec$i(_class$i = _class2$f) || _class$i;
      var _dec$j;
      var _dec2$e;
      var _dec3$a;
      var _class$j;
      var _class2$g;
      var _descriptor$e;
      var _descriptor2$a;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e21c2YYoTNO0aihw9G1HPBo", "GoldBarEnergyUnit", undefined);
      var ccclass$j = _decorator.ccclass;
      var property$e = _decorator.property;
      _dec$j = ccclass$j("GoldBarEnergySpine");
      _dec2$e = property$e({
        type: Animation
      });
      _dec3$a = property$e({
        type: Label
      });
      _class2$g = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_anim", _descriptor$e, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_numLabel", _descriptor2$a, _assertThisInitialized(t));
          t.IDLE_ANIM_NAME = "Idle";
          t.WIN_ANIM_NAME = "Win";
          t.WIN_IDLE_ANIM_NAME = "Win_Idle";
          t.m_isWin = false;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.PlayIdle = function () {
          this.m_anim.play(this.IDLE_ANIM_NAME);
        };
        o.PlayWin = function () {
          var e = this;
          return this.m_isWin ? Promise.resolve() : new Promise(function (t) {
            e.m_anim.play(e.WIN_ANIM_NAME);
            e.m_anim.on(Animation.EventType.FINISHED, function o() {
              e.m_anim.off(Animation.EventType.FINISHED, o, e);
              t();
              e.PlayWinIdle();
            }, e);
            e.m_isWin = true;
          });
        };
        o.GetIsWin = function () {
          return this.m_isWin;
        };
        o.Reset = function () {
          this.m_isWin = false;
        };
        o.PlayWinIdle = function () {
          this.m_anim.play(this.WIN_IDLE_ANIM_NAME);
        };
        o.SetNumber = function (e) {
          this.m_numLabel.forEach(function (t) {
            t.string = e.toFixed(0);
          });
        };
        return t;
      }(Component);
      _descriptor$e = _applyDecoratedDescriptor(_class2$g.prototype, "m_anim", [_dec2$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$a = _applyDecoratedDescriptor(_class2$g.prototype, "m_numLabel", [_dec3$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var GoldBarEnergyUnit = _dec$j(_class$j = _class2$g) || _class$j;
      var _dec$k;
      var _dec2$f;
      var _dec3$b;
      var _dec4$8;
      var _dec5$5;
      var _dec6$4;
      var _dec7$2;
      var _dec8$2;
      var _class2$h;
      var _descriptor$f;
      var _descriptor2$b;
      var _descriptor3$8;
      var _descriptor4$5;
      var _descriptor5$4;
      var _descriptor6$2;
      var _descriptor7$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "10aebHCX9xPM6c+Q/0YdXq1", "FGTopBarMgr", undefined);
      var ccclass$k = _decorator.ccclass;
      var property$f = _decorator.property;
      var eFGTopBarType;
      !function (e) {
        e[e.eNormal = 0] = "eNormal";
        e[e.eGold = 1] = "eGold";
      }(eFGTopBarType || (eFGTopBarType = {}));
      _dec$k = ccclass$k("FGTopScoreBarMgr");
      _dec2$f = property$f({
        type: Node
      });
      _dec3$b = property$f({
        type: Label
      });
      _dec4$8 = property$f({
        type: TopGoldBarSpine
      });
      _dec5$5 = property$f({
        type: GoldBarEnergyUnit
      });
      _dec6$4 = property$f({
        type: Prefab
      });
      _dec7$2 = property$f({
        type: ProgressBar
      });
      _dec8$2 = property$f({
        type: Animation
      });
      _class2$h = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_topScoreBar", _descriptor$f, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_scoreLabel", _descriptor2$b, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_topGoldBarSpine", _descriptor3$8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_goldBarEnergyUnit", _descriptor4$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_flySpinePrefab", _descriptor5$4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_energyBar", _descriptor6$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_topBarAnim", _descriptor7$2, _assertThisInitialized(t));
          t.m_currentLabel = null;
          t.m_roundNumber = 0;
          t.m_maxRoundNumber = 0;
          t.ORIGIN_MAX_NUMBER = 8;
          t.m_type = eFGTopBarType.eNormal;
          t.ENERGY_LEVEL_LIST = [4, 3, 6, 3];
          t.MAX_ENERGY_LEVEL = 16;
          t.m_gameView = null;
          t.m_currentGoldFullLevel = 0;
          t.m_currentEnergyAmount = 0;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.Init = function (e) {
          this.m_maxRoundNumber = this.ORIGIN_MAX_NUMBER;
          this.m_gameView = e;
          NodeObjPool.GetInstance().SetPrefabData("CollectBar_Fly", this.m_flySpinePrefab);
          for (var t = 0; t < this.m_goldBarEnergyUnit.length; t++) {
            this.m_goldBarEnergyUnit[t].SetNumber(this.ENERGY_LEVEL_LIST[t]);
          }
        };
        o.SetTopBarType = function (e) {
          this.m_type = e;
          var t = e == eFGTopBarType.eGold;
          this.m_topScoreBar[eFGTopBarType.eNormal].active = !t;
          this.m_topScoreBar[eFGTopBarType.eGold].active = t;
          this.m_currentLabel = this.m_scoreLabel[e];
          this.UpdateNumber();
        };
        o.SetRoundNumber = function (e) {
          this.m_roundNumber = e;
          this.UpdateNumber();
        };
        o.SetMaxRoundNumber = function (e) {
          if (this.m_maxRoundNumber != e) {
            this.m_maxRoundNumber = e;
            this.PlayAddMaxRoundAnim();
          }
        };
        o.PlayAddMaxRoundAnim = function () {
          if (this.m_gameView.RoundDataProvider.GetHasGoldGame()) {
            this.m_topBarAnim.play("FG_Reel_Plus_Gold");
          } else {
            this.m_topBarAnim.play("FG_Reel_Plus");
          }
        };
        o.UpdateNumber = function () {
          if (this.m_currentLabel) {
            var e = this.m_maxRoundNumber - this.m_roundNumber;
            this.m_currentLabel.string = e.toString().padStart(2, "0") + "/" + this.m_maxRoundNumber.toString().padStart(2, "0");
          }
        };
        o.Reset = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_roundNumber = 0;
                    this.m_currentGoldFullLevel = 0;
                    this.m_currentEnergyAmount = 0;
                    this.m_maxRoundNumber = this.ORIGIN_MAX_NUMBER;
                    e.next = 6;
                    return this.CloseGoldSpine();
                  case 6:
                    this.m_topScoreBar.forEach(function (e) {
                      e.active = false;
                    });
                    this.m_type;
                    eFGTopBarType.eNormal;
                    this.m_goldBarEnergyUnit.forEach(function (e, o) {
                      e.Reset();
                      e.SetNumber(t.ENERGY_LEVEL_LIST[o]);
                    });
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
        o.PlayGoldBarStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_topGoldBarSpine.PlayStart();
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
        o.PlayGoldBarIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_topGoldBarSpine.PlayIdle();
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
        o.TryPlayGoldCollect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var o;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!(t != this.m_currentEnergyAmount && this.MAX_ENERGY_LEVEL > this.m_currentEnergyAmount)) {
                      e.next = 10;
                      break;
                    }
                    o = this.GetCollectLevel(t);
                    e.next = 4;
                    return this.m_topGoldBarSpine.PlayCollect(o);
                  case 4:
                    i = this.GetGoldLevel(t);
                    this.UpdateEnergyBar(t, i);
                    this.UpdateEneryUnit(t, i);
                    this.m_currentEnergyAmount = t;
                    e.next = 10;
                    return node$1.Wait(this, .5);
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
        o.UpdateEnergyBar = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o) {
            var i;
            var n;
            var r;
            var a;
            var s;
            var l;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!(o >= this.ENERGY_LEVEL_LIST.length)) {
                      e.next = 3;
                      break;
                    }
                    this.m_energyBar.progress = 1;
                    return e.abrupt("return");
                  case 3:
                    i = this.ENERGY_LEVEL_LIST.slice(0, o).reduce(function (e, t) {
                      return e + t;
                    }, 0);
                    n = i;
                    r = i + this.ENERGY_LEVEL_LIST[o];
                    t = Math.min(t, r);
                    a = (t - n) / (r - n);
                    s = 1 / this.ENERGY_LEVEL_LIST.length;
                    l = o * s + a * s;
                    this.m_energyBar.progress = Math.min(l, 1);
                  case 11:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o) {
            return e.apply(this, arguments);
          };
        }();
        o.UpdateEneryUnit = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o) {
            var i;
            var n;
            var r;
            var a;
            var s;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = 0;
                    n = this.m_goldBarEnergyUnit.length - 1;
                    r = Math.min(o, n);
                    for (a = 0; a <= r; a++) {
                      i += this.ENERGY_LEVEL_LIST[a];
                      if ((s = i - t) <= 0) {
                        if (!this.m_goldBarEnergyUnit[a].GetIsWin()) {
                          this.m_goldBarEnergyUnit[a].SetNumber(0);
                          this.m_goldBarEnergyUnit[a].PlayWin();
                        }
                      } else {
                        this.m_goldBarEnergyUnit[a].SetNumber(s);
                      }
                    }
                  case 4:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o) {
            return e.apply(this, arguments);
          };
        }();
        o.GetGoldLevel = function (e) {
          var t = 0;
          for (var o = 0; o < this.ENERGY_LEVEL_LIST.length; o++) {
            if (e < (t += this.ENERGY_LEVEL_LIST[o])) {
              return o;
            }
            if (e >= this.MAX_ENERGY_LEVEL) {
              return 4;
            }
          }
          return this.ENERGY_LEVEL_LIST.length - 1;
        };
        o.GetCollectLevel = function (e) {
          var t = 0;
          for (var o = 0; o < this.ENERGY_LEVEL_LIST.length; o++) {
            if (e <= (t += this.ENERGY_LEVEL_LIST[o])) {
              return o;
            }
          }
          return this.ENERGY_LEVEL_LIST.length - 1;
        };
        o.TryPlayGoldFullAnim = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = this.GetGoldLevel(t);
                    if (this.m_currentGoldFullLevel == i) {
                      e.next = 7;
                      break;
                    }
                    this.m_gameView.GameSoundMgr.PlayGlodBuffaloFullSound(i);
                    e.next = 5;
                    return this.m_topGoldBarSpine.PlayFull(i);
                  case 5:
                    this.m_currentGoldFullLevel = i;
                    if (o) {
                      o();
                    }
                  case 7:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o) {
            return e.apply(this, arguments);
          };
        }();
        o.CloseGoldSpine = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_type != eFGTopBarType.eGold) {
                      e.next = 4;
                      break;
                    }
                    this.m_topGoldBarSpine.PlayClose();
                    e.next = 4;
                    return this.CloseAllGoldEnergy();
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
        o.CloseAllGoldEnergy = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = [];
                    for (o = 0; o < this.m_goldBarEnergyUnit.length; o++) {
                      t.push(this.m_goldBarEnergyUnit[o].PlayIdle());
                    }
                    this.m_currentEnergyAmount = 0;
                    this.m_energyBar.progress = 0;
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
        o.RemoveChangeSymbolAnim = function (e) {
          var t = this.GetNeedChangeSymbolIdx();
          e.UpdateRandomSymbolWeight(t);
          if (4 == t.length) {
            e.UpdateRandomSymbolWeight([SymbolType.GOLD_BUFFALO]);
          }
        };
        o.GetNeedChangeSymbolIdx = function () {
          var e = [SymbolType.EAGLE, SymbolType.BEAR, SymbolType.WOLF, SymbolType.DEER];
          return this.m_currentGoldFullLevel > 0 && this.m_currentGoldFullLevel <= e.length ? e.slice(0, this.m_currentGoldFullLevel).reverse() : (console.error("Gold Level錯誤! "), []);
        };
        o.SetCurrentEneryWithoutAnim = function (e) {
          if (this.MAX_ENERGY_LEVEL < e) {
            e = this.MAX_ENERGY_LEVEL;
          }
          var t = this.GetGoldLevel(e);
          this.UpdateEnergyBar(e, t);
          this.UpdateEneryUnit(e, t);
          this.m_currentEnergyAmount = e;
        };
        o.SetCurrentGoldFullLevelWithoutAnim = function (e) {
          var t = this.GetGoldLevel(e);
          if (this.m_currentGoldFullLevel != t) {
            this.m_gameView.GameSoundMgr.PlayGlodBuffaloFullSound(t);
            this.m_topGoldBarSpine.PlayFullAndSkipAnim(t);
            this.m_currentGoldFullLevel = t;
            this.RemoveChangeSymbolAnim(this.m_gameView.SlotReels);
            this.RemoveChangeSymbolAnim(this.m_gameView.SlotReels_Double);
          } else {
            this.PlayGoldBarIdle();
          }
        };
        _createClass(t, [{
          key: "TopScoreBar",
          get: function () {
            return this.m_topScoreBar;
          }
        }]);
        return t;
      }(Component);
      _descriptor$f = _applyDecoratedDescriptor(_class2$h.prototype, "m_topScoreBar", [_dec2$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$b = _applyDecoratedDescriptor(_class2$h.prototype, "m_scoreLabel", [_dec3$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$8 = _applyDecoratedDescriptor(_class2$h.prototype, "m_topGoldBarSpine", [_dec4$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$5 = _applyDecoratedDescriptor(_class2$h.prototype, "m_goldBarEnergyUnit", [_dec5$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor5$4 = _applyDecoratedDescriptor(_class2$h.prototype, "m_flySpinePrefab", [_dec6$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor6$2 = _applyDecoratedDescriptor(_class2$h.prototype, "m_energyBar", [_dec7$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor7$2 = _applyDecoratedDescriptor(_class2$h.prototype, "m_topBarAnim", [_dec8$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$l;
      var _dec2$g;
      var _class$l;
      var _class2$i;
      var _descriptor$g;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c0fe2IHCTxD8bmIfWCv7LWb", "FGTransformSpine", undefined);
      var ccclass$l = _decorator.ccclass;
      var property$g = _decorator.property;
      _dec$l = ccclass$l("FGTransformSpine");
      _dec2$g = property$g({
        type: sp.Skeleton
      });
      _class2$i = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_triLuckSpine", _descriptor$g, _assertThisInitialized(t));
          t.START_ANIM = "Start";
          t.LOOP_ANIM = "Loop";
          t.END_ANIM = "End";
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    this.PlayTriLuckSpin();
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, this.START_ANIM);
                  case 4:
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
        o.PlayLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    SpineKit.PlayAnimation(this.m_spine, this.LOOP_ANIM, true);
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
        o.PlayEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    SpineKit.PlayAnimation(this.m_triLuckSpine, this.END_ANIM);
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, this.END_ANIM);
                  case 4:
                    this.m_triLuckSpine.node.active = false;
                    this.SetNodeActivity(false);
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
        o.PlayTriLuckSpin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return node$1.Wait(this, 2);
                  case 2:
                    this.m_triLuckSpine.node.active = true;
                    e.next = 5;
                    return SpineKit.PlayAnimation(this.m_triLuckSpine, this.START_ANIM);
                  case 5:
                    SpineKit.PlayAnimation(this.m_triLuckSpine, this.LOOP_ANIM, true);
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
        return t;
      }(BaseSpine);
      _descriptor$g = _applyDecoratedDescriptor(_class2$i.prototype, "m_triLuckSpine", [_dec2$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FGTransformSpine = _dec$l(_class$l = _class2$i) || _class$l;
      var _dec$m;
      var _class$m;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3d6e7u9FE9ISLf5tiTdsOAi", "RunScoreTool", undefined);
      var ccclass$m = _decorator.ccclass;
      _dec$m = ccclass$m("RunScoreTool");
      var RunScoreTool = _dec$m(_class$m = function () {
        function e() {
          this.currentTween = null;
          this.targetScore = 0;
        }
        var t = e.prototype;
        t.RunScore = function (e, t, o, i, n) {
          var r = this;
          if (undefined === n) {
            n = 2;
          }
          this.targetScore = o;
          return new Promise(function (a, s) {
            if (!e) {
              console.error("Label is not assigned or not found!");
              return void s(new Error("Label is not assigned or not found!"));
            }
            e.string = t.toFixed(n);
            var l = {
              score: t
            };
            r.currentTween = tween(l).to(i, {
              score: o
            }, {
              onUpdate: function () {
                e.string = l.score.toFixed(n);
              }
            }).call(function () {
              r.currentTween = null;
              a();
            }).start();
          });
        };
        t.Skip = function (e) {
          if (this.currentTween) {
            this.currentTween.stop();
            this.currentTween = null;
          }
          e.string = this.targetScore.toFixed(2);
        };
        return e;
      }()) || _class$m;
      var _dec$n;
      var _dec2$h;
      var _dec3$c;
      var _class$n;
      var _class2$j;
      var _descriptor$h;
      var _descriptor2$c;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5f2f37vSg5O0p/the0zggss", "FGComplimentSpine", undefined);
      var ccclass$n = _decorator.ccclass;
      var property$h = _decorator.property;
      _dec$n = ccclass$n("FGComplimentSpine");
      _dec2$h = property$h({
        type: Label
      });
      _dec3$c = property$h({
        type: Label
      });
      _class2$j = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_fgTotalRoundLabel", _descriptor$h, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgWinScore", _descriptor2$c, _assertThisInitialized(t));
          t.START_ANIM = "Start";
          t.LOOP_ANIM = "Loop";
          t.END_ANIM = "End";
          t.m_runScoreTool = new RunScoreTool();
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.SetTotalRoundNumber = function (e) {
          this.m_fgTotalRoundLabel.string = e.toString();
        };
        o.SetWinScore = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_runScoreTool.RunScore(this.m_fgWinScore, 0, t, o, 2);
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o) {
            return e.apply(this, arguments);
          };
        }();
        o.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.START_ANIM);
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
        o.GetStopRunScoreTime = function () {
          this.SetNodeActivity(true);
          return node.GetSpineEventTime(this.m_spine, this.START_ANIM, "ScoreStop");
        };
        o.PlayLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    SpineKit.PlayAnimation(this.m_spine, this.LOOP_ANIM, true);
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
        o.PlayEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetNodeActivity(true);
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, this.END_ANIM);
                  case 3:
                    this.SetNodeActivity(false);
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
        o.Skip = function () {
          this.m_runScoreTool.Skip(this.m_fgWinScore);
        };
        return t;
      }(BaseSpine);
      _descriptor$h = _applyDecoratedDescriptor(_class2$j.prototype, "m_fgTotalRoundLabel", [_dec2$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$c = _applyDecoratedDescriptor(_class2$j.prototype, "m_fgWinScore", [_dec3$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FGComplimentSpine = _dec$n(_class$n = _class2$j) || _class$n;
      var _dec$o;
      var _class$o;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "7ea92yuY55LAoH00CoGaaF0", "NodeFadeTool", undefined);
      var ccclass$o = _decorator.ccclass;
      _dec$o = ccclass$o("NodeFadeTool");
      var NodeFadeTool = _dec$o(_class$o = function () {
        function e() {}
        e.prototype.DoFade = function (e, t, o) {
          return new Promise(function (i) {
            var n = e.getComponent(UIOpacity);
            if (!n) {
              n = e.addComponent(UIOpacity);
            }
            tween(n).to(o, {
              opacity: t
            }, {
              easing: "smooth"
            }).call(function () {
              i();
            }).start();
          });
        };
        return e;
      }()) || _class$o;
      var _dec$p;
      var _dec2$i;
      var _dec3$d;
      var _class2$k;
      var _descriptor$i;
      var _descriptor2$d;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "84867apYdVDCbJApe3UH5mD", "FGTransformView", undefined);
      var ccclass$p = _decorator.ccclass;
      var property$i = _decorator.property;
      var eAnimLevel;
      !function (e) {
        e[e.Level0 = 0] = "Level0";
        e[e.Level1 = 1] = "Level1";
        e[e.Level2 = 2] = "Level2";
      }(eAnimLevel || (eAnimLevel = {}));
      _dec$p = ccclass$p("FGTransformView");
      _dec2$i = property$i({
        type: FGTransformSpine
      });
      _dec3$d = property$i({
        type: FGComplimentSpine
      });
      _class2$k = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          (t = e.call.apply(e, [this].concat(i)) || this).m_DefaultSkinName = ["default", "Double", "Gold", "Cash", "Double_Gold", "Double_Cash", "Gold_Cash", "default", "default"];
          _initializerDefineProperty(t, "m_transformSpine", _descriptor$i, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgComplimentSpine", _descriptor2$d, _assertThisInitialized(t));
          t.m_targetSpine = null;
          t.m_fadeTool = new NodeFadeTool();
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.Init = function (e) {
          this.m_gameView = e;
        };
        o.PlayEnterFG = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetEnterFGTargetSpine(t);
                    this.SetEnterFGSkin(t);
                    e.next = 4;
                    return this.m_targetSpine.PlayStart();
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
        o.PlayEnterFGEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_targetSpine.PlayEnd();
                  case 2:
                    this.m_targetSpine = null;
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
        o.SetEnterFGTargetSpine = function (e) {
          switch (e) {
            case FGGameType_From_API.DoubleUp:
            case FGGameType_From_API.Gold:
            case FGGameType_From_API.Cash:
              this.m_targetSpine = this.m_transformSpine[eAnimLevel.Level0];
              break;
            case FGGameType_From_API.Double_Gold:
            case FGGameType_From_API.Double_Cash:
            case FGGameType_From_API.Gold_Cash:
              this.m_targetSpine = this.m_transformSpine[eAnimLevel.Level1];
              break;
            case FGGameType_From_API.Double_Gold_Cash_Super:
            case FGGameType_From_API.Double_Gold_Cash:
              this.m_targetSpine = this.m_transformSpine[eAnimLevel.Level2];
          }
        };
        o.SetEnterFGSkin = function (e) {
          if (this.m_targetSpine) {
            this.m_targetSpine.SetNodeActivity(true);
            this.m_targetSpine.SetSkin(this.m_DefaultSkinName[e]);
          } else {
            console.error("錯誤 targetSpine不可為空");
          }
        };
        o.PlayExitFG = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o) {
            var i;
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = [];
                    n = this.m_fgComplimentSpine.GetStopRunScoreTime();
                    this.m_fgComplimentSpine.SetTotalRoundNumber(t);
                    i.push(this.m_fgComplimentSpine.PlayStart());
                    i.push(this.m_fgComplimentSpine.SetWinScore(o, n));
                    e.next = 7;
                    return Promise.all(i);
                  case 7:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o) {
            return e.apply(this, arguments);
          };
        }();
        o.PlayExitEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.m_fgComplimentSpine.PlayEnd();
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
        o.SetCharacterActive = function (e) {
          var t = this.m_gameView.CharacterSpine.node;
          t.active = !!e;
        };
        return t;
      }(Component);
      _descriptor$i = _applyDecoratedDescriptor(_class2$k.prototype, "m_transformSpine", [_dec2$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$d = _applyDecoratedDescriptor(_class2$k.prototype, "m_fgComplimentSpine", [_dec3$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$q;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2c89eukKnFAfZVziZKr7wvE", "FeatureGameView", undefined);
      var ccclass$q = _decorator.ccclass;
      _dec$q = ccclass$q("FeatureGameView");
      var _dec$r;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f745froIhFGyLnG7MXW7tT8", "GameSoundMgr", undefined);
      var ccclass$r = _decorator.ccclass;
      _dec$r = ccclass$r("GameSoundMgr");
      var _dec$s;
      var _dec2$j;
      var _dec3$e;
      var _dec4$9;
      var _dec5$6;
      var _descriptor$j;
      var _descriptor2$e;
      var _descriptor3$9;
      var _descriptor4$6;
      var _descriptor5$5;
      var _class3;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "77acaFcNgVDULwRQEtO5wYa", "BigWinComponent", undefined);
      var BigWinAnimName = {
        Big: {
          Start: "BigWin_Start",
          End: "BigWin_End"
        },
        Mega: {
          Start: "MegaWin_Start",
          End: "MegaWin_End"
        },
        Super: {
          Start: "SuperWin_Start",
          End: "SuperWin_End"
        }
      };
      var property$j = _decorator.property;
      _dec$s = property$j({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _dec2$j = property$j({
        type: sp.Skeleton,
        tooltip: "遮罩"
      });
      _dec3$e = property$j({
        type: sp.Skeleton,
        tooltip: "Extra Spine"
      });
      _dec4$9 = property$j({
        type: Label,
        tooltip: "贏分"
      });
      _dec5$6 = property$j({
        type: CCFloat,
        tooltip: "End extra effect delay time"
      });
      _class3 = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$j, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_maskSpine", _descriptor2$e, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_extraSpine", _descriptor3$9, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_winLabel", _descriptor4$6, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_endExtraDelayTime", _descriptor5$5, _assertThisInitialized(t));
          t.m_isEnd = true;
          t.m_isShowEnd = true;
          t.m_isShowAward = false;
          t.m_eventCb = null;
          t.m_showValueCb = null;
          t.m_cancelCb = null;
          t.m_lvl = 0;
          t.m_nowLvl = 0;
          t.m_win = 0;
          t.m_showWin = 0;
          t.m_step = 0;
          t.m_isShowingExtraEnd = false;
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.update = function (e) {
          if (this.m_isShowAward) {
            this.m_showWin += this.m_step * e;
            if (this.m_showWin >= this.m_win) {
              this.m_showWin = this.m_win;
              this.m_isShowAward = false;
            }
            this.m_winLabel.string = node.FormatNumberThousands(node.strip(this.m_showValueCb ? this.m_showValueCb(this.m_showWin) : this.m_showWin), node.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }
        };
        o.Init = function (e, t) {
          this.m_eventCb = e;
          this.m_showValueCb = t;
          if (this.m_maskSpine) {
            this.m_maskSpine.node.active = false;
          }
        };
        o.Show = function (e, o, i) {
          if (undefined === i) {
            i = true;
          }
          if (e > 0 && o > t.Level.NONE && o <= t.Level.SUPER) {
            this.m_isEnd = false;
            this.m_lvl = o;
            this.m_nowLvl = i ? 0 : o - 1;
            this.m_win = e;
            this.m_showWin = 0;
            this.m_winLabel.string = "0";
            this.m_isShowEnd = false;
            var n = 0;
            for (var r = i ? t.Level.BIG : this.m_lvl; r <= this.m_lvl; r++) {
              var a = "";
              var s = "";
              switch (r) {
                case t.Level.BIG:
                  a = BigWinAnimName.Big.Start;
                  s = BigWinAnimName.Big.End;
                  break;
                case t.Level.MEGA:
                  a = BigWinAnimName.Mega.Start;
                  s = BigWinAnimName.Mega.End;
                  break;
                case t.Level.SUPER:
                  a = BigWinAnimName.Super.Start;
                  s = BigWinAnimName.Super.End;
              }
              if ("" !== a && "" !== s) {
                var l = this.m_spine.findAnimation(a);
                if (l) {
                  n += l.duration;
                }
              }
            }
            this.m_step = node.divide(this.m_win, n || 5);
            this.m_isShowAward = true;
            if (this.m_maskSpine) {
              this.m_maskSpine.node.active = true;
              this.PlayAnimation(this.m_maskSpine, "BigWin_Start");
            }
            this.ShowNext();
          }
        };
        o.Stop = function () {
          if (!this.m_isShowEnd) {
            if (this.m_cancelCb) {
              this.m_cancelCb();
            }
            this.ShowEnd();
          }
        };
        o.SetSkin = function (e) {
          this.m_spine.setSkin(e);
        };
        o.ShowNext = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_nowLvl !== this.m_lvl) {
                      e.next = 4;
                      break;
                    }
                    this.ShowEnd();
                    e.next = 23;
                    break;
                  case 4:
                    this.m_nowLvl++;
                    o = false;
                    e.t0 = this.m_nowLvl;
                    e.next = e.t0 === t.Level.BIG ? 9 : e.t0 === t.Level.MEGA ? 14 : e.t0 === t.Level.SUPER ? 18 : 22;
                    break;
                  case 9:
                    this.CheckExtraSpineStart();
                    e.next = 12;
                    return this.PlayAnimation(this.m_spine, BigWinAnimName.Big.Start);
                  case 12:
                    o = e.sent;
                    return e.abrupt("break", 22);
                  case 14:
                    e.next = 16;
                    return this.PlayAnimation(this.m_spine, BigWinAnimName.Mega.Start);
                  case 16:
                    o = e.sent;
                    return e.abrupt("break", 22);
                  case 18:
                    e.next = 20;
                    return this.PlayAnimation(this.m_spine, BigWinAnimName.Super.Start);
                  case 20:
                    o = e.sent;
                    return e.abrupt("break", 22);
                  case 22:
                    if (!o) {
                      this.ShowNext();
                    }
                  case 23:
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
        o.ShowEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!this.m_isShowEnd) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    this.m_isShowEnd = true;
                    this.m_isShowAward = false;
                    this.m_winLabel.string = node.FormatNumberThousands(node.strip(this.m_showValueCb ? this.m_showValueCb(this.m_win) : this.m_win), node.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    if (this.m_maskSpine) {
                      this.PlayAnimation(this.m_maskSpine, "BigWin_End");
                    }
                    o = "";
                    e.t0 = this.m_lvl;
                    e.next = e.t0 === t.Level.BIG ? 10 : e.t0 === t.Level.MEGA ? 12 : e.t0 === t.Level.SUPER ? 14 : 16;
                    break;
                  case 10:
                    o = BigWinAnimName.Big.End;
                    return e.abrupt("break", 16);
                  case 12:
                    o = BigWinAnimName.Mega.End;
                    return e.abrupt("break", 16);
                  case 14:
                    o = BigWinAnimName.Super.End;
                    return e.abrupt("break", 16);
                  case 16:
                    if ("" === o) {
                      e.next = 21;
                      break;
                    }
                    e.next = 19;
                    return Promise.all([this.CheckExtraSpineEnd(), this.PlayAnimation(this.m_spine, o)]);
                  case 19:
                    e.next = 22;
                    break;
                  case 21:
                    console.error("BigWinComponent ShowEnd animName is empty!", this.m_lvl);
                  case 22:
                    if (this.m_maskSpine) {
                      this.m_maskSpine.node.active = false;
                    }
                    this.m_isEnd = true;
                  case 24:
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
        o.CheckExtraSpineStart = function () {
          var e = this;
          if (this.m_extraSpine) {
            this.m_extraSpine.node.active = true;
            this.PlayAnimation(this.m_extraSpine, "Start").then(function () {
              if (!e.m_isShowingExtraEnd) {
                e.PlayAnimation(e.m_extraSpine, "Loop", true);
              }
            });
          }
        };
        o.CheckExtraSpineEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_extraSpine) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    this.m_isShowingExtraEnd = true;
                    e.next = 5;
                    return node$1.Wait(this, this.m_endExtraDelayTime);
                  case 5:
                    e.next = 7;
                    return this.PlayAnimation(this.m_extraSpine, "End");
                  case 7:
                    this.m_isShowingExtraEnd = false;
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
        o.PlayAnimation = function (e, t, o, i) {
          var n = this;
          if (undefined === o) {
            o = false;
          }
          if (undefined === i) {
            i = 0;
          }
          return new Promise(function (r) {
            var a = false;
            n.m_cancelCb = function () {
              r(a = true);
            };
            e.clearTrack(i);
            e.setToSetupPose();
            var s = e.setAnimation(i, t, o);
            var l = function () {
              n.m_cancelCb = null;
              r(a);
            };
            if (s) {
              e.setTrackEventListener(s, function (e, o) {
                var i = o.data.name;
                var r = o.stringValue;
                if (n.m_eventCb) {
                  n.m_eventCb(i, r, t);
                }
              });
              e.setTrackCompleteListener(s, function () {
                e.setTrackCompleteListener(s, function () {});
                l();
              });
            } else {
              e.setCompleteListener(function () {
                e.setCompleteListener(null);
                l();
              });
            }
          });
        };
        _createClass(t, [{
          key: "IsEnd",
          get: function () {
            return this.m_isEnd;
          },
          set: function (e) {
            this.m_isEnd = e;
          }
        }]);
        return t;
      }(Component);
      _class3.Level = {
        NONE: 0,
        BIG: 1,
        MEGA: 2,
        SUPER: 3
      };
      _descriptor$j = _applyDecoratedDescriptor(_class3.prototype, "m_spine", [_dec$s], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$e = _applyDecoratedDescriptor(_class3.prototype, "m_maskSpine", [_dec2$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$9 = _applyDecoratedDescriptor(_class3.prototype, "m_extraSpine", [_dec3$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$6 = _applyDecoratedDescriptor(_class3.prototype, "m_winLabel", [_dec4$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$5 = _applyDecoratedDescriptor(_class3.prototype, "m_endExtraDelayTime", [_dec5$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.5;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8b4d9krL8pPYrZFxS6hwpSC", "WinShowMgr", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a31c7dbiyxE4byvGOS5sUOc", "AwardState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6617cTCk9FJ8JmBw2o/TdH0", "CheckState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3aa62UlZidAn5ylD0jUSp6k", "EnterFreeGameState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ef3bdvDggJKlowr/QHSAty4", "FGEffectAfterAwardState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3c945D+YFVOFIplDb3Oc+nN", "FGEffectState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2d463UfcgBA8IZJ+fvwoFbH", "FGReadyState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "71372DLVwNCM4gQ3NJR1ffN", "LeaveFreeState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1f83bXTPtJP16vGQbJFLF34", "FeatrueShowState", undefined);
      var MAX_DEFINE;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "34d81gQVlJAaJJHg6IUTjH6", "TimeBool", undefined);
      (function (e) {
        e[e.MAX_UINT = 4294967295] = "MAX_UINT";
        e[e.MAX_UINT64 = 0x10000000000000000] = "MAX_UINT64";
        e[e.MAX_INT = -1] = "MAX_INT";
        e[e.MIN_INT = 0] = "MIN_INT";
      })(MAX_DEFINE || (MAX_DEFINE = {}));
      var _dec$B;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5cd11K4+Y1DBJ0WZfuiBSee", "Common_IdleState", undefined);
      var ccclass$B = _decorator.ccclass;
      _dec$B = ccclass$B("Common_IdleState");
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "9099fuoIOdA/qc/GkvbZ7rH", "GroupNode", undefined);
      var SizeMode;
      var PositionMode;
      var ScaleMode;
      var ColorMode;
      !function (e) {
        e[e.WIDTH = 1] = "WIDTH";
        e[e.HEIGHT = 2] = "HEIGHT";
        e[e.BOTH = 3] = "BOTH";
      }(SizeMode || (SizeMode = {}));
      (function (e) {
        e[e.X = 1] = "X";
        e[e.Y = 2] = "Y";
        e[e.BOTH = 3] = "BOTH";
      })(PositionMode || (PositionMode = {}));
      (function (e) {
        e[e.X = 1] = "X";
        e[e.Y = 2] = "Y";
        e[e.BOTH = 3] = "BOTH";
      })(ScaleMode || (ScaleMode = {}));
      (function (e) {
        e[e.R = 1] = "R";
        e[e.G = 2] = "G";
        e[e.B = 4] = "B";
        e[e.RGB = 7] = "RGB";
        e[e.A = 8] = "A";
        e[e.RGBA = 15] = "RGBA";
      })(ColorMode || (ColorMode = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0c18bO40hVJB4/zzDByb8vr", "ManualComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1d950BFoN5LhJJ79uyt+/E+", "MarqueeComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "93417uqlh9Fm6TH2poz4GO4", "NearWinEffectComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", "SloganComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c6e0eKOKjtNwJBDq/hJOYgn", "index", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "905aec9uzpCgYE2XEfTOoic", "IdleState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4dbc6WJbz5OiropmbfvKFEn", "RoundEndState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0a6c3z9FNZONKtFKI7dnCUb", "RoundShowEndState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5043284sTdP3b9v6cLxmema", "ShowIntroState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "48646IOEWNJwoNvByQuq1bY", "SpinState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b330bfmWF9FyahCOfjoR7Tf", "UnshowPrepareState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "7954a2IMzBKN5M0a6g9hH2s", "WaitReadyState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "af713D+c1NICKfyo6jgo/9Q", "WaitResState", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "139135qziJDNLGkbAuWUodE", "RoundDataProvider", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "7bc08klWIRP4oTCqcaaqDqF", "IntroSpine", undefined);
      cclegacy._RF.pop();
      var CjsLoader = function () {
        function e() {
          this._registry = {};
          this._moduleCache = {};
        }
        var t = e.prototype;
        t.define = function (e, t, o) {
          this._registry[e] = {
            factory: t,
            resolveMap: o
          };
        };
        t.require = function (e) {
          return this._require(e);
        };
        t.throwInvalidWrapper = function (e, t) {
          throw new Error("Module '" + e + "' imported from '" + t + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        t._require = function (e, t) {
          var o = this._moduleCache[e];
          if (o) {
            return o.exports;
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
          var o;
          var i;
          return e in cjsInfos ? e : t && null != (o = null == (i = cjsInfos[t]) ? undefined : i.resolveCache[e]) ? o : undefined;
        };
        t._tryModuleLoad = function (e, t) {
          var o = true;
          try {
            this._load(e, t);
            o = false;
          } finally {
            if (o) {
              delete this._moduleCache[t];
            }
          }
        };
        t._load = function (e, t) {
          var o = this._loadWrapper(t);
          var i = o.factory;
          var n = o.resolveMap;
          var r = this._createRequire(e);
          var a = n ? this._createRequireWithResolveMap("function" == typeof n ? n() : n, r) : r;
          i(e.exports, a, e);
        };
        t._loadWrapper = function (e) {
          return e in this._registry ? this._registry[e] : this._loadHostProvidedModules(e);
        };
        t._loadHostProvidedModules = function (e) {
          return {
            factory: function (t, o, i) {
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
          return function (o) {
            return t._require(o, e);
          };
        };
        t._createRequireWithResolveMap = function (e, t) {
          return function (o) {
            var i = e[o];
            if (i) {
              return t(i);
            }
            throw new Error("Unresolved specifier " + o);
          };
        };
        t._throwUnresolved = function (e, t) {
          throw new Error("Unable to resolve " + e + " from " + parent + ".");
        };
        return e;
      }();
      var loader = new CjsLoader();
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (e, t, o, i, n) {
        o.exports = function (e, t) {
          var o = new Array(arguments.length - 1);
          var i = 0;
          var n = 2;
          var r = true;
          for (; n < arguments.length;) {
            o[i++] = arguments[n++];
          }
          return new Promise(function (n, a) {
            o[i] = function (e) {
              if (r) {
                r = false;
                if (e) {
                  a(e);
                } else {
                  var t = new Array(arguments.length - 1);
                  for (var o = 0; o < t.length;) {
                    t[o++] = arguments[o];
                  }
                  n.apply(null, t);
                }
              }
            };
            try {
              e.apply(t || null, o);
            } catch (e) {
              if (r) {
                r = false;
                a(e);
              }
            }
          });
        };
        o.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (e, t, o, i, n) {
        e.length = function (e) {
          var t = e.length;
          if (!t) {
            return 0;
          }
          for (var o = 0; --t % 4 > 1 && "=" === e.charAt(t);) {
            ++o;
          }
          return Math.ceil(3 * e.length) / 4 - o;
        };
        var a = new Array(64);
        var s = new Array(123);
        for (var l = 0; l < 64;) {
          s[a[l] = l < 26 ? l + 65 : l < 52 ? l + 71 : l < 62 ? l - 4 : l - 59 | 43] = l++;
        }
        e.encode = function (e, t, o) {
          var i;
          var n = null;
          var r = [];
          var s = 0;
          for (var l = 0; t < o;) {
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
              (n || (n = [])).push(String.fromCharCode.apply(String, r));
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
          return n ? (s && n.push(String.fromCharCode.apply(String, r.slice(0, s))), n.join("")) : String.fromCharCode.apply(String, r.slice(0, s));
        };
        e.decode = function (e, t, o) {
          var i;
          var n = o;
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
                t[o++] = i << 2 | (48 & l) >> 4;
                i = l;
                r = 2;
                break;
              case 2:
                t[o++] = (15 & i) << 4 | (60 & l) >> 2;
                i = l;
                r = 3;
                break;
              case 3:
                t[o++] = (3 & i) << 6 | l;
                r = 0;
            }
          }
          if (1 === r) {
            throw Error("invalid encoding");
          }
          return o - n;
        };
        e.test = function (e) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
        };
        o.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (e, t, o, i, n) {
        function r() {
          this._listeners = {};
        }
        o.exports = r;
        r.prototype.on = function (e, t, o) {
          (this._listeners[e] || (this._listeners[e] = [])).push({
            fn: t,
            ctx: o || this
          });
          return this;
        };
        r.prototype.off = function (e, t) {
          if (undefined === e) {
            this._listeners = {};
          } else if (undefined === t) {
            this._listeners[e] = [];
          } else {
            var o = this._listeners[e];
            for (var i = 0; i < o.length;) {
              if (o[i].fn === t) {
                o.splice(i, 1);
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
            var o = [];
            for (var i = 1; i < arguments.length;) {
              o.push(arguments[i++]);
            }
            for (i = 0; i < t.length;) {
              t[i].fn.apply(t[i++].ctx, o);
            }
          }
          return this;
        };
        o.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (e, t, o, i, n) {
        function r(e) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var t = new Float32Array([-0]);
              var o = new Uint8Array(t.buffer);
              var i = 128 === o[3];
              function n(e, i, n) {
                t[0] = e;
                i[n] = o[0];
                i[n + 1] = o[1];
                i[n + 2] = o[2];
                i[n + 3] = o[3];
              }
              function r(e, i, n) {
                t[0] = e;
                i[n] = o[3];
                i[n + 1] = o[2];
                i[n + 2] = o[1];
                i[n + 3] = o[0];
              }
              function a(e, i) {
                o[0] = e[i];
                o[1] = e[i + 1];
                o[2] = e[i + 2];
                o[3] = e[i + 3];
                return t[0];
              }
              function s(e, i) {
                o[3] = e[i];
                o[2] = e[i + 1];
                o[1] = e[i + 2];
                o[0] = e[i + 3];
                return t[0];
              }
              e.writeFloatLE = i ? n : r;
              e.writeFloatBE = i ? r : n;
              e.readFloatLE = i ? a : s;
              e.readFloatBE = i ? s : a;
            })();
          } else {
            (function () {
              function t(e, t, o, i) {
                var n = t < 0 ? 1 : 0;
                if (n) {
                  t = -t;
                }
                if (0 === t) {
                  e(1 / t > 0 ? 0 : 2147483648, o, i);
                } else if (isNaN(t)) {
                  e(2143289344, o, i);
                } else if (t > 34028234663852886e22) {
                  e((n << 31 | 2139095040) >>> 0, o, i);
                } else if (t < 11754943508222875e-54) {
                  e((n << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, o, i);
                } else {
                  var r = Math.floor(Math.log(t) / Math.LN2);
                  e((n << 31 | r + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -r) * 8388608)) >>> 0, o, i);
                }
              }
              function o(e, t, o) {
                var i = e(t, o);
                var n = 2 * (i >> 31) + 1;
                var r = i >>> 23 & 255;
                var a = 8388607 & i;
                return 255 === r ? a ? NaN : n * Infinity : 0 === r ? 1401298464324817e-60 * n * a : n * Math.pow(2, r - 150) * (a + 8388608);
              }
              e.writeFloatLE = t.bind(null, a);
              e.writeFloatBE = t.bind(null, s);
              e.readFloatLE = o.bind(null, l);
              e.readFloatBE = o.bind(null, c);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var t = new Float64Array([-0]);
              var o = new Uint8Array(t.buffer);
              var i = 128 === o[7];
              function n(e, i, n) {
                t[0] = e;
                i[n] = o[0];
                i[n + 1] = o[1];
                i[n + 2] = o[2];
                i[n + 3] = o[3];
                i[n + 4] = o[4];
                i[n + 5] = o[5];
                i[n + 6] = o[6];
                i[n + 7] = o[7];
              }
              function r(e, i, n) {
                t[0] = e;
                i[n] = o[7];
                i[n + 1] = o[6];
                i[n + 2] = o[5];
                i[n + 3] = o[4];
                i[n + 4] = o[3];
                i[n + 5] = o[2];
                i[n + 6] = o[1];
                i[n + 7] = o[0];
              }
              function a(e, i) {
                o[0] = e[i];
                o[1] = e[i + 1];
                o[2] = e[i + 2];
                o[3] = e[i + 3];
                o[4] = e[i + 4];
                o[5] = e[i + 5];
                o[6] = e[i + 6];
                o[7] = e[i + 7];
                return t[0];
              }
              function s(e, i) {
                o[7] = e[i];
                o[6] = e[i + 1];
                o[5] = e[i + 2];
                o[4] = e[i + 3];
                o[3] = e[i + 4];
                o[2] = e[i + 5];
                o[1] = e[i + 6];
                o[0] = e[i + 7];
                return t[0];
              }
              e.writeDoubleLE = i ? n : r;
              e.writeDoubleBE = i ? r : n;
              e.readDoubleLE = i ? a : s;
              e.readDoubleBE = i ? s : a;
            })();
          } else {
            (function () {
              function t(e, t, o, i, n, r) {
                var a = i < 0 ? 1 : 0;
                if (a) {
                  i = -i;
                }
                if (0 === i) {
                  e(0, n, r + t);
                  e(1 / i > 0 ? 0 : 2147483648, n, r + o);
                } else if (isNaN(i)) {
                  e(0, n, r + t);
                  e(2146959360, n, r + o);
                } else if (i > 17976931348623157e292) {
                  e(0, n, r + t);
                  e((a << 31 | 2146435072) >>> 0, n, r + o);
                } else {
                  var s;
                  if (i < 22250738585072014e-324) {
                    e((s = i / 5e-324) >>> 0, n, r + t);
                    e((a << 31 | s / 4294967296) >>> 0, n, r + o);
                  } else {
                    var l = Math.floor(Math.log(i) / Math.LN2);
                    if (1024 === l) {
                      l = 1023;
                    }
                    e(4503599627370496 * (s = i * Math.pow(2, -l)) >>> 0, n, r + t);
                    e((a << 31 | l + 1023 << 20 | 1048576 * s & 1048575) >>> 0, n, r + o);
                  }
                }
              }
              function o(e, t, o, i, n) {
                var r = e(i, n + t);
                var a = e(i, n + o);
                var s = 2 * (a >> 31) + 1;
                var l = a >>> 20 & 2047;
                var c = 4294967296 * (1048575 & a) + r;
                return 2047 === l ? c ? NaN : s * Infinity : 0 === l ? 5e-324 * s * c : s * Math.pow(2, l - 1075) * (c + 4503599627370496);
              }
              e.writeDoubleLE = t.bind(null, a, 0, 4);
              e.writeDoubleBE = t.bind(null, s, 4, 0);
              e.readDoubleLE = o.bind(null, l, 0, 4);
              e.readDoubleBE = o.bind(null, c, 4, 0);
            })();
          }
          return e;
        }
        function a(e, t, o) {
          t[o] = 255 & e;
          t[o + 1] = e >>> 8 & 255;
          t[o + 2] = e >>> 16 & 255;
          t[o + 3] = e >>> 24;
        }
        function s(e, t, o) {
          t[o] = e >>> 24;
          t[o + 1] = e >>> 16 & 255;
          t[o + 2] = e >>> 8 & 255;
          t[o + 3] = 255 & e;
        }
        function l(e, t) {
          return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
        }
        function c(e, t) {
          return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
        }
        o.exports = r(r);
        o.exports;
        o.exports.writeFloatLE;
        o.exports.writeFloatBE;
        o.exports.readFloatLE;
        o.exports.readFloatBE;
        o.exports.writeDoubleLE;
        o.exports.writeDoubleBE;
        o.exports.readDoubleLE;
        o.exports.readDoubleBE;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (exports, require, module, __filename, __dirname) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (e, t, o, i, n) {
        e.length = function (e) {
          var t = 0;
          var o = 0;
          for (var i = 0; i < e.length; ++i) {
            if ((o = e.charCodeAt(i)) < 128) {
              t += 1;
            } else if (o < 2048) {
              t += 2;
            } else if (55296 == (64512 & o) && 56320 == (64512 & e.charCodeAt(i + 1))) {
              ++i;
              t += 4;
            } else {
              t += 3;
            }
          }
          return t;
        };
        e.read = function (e, t, o) {
          if (o - t < 1) {
            return "";
          }
          var i;
          var n = null;
          var r = [];
          for (var a = 0; t < o;) {
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
              (n || (n = [])).push(String.fromCharCode.apply(String, r));
              a = 0;
            }
          }
          return n ? (a && n.push(String.fromCharCode.apply(String, r.slice(0, a))), n.join("")) : String.fromCharCode.apply(String, r.slice(0, a));
        };
        e.write = function (e, t, o) {
          var i;
          var n;
          var r = o;
          for (var a = 0; a < e.length; ++a) {
            if ((i = e.charCodeAt(a)) < 128) {
              t[o++] = i;
            } else if (i < 2048) {
              t[o++] = i >> 6 | 192;
              t[o++] = 63 & i | 128;
            } else if (55296 == (64512 & i) && 56320 == (64512 & (n = e.charCodeAt(a + 1)))) {
              i = 65536 + ((1023 & i) << 10) + (1023 & n);
              ++a;
              t[o++] = i >> 18 | 240;
              t[o++] = i >> 12 & 63 | 128;
              t[o++] = i >> 6 & 63 | 128;
              t[o++] = 63 & i | 128;
            } else {
              t[o++] = i >> 12 | 224;
              t[o++] = i >> 6 & 63 | 128;
              t[o++] = 63 & i | 128;
            }
          }
          return o - r;
        };
        o.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (e, t, o, i, n) {
        o.exports = function (e, t, o) {
          var i = o || 8192;
          var n = i >>> 1;
          var r = null;
          var a = i;
          return function (o) {
            if (o < 1 || o > n) {
              return e(o);
            }
            if (a + o > i) {
              r = e(i);
              a = 0;
            }
            var s = t.call(r, a, a += o);
            if (7 & a) {
              a = 1 + (7 | a);
            }
            return s;
          };
        };
        o.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (e, t, o, i, n) {
        o.exports = a;
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
          var o = e >>> 0;
          var i = (e - o) / 4294967296 >>> 0;
          if (t) {
            i = ~i >>> 0;
            o = ~o >>> 0;
            if (++o > 4294967295) {
              o = 0;
              if (++i > 4294967295) {
                i = 0;
              }
            }
          }
          return new a(o, i);
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
            var o = ~this.hi >>> 0;
            if (!t) {
              o = o + 1 >>> 0;
            }
            return -(t + 4294967296 * o);
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
          var o = this.hi >>> 24;
          return 0 === o ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : o < 128 ? 9 : 10;
        };
        o.exports;
      }, function () {
        return {
          "../util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (e, t, o, i, n) {
        function a(e, t, o) {
          var i = Object.keys(t);
          for (var n = 0; n < i.length; ++n) {
            if (!(undefined !== e[i[n]] && o)) {
              e[i[n]] = t[i[n]];
            }
          }
          return e;
        }
        function s(e) {
          function t(e, o) {
            if (!(this instanceof t)) {
              return new t(e, o);
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
            if (o) {
              a(this, o);
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
          var o = e[t];
          return !(null == o || !e.hasOwnProperty(t)) && ("object" != typeof o || (Array.isArray(o) ? o.length : Object.keys(o).length) > 0);
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
          var o = e.LongBits.fromHash(e);
          return e.Long ? e.Long.fromBits(o.lo, o.hi, t) : o.toNumber(Boolean(t));
        };
        e.merge = a;
        e.lcFirst = function (e) {
          return e.charAt(0).toLowerCase() + e.substring(1);
        };
        e.newError = s;
        e.ProtocolError = s("ProtocolError");
        e.oneOfGetter = function (e) {
          var t = {};
          for (var o = 0; o < e.length; ++o) {
            t[e[o]] = 1;
          }
          return function () {
            var e = Object.keys(this);
            for (var o = e.length - 1; o > -1; --o) {
              if (1 === t[e[o]] && undefined !== this[e[o]] && null !== this[e[o]]) {
                return e[o];
              }
            }
          };
        };
        e.oneOfSetter = function (e) {
          return function (t) {
            for (var o = 0; o < e.length; ++o) {
              if (e[o] !== t) {
                delete this[e[o]];
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
            e._Buffer_from = e.from !== Uint8Array.from && e.from || function (t, o) {
              return new e(t, o);
            };
            e._Buffer_allocUnsafe = e.allocUnsafe || function (t) {
              return new e(t);
            };
          } else {
            e._Buffer_from = e._Buffer_allocUnsafe = null;
          }
        };
        o.exports;
      }, function () {
        return {
          "@protobufjs/aspromise": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/base64": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          "@protobufjs/eventemitter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          "@protobufjs/float": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          "@protobufjs/inquire": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          "@protobufjs/utf8": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          "@protobufjs/pool": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          "./longbits": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (e, t, o, i, n) {
        o.exports = _;
        var r;
        var a = t("./util/minimal");
        var s = a.LongBits;
        var l = a.base64;
        var c = a.utf8;
        function u(e, t, o) {
          this.fn = e;
          this.len = t;
          this.next = undefined;
          this.val = o;
        }
        function d() {}
        function p(e) {
          this.head = e.head;
          this.tail = e.tail;
          this.len = e.len;
          this.next = e.states;
        }
        function _() {
          this.len = 0;
          this.head = new u(d, 0, 0);
          this.tail = this.head;
          this.states = null;
        }
        var m = function () {
          return a.Buffer ? function () {
            return (_.create = function () {
              return new r();
            })();
          } : function () {
            return new _();
          };
        };
        function h(e, t, o) {
          t[o] = 255 & e;
        }
        function f(e, t) {
          this.len = e;
          this.next = undefined;
          this.val = t;
        }
        function y(e, t, o) {
          for (; e.hi;) {
            t[o++] = 127 & e.lo | 128;
            e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0;
            e.hi >>>= 7;
          }
          for (; e.lo > 127;) {
            t[o++] = 127 & e.lo | 128;
            e.lo = e.lo >>> 7;
          }
          t[o++] = e.lo;
        }
        function C(e, t, o) {
          t[o] = 255 & e;
          t[o + 1] = e >>> 8 & 255;
          t[o + 2] = e >>> 16 & 255;
          t[o + 3] = e >>> 24;
        }
        _.create = m();
        _.alloc = function (e) {
          return new a.Array(e);
        };
        if (a.Array !== Array) {
          _.alloc = a.pool(_.alloc, a.Array.prototype.subarray);
        }
        _.prototype._push = function (e, t, o) {
          this.tail = this.tail.next = new u(e, t, o);
          this.len += t;
          return this;
        };
        f.prototype = Object.create(u.prototype);
        f.prototype.fn = function (e, t, o) {
          for (; e > 127;) {
            t[o++] = 127 & e | 128;
            e >>>= 7;
          }
          t[o] = e;
        };
        _.prototype.uint32 = function (e) {
          this.len += (this.tail = this.tail.next = new f((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
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
          return this._push(h, 1, e ? 1 : 0);
        };
        _.prototype.fixed32 = function (e) {
          return this._push(C, 4, e >>> 0);
        };
        _.prototype.sfixed32 = _.prototype.fixed32;
        _.prototype.fixed64 = function (e) {
          var t = s.from(e);
          return this._push(C, 4, t.lo)._push(C, 4, t.hi);
        };
        _.prototype.sfixed64 = _.prototype.fixed64;
        _.prototype.float = function (e) {
          return this._push(a.float.writeFloatLE, 4, e);
        };
        _.prototype.double = function (e) {
          return this._push(a.float.writeDoubleLE, 8, e);
        };
        var S = a.Array.prototype.set ? function (e, t, o) {
          t.set(e, o);
        } : function (e, t, o) {
          for (var i = 0; i < e.length; ++i) {
            t[o + i] = e[i];
          }
        };
        _.prototype.bytes = function (e) {
          var t = e.length >>> 0;
          if (!t) {
            return this._push(h, 1, 0);
          }
          if (a.isString(e)) {
            var o = _.alloc(t = l.length(e));
            l.decode(e, o, 0);
            e = o;
          }
          return this.uint32(t)._push(S, t, e);
        };
        _.prototype.string = function (e) {
          var t = c.length(e);
          return t ? this.uint32(t)._push(c.write, t, e) : this._push(h, 1, 0);
        };
        _.prototype.fork = function () {
          this.states = new p(this);
          this.head = this.tail = new u(d, 0, 0);
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
            this.head = this.tail = new u(d, 0, 0);
            this.len = 0;
          }
          return this;
        };
        _.prototype.ldelim = function () {
          var e = this.head;
          var t = this.tail;
          var o = this.len;
          this.reset().uint32(o);
          if (o) {
            this.tail.next = e.next;
            this.tail = t;
            this.len += o;
          }
          return this;
        };
        _.prototype.finish = function () {
          var e = this.head.next;
          var t = this.constructor.alloc(this.len);
          for (var o = 0; e;) {
            e.fn(e.val, t, o);
            o += e.len;
            e = e.next;
          }
          return t;
        };
        _._configure = function (e) {
          r = e;
          _.create = m();
          r._configure();
        };
        o.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (e, t, o, i, n) {
        o.exports = s;
        var r = t("./writer");
        (s.prototype = Object.create(r.prototype)).constructor = s;
        var a = t("./util/minimal");
        function s() {
          r.call(this);
        }
        function l(e, t, o) {
          if (e.length < 40) {
            a.utf8.write(e, t, o);
          } else if (t.utf8Write) {
            t.utf8Write(e, o);
          } else {
            t.write(e, o);
          }
        }
        s._configure = function () {
          s.alloc = a._Buffer_allocUnsafe;
          s.writeBytesBuffer = a.Buffer && a.Buffer.prototype instanceof Uint8Array && "set" === a.Buffer.prototype.set.name ? function (e, t, o) {
            t.set(e, o);
          } : function (e, t, o) {
            if (e.copy) {
              e.copy(t, o, 0, e.length);
            } else {
              for (var i = 0; i < e.length;) {
                t[o++] = e[i++];
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
        o.exports;
      }, function () {
        return {
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (e, t, o, i, n) {
        o.exports = u;
        var r;
        var a = t("./util/minimal");
        var s = a.LongBits;
        var l = a.utf8;
        function u(e) {
          this.buf = e;
          this.pos = 0;
          this.len = e.length;
        }
        var d;
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
        var _ = function () {
          return a.Buffer ? function (e) {
            return (u.create = function (e) {
              return a.Buffer.isBuffer(e) ? new r(e) : p(e);
            })(e);
          } : p;
        };
        function m() {
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
        function f() {
          if (this.pos + 8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (8 || 1) + " > " + this.len);
          }
          return new s((this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0, (this.buf[(this.pos += 4) - 4] | this.buf[(this.pos += 4) - 3] << 8 | this.buf[(this.pos += 4) - 2] << 16 | this.buf[(this.pos += 4) - 1] << 24) >>> 0);
        }
        u.create = _();
        u.prototype._slice = a.Array.prototype.subarray || a.Array.prototype.slice;
        d = 4294967295;
        u.prototype.uint32 = function () {
          d = (127 & this.buf[this.pos]) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return d;
          }
          d = (d | (127 & this.buf[this.pos]) << 7) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return d;
          }
          d = (d | (127 & this.buf[this.pos]) << 14) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return d;
          }
          d = (d | (127 & this.buf[this.pos]) << 21) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return d;
          }
          d = (d | (15 & this.buf[this.pos]) << 28) >>> 0;
          if (this.buf[this.pos++] < 128) {
            return d;
          }
          if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (10 || 1) + " > " + this.len);
          }
          return d;
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
          var o = this.pos + e;
          if (o > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (e || 1) + " > " + this.len);
          }
          this.pos += e;
          return Array.isArray(this.buf) ? this.buf.slice(t, o) : t === o ? new this.buf.constructor(0) : this._slice.call(this.buf, t, o);
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
              return m.call(this)[t](false);
            },
            uint64: function () {
              return m.call(this)[t](true);
            },
            sint64: function () {
              return m.call(this).zzDecode()[t](false);
            },
            fixed64: function () {
              return f.call(this)[t](true);
            },
            sfixed64: function () {
              return f.call(this)[t](false);
            }
          });
        };
        o.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (e, t, o, i, n) {
        o.exports = s;
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
        o.exports;
      }, function () {
        return {
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (e, t, o, i, n) {
        o.exports = a;
        var r = t("../util/minimal");
        function a(e, t, o) {
          if ("function" != typeof e) {
            throw TypeError("rpcImpl must be a function");
          }
          r.EventEmitter.call(this);
          this.rpcImpl = e;
          this.requestDelimited = Boolean(t);
          this.responseDelimited = Boolean(o);
        }
        (a.prototype = Object.create(r.EventEmitter.prototype)).constructor = a;
        a.prototype.rpcCall = function e(t, o, i, n, a) {
          if (!n) {
            throw TypeError("request must be specified");
          }
          var s = this;
          if (!a) {
            return r.asPromise(e, s, t, o, i, n);
          }
          if (s.rpcImpl) {
            try {
              return s.rpcImpl(t, o[s.requestDelimited ? "encodeDelimited" : "encode"](n).finish(), function (e, o) {
                if (e) {
                  s.emit("error", e, t);
                  return a(e);
                }
                if (null !== o) {
                  if (!(o instanceof i)) {
                    try {
                      o = i[s.responseDelimited ? "decodeDelimited" : "decode"](o);
                    } catch (e) {
                      s.emit("error", e, t);
                      return a(e);
                    }
                  }
                  s.emit("data", o, t);
                  return a(null, o);
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
        o.exports;
      }, function () {
        return {
          "../util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (e, t, o, i, n) {
        e.Service = t("./rpc/service");
        o.exports;
      }, function () {
        return {
          "./rpc/service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (e, t, o, i, n) {
        o.exports = {};
        o.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (e, t, o, i, n) {
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
        o.exports;
      }, function () {
        return {
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./writer_buffer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./reader_buffer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./rpc": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          "./roots": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      var _cjsExports;
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (e, t, o, i, n) {
        o.exports = t("./src/index-minimal");
        o.exports;
      }, function () {
        return {
          "./src/index-minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/assets/Script/Proto/tcbProto.js", function (e, t, o, i, n) {
        var r;
        var a = t("protobufjs/minimal");
        var s = a.Reader;
        var l = a.Writer;
        var c = a.util;
        var u = a.roots.default || (a.roots.default = {});
        (r = {
          ColumnFloat: function () {
            function e(e) {
              this.Col = [];
              if (e) {
                var t = Object.keys(e);
                for (var o = 0; o < t.length; ++o) {
                  if (null != e[t[o]]) {
                    this[t[o]] = e[t[o]];
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
                for (var o = 0; o < e.Col.length; ++o) {
                  t.double(e.Col[o]);
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
              var o = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tcbProto.ColumnFloat(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                  case 1:
                    if (!(i.Col && i.Col.length)) {
                      i.Col = [];
                    }
                    if (2 == (7 & n)) {
                      for (var r = e.uint32() + e.pos; e.pos < r;) {
                        i.Col.push(e.double());
                      }
                    } else {
                      i.Col.push(e.double());
                    }
                    break;
                  default:
                    e.skipType(7 & n);
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
                  if ("number" != typeof e.Col[t]) {
                    return "Col: number[] expected";
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tcbProto.ColumnFloat) {
                return e;
              }
              var t = new u.tcbProto.ColumnFloat();
              if (e.Col) {
                if (!Array.isArray(e.Col)) {
                  throw TypeError(".tcbProto.ColumnFloat.Col: array expected");
                }
                t.Col = [];
                for (var o = 0; o < e.Col.length; ++o) {
                  t.Col[o] = Number(e.Col[o]);
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var o = {};
              if (t.arrays || t.defaults) {
                o.Col = [];
              }
              if (e.Col && e.Col.length) {
                o.Col = [];
                for (var i = 0; i < e.Col.length; ++i) {
                  o.Col[i] = t.json && !isFinite(e.Col[i]) ? String(e.Col[i]) : e.Col[i];
                }
              }
              return o;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tcbProto.ColumnFloat";
            };
            return e;
          }(),
          PlateSymbolData: function () {
            function e(e) {
              this.PSD = [];
              if (e) {
                var t = Object.keys(e);
                for (var o = 0; o < t.length; ++o) {
                  if (null != e[t[o]]) {
                    this[t[o]] = e[t[o]];
                  }
                }
              }
            }
            e.prototype.PSD = c.emptyArray;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.PSD && e.PSD.length) {
                for (var o = 0; o < e.PSD.length; ++o) {
                  u.tcbProto.Column.encode(e.PSD[o], t.uint32(10).fork()).ldelim();
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
              var o = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tcbProto.PlateSymbolData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                  case 1:
                    if (!(i.PSD && i.PSD.length)) {
                      i.PSD = [];
                    }
                    i.PSD.push(u.tcbProto.Column.decode(e, e.uint32()));
                    break;
                  default:
                    e.skipType(7 & n);
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
              if (null != e.PSD && e.hasOwnProperty("PSD")) {
                if (!Array.isArray(e.PSD)) {
                  return "PSD: array expected";
                }
                for (var t = 0; t < e.PSD.length; ++t) {
                  var o = u.tcbProto.Column.verify(e.PSD[t]);
                  if (o) {
                    return "PSD." + o;
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tcbProto.PlateSymbolData) {
                return e;
              }
              var t = new u.tcbProto.PlateSymbolData();
              if (e.PSD) {
                if (!Array.isArray(e.PSD)) {
                  throw TypeError(".tcbProto.PlateSymbolData.PSD: array expected");
                }
                t.PSD = [];
                for (var o = 0; o < e.PSD.length; ++o) {
                  if ("object" != typeof e.PSD[o]) {
                    throw TypeError(".tcbProto.PlateSymbolData.PSD: object expected");
                  }
                  t.PSD[o] = u.tcbProto.Column.fromObject(e.PSD[o]);
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var o = {};
              if (t.arrays || t.defaults) {
                o.PSD = [];
              }
              if (e.PSD && e.PSD.length) {
                o.PSD = [];
                for (var i = 0; i < e.PSD.length; ++i) {
                  o.PSD[i] = u.tcbProto.Column.toObject(e.PSD[i], t);
                }
              }
              return o;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tcbProto.PlateSymbolData";
            };
            return e;
          }(),
          PlateNumData: function () {
            function e(e) {
              this.PND = [];
              if (e) {
                var t = Object.keys(e);
                for (var o = 0; o < t.length; ++o) {
                  if (null != e[t[o]]) {
                    this[t[o]] = e[t[o]];
                  }
                }
              }
            }
            e.prototype.PND = c.emptyArray;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.PND && e.PND.length) {
                for (var o = 0; o < e.PND.length; ++o) {
                  u.tcbProto.ColumnFloat.encode(e.PND[o], t.uint32(10).fork()).ldelim();
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
              var o = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tcbProto.PlateNumData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                  case 1:
                    if (!(i.PND && i.PND.length)) {
                      i.PND = [];
                    }
                    i.PND.push(u.tcbProto.ColumnFloat.decode(e, e.uint32()));
                    break;
                  default:
                    e.skipType(7 & n);
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
              if (null != e.PND && e.hasOwnProperty("PND")) {
                if (!Array.isArray(e.PND)) {
                  return "PND: array expected";
                }
                for (var t = 0; t < e.PND.length; ++t) {
                  var o = u.tcbProto.ColumnFloat.verify(e.PND[t]);
                  if (o) {
                    return "PND." + o;
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tcbProto.PlateNumData) {
                return e;
              }
              var t = new u.tcbProto.PlateNumData();
              if (e.PND) {
                if (!Array.isArray(e.PND)) {
                  throw TypeError(".tcbProto.PlateNumData.PND: array expected");
                }
                t.PND = [];
                for (var o = 0; o < e.PND.length; ++o) {
                  if ("object" != typeof e.PND[o]) {
                    throw TypeError(".tcbProto.PlateNumData.PND: object expected");
                  }
                  t.PND[o] = u.tcbProto.ColumnFloat.fromObject(e.PND[o]);
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var o = {};
              if (t.arrays || t.defaults) {
                o.PND = [];
              }
              if (e.PND && e.PND.length) {
                o.PND = [];
                for (var i = 0; i < e.PND.length; ++i) {
                  o.PND[i] = u.tcbProto.ColumnFloat.toObject(e.PND[i], t);
                }
              }
              return o;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tcbProto.PlateNumData";
            };
            return e;
          }(),
          AwardDataVecData: function () {
            function e(e) {
              this.ADV = [];
              if (e) {
                var t = Object.keys(e);
                for (var o = 0; o < t.length; ++o) {
                  if (null != e[t[o]]) {
                    this[t[o]] = e[t[o]];
                  }
                }
              }
            }
            e.prototype.ADV = c.emptyArray;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.ADV && e.ADV.length) {
                for (var o = 0; o < e.ADV.length; ++o) {
                  u.tcbProto.AwardData.encode(e.ADV[o], t.uint32(10).fork()).ldelim();
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
              var o = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tcbProto.AwardDataVecData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                  case 1:
                    if (!(i.ADV && i.ADV.length)) {
                      i.ADV = [];
                    }
                    i.ADV.push(u.tcbProto.AwardData.decode(e, e.uint32()));
                    break;
                  default:
                    e.skipType(7 & n);
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
              if (null != e.ADV && e.hasOwnProperty("ADV")) {
                if (!Array.isArray(e.ADV)) {
                  return "ADV: array expected";
                }
                for (var t = 0; t < e.ADV.length; ++t) {
                  var o = u.tcbProto.AwardData.verify(e.ADV[t]);
                  if (o) {
                    return "ADV." + o;
                  }
                }
              }
              return null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tcbProto.AwardDataVecData) {
                return e;
              }
              var t = new u.tcbProto.AwardDataVecData();
              if (e.ADV) {
                if (!Array.isArray(e.ADV)) {
                  throw TypeError(".tcbProto.AwardDataVecData.ADV: array expected");
                }
                t.ADV = [];
                for (var o = 0; o < e.ADV.length; ++o) {
                  if ("object" != typeof e.ADV[o]) {
                    throw TypeError(".tcbProto.AwardDataVecData.ADV: object expected");
                  }
                  t.ADV[o] = u.tcbProto.AwardData.fromObject(e.ADV[o]);
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var o = {};
              if (t.arrays || t.defaults) {
                o.ADV = [];
              }
              if (e.ADV && e.ADV.length) {
                o.ADV = [];
                for (var i = 0; i < e.ADV.length; ++i) {
                  o.ADV[i] = u.tcbProto.AwardData.toObject(e.ADV[i], t);
                }
              }
              return o;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tcbProto.AwardDataVecData";
            };
            return e;
          }(),
          AwardData: function () {
            function e(e) {
              if (e) {
                var t = Object.keys(e);
                for (var o = 0; o < t.length; ++o) {
                  if (null != e[t[o]]) {
                    this[t[o]] = e[t[o]];
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
              if (!(e instanceof s)) {
                e = s.create(e);
              }
              var o = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tcbProto.AwardData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
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
                    i.Mult = e.double();
                    break;
                  case 5:
                    i.Win = e.double();
                    break;
                  default:
                    e.skipType(7 & n);
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
              return "object" != typeof e || null === e ? "object expected" : null != e.Symbol && e.hasOwnProperty("Symbol") && !c.isInteger(e.Symbol) ? "Symbol: integer expected" : null != e.Count && e.hasOwnProperty("Count") && !c.isInteger(e.Count) ? "Count: integer expected" : null != e.Line && e.hasOwnProperty("Line") && !c.isInteger(e.Line) ? "Line: integer expected" : null != e.Mult && e.hasOwnProperty("Mult") && "number" != typeof e.Mult ? "Mult: number expected" : null != e.Win && e.hasOwnProperty("Win") && "number" != typeof e.Win ? "Win: number expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tcbProto.AwardData) {
                return e;
              }
              var t = new u.tcbProto.AwardData();
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
              var o = {};
              if (t.defaults) {
                o.Symbol = 0;
                o.Count = 0;
                o.Line = 0;
                o.Mult = 0;
                o.Win = 0;
              }
              if (null != e.Symbol && e.hasOwnProperty("Symbol")) {
                o.Symbol = e.Symbol;
              }
              if (null != e.Count && e.hasOwnProperty("Count")) {
                o.Count = e.Count;
              }
              if (null != e.Line && e.hasOwnProperty("Line")) {
                o.Line = e.Line;
              }
              if (null != e.Mult && e.hasOwnProperty("Mult")) {
                o.Mult = t.json && !isFinite(e.Mult) ? String(e.Mult) : e.Mult;
              }
              if (null != e.Win && e.hasOwnProperty("Win")) {
                o.Win = t.json && !isFinite(e.Win) ? String(e.Win) : e.Win;
              }
              return o;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tcbProto.AwardData";
            };
            return e;
          }(),
          RoundInfo: function () {
            function e(e) {
              this.PlateSymbol = [];
              this.PlateNum = [];
              this.AwardDataVec = [];
              this.GoldPos = [];
              this.CollectWin = [];
              this.LineWin = [];
              this.AddCrackLv = [];
              if (e) {
                var t = Object.keys(e);
                for (var o = 0; o < t.length; ++o) {
                  if (null != e[t[o]]) {
                    this[t[o]] = e[t[o]];
                  }
                }
              }
            }
            e.prototype.PlateSymbol = c.emptyArray;
            e.prototype.PlateNum = c.emptyArray;
            e.prototype.AwardDataVec = c.emptyArray;
            e.prototype.Collected = 0;
            e.prototype.GoldLevel = 0;
            e.prototype.GoldPos = c.emptyArray;
            e.prototype.CollectWin = c.emptyArray;
            e.prototype.LineWin = c.emptyArray;
            e.prototype.FreeRemainRound = 0;
            e.prototype.FreeTotalRound = 0;
            e.prototype.FreeNowRound = 0;
            e.prototype.AddRounds = 0;
            e.prototype.AwardTypeFlag = 0;
            e.prototype.RoundWin = 0;
            e.prototype.AddCrackLv = c.emptyArray;
            e.prototype.MaxFlag = false;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.PlateSymbol && e.PlateSymbol.length) {
                for (var o = 0; o < e.PlateSymbol.length; ++o) {
                  u.tcbProto.PlateSymbolData.encode(e.PlateSymbol[o], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.PlateNum && e.PlateNum.length) {
                for (o = 0; o < e.PlateNum.length; ++o) {
                  u.tcbProto.PlateNumData.encode(e.PlateNum[o], t.uint32(18).fork()).ldelim();
                }
              }
              if (null != e.AwardDataVec && e.AwardDataVec.length) {
                for (o = 0; o < e.AwardDataVec.length; ++o) {
                  u.tcbProto.AwardDataVecData.encode(e.AwardDataVec[o], t.uint32(26).fork()).ldelim();
                }
              }
              if (null != e.Collected && Object.hasOwnProperty.call(e, "Collected")) {
                t.uint32(32).int32(e.Collected);
              }
              if (null != e.GoldLevel && Object.hasOwnProperty.call(e, "GoldLevel")) {
                t.uint32(40).int32(e.GoldLevel);
              }
              if (null != e.GoldPos && e.GoldPos.length) {
                for (o = 0; o < e.GoldPos.length; ++o) {
                  u.tcbProto.Column.encode(e.GoldPos[o], t.uint32(50).fork()).ldelim();
                }
              }
              if (null != e.CollectWin && e.CollectWin.length) {
                t.uint32(58).fork();
                for (o = 0; o < e.CollectWin.length; ++o) {
                  t.double(e.CollectWin[o]);
                }
                t.ldelim();
              }
              if (null != e.LineWin && e.LineWin.length) {
                t.uint32(66).fork();
                for (o = 0; o < e.LineWin.length; ++o) {
                  t.double(e.LineWin[o]);
                }
                t.ldelim();
              }
              if (null != e.FreeRemainRound && Object.hasOwnProperty.call(e, "FreeRemainRound")) {
                t.uint32(72).int32(e.FreeRemainRound);
              }
              if (null != e.FreeTotalRound && Object.hasOwnProperty.call(e, "FreeTotalRound")) {
                t.uint32(80).int32(e.FreeTotalRound);
              }
              if (null != e.FreeNowRound && Object.hasOwnProperty.call(e, "FreeNowRound")) {
                t.uint32(88).int32(e.FreeNowRound);
              }
              if (null != e.AddRounds && Object.hasOwnProperty.call(e, "AddRounds")) {
                t.uint32(96).int32(e.AddRounds);
              }
              if (null != e.AwardTypeFlag && Object.hasOwnProperty.call(e, "AwardTypeFlag")) {
                t.uint32(104).int32(e.AwardTypeFlag);
              }
              if (null != e.RoundWin && Object.hasOwnProperty.call(e, "RoundWin")) {
                t.uint32(113).double(e.RoundWin);
              }
              if (null != e.AddCrackLv && e.AddCrackLv.length) {
                t.uint32(122).fork();
                for (o = 0; o < e.AddCrackLv.length; ++o) {
                  t.int32(e.AddCrackLv[o]);
                }
                t.ldelim();
              }
              if (null != e.MaxFlag && Object.hasOwnProperty.call(e, "MaxFlag")) {
                t.uint32(128).bool(e.MaxFlag);
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
              var o = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tcbProto.RoundInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                  case 1:
                    if (!(i.PlateSymbol && i.PlateSymbol.length)) {
                      i.PlateSymbol = [];
                    }
                    i.PlateSymbol.push(u.tcbProto.PlateSymbolData.decode(e, e.uint32()));
                    break;
                  case 2:
                    if (!(i.PlateNum && i.PlateNum.length)) {
                      i.PlateNum = [];
                    }
                    i.PlateNum.push(u.tcbProto.PlateNumData.decode(e, e.uint32()));
                    break;
                  case 3:
                    if (!(i.AwardDataVec && i.AwardDataVec.length)) {
                      i.AwardDataVec = [];
                    }
                    i.AwardDataVec.push(u.tcbProto.AwardDataVecData.decode(e, e.uint32()));
                    break;
                  case 4:
                    i.Collected = e.int32();
                    break;
                  case 5:
                    i.GoldLevel = e.int32();
                    break;
                  case 6:
                    if (!(i.GoldPos && i.GoldPos.length)) {
                      i.GoldPos = [];
                    }
                    i.GoldPos.push(u.tcbProto.Column.decode(e, e.uint32()));
                    break;
                  case 7:
                    if (!(i.CollectWin && i.CollectWin.length)) {
                      i.CollectWin = [];
                    }
                    if (2 == (7 & n)) {
                      for (var r = e.uint32() + e.pos; e.pos < r;) {
                        i.CollectWin.push(e.double());
                      }
                    } else {
                      i.CollectWin.push(e.double());
                    }
                    break;
                  case 8:
                    if (!(i.LineWin && i.LineWin.length)) {
                      i.LineWin = [];
                    }
                    if (2 == (7 & n)) {
                      for (r = e.uint32() + e.pos; e.pos < r;) {
                        i.LineWin.push(e.double());
                      }
                    } else {
                      i.LineWin.push(e.double());
                    }
                    break;
                  case 9:
                    i.FreeRemainRound = e.int32();
                    break;
                  case 10:
                    i.FreeTotalRound = e.int32();
                    break;
                  case 11:
                    i.FreeNowRound = e.int32();
                    break;
                  case 12:
                    i.AddRounds = e.int32();
                    break;
                  case 13:
                    i.AwardTypeFlag = e.int32();
                    break;
                  case 14:
                    i.RoundWin = e.double();
                    break;
                  case 15:
                    if (!(i.AddCrackLv && i.AddCrackLv.length)) {
                      i.AddCrackLv = [];
                    }
                    if (2 == (7 & n)) {
                      for (r = e.uint32() + e.pos; e.pos < r;) {
                        i.AddCrackLv.push(e.int32());
                      }
                    } else {
                      i.AddCrackLv.push(e.int32());
                    }
                    break;
                  case 16:
                    i.MaxFlag = e.bool();
                    break;
                  default:
                    e.skipType(7 & n);
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
              if (null != e.PlateSymbol && e.hasOwnProperty("PlateSymbol")) {
                if (!Array.isArray(e.PlateSymbol)) {
                  return "PlateSymbol: array expected";
                }
                for (var t = 0; t < e.PlateSymbol.length; ++t) {
                  if (o = u.tcbProto.PlateSymbolData.verify(e.PlateSymbol[t])) {
                    return "PlateSymbol." + o;
                  }
                }
              }
              if (null != e.PlateNum && e.hasOwnProperty("PlateNum")) {
                if (!Array.isArray(e.PlateNum)) {
                  return "PlateNum: array expected";
                }
                for (t = 0; t < e.PlateNum.length; ++t) {
                  if (o = u.tcbProto.PlateNumData.verify(e.PlateNum[t])) {
                    return "PlateNum." + o;
                  }
                }
              }
              if (null != e.AwardDataVec && e.hasOwnProperty("AwardDataVec")) {
                if (!Array.isArray(e.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (t = 0; t < e.AwardDataVec.length; ++t) {
                  if (o = u.tcbProto.AwardDataVecData.verify(e.AwardDataVec[t])) {
                    return "AwardDataVec." + o;
                  }
                }
              }
              if (null != e.Collected && e.hasOwnProperty("Collected") && !c.isInteger(e.Collected)) {
                return "Collected: integer expected";
              }
              if (null != e.GoldLevel && e.hasOwnProperty("GoldLevel") && !c.isInteger(e.GoldLevel)) {
                return "GoldLevel: integer expected";
              }
              if (null != e.GoldPos && e.hasOwnProperty("GoldPos")) {
                if (!Array.isArray(e.GoldPos)) {
                  return "GoldPos: array expected";
                }
                for (t = 0; t < e.GoldPos.length; ++t) {
                  var o;
                  if (o = u.tcbProto.Column.verify(e.GoldPos[t])) {
                    return "GoldPos." + o;
                  }
                }
              }
              if (null != e.CollectWin && e.hasOwnProperty("CollectWin")) {
                if (!Array.isArray(e.CollectWin)) {
                  return "CollectWin: array expected";
                }
                for (t = 0; t < e.CollectWin.length; ++t) {
                  if ("number" != typeof e.CollectWin[t]) {
                    return "CollectWin: number[] expected";
                  }
                }
              }
              if (null != e.LineWin && e.hasOwnProperty("LineWin")) {
                if (!Array.isArray(e.LineWin)) {
                  return "LineWin: array expected";
                }
                for (t = 0; t < e.LineWin.length; ++t) {
                  if ("number" != typeof e.LineWin[t]) {
                    return "LineWin: number[] expected";
                  }
                }
              }
              if (null != e.FreeRemainRound && e.hasOwnProperty("FreeRemainRound") && !c.isInteger(e.FreeRemainRound)) {
                return "FreeRemainRound: integer expected";
              }
              if (null != e.FreeTotalRound && e.hasOwnProperty("FreeTotalRound") && !c.isInteger(e.FreeTotalRound)) {
                return "FreeTotalRound: integer expected";
              }
              if (null != e.FreeNowRound && e.hasOwnProperty("FreeNowRound") && !c.isInteger(e.FreeNowRound)) {
                return "FreeNowRound: integer expected";
              }
              if (null != e.AddRounds && e.hasOwnProperty("AddRounds") && !c.isInteger(e.AddRounds)) {
                return "AddRounds: integer expected";
              }
              if (null != e.AwardTypeFlag && e.hasOwnProperty("AwardTypeFlag") && !c.isInteger(e.AwardTypeFlag)) {
                return "AwardTypeFlag: integer expected";
              }
              if (null != e.RoundWin && e.hasOwnProperty("RoundWin") && "number" != typeof e.RoundWin) {
                return "RoundWin: number expected";
              }
              if (null != e.AddCrackLv && e.hasOwnProperty("AddCrackLv")) {
                if (!Array.isArray(e.AddCrackLv)) {
                  return "AddCrackLv: array expected";
                }
                for (t = 0; t < e.AddCrackLv.length; ++t) {
                  if (!c.isInteger(e.AddCrackLv[t])) {
                    return "AddCrackLv: integer[] expected";
                  }
                }
              }
              return null != e.MaxFlag && e.hasOwnProperty("MaxFlag") && "boolean" != typeof e.MaxFlag ? "MaxFlag: boolean expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.tcbProto.RoundInfo) {
                return e;
              }
              var t = new u.tcbProto.RoundInfo();
              if (e.PlateSymbol) {
                if (!Array.isArray(e.PlateSymbol)) {
                  throw TypeError(".tcbProto.RoundInfo.PlateSymbol: array expected");
                }
                t.PlateSymbol = [];
                for (var o = 0; o < e.PlateSymbol.length; ++o) {
                  if ("object" != typeof e.PlateSymbol[o]) {
                    throw TypeError(".tcbProto.RoundInfo.PlateSymbol: object expected");
                  }
                  t.PlateSymbol[o] = u.tcbProto.PlateSymbolData.fromObject(e.PlateSymbol[o]);
                }
              }
              if (e.PlateNum) {
                if (!Array.isArray(e.PlateNum)) {
                  throw TypeError(".tcbProto.RoundInfo.PlateNum: array expected");
                }
                t.PlateNum = [];
                for (o = 0; o < e.PlateNum.length; ++o) {
                  if ("object" != typeof e.PlateNum[o]) {
                    throw TypeError(".tcbProto.RoundInfo.PlateNum: object expected");
                  }
                  t.PlateNum[o] = u.tcbProto.PlateNumData.fromObject(e.PlateNum[o]);
                }
              }
              if (e.AwardDataVec) {
                if (!Array.isArray(e.AwardDataVec)) {
                  throw TypeError(".tcbProto.RoundInfo.AwardDataVec: array expected");
                }
                t.AwardDataVec = [];
                for (o = 0; o < e.AwardDataVec.length; ++o) {
                  if ("object" != typeof e.AwardDataVec[o]) {
                    throw TypeError(".tcbProto.RoundInfo.AwardDataVec: object expected");
                  }
                  t.AwardDataVec[o] = u.tcbProto.AwardDataVecData.fromObject(e.AwardDataVec[o]);
                }
              }
              if (null != e.Collected) {
                t.Collected = 0 | e.Collected;
              }
              if (null != e.GoldLevel) {
                t.GoldLevel = 0 | e.GoldLevel;
              }
              if (e.GoldPos) {
                if (!Array.isArray(e.GoldPos)) {
                  throw TypeError(".tcbProto.RoundInfo.GoldPos: array expected");
                }
                t.GoldPos = [];
                for (o = 0; o < e.GoldPos.length; ++o) {
                  if ("object" != typeof e.GoldPos[o]) {
                    throw TypeError(".tcbProto.RoundInfo.GoldPos: object expected");
                  }
                  t.GoldPos[o] = u.tcbProto.Column.fromObject(e.GoldPos[o]);
                }
              }
              if (e.CollectWin) {
                if (!Array.isArray(e.CollectWin)) {
                  throw TypeError(".tcbProto.RoundInfo.CollectWin: array expected");
                }
                t.CollectWin = [];
                for (o = 0; o < e.CollectWin.length; ++o) {
                  t.CollectWin[o] = Number(e.CollectWin[o]);
                }
              }
              if (e.LineWin) {
                if (!Array.isArray(e.LineWin)) {
                  throw TypeError(".tcbProto.RoundInfo.LineWin: array expected");
                }
                t.LineWin = [];
                for (o = 0; o < e.LineWin.length; ++o) {
                  t.LineWin[o] = Number(e.LineWin[o]);
                }
              }
              if (null != e.FreeRemainRound) {
                t.FreeRemainRound = 0 | e.FreeRemainRound;
              }
              if (null != e.FreeTotalRound) {
                t.FreeTotalRound = 0 | e.FreeTotalRound;
              }
              if (null != e.FreeNowRound) {
                t.FreeNowRound = 0 | e.FreeNowRound;
              }
              if (null != e.AddRounds) {
                t.AddRounds = 0 | e.AddRounds;
              }
              if (null != e.AwardTypeFlag) {
                t.AwardTypeFlag = 0 | e.AwardTypeFlag;
              }
              if (null != e.RoundWin) {
                t.RoundWin = Number(e.RoundWin);
              }
              if (e.AddCrackLv) {
                if (!Array.isArray(e.AddCrackLv)) {
                  throw TypeError(".tcbProto.RoundInfo.AddCrackLv: array expected");
                }
                t.AddCrackLv = [];
                for (o = 0; o < e.AddCrackLv.length; ++o) {
                  t.AddCrackLv[o] = 0 | e.AddCrackLv[o];
                }
              }
              if (null != e.MaxFlag) {
                t.MaxFlag = Boolean(e.MaxFlag);
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var o = {};
              if (t.arrays || t.defaults) {
                o.PlateSymbol = [];
                o.PlateNum = [];
                o.AwardDataVec = [];
                o.GoldPos = [];
                o.CollectWin = [];
                o.LineWin = [];
                o.AddCrackLv = [];
              }
              if (t.defaults) {
                o.Collected = 0;
                o.GoldLevel = 0;
                o.FreeRemainRound = 0;
                o.FreeTotalRound = 0;
                o.FreeNowRound = 0;
                o.AddRounds = 0;
                o.AwardTypeFlag = 0;
                o.RoundWin = 0;
                o.MaxFlag = false;
              }
              if (e.PlateSymbol && e.PlateSymbol.length) {
                o.PlateSymbol = [];
                for (var i = 0; i < e.PlateSymbol.length; ++i) {
                  o.PlateSymbol[i] = u.tcbProto.PlateSymbolData.toObject(e.PlateSymbol[i], t);
                }
              }
              if (e.PlateNum && e.PlateNum.length) {
                o.PlateNum = [];
                for (i = 0; i < e.PlateNum.length; ++i) {
                  o.PlateNum[i] = u.tcbProto.PlateNumData.toObject(e.PlateNum[i], t);
                }
              }
              if (e.AwardDataVec && e.AwardDataVec.length) {
                o.AwardDataVec = [];
                for (i = 0; i < e.AwardDataVec.length; ++i) {
                  o.AwardDataVec[i] = u.tcbProto.AwardDataVecData.toObject(e.AwardDataVec[i], t);
                }
              }
              if (null != e.Collected && e.hasOwnProperty("Collected")) {
                o.Collected = e.Collected;
              }
              if (null != e.GoldLevel && e.hasOwnProperty("GoldLevel")) {
                o.GoldLevel = e.GoldLevel;
              }
              if (e.GoldPos && e.GoldPos.length) {
                o.GoldPos = [];
                for (i = 0; i < e.GoldPos.length; ++i) {
                  o.GoldPos[i] = u.tcbProto.Column.toObject(e.GoldPos[i], t);
                }
              }
              if (e.CollectWin && e.CollectWin.length) {
                o.CollectWin = [];
                for (i = 0; i < e.CollectWin.length; ++i) {
                  o.CollectWin[i] = t.json && !isFinite(e.CollectWin[i]) ? String(e.CollectWin[i]) : e.CollectWin[i];
                }
              }
              if (e.LineWin && e.LineWin.length) {
                o.LineWin = [];
                for (i = 0; i < e.LineWin.length; ++i) {
                  o.LineWin[i] = t.json && !isFinite(e.LineWin[i]) ? String(e.LineWin[i]) : e.LineWin[i];
                }
              }
              if (null != e.FreeRemainRound && e.hasOwnProperty("FreeRemainRound")) {
                o.FreeRemainRound = e.FreeRemainRound;
              }
              if (null != e.FreeTotalRound && e.hasOwnProperty("FreeTotalRound")) {
                o.FreeTotalRound = e.FreeTotalRound;
              }
              if (null != e.FreeNowRound && e.hasOwnProperty("FreeNowRound")) {
                o.FreeNowRound = e.FreeNowRound;
              }
              if (null != e.AddRounds && e.hasOwnProperty("AddRounds")) {
                o.AddRounds = e.AddRounds;
              }
              if (null != e.AwardTypeFlag && e.hasOwnProperty("AwardTypeFlag")) {
                o.AwardTypeFlag = e.AwardTypeFlag;
              }
              if (null != e.RoundWin && e.hasOwnProperty("RoundWin")) {
                o.RoundWin = t.json && !isFinite(e.RoundWin) ? String(e.RoundWin) : e.RoundWin;
              }
              if (e.AddCrackLv && e.AddCrackLv.length) {
                o.AddCrackLv = [];
                for (i = 0; i < e.AddCrackLv.length; ++i) {
                  o.AddCrackLv[i] = e.AddCrackLv[i];
                }
              }
              if (null != e.MaxFlag && e.hasOwnProperty("MaxFlag")) {
                o.MaxFlag = e.MaxFlag;
              }
              return o;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tcbProto.RoundInfo";
            };
            return e;
          }(),
          SpinAck: function () {
            function e(e) {
              this.RoundQueue = [];
              this.CrackLevels = [];
              if (e) {
                var t = Object.keys(e);
                for (var o = 0; o < t.length; ++o) {
                  if (null != e[t[o]]) {
                    this[t[o]] = e[t[o]];
                  }
                }
              }
            }
            e.prototype.RoundQueue = c.emptyArray;
            e.prototype.Bet = 0;
            e.prototype.FreeTotalWin = 0;
            e.prototype.TotalWin = 0;
            e.prototype.RTP = 0;
            e.prototype.GameType = 0;
            e.prototype.CrackLevels = c.emptyArray;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.RoundQueue && e.RoundQueue.length) {
                for (var o = 0; o < e.RoundQueue.length; ++o) {
                  u.tcbProto.RoundInfo.encode(e.RoundQueue[o], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.Bet && Object.hasOwnProperty.call(e, "Bet")) {
                t.uint32(17).double(e.Bet);
              }
              if (null != e.FreeTotalWin && Object.hasOwnProperty.call(e, "FreeTotalWin")) {
                t.uint32(25).double(e.FreeTotalWin);
              }
              if (null != e.TotalWin && Object.hasOwnProperty.call(e, "TotalWin")) {
                t.uint32(33).double(e.TotalWin);
              }
              if (null != e.RTP && Object.hasOwnProperty.call(e, "RTP")) {
                t.uint32(41).double(e.RTP);
              }
              if (null != e.GameType && Object.hasOwnProperty.call(e, "GameType")) {
                t.uint32(48).int32(e.GameType);
              }
              if (null != e.CrackLevels && e.CrackLevels.length) {
                t.uint32(58).fork();
                for (o = 0; o < e.CrackLevels.length; ++o) {
                  t.int32(e.CrackLevels[o]);
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
              var o = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tcbProto.SpinAck(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                  case 1:
                    if (!(i.RoundQueue && i.RoundQueue.length)) {
                      i.RoundQueue = [];
                    }
                    i.RoundQueue.push(u.tcbProto.RoundInfo.decode(e, e.uint32()));
                    break;
                  case 2:
                    i.Bet = e.double();
                    break;
                  case 3:
                    i.FreeTotalWin = e.double();
                    break;
                  case 4:
                    i.TotalWin = e.double();
                    break;
                  case 5:
                    i.RTP = e.double();
                    break;
                  case 6:
                    i.GameType = e.int32();
                    break;
                  case 7:
                    if (!(i.CrackLevels && i.CrackLevels.length)) {
                      i.CrackLevels = [];
                    }
                    if (2 == (7 & n)) {
                      for (var r = e.uint32() + e.pos; e.pos < r;) {
                        i.CrackLevels.push(e.int32());
                      }
                    } else {
                      i.CrackLevels.push(e.int32());
                    }
                    break;
                  default:
                    e.skipType(7 & n);
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
                  var o = u.tcbProto.RoundInfo.verify(e.RoundQueue[t]);
                  if (o) {
                    return "RoundQueue." + o;
                  }
                }
              }
              if (null != e.Bet && e.hasOwnProperty("Bet") && "number" != typeof e.Bet) {
                return "Bet: number expected";
              }
              if (null != e.FreeTotalWin && e.hasOwnProperty("FreeTotalWin") && "number" != typeof e.FreeTotalWin) {
                return "FreeTotalWin: number expected";
              }
              if (null != e.TotalWin && e.hasOwnProperty("TotalWin") && "number" != typeof e.TotalWin) {
                return "TotalWin: number expected";
              }
              if (null != e.RTP && e.hasOwnProperty("RTP") && "number" != typeof e.RTP) {
                return "RTP: number expected";
              }
              if (null != e.GameType && e.hasOwnProperty("GameType") && !c.isInteger(e.GameType)) {
                return "GameType: integer expected";
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
              if (e instanceof u.tcbProto.SpinAck) {
                return e;
              }
              var t = new u.tcbProto.SpinAck();
              if (e.RoundQueue) {
                if (!Array.isArray(e.RoundQueue)) {
                  throw TypeError(".tcbProto.SpinAck.RoundQueue: array expected");
                }
                t.RoundQueue = [];
                for (var o = 0; o < e.RoundQueue.length; ++o) {
                  if ("object" != typeof e.RoundQueue[o]) {
                    throw TypeError(".tcbProto.SpinAck.RoundQueue: object expected");
                  }
                  t.RoundQueue[o] = u.tcbProto.RoundInfo.fromObject(e.RoundQueue[o]);
                }
              }
              if (null != e.Bet) {
                t.Bet = Number(e.Bet);
              }
              if (null != e.FreeTotalWin) {
                t.FreeTotalWin = Number(e.FreeTotalWin);
              }
              if (null != e.TotalWin) {
                t.TotalWin = Number(e.TotalWin);
              }
              if (null != e.RTP) {
                t.RTP = Number(e.RTP);
              }
              if (null != e.GameType) {
                t.GameType = 0 | e.GameType;
              }
              if (e.CrackLevels) {
                if (!Array.isArray(e.CrackLevels)) {
                  throw TypeError(".tcbProto.SpinAck.CrackLevels: array expected");
                }
                t.CrackLevels = [];
                for (o = 0; o < e.CrackLevels.length; ++o) {
                  t.CrackLevels[o] = 0 | e.CrackLevels[o];
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var o = {};
              if (t.arrays || t.defaults) {
                o.RoundQueue = [];
                o.CrackLevels = [];
              }
              if (t.defaults) {
                o.Bet = 0;
                o.FreeTotalWin = 0;
                o.TotalWin = 0;
                o.RTP = 0;
                o.GameType = 0;
              }
              if (e.RoundQueue && e.RoundQueue.length) {
                o.RoundQueue = [];
                for (var i = 0; i < e.RoundQueue.length; ++i) {
                  o.RoundQueue[i] = u.tcbProto.RoundInfo.toObject(e.RoundQueue[i], t);
                }
              }
              if (null != e.Bet && e.hasOwnProperty("Bet")) {
                o.Bet = t.json && !isFinite(e.Bet) ? String(e.Bet) : e.Bet;
              }
              if (null != e.FreeTotalWin && e.hasOwnProperty("FreeTotalWin")) {
                o.FreeTotalWin = t.json && !isFinite(e.FreeTotalWin) ? String(e.FreeTotalWin) : e.FreeTotalWin;
              }
              if (null != e.TotalWin && e.hasOwnProperty("TotalWin")) {
                o.TotalWin = t.json && !isFinite(e.TotalWin) ? String(e.TotalWin) : e.TotalWin;
              }
              if (null != e.RTP && e.hasOwnProperty("RTP")) {
                o.RTP = t.json && !isFinite(e.RTP) ? String(e.RTP) : e.RTP;
              }
              if (null != e.GameType && e.hasOwnProperty("GameType")) {
                o.GameType = e.GameType;
              }
              if (e.CrackLevels && e.CrackLevels.length) {
                o.CrackLevels = [];
                for (i = 0; i < e.CrackLevels.length; ++i) {
                  o.CrackLevels[i] = e.CrackLevels[i];
                }
              }
              return o;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tcbProto.SpinAck";
            };
            return e;
          }(),
          StateInfo: function () {
            function e(e) {
              this.CrackLevels = [];
              if (e) {
                var t = Object.keys(e);
                for (var o = 0; o < t.length; ++o) {
                  if (null != e[t[o]]) {
                    this[t[o]] = e[t[o]];
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
                for (var o = 0; o < e.CrackLevels.length; ++o) {
                  t.int32(e.CrackLevels[o]);
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
              var o = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tcbProto.StateInfo(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                  case 1:
                    if (!(i.CrackLevels && i.CrackLevels.length)) {
                      i.CrackLevels = [];
                    }
                    if (2 == (7 & n)) {
                      for (var r = e.uint32() + e.pos; e.pos < r;) {
                        i.CrackLevels.push(e.int32());
                      }
                    } else {
                      i.CrackLevels.push(e.int32());
                    }
                    break;
                  default:
                    e.skipType(7 & n);
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
              if (e instanceof u.tcbProto.StateInfo) {
                return e;
              }
              var t = new u.tcbProto.StateInfo();
              if (e.CrackLevels) {
                if (!Array.isArray(e.CrackLevels)) {
                  throw TypeError(".tcbProto.StateInfo.CrackLevels: array expected");
                }
                t.CrackLevels = [];
                for (var o = 0; o < e.CrackLevels.length; ++o) {
                  t.CrackLevels[o] = 0 | e.CrackLevels[o];
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var o = {};
              if (t.arrays || t.defaults) {
                o.CrackLevels = [];
              }
              if (e.CrackLevels && e.CrackLevels.length) {
                o.CrackLevels = [];
                for (var i = 0; i < e.CrackLevels.length; ++i) {
                  o.CrackLevels[i] = e.CrackLevels[i];
                }
              }
              return o;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tcbProto.StateInfo";
            };
            return e;
          }(),
          GameInfoData: function () {
            function e(e) {
              this.Mul = [];
              this.CrackLevels = [];
              if (e) {
                var t = Object.keys(e);
                for (var o = 0; o < t.length; ++o) {
                  if (null != e[t[o]]) {
                    this[t[o]] = e[t[o]];
                  }
                }
              }
            }
            e.prototype.ShowExtra = false;
            e.prototype.Mul = c.emptyArray;
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
                for (var o = 0; o < e.Mul.length; ++o) {
                  t.double(e.Mul[o]);
                }
                t.ldelim();
              }
              if (null != e.CrackLevels && e.CrackLevels.length) {
                t.uint32(26).fork();
                for (o = 0; o < e.CrackLevels.length; ++o) {
                  t.int32(e.CrackLevels[o]);
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
              var o = undefined === t ? e.len : e.pos + t;
              for (var i = new u.tcbProto.GameInfoData(); e.pos < o;) {
                var n = e.uint32();
                switch (n >>> 3) {
                  case 1:
                    i.ShowExtra = e.bool();
                    break;
                  case 2:
                    if (!(i.Mul && i.Mul.length)) {
                      i.Mul = [];
                    }
                    if (2 == (7 & n)) {
                      for (var r = e.uint32() + e.pos; e.pos < r;) {
                        i.Mul.push(e.double());
                      }
                    } else {
                      i.Mul.push(e.double());
                    }
                    break;
                  case 3:
                    if (!(i.CrackLevels && i.CrackLevels.length)) {
                      i.CrackLevels = [];
                    }
                    if (2 == (7 & n)) {
                      for (r = e.uint32() + e.pos; e.pos < r;) {
                        i.CrackLevels.push(e.int32());
                      }
                    } else {
                      i.CrackLevels.push(e.int32());
                    }
                    break;
                  default:
                    e.skipType(7 & n);
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
              if (e instanceof u.tcbProto.GameInfoData) {
                return e;
              }
              var t = new u.tcbProto.GameInfoData();
              if (null != e.ShowExtra) {
                t.ShowExtra = Boolean(e.ShowExtra);
              }
              if (e.Mul) {
                if (!Array.isArray(e.Mul)) {
                  throw TypeError(".tcbProto.GameInfoData.Mul: array expected");
                }
                t.Mul = [];
                for (var o = 0; o < e.Mul.length; ++o) {
                  t.Mul[o] = Number(e.Mul[o]);
                }
              }
              if (e.CrackLevels) {
                if (!Array.isArray(e.CrackLevels)) {
                  throw TypeError(".tcbProto.GameInfoData.CrackLevels: array expected");
                }
                t.CrackLevels = [];
                for (o = 0; o < e.CrackLevels.length; ++o) {
                  t.CrackLevels[o] = 0 | e.CrackLevels[o];
                }
              }
              return t;
            };
            e.toObject = function (e, t) {
              if (!t) {
                t = {};
              }
              var o = {};
              if (t.arrays || t.defaults) {
                o.Mul = [];
                o.CrackLevels = [];
              }
              if (t.defaults) {
                o.ShowExtra = false;
              }
              if (null != e.ShowExtra && e.hasOwnProperty("ShowExtra")) {
                o.ShowExtra = e.ShowExtra;
              }
              if (e.Mul && e.Mul.length) {
                o.Mul = [];
                for (var i = 0; i < e.Mul.length; ++i) {
                  o.Mul[i] = t.json && !isFinite(e.Mul[i]) ? String(e.Mul[i]) : e.Mul[i];
                }
              }
              if (e.CrackLevels && e.CrackLevels.length) {
                o.CrackLevels = [];
                for (i = 0; i < e.CrackLevels.length; ++i) {
                  o.CrackLevels[i] = e.CrackLevels[i];
                }
              }
              return o;
            };
            e.prototype.toJSON = function () {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            };
            e.getTypeUrl = function (e) {
              if (undefined === e) {
                e = "type.googleapis.com";
              }
              return e + "/tcbProto.GameInfoData";
            };
            return e;
          }()
        }).Column = function () {
          function e(e) {
            this.Col = [];
            if (e) {
              var t = Object.keys(e);
              for (var o = 0; o < t.length; ++o) {
                if (null != e[t[o]]) {
                  this[t[o]] = e[t[o]];
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
              for (var o = 0; o < e.Col.length; ++o) {
                t.int32(e.Col[o]);
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
            var o = undefined === t ? e.len : e.pos + t;
            for (var i = new u.tcbProto.Column(); e.pos < o;) {
              var n = e.uint32();
              switch (n >>> 3) {
                case 1:
                  if (!(i.Col && i.Col.length)) {
                    i.Col = [];
                  }
                  if (2 == (7 & n)) {
                    for (var r = e.uint32() + e.pos; e.pos < r;) {
                      i.Col.push(e.int32());
                    }
                  } else {
                    i.Col.push(e.int32());
                  }
                  break;
                default:
                  e.skipType(7 & n);
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
            if (e instanceof u.tcbProto.Column) {
              return e;
            }
            var t = new u.tcbProto.Column();
            if (e.Col) {
              if (!Array.isArray(e.Col)) {
                throw TypeError(".tcbProto.Column.Col: array expected");
              }
              t.Col = [];
              for (var o = 0; o < e.Col.length; ++o) {
                t.Col[o] = 0 | e.Col[o];
              }
            }
            return t;
          };
          e.toObject = function (e, t) {
            if (!t) {
              t = {};
            }
            var o = {};
            if (t.arrays || t.defaults) {
              o.Col = [];
            }
            if (e.Col && e.Col.length) {
              o.Col = [];
              for (var i = 0; i < e.Col.length; ++i) {
                o.Col[i] = e.Col[i];
              }
            }
            return o;
          };
          e.prototype.toJSON = function () {
            return this.constructor.toObject(this, a.util.toJSONOptions);
          };
          e.getTypeUrl = function (e) {
            if (undefined === e) {
              e = "type.googleapis.com";
            }
            return e + "/tcbProto.Column";
          };
          return e;
        }();
        u.tcbProto = r;
        o.exports = u;
        _cjsExports = o.exports;
      }, function () {
        return {
          "protobufjs/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      loader.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/assets/Script/Proto/tcbProto.js");
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (e, t, o, i, n) {
        function r(e, t) {
          if ("string" == typeof e) {
            t = e;
            e = undefined;
          }
          var o = [];
          function i(e) {
            if ("string" != typeof e) {
              var t = "function " + (undefined || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + o.join("\n  ") + "\n}";
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
            for (var d = 0; d < u.length;) {
              u[d] = arguments[++d];
            }
            d = 0;
            e = e.replace(/%([%dfijs])/g, function (e, t) {
              var o = u[d++];
              switch (t) {
                case "d":
                case "f":
                  return String(Number(o));
                case "i":
                  return String(Math.floor(o));
                case "j":
                  return JSON.stringify(o);
                case "s":
                  return String(o);
              }
              return "%";
            });
            if (d !== u.length) {
              throw Error("parameter count mismatch");
            }
            o.push(e);
            return i;
          }
          function n(i) {
            return "function " + (i || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + o.join("\n  ") + "\n}";
          }
          i.toString = n;
          return i;
        }
        o.exports = r;
        r.verbose = false;
        o.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (e, t, o, i, n) {
        o.exports = s;
        var r = t("@protobufjs/aspromise");
        var a = t("@protobufjs/inquire")("fs");
        function s(e, t, o) {
          if ("function" == typeof t) {
            o = t;
            t = {};
          } else if (!t) {
            t = {};
          }
          return o ? !t.xhr && a && a.readFile ? a.readFile(e, function (i, n) {
            return i && "undefined" != typeof XMLHttpRequest ? s.xhr(e, t, o) : i ? o(i) : o(null, t.binary ? n : n.toString("utf8"));
          }) : s.xhr(e, t, o) : r(s, this, e, t);
        }
        s.xhr = function (e, t, o) {
          var i = new XMLHttpRequest();
          i.onreadystatechange = function () {
            if (4 === i.readyState) {
              if (0 !== i.status && 200 !== i.status) {
                return o(Error("status " + i.status));
              }
              if (t.binary) {
                var e = i.response;
                if (!e) {
                  e = [];
                  for (var n = 0; n < i.responseText.length; ++n) {
                    e.push(255 & i.responseText.charCodeAt(n));
                  }
                }
                return o(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e);
              }
              return o(null, i.responseText);
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
        o.exports;
      }, function () {
        return {
          "@protobufjs/aspromise": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/inquire": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (e, t, o, i, n) {
        var a = e.isAbsolute = function (e) {
          return /^(?:\/|\w+:)/.test(e);
        };
        var s = e.normalize = function (e) {
          var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/");
          var o = a(e);
          var i = "";
          if (o) {
            i = t.shift() + "/";
          }
          for (var n = 0; n < t.length;) {
            if (".." === t[n]) {
              if (n > 0 && ".." !== t[n - 1]) {
                t.splice(--n, 2);
              } else if (o) {
                t.splice(n, 1);
              } else {
                ++n;
              }
            } else if ("." === t[n]) {
              t.splice(n, 1);
            } else {
              ++n;
            }
          }
          return i + t.join("/");
        };
        e.resolve = function (e, t, o) {
          if (!o) {
            t = s(t);
          }
          return a(t) ? t : (o || (e = s(e)), (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? s(e + "/" + t) : t);
        };
        o.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (e, t, o, i, n) {
        var a = t("./util");
        var s = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function l(e, t) {
          var o = 0;
          var i = {};
          for (t |= 0; o < e.length;) {
            i[s[o + t]] = e[o++];
          }
          return i;
        }
        e.basic = l([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
        e.defaults = l([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", a.emptyArray, null]);
        e.long = l([0, 0, 0, 1, 1], 7);
        e.mapKey = l([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
        e.packed = l([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
        o.exports;
      }, function () {
        return {
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (e, t, o, i, n) {
        o.exports = d;
        var r = t("./object");
        ((d.prototype = Object.create(r.prototype)).constructor = d).className = "Field";
        var a;
        var s = t("./enum");
        var l = t("./types");
        var c = t("./util");
        var u = /^required|optional|repeated$/;
        function d(e, t, o, i, n, a, s) {
          if (c.isObject(i)) {
            s = n;
            a = i;
            i = n = undefined;
          } else if (c.isObject(n)) {
            s = a;
            a = n;
            n = undefined;
          }
          r.call(this, e, a);
          if (!c.isInteger(t) || t < 0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!c.isString(o)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== i && !u.test(i = i.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== n && !c.isString(n)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === i) {
            i = "optional";
          }
          this.rule = i && "optional" !== i ? i : undefined;
          this.type = o;
          this.id = t;
          this.extend = n || undefined;
          this.required = "required" === i;
          this.optional = !this.required;
          this.repeated = "repeated" === i;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!c.Long && undefined !== l.long[o];
          this.bytes = "bytes" === o;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = s;
        }
        d.fromJSON = function (e, t) {
          return new d(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
        };
        Object.defineProperty(d.prototype, "packed", {
          get: function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        d.prototype.setOption = function (e, t, o) {
          if ("packed" === e) {
            this._packed = null;
          }
          return r.prototype.setOption.call(this, e, t, o);
        };
        d.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return c.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
        };
        d.prototype.resolve = function () {
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
        d.d = function (e, t, o, i) {
          if ("function" == typeof t) {
            t = c.decorateType(t).name;
          } else if (t && "object" == typeof t) {
            t = c.decorateEnum(t).name;
          }
          return function (n, r) {
            c.decorateType(n.constructor).add(new d(r, e, t, o, {
              default: i
            }));
          };
        };
        d._configure = function (e) {
          a = e;
        };
        o.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (e, t, o, i, n) {
        o.exports = l;
        var r = t("./object");
        ((l.prototype = Object.create(r.prototype)).constructor = l).className = "OneOf";
        var a = t("./field");
        var s = t("./util");
        function l(e, t, o, i) {
          if (!Array.isArray(t)) {
            o = t;
            t = undefined;
          }
          r.call(this, e, o);
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
            var o = e.get(this.oneof[t]);
            if (o && !o.partOf) {
              o.partOf = this;
              this.fieldsArray.push(o);
            }
          }
          c(this);
        };
        l.prototype.onRemove = function (e) {
          var t;
          for (var o = 0; o < this.fieldsArray.length; ++o) {
            if ((t = this.fieldsArray[o]).parent) {
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
          return function (t, o) {
            s.decorateType(t.constructor).add(new l(o, e));
            Object.defineProperty(t, o, {
              get: s.oneOfGetter(e),
              set: s.oneOfSetter(e)
            });
          };
        };
        o.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (e, t, o, i, n) {
        o.exports = _;
        var r = t("./object");
        ((_.prototype = Object.create(r.prototype)).constructor = _).className = "Namespace";
        var a;
        var s;
        var l;
        var c = t("./field");
        var u = t("./oneof");
        var d = t("./util");
        function p(e, t) {
          if (e && e.length) {
            var o = {};
            for (var i = 0; i < e.length; ++i) {
              o[e[i].name] = e[i].toJSON(t);
            }
            return o;
          }
        }
        function _(e, t) {
          r.call(this, e, t);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function m(e) {
          e._nestedArray = null;
          return e;
        }
        _.fromJSON = function (e, t) {
          return new _(e, t.options).addJSON(t.nested);
        };
        _.arrayToJSON = p;
        _.isReservedId = function (e, t) {
          if (e) {
            for (var o = 0; o < e.length; ++o) {
              if ("string" != typeof e[o] && e[o][0] <= t && e[o][1] > t) {
                return true;
              }
            }
          }
          return false;
        };
        _.isReservedName = function (e, t) {
          if (e) {
            for (var o = 0; o < e.length; ++o) {
              if (e[o] === t) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_.prototype, "nestedArray", {
          get: function () {
            return this._nestedArray || (this._nestedArray = d.toArray(this.nested));
          }
        });
        _.prototype.toJSON = function (e) {
          return d.toObject(["options", this.options, "nested", p(this.nestedArray, e)]);
        };
        _.prototype.addJSON = function (e) {
          if (e) {
            var t;
            var o = Object.keys(e);
            for (var i = 0; i < o.length; ++i) {
              t = e[o[i]];
              this.add((undefined !== t.fields ? a.fromJSON : undefined !== t.values ? l.fromJSON : undefined !== t.methods ? s.fromJSON : undefined !== t.id ? c.fromJSON : _.fromJSON)(o[i], t));
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
              var o = t.nestedArray;
              for (var i = 0; i < o.length; ++i) {
                e.add(o[i]);
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
          return m(this);
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
          return m(this);
        };
        _.prototype.define = function (e, t) {
          if (d.isString(e)) {
            e = e.split(".");
          } else if (!Array.isArray(e)) {
            throw TypeError("illegal path");
          }
          if (e && e.length && "" === e[0]) {
            throw Error("path must be relative");
          }
          for (var o = this; e.length > 0;) {
            var i = e.shift();
            if (o.nested && o.nested[i]) {
              if (!((o = o.nested[i]) instanceof _)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              o.add(o = new _(i));
            }
          }
          if (t) {
            o.addJSON(t);
          }
          return o;
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
        _.prototype.lookup = function (e, t, o) {
          if ("boolean" == typeof t) {
            o = t;
            t = undefined;
          } else if (t && !Array.isArray(t)) {
            t = [t];
          }
          if (d.isString(e) && e.length) {
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
            for (var n = 0; n < this.nestedArray.length; ++n) {
              if (this._nestedArray[n] instanceof _ && (i = this._nestedArray[n].lookup(e, t, true))) {
                return i;
              }
            }
          }
          return null === this.parent || o ? null : this.parent.lookup(e, t);
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
        _._configure = function (e, t, o) {
          a = e;
          s = t;
          l = o;
        };
        o.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (e, t, o, i, n) {
        o.exports = l;
        var r = t("./field");
        ((l.prototype = Object.create(r.prototype)).constructor = l).className = "MapField";
        var a = t("./types");
        var s = t("./util");
        function l(e, t, o, i, n, a) {
          r.call(this, e, t, i, undefined, undefined, n, a);
          if (!s.isString(o)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = o;
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
        l.d = function (e, t, o) {
          if ("function" == typeof o) {
            o = s.decorateType(o).name;
          } else if (o && "object" == typeof o) {
            o = s.decorateEnum(o).name;
          }
          return function (i, n) {
            s.decorateType(i.constructor).add(new l(n, e, t, o));
          };
        };
        o.exports;
      }, function () {
        return {
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (e, t, o, i, n) {
        o.exports = s;
        var r = t("./object");
        ((s.prototype = Object.create(r.prototype)).constructor = s).className = "Method";
        var a = t("./util");
        function s(e, t, o, i, n, s, l, c, u) {
          if (a.isObject(n)) {
            l = n;
            n = s = undefined;
          } else if (a.isObject(s)) {
            l = s;
            s = undefined;
          }
          if (undefined !== t && !a.isString(t)) {
            throw TypeError("type must be a string");
          }
          if (!a.isString(o)) {
            throw TypeError("requestType must be a string");
          }
          if (!a.isString(i)) {
            throw TypeError("responseType must be a string");
          }
          r.call(this, e, l);
          this.type = t || "rpc";
          this.requestType = o;
          this.requestStream = !!n || undefined;
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
        o.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (e, t, o, i, n) {
        o.exports = c;
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
          var o = new c(e, t.options);
          if (t.methods) {
            var i = Object.keys(t.methods);
            for (var n = 0; n < i.length; ++n) {
              o.add(a.fromJSON(i[n], t.methods[i[n]]));
            }
          }
          if (t.nested) {
            o.addJSON(t.nested);
          }
          o.comment = t.comment;
          return o;
        };
        c.prototype.toJSON = function (e) {
          var t = r.prototype.toJSON.call(this, e);
          var o = !!e && Boolean(e.keepComments);
          return s.toObject(["options", t && t.options || undefined, "methods", r.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", o ? this.comment : undefined]);
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
        c.prototype.create = function (e, t, o) {
          var i;
          var n = new l.Service(e, t, o);
          for (var r = 0; r < this.methodsArray.length; ++r) {
            var a = s.lcFirst((i = this._methodsArray[r]).resolve().name).replace(/[^$\w_]/g, "");
            n[a] = s.codegen(["r", "c"], s.isReserved(a) ? a + "_" : a)("return this.rpcCall(m,q,s,r,c)")({
              m: i,
              q: i.resolvedRequestType.ctor,
              s: i.resolvedResponseType.ctor
            });
          }
          return n;
        };
        o.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./rpc": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (e, t, o, i, n) {
        o.exports = a;
        var r = t("./util/minimal");
        function a(e) {
          if (e) {
            var t = Object.keys(e);
            for (var o = 0; o < t.length; ++o) {
              this[t[o]] = e[t[o]];
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
        o.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (e, t, o, i, n) {
        o.exports = function (e) {
          var t = s.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function (e) {
            return e.map;
          }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
          if (e.group) {
            t("if((t&7)===4)")("break");
          }
          t("switch(t>>>3){");
          for (var o = 0; o < e.fieldsArray.length; ++o) {
            var i = e._fieldsArray[o].resolve();
            var n = i.resolvedType instanceof r ? "int32" : i.type;
            var c = "m" + s.safeProp(i.name);
            t("case %i:", i.id);
            if (i.map) {
              t("if(%s===util.emptyObject)", c)("%s={}", c)("var c2 = r.uint32()+r.pos");
              if (undefined !== a.defaults[i.keyType]) {
                t("k=%j", a.defaults[i.keyType]);
              } else {
                t("k=null");
              }
              if (undefined !== a.defaults[n]) {
                t("value=%j", a.defaults[n]);
              } else {
                t("value=null");
              }
              t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", i.keyType)("case 2:");
              if (undefined === a.basic[n]) {
                t("value=types[%i].decode(r,r.uint32())", o);
              } else {
                t("value=r.%s()", n);
              }
              t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
              if (undefined !== a.long[i.keyType]) {
                t("%s[typeof k===\"object\"?util.longToHash(k):k]=value", c);
              } else {
                t("%s[k]=value", c);
              }
            } else if (i.repeated) {
              t("if(!(%s&&%s.length))", c, c)("%s=[]", c);
              if (undefined !== a.packed[n]) {
                t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", c, n)("}else");
              }
              if (undefined === a.basic[n]) {
                t(i.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", c, o);
              } else {
                t("%s.push(r.%s())", c, n);
              }
            } else if (undefined === a.basic[n]) {
              t(i.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", c, o);
            } else {
              t("%s=r.%s()", c, n);
            }
            t("break");
          }
          t("default:")("r.skipType(t&7)")("break")("}")("}");
          for (o = 0; o < e._fieldsArray.length; ++o) {
            var u = e._fieldsArray[o];
            if (u.required) {
              t("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + u.name + "'");
            }
          }
          return t("return m");
        };
        var r = t("./enum");
        var a = t("./types");
        var s = t("./util");
        o.exports;
      }, function () {
        return {
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (e, t, o, i, n) {
        o.exports = function (e) {
          var t = a.codegen(["m"], e.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var o = e.oneofsArray;
          var i = {};
          if (o.length) {
            t("var p={}");
          }
          for (var n = 0; n < e.fieldsArray.length; ++n) {
            var r = e._fieldsArray[n].resolve();
            var u = "m" + a.safeProp(r.name);
            if (r.optional) {
              t("if(%s!=null&&m.hasOwnProperty(%j)){", u, r.name);
            }
            if (r.map) {
              t("if(!util.isObject(%s))", u)("return%j", r.name + ": " + "object" + (r.repeated && true ? "[]" : r.map && false ? "{k:" + r.keyType + "}" : "") + " expected")("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){");
              c(t, r, "k[i]");
              l(t, r, n, u + "[k[i]]")("}");
            } else if (r.repeated) {
              t("if(!Array.isArray(%s))", u)("return%j", r.name + ": " + "array" + (r.repeated && false ? "[]" : r.map && true ? "{k:" + r.keyType + "}" : "") + " expected")("for(var i=0;i<%s.length;++i){", u);
              l(t, r, n, u + "[i]")("}");
            } else {
              if (r.partOf) {
                var d = a.safeProp(r.partOf.name);
                if (1 === i[r.partOf.name]) {
                  t("if(p%s===1)", d)("return%j", r.partOf.name + ": multiple values");
                }
                i[r.partOf.name] = 1;
                t("p%s=1", d);
              }
              l(t, r, n, u);
            }
            if (r.optional) {
              t("}");
            }
          }
          return t("return null");
        };
        var r = t("./enum");
        var a = t("./util");
        function l(e, t, o, i) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof r) {
              e("switch(%s){", i)("default:")("return%j", t.name + ": " + "enum value" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              var n = Object.keys(t.resolvedType.values);
              for (var a = 0; a < n.length; ++a) {
                e("case %i:", t.resolvedType.values[n[a]]);
              }
              e("break")("}");
            } else {
              e("{")("var e=types[%i].verify(%s);", o, i)("if(e)")("return%j+e", t.name + ".")("}");
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
        function c(e, t, o) {
          switch (t.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              e("if(!util.key32Re.test(%s))", o)("return%j", t.name + ": " + "integer key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              e("if(!util.key64Re.test(%s))", o)("return%j", t.name + ": " + "integer|Long key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
              break;
            case "bool":
              e("if(!util.key2Re.test(%s))", o)("return%j", t.name + ": " + "boolean key" + (t.repeated && true ? "[]" : t.map && true ? "{k:" + t.keyType + "}" : "") + " expected");
          }
          return e;
        }
        o.exports;
      }, function () {
        return {
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (e, t, o, i, n) {
        var a = t("./enum");
        var s = t("./util");
        function l(e, t, o, i) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof a) {
              e("switch(d%s){", i);
              var n = t.resolvedType.values;
              var r = Object.keys(n);
              for (var s = 0; s < r.length; ++s) {
                if (t.repeated && n[r[s]] === t.typeDefault) {
                  e("default:");
                }
                e("case%j:", r[s])("case %i:", n[r[s]])("m%s=%j", i, n[r[s]])("break");
              }
              e("}");
            } else {
              e("if(typeof d%s!==\"object\")", i)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", i, o, i);
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
        function c(e, t, o, i) {
          if (t.resolvedType) {
            if (t.resolvedType instanceof a) {
              e("d%s=o.enums===String?types[%i].values[m%s]:m%s", i, o, i, i);
            } else {
              e("d%s=types[%i].toObject(m%s,o)", i, o, i);
            }
          } else {
            var n = false;
            switch (t.type) {
              case "double":
              case "float":
                e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", i, i, i, i);
                break;
              case "uint64":
                n = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                e("if(typeof m%s===\"number\")", i)("d%s=o.longs===String?String(m%s):m%s", i, i, i)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", i, i, i, i, n ? "true" : "", i);
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
          var o = s.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!t.length) {
            return o("return new this.ctor");
          }
          o("var m=new this.ctor");
          for (var i = 0; i < t.length; ++i) {
            var n = t[i].resolve();
            var r = s.safeProp(n.name);
            if (n.map) {
              o("if(d%s){", r)("if(typeof d%s!==\"object\")", r)("throw TypeError(%j)", n.fullName + ": object expected")("m%s={}", r)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", r);
              l(o, n, i, r + "[ks[i]]")("}")("}");
            } else if (n.repeated) {
              o("if(d%s){", r)("if(!Array.isArray(d%s))", r)("throw TypeError(%j)", n.fullName + ": array expected")("m%s=[]", r)("for(var i=0;i<d%s.length;++i){", r);
              l(o, n, i, r + "[i]")("}")("}");
            } else {
              if (!(n.resolvedType instanceof a)) {
                o("if(d%s!=null){", r);
              }
              l(o, n, i, r);
              if (!(n.resolvedType instanceof a)) {
                o("}");
              }
            }
          }
          return o("return m");
        };
        e.toObject = function (e) {
          var t = e.fieldsArray.slice().sort(s.compareFieldsById);
          if (!t.length) {
            return s.codegen()("return {}");
          }
          var o = s.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var i = [];
          var n = [];
          var r = [];
          for (var l = 0; l < t.length; ++l) {
            if (!t[l].partOf) {
              (t[l].resolve().repeated ? i : t[l].map ? n : r).push(t[l]);
            }
          }
          if (i.length) {
            o("if(o.arrays||o.defaults){");
            for (l = 0; l < i.length; ++l) {
              o("d%s=[]", s.safeProp(i[l].name));
            }
            o("}");
          }
          if (n.length) {
            o("if(o.objects||o.defaults){");
            for (l = 0; l < n.length; ++l) {
              o("d%s={}", s.safeProp(n[l].name));
            }
            o("}");
          }
          if (r.length) {
            o("if(o.defaults){");
            for (l = 0; l < r.length; ++l) {
              var u = r[l];
              var d = s.safeProp(u.name);
              if (u.resolvedType instanceof a) {
                o("d%s=o.enums===String?%j:%j", d, u.resolvedType.valuesById[u.typeDefault], u.typeDefault);
              } else if (u.long) {
                o("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", d)("}else")("d%s=o.longs===String?%j:%i", d, u.typeDefault.toString(), u.typeDefault.toNumber());
              } else if (u.bytes) {
                var p = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
                o("if(o.bytes===String)d%s=%j", d, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", d, p)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", d, d)("}");
              } else {
                o("d%s=%j", d, u.typeDefault);
              }
            }
            o("}");
          }
          var _ = false;
          for (l = 0; l < t.length; ++l) {
            u = t[l];
            var m = e._fieldsArray.indexOf(u);
            d = s.safeProp(u.name);
            if (u.map) {
              if (!_) {
                _ = true;
                o("var ks2");
              }
              o("if(m%s&&(ks2=Object.keys(m%s)).length){", d, d)("d%s={}", d)("for(var j=0;j<ks2.length;++j){");
              c(o, u, m, d + "[ks2[j]]")("}");
            } else if (u.repeated) {
              o("if(m%s&&m%s.length){", d, d)("d%s=[]", d)("for(var j=0;j<m%s.length;++j){", d);
              c(o, u, m, d + "[j]")("}");
            } else {
              o("if(m%s!=null&&m.hasOwnProperty(%j)){", d, u.name);
              c(o, u, m, d);
              if (u.partOf) {
                o("if(o.oneofs)")("d%s=%j", s.safeProp(u.partOf.name), u.name);
              }
            }
            o("}");
          }
          return o("return d");
        };
        o.exports;
      }, function () {
        return {
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (e, t, o, i, n) {
        var a = t("./message");
        e[".google.protobuf.Any"] = {
          fromObject: function (e) {
            if (e && e["@type"]) {
              var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1);
              var o = this.lookup(t);
              if (o) {
                var i = "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"];
                if (-1 === i.indexOf("/")) {
                  i = "/" + i;
                }
                return this.create({
                  type_url: i,
                  value: o.encode(o.fromObject(e)).finish()
                });
              }
            }
            return this.fromObject(e);
          },
          toObject: function (e, t) {
            var o = "";
            var i = "";
            if (t && t.json && e.type_url && e.value) {
              i = e.type_url.substring(e.type_url.lastIndexOf("/") + 1);
              o = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
              var n = this.lookup(i);
              if (n) {
                e = n.decode(e.value);
              }
            }
            if (!(e instanceof this.ctor) && e instanceof a) {
              var r = e.$type.toObject(e, t);
              if ("" === o) {
                o = "type.googleapis.com/";
              }
              i = o + ("." === e.$type.fullName[0] ? e.$type.fullName.substr(1) : e.$type.fullName);
              r["@type"] = i;
              return r;
            }
            return this.toObject(e, t);
          }
        };
        o.exports;
      }, function () {
        return {
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (e, t, o, i, n) {
        o.exports = g;
        var r = t("./namespace");
        ((g.prototype = Object.create(r.prototype)).constructor = g).className = "Type";
        var a = t("./enum");
        var s = t("./oneof");
        var l = t("./field");
        var c = t("./mapfield");
        var u = t("./service");
        var d = t("./message");
        var p = t("./reader");
        var _ = t("./writer");
        var m = t("./util");
        var h = t("./encoder");
        var f = t("./decoder");
        var y = t("./verifier");
        var C = t("./converter");
        var S = t("./wrappers");
        function g(e, t) {
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
        function b(e) {
          e._fieldsById = e._fieldsArray = e._oneofsArray = null;
          delete e.encode;
          delete e.decode;
          delete e.verify;
          return e;
        }
        Object.defineProperties(g.prototype, {
          fieldsById: {
            get: function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var e = Object.keys(this.fields);
              for (var t = 0; t < e.length; ++t) {
                var o = this.fields[e[t]];
                var i = o.id;
                if (this._fieldsById[i]) {
                  throw Error("duplicate id " + i + " in " + this);
                }
                this._fieldsById[i] = o;
              }
              return this._fieldsById;
            }
          },
          fieldsArray: {
            get: function () {
              return this._fieldsArray || (this._fieldsArray = m.toArray(this.fields));
            }
          },
          oneofsArray: {
            get: function () {
              return this._oneofsArray || (this._oneofsArray = m.toArray(this.oneofs));
            }
          },
          ctor: {
            get: function () {
              return this._ctor || (this.ctor = g.generateConstructor(this)());
            },
            set: function (e) {
              var t = e.prototype;
              if (!(t instanceof d)) {
                (e.prototype = new d()).constructor = e;
                m.merge(e.prototype, t);
              }
              e.$type = e.prototype.$type = this;
              m.merge(e, d, true);
              this._ctor = e;
              for (var o = 0; o < this.fieldsArray.length; ++o) {
                this._fieldsArray[o].resolve();
              }
              var i = {};
              for (o = 0; o < this.oneofsArray.length; ++o) {
                i[this._oneofsArray[o].resolve().name] = {
                  get: m.oneOfGetter(this._oneofsArray[o].oneof),
                  set: m.oneOfSetter(this._oneofsArray[o].oneof)
                };
              }
              if (o) {
                Object.defineProperties(e.prototype, i);
              }
            }
          }
        });
        g.generateConstructor = function (e) {
          var t;
          var o = m.codegen(["p"], e.name);
          for (var i = 0; i < e.fieldsArray.length; ++i) {
            if ((t = e._fieldsArray[i]).map) {
              o("this%s={}", m.safeProp(t.name));
            } else if (t.repeated) {
              o("this%s=[]", m.safeProp(t.name));
            }
          }
          return o("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        g.fromJSON = function (e, t) {
          var o = new g(e, t.options);
          o.extensions = t.extensions;
          o.reserved = t.reserved;
          var i = Object.keys(t.fields);
          for (var n = 0; n < i.length; ++n) {
            o.add((undefined !== t.fields[i[n]].keyType ? c.fromJSON : l.fromJSON)(i[n], t.fields[i[n]]));
          }
          if (t.oneofs) {
            i = Object.keys(t.oneofs);
            for (n = 0; n < i.length; ++n) {
              o.add(s.fromJSON(i[n], t.oneofs[i[n]]));
            }
          }
          if (t.nested) {
            i = Object.keys(t.nested);
            for (n = 0; n < i.length; ++n) {
              var d = t.nested[i[n]];
              o.add((undefined !== d.id ? l.fromJSON : undefined !== d.fields ? g.fromJSON : undefined !== d.values ? a.fromJSON : undefined !== d.methods ? u.fromJSON : r.fromJSON)(i[n], d));
            }
          }
          if (t.extensions && t.extensions.length) {
            o.extensions = t.extensions;
          }
          if (t.reserved && t.reserved.length) {
            o.reserved = t.reserved;
          }
          if (t.group) {
            o.group = true;
          }
          if (t.comment) {
            o.comment = t.comment;
          }
          return o;
        };
        g.prototype.toJSON = function (e) {
          var t = r.prototype.toJSON.call(this, e);
          var o = !!e && Boolean(e.keepComments);
          return m.toObject(["options", t && t.options || undefined, "oneofs", r.arrayToJSON(this.oneofsArray, e), "fields", r.arrayToJSON(this.fieldsArray.filter(function (e) {
            return !e.declaringField;
          }), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", o ? this.comment : undefined]);
        };
        g.prototype.resolveAll = function () {
          var e = this.fieldsArray;
          for (var t = 0; t < e.length;) {
            e[t++].resolve();
          }
          var o = this.oneofsArray;
          for (t = 0; t < o.length;) {
            o[t++].resolve();
          }
          return r.prototype.resolveAll.call(this);
        };
        g.prototype.get = function (e) {
          return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null;
        };
        g.prototype.add = function (e) {
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
            return b(this);
          }
          return e instanceof s ? (this.oneofs || (this.oneofs = {}), this.oneofs[e.name] = e, e.onAdd(this), b(this)) : r.prototype.add.call(this, e);
        };
        g.prototype.remove = function (e) {
          if (e instanceof l && undefined === e.extend) {
            if (!this.fields || this.fields[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.fields[e.name];
            e.parent = null;
            e.onRemove(this);
            return b(this);
          }
          if (e instanceof s) {
            if (!this.oneofs || this.oneofs[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.oneofs[e.name];
            e.parent = null;
            e.onRemove(this);
            return b(this);
          }
          return r.prototype.remove.call(this, e);
        };
        g.prototype.isReservedId = function (e) {
          return r.isReservedId(this.reserved, e);
        };
        g.prototype.isReservedName = function (e) {
          return r.isReservedName(this.reserved, e);
        };
        g.prototype.create = function (e) {
          return new this.ctor(e);
        };
        g.prototype.setup = function () {
          var e = this.fullName;
          var t = [];
          for (var o = 0; o < this.fieldsArray.length; ++o) {
            t.push(this._fieldsArray[o].resolve().resolvedType);
          }
          this.encode = h(this)({
            Writer: _,
            types: t,
            util: m
          });
          this.decode = f(this)({
            Reader: p,
            types: t,
            util: m
          });
          this.verify = y(this)({
            types: t,
            util: m
          });
          this.fromObject = C.fromObject(this)({
            types: t,
            util: m
          });
          this.toObject = C.toObject(this)({
            types: t,
            util: m
          });
          var i = S[e];
          if (i) {
            var n = Object.create(this);
            n.fromObject = this.fromObject;
            this.fromObject = i.fromObject.bind(n);
            n.toObject = this.toObject;
            this.toObject = i.toObject.bind(n);
          }
          return this;
        };
        g.prototype.encode = function (e, t) {
          return this.setup().encode(e, t);
        };
        g.prototype.encodeDelimited = function (e, t) {
          return this.encode(e, t && t.len ? t.fork() : t).ldelim();
        };
        g.prototype.decode = function (e, t) {
          return this.setup().decode(e, t);
        };
        g.prototype.decodeDelimited = function (e) {
          if (!(e instanceof p)) {
            e = p.create(e);
          }
          return this.decode(e, e.uint32());
        };
        g.prototype.verify = function (e) {
          return this.setup().verify(e);
        };
        g.prototype.fromObject = function (e) {
          return this.setup().fromObject(e);
        };
        g.prototype.toObject = function (e, t) {
          return this.setup().toObject(e, t);
        };
        g.d = function (e) {
          return function (t) {
            m.decorateType(t, e);
          };
        };
        o.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./encoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./wrappers": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (e, t, o, i, n) {
        o.exports = _;
        var r = t("./namespace");
        ((_.prototype = Object.create(r.prototype)).constructor = _).className = "Root";
        var a;
        var s;
        var l;
        var c = t("./field");
        var u = t("./enum");
        var d = t("./oneof");
        var p = t("./util");
        function _(e) {
          r.call(this, "", e);
          this.deferred = [];
          this.files = [];
        }
        function m() {}
        _.fromJSON = function (e, t) {
          if (!t) {
            t = new _();
          }
          if (e.options) {
            t.setOptions(e.options);
          }
          return t.addJSON(e.nested);
        };
        _.prototype.resolvePath = p.path.resolve;
        _.prototype.fetch = p.fetch;
        _.prototype.load = function e(t, o, i) {
          if ("function" == typeof o) {
            i = o;
            o = undefined;
          }
          var n = this;
          if (!i) {
            return p.asPromise(e, n, t, o);
          }
          var r = i === m;
          function a(e, t) {
            if (i) {
              var o = i;
              i = null;
              if (r) {
                throw e;
              }
              o(e, t);
            }
          }
          function c(e) {
            var t = e.lastIndexOf("google/protobuf/");
            if (t > -1) {
              var o = e.substring(t);
              if (o in l) {
                return o;
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
                s.filename = e;
                var i;
                var l = s(t, n, o);
                var u = 0;
                if (l.imports) {
                  for (; u < l.imports.length; ++u) {
                    if (i = c(l.imports[u]) || n.resolvePath(e, l.imports[u])) {
                      d(i);
                    }
                  }
                }
                if (l.weakImports) {
                  for (u = 0; u < l.weakImports.length; ++u) {
                    if (i = c(l.weakImports[u]) || n.resolvePath(e, l.weakImports[u])) {
                      d(i, true);
                    }
                  }
                }
              } else {
                n.setOptions(t.options).addJSON(t.nested);
              }
            } catch (e) {
              a(e);
            }
            if (!(r || _)) {
              a(null, n);
            }
          }
          function d(e, t) {
            if (!(n.files.indexOf(e) > -1)) {
              n.files.push(e);
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
                var o;
                try {
                  o = p.fs.readFileSync(e).toString("utf8");
                } catch (e) {
                  return void (t || a(e));
                }
                u(e, o);
              } else {
                ++_;
                n.fetch(e, function (o, r) {
                  --_;
                  if (i) {
                    if (o) {
                      if (t) {
                        if (!_) {
                          a(null, n);
                        }
                      } else {
                        a(o);
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
          if (p.isString(t)) {
            t = [t];
          }
          var h;
          for (var f = 0; f < t.length; ++f) {
            if (h = n.resolvePath("", t[f])) {
              d(h);
            }
          }
          if (r) {
            return n;
          }
          if (!_) {
            a(null, n);
          }
        };
        _.prototype.loadSync = function (e, t) {
          if (!p.isNode) {
            throw Error("not supported");
          }
          return this.load(e, t, m);
        };
        _.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (e) {
              return "'extend " + e.extend + "' in " + e.parent.fullName;
            }).join(", "));
          }
          return r.prototype.resolveAll.call(this);
        };
        var h = /^[A-Z]/;
        function f(e, t) {
          var o = t.parent.lookup(t.extend);
          if (o) {
            var i = new c(t.fullName, t.id, t.type, t.rule, undefined, t.options);
            i.declaringField = t;
            t.extensionField = i;
            o.add(i);
            return true;
          }
          return false;
        }
        _.prototype._handleAdd = function (e) {
          if (e instanceof c) {
            if (!(undefined === e.extend || e.extensionField || f(0, e))) {
              this.deferred.push(e);
            }
          } else if (e instanceof u) {
            if (h.test(e.name)) {
              e.parent[e.name] = e.values;
            }
          } else if (!(e instanceof d)) {
            if (e instanceof a) {
              for (var t = 0; t < this.deferred.length;) {
                if (f(0, this.deferred[t])) {
                  this.deferred.splice(t, 1);
                } else {
                  ++t;
                }
              }
            }
            for (var o = 0; o < e.nestedArray.length; ++o) {
              this._handleAdd(e._nestedArray[o]);
            }
            if (h.test(e.name)) {
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
            if (h.test(e.name)) {
              delete e.parent[e.name];
            }
          } else if (e instanceof r) {
            for (var o = 0; o < e.nestedArray.length; ++o) {
              this._handleRemove(e._nestedArray[o]);
            }
            if (h.test(e.name)) {
              delete e.parent[e.name];
            }
          }
        };
        _._configure = function (e, t, o) {
          a = e;
          s = t;
          l = o;
        };
        o.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (e, t, o, i, n) {
        var r;
        var a;
        var s = o.exports = t("./util/minimal");
        var l = t("./roots");
        s.codegen = t("@protobufjs/codegen");
        s.fetch = t("@protobufjs/fetch");
        s.path = t("@protobufjs/path");
        s.fs = s.inquire("fs");
        s.toArray = function (e) {
          if (e) {
            var t = Object.keys(e);
            var o = new Array(t.length);
            for (var i = 0; i < t.length;) {
              o[i] = e[t[i++]];
            }
            return o;
          }
          return [];
        };
        s.toObject = function (e) {
          var t = {};
          for (var o = 0; o < e.length;) {
            var i = e[o++];
            var n = e[o++];
            if (undefined !== n) {
              t[i] = n;
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
        var d = /_([a-z])/g;
        s.camelCase = function (e) {
          return e.substring(0, 1) + e.substring(1).replace(d, function (e, t) {
            return t.toUpperCase();
          });
        };
        s.compareFieldsById = function (e, t) {
          return e.id - t.id;
        };
        s.decorateType = function (e, o) {
          if (e.$type) {
            if (o && e.$type.name !== o) {
              s.decorateRoot.remove(e.$type);
              e.$type.name = o;
              s.decorateRoot.add(e.$type);
            }
            return e.$type;
          }
          if (!r) {
            r = t("./type");
          }
          var i = new r(o || e.name);
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
        var p = 0;
        s.decorateEnum = function (e) {
          if (e.$type) {
            return e.$type;
          }
          if (!a) {
            a = t("./enum");
          }
          var o = new a("Enum" + p++, e);
          s.decorateRoot.add(o);
          Object.defineProperty(e, "$type", {
            value: o,
            enumerable: false
          });
          return o;
        };
        s.setProperty = function (e, t, o) {
          if ("object" != typeof e) {
            throw TypeError("dst must be an object");
          }
          if (!t) {
            throw TypeError("path must be specified");
          }
          return function e(t, o, i) {
            var n = o.shift();
            if ("__proto__" === n || "prototype" === n) {
              return t;
            }
            if (o.length > 0) {
              t[n] = e(t[n] || {}, o, i);
            } else {
              var r = t[n];
              if (r) {
                i = [].concat(r).concat(i);
              }
              t[n] = i;
            }
            return t;
          }(e, t = t.split("."), o);
        };
        Object.defineProperty(s, "decorateRoot", {
          get: function () {
            return l.decorated || (l.decorated = new (t("./root"))());
          }
        });
        o.exports;
      }, function () {
        return {
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./roots": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          "@protobufjs/codegen": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          "@protobufjs/fetch": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          "@protobufjs/path": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (e, t, o, i, n) {
        o.exports = s;
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
        s.prototype.setOption = function (e, t, o) {
          if (!(o && this.options && undefined !== this.options[e])) {
            (this.options || (this.options = {}))[e] = t;
          }
          return this;
        };
        s.prototype.setParsedOption = function (e, t, o) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var i = this.parsedOptions;
          if (o) {
            var n = i.find(function (t) {
              return Object.prototype.hasOwnProperty.call(t, e);
            });
            if (n) {
              var r = n[e];
              a.setProperty(r, o, t);
            } else {
              (n = {})[e] = a.setProperty({}, o, t);
              i.push(n);
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
            var o = Object.keys(e);
            for (var i = 0; i < o.length; ++i) {
              this.setOption(o[i], e[o[i]], t);
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
        o.exports;
      }, function () {
        return {
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (e, t, o, i, n) {
        o.exports = l;
        var r = t("./object");
        ((l.prototype = Object.create(r.prototype)).constructor = l).className = "Enum";
        var a = t("./namespace");
        var s = t("./util");
        function l(e, t, o, i, n) {
          r.call(this, e, o);
          if (t && "object" != typeof t) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = i;
          this.comments = n || {};
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
          var o = new l(e, t.values, t.options, t.comment, t.comments);
          o.reserved = t.reserved;
          return o;
        };
        l.prototype.toJSON = function (e) {
          var t = !!e && Boolean(e.keepComments);
          return s.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined]);
        };
        l.prototype.add = function (e, t, o) {
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
          this.comments[e] = o || null;
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
        o.exports;
      }, function () {
        return {
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (e, t, o, i, n) {
        o.exports = function (e) {
          var t;
          var o = s.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()");
          var i = e.fieldsArray.slice().sort(s.compareFieldsById);
          for (var n = 0; n < i.length; ++n) {
            var c = i[n].resolve();
            var u = e._fieldsArray.indexOf(c);
            var d = c.resolvedType instanceof r ? "int32" : c.type;
            var p = a.basic[d];
            t = "m" + s.safeProp(c.name);
            if (c.map) {
              o("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, c.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (c.id << 3 | 2) >>> 0, 8 | a.mapKey[c.keyType], c.keyType);
              if (undefined === p) {
                o("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, t);
              } else {
                o(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | p, d, t);
              }
              o("}")("}");
            } else if (c.repeated) {
              o("if(%s!=null&&%s.length){", t, t);
              if (c.packed && undefined !== a.packed[d]) {
                o("w.uint32(%i).fork()", (c.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", d, t)("w.ldelim()");
              } else {
                o("for(var i=0;i<%s.length;++i)", t);
                if (undefined === p) {
                  if (c.resolvedType.group) {
                    o("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t + "[i]", (c.id << 3 | 3) >>> 0, (c.id << 3 | 4) >>> 0);
                  } else {
                    o("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t + "[i]", (c.id << 3 | 2) >>> 0);
                  }
                } else {
                  o("w.uint32(%i).%s(%s[i])", (c.id << 3 | p) >>> 0, d, t);
                }
              }
              o("}");
            } else {
              if (c.optional) {
                o("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, c.name);
              }
              if (undefined === p) {
                if (c.resolvedType.group) {
                  o("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t, (c.id << 3 | 3) >>> 0, (c.id << 3 | 4) >>> 0);
                } else {
                  o("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t, (c.id << 3 | 2) >>> 0);
                }
              } else {
                o("w.uint32(%i).%s(%s)", (c.id << 3 | p) >>> 0, d, t);
              }
            }
          }
          return o("return w");
        };
        var r = t("./enum");
        var a = t("./types");
        var s = t("./util");
        o.exports;
      }, function () {
        return {
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (e, t, o, i, n) {
        var r = o.exports = t("./index-minimal");
        r.build = "light";
        r.load = function (e, t, o) {
          if ("function" == typeof t) {
            o = t;
            t = new r.Root();
          } else if (!t) {
            t = new r.Root();
          }
          return t.load(e, o);
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
        o.exports;
      }, function () {
        return {
          "./index-minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          "./encoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./wrappers": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (e, t, o, i, n) {
        o.exports = h;
        var r = /[\s{}=;:[\],'"()<>]/g;
        var a = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var s = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var l = /^ *[*/]+ */;
        var c = /^\s*\*?\/*/;
        var u = /\n/g;
        var d = /\s/;
        var p = /\\(.?)/g;
        var _ = {
          0: "\0",
          r: "\r",
          n: "\n",
          t: "\t"
        };
        function m(e) {
          return e.replace(p, function (e, t) {
            switch (t) {
              case "\\":
              case "":
                return t;
              default:
                return _[t] || "";
            }
          });
        }
        function h(e, t) {
          e = e.toString();
          var o = 0;
          var i = e.length;
          var n = 1;
          var p = null;
          var _ = null;
          var h = 0;
          var f = false;
          var y = false;
          var C = [];
          var S = null;
          function $(o, i, r) {
            p = e.charAt(o++);
            h = n;
            f = false;
            y = r;
            var a;
            var s = o - (t ? 2 : 3);
            do {
              if (--s < 0 || "\n" === (a = e.charAt(s))) {
                f = true;
                break;
              }
            } while (" " === a || "\t" === a);
            var d = e.substring(o, i).split(u);
            for (var m = 0; m < d.length; ++m) {
              d[m] = d[m].replace(t ? c : l, "").trim();
            }
            _ = d.join("\n").trim();
          }
          function v(t) {
            var o = w(t);
            var i = e.substring(t, o);
            return /^\s*\/{1,2}/.test(i);
          }
          function w(e) {
            for (var t = e; t < i && "\n" !== e.charAt(t);) {
              t++;
            }
            return t;
          }
          function D() {
            if (C.length > 0) {
              return C.shift();
            }
            if (S) {
              return function () {
                var t = "'" === S ? s : a;
                t.lastIndex = o - 1;
                var i = t.exec(e);
                if (!i) {
                  throw Error("illegal string (line " + n + ")");
                }
                o = t.lastIndex;
                P(S);
                S = null;
                return m(i[1]);
              }();
            }
            var l;
            var c;
            var u;
            var p;
            var _;
            var h = 0 === o;
            do {
              if (o === i) {
                return null;
              }
              for (l = false; d.test(u = e.charAt(o));) {
                if ("\n" === u) {
                  h = true;
                  ++n;
                }
                if (++o === i) {
                  return null;
                }
              }
              if ("/" === e.charAt(o)) {
                if (++o === i) {
                  throw Error("illegal comment (line " + n + ")");
                }
                if ("/" === e.charAt(o)) {
                  if (t) {
                    p = o;
                    _ = false;
                    if (v(o)) {
                      _ = true;
                      do {
                        if ((o = w(o)) === i) {
                          break;
                        }
                        o++;
                      } while (v(o));
                    } else {
                      o = Math.min(i, w(o) + 1);
                    }
                    if (_) {
                      $(p, o, h);
                    }
                    n++;
                    l = true;
                  } else {
                    for (_ = "/" === e.charAt(p = o + 1); "\n" !== e.charAt(++o);) {
                      if (o === i) {
                        return null;
                      }
                    }
                    ++o;
                    if (_) {
                      $(p, o - 1, h);
                    }
                    ++n;
                    l = true;
                  }
                } else {
                  if ("*" !== (u = e.charAt(o))) {
                    return "/";
                  }
                  p = o + 1;
                  _ = t || "*" === e.charAt(p);
                  do {
                    if ("\n" === u) {
                      ++n;
                    }
                    if (++o === i) {
                      throw Error("illegal comment (line " + n + ")");
                    }
                    c = u;
                    u = e.charAt(o);
                  } while ("*" !== c || "/" !== u);
                  ++o;
                  if (_) {
                    $(p, o - 2, h);
                  }
                  l = true;
                }
              }
            } while (l);
            var f = o;
            r.lastIndex = 0;
            if (!r.test(e.charAt(f++))) {
              for (; f < i && !r.test(e.charAt(f));) {
                ++f;
              }
            }
            var y = e.substring(o, o = f);
            if (!("\"" !== y && "'" !== y)) {
              S = y;
            }
            return y;
          }
          function P(e) {
            C.push(e);
          }
          function T() {
            if (!C.length) {
              var e = D();
              if (null === e) {
                return null;
              }
              P(e);
            }
            return C[0];
          }
          return Object.defineProperty({
            next: D,
            peek: T,
            push: P,
            skip: function (e, t) {
              var o = T();
              if (o === e) {
                D();
                return true;
              }
              if (!t) {
                throw Error("illegal " + ("token '" + o + "', '" + e + "' expected") + " (line " + n + ")");
              }
              return false;
            },
            cmnt: function (e) {
              var o = null;
              if (undefined === e) {
                if (h === n - 1 && (t || "*" === p || f)) {
                  o = y ? _ : null;
                }
              } else {
                if (h < e) {
                  T();
                }
                if (!(h !== e || f || !t && "/" !== p)) {
                  o = y ? null : _;
                }
              }
              return o;
            }
          }, "line", {
            get: function () {
              return n;
            }
          });
        }
        h.unescape = m;
        o.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (e, t, o, i, n) {
        o.exports = P;
        P.filename = null;
        P.defaults = {
          keepCase: false
        };
        var r = t("./tokenize");
        var a = t("./root");
        var s = t("./type");
        var l = t("./field");
        var c = t("./mapfield");
        var u = t("./oneof");
        var d = t("./enum");
        var p = t("./service");
        var _ = t("./method");
        var m = t("./types");
        var h = t("./util");
        var f = /^[1-9][0-9]*$/;
        var y = /^-?[1-9][0-9]*$/;
        var C = /^0[x][0-9a-fA-F]+$/;
        var S = /^-?0[x][0-9a-fA-F]+$/;
        var g = /^0[0-7]+$/;
        var b = /^-?0[0-7]+$/;
        var $ = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var v = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var w = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var D = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function P(e, t, o) {
          if (!(t instanceof a)) {
            o = t;
            t = new a();
          }
          if (!o) {
            o = P.defaults;
          }
          var i;
          var n;
          var T;
          var A;
          var R;
          var L = o.preferTrailingComment || false;
          var F = r(e, o.alternateCommentMode || false);
          var N = F.next;
          var E = F.push;
          var G = F.peek;
          var I = F.skip;
          var k = F.cmnt;
          var B = true;
          var O = false;
          var M = t;
          var x = o.keepCase ? function (e) {
            return e;
          } : h.camelCase;
          function W(e, t, o) {
            var i = P.filename;
            if (!o) {
              P.filename = null;
            }
            return Error("illegal " + (t || "token") + " '" + e + "' (" + (i ? i + ", " : "") + "line " + F.line + ")");
          }
          function V() {
            var e;
            var t = [];
            do {
              if ("\"" !== (e = N()) && "'" !== e) {
                throw W(e);
              }
              t.push(N());
              I(e);
              e = G();
            } while ("\"" === e || "'" === e);
            return t.join("");
          }
          function z(e) {
            var t = N();
            switch (t) {
              case "'":
              case "\"":
                E(t);
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
                var o = 1;
                if ("-" === e.charAt(0)) {
                  o = -1;
                  e = e.substring(1);
                }
                switch (e) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return o * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case "0":
                    return 0;
                }
                if (f.test(e)) {
                  return o * parseInt(e, 10);
                }
                if (C.test(e)) {
                  return o * parseInt(e, 16);
                }
                if (g.test(e)) {
                  return o * parseInt(e, 8);
                }
                if ($.test(e)) {
                  return o * parseFloat(e);
                }
                throw W(e, "number", t);
              }(t, true);
            } catch (o) {
              if (e && w.test(t)) {
                return t;
              }
              throw W(t, "value");
            }
          }
          function U(e, t) {
            var o;
            var i;
            do {
              if (!t || "\"" !== (o = G()) && "'" !== o) {
                e.push([i = j(N()), I("to", true) ? j(N()) : i]);
              } else {
                e.push(V());
              }
            } while (I(",", true));
            I(";");
          }
          function j(e, t) {
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
            if (S.test(e)) {
              return parseInt(e, 16);
            }
            if (b.test(e)) {
              return parseInt(e, 8);
            }
            throw W(e, "id");
          }
          function H() {
            if (undefined !== i) {
              throw W("package");
            }
            i = N();
            if (!w.test(i)) {
              throw W(i, "name");
            }
            M = M.define(i);
            I(";");
          }
          function K() {
            var e;
            var t = G();
            switch (t) {
              case "weak":
                e = T || (T = []);
                N();
                break;
              case "public":
                N();
              default:
                e = n || (n = []);
            }
            t = V();
            I(";");
            e.push(t);
          }
          function Y() {
            I("=");
            A = V();
            if (!(O = "proto3" === A) && "proto2" !== A) {
              throw W(A, "syntax");
            }
            I(";");
          }
          function J(e, t) {
            switch (t) {
              case "option":
                Q(e, t);
                I(";");
                return true;
              case "message":
                (function (e, t) {
                  if (!v.test(t = N())) {
                    throw W(t, "type name");
                  }
                  var o = new s(t);
                  q(o, function (e) {
                    if (!J(o, e)) {
                      switch (e) {
                        case "map":
                          !function (e) {
                            I("<");
                            var t = N();
                            if (undefined === m.mapKey[t]) {
                              throw W(t, "type");
                            }
                            I(",");
                            var o = N();
                            if (!w.test(o)) {
                              throw W(o, "type");
                            }
                            I(">");
                            var i = N();
                            if (!v.test(i)) {
                              throw W(i, "name");
                            }
                            I("=");
                            var n = new c(x(i), j(N()), t, o);
                            q(n, function (e) {
                              if ("option" !== e) {
                                throw W(e);
                              }
                              Q(n, e);
                              I(";");
                            }, function () {
                              te(n);
                            });
                            e.add(n);
                          }(o);
                          break;
                        case "required":
                        case "repeated":
                          X(o, e);
                          break;
                        case "optional":
                          X(o, O ? "proto3_optional" : "optional");
                          break;
                        case "oneof":
                          !function (e, t) {
                            if (!v.test(t = N())) {
                              throw W(t, "name");
                            }
                            var o = new u(x(t));
                            q(o, function (e) {
                              if ("option" === e) {
                                Q(o, e);
                                I(";");
                              } else {
                                E(e);
                                X(o, "optional");
                              }
                            });
                            e.add(o);
                          }(o, e);
                          break;
                        case "extensions":
                          U(o.extensions || (o.extensions = []));
                          break;
                        case "reserved":
                          U(o.reserved || (o.reserved = []), true);
                          break;
                        default:
                          if (!O || !w.test(e)) {
                            throw W(e);
                          }
                          E(e);
                          X(o, "optional");
                      }
                    }
                  });
                  e.add(o);
                })(e, t);
                return true;
              case "enum":
                (function (e, t) {
                  if (!v.test(t = N())) {
                    throw W(t, "name");
                  }
                  var o = new d(t);
                  q(o, function (e) {
                    switch (e) {
                      case "option":
                        Q(o, e);
                        I(";");
                        break;
                      case "reserved":
                        U(o.reserved || (o.reserved = []), true);
                        break;
                      default:
                        !function (e, t) {
                          if (!v.test(t)) {
                            throw W(t, "name");
                          }
                          I("=");
                          var o = j(N(), true);
                          var i = {};
                          q(i, function (e) {
                            if ("option" !== e) {
                              throw W(e);
                            }
                            Q(i, e);
                            I(";");
                          }, function () {
                            te(i);
                          });
                          e.add(t, o, i.comment);
                        }(o, e);
                    }
                  });
                  e.add(o);
                })(e, t);
                return true;
              case "service":
                (function (e, t) {
                  if (!v.test(t = N())) {
                    throw W(t, "service name");
                  }
                  var o = new p(t);
                  q(o, function (e) {
                    if (!J(o, e)) {
                      if ("rpc" !== e) {
                        throw W(e);
                      }
                      !function (e, t) {
                        var o = k();
                        var i = t;
                        if (!v.test(t = N())) {
                          throw W(t, "name");
                        }
                        var n;
                        var r;
                        var a;
                        var s;
                        var l = t;
                        I("(");
                        if (I("stream", true)) {
                          r = true;
                        }
                        if (!w.test(t = N())) {
                          throw W(t);
                        }
                        n = t;
                        I(")");
                        I("returns");
                        I("(");
                        if (I("stream", true)) {
                          s = true;
                        }
                        if (!w.test(t = N())) {
                          throw W(t);
                        }
                        a = t;
                        I(")");
                        var c = new _(l, i, n, a, r, s);
                        c.comment = o;
                        q(c, function (e) {
                          if ("option" !== e) {
                            throw W(e);
                          }
                          Q(c, e);
                          I(";");
                        });
                        e.add(c);
                      }(o, e);
                    }
                  });
                  e.add(o);
                })(e, t);
                return true;
              case "extend":
                (function (e, t) {
                  if (!w.test(t = N())) {
                    throw W(t, "reference");
                  }
                  var o = t;
                  q(null, function (t) {
                    switch (t) {
                      case "required":
                      case "repeated":
                        X(e, t, o);
                        break;
                      case "optional":
                        X(e, O ? "proto3_optional" : "optional", o);
                        break;
                      default:
                        if (!O || !w.test(t)) {
                          throw W(t);
                        }
                        E(t);
                        X(e, "optional", o);
                    }
                  });
                })(e, t);
                return true;
            }
            return false;
          }
          function q(e, t, o) {
            var i = F.line;
            if (e) {
              if ("string" != typeof e.comment) {
                e.comment = k();
              }
              e.filename = P.filename;
            }
            if (I("{", true)) {
              for (var n; "}" !== (n = N());) {
                t(n);
              }
              I(";", true);
            } else {
              if (o) {
                o();
              }
              I(";");
              if (e && ("string" != typeof e.comment || L)) {
                e.comment = k(i) || e.comment;
              }
            }
          }
          function X(e, t, o) {
            var i = N();
            if ("group" !== i) {
              if (!w.test(i)) {
                throw W(i, "type");
              }
              var n = N();
              if (!v.test(n)) {
                throw W(n, "name");
              }
              n = x(n);
              I("=");
              var r = new l(n, j(N()), i, t, o);
              q(r, function (e) {
                if ("option" !== e) {
                  throw W(e);
                }
                Q(r, e);
                I(";");
              }, function () {
                te(r);
              });
              if ("proto3_optional" === t) {
                var a = new u("_" + n);
                r.setOption("proto3_optional", true);
                a.add(r);
                e.add(a);
              } else {
                e.add(r);
              }
              if (!(O || !r.repeated || undefined === m.packed[i] && undefined !== m.basic[i])) {
                r.setOption("packed", false, true);
              }
            } else {
              !function (e, t) {
                var o = N();
                if (!v.test(o)) {
                  throw W(o, "name");
                }
                var i = h.lcFirst(o);
                if (o === i) {
                  o = h.ucFirst(o);
                }
                I("=");
                var n = j(N());
                var r = new s(o);
                r.group = true;
                var a = new l(i, n, o, t);
                a.filename = P.filename;
                q(r, function (e) {
                  switch (e) {
                    case "option":
                      Q(r, e);
                      I(";");
                      break;
                    case "required":
                    case "repeated":
                      X(r, e);
                      break;
                    case "optional":
                      X(r, O ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw W(e);
                  }
                });
                e.add(r).add(a);
              }(e, t);
            }
          }
          function Q(e, t) {
            var o = I("(", true);
            if (!w.test(t = N())) {
              throw W(t, "name");
            }
            var i;
            var n = t;
            var r = n;
            if (o) {
              I(")");
              r = n = "(" + n + ")";
              t = G();
              if (D.test(t)) {
                i = t.substr(1);
                n += t;
                N();
              }
            }
            I("=");
            (function (e, t, o, i) {
              if (e.setParsedOption) {
                e.setParsedOption(t, o, i);
              }
            })(e, r, Z(e, n), i);
          }
          function Z(e, t) {
            if (I("{", true)) {
              for (var o = {}; !I("}", true);) {
                if (!v.test(R = N())) {
                  throw W(R, "name");
                }
                var i;
                var n = R;
                if ("{" === G()) {
                  i = Z(e, t + "." + R);
                } else {
                  I(":");
                  if ("{" === G()) {
                    i = Z(e, t + "." + R);
                  } else {
                    i = z(true);
                    ee(e, t + "." + R, i);
                  }
                }
                var r = o[n];
                if (r) {
                  i = [].concat(r).concat(i);
                }
                o[n] = i;
                I(",", true);
              }
              return o;
            }
            var a = z(true);
            ee(e, t, a);
            return a;
          }
          function ee(e, t, o) {
            if (e.setOption) {
              e.setOption(t, o);
            }
          }
          function te(e) {
            if (I("[", true)) {
              do {
                Q(e, "option");
              } while (I(",", true));
              I("]");
            }
            return e;
          }
          for (; null !== (R = N());) {
            switch (R) {
              case "package":
                if (!B) {
                  throw W(R);
                }
                H();
                break;
              case "import":
                if (!B) {
                  throw W(R);
                }
                K();
                break;
              case "syntax":
                if (!B) {
                  throw W(R);
                }
                Y();
                break;
              case "option":
                Q(M, R);
                I(";");
                break;
              default:
                if (J(M, R)) {
                  B = false;
                  continue;
                }
                throw W(R);
            }
          }
          P.filename = null;
          return {
            package: i,
            imports: n,
            weakImports: T,
            syntax: A,
            root: t
          };
        }
        o.exports;
      }, function () {
        return {
          "./tokenize": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (e, t, o, i, n) {
        o.exports = s;
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
        o.exports;
      }, {});
      var _cjsExports$1;
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (e, t, o, i, n) {
        var r = o.exports = t("./index-light");
        r.build = "full";
        r.tokenize = t("./tokenize");
        r.parse = t("./parse");
        r.common = t("./common");
        r.Root._configure(r.Type, r.parse, r.common);
        o.exports;
      }, function () {
        return {
          "./index-light": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          "./tokenize": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./parse": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          "./common": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      var _cjsExports$2;
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/index.js", function (e, t, o, i, n) {
        o.exports = t("./src/index");
        _cjsExports$1 = o.exports;
      }, function () {
        return {
          "./src/index": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      loader.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/protobufjs/index.js");
      cclegacy._RF.push({}, "f34139liEtOX7eeljN8Cz8w", "index", undefined);
      cclegacy._RF.pop();
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/long/src/long.js", function (e, t, o, i, n) {
        o.exports = a;
        var r = null;
        try {
          r = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
        } catch (e) {}
        function a(e, t, o) {
          this.low = 0 | e;
          this.high = 0 | t;
          this.unsigned = !!o;
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
          var o;
          var i;
          var n;
          return t ? (n = 0 <= (e >>>= 0) && e < 256) && (i = c[e]) ? i : (o = new a(e, (0 | e) < 0 ? -1 : 0, true), n && (c[e] = o), o) : (n = -128 <= (e |= 0) && e < 128) && (i = l[e]) ? i : (o = new a(e, e < 0 ? -1 : 0, false), n && (l[e] = o), o);
        }
        function d(e, t) {
          if (isNaN(e)) {
            return t ? b : g;
          }
          if (t) {
            if (e < 0) {
              return b;
            }
            if (e >= 18446744073709552000) {
              return P;
            }
          } else {
            if (e <= -9223372036854776000) {
              return T;
            }
            if (e + 1 >= 9223372036854776000) {
              return D;
            }
          }
          return e < 0 ? d(-e, t).neg() : new a(e % 4294967296 | 0, e / 4294967296 | 0, t);
        }
        function p(e, t, o) {
          return new a(e, t, o);
        }
        a.fromInt = u;
        a.fromNumber = d;
        a.fromBits = p;
        var _ = Math.pow;
        function m(e, t, o) {
          if (0 === e.length) {
            throw Error("empty string");
          }
          if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) {
            return g;
          }
          if ("number" == typeof t) {
            o = t;
            t = false;
          } else {
            t = !!t;
          }
          if ((o = o || 10) < 2 || 36 < o) {
            throw RangeError("radix");
          }
          var i;
          if ((i = e.indexOf("-")) > 0) {
            throw Error("interior hyphen");
          }
          if (0 === i) {
            return m(e.substring(1), t, o).neg();
          }
          var n = d(_(o, 8));
          var r = g;
          for (var a = 0; a < e.length; a += 8) {
            var s = Math.min(8, e.length - a);
            var l = parseInt(e.substring(a, a + s), o);
            if (s < 8) {
              var c = d(_(o, s));
              r = r.mul(c).add(d(l));
            } else {
              r = (r = r.mul(n)).add(d(l));
            }
          }
          r.unsigned = t;
          return r;
        }
        function h(e, t) {
          return "number" == typeof e ? d(e, t) : "string" == typeof e ? m(e, t) : new a(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
        }
        a.fromString = m;
        a.fromValue = h;
        var S = u(16777216);
        var g = u(0);
        a.ZERO = g;
        var b = u(0, true);
        a.UZERO = b;
        var $ = u(1);
        a.ONE = $;
        var v = u(1, true);
        a.UONE = v;
        var w = u(-1);
        a.NEG_ONE = w;
        var D = new a(-1, 2147483647, false);
        a.MAX_VALUE = D;
        var P = new a(-1, -1, true);
        a.MAX_UNSIGNED_VALUE = P;
        var T = new a(0, -2147483648, false);
        a.MIN_VALUE = T;
        var A = a.prototype;
        A.toInt = function () {
          return this.unsigned ? this.low >>> 0 : this.low;
        };
        A.toNumber = function () {
          return this.unsigned ? (this.high >>> 0) * 4294967296 + (this.low >>> 0) : this.high * 4294967296 + (this.low >>> 0);
        };
        A.toString = function (e) {
          if ((e = e || 10) < 2 || 36 < e) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return "0";
          }
          if (this.isNegative()) {
            if (this.eq(T)) {
              var t = d(e);
              var o = this.div(t);
              var i = o.mul(t).sub(this);
              return o.toString(e) + i.toInt().toString(e);
            }
            return "-" + this.neg().toString(e);
          }
          var n = d(_(e, 6), this.unsigned);
          var r = this;
          for (var a = "";;) {
            var s = r.div(n);
            var l = (r.sub(s.mul(n)).toInt() >>> 0).toString(e);
            if ((r = s).isZero()) {
              return l + a;
            }
            for (; l.length < 6;) {
              l = "0" + l;
            }
            a = "" + l + a;
          }
        };
        A.getHighBits = function () {
          return this.high;
        };
        A.getHighBitsUnsigned = function () {
          return this.high >>> 0;
        };
        A.getLowBits = function () {
          return this.low;
        };
        A.getLowBitsUnsigned = function () {
          return this.low >>> 0;
        };
        A.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(T) ? 64 : this.neg().getNumBitsAbs();
          }
          var e = 0 != this.high ? this.high : this.low;
          for (var t = 31; t > 0 && 0 == (e & 1 << t); t--) {
            ;
          }
          return 0 != this.high ? t + 33 : t + 1;
        };
        A.isZero = function () {
          return 0 === this.high && 0 === this.low;
        };
        A.eqz = A.isZero;
        A.isNegative = function () {
          return !this.unsigned && this.high < 0;
        };
        A.isPositive = function () {
          return this.unsigned || this.high >= 0;
        };
        A.isOdd = function () {
          return 1 == (1 & this.low);
        };
        A.isEven = function () {
          return 0 == (1 & this.low);
        };
        A.equals = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? d(e, undefined) : "string" == typeof e ? m(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
        };
        A.eq = A.equals;
        A.notEquals = function (e) {
          return !this.eq(e);
        };
        A.neq = A.notEquals;
        A.ne = A.notEquals;
        A.lessThan = function (e) {
          return this.comp(e) < 0;
        };
        A.lt = A.lessThan;
        A.lessThanOrEqual = function (e) {
          return this.comp(e) <= 0;
        };
        A.lte = A.lessThanOrEqual;
        A.le = A.lessThanOrEqual;
        A.greaterThan = function (e) {
          return this.comp(e) > 0;
        };
        A.gt = A.greaterThan;
        A.greaterThanOrEqual = function (e) {
          return this.comp(e) >= 0;
        };
        A.gte = A.greaterThanOrEqual;
        A.ge = A.greaterThanOrEqual;
        A.compare = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? d(e, undefined) : "string" == typeof e ? m(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          if (this.eq(e)) {
            return 0;
          }
          var t = this.isNegative();
          var o = e.isNegative();
          return t && !o ? -1 : !t && o ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
        };
        A.comp = A.compare;
        A.negate = function () {
          return !this.unsigned && this.eq(T) ? T : this.not().add($);
        };
        A.neg = A.negate;
        A.add = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? d(e, undefined) : "string" == typeof e ? m(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          var t = this.high >>> 16;
          var o = 65535 & this.high;
          var i = this.low >>> 16;
          var n = 65535 & this.low;
          var r = e.high >>> 16;
          var a = 65535 & e.high;
          var l = e.low >>> 16;
          var c = 0;
          var u = 0;
          var d = 0;
          var _ = 0;
          d += (_ += n + (65535 & e.low)) >>> 16;
          u += (d += i + l) >>> 16;
          c += (u += o + a) >>> 16;
          c += t + r;
          return new a((d &= 65535) << 16 | (_ &= 65535), (c &= 65535) << 16 | (u &= 65535), this.unsigned);
        };
        A.subtract = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? d(e, undefined) : "string" == typeof e ? m(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return this.add(e.neg());
        };
        A.sub = A.subtract;
        A.multiply = function (e) {
          if (this.isZero()) {
            return g;
          }
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? d(e, undefined) : "string" == typeof e ? m(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          if (r) {
            return new a(r.mul(this.low, this.high, e.low, e.high), r.get_high(), this.unsigned);
          }
          if (e.isZero()) {
            return g;
          }
          if (this.eq(T)) {
            return e.isOdd() ? T : g;
          }
          if (e.eq(T)) {
            return this.isOdd() ? T : g;
          }
          if (this.isNegative()) {
            return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
          }
          if (e.isNegative()) {
            return this.mul(e.neg()).neg();
          }
          if (this.lt(S) && e.lt(S)) {
            return d(this.toNumber() * e.toNumber(), this.unsigned);
          }
          var t = this.high >>> 16;
          var o = 65535 & this.high;
          var i = this.low >>> 16;
          var n = 65535 & this.low;
          var a = e.high >>> 16;
          var l = 65535 & e.high;
          var c = e.low >>> 16;
          var u = 65535 & e.low;
          var _ = 0;
          var m = 0;
          var f = 0;
          var y = 0;
          f += (y += n * u) >>> 16;
          m += (f += i * u) >>> 16;
          f &= 65535;
          m += (f += n * c) >>> 16;
          _ += (m += o * u) >>> 16;
          m &= 65535;
          _ += (m += i * c) >>> 16;
          m &= 65535;
          _ += (m += n * l) >>> 16;
          _ += t * u + o * c + i * l + n * a;
          return new a((f &= 65535) << 16 | (y &= 65535), (_ &= 65535) << 16 | (m &= 65535), this.unsigned);
        };
        A.mul = A.multiply;
        A.divide = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? d(e, undefined) : "string" == typeof e ? m(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          if (e.isZero()) {
            throw Error("division by zero");
          }
          var t;
          var o;
          var i;
          if (r) {
            return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? new a((this.unsigned ? r.div_u : r.div_s)(this.low, this.high, e.low, e.high), r.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? b : g;
          }
          if (this.unsigned) {
            if (!e.unsigned) {
              e = e.toUnsigned();
            }
            if (e.gt(this)) {
              return b;
            }
            if (e.gt(this.shru(1))) {
              return v;
            }
            i = b;
          } else {
            if (this.eq(T)) {
              return e.eq($) || e.eq(w) ? T : e.eq(T) ? $ : (t = this.shr(1).div(e).shl(1)).eq(g) ? e.isNegative() ? $ : w : (o = this.sub(e.mul(t)), i = t.add(o.div(e)));
            }
            if (e.eq(T)) {
              return this.unsigned ? b : g;
            }
            if (this.isNegative()) {
              return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            }
            if (e.isNegative()) {
              return this.div(e.neg()).neg();
            }
            i = g;
          }
          for (o = this; o.gte(e);) {
            t = Math.max(1, Math.floor(o.toNumber() / e.toNumber()));
            var n = Math.ceil(Math.log(t) / Math.LN2);
            var a = n <= 48 ? 1 : _(2, n - 48);
            var l = d(t);
            for (var c = l.mul(e); c.isNegative() || c.gt(o);) {
              c = (l = d(t -= a, this.unsigned)).mul(e);
            }
            if (l.isZero()) {
              l = $;
            }
            i = i.add(l);
            o = o.sub(c);
          }
          return i;
        };
        A.div = A.divide;
        A.modulo = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? d(e, undefined) : "string" == typeof e ? m(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return r ? new a((this.unsigned ? r.rem_u : r.rem_s)(this.low, this.high, e.low, e.high), r.get_high(), this.unsigned) : this.sub(this.div(e).mul(e));
        };
        A.mod = A.modulo;
        A.rem = A.modulo;
        A.not = function () {
          return new a(~this.low, ~this.high, this.unsigned);
        };
        A.and = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? d(e, undefined) : "string" == typeof e ? m(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return new a(this.low & e.low, this.high & e.high, this.unsigned);
        };
        A.or = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? d(e, undefined) : "string" == typeof e ? m(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return new a(this.low | e.low, this.high | e.high, this.unsigned);
        };
        A.xor = function (e) {
          if (!(true === (e && e.__isLong__))) {
            e = "number" == typeof e ? d(e, undefined) : "string" == typeof e ? m(e, undefined) : new a(e.low, e.high, e.unsigned);
          }
          return new a(this.low ^ e.low, this.high ^ e.high, this.unsigned);
        };
        A.shiftLeft = function (e) {
          if (true === (e && e.__isLong__)) {
            e = e.toInt();
          }
          return 0 == (e &= 63) ? this : e < 32 ? new a(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : new a(0, this.low << e - 32, this.unsigned);
        };
        A.shl = A.shiftLeft;
        A.shiftRight = function (e) {
          if (true === (e && e.__isLong__)) {
            e = e.toInt();
          }
          return 0 == (e &= 63) ? this : e < 32 ? new a(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : new a(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        };
        A.shr = A.shiftRight;
        A.shiftRightUnsigned = function (e) {
          if (true === (e && e.__isLong__)) {
            e = e.toInt();
          }
          if (0 === (e &= 63)) {
            return this;
          }
          var t = this.high;
          return e < 32 ? new a(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : new a(32 === e ? t : t >>> e - 32, 0, this.unsigned);
        };
        A.shru = A.shiftRightUnsigned;
        A.shr_u = A.shiftRightUnsigned;
        A.toSigned = function () {
          return this.unsigned ? new a(this.low, this.high, false) : this;
        };
        A.toUnsigned = function () {
          return this.unsigned ? this : new a(this.low, this.high, true);
        };
        A.toBytes = function (e) {
          return e ? this.toBytesLE() : this.toBytesBE();
        };
        A.toBytesLE = function () {
          var e = this.high;
          var t = this.low;
          return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24];
        };
        A.toBytesBE = function () {
          var e = this.high;
          var t = this.low;
          return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t];
        };
        a.fromBytes = function (e, t, o) {
          return o ? a.fromBytesLE(e, t) : a.fromBytesBE(e, t);
        };
        a.fromBytesLE = function (e, t) {
          return new a(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t);
        };
        a.fromBytesBE = function (e, t) {
          return new a(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t);
        };
        _cjsExports$2 = o.exports;
      }, {});
      loader.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/TripleChargeBuffalo/Client/Thai_UAT/node_modules/long/src/long.js");
      cclegacy._RF.push({}, "667f3TuG8pEWLUgoN0aMv4W", "CharacterSpine", undefined);
      var _dec$N;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "92627byCfRElrrbpXbJukFx", "SymbolUnit", undefined);
      var ccclass$O = _decorator.ccclass;
      _dec$N = ccclass$O("SymbolUnit");
      var _dec$O;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "cd896Vpw6VJ3at0ApQiwWbK", "NearWinSpine", undefined);
      var ccclass$P = _decorator.ccclass;
      _dec$O = ccclass$P("NearWinSpine");
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8db66ZsYJdPapDk/QT9Grt6", "SlotReels", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f394cBnFyRKN48blt3gu9IM", "MutiLanguageView", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f3915/8eRBD36bgZ4dr//CA", "PreviewSpine", undefined);
      var _dec$S;
      var _dec2$r;
      var _dec3$m;
      var _dec4$g;
      var _dec5$b;
      var _class2$t;
      var _descriptor$r;
      var _descriptor2$m;
      var _descriptor3$h;
      var _descriptor4$b;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "58afbgi72RCYrg3eW8ahovc", "CommonBuyBonusCell", undefined);
      var ccclass$T = _decorator.ccclass;
      var property$r = _decorator.property;
      _dec$S = ccclass$T("CommonBuyBonusCell");
      _dec2$r = property$r({
        type: Sprite,
        tooltip: "購買文字"
      });
      _dec3$m = property$r({
        type: Sprite,
        tooltip: "項目標題"
      });
      _dec4$g = property$r({
        type: CCString,
        tooltip: "標題圖片名稱"
      });
      _dec5$b = property$r({
        type: Label,
        tooltip: "金額"
      });
      _class2$t = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_buyHintSprite", _descriptor$r, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titleSprite", _descriptor2$m, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titlePicName", _descriptor3$h, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_priceLabel", _descriptor4$b, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.start = function () {
          var e = node$8.GetGameAtlas();
          if (node$8.CurrLang !== node$1.Lang.EN) {
            this.m_buyHintSprite.spriteFrame = e.getSpriteFrame("Txt_Buy_Feature_Buy");
            this.m_titleSprite.spriteFrame = e.getSpriteFrame(this.m_titlePicName);
          }
        };
        o.SetPrice = function (e) {
          this.m_priceLabel.string = e;
        };
        return t;
      }(Component);
      _descriptor$r = _applyDecoratedDescriptor(_class2$t.prototype, "m_buyHintSprite", [_dec2$r], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$m = _applyDecoratedDescriptor(_class2$t.prototype, "m_titleSprite", [_dec3$m], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$h = _applyDecoratedDescriptor(_class2$t.prototype, "m_titlePicName", [_dec4$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      });
      _descriptor4$b = _applyDecoratedDescriptor(_class2$t.prototype, "m_priceLabel", [_dec5$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "deede8s0zBMX57ZpiWkWMfR", "CommonBuyBonus", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0cf51aDV1hLMK2JaScB75pu", "GameView", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "babc8Ymf75O76aT6JbMpiK+", "Test", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "25470yMSQxO/JfLQNp7nAQv", "ChangeScaleTool", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", undefined);
      var Transition;
      var State$1;
      var EventType;
      !function (e) {
        e[e.NONE = 0] = "NONE";
        e[e.COLOR = 1] = "COLOR";
        e[e.SPRITE = 2] = "SPRITE";
        e[e.SCALE = 4] = "SCALE";
        e[e.COLOR_SPRITE = 3] = "COLOR_SPRITE";
        e[e.COLOR_SCALE = 5] = "COLOR_SCALE";
        e[e.SPRITE_SCALE = 6] = "SPRITE_SCALE";
        e[e.ALL = 7] = "ALL";
      }(Transition || (Transition = {}));
      ccenum(Transition);
      (function (e) {
        e.NORMAL = "normal";
        e.HOVER = "hover";
        e.PRESSED = "pressed";
        e.DISABLED = "disabled";
      })(State$1 || (State$1 = {}));
      (function (e) {
        e.CLICK = "click";
      })(EventType || (EventType = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", undefined);
      var _class$$;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", undefined);
      var ccclass$$ = _decorator.ccclass;
      var EvtReceiver = ccclass$$(_class$$ = function (e) {
        function t() {
          var t;
          var o = arguments.length;
          var i = new Array(o);
          for (var n = 0; n < o; n++) {
            i[n] = arguments[n];
          }
          (t = e.call.apply(e, [this].concat(i)) || this).m_callback = undefined;
          return t;
        }
        _inheritsLoose(t, e);
        t.Pack = function (e, o) {
          e.addComponent(t);
          e.getComponent(t).SetCallback(o);
        };
        var o = t.prototype;
        o.EvtReciever = function (e) {
          log("AnimEvtReciever: ", e);
          if (this.m_callback) {
            this.m_callback(e);
          } else {
            log("callback沒有設定，無法處理event: ", e);
          }
        };
        o.triggerAnimationEvent = function (e) {
          log("triggerAnimationEvent: ", e);
          if (this.m_callback) {
            this.m_callback(e);
          } else {
            log("callback沒有設定，無法處理event: ", e);
          }
        };
        o.SetCallback = function (e) {
          this.m_callback = e;
        };
        o.onDestroy = function () {
          this.m_callback = null;
        };
        return t;
      }(Component)) || _class$$;
      var _EffectView$WIN_EFFEC;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", "EffectView", undefined);
      var EffectView = function (e) {
        function t() {
          var o;
          (o = e.call(this) || this).m_awardBoardFile = t.EFFECT_ROOT + "win/awardBoard";
          o.m_effectList = {};
          o.m_timeLineList = {};
          o.m_winEffCbFunc = null;
          o.m_currentWinEffect = null;
          o.m_currentWinEffectTimeline = null;
          o.m_awardBoard = null;
          o.m_awardBoardTimeline = null;
          o.m_txtWinValue = null;
          o.m_durRollMoneyTick = t.MONEY_ROLL_TIME;
          o.m_moneyRealValue = 0;
          o.m_moneyRollValue = 0;
          o.m_bgMaskNode = null;
          o.m_commonGetCoinCbFunc = null;
          o.m_commonGetCoinMidCbFunc = null;
          o.m_commonGetCoinEff = null;
          o.m_commonGetCoinTline = null;
          o.m_updateMoneyEff = null;
          o.m_updateMoneyTline = null;
          o.m_getCoinParticle = null;
          o.m_odds = [3, 5, 10, 20, 30];
          o.m_winEffectFiles = [null, null, t.EFFECT_ROOT + t.FILE_PATH.BIG_WIN, t.EFFECT_ROOT + t.FILE_PATH.MEGA_WIN, t.EFFECT_ROOT + t.FILE_PATH.SUPER_WIN];
          o.m_coinEffects = [2, 3, 5, 5, 5];
          o.m_coinTimes = [2, 2, 5, 5, 5];
          o.m_soundNameByOdds = [];
          o.m_isAutoCheckFloat = false;
          o.m_rotateCoins = {};
          o.m_coinEffectNode = undefined;
          o.m_loadedSound = undefined;
          o.m_isLandscape = false;
          o.m_LandscapeRate = 1;
          o.m_winType = undefined;
          o.m_nowPlaySoundID = null;
          o.m_loadedSound = false;
          return o;
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        o.LoadSound = function () {
          this.m_loadedSound = true;
        };
        o.OnUpdate = function (e) {
          this.RollWinMoney(e);
        };
        o.ShowWinAndCoinEffect = function (e, t, o) {
          if (undefined === o) {
            o = null;
          }
          o = o || null;
          var i = node$o.GetManagerId(o);
          this.ShowWinEffect(e, i);
          if (!(undefined !== e.playCoinAtWinEffect && true !== e.playCoinAtWinEffect)) {
            this.playCoinEffect(t, i);
          }
          node$o.StartLoad(i);
        };
        o.ShowWinEffect = function (e, o) {
          var i = this;
          if (undefined === o) {
            o = -1;
          }
          var n = e.effectFile;
          var r = e.winValue;
          var a = e.cbFunc;
          var s = e.yPos;
          var l = e.deltaY;
          var c = e.cbFuncBtoM;
          var u = e.cbFuncMtoS;
          var d = e.cbFuncPlaying;
          var p = e.isLoop || false;
          var _ = e.rollTime;
          if (null != r) {
            var m = function () {
              if (i.m_bgMaskNode) {
                i.m_bgMaskNode.active = true;
              }
              log("LoadPrefabManager CB", r);
              s = null != s && s || t.DEFAULT_Y;
              i.m_effectList[n].setPosition(v3(t.DesignSize.width / 2, s));
              i.m_effectList[n].active = true;
              i.m_timeLineList[n].play(t.ANI_LABEL.ACT);
              i.m_currentWinEffect = i.m_effectList[n];
              i.m_currentWinEffectTimeline = i.m_timeLineList[n];
              i.m_currentWinEffectTimeline.name = n;
              l = n == t.FILE_PATH.JACKPOT ? 180 : null != l ? l : 230;
              i.m_awardBoard.setPosition(v3(t.DesignSize.width / 2, s - l));
              i.m_awardBoard.active = true;
              i.m_awardBoardTimeline.play(t.ANI_LABEL.ACT);
              i.SetWinValue(r, _);
              if (!(null == d)) {
                d();
              }
            };
            var h = o;
            if (-1 == o) {
              h = node$o.GetManagerId(m);
            }
            this.m_winEffCbFunc = a;
            if (null == this.m_effectList[n]) {
              node$o.AddLoad(h);
              node$1.GameBundle.load(n, function (e, o) {
                if (e) {
                  error(e.message || e);
                } else {
                  var r = instantiate(o);
                  r.active = false;
                  i.addChild(r);
                  node.SetZIndex(r, t.EFF_ZORDER.WIN_EFFECT);
                  var a = r.getComponent(Animation);
                  EvtReceiver.Pack(r, function (e) {
                    if (e == t.ANI_FRAME_EVENT.ENDING) {
                      if (i.m_awardBoard && i.m_awardBoard.active) {
                        i.m_awardBoardTimeline.play(t.ANI_LABEL.ENDING);
                      }
                    } else if (e == t.ANI_FRAME_EVENT.LOOP) {
                      if (p) {
                        a.play(t.ANI_LABEL.LOOP);
                        a.getState(t.ANI_LABEL.LOOP).wrapMode = AnimationClip.WrapMode.Loop;
                      }
                    } else if (e == t.ANI_FRAME_EVENT.B_TO_M) {
                      if (i.m_awardBoard && i.m_awardBoard.active) {
                        tween(i.m_txtWinValue).by(.25, {
                          scale: v3(1.5, 1.5, 1.5)
                        }).by(.1, {
                          scale: v3(.9, .9, .9)
                        }).start();
                      }
                      if (c) {
                        c();
                      }
                    } else if (e == t.ANI_FRAME_EVENT.M_TO_S) {
                      if (i.m_awardBoard && i.m_awardBoard.active) {
                        tween(i.m_txtWinValue).by(.25, {
                          scale: v3(1.5, 1.5, 1.5)
                        }).by(.1, {
                          scale: v3(.9, .9, .9)
                        }).start();
                      }
                      if (!(null == u)) {
                        u();
                      }
                    } else if (e == t.ANI_FRAME_EVENT.END) {
                      log("ANI_FRAME_EVENT.END");
                      i.OnAnimationEnd();
                      if (i.m_winEffCbFunc) {
                        i.m_winEffCbFunc();
                      }
                    }
                  });
                  r.active = false;
                  i.m_effectList[n] = r;
                  i.m_timeLineList[n] = a;
                  node$o.OnLoaded(h);
                }
              });
              if (null == this.m_awardBoard) {
                node$o.AddLoad(h);
                node$1.GameBundle.load(this.m_awardBoardFile, function (e, o) {
                  if (e) {
                    error(e.message || e);
                  } else {
                    i.m_awardBoard = instantiate(o);
                    i.addChild(i.m_awardBoard);
                    node.SetZIndex(i.m_awardBoard, t.EFF_ZORDER.AWARD_BOARD);
                    i.m_awardBoard.active = false;
                    i.m_awardBoardTimeline = i.m_awardBoard.getComponent(Animation);
                    i.m_txtWinValue = i.m_awardBoard.getChildByName("win_value_label");
                    node$o.OnLoaded(h);
                  }
                });
              }
              if (-1 == o) {
                node$o.StartLoad(h);
              } else {
                node$o.AddOnLoadedCallback(h, m);
              }
            } else if (-1 == o) {
              m();
            } else {
              node$o.AddOnLoadedCallback(h, m);
            }
          } else if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
        };
        o.WinEffect = function () {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.play(t.ANI_LABEL.ENDING, false);
          }
        };
        o.SetWinValue = function (e, o, i) {
          if (undefined === o) {
            o = null;
          }
          if (undefined === i) {
            i = 0;
          }
          this.m_moneyRealValue = node.strip(e);
          this.m_moneyRollValue = i;
          o = null == o && t.MONEY_ROLL_TIME || o;
          this.m_durRollMoneyTick = node.strip(o);
        };
        o.RollWinMoney = function (e) {
          this.m_moneyRealValue = node.strip(this.m_moneyRealValue);
          this.m_moneyRollValue = node.strip(this.m_moneyRollValue);
          if (this.m_moneyRollValue < this.m_moneyRealValue) {
            var t = node.divide(this.m_durRollMoneyTick, node.strip(e));
            var o = node.divide(node.strip(this.m_moneyRealValue - this.m_moneyRollValue), t);
            var i = node.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (this.m_isAutoCheckFloat) {
              i = this.m_moneyRealValue.toString().indexOf(".") > -1 ? node.FORMAT_NUMBER_TYPE.PERMANENT_DOT : node.FORMAT_NUMBER_TYPE.NONE_DOT;
            }
            this.m_moneyRollValue = node.strip(this.m_moneyRollValue + o);
            if (this.m_moneyRollValue > this.m_moneyRealValue) {
              this.m_moneyRollValue = this.m_moneyRealValue;
            }
            this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, i);
            this.m_durRollMoneyTick = node.strip(this.m_durRollMoneyTick - e);
          }
        };
        o.SetLabelString = function (e, t, o) {
          if (undefined === o) {
            o = null;
          }
          var i = e.getComponent(Label);
          if (null != i && null != i) {
            if (null == o || null == o) {
              i.string = t.toString();
            } else {
              var n;
              if ("number" == typeof t) {
                n = t;
              } else {
                var r = t.replace(/,/g, "");
                n = isNaN(Number(r)) ? 0 : Number(r);
              }
              i.string = node.FormatNumberThousands(n, o);
            }
            node.SetFont(i);
          } else {
            log("Warning!!!!!!!!!! SetLabelString: ", e);
          }
        };
        o.SetWinMoneyToMax = function () {};
        o.IsRollMoneyEnd = function () {
          return this.m_moneyRollValue == this.m_moneyRealValue;
        };
        o.StopAnimation = function (e) {
          if (this.m_currentWinEffectTimeline) {
            this.m_currentWinEffectTimeline.stop();
          }
          if (this.m_awardBoard) {
            this.m_awardBoard.active = false;
            this.m_awardBoardTimeline.stop();
          }
          if (1 != e && this.m_winEffCbFunc) {
            this.m_winEffCbFunc();
          }
          this.m_winEffCbFunc = null;
          this.OnAnimationEnd();
        };
        o.OnAnimationEnd = function () {
          if (this.m_currentWinEffect) {
            this.m_currentWinEffect.active = false;
          }
          if (this.m_bgMaskNode) {
            this.m_bgMaskNode.active = false;
          }
          this.m_moneyRealValue = 0;
          this.m_moneyRollValue = 0;
        };
        o.playCoinEffect = function (e, o) {
          var i = this;
          if (undefined === o) {
            o = -1;
          }
          if (node$1.CommonBundle) {
            var n = e.level;
            var r = e.position;
            var a = e.time;
            if (null == a) {
              a = 0;
            }
            var s = e.zOrder;
            if (null == s) {
              s = 0;
            }
            var l = e.parent;
            this.stopCoinEffectImmly();
            var c = t.COIN_EFFECT_LIST[n];
            if (c = node.GetFilePath(c)) {
              log("~~~~~~~~~~~~~~~~~~~~~~", e, a, s);
              var u = function () {
                i.m_coinEffectNode.setPosition(v3(r.x, r.y));
                if (null == l || null == l) {
                  i.addChild(i.m_coinEffectNode);
                  node.SetZIndex(i.m_coinEffectNode, 0);
                } else {
                  l.addChild(i.m_coinEffectNode);
                  node.SetZIndex(i.m_coinEffectNode, s);
                }
                if (0 != a) {
                  tween(i).delay(a).call(function () {
                    i.stopCoinEffect();
                  }).start();
                }
              };
              if (-1 != o) {
                node$o.AddOnLoadedCallback(o, u);
                node$o.AddLoad(o);
              }
              node$1.CommonBundle.load(c, function (e, t) {
                log("LoadRes ", c);
                if (e) {
                  error(e.message || e);
                } else {
                  i.m_coinEffectNode = instantiate(t);
                  if (i.m_coinEffectNode) {
                    if (-1 == o) {
                      u();
                    } else {
                      node$o.OnLoaded(o);
                    }
                  } else {
                    log("SlotBottomBarView.playCoinEffect m_coinEffect is null");
                  }
                }
              });
            }
          }
        };
        o.stopCoinEffectImmly = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode.removeFromParent) {
            this.m_coinEffectNode.removeFromParent();
            this.m_coinEffectNode = null;
          }
        };
        o.stopCoinEffect = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
            var e = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(ParticleSystem2D);
            var t = this.m_coinEffectNode.getChildByName("Particle_2").getComponent(ParticleSystem2D);
            if (e) {
              e.stopSystem();
            }
            if (t) {
              t.stopSystem();
            }
          }
        };
        o.ShowCommonEffect = function (e, o, i, n) {
          if (undefined === i) {
            i = null;
          }
          if (undefined === n) {
            n = null;
          }
          i = i || {};
          n = n || {};
          var r = new Vec2(t.DesignSize.width / 2, t.DesignSize.height);
          var a = new Vec2(t.DesignSize.width / 2 - 10, 145);
          var s = undefined;
          var l = e / o;
          if (node$2) {
            e = node$2.GetDisplayValue(e);
          }
          for (var c = this.m_odds.length - 1; c >= 0; c--) {
            if (l >= this.m_odds[c]) {
              n.level = this.m_coinEffects[c];
              if (5 == this.m_coinEffects[c]) {
                n.position = n.position ? n.position : r;
              } else {
                n.position = n.smallPosition ? n.smallPosition : n.position ? n.position : a;
              }
              if (null == n.time || n.time <= 0) {
                n.time = this.m_coinTimes[c];
              }
              if (5 == this.m_coinEffects[c]) {
                i.effectFile = this.m_winEffectFiles[c];
                i.winValue = e;
                this.SetWinType(c);
                this.ShowWinAndCoinEffect(i, n);
              } else {
                this.playCoinEffect(n);
              }
              s = this.m_soundNameByOdds[c];
              break;
            }
          }
          if (null != s) {
            this.m_nowPlaySoundID = node$9.Play(s, false);
          }
          if (null == n.time) {
            n.time = 0;
          }
          return n.time;
        };
        o.SkipEffect = function () {
          this.stopCoinEffect();
          TweenSystem.instance.ActionManager.removeAllActionsFromTarget(this);
          if (this.m_currentWinEffectTimeline) {
            var e = this.m_currentWinEffectTimeline.name;
            var o = node.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            if (!(e != t.FILE_PATH.BIG_WIN && e != t.FILE_PATH.MEGA_WIN && e != t.FILE_PATH.SUPER_WIN)) {
              this.m_moneyRollValue = node.strip(this.m_moneyRollValue);
              this.m_moneyRealValue = node.strip(this.m_moneyRealValue);
              if (this.m_moneyRollValue == this.m_moneyRealValue) {
                this.m_awardBoardTimeline.play(t.ANI_LABEL.ENDING);
                this.m_currentWinEffectTimeline.setCurrentTime(5);
              } else {
                if (this.m_isAutoCheckFloat) {
                  o = this.m_moneyRealValue.toString().indexOf(".") > -1 ? node.FORMAT_NUMBER_TYPE.PERMANENT_DOT : node.FORMAT_NUMBER_TYPE.NONE_DOT;
                }
                this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, o);
                this.m_currentWinEffectTimeline.setCurrentTime(3.8);
              }
              this.m_currentWinEffectTimeline = null;
            }
            this.m_moneyRollValue = this.m_moneyRealValue;
          }
        };
        o.SkipEffectSound = function () {
          if (this.m_nowPlaySoundID) {
            node$9.Stop(this.m_nowPlaySoundID);
            this.m_nowPlaySoundID = null;
          }
        };
        o.SetAutoCheckFloat = function (e) {
          this.m_isAutoCheckFloat = e;
        };
        o.SetOdds = function (e) {
          this.m_odds = e;
        };
        o.SetWinEffectFiles = function (e) {
          this.m_winEffectFiles = e;
        };
        o.SetAwardBoardFile = function (e) {
          this.m_awardBoardFile = e;
        };
        o.SetEffectLevels = function (e) {
          this.m_coinEffects = e;
        };
        o.SetEffectTimes = function (e) {
          this.m_coinTimes = e;
        };
        o.SetSoundNameByOdds = function (e) {
          this.m_soundNameByOdds = e;
        };
        o.SetBGMaskNode = function (e) {
          if (null != e) {
            this.m_bgMaskNode = e;
          }
        };
        o.SetWinTextFontSize = function (e) {
          if (this.m_txtWinValue) {
            this.m_txtWinValue.getComponent(Label).fontSize = e;
          }
        };
        o.SetWinType = function (e) {
          this.m_winType = e;
        };
        _createClass(t, [{
          key: "CoinEffectNode",
          set: function (e) {
            this.m_coinEffectNode = e;
          }
        }]);
        return t;
      }(Node);
      EffectView.DesignSize = {
        width: 1136,
        height: 640
      };
      EffectView.SOUND_FILE = {
        COMMON_SUPER_WIN: null,
        COMMON_MEGA_WIN: null,
        COMMON_COIN_SMALL: null,
        COMMON_COIN_MEDIUM: null,
        COMMON_BIG_WIN: null
      };
      EffectView.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/";
      EffectView.FILE_PATH = {
        BIG_WIN: "win/big_anim",
        MEGA_WIN: "win/mega_anim",
        SUPER_WIN: "win/super_anim",
        JACKPOT: "win/effect_Jackpot",
        BIG_TO_MEGA_WIN: "win/bigToMega_anim",
        BIG_TO_SUPER_WIN: "win/bigToSuper_anim",
        FIVE_OF_A_KIND: "win/5ofa_anim"
      };
      _EffectView$WIN_EFFEC = {
        [EffectView.FILE_PATH.BIG_WIN]: "Common_big_win",
        [EffectView.FILE_PATH.MEGA_WIN]: "Common_mega_win",
        [EffectView.FILE_PATH.SUPER_WIN]: "Common_super_win",
        [EffectView.FILE_PATH.JACKPOT]: "Common_JP_win",
        [EffectView.FILE_PATH.BIG_TO_MEGA_WIN]: "Common_big_win",
        [EffectView.FILE_PATH.BIG_TO_SUPER_WIN]: "Common_big_win",
        [EffectView.FILE_PATH.FIVE_OF_A_KIND]: "Common_big_win"
      };
      EffectView.WIN_EFFECT_SOUND_NAME = _EffectView$WIN_EFFEC;
      EffectView.EffectViewUIName = Enum({
        TXT_WIN_MONEY: "label_final_value",
        PARTICLE: "Particle_"
      });
      EffectView.DEFAULT_Y = 400;
      EffectView.PARTICLE_AMOUNT_MAX = 2;
      EffectView.MONEY_ROLL_TIME = 3;
      EffectView.UPDATE_MONEY_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb";
      EffectView.COMMON_GET_COIN_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb";
      EffectView.GET_COIN_PARTICLE_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist";
      EffectView.ROTATE_COIN_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb";
      EffectView.TRIAL_COIN_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb";
      EffectView.COIN_APPEAR_PARTICLE_CSB = EffectView.EFFECT_ROOT + "common_get_coin/Particle/New_CoinShine03.plist";
      EffectView.COMMON_COIN_AMOUNT = 8;
      EffectView.ANI_LABEL = {
        ACT: "main",
        LOOP: "loop",
        ENDING: "ending"
      };
      EffectView.ANI_FRAME_EVENT = {
        MID: "AniMid",
        B_TO_M: "AniBtoM",
        M_TO_S: "AniMtoS",
        ENDING: "AniEnding",
        END: "AniEnd",
        LOOP: "AniLoop"
      };
      EffectView.EFF_ZORDER = {
        COIN_FALL: 1,
        WIN_EFFECT: 2,
        AWARD_BOARD: 3,
        COMMON_GET_COIN: 4,
        GET_TRIAL_COIN: 5
      };
      EffectView.COIN_EFFECT_LIST = {
        1: EffectView.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
        2: EffectView.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
        3: EffectView.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
        4: EffectView.EFFECT_ROOT + "coin/2_BigGoldCoinFX_1",
        5: EffectView.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
        6: EffectView.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
        7: EffectView.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3"
      };
      EffectView.WIN_TYPE = {
        BIG: 2,
        MEGA: 3,
        SUPER: 4
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", "ExtraBetComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", undefined);
      var ImgType;
      !function (e) {
        e[e.PNG = 0] = "PNG";
        e[e.JPG = 1] = "JPG";
      }(ImgType || (ImgType = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", undefined);
      var BoneName;
      !function (e) {
        e[e.default = 1] = "default";
      }(BoneName || (BoneName = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", undefined);
      var SlotName;
      !function (e) {
        e[e.default = 1] = "default";
      }(SlotName || (SlotName = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", undefined);
      var ZipCache = new Map();
      var ResCache = new Map();
      var ResCacheJsonVersion = new Map();
      var _ZipBundleLoader = function () {
        function e() {
          this.loadedZipNames = new Array();
        }
        var t = e.prototype;
        t.downloadZip = function (e, t) {
          return new Promise(function (o) {
            var i = e.match(/[^/]+$/);
            if (null !== i) {
              var n = "" + i[0] + t + ".zip";
              assetManager.downloader.downloadFile(e + "/" + n, {
                xhrResponseType: "arraybuffer"
              }, null, function (e, t) {
                o(t);
              });
            } else {
              o(null);
            }
          });
        };
        t.loadZip = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, o) {
            var i;
            var n;
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = o ? "." + o : "";
                    e.next = 3;
                    return this.downloadZip(t, i);
                  case 3:
                    if (null !== (n = e.sent)) {
                      r = t.replace(/(.*?)\/assets\//, "assets/");
                      globalThis.fflate.unzip(new Uint8Array(n), function (e, o) {
                        if (e) {
                          console.warn("Unzip failed:", e.message);
                        } else {
                          Object.keys(o).forEach(function (e) {
                            ZipCache.set(t + "/" + e, o[e]);
                            ZipCache.set(r + "/" + e, o[e]);
                          });
                        }
                      });
                    }
                  case 5:
                  case "end":
                    return e.stop();
                }
              }
            }, e, this);
          }));
          return function (t, o) {
            return e.apply(this, arguments);
          };
        }();
        t.init = function () {
          if (globalThis.fflate) {
            var e = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, "response", {
              get: function () {
                return this.ZipCacheUrl ? ResCache.get(this.ZipCacheUrl) : e.get.call(this);
              },
              set: function (e) {},
              configurable: true
            });
            var t = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (e, o, i, n, r) {
              function a() {
                var e = this.status >= 200 && this.status < 300 || 304 == this.status;
                if (this.readyState == XMLHttpRequest.DONE && !e && 404 != this.status && o.includes("http")) {
                  Log(701, this.status);
                  Log(702, o);
                }
                this.removeEventListener("load", a);
              }
              if (ZipCache.has(o)) {
                this.ZipCacheUrl = o;
              }
              this.addEventListener("load", a.bind(this));
              return t.apply(this, arguments);
            };
            var o = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
              var i;
              var n;
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
                      if (!this.ZipCacheUrl) {
                        e.next = 26;
                        break;
                      }
                      if (ResCache.has(this.ZipCacheUrl)) {
                        e.next = 24;
                        break;
                      }
                      i = this.responseType;
                      n = ZipCache.get(this.ZipCacheUrl);
                      r = null;
                      e.t0 = i;
                      e.next = "arraybuffer" === e.t0 ? 8 : "json" === e.t0 ? 10 : "text" === e.t0 ? 14 : 17;
                      break;
                    case 8:
                      r = n.buffer ? n.buffer : n;
                      return e.abrupt("break", 18);
                    case 10:
                      a = new TextDecoder();
                      s = a.decode(n);
                      r = JSON.parse(s);
                      return e.abrupt("break", 18);
                    case 14:
                      l = new TextDecoder();
                      r = l.decode(n);
                      return e.abrupt("break", 18);
                    case 17:
                      console.error("Unknown type in zipCache:", i);
                    case 18:
                      if (c = ResCacheJsonVersion.get(this.ZipCacheUrl)) {
                        ResCache.delete(this.ZipCacheUrl + "@version" + c);
                        ResCacheJsonVersion.delete(this.ZipCacheUrl);
                      }
                      u = performance.now();
                      ResCacheJsonVersion.set(this.ZipCacheUrl, u);
                      this.ZipCacheUrl = this.ZipCacheUrl + "@version" + u;
                      ResCache.set(this.ZipCacheUrl, r);
                    case 24:
                      this.onload();
                      return e.abrupt("return");
                    case 26:
                      return e.abrupt("return", o.apply(this, arguments));
                    case 27:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return e;
      }();
      function Log(e, t) {
        if (!sys.isNative) {
          var o = "https://" + window.location.host + "/";
          if (-1 == o.indexOf("localhost") && 1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(o)) {
            var i = 0;
            switch (sys.browserType) {
              case sys.BrowserType.CHROME:
                i = 1;
                break;
              case sys.BrowserType.SAFARI:
                i = 2;
                break;
              case sys.BrowserType.IE:
                i = 3;
                break;
              case sys.BrowserType.UC:
                i = 4;
                break;
              case sys.BrowserType.QQ:
              case sys.BrowserType.MOBILE_QQ:
                i = 5;
                break;
              case sys.BrowserType.FIREFOX:
                i = 6;
            }
            var n = 0;
            switch (sys.os) {
              case sys.OS.ANDROID:
                n = 1;
                break;
              case sys.OS.IOS:
                n = 2;
                break;
              case sys.OS.WINDOWS:
                n = 3;
                break;
              default:
                n = 0;
            }
            var r = GetLinkParameterByName("apiId") || "-1";
            var a = GetLinkParameterByName("ssoKey") || "1";
            var s = GetLinkParameterByName("gameID") || "-1";
            var l = "https://" + (GetLinkParameterByName("domain_platform") || GetLinkParameterByName("gs") || "gnidnawcs").split("").reverse().join("") + "/webservice/event/assetUpdate?";
            Send(l += "?AccountID=-1&GameID=" + s + "&GameVersion=" + new Date().getTime() + "&EventID=" + e + "&EventValue=" + t + "&BrowserSystem=" + i + "&DeviceSystem=" + n + "&CreateTime=" + new Date().toISOString() + "&Screen=0&SSOKey=" + a + "&ApiId=" + r + "&LogIndex=11");
          }
        }
      }
      function Send(e) {
        var t = {
          Accept: "application/json, text/javascript, text/plain"
        };
        var o = new XMLHttpRequest();
        o.open("GET", e, true);
        if (t) {
          Object.keys(t).forEach(function (e) {
            return o.setRequestHeader(e, t[e]);
          });
        }
        o.timeout = 5e3;
        o.onload = function () {};
        o.onerror = function () {};
        o.ontimeout = function () {};
        o.send();
      }
      function GetLinkParameterByName(e, t) {
        if (undefined === t) {
          t = null;
        }
        if (!t) {
          t = CheckReplayUrlAndDecode();
        }
        e = e.replace(/[[\]]/g, "\\$&");
        var o = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null;
      }
      function CheckReplayUrlAndDecode() {
        var e = window.location.href;
        var t = this.GetLinkParameterByName("replaydata", e);
        if (!t) {
          return e;
        }
        var o = "0".charCodeAt(0);
        var i = "9".charCodeAt(0);
        var n = "a".charCodeAt(0);
        var r = "z".charCodeAt(0);
        var a = "A".charCodeAt(0);
        var s = "Z".charCodeAt(0);
        var l = "";
        for (var c = 0; c < t.length; c++) {
          var u = t.charCodeAt(c);
          if (u >= o && u <= i) {
            u = i - (u - o);
            l += String.fromCharCode(u);
          } else if (u >= n && u <= r && c % 2 == 0) {
            u = r - (u - n);
            l += String.fromCharCode(u);
          } else if (u >= a && u <= s && c % 3 == 0) {
            u = s - (u - a);
            l += String.fromCharCode(u);
          } else {
            l += String.fromCharCode(u);
          }
        }
        var d = e.split("replaydata=" + t);
        d.join("");
        return d + atob(l);
      }
      var instance = globalThis.__zipBundleLoader;
      if (globalThis.fflate && !instance) {
        instance = new _ZipBundleLoader();
        globalThis.__zipBundleLoader = instance;
        instance.init();
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c933866GvpLKaZlVxLlOz0C", "FeatureManagerComponent", undefined);
      var BundleNo;
      !function (e) {
        e[e.CommonMainBundle = 0] = "CommonMainBundle";
        e[e.CommonBundle = 1] = "CommonBundle";
        e[e.OtherBundle = 2] = "OtherBundle";
        e[e.DefaultLangBundle = 3] = "DefaultLangBundle";
        e[e.LangTextBundle = 4] = "LangTextBundle";
        e[e.GameBundle = 5] = "GameBundle";
      }(BundleNo || (BundleNo = {}));
      var AutoplayPanelNo;
      var SeriesNo;
      !function (e) {
        e[e.None = 0] = "None";
        e[e.AutoPlaySettingPanel = 1] = "AutoPlaySettingPanel";
        e[e.AutoPlaySettingPanel_DFI = 2] = "AutoPlaySettingPanel_DFI";
        e[e.AutoPlaySettingPanel_DFIII = 3] = "AutoPlaySettingPanel_DFIII";
        e[e.AutoPlaySettingPanel_BS = 4] = "AutoPlaySettingPanel_BS";
        e[e.AutoPlaySetting_AG2 = 5] = "AutoPlaySetting_AG2";
        e[e.AutoPlaySetting_FD = 6] = "AutoPlaySetting_FD";
        e[e.AutoPlaySettingPanel_MS = 7] = "AutoPlaySettingPanel_MS";
      }(AutoplayPanelNo || (AutoplayPanelNo = {}));
      (function (e) {
        e[e.None = 0] = "None";
        e[e.Dark = 1] = "Dark";
      })(SeriesNo || (SeriesNo = {}));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", undefined);
      cclegacy._RF.pop();
    }
  };
});
(function (r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js');
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