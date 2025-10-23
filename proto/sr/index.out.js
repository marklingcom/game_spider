System.register("chunks:///game.js", ['cc', "./index-ef4db35b.js"], function (_0x47043c, _0x218fbf) {
  'use strict';

  var _0x2c7048;
  var _0x362834;
  var _0x5a31e1;
  var _0x3ec9cf;
  var _0x516ec3;
  var _0x4c026a;
  var _0x1f08a2;
  var _0x225bb7;
  var _0x55259c;
  var _0x3f9483;
  var _0x4b774d;
  var _0x35172f;
  var _0x1d1aba;
  var _0x25de9f;
  var _0x25689e;
  var _0x28eacb;
  var _0x45ad1b;
  var _0x3110f4;
  var _0x4f13f4;
  var _0x55f342;
  var _0x249d91;
  var _0x3c7fe7;
  var _0x1ab73d;
  var _0x25837b;
  var _0xc5fc15;
  var _0x351814;
  var _0x8b9dff;
  var _0x1f485b;
  var _0x141048;
  var _0x2b152c;
  var _0x4dcc8a;
  var _0x2aedb8;
  var _0x2dadf4;
  var _0x4f85d0;
  var _0x21aed2;
  var _0x3ba313;
  var _0x50971b;
  var _0x249be4;
  var _0x49c21a;
  var _0x17929e;
  var _0x546e40;
  var _0x31f763;
  var _0xa3f748;
  var _0x15b924;
  var _0x244ea2;
  var _0x55dde2;
  var _0x2ed736;
  var _0x50f6e6;
  var _0x382886;
  var _0x5b37fa;
  var _0x268590;
  var _0x3edfa4;
  var _0x5d2a96;
  var _0x279566;
  var _0x1ff9b1;
  var _0x444a76;
  var _0x575d42;
  var _0x3c56ad;
  var _0xcfb1dc;
  var _0x51ddfb;
  var _0x32d595;
  var _0x1c5803;
  var _0x56ed3b;
  var _0x782f1f;
  return {
    'setters': [function (_0x5dacfb) {
      _0x2c7048 = _0x5dacfb.cclegacy;
      _0x362834 = _0x5dacfb._decorator;
      _0x5a31e1 = _0x5dacfb.SpriteFrame;
      _0x3ec9cf = _0x5dacfb.Enum;
      _0x516ec3 = _0x5dacfb.Component;
      _0x4c026a = _0x5dacfb.sp;
      _0x1f08a2 = _0x5dacfb.Label;
      _0x225bb7 = _0x5dacfb.Animation;
      _0x55259c = _0x5dacfb.Prefab;
      _0x3f9483 = _0x5dacfb.v3;
      _0x4b774d = _0x5dacfb.UITransform;
      _0x35172f = _0x5dacfb.Size;
      _0x1d1aba = _0x5dacfb.instantiate;
      _0x25de9f = _0x5dacfb.log;
      _0x25689e = _0x5dacfb.Node;
      _0x28eacb = _0x5dacfb.tween;
      _0x45ad1b = _0x5dacfb.TweenSystem;
      _0x3110f4 = _0x5dacfb.find;
      _0x4f13f4 = _0x5dacfb.SpriteAtlas;
      _0x55f342 = _0x5dacfb.Sprite;
      _0x249d91 = _0x5dacfb.input;
      _0x3c7fe7 = _0x5dacfb.Input;
      _0x1ab73d = _0x5dacfb.KeyCode;
      _0x25837b = _0x5dacfb.screen;
      _0xc5fc15 = _0x5dacfb.view;
      _0x351814 = _0x5dacfb.ResolutionPolicy;
      _0x8b9dff = _0x5dacfb.UIOpacity;
      _0x1f485b = _0x5dacfb.error;
    }, function (_0x169e80) {
      _0x141048 = _0x169e80._;
      _0x2b152c = _0x169e80.a;
      _0x4dcc8a = _0x169e80.b;
      _0x2aedb8 = _0x169e80.c;
      _0x2dadf4 = _0x169e80.o;
      _0x4f85d0 = _0x169e80.p;
      _0x21aed2 = _0x169e80.l;
      _0x3ba313 = _0x169e80.d;
      _0x50971b = _0x169e80.w;
      _0x249be4 = _0x169e80.g;
      _0x49c21a = _0x169e80.e;
      _0x17929e = _0x169e80.j;
      _0x546e40 = _0x169e80.B;
      _0x31f763 = _0x169e80.x;
      _0xa3f748 = _0x169e80.h;
      _0x15b924 = _0x169e80.y;
      _0x244ea2 = _0x169e80.z;
      _0x55dde2 = _0x169e80.k;
      _0x2ed736 = _0x169e80.A;
      _0x50f6e6 = _0x169e80.t;
      _0x382886 = _0x169e80.i;
      _0x5b37fa = _0x169e80.r;
      _0x268590 = _0x169e80.D;
      _0x3edfa4 = _0x169e80.E;
      _0x5d2a96 = _0x169e80.F;
      _0x279566 = _0x169e80.G;
      _0x1ff9b1 = _0x169e80.f;
      _0x444a76 = _0x169e80.C;
      _0x575d42 = _0x169e80.H;
      _0x3c56ad = _0x169e80.I;
      _0xcfb1dc = _0x169e80.n;
      _0x51ddfb = _0x169e80.J;
      _0x32d595 = _0x169e80.K;
      _0x1c5803 = _0x169e80.L;
      _0x56ed3b = _0x169e80.M;
      _0x782f1f = _0x169e80.N;
    }],
    'execute': function () {
      var _0x241037;
      var _0x40e5a6;
      var _0x1f14a6;
      var _0x14656a;
      var _0x26c346;
      var _0x4296d1;
      var _0x34999e;
      var _0x3bbf18;
      var _0x33459c;
      var _0x30696f;
      var _0x16eeb8;
      var _0x1f28d9;
      var _0x15b4d4;
      var _0xbcadd9;
      var _0x25dd83;
      var _0xb0291c;
      var _0x36c5e3;
      var _0x486f20;
      var _0x1d3a7b;
      var _0x38279f;
      var _0x5d3772;
      _0x2c7048._RF.push({}, 'cc629oBgStE6p3cesIpDU+s', "DataStructure", undefined);
      _0x2c7048._RF.pop();
      _0x2c7048._RF.push({}, "e9925HfcfJNXKEg144vFp5x", "SR_Define", undefined);
      (function (_0x17553e) {
        _0x17553e[_0x17553e.ANY = 0x0] = "ANY";
        _0x17553e[_0x17553e.TSU = 0x1] = "TSU";
        _0x17553e[_0x17553e.SHIH = 0x2] = "SHIH";
        _0x17553e[_0x17553e.SHUO = 0x3] = 'SHUO';
        _0x17553e[_0x17553e.FA = 0x4] = 'FA';
      })(_0x1d3a7b || (_0x1d3a7b = {}));
      (function (_0xa0da41) {
        _0xa0da41[_0xa0da41.UNSHOW_PREPARE = 0x0] = "UNSHOW_PREPARE";
        _0xa0da41[_0xa0da41.AWARD = 0x1] = "AWARD";
        _0xa0da41[_0xa0da41.ROUND_SHOW_END = 0x2] = "ROUND_SHOW_END";
        _0xa0da41[_0xa0da41.ROUND_END = 0x3] = "ROUND_END";
      })(_0x38279f || (_0x38279f = {}));
      (function (_0x13a29c) {
        _0x13a29c[_0x13a29c.EMPTY = 0x0] = 'EMPTY';
        _0x13a29c[_0x13a29c.GREEN = 0x1] = 'GREEN';
        _0x13a29c[_0x13a29c.RED = 0x2] = "RED";
        _0x13a29c[_0x13a29c.PURPLE = 0x3] = "PURPLE";
        _0x13a29c[_0x13a29c.GOLD = 0x4] = "GOLD";
      })(_0x5d3772 || (_0x5d3772 = {}));
      var _0x18b479 = _0x362834.ccclass;
      var _0x53951f = _0x362834.property;
      _0x241037 = _0x53951f(_0x5a31e1);
      _0x40e5a6 = _0x53951f(_0x5a31e1);
      _0x1f14a6 = _0x53951f(_0x5a31e1);
      _0x14656a = _0x53951f(_0x5a31e1);
      _0x26c346 = _0x53951f(_0x5a31e1);
      _0x4296d1 = _0x53951f(_0x5a31e1);
      _0x34999e = _0x53951f(_0x5a31e1);
      _0x3bbf18 = _0x53951f(_0x5a31e1);
      _0x486f20 = function (_0x39ad85) {
        function _0x52a718() {
          var _0x4696b9;
          var _0x2634d1 = arguments.length;
          var _0x216e0d = new Array(_0x2634d1);
          for (var _0xf7c1e5 = 0x0; _0xf7c1e5 < _0x2634d1; _0xf7c1e5++) {
            _0x216e0d[_0xf7c1e5] = arguments[_0xf7c1e5];
          }
          _0x4696b9 = _0x39ad85.call.apply(_0x39ad85, [this].concat(_0x216e0d)) || this;
          _0x4dcc8a(_0x4696b9, "SymbolSpriteFrame", _0x30696f, _0x2aedb8(_0x4696b9));
          _0x4dcc8a(_0x4696b9, "FreeSymbolSpriteFrame", _0x16eeb8, _0x2aedb8(_0x4696b9));
          _0x4dcc8a(_0x4696b9, 'UpgradeSymbolSripteFrame', _0x1f28d9, _0x2aedb8(_0x4696b9));
          _0x4dcc8a(_0x4696b9, "TitleSpriteFrames", _0x15b4d4, _0x2aedb8(_0x4696b9));
          _0x4dcc8a(_0x4696b9, "LeftSpriteFrames", _0xbcadd9, _0x2aedb8(_0x4696b9));
          _0x4dcc8a(_0x4696b9, "RecordWinSpriteFrames", _0x25dd83, _0x2aedb8(_0x4696b9));
          _0x4dcc8a(_0x4696b9, "RecordBgSpriteFrames", _0xb0291c, _0x2aedb8(_0x4696b9));
          _0x4dcc8a(_0x4696b9, "UpgradeSpriteFrames", _0x36c5e3, _0x2aedb8(_0x4696b9));
          return _0x4696b9;
        }
        _0x2b152c(_0x52a718, _0x39ad85);
        _0x52a718.Wait = function (_0x520cc0, _0x16c945) {
          return new Promise(function (_0x4d7ef7) {
            _0x520cc0.scheduleOnce(function () {
              _0x4d7ef7(null);
            }, _0x16c945);
          });
        };
        _0x52a718.OnExit = function () {
          this.AudioClips = {
            'Mg_bgm': null,
            'Mg_bgm_open': null,
            'Mg_buttonpress': null,
            'Mg_reel': null,
            'Mg_reel_stop': null,
            'Mg_winning': null,
            'Mg_symbol03': null,
            'Mg_wild_win': null,
            'Wild_count': null,
            'Wild_open': null,
            'Wild_show': null,
            'Wild_show_fax3': null,
            'Symbol03win': null,
            'Wild_show1': null,
            'Wild_show2': null,
            'Wild_show3': null
          };
        };
        return _0x52a718;
      }(_0x516ec3);
      _0x486f20.Ver = "269";
      _0x486f20.BgAudioId = -0x1;
      _0x486f20.SPICY_LEVEL = 0x1;
      _0x486f20.FULL_HOUSE_AWARD_TYPE = 0x4;
      _0x486f20.GAMEVIEW_STATE = _0x3ec9cf(_0x38279f);
      _0x486f20.SPIN_ACK_TYPE = {
        'AT_SUCCESS': 0x0,
        'AT_MONEY_NOT_ENOUGH': 0x1,
        'AT_MONEY_ABNORMAL': 0x2,
        'AT_MONEY_NOT_ENOUGH_SINGLE': 0x131,
        'API_BETONCE_FAIL': 0x7d3
      };
      _0x486f20.AWARD_TYPE = {
        'AWARD_TYPE_NON': 0x0,
        'AWARD_TYPE_LINE': 0x1,
        'AWARD_TYPE_ALL_PLATE': 0x2,
        'AWARD_TYPE_MAX': 0x7fff
      };
      _0x486f20.AudioFileRoot = "Sound/";
      _0x486f20.AudioFilePath = {
        'Mg_bgm': _0x486f20.AudioFileRoot + "Mg_bgm",
        'Mg_bgm_open': _0x486f20.AudioFileRoot + "Mg_bgmopen",
        'Mg_buttonpress': _0x486f20.AudioFileRoot + "Mg_buttonpress",
        'Mg_reel': _0x486f20.AudioFileRoot + 'Mg_reel',
        'Mg_reel_stop': _0x486f20.AudioFileRoot + "Mg_reel_stop",
        'Mg_winning': _0x486f20.AudioFileRoot + "MG_winning",
        'Mg_symbol03': _0x486f20.AudioFileRoot + 'Symbol03win',
        'Mg_wild_win': _0x486f20.AudioFileRoot + "WildWin",
        'Wild_count': _0x486f20.AudioFileRoot + "wild_count",
        'Wild_open': _0x486f20.AudioFileRoot + "wild_open",
        'Wild_show': _0x486f20.AudioFileRoot + "wild_show",
        'Wild_show_fax3': _0x486f20.AudioFileRoot + 'wild_show_fax3',
        'Symbol03win': _0x486f20.AudioFileRoot + "Symbol03win",
        'Wild_show1': _0x486f20.AudioFileRoot + "wild_show1",
        'Wild_show2': _0x486f20.AudioFileRoot + "wild_show2",
        'Wild_show3': _0x486f20.AudioFileRoot + 'wild_show3'
      };
      _0x486f20.AudioClips = {
        'Mg_bgm': null,
        'Mg_bgm_open': null,
        'Mg_buttonpress': null,
        'Mg_reel': null,
        'Mg_reel_stop': null,
        'Mg_winning': null,
        'Mg_symbol03': null,
        'Mg_wild_win': null,
        'Wild_count': null,
        'Wild_open': null,
        'Wild_show': null,
        'Wild_show_fax3': null,
        'Symbol03win': null,
        'Wild_show1': null,
        'Wild_show2': null,
        'Wild_show3': null
      };
      _0x486f20.AckType = {
        'login': 0x0,
        'exchangeChips': 0x2,
        'info': 0xb,
        'spin': 0xc,
        'heartBeat': 0x62,
        'serverMsg': 0x63
      };
      _0x486f20.SERVER_RET_TYPE = {
        'SERVER_SUCCESS': 0x0,
        'SERVER_ERROR_SEATE': 0x31f,
        'SERVER_NOUSE': 0x383,
        'SERVER_MAINTAIN': 0x3e6,
        'SERVER_SHUTDOWN': 0x3e7,
        'SERVER_NEED_UID': 0x3e9,
        'SERVER_NEED_LOGIN': 0x3ea,
        'SERVER_TOKEN_ERROR': 0x3eb
      };
      _0x486f20.LOGIN_RESULT_TYPE = {
        'LOGIN_SUCCESS': 0x0,
        'LOGIN_FAIL': 0x1,
        'API_VERIFY_FAIL': 0x7d1,
        'API_LOGIN_REPEAT_FAIL': 0x7d2
      };
      _0x486f20.HEART_BEAT_STATE = {
        'NOTIFY': 0x61,
        'MAINTAIN': 0x62,
        'CLOSE': 0x63
      };
      _0x486f20.DelayType = {
        'Normal': 0x0,
        'Get': 0x1,
        'NotGet': 0x2
      };
      _0x486f20.TimeoutType = {
        'Ignore': 0x0,
        'Handle': 0x1
      };
      _0x486f20.USE_ITEM_REASON = {
        'NORMAL': 0x0,
        'USING': 0x1
      };
      _0x486f20.StringKey = {
        'SE_FEATURES_LEFT': "SE_FEATURES_LEFT",
        'SE_FEATURES_RIGHT': "SE_FEATURES_RIGHT",
        'FREE_GAME_NAME_STRING': "FREE_GAME_NAME_STRING"
      };
      _0x486f20.AwardPayType = _0x3ec9cf(_0x1d3a7b);
      _0x486f20.COL = 0x3;
      _0x486f20.ROW = 0x7;
      _0x486f20.COL_CENTER = (_0x486f20.COL - 0x1) / 0x2;
      _0x486f20.ROW_CENTER = (_0x486f20.ROW - 0x1) / 0x2;
      _0x486f20.MultiLvl = [0x1, 0x3, 0x5, 0x9];
      _0x486f20.Award = {
        'ANY': 0x0,
        'COPPER': 0x1,
        'SILVER': 0x2,
        'GOLD': 0x3,
        'FA_FA_FA': 0x4,
        'TurbidPurple': 0x5
      };
      _0x486f20.PlateEftOdds = [0x12, 0x1c, 0x3a, 0x58, 0x378];
      _0x30696f = _0x141048(_0x486f20.prototype, 'SymbolSpriteFrame', [_0x241037], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x16eeb8 = _0x141048(_0x486f20.prototype, "FreeSymbolSpriteFrame", [_0x40e5a6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x1f28d9 = _0x141048(_0x486f20.prototype, "UpgradeSymbolSripteFrame", [_0x1f14a6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x15b4d4 = _0x141048(_0x486f20.prototype, 'TitleSpriteFrames', [_0x14656a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0xbcadd9 = _0x141048(_0x486f20.prototype, "LeftSpriteFrames", [_0x26c346], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x25dd83 = _0x141048(_0x486f20.prototype, 'RecordWinSpriteFrames', [_0x4296d1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0xb0291c = _0x141048(_0x486f20.prototype, "RecordBgSpriteFrames", [_0x34999e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x36c5e3 = _0x141048(_0x486f20.prototype, "UpgradeSpriteFrames", [_0x3bbf18], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x504132 = _0x18b479(_0x33459c = _0x486f20) || _0x33459c;
      var _0x1dd108;
      var _0x565eda;
      var _0x41a2bc;
      var _0x450f82;
      var _0x565cbb;
      var _0x56346b;
      var _0x52e397;
      var _0x338cc1;
      var _0x5e8f19;
      var _0x568fb5;
      var _0x595348;
      var _0x20dadb;
      _0x2c7048._RF.pop();
      _0x2c7048._RF.push({}, '0ce2cBPjgdKuJnhwU+ShvdF', "Symbol", undefined);
      var _0x3a64ce = ['Symbol04_Wild', "Symbol04_Mutiply", 'Symbol04_Loop'];
      var _0xb1c0c9 = _0x362834.ccclass;
      var _0x3717ad = _0x362834.property;
      _0x1dd108 = _0x3717ad({
        'type': _0x4c026a.Skeleton,
        'tooltip': "spine"
      });
      _0x565eda = _0x3717ad({
        'type': _0x3ec9cf(_0x5d3772),
        'tooltip': "symbol"
      });
      _0x41a2bc = _0x3717ad({
        'type': Boolean,
        'tooltip': '是否為wild'
      });
      _0x450f82 = _0x3717ad({
        'type': String,
        'tooltip': "中獎動畫名稱"
      });
      _0x565cbb = _0x3717ad({
        'type': _0x1f08a2,
        'tooltip': '加倍提示，只有wild有用'
      });
      _0x52e397 = function (_0x2ee5f7) {
        function _0x1f927f() {
          var _0x209f11;
          var _0x558cb4 = arguments.length;
          var _0x5b6e1e = new Array(_0x558cb4);
          for (var _0x35fa1d = 0x0; _0x35fa1d < _0x558cb4; _0x35fa1d++) {
            _0x5b6e1e[_0x35fa1d] = arguments[_0x35fa1d];
          }
          _0x209f11 = _0x2ee5f7.call.apply(_0x2ee5f7, [this].concat(_0x5b6e1e)) || this;
          _0x4dcc8a(_0x209f11, "m_spine", _0x338cc1, _0x2aedb8(_0x209f11));
          _0x4dcc8a(_0x209f11, 'm_symbol', _0x5e8f19, _0x2aedb8(_0x209f11));
          _0x4dcc8a(_0x209f11, "m_isWild", _0x568fb5, _0x2aedb8(_0x209f11));
          _0x4dcc8a(_0x209f11, "m_animName", _0x595348, _0x2aedb8(_0x209f11));
          _0x4dcc8a(_0x209f11, "m_multiLabel", _0x20dadb, _0x2aedb8(_0x209f11));
          _0x209f11.m_stepList = null;
          return _0x209f11;
        }
        _0x2b152c(_0x1f927f, _0x2ee5f7);
        var _0x2f6d54 = _0x1f927f.prototype;
        _0x2f6d54.ChangeSkeletonData = function (_0x1c0838) {
          this.m_spine.setSkeletonData(_0x1c0838);
        };
        _0x2f6d54.ShowWin = function (_0x1ee5e4, _0xdff67d) {
          var _0x4dd4b3 = this;
          return new Promise(_0x2dadf4(_0x4f85d0().mark(function _0x30fd54(_0x25a530) {
            var _0x1cbe8b;
            return _0x4f85d0().wrap(function (_0x122611) {
              for (;;) {
                switch (_0x122611.prev = _0x122611.next) {
                  case 0x0:
                    _0x1cbe8b = null;
                    if (_0x4dd4b3.m_isWild) {
                      _0x122611.next = 0x6;
                      break;
                    }
                    if ('' !== _0x4dd4b3.m_animName) {
                      _0x1cbe8b = _0x4dd4b3.m_spine.setAnimation(0x0, _0x4dd4b3.m_animName, true);
                    }
                    if (_0x1cbe8b) {
                      _0x4dd4b3.m_spine.setTrackCompleteListener(_0x1cbe8b, function () {
                        _0x25a530();
                      });
                    } else {
                      _0x4dd4b3.m_spine.setCompleteListener(function () {
                        _0x25a530();
                        _0x4dd4b3.m_spine.setCompleteListener(null);
                      });
                    }
                    _0x122611.next = 0xb;
                    break;
                  case 0x6:
                    _0x4dd4b3.m_stepList = JSON.parse(JSON.stringify(_0x3a64ce));
                    _0x4dd4b3.m_multiLabel.string = 'X' + _0x504132.MultiLvl[_0x1ee5e4].toString();
                    _0x122611.next = 0xa;
                    return _0x4dd4b3.ShowWild(_0x1ee5e4, _0xdff67d);
                  case 0xa:
                    _0x25a530();
                  case 0xb:
                  case 'end':
                    return _0x122611.stop();
                }
              }
            }, _0x30fd54);
          })));
        };
        _0x2f6d54.ShowWild = function (_0x499366, _0x41a3b7) {
          var _0x5ed59e = this;
          return new Promise(_0x2dadf4(_0x4f85d0().mark(function _0x417194(_0x1daa51) {
            var _0xa87d6b;
            var _0x55c780;
            var _0xdf06eb;
            var _0x2afd21;
            return _0x4f85d0().wrap(function (_0x3bd7c8) {
              for (;;) {
                switch (_0x3bd7c8.prev = _0x3bd7c8.next) {
                  case 0x0:
                    if (!(_0x499366 > 0x0 && _0x41a3b7)) {
                      _0x3bd7c8.next = 0x14;
                      break;
                    }
                    if (!(_0xa87d6b = _0x5ed59e.m_stepList.shift())) {
                      _0x3bd7c8.next = 0x12;
                      break;
                    }
                    _0x55c780 = _0x5ed59e.m_spine.findAnimation(_0xa87d6b);
                    _0xdf06eb = 0x0;
                    if (_0x55c780) {
                      _0xdf06eb = _0x55c780.duration;
                    }
                    _0x5ed59e.m_spine.setAnimation(0x0, _0xa87d6b, 0x0 === _0x5ed59e.m_stepList.length);
                    if (_0xa87d6b === "Symbol04_Mutiply") {
                      _0x5ed59e.node.getComponent(_0x225bb7).play('Symbol_04_Mutiply');
                      _0x21aed2.Play(_0x504132.AudioClips.Wild_open);
                    }
                    if (_0xa87d6b === 'Symbol04_Loop') {
                      _0x3bd7c8.next = 0xb;
                      break;
                    }
                    _0x3bd7c8.next = 0xb;
                    return _0x504132.Wait(_0x5ed59e, _0xdf06eb);
                  case 0xb:
                    if (_0xa87d6b === "Symbol04_Mutiply") {
                      _0x21aed2.Play(_0x504132.AudioClips.Wild_count);
                    }
                    if (!(_0x5ed59e.m_stepList.length > 0x0)) {
                      _0x3bd7c8.next = 0x11;
                      break;
                    }
                    _0x3bd7c8.next = 0xf;
                    return _0x5ed59e.ShowWild(_0x499366, _0x41a3b7).then(function () {
                      _0x1daa51();
                    });
                  case 0xf:
                    _0x3bd7c8.next = 0x12;
                    break;
                  case 0x11:
                    _0x1daa51();
                  case 0x12:
                    _0x3bd7c8.next = 0x16;
                    break;
                  case 0x14:
                    if (_0x2afd21 = _0x5ed59e.m_spine.setAnimation(0x0, 'Symbol04_Wild', true)) {
                      _0x5ed59e.m_spine.setTrackCompleteListener(_0x2afd21, function () {
                        _0x1daa51();
                      });
                    } else {
                      _0x5ed59e.m_spine.setCompleteListener(function () {
                        _0x1daa51();
                        _0x5ed59e.m_spine.setCompleteListener(null);
                      });
                    }
                  case 0x16:
                  case "end":
                    return _0x3bd7c8.stop();
                }
              }
            }, _0x417194);
          })));
        };
        _0x3ba313(_0x1f927f, [{
          'key': 'Symbol',
          'get': function () {
            return this.m_symbol;
          }
        }]);
        return _0x1f927f;
      }(_0x516ec3);
      _0x338cc1 = _0x141048(_0x52e397.prototype, "m_spine", [_0x1dd108], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5e8f19 = _0x141048(_0x52e397.prototype, "m_symbol", [_0x565eda], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': null
      });
      _0x568fb5 = _0x141048(_0x52e397.prototype, 'm_isWild', [_0x41a2bc], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x595348 = _0x141048(_0x52e397.prototype, 'm_animName', [_0x450f82], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x20dadb = _0x141048(_0x52e397.prototype, 'm_multiLabel', [_0x565cbb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x431a1c = _0xb1c0c9(_0x56346b = _0x52e397) || _0x56346b;
      var _0x100b30;
      var _0x5be92d;
      var _0x3bcc1b;
      var _0x3cf735;
      _0x2c7048._RF.pop();
      _0x2c7048._RF.push({}, 'de1aaExEWJCBJJPIQtgtAI4', "SlotReels", undefined);
      var _0xad6a32 = 0.26;
      var _0x2161c9 = _0x362834.ccclass;
      var _0xec26c8 = _0x362834.property;
      _0x100b30 = _0xec26c8(_0x55259c);
      _0x3bcc1b = function (_0x32f9d2) {
        function _0x107193() {
          var _0x461da9;
          var _0x13104b = arguments.length;
          var _0x22b53f = new Array(_0x13104b);
          for (var _0x3fcfed = 0x0; _0x3fcfed < _0x13104b; _0x3fcfed++) {
            _0x22b53f[_0x3fcfed] = arguments[_0x3fcfed];
          }
          _0x461da9 = _0x32f9d2.call.apply(_0x32f9d2, [this].concat(_0x22b53f)) || this;
          _0x4dcc8a(_0x461da9, 'm_symbolPrefabs', _0x3cf735, _0x2aedb8(_0x461da9));
          _0x461da9.m_gameView = null;
          _0x461da9.m_symbolSize = null;
          _0x461da9.m_viewSize = null;
          _0x461da9.m_reelPositionOffset = [_0x3f9483(0x0, 0xb), _0x3f9483(0x0, 0xb), _0x3f9483(0x0, 0xb)];
          _0x461da9.m_symbol = new Array();
          _0x461da9.m_plateInfo = [[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0], [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0], [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]];
          _0x461da9.m_fakePlate = [[0x1, 0x2, 0x3, 0x4], [0x1, 0x2, 0x3, 0x4], [0x1, 0x2, 0x3, 0x4]];
          _0x461da9.m_reelStopTime = new Array();
          _0x461da9.m_isChangeSymbol = new Array();
          _0x461da9.m_checkActiveArr = new Array();
          _0x461da9.m_isChangeToFinalSymbol = new Array();
          _0x461da9.m_time = 0x0;
          _0x461da9.m_stopTime = 0x0;
          _0x461da9.m_riseTime = 0x0;
          _0x461da9.m_spinBufferTime01 = 0.05;
          _0x461da9.m_spinBufferTime02 = 0.18;
          _0x461da9.m_spinSpeed = 0.18;
          _0x461da9.m_upLength = 0x0;
          _0x461da9.m_numberOfSymbol = 0x0;
          _0x461da9.m_downLength = 0x14;
          _0x461da9.m_timesOfBaseSpin = 0x1;
          _0x461da9.m_spinIntervalTimes = 0.5;
          _0x461da9.m_spinDelayTime = 0x0;
          _0x461da9.m_isStop = false;
          _0x461da9.m_isClickStopBtn = false;
          _0x461da9.m_isPlayFirstSound = false;
          _0x461da9.m_playStopSound = null;
          _0x461da9.m_isPlaySound = [false, false, false, false, false];
          _0x461da9.m_reelSoundId = null;
          _0x461da9.m_lockColumn = new Array();
          _0x461da9.m_isAward = false;
          _0x461da9.m_reelPreTime = new Array();
          _0x461da9.m_relativeHeight = 262.5;
          _0x461da9.m_skewRate = 0x4 / _0x461da9.m_relativeHeight;
          _0x461da9.m_scaleStandard = 0x1;
          _0x461da9.m_scaleStandardDiff = 0.1;
          _0x461da9.m_scaleRateX = 0.9;
          _0x461da9.m_scaleRateY = 0.9;
          _0x461da9.m_positionRate = 0.00042;
          _0x461da9.m_slotPosOffset = 0xd;
          _0x461da9.m_hardStopIntervalTime = null;
          _0x461da9.m_hardStopSpinSpeed = null;
          return _0x461da9;
        }
        _0x2b152c(_0x107193, _0x32f9d2);
        var _0x4d0fef = _0x107193.prototype;
        _0x4d0fef.onLoad = function () {
          var _0x2e71ac = this;
          this.m_viewSize = this.node.getComponent(_0x4b774d).contentSize;
          this.m_symbolSize = new _0x35172f(this.m_viewSize.width / 0x3, 240);
          for (var _0x6aa71f = 0x0; _0x6aa71f < _0x504132.COL; _0x6aa71f++) {
            this.m_lockColumn.push(false);
            this.m_reelStopTime.push(null);
            this.m_reelPreTime.push(null);
            var _0x8f25dc = new Array();
            for (var _0x1031ff = 0x0; _0x1031ff < _0x504132.ROW; _0x1031ff++) {
              var _0x8f25dc;
              var _0x1031ff;
              var _0x4833a6 = Math.floor(0x64 * Math.random()) + 0x1;
              if (_0x4833a6 >= 0x1 && _0x4833a6 <= 0x20) {
                _0x4833a6 = 0x0;
              } else if (_0x4833a6 >= 0x21 && _0x4833a6 <= 0x40) {
                _0x4833a6 = 0x1;
              } else if (_0x4833a6 >= 0x41 && _0x4833a6 <= 0x60) {
                _0x4833a6 = 0x2;
              } else if (_0x4833a6 >= 0x61 && _0x4833a6 <= 0x64) {
                _0x4833a6 = 0x3;
              }
              var _0x15fe44 = this.m_fakePlate[_0x6aa71f][_0x4833a6];
              var _0x374080 = _0x1d1aba(this.m_symbolPrefabs[_0x15fe44]);
              this.node.addChild(_0x374080);
              _0x374080.name = this.m_numberOfSymbol.toString();
              this.m_numberOfSymbol += 0x1;
              this.m_isChangeToFinalSymbol.push(false);
              this.m_plateInfo[_0x6aa71f][_0x1031ff] = _0x15fe44;
              if (_0x1031ff % 0x2 != 0x0) {
                _0x374080.active = false;
              }
              _0x8f25dc.push(_0x374080);
              var _0x25873e = this.m_symbolSize.width * (_0x6aa71f + 0.5) + this.m_reelPositionOffset[_0x6aa71f].x - this.m_viewSize.width / 0x2;
              var _0x58232d = this.m_symbolSize.height / 0x2 * (_0x1031ff - 1.5) + this.m_reelPositionOffset[_0x6aa71f].y - this.m_viewSize.height / 0x2;
              _0x374080.setPosition(_0x25873e, _0x58232d);
            }
            this.m_symbol.push(_0x8f25dc);
          }
          for (var _0x2f8582 = 0x0; _0x2f8582 < _0x504132.COL; _0x2f8582++) {
            for (var _0x30f997 = 0x0; _0x30f997 < _0x504132.ROW; _0x30f997++) {
              this.SetRadian(_0x2f8582, _0x30f997);
            }
          }
          var _0x2e4b4b = function () {
            var _0x4883d2 = _0x50971b.TempoSetting.Crazy777;
            _0x2e71ac.m_riseTime = _0x4883d2.BASE.RISE_TIME;
            _0x2e71ac.m_upLength = _0x4883d2.BASE.UP_LENGTH;
            _0x2e71ac.m_spinBufferTime01 = _0x4883d2.BASE.SPIN_BUFFER_TIME_01;
            _0x2e71ac.m_spinBufferTime02 = _0x4883d2.BASE.SPIN_BUFFER_TIME_02;
            _0x2e71ac.m_downLength = _0x4883d2.BASE.DOWN_LENGTH;
            _0x2e71ac.m_spinSpeed = _0x4883d2.BASE.SPIN_SPEED;
            _0x2e71ac.m_timesOfBaseSpin = _0x4883d2.BASE.TIMES_OF_BASE_SPIN;
            _0x2e71ac.m_spinIntervalTimes = _0x4883d2.BASE.SPIN_INTERVAL_TIMES;
            _0x2e71ac.m_spinDelayTime = _0x4883d2.BASE.SPIN_DELAY_TIME;
            _0x2e71ac.m_hardStopIntervalTime = _0x4883d2.BASE.HARD_STOP_INTERVAL_TIME;
            _0x2e71ac.m_hardStopSpinSpeed = _0x4883d2.BASE.HARD_STOP_SPIN_SPEED;
            _0xad6a32 = _0x4883d2.BASE.SPIN_SPEED;
          };
          _0x2e4b4b();
          _0x50971b.AddCb(_0x2e4b4b);
        };
        _0x4d0fef.Init = function (_0x5815d2) {
          this.m_gameView = _0x5815d2;
        };
        _0x4d0fef.StartSpin = function (_0x5d90fd) {
          if (undefined === _0x5d90fd) {
            _0x5d90fd = true;
          }
          _0x25de9f("StartSpin");
          this.m_spinSpeed = _0xad6a32;
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isPlayFirstSound = false;
          this.m_isPlaySound = [false, false, false, false, false];
          if (_0x5d90fd) {
            for (var _0x1d44e4 = 0x0; _0x1d44e4 < _0x504132.COL; _0x1d44e4++) {
              this.m_lockColumn[_0x1d44e4] = false;
            }
          }
          for (var _0x325b6e = 0x0; _0x325b6e < _0x504132.COL; _0x325b6e++) {
            this.m_reelStopTime[_0x325b6e] = null;
            this.m_reelPreTime[_0x325b6e] = null;
          }
          for (var _0x512fc8 = 0x0; _0x512fc8 < this.m_isChangeToFinalSymbol.length; _0x512fc8++) {
            this.m_isChangeToFinalSymbol[_0x512fc8] = false;
          }
          for (var _0x2cc704 = 0x0; _0x2cc704 < _0x504132.COL * _0x504132.ROW; _0x2cc704++) {
            this.m_isChangeSymbol.push(true);
          }
          if (!this.m_gameView.IsHardStop) {
            this.m_reelSoundId = _0x21aed2.Play(_0x504132.AudioClips.Mg_reel, false, null, 0.5);
          }
          for (var _0x5617e0 = 0x0; _0x5617e0 < _0x504132.COL * _0x504132.ROW; _0x5617e0++) {
            this.m_checkActiveArr[_0x5617e0] = null;
          }
        };
        _0x4d0fef.SetIsClickStopBtn = function (_0x237138) {
          if (undefined === _0x237138) {
            _0x237138 = false;
          }
          if (!this.m_isClickStopBtn && (this.m_isClickStopBtn = true, this.m_spinSpeed = this.m_hardStopSpinSpeed, this.m_stopTime = this.m_stopTime - this.m_spinBufferTime01 - this.m_spinBufferTime02, 0x0 != this.m_stopTime && _0x237138)) {
            var _0x323474 = Math.floor(this.m_time / this.m_spinSpeed);
            var _0x3b2d39 = _0x50971b.TempoSetting.Crazy777.SPEED_UP_STOP_TIME(0x3, this.m_time);
            if (_0x3b2d39 < this.m_stopTime) {
              this.m_stopTime = _0x249be4.strip(_0x3b2d39);
            }
            for (var _0x29b37e = 0x0; _0x29b37e < _0x504132.COL; _0x29b37e++) {
              var _0x1855ae = (_0x323474 + 0x1) * this.m_spinSpeed + this.m_hardStopIntervalTime * this.m_spinSpeed * _0x29b37e;
              if (this.m_reelStopTime[_0x29b37e] > _0x1855ae) {
                this.m_reelStopTime[_0x29b37e] = _0x249be4.strip(_0x1855ae);
                this.m_reelPreTime[_0x29b37e] = _0x249be4.strip(_0x323474 * this.m_spinSpeed + _0x249be4.times(this.m_hardStopIntervalTime, this.m_spinSpeed, _0x29b37e));
              }
            }
          }
        };
        _0x4d0fef.Spin = function (_0x208cf5) {
          this.m_time = _0x249be4.strip(this.m_time + _0x208cf5);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple(_0x208cf5);
            if (this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime) {
              this.m_isStop = true;
              if (this.m_reelSoundId) {
                _0x21aed2.Stop(this.m_reelSoundId);
                this.m_reelSoundId = null;
              }
            }
          }
        };
        _0x4d0fef.Spin_RealSpinMultiple = function (_0x2b84d9) {
          var _0x388e0b = this.m_symbolSize.height * (_0x504132.ROW / 0x2);
          for (var _0x38daf4 = 0x0; _0x38daf4 < _0x504132.COL; _0x38daf4++) {
            var _0x1f6e6d = this.m_spinSpeed;
            var _0x590a16 = this.m_time;
            var _0x3b9791 = this.m_reelStopTime[_0x38daf4];
            var _0x4d4482 = this.m_reelPreTime[_0x38daf4];
            var _0x38a335 = this.m_riseTime * _0x504132.COL;
            for (var _0x56d525 = 0x0; _0x56d525 < _0x504132.ROW; _0x56d525++) {
              _0x504132.ROW;
              var _0x4a1ae6 = this.m_symbolSize.width * (_0x38daf4 + 0.5) + this.m_reelPositionOffset[_0x38daf4].x - this.m_viewSize.width / 0x2;
              var _0x35b35a = this.m_symbolSize.height / 0x2 * (_0x56d525 - 1.5) + this.m_reelPositionOffset[_0x38daf4].y - this.m_viewSize.height / 0x2;
              var _0x33654d = this.m_symbolSize.height * (_0x56d525 / 0x2 + 0.5);
              if (_0x590a16 < this.m_riseTime * (_0x38daf4 + 0x1)) {
                var _0x441463 = (_0x590a16 - this.m_riseTime * _0x38daf4) / this.m_riseTime * this.m_upLength;
                this.m_symbol[_0x38daf4][_0x56d525].setPosition(_0x4a1ae6, _0x35b35a + _0x441463);
              } else {
                if (_0x590a16 < _0x38a335) {
                  this.m_symbol[_0x38daf4][_0x56d525].setPosition(_0x4a1ae6, _0x35b35a + this.m_upLength);
                } else {
                  if (null == _0x3b9791 || _0x590a16 < _0x4d4482 + _0x38a335) {
                    var _0x120be8 = (_0x590a16 - _0x38a335) % _0x1f6e6d / _0x1f6e6d * this.m_symbolSize.height * _0x504132.ROW / 0x2;
                    var _0x41a50c = this.GetMovelength(_0x120be8, _0x33654d, _0x388e0b, _0x38daf4, _0x56d525, Number(this.m_symbol[_0x38daf4][_0x56d525].name), this.m_symbol[_0x38daf4][_0x56d525], false);
                    this.m_symbol[_0x38daf4][_0x56d525].setPosition(_0x4a1ae6, _0x35b35a - _0x41a50c);
                    if (_0x3b9791) {
                      this.CheckNullSymbol(this.m_symbol[_0x38daf4][_0x56d525], _0x38daf4, Number(this.m_symbol[_0x38daf4][_0x56d525].name));
                    } else {
                      this.CheckSymbolActive(_0x35b35a - _0x41a50c, this.m_symbol[_0x38daf4][_0x56d525], Number(this.m_symbol[_0x38daf4][_0x56d525].name), _0x56d525);
                    }
                  } else {
                    if (_0x590a16 < _0x3b9791 + _0x38a335) {
                      var _0x3933e7 = (_0x590a16 - _0x38a335) % _0x1f6e6d / _0x1f6e6d * this.m_symbolSize.height * _0x504132.ROW / 0x2;
                      var _0x24a394 = this.GetMovelength(_0x3933e7, _0x33654d, _0x388e0b, _0x38daf4, _0x56d525, Number(this.m_symbol[_0x38daf4][_0x56d525].name), this.m_symbol[_0x38daf4][_0x56d525], false);
                      this.m_symbol[_0x38daf4][_0x56d525].setPosition(_0x4a1ae6, _0x35b35a - _0x24a394);
                      this.CheckNullSymbol(this.m_symbol[_0x38daf4][_0x56d525], _0x38daf4, Number(this.m_symbol[_0x38daf4][_0x56d525].name));
                    } else {
                      if (_0x590a16 < _0x3b9791 + _0x38a335 + this.m_spinBufferTime01 && !this.m_isClickStopBtn) {
                        this.CheckPlayStopSound(_0x38daf4, _0x56d525);
                        var _0x15bdad = (_0x590a16 - _0x3b9791 - _0x38a335) / this.m_spinBufferTime01 * this.m_downLength;
                        this.m_symbol[_0x38daf4][_0x56d525].setPosition(_0x4a1ae6, _0x35b35a - _0x15bdad);
                        this.CheckNullSymbol(this.m_symbol[_0x38daf4][_0x56d525], _0x38daf4, Number(this.m_symbol[_0x38daf4][_0x56d525].name));
                      } else {
                        if (_0x590a16 < _0x3b9791 + _0x38a335 + this.m_spinBufferTime01 + this.m_spinBufferTime02 && !this.m_isClickStopBtn) {
                          this.CheckPlayStopSound(_0x38daf4, _0x56d525);
                          var _0x2d0b2e = (_0x590a16 - _0x3b9791 - _0x38a335 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                          this.m_symbol[_0x38daf4][_0x56d525].setPosition(_0x4a1ae6, _0x35b35a - this.m_downLength + _0x2d0b2e);
                          this.CheckNullSymbol(this.m_symbol[_0x38daf4][_0x56d525], _0x38daf4, Number(this.m_symbol[_0x38daf4][_0x56d525].name));
                        } else {
                          this.CheckChangeToFinalSymbol(_0x38daf4, _0x56d525, Number(this.m_symbol[_0x38daf4][_0x56d525].name), this.m_symbol[_0x38daf4][_0x56d525], true);
                          this.CheckNullSymbol(this.m_symbol[_0x38daf4][_0x56d525], _0x38daf4, Number(this.m_symbol[_0x38daf4][_0x56d525].name));
                          this.CheckPlayStopSound(_0x38daf4, _0x56d525);
                          this.m_symbol[_0x38daf4][_0x56d525].setPosition(_0x4a1ae6, _0x35b35a);
                        }
                      }
                    }
                  }
                }
              }
              this.SetRadian(_0x38daf4, _0x56d525);
            }
          }
        };
        _0x4d0fef.GetMovelength = function (_0x28c9d4, _0x1eaf91, _0x69dea3, _0x36fe08, _0x28f1ed, _0x3459cc, _0x311bc0, _0x230db8) {
          if (_0x28c9d4 >= _0x1eaf91) {
            _0x28c9d4 -= _0x69dea3;
            if (this.m_isChangeSymbol[_0x3459cc]) {
              this.m_isChangeSymbol[_0x3459cc] = false;
              this.ChangeSymbol(_0x36fe08, _0x28f1ed, _0x311bc0, _0x230db8);
            }
          } else {
            this.m_isChangeSymbol[_0x3459cc] = true;
          }
          return _0x28c9d4;
        };
        _0x4d0fef.ChangeSymbol = function (_0x57db14, _0x285d12, _0x39bc72, _0x9d807c) {
          var _0x31ca45 = _0x39bc72.name;
          var _0x2768d3 = this.m_reelPreTime[_0x57db14];
          var _0x5df407 = this.m_reelStopTime[_0x57db14];
          var _0x451991 = _0x39bc72.active;
          if (_0x5df407) {
            this.m_spinSpeed;
          }
          this.m_riseTime;
          _0x504132.ROW;
          this.m_isClickStopBtn;
          this.m_symbol[_0x57db14][_0x285d12].removeFromParent();
          this.m_symbol[_0x57db14][_0x285d12].destroy();
          if (_0x9d807c) {
            var _0x8c6d24 = this.m_plateInfo[_0x57db14][_0x285d12];
            this.m_symbol[_0x57db14][_0x285d12] = _0x1d1aba(this.m_symbolPrefabs[_0x8c6d24]);
            this.node.addChild(this.m_symbol[_0x57db14][_0x285d12]);
          } else {
            if (_0x2768d3 && (this.m_time >= _0x2768d3 || Math.abs(this.m_time - _0x2768d3) < 0.017)) {
              var _0x13aaee = this.m_plateInfo[_0x57db14][_0x285d12];
              this.m_symbol[_0x57db14][_0x285d12] = _0x1d1aba(this.m_symbolPrefabs[_0x13aaee]);
              this.node.addChild(this.m_symbol[_0x57db14][_0x285d12]);
            } else {
              var _0x47616c = Math.floor(0x64 * Math.random()) + 0x1;
              if (_0x47616c >= 0x1 && _0x47616c <= 0x20) {
                _0x47616c = 0x0;
              } else if (_0x47616c >= 0x21 && _0x47616c <= 0x40) {
                _0x47616c = 0x1;
              } else if (_0x47616c >= 0x41 && _0x47616c <= 0x60) {
                _0x47616c = 0x2;
              } else if (_0x47616c >= 0x61) {
                _0x47616c = 0x3;
              }
              var _0x7e6360 = this.m_fakePlate[_0x57db14][_0x47616c];
              this.m_symbol[_0x57db14][_0x285d12] = _0x1d1aba(this.m_symbolPrefabs[_0x7e6360]);
              this.node.addChild(this.m_symbol[_0x57db14][_0x285d12]);
            }
          }
          this.m_symbol[_0x57db14][_0x285d12].active = _0x451991;
          this.m_symbol[_0x57db14][_0x285d12].name = _0x31ca45;
        };
        _0x4d0fef.ForceChangeSymbol = function (_0x5d411a) {
          for (var _0x545441 = 0x0; _0x545441 < _0x504132.COL; _0x545441++) {
            if (_0x5d411a[_0x545441] > 0x0) {
              this.m_symbol[_0x545441][_0x504132.ROW_CENTER + 0x1].active = false;
              this.m_symbol[_0x545441][_0x504132.ROW_CENTER - 0x1].active = false;
            }
            this.m_symbol[_0x545441][_0x504132.ROW_CENTER].removeFromParent();
            this.m_symbol[_0x545441][_0x504132.ROW_CENTER].destroy();
            var _0x2d0612 = _0x5d411a[_0x545441];
            this.m_symbol[_0x545441][_0x504132.ROW_CENTER] = _0x1d1aba(this.m_symbolPrefabs[_0x2d0612]);
            this.node.addChild(this.m_symbol[_0x545441][_0x504132.ROW_CENTER]);
            var _0x3c01f5 = this.m_symbolSize.width * (_0x545441 + 0.5) + this.m_reelPositionOffset[_0x545441].x - this.m_viewSize.width / 0x2;
            var _0x424527 = this.m_symbolSize.height / 0x2 * (_0x504132.ROW_CENTER - 1.5) + this.m_reelPositionOffset[_0x545441].y - this.m_viewSize.height / 0x2;
            this.m_symbol[_0x545441][_0x504132.ROW_CENTER].setPosition(_0x3f9483(_0x3c01f5, _0x424527));
            this.m_symbol[_0x545441][_0x504132.ROW_CENTER].name = (_0x504132.ROW_CENTER + 0x7 * _0x545441).toString();
          }
        };
        _0x4d0fef.CheckChangeToFinalSymbol = function (_0x957431, _0x41fa5b, _0x186081, _0x307062, _0x2ef023) {
          if (undefined === _0x2ef023) {
            _0x2ef023 = false;
          }
          if (!this.m_isChangeToFinalSymbol[_0x186081]) {
            this.m_isChangeToFinalSymbol[_0x186081] = true;
            this.ChangeSymbol(_0x957431, _0x41fa5b, _0x307062, _0x2ef023);
          }
        };
        _0x4d0fef.SetPlayStopSoundFunction = function (_0xef6a44) {
          this.m_playStopSound = _0xef6a44;
        };
        _0x4d0fef.CheckPlayStopSound = function (_0x5b6a3a, _0x1a552f) {
          if (this.m_playStopSound && !this.m_isPlaySound[_0x5b6a3a] && 0x0 == _0x1a552f) {
            this.m_isPlaySound[_0x5b6a3a] = true;
            if (this.m_isClickStopBtn) {
              if (!this.m_isPlayFirstSound) {
                this.m_isPlayFirstSound = true;
                this.m_playStopSound(_0x5b6a3a);
              }
            } else {
              this.m_playStopSound(_0x5b6a3a);
            }
          }
        };
        _0x4d0fef.SetPlateInfo = function (_0x15a49e) {
          _0x25de9f("SetPlateInfo", _0x15a49e);
          this.m_isAward = this.CheckAward(_0x15a49e);
          this.m_plateInfo = this.CompletePlate(_0x15a49e);
          var _0x39b0a8 = this.m_riseTime * _0x504132.ROW;
          var _0x32a2e9 = Math.floor((this.m_time - _0x39b0a8) / this.m_spinSpeed) + 0x2;
          if (_0x32a2e9 < 0x2) {
            _0x32a2e9 = 0x2;
          }
          if (this.m_isClickStopBtn) {
            this.m_stopTime = _0x249be4.strip(this.m_spinSpeed * _0x32a2e9 + this.m_spinDelayTime + _0x39b0a8);
            for (var _0x820443 = 0x0; _0x820443 < _0x504132.COL; _0x820443++) {
              this.m_reelStopTime[_0x820443] = _0x249be4.strip(this.m_spinSpeed * _0x32a2e9);
              this.m_reelPreTime[_0x820443] = _0x249be4.strip(this.m_spinSpeed * (_0x32a2e9 - 0x1));
            }
          } else {
            this.m_stopTime = _0x249be4.strip(this.m_spinSpeed * (_0x32a2e9 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0x504132.COL - 0x1) + this.m_spinDelayTime + _0x39b0a8 + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var _0x2ddc3d = 0x0; _0x2ddc3d < _0x504132.COL; _0x2ddc3d++) {
              this.m_reelStopTime[_0x2ddc3d] = _0x249be4.strip(this.m_spinSpeed * (_0x32a2e9 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * _0x2ddc3d);
              this.m_reelPreTime[_0x2ddc3d] = _0x249be4.strip(this.m_spinSpeed * (_0x32a2e9 + this.m_timesOfBaseSpin - 0x1) + this.m_spinIntervalTimes * this.m_spinSpeed * _0x2ddc3d);
            }
          }
        };
        _0x4d0fef.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x4d0fef.CheckPlate = function (_0x1bd8f9) {
          for (var _0x2e6bac = 0x0; _0x2e6bac < _0x1bd8f9.length; _0x2e6bac++) {
            if (this.m_symbol[_0x2e6bac][_0x504132.ROW_CENTER].getComponent(_0x431a1c).Symbol != _0x1bd8f9[_0x2e6bac]) {
              return _0x2e6bac;
            }
          }
          return -0x1;
        };
        _0x4d0fef.GetSymbolByIndex = function (_0x5c550f) {
          return this.m_symbol[_0x5c550f.x][_0x5c550f.y];
        };
        _0x4d0fef.HideColumnSymbol = function (_0x3fdb10) {
          if (_0x3fdb10 >= 0x0 && _0x3fdb10 < _0x504132.COL) {
            for (var _0x162283 = 0x0; _0x162283 < _0x504132.ROW; _0x162283++) {
              this.m_symbol[_0x3fdb10][_0x162283].active = false;
            }
            this.m_lockColumn[_0x3fdb10] = true;
          }
        };
        _0x4d0fef.LockColumn = function (_0x422993) {
          if (_0x422993 >= 0x0 && _0x422993 < _0x504132.COL) {
            this.m_lockColumn[_0x422993] = true;
          }
        };
        _0x4d0fef.CompletePlate = function (_0x4e2167) {
          for (var _0x213e8f = 0x0; _0x213e8f < _0x504132.COL; _0x213e8f++) {
            for (var _0x4b057b = 0x0; _0x4b057b < _0x504132.ROW; _0x4b057b++) {
              if (_0x4b057b == _0x504132.ROW_CENTER) {
                if (_0x4e2167[_0x213e8f] >= 0x4) {
                  this.m_plateInfo[_0x213e8f][_0x4b057b] = 0x4;
                } else {
                  this.m_plateInfo[_0x213e8f][_0x4b057b] = _0x4e2167[_0x213e8f];
                }
              } else {
                if (0x1 == Math.abs(_0x4b057b - _0x504132.ROW_CENTER) && _0x4e2167[_0x213e8f] == 0x0 || 0x2 == Math.abs(_0x4b057b - _0x504132.ROW_CENTER) && _0x4e2167[_0x213e8f] != 0x0 || 0x3 == Math.abs(_0x4b057b - _0x504132.ROW_CENTER) && _0x4e2167[_0x213e8f] == 0x0) {
                  var _0x2997b2 = Math.floor(0x64 * Math.random()) + 0x1;
                  if (_0x2997b2 >= 0x1 && _0x2997b2 <= 0x20) {
                    _0x2997b2 = 0x0;
                  } else if (_0x2997b2 >= 0x21 && _0x2997b2 <= 0x40) {
                    _0x2997b2 = 0x1;
                  } else if (_0x2997b2 >= 0x41 && _0x2997b2 <= 0x60) {
                    _0x2997b2 = 0x2;
                  } else if (_0x2997b2 >= 0x61) {
                    _0x2997b2 = 0x3;
                  }
                  var _0x2adbf0 = this.m_fakePlate[_0x213e8f][_0x2997b2];
                  this.m_plateInfo[_0x213e8f][_0x4b057b] = _0x2adbf0;
                } else {
                  this.m_plateInfo[_0x213e8f][_0x4b057b] = 0x0;
                }
              }
            }
          }
          return this.m_plateInfo;
        };
        _0x4d0fef.CheckNullSymbol = function (_0xdfde41, _0x1fb8e4, _0x397fdd) {
          if (this.m_plateInfo[_0x1fb8e4][_0x397fdd % _0x504132.ROW] == 0x0) {
            _0xdfde41.active = false;
          } else {
            _0xdfde41.active = true;
          }
        };
        _0x4d0fef.CheckSymbolActive = function (_0x1212b3, _0x4a566d, _0x13e797, _0x1e869a) {
          if (this.m_checkActiveArr[_0x13e797] && _0x1212b3 > this.m_checkActiveArr[_0x13e797]) {
            _0x4a566d.active = !_0x4a566d.active;
            this.SetNodeSkewX(_0x4a566d, 0x0);
          }
          this.m_checkActiveArr[_0x13e797] = _0x1212b3;
        };
        _0x4d0fef.ActiveAwardSymbol = function (_0x45c6bf, _0x4bd4e4) {
          if (this.m_isAward) {
            this.m_symbol[_0x4bd4e4][_0x504132.ROW_CENTER].active = _0x45c6bf;
          }
        };
        _0x4d0fef.CheckAward = function (_0xd892b8) {
          var _0x247d1a = true;
          for (var _0xa11f4 = 0x0; _0xa11f4 < _0xd892b8.length; _0xa11f4++) {
            if (_0xd892b8[_0xa11f4] == 0x0) {
              _0x247d1a = false;
              break;
            }
          }
          return _0x247d1a;
        };
        _0x4d0fef.GetAwardSymbolPosition = function (_0x29977e) {
          return this.m_symbol[_0x29977e][_0x504132.ROW_CENTER].getPosition();
        };
        _0x4d0fef.SetRadian = function (_0x5ab32e, _0x3cd0f5) {
          var _0x26109a = _0x504132.COL_CENTER - _0x5ab32e;
          var _0x1faa1b = this.m_symbol[_0x5ab32e][_0x3cd0f5].getPosition();
          var _0x4912cc = 0x0;
          if (0x0 != _0x26109a) {
            this.SetNodeSkewX(this.m_symbol[_0x5ab32e][_0x3cd0f5], _0x26109a * this.m_skewRate * (0x4 * (_0x1faa1b.y + this.m_slotPosOffset)));
            this.m_symbol[_0x5ab32e][_0x3cd0f5].setPosition(_0x1faa1b.x + _0x26109a * this.m_positionRate * Math.pow(_0x1faa1b.y, 0x2), _0x1faa1b.y);
          }
          if (0x0 == _0x26109a && _0x3cd0f5 == _0x504132.ROW_CENTER && this.m_plateInfo[_0x5ab32e][_0x3cd0f5] >= 0x4) {
            _0x4912cc = this.m_scaleStandardDiff;
          }
          var _0x17fd09 = this.m_scaleStandard + _0x4912cc - Math.abs(_0x1faa1b.y) * (this.m_scaleStandard + _0x4912cc - this.m_scaleRateX) / this.m_relativeHeight;
          var _0x16458f = this.m_scaleStandard + _0x4912cc - Math.abs(_0x1faa1b.y) * (this.m_scaleStandard + _0x4912cc - this.m_scaleRateY) / this.m_relativeHeight;
          this.m_symbol[_0x5ab32e][_0x3cd0f5].setScale(_0x17fd09, _0x16458f);
        };
        _0x4d0fef.SetPlateSymbol = function (_0x2cb8ee) {
          _0x25de9f('SetPlateSymbol', _0x2cb8ee);
          if (0x0 == _0x2cb8ee.length) {
            for (var _0x33576d = 0x0; _0x33576d < _0x504132.COL; _0x33576d++) {
              this.m_lockColumn[_0x33576d] = false;
              this.m_reelStopTime[_0x33576d] = null;
              this.m_reelPreTime[_0x33576d] = null;
              for (var _0x4b64e8 = 0x0; _0x4b64e8 < _0x504132.ROW; _0x4b64e8++) {
                var _0x55baa1 = this.m_fakePlate[_0x33576d][Math.floor(Math.random() * this.m_fakePlate[_0x33576d].length)];
                if (_0x4b64e8 % 0x2 != 0x0) {
                  _0x55baa1 = 0x0;
                }
                var _0x355229 = this.m_symbol[_0x33576d][_0x4b64e8].name;
                this.m_symbol[_0x33576d][_0x4b64e8].removeFromParent();
                this.m_symbol[_0x33576d][_0x4b64e8].destroy();
                this.m_symbol[_0x33576d][_0x4b64e8] = _0x1d1aba(this.m_symbolPrefabs[_0x55baa1]);
                this.node.addChild(this.m_symbol[_0x33576d][_0x4b64e8]);
                var _0x325bef = this.m_symbolSize.width * (_0x33576d + 0.5) + this.m_reelPositionOffset[_0x33576d].x - this.m_viewSize.width / 0x2;
                var _0x50a0f9 = this.m_symbolSize.height / 0x2 * (_0x4b64e8 - 1.5) + this.m_reelPositionOffset[_0x33576d].y - this.m_viewSize.height / 0x2;
                this.m_symbol[_0x33576d][_0x4b64e8].setPosition(_0x3f9483(_0x325bef, _0x50a0f9));
                this.m_symbol[_0x33576d][_0x4b64e8].name = _0x355229;
                this.m_symbol[_0x33576d][_0x4b64e8].active = _0x55baa1 !== 0x0;
              }
            }
          } else {
            var _0x11442f = this.CompletePlate(_0x2cb8ee);
            for (var _0x4a9c16 = 0x0; _0x4a9c16 < _0x504132.COL; _0x4a9c16++) {
              this.m_lockColumn[_0x4a9c16] = false;
              this.m_reelStopTime[_0x4a9c16] = null;
              this.m_reelPreTime[_0x4a9c16] = null;
              for (var _0x12676d = 0x0; _0x12676d < _0x504132.ROW; _0x12676d++) {
                this.m_symbol[_0x4a9c16][_0x12676d].removeFromParent();
                this.m_symbol[_0x4a9c16][_0x12676d].destroy();
                this.m_symbol[_0x4a9c16][_0x12676d] = _0x1d1aba(this.m_symbolPrefabs[_0x11442f[_0x4a9c16][_0x12676d]]);
                this.node.addChild(this.m_symbol[_0x4a9c16][_0x12676d]);
                var _0x5e37bc = this.m_symbolSize.width * (_0x4a9c16 + 0.5) + this.m_reelPositionOffset[_0x4a9c16].x - this.m_viewSize.width / 0x2;
                var _0x48d7d6 = this.m_symbolSize.height / 0x2 * (_0x12676d - 1.5) + this.m_reelPositionOffset[_0x4a9c16].y - this.m_viewSize.height / 0x2;
                this.m_symbol[_0x4a9c16][_0x12676d].setPosition(_0x3f9483(_0x5e37bc, _0x48d7d6));
                this.CheckNullSymbol(this.m_symbol[_0x4a9c16][_0x12676d], _0x4a9c16, _0x12676d);
              }
            }
          }
          for (var _0x1ee620 = 0x0; _0x1ee620 < _0x504132.COL; _0x1ee620++) {
            for (var _0x2dd257 = 0x0; _0x2dd257 < _0x504132.ROW; _0x2dd257++) {
              this.SetRadian(_0x1ee620, _0x2dd257);
            }
          }
        };
        _0x4d0fef.SetNodeSkewX = function (_0x1c994f, _0x22b8b6) {
          var _0x43240d = Math.abs(Math.tan(_0x22b8b6 * Math.PI / 0xb4));
          var _0x3c4d66 = 0xb4 * Math.acos((Math.sqrt(0x4 + _0x43240d * _0x43240d) - _0x43240d) / 0x2) / Math.PI;
          var _0x172b08 = 0x2 / (Math.sqrt(0x4 + _0x43240d * _0x43240d) - _0x43240d);
          _0x1c994f.eulerAngles = _0x3f9483(_0x3c4d66, _0x22b8b6 < 0x0 ? -_0x3c4d66 : _0x3c4d66, 0x0);
          _0x1c994f.setScale(_0x3f9483(_0x172b08));
        };
        _0x3ba313(_0x107193, [{
          'key': "PlateInfo",
          'get': function () {
            return this.m_plateInfo;
          }
        }]);
        return _0x107193;
      }(_0x516ec3);
      _0x3cf735 = _0x141048(_0x3bcc1b.prototype, "m_symbolPrefabs", [_0x100b30], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x1c90a8 = _0x2161c9(_0x5be92d = _0x3bcc1b) || _0x5be92d;
      var _0x8faff;
      var _0x23c31e;
      var _0x2c59bd;
      var _0x346005;
      var _0x418135;
      var _0x1b79b4;
      var _0x473d6e;
      var _0x2c6085;
      var _0x556eff;
      _0x2c7048._RF.pop();
      _0x2c7048._RF.push({}, '0eb65MCx2hPgakNMH1hlLym', "EffectPlate", undefined);
      var _0x1d5e39 = _0x362834.property;
      var _0x1d3908 = ["Pay_05", "Pay_04", "Pay_03", "Pay_02", "Pay_01", 'Pay_05'];
      var _0x21a845 = {};
      _0x8faff = _0x1d5e39({
        'type': _0x1c90a8,
        'tooltip': '轉輪'
      });
      _0x23c31e = _0x1d5e39({
        'type': _0x25689e,
        'tooltip': "symbol相關表演的節點"
      });
      _0x2c59bd = _0x1d5e39({
        'type': _0x25689e,
        'tooltip': "pay相關表演的節點"
      });
      _0x346005 = _0x1d5e39({
        'type': _0x55259c,
        'tooltip': "pay動畫"
      });
      _0x556eff = function (_0xfd53c3) {
        function _0x6bfac3() {
          var _0x379df6;
          var _0x284f0b = arguments.length;
          var _0x507aaa = new Array(_0x284f0b);
          for (var _0xb99a5d = 0x0; _0xb99a5d < _0x284f0b; _0xb99a5d++) {
            _0x507aaa[_0xb99a5d] = arguments[_0xb99a5d];
          }
          _0x379df6 = _0xfd53c3.call.apply(_0xfd53c3, [this].concat(_0x507aaa)) || this;
          _0x4dcc8a(_0x379df6, "m_slotReels", _0x418135, _0x2aedb8(_0x379df6));
          _0x4dcc8a(_0x379df6, "m_effectNode", _0x1b79b4, _0x2aedb8(_0x379df6));
          _0x4dcc8a(_0x379df6, "m_payframe", _0x473d6e, _0x2aedb8(_0x379df6));
          _0x4dcc8a(_0x379df6, "m_payEffectPrefabs", _0x2c6085, _0x2aedb8(_0x379df6));
          _0x379df6.m_multiplyString = [" ", 'X3', 'X5', 'X9'];
          _0x379df6.m_hintEffects = new Array();
          _0x379df6.m_symbolEffects = new Array();
          _0x379df6.m_wildLoopEffects = new Array();
          _0x379df6.m_multiplyLevel = 0x0;
          _0x379df6.m_isMidWild = false;
          _0x379df6.m_gameView = null;
          _0x379df6.m_winningSoundCount = 0x0;
          return _0x379df6;
        }
        _0x2b152c(_0x6bfac3, _0xfd53c3);
        var _0x5be663 = _0x6bfac3.prototype;
        _0x5be663.onLoad = function () {
          for (var _0x3d63a5 = 0x0; _0x3d63a5 < _0x504132.COL; _0x3d63a5++) {
            var _0x2c4908 = new Array();
            for (var _0x9a5313 = 0x0; _0x9a5313 < _0x504132.ROW; _0x9a5313++) {
              _0x2c4908.push(null);
            }
            this.m_symbolEffects.push(_0x2c4908);
          }
          for (var _0x3eaf4 = 0x0; _0x3eaf4 < _0x504132.COL; _0x3eaf4++) {
            var _0x7f704e = new Array();
            for (var _0x21d824 = 0x0; _0x21d824 < _0x504132.ROW; _0x21d824++) {
              _0x7f704e.push(null);
            }
            this.m_wildLoopEffects.push(_0x7f704e);
          }
          for (var _0x5c1a47 = 0x0; _0x5c1a47 < _0x504132.COL; _0x5c1a47++) {
            this.m_hintEffects.push(null);
          }
          _0x21a845[_0x49c21a.Lang.EN] = 0x0;
          _0x21a845[_0x49c21a.Lang.CN] = 0x1;
        };
        _0x5be663.start = function () {};
        _0x5be663.Init = function (_0x518527) {
          this.m_gameView = _0x518527;
        };
        _0x5be663.ShowSymbolEffect = function (_0x2a039c, _0x29835c, _0x299f4e, _0x567b42, _0x19769b) {
          var _0x3ac716 = this;
          return new Promise(_0x2dadf4(_0x4f85d0().mark(function _0x476055(_0x3b8598) {
            var _0x4223dc;
            var _0x36140e;
            var _0x5244d1;
            var _0x40b294;
            var _0x16392d;
            return _0x4f85d0().wrap(function (_0x32831f) {
              for (;;) {
                switch (_0x32831f.prev = _0x32831f.next) {
                  case 0x0:
                    _0x3ac716.m_multiplyLevel = _0x299f4e;
                    _0x3ac716.CheckWildWin(_0x2a039c);
                    _0x3ac716.PlayAwardMusic(_0x29835c);
                    _0x4223dc = 0x0;
                    _0x36140e = new Array();
                    for (_0x5244d1 = 0x0; _0x5244d1 < _0x2a039c.length; _0x5244d1++) {
                      _0x40b294 = _0x3ac716.m_slotReels.GetSymbolByIndex(_0x3f9483(_0x5244d1, _0x504132.ROW_CENTER));
                      _0x16392d = _0x40b294.getComponent(_0x431a1c);
                      _0x36140e.push(_0x16392d.ShowWin(_0x299f4e, _0x5244d1 === _0x504132.COL_CENTER));
                    }
                    if (!_0x19769b) {
                      _0x3ac716.ShowHintEffect(_0x29835c, _0x567b42, _0x4223dc);
                    }
                    _0x32831f.next = 0x9;
                    return Promise.all(_0x36140e).then(function () {
                      _0x3b8598();
                    });
                  case 0x9:
                    if (_0x19769b) {
                      _0x3ac716.ShowHintEffect(_0x29835c, _0x567b42, _0x4223dc);
                    }
                  case 0xa:
                  case "end":
                    return _0x32831f.stop();
                }
              }
            }, _0x476055);
          })));
        };
        _0x5be663.ShowHintEffect = function (_0x273e49, _0x38d90e, _0x1f5cd1) {
          var _0x36b99a = this;
          if (undefined === _0x1f5cd1) {
            _0x1f5cd1 = 0x0;
          }
          _0x28eacb(this.m_effectNode).delay(0.06 + _0x1f5cd1).call(function () {
            var _0x21ae92 = _0x36b99a.m_hintEffects[_0x273e49];
            if (_0x21ae92) {
              _0x21ae92.active = true;
            } else {
              (_0x21ae92 = _0x1d1aba(_0x36b99a.m_payEffectPrefabs[_0x273e49])).getComponent(_0x225bb7).play(_0x1d3908[_0x273e49]);
              _0x36b99a.m_payframe[_0x273e49].addChild(_0x21ae92);
              _0x36b99a.m_hintEffects[_0x273e49] = _0x21ae92;
            }
            if (_0x38d90e == 0x1) {
              _0x21ae92.getComponent(_0x225bb7).play(_0x1d3908[_0x273e49]);
            } else if (_0x38d90e == 0x0) {
              _0x21ae92.getComponent(_0x225bb7).play(_0x1d3908[_0x273e49] + '_s');
            }
            _0x36b99a.m_payframe[_0x273e49].active = true;
          }).start();
        };
        _0x5be663.HideSymbolEffect = function () {
          for (var _0x1dd05e = 0x0; _0x1dd05e < this.m_symbolEffects.length; _0x1dd05e++) {
            if (null != this.m_symbolEffects[_0x1dd05e]) {
              for (var _0x2db470 = 0x0; _0x2db470 < this.m_symbolEffects[_0x1dd05e].length; _0x2db470++) {
                if (this.m_symbolEffects[_0x1dd05e][_0x2db470] && this.m_symbolEffects[_0x1dd05e][_0x2db470].active) {
                  this.m_symbolEffects[_0x1dd05e][_0x2db470].active = false;
                }
              }
            }
          }
          for (var _0x10d030 = 0x0; _0x10d030 < this.m_wildLoopEffects.length; _0x10d030++) {
            if (null != this.m_wildLoopEffects[_0x10d030]) {
              for (var _0xe69a7d = 0x0; _0xe69a7d < this.m_wildLoopEffects[_0x10d030].length; _0xe69a7d++) {
                if (this.m_wildLoopEffects[_0x10d030][_0xe69a7d] && this.m_wildLoopEffects[_0x10d030][_0xe69a7d].active) {
                  this.m_wildLoopEffects[_0x10d030][_0xe69a7d].active = false;
                }
              }
            }
          }
          for (var _0x5f0c4b = 0x0; _0x5f0c4b < _0x504132.COL; _0x5f0c4b++) {
            this.m_slotReels.ActiveAwardSymbol(true, _0x5f0c4b);
          }
          _0x45ad1b.instance.ActionManager.removeAllActionsFromTarget(this.m_effectNode);
        };
        _0x5be663.HideHintEffect = function () {
          for (var _0x46237e = 0x0; _0x46237e < this.m_hintEffects.length; _0x46237e++) {
            if (this.m_hintEffects[_0x46237e] && this.m_hintEffects[_0x46237e].active) {
              this.m_hintEffects[_0x46237e].active = false;
            }
          }
          for (var _0x59c40f = 0x0; _0x59c40f < this.m_payframe.length; _0x59c40f++) {
            _0x45ad1b.instance.ActionManager.removeAllActionsFromTarget(this.m_payframe[_0x59c40f]);
          }
        };
        _0x5be663.LandscapeByHintEffect = function (_0x31ab46, _0x3fbea4) {
          for (var _0xc5a7df = 0x0; _0xc5a7df < this.m_hintEffects.length; _0xc5a7df++) {
            if (this.m_hintEffects[_0xc5a7df] && this.m_hintEffects[_0xc5a7df].active) {
              if (_0x3fbea4 == 0x1) {
                this.m_hintEffects[_0xc5a7df].getComponent(_0x225bb7).play(_0x1d3908[_0x31ab46]);
              } else if (_0x3fbea4 == 0x0) {
                this.m_hintEffects[_0xc5a7df].getComponent(_0x225bb7).play(_0x1d3908[_0x31ab46] + '_s');
              }
            }
          }
        };
        _0x5be663.CheckWildWin = function (_0x50f453) {
          this.m_isMidWild = _0x50f453[_0x504132.COL_CENTER] >= 0x4;
        };
        _0x5be663.PlayAwardMusic = function (_0x993539) {
          var _0x3b8a10 = this;
          this.m_winningSoundCount++;
          if (_0x993539 == _0x504132.Award.FA_FA_FA || _0x993539 == _0x504132.Award.GOLD) {
            _0x21aed2.Play(_0x504132.AudioClips.Wild_show_fax3);
          } else if (_0x993539 == _0x504132.Award.TurbidPurple) {
            _0x21aed2.Play(_0x504132.AudioClips.Wild_show1);
          } else if (_0x993539 == _0x504132.Award.COPPER) {
            _0x21aed2.Play(_0x504132.AudioClips.Wild_show2);
          } else if (_0x993539 == _0x504132.Award.SILVER) {
            _0x21aed2.Play(_0x504132.AudioClips.Wild_show3);
          } else {
            _0x21aed2.Play(_0x6bfac3.AWARD_EFFECT_TYPE[_0x993539], false, function () {
              _0x3b8a10.m_winningSoundCount--;
              if (0x0 == _0x3b8a10.m_winningSoundCount) {
                _0x3b8a10.m_gameView.SetBGMusicBack();
              }
            });
          }
        };
        _0x5be663.SetTxt = function (_0x1c2861) {};
        _0x5be663.update = function (_0x1c0c5b) {};
        return _0x6bfac3;
      }(_0x516ec3);
      _0x556eff.AWARD_EFFECT_TYPE = [_0x504132.AudioClips.Mg_winning, _0x504132.AudioClips.Mg_symbol03, _0x504132.AudioClips.Mg_symbol03, _0x504132.AudioClips.Mg_wild_win, _0x504132.AudioClips.Mg_wild_win];
      _0x418135 = _0x141048(_0x556eff.prototype, 'm_slotReels', [_0x8faff], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1b79b4 = _0x141048(_0x556eff.prototype, "m_effectNode", [_0x23c31e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x473d6e = _0x141048(_0x556eff.prototype, "m_payframe", [_0x2c59bd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x2c6085 = _0x141048(_0x556eff.prototype, "m_payEffectPrefabs", [_0x346005], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x2c7048._RF.pop();
      var _0x5ab34f = function () {
        function _0x29fe79() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x470ffb = _0x29fe79.prototype;
        _0x470ffb.define = function (_0x28cd55, _0x4b9752, _0x33b4eb) {
          this._registry[_0x28cd55] = {
            'factory': _0x4b9752,
            'resolveMap': _0x33b4eb
          };
        };
        _0x470ffb.require = function (_0x5d3764) {
          return this._require(_0x5d3764);
        };
        _0x470ffb.throwInvalidWrapper = function (_0x226ead, _0x262b81) {
          throw new Error("Module '" + _0x226ead + "' imported from '" + _0x262b81 + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x470ffb._require = function (_0x5cc651, _0xd9ee98) {
          var _0x25ed1c = this._moduleCache[_0x5cc651];
          if (_0x25ed1c) {
            return _0x25ed1c.exports;
          }
          var _0x520ff1 = {
            'id': _0x5cc651,
            'exports': {}
          };
          this._moduleCache[_0x5cc651] = _0x520ff1;
          this._tryModuleLoad(_0x520ff1, _0x5cc651);
          return _0x520ff1.exports;
        };
        _0x470ffb._resolve = function (_0x1b121d, _0x4da269) {
          return this._resolveFromInfos(_0x1b121d, _0x4da269) || this._throwUnresolved(_0x1b121d, _0x4da269);
        };
        _0x470ffb._resolveFromInfos = function (_0x411d82, _0x32fafc) {
          var _0x1d7fd6;
          var _0x1a8212;
          return _0x411d82 in cjsInfos ? _0x411d82 : _0x32fafc && null != (_0x1d7fd6 = null == (_0x1a8212 = cjsInfos[_0x32fafc]) ? undefined : _0x1a8212.resolveCache[_0x411d82]) ? _0x1d7fd6 : undefined;
        };
        _0x470ffb._tryModuleLoad = function (_0x4db9e0, _0x3752f1) {
          var _0x2d2a58 = true;
          try {
            this._load(_0x4db9e0, _0x3752f1);
            _0x2d2a58 = false;
          } finally {
            if (_0x2d2a58) {
              delete this._moduleCache[_0x3752f1];
            }
          }
        };
        _0x470ffb._load = function (_0xe1be59, _0x4aaaf0) {
          var _0x19ef8d = this._loadWrapper(_0x4aaaf0);
          var _0x138531 = _0x19ef8d.factory;
          var _0x5e425e = _0x19ef8d.resolveMap;
          var _0x3300a5 = this._createRequire(_0xe1be59);
          var _0x148773 = _0x5e425e ? this._createRequireWithResolveMap("function" == typeof _0x5e425e ? _0x5e425e() : _0x5e425e, _0x3300a5) : _0x3300a5;
          _0x138531(_0xe1be59.exports, _0x148773, _0xe1be59);
        };
        _0x470ffb._loadWrapper = function (_0x27c012) {
          return _0x27c012 in this._registry ? this._registry[_0x27c012] : this._loadHostProvidedModules(_0x27c012);
        };
        _0x470ffb._loadHostProvidedModules = function (_0x5db207) {
          return {
            'factory': function (_0x40b082, _0x4c3262, _0x5b75f5) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x5db207 + "'.");
              }
              try {
                _0x5b75f5.exports = require(_0x5db207);
              } catch (_0x18b174) {
                throw new Error("Exception thrown when calling host defined require('" + _0x5db207 + "').", {
                  'cause': _0x18b174
                });
              }
            }
          };
        };
        _0x470ffb._createRequire = function (_0xc11ade) {
          var _0x5330f3 = this;
          return function (_0xcd0728) {
            return _0x5330f3._require(_0xcd0728, _0xc11ade);
          };
        };
        _0x470ffb._createRequireWithResolveMap = function (_0x101676, _0x1d2a4b) {
          return function (_0x5a97d6) {
            var _0x110d95 = _0x101676[_0x5a97d6];
            if (_0x110d95) {
              return _0x1d2a4b(_0x110d95);
            }
            throw new Error("Unresolved specifier " + _0x5a97d6);
          };
        };
        _0x470ffb._throwUnresolved = function (_0x29ef34, _0x53601c) {
          throw new Error("Unable to resolve " + _0x29ef34 + " from " + parent + '.');
        };
        return _0x29fe79;
      }();
      var _0x23cda2 = new _0x5ab34f();
      var _0xcc4b5a;
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x2ef0d5, _0x2ccdff, _0x368fd2, _0x5155bb, _0x39442f) {
        _0x368fd2.exports = _0x283fee;
        var _0x2621f5 = null;
        try {
          _0x2621f5 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0xfbfa8a) {}
        function _0x283fee(_0x4ad27c, _0x4ae295, _0x126096) {
          this.low = 0x0 | _0x4ad27c;
          this.high = 0x0 | _0x4ae295;
          this.unsigned = !!_0x126096;
        }
        function _0x34681a(_0x1aa5d6) {
          return true === (_0x1aa5d6 && _0x1aa5d6.__isLong__);
        }
        _0x283fee.prototype.__isLong__;
        Object.defineProperty(_0x283fee.prototype, "__isLong__", {
          'value': true
        });
        _0x283fee.isLong = _0x34681a;
        var _0x46cbb9 = {};
        var _0x4e0095 = {};
        function _0x5625f8(_0x186a6e, _0x2d301b) {
          var _0x2af921;
          var _0x366975;
          var _0x4f1ec9;
          return _0x2d301b ? (_0x4f1ec9 = 0x0 <= (_0x186a6e >>>= 0x0) && _0x186a6e < 0x100) && (_0x366975 = _0x4e0095[_0x186a6e]) ? _0x366975 : (_0x2af921 = new _0x283fee(_0x186a6e, (0x0 | _0x186a6e) < 0x0 ? -0x1 : 0x0, true), _0x4f1ec9 && (_0x4e0095[_0x186a6e] = _0x2af921), _0x2af921) : (_0x4f1ec9 = -0x80 <= (_0x186a6e |= 0x0) && _0x186a6e < 0x80) && (_0x366975 = _0x46cbb9[_0x186a6e]) ? _0x366975 : (_0x2af921 = new _0x283fee(_0x186a6e, _0x186a6e < 0x0 ? -0x1 : 0x0, false), _0x4f1ec9 && (_0x46cbb9[_0x186a6e] = _0x2af921), _0x2af921);
        }
        function _0x910c4e(_0x48f6e9, _0x3645c5) {
          if (isNaN(_0x48f6e9)) {
            return _0x3645c5 ? _0x2cfc81 : _0x2de1ea;
          }
          if (_0x3645c5) {
            if (_0x48f6e9 < 0x0) {
              return _0x2cfc81;
            }
            if (_0x48f6e9 >= 18446744073709552000) {
              return _0x361c2d;
            }
          } else {
            if (_0x48f6e9 <= -9223372036854776000) {
              return _0x29b67f;
            }
            if (_0x48f6e9 + 0x1 >= 9223372036854776000) {
              return _0x521ea7;
            }
          }
          return _0x48f6e9 < 0x0 ? _0x910c4e(-_0x48f6e9, _0x3645c5).neg() : new _0x283fee(_0x48f6e9 % 0x100000000 | 0x0, _0x48f6e9 / 0x100000000 | 0x0, _0x3645c5);
        }
        function _0x400ce4(_0x3d4025, _0xe1b432, _0x41146a) {
          return new _0x283fee(_0x3d4025, _0xe1b432, _0x41146a);
        }
        _0x283fee.fromInt = _0x5625f8;
        _0x283fee.fromNumber = _0x910c4e;
        _0x283fee.fromBits = _0x400ce4;
        var _0x25e106 = Math.pow;
        function _0x5ec962(_0xe7a50f, _0x401cfa, _0x293024) {
          if (0x0 === _0xe7a50f.length) {
            throw Error("empty string");
          }
          if ("NaN" === _0xe7a50f || 'Infinity' === _0xe7a50f || "+Infinity" === _0xe7a50f || "-Infinity" === _0xe7a50f) {
            return _0x2de1ea;
          }
          if ("number" == typeof _0x401cfa) {
            _0x293024 = _0x401cfa;
            _0x401cfa = false;
          } else {
            _0x401cfa = !!_0x401cfa;
          }
          if ((_0x293024 = _0x293024 || 0xa) < 0x2 || 0x24 < _0x293024) {
            throw RangeError("radix");
          }
          var _0x367c39;
          if ((_0x367c39 = _0xe7a50f.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x367c39) {
            return _0x5ec962(_0xe7a50f.substring(0x1), _0x401cfa, _0x293024).neg();
          }
          var _0xae0bf5 = _0x910c4e(_0x25e106(_0x293024, 0x8));
          var _0x37b97a = _0x2de1ea;
          for (var _0x598f30 = 0x0; _0x598f30 < _0xe7a50f.length; _0x598f30 += 0x8) {
            var _0x5d64e9 = Math.min(0x8, _0xe7a50f.length - _0x598f30);
            var _0x356833 = parseInt(_0xe7a50f.substring(_0x598f30, _0x598f30 + _0x5d64e9), _0x293024);
            if (_0x5d64e9 < 0x8) {
              var _0x3d7857 = _0x910c4e(_0x25e106(_0x293024, _0x5d64e9));
              _0x37b97a = _0x37b97a.mul(_0x3d7857).add(_0x910c4e(_0x356833));
            } else {
              _0x37b97a = (_0x37b97a = _0x37b97a.mul(_0xae0bf5)).add(_0x910c4e(_0x356833));
            }
          }
          _0x37b97a.unsigned = _0x401cfa;
          return _0x37b97a;
        }
        function _0x386784(_0x4b397a, _0x2009f7) {
          return 'number' == typeof _0x4b397a ? _0x910c4e(_0x4b397a, _0x2009f7) : "string" == typeof _0x4b397a ? _0x5ec962(_0x4b397a, _0x2009f7) : new _0x283fee(_0x4b397a.low, _0x4b397a.high, "boolean" == typeof _0x2009f7 ? _0x2009f7 : _0x4b397a.unsigned);
        }
        _0x283fee.fromString = _0x5ec962;
        _0x283fee.fromValue = _0x386784;
        var _0x5045ba = _0x5625f8(16777216);
        var _0x2de1ea = _0x5625f8(0x0);
        _0x283fee.ZERO = _0x2de1ea;
        var _0x2cfc81 = _0x5625f8(0x0, true);
        _0x283fee.UZERO = _0x2cfc81;
        var _0x33dcc8 = _0x5625f8(0x1);
        _0x283fee.ONE = _0x33dcc8;
        var _0xeb9fdc = _0x5625f8(0x1, true);
        _0x283fee.UONE = _0xeb9fdc;
        var _0x16ee4c = _0x5625f8(-0x1);
        _0x283fee.NEG_ONE = _0x16ee4c;
        var _0x521ea7 = new _0x283fee(-0x1, 0x7fffffff, false);
        _0x283fee.MAX_VALUE = _0x521ea7;
        var _0x361c2d = new _0x283fee(-0x1, -0x1, true);
        _0x283fee.MAX_UNSIGNED_VALUE = _0x361c2d;
        var _0x29b67f = new _0x283fee(0x0, -0x80000000, false);
        _0x283fee.MIN_VALUE = _0x29b67f;
        var _0x12f831 = _0x283fee.prototype;
        _0x12f831.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x12f831.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x12f831.toString = function (_0x303479) {
          if ((_0x303479 = _0x303479 || 0xa) < 0x2 || 0x24 < _0x303479) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x29b67f)) {
              var _0x2cdc8e = _0x910c4e(_0x303479);
              var _0x4a9c01 = this.div(_0x2cdc8e);
              var _0xcad510 = _0x4a9c01.mul(_0x2cdc8e).sub(this);
              return _0x4a9c01.toString(_0x303479) + _0xcad510.toInt().toString(_0x303479);
            }
            return '-' + this.neg().toString(_0x303479);
          }
          var _0x249e29 = _0x910c4e(_0x25e106(_0x303479, 0x6), this.unsigned);
          var _0x40fdac = this;
          for (var _0x9feb84 = '';;) {
            var _0x124849 = _0x40fdac.div(_0x249e29);
            var _0x506d19 = (_0x40fdac.sub(_0x124849.mul(_0x249e29)).toInt() >>> 0x0).toString(_0x303479);
            if ((_0x40fdac = _0x124849).isZero()) {
              return _0x506d19 + _0x9feb84;
            }
            for (; _0x506d19.length < 0x6;) {
              _0x506d19 = '0' + _0x506d19;
            }
            _0x9feb84 = '' + _0x506d19 + _0x9feb84;
          }
        };
        _0x12f831.getHighBits = function () {
          return this.high;
        };
        _0x12f831.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x12f831.getLowBits = function () {
          return this.low;
        };
        _0x12f831.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x12f831.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x29b67f) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x122e2a = 0x0 != this.high ? this.high : this.low;
          for (var _0x3f0f9f = 0x1f; _0x3f0f9f > 0x0 && 0x0 == (_0x122e2a & 0x1 << _0x3f0f9f); _0x3f0f9f--) {
            ;
          }
          return 0x0 != this.high ? _0x3f0f9f + 0x21 : _0x3f0f9f + 0x1;
        };
        _0x12f831.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x12f831.eqz = _0x12f831.isZero;
        _0x12f831.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x12f831.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x12f831.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x12f831.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x12f831.equals = function (_0x4fd170) {
          if (!(true === (_0x4fd170 && _0x4fd170.__isLong__))) {
            _0x4fd170 = 'number' == typeof _0x4fd170 ? _0x910c4e(_0x4fd170, undefined) : "string" == typeof _0x4fd170 ? _0x5ec962(_0x4fd170, undefined) : new _0x283fee(_0x4fd170.low, _0x4fd170.high, _0x4fd170.unsigned);
          }
          return (this.unsigned === _0x4fd170.unsigned || this.high >>> 0x1f != 0x1 || _0x4fd170.high >>> 0x1f != 0x1) && this.high === _0x4fd170.high && this.low === _0x4fd170.low;
        };
        _0x12f831.eq = _0x12f831.equals;
        _0x12f831.notEquals = function (_0x4c256a) {
          return !this.eq(_0x4c256a);
        };
        _0x12f831.neq = _0x12f831.notEquals;
        _0x12f831.ne = _0x12f831.notEquals;
        _0x12f831.lessThan = function (_0x4a60cb) {
          return this.comp(_0x4a60cb) < 0x0;
        };
        _0x12f831.lt = _0x12f831.lessThan;
        _0x12f831.lessThanOrEqual = function (_0x174a7e) {
          return this.comp(_0x174a7e) <= 0x0;
        };
        _0x12f831.lte = _0x12f831.lessThanOrEqual;
        _0x12f831.le = _0x12f831.lessThanOrEqual;
        _0x12f831.greaterThan = function (_0x1080a8) {
          return this.comp(_0x1080a8) > 0x0;
        };
        _0x12f831.gt = _0x12f831.greaterThan;
        _0x12f831.greaterThanOrEqual = function (_0x19abb4) {
          return this.comp(_0x19abb4) >= 0x0;
        };
        _0x12f831.gte = _0x12f831.greaterThanOrEqual;
        _0x12f831.ge = _0x12f831.greaterThanOrEqual;
        _0x12f831.compare = function (_0x342478) {
          if (!(true === (_0x342478 && _0x342478.__isLong__))) {
            _0x342478 = 'number' == typeof _0x342478 ? _0x910c4e(_0x342478, undefined) : "string" == typeof _0x342478 ? _0x5ec962(_0x342478, undefined) : new _0x283fee(_0x342478.low, _0x342478.high, _0x342478.unsigned);
          }
          if (this.eq(_0x342478)) {
            return 0x0;
          }
          var _0x309215 = this.isNegative();
          var _0x3f93f7 = _0x342478.isNegative();
          return _0x309215 && !_0x3f93f7 ? -0x1 : !_0x309215 && _0x3f93f7 ? 0x1 : this.unsigned ? _0x342478.high >>> 0x0 > this.high >>> 0x0 || _0x342478.high === this.high && _0x342478.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x342478).isNegative() ? -0x1 : 0x1;
        };
        _0x12f831.comp = _0x12f831.compare;
        _0x12f831.negate = function () {
          return !this.unsigned && this.eq(_0x29b67f) ? _0x29b67f : this.not().add(_0x33dcc8);
        };
        _0x12f831.neg = _0x12f831.negate;
        _0x12f831.add = function (_0x2bb360) {
          if (!(true === (_0x2bb360 && _0x2bb360.__isLong__))) {
            _0x2bb360 = 'number' == typeof _0x2bb360 ? _0x910c4e(_0x2bb360, undefined) : "string" == typeof _0x2bb360 ? _0x5ec962(_0x2bb360, undefined) : new _0x283fee(_0x2bb360.low, _0x2bb360.high, _0x2bb360.unsigned);
          }
          var _0x467a5e = this.high >>> 0x10;
          var _0x6bd74d = 0xffff & this.high;
          var _0x30416b = this.low >>> 0x10;
          var _0x4b88a3 = 0xffff & this.low;
          var _0x10408b = _0x2bb360.high >>> 0x10;
          var _0x4f3420 = 0xffff & _0x2bb360.high;
          var _0x8971bd = _0x2bb360.low >>> 0x10;
          var _0x4212a0 = 0x0;
          var _0x46f3df = 0x0;
          var _0x5250ac = 0x0;
          var _0x4882c0 = 0x0;
          _0x5250ac += (_0x4882c0 += _0x4b88a3 + (0xffff & _0x2bb360.low)) >>> 0x10;
          _0x46f3df += (_0x5250ac += _0x30416b + _0x8971bd) >>> 0x10;
          _0x4212a0 += (_0x46f3df += _0x6bd74d + _0x4f3420) >>> 0x10;
          _0x4212a0 += _0x467a5e + _0x10408b;
          return new _0x283fee((_0x5250ac &= 0xffff) << 0x10 | (_0x4882c0 &= 0xffff), (_0x4212a0 &= 0xffff) << 0x10 | (_0x46f3df &= 0xffff), this.unsigned);
        };
        _0x12f831.subtract = function (_0x16bd13) {
          if (!(true === (_0x16bd13 && _0x16bd13.__isLong__))) {
            _0x16bd13 = 'number' == typeof _0x16bd13 ? _0x910c4e(_0x16bd13, undefined) : "string" == typeof _0x16bd13 ? _0x5ec962(_0x16bd13, undefined) : new _0x283fee(_0x16bd13.low, _0x16bd13.high, _0x16bd13.unsigned);
          }
          return this.add(_0x16bd13.neg());
        };
        _0x12f831.sub = _0x12f831.subtract;
        _0x12f831.multiply = function (_0x462295) {
          if (this.isZero()) {
            return _0x2de1ea;
          }
          if (!(true === (_0x462295 && _0x462295.__isLong__))) {
            _0x462295 = 'number' == typeof _0x462295 ? _0x910c4e(_0x462295, undefined) : "string" == typeof _0x462295 ? _0x5ec962(_0x462295, undefined) : new _0x283fee(_0x462295.low, _0x462295.high, _0x462295.unsigned);
          }
          if (_0x2621f5) {
            return new _0x283fee(_0x2621f5.mul(this.low, this.high, _0x462295.low, _0x462295.high), _0x2621f5.get_high(), this.unsigned);
          }
          if (_0x462295.isZero()) {
            return _0x2de1ea;
          }
          if (this.eq(_0x29b67f)) {
            return _0x462295.isOdd() ? _0x29b67f : _0x2de1ea;
          }
          if (_0x462295.eq(_0x29b67f)) {
            return this.isOdd() ? _0x29b67f : _0x2de1ea;
          }
          if (this.isNegative()) {
            return _0x462295.isNegative() ? this.neg().mul(_0x462295.neg()) : this.neg().mul(_0x462295).neg();
          }
          if (_0x462295.isNegative()) {
            return this.mul(_0x462295.neg()).neg();
          }
          if (this.lt(_0x5045ba) && _0x462295.lt(_0x5045ba)) {
            return _0x910c4e(this.toNumber() * _0x462295.toNumber(), this.unsigned);
          }
          var _0x3c2772 = this.high >>> 0x10;
          var _0x464883 = 0xffff & this.high;
          var _0x108e32 = this.low >>> 0x10;
          var _0x48d666 = 0xffff & this.low;
          var _0x3eae85 = _0x462295.high >>> 0x10;
          var _0x26bc17 = 0xffff & _0x462295.high;
          var _0x2377f7 = _0x462295.low >>> 0x10;
          var _0x56d644 = 0xffff & _0x462295.low;
          var _0x35ed03 = 0x0;
          var _0x2a04ec = 0x0;
          var _0x3417bc = 0x0;
          var _0x1948b9 = 0x0;
          _0x3417bc += (_0x1948b9 += _0x48d666 * _0x56d644) >>> 0x10;
          _0x2a04ec += (_0x3417bc += _0x108e32 * _0x56d644) >>> 0x10;
          _0x3417bc &= 0xffff;
          _0x2a04ec += (_0x3417bc += _0x48d666 * _0x2377f7) >>> 0x10;
          _0x35ed03 += (_0x2a04ec += _0x464883 * _0x56d644) >>> 0x10;
          _0x2a04ec &= 0xffff;
          _0x35ed03 += (_0x2a04ec += _0x108e32 * _0x2377f7) >>> 0x10;
          _0x2a04ec &= 0xffff;
          _0x35ed03 += (_0x2a04ec += _0x48d666 * _0x26bc17) >>> 0x10;
          _0x35ed03 += _0x3c2772 * _0x56d644 + _0x464883 * _0x2377f7 + _0x108e32 * _0x26bc17 + _0x48d666 * _0x3eae85;
          return new _0x283fee((_0x3417bc &= 0xffff) << 0x10 | (_0x1948b9 &= 0xffff), (_0x35ed03 &= 0xffff) << 0x10 | (_0x2a04ec &= 0xffff), this.unsigned);
        };
        _0x12f831.mul = _0x12f831.multiply;
        _0x12f831.divide = function (_0x3ff13c) {
          if (!(true === (_0x3ff13c && _0x3ff13c.__isLong__))) {
            _0x3ff13c = 'number' == typeof _0x3ff13c ? _0x910c4e(_0x3ff13c, undefined) : "string" == typeof _0x3ff13c ? _0x5ec962(_0x3ff13c, undefined) : new _0x283fee(_0x3ff13c.low, _0x3ff13c.high, _0x3ff13c.unsigned);
          }
          if (_0x3ff13c.isZero()) {
            throw Error("division by zero");
          }
          var _0x33ee92;
          var _0x416e75;
          var _0x2ce709;
          if (_0x2621f5) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x3ff13c.low || -0x1 !== _0x3ff13c.high ? new _0x283fee((this.unsigned ? _0x2621f5.div_u : _0x2621f5.div_s)(this.low, this.high, _0x3ff13c.low, _0x3ff13c.high), _0x2621f5.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x2cfc81 : _0x2de1ea;
          }
          if (this.unsigned) {
            if (!_0x3ff13c.unsigned) {
              _0x3ff13c = _0x3ff13c.toUnsigned();
            }
            if (_0x3ff13c.gt(this)) {
              return _0x2cfc81;
            }
            if (_0x3ff13c.gt(this.shru(0x1))) {
              return _0xeb9fdc;
            }
            _0x2ce709 = _0x2cfc81;
          } else {
            if (this.eq(_0x29b67f)) {
              return _0x3ff13c.eq(_0x33dcc8) || _0x3ff13c.eq(_0x16ee4c) ? _0x29b67f : _0x3ff13c.eq(_0x29b67f) ? _0x33dcc8 : (_0x33ee92 = this.shr(0x1).div(_0x3ff13c).shl(0x1)).eq(_0x2de1ea) ? _0x3ff13c.isNegative() ? _0x33dcc8 : _0x16ee4c : (_0x416e75 = this.sub(_0x3ff13c.mul(_0x33ee92)), _0x2ce709 = _0x33ee92.add(_0x416e75.div(_0x3ff13c)));
            }
            if (_0x3ff13c.eq(_0x29b67f)) {
              return this.unsigned ? _0x2cfc81 : _0x2de1ea;
            }
            if (this.isNegative()) {
              return _0x3ff13c.isNegative() ? this.neg().div(_0x3ff13c.neg()) : this.neg().div(_0x3ff13c).neg();
            }
            if (_0x3ff13c.isNegative()) {
              return this.div(_0x3ff13c.neg()).neg();
            }
            _0x2ce709 = _0x2de1ea;
          }
          for (_0x416e75 = this; _0x416e75.gte(_0x3ff13c);) {
            _0x33ee92 = Math.max(0x1, Math.floor(_0x416e75.toNumber() / _0x3ff13c.toNumber()));
            var _0x5afc4f = Math.ceil(Math.log(_0x33ee92) / Math.LN2);
            var _0xf90c66 = _0x5afc4f <= 0x30 ? 0x1 : _0x25e106(0x2, _0x5afc4f - 0x30);
            var _0x5c2804 = _0x910c4e(_0x33ee92);
            for (var _0x596d52 = _0x5c2804.mul(_0x3ff13c); _0x596d52.isNegative() || _0x596d52.gt(_0x416e75);) {
              _0x596d52 = (_0x5c2804 = _0x910c4e(_0x33ee92 -= _0xf90c66, this.unsigned)).mul(_0x3ff13c);
            }
            if (_0x5c2804.isZero()) {
              _0x5c2804 = _0x33dcc8;
            }
            _0x2ce709 = _0x2ce709.add(_0x5c2804);
            _0x416e75 = _0x416e75.sub(_0x596d52);
          }
          return _0x2ce709;
        };
        _0x12f831.div = _0x12f831.divide;
        _0x12f831.modulo = function (_0x4237dc) {
          if (!(true === (_0x4237dc && _0x4237dc.__isLong__))) {
            _0x4237dc = 'number' == typeof _0x4237dc ? _0x910c4e(_0x4237dc, undefined) : "string" == typeof _0x4237dc ? _0x5ec962(_0x4237dc, undefined) : new _0x283fee(_0x4237dc.low, _0x4237dc.high, _0x4237dc.unsigned);
          }
          return _0x2621f5 ? new _0x283fee((this.unsigned ? _0x2621f5.rem_u : _0x2621f5.rem_s)(this.low, this.high, _0x4237dc.low, _0x4237dc.high), _0x2621f5.get_high(), this.unsigned) : this.sub(this.div(_0x4237dc).mul(_0x4237dc));
        };
        _0x12f831.mod = _0x12f831.modulo;
        _0x12f831.rem = _0x12f831.modulo;
        _0x12f831.not = function () {
          return new _0x283fee(~this.low, ~this.high, this.unsigned);
        };
        _0x12f831.and = function (_0x501a49) {
          if (!(true === (_0x501a49 && _0x501a49.__isLong__))) {
            _0x501a49 = 'number' == typeof _0x501a49 ? _0x910c4e(_0x501a49, undefined) : "string" == typeof _0x501a49 ? _0x5ec962(_0x501a49, undefined) : new _0x283fee(_0x501a49.low, _0x501a49.high, _0x501a49.unsigned);
          }
          return new _0x283fee(this.low & _0x501a49.low, this.high & _0x501a49.high, this.unsigned);
        };
        _0x12f831.or = function (_0x3c76df) {
          if (!(true === (_0x3c76df && _0x3c76df.__isLong__))) {
            _0x3c76df = 'number' == typeof _0x3c76df ? _0x910c4e(_0x3c76df, undefined) : "string" == typeof _0x3c76df ? _0x5ec962(_0x3c76df, undefined) : new _0x283fee(_0x3c76df.low, _0x3c76df.high, _0x3c76df.unsigned);
          }
          return new _0x283fee(this.low | _0x3c76df.low, this.high | _0x3c76df.high, this.unsigned);
        };
        _0x12f831.xor = function (_0x3bea00) {
          if (!(true === (_0x3bea00 && _0x3bea00.__isLong__))) {
            _0x3bea00 = 'number' == typeof _0x3bea00 ? _0x910c4e(_0x3bea00, undefined) : "string" == typeof _0x3bea00 ? _0x5ec962(_0x3bea00, undefined) : new _0x283fee(_0x3bea00.low, _0x3bea00.high, _0x3bea00.unsigned);
          }
          return new _0x283fee(this.low ^ _0x3bea00.low, this.high ^ _0x3bea00.high, this.unsigned);
        };
        _0x12f831.shiftLeft = function (_0x257002) {
          if (true === (_0x257002 && _0x257002.__isLong__)) {
            _0x257002 = _0x257002.toInt();
          }
          return 0x0 == (_0x257002 &= 0x3f) ? this : _0x257002 < 0x20 ? new _0x283fee(this.low << _0x257002, this.high << _0x257002 | this.low >>> 0x20 - _0x257002, this.unsigned) : new _0x283fee(0x0, this.low << _0x257002 - 0x20, this.unsigned);
        };
        _0x12f831.shl = _0x12f831.shiftLeft;
        _0x12f831.shiftRight = function (_0x459ae8) {
          if (true === (_0x459ae8 && _0x459ae8.__isLong__)) {
            _0x459ae8 = _0x459ae8.toInt();
          }
          return 0x0 == (_0x459ae8 &= 0x3f) ? this : _0x459ae8 < 0x20 ? new _0x283fee(this.low >>> _0x459ae8 | this.high << 0x20 - _0x459ae8, this.high >> _0x459ae8, this.unsigned) : new _0x283fee(this.high >> _0x459ae8 - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x12f831.shr = _0x12f831.shiftRight;
        _0x12f831.shiftRightUnsigned = function (_0x352e83) {
          if (true === (_0x352e83 && _0x352e83.__isLong__)) {
            _0x352e83 = _0x352e83.toInt();
          }
          if (0x0 === (_0x352e83 &= 0x3f)) {
            return this;
          }
          var _0x52f6a5 = this.high;
          return _0x352e83 < 0x20 ? new _0x283fee(this.low >>> _0x352e83 | _0x52f6a5 << 0x20 - _0x352e83, _0x52f6a5 >>> _0x352e83, this.unsigned) : new _0x283fee(0x20 === _0x352e83 ? _0x52f6a5 : _0x52f6a5 >>> _0x352e83 - 0x20, 0x0, this.unsigned);
        };
        _0x12f831.shru = _0x12f831.shiftRightUnsigned;
        _0x12f831.shr_u = _0x12f831.shiftRightUnsigned;
        _0x12f831.toSigned = function () {
          return this.unsigned ? new _0x283fee(this.low, this.high, false) : this;
        };
        _0x12f831.toUnsigned = function () {
          return this.unsigned ? this : new _0x283fee(this.low, this.high, true);
        };
        _0x12f831.toBytes = function (_0x1f8cce) {
          return _0x1f8cce ? this.toBytesLE() : this.toBytesBE();
        };
        _0x12f831.toBytesLE = function () {
          var _0x2b001b = this.high;
          var _0xe939d7 = this.low;
          return [0xff & _0xe939d7, _0xe939d7 >>> 0x8 & 0xff, _0xe939d7 >>> 0x10 & 0xff, _0xe939d7 >>> 0x18, 0xff & _0x2b001b, _0x2b001b >>> 0x8 & 0xff, _0x2b001b >>> 0x10 & 0xff, _0x2b001b >>> 0x18];
        };
        _0x12f831.toBytesBE = function () {
          var _0x49a980 = this.high;
          var _0x1fb567 = this.low;
          return [_0x49a980 >>> 0x18, _0x49a980 >>> 0x10 & 0xff, _0x49a980 >>> 0x8 & 0xff, 0xff & _0x49a980, _0x1fb567 >>> 0x18, _0x1fb567 >>> 0x10 & 0xff, _0x1fb567 >>> 0x8 & 0xff, 0xff & _0x1fb567];
        };
        _0x283fee.fromBytes = function (_0x231bf0, _0x30be, _0x21b3d8) {
          return _0x21b3d8 ? _0x283fee.fromBytesLE(_0x231bf0, _0x30be) : _0x283fee.fromBytesBE(_0x231bf0, _0x30be);
        };
        _0x283fee.fromBytesLE = function (_0xa76929, _0x3559b0) {
          return new _0x283fee(_0xa76929[0x0] | _0xa76929[0x1] << 0x8 | _0xa76929[0x2] << 0x10 | _0xa76929[0x3] << 0x18, _0xa76929[0x4] | _0xa76929[0x5] << 0x8 | _0xa76929[0x6] << 0x10 | _0xa76929[0x7] << 0x18, _0x3559b0);
        };
        _0x283fee.fromBytesBE = function (_0x2c95e7, _0x280327) {
          return new _0x283fee(_0x2c95e7[0x4] << 0x18 | _0x2c95e7[0x5] << 0x10 | _0x2c95e7[0x6] << 0x8 | _0x2c95e7[0x7], _0x2c95e7[0x0] << 0x18 | _0x2c95e7[0x1] << 0x10 | _0x2c95e7[0x2] << 0x8 | _0x2c95e7[0x3], _0x280327);
        };
        _0xcc4b5a = _0x368fd2.exports;
      }, {});
      _0x23cda2.require("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x3de011, _0x335ee1, _0x55aabd, _0x5a1b4f, _0x184d3e) {
        _0x55aabd.exports = function (_0x3dd94e, _0x3eb146) {
          var _0x3dbccf = new Array(arguments.length - 0x1);
          var _0x1b59a2 = 0x0;
          var _0x10d0e5 = 0x2;
          var _0x3f481a = true;
          for (; _0x10d0e5 < arguments.length;) {
            _0x3dbccf[_0x1b59a2++] = arguments[_0x10d0e5++];
          }
          return new Promise(function (_0x25a7f0, _0x4d64b6) {
            _0x3dbccf[_0x1b59a2] = function (_0x3f67c8) {
              if (_0x3f481a) {
                _0x3f481a = false;
                if (_0x3f67c8) {
                  _0x4d64b6(_0x3f67c8);
                } else {
                  var _0x3ff6ed = new Array(arguments.length - 0x1);
                  for (var _0x25e8fd = 0x0; _0x25e8fd < _0x3ff6ed.length;) {
                    _0x3ff6ed[_0x25e8fd++] = arguments[_0x25e8fd];
                  }
                  _0x25a7f0.apply(null, _0x3ff6ed);
                }
              }
            };
            try {
              _0x3dd94e.apply(_0x3eb146 || null, _0x3dbccf);
            } catch (_0x275142) {
              if (_0x3f481a) {
                _0x3f481a = false;
                _0x4d64b6(_0x275142);
              }
            }
          });
        };
        _0x55aabd.exports;
      }, {});
      _0x23cda2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js', function (_0x48a89d, _0xd777c6, _0x244b85, _0x32d476, _0x1b8b04) {
        _0x48a89d.length = function (_0x594d06) {
          var _0x32a690 = _0x594d06.length;
          if (!_0x32a690) {
            return 0x0;
          }
          for (var _0x1d4bfe = 0x0; --_0x32a690 % 0x4 > 0x1 && '=' === _0x594d06.charAt(_0x32a690);) {
            ++_0x1d4bfe;
          }
          return Math.ceil(0x3 * _0x594d06.length) / 0x4 - _0x1d4bfe;
        };
        var _0xaaea38 = new Array(0x40);
        var _0x45479b = new Array(0x7b);
        for (var _0x318094 = 0x0; _0x318094 < 0x40;) {
          _0x45479b[_0xaaea38[_0x318094] = _0x318094 < 0x1a ? _0x318094 + 0x41 : _0x318094 < 0x34 ? _0x318094 + 0x47 : _0x318094 < 0x3e ? _0x318094 - 0x4 : _0x318094 - 0x3b | 0x2b] = _0x318094++;
        }
        _0x48a89d.encode = function (_0x344a59, _0xc26611, _0x8beead) {
          var _0x268049;
          var _0x4a72f6 = null;
          var _0x3bfbab = [];
          var _0x3667fc = 0x0;
          for (var _0x570159 = 0x0; _0xc26611 < _0x8beead;) {
            var _0x5a9a50 = _0x344a59[_0xc26611++];
            switch (_0x570159) {
              case 0x0:
                _0x3bfbab[_0x3667fc++] = _0xaaea38[_0x5a9a50 >> 0x2];
                _0x268049 = (0x3 & _0x5a9a50) << 0x4;
                _0x570159 = 0x1;
                break;
              case 0x1:
                _0x3bfbab[_0x3667fc++] = _0xaaea38[_0x268049 | _0x5a9a50 >> 0x4];
                _0x268049 = (0xf & _0x5a9a50) << 0x2;
                _0x570159 = 0x2;
                break;
              case 0x2:
                _0x3bfbab[_0x3667fc++] = _0xaaea38[_0x268049 | _0x5a9a50 >> 0x6];
                _0x3bfbab[_0x3667fc++] = _0xaaea38[0x3f & _0x5a9a50];
                _0x570159 = 0x0;
            }
            if (_0x3667fc > 0x1fff) {
              (_0x4a72f6 || (_0x4a72f6 = [])).push(String.fromCharCode.apply(String, _0x3bfbab));
              _0x3667fc = 0x0;
            }
          }
          if (_0x570159) {
            _0x3bfbab[_0x3667fc++] = _0xaaea38[_0x268049];
            _0x3bfbab[_0x3667fc++] = 0x3d;
            if (0x1 === _0x570159) {
              _0x3bfbab[_0x3667fc++] = 0x3d;
            }
          }
          return _0x4a72f6 ? (_0x3667fc && _0x4a72f6.push(String.fromCharCode.apply(String, _0x3bfbab.slice(0x0, _0x3667fc))), _0x4a72f6.join('')) : String.fromCharCode.apply(String, _0x3bfbab.slice(0x0, _0x3667fc));
        };
        _0x48a89d.decode = function (_0x55d352, _0x26d817, _0x18305d) {
          var _0x3ad5d1;
          var _0x159fd5 = _0x18305d;
          var _0x1101de = 0x0;
          for (var _0x51d738 = 0x0; _0x51d738 < _0x55d352.length;) {
            var _0x2f4f6a = _0x55d352.charCodeAt(_0x51d738++);
            if (0x3d === _0x2f4f6a && _0x1101de > 0x1) {
              break;
            }
            if (undefined === (_0x2f4f6a = _0x45479b[_0x2f4f6a])) {
              throw Error("invalid encoding");
            }
            switch (_0x1101de) {
              case 0x0:
                _0x3ad5d1 = _0x2f4f6a;
                _0x1101de = 0x1;
                break;
              case 0x1:
                _0x26d817[_0x18305d++] = _0x3ad5d1 << 0x2 | (0x30 & _0x2f4f6a) >> 0x4;
                _0x3ad5d1 = _0x2f4f6a;
                _0x1101de = 0x2;
                break;
              case 0x2:
                _0x26d817[_0x18305d++] = (0xf & _0x3ad5d1) << 0x4 | (0x3c & _0x2f4f6a) >> 0x2;
                _0x3ad5d1 = _0x2f4f6a;
                _0x1101de = 0x3;
                break;
              case 0x3:
                _0x26d817[_0x18305d++] = (0x3 & _0x3ad5d1) << 0x6 | _0x2f4f6a;
                _0x1101de = 0x0;
            }
          }
          if (0x1 === _0x1101de) {
            throw Error("invalid encoding");
          }
          return _0x18305d - _0x159fd5;
        };
        _0x48a89d.test = function (_0x50c287) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x50c287);
        };
        _0x244b85.exports;
      }, {});
      _0x23cda2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js', function (_0x46067a, _0x1f696a, _0xbecc5e, _0x22b3e4, _0x2642b4) {
        function _0x373154() {
          this._listeners = {};
        }
        _0xbecc5e.exports = _0x373154;
        _0x373154.prototype.on = function (_0x2a4be, _0x4875aa, _0x1ddc06) {
          (this._listeners[_0x2a4be] || (this._listeners[_0x2a4be] = [])).push({
            'fn': _0x4875aa,
            'ctx': _0x1ddc06 || this
          });
          return this;
        };
        _0x373154.prototype.off = function (_0x206224, _0x553b4b) {
          if (undefined === _0x206224) {
            this._listeners = {};
          } else {
            if (undefined === _0x553b4b) {
              this._listeners[_0x206224] = [];
            } else {
              var _0x5cdd3c = this._listeners[_0x206224];
              for (var _0x1f0aca = 0x0; _0x1f0aca < _0x5cdd3c.length;) {
                if (_0x5cdd3c[_0x1f0aca].fn === _0x553b4b) {
                  _0x5cdd3c.splice(_0x1f0aca, 0x1);
                } else {
                  ++_0x1f0aca;
                }
              }
            }
          }
          return this;
        };
        _0x373154.prototype.emit = function (_0x1196ce) {
          var _0x1ec3eb = this._listeners[_0x1196ce];
          if (_0x1ec3eb) {
            var _0x2c2870 = [];
            for (var _0x3e9cdd = 0x1; _0x3e9cdd < arguments.length;) {
              _0x2c2870.push(arguments[_0x3e9cdd++]);
            }
            for (_0x3e9cdd = 0x0; _0x3e9cdd < _0x1ec3eb.length;) {
              _0x1ec3eb[_0x3e9cdd].fn.apply(_0x1ec3eb[_0x3e9cdd++].ctx, _0x2c2870);
            }
          }
          return this;
        };
        _0xbecc5e.exports;
      }, {});
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0x14d762, _0x5f050d, _0x144d19, _0x39e2f8, _0x191e11) {
        function _0x3ec22a(_0x4b8d77) {
          if ('undefined' != typeof Float32Array) {
            (function () {
              var _0x238dfc = new Float32Array([-0x0]);
              var _0xe5a1af = new Uint8Array(_0x238dfc.buffer);
              var _0x599a03 = 0x80 === _0xe5a1af[0x3];
              function _0x3f54ec(_0x55134e, _0x48988c, _0x54c7e5) {
                _0x238dfc[0x0] = _0x55134e;
                _0x48988c[_0x54c7e5] = _0xe5a1af[0x0];
                _0x48988c[_0x54c7e5 + 0x1] = _0xe5a1af[0x1];
                _0x48988c[_0x54c7e5 + 0x2] = _0xe5a1af[0x2];
                _0x48988c[_0x54c7e5 + 0x3] = _0xe5a1af[0x3];
              }
              function _0x336d3a(_0x437ceb, _0x23b4ca, _0x54e14b) {
                _0x238dfc[0x0] = _0x437ceb;
                _0x23b4ca[_0x54e14b] = _0xe5a1af[0x3];
                _0x23b4ca[_0x54e14b + 0x1] = _0xe5a1af[0x2];
                _0x23b4ca[_0x54e14b + 0x2] = _0xe5a1af[0x1];
                _0x23b4ca[_0x54e14b + 0x3] = _0xe5a1af[0x0];
              }
              function _0x48f687(_0x4fef4a, _0x12ca2d) {
                _0xe5a1af[0x0] = _0x4fef4a[_0x12ca2d];
                _0xe5a1af[0x1] = _0x4fef4a[_0x12ca2d + 0x1];
                _0xe5a1af[0x2] = _0x4fef4a[_0x12ca2d + 0x2];
                _0xe5a1af[0x3] = _0x4fef4a[_0x12ca2d + 0x3];
                return _0x238dfc[0x0];
              }
              function _0x5c674c(_0x58b8e7, _0x3a9594) {
                _0xe5a1af[0x3] = _0x58b8e7[_0x3a9594];
                _0xe5a1af[0x2] = _0x58b8e7[_0x3a9594 + 0x1];
                _0xe5a1af[0x1] = _0x58b8e7[_0x3a9594 + 0x2];
                _0xe5a1af[0x0] = _0x58b8e7[_0x3a9594 + 0x3];
                return _0x238dfc[0x0];
              }
              _0x4b8d77.writeFloatLE = _0x599a03 ? _0x3f54ec : _0x336d3a;
              _0x4b8d77.writeFloatBE = _0x599a03 ? _0x336d3a : _0x3f54ec;
              _0x4b8d77.readFloatLE = _0x599a03 ? _0x48f687 : _0x5c674c;
              _0x4b8d77.readFloatBE = _0x599a03 ? _0x5c674c : _0x48f687;
            })();
          } else {
            (function () {
              function _0x366b88(_0x347634, _0x1e7a21, _0x58a713, _0x470126) {
                var _0x978bd3 = _0x1e7a21 < 0x0 ? 0x1 : 0x0;
                if (_0x978bd3) {
                  _0x1e7a21 = -_0x1e7a21;
                }
                if (0x0 === _0x1e7a21) {
                  _0x347634(0x1 / _0x1e7a21 > 0x0 ? 0x0 : 0x80000000, _0x58a713, _0x470126);
                } else {
                  if (isNaN(_0x1e7a21)) {
                    _0x347634(0x7fc00000, _0x58a713, _0x470126);
                  } else {
                    if (_0x1e7a21 > 0xffffff00000000000000000000000000) {
                      _0x347634((_0x978bd3 << 0x1f | 0x7f800000) >>> 0x0, _0x58a713, _0x470126);
                    } else {
                      if (_0x1e7a21 < 1.1754943508222875e-38) {
                        _0x347634((_0x978bd3 << 0x1f | Math.round(_0x1e7a21 / 1.401298464324817e-45)) >>> 0x0, _0x58a713, _0x470126);
                      } else {
                        var _0x11bb4e = Math.floor(Math.log(_0x1e7a21) / Math.LN2);
                        _0x347634((_0x978bd3 << 0x1f | _0x11bb4e + 0x7f << 0x17 | 0x7fffff & Math.round(_0x1e7a21 * Math.pow(0x2, -_0x11bb4e) * 0x800000)) >>> 0x0, _0x58a713, _0x470126);
                      }
                    }
                  }
                }
              }
              function _0x36944e(_0x277238, _0x2bbada, _0x233a53) {
                var _0x52ffce = _0x277238(_0x2bbada, _0x233a53);
                var _0x2eaf44 = 0x2 * (_0x52ffce >> 0x1f) + 0x1;
                var _0x5d8f32 = _0x52ffce >>> 0x17 & 0xff;
                var _0x3a2a1e = 0x7fffff & _0x52ffce;
                return 0xff === _0x5d8f32 ? _0x3a2a1e ? NaN : _0x2eaf44 * Infinity : 0x0 === _0x5d8f32 ? 1.401298464324817e-45 * _0x2eaf44 * _0x3a2a1e : _0x2eaf44 * Math.pow(0x2, _0x5d8f32 - 0x96) * (_0x3a2a1e + 0x800000);
              }
              _0x4b8d77.writeFloatLE = _0x366b88.bind(null, _0x1a34f9);
              _0x4b8d77.writeFloatBE = _0x366b88.bind(null, _0x168839);
              _0x4b8d77.readFloatLE = _0x36944e.bind(null, _0x5aef77);
              _0x4b8d77.readFloatBE = _0x36944e.bind(null, _0x4b6bf4);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var _0x591af8 = new Float64Array([-0x0]);
              var _0x2a1d5b = new Uint8Array(_0x591af8.buffer);
              var _0x40b049 = 0x80 === _0x2a1d5b[0x7];
              function _0x36ac7d(_0x4fe59d, _0x3ecefc, _0x29ad07) {
                _0x591af8[0x0] = _0x4fe59d;
                _0x3ecefc[_0x29ad07] = _0x2a1d5b[0x0];
                _0x3ecefc[_0x29ad07 + 0x1] = _0x2a1d5b[0x1];
                _0x3ecefc[_0x29ad07 + 0x2] = _0x2a1d5b[0x2];
                _0x3ecefc[_0x29ad07 + 0x3] = _0x2a1d5b[0x3];
                _0x3ecefc[_0x29ad07 + 0x4] = _0x2a1d5b[0x4];
                _0x3ecefc[_0x29ad07 + 0x5] = _0x2a1d5b[0x5];
                _0x3ecefc[_0x29ad07 + 0x6] = _0x2a1d5b[0x6];
                _0x3ecefc[_0x29ad07 + 0x7] = _0x2a1d5b[0x7];
              }
              function _0x3fb550(_0x24860e, _0x794c71, _0x21ed6a) {
                _0x591af8[0x0] = _0x24860e;
                _0x794c71[_0x21ed6a] = _0x2a1d5b[0x7];
                _0x794c71[_0x21ed6a + 0x1] = _0x2a1d5b[0x6];
                _0x794c71[_0x21ed6a + 0x2] = _0x2a1d5b[0x5];
                _0x794c71[_0x21ed6a + 0x3] = _0x2a1d5b[0x4];
                _0x794c71[_0x21ed6a + 0x4] = _0x2a1d5b[0x3];
                _0x794c71[_0x21ed6a + 0x5] = _0x2a1d5b[0x2];
                _0x794c71[_0x21ed6a + 0x6] = _0x2a1d5b[0x1];
                _0x794c71[_0x21ed6a + 0x7] = _0x2a1d5b[0x0];
              }
              function _0x521041(_0xc74808, _0x54b981) {
                _0x2a1d5b[0x0] = _0xc74808[_0x54b981];
                _0x2a1d5b[0x1] = _0xc74808[_0x54b981 + 0x1];
                _0x2a1d5b[0x2] = _0xc74808[_0x54b981 + 0x2];
                _0x2a1d5b[0x3] = _0xc74808[_0x54b981 + 0x3];
                _0x2a1d5b[0x4] = _0xc74808[_0x54b981 + 0x4];
                _0x2a1d5b[0x5] = _0xc74808[_0x54b981 + 0x5];
                _0x2a1d5b[0x6] = _0xc74808[_0x54b981 + 0x6];
                _0x2a1d5b[0x7] = _0xc74808[_0x54b981 + 0x7];
                return _0x591af8[0x0];
              }
              function _0x4b17bc(_0x4ce9ef, _0x741ad5) {
                _0x2a1d5b[0x7] = _0x4ce9ef[_0x741ad5];
                _0x2a1d5b[0x6] = _0x4ce9ef[_0x741ad5 + 0x1];
                _0x2a1d5b[0x5] = _0x4ce9ef[_0x741ad5 + 0x2];
                _0x2a1d5b[0x4] = _0x4ce9ef[_0x741ad5 + 0x3];
                _0x2a1d5b[0x3] = _0x4ce9ef[_0x741ad5 + 0x4];
                _0x2a1d5b[0x2] = _0x4ce9ef[_0x741ad5 + 0x5];
                _0x2a1d5b[0x1] = _0x4ce9ef[_0x741ad5 + 0x6];
                _0x2a1d5b[0x0] = _0x4ce9ef[_0x741ad5 + 0x7];
                return _0x591af8[0x0];
              }
              _0x4b8d77.writeDoubleLE = _0x40b049 ? _0x36ac7d : _0x3fb550;
              _0x4b8d77.writeDoubleBE = _0x40b049 ? _0x3fb550 : _0x36ac7d;
              _0x4b8d77.readDoubleLE = _0x40b049 ? _0x521041 : _0x4b17bc;
              _0x4b8d77.readDoubleBE = _0x40b049 ? _0x4b17bc : _0x521041;
            })();
          } else {
            (function () {
              function _0x84c64c(_0x6cb82c, _0x62fa73, _0x59f15b, _0x4c6730, _0x173fc2, _0x3544d5) {
                var _0x5d6e56 = _0x4c6730 < 0x0 ? 0x1 : 0x0;
                if (_0x5d6e56) {
                  _0x4c6730 = -_0x4c6730;
                }
                if (0x0 === _0x4c6730) {
                  _0x6cb82c(0x0, _0x173fc2, _0x3544d5 + _0x62fa73);
                  _0x6cb82c(0x1 / _0x4c6730 > 0x0 ? 0x0 : 0x80000000, _0x173fc2, _0x3544d5 + _0x59f15b);
                } else {
                  if (isNaN(_0x4c6730)) {
                    _0x6cb82c(0x0, _0x173fc2, _0x3544d5 + _0x62fa73);
                    _0x6cb82c(0x7ff80000, _0x173fc2, _0x3544d5 + _0x59f15b);
                  } else {
                    if (_0x4c6730 > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x6cb82c(0x0, _0x173fc2, _0x3544d5 + _0x62fa73);
                      _0x6cb82c((_0x5d6e56 << 0x1f | 0x7ff00000) >>> 0x0, _0x173fc2, _0x3544d5 + _0x59f15b);
                    } else {
                      var _0x425898;
                      if (_0x4c6730 < 2.2250738585072014e-308) {
                        _0x6cb82c((_0x425898 = _0x4c6730 / 5e-324) >>> 0x0, _0x173fc2, _0x3544d5 + _0x62fa73);
                        _0x6cb82c((_0x5d6e56 << 0x1f | _0x425898 / 0x100000000) >>> 0x0, _0x173fc2, _0x3544d5 + _0x59f15b);
                      } else {
                        var _0xf2ac89 = Math.floor(Math.log(_0x4c6730) / Math.LN2);
                        if (0x400 === _0xf2ac89) {
                          _0xf2ac89 = 0x3ff;
                        }
                        _0x6cb82c(0x10000000000000 * (_0x425898 = _0x4c6730 * Math.pow(0x2, -_0xf2ac89)) >>> 0x0, _0x173fc2, _0x3544d5 + _0x62fa73);
                        _0x6cb82c((_0x5d6e56 << 0x1f | _0xf2ac89 + 0x3ff << 0x14 | 0x100000 * _0x425898 & 0xfffff) >>> 0x0, _0x173fc2, _0x3544d5 + _0x59f15b);
                      }
                    }
                  }
                }
              }
              function _0x27be96(_0x1bd674, _0xaeffde, _0x183679, _0x1bdcf7, _0x39ec1d) {
                var _0x23d04a = _0x1bd674(_0x1bdcf7, _0x39ec1d + _0xaeffde);
                var _0x257b42 = _0x1bd674(_0x1bdcf7, _0x39ec1d + _0x183679);
                var _0xb22951 = 0x2 * (_0x257b42 >> 0x1f) + 0x1;
                var _0x393850 = _0x257b42 >>> 0x14 & 0x7ff;
                var _0x5c9ad0 = 0x100000000 * (0xfffff & _0x257b42) + _0x23d04a;
                return 0x7ff === _0x393850 ? _0x5c9ad0 ? NaN : _0xb22951 * Infinity : 0x0 === _0x393850 ? 5e-324 * _0xb22951 * _0x5c9ad0 : _0xb22951 * Math.pow(0x2, _0x393850 - 0x433) * (_0x5c9ad0 + 0x10000000000000);
              }
              _0x4b8d77.writeDoubleLE = _0x84c64c.bind(null, _0x1a34f9, 0x0, 0x4);
              _0x4b8d77.writeDoubleBE = _0x84c64c.bind(null, _0x168839, 0x4, 0x0);
              _0x4b8d77.readDoubleLE = _0x27be96.bind(null, _0x5aef77, 0x0, 0x4);
              _0x4b8d77.readDoubleBE = _0x27be96.bind(null, _0x4b6bf4, 0x4, 0x0);
            })();
          }
          return _0x4b8d77;
        }
        function _0x1a34f9(_0x42e26d, _0x169bd2, _0x195549) {
          _0x169bd2[_0x195549] = 0xff & _0x42e26d;
          _0x169bd2[_0x195549 + 0x1] = _0x42e26d >>> 0x8 & 0xff;
          _0x169bd2[_0x195549 + 0x2] = _0x42e26d >>> 0x10 & 0xff;
          _0x169bd2[_0x195549 + 0x3] = _0x42e26d >>> 0x18;
        }
        function _0x168839(_0x228abf, _0x135c67, _0x919178) {
          _0x135c67[_0x919178] = _0x228abf >>> 0x18;
          _0x135c67[_0x919178 + 0x1] = _0x228abf >>> 0x10 & 0xff;
          _0x135c67[_0x919178 + 0x2] = _0x228abf >>> 0x8 & 0xff;
          _0x135c67[_0x919178 + 0x3] = 0xff & _0x228abf;
        }
        function _0x5aef77(_0x40eab6, _0x5f2e8b) {
          return (_0x40eab6[_0x5f2e8b] | _0x40eab6[_0x5f2e8b + 0x1] << 0x8 | _0x40eab6[_0x5f2e8b + 0x2] << 0x10 | _0x40eab6[_0x5f2e8b + 0x3] << 0x18) >>> 0x0;
        }
        function _0x4b6bf4(_0x594259, _0x4ac1bb) {
          return (_0x594259[_0x4ac1bb] << 0x18 | _0x594259[_0x4ac1bb + 0x1] << 0x10 | _0x594259[_0x4ac1bb + 0x2] << 0x8 | _0x594259[_0x4ac1bb + 0x3]) >>> 0x0;
        }
        _0x144d19.exports = _0x3ec22a(_0x3ec22a);
        _0x144d19.exports;
        _0x144d19.exports.writeFloatLE;
        _0x144d19.exports.writeFloatBE;
        _0x144d19.exports.readFloatLE;
        _0x144d19.exports.readFloatBE;
        _0x144d19.exports.writeDoubleLE;
        _0x144d19.exports.writeDoubleBE;
        _0x144d19.exports.readDoubleLE;
        _0x144d19.exports.readDoubleBE;
      }, {});
      _0x23cda2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js', function (_0x2d41c4, _0x3534b0, _0x100ab8, _0x186e9b, _0x19179e) {
        function _0x14a23e(_0x360e30) {
          try {
            var _0x38e8e8 = eval("quire".replace(/^/, 're'))(_0x360e30);
            if (_0x38e8e8 && (_0x38e8e8.length || Object.keys(_0x38e8e8).length)) {
              return _0x38e8e8;
            }
          } catch (_0x5a6608) {}
          return null;
        }
        _0x100ab8.exports = _0x14a23e;
        _0x100ab8.exports;
      }, {});
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (_0x117447, _0x5bc953, _0x49805d, _0x4feb62, _0x291e74) {
        _0x117447.length = function (_0x1cf015) {
          var _0x1d993f = 0x0;
          var _0x10eaa0 = 0x0;
          for (var _0x49dd7b = 0x0; _0x49dd7b < _0x1cf015.length; ++_0x49dd7b) {
            if ((_0x10eaa0 = _0x1cf015.charCodeAt(_0x49dd7b)) < 0x80) {
              _0x1d993f += 0x1;
            } else if (_0x10eaa0 < 0x800) {
              _0x1d993f += 0x2;
            } else if (0xd800 == (0xfc00 & _0x10eaa0) && 0xdc00 == (0xfc00 & _0x1cf015.charCodeAt(_0x49dd7b + 0x1))) {
              ++_0x49dd7b;
              _0x1d993f += 0x4;
            } else {
              _0x1d993f += 0x3;
            }
          }
          return _0x1d993f;
        };
        _0x117447.read = function (_0x273957, _0x28315b, _0x35e341) {
          if (_0x35e341 - _0x28315b < 0x1) {
            return '';
          }
          var _0x4b999d;
          var _0x5dbdb5 = null;
          var _0x2425d4 = [];
          for (var _0x372884 = 0x0; _0x28315b < _0x35e341;) {
            if ((_0x4b999d = _0x273957[_0x28315b++]) < 0x80) {
              _0x2425d4[_0x372884++] = _0x4b999d;
            } else if (_0x4b999d > 0xbf && _0x4b999d < 0xe0) {
              _0x2425d4[_0x372884++] = (0x1f & _0x4b999d) << 0x6 | 0x3f & _0x273957[_0x28315b++];
            } else if (_0x4b999d > 0xef && _0x4b999d < 0x16d) {
              _0x4b999d = ((0x7 & _0x4b999d) << 0x12 | (0x3f & _0x273957[_0x28315b++]) << 0xc | (0x3f & _0x273957[_0x28315b++]) << 0x6 | 0x3f & _0x273957[_0x28315b++]) - 0x10000;
              _0x2425d4[_0x372884++] = 0xd800 + (_0x4b999d >> 0xa);
              _0x2425d4[_0x372884++] = 0xdc00 + (0x3ff & _0x4b999d);
            } else {
              _0x2425d4[_0x372884++] = (0xf & _0x4b999d) << 0xc | (0x3f & _0x273957[_0x28315b++]) << 0x6 | 0x3f & _0x273957[_0x28315b++];
            }
            if (_0x372884 > 0x1fff) {
              (_0x5dbdb5 || (_0x5dbdb5 = [])).push(String.fromCharCode.apply(String, _0x2425d4));
              _0x372884 = 0x0;
            }
          }
          return _0x5dbdb5 ? (_0x372884 && _0x5dbdb5.push(String.fromCharCode.apply(String, _0x2425d4.slice(0x0, _0x372884))), _0x5dbdb5.join('')) : String.fromCharCode.apply(String, _0x2425d4.slice(0x0, _0x372884));
        };
        _0x117447.write = function (_0x2fd71b, _0x2af70c, _0x2348c5) {
          var _0x344006;
          var _0x233901;
          var _0x42a4f8 = _0x2348c5;
          for (var _0x61e9df = 0x0; _0x61e9df < _0x2fd71b.length; ++_0x61e9df) {
            if ((_0x344006 = _0x2fd71b.charCodeAt(_0x61e9df)) < 0x80) {
              _0x2af70c[_0x2348c5++] = _0x344006;
            } else if (_0x344006 < 0x800) {
              _0x2af70c[_0x2348c5++] = _0x344006 >> 0x6 | 0xc0;
              _0x2af70c[_0x2348c5++] = 0x3f & _0x344006 | 0x80;
            } else if (0xd800 == (0xfc00 & _0x344006) && 0xdc00 == (0xfc00 & (_0x233901 = _0x2fd71b.charCodeAt(_0x61e9df + 0x1)))) {
              _0x344006 = 0x10000 + ((0x3ff & _0x344006) << 0xa) + (0x3ff & _0x233901);
              ++_0x61e9df;
              _0x2af70c[_0x2348c5++] = _0x344006 >> 0x12 | 0xf0;
              _0x2af70c[_0x2348c5++] = _0x344006 >> 0xc & 0x3f | 0x80;
              _0x2af70c[_0x2348c5++] = _0x344006 >> 0x6 & 0x3f | 0x80;
              _0x2af70c[_0x2348c5++] = 0x3f & _0x344006 | 0x80;
            } else {
              _0x2af70c[_0x2348c5++] = _0x344006 >> 0xc | 0xe0;
              _0x2af70c[_0x2348c5++] = _0x344006 >> 0x6 & 0x3f | 0x80;
              _0x2af70c[_0x2348c5++] = 0x3f & _0x344006 | 0x80;
            }
          }
          return _0x2348c5 - _0x42a4f8;
        };
        _0x49805d.exports;
      }, {});
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x5b7cd1, _0x406010, _0x3be571, _0x37028a, _0x269aaa) {
        _0x3be571.exports = function (_0xecf1ff, _0x211339, _0x4e87f5) {
          var _0x303813 = _0x4e87f5 || 0x2000;
          var _0x2bf7ce = _0x303813 >>> 0x1;
          var _0x114eb4 = null;
          var _0x132ff7 = _0x303813;
          return function (_0x30428b) {
            if (_0x30428b < 0x1 || _0x30428b > _0x2bf7ce) {
              return _0xecf1ff(_0x30428b);
            }
            if (_0x132ff7 + _0x30428b > _0x303813) {
              _0x114eb4 = _0xecf1ff(_0x303813);
              _0x132ff7 = 0x0;
            }
            var _0x41bf5f = _0x211339.call(_0x114eb4, _0x132ff7, _0x132ff7 += _0x30428b);
            if (0x7 & _0x132ff7) {
              _0x132ff7 = 0x1 + (0x7 | _0x132ff7);
            }
            return _0x41bf5f;
          };
        };
        _0x3be571.exports;
      }, {});
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (_0x55c02c, _0x423d8f, _0x445327, _0x11bc0c, _0xbcaf83) {
        _0x445327.exports = _0x8e28ae;
        var _0x4e94f4 = _0x423d8f('../util/minimal');
        function _0x8e28ae(_0x142db3, _0x2ec8c5) {
          this.lo = _0x142db3 >>> 0x0;
          this.hi = _0x2ec8c5 >>> 0x0;
        }
        var _0x177689 = _0x8e28ae.zero = new _0x8e28ae(0x0, 0x0);
        _0x177689.toNumber = function () {
          return 0x0;
        };
        _0x177689.zzEncode = _0x177689.zzDecode = function () {
          return this;
        };
        _0x177689.length = function () {
          return 0x1;
        };
        var _0x5967ae = _0x8e28ae.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x8e28ae.fromNumber = function (_0xbe587c) {
          if (0x0 === _0xbe587c) {
            return _0x177689;
          }
          var _0x187587 = _0xbe587c < 0x0;
          if (_0x187587) {
            _0xbe587c = -_0xbe587c;
          }
          var _0x87ade = _0xbe587c >>> 0x0;
          var _0x3e3c02 = (_0xbe587c - _0x87ade) / 0x100000000 >>> 0x0;
          if (_0x187587) {
            _0x3e3c02 = ~_0x3e3c02 >>> 0x0;
            _0x87ade = ~_0x87ade >>> 0x0;
            if (++_0x87ade > 0xffffffff) {
              _0x87ade = 0x0;
              if (++_0x3e3c02 > 0xffffffff) {
                _0x3e3c02 = 0x0;
              }
            }
          }
          return new _0x8e28ae(_0x87ade, _0x3e3c02);
        };
        _0x8e28ae.from = function (_0x3a5f60) {
          if ("number" == typeof _0x3a5f60) {
            return _0x8e28ae.fromNumber(_0x3a5f60);
          }
          if (_0x4e94f4.isString(_0x3a5f60)) {
            if (!_0x4e94f4.Long) {
              return _0x8e28ae.fromNumber(parseInt(_0x3a5f60, 0xa));
            }
            _0x3a5f60 = _0x4e94f4.Long.fromString(_0x3a5f60);
          }
          return _0x3a5f60.low || _0x3a5f60.high ? new _0x8e28ae(_0x3a5f60.low >>> 0x0, _0x3a5f60.high >>> 0x0) : _0x177689;
        };
        _0x8e28ae.prototype.toNumber = function (_0x2e4fdc) {
          if (!_0x2e4fdc && this.hi >>> 0x1f) {
            var _0x179d6e = 0x1 + ~this.lo >>> 0x0;
            var _0x4a6c6f = ~this.hi >>> 0x0;
            if (!_0x179d6e) {
              _0x4a6c6f = _0x4a6c6f + 0x1 >>> 0x0;
            }
            return -(_0x179d6e + 0x100000000 * _0x4a6c6f);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x8e28ae.prototype.toLong = function (_0x5cd22b) {
          return _0x4e94f4.Long ? new _0x4e94f4.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x5cd22b)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x5cd22b)
          };
        };
        var _0x15bb7e = String.prototype.charCodeAt;
        _0x8e28ae.fromHash = function (_0x47fcd5) {
          return _0x47fcd5 === _0x5967ae ? _0x177689 : new _0x8e28ae((_0x15bb7e.call(_0x47fcd5, 0x0) | _0x15bb7e.call(_0x47fcd5, 0x1) << 0x8 | _0x15bb7e.call(_0x47fcd5, 0x2) << 0x10 | _0x15bb7e.call(_0x47fcd5, 0x3) << 0x18) >>> 0x0, (_0x15bb7e.call(_0x47fcd5, 0x4) | _0x15bb7e.call(_0x47fcd5, 0x5) << 0x8 | _0x15bb7e.call(_0x47fcd5, 0x6) << 0x10 | _0x15bb7e.call(_0x47fcd5, 0x7) << 0x18) >>> 0x0);
        };
        _0x8e28ae.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x8e28ae.prototype.zzEncode = function () {
          var _0x537405 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x537405) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x537405) >>> 0x0;
          return this;
        };
        _0x8e28ae.prototype.zzDecode = function () {
          var _0x5855c7 = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x5855c7) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x5855c7) >>> 0x0;
          return this;
        };
        _0x8e28ae.prototype.length = function () {
          var _0xfc31a2 = this.lo;
          var _0x4c1c43 = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0xb742aa = this.hi >>> 0x18;
          return 0x0 === _0xb742aa ? 0x0 === _0x4c1c43 ? _0xfc31a2 < 0x4000 ? _0xfc31a2 < 0x80 ? 0x1 : 0x2 : _0xfc31a2 < 0x200000 ? 0x3 : 0x4 : _0x4c1c43 < 0x4000 ? _0x4c1c43 < 0x80 ? 0x5 : 0x6 : _0x4c1c43 < 0x200000 ? 0x7 : 0x8 : _0xb742aa < 0x80 ? 0x9 : 0xa;
        };
        _0x445327.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x5cc8b2, _0x50809f, _0x3f3b44, _0x5d1bb7, _0x545dbf) {
        function _0x40732e(_0x11ba50, _0x563d33, _0x4a41ce) {
          var _0x108261 = Object.keys(_0x563d33);
          for (var _0x1c133b = 0x0; _0x1c133b < _0x108261.length; ++_0x1c133b) {
            if (!(undefined !== _0x11ba50[_0x108261[_0x1c133b]] && _0x4a41ce)) {
              _0x11ba50[_0x108261[_0x1c133b]] = _0x563d33[_0x108261[_0x1c133b]];
            }
          }
          return _0x11ba50;
        }
        function _0x3d58bc(_0x45f532) {
          function _0x20ffc1(_0x5690c3, _0xd900db) {
            if (!(this instanceof _0x20ffc1)) {
              return new _0x20ffc1(_0x5690c3, _0xd900db);
            }
            Object.defineProperty(this, "message", {
              'get': function () {
                return _0x5690c3;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x20ffc1);
            } else {
              Object.defineProperty(this, "stack", {
                'value': new Error().stack || ''
              });
            }
            if (_0xd900db) {
              _0x40732e(this, _0xd900db);
            }
          }
          (_0x20ffc1.prototype = Object.create(Error.prototype)).constructor = _0x20ffc1;
          Object.defineProperty(_0x20ffc1.prototype, "name", {
            'get': function () {
              return _0x45f532;
            }
          });
          _0x20ffc1.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x20ffc1;
        }
        _0x5cc8b2.asPromise = _0x50809f('@protobufjs/aspromise');
        _0x5cc8b2.base64 = _0x50809f("@protobufjs/base64");
        _0x5cc8b2.EventEmitter = _0x50809f("@protobufjs/eventemitter");
        _0x5cc8b2.float = _0x50809f("@protobufjs/float");
        _0x5cc8b2.inquire = _0x50809f('@protobufjs/inquire');
        _0x5cc8b2.utf8 = _0x50809f("@protobufjs/utf8");
        _0x5cc8b2.pool = _0x50809f('@protobufjs/pool');
        _0x5cc8b2.LongBits = _0x50809f('./longbits');
        _0x5cc8b2.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x5cc8b2.global = _0x5cc8b2.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        _0x5cc8b2.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x5cc8b2.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x5cc8b2.isInteger = Number.isInteger || function (_0x201c5a) {
          return "number" == typeof _0x201c5a && isFinite(_0x201c5a) && Math.floor(_0x201c5a) === _0x201c5a;
        };
        _0x5cc8b2.isString = function (_0xa26d50) {
          return 'string' == typeof _0xa26d50 || _0xa26d50 instanceof String;
        };
        _0x5cc8b2.isObject = function (_0x2754ca) {
          return _0x2754ca && "object" == typeof _0x2754ca;
        };
        _0x5cc8b2.isset = _0x5cc8b2.isSet = function (_0x2de9c1, _0x104bd8) {
          var _0x173508 = _0x2de9c1[_0x104bd8];
          return !(null == _0x173508 || !_0x2de9c1.hasOwnProperty(_0x104bd8)) && ("object" != typeof _0x173508 || (Array.isArray(_0x173508) ? _0x173508.length : Object.keys(_0x173508).length) > 0x0);
        };
        _0x5cc8b2.Buffer = function () {
          try {
            var _0xebe888 = _0x5cc8b2.inquire('buffer').Buffer;
            return _0xebe888.prototype.utf8Write ? _0xebe888 : null;
          } catch (_0x33a670) {
            return null;
          }
        }();
        _0x5cc8b2._Buffer_from = null;
        _0x5cc8b2._Buffer_allocUnsafe = null;
        _0x5cc8b2.newBuffer = function (_0x3ce797) {
          return 'number' == typeof _0x3ce797 ? _0x5cc8b2.Buffer ? _0x5cc8b2._Buffer_allocUnsafe(_0x3ce797) : new _0x5cc8b2.Array(_0x3ce797) : _0x5cc8b2.Buffer ? _0x5cc8b2._Buffer_from(_0x3ce797) : 'undefined' == typeof Uint8Array ? _0x3ce797 : new Uint8Array(_0x3ce797);
        };
        _0x5cc8b2.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        _0x5cc8b2.Long = _0x5cc8b2.global.dcodeIO && _0x5cc8b2.global.dcodeIO.Long || _0x5cc8b2.global.Long || _0x5cc8b2.inquire("long");
        _0x5cc8b2.key2Re = /^true|false|0|1$/;
        _0x5cc8b2.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x5cc8b2.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x5cc8b2.longToHash = function (_0x2345c4) {
          return _0x2345c4 ? _0x5cc8b2.LongBits.from(_0x2345c4).toHash() : _0x5cc8b2.LongBits.zeroHash;
        };
        _0x5cc8b2.longFromHash = function (_0x49b58d, _0x45ded0) {
          var _0x980d04 = _0x5cc8b2.LongBits.fromHash(_0x49b58d);
          return _0x5cc8b2.Long ? _0x5cc8b2.Long.fromBits(_0x980d04.lo, _0x980d04.hi, _0x45ded0) : _0x980d04.toNumber(Boolean(_0x45ded0));
        };
        _0x5cc8b2.merge = _0x40732e;
        _0x5cc8b2.lcFirst = function (_0xfa828a) {
          return _0xfa828a.charAt(0x0).toLowerCase() + _0xfa828a.substring(0x1);
        };
        _0x5cc8b2.newError = _0x3d58bc;
        _0x5cc8b2.ProtocolError = _0x3d58bc('ProtocolError');
        _0x5cc8b2.oneOfGetter = function (_0x5b335b) {
          var _0x1e1e98 = {};
          for (var _0x398e76 = 0x0; _0x398e76 < _0x5b335b.length; ++_0x398e76) {
            _0x1e1e98[_0x5b335b[_0x398e76]] = 0x1;
          }
          return function () {
            var _0x592361 = Object.keys(this);
            for (var _0xca6417 = _0x592361.length - 0x1; _0xca6417 > -0x1; --_0xca6417) {
              if (0x1 === _0x1e1e98[_0x592361[_0xca6417]] && undefined !== this[_0x592361[_0xca6417]] && null !== this[_0x592361[_0xca6417]]) {
                return _0x592361[_0xca6417];
              }
            }
          };
        };
        _0x5cc8b2.oneOfSetter = function (_0x4d588f) {
          return function (_0x15d6a4) {
            for (var _0x3a3a52 = 0x0; _0x3a3a52 < _0x4d588f.length; ++_0x3a3a52) {
              if (_0x4d588f[_0x3a3a52] !== _0x15d6a4) {
                delete this[_0x4d588f[_0x3a3a52]];
              }
            }
          };
        };
        _0x5cc8b2.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x5cc8b2._configure = function () {
          var _0x2283fd = _0x5cc8b2.Buffer;
          if (_0x2283fd) {
            _0x5cc8b2._Buffer_from = _0x2283fd.from !== Uint8Array.from && _0x2283fd.from || function (_0x423e0d, _0x12f26e) {
              return new _0x2283fd(_0x423e0d, _0x12f26e);
            };
            _0x5cc8b2._Buffer_allocUnsafe = _0x2283fd.allocUnsafe || function (_0x2963f0) {
              return new _0x2283fd(_0x2963f0);
            };
          } else {
            _0x5cc8b2._Buffer_from = _0x5cc8b2._Buffer_allocUnsafe = null;
          }
        };
        _0x3f3b44.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js',
          '@protobufjs/eventemitter': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js',
          '@protobufjs/float': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js',
          '@protobufjs/utf8': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          '@protobufjs/pool': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      _0x23cda2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/writer.js', function (_0x294339, _0x27a0ed, _0x5ca0b3, _0x166dad, _0x5205d9) {
        _0x5ca0b3.exports = _0x394ecb;
        var _0x402d97;
        var _0x4bab6f = _0x27a0ed("./util/minimal");
        var _0x527fd1 = _0x4bab6f.LongBits;
        var _0x2d5ea9 = _0x4bab6f.base64;
        var _0x109546 = _0x4bab6f.utf8;
        function _0x2ccb35(_0x1fe24d, _0x4cc51d, _0x37ef4e) {
          this.fn = _0x1fe24d;
          this.len = _0x4cc51d;
          this.next = undefined;
          this.val = _0x37ef4e;
        }
        function _0x131cd3() {}
        function _0xb64d85(_0x57aa0f) {
          this.head = _0x57aa0f.head;
          this.tail = _0x57aa0f.tail;
          this.len = _0x57aa0f.len;
          this.next = _0x57aa0f.states;
        }
        function _0x394ecb() {
          this.len = 0x0;
          this.head = new _0x2ccb35(_0x131cd3, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x847785 = function () {
          return _0x4bab6f.Buffer ? function () {
            return (_0x394ecb.create = function () {
              return new _0x402d97();
            })();
          } : function () {
            return new _0x394ecb();
          };
        };
        function _0x54166c(_0x191434, _0x355428, _0x1e6806) {
          _0x355428[_0x1e6806] = 0xff & _0x191434;
        }
        function _0x4bc712(_0x333967, _0x1a0805) {
          this.len = _0x333967;
          this.next = undefined;
          this.val = _0x1a0805;
        }
        function _0x1f254a(_0x3aae1b, _0x2d363a, _0x37a3b4) {
          for (; _0x3aae1b.hi;) {
            _0x2d363a[_0x37a3b4++] = 0x7f & _0x3aae1b.lo | 0x80;
            _0x3aae1b.lo = (_0x3aae1b.lo >>> 0x7 | _0x3aae1b.hi << 0x19) >>> 0x0;
            _0x3aae1b.hi >>>= 0x7;
          }
          for (; _0x3aae1b.lo > 0x7f;) {
            _0x2d363a[_0x37a3b4++] = 0x7f & _0x3aae1b.lo | 0x80;
            _0x3aae1b.lo = _0x3aae1b.lo >>> 0x7;
          }
          _0x2d363a[_0x37a3b4++] = _0x3aae1b.lo;
        }
        function _0x1f4f4e(_0x33051e, _0x2434c5, _0x291dc8) {
          _0x2434c5[_0x291dc8] = 0xff & _0x33051e;
          _0x2434c5[_0x291dc8 + 0x1] = _0x33051e >>> 0x8 & 0xff;
          _0x2434c5[_0x291dc8 + 0x2] = _0x33051e >>> 0x10 & 0xff;
          _0x2434c5[_0x291dc8 + 0x3] = _0x33051e >>> 0x18;
        }
        _0x394ecb.create = _0x847785();
        _0x394ecb.alloc = function (_0x1b2696) {
          return new _0x4bab6f.Array(_0x1b2696);
        };
        if (_0x4bab6f.Array !== Array) {
          _0x394ecb.alloc = _0x4bab6f.pool(_0x394ecb.alloc, _0x4bab6f.Array.prototype.subarray);
        }
        _0x394ecb.prototype._push = function (_0x1f09ad, _0x424091, _0x29a0f1) {
          this.tail = this.tail.next = new _0x2ccb35(_0x1f09ad, _0x424091, _0x29a0f1);
          this.len += _0x424091;
          return this;
        };
        _0x4bc712.prototype = Object.create(_0x2ccb35.prototype);
        _0x4bc712.prototype.fn = function (_0x3226a9, _0x1624c3, _0x310453) {
          for (; _0x3226a9 > 0x7f;) {
            _0x1624c3[_0x310453++] = 0x7f & _0x3226a9 | 0x80;
            _0x3226a9 >>>= 0x7;
          }
          _0x1624c3[_0x310453] = _0x3226a9;
        };
        _0x394ecb.prototype.uint32 = function (_0x51a362) {
          this.len += (this.tail = this.tail.next = new _0x4bc712((_0x51a362 >>>= 0x0) < 0x80 ? 0x1 : _0x51a362 < 0x4000 ? 0x2 : _0x51a362 < 0x200000 ? 0x3 : _0x51a362 < 0x10000000 ? 0x4 : 0x5, _0x51a362)).len;
          return this;
        };
        _0x394ecb.prototype.int32 = function (_0x11399b) {
          return _0x11399b < 0x0 ? this._push(_0x1f254a, 0xa, _0x527fd1.fromNumber(_0x11399b)) : this.uint32(_0x11399b);
        };
        _0x394ecb.prototype.sint32 = function (_0x27c198) {
          return this.uint32((_0x27c198 << 0x1 ^ _0x27c198 >> 0x1f) >>> 0x0);
        };
        _0x394ecb.prototype.uint64 = function (_0x2b5a8a) {
          var _0x36894f = _0x527fd1.from(_0x2b5a8a);
          return this._push(_0x1f254a, _0x36894f.length(), _0x36894f);
        };
        _0x394ecb.prototype.int64 = _0x394ecb.prototype.uint64;
        _0x394ecb.prototype.sint64 = function (_0x76534c) {
          var _0x3570ce = _0x527fd1.from(_0x76534c).zzEncode();
          return this._push(_0x1f254a, _0x3570ce.length(), _0x3570ce);
        };
        _0x394ecb.prototype.bool = function (_0x435dac) {
          return this._push(_0x54166c, 0x1, _0x435dac ? 0x1 : 0x0);
        };
        _0x394ecb.prototype.fixed32 = function (_0x206727) {
          return this._push(_0x1f4f4e, 0x4, _0x206727 >>> 0x0);
        };
        _0x394ecb.prototype.sfixed32 = _0x394ecb.prototype.fixed32;
        _0x394ecb.prototype.fixed64 = function (_0x145a10) {
          var _0x2911c2 = _0x527fd1.from(_0x145a10);
          return this._push(_0x1f4f4e, 0x4, _0x2911c2.lo)._push(_0x1f4f4e, 0x4, _0x2911c2.hi);
        };
        _0x394ecb.prototype.sfixed64 = _0x394ecb.prototype.fixed64;
        _0x394ecb.prototype.float = function (_0x26e7d6) {
          return this._push(_0x4bab6f.float.writeFloatLE, 0x4, _0x26e7d6);
        };
        _0x394ecb.prototype.double = function (_0x489838) {
          return this._push(_0x4bab6f.float.writeDoubleLE, 0x8, _0x489838);
        };
        var _0x1d9d14 = _0x4bab6f.Array.prototype.set ? function (_0x386498, _0x51d6e2, _0x1a4da9) {
          _0x51d6e2.set(_0x386498, _0x1a4da9);
        } : function (_0x288372, _0x1d69aa, _0x9d04d6) {
          for (var _0x484a20 = 0x0; _0x484a20 < _0x288372.length; ++_0x484a20) {
            _0x1d69aa[_0x9d04d6 + _0x484a20] = _0x288372[_0x484a20];
          }
        };
        _0x394ecb.prototype.bytes = function (_0x2202dd) {
          var _0x316523 = _0x2202dd.length >>> 0x0;
          if (!_0x316523) {
            return this._push(_0x54166c, 0x1, 0x0);
          }
          if (_0x4bab6f.isString(_0x2202dd)) {
            var _0x58a7f7 = _0x394ecb.alloc(_0x316523 = _0x2d5ea9.length(_0x2202dd));
            _0x2d5ea9.decode(_0x2202dd, _0x58a7f7, 0x0);
            _0x2202dd = _0x58a7f7;
          }
          return this.uint32(_0x316523)._push(_0x1d9d14, _0x316523, _0x2202dd);
        };
        _0x394ecb.prototype.string = function (_0x3459f1) {
          var _0x19409d = _0x109546.length(_0x3459f1);
          return _0x19409d ? this.uint32(_0x19409d)._push(_0x109546.write, _0x19409d, _0x3459f1) : this._push(_0x54166c, 0x1, 0x0);
        };
        _0x394ecb.prototype.fork = function () {
          this.states = new _0xb64d85(this);
          this.head = this.tail = new _0x2ccb35(_0x131cd3, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x394ecb.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x2ccb35(_0x131cd3, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x394ecb.prototype.ldelim = function () {
          var _0x499828 = this.head;
          var _0x1b99a2 = this.tail;
          var _0xfc904b = this.len;
          this.reset().uint32(_0xfc904b);
          if (_0xfc904b) {
            this.tail.next = _0x499828.next;
            this.tail = _0x1b99a2;
            this.len += _0xfc904b;
          }
          return this;
        };
        _0x394ecb.prototype.finish = function () {
          var _0x232156 = this.head.next;
          var _0x117644 = this.constructor.alloc(this.len);
          for (var _0x38881f = 0x0; _0x232156;) {
            _0x232156.fn(_0x232156.val, _0x117644, _0x38881f);
            _0x38881f += _0x232156.len;
            _0x232156 = _0x232156.next;
          }
          return _0x117644;
        };
        _0x394ecb._configure = function (_0x59c9c6) {
          _0x402d97 = _0x59c9c6;
          _0x394ecb.create = _0x847785();
          _0x402d97._configure();
        };
        _0x5ca0b3.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x23cda2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js', function (_0x5024d7, _0x480357, _0x12a7d0, _0x1b1c95, _0x42ffa9) {
        _0x12a7d0.exports = _0x1c256d;
        var _0x4379bf = _0x480357('./writer');
        (_0x1c256d.prototype = Object.create(_0x4379bf.prototype)).constructor = _0x1c256d;
        var _0x35a9b6 = _0x480357("./util/minimal");
        function _0x1c256d() {
          _0x4379bf.call(this);
        }
        function _0x4cdeff(_0x41f4af, _0x2822e1, _0x16b0f9) {
          if (_0x41f4af.length < 0x28) {
            _0x35a9b6.utf8.write(_0x41f4af, _0x2822e1, _0x16b0f9);
          } else if (_0x2822e1.utf8Write) {
            _0x2822e1.utf8Write(_0x41f4af, _0x16b0f9);
          } else {
            _0x2822e1.write(_0x41f4af, _0x16b0f9);
          }
        }
        _0x1c256d._configure = function () {
          _0x1c256d.alloc = _0x35a9b6._Buffer_allocUnsafe;
          _0x1c256d.writeBytesBuffer = _0x35a9b6.Buffer && _0x35a9b6.Buffer.prototype instanceof Uint8Array && "set" === _0x35a9b6.Buffer.prototype.set.name ? function (_0x1e11fa, _0xca1dcb, _0x3a786a) {
            _0xca1dcb.set(_0x1e11fa, _0x3a786a);
          } : function (_0x4024ab, _0x6a4636, _0x5a69e0) {
            if (_0x4024ab.copy) {
              _0x4024ab.copy(_0x6a4636, _0x5a69e0, 0x0, _0x4024ab.length);
            } else {
              for (var _0x32e5de = 0x0; _0x32e5de < _0x4024ab.length;) {
                _0x6a4636[_0x5a69e0++] = _0x4024ab[_0x32e5de++];
              }
            }
          };
        };
        _0x1c256d.prototype.bytes = function (_0x4ff67b) {
          if (_0x35a9b6.isString(_0x4ff67b)) {
            _0x4ff67b = _0x35a9b6._Buffer_from(_0x4ff67b, "base64");
          }
          var _0x379711 = _0x4ff67b.length >>> 0x0;
          this.uint32(_0x379711);
          if (_0x379711) {
            this._push(_0x1c256d.writeBytesBuffer, _0x379711, _0x4ff67b);
          }
          return this;
        };
        _0x1c256d.prototype.string = function (_0x15d7a3) {
          var _0x388594 = _0x35a9b6.Buffer.byteLength(_0x15d7a3);
          this.uint32(_0x388594);
          if (_0x388594) {
            this._push(_0x4cdeff, _0x388594, _0x15d7a3);
          }
          return this;
        };
        _0x1c256d._configure();
        _0x12a7d0.exports;
      }, function () {
        return {
          './writer': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x2a03ae, _0x3e0d70, _0x384397, _0x1cc6a0, _0x10191c) {
        _0x384397.exports = _0x17ba99;
        var _0x4abe71;
        var _0x4b58b7 = _0x3e0d70("./util/minimal");
        var _0x4ed9ef = _0x4b58b7.LongBits;
        var _0x352338 = _0x4b58b7.utf8;
        function _0x17ba99(_0xc3ca60) {
          this.buf = _0xc3ca60;
          this.pos = 0x0;
          this.len = _0xc3ca60.length;
        }
        var _0x43f8f7;
        var _0x4d1acd = "undefined" != typeof Uint8Array ? function (_0xb05d3e) {
          if (_0xb05d3e instanceof Uint8Array || Array.isArray(_0xb05d3e)) {
            return new _0x17ba99(_0xb05d3e);
          }
          throw Error("illegal buffer");
        } : function (_0x255947) {
          if (Array.isArray(_0x255947)) {
            return new _0x17ba99(_0x255947);
          }
          throw Error("illegal buffer");
        };
        var _0x5a23b3 = function () {
          return _0x4b58b7.Buffer ? function (_0x24a469) {
            return (_0x17ba99.create = function (_0x2d98bf) {
              return _0x4b58b7.Buffer.isBuffer(_0x2d98bf) ? new _0x4abe71(_0x2d98bf) : _0x4d1acd(_0x2d98bf);
            })(_0x24a469);
          } : _0x4d1acd;
        };
        function _0x2808de() {
          var _0x38b11f = new _0x4ed9ef(0x0, 0x0);
          var _0x153cda = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x153cda < 0x3; ++_0x153cda) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x38b11f.lo = (_0x38b11f.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x153cda) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x38b11f;
              }
            }
            _0x38b11f.lo = (_0x38b11f.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x153cda) >>> 0x0;
            return _0x38b11f;
          }
          for (; _0x153cda < 0x4; ++_0x153cda) {
            _0x38b11f.lo = (_0x38b11f.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x153cda) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x38b11f;
            }
          }
          _0x38b11f.lo = (_0x38b11f.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x38b11f.hi = (_0x38b11f.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x38b11f;
          }
          _0x153cda = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x153cda < 0x5; ++_0x153cda) {
              _0x38b11f.hi = (_0x38b11f.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x153cda + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x38b11f;
              }
            }
          } else {
            for (; _0x153cda < 0x5; ++_0x153cda) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x38b11f.hi = (_0x38b11f.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x153cda + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x38b11f;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0xa1c6a0() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x4ed9ef((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x17ba99.create = _0x5a23b3();
        _0x17ba99.prototype._slice = _0x4b58b7.Array.prototype.subarray || _0x4b58b7.Array.prototype.slice;
        _0x43f8f7 = 0xffffffff;
        _0x17ba99.prototype.uint32 = function () {
          _0x43f8f7 = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x43f8f7;
          }
          _0x43f8f7 = (_0x43f8f7 | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x43f8f7;
          }
          _0x43f8f7 = (_0x43f8f7 | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x43f8f7;
          }
          _0x43f8f7 = (_0x43f8f7 | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x43f8f7;
          }
          _0x43f8f7 = (_0x43f8f7 | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x43f8f7;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x43f8f7;
        };
        _0x17ba99.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x17ba99.prototype.sint32 = function () {
          var _0xe785d5 = this.uint32();
          return _0xe785d5 >>> 0x1 ^ -(0x1 & _0xe785d5) | 0x0;
        };
        _0x17ba99.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x17ba99.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x17ba99.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x17ba99.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x1e87e7 = _0x4b58b7.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x1e87e7;
        };
        _0x17ba99.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x4a6349 = _0x4b58b7.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x4a6349;
        };
        _0x17ba99.prototype.bytes = function () {
          var _0x377503 = this.uint32();
          var _0x3aaae8 = this.pos;
          var _0x596ae1 = this.pos + _0x377503;
          if (_0x596ae1 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x377503 || 0x1) + " > " + this.len);
          }
          this.pos += _0x377503;
          return Array.isArray(this.buf) ? this.buf.slice(_0x3aaae8, _0x596ae1) : _0x3aaae8 === _0x596ae1 ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x3aaae8, _0x596ae1);
        };
        _0x17ba99.prototype.string = function () {
          var _0x68e2b8 = this.bytes();
          return _0x352338.read(_0x68e2b8, 0x0, _0x68e2b8.length);
        };
        _0x17ba99.prototype.skip = function (_0x44e2f7) {
          if ('number' == typeof _0x44e2f7) {
            if (this.pos + _0x44e2f7 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x44e2f7 || 0x1) + " > " + this.len);
            }
            this.pos += _0x44e2f7;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x17ba99.prototype.skipType = function (_0x5a3d9c) {
          switch (_0x5a3d9c) {
            case 0x0:
              this.skip();
              break;
            case 0x1:
              this.skip(0x8);
              break;
            case 0x2:
              this.skip(this.uint32());
              break;
            case 0x3:
              for (; 0x4 != (_0x5a3d9c = 0x7 & this.uint32());) {
                this.skipType(_0x5a3d9c);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x5a3d9c + " at offset " + this.pos);
          }
          return this;
        };
        _0x17ba99._configure = function (_0x4fb8a1) {
          _0x4abe71 = _0x4fb8a1;
          _0x17ba99.create = _0x5a23b3();
          _0x4abe71._configure();
          var _0x2092a2 = _0x4b58b7.Long ? "toLong" : "toNumber";
          _0x4b58b7.merge(_0x17ba99.prototype, {
            'int64': function () {
              return _0x2808de.call(this)[_0x2092a2](false);
            },
            'uint64': function () {
              return _0x2808de.call(this)[_0x2092a2](true);
            },
            'sint64': function () {
              return _0x2808de.call(this).zzDecode()[_0x2092a2](false);
            },
            'fixed64': function () {
              return _0xa1c6a0.call(this)[_0x2092a2](true);
            },
            'sfixed64': function () {
              return _0xa1c6a0.call(this)[_0x2092a2](false);
            }
          });
        };
        _0x384397.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x23cda2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js', function (_0x185ad4, _0x4f23a6, _0x340c8e, _0x276589, _0x360cb4) {
        _0x340c8e.exports = _0xcc2516;
        var _0x546b32 = _0x4f23a6('./reader');
        (_0xcc2516.prototype = Object.create(_0x546b32.prototype)).constructor = _0xcc2516;
        var _0x1b12c2 = _0x4f23a6("./util/minimal");
        function _0xcc2516(_0x54d2e4) {
          _0x546b32.call(this, _0x54d2e4);
        }
        _0xcc2516._configure = function () {
          if (_0x1b12c2.Buffer) {
            _0xcc2516.prototype._slice = _0x1b12c2.Buffer.prototype.slice;
          }
        };
        _0xcc2516.prototype.string = function () {
          var _0x1c6dfc = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x1c6dfc, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + _0x1c6dfc, this.len));
        };
        _0xcc2516._configure();
        _0x340c8e.exports;
      }, function () {
        return {
          './reader': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (_0x1164b9, _0x1f3b6c, _0x446c49, _0x5ae9c9, _0x55e4ab) {
        _0x446c49.exports = _0x3138b8;
        var _0x3772c4 = _0x1f3b6c("../util/minimal");
        function _0x3138b8(_0x933fcc, _0x440e54, _0x2dd0af) {
          if ("function" != typeof _0x933fcc) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x3772c4.EventEmitter.call(this);
          this.rpcImpl = _0x933fcc;
          this.requestDelimited = Boolean(_0x440e54);
          this.responseDelimited = Boolean(_0x2dd0af);
        }
        (_0x3138b8.prototype = Object.create(_0x3772c4.EventEmitter.prototype)).constructor = _0x3138b8;
        _0x3138b8.prototype.rpcCall = function _0x1a34b4(_0x3565fa, _0x4163f8, _0x196b93, _0x1ff954, _0x3ade7c) {
          if (!_0x1ff954) {
            throw TypeError("request must be specified");
          }
          var _0x4b137d = this;
          if (!_0x3ade7c) {
            return _0x3772c4.asPromise(_0x1a34b4, _0x4b137d, _0x3565fa, _0x4163f8, _0x196b93, _0x1ff954);
          }
          if (_0x4b137d.rpcImpl) {
            try {
              return _0x4b137d.rpcImpl(_0x3565fa, _0x4163f8[_0x4b137d.requestDelimited ? "encodeDelimited" : "encode"](_0x1ff954).finish(), function (_0x4fe4a3, _0x4359d5) {
                if (_0x4fe4a3) {
                  _0x4b137d.emit('error', _0x4fe4a3, _0x3565fa);
                  return _0x3ade7c(_0x4fe4a3);
                }
                if (null !== _0x4359d5) {
                  if (!(_0x4359d5 instanceof _0x196b93)) {
                    try {
                      _0x4359d5 = _0x196b93[_0x4b137d.responseDelimited ? 'decodeDelimited' : 'decode'](_0x4359d5);
                    } catch (_0xdcb2d5) {
                      _0x4b137d.emit("error", _0xdcb2d5, _0x3565fa);
                      return _0x3ade7c(_0xdcb2d5);
                    }
                  }
                  _0x4b137d.emit("data", _0x4359d5, _0x3565fa);
                  return _0x3ade7c(null, _0x4359d5);
                }
                _0x4b137d.end(true);
              });
            } catch (_0x23e7a4) {
              _0x4b137d.emit("error", _0x23e7a4, _0x3565fa);
              return void setTimeout(function () {
                _0x3ade7c(_0x23e7a4);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x3ade7c(Error("already ended"));
            }, 0x0);
          }
        };
        _0x3138b8.prototype.end = function (_0x36e755) {
          if (this.rpcImpl) {
            if (!_0x36e755) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit('end').off();
          }
          return this;
        };
        _0x446c49.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (_0x38daa8, _0x3f364b, _0x5e03a4, _0x29c3e3, _0x3a51d8) {
        _0x38daa8.Service = _0x3f364b("./rpc/service");
        _0x5e03a4.exports;
      }, function () {
        return {
          './rpc/service': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (_0x546d31, _0x7e0a7f, _0x48a954, _0x4c5319, _0x380835) {
        _0x48a954.exports = {};
        _0x48a954.exports;
      }, {});
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x31f1e7, _0x177c45, _0x2f2eac, _0x4d4a21, _0x369210) {
        function _0x3d00f3() {
          _0x31f1e7.util._configure();
          _0x31f1e7.Writer._configure(_0x31f1e7.BufferWriter);
          _0x31f1e7.Reader._configure(_0x31f1e7.BufferReader);
        }
        _0x31f1e7.build = 'minimal';
        _0x31f1e7.Writer = _0x177c45("./writer");
        _0x31f1e7.BufferWriter = _0x177c45("./writer_buffer");
        _0x31f1e7.Reader = _0x177c45("./reader");
        _0x31f1e7.BufferReader = _0x177c45('./reader_buffer');
        _0x31f1e7.util = _0x177c45("./util/minimal");
        _0x31f1e7.rpc = _0x177c45("./rpc");
        _0x31f1e7.roots = _0x177c45('./roots');
        _0x31f1e7.configure = _0x3d00f3;
        _0x3d00f3();
        _0x2f2eac.exports;
      }, function () {
        return {
          './writer': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './writer_buffer': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js',
          './reader': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js',
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          './roots': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0xcc0f, _0x521e4d, _0x17505f, _0x5defa4, _0x482edc) {
        function _0xc8c73e(_0x2a9148, _0x2a596c) {
          if ("string" == typeof _0x2a9148) {
            _0x2a596c = _0x2a9148;
            _0x2a9148 = undefined;
          }
          var _0x181a4d = [];
          function _0xa89f4a(_0x1fef86) {
            if ("string" != typeof _0x1fef86) {
              var _0x399397 = "function " + (undefined || _0x2a596c || '') + '(' + (_0x2a9148 && _0x2a9148.join(',') || '') + "){\n  " + _0x181a4d.join("\n  ") + "\n}";
              if (_0xc8c73e.verbose) {
                console.log("codegen: " + _0x399397);
              }
              _0x399397 = "return " + _0x399397;
              if (_0x1fef86) {
                var _0x2c41d1 = Object.keys(_0x1fef86);
                var _0x25aa39 = new Array(_0x2c41d1.length + 0x1);
                var _0x59e21e = new Array(_0x2c41d1.length);
                for (var _0x4c718d = 0x0; _0x4c718d < _0x2c41d1.length;) {
                  _0x25aa39[_0x4c718d] = _0x2c41d1[_0x4c718d];
                  _0x59e21e[_0x4c718d] = _0x1fef86[_0x2c41d1[_0x4c718d++]];
                }
                _0x25aa39[_0x4c718d] = _0x399397;
                return Function.apply(null, _0x25aa39).apply(null, _0x59e21e);
              }
              return Function(_0x399397)();
            }
            var _0x2bd0a5 = new Array(arguments.length - 0x1);
            for (var _0x322b59 = 0x0; _0x322b59 < _0x2bd0a5.length;) {
              _0x2bd0a5[_0x322b59] = arguments[++_0x322b59];
            }
            _0x322b59 = 0x0;
            _0x1fef86 = _0x1fef86.replace(/%([%dfijs])/g, function (_0x117346, _0x53dbe2) {
              var _0x5c891f = _0x2bd0a5[_0x322b59++];
              switch (_0x53dbe2) {
                case 'd':
                case 'f':
                  return String(Number(_0x5c891f));
                case 'i':
                  return String(Math.floor(_0x5c891f));
                case 'j':
                  return JSON.stringify(_0x5c891f);
                case 's':
                  return String(_0x5c891f);
              }
              return '%';
            });
            if (_0x322b59 !== _0x2bd0a5.length) {
              throw Error("parameter count mismatch");
            }
            _0x181a4d.push(_0x1fef86);
            return _0xa89f4a;
          }
          function _0x1d14cb(_0x5c26b4) {
            return "function " + (_0x5c26b4 || _0x2a596c || '') + '(' + (_0x2a9148 && _0x2a9148.join(',') || '') + "){\n  " + _0x181a4d.join("\n  ") + "\n}";
          }
          _0xa89f4a.toString = _0x1d14cb;
          return _0xa89f4a;
        }
        _0x17505f.exports = _0xc8c73e;
        _0xc8c73e.verbose = false;
        _0x17505f.exports;
      }, {});
      _0x23cda2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js', function (_0x35c90f, _0x8e23bc, _0x151e82, _0x2a359e, _0x51e943) {
        _0x151e82.exports = _0x1b6a9b;
        var _0x2e6fe9 = _0x8e23bc("@protobufjs/aspromise");
        var _0x411333 = _0x8e23bc("@protobufjs/inquire")('fs');
        function _0x1b6a9b(_0x45b380, _0x4f38a1, _0x5713e1) {
          if ("function" == typeof _0x4f38a1) {
            _0x5713e1 = _0x4f38a1;
            _0x4f38a1 = {};
          } else if (!_0x4f38a1) {
            _0x4f38a1 = {};
          }
          return _0x5713e1 ? !_0x4f38a1.xhr && _0x411333 && _0x411333.readFile ? _0x411333.readFile(_0x45b380, function (_0x4bc7b8, _0x98b73d) {
            return _0x4bc7b8 && "undefined" != typeof XMLHttpRequest ? _0x1b6a9b.xhr(_0x45b380, _0x4f38a1, _0x5713e1) : _0x4bc7b8 ? _0x5713e1(_0x4bc7b8) : _0x5713e1(null, _0x4f38a1.binary ? _0x98b73d : _0x98b73d.toString("utf8"));
          }) : _0x1b6a9b.xhr(_0x45b380, _0x4f38a1, _0x5713e1) : _0x2e6fe9(_0x1b6a9b, this, _0x45b380, _0x4f38a1);
        }
        _0x1b6a9b.xhr = function (_0x4bfd7d, _0x17a1a5, _0x1312f9) {
          var _0x4a5242 = new XMLHttpRequest();
          _0x4a5242.onreadystatechange = function () {
            if (0x4 === _0x4a5242.readyState) {
              if (0x0 !== _0x4a5242.status && 0xc8 !== _0x4a5242.status) {
                return _0x1312f9(Error("status " + _0x4a5242.status));
              }
              if (_0x17a1a5.binary) {
                var _0x2427bb = _0x4a5242.response;
                if (!_0x2427bb) {
                  _0x2427bb = [];
                  for (var _0x323be5 = 0x0; _0x323be5 < _0x4a5242.responseText.length; ++_0x323be5) {
                    _0x2427bb.push(0xff & _0x4a5242.responseText.charCodeAt(_0x323be5));
                  }
                }
                return _0x1312f9(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x2427bb) : _0x2427bb);
              }
              return _0x1312f9(null, _0x4a5242.responseText);
            }
          };
          if (_0x17a1a5.binary) {
            if ("overrideMimeType" in _0x4a5242) {
              _0x4a5242.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x4a5242.responseType = "arraybuffer";
          }
          _0x4a5242.open("GET", _0x4bfd7d);
          _0x4a5242.send();
        };
        _0x151e82.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js'
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (_0x34ca9a, _0x69dbcc, _0x27ed37, _0x39156f, _0x1e3378) {
        var _0x20f5f5 = _0x34ca9a.isAbsolute = function (_0x375bb2) {
          return /^(?:\/|\w+:)/.test(_0x375bb2);
        };
        var _0x210863 = _0x34ca9a.normalize = function (_0x3ef0d3) {
          var _0x557291 = (_0x3ef0d3 = _0x3ef0d3.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x59b052 = _0x20f5f5(_0x3ef0d3);
          var _0x3a2528 = '';
          if (_0x59b052) {
            _0x3a2528 = _0x557291.shift() + '/';
          }
          for (var _0x5c3f58 = 0x0; _0x5c3f58 < _0x557291.length;) {
            if ('..' === _0x557291[_0x5c3f58]) {
              if (_0x5c3f58 > 0x0 && '..' !== _0x557291[_0x5c3f58 - 0x1]) {
                _0x557291.splice(--_0x5c3f58, 0x2);
              } else if (_0x59b052) {
                _0x557291.splice(_0x5c3f58, 0x1);
              } else {
                ++_0x5c3f58;
              }
            } else if ('.' === _0x557291[_0x5c3f58]) {
              _0x557291.splice(_0x5c3f58, 0x1);
            } else {
              ++_0x5c3f58;
            }
          }
          return _0x3a2528 + _0x557291.join('/');
        };
        _0x34ca9a.resolve = function (_0x118e8f, _0x2276ff, _0x439cae) {
          if (!_0x439cae) {
            _0x2276ff = _0x210863(_0x2276ff);
          }
          return _0x20f5f5(_0x2276ff) ? _0x2276ff : (_0x439cae || (_0x118e8f = _0x210863(_0x118e8f)), (_0x118e8f = _0x118e8f.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x210863(_0x118e8f + '/' + _0x2276ff) : _0x2276ff);
        };
        _0x27ed37.exports;
      }, {});
      _0x23cda2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/types.js', function (_0x5e6fb4, _0x46a5d6, _0x5541a2, _0x3d6fa1, _0x2c4a67) {
        var _0x27fe23 = _0x46a5d6("./util");
        var _0x1f7a8f = ["double", 'float', "int32", "uint32", "sint32", 'fixed32', "sfixed32", "int64", "uint64", 'sint64', "fixed64", "sfixed64", "bool", "string", 'bytes'];
        function _0x344d57(_0x109d13, _0x1cdc8e) {
          var _0x91b52f = 0x0;
          var _0x4ddd91 = {};
          for (_0x1cdc8e |= 0x0; _0x91b52f < _0x109d13.length;) {
            _0x4ddd91[_0x1f7a8f[_0x91b52f + _0x1cdc8e]] = _0x109d13[_0x91b52f++];
          }
          return _0x4ddd91;
        }
        _0x5e6fb4.basic = _0x344d57([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x5e6fb4.defaults = _0x344d57([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x27fe23.emptyArray, null]);
        _0x5e6fb4.long = _0x344d57([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x5e6fb4.mapKey = _0x344d57([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x5e6fb4.packed = _0x344d57([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x5541a2.exports;
      }, function () {
        return {
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/field.js', function (_0x7755d2, _0x47d823, _0x3ecf83, _0x3cb903, _0x195468) {
        _0x3ecf83.exports = _0x589b55;
        var _0x40d522 = _0x47d823("./object");
        ((_0x589b55.prototype = Object.create(_0x40d522.prototype)).constructor = _0x589b55).className = "Field";
        var _0x419879;
        var _0x2d1365 = _0x47d823('./enum');
        var _0x14c665 = _0x47d823('./types');
        var _0x350b4a = _0x47d823("./util");
        var _0x16f819 = /^required|optional|repeated$/;
        function _0x589b55(_0x4cb995, _0x3fddf1, _0x3d9b7a, _0x356afa, _0x29719e, _0x45d633, _0x721615) {
          if (_0x350b4a.isObject(_0x356afa)) {
            _0x721615 = _0x29719e;
            _0x45d633 = _0x356afa;
            _0x356afa = _0x29719e = undefined;
          } else if (_0x350b4a.isObject(_0x29719e)) {
            _0x721615 = _0x45d633;
            _0x45d633 = _0x29719e;
            _0x29719e = undefined;
          }
          _0x40d522.call(this, _0x4cb995, _0x45d633);
          if (!_0x350b4a.isInteger(_0x3fddf1) || _0x3fddf1 < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x350b4a.isString(_0x3d9b7a)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x356afa && !_0x16f819.test(_0x356afa = _0x356afa.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x29719e && !_0x350b4a.isString(_0x29719e)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === _0x356afa) {
            _0x356afa = "optional";
          }
          this.rule = _0x356afa && "optional" !== _0x356afa ? _0x356afa : undefined;
          this.type = _0x3d9b7a;
          this.id = _0x3fddf1;
          this.extend = _0x29719e || undefined;
          this.required = "required" === _0x356afa;
          this.optional = !this.required;
          this.repeated = "repeated" === _0x356afa;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x350b4a.Long && undefined !== _0x14c665.long[_0x3d9b7a];
          this.bytes = 'bytes' === _0x3d9b7a;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x721615;
        }
        _0x589b55.fromJSON = function (_0x159014, _0x3d1a8b) {
          return new _0x589b55(_0x159014, _0x3d1a8b.id, _0x3d1a8b.type, _0x3d1a8b.rule, _0x3d1a8b.extend, _0x3d1a8b.options, _0x3d1a8b.comment);
        };
        Object.defineProperty(_0x589b55.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption('packed');
            }
            return this._packed;
          }
        });
        _0x589b55.prototype.setOption = function (_0x51e8aa, _0x189fb1, _0x18c288) {
          if ("packed" === _0x51e8aa) {
            this._packed = null;
          }
          return _0x40d522.prototype.setOption.call(this, _0x51e8aa, _0x189fb1, _0x18c288);
        };
        _0x589b55.prototype.toJSON = function (_0x708e4e) {
          var _0x1db745 = !!_0x708e4e && Boolean(_0x708e4e.keepComments);
          return _0x350b4a.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, 'extend', this.extend, "options", this.options, 'comment', _0x1db745 ? this.comment : undefined]);
        };
        _0x589b55.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x14c665.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x419879) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options['default']) {
            this.typeDefault = this.options["default"];
            if (this.resolvedType instanceof _0x2d1365 && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x2d1365))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x350b4a.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && "string" == typeof this.typeDefault) {
              var _0x34d0c9;
              if (_0x350b4a.base64.test(this.typeDefault)) {
                _0x350b4a.base64.decode(this.typeDefault, _0x34d0c9 = _0x350b4a.newBuffer(_0x350b4a.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x350b4a.utf8.write(this.typeDefault, _0x34d0c9 = _0x350b4a.newBuffer(_0x350b4a.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x34d0c9;
            }
          }
          if (this.map) {
            this.defaultValue = _0x350b4a.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x350b4a.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x419879) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x40d522.prototype.resolve.call(this);
        };
        _0x589b55.d = function (_0x486809, _0x2ef9e6, _0x35d9c2, _0x4da19a) {
          if ('function' == typeof _0x2ef9e6) {
            _0x2ef9e6 = _0x350b4a.decorateType(_0x2ef9e6).name;
          } else if (_0x2ef9e6 && 'object' == typeof _0x2ef9e6) {
            _0x2ef9e6 = _0x350b4a.decorateEnum(_0x2ef9e6).name;
          }
          return function (_0x1f75ce, _0x366b1c) {
            _0x350b4a.decorateType(_0x1f75ce.constructor).add(new _0x589b55(_0x366b1c, _0x486809, _0x2ef9e6, _0x35d9c2, {
              'default': _0x4da19a
            }));
          };
        };
        _0x589b55._configure = function (_0x43d046) {
          _0x419879 = _0x43d046;
        };
        _0x3ecf83.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (_0x1e032e, _0x31e584, _0x494a6d, _0x494f46, _0x37f643) {
        _0x494a6d.exports = _0x182666;
        var _0x29f903 = _0x31e584('./object');
        ((_0x182666.prototype = Object.create(_0x29f903.prototype)).constructor = _0x182666).className = 'OneOf';
        var _0xa713a2 = _0x31e584("./field");
        var _0x4f905f = _0x31e584("./util");
        function _0x182666(_0x2d902d, _0x23b915, _0x2379e3, _0x543a38) {
          if (!Array.isArray(_0x23b915)) {
            _0x2379e3 = _0x23b915;
            _0x23b915 = undefined;
          }
          _0x29f903.call(this, _0x2d902d, _0x2379e3);
          if (undefined !== _0x23b915 && !Array.isArray(_0x23b915)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x23b915 || [];
          this.fieldsArray = [];
          this.comment = _0x543a38;
        }
        function _0x5138b2(_0x181212) {
          if (_0x181212.parent) {
            for (var _0x4ca338 = 0x0; _0x4ca338 < _0x181212.fieldsArray.length; ++_0x4ca338) {
              if (!_0x181212.fieldsArray[_0x4ca338].parent) {
                _0x181212.parent.add(_0x181212.fieldsArray[_0x4ca338]);
              }
            }
          }
        }
        _0x182666.fromJSON = function (_0x1e4aeb, _0x5b84bd) {
          return new _0x182666(_0x1e4aeb, _0x5b84bd.oneof, _0x5b84bd.options, _0x5b84bd.comment);
        };
        _0x182666.prototype.toJSON = function (_0x345a32) {
          var _0x27986f = !!_0x345a32 && Boolean(_0x345a32.keepComments);
          return _0x4f905f.toObject(['options', this.options, 'oneof', this.oneof, "comment", _0x27986f ? this.comment : undefined]);
        };
        _0x182666.prototype.add = function (_0x3d2412) {
          if (!(_0x3d2412 instanceof _0xa713a2)) {
            throw TypeError("field must be a Field");
          }
          if (_0x3d2412.parent && _0x3d2412.parent !== this.parent) {
            _0x3d2412.parent.remove(_0x3d2412);
          }
          this.oneof.push(_0x3d2412.name);
          this.fieldsArray.push(_0x3d2412);
          _0x3d2412.partOf = this;
          _0x5138b2(this);
          return this;
        };
        _0x182666.prototype.remove = function (_0x221b0f) {
          if (!(_0x221b0f instanceof _0xa713a2)) {
            throw TypeError("field must be a Field");
          }
          var _0x4249ff = this.fieldsArray.indexOf(_0x221b0f);
          if (_0x4249ff < 0x0) {
            throw Error(_0x221b0f + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x4249ff, 0x1);
          if ((_0x4249ff = this.oneof.indexOf(_0x221b0f.name)) > -0x1) {
            this.oneof.splice(_0x4249ff, 0x1);
          }
          _0x221b0f.partOf = null;
          return this;
        };
        _0x182666.prototype.onAdd = function (_0x4ee6b1) {
          _0x29f903.prototype.onAdd.call(this, _0x4ee6b1);
          for (var _0x2f90e1 = 0x0; _0x2f90e1 < this.oneof.length; ++_0x2f90e1) {
            var _0x3f7ad8 = _0x4ee6b1.get(this.oneof[_0x2f90e1]);
            if (_0x3f7ad8 && !_0x3f7ad8.partOf) {
              _0x3f7ad8.partOf = this;
              this.fieldsArray.push(_0x3f7ad8);
            }
          }
          _0x5138b2(this);
        };
        _0x182666.prototype.onRemove = function (_0x33ed31) {
          var _0xfc16e0;
          for (var _0x3d0f13 = 0x0; _0x3d0f13 < this.fieldsArray.length; ++_0x3d0f13) {
            if ((_0xfc16e0 = this.fieldsArray[_0x3d0f13]).parent) {
              _0xfc16e0.parent.remove(_0xfc16e0);
            }
          }
          _0x29f903.prototype.onRemove.call(this, _0x33ed31);
        };
        _0x182666.d = function () {
          var _0x5ca74a = new Array(arguments.length);
          for (var _0x462335 = 0x0; _0x462335 < arguments.length;) {
            _0x5ca74a[_0x462335] = arguments[_0x462335++];
          }
          return function (_0x1c0f79, _0x345c3c) {
            _0x4f905f.decorateType(_0x1c0f79.constructor).add(new _0x182666(_0x345c3c, _0x5ca74a));
            Object.defineProperty(_0x1c0f79, _0x345c3c, {
              'get': _0x4f905f.oneOfGetter(_0x5ca74a),
              'set': _0x4f905f.oneOfSetter(_0x5ca74a)
            });
          };
        };
        _0x494a6d.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0x44707b, _0x546889, _0xdb5341, _0x3f5388, _0x4169dc) {
        _0xdb5341.exports = _0x4a23fe;
        var _0x219635 = _0x546889("./object");
        ((_0x4a23fe.prototype = Object.create(_0x219635.prototype)).constructor = _0x4a23fe).className = 'Namespace';
        var _0x238173;
        var _0x31ec29;
        var _0x175501;
        var _0xa10b14 = _0x546889("./field");
        var _0x44a9e5 = _0x546889('./oneof');
        var _0x27ace8 = _0x546889("./util");
        function _0xf02301(_0x188144, _0x4ce357) {
          if (_0x188144 && _0x188144.length) {
            var _0x2e4425 = {};
            for (var _0x425845 = 0x0; _0x425845 < _0x188144.length; ++_0x425845) {
              _0x2e4425[_0x188144[_0x425845].name] = _0x188144[_0x425845].toJSON(_0x4ce357);
            }
            return _0x2e4425;
          }
        }
        function _0x4a23fe(_0x2a19db, _0x3be897) {
          _0x219635.call(this, _0x2a19db, _0x3be897);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x2a2619(_0xbd623a) {
          _0xbd623a._nestedArray = null;
          return _0xbd623a;
        }
        _0x4a23fe.fromJSON = function (_0x14dea1, _0x2e0b24) {
          return new _0x4a23fe(_0x14dea1, _0x2e0b24.options).addJSON(_0x2e0b24.nested);
        };
        _0x4a23fe.arrayToJSON = _0xf02301;
        _0x4a23fe.isReservedId = function (_0x2c9dbf, _0x1fc145) {
          if (_0x2c9dbf) {
            for (var _0xdf7b76 = 0x0; _0xdf7b76 < _0x2c9dbf.length; ++_0xdf7b76) {
              if ('string' != typeof _0x2c9dbf[_0xdf7b76] && _0x2c9dbf[_0xdf7b76][0x0] <= _0x1fc145 && _0x2c9dbf[_0xdf7b76][0x1] > _0x1fc145) {
                return true;
              }
            }
          }
          return false;
        };
        _0x4a23fe.isReservedName = function (_0x51768a, _0x591a5a) {
          if (_0x51768a) {
            for (var _0x62c418 = 0x0; _0x62c418 < _0x51768a.length; ++_0x62c418) {
              if (_0x51768a[_0x62c418] === _0x591a5a) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x4a23fe.prototype, 'nestedArray', {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x27ace8.toArray(this.nested));
          }
        });
        _0x4a23fe.prototype.toJSON = function (_0x475207) {
          return _0x27ace8.toObject(['options', this.options, "nested", _0xf02301(this.nestedArray, _0x475207)]);
        };
        _0x4a23fe.prototype.addJSON = function (_0x1cbbc9) {
          if (_0x1cbbc9) {
            var _0x3bb075;
            var _0x4b6907 = Object.keys(_0x1cbbc9);
            for (var _0xe33ce1 = 0x0; _0xe33ce1 < _0x4b6907.length; ++_0xe33ce1) {
              _0x3bb075 = _0x1cbbc9[_0x4b6907[_0xe33ce1]];
              this.add((undefined !== _0x3bb075.fields ? _0x238173.fromJSON : undefined !== _0x3bb075.values ? _0x175501.fromJSON : undefined !== _0x3bb075.methods ? _0x31ec29.fromJSON : undefined !== _0x3bb075.id ? _0xa10b14.fromJSON : _0x4a23fe.fromJSON)(_0x4b6907[_0xe33ce1], _0x3bb075));
            }
          }
          return this;
        };
        _0x4a23fe.prototype.get = function (_0xe437fc) {
          return this.nested && this.nested[_0xe437fc] || null;
        };
        _0x4a23fe.prototype.getEnum = function (_0x33f054) {
          if (this.nested && this.nested[_0x33f054] instanceof _0x175501) {
            return this.nested[_0x33f054].values;
          }
          throw Error("no such enum: " + _0x33f054);
        };
        _0x4a23fe.prototype.add = function (_0x149dcd) {
          if (!(_0x149dcd instanceof _0xa10b14 && undefined !== _0x149dcd.extend || _0x149dcd instanceof _0x238173 || _0x149dcd instanceof _0x175501 || _0x149dcd instanceof _0x31ec29 || _0x149dcd instanceof _0x4a23fe || _0x149dcd instanceof _0x44a9e5)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x2dbdb3 = this.get(_0x149dcd.name);
            if (_0x2dbdb3) {
              if (!(_0x2dbdb3 instanceof _0x4a23fe && _0x149dcd instanceof _0x4a23fe) || _0x2dbdb3 instanceof _0x238173 || _0x2dbdb3 instanceof _0x31ec29) {
                throw Error("duplicate name '" + _0x149dcd.name + "' in " + this);
              }
              var _0x49c793 = _0x2dbdb3.nestedArray;
              for (var _0xcb2f0c = 0x0; _0xcb2f0c < _0x49c793.length; ++_0xcb2f0c) {
                _0x149dcd.add(_0x49c793[_0xcb2f0c]);
              }
              this.remove(_0x2dbdb3);
              if (!this.nested) {
                this.nested = {};
              }
              _0x149dcd.setOptions(_0x2dbdb3.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x149dcd.name] = _0x149dcd;
          _0x149dcd.onAdd(this);
          return _0x2a2619(this);
        };
        _0x4a23fe.prototype.remove = function (_0x40b317) {
          if (!(_0x40b317 instanceof _0x219635)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x40b317.parent !== this) {
            throw Error(_0x40b317 + " is not a member of " + this);
          }
          delete this.nested[_0x40b317.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x40b317.onRemove(this);
          return _0x2a2619(this);
        };
        _0x4a23fe.prototype.define = function (_0x409fa1, _0x2d4cc6) {
          if (_0x27ace8.isString(_0x409fa1)) {
            _0x409fa1 = _0x409fa1.split('.');
          } else {
            if (!Array.isArray(_0x409fa1)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x409fa1 && _0x409fa1.length && '' === _0x409fa1[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x1b4865 = this; _0x409fa1.length > 0x0;) {
            var _0x34bb3f = _0x409fa1.shift();
            if (_0x1b4865.nested && _0x1b4865.nested[_0x34bb3f]) {
              if (!((_0x1b4865 = _0x1b4865.nested[_0x34bb3f]) instanceof _0x4a23fe)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x1b4865.add(_0x1b4865 = new _0x4a23fe(_0x34bb3f));
            }
          }
          if (_0x2d4cc6) {
            _0x1b4865.addJSON(_0x2d4cc6);
          }
          return _0x1b4865;
        };
        _0x4a23fe.prototype.resolveAll = function () {
          var _0x407998 = this.nestedArray;
          for (var _0x106a5c = 0x0; _0x106a5c < _0x407998.length;) {
            if (_0x407998[_0x106a5c] instanceof _0x4a23fe) {
              _0x407998[_0x106a5c++].resolveAll();
            } else {
              _0x407998[_0x106a5c++].resolve();
            }
          }
          return this.resolve();
        };
        _0x4a23fe.prototype.lookup = function (_0x3f5bc2, _0x501612, _0x20f111) {
          if ("boolean" == typeof _0x501612) {
            _0x20f111 = _0x501612;
            _0x501612 = undefined;
          } else if (_0x501612 && !Array.isArray(_0x501612)) {
            _0x501612 = [_0x501612];
          }
          if (_0x27ace8.isString(_0x3f5bc2) && _0x3f5bc2.length) {
            if ('.' === _0x3f5bc2) {
              return this.root;
            }
            _0x3f5bc2 = _0x3f5bc2.split('.');
          } else {
            if (!_0x3f5bc2.length) {
              return this;
            }
          }
          if ('' === _0x3f5bc2[0x0]) {
            return this.root.lookup(_0x3f5bc2.slice(0x1), _0x501612);
          }
          var _0x31d94a = this.get(_0x3f5bc2[0x0]);
          if (_0x31d94a) {
            if (0x1 === _0x3f5bc2.length) {
              if (!_0x501612 || _0x501612.indexOf(_0x31d94a.constructor) > -0x1) {
                return _0x31d94a;
              }
            } else {
              if (_0x31d94a instanceof _0x4a23fe && (_0x31d94a = _0x31d94a.lookup(_0x3f5bc2.slice(0x1), _0x501612, true))) {
                return _0x31d94a;
              }
            }
          } else {
            for (var _0x480cad = 0x0; _0x480cad < this.nestedArray.length; ++_0x480cad) {
              if (this._nestedArray[_0x480cad] instanceof _0x4a23fe && (_0x31d94a = this._nestedArray[_0x480cad].lookup(_0x3f5bc2, _0x501612, true))) {
                return _0x31d94a;
              }
            }
          }
          return null === this.parent || _0x20f111 ? null : this.parent.lookup(_0x3f5bc2, _0x501612);
        };
        _0x4a23fe.prototype.lookupType = function (_0x5d991c) {
          var _0x4a0116 = this.lookup(_0x5d991c, [_0x238173]);
          if (!_0x4a0116) {
            throw Error("no such type: " + _0x5d991c);
          }
          return _0x4a0116;
        };
        _0x4a23fe.prototype.lookupEnum = function (_0xc6de67) {
          var _0x520e8b = this.lookup(_0xc6de67, [_0x175501]);
          if (!_0x520e8b) {
            throw Error("no such Enum '" + _0xc6de67 + "' in " + this);
          }
          return _0x520e8b;
        };
        _0x4a23fe.prototype.lookupTypeOrEnum = function (_0x530568) {
          var _0x38b072 = this.lookup(_0x530568, [_0x238173, _0x175501]);
          if (!_0x38b072) {
            throw Error("no such Type or Enum '" + _0x530568 + "' in " + this);
          }
          return _0x38b072;
        };
        _0x4a23fe.prototype.lookupService = function (_0x475d80) {
          var _0x264a71 = this.lookup(_0x475d80, [_0x31ec29]);
          if (!_0x264a71) {
            throw Error("no such Service '" + _0x475d80 + "' in " + this);
          }
          return _0x264a71;
        };
        _0x4a23fe._configure = function (_0x260410, _0xf7adfe, _0x3bdfe3) {
          _0x238173 = _0x260410;
          _0x31ec29 = _0xf7adfe;
          _0x175501 = _0x3bdfe3;
        };
        _0xdb5341.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './oneof': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x213f5f, _0x4dd0d3, _0x478e14, _0x3ecda1, _0x4f0d40) {
        _0x478e14.exports = _0x178239;
        var _0x3c3b26 = _0x4dd0d3("./field");
        ((_0x178239.prototype = Object.create(_0x3c3b26.prototype)).constructor = _0x178239).className = 'MapField';
        var _0x34ae2f = _0x4dd0d3("./types");
        var _0x91022a = _0x4dd0d3("./util");
        function _0x178239(_0x199214, _0x7d9656, _0x487b1b, _0x36439f, _0xffd3d7, _0x5d1067) {
          _0x3c3b26.call(this, _0x199214, _0x7d9656, _0x36439f, undefined, undefined, _0xffd3d7, _0x5d1067);
          if (!_0x91022a.isString(_0x487b1b)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x487b1b;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x178239.fromJSON = function (_0xb5148e, _0x15569c) {
          return new _0x178239(_0xb5148e, _0x15569c.id, _0x15569c.keyType, _0x15569c.type, _0x15569c.options, _0x15569c.comment);
        };
        _0x178239.prototype.toJSON = function (_0x72cec) {
          var _0x419f69 = !!_0x72cec && Boolean(_0x72cec.keepComments);
          return _0x91022a.toObject(["keyType", this.keyType, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, "comment", _0x419f69 ? this.comment : undefined]);
        };
        _0x178239.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x34ae2f.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x3c3b26.prototype.resolve.call(this);
        };
        _0x178239.d = function (_0x4c9ec4, _0xc1a4ca, _0x5605bc) {
          if ("function" == typeof _0x5605bc) {
            _0x5605bc = _0x91022a.decorateType(_0x5605bc).name;
          } else if (_0x5605bc && "object" == typeof _0x5605bc) {
            _0x5605bc = _0x91022a.decorateEnum(_0x5605bc).name;
          }
          return function (_0x5eb4ab, _0x12d883) {
            _0x91022a.decorateType(_0x5eb4ab.constructor).add(new _0x178239(_0x12d883, _0x4c9ec4, _0xc1a4ca, _0x5605bc));
          };
        };
        _0x478e14.exports;
      }, function () {
        return {
          './field': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './types': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/method.js', function (_0x35d73, _0x196786, _0xc40fc7, _0x3fb891, _0x2ade63) {
        _0xc40fc7.exports = _0x256d52;
        var _0x2d667e = _0x196786("./object");
        ((_0x256d52.prototype = Object.create(_0x2d667e.prototype)).constructor = _0x256d52).className = "Method";
        var _0x26f482 = _0x196786("./util");
        function _0x256d52(_0x15a15a, _0x121e57, _0xca6982, _0xe3c285, _0x138a09, _0x158b1e, _0x1921e0, _0x1a759e, _0x2a7ce7) {
          if (_0x26f482.isObject(_0x138a09)) {
            _0x1921e0 = _0x138a09;
            _0x138a09 = _0x158b1e = undefined;
          } else if (_0x26f482.isObject(_0x158b1e)) {
            _0x1921e0 = _0x158b1e;
            _0x158b1e = undefined;
          }
          if (undefined !== _0x121e57 && !_0x26f482.isString(_0x121e57)) {
            throw TypeError("type must be a string");
          }
          if (!_0x26f482.isString(_0xca6982)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x26f482.isString(_0xe3c285)) {
            throw TypeError("responseType must be a string");
          }
          _0x2d667e.call(this, _0x15a15a, _0x1921e0);
          this.type = _0x121e57 || "rpc";
          this.requestType = _0xca6982;
          this.requestStream = !!_0x138a09 || undefined;
          this.responseType = _0xe3c285;
          this.responseStream = !!_0x158b1e || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x1a759e;
          this.parsedOptions = _0x2a7ce7;
        }
        _0x256d52.fromJSON = function (_0x2b7abe, _0x59fe17) {
          return new _0x256d52(_0x2b7abe, _0x59fe17.type, _0x59fe17.requestType, _0x59fe17.responseType, _0x59fe17.requestStream, _0x59fe17.responseStream, _0x59fe17.options, _0x59fe17.comment, _0x59fe17.parsedOptions);
        };
        _0x256d52.prototype.toJSON = function (_0xbe5d62) {
          var _0x138a52 = !!_0xbe5d62 && Boolean(_0xbe5d62.keepComments);
          return _0x26f482.toObject(["type", "rpc" !== this.type && this.type || undefined, 'requestType', this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, 'responseStream', this.responseStream, "options", this.options, "comment", _0x138a52 ? this.comment : undefined, 'parsedOptions', this.parsedOptions]);
        };
        _0x256d52.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x2d667e.prototype.resolve.call(this));
        };
        _0xc40fc7.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (_0x25f1fc, _0x29878e, _0xc77f7f, _0x364e17, _0x1d6f4c) {
        _0xc77f7f.exports = _0x57fb85;
        var _0x13a0f4 = _0x29878e("./namespace");
        ((_0x57fb85.prototype = Object.create(_0x13a0f4.prototype)).constructor = _0x57fb85).className = "Service";
        var _0x32fc11 = _0x29878e("./method");
        var _0x395876 = _0x29878e("./util");
        var _0x45a7b4 = _0x29878e("./rpc");
        function _0x57fb85(_0x144ccb, _0x254eea) {
          _0x13a0f4.call(this, _0x144ccb, _0x254eea);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x3722f3(_0x260ea5) {
          _0x260ea5._methodsArray = null;
          return _0x260ea5;
        }
        _0x57fb85.fromJSON = function (_0x3fbf55, _0x2e903b) {
          var _0x5869f6 = new _0x57fb85(_0x3fbf55, _0x2e903b.options);
          if (_0x2e903b.methods) {
            var _0x113117 = Object.keys(_0x2e903b.methods);
            for (var _0x40f4a9 = 0x0; _0x40f4a9 < _0x113117.length; ++_0x40f4a9) {
              _0x5869f6.add(_0x32fc11.fromJSON(_0x113117[_0x40f4a9], _0x2e903b.methods[_0x113117[_0x40f4a9]]));
            }
          }
          if (_0x2e903b.nested) {
            _0x5869f6.addJSON(_0x2e903b.nested);
          }
          _0x5869f6.comment = _0x2e903b.comment;
          return _0x5869f6;
        };
        _0x57fb85.prototype.toJSON = function (_0x2540a8) {
          var _0x5d5379 = _0x13a0f4.prototype.toJSON.call(this, _0x2540a8);
          var _0x4df751 = !!_0x2540a8 && Boolean(_0x2540a8.keepComments);
          return _0x395876.toObject(["options", _0x5d5379 && _0x5d5379.options || undefined, 'methods', _0x13a0f4.arrayToJSON(this.methodsArray, _0x2540a8) || {}, "nested", _0x5d5379 && _0x5d5379.nested || undefined, "comment", _0x4df751 ? this.comment : undefined]);
        };
        Object.defineProperty(_0x57fb85.prototype, 'methodsArray', {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x395876.toArray(this.methods));
          }
        });
        _0x57fb85.prototype.get = function (_0x30ae57) {
          return this.methods[_0x30ae57] || _0x13a0f4.prototype.get.call(this, _0x30ae57);
        };
        _0x57fb85.prototype.resolveAll = function () {
          var _0xdc8323 = this.methodsArray;
          for (var _0x52f79e = 0x0; _0x52f79e < _0xdc8323.length; ++_0x52f79e) {
            _0xdc8323[_0x52f79e].resolve();
          }
          return _0x13a0f4.prototype.resolve.call(this);
        };
        _0x57fb85.prototype.add = function (_0xb628d3) {
          if (this.get(_0xb628d3.name)) {
            throw Error("duplicate name '" + _0xb628d3.name + "' in " + this);
          }
          return _0xb628d3 instanceof _0x32fc11 ? (this.methods[_0xb628d3.name] = _0xb628d3, _0xb628d3.parent = this, _0x3722f3(this)) : _0x13a0f4.prototype.add.call(this, _0xb628d3);
        };
        _0x57fb85.prototype.remove = function (_0x391fa6) {
          if (_0x391fa6 instanceof _0x32fc11) {
            if (this.methods[_0x391fa6.name] !== _0x391fa6) {
              throw Error(_0x391fa6 + " is not a member of " + this);
            }
            delete this.methods[_0x391fa6.name];
            _0x391fa6.parent = null;
            return _0x3722f3(this);
          }
          return _0x13a0f4.prototype.remove.call(this, _0x391fa6);
        };
        _0x57fb85.prototype.create = function (_0x1fbe06, _0x56ae1f, _0x14efce) {
          var _0xbfba67;
          var _0x45e665 = new _0x45a7b4.Service(_0x1fbe06, _0x56ae1f, _0x14efce);
          for (var _0x23e229 = 0x0; _0x23e229 < this.methodsArray.length; ++_0x23e229) {
            var _0x1b6ac7 = _0x395876.lcFirst((_0xbfba67 = this._methodsArray[_0x23e229]).resolve().name).replace(/[^$\w_]/g, '');
            _0x45e665[_0x1b6ac7] = _0x395876.codegen(['r', 'c'], _0x395876.isReserved(_0x1b6ac7) ? _0x1b6ac7 + '_' : _0x1b6ac7)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0xbfba67,
              'q': _0xbfba67.resolvedRequestType.ctor,
              's': _0xbfba67.resolvedResponseType.ctor
            });
          }
          return _0x45e665;
        };
        _0xc77f7f.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (_0x1da3e5, _0x1b9a80, _0x4e2665, _0x5af19a, _0x3d138f) {
        _0x4e2665.exports = _0x2b03f4;
        var _0x2edae1 = _0x1b9a80("./util/minimal");
        function _0x2b03f4(_0xa3e34f) {
          if (_0xa3e34f) {
            var _0x393625 = Object.keys(_0xa3e34f);
            for (var _0x3f439f = 0x0; _0x3f439f < _0x393625.length; ++_0x3f439f) {
              this[_0x393625[_0x3f439f]] = _0xa3e34f[_0x393625[_0x3f439f]];
            }
          }
        }
        _0x2b03f4.create = function (_0x34e78d) {
          return this.$type.create(_0x34e78d);
        };
        _0x2b03f4.encode = function (_0x560fe0, _0x8435e) {
          return this.$type.encode(_0x560fe0, _0x8435e);
        };
        _0x2b03f4.encodeDelimited = function (_0x131849, _0x30f00f) {
          return this.$type.encodeDelimited(_0x131849, _0x30f00f);
        };
        _0x2b03f4.decode = function (_0x1651c4) {
          return this.$type.decode(_0x1651c4);
        };
        _0x2b03f4.decodeDelimited = function (_0x4ba98e) {
          return this.$type.decodeDelimited(_0x4ba98e);
        };
        _0x2b03f4.verify = function (_0x54e776) {
          return this.$type.verify(_0x54e776);
        };
        _0x2b03f4.fromObject = function (_0x2a57e8) {
          return this.$type.fromObject(_0x2a57e8);
        };
        _0x2b03f4.toObject = function (_0x3189e9, _0x2c5b60) {
          return this.$type.toObject(_0x3189e9, _0x2c5b60);
        };
        _0x2b03f4.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x2edae1.toJSONOptions);
        };
        _0x4e2665.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0x467242, _0x317541, _0x5b8846, _0x1846e6, _0x24dfb9) {
        _0x5b8846.exports = function (_0xb19033) {
          var _0x453e57 = _0x5455ce.codegen(['r', 'l'], _0xb19033.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0xb19033.fieldsArray.filter(function (_0xe79d06) {
            return _0xe79d06.map;
          }).length ? ",k,value" : ''))("while(r.pos<c){")("var t=r.uint32()");
          if (_0xb19033.group) {
            _0x453e57("if((t&7)===4)")("break");
          }
          _0x453e57('switch(t>>>3){');
          for (var _0x1c9c3a = 0x0; _0x1c9c3a < _0xb19033.fieldsArray.length; ++_0x1c9c3a) {
            var _0x6ab843 = _0xb19033._fieldsArray[_0x1c9c3a].resolve();
            var _0x4dbdb0 = _0x6ab843.resolvedType instanceof _0x54d90e ? "int32" : _0x6ab843.type;
            var _0x122a6a = 'm' + _0x5455ce.safeProp(_0x6ab843.name);
            _0x453e57("case %i:", _0x6ab843.id);
            if (_0x6ab843.map) {
              _0x453e57("if(%s===util.emptyObject)", _0x122a6a)("%s={}", _0x122a6a)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x4d8e56.defaults[_0x6ab843.keyType]) {
                _0x453e57('k=%j', _0x4d8e56.defaults[_0x6ab843.keyType]);
              } else {
                _0x453e57("k=null");
              }
              if (undefined !== _0x4d8e56.defaults[_0x4dbdb0]) {
                _0x453e57('value=%j', _0x4d8e56.defaults[_0x4dbdb0]);
              } else {
                _0x453e57("value=null");
              }
              _0x453e57("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", _0x6ab843.keyType)("case 2:");
              if (undefined === _0x4d8e56.basic[_0x4dbdb0]) {
                _0x453e57("value=types[%i].decode(r,r.uint32())", _0x1c9c3a);
              } else {
                _0x453e57("value=r.%s()", _0x4dbdb0);
              }
              _0x453e57("break")("default:")("r.skipType(tag2&7)")("break")('}')('}');
              if (undefined !== _0x4d8e56.long[_0x6ab843.keyType]) {
                _0x453e57("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x122a6a);
              } else {
                _0x453e57("%s[k]=value", _0x122a6a);
              }
            } else if (_0x6ab843.repeated) {
              _0x453e57('if(!(%s&&%s.length))', _0x122a6a, _0x122a6a)("%s=[]", _0x122a6a);
              if (undefined !== _0x4d8e56.packed[_0x4dbdb0]) {
                _0x453e57('if((t&7)===2){')("var c2=r.uint32()+r.pos")("while(r.pos<c2)")('%s.push(r.%s())', _0x122a6a, _0x4dbdb0)("}else");
              }
              if (undefined === _0x4d8e56.basic[_0x4dbdb0]) {
                _0x453e57(_0x6ab843.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x122a6a, _0x1c9c3a);
              } else {
                _0x453e57("%s.push(r.%s())", _0x122a6a, _0x4dbdb0);
              }
            } else if (undefined === _0x4d8e56.basic[_0x4dbdb0]) {
              _0x453e57(_0x6ab843.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", _0x122a6a, _0x1c9c3a);
            } else {
              _0x453e57('%s=r.%s()', _0x122a6a, _0x4dbdb0);
            }
            _0x453e57("break");
          }
          _0x453e57("default:")("r.skipType(t&7)")("break")('}')('}');
          for (_0x1c9c3a = 0x0; _0x1c9c3a < _0xb19033._fieldsArray.length; ++_0x1c9c3a) {
            var _0x11d169 = _0xb19033._fieldsArray[_0x1c9c3a];
            if (_0x11d169.required) {
              _0x453e57("if(!m.hasOwnProperty(%j))", _0x11d169.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x11d169.name + "'");
            }
          }
          return _0x453e57("return m");
        };
        var _0x54d90e = _0x317541("./enum");
        var _0x4d8e56 = _0x317541('./types');
        var _0x5455ce = _0x317541("./util");
        _0x5b8846.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (_0x44d430, _0x53378e, _0xef0e67, _0x4cf1ca, _0x5d80ae) {
        _0xef0e67.exports = function (_0x573aff) {
          var _0x3ecd6d = _0x3d25ac.codegen(['m'], _0x573aff.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var _0x10b701 = _0x573aff.oneofsArray;
          var _0x197ef0 = {};
          if (_0x10b701.length) {
            _0x3ecd6d("var p={}");
          }
          for (var _0x37f744 = 0x0; _0x37f744 < _0x573aff.fieldsArray.length; ++_0x37f744) {
            var _0xa78cc3 = _0x573aff._fieldsArray[_0x37f744].resolve();
            var _0x251de9 = 'm' + _0x3d25ac.safeProp(_0xa78cc3.name);
            if (_0xa78cc3.optional) {
              _0x3ecd6d("if(%s!=null&&m.hasOwnProperty(%j)){", _0x251de9, _0xa78cc3.name);
            }
            if (_0xa78cc3.map) {
              _0x3ecd6d('if(!util.isObject(%s))', _0x251de9)("return%j", _0xa78cc3.name + ": " + _0x24f4(0x443) + (_0xa78cc3.repeated && "array" !== _0x24f4(0x443) ? '[]' : _0xa78cc3.map && false ? "{k:" + _0xa78cc3.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x251de9)("for(var i=0;i<k.length;++i){");
              _0x274a73(_0x3ecd6d, _0xa78cc3, "k[i]");
              _0x32482b(_0x3ecd6d, _0xa78cc3, _0x37f744, _0x251de9 + "[k[i]]")('}');
            } else {
              if (_0xa78cc3.repeated) {
                _0x3ecd6d('if(!Array.isArray(%s))', _0x251de9)("return%j", _0xa78cc3.name + ": " + _0x24f4(0x67c) + (_0xa78cc3.repeated && "array" !== _0x24f4(0x67c) ? '[]' : _0xa78cc3.map && true ? "{k:" + _0xa78cc3.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x251de9);
                _0x32482b(_0x3ecd6d, _0xa78cc3, _0x37f744, _0x251de9 + "[i]")('}');
              } else {
                if (_0xa78cc3.partOf) {
                  var _0x4d29cc = _0x3d25ac.safeProp(_0xa78cc3.partOf.name);
                  if (0x1 === _0x197ef0[_0xa78cc3.partOf.name]) {
                    _0x3ecd6d('if(p%s===1)', _0x4d29cc)("return%j", _0xa78cc3.partOf.name + ": multiple values");
                  }
                  _0x197ef0[_0xa78cc3.partOf.name] = 0x1;
                  _0x3ecd6d("p%s=1", _0x4d29cc);
                }
                _0x32482b(_0x3ecd6d, _0xa78cc3, _0x37f744, _0x251de9);
              }
            }
            if (_0xa78cc3.optional) {
              _0x3ecd6d('}');
            }
          }
          return _0x3ecd6d("return null");
        };
        var _0x3d831c = _0x53378e("./enum");
        var _0x3d25ac = _0x53378e('./util');
        function _0x32482b(_0x48ff0a, _0x342ef9, _0x165ecf, _0xf67176) {
          if (_0x342ef9.resolvedType) {
            if (_0x342ef9.resolvedType instanceof _0x3d831c) {
              _0x48ff0a("switch(%s){", _0xf67176)("default:")("return%j", _0x342ef9.name + ": " + _0x24f4(0x3a8) + (_0x342ef9.repeated && "array" !== _0x24f4(0x3a8) ? '[]' : _0x342ef9.map && true ? "{k:" + _0x342ef9.keyType + '}' : '') + " expected");
              var _0x1f4429 = Object.keys(_0x342ef9.resolvedType.values);
              for (var _0x5d1ec0 = 0x0; _0x5d1ec0 < _0x1f4429.length; ++_0x5d1ec0) {
                _0x48ff0a("case %i:", _0x342ef9.resolvedType.values[_0x1f4429[_0x5d1ec0]]);
              }
              _0x48ff0a("break")('}');
            } else {
              _0x48ff0a('{')("var e=types[%i].verify(%s);", _0x165ecf, _0xf67176)('if(e)')("return%j+e", _0x342ef9.name + '.')('}');
            }
          } else {
            switch (_0x342ef9.type) {
              case 'int32':
              case 'uint32':
              case "sint32":
              case 'fixed32':
              case "sfixed32":
                _0x48ff0a("if(!util.isInteger(%s))", _0xf67176)("return%j", _0x342ef9.name + ": " + _0x24f4(0x21f) + (_0x342ef9.repeated && "array" !== _0x24f4(0x21f) ? '[]' : _0x342ef9.map && true ? "{k:" + _0x342ef9.keyType + '}' : '') + " expected");
                break;
              case "int64":
              case 'uint64':
              case 'sint64':
              case "fixed64":
              case "sfixed64":
                _0x48ff0a("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0xf67176, _0xf67176, _0xf67176, _0xf67176)('return%j', _0x342ef9.name + ": " + 'integer|Long' + (_0x342ef9.repeated && true ? '[]' : _0x342ef9.map && true ? "{k:" + _0x342ef9.keyType + '}' : '') + " expected");
                break;
              case "float":
              case "double":
                _0x48ff0a("if(typeof %s!==\"number\")", _0xf67176)("return%j", _0x342ef9.name + ": " + _0x24f4(0x625) + (_0x342ef9.repeated && "array" !== _0x24f4(0x625) ? '[]' : _0x342ef9.map && true ? "{k:" + _0x342ef9.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x48ff0a("if(typeof %s!==\"boolean\")", _0xf67176)("return%j", _0x342ef9.name + ": " + _0x24f4(0x4eb) + (_0x342ef9.repeated && "array" !== _0x24f4(0x4eb) ? '[]' : _0x342ef9.map && true ? "{k:" + _0x342ef9.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x48ff0a("if(!util.isString(%s))", _0xf67176)('return%j', _0x342ef9.name + ": " + 'string' + (_0x342ef9.repeated && true ? '[]' : _0x342ef9.map && true ? "{k:" + _0x342ef9.keyType + '}' : '') + " expected");
                break;
              case "bytes":
                _0x48ff0a("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0xf67176, _0xf67176, _0xf67176)('return%j', _0x342ef9.name + ": " + 'buffer' + (_0x342ef9.repeated && true ? '[]' : _0x342ef9.map && true ? "{k:" + _0x342ef9.keyType + '}' : '') + " expected");
            }
          }
          return _0x48ff0a;
        }
        function _0x274a73(_0x124fe6, _0x502035, _0x4f90fe) {
          switch (_0x502035.keyType) {
            case 'int32':
            case 'uint32':
            case 'sint32':
            case "fixed32":
            case 'sfixed32':
              _0x124fe6('if(!util.key32Re.test(%s))', _0x4f90fe)("return%j", _0x502035.name + ": " + "integer key" + (_0x502035.repeated && true ? '[]' : _0x502035.map && true ? "{k:" + _0x502035.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case 'uint64':
            case "sint64":
            case "fixed64":
            case 'sfixed64':
              _0x124fe6('if(!util.key64Re.test(%s))', _0x4f90fe)('return%j', _0x502035.name + ": " + "integer|Long key" + (_0x502035.repeated && true ? '[]' : _0x502035.map && true ? "{k:" + _0x502035.keyType + '}' : '') + " expected");
              break;
            case 'bool':
              _0x124fe6("if(!util.key2Re.test(%s))", _0x4f90fe)("return%j", _0x502035.name + ": " + _0x24f4(0x24f) + (_0x502035.repeated && "array" !== _0x24f4(0x24f) ? '[]' : _0x502035.map && true ? "{k:" + _0x502035.keyType + '}' : '') + " expected");
          }
          return _0x124fe6;
        }
        _0xef0e67.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0x310a26, _0x2f7a6f, _0x58bc1f, _0x6707f9, _0x11967d) {
        var _0xcc07f9 = _0x2f7a6f("./enum");
        var _0x470885 = _0x2f7a6f('./util');
        function _0x5bf18a(_0x3126c1, _0x243133, _0x3715e8, _0x1ce450) {
          if (_0x243133.resolvedType) {
            if (_0x243133.resolvedType instanceof _0xcc07f9) {
              _0x3126c1('switch(d%s){', _0x1ce450);
              var _0x8b199c = _0x243133.resolvedType.values;
              var _0x3b3e31 = Object.keys(_0x8b199c);
              for (var _0x123933 = 0x0; _0x123933 < _0x3b3e31.length; ++_0x123933) {
                if (_0x243133.repeated && _0x8b199c[_0x3b3e31[_0x123933]] === _0x243133.typeDefault) {
                  _0x3126c1("default:");
                }
                _0x3126c1("case%j:", _0x3b3e31[_0x123933])("case %i:", _0x8b199c[_0x3b3e31[_0x123933]])("m%s=%j", _0x1ce450, _0x8b199c[_0x3b3e31[_0x123933]])("break");
              }
              _0x3126c1('}');
            } else {
              _0x3126c1("if(typeof d%s!==\"object\")", _0x1ce450)("throw TypeError(%j)", _0x243133.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", _0x1ce450, _0x3715e8, _0x1ce450);
            }
          } else {
            var _0x1a1e63 = false;
            switch (_0x243133.type) {
              case "double":
              case "float":
                _0x3126c1("m%s=Number(d%s)", _0x1ce450, _0x1ce450);
                break;
              case "uint32":
              case 'fixed32':
                _0x3126c1('m%s=d%s>>>0', _0x1ce450, _0x1ce450);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                _0x3126c1("m%s=d%s|0", _0x1ce450, _0x1ce450);
                break;
              case 'uint64':
                _0x1a1e63 = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x3126c1("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x1ce450, _0x1ce450, _0x1a1e63)("else if(typeof d%s===\"string\")", _0x1ce450)('m%s=parseInt(d%s,10)', _0x1ce450, _0x1ce450)("else if(typeof d%s===\"number\")", _0x1ce450)('m%s=d%s', _0x1ce450, _0x1ce450)("else if(typeof d%s===\"object\")", _0x1ce450)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x1ce450, _0x1ce450, _0x1ce450, _0x1a1e63 ? "true" : '');
                break;
              case "bytes":
                _0x3126c1("if(typeof d%s===\"string\")", _0x1ce450)('util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)', _0x1ce450, _0x1ce450, _0x1ce450)("else if(d%s.length)", _0x1ce450)("m%s=d%s", _0x1ce450, _0x1ce450);
                break;
              case "string":
                _0x3126c1("m%s=String(d%s)", _0x1ce450, _0x1ce450);
                break;
              case "bool":
                _0x3126c1("m%s=Boolean(d%s)", _0x1ce450, _0x1ce450);
            }
          }
          return _0x3126c1;
        }
        function _0xfa5f23(_0x15fa4b, _0x2c939f, _0x132406, _0x18f09e) {
          if (_0x2c939f.resolvedType) {
            if (_0x2c939f.resolvedType instanceof _0xcc07f9) {
              _0x15fa4b("d%s=o.enums===String?types[%i].values[m%s]:m%s", _0x18f09e, _0x132406, _0x18f09e, _0x18f09e);
            } else {
              _0x15fa4b("d%s=types[%i].toObject(m%s,o)", _0x18f09e, _0x132406, _0x18f09e);
            }
          } else {
            var _0x6b6e7d = false;
            switch (_0x2c939f.type) {
              case "double":
              case "float":
                _0x15fa4b("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x18f09e, _0x18f09e, _0x18f09e, _0x18f09e);
                break;
              case 'uint64':
                _0x6b6e7d = true;
              case 'int64':
              case 'sint64':
              case 'fixed64':
              case "sfixed64":
                _0x15fa4b("if(typeof m%s===\"number\")", _0x18f09e)('d%s=o.longs===String?String(m%s):m%s', _0x18f09e, _0x18f09e, _0x18f09e)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x18f09e, _0x18f09e, _0x18f09e, _0x18f09e, _0x6b6e7d ? "true" : '', _0x18f09e);
                break;
              case "bytes":
                _0x15fa4b('d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s', _0x18f09e, _0x18f09e, _0x18f09e, _0x18f09e, _0x18f09e);
                break;
              default:
                _0x15fa4b('d%s=m%s', _0x18f09e, _0x18f09e);
            }
          }
          return _0x15fa4b;
        }
        _0x310a26.fromObject = function (_0x26725b) {
          var _0x57ba1b = _0x26725b.fieldsArray;
          var _0x250277 = _0x470885.codegen(['d'], _0x26725b.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0x57ba1b.length) {
            return _0x250277("return new this.ctor");
          }
          _0x250277("var m=new this.ctor");
          for (var _0x4a04dc = 0x0; _0x4a04dc < _0x57ba1b.length; ++_0x4a04dc) {
            var _0x4f75aa = _0x57ba1b[_0x4a04dc].resolve();
            var _0xb09a36 = _0x470885.safeProp(_0x4f75aa.name);
            if (_0x4f75aa.map) {
              _0x250277('if(d%s){', _0xb09a36)("if(typeof d%s!==\"object\")", _0xb09a36)("throw TypeError(%j)", _0x4f75aa.fullName + ": object expected")('m%s={}', _0xb09a36)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0xb09a36);
              _0x5bf18a(_0x250277, _0x4f75aa, _0x4a04dc, _0xb09a36 + '[ks[i]]')('}')('}');
            } else if (_0x4f75aa.repeated) {
              _0x250277("if(d%s){", _0xb09a36)("if(!Array.isArray(d%s))", _0xb09a36)("throw TypeError(%j)", _0x4f75aa.fullName + ": array expected")("m%s=[]", _0xb09a36)("for(var i=0;i<d%s.length;++i){", _0xb09a36);
              _0x5bf18a(_0x250277, _0x4f75aa, _0x4a04dc, _0xb09a36 + "[i]")('}')('}');
            } else {
              if (!(_0x4f75aa.resolvedType instanceof _0xcc07f9)) {
                _0x250277("if(d%s!=null){", _0xb09a36);
              }
              _0x5bf18a(_0x250277, _0x4f75aa, _0x4a04dc, _0xb09a36);
              if (!(_0x4f75aa.resolvedType instanceof _0xcc07f9)) {
                _0x250277('}');
              }
            }
          }
          return _0x250277("return m");
        };
        _0x310a26.toObject = function (_0x5266ac) {
          var _0x594bb6 = _0x5266ac.fieldsArray.slice().sort(_0x470885.compareFieldsById);
          if (!_0x594bb6.length) {
            return _0x470885.codegen()("return {}");
          }
          var _0x4254d2 = _0x470885.codegen(['m', 'o'], _0x5266ac.name + "$toObject")("if(!o)")('o={}')("var d={}");
          var _0x4166c7 = [];
          var _0x1f2361 = [];
          var _0xdb2548 = [];
          for (var _0x5342cb = 0x0; _0x5342cb < _0x594bb6.length; ++_0x5342cb) {
            if (!_0x594bb6[_0x5342cb].partOf) {
              (_0x594bb6[_0x5342cb].resolve().repeated ? _0x4166c7 : _0x594bb6[_0x5342cb].map ? _0x1f2361 : _0xdb2548).push(_0x594bb6[_0x5342cb]);
            }
          }
          if (_0x4166c7.length) {
            _0x4254d2("if(o.arrays||o.defaults){");
            for (_0x5342cb = 0x0; _0x5342cb < _0x4166c7.length; ++_0x5342cb) {
              _0x4254d2("d%s=[]", _0x470885.safeProp(_0x4166c7[_0x5342cb].name));
            }
            _0x4254d2('}');
          }
          if (_0x1f2361.length) {
            _0x4254d2("if(o.objects||o.defaults){");
            for (_0x5342cb = 0x0; _0x5342cb < _0x1f2361.length; ++_0x5342cb) {
              _0x4254d2("d%s={}", _0x470885.safeProp(_0x1f2361[_0x5342cb].name));
            }
            _0x4254d2('}');
          }
          if (_0xdb2548.length) {
            _0x4254d2('if(o.defaults){');
            for (_0x5342cb = 0x0; _0x5342cb < _0xdb2548.length; ++_0x5342cb) {
              var _0x4eabb9 = _0xdb2548[_0x5342cb];
              var _0x1622c3 = _0x470885.safeProp(_0x4eabb9.name);
              if (_0x4eabb9.resolvedType instanceof _0xcc07f9) {
                _0x4254d2("d%s=o.enums===String?%j:%j", _0x1622c3, _0x4eabb9.resolvedType.valuesById[_0x4eabb9.typeDefault], _0x4eabb9.typeDefault);
              } else {
                if (_0x4eabb9.long) {
                  _0x4254d2("if(util.Long){")("var n=new util.Long(%i,%i,%j)", _0x4eabb9.typeDefault.low, _0x4eabb9.typeDefault.high, _0x4eabb9.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x1622c3)("}else")("d%s=o.longs===String?%j:%i", _0x1622c3, _0x4eabb9.typeDefault.toString(), _0x4eabb9.typeDefault.toNumber());
                } else {
                  if (_0x4eabb9.bytes) {
                    var _0x4f727f = '[' + Array.prototype.slice.call(_0x4eabb9.typeDefault).join(',') + ']';
                    _0x4254d2("if(o.bytes===String)d%s=%j", _0x1622c3, String.fromCharCode.apply(String, _0x4eabb9.typeDefault))("else{")("d%s=%s", _0x1622c3, _0x4f727f)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0x1622c3, _0x1622c3)('}');
                  } else {
                    _0x4254d2("d%s=%j", _0x1622c3, _0x4eabb9.typeDefault);
                  }
                }
              }
            }
            _0x4254d2('}');
          }
          var _0x2112d6 = false;
          for (_0x5342cb = 0x0; _0x5342cb < _0x594bb6.length; ++_0x5342cb) {
            _0x4eabb9 = _0x594bb6[_0x5342cb];
            var _0x51d16a = _0x5266ac._fieldsArray.indexOf(_0x4eabb9);
            _0x1622c3 = _0x470885.safeProp(_0x4eabb9.name);
            if (_0x4eabb9.map) {
              if (!_0x2112d6) {
                _0x2112d6 = true;
                _0x4254d2("var ks2");
              }
              _0x4254d2('if(m%s&&(ks2=Object.keys(m%s)).length){', _0x1622c3, _0x1622c3)("d%s={}", _0x1622c3)("for(var j=0;j<ks2.length;++j){");
              _0xfa5f23(_0x4254d2, _0x4eabb9, _0x51d16a, _0x1622c3 + '[ks2[j]]')('}');
            } else if (_0x4eabb9.repeated) {
              _0x4254d2("if(m%s&&m%s.length){", _0x1622c3, _0x1622c3)("d%s=[]", _0x1622c3)("for(var j=0;j<m%s.length;++j){", _0x1622c3);
              _0xfa5f23(_0x4254d2, _0x4eabb9, _0x51d16a, _0x1622c3 + "[j]")('}');
            } else {
              _0x4254d2("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x1622c3, _0x4eabb9.name);
              _0xfa5f23(_0x4254d2, _0x4eabb9, _0x51d16a, _0x1622c3);
              if (_0x4eabb9.partOf) {
                _0x4254d2('if(o.oneofs)')("d%s=%j", _0x470885.safeProp(_0x4eabb9.partOf.name), _0x4eabb9.name);
              }
            }
            _0x4254d2('}');
          }
          return _0x4254d2("return d");
        };
        _0x58bc1f.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (_0x55161c, _0x4de062, _0x6ca05e, _0x5da4bf, _0x35e797) {
        var _0xf8d7b = _0x4de062("./message");
        _0x55161c[".google.protobuf.Any"] = {
          'fromObject': function (_0x2e334b) {
            if (_0x2e334b && _0x2e334b['@type']) {
              var _0x31ef2a = _0x2e334b["@type"].substring(_0x2e334b["@type"].lastIndexOf('/') + 0x1);
              var _0x1e0b9e = this.lookup(_0x31ef2a);
              if (_0x1e0b9e) {
                var _0x557b5e = '.' === _0x2e334b['@type'].charAt(0x0) ? _0x2e334b["@type"].substr(0x1) : _0x2e334b["@type"];
                if (-0x1 === _0x557b5e.indexOf('/')) {
                  _0x557b5e = '/' + _0x557b5e;
                }
                return this.create({
                  'type_url': _0x557b5e,
                  'value': _0x1e0b9e.encode(_0x1e0b9e.fromObject(_0x2e334b)).finish()
                });
              }
            }
            return this.fromObject(_0x2e334b);
          },
          'toObject': function (_0xf426bf, _0xd227e7) {
            var _0x3c7a38 = '';
            var _0x1e2ebd = '';
            if (_0xd227e7 && _0xd227e7.json && _0xf426bf.type_url && _0xf426bf.value) {
              _0x1e2ebd = _0xf426bf.type_url.substring(_0xf426bf.type_url.lastIndexOf('/') + 0x1);
              _0x3c7a38 = _0xf426bf.type_url.substring(0x0, _0xf426bf.type_url.lastIndexOf('/') + 0x1);
              var _0x391c0d = this.lookup(_0x1e2ebd);
              if (_0x391c0d) {
                _0xf426bf = _0x391c0d.decode(_0xf426bf.value);
              }
            }
            if (!(_0xf426bf instanceof this.ctor) && _0xf426bf instanceof _0xf8d7b) {
              var _0x558d35 = _0xf426bf.$type.toObject(_0xf426bf, _0xd227e7);
              if ('' === _0x3c7a38) {
                _0x3c7a38 = "type.googleapis.com/";
              }
              _0x1e2ebd = _0x3c7a38 + ('.' === _0xf426bf.$type.fullName[0x0] ? _0xf426bf.$type.fullName.substr(0x1) : _0xf426bf.$type.fullName);
              _0x558d35["@type"] = _0x1e2ebd;
              return _0x558d35;
            }
            return this.toObject(_0xf426bf, _0xd227e7);
          }
        };
        _0x6ca05e.exports;
      }, function () {
        return {
          './message': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (_0x73195, _0x4e0eb4, _0x3464e0, _0x594748, _0x55f021) {
        _0x3464e0.exports = _0xefa4d4;
        var _0x5e45ab = _0x4e0eb4('./namespace');
        ((_0xefa4d4.prototype = Object.create(_0x5e45ab.prototype)).constructor = _0xefa4d4).className = 'Type';
        var _0x1d1d57 = _0x4e0eb4("./enum");
        var _0x2c8eaf = _0x4e0eb4('./oneof');
        var _0xceaddc = _0x4e0eb4('./field');
        var _0x36ab9b = _0x4e0eb4("./mapfield");
        var _0x19e588 = _0x4e0eb4('./service');
        var _0x1323de = _0x4e0eb4("./message");
        var _0x4c47c8 = _0x4e0eb4("./reader");
        var _0x46aefa = _0x4e0eb4("./writer");
        var _0x4bd994 = _0x4e0eb4("./util");
        var _0x5168c4 = _0x4e0eb4("./encoder");
        var _0x15043b = _0x4e0eb4("./decoder");
        var _0x1947b4 = _0x4e0eb4('./verifier');
        var _0x25daa1 = _0x4e0eb4("./converter");
        var _0x1c82e2 = _0x4e0eb4('./wrappers');
        function _0xefa4d4(_0x699a63, _0x528497) {
          _0x5e45ab.call(this, _0x699a63, _0x528497);
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
        function _0x36c4b3(_0x1beac2) {
          _0x1beac2._fieldsById = _0x1beac2._fieldsArray = _0x1beac2._oneofsArray = null;
          delete _0x1beac2.encode;
          delete _0x1beac2.decode;
          delete _0x1beac2.verify;
          return _0x1beac2;
        }
        Object.defineProperties(_0xefa4d4.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x1a8244 = Object.keys(this.fields);
              for (var _0x406f22 = 0x0; _0x406f22 < _0x1a8244.length; ++_0x406f22) {
                var _0x4942b4 = this.fields[_0x1a8244[_0x406f22]];
                var _0x4bae36 = _0x4942b4.id;
                if (this._fieldsById[_0x4bae36]) {
                  throw Error("duplicate id " + _0x4bae36 + " in " + this);
                }
                this._fieldsById[_0x4bae36] = _0x4942b4;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x4bd994.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x4bd994.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0xefa4d4.generateConstructor(this)());
            },
            'set': function (_0x26e89f) {
              var _0x2152ca = _0x26e89f.prototype;
              if (!(_0x2152ca instanceof _0x1323de)) {
                (_0x26e89f.prototype = new _0x1323de()).constructor = _0x26e89f;
                _0x4bd994.merge(_0x26e89f.prototype, _0x2152ca);
              }
              _0x26e89f.$type = _0x26e89f.prototype.$type = this;
              _0x4bd994.merge(_0x26e89f, _0x1323de, true);
              this._ctor = _0x26e89f;
              for (var _0x5e8bc1 = 0x0; _0x5e8bc1 < this.fieldsArray.length; ++_0x5e8bc1) {
                this._fieldsArray[_0x5e8bc1].resolve();
              }
              var _0x15503b = {};
              for (_0x5e8bc1 = 0x0; _0x5e8bc1 < this.oneofsArray.length; ++_0x5e8bc1) {
                _0x15503b[this._oneofsArray[_0x5e8bc1].resolve().name] = {
                  'get': _0x4bd994.oneOfGetter(this._oneofsArray[_0x5e8bc1].oneof),
                  'set': _0x4bd994.oneOfSetter(this._oneofsArray[_0x5e8bc1].oneof)
                };
              }
              if (_0x5e8bc1) {
                Object.defineProperties(_0x26e89f.prototype, _0x15503b);
              }
            }
          }
        });
        _0xefa4d4.generateConstructor = function (_0x58c790) {
          var _0x3153ea;
          var _0xb973c = _0x4bd994.codegen(['p'], _0x58c790.name);
          for (var _0x133fce = 0x0; _0x133fce < _0x58c790.fieldsArray.length; ++_0x133fce) {
            if ((_0x3153ea = _0x58c790._fieldsArray[_0x133fce]).map) {
              _0xb973c("this%s={}", _0x4bd994.safeProp(_0x3153ea.name));
            } else if (_0x3153ea.repeated) {
              _0xb973c('this%s=[]', _0x4bd994.safeProp(_0x3153ea.name));
            }
          }
          return _0xb973c("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0xefa4d4.fromJSON = function (_0x3588d9, _0xfb3b71) {
          var _0x5cf93a = new _0xefa4d4(_0x3588d9, _0xfb3b71.options);
          _0x5cf93a.extensions = _0xfb3b71.extensions;
          _0x5cf93a.reserved = _0xfb3b71.reserved;
          var _0x1d9402 = Object.keys(_0xfb3b71.fields);
          for (var _0x3d831d = 0x0; _0x3d831d < _0x1d9402.length; ++_0x3d831d) {
            _0x5cf93a.add((undefined !== _0xfb3b71.fields[_0x1d9402[_0x3d831d]].keyType ? _0x36ab9b.fromJSON : _0xceaddc.fromJSON)(_0x1d9402[_0x3d831d], _0xfb3b71.fields[_0x1d9402[_0x3d831d]]));
          }
          if (_0xfb3b71.oneofs) {
            _0x1d9402 = Object.keys(_0xfb3b71.oneofs);
            for (_0x3d831d = 0x0; _0x3d831d < _0x1d9402.length; ++_0x3d831d) {
              _0x5cf93a.add(_0x2c8eaf.fromJSON(_0x1d9402[_0x3d831d], _0xfb3b71.oneofs[_0x1d9402[_0x3d831d]]));
            }
          }
          if (_0xfb3b71.nested) {
            _0x1d9402 = Object.keys(_0xfb3b71.nested);
            for (_0x3d831d = 0x0; _0x3d831d < _0x1d9402.length; ++_0x3d831d) {
              var _0x317cfc = _0xfb3b71.nested[_0x1d9402[_0x3d831d]];
              _0x5cf93a.add((undefined !== _0x317cfc.id ? _0xceaddc.fromJSON : undefined !== _0x317cfc.fields ? _0xefa4d4.fromJSON : undefined !== _0x317cfc.values ? _0x1d1d57.fromJSON : undefined !== _0x317cfc.methods ? _0x19e588.fromJSON : _0x5e45ab.fromJSON)(_0x1d9402[_0x3d831d], _0x317cfc));
            }
          }
          if (_0xfb3b71.extensions && _0xfb3b71.extensions.length) {
            _0x5cf93a.extensions = _0xfb3b71.extensions;
          }
          if (_0xfb3b71.reserved && _0xfb3b71.reserved.length) {
            _0x5cf93a.reserved = _0xfb3b71.reserved;
          }
          if (_0xfb3b71.group) {
            _0x5cf93a.group = true;
          }
          if (_0xfb3b71.comment) {
            _0x5cf93a.comment = _0xfb3b71.comment;
          }
          return _0x5cf93a;
        };
        _0xefa4d4.prototype.toJSON = function (_0x22ba0e) {
          var _0x4f446f = _0x5e45ab.prototype.toJSON.call(this, _0x22ba0e);
          var _0x2ed121 = !!_0x22ba0e && Boolean(_0x22ba0e.keepComments);
          return _0x4bd994.toObject(["options", _0x4f446f && _0x4f446f.options || undefined, "oneofs", _0x5e45ab.arrayToJSON(this.oneofsArray, _0x22ba0e), "fields", _0x5e45ab.arrayToJSON(this.fieldsArray.filter(function (_0x3f0ee7) {
            return !_0x3f0ee7.declaringField;
          }), _0x22ba0e) || {}, 'extensions', this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", _0x4f446f && _0x4f446f.nested || undefined, "comment", _0x2ed121 ? this.comment : undefined]);
        };
        _0xefa4d4.prototype.resolveAll = function () {
          var _0x273e88 = this.fieldsArray;
          for (var _0x5e276c = 0x0; _0x5e276c < _0x273e88.length;) {
            _0x273e88[_0x5e276c++].resolve();
          }
          var _0x5917bc = this.oneofsArray;
          for (_0x5e276c = 0x0; _0x5e276c < _0x5917bc.length;) {
            _0x5917bc[_0x5e276c++].resolve();
          }
          return _0x5e45ab.prototype.resolveAll.call(this);
        };
        _0xefa4d4.prototype.get = function (_0x3318e4) {
          return this.fields[_0x3318e4] || this.oneofs && this.oneofs[_0x3318e4] || this.nested && this.nested[_0x3318e4] || null;
        };
        _0xefa4d4.prototype.add = function (_0x3b76b0) {
          if (this.get(_0x3b76b0.name)) {
            throw Error("duplicate name '" + _0x3b76b0.name + "' in " + this);
          }
          if (_0x3b76b0 instanceof _0xceaddc && undefined === _0x3b76b0.extend) {
            if (this._fieldsById ? this._fieldsById[_0x3b76b0.id] : this.fieldsById[_0x3b76b0.id]) {
              throw Error("duplicate id " + _0x3b76b0.id + " in " + this);
            }
            if (this.isReservedId(_0x3b76b0.id)) {
              throw Error("id " + _0x3b76b0.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x3b76b0.name)) {
              throw Error("name '" + _0x3b76b0.name + "' is reserved in " + this);
            }
            if (_0x3b76b0.parent) {
              _0x3b76b0.parent.remove(_0x3b76b0);
            }
            this.fields[_0x3b76b0.name] = _0x3b76b0;
            _0x3b76b0.message = this;
            _0x3b76b0.onAdd(this);
            return _0x36c4b3(this);
          }
          return _0x3b76b0 instanceof _0x2c8eaf ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x3b76b0.name] = _0x3b76b0, _0x3b76b0.onAdd(this), _0x36c4b3(this)) : _0x5e45ab.prototype.add.call(this, _0x3b76b0);
        };
        _0xefa4d4.prototype.remove = function (_0x442692) {
          if (_0x442692 instanceof _0xceaddc && undefined === _0x442692.extend) {
            if (!this.fields || this.fields[_0x442692.name] !== _0x442692) {
              throw Error(_0x442692 + " is not a member of " + this);
            }
            delete this.fields[_0x442692.name];
            _0x442692.parent = null;
            _0x442692.onRemove(this);
            return _0x36c4b3(this);
          }
          if (_0x442692 instanceof _0x2c8eaf) {
            if (!this.oneofs || this.oneofs[_0x442692.name] !== _0x442692) {
              throw Error(_0x442692 + " is not a member of " + this);
            }
            delete this.oneofs[_0x442692.name];
            _0x442692.parent = null;
            _0x442692.onRemove(this);
            return _0x36c4b3(this);
          }
          return _0x5e45ab.prototype.remove.call(this, _0x442692);
        };
        _0xefa4d4.prototype.isReservedId = function (_0x45519e) {
          return _0x5e45ab.isReservedId(this.reserved, _0x45519e);
        };
        _0xefa4d4.prototype.isReservedName = function (_0x356b2d) {
          return _0x5e45ab.isReservedName(this.reserved, _0x356b2d);
        };
        _0xefa4d4.prototype.create = function (_0x3f35b2) {
          return new this.ctor(_0x3f35b2);
        };
        _0xefa4d4.prototype.setup = function () {
          var _0x503b7d = this.fullName;
          var _0x47a5e9 = [];
          for (var _0x260544 = 0x0; _0x260544 < this.fieldsArray.length; ++_0x260544) {
            _0x47a5e9.push(this._fieldsArray[_0x260544].resolve().resolvedType);
          }
          this.encode = _0x5168c4(this)({
            'Writer': _0x46aefa,
            'types': _0x47a5e9,
            'util': _0x4bd994
          });
          this.decode = _0x15043b(this)({
            'Reader': _0x4c47c8,
            'types': _0x47a5e9,
            'util': _0x4bd994
          });
          this.verify = _0x1947b4(this)({
            'types': _0x47a5e9,
            'util': _0x4bd994
          });
          this.fromObject = _0x25daa1.fromObject(this)({
            'types': _0x47a5e9,
            'util': _0x4bd994
          });
          this.toObject = _0x25daa1.toObject(this)({
            'types': _0x47a5e9,
            'util': _0x4bd994
          });
          var _0x3b477f = _0x1c82e2[_0x503b7d];
          if (_0x3b477f) {
            var _0x4d09f5 = Object.create(this);
            _0x4d09f5.fromObject = this.fromObject;
            this.fromObject = _0x3b477f.fromObject.bind(_0x4d09f5);
            _0x4d09f5.toObject = this.toObject;
            this.toObject = _0x3b477f.toObject.bind(_0x4d09f5);
          }
          return this;
        };
        _0xefa4d4.prototype.encode = function (_0x39774c, _0x396d16) {
          return this.setup().encode(_0x39774c, _0x396d16);
        };
        _0xefa4d4.prototype.encodeDelimited = function (_0x146d3d, _0x490dbc) {
          return this.encode(_0x146d3d, _0x490dbc && _0x490dbc.len ? _0x490dbc.fork() : _0x490dbc).ldelim();
        };
        _0xefa4d4.prototype.decode = function (_0x4ad130, _0x1f996d) {
          return this.setup().decode(_0x4ad130, _0x1f996d);
        };
        _0xefa4d4.prototype.decodeDelimited = function (_0x13adc4) {
          if (!(_0x13adc4 instanceof _0x4c47c8)) {
            _0x13adc4 = _0x4c47c8.create(_0x13adc4);
          }
          return this.decode(_0x13adc4, _0x13adc4.uint32());
        };
        _0xefa4d4.prototype.verify = function (_0x47ab84) {
          return this.setup().verify(_0x47ab84);
        };
        _0xefa4d4.prototype.fromObject = function (_0x9c813a) {
          return this.setup().fromObject(_0x9c813a);
        };
        _0xefa4d4.prototype.toObject = function (_0x217fe6, _0x3225d2) {
          return this.setup().toObject(_0x217fe6, _0x3225d2);
        };
        _0xefa4d4.d = function (_0xa6af05) {
          return function (_0x3e1f18) {
            _0x4bd994.decorateType(_0x3e1f18, _0xa6af05);
          };
        };
        _0x3464e0.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './field': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './mapfield': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './message': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './reader': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x2e2d28, _0x4d90b0, _0xcd382, _0x2f9118, _0x15ac09) {
        _0xcd382.exports = _0x2bece9;
        var _0x5bedd8 = _0x4d90b0('./namespace');
        ((_0x2bece9.prototype = Object.create(_0x5bedd8.prototype)).constructor = _0x2bece9).className = "Root";
        var _0x4b8775;
        var _0x7e5fcc;
        var _0x20ac2c;
        var _0x3cfa70 = _0x4d90b0("./field");
        var _0x4fb349 = _0x4d90b0("./enum");
        var _0x3a9524 = _0x4d90b0("./oneof");
        var _0x4af4cc = _0x4d90b0("./util");
        function _0x2bece9(_0x37c4f2) {
          _0x5bedd8.call(this, '', _0x37c4f2);
          this.deferred = [];
          this.files = [];
        }
        function _0x576cc6() {}
        _0x2bece9.fromJSON = function (_0x12e943, _0x2d2f61) {
          if (!_0x2d2f61) {
            _0x2d2f61 = new _0x2bece9();
          }
          if (_0x12e943.options) {
            _0x2d2f61.setOptions(_0x12e943.options);
          }
          return _0x2d2f61.addJSON(_0x12e943.nested);
        };
        _0x2bece9.prototype.resolvePath = _0x4af4cc.path.resolve;
        _0x2bece9.prototype.fetch = _0x4af4cc.fetch;
        _0x2bece9.prototype.load = function _0x5ecf9e(_0x35c669, _0x1adead, _0x52ed3b) {
          if ('function' == typeof _0x1adead) {
            _0x52ed3b = _0x1adead;
            _0x1adead = undefined;
          }
          var _0x4ac016 = this;
          if (!_0x52ed3b) {
            return _0x4af4cc.asPromise(_0x5ecf9e, _0x4ac016, _0x35c669, _0x1adead);
          }
          var _0xcac327 = _0x52ed3b === _0x576cc6;
          function _0x261752(_0x5c50a0, _0x390adf) {
            if (_0x52ed3b) {
              var _0x3120de = _0x52ed3b;
              _0x52ed3b = null;
              if (_0xcac327) {
                throw _0x5c50a0;
              }
              _0x3120de(_0x5c50a0, _0x390adf);
            }
          }
          function _0x24869b(_0x40f3b2) {
            var _0x119fc0 = _0x40f3b2.lastIndexOf("google/protobuf/");
            if (_0x119fc0 > -0x1) {
              var _0x528e56 = _0x40f3b2.substring(_0x119fc0);
              if (_0x528e56 in _0x20ac2c) {
                return _0x528e56;
              }
            }
            return null;
          }
          function _0x3dce81(_0x574b26, _0x17213b) {
            try {
              if (_0x4af4cc.isString(_0x17213b) && '{' === _0x17213b.charAt(0x0)) {
                _0x17213b = JSON.parse(_0x17213b);
              }
              if (_0x4af4cc.isString(_0x17213b)) {
                _0x7e5fcc.filename = _0x574b26;
                var _0x5c2b44;
                var _0x1c8300 = _0x7e5fcc(_0x17213b, _0x4ac016, _0x1adead);
                var _0x1794a5 = 0x0;
                if (_0x1c8300.imports) {
                  for (; _0x1794a5 < _0x1c8300.imports.length; ++_0x1794a5) {
                    if (_0x5c2b44 = _0x24869b(_0x1c8300.imports[_0x1794a5]) || _0x4ac016.resolvePath(_0x574b26, _0x1c8300.imports[_0x1794a5])) {
                      _0x372254(_0x5c2b44);
                    }
                  }
                }
                if (_0x1c8300.weakImports) {
                  for (_0x1794a5 = 0x0; _0x1794a5 < _0x1c8300.weakImports.length; ++_0x1794a5) {
                    if (_0x5c2b44 = _0x24869b(_0x1c8300.weakImports[_0x1794a5]) || _0x4ac016.resolvePath(_0x574b26, _0x1c8300.weakImports[_0x1794a5])) {
                      _0x372254(_0x5c2b44, true);
                    }
                  }
                }
              } else {
                _0x4ac016.setOptions(_0x17213b.options).addJSON(_0x17213b.nested);
              }
            } catch (_0xe224e8) {
              _0x261752(_0xe224e8);
            }
            if (!(_0xcac327 || _0x27ec42)) {
              _0x261752(null, _0x4ac016);
            }
          }
          function _0x372254(_0x46bafd, _0x51d6e0) {
            if (!(_0x4ac016.files.indexOf(_0x46bafd) > -0x1)) {
              _0x4ac016.files.push(_0x46bafd);
              if (_0x46bafd in _0x20ac2c) {
                if (_0xcac327) {
                  _0x3dce81(_0x46bafd, _0x20ac2c[_0x46bafd]);
                } else {
                  ++_0x27ec42;
                  setTimeout(function () {
                    --_0x27ec42;
                    _0x3dce81(_0x46bafd, _0x20ac2c[_0x46bafd]);
                  });
                }
              } else {
                if (_0xcac327) {
                  var _0x1a7f12;
                  try {
                    _0x1a7f12 = _0x4af4cc.fs.readFileSync(_0x46bafd).toString("utf8");
                  } catch (_0x125092) {
                    return void (_0x51d6e0 || _0x261752(_0x125092));
                  }
                  _0x3dce81(_0x46bafd, _0x1a7f12);
                } else {
                  ++_0x27ec42;
                  _0x4ac016.fetch(_0x46bafd, function (_0x433233, _0x537130) {
                    --_0x27ec42;
                    if (_0x52ed3b) {
                      if (_0x433233) {
                        if (_0x51d6e0) {
                          if (!_0x27ec42) {
                            _0x261752(null, _0x4ac016);
                          }
                        } else {
                          _0x261752(_0x433233);
                        }
                      } else {
                        _0x3dce81(_0x46bafd, _0x537130);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x27ec42 = 0x0;
          if (_0x4af4cc.isString(_0x35c669)) {
            _0x35c669 = [_0x35c669];
          }
          var _0x309c50;
          for (var _0x9c2f4 = 0x0; _0x9c2f4 < _0x35c669.length; ++_0x9c2f4) {
            if (_0x309c50 = _0x4ac016.resolvePath('', _0x35c669[_0x9c2f4])) {
              _0x372254(_0x309c50);
            }
          }
          if (_0xcac327) {
            return _0x4ac016;
          }
          if (!_0x27ec42) {
            _0x261752(null, _0x4ac016);
          }
        };
        _0x2bece9.prototype.loadSync = function (_0x13d017, _0x118e73) {
          if (!_0x4af4cc.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x13d017, _0x118e73, _0x576cc6);
        };
        _0x2bece9.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x243b26) {
              return "'extend " + _0x243b26.extend + "' in " + _0x243b26.parent.fullName;
            }).join(", "));
          }
          return _0x5bedd8.prototype.resolveAll.call(this);
        };
        var _0x3cf222 = /^[A-Z]/;
        function _0x1ea734(_0x52478c, _0x6fa12a) {
          var _0xa7710d = _0x6fa12a.parent.lookup(_0x6fa12a.extend);
          if (_0xa7710d) {
            var _0x2aaadd = new _0x3cfa70(_0x6fa12a.fullName, _0x6fa12a.id, _0x6fa12a.type, _0x6fa12a.rule, undefined, _0x6fa12a.options);
            _0x2aaadd.declaringField = _0x6fa12a;
            _0x6fa12a.extensionField = _0x2aaadd;
            _0xa7710d.add(_0x2aaadd);
            return true;
          }
          return false;
        }
        _0x2bece9.prototype._handleAdd = function (_0x1a44e4) {
          if (_0x1a44e4 instanceof _0x3cfa70) {
            if (!(undefined === _0x1a44e4.extend || _0x1a44e4.extensionField || _0x1ea734(0x0, _0x1a44e4))) {
              this.deferred.push(_0x1a44e4);
            }
          } else {
            if (_0x1a44e4 instanceof _0x4fb349) {
              if (_0x3cf222.test(_0x1a44e4.name)) {
                _0x1a44e4.parent[_0x1a44e4.name] = _0x1a44e4.values;
              }
            } else {
              if (!(_0x1a44e4 instanceof _0x3a9524)) {
                if (_0x1a44e4 instanceof _0x4b8775) {
                  for (var _0x3e72da = 0x0; _0x3e72da < this.deferred.length;) {
                    if (_0x1ea734(0x0, this.deferred[_0x3e72da])) {
                      this.deferred.splice(_0x3e72da, 0x1);
                    } else {
                      ++_0x3e72da;
                    }
                  }
                }
                for (var _0x3cff37 = 0x0; _0x3cff37 < _0x1a44e4.nestedArray.length; ++_0x3cff37) {
                  this._handleAdd(_0x1a44e4._nestedArray[_0x3cff37]);
                }
                if (_0x3cf222.test(_0x1a44e4.name)) {
                  _0x1a44e4.parent[_0x1a44e4.name] = _0x1a44e4;
                }
              }
            }
          }
        };
        _0x2bece9.prototype._handleRemove = function (_0x84ce80) {
          if (_0x84ce80 instanceof _0x3cfa70) {
            if (undefined !== _0x84ce80.extend) {
              if (_0x84ce80.extensionField) {
                _0x84ce80.extensionField.parent.remove(_0x84ce80.extensionField);
                _0x84ce80.extensionField = null;
              } else {
                var _0x3ccbdf = this.deferred.indexOf(_0x84ce80);
                if (_0x3ccbdf > -0x1) {
                  this.deferred.splice(_0x3ccbdf, 0x1);
                }
              }
            }
          } else {
            if (_0x84ce80 instanceof _0x4fb349) {
              if (_0x3cf222.test(_0x84ce80.name)) {
                delete _0x84ce80.parent[_0x84ce80.name];
              }
            } else {
              if (_0x84ce80 instanceof _0x5bedd8) {
                for (var _0x3b73f4 = 0x0; _0x3b73f4 < _0x84ce80.nestedArray.length; ++_0x3b73f4) {
                  this._handleRemove(_0x84ce80._nestedArray[_0x3b73f4]);
                }
                if (_0x3cf222.test(_0x84ce80.name)) {
                  delete _0x84ce80.parent[_0x84ce80.name];
                }
              }
            }
          }
        };
        _0x2bece9._configure = function (_0x5d9e98, _0x44046e, _0x485a14) {
          _0x4b8775 = _0x5d9e98;
          _0x7e5fcc = _0x44046e;
          _0x20ac2c = _0x485a14;
        };
        _0xcd382.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x208a27, _0x13f169, _0x522926, _0x177c5a, _0x262f8e) {
        var _0x516648;
        var _0x574df7;
        var _0x555a15 = _0x522926.exports = _0x13f169('./util/minimal');
        var _0x498ba3 = _0x13f169('./roots');
        _0x555a15.codegen = _0x13f169("@protobufjs/codegen");
        _0x555a15.fetch = _0x13f169("@protobufjs/fetch");
        _0x555a15.path = _0x13f169("@protobufjs/path");
        _0x555a15.fs = _0x555a15.inquire('fs');
        _0x555a15.toArray = function (_0x53c277) {
          if (_0x53c277) {
            var _0x3f92ce = Object.keys(_0x53c277);
            var _0x27017d = new Array(_0x3f92ce.length);
            for (var _0x3c33dc = 0x0; _0x3c33dc < _0x3f92ce.length;) {
              _0x27017d[_0x3c33dc] = _0x53c277[_0x3f92ce[_0x3c33dc++]];
            }
            return _0x27017d;
          }
          return [];
        };
        _0x555a15.toObject = function (_0xf07318) {
          var _0x3c7aa1 = {};
          for (var _0x25632b = 0x0; _0x25632b < _0xf07318.length;) {
            var _0x3e6583 = _0xf07318[_0x25632b++];
            var _0xc81c80 = _0xf07318[_0x25632b++];
            if (undefined !== _0xc81c80) {
              _0x3c7aa1[_0x3e6583] = _0xc81c80;
            }
          }
          return _0x3c7aa1;
        };
        var _0x24210d = /\\/g;
        var _0x123a0b = /"/g;
        _0x555a15.isReserved = function (_0x19b0e6) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x19b0e6);
        };
        _0x555a15.safeProp = function (_0x31b31b) {
          return !/^[$\w_]+$/.test(_0x31b31b) || _0x555a15.isReserved(_0x31b31b) ? "[\"" + _0x31b31b.replace(_0x24210d, "\\\\").replace(_0x123a0b, "\\\"") + "\"]" : '.' + _0x31b31b;
        };
        _0x555a15.ucFirst = function (_0x2c62e6) {
          return _0x2c62e6.charAt(0x0).toUpperCase() + _0x2c62e6.substring(0x1);
        };
        var _0x56d919 = /_([a-z])/g;
        _0x555a15.camelCase = function (_0x44267e) {
          return _0x44267e.substring(0x0, 0x1) + _0x44267e.substring(0x1).replace(_0x56d919, function (_0xf2ab5f, _0x18c896) {
            return _0x18c896.toUpperCase();
          });
        };
        _0x555a15.compareFieldsById = function (_0x2cacae, _0xf403fc) {
          return _0x2cacae.id - _0xf403fc.id;
        };
        _0x555a15.decorateType = function (_0x1a5129, _0x29cc93) {
          if (_0x1a5129.$type) {
            if (_0x29cc93 && _0x1a5129.$type.name !== _0x29cc93) {
              _0x555a15.decorateRoot.remove(_0x1a5129.$type);
              _0x1a5129.$type.name = _0x29cc93;
              _0x555a15.decorateRoot.add(_0x1a5129.$type);
            }
            return _0x1a5129.$type;
          }
          if (!_0x516648) {
            _0x516648 = _0x13f169("./type");
          }
          var _0x255d27 = new _0x516648(_0x29cc93 || _0x1a5129.name);
          _0x555a15.decorateRoot.add(_0x255d27);
          _0x255d27.ctor = _0x1a5129;
          Object.defineProperty(_0x1a5129, "$type", {
            'value': _0x255d27,
            'enumerable': false
          });
          Object.defineProperty(_0x1a5129.prototype, "$type", {
            'value': _0x255d27,
            'enumerable': false
          });
          return _0x255d27;
        };
        var _0x7d8ed5 = 0x0;
        _0x555a15.decorateEnum = function (_0x290024) {
          if (_0x290024.$type) {
            return _0x290024.$type;
          }
          if (!_0x574df7) {
            _0x574df7 = _0x13f169('./enum');
          }
          var _0x1af8d0 = new _0x574df7("Enum" + _0x7d8ed5++, _0x290024);
          _0x555a15.decorateRoot.add(_0x1af8d0);
          Object.defineProperty(_0x290024, "$type", {
            'value': _0x1af8d0,
            'enumerable': false
          });
          return _0x1af8d0;
        };
        _0x555a15.setProperty = function (_0x2dad24, _0x545100, _0x42ab62) {
          if ("object" != typeof _0x2dad24) {
            throw TypeError("dst must be an object");
          }
          if (!_0x545100) {
            throw TypeError("path must be specified");
          }
          return function _0x2941b2(_0x5a0679, _0x2ff42e, _0x27e2e8) {
            var _0x19492d = _0x2ff42e.shift();
            if (_0x2ff42e.length > 0x0) {
              _0x5a0679[_0x19492d] = _0x2941b2(_0x5a0679[_0x19492d] || {}, _0x2ff42e, _0x27e2e8);
            } else {
              var _0x337332 = _0x5a0679[_0x19492d];
              if (_0x337332) {
                _0x27e2e8 = [].concat(_0x337332).concat(_0x27e2e8);
              }
              _0x5a0679[_0x19492d] = _0x27e2e8;
            }
            return _0x5a0679;
          }(_0x2dad24, _0x545100 = _0x545100.split('.'), _0x42ab62);
        };
        Object.defineProperty(_0x555a15, "decorateRoot", {
          'get': function () {
            return _0x498ba3.decorated || (_0x498ba3.decorated = new (_0x13f169('./root'))());
          }
        });
        _0x522926.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          '@protobufjs/codegen': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js',
          '@protobufjs/path': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          './type': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (_0x5add1a, _0x3b5716, _0x4266d2, _0x2b9a81, _0x5728b7) {
        _0x4266d2.exports = _0x1ab755;
        _0x1ab755.className = 'ReflectionObject';
        var _0x1c53ba;
        var _0x3a39e7 = _0x3b5716("./util");
        function _0x1ab755(_0x1812a8, _0x1b88b9) {
          if (!_0x3a39e7.isString(_0x1812a8)) {
            throw TypeError("name must be a string");
          }
          if (_0x1b88b9 && !_0x3a39e7.isObject(_0x1b88b9)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x1b88b9;
          this.parsedOptions = null;
          this.name = _0x1812a8;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x1ab755.prototype, {
          'root': {
            'get': function () {
              for (var _0x140177 = this; null !== _0x140177.parent;) {
                _0x140177 = _0x140177.parent;
              }
              return _0x140177;
            }
          },
          'fullName': {
            'get': function () {
              var _0x1f5435 = [this.name];
              for (var _0x19e8e7 = this.parent; _0x19e8e7;) {
                _0x1f5435.unshift(_0x19e8e7.name);
                _0x19e8e7 = _0x19e8e7.parent;
              }
              return _0x1f5435.join('.');
            }
          }
        });
        _0x1ab755.prototype.toJSON = function () {
          throw Error();
        };
        _0x1ab755.prototype.onAdd = function (_0x395944) {
          if (this.parent && this.parent !== _0x395944) {
            this.parent.remove(this);
          }
          this.parent = _0x395944;
          this.resolved = false;
          var _0x3f3b91 = _0x395944.root;
          if (_0x3f3b91 instanceof _0x1c53ba) {
            _0x3f3b91._handleAdd(this);
          }
        };
        _0x1ab755.prototype.onRemove = function (_0x267555) {
          var _0x22ba98 = _0x267555.root;
          if (_0x22ba98 instanceof _0x1c53ba) {
            _0x22ba98._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x1ab755.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x1c53ba) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x1ab755.prototype.getOption = function (_0x17081d) {
          if (this.options) {
            return this.options[_0x17081d];
          }
        };
        _0x1ab755.prototype.setOption = function (_0x40ea91, _0xd238f6, _0x4e0cd0) {
          if (!(_0x4e0cd0 && this.options && undefined !== this.options[_0x40ea91])) {
            (this.options || (this.options = {}))[_0x40ea91] = _0xd238f6;
          }
          return this;
        };
        _0x1ab755.prototype.setParsedOption = function (_0x3ebd26, _0x58b011, _0x507423) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x333047 = this.parsedOptions;
          if (_0x507423) {
            var _0x52c095 = _0x333047.find(function (_0x5012fe) {
              return Object.prototype.hasOwnProperty.call(_0x5012fe, _0x3ebd26);
            });
            if (_0x52c095) {
              var _0x8caced = _0x52c095[_0x3ebd26];
              _0x3a39e7.setProperty(_0x8caced, _0x507423, _0x58b011);
            } else {
              (_0x52c095 = {})[_0x3ebd26] = _0x3a39e7.setProperty({}, _0x507423, _0x58b011);
              _0x333047.push(_0x52c095);
            }
          } else {
            var _0x14f227 = {
              _0x3ebd26: _0x58b011
            };
            _0x333047.push(_0x14f227);
          }
          return this;
        };
        _0x1ab755.prototype.setOptions = function (_0x144ecf, _0x37893c) {
          if (_0x144ecf) {
            var _0x325638 = Object.keys(_0x144ecf);
            for (var _0x5ac727 = 0x0; _0x5ac727 < _0x325638.length; ++_0x5ac727) {
              this.setOption(_0x325638[_0x5ac727], _0x144ecf[_0x325638[_0x5ac727]], _0x37893c);
            }
          }
          return this;
        };
        _0x1ab755.prototype.toString = function () {
          var _0x2f0158 = this.constructor.className;
          var _0x20e42c = this.fullName;
          return _0x20e42c.length ? _0x2f0158 + " " + _0x20e42c : _0x2f0158;
        };
        _0x1ab755._configure = function (_0x483de1) {
          _0x1c53ba = _0x483de1;
        };
        _0x4266d2.exports;
      }, function () {
        return {
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0x5489d8, _0x75ecf, _0x488a2e, _0x2606bb, _0x40d88b) {
        _0x488a2e.exports = _0x4424e5;
        var _0x195ef9 = _0x75ecf("./object");
        ((_0x4424e5.prototype = Object.create(_0x195ef9.prototype)).constructor = _0x4424e5).className = "Enum";
        var _0x139bdb = _0x75ecf("./namespace");
        var _0x2c9004 = _0x75ecf("./util");
        function _0x4424e5(_0x5835e7, _0x17d2f1, _0x4bdb3c, _0x210dcd, _0x5081b9) {
          _0x195ef9.call(this, _0x5835e7, _0x4bdb3c);
          if (_0x17d2f1 && "object" != typeof _0x17d2f1) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x210dcd;
          this.comments = _0x5081b9 || {};
          this.reserved = undefined;
          if (_0x17d2f1) {
            var _0x3c1b4c = Object.keys(_0x17d2f1);
            for (var _0x119ec7 = 0x0; _0x119ec7 < _0x3c1b4c.length; ++_0x119ec7) {
              if ("number" == typeof _0x17d2f1[_0x3c1b4c[_0x119ec7]]) {
                this.valuesById[this.values[_0x3c1b4c[_0x119ec7]] = _0x17d2f1[_0x3c1b4c[_0x119ec7]]] = _0x3c1b4c[_0x119ec7];
              }
            }
          }
        }
        _0x4424e5.fromJSON = function (_0x39aa4b, _0x38321a) {
          var _0x16bffc = new _0x4424e5(_0x39aa4b, _0x38321a.values, _0x38321a.options, _0x38321a.comment, _0x38321a.comments);
          _0x16bffc.reserved = _0x38321a.reserved;
          return _0x16bffc;
        };
        _0x4424e5.prototype.toJSON = function (_0x298f49) {
          var _0x2e0dbf = !!_0x298f49 && Boolean(_0x298f49.keepComments);
          return _0x2c9004.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, 'comment', _0x2e0dbf ? this.comment : undefined, "comments", _0x2e0dbf ? this.comments : undefined]);
        };
        _0x4424e5.prototype.add = function (_0x24ef8e, _0x2ab4f9, _0x45cf28) {
          if (!_0x2c9004.isString(_0x24ef8e)) {
            throw TypeError("name must be a string");
          }
          if (!_0x2c9004.isInteger(_0x2ab4f9)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x24ef8e]) {
            throw Error("duplicate name '" + _0x24ef8e + "' in " + this);
          }
          if (this.isReservedId(_0x2ab4f9)) {
            throw Error("id " + _0x2ab4f9 + " is reserved in " + this);
          }
          if (this.isReservedName(_0x24ef8e)) {
            throw Error("name '" + _0x24ef8e + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x2ab4f9]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x2ab4f9 + " in " + this);
            }
            this.values[_0x24ef8e] = _0x2ab4f9;
          } else {
            this.valuesById[this.values[_0x24ef8e] = _0x2ab4f9] = _0x24ef8e;
          }
          this.comments[_0x24ef8e] = _0x45cf28 || null;
          return this;
        };
        _0x4424e5.prototype.remove = function (_0x5ba53d) {
          if (!_0x2c9004.isString(_0x5ba53d)) {
            throw TypeError("name must be a string");
          }
          var _0x4c229c = this.values[_0x5ba53d];
          if (null == _0x4c229c) {
            throw Error("name '" + _0x5ba53d + "' does not exist in " + this);
          }
          delete this.valuesById[_0x4c229c];
          delete this.values[_0x5ba53d];
          delete this.comments[_0x5ba53d];
          return this;
        };
        _0x4424e5.prototype.isReservedId = function (_0x4062ef) {
          return _0x139bdb.isReservedId(this.reserved, _0x4062ef);
        };
        _0x4424e5.prototype.isReservedName = function (_0x531c19) {
          return _0x139bdb.isReservedName(this.reserved, _0x531c19);
        };
        _0x488a2e.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (_0x2a0244, _0x2744ff, _0x38a8af, _0x173a0b, _0x3ab223) {
        _0x38a8af.exports = function (_0x9c4617) {
          var _0x143bd7;
          var _0x58f4d8 = _0x5f28f9.codegen(['m', 'w'], _0x9c4617.name + "$encode")("if(!w)")('w=Writer.create()');
          var _0x12bea4 = _0x9c4617.fieldsArray.slice().sort(_0x5f28f9.compareFieldsById);
          for (var _0x2237ce = 0x0; _0x2237ce < _0x12bea4.length; ++_0x2237ce) {
            var _0x1b371d = _0x12bea4[_0x2237ce].resolve();
            var _0xa4ce6 = _0x9c4617._fieldsArray.indexOf(_0x1b371d);
            var _0x1eba4d = _0x1b371d.resolvedType instanceof _0x306455 ? "int32" : _0x1b371d.type;
            var _0x96cb8a = _0x13ab8f.basic[_0x1eba4d];
            _0x143bd7 = 'm' + _0x5f28f9.safeProp(_0x1b371d.name);
            if (_0x1b371d.map) {
              _0x58f4d8("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x143bd7, _0x1b371d.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x143bd7)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0x1b371d.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x13ab8f.mapKey[_0x1b371d.keyType], _0x1b371d.keyType);
              if (undefined === _0x96cb8a) {
                _0x58f4d8('types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()', _0xa4ce6, _0x143bd7);
              } else {
                _0x58f4d8(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x96cb8a, _0x1eba4d, _0x143bd7);
              }
              _0x58f4d8('}')('}');
            } else if (_0x1b371d.repeated) {
              _0x58f4d8("if(%s!=null&&%s.length){", _0x143bd7, _0x143bd7);
              if (_0x1b371d.packed && undefined !== _0x13ab8f.packed[_0x1eba4d]) {
                _0x58f4d8("w.uint32(%i).fork()", (_0x1b371d.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x143bd7)("w.%s(%s[i])", _0x1eba4d, _0x143bd7)("w.ldelim()");
              } else {
                _0x58f4d8("for(var i=0;i<%s.length;++i)", _0x143bd7);
                if (undefined === _0x96cb8a) {
                  if (_0x1b371d.resolvedType.group) {
                    _0x58f4d8("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0xa4ce6, _0x143bd7 + "[i]", (_0x1b371d.id << 0x3 | 0x3) >>> 0x0, (_0x1b371d.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x58f4d8('types[%i].encode(%s,w.uint32(%i).fork()).ldelim()', _0xa4ce6, _0x143bd7 + "[i]", (_0x1b371d.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x58f4d8("w.uint32(%i).%s(%s[i])", (_0x1b371d.id << 0x3 | _0x96cb8a) >>> 0x0, _0x1eba4d, _0x143bd7);
                }
              }
              _0x58f4d8('}');
            } else {
              if (_0x1b371d.optional) {
                _0x58f4d8("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", _0x143bd7, _0x1b371d.name);
              }
              if (undefined === _0x96cb8a) {
                if (_0x1b371d.resolvedType.group) {
                  _0x58f4d8("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0xa4ce6, _0x143bd7, (_0x1b371d.id << 0x3 | 0x3) >>> 0x0, (_0x1b371d.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x58f4d8('types[%i].encode(%s,w.uint32(%i).fork()).ldelim()', _0xa4ce6, _0x143bd7, (_0x1b371d.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x58f4d8("w.uint32(%i).%s(%s)", (_0x1b371d.id << 0x3 | _0x96cb8a) >>> 0x0, _0x1eba4d, _0x143bd7);
              }
            }
          }
          return _0x58f4d8("return w");
        };
        var _0x306455 = _0x2744ff("./enum");
        var _0x13ab8f = _0x2744ff("./types");
        var _0x5f28f9 = _0x2744ff("./util");
        _0x38a8af.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x133ad7, _0x515aa6, _0x3a3a11, _0x17bf6a, _0x238dcc) {
        var _0x120225 = _0x3a3a11.exports = _0x515aa6('./index-minimal');
        _0x120225.build = "light";
        _0x120225.load = function (_0x26208e, _0x468645, _0x56cacb) {
          if ("function" == typeof _0x468645) {
            _0x56cacb = _0x468645;
            _0x468645 = new _0x120225.Root();
          } else if (!_0x468645) {
            _0x468645 = new _0x120225.Root();
          }
          return _0x468645.load(_0x26208e, _0x56cacb);
        };
        _0x120225.loadSync = function (_0x167999, _0x3fff15) {
          if (!_0x3fff15) {
            _0x3fff15 = new _0x120225.Root();
          }
          return _0x3fff15.loadSync(_0x167999);
        };
        _0x120225.encoder = _0x515aa6('./encoder');
        _0x120225.decoder = _0x515aa6("./decoder");
        _0x120225.verifier = _0x515aa6("./verifier");
        _0x120225.converter = _0x515aa6("./converter");
        _0x120225.ReflectionObject = _0x515aa6("./object");
        _0x120225.Namespace = _0x515aa6("./namespace");
        _0x120225.Root = _0x515aa6("./root");
        _0x120225.Enum = _0x515aa6('./enum');
        _0x120225.Type = _0x515aa6("./type");
        _0x120225.Field = _0x515aa6("./field");
        _0x120225.OneOf = _0x515aa6("./oneof");
        _0x120225.MapField = _0x515aa6('./mapfield');
        _0x120225.Service = _0x515aa6('./service');
        _0x120225.Method = _0x515aa6("./method");
        _0x120225.Message = _0x515aa6("./message");
        _0x120225.wrappers = _0x515aa6('./wrappers');
        _0x120225.types = _0x515aa6("./types");
        _0x120225.util = _0x515aa6('./util');
        _0x120225.ReflectionObject._configure(_0x120225.Root);
        _0x120225.Namespace._configure(_0x120225.Type, _0x120225.Service, _0x120225.Enum);
        _0x120225.Root._configure(_0x120225.Type);
        _0x120225.Field._configure(_0x120225.Type);
        _0x3a3a11.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './oneof': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './mapfield': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './message': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './wrappers': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          './types': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0x55d77f, _0x3e30cc, _0x3a81b, _0x12cd67, _0x325177) {
        _0x3a81b.exports = _0x4e8f0a;
        var _0x56e931 = /[\s{}=;:[\],'"()<>]/g;
        var _0x58f74d = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x5c298d = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x154112 = /^ *[*/]+ */;
        var _0x1b7824 = /^\s*\*?\/*/;
        var _0x42159e = /\n/g;
        var _0x24dd52 = /\s/;
        var _0x3bb4ac = /\\(.?)/g;
        var _0x26bbfc = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0xe4fa2e(_0x407024) {
          return _0x407024.replace(_0x3bb4ac, function (_0x40db01, _0x3d8d8a) {
            switch (_0x3d8d8a) {
              case "\\":
              case '':
                return _0x3d8d8a;
              default:
                return _0x26bbfc[_0x3d8d8a] || '';
            }
          });
        }
        function _0x4e8f0a(_0x357cf3, _0x191263) {
          _0x357cf3 = _0x357cf3.toString();
          var _0x1bfaab = 0x0;
          var _0xbc1b4a = _0x357cf3.length;
          var _0x3d8bbf = 0x1;
          var _0x2d9b70 = null;
          var _0x2dc048 = null;
          var _0x3b8042 = 0x0;
          var _0x59f5be = false;
          var _0x2a565f = false;
          var _0x1b832f = [];
          var _0xa0baff = null;
          function _0x1eeda0(_0x594a0d, _0x5a663a, _0x3842d6) {
            _0x2d9b70 = _0x357cf3.charAt(_0x594a0d++);
            _0x3b8042 = _0x3d8bbf;
            _0x59f5be = false;
            _0x2a565f = _0x3842d6;
            var _0x302b35;
            var _0x469b5f = _0x594a0d - (_0x191263 ? 0x2 : 0x3);
            do {
              if (--_0x469b5f < 0x0 || "\n" === (_0x302b35 = _0x357cf3.charAt(_0x469b5f))) {
                _0x59f5be = true;
                break;
              }
            } while (" " === _0x302b35 || "\t" === _0x302b35);
            var _0xa44698 = _0x357cf3.substring(_0x594a0d, _0x5a663a).split(_0x42159e);
            for (var _0x9ba377 = 0x0; _0x9ba377 < _0xa44698.length; ++_0x9ba377) {
              _0xa44698[_0x9ba377] = _0xa44698[_0x9ba377].replace(_0x191263 ? _0x1b7824 : _0x154112, '').trim();
            }
            _0x2dc048 = _0xa44698.join("\n").trim();
          }
          function _0x42da47(_0x10cf4d) {
            var _0x348ca8 = _0x356bae(_0x10cf4d);
            var _0x361d31 = _0x357cf3.substring(_0x10cf4d, _0x348ca8);
            return /^\s*\/{1,2}/.test(_0x361d31);
          }
          function _0x356bae(_0x4f6126) {
            for (var _0x498039 = _0x4f6126; _0x498039 < _0xbc1b4a && "\n" !== _0x357cf3.charAt(_0x498039);) {
              _0x498039++;
            }
            return _0x498039;
          }
          function _0x4e6356() {
            if (_0x1b832f.length > 0x0) {
              return _0x1b832f.shift();
            }
            if (_0xa0baff) {
              return function () {
                var _0x3d16f6 = "'" === _0xa0baff ? _0x5c298d : _0x58f74d;
                _0x3d16f6.lastIndex = _0x1bfaab - 0x1;
                var _0x2ea251 = _0x3d16f6.exec(_0x357cf3);
                if (!_0x2ea251) {
                  throw Error("illegal string (line " + _0x3d8bbf + ')');
                }
                _0x1bfaab = _0x3d16f6.lastIndex;
                _0x509f7c(_0xa0baff);
                _0xa0baff = null;
                return _0xe4fa2e(_0x2ea251[0x1]);
              }();
            }
            var _0x3eb9d4;
            var _0x49db65;
            var _0x6db718;
            var _0x4bb5f3;
            var _0x4f7a7a;
            var _0x7cab20 = 0x0 === _0x1bfaab;
            do {
              if (_0x1bfaab === _0xbc1b4a) {
                return null;
              }
              for (_0x3eb9d4 = false; _0x24dd52.test(_0x6db718 = _0x357cf3.charAt(_0x1bfaab));) {
                if ("\n" === _0x6db718) {
                  _0x7cab20 = true;
                  ++_0x3d8bbf;
                }
                if (++_0x1bfaab === _0xbc1b4a) {
                  return null;
                }
              }
              if ('/' === _0x357cf3.charAt(_0x1bfaab)) {
                if (++_0x1bfaab === _0xbc1b4a) {
                  throw Error("illegal comment (line " + _0x3d8bbf + ')');
                }
                if ('/' === _0x357cf3.charAt(_0x1bfaab)) {
                  if (_0x191263) {
                    _0x4bb5f3 = _0x1bfaab;
                    _0x4f7a7a = false;
                    if (_0x42da47(_0x1bfaab)) {
                      _0x4f7a7a = true;
                      do {
                        if ((_0x1bfaab = _0x356bae(_0x1bfaab)) === _0xbc1b4a) {
                          break;
                        }
                        _0x1bfaab++;
                      } while (_0x42da47(_0x1bfaab));
                    } else {
                      _0x1bfaab = Math.min(_0xbc1b4a, _0x356bae(_0x1bfaab) + 0x1);
                    }
                    if (_0x4f7a7a) {
                      _0x1eeda0(_0x4bb5f3, _0x1bfaab, _0x7cab20);
                    }
                    _0x3d8bbf++;
                    _0x3eb9d4 = true;
                  } else {
                    for (_0x4f7a7a = '/' === _0x357cf3.charAt(_0x4bb5f3 = _0x1bfaab + 0x1); "\n" !== _0x357cf3.charAt(++_0x1bfaab);) {
                      if (_0x1bfaab === _0xbc1b4a) {
                        return null;
                      }
                    }
                    ++_0x1bfaab;
                    if (_0x4f7a7a) {
                      _0x1eeda0(_0x4bb5f3, _0x1bfaab - 0x1, _0x7cab20);
                    }
                    ++_0x3d8bbf;
                    _0x3eb9d4 = true;
                  }
                } else {
                  if ('*' !== (_0x6db718 = _0x357cf3.charAt(_0x1bfaab))) {
                    return '/';
                  }
                  _0x4bb5f3 = _0x1bfaab + 0x1;
                  _0x4f7a7a = _0x191263 || '*' === _0x357cf3.charAt(_0x4bb5f3);
                  do {
                    if ("\n" === _0x6db718) {
                      ++_0x3d8bbf;
                    }
                    if (++_0x1bfaab === _0xbc1b4a) {
                      throw Error("illegal comment (line " + _0x3d8bbf + ')');
                    }
                    _0x49db65 = _0x6db718;
                    _0x6db718 = _0x357cf3.charAt(_0x1bfaab);
                  } while ('*' !== _0x49db65 || '/' !== _0x6db718);
                  ++_0x1bfaab;
                  if (_0x4f7a7a) {
                    _0x1eeda0(_0x4bb5f3, _0x1bfaab - 0x2, _0x7cab20);
                  }
                  _0x3eb9d4 = true;
                }
              }
            } while (_0x3eb9d4);
            var _0x4fba54 = _0x1bfaab;
            _0x56e931.lastIndex = 0x0;
            if (!_0x56e931.test(_0x357cf3.charAt(_0x4fba54++))) {
              for (; _0x4fba54 < _0xbc1b4a && !_0x56e931.test(_0x357cf3.charAt(_0x4fba54));) {
                ++_0x4fba54;
              }
            }
            var _0x23113c = _0x357cf3.substring(_0x1bfaab, _0x1bfaab = _0x4fba54);
            if (!("\"" !== _0x23113c && "'" !== _0x23113c)) {
              _0xa0baff = _0x23113c;
            }
            return _0x23113c;
          }
          function _0x509f7c(_0x4258c4) {
            _0x1b832f.push(_0x4258c4);
          }
          function _0x3a20f9() {
            if (!_0x1b832f.length) {
              var _0x2d12c5 = _0x4e6356();
              if (null === _0x2d12c5) {
                return null;
              }
              _0x509f7c(_0x2d12c5);
            }
            return _0x1b832f[0x0];
          }
          return Object.defineProperty({
            'next': _0x4e6356,
            'peek': _0x3a20f9,
            'push': _0x509f7c,
            'skip': function (_0x9f8afd, _0x495bc1) {
              var _0x1ffd38 = _0x3a20f9();
              if (_0x1ffd38 === _0x9f8afd) {
                _0x4e6356();
                return true;
              }
              if (!_0x495bc1) {
                throw Error("illegal " + ("token '" + _0x1ffd38 + "', '" + _0x9f8afd + "' expected") + " (line " + _0x3d8bbf + ')');
              }
              return false;
            },
            'cmnt': function (_0x2e3d05) {
              var _0x14278b = null;
              if (undefined === _0x2e3d05) {
                if (_0x3b8042 === _0x3d8bbf - 0x1 && (_0x191263 || '*' === _0x2d9b70 || _0x59f5be)) {
                  _0x14278b = _0x2a565f ? _0x2dc048 : null;
                }
              } else {
                if (_0x3b8042 < _0x2e3d05) {
                  _0x3a20f9();
                }
                if (!(_0x3b8042 !== _0x2e3d05 || _0x59f5be || !_0x191263 && '/' !== _0x2d9b70)) {
                  _0x14278b = _0x2a565f ? null : _0x2dc048;
                }
              }
              return _0x14278b;
            }
          }, "line", {
            'get': function () {
              return _0x3d8bbf;
            }
          });
        }
        _0x4e8f0a.unescape = _0xe4fa2e;
        _0x3a81b.exports;
      }, {});
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x54c019, _0x39d71d, _0x4b97a7, _0x1df097, _0x58e925) {
        _0x4b97a7.exports = _0x484c50;
        _0x484c50.filename = null;
        _0x484c50.defaults = {
          'keepCase': false
        };
        var _0x2f9084 = _0x39d71d('./tokenize');
        var _0x324bf3 = _0x39d71d("./root");
        var _0x5dcdcd = _0x39d71d("./type");
        var _0x1c50b8 = _0x39d71d("./field");
        var _0x23a7ff = _0x39d71d("./mapfield");
        var _0x31652e = _0x39d71d("./oneof");
        var _0x6c7469 = _0x39d71d('./enum');
        var _0x6abdec = _0x39d71d('./service');
        var _0x100329 = _0x39d71d('./method');
        var _0x413260 = _0x39d71d("./types");
        var _0x7c79c7 = _0x39d71d('./util');
        var _0x44738a = /^[1-9][0-9]*$/;
        var _0x196216 = /^-?[1-9][0-9]*$/;
        var _0x75331e = /^0[x][0-9a-fA-F]+$/;
        var _0x283394 = /^-?0[x][0-9a-fA-F]+$/;
        var _0x1d887e = /^0[0-7]+$/;
        var _0x51d00f = /^-?0[0-7]+$/;
        var _0x8d5e3f = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x4432e5 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x1475e8 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x1c8724 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x484c50(_0x2c60bb, _0x4bec69, _0x1098e2) {
          if (!(_0x4bec69 instanceof _0x324bf3)) {
            _0x1098e2 = _0x4bec69;
            _0x4bec69 = new _0x324bf3();
          }
          if (!_0x1098e2) {
            _0x1098e2 = _0x484c50.defaults;
          }
          var _0x4b94ab;
          var _0x2cea04;
          var _0x402e11;
          var _0xb83afa;
          var _0x3a1f1d;
          var _0xd6d434 = _0x1098e2.preferTrailingComment || false;
          var _0x5b0264 = _0x2f9084(_0x2c60bb, _0x1098e2.alternateCommentMode || false);
          var _0x2cb89c = _0x5b0264.next;
          var _0x36e37d = _0x5b0264.push;
          var _0x5196a0 = _0x5b0264.peek;
          var _0x552ed6 = _0x5b0264.skip;
          var _0x5586dd = _0x5b0264.cmnt;
          var _0x1eeff3 = true;
          var _0x38d96d = false;
          var _0x4f6bfc = _0x4bec69;
          var _0x129285 = _0x1098e2.keepCase ? function (_0x1eb9e6) {
            return _0x1eb9e6;
          } : _0x7c79c7.camelCase;
          function _0x2ab298(_0x1063ca, _0x10764a, _0x48bad0) {
            var _0x1f2507 = _0x484c50.filename;
            if (!_0x48bad0) {
              _0x484c50.filename = null;
            }
            return Error("illegal " + (_0x10764a || "token") + " '" + _0x1063ca + "' (" + (_0x1f2507 ? _0x1f2507 + ", " : '') + "line " + _0x5b0264.line + ')');
          }
          function _0x2d1768() {
            var _0x5f2e71;
            var _0x6c1064 = [];
            do {
              if ("\"" !== (_0x5f2e71 = _0x2cb89c()) && "'" !== _0x5f2e71) {
                throw _0x2ab298(_0x5f2e71);
              }
              _0x6c1064.push(_0x2cb89c());
              _0x552ed6(_0x5f2e71);
              _0x5f2e71 = _0x5196a0();
            } while ("\"" === _0x5f2e71 || "'" === _0x5f2e71);
            return _0x6c1064.join('');
          }
          function _0x145bc3(_0x2b7bd5) {
            var _0x1be9b5 = _0x2cb89c();
            switch (_0x1be9b5) {
              case "'":
              case "\"":
                _0x36e37d(_0x1be9b5);
                return _0x2d1768();
              case "true":
              case 'TRUE':
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (_0x2fedd5, _0x331671) {
                var _0x3ca8ce = 0x1;
                if ('-' === _0x2fedd5.charAt(0x0)) {
                  _0x3ca8ce = -0x1;
                  _0x2fedd5 = _0x2fedd5.substring(0x1);
                }
                switch (_0x2fedd5) {
                  case "inf":
                  case 'INF':
                  case "Inf":
                    return _0x3ca8ce * Infinity;
                  case 'nan':
                  case "NAN":
                  case "Nan":
                  case 'NaN':
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x44738a.test(_0x2fedd5)) {
                  return _0x3ca8ce * parseInt(_0x2fedd5, 0xa);
                }
                if (_0x75331e.test(_0x2fedd5)) {
                  return _0x3ca8ce * parseInt(_0x2fedd5, 0x10);
                }
                if (_0x1d887e.test(_0x2fedd5)) {
                  return _0x3ca8ce * parseInt(_0x2fedd5, 0x8);
                }
                if (_0x8d5e3f.test(_0x2fedd5)) {
                  return _0x3ca8ce * parseFloat(_0x2fedd5);
                }
                throw _0x2ab298(_0x2fedd5, "number", _0x331671);
              }(_0x1be9b5, true);
            } catch (_0x16f260) {
              if (_0x2b7bd5 && _0x1475e8.test(_0x1be9b5)) {
                return _0x1be9b5;
              }
              throw _0x2ab298(_0x1be9b5, "value");
            }
          }
          function _0x559584(_0x4e1f8b, _0x455cfa) {
            var _0x16e907;
            var _0x1d422d;
            do {
              if (!_0x455cfa || "\"" !== (_0x16e907 = _0x5196a0()) && "'" !== _0x16e907) {
                _0x4e1f8b.push([_0x1d422d = _0x4f4e9f(_0x2cb89c()), _0x552ed6('to', true) ? _0x4f4e9f(_0x2cb89c()) : _0x1d422d]);
              } else {
                _0x4e1f8b.push(_0x2d1768());
              }
            } while (_0x552ed6(',', true));
            _0x552ed6(';');
          }
          function _0x4f4e9f(_0x4c9d1c, _0x3de7d5) {
            switch (_0x4c9d1c) {
              case "max":
              case 'MAX':
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x3de7d5 && '-' === _0x4c9d1c.charAt(0x0)) {
              throw _0x2ab298(_0x4c9d1c, 'id');
            }
            if (_0x196216.test(_0x4c9d1c)) {
              return parseInt(_0x4c9d1c, 0xa);
            }
            if (_0x283394.test(_0x4c9d1c)) {
              return parseInt(_0x4c9d1c, 0x10);
            }
            if (_0x51d00f.test(_0x4c9d1c)) {
              return parseInt(_0x4c9d1c, 0x8);
            }
            throw _0x2ab298(_0x4c9d1c, 'id');
          }
          function _0x1c2fa8() {
            if (undefined !== _0x4b94ab) {
              throw _0x2ab298("package");
            }
            _0x4b94ab = _0x2cb89c();
            if (!_0x1475e8.test(_0x4b94ab)) {
              throw _0x2ab298(_0x4b94ab, 'name');
            }
            _0x4f6bfc = _0x4f6bfc.define(_0x4b94ab);
            _0x552ed6(';');
          }
          function _0x6cd8d2() {
            var _0x3f70eb;
            var _0x3224ba = _0x5196a0();
            switch (_0x3224ba) {
              case 'weak':
                _0x3f70eb = _0x402e11 || (_0x402e11 = []);
                _0x2cb89c();
                break;
              case "public":
                _0x2cb89c();
              default:
                _0x3f70eb = _0x2cea04 || (_0x2cea04 = []);
            }
            _0x3224ba = _0x2d1768();
            _0x552ed6(';');
            _0x3f70eb.push(_0x3224ba);
          }
          function _0x1e2600() {
            _0x552ed6('=');
            _0xb83afa = _0x2d1768();
            if (!(_0x38d96d = "proto3" === _0xb83afa) && 'proto2' !== _0xb83afa) {
              throw _0x2ab298(_0xb83afa, 'syntax');
            }
            _0x552ed6(';');
          }
          function _0x39fb1f(_0x2dfe63, _0x181268) {
            switch (_0x181268) {
              case 'option':
                _0x58e695(_0x2dfe63, _0x181268);
                _0x552ed6(';');
                return true;
              case "message":
                (function (_0x17d567, _0x163e96) {
                  if (!_0x4432e5.test(_0x163e96 = _0x2cb89c())) {
                    throw _0x2ab298(_0x163e96, "type name");
                  }
                  var _0x28ddc9 = new _0x5dcdcd(_0x163e96);
                  _0x1bb988(_0x28ddc9, function (_0x492035) {
                    if (!_0x39fb1f(_0x28ddc9, _0x492035)) {
                      switch (_0x492035) {
                        case "map":
                          !function (_0x59601) {
                            _0x552ed6('<');
                            var _0x44df76 = _0x2cb89c();
                            if (undefined === _0x413260.mapKey[_0x44df76]) {
                              throw _0x2ab298(_0x44df76, "type");
                            }
                            _0x552ed6(',');
                            var _0x1defb7 = _0x2cb89c();
                            if (!_0x1475e8.test(_0x1defb7)) {
                              throw _0x2ab298(_0x1defb7, "type");
                            }
                            _0x552ed6('>');
                            var _0x2d89d7 = _0x2cb89c();
                            if (!_0x4432e5.test(_0x2d89d7)) {
                              throw _0x2ab298(_0x2d89d7, "name");
                            }
                            _0x552ed6('=');
                            var _0x149a1c = new _0x23a7ff(_0x129285(_0x2d89d7), _0x4f4e9f(_0x2cb89c()), _0x44df76, _0x1defb7);
                            _0x1bb988(_0x149a1c, function (_0x3b0496) {
                              if ('option' !== _0x3b0496) {
                                throw _0x2ab298(_0x3b0496);
                              }
                              _0x58e695(_0x149a1c, _0x3b0496);
                              _0x552ed6(';');
                            }, function () {
                              _0x3d016e(_0x149a1c);
                            });
                            _0x59601.add(_0x149a1c);
                          }(_0x28ddc9);
                          break;
                        case "required":
                        case "repeated":
                          _0x53e674(_0x28ddc9, _0x492035);
                          break;
                        case 'optional':
                          _0x53e674(_0x28ddc9, _0x38d96d ? "proto3_optional" : "optional");
                          break;
                        case "oneof":
                          !function (_0x58203b, _0x2fa337) {
                            if (!_0x4432e5.test(_0x2fa337 = _0x2cb89c())) {
                              throw _0x2ab298(_0x2fa337, 'name');
                            }
                            var _0x32d827 = new _0x31652e(_0x129285(_0x2fa337));
                            _0x1bb988(_0x32d827, function (_0x358756) {
                              if ("option" === _0x358756) {
                                _0x58e695(_0x32d827, _0x358756);
                                _0x552ed6(';');
                              } else {
                                _0x36e37d(_0x358756);
                                _0x53e674(_0x32d827, "optional");
                              }
                            });
                            _0x58203b.add(_0x32d827);
                          }(_0x28ddc9, _0x492035);
                          break;
                        case "extensions":
                          _0x559584(_0x28ddc9.extensions || (_0x28ddc9.extensions = []));
                          break;
                        case "reserved":
                          _0x559584(_0x28ddc9.reserved || (_0x28ddc9.reserved = []), true);
                          break;
                        default:
                          if (!_0x38d96d || !_0x1475e8.test(_0x492035)) {
                            throw _0x2ab298(_0x492035);
                          }
                          _0x36e37d(_0x492035);
                          _0x53e674(_0x28ddc9, "optional");
                      }
                    }
                  });
                  _0x17d567.add(_0x28ddc9);
                })(_0x2dfe63, _0x181268);
                return true;
              case "enum":
                (function (_0x5e7605, _0x1d3370) {
                  if (!_0x4432e5.test(_0x1d3370 = _0x2cb89c())) {
                    throw _0x2ab298(_0x1d3370, "name");
                  }
                  var _0x449959 = new _0x6c7469(_0x1d3370);
                  _0x1bb988(_0x449959, function (_0x183424) {
                    switch (_0x183424) {
                      case "option":
                        _0x58e695(_0x449959, _0x183424);
                        _0x552ed6(';');
                        break;
                      case "reserved":
                        _0x559584(_0x449959.reserved || (_0x449959.reserved = []), true);
                        break;
                      default:
                        !function (_0x1bca52, _0x5b5142) {
                          if (!_0x4432e5.test(_0x5b5142)) {
                            throw _0x2ab298(_0x5b5142, "name");
                          }
                          _0x552ed6('=');
                          var _0x5f249b = _0x4f4e9f(_0x2cb89c(), true);
                          var _0x525fa7 = {};
                          _0x1bb988(_0x525fa7, function (_0x2cdd96) {
                            if ('option' !== _0x2cdd96) {
                              throw _0x2ab298(_0x2cdd96);
                            }
                            _0x58e695(_0x525fa7, _0x2cdd96);
                            _0x552ed6(';');
                          }, function () {
                            _0x3d016e(_0x525fa7);
                          });
                          _0x1bca52.add(_0x5b5142, _0x5f249b, _0x525fa7.comment);
                        }(_0x449959, _0x183424);
                    }
                  });
                  _0x5e7605.add(_0x449959);
                })(_0x2dfe63, _0x181268);
                return true;
              case "service":
                (function (_0x568c2e, _0x59db54) {
                  if (!_0x4432e5.test(_0x59db54 = _0x2cb89c())) {
                    throw _0x2ab298(_0x59db54, "service name");
                  }
                  var _0xc57e49 = new _0x6abdec(_0x59db54);
                  _0x1bb988(_0xc57e49, function (_0x2937c3) {
                    if (!_0x39fb1f(_0xc57e49, _0x2937c3)) {
                      if ("rpc" !== _0x2937c3) {
                        throw _0x2ab298(_0x2937c3);
                      }
                      !function (_0x582270, _0x38bddf) {
                        var _0x52cac9 = _0x5586dd();
                        var _0x55a555 = _0x38bddf;
                        if (!_0x4432e5.test(_0x38bddf = _0x2cb89c())) {
                          throw _0x2ab298(_0x38bddf, "name");
                        }
                        var _0x5712a3;
                        var _0x28aa1b;
                        var _0x348d74;
                        var _0x29b94b;
                        var _0x4ab7cf = _0x38bddf;
                        _0x552ed6('(');
                        if (_0x552ed6('stream', true)) {
                          _0x28aa1b = true;
                        }
                        if (!_0x1475e8.test(_0x38bddf = _0x2cb89c())) {
                          throw _0x2ab298(_0x38bddf);
                        }
                        _0x5712a3 = _0x38bddf;
                        _0x552ed6(')');
                        _0x552ed6("returns");
                        _0x552ed6('(');
                        if (_0x552ed6("stream", true)) {
                          _0x29b94b = true;
                        }
                        if (!_0x1475e8.test(_0x38bddf = _0x2cb89c())) {
                          throw _0x2ab298(_0x38bddf);
                        }
                        _0x348d74 = _0x38bddf;
                        _0x552ed6(')');
                        var _0x184e13 = new _0x100329(_0x4ab7cf, _0x55a555, _0x5712a3, _0x348d74, _0x28aa1b, _0x29b94b);
                        _0x184e13.comment = _0x52cac9;
                        _0x1bb988(_0x184e13, function (_0xf84ca4) {
                          if ("option" !== _0xf84ca4) {
                            throw _0x2ab298(_0xf84ca4);
                          }
                          _0x58e695(_0x184e13, _0xf84ca4);
                          _0x552ed6(';');
                        });
                        _0x582270.add(_0x184e13);
                      }(_0xc57e49, _0x2937c3);
                    }
                  });
                  _0x568c2e.add(_0xc57e49);
                })(_0x2dfe63, _0x181268);
                return true;
              case "extend":
                (function (_0x18f351, _0xf7c3f0) {
                  if (!_0x1475e8.test(_0xf7c3f0 = _0x2cb89c())) {
                    throw _0x2ab298(_0xf7c3f0, "reference");
                  }
                  var _0x200890 = _0xf7c3f0;
                  _0x1bb988(null, function (_0x4b4c09) {
                    switch (_0x4b4c09) {
                      case "required":
                      case 'repeated':
                        _0x53e674(_0x18f351, _0x4b4c09, _0x200890);
                        break;
                      case "optional":
                        _0x53e674(_0x18f351, _0x38d96d ? "proto3_optional" : "optional", _0x200890);
                        break;
                      default:
                        if (!_0x38d96d || !_0x1475e8.test(_0x4b4c09)) {
                          throw _0x2ab298(_0x4b4c09);
                        }
                        _0x36e37d(_0x4b4c09);
                        _0x53e674(_0x18f351, 'optional', _0x200890);
                    }
                  });
                })(_0x2dfe63, _0x181268);
                return true;
            }
            return false;
          }
          function _0x1bb988(_0x5bea50, _0x7b6c2f, _0x4050a8) {
            var _0x3a06d1 = _0x5b0264.line;
            if (_0x5bea50) {
              if ('string' != typeof _0x5bea50.comment) {
                _0x5bea50.comment = _0x5586dd();
              }
              _0x5bea50.filename = _0x484c50.filename;
            }
            if (_0x552ed6('{', true)) {
              for (var _0x3ada5f; '}' !== (_0x3ada5f = _0x2cb89c());) {
                _0x7b6c2f(_0x3ada5f);
              }
              _0x552ed6(';', true);
            } else {
              if (_0x4050a8) {
                _0x4050a8();
              }
              _0x552ed6(';');
              if (_0x5bea50 && ('string' != typeof _0x5bea50.comment || _0xd6d434)) {
                _0x5bea50.comment = _0x5586dd(_0x3a06d1) || _0x5bea50.comment;
              }
            }
          }
          function _0x53e674(_0x2aebbe, _0x25ad22, _0x5a6803) {
            var _0x4b09d6 = _0x2cb89c();
            if ('group' !== _0x4b09d6) {
              if (!_0x1475e8.test(_0x4b09d6)) {
                throw _0x2ab298(_0x4b09d6, "type");
              }
              var _0x3f2233 = _0x2cb89c();
              if (!_0x4432e5.test(_0x3f2233)) {
                throw _0x2ab298(_0x3f2233, "name");
              }
              _0x3f2233 = _0x129285(_0x3f2233);
              _0x552ed6('=');
              var _0x32e061 = new _0x1c50b8(_0x3f2233, _0x4f4e9f(_0x2cb89c()), _0x4b09d6, _0x25ad22, _0x5a6803);
              _0x1bb988(_0x32e061, function (_0x1c1b4a) {
                if ("option" !== _0x1c1b4a) {
                  throw _0x2ab298(_0x1c1b4a);
                }
                _0x58e695(_0x32e061, _0x1c1b4a);
                _0x552ed6(';');
              }, function () {
                _0x3d016e(_0x32e061);
              });
              if ("proto3_optional" === _0x25ad22) {
                var _0x3385d9 = new _0x31652e('_' + _0x3f2233);
                _0x32e061.setOption('proto3_optional', true);
                _0x3385d9.add(_0x32e061);
                _0x2aebbe.add(_0x3385d9);
              } else {
                _0x2aebbe.add(_0x32e061);
              }
              if (!(_0x38d96d || !_0x32e061.repeated || undefined === _0x413260.packed[_0x4b09d6] && undefined !== _0x413260.basic[_0x4b09d6])) {
                _0x32e061.setOption("packed", false, true);
              }
            } else {
              !function (_0x28e0a0, _0x9f46ac) {
                var _0x2017d2 = _0x2cb89c();
                if (!_0x4432e5.test(_0x2017d2)) {
                  throw _0x2ab298(_0x2017d2, "name");
                }
                var _0x397004 = _0x7c79c7.lcFirst(_0x2017d2);
                if (_0x2017d2 === _0x397004) {
                  _0x2017d2 = _0x7c79c7.ucFirst(_0x2017d2);
                }
                _0x552ed6('=');
                var _0x1febe8 = _0x4f4e9f(_0x2cb89c());
                var _0x45e298 = new _0x5dcdcd(_0x2017d2);
                _0x45e298.group = true;
                var _0x8ab5c6 = new _0x1c50b8(_0x397004, _0x1febe8, _0x2017d2, _0x9f46ac);
                _0x8ab5c6.filename = _0x484c50.filename;
                _0x1bb988(_0x45e298, function (_0x5d8179) {
                  switch (_0x5d8179) {
                    case "option":
                      _0x58e695(_0x45e298, _0x5d8179);
                      _0x552ed6(';');
                      break;
                    case "required":
                    case "repeated":
                      _0x53e674(_0x45e298, _0x5d8179);
                      break;
                    case 'optional':
                      _0x53e674(_0x45e298, _0x38d96d ? 'proto3_optional' : "optional");
                      break;
                    default:
                      throw _0x2ab298(_0x5d8179);
                  }
                });
                _0x28e0a0.add(_0x45e298).add(_0x8ab5c6);
              }(_0x2aebbe, _0x25ad22);
            }
          }
          function _0x58e695(_0x1f8241, _0x96b770) {
            var _0x5c9739 = _0x552ed6('(', true);
            if (!_0x1475e8.test(_0x96b770 = _0x2cb89c())) {
              throw _0x2ab298(_0x96b770, "name");
            }
            var _0x1e8a17;
            var _0x4ec70a = _0x96b770;
            var _0x31057a = _0x4ec70a;
            if (_0x5c9739) {
              _0x552ed6(')');
              _0x31057a = _0x4ec70a = '(' + _0x4ec70a + ')';
              _0x96b770 = _0x5196a0();
              if (_0x1c8724.test(_0x96b770)) {
                _0x1e8a17 = _0x96b770.substr(0x1);
                _0x4ec70a += _0x96b770;
                _0x2cb89c();
              }
            }
            _0x552ed6('=');
            (function (_0x173137, _0x5c5e86, _0x5c857f, _0x2e3f70) {
              if (_0x173137.setParsedOption) {
                _0x173137.setParsedOption(_0x5c5e86, _0x5c857f, _0x2e3f70);
              }
            })(_0x1f8241, _0x31057a, _0x2edbdf(_0x1f8241, _0x4ec70a), _0x1e8a17);
          }
          function _0x2edbdf(_0x6abc28, _0x11ad70) {
            if (_0x552ed6('{', true)) {
              for (var _0x1df4d1 = {}; !_0x552ed6('}', true);) {
                if (!_0x4432e5.test(_0x3a1f1d = _0x2cb89c())) {
                  throw _0x2ab298(_0x3a1f1d, "name");
                }
                var _0x520b95;
                var _0x47efd = _0x3a1f1d;
                if ('{' === _0x5196a0()) {
                  _0x520b95 = _0x2edbdf(_0x6abc28, _0x11ad70 + '.' + _0x3a1f1d);
                } else {
                  _0x552ed6(':');
                  if ('{' === _0x5196a0()) {
                    _0x520b95 = _0x2edbdf(_0x6abc28, _0x11ad70 + '.' + _0x3a1f1d);
                  } else {
                    _0x520b95 = _0x145bc3(true);
                    _0x35136f(_0x6abc28, _0x11ad70 + '.' + _0x3a1f1d, _0x520b95);
                  }
                }
                var _0x4501da = _0x1df4d1[_0x47efd];
                if (_0x4501da) {
                  _0x520b95 = [].concat(_0x4501da).concat(_0x520b95);
                }
                _0x1df4d1[_0x47efd] = _0x520b95;
                _0x552ed6(',', true);
              }
              return _0x1df4d1;
            }
            var _0x54230a = _0x145bc3(true);
            _0x35136f(_0x6abc28, _0x11ad70, _0x54230a);
            return _0x54230a;
          }
          function _0x35136f(_0x3cc3f1, _0x4bf26e, _0x4bc7b0) {
            if (_0x3cc3f1.setOption) {
              _0x3cc3f1.setOption(_0x4bf26e, _0x4bc7b0);
            }
          }
          function _0x3d016e(_0x34e2e0) {
            if (_0x552ed6('[', true)) {
              do {
                _0x58e695(_0x34e2e0, 'option');
              } while (_0x552ed6(',', true));
              _0x552ed6(']');
            }
            return _0x34e2e0;
          }
          for (; null !== (_0x3a1f1d = _0x2cb89c());) {
            switch (_0x3a1f1d) {
              case "package":
                if (!_0x1eeff3) {
                  throw _0x2ab298(_0x3a1f1d);
                }
                _0x1c2fa8();
                break;
              case "import":
                if (!_0x1eeff3) {
                  throw _0x2ab298(_0x3a1f1d);
                }
                _0x6cd8d2();
                break;
              case "syntax":
                if (!_0x1eeff3) {
                  throw _0x2ab298(_0x3a1f1d);
                }
                _0x1e2600();
                break;
              case "option":
                _0x58e695(_0x4f6bfc, _0x3a1f1d);
                _0x552ed6(';');
                break;
              default:
                if (_0x39fb1f(_0x4f6bfc, _0x3a1f1d)) {
                  _0x1eeff3 = false;
                  continue;
                }
                throw _0x2ab298(_0x3a1f1d);
            }
          }
          _0x484c50.filename = null;
          return {
            'package': _0x4b94ab,
            'imports': _0x2cea04,
            'weakImports': _0x402e11,
            'syntax': _0xb83afa,
            'root': _0x4bec69
          };
        }
        _0x4b97a7.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './mapfield': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './enum': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './types': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/types.js',
          './util': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0xcb907a, _0x56ea67, _0xd8b279, _0xea17b, _0x59922c) {
        _0xd8b279.exports = _0x30a1fe;
        var _0x18a583;
        var _0x10d6e3 = /\/|\./;
        function _0x30a1fe(_0x396b1b, _0x39e36e) {
          if (!_0x10d6e3.test(_0x396b1b)) {
            _0x396b1b = "google/protobuf/" + _0x396b1b + '.proto';
            _0x39e36e = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x39e36e
                    }
                  }
                }
              }
            };
          }
          _0x30a1fe[_0x396b1b] = _0x39e36e;
        }
        _0x30a1fe("any", {
          'Any': {
            'fields': {
              'type_url': {
                'type': 'string',
                'id': 0x1
              },
              'value': {
                'type': "bytes",
                'id': 0x2
              }
            }
          }
        });
        _0x30a1fe('duration', {
          'Duration': _0x18a583 = {
            'fields': {
              'seconds': {
                'type': "int64",
                'id': 0x1
              },
              'nanos': {
                'type': "int32",
                'id': 0x2
              }
            }
          }
        });
        _0x30a1fe("timestamp", {
          'Timestamp': _0x18a583
        });
        _0x30a1fe("empty", {
          'Empty': {
            'fields': {}
          }
        });
        _0x30a1fe("struct", {
          'Struct': {
            'fields': {
              'fields': {
                'keyType': "string",
                'type': 'Value',
                'id': 0x1
              }
            }
          },
          'Value': {
            'oneofs': {
              'kind': {
                'oneof': ['nullValue', 'numberValue', "stringValue", "boolValue", 'structValue', 'listValue']
              }
            },
            'fields': {
              'nullValue': {
                'type': "NullValue",
                'id': 0x1
              },
              'numberValue': {
                'type': "double",
                'id': 0x2
              },
              'stringValue': {
                'type': "string",
                'id': 0x3
              },
              'boolValue': {
                'type': "bool",
                'id': 0x4
              },
              'structValue': {
                'type': 'Struct',
                'id': 0x5
              },
              'listValue': {
                'type': "ListValue",
                'id': 0x6
              }
            }
          },
          'NullValue': {
            'values': {
              'NULL_VALUE': 0x0
            }
          },
          'ListValue': {
            'fields': {
              'values': {
                'rule': "repeated",
                'type': 'Value',
                'id': 0x1
              }
            }
          }
        });
        _0x30a1fe('wrappers', {
          'DoubleValue': {
            'fields': {
              'value': {
                'type': "double",
                'id': 0x1
              }
            }
          },
          'FloatValue': {
            'fields': {
              'value': {
                'type': 'float',
                'id': 0x1
              }
            }
          },
          'Int64Value': {
            'fields': {
              'value': {
                'type': 'int64',
                'id': 0x1
              }
            }
          },
          'UInt64Value': {
            'fields': {
              'value': {
                'type': "uint64",
                'id': 0x1
              }
            }
          },
          'Int32Value': {
            'fields': {
              'value': {
                'type': "int32",
                'id': 0x1
              }
            }
          },
          'UInt32Value': {
            'fields': {
              'value': {
                'type': "uint32",
                'id': 0x1
              }
            }
          },
          'BoolValue': {
            'fields': {
              'value': {
                'type': "bool",
                'id': 0x1
              }
            }
          },
          'StringValue': {
            'fields': {
              'value': {
                'type': "string",
                'id': 0x1
              }
            }
          },
          'BytesValue': {
            'fields': {
              'value': {
                'type': "bytes",
                'id': 0x1
              }
            }
          }
        });
        _0x30a1fe("field_mask", {
          'FieldMask': {
            'fields': {
              'paths': {
                'rule': 'repeated',
                'type': "string",
                'id': 0x1
              }
            }
          }
        });
        _0x30a1fe.get = function (_0x301813) {
          return _0x30a1fe[_0x301813] || null;
        };
        _0xd8b279.exports;
      }, {});
      var _0x27ff3f;
      _0x23cda2.define('file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/index.js', function (_0x2c8ed8, _0x3e7f5a, _0x3121c0, _0x51abba, _0x5a1506) {
        var _0x28b33f = _0x3121c0.exports = _0x3e7f5a("./index-light");
        _0x28b33f.build = 'full';
        _0x28b33f.tokenize = _0x3e7f5a('./tokenize');
        _0x28b33f.parse = _0x3e7f5a("./parse");
        _0x28b33f.common = _0x3e7f5a("./common");
        _0x28b33f.Root._configure(_0x28b33f.Type, _0x28b33f.parse, _0x28b33f.common);
        _0x3121c0.exports;
      }, function () {
        return {
          './index-light': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/index.js", function (_0x3ce122, _0x3bb71e, _0x4a47b8, _0x22c7b5, _0xdde778) {
        _0x4a47b8.exports = _0x3bb71e("./src/index");
        _0x27ff3f = _0x4a47b8.exports;
      }, function () {
        return {
          './src/index': 'file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/index.js'
        };
      });
      _0x23cda2.require("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/index.js");
      _0x2c7048._RF.push({}, "35abf73NddHRazQL2+PMUHv", "CheckState", undefined);
      _0x2c7048._RF.pop();
      _0x2c7048._RF.push({}, "34993AphpVFwILWb4seC8/V", "IdleState", undefined);
      _0x2c7048._RF.pop();
      _0x2c7048._RF.push({}, "4cc71HKPrlBFocOQhHHNC4N", "RoundEndState", undefined);
      _0x2c7048._RF.pop();
      _0x2c7048._RF.push({}, "7ed89htb31NI6m6t4eZSLvZ", "RoundShowEndState", undefined);
      _0x2c7048._RF.pop();
      _0x2c7048._RF.push({}, 'c1187rgVD9NpqcW31mWoFQR', "SpinState", undefined);
      _0x2c7048._RF.pop();
      _0x2c7048._RF.push({}, "fe827F78VdG547fqC9EM20l", "UnshowPrepareState", undefined);
      _0x2c7048._RF.pop();
      _0x2c7048._RF.push({}, 'bdd97H4XWhDkZ7SFGh7nmP8', "WaitResState", undefined);
      _0x2c7048._RF.pop();
      var _0x8b5324;
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (_0x58f158, _0x20f74e, _0x5eb3ce, _0x2a479a, _0x43417b) {
        _0x5eb3ce.exports = _0x20f74e("./src/index-minimal");
        _0x5eb3ce.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      _0x23cda2.define("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/assets/game/Script/Proto/srProto.js", function (_0x2f43d5, _0x7e4514, _0x158a63, _0x280ba5, _0x19189b) {
        var _0x3e9649;
        var _0xda1898 = _0x7e4514('protobufjs/minimal');
        var _0x567f5f = _0xda1898.Reader;
        var _0x58c2c2 = _0xda1898.Writer;
        var _0x46bd9c = _0xda1898.util;
        var _0x5710bf = _0xda1898.roots['default'] || (_0xda1898.roots["default"] = {});
        (_0x3e9649 = {}).SpinAck = function () {
          function _0x1dd7a6(_0x25aca8) {
            this.PlateSymbol = [];
            if (_0x25aca8) {
              var _0x429081 = Object.keys(_0x25aca8);
              for (var _0x4e98bd = 0x0; _0x4e98bd < _0x429081.length; ++_0x4e98bd) {
                if (null != _0x25aca8[_0x429081[_0x4e98bd]]) {
                  this[_0x429081[_0x4e98bd]] = _0x25aca8[_0x429081[_0x4e98bd]];
                }
              }
            }
          }
          _0x1dd7a6.prototype.Award = 0x0;
          _0x1dd7a6.prototype.TotalWin = 0x0;
          _0x1dd7a6.prototype.PlateSymbol = _0x46bd9c.emptyArray;
          _0x1dd7a6.prototype.ShowIndex = '';
          _0x1dd7a6.prototype.NowMoney = 0x0;
          _0x1dd7a6.prototype.AckType = 0x0;
          _0x1dd7a6.prototype.RTP = 0x0;
          _0x1dd7a6.encode = function (_0x10fa72, _0x44298a) {
            if (!_0x44298a) {
              _0x44298a = _0x58c2c2.create();
            }
            if (null != _0x10fa72.Award && Object.hasOwnProperty.call(_0x10fa72, "Award")) {
              _0x44298a.uint32(0x8).int32(_0x10fa72.Award);
            }
            if (null != _0x10fa72.TotalWin && Object.hasOwnProperty.call(_0x10fa72, "TotalWin")) {
              _0x44298a.uint32(0x11).double(_0x10fa72.TotalWin);
            }
            if (null != _0x10fa72.PlateSymbol && _0x10fa72.PlateSymbol.length) {
              _0x44298a.uint32(0x1a).fork();
              for (var _0x18ceb3 = 0x0; _0x18ceb3 < _0x10fa72.PlateSymbol.length; ++_0x18ceb3) {
                _0x44298a.int32(_0x10fa72.PlateSymbol[_0x18ceb3]);
              }
              _0x44298a.ldelim();
            }
            if (null != _0x10fa72.ShowIndex && Object.hasOwnProperty.call(_0x10fa72, "ShowIndex")) {
              _0x44298a.uint32(0x2a).string(_0x10fa72.ShowIndex);
            }
            if (null != _0x10fa72.NowMoney && Object.hasOwnProperty.call(_0x10fa72, "NowMoney")) {
              _0x44298a.uint32(0x31).double(_0x10fa72.NowMoney);
            }
            if (null != _0x10fa72.AckType && Object.hasOwnProperty.call(_0x10fa72, "AckType")) {
              _0x44298a.uint32(0x38).int32(_0x10fa72.AckType);
            }
            if (null != _0x10fa72.RTP && Object.hasOwnProperty.call(_0x10fa72, "RTP")) {
              _0x44298a.uint32(0x41).double(_0x10fa72.RTP);
            }
            return _0x44298a;
          };
          _0x1dd7a6.decode = function (_0x54ebfd, _0x2df8f6) {
            if (!(_0x54ebfd instanceof _0x567f5f)) {
              _0x54ebfd = _0x567f5f.create(_0x54ebfd);
            }
            var _0x5b2247 = undefined === _0x2df8f6 ? _0x54ebfd.len : _0x54ebfd.pos + _0x2df8f6;
            for (var _0x3694ae = new _0x5710bf.srProto.SpinAck(); _0x54ebfd.pos < _0x5b2247;) {
              var _0x1a9a2a = _0x54ebfd.uint32();
              switch (_0x1a9a2a >>> 0x3) {
                case 0x1:
                  _0x3694ae.Award = _0x54ebfd.int32();
                  break;
                case 0x2:
                  _0x3694ae.TotalWin = _0x54ebfd.double();
                  break;
                case 0x3:
                  if (!(_0x3694ae.PlateSymbol && _0x3694ae.PlateSymbol.length)) {
                    _0x3694ae.PlateSymbol = [];
                  }
                  if (0x2 == (0x7 & _0x1a9a2a)) {
                    for (var _0x469abe = _0x54ebfd.uint32() + _0x54ebfd.pos; _0x54ebfd.pos < _0x469abe;) {
                      _0x3694ae.PlateSymbol.push(_0x54ebfd.int32());
                    }
                  } else {
                    _0x3694ae.PlateSymbol.push(_0x54ebfd.int32());
                  }
                  break;
                case 0x5:
                  _0x3694ae.ShowIndex = _0x54ebfd.string();
                  break;
                case 0x6:
                  _0x3694ae.NowMoney = _0x54ebfd.double();
                  break;
                case 0x7:
                  _0x3694ae.AckType = _0x54ebfd.int32();
                  break;
                case 0x8:
                  _0x3694ae.RTP = _0x54ebfd.double();
                  break;
                default:
                  _0x54ebfd.skipType(0x7 & _0x1a9a2a);
              }
            }
            return _0x3694ae;
          };
          _0x1dd7a6.getTypeUrl = function (_0x2d77ee) {
            if (undefined === _0x2d77ee) {
              _0x2d77ee = "type.googleapis.com";
            }
            return _0x2d77ee + "/srProto.SpinAck";
          };
          return _0x1dd7a6;
        }();
        _0x5710bf.srProto = _0x3e9649;
        _0x158a63.exports = _0x5710bf;
        _0x8b5324 = _0x158a63.exports;
      }, function () {
        return {
          'protobufjs/minimal': "file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      _0x23cda2.require("file:///Users/m2mac1/Desktop/H5/Client/workspace/SuperRich/Client/Thai_UAT/assets/game/Script/Proto/srProto.js");
      _0x2c7048._RF.push({}, "c1ea7Pii+dAi78piqmmzKpD", "GameView", undefined);
      _0x2c7048._RF.pop();
      _0x2c7048._RF.push({}, "4c57601napFfr32cCS12PUa", "AwardState", undefined);
      _0x2c7048._RF.pop();
    }
  };
});
(function (_0x3fc29e) {
  _0x3fc29e("virtual:///prerequisite-imports/game", "chunks:///game.js");
})(function (_0x5095da, _0x6d93f7) {
  System.register(_0x5095da, [_0x6d93f7], function (_0x21960f, _0x239026) {
    return {
      'setters': [function (_0x1eca4e) {
        var _0x463080 = {};
        for (var _0x890b58 in _0x1eca4e) {
          if (_0x890b58 !== "default" && _0x890b58 !== "__esModule") {
            _0x463080[_0x890b58] = _0x1eca4e[_0x890b58];
          }
        }
        _0x21960f(_0x463080);
      }],
      'execute': function () {}
    };
  });
});