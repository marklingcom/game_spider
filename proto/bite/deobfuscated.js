System.register("chunks:///game.js", ["./index-ecef4338.js", "cc"], function (exports, module) {
  "use strict";

  var _applyDecoratedDescriptor;
  var _inheritsLoose;
  var _initializerDefineProperty;
  var _assertThisInitialized;
  var node;
  var node$1;
  var SwitchOffKeyDefine;
  var node$2;
  var node$3;
  var node$4;
  var CommonState;
  var node$5;
  var node$6;
  var _createClass;
  var _asyncToGenerator;
  var _regeneratorRuntime;
  var node$7;
  var _createForOfIteratorHelperLoose;
  var SpineKit;
  var BaseState;
  var SlotBottomBarState;
  var BigWinComponent;
  var node$8;
  var Common_IdleState;
  var node$9;
  var node$a;
  var node$b;
  var node$c;
  var node$d;
  var ManualComponent;
  var AstarteInit;
  var node$e;
  var node$f;
  var CommonEventName;
  var node$g;
  var node$h;
  var node$i;
  var node$j;
  var node$k;
  var BottomBar_UIName;
  var BetValueChange;
  var cclegacy;
  var _decorator;
  var Sprite;
  var CCString;
  var Label;
  var Component;
  var Node;
  var Animation;
  var Button;
  var Enum;
  var tween;
  var v3;
  var color;
  var UIOpacity;
  var log;
  var instantiate;
  var SpriteFrame;
  var Prefab;
  var UITransform;
  var Size;
  var UIRenderer;
  var sp;
  var error;
  var SpriteAtlas;
  var sys;
  var input;
  var Input;
  var KeyCode;
  var screen;
  var view;
  var ResolutionPolicy;
  var Vec3;
  return {
    setters: [function (e) {
      _applyDecoratedDescriptor = e._;
      _inheritsLoose = e.a;
      _initializerDefineProperty = e.b;
      _assertThisInitialized = e.c;
      node = e.n;
      node$1 = e.f;
      SwitchOffKeyDefine = e.S;
      node$2 = e.g;
      node$3 = e.e;
      node$4 = e.h;
      CommonState = e.C;
      node$5 = e.i;
      node$6 = e.o;
      _createClass = e.d;
      _asyncToGenerator = e.k;
      _regeneratorRuntime = e.l;
      node$7 = e.u;
      _createForOfIteratorHelperLoose = e.s;
      SpineKit = e.t;
      BaseState = e.B;
      SlotBottomBarState = e.r;
      BigWinComponent = e.v;
      node$8 = e.q;
      Common_IdleState = e.w;
      node$9 = e.x;
      node$a = e.y;
      node$b = e.z;
      node$c = e.p;
      node$d = e.A;
      ManualComponent = e.M;
      AstarteInit = e.D;
      node$e = e.E;
      node$f = e.F;
      CommonEventName = e.G;
      node$g = e.H;
      node$h = e.I;
      node$i = e.J;
      node$j = e.K;
      node$k = e.L;
      BottomBar_UIName = e.N;
      BetValueChange = e.O;
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
      Enum = e.Enum;
      tween = e.tween;
      v3 = e.v3;
      color = e.color;
      UIOpacity = e.UIOpacity;
      log = e.log;
      instantiate = e.instantiate;
      SpriteFrame = e.SpriteFrame;
      Prefab = e.Prefab;
      UITransform = e.UITransform;
      Size = e.Size;
      UIRenderer = e.UIRenderer;
      sp = e.sp;
      error = e.error;
      SpriteAtlas = e.SpriteAtlas;
      sys = e.sys;
      input = e.input;
      Input = e.Input;
      KeyCode = e.KeyCode;
      screen = e.screen;
      view = e.view;
      ResolutionPolicy = e.ResolutionPolicy;
      Vec3 = e.Vec3;
    }],
    execute: function () {
      var _dec;
      var _dec2;
      var _dec3;
      var _dec4;
      var _dec5;
      var _class;
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
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
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
      var BuyBonusCell = _dec(_class = _class2) || _class;
      var _dec$1;
      var _dec2$1;
      var _dec3$1;
      var _dec4$1;
      var _dec5$1;
      var _dec6;
      var _dec7;
      var _dec8;
      var _dec9;
      var _dec10;
      var _class2$1;
      var _descriptor$1;
      var _descriptor2$1;
      var _descriptor3$1;
      var _descriptor4$1;
      var _descriptor5;
      var _descriptor6;
      var _descriptor7;
      var _descriptor8;
      var _descriptor9;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "22634/ooSRFbLeSP9IM51I9", "BuyBonus", undefined);
      var ccclass$1 = _decorator.ccclass;
      var property$1 = _decorator.property;
      _dec$1 = ccclass$1("BuyBonus");
      _dec2$1 = property$1({
        type: Node,
        tooltip: "介面"
      });
      _dec3$1 = property$1({
        type: Animation,
        tooltip: "介面開關動畫"
      });
      _dec4$1 = property$1({
        type: Node,
        tooltip: "開啟按鈕節點"
      });
      _dec5$1 = property$1({
        type: Label,
        tooltip: "押注金額"
      });
      _dec6 = property$1({
        type: BuyBonusCell,
        tooltip: "購買項目"
      });
      _dec7 = property$1({
        type: Sprite,
        tooltip: "標題"
      });
      _dec8 = property$1({
        type: Sprite,
        tooltip: "押注"
      });
      _dec9 = property$1({
        type: Sprite,
        tooltip: "紅寶石按鈕多語系"
      });
      _dec10 = property$1({
        type: Label,
        tooltip: "幣別"
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
          _initializerDefineProperty(t, "m_viewNode", _descriptor$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_anim", _descriptor2$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_openBtnNode", _descriptor3$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_betLabel", _descriptor4$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_buyBonusCells", _descriptor5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_titleSprite", _descriptor6, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_betSprite", _descriptor7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_buyBonusSprite", _descriptor8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_dollarSymbol", _descriptor9, _assertThisInitialized(t));
          t.m_iGameView = null;
          t.m_setting = null;
          t.m_betList = null;
          t.m_betIdx = 0;
          t.m_bonusType = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.start = function () {
          this.m_viewNode.active = true;
        };
        n.SetTxt = function () {
          var e = node.GetGameAtlas();
          this.m_betSprite.spriteFrame = e.getSpriteFrame("Txt_Buy_Feature_Bet");
          this.m_titleSprite.spriteFrame = e.getSpriteFrame("Txt_Buy_Feature_Title");
          this.m_buyBonusSprite.spriteFrame = e.getSpriteFrame("BuyBonus_IconName");
          for (var t = 0; t < this.m_buyBonusCells.length; t++) {
            this.m_buyBonusCells[t].SetTxt();
          }
        };
        n.Init = function (e, t) {
          var n = this;
          if (!e || node$1.CheckSwitchOff(SwitchOffKeyDefine.ShopingMall)) {
            this.m_viewNode.active = false;
            return void this.SetBuyBtnVisible(false);
          }
          this.m_setting = e;
          this.m_iGameView = t;
          this.m_betList = JSON.parse(JSON.stringify(node$2.GetBetList()));
          for (var i = this.m_betList.length - 1; i >= 0 && this.m_betList[i] > this.m_setting.MaxBet; i--) {
            this.m_betList.splice(i);
          }
          this.m_betIdx = node$2.GetNowBetIndex();
          if (!this.m_betList[this.m_betIdx] || this.m_betList[this.m_betIdx] > this.m_betList[this.m_betList.length - 1]) {
            this.m_betIdx = this.m_betList.length - 1;
          }
          this.SetPrice();
          var o = function (e) {
            n.m_buyBonusCells[e].getComponent(Button).node.on(Node.EventType.TOUCH_END, function () {
              node$5.Play(node$3.AudioClips.COMMON_BTN);
              n.m_bonusType = e;
              n.Hide();
              node$2.SetNowBet(n.m_betList[n.m_betIdx]);
              n.m_iGameView.ClickSpin();
            });
          };
          for (var r = 0; r < this.m_buyBonusCells.length; r++) {
            o(r);
          }
          this.m_viewNode.active = false;
          if (node$3.DollarSymbol.length > 0) {
            this.m_dollarSymbol.string = "(" + node$3.DollarSymbol + ")";
          } else {
            this.m_dollarSymbol.string = "";
          }
        };
        n.SetPrice = function () {
          var e = this.m_betList[this.m_betIdx];
          this.m_betLabel.string = "" + node$1.FormatNumberThousands(e, node$1.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          for (var t = 0; t < this.m_buyBonusCells.length; t++) {
            var n = node$1.times(e, this.m_setting.PriceOdd[t]);
            this.m_buyBonusCells[t].SetPrice("" + node$1.FormatNumberThousands(n, node$1.FORMAT_NUMBER_TYPE.PERMANENT_DOT));
          }
        };
        n.SetBuyBtnVisible = function (e) {
          this.m_openBtnNode.active = !!this.m_setting && e;
        };
        n.GetBuyBtnVisible = function () {
          return this.m_openBtnNode.active;
        };
        n.GetBuyBonusBet = function () {
          return this.m_setting && null !== this.m_bonusType ? node$1.times(this.m_setting.PriceOdd[this.m_bonusType], node$2.GetNowBetValue()) : node$1.strip(node$2.GetNowBetValue());
        };
        n.CleanInfo = function () {
          this.m_bonusType = null;
        };
        n.Show = function () {
          if (node$4.Current() === CommonState.IDLE) {
            if (this.m_anim.getState("Buy_Feature_Close").isPlaying) {
              return;
            }
            node$5.Play(node$3.AudioClips.COMMON_BTN);
            this.m_viewNode.active = true;
            this.m_anim.play("Buy_Feature_Open");
          } else {
            node$6.ShowMessageBox(node$3.StringKey.FREEWINCASH_PLAYING1);
          }
        };
        n.Hide = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = this.m_anim.getState("Buy_Feature_Open");
                    n = this.m_anim.getState("Buy_Feature_Close");
                    if (!t.isPlaying && !n.isPlaying && this.m_viewNode.active) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return");
                  case 4:
                    node$5.Play(node$3.AudioClips.COMMON_BTN);
                    this.m_anim.play("Buy_Feature_Close");
                    i = this.m_anim.getState("Buy_Feature_Close");
                    e.next = 9;
                    return node$3.Wait(this, i.duration);
                  case 9:
                    this.m_viewNode.active = false;
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
        n.AddBet = function () {
          if (!(this.m_betIdx + 1 > this.m_betList.length - 1)) {
            node$5.Play(node$3.AudioClips.COMMON_BTN);
            this.m_betIdx++;
            this.SetPrice();
          }
        };
        n.SubBet = function () {
          if (!(this.m_betIdx - 1 < 0)) {
            node$5.Play(node$3.AudioClips.COMMON_BTN);
            this.m_betIdx--;
            this.SetPrice();
          }
        };
        _createClass(t, [{
          key: "BonusType",
          get: function () {
            return this.m_bonusType;
          }
        }]);
        return t;
      }(Component);
      _descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "m_viewNode", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "m_anim", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$1 = _applyDecoratedDescriptor(_class2$1.prototype, "m_openBtnNode", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$1 = _applyDecoratedDescriptor(_class2$1.prototype, "m_betLabel", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5 = _applyDecoratedDescriptor(_class2$1.prototype, "m_buyBonusCells", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor6 = _applyDecoratedDescriptor(_class2$1.prototype, "m_titleSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor7 = _applyDecoratedDescriptor(_class2$1.prototype, "m_betSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor8 = _applyDecoratedDescriptor(_class2$1.prototype, "m_buyBonusSprite", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor9 = _applyDecoratedDescriptor(_class2$1.prototype, "m_dollarSymbol", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var GAMEVIEW_STATE;
      var Symbol;
      var AwardTypeFlag;
      var Column;
      var BetIndex;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "723afOcDzBF9ryd2olM5xOr", "Game_Define", undefined);
      (function (e) {
        e[e.WAIT_READY = 0] = "WAIT_READY";
        e[e.FEATURE_SHOW = 1] = "FEATURE_SHOW";
        e[e.UNSHOW_PREPARE = 2] = "UNSHOW_PREPARE";
        e[e.PLATE_SHOW = 3] = "PLATE_SHOW";
        e[e.IDLE = 4] = "IDLE";
        e[e.SPIN = 5] = "SPIN";
        e[e.FAKE_TO_REAL = 6] = "FAKE_TO_REAL";
        e[e.COLLECT_BONUS = 7] = "COLLECT_BONUS";
        e[e.AWARD = 8] = "AWARD";
        e[e.FISHING = 9] = "FISHING";
        e[e.ENTER_FREE = 10] = "ENTER_FREE";
        e[e.LEAVE_FREE = 11] = "LEAVE_FREE";
        e[e.ADD_FREE = 12] = "ADD_FREE";
        e[e.ROUND_SHOW_END = 13] = "ROUND_SHOW_END";
        e[e.ROUND_END = 14] = "ROUND_END";
      })(GAMEVIEW_STATE || (GAMEVIEW_STATE = {}));
      (function (e) {
        e[e.Symbol_10 = 0] = "Symbol_10";
        e[e.Symbol_J = 1] = "Symbol_J";
        e[e.Symbol_Q = 2] = "Symbol_Q";
        e[e.Symbol_K = 3] = "Symbol_K";
        e[e.Symbol_A = 4] = "Symbol_A";
        e[e.Symbol_Fish_1 = 5] = "Symbol_Fish_1";
        e[e.Symbol_Fish_2 = 6] = "Symbol_Fish_2";
        e[e.Symbol_Fish_3 = 7] = "Symbol_Fish_3";
        e[e.Symbol_Fish_4 = 8] = "Symbol_Fish_4";
        e[e.Symbol_Fish_5 = 9] = "Symbol_Fish_5";
        e[e.Symbol_Fish_6 = 10] = "Symbol_Fish_6";
        e[e.Symbol_Fish_7 = 11] = "Symbol_Fish_7";
        e[e.Symbol_Fish_8 = 12] = "Symbol_Fish_8";
        e[e.Symbol_Hook = 13] = "Symbol_Hook";
        e[e.Symbol_Beer = 14] = "Symbol_Beer";
        e[e.Symbol_Box = 15] = "Symbol_Box";
        e[e.Symbol_Boat = 16] = "Symbol_Boat";
        e[e.Symbol_Wild = 17] = "Symbol_Wild";
        e[e.Symbol_SuperWild = 18] = "Symbol_SuperWild";
        e[e.Symbol_Scatter = 19] = "Symbol_Scatter";
        e[e.Symbol_FakeFish = 20] = "Symbol_FakeFish";
      })(Symbol || (Symbol = {}));
      (function (e) {
        e[e.AwardTypeNon = 0] = "AwardTypeNon";
        e[e.AwardTypeLine = 1] = "AwardTypeLine";
        e[e.AwardTypeGolden = 2] = "AwardTypeGolden";
        e[e.AwardTypeGetFree = 4] = "AwardTypeGetFree";
        e[e.AwardTypeInFree = 8] = "AwardTypeInFree";
        e[e.AwardTypeLeaveFree = 16] = "AwardTypeLeaveFree";
        e[e.AwardTypeGetFreeInFree = 32] = "AwardTypeGetFreeInFree";
      })(AwardTypeFlag || (AwardTypeFlag = {}));
      (function (e) {
        e[e.First = 0] = "First";
        e[e.Second = 1] = "Second";
        e[e.Third = 2] = "Third";
        e[e.Forth = 3] = "Forth";
        e[e.Fifth = 4] = "Fifth";
      })(Column || (Column = {}));
      (function (e) {
        e[e.First = 0] = "First";
        e[e.Second = 1] = "Second";
        e[e.Third = 2] = "Third";
        e[e.Fourth = 3] = "Fourth";
        e[e.Fifth = 4] = "Fifth";
      })(BetIndex || (BetIndex = {}));
      var Game_Define = function () {
        function e() {}
        e.GetFishMulti = function (t) {
          var n = 0;
          switch (t) {
            case e.Symbol.Symbol_Fish_1:
              n = e.FishMulti.Fish_1;
              break;
            case e.Symbol.Symbol_Fish_2:
              n = e.FishMulti.Fish_2;
              break;
            case e.Symbol.Symbol_Fish_3:
              n = e.FishMulti.Fish_3;
              break;
            case e.Symbol.Symbol_Fish_4:
              n = e.FishMulti.Fish_4;
              break;
            case e.Symbol.Symbol_Fish_5:
              n = e.FishMulti.Fish_5;
              break;
            case e.Symbol.Symbol_Fish_6:
              n = e.FishMulti.Fish_6;
              break;
            case e.Symbol.Symbol_Fish_7:
              n = e.FishMulti.Fish_7;
              break;
            case e.Symbol.Symbol_Fish_8:
              n = e.FishMulti.Fish_8;
          }
          return n;
        };
        e.IsFishSymbol = function (t) {
          return t >= e.Symbol.Symbol_Fish_1 && t <= e.Symbol.Symbol_Fish_8;
        };
        return e;
      }();
      Game_Define.Ver = "18";
      Game_Define.CHILI_NUM = 4;
      Game_Define.Column = Enum(Column);
      Game_Define.Symbol = Enum(Symbol);
      Game_Define.BetIndex = Enum(BetIndex);
      Game_Define.GameState = Enum(GAMEVIEW_STATE);
      Game_Define.AwardTypeFlag = Enum(AwardTypeFlag);
      Game_Define.COL = 5;
      Game_Define.ROW = 3;
      Game_Define.MaxSymbolEachColumn = 3;
      Game_Define.MinSymbolEachColumn = 3;
      Game_Define.SmallAward = [1, 4, 6];
      Game_Define.RoundIdx = 0;
      Game_Define.ScatterCount = 0;
      Game_Define.FishCanLeave = false;
      Game_Define.FishLeaveList = [];
      Game_Define.NeedRespin = false;
      Game_Define.SuperWildRespinTime = 1;
      Game_Define.IsCatchScatter = false;
      Game_Define.IsNearWin = false;
      Game_Define.hasSuperWildBonus = false;
      Game_Define.IsFishing = false;
      Game_Define.FishMulti = {
        Fish_1: 1,
        Fish_2: 2,
        Fish_3: 5,
        Fish_4: 10,
        Fish_5: 15,
        Fish_6: 20,
        Fish_7: 50,
        Fish_8: 2e3
      };
      Game_Define.FISH_SYMBOL_WEIGHT = {
        5: 100,
        6: 100,
        7: 150,
        8: 150,
        9: 60,
        10: 15,
        11: 15,
        12: 5
      };
      Game_Define.IsInFG = false;
      Game_Define.IsHardStop = false;
      Game_Define.StringKey = {
        FEATURE_LEFT: "FEATURE_LEFT",
        FEATURE_RIGHT: "FEATURE_RIGHT",
        SKIP_TIP: "SKIP_TIP"
      };
      Game_Define.INIT_PLATE = [[13, 13, 13], [14, 14, 14], [11, 12, 11], [15, 15, 15], [16, 16, 16]];
      Game_Define.SYMBOL_LINE_VEC = [[1, 4, 7, 10, 13], [0, 3, 6, 9, 12], [2, 5, 8, 11, 14], [1, 3, 6, 9, 13], [1, 5, 8, 11, 13], [2, 4, 6, 10, 14], [0, 4, 8, 10, 12], [2, 5, 7, 9, 12], [0, 3, 7, 11, 14], [2, 4, 7, 10, 12]];
      Game_Define.EFFECT_ZINDEX = {
        NORMAL: 0,
        BOMB: 50,
        BIG_FISH: 100,
        WILD: 150,
        SCATTER: 200,
        FLY_BONUS: 250
      };
      Game_Define.AWARD_SETTING = [{
        BetRate: 6,
        Lv1: 1
      }, {
        BetRate: 15,
        Lv1: 2
      }, {
        BetRate: 30,
        Lv1: 3
      }];
      Game_Define.BigWinEventName = "AnimationEvent";
      Game_Define.BigWinSound1 = "Sound1";
      Game_Define.BigWinSound2 = "Sound2";
      Game_Define.BigWinStartAnimName = "BigWin_Start";
      Game_Define.MegaWinStartAnimName = "MegaWin_Start";
      Game_Define.SuperWinStartAnimName = "SuperWin_Start";
      Game_Define.BigWinEndAnimName = "BigWin_End";
      Game_Define.MegaWinEndAnimName = "MegaWin_End";
      Game_Define.SuperWinEndAnimName = "SuperWin_End";
      Game_Define.DELAY = {
        SMALL_WIN: .5,
        SYMBOL_WIN: 1.5
      };
      Game_Define.ShakeWorld = {
        SPEED: .04,
        DELTA: 2.5,
        TIMES: 10
      };
      Game_Define.AudioPathPre = "Sound/";
      Game_Define.AudioClips = {
        Debut: null,
        MG_BGM: null,
        Spin: null,
        Reel_Stop: null,
        Scatter1: null,
        Scatter2: null,
        Scatter3: null,
        Small_Win01: null,
        Small_Win02: null,
        Small_Win03: null,
        Big_Win: null,
        ChangeWin: null,
        Big_Win_End: null,
        NearWin: null,
        Scatter_bell: null,
        FG_Notify: null,
        FG_Into: null,
        FG_BGM: null,
        Wild_Stop: null,
        Fishing_Get: null,
        Fishing_Loss: null,
        FG_Bomb: null,
        FG_MoneyAdd: null,
        FG_Wild_Respin: null,
        FG_End: null,
        Bonus_Notify: null,
        Multiplier01: null,
        Multiplier02: null,
        Multiplier03: null,
        Bonus_Win: null,
        Reel_Respin: null,
        Fly: null,
        Fishing_SCATTER: null,
        Bonus_End: null,
        FG_Collect: null,
        FG_SpinsNumber: null,
        Fishing_SCATTER_Normal: null
      };
      Game_Define.SPINACK_TEST = {
        RoundQueue: [{
          FakePlateSymbol: [{
            Col: [9, 6, 19]
          }, {
            Col: [0, 7, 3]
          }, {
            Col: [1, 19, 9]
          }, {
            Col: [7, 2, 4]
          }, {
            Col: [3, 1, 19]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [9, 6, 19]
          }, {
            Col: [0, 7, 19]
          }, {
            Col: [1, 19, 9]
          }, {
            Col: [7, 2, 4]
          }, {
            Col: [3, 1, 19]
          }],
          LineWin: 3,
          RoundWin: 3,
          AwardDataVec: [{
            Index: 6,
            Symbol: 5,
            Count: 3,
            Win: 3
          }],
          AwardTypeFlag: 2,
          ScatterCount: 4,
          AddRound: 15,
          Bonus: [false, false, false, false, true, true],
          NextLevel: 1
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [1, 4, 13]
          }, {
            Col: [2, 7, 6]
          }, {
            Col: [14, 1, 13]
          }, {
            Col: [13, 1, 15]
          }, {
            Col: [6, 6, 0]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          NowLevel: 1,
          NowFreeRemainRound: 14,
          NowFreeTotalRound: 15,
          FreeTotalRound: 1
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [15, 1, 14]
          }, {
            Col: [4, 3, 6]
          }, {
            Col: [16, 4, 0]
          }, {
            Col: [6, 6, 3]
          }, {
            Col: [6, 4, 3]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          NowLevel: 1,
          NowFreeRemainRound: 13,
          NowFreeTotalRound: 15,
          FreeTotalRound: 2
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [7, 6, 13]
          }, {
            Col: [15, 3, 6]
          }, {
            Col: [1, 6, 6]
          }, {
            Col: [14, 7, 6]
          }, {
            Col: [1, 3, 2]
          }],
          LineWin: 15,
          RoundWin: 15,
          AwardDataVec: [{
            Index: 4,
            Symbol: 5,
            Count: 4,
            Win: 15
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          NowLevel: 1,
          NowFreeRemainRound: 12,
          NowFreeTotalRound: 15,
          FreeTotalRound: 3
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [15, 0, 2]
          }, {
            Col: [14, 3, 1]
          }, {
            Col: [4, 15, 2]
          }, {
            Col: [6, 3, 2]
          }, {
            Col: [0, 16, 17]
          }],
          RoundWin: 6,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          FishWin: 6,
          TotalWildCount: 1,
          NowLevel: 1,
          NowFreeRemainRound: 11,
          NowFreeTotalRound: 15,
          FreeTotalRound: 4
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [13, 2, 1]
          }, {
            Col: [15, 2, 6]
          }, {
            Col: [6, 3, 13]
          }, {
            Col: [0, 13, 3]
          }, {
            Col: [6, 2, 4]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          TotalWildCount: 1,
          NowLevel: 1,
          NowFreeRemainRound: 10,
          NowFreeTotalRound: 15,
          FreeTotalRound: 5
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [15, 0, 2]
          }, {
            Col: [4, 0, 1]
          }, {
            Col: [15, 13, 17]
          }, {
            Col: [17, 6, 6]
          }, {
            Col: [1, 3, 2]
          }],
          RoundWin: 24,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          FishWin: 24,
          TotalWildCount: 3,
          NowLevel: 1,
          NowFreeRemainRound: 9,
          NowFreeTotalRound: 15,
          FreeTotalRound: 6
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 2, 4]
          }, {
            Col: [2, 1, 6]
          }, {
            Col: [13, 15, 14]
          }, {
            Col: [15, 6, 1]
          }, {
            Col: [3, 2, 4]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          TotalWildCount: 3,
          NowLevel: 1,
          NowFreeRemainRound: 8,
          NowFreeTotalRound: 15,
          FreeTotalRound: 7
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [1, 13, 4]
          }, {
            Col: [4, 3, 6]
          }, {
            Col: [14, 3, 15]
          }, {
            Col: [0, 2, 13]
          }, {
            Col: [3, 2, 15]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          TotalWildCount: 3,
          NowLevel: 1,
          NowFreeRemainRound: 7,
          NowFreeTotalRound: 15,
          FreeTotalRound: 8
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 1, 15]
          }, {
            Col: [2, 6, 6]
          }, {
            Col: [1, 13, 0]
          }, {
            Col: [15, 16, 3]
          }, {
            Col: [3, 15, 0]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          TotalWildCount: 3,
          NowLevel: 1,
          NowFreeRemainRound: 6,
          NowFreeTotalRound: 15,
          FreeTotalRound: 9
        }, {
          FakePlateSymbol: [{
            Col: [4, 2, 1]
          }, {
            Col: [1, 13, 16]
          }, {
            Col: [17, 1, 0]
          }, {
            Col: [14, 13, 3]
          }, {
            Col: [16, 1, 3]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [4, 2, 1]
          }, {
            Col: [1, 6, 6]
          }, {
            Col: [17, 1, 7]
          }, {
            Col: [14, 13, 3]
          }, {
            Col: [16, 1, 3]
          }],
          RoundWin: 27,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          FishWin: 27,
          TotalWildCount: 4,
          NowLevel: 1,
          NowFreeRemainRound: 5,
          NowFreeTotalRound: 15,
          FreeTotalRound: 10
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 2, 0]
          }, {
            Col: [14, 3, 1]
          }, {
            Col: [6, 17, 16]
          }, {
            Col: [1, 13, 3]
          }, {
            Col: [13, 1, 4]
          }],
          RoundWin: 6,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          FishWin: 6,
          TotalWildCount: 5,
          NowLevel: 1,
          NowFreeRemainRound: 4,
          NowFreeTotalRound: 15,
          FreeTotalRound: 11
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [13, 4, 0]
          }, {
            Col: [0, 14, 1]
          }, {
            Col: [1, 4, 16]
          }, {
            Col: [3, 6, 6]
          }, {
            Col: [2, 14, 7]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          TotalWildCount: 5,
          NowLevel: 1,
          NowFreeRemainRound: 3,
          NowFreeTotalRound: 15,
          FreeTotalRound: 12
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [15, 3, 2]
          }, {
            Col: [6, 7, 6]
          }, {
            Col: [2, 3, 14]
          }, {
            Col: [13, 2, 16]
          }, {
            Col: [1, 3, 2]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          TotalWildCount: 5,
          NowLevel: 1,
          NowFreeRemainRound: 2,
          NowFreeTotalRound: 15,
          FreeTotalRound: 13
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 2, 0]
          }, {
            Col: [3, 6, 1]
          }, {
            Col: [14, 3, 16]
          }, {
            Col: [14, 6, 6]
          }, {
            Col: [6, 15, 15]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          TotalWildCount: 5,
          NowLevel: 1,
          NowFreeRemainRound: 1,
          NowFreeTotalRound: 15,
          FreeTotalRound: 14
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [14, 13, 4]
          }, {
            Col: [0, 13, 14]
          }, {
            Col: [14, 3, 1]
          }, {
            Col: [6, 3, 13]
          }, {
            Col: [3, 2, 15]
          }],
          AwardTypeFlag: 20,
          AddRound: 10,
          Bonus: [false, false, false, false, true, true],
          FishMult: 1,
          TotalWildCount: 5,
          NowLevel: 1,
          NowFreeTotalRound: 15,
          FreeTotalRound: 15,
          NextLevel: 2
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [13, 14, 0]
          }, {
            Col: [3, 2, 1]
          }, {
            Col: [13, 14, 3]
          }, {
            Col: [14, 13, 3]
          }, {
            Col: [14, 6, 17]
          }],
          RoundWin: 12,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 2,
          FishWin: 12,
          TotalWildCount: 6,
          NowLevel: 2,
          NowFreeRemainRound: 9,
          NowFreeTotalRound: 10,
          FreeTotalRound: 16
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [13, 1, 4]
          }, {
            Col: [4, 3, 7]
          }, {
            Col: [6, 3, 1]
          }, {
            Col: [0, 2, 13]
          }, {
            Col: [16, 3, 2]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 2,
          TotalWildCount: 6,
          NowLevel: 2,
          NowFreeRemainRound: 8,
          NowFreeTotalRound: 10,
          FreeTotalRound: 17
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [16, 4, 1]
          }, {
            Col: [13, 14, 0]
          }, {
            Col: [17, 1, 14]
          }, {
            Col: [13, 4, 0]
          }, {
            Col: [16, 7, 0]
          }],
          RoundWin: 30,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 2,
          FishWin: 30,
          TotalWildCount: 7,
          NowLevel: 2,
          NowFreeRemainRound: 7,
          NowFreeTotalRound: 10,
          FreeTotalRound: 18
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [2, 0, 15]
          }, {
            Col: [14, 3, 6]
          }, {
            Col: [7, 3, 1]
          }, {
            Col: [3, 2, 15]
          }, {
            Col: [13, 17, 14]
          }],
          RoundWin: 42,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 2,
          FishWin: 42,
          TotalWildCount: 8,
          NowLevel: 2,
          NowFreeRemainRound: 6,
          NowFreeTotalRound: 10,
          FreeTotalRound: 19
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 15, 6]
          }, {
            Col: [6, 6, 0]
          }, {
            Col: [1, 14, 0]
          }, {
            Col: [6, 2, 13]
          }, {
            Col: [4, 6, 6]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 2,
          TotalWildCount: 8,
          NowLevel: 2,
          NowFreeRemainRound: 5,
          NowFreeTotalRound: 10,
          FreeTotalRound: 20
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [16, 0, 4]
          }, {
            Col: [6, 14, 3]
          }, {
            Col: [0, 4, 15]
          }, {
            Col: [14, 13, 17]
          }, {
            Col: [15, 15, 14]
          }],
          RoundWin: 12,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 2,
          FishWin: 12,
          TotalWildCount: 9,
          NowLevel: 2,
          NowFreeRemainRound: 4,
          NowFreeTotalRound: 10,
          FreeTotalRound: 21
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [16, 0, 4]
          }, {
            Col: [1, 6, 6]
          }, {
            Col: [13, 14, 3]
          }, {
            Col: [14, 6, 6]
          }, {
            Col: [4, 0, 13]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 2,
          TotalWildCount: 9,
          NowLevel: 2,
          NowFreeRemainRound: 3,
          NowFreeTotalRound: 10,
          FreeTotalRound: 22
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 13, 2]
          }, {
            Col: [13, 0, 14]
          }, {
            Col: [6, 6, 3]
          }, {
            Col: [4, 1, 0]
          }, {
            Col: [0, 13, 14]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 2,
          TotalWildCount: 9,
          NowLevel: 2,
          NowFreeRemainRound: 2,
          NowFreeTotalRound: 10,
          FreeTotalRound: 23
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [3, 6, 6]
          }, {
            Col: [7, 13, 4]
          }, {
            Col: [0, 3, 16]
          }, {
            Col: [7, 6, 7]
          }, {
            Col: [2, 4, 14]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 2,
          TotalWildCount: 9,
          NowLevel: 2,
          NowFreeRemainRound: 1,
          NowFreeTotalRound: 10,
          FreeTotalRound: 24
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [3, 6, 0]
          }, {
            Col: [14, 3, 2]
          }, {
            Col: [0, 4, 6]
          }, {
            Col: [1, 13, 4]
          }, {
            Col: [13, 1, 4]
          }],
          AwardTypeFlag: 20,
          AddRound: 10,
          Bonus: [false, false, false, false, true, true],
          FishMult: 2,
          TotalWildCount: 9,
          NowLevel: 2,
          NowFreeTotalRound: 10,
          FreeTotalRound: 25,
          NextLevel: 3
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 2, 4]
          }, {
            Col: [14, 3, 6]
          }, {
            Col: [14, 4, 15]
          }, {
            Col: [13, 3, 16]
          }, {
            Col: [17, 16, 8]
          }],
          RoundWin: 108,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 3,
          FishWin: 108,
          TotalWildCount: 10,
          NowLevel: 3,
          NowFreeRemainRound: 9,
          NowFreeTotalRound: 10,
          FreeTotalRound: 26
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [6, 6, 6]
          }, {
            Col: [6, 4, 15]
          }, {
            Col: [4, 0, 14]
          }, {
            Col: [13, 1, 14]
          }, {
            Col: [1, 16, 4]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 3,
          TotalWildCount: 10,
          NowLevel: 3,
          NowFreeRemainRound: 8,
          NowFreeTotalRound: 10,
          FreeTotalRound: 27
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [15, 6, 6]
          }, {
            Col: [0, 13, 1]
          }, {
            Col: [3, 14, 1]
          }, {
            Col: [15, 1, 13]
          }, {
            Col: [4, 3, 15]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 3,
          TotalWildCount: 10,
          NowLevel: 3,
          NowFreeRemainRound: 7,
          NowFreeTotalRound: 10,
          FreeTotalRound: 28
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [2, 16, 4]
          }, {
            Col: [6, 3, 2]
          }, {
            Col: [3, 13, 0]
          }, {
            Col: [14, 4, 6]
          }, {
            Col: [4, 16, 3]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 3,
          TotalWildCount: 10,
          NowLevel: 3,
          NowFreeRemainRound: 6,
          NowFreeTotalRound: 10,
          FreeTotalRound: 29
        }, {
          FakePlateSymbol: [{
            Col: [15, 13, 4]
          }, {
            Col: [16, 3, 1]
          }, {
            Col: [15, 2, 13]
          }, {
            Col: [4, 1, 14]
          }, {
            Col: [14, 17, 15]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [6, 13, 4]
          }, {
            Col: [16, 3, 6]
          }, {
            Col: [6, 6, 13]
          }, {
            Col: [6, 1, 14]
          }, {
            Col: [14, 17, 15]
          }],
          RoundWin: 90,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 3,
          FishWin: 90,
          TotalWildCount: 11,
          NowLevel: 3,
          NowFreeRemainRound: 5,
          NowFreeTotalRound: 10,
          FreeTotalRound: 30
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [13, 2, 1]
          }, {
            Col: [15, 3, 0]
          }, {
            Col: [1, 4, 16]
          }, {
            Col: [1, 6, 13]
          }, {
            Col: [3, 17, 1]
          }],
          RoundWin: 18,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 3,
          FishWin: 18,
          TotalWildCount: 12,
          NowLevel: 3,
          NowFreeRemainRound: 4,
          NowFreeTotalRound: 10,
          FreeTotalRound: 31
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 1, 6]
          }, {
            Col: [1, 16, 0]
          }, {
            Col: [4, 15, 13]
          }, {
            Col: [6, 13, 15]
          }, {
            Col: [13, 17, 4]
          }],
          RoundWin: 36,
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 3,
          FishWin: 36,
          TotalWildCount: 13,
          NowLevel: 3,
          NowFreeRemainRound: 3,
          NowFreeTotalRound: 10,
          FreeTotalRound: 32
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 7, 4]
          }, {
            Col: [3, 6, 1]
          }, {
            Col: [13, 1, 0]
          }, {
            Col: [15, 4, 15]
          }, {
            Col: [4, 0, 1]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 3,
          TotalWildCount: 13,
          NowLevel: 3,
          NowFreeRemainRound: 2,
          NowFreeTotalRound: 10,
          FreeTotalRound: 33
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [15, 1, 14]
          }, {
            Col: [6, 6, 4]
          }, {
            Col: [3, 16, 4]
          }, {
            Col: [0, 2, 13]
          }, {
            Col: [6, 6, 1]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 3,
          TotalWildCount: 13,
          NowLevel: 3,
          NowFreeRemainRound: 1,
          NowFreeTotalRound: 10,
          FreeTotalRound: 34
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [2, 1, 6]
          }, {
            Col: [13, 14, 0]
          }, {
            Col: [1, 3, 14]
          }, {
            Col: [15, 1, 17]
          }, {
            Col: [15, 2, 3]
          }],
          RoundWin: 18,
          AwardTypeFlag: 20,
          AddRound: 10,
          Bonus: [false, false, false, false, true, true],
          FishMult: 3,
          FishWin: 18,
          TotalWildCount: 14,
          NowLevel: 3,
          NowFreeTotalRound: 10,
          FreeTotalRound: 35,
          NextLevel: 4
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 2, 1]
          }, {
            Col: [2, 1, 6]
          }, {
            Col: [1, 1, 6]
          }, {
            Col: [16, 14, 15]
          }, {
            Col: [0, 1, 3]
          }],
          LineWin: 1.2,
          RoundWin: 1.2,
          AwardDataVec: [{
            Index: 5,
            Symbol: 1,
            Count: 3,
            Win: .6
          }, {
            Index: 9,
            Symbol: 1,
            Count: 3,
            Win: .6
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 10,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 9,
          NowFreeTotalRound: 10,
          FreeTotalRound: 36
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [2, 1, 13]
          }, {
            Col: [6, 6, 0]
          }, {
            Col: [6, 3, 13]
          }, {
            Col: [13, 4, 7]
          }, {
            Col: [6, 8, 3]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 10,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 8,
          NowFreeTotalRound: 10,
          FreeTotalRound: 37
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [3, 2, 0]
          }, {
            Col: [0, 1, 3]
          }, {
            Col: [1, 6, 6]
          }, {
            Col: [15, 6, 1]
          }, {
            Col: [4, 0, 13]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 10,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 7,
          NowFreeTotalRound: 10,
          FreeTotalRound: 38
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [1, 13, 3]
          }, {
            Col: [14, 1, 0]
          }, {
            Col: [1, 3, 14]
          }, {
            Col: [2, 13, 1]
          }, {
            Col: [0, 3, 6]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 10,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 6,
          NowFreeTotalRound: 10,
          FreeTotalRound: 39
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [2, 3, 6]
          }, {
            Col: [0, 15, 2]
          }, {
            Col: [2, 15, 3]
          }, {
            Col: [0, 13, 14]
          }, {
            Col: [3, 1, 15]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 10,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 5,
          NowFreeTotalRound: 10,
          FreeTotalRound: 40
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [2, 1, 13]
          }, {
            Col: [6, 6, 14]
          }, {
            Col: [6, 13, 2]
          }, {
            Col: [4, 6, 6]
          }, {
            Col: [6, 6, 2]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 10,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 4,
          NowFreeTotalRound: 10,
          FreeTotalRound: 41
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [2, 3, 6]
          }, {
            Col: [4, 15, 2]
          }, {
            Col: [14, 1, 3]
          }, {
            Col: [6, 6, 3]
          }, {
            Col: [1, 2, 14]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 10,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 3,
          NowFreeTotalRound: 10,
          FreeTotalRound: 42
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 2, 16]
          }, {
            Col: [2, 13, 1]
          }, {
            Col: [2, 15, 3]
          }, {
            Col: [3, 13, 1]
          }, {
            Col: [4, 3, 15]
          }],
          LineWin: .6,
          RoundWin: .6,
          AwardDataVec: [{
            Index: 3,
            Symbol: 2,
            Count: 3,
            Win: .6
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 10,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 2,
          NowFreeTotalRound: 10,
          FreeTotalRound: 43
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [2, 0, 4]
          }, {
            Col: [14, 3, 6]
          }, {
            Col: [6, 6, 6]
          }, {
            Col: [2, 16, 14]
          }, {
            Col: [15, 15, 14]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, false, false, false, true, true],
          FishMult: 10,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 1,
          NowFreeTotalRound: 10,
          FreeTotalRound: 44
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 1, 15]
          }, {
            Col: [13, 2, 15]
          }, {
            Col: [1, 14, 17]
          }, {
            Col: [0, 13, 4]
          }, {
            Col: [13, 6, 4]
          }],
          LineWin: 9,
          RoundWin: 69,
          AwardDataVec: [{
            Index: 2,
            Symbol: 15,
            Count: 3,
            Win: 9
          }],
          AwardTypeFlag: 12,
          Bonus: [false, false, false, false, true, true],
          FishMult: 10,
          FishWin: 60,
          TotalWildCount: 15,
          NowLevel: 4,
          NowFreeTotalRound: 10,
          FreeTotalRound: 45
        }],
        FreeTotalWin: 514.8,
        TotalWin: 517.8,
        RTP: .971
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d0abd/WoLpGMb79B5SYbKUC", "ColumnSymbol", undefined);
      var _dec$3;
      var _dec2$2;
      var _dec3$2;
      var _class$3;
      var _class2$2;
      var _descriptor$2;
      var _descriptor2$2;
      var _descriptor3$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "7f4f3J+kbpLlp7y1X0G2LoE", "SlotReels", undefined);
      var REEL_POSITION_OFFSET = [v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0)];
      var ccclass$3 = _decorator.ccclass;
      var property$2 = _decorator.property;
      _dec$3 = property$2(SpriteFrame);
      _dec2$2 = property$2({
        type: SpriteFrame,
        tooltip: "魚Symbol圖片(透明底版)"
      });
      _dec3$2 = property$2({
        type: Prefab,
        tooltip: "靜態獎金Prefab"
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
          _initializerDefineProperty(t, "m_symbolSpriteFrames", _descriptor$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_mgFishsymbolSpriteFrames", _descriptor2$2, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_bonusLabelPrefab", _descriptor3$2, _assertThisInitialized(t));
          t.m_symbolSize = null;
          t.m_viewSize = null;
          t.m_gameView = null;
          t.m_plateInfo = [[], [], [], [], []];
          t.m_isChangeSymbol = new Map();
          t.m_currentMoveLength = new Map();
          t.m_isColStops = [];
          t.m_symbols = [];
          t.m_upperSymbols = [];
          t.m_lowerSymbols = [];
          t.m_symbolPos = [[], [], [], [], []];
          t.m_labelNodes = [];
          t.m_upperLabelNodes = [];
          t.m_lowerLabelNodes = [];
          t.m_upPlateInfo = [];
          t.m_lowPlateInfo = [];
          t.m_time = 0;
          t.m_stopTime = 0;
          t.m_reelStopTimes = new Array();
          t.m_reelPreTimes = new Array();
          t.m_riseTime = 0;
          t.m_totalLength = null;
          t.m_upLength = 0;
          t.m_downLength = 20;
          t.m_spinBufferTime01 = .1;
          t.m_spinBufferTime02 = .2;
          t.m_spinTime = .3;
          t.m_timesOfBaseSpin = 1;
          t.m_spinIntervalTimes = 1;
          t.m_isChangeToFinalSymbol = new Array();
          t.m_isStop = false;
          t.m_isClickStopBtn = false;
          t.m_isPlaySymbolStop = [false, false, false, false, false];
          t.m_isPlaySound = [false, false, false, false, false];
          t.m_canPlayReelStopSound = true;
          t.m_isPlaySpinSound = false;
          t.m_reelSpinSoundId = -1;
          t.m_isStartNearWin = false;
          t.m_isPlayNearWin = [false, false, false, false, false];
          t.m_secondScatterCol = -1;
          t.m_nearwinSpinTime = 2.6;
          t.m_mgFakeReel = [[20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 19, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3], [1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 19, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3], [20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 19, 2, 3, 16, 0, 15, 1], [13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 19, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2], [4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 19, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13]];
          t.m_fgFakeReel = [[20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 17, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3], [1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 17, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3], [20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 17, 2, 3, 16, 0, 15, 1], [13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 17, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2], [4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 17, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13]];
          t.m_superWildFakeReel = [[20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 18, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3], [1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 18, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3], [20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 18, 2, 3, 16, 0, 15, 1], [13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 18, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13, 4, 15, 20, 20, 4, 2], [4, 15, 20, 20, 4, 2, 13, 1, 20, 20, 3, 1, 13, 3, 14, 2, 0, 13, 4, 15, 3, 0, 20, 20, 0, 16, 2, 3, 20, 20, 20, 1, 13, 0, 20, 1, 14, 4, 18, 2, 3, 16, 0, 15, 1, 20, 20, 2, 14, 13, 4, 2, 20, 20, 20, 3, 0, 14, 13]];
          t.m_mgFakeReelCounter = [0, 0, 0, 0, 0];
          t.m_fgFakeReelCounter = [0, 0, 0, 0, 0];
          t.m_superWildFakeReelCounter = [0, 0, 0, 0, 0];
          t.m_fishSymbolWeightArray = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.onLoad = function () {
          var e = this;
          this.m_viewSize = this.node.getComponent(UITransform).contentSize;
          this.m_symbolSize = new Size(this.m_viewSize.width / Game_Define.COL, this.m_viewSize.height / Game_Define.ROW);
          this.m_reelStopTimes = Array(Game_Define.COL).fill(null);
          this.m_reelPreTimes = Array(Game_Define.COL).fill(null);
          this.InitPlate();
          this.m_fishSymbolWeightArray = this.GetFishSymbolWeightArray();
          var t = function () {
            var t = node$7.TempoSetting.TripleCoinTreasure;
            e.m_riseTime = t.BASE.RISE_TIME;
            e.m_upLength = t.BASE.UP_LENGTH;
            e.m_spinBufferTime01 = t.BASE.SPIN_BUFFER_TIME_01;
            e.m_spinBufferTime02 = t.BASE.SPIN_BUFFER_TIME_02;
            e.m_downLength = t.BASE.DOWN_LENGTH;
            e.m_spinTime = t.BASE.SPIN_SPEED;
            e.m_timesOfBaseSpin = t.BASE.TIMES_OF_BASE_SPIN;
            e.m_spinIntervalTimes = t.BASE.SPIN_INTERVAL_TIMES;
          };
          t();
          node$7.AddCb(t);
        };
        n.InitPlate = function () {
          this.m_plateInfo = JSON.parse(JSON.stringify(Game_Define.INIT_PLATE));
          var e = 0;
          for (var t = 0; t < Game_Define.COL; t++) {
            var n = [];
            var i = [];
            for (var o = 0; o < Game_Define.ROW; o++) {
              var r = this.NewSymbolNode(t, o, this.m_plateInfo[t][o], String(e));
              e++;
              n.push(r);
              this.m_isChangeSymbol.set(r.name, false);
              this.m_currentMoveLength.set(r.name, 0);
              this.m_symbolPos[t][o] = v3(r.getPosition().x, r.getPosition().y, 0);
              var a = this.NewBonusLabelNode(r);
              i.push(a);
            }
            this.m_symbols.push(n);
            this.m_labelNodes.push(i);
          }
          for (var s = 0; s < Game_Define.COL; s++) {
            this.m_upPlateInfo.push(s);
            var l = this.NewSymbolNode(s, -1, this.m_upPlateInfo[s], String(e));
            e++;
            this.m_upperSymbols.push(l);
            l.active = false;
            this.m_isChangeSymbol.set(l.name, false);
            this.m_currentMoveLength.set(l.name, 0);
            var c = this.NewBonusLabelNode(l);
            this.m_upperLabelNodes.push(c);
          }
          for (var u = 0; u < Game_Define.COL; u++) {
            this.m_lowPlateInfo.push(u);
            var m = this.NewSymbolNode(u, Game_Define.ROW, this.m_lowPlateInfo[u], String(e));
            e++;
            this.m_lowerSymbols.push(m);
            m.active = false;
            this.m_isChangeSymbol.set(m.name, false);
            this.m_currentMoveLength.set(m.name, 0);
            var p = this.NewBonusLabelNode(m);
            this.m_lowerLabelNodes.push(p);
          }
          this.m_isChangeToFinalSymbol = Array(e).fill(false);
        };
        n.NewSymbolNode = function (e, t, n, i) {
          var o = this.m_symbolSize.width * (e + .5) + REEL_POSITION_OFFSET[e].x - this.m_viewSize.width / 2;
          var r = this.m_symbolSize.height * (Game_Define.ROW - t - .5) + REEL_POSITION_OFFSET[e].y - this.m_viewSize.height / 2;
          var a = new Node();
          a.name = i;
          this.node.addChild(a);
          a.setPosition(o, r);
          var s = a.addComponent(Sprite);
          s.sizeMode = Sprite.SizeMode.RAW;
          s.type = Sprite.Type.SIMPLE;
          s.trim = false;
          s.spriteFrame = this.m_symbolSpriteFrames[n];
          return a;
        };
        n.NewBonusLabelNode = function (e) {
          var t = instantiate(this.m_bonusLabelPrefab);
          e.addChild(t);
          return t.getChildByName("Label");
        };
        n.SetAllLabels = function (e) {
          var t = node$1.strip(node$2.GetNowBetValue());
          for (var n = 0; n < Game_Define.COL; n++) {
            for (var i = 0; i < Game_Define.ROW; i++) {
              this.SetLabel(this.m_labelNodes[n][i], e[n][i], t);
            }
            this.SetLabel(this.m_upperLabelNodes[n], this.m_upPlateInfo[n], t);
            this.SetLabel(this.m_lowerLabelNodes[n], this.m_lowPlateInfo[n], t);
          }
        };
        n.SetLabel = function (e, t, n) {
          if (t >= Game_Define.Symbol.Symbol_Fish_1 && t <= Game_Define.Symbol.Symbol_Fish_8) {
            var i;
            var o = node$1.times(Game_Define.GetFishMulti(t), n);
            i = o >= 100 ? node$1.FormatNumberThousands(o, node$1.FORMAT_NUMBER_TYPE.NONE_DOT, true) : node$1.FormatNumberThousands(o, node$1.FORMAT_NUMBER_TYPE.PERMANENT_DOT, true, 2);
            e.getComponent(Label).string = i;
            var r = Game_Define.IsInFG ? color(255, 255, 255) : color(249, 194, 104);
            e.getComponent(Label).color = r;
            var a = Game_Define.IsInFG ? 255 : 153;
            e.getComponent(UIOpacity).opacity = a;
          } else {
            e.getComponent(Label).string = "";
          }
        };
        n.Init = function (e) {
          this.m_gameView = e;
        };
        n.StartSpin = function () {
          this.m_isStartNearWin = false;
          this.m_secondScatterCol = -1;
          this.m_time = 0;
          this.m_stopTime = 0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_canPlayReelStopSound = true;
          this.m_isPlayNearWin = [false, false, false, false, false];
          this.m_isPlaySound = [false, false, false, false, false];
          this.m_isPlaySymbolStop = [false, false, false, false, false];
          this.m_isPlaySpinSound = false;
          this.m_reelSpinSoundId = -1;
          this.m_plateInfo = null;
          Game_Define.ScatterCount = 0;
          this.m_isColStops = Array(Game_Define.COL).fill(false);
          for (var e = 0; e < Game_Define.COL; e++) {
            this.m_reelStopTimes[e] = null;
            this.m_reelPreTimes[e] = null;
          }
          for (var t = 0; t < this.m_isChangeToFinalSymbol.length; t++) {
            this.m_isChangeToFinalSymbol[t] = false;
          }
          for (var n in this.m_isChangeSymbol) this.m_isChangeSymbol[n] = true;
          var i;
          for (var o = _createForOfIteratorHelperLoose(this.m_currentMoveLength.keys()); !(i = o()).done;) {
            var r = i.value;
            this.m_currentMoveLength.set(r, 0);
          }
          this.SetUpperAndLowerActive(true);
        };
        n.SetUpperAndLowerActive = function (e) {
          for (var t = 0; t < Game_Define.COL; t++) {
            this.m_upperSymbols[t].active = e;
            this.m_lowerSymbols[t].active = e;
          }
        };
        n.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          if (0 !== this.m_stopTime) {
            var e = 0;
            if (Game_Define.NeedRespin) {
              e = Game_Define.SuperWildRespinTime;
            }
            var t = Math.ceil(this.m_time / this.m_spinTime);
            t = t > 0 ? t : 1;
            var n = node$1.strip((t - 1) * this.m_spinTime);
            var i = node$1.strip(t * this.m_spinTime);
            for (var o = 0; o < Game_Define.COL; ++o) {
              if (this.m_reelStopTimes[o] > i) {
                this.m_reelStopTimes[o] = i + e;
                this.m_reelPreTimes[o] = n + e;
              }
            }
            var r = node$7.TempoSetting.TripleCoinTreasure.SPEED_UP_STOP_TIME(0, this.m_time);
            if (r < this.m_stopTime) {
              this.m_stopTime = node$1.strip(r) + e;
            }
          }
        };
        n.ShowStaticSymbol = function () {
          for (var e = 0; e < Game_Define.COL; e++) {
            for (var t = 0; t < Game_Define.ROW; t++) {
              this.m_symbols[e][t].active = true;
            }
          }
        };
        n.ShowStaticSymbolAndLight = function () {
          for (var e = 0; e < Game_Define.COL; e++) {
            for (var t = 0; t < Game_Define.ROW; t++) {
              if (!this.m_symbols[e][t].active) {
                this.m_symbols[e][t].active = true;
                this.SetSymbolDark(e, t, false);
              }
            }
          }
        };
        n.Spin = function (e) {
          if (!this.m_isStop) {
            this.m_time = node$1.strip(this.m_time + e);
            this.Spin_RealSpinMultiple();
            if (!(Game_Define.IsHardStop || this.m_isClickStopBtn || this.m_isStartNearWin || -1 === this.m_secondScatterCol || !(this.m_time > this.m_reelStopTimes[this.m_secondScatterCol]) || Game_Define.IsInFG)) {
              this.m_isStartNearWin = true;
            }
            if (this.m_time >= this.m_stopTime && 0 != this.m_stopTime) {
              if (-1 !== this.m_reelSpinSoundId) {
                this.m_gameView.SetBGMVolumeByFade(1, 0, .1, this.m_reelSpinSoundId);
                this.m_reelSpinSoundId = -1;
              }
              this.m_isStop = true;
              this.m_gameView.EffectPlate.CleanAllScatterEffect();
              this.ShowStaticSymbol();
              this.ShowSymbolDark(false);
            }
          }
        };
        n.Spin_RealSpinMultiple = function () {
          var e = this;
          var t = function (t) {
            if (!e.m_isPlaySpinSound) {
              e.m_isPlaySpinSound = true;
            }
            var n = e.m_spinTime;
            if (e.m_isStartNearWin) {
              n = e.m_spinTime / 2;
            }
            if (e.m_isStartNearWin && t > e.m_secondScatterCol && e.m_time > e.m_reelStopTimes[t - 1] && !e.m_isPlayNearWin[t] && 1 == e.m_isPlaySymbolStop[t - 1] && !e.m_isClickStopBtn && !Game_Define.IsHardStop) {
              e.m_isPlayNearWin[t] = true;
              e.m_gameView.EffectPlate.PlayNearWin(t);
              e.m_gameView.EffectPlate.ShowScatterNearWin(e.m_plateInfo, t);
              if (!Game_Define.IsNearWin) {
                Game_Define.IsNearWin = true;
                e.m_gameView.CharacterSpine.PlayNearWin();
              }
              e.ShowSymbolDark(true);
              e.ShowSymbolDark(false, t, t + 1);
              e.m_gameView.IsLock = true;
            }
            for (var i = 0; i < Game_Define.ROW; i++) {
              e.SpinMoving(t, i, e.m_symbols[t][i], e.m_labelNodes[t][i], n, function () {
                if (!e.m_isColStops[t]) {
                  e.PlaySymbolStop(t);
                }
                e.m_gameView.EffectPlate.SetSpecialSymbolPos(t, e.m_plateInfo[t]);
                e.m_gameView.EffectPlate.CloseNearWin(t);
                e.UpdateProgressBar(t);
              });
            }
            e.SpinMoving(t, -1, e.m_upperSymbols[t], e.m_upperLabelNodes[t], n, function () {
              if (!e.m_isColStops[t]) {
                e.m_isColStops[t] = true;
                e.CheckPlayStopSound(t);
              }
            });
            e.SpinMoving(t, Game_Define.ROW, e.m_lowerSymbols[t], e.m_lowerLabelNodes[t], n);
          };
          for (var n = 0; n < Game_Define.COL; n++) {
            t(n);
          }
        };
        n.SpinMoving = function (e, t, n, i, o, r) {
          var a = this.m_time;
          var s = this.m_reelStopTimes[e];
          var l = this.m_riseTime * Game_Define.COL;
          var c = this.m_symbolSize.height * (Game_Define.ROW + 2);
          var u = this.m_symbolSize.height * (Game_Define.ROW - t + .5);
          var m = this.m_symbolSize.width * (e + .5) + REEL_POSITION_OFFSET[e].x - this.m_viewSize.width / 2;
          var p = this.m_symbolSize.height * (Game_Define.ROW - (t + .5)) + REEL_POSITION_OFFSET[e].y - this.m_viewSize.height / 2;
          var _ = 0;
          if (a < this.m_riseTime * e) {
            ;
          } else if (a < this.m_riseTime * (e + 1)) {
            _ = (a - this.m_riseTime * e) / this.m_riseTime * this.m_upLength;
          } else if (a < l) {
            _ = this.m_upLength;
          } else if (null == s || a < s + l) {
            var d = (a - l) % o / o * c;
            _ = -this.GetMovelength(d, u, c, e, t, n, i);
          } else if (a < s + l + this.m_spinBufferTime01) {
            _ = -(a - s - l) / this.m_spinBufferTime01 * this.m_downLength;
            this.CheckChangeToFinalSymbol(e, t, n, i);
          } else if (a < s + l + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
            _ = -(1 - (a - s - l - this.m_spinBufferTime01) / this.m_spinBufferTime02) * this.m_downLength;
            this.CheckChangeToFinalSymbol(e, t, n, i);
          } else {
            this.CheckChangeToFinalSymbol(e, t, n, i);
          }
          n.setPosition(m, p + _);
          if (s && a >= s + l) {
            if (!(null == r)) {
              r();
            }
          }
        };
        n.GetMovelength = function (e, t, n, i, o, r, a) {
          if (e >= t) {
            e -= n;
          }
          if (this.m_currentMoveLength.get(r.name) >= e) {
            if (!this.m_isChangeSymbol.get(r.name)) {
              this.m_isChangeSymbol.set(r.name, true);
              this.ChangeSymbol(i, o, r, a, false);
            }
          } else {
            this.m_isChangeSymbol.set(r.name, false);
          }
          this.m_currentMoveLength.set(r.name, e);
          return e;
        };
        n.ChangeSymbol = function (e, t, n, i, o) {
          var r = this.m_reelPreTimes[e];
          var a = this.m_riseTime * Game_Define.COL;
          var s = 0;
          s = (r && this.m_time - a > r || o) && t >= 0 && t < Game_Define.ROW ? this.m_plateInfo[e][t] : this.GetFakeSymbolIdx(e);
          n.getComponent(Sprite).spriteFrame = this.m_symbolSpriteFrames[s];
          this.SetLabel(i, s, node$1.strip(node$2.GetNowBetValue()));
        };
        n.CheckChangeToFinalSymbol = function (e, t, n, i) {
          var o = Number(n.name);
          if (!this.m_isChangeToFinalSymbol[o]) {
            this.m_isChangeToFinalSymbol[o] = true;
            this.ChangeSymbol(e, t, n, i, true);
          }
        };
        n.GetFakeSymbolIdx = function (e) {
          var t;
          if (Game_Define.IsInFG) {
            if (Game_Define.hasSuperWildBonus) {
              t = this.m_superWildFakeReel[e][this.m_superWildFakeReelCounter[e]];
              this.m_superWildFakeReelCounter[e]++;
              if (this.m_superWildFakeReelCounter[e] >= this.m_superWildFakeReel[e].length) {
                this.m_superWildFakeReelCounter[e] = 0;
              }
            } else {
              t = this.m_fgFakeReel[e][this.m_fgFakeReelCounter[e]];
              this.m_fgFakeReelCounter[e]++;
              if (this.m_fgFakeReelCounter[e] >= this.m_fgFakeReel[e].length) {
                this.m_fgFakeReelCounter[e] = 0;
              }
            }
          } else {
            t = this.m_mgFakeReel[e][this.m_mgFakeReelCounter[e]];
            this.m_mgFakeReelCounter[e]++;
            if (this.m_mgFakeReelCounter[e] >= this.m_mgFakeReel[e].length) {
              this.m_mgFakeReelCounter[e] = 0;
            }
          }
          if (t == Game_Define.Symbol.Symbol_FakeFish) {
            var n = Math.floor(595 * Math.random());
            t = this.m_fishSymbolWeightArray[n];
          }
          return t;
        };
        n.PlaySymbolStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_isPlaySymbolStop[t]) {
                      e.next = 9;
                      break;
                    }
                    this.m_isPlaySymbolStop[t] = true;
                    if (Game_Define.IsHardStop) {
                      e.next = 6;
                      break;
                    }
                    this.m_gameView.EffectPlate.SpecialSymbolStop(t, this.m_plateInfo[t]);
                    e.next = 9;
                    break;
                  case 6:
                    if (0 === t) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return");
                  case 8:
                    this.m_gameView.EffectPlate.AllSpecialSymbolStop(this.m_plateInfo);
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
        n.UpdateProgressBar = function (e) {
          if (Game_Define.IsInFG && e == Game_Define.COL - 1) {
            var t = this.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx].TotalWildCount;
            if ((t = t <= 12 ? t : 12) && t > this.m_gameView.EffectPlate.FGProgressBar.NowWildCount + 1) {
              for (var n = 0; n < t; n++) {
                this.m_gameView.EffectPlate.FGProgressBar.PlayOn(n);
              }
            }
          }
        };
        n.SetPlateInfo = function (e) {
          this.m_plateInfo = e.map(function (e) {
            return e.slice();
          });
          var t = this.m_riseTime * Game_Define.COL;
          var n = Math.ceil((this.m_time - t) / this.m_spinTime);
          this.m_secondScatterCol = this.GetSecondScatterCol();
          var i = 0;
          if (Game_Define.NeedRespin) {
            i = Game_Define.SuperWildRespinTime;
          }
          if (this.m_isClickStopBtn) {
            this.m_stopTime = node$1.strip(this.m_spinTime * n + t + i);
            for (var o = 0; o < Game_Define.COL; o++) {
              this.m_reelStopTimes[o] = node$1.strip(this.m_spinTime * n + i);
              this.m_reelPreTimes[o] = node$1.strip(this.m_spinTime * (n - 1) + i);
            }
          } else {
            this.m_stopTime = node$1.strip(this.m_spinTime * (n + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinTime * (Game_Define.COL - 1) + +t + this.m_spinBufferTime01 + this.m_spinBufferTime02 + i);
            for (var r = 0; r < Game_Define.COL; r++) {
              this.m_reelStopTimes[r] = node$1.strip(this.m_spinTime * (n + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinTime * r + i);
              this.m_reelPreTimes[r] = node$1.strip(this.m_spinTime * (n + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinTime * (r - 1) + i);
            }
            if (-1 !== this.m_secondScatterCol) {
              this.m_stopTime = this.m_stopTime + this.m_nearwinSpinTime * (Game_Define.COL - (this.m_secondScatterCol + 1));
              for (var a = 0; a < Game_Define.COL; a++) {
                if (a > this.m_secondScatterCol) {
                  this.m_reelStopTimes[a] = node$1.strip(this.m_reelStopTimes[a] + this.m_nearwinSpinTime * (a - this.m_secondScatterCol));
                  this.m_reelPreTimes[a] = node$1.strip(this.m_reelStopTimes[a] + this.m_nearwinSpinTime * (a - this.m_secondScatterCol));
                }
              }
            }
          }
        };
        n.GetSecondScatterCol = function () {
          var e = -1;
          var t = 0;
          for (var n = 0; n < Game_Define.COL; n++) {
            for (var i = 0; i < Game_Define.ROW; i++) {
              if (this.m_plateInfo[n][i] == Game_Define.Symbol.Symbol_Scatter) {
                t++;
              }
              if (-1 === e && 2 === t && n !== this.m_plateInfo.length - 1 && !Game_Define.IsInFG) {
                e = n;
                break;
              }
            }
          }
          return e;
        };
        n.IsPlateStop = function () {
          return this.m_isStop;
        };
        n.GetSymbolNode = function (e, t) {
          return this.m_symbols[e][t];
        };
        n.SetSymbolNode = function (e, t, n) {
          var i = this.m_symbols[e][t].getComponent(Sprite);
          if (!Game_Define.IsInFG && Game_Define.IsFishSymbol(n)) {
            i.spriteFrame = this.GetMgFishSymbolSpriteFrame(n);
          } else {
            i.spriteFrame = this.GetSymbolSpriteFrame(n);
          }
          this.m_symbols[e][t].active = true;
          this.SetLabel(this.m_labelNodes[e][t], n, node$1.strip(node$2.GetNowBetValue()));
        };
        n.CheckPlayStopSound = function (e) {
          if (!this.m_isPlaySound[e]) {
            this.m_isPlaySound[e] = true;
            if (Game_Define.IsHardStop) {
              if (!this.m_canPlayReelStopSound) {
                return;
              }
              var t = 0;
              var n = 0;
              for (var i = 0; i < Game_Define.COL; i++) {
                var o = false;
                for (var r = 0; r < Game_Define.ROW; r++) {
                  if (this.m_plateInfo[i][r] == Game_Define.Symbol.Symbol_Scatter) {
                    t++;
                  } else if (!(this.m_plateInfo[i][r] != Game_Define.Symbol.Symbol_Wild && this.m_plateInfo[i][r] != Game_Define.Symbol.Symbol_SuperWild)) {
                    o = true;
                  }
                }
                if (o) {
                  n++;
                }
              }
              var a = this.m_gameView.EffectPlate.NeedPlayWildSound(this.m_plateInfo);
              if (t > 0) {
                this.PlaySatterSound(t);
              } else if (n > 0 && a && 0 === t) {
                node$5.Play(Game_Define.AudioClips.Wild_Stop);
              } else {
                node$5.Play(Game_Define.AudioClips.Reel_Stop);
              }
              this.m_canPlayReelStopSound = false;
            } else {
              var s = 0;
              var l = false;
              var c = false;
              for (var u = 0; u <= e; u++) {
                for (var m = 0; m < Game_Define.ROW; m++) {
                  if (this.m_plateInfo[u][m] == Game_Define.Symbol.Symbol_Scatter) {
                    s++;
                    if (u == e) {
                      l = true;
                    }
                  } else if (!(this.m_plateInfo[u][m] != Game_Define.Symbol.Symbol_Wild && this.m_plateInfo[u][m] != Game_Define.Symbol.Symbol_SuperWild)) {
                    if (u == e) {
                      c = true;
                    }
                  }
                }
              }
              var p = this.m_gameView.EffectPlate.NeedPlayColWildSound(e, this.m_plateInfo[e]);
              if (l) {
                this.PlaySatterSound(s);
              } else if (c && p && !l) {
                node$5.Play(Game_Define.AudioClips.Wild_Stop);
              } else {
                if (this.m_canPlayReelStopSound) {
                  node$5.Play(Game_Define.AudioClips.Reel_Stop);
                }
                if (this.m_isClickStopBtn) {
                  this.m_canPlayReelStopSound = false;
                }
              }
            }
          }
        };
        n.PlaySatterSound = function (e) {
          if (1 == e) {
            node$5.Play(Game_Define.AudioClips.Scatter1);
            Game_Define.ScatterCount = 1;
          } else if (2 == e) {
            node$5.Play(Game_Define.AudioClips.Scatter2);
            Game_Define.ScatterCount = 2;
          } else if (3 == e) {
            node$5.Play(Game_Define.AudioClips.Scatter3);
            Game_Define.ScatterCount = 3;
          } else if (4 == e) {
            node$5.Play(Game_Define.AudioClips.Scatter3);
            Game_Define.ScatterCount = 4;
          } else if (5 == e) {
            node$5.Play(Game_Define.AudioClips.Scatter3);
            Game_Define.ScatterCount = 5;
          }
        };
        n.SetPlateSymbol = function (e) {
          if (undefined === e) {
            e = [];
          }
          if (0 == e.length) {
            e = Game_Define.INIT_PLATE;
          }
          for (var t = 0; t < Game_Define.COL; t++) {
            this.m_reelStopTimes[t] = null;
            this.m_reelPreTimes[t] = null;
            var n = this.m_symbolSize.width * (t + .5) + REEL_POSITION_OFFSET[t].x - this.m_viewSize.width / 2;
            for (var i = 0; i < Game_Define.ROW; i++) {
              var o = this.m_symbolSpriteFrames[e[t][i]];
              this.m_symbols[t][i].getComponent(Sprite).spriteFrame = o;
              var r = this.m_symbolSize.height * (i + .5) + REEL_POSITION_OFFSET[t].y - this.m_viewSize.height / 2;
              this.m_symbols[t][i].setPosition(n, r);
            }
          }
          for (var a = 0; a < Game_Define.COL; a++) {
            var s = this.m_symbolSize.width * (a + .5) + REEL_POSITION_OFFSET[a].x - this.m_viewSize.width / 2;
            var l = this.m_symbolSize.height * (Game_Define.ROW + .5) + REEL_POSITION_OFFSET[a].y - this.m_viewSize.height / 2;
            this.m_upperSymbols[a].setPosition(s, l);
            this.m_upperSymbols[a].active = false;
            var c = -.5 * this.m_symbolSize.height + REEL_POSITION_OFFSET[a].y - this.m_viewSize.height / 2;
            this.m_lowerSymbols[a].setPosition(s, c);
            this.m_lowerSymbols[a].active = false;
          }
        };
        n.RandomSymbol = function () {
          var e = Math.floor(Math.random() * (Game_Define.Symbol.Symbol_Scatter + 1));
          if (Game_Define.hasSuperWildBonus) {
            if (e === Game_Define.Symbol.Symbol_Wild) {
              e = Game_Define.Symbol.Symbol_SuperWild;
            }
          } else if (e === Game_Define.Symbol.Symbol_SuperWild) {
            e = Game_Define.Symbol.Symbol_Wild;
          }
          if (!(Game_Define.IsInFG || e !== Game_Define.Symbol.Symbol_Wild && e !== Game_Define.Symbol.Symbol_SuperWild)) {
            e = Math.floor(Math.random() * (Game_Define.Symbol.Symbol_Boat + 1));
          }
          return e;
        };
        n.GetSymbolSpriteFrame = function (e) {
          return this.m_symbolSpriteFrames[e];
        };
        n.GetMgFishSymbolSpriteFrame = function (e) {
          var t = e - Game_Define.Symbol.Symbol_Fish_1;
          return this.m_mgFishsymbolSpriteFrames[t];
        };
        n.ShowSymbolDark = function (e, t, n) {
          if (undefined === t) {
            t = 0;
          }
          if (undefined === n) {
            n = Game_Define.COL;
          }
          var i;
          var o = e ? color(96, 96, 96) : color(255, 255, 255);
          if (e) {
            Game_Define.IsInFG;
            i = color(96, 96, 96);
          } else {
            i = Game_Define.IsInFG ? color(255, 255, 255) : color(249, 194, 104);
          }
          for (var r = t; r < n; r++) {
            for (var a = 0; a < Game_Define.ROW; a++) {
              this.m_symbols[r][a].getComponent(UIRenderer).color = o;
              this.m_upperSymbols[r].getComponent(UIRenderer).color = o;
              this.m_lowerSymbols[r].getComponent(UIRenderer).color = o;
              this.m_labelNodes[r][a].getComponent(UIRenderer).color = i;
              this.m_upperLabelNodes[r].getComponent(UIRenderer).color = i;
              this.m_lowerLabelNodes[r].getComponent(UIRenderer).color = i;
            }
          }
        };
        n.ShowSymbolLightFade = function (e) {
          for (var i = 0; i < Game_Define.COL; i++) {
            for (var o = 0; o < Game_Define.ROW; o++) {
              if (this.m_plateInfo[i][o] != Game_Define.Symbol.Symbol_Scatter) {
                var r = this.m_symbols[i][o];
                this.ColorRun(r, e, 96, 255);
                var a = this.m_upperSymbols[i];
                this.ColorRun(a, e, 96, 255);
                var s = this.m_lowerSymbols[i];
                this.ColorRun(s, e, 96, 255);
                var l = this.m_labelNodes[i][o];
                this.ColorRun(l, e, 96, 255);
                var c = this.m_upperLabelNodes[i];
                this.ColorRun(c, e, 96, 255);
                var u = this.m_lowerLabelNodes[i];
                this.ColorRun(u, e, 96, 255);
              }
            }
          }
        };
        n.ColorRun = function (e, t, n, i) {
          var o = node$1.divide(t, .02);
          var r = node$1.divide(i - n, o);
          var a = n;
          tween(e).repeat(o, tween().call(function () {
            if ((a += r) >= i) {
              a = i;
            }
            e.getComponent(UIRenderer).color = color(a, a, a);
          }).delay(.02)).call(function () {
            e.getComponent(UIRenderer).color = color(i, i, i);
          }).start();
        };
        n.ShowScatterLight = function () {
          for (var e = 0; e < Game_Define.COL; e++) {
            for (var t = 0; t < Game_Define.ROW; t++) {
              var n = this.m_symbols[e][t];
              if (this.m_plateInfo[e][t] == Game_Define.Symbol.Symbol_Scatter) {
                n.getComponent(UIRenderer).color = color(255, 255, 255);
              }
            }
          }
        };
        n.SetSymbolDark = function (e, t, n) {
          var i;
          var o = n ? color(96, 96, 96) : color(255, 255, 255);
          this.m_symbols[e][t].getComponent(Sprite).color = o;
          i = n ? Game_Define.IsInFG ? color(96, 96, 96) : color(50, 50, 50) : Game_Define.IsInFG ? color(255, 255, 255) : color(249, 194, 104);
          this.m_labelNodes[e][t].getComponent(Label).color = i;
        };
        n.SetPlateDark = function (e) {
          for (var t = 0; t < Game_Define.COL; t++) {
            for (var n = 0; n < Game_Define.ROW; n++) {
              this.SetSymbolDark(t, n, e);
            }
          }
        };
        n.GetSymbolPosition = function (e, t) {
          return this.m_symbols[e][t].position;
        };
        n.SetAllBonusLabel = function () {
          for (var e = 0; e < Game_Define.COL; e++) {
            for (var t = 0; t < Game_Define.ROW; t++) {
              this.SetLabel(this.m_labelNodes[e][t], this.m_plateInfo[e][t], node$1.strip(node$2.GetNowBetValue()));
            }
          }
          if (this.m_gameView.SpinAck) {
            var n = this.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx];
            var i = n.AwardDataVec ? n.AwardDataVec : [];
            if (i && i.length > 0 && node$4.Current() === CommonState.IDLE) {
              this.SetPlateDark(true);
            } else {
              this.SetPlateDark(false);
            }
          }
        };
        n.GetFishSymbolWeightArray = function () {
          var e = Object.keys(Game_Define.FISH_SYMBOL_WEIGHT).map(function (e) {
            return Number(e);
          });
          var t = Object.values(Game_Define.FISH_SYMBOL_WEIGHT);
          var n = [];
          for (var i = 0; i < e.length; i++) {
            for (var o = 0; o < t[i]; o++) {
              n.push(e[i]);
            }
          }
          return n;
        };
        n.SetLabelIsCollected = function (e, t) {
          this.m_labelNodes[e][t].getComponent(Label).color = color(249, 194, 104);
          this.m_labelNodes[e][t].getComponent(UIOpacity).opacity = 153;
        };
        _createClass(t, [{
          key: "SymbolSize",
          get: function () {
            return this.m_symbolSize;
          }
        }, {
          key: "PlateInfo",
          set: function (e) {
            this.m_plateInfo = e;
          }
        }, {
          key: "SymbolPos",
          get: function () {
            return this.m_symbolPos;
          }
        }]);
        return t;
      }(Component);
      _descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "m_symbolSpriteFrames", [_dec$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "m_mgFishsymbolSpriteFrames", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$2 = _applyDecoratedDescriptor(_class2$2.prototype, "m_bonusLabelPrefab", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var SlotReels = ccclass$3(_class$3 = _class2$2) || _class$3;
      var _dec$4;
      var _dec2$3;
      var _dec3$3;
      var _dec4$2;
      var _dec5$2;
      var _class$4;
      var _class2$3;
      var _descriptor$3;
      var _descriptor2$3;
      var _descriptor3$3;
      var _descriptor4$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b1d0deS9ONESbtIpEzTRp4P", "SymbolSpine", undefined);
      var WildSkinName = ["X1", "X2", "X3", "X10"];
      var ccclass$4 = _decorator.ccclass;
      var property$3 = _decorator.property;
      _dec$4 = ccclass$4("SymbolSpine");
      _dec2$3 = property$3({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _dec3$3 = property$3({
        tooltip: "是否為Wild"
      });
      _dec4$2 = property$3({
        tooltip: "是否為魚符號"
      });
      _dec5$2 = property$3({
        type: Label,
        tooltip: "魚符號的獎金Label"
      });
      _class2$3 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_isWild", _descriptor2$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_isFish", _descriptor3$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_bonusLabel", _descriptor4$2, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetBonusLabel = function (e, t) {
          if (undefined === t) {
            t = false;
          }
          var n;
          var i = node$1.times(Game_Define.GetFishMulti(e), node$1.strip(node$2.GetNowBetValue()));
          n = i >= 100 ? node$1.FormatNumberThousands(i, node$1.FORMAT_NUMBER_TYPE.NONE_DOT, true) : node$1.FormatNumberThousands(i, node$1.FORMAT_NUMBER_TYPE.PERMANENT_DOT, true, 2);
          this.m_bonusLabel.string = n;
          var o = Game_Define.IsInFG && !t ? color(255, 255, 255) : color(249, 194, 104);
          this.m_bonusLabel.color = o;
          var r = Game_Define.IsInFG && !t ? 255 : 153;
          this.m_bonusLabel.node.getComponent(UIOpacity).opacity = r;
        };
        n.SetFishSkin = function (e) {
          if (e == Game_Define.Symbol.Symbol_Fish_1 || e == Game_Define.Symbol.Symbol_Fish_2) {
            this.m_spine.setSkin("Skine1");
          } else if (e == Game_Define.Symbol.Symbol_Fish_3 || e == Game_Define.Symbol.Symbol_Fish_4) {
            this.m_spine.setSkin("Skine2");
          } else if (e == Game_Define.Symbol.Symbol_Fish_5 || e == Game_Define.Symbol.Symbol_Fish_6) {
            this.m_spine.setSkin("Skine3");
          } else if (e == Game_Define.Symbol.Symbol_Fish_7) {
            this.m_spine.setSkin("Skine4");
          }
        };
        n.ShowWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_isWild && t) {
                      this.m_spine.setSkin(WildSkinName[t - 1]);
                    }
                    i = "Win";
                    if (this.m_isFish) {
                      this.SetFishSkin(n);
                      this.SetBonusLabel(n);
                      if (Game_Define.IsInFG) {
                        i = "FG_Win";
                      }
                    }
                    e.next = 5;
                    return this.PlayAnimation(i, false);
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
        n.PlayStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_spine.setSkin(WildSkinName[t - 1]);
                    e.next = 3;
                    return this.PlayAnimation("Stop", false);
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
        n.PlayReSpin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_spine.setSkin(WildSkinName[t - 1]);
                    e.next = 3;
                    return this.PlayAnimation("ReSpin", false, 1.5);
                  case 3:
                    this.PlayAnimation("ReSpin_Hint", false, 1.5);
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
        n.PlayChange = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_isFish) {
                      this.SetFishSkin(t);
                      this.SetBonusLabel(t);
                    }
                    e.next = 3;
                    return this.PlayAnimation("Change", false);
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
        n.PlayHit = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_isFish) {
                      this.SetFishSkin(t);
                      this.SetBonusLabel(t);
                    }
                    this.PlayAnimation("Hit", false);
                    e.next = 4;
                    return node$3.Wait(this, .283);
                  case 4:
                    if (this.m_isFish && n) {
                      this.SetBonusLabel(t, true);
                    }
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    if (undefined === i) {
                      i = 1;
                    }
                    this.m_spine.getState().timeScale = i;
                    this.node.active = true;
                    e.next = 6;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
                  case 6:
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
      _descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "m_spine", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$3 = _applyDecoratedDescriptor(_class2$3.prototype, "m_isWild", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      });
      _descriptor3$3 = _applyDecoratedDescriptor(_class2$3.prototype, "m_isFish", [_dec4$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      });
      _descriptor4$2 = _applyDecoratedDescriptor(_class2$3.prototype, "m_bonusLabel", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var SymbolSpine = _dec$4(_class$4 = _class2$3) || _class$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "6d8a7xFiGpGHaqb79htSZLb", "NodePool", undefined);
      var NodePool = function () {
        function e() {
          this.m_symbolEffectPrefabs = null;
          this.m_symbolEffectNodes = {};
          this.m_bonusPrefab = null;
          this.m_bonusNodes = null;
          this.m_symbolBombPrefab = null;
          this.m_symbolBombNodes = null;
          if (e._instance) {
            throw new Error("Error: Instantiation failed: Use NodePool.getInstance() instead of new.");
          }
          e._instance = this;
        }
        e.getInstance = function () {
          if (!this._instance) {
            this._instance = new e();
          }
          return e._instance;
        };
        var t = e.prototype;
        t.SetEffectPrefabs = function (e, t, n) {
          this.m_symbolEffectPrefabs = e;
          for (var i = 0; i < e.length; i++) {
            this.m_symbolEffectNodes[e[i].name] = new Array();
          }
          this.m_bonusPrefab = t;
          this.m_bonusNodes = new Array();
          this.m_symbolBombPrefab = n;
          this.m_symbolBombNodes = new Array();
        };
        t.GetSymbolEffectNode = function (e) {
          var t = this.m_symbolEffectPrefabs[e];
          var n = t.name;
          return this.m_symbolEffectNodes[n] && this.m_symbolEffectNodes[n].length > 0 ? this.m_symbolEffectNodes[n].shift() : instantiate(t);
        };
        t.ReturnSymbolEffect = function (e) {
          if (!this.m_symbolEffectNodes[e.name]) {
            this.m_symbolEffectNodes[e.name] = [];
          }
          this.m_symbolEffectNodes[e.name].push(e);
        };
        t.GetBonusEffectNode = function () {
          var e = this.m_bonusPrefab;
          return this.m_bonusNodes && this.m_bonusNodes.length > 0 ? this.m_bonusNodes.shift() : instantiate(e);
        };
        t.ReturnBonusEffect = function (e) {
          if (!this.m_bonusNodes) {
            this.m_bonusNodes = [];
          }
          this.m_bonusNodes.push(e);
        };
        t.GetSymbolBombEffectNode = function () {
          var e = this.m_symbolBombPrefab;
          return this.m_symbolBombNodes && this.m_symbolBombNodes.length > 0 ? this.m_symbolBombNodes.shift() : instantiate(e);
        };
        t.ReturnSymbolBombEffect = function (e) {
          if (!this.m_symbolBombNodes) {
            this.m_symbolBombNodes = [];
          }
          this.m_symbolBombNodes.push(e);
        };
        return e;
      }();
      var _dec$5;
      var _dec2$4;
      var _class$5;
      var _class2$4;
      var _descriptor$4;
      NodePool._instance = new NodePool();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a2523kyq95OeY0IZSqkPk8k", "ScatterSpine", undefined);
      var ccclass$5 = _decorator.ccclass;
      var property$4 = _decorator.property;
      _dec$5 = ccclass$5("ScatterSpine");
      _dec2$4 = property$4({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _class2$4 = function (e) {
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
        n.PlayStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("Stop", false);
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
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("NearWin", true);
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
        n.PlayWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("Win", true);
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
        n.PlayChange = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("Change", false);
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
                    if (undefined === n) {
                      n = false;
                    }
                    this.node.active = true;
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
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
        return t;
      }(Component);
      _descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "m_spine", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var ScatterSpine = _dec$5(_class$5 = _class2$4) || _class$5;
      var _dec$6;
      var _dec2$5;
      var _dec3$4;
      var _dec4$3;
      var _class$6;
      var _class2$5;
      var _descriptor$5;
      var _descriptor2$4;
      var _descriptor3$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "fcf01EVlqtLmbIQrT3pwelz", "FGReelSpine", undefined);
      var ccclass$6 = _decorator.ccclass;
      var property$5 = _decorator.property;
      _dec$6 = ccclass$6("FGReelSpine");
      _dec2$5 = property$5({
        type: sp.Skeleton,
        tooltip: "魚Spine"
      });
      _dec3$4 = property$5({
        type: sp.Skeleton,
        tooltip: "網子Spine"
      });
      _dec4$3 = property$5({
        type: Node,
        tooltip: "靜態盤面"
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
          _initializerDefineProperty(t, "m_spineUp", _descriptor$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_spineDown", _descriptor2$4, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_reel", _descriptor3$4, _assertThisInitialized(t));
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
        };
        n.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_reel.active = false;
                    this.m_spineUp.node.active = true;
                    this.m_spineDown.node.active = true;
                    n = t ? "FG_Start_L" : "FG_Start_S";
                    i = t ? "FG_Loop_L" : "FG_Loop_S";
                    e.next = 7;
                    return this.PlayAnimation(n);
                  case 7:
                    this.PlayAnimation(i, true);
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
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = t ? "FG_End_L" : "FG_End_S";
                    e.next = 3;
                    return this.PlayAnimation(n);
                  case 3:
                    this.m_reel.active = true;
                    this.m_spineUp.node.active = false;
                    this.m_spineDown.node.active = false;
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
        n.FadeReel = function (e, t) {
          tween(this.m_spineDown.getComponent(UIOpacity)).to(e, {
            opacity: t
          }).start();
          tween(this.m_reel.getComponent(UIOpacity)).to(e, {
            opacity: t
          }).start();
        };
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    SpineKit.PlayAnimation(this.m_spineUp, t, n);
                    e.next = 4;
                    return SpineKit.PlayAnimation(this.m_spineDown, t, n, 0, function (e) {
                      switch (e) {
                        case "Bonus_Start1":
                          i.m_gameView.EffectPlate.FishingBonusSpine.PlayShow(i.m_gameView.IsLandscape, 0);
                          break;
                        case "Bonus_Start2":
                          i.m_gameView.EffectPlate.FishingBonusSpine.PlayShow(i.m_gameView.IsLandscape, 1);
                          break;
                        case "Bonus_Start3":
                          i.m_gameView.EffectPlate.FishingBonusSpine.PlayShow(i.m_gameView.IsLandscape, 2);
                          break;
                        case "Bonus_Start4":
                          i.m_gameView.EffectPlate.FishingBonusSpine.PlayShow(i.m_gameView.IsLandscape, 3);
                          break;
                        case "Bonus_Start5":
                          i.m_gameView.EffectPlate.FishingBonusSpine.PlayShow(i.m_gameView.IsLandscape, 4);
                      }
                    });
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
          key: "SpineDown",
          get: function () {
            return this.m_spineDown;
          }
        }]);
        return t;
      }(Component);
      _descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "m_spineUp", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$4 = _applyDecoratedDescriptor(_class2$5.prototype, "m_spineDown", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$4 = _applyDecoratedDescriptor(_class2$5.prototype, "m_reel", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FGReelSpine = _dec$6(_class$6 = _class2$5) || _class$6;
      var _dec$7;
      var _dec2$6;
      var _dec3$5;
      var _dec4$4;
      var _class$7;
      var _class2$6;
      var _descriptor$6;
      var _descriptor2$5;
      var _descriptor3$5;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "cc831/nOChDRJqqJ+8Xk4p2", "FishingFishSpine", undefined);
      var ccclass$7 = _decorator.ccclass;
      var property$6 = _decorator.property;
      _dec$7 = ccclass$7("FishingFishSpine");
      _dec2$6 = property$6({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _dec3$5 = property$6({
        type: Node,
        tooltip: "Up層"
      });
      _dec4$4 = property$6({
        type: Node,
        tooltip: "Down層"
      });
      _class2$6 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$6, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_upNode", _descriptor2$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_downNode", _descriptor3$5, _assertThisInitialized(t));
          t.m_isPlayedBonusEnd = false;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetMix = function () {};
        n.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            var i;
            var o;
            var r;
            var a;
            var s;
            var l;
            var c = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_isPlayedBonusEnd = false;
                    for (t = 0; t < this.m_spine.length; t++) {
                      this.m_spine[t].node.active = true;
                      this.PlayAnimation(this.m_spine[t], "FG_Start");
                    }
                    n = this.m_spine[0].findAnimation("FG_Start").duration;
                    i = this.m_spine[1].findAnimation("FG_Start").duration;
                    o = this.m_spine[2].findAnimation("FG_Start").duration;
                    r = this.m_spine[3].findAnimation("FG_Start").duration;
                    a = this.m_spine[4].findAnimation("FG_Start").duration;
                    s = this.m_spine[5].findAnimation("FG_Start").duration;
                    l = this.m_spine[6].findAnimation("FG_Start").duration;
                    tween(this.node).delay(n).call(function () {
                      c.PlayLoop(0);
                    }).delay(i - n).call(function () {
                      c.PlayLoop(1);
                    }).delay(o - i).call(function () {
                      c.PlayLoop(2);
                    }).delay(r - o).call(function () {
                      c.PlayLoop(3);
                    }).delay(a - r).call(function () {
                      c.PlayLoop(4);
                    }).delay(s - a).call(function () {
                      c.PlayLoop(5);
                    }).delay(l - s).call(function () {
                      c.PlayLoop(6);
                    }).start();
                    e.next = 12;
                    return node$3.Wait(this, 2);
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
        n.PlayLoop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (!Game_Define.FishCanLeave) {
                      e.next = 9;
                      break;
                    }
                    e.next = 3;
                    return this.PlayAnimation(this.m_spine[t], "FG_End");
                  case 3:
                    this.m_spine[t].node.active = false;
                    Game_Define.FishLeaveList.push(t);
                    if (!(this.m_isPlayedBonusEnd || 1 != Game_Define.FishLeaveList.length)) {
                      node$5.Play(Game_Define.AudioClips.Bonus_End);
                      this.m_isPlayedBonusEnd = true;
                    }
                    return e.abrupt("return");
                  case 9:
                    e.next = 11;
                    return this.PlayAnimation(this.m_spine[t], "FG_Loop");
                  case 11:
                    this.PlayLoop(t);
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === i) {
                      i = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(t, n, i, 0, function (e) {
                      switch (e) {
                        case "Up":
                          t.node.removeFromParent();
                          o.m_upNode.addChild(t.node);
                          break;
                        case "Down":
                          t.node.removeFromParent();
                          o.m_downNode.addChild(t.node);
                      }
                    });
                  case 3:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }));
          return function (t, n, i) {
            return e.apply(this, arguments);
          };
        }();
        return t;
      }(Component);
      _descriptor$6 = _applyDecoratedDescriptor(_class2$6.prototype, "m_spine", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$5 = _applyDecoratedDescriptor(_class2$6.prototype, "m_upNode", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$5 = _applyDecoratedDescriptor(_class2$6.prototype, "m_downNode", [_dec4$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FishingFishSpine = _dec$7(_class$7 = _class2$6) || _class$7;
      var _dec$8;
      var _dec2$7;
      var _dec3$6;
      var _dec4$5;
      var _class$8;
      var _class2$7;
      var _descriptor$7;
      var _descriptor2$6;
      var _descriptor3$6;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3c055dohAtHhqHT/Ea862Si", "FishingBonusSpine", undefined);
      var SkinName = ["Bonus_01", "Bonus_02", "Bonus_03", "Bonus_04", "Bonus_05"];
      var ccclass$8 = _decorator.ccclass;
      var property$7 = _decorator.property;
      _dec$8 = ccclass$8("FishingBonusSpine");
      _dec2$7 = property$7({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _dec3$6 = property$7({
        type: Node,
        tooltip: "靜靜態瓶蓋(ON)"
      });
      _dec4$5 = property$7({
        type: Node,
        tooltip: "靜靜態瓶蓋(OFF)"
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
          _initializerDefineProperty(t, "m_spine", _descriptor$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_imgON", _descriptor2$6, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_imgOFF", _descriptor3$6, _assertThisInitialized(t));
          t.m_firstShow = true;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetMix = function () {
          this.m_spine[2].setMix("Bonus_Loop", "Bonus_Static", .5);
          this.m_spine[3].setMix("Bonus_Loop", "Bonus_Static", .5);
        };
        n.Reset = function () {
          var e;
          for (var t = _createForOfIteratorHelperLoose(this.m_spine); !(e = t()).done;) {
            var n = e.value;
            this.PlayAnimation(n, "Bonus_lock");
            n.node.active = false;
          }
          for (var i = 0; i < this.m_imgON.length; i++) {
            this.m_imgON[i].active = false;
            this.m_imgOFF[i].active = false;
          }
        };
        n.PlayShow = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_spine[n].node.active = true;
                    i = t ? "Bonus_Fadein_L" + (n + 1) : "Bonus_Fadein_S";
                    e.next = 4;
                    return this.PlayAnimation(this.m_spine[n], i);
                  case 4:
                    if (4 == n) {
                      if (this.m_firstShow) {
                        this.SetMix();
                        this.m_firstShow = false;
                      }
                      for (o = 0; o < this.m_imgOFF.length; o++) {
                        this.m_spine[o].node.active = false;
                        this.m_imgOFF[o].active = true;
                      }
                    }
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
        n.SetActive = function () {
          for (var e = 0; e < this.m_spine.length; e++) {
            this.m_spine[e].node.active = true;
          }
          this.SetMix();
          this.m_firstShow = false;
        };
        n.PlayBonusOn = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = t - 1;
                    this.m_imgON[n].active = false;
                    this.m_imgOFF[n].active = false;
                    (i = this.m_spine[n]).node.active = true;
                    i.setSkin(SkinName[n]);
                    e.next = 8;
                    return this.PlayAnimation(i, "Bonus_On");
                  case 8:
                    i.node.active = false;
                    this.m_imgON[n].active = true;
                    this.m_imgOFF[n].active = false;
                  case 11:
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
        n.PlayLoop = function (e) {
          var t = this.m_spine[e];
          t.node.active = true;
          t.setSkin(SkinName[e]);
          this.PlayAnimation(t, "Bonus_Loop", true);
        };
        n.PlayLoop2 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    (n = this.m_spine[t]).node.active = true;
                    n.setSkin(SkinName[t]);
                    e.next = 5;
                    return this.PlayAnimation(n, "Bonus_Loop2", false);
                  case 5:
                    n.node.active = false;
                    this.m_imgOFF[t].active = true;
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
        n.PlayStatic = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = this.m_spine[t];
                    this.PlayAnimation(n, "Bonus_Static", false);
                    e.next = 4;
                    return node$3.Wait(this, .1);
                  case 4:
                    n.node.active = false;
                    this.m_imgON[t].active = true;
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
        n.PlayIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (0 === t || 1 === t || 4 === t) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    (n = this.m_spine[t]).node.active = true;
                    e.next = 6;
                    return this.PlayAnimation(n, "Bonus_Idle_Start");
                  case 6:
                    this.PlayAnimation(n, "Bonus_Idle", true);
                    this.m_imgON[t].active = false;
                    this.m_imgOFF[t].active = false;
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
        n.PlayBomb = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_imgON[3].active = false;
                    this.m_imgOFF[3].active = false;
                    (n = this.m_spine[3]).node.active = true;
                    i = t ? "Bonus_Bomb" : "Bonus_Bomb2";
                    e.next = 7;
                    return this.PlayAnimation(n, i);
                  case 7:
                    if (t) {
                      this.PlayLoop(3);
                    } else {
                      this.PlayLoop2(3);
                    }
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
        n.PlayLock = function (e) {
          var t = this.m_spine[e];
          this.PlayAnimation(t, "Bonus_lock");
        };
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === i) {
                      i = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(t, n, i);
                  case 3:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }));
          return function (t, n, i) {
            return e.apply(this, arguments);
          };
        }();
        return t;
      }(Component);
      _descriptor$7 = _applyDecoratedDescriptor(_class2$7.prototype, "m_spine", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$6 = _applyDecoratedDescriptor(_class2$7.prototype, "m_imgON", [_dec3$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$6 = _applyDecoratedDescriptor(_class2$7.prototype, "m_imgOFF", [_dec4$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var FishingBonusSpine = _dec$8(_class$8 = _class2$7) || _class$8;
      var _dec$9;
      var _dec2$8;
      var _dec3$7;
      var _class$9;
      var _class2$8;
      var _descriptor$8;
      var _descriptor2$7;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a9f10P1kLdAmriyXN/MNrBq", "FishingBonusBoardSpine", undefined);
      var SkinName$1 = ["", "Bonus_01", "Bonus_02", "Bonus_03", "Bonus_04", "Bonus_05"];
      var ccclass$9 = _decorator.ccclass;
      var property$8 = _decorator.property;
      _dec$9 = ccclass$9("FishingBonusBoardSpine");
      _dec2$8 = property$8({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _dec3$7 = property$8({
        type: Node,
        tooltip: "說明文字"
      });
      _class2$8 = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_descriptionNodes", _descriptor2$7, _assertThisInitialized(t));
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
        };
        n.SetMix = function () {};
        n.SetTxt = function () {
          var e = node.GetGameAtlas();
          this.m_descriptionNodes[0].getComponent(Sprite).spriteFrame = e.getSpriteFrame("FG_Bonus_HP_TEXT1_01");
          this.m_descriptionNodes[1].getComponent(Sprite).spriteFrame = e.getSpriteFrame("FG_Bonus_HP_TEXT1_02");
          this.m_descriptionNodes[2].getComponent(Sprite).spriteFrame = e.getSpriteFrame("FG_Bonus_HP_TEXT1_03");
          this.m_descriptionNodes[3].getComponent(Sprite).spriteFrame = e.getSpriteFrame("FG_Bonus_HP_TEXT1_04");
          this.m_descriptionNodes[4].getComponent(Sprite).spriteFrame = e.getSpriteFrame("FG_Bonus_HP_TEXT1_05");
        };
        n.SetDescription = function (e) {
          for (var t = 0; t < this.m_descriptionNodes.length; t++) {
            this.m_descriptionNodes[t].active = t == e;
          }
        };
        n.PlayShow = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetDescription(t - 1);
                    this.m_spine.setSkin(SkinName$1[t]);
                    this.PlayAnimation("Start", false);
                    node$5.Play(Game_Define.AudioClips.Bonus_Notify);
                    tween(this.node).delay(1).call(function () {
                      i.m_gameView.EffectPlate.FishingBonusSpine.PlayBonusOn(t);
                    }).start();
                    n = this.m_spine.findAnimation("Start").duration;
                    e.next = 8;
                    return node$3.Wait(this.m_gameView, n);
                  case 8:
                    e.next = 10;
                    return this.PlayAnimation("Loop");
                  case 10:
                    e.next = 12;
                    return this.PlayAnimation("End");
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
                  case 3:
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
      _descriptor$8 = _applyDecoratedDescriptor(_class2$8.prototype, "m_spine", [_dec2$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$7 = _applyDecoratedDescriptor(_class2$8.prototype, "m_descriptionNodes", [_dec3$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var FishingBonusBoardSpine = _dec$9(_class$9 = _class2$8) || _class$9;
      var _dec$a;
      var _dec2$9;
      var _dec3$8;
      var _dec4$6;
      var _dec5$3;
      var _dec6$1;
      var _class$a;
      var _class2$9;
      var _descriptor$9;
      var _descriptor2$8;
      var _descriptor3$7;
      var _descriptor4$3;
      var _descriptor5$1;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "87f5ei3I6NLkLvbbezow5F4", "FGDeclare", undefined);
      var ccclass$a = _decorator.ccclass;
      var property$9 = _decorator.property;
      _dec$a = ccclass$a("FGDeclare");
      _dec2$9 = property$9({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _dec3$8 = property$9({
        type: Sprite,
        tooltip: "CONGRATS"
      });
      _dec4$6 = property$9({
        type: Label,
        tooltip: "局數"
      });
      _dec5$3 = property$9({
        type: Sprite,
        tooltip: "FREE SPINS"
      });
      _dec6$1 = property$9({
        type: Node,
        tooltip: "5個Bonus瓶蓋"
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
          _initializerDefineProperty(t, "m_spine", _descriptor$9, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_text1", _descriptor2$8, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_round", _descriptor3$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_text2", _descriptor4$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_bonus", _descriptor5$1, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetTxt = function () {
          var e = node.GetGameAtlas();
          this.m_text1.spriteFrame = e.getSpriteFrame("FG_LevelUP_FG_Declare_HP_TEXT1");
          this.m_text2.spriteFrame = e.getSpriteFrame("FG_Declare_HP_TEXT2");
        };
        n.Reset = function () {
          for (var e = 0; e < this.m_bonus.length; e++) {
            this.m_bonus[e].active = false;
          }
        };
        n.PlayShow = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_round.string = "+" + t.toString();
                    this.Reset();
                    this.ShowBonus(n);
                    e.next = 5;
                    return this.PlayAnimation("Start");
                  case 5:
                    e.next = 7;
                    return this.PlayAnimation("Loop");
                  case 7:
                    e.next = 9;
                    return this.PlayAnimation("End");
                  case 9:
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
        n.ShowBonus = function (e) {
          var t = this;
          var n = [1.417, 1.5, 1.583, 1.667, 1.75];
          var i = 0;
          var o = function (o) {
            if (e[o]) {
              t.m_bonus[o].active = true;
              t.m_bonus[o].getComponent(UIOpacity).opacity = .1;
              tween(t.node).delay(n[i]).call(function () {
                t.m_bonus[o].getComponent(Animation).play("Bonus_Stear");
                tween(t.m_bonus[o]).delay(.05).call(function () {
                  t.m_bonus[o].getComponent(UIOpacity).opacity = 255;
                }).start();
              }).start();
              i++;
            }
          };
          for (var r = 0; r < e.length; r++) {
            o(r);
          }
        };
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
                  case 3:
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
      _descriptor$9 = _applyDecoratedDescriptor(_class2$9.prototype, "m_spine", [_dec2$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$8 = _applyDecoratedDescriptor(_class2$9.prototype, "m_text1", [_dec3$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$7 = _applyDecoratedDescriptor(_class2$9.prototype, "m_round", [_dec4$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$3 = _applyDecoratedDescriptor(_class2$9.prototype, "m_text2", [_dec5$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$1 = _applyDecoratedDescriptor(_class2$9.prototype, "m_bonus", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var FGDeclare = _dec$a(_class$a = _class2$9) || _class$a;
      var _dec$b;
      var _dec2$a;
      var _dec3$9;
      var _dec4$7;
      var _class$b;
      var _class2$a;
      var _descriptor$a;
      var _descriptor2$9;
      var _descriptor3$8;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "caabdlarTFNFJwkZpd+WIJ+", "FGProgressBar", undefined);
      var ccclass$b = _decorator.ccclass;
      var property$a = _decorator.property;
      _dec$b = ccclass$b("FGProgressBar");
      _dec2$a = property$a({
        type: sp.Skeleton,
        tooltip: "進度條Spine"
      });
      _dec3$9 = property$a({
        type: Node,
        tooltip: "進度條圖片"
      });
      _dec4$7 = property$a({
        type: Node,
        tooltip: "進度條圖片(Lock)"
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
          _initializerDefineProperty(t, "m_spine", _descriptor$a, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_images", _descriptor2$9, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_imagesLock", _descriptor3$8, _assertThisInitialized(t));
          t.m_nowWildCount = -1;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Reset = function () {
          this.m_nowWildCount = -1;
          for (var e = 0; e < this.m_spine.length; e++) {
            this.m_spine[e].node.active = false;
            this.m_images[e].active = false;
          }
          for (var t = 0; t < this.m_imagesLock.length; t++) {
            this.m_imagesLock[t].active = false;
          }
        };
        n.GetIdx = function (e) {
          switch (e) {
            case 2:
              return 3;
            case 3:
              return 7;
            case 4:
              return 11;
            default:
              return 0;
          }
        };
        n.SetSkin = function (e) {
          if (11 == e) {
            this.m_spine[e].setSkin("LV10");
          } else if (7 == e) {
            this.m_spine[e].setSkin("LV3");
          } else if (3 == e) {
            this.m_spine[e].setSkin("LV2");
          } else {
            this.m_spine[e].setSkin("LV1");
          }
        };
        n.PlayOn = function (e) {
          var t = this;
          if (!(e <= this.m_nowWildCount)) {
            this.m_spine[e].node.active = true;
            this.SetSkin(e);
            var n = 3 == e || 7 == e || 11 == e ? "LevelOn" : "On";
            this.PlayAnimation(this.m_spine[e], n);
            var i = this.m_spine[e].findAnimation("On").duration;
            tween(this.node).delay(i).call(function () {
              t.m_images[e].active = true;
              t.m_spine[e].node.active = false;
            }).start();
            this.m_nowWildCount = e;
          }
        };
        n.PlayLevelOn2 = function (e) {
          var t = this.GetIdx(e);
          this.m_spine[t].node.active = true;
          this.SetSkin(t);
          this.PlayAnimation(this.m_spine[t], "LevelOn2");
        };
        n.PlayHint = function (e) {
          for (var t = 0; t < this.m_spine.length; t++) {
            this.m_spine[t].node.active = false;
          }
          var n = this.GetIdx(e);
          this.m_spine[n].node.active = true;
          this.SetSkin(n);
          this.PlayAnimation(this.m_spine[n], "Hint", true);
        };
        n.PlayLock = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = this.GetIdx(t);
                    this.m_spine[n].node.active = true;
                    this.SetSkin(n);
                    e.next = 5;
                    return this.PlayAnimation(this.m_spine[n], "End");
                  case 5:
                    this.m_images[n].active = false;
                    this.m_imagesLock[t - 2].active = true;
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
        n.SetOn = function (e) {
          this.m_nowWildCount = e > 11 ? 11 : e;
          for (var t = 0; t <= this.m_nowWildCount; t++) {
            this.m_images[t].active = true;
          }
        };
        n.GetSpinePos = function (e) {
          var t = this.GetIdx(e);
          return this.m_spine[t].node.getPosition();
        };
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === i) {
                      i = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(t, n, i);
                  case 3:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }));
          return function (t, n, i) {
            return e.apply(this, arguments);
          };
        }();
        _createClass(t, [{
          key: "SpineParentNode",
          get: function () {
            return this.m_spine[0].node.parent;
          }
        }, {
          key: "NowWildCount",
          get: function () {
            return this.m_nowWildCount;
          }
        }]);
        return t;
      }(Component);
      _descriptor$a = _applyDecoratedDescriptor(_class2$a.prototype, "m_spine", [_dec2$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$9 = _applyDecoratedDescriptor(_class2$a.prototype, "m_images", [_dec3$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor3$8 = _applyDecoratedDescriptor(_class2$a.prototype, "m_imagesLock", [_dec4$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      var FGProgressBar = _dec$b(_class$b = _class2$a) || _class$b;
      var _dec$c;
      var _dec2$b;
      var _dec3$a;
      var _dec4$8;
      var _dec5$4;
      var _class$c;
      var _class2$b;
      var _descriptor$b;
      var _descriptor2$a;
      var _descriptor3$9;
      var _descriptor4$4;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f771agOdOdNDJMs+m/Dtq9a", "FGCounter", undefined);
      var ccclass$c = _decorator.ccclass;
      var property$b = _decorator.property;
      _dec$c = ccclass$c("FGCounter");
      _dec2$b = property$b({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _dec3$a = property$b({
        type: Sprite,
        tooltip: "FREE SPINS"
      });
      _dec4$8 = property$b({
        type: Label,
        tooltip: "剩餘局數"
      });
      _dec5$4 = property$b({
        type: Label,
        tooltip: "總局數"
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
          _initializerDefineProperty(t, "m_spine", _descriptor$b, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_text1", _descriptor2$a, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_remainTimes", _descriptor3$9, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_totalTimes", _descriptor4$4, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetTxt = function () {
          var e = node.GetGameAtlas();
          this.m_text1.spriteFrame = e.getSpriteFrame("FG_Counter_HP_TEXT1");
        };
        n.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_remainTimes.string = n.toString();
                    this.m_totalTimes.string = n.toString();
                    i = t ? "L" : "S";
                    e.next = 5;
                    return this.PlayAnimation("FG_Start_" + i);
                  case 5:
                    this.PlayAnimation("FG_Idle_" + i, true);
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
        n.PlayHit = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = t ? "L" : "S";
                    e.next = 3;
                    return this.PlayAnimation("FG_Hit_" + i, false, n);
                  case 3:
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
        n.UpdateRemainTimes = function (e) {
          this.m_remainTimes.string = e.toString();
        };
        n.SetRound = function (e, t) {
          this.m_remainTimes.string = e.toString();
          this.m_totalTimes.string = t.toString();
        };
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t, n, 0, function (e) {
                      switch (e) {
                        case "Hit":
                          o.m_remainTimes.string = i.toString();
                          o.m_totalTimes.string = i.toString();
                      }
                    });
                  case 3:
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
      _descriptor$b = _applyDecoratedDescriptor(_class2$b.prototype, "m_spine", [_dec2$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$a = _applyDecoratedDescriptor(_class2$b.prototype, "m_text1", [_dec3$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$9 = _applyDecoratedDescriptor(_class2$b.prototype, "m_remainTimes", [_dec4$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$4 = _applyDecoratedDescriptor(_class2$b.prototype, "m_totalTimes", [_dec5$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FGCounter = _dec$c(_class$c = _class2$b) || _class$c;
      var _dec$d;
      var _dec2$c;
      var _dec3$b;
      var _dec4$9;
      var _dec5$5;
      var _dec6$2;
      var _class$d;
      var _class2$c;
      var _descriptor$c;
      var _descriptor2$b;
      var _descriptor3$a;
      var _descriptor4$5;
      var _descriptor5$2;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "246aa/YQfxI6oFNCC286AUO", "FGCompliment", undefined);
      var ccclass$d = _decorator.ccclass;
      var property$c = _decorator.property;
      _dec$d = ccclass$d("FGCompliment");
      _dec2$c = property$c({
        type: sp.Skeleton,
        tooltip: "Spine(分數)"
      });
      _dec3$b = property$c({
        type: sp.Skeleton,
        tooltip: "Spine(恭喜)"
      });
      _dec4$9 = property$c({
        type: sp.Skeleton,
        tooltip: "Spine(角色)"
      });
      _dec5$5 = property$c({
        type: Label,
        tooltip: "贏分"
      });
      _dec6$2 = property$c({
        type: Sprite,
        tooltip: "CONGRATS"
      });
      _class2$c = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spineUp", _descriptor$c, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_spineDown", _descriptor2$b, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_spineCharacter", _descriptor3$a, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_winLabel", _descriptor4$5, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_text1", _descriptor5$2, _assertThisInitialized(t));
          t.m_gameView = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
        };
        n.SetTxt = function () {
          var e = node.GetGameAtlas();
          this.m_text1.spriteFrame = e.getSpriteFrame("FG_Compliment_HP_TEXT1");
        };
        n.PlayStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_spineCharacter.node.active = true;
                    this.m_gameView.CharacterSpine.node.getComponent(UIOpacity).opacity = .1;
                    n = this.m_gameView.IsLandscape ? "Start_L" : "Start_S";
                    tween(this.node).delay(7.167).call(function () {
                      if (!i.m_gameView.IsLandscape) {
                        i.m_gameView.CharacterSpine.node.getComponent(UIOpacity).opacity = 255;
                      }
                      t();
                    }).start();
                    e.next = 6;
                    return this.PlayAnimation(n, false);
                  case 6:
                    this.m_spineCharacter.node.active = false;
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
        n.ShowRunningWin = function (e) {
          var t = this;
          var n = node$1.FORMAT_NUMBER_TYPE.PERMANENT_DOT;
          var i = 0;
          var o = node$1.divide(4.917, .02);
          var r = node$1.divide(e, o);
          tween(this.node).repeat(o, tween().call(function () {
            if ((i += r) >= e) {
              i = e;
            }
            t.m_winLabel.string = node$1.FormatNumberThousands(i, n);
          }).delay(.02)).call(function () {
            t.m_winLabel.string = node$1.FormatNumberThousands(e, n);
          }).start();
        };
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    SpineKit.PlayAnimation(this.m_spineCharacter, t, n, 0);
                    SpineKit.PlayAnimation(this.m_spineDown, t, n, 0);
                    e.next = 5;
                    return SpineKit.PlayAnimation(this.m_spineUp, t, n, 0);
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
        return t;
      }(Component);
      _descriptor$c = _applyDecoratedDescriptor(_class2$c.prototype, "m_spineUp", [_dec2$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$b = _applyDecoratedDescriptor(_class2$c.prototype, "m_spineDown", [_dec3$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$a = _applyDecoratedDescriptor(_class2$c.prototype, "m_spineCharacter", [_dec4$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$5 = _applyDecoratedDescriptor(_class2$c.prototype, "m_winLabel", [_dec5$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$2 = _applyDecoratedDescriptor(_class2$c.prototype, "m_text1", [_dec6$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FGCompliment = _dec$d(_class$d = _class2$c) || _class$d;
      var _dec$e;
      var _dec2$d;
      var _dec3$c;
      var _dec4$a;
      var _dec5$6;
      var _class$e;
      var _class2$d;
      var _descriptor$d;
      var _descriptor2$c;
      var _descriptor3$b;
      var _descriptor4$6;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4e289TKFg1GqJb86F1xODa1", "FGLevelUp", undefined);
      var SkinName$3 = ["X2", "X3", "X10"];
      var ccclass$e = _decorator.ccclass;
      var property$d = _decorator.property;
      _dec$e = ccclass$e("FGLevelUp");
      _dec2$d = property$d({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _dec3$c = property$d({
        type: Sprite,
        tooltip: "CONGRATS"
      });
      _dec4$a = property$d({
        type: Sprite,
        tooltip: "EXTRA FREE SPINS"
      });
      _dec5$6 = property$d({
        type: Label,
        tooltip: "下一階段局數"
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
          _initializerDefineProperty(t, "m_spine", _descriptor$d, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_text1", _descriptor2$c, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_text2", _descriptor3$b, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_round", _descriptor4$6, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_initPosL = v3(0, 0, 0);
          t.m_initPosS = v3(0, -133, 0);
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
        };
        n.SetTxt = function () {
          var e = node.GetGameAtlas();
          this.m_text1.spriteFrame = e.getSpriteFrame("FG_LevelUP_FG_Declare_HP_TEXT1");
          this.m_text2.spriteFrame = e.getSpriteFrame("FG_LevelUP_HP_TEXT2");
        };
        n.PlayShow = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, o) {
            var r;
            var a;
            var s;
            var l;
            var c = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    r = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(o);
                    a = t ? this.m_initPosL : this.m_initPosS;
                    this.node.setPosition(r);
                    tween(this.node).delay(.283).to(.5, {
                      position: a
                    }).start();
                    this.m_round.string = i.toString();
                    this.m_spine.setSkin(SkinName$3[n - 2]);
                    s = t ? "End_L" : "End_S";
                    e.next = 9;
                    return this.PlayAnimation("Start");
                  case 9:
                    e.next = 11;
                    return this.PlayAnimation("Loop");
                  case 11:
                    tween(this.node).delay(.2).call(function () {
                      node$5.Play(Game_Define.AudioClips.FG_SpinsNumber);
                    }).start();
                    this.PlayAnimation(s, false, i);
                    tween(this.node).delay(.05).call(function () {
                      var e = c.m_spine.findBone("HP_END");
                      var t = c.node.getComponent(UITransform).convertToNodeSpaceAR(o);
                      e.x = t.x;
                      e.y = t.y;
                    }).start();
                    l = this.m_spine.findAnimation(s).duration;
                    e.next = 17;
                    return node$3.Wait(this, l);
                  case 17:
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t, n, 0, function (e) {
                      switch (e) {
                        case "Hit":
                          o.m_gameView.EffectPlate.FGCounter.PlayHit(o.m_gameView.IsLandscape, i);
                          break;
                        case "CollectBar_On":
                          var t = o.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx].NextLevel;
                          o.m_gameView.EffectPlate.FGProgressBar.PlayHint(t);
                      }
                    });
                  case 3:
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
      _descriptor$d = _applyDecoratedDescriptor(_class2$d.prototype, "m_spine", [_dec2$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$c = _applyDecoratedDescriptor(_class2$d.prototype, "m_text1", [_dec3$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$b = _applyDecoratedDescriptor(_class2$d.prototype, "m_text2", [_dec4$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor4$6 = _applyDecoratedDescriptor(_class2$d.prototype, "m_round", [_dec5$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var FGLevelUp = _dec$e(_class$e = _class2$d) || _class$e;
      var _dec$f;
      var _dec2$e;
      var _dec3$d;
      var _class$f;
      var _class2$e;
      var _descriptor$e;
      var _descriptor2$d;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "867d0A6oLtLkphzclpJj0z6", "BonusCollection", undefined);
      var ccclass$f = _decorator.ccclass;
      var property$e = _decorator.property;
      _dec$f = ccclass$f("BonusCollection");
      _dec2$e = property$e({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _dec3$d = property$e({
        type: Label,
        tooltip: "獎金數字"
      });
      _class2$e = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$e, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_label", _descriptor2$d, _assertThisInitialized(t));
          t.m_nowBonus = 0;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Reset = function () {
          this.m_nowBonus = 0;
          this.node.active = false;
        };
        n.SetSkin = function (e, t) {
          if (e || t == Game_Define.Symbol.Symbol_Fish_8) {
            this.m_spine.setSkin("High");
          } else {
            this.m_spine.setSkin("Low");
          }
        };
        n.SetLabel = function (e) {
          var t;
          t = (e = node$1.strip(e)) >= 100 ? node$1.FormatNumberThousands(e, node$1.FORMAT_NUMBER_TYPE.NONE_DOT, true) : node$1.FormatNumberThousands(e, node$1.FORMAT_NUMBER_TYPE.PERMANENT_DOT, true, 2);
          this.m_label.string = t;
        };
        n.PlayFly = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = node$1.times(Game_Define.GetFishMulti(t), node$1.strip(node$2.GetNowBetValue()));
                    this.SetLabel(i);
                    this.SetSkin(false, t);
                    tween(this.node).to(.5, {
                      position: n
                    }).start();
                    e.next = 6;
                    return this.PlayAnimation("Fly");
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
        n.PlayHit = function (e) {
          this.SetSkin(true);
          var t = node$1.times(Game_Define.GetFishMulti(e), node$1.strip(node$2.GetNowBetValue()));
          this.m_nowBonus += t;
          this.SetLabel(node$1.strip(this.m_nowBonus));
          this.PlayAnimation("Hit");
        };
        n.PlayMultiply = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.SetSkin(true);
                    n = "";
                    e.t0 = t;
                    e.next = 2 === e.t0 ? 5 : 3 === e.t0 ? 9 : 4 === e.t0 ? 13 : 17;
                    break;
                  case 5:
                    n = "X2";
                    i = Game_Define.AudioClips.Multiplier01;
                    this.m_nowBonus *= 2;
                    return e.abrupt("break", 17);
                  case 9:
                    n = "X3";
                    i = Game_Define.AudioClips.Multiplier02;
                    this.m_nowBonus *= 3;
                    return e.abrupt("break", 17);
                  case 13:
                    n = "X10";
                    i = Game_Define.AudioClips.Multiplier03;
                    this.m_nowBonus *= 10;
                    return e.abrupt("break", 17);
                  case 17:
                    tween(this.node).delay(.75).call(function () {
                      o.SetLabel(node$1.strip(o.m_nowBonus));
                      node$5.Play(i);
                    }).start();
                    e.next = 20;
                    return this.PlayAnimation(n);
                  case 20:
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
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    if (undefined === i) {
                      i = 1;
                    }
                    this.m_spine.getState().timeScale = i;
                    this.node.active = true;
                    e.next = 6;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
                  case 6:
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
      _descriptor$e = _applyDecoratedDescriptor(_class2$e.prototype, "m_spine", [_dec2$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$d = _applyDecoratedDescriptor(_class2$e.prototype, "m_label", [_dec3$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var BonusCollection = _dec$f(_class$f = _class2$e) || _class$f;
      var _dec$g;
      var _dec2$f;
      var _class$g;
      var _class2$f;
      var _descriptor$f;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1a38f2ROt9BvIaWGjGcGxqn", "SymbolBombSpine", undefined);
      var ccclass$g = _decorator.ccclass;
      var property$f = _decorator.property;
      _dec$g = ccclass$g("SymbolBombSpine");
      _dec2$f = property$f({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _class2$f = function (e) {
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
        n.PlayChange = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.PlayAnimation("Change", false);
                    e.next = 3;
                    return node$3.Wait(this, 1.083);
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
                  case 3:
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
      _descriptor$f = _applyDecoratedDescriptor(_class2$f.prototype, "m_spine", [_dec2$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var SymbolBombSpine = _dec$g(_class$g = _class2$f) || _class$g;
      var _dec$h;
      var _dec2$g;
      var _dec3$e;
      var _dec4$b;
      var _dec5$7;
      var _dec6$3;
      var _dec7$1;
      var _dec8$1;
      var _dec9$1;
      var _dec10$1;
      var _dec11;
      var _dec12;
      var _dec13;
      var _dec14;
      var _dec15;
      var _class2$g;
      var _descriptor$g;
      var _descriptor2$e;
      var _descriptor3$c;
      var _descriptor4$7;
      var _descriptor5$3;
      var _descriptor6$1;
      var _descriptor7$1;
      var _descriptor8$1;
      var _descriptor9$1;
      var _descriptor10;
      var _descriptor11;
      var _descriptor12;
      var _descriptor13;
      var _descriptor14;
      var _descriptor15;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4cb9ffXrq1GV52+f7gBU12N", "EffectPlate", undefined);
      var property$g = _decorator.property;
      _dec$h = property$g({
        type: Prefab,
        tooltip: "每個symbol的特效"
      });
      _dec2$g = property$g({
        type: SlotReels,
        tooltip: "轉輪"
      });
      _dec3$e = property$g({
        type: sp.Skeleton,
        tooltip: "NearWin特效"
      });
      _dec4$b = property$g({
        type: FGReelSpine,
        tooltip: "釣魚場景轉輪"
      });
      _dec5$7 = property$g({
        type: FishingFishSpine,
        tooltip: "釣魚場景魚群"
      });
      _dec6$3 = property$g({
        type: FishingBonusSpine,
        tooltip: "釣魚場景5個瓶蓋"
      });
      _dec7$1 = property$g({
        type: FishingBonusBoardSpine,
        tooltip: "釣魚場景面板"
      });
      _dec8$1 = property$g({
        type: FGDeclare,
        tooltip: "FG宣告"
      });
      _dec9$1 = property$g({
        type: FGCompliment,
        tooltip: "FG結算"
      });
      _dec10$1 = property$g({
        type: FGLevelUp,
        tooltip: "FG加局(升級)"
      });
      _dec11 = property$g({
        type: FGProgressBar,
        tooltip: "FG進度條"
      });
      _dec12 = property$g({
        type: Animation,
        tooltip: "FG進度條動畫"
      });
      _dec13 = property$g({
        type: FGCounter,
        tooltip: "FG局數輪胎"
      });
      _dec14 = property$g({
        type: Prefab,
        tooltip: "Bonus獎金特效"
      });
      _dec15 = property$g({
        type: Prefab,
        tooltip: "炸彈Symbol特效"
      });
      _class2$g = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_symbolEffectPrefabs", _descriptor$g, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_slotReels", _descriptor2$e, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_nearWinSpine", _descriptor3$c, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgReelSpine", _descriptor4$7, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fishingFishSpine", _descriptor5$3, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fishingBonusSpine", _descriptor6$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fishingBonusBoardSpine", _descriptor7$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgDeclare", _descriptor8$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgCompliment", _descriptor9$1, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgLevelUp", _descriptor10, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgProgressBar", _descriptor11, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgProgressBarAnim", _descriptor12, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_fgCounter", _descriptor13, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_bonusCollectionPrefab", _descriptor14, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_symbolBombPrefab", _descriptor15, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_symbolEffectNodes = new Array();
          t.m_scatterEffectNodes = new Array();
          t.m_bonusEffectNodes = new Array();
          t.m_symbolBombEffectNodes = new Array();
          t.m_singleLineAni = null;
          t.m_isSuperWildRespin = [[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]];
          t.m_nearWinAudioId = [-1, -1, -1, -1, -1];
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.onLoad = function () {
          for (var e = 0; e < Game_Define.COL; e++) {
            this.m_symbolEffectNodes.push(new Array());
            this.m_scatterEffectNodes.push(new Array());
            this.m_bonusEffectNodes.push(new Array());
            this.m_symbolBombEffectNodes.push(new Array());
          }
        };
        n.Init = function (e) {
          this.m_gameView = e;
          NodePool.getInstance().SetEffectPrefabs(this.m_symbolEffectPrefabs, this.m_bonusCollectionPrefab, this.m_symbolBombPrefab);
          this.m_fgReelSpine.Init(this.m_gameView);
          this.m_fishingBonusBoardSpine.Init(this.m_gameView);
          this.m_fgCompliment.Init(this.m_gameView);
          this.m_fgLevelUp.Init(this.m_gameView);
        };
        n.InitNearWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    for (t = 0; t < Game_Define.COL; t++) {
                      this.m_nearWinSpine[t].node.active = true;
                      this.m_nearWinSpine[t].setAnimation(0, "NearWin", true);
                    }
                    e.next = 3;
                    return node$3.Wait(this.m_gameView, .1);
                  case 3:
                    for (n = 0; n < Game_Define.COL; n++) {
                      this.CloseNearWin(n);
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
        n.ShowSymbolEffect = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            var r;
            var a;
            var s;
            var l;
            var c;
            var u;
            var m;
            var p;
            var _;
            var d;
            var f;
            var h;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = [];
                    for (o = 0; o < n.length; o++) {
                      r = n[o].Index ? n[o].Index : 0;
                      a = Game_Define.SYMBOL_LINE_VEC[r];
                      s = this.m_gameView.PosIndexToVec3(a);
                      l = n[o].Symbol ? n[o].Symbol : 0;
                      for (c = 0; c < n[o].Count; c++) {
                        u = s[c].x;
                        m = s[c].y;
                        this.m_slotReels.GetSymbolNode(u, m).active = false;
                        p = undefined;
                        _ = this.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx].NowLevel;
                        d = t[u][m];
                        if (this.m_symbolEffectNodes[u][m]) {
                          p = this.m_symbolEffectNodes[u][m];
                        } else {
                          f = this.m_slotReels.GetSymbolPosition(u, m);
                          if (t[u][m] == Game_Define.Symbol.Symbol_Wild) {
                            p = NodePool.getInstance().GetSymbolEffectNode(Game_Define.Symbol.Symbol_Wild);
                            d = Game_Define.Symbol.Symbol_Wild;
                          } else if (t[u][m] == Game_Define.Symbol.Symbol_SuperWild) {
                            p = NodePool.getInstance().GetSymbolEffectNode(Game_Define.Symbol.Symbol_SuperWild);
                            d = Game_Define.Symbol.Symbol_SuperWild;
                          } else if (t[u][m] >= Game_Define.Symbol.Symbol_Fish_1 && t[u][m] <= Game_Define.Symbol.Symbol_Fish_8) {
                            p = NodePool.getInstance().GetSymbolEffectNode(t[u][m]);
                            d = t[u][m];
                          } else {
                            p = NodePool.getInstance().GetSymbolEffectNode(l);
                            d = l;
                          }
                          p.setPosition(f);
                          this.node.addChild(p);
                          this.SetZIndex(p, d);
                          this.m_symbolEffectNodes[u][m] = p;
                        }
                        h = p.getComponent(SymbolSpine);
                        i.push(h.ShowWin(_, d));
                      }
                    }
                    e.next = 4;
                    return Promise.all(i);
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
        n.ShowSingleLineEffect = function (e, t) {
          var n = this;
          if (!this.m_singleLineAni && t && 0 !== t.length) {
            this.m_gameView.SlotReels.ShowSymbolDark(true);
            var i = t.length;
            var o = 0;
            this.m_singleLineAni = tween(this.node).repeatForever(tween().call(function () {
              n.CleanAllSymbolEffect();
              n.m_slotReels.ShowStaticSymbol();
              var r;
              var a = t[o].Index ? t[o].Index : 0;
              var s = Game_Define.SYMBOL_LINE_VEC[a];
              var l = n.m_gameView.PosIndexToVec3(s);
              var c = t[o].Symbol ? t[o].Symbol : 0;
              for (var u = 0; u < t[o].Count; u++) {
                var m = l[u].x;
                var p = l[u].y;
                n.m_slotReels.GetSymbolNode(m, p).active = false;
                var _ = undefined;
                if (n.m_symbolEffectNodes[m][p]) {
                  _ = n.m_symbolEffectNodes[m][p];
                } else {
                  var d = n.m_slotReels.GetSymbolPosition(m, p);
                  if (e[m][p] == Game_Define.Symbol.Symbol_Wild) {
                    _ = NodePool.getInstance().GetSymbolEffectNode(Game_Define.Symbol.Symbol_Wild);
                    r = Game_Define.Symbol.Symbol_Wild;
                  } else if (e[m][p] == Game_Define.Symbol.Symbol_SuperWild) {
                    _ = NodePool.getInstance().GetSymbolEffectNode(Game_Define.Symbol.Symbol_SuperWild);
                    r = Game_Define.Symbol.Symbol_SuperWild;
                  } else if (e[m][p] >= Game_Define.Symbol.Symbol_Fish_1 && e[m][p] <= Game_Define.Symbol.Symbol_Fish_8) {
                    _ = NodePool.getInstance().GetSymbolEffectNode(e[m][p]);
                    r = e[m][p];
                  } else {
                    _ = NodePool.getInstance().GetSymbolEffectNode(c);
                    r = c;
                  }
                  _.setPosition(d);
                  n.node.addChild(_);
                  n.SetZIndex(_, r);
                  n.m_symbolEffectNodes[m][p] = _;
                }
                var f = _.getComponent(SymbolSpine);
                var h = n.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx].NowLevel ? n.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx].NowLevel : 0;
                f.ShowWin(h, r);
              }
              if (o < i - 1) {
                o++;
              } else {
                o = 0;
              }
            }).delay(Game_Define.DELAY.SYMBOL_WIN)).start();
          }
        };
        n.StopSingleLineEffect = function () {
          if (this.m_singleLineAni) {
            this.m_singleLineAni.stop();
            this.m_singleLineAni = null;
          }
        };
        n.SpecialSymbolStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            var r;
            var a;
            var s;
            var l;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = [];
                    o = 0;
                  case 2:
                    if (!(o < n.length)) {
                      e.next = 34;
                      break;
                    }
                    r = this.m_slotReels.GetSymbolPosition(t, o);
                    a = undefined;
                    s = undefined;
                    if (n[o] != Game_Define.Symbol.Symbol_Scatter) {
                      e.next = 17;
                      break;
                    }
                    this.m_slotReels.GetSymbolNode(t, o).active = false;
                    (a = NodePool.getInstance().GetSymbolEffectNode(Game_Define.Symbol.Symbol_Scatter)).setPosition(r);
                    this.node.addChild(a);
                    node$1.SetOrderedZindex(a, Game_Define.EFFECT_ZINDEX.SCATTER);
                    this.m_scatterEffectNodes[t][o] = a;
                    s = a.getComponent(ScatterSpine);
                    i.push(s.PlayStop());
                    e.next = 31;
                    break;
                  case 17:
                    if (n[o] != Game_Define.Symbol.Symbol_Wild && n[o] != Game_Define.Symbol.Symbol_SuperWild) {
                      e.next = 31;
                      break;
                    }
                    if (Game_Define.IsInFG) {
                      e.next = 20;
                      break;
                    }
                    return e.abrupt("return");
                  case 20:
                    if (!this.m_symbolEffectNodes[t][o]) {
                      e.next = 22;
                      break;
                    }
                    return e.abrupt("return");
                  case 22:
                    l = this.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx].NowLevel;
                    this.m_slotReels.GetSymbolNode(t, o).active = false;
                    if (n[o] == Game_Define.Symbol.Symbol_Wild) {
                      a = NodePool.getInstance().GetSymbolEffectNode(Game_Define.Symbol.Symbol_Wild);
                    } else if (n[o] == Game_Define.Symbol.Symbol_SuperWild) {
                      a = NodePool.getInstance().GetSymbolEffectNode(Game_Define.Symbol.Symbol_SuperWild);
                    }
                    a.setPosition(r);
                    this.node.addChild(a);
                    node$1.SetOrderedZindex(a, Game_Define.EFFECT_ZINDEX.WILD);
                    this.m_symbolEffectNodes[t][o] = a;
                    s = a.getComponent(SymbolSpine);
                    i.push(s.PlayStop(l));
                  case 31:
                    o++;
                    e.next = 2;
                    break;
                  case 34:
                    if (0 !== i.length) {
                      e.next = 36;
                      break;
                    }
                    return e.abrupt("return");
                  case 36:
                    e.next = 38;
                    return Promise.all(i);
                  case 38:
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
        n.SetSpecialSymbolPos = function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = this.m_slotReels.GetSymbolPosition(e, n);
            if (t[n] == Game_Define.Symbol.Symbol_Scatter) {
              if (this.m_scatterEffectNodes[e][n]) {
                this.m_scatterEffectNodes[e][n].setPosition(i);
              }
            } else if (!(t[n] != Game_Define.Symbol.Symbol_Wild && t[n] != Game_Define.Symbol.Symbol_SuperWild)) {
              if (this.m_symbolEffectNodes[e][n] && !this.m_isSuperWildRespin[e][n]) {
                this.m_symbolEffectNodes[e][n].setPosition(i);
              }
            }
          }
        };
        n.AllSpecialSymbolStop = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    for (n = 0; n < t.length; n++) {
                      this.SpecialSymbolStop(n, t[n]);
                    }
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
        n.ShowScatterNearWin = function (e, t) {
          for (var n = 0; n < Game_Define.COL; n++) {
            for (var i = 0; i < Game_Define.ROW; i++) {
              if (e[n][i] == Game_Define.Symbol.Symbol_Scatter && n < t) {
                this.m_slotReels.GetSymbolNode(n, i).active = false;
                var o = undefined;
                if (this.m_scatterEffectNodes[n][i]) {
                  o = this.m_scatterEffectNodes[n][i];
                } else {
                  var r = this.m_slotReels.GetSymbolPosition(n, i);
                  (o = NodePool.getInstance().GetSymbolEffectNode(Game_Define.Symbol.Symbol_Scatter)).setPosition(r);
                  this.node.addChild(o);
                  node$1.SetOrderedZindex(o, Game_Define.EFFECT_ZINDEX.SCATTER);
                  this.m_scatterEffectNodes[n][i] = o;
                }
                o.getComponent(ScatterSpine).PlayNearWin();
              }
            }
          }
        };
        n.ShowScatterWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            var i;
            var o;
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_gameView.SlotReels.ShowSymbolDark(true);
                    for (n = 0; n < Game_Define.COL; n++) {
                      for (i = 0; i < Game_Define.ROW; i++) {
                        if (t[n][i] == Game_Define.Symbol.Symbol_Scatter) {
                          this.m_slotReels.GetSymbolNode(n, i).active = false;
                          o = undefined;
                          if (this.m_scatterEffectNodes[n][i]) {
                            o = this.m_scatterEffectNodes[n][i];
                          } else {
                            r = this.m_slotReels.GetSymbolPosition(n, i);
                            (o = NodePool.getInstance().GetSymbolEffectNode(Game_Define.Symbol.Symbol_Scatter)).setPosition(r);
                            this.node.addChild(o);
                            node$1.SetOrderedZindex(o, Game_Define.EFFECT_ZINDEX.SCATTER);
                            this.m_scatterEffectNodes[n][i] = o;
                          }
                          o.getComponent(ScatterSpine).PlayWin();
                        }
                      }
                    }
                    node$5.Play(Game_Define.AudioClips.Scatter_bell);
                    e.next = 5;
                    return node$3.Wait(this.m_gameView, 1.5);
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
        n.EnterFree = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i, o) {
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_fgDeclare.node.active = true;
                    node$5.Play(Game_Define.AudioClips.FG_Notify);
                    e.next = 4;
                    return this.m_fgDeclare.PlayShow(t, n);
                  case 4:
                    this.m_fgDeclare.node.active = false;
                    o();
                    this.m_fgProgressBar.node.active = true;
                    this.m_fgProgressBar.Reset();
                    node$5.Play(Game_Define.AudioClips.FG_Collect);
                    if (this.m_gameView.IsLandscape) {
                      this.m_fgProgressBarAnim.play("ProgressBar_Start");
                    } else {
                      this.m_fgProgressBarAnim.play("ProgressBar_Start_S");
                    }
                    if (!i) {
                      e.next = 14;
                      break;
                    }
                    for (r = 0; r < i; r++) {
                      this.m_fgProgressBar.PlayOn(r);
                    }
                    e.next = 14;
                    return node$3.Wait(this.m_gameView, 1);
                  case 14:
                    this.m_fgCounter.node.active = true;
                    tween(this.m_fgCounter.node.getComponent(UIOpacity)).to(.2, {
                      opacity: 255
                    }).start();
                    node$5.Play(Game_Define.AudioClips.FG_SpinsNumber);
                    e.next = 19;
                    return this.m_fgCounter.PlayStart(this.m_gameView.IsLandscape, t);
                  case 19:
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
        n.LeaveFree = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_fgCompliment.node.active = true;
                    this.m_fgCompliment.ShowRunningWin(t);
                    tween(this.m_gameView).delay(7.167).call(function () {
                      i.m_gameView.FrogSpine.node.getComponent(UIOpacity).opacity = 255;
                    }).start();
                    e.next = 5;
                    return this.m_fgCompliment.PlayStart(function () {
                      i.m_fishingBonusSpine.Reset();
                      i.m_fishingBonusSpine.node.active = false;
                      i.m_fgProgressBar.node.active = false;
                      tween(i.m_fgCounter.node.getComponent(UIOpacity)).to(.2, {
                        opacity: .1
                      }).call(function () {
                        i.m_fgCounter.node.active = false;
                      }).start();
                    });
                  case 5:
                    this.m_fgCompliment.node.active = false;
                    n();
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
        n.AddFree = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    node$5.Play(Game_Define.AudioClips.FG_Notify);
                    this.m_fgLevelUp.node.active = true;
                    i = this.m_fgProgressBar.GetSpinePos(t);
                    o = this.m_fgProgressBar.SpineParentNode.getComponent(UITransform).convertToWorldSpaceAR(i);
                    e.next = 6;
                    return this.m_fgLevelUp.PlayShow(this.m_gameView.IsLandscape, t, n, o);
                  case 6:
                    this.m_fgLevelUp.node.active = false;
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
        n.PlayNearWin = function (e) {
          this.m_nearWinSpine[e].node.active = true;
          this.m_nearWinSpine[e].setAnimation(0, "NearWin", true);
          tween(this.m_nearWinSpine[e].node.getComponent(UIOpacity)).to(.1, {
            opacity: 255
          }).start();
          this.m_nearWinAudioId[e] = node$5.Play(Game_Define.AudioClips.NearWin, true);
        };
        n.CloseNearWin = function (e) {
          var t = this;
          tween(this.m_nearWinSpine[e].node.getComponent(UIOpacity)).to(.2, {
            opacity: .1
          }).call(function () {
            t.m_nearWinSpine[e].node.active = false;
          }).start();
          if (-1 !== this.m_nearWinAudioId[e]) {
            node$5.Stop(this.m_nearWinAudioId[e]);
            this.m_nearWinAudioId[e] = -1;
          }
        };
        n.PlayFishingStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.FadeReel(3, 100);
                    this.m_slotReels.ShowSymbolLightFade(3);
                    this.m_fishingBonusSpine.node.active = true;
                    this.m_fgReelSpine.PlayStart(this.m_gameView.IsLandscape);
                    e.next = 6;
                    return node$3.Wait(this.m_gameView, 2.5);
                  case 6:
                    this.m_fishingFishSpine.node.active = true;
                    e.next = 9;
                    return this.m_fishingFishSpine.PlayStart();
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
        n.PlayFishingEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.FadeReel(3, 255);
                    e.next = 3;
                    return this.m_fgReelSpine.PlayEnd(this.m_gameView.IsLandscape);
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
        n.FadeReel = function (e, t) {
          tween(this.m_gameView.SlotReels.getComponent(UIOpacity)).to(e, {
            opacity: t
          }).start();
          this.m_fgReelSpine.FadeReel(e, t);
        };
        n.FishingReset = function () {
          Game_Define.FishCanLeave = false;
          Game_Define.FishLeaveList = [];
          this.m_fishingFishSpine.node.active = false;
        };
        n.ShowBonusBoard = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_fishingBonusBoardSpine.node.active = true;
                    e.next = 3;
                    return this.m_fishingBonusBoardSpine.PlayShow(t);
                  case 3:
                    this.m_fishingBonusBoardSpine.node.active = false;
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
        n.CollectBonus = function () {
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
            var m;
            var p;
            var _;
            var d;
            var f;
            var h;
            var y;
            var S;
            var g;
            var b;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = [];
                    i = [];
                    for (o = 0; o < Game_Define.COL; o++) {
                      for (r = 0; r < Game_Define.ROW; r++) {
                        if (!(t[o][r] != Game_Define.Symbol.Symbol_Wild && t[o][r] != Game_Define.Symbol.Symbol_SuperWild)) {
                          n.push(this.m_slotReels.GetSymbolPosition(o, r));
                          i.push(v3(o, r));
                        }
                      }
                    }
                    a = 0;
                  case 4:
                    if (!(a < n.length)) {
                      e.next = 47;
                      break;
                    }
                    s = a == n.length - 1;
                    l = n[a];
                    c = i[a].x;
                    u = i[a].y;
                    m = 0;
                  case 10:
                    if (!(m < Game_Define.COL)) {
                      e.next = 44;
                      break;
                    }
                    p = 0;
                  case 12:
                    if (!(p < Game_Define.ROW)) {
                      e.next = 41;
                      break;
                    }
                    if (!((_ = t[m][p]) >= Game_Define.Symbol.Symbol_Fish_1 && _ <= Game_Define.Symbol.Symbol_Fish_8)) {
                      e.next = 38;
                      break;
                    }
                    d = this.m_slotReels.GetSymbolPosition(m, p);
                    f = NodePool.getInstance().GetSymbolEffectNode(_);
                    this.node.addChild(f);
                    f.setPosition(d);
                    this.m_symbolEffectNodes[m][p] = f;
                    h = f.getComponent(SymbolSpine);
                    e.next = 23;
                    return h.PlayHit(_, s);
                  case 23:
                    if (s) {
                      this.m_slotReels.SetLabelIsCollected(m, p);
                    }
                    y = NodePool.getInstance().GetBonusEffectNode();
                    this.node.addChild(y);
                    node$1.SetOrderedZindex(y, Game_Define.EFFECT_ZINDEX.FLY_BONUS);
                    y.setPosition(d);
                    this.m_bonusEffectNodes[m][p] = y;
                    S = y.getComponent(BonusCollection);
                    e.next = 32;
                    return S.PlayFly(_, l);
                  case 32:
                    this.CleanBonusEffect(m, p);
                    this.CleanSymbolEffect(m, p);
                    g = undefined;
                    if (this.m_bonusEffectNodes[c][u]) {
                      g = this.m_bonusEffectNodes[c][u].getComponent(BonusCollection);
                    } else {
                      b = NodePool.getInstance().GetBonusEffectNode();
                      this.node.addChild(b);
                      node$1.SetOrderedZindex(b, Game_Define.EFFECT_ZINDEX.FLY_BONUS);
                      b.setPosition(l);
                      this.m_bonusEffectNodes[c][u] = b;
                      g = b.getComponent(BonusCollection);
                    }
                    node$5.Play(Game_Define.AudioClips.FG_MoneyAdd);
                    g.PlayHit(_);
                  case 38:
                    p++;
                    e.next = 12;
                    break;
                  case 41:
                    m++;
                    e.next = 10;
                    break;
                  case 44:
                    a++;
                    e.next = 4;
                    break;
                  case 47:
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
        n.BonusMultiply = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            var r;
            var a;
            var s;
            var l;
            var c;
            var u;
            var m;
            var p;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = [];
                    o = [];
                    for (r = 0; r < Game_Define.COL; r++) {
                      for (a = 0; a < Game_Define.ROW; a++) {
                        if (!(t[r][a] != Game_Define.Symbol.Symbol_Wild && t[r][a] != Game_Define.Symbol.Symbol_SuperWild)) {
                          i.push(this.m_slotReels.GetSymbolPosition(r, a));
                          o.push(v3(r, a));
                        }
                      }
                    }
                    s = 0;
                  case 4:
                    if (!(s < i.length)) {
                      e.next = 16;
                      break;
                    }
                    l = i[s];
                    c = o[s].x;
                    u = o[s].y;
                    m = undefined;
                    if (this.m_bonusEffectNodes[c][u]) {
                      m = this.m_bonusEffectNodes[c][u].getComponent(BonusCollection);
                    } else {
                      p = NodePool.getInstance().GetBonusEffectNode();
                      this.node.addChild(p);
                      node$1.SetOrderedZindex(p, Game_Define.EFFECT_ZINDEX.FLY_BONUS);
                      p.setPosition(l);
                      this.m_bonusEffectNodes[c][u] = p;
                      m = p.getComponent(BonusCollection);
                    }
                    node$5.Play(Game_Define.AudioClips.Fly);
                    e.next = 13;
                    return m.PlayMultiply(n);
                  case 13:
                    s++;
                    e.next = 4;
                    break;
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
        n.BonusWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            var r;
            var a;
            var s;
            var l;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    i = [];
                    for (o = 0; o < Game_Define.COL; o++) {
                      for (r = 0; r < Game_Define.ROW; r++) {
                        if (!(t[o][r] != Game_Define.Symbol.Symbol_Wild && t[o][r] != Game_Define.Symbol.Symbol_SuperWild)) {
                          this.m_slotReels.GetSymbolNode(o, r).active = false;
                          a = undefined;
                          if (this.m_symbolEffectNodes[o][r]) {
                            a = this.m_symbolEffectNodes[o][r];
                          } else {
                            s = this.m_slotReels.GetSymbolPosition(o, r);
                            (a = NodePool.getInstance().GetSymbolEffectNode(t[o][r])).setPosition(s);
                            this.node.addChild(a);
                            node$1.SetOrderedZindex(a, Game_Define.EFFECT_ZINDEX.WILD);
                            this.m_symbolEffectNodes[o][r] = a;
                          }
                          l = a.getComponent(SymbolSpine);
                          i.push(l.ShowWin(n));
                        }
                      }
                    }
                    e.next = 4;
                    return Promise.all(i);
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
        n.PlaySymbolBomb = function () {
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
                    for (i = 0; i < Game_Define.COL; i++) {
                      for (o = 0; o < Game_Define.ROW; o++) {
                        if (t[i][o] >= Game_Define.Symbol.Symbol_Fish_1 && t[i][o] <= Game_Define.Symbol.Symbol_Fish_8) {
                          this.m_slotReels.GetSymbolNode(i, o).active = false;
                          r = this.m_slotReels.GetSymbolPosition(i, o);
                          (a = NodePool.getInstance().GetSymbolBombEffectNode()).setPosition(r);
                          this.node.addChild(a);
                          node$1.SetOrderedZindex(a, Game_Define.EFFECT_ZINDEX.BOMB);
                          this.m_symbolBombEffectNodes[i][o] = a;
                          s = a.getComponent(SymbolBombSpine);
                          n.push(s.PlayChange());
                        }
                      }
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
          return function (t) {
            return e.apply(this, arguments);
          };
        }();
        n.PlayFishChange = function () {
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
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = [];
                    for (i = 0; i < Game_Define.COL; i++) {
                      for (o = 0; o < Game_Define.ROW; o++) {
                        if ((r = t[i][o]) >= Game_Define.Symbol.Symbol_Fish_1 && r <= Game_Define.Symbol.Symbol_Fish_8) {
                          a = this.m_slotReels.GetSymbolPosition(i, o);
                          (s = NodePool.getInstance().GetSymbolEffectNode(r)).setPosition(a);
                          this.node.addChild(s);
                          this.m_symbolEffectNodes[i][o] = s;
                          l = s.getComponent(SymbolSpine);
                          n.push(l.PlayChange(r));
                        }
                      }
                    }
                    e.next = 4;
                    return Promise.all(n);
                  case 4:
                    for (c = 0; c < Game_Define.COL; c++) {
                      for (u = 0; u < Game_Define.ROW; u++) {
                        if (t[c][u] >= Game_Define.Symbol.Symbol_Fish_1 && t[c][u] <= Game_Define.Symbol.Symbol_Fish_8) {
                          this.m_slotReels.GetSymbolNode(c, u).active = true;
                          this.CleanSymbolBombEffect(c, u);
                          this.CleanSymbolEffect(c, u);
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
        n.SuperWildRespin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var o;
            var r;
            var a;
            var s;
            var l;
            var c;
            var u;
            var m;
            var p;
            var _;
            var d;
            var f;
            var h;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    o = [];
                    r = this.m_gameView.PosIndexToVec3(t);
                    a = 0;
                  case 3:
                    if (!(a < r.length)) {
                      e.next = 15;
                      break;
                    }
                    s = r[a].x;
                    l = r[a].y;
                    if (!(s >= 4)) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("continue", 12);
                  case 8:
                    c = undefined;
                    if (this.m_symbolEffectNodes[s][l]) {
                      c = this.m_symbolEffectNodes[s][l];
                    } else {
                      u = this.m_slotReels.GetSymbolPosition(s, l);
                      (c = NodePool.getInstance().GetSymbolEffectNode(Game_Define.Symbol.Symbol_SuperWild)).setPosition(u);
                      this.node.addChild(c);
                      this.m_symbolEffectNodes[s][l] = c;
                    }
                    m = c.getComponent(SymbolSpine);
                    o.push(m.PlayReSpin(n));
                  case 12:
                    a++;
                    e.next = 3;
                    break;
                  case 15:
                    node$5.Play(Game_Define.AudioClips.FG_Wild_Respin);
                    e.next = 18;
                    return Promise.all(o);
                  case 18:
                    node$5.Play(Game_Define.AudioClips.Reel_Respin);
                    p = 0;
                  case 20:
                    if (!(p < r.length)) {
                      e.next = 34;
                      break;
                    }
                    _ = r[p].x;
                    d = r[p].y;
                    if (!(_ >= 4)) {
                      e.next = 25;
                      break;
                    }
                    return e.abrupt("continue", 31);
                  case 25:
                    f = this.m_symbolEffectNodes[_][d];
                    h = this.m_slotReels.SymbolPos[_ + 1][d];
                    this.m_isSuperWildRespin[_ + 1][d] = true;
                    this.m_symbolEffectNodes[_][d] = null;
                    this.m_symbolEffectNodes[_ + 1][d] = f;
                    tween(f).to(Game_Define.SuperWildRespinTime, {
                      position: h
                    }).call(function () {
                      i();
                    }).start();
                  case 31:
                    p++;
                    e.next = 20;
                    break;
                  case 34:
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
        n.NeedPlayColWildSound = function (e, t) {
          for (var n = 0; n < Game_Define.ROW; n++) {
            if (t[n] === Game_Define.Symbol.Symbol_SuperWild && !this.m_isSuperWildRespin[e][n]) {
              return true;
            }
          }
          return false;
        };
        n.NeedPlayWildSound = function (e) {
          for (var t = 0; t < Game_Define.COL; t++) {
            for (var n = 0; n < Game_Define.ROW; n++) {
              if (e[t][n] === Game_Define.Symbol.Symbol_SuperWild && !this.m_isSuperWildRespin[t][n]) {
                return true;
              }
            }
          }
          return false;
        };
        n.ChangeToScattter = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            var r;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.m_gameView.SlotReels.SetSymbolNode(t, n, Game_Define.Symbol.Symbol_Scatter);
                    this.m_slotReels.GetSymbolNode(t, n).active = false;
                    i = this.m_slotReels.GetSymbolPosition(t, n);
                    if (this.m_scatterEffectNodes[t][n]) {
                      o = this.m_scatterEffectNodes[t][n];
                    } else {
                      (o = NodePool.getInstance().GetSymbolEffectNode(Game_Define.Symbol.Symbol_Scatter)).setPosition(i);
                      this.node.addChild(o);
                      node$1.SetOrderedZindex(o, Game_Define.EFFECT_ZINDEX.SCATTER);
                      this.m_scatterEffectNodes[t][n] = o;
                    }
                    r = o.getComponent(ScatterSpine);
                    e.next = 7;
                    return r.PlayChange();
                  case 7:
                    this.CleanScatterEffect(t, n);
                    this.m_slotReels.GetSymbolNode(t, n).active = true;
                  case 9:
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
        n.SkipFishing = function () {
          var e = this;
          tween(this.m_gameView.SkipTipLabel.node.getComponent(UIOpacity)).to(.2, {
            opacity: .1
          }).call(function () {
            e.m_gameView.SkipTipLabel.node.active = true;
          }).start();
          Game_Define.IsFishing = false;
          Game_Define.FishCanLeave = true;
          var t = this.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx];
          var n = this.m_gameView.GetBonusList(t.Bonus);
          for (var i = 0; i < n.length; i++) {
            var o = n[i];
            if (o > 0) {
              this.m_fishingBonusSpine.PlayBonusOn(o);
              if (3 == o) {
                Game_Define.hasSuperWildBonus = true;
              }
            }
          }
          this.m_gameView.CharacterFrontSpine.node.active = false;
          this.m_gameView.CharacterSpine.PlayFishingIdleToIdle();
          tween(this.m_gameView.FrogSpine.node.getComponent(UIOpacity)).to(.2, {
            opacity: 0
          }).start();
        };
        n.SetBonusCap = function () {
          var e = this.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx];
          var t = this.m_gameView.GetBonusList(e.Bonus);
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            if (i > 0) {
              this.m_fishingBonusSpine.PlayStatic(i - 1);
              if (3 == i) {
                Game_Define.hasSuperWildBonus = true;
              }
            }
          }
        };
        n.SetZIndex = function (e, t) {
          if (t == Game_Define.Symbol.Symbol_Wild || t == Game_Define.Symbol.Symbol_SuperWild) {
            node$1.SetOrderedZindex(e, Game_Define.EFFECT_ZINDEX.WILD);
          } else if (t == Game_Define.Symbol.Symbol_Fish_8) {
            node$1.SetOrderedZindex(e, Game_Define.EFFECT_ZINDEX.BIG_FISH);
          } else {
            node$1.SetOrderedZindex(e, Game_Define.EFFECT_ZINDEX.NORMAL);
          }
        };
        n.ShakeWorld = function () {
          var e = this.m_gameView.node;
          var t = Game_Define.ShakeWorld.SPEED;
          var n = Game_Define.ShakeWorld.DELTA;
          var i = Game_Define.ShakeWorld.TIMES;
          var o = e.position.x;
          var r = e.position.y;
          tween(e).repeat(i, tween().to(t, {
            position: v3(o + n, r + n)
          }).to(t, {
            position: v3(o - n, r - n)
          }).to(t, {
            position: v3(o - n, r + n)
          }).to(t, {
            position: v3(o, r)
          })).start();
          return 4 * t * i;
        };
        n.CleanSymbolEffect = function (e, t) {
          if (this.m_symbolEffectNodes[e][t]) {
            var n = this.m_symbolEffectNodes[e][t];
            NodePool.getInstance().ReturnSymbolEffect(n);
            n.removeFromParent();
            this.m_symbolEffectNodes[e][t] = null;
          }
        };
        n.CleanScatterEffect = function (e, t) {
          if (this.m_scatterEffectNodes[e][t]) {
            var n = this.m_scatterEffectNodes[e][t];
            NodePool.getInstance().ReturnSymbolEffect(n);
            n.removeFromParent();
            this.m_scatterEffectNodes[e][t] = null;
          }
        };
        n.CleanBonusEffect = function (e, t) {
          if (this.m_bonusEffectNodes[e][t]) {
            var n = this.m_bonusEffectNodes[e][t];
            n.getComponent(BonusCollection).Reset();
            NodePool.getInstance().ReturnBonusEffect(n);
            n.removeFromParent();
            this.m_bonusEffectNodes[e][t] = null;
          }
        };
        n.CleanSymbolBombEffect = function (e, t) {
          if (this.m_symbolBombEffectNodes[e][t]) {
            var n = this.m_symbolBombEffectNodes[e][t];
            NodePool.getInstance().ReturnSymbolBombEffect(n);
            n.removeFromParent();
            this.m_symbolBombEffectNodes[e][t] = null;
          }
        };
        n.CleanAllSymbolEffect = function () {
          for (var e = 0; e < this.m_symbolEffectNodes.length; e++) {
            for (var t = 0; t < this.m_symbolEffectNodes[e].length; t++) {
              this.CleanSymbolEffect(e, t);
            }
          }
        };
        n.CleanAllScatterEffect = function () {
          for (var e = 0; e < this.m_scatterEffectNodes.length; e++) {
            for (var t = 0; t < this.m_scatterEffectNodes[e].length; t++) {
              this.CleanScatterEffect(e, t);
            }
          }
        };
        n.CleanAllBonusEffect = function () {
          for (var e = 0; e < this.m_bonusEffectNodes.length; e++) {
            for (var t = 0; t < this.m_bonusEffectNodes[e].length; t++) {
              this.CleanBonusEffect(e, t);
            }
          }
        };
        n.CleanAllSymbolBombEffect = function () {
          for (var e = 0; e < this.m_symbolBombEffectNodes.length; e++) {
            for (var t = 0; t < this.m_symbolBombEffectNodes[e].length; t++) {
              this.CleanSymbolBombEffect(e, t);
            }
          }
        };
        n.CleanAllEffect = function (e) {
          if (undefined === e) {
            e = false;
          }
          this.CleanAllSymbolEffect();
          this.StopSingleLineEffect();
          this.CleanAllScatterEffect();
          this.CleanAllBonusEffect();
          this.m_slotReels.ShowStaticSymbol();
          this.m_slotReels.ShowSymbolDark(e);
        };
        n.CleanAllEffectKeepDark = function () {
          this.CleanAllSymbolEffect();
          this.StopSingleLineEffect();
          this.CleanAllScatterEffect();
          this.m_slotReels.ShowStaticSymbolAndLight();
        };
        n.ResetSuperWildFlag = function () {
          this.m_isSuperWildRespin = [[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]];
        };
        n.CleanAllEffectDark = function () {
          this.CleanAllSymbolEffect();
          this.StopSingleLineEffect();
          this.CleanAllScatterEffect();
          this.CleanAllBonusEffect();
          this.m_slotReels.ShowStaticSymbol();
        };
        _createClass(t, [{
          key: "FGReelSpine",
          get: function () {
            return this.m_fgReelSpine;
          }
        }, {
          key: "FishingFishSpine",
          get: function () {
            return this.m_fishingFishSpine;
          }
        }, {
          key: "FishingBonusSpine",
          get: function () {
            return this.m_fishingBonusSpine;
          }
        }, {
          key: "FishingBonusBoardSpine",
          get: function () {
            return this.m_fishingBonusBoardSpine;
          }
        }, {
          key: "FGDeclare",
          get: function () {
            return this.m_fgDeclare;
          }
        }, {
          key: "FGCompliment",
          get: function () {
            return this.m_fgCompliment;
          }
        }, {
          key: "FGLevelUp",
          get: function () {
            return this.m_fgLevelUp;
          }
        }, {
          key: "FGProgressBar",
          get: function () {
            return this.m_fgProgressBar;
          }
        }, {
          key: "FGCounter",
          get: function () {
            return this.m_fgCounter;
          }
        }]);
        return t;
      }(Component);
      _descriptor$g = _applyDecoratedDescriptor(_class2$g.prototype, "m_symbolEffectPrefabs", [_dec$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor2$e = _applyDecoratedDescriptor(_class2$g.prototype, "m_slotReels", [_dec2$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor3$c = _applyDecoratedDescriptor(_class2$g.prototype, "m_nearWinSpine", [_dec3$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      });
      _descriptor4$7 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fgReelSpine", [_dec4$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor5$3 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fishingFishSpine", [_dec5$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor6$1 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fishingBonusSpine", [_dec6$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor7$1 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fishingBonusBoardSpine", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor8$1 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fgDeclare", [_dec8$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor9$1 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fgCompliment", [_dec9$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor10 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fgLevelUp", [_dec10$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor11 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fgProgressBar", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor12 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fgProgressBarAnim", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor13 = _applyDecoratedDescriptor(_class2$g.prototype, "m_fgCounter", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor14 = _applyDecoratedDescriptor(_class2$g.prototype, "m_bonusCollectionPrefab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor15 = _applyDecoratedDescriptor(_class2$g.prototype, "m_symbolBombPrefab", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "17e75Jz7f5DJJueRnj0TQjr", "FeaturesAck", undefined);
      var FeaturesAck = function () {};
      var _dec$i;
      FeaturesAck.FEATURE_1 = {
        RoundQueue: [{
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [8, 5, 7]
          }, {
            Col: [9, 9, 11]
          }, {
            Col: [9, 12, 7]
          }, {
            Col: [6, 10, 8]
          }, {
            Col: [8, 11, 11]
          }],
          LineWin: 200,
          RoundWin: 200,
          AwardDataVec: [{
            Symbol: 5,
            Count: 5,
            Win: 20
          }, {
            Index: 1,
            Symbol: 5,
            Count: 5,
            Win: 20
          }, {
            Index: 2,
            Symbol: 5,
            Count: 5,
            Win: 20
          }, {
            Index: 3,
            Symbol: 5,
            Count: 5,
            Win: 20
          }, {
            Index: 4,
            Symbol: 5,
            Count: 5,
            Win: 20
          }, {
            Index: 5,
            Symbol: 5,
            Count: 5,
            Win: 20
          }, {
            Index: 6,
            Symbol: 5,
            Count: 5,
            Win: 20
          }, {
            Index: 7,
            Symbol: 5,
            Count: 5,
            Win: 20
          }, {
            Index: 8,
            Symbol: 5,
            Count: 5,
            Win: 20
          }, {
            Index: 9,
            Symbol: 5,
            Count: 5,
            Win: 20
          }],
          Bonus: [false, false, false, false, false, false]
        }],
        TotalWin: 200,
        RTP: .971
      };
      FeaturesAck.FEATURE_2 = {
        RoundQueue: [{
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [19, 5, 6]
          }, {
            Col: [14, 19, 13]
          }, {
            Col: [3, 19, 1]
          }, {
            Col: [16, 3, 5]
          }, {
            Col: [1, 8, 7]
          }],
          AwardTypeFlag: 2,
          ScatterCount: 3,
          AddRound: 12,
          Bonus: [false, true, true, true, true, true],
          TotalWildCount: 4,
          NextLevel: 2
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 15, 3]
          }, {
            Col: [1, 4, 0]
          }, {
            Col: [1, 6, 6]
          }, {
            Col: [14, 15, 6]
          }, {
            Col: [1, 3, 2]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          TotalWildCount: 4,
          NowLevel: 2,
          NowFreeRemainRound: 11,
          NowFreeTotalRound: 12,
          FreeTotalRound: 1
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [15, 0, 2]
          }, {
            Col: [13, 3, 1]
          }, {
            Col: [4, 15, 18]
          }, {
            Col: [0, 13, 2]
          }, {
            Col: [3, 1, 6]
          }],
          RoundWin: 4,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          FishWin: 4,
          TotalWildCount: 5,
          NowLevel: 2,
          NowFreeRemainRound: 10,
          NowFreeTotalRound: 12,
          FreeTotalRound: 2,
          IsInReSpin: true,
          SuperWildPos: [8]
        }, {
          FakePlateSymbol: [{
            Col: [15, 4, 2]
          }, {
            Col: [2, 1, 14]
          }, {
            Col: [0, 4, 15]
          }, {
            Col: [13, 15, 18]
          }, {
            Col: [14, 3, 13]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [6, 4, 2]
          }, {
            Col: [2, 1, 8]
          }, {
            Col: [0, 4, 15]
          }, {
            Col: [13, 15, 18]
          }, {
            Col: [14, 8, 13]
          }],
          RoundWin: 44,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          FishWin: 44,
          TotalWildCount: 5,
          NowLevel: 2,
          NowFreeRemainRound: 10,
          NowFreeTotalRound: 12,
          FreeTotalRound: 3,
          IsInReSpin: true,
          SuperWildPos: [11]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 15, 7]
          }, {
            Col: [1, 4, 0]
          }, {
            Col: [13, 1, 0]
          }, {
            Col: [13, 2, 16]
          }, {
            Col: [15, 15, 18]
          }],
          RoundWin: 10,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          FishWin: 10,
          TotalWildCount: 5,
          NowLevel: 2,
          NowFreeRemainRound: 10,
          NowFreeTotalRound: 12,
          FreeTotalRound: 4,
          SuperWildPos: [14]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 15, 0]
          }, {
            Col: [6, 6, 14]
          }, {
            Col: [15, 14, 6]
          }, {
            Col: [6, 6, 13]
          }, {
            Col: [15, 15, 14]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          TotalWildCount: 5,
          NowLevel: 2,
          NowFreeRemainRound: 9,
          NowFreeTotalRound: 12,
          FreeTotalRound: 5
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [2, 1, 4]
          }, {
            Col: [13, 16, 3]
          }, {
            Col: [14, 6, 4]
          }, {
            Col: [13, 2, 16]
          }, {
            Col: [4, 0, 13]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          TotalWildCount: 5,
          NowLevel: 2,
          NowFreeRemainRound: 8,
          NowFreeTotalRound: 12,
          FreeTotalRound: 6
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [14, 0, 6]
          }, {
            Col: [6, 13, 16]
          }, {
            Col: [3, 14, 2]
          }, {
            Col: [4, 15, 0]
          }, {
            Col: [6, 15, 15]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          TotalWildCount: 5,
          NowLevel: 2,
          NowFreeRemainRound: 7,
          NowFreeTotalRound: 12,
          FreeTotalRound: 7
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [15, 3, 2]
          }, {
            Col: [6, 13, 16]
          }, {
            Col: [14, 2, 1]
          }, {
            Col: [3, 16, 18]
          }, {
            Col: [15, 15, 14]
          }],
          RoundWin: 4,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          FishWin: 4,
          TotalWildCount: 6,
          NowLevel: 2,
          NowFreeRemainRound: 6,
          NowFreeTotalRound: 12,
          FreeTotalRound: 8,
          IsInReSpin: true,
          SuperWildPos: [11]
        }, {
          FakePlateSymbol: [{
            Col: [0, 3, 4]
          }, {
            Col: [13, 1, 4]
          }, {
            Col: [1, 0, 14]
          }, {
            Col: [4, 16, 13]
          }, {
            Col: [0, 13, 18]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [0, 6, 4]
          }, {
            Col: [6, 1, 4]
          }, {
            Col: [1, 0, 14]
          }, {
            Col: [6, 6, 13]
          }, {
            Col: [0, 13, 18]
          }],
          RoundWin: 16,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          FishWin: 16,
          TotalWildCount: 6,
          NowLevel: 2,
          NowFreeRemainRound: 6,
          NowFreeTotalRound: 12,
          FreeTotalRound: 9,
          SuperWildPos: [14]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 1, 0]
          }, {
            Col: [1, 14, 3]
          }, {
            Col: [14, 15, 13]
          }, {
            Col: [3, 16, 14]
          }, {
            Col: [1, 3, 2]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          TotalWildCount: 6,
          NowLevel: 2,
          NowFreeRemainRound: 5,
          NowFreeTotalRound: 12,
          FreeTotalRound: 10
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [6, 13, 4]
          }, {
            Col: [1, 16, 18]
          }, {
            Col: [3, 16, 9]
          }, {
            Col: [18, 2, 16]
          }, {
            Col: [14, 16, 4]
          }],
          RoundWin: 68,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          FishWin: 68,
          TotalWildCount: 8,
          NowLevel: 2,
          NowFreeRemainRound: 4,
          NowFreeTotalRound: 12,
          FreeTotalRound: 11,
          IsInReSpin: true,
          SuperWildPos: [5, 9]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 4, 15]
          }, {
            Col: [14, 3, 1]
          }, {
            Col: [13, 1, 18]
          }, {
            Col: [14, 15, 6]
          }, {
            Col: [18, 6, 15]
          }],
          RoundWin: 16,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          FishWin: 16,
          TotalWildCount: 8,
          NowLevel: 2,
          NowFreeRemainRound: 4,
          NowFreeTotalRound: 12,
          FreeTotalRound: 12,
          IsInReSpin: true,
          SuperWildPos: [8, 12]
        }, {
          FakePlateSymbol: [{
            Col: [4, 1, 0]
          }, {
            Col: [13, 1, 14]
          }, {
            Col: [2, 15, 3]
          }, {
            Col: [14, 13, 18]
          }, {
            Col: [15, 14, 1]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [4, 1, 0]
          }, {
            Col: [6, 1, 14]
          }, {
            Col: [6, 6, 6]
          }, {
            Col: [14, 13, 18]
          }, {
            Col: [15, 14, 6]
          }],
          RoundWin: 20,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          FishWin: 20,
          TotalWildCount: 8,
          NowLevel: 2,
          NowFreeRemainRound: 4,
          NowFreeTotalRound: 12,
          FreeTotalRound: 13,
          IsInReSpin: true,
          SuperWildPos: [11]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 2, 6]
          }, {
            Col: [3, 2, 1]
          }, {
            Col: [16, 13, 1]
          }, {
            Col: [3, 16, 14]
          }, {
            Col: [16, 1, 18]
          }],
          RoundWin: 4,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          FishWin: 4,
          TotalWildCount: 8,
          NowLevel: 2,
          NowFreeRemainRound: 4,
          NowFreeTotalRound: 12,
          FreeTotalRound: 14,
          SuperWildPos: [14]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 2, 0]
          }, {
            Col: [2, 16, 3]
          }, {
            Col: [1, 0, 14]
          }, {
            Col: [15, 4, 15]
          }, {
            Col: [1, 3, 2]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          TotalWildCount: 8,
          NowLevel: 2,
          NowFreeRemainRound: 3,
          NowFreeTotalRound: 12,
          FreeTotalRound: 15
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [16, 0, 4]
          }, {
            Col: [3, 9, 1]
          }, {
            Col: [3, 14, 2]
          }, {
            Col: [16, 14, 13]
          }, {
            Col: [6, 15, 15]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          TotalWildCount: 8,
          NowLevel: 2,
          NowFreeRemainRound: 2,
          NowFreeTotalRound: 12,
          FreeTotalRound: 16
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [2, 13, 14]
          }, {
            Col: [0, 15, 3]
          }, {
            Col: [7, 6, 13]
          }, {
            Col: [8, 6, 13]
          }, {
            Col: [14, 6, 13]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          TotalWildCount: 8,
          NowLevel: 2,
          NowFreeRemainRound: 1,
          NowFreeTotalRound: 12,
          FreeTotalRound: 17
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 4, 15]
          }, {
            Col: [15, 3, 7]
          }, {
            Col: [13, 14, 3]
          }, {
            Col: [15, 4, 15]
          }, {
            Col: [16, 1, 3]
          }],
          AwardTypeFlag: 20,
          AddRound: 12,
          Bonus: [false, true, true, true, true, true],
          FishMult: 2,
          TotalWildCount: 8,
          NowLevel: 2,
          NowFreeTotalRound: 12,
          FreeTotalRound: 18,
          NextLevel: 3
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [6, 4, 2]
          }, {
            Col: [6, 6, 6]
          }, {
            Col: [4, 15, 2]
          }, {
            Col: [14, 15, 6]
          }, {
            Col: [3, 2, 6]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          TotalWildCount: 8,
          NowLevel: 3,
          NowFreeRemainRound: 11,
          NowFreeTotalRound: 12,
          FreeTotalRound: 19
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 2, 1]
          }, {
            Col: [1, 0, 15]
          }, {
            Col: [0, 8, 18]
          }, {
            Col: [4, 15, 0]
          }, {
            Col: [1, 3, 2]
          }],
          RoundWin: 30,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          FishWin: 30,
          TotalWildCount: 9,
          NowLevel: 3,
          NowFreeRemainRound: 10,
          NowFreeTotalRound: 12,
          FreeTotalRound: 20,
          IsInReSpin: true,
          SuperWildPos: [8]
        }, {
          FakePlateSymbol: [{
            Col: [14, 3, 13]
          }, {
            Col: [1, 0, 15]
          }, {
            Col: [15, 2, 3]
          }, {
            Col: [1, 14, 18]
          }, {
            Col: [3, 2, 15]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [6, 9, 13]
          }, {
            Col: [1, 0, 15]
          }, {
            Col: [15, 2, 3]
          }, {
            Col: [1, 14, 18]
          }, {
            Col: [3, 2, 6]
          }],
          RoundWin: 57,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          FishWin: 57,
          TotalWildCount: 9,
          NowLevel: 3,
          NowFreeRemainRound: 10,
          NowFreeTotalRound: 12,
          FreeTotalRound: 21,
          IsInReSpin: true,
          SuperWildPos: [11]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [14, 0, 6]
          }, {
            Col: [16, 3, 1]
          }, {
            Col: [6, 13, 15]
          }, {
            Col: [4, 15, 0]
          }, {
            Col: [3, 2, 18]
          }],
          RoundWin: 12,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          FishWin: 12,
          TotalWildCount: 9,
          NowLevel: 3,
          NowFreeRemainRound: 10,
          NowFreeTotalRound: 12,
          FreeTotalRound: 22,
          SuperWildPos: [14]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 4, 15]
          }, {
            Col: [1, 2, 16]
          }, {
            Col: [15, 13, 0]
          }, {
            Col: [6, 1, 14]
          }, {
            Col: [1, 3, 2]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          TotalWildCount: 9,
          NowLevel: 3,
          NowFreeRemainRound: 9,
          NowFreeTotalRound: 12,
          FreeTotalRound: 23
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 4, 2]
          }, {
            Col: [1, 6, 6]
          }, {
            Col: [3, 14, 2]
          }, {
            Col: [18, 13, 3]
          }, {
            Col: [13, 4, 0]
          }],
          RoundWin: 12,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          FishWin: 12,
          TotalWildCount: 10,
          NowLevel: 3,
          NowFreeRemainRound: 8,
          NowFreeTotalRound: 12,
          FreeTotalRound: 24,
          IsInReSpin: true,
          SuperWildPos: [9]
        }, {
          FakePlateSymbol: [{
            Col: [4, 2, 1]
          }, {
            Col: [16, 14, 3]
          }, {
            Col: [1, 0, 2]
          }, {
            Col: [16, 4, 13]
          }, {
            Col: [18, 1, 15]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [4, 2, 1]
          }, {
            Col: [6, 14, 3]
          }, {
            Col: [1, 6, 6]
          }, {
            Col: [6, 6, 13]
          }, {
            Col: [18, 7, 15]
          }],
          RoundWin: 45,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          FishWin: 45,
          TotalWildCount: 10,
          NowLevel: 3,
          NowFreeRemainRound: 8,
          NowFreeTotalRound: 12,
          FreeTotalRound: 25,
          SuperWildPos: [12]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 1, 0]
          }, {
            Col: [1, 4, 0]
          }, {
            Col: [15, 13, 14]
          }, {
            Col: [15, 0, 13]
          }, {
            Col: [14, 6, 13]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          TotalWildCount: 10,
          NowLevel: 3,
          NowFreeRemainRound: 7,
          NowFreeTotalRound: 12,
          FreeTotalRound: 26
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 15, 6]
          }, {
            Col: [2, 1, 4]
          }, {
            Col: [4, 15, 2]
          }, {
            Col: [18, 15, 4]
          }, {
            Col: [0, 13, 1]
          }],
          RoundWin: 6,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          FishWin: 6,
          TotalWildCount: 11,
          NowLevel: 3,
          NowFreeRemainRound: 6,
          NowFreeTotalRound: 12,
          FreeTotalRound: 27,
          IsInReSpin: true,
          SuperWildPos: [9]
        }, {
          FakePlateSymbol: [{
            Col: [0, 4, 2]
          }, {
            Col: [1, 14, 16]
          }, {
            Col: [2, 13, 15]
          }, {
            Col: [15, 0, 13]
          }, {
            Col: [18, 14, 16]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [0, 4, 2]
          }, {
            Col: [6, 6, 7]
          }, {
            Col: [6, 13, 15]
          }, {
            Col: [15, 0, 13]
          }, {
            Col: [18, 14, 16]
          }],
          RoundWin: 33,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          FishWin: 33,
          TotalWildCount: 11,
          NowLevel: 3,
          NowFreeRemainRound: 6,
          NowFreeTotalRound: 12,
          FreeTotalRound: 28,
          SuperWildPos: [12]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [1, 4, 2]
          }, {
            Col: [16, 3, 1]
          }, {
            Col: [13, 15, 14]
          }, {
            Col: [15, 4, 15]
          }, {
            Col: [4, 0, 1]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          TotalWildCount: 11,
          NowLevel: 3,
          NowFreeRemainRound: 5,
          NowFreeTotalRound: 12,
          FreeTotalRound: 29
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [13, 4, 2]
          }, {
            Col: [2, 16, 3]
          }, {
            Col: [15, 13, 14]
          }, {
            Col: [14, 15, 6]
          }, {
            Col: [4, 0, 13]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          TotalWildCount: 11,
          NowLevel: 3,
          NowFreeRemainRound: 4,
          NowFreeTotalRound: 12,
          FreeTotalRound: 30
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [15, 6, 1]
          }, {
            Col: [3, 1, 16]
          }, {
            Col: [13, 1, 0]
          }, {
            Col: [18, 16, 14]
          }, {
            Col: [4, 16, 6]
          }],
          LineWin: .2,
          RoundWin: 12.2,
          AwardDataVec: [{
            Index: 9,
            Symbol: 1,
            Count: 3,
            Win: .2
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          FishWin: 12,
          TotalWildCount: 12,
          NowLevel: 3,
          NowFreeRemainRound: 3,
          NowFreeTotalRound: 12,
          FreeTotalRound: 31,
          IsInReSpin: true,
          SuperWildPos: [9]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 2, 4]
          }, {
            Col: [4, 0, 1]
          }, {
            Col: [3, 14, 6]
          }, {
            Col: [0, 13, 2]
          }, {
            Col: [18, 0, 1]
          }],
          RoundWin: 6,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          FishWin: 6,
          TotalWildCount: 12,
          NowLevel: 3,
          NowFreeRemainRound: 3,
          NowFreeTotalRound: 12,
          FreeTotalRound: 32,
          SuperWildPos: [12]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 2, 16]
          }, {
            Col: [4, 3, 1]
          }, {
            Col: [2, 3, 14]
          }, {
            Col: [13, 2, 16]
          }, {
            Col: [14, 7, 13]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          TotalWildCount: 12,
          NowLevel: 3,
          NowFreeRemainRound: 2,
          NowFreeTotalRound: 12,
          FreeTotalRound: 33
        }, {
          FakePlateSymbol: [{
            Col: [2, 1, 4]
          }, {
            Col: [13, 16, 3]
          }, {
            Col: [15, 1, 0]
          }, {
            Col: [16, 14, 18]
          }, {
            Col: [4, 0, 13]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [2, 1, 4]
          }, {
            Col: [13, 16, 3]
          }, {
            Col: [6, 7, 6]
          }, {
            Col: [16, 14, 18]
          }, {
            Col: [4, 0, 13]
          }],
          RoundWin: 27,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          FishWin: 27,
          TotalWildCount: 13,
          NowLevel: 3,
          NowFreeRemainRound: 1,
          NowFreeTotalRound: 12,
          FreeTotalRound: 34,
          IsInReSpin: true,
          SuperWildPos: [11]
        }, {
          FakePlateSymbol: [{
            Col: [3, 2, 0]
          }, {
            Col: [1, 13, 14]
          }, {
            Col: [2, 1, 1]
          }, {
            Col: [16, 14, 15]
          }, {
            Col: [1, 13, 18]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [3, 2, 0]
          }, {
            Col: [1, 10, 6]
          }, {
            Col: [2, 1, 1]
          }, {
            Col: [16, 14, 15]
          }, {
            Col: [6, 13, 18]
          }],
          RoundWin: 72,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          FishWin: 72,
          TotalWildCount: 13,
          NowLevel: 3,
          NowFreeRemainRound: 1,
          NowFreeTotalRound: 12,
          FreeTotalRound: 35,
          SuperWildPos: [14]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 6, 4]
          }, {
            Col: [4, 3, 1]
          }, {
            Col: [13, 14, 3]
          }, {
            Col: [4, 15, 0]
          }, {
            Col: [16, 1, 3]
          }],
          AwardTypeFlag: 20,
          AddRound: 12,
          Bonus: [false, true, true, true, true, true],
          FishMult: 3,
          TotalWildCount: 13,
          NowLevel: 3,
          NowFreeTotalRound: 12,
          FreeTotalRound: 36,
          NextLevel: 4
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [15, 0, 2]
          }, {
            Col: [1, 6, 6]
          }, {
            Col: [13, 14, 3]
          }, {
            Col: [6, 6, 13]
          }, {
            Col: [6, 13, 4]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          TotalWildCount: 13,
          NowLevel: 4,
          NowFreeRemainRound: 11,
          NowFreeTotalRound: 12,
          FreeTotalRound: 37
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [1, 4, 2]
          }, {
            Col: [1, 14, 3]
          }, {
            Col: [1, 6, 6]
          }, {
            Col: [15, 4, 15]
          }, {
            Col: [16, 15, 16]
          }],
          LineWin: .2,
          RoundWin: .2,
          AwardDataVec: [{
            Index: 1,
            Symbol: 1,
            Count: 3,
            Win: .2
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          TotalWildCount: 13,
          NowLevel: 4,
          NowFreeRemainRound: 10,
          NowFreeTotalRound: 12,
          FreeTotalRound: 38
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 2, 13]
          }, {
            Col: [6, 13, 16]
          }, {
            Col: [14, 15, 13]
          }, {
            Col: [0, 13, 2]
          }, {
            Col: [2, 7, 6]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          TotalWildCount: 13,
          NowLevel: 4,
          NowFreeRemainRound: 9,
          NowFreeTotalRound: 12,
          FreeTotalRound: 39
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 4, 15]
          }, {
            Col: [1, 4, 3]
          }, {
            Col: [1, 1, 6]
          }, {
            Col: [14, 15, 6]
          }, {
            Col: [16, 1, 3]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          TotalWildCount: 13,
          NowLevel: 4,
          NowFreeRemainRound: 8,
          NowFreeTotalRound: 12,
          FreeTotalRound: 40
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [1, 0, 4]
          }, {
            Col: [0, 1, 3]
          }, {
            Col: [14, 3, 16]
          }, {
            Col: [3, 16, 14]
          }, {
            Col: [13, 14, 16]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          TotalWildCount: 13,
          NowLevel: 4,
          NowFreeRemainRound: 7,
          NowFreeTotalRound: 12,
          FreeTotalRound: 41
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [6, 6, 13]
          }, {
            Col: [3, 1, 4]
          }, {
            Col: [0, 4, 15]
          }, {
            Col: [1, 14, 6]
          }, {
            Col: [16, 1, 3]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          TotalWildCount: 13,
          NowLevel: 4,
          NowFreeRemainRound: 6,
          NowFreeTotalRound: 12,
          FreeTotalRound: 42
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 2, 13]
          }, {
            Col: [15, 3, 6]
          }, {
            Col: [2, 1, 1]
          }, {
            Col: [0, 13, 2]
          }, {
            Col: [15, 15, 14]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          TotalWildCount: 13,
          NowLevel: 4,
          NowFreeRemainRound: 5,
          NowFreeTotalRound: 12,
          FreeTotalRound: 43
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [3, 2, 0]
          }, {
            Col: [7, 1, 14]
          }, {
            Col: [16, 13, 1]
          }, {
            Col: [15, 6, 1]
          }, {
            Col: [3, 2, 6]
          }],
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          TotalWildCount: 13,
          NowLevel: 4,
          NowFreeRemainRound: 4,
          NowFreeTotalRound: 12,
          FreeTotalRound: 44
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [1, 4, 2]
          }, {
            Col: [14, 3, 1]
          }, {
            Col: [18, 6, 3]
          }, {
            Col: [1, 14, 6]
          }, {
            Col: [16, 4, 0]
          }],
          RoundWin: 40,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          FishWin: 40,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 3,
          NowFreeTotalRound: 12,
          FreeTotalRound: 45,
          IsInReSpin: true,
          SuperWildPos: [6]
        }, {
          FakePlateSymbol: [{
            Col: [4, 2, 13]
          }, {
            Col: [15, 1, 14]
          }, {
            Col: [3, 16, 13]
          }, {
            Col: [18, 14, 0]
          }, {
            Col: [16, 15, 16]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [4, 2, 13]
          }, {
            Col: [6, 6, 14]
          }, {
            Col: [3, 16, 13]
          }, {
            Col: [18, 14, 6]
          }, {
            Col: [16, 15, 16]
          }],
          RoundWin: 60,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          FishWin: 60,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 3,
          NowFreeTotalRound: 12,
          FreeTotalRound: 46,
          IsInReSpin: true,
          SuperWildPos: [9]
        }, {
          FakePlateSymbol: [{
            Col: [2, 0, 15]
          }, {
            Col: [13, 1, 4]
          }, {
            Col: [3, 16, 2]
          }, {
            Col: [1, 13, 15]
          }, {
            Col: [18, 3, 0]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [2, 0, 15]
          }, {
            Col: [6, 1, 4]
          }, {
            Col: [6, 8, 7]
          }, {
            Col: [6, 13, 15]
          }, {
            Col: [18, 6, 7]
          }],
          RoundWin: 280,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          FishWin: 280,
          TotalWildCount: 14,
          NowLevel: 4,
          NowFreeRemainRound: 3,
          NowFreeTotalRound: 12,
          FreeTotalRound: 47,
          SuperWildPos: [12]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [4, 15, 0]
          }, {
            Col: [1, 2, 16]
          }, {
            Col: [16, 13, 1]
          }, {
            Col: [15, 6, 1]
          }, {
            Col: [1, 6, 18]
          }],
          RoundWin: 40,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          FishWin: 40,
          TotalWildCount: 15,
          NowLevel: 4,
          NowFreeRemainRound: 2,
          NowFreeTotalRound: 12,
          FreeTotalRound: 48,
          SuperWildPos: [14]
        }, {
          FakePlateSymbol: [{
            Col: [4, 2, 13]
          }, {
            Col: [3, 1, 16]
          }, {
            Col: [14, 18, 13]
          }, {
            Col: [15, 3, 0]
          }, {
            Col: [4, 16, 1]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [4, 2, 13]
          }, {
            Col: [3, 1, 16]
          }, {
            Col: [14, 18, 13]
          }, {
            Col: [15, 6, 6]
          }, {
            Col: [4, 16, 6]
          }],
          RoundWin: 60,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          FishWin: 60,
          TotalWildCount: 16,
          NowLevel: 4,
          NowFreeRemainRound: 1,
          NowFreeTotalRound: 12,
          FreeTotalRound: 49,
          IsInReSpin: true,
          SuperWildPos: [7]
        }, {
          FakePlateSymbol: [{
            Col: [2, 15, 16]
          }, {
            Col: [1, 4, 0]
          }, {
            Col: [0, 14, 15]
          }, {
            Col: [14, 18, 4]
          }, {
            Col: [1, 3, 2]
          }],
          GetFake: true,
          FinalPlateSymbol: [{
            Col: [2, 6, 7]
          }, {
            Col: [1, 4, 0]
          }, {
            Col: [0, 14, 15]
          }, {
            Col: [14, 18, 6]
          }, {
            Col: [1, 3, 2]
          }],
          RoundWin: 90,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          FishWin: 90,
          TotalWildCount: 16,
          NowLevel: 4,
          NowFreeRemainRound: 1,
          NowFreeTotalRound: 12,
          FreeTotalRound: 50,
          IsInReSpin: true,
          SuperWildPos: [10]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [0, 15, 3]
          }, {
            Col: [3, 1, 2]
          }, {
            Col: [13, 15, 14]
          }, {
            Col: [6, 6, 13]
          }, {
            Col: [14, 18, 13]
          }],
          RoundWin: 40,
          AwardTypeFlag: 4,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          FishWin: 40,
          TotalWildCount: 16,
          NowLevel: 4,
          NowFreeRemainRound: 1,
          NowFreeTotalRound: 12,
          FreeTotalRound: 51,
          SuperWildPos: [13]
        }, {
          FakePlateSymbol: [{}, {}, {}, {}, {}],
          FinalPlateSymbol: [{
            Col: [2, 16, 0]
          }, {
            Col: [1, 4, 3]
          }, {
            Col: [7, 4, 15]
          }, {
            Col: [16, 14, 13]
          }, {
            Col: [3, 2, 4]
          }],
          AwardTypeFlag: 12,
          Bonus: [false, true, true, true, true, true],
          FishMult: 10,
          TotalWildCount: 16,
          NowLevel: 4,
          NowFreeTotalRound: 12,
          FreeTotalRound: 52
        }],
        FreeTotalWin: 1108.4,
        TotalWin: 1108.4,
        RTP: .971
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "db2dcV29ARPiIYnLpGG8L1g", "AddFreeState", undefined);
      var ccclass$i = _decorator.ccclass;
      _dec$i = ccclass$i("AddFreeState");
      var _dec$j;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b7c580MnMRIJ6KANaCrKlQd", "AwardState", undefined);
      var ccclass$j = _decorator.ccclass;
      _dec$j = ccclass$j("AwardState");
      var _dec$k;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b4549qTCnhEAJC97xLzkHHe", "CheckState", undefined);
      var ccclass$k = _decorator.ccclass;
      _dec$k = ccclass$k("CheckState");
      var _dec$l;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "777e7MaI5lEEprzx718a3GG", "CollectBonusState", undefined);
      var ccclass$l = _decorator.ccclass;
      _dec$l = ccclass$l("CollectBonusState");
      var _dec$m;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4faabBEIrNJG7Qe2sVswDPu", "EnterFreeState", undefined);
      var ccclass$m = _decorator.ccclass;
      _dec$m = ccclass$m("EnterFreeState");
      var _dec$n;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f11aboi7zFHCJwK4VTCS32w", "FakeToRealState", undefined);
      var ccclass$n = _decorator.ccclass;
      _dec$n = ccclass$n("FakeToRealState");
      var _dec$o;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e9096F/qB9EbabEDycaegBp", "FeatureShowState", undefined);
      var ccclass$o = _decorator.ccclass;
      _dec$o = ccclass$o("FeatureShowState");
      var _dec$p;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f402e7ZKmpA8aZ+KHhQhX93", "FishingState", undefined);
      var ccclass$p = _decorator.ccclass;
      _dec$p = ccclass$p("FishingState");
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4ee5dQWGnpGMoOlB0ckuIRV", "IdleState", undefined);
      var _dec$q;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0d672FCOCRBLJ86Dvexg7Eh", "LeaveFreeState", undefined);
      var ccclass$q = _decorator.ccclass;
      _dec$q = ccclass$q("LeaveFreeState");
      var _dec$r;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b8be81Ufd1OKJ1xwQf1x3mj", "PlateShowState", undefined);
      var ccclass$r = _decorator.ccclass;
      _dec$r = ccclass$r("PlateShowState");
      var _dec$s;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "918d4NFKG1AtpI/fzcbrQ5G", "RoundEndState", undefined);
      var ccclass$s = _decorator.ccclass;
      _dec$s = ccclass$s("RoundEndState");
      var _dec$t;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "46739gXrwVLgqgFVEHGCbbJ", "RoundShowEndState", undefined);
      var ccclass$t = _decorator.ccclass;
      _dec$t = ccclass$t("RoundShowEndState");
      var _dec$u;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e3ce6GoGBtHkovh6YxOzmH4", "SpinState", undefined);
      var ccclass$u = _decorator.ccclass;
      _dec$u = ccclass$u("SpinState");
      var _dec$v;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e086aJe7ppDb4+RlBO6e7aD", "UnshowPerpareState", undefined);
      var ccclass$v = _decorator.ccclass;
      _dec$v = ccclass$v("UnshowPerpareState");
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1a891aSMNVF/KBTD0N0ny7+", "WaitReadyState", undefined);
      var _dec$w;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f14ccSNcapKdZobMyM6eb9p", "WaitResState", undefined);
      var ccclass$w = _decorator.ccclass;
      _dec$w = ccclass$w("WaitResState");
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
        var o;
        return t ? (o = 0 <= (e >>>= 0) && e < 256) && (i = UINT_CACHE[e]) ? i : (n = new Long(e, 0, true), o && (UINT_CACHE[e] = n), n) : (o = -128 <= (e |= 0) && e < 128) && (i = INT_CACHE[e]) ? i : (n = new Long(e, e < 0 ? -1 : 0, false), o && (INT_CACHE[e] = n), n);
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
        var o = fromNumber(pow_dbl(n, 8));
        var r = ZERO;
        for (var a = 0; a < e.length; a += 8) {
          var s = Math.min(8, e.length - a);
          var l = parseInt(e.substring(a, a + s), n);
          if (s < 8) {
            var c = fromNumber(pow_dbl(n, s));
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
            var n = this.div(t);
            var i = n.mul(t).sub(this);
            return n.toString(e) + i.toInt().toString(e);
          }
          return "-" + this.neg().toString(e);
        }
        var o = fromNumber(pow_dbl(e, 6), this.unsigned);
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
        var o = 65535 & this.low;
        var r = e.high >>> 16;
        var a = 65535 & e.high;
        var s = e.low >>> 16;
        var l = 0;
        var c = 0;
        var u = 0;
        var m = 0;
        u += (m += o + (65535 & e.low)) >>> 16;
        c += (u += i + s) >>> 16;
        l += (c += n + a) >>> 16;
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
        var n = 65535 & this.high;
        var i = this.low >>> 16;
        var o = 65535 & this.low;
        var r = e.high >>> 16;
        var a = 65535 & e.high;
        var s = e.low >>> 16;
        var l = 65535 & e.low;
        var c = 0;
        var u = 0;
        var m = 0;
        var p = 0;
        m += (p += o * l) >>> 16;
        u += (m += i * l) >>> 16;
        m &= 65535;
        u += (m += o * s) >>> 16;
        c += (u += n * l) >>> 16;
        u &= 65535;
        c += (u += i * s) >>> 16;
        u &= 65535;
        c += (u += o * a) >>> 16;
        c += t * l + n * s + i * a + o * r;
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
          var o = Math.ceil(Math.log(t) / Math.LN2);
          var r = o <= 48 ? 1 : pow_dbl(2, o - 48);
          var a = fromNumber(t);
          for (var s = a.mul(e); s.isNegative() || s.gt(n);) {
            s = (a = fromNumber(t -= r, this.unsigned)).mul(e);
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (e, t, n, i, o) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (e, t, n, i, o) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (e, t, n, i, o) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (e, t, n, i, o) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (exports, require, module, __filename, __dirname) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (e, t, n, i, o) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (e, t, n, i, o) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (e, t, n, i, o) {
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
          "../util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (e, t, n, i, o) {
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
          "@protobufjs/aspromise": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/base64": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          "@protobufjs/eventemitter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          "@protobufjs/float": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          "@protobufjs/inquire": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          "@protobufjs/utf8": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          "@protobufjs/pool": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          "./longbits": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (e, t, n, i, o) {
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
        function m() {}
        function p(e) {
          this.head = e.head;
          this.tail = e.tail;
          this.len = e.len;
          this.next = e.states;
        }
        function _() {
          this.len = 0;
          this.head = new u(m, 0, 0);
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
          this.states = new p(this);
          this.head = this.tail = new u(m, 0, 0);
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
            this.head = this.tail = new u(m, 0, 0);
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
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (e, t, n, i, o) {
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
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (e, t, n, i, o) {
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
        var _ = function () {
          return a.Buffer ? function (e) {
            return (u.create = function (e) {
              return a.Buffer.isBuffer(e) ? new r(e) : p(e);
            })(e);
          } : p;
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
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (e, t, n, i, o) {
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
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (e, t, n, i, o) {
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
          "../util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (e, t, n, i, o) {
        e.Service = t("./rpc/service");
        n.exports;
      }, function () {
        return {
          "./rpc/service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (e, t, n, i, o) {
        n.exports = {};
        n.exports;
      }, {});
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (e, t, n, i, o) {
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
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./writer_buffer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./reader_buffer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./rpc": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          "./roots": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (e, t, n, i, o) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (e, t, n, i, o) {
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
          "@protobufjs/aspromise": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          "@protobufjs/inquire": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (e, t, n, i, o) {
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (e, t, n, i, o) {
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
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (e, t, n, i, o) {
        n.exports = m;
        var r = t("./object");
        ((m.prototype = Object.create(r.prototype)).constructor = m).className = "Field";
        var a;
        var s = t("./enum");
        var l = t("./types");
        var c = t("./util");
        var u = /^required|optional|repeated$/;
        function m(e, t, n, i, o, a, s) {
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
          return r.prototype.setOption.call(this, e, t, n);
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
          return r.prototype.resolve.call(this);
        };
        m.d = function (e, t, n, i) {
          if ("function" == typeof t) {
            t = c.decorateType(t).name;
          } else if (t && "object" == typeof t) {
            t = c.decorateEnum(t).name;
          }
          return function (o, r) {
            c.decorateType(o.constructor).add(new m(r, e, t, n, {
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
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (e, t, n, i, o) {
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
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (e, t, n, i, o) {
        n.exports = _;
        var r = t("./object");
        ((_.prototype = Object.create(r.prototype)).constructor = _).className = "Namespace";
        var a;
        var s;
        var l;
        var c = t("./field");
        var u = t("./util");
        var m = t("./oneof");
        function p(e, t) {
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
        _.arrayToJSON = p;
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
            return this._nestedArray || (this._nestedArray = u.toArray(this.nested));
          }
        });
        _.prototype.toJSON = function (e) {
          return u.toObject(["options", this.options, "nested", p(this.nestedArray, e)]);
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
          if (!(e instanceof c && undefined !== e.extend || e instanceof a || e instanceof m || e instanceof l || e instanceof s || e instanceof _)) {
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
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (e, t, n, i, o) {
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
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (e, t, n, i, o) {
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
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (e, t, n, i, o) {
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
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./rpc": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (e, t, n, i, o) {
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
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (e, t, n, i, o) {
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
            t("case %i: {", i.id);
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
        var r = t("./enum");
        var a = t("./types");
        var s = t("./util");
        n.exports;
      }, function () {
        return {
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (e, t, n, i, o) {
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
                var m = a.safeProp(r.partOf.name);
                if (1 === i[r.partOf.name]) {
                  t("if(p%s===1)", m)("return%j", r.partOf.name + ": multiple values");
                }
                i[r.partOf.name] = 1;
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
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (e, t, n, i, o) {
        var a = t("./enum");
        var s = t("./util");
        function l(e, t, n, i) {
          var o = false;
          if (t.resolvedType) {
            if (t.resolvedType instanceof a) {
              e("switch(d%s){", i);
              var r = t.resolvedType.values;
              var s = Object.keys(r);
              for (var l = 0; l < s.length; ++l) {
                if (!(r[s[l]] !== t.typeDefault || o)) {
                  e("default:")("if(typeof(d%s)===\"number\"){m%s=d%s;break}", i, i, i);
                  if (!t.repeated) {
                    e("break");
                  }
                  o = true;
                }
                e("case%j:", s[l])("case %i:", r[s[l]])("m%s=%j", i, r[s[l]])("break");
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
              var m = s.safeProp(u.name);
              if (u.resolvedType instanceof a) {
                n("d%s=o.enums===String?%j:%j", m, u.resolvedType.valuesById[u.typeDefault], u.typeDefault);
              } else if (u.long) {
                n("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", m)("}else")("d%s=o.longs===String?%j:%i", m, u.typeDefault.toString(), u.typeDefault.toNumber());
              } else if (u.bytes) {
                var p = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
                n("if(o.bytes===String)d%s=%j", m, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", m, p)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", m, m)("}");
              } else {
                n("d%s=%j", m, u.typeDefault);
              }
            }
            n("}");
          }
          var _ = false;
          for (l = 0; l < t.length; ++l) {
            u = t[l];
            var d = e._fieldsArray.indexOf(u);
            m = s.safeProp(u.name);
            if (u.map) {
              if (!_) {
                _ = true;
                n("var ks2");
              }
              n("if(m%s&&(ks2=Object.keys(m%s)).length){", m, m)("d%s={}", m)("for(var j=0;j<ks2.length;++j){");
              c(n, u, d, m + "[ks2[j]]")("}");
            } else if (u.repeated) {
              n("if(m%s&&m%s.length){", m, m)("d%s=[]", m)("for(var j=0;j<m%s.length;++j){", m);
              c(n, u, d, m + "[j]")("}");
            } else {
              n("if(m%s!=null&&m.hasOwnProperty(%j)){", m, u.name);
              c(n, u, d, m);
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
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (e, t, n, i, o) {
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
              i = n + ("." === e.$type.fullName[0] ? e.$type.fullName.slice(1) : e.$type.fullName);
              r["@type"] = i;
              return r;
            }
            return this.toObject(e, t);
          }
        };
        n.exports;
      }, function () {
        return {
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (e, t, n, i, o) {
        n.exports = b;
        var r = t("./namespace");
        ((b.prototype = Object.create(r.prototype)).constructor = b).className = "Type";
        var a = t("./enum");
        var s = t("./oneof");
        var l = t("./field");
        var c = t("./mapfield");
        var u = t("./service");
        var m = t("./message");
        var p = t("./reader");
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
        function w(e) {
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
              if (!(t instanceof m)) {
                (e.prototype = new m()).constructor = e;
                d.merge(e.prototype, t);
              }
              e.$type = e.prototype.$type = this;
              d.merge(e, m, true);
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
              var m = t.nested[i[o]];
              n.add((undefined !== m.id ? l.fromJSON : undefined !== m.fields ? b.fromJSON : undefined !== m.values ? a.fromJSON : undefined !== m.methods ? u.fromJSON : r.fromJSON)(i[o], m));
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
            return w(this);
          }
          return e instanceof s ? (this.oneofs || (this.oneofs = {}), this.oneofs[e.name] = e, e.onAdd(this), w(this)) : r.prototype.add.call(this, e);
        };
        b.prototype.remove = function (e) {
          if (e instanceof l && undefined === e.extend) {
            if (!this.fields || this.fields[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.fields[e.name];
            e.parent = null;
            e.onRemove(this);
            return w(this);
          }
          if (e instanceof s) {
            if (!this.oneofs || this.oneofs[e.name] !== e) {
              throw Error(e + " is not a member of " + this);
            }
            delete this.oneofs[e.name];
            e.parent = null;
            e.onRemove(this);
            return w(this);
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
            Reader: p,
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
            d.decorateType(t, e);
          };
        };
        n.exports;
      }, function () {
        return {
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./reader": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          "./writer": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          "./encoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./wrappers": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (e, t, n, i, o) {
        n.exports = _;
        var r = t("./namespace");
        ((_.prototype = Object.create(r.prototype)).constructor = _).className = "Root";
        var a;
        var s;
        var l;
        var c = t("./field");
        var u = t("./enum");
        var m = t("./oneof");
        var p = t("./util");
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
        _.prototype.resolvePath = p.path.resolve;
        _.prototype.fetch = p.fetch;
        _.prototype.load = function e(t, n, i) {
          if ("function" == typeof n) {
            i = n;
            n = undefined;
          }
          var o = this;
          if (!i) {
            return p.asPromise(e, o, t, n);
          }
          var r = i === d;
          function a(e, t) {
            if (i) {
              if (r) {
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
              if (p.isString(t) && "{" === t.charAt(0)) {
                t = JSON.parse(t);
              }
              if (p.isString(t)) {
                s.filename = e;
                var i;
                var l = s(t, o, n);
                var u = 0;
                if (l.imports) {
                  for (; u < l.imports.length; ++u) {
                    if (i = c(l.imports[u]) || o.resolvePath(e, l.imports[u])) {
                      m(i);
                    }
                  }
                }
                if (l.weakImports) {
                  for (u = 0; u < l.weakImports.length; ++u) {
                    if (i = c(l.weakImports[u]) || o.resolvePath(e, l.weakImports[u])) {
                      m(i, true);
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
          function m(e, t) {
            e = c(e) || e;
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
                  n = p.fs.readFileSync(e).toString("utf8");
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
          if (p.isString(t)) {
            t = [t];
          }
          var f;
          for (var h = 0; h < t.length; ++h) {
            if (f = o.resolvePath("", t[h])) {
              m(f);
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
          if (!p.isNode) {
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
            if (!n.get(i.name)) {
              i.declaringField = t;
              t.extensionField = i;
              n.add(i);
            }
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
          } else if (!(e instanceof m)) {
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
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (e, t, n, i, o) {
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
        var p = 0;
        s.decorateEnum = function (e) {
          if (e.$type) {
            return e.$type;
          }
          if (!a) {
            a = t("./enum");
          }
          var n = new a("Enum" + p++, e);
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
          "./util/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          "./roots": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          "@protobufjs/codegen": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          "@protobufjs/fetch": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          "@protobufjs/path": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (e, t, n, i, o) {
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
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (e, t, n, i, o) {
        n.exports = l;
        var r = t("./object");
        ((l.prototype = Object.create(r.prototype)).constructor = l).className = "Enum";
        var a = t("./namespace");
        var s = t("./util");
        function l(e, t, n, i, o, a) {
          r.call(this, e, n);
          if (t && "object" != typeof t) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = i;
          this.comments = o || {};
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
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (e, t, n, i, o) {
        n.exports = function (e) {
          var t;
          var n = s.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()");
          var i = e.fieldsArray.slice().sort(s.compareFieldsById);
          for (var o = 0; o < i.length; ++o) {
            var c = i[o].resolve();
            var u = e._fieldsArray.indexOf(c);
            var m = c.resolvedType instanceof r ? "int32" : c.type;
            var p = a.basic[m];
            t = "m" + s.safeProp(c.name);
            if (c.map) {
              n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, c.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (c.id << 3 | 2) >>> 0, 8 | a.mapKey[c.keyType], c.keyType);
              if (undefined === p) {
                n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, t);
              } else {
                n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | p, m, t);
              }
              n("}")("}");
            } else if (c.repeated) {
              n("if(%s!=null&&%s.length){", t, t);
              if (c.packed && undefined !== a.packed[m]) {
                n("w.uint32(%i).fork()", (c.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", m, t)("w.ldelim()");
              } else {
                n("for(var i=0;i<%s.length;++i)", t);
                if (undefined === p) {
                  if (c.resolvedType.group) {
                    n("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t + "[i]", (c.id << 3 | 3) >>> 0, (c.id << 3 | 4) >>> 0);
                  } else {
                    n("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t + "[i]", (c.id << 3 | 2) >>> 0);
                  }
                } else {
                  n("w.uint32(%i).%s(%s[i])", (c.id << 3 | p) >>> 0, m, t);
                }
              }
              n("}");
            } else {
              if (c.optional) {
                n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, c.name);
              }
              if (undefined === p) {
                if (c.resolvedType.group) {
                  n("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, t, (c.id << 3 | 3) >>> 0, (c.id << 3 | 4) >>> 0);
                } else {
                  n("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, t, (c.id << 3 | 2) >>> 0);
                }
              } else {
                n("w.uint32(%i).%s(%s)", (c.id << 3 | p) >>> 0, m, t);
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
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (e, t, n, i, o) {
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
          "./index-minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          "./encoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          "./decoder": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          "./verifier": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          "./converter": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          "./object": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          "./namespace": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./message": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          "./wrappers": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (e, t, n, i, o) {
        n.exports = f;
        var r = /[\s{}=;:[\],'"()<>]/g;
        var a = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var s = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var l = /^ *[*/]+ */;
        var c = /^\s*\*?\/*/;
        var u = /\n/g;
        var m = /\s/;
        var p = /\\(.?)/g;
        var _ = {
          0: "\0",
          r: "\r",
          n: "\n",
          t: "\t"
        };
        function d(e) {
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
        function f(e, t) {
          e = e.toString();
          var n = 0;
          var i = e.length;
          var o = 1;
          var p = 0;
          var _ = {};
          var f = [];
          var h = null;
          function g(n, i, r) {
            var a;
            var s = {
              type: e.charAt(n++),
              lineEmpty: false,
              leading: r
            };
            var m = n - (t ? 2 : 3);
            do {
              if (--m < 0 || "\n" === (a = e.charAt(m))) {
                s.lineEmpty = true;
                break;
              }
            } while (" " === a || "\t" === a);
            var d = e.substring(n, i).split(u);
            for (var f = 0; f < d.length; ++f) {
              d[f] = d[f].replace(t ? c : l, "").trim();
            }
            s.text = d.join("\n").trim();
            _[o] = s;
            p = o;
          }
          function b(t) {
            var n = w(t);
            var i = e.substring(t, n);
            return /^\s*\/\//.test(i);
          }
          function w(e) {
            for (var t = e; t < i && "\n" !== e.charAt(t);) {
              t++;
            }
            return t;
          }
          function F() {
            if (f.length > 0) {
              return f.shift();
            }
            if (h) {
              return function () {
                var t = "'" === h ? s : a;
                t.lastIndex = n - 1;
                var i = t.exec(e);
                if (!i) {
                  throw Error("illegal string (line " + o + ")");
                }
                n = t.lastIndex;
                v(h);
                h = null;
                return d(i[1]);
              }();
            }
            var l;
            var c;
            var u;
            var p;
            var _;
            var F = 0 === n;
            do {
              if (n === i) {
                return null;
              }
              for (l = false; m.test(u = e.charAt(n));) {
                if ("\n" === u) {
                  F = true;
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
                    p = n;
                    _ = false;
                    if (b(n - 1)) {
                      _ = true;
                      do {
                        if ((n = w(n)) === i) {
                          break;
                        }
                        n++;
                        if (!F) {
                          break;
                        }
                      } while (b(n));
                    } else {
                      n = Math.min(i, w(n) + 1);
                    }
                    if (_) {
                      g(p, n, F);
                      F = true;
                    }
                    o++;
                    l = true;
                  } else {
                    for (_ = "/" === e.charAt(p = n + 1); "\n" !== e.charAt(++n);) {
                      if (n === i) {
                        return null;
                      }
                    }
                    ++n;
                    if (_) {
                      g(p, n - 1, F);
                      F = true;
                    }
                    ++o;
                    l = true;
                  }
                } else {
                  if ("*" !== (u = e.charAt(n))) {
                    return "/";
                  }
                  p = n + 1;
                  _ = t || "*" === e.charAt(p);
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
                    g(p, n - 2, F);
                    F = true;
                  }
                  l = true;
                }
              }
            } while (l);
            var R = n;
            r.lastIndex = 0;
            if (!r.test(e.charAt(R++))) {
              for (; R < i && !r.test(e.charAt(R));) {
                ++R;
              }
            }
            var $ = e.substring(n, n = R);
            if (!("\"" !== $ && "'" !== $)) {
              h = $;
            }
            return $;
          }
          function v(e) {
            f.push(e);
          }
          function R() {
            if (!f.length) {
              var e = F();
              if (null === e) {
                return null;
              }
              v(e);
            }
            return f[0];
          }
          return Object.defineProperty({
            next: F,
            peek: R,
            push: v,
            skip: function (e, t) {
              var n = R();
              if (n === e) {
                F();
                return true;
              }
              if (!t) {
                throw Error("illegal " + ("token '" + n + "', '" + e + "' expected") + " (line " + o + ")");
              }
              return false;
            },
            cmnt: function (e) {
              var n;
              var i = null;
              if (undefined === e) {
                n = _[o - 1];
                delete _[o - 1];
                if (n && (t || "*" === n.type || n.lineEmpty)) {
                  i = n.leading ? n.text : null;
                }
              } else {
                if (p < e) {
                  R();
                }
                n = _[e];
                delete _[e];
                if (!(!n || n.lineEmpty || !t && "/" !== n.type)) {
                  i = n.leading ? null : n.text;
                }
              }
              return i;
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
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (e, t, n, i, o) {
        n.exports = C;
        C.filename = null;
        C.defaults = {
          keepCase: false
        };
        var r = t("./tokenize");
        var a = t("./root");
        var s = t("./type");
        var l = t("./field");
        var c = t("./mapfield");
        var u = t("./oneof");
        var m = t("./enum");
        var p = t("./service");
        var _ = t("./method");
        var d = t("./types");
        var f = t("./util");
        var h = /^[1-9][0-9]*$/;
        var y = /^-?[1-9][0-9]*$/;
        var S = /^0[x][0-9a-fA-F]+$/;
        var g = /^-?0[x][0-9a-fA-F]+$/;
        var b = /^0[0-7]+$/;
        var w = /^-?0[0-7]+$/;
        var F = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var v = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var R = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var $ = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function C(e, t, n) {
          if (!(t instanceof a)) {
            n = t;
            t = new a();
          }
          if (!n) {
            n = C.defaults;
          }
          var i;
          var o;
          var T;
          var P;
          var N;
          var A = n.preferTrailingComment || false;
          var I = r(e, n.alternateCommentMode || false);
          var L = I.next;
          var D = I.push;
          var E = I.peek;
          var G = I.skip;
          var B = I.cmnt;
          var k = true;
          var O = false;
          var W = t;
          var x = n.keepCase ? function (e) {
            return e;
          } : f.camelCase;
          function M(e, t, n) {
            var i = C.filename;
            if (!n) {
              C.filename = null;
            }
            return Error("illegal " + (t || "token") + " '" + e + "' (" + (i ? i + ", " : "") + "line " + I.line + ")");
          }
          function j() {
            var e;
            var t = [];
            do {
              if ("\"" !== (e = L()) && "'" !== e) {
                throw M(e);
              }
              t.push(L());
              G(e);
              e = E();
            } while ("\"" === e || "'" === e);
            return t.join("");
          }
          function V(e) {
            var t = L();
            switch (t) {
              case "'":
              case "\"":
                D(t);
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
                if (F.test(e)) {
                  return n * parseFloat(e);
                }
                throw M(e, "number", t);
              }(t, true);
            } catch (n) {
              if (e && R.test(t)) {
                return t;
              }
              throw M(t, "value");
            }
          }
          function U(e, t) {
            var n;
            var i;
            do {
              if (!t || "\"" !== (n = E()) && "'" !== n) {
                e.push([i = z(L()), G("to", true) ? z(L()) : i]);
              } else {
                e.push(j());
              }
            } while (G(",", true));
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
                throw M(e);
              }
              ee(o, e);
              G(";");
            }, function () {
              ie(o);
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
              throw M(e, "id");
            }
            if (y.test(e)) {
              return parseInt(e, 10);
            }
            if (g.test(e)) {
              return parseInt(e, 16);
            }
            if (w.test(e)) {
              return parseInt(e, 8);
            }
            throw M(e, "id");
          }
          function H() {
            if (undefined !== i) {
              throw M("package");
            }
            i = L();
            if (!R.test(i)) {
              throw M(i, "name");
            }
            W = W.define(i);
            G(";");
          }
          function q() {
            var e;
            var t = E();
            switch (t) {
              case "weak":
                e = T || (T = []);
                L();
                break;
              case "public":
                L();
              default:
                e = o || (o = []);
            }
            t = j();
            G(";");
            e.push(t);
          }
          function K() {
            G("=");
            P = j();
            if (!(O = "proto3" === P) && "proto2" !== P) {
              throw M(P, "syntax");
            }
            G(";");
          }
          function Z(e, t) {
            switch (t) {
              case "option":
                ee(e, t);
                G(";");
                return true;
              case "message":
                Q(e, t);
                return true;
              case "enum":
                Y(e, t);
                return true;
              case "service":
                (function (e, t) {
                  if (!v.test(t = L())) {
                    throw M(t, "service name");
                  }
                  var n = new p(t);
                  J(n, function (e) {
                    if (!Z(n, e)) {
                      if ("rpc" !== e) {
                        throw M(e);
                      }
                      !function (e, t) {
                        var n = B();
                        var i = t;
                        if (!v.test(t = L())) {
                          throw M(t, "name");
                        }
                        var o;
                        var r;
                        var a;
                        var s;
                        var l = t;
                        G("(");
                        if (G("stream", true)) {
                          r = true;
                        }
                        if (!R.test(t = L())) {
                          throw M(t);
                        }
                        o = t;
                        G(")");
                        G("returns");
                        G("(");
                        if (G("stream", true)) {
                          s = true;
                        }
                        if (!R.test(t = L())) {
                          throw M(t);
                        }
                        a = t;
                        G(")");
                        var c = new _(l, i, o, a, r, s);
                        c.comment = n;
                        J(c, function (e) {
                          if ("option" !== e) {
                            throw M(e);
                          }
                          ee(c, e);
                          G(";");
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
                  if (!R.test(t = L())) {
                    throw M(t, "reference");
                  }
                  var n = t;
                  J(null, function (t) {
                    switch (t) {
                      case "required":
                      case "repeated":
                        X(e, t, n);
                        break;
                      case "optional":
                        X(e, O ? "proto3_optional" : "optional", n);
                        break;
                      default:
                        if (!O || !R.test(t)) {
                          throw M(t);
                        }
                        D(t);
                        X(e, "optional", n);
                    }
                  });
                })(e, t);
                return true;
            }
            return false;
          }
          function J(e, t, n) {
            var i = I.line;
            if (e) {
              if ("string" != typeof e.comment) {
                e.comment = B();
              }
              e.filename = C.filename;
            }
            if (G("{", true)) {
              for (var o; "}" !== (o = L());) {
                t(o);
              }
              G(";", true);
            } else {
              if (n) {
                n();
              }
              G(";");
              if (e && ("string" != typeof e.comment || A)) {
                e.comment = B(i) || e.comment;
              }
            }
          }
          function Q(e, t) {
            if (!v.test(t = L())) {
              throw M(t, "type name");
            }
            var n = new s(t);
            J(n, function (e) {
              if (!Z(n, e)) {
                switch (e) {
                  case "map":
                    !function (e) {
                      G("<");
                      var t = L();
                      if (undefined === d.mapKey[t]) {
                        throw M(t, "type");
                      }
                      G(",");
                      var n = L();
                      if (!R.test(n)) {
                        throw M(n, "type");
                      }
                      G(">");
                      var i = L();
                      if (!v.test(i)) {
                        throw M(i, "name");
                      }
                      G("=");
                      var o = new c(x(i), z(L()), t, n);
                      J(o, function (e) {
                        if ("option" !== e) {
                          throw M(e);
                        }
                        ee(o, e);
                        G(";");
                      }, function () {
                        ie(o);
                      });
                      e.add(o);
                    }(n);
                    break;
                  case "required":
                  case "repeated":
                    X(n, e);
                    break;
                  case "optional":
                    X(n, O ? "proto3_optional" : "optional");
                    break;
                  case "oneof":
                    !function (e, t) {
                      if (!v.test(t = L())) {
                        throw M(t, "name");
                      }
                      var n = new u(x(t));
                      J(n, function (e) {
                        if ("option" === e) {
                          ee(n, e);
                          G(";");
                        } else {
                          D(e);
                          X(n, "optional");
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
                    if (!O || !R.test(e)) {
                      throw M(e);
                    }
                    D(e);
                    X(n, "optional");
                }
              }
            });
            e.add(n);
          }
          function X(e, t, n) {
            var i = L();
            if ("group" !== i) {
              for (; i.endsWith(".") || E().startsWith(".");) {
                i += L();
              }
              if (!R.test(i)) {
                throw M(i, "type");
              }
              var o = L();
              if (!v.test(o)) {
                throw M(o, "name");
              }
              o = x(o);
              G("=");
              var r = new l(o, z(L()), i, t, n);
              J(r, function (e) {
                if ("option" !== e) {
                  throw M(e);
                }
                ee(r, e);
                G(";");
              }, function () {
                ie(r);
              });
              if ("proto3_optional" === t) {
                var a = new u("_" + o);
                r.setOption("proto3_optional", true);
                a.add(r);
                e.add(a);
              } else {
                e.add(r);
              }
              if (!(O || !r.repeated || undefined === d.packed[i] && undefined !== d.basic[i])) {
                r.setOption("packed", false, true);
              }
            } else {
              !function (e, t) {
                var n = L();
                if (!v.test(n)) {
                  throw M(n, "name");
                }
                var i = f.lcFirst(n);
                if (n === i) {
                  n = f.ucFirst(n);
                }
                G("=");
                var o = z(L());
                var r = new s(n);
                r.group = true;
                var a = new l(i, o, n, t);
                a.filename = C.filename;
                J(r, function (e) {
                  switch (e) {
                    case "option":
                      ee(r, e);
                      G(";");
                      break;
                    case "required":
                    case "repeated":
                      X(r, e);
                      break;
                    case "optional":
                      X(r, O ? "proto3_optional" : "optional");
                      break;
                    case "message":
                      Q(r, e);
                      break;
                    case "enum":
                      Y(r, e);
                      break;
                    default:
                      throw M(e);
                  }
                });
                e.add(r).add(a);
              }(e, t);
            }
          }
          function Y(e, t) {
            if (!v.test(t = L())) {
              throw M(t, "name");
            }
            var n = new m(t);
            J(n, function (e) {
              switch (e) {
                case "option":
                  ee(n, e);
                  G(";");
                  break;
                case "reserved":
                  U(n.reserved || (n.reserved = []), true);
                  break;
                default:
                  !function (e, t) {
                    if (!v.test(t)) {
                      throw M(t, "name");
                    }
                    G("=");
                    var n = z(L(), true);
                    var i = {
                      options: undefined,
                      setOption: function (e, t) {
                        if (undefined === this.options) {
                          this.options = {};
                        }
                        this.options[e] = t;
                      }
                    };
                    J(i, function (e) {
                      if ("option" !== e) {
                        throw M(e);
                      }
                      ee(i, e);
                      G(";");
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
            var n = G("(", true);
            if (!R.test(t = L())) {
              throw M(t, "name");
            }
            var i;
            var o = t;
            var r = o;
            if (n) {
              G(")");
              r = o = "(" + o + ")";
              t = E();
              if ($.test(t)) {
                i = t.slice(1);
                o += t;
                L();
              }
            }
            G("=");
            (function (e, t, n, i) {
              if (e.setParsedOption) {
                e.setParsedOption(t, n, i);
              }
            })(e, r, te(e, o), i);
          }
          function te(e, t) {
            if (G("{", true)) {
              for (var n = {}; !G("}", true);) {
                if (!v.test(N = L())) {
                  throw M(N, "name");
                }
                if (null === N) {
                  throw M(N, "end of input");
                }
                var i;
                var o = N;
                G(":", true);
                if ("{" === E()) {
                  i = te(e, t + "." + N);
                } else if ("[" === E()) {
                  var r;
                  i = [];
                  if (G("[", true)) {
                    do {
                      r = V(true);
                      i.push(r);
                    } while (G(",", true));
                    G("]");
                    if (undefined !== r) {
                      ne(e, t + "." + N, r);
                    }
                  }
                } else {
                  i = V(true);
                  ne(e, t + "." + N, i);
                }
                var a = n[o];
                if (a) {
                  i = [].concat(a).concat(i);
                }
                n[o] = i;
                G(",", true);
                G(";", true);
              }
              return n;
            }
            var s = V(true);
            ne(e, t, s);
            return s;
          }
          function ne(e, t, n) {
            if (e.setOption) {
              e.setOption(t, n);
            }
          }
          function ie(e) {
            if (G("[", true)) {
              do {
                ee(e, "option");
              } while (G(",", true));
              G("]");
            }
            return e;
          }
          for (; null !== (N = L());) {
            switch (N) {
              case "package":
                if (!k) {
                  throw M(N);
                }
                H();
                break;
              case "import":
                if (!k) {
                  throw M(N);
                }
                q();
                break;
              case "syntax":
                if (!k) {
                  throw M(N);
                }
                K();
                break;
              case "option":
                ee(W, N);
                G(";");
                break;
              default:
                if (Z(W, N)) {
                  k = false;
                  continue;
                }
                throw M(N);
            }
          }
          C.filename = null;
          return {
            package: i,
            imports: o,
            weakImports: T,
            syntax: P,
            root: t
          };
        }
        n.exports;
      }, function () {
        return {
          "./tokenize": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./root": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          "./type": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          "./field": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          "./mapfield": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          "./oneof": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          "./enum": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          "./service": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          "./method": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          "./types": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          "./util": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (e, t, n, i, o) {
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
      var _cjsExports;
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (e, t, n, i, o) {
        var r = n.exports = t("./index-light");
        r.build = "full";
        r.tokenize = t("./tokenize");
        r.parse = t("./parse");
        r.common = t("./common");
        r.Root._configure(r.Type, r.parse, r.common);
        n.exports;
      }, function () {
        return {
          "./index-light": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          "./tokenize": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          "./parse": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          "./common": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/index.js", function (e, t, n, i, o) {
        n.exports = t("./src/index");
        _cjsExports = n.exports;
      }, function () {
        return {
          "./src/index": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      loader.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/index.js");
      var _cjsExports$1;
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (e, t, n, i, o) {
        n.exports = t("./src/index-minimal");
        n.exports;
      }, function () {
        return {
          "./src/index-minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _dec$x;
      var _dec2$h;
      var _dec3$f;
      var _class2$h;
      var _descriptor$h;
      var _descriptor2$f;
      loader.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@old-rd1/bigbite-proto/biteProto.js", function (e, t, n, i, o) {
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
            e.prototype.Index = 0;
            e.prototype.Symbol = 0;
            e.prototype.Count = 0;
            e.prototype.Win = 0;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.Index && Object.hasOwnProperty.call(e, "Index")) {
                t.uint32(8).int32(e.Index);
              }
              if (null != e.Symbol && Object.hasOwnProperty.call(e, "Symbol")) {
                t.uint32(16).int32(e.Symbol);
              }
              if (null != e.Count && Object.hasOwnProperty.call(e, "Count")) {
                t.uint32(24).int32(e.Count);
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
              for (var i = new u.biteProto.AwardData(); e.pos < n;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    i.Index = e.int32();
                    break;
                  case 2:
                    i.Symbol = e.int32();
                    break;
                  case 3:
                    i.Count = e.int32();
                    break;
                  case 4:
                    i.Win = e.double();
                    break;
                  default:
                    e.skipType(7 & o);
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
              return "object" != typeof e || null === e ? "object expected" : null != e.Index && e.hasOwnProperty("Index") && !c.isInteger(e.Index) ? "Index: integer expected" : null != e.Symbol && e.hasOwnProperty("Symbol") && !c.isInteger(e.Symbol) ? "Symbol: integer expected" : null != e.Count && e.hasOwnProperty("Count") && !c.isInteger(e.Count) ? "Count: integer expected" : null != e.Win && e.hasOwnProperty("Win") && "number" != typeof e.Win ? "Win: number expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.biteProto.AwardData) {
                return e;
              }
              var t = new u.biteProto.AwardData();
              if (null != e.Index) {
                t.Index = 0 | e.Index;
              }
              if (null != e.Symbol) {
                t.Symbol = 0 | e.Symbol;
              }
              if (null != e.Count) {
                t.Count = 0 | e.Count;
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
                n.Index = 0;
                n.Symbol = 0;
                n.Count = 0;
                n.Win = 0;
              }
              if (null != e.Index && e.hasOwnProperty("Index")) {
                n.Index = e.Index;
              }
              if (null != e.Symbol && e.hasOwnProperty("Symbol")) {
                n.Symbol = e.Symbol;
              }
              if (null != e.Count && e.hasOwnProperty("Count")) {
                n.Count = e.Count;
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
              return e + "/biteProto.AwardData";
            };
            return e;
          }(),
          RoundInfo: function () {
            function e(e) {
              this.FakePlateSymbol = [];
              this.FinalPlateSymbol = [];
              this.AwardDataVec = [];
              this.Bonus = [];
              this.SuperWildPos = [];
              if (e) {
                var t = Object.keys(e);
                for (var n = 0; n < t.length; ++n) {
                  if (null != e[t[n]]) {
                    this[t[n]] = e[t[n]];
                  }
                }
              }
            }
            e.prototype.FakePlateSymbol = c.emptyArray;
            e.prototype.GetFake = false;
            e.prototype.FinalPlateSymbol = c.emptyArray;
            e.prototype.LineWin = 0;
            e.prototype.RoundWin = 0;
            e.prototype.AwardDataVec = c.emptyArray;
            e.prototype.AwardTypeFlag = 0;
            e.prototype.ScatterCount = 0;
            e.prototype.AddRound = 0;
            e.prototype.Bonus = c.emptyArray;
            e.prototype.FishMult = 0;
            e.prototype.FishWin = 0;
            e.prototype.TotalWildCount = 0;
            e.prototype.NowLevel = 0;
            e.prototype.NowFreeRemainRound = 0;
            e.prototype.NowFreeTotalRound = 0;
            e.prototype.FreeTotalRound = 0;
            e.prototype.IsInReSpin = false;
            e.prototype.SuperWildPos = c.emptyArray;
            e.prototype.NextLevel = 0;
            e.prototype.MaxFlag = false;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.FakePlateSymbol && e.FakePlateSymbol.length) {
                for (var n = 0; n < e.FakePlateSymbol.length; ++n) {
                  u.biteProto.Column.encode(e.FakePlateSymbol[n], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.GetFake && Object.hasOwnProperty.call(e, "GetFake")) {
                t.uint32(16).bool(e.GetFake);
              }
              if (null != e.FinalPlateSymbol && e.FinalPlateSymbol.length) {
                for (n = 0; n < e.FinalPlateSymbol.length; ++n) {
                  u.biteProto.Column.encode(e.FinalPlateSymbol[n], t.uint32(26).fork()).ldelim();
                }
              }
              if (null != e.LineWin && Object.hasOwnProperty.call(e, "LineWin")) {
                t.uint32(33).double(e.LineWin);
              }
              if (null != e.RoundWin && Object.hasOwnProperty.call(e, "RoundWin")) {
                t.uint32(41).double(e.RoundWin);
              }
              if (null != e.AwardDataVec && e.AwardDataVec.length) {
                for (n = 0; n < e.AwardDataVec.length; ++n) {
                  u.biteProto.AwardData.encode(e.AwardDataVec[n], t.uint32(50).fork()).ldelim();
                }
              }
              if (null != e.AwardTypeFlag && Object.hasOwnProperty.call(e, "AwardTypeFlag")) {
                t.uint32(56).int32(e.AwardTypeFlag);
              }
              if (null != e.ScatterCount && Object.hasOwnProperty.call(e, "ScatterCount")) {
                t.uint32(64).int32(e.ScatterCount);
              }
              if (null != e.AddRound && Object.hasOwnProperty.call(e, "AddRound")) {
                t.uint32(72).int32(e.AddRound);
              }
              if (null != e.Bonus && e.Bonus.length) {
                t.uint32(82).fork();
                for (n = 0; n < e.Bonus.length; ++n) {
                  t.bool(e.Bonus[n]);
                }
                t.ldelim();
              }
              if (null != e.FishMult && Object.hasOwnProperty.call(e, "FishMult")) {
                t.uint32(88).int32(e.FishMult);
              }
              if (null != e.FishWin && Object.hasOwnProperty.call(e, "FishWin")) {
                t.uint32(97).double(e.FishWin);
              }
              if (null != e.TotalWildCount && Object.hasOwnProperty.call(e, "TotalWildCount")) {
                t.uint32(104).int32(e.TotalWildCount);
              }
              if (null != e.NowLevel && Object.hasOwnProperty.call(e, "NowLevel")) {
                t.uint32(112).int32(e.NowLevel);
              }
              if (null != e.NowFreeRemainRound && Object.hasOwnProperty.call(e, "NowFreeRemainRound")) {
                t.uint32(120).int32(e.NowFreeRemainRound);
              }
              if (null != e.NowFreeTotalRound && Object.hasOwnProperty.call(e, "NowFreeTotalRound")) {
                t.uint32(128).int32(e.NowFreeTotalRound);
              }
              if (null != e.FreeTotalRound && Object.hasOwnProperty.call(e, "FreeTotalRound")) {
                t.uint32(136).int32(e.FreeTotalRound);
              }
              if (null != e.IsInReSpin && Object.hasOwnProperty.call(e, "IsInReSpin")) {
                t.uint32(144).bool(e.IsInReSpin);
              }
              if (null != e.SuperWildPos && e.SuperWildPos.length) {
                t.uint32(154).fork();
                for (n = 0; n < e.SuperWildPos.length; ++n) {
                  t.int32(e.SuperWildPos[n]);
                }
                t.ldelim();
              }
              if (null != e.NextLevel && Object.hasOwnProperty.call(e, "NextLevel")) {
                t.uint32(160).int32(e.NextLevel);
              }
              if (null != e.MaxFlag && Object.hasOwnProperty.call(e, "MaxFlag")) {
                t.uint32(168).bool(e.MaxFlag);
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
              for (var i = new u.biteProto.RoundInfo(); e.pos < n;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (!(i.FakePlateSymbol && i.FakePlateSymbol.length)) {
                      i.FakePlateSymbol = [];
                    }
                    i.FakePlateSymbol.push(u.biteProto.Column.decode(e, e.uint32()));
                    break;
                  case 2:
                    i.GetFake = e.bool();
                    break;
                  case 3:
                    if (!(i.FinalPlateSymbol && i.FinalPlateSymbol.length)) {
                      i.FinalPlateSymbol = [];
                    }
                    i.FinalPlateSymbol.push(u.biteProto.Column.decode(e, e.uint32()));
                    break;
                  case 4:
                    i.LineWin = e.double();
                    break;
                  case 5:
                    i.RoundWin = e.double();
                    break;
                  case 6:
                    if (!(i.AwardDataVec && i.AwardDataVec.length)) {
                      i.AwardDataVec = [];
                    }
                    i.AwardDataVec.push(u.biteProto.AwardData.decode(e, e.uint32()));
                    break;
                  case 7:
                    i.AwardTypeFlag = e.int32();
                    break;
                  case 8:
                    i.ScatterCount = e.int32();
                    break;
                  case 9:
                    i.AddRound = e.int32();
                    break;
                  case 10:
                    if (!(i.Bonus && i.Bonus.length)) {
                      i.Bonus = [];
                    }
                    if (2 == (7 & o)) {
                      for (var r = e.uint32() + e.pos; e.pos < r;) {
                        i.Bonus.push(e.bool());
                      }
                    } else {
                      i.Bonus.push(e.bool());
                    }
                    break;
                  case 11:
                    i.FishMult = e.int32();
                    break;
                  case 12:
                    i.FishWin = e.double();
                    break;
                  case 13:
                    i.TotalWildCount = e.int32();
                    break;
                  case 14:
                    i.NowLevel = e.int32();
                    break;
                  case 15:
                    i.NowFreeRemainRound = e.int32();
                    break;
                  case 16:
                    i.NowFreeTotalRound = e.int32();
                    break;
                  case 17:
                    i.FreeTotalRound = e.int32();
                    break;
                  case 18:
                    i.IsInReSpin = e.bool();
                    break;
                  case 19:
                    if (!(i.SuperWildPos && i.SuperWildPos.length)) {
                      i.SuperWildPos = [];
                    }
                    if (2 == (7 & o)) {
                      for (r = e.uint32() + e.pos; e.pos < r;) {
                        i.SuperWildPos.push(e.int32());
                      }
                    } else {
                      i.SuperWildPos.push(e.int32());
                    }
                    break;
                  case 20:
                    i.NextLevel = e.int32();
                    break;
                  case 21:
                    i.MaxFlag = e.bool();
                    break;
                  default:
                    e.skipType(7 & o);
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
              if (null != e.FakePlateSymbol && e.hasOwnProperty("FakePlateSymbol")) {
                if (!Array.isArray(e.FakePlateSymbol)) {
                  return "FakePlateSymbol: array expected";
                }
                for (var t = 0; t < e.FakePlateSymbol.length; ++t) {
                  if (n = u.biteProto.Column.verify(e.FakePlateSymbol[t])) {
                    return "FakePlateSymbol." + n;
                  }
                }
              }
              if (null != e.GetFake && e.hasOwnProperty("GetFake") && "boolean" != typeof e.GetFake) {
                return "GetFake: boolean expected";
              }
              if (null != e.FinalPlateSymbol && e.hasOwnProperty("FinalPlateSymbol")) {
                if (!Array.isArray(e.FinalPlateSymbol)) {
                  return "FinalPlateSymbol: array expected";
                }
                for (t = 0; t < e.FinalPlateSymbol.length; ++t) {
                  if (n = u.biteProto.Column.verify(e.FinalPlateSymbol[t])) {
                    return "FinalPlateSymbol." + n;
                  }
                }
              }
              if (null != e.LineWin && e.hasOwnProperty("LineWin") && "number" != typeof e.LineWin) {
                return "LineWin: number expected";
              }
              if (null != e.RoundWin && e.hasOwnProperty("RoundWin") && "number" != typeof e.RoundWin) {
                return "RoundWin: number expected";
              }
              if (null != e.AwardDataVec && e.hasOwnProperty("AwardDataVec")) {
                if (!Array.isArray(e.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (t = 0; t < e.AwardDataVec.length; ++t) {
                  var n;
                  if (n = u.biteProto.AwardData.verify(e.AwardDataVec[t])) {
                    return "AwardDataVec." + n;
                  }
                }
              }
              if (null != e.AwardTypeFlag && e.hasOwnProperty("AwardTypeFlag") && !c.isInteger(e.AwardTypeFlag)) {
                return "AwardTypeFlag: integer expected";
              }
              if (null != e.ScatterCount && e.hasOwnProperty("ScatterCount") && !c.isInteger(e.ScatterCount)) {
                return "ScatterCount: integer expected";
              }
              if (null != e.AddRound && e.hasOwnProperty("AddRound") && !c.isInteger(e.AddRound)) {
                return "AddRound: integer expected";
              }
              if (null != e.Bonus && e.hasOwnProperty("Bonus")) {
                if (!Array.isArray(e.Bonus)) {
                  return "Bonus: array expected";
                }
                for (t = 0; t < e.Bonus.length; ++t) {
                  if ("boolean" != typeof e.Bonus[t]) {
                    return "Bonus: boolean[] expected";
                  }
                }
              }
              if (null != e.FishMult && e.hasOwnProperty("FishMult") && !c.isInteger(e.FishMult)) {
                return "FishMult: integer expected";
              }
              if (null != e.FishWin && e.hasOwnProperty("FishWin") && "number" != typeof e.FishWin) {
                return "FishWin: number expected";
              }
              if (null != e.TotalWildCount && e.hasOwnProperty("TotalWildCount") && !c.isInteger(e.TotalWildCount)) {
                return "TotalWildCount: integer expected";
              }
              if (null != e.NowLevel && e.hasOwnProperty("NowLevel") && !c.isInteger(e.NowLevel)) {
                return "NowLevel: integer expected";
              }
              if (null != e.NowFreeRemainRound && e.hasOwnProperty("NowFreeRemainRound") && !c.isInteger(e.NowFreeRemainRound)) {
                return "NowFreeRemainRound: integer expected";
              }
              if (null != e.NowFreeTotalRound && e.hasOwnProperty("NowFreeTotalRound") && !c.isInteger(e.NowFreeTotalRound)) {
                return "NowFreeTotalRound: integer expected";
              }
              if (null != e.FreeTotalRound && e.hasOwnProperty("FreeTotalRound") && !c.isInteger(e.FreeTotalRound)) {
                return "FreeTotalRound: integer expected";
              }
              if (null != e.IsInReSpin && e.hasOwnProperty("IsInReSpin") && "boolean" != typeof e.IsInReSpin) {
                return "IsInReSpin: boolean expected";
              }
              if (null != e.SuperWildPos && e.hasOwnProperty("SuperWildPos")) {
                if (!Array.isArray(e.SuperWildPos)) {
                  return "SuperWildPos: array expected";
                }
                for (t = 0; t < e.SuperWildPos.length; ++t) {
                  if (!c.isInteger(e.SuperWildPos[t])) {
                    return "SuperWildPos: integer[] expected";
                  }
                }
              }
              return null != e.NextLevel && e.hasOwnProperty("NextLevel") && !c.isInteger(e.NextLevel) ? "NextLevel: integer expected" : null != e.MaxFlag && e.hasOwnProperty("MaxFlag") && "boolean" != typeof e.MaxFlag ? "MaxFlag: boolean expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.biteProto.RoundInfo) {
                return e;
              }
              var t = new u.biteProto.RoundInfo();
              if (e.FakePlateSymbol) {
                if (!Array.isArray(e.FakePlateSymbol)) {
                  throw TypeError(".biteProto.RoundInfo.FakePlateSymbol: array expected");
                }
                t.FakePlateSymbol = [];
                for (var n = 0; n < e.FakePlateSymbol.length; ++n) {
                  if ("object" != typeof e.FakePlateSymbol[n]) {
                    throw TypeError(".biteProto.RoundInfo.FakePlateSymbol: object expected");
                  }
                  t.FakePlateSymbol[n] = u.biteProto.Column.fromObject(e.FakePlateSymbol[n]);
                }
              }
              if (null != e.GetFake) {
                t.GetFake = Boolean(e.GetFake);
              }
              if (e.FinalPlateSymbol) {
                if (!Array.isArray(e.FinalPlateSymbol)) {
                  throw TypeError(".biteProto.RoundInfo.FinalPlateSymbol: array expected");
                }
                t.FinalPlateSymbol = [];
                for (n = 0; n < e.FinalPlateSymbol.length; ++n) {
                  if ("object" != typeof e.FinalPlateSymbol[n]) {
                    throw TypeError(".biteProto.RoundInfo.FinalPlateSymbol: object expected");
                  }
                  t.FinalPlateSymbol[n] = u.biteProto.Column.fromObject(e.FinalPlateSymbol[n]);
                }
              }
              if (null != e.LineWin) {
                t.LineWin = Number(e.LineWin);
              }
              if (null != e.RoundWin) {
                t.RoundWin = Number(e.RoundWin);
              }
              if (e.AwardDataVec) {
                if (!Array.isArray(e.AwardDataVec)) {
                  throw TypeError(".biteProto.RoundInfo.AwardDataVec: array expected");
                }
                t.AwardDataVec = [];
                for (n = 0; n < e.AwardDataVec.length; ++n) {
                  if ("object" != typeof e.AwardDataVec[n]) {
                    throw TypeError(".biteProto.RoundInfo.AwardDataVec: object expected");
                  }
                  t.AwardDataVec[n] = u.biteProto.AwardData.fromObject(e.AwardDataVec[n]);
                }
              }
              if (null != e.AwardTypeFlag) {
                t.AwardTypeFlag = 0 | e.AwardTypeFlag;
              }
              if (null != e.ScatterCount) {
                t.ScatterCount = 0 | e.ScatterCount;
              }
              if (null != e.AddRound) {
                t.AddRound = 0 | e.AddRound;
              }
              if (e.Bonus) {
                if (!Array.isArray(e.Bonus)) {
                  throw TypeError(".biteProto.RoundInfo.Bonus: array expected");
                }
                t.Bonus = [];
                for (n = 0; n < e.Bonus.length; ++n) {
                  t.Bonus[n] = Boolean(e.Bonus[n]);
                }
              }
              if (null != e.FishMult) {
                t.FishMult = 0 | e.FishMult;
              }
              if (null != e.FishWin) {
                t.FishWin = Number(e.FishWin);
              }
              if (null != e.TotalWildCount) {
                t.TotalWildCount = 0 | e.TotalWildCount;
              }
              if (null != e.NowLevel) {
                t.NowLevel = 0 | e.NowLevel;
              }
              if (null != e.NowFreeRemainRound) {
                t.NowFreeRemainRound = 0 | e.NowFreeRemainRound;
              }
              if (null != e.NowFreeTotalRound) {
                t.NowFreeTotalRound = 0 | e.NowFreeTotalRound;
              }
              if (null != e.FreeTotalRound) {
                t.FreeTotalRound = 0 | e.FreeTotalRound;
              }
              if (null != e.IsInReSpin) {
                t.IsInReSpin = Boolean(e.IsInReSpin);
              }
              if (e.SuperWildPos) {
                if (!Array.isArray(e.SuperWildPos)) {
                  throw TypeError(".biteProto.RoundInfo.SuperWildPos: array expected");
                }
                t.SuperWildPos = [];
                for (n = 0; n < e.SuperWildPos.length; ++n) {
                  t.SuperWildPos[n] = 0 | e.SuperWildPos[n];
                }
              }
              if (null != e.NextLevel) {
                t.NextLevel = 0 | e.NextLevel;
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
              var n = {};
              if (t.arrays || t.defaults) {
                n.FakePlateSymbol = [];
                n.FinalPlateSymbol = [];
                n.AwardDataVec = [];
                n.Bonus = [];
                n.SuperWildPos = [];
              }
              if (t.defaults) {
                n.GetFake = false;
                n.LineWin = 0;
                n.RoundWin = 0;
                n.AwardTypeFlag = 0;
                n.ScatterCount = 0;
                n.AddRound = 0;
                n.FishMult = 0;
                n.FishWin = 0;
                n.TotalWildCount = 0;
                n.NowLevel = 0;
                n.NowFreeRemainRound = 0;
                n.NowFreeTotalRound = 0;
                n.FreeTotalRound = 0;
                n.IsInReSpin = false;
                n.NextLevel = 0;
                n.MaxFlag = false;
              }
              if (e.FakePlateSymbol && e.FakePlateSymbol.length) {
                n.FakePlateSymbol = [];
                for (var i = 0; i < e.FakePlateSymbol.length; ++i) {
                  n.FakePlateSymbol[i] = u.biteProto.Column.toObject(e.FakePlateSymbol[i], t);
                }
              }
              if (null != e.GetFake && e.hasOwnProperty("GetFake")) {
                n.GetFake = e.GetFake;
              }
              if (e.FinalPlateSymbol && e.FinalPlateSymbol.length) {
                n.FinalPlateSymbol = [];
                for (i = 0; i < e.FinalPlateSymbol.length; ++i) {
                  n.FinalPlateSymbol[i] = u.biteProto.Column.toObject(e.FinalPlateSymbol[i], t);
                }
              }
              if (null != e.LineWin && e.hasOwnProperty("LineWin")) {
                n.LineWin = t.json && !isFinite(e.LineWin) ? String(e.LineWin) : e.LineWin;
              }
              if (null != e.RoundWin && e.hasOwnProperty("RoundWin")) {
                n.RoundWin = t.json && !isFinite(e.RoundWin) ? String(e.RoundWin) : e.RoundWin;
              }
              if (e.AwardDataVec && e.AwardDataVec.length) {
                n.AwardDataVec = [];
                for (i = 0; i < e.AwardDataVec.length; ++i) {
                  n.AwardDataVec[i] = u.biteProto.AwardData.toObject(e.AwardDataVec[i], t);
                }
              }
              if (null != e.AwardTypeFlag && e.hasOwnProperty("AwardTypeFlag")) {
                n.AwardTypeFlag = e.AwardTypeFlag;
              }
              if (null != e.ScatterCount && e.hasOwnProperty("ScatterCount")) {
                n.ScatterCount = e.ScatterCount;
              }
              if (null != e.AddRound && e.hasOwnProperty("AddRound")) {
                n.AddRound = e.AddRound;
              }
              if (e.Bonus && e.Bonus.length) {
                n.Bonus = [];
                for (i = 0; i < e.Bonus.length; ++i) {
                  n.Bonus[i] = e.Bonus[i];
                }
              }
              if (null != e.FishMult && e.hasOwnProperty("FishMult")) {
                n.FishMult = e.FishMult;
              }
              if (null != e.FishWin && e.hasOwnProperty("FishWin")) {
                n.FishWin = t.json && !isFinite(e.FishWin) ? String(e.FishWin) : e.FishWin;
              }
              if (null != e.TotalWildCount && e.hasOwnProperty("TotalWildCount")) {
                n.TotalWildCount = e.TotalWildCount;
              }
              if (null != e.NowLevel && e.hasOwnProperty("NowLevel")) {
                n.NowLevel = e.NowLevel;
              }
              if (null != e.NowFreeRemainRound && e.hasOwnProperty("NowFreeRemainRound")) {
                n.NowFreeRemainRound = e.NowFreeRemainRound;
              }
              if (null != e.NowFreeTotalRound && e.hasOwnProperty("NowFreeTotalRound")) {
                n.NowFreeTotalRound = e.NowFreeTotalRound;
              }
              if (null != e.FreeTotalRound && e.hasOwnProperty("FreeTotalRound")) {
                n.FreeTotalRound = e.FreeTotalRound;
              }
              if (null != e.IsInReSpin && e.hasOwnProperty("IsInReSpin")) {
                n.IsInReSpin = e.IsInReSpin;
              }
              if (e.SuperWildPos && e.SuperWildPos.length) {
                n.SuperWildPos = [];
                for (i = 0; i < e.SuperWildPos.length; ++i) {
                  n.SuperWildPos[i] = e.SuperWildPos[i];
                }
              }
              if (null != e.NextLevel && e.hasOwnProperty("NextLevel")) {
                n.NextLevel = e.NextLevel;
              }
              if (null != e.MaxFlag && e.hasOwnProperty("MaxFlag")) {
                n.MaxFlag = e.MaxFlag;
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
              return e + "/biteProto.RoundInfo";
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
            e.prototype.BuyType = 0;
            e.prototype.TotalWin = 0;
            e.prototype.AckType = 0;
            e.prototype.RTP = 0;
            e.prototype.LID = 0;
            e.prototype.RID = 0;
            e.create = function (t) {
              return new e(t);
            };
            e.encode = function (e, t) {
              if (!t) {
                t = l.create();
              }
              if (null != e.RoundQueue && e.RoundQueue.length) {
                for (var n = 0; n < e.RoundQueue.length; ++n) {
                  u.biteProto.RoundInfo.encode(e.RoundQueue[n], t.uint32(10).fork()).ldelim();
                }
              }
              if (null != e.FreeTotalWin && Object.hasOwnProperty.call(e, "FreeTotalWin")) {
                t.uint32(17).double(e.FreeTotalWin);
              }
              if (null != e.BuyType && Object.hasOwnProperty.call(e, "BuyType")) {
                t.uint32(24).int32(e.BuyType);
              }
              if (null != e.TotalWin && Object.hasOwnProperty.call(e, "TotalWin")) {
                t.uint32(33).double(e.TotalWin);
              }
              if (null != e.AckType && Object.hasOwnProperty.call(e, "AckType")) {
                t.uint32(40).int32(e.AckType);
              }
              if (null != e.RTP && Object.hasOwnProperty.call(e, "RTP")) {
                t.uint32(49).double(e.RTP);
              }
              if (null != e.LID && Object.hasOwnProperty.call(e, "LID")) {
                t.uint32(56).int32(e.LID);
              }
              if (null != e.RID && Object.hasOwnProperty.call(e, "RID")) {
                t.uint32(64).int32(e.RID);
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
              for (var i = new u.biteProto.SpinAck(); e.pos < n;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    if (!(i.RoundQueue && i.RoundQueue.length)) {
                      i.RoundQueue = [];
                    }
                    i.RoundQueue.push(u.biteProto.RoundInfo.decode(e, e.uint32()));
                    break;
                  case 2:
                    i.FreeTotalWin = e.double();
                    break;
                  case 3:
                    i.BuyType = e.int32();
                    break;
                  case 4:
                    i.TotalWin = e.double();
                    break;
                  case 5:
                    i.AckType = e.int32();
                    break;
                  case 6:
                    i.RTP = e.double();
                    break;
                  case 7:
                    i.LID = e.int32();
                    break;
                  case 8:
                    i.RID = e.int32();
                    break;
                  default:
                    e.skipType(7 & o);
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
                  var n = u.biteProto.RoundInfo.verify(e.RoundQueue[t]);
                  if (n) {
                    return "RoundQueue." + n;
                  }
                }
              }
              return null != e.FreeTotalWin && e.hasOwnProperty("FreeTotalWin") && "number" != typeof e.FreeTotalWin ? "FreeTotalWin: number expected" : null != e.BuyType && e.hasOwnProperty("BuyType") && !c.isInteger(e.BuyType) ? "BuyType: integer expected" : null != e.TotalWin && e.hasOwnProperty("TotalWin") && "number" != typeof e.TotalWin ? "TotalWin: number expected" : null != e.AckType && e.hasOwnProperty("AckType") && !c.isInteger(e.AckType) ? "AckType: integer expected" : null != e.RTP && e.hasOwnProperty("RTP") && "number" != typeof e.RTP ? "RTP: number expected" : null != e.LID && e.hasOwnProperty("LID") && !c.isInteger(e.LID) ? "LID: integer expected" : null != e.RID && e.hasOwnProperty("RID") && !c.isInteger(e.RID) ? "RID: integer expected" : null;
            };
            e.fromObject = function (e) {
              if (e instanceof u.biteProto.SpinAck) {
                return e;
              }
              var t = new u.biteProto.SpinAck();
              if (e.RoundQueue) {
                if (!Array.isArray(e.RoundQueue)) {
                  throw TypeError(".biteProto.SpinAck.RoundQueue: array expected");
                }
                t.RoundQueue = [];
                for (var n = 0; n < e.RoundQueue.length; ++n) {
                  if ("object" != typeof e.RoundQueue[n]) {
                    throw TypeError(".biteProto.SpinAck.RoundQueue: object expected");
                  }
                  t.RoundQueue[n] = u.biteProto.RoundInfo.fromObject(e.RoundQueue[n]);
                }
              }
              if (null != e.FreeTotalWin) {
                t.FreeTotalWin = Number(e.FreeTotalWin);
              }
              if (null != e.BuyType) {
                t.BuyType = 0 | e.BuyType;
              }
              if (null != e.TotalWin) {
                t.TotalWin = Number(e.TotalWin);
              }
              if (null != e.AckType) {
                t.AckType = 0 | e.AckType;
              }
              if (null != e.RTP) {
                t.RTP = Number(e.RTP);
              }
              if (null != e.LID) {
                t.LID = 0 | e.LID;
              }
              if (null != e.RID) {
                t.RID = 0 | e.RID;
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
              }
              if (t.defaults) {
                n.FreeTotalWin = 0;
                n.BuyType = 0;
                n.TotalWin = 0;
                n.AckType = 0;
                n.RTP = 0;
                n.LID = 0;
                n.RID = 0;
              }
              if (e.RoundQueue && e.RoundQueue.length) {
                n.RoundQueue = [];
                for (var i = 0; i < e.RoundQueue.length; ++i) {
                  n.RoundQueue[i] = u.biteProto.RoundInfo.toObject(e.RoundQueue[i], t);
                }
              }
              if (null != e.FreeTotalWin && e.hasOwnProperty("FreeTotalWin")) {
                n.FreeTotalWin = t.json && !isFinite(e.FreeTotalWin) ? String(e.FreeTotalWin) : e.FreeTotalWin;
              }
              if (null != e.BuyType && e.hasOwnProperty("BuyType")) {
                n.BuyType = e.BuyType;
              }
              if (null != e.TotalWin && e.hasOwnProperty("TotalWin")) {
                n.TotalWin = t.json && !isFinite(e.TotalWin) ? String(e.TotalWin) : e.TotalWin;
              }
              if (null != e.AckType && e.hasOwnProperty("AckType")) {
                n.AckType = e.AckType;
              }
              if (null != e.RTP && e.hasOwnProperty("RTP")) {
                n.RTP = t.json && !isFinite(e.RTP) ? String(e.RTP) : e.RTP;
              }
              if (null != e.LID && e.hasOwnProperty("LID")) {
                n.LID = e.LID;
              }
              if (null != e.RID && e.hasOwnProperty("RID")) {
                n.RID = e.RID;
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
              return e + "/biteProto.SpinAck";
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
            for (var i = new u.biteProto.Column(); e.pos < n;) {
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
            if (e instanceof u.biteProto.Column) {
              return e;
            }
            var t = new u.biteProto.Column();
            if (e.Col) {
              if (!Array.isArray(e.Col)) {
                throw TypeError(".biteProto.Column.Col: array expected");
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
            return e + "/biteProto.Column";
          };
          return e;
        }();
        u.biteProto = r;
        n.exports = u;
        _cjsExports$1 = n.exports;
      }, function () {
        return {
          "protobufjs/minimal": "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      loader.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/BIGBITE/Client/Thai_UAT/node_modules/@old-rd1/bigbite-proto/biteProto.js");
      cclegacy._RF.push({}, "8e6523sj3pPb4OqcVO+o2c+", "CharacterSpine", undefined);
      var ccclass$x = _decorator.ccclass;
      var property$h = _decorator.property;
      _dec$x = ccclass$x("CharacterSpine");
      _dec2$h = property$h({
        type: sp.Skeleton,
        tooltip: "spine"
      });
      _dec3$f = property$h({
        tooltip: "是否為手&釣桿"
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
          _initializerDefineProperty(t, "m_spine", _descriptor$h, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_isFront", _descriptor2$f, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_playName = null;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
          this.SetMix();
        };
        n.SetMix = function () {
          if (!this.m_isFront) {
            this.m_spine.setMix("FG_Fishing_Idle", "Win", .15);
            this.m_spine.setMix("Idle", "FG_Fishing_Idle", .15);
            this.m_spine.setMix("Idle", "Win", .2);
            this.m_spine.setMix("Win", "Idle", .2);
            this.m_spine.setMix("Win", "Happy", .15);
            this.m_spine.setMix("Happy", "Idle", .15);
          }
          this.m_spine.setMix("FG_Fishing_Idle", "FG_Fishing_Start", .15);
          this.m_spine.setMix("FG_Fishing_Idle2", "FG_Fishing_Start2", .15);
        };
        n.PlayIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_playName != "Idle") {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    this.PlayAnimation("Idle", true);
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
        n.PlayWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("Win", false, 1.333);
                  case 2:
                    if (t) {
                      this.PlayAnimation("Happy", true);
                    } else {
                      this.PlayIdle();
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
        n.PlayNearWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("NearWin_Start");
                  case 2:
                    this.PlayAnimation("NearWin", true);
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
                    return this.PlayAnimation("ScatterWin");
                  case 2:
                    this.PlayFishingIdle();
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
        n.PlayNearWinStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("NearWin_Start");
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
        n.PlayNearWinFail = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("NearWin_Fail");
                  case 2:
                    this.PlayIdle();
                    if (this.m_isFront) {
                      this.node.active = false;
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
        n.PlayScatterWin2 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("ScatterWin2");
                  case 2:
                    this.PlayFishingIdle();
                    if (this.m_isFront) {
                      this.node.active = false;
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
        n.PlayReadyToFishing = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("Idle_to_FGIdle");
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
        n.PlayFishingIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.PlayAnimation("FG_Fishing_Idle", true);
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
        n.PlayFishingStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (0 != t) {
                      e.next = 6;
                      break;
                    }
                    n = this.m_isFront && this.m_gameView.IsLandscape ? "FG_Fishing_Start_L" : "FG_Fishing_Start";
                    e.next = 4;
                    return this.PlayAnimation(n);
                  case 4:
                    e.next = 8;
                    break;
                  case 6:
                    e.next = 8;
                    return this.PlayAnimation("FG_Fishing_Start2");
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
        n.PlayFishingFail = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("FG_Fishing_Fail");
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
        n.PlayFailToIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("FG_End");
                  case 2:
                    e.next = 4;
                    return this.PlayAnimation("FG_End2");
                  case 4:
                    this.PlayIdle();
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
        n.PlayFishingIdleToIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("FGIdle_to_Idle");
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
        n.PlayFishingWin = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = this.m_spine.findAnimation("FG_Fishing_Win").duration;
                    this.PlayAnimation("FG_Fishing_Win");
                    tween(this.node).delay(t).call(function () {
                      if (Game_Define.IsFishing) {
                        n.PlayAnimation("FG_Fishing_Idle2", true);
                      }
                    }).start();
                    e.next = 5;
                    return node$3.Wait(this.m_gameView, .5);
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
        n.OnRotation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (this.m_gameView.IsLandscape) {
                      this.node.getComponent(UIOpacity).opacity = .1;
                    } else {
                      this.node.active = true;
                      this.node.getComponent(UIOpacity).opacity = 255;
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            var o = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    if (undefined === i) {
                      i = 1;
                    }
                    this.m_spine.getState().timeScale = i;
                    this.m_playName = t;
                    e.next = 6;
                    return SpineKit.PlayAnimation(this.m_spine, t, n, 0, function (e) {
                      switch (e) {
                        case "FrogHiding":
                          o.m_gameView.FrogSpine.node.getComponent(UIOpacity).opacity = .1;
                      }
                    });
                  case 6:
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
      _descriptor$h = _applyDecoratedDescriptor(_class2$h.prototype, "m_spine", [_dec2$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$f = _applyDecoratedDescriptor(_class2$h.prototype, "m_isFront", [_dec3$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      });
      var _dec$y;
      var _dec2$i;
      var _class2$i;
      var _descriptor$i;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "19a39E7GSFADqkg7ZTKf/x8", "IntroSpine", undefined);
      var ccclass$y = _decorator.ccclass;
      var property$i = _decorator.property;
      _dec$y = ccclass$y("IntroSpine");
      _dec2$i = property$i({
        type: sp.Skeleton,
        tooltip: "Spine"
      });
      _class2$i = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spine", _descriptor$i, _assertThisInitialized(t));
          t.m_isIntroed = false;
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetIntro = function (e) {
          if (!this.m_isIntroed) {
            var t = e ? "GameIntro_L" : "GameIntro_S";
            this.node.active = true;
            this.PlayAnimation(t);
            this.m_spine.paused = true;
          }
        };
        n.ShowIntro = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = t ? "GameIntro_L" : "GameIntro_S";
                    this.m_isIntroed = true;
                    this.m_spine.paused = false;
                    e.next = 5;
                    return this.PlayAnimation(n);
                  case 5:
                    this.node.active = false;
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
                  case 3:
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
          key: "IsIntroed",
          set: function (e) {
            this.m_isIntroed = e;
          }
        }]);
        return t;
      }(Component);
      _descriptor$i = _applyDecoratedDescriptor(_class2$i.prototype, "m_spine", [_dec2$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$z;
      var _dec2$j;
      var _class2$j;
      var _descriptor$j;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5d94f/jUtZC+phJOCi6YV+F", "FrogSpine", undefined);
      var ccclass$z = _decorator.ccclass;
      var property$j = _decorator.property;
      _dec$z = ccclass$z("FrogSpine");
      _dec2$j = property$j({
        type: sp.Skeleton,
        tooltip: "spine"
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
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.SetMix = function () {};
        n.PlayIdle = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var t;
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    t = Math.floor(3 * Math.random()) + 1;
                    n = 0;
                  case 2:
                    if (!(n < t)) {
                      e.next = 8;
                      break;
                    }
                    e.next = 5;
                    return this.PlayAnimation("Idle");
                  case 5:
                    n++;
                    e.next = 2;
                    break;
                  case 8:
                    e.next = 10;
                    return this.PlayAnimation("Idle2");
                  case 10:
                    this.PlayIdle();
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
                  case 3:
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
      _descriptor$j = _applyDecoratedDescriptor(_class2$j.prototype, "m_spine", [_dec2$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$A;
      var _dec2$k;
      var _dec3$g;
      var _class2$k;
      var _descriptor$k;
      var _descriptor2$g;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "8cabc1Eiy9PabRb3TIwWFX7", "BackGroundSpine", undefined);
      var ccclass$A = _decorator.ccclass;
      var property$k = _decorator.property;
      _dec$A = ccclass$A("BackGroundSpine");
      _dec2$k = property$k({
        type: sp.Skeleton,
        tooltip: "橫版spine"
      });
      _dec3$g = property$k({
        type: sp.Skeleton,
        tooltip: "直版spine"
      });
      _class2$k = function (e) {
        function t() {
          var t;
          var n = arguments.length;
          var i = new Array(n);
          for (var o = 0; o < n; o++) {
            i[o] = arguments[o];
          }
          t = e.call.apply(e, [this].concat(i)) || this;
          _initializerDefineProperty(t, "m_spineL", _descriptor$k, _assertThisInitialized(t));
          _initializerDefineProperty(t, "m_spineS", _descriptor2$g, _assertThisInitialized(t));
          t.m_gameView = null;
          t.m_playName = [null, null];
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.Init = function (e) {
          this.m_gameView = e;
        };
        n.SetMix = function () {};
        n.PlayMG = function () {
          this.PlayAnimation("MG_", true);
        };
        n.PlayFG = function () {
          this.PlayAnimation("FG_Loop_", true);
        };
        n.PlayFGStart = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("FG_Start_", false);
                  case 2:
                    this.PlayAnimation("FG_Loop_", true);
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
        n.PlayFGEnd = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return this.PlayAnimation("FG_End_", false);
                  case 2:
                    this.PlayAnimation("MG_", true);
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
        n.OnRotation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (Game_Define.IsInFG) {
                      this.PlayFG();
                    } else {
                      this.PlayMG();
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    if (!this.m_gameView.IsLandscape) {
                      e.next = 9;
                      break;
                    }
                    if (this.m_playName[0] != t) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return");
                  case 6:
                    this.m_playName[0] = t;
                  case 7:
                    e.next = 14;
                    break;
                  case 9:
                    if (this.m_playName[1] != t) {
                      e.next = 13;
                      break;
                    }
                    return e.abrupt("return");
                  case 13:
                    this.m_playName[1] = t;
                  case 14:
                    i = this.m_gameView.IsLandscape ? this.m_spineL : this.m_spineS;
                    o = this.m_gameView.IsLandscape ? "L" : "S";
                    e.next = 18;
                    return SpineKit.PlayAnimation(i, t + o, n);
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
        _createClass(t, [{
          key: "SpineL",
          get: function () {
            return this.m_spineL;
          }
        }, {
          key: "SpineS",
          get: function () {
            return this.m_spineS;
          }
        }]);
        return t;
      }(Component);
      _descriptor$k = _applyDecoratedDescriptor(_class2$k.prototype, "m_spineL", [_dec2$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      _descriptor2$g = _applyDecoratedDescriptor(_class2$k.prototype, "m_spineS", [_dec3$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$B;
      var _dec2$l;
      var _class2$l;
      var _descriptor$l;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "0a823Wkp7ZNQIyQspo13WYA", "FishSpine", undefined);
      var ccclass$B = _decorator.ccclass;
      var property$l = _decorator.property;
      _dec$B = ccclass$B("FishSpine");
      _dec2$l = property$l({
        type: sp.Skeleton,
        tooltip: "spine"
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
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayScatterWin2 = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            var i;
            var o;
            var r = this;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    i = t >= 2 ? "ScatterWin2_R" : "ScatterWin2_L";
                    this.PlayAnimation(i);
                    tween(this.node).delay(.05).call(function () {
                      var e = r.m_spine.findBone("HP_END");
                      var t = r.node.getComponent(UITransform).convertToNodeSpaceAR(n);
                      e.x = t.x;
                      e.y = t.y;
                    }).start();
                    o = this.m_spine.findAnimation(i).duration;
                    e.next = 7;
                    return node$3.Wait(this, o);
                  case 7:
                    this.node.active = false;
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    e.next = 3;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
                  case 3:
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
      _descriptor$l = _applyDecoratedDescriptor(_class2$l.prototype, "m_spine", [_dec2$l], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      var _dec$C;
      var _dec2$m;
      var _class2$m;
      var _descriptor$m;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4dc8dtUrEVHcaoHiTsGk15e", "BombSpine", undefined);
      var ccclass$C = _decorator.ccclass;
      var property$m = _decorator.property;
      _dec$C = ccclass$C("BombSpine");
      _dec2$m = property$m({
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
          _initializerDefineProperty(t, "m_spine", _descriptor$m, _assertThisInitialized(t));
          return t;
        }
        _inheritsLoose(t, e);
        var n = t.prototype;
        n.PlayBombExplode = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    this.node.active = true;
                    n = t ? "Bomb_Explode_L" : "Bomb_Explode_S";
                    e.next = 4;
                    return this.PlayAnimation(n, false, 1.5);
                  case 4:
                    this.node.active = false;
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
        n.PlayAnimation = function () {
          var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n, i) {
            return _regeneratorRuntime().wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    if (undefined === n) {
                      n = false;
                    }
                    if (undefined === i) {
                      i = 1;
                    }
                    this.m_spine.getState().timeScale = i;
                    e.next = 5;
                    return SpineKit.PlayAnimation(this.m_spine, t, n);
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
        return t;
      }(Component);
      _descriptor$m = _applyDecoratedDescriptor(_class2$m.prototype, "m_spine", [_dec2$m], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e4ef5V+7WZDgK90TtADAAKV", "GameView", undefined);
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