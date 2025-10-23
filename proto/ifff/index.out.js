System.register("chunks:///game.js", ['cc', "./index-694936b7.js"], function (_0x12a6bc, _0x567d0b) {
  'use strict';

  var _0x294ebc;
  var _0x5efef0;
  var _0x22bada;
  var _0x5ea4de;
  var _0x2f6eb4;
  var _0x4d7b61;
  var _0x3597b3;
  var _0x5bbe42;
  var _0x5f03c6;
  var _0x3840c8;
  var _0x4d9594;
  var _0x44dee0;
  var _0x2c4cf1;
  var _0x6a930a;
  var _0x39ba17;
  var _0xd895a;
  var _0x374dc7;
  var _0x4c53c8;
  var _0x5e7c17;
  var _0x1361c6;
  var _0x311559;
  var _0x4119ea;
  var _0x50e511;
  var _0x5626be;
  var _0x853c94;
  var _0x2ca4da;
  var _0x978011;
  var _0x346b13;
  var _0x46db50;
  var _0x594013;
  var _0x5249a8;
  var _0x499959;
  var _0x41d8bb;
  var _0x5c8459;
  var _0x1b53d9;
  var _0x2ef38d;
  var _0x456e41;
  var _0x13e604;
  var _0x2b116b;
  var _0x411dc1;
  var _0x2d9995;
  var _0x516f5a;
  var _0x104d3f;
  var _0xca18ac;
  var _0x3dbe95;
  var _0x46555d;
  var _0x40c31d;
  var _0x4fced0;
  var _0x1579a0;
  var _0x2d9878;
  var _0x22f21d;
  var _0x207878;
  var _0x1e6046;
  var _0xcfa8d9;
  var _0x5f455d;
  var _0x2b23fa;
  var _0x5019a1;
  var _0x4170a7;
  var _0x1fded6;
  var _0x13daac;
  var _0x3fe773;
  var _0x25b314;
  var _0x876a55;
  var _0x336e5d;
  return {
    'setters': [function (_0x25a1d6) {
      _0x294ebc = _0x25a1d6.cclegacy;
      _0x5efef0 = _0x25a1d6._decorator;
      _0x22bada = _0x25a1d6.SpriteFrame;
      _0x5ea4de = _0x25a1d6.Enum;
      _0x2f6eb4 = _0x25a1d6.Component;
      _0x4d7b61 = _0x25a1d6.sp;
      _0x3597b3 = _0x25a1d6.Label;
      _0x5bbe42 = _0x25a1d6.Animation;
      _0x5f03c6 = _0x25a1d6.Prefab;
      _0x3840c8 = _0x25a1d6.v2;
      _0x4d9594 = _0x25a1d6.UITransform;
      _0x44dee0 = _0x25a1d6.Size;
      _0x2c4cf1 = _0x25a1d6.instantiate;
      _0x6a930a = _0x25a1d6.v3;
      _0x39ba17 = _0x25a1d6.log;
      _0xd895a = _0x25a1d6.Node;
      _0x374dc7 = _0x25a1d6.tween;
      _0x4c53c8 = _0x25a1d6.Sprite;
      _0x5e7c17 = _0x25a1d6.Tween;
      _0x1361c6 = _0x25a1d6.SpriteAtlas;
      _0x311559 = _0x25a1d6.input;
      _0x4119ea = _0x25a1d6.Input;
      _0x50e511 = _0x25a1d6.KeyCode;
      _0x5626be = _0x25a1d6.screen;
      _0x853c94 = _0x25a1d6.view;
      _0x2ca4da = _0x25a1d6.ResolutionPolicy;
      _0x978011 = _0x25a1d6.UIOpacity;
      _0x346b13 = _0x25a1d6.error;
    }, function (_0x3b1d1d) {
      _0x46db50 = _0x3b1d1d._;
      _0x594013 = _0x3b1d1d.a;
      _0x5249a8 = _0x3b1d1d.b;
      _0x499959 = _0x3b1d1d.c;
      _0x41d8bb = _0x3b1d1d.o;
      _0x5c8459 = _0x3b1d1d.p;
      _0x1b53d9 = _0x3b1d1d.l;
      _0x2ef38d = _0x3b1d1d.w;
      _0x456e41 = _0x3b1d1d.g;
      _0x13e604 = _0x3b1d1d.e;
      _0x2b116b = _0x3b1d1d.j;
      _0x411dc1 = _0x3b1d1d.B;
      _0x2d9995 = _0x3b1d1d.x;
      _0x516f5a = _0x3b1d1d.h;
      _0x104d3f = _0x3b1d1d.y;
      _0xca18ac = _0x3b1d1d.z;
      _0x3dbe95 = _0x3b1d1d.k;
      _0x46555d = _0x3b1d1d.t;
      _0x40c31d = _0x3b1d1d.s;
      _0x4fced0 = _0x3b1d1d.i;
      _0x1579a0 = _0x3b1d1d.r;
      _0x2d9878 = _0x3b1d1d.D;
      _0x22f21d = _0x3b1d1d.A;
      _0x207878 = _0x3b1d1d.E;
      _0x1e6046 = _0x3b1d1d.F;
      _0xcfa8d9 = _0x3b1d1d.G;
      _0x5f455d = _0x3b1d1d.f;
      _0x2b23fa = _0x3b1d1d.C;
      _0x5019a1 = _0x3b1d1d.H;
      _0x4170a7 = _0x3b1d1d.I;
      _0x1fded6 = _0x3b1d1d.n;
      _0x13daac = _0x3b1d1d.J;
      _0x3fe773 = _0x3b1d1d.d;
      _0x25b314 = _0x3b1d1d.K;
      _0x876a55 = _0x3b1d1d.L;
      _0x336e5d = _0x3b1d1d.M;
    }],
    'execute': function () {
      var _0x46a650;
      var _0x5f13f9;
      var _0x1a87b8;
      var _0x580f39;
      var _0x40b6e8;
      var _0x163e81;
      var _0x23b379;
      var _0x190a59;
      var _0x5c37b7;
      var _0x14471a;
      var _0x4fc505;
      var _0x808cc6;
      var _0x219cb9;
      var _0xb95a60;
      var _0x56875b;
      var _0x27c504;
      var _0x40c24f;
      var _0x5b93ad;
      var _0x48afee;
      var _0x43f80c;
      _0x294ebc._RF.push({}, "cc629oBgStE6p3cesIpDU+s", 'DataStructure', undefined);
      _0x294ebc._RF.pop();
      _0x294ebc._RF.push({}, "e3d37pyPyVIAKjMKAJE0mvs", "SE_Define", undefined);
      (function (_0x244e28) {
        _0x244e28[_0x244e28.ANY = 0x0] = "ANY";
        _0x244e28[_0x244e28.TSU = 0x1] = "TSU";
        _0x244e28[_0x244e28.SHIH = 0x2] = "SHIH";
        _0x244e28[_0x244e28.SHUO = 0x3] = "SHUO";
        _0x244e28[_0x244e28.FA = 0x4] = 'FA';
      })(_0x48afee || (_0x48afee = {}));
      (function (_0x5aed40) {
        _0x5aed40[_0x5aed40.UNSHOW_PREPARE = 0x0] = "UNSHOW_PREPARE";
        _0x5aed40[_0x5aed40.STOP = 0x1] = "STOP";
        _0x5aed40[_0x5aed40.AWARD = 0x2] = "AWARD";
        _0x5aed40[_0x5aed40.ROUND_SHOW_END = 0x3] = "ROUND_SHOW_END";
        _0x5aed40[_0x5aed40.ROUND_END = 0x4] = "ROUND_END";
      })(_0x43f80c || (_0x43f80c = {}));
      var _0x1983aa = _0x5efef0.ccclass;
      var _0x599be5 = _0x5efef0.property;
      _0x46a650 = _0x599be5(_0x22bada);
      _0x5f13f9 = _0x599be5(_0x22bada);
      _0x1a87b8 = _0x599be5(_0x22bada);
      _0x580f39 = _0x599be5(_0x22bada);
      _0x40b6e8 = _0x599be5(_0x22bada);
      _0x163e81 = _0x599be5(_0x22bada);
      _0x23b379 = _0x599be5(_0x22bada);
      _0x190a59 = _0x599be5(_0x22bada);
      _0x5b93ad = function (_0x5ee169) {
        function _0x4466dc() {
          var _0x58c68c;
          var _0x26b853 = arguments.length;
          var _0x20b377 = new Array(_0x26b853);
          for (var _0xaeccf = 0x0; _0xaeccf < _0x26b853; _0xaeccf++) {
            _0x20b377[_0xaeccf] = arguments[_0xaeccf];
          }
          _0x58c68c = _0x5ee169.call.apply(_0x5ee169, [this].concat(_0x20b377)) || this;
          _0x5249a8(_0x58c68c, "SymbolSpriteFrame", _0x14471a, _0x499959(_0x58c68c));
          _0x5249a8(_0x58c68c, 'FreeSymbolSpriteFrame', _0x4fc505, _0x499959(_0x58c68c));
          _0x5249a8(_0x58c68c, "UpgradeSymbolSripteFrame", _0x808cc6, _0x499959(_0x58c68c));
          _0x5249a8(_0x58c68c, "TitleSpriteFrames", _0x219cb9, _0x499959(_0x58c68c));
          _0x5249a8(_0x58c68c, "LeftSpriteFrames", _0xb95a60, _0x499959(_0x58c68c));
          _0x5249a8(_0x58c68c, 'RecordWinSpriteFrames', _0x56875b, _0x499959(_0x58c68c));
          _0x5249a8(_0x58c68c, "RecordBgSpriteFrames", _0x27c504, _0x499959(_0x58c68c));
          _0x5249a8(_0x58c68c, "UpgradeSpriteFrames", _0x40c24f, _0x499959(_0x58c68c));
          return _0x58c68c;
        }
        _0x594013(_0x4466dc, _0x5ee169);
        _0x4466dc.Wait = function (_0x71d1ae, _0x473804) {
          return new Promise(function (_0x444e0d) {
            _0x71d1ae.scheduleOnce(function () {
              _0x444e0d(null);
            }, _0x473804);
          });
        };
        _0x4466dc.OnExit = function () {
          this.BgAudioId = -0x1;
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
            'Symbol03win': null
          };
        };
        return _0x4466dc;
      }(_0x2f6eb4);
      _0x5b93ad.Ver = "253";
      _0x5b93ad.BgAudioId = -0x1;
      _0x5b93ad.SPICY_LEVEL = 0x1;
      _0x5b93ad.FULL_HOUSE_AWARD_TYPE = 0x4;
      _0x5b93ad.GAMEVIEW_STATE = _0x5ea4de(_0x43f80c);
      _0x5b93ad.SPIN_ACK_TYPE = {
        'AT_SUCCESS': 0x0,
        'AT_MONEY_NOT_ENOUGH': 0x12d,
        'AT_MONEY_ABNORMAL': 0x12e,
        'AT_MONEY_NOT_ENOUGH_SINGLE': 0x131,
        'API_BETONCE_FAIL': 0x7d3
      };
      _0x5b93ad.AWARD_TYPE = {
        'AWARD_TYPE_NON': 0x0,
        'AWARD_TYPE_LINE': 0x1,
        'AWARD_TYPE_ALL_PLATE': 0x2,
        'AWARD_TYPE_MAX': 0x7fff
      };
      _0x5b93ad.AudioFileRoot = "Sound/";
      _0x5b93ad.AudioFilePath = {
        'Mg_bgm': _0x5b93ad.AudioFileRoot + "Mg_bgm",
        'Mg_bgm_open': _0x5b93ad.AudioFileRoot + "Mg_bgmopen",
        'Mg_buttonpress': _0x5b93ad.AudioFileRoot + "Mg_buttonpress",
        'Mg_reel': _0x5b93ad.AudioFileRoot + 'Mg_reel',
        'Mg_reel_stop': _0x5b93ad.AudioFileRoot + "Mg_reel_stop",
        'Mg_winning': _0x5b93ad.AudioFileRoot + "MG_winning",
        'Mg_symbol03': _0x5b93ad.AudioFileRoot + "Symbol03win",
        'Mg_wild_win': _0x5b93ad.AudioFileRoot + 'WildWin',
        'Wild_count': _0x5b93ad.AudioFileRoot + "wild_count",
        'Wild_open': _0x5b93ad.AudioFileRoot + "wild_open",
        'Wild_show': _0x5b93ad.AudioFileRoot + "wild_show",
        'Wild_show_fax3': _0x5b93ad.AudioFileRoot + 'wild_show_fax3',
        'Symbol03win': _0x5b93ad.AudioFileRoot + 'Symbol03win'
      };
      _0x5b93ad.AudioClips = {
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
        'Symbol03win': null
      };
      _0x5b93ad.AckType = {
        'login': 0x0,
        'exchangeChips': 0x2,
        'info': 0xb,
        'spin': 0xc,
        'heartBeat': 0x62,
        'serverMsg': 0x63
      };
      _0x5b93ad.SERVER_RET_TYPE = {
        'SERVER_SUCCESS': 0x0,
        'SERVER_ERROR_SEATE': 0x31f,
        'SERVER_NOUSE': 0x383,
        'SERVER_MAINTAIN': 0x3e6,
        'SERVER_SHUTDOWN': 0x3e7,
        'SERVER_NEED_UID': 0x3e9,
        'SERVER_NEED_LOGIN': 0x3ea,
        'SERVER_TOKEN_ERROR': 0x3eb
      };
      _0x5b93ad.LOGIN_RESULT_TYPE = {
        'LOGIN_SUCCESS': 0x0,
        'LOGIN_FAIL': 0x1,
        'API_VERIFY_FAIL': 0x7d1,
        'API_LOGIN_REPEAT_FAIL': 0x7d2
      };
      _0x5b93ad.HEART_BEAT_STATE = {
        'NOTIFY': 0x61,
        'MAINTAIN': 0x62,
        'CLOSE': 0x63
      };
      _0x5b93ad.DelayType = {
        'Normal': 0x0,
        'Get': 0x1,
        'NotGet': 0x2
      };
      _0x5b93ad.TimeoutType = {
        'Ignore': 0x0,
        'Handle': 0x1
      };
      _0x5b93ad.USE_ITEM_REASON = {
        'NORMAL': 0x0,
        'USING': 0x1
      };
      _0x5b93ad.StringKey = {
        'SE_FEATURES_LEFT': "SE_FEATURES_LEFT",
        'SE_FEATURES_RIGHT': "SE_FEATURES_RIGHT",
        'FREE_GAME_NAME_STRING': "FREE_GAME_NAME_STRING"
      };
      _0x5b93ad.AwardPayType = _0x5ea4de(_0x48afee);
      _0x5b93ad.COL = 0x3;
      _0x5b93ad.ROW = 0x8;
      _0x5b93ad.COL_CENTER = (_0x5b93ad.COL - 0x1) / 0x2;
      _0x5b93ad.ROW_CENTER = 0x3;
      _0x5b93ad.MultiLvl = [0x1, 0x3, 0x5, 0x9];
      _0x5b93ad.Award = {
        'ANY': 0x0,
        'COPPER': 0x1,
        'SILVER': 0x2,
        'GOLD': 0x3,
        'FA_FA_FA': 0x4
      };
      _0x5b93ad.PlateEftOdds = [0xf, 0x2d];
      _0x14471a = _0x46db50(_0x5b93ad.prototype, "SymbolSpriteFrame", [_0x46a650], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x4fc505 = _0x46db50(_0x5b93ad.prototype, "FreeSymbolSpriteFrame", [_0x5f13f9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x808cc6 = _0x46db50(_0x5b93ad.prototype, "UpgradeSymbolSripteFrame", [_0x1a87b8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x219cb9 = _0x46db50(_0x5b93ad.prototype, "TitleSpriteFrames", [_0x580f39], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0xb95a60 = _0x46db50(_0x5b93ad.prototype, "LeftSpriteFrames", [_0x40b6e8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x56875b = _0x46db50(_0x5b93ad.prototype, "RecordWinSpriteFrames", [_0x163e81], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x27c504 = _0x46db50(_0x5b93ad.prototype, "RecordBgSpriteFrames", [_0x23b379], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x40c24f = _0x46db50(_0x5b93ad.prototype, "UpgradeSpriteFrames", [_0x190a59], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x4630d7 = _0x1983aa(_0x5c37b7 = _0x5b93ad) || _0x5c37b7;
      var _0x4ca52e;
      var _0x46e83c;
      var _0x2c3fa1;
      var _0x4eb440;
      var _0x50acf3;
      var _0x3fc085;
      var _0x268292;
      var _0x238117;
      var _0x268614;
      var _0x243297;
      _0x294ebc._RF.pop();
      _0x294ebc._RF.push({}, "0ce2cBPjgdKuJnhwU+ShvdF", "Symbol", undefined);
      var _0x1f9a7e = ['Symbol04_Wild', 'Symbol04_Mutiply', "Symbol04_Loop"];
      var _0x34d5da = _0x5efef0.ccclass;
      var _0x46c0b0 = _0x5efef0.property;
      _0x4ca52e = _0x46c0b0({
        'type': _0x4d7b61.Skeleton,
        'tooltip': 'spine'
      });
      _0x46e83c = _0x46c0b0({
        'type': Boolean,
        'tooltip': '是否為wild'
      });
      _0x2c3fa1 = _0x46c0b0({
        'type': String,
        'tooltip': '中獎動畫名稱'
      });
      _0x4eb440 = _0x46c0b0({
        'type': _0x3597b3,
        'tooltip': '加倍提示，只有wild有用'
      });
      _0x3fc085 = function (_0x2b8dd9) {
        function _0x3d02ad() {
          var _0x460277;
          var _0x2c6786 = arguments.length;
          var _0x4912bf = new Array(_0x2c6786);
          for (var _0x26f0c7 = 0x0; _0x26f0c7 < _0x2c6786; _0x26f0c7++) {
            _0x4912bf[_0x26f0c7] = arguments[_0x26f0c7];
          }
          _0x460277 = _0x2b8dd9.call.apply(_0x2b8dd9, [this].concat(_0x4912bf)) || this;
          _0x5249a8(_0x460277, "m_spine", _0x268292, _0x499959(_0x460277));
          _0x5249a8(_0x460277, 'm_isWild', _0x238117, _0x499959(_0x460277));
          _0x5249a8(_0x460277, "m_animName", _0x268614, _0x499959(_0x460277));
          _0x5249a8(_0x460277, "m_multiLabel", _0x243297, _0x499959(_0x460277));
          _0x460277.m_stepList = null;
          return _0x460277;
        }
        _0x594013(_0x3d02ad, _0x2b8dd9);
        var _0x40a4e1 = _0x3d02ad.prototype;
        _0x40a4e1.ChangeSkeletonData = function (_0x2977d8) {
          this.m_spine.setSkeletonData(_0x2977d8);
        };
        _0x40a4e1.ShowWin = function (_0x196574, _0x563735) {
          var _0x5bb630 = this;
          return new Promise(_0x41d8bb(_0x5c8459().mark(function _0xb27a61(_0x482372) {
            var _0x270fc0;
            return _0x5c8459().wrap(function (_0x2a4ca0) {
              for (;;) {
                switch (_0x2a4ca0.prev = _0x2a4ca0.next) {
                  case 0x0:
                    _0x270fc0 = null;
                    if (_0x5bb630.m_isWild) {
                      _0x2a4ca0.next = 0x6;
                      break;
                    }
                    if ('' !== _0x5bb630.m_animName) {
                      _0x270fc0 = _0x5bb630.m_spine.setAnimation(0x0, _0x5bb630.m_animName, true);
                    }
                    if (_0x270fc0) {
                      _0x5bb630.m_spine.setTrackCompleteListener(_0x270fc0, function () {
                        _0x482372();
                      });
                    } else {
                      _0x5bb630.m_spine.setCompleteListener(function () {
                        _0x482372();
                        _0x5bb630.m_spine.setCompleteListener(null);
                      });
                    }
                    _0x2a4ca0.next = 0xb;
                    break;
                  case 0x6:
                    _0x5bb630.m_stepList = JSON.parse(JSON.stringify(_0x1f9a7e));
                    _0x5bb630.m_multiLabel.string = 'X' + _0x4630d7.MultiLvl[_0x196574].toString();
                    _0x2a4ca0.next = 0xa;
                    return _0x5bb630.ShowWild(_0x196574, _0x563735);
                  case 0xa:
                    _0x482372();
                  case 0xb:
                  case "end":
                    return _0x2a4ca0.stop();
                }
              }
            }, _0xb27a61);
          })));
        };
        _0x40a4e1.ShowWild = function (_0xfb0aad, _0x42e1bf) {
          var _0x54412e = this;
          return new Promise(_0x41d8bb(_0x5c8459().mark(function _0x488fd1(_0x392773) {
            var _0x400e86;
            var _0x34d6bb;
            var _0xe589e6;
            var _0x30cd2f;
            return _0x5c8459().wrap(function (_0x4271cd) {
              for (;;) {
                switch (_0x4271cd.prev = _0x4271cd.next) {
                  case 0x0:
                    if (!(_0xfb0aad > 0x0 && _0x42e1bf)) {
                      _0x4271cd.next = 0x14;
                      break;
                    }
                    if (!(_0x400e86 = _0x54412e.m_stepList.shift())) {
                      _0x4271cd.next = 0x12;
                      break;
                    }
                    _0x34d6bb = _0x54412e.m_spine.findAnimation(_0x400e86);
                    _0xe589e6 = 0x0;
                    if (_0x34d6bb) {
                      _0xe589e6 = _0x34d6bb.duration;
                    }
                    _0x54412e.m_spine.setAnimation(0x0, _0x400e86, 0x0 === _0x54412e.m_stepList.length);
                    if (_0x400e86 === 'Symbol04_Mutiply') {
                      _0x54412e.node.getComponent(_0x5bbe42).play("Symbol_04_Mutiply");
                      _0x54412e.node.getComponent(_0x5bbe42).getState("Symbol_04_Mutiply");
                      _0x1b53d9.Play(_0x4630d7.AudioClips.Wild_open);
                    }
                    if (_0x400e86 === "Symbol04_Loop") {
                      _0x4271cd.next = 0xb;
                      break;
                    }
                    _0x4271cd.next = 0xb;
                    return _0x4630d7.Wait(_0x54412e, _0xe589e6);
                  case 0xb:
                    if (_0x400e86 === 'Symbol04_Mutiply') {
                      _0x1b53d9.Play(_0x4630d7.AudioClips.Wild_count);
                    }
                    if (!(_0x54412e.m_stepList.length > 0x0)) {
                      _0x4271cd.next = 0x11;
                      break;
                    }
                    _0x4271cd.next = 0xf;
                    return _0x54412e.ShowWild(_0xfb0aad, _0x42e1bf).then(function () {
                      _0x392773();
                    });
                  case 0xf:
                    _0x4271cd.next = 0x12;
                    break;
                  case 0x11:
                    _0x392773();
                  case 0x12:
                    _0x4271cd.next = 0x16;
                    break;
                  case 0x14:
                    if (_0x30cd2f = _0x54412e.m_spine.setAnimation(0x0, 'Symbol04_Wild', true)) {
                      _0x54412e.m_spine.setTrackCompleteListener(_0x30cd2f, function () {
                        _0x392773();
                      });
                    } else {
                      _0x54412e.m_spine.setCompleteListener(function () {
                        _0x392773();
                        _0x54412e.m_spine.setCompleteListener(null);
                      });
                    }
                  case 0x16:
                  case "end":
                    return _0x4271cd.stop();
                }
              }
            }, _0x488fd1);
          })));
        };
        return _0x3d02ad;
      }(_0x2f6eb4);
      _0x268292 = _0x46db50(_0x3fc085.prototype, "m_spine", [_0x4ca52e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x238117 = _0x46db50(_0x3fc085.prototype, "m_isWild", [_0x46e83c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      _0x268614 = _0x46db50(_0x3fc085.prototype, "m_animName", [_0x2c3fa1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return '';
        }
      });
      _0x243297 = _0x46db50(_0x3fc085.prototype, "m_multiLabel", [_0x4eb440], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x53c8af = _0x34d5da(_0x50acf3 = _0x3fc085) || _0x50acf3;
      var _0x4dcbe2;
      var _0x45289e;
      var _0x3443b9;
      var _0x103f23;
      _0x294ebc._RF.pop();
      _0x294ebc._RF.push({}, 'de1aaExEWJCBJJPIQtgtAI4', "SlotReels", undefined);
      var _0xf9b225 = _0x5efef0.ccclass;
      var _0x17aa3d = _0x5efef0.property;
      var _0x3d107d = 0.26;
      _0x4dcbe2 = _0x17aa3d(_0x5f03c6);
      _0x3443b9 = function (_0x1123bc) {
        function _0x3fa1d2() {
          var _0x22873e;
          var _0x5656b7 = arguments.length;
          var _0x38bbe2 = new Array(_0x5656b7);
          for (var _0x33435f = 0x0; _0x33435f < _0x5656b7; _0x33435f++) {
            _0x38bbe2[_0x33435f] = arguments[_0x33435f];
          }
          _0x22873e = _0x1123bc.call.apply(_0x1123bc, [this].concat(_0x38bbe2)) || this;
          _0x5249a8(_0x22873e, 'm_symbolPrefabs', _0x103f23, _0x499959(_0x22873e));
          _0x22873e.m_gameView = null;
          _0x22873e.m_symbolSize = null;
          _0x22873e.m_viewSize = null;
          _0x22873e.m_reelPositionOffset = [_0x3840c8(0x0, 0xb), _0x3840c8(0x0, 0xb), _0x3840c8(0x0, 0xb)];
          _0x22873e.m_symbol = new Array();
          _0x22873e.m_plateInfo = [[0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0], [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0], [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]];
          _0x22873e.m_fakePlate = [[0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2, 0x2, 0x3, 0x3, 0x3, 0x3, 0x4], [0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2, 0x2, 0x3, 0x3, 0x3, 0x3, 0x4, 0x4], [0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2, 0x2, 0x3, 0x3, 0x3, 0x3, 0x4]];
          _0x22873e.m_reelStopTime = new Array();
          _0x22873e.m_isChangeSymbol = new Array();
          _0x22873e.m_isChangeToFinalSymbol = new Array();
          _0x22873e.m_time = 0x0;
          _0x22873e.m_stopTime = 0x0;
          _0x22873e.m_riseTime = 0x0;
          _0x22873e.m_spinBufferTime01 = 0.05;
          _0x22873e.m_spinBufferTime02 = 0.18;
          _0x22873e.m_spinSpeed = 0.18;
          _0x22873e.m_upLength = 0x0;
          _0x22873e.m_numberOfSymbol = 0x0;
          _0x22873e.m_downLength = 0x14;
          _0x22873e.m_timesOfBaseSpin = 0x1;
          _0x22873e.m_spinIntervalTimes = 0.5;
          _0x22873e.m_spinDelayTime = 0x0;
          _0x22873e.m_isStop = false;
          _0x22873e.m_isClickStopBtn = false;
          _0x22873e.m_isPlayFirstSound = false;
          _0x22873e.m_playStopSound = null;
          _0x22873e.m_isPlaySound = [false, false, false, false, false];
          _0x22873e.m_reelSoundId = null;
          _0x22873e.m_lockColumn = new Array();
          _0x22873e.m_isAward = false;
          _0x22873e.m_reelPreTime = new Array();
          _0x22873e.m_relativeHeight = 262.5;
          _0x22873e.m_skewRate = 0xa / _0x22873e.m_relativeHeight;
          _0x22873e.m_scaleStandard = 0x1;
          _0x22873e.m_scaleStandardDiff = 0.1;
          _0x22873e.m_scaleRateX = 0.85;
          _0x22873e.m_scaleRateY = 0.85;
          _0x22873e.m_positionRate = 0.00042;
          _0x22873e.m_hardStopIntervalTime = 0x0;
          _0x22873e.m_hardStopSpinSpeed = 0x0;
          return _0x22873e;
        }
        _0x594013(_0x3fa1d2, _0x1123bc);
        var _0x3962d8 = _0x3fa1d2.prototype;
        _0x3962d8.onLoad = function () {
          var _0x29cfe5 = this;
          this.m_viewSize = this.node.getComponent(_0x4d9594).contentSize;
          this.m_symbolSize = new _0x44dee0(this.m_viewSize.width / 0x3, 240);
          for (var _0x417756 = 0x0; _0x417756 < _0x4630d7.COL; _0x417756++) {
            this.m_lockColumn.push(false);
            this.m_reelStopTime.push(null);
            this.m_reelPreTime.push(null);
            var _0x1aa658 = new Array();
            for (var _0x3f5355 = 0x0; _0x3f5355 < _0x4630d7.ROW; _0x3f5355++) {
              var _0x1aa658;
              var _0x3f5355;
              var _0x2a7df4 = this.m_fakePlate[_0x417756][Math.floor(Math.random() * this.m_fakePlate[_0x417756].length)];
              if (_0x3f5355 % 0x2 != 0x0) {
                _0x2a7df4 = 0x0;
              }
              var _0x215fcf = _0x2c4cf1(this.m_symbolPrefabs[_0x2a7df4]);
              this.node.addChild(_0x215fcf);
              _0x215fcf.name = this.m_numberOfSymbol.toString();
              this.m_numberOfSymbol += 0x1;
              this.m_isChangeToFinalSymbol.push(false);
              _0x215fcf.getComponent(_0x53c8af);
              this.m_plateInfo[_0x417756][_0x3f5355] = _0x2a7df4;
              _0x1aa658.push(_0x215fcf);
              var _0x482336 = this.m_symbolSize.width * (_0x417756 + 0.5) + this.m_reelPositionOffset[_0x417756].x - this.m_viewSize.width / 0x2;
              var _0x1b3a86 = this.m_symbolSize.height / 0x2 * (_0x3f5355 - 1.5) + this.m_reelPositionOffset[_0x417756].y - this.m_viewSize.height / 0x2;
              _0x215fcf.setPosition(_0x6a930a(_0x482336, _0x1b3a86));
            }
            this.m_symbol.push(_0x1aa658);
          }
          for (var _0x219d49 = 0x0; _0x219d49 < _0x4630d7.COL; _0x219d49++) {
            for (var _0x553075 = 0x0; _0x553075 < _0x4630d7.ROW; _0x553075++) {
              this.SetRadian(_0x219d49, _0x553075);
            }
          }
          var _0x8b2bb6 = function () {
            var _0x47fa0c = _0x2ef38d.TempoSetting.Crazy777;
            _0x29cfe5.m_riseTime = _0x47fa0c.BASE.RISE_TIME;
            _0x29cfe5.m_upLength = _0x47fa0c.BASE.UP_LENGTH;
            _0x29cfe5.m_spinBufferTime01 = _0x47fa0c.BASE.SPIN_BUFFER_TIME_01;
            _0x29cfe5.m_spinBufferTime02 = _0x47fa0c.BASE.SPIN_BUFFER_TIME_02;
            _0x29cfe5.m_downLength = _0x47fa0c.BASE.DOWN_LENGTH;
            _0x29cfe5.m_spinSpeed = _0x47fa0c.BASE.SPIN_SPEED;
            _0x29cfe5.m_timesOfBaseSpin = _0x47fa0c.BASE.TIMES_OF_BASE_SPIN;
            _0x29cfe5.m_spinIntervalTimes = _0x47fa0c.BASE.SPIN_INTERVAL_TIMES;
            _0x29cfe5.m_spinDelayTime = _0x47fa0c.BASE.SPIN_DELAY_TIME;
            _0x29cfe5.m_hardStopIntervalTime = _0x47fa0c.BASE.HARD_STOP_INTERVAL_TIME;
            _0x29cfe5.m_hardStopSpinSpeed = _0x47fa0c.BASE.HARD_STOP_SPIN_SPEED;
            _0x3d107d = _0x47fa0c.BASE.SPIN_SPEED;
          };
          _0x8b2bb6();
          _0x2ef38d.AddCb(_0x8b2bb6);
        };
        _0x3962d8.Init = function (_0x218299) {
          this.m_gameView = _0x218299;
        };
        _0x3962d8.StartSpin = function (_0x4851cb) {
          if (undefined === _0x4851cb) {
            _0x4851cb = true;
          }
          _0x39ba17('StartSpin');
          this.m_spinSpeed = _0x3d107d;
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isPlayFirstSound = false;
          this.m_isPlaySound = [false, false, false, false, false];
          if (_0x4851cb) {
            for (var _0x14b3fb = 0x0; _0x14b3fb < _0x4630d7.COL; _0x14b3fb++) {
              this.m_lockColumn[_0x14b3fb] = false;
            }
          }
          for (var _0x494fd9 = 0x0; _0x494fd9 < _0x4630d7.COL; _0x494fd9++) {
            this.m_reelStopTime[_0x494fd9] = null;
            this.m_reelPreTime[_0x494fd9] = null;
          }
          for (var _0xe90e12 = 0x0; _0xe90e12 < this.m_isChangeToFinalSymbol.length; _0xe90e12++) {
            this.m_isChangeToFinalSymbol[_0xe90e12] = false;
          }
          for (var _0x5efbad = 0x0; _0x5efbad < _0x4630d7.COL * _0x4630d7.ROW; _0x5efbad++) {
            this.m_isChangeSymbol.push(true);
          }
          if (!this.m_gameView.IsHardStop) {
            this.m_reelSoundId = _0x1b53d9.Play(_0x4630d7.AudioClips.Mg_reel, false, null, 0.5);
          }
        };
        _0x3962d8.SetIsClickStopBtn = function (_0x220d49) {
          if (undefined === _0x220d49) {
            _0x220d49 = false;
          }
          if (!this.m_isClickStopBtn && (this.m_isClickStopBtn = true, 0x0 != this.m_stopTime && _0x220d49)) {
            var _0x2e1ce4 = _0x2ef38d.TempoSetting.Crazy777.SPEED_UP_STOP_TIME(_0x4630d7.COL, this.m_time);
            this.m_spinSpeed = this.m_hardStopSpinSpeed;
            var _0x5f4ef8 = Math.ceil(this.m_time / this.m_spinSpeed);
            if (_0x2e1ce4 < this.m_stopTime) {
              this.m_stopTime = _0x456e41.strip(_0x2e1ce4);
            }
            for (var _0x4c9e45 = 0x0; _0x4c9e45 < _0x4630d7.COL; _0x4c9e45++) {
              var _0x49f8cb = _0x5f4ef8 * this.m_spinSpeed + this.m_hardStopIntervalTime * this.m_spinSpeed * _0x4c9e45;
              if (this.m_reelStopTime[_0x4c9e45] > _0x49f8cb) {
                this.m_reelStopTime[_0x4c9e45] = _0x456e41.strip(_0x49f8cb);
                this.m_reelPreTime[_0x4c9e45] = (_0x5f4ef8 - 0x1) * this.m_spinSpeed;
              }
            }
          }
        };
        _0x3962d8.Spin = function (_0x435ddc) {
          this.m_time = _0x456e41.strip(this.m_time + _0x435ddc);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple(_0x435ddc);
            if (this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime) {
              this.m_isStop = true;
              if (this.m_reelSoundId) {
                _0x1b53d9.Stop(this.m_reelSoundId);
                this.m_reelSoundId = null;
              }
            }
          }
        };
        _0x3962d8.Spin_RealSpinMultiple = function (_0x253f6d) {
          var _0x530503 = this.m_symbolSize.height * (_0x4630d7.ROW / 0x2);
          for (var _0xecd736 = 0x0; _0xecd736 < _0x4630d7.COL; _0xecd736++) {
            var _0xcd9195 = this.m_spinSpeed;
            var _0x262849 = this.m_time;
            var _0x1f3ce3 = this.m_reelStopTime[_0xecd736];
            var _0x51b90f = this.m_reelPreTime[_0xecd736];
            var _0x1641d7 = this.m_riseTime * _0x4630d7.COL;
            for (var _0x82a7d4 = 0x0; _0x82a7d4 < _0x4630d7.ROW; _0x82a7d4++) {
              _0x4630d7.ROW;
              var _0x583079 = this.m_symbolSize.width * (_0xecd736 + 0.5) + this.m_reelPositionOffset[_0xecd736].x - this.m_viewSize.width / 0x2;
              var _0x6d699e = this.m_symbolSize.height / 0x2 * (_0x82a7d4 - 1.5) + this.m_reelPositionOffset[_0xecd736].y - this.m_viewSize.height / 0x2;
              var _0x494ac5 = this.m_symbolSize.height * (_0x82a7d4 / 0x2 + 0.5);
              if (_0x262849 < this.m_riseTime * (_0xecd736 + 0x1)) {
                var _0xd76c3e = (_0x262849 - this.m_riseTime * _0xecd736) / this.m_riseTime * this.m_upLength;
                this.m_symbol[_0xecd736][_0x82a7d4].setPosition(_0x583079, _0x6d699e + _0xd76c3e);
              } else {
                if (_0x262849 < _0x1641d7) {
                  this.m_symbol[_0xecd736][_0x82a7d4].setPosition(_0x583079, _0x6d699e + this.m_upLength);
                } else {
                  if (null == _0x1f3ce3 || _0x262849 < _0x51b90f + _0x1641d7) {
                    var _0x2cfd34 = (_0x262849 - _0x1641d7) % _0xcd9195 / _0xcd9195 * this.m_symbolSize.height * _0x4630d7.ROW / 0x2;
                    var _0x27b91a = this.GetMovelength(_0x2cfd34, _0x494ac5, _0x530503, _0xecd736, _0x82a7d4, Number(this.m_symbol[_0xecd736][_0x82a7d4].name), this.m_symbol[_0xecd736][_0x82a7d4], false);
                    this.m_symbol[_0xecd736][_0x82a7d4].setPosition(_0x583079, _0x6d699e - _0x27b91a);
                  } else {
                    if (_0x262849 < _0x1f3ce3 + _0x1641d7) {
                      var _0x240e36 = (_0x262849 - _0x1641d7) % _0xcd9195 / _0xcd9195 * this.m_symbolSize.height * _0x4630d7.ROW / 0x2;
                      var _0x5e6e0b = this.GetMovelength(_0x240e36, _0x494ac5, _0x530503, _0xecd736, _0x82a7d4, Number(this.m_symbol[_0xecd736][_0x82a7d4].name), this.m_symbol[_0xecd736][_0x82a7d4], false);
                      this.m_symbol[_0xecd736][_0x82a7d4].setPosition(_0x583079, _0x6d699e - _0x5e6e0b);
                    } else {
                      if (_0x262849 < _0x1f3ce3 + _0x1641d7 + this.m_spinBufferTime01 && !this.m_isClickStopBtn) {
                        this.CheckPlayStopSound(_0xecd736, _0x82a7d4);
                        var _0xe63563 = (_0x262849 - _0x1f3ce3 - _0x1641d7) / this.m_spinBufferTime01 * this.m_downLength;
                        this.m_symbol[_0xecd736][_0x82a7d4].setPosition(_0x583079, _0x6d699e - _0xe63563);
                      } else {
                        if (_0x262849 < _0x1f3ce3 + _0x1641d7 + this.m_spinBufferTime01 + this.m_spinBufferTime02 && !this.m_isClickStopBtn) {
                          this.CheckPlayStopSound(_0xecd736, _0x82a7d4);
                          var _0x4623a3 = (_0x262849 - _0x1f3ce3 - _0x1641d7 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                          this.m_symbol[_0xecd736][_0x82a7d4].setPosition(_0x583079, _0x6d699e - this.m_downLength + _0x4623a3);
                        } else {
                          this.CheckChangeToFinalSymbol(_0xecd736, _0x82a7d4, Number(this.m_symbol[_0xecd736][_0x82a7d4].name), this.m_symbol[_0xecd736][_0x82a7d4], true);
                          this.CheckPlayStopSound(_0xecd736, _0x82a7d4);
                          this.m_symbol[_0xecd736][_0x82a7d4].setPosition(_0x583079, _0x6d699e);
                        }
                      }
                    }
                  }
                }
              }
              this.SetRadian(_0xecd736, _0x82a7d4);
            }
          }
        };
        _0x3962d8.GetMovelength = function (_0x2107b0, _0x2400b7, _0x195343, _0x5c4018, _0x40a151, _0x3ad230, _0x536a81, _0x4d4071) {
          if (_0x2107b0 >= _0x2400b7) {
            _0x2107b0 -= _0x195343;
            if (this.m_isChangeSymbol[_0x3ad230]) {
              this.m_isChangeSymbol[_0x3ad230] = false;
              this.ChangeSymbol(_0x5c4018, _0x40a151, _0x536a81, _0x4d4071);
            }
          } else {
            this.m_isChangeSymbol[_0x3ad230] = true;
          }
          return _0x2107b0;
        };
        _0x3962d8.ChangeSymbol = function (_0x36bff7, _0x4cebb7, _0x2f830e, _0x2b2b41) {
          var _0x3296bd = this.m_reelPreTime[_0x36bff7];
          var _0x1bde56 = this.m_reelStopTime[_0x36bff7];
          var _0x339790 = this.m_symbol[_0x36bff7][_0x4cebb7].name;
          var _0x5e9889 = this.m_symbol[_0x36bff7][_0x4cebb7].active;
          if (_0x1bde56) {
            this.m_spinSpeed;
          }
          this.m_riseTime;
          _0x4630d7.ROW;
          this.m_isClickStopBtn;
          this.m_symbol[_0x36bff7][_0x4cebb7].removeFromParent();
          this.m_symbol[_0x36bff7][_0x4cebb7].destroy();
          if (_0x2b2b41) {
            var _0x4704e6 = this.m_plateInfo[_0x36bff7][_0x4cebb7];
            this.m_symbol[_0x36bff7][_0x4cebb7] = _0x2c4cf1(this.m_symbolPrefabs[_0x4704e6]);
            this.node.addChild(this.m_symbol[_0x36bff7][_0x4cebb7]);
          } else {
            if (_0x3296bd && (this.m_time >= _0x3296bd || Math.abs(this.m_time - _0x3296bd) < 0.017)) {
              var _0x429944 = this.m_plateInfo[_0x36bff7][_0x4cebb7];
              this.m_symbol[_0x36bff7][_0x4cebb7] = _0x2c4cf1(this.m_symbolPrefabs[_0x429944]);
              this.node.addChild(this.m_symbol[_0x36bff7][_0x4cebb7]);
            } else {
              var _0x113b9e = 0x0;
              if (_0x4cebb7 % 0x2 == 0x0) {
                _0x113b9e = this.m_fakePlate[_0x36bff7][Math.floor(0x64 * Math.random()) % this.m_fakePlate[_0x36bff7].length];
              }
              this.m_symbol[_0x36bff7][_0x4cebb7] = _0x2c4cf1(this.m_symbolPrefabs[_0x113b9e]);
              this.node.addChild(this.m_symbol[_0x36bff7][_0x4cebb7]);
            }
          }
          this.m_symbol[_0x36bff7][_0x4cebb7].active = _0x5e9889;
          this.m_symbol[_0x36bff7][_0x4cebb7].name = _0x339790;
        };
        _0x3962d8.CheckChangeToFinalSymbol = function (_0x111f10, _0x4e777f, _0x531be0, _0x2e3fa4, _0x42a342) {
          if (undefined === _0x42a342) {
            _0x42a342 = false;
          }
          if (!this.m_isChangeToFinalSymbol[_0x531be0]) {
            this.m_isChangeToFinalSymbol[_0x531be0] = true;
            this.ChangeSymbol(_0x111f10, _0x4e777f, _0x2e3fa4, _0x42a342);
          }
        };
        _0x3962d8.SetPlayStopSoundFunction = function (_0x125e34) {
          this.m_playStopSound = _0x125e34;
        };
        _0x3962d8.CheckPlayStopSound = function (_0x1bcd96, _0x58096f) {
          if (this.m_playStopSound && !this.m_isPlaySound[_0x1bcd96] && 0x0 == _0x58096f) {
            this.m_isPlaySound[_0x1bcd96] = true;
            if (this.m_isClickStopBtn) {
              if (!this.m_isPlayFirstSound) {
                this.m_isPlayFirstSound = true;
                this.m_playStopSound(_0x1bcd96);
              }
            } else {
              this.m_playStopSound(_0x1bcd96);
            }
          }
        };
        _0x3962d8.SetPlateInfo = function (_0x27887e) {
          this.m_isAward = this.CheckAward(_0x27887e);
          this.m_plateInfo = this.CompletePlate(_0x27887e);
          var _0x587ae4 = this.m_riseTime * _0x4630d7.ROW;
          var _0x28be9c = Math.floor((this.m_time - _0x587ae4) / this.m_spinSpeed) + 0x2;
          if (_0x28be9c < 0x2) {
            _0x28be9c = 0x2;
          }
          if (this.m_isClickStopBtn) {
            this.m_stopTime = _0x456e41.strip(this.m_spinSpeed * _0x28be9c + this.m_spinDelayTime + _0x587ae4);
            for (var _0x4f64af = 0x0; _0x4f64af < _0x4630d7.COL; _0x4f64af++) {
              this.m_reelStopTime[_0x4f64af] = _0x456e41.strip(this.m_spinSpeed * _0x28be9c);
              this.m_reelPreTime[_0x4f64af] = _0x456e41.strip(this.m_spinSpeed * (_0x28be9c - 0x1));
            }
          } else {
            this.m_stopTime = _0x456e41.strip(this.m_spinSpeed * (_0x28be9c + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0x4630d7.COL - 0x1) + this.m_spinDelayTime + _0x587ae4 + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var _0x2f1878 = 0x0; _0x2f1878 < _0x4630d7.COL; _0x2f1878++) {
              this.m_reelStopTime[_0x2f1878] = _0x456e41.strip(this.m_spinSpeed * (_0x28be9c + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * _0x2f1878);
              this.m_reelPreTime[_0x2f1878] = _0x456e41.strip(this.m_spinSpeed * (_0x28be9c + this.m_timesOfBaseSpin - 0x1) + this.m_spinIntervalTimes * this.m_spinSpeed * _0x2f1878);
            }
          }
        };
        _0x3962d8.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x3962d8.GetSymbolByIndex = function (_0xa6a2c4) {
          return this.m_symbol[_0xa6a2c4.x][_0xa6a2c4.y];
        };
        _0x3962d8.LockColumn = function (_0x448be7) {
          if (_0x448be7 >= 0x0 && _0x448be7 < _0x4630d7.COL) {
            this.m_lockColumn[_0x448be7] = true;
          }
        };
        _0x3962d8.CompletePlate = function (_0x1cf3f7) {
          for (var _0x4c2274 = 0x0; _0x4c2274 < _0x4630d7.COL; _0x4c2274++) {
            for (var _0x1b6b7e = 0x0; _0x1b6b7e < _0x4630d7.ROW; _0x1b6b7e++) {
              if (_0x1b6b7e == _0x4630d7.ROW_CENTER) {
                if (_0x1cf3f7[_0x4c2274] >= 0x4) {
                  this.m_plateInfo[_0x4c2274][_0x1b6b7e] = 0x4;
                } else {
                  this.m_plateInfo[_0x4c2274][_0x1b6b7e] = _0x1cf3f7[_0x4c2274];
                }
              } else {
                if (0x1 == Math.abs(_0x1b6b7e - _0x4630d7.ROW_CENTER) && _0x1cf3f7[_0x4c2274] == 0x0 || 0x2 == Math.abs(_0x1b6b7e - _0x4630d7.ROW_CENTER) && _0x1cf3f7[_0x4c2274] != 0x0 || 0x3 == Math.abs(_0x1b6b7e - _0x4630d7.ROW_CENTER) && _0x1cf3f7[_0x4c2274] == 0x0) {
                  var _0x53f2f1 = this.m_fakePlate[_0x4c2274][Math.floor(0x64 * Math.random()) % this.m_fakePlate[_0x4c2274].length];
                  this.m_plateInfo[_0x4c2274][_0x1b6b7e] = _0x53f2f1;
                } else {
                  this.m_plateInfo[_0x4c2274][_0x1b6b7e] = 0x0;
                }
              }
            }
          }
          return this.m_plateInfo;
        };
        _0x3962d8.ActiveAwardSymbol = function (_0x171ca9, _0x556cee) {
          if (this.m_isAward) {
            this.m_symbol[_0x556cee][_0x4630d7.ROW_CENTER].active = _0x171ca9;
          }
        };
        _0x3962d8.CheckAward = function (_0x4a41aa) {
          var _0x2f6795 = true;
          for (var _0x116a08 = 0x0; _0x116a08 < _0x4a41aa.length; _0x116a08++) {
            if (_0x4a41aa[_0x116a08] == 0x0) {
              _0x2f6795 = false;
              break;
            }
          }
          return _0x2f6795;
        };
        _0x3962d8.GetAwardSymbolPosition = function (_0xba066a) {
          return this.m_symbol[_0xba066a][_0x4630d7.ROW_CENTER].getPosition();
        };
        _0x3962d8.SetRadian = function (_0x30d51a, _0xc1f644) {
          var _0x45b243 = _0x4630d7.COL_CENTER - _0x30d51a;
          var _0xb1a826 = this.m_symbol[_0x30d51a][_0xc1f644].getPosition();
          var _0x3a6eb5 = 0x0;
          if (0x0 != _0x45b243) {
            this.m_symbol[_0x30d51a][_0xc1f644].setPosition(_0xb1a826.x + _0x45b243 * this.m_positionRate * Math.pow(_0xb1a826.y, 0x2), _0xb1a826.y);
          }
          if (0x0 == _0x45b243 && _0xc1f644 == _0x4630d7.ROW_CENTER && this.m_plateInfo[_0x30d51a][_0xc1f644] >= 0x4) {
            _0x3a6eb5 = this.m_scaleStandardDiff;
          }
          var _0x2aa523 = this.m_scaleStandard + _0x3a6eb5 - Math.abs(_0xb1a826.y) * (this.m_scaleStandard + _0x3a6eb5 - this.m_scaleRateX) / this.m_relativeHeight;
          var _0x1c0c63 = this.m_scaleStandard + _0x3a6eb5 - Math.abs(_0xb1a826.y) * (this.m_scaleStandard + _0x3a6eb5 - this.m_scaleRateY) / this.m_relativeHeight;
          this.m_symbol[_0x30d51a][_0xc1f644].setScale(_0x2aa523, _0x1c0c63, 0x0);
        };
        _0x3962d8.SetPlateSymbol = function (_0x19f570) {
          if (0x0 == _0x19f570.length) {
            for (var _0x21a61d = 0x0; _0x21a61d < _0x4630d7.COL; _0x21a61d++) {
              this.m_lockColumn[_0x21a61d] = false;
              this.m_reelStopTime[_0x21a61d] = null;
              this.m_reelPreTime[_0x21a61d] = null;
              for (var _0x155955 = 0x0; _0x155955 < _0x4630d7.ROW; _0x155955++) {
                var _0x2872be = this.m_plateInfo[_0x21a61d][_0x155955];
                var _0x173fe7 = this.m_symbol[_0x21a61d][_0x155955].name;
                this.m_symbol[_0x21a61d][_0x155955].removeFromParent();
                this.m_symbol[_0x21a61d][_0x155955].destroy();
                this.m_symbol[_0x21a61d][_0x155955] = _0x2c4cf1(this.m_symbolPrefabs[_0x2872be]);
                this.node.addChild(this.m_symbol[_0x21a61d][_0x155955]);
                var _0x3ba37d = this.m_symbolSize.width * (_0x21a61d + 0.5) + this.m_reelPositionOffset[_0x21a61d].x - this.m_viewSize.width / 0x2;
                var _0x26293a = this.m_symbolSize.height / 0x2 * (_0x155955 - 1.5) + this.m_reelPositionOffset[_0x21a61d].y - this.m_viewSize.height / 0x2;
                this.m_symbol[_0x21a61d][_0x155955].setPosition(_0x6a930a(_0x3ba37d, _0x26293a, 0x0));
                this.m_symbol[_0x21a61d][_0x155955].name = _0x173fe7;
              }
            }
          } else {
            var _0x2ec8e9 = this.CompletePlate(_0x19f570);
            for (var _0x49b1cc = 0x0; _0x49b1cc < _0x4630d7.COL; _0x49b1cc++) {
              this.m_lockColumn[_0x49b1cc] = false;
              this.m_reelStopTime[_0x49b1cc] = null;
              this.m_reelPreTime[_0x49b1cc] = null;
              for (var _0x46f6c6 = 0x0; _0x46f6c6 < _0x4630d7.ROW; _0x46f6c6++) {
                var _0x524982 = this.m_symbol[_0x49b1cc][_0x46f6c6].name;
                this.m_symbol[_0x49b1cc][_0x46f6c6].removeFromParent();
                this.m_symbol[_0x49b1cc][_0x46f6c6].destroy();
                this.m_symbol[_0x49b1cc][_0x46f6c6] = _0x2c4cf1(this.m_symbolPrefabs[_0x2ec8e9[_0x49b1cc][_0x46f6c6]]);
                this.node.addChild(this.m_symbol[_0x49b1cc][_0x46f6c6]);
                var _0x18f30a = this.m_symbolSize.width * (_0x49b1cc + 0.5) + this.m_reelPositionOffset[_0x49b1cc].x - this.m_viewSize.width / 0x2;
                var _0x534cbc = this.m_symbolSize.height / 0x2 * (_0x46f6c6 - 1.5) + this.m_reelPositionOffset[_0x49b1cc].y - this.m_viewSize.height / 0x2;
                this.m_symbol[_0x49b1cc][_0x46f6c6].setPosition(_0x6a930a(_0x18f30a, _0x534cbc, 0x0));
                this.m_symbol[_0x49b1cc][_0x46f6c6].name = _0x524982;
              }
            }
          }
          for (var _0x358527 = 0x0; _0x358527 < _0x4630d7.COL; _0x358527++) {
            for (var _0x4abead = 0x0; _0x4abead < _0x4630d7.ROW; _0x4abead++) {
              this.SetRadian(_0x358527, _0x4abead);
            }
          }
        };
        return _0x3fa1d2;
      }(_0x2f6eb4);
      _0x103f23 = _0x46db50(_0x3443b9.prototype, "m_symbolPrefabs", [_0x4dcbe2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x225bb3 = _0xf9b225(_0x45289e = _0x3443b9) || _0x45289e;
      var _0x168755;
      var _0x1a8ada;
      var _0x4c1ea2;
      var _0x4cdff0;
      var _0x51c34f;
      var _0x445d98;
      var _0x351a50;
      var _0x16af92;
      var _0x2633d9;
      var _0x544ede;
      var _0x3e9e72;
      _0x294ebc._RF.pop();
      _0x294ebc._RF.push({}, "0eb65MCx2hPgakNMH1hlLym", "EffectPlate", undefined);
      var _0x30cb8e = _0x5efef0.property;
      var _0x30c462 = ["Pay_05", 'Pay_04', "Pay_03", "Pay_02", "Pay_01"];
      var _0x3f80df = {};
      _0x168755 = _0x30cb8e({
        'type': _0x225bb3,
        'tooltip': '轉輪'
      });
      _0x1a8ada = _0x30cb8e({
        'type': _0xd895a,
        'tooltip': "symbol相關表演的節點"
      });
      _0x4c1ea2 = _0x30cb8e({
        'type': _0xd895a,
        'tooltip': "pay相關表演的節點"
      });
      _0x4cdff0 = _0x30cb8e({
        'type': _0x5f03c6,
        'tooltip': "pay動畫"
      });
      _0x51c34f = _0x30cb8e({
        'type': _0x22bada,
        'tooltip': "小的X"
      });
      _0x3e9e72 = function (_0x3dc367) {
        function _0x5d856a() {
          var _0x1be2ab;
          var _0x594bc0 = arguments.length;
          var _0x1382f5 = new Array(_0x594bc0);
          for (var _0x4de485 = 0x0; _0x4de485 < _0x594bc0; _0x4de485++) {
            _0x1382f5[_0x4de485] = arguments[_0x4de485];
          }
          _0x1be2ab = _0x3dc367.call.apply(_0x3dc367, [this].concat(_0x1382f5)) || this;
          _0x5249a8(_0x1be2ab, "m_slotReels", _0x445d98, _0x499959(_0x1be2ab));
          _0x5249a8(_0x1be2ab, 'm_effectNode', _0x351a50, _0x499959(_0x1be2ab));
          _0x5249a8(_0x1be2ab, "m_payframe", _0x16af92, _0x499959(_0x1be2ab));
          _0x5249a8(_0x1be2ab, "m_payEffectPrefabs", _0x2633d9, _0x499959(_0x1be2ab));
          _0x5249a8(_0x1be2ab, "m_multiplySpriteFrame", _0x544ede, _0x499959(_0x1be2ab));
          _0x1be2ab.m_hintEffects = new Array();
          _0x1be2ab.m_symbolEffects = new Array();
          _0x1be2ab.m_wildLoopEffects = new Array();
          _0x1be2ab.m_multiplyLevel = 0x0;
          _0x1be2ab.m_isMidWild = false;
          _0x1be2ab.m_gameView = null;
          _0x1be2ab.m_winningSoundCount = 0x0;
          return _0x1be2ab;
        }
        _0x594013(_0x5d856a, _0x3dc367);
        var _0x1eea08 = _0x5d856a.prototype;
        _0x1eea08.onLoad = function () {
          for (var _0x5f5174 = 0x0; _0x5f5174 < _0x4630d7.COL; _0x5f5174++) {
            var _0x3fd5c0 = new Array();
            for (var _0x20208c = 0x0; _0x20208c < _0x4630d7.ROW; _0x20208c++) {
              _0x3fd5c0.push(null);
            }
            this.m_symbolEffects.push(_0x3fd5c0);
          }
          for (var _0x12d570 = 0x0; _0x12d570 < _0x4630d7.COL; _0x12d570++) {
            var _0x151242 = new Array();
            for (var _0x57e2d8 = 0x0; _0x57e2d8 < _0x4630d7.ROW; _0x57e2d8++) {
              _0x151242.push(null);
            }
            this.m_wildLoopEffects.push(_0x151242);
          }
          for (var _0x488c55 = 0x0; _0x488c55 < _0x4630d7.COL; _0x488c55++) {
            this.m_hintEffects.push(null);
          }
          _0x3f80df[_0x13e604.Lang.EN] = 0x0;
          _0x3f80df[_0x13e604.Lang.CN] = 0x1;
        };
        _0x1eea08.start = function () {};
        _0x1eea08.Init = function (_0xb2ace1) {
          this.m_gameView = _0xb2ace1;
        };
        _0x1eea08.ShowSymbolEffect = function (_0x11dce0, _0x5bd553, _0x388c64, _0x514b26, _0x241340) {
          var _0xf8826b = this;
          return new Promise(_0x41d8bb(_0x5c8459().mark(function _0x483f0c(_0x29b465) {
            var _0x30b151;
            var _0x33213b;
            var _0x3bac4c;
            var _0x3407c7;
            var _0x12af9d;
            return _0x5c8459().wrap(function (_0x482eec) {
              for (;;) {
                switch (_0x482eec.prev = _0x482eec.next) {
                  case 0x0:
                    _0xf8826b.m_multiplyLevel = _0x388c64;
                    _0xf8826b.CheckWildWin(_0x11dce0);
                    _0xf8826b.PlayAwardMusic(_0x5bd553);
                    _0x30b151 = 0x0;
                    _0x33213b = new Array();
                    for (_0x3bac4c = 0x0; _0x3bac4c < _0x11dce0.length; _0x3bac4c++) {
                      _0x3407c7 = _0xf8826b.m_slotReels.GetSymbolByIndex(_0x3840c8(_0x3bac4c, _0x4630d7.ROW_CENTER));
                      _0x12af9d = _0x3407c7.getComponent(_0x53c8af);
                      _0x33213b.push(_0x12af9d.ShowWin(_0x388c64, _0x3bac4c === _0x4630d7.COL_CENTER));
                    }
                    if (!_0x241340) {
                      _0xf8826b.ShowHintEffect(_0x5bd553, _0x514b26, _0x30b151);
                    }
                    _0x482eec.next = 0x9;
                    return Promise.all(_0x33213b).then(function () {
                      _0x29b465();
                    });
                  case 0x9:
                    if (_0x241340) {
                      _0xf8826b.ShowHintEffect(_0x5bd553, _0x514b26, _0x30b151);
                    }
                  case 0xa:
                  case 'end':
                    return _0x482eec.stop();
                }
              }
            }, _0x483f0c);
          })));
        };
        _0x1eea08.ShowHintEffect = function (_0xdf42d8, _0x2ca3ea, _0x5d38e8) {
          var _0x6bb5ab = this;
          if (undefined === _0x5d38e8) {
            _0x5d38e8 = 0x0;
          }
          _0x374dc7(this.m_effectNode).delay(0.06 + _0x5d38e8).call(function () {
            var _0x309b28 = _0x6bb5ab.m_hintEffects[_0xdf42d8];
            if (_0x309b28) {
              _0x309b28.active = true;
            } else {
              (_0x309b28 = _0x2c4cf1(_0x6bb5ab.m_payEffectPrefabs[_0xdf42d8])).getComponent(_0x5bbe42).play(_0x30c462[_0xdf42d8]);
              _0x309b28.getComponent(_0x5bbe42).getState(_0x30c462[_0xdf42d8]);
              _0x6bb5ab.m_payframe[_0xdf42d8].addChild(_0x309b28);
              _0x456e41.SetZIndex(_0x309b28, 0x1);
              _0x6bb5ab.m_hintEffects[_0xdf42d8] = _0x309b28;
            }
            if (_0x2ca3ea == 0x1) {
              _0x309b28.getComponent(_0x5bbe42).play(_0x30c462[_0xdf42d8]);
              _0x309b28.getComponent(_0x5bbe42).getState(_0x30c462[_0xdf42d8]);
            } else if (_0x2ca3ea == 0x0) {
              _0x309b28.getComponent(_0x5bbe42).play(_0x30c462[_0xdf42d8] + '_s');
              _0x309b28.getComponent(_0x5bbe42).getState(_0x30c462[_0xdf42d8] + '_s');
            }
            _0x309b28.getChildByName('Node_Mutiplier').getChildByName('paytable_num').getComponent(_0x4c53c8).spriteFrame = _0x6bb5ab.m_multiplySpriteFrame[_0x6bb5ab.m_multiplyLevel];
            _0x6bb5ab.m_payframe[_0xdf42d8].active = true;
          }).start();
        };
        _0x1eea08.HideSymbolEffect = function () {
          for (var _0x39586e = 0x0; _0x39586e < this.m_symbolEffects.length; _0x39586e++) {
            if (null != this.m_symbolEffects[_0x39586e]) {
              for (var _0x51ff0c = 0x0; _0x51ff0c < this.m_symbolEffects[_0x39586e].length; _0x51ff0c++) {
                if (this.m_symbolEffects[_0x39586e][_0x51ff0c] && this.m_symbolEffects[_0x39586e][_0x51ff0c].active) {
                  this.m_symbolEffects[_0x39586e][_0x51ff0c].active = false;
                }
              }
            }
          }
          for (var _0x699f48 = 0x0; _0x699f48 < this.m_wildLoopEffects.length; _0x699f48++) {
            if (null != this.m_wildLoopEffects[_0x699f48]) {
              for (var _0x2dc1c5 = 0x0; _0x2dc1c5 < this.m_wildLoopEffects[_0x699f48].length; _0x2dc1c5++) {
                if (this.m_wildLoopEffects[_0x699f48][_0x2dc1c5] && this.m_wildLoopEffects[_0x699f48][_0x2dc1c5].active) {
                  this.m_wildLoopEffects[_0x699f48][_0x2dc1c5].active = false;
                }
              }
            }
          }
          for (var _0x5ea771 = 0x0; _0x5ea771 < _0x4630d7.COL; _0x5ea771++) {
            this.m_slotReels.ActiveAwardSymbol(true, _0x5ea771);
          }
          _0x5e7c17.stopAllByTarget(this.m_effectNode);
        };
        _0x1eea08.HideHintEffect = function () {
          for (var _0x5330f1 = 0x0; _0x5330f1 < this.m_hintEffects.length; _0x5330f1++) {
            if (this.m_hintEffects[_0x5330f1] && this.m_hintEffects[_0x5330f1].active) {
              this.m_hintEffects[_0x5330f1].active = false;
            }
          }
          for (var _0x49cc08 = 0x0; _0x49cc08 < this.m_payframe.length; _0x49cc08++) {
            _0x5e7c17.stopAllByTarget(this.m_payframe[_0x49cc08]);
          }
        };
        _0x1eea08.LandscapeByHintEffect = function (_0x159f4d, _0x56cd52) {
          for (var _0x3733f3 = 0x0; _0x3733f3 < this.m_hintEffects.length; _0x3733f3++) {
            if (this.m_hintEffects[_0x3733f3] && this.m_hintEffects[_0x3733f3].active) {
              if (_0x56cd52 == 0x1) {
                this.m_hintEffects[_0x3733f3].getComponent(_0x5bbe42).play(_0x30c462[_0x159f4d]);
                this.m_hintEffects[_0x3733f3].getComponent(_0x5bbe42).getState(_0x30c462[_0x159f4d]);
              } else if (_0x56cd52 == 0x0) {
                this.m_hintEffects[_0x3733f3].getComponent(_0x5bbe42).play(_0x30c462[_0x159f4d] + '_s');
                this.m_hintEffects[_0x3733f3].getComponent(_0x5bbe42).getState(_0x30c462[_0x159f4d]);
              }
            }
          }
        };
        _0x1eea08.CheckWildWin = function (_0x2bb637) {
          this.m_isMidWild = _0x2bb637[_0x4630d7.COL_CENTER] >= 0x4;
        };
        _0x1eea08.PlayAwardMusic = function (_0x4be5cf) {
          var _0x25bb0e = this;
          this.m_winningSoundCount++;
          if (_0x4be5cf == _0x4630d7.Award.FA_FA_FA) {
            _0x1b53d9.Play(_0x4630d7.AudioClips.Wild_show_fax3);
          } else if (this.m_isMidWild) {
            _0x1b53d9.Play(_0x4630d7.AudioClips.Wild_show);
          } else if (_0x4be5cf >= _0x4630d7.Award.COPPER && _0x4be5cf <= _0x4630d7.Award.GOLD) {
            _0x1b53d9.Play(_0x4630d7.AudioClips.Symbol03win);
          } else {
            _0x1b53d9.Play(_0x5d856a.AWARD_EFFECT_TYPE[_0x4be5cf], false, function () {
              _0x25bb0e.m_winningSoundCount--;
              if (0x0 == _0x25bb0e.m_winningSoundCount) {
                _0x25bb0e.m_gameView.SetBGMusicBack();
              }
            });
          }
        };
        _0x1eea08.SetTxt = function (_0x27d1cd) {};
        _0x1eea08.update = function (_0x251bad) {};
        return _0x5d856a;
      }(_0x2f6eb4);
      _0x3e9e72.AWARD_EFFECT_TYPE = [_0x4630d7.AudioClips.Mg_winning, _0x4630d7.AudioClips.Mg_symbol03, _0x4630d7.AudioClips.Mg_symbol03, _0x4630d7.AudioClips.Mg_wild_win, _0x4630d7.AudioClips.Mg_wild_win];
      _0x445d98 = _0x46db50(_0x3e9e72.prototype, "m_slotReels", [_0x168755], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x351a50 = _0x46db50(_0x3e9e72.prototype, "m_effectNode", [_0x1a8ada], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x16af92 = _0x46db50(_0x3e9e72.prototype, "m_payframe", [_0x4c1ea2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x2633d9 = _0x46db50(_0x3e9e72.prototype, "m_payEffectPrefabs", [_0x4cdff0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x544ede = _0x46db50(_0x3e9e72.prototype, "m_multiplySpriteFrame", [_0x51c34f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x294ebc._RF.pop();
      var _0xe8a75f = function () {
        function _0x4dc9ea() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x189890 = _0x4dc9ea.prototype;
        _0x189890.define = function (_0x848794, _0x238582, _0x1acf9f) {
          this._registry[_0x848794] = {
            'factory': _0x238582,
            'resolveMap': _0x1acf9f
          };
        };
        _0x189890.require = function (_0x9b91ed) {
          return this._require(_0x9b91ed);
        };
        _0x189890.throwInvalidWrapper = function (_0x74456c, _0x23e32c) {
          throw new Error("Module '" + _0x74456c + "' imported from '" + _0x23e32c + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x189890._require = function (_0x18cfc0, _0xf91c8a) {
          var _0x58a597 = this._moduleCache[_0x18cfc0];
          if (_0x58a597) {
            return _0x58a597.exports;
          }
          var _0x3ed8fb = {
            'id': _0x18cfc0,
            'exports': {}
          };
          this._moduleCache[_0x18cfc0] = _0x3ed8fb;
          this._tryModuleLoad(_0x3ed8fb, _0x18cfc0);
          return _0x3ed8fb.exports;
        };
        _0x189890._resolve = function (_0x22310e, _0x50fd4d) {
          return this._resolveFromInfos(_0x22310e, _0x50fd4d) || this._throwUnresolved(_0x22310e, _0x50fd4d);
        };
        _0x189890._resolveFromInfos = function (_0x415039, _0x8bbc61) {
          var _0x1111f2;
          var _0xd03dce;
          return _0x415039 in cjsInfos ? _0x415039 : _0x8bbc61 && null != (_0x1111f2 = null == (_0xd03dce = cjsInfos[_0x8bbc61]) ? undefined : _0xd03dce.resolveCache[_0x415039]) ? _0x1111f2 : undefined;
        };
        _0x189890._tryModuleLoad = function (_0x3c7f3b, _0x29bfea) {
          var _0xe44878 = true;
          try {
            this._load(_0x3c7f3b, _0x29bfea);
            _0xe44878 = false;
          } finally {
            if (_0xe44878) {
              delete this._moduleCache[_0x29bfea];
            }
          }
        };
        _0x189890._load = function (_0x1ce865, _0x33d029) {
          var _0x2c08fd = this._loadWrapper(_0x33d029);
          var _0x3fe484 = _0x2c08fd.factory;
          var _0x2c8fcd = _0x2c08fd.resolveMap;
          var _0x4c228b = this._createRequire(_0x1ce865);
          var _0x434013 = _0x2c8fcd ? this._createRequireWithResolveMap("function" == typeof _0x2c8fcd ? _0x2c8fcd() : _0x2c8fcd, _0x4c228b) : _0x4c228b;
          _0x3fe484(_0x1ce865.exports, _0x434013, _0x1ce865);
        };
        _0x189890._loadWrapper = function (_0x3cf24f) {
          return _0x3cf24f in this._registry ? this._registry[_0x3cf24f] : this._loadHostProvidedModules(_0x3cf24f);
        };
        _0x189890._loadHostProvidedModules = function (_0x3a6b19) {
          return {
            'factory': function (_0x5b5ef8, _0x265705, _0x5e542c) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x3a6b19 + "'.");
              }
              try {
                _0x5e542c.exports = require(_0x3a6b19);
              } catch (_0x2038b1) {
                throw new Error("Exception thrown when calling host defined require('" + _0x3a6b19 + "').", {
                  'cause': _0x2038b1
                });
              }
            }
          };
        };
        _0x189890._createRequire = function (_0x3f3b5f) {
          var _0x110746 = this;
          return function (_0x3a4bb6) {
            return _0x110746._require(_0x3a4bb6, _0x3f3b5f);
          };
        };
        _0x189890._createRequireWithResolveMap = function (_0x1c8a39, _0x52216c) {
          return function (_0x1a91b7) {
            var _0x4a00ef = _0x1c8a39[_0x1a91b7];
            if (_0x4a00ef) {
              return _0x52216c(_0x4a00ef);
            }
            throw new Error("Unresolved specifier " + _0x1a91b7);
          };
        };
        _0x189890._throwUnresolved = function (_0x3b4e1c, _0xcb1d49) {
          throw new Error("Unable to resolve " + _0x3b4e1c + " from " + parent + '.');
        };
        return _0x4dc9ea;
      }();
      var _0x4073b7 = new _0xe8a75f();
      var _0x3a4433;
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x812b5b, _0x53f8e6, _0x113660, _0x3e18d5, _0x370777) {
        _0x113660.exports = _0x3d846f;
        var _0x4513b3 = null;
        try {
          _0x4513b3 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x349de4) {}
        function _0x3d846f(_0x60146c, _0x37d8be, _0x918207) {
          this.low = 0x0 | _0x60146c;
          this.high = 0x0 | _0x37d8be;
          this.unsigned = !!_0x918207;
        }
        function _0x35ab8f(_0x4bb9be) {
          return true === (_0x4bb9be && _0x4bb9be.__isLong__);
        }
        _0x3d846f.prototype.__isLong__;
        Object.defineProperty(_0x3d846f.prototype, '__isLong__', {
          'value': true
        });
        _0x3d846f.isLong = _0x35ab8f;
        var _0x27c2d6 = {};
        var _0x1e5089 = {};
        function _0x1156d4(_0x1963f8, _0x164815) {
          var _0x21fc04;
          var _0x1168c8;
          var _0x42871c;
          return _0x164815 ? (_0x42871c = 0x0 <= (_0x1963f8 >>>= 0x0) && _0x1963f8 < 0x100) && (_0x1168c8 = _0x1e5089[_0x1963f8]) ? _0x1168c8 : (_0x21fc04 = new _0x3d846f(_0x1963f8, (0x0 | _0x1963f8) < 0x0 ? -0x1 : 0x0, true), _0x42871c && (_0x1e5089[_0x1963f8] = _0x21fc04), _0x21fc04) : (_0x42871c = -0x80 <= (_0x1963f8 |= 0x0) && _0x1963f8 < 0x80) && (_0x1168c8 = _0x27c2d6[_0x1963f8]) ? _0x1168c8 : (_0x21fc04 = new _0x3d846f(_0x1963f8, _0x1963f8 < 0x0 ? -0x1 : 0x0, false), _0x42871c && (_0x27c2d6[_0x1963f8] = _0x21fc04), _0x21fc04);
        }
        function _0x3bc047(_0x513043, _0x548b17) {
          if (isNaN(_0x513043)) {
            return _0x548b17 ? _0x275c43 : _0x1a9236;
          }
          if (_0x548b17) {
            if (_0x513043 < 0x0) {
              return _0x275c43;
            }
            if (_0x513043 >= 18446744073709552000) {
              return _0xa711ef;
            }
          } else {
            if (_0x513043 <= -9223372036854776000) {
              return _0x689cd1;
            }
            if (_0x513043 + 0x1 >= 9223372036854776000) {
              return _0x5af0cf;
            }
          }
          return _0x513043 < 0x0 ? _0x3bc047(-_0x513043, _0x548b17).neg() : new _0x3d846f(_0x513043 % 0x100000000 | 0x0, _0x513043 / 0x100000000 | 0x0, _0x548b17);
        }
        function _0x4e21c8(_0x1f73af, _0x23b94c, _0x5e0f1e) {
          return new _0x3d846f(_0x1f73af, _0x23b94c, _0x5e0f1e);
        }
        _0x3d846f.fromInt = _0x1156d4;
        _0x3d846f.fromNumber = _0x3bc047;
        _0x3d846f.fromBits = _0x4e21c8;
        var _0x3d1ac7 = Math.pow;
        function _0x1bb068(_0x5f4813, _0x8e9983, _0x2a09b5) {
          if (0x0 === _0x5f4813.length) {
            throw Error("empty string");
          }
          if ('NaN' === _0x5f4813 || "Infinity" === _0x5f4813 || '+Infinity' === _0x5f4813 || '-Infinity' === _0x5f4813) {
            return _0x1a9236;
          }
          if ("number" == typeof _0x8e9983) {
            _0x2a09b5 = _0x8e9983;
            _0x8e9983 = false;
          } else {
            _0x8e9983 = !!_0x8e9983;
          }
          if ((_0x2a09b5 = _0x2a09b5 || 0xa) < 0x2 || 0x24 < _0x2a09b5) {
            throw RangeError('radix');
          }
          var _0x5b3360;
          if ((_0x5b3360 = _0x5f4813.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x5b3360) {
            return _0x1bb068(_0x5f4813.substring(0x1), _0x8e9983, _0x2a09b5).neg();
          }
          var _0x4923b2 = _0x3bc047(_0x3d1ac7(_0x2a09b5, 0x8));
          var _0x36fb2d = _0x1a9236;
          for (var _0x28961c = 0x0; _0x28961c < _0x5f4813.length; _0x28961c += 0x8) {
            var _0x5b7ab3 = Math.min(0x8, _0x5f4813.length - _0x28961c);
            var _0x3b2374 = parseInt(_0x5f4813.substring(_0x28961c, _0x28961c + _0x5b7ab3), _0x2a09b5);
            if (_0x5b7ab3 < 0x8) {
              var _0x3f4dbe = _0x3bc047(_0x3d1ac7(_0x2a09b5, _0x5b7ab3));
              _0x36fb2d = _0x36fb2d.mul(_0x3f4dbe).add(_0x3bc047(_0x3b2374));
            } else {
              _0x36fb2d = (_0x36fb2d = _0x36fb2d.mul(_0x4923b2)).add(_0x3bc047(_0x3b2374));
            }
          }
          _0x36fb2d.unsigned = _0x8e9983;
          return _0x36fb2d;
        }
        function _0x13c78b(_0x166248, _0x15c9f1) {
          return "number" == typeof _0x166248 ? _0x3bc047(_0x166248, _0x15c9f1) : "string" == typeof _0x166248 ? _0x1bb068(_0x166248, _0x15c9f1) : new _0x3d846f(_0x166248.low, _0x166248.high, "boolean" == typeof _0x15c9f1 ? _0x15c9f1 : _0x166248.unsigned);
        }
        _0x3d846f.fromString = _0x1bb068;
        _0x3d846f.fromValue = _0x13c78b;
        var _0x22e2dc = _0x1156d4(16777216);
        var _0x1a9236 = _0x1156d4(0x0);
        _0x3d846f.ZERO = _0x1a9236;
        var _0x275c43 = _0x1156d4(0x0, true);
        _0x3d846f.UZERO = _0x275c43;
        var _0xbc519b = _0x1156d4(0x1);
        _0x3d846f.ONE = _0xbc519b;
        var _0x1ab342 = _0x1156d4(0x1, true);
        _0x3d846f.UONE = _0x1ab342;
        var _0x583511 = _0x1156d4(-0x1);
        _0x3d846f.NEG_ONE = _0x583511;
        var _0x5af0cf = new _0x3d846f(-0x1, 0x7fffffff, false);
        _0x3d846f.MAX_VALUE = _0x5af0cf;
        var _0xa711ef = new _0x3d846f(-0x1, -0x1, true);
        _0x3d846f.MAX_UNSIGNED_VALUE = _0xa711ef;
        var _0x689cd1 = new _0x3d846f(0x0, -0x80000000, false);
        _0x3d846f.MIN_VALUE = _0x689cd1;
        var _0x9ac85d = _0x3d846f.prototype;
        _0x9ac85d.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x9ac85d.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x9ac85d.toString = function (_0x441573) {
          if ((_0x441573 = _0x441573 || 0xa) < 0x2 || 0x24 < _0x441573) {
            throw RangeError('radix');
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x689cd1)) {
              var _0x2ae95a = _0x3bc047(_0x441573);
              var _0x1b1002 = this.div(_0x2ae95a);
              var _0x330e9d = _0x1b1002.mul(_0x2ae95a).sub(this);
              return _0x1b1002.toString(_0x441573) + _0x330e9d.toInt().toString(_0x441573);
            }
            return '-' + this.neg().toString(_0x441573);
          }
          var _0x2d0bd5 = _0x3bc047(_0x3d1ac7(_0x441573, 0x6), this.unsigned);
          var _0x58c1a4 = this;
          for (var _0x1eed02 = '';;) {
            var _0x25d485 = _0x58c1a4.div(_0x2d0bd5);
            var _0x31b050 = (_0x58c1a4.sub(_0x25d485.mul(_0x2d0bd5)).toInt() >>> 0x0).toString(_0x441573);
            if ((_0x58c1a4 = _0x25d485).isZero()) {
              return _0x31b050 + _0x1eed02;
            }
            for (; _0x31b050.length < 0x6;) {
              _0x31b050 = '0' + _0x31b050;
            }
            _0x1eed02 = '' + _0x31b050 + _0x1eed02;
          }
        };
        _0x9ac85d.getHighBits = function () {
          return this.high;
        };
        _0x9ac85d.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x9ac85d.getLowBits = function () {
          return this.low;
        };
        _0x9ac85d.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x9ac85d.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x689cd1) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x3b53c8 = 0x0 != this.high ? this.high : this.low;
          for (var _0x505e8c = 0x1f; _0x505e8c > 0x0 && 0x0 == (_0x3b53c8 & 0x1 << _0x505e8c); _0x505e8c--) {
            ;
          }
          return 0x0 != this.high ? _0x505e8c + 0x21 : _0x505e8c + 0x1;
        };
        _0x9ac85d.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x9ac85d.eqz = _0x9ac85d.isZero;
        _0x9ac85d.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x9ac85d.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x9ac85d.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x9ac85d.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x9ac85d.equals = function (_0x2c9957) {
          if (!(true === (_0x2c9957 && _0x2c9957.__isLong__))) {
            _0x2c9957 = "number" == typeof _0x2c9957 ? _0x3bc047(_0x2c9957, undefined) : "string" == typeof _0x2c9957 ? _0x1bb068(_0x2c9957, undefined) : new _0x3d846f(_0x2c9957.low, _0x2c9957.high, _0x2c9957.unsigned);
          }
          return (this.unsigned === _0x2c9957.unsigned || this.high >>> 0x1f != 0x1 || _0x2c9957.high >>> 0x1f != 0x1) && this.high === _0x2c9957.high && this.low === _0x2c9957.low;
        };
        _0x9ac85d.eq = _0x9ac85d.equals;
        _0x9ac85d.notEquals = function (_0x1d38fe) {
          return !this.eq(_0x1d38fe);
        };
        _0x9ac85d.neq = _0x9ac85d.notEquals;
        _0x9ac85d.ne = _0x9ac85d.notEquals;
        _0x9ac85d.lessThan = function (_0x433116) {
          return this.comp(_0x433116) < 0x0;
        };
        _0x9ac85d.lt = _0x9ac85d.lessThan;
        _0x9ac85d.lessThanOrEqual = function (_0x4e1b6f) {
          return this.comp(_0x4e1b6f) <= 0x0;
        };
        _0x9ac85d.lte = _0x9ac85d.lessThanOrEqual;
        _0x9ac85d.le = _0x9ac85d.lessThanOrEqual;
        _0x9ac85d.greaterThan = function (_0x2f5221) {
          return this.comp(_0x2f5221) > 0x0;
        };
        _0x9ac85d.gt = _0x9ac85d.greaterThan;
        _0x9ac85d.greaterThanOrEqual = function (_0x527eea) {
          return this.comp(_0x527eea) >= 0x0;
        };
        _0x9ac85d.gte = _0x9ac85d.greaterThanOrEqual;
        _0x9ac85d.ge = _0x9ac85d.greaterThanOrEqual;
        _0x9ac85d.compare = function (_0x5817d1) {
          if (!(true === (_0x5817d1 && _0x5817d1.__isLong__))) {
            _0x5817d1 = "number" == typeof _0x5817d1 ? _0x3bc047(_0x5817d1, undefined) : "string" == typeof _0x5817d1 ? _0x1bb068(_0x5817d1, undefined) : new _0x3d846f(_0x5817d1.low, _0x5817d1.high, _0x5817d1.unsigned);
          }
          if (this.eq(_0x5817d1)) {
            return 0x0;
          }
          var _0x39be83 = this.isNegative();
          var _0x59c2eb = _0x5817d1.isNegative();
          return _0x39be83 && !_0x59c2eb ? -0x1 : !_0x39be83 && _0x59c2eb ? 0x1 : this.unsigned ? _0x5817d1.high >>> 0x0 > this.high >>> 0x0 || _0x5817d1.high === this.high && _0x5817d1.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x5817d1).isNegative() ? -0x1 : 0x1;
        };
        _0x9ac85d.comp = _0x9ac85d.compare;
        _0x9ac85d.negate = function () {
          return !this.unsigned && this.eq(_0x689cd1) ? _0x689cd1 : this.not().add(_0xbc519b);
        };
        _0x9ac85d.neg = _0x9ac85d.negate;
        _0x9ac85d.add = function (_0x5a7650) {
          if (!(true === (_0x5a7650 && _0x5a7650.__isLong__))) {
            _0x5a7650 = "number" == typeof _0x5a7650 ? _0x3bc047(_0x5a7650, undefined) : "string" == typeof _0x5a7650 ? _0x1bb068(_0x5a7650, undefined) : new _0x3d846f(_0x5a7650.low, _0x5a7650.high, _0x5a7650.unsigned);
          }
          var _0x4dcdfb = this.high >>> 0x10;
          var _0x38ebb9 = 0xffff & this.high;
          var _0x411206 = this.low >>> 0x10;
          var _0x155126 = 0xffff & this.low;
          var _0x94ba2 = _0x5a7650.high >>> 0x10;
          var _0xef28d6 = 0xffff & _0x5a7650.high;
          var _0x535604 = _0x5a7650.low >>> 0x10;
          var _0x1c6f64 = 0x0;
          var _0x5e28bf = 0x0;
          var _0x25056f = 0x0;
          var _0x45fcb7 = 0x0;
          _0x25056f += (_0x45fcb7 += _0x155126 + (0xffff & _0x5a7650.low)) >>> 0x10;
          _0x5e28bf += (_0x25056f += _0x411206 + _0x535604) >>> 0x10;
          _0x1c6f64 += (_0x5e28bf += _0x38ebb9 + _0xef28d6) >>> 0x10;
          _0x1c6f64 += _0x4dcdfb + _0x94ba2;
          return new _0x3d846f((_0x25056f &= 0xffff) << 0x10 | (_0x45fcb7 &= 0xffff), (_0x1c6f64 &= 0xffff) << 0x10 | (_0x5e28bf &= 0xffff), this.unsigned);
        };
        _0x9ac85d.subtract = function (_0x1586fc) {
          if (!(true === (_0x1586fc && _0x1586fc.__isLong__))) {
            _0x1586fc = "number" == typeof _0x1586fc ? _0x3bc047(_0x1586fc, undefined) : "string" == typeof _0x1586fc ? _0x1bb068(_0x1586fc, undefined) : new _0x3d846f(_0x1586fc.low, _0x1586fc.high, _0x1586fc.unsigned);
          }
          return this.add(_0x1586fc.neg());
        };
        _0x9ac85d.sub = _0x9ac85d.subtract;
        _0x9ac85d.multiply = function (_0x2bf825) {
          if (this.isZero()) {
            return _0x1a9236;
          }
          if (!(true === (_0x2bf825 && _0x2bf825.__isLong__))) {
            _0x2bf825 = "number" == typeof _0x2bf825 ? _0x3bc047(_0x2bf825, undefined) : "string" == typeof _0x2bf825 ? _0x1bb068(_0x2bf825, undefined) : new _0x3d846f(_0x2bf825.low, _0x2bf825.high, _0x2bf825.unsigned);
          }
          if (_0x4513b3) {
            return new _0x3d846f(_0x4513b3.mul(this.low, this.high, _0x2bf825.low, _0x2bf825.high), _0x4513b3.get_high(), this.unsigned);
          }
          if (_0x2bf825.isZero()) {
            return _0x1a9236;
          }
          if (this.eq(_0x689cd1)) {
            return _0x2bf825.isOdd() ? _0x689cd1 : _0x1a9236;
          }
          if (_0x2bf825.eq(_0x689cd1)) {
            return this.isOdd() ? _0x689cd1 : _0x1a9236;
          }
          if (this.isNegative()) {
            return _0x2bf825.isNegative() ? this.neg().mul(_0x2bf825.neg()) : this.neg().mul(_0x2bf825).neg();
          }
          if (_0x2bf825.isNegative()) {
            return this.mul(_0x2bf825.neg()).neg();
          }
          if (this.lt(_0x22e2dc) && _0x2bf825.lt(_0x22e2dc)) {
            return _0x3bc047(this.toNumber() * _0x2bf825.toNumber(), this.unsigned);
          }
          var _0x5c36bd = this.high >>> 0x10;
          var _0x42c394 = 0xffff & this.high;
          var _0x8e19e3 = this.low >>> 0x10;
          var _0x4be52f = 0xffff & this.low;
          var _0x5a8057 = _0x2bf825.high >>> 0x10;
          var _0x5746a3 = 0xffff & _0x2bf825.high;
          var _0x276cb5 = _0x2bf825.low >>> 0x10;
          var _0x5109a0 = 0xffff & _0x2bf825.low;
          var _0x174b59 = 0x0;
          var _0x15f068 = 0x0;
          var _0x1759be = 0x0;
          var _0x2f7c21 = 0x0;
          _0x1759be += (_0x2f7c21 += _0x4be52f * _0x5109a0) >>> 0x10;
          _0x15f068 += (_0x1759be += _0x8e19e3 * _0x5109a0) >>> 0x10;
          _0x1759be &= 0xffff;
          _0x15f068 += (_0x1759be += _0x4be52f * _0x276cb5) >>> 0x10;
          _0x174b59 += (_0x15f068 += _0x42c394 * _0x5109a0) >>> 0x10;
          _0x15f068 &= 0xffff;
          _0x174b59 += (_0x15f068 += _0x8e19e3 * _0x276cb5) >>> 0x10;
          _0x15f068 &= 0xffff;
          _0x174b59 += (_0x15f068 += _0x4be52f * _0x5746a3) >>> 0x10;
          _0x174b59 += _0x5c36bd * _0x5109a0 + _0x42c394 * _0x276cb5 + _0x8e19e3 * _0x5746a3 + _0x4be52f * _0x5a8057;
          return new _0x3d846f((_0x1759be &= 0xffff) << 0x10 | (_0x2f7c21 &= 0xffff), (_0x174b59 &= 0xffff) << 0x10 | (_0x15f068 &= 0xffff), this.unsigned);
        };
        _0x9ac85d.mul = _0x9ac85d.multiply;
        _0x9ac85d.divide = function (_0x22d549) {
          if (!(true === (_0x22d549 && _0x22d549.__isLong__))) {
            _0x22d549 = "number" == typeof _0x22d549 ? _0x3bc047(_0x22d549, undefined) : "string" == typeof _0x22d549 ? _0x1bb068(_0x22d549, undefined) : new _0x3d846f(_0x22d549.low, _0x22d549.high, _0x22d549.unsigned);
          }
          if (_0x22d549.isZero()) {
            throw Error("division by zero");
          }
          var _0x25bbe2;
          var _0x1726fd;
          var _0x5c31ca;
          if (_0x4513b3) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x22d549.low || -0x1 !== _0x22d549.high ? new _0x3d846f((this.unsigned ? _0x4513b3.div_u : _0x4513b3.div_s)(this.low, this.high, _0x22d549.low, _0x22d549.high), _0x4513b3.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x275c43 : _0x1a9236;
          }
          if (this.unsigned) {
            if (!_0x22d549.unsigned) {
              _0x22d549 = _0x22d549.toUnsigned();
            }
            if (_0x22d549.gt(this)) {
              return _0x275c43;
            }
            if (_0x22d549.gt(this.shru(0x1))) {
              return _0x1ab342;
            }
            _0x5c31ca = _0x275c43;
          } else {
            if (this.eq(_0x689cd1)) {
              return _0x22d549.eq(_0xbc519b) || _0x22d549.eq(_0x583511) ? _0x689cd1 : _0x22d549.eq(_0x689cd1) ? _0xbc519b : (_0x25bbe2 = this.shr(0x1).div(_0x22d549).shl(0x1)).eq(_0x1a9236) ? _0x22d549.isNegative() ? _0xbc519b : _0x583511 : (_0x1726fd = this.sub(_0x22d549.mul(_0x25bbe2)), _0x5c31ca = _0x25bbe2.add(_0x1726fd.div(_0x22d549)));
            }
            if (_0x22d549.eq(_0x689cd1)) {
              return this.unsigned ? _0x275c43 : _0x1a9236;
            }
            if (this.isNegative()) {
              return _0x22d549.isNegative() ? this.neg().div(_0x22d549.neg()) : this.neg().div(_0x22d549).neg();
            }
            if (_0x22d549.isNegative()) {
              return this.div(_0x22d549.neg()).neg();
            }
            _0x5c31ca = _0x1a9236;
          }
          for (_0x1726fd = this; _0x1726fd.gte(_0x22d549);) {
            _0x25bbe2 = Math.max(0x1, Math.floor(_0x1726fd.toNumber() / _0x22d549.toNumber()));
            var _0x4eea02 = Math.ceil(Math.log(_0x25bbe2) / Math.LN2);
            var _0x124299 = _0x4eea02 <= 0x30 ? 0x1 : _0x3d1ac7(0x2, _0x4eea02 - 0x30);
            var _0x21db4b = _0x3bc047(_0x25bbe2);
            for (var _0x1fa72 = _0x21db4b.mul(_0x22d549); _0x1fa72.isNegative() || _0x1fa72.gt(_0x1726fd);) {
              _0x1fa72 = (_0x21db4b = _0x3bc047(_0x25bbe2 -= _0x124299, this.unsigned)).mul(_0x22d549);
            }
            if (_0x21db4b.isZero()) {
              _0x21db4b = _0xbc519b;
            }
            _0x5c31ca = _0x5c31ca.add(_0x21db4b);
            _0x1726fd = _0x1726fd.sub(_0x1fa72);
          }
          return _0x5c31ca;
        };
        _0x9ac85d.div = _0x9ac85d.divide;
        _0x9ac85d.modulo = function (_0x2a1fb3) {
          if (!(true === (_0x2a1fb3 && _0x2a1fb3.__isLong__))) {
            _0x2a1fb3 = "number" == typeof _0x2a1fb3 ? _0x3bc047(_0x2a1fb3, undefined) : "string" == typeof _0x2a1fb3 ? _0x1bb068(_0x2a1fb3, undefined) : new _0x3d846f(_0x2a1fb3.low, _0x2a1fb3.high, _0x2a1fb3.unsigned);
          }
          return _0x4513b3 ? new _0x3d846f((this.unsigned ? _0x4513b3.rem_u : _0x4513b3.rem_s)(this.low, this.high, _0x2a1fb3.low, _0x2a1fb3.high), _0x4513b3.get_high(), this.unsigned) : this.sub(this.div(_0x2a1fb3).mul(_0x2a1fb3));
        };
        _0x9ac85d.mod = _0x9ac85d.modulo;
        _0x9ac85d.rem = _0x9ac85d.modulo;
        _0x9ac85d.not = function () {
          return new _0x3d846f(~this.low, ~this.high, this.unsigned);
        };
        _0x9ac85d.and = function (_0x2b19cb) {
          if (!(true === (_0x2b19cb && _0x2b19cb.__isLong__))) {
            _0x2b19cb = "number" == typeof _0x2b19cb ? _0x3bc047(_0x2b19cb, undefined) : "string" == typeof _0x2b19cb ? _0x1bb068(_0x2b19cb, undefined) : new _0x3d846f(_0x2b19cb.low, _0x2b19cb.high, _0x2b19cb.unsigned);
          }
          return new _0x3d846f(this.low & _0x2b19cb.low, this.high & _0x2b19cb.high, this.unsigned);
        };
        _0x9ac85d.or = function (_0xd18a24) {
          if (!(true === (_0xd18a24 && _0xd18a24.__isLong__))) {
            _0xd18a24 = "number" == typeof _0xd18a24 ? _0x3bc047(_0xd18a24, undefined) : "string" == typeof _0xd18a24 ? _0x1bb068(_0xd18a24, undefined) : new _0x3d846f(_0xd18a24.low, _0xd18a24.high, _0xd18a24.unsigned);
          }
          return new _0x3d846f(this.low | _0xd18a24.low, this.high | _0xd18a24.high, this.unsigned);
        };
        _0x9ac85d.xor = function (_0x16a287) {
          if (!(true === (_0x16a287 && _0x16a287.__isLong__))) {
            _0x16a287 = "number" == typeof _0x16a287 ? _0x3bc047(_0x16a287, undefined) : "string" == typeof _0x16a287 ? _0x1bb068(_0x16a287, undefined) : new _0x3d846f(_0x16a287.low, _0x16a287.high, _0x16a287.unsigned);
          }
          return new _0x3d846f(this.low ^ _0x16a287.low, this.high ^ _0x16a287.high, this.unsigned);
        };
        _0x9ac85d.shiftLeft = function (_0x4bf963) {
          if (true === (_0x4bf963 && _0x4bf963.__isLong__)) {
            _0x4bf963 = _0x4bf963.toInt();
          }
          return 0x0 == (_0x4bf963 &= 0x3f) ? this : _0x4bf963 < 0x20 ? new _0x3d846f(this.low << _0x4bf963, this.high << _0x4bf963 | this.low >>> 0x20 - _0x4bf963, this.unsigned) : new _0x3d846f(0x0, this.low << _0x4bf963 - 0x20, this.unsigned);
        };
        _0x9ac85d.shl = _0x9ac85d.shiftLeft;
        _0x9ac85d.shiftRight = function (_0x38fe77) {
          if (true === (_0x38fe77 && _0x38fe77.__isLong__)) {
            _0x38fe77 = _0x38fe77.toInt();
          }
          return 0x0 == (_0x38fe77 &= 0x3f) ? this : _0x38fe77 < 0x20 ? new _0x3d846f(this.low >>> _0x38fe77 | this.high << 0x20 - _0x38fe77, this.high >> _0x38fe77, this.unsigned) : new _0x3d846f(this.high >> _0x38fe77 - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x9ac85d.shr = _0x9ac85d.shiftRight;
        _0x9ac85d.shiftRightUnsigned = function (_0x4f15aa) {
          if (true === (_0x4f15aa && _0x4f15aa.__isLong__)) {
            _0x4f15aa = _0x4f15aa.toInt();
          }
          if (0x0 === (_0x4f15aa &= 0x3f)) {
            return this;
          }
          var _0x30c40a = this.high;
          return _0x4f15aa < 0x20 ? new _0x3d846f(this.low >>> _0x4f15aa | _0x30c40a << 0x20 - _0x4f15aa, _0x30c40a >>> _0x4f15aa, this.unsigned) : new _0x3d846f(0x20 === _0x4f15aa ? _0x30c40a : _0x30c40a >>> _0x4f15aa - 0x20, 0x0, this.unsigned);
        };
        _0x9ac85d.shru = _0x9ac85d.shiftRightUnsigned;
        _0x9ac85d.shr_u = _0x9ac85d.shiftRightUnsigned;
        _0x9ac85d.toSigned = function () {
          return this.unsigned ? new _0x3d846f(this.low, this.high, false) : this;
        };
        _0x9ac85d.toUnsigned = function () {
          return this.unsigned ? this : new _0x3d846f(this.low, this.high, true);
        };
        _0x9ac85d.toBytes = function (_0x4c2afd) {
          return _0x4c2afd ? this.toBytesLE() : this.toBytesBE();
        };
        _0x9ac85d.toBytesLE = function () {
          var _0x4ac6f1 = this.high;
          var _0x2aad6b = this.low;
          return [0xff & _0x2aad6b, _0x2aad6b >>> 0x8 & 0xff, _0x2aad6b >>> 0x10 & 0xff, _0x2aad6b >>> 0x18, 0xff & _0x4ac6f1, _0x4ac6f1 >>> 0x8 & 0xff, _0x4ac6f1 >>> 0x10 & 0xff, _0x4ac6f1 >>> 0x18];
        };
        _0x9ac85d.toBytesBE = function () {
          var _0x5547cd = this.high;
          var _0x28be3e = this.low;
          return [_0x5547cd >>> 0x18, _0x5547cd >>> 0x10 & 0xff, _0x5547cd >>> 0x8 & 0xff, 0xff & _0x5547cd, _0x28be3e >>> 0x18, _0x28be3e >>> 0x10 & 0xff, _0x28be3e >>> 0x8 & 0xff, 0xff & _0x28be3e];
        };
        _0x3d846f.fromBytes = function (_0x215178, _0x8f2702, _0x35785b) {
          return _0x35785b ? _0x3d846f.fromBytesLE(_0x215178, _0x8f2702) : _0x3d846f.fromBytesBE(_0x215178, _0x8f2702);
        };
        _0x3d846f.fromBytesLE = function (_0x434e21, _0x4c0175) {
          return new _0x3d846f(_0x434e21[0x0] | _0x434e21[0x1] << 0x8 | _0x434e21[0x2] << 0x10 | _0x434e21[0x3] << 0x18, _0x434e21[0x4] | _0x434e21[0x5] << 0x8 | _0x434e21[0x6] << 0x10 | _0x434e21[0x7] << 0x18, _0x4c0175);
        };
        _0x3d846f.fromBytesBE = function (_0x100142, _0x4b2825) {
          return new _0x3d846f(_0x100142[0x4] << 0x18 | _0x100142[0x5] << 0x10 | _0x100142[0x6] << 0x8 | _0x100142[0x7], _0x100142[0x0] << 0x18 | _0x100142[0x1] << 0x10 | _0x100142[0x2] << 0x8 | _0x100142[0x3], _0x4b2825);
        };
        _0x3a4433 = _0x113660.exports;
      }, {});
      _0x4073b7.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x45dd68, _0x4dfe8f, _0x377d35, _0x45b217, _0x2c51ea) {
        _0x377d35.exports = function (_0x11bef4, _0x5bc96c) {
          var _0x331115 = new Array(arguments.length - 0x1);
          var _0x422070 = 0x0;
          var _0x298ddf = 0x2;
          var _0x131907 = true;
          for (; _0x298ddf < arguments.length;) {
            _0x331115[_0x422070++] = arguments[_0x298ddf++];
          }
          return new Promise(function (_0x2aaaf3, _0x39c37f) {
            _0x331115[_0x422070] = function (_0x363db9) {
              if (_0x131907) {
                _0x131907 = false;
                if (_0x363db9) {
                  _0x39c37f(_0x363db9);
                } else {
                  var _0x2860b7 = new Array(arguments.length - 0x1);
                  for (var _0x132d60 = 0x0; _0x132d60 < _0x2860b7.length;) {
                    _0x2860b7[_0x132d60++] = arguments[_0x132d60];
                  }
                  _0x2aaaf3.apply(null, _0x2860b7);
                }
              }
            };
            try {
              _0x11bef4.apply(_0x5bc96c || null, _0x331115);
            } catch (_0x12cc59) {
              if (_0x131907) {
                _0x131907 = false;
                _0x39c37f(_0x12cc59);
              }
            }
          });
        };
        _0x377d35.exports;
      }, {});
      _0x4073b7.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js', function (_0x113ff6, _0x5e8527, _0x3a90dc, _0x38c3b4, _0x3edb18) {
        _0x113ff6.length = function (_0x59f212) {
          var _0x2c07d8 = _0x59f212.length;
          if (!_0x2c07d8) {
            return 0x0;
          }
          for (var _0x2dc22d = 0x0; --_0x2c07d8 % 0x4 > 0x1 && '=' === _0x59f212.charAt(_0x2c07d8);) {
            ++_0x2dc22d;
          }
          return Math.ceil(0x3 * _0x59f212.length) / 0x4 - _0x2dc22d;
        };
        var _0x37e96f = new Array(0x40);
        var _0x210e98 = new Array(0x7b);
        for (var _0x28521c = 0x0; _0x28521c < 0x40;) {
          _0x210e98[_0x37e96f[_0x28521c] = _0x28521c < 0x1a ? _0x28521c + 0x41 : _0x28521c < 0x34 ? _0x28521c + 0x47 : _0x28521c < 0x3e ? _0x28521c - 0x4 : _0x28521c - 0x3b | 0x2b] = _0x28521c++;
        }
        _0x113ff6.encode = function (_0x498164, _0x11addd, _0x24018b) {
          var _0x5b6408;
          var _0x31d061 = null;
          var _0x230a22 = [];
          var _0x4abeb4 = 0x0;
          for (var _0x50fd77 = 0x0; _0x11addd < _0x24018b;) {
            var _0xc9cd92 = _0x498164[_0x11addd++];
            switch (_0x50fd77) {
              case 0x0:
                _0x230a22[_0x4abeb4++] = _0x37e96f[_0xc9cd92 >> 0x2];
                _0x5b6408 = (0x3 & _0xc9cd92) << 0x4;
                _0x50fd77 = 0x1;
                break;
              case 0x1:
                _0x230a22[_0x4abeb4++] = _0x37e96f[_0x5b6408 | _0xc9cd92 >> 0x4];
                _0x5b6408 = (0xf & _0xc9cd92) << 0x2;
                _0x50fd77 = 0x2;
                break;
              case 0x2:
                _0x230a22[_0x4abeb4++] = _0x37e96f[_0x5b6408 | _0xc9cd92 >> 0x6];
                _0x230a22[_0x4abeb4++] = _0x37e96f[0x3f & _0xc9cd92];
                _0x50fd77 = 0x0;
            }
            if (_0x4abeb4 > 0x1fff) {
              (_0x31d061 || (_0x31d061 = [])).push(String.fromCharCode.apply(String, _0x230a22));
              _0x4abeb4 = 0x0;
            }
          }
          if (_0x50fd77) {
            _0x230a22[_0x4abeb4++] = _0x37e96f[_0x5b6408];
            _0x230a22[_0x4abeb4++] = 0x3d;
            if (0x1 === _0x50fd77) {
              _0x230a22[_0x4abeb4++] = 0x3d;
            }
          }
          return _0x31d061 ? (_0x4abeb4 && _0x31d061.push(String.fromCharCode.apply(String, _0x230a22.slice(0x0, _0x4abeb4))), _0x31d061.join('')) : String.fromCharCode.apply(String, _0x230a22.slice(0x0, _0x4abeb4));
        };
        _0x113ff6.decode = function (_0x2e6cac, _0x5da959, _0x2b6e8e) {
          var _0x32c26c;
          var _0x3646e1 = _0x2b6e8e;
          var _0x2f75af = 0x0;
          for (var _0x33a19f = 0x0; _0x33a19f < _0x2e6cac.length;) {
            var _0x32e277 = _0x2e6cac.charCodeAt(_0x33a19f++);
            if (0x3d === _0x32e277 && _0x2f75af > 0x1) {
              break;
            }
            if (undefined === (_0x32e277 = _0x210e98[_0x32e277])) {
              throw Error("invalid encoding");
            }
            switch (_0x2f75af) {
              case 0x0:
                _0x32c26c = _0x32e277;
                _0x2f75af = 0x1;
                break;
              case 0x1:
                _0x5da959[_0x2b6e8e++] = _0x32c26c << 0x2 | (0x30 & _0x32e277) >> 0x4;
                _0x32c26c = _0x32e277;
                _0x2f75af = 0x2;
                break;
              case 0x2:
                _0x5da959[_0x2b6e8e++] = (0xf & _0x32c26c) << 0x4 | (0x3c & _0x32e277) >> 0x2;
                _0x32c26c = _0x32e277;
                _0x2f75af = 0x3;
                break;
              case 0x3:
                _0x5da959[_0x2b6e8e++] = (0x3 & _0x32c26c) << 0x6 | _0x32e277;
                _0x2f75af = 0x0;
            }
          }
          if (0x1 === _0x2f75af) {
            throw Error("invalid encoding");
          }
          return _0x2b6e8e - _0x3646e1;
        };
        _0x113ff6.test = function (_0x15808b) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x15808b);
        };
        _0x3a90dc.exports;
      }, {});
      _0x4073b7.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js', function (_0x3c16fd, _0x1e08ae, _0x1eb3d2, _0x50c3fe, _0x375b3a) {
        function _0x45ace7() {
          this._listeners = {};
        }
        _0x1eb3d2.exports = _0x45ace7;
        _0x45ace7.prototype.on = function (_0x1fd879, _0x2f229a, _0x983133) {
          (this._listeners[_0x1fd879] || (this._listeners[_0x1fd879] = [])).push({
            'fn': _0x2f229a,
            'ctx': _0x983133 || this
          });
          return this;
        };
        _0x45ace7.prototype.off = function (_0x2a88a9, _0x136f15) {
          if (undefined === _0x2a88a9) {
            this._listeners = {};
          } else {
            if (undefined === _0x136f15) {
              this._listeners[_0x2a88a9] = [];
            } else {
              var _0x51ad55 = this._listeners[_0x2a88a9];
              for (var _0x211764 = 0x0; _0x211764 < _0x51ad55.length;) {
                if (_0x51ad55[_0x211764].fn === _0x136f15) {
                  _0x51ad55.splice(_0x211764, 0x1);
                } else {
                  ++_0x211764;
                }
              }
            }
          }
          return this;
        };
        _0x45ace7.prototype.emit = function (_0x4bcbec) {
          var _0x51f8b1 = this._listeners[_0x4bcbec];
          if (_0x51f8b1) {
            var _0x2aa859 = [];
            for (var _0x2270cd = 0x1; _0x2270cd < arguments.length;) {
              _0x2aa859.push(arguments[_0x2270cd++]);
            }
            for (_0x2270cd = 0x0; _0x2270cd < _0x51f8b1.length;) {
              _0x51f8b1[_0x2270cd].fn.apply(_0x51f8b1[_0x2270cd++].ctx, _0x2aa859);
            }
          }
          return this;
        };
        _0x1eb3d2.exports;
      }, {});
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0x5d1c0e, _0x58298a, _0x1e4e8f, _0x441f73, _0x41e590) {
        function _0x3d2e16(_0x26220d) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var _0x1a31fd = new Float32Array([-0x0]);
              var _0x5de675 = new Uint8Array(_0x1a31fd.buffer);
              var _0x59d0c3 = 0x80 === _0x5de675[0x3];
              function _0x17f0c3(_0x8e66c5, _0xf910b9, _0x55a689) {
                _0x1a31fd[0x0] = _0x8e66c5;
                _0xf910b9[_0x55a689] = _0x5de675[0x0];
                _0xf910b9[_0x55a689 + 0x1] = _0x5de675[0x1];
                _0xf910b9[_0x55a689 + 0x2] = _0x5de675[0x2];
                _0xf910b9[_0x55a689 + 0x3] = _0x5de675[0x3];
              }
              function _0xe20e48(_0xc61e5a, _0x4aa439, _0x5b45bb) {
                _0x1a31fd[0x0] = _0xc61e5a;
                _0x4aa439[_0x5b45bb] = _0x5de675[0x3];
                _0x4aa439[_0x5b45bb + 0x1] = _0x5de675[0x2];
                _0x4aa439[_0x5b45bb + 0x2] = _0x5de675[0x1];
                _0x4aa439[_0x5b45bb + 0x3] = _0x5de675[0x0];
              }
              function _0xb32129(_0x56cd56, _0x1f6244) {
                _0x5de675[0x0] = _0x56cd56[_0x1f6244];
                _0x5de675[0x1] = _0x56cd56[_0x1f6244 + 0x1];
                _0x5de675[0x2] = _0x56cd56[_0x1f6244 + 0x2];
                _0x5de675[0x3] = _0x56cd56[_0x1f6244 + 0x3];
                return _0x1a31fd[0x0];
              }
              function _0x33ef32(_0x479599, _0x55722c) {
                _0x5de675[0x3] = _0x479599[_0x55722c];
                _0x5de675[0x2] = _0x479599[_0x55722c + 0x1];
                _0x5de675[0x1] = _0x479599[_0x55722c + 0x2];
                _0x5de675[0x0] = _0x479599[_0x55722c + 0x3];
                return _0x1a31fd[0x0];
              }
              _0x26220d.writeFloatLE = _0x59d0c3 ? _0x17f0c3 : _0xe20e48;
              _0x26220d.writeFloatBE = _0x59d0c3 ? _0xe20e48 : _0x17f0c3;
              _0x26220d.readFloatLE = _0x59d0c3 ? _0xb32129 : _0x33ef32;
              _0x26220d.readFloatBE = _0x59d0c3 ? _0x33ef32 : _0xb32129;
            })();
          } else {
            (function () {
              function _0x338387(_0x1bbd48, _0x578954, _0x37ec2a, _0x361616) {
                var _0x590f4f = _0x578954 < 0x0 ? 0x1 : 0x0;
                if (_0x590f4f) {
                  _0x578954 = -_0x578954;
                }
                if (0x0 === _0x578954) {
                  _0x1bbd48(0x1 / _0x578954 > 0x0 ? 0x0 : 0x80000000, _0x37ec2a, _0x361616);
                } else {
                  if (isNaN(_0x578954)) {
                    _0x1bbd48(0x7fc00000, _0x37ec2a, _0x361616);
                  } else {
                    if (_0x578954 > 0xffffff00000000000000000000000000) {
                      _0x1bbd48((_0x590f4f << 0x1f | 0x7f800000) >>> 0x0, _0x37ec2a, _0x361616);
                    } else {
                      if (_0x578954 < 1.1754943508222875e-38) {
                        _0x1bbd48((_0x590f4f << 0x1f | Math.round(_0x578954 / 1.401298464324817e-45)) >>> 0x0, _0x37ec2a, _0x361616);
                      } else {
                        var _0x4930f5 = Math.floor(Math.log(_0x578954) / Math.LN2);
                        _0x1bbd48((_0x590f4f << 0x1f | _0x4930f5 + 0x7f << 0x17 | 0x7fffff & Math.round(_0x578954 * Math.pow(0x2, -_0x4930f5) * 0x800000)) >>> 0x0, _0x37ec2a, _0x361616);
                      }
                    }
                  }
                }
              }
              function _0x3d3ae8(_0x33baba, _0x34dcd0, _0x3fae5d) {
                var _0x2e71a5 = _0x33baba(_0x34dcd0, _0x3fae5d);
                var _0x45a62c = 0x2 * (_0x2e71a5 >> 0x1f) + 0x1;
                var _0x4c5949 = _0x2e71a5 >>> 0x17 & 0xff;
                var _0xdc13a7 = 0x7fffff & _0x2e71a5;
                return 0xff === _0x4c5949 ? _0xdc13a7 ? NaN : _0x45a62c * Infinity : 0x0 === _0x4c5949 ? 1.401298464324817e-45 * _0x45a62c * _0xdc13a7 : _0x45a62c * Math.pow(0x2, _0x4c5949 - 0x96) * (_0xdc13a7 + 0x800000);
              }
              _0x26220d.writeFloatLE = _0x338387.bind(null, _0x4edfc8);
              _0x26220d.writeFloatBE = _0x338387.bind(null, _0x9dcd22);
              _0x26220d.readFloatLE = _0x3d3ae8.bind(null, _0x3ab8de);
              _0x26220d.readFloatBE = _0x3d3ae8.bind(null, _0x9ddd82);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var _0x1dd0f9 = new Float64Array([-0x0]);
              var _0x4f4344 = new Uint8Array(_0x1dd0f9.buffer);
              var _0x4949bb = 0x80 === _0x4f4344[0x7];
              function _0xe92f6a(_0x267e1a, _0xacb00f, _0x51ad5d) {
                _0x1dd0f9[0x0] = _0x267e1a;
                _0xacb00f[_0x51ad5d] = _0x4f4344[0x0];
                _0xacb00f[_0x51ad5d + 0x1] = _0x4f4344[0x1];
                _0xacb00f[_0x51ad5d + 0x2] = _0x4f4344[0x2];
                _0xacb00f[_0x51ad5d + 0x3] = _0x4f4344[0x3];
                _0xacb00f[_0x51ad5d + 0x4] = _0x4f4344[0x4];
                _0xacb00f[_0x51ad5d + 0x5] = _0x4f4344[0x5];
                _0xacb00f[_0x51ad5d + 0x6] = _0x4f4344[0x6];
                _0xacb00f[_0x51ad5d + 0x7] = _0x4f4344[0x7];
              }
              function _0x16516a(_0x16a55e, _0x452ee9, _0x5acbeb) {
                _0x1dd0f9[0x0] = _0x16a55e;
                _0x452ee9[_0x5acbeb] = _0x4f4344[0x7];
                _0x452ee9[_0x5acbeb + 0x1] = _0x4f4344[0x6];
                _0x452ee9[_0x5acbeb + 0x2] = _0x4f4344[0x5];
                _0x452ee9[_0x5acbeb + 0x3] = _0x4f4344[0x4];
                _0x452ee9[_0x5acbeb + 0x4] = _0x4f4344[0x3];
                _0x452ee9[_0x5acbeb + 0x5] = _0x4f4344[0x2];
                _0x452ee9[_0x5acbeb + 0x6] = _0x4f4344[0x1];
                _0x452ee9[_0x5acbeb + 0x7] = _0x4f4344[0x0];
              }
              function _0xdf68e5(_0x1fab05, _0x4ecfac) {
                _0x4f4344[0x0] = _0x1fab05[_0x4ecfac];
                _0x4f4344[0x1] = _0x1fab05[_0x4ecfac + 0x1];
                _0x4f4344[0x2] = _0x1fab05[_0x4ecfac + 0x2];
                _0x4f4344[0x3] = _0x1fab05[_0x4ecfac + 0x3];
                _0x4f4344[0x4] = _0x1fab05[_0x4ecfac + 0x4];
                _0x4f4344[0x5] = _0x1fab05[_0x4ecfac + 0x5];
                _0x4f4344[0x6] = _0x1fab05[_0x4ecfac + 0x6];
                _0x4f4344[0x7] = _0x1fab05[_0x4ecfac + 0x7];
                return _0x1dd0f9[0x0];
              }
              function _0x2e1008(_0x44c99f, _0x2b7898) {
                _0x4f4344[0x7] = _0x44c99f[_0x2b7898];
                _0x4f4344[0x6] = _0x44c99f[_0x2b7898 + 0x1];
                _0x4f4344[0x5] = _0x44c99f[_0x2b7898 + 0x2];
                _0x4f4344[0x4] = _0x44c99f[_0x2b7898 + 0x3];
                _0x4f4344[0x3] = _0x44c99f[_0x2b7898 + 0x4];
                _0x4f4344[0x2] = _0x44c99f[_0x2b7898 + 0x5];
                _0x4f4344[0x1] = _0x44c99f[_0x2b7898 + 0x6];
                _0x4f4344[0x0] = _0x44c99f[_0x2b7898 + 0x7];
                return _0x1dd0f9[0x0];
              }
              _0x26220d.writeDoubleLE = _0x4949bb ? _0xe92f6a : _0x16516a;
              _0x26220d.writeDoubleBE = _0x4949bb ? _0x16516a : _0xe92f6a;
              _0x26220d.readDoubleLE = _0x4949bb ? _0xdf68e5 : _0x2e1008;
              _0x26220d.readDoubleBE = _0x4949bb ? _0x2e1008 : _0xdf68e5;
            })();
          } else {
            (function () {
              function _0x19bd9d(_0x42b516, _0x2db9c5, _0x40ec3d, _0x37d150, _0x32c071, _0x2b0001) {
                var _0x58caa2 = _0x37d150 < 0x0 ? 0x1 : 0x0;
                if (_0x58caa2) {
                  _0x37d150 = -_0x37d150;
                }
                if (0x0 === _0x37d150) {
                  _0x42b516(0x0, _0x32c071, _0x2b0001 + _0x2db9c5);
                  _0x42b516(0x1 / _0x37d150 > 0x0 ? 0x0 : 0x80000000, _0x32c071, _0x2b0001 + _0x40ec3d);
                } else {
                  if (isNaN(_0x37d150)) {
                    _0x42b516(0x0, _0x32c071, _0x2b0001 + _0x2db9c5);
                    _0x42b516(0x7ff80000, _0x32c071, _0x2b0001 + _0x40ec3d);
                  } else {
                    if (_0x37d150 > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x42b516(0x0, _0x32c071, _0x2b0001 + _0x2db9c5);
                      _0x42b516((_0x58caa2 << 0x1f | 0x7ff00000) >>> 0x0, _0x32c071, _0x2b0001 + _0x40ec3d);
                    } else {
                      var _0x4781a6;
                      if (_0x37d150 < 2.2250738585072014e-308) {
                        _0x42b516((_0x4781a6 = _0x37d150 / 5e-324) >>> 0x0, _0x32c071, _0x2b0001 + _0x2db9c5);
                        _0x42b516((_0x58caa2 << 0x1f | _0x4781a6 / 0x100000000) >>> 0x0, _0x32c071, _0x2b0001 + _0x40ec3d);
                      } else {
                        var _0x1e0f26 = Math.floor(Math.log(_0x37d150) / Math.LN2);
                        if (0x400 === _0x1e0f26) {
                          _0x1e0f26 = 0x3ff;
                        }
                        _0x42b516(0x10000000000000 * (_0x4781a6 = _0x37d150 * Math.pow(0x2, -_0x1e0f26)) >>> 0x0, _0x32c071, _0x2b0001 + _0x2db9c5);
                        _0x42b516((_0x58caa2 << 0x1f | _0x1e0f26 + 0x3ff << 0x14 | 0x100000 * _0x4781a6 & 0xfffff) >>> 0x0, _0x32c071, _0x2b0001 + _0x40ec3d);
                      }
                    }
                  }
                }
              }
              function _0xf8810b(_0x563dba, _0x318b6c, _0x36567b, _0x375eeb, _0x21923f) {
                var _0x53c38e = _0x563dba(_0x375eeb, _0x21923f + _0x318b6c);
                var _0x56ddee = _0x563dba(_0x375eeb, _0x21923f + _0x36567b);
                var _0x5ccc64 = 0x2 * (_0x56ddee >> 0x1f) + 0x1;
                var _0x5e589e = _0x56ddee >>> 0x14 & 0x7ff;
                var _0x230062 = 0x100000000 * (0xfffff & _0x56ddee) + _0x53c38e;
                return 0x7ff === _0x5e589e ? _0x230062 ? NaN : _0x5ccc64 * Infinity : 0x0 === _0x5e589e ? 5e-324 * _0x5ccc64 * _0x230062 : _0x5ccc64 * Math.pow(0x2, _0x5e589e - 0x433) * (_0x230062 + 0x10000000000000);
              }
              _0x26220d.writeDoubleLE = _0x19bd9d.bind(null, _0x4edfc8, 0x0, 0x4);
              _0x26220d.writeDoubleBE = _0x19bd9d.bind(null, _0x9dcd22, 0x4, 0x0);
              _0x26220d.readDoubleLE = _0xf8810b.bind(null, _0x3ab8de, 0x0, 0x4);
              _0x26220d.readDoubleBE = _0xf8810b.bind(null, _0x9ddd82, 0x4, 0x0);
            })();
          }
          return _0x26220d;
        }
        function _0x4edfc8(_0x1728f3, _0x4af5ff, _0x304d02) {
          _0x4af5ff[_0x304d02] = 0xff & _0x1728f3;
          _0x4af5ff[_0x304d02 + 0x1] = _0x1728f3 >>> 0x8 & 0xff;
          _0x4af5ff[_0x304d02 + 0x2] = _0x1728f3 >>> 0x10 & 0xff;
          _0x4af5ff[_0x304d02 + 0x3] = _0x1728f3 >>> 0x18;
        }
        function _0x9dcd22(_0x5b43ca, _0x54e25f, _0x503151) {
          _0x54e25f[_0x503151] = _0x5b43ca >>> 0x18;
          _0x54e25f[_0x503151 + 0x1] = _0x5b43ca >>> 0x10 & 0xff;
          _0x54e25f[_0x503151 + 0x2] = _0x5b43ca >>> 0x8 & 0xff;
          _0x54e25f[_0x503151 + 0x3] = 0xff & _0x5b43ca;
        }
        function _0x3ab8de(_0x335480, _0x22195b) {
          return (_0x335480[_0x22195b] | _0x335480[_0x22195b + 0x1] << 0x8 | _0x335480[_0x22195b + 0x2] << 0x10 | _0x335480[_0x22195b + 0x3] << 0x18) >>> 0x0;
        }
        function _0x9ddd82(_0x3919fd, _0x2e4e61) {
          return (_0x3919fd[_0x2e4e61] << 0x18 | _0x3919fd[_0x2e4e61 + 0x1] << 0x10 | _0x3919fd[_0x2e4e61 + 0x2] << 0x8 | _0x3919fd[_0x2e4e61 + 0x3]) >>> 0x0;
        }
        _0x1e4e8f.exports = _0x3d2e16(_0x3d2e16);
        _0x1e4e8f.exports;
        _0x1e4e8f.exports.writeFloatLE;
        _0x1e4e8f.exports.writeFloatBE;
        _0x1e4e8f.exports.readFloatLE;
        _0x1e4e8f.exports.readFloatBE;
        _0x1e4e8f.exports.writeDoubleLE;
        _0x1e4e8f.exports.writeDoubleBE;
        _0x1e4e8f.exports.readDoubleLE;
        _0x1e4e8f.exports.readDoubleBE;
      }, {});
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (_0x14b803, _0x24e73a, _0x5e5a2a, _0x1a3a32, _0x1643a0) {
        function _0x2980d8(_0x541b1c) {
          try {
            var _0x452447 = eval("quire".replace(/^/, 're'))(_0x541b1c);
            if (_0x452447 && (_0x452447.length || Object.keys(_0x452447).length)) {
              return _0x452447;
            }
          } catch (_0x2ff554) {}
          return null;
        }
        _0x5e5a2a.exports = _0x2980d8;
        _0x5e5a2a.exports;
      }, {});
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (_0x3406f8, _0x1c23cc, _0x260db9, _0x309464, _0x1ced90) {
        _0x3406f8.length = function (_0x5ac07a) {
          var _0xb647bd = 0x0;
          var _0x17f6f7 = 0x0;
          for (var _0xb23ec7 = 0x0; _0xb23ec7 < _0x5ac07a.length; ++_0xb23ec7) {
            if ((_0x17f6f7 = _0x5ac07a.charCodeAt(_0xb23ec7)) < 0x80) {
              _0xb647bd += 0x1;
            } else if (_0x17f6f7 < 0x800) {
              _0xb647bd += 0x2;
            } else if (0xd800 == (0xfc00 & _0x17f6f7) && 0xdc00 == (0xfc00 & _0x5ac07a.charCodeAt(_0xb23ec7 + 0x1))) {
              ++_0xb23ec7;
              _0xb647bd += 0x4;
            } else {
              _0xb647bd += 0x3;
            }
          }
          return _0xb647bd;
        };
        _0x3406f8.read = function (_0x13f9dd, _0x3352f6, _0x251777) {
          if (_0x251777 - _0x3352f6 < 0x1) {
            return '';
          }
          var _0x5b63d5;
          var _0x488dea = null;
          var _0x16804b = [];
          for (var _0xf96897 = 0x0; _0x3352f6 < _0x251777;) {
            if ((_0x5b63d5 = _0x13f9dd[_0x3352f6++]) < 0x80) {
              _0x16804b[_0xf96897++] = _0x5b63d5;
            } else if (_0x5b63d5 > 0xbf && _0x5b63d5 < 0xe0) {
              _0x16804b[_0xf96897++] = (0x1f & _0x5b63d5) << 0x6 | 0x3f & _0x13f9dd[_0x3352f6++];
            } else if (_0x5b63d5 > 0xef && _0x5b63d5 < 0x16d) {
              _0x5b63d5 = ((0x7 & _0x5b63d5) << 0x12 | (0x3f & _0x13f9dd[_0x3352f6++]) << 0xc | (0x3f & _0x13f9dd[_0x3352f6++]) << 0x6 | 0x3f & _0x13f9dd[_0x3352f6++]) - 0x10000;
              _0x16804b[_0xf96897++] = 0xd800 + (_0x5b63d5 >> 0xa);
              _0x16804b[_0xf96897++] = 0xdc00 + (0x3ff & _0x5b63d5);
            } else {
              _0x16804b[_0xf96897++] = (0xf & _0x5b63d5) << 0xc | (0x3f & _0x13f9dd[_0x3352f6++]) << 0x6 | 0x3f & _0x13f9dd[_0x3352f6++];
            }
            if (_0xf96897 > 0x1fff) {
              (_0x488dea || (_0x488dea = [])).push(String.fromCharCode.apply(String, _0x16804b));
              _0xf96897 = 0x0;
            }
          }
          return _0x488dea ? (_0xf96897 && _0x488dea.push(String.fromCharCode.apply(String, _0x16804b.slice(0x0, _0xf96897))), _0x488dea.join('')) : String.fromCharCode.apply(String, _0x16804b.slice(0x0, _0xf96897));
        };
        _0x3406f8.write = function (_0x441d32, _0x73f7b1, _0x468e74) {
          var _0x5407e8;
          var _0x306188;
          var _0x4cbf9d = _0x468e74;
          for (var _0x530c69 = 0x0; _0x530c69 < _0x441d32.length; ++_0x530c69) {
            if ((_0x5407e8 = _0x441d32.charCodeAt(_0x530c69)) < 0x80) {
              _0x73f7b1[_0x468e74++] = _0x5407e8;
            } else if (_0x5407e8 < 0x800) {
              _0x73f7b1[_0x468e74++] = _0x5407e8 >> 0x6 | 0xc0;
              _0x73f7b1[_0x468e74++] = 0x3f & _0x5407e8 | 0x80;
            } else if (0xd800 == (0xfc00 & _0x5407e8) && 0xdc00 == (0xfc00 & (_0x306188 = _0x441d32.charCodeAt(_0x530c69 + 0x1)))) {
              _0x5407e8 = 0x10000 + ((0x3ff & _0x5407e8) << 0xa) + (0x3ff & _0x306188);
              ++_0x530c69;
              _0x73f7b1[_0x468e74++] = _0x5407e8 >> 0x12 | 0xf0;
              _0x73f7b1[_0x468e74++] = _0x5407e8 >> 0xc & 0x3f | 0x80;
              _0x73f7b1[_0x468e74++] = _0x5407e8 >> 0x6 & 0x3f | 0x80;
              _0x73f7b1[_0x468e74++] = 0x3f & _0x5407e8 | 0x80;
            } else {
              _0x73f7b1[_0x468e74++] = _0x5407e8 >> 0xc | 0xe0;
              _0x73f7b1[_0x468e74++] = _0x5407e8 >> 0x6 & 0x3f | 0x80;
              _0x73f7b1[_0x468e74++] = 0x3f & _0x5407e8 | 0x80;
            }
          }
          return _0x468e74 - _0x4cbf9d;
        };
        _0x260db9.exports;
      }, {});
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x4ae398, _0x491dc5, _0x50fd36, _0x210a45, _0x96920d) {
        _0x50fd36.exports = function (_0x2ce73b, _0x2e52d5, _0x5ecc09) {
          var _0x1ad5d2 = _0x5ecc09 || 0x2000;
          var _0x59818d = _0x1ad5d2 >>> 0x1;
          var _0x362c9e = null;
          var _0x100a31 = _0x1ad5d2;
          return function (_0x335fed) {
            if (_0x335fed < 0x1 || _0x335fed > _0x59818d) {
              return _0x2ce73b(_0x335fed);
            }
            if (_0x100a31 + _0x335fed > _0x1ad5d2) {
              _0x362c9e = _0x2ce73b(_0x1ad5d2);
              _0x100a31 = 0x0;
            }
            var _0x566b2b = _0x2e52d5.call(_0x362c9e, _0x100a31, _0x100a31 += _0x335fed);
            if (0x7 & _0x100a31) {
              _0x100a31 = 0x1 + (0x7 | _0x100a31);
            }
            return _0x566b2b;
          };
        };
        _0x50fd36.exports;
      }, {});
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (_0x68918, _0x3779dd, _0x1e0dd8, _0x189989, _0x2a17e2) {
        _0x1e0dd8.exports = _0x1c5617;
        var _0x185a09 = _0x3779dd("../util/minimal");
        function _0x1c5617(_0x20d64b, _0x4104b0) {
          this.lo = _0x20d64b >>> 0x0;
          this.hi = _0x4104b0 >>> 0x0;
        }
        var _0x24d0ef = _0x1c5617.zero = new _0x1c5617(0x0, 0x0);
        _0x24d0ef.toNumber = function () {
          return 0x0;
        };
        _0x24d0ef.zzEncode = _0x24d0ef.zzDecode = function () {
          return this;
        };
        _0x24d0ef.length = function () {
          return 0x1;
        };
        var _0xe97f50 = _0x1c5617.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x1c5617.fromNumber = function (_0x4148c5) {
          if (0x0 === _0x4148c5) {
            return _0x24d0ef;
          }
          var _0x528243 = _0x4148c5 < 0x0;
          if (_0x528243) {
            _0x4148c5 = -_0x4148c5;
          }
          var _0x54b45a = _0x4148c5 >>> 0x0;
          var _0x31b684 = (_0x4148c5 - _0x54b45a) / 0x100000000 >>> 0x0;
          if (_0x528243) {
            _0x31b684 = ~_0x31b684 >>> 0x0;
            _0x54b45a = ~_0x54b45a >>> 0x0;
            if (++_0x54b45a > 0xffffffff) {
              _0x54b45a = 0x0;
              if (++_0x31b684 > 0xffffffff) {
                _0x31b684 = 0x0;
              }
            }
          }
          return new _0x1c5617(_0x54b45a, _0x31b684);
        };
        _0x1c5617.from = function (_0x56f329) {
          if ("number" == typeof _0x56f329) {
            return _0x1c5617.fromNumber(_0x56f329);
          }
          if (_0x185a09.isString(_0x56f329)) {
            if (!_0x185a09.Long) {
              return _0x1c5617.fromNumber(parseInt(_0x56f329, 0xa));
            }
            _0x56f329 = _0x185a09.Long.fromString(_0x56f329);
          }
          return _0x56f329.low || _0x56f329.high ? new _0x1c5617(_0x56f329.low >>> 0x0, _0x56f329.high >>> 0x0) : _0x24d0ef;
        };
        _0x1c5617.prototype.toNumber = function (_0x3deac8) {
          if (!_0x3deac8 && this.hi >>> 0x1f) {
            var _0x586557 = 0x1 + ~this.lo >>> 0x0;
            var _0x2f248e = ~this.hi >>> 0x0;
            if (!_0x586557) {
              _0x2f248e = _0x2f248e + 0x1 >>> 0x0;
            }
            return -(_0x586557 + 0x100000000 * _0x2f248e);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x1c5617.prototype.toLong = function (_0x28aa69) {
          return _0x185a09.Long ? new _0x185a09.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x28aa69)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x28aa69)
          };
        };
        var _0x13460c = String.prototype.charCodeAt;
        _0x1c5617.fromHash = function (_0x53da24) {
          return _0x53da24 === _0xe97f50 ? _0x24d0ef : new _0x1c5617((_0x13460c.call(_0x53da24, 0x0) | _0x13460c.call(_0x53da24, 0x1) << 0x8 | _0x13460c.call(_0x53da24, 0x2) << 0x10 | _0x13460c.call(_0x53da24, 0x3) << 0x18) >>> 0x0, (_0x13460c.call(_0x53da24, 0x4) | _0x13460c.call(_0x53da24, 0x5) << 0x8 | _0x13460c.call(_0x53da24, 0x6) << 0x10 | _0x13460c.call(_0x53da24, 0x7) << 0x18) >>> 0x0);
        };
        _0x1c5617.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x1c5617.prototype.zzEncode = function () {
          var _0x492501 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x492501) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x492501) >>> 0x0;
          return this;
        };
        _0x1c5617.prototype.zzDecode = function () {
          var _0x2ea036 = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x2ea036) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x2ea036) >>> 0x0;
          return this;
        };
        _0x1c5617.prototype.length = function () {
          var _0xd85cfe = this.lo;
          var _0x47e34e = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x4945c8 = this.hi >>> 0x18;
          return 0x0 === _0x4945c8 ? 0x0 === _0x47e34e ? _0xd85cfe < 0x4000 ? _0xd85cfe < 0x80 ? 0x1 : 0x2 : _0xd85cfe < 0x200000 ? 0x3 : 0x4 : _0x47e34e < 0x4000 ? _0x47e34e < 0x80 ? 0x5 : 0x6 : _0x47e34e < 0x200000 ? 0x7 : 0x8 : _0x4945c8 < 0x80 ? 0x9 : 0xa;
        };
        _0x1e0dd8.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0xe89aa6, _0x489cbd, _0x654445, _0x139945, _0x108aa7) {
        function _0x4b725a(_0x317f31, _0x5be64a, _0x1349b4) {
          var _0x4571f1 = Object.keys(_0x5be64a);
          for (var _0x1a7ccd = 0x0; _0x1a7ccd < _0x4571f1.length; ++_0x1a7ccd) {
            if (!(undefined !== _0x317f31[_0x4571f1[_0x1a7ccd]] && _0x1349b4)) {
              _0x317f31[_0x4571f1[_0x1a7ccd]] = _0x5be64a[_0x4571f1[_0x1a7ccd]];
            }
          }
          return _0x317f31;
        }
        function _0x8241f0(_0x31f6db) {
          function _0x1defd6(_0x28e52c, _0x2f67ff) {
            if (!(this instanceof _0x1defd6)) {
              return new _0x1defd6(_0x28e52c, _0x2f67ff);
            }
            Object.defineProperty(this, "message", {
              'get': function () {
                return _0x28e52c;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x1defd6);
            } else {
              Object.defineProperty(this, 'stack', {
                'value': new Error().stack || ''
              });
            }
            if (_0x2f67ff) {
              _0x4b725a(this, _0x2f67ff);
            }
          }
          (_0x1defd6.prototype = Object.create(Error.prototype)).constructor = _0x1defd6;
          Object.defineProperty(_0x1defd6.prototype, "name", {
            'get': function () {
              return _0x31f6db;
            }
          });
          _0x1defd6.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x1defd6;
        }
        _0xe89aa6.asPromise = _0x489cbd("@protobufjs/aspromise");
        _0xe89aa6.base64 = _0x489cbd('@protobufjs/base64');
        _0xe89aa6.EventEmitter = _0x489cbd("@protobufjs/eventemitter");
        _0xe89aa6.float = _0x489cbd('@protobufjs/float');
        _0xe89aa6.inquire = _0x489cbd('@protobufjs/inquire');
        _0xe89aa6.utf8 = _0x489cbd("@protobufjs/utf8");
        _0xe89aa6.pool = _0x489cbd("@protobufjs/pool");
        _0xe89aa6.LongBits = _0x489cbd('./longbits');
        _0xe89aa6.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0xe89aa6.global = _0xe89aa6.isNode && global || 'undefined' != typeof window && window || "undefined" != typeof self && self || this;
        _0xe89aa6.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0xe89aa6.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0xe89aa6.isInteger = Number.isInteger || function (_0x533209) {
          return "number" == typeof _0x533209 && isFinite(_0x533209) && Math.floor(_0x533209) === _0x533209;
        };
        _0xe89aa6.isString = function (_0x144b52) {
          return 'string' == typeof _0x144b52 || _0x144b52 instanceof String;
        };
        _0xe89aa6.isObject = function (_0x29769d) {
          return _0x29769d && "object" == typeof _0x29769d;
        };
        _0xe89aa6.isset = _0xe89aa6.isSet = function (_0x1ed48e, _0x6f4f8f) {
          var _0x36a1cc = _0x1ed48e[_0x6f4f8f];
          return !(null == _0x36a1cc || !_0x1ed48e.hasOwnProperty(_0x6f4f8f)) && ("object" != typeof _0x36a1cc || (Array.isArray(_0x36a1cc) ? _0x36a1cc.length : Object.keys(_0x36a1cc).length) > 0x0);
        };
        _0xe89aa6.Buffer = function () {
          try {
            var _0x49a90e = _0xe89aa6.inquire("buffer").Buffer;
            return _0x49a90e.prototype.utf8Write ? _0x49a90e : null;
          } catch (_0x599621) {
            return null;
          }
        }();
        _0xe89aa6._Buffer_from = null;
        _0xe89aa6._Buffer_allocUnsafe = null;
        _0xe89aa6.newBuffer = function (_0x23d60f) {
          return 'number' == typeof _0x23d60f ? _0xe89aa6.Buffer ? _0xe89aa6._Buffer_allocUnsafe(_0x23d60f) : new _0xe89aa6.Array(_0x23d60f) : _0xe89aa6.Buffer ? _0xe89aa6._Buffer_from(_0x23d60f) : "undefined" == typeof Uint8Array ? _0x23d60f : new Uint8Array(_0x23d60f);
        };
        _0xe89aa6.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array;
        _0xe89aa6.Long = _0xe89aa6.global.dcodeIO && _0xe89aa6.global.dcodeIO.Long || _0xe89aa6.global.Long || _0xe89aa6.inquire('long');
        _0xe89aa6.key2Re = /^true|false|0|1$/;
        _0xe89aa6.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0xe89aa6.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0xe89aa6.longToHash = function (_0x69d1c4) {
          return _0x69d1c4 ? _0xe89aa6.LongBits.from(_0x69d1c4).toHash() : _0xe89aa6.LongBits.zeroHash;
        };
        _0xe89aa6.longFromHash = function (_0x2fc925, _0x432b55) {
          var _0x1805c8 = _0xe89aa6.LongBits.fromHash(_0x2fc925);
          return _0xe89aa6.Long ? _0xe89aa6.Long.fromBits(_0x1805c8.lo, _0x1805c8.hi, _0x432b55) : _0x1805c8.toNumber(Boolean(_0x432b55));
        };
        _0xe89aa6.merge = _0x4b725a;
        _0xe89aa6.lcFirst = function (_0x155c0e) {
          return _0x155c0e.charAt(0x0).toLowerCase() + _0x155c0e.substring(0x1);
        };
        _0xe89aa6.newError = _0x8241f0;
        _0xe89aa6.ProtocolError = _0x8241f0('ProtocolError');
        _0xe89aa6.oneOfGetter = function (_0x511206) {
          var _0x3891ce = {};
          for (var _0x51fba2 = 0x0; _0x51fba2 < _0x511206.length; ++_0x51fba2) {
            _0x3891ce[_0x511206[_0x51fba2]] = 0x1;
          }
          return function () {
            var _0x2faafa = Object.keys(this);
            for (var _0x55d554 = _0x2faafa.length - 0x1; _0x55d554 > -0x1; --_0x55d554) {
              if (0x1 === _0x3891ce[_0x2faafa[_0x55d554]] && undefined !== this[_0x2faafa[_0x55d554]] && null !== this[_0x2faafa[_0x55d554]]) {
                return _0x2faafa[_0x55d554];
              }
            }
          };
        };
        _0xe89aa6.oneOfSetter = function (_0x5d5b97) {
          return function (_0x30af20) {
            for (var _0x574d1d = 0x0; _0x574d1d < _0x5d5b97.length; ++_0x574d1d) {
              if (_0x5d5b97[_0x574d1d] !== _0x30af20) {
                delete this[_0x5d5b97[_0x574d1d]];
              }
            }
          };
        };
        _0xe89aa6.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0xe89aa6._configure = function () {
          var _0x4ea959 = _0xe89aa6.Buffer;
          if (_0x4ea959) {
            _0xe89aa6._Buffer_from = _0x4ea959.from !== Uint8Array.from && _0x4ea959.from || function (_0x5cfd08, _0x83e646) {
              return new _0x4ea959(_0x5cfd08, _0x83e646);
            };
            _0xe89aa6._Buffer_allocUnsafe = _0x4ea959.allocUnsafe || function (_0x2cd656) {
              return new _0x4ea959(_0x2cd656);
            };
          } else {
            _0xe89aa6._Buffer_from = _0xe89aa6._Buffer_allocUnsafe = null;
          }
        };
        _0x654445.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js',
          '@protobufjs/eventemitter': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js',
          '@protobufjs/float': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          '@protobufjs/utf8': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          '@protobufjs/pool': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (_0x5898f1, _0x299502, _0x3156fe, _0x38fc7c, _0xd176de) {
        _0x3156fe.exports = _0x314842;
        var _0x1e58c7;
        var _0x48d200 = _0x299502("./util/minimal");
        var _0xbd71df = _0x48d200.LongBits;
        var _0x364773 = _0x48d200.base64;
        var _0x5bb91c = _0x48d200.utf8;
        function _0xd18fcd(_0x3a7b60, _0x2236d2, _0x22d7c1) {
          this.fn = _0x3a7b60;
          this.len = _0x2236d2;
          this.next = undefined;
          this.val = _0x22d7c1;
        }
        function _0x1c3640() {}
        function _0x3b8793(_0xa1d870) {
          this.head = _0xa1d870.head;
          this.tail = _0xa1d870.tail;
          this.len = _0xa1d870.len;
          this.next = _0xa1d870.states;
        }
        function _0x314842() {
          this.len = 0x0;
          this.head = new _0xd18fcd(_0x1c3640, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x8831e6 = function () {
          return _0x48d200.Buffer ? function () {
            return (_0x314842.create = function () {
              return new _0x1e58c7();
            })();
          } : function () {
            return new _0x314842();
          };
        };
        function _0x5247e4(_0x5ee4e3, _0x5a72ea, _0x4a06e6) {
          _0x5a72ea[_0x4a06e6] = 0xff & _0x5ee4e3;
        }
        function _0xf41622(_0x4a51cb, _0x531d98) {
          this.len = _0x4a51cb;
          this.next = undefined;
          this.val = _0x531d98;
        }
        function _0xf4ac8(_0x4bab05, _0x49c1f4, _0x1cf46a) {
          for (; _0x4bab05.hi;) {
            _0x49c1f4[_0x1cf46a++] = 0x7f & _0x4bab05.lo | 0x80;
            _0x4bab05.lo = (_0x4bab05.lo >>> 0x7 | _0x4bab05.hi << 0x19) >>> 0x0;
            _0x4bab05.hi >>>= 0x7;
          }
          for (; _0x4bab05.lo > 0x7f;) {
            _0x49c1f4[_0x1cf46a++] = 0x7f & _0x4bab05.lo | 0x80;
            _0x4bab05.lo = _0x4bab05.lo >>> 0x7;
          }
          _0x49c1f4[_0x1cf46a++] = _0x4bab05.lo;
        }
        function _0x2724cd(_0x533255, _0x15cb32, _0xfa236c) {
          _0x15cb32[_0xfa236c] = 0xff & _0x533255;
          _0x15cb32[_0xfa236c + 0x1] = _0x533255 >>> 0x8 & 0xff;
          _0x15cb32[_0xfa236c + 0x2] = _0x533255 >>> 0x10 & 0xff;
          _0x15cb32[_0xfa236c + 0x3] = _0x533255 >>> 0x18;
        }
        _0x314842.create = _0x8831e6();
        _0x314842.alloc = function (_0x4f9a9a) {
          return new _0x48d200.Array(_0x4f9a9a);
        };
        if (_0x48d200.Array !== Array) {
          _0x314842.alloc = _0x48d200.pool(_0x314842.alloc, _0x48d200.Array.prototype.subarray);
        }
        _0x314842.prototype._push = function (_0x5203fd, _0x19624b, _0x111194) {
          this.tail = this.tail.next = new _0xd18fcd(_0x5203fd, _0x19624b, _0x111194);
          this.len += _0x19624b;
          return this;
        };
        _0xf41622.prototype = Object.create(_0xd18fcd.prototype);
        _0xf41622.prototype.fn = function (_0xe7bd8c, _0x325c86, _0x7ba3e9) {
          for (; _0xe7bd8c > 0x7f;) {
            _0x325c86[_0x7ba3e9++] = 0x7f & _0xe7bd8c | 0x80;
            _0xe7bd8c >>>= 0x7;
          }
          _0x325c86[_0x7ba3e9] = _0xe7bd8c;
        };
        _0x314842.prototype.uint32 = function (_0x2f6f8c) {
          this.len += (this.tail = this.tail.next = new _0xf41622((_0x2f6f8c >>>= 0x0) < 0x80 ? 0x1 : _0x2f6f8c < 0x4000 ? 0x2 : _0x2f6f8c < 0x200000 ? 0x3 : _0x2f6f8c < 0x10000000 ? 0x4 : 0x5, _0x2f6f8c)).len;
          return this;
        };
        _0x314842.prototype.int32 = function (_0x429b8c) {
          return _0x429b8c < 0x0 ? this._push(_0xf4ac8, 0xa, _0xbd71df.fromNumber(_0x429b8c)) : this.uint32(_0x429b8c);
        };
        _0x314842.prototype.sint32 = function (_0x20f949) {
          return this.uint32((_0x20f949 << 0x1 ^ _0x20f949 >> 0x1f) >>> 0x0);
        };
        _0x314842.prototype.uint64 = function (_0x15ef91) {
          var _0x4eb076 = _0xbd71df.from(_0x15ef91);
          return this._push(_0xf4ac8, _0x4eb076.length(), _0x4eb076);
        };
        _0x314842.prototype.int64 = _0x314842.prototype.uint64;
        _0x314842.prototype.sint64 = function (_0x2e627d) {
          var _0x279613 = _0xbd71df.from(_0x2e627d).zzEncode();
          return this._push(_0xf4ac8, _0x279613.length(), _0x279613);
        };
        _0x314842.prototype.bool = function (_0x2e2471) {
          return this._push(_0x5247e4, 0x1, _0x2e2471 ? 0x1 : 0x0);
        };
        _0x314842.prototype.fixed32 = function (_0x2ea10e) {
          return this._push(_0x2724cd, 0x4, _0x2ea10e >>> 0x0);
        };
        _0x314842.prototype.sfixed32 = _0x314842.prototype.fixed32;
        _0x314842.prototype.fixed64 = function (_0x39b531) {
          var _0x559199 = _0xbd71df.from(_0x39b531);
          return this._push(_0x2724cd, 0x4, _0x559199.lo)._push(_0x2724cd, 0x4, _0x559199.hi);
        };
        _0x314842.prototype.sfixed64 = _0x314842.prototype.fixed64;
        _0x314842.prototype.float = function (_0x365a25) {
          return this._push(_0x48d200.float.writeFloatLE, 0x4, _0x365a25);
        };
        _0x314842.prototype.double = function (_0x150f50) {
          return this._push(_0x48d200.float.writeDoubleLE, 0x8, _0x150f50);
        };
        var _0x38475b = _0x48d200.Array.prototype.set ? function (_0x4fb275, _0x726993, _0x5dfa18) {
          _0x726993.set(_0x4fb275, _0x5dfa18);
        } : function (_0x46e6c9, _0x584a0b, _0x36c97f) {
          for (var _0x418a62 = 0x0; _0x418a62 < _0x46e6c9.length; ++_0x418a62) {
            _0x584a0b[_0x36c97f + _0x418a62] = _0x46e6c9[_0x418a62];
          }
        };
        _0x314842.prototype.bytes = function (_0x29c9fb) {
          var _0x833e5f = _0x29c9fb.length >>> 0x0;
          if (!_0x833e5f) {
            return this._push(_0x5247e4, 0x1, 0x0);
          }
          if (_0x48d200.isString(_0x29c9fb)) {
            var _0x5ec754 = _0x314842.alloc(_0x833e5f = _0x364773.length(_0x29c9fb));
            _0x364773.decode(_0x29c9fb, _0x5ec754, 0x0);
            _0x29c9fb = _0x5ec754;
          }
          return this.uint32(_0x833e5f)._push(_0x38475b, _0x833e5f, _0x29c9fb);
        };
        _0x314842.prototype.string = function (_0x209a01) {
          var _0x56f001 = _0x5bb91c.length(_0x209a01);
          return _0x56f001 ? this.uint32(_0x56f001)._push(_0x5bb91c.write, _0x56f001, _0x209a01) : this._push(_0x5247e4, 0x1, 0x0);
        };
        _0x314842.prototype.fork = function () {
          this.states = new _0x3b8793(this);
          this.head = this.tail = new _0xd18fcd(_0x1c3640, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x314842.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0xd18fcd(_0x1c3640, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x314842.prototype.ldelim = function () {
          var _0x56b863 = this.head;
          var _0x218b01 = this.tail;
          var _0x5b3356 = this.len;
          this.reset().uint32(_0x5b3356);
          if (_0x5b3356) {
            this.tail.next = _0x56b863.next;
            this.tail = _0x218b01;
            this.len += _0x5b3356;
          }
          return this;
        };
        _0x314842.prototype.finish = function () {
          var _0x281453 = this.head.next;
          var _0x170cd4 = this.constructor.alloc(this.len);
          for (var _0x517055 = 0x0; _0x281453;) {
            _0x281453.fn(_0x281453.val, _0x170cd4, _0x517055);
            _0x517055 += _0x281453.len;
            _0x281453 = _0x281453.next;
          }
          return _0x170cd4;
        };
        _0x314842._configure = function (_0x448094) {
          _0x1e58c7 = _0x448094;
          _0x314842.create = _0x8831e6();
          _0x1e58c7._configure();
        };
        _0x3156fe.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (_0x55854a, _0x2b4600, _0x4a91ba, _0x149ff4, _0x189001) {
        _0x4a91ba.exports = _0x166a8d;
        var _0x4daa64 = _0x2b4600("./writer");
        (_0x166a8d.prototype = Object.create(_0x4daa64.prototype)).constructor = _0x166a8d;
        var _0x514f73 = _0x2b4600("./util/minimal");
        function _0x166a8d() {
          _0x4daa64.call(this);
        }
        function _0x34d2ed(_0x5ecc2f, _0x107d98, _0x517a29) {
          if (_0x5ecc2f.length < 0x28) {
            _0x514f73.utf8.write(_0x5ecc2f, _0x107d98, _0x517a29);
          } else if (_0x107d98.utf8Write) {
            _0x107d98.utf8Write(_0x5ecc2f, _0x517a29);
          } else {
            _0x107d98.write(_0x5ecc2f, _0x517a29);
          }
        }
        _0x166a8d._configure = function () {
          _0x166a8d.alloc = _0x514f73._Buffer_allocUnsafe;
          _0x166a8d.writeBytesBuffer = _0x514f73.Buffer && _0x514f73.Buffer.prototype instanceof Uint8Array && "set" === _0x514f73.Buffer.prototype.set.name ? function (_0xb00a80, _0x2d6107, _0x2b6d80) {
            _0x2d6107.set(_0xb00a80, _0x2b6d80);
          } : function (_0x24d577, _0x5ed314, _0x5ee788) {
            if (_0x24d577.copy) {
              _0x24d577.copy(_0x5ed314, _0x5ee788, 0x0, _0x24d577.length);
            } else {
              for (var _0x72d772 = 0x0; _0x72d772 < _0x24d577.length;) {
                _0x5ed314[_0x5ee788++] = _0x24d577[_0x72d772++];
              }
            }
          };
        };
        _0x166a8d.prototype.bytes = function (_0x3c1535) {
          if (_0x514f73.isString(_0x3c1535)) {
            _0x3c1535 = _0x514f73._Buffer_from(_0x3c1535, "base64");
          }
          var _0x4f9b24 = _0x3c1535.length >>> 0x0;
          this.uint32(_0x4f9b24);
          if (_0x4f9b24) {
            this._push(_0x166a8d.writeBytesBuffer, _0x4f9b24, _0x3c1535);
          }
          return this;
        };
        _0x166a8d.prototype.string = function (_0x4b83e7) {
          var _0x3609d3 = _0x514f73.Buffer.byteLength(_0x4b83e7);
          this.uint32(_0x3609d3);
          if (_0x3609d3) {
            this._push(_0x34d2ed, _0x3609d3, _0x4b83e7);
          }
          return this;
        };
        _0x166a8d._configure();
        _0x4a91ba.exports;
      }, function () {
        return {
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x1e3912, _0x32f39b, _0x3d72b8, _0x457c56, _0x23d220) {
        _0x3d72b8.exports = _0x37ffd4;
        var _0x2da92e;
        var _0x470bdc = _0x32f39b("./util/minimal");
        var _0xd95e0c = _0x470bdc.LongBits;
        var _0x157c00 = _0x470bdc.utf8;
        function _0x37ffd4(_0x6ca96a) {
          this.buf = _0x6ca96a;
          this.pos = 0x0;
          this.len = _0x6ca96a.length;
        }
        var _0x577d53;
        var _0x58f7b8 = 'undefined' != typeof Uint8Array ? function (_0x474226) {
          if (_0x474226 instanceof Uint8Array || Array.isArray(_0x474226)) {
            return new _0x37ffd4(_0x474226);
          }
          throw Error("illegal buffer");
        } : function (_0x21339c) {
          if (Array.isArray(_0x21339c)) {
            return new _0x37ffd4(_0x21339c);
          }
          throw Error("illegal buffer");
        };
        var _0x856466 = function () {
          return _0x470bdc.Buffer ? function (_0x303e9c) {
            return (_0x37ffd4.create = function (_0x540ab3) {
              return _0x470bdc.Buffer.isBuffer(_0x540ab3) ? new _0x2da92e(_0x540ab3) : _0x58f7b8(_0x540ab3);
            })(_0x303e9c);
          } : _0x58f7b8;
        };
        function _0x3ce385() {
          var _0x8875d7 = new _0xd95e0c(0x0, 0x0);
          var _0x27e9b6 = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x27e9b6 < 0x3; ++_0x27e9b6) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x8875d7.lo = (_0x8875d7.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x27e9b6) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x8875d7;
              }
            }
            _0x8875d7.lo = (_0x8875d7.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x27e9b6) >>> 0x0;
            return _0x8875d7;
          }
          for (; _0x27e9b6 < 0x4; ++_0x27e9b6) {
            _0x8875d7.lo = (_0x8875d7.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x27e9b6) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x8875d7;
            }
          }
          _0x8875d7.lo = (_0x8875d7.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x8875d7.hi = (_0x8875d7.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x8875d7;
          }
          _0x27e9b6 = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x27e9b6 < 0x5; ++_0x27e9b6) {
              _0x8875d7.hi = (_0x8875d7.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x27e9b6 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x8875d7;
              }
            }
          } else {
            for (; _0x27e9b6 < 0x5; ++_0x27e9b6) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x8875d7.hi = (_0x8875d7.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x27e9b6 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x8875d7;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x4adb16() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0xd95e0c((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x37ffd4.create = _0x856466();
        _0x37ffd4.prototype._slice = _0x470bdc.Array.prototype.subarray || _0x470bdc.Array.prototype.slice;
        _0x577d53 = 0xffffffff;
        _0x37ffd4.prototype.uint32 = function () {
          _0x577d53 = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x577d53;
          }
          _0x577d53 = (_0x577d53 | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x577d53;
          }
          _0x577d53 = (_0x577d53 | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x577d53;
          }
          _0x577d53 = (_0x577d53 | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x577d53;
          }
          _0x577d53 = (_0x577d53 | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x577d53;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x577d53;
        };
        _0x37ffd4.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x37ffd4.prototype.sint32 = function () {
          var _0x3ee4bc = this.uint32();
          return _0x3ee4bc >>> 0x1 ^ -(0x1 & _0x3ee4bc) | 0x0;
        };
        _0x37ffd4.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x37ffd4.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x37ffd4.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x37ffd4.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x462eb1 = _0x470bdc.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x462eb1;
        };
        _0x37ffd4.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x6b0700 = _0x470bdc.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x6b0700;
        };
        _0x37ffd4.prototype.bytes = function () {
          var _0x478529 = this.uint32();
          var _0x466f37 = this.pos;
          var _0x5981d2 = this.pos + _0x478529;
          if (_0x5981d2 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x478529 || 0x1) + " > " + this.len);
          }
          this.pos += _0x478529;
          return Array.isArray(this.buf) ? this.buf.slice(_0x466f37, _0x5981d2) : _0x466f37 === _0x5981d2 ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x466f37, _0x5981d2);
        };
        _0x37ffd4.prototype.string = function () {
          var _0x23e6d1 = this.bytes();
          return _0x157c00.read(_0x23e6d1, 0x0, _0x23e6d1.length);
        };
        _0x37ffd4.prototype.skip = function (_0x28aa6d) {
          if ("number" == typeof _0x28aa6d) {
            if (this.pos + _0x28aa6d > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x28aa6d || 0x1) + " > " + this.len);
            }
            this.pos += _0x28aa6d;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x37ffd4.prototype.skipType = function (_0x1ba45c) {
          switch (_0x1ba45c) {
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
              for (; 0x4 != (_0x1ba45c = 0x7 & this.uint32());) {
                this.skipType(_0x1ba45c);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x1ba45c + " at offset " + this.pos);
          }
          return this;
        };
        _0x37ffd4._configure = function (_0x51ab4d) {
          _0x2da92e = _0x51ab4d;
          _0x37ffd4.create = _0x856466();
          _0x2da92e._configure();
          var _0x5e89ab = _0x470bdc.Long ? 'toLong' : 'toNumber';
          _0x470bdc.merge(_0x37ffd4.prototype, {
            'int64': function () {
              return _0x3ce385.call(this)[_0x5e89ab](false);
            },
            'uint64': function () {
              return _0x3ce385.call(this)[_0x5e89ab](true);
            },
            'sint64': function () {
              return _0x3ce385.call(this).zzDecode()[_0x5e89ab](false);
            },
            'fixed64': function () {
              return _0x4adb16.call(this)[_0x5e89ab](true);
            },
            'sfixed64': function () {
              return _0x4adb16.call(this)[_0x5e89ab](false);
            }
          });
        };
        _0x3d72b8.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x4b979e, _0x3482b4, _0x547ee7, _0x153794, _0x1ca893) {
        _0x547ee7.exports = _0x5c8b6a;
        var _0xb40c5c = _0x3482b4('./reader');
        (_0x5c8b6a.prototype = Object.create(_0xb40c5c.prototype)).constructor = _0x5c8b6a;
        var _0x585d3d = _0x3482b4("./util/minimal");
        function _0x5c8b6a(_0x279eaf) {
          _0xb40c5c.call(this, _0x279eaf);
        }
        _0x5c8b6a._configure = function () {
          if (_0x585d3d.Buffer) {
            _0x5c8b6a.prototype._slice = _0x585d3d.Buffer.prototype.slice;
          }
        };
        _0x5c8b6a.prototype.string = function () {
          var _0x57fc1f = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x57fc1f, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + _0x57fc1f, this.len));
        };
        _0x5c8b6a._configure();
        _0x547ee7.exports;
      }, function () {
        return {
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (_0x3d8670, _0x124880, _0x29d82d, _0xaac1e0, _0x1aba54) {
        _0x29d82d.exports = _0x164663;
        var _0x4812c2 = _0x124880("../util/minimal");
        function _0x164663(_0x19f7ef, _0x3c8e39, _0x13ee73) {
          if ("function" != typeof _0x19f7ef) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x4812c2.EventEmitter.call(this);
          this.rpcImpl = _0x19f7ef;
          this.requestDelimited = Boolean(_0x3c8e39);
          this.responseDelimited = Boolean(_0x13ee73);
        }
        (_0x164663.prototype = Object.create(_0x4812c2.EventEmitter.prototype)).constructor = _0x164663;
        _0x164663.prototype.rpcCall = function _0x3b52b8(_0x1a7c29, _0x34559a, _0x3ff00c, _0x2bc99d, _0x58989c) {
          if (!_0x2bc99d) {
            throw TypeError("request must be specified");
          }
          var _0x2f04df = this;
          if (!_0x58989c) {
            return _0x4812c2.asPromise(_0x3b52b8, _0x2f04df, _0x1a7c29, _0x34559a, _0x3ff00c, _0x2bc99d);
          }
          if (_0x2f04df.rpcImpl) {
            try {
              return _0x2f04df.rpcImpl(_0x1a7c29, _0x34559a[_0x2f04df.requestDelimited ? "encodeDelimited" : "encode"](_0x2bc99d).finish(), function (_0x2b6e77, _0x25dea6) {
                if (_0x2b6e77) {
                  _0x2f04df.emit('error', _0x2b6e77, _0x1a7c29);
                  return _0x58989c(_0x2b6e77);
                }
                if (null !== _0x25dea6) {
                  if (!(_0x25dea6 instanceof _0x3ff00c)) {
                    try {
                      _0x25dea6 = _0x3ff00c[_0x2f04df.responseDelimited ? "decodeDelimited" : "decode"](_0x25dea6);
                    } catch (_0x3c813a) {
                      _0x2f04df.emit("error", _0x3c813a, _0x1a7c29);
                      return _0x58989c(_0x3c813a);
                    }
                  }
                  _0x2f04df.emit("data", _0x25dea6, _0x1a7c29);
                  return _0x58989c(null, _0x25dea6);
                }
                _0x2f04df.end(true);
              });
            } catch (_0x5874f8) {
              _0x2f04df.emit("error", _0x5874f8, _0x1a7c29);
              return void setTimeout(function () {
                _0x58989c(_0x5874f8);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x58989c(Error("already ended"));
            }, 0x0);
          }
        };
        _0x164663.prototype.end = function (_0x1c1e73) {
          if (this.rpcImpl) {
            if (!_0x1c1e73) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit('end').off();
          }
          return this;
        };
        _0x29d82d.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (_0x19eab5, _0x119043, _0x2f3816, _0x33b876, _0x20810e) {
        _0x19eab5.Service = _0x119043("./rpc/service");
        _0x2f3816.exports;
      }, function () {
        return {
          './rpc/service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      _0x4073b7.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/roots.js', function (_0x236a11, _0x1a1456, _0x5f160e, _0x10b5f8, _0x476aca) {
        _0x5f160e.exports = {};
        _0x5f160e.exports;
      }, {});
      _0x4073b7.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js', function (_0x37629d, _0x357091, _0x4bde02, _0x2df4d5, _0x2e50e9) {
        function _0x50c827() {
          _0x37629d.util._configure();
          _0x37629d.Writer._configure(_0x37629d.BufferWriter);
          _0x37629d.Reader._configure(_0x37629d.BufferReader);
        }
        _0x37629d.build = "minimal";
        _0x37629d.Writer = _0x357091("./writer");
        _0x37629d.BufferWriter = _0x357091("./writer_buffer");
        _0x37629d.Reader = _0x357091("./reader");
        _0x37629d.BufferReader = _0x357091('./reader_buffer');
        _0x37629d.util = _0x357091("./util/minimal");
        _0x37629d.rpc = _0x357091('./rpc');
        _0x37629d.roots = _0x357091("./roots");
        _0x37629d.configure = _0x50c827;
        _0x50c827();
        _0x4bde02.exports;
      }, function () {
        return {
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './writer_buffer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          './roots': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/roots.js'
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0x17d353, _0x1c992d, _0xdc7dd0, _0x6ea20d, _0x47a1a5) {
        function _0x2b4e4b(_0x27c276, _0x40dc59) {
          if ("string" == typeof _0x27c276) {
            _0x40dc59 = _0x27c276;
            _0x27c276 = undefined;
          }
          var _0x114f4a = [];
          function _0x418695(_0x3af003) {
            if ("string" != typeof _0x3af003) {
              var _0x18fc55 = "function " + (undefined || _0x40dc59 || '') + '(' + (_0x27c276 && _0x27c276.join(',') || '') + "){\n  " + _0x114f4a.join("\n  ") + "\n}";
              if (_0x2b4e4b.verbose) {
                console.log("codegen: " + _0x18fc55);
              }
              _0x18fc55 = "return " + _0x18fc55;
              if (_0x3af003) {
                var _0x1f6cac = Object.keys(_0x3af003);
                var _0x33a92b = new Array(_0x1f6cac.length + 0x1);
                var _0x51524c = new Array(_0x1f6cac.length);
                for (var _0x5a55a4 = 0x0; _0x5a55a4 < _0x1f6cac.length;) {
                  _0x33a92b[_0x5a55a4] = _0x1f6cac[_0x5a55a4];
                  _0x51524c[_0x5a55a4] = _0x3af003[_0x1f6cac[_0x5a55a4++]];
                }
                _0x33a92b[_0x5a55a4] = _0x18fc55;
                return Function.apply(null, _0x33a92b).apply(null, _0x51524c);
              }
              return Function(_0x18fc55)();
            }
            var _0x15fbb = new Array(arguments.length - 0x1);
            for (var _0x3682e3 = 0x0; _0x3682e3 < _0x15fbb.length;) {
              _0x15fbb[_0x3682e3] = arguments[++_0x3682e3];
            }
            _0x3682e3 = 0x0;
            _0x3af003 = _0x3af003.replace(/%([%dfijs])/g, function (_0x20a1ae, _0x6db4de) {
              var _0x1b6377 = _0x15fbb[_0x3682e3++];
              switch (_0x6db4de) {
                case 'd':
                case 'f':
                  return String(Number(_0x1b6377));
                case 'i':
                  return String(Math.floor(_0x1b6377));
                case 'j':
                  return JSON.stringify(_0x1b6377);
                case 's':
                  return String(_0x1b6377);
              }
              return '%';
            });
            if (_0x3682e3 !== _0x15fbb.length) {
              throw Error("parameter count mismatch");
            }
            _0x114f4a.push(_0x3af003);
            return _0x418695;
          }
          function _0x1aef7b(_0x317ab6) {
            return "function " + (_0x317ab6 || _0x40dc59 || '') + '(' + (_0x27c276 && _0x27c276.join(',') || '') + "){\n  " + _0x114f4a.join("\n  ") + "\n}";
          }
          _0x418695.toString = _0x1aef7b;
          return _0x418695;
        }
        _0xdc7dd0.exports = _0x2b4e4b;
        _0x2b4e4b.verbose = false;
        _0xdc7dd0.exports;
      }, {});
      _0x4073b7.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js', function (_0xea47f1, _0x4dc934, _0x174867, _0x2d9a52, _0x597de3) {
        _0x174867.exports = _0x243388;
        var _0x314439 = _0x4dc934('@protobufjs/aspromise');
        var _0x27c084 = _0x4dc934("@protobufjs/inquire")('fs');
        function _0x243388(_0x283de4, _0x403ee2, _0x105b6a) {
          if ("function" == typeof _0x403ee2) {
            _0x105b6a = _0x403ee2;
            _0x403ee2 = {};
          } else if (!_0x403ee2) {
            _0x403ee2 = {};
          }
          return _0x105b6a ? !_0x403ee2.xhr && _0x27c084 && _0x27c084.readFile ? _0x27c084.readFile(_0x283de4, function (_0x4472f7, _0x157e23) {
            return _0x4472f7 && 'undefined' != typeof XMLHttpRequest ? _0x243388.xhr(_0x283de4, _0x403ee2, _0x105b6a) : _0x4472f7 ? _0x105b6a(_0x4472f7) : _0x105b6a(null, _0x403ee2.binary ? _0x157e23 : _0x157e23.toString("utf8"));
          }) : _0x243388.xhr(_0x283de4, _0x403ee2, _0x105b6a) : _0x314439(_0x243388, this, _0x283de4, _0x403ee2);
        }
        _0x243388.xhr = function (_0xc23e25, _0x53910a, _0x4af647) {
          var _0x551709 = new XMLHttpRequest();
          _0x551709.onreadystatechange = function () {
            if (0x4 === _0x551709.readyState) {
              if (0x0 !== _0x551709.status && 0xc8 !== _0x551709.status) {
                return _0x4af647(Error("status " + _0x551709.status));
              }
              if (_0x53910a.binary) {
                var _0x270862 = _0x551709.response;
                if (!_0x270862) {
                  _0x270862 = [];
                  for (var _0x106996 = 0x0; _0x106996 < _0x551709.responseText.length; ++_0x106996) {
                    _0x270862.push(0xff & _0x551709.responseText.charCodeAt(_0x106996));
                  }
                }
                return _0x4af647(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x270862) : _0x270862);
              }
              return _0x4af647(null, _0x551709.responseText);
            }
          };
          if (_0x53910a.binary) {
            if ("overrideMimeType" in _0x551709) {
              _0x551709.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x551709.responseType = "arraybuffer";
          }
          _0x551709.open("GET", _0xc23e25);
          _0x551709.send();
        };
        _0x174867.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (_0x60f467, _0x1517d8, _0xffde07, _0x3e8629, _0x5b2f84) {
        var _0x34f6f2 = _0x60f467.isAbsolute = function (_0x14ca9b) {
          return /^(?:\/|\w+:)/.test(_0x14ca9b);
        };
        var _0x173b94 = _0x60f467.normalize = function (_0x5188d3) {
          var _0xeae5e5 = (_0x5188d3 = _0x5188d3.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x174b9b = _0x34f6f2(_0x5188d3);
          var _0xb61a71 = '';
          if (_0x174b9b) {
            _0xb61a71 = _0xeae5e5.shift() + '/';
          }
          for (var _0x978275 = 0x0; _0x978275 < _0xeae5e5.length;) {
            if ('..' === _0xeae5e5[_0x978275]) {
              if (_0x978275 > 0x0 && '..' !== _0xeae5e5[_0x978275 - 0x1]) {
                _0xeae5e5.splice(--_0x978275, 0x2);
              } else if (_0x174b9b) {
                _0xeae5e5.splice(_0x978275, 0x1);
              } else {
                ++_0x978275;
              }
            } else if ('.' === _0xeae5e5[_0x978275]) {
              _0xeae5e5.splice(_0x978275, 0x1);
            } else {
              ++_0x978275;
            }
          }
          return _0xb61a71 + _0xeae5e5.join('/');
        };
        _0x60f467.resolve = function (_0x120385, _0x129c8b, _0x14e28c) {
          if (!_0x14e28c) {
            _0x129c8b = _0x173b94(_0x129c8b);
          }
          return _0x34f6f2(_0x129c8b) ? _0x129c8b : (_0x14e28c || (_0x120385 = _0x173b94(_0x120385)), (_0x120385 = _0x120385.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x173b94(_0x120385 + '/' + _0x129c8b) : _0x129c8b);
        };
        _0xffde07.exports;
      }, {});
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0xdbca16, _0x35a059, _0x15491f, _0xf16b9e, _0x1030a4) {
        var _0x1c7ee0 = _0x35a059("./util");
        var _0x3fd9a8 = ["double", "float", 'int32', "uint32", "sint32", "fixed32", "sfixed32", 'int64', "uint64", 'sint64', 'fixed64', "sfixed64", 'bool', "string", "bytes"];
        function _0x4b386b(_0x52721, _0x29f80e) {
          var _0x1818ba = 0x0;
          var _0x4499c7 = {};
          for (_0x29f80e |= 0x0; _0x1818ba < _0x52721.length;) {
            _0x4499c7[_0x3fd9a8[_0x1818ba + _0x29f80e]] = _0x52721[_0x1818ba++];
          }
          return _0x4499c7;
        }
        _0xdbca16.basic = _0x4b386b([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0xdbca16.defaults = _0x4b386b([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x1c7ee0.emptyArray, null]);
        _0xdbca16.long = _0x4b386b([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0xdbca16.mapKey = _0x4b386b([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0xdbca16.packed = _0x4b386b([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x15491f.exports;
      }, function () {
        return {
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/field.js', function (_0x267952, _0x4dabbf, _0x1af7d4, _0x327bab, _0x2eb97e) {
        _0x1af7d4.exports = _0x4587cc;
        var _0x587e62 = _0x4dabbf('./object');
        ((_0x4587cc.prototype = Object.create(_0x587e62.prototype)).constructor = _0x4587cc).className = "Field";
        var _0xa1bdc8;
        var _0x42dd63 = _0x4dabbf('./enum');
        var _0x3a70a8 = _0x4dabbf("./types");
        var _0x4e1f49 = _0x4dabbf('./util');
        var _0x21e88d = /^required|optional|repeated$/;
        function _0x4587cc(_0x34d87d, _0x168a99, _0x3282e6, _0x23cd13, _0x3cf482, _0x438636, _0x41ca7b) {
          if (_0x4e1f49.isObject(_0x23cd13)) {
            _0x41ca7b = _0x3cf482;
            _0x438636 = _0x23cd13;
            _0x23cd13 = _0x3cf482 = undefined;
          } else if (_0x4e1f49.isObject(_0x3cf482)) {
            _0x41ca7b = _0x438636;
            _0x438636 = _0x3cf482;
            _0x3cf482 = undefined;
          }
          _0x587e62.call(this, _0x34d87d, _0x438636);
          if (!_0x4e1f49.isInteger(_0x168a99) || _0x168a99 < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x4e1f49.isString(_0x3282e6)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x23cd13 && !_0x21e88d.test(_0x23cd13 = _0x23cd13.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x3cf482 && !_0x4e1f49.isString(_0x3cf482)) {
            throw TypeError("extend must be a string");
          }
          if ('proto3_optional' === _0x23cd13) {
            _0x23cd13 = "optional";
          }
          this.rule = _0x23cd13 && "optional" !== _0x23cd13 ? _0x23cd13 : undefined;
          this.type = _0x3282e6;
          this.id = _0x168a99;
          this.extend = _0x3cf482 || undefined;
          this.required = "required" === _0x23cd13;
          this.optional = !this.required;
          this.repeated = "repeated" === _0x23cd13;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x4e1f49.Long && undefined !== _0x3a70a8.long[_0x3282e6];
          this.bytes = 'bytes' === _0x3282e6;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x41ca7b;
        }
        _0x4587cc.fromJSON = function (_0x218dd9, _0x5b5367) {
          return new _0x4587cc(_0x218dd9, _0x5b5367.id, _0x5b5367.type, _0x5b5367.rule, _0x5b5367.extend, _0x5b5367.options, _0x5b5367.comment);
        };
        Object.defineProperty(_0x4587cc.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        _0x4587cc.prototype.setOption = function (_0x358818, _0x463188, _0x17c985) {
          if ("packed" === _0x358818) {
            this._packed = null;
          }
          return _0x587e62.prototype.setOption.call(this, _0x358818, _0x463188, _0x17c985);
        };
        _0x4587cc.prototype.toJSON = function (_0x688550) {
          var _0x51ee99 = !!_0x688550 && Boolean(_0x688550.keepComments);
          return _0x4e1f49.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, "comment", _0x51ee99 ? this.comment : undefined]);
        };
        _0x4587cc.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x3a70a8.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0xa1bdc8) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options['default']) {
            this.typeDefault = this.options["default"];
            if (this.resolvedType instanceof _0x42dd63 && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x42dd63))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x4e1f49.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && "string" == typeof this.typeDefault) {
              var _0x3e0cf0;
              if (_0x4e1f49.base64.test(this.typeDefault)) {
                _0x4e1f49.base64.decode(this.typeDefault, _0x3e0cf0 = _0x4e1f49.newBuffer(_0x4e1f49.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x4e1f49.utf8.write(this.typeDefault, _0x3e0cf0 = _0x4e1f49.newBuffer(_0x4e1f49.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x3e0cf0;
            }
          }
          if (this.map) {
            this.defaultValue = _0x4e1f49.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x4e1f49.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0xa1bdc8) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x587e62.prototype.resolve.call(this);
        };
        _0x4587cc.d = function (_0x38ccf3, _0xf6d5e9, _0x38072d, _0x423dd9) {
          if ("function" == typeof _0xf6d5e9) {
            _0xf6d5e9 = _0x4e1f49.decorateType(_0xf6d5e9).name;
          } else if (_0xf6d5e9 && "object" == typeof _0xf6d5e9) {
            _0xf6d5e9 = _0x4e1f49.decorateEnum(_0xf6d5e9).name;
          }
          return function (_0x3bfe87, _0x35e015) {
            _0x4e1f49.decorateType(_0x3bfe87.constructor).add(new _0x4587cc(_0x35e015, _0x38ccf3, _0xf6d5e9, _0x38072d, {
              'default': _0x423dd9
            }));
          };
        };
        _0x4587cc._configure = function (_0x2c718d) {
          _0xa1bdc8 = _0x2c718d;
        };
        _0x1af7d4.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (_0x4475a2, _0x5d82cb, _0x235195, _0x23967c, _0x1ce32a) {
        _0x235195.exports = _0x33a05f;
        var _0x1bccca = _0x5d82cb('./object');
        ((_0x33a05f.prototype = Object.create(_0x1bccca.prototype)).constructor = _0x33a05f).className = "OneOf";
        var _0x4cb9dd = _0x5d82cb('./field');
        var _0x50c9b9 = _0x5d82cb("./util");
        function _0x33a05f(_0x18cb1d, _0x34795c, _0x2d3152, _0xb5eedb) {
          if (!Array.isArray(_0x34795c)) {
            _0x2d3152 = _0x34795c;
            _0x34795c = undefined;
          }
          _0x1bccca.call(this, _0x18cb1d, _0x2d3152);
          if (undefined !== _0x34795c && !Array.isArray(_0x34795c)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x34795c || [];
          this.fieldsArray = [];
          this.comment = _0xb5eedb;
        }
        function _0x4cc8de(_0x5c1920) {
          if (_0x5c1920.parent) {
            for (var _0x24a562 = 0x0; _0x24a562 < _0x5c1920.fieldsArray.length; ++_0x24a562) {
              if (!_0x5c1920.fieldsArray[_0x24a562].parent) {
                _0x5c1920.parent.add(_0x5c1920.fieldsArray[_0x24a562]);
              }
            }
          }
        }
        _0x33a05f.fromJSON = function (_0x2e852b, _0x34baa6) {
          return new _0x33a05f(_0x2e852b, _0x34baa6.oneof, _0x34baa6.options, _0x34baa6.comment);
        };
        _0x33a05f.prototype.toJSON = function (_0x1472e1) {
          var _0x47083e = !!_0x1472e1 && Boolean(_0x1472e1.keepComments);
          return _0x50c9b9.toObject(["options", this.options, 'oneof', this.oneof, 'comment', _0x47083e ? this.comment : undefined]);
        };
        _0x33a05f.prototype.add = function (_0x5cc621) {
          if (!(_0x5cc621 instanceof _0x4cb9dd)) {
            throw TypeError("field must be a Field");
          }
          if (_0x5cc621.parent && _0x5cc621.parent !== this.parent) {
            _0x5cc621.parent.remove(_0x5cc621);
          }
          this.oneof.push(_0x5cc621.name);
          this.fieldsArray.push(_0x5cc621);
          _0x5cc621.partOf = this;
          _0x4cc8de(this);
          return this;
        };
        _0x33a05f.prototype.remove = function (_0x12017f) {
          if (!(_0x12017f instanceof _0x4cb9dd)) {
            throw TypeError("field must be a Field");
          }
          var _0x9dc247 = this.fieldsArray.indexOf(_0x12017f);
          if (_0x9dc247 < 0x0) {
            throw Error(_0x12017f + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x9dc247, 0x1);
          if ((_0x9dc247 = this.oneof.indexOf(_0x12017f.name)) > -0x1) {
            this.oneof.splice(_0x9dc247, 0x1);
          }
          _0x12017f.partOf = null;
          return this;
        };
        _0x33a05f.prototype.onAdd = function (_0x982a21) {
          _0x1bccca.prototype.onAdd.call(this, _0x982a21);
          for (var _0x725f11 = 0x0; _0x725f11 < this.oneof.length; ++_0x725f11) {
            var _0x2d627c = _0x982a21.get(this.oneof[_0x725f11]);
            if (_0x2d627c && !_0x2d627c.partOf) {
              _0x2d627c.partOf = this;
              this.fieldsArray.push(_0x2d627c);
            }
          }
          _0x4cc8de(this);
        };
        _0x33a05f.prototype.onRemove = function (_0x2a5891) {
          var _0x3eb4fd;
          for (var _0x5e5cba = 0x0; _0x5e5cba < this.fieldsArray.length; ++_0x5e5cba) {
            if ((_0x3eb4fd = this.fieldsArray[_0x5e5cba]).parent) {
              _0x3eb4fd.parent.remove(_0x3eb4fd);
            }
          }
          _0x1bccca.prototype.onRemove.call(this, _0x2a5891);
        };
        _0x33a05f.d = function () {
          var _0xcc410 = new Array(arguments.length);
          for (var _0x4a5a3b = 0x0; _0x4a5a3b < arguments.length;) {
            _0xcc410[_0x4a5a3b] = arguments[_0x4a5a3b++];
          }
          return function (_0x40fc85, _0x2ff923) {
            _0x50c9b9.decorateType(_0x40fc85.constructor).add(new _0x33a05f(_0x2ff923, _0xcc410));
            Object.defineProperty(_0x40fc85, _0x2ff923, {
              'get': _0x50c9b9.oneOfGetter(_0xcc410),
              'set': _0x50c9b9.oneOfSetter(_0xcc410)
            });
          };
        };
        _0x235195.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0x7f91e7, _0x1a08fd, _0x25c334, _0x2d40b4, _0x44e7ec) {
        _0x25c334.exports = _0x5ab8b1;
        var _0x597b1d = _0x1a08fd("./object");
        ((_0x5ab8b1.prototype = Object.create(_0x597b1d.prototype)).constructor = _0x5ab8b1).className = "Namespace";
        var _0x23c179;
        var _0x1b3ad7;
        var _0x5921b7;
        var _0x2f2fd0 = _0x1a08fd('./field');
        var _0x593773 = _0x1a08fd('./oneof');
        var _0x30486b = _0x1a08fd("./util");
        function _0x48e4f3(_0x3285eb, _0x434de2) {
          if (_0x3285eb && _0x3285eb.length) {
            var _0x243441 = {};
            for (var _0x3de74c = 0x0; _0x3de74c < _0x3285eb.length; ++_0x3de74c) {
              _0x243441[_0x3285eb[_0x3de74c].name] = _0x3285eb[_0x3de74c].toJSON(_0x434de2);
            }
            return _0x243441;
          }
        }
        function _0x5ab8b1(_0x197a45, _0x503d2c) {
          _0x597b1d.call(this, _0x197a45, _0x503d2c);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x76d575(_0x4d57c3) {
          _0x4d57c3._nestedArray = null;
          return _0x4d57c3;
        }
        _0x5ab8b1.fromJSON = function (_0x13b189, _0x5dcbaa) {
          return new _0x5ab8b1(_0x13b189, _0x5dcbaa.options).addJSON(_0x5dcbaa.nested);
        };
        _0x5ab8b1.arrayToJSON = _0x48e4f3;
        _0x5ab8b1.isReservedId = function (_0x2e2f83, _0x7c3c79) {
          if (_0x2e2f83) {
            for (var _0x54256c = 0x0; _0x54256c < _0x2e2f83.length; ++_0x54256c) {
              if ("string" != typeof _0x2e2f83[_0x54256c] && _0x2e2f83[_0x54256c][0x0] <= _0x7c3c79 && _0x2e2f83[_0x54256c][0x1] > _0x7c3c79) {
                return true;
              }
            }
          }
          return false;
        };
        _0x5ab8b1.isReservedName = function (_0x2ecc15, _0x5211cf) {
          if (_0x2ecc15) {
            for (var _0x25cb44 = 0x0; _0x25cb44 < _0x2ecc15.length; ++_0x25cb44) {
              if (_0x2ecc15[_0x25cb44] === _0x5211cf) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x5ab8b1.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x30486b.toArray(this.nested));
          }
        });
        _0x5ab8b1.prototype.toJSON = function (_0x5b0b24) {
          return _0x30486b.toObject(['options', this.options, "nested", _0x48e4f3(this.nestedArray, _0x5b0b24)]);
        };
        _0x5ab8b1.prototype.addJSON = function (_0x5e8b37) {
          if (_0x5e8b37) {
            var _0x2005f9;
            var _0x4d9cb0 = Object.keys(_0x5e8b37);
            for (var _0x4bafb7 = 0x0; _0x4bafb7 < _0x4d9cb0.length; ++_0x4bafb7) {
              _0x2005f9 = _0x5e8b37[_0x4d9cb0[_0x4bafb7]];
              this.add((undefined !== _0x2005f9.fields ? _0x23c179.fromJSON : undefined !== _0x2005f9.values ? _0x5921b7.fromJSON : undefined !== _0x2005f9.methods ? _0x1b3ad7.fromJSON : undefined !== _0x2005f9.id ? _0x2f2fd0.fromJSON : _0x5ab8b1.fromJSON)(_0x4d9cb0[_0x4bafb7], _0x2005f9));
            }
          }
          return this;
        };
        _0x5ab8b1.prototype.get = function (_0x198c65) {
          return this.nested && this.nested[_0x198c65] || null;
        };
        _0x5ab8b1.prototype.getEnum = function (_0x507a31) {
          if (this.nested && this.nested[_0x507a31] instanceof _0x5921b7) {
            return this.nested[_0x507a31].values;
          }
          throw Error("no such enum: " + _0x507a31);
        };
        _0x5ab8b1.prototype.add = function (_0x284378) {
          if (!(_0x284378 instanceof _0x2f2fd0 && undefined !== _0x284378.extend || _0x284378 instanceof _0x23c179 || _0x284378 instanceof _0x5921b7 || _0x284378 instanceof _0x1b3ad7 || _0x284378 instanceof _0x5ab8b1 || _0x284378 instanceof _0x593773)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x11259f = this.get(_0x284378.name);
            if (_0x11259f) {
              if (!(_0x11259f instanceof _0x5ab8b1 && _0x284378 instanceof _0x5ab8b1) || _0x11259f instanceof _0x23c179 || _0x11259f instanceof _0x1b3ad7) {
                throw Error("duplicate name '" + _0x284378.name + "' in " + this);
              }
              var _0x5a47ff = _0x11259f.nestedArray;
              for (var _0x28917a = 0x0; _0x28917a < _0x5a47ff.length; ++_0x28917a) {
                _0x284378.add(_0x5a47ff[_0x28917a]);
              }
              this.remove(_0x11259f);
              if (!this.nested) {
                this.nested = {};
              }
              _0x284378.setOptions(_0x11259f.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x284378.name] = _0x284378;
          _0x284378.onAdd(this);
          return _0x76d575(this);
        };
        _0x5ab8b1.prototype.remove = function (_0x22e1a4) {
          if (!(_0x22e1a4 instanceof _0x597b1d)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x22e1a4.parent !== this) {
            throw Error(_0x22e1a4 + " is not a member of " + this);
          }
          delete this.nested[_0x22e1a4.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x22e1a4.onRemove(this);
          return _0x76d575(this);
        };
        _0x5ab8b1.prototype.define = function (_0x4e0aad, _0x36b171) {
          if (_0x30486b.isString(_0x4e0aad)) {
            _0x4e0aad = _0x4e0aad.split('.');
          } else {
            if (!Array.isArray(_0x4e0aad)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x4e0aad && _0x4e0aad.length && '' === _0x4e0aad[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x343a7b = this; _0x4e0aad.length > 0x0;) {
            var _0x23aec8 = _0x4e0aad.shift();
            if (_0x343a7b.nested && _0x343a7b.nested[_0x23aec8]) {
              if (!((_0x343a7b = _0x343a7b.nested[_0x23aec8]) instanceof _0x5ab8b1)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x343a7b.add(_0x343a7b = new _0x5ab8b1(_0x23aec8));
            }
          }
          if (_0x36b171) {
            _0x343a7b.addJSON(_0x36b171);
          }
          return _0x343a7b;
        };
        _0x5ab8b1.prototype.resolveAll = function () {
          var _0x5cc4d9 = this.nestedArray;
          for (var _0x175286 = 0x0; _0x175286 < _0x5cc4d9.length;) {
            if (_0x5cc4d9[_0x175286] instanceof _0x5ab8b1) {
              _0x5cc4d9[_0x175286++].resolveAll();
            } else {
              _0x5cc4d9[_0x175286++].resolve();
            }
          }
          return this.resolve();
        };
        _0x5ab8b1.prototype.lookup = function (_0xc14bf8, _0x230f86, _0x2c4017) {
          if ('boolean' == typeof _0x230f86) {
            _0x2c4017 = _0x230f86;
            _0x230f86 = undefined;
          } else if (_0x230f86 && !Array.isArray(_0x230f86)) {
            _0x230f86 = [_0x230f86];
          }
          if (_0x30486b.isString(_0xc14bf8) && _0xc14bf8.length) {
            if ('.' === _0xc14bf8) {
              return this.root;
            }
            _0xc14bf8 = _0xc14bf8.split('.');
          } else {
            if (!_0xc14bf8.length) {
              return this;
            }
          }
          if ('' === _0xc14bf8[0x0]) {
            return this.root.lookup(_0xc14bf8.slice(0x1), _0x230f86);
          }
          var _0x3ee317 = this.get(_0xc14bf8[0x0]);
          if (_0x3ee317) {
            if (0x1 === _0xc14bf8.length) {
              if (!_0x230f86 || _0x230f86.indexOf(_0x3ee317.constructor) > -0x1) {
                return _0x3ee317;
              }
            } else {
              if (_0x3ee317 instanceof _0x5ab8b1 && (_0x3ee317 = _0x3ee317.lookup(_0xc14bf8.slice(0x1), _0x230f86, true))) {
                return _0x3ee317;
              }
            }
          } else {
            for (var _0x4b645c = 0x0; _0x4b645c < this.nestedArray.length; ++_0x4b645c) {
              if (this._nestedArray[_0x4b645c] instanceof _0x5ab8b1 && (_0x3ee317 = this._nestedArray[_0x4b645c].lookup(_0xc14bf8, _0x230f86, true))) {
                return _0x3ee317;
              }
            }
          }
          return null === this.parent || _0x2c4017 ? null : this.parent.lookup(_0xc14bf8, _0x230f86);
        };
        _0x5ab8b1.prototype.lookupType = function (_0x338b02) {
          var _0x40e10c = this.lookup(_0x338b02, [_0x23c179]);
          if (!_0x40e10c) {
            throw Error("no such type: " + _0x338b02);
          }
          return _0x40e10c;
        };
        _0x5ab8b1.prototype.lookupEnum = function (_0x2ab2ce) {
          var _0x2852ad = this.lookup(_0x2ab2ce, [_0x5921b7]);
          if (!_0x2852ad) {
            throw Error("no such Enum '" + _0x2ab2ce + "' in " + this);
          }
          return _0x2852ad;
        };
        _0x5ab8b1.prototype.lookupTypeOrEnum = function (_0xb8f55d) {
          var _0x2b711b = this.lookup(_0xb8f55d, [_0x23c179, _0x5921b7]);
          if (!_0x2b711b) {
            throw Error("no such Type or Enum '" + _0xb8f55d + "' in " + this);
          }
          return _0x2b711b;
        };
        _0x5ab8b1.prototype.lookupService = function (_0x38a732) {
          var _0x2872f9 = this.lookup(_0x38a732, [_0x1b3ad7]);
          if (!_0x2872f9) {
            throw Error("no such Service '" + _0x38a732 + "' in " + this);
          }
          return _0x2872f9;
        };
        _0x5ab8b1._configure = function (_0x1cb725, _0x405285, _0xd853a9) {
          _0x23c179 = _0x1cb725;
          _0x1b3ad7 = _0x405285;
          _0x5921b7 = _0xd853a9;
        };
        _0x25c334.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0xb9db7d, _0x16ce1e, _0x118a84, _0x17d450, _0x531290) {
        _0x118a84.exports = _0x203e3;
        var _0x152d64 = _0x16ce1e("./field");
        ((_0x203e3.prototype = Object.create(_0x152d64.prototype)).constructor = _0x203e3).className = "MapField";
        var _0x3545f7 = _0x16ce1e("./types");
        var _0x229ca7 = _0x16ce1e('./util');
        function _0x203e3(_0x300c86, _0x5d93c2, _0x32ab74, _0x225a39, _0x1f8b06, _0x23b975) {
          _0x152d64.call(this, _0x300c86, _0x5d93c2, _0x225a39, undefined, undefined, _0x1f8b06, _0x23b975);
          if (!_0x229ca7.isString(_0x32ab74)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x32ab74;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x203e3.fromJSON = function (_0x2e85ac, _0x2dad9c) {
          return new _0x203e3(_0x2e85ac, _0x2dad9c.id, _0x2dad9c.keyType, _0x2dad9c.type, _0x2dad9c.options, _0x2dad9c.comment);
        };
        _0x203e3.prototype.toJSON = function (_0x1e489c) {
          var _0x37ca9c = !!_0x1e489c && Boolean(_0x1e489c.keepComments);
          return _0x229ca7.toObject(["keyType", this.keyType, "type", this.type, 'id', this.id, 'extend', this.extend, "options", this.options, "comment", _0x37ca9c ? this.comment : undefined]);
        };
        _0x203e3.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x3545f7.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x152d64.prototype.resolve.call(this);
        };
        _0x203e3.d = function (_0x155207, _0x7322f3, _0xc802d1) {
          if ("function" == typeof _0xc802d1) {
            _0xc802d1 = _0x229ca7.decorateType(_0xc802d1).name;
          } else if (_0xc802d1 && "object" == typeof _0xc802d1) {
            _0xc802d1 = _0x229ca7.decorateEnum(_0xc802d1).name;
          }
          return function (_0x1ff34a, _0x43f697) {
            _0x229ca7.decorateType(_0x1ff34a.constructor).add(new _0x203e3(_0x43f697, _0x155207, _0x7322f3, _0xc802d1));
          };
        };
        _0x118a84.exports;
      }, function () {
        return {
          './field': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (_0x4a0088, _0x1f9bcc, _0x1301f6, _0xcdcadb, _0x2747a4) {
        _0x1301f6.exports = _0x38e25d;
        var _0x1945c2 = _0x1f9bcc("./object");
        ((_0x38e25d.prototype = Object.create(_0x1945c2.prototype)).constructor = _0x38e25d).className = "Method";
        var _0x4395af = _0x1f9bcc("./util");
        function _0x38e25d(_0x13aafa, _0x286fdd, _0x259941, _0x55b2e, _0x312b73, _0x5b1673, _0x2c3dd1, _0x54b1d4, _0x4c8e94) {
          if (_0x4395af.isObject(_0x312b73)) {
            _0x2c3dd1 = _0x312b73;
            _0x312b73 = _0x5b1673 = undefined;
          } else if (_0x4395af.isObject(_0x5b1673)) {
            _0x2c3dd1 = _0x5b1673;
            _0x5b1673 = undefined;
          }
          if (undefined !== _0x286fdd && !_0x4395af.isString(_0x286fdd)) {
            throw TypeError("type must be a string");
          }
          if (!_0x4395af.isString(_0x259941)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x4395af.isString(_0x55b2e)) {
            throw TypeError("responseType must be a string");
          }
          _0x1945c2.call(this, _0x13aafa, _0x2c3dd1);
          this.type = _0x286fdd || "rpc";
          this.requestType = _0x259941;
          this.requestStream = !!_0x312b73 || undefined;
          this.responseType = _0x55b2e;
          this.responseStream = !!_0x5b1673 || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x54b1d4;
          this.parsedOptions = _0x4c8e94;
        }
        _0x38e25d.fromJSON = function (_0x3b04ce, _0xfbca7c) {
          return new _0x38e25d(_0x3b04ce, _0xfbca7c.type, _0xfbca7c.requestType, _0xfbca7c.responseType, _0xfbca7c.requestStream, _0xfbca7c.responseStream, _0xfbca7c.options, _0xfbca7c.comment, _0xfbca7c.parsedOptions);
        };
        _0x38e25d.prototype.toJSON = function (_0xdffec8) {
          var _0x4ff465 = !!_0xdffec8 && Boolean(_0xdffec8.keepComments);
          return _0x4395af.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, 'responseType', this.responseType, "responseStream", this.responseStream, 'options', this.options, "comment", _0x4ff465 ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x38e25d.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x1945c2.prototype.resolve.call(this));
        };
        _0x1301f6.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (_0x4cad3c, _0xfc478b, _0x349072, _0x18ede4, _0x4caef0) {
        _0x349072.exports = _0x1dc496;
        var _0x36c91f = _0xfc478b('./namespace');
        ((_0x1dc496.prototype = Object.create(_0x36c91f.prototype)).constructor = _0x1dc496).className = 'Service';
        var _0x55f7db = _0xfc478b("./method");
        var _0x5231d3 = _0xfc478b("./util");
        var _0x15f81e = _0xfc478b("./rpc");
        function _0x1dc496(_0x9d7311, _0x5113bb) {
          _0x36c91f.call(this, _0x9d7311, _0x5113bb);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x4bf8c8(_0x487c79) {
          _0x487c79._methodsArray = null;
          return _0x487c79;
        }
        _0x1dc496.fromJSON = function (_0x55ceb7, _0x2078b9) {
          var _0x34ebfd = new _0x1dc496(_0x55ceb7, _0x2078b9.options);
          if (_0x2078b9.methods) {
            var _0x5e64f3 = Object.keys(_0x2078b9.methods);
            for (var _0x45b621 = 0x0; _0x45b621 < _0x5e64f3.length; ++_0x45b621) {
              _0x34ebfd.add(_0x55f7db.fromJSON(_0x5e64f3[_0x45b621], _0x2078b9.methods[_0x5e64f3[_0x45b621]]));
            }
          }
          if (_0x2078b9.nested) {
            _0x34ebfd.addJSON(_0x2078b9.nested);
          }
          _0x34ebfd.comment = _0x2078b9.comment;
          return _0x34ebfd;
        };
        _0x1dc496.prototype.toJSON = function (_0x21efdf) {
          var _0x217cf = _0x36c91f.prototype.toJSON.call(this, _0x21efdf);
          var _0x3e153f = !!_0x21efdf && Boolean(_0x21efdf.keepComments);
          return _0x5231d3.toObject(['options', _0x217cf && _0x217cf.options || undefined, "methods", _0x36c91f.arrayToJSON(this.methodsArray, _0x21efdf) || {}, "nested", _0x217cf && _0x217cf.nested || undefined, "comment", _0x3e153f ? this.comment : undefined]);
        };
        Object.defineProperty(_0x1dc496.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x5231d3.toArray(this.methods));
          }
        });
        _0x1dc496.prototype.get = function (_0x46f409) {
          return this.methods[_0x46f409] || _0x36c91f.prototype.get.call(this, _0x46f409);
        };
        _0x1dc496.prototype.resolveAll = function () {
          var _0x2fcf44 = this.methodsArray;
          for (var _0x18df51 = 0x0; _0x18df51 < _0x2fcf44.length; ++_0x18df51) {
            _0x2fcf44[_0x18df51].resolve();
          }
          return _0x36c91f.prototype.resolve.call(this);
        };
        _0x1dc496.prototype.add = function (_0x3de1ce) {
          if (this.get(_0x3de1ce.name)) {
            throw Error("duplicate name '" + _0x3de1ce.name + "' in " + this);
          }
          return _0x3de1ce instanceof _0x55f7db ? (this.methods[_0x3de1ce.name] = _0x3de1ce, _0x3de1ce.parent = this, _0x4bf8c8(this)) : _0x36c91f.prototype.add.call(this, _0x3de1ce);
        };
        _0x1dc496.prototype.remove = function (_0x21b5ff) {
          if (_0x21b5ff instanceof _0x55f7db) {
            if (this.methods[_0x21b5ff.name] !== _0x21b5ff) {
              throw Error(_0x21b5ff + " is not a member of " + this);
            }
            delete this.methods[_0x21b5ff.name];
            _0x21b5ff.parent = null;
            return _0x4bf8c8(this);
          }
          return _0x36c91f.prototype.remove.call(this, _0x21b5ff);
        };
        _0x1dc496.prototype.create = function (_0xdc423d, _0x5cf8c2, _0x57502f) {
          var _0x9274a7;
          var _0x3bb035 = new _0x15f81e.Service(_0xdc423d, _0x5cf8c2, _0x57502f);
          for (var _0x3fb50a = 0x0; _0x3fb50a < this.methodsArray.length; ++_0x3fb50a) {
            var _0x2766d2 = _0x5231d3.lcFirst((_0x9274a7 = this._methodsArray[_0x3fb50a]).resolve().name).replace(/[^$\w_]/g, '');
            _0x3bb035[_0x2766d2] = _0x5231d3.codegen(['r', 'c'], _0x5231d3.isReserved(_0x2766d2) ? _0x2766d2 + '_' : _0x2766d2)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x9274a7,
              'q': _0x9274a7.resolvedRequestType.ctor,
              's': _0x9274a7.resolvedResponseType.ctor
            });
          }
          return _0x3bb035;
        };
        _0x349072.exports;
      }, function () {
        return {
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      _0x4073b7.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/message.js', function (_0x7c611c, _0x25483e, _0x3e7cb3, _0x10f035, _0x2774ff) {
        _0x3e7cb3.exports = _0x1fef38;
        var _0x4d19b9 = _0x25483e("./util/minimal");
        function _0x1fef38(_0xc79e17) {
          if (_0xc79e17) {
            var _0x3d1406 = Object.keys(_0xc79e17);
            for (var _0x214d99 = 0x0; _0x214d99 < _0x3d1406.length; ++_0x214d99) {
              this[_0x3d1406[_0x214d99]] = _0xc79e17[_0x3d1406[_0x214d99]];
            }
          }
        }
        _0x1fef38.create = function (_0x483f05) {
          return this.$type.create(_0x483f05);
        };
        _0x1fef38.encode = function (_0x49eae3, _0x514811) {
          return this.$type.encode(_0x49eae3, _0x514811);
        };
        _0x1fef38.encodeDelimited = function (_0x4c86c0, _0x1d68f5) {
          return this.$type.encodeDelimited(_0x4c86c0, _0x1d68f5);
        };
        _0x1fef38.decode = function (_0x28373e) {
          return this.$type.decode(_0x28373e);
        };
        _0x1fef38.decodeDelimited = function (_0x445d31) {
          return this.$type.decodeDelimited(_0x445d31);
        };
        _0x1fef38.verify = function (_0x4775dc) {
          return this.$type.verify(_0x4775dc);
        };
        _0x1fef38.fromObject = function (_0xd295e4) {
          return this.$type.fromObject(_0xd295e4);
        };
        _0x1fef38.toObject = function (_0x1b73fd, _0x2f273c) {
          return this.$type.toObject(_0x1b73fd, _0x2f273c);
        };
        _0x1fef38.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x4d19b9.toJSONOptions);
        };
        _0x3e7cb3.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0x16d501, _0x3e7e9f, _0x4a0d5d, _0x2778f1, _0x59ddf9) {
        _0x4a0d5d.exports = function (_0x4fd5b1) {
          var _0x7ff87d = _0x211e10.codegen(['r', 'l'], _0x4fd5b1.name + "$decode")("if(!(r instanceof Reader))")('r=Reader.create(r)')("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x4fd5b1.fieldsArray.filter(function (_0x157f5b) {
            return _0x157f5b.map;
          }).length ? ",k,value" : ''))("while(r.pos<c){")("var t=r.uint32()");
          if (_0x4fd5b1.group) {
            _0x7ff87d('if((t&7)===4)')("break");
          }
          _0x7ff87d("switch(t>>>3){");
          for (var _0x45705c = 0x0; _0x45705c < _0x4fd5b1.fieldsArray.length; ++_0x45705c) {
            var _0x4c97da = _0x4fd5b1._fieldsArray[_0x45705c].resolve();
            var _0x47bd69 = _0x4c97da.resolvedType instanceof _0x5e399c ? "int32" : _0x4c97da.type;
            var _0x4e5d5a = 'm' + _0x211e10.safeProp(_0x4c97da.name);
            _0x7ff87d("case %i:", _0x4c97da.id);
            if (_0x4c97da.map) {
              _0x7ff87d('if(%s===util.emptyObject)', _0x4e5d5a)("%s={}", _0x4e5d5a)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x457b6a.defaults[_0x4c97da.keyType]) {
                _0x7ff87d("k=%j", _0x457b6a.defaults[_0x4c97da.keyType]);
              } else {
                _0x7ff87d("k=null");
              }
              if (undefined !== _0x457b6a.defaults[_0x47bd69]) {
                _0x7ff87d("value=%j", _0x457b6a.defaults[_0x47bd69]);
              } else {
                _0x7ff87d('value=null');
              }
              _0x7ff87d("while(r.pos<c2){")("var tag2=r.uint32()")('switch(tag2>>>3){')("case 1: k=r.%s(); break", _0x4c97da.keyType)("case 2:");
              if (undefined === _0x457b6a.basic[_0x47bd69]) {
                _0x7ff87d("value=types[%i].decode(r,r.uint32())", _0x45705c);
              } else {
                _0x7ff87d('value=r.%s()', _0x47bd69);
              }
              _0x7ff87d("break")("default:")('r.skipType(tag2&7)')("break")('}')('}');
              if (undefined !== _0x457b6a.long[_0x4c97da.keyType]) {
                _0x7ff87d("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x4e5d5a);
              } else {
                _0x7ff87d("%s[k]=value", _0x4e5d5a);
              }
            } else if (_0x4c97da.repeated) {
              _0x7ff87d('if(!(%s&&%s.length))', _0x4e5d5a, _0x4e5d5a)('%s=[]', _0x4e5d5a);
              if (undefined !== _0x457b6a.packed[_0x47bd69]) {
                _0x7ff87d("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", _0x4e5d5a, _0x47bd69)("}else");
              }
              if (undefined === _0x457b6a.basic[_0x47bd69]) {
                _0x7ff87d(_0x4c97da.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x4e5d5a, _0x45705c);
              } else {
                _0x7ff87d("%s.push(r.%s())", _0x4e5d5a, _0x47bd69);
              }
            } else if (undefined === _0x457b6a.basic[_0x47bd69]) {
              _0x7ff87d(_0x4c97da.resolvedType.group ? '%s=types[%i].decode(r)' : "%s=types[%i].decode(r,r.uint32())", _0x4e5d5a, _0x45705c);
            } else {
              _0x7ff87d("%s=r.%s()", _0x4e5d5a, _0x47bd69);
            }
            _0x7ff87d("break");
          }
          _0x7ff87d("default:")("r.skipType(t&7)")("break")('}')('}');
          for (_0x45705c = 0x0; _0x45705c < _0x4fd5b1._fieldsArray.length; ++_0x45705c) {
            var _0x10d430 = _0x4fd5b1._fieldsArray[_0x45705c];
            if (_0x10d430.required) {
              _0x7ff87d("if(!m.hasOwnProperty(%j))", _0x10d430.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x10d430.name + "'");
            }
          }
          return _0x7ff87d("return m");
        };
        var _0x5e399c = _0x3e7e9f("./enum");
        var _0x457b6a = _0x3e7e9f("./types");
        var _0x211e10 = _0x3e7e9f("./util");
        _0x4a0d5d.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (_0x586e63, _0xbef9d1, _0x16d232, _0xc73a8c, _0x19d33c) {
        _0x16d232.exports = function (_0x152249) {
          var _0x1c69be = _0x420002.codegen(['m'], _0x152249.name + '$verify')("if(typeof m!==\"object\"||m===null)")('return%j', "object expected");
          var _0x356aba = _0x152249.oneofsArray;
          var _0xa96f01 = {};
          if (_0x356aba.length) {
            _0x1c69be("var p={}");
          }
          for (var _0x396936 = 0x0; _0x396936 < _0x152249.fieldsArray.length; ++_0x396936) {
            var _0x4937a0 = _0x152249._fieldsArray[_0x396936].resolve();
            var _0x632897 = 'm' + _0x420002.safeProp(_0x4937a0.name);
            if (_0x4937a0.optional) {
              _0x1c69be('if(%s!=null&&m.hasOwnProperty(%j)){', _0x632897, _0x4937a0.name);
            }
            if (_0x4937a0.map) {
              _0x1c69be("if(!util.isObject(%s))", _0x632897)('return%j', _0x4937a0.name + ": " + _0x31ee(0x260) + (_0x4937a0.repeated && "array" !== _0x31ee(0x260) ? '[]' : _0x4937a0.map && false ? "{k:" + _0x4937a0.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x632897)("for(var i=0;i<k.length;++i){");
              _0x2a00d0(_0x1c69be, _0x4937a0, "k[i]");
              _0x56f3df(_0x1c69be, _0x4937a0, _0x396936, _0x632897 + "[k[i]]")('}');
            } else {
              if (_0x4937a0.repeated) {
                _0x1c69be("if(!Array.isArray(%s))", _0x632897)("return%j", _0x4937a0.name + ": " + _0x31ee(0x2fe) + (_0x4937a0.repeated && "array" !== _0x31ee(0x2fe) ? '[]' : _0x4937a0.map && true ? "{k:" + _0x4937a0.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x632897);
                _0x56f3df(_0x1c69be, _0x4937a0, _0x396936, _0x632897 + '[i]')('}');
              } else {
                if (_0x4937a0.partOf) {
                  var _0x4386a7 = _0x420002.safeProp(_0x4937a0.partOf.name);
                  if (0x1 === _0xa96f01[_0x4937a0.partOf.name]) {
                    _0x1c69be("if(p%s===1)", _0x4386a7)("return%j", _0x4937a0.partOf.name + ": multiple values");
                  }
                  _0xa96f01[_0x4937a0.partOf.name] = 0x1;
                  _0x1c69be("p%s=1", _0x4386a7);
                }
                _0x56f3df(_0x1c69be, _0x4937a0, _0x396936, _0x632897);
              }
            }
            if (_0x4937a0.optional) {
              _0x1c69be('}');
            }
          }
          return _0x1c69be("return null");
        };
        var _0x7ab156 = _0xbef9d1('./enum');
        var _0x420002 = _0xbef9d1("./util");
        function _0x56f3df(_0x172f16, _0x480445, _0x3b839f, _0x59fa1a) {
          if (_0x480445.resolvedType) {
            if (_0x480445.resolvedType instanceof _0x7ab156) {
              _0x172f16('switch(%s){', _0x59fa1a)("default:")('return%j', _0x480445.name + ": " + _0x31ee(0x291) + (_0x480445.repeated && "array" !== _0x31ee(0x291) ? '[]' : _0x480445.map && true ? "{k:" + _0x480445.keyType + '}' : '') + " expected");
              var _0x98f5fe = Object.keys(_0x480445.resolvedType.values);
              for (var _0x4a21b9 = 0x0; _0x4a21b9 < _0x98f5fe.length; ++_0x4a21b9) {
                _0x172f16("case %i:", _0x480445.resolvedType.values[_0x98f5fe[_0x4a21b9]]);
              }
              _0x172f16('break')('}');
            } else {
              _0x172f16('{')("var e=types[%i].verify(%s);", _0x3b839f, _0x59fa1a)('if(e)')("return%j+e", _0x480445.name + '.')('}');
            }
          } else {
            switch (_0x480445.type) {
              case "int32":
              case "uint32":
              case 'sint32':
              case "fixed32":
              case "sfixed32":
                _0x172f16("if(!util.isInteger(%s))", _0x59fa1a)('return%j', _0x480445.name + ": " + _0x31ee(0x243) + (_0x480445.repeated && "array" !== _0x31ee(0x243) ? '[]' : _0x480445.map && true ? "{k:" + _0x480445.keyType + '}' : '') + " expected");
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case 'fixed64':
              case 'sfixed64':
                _0x172f16("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0x59fa1a, _0x59fa1a, _0x59fa1a, _0x59fa1a)("return%j", _0x480445.name + ": " + _0x31ee(0x480) + (_0x480445.repeated && "array" !== _0x31ee(0x480) ? '[]' : _0x480445.map && true ? "{k:" + _0x480445.keyType + '}' : '') + " expected");
                break;
              case 'float':
              case 'double':
                _0x172f16("if(typeof %s!==\"number\")", _0x59fa1a)("return%j", _0x480445.name + ": " + _0x31ee(0x3bd) + (_0x480445.repeated && "array" !== _0x31ee(0x3bd) ? '[]' : _0x480445.map && true ? "{k:" + _0x480445.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x172f16("if(typeof %s!==\"boolean\")", _0x59fa1a)("return%j", _0x480445.name + ": " + _0x31ee(0x451) + (_0x480445.repeated && "array" !== _0x31ee(0x451) ? '[]' : _0x480445.map && true ? "{k:" + _0x480445.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x172f16("if(!util.isString(%s))", _0x59fa1a)("return%j", _0x480445.name + ": " + _0x31ee(0x59e) + (_0x480445.repeated && "array" !== _0x31ee(0x59e) ? '[]' : _0x480445.map && true ? "{k:" + _0x480445.keyType + '}' : '') + " expected");
                break;
              case "bytes":
                _0x172f16("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x59fa1a, _0x59fa1a, _0x59fa1a)('return%j', _0x480445.name + ": " + _0x31ee(0x5a3) + (_0x480445.repeated && "array" !== _0x31ee(0x5a3) ? '[]' : _0x480445.map && true ? "{k:" + _0x480445.keyType + '}' : '') + " expected");
            }
          }
          return _0x172f16;
        }
        function _0x2a00d0(_0x1570fd, _0x25102a, _0x29e2ac) {
          switch (_0x25102a.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              _0x1570fd("if(!util.key32Re.test(%s))", _0x29e2ac)("return%j", _0x25102a.name + ": " + _0x31ee(0x212) + (_0x25102a.repeated && "array" !== _0x31ee(0x212) ? '[]' : _0x25102a.map && true ? "{k:" + _0x25102a.keyType + '}' : '') + " expected");
              break;
            case 'int64':
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              _0x1570fd("if(!util.key64Re.test(%s))", _0x29e2ac)("return%j", _0x25102a.name + ": " + _0x31ee(0x4a9) + (_0x25102a.repeated && "array" !== _0x31ee(0x4a9) ? '[]' : _0x25102a.map && true ? "{k:" + _0x25102a.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x1570fd("if(!util.key2Re.test(%s))", _0x29e2ac)('return%j', _0x25102a.name + ": " + _0x31ee(0x5ac) + (_0x25102a.repeated && "array" !== _0x31ee(0x5ac) ? '[]' : _0x25102a.map && true ? "{k:" + _0x25102a.keyType + '}' : '') + " expected");
          }
          return _0x1570fd;
        }
        _0x16d232.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0xb2baa0, _0x1aba41, _0x2ca701, _0x64180e, _0x3aa4db) {
        var _0x32f351 = _0x1aba41('./enum');
        var _0x3603bf = _0x1aba41("./util");
        function _0x160408(_0x29f8f4, _0x5882c6, _0x411c43, _0x242330) {
          if (_0x5882c6.resolvedType) {
            if (_0x5882c6.resolvedType instanceof _0x32f351) {
              _0x29f8f4("switch(d%s){", _0x242330);
              var _0x5e43be = _0x5882c6.resolvedType.values;
              var _0x32fe72 = Object.keys(_0x5e43be);
              for (var _0x8e10ac = 0x0; _0x8e10ac < _0x32fe72.length; ++_0x8e10ac) {
                if (_0x5882c6.repeated && _0x5e43be[_0x32fe72[_0x8e10ac]] === _0x5882c6.typeDefault) {
                  _0x29f8f4("default:");
                }
                _0x29f8f4('case%j:', _0x32fe72[_0x8e10ac])("case %i:", _0x5e43be[_0x32fe72[_0x8e10ac]])("m%s=%j", _0x242330, _0x5e43be[_0x32fe72[_0x8e10ac]])("break");
              }
              _0x29f8f4('}');
            } else {
              _0x29f8f4("if(typeof d%s!==\"object\")", _0x242330)("throw TypeError(%j)", _0x5882c6.fullName + ": object expected")('m%s=types[%i].fromObject(d%s)', _0x242330, _0x411c43, _0x242330);
            }
          } else {
            var _0x484cac = false;
            switch (_0x5882c6.type) {
              case "double":
              case 'float':
                _0x29f8f4("m%s=Number(d%s)", _0x242330, _0x242330);
                break;
              case "uint32":
              case "fixed32":
                _0x29f8f4("m%s=d%s>>>0", _0x242330, _0x242330);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                _0x29f8f4("m%s=d%s|0", _0x242330, _0x242330);
                break;
              case "uint64":
                _0x484cac = true;
              case "int64":
              case "sint64":
              case 'fixed64':
              case "sfixed64":
                _0x29f8f4("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x242330, _0x242330, _0x484cac)("else if(typeof d%s===\"string\")", _0x242330)("m%s=parseInt(d%s,10)", _0x242330, _0x242330)("else if(typeof d%s===\"number\")", _0x242330)("m%s=d%s", _0x242330, _0x242330)("else if(typeof d%s===\"object\")", _0x242330)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x242330, _0x242330, _0x242330, _0x484cac ? "true" : '');
                break;
              case "bytes":
                _0x29f8f4("if(typeof d%s===\"string\")", _0x242330)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", _0x242330, _0x242330, _0x242330)("else if(d%s.length)", _0x242330)("m%s=d%s", _0x242330, _0x242330);
                break;
              case "string":
                _0x29f8f4("m%s=String(d%s)", _0x242330, _0x242330);
                break;
              case "bool":
                _0x29f8f4("m%s=Boolean(d%s)", _0x242330, _0x242330);
            }
          }
          return _0x29f8f4;
        }
        function _0x2a0c17(_0x4feb33, _0x4860d6, _0x285a54, _0x2a586d) {
          if (_0x4860d6.resolvedType) {
            if (_0x4860d6.resolvedType instanceof _0x32f351) {
              _0x4feb33("d%s=o.enums===String?types[%i].values[m%s]:m%s", _0x2a586d, _0x285a54, _0x2a586d, _0x2a586d);
            } else {
              _0x4feb33("d%s=types[%i].toObject(m%s,o)", _0x2a586d, _0x285a54, _0x2a586d);
            }
          } else {
            var _0x533773 = false;
            switch (_0x4860d6.type) {
              case 'double':
              case "float":
                _0x4feb33("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x2a586d, _0x2a586d, _0x2a586d, _0x2a586d);
                break;
              case "uint64":
                _0x533773 = true;
              case "int64":
              case 'sint64':
              case "fixed64":
              case "sfixed64":
                _0x4feb33("if(typeof m%s===\"number\")", _0x2a586d)("d%s=o.longs===String?String(m%s):m%s", _0x2a586d, _0x2a586d, _0x2a586d)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x2a586d, _0x2a586d, _0x2a586d, _0x2a586d, _0x533773 ? 'true' : '', _0x2a586d);
                break;
              case 'bytes':
                _0x4feb33("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", _0x2a586d, _0x2a586d, _0x2a586d, _0x2a586d, _0x2a586d);
                break;
              default:
                _0x4feb33("d%s=m%s", _0x2a586d, _0x2a586d);
            }
          }
          return _0x4feb33;
        }
        _0xb2baa0.fromObject = function (_0x15e7c5) {
          var _0x23017a = _0x15e7c5.fieldsArray;
          var _0x5a68f4 = _0x3603bf.codegen(['d'], _0x15e7c5.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0x23017a.length) {
            return _0x5a68f4("return new this.ctor");
          }
          _0x5a68f4("var m=new this.ctor");
          for (var _0x450bf7 = 0x0; _0x450bf7 < _0x23017a.length; ++_0x450bf7) {
            var _0x57572a = _0x23017a[_0x450bf7].resolve();
            var _0x16444a = _0x3603bf.safeProp(_0x57572a.name);
            if (_0x57572a.map) {
              _0x5a68f4('if(d%s){', _0x16444a)("if(typeof d%s!==\"object\")", _0x16444a)("throw TypeError(%j)", _0x57572a.fullName + ": object expected")("m%s={}", _0x16444a)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x16444a);
              _0x160408(_0x5a68f4, _0x57572a, _0x450bf7, _0x16444a + "[ks[i]]")('}')('}');
            } else if (_0x57572a.repeated) {
              _0x5a68f4("if(d%s){", _0x16444a)("if(!Array.isArray(d%s))", _0x16444a)("throw TypeError(%j)", _0x57572a.fullName + ": array expected")("m%s=[]", _0x16444a)("for(var i=0;i<d%s.length;++i){", _0x16444a);
              _0x160408(_0x5a68f4, _0x57572a, _0x450bf7, _0x16444a + "[i]")('}')('}');
            } else {
              if (!(_0x57572a.resolvedType instanceof _0x32f351)) {
                _0x5a68f4('if(d%s!=null){', _0x16444a);
              }
              _0x160408(_0x5a68f4, _0x57572a, _0x450bf7, _0x16444a);
              if (!(_0x57572a.resolvedType instanceof _0x32f351)) {
                _0x5a68f4('}');
              }
            }
          }
          return _0x5a68f4("return m");
        };
        _0xb2baa0.toObject = function (_0x260144) {
          var _0x360946 = _0x260144.fieldsArray.slice().sort(_0x3603bf.compareFieldsById);
          if (!_0x360946.length) {
            return _0x3603bf.codegen()("return {}");
          }
          var _0x5f3c55 = _0x3603bf.codegen(['m', 'o'], _0x260144.name + "$toObject")('if(!o)')('o={}')("var d={}");
          var _0x1aba18 = [];
          var _0x3d3372 = [];
          var _0x7ec18b = [];
          for (var _0x5f31eb = 0x0; _0x5f31eb < _0x360946.length; ++_0x5f31eb) {
            if (!_0x360946[_0x5f31eb].partOf) {
              (_0x360946[_0x5f31eb].resolve().repeated ? _0x1aba18 : _0x360946[_0x5f31eb].map ? _0x3d3372 : _0x7ec18b).push(_0x360946[_0x5f31eb]);
            }
          }
          if (_0x1aba18.length) {
            _0x5f3c55("if(o.arrays||o.defaults){");
            for (_0x5f31eb = 0x0; _0x5f31eb < _0x1aba18.length; ++_0x5f31eb) {
              _0x5f3c55("d%s=[]", _0x3603bf.safeProp(_0x1aba18[_0x5f31eb].name));
            }
            _0x5f3c55('}');
          }
          if (_0x3d3372.length) {
            _0x5f3c55("if(o.objects||o.defaults){");
            for (_0x5f31eb = 0x0; _0x5f31eb < _0x3d3372.length; ++_0x5f31eb) {
              _0x5f3c55("d%s={}", _0x3603bf.safeProp(_0x3d3372[_0x5f31eb].name));
            }
            _0x5f3c55('}');
          }
          if (_0x7ec18b.length) {
            _0x5f3c55("if(o.defaults){");
            for (_0x5f31eb = 0x0; _0x5f31eb < _0x7ec18b.length; ++_0x5f31eb) {
              var _0x5c5778 = _0x7ec18b[_0x5f31eb];
              var _0x4ad894 = _0x3603bf.safeProp(_0x5c5778.name);
              if (_0x5c5778.resolvedType instanceof _0x32f351) {
                _0x5f3c55("d%s=o.enums===String?%j:%j", _0x4ad894, _0x5c5778.resolvedType.valuesById[_0x5c5778.typeDefault], _0x5c5778.typeDefault);
              } else {
                if (_0x5c5778.long) {
                  _0x5f3c55("if(util.Long){")("var n=new util.Long(%i,%i,%j)", _0x5c5778.typeDefault.low, _0x5c5778.typeDefault.high, _0x5c5778.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x4ad894)("}else")("d%s=o.longs===String?%j:%i", _0x4ad894, _0x5c5778.typeDefault.toString(), _0x5c5778.typeDefault.toNumber());
                } else {
                  if (_0x5c5778.bytes) {
                    var _0x29360c = '[' + Array.prototype.slice.call(_0x5c5778.typeDefault).join(',') + ']';
                    _0x5f3c55('if(o.bytes===String)d%s=%j', _0x4ad894, String.fromCharCode.apply(String, _0x5c5778.typeDefault))("else{")("d%s=%s", _0x4ad894, _0x29360c)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0x4ad894, _0x4ad894)('}');
                  } else {
                    _0x5f3c55("d%s=%j", _0x4ad894, _0x5c5778.typeDefault);
                  }
                }
              }
            }
            _0x5f3c55('}');
          }
          var _0x5b1782 = false;
          for (_0x5f31eb = 0x0; _0x5f31eb < _0x360946.length; ++_0x5f31eb) {
            _0x5c5778 = _0x360946[_0x5f31eb];
            var _0xdbfa2f = _0x260144._fieldsArray.indexOf(_0x5c5778);
            _0x4ad894 = _0x3603bf.safeProp(_0x5c5778.name);
            if (_0x5c5778.map) {
              if (!_0x5b1782) {
                _0x5b1782 = true;
                _0x5f3c55("var ks2");
              }
              _0x5f3c55("if(m%s&&(ks2=Object.keys(m%s)).length){", _0x4ad894, _0x4ad894)("d%s={}", _0x4ad894)("for(var j=0;j<ks2.length;++j){");
              _0x2a0c17(_0x5f3c55, _0x5c5778, _0xdbfa2f, _0x4ad894 + "[ks2[j]]")('}');
            } else if (_0x5c5778.repeated) {
              _0x5f3c55('if(m%s&&m%s.length){', _0x4ad894, _0x4ad894)("d%s=[]", _0x4ad894)("for(var j=0;j<m%s.length;++j){", _0x4ad894);
              _0x2a0c17(_0x5f3c55, _0x5c5778, _0xdbfa2f, _0x4ad894 + "[j]")('}');
            } else {
              _0x5f3c55('if(m%s!=null&&m.hasOwnProperty(%j)){', _0x4ad894, _0x5c5778.name);
              _0x2a0c17(_0x5f3c55, _0x5c5778, _0xdbfa2f, _0x4ad894);
              if (_0x5c5778.partOf) {
                _0x5f3c55("if(o.oneofs)")("d%s=%j", _0x3603bf.safeProp(_0x5c5778.partOf.name), _0x5c5778.name);
              }
            }
            _0x5f3c55('}');
          }
          return _0x5f3c55("return d");
        };
        _0x2ca701.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js', function (_0x11ffa1, _0x377106, _0x104805, _0x5e5712, _0x545457) {
        var _0x30515e = _0x377106("./message");
        _0x11ffa1[".google.protobuf.Any"] = {
          'fromObject': function (_0x4ed697) {
            if (_0x4ed697 && _0x4ed697["@type"]) {
              var _0x33656c = _0x4ed697['@type'].substring(_0x4ed697["@type"].lastIndexOf('/') + 0x1);
              var _0x433c46 = this.lookup(_0x33656c);
              if (_0x433c46) {
                var _0x569d40 = '.' === _0x4ed697["@type"].charAt(0x0) ? _0x4ed697["@type"].substr(0x1) : _0x4ed697["@type"];
                if (-0x1 === _0x569d40.indexOf('/')) {
                  _0x569d40 = '/' + _0x569d40;
                }
                return this.create({
                  'type_url': _0x569d40,
                  'value': _0x433c46.encode(_0x433c46.fromObject(_0x4ed697)).finish()
                });
              }
            }
            return this.fromObject(_0x4ed697);
          },
          'toObject': function (_0x2d585b, _0x4667bf) {
            var _0x4b400d = '';
            var _0x5aabcf = '';
            if (_0x4667bf && _0x4667bf.json && _0x2d585b.type_url && _0x2d585b.value) {
              _0x5aabcf = _0x2d585b.type_url.substring(_0x2d585b.type_url.lastIndexOf('/') + 0x1);
              _0x4b400d = _0x2d585b.type_url.substring(0x0, _0x2d585b.type_url.lastIndexOf('/') + 0x1);
              var _0x4029e0 = this.lookup(_0x5aabcf);
              if (_0x4029e0) {
                _0x2d585b = _0x4029e0.decode(_0x2d585b.value);
              }
            }
            if (!(_0x2d585b instanceof this.ctor) && _0x2d585b instanceof _0x30515e) {
              var _0x27ddef = _0x2d585b.$type.toObject(_0x2d585b, _0x4667bf);
              if ('' === _0x4b400d) {
                _0x4b400d = "type.googleapis.com/";
              }
              _0x5aabcf = _0x4b400d + ('.' === _0x2d585b.$type.fullName[0x0] ? _0x2d585b.$type.fullName.substr(0x1) : _0x2d585b.$type.fullName);
              _0x27ddef['@type'] = _0x5aabcf;
              return _0x27ddef;
            }
            return this.toObject(_0x2d585b, _0x4667bf);
          }
        };
        _0x104805.exports;
      }, function () {
        return {
          './message': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/message.js'
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (_0xdd3919, _0xf35f96, _0x122f42, _0x5e7bf2, _0x1e7c33) {
        _0x122f42.exports = _0x48b7c3;
        var _0x49f179 = _0xf35f96("./namespace");
        ((_0x48b7c3.prototype = Object.create(_0x49f179.prototype)).constructor = _0x48b7c3).className = "Type";
        var _0x2b640a = _0xf35f96('./enum');
        var _0x519aa0 = _0xf35f96('./oneof');
        var _0x315326 = _0xf35f96("./field");
        var _0xb27cac = _0xf35f96("./mapfield");
        var _0x271ab5 = _0xf35f96('./service');
        var _0x2d8116 = _0xf35f96("./message");
        var _0x369b9b = _0xf35f96("./reader");
        var _0x474cce = _0xf35f96("./writer");
        var _0x245dce = _0xf35f96('./util');
        var _0x32df22 = _0xf35f96("./encoder");
        var _0x45fd14 = _0xf35f96("./decoder");
        var _0x5f3e00 = _0xf35f96('./verifier');
        var _0x3093e0 = _0xf35f96("./converter");
        var _0x4069b6 = _0xf35f96('./wrappers');
        function _0x48b7c3(_0x83af74, _0x47553e) {
          _0x49f179.call(this, _0x83af74, _0x47553e);
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
        function _0x45f7e5(_0x570fab) {
          _0x570fab._fieldsById = _0x570fab._fieldsArray = _0x570fab._oneofsArray = null;
          delete _0x570fab.encode;
          delete _0x570fab.decode;
          delete _0x570fab.verify;
          return _0x570fab;
        }
        Object.defineProperties(_0x48b7c3.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x50f4d0 = Object.keys(this.fields);
              for (var _0x38ca01 = 0x0; _0x38ca01 < _0x50f4d0.length; ++_0x38ca01) {
                var _0x29e957 = this.fields[_0x50f4d0[_0x38ca01]];
                var _0x204c17 = _0x29e957.id;
                if (this._fieldsById[_0x204c17]) {
                  throw Error("duplicate id " + _0x204c17 + " in " + this);
                }
                this._fieldsById[_0x204c17] = _0x29e957;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x245dce.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x245dce.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x48b7c3.generateConstructor(this)());
            },
            'set': function (_0x1eaea3) {
              var _0x2c57c7 = _0x1eaea3.prototype;
              if (!(_0x2c57c7 instanceof _0x2d8116)) {
                (_0x1eaea3.prototype = new _0x2d8116()).constructor = _0x1eaea3;
                _0x245dce.merge(_0x1eaea3.prototype, _0x2c57c7);
              }
              _0x1eaea3.$type = _0x1eaea3.prototype.$type = this;
              _0x245dce.merge(_0x1eaea3, _0x2d8116, true);
              this._ctor = _0x1eaea3;
              for (var _0x2d2141 = 0x0; _0x2d2141 < this.fieldsArray.length; ++_0x2d2141) {
                this._fieldsArray[_0x2d2141].resolve();
              }
              var _0x4435a7 = {};
              for (_0x2d2141 = 0x0; _0x2d2141 < this.oneofsArray.length; ++_0x2d2141) {
                _0x4435a7[this._oneofsArray[_0x2d2141].resolve().name] = {
                  'get': _0x245dce.oneOfGetter(this._oneofsArray[_0x2d2141].oneof),
                  'set': _0x245dce.oneOfSetter(this._oneofsArray[_0x2d2141].oneof)
                };
              }
              if (_0x2d2141) {
                Object.defineProperties(_0x1eaea3.prototype, _0x4435a7);
              }
            }
          }
        });
        _0x48b7c3.generateConstructor = function (_0xdfbb7d) {
          var _0x2436f8;
          var _0x3caa5a = _0x245dce.codegen(['p'], _0xdfbb7d.name);
          for (var _0x5562ba = 0x0; _0x5562ba < _0xdfbb7d.fieldsArray.length; ++_0x5562ba) {
            if ((_0x2436f8 = _0xdfbb7d._fieldsArray[_0x5562ba]).map) {
              _0x3caa5a("this%s={}", _0x245dce.safeProp(_0x2436f8.name));
            } else if (_0x2436f8.repeated) {
              _0x3caa5a("this%s=[]", _0x245dce.safeProp(_0x2436f8.name));
            }
          }
          return _0x3caa5a("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0x48b7c3.fromJSON = function (_0x4943ae, _0x5e88cf) {
          var _0x3c55e9 = new _0x48b7c3(_0x4943ae, _0x5e88cf.options);
          _0x3c55e9.extensions = _0x5e88cf.extensions;
          _0x3c55e9.reserved = _0x5e88cf.reserved;
          var _0x20e623 = Object.keys(_0x5e88cf.fields);
          for (var _0x491443 = 0x0; _0x491443 < _0x20e623.length; ++_0x491443) {
            _0x3c55e9.add((undefined !== _0x5e88cf.fields[_0x20e623[_0x491443]].keyType ? _0xb27cac.fromJSON : _0x315326.fromJSON)(_0x20e623[_0x491443], _0x5e88cf.fields[_0x20e623[_0x491443]]));
          }
          if (_0x5e88cf.oneofs) {
            _0x20e623 = Object.keys(_0x5e88cf.oneofs);
            for (_0x491443 = 0x0; _0x491443 < _0x20e623.length; ++_0x491443) {
              _0x3c55e9.add(_0x519aa0.fromJSON(_0x20e623[_0x491443], _0x5e88cf.oneofs[_0x20e623[_0x491443]]));
            }
          }
          if (_0x5e88cf.nested) {
            _0x20e623 = Object.keys(_0x5e88cf.nested);
            for (_0x491443 = 0x0; _0x491443 < _0x20e623.length; ++_0x491443) {
              var _0x27766a = _0x5e88cf.nested[_0x20e623[_0x491443]];
              _0x3c55e9.add((undefined !== _0x27766a.id ? _0x315326.fromJSON : undefined !== _0x27766a.fields ? _0x48b7c3.fromJSON : undefined !== _0x27766a.values ? _0x2b640a.fromJSON : undefined !== _0x27766a.methods ? _0x271ab5.fromJSON : _0x49f179.fromJSON)(_0x20e623[_0x491443], _0x27766a));
            }
          }
          if (_0x5e88cf.extensions && _0x5e88cf.extensions.length) {
            _0x3c55e9.extensions = _0x5e88cf.extensions;
          }
          if (_0x5e88cf.reserved && _0x5e88cf.reserved.length) {
            _0x3c55e9.reserved = _0x5e88cf.reserved;
          }
          if (_0x5e88cf.group) {
            _0x3c55e9.group = true;
          }
          if (_0x5e88cf.comment) {
            _0x3c55e9.comment = _0x5e88cf.comment;
          }
          return _0x3c55e9;
        };
        _0x48b7c3.prototype.toJSON = function (_0x46e67b) {
          var _0x3a1b22 = _0x49f179.prototype.toJSON.call(this, _0x46e67b);
          var _0x161811 = !!_0x46e67b && Boolean(_0x46e67b.keepComments);
          return _0x245dce.toObject(["options", _0x3a1b22 && _0x3a1b22.options || undefined, "oneofs", _0x49f179.arrayToJSON(this.oneofsArray, _0x46e67b), "fields", _0x49f179.arrayToJSON(this.fieldsArray.filter(function (_0x385fb3) {
            return !_0x385fb3.declaringField;
          }), _0x46e67b) || {}, 'extensions', this.extensions && this.extensions.length ? this.extensions : undefined, 'reserved', this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", _0x3a1b22 && _0x3a1b22.nested || undefined, "comment", _0x161811 ? this.comment : undefined]);
        };
        _0x48b7c3.prototype.resolveAll = function () {
          var _0x543b95 = this.fieldsArray;
          for (var _0x589a32 = 0x0; _0x589a32 < _0x543b95.length;) {
            _0x543b95[_0x589a32++].resolve();
          }
          var _0x140372 = this.oneofsArray;
          for (_0x589a32 = 0x0; _0x589a32 < _0x140372.length;) {
            _0x140372[_0x589a32++].resolve();
          }
          return _0x49f179.prototype.resolveAll.call(this);
        };
        _0x48b7c3.prototype.get = function (_0x34b3bb) {
          return this.fields[_0x34b3bb] || this.oneofs && this.oneofs[_0x34b3bb] || this.nested && this.nested[_0x34b3bb] || null;
        };
        _0x48b7c3.prototype.add = function (_0x4907bd) {
          if (this.get(_0x4907bd.name)) {
            throw Error("duplicate name '" + _0x4907bd.name + "' in " + this);
          }
          if (_0x4907bd instanceof _0x315326 && undefined === _0x4907bd.extend) {
            if (this._fieldsById ? this._fieldsById[_0x4907bd.id] : this.fieldsById[_0x4907bd.id]) {
              throw Error("duplicate id " + _0x4907bd.id + " in " + this);
            }
            if (this.isReservedId(_0x4907bd.id)) {
              throw Error("id " + _0x4907bd.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x4907bd.name)) {
              throw Error("name '" + _0x4907bd.name + "' is reserved in " + this);
            }
            if (_0x4907bd.parent) {
              _0x4907bd.parent.remove(_0x4907bd);
            }
            this.fields[_0x4907bd.name] = _0x4907bd;
            _0x4907bd.message = this;
            _0x4907bd.onAdd(this);
            return _0x45f7e5(this);
          }
          return _0x4907bd instanceof _0x519aa0 ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x4907bd.name] = _0x4907bd, _0x4907bd.onAdd(this), _0x45f7e5(this)) : _0x49f179.prototype.add.call(this, _0x4907bd);
        };
        _0x48b7c3.prototype.remove = function (_0x48bb3f) {
          if (_0x48bb3f instanceof _0x315326 && undefined === _0x48bb3f.extend) {
            if (!this.fields || this.fields[_0x48bb3f.name] !== _0x48bb3f) {
              throw Error(_0x48bb3f + " is not a member of " + this);
            }
            delete this.fields[_0x48bb3f.name];
            _0x48bb3f.parent = null;
            _0x48bb3f.onRemove(this);
            return _0x45f7e5(this);
          }
          if (_0x48bb3f instanceof _0x519aa0) {
            if (!this.oneofs || this.oneofs[_0x48bb3f.name] !== _0x48bb3f) {
              throw Error(_0x48bb3f + " is not a member of " + this);
            }
            delete this.oneofs[_0x48bb3f.name];
            _0x48bb3f.parent = null;
            _0x48bb3f.onRemove(this);
            return _0x45f7e5(this);
          }
          return _0x49f179.prototype.remove.call(this, _0x48bb3f);
        };
        _0x48b7c3.prototype.isReservedId = function (_0x39bedb) {
          return _0x49f179.isReservedId(this.reserved, _0x39bedb);
        };
        _0x48b7c3.prototype.isReservedName = function (_0x1ecbe6) {
          return _0x49f179.isReservedName(this.reserved, _0x1ecbe6);
        };
        _0x48b7c3.prototype.create = function (_0x1e5b5e) {
          return new this.ctor(_0x1e5b5e);
        };
        _0x48b7c3.prototype.setup = function () {
          var _0x386217 = this.fullName;
          var _0x59fda7 = [];
          for (var _0x723baa = 0x0; _0x723baa < this.fieldsArray.length; ++_0x723baa) {
            _0x59fda7.push(this._fieldsArray[_0x723baa].resolve().resolvedType);
          }
          this.encode = _0x32df22(this)({
            'Writer': _0x474cce,
            'types': _0x59fda7,
            'util': _0x245dce
          });
          this.decode = _0x45fd14(this)({
            'Reader': _0x369b9b,
            'types': _0x59fda7,
            'util': _0x245dce
          });
          this.verify = _0x5f3e00(this)({
            'types': _0x59fda7,
            'util': _0x245dce
          });
          this.fromObject = _0x3093e0.fromObject(this)({
            'types': _0x59fda7,
            'util': _0x245dce
          });
          this.toObject = _0x3093e0.toObject(this)({
            'types': _0x59fda7,
            'util': _0x245dce
          });
          var _0x447e7d = _0x4069b6[_0x386217];
          if (_0x447e7d) {
            var _0x50f1ff = Object.create(this);
            _0x50f1ff.fromObject = this.fromObject;
            this.fromObject = _0x447e7d.fromObject.bind(_0x50f1ff);
            _0x50f1ff.toObject = this.toObject;
            this.toObject = _0x447e7d.toObject.bind(_0x50f1ff);
          }
          return this;
        };
        _0x48b7c3.prototype.encode = function (_0x197976, _0x20536e) {
          return this.setup().encode(_0x197976, _0x20536e);
        };
        _0x48b7c3.prototype.encodeDelimited = function (_0x4213a2, _0x4c3ac7) {
          return this.encode(_0x4213a2, _0x4c3ac7 && _0x4c3ac7.len ? _0x4c3ac7.fork() : _0x4c3ac7).ldelim();
        };
        _0x48b7c3.prototype.decode = function (_0x3bf0e3, _0x39810c) {
          return this.setup().decode(_0x3bf0e3, _0x39810c);
        };
        _0x48b7c3.prototype.decodeDelimited = function (_0x572b37) {
          if (!(_0x572b37 instanceof _0x369b9b)) {
            _0x572b37 = _0x369b9b.create(_0x572b37);
          }
          return this.decode(_0x572b37, _0x572b37.uint32());
        };
        _0x48b7c3.prototype.verify = function (_0x29d746) {
          return this.setup().verify(_0x29d746);
        };
        _0x48b7c3.prototype.fromObject = function (_0x4a5497) {
          return this.setup().fromObject(_0x4a5497);
        };
        _0x48b7c3.prototype.toObject = function (_0x226881, _0x98287c) {
          return this.setup().toObject(_0x226881, _0x98287c);
        };
        _0x48b7c3.d = function (_0x541a51) {
          return function (_0x2854f9) {
            _0x245dce.decorateType(_0x2854f9, _0x541a51);
          };
        };
        _0x122f42.exports;
      }, function () {
        return {
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './field': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './message': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/message.js',
          './reader': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js'
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x5c9da3, _0x48a474, _0x26c135, _0x52035f, _0x22656d) {
        _0x26c135.exports = _0x330578;
        var _0x18187d = _0x48a474("./namespace");
        ((_0x330578.prototype = Object.create(_0x18187d.prototype)).constructor = _0x330578).className = 'Root';
        var _0x473768;
        var _0x4f2070;
        var _0x48f2d7;
        var _0x180448 = _0x48a474("./field");
        var _0xcb4d37 = _0x48a474("./enum");
        var _0x106281 = _0x48a474('./oneof');
        var _0x3cde88 = _0x48a474("./util");
        function _0x330578(_0x34c51a) {
          _0x18187d.call(this, '', _0x34c51a);
          this.deferred = [];
          this.files = [];
        }
        function _0x4bdbb7() {}
        _0x330578.fromJSON = function (_0x42dd0e, _0x195c57) {
          if (!_0x195c57) {
            _0x195c57 = new _0x330578();
          }
          if (_0x42dd0e.options) {
            _0x195c57.setOptions(_0x42dd0e.options);
          }
          return _0x195c57.addJSON(_0x42dd0e.nested);
        };
        _0x330578.prototype.resolvePath = _0x3cde88.path.resolve;
        _0x330578.prototype.fetch = _0x3cde88.fetch;
        _0x330578.prototype.load = function _0x480a9a(_0x416297, _0x1f28d5, _0x299604) {
          if ("function" == typeof _0x1f28d5) {
            _0x299604 = _0x1f28d5;
            _0x1f28d5 = undefined;
          }
          var _0x4878f5 = this;
          if (!_0x299604) {
            return _0x3cde88.asPromise(_0x480a9a, _0x4878f5, _0x416297, _0x1f28d5);
          }
          var _0x546b5a = _0x299604 === _0x4bdbb7;
          function _0x56b732(_0x305d95, _0x849822) {
            if (_0x299604) {
              var _0x52ced7 = _0x299604;
              _0x299604 = null;
              if (_0x546b5a) {
                throw _0x305d95;
              }
              _0x52ced7(_0x305d95, _0x849822);
            }
          }
          function _0x149c09(_0x972820) {
            var _0x276a40 = _0x972820.lastIndexOf("google/protobuf/");
            if (_0x276a40 > -0x1) {
              var _0x5f16fe = _0x972820.substring(_0x276a40);
              if (_0x5f16fe in _0x48f2d7) {
                return _0x5f16fe;
              }
            }
            return null;
          }
          function _0x32b425(_0x39cfbc, _0x4c50d1) {
            try {
              if (_0x3cde88.isString(_0x4c50d1) && '{' === _0x4c50d1.charAt(0x0)) {
                _0x4c50d1 = JSON.parse(_0x4c50d1);
              }
              if (_0x3cde88.isString(_0x4c50d1)) {
                _0x4f2070.filename = _0x39cfbc;
                var _0x58e5fa;
                var _0x105eb2 = _0x4f2070(_0x4c50d1, _0x4878f5, _0x1f28d5);
                var _0x34366a = 0x0;
                if (_0x105eb2.imports) {
                  for (; _0x34366a < _0x105eb2.imports.length; ++_0x34366a) {
                    if (_0x58e5fa = _0x149c09(_0x105eb2.imports[_0x34366a]) || _0x4878f5.resolvePath(_0x39cfbc, _0x105eb2.imports[_0x34366a])) {
                      _0x1e152b(_0x58e5fa);
                    }
                  }
                }
                if (_0x105eb2.weakImports) {
                  for (_0x34366a = 0x0; _0x34366a < _0x105eb2.weakImports.length; ++_0x34366a) {
                    if (_0x58e5fa = _0x149c09(_0x105eb2.weakImports[_0x34366a]) || _0x4878f5.resolvePath(_0x39cfbc, _0x105eb2.weakImports[_0x34366a])) {
                      _0x1e152b(_0x58e5fa, true);
                    }
                  }
                }
              } else {
                _0x4878f5.setOptions(_0x4c50d1.options).addJSON(_0x4c50d1.nested);
              }
            } catch (_0x55a1f9) {
              _0x56b732(_0x55a1f9);
            }
            if (!(_0x546b5a || _0x12cc80)) {
              _0x56b732(null, _0x4878f5);
            }
          }
          function _0x1e152b(_0x2bb500, _0xfba722) {
            if (!(_0x4878f5.files.indexOf(_0x2bb500) > -0x1)) {
              _0x4878f5.files.push(_0x2bb500);
              if (_0x2bb500 in _0x48f2d7) {
                if (_0x546b5a) {
                  _0x32b425(_0x2bb500, _0x48f2d7[_0x2bb500]);
                } else {
                  ++_0x12cc80;
                  setTimeout(function () {
                    --_0x12cc80;
                    _0x32b425(_0x2bb500, _0x48f2d7[_0x2bb500]);
                  });
                }
              } else {
                if (_0x546b5a) {
                  var _0x430afe;
                  try {
                    _0x430afe = _0x3cde88.fs.readFileSync(_0x2bb500).toString('utf8');
                  } catch (_0xe2578f) {
                    return void (_0xfba722 || _0x56b732(_0xe2578f));
                  }
                  _0x32b425(_0x2bb500, _0x430afe);
                } else {
                  ++_0x12cc80;
                  _0x4878f5.fetch(_0x2bb500, function (_0x2387e4, _0x4df879) {
                    --_0x12cc80;
                    if (_0x299604) {
                      if (_0x2387e4) {
                        if (_0xfba722) {
                          if (!_0x12cc80) {
                            _0x56b732(null, _0x4878f5);
                          }
                        } else {
                          _0x56b732(_0x2387e4);
                        }
                      } else {
                        _0x32b425(_0x2bb500, _0x4df879);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x12cc80 = 0x0;
          if (_0x3cde88.isString(_0x416297)) {
            _0x416297 = [_0x416297];
          }
          var _0x3b2c8e;
          for (var _0x47d980 = 0x0; _0x47d980 < _0x416297.length; ++_0x47d980) {
            if (_0x3b2c8e = _0x4878f5.resolvePath('', _0x416297[_0x47d980])) {
              _0x1e152b(_0x3b2c8e);
            }
          }
          if (_0x546b5a) {
            return _0x4878f5;
          }
          if (!_0x12cc80) {
            _0x56b732(null, _0x4878f5);
          }
        };
        _0x330578.prototype.loadSync = function (_0x327a9c, _0x20857d) {
          if (!_0x3cde88.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x327a9c, _0x20857d, _0x4bdbb7);
        };
        _0x330578.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x507853) {
              return "'extend " + _0x507853.extend + "' in " + _0x507853.parent.fullName;
            }).join(", "));
          }
          return _0x18187d.prototype.resolveAll.call(this);
        };
        var _0x2d8f0e = /^[A-Z]/;
        function _0x3ee6fb(_0x1dc529, _0x56fc2a) {
          var _0xbf459 = _0x56fc2a.parent.lookup(_0x56fc2a.extend);
          if (_0xbf459) {
            var _0x25d803 = new _0x180448(_0x56fc2a.fullName, _0x56fc2a.id, _0x56fc2a.type, _0x56fc2a.rule, undefined, _0x56fc2a.options);
            _0x25d803.declaringField = _0x56fc2a;
            _0x56fc2a.extensionField = _0x25d803;
            _0xbf459.add(_0x25d803);
            return true;
          }
          return false;
        }
        _0x330578.prototype._handleAdd = function (_0x465d43) {
          if (_0x465d43 instanceof _0x180448) {
            if (!(undefined === _0x465d43.extend || _0x465d43.extensionField || _0x3ee6fb(0x0, _0x465d43))) {
              this.deferred.push(_0x465d43);
            }
          } else {
            if (_0x465d43 instanceof _0xcb4d37) {
              if (_0x2d8f0e.test(_0x465d43.name)) {
                _0x465d43.parent[_0x465d43.name] = _0x465d43.values;
              }
            } else {
              if (!(_0x465d43 instanceof _0x106281)) {
                if (_0x465d43 instanceof _0x473768) {
                  for (var _0x23edcc = 0x0; _0x23edcc < this.deferred.length;) {
                    if (_0x3ee6fb(0x0, this.deferred[_0x23edcc])) {
                      this.deferred.splice(_0x23edcc, 0x1);
                    } else {
                      ++_0x23edcc;
                    }
                  }
                }
                for (var _0x474a31 = 0x0; _0x474a31 < _0x465d43.nestedArray.length; ++_0x474a31) {
                  this._handleAdd(_0x465d43._nestedArray[_0x474a31]);
                }
                if (_0x2d8f0e.test(_0x465d43.name)) {
                  _0x465d43.parent[_0x465d43.name] = _0x465d43;
                }
              }
            }
          }
        };
        _0x330578.prototype._handleRemove = function (_0x464232) {
          if (_0x464232 instanceof _0x180448) {
            if (undefined !== _0x464232.extend) {
              if (_0x464232.extensionField) {
                _0x464232.extensionField.parent.remove(_0x464232.extensionField);
                _0x464232.extensionField = null;
              } else {
                var _0x358409 = this.deferred.indexOf(_0x464232);
                if (_0x358409 > -0x1) {
                  this.deferred.splice(_0x358409, 0x1);
                }
              }
            }
          } else {
            if (_0x464232 instanceof _0xcb4d37) {
              if (_0x2d8f0e.test(_0x464232.name)) {
                delete _0x464232.parent[_0x464232.name];
              }
            } else {
              if (_0x464232 instanceof _0x18187d) {
                for (var _0x2a1363 = 0x0; _0x2a1363 < _0x464232.nestedArray.length; ++_0x2a1363) {
                  this._handleRemove(_0x464232._nestedArray[_0x2a1363]);
                }
                if (_0x2d8f0e.test(_0x464232.name)) {
                  delete _0x464232.parent[_0x464232.name];
                }
              }
            }
          }
        };
        _0x330578._configure = function (_0x4e699f, _0x306185, _0x475cf7) {
          _0x473768 = _0x4e699f;
          _0x4f2070 = _0x306185;
          _0x48f2d7 = _0x475cf7;
        };
        _0x26c135.exports;
      }, function () {
        return {
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x53daea, _0x805094, _0x146fca, _0x1b0215, _0x434a61) {
        var _0x55c979;
        var _0x289345;
        var _0x2f9aef = _0x146fca.exports = _0x805094("./util/minimal");
        var _0x1594e7 = _0x805094("./roots");
        _0x2f9aef.codegen = _0x805094("@protobufjs/codegen");
        _0x2f9aef.fetch = _0x805094("@protobufjs/fetch");
        _0x2f9aef.path = _0x805094('@protobufjs/path');
        _0x2f9aef.fs = _0x2f9aef.inquire('fs');
        _0x2f9aef.toArray = function (_0x65fe0b) {
          if (_0x65fe0b) {
            var _0x219995 = Object.keys(_0x65fe0b);
            var _0x421e05 = new Array(_0x219995.length);
            for (var _0x880b9c = 0x0; _0x880b9c < _0x219995.length;) {
              _0x421e05[_0x880b9c] = _0x65fe0b[_0x219995[_0x880b9c++]];
            }
            return _0x421e05;
          }
          return [];
        };
        _0x2f9aef.toObject = function (_0x595153) {
          var _0x51099b = {};
          for (var _0x33d153 = 0x0; _0x33d153 < _0x595153.length;) {
            var _0x531eb3 = _0x595153[_0x33d153++];
            var _0x43e1f1 = _0x595153[_0x33d153++];
            if (undefined !== _0x43e1f1) {
              _0x51099b[_0x531eb3] = _0x43e1f1;
            }
          }
          return _0x51099b;
        };
        var _0x73caeb = /\\/g;
        var _0x20aaa2 = /"/g;
        _0x2f9aef.isReserved = function (_0x37c7eb) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x37c7eb);
        };
        _0x2f9aef.safeProp = function (_0x4d5304) {
          return !/^[$\w_]+$/.test(_0x4d5304) || _0x2f9aef.isReserved(_0x4d5304) ? "[\"" + _0x4d5304.replace(_0x73caeb, "\\\\").replace(_0x20aaa2, "\\\"") + "\"]" : '.' + _0x4d5304;
        };
        _0x2f9aef.ucFirst = function (_0x16f0f8) {
          return _0x16f0f8.charAt(0x0).toUpperCase() + _0x16f0f8.substring(0x1);
        };
        var _0xfceb8e = /_([a-z])/g;
        _0x2f9aef.camelCase = function (_0x297c63) {
          return _0x297c63.substring(0x0, 0x1) + _0x297c63.substring(0x1).replace(_0xfceb8e, function (_0x96e9ad, _0x54b1a7) {
            return _0x54b1a7.toUpperCase();
          });
        };
        _0x2f9aef.compareFieldsById = function (_0x4304bc, _0x3b4873) {
          return _0x4304bc.id - _0x3b4873.id;
        };
        _0x2f9aef.decorateType = function (_0x47c209, _0x54c926) {
          if (_0x47c209.$type) {
            if (_0x54c926 && _0x47c209.$type.name !== _0x54c926) {
              _0x2f9aef.decorateRoot.remove(_0x47c209.$type);
              _0x47c209.$type.name = _0x54c926;
              _0x2f9aef.decorateRoot.add(_0x47c209.$type);
            }
            return _0x47c209.$type;
          }
          if (!_0x55c979) {
            _0x55c979 = _0x805094("./type");
          }
          var _0xba623b = new _0x55c979(_0x54c926 || _0x47c209.name);
          _0x2f9aef.decorateRoot.add(_0xba623b);
          _0xba623b.ctor = _0x47c209;
          Object.defineProperty(_0x47c209, "$type", {
            'value': _0xba623b,
            'enumerable': false
          });
          Object.defineProperty(_0x47c209.prototype, "$type", {
            'value': _0xba623b,
            'enumerable': false
          });
          return _0xba623b;
        };
        var _0x24e1d3 = 0x0;
        _0x2f9aef.decorateEnum = function (_0x2e73d2) {
          if (_0x2e73d2.$type) {
            return _0x2e73d2.$type;
          }
          if (!_0x289345) {
            _0x289345 = _0x805094("./enum");
          }
          var _0x135e8f = new _0x289345("Enum" + _0x24e1d3++, _0x2e73d2);
          _0x2f9aef.decorateRoot.add(_0x135e8f);
          Object.defineProperty(_0x2e73d2, "$type", {
            'value': _0x135e8f,
            'enumerable': false
          });
          return _0x135e8f;
        };
        _0x2f9aef.setProperty = function (_0x477954, _0x42c1f1, _0x524c8f) {
          if ("object" != typeof _0x477954) {
            throw TypeError("dst must be an object");
          }
          if (!_0x42c1f1) {
            throw TypeError("path must be specified");
          }
          return function _0x167a27(_0x538ad4, _0x6fc8b6, _0x1a87b5) {
            var _0x1405c8 = _0x6fc8b6.shift();
            if ('__proto__' === _0x1405c8 || "prototype" === _0x1405c8) {
              return _0x538ad4;
            }
            if (_0x6fc8b6.length > 0x0) {
              _0x538ad4[_0x1405c8] = _0x167a27(_0x538ad4[_0x1405c8] || {}, _0x6fc8b6, _0x1a87b5);
            } else {
              var _0x5ac37e = _0x538ad4[_0x1405c8];
              if (_0x5ac37e) {
                _0x1a87b5 = [].concat(_0x5ac37e).concat(_0x1a87b5);
              }
              _0x538ad4[_0x1405c8] = _0x1a87b5;
            }
            return _0x538ad4;
          }(_0x477954, _0x42c1f1 = _0x42c1f1.split('.'), _0x524c8f);
        };
        Object.defineProperty(_0x2f9aef, "decorateRoot", {
          'get': function () {
            return _0x1594e7.decorated || (_0x1594e7.decorated = new (_0x805094("./root"))());
          }
        });
        _0x146fca.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/roots.js',
          '@protobufjs/codegen': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js',
          '@protobufjs/path': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (_0x52641b, _0x4b8b59, _0x33352c, _0x55b53c, _0x2b7358) {
        _0x33352c.exports = _0xeaf423;
        _0xeaf423.className = 'ReflectionObject';
        var _0x3be92b;
        var _0x392acb = _0x4b8b59("./util");
        function _0xeaf423(_0x2e293d, _0x223102) {
          if (!_0x392acb.isString(_0x2e293d)) {
            throw TypeError("name must be a string");
          }
          if (_0x223102 && !_0x392acb.isObject(_0x223102)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x223102;
          this.parsedOptions = null;
          this.name = _0x2e293d;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0xeaf423.prototype, {
          'root': {
            'get': function () {
              for (var _0x438134 = this; null !== _0x438134.parent;) {
                _0x438134 = _0x438134.parent;
              }
              return _0x438134;
            }
          },
          'fullName': {
            'get': function () {
              var _0x19dec2 = [this.name];
              for (var _0x4854f3 = this.parent; _0x4854f3;) {
                _0x19dec2.unshift(_0x4854f3.name);
                _0x4854f3 = _0x4854f3.parent;
              }
              return _0x19dec2.join('.');
            }
          }
        });
        _0xeaf423.prototype.toJSON = function () {
          throw Error();
        };
        _0xeaf423.prototype.onAdd = function (_0x1239ab) {
          if (this.parent && this.parent !== _0x1239ab) {
            this.parent.remove(this);
          }
          this.parent = _0x1239ab;
          this.resolved = false;
          var _0x15b7ca = _0x1239ab.root;
          if (_0x15b7ca instanceof _0x3be92b) {
            _0x15b7ca._handleAdd(this);
          }
        };
        _0xeaf423.prototype.onRemove = function (_0x24d9a7) {
          var _0x1da5a9 = _0x24d9a7.root;
          if (_0x1da5a9 instanceof _0x3be92b) {
            _0x1da5a9._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0xeaf423.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x3be92b) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0xeaf423.prototype.getOption = function (_0x2c2db9) {
          if (this.options) {
            return this.options[_0x2c2db9];
          }
        };
        _0xeaf423.prototype.setOption = function (_0x35a26d, _0x520070, _0x57d352) {
          if (!(_0x57d352 && this.options && undefined !== this.options[_0x35a26d])) {
            (this.options || (this.options = {}))[_0x35a26d] = _0x520070;
          }
          return this;
        };
        _0xeaf423.prototype.setParsedOption = function (_0x1fdee4, _0x4b3596, _0x4ba125) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x51ab3c = this.parsedOptions;
          if (_0x4ba125) {
            var _0x13e1b9 = _0x51ab3c.find(function (_0x45c425) {
              return Object.prototype.hasOwnProperty.call(_0x45c425, _0x1fdee4);
            });
            if (_0x13e1b9) {
              var _0x452a4a = _0x13e1b9[_0x1fdee4];
              _0x392acb.setProperty(_0x452a4a, _0x4ba125, _0x4b3596);
            } else {
              (_0x13e1b9 = {})[_0x1fdee4] = _0x392acb.setProperty({}, _0x4ba125, _0x4b3596);
              _0x51ab3c.push(_0x13e1b9);
            }
          } else {
            var _0x44af91 = {
              _0x1fdee4: _0x4b3596
            };
            _0x51ab3c.push(_0x44af91);
          }
          return this;
        };
        _0xeaf423.prototype.setOptions = function (_0x56a29e, _0x5b9cfe) {
          if (_0x56a29e) {
            var _0x5cb4f9 = Object.keys(_0x56a29e);
            for (var _0x4e9862 = 0x0; _0x4e9862 < _0x5cb4f9.length; ++_0x4e9862) {
              this.setOption(_0x5cb4f9[_0x4e9862], _0x56a29e[_0x5cb4f9[_0x4e9862]], _0x5b9cfe);
            }
          }
          return this;
        };
        _0xeaf423.prototype.toString = function () {
          var _0x33baa6 = this.constructor.className;
          var _0x16c09d = this.fullName;
          return _0x16c09d.length ? _0x33baa6 + " " + _0x16c09d : _0x33baa6;
        };
        _0xeaf423._configure = function (_0x131e51) {
          _0x3be92b = _0x131e51;
        };
        _0x33352c.exports;
      }, function () {
        return {
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0x33d3fc, _0x1dff73, _0x5d7b2e, _0x14bc6e, _0x1f7c53) {
        _0x5d7b2e.exports = _0x4fbc7a;
        var _0x1d1db9 = _0x1dff73("./object");
        ((_0x4fbc7a.prototype = Object.create(_0x1d1db9.prototype)).constructor = _0x4fbc7a).className = "Enum";
        var _0x4fbc56 = _0x1dff73('./namespace');
        var _0x1054e6 = _0x1dff73("./util");
        function _0x4fbc7a(_0x135a1e, _0x43d079, _0x8aabc2, _0x2334e0, _0xfb4274) {
          _0x1d1db9.call(this, _0x135a1e, _0x8aabc2);
          if (_0x43d079 && 'object' != typeof _0x43d079) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x2334e0;
          this.comments = _0xfb4274 || {};
          this.reserved = undefined;
          if (_0x43d079) {
            var _0x804e6 = Object.keys(_0x43d079);
            for (var _0x4541a7 = 0x0; _0x4541a7 < _0x804e6.length; ++_0x4541a7) {
              if ("number" == typeof _0x43d079[_0x804e6[_0x4541a7]]) {
                this.valuesById[this.values[_0x804e6[_0x4541a7]] = _0x43d079[_0x804e6[_0x4541a7]]] = _0x804e6[_0x4541a7];
              }
            }
          }
        }
        _0x4fbc7a.fromJSON = function (_0x514ed5, _0x3664a3) {
          var _0x5962d1 = new _0x4fbc7a(_0x514ed5, _0x3664a3.values, _0x3664a3.options, _0x3664a3.comment, _0x3664a3.comments);
          _0x5962d1.reserved = _0x3664a3.reserved;
          return _0x5962d1;
        };
        _0x4fbc7a.prototype.toJSON = function (_0x52e896) {
          var _0x2cdf6f = !!_0x52e896 && Boolean(_0x52e896.keepComments);
          return _0x1054e6.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", _0x2cdf6f ? this.comment : undefined, "comments", _0x2cdf6f ? this.comments : undefined]);
        };
        _0x4fbc7a.prototype.add = function (_0x21ea0c, _0x1c7b34, _0x16fe73) {
          if (!_0x1054e6.isString(_0x21ea0c)) {
            throw TypeError("name must be a string");
          }
          if (!_0x1054e6.isInteger(_0x1c7b34)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x21ea0c]) {
            throw Error("duplicate name '" + _0x21ea0c + "' in " + this);
          }
          if (this.isReservedId(_0x1c7b34)) {
            throw Error("id " + _0x1c7b34 + " is reserved in " + this);
          }
          if (this.isReservedName(_0x21ea0c)) {
            throw Error("name '" + _0x21ea0c + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x1c7b34]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x1c7b34 + " in " + this);
            }
            this.values[_0x21ea0c] = _0x1c7b34;
          } else {
            this.valuesById[this.values[_0x21ea0c] = _0x1c7b34] = _0x21ea0c;
          }
          this.comments[_0x21ea0c] = _0x16fe73 || null;
          return this;
        };
        _0x4fbc7a.prototype.remove = function (_0x403712) {
          if (!_0x1054e6.isString(_0x403712)) {
            throw TypeError("name must be a string");
          }
          var _0x9366e7 = this.values[_0x403712];
          if (null == _0x9366e7) {
            throw Error("name '" + _0x403712 + "' does not exist in " + this);
          }
          delete this.valuesById[_0x9366e7];
          delete this.values[_0x403712];
          delete this.comments[_0x403712];
          return this;
        };
        _0x4fbc7a.prototype.isReservedId = function (_0x28cff2) {
          return _0x4fbc56.isReservedId(this.reserved, _0x28cff2);
        };
        _0x4fbc7a.prototype.isReservedName = function (_0x54ff53) {
          return _0x4fbc56.isReservedName(this.reserved, _0x54ff53);
        };
        _0x5d7b2e.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js', function (_0x2d2051, _0x2cacfe, _0x5c22f5, _0xb0df73, _0x1cfdac) {
        _0x5c22f5.exports = function (_0x6b5380) {
          var _0x5e845b;
          var _0x176d16 = _0x348dc3.codegen(['m', 'w'], _0x6b5380.name + "$encode")("if(!w)")("w=Writer.create()");
          var _0x5993fe = _0x6b5380.fieldsArray.slice().sort(_0x348dc3.compareFieldsById);
          for (var _0x2ed995 = 0x0; _0x2ed995 < _0x5993fe.length; ++_0x2ed995) {
            var _0x56ca2a = _0x5993fe[_0x2ed995].resolve();
            var _0x4bfed2 = _0x6b5380._fieldsArray.indexOf(_0x56ca2a);
            var _0x3623bf = _0x56ca2a.resolvedType instanceof _0x21fb47 ? "int32" : _0x56ca2a.type;
            var _0x33ea41 = _0x190a62.basic[_0x3623bf];
            _0x5e845b = 'm' + _0x348dc3.safeProp(_0x56ca2a.name);
            if (_0x56ca2a.map) {
              _0x176d16("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x5e845b, _0x56ca2a.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x5e845b)('w.uint32(%i).fork().uint32(%i).%s(ks[i])', (_0x56ca2a.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x190a62.mapKey[_0x56ca2a.keyType], _0x56ca2a.keyType);
              if (undefined === _0x33ea41) {
                _0x176d16('types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()', _0x4bfed2, _0x5e845b);
              } else {
                _0x176d16(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x33ea41, _0x3623bf, _0x5e845b);
              }
              _0x176d16('}')('}');
            } else if (_0x56ca2a.repeated) {
              _0x176d16("if(%s!=null&&%s.length){", _0x5e845b, _0x5e845b);
              if (_0x56ca2a.packed && undefined !== _0x190a62.packed[_0x3623bf]) {
                _0x176d16("w.uint32(%i).fork()", (_0x56ca2a.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x5e845b)('w.%s(%s[i])', _0x3623bf, _0x5e845b)("w.ldelim()");
              } else {
                _0x176d16("for(var i=0;i<%s.length;++i)", _0x5e845b);
                if (undefined === _0x33ea41) {
                  if (_0x56ca2a.resolvedType.group) {
                    _0x176d16("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x4bfed2, _0x5e845b + "[i]", (_0x56ca2a.id << 0x3 | 0x3) >>> 0x0, (_0x56ca2a.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x176d16('types[%i].encode(%s,w.uint32(%i).fork()).ldelim()', _0x4bfed2, _0x5e845b + "[i]", (_0x56ca2a.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x176d16("w.uint32(%i).%s(%s[i])", (_0x56ca2a.id << 0x3 | _0x33ea41) >>> 0x0, _0x3623bf, _0x5e845b);
                }
              }
              _0x176d16('}');
            } else {
              if (_0x56ca2a.optional) {
                _0x176d16("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", _0x5e845b, _0x56ca2a.name);
              }
              if (undefined === _0x33ea41) {
                if (_0x56ca2a.resolvedType.group) {
                  _0x176d16("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x4bfed2, _0x5e845b, (_0x56ca2a.id << 0x3 | 0x3) >>> 0x0, (_0x56ca2a.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x176d16('types[%i].encode(%s,w.uint32(%i).fork()).ldelim()', _0x4bfed2, _0x5e845b, (_0x56ca2a.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x176d16("w.uint32(%i).%s(%s)", (_0x56ca2a.id << 0x3 | _0x33ea41) >>> 0x0, _0x3623bf, _0x5e845b);
              }
            }
          }
          return _0x176d16("return w");
        };
        var _0x21fb47 = _0x2cacfe("./enum");
        var _0x190a62 = _0x2cacfe("./types");
        var _0x348dc3 = _0x2cacfe("./util");
        _0x5c22f5.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x21a726, _0x2404d4, _0x37e624, _0x4df7e8, _0x330374) {
        var _0x2087b4 = _0x37e624.exports = _0x2404d4("./index-minimal");
        _0x2087b4.build = "light";
        _0x2087b4.load = function (_0x473999, _0x3b0a53, _0x3eab6c) {
          if ("function" == typeof _0x3b0a53) {
            _0x3eab6c = _0x3b0a53;
            _0x3b0a53 = new _0x2087b4.Root();
          } else if (!_0x3b0a53) {
            _0x3b0a53 = new _0x2087b4.Root();
          }
          return _0x3b0a53.load(_0x473999, _0x3eab6c);
        };
        _0x2087b4.loadSync = function (_0x160bc2, _0x1cdde7) {
          if (!_0x1cdde7) {
            _0x1cdde7 = new _0x2087b4.Root();
          }
          return _0x1cdde7.loadSync(_0x160bc2);
        };
        _0x2087b4.encoder = _0x2404d4("./encoder");
        _0x2087b4.decoder = _0x2404d4("./decoder");
        _0x2087b4.verifier = _0x2404d4("./verifier");
        _0x2087b4.converter = _0x2404d4("./converter");
        _0x2087b4.ReflectionObject = _0x2404d4("./object");
        _0x2087b4.Namespace = _0x2404d4("./namespace");
        _0x2087b4.Root = _0x2404d4('./root');
        _0x2087b4.Enum = _0x2404d4("./enum");
        _0x2087b4.Type = _0x2404d4("./type");
        _0x2087b4.Field = _0x2404d4("./field");
        _0x2087b4.OneOf = _0x2404d4('./oneof');
        _0x2087b4.MapField = _0x2404d4("./mapfield");
        _0x2087b4.Service = _0x2404d4("./service");
        _0x2087b4.Method = _0x2404d4('./method');
        _0x2087b4.Message = _0x2404d4('./message');
        _0x2087b4.wrappers = _0x2404d4("./wrappers");
        _0x2087b4.types = _0x2404d4("./types");
        _0x2087b4.util = _0x2404d4("./util");
        _0x2087b4.ReflectionObject._configure(_0x2087b4.Root);
        _0x2087b4.Namespace._configure(_0x2087b4.Type, _0x2087b4.Service, _0x2087b4.Enum);
        _0x2087b4.Root._configure(_0x2087b4.Type);
        _0x2087b4.Field._configure(_0x2087b4.Type);
        _0x37e624.exports;
      }, function () {
        return {
          './index-minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js',
          './encoder': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './message': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/message.js',
          './wrappers': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js',
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js', function (_0x3b1069, _0x35db94, _0x1d7f4e, _0xcf7e21, _0xb733a3) {
        _0x1d7f4e.exports = _0x114ba4;
        var _0x6a8db5 = /[\s{}=;:[\],'"()<>]/g;
        var _0x4fa027 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x306c51 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x339fb3 = /^ *[*/]+ */;
        var _0x5eb716 = /^\s*\*?\/*/;
        var _0x4af7b7 = /\n/g;
        var _0x598ca6 = /\s/;
        var _0x14cdee = /\\(.?)/g;
        var _0x389319 = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0x759e92(_0x425ea8) {
          return _0x425ea8.replace(_0x14cdee, function (_0x260ef3, _0x289cb1) {
            switch (_0x289cb1) {
              case "\\":
              case '':
                return _0x289cb1;
              default:
                return _0x389319[_0x289cb1] || '';
            }
          });
        }
        function _0x114ba4(_0xd9d5ad, _0x25808d) {
          _0xd9d5ad = _0xd9d5ad.toString();
          var _0x21163f = 0x0;
          var _0x347137 = _0xd9d5ad.length;
          var _0x413032 = 0x1;
          var _0x1554de = null;
          var _0x44ffab = null;
          var _0x32c4b4 = 0x0;
          var _0x24cdec = false;
          var _0x32ef2b = false;
          var _0x150926 = [];
          var _0x2fbe61 = null;
          function _0x52178f(_0x25c69b, _0x41355f, _0x516d9d) {
            _0x1554de = _0xd9d5ad.charAt(_0x25c69b++);
            _0x32c4b4 = _0x413032;
            _0x24cdec = false;
            _0x32ef2b = _0x516d9d;
            var _0x5d1e76;
            var _0x305f10 = _0x25c69b - (_0x25808d ? 0x2 : 0x3);
            do {
              if (--_0x305f10 < 0x0 || "\n" === (_0x5d1e76 = _0xd9d5ad.charAt(_0x305f10))) {
                _0x24cdec = true;
                break;
              }
            } while (" " === _0x5d1e76 || "\t" === _0x5d1e76);
            var _0x8928f8 = _0xd9d5ad.substring(_0x25c69b, _0x41355f).split(_0x4af7b7);
            for (var _0x12cfc1 = 0x0; _0x12cfc1 < _0x8928f8.length; ++_0x12cfc1) {
              _0x8928f8[_0x12cfc1] = _0x8928f8[_0x12cfc1].replace(_0x25808d ? _0x5eb716 : _0x339fb3, '').trim();
            }
            _0x44ffab = _0x8928f8.join("\n").trim();
          }
          function _0x54c4c4(_0x19aa9c) {
            var _0x3185a0 = _0x4ca58f(_0x19aa9c);
            var _0x3cbd5e = _0xd9d5ad.substring(_0x19aa9c, _0x3185a0);
            return /^\s*\/{1,2}/.test(_0x3cbd5e);
          }
          function _0x4ca58f(_0x1670eb) {
            for (var _0x69db44 = _0x1670eb; _0x69db44 < _0x347137 && "\n" !== _0xd9d5ad.charAt(_0x69db44);) {
              _0x69db44++;
            }
            return _0x69db44;
          }
          function _0xe9cffc() {
            if (_0x150926.length > 0x0) {
              return _0x150926.shift();
            }
            if (_0x2fbe61) {
              return function () {
                var _0x106fb8 = "'" === _0x2fbe61 ? _0x306c51 : _0x4fa027;
                _0x106fb8.lastIndex = _0x21163f - 0x1;
                var _0xb28052 = _0x106fb8.exec(_0xd9d5ad);
                if (!_0xb28052) {
                  throw Error("illegal string (line " + _0x413032 + ')');
                }
                _0x21163f = _0x106fb8.lastIndex;
                _0x4c36e2(_0x2fbe61);
                _0x2fbe61 = null;
                return _0x759e92(_0xb28052[0x1]);
              }();
            }
            var _0x3a30b8;
            var _0xd2f9b;
            var _0x2deacc;
            var _0x3248d1;
            var _0x5ef70c;
            var _0x5382cf = 0x0 === _0x21163f;
            do {
              if (_0x21163f === _0x347137) {
                return null;
              }
              for (_0x3a30b8 = false; _0x598ca6.test(_0x2deacc = _0xd9d5ad.charAt(_0x21163f));) {
                if ("\n" === _0x2deacc) {
                  _0x5382cf = true;
                  ++_0x413032;
                }
                if (++_0x21163f === _0x347137) {
                  return null;
                }
              }
              if ('/' === _0xd9d5ad.charAt(_0x21163f)) {
                if (++_0x21163f === _0x347137) {
                  throw Error("illegal comment (line " + _0x413032 + ')');
                }
                if ('/' === _0xd9d5ad.charAt(_0x21163f)) {
                  if (_0x25808d) {
                    _0x3248d1 = _0x21163f;
                    _0x5ef70c = false;
                    if (_0x54c4c4(_0x21163f)) {
                      _0x5ef70c = true;
                      do {
                        if ((_0x21163f = _0x4ca58f(_0x21163f)) === _0x347137) {
                          break;
                        }
                        _0x21163f++;
                      } while (_0x54c4c4(_0x21163f));
                    } else {
                      _0x21163f = Math.min(_0x347137, _0x4ca58f(_0x21163f) + 0x1);
                    }
                    if (_0x5ef70c) {
                      _0x52178f(_0x3248d1, _0x21163f, _0x5382cf);
                    }
                    _0x413032++;
                    _0x3a30b8 = true;
                  } else {
                    for (_0x5ef70c = '/' === _0xd9d5ad.charAt(_0x3248d1 = _0x21163f + 0x1); "\n" !== _0xd9d5ad.charAt(++_0x21163f);) {
                      if (_0x21163f === _0x347137) {
                        return null;
                      }
                    }
                    ++_0x21163f;
                    if (_0x5ef70c) {
                      _0x52178f(_0x3248d1, _0x21163f - 0x1, _0x5382cf);
                    }
                    ++_0x413032;
                    _0x3a30b8 = true;
                  }
                } else {
                  if ('*' !== (_0x2deacc = _0xd9d5ad.charAt(_0x21163f))) {
                    return '/';
                  }
                  _0x3248d1 = _0x21163f + 0x1;
                  _0x5ef70c = _0x25808d || '*' === _0xd9d5ad.charAt(_0x3248d1);
                  do {
                    if ("\n" === _0x2deacc) {
                      ++_0x413032;
                    }
                    if (++_0x21163f === _0x347137) {
                      throw Error("illegal comment (line " + _0x413032 + ')');
                    }
                    _0xd2f9b = _0x2deacc;
                    _0x2deacc = _0xd9d5ad.charAt(_0x21163f);
                  } while ('*' !== _0xd2f9b || '/' !== _0x2deacc);
                  ++_0x21163f;
                  if (_0x5ef70c) {
                    _0x52178f(_0x3248d1, _0x21163f - 0x2, _0x5382cf);
                  }
                  _0x3a30b8 = true;
                }
              }
            } while (_0x3a30b8);
            var _0x524320 = _0x21163f;
            _0x6a8db5.lastIndex = 0x0;
            if (!_0x6a8db5.test(_0xd9d5ad.charAt(_0x524320++))) {
              for (; _0x524320 < _0x347137 && !_0x6a8db5.test(_0xd9d5ad.charAt(_0x524320));) {
                ++_0x524320;
              }
            }
            var _0x15b7d7 = _0xd9d5ad.substring(_0x21163f, _0x21163f = _0x524320);
            if (!("\"" !== _0x15b7d7 && "'" !== _0x15b7d7)) {
              _0x2fbe61 = _0x15b7d7;
            }
            return _0x15b7d7;
          }
          function _0x4c36e2(_0x48c687) {
            _0x150926.push(_0x48c687);
          }
          function _0x206c02() {
            if (!_0x150926.length) {
              var _0x2842b4 = _0xe9cffc();
              if (null === _0x2842b4) {
                return null;
              }
              _0x4c36e2(_0x2842b4);
            }
            return _0x150926[0x0];
          }
          return Object.defineProperty({
            'next': _0xe9cffc,
            'peek': _0x206c02,
            'push': _0x4c36e2,
            'skip': function (_0x266027, _0x21654a) {
              var _0x12afd8 = _0x206c02();
              if (_0x12afd8 === _0x266027) {
                _0xe9cffc();
                return true;
              }
              if (!_0x21654a) {
                throw Error("illegal " + ("token '" + _0x12afd8 + "', '" + _0x266027 + "' expected") + " (line " + _0x413032 + ')');
              }
              return false;
            },
            'cmnt': function (_0xf9b492) {
              var _0x51a9ad = null;
              if (undefined === _0xf9b492) {
                if (_0x32c4b4 === _0x413032 - 0x1 && (_0x25808d || '*' === _0x1554de || _0x24cdec)) {
                  _0x51a9ad = _0x32ef2b ? _0x44ffab : null;
                }
              } else {
                if (_0x32c4b4 < _0xf9b492) {
                  _0x206c02();
                }
                if (!(_0x32c4b4 !== _0xf9b492 || _0x24cdec || !_0x25808d && '/' !== _0x1554de)) {
                  _0x51a9ad = _0x32ef2b ? null : _0x44ffab;
                }
              }
              return _0x51a9ad;
            }
          }, "line", {
            'get': function () {
              return _0x413032;
            }
          });
        }
        _0x114ba4.unescape = _0x759e92;
        _0x1d7f4e.exports;
      }, {});
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x2d87ad, _0x360a57, _0x1855dd, _0x1dc02d, _0x177d14) {
        _0x1855dd.exports = _0x5a375e;
        _0x5a375e.filename = null;
        _0x5a375e.defaults = {
          'keepCase': false
        };
        var _0x452cc6 = _0x360a57("./tokenize");
        var _0x374ccc = _0x360a57("./root");
        var _0x2eba6c = _0x360a57("./type");
        var _0xaa1bb = _0x360a57("./field");
        var _0x2c2d30 = _0x360a57("./mapfield");
        var _0x415486 = _0x360a57("./oneof");
        var _0x7638bd = _0x360a57("./enum");
        var _0x477505 = _0x360a57("./service");
        var _0x1edf54 = _0x360a57('./method');
        var _0x155cb4 = _0x360a57('./types');
        var _0x3c314d = _0x360a57("./util");
        var _0x252c3d = /^[1-9][0-9]*$/;
        var _0x792ae9 = /^-?[1-9][0-9]*$/;
        var _0x588003 = /^0[x][0-9a-fA-F]+$/;
        var _0x2bc0be = /^-?0[x][0-9a-fA-F]+$/;
        var _0x295264 = /^0[0-7]+$/;
        var _0x5df7b2 = /^-?0[0-7]+$/;
        var _0x5bf5da = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x5cea4a = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x324dcd = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x47df85 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x5a375e(_0x5ef86a, _0x15698f, _0x228d0f) {
          if (!(_0x15698f instanceof _0x374ccc)) {
            _0x228d0f = _0x15698f;
            _0x15698f = new _0x374ccc();
          }
          if (!_0x228d0f) {
            _0x228d0f = _0x5a375e.defaults;
          }
          var _0x15765c;
          var _0x4181f5;
          var _0x10bb80;
          var _0x1feeaa;
          var _0xd3033f;
          var _0x44cfab = _0x228d0f.preferTrailingComment || false;
          var _0x5b211a = _0x452cc6(_0x5ef86a, _0x228d0f.alternateCommentMode || false);
          var _0x139d13 = _0x5b211a.next;
          var _0x138345 = _0x5b211a.push;
          var _0x564bf6 = _0x5b211a.peek;
          var _0x9f083b = _0x5b211a.skip;
          var _0x963e71 = _0x5b211a.cmnt;
          var _0x19ce6b = true;
          var _0xa21b83 = false;
          var _0x1e34ab = _0x15698f;
          var _0x184a8f = _0x228d0f.keepCase ? function (_0x169ecc) {
            return _0x169ecc;
          } : _0x3c314d.camelCase;
          function _0xcd227a(_0x2c595a, _0x457963, _0x9fc5be) {
            var _0x3a0f44 = _0x5a375e.filename;
            if (!_0x9fc5be) {
              _0x5a375e.filename = null;
            }
            return Error("illegal " + (_0x457963 || 'token') + " '" + _0x2c595a + "' (" + (_0x3a0f44 ? _0x3a0f44 + ", " : '') + "line " + _0x5b211a.line + ')');
          }
          function _0x175282() {
            var _0x5d8c04;
            var _0x236ea7 = [];
            do {
              if ("\"" !== (_0x5d8c04 = _0x139d13()) && "'" !== _0x5d8c04) {
                throw _0xcd227a(_0x5d8c04);
              }
              _0x236ea7.push(_0x139d13());
              _0x9f083b(_0x5d8c04);
              _0x5d8c04 = _0x564bf6();
            } while ("\"" === _0x5d8c04 || "'" === _0x5d8c04);
            return _0x236ea7.join('');
          }
          function _0x333be1(_0x241754) {
            var _0x50a37a = _0x139d13();
            switch (_0x50a37a) {
              case "'":
              case "\"":
                _0x138345(_0x50a37a);
                return _0x175282();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (_0x5a1da5, _0x45a6d5) {
                var _0xa88486 = 0x1;
                if ('-' === _0x5a1da5.charAt(0x0)) {
                  _0xa88486 = -0x1;
                  _0x5a1da5 = _0x5a1da5.substring(0x1);
                }
                switch (_0x5a1da5) {
                  case 'inf':
                  case "INF":
                  case "Inf":
                    return _0xa88486 * Infinity;
                  case "nan":
                  case 'NAN':
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x252c3d.test(_0x5a1da5)) {
                  return _0xa88486 * parseInt(_0x5a1da5, 0xa);
                }
                if (_0x588003.test(_0x5a1da5)) {
                  return _0xa88486 * parseInt(_0x5a1da5, 0x10);
                }
                if (_0x295264.test(_0x5a1da5)) {
                  return _0xa88486 * parseInt(_0x5a1da5, 0x8);
                }
                if (_0x5bf5da.test(_0x5a1da5)) {
                  return _0xa88486 * parseFloat(_0x5a1da5);
                }
                throw _0xcd227a(_0x5a1da5, 'number', _0x45a6d5);
              }(_0x50a37a, true);
            } catch (_0x91545b) {
              if (_0x241754 && _0x324dcd.test(_0x50a37a)) {
                return _0x50a37a;
              }
              throw _0xcd227a(_0x50a37a, "value");
            }
          }
          function _0x31c74d(_0x51a114, _0x52c456) {
            var _0x5ef1e8;
            var _0x49cc9c;
            do {
              if (!_0x52c456 || "\"" !== (_0x5ef1e8 = _0x564bf6()) && "'" !== _0x5ef1e8) {
                _0x51a114.push([_0x49cc9c = _0x171eb8(_0x139d13()), _0x9f083b('to', true) ? _0x171eb8(_0x139d13()) : _0x49cc9c]);
              } else {
                _0x51a114.push(_0x175282());
              }
            } while (_0x9f083b(',', true));
            _0x9f083b(';');
          }
          function _0x171eb8(_0x428b45, _0x5b350f) {
            switch (_0x428b45) {
              case "max":
              case 'MAX':
              case 'Max':
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x5b350f && '-' === _0x428b45.charAt(0x0)) {
              throw _0xcd227a(_0x428b45, 'id');
            }
            if (_0x792ae9.test(_0x428b45)) {
              return parseInt(_0x428b45, 0xa);
            }
            if (_0x2bc0be.test(_0x428b45)) {
              return parseInt(_0x428b45, 0x10);
            }
            if (_0x5df7b2.test(_0x428b45)) {
              return parseInt(_0x428b45, 0x8);
            }
            throw _0xcd227a(_0x428b45, 'id');
          }
          function _0x55daec() {
            if (undefined !== _0x15765c) {
              throw _0xcd227a('package');
            }
            _0x15765c = _0x139d13();
            if (!_0x324dcd.test(_0x15765c)) {
              throw _0xcd227a(_0x15765c, "name");
            }
            _0x1e34ab = _0x1e34ab.define(_0x15765c);
            _0x9f083b(';');
          }
          function _0x494ca4() {
            var _0x4d4773;
            var _0x470a77 = _0x564bf6();
            switch (_0x470a77) {
              case "weak":
                _0x4d4773 = _0x10bb80 || (_0x10bb80 = []);
                _0x139d13();
                break;
              case "public":
                _0x139d13();
              default:
                _0x4d4773 = _0x4181f5 || (_0x4181f5 = []);
            }
            _0x470a77 = _0x175282();
            _0x9f083b(';');
            _0x4d4773.push(_0x470a77);
          }
          function _0xf162af() {
            _0x9f083b('=');
            _0x1feeaa = _0x175282();
            if (!(_0xa21b83 = 'proto3' === _0x1feeaa) && "proto2" !== _0x1feeaa) {
              throw _0xcd227a(_0x1feeaa, "syntax");
            }
            _0x9f083b(';');
          }
          function _0x551846(_0x3162ec, _0x3cd019) {
            switch (_0x3cd019) {
              case "option":
                _0x23b3e5(_0x3162ec, _0x3cd019);
                _0x9f083b(';');
                return true;
              case 'message':
                (function (_0x16cc2a, _0x26bc4b) {
                  if (!_0x5cea4a.test(_0x26bc4b = _0x139d13())) {
                    throw _0xcd227a(_0x26bc4b, "type name");
                  }
                  var _0x59e1d6 = new _0x2eba6c(_0x26bc4b);
                  _0x446657(_0x59e1d6, function (_0xb5532b) {
                    if (!_0x551846(_0x59e1d6, _0xb5532b)) {
                      switch (_0xb5532b) {
                        case "map":
                          !function (_0x31527d) {
                            _0x9f083b('<');
                            var _0x38f9a7 = _0x139d13();
                            if (undefined === _0x155cb4.mapKey[_0x38f9a7]) {
                              throw _0xcd227a(_0x38f9a7, "type");
                            }
                            _0x9f083b(',');
                            var _0x644e3f = _0x139d13();
                            if (!_0x324dcd.test(_0x644e3f)) {
                              throw _0xcd227a(_0x644e3f, "type");
                            }
                            _0x9f083b('>');
                            var _0x45e4ac = _0x139d13();
                            if (!_0x5cea4a.test(_0x45e4ac)) {
                              throw _0xcd227a(_0x45e4ac, 'name');
                            }
                            _0x9f083b('=');
                            var _0x467cd7 = new _0x2c2d30(_0x184a8f(_0x45e4ac), _0x171eb8(_0x139d13()), _0x38f9a7, _0x644e3f);
                            _0x446657(_0x467cd7, function (_0x422b52) {
                              if ('option' !== _0x422b52) {
                                throw _0xcd227a(_0x422b52);
                              }
                              _0x23b3e5(_0x467cd7, _0x422b52);
                              _0x9f083b(';');
                            }, function () {
                              _0x2541d3(_0x467cd7);
                            });
                            _0x31527d.add(_0x467cd7);
                          }(_0x59e1d6);
                          break;
                        case "required":
                        case "repeated":
                          _0x5e328b(_0x59e1d6, _0xb5532b);
                          break;
                        case "optional":
                          _0x5e328b(_0x59e1d6, _0xa21b83 ? "proto3_optional" : "optional");
                          break;
                        case "oneof":
                          !function (_0x1355bf, _0xe32824) {
                            if (!_0x5cea4a.test(_0xe32824 = _0x139d13())) {
                              throw _0xcd227a(_0xe32824, "name");
                            }
                            var _0x29f40c = new _0x415486(_0x184a8f(_0xe32824));
                            _0x446657(_0x29f40c, function (_0x4be94c) {
                              if ("option" === _0x4be94c) {
                                _0x23b3e5(_0x29f40c, _0x4be94c);
                                _0x9f083b(';');
                              } else {
                                _0x138345(_0x4be94c);
                                _0x5e328b(_0x29f40c, "optional");
                              }
                            });
                            _0x1355bf.add(_0x29f40c);
                          }(_0x59e1d6, _0xb5532b);
                          break;
                        case "extensions":
                          _0x31c74d(_0x59e1d6.extensions || (_0x59e1d6.extensions = []));
                          break;
                        case "reserved":
                          _0x31c74d(_0x59e1d6.reserved || (_0x59e1d6.reserved = []), true);
                          break;
                        default:
                          if (!_0xa21b83 || !_0x324dcd.test(_0xb5532b)) {
                            throw _0xcd227a(_0xb5532b);
                          }
                          _0x138345(_0xb5532b);
                          _0x5e328b(_0x59e1d6, "optional");
                      }
                    }
                  });
                  _0x16cc2a.add(_0x59e1d6);
                })(_0x3162ec, _0x3cd019);
                return true;
              case 'enum':
                (function (_0xc32790, _0x5d6547) {
                  if (!_0x5cea4a.test(_0x5d6547 = _0x139d13())) {
                    throw _0xcd227a(_0x5d6547, "name");
                  }
                  var _0x6085de = new _0x7638bd(_0x5d6547);
                  _0x446657(_0x6085de, function (_0x3dc61e) {
                    switch (_0x3dc61e) {
                      case "option":
                        _0x23b3e5(_0x6085de, _0x3dc61e);
                        _0x9f083b(';');
                        break;
                      case 'reserved':
                        _0x31c74d(_0x6085de.reserved || (_0x6085de.reserved = []), true);
                        break;
                      default:
                        !function (_0x1c9d04, _0x185617) {
                          if (!_0x5cea4a.test(_0x185617)) {
                            throw _0xcd227a(_0x185617, "name");
                          }
                          _0x9f083b('=');
                          var _0x91aca = _0x171eb8(_0x139d13(), true);
                          var _0x7d6df8 = {};
                          _0x446657(_0x7d6df8, function (_0x395104) {
                            if ("option" !== _0x395104) {
                              throw _0xcd227a(_0x395104);
                            }
                            _0x23b3e5(_0x7d6df8, _0x395104);
                            _0x9f083b(';');
                          }, function () {
                            _0x2541d3(_0x7d6df8);
                          });
                          _0x1c9d04.add(_0x185617, _0x91aca, _0x7d6df8.comment);
                        }(_0x6085de, _0x3dc61e);
                    }
                  });
                  _0xc32790.add(_0x6085de);
                })(_0x3162ec, _0x3cd019);
                return true;
              case "service":
                (function (_0x288674, _0x46b935) {
                  if (!_0x5cea4a.test(_0x46b935 = _0x139d13())) {
                    throw _0xcd227a(_0x46b935, "service name");
                  }
                  var _0x31af59 = new _0x477505(_0x46b935);
                  _0x446657(_0x31af59, function (_0x2b0e65) {
                    if (!_0x551846(_0x31af59, _0x2b0e65)) {
                      if ("rpc" !== _0x2b0e65) {
                        throw _0xcd227a(_0x2b0e65);
                      }
                      !function (_0x1bf37a, _0xfc0bd6) {
                        var _0xbeacb7 = _0x963e71();
                        var _0x354321 = _0xfc0bd6;
                        if (!_0x5cea4a.test(_0xfc0bd6 = _0x139d13())) {
                          throw _0xcd227a(_0xfc0bd6, "name");
                        }
                        var _0x51c742;
                        var _0x56d0c5;
                        var _0x45599e;
                        var _0x4a1815;
                        var _0x2857e7 = _0xfc0bd6;
                        _0x9f083b('(');
                        if (_0x9f083b("stream", true)) {
                          _0x56d0c5 = true;
                        }
                        if (!_0x324dcd.test(_0xfc0bd6 = _0x139d13())) {
                          throw _0xcd227a(_0xfc0bd6);
                        }
                        _0x51c742 = _0xfc0bd6;
                        _0x9f083b(')');
                        _0x9f083b("returns");
                        _0x9f083b('(');
                        if (_0x9f083b("stream", true)) {
                          _0x4a1815 = true;
                        }
                        if (!_0x324dcd.test(_0xfc0bd6 = _0x139d13())) {
                          throw _0xcd227a(_0xfc0bd6);
                        }
                        _0x45599e = _0xfc0bd6;
                        _0x9f083b(')');
                        var _0x247e4b = new _0x1edf54(_0x2857e7, _0x354321, _0x51c742, _0x45599e, _0x56d0c5, _0x4a1815);
                        _0x247e4b.comment = _0xbeacb7;
                        _0x446657(_0x247e4b, function (_0x266040) {
                          if ("option" !== _0x266040) {
                            throw _0xcd227a(_0x266040);
                          }
                          _0x23b3e5(_0x247e4b, _0x266040);
                          _0x9f083b(';');
                        });
                        _0x1bf37a.add(_0x247e4b);
                      }(_0x31af59, _0x2b0e65);
                    }
                  });
                  _0x288674.add(_0x31af59);
                })(_0x3162ec, _0x3cd019);
                return true;
              case "extend":
                (function (_0x5b31ed, _0x42ede9) {
                  if (!_0x324dcd.test(_0x42ede9 = _0x139d13())) {
                    throw _0xcd227a(_0x42ede9, 'reference');
                  }
                  var _0x228d20 = _0x42ede9;
                  _0x446657(null, function (_0x1efaf6) {
                    switch (_0x1efaf6) {
                      case 'required':
                      case "repeated":
                        _0x5e328b(_0x5b31ed, _0x1efaf6, _0x228d20);
                        break;
                      case 'optional':
                        _0x5e328b(_0x5b31ed, _0xa21b83 ? "proto3_optional" : "optional", _0x228d20);
                        break;
                      default:
                        if (!_0xa21b83 || !_0x324dcd.test(_0x1efaf6)) {
                          throw _0xcd227a(_0x1efaf6);
                        }
                        _0x138345(_0x1efaf6);
                        _0x5e328b(_0x5b31ed, "optional", _0x228d20);
                    }
                  });
                })(_0x3162ec, _0x3cd019);
                return true;
            }
            return false;
          }
          function _0x446657(_0x4ecede, _0x13e86c, _0x45df04) {
            var _0x2ac286 = _0x5b211a.line;
            if (_0x4ecede) {
              if ("string" != typeof _0x4ecede.comment) {
                _0x4ecede.comment = _0x963e71();
              }
              _0x4ecede.filename = _0x5a375e.filename;
            }
            if (_0x9f083b('{', true)) {
              for (var _0x37b39d; '}' !== (_0x37b39d = _0x139d13());) {
                _0x13e86c(_0x37b39d);
              }
              _0x9f083b(';', true);
            } else {
              if (_0x45df04) {
                _0x45df04();
              }
              _0x9f083b(';');
              if (_0x4ecede && ("string" != typeof _0x4ecede.comment || _0x44cfab)) {
                _0x4ecede.comment = _0x963e71(_0x2ac286) || _0x4ecede.comment;
              }
            }
          }
          function _0x5e328b(_0x112396, _0x423491, _0x5ed69c) {
            var _0x1f565f = _0x139d13();
            if ('group' !== _0x1f565f) {
              if (!_0x324dcd.test(_0x1f565f)) {
                throw _0xcd227a(_0x1f565f, "type");
              }
              var _0x56cd75 = _0x139d13();
              if (!_0x5cea4a.test(_0x56cd75)) {
                throw _0xcd227a(_0x56cd75, "name");
              }
              _0x56cd75 = _0x184a8f(_0x56cd75);
              _0x9f083b('=');
              var _0x1e2d59 = new _0xaa1bb(_0x56cd75, _0x171eb8(_0x139d13()), _0x1f565f, _0x423491, _0x5ed69c);
              _0x446657(_0x1e2d59, function (_0x1ba455) {
                if ('option' !== _0x1ba455) {
                  throw _0xcd227a(_0x1ba455);
                }
                _0x23b3e5(_0x1e2d59, _0x1ba455);
                _0x9f083b(';');
              }, function () {
                _0x2541d3(_0x1e2d59);
              });
              if ("proto3_optional" === _0x423491) {
                var _0x21393a = new _0x415486('_' + _0x56cd75);
                _0x1e2d59.setOption('proto3_optional', true);
                _0x21393a.add(_0x1e2d59);
                _0x112396.add(_0x21393a);
              } else {
                _0x112396.add(_0x1e2d59);
              }
              if (!(_0xa21b83 || !_0x1e2d59.repeated || undefined === _0x155cb4.packed[_0x1f565f] && undefined !== _0x155cb4.basic[_0x1f565f])) {
                _0x1e2d59.setOption("packed", false, true);
              }
            } else {
              !function (_0xf193bf, _0x4a0921) {
                var _0xa93763 = _0x139d13();
                if (!_0x5cea4a.test(_0xa93763)) {
                  throw _0xcd227a(_0xa93763, "name");
                }
                var _0xa4a4a6 = _0x3c314d.lcFirst(_0xa93763);
                if (_0xa93763 === _0xa4a4a6) {
                  _0xa93763 = _0x3c314d.ucFirst(_0xa93763);
                }
                _0x9f083b('=');
                var _0x1d8a9b = _0x171eb8(_0x139d13());
                var _0x48ad54 = new _0x2eba6c(_0xa93763);
                _0x48ad54.group = true;
                var _0x42ccf5 = new _0xaa1bb(_0xa4a4a6, _0x1d8a9b, _0xa93763, _0x4a0921);
                _0x42ccf5.filename = _0x5a375e.filename;
                _0x446657(_0x48ad54, function (_0x21f96b) {
                  switch (_0x21f96b) {
                    case "option":
                      _0x23b3e5(_0x48ad54, _0x21f96b);
                      _0x9f083b(';');
                      break;
                    case "required":
                    case "repeated":
                      _0x5e328b(_0x48ad54, _0x21f96b);
                      break;
                    case "optional":
                      _0x5e328b(_0x48ad54, _0xa21b83 ? 'proto3_optional' : "optional");
                      break;
                    default:
                      throw _0xcd227a(_0x21f96b);
                  }
                });
                _0xf193bf.add(_0x48ad54).add(_0x42ccf5);
              }(_0x112396, _0x423491);
            }
          }
          function _0x23b3e5(_0x340d45, _0x2abbae) {
            var _0x2de381 = _0x9f083b('(', true);
            if (!_0x324dcd.test(_0x2abbae = _0x139d13())) {
              throw _0xcd227a(_0x2abbae, 'name');
            }
            var _0x7fb59a;
            var _0x304baa = _0x2abbae;
            var _0x6d53d8 = _0x304baa;
            if (_0x2de381) {
              _0x9f083b(')');
              _0x6d53d8 = _0x304baa = '(' + _0x304baa + ')';
              _0x2abbae = _0x564bf6();
              if (_0x47df85.test(_0x2abbae)) {
                _0x7fb59a = _0x2abbae.substr(0x1);
                _0x304baa += _0x2abbae;
                _0x139d13();
              }
            }
            _0x9f083b('=');
            (function (_0x4a7b7c, _0x19fe82, _0x316fac, _0x57b1ef) {
              if (_0x4a7b7c.setParsedOption) {
                _0x4a7b7c.setParsedOption(_0x19fe82, _0x316fac, _0x57b1ef);
              }
            })(_0x340d45, _0x6d53d8, _0x928a10(_0x340d45, _0x304baa), _0x7fb59a);
          }
          function _0x928a10(_0x73c261, _0x306de9) {
            if (_0x9f083b('{', true)) {
              for (var _0x23081f = {}; !_0x9f083b('}', true);) {
                if (!_0x5cea4a.test(_0xd3033f = _0x139d13())) {
                  throw _0xcd227a(_0xd3033f, "name");
                }
                var _0x320e63;
                var _0x15b045 = _0xd3033f;
                if ('{' === _0x564bf6()) {
                  _0x320e63 = _0x928a10(_0x73c261, _0x306de9 + '.' + _0xd3033f);
                } else {
                  _0x9f083b(':');
                  if ('{' === _0x564bf6()) {
                    _0x320e63 = _0x928a10(_0x73c261, _0x306de9 + '.' + _0xd3033f);
                  } else {
                    _0x320e63 = _0x333be1(true);
                    _0x52cd3f(_0x73c261, _0x306de9 + '.' + _0xd3033f, _0x320e63);
                  }
                }
                var _0x2310b3 = _0x23081f[_0x15b045];
                if (_0x2310b3) {
                  _0x320e63 = [].concat(_0x2310b3).concat(_0x320e63);
                }
                _0x23081f[_0x15b045] = _0x320e63;
                _0x9f083b(',', true);
              }
              return _0x23081f;
            }
            var _0x2c97f7 = _0x333be1(true);
            _0x52cd3f(_0x73c261, _0x306de9, _0x2c97f7);
            return _0x2c97f7;
          }
          function _0x52cd3f(_0x58f5e3, _0x22f83, _0xbbd168) {
            if (_0x58f5e3.setOption) {
              _0x58f5e3.setOption(_0x22f83, _0xbbd168);
            }
          }
          function _0x2541d3(_0x1cdd0b) {
            if (_0x9f083b('[', true)) {
              do {
                _0x23b3e5(_0x1cdd0b, "option");
              } while (_0x9f083b(',', true));
              _0x9f083b(']');
            }
            return _0x1cdd0b;
          }
          for (; null !== (_0xd3033f = _0x139d13());) {
            switch (_0xd3033f) {
              case "package":
                if (!_0x19ce6b) {
                  throw _0xcd227a(_0xd3033f);
                }
                _0x55daec();
                break;
              case "import":
                if (!_0x19ce6b) {
                  throw _0xcd227a(_0xd3033f);
                }
                _0x494ca4();
                break;
              case "syntax":
                if (!_0x19ce6b) {
                  throw _0xcd227a(_0xd3033f);
                }
                _0xf162af();
                break;
              case "option":
                _0x23b3e5(_0x1e34ab, _0xd3033f);
                _0x9f083b(';');
                break;
              default:
                if (_0x551846(_0x1e34ab, _0xd3033f)) {
                  _0x19ce6b = false;
                  continue;
                }
                throw _0xcd227a(_0xd3033f);
            }
          }
          _0x5a375e.filename = null;
          return {
            'package': _0x15765c,
            'imports': _0x4181f5,
            'weakImports': _0x10bb80,
            'syntax': _0x1feeaa,
            'root': _0x15698f
          };
        }
        _0x1855dd.exports;
      }, function () {
        return {
          './tokenize': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js',
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x4eb303, _0xccb2db, _0x4abd7e, _0x15fe00, _0x4df16b) {
        _0x4abd7e.exports = _0x3fa924;
        var _0x33c027;
        var _0x241459 = /\/|\./;
        function _0x3fa924(_0xd6171d, _0x4f1eb8) {
          if (!_0x241459.test(_0xd6171d)) {
            _0xd6171d = "google/protobuf/" + _0xd6171d + ".proto";
            _0x4f1eb8 = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x4f1eb8
                    }
                  }
                }
              }
            };
          }
          _0x3fa924[_0xd6171d] = _0x4f1eb8;
        }
        _0x3fa924("any", {
          'Any': {
            'fields': {
              'type_url': {
                'type': "string",
                'id': 0x1
              },
              'value': {
                'type': "bytes",
                'id': 0x2
              }
            }
          }
        });
        _0x3fa924("duration", {
          'Duration': _0x33c027 = {
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
        _0x3fa924('timestamp', {
          'Timestamp': _0x33c027
        });
        _0x3fa924("empty", {
          'Empty': {
            'fields': {}
          }
        });
        _0x3fa924("struct", {
          'Struct': {
            'fields': {
              'fields': {
                'keyType': "string",
                'type': "Value",
                'id': 0x1
              }
            }
          },
          'Value': {
            'oneofs': {
              'kind': {
                'oneof': ['nullValue', "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
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
                'type': "Struct",
                'id': 0x5
              },
              'listValue': {
                'type': 'ListValue',
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
                'type': "Value",
                'id': 0x1
              }
            }
          }
        });
        _0x3fa924('wrappers', {
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
                'type': "float",
                'id': 0x1
              }
            }
          },
          'Int64Value': {
            'fields': {
              'value': {
                'type': "int64",
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
                'type': 'string',
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
        _0x3fa924("field_mask", {
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
        _0x3fa924.get = function (_0x1a2e9e) {
          return _0x3fa924[_0x1a2e9e] || null;
        };
        _0x4abd7e.exports;
      }, {});
      var _0x3c4e92;
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (_0x3c3ed3, _0x49d350, _0x17f313, _0xad0348, _0x38b8f4) {
        var _0x5e31ba = _0x17f313.exports = _0x49d350("./index-light");
        _0x5e31ba.build = "full";
        _0x5e31ba.tokenize = _0x49d350("./tokenize");
        _0x5e31ba.parse = _0x49d350("./parse");
        _0x5e31ba.common = _0x49d350("./common");
        _0x5e31ba.Root._configure(_0x5e31ba.Type, _0x5e31ba.parse, _0x5e31ba.common);
        _0x17f313.exports;
      }, function () {
        return {
          './index-light': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js',
          './parse': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/index.js", function (_0x51c0c0, _0x495106, _0x5ef8c0, _0x5c72d9, _0x1fd6b2) {
        _0x5ef8c0.exports = _0x495106("./src/index");
        _0x3c4e92 = _0x5ef8c0.exports;
      }, function () {
        return {
          './src/index': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      _0x4073b7.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/index.js");
      _0x294ebc._RF.push({}, 'fd207Is6NxJSJYju7tSfiom', "CheckState", undefined);
      _0x294ebc._RF.pop();
      _0x294ebc._RF.push({}, "2db01btv+lGPry59K2B/ZXD", "IdleState", undefined);
      _0x294ebc._RF.pop();
      _0x294ebc._RF.push({}, "dc52dYB4SBD172fyxwD2kAt", "RoundEndState", undefined);
      _0x294ebc._RF.pop();
      _0x294ebc._RF.push({}, "cf946OMqS1OkKMaQa0OKo3i", "RoundShowEndState", undefined);
      _0x294ebc._RF.pop();
      _0x294ebc._RF.push({}, "a2636lRyrpKh5tTpMPdWFx6", "SpinState", undefined);
      _0x294ebc._RF.pop();
      var _0x14fd16;
      _0x4073b7.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (_0x23fc44, _0x4be57c, _0x3d21f8, _0x1628d5, _0x4180dd) {
        _0x3d21f8.exports = _0x4be57c("./src/index-minimal");
        _0x3d21f8.exports;
      }, function () {
        return {
          './src/index-minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js'
        };
      });
      _0x4073b7.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/assets/game/Script/Proto/ifffProto.js', function (_0x16d83f, _0x3f49fb, _0x5ea3c2, _0x2c9a8f, _0x41d6e7) {
        var _0x46e053;
        var _0x3f21e6 = _0x3f49fb("protobufjs/minimal");
        var _0x58441f = _0x3f21e6.Reader;
        var _0x58f5a3 = _0x3f21e6.Writer;
        var _0xde1417 = _0x3f21e6.util;
        var _0x48a1a1 = _0x3f21e6.roots["default"] || (_0x3f21e6.roots["default"] = {});
        (_0x46e053 = {}).SpinAck = function () {
          function _0x569d18(_0x5d7e16) {
            this.PlateSymbol = [];
            if (_0x5d7e16) {
              var _0x2f4c7e = Object.keys(_0x5d7e16);
              for (var _0x123fa1 = 0x0; _0x123fa1 < _0x2f4c7e.length; ++_0x123fa1) {
                if (null != _0x5d7e16[_0x2f4c7e[_0x123fa1]]) {
                  this[_0x2f4c7e[_0x123fa1]] = _0x5d7e16[_0x2f4c7e[_0x123fa1]];
                }
              }
            }
          }
          _0x569d18.prototype.PlateSymbol = _0xde1417.emptyArray;
          _0x569d18.prototype.Award = 0x0;
          _0x569d18.prototype.TotalWin = 0x0;
          _0x569d18.prototype.ShowIndex = '';
          _0x569d18.prototype.NowMoney = 0x0;
          _0x569d18.prototype.AckType = 0x0;
          _0x569d18.prototype.RTP = 0x0;
          _0x569d18.encode = function (_0x36c20b, _0x3dbbcd) {
            if (!_0x3dbbcd) {
              _0x3dbbcd = _0x58f5a3.create();
            }
            if (null != _0x36c20b.PlateSymbol && _0x36c20b.PlateSymbol.length) {
              _0x3dbbcd.uint32(0xa).fork();
              for (var _0xe0af93 = 0x0; _0xe0af93 < _0x36c20b.PlateSymbol.length; ++_0xe0af93) {
                _0x3dbbcd.int32(_0x36c20b.PlateSymbol[_0xe0af93]);
              }
              _0x3dbbcd.ldelim();
            }
            if (null != _0x36c20b.Award && Object.hasOwnProperty.call(_0x36c20b, "Award")) {
              _0x3dbbcd.uint32(0x10).int32(_0x36c20b.Award);
            }
            if (null != _0x36c20b.TotalWin && Object.hasOwnProperty.call(_0x36c20b, "TotalWin")) {
              _0x3dbbcd.uint32(0x19).double(_0x36c20b.TotalWin);
            }
            if (null != _0x36c20b.ShowIndex && Object.hasOwnProperty.call(_0x36c20b, "ShowIndex")) {
              _0x3dbbcd.uint32(0x22).string(_0x36c20b.ShowIndex);
            }
            if (null != _0x36c20b.NowMoney && Object.hasOwnProperty.call(_0x36c20b, 'NowMoney')) {
              _0x3dbbcd.uint32(0x29).double(_0x36c20b.NowMoney);
            }
            if (null != _0x36c20b.AckType && Object.hasOwnProperty.call(_0x36c20b, "AckType")) {
              _0x3dbbcd.uint32(0x30).int32(_0x36c20b.AckType);
            }
            if (null != _0x36c20b.RTP && Object.hasOwnProperty.call(_0x36c20b, "RTP")) {
              _0x3dbbcd.uint32(0x39).double(_0x36c20b.RTP);
            }
            return _0x3dbbcd;
          };
          _0x569d18.decode = function (_0x561066, _0x100fd9) {
            if (!(_0x561066 instanceof _0x58441f)) {
              _0x561066 = _0x58441f.create(_0x561066);
            }
            var _0x299dff = undefined === _0x100fd9 ? _0x561066.len : _0x561066.pos + _0x100fd9;
            for (var _0x51b63d = new _0x48a1a1.ifffProto.SpinAck(); _0x561066.pos < _0x299dff;) {
              var _0x209a45 = _0x561066.uint32();
              switch (_0x209a45 >>> 0x3) {
                case 0x1:
                  if (!(_0x51b63d.PlateSymbol && _0x51b63d.PlateSymbol.length)) {
                    _0x51b63d.PlateSymbol = [];
                  }
                  if (0x2 == (0x7 & _0x209a45)) {
                    for (var _0x3b3384 = _0x561066.uint32() + _0x561066.pos; _0x561066.pos < _0x3b3384;) {
                      _0x51b63d.PlateSymbol.push(_0x561066.int32());
                    }
                  } else {
                    _0x51b63d.PlateSymbol.push(_0x561066.int32());
                  }
                  break;
                case 0x2:
                  _0x51b63d.Award = _0x561066.int32();
                  break;
                case 0x3:
                  _0x51b63d.TotalWin = _0x561066.double();
                  break;
                case 0x4:
                  _0x51b63d.ShowIndex = _0x561066.string();
                  break;
                case 0x5:
                  _0x51b63d.NowMoney = _0x561066.double();
                  break;
                case 0x6:
                  _0x51b63d.AckType = _0x561066.int32();
                  break;
                case 0x7:
                  _0x51b63d.RTP = _0x561066.double();
                  break;
                default:
                  _0x561066.skipType(0x7 & _0x209a45);
              }
            }
            return _0x51b63d;
          };
          _0x569d18.getTypeUrl = function (_0x35e405) {
            if (undefined === _0x35e405) {
              _0x35e405 = "type.googleapis.com";
            }
            return _0x35e405 + "/ifffProto.SpinAck";
          };
          return _0x569d18;
        }();
        _0x48a1a1.ifffProto = _0x46e053;
        _0x5ea3c2.exports = _0x48a1a1;
        _0x14fd16 = _0x5ea3c2.exports;
      }, function () {
        return {
          'protobufjs/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      _0x4073b7.require('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/IndianFaFaFa/Client/Thai_UAT/assets/game/Script/Proto/ifffProto.js');
      _0x294ebc._RF.push({}, '0ab812b+nVFXY7yaJfvnAkO', "UnshowPrepareState", undefined);
      _0x294ebc._RF.pop();
      _0x294ebc._RF.push({}, "b1fce8A6l9EDKkUnAJ6yVuE", 'WaitResState', undefined);
      _0x294ebc._RF.pop();
      _0x294ebc._RF.push({}, "c1ea7Pii+dAi78piqmmzKpD", "GameView", undefined);
      _0x294ebc._RF.pop();
      _0x294ebc._RF.push({}, "0185cFrVCJB3653s+KV/hCQ", "AwardState", undefined);
      _0x294ebc._RF.pop();
    }
  };
});
(function (_0x2332e5) {
  _0x2332e5('virtual:///prerequisite-imports/game', "chunks:///game.js");
})(function (_0x5c766d, _0x112db4) {
  System.register(_0x5c766d, [_0x112db4], function (_0x31d8e8, _0x13b333) {
    return {
      'setters': [function (_0x37d7c4) {
        var _0x46cf9a = {};
        for (var _0x2b28a5 in _0x37d7c4) {
          if (_0x2b28a5 !== "default" && _0x2b28a5 !== '__esModule') {
            _0x46cf9a[_0x2b28a5] = _0x37d7c4[_0x2b28a5];
          }
        }
        _0x31d8e8(_0x46cf9a);
      }],
      'execute': function () {}
    };
  });
});