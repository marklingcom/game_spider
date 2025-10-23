System.register("chunks:///game.js", ['cc', "./index-de1e2758.js"], function (_0x478142, _0x39e01f) {
  'use strict';

  var _0x2c4ee5;
  var _0x98696;
  var _0x73005c;
  var _0x1a8f7d;
  var _0x592fc6;
  var _0x2e72bb;
  var _0x2ed444;
  var _0xdbf46;
  var _0x36bc07;
  var _0x5de1a2;
  var _0x27176c;
  var _0x2c0559;
  var _0x581c11;
  var _0x5d2d87;
  var _0x1ce2d1;
  var _0x12f750;
  var _0x93abd1;
  var _0x1df3f5;
  var _0x47b037;
  var _0x22aa71;
  var _0x3658a6;
  var _0x18a697;
  var _0x481e90;
  var _0x5942a2;
  var _0x2a6906;
  var _0x112fc7;
  var _0x46fe85;
  var _0x3ec37c;
  var _0x3e7c19;
  var _0x5c99ef;
  var _0x2a8ac6;
  var _0x2cea62;
  var _0x304cee;
  var _0x21c906;
  var _0x30c78d;
  var _0x49a46a;
  var _0x197a27;
  var _0x5043f5;
  var _0x21436e;
  var _0x2d97e1;
  var _0x3a966d;
  var _0x12ad2a;
  var _0x2d761c;
  var _0x5544dd;
  var _0x4e0271;
  var _0xfb754;
  var _0x5cb914;
  var _0x34ce7c;
  var _0x3b26ab;
  var _0x967e17;
  var _0x443260;
  var _0x5c705b;
  var _0x36d5b1;
  var _0x5c5958;
  var _0x3d96af;
  var _0x1cae30;
  var _0x3526ec;
  var _0x1d0bec;
  var _0x23fd30;
  var _0x60defd;
  var _0x110db8;
  var _0x2ecadc;
  var _0x16f2c7;
  var _0x4353f6;
  var _0x4bf072;
  var _0x2f06f6;
  var _0x4fd6e4;
  var _0x340cae;
  var _0xb32a90;
  var _0x766463;
  var _0x5749ba;
  var _0x35ac60;
  var _0x4db906;
  var _0x484f22;
  var _0x21dc5c;
  return {
    'setters': [function (_0x3ef86d) {
      _0x2c4ee5 = _0x3ef86d.cclegacy;
      _0x98696 = _0x3ef86d.color;
      _0x73005c = _0x3ef86d._decorator;
      _0x1a8f7d = _0x3ef86d.sp;
      _0x592fc6 = _0x3ef86d.v3;
      _0x2e72bb = _0x3ef86d.Component;
      _0x2ed444 = _0x3ef86d.Prefab;
      _0xdbf46 = _0x3ef86d.AnimationClip;
      _0x36bc07 = _0x3ef86d.Label;
      _0x5de1a2 = _0x3ef86d.Vec2;
      _0x27176c = _0x3ef86d.Node;
      _0x2c0559 = _0x3ef86d.instantiate;
      _0x581c11 = _0x3ef86d.UITransform;
      _0x5d2d87 = _0x3ef86d.Size;
      _0x1ce2d1 = _0x3ef86d.tween;
      _0x12f750 = _0x3ef86d.TweenSystem;
      _0x93abd1 = _0x3ef86d.Vec3;
      _0x1df3f5 = _0x3ef86d.v2;
      _0x47b037 = _0x3ef86d.Animation;
      _0x22aa71 = _0x3ef86d.UIOpacity;
      _0x3658a6 = _0x3ef86d.log;
      _0x18a697 = _0x3ef86d.SpriteFrame;
      _0x481e90 = _0x3ef86d.Sprite;
      _0x5942a2 = _0x3ef86d.error;
      _0x2a6906 = _0x3ef86d.Tween;
      _0x112fc7 = _0x3ef86d.SpriteAtlas;
      _0x46fe85 = _0x3ef86d.sys;
      _0x3ec37c = _0x3ef86d.input;
      _0x3e7c19 = _0x3ef86d.Input;
      _0x5c99ef = _0x3ef86d.KeyCode;
      _0x2a8ac6 = _0x3ef86d.screen;
      _0x2cea62 = _0x3ef86d.view;
      _0x304cee = _0x3ef86d.ResolutionPolicy;
      _0x21c906 = _0x3ef86d.js;
    }, function (_0x580f25) {
      _0x30c78d = _0x580f25.B;
      _0x49a46a = _0x580f25._;
      _0x197a27 = _0x580f25.a;
      _0x5043f5 = _0x580f25.b;
      _0x21436e = _0x580f25.c;
      _0x2d97e1 = _0x580f25.o;
      _0x3a966d = _0x580f25.p;
      _0x12ad2a = _0x580f25.w;
      _0x2d761c = _0x580f25.l;
      _0x5544dd = _0x580f25.g;
      _0x4e0271 = _0x580f25.d;
      _0xfb754 = _0x580f25.h;
      _0x5cb914 = _0x580f25.e;
      _0x34ce7c = _0x580f25.n;
      _0x3b26ab = _0x580f25.j;
      _0x967e17 = _0x580f25.r;
      _0x443260 = _0x580f25.x;
      _0x5c705b = _0x580f25.y;
      _0x36d5b1 = _0x580f25.z;
      _0x5c5958 = _0x580f25.k;
      _0x3d96af = _0x580f25.i;
      _0x1cae30 = _0x580f25.s;
      _0x3526ec = _0x580f25.A;
      _0x1d0bec = _0x580f25.t;
      _0x23fd30 = _0x580f25.D;
      _0x60defd = _0x580f25.E;
      _0x110db8 = _0x580f25.M;
      _0x2ecadc = _0x580f25.F;
      _0x16f2c7 = _0x580f25.G;
      _0x4353f6 = _0x580f25.T;
      _0x4bf072 = _0x580f25.S;
      _0x2f06f6 = _0x580f25.H;
      _0x4fd6e4 = _0x580f25.f;
      _0x340cae = _0x580f25.C;
      _0xb32a90 = _0x580f25.I;
      _0x766463 = _0x580f25.J;
      _0x5749ba = _0x580f25.K;
      _0x35ac60 = _0x580f25.L;
      _0x4db906 = _0x580f25.N;
      _0x484f22 = _0x580f25.O;
      _0x21dc5c = _0x580f25.P;
    }],
    'execute': function () {
      _0x2c4ee5._RF.push({}, "10d47KcaLNJn5BmsLxg+xqm", "DataStructure", undefined);
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "eaaacLo7LFAR6XOO5lzGkOH", "Game_Define", undefined);
      var _0x3fb2b5 = function () {
        function _0x1c225d() {}
        _0x1c225d.OnExit = function () {
          this.AudioClips = {
            'BGM_FG': null,
            'BGM_MG': null,
            'Big_win': null,
            'Big_win_end': null,
            'ChangeWin': null,
            'Combo_1': null,
            'Combo_1_fast': null,
            'Combo_2': null,
            'Combo_2_fast': null,
            'Combo_3': null,
            'Combo_3_fast': null,
            'Combo_4': null,
            'Combo_4_fast': null,
            'Combo_5': null,
            'Combo_5_fast': null,
            'Debut': null,
            'FG_Add': null,
            'FG_End': null,
            'FG_Fly': null,
            'FG_Golden_treasure': null,
            'FG_Into': null,
            'FG_Multiple': null,
            'FG_Symbol_change': null,
            'FG_Symbol_change_single': null,
            'Girl_01': null,
            'Girl_02': null,
            'Girl_03': null,
            'Girl_04': null,
            'Girl_05': null,
            'Girl_06': null,
            'Reel_run': null,
            'Reel_Stop': null,
            'Scatter_bell': null,
            'Spin': null,
            'Small_win_01': null,
            'Small_win_02': null,
            'Small_win_03': null,
            'NearWin_1': null,
            'NearWin_2': null,
            'NearWin_3': null
          };
        };
        return _0x1c225d;
      }();
      var _0x4631f6;
      var _0xad02f8;
      var _0x5cf98d;
      var _0x50b168;
      var _0x32bcbe;
      var _0x18c677;
      var _0x545c7a;
      var _0x4b3fc6;
      var _0x44b1fb;
      var _0x47280e;
      var _0x1d02be;
      var _0x3ebfdb;
      var _0x1f9a23;
      var _0x1f4c1b;
      _0x3fb2b5.COL = 0x6;
      _0x3fb2b5.ROW = 0x6;
      _0x3fb2b5.SymbolTotalNum = _0x3fb2b5.COL * _0x3fb2b5.ROW;
      _0x3fb2b5.CloseNearWinNum = 0x6;
      _0x3fb2b5.NearWinLvl = 0x0;
      _0x3fb2b5.Color = {
        'Normal': _0x98696(0xff, 0xff, 0xff),
        'Dark': _0x98696(0x90, 0x90, 0x90)
      };
      _0x3fb2b5.IsProto = false;
      _0x3fb2b5.GameType = "petra";
      _0x3fb2b5.Ver = '97';
      _0x3fb2b5.SpinClickEvent = 0x0;
      _0x3fb2b5.IsAutoShowFeatures = false;
      _0x3fb2b5.IsBottombarFinished = false;
      _0x3fb2b5.IsLogin = false;
      _0x3fb2b5.IsInFG = false;
      _0x3fb2b5.IsInFGFx = false;
      _0x3fb2b5.IsGetGameInfo = false;
      _0x3fb2b5.IsCheckChips = false;
      _0x3fb2b5.IsFGFirstSpin = false;
      _0x3fb2b5.IsPlayMaxSound = false;
      _0x3fb2b5.IsAutoSpin = false;
      _0x3fb2b5.RoundIdx = 0x0;
      _0x3fb2b5.PlateIdx = 0x0;
      _0x3fb2b5.TotalWin = 0x0;
      _0x3fb2b5.TimeScale = {
        'Normal': 0x1,
        'HardStop': 0x2
      };
      _0x3fb2b5.SERVER_RET_TYPE = {
        'SERVER_SUCCESS': 0x0,
        'SERVER_ERROR_SEATE': 0x31f,
        'SERVER_NOUSE': 0x383,
        'SERVER_MAINTAIN': 0xe7,
        'SERVER_SHUTDOWN': 0xe8,
        'SERVER_NEED_UID': 0xe9,
        'SERVER_NEED_LOGIN': 0xea,
        'SERVER_TOKEN_ERROR': 0xeb
      };
      _0x3fb2b5.AckType = {
        'login': 0x0,
        'exchangeChips': 0x2,
        'info': 0xb,
        'spin': 0xc,
        'buyBonus': 0x24,
        'heartBeat': 0x62,
        'serverMsg': 0x63
      };
      _0x3fb2b5.LOGIN_RESULT_TYPE = {
        'LOGIN_SUCCESS': 0x0,
        'LOGIN_FAIL': 0x1,
        'API_VERIFY_FAIL': 0xeb,
        'API_LOGIN_REPEAT_FAIL': 0x7d2
      };
      _0x3fb2b5.StringKey = {
        'BONUS_GAME_TXT': 'BONUS_GAME_TXT',
        'FEATURE_LEFT': "FEATURE_LEFT",
        'FEATURE_RIGHT': "FEATURE_RIGHT"
      };
      _0x3fb2b5.HEART_BEAT_STATE = {
        'NOTIFY': 0x61,
        'MAINTAIN': 0x62,
        'CLOSE': 0x63
      };
      _0x3fb2b5.SPIN_ACK_TYPE = {
        'AT_SUCCESS': 0x0,
        'AT_MONEY_NOT_ENOUGH': 0x12e,
        'AT_MONEY_ABNORMAL': 0x12d,
        'AT_MONEY_NOT_ENOUGH_SINGLE': 0x131
      };
      _0x3fb2b5.USE_ITEM_REASON = {
        'NORMAL': 0x0,
        'USING': 0x1
      };
      _0x3fb2b5.AWARD_SETTING = [{
        'BetRate': 0x6,
        'Lvl': _0x30c78d.Level.BIG
      }, {
        'BetRate': 0xf,
        'Lvl': _0x30c78d.Level.MEGA
      }, {
        'BetRate': 0x1e,
        'Lvl': _0x30c78d.Level.SUPER
      }];
      _0x3fb2b5.FreeGameRemain = 0x0;
      _0x3fb2b5.FreeSpinAward = 0x0;
      _0x3fb2b5.IsShowFreeSpinEnd = false;
      _0x3fb2b5.IsUsingItem = false;
      _0x3fb2b5.UsingItemReason = 0x0;
      _0x3fb2b5.UsingItemRemainTimes = 0x0;
      _0x3fb2b5.ItemAward = 0x0;
      _0x3fb2b5.IsShowItemEnd = false;
      _0x3fb2b5.MissionReward = 0x0;
      _0x3fb2b5.JpType = 0x0;
      _0x3fb2b5.JpWin = 0x0;
      _0x3fb2b5.FullJpWin = 0x0;
      _0x3fb2b5.ShowDisplayValue = null;
      _0x3fb2b5.AudioPathPre = 'Sound/';
      _0x3fb2b5.AudioClips = {
        'Debut': null,
        'BGM_FG': null,
        'BGM_MG': null,
        'Big_win': null,
        'Big_win_end': null,
        'ChangeWin': null,
        'Combo_1': null,
        'Combo_1_fast': null,
        'Combo_2': null,
        'Combo_2_fast': null,
        'Combo_3': null,
        'Combo_3_fast': null,
        'Combo_4': null,
        'Combo_4_fast': null,
        'Combo_5': null,
        'Combo_5_fast': null,
        'FG_Add': null,
        'FG_End': null,
        'FG_Fly': null,
        'FG_Golden_treasure': null,
        'FG_Into': null,
        'FG_Multiple': null,
        'FG_Symbol_change': null,
        'FG_Symbol_change_single': null,
        'Girl_01': null,
        'Girl_02': null,
        'Girl_03': null,
        'Girl_04': null,
        'Girl_05': null,
        'Girl_06': null,
        'Reel_run': null,
        'Reel_Stop': null,
        'Scatter_bell': null,
        'Spin': null,
        'Small_win_01': null,
        'Small_win_02': null,
        'Small_win_03': null,
        'NearWin_1': null,
        'NearWin_2': null,
        'NearWin_3': null
      };
      _0x3fb2b5.SPINACK_NORMAL = {
        'info': {
          'RoundQueue': [{
            'ComboStageData': [{
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x4, 0x4, 0x4, 0x1b, 0x1b]
              }, {
                'Col': [0x3, 0xd, 0x1, 0x1, 0x4, 0x4]
              }, {
                'Col': [0x1b, 0x2, 0x2, 0x8, 0x8, 0x1b]
              }, {
                'Col': [0x3, 0x3, 0x1, 0x1, 0x10, 0x1b]
              }, {
                'Col': [0x1b, 0x6, 0x4, 0x4, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x3, 0x3, 0x5, 0x1b]
              }],
              'ComboStageMult': 0x1,
              'FillSymbols': [{}, {}, {}, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }]
          }],
          'ShowIndex': "17056-334130-00754191",
          'NowMoney': 20574.9
        }
      };
      _0x3fb2b5.SPINACK_AWARD = {
        'info': {
          'RoundQueue': [{
            'ComboStageData': [{
              'ComboStageSymbol': [{
                'Col': [0x4, 0x0, 0x0, 0x5, 0x5, 0x3]
              }, {
                'Col': [0x3, 0x1, 0x1, 0x5, 0xf, 0x4]
              }, {
                'Col': [0x1b, 0x5, 0xf, 0x4, 0x4, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x2, 0x8, 0x8, 0x1b]
              }, {
                'Col': [0x1b, 0xd, 0xa, 0x0, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x7, 0x4, 0x1b, 0x1b]
              }],
              'ComboStageWin': 0x64,
              'ComboStageMult': 0x1,
              'AwardDataVec': [{
                'Symbol': 0x4,
                'Count': 0x3,
                'LineNum': 0x2,
                'Win': 0x14,
                'PosVec': [0x0, 0xb, 0xf, 0x10]
              }, {
                'Symbol': 0x5,
                'Count': 0x3,
                'LineNum': 0x8,
                'Win': 0x50,
                'PosVec': [0x3, 0x4, 0x9, 0xa, 0xd, 0xe]
              }],
              'HitSlatePosVec': [0x11, 0xc, 0x13],
              'FillSymbols': [{
                'Col': [0x6, 0x8, 0x6]
              }, {
                'Col': [0x7, 0x5]
              }, {
                'Col': [0x4, 0x8, 0x3, 0x2, 0x7]
              }, {
                'Col': [0x5]
              }, {}, {}],
              'ChangeSymbols': [{}, {
                'Col': [0x14]
              }, {
                'Col': [0x14]
              }, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x0, 0x0, 0x3, 0x6, 0x8, 0x6]
              }, {
                'Col': [0x3, 0x1, 0x1, 0x14, 0x7, 0x5]
              }, {
                'Col': [0x14, 0x4, 0x8, 0x3, 0x2, 0x7]
              }, {
                'Col': [0x1b, 0x2, 0x8, 0x8, 0x1b, 0x5]
              }, {
                'Col': [0x1b, 0xd, 0xa, 0x0, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x7, 0x4, 0x1b, 0x1b]
              }],
              'ComboStageWin': 0x118,
              'ComboStageMult': 0x1,
              'AwardDataVec': [{
                'Count': 0x3,
                'LineNum': 0x2,
                'Win': 0xa,
                'PosVec': [0x0, 0x1, 0x9, 0xc]
              }, {
                'Symbol': 0x3,
                'Count': 0x3,
                'LineNum': 0x4,
                'Win': 0x28,
                'PosVec': [0x2, 0x6, 0x9, 0xc, 0xf]
              }, {
                'Symbol': 0x6,
                'Count': 0x3,
                'LineNum': 0x2,
                'Win': 0x1e,
                'PosVec': [0x3, 0x5, 0x9, 0xc]
              }, {
                'Symbol': 0x8,
                'Count': 0x4,
                'LineNum': 0x4,
                'Win': 0xc8,
                'PosVec': [0x4, 0x9, 0xc, 0xe, 0x14, 0x15]
              }],
              'HitSlatePosVec': [0x12, 0x16],
              'FillSymbols': [{
                'Col': [0x6, 0x6, 0x0, 0x7, 0x5, 0x7]
              }, {
                'Col': [0x6, 0x6]
              }, {
                'Col': [0x8, 0x8, 0x3]
              }, {
                'Col': [0x8, 0x6, 0x5, 0x7]
              }, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x6, 0x6, 0x0, 0x7, 0x5, 0x7]
              }, {
                'Col': [0x1, 0x1, 0x7, 0x5, 0x6, 0x6]
              }, {
                'Col': [0x4, 0x2, 0x7, 0x8, 0x8, 0x3]
              }, {
                'Col': [0x2, 0x5, 0x8, 0x6, 0x5, 0x7]
              }, {
                'Col': [0x1b, 0xd, 0xa, 0x0, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x7, 0x4, 0x1b, 0x1b]
              }],
              'ComboStageWin': 0x3c,
              'ComboStageMult': 0x1,
              'AwardDataVec': [{
                'Symbol': 0x7,
                'Count': 0x4,
                'LineNum': 0x2,
                'Win': 0x3c,
                'PosVec': [0x3, 0x5, 0x8, 0xe, 0x17]
              }],
              'HitSlatePosVec': [0x1d],
              'FillSymbols': [{
                'Col': [0x5, 0x1]
              }, {
                'Col': [0x7]
              }, {
                'Col': [0x6]
              }, {
                'Col': [0x6]
              }, {
                'Col': [0x2]
              }, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x6, 0x6, 0x0, 0x5, 0x5, 0x1]
              }, {
                'Col': [0x1, 0x1, 0x5, 0x6, 0x6, 0x7]
              }, {
                'Col': [0x4, 0x2, 0x8, 0x8, 0x3, 0x6]
              }, {
                'Col': [0x2, 0x5, 0x8, 0x6, 0x5, 0x6]
              }, {
                'Col': [0x1b, 0xd, 0xa, 0x0, 0x1b, 0x2]
              }, {
                'Col': [0x1b, 0x1b, 0x7, 0x4, 0x1b, 0x1b]
              }],
              'ComboStageWin': 0xc8,
              'ComboStageMult': 0x1,
              'AwardDataVec': [{
                'Symbol': 0x6,
                'Count': 0x4,
                'LineNum': 0x8,
                'Win': 0xc8,
                'PosVec': [0x0, 0x1, 0x9, 0xa, 0x11, 0x15, 0x17]
              }],
              'FillSymbols': [{
                'Col': [0x7, 0x4]
              }, {
                'Col': [0x5, 0x8]
              }, {
                'Col': [0x4]
              }, {
                'Col': [0x12, 0x8]
              }, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x0, 0x5, 0x5, 0x1, 0x7, 0x4]
              }, {
                'Col': [0x1, 0x1, 0x5, 0x7, 0x5, 0x8]
              }, {
                'Col': [0x4, 0x2, 0x8, 0x8, 0x3, 0x4]
              }, {
                'Col': [0x2, 0x5, 0x8, 0x5, 0x12, 0x8]
              }, {
                'Col': [0x1b, 0xd, 0xa, 0x0, 0x1b, 0x2]
              }, {
                'Col': [0x1b, 0x1b, 0x7, 0x4, 0x1b, 0x1b]
              }],
              'ComboStageMult': 0x1,
              'FillSymbols': [{}, {}, {}, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }],
            'RoundWin': 0x280,
            'AwardTypeFlag': 0x11
          }],
          'TotalWin': 0x280,
          'ShowIndex': "17056-334130-00974191",
          'NowMoney': 20114.9
        }
      };
      _0x3fb2b5.SPINACK_FG = {
        'info': {
          'RoundQueue': [{
            'ComboStageData': [{
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x5, 0x6, 0x6, 0x4, 0x4]
              }, {
                'Col': [0x0, 0x3, 0x3, 0x1, 0x1, 0x4]
              }, {
                'Col': [0x4, 0x4, 0x0, 0x0, 0x5, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x4, 0x7, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x6, 0x4, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x7, 0x7, 0x4, 0x1b, 0x1b]
              }],
              'ComboStageWin': 0x78,
              'ComboStageMult': 0x1,
              'AwardDataVec': [{
                'Symbol': 0x4,
                'Count': 0x6,
                'LineNum': 0x4,
                'Win': 0x78,
                'PosVec': [0x4, 0x5, 0xb, 0xc, 0xd, 0x14, 0x1b, 0x21]
              }],
              'HitSlatePosVec': [0x11, 0x12, 0x13, 0x1c, 0x22],
              'FillSymbols': [{
                'Col': [0x8, 0x1]
              }, {
                'Col': [0x8]
              }, {
                'Col': [0x3, 0x1, 0x11]
              }, {
                'Col': [0x6, 0x7, 0x3]
              }, {
                'Col': [0x7, 0x7]
              }, {
                'Col': [0x3, 0x4]
              }],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x5, 0x6, 0x6, 0x8, 0x1]
              }, {
                'Col': [0x0, 0x3, 0x3, 0x1, 0x1, 0x8]
              }, {
                'Col': [0x0, 0x0, 0x5, 0x3, 0x1, 0x11]
              }, {
                'Col': [0x7, 0x1b, 0x1b, 0x6, 0x7, 0x3]
              }, {
                'Col': [0x1b, 0x1b, 0x6, 0x1b, 0x7, 0x7]
              }, {
                'Col': [0x1b, 0x7, 0x7, 0x1b, 0x3, 0x4]
              }],
              'ComboStageWin': 0xa,
              'ComboStageMult': 0x1,
              'AwardDataVec': [{
                'Symbol': 0x1,
                'Count': 0x3,
                'LineNum': 0x2,
                'Win': 0xa,
                'PosVec': [0x5, 0x9, 0xa, 0x10]
              }],
              'FillSymbols': [{
                'Col': [0x8]
              }, {
                'Col': [0x11, 0x4]
              }, {
                'Col': [0x8]
              }, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x5, 0x6, 0x6, 0x8, 0x8]
              }, {
                'Col': [0x0, 0x3, 0x3, 0x8, 0x11, 0x4]
              }, {
                'Col': [0x0, 0x0, 0x5, 0x3, 0x11, 0x8]
              }, {
                'Col': [0x7, 0x1b, 0x1b, 0x6, 0x7, 0x3]
              }, {
                'Col': [0x1b, 0x1b, 0x6, 0x1b, 0x7, 0x7]
              }, {
                'Col': [0x1b, 0x7, 0x7, 0x1b, 0x3, 0x4]
              }],
              'ComboStageWin': 0x3c,
              'ComboStageMult': 0x1,
              'AwardDataVec': [{
                'Symbol': 0x8,
                'Count': 0x3,
                'LineNum': 0x2,
                'Win': 0x3c,
                'PosVec': [0x4, 0x5, 0x9, 0x11]
              }],
              'FillSymbols': [{
                'Col': [0x7, 0x6]
              }, {
                'Col': [0x6]
              }, {
                'Col': [0x5]
              }, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x5, 0x6, 0x6, 0x7, 0x6]
              }, {
                'Col': [0x0, 0x3, 0x3, 0x11, 0x4, 0x6]
              }, {
                'Col': [0x0, 0x0, 0x5, 0x3, 0x11, 0x5]
              }, {
                'Col': [0x7, 0x1b, 0x1b, 0x6, 0x7, 0x3]
              }, {
                'Col': [0x1b, 0x1b, 0x6, 0x1b, 0x7, 0x7]
              }, {
                'Col': [0x1b, 0x7, 0x7, 0x1b, 0x3, 0x4]
              }],
              'ComboStageWin': 0x1e0,
              'ComboStageMult': 0x1,
              'AwardDataVec': [{
                'Symbol': 0x7,
                'Count': 0x6,
                'LineNum': 0x8,
                'Win': 0x1e0,
                'PosVec': [0x4, 0x9, 0x10, 0x12, 0x16, 0x1c, 0x1d, 0x1f, 0x20]
              }],
              'HitSlatePosVec': [0x18, 0x13, 0x1b, 0x19, 0x1e, 0x21],
              'FillSymbols': [{
                'Col': [0x7]
              }, {}, {}, {
                'Col': [0x7, 0x7, 0x8]
              }, {
                'Col': [0x8, 0x6, 0x4, 0x7, 0x0]
              }, {
                'Col': [0x6, 0x3, 0x5, 0x3]
              }],
              'ChangeSymbols': [{}, {
                'Col': [0x14]
              }, {
                'Col': [0x14]
              }, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x5, 0x6, 0x6, 0x6, 0x7]
              }, {
                'Col': [0x0, 0x3, 0x3, 0x14, 0x4, 0x6]
              }, {
                'Col': [0x0, 0x0, 0x5, 0x3, 0x14, 0x5]
              }, {
                'Col': [0x1b, 0x6, 0x3, 0x7, 0x7, 0x8]
              }, {
                'Col': [0x6, 0x8, 0x6, 0x4, 0x7, 0x0]
              }, {
                'Col': [0x3, 0x4, 0x6, 0x3, 0x5, 0x3]
              }],
              'ComboStageWin': 0x2c6,
              'ComboStageMult': 0x1,
              'AwardDataVec': [{
                'Symbol': 0x5,
                'Count': 0x3,
                'LineNum': 0x3,
                'Win': 0x1e,
                'PosVec': [0x1, 0x9, 0xe, 0x10, 0x11]
              }, {
                'Symbol': 0x6,
                'Count': 0x6,
                'LineNum': 0xc,
                'Win': 0x258,
                'PosVec': [0x2, 0x3, 0x4, 0x9, 0xb, 0x10, 0x13, 0x18, 0x1a, 0x20]
              }, {
                'Symbol': 0x7,
                'Count': 0x5,
                'LineNum': 0x2,
                'Win': 0x50,
                'PosVec': [0x5, 0x9, 0x10, 0x15, 0x16, 0x1c]
              }],
              'HitSlatePosVec': [0x0, 0x12],
              'FillSymbols': [{
                'Col': [0x7, 0x7, 0x1, 0x6, 0x4, 0x8]
              }, {
                'Col': [0x7, 0x4]
              }, {
                'Col': [0x8, 0x6, 0x8]
              }, {
                'Col': [0x7, 0x8, 0x6, 0x8]
              }, {
                'Col': [0x7, 0x7, 0x0]
              }, {
                'Col': [0x7]
              }],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x7, 0x7, 0x1, 0x6, 0x4, 0x8]
              }, {
                'Col': [0x0, 0x3, 0x3, 0x4, 0x7, 0x4]
              }, {
                'Col': [0x0, 0x0, 0x3, 0x8, 0x6, 0x8]
              }, {
                'Col': [0x3, 0x8, 0x7, 0x8, 0x6, 0x8]
              }, {
                'Col': [0x8, 0x4, 0x0, 0x7, 0x7, 0x0]
              }, {
                'Col': [0x3, 0x4, 0x3, 0x5, 0x3, 0x7]
              }],
              'ComboStageMult': 0x1,
              'FillSymbols': [{}, {}, {}, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }],
            'RoundWin': 0x564,
            'AwardTypeFlag': 0x13,
            'FreeRemainRound': 0x6,
            'FreeTotalRound': 0x6
          }, {
            'ComboStageData': [{
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x1, 0x1, 0x6, 0x3, 0x1b]
              }, {
                'Col': [0x1b, 0x1a, 0x7, 0x2, 0x2, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x0, 0x4, 0x4, 0x1a]
              }, {
                'Col': [0x1b, 0x1b, 0x0, 0x0, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x4, 0x4, 0x1b, 0x1a]
              }, {
                'Col': [0x1a, 0x4, 0x4, 0x5, 0xa, 0x1b]
              }],
              'ComboStageMult': 0x1,
              'FillSymbols': [{}, {}, {}, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }],
            'AwardTypeFlag': 0x4,
            'FreeRemainRound': 0x5,
            'FreeTotalRound': 0x6
          }, {
            'ComboStageData': [{
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x3, 0x3, 0x2, 0x1b, 0x1a]
              }, {
                'Col': [0xc, 0x2, 0x5, 0x5, 0x6, 0x1a]
              }, {
                'Col': [0x1b, 0x3, 0x3, 0x1, 0x1, 0x1b]
              }, {
                'Col': [0x1b, 0x4, 0x2, 0x2, 0x1, 0x1b]
              }, {
                'Col': [0x1b, 0x1, 0x1, 0x2, 0x2, 0x1b]
              }, {
                'Col': [0x1b, 0x2, 0x2, 0x1, 0x1, 0x6]
              }],
              'ComboStageMult': 0x1,
              'FillSymbols': [{}, {}, {}, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }],
            'AwardTypeFlag': 0x4,
            'FreeRemainRound': 0x4,
            'FreeTotalRound': 0x6
          }, {
            'ComboStageData': [{
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x2, 0x1, 0x1, 0x7, 0x7]
              }, {
                'Col': [0x1b, 0x1b, 0x3, 0x1, 0x1b, 0x1b]
              }, {
                'Col': [0x7, 0x4, 0x4, 0x2, 0x2, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x2, 0xf, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x6, 0x6, 0x4, 0x4, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x1, 0xb, 0x1a, 0x1b]
              }],
              'ComboStageMult': 0x1,
              'FillSymbols': [{}, {}, {}, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }],
            'AwardTypeFlag': 0x4,
            'FreeRemainRound': 0x3,
            'FreeTotalRound': 0x6
          }, {
            'ComboStageData': [{
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x5, 0x2, 0x2, 0x1b, 0x1b]
              }, {
                'Col': [0x3, 0x0, 0x0, 0xf, 0xf, 0x1]
              }, {
                'Col': [0x1b, 0xc, 0x2, 0x5, 0xf, 0x1a]
              }, {
                'Col': [0x1b, 0x1b, 0x0, 0x3, 0x1a, 0x1b]
              }, {
                'Col': [0x1b, 0x1a, 0x2, 0x6, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x5, 0x5, 0x1a, 0x1b]
              }],
              'ComboStageWin': 0x28,
              'ComboStageMult': 0x1,
              'AwardDataVec': [{
                'Symbol': 0x5,
                'Count': 0x3,
                'LineNum': 0x4,
                'Win': 0x28,
                'PosVec': [0x1, 0x9, 0xa, 0xf, 0x10]
              }],
              'HitSlatePosVec': [0x0, 0x4, 0x16, 0x11],
              'FillSymbols': [{
                'Col': [0x8, 0x7, 0x0]
              }, {}, {
                'Col': [0xc, 0xc]
              }, {
                'Col': [0x1]
              }, {}, {}],
              'ChangeSymbols': [{}, {
                'Col': [0x14, 0x14]
              }, {
                'Col': [0x14]
              }, {}, {}, {}],
              'AddRounds': 0x1,
              'AddMults': 0x1,
              'Holy': [0x18, 0x19]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x2, 0x2, 0x1b, 0x8, 0x7, 0x0]
              }, {
                'Col': [0x3, 0x0, 0x0, 0x14, 0x14, 0x1]
              }, {
                'Col': [0x1b, 0xc, 0x2, 0x14, 0xc, 0xc]
              }, {
                'Col': [0x1b, 0x1b, 0x0, 0x3, 0x1b, 0x1]
              }, {
                'Col': [0x1b, 0x1a, 0x2, 0x6, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x5, 0x5, 0x1a, 0x1b]
              }],
              'ComboStageWin': 0x1e0,
              'ComboStageMult': 0x2,
              'AwardDataVec': [{
                'Count': 0x4,
                'LineNum': 0x4,
                'Win': 0x50,
                'PosVec': [0x5, 0x7, 0x8, 0x9, 0xa, 0xf, 0x14]
              }, {
                'Symbol': 0x2,
                'Count': 0x3,
                'LineNum': 0x14,
                'Win': 0xc8,
                'PosVec': [0x0, 0x1, 0x9, 0xa, 0xd, 0xe, 0xf, 0x10, 0x11]
              }, {
                'Symbol': 0x7,
                'Count': 0x3,
                'LineNum': 0x2,
                'Win': 0x50,
                'PosVec': [0x4, 0x9, 0xa, 0xf]
              }, {
                'Symbol': 0x8,
                'Count': 0x3,
                'LineNum': 0x2,
                'Win': 0x78,
                'PosVec': [0x3, 0x9, 0xa, 0xf]
              }],
              'HitSlatePosVec': [0x2, 0x13, 0xc, 0x16],
              'FillSymbols': [{
                'Col': [0x3, 0x0, 0x1, 0x0, 0x2, 0x0]
              }, {
                'Col': [0x4, 0xc, 0x5, 0x2]
              }, {
                'Col': [0x4, 0xf, 0x1]
              }, {
                'Col': [0x4, 0x5, 0x2]
              }, {}, {}],
              'ChangeSymbols': [{}, {}, {
                'Col': [0x15, 0x14, 0x14]
              }, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x3, 0x0, 0x1, 0x0, 0x2, 0x0]
              }, {
                'Col': [0x3, 0x1, 0x4, 0xc, 0x5, 0x2]
              }, {
                'Col': [0x15, 0x14, 0x14, 0x4, 0xf, 0x1]
              }, {
                'Col': [0x1b, 0x3, 0x1, 0x4, 0x5, 0x2]
              }, {
                'Col': [0x1b, 0x1a, 0x2, 0x6, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x5, 0x5, 0x1a, 0x1b]
              }],
              'ComboStageWin': 0x15e,
              'ComboStageMult': 0x2,
              'AwardDataVec': [{
                'Symbol': 0x1,
                'Count': 0x4,
                'LineNum': 0x4,
                'Win': 0x50,
                'PosVec': [0x2, 0x7, 0xc, 0xd, 0xe, 0x11, 0x14]
              }, {
                'Symbol': 0x2,
                'Count': 0x5,
                'LineNum': 0x6,
                'Win': 0xb4,
                'PosVec': [0x4, 0x9, 0xb, 0xc, 0xd, 0xe, 0x17, 0x1a]
              }, {
                'Symbol': 0x3,
                'Count': 0x4,
                'LineNum': 0x3,
                'Win': 0x5a,
                'PosVec': [0x0, 0x6, 0xc, 0xd, 0xe, 0x13]
              }],
              'HitSlatePosVec': [0x12, 0x1d, 0x19],
              'FillSymbols': [{
                'Col': [0x8, 0x7, 0x7]
              }, {
                'Col': [0xb, 0x0, 0x1]
              }, {
                'Col': [0x3, 0x0, 0x1]
              }, {
                'Col': [0x3, 0x7, 0x0, 0x6]
              }, {
                'Col': [0x1, 0x10, 0x4]
              }, {}],
              'ChangeSymbols': [{}, {
                'Col': [0x14]
              }, {
                'Col': [0x14]
              }, {}, {}, {}],
              'AddRounds': 0x1,
              'Holy': [0x18]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x0, 0x0, 0x0, 0x8, 0x7, 0x7]
              }, {
                'Col': [0x4, 0x14, 0x5, 0xb, 0x0, 0x1]
              }, {
                'Col': [0x14, 0x4, 0xf, 0x3, 0x0, 0x1]
              }, {
                'Col': [0x4, 0x5, 0x3, 0x7, 0x0, 0x6]
              }, {
                'Col': [0x1b, 0x6, 0x1b, 0x1, 0x10, 0x4]
              }, {
                'Col': [0x1b, 0x1b, 0x5, 0x5, 0x1a, 0x1b]
              }],
              'ComboStageWin': 0x1a4,
              'ComboStageMult': 0x2,
              'AwardDataVec': [{
                'Count': 0x4,
                'LineNum': 0xc,
                'Win': 0xf0,
                'PosVec': [0x0, 0x1, 0x2, 0x7, 0xa, 0xc, 0x10, 0x16]
              }, {
                'Symbol': 0x7,
                'Count': 0x4,
                'LineNum': 0x2,
                'Win': 0x78,
                'PosVec': [0x4, 0x5, 0x7, 0xc, 0x15]
              }, {
                'Symbol': 0x8,
                'Count': 0x3,
                'LineNum': 0x1,
                'Win': 0x3c,
                'PosVec': [0x3, 0x7, 0xc]
              }],
              'FillSymbols': [{
                'Col': [0x5, 0x8, 0x1, 0x7, 0x6, 0x5]
              }, {
                'Col': [0x7, 0x2]
              }, {
                'Col': [0x0, 0x6]
              }, {
                'Col': [0x5, 0x4]
              }, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x5, 0x8, 0x1, 0x7, 0x6, 0x5]
              }, {
                'Col': [0x4, 0x5, 0xb, 0x1, 0x7, 0x2]
              }, {
                'Col': [0x4, 0xf, 0x3, 0x1, 0x0, 0x6]
              }, {
                'Col': [0x4, 0x5, 0x3, 0x6, 0x5, 0x4]
              }, {
                'Col': [0x1b, 0x6, 0x1b, 0x1, 0x10, 0x4]
              }, {
                'Col': [0x1b, 0x1b, 0x5, 0x5, 0x1a, 0x1b]
              }],
              'ComboStageWin': 0xb4,
              'ComboStageMult': 0x2,
              'AwardDataVec': [{
                'Symbol': 0x1,
                'Count': 0x3,
                'LineNum': 0x2,
                'Win': 0x14,
                'PosVec': [0x2, 0x8, 0x9, 0xf]
              }, {
                'Symbol': 0x5,
                'Count': 0x4,
                'LineNum': 0x4,
                'Win': 0xa0,
                'PosVec': [0x0, 0x5, 0x7, 0xd, 0x13, 0x16]
              }],
              'FillSymbols': [{
                'Col': [0x6, 0x0, 0x0]
              }, {
                'Col': [0x10, 0x3]
              }, {
                'Col': [0xa]
              }, {
                'Col': [0x5, 0x7]
              }, {}, {}],
              'ChangeSymbols': [{}, {
                'Col': [0x14]
              }, {
                'Col': [0x14]
              }, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x8, 0x7, 0x6, 0x6, 0x0, 0x0]
              }, {
                'Col': [0x4, 0x14, 0x7, 0x2, 0x10, 0x3]
              }, {
                'Col': [0x4, 0x14, 0x3, 0x0, 0x6, 0xa]
              }, {
                'Col': [0x4, 0x3, 0x6, 0x4, 0x5, 0x7]
              }, {
                'Col': [0x1b, 0x6, 0x1b, 0x1, 0x10, 0x4]
              }, {
                'Col': [0x1b, 0x1b, 0x5, 0x5, 0x1a, 0x1b]
              }],
              'ComboStageWin': 0x550,
              'ComboStageMult': 0x2,
              'AwardDataVec': [{
                'Count': 0x3,
                'LineNum': 0x6,
                'Win': 0x3c,
                'PosVec': [0x4, 0x5, 0x7, 0xd, 0xf, 0x11]
              }, {
                'Symbol': 0x6,
                'Count': 0x5,
                'LineNum': 0x10,
                'Win': 0x460,
                'PosVec': [0x2, 0x3, 0x7, 0xa, 0xd, 0x10, 0x14, 0x19, 0x1c]
              }, {
                'Symbol': 0x7,
                'Count': 0x4,
                'LineNum': 0x2,
                'Win': 0x78,
                'PosVec': [0x1, 0x7, 0x8, 0xd, 0x17]
              }, {
                'Symbol': 0x8,
                'Count': 0x3,
                'LineNum': 0x1,
                'Win': 0x3c,
                'PosVec': [0x0, 0x7, 0xd]
              }],
              'HitSlatePosVec': [0x1a, 0x18, 0x1f, 0x22],
              'FillSymbols': [{
                'Col': [0x7, 0x4, 0x2, 0x6, 0x3, 0x4]
              }, {
                'Col': [0x2, 0x5]
              }, {
                'Col': [0x5, 0x3, 0x2]
              }, {
                'Col': [0x6, 0x4]
              }, {
                'Col': [0x3, 0x4, 0x2]
              }, {
                'Col': [0x2, 0x0]
              }],
              'ChangeSymbols': [{}, {
                'Col': [0x16]
              }, {
                'Col': [0x15]
              }, {}, {
                'Col': [0x15]
              }, {}],
              'AddMults': 0x1,
              'Holy': [0x19]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x7, 0x4, 0x2, 0x6, 0x3, 0x4]
              }, {
                'Col': [0x4, 0x2, 0x16, 0x3, 0x2, 0x5]
              }, {
                'Col': [0x4, 0x3, 0x15, 0x5, 0x3, 0x2]
              }, {
                'Col': [0x4, 0x3, 0x4, 0x5, 0x6, 0x4]
              }, {
                'Col': [0x1, 0x15, 0x4, 0x3, 0x4, 0x2]
              }, {
                'Col': [0x1b, 0x5, 0x5, 0x1b, 0x2, 0x0]
              }],
              'ComboStageWin': 0x14af,
              'ComboStageMult': 0x3,
              'AwardDataVec': [{
                'Symbol': 0x2,
                'Count': 0x3,
                'LineNum': 0x6,
                'Win': 0x5a,
                'PosVec': [0x2, 0x7, 0x8, 0xa, 0xe, 0x11]
              }, {
                'Symbol': 0x3,
                'Count': 0x5,
                'LineNum': 0xc,
                'Win': 0x2d0,
                'PosVec': [0x4, 0x8, 0x9, 0xd, 0xe, 0x10, 0x13, 0x19, 0x1b]
              }, {
                'Symbol': 0x4,
                'Count': 0x5,
                'LineNum': 0x48,
                'Win': 0x10e0,
                'PosVec': [0x1, 0x5, 0x6, 0x8, 0xc, 0xe, 0x12, 0x14, 0x17, 0x19, 0x1a, 0x1c]
              }, {
                'Symbol': 0x6,
                'Count': 0x5,
                'LineNum': 0x1,
                'Win': 0x69,
                'PosVec': [0x3, 0x8, 0xe, 0x16, 0x19]
              }, {
                'Symbol': 0x7,
                'Count': 0x3,
                'LineNum': 0x1,
                'Win': 0x3c,
                'PosVec': [0x0, 0x8, 0xe]
              }],
              'HitSlatePosVec': [0x21],
              'FillSymbols': [{
                'Col': [0x5, 0x5, 0x0, 0x3, 0x0, 0x5]
              }, {
                'Col': [0x1, 0x6, 0x8, 0xa]
              }, {
                'Col': [0x2, 0x4, 0x2, 0x0]
              }, {
                'Col': [0xb, 0x5, 0x1, 0x1, 0x5]
              }, {
                'Col': [0x6, 0x1, 0x0]
              }, {
                'Col': [0x2]
              }],
              'ChangeSymbols': [{}, {
                'Col': [0x15]
              }, {
                'Col': [0x14]
              }, {}, {
                'Col': [0x14]
              }, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x5, 0x5, 0x0, 0x3, 0x0, 0x5]
              }, {
                'Col': [0x15, 0x5, 0x1, 0x6, 0x8, 0xa]
              }, {
                'Col': [0x14, 0x5, 0x2, 0x4, 0x2, 0x0]
              }, {
                'Col': [0x5, 0xb, 0x5, 0x1, 0x1, 0x5]
              }, {
                'Col': [0x1, 0x14, 0x2, 0x6, 0x1, 0x0]
              }, {
                'Col': [0x1b, 0x5, 0x5, 0x2, 0x0, 0x2]
              }],
              'ComboStageWin': 0x2256,
              'ComboStageMult': 0x3,
              'AwardDataVec': [{
                'Count': 0x3,
                'LineNum': 0x8,
                'Win': 0x78,
                'PosVec': [0x2, 0x4, 0x6, 0xb, 0xc, 0x11]
              }, {
                'Symbol': 0x3,
                'Count': 0x3,
                'LineNum': 0x1,
                'Win': 0x1e,
                'PosVec': [0x3, 0x6, 0xc]
              }, {
                'Symbol': 0x5,
                'Count': 0x6,
                'LineNum': 0x48,
                'Win': 0x21c0,
                'PosVec': [0x0, 0x1, 0x5, 0x6, 0x7, 0xc, 0xd, 0x12, 0x14, 0x17, 0x19, 0x1f, 0x20]
              }],
              'HitSlatePosVec': [0x1e],
              'FillSymbols': [{
                'Col': [0x2, 0x1, 0x1, 0x0, 0x1, 0x3]
              }, {
                'Col': [0x0]
              }, {
                'Col': [0x2, 0x2, 0x6]
              }, {
                'Col': [0x1, 0x3, 0x5]
              }, {
                'Col': [0x3]
              }, {
                'Col': [0x6, 0x0, 0x6]
              }],
              'ChangeSymbols': [{}, {
                'Col': [0x14, 0x14]
              }, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x2, 0x1, 0x1, 0x0, 0x1, 0x3]
              }, {
                'Col': [0x14, 0x1, 0x6, 0x8, 0x14, 0x0]
              }, {
                'Col': [0x2, 0x4, 0x2, 0x2, 0x2, 0x6]
              }, {
                'Col': [0xb, 0x1, 0x1, 0x1, 0x3, 0x5]
              }, {
                'Col': [0x1, 0x2, 0x6, 0x1, 0x0, 0x3]
              }, {
                'Col': [0x2, 0x0, 0x2, 0x6, 0x0, 0x6]
              }],
              'ComboStageWin': 0x78,
              'ComboStageMult': 0x3,
              'AwardDataVec': [{
                'Symbol': 0x2,
                'Count': 0x3,
                'LineNum': 0x8,
                'Win': 0x78,
                'PosVec': [0x0, 0x6, 0xa, 0xc, 0xe, 0xf, 0x10]
              }],
              'FillSymbols': [{
                'Col': [0x1]
              }, {
                'Col': [0x4, 0xe]
              }, {
                'Col': [0x4, 0x2, 0xb, 0x8]
              }, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x1, 0x1, 0x0, 0x1, 0x3, 0x1]
              }, {
                'Col': [0x1, 0x6, 0x8, 0x0, 0x4, 0xe]
              }, {
                'Col': [0x4, 0x6, 0x4, 0x2, 0xb, 0x8]
              }, {
                'Col': [0xb, 0x1, 0x1, 0x1, 0x3, 0x5]
              }, {
                'Col': [0x1, 0x2, 0x6, 0x1, 0x0, 0x3]
              }, {
                'Col': [0x2, 0x0, 0x2, 0x6, 0x0, 0x6]
              }],
              'ComboStageWin': 0x5a0,
              'ComboStageMult': 0x3,
              'AwardDataVec': [{
                'Symbol': 0x1,
                'Count': 0x5,
                'LineNum': 0x20,
                'Win': 0x5a0,
                'PosVec': [0x0, 0x1, 0x3, 0x5, 0x6, 0x10, 0x12, 0x13, 0x14, 0x15, 0x18, 0x1b]
              }],
              'FillSymbols': [{
                'Col': [0x6, 0x1, 0x2, 0x0]
              }, {
                'Col': [0xc]
              }, {}, {
                'Col': [0x0, 0xb, 0x6]
              }, {
                'Col': [0x2, 0x1]
              }, {}],
              'ChangeSymbols': [{}, {}, {
                'Col': [0x14]
              }, {
                'Col': [0x14]
              }, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x0, 0x3, 0x6, 0x1, 0x2, 0x0]
              }, {
                'Col': [0x6, 0x8, 0x0, 0x4, 0xe, 0xc]
              }, {
                'Col': [0x4, 0x6, 0x4, 0x2, 0x14, 0x8]
              }, {
                'Col': [0x14, 0x3, 0x5, 0x0, 0xb, 0x6]
              }, {
                'Col': [0x2, 0x6, 0x0, 0x3, 0x2, 0x1]
              }, {
                'Col': [0x2, 0x0, 0x2, 0x6, 0x0, 0x6]
              }],
              'ComboStageWin': 0x870,
              'ComboStageMult': 0x3,
              'AwardDataVec': [{
                'Count': 0x6,
                'LineNum': 0x8,
                'Win': 0x1e0,
                'PosVec': [0x0, 0x5, 0x8, 0x10, 0x12, 0x15, 0x1a, 0x1f, 0x22]
              }, {
                'Symbol': 0x2,
                'Count': 0x6,
                'LineNum': 0x8,
                'Win': 0x1e0,
                'PosVec': [0x4, 0xb, 0xf, 0x10, 0x12, 0x18, 0x1c, 0x1e, 0x20]
              }, {
                'Symbol': 0x6,
                'Count': 0x6,
                'LineNum': 0x8,
                'Win': 0x4b0,
                'PosVec': [0x2, 0x6, 0xd, 0x10, 0x12, 0x17, 0x19, 0x21, 0x23]
              }],
              'FillSymbols': [{
                'Col': [0x7, 0x1, 0x3, 0x5]
              }, {
                'Col': [0x7, 0x3]
              }, {
                'Col': [0x7, 0x0, 0x2]
              }, {
                'Col': [0x3, 0x5, 0x7]
              }, {
                'Col': [0x2, 0x7, 0xc, 0xc]
              }, {
                'Col': [0x3, 0x5, 0x0, 0x10, 0x2, 0x0]
              }],
              'ChangeSymbols': [{}, {
                'Col': [0x14]
              }, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x3, 0x1, 0x7, 0x1, 0x3, 0x5]
              }, {
                'Col': [0x8, 0x4, 0xe, 0x14, 0x7, 0x3]
              }, {
                'Col': [0x4, 0x4, 0x8, 0x7, 0x0, 0x2]
              }, {
                'Col': [0x3, 0x5, 0xb, 0x3, 0x5, 0x7]
              }, {
                'Col': [0x3, 0x1, 0x2, 0x7, 0xc, 0xc]
              }, {
                'Col': [0x3, 0x5, 0x0, 0x10, 0x2, 0x0]
              }],
              'ComboStageWin': 0xf0,
              'ComboStageMult': 0x3,
              'AwardDataVec': [{
                'Symbol': 0x7,
                'Count': 0x5,
                'LineNum': 0x2,
                'Win': 0xf0,
                'PosVec': [0x2, 0x9, 0xa, 0xf, 0x17, 0x1b]
              }],
              'FillSymbols': [{
                'Col': [0x6]
              }, {
                'Col': [0x0, 0x4]
              }, {
                'Col': [0xb]
              }, {
                'Col': [0x8]
              }, {
                'Col': [0xb]
              }, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x3, 0x1, 0x1, 0x3, 0x5, 0x6]
              }, {
                'Col': [0x8, 0x4, 0xe, 0x3, 0x0, 0x4]
              }, {
                'Col': [0x4, 0x4, 0x8, 0x0, 0x2, 0xb]
              }, {
                'Col': [0x3, 0x5, 0xb, 0x3, 0x5, 0x8]
              }, {
                'Col': [0x3, 0x1, 0x2, 0xc, 0xc, 0xb]
              }, {
                'Col': [0x3, 0x5, 0x0, 0x10, 0x2, 0x0]
              }],
              'ComboStageWin': 0x5a0,
              'ComboStageMult': 0x3,
              'AwardDataVec': [{
                'Symbol': 0x5,
                'Count': 0x6,
                'LineNum': 0xc,
                'Win': 0x5a0,
                'PosVec': [0x2, 0x4, 0xa, 0xf, 0x13, 0x16, 0x19, 0x1f, 0x20, 0x23]
              }],
              'FillSymbols': [{
                'Col': [0x1, 0x0]
              }, {
                'Col': [0x7]
              }, {
                'Col': [0x4]
              }, {
                'Col': [0x2, 0xe]
              }, {
                'Col': [0xb]
              }, {
                'Col': [0x6, 0x3, 0x4]
              }],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}],
              'FGChange': [0x20, 0xa, 0xf, 0x23, 0x2, 0x19],
              'FGChangeSymbol': 0x5
            }, {
              'ComboStageSymbol': [{
                'Col': [0x3, 0x1, 0x3, 0x6, 0x1, 0x0]
              }, {
                'Col': [0x8, 0x4, 0xe, 0x3, 0x4, 0x7]
              }, {
                'Col': [0x4, 0x4, 0x8, 0x2, 0xb, 0x4]
              }, {
                'Col': [0x3, 0xb, 0x3, 0x8, 0x2, 0xe]
              }, {
                'Col': [0x3, 0x2, 0xc, 0xc, 0xb, 0xb]
              }, {
                'Col': [0x3, 0x10, 0x2, 0x6, 0x3, 0x4]
              }],
              'ComboStageMult': 0x3,
              'FillSymbols': [{}, {}, {}, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }],
            'RoundWin': 0x572b,
            'AwardTypeFlag': 0x95,
            'FreeRemainRound': 0x2,
            'FreeTotalRound': 0x6
          }, {
            'ComboStageData': [{
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x1b, 0x3, 0x1, 0x1, 0x1b]
              }, {
                'Col': [0x1, 0x2, 0x2, 0x6, 0x6, 0x7]
              }, {
                'Col': [0x1, 0x1, 0x8, 0x8, 0xc, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x2, 0x2, 0x6, 0x1b]
              }, {
                'Col': [0x1b, 0x1, 0x7, 0x7, 0x2, 0x2]
              }, {
                'Col': [0x1b, 0x1a, 0x1, 0x6, 0x1b, 0x1b]
              }],
              'ComboStageWin': 0x3c,
              'ComboStageMult': 0x3,
              'AwardDataVec': [{
                'Symbol': 0x1,
                'Count': 0x3,
                'LineNum': 0x4,
                'Win': 0x3c,
                'PosVec': [0x3, 0x4, 0x6, 0xc, 0xd]
              }],
              'HitSlatePosVec': [0x5, 0x0, 0x12, 0x13],
              'FillSymbols': [{
                'Col': [0x5, 0x7, 0x5, 0x3]
              }, {
                'Col': [0x4]
              }, {
                'Col': [0x6, 0x5]
              }, {
                'Col': [0x7, 0x8]
              }, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }, {
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x3, 0x5, 0x7, 0x5, 0x3]
              }, {
                'Col': [0x2, 0x2, 0x6, 0x6, 0x7, 0x4]
              }, {
                'Col': [0x8, 0x8, 0xc, 0x1b, 0x6, 0x5]
              }, {
                'Col': [0x2, 0x2, 0x6, 0x1b, 0x7, 0x8]
              }, {
                'Col': [0x1b, 0x1, 0x7, 0x7, 0x2, 0x2]
              }, {
                'Col': [0x1b, 0x1a, 0x1, 0x6, 0x1b, 0x1b]
              }],
              'ComboStageMult': 0x3,
              'FillSymbols': [{}, {}, {}, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }],
            'RoundWin': 0x3c,
            'AwardTypeFlag': 0x5,
            'FreeRemainRound': 0x3,
            'FreeTotalRound': 0x8
          }, {
            'ComboStageData': [{
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x8, 0x3, 0x3, 0x6, 0x1b]
              }, {
                'Col': [0x1b, 0x1b, 0x8, 0x8, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x4, 0x0, 0xa, 0x5, 0x5]
              }, {
                'Col': [0x1b, 0x1b, 0x4, 0x4, 0x1a, 0x1a]
              }, {
                'Col': [0x6, 0x6, 0x2, 0x2, 0x5, 0x1b]
              }, {
                'Col': [0x2, 0x6, 0x6, 0x3, 0x3, 0x0]
              }],
              'ComboStageMult': 0x3,
              'FillSymbols': [{}, {}, {}, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }],
            'AwardTypeFlag': 0x4,
            'FreeRemainRound': 0x2,
            'FreeTotalRound': 0x8
          }, {
            'ComboStageData': [{
              'ComboStageSymbol': [{
                'Col': [0x1b, 0x0, 0x3, 0x3, 0x5, 0x5]
              }, {
                'Col': [0x1a, 0x6, 0x3, 0x2, 0x1b, 0x1a]
              }, {
                'Col': [0x1a, 0x1, 0x1, 0x6, 0x6, 0x2]
              }, {
                'Col': [0x1b, 0x1b, 0x2, 0x2, 0x1a, 0x1a]
              }, {
                'Col': [0x1b, 0x1b, 0xa, 0x5, 0x5, 0x1b]
              }, {
                'Col': [0x1a, 0x1b, 0x2, 0x2, 0x1a, 0x1b]
              }],
              'ComboStageMult': 0x3,
              'FillSymbols': [{}, {}, {}, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }],
            'AwardTypeFlag': 0x4,
            'FreeRemainRound': 0x1,
            'FreeTotalRound': 0x8
          }, {
            'ComboStageData': [{
              'ComboStageSymbol': [{
                'Col': [0x1a, 0x1b, 0x3, 0x1, 0x1, 0x1b]
              }, {
                'Col': [0x4, 0x5, 0x5, 0x7, 0x7, 0x1b]
              }, {
                'Col': [0x1a, 0x4, 0xd, 0x3, 0x1, 0x1]
              }, {
                'Col': [0x1b, 0x1b, 0x6, 0x10, 0x1b, 0x1a]
              }, {
                'Col': [0x1b, 0x1a, 0x0, 0x4, 0x1b, 0x1b]
              }, {
                'Col': [0x1b, 0x7, 0x7, 0x4, 0x4, 0x1b]
              }],
              'ComboStageMult': 0x3,
              'FillSymbols': [{}, {}, {}, {}, {}, {}],
              'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
            }],
            'AwardTypeFlag': 0xc,
            'FreeTotalRound': 0x8
          }],
          'FreeTotalWin': 0x5767,
          'TotalWin': 0x5ccb,
          'ShowIndex': "17056-334130-01054191",
          'NowMoney': 43519.9
        }
      };
      (function (_0x2d8e86) {
        _0x2d8e86[_0x2d8e86.AWARD = 0x0] = "AWARD";
        _0x2d8e86[_0x2d8e86.END = 0x1] = "END";
        _0x2d8e86[_0x2d8e86.FEATURE_SHOW = 0x2] = 'FEATURE_SHOW';
        _0x2d8e86[_0x2d8e86.UNSHOW_PREPARE = 0x3] = "UNSHOW_PREPARE";
        _0x2d8e86[_0x2d8e86.PLATE_SHOW = 0x4] = "PLATE_SHOW";
        _0x2d8e86[_0x2d8e86.WAIT_READY = 0x5] = "WAIT_READY";
        _0x2d8e86[_0x2d8e86.ROUND_END = 0x6] = "ROUND_END";
        _0x2d8e86[_0x2d8e86.ROUND_SHOW_END = 0x7] = 'ROUND_SHOW_END';
      })(_0x4631f6 || (_0x4631f6 = {}));
      (function (_0x46b246) {
        _0x46b246[_0x46b246.ENTER_FREE = 0xf] = "ENTER_FREE";
        _0x46b246[_0x46b246.LEAVE_FREE = 0x10] = "LEAVE_FREE";
      })(_0xad02f8 || (_0xad02f8 = {}));
      (function (_0x904b3c) {
        _0x904b3c[_0x904b3c.EXPLODE = 0x11] = "EXPLODE";
        _0x904b3c[_0x904b3c.FIRST_PLATE = 0x12] = 'FIRST_PLATE';
        _0x904b3c[_0x904b3c.MATCHING_PATCH_UP = 0x13] = "MATCHING_PATCH_UP";
      })(_0x5cf98d || (_0x5cf98d = {}));
      (function (_0x3ecc5e) {
        _0x3ecc5e[_0x3ecc5e.J = 0x0] = 'J';
        _0x3ecc5e[_0x3ecc5e.Q = 0x1] = 'Q';
        _0x3ecc5e[_0x3ecc5e.K = 0x2] = 'K';
        _0x3ecc5e[_0x3ecc5e.A = 0x3] = 'A';
        _0x3ecc5e[_0x3ecc5e.SWORD = 0x4] = "SWORD";
        _0x3ecc5e[_0x3ecc5e.EAR_RING = 0x5] = 'EAR_RING';
        _0x3ecc5e[_0x3ecc5e.COIN = 0x6] = "COIN";
        _0x3ecc5e[_0x3ecc5e.CUP = 0x7] = 'CUP';
        _0x3ecc5e[_0x3ecc5e.DIAMOND = 0x8] = "DIAMOND";
        _0x3ecc5e[_0x3ecc5e.WILD = 0x9] = "WILD";
        _0x3ecc5e[_0x3ecc5e.CABINET = 0xa] = "CABINET";
        _0x3ecc5e[_0x3ecc5e.ROUND = 0xb] = "ROUND";
        _0x3ecc5e[_0x3ecc5e.MULTI = 0xc] = "MULTI";
        _0x3ecc5e[_0x3ecc5e.BLOCK = 0xd] = 'BLOCK';
      })(_0x50b168 || (_0x50b168 = {}));
      (function (_0x36cbf4) {
        _0x36cbf4[_0x36cbf4.J = 0x0] = 'J';
        _0x36cbf4[_0x36cbf4.Q = 0x1] = 'Q';
        _0x36cbf4[_0x36cbf4.K = 0x2] = 'K';
        _0x36cbf4[_0x36cbf4.A = 0x3] = 'A';
        _0x36cbf4[_0x36cbf4.SWORD = 0x4] = "SWORD";
        _0x36cbf4[_0x36cbf4.EAR_RING = 0x5] = "EAR_RING";
        _0x36cbf4[_0x36cbf4.COIN = 0x6] = "COIN";
        _0x36cbf4[_0x36cbf4.CUP = 0x7] = 'CUP';
        _0x36cbf4[_0x36cbf4.DIAMOND = 0x8] = "DIAMOND";
        _0x36cbf4[_0x36cbf4.GOLD_J = 0xa] = "GOLD_J";
        _0x36cbf4[_0x36cbf4.GOLD_Q = 0xb] = 'GOLD_Q';
        _0x36cbf4[_0x36cbf4.GOLD_K = 0xc] = "GOLD_K";
        _0x36cbf4[_0x36cbf4.GOLD_A = 0xd] = "GOLD_A";
        _0x36cbf4[_0x36cbf4.GOLD_SWORD = 0xe] = "GOLD_SWORD";
        _0x36cbf4[_0x36cbf4.GOLD_EAR_RING = 0xf] = 'GOLD_EAR_RING';
        _0x36cbf4[_0x36cbf4.GOLD_COIN = 0x10] = 'GOLD_COIN';
        _0x36cbf4[_0x36cbf4.GOLD_CUP = 0x11] = "GOLD_CUP";
        _0x36cbf4[_0x36cbf4.GOLD_DIAMOND = 0x12] = "GOLD_DIAMOND";
        _0x36cbf4[_0x36cbf4.WILD_20 = 0x14] = "WILD_20";
        _0x36cbf4[_0x36cbf4.WILD_21 = 0x15] = "WILD_21";
        _0x36cbf4[_0x36cbf4.WILD_22 = 0x16] = "WILD_22";
        _0x36cbf4[_0x36cbf4.WILD_23 = 0x17] = 'WILD_23';
        _0x36cbf4[_0x36cbf4.ADD_ROUND = 0x18] = "ADD_ROUND";
        _0x36cbf4[_0x36cbf4.ADD_MULTI = 0x19] = "ADD_MULTI";
        _0x36cbf4[_0x36cbf4.CABINET = 0x1a] = 'CABINET';
        _0x36cbf4[_0x36cbf4.BLOCK = 0x1b] = "BLOCK";
      })(_0x32bcbe || (_0x32bcbe = {}));
      (function (_0x390f57) {
        _0x390f57[_0x390f57.None = 0x0] = "None";
        _0x390f57[_0x390f57.One = 0x1] = "One";
        _0x390f57[_0x390f57.Two = 0x2] = "Two";
        _0x390f57[_0x390f57.Three = 0x3] = "Three";
      })(_0x18c677 || (_0x18c677 = {}));
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "eeaaakSk0JBObtbWXT0MxmK", "SymbolSpine", undefined);
      (function (_0x1742d6) {
        _0x1742d6.NONE = 'none';
        _0x1742d6.SETUP = "Setup";
        _0x1742d6.WIN = "Win";
        _0x1742d6.SPAWN = "Spawn";
        _0x1742d6.DECREASE = "Decrease";
        _0x1742d6.IDEL = "idel";
        _0x1742d6.END = 'End';
        _0x1742d6.FLY = "Fly";
      })(_0x1f4c1b || (_0x1f4c1b = {}));
      var _0x228785 = _0x73005c.ccclass;
      var _0x595f82 = _0x73005c.property;
      _0x545c7a = _0x228785("SymbolSpine");
      _0x4b3fc6 = _0x595f82({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': "spine"
      });
      _0x44b1fb = _0x595f82({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': "fly spine"
      });
      _0x1d02be = function (_0x58d331) {
        function _0xf7267d() {
          var _0x5e00d3;
          var _0x1a11fd = arguments.length;
          var _0x4ceb74 = new Array(_0x1a11fd);
          for (var _0x4ffabf = 0x0; _0x4ffabf < _0x1a11fd; _0x4ffabf++) {
            _0x4ceb74[_0x4ffabf] = arguments[_0x4ffabf];
          }
          _0x5e00d3 = _0x58d331.call.apply(_0x58d331, [this].concat(_0x4ceb74)) || this;
          _0x5043f5(_0x5e00d3, "m_spine", _0x3ebfdb, _0x21436e(_0x5e00d3));
          _0x5043f5(_0x5e00d3, "m_flySpine", _0x1f9a23, _0x21436e(_0x5e00d3));
          return _0x5e00d3;
        }
        _0x197a27(_0xf7267d, _0x58d331);
        var _0xd18eff = _0xf7267d.prototype;
        _0xd18eff.SetSkin = function (_0x3a032f) {
          var _0x47c5fd;
          if (!(null == (_0x47c5fd = this.m_spine))) {
            _0x47c5fd.setSkin(_0x3a032f);
          }
        };
        _0xd18eff.SetFlySkin = function (_0x1f1fc4) {
          var _0x118bf2;
          if (!(null == (_0x118bf2 = this.m_flySpine))) {
            _0x118bf2.setSkin(_0x1f1fc4);
          }
        };
        _0xd18eff.Clean = function () {
          var _0x1778b2;
          var _0x1fd69f;
          if (!(null == (_0x1778b2 = this.m_spine))) {
            _0x1778b2.clearTracks();
          }
          if (!(null == (_0x1fd69f = this.m_spine))) {
            _0x1fd69f.setToSetupPose();
          }
        };
        _0xd18eff.SetUp = function () {
          var _0x60340a;
          if (!(null == (_0x60340a = this.m_spine))) {
            _0x60340a.setAnimation(0x0, _0x1f4c1b.SETUP, false);
          }
        };
        _0xd18eff.Idle = function () {
          var _0x126896;
          if (!(null == (_0x126896 = this.m_spine))) {
            _0x126896.setAnimation(0x0, _0x1f4c1b.IDEL, false);
          }
        };
        _0xd18eff.ShowWin = function () {
          var _0x520340 = _0x2d97e1(_0x3a966d().mark(function _0x5708a8(_0xf533b2) {
            return _0x3a966d().wrap(function (_0x4cce5e) {
              for (;;) {
                switch (_0x4cce5e.prev = _0x4cce5e.next) {
                  case 0x0:
                    if (!this.m_spine) {
                      _0x4cce5e.next = 0x6;
                      break;
                    }
                    this.m_spine.timeScale = _0xf533b2;
                    this.m_spine.clearTrack(0x0);
                    this.m_spine.setToSetupPose();
                    _0x4cce5e.next = 0x6;
                    return this.PlayAnimation(this.m_spine, _0x1f4c1b.WIN);
                  case 0x6:
                  case "end":
                    return _0x4cce5e.stop();
                }
              }
            }, _0x5708a8, this);
          }));
          return function (_0x310811) {
            return _0x520340.apply(this, arguments);
          };
        }();
        _0xd18eff.ShowEnd = function () {
          var _0x5dac95 = _0x2d97e1(_0x3a966d().mark(function _0x7cbebf(_0xbeef76) {
            return _0x3a966d().wrap(function (_0x28aaa9) {
              for (;;) {
                switch (_0x28aaa9.prev = _0x28aaa9.next) {
                  case 0x0:
                    if (!this.m_spine) {
                      _0x28aaa9.next = 0x6;
                      break;
                    }
                    this.m_spine.timeScale = _0xbeef76;
                    this.m_spine.clearTrack(0x0);
                    this.m_spine.setToSetupPose();
                    _0x28aaa9.next = 0x6;
                    return this.PlayAnimation(this.m_spine, _0x1f4c1b.END);
                  case 0x6:
                  case "end":
                    return _0x28aaa9.stop();
                }
              }
            }, _0x7cbebf, this);
          }));
          return function (_0x348594) {
            return _0x5dac95.apply(this, arguments);
          };
        }();
        _0xd18eff.ShowDecrease = function () {
          var _0x2967b7 = _0x2d97e1(_0x3a966d().mark(function _0x2c5a78(_0x4748b8) {
            return _0x3a966d().wrap(function (_0x4baadb) {
              for (;;) {
                switch (_0x4baadb.prev = _0x4baadb.next) {
                  case 0x0:
                    if (!this.m_spine) {
                      _0x4baadb.next = 0x6;
                      break;
                    }
                    this.m_spine.timeScale = _0x4748b8;
                    this.m_spine.clearTrack(0x0);
                    this.m_spine.setToSetupPose();
                    _0x4baadb.next = 0x6;
                    return this.PlayAnimation(this.m_spine, _0x1f4c1b.DECREASE);
                  case 0x6:
                  case "end":
                    return _0x4baadb.stop();
                }
              }
            }, _0x2c5a78, this);
          }));
          return function (_0x15ae28) {
            return _0x2967b7.apply(this, arguments);
          };
        }();
        _0xd18eff.ShowSpawn = function () {
          var _0x191246 = _0x2d97e1(_0x3a966d().mark(function _0x3fee84(_0x4dbf0a) {
            return _0x3a966d().wrap(function (_0x31e493) {
              for (;;) {
                switch (_0x31e493.prev = _0x31e493.next) {
                  case 0x0:
                    if (!this.m_spine) {
                      _0x31e493.next = 0x6;
                      break;
                    }
                    this.m_spine.timeScale = _0x4dbf0a;
                    this.m_spine.clearTrack(0x0);
                    this.m_spine.setToSetupPose();
                    _0x31e493.next = 0x6;
                    return this.PlayAnimation(this.m_spine, _0x1f4c1b.SPAWN);
                  case 0x6:
                  case "end":
                    return _0x31e493.stop();
                }
              }
            }, _0x3fee84, this);
          }));
          return function (_0x157bdb) {
            return _0x191246.apply(this, arguments);
          };
        }();
        _0xd18eff.SetFlyVisiable = function (_0x4999fd) {
          if (this.m_flySpine) {
            this.m_flySpine.node.active = _0x4999fd;
          }
          if (this.m_spine) {
            this.m_spine.node.active = !_0x4999fd;
          }
        };
        _0xd18eff.ResetFlyPos = function () {
          var _0x3d86b6;
          if (!(null == (_0x3d86b6 = this.m_flySpine))) {
            _0x3d86b6.node.setPosition(_0x592fc6(0x0, 0x0, 0x0));
          }
        };
        _0xd18eff.ShowFly = function () {
          var _0x1e5468 = _0x2d97e1(_0x3a966d().mark(function _0x51d080() {
            return _0x3a966d().wrap(function (_0x54f90d) {
              for (;;) {
                switch (_0x54f90d.prev = _0x54f90d.next) {
                  case 0x0:
                    if (!this.m_flySpine) {
                      _0x54f90d.next = 0x5;
                      break;
                    }
                    this.m_flySpine.clearTrack(0x0);
                    this.m_flySpine.setToSetupPose();
                    _0x54f90d.next = 0x5;
                    return this.PlayAnimation(this.m_flySpine, _0x1f4c1b.FLY);
                  case 0x5:
                  case "end":
                    return _0x54f90d.stop();
                }
              }
            }, _0x51d080, this);
          }));
          return function () {
            return _0x1e5468.apply(this, arguments);
          };
        }();
        _0xd18eff.SetDark = function (_0x149877) {
          if (_0x149877) {
            if (this.m_spine) {
              this.m_spine.color = _0x3fb2b5.Color.Dark;
            }
          } else if (this.m_spine) {
            this.m_spine.color = _0x3fb2b5.Color.Normal;
          }
        };
        _0xd18eff.PlayAnimation = function (_0x3ec64b, _0x4c064b, _0x43af0f) {
          var _0x318291 = this;
          if (undefined === _0x43af0f) {
            _0x43af0f = false;
          }
          return new Promise(function (_0x30dffd) {
            _0x3ec64b.clearTrack(0x0);
            _0x3ec64b.setToSetupPose();
            var _0x1b6c1f = _0x3ec64b.setAnimation(0x0, _0x4c064b, _0x43af0f);
            _0x318291.ClearListenerCallback(_0x3ec64b, _0x1b6c1f, function (_0x5f2bfc) {
              _0x30dffd(_0x5f2bfc);
            });
          });
        };
        _0xd18eff.ClearListenerCallback = function (_0x1b48c3, _0x211cbe, _0x5440c2) {
          if (_0x1b48c3) {
            var _0x435bdb = function (_0x10b065) {
              return function (_0xa33226) {
                if (_0x211cbe == _0xa33226) {
                  if (_0x211cbe) {
                    _0x1b48c3.setTrackInterruptListener(_0x211cbe, function () {});
                    _0x1b48c3.setTrackCompleteListener(_0x211cbe, function () {});
                  } else {
                    _0x1b48c3.setInterruptListener(null);
                    _0x1b48c3.setCompleteListener(null);
                  }
                  _0x5440c2(_0x10b065);
                }
              };
            };
            if (_0x211cbe) {
              _0x1b48c3.setTrackInterruptListener(_0x211cbe, _0x435bdb(true));
              _0x1b48c3.setTrackCompleteListener(_0x211cbe, _0x435bdb(false));
            } else {
              _0x1b48c3.setInterruptListener(_0x435bdb(true));
              _0x1b48c3.setCompleteListener(_0x435bdb(false));
            }
          }
        };
        return _0xf7267d;
      }(_0x2e72bb);
      _0x3ebfdb = _0x49a46a(_0x1d02be.prototype, "m_spine", [_0x4b3fc6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1f9a23 = _0x49a46a(_0x1d02be.prototype, "m_flySpine", [_0x44b1fb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x165a2b = _0x545c7a(_0x47280e = _0x1d02be) || _0x47280e;
      var _0x551d01;
      var _0x3e17d3;
      var _0x535bdb;
      var _0x283342;
      var _0x2ff7a7;
      var _0x5793a2;
      var _0x29679b;
      var _0x5c73c0;
      var _0x3502b3;
      var _0x4377b7;
      var _0x190675;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "97795va05tFoaOotaFbxDqH", "SlotReels", undefined);
      var _0xf3ab5b = _0x73005c.ccclass;
      var _0x147f56 = _0x73005c.property;
      var _0x3fce78;
      var _0x196ef9;
      var _0x270c7d;
      !function (_0x4f5e9e) {
        _0x4f5e9e.WIN = "Win";
        _0x4f5e9e.SPAWN = "_Spawn";
        _0x4f5e9e.DECREASE = "_Decrease";
        _0x4f5e9e.STOP = "Stop";
      }(_0x3fce78 || (_0x3fce78 = {}));
      (function (_0xec6d4b) {
        _0xec6d4b.MUTIL_TRANS = "Mutil_Trans";
        _0xec6d4b.SPIN_TRANS_01 = "Spin_Trans_01";
        _0xec6d4b.SPIN_TRANS_02 = "Spin_Trans_02";
        _0xec6d4b.SPIN_TRANS_03 = "Spin_Trans_03";
      })(_0x196ef9 || (_0x196ef9 = {}));
      (function (_0x1df7a0) {
        _0x1df7a0.NONE = "none";
        _0x1df7a0.EXPLODE = "Explode";
        _0x1df7a0.HINT = "Hint";
        _0x1df7a0.REMOVE = "Remove";
        _0x1df7a0.TRANS = 'Trans';
        _0x1df7a0.TREASURE = 'Treasure_Trans';
        _0x1df7a0.WIN = "Win";
        _0x1df7a0.WIN2 = "Win2";
        _0x1df7a0.WIN3 = "Win3";
        _0x1df7a0.WIN4 = 'Win4';
      })(_0x270c7d || (_0x270c7d = {}));
      var _0x3ea8bb = 0.15;
      var _0x26196c = 0.03;
      var _0xf27c63 = 0.2;
      var _0x26a0e1 = 0x1bd;
      var _0x119201 = 0xc;
      _0x551d01 = _0xf3ab5b("SlotReels");
      _0x3e17d3 = _0x147f56({
        'type': _0x2ed444,
        'tooltip': "symbol的SpriteFrame"
      });
      _0x535bdb = _0x147f56({
        'type': _0x2ed444,
        'tooltip': '石板'
      });
      _0x283342 = _0x147f56({
        'type': _0xdbf46,
        'tooltip': "祕寶轉換後的提示動畫"
      });
      _0x2ff7a7 = _0x147f56({
        'type': _0x36bc07,
        'tooltip': '位數提示'
      });
      _0x190675 = function (_0x4ac58d) {
        function _0x3aa19d() {
          var _0x36e201;
          var _0x11a6b8 = arguments.length;
          var _0x33d4e2 = new Array(_0x11a6b8);
          for (var _0x1341ee = 0x0; _0x1341ee < _0x11a6b8; _0x1341ee++) {
            _0x33d4e2[_0x1341ee] = arguments[_0x1341ee];
          }
          _0x36e201 = _0x4ac58d.call.apply(_0x4ac58d, [this].concat(_0x33d4e2)) || this;
          _0x5043f5(_0x36e201, 'm_symbol', _0x29679b, _0x21436e(_0x36e201));
          _0x5043f5(_0x36e201, "m_slate", _0x5c73c0, _0x21436e(_0x36e201));
          _0x5043f5(_0x36e201, "m_treasureAnimClip", _0x3502b3, _0x21436e(_0x36e201));
          _0x5043f5(_0x36e201, "m_wayLabel", _0x4377b7, _0x21436e(_0x36e201));
          _0x36e201.m_viewSize = null;
          _0x36e201.m_symbolSize = null;
          _0x36e201.m_symbolNodes = [];
          _0x36e201.m_reelPositionOffset = [new _0x5de1a2(0x0, 0x0), new _0x5de1a2(0x0, 0x0), new _0x5de1a2(0x0, 0x0), new _0x5de1a2(0x0, 0x0), new _0x5de1a2(0x0, 0x0), new _0x5de1a2(0x0, 0x0), new _0x5de1a2(0x0, 0x0)];
          _0x36e201.m_activeCounts = [];
          _0x36e201.m_roundQueue = null;
          _0x36e201.m_isHardStop = false;
          _0x36e201.m_isInitStop = true;
          _0x36e201.m_isPlateCleaned = false;
          _0x36e201.m_isExplode = false;
          _0x36e201.m_isFill = false;
          _0x36e201.m_isNearWin = false;
          _0x36e201.m_isNearlyNearWin = false;
          _0x36e201.m_isCloseNearWin = false;
          _0x36e201.m_timeScale = null;
          _0x36e201.m_reelStops = [false, false, false, false, false, false];
          _0x36e201.m_nearWinReelStops = [false, false, false, false, false, false];
          _0x36e201.m_isLandscape = null;
          _0x36e201.m_canPlayTransSound = false;
          _0x36e201.m_flyCb = null;
          _0x36e201.m_effectCb = null;
          _0x36e201.m_removeBlockFxCb = null;
          _0x36e201.m_symbolArrarys = [];
          _0x36e201.m_NodeArrarys = [];
          _0x36e201.m_isPlayNearWinSounds = [];
          _0x36e201.m_showNearWinCb = null;
          return _0x36e201;
        }
        _0x197a27(_0x3aa19d, _0x4ac58d);
        var _0x5c30e0 = _0x3aa19d.prototype;
        _0x5c30e0.CreatNode = function (_0x563380) {
          var _0x269dd7 = null;
          if (this.m_NodeArrarys['col' + _0x563380.toString()] && this.m_NodeArrarys["col" + _0x563380.toString()].length > 0x0) {
            _0x269dd7 = this.m_NodeArrarys["col" + _0x563380.toString()].shift();
          } else {
            (_0x269dd7 = new _0x27176c()).layer = _0x3aa19d.Layer2D;
          }
          _0x269dd7.active = true;
          return _0x269dd7;
        };
        _0x5c30e0.ReturnNode = function (_0x2cb888, _0x2c6a2b) {
          if (_0x2cb888.children[0x0]) {
            this.ReturnSymbol(_0x2cb888.children[0x0].getComponent(_0x165a2b));
          }
          _0x2cb888.removeAllChildren();
          _0x2cb888.active = false;
          if (!this.m_NodeArrarys["col" + _0x2c6a2b.toString()] || this.m_NodeArrarys["col" + _0x2c6a2b.toString()].length < 0x1) {
            this.m_NodeArrarys["col" + _0x2c6a2b.toString()] = [];
          }
          this.m_NodeArrarys["col" + _0x2c6a2b.toString()].push(_0x2cb888);
        };
        _0x5c30e0.CreatSymbol = function (_0x5ae45e) {
          var _0x51f906 = null;
          var _0x2cc899 = _0x5ae45e;
          if (_0x5ae45e == _0x32bcbe.CABINET) {
            _0x2cc899 = _0x50b168.CABINET;
          } else if (_0x5ae45e == _0x32bcbe.ADD_ROUND) {
            _0x2cc899 = _0x50b168.ROUND;
          } else if (_0x5ae45e == _0x32bcbe.ADD_MULTI) {
            _0x2cc899 = _0x50b168.MULTI;
          } else if (_0x5ae45e >= _0x32bcbe.GOLD_J && _0x5ae45e <= _0x32bcbe.GOLD_DIAMOND) {
            _0x2cc899 = _0x5ae45e - _0x32bcbe.GOLD_J;
          } else if (_0x5ae45e >= _0x32bcbe.WILD_20 && _0x5ae45e <= _0x32bcbe.WILD_23) {
            _0x2cc899 = _0x50b168.WILD;
          } else if (_0x5ae45e >= _0x32bcbe.BLOCK) {
            _0x2cc899 = _0x50b168.BLOCK;
          }
          if (this.m_symbolArrarys['s' + _0x2cc899.toString()] && this.m_symbolArrarys['s' + _0x2cc899.toString()].length > 0x0) {
            _0x51f906 = this.m_symbolArrarys['s' + _0x2cc899.toString()].shift();
          } else {
            if (_0x2cc899 == _0x50b168.BLOCK) {
              var _0x120d74 = Math.floor(0xa * Math.random());
              _0x120d74 %= 0x3;
              _0x51f906 = _0x2c0559(this.m_slate[_0x120d74]);
            } else {
              _0x51f906 = _0x2c0559(this.m_symbol[_0x2cc899]);
            }
            _0x51f906.layer = _0x3aa19d.Layer2D;
            _0x51f906.name = 's' + _0x2cc899.toString();
          }
          _0x51f906.active = true;
          return _0x51f906.getComponent(_0x165a2b);
        };
        _0x5c30e0.ReturnSymbol = function (_0x424e90) {
          var _0xfcd0da = _0x424e90.name;
          _0x424e90.Clean();
          _0x424e90.node.active = false;
          if (!this.m_symbolArrarys[_0xfcd0da] || this.m_symbolArrarys[_0xfcd0da].length < 0x1) {
            this.m_symbolArrarys[_0xfcd0da] = [];
          }
          this.m_symbolArrarys[_0xfcd0da].push(_0x424e90);
        };
        _0x5c30e0.SetCb = function (_0x4dab88, _0x424b21, _0x547267) {
          this.m_flyCb = _0x4dab88;
          this.m_effectCb = _0x424b21;
          this.m_removeBlockFxCb = _0x547267;
        };
        _0x5c30e0.start = function () {
          this.m_viewSize = this.node.getComponent(_0x581c11).contentSize;
          this.m_symbolSize = new _0x5d2d87(this.m_viewSize.width / _0x3fb2b5.COL, this.m_viewSize.height / _0x3fb2b5.ROW);
          for (var _0x594149 = 0x0; _0x594149 < _0x3fb2b5.COL; _0x594149++) {
            var _0x44c529 = [];
            for (var _0x3c0d7f = 0x0; _0x3c0d7f < _0x3fb2b5.ROW; _0x3c0d7f++) {
              var _0x1cf32e = this.CreatSymbol(_0x594149 + 0x2);
              this.node.addChild(_0x1cf32e.node);
              _0x1cf32e.SetSkin('Skin1');
              _0x1cf32e.SetUp();
              _0x1cf32e.node.setPosition(this.GetSymbolPosition(_0x594149, _0x3c0d7f));
              _0x44c529.push(_0x1cf32e.node);
            }
            this.m_symbolNodes.push(_0x44c529);
          }
          var _0x6831cc = function () {
            var _0x711749 = _0x12ad2a.TempoSetting.Petra;
            _0x3ea8bb = _0x711749.DELAY_TIME_FOR_X.NORMAL;
            _0x26196c = _0x711749.DELAY_TIME_FOR_Y.NORMAL;
            _0xf27c63 = _0x711749.SYMBOL_MOVE_TIME;
            _0x119201 = _0x711749.BOUNCE_DISTANCE;
            _0x26a0e1 = _0x711749.SYMBOL_MOVE_DISTANCE;
          };
          _0x6831cc();
          _0x12ad2a.AddCb(_0x6831cc);
        };
        _0x5c30e0.GetSymbolPosition = function (_0x17c9c6, _0x444138) {
          var _0x1df78b = this.m_symbolSize.width * (_0x17c9c6 + 0.5) + this.m_reelPositionOffset[_0x17c9c6].x - this.m_viewSize.width / 0x2;
          var _0x2218f9 = this.m_symbolSize.height * (_0x444138 + 0.5) + this.m_reelPositionOffset[_0x17c9c6].y - this.m_viewSize.height / 0x2;
          return _0x592fc6(_0x1df78b, _0x2218f9);
        };
        _0x5c30e0.Init = function (_0x58b11a) {};
        _0x5c30e0.SetPlateInfo = function (_0x41637d) {
          this.m_roundQueue = _0x41637d;
        };
        _0x5c30e0.StartSpin = function () {
          var _0x473a52 = _0x2d97e1(_0x3a966d().mark(function _0x58940e(_0x187ce5, _0x58f2d6) {
            var _0x442e0b;
            var _0x546f95;
            var _0x10e8ea;
            var _0x5bcb17;
            return _0x3a966d().wrap(function (_0x1a6816) {
              for (;;) {
                switch (_0x1a6816.prev = _0x1a6816.next) {
                  case 0x0:
                    _0x3fb2b5.PlateIdx = 0x0;
                    this.m_isHardStop = _0x187ce5;
                    this.m_isInitStop = false;
                    this.m_isPlateCleaned = false;
                    this.m_isNearWin = false;
                    this.m_isCloseNearWin = false;
                    this.m_isNearlyNearWin = false;
                    _0x3fb2b5.IsPlayMaxSound = false;
                    this.m_isPlayNearWinSounds = [];
                    this.m_wayLabel.string = '';
                    _0x442e0b = new Array();
                    for (_0x546f95 = 0x0; _0x546f95 < _0x3fb2b5.COL; _0x546f95++) {
                      for (_0x10e8ea = 0x0; _0x10e8ea < _0x3fb2b5.ROW; _0x10e8ea++) {
                        _0x5bcb17 = this.m_symbolNodes[_0x546f95][_0x10e8ea];
                        this.m_removeBlockFxCb(_0x5bcb17);
                        _0x442e0b.push(this.LeavePlate(_0x5bcb17, _0x546f95, _0x10e8ea, this.m_isHardStop));
                      }
                    }
                    if (!_0x58f2d6) {
                      _0x2d761c.Play(_0x3fb2b5.AudioClips.Spin);
                    }
                    _0x1a6816.next = 0xf;
                    return Promise.all(_0x442e0b);
                  case 0xf:
                    this.m_isPlateCleaned = true;
                  case 0x10:
                  case "end":
                    return _0x1a6816.stop();
                }
              }
            }, _0x58940e, this);
          }));
          return function (_0xf9b417, _0x2a6f93) {
            return _0x473a52.apply(this, arguments);
          };
        }();
        _0x5c30e0.LeavePlate = function (_0x514aed, _0x16fa3a, _0x47b72d, _0x509a33) {
          var _0x28ca36 = this;
          return new Promise(function (_0x56438f) {
            _0x1ce2d1(_0x514aed).delay(_0x28ca36.GetDelayTime(_0x16fa3a, _0x47b72d, _0x509a33)).by(_0xf27c63, {
              'position': _0x592fc6(0x0, -_0x26a0e1)
            }, {
              'easing': "sineIn"
            }).call(function () {
              var _0x3ddd6c = _0x514aed.getComponent(_0x165a2b);
              _0x514aed.removeFromParent();
              _0x28ca36.ReturnSymbol(_0x3ddd6c);
              _0x56438f();
            }).start();
          });
        };
        _0x5c30e0.GetDelayTime = function (_0x308cc4, _0x47e5af, _0x5cf09b, _0x443b54) {
          if (undefined === _0x443b54) {
            _0x443b54 = false;
          }
          return _0x12ad2a.TempoSetting.Petra.GET_DELAY_TIME(_0x308cc4, _0x47e5af, _0x5cf09b, _0x443b54);
        };
        _0x5c30e0.RecoverPlate = function (_0x106f10) {
          var _0x5eef64 = null;
          var _0xfbd5fa = null;
          if (_0x106f10 && _0x106f10.RoundQueue && _0x106f10.RoundQueue.length > 0x0) {
            _0xfbd5fa = (_0x5eef64 = _0x106f10.RoundQueue[_0x106f10.RoundQueue.length - 0x1]).ComboStageData[_0x5eef64.ComboStageData.length - 0x1].ComboStageSymbol;
          }
          for (var _0x49fcc5 = 0x0; _0x49fcc5 < _0x3fb2b5.COL; _0x49fcc5++) {
            for (var _0x1f92c7 = 0x0; _0x1f92c7 < _0x3fb2b5.ROW; _0x1f92c7++) {
              var _0x52c8c7 = this.m_symbolNodes[_0x49fcc5][_0x1f92c7];
              _0x52c8c7.removeFromParent();
              var _0xf7de5e = _0x52c8c7.getComponent(_0x165a2b);
              this.ReturnSymbol(_0xf7de5e);
            }
          }
          for (var _0x142506 = 0x0; _0x142506 < _0x3fb2b5.COL; _0x142506++) {
            for (var _0x24823e = 0x0; _0x24823e < _0x3fb2b5.ROW; _0x24823e++) {
              var _0x521a06 = null;
              var _0x18b21f = [];
              if (_0xfbd5fa && _0xfbd5fa.length > 0x0) {
                _0x18b21f = _0xfbd5fa[_0x142506].Col;
                _0x521a06 = this.CreatSymbol(_0x18b21f[_0x24823e]);
              } else {
                _0x521a06 = this.CreatSymbol(_0x142506 + 0x2);
              }
              this.node.addChild(_0x521a06.node);
              _0x521a06.node.setPosition(this.GetSymbolPosition(_0x142506, _0x24823e));
              this.m_symbolNodes[_0x142506][_0x24823e] = _0x521a06.node;
              if (_0x521a06 && _0x18b21f.length > 0x0) {
                this.SetUpSpine(_0x521a06, _0x18b21f[_0x24823e]);
              }
            }
          }
        };
        _0x5c30e0.ShowNewPlate = function () {
          var _0x4581c6 = _0x2d97e1(_0x3a966d().mark(function _0x23d8b4(_0x4c1c1a) {
            var _0x31c619;
            var _0x4d5124;
            var _0x473f2d;
            var _0x606fc6;
            var _0x5148e9;
            var _0x2f1dcf;
            var _0x436a5f;
            var _0xd09a68;
            return _0x3a966d().wrap(function (_0x5a50fd) {
              for (;;) {
                switch (_0x5a50fd.prev = _0x5a50fd.next) {
                  case 0x0:
                    this.m_isHardStop = _0x4c1c1a;
                    this.m_isPlateCleaned = false;
                    _0x31c619 = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].ComboStageSymbol;
                    _0x4d5124 = new Array();
                    this.m_reelStops = [false, false, false, false, false, false];
                    this.m_nearWinReelStops = [false, false, false, false, false, false];
                    this.m_activeCounts = [];
                    for (_0x473f2d = 0x0; _0x473f2d < _0x3fb2b5.COL; _0x473f2d++) {
                      for (_0x606fc6 = 0x0; _0x606fc6 < _0x3fb2b5.ROW; _0x606fc6++) {
                        _0x5148e9 = false;
                        _0x2f1dcf = _0x31c619[_0x473f2d].Col;
                        _0x436a5f = this.CreatSymbol(_0x2f1dcf[_0x606fc6]);
                        this.node.addChild(_0x436a5f.node);
                        (_0xd09a68 = this.GetSymbolPosition(_0x473f2d, _0x606fc6)).y = _0x5544dd.plus(_0xd09a68.y, this.m_viewSize.height);
                        this.m_symbolNodes[_0x473f2d][_0x606fc6] = _0x436a5f.node;
                        _0x436a5f.node.setPosition(_0xd09a68);
                        if (_0x2f1dcf[_0x606fc6] < _0x32bcbe.ADD_ROUND) {
                          if (this.m_activeCounts[_0x473f2d]) {
                            this.m_activeCounts[_0x473f2d]++;
                          } else {
                            this.m_activeCounts[_0x473f2d] = 0x1;
                          }
                        }
                        if (_0x436a5f) {
                          _0x5148e9 = this.SetUpSpine(_0x436a5f, _0x2f1dcf[_0x606fc6]);
                        }
                        _0x4d5124.push(this.EnterPlate({
                          'node': _0x436a5f.node,
                          'col': _0x473f2d,
                          'row': _0x606fc6,
                          'isBox': _0x5148e9
                        }));
                      }
                    }
                    if (!(this.IsHardStop || _0xfb754.IsAutoSpin)) {
                      _0x2d761c.Play(_0x3fb2b5.AudioClips.Reel_run);
                    }
                    _0x5a50fd.next = 0xb;
                    return Promise.all(_0x4d5124);
                  case 0xb:
                    this.ShowWays();
                    if (this.IsHardStop) {
                      _0x2d761c.Play(_0x3fb2b5.AudioClips.Reel_Stop);
                    }
                    this.m_isInitStop = true;
                  case 0xe:
                  case "end":
                    return _0x5a50fd.stop();
                }
              }
            }, _0x23d8b4, this);
          }));
          return function (_0xf3a69a) {
            return _0x4581c6.apply(this, arguments);
          };
        }();
        _0x5c30e0.SetUpSpine = function (_0xb267e, _0x2562b9) {
          if (_0x2562b9 < _0x32bcbe.GOLD_J) {
            _0xb267e.SetSkin("Skin1");
            _0xb267e.SetUp();
          } else {
            if (_0x2562b9 >= _0x32bcbe.GOLD_J && _0x2562b9 <= _0x32bcbe.GOLD_DIAMOND) {
              _0xb267e.SetSkin('Skin2');
              _0xb267e.SetUp();
            } else {
              if (_0x2562b9 >= _0x32bcbe.WILD_20 && _0x2562b9 <= _0x32bcbe.WILD_23) {
                switch (_0x2562b9) {
                  case 0x14:
                    _0xb267e.SetSkin("Skin1");
                    break;
                  case 0x15:
                    _0xb267e.SetSkin("Skin2");
                    break;
                  case 0x16:
                    _0xb267e.SetSkin('Skin3');
                    break;
                  case 0x17:
                    _0xb267e.SetSkin("Skin4");
                }
              } else {
                if (_0x2562b9 == _0x32bcbe.CABINET) {
                  return true;
                }
                _0xb267e.SetUp();
              }
            }
          }
          return false;
        };
        _0x5c30e0.EnterPlate = function (_0x512859) {
          var _0x5dd915 = this;
          var _0x2c4ca8 = this.GetSymbolPosition(_0x512859.col, _0x512859.row);
          return new Promise(function (_0x1c2709) {
            if (_0x512859.node.getPosition().y == _0x2c4ca8.y) {
              _0x1c2709();
            } else {
              var _0x310a25 = true;
              if (0x0 !== _0x512859.row) {
                var _0x57002f = _0x5dd915.m_symbolNodes[_0x512859.col][_0x512859.row - 0x1];
                var _0x1c7ef0 = _0x12f750.instance.ActionManager.getNumberOfRunningActionsInTarget(_0x57002f);
                _0x310a25 = !_0x1c7ef0;
              }
              _0x1ce2d1(_0x512859.node).delay(_0x512859.delayTime ? _0x512859.delayTime : 0x0).delay(_0x5dd915.GetDelayTime(_0x512859.col, _0x512859.row, _0x5dd915.m_isHardStop, _0x512859.isNearWin)).call(_0x2d97e1(_0x3a966d().mark(function _0x21f0ec() {
                return _0x3a966d().wrap(function (_0x4ef555) {
                  for (;;) {
                    switch (_0x4ef555.prev = _0x4ef555.next) {
                      case 0x0:
                        if (_0x512859.isBox) {
                          _0x5dd915.m_effectCb(_0x512859.col, _0x512859.row, 0x1, _0x3aa19d.TYPE_FEATURE_REEL);
                        }
                      case 0x1:
                      case 'end':
                        return _0x4ef555.stop();
                    }
                  }
                }, _0x21f0ec);
              }))).to(_0xf27c63, {
                'position': _0x2c4ca8
              }, {
                'easing': "sineIn"
              }).call(function () {
                if (_0x5dd915.m_reelStops[_0x512859.col]) {
                  if (_0x512859.isNearWin && !_0x5dd915.m_nearWinReelStops[_0x512859.col]) {
                    _0x5dd915.m_nearWinReelStops[_0x512859.col] = true;
                    _0x2d761c.Play(_0x3fb2b5.AudioClips.Reel_Stop);
                  }
                } else if (_0x5dd915.IsHardStop) {
                  if (_0x5dd915.IsHardStop && _0x512859.isNearWin) {
                    _0x5dd915.m_reelStops[_0x512859.col] = true;
                    _0x2d761c.Play(_0x3fb2b5.AudioClips.Reel_Stop);
                  }
                } else {
                  _0x5dd915.m_reelStops[_0x512859.col] = true;
                  _0x2d761c.Play(_0x3fb2b5.AudioClips.Reel_Stop);
                }
                if (_0x310a25) {
                  _0x5dd915.m_effectCb(_0x512859.col, _0x512859.row, 0x1, _0x3aa19d.TYPE_DUST);
                }
              }).by(_0x5544dd.divide(0x3, 0x3c), {
                'position': _0x592fc6(0x0, _0x119201)
              }).by(_0x5544dd.divide(0x2, 0x3c), {
                'position': _0x592fc6(0x0, 0x0 - _0x119201)
              }).call(_0x2d97e1(_0x3a966d().mark(function _0x16f796() {
                return _0x3a966d().wrap(function (_0x3ba363) {
                  for (;;) {
                    switch (_0x3ba363.prev = _0x3ba363.next) {
                      case 0x0:
                        _0x512859.node.setPosition(_0x2c4ca8);
                        if (_0x512859.isBox) {
                          _0x512859.node.getChildByName('Spine').getComponent(_0x1a8f7d.Skeleton).setAnimation(0x0, _0x3fce78.STOP, false);
                        }
                        _0x1c2709();
                      case 0x3:
                      case "end":
                        return _0x3ba363.stop();
                    }
                  }
                }, _0x16f796);
              }))).start();
            }
          });
        };
        _0x5c30e0.ChangeFgSymbol = function () {
          var _0xca3ab5 = _0x2d97e1(_0x3a966d().mark(function _0x2466c3() {
            var _0x13613d;
            var _0x5d48f2;
            var _0x14fc0a;
            var _0x5d9587;
            var _0x3127c9;
            var _0x4a369f;
            var _0x2c43ed;
            var _0x3779da;
            var _0x5796d8;
            var _0x135f1f;
            var _0x3e6813;
            var _0x176b73;
            var _0x3ff6e7;
            var _0x3e87eb;
            var _0x326706;
            var _0x2de2d2;
            var _0x231677;
            var _0x26f26e;
            var _0x23f4b3;
            var _0x23e556;
            var _0x1d48d9;
            var _0x372f41;
            var _0x134e2f;
            var _0x1dc8ea;
            var _0x3dcc36;
            return _0x3a966d().wrap(function (_0x26952d) {
              for (;;) {
                switch (_0x26952d.prev = _0x26952d.next) {
                  case 0x0:
                    for (_0x13613d = 0x0; _0x13613d < _0x3fb2b5.COL; _0x13613d++) {
                      for (_0x5d48f2 = 0x0; _0x5d48f2 < _0x3fb2b5.ROW; _0x5d48f2++) {
                        this.m_symbolNodes[_0x13613d][_0x5d48f2].getComponent(_0x165a2b).SetDark(true);
                      }
                    }
                    _0x14fc0a = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].FGChange;
                    _0x5d9587 = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].FGChangeSymbol;
                    _0x3127c9 = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].ComboStageSymbol;
                    _0x4a369f = _0x3fb2b5.TimeScale.HardStop;
                    _0x5d9587 = _0x5d9587 || 0x0;
                    _0x2c43ed = [];
                    if (!(_0x14fc0a && _0x14fc0a.length > 0x0)) {
                      _0x26952d.next = 0x4d;
                      break;
                    }
                    _0x3779da = 0x0;
                  case 0x9:
                    if (!(_0x3779da < _0x14fc0a.length)) {
                      _0x26952d.next = 0x1c;
                      break;
                    }
                    _0x5796d8 = _0x14fc0a[_0x3779da];
                    _0x135f1f = _0x5796d8 % _0x3fb2b5.ROW;
                    _0x3e6813 = (_0x5796d8 - _0x135f1f) / _0x3fb2b5.ROW;
                    _0x176b73 = _0x3127c9[_0x3e6813].Col[_0x135f1f];
                    if (!_0x2c43ed[_0x176b73]) {
                      _0x2c43ed[_0x176b73] = [];
                    }
                    _0x3ff6e7 = false;
                    _0x3e87eb = 0x0;
                  case 0x11:
                    if (!(_0x3e87eb < _0x2c43ed[_0x176b73].length)) {
                      _0x26952d.next = 0x18;
                      break;
                    }
                    if (_0x2c43ed[_0x176b73][_0x3e87eb].x != _0x3e6813 || _0x2c43ed[_0x176b73][_0x3e87eb].y != _0x135f1f) {
                      _0x26952d.next = 0x15;
                      break;
                    }
                    _0x3ff6e7 = true;
                    return _0x26952d.abrupt("break", 0x18);
                  case 0x15:
                    _0x3e87eb++;
                    _0x26952d.next = 0x11;
                    break;
                  case 0x18:
                    if (!_0x3ff6e7) {
                      _0x2c43ed[_0x176b73].push(_0x1df3f5(_0x3e6813, _0x135f1f));
                    }
                  case 0x19:
                    _0x3779da++;
                    _0x26952d.next = 0x9;
                    break;
                  case 0x1c:
                    _0x326706 = new Array();
                    _0x2de2d2 = 0x0;
                  case 0x1e:
                    if (!(_0x2de2d2 < _0x2c43ed.length)) {
                      _0x26952d.next = 0x4b;
                      break;
                    }
                    if (_0x2c43ed[_0x2de2d2]) {
                      _0x26952d.next = 0x21;
                      break;
                    }
                    return _0x26952d.abrupt('continue', 0x48);
                  case 0x21:
                    this.m_canPlayTransSound = true;
                    _0x231677 = 0x0;
                  case 0x23:
                    if (!(_0x231677 < _0x2c43ed[_0x2de2d2].length)) {
                      _0x26952d.next = 0x48;
                      break;
                    }
                    _0x26f26e = _0x2c43ed[_0x2de2d2][_0x231677].y;
                    _0x23f4b3 = _0x2c43ed[_0x2de2d2][_0x231677].x;
                    (_0x23e556 = this.m_symbolNodes[_0x23f4b3][_0x26f26e]).removeFromParent();
                    _0x1d48d9 = _0x23e556.getComponent(_0x165a2b);
                    this.ReturnSymbol(_0x1d48d9);
                    _0x372f41 = this.CreatSymbol(_0x5d9587);
                    this.m_symbolNodes[_0x23f4b3][_0x26f26e] = _0x372f41.node;
                    _0x134e2f = "Skin1";
                    if (!_0x372f41) {
                      _0x26952d.next = 0x44;
                      break;
                    }
                    if (!(_0x5d9587 < _0x32bcbe.GOLD_J)) {
                      _0x26952d.next = 0x32;
                      break;
                    }
                    _0x134e2f = "Skin1";
                    _0x26952d.next = 0x44;
                    break;
                  case 0x32:
                    if (!(_0x5d9587 >= _0x32bcbe.GOLD_J && _0x5d9587 <= _0x32bcbe.GOLD_DIAMOND)) {
                      _0x26952d.next = 0x36;
                      break;
                    }
                    _0x134e2f = "Skin2";
                    _0x26952d.next = 0x44;
                    break;
                  case 0x36:
                    if (!(_0x5d9587 >= _0x32bcbe.WILD_20 && _0x5d9587 <= _0x32bcbe.WILD_23)) {
                      _0x26952d.next = 0x44;
                      break;
                    }
                    _0x26952d.t0 = _0x5d9587;
                    _0x26952d.next = _0x26952d.t0 === _0x32bcbe.WILD_20 ? 0x3a : _0x26952d.t0 === _0x32bcbe.WILD_21 ? 0x3c : _0x26952d.t0 === _0x32bcbe.WILD_22 ? 0x3e : _0x26952d.t0 === _0x32bcbe.WILD_23 ? 0x40 : 0x42;
                    break;
                  case 0x3a:
                    _0x134e2f = 'Skin1';
                    return _0x26952d.abrupt("break", 0x43);
                  case 0x3c:
                    _0x134e2f = "Skin2";
                    return _0x26952d.abrupt("break", 0x43);
                  case 0x3e:
                    _0x134e2f = "Skin3";
                    return _0x26952d.abrupt("break", 0x43);
                  case 0x40:
                    _0x134e2f = "Skin4";
                    return _0x26952d.abrupt("break", 0x43);
                  case 0x42:
                    return _0x26952d.abrupt("break", 0x43);
                  case 0x43:
                    _0x372f41.Idle();
                  case 0x44:
                    _0x326706.push(this.ShowTreasure(_0x23f4b3, _0x26f26e, _0x372f41.node, _0x5d9587, _0x134e2f, _0x4a369f));
                  case 0x45:
                    _0x231677++;
                    _0x26952d.next = 0x23;
                    break;
                  case 0x48:
                    _0x2de2d2++;
                    _0x26952d.next = 0x1e;
                    break;
                  case 0x4b:
                    _0x26952d.next = 0x4d;
                    return Promise.all(_0x326706);
                  case 0x4d:
                    for (_0x1dc8ea = 0x0; _0x1dc8ea < _0x3fb2b5.COL; _0x1dc8ea++) {
                      for (_0x3dcc36 = 0x0; _0x3dcc36 < _0x3fb2b5.ROW; _0x3dcc36++) {
                        this.m_symbolNodes[_0x1dc8ea][_0x3dcc36].getComponent(_0x165a2b).SetDark(false);
                      }
                    }
                  case 0x4e:
                  case "end":
                    return _0x26952d.stop();
                }
              }
            }, _0x2466c3, this);
          }));
          return function () {
            return _0xca3ab5.apply(this, arguments);
          };
        }();
        _0x5c30e0.ShowTreasure = function () {
          var _0x16ca69 = _0x2d97e1(_0x3a966d().mark(function _0xa7e631(_0x1fe50b, _0x5882bd, _0x1f130a, _0x341fd8, _0x56b562, _0x58b059) {
            var _0x24ead1;
            var _0x5b5490;
            var _0x23e8b1;
            var _0x18881d;
            var _0x1bf474;
            return _0x3a966d().wrap(function (_0x358d3c) {
              for (;;) {
                switch (_0x358d3c.prev = _0x358d3c.next) {
                  case 0x0:
                    if (undefined === _0x58b059) {
                      _0x58b059 = 0x1;
                    }
                    _0x24ead1 = this.GetSymbolPosition(_0x1fe50b, _0x5882bd);
                    if (this.m_canPlayTransSound) {
                      this.m_canPlayTransSound = false;
                      _0x2d761c.Play(_0x3fb2b5.AudioClips.FG_Symbol_change_single);
                    }
                    _0x358d3c.next = 0x5;
                    return this.m_effectCb(_0x1fe50b, _0x5882bd, _0x58b059, _0x3aa19d.TYPE_REMOVE, _0x270c7d.TREASURE);
                  case 0x5:
                    this.node.addChild(_0x1f130a);
                    _0x1f130a.setPosition(_0x24ead1);
                    if (_0x56b562 && _0x1f130a.getComponent(_0x165a2b)) {
                      (_0x5b5490 = _0x1f130a.getComponent(_0x165a2b)).SetSkin(_0x56b562);
                      _0x5b5490.SetUp();
                    }
                    _0x358d3c.next = 0xa;
                    return this.m_effectCb(_0x1fe50b, _0x5882bd, _0x58b059, _0x3aa19d.TYPE_REMOVE, _0x270c7d.TRANS);
                  case 0xa:
                    _0x1f130a.active = false;
                    _0x23e8b1 = this.CreatSymbol(_0x341fd8);
                    this.node.addChild(_0x23e8b1.node);
                    this.SetUpSpine(_0x23e8b1, _0x341fd8);
                    _0x23e8b1.node.setPosition(_0x24ead1);
                    if (!(_0x18881d = _0x23e8b1.node.getComponent(_0x47b037))) {
                      _0x18881d = _0x23e8b1.node.addComponent(_0x47b037);
                    }
                    if (!(_0x1bf474 = _0x18881d.getState(this.m_treasureAnimClip.name))) {
                      _0x18881d.addClip(this.m_treasureAnimClip);
                      _0x1bf474 = _0x18881d.getState(this.m_treasureAnimClip.name);
                    }
                    _0x1bf474.play();
                    _0x358d3c.next = 0x16;
                    return _0x5cb914.Wait(this, _0x1bf474.duration);
                  case 0x16:
                    _0x23e8b1.node.removeFromParent();
                    this.ReturnSymbol(_0x23e8b1);
                    _0x1f130a.active = true;
                  case 0x19:
                  case "end":
                    return _0x358d3c.stop();
                }
              }
            }, _0xa7e631, this);
          }));
          return function (_0x992903, _0x10cee6, _0x52d12f, _0x3fad7d, _0x18d25b, _0x57f179) {
            return _0x16ca69.apply(this, arguments);
          };
        }();
        _0x5c30e0.ShowExplode = function () {
          var _0x28d323 = _0x2d97e1(_0x3a966d().mark(function _0x42e919(_0x1f986a, _0x447778, _0x264f6b) {
            var _0x248193;
            var _0x351723;
            var _0x56076e;
            var _0x48c44f;
            var _0x1c8da2;
            var _0x23c9b4;
            var _0x1bc00a;
            var _0xf462bb;
            var _0x1ebc7a;
            var _0x56e7ef;
            var _0x34d26;
            var _0x59c5f4;
            return _0x3a966d().wrap(function (_0x5cfbe9) {
              for (;;) {
                switch (_0x5cfbe9.prev = _0x5cfbe9.next) {
                  case 0x0:
                    if (undefined === _0x447778) {
                      _0x447778 = 0x1;
                    }
                    this.m_isHardStop = _0x1f986a;
                    this.m_isExplode = false;
                    this.m_timeScale = _0x447778;
                    this.m_showNearWinCb = _0x264f6b;
                    _0x248193 = [];
                    _0x351723 = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].AwardDataVec;
                    for (_0x56076e = 0x0; _0x56076e < _0x351723.length; _0x56076e++) {
                      for (_0x48c44f = 0x0; _0x48c44f < _0x351723[_0x56076e].PosVec.length; _0x48c44f++) {
                        _0x248193.push(_0x351723[_0x56076e].PosVec[_0x48c44f]);
                      }
                    }
                    if (this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].HitSlatePosVec && this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].HitSlatePosVec.length > 0x0) {
                      for (_0x1c8da2 = 0x0; _0x1c8da2 < this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].HitSlatePosVec.length; _0x1c8da2++) {
                        _0x248193.push(this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].HitSlatePosVec[_0x1c8da2]);
                      }
                    }
                    for (_0x23c9b4 = 0x0; _0x23c9b4 < _0x3fb2b5.COL; _0x23c9b4++) {
                      for (_0x1bc00a = 0x0; _0x1bc00a < _0x3fb2b5.ROW; _0x1bc00a++) {
                        _0x5544dd.SetZIndex(this.m_symbolNodes[_0x23c9b4][_0x1bc00a], 0x0);
                      }
                    }
                    _0xf462bb = 0x0;
                  case 0xb:
                    if (!(_0xf462bb < _0x3fb2b5.COL * _0x3fb2b5.ROW)) {
                      _0x5cfbe9.next = 0x15;
                      break;
                    }
                    if (!_0x248193.includes(_0xf462bb)) {
                      _0x5cfbe9.next = 0xe;
                      break;
                    }
                    return _0x5cfbe9.abrupt("continue", 0x12);
                  case 0xe:
                    _0x1ebc7a = Math.floor(_0xf462bb / _0x3fb2b5.ROW);
                    _0x56e7ef = _0xf462bb % _0x3fb2b5.ROW;
                    this.m_symbolNodes[_0x1ebc7a][_0x56e7ef].getComponent(_0x165a2b).SetDark(true);
                  case 0x12:
                    _0xf462bb++;
                    _0x5cfbe9.next = 0xb;
                    break;
                  case 0x15:
                    _0x5cfbe9.next = 0x17;
                    return this.PlayWin(_0x248193);
                  case 0x17:
                    for (_0x34d26 = 0x0; _0x34d26 < _0x3fb2b5.COL; _0x34d26++) {
                      for (_0x59c5f4 = 0x0; _0x59c5f4 < _0x3fb2b5.ROW; _0x59c5f4++) {
                        this.m_symbolNodes[_0x34d26][_0x59c5f4].getComponent(_0x165a2b).SetDark(false);
                      }
                    }
                  case 0x18:
                  case 'end':
                    return _0x5cfbe9.stop();
                }
              }
            }, _0x42e919, this);
          }));
          return function (_0x5e7663, _0x2a3224, _0x3750b7) {
            return _0x28d323.apply(this, arguments);
          };
        }();
        _0x5c30e0.PlayWin = function () {
          var _0x30876c = _0x2d97e1(_0x3a966d().mark(function _0x568521(_0x20db97) {
            var _0x4dcf24;
            var _0x415fbe;
            var _0xf8d6f4;
            var _0x4e9823;
            var _0x3cd049;
            var _0x24e29a;
            var _0xc3708b;
            var _0x4fef14;
            var _0x296f1a;
            var _0x3701d7;
            var _0x2a3c8a;
            var _0x46e633;
            var _0x554602;
            var _0x3befe7;
            var _0x37f03a;
            var _0x13c1b1;
            return _0x3a966d().wrap(function (_0x5136ec) {
              for (;;) {
                switch (_0x5136ec.prev = _0x5136ec.next) {
                  case 0x0:
                    _0x4dcf24 = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].ComboStageSymbol;
                    _0x415fbe = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].ChangeSymbols;
                    _0xf8d6f4 = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].Holy;
                    this.m_timeScale;
                    _0x4e9823 = [];
                    if ((_0x3cd049 = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].HitSlatePosVec) && _0x3cd049.length > 0x0) {
                      for (_0x24e29a = 0x0; _0x24e29a < _0x20db97.length; _0x24e29a++) {
                        if (!_0x3cd049.includes(_0x20db97[_0x24e29a])) {
                          _0x4e9823.push(_0x20db97[_0x24e29a]);
                        }
                      }
                    } else {
                      _0x4e9823 = _0x20db97;
                    }
                    this.IsHardStop;
                    if (_0xf8d6f4 && _0xf8d6f4.length > 0x0) {
                      this.m_timeScale;
                      _0x1ce2d1(this.node).delay(0x2 / this.m_timeScale).call(function () {
                        _0x2d761c.Play(_0x3fb2b5.AudioClips.FG_Fly);
                      }).start();
                    }
                    _0xc3708b = new Array();
                    for (_0x4fef14 = 0x0; _0x4fef14 < _0x3fb2b5.COL; _0x4fef14++) {
                      _0x296f1a = 0x0;
                      for (_0x3701d7 = 0x0; _0x3701d7 < _0x3fb2b5.ROW; _0x3701d7++) {
                        _0x2a3c8a = _0x4fef14 * _0x3fb2b5.ROW + _0x3701d7;
                        _0x46e633 = _0x4dcf24[_0x4fef14].Col;
                        _0x554602 = 0x0;
                        _0x3befe7 = {
                          'holy': 0x0,
                          'addRound': 0x0,
                          'addMults': 0x0
                        };
                        if (_0x415fbe[_0x4fef14].Col && _0x415fbe[_0x4fef14].Col.length > 0x0 && _0x46e633[_0x3701d7] >= _0x32bcbe.GOLD_J && _0x46e633[_0x3701d7] <= _0x32bcbe.WILD_23 && _0x46e633[_0x3701d7] != _0x32bcbe.WILD_20 && _0x415fbe[_0x4fef14].Col[_0x296f1a]) {
                          _0x554602 = _0x415fbe[_0x4fef14].Col[_0x296f1a];
                        }
                        if (-0x1 !== _0x20db97.indexOf(_0x2a3c8a)) {
                          if (_0x46e633[_0x3701d7] == _0x32bcbe.CABINET && _0xf8d6f4 && _0xf8d6f4.length > 0x0) {
                            _0x3befe7.holy = _0xf8d6f4.shift();
                            _0x3befe7.addRound = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].AddRounds;
                            _0x3befe7.addMults = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].AddMults;
                          }
                          if (_0x46e633[_0x3701d7] >= _0x32bcbe.BLOCK) {
                            _0x37f03a = this.m_symbolNodes[_0x4fef14][_0x3701d7];
                            this.m_removeBlockFxCb(_0x37f03a);
                            _0x13c1b1 = this.GetSideInfo(_0x4e9823, _0x2a3c8a);
                            _0xc3708b.push(this.Bomb(_0x46e633[_0x3701d7], _0x4fef14, _0x3701d7, _0x554602, _0x3befe7, _0x13c1b1));
                          } else {
                            if (_0x46e633[_0x3701d7] >= _0x32bcbe.GOLD_J && _0x46e633[_0x3701d7] <= _0x32bcbe.WILD_23 && _0x46e633[_0x3701d7] != _0x32bcbe.WILD_20) {
                              _0x296f1a++;
                            }
                            _0xc3708b.push(this.Bomb(_0x46e633[_0x3701d7], _0x4fef14, _0x3701d7, _0x554602, _0x3befe7));
                          }
                        }
                      }
                    }
                    _0x5136ec.next = 0xd;
                    return Promise.all(_0xc3708b);
                  case 0xd:
                    this.m_isExplode = true;
                  case 0xe:
                  case 'end':
                    return _0x5136ec.stop();
                }
              }
            }, _0x568521, this);
          }));
          return function (_0x45ae19) {
            return _0x30876c.apply(this, arguments);
          };
        }();
        _0x5c30e0.GetSideInfo = function (_0x49921b, _0x5c0ba6) {
          var _0x1cd8e4 = {
            'IsLeft': false,
            'IsRight': false,
            'IsTop': false,
            'IsDown': false
          };
          if (_0x5c0ba6 >= _0x3fb2b5.COL) {
            var _0x1fdb7f = _0x5c0ba6 - _0x3fb2b5.COL;
            _0x1cd8e4.IsLeft = _0x49921b.includes(_0x1fdb7f);
          }
          if (_0x5c0ba6 < (_0x3fb2b5.COL - 0x1) * _0x3fb2b5.ROW) {
            var _0x2bede0 = _0x5c0ba6 + _0x3fb2b5.COL;
            _0x1cd8e4.IsRight = _0x49921b.includes(_0x2bede0);
          }
          var _0x38f34b = _0x5c0ba6 + 0x1;
          if (_0x38f34b % _0x3fb2b5.ROW != 0x0) {
            _0x1cd8e4.IsTop = _0x49921b.includes(_0x38f34b);
          }
          var _0x5e3a36 = _0x5c0ba6 - 0x1;
          var _0x31a85a = Math.floor(_0x5c0ba6 / _0x3fb2b5.ROW);
          if (_0x5e3a36 >= 0x0 && Math.floor(_0x5e3a36 / _0x3fb2b5.ROW) == _0x31a85a) {
            _0x1cd8e4.IsDown = _0x49921b.includes(_0x5e3a36);
          }
          return _0x1cd8e4;
        };
        _0x5c30e0.Bomb = function () {
          var _0x174eb3 = _0x2d97e1(_0x3a966d().mark(function _0x26f3e1(_0x1fe8fa, _0x596db9, _0x276b2f, _0x2b7da4, _0x3c9bb6, _0x2d9465) {
            var _0x1a0d57;
            var _0x1dfcb3;
            var _0x4a3331;
            var _0x299af4;
            var _0x55500a;
            var _0x4bf196;
            var _0x440223;
            var _0x13df0d;
            var _0x2051fa;
            var _0xec4e54;
            var _0x5b70f5;
            var _0x3ecb96;
            var _0x54514a;
            var _0x1592b8 = this;
            return _0x3a966d().wrap(function (_0x1f531f) {
              for (;;) {
                switch (_0x1f531f.prev = _0x1f531f.next) {
                  case 0x0:
                    if (!(_0x1fe8fa >= _0x32bcbe.BLOCK)) {
                      _0x1f531f.next = 0x9;
                      break;
                    }
                    _0x1a0d57 = _0x270c7d.WIN3;
                    if (_0x2d9465) {
                      if (_0x2d9465.IsLeft) {
                        _0x1a0d57 = _0x270c7d.WIN3;
                      } else if (_0x2d9465.IsRight) {
                        _0x1a0d57 = _0x270c7d.WIN4;
                      } else if (_0x2d9465.IsDown) {
                        _0x1a0d57 = _0x270c7d.WIN;
                      } else if (_0x2d9465.IsTop) {
                        _0x1a0d57 = _0x270c7d.WIN2;
                      }
                    }
                    _0x1f531f.next = 0x5;
                    return this.m_effectCb(_0x596db9, _0x276b2f, this.m_timeScale, _0x3aa19d.TYPE_REMOVE, _0x1a0d57);
                  case 0x5:
                    this.m_symbolNodes[_0x596db9][_0x276b2f].active = false;
                    _0x1f531f.next = 0x8;
                    return this.m_effectCb(_0x596db9, _0x276b2f, this.m_timeScale, _0x3aa19d.TYPE_REMOVE, _0x270c7d.EXPLODE);
                  case 0x8:
                    return _0x1f531f.abrupt("return");
                  case 0x9:
                    (_0x1dfcb3 = this.m_symbolNodes[_0x596db9][_0x276b2f].getComponent(_0x165a2b)).node.active = true;
                    if (!(_0x1fe8fa >= _0x32bcbe.WILD_20 && _0x1fe8fa <= _0x32bcbe.WILD_23)) {
                      _0x1f531f.next = 0x18;
                      break;
                    }
                    _0x1f531f.t0 = _0x1fe8fa;
                    _0x1f531f.next = _0x1f531f.t0 === _0x32bcbe.WILD_20 ? 0xf : _0x1f531f.t0 === _0x32bcbe.WILD_21 ? 0x11 : _0x1f531f.t0 === _0x32bcbe.WILD_22 ? 0x13 : _0x1f531f.t0 === _0x32bcbe.WILD_23 ? 0x15 : 0x17;
                    break;
                  case 0xf:
                    _0x1dfcb3.SetSkin("Skin1");
                    return _0x1f531f.abrupt("break", 0x18);
                  case 0x11:
                    _0x1dfcb3.SetSkin("Skin2");
                    return _0x1f531f.abrupt("break", 0x18);
                  case 0x13:
                    _0x1dfcb3.SetSkin("Skin3");
                    return _0x1f531f.abrupt('break', 0x18);
                  case 0x15:
                    _0x1dfcb3.SetSkin('Skin4');
                    return _0x1f531f.abrupt("break", 0x18);
                  case 0x17:
                    return _0x1f531f.abrupt("break", 0x18);
                  case 0x18:
                    _0x1f531f.next = 0x1a;
                    return _0x1dfcb3.ShowWin(this.m_timeScale);
                  case 0x1a:
                    _0x1dfcb3.node.active = false;
                    _0x4a3331 = function () {
                      if (_0x1592b8.m_showNearWinCb) {
                        _0x1592b8.ShowNearWin();
                      }
                    };
                    _0x299af4 = this.GetSymbolPosition(_0x596db9, _0x276b2f);
                    if (!(_0x1fe8fa < _0x32bcbe.GOLD_J)) {
                      _0x1f531f.next = 0x22;
                      break;
                    }
                    _0x4a3331();
                    _0x1f531f.next = 0x21;
                    return this.m_effectCb(_0x596db9, _0x276b2f, this.m_timeScale, _0x3aa19d.TYPE_REMOVE, _0x270c7d.REMOVE);
                  case 0x21:
                    return _0x1f531f.abrupt("return");
                  case 0x22:
                    if (_0x1fe8fa != _0x32bcbe.CABINET) {
                      _0x1f531f.next = 0x37;
                      break;
                    }
                    _0x4bf196 = null;
                    (_0x440223 = this.CreatSymbol(_0x3c9bb6.holy)).getComponent(_0x22aa71).opacity = 0xff;
                    _0x440223.SetFlyVisiable(false);
                    this.node.addChild(_0x440223.node);
                    _0x440223.node.setPosition(this.GetSymbolPosition(_0x596db9, _0x276b2f));
                    _0x5544dd.SetZIndex(_0x440223.node, 0x1);
                    if (_0x3c9bb6.addRound > 0x0 && 0x18 == _0x3c9bb6.holy) {
                      _0x440223.SetSkin(_0x196ef9.SPIN_TRANS_01);
                      _0x4bf196 = _0x196ef9.SPIN_TRANS_01;
                    }
                    _0x1f531f.next = 0x2d;
                    return _0x440223.ShowWin(this.m_timeScale);
                  case 0x2d:
                    _0x440223.ShowEnd(this.m_timeScale);
                    _0x55500a = this.CreatSymbol(_0x3c9bb6.holy);
                    _0x13df0d = _0x5544dd.divide(0.5, 0.01);
                    _0x2051fa = 0xff;
                    _0xec4e54 = _0x5544dd.divide(0xff, _0x13df0d);
                    _0x1ce2d1(_0x440223.node).delay(0.5).repeat(_0x13df0d, _0x1ce2d1().call(function () {
                      if ((_0x2051fa = _0x5544dd.minus(_0x2051fa, _0xec4e54)) <= 0x0) {
                        _0x2051fa = 0x0;
                        _0x1592b8.ReturnSymbol(_0x440223);
                        _0x440223.node.removeFromParent();
                      } else {
                        _0x440223.node.getComponent(_0x22aa71).opacity = _0x2051fa;
                      }
                    }).delay(0.01)).start();
                    _0x1f531f.next = 0x35;
                    return this.m_flyCb(_0x55500a, _0x299af4, _0x596db9, _0x276b2f, _0x4bf196, _0x3c9bb6);
                  case 0x35:
                    _0x1f531f.next = 0x5a;
                    break;
                  case 0x37:
                    if (!(_0x1fe8fa >= _0x32bcbe.GOLD_J && _0x1fe8fa <= _0x32bcbe.ADD_ROUND)) {
                      _0x1f531f.next = 0x5a;
                      break;
                    }
                    _0x4a3331();
                    if (_0x1fe8fa >= 0xa && _0x1fe8fa <= 0x18) {
                      if (0x0 == _0x2b7da4) {
                        this.m_symbolNodes[_0x596db9][_0x276b2f].active = false;
                      }
                    } else {
                      this.m_symbolNodes[_0x596db9][_0x276b2f].active = false;
                    }
                    if (0x0 != _0x2b7da4) {
                      _0x1f531f.next = 0x3f;
                      break;
                    }
                    _0x1f531f.next = 0x3d;
                    return this.m_effectCb(_0x596db9, _0x276b2f, this.m_timeScale, _0x3aa19d.TYPE_REMOVE, _0x270c7d.REMOVE);
                  case 0x3d:
                    _0x1f531f.next = 0x5a;
                    break;
                  case 0x3f:
                    _0x5b70f5 = this.m_symbolNodes[_0x596db9][_0x276b2f];
                    _0x3ecb96 = _0x5b70f5.getComponent(_0x165a2b);
                    this.ReturnSymbol(_0x3ecb96);
                    _0x5b70f5.removeFromParent();
                    _0x54514a = this.CreatSymbol(_0x2b7da4);
                    this.m_symbolNodes[_0x596db9][_0x276b2f] = _0x54514a.node;
                    this.node.addChild(_0x54514a.node);
                    _0x54514a.node.setPosition(this.GetSymbolPosition(_0x596db9, _0x276b2f));
                    _0x1f531f.t1 = _0x2b7da4;
                    _0x1f531f.next = _0x1f531f.t1 === _0x32bcbe.WILD_20 ? 0x4a : _0x1f531f.t1 === _0x32bcbe.WILD_21 ? 0x4c : _0x1f531f.t1 === _0x32bcbe.WILD_22 ? 0x4e : _0x1f531f.t1 === _0x32bcbe.WILD_23 ? 0x50 : 0x52;
                    break;
                  case 0x4a:
                    _0x54514a.SetSkin('Skin1');
                    return _0x1f531f.abrupt("break", 0x52);
                  case 0x4c:
                    _0x54514a.SetSkin("Skin2");
                    return _0x1f531f.abrupt('break', 0x52);
                  case 0x4e:
                    _0x54514a.SetSkin("Skin3");
                    return _0x1f531f.abrupt("break", 0x52);
                  case 0x50:
                    _0x54514a.SetSkin("Skin4");
                    return _0x1f531f.abrupt("break", 0x52);
                  case 0x52:
                    if (!(_0x1fe8fa >= _0x32bcbe.WILD_20 && _0x1fe8fa <= _0x32bcbe.WILD_23)) {
                      _0x1f531f.next = 0x57;
                      break;
                    }
                    _0x1f531f.next = 0x55;
                    return _0x54514a.ShowDecrease(this.m_timeScale);
                  case 0x55:
                    _0x1f531f.next = 0x5a;
                    break;
                  case 0x57:
                    _0x5544dd.SetZIndex(_0x54514a.node, 0x1);
                    _0x1f531f.next = 0x5a;
                    return _0x54514a.ShowSpawn(this.m_timeScale);
                  case 0x5a:
                  case "end":
                    return _0x1f531f.stop();
                }
              }
            }, _0x26f3e1, this);
          }));
          return function (_0x347bf7, _0x4a2d96, _0x2f7011, _0x3c915d, _0x4fa9f6, _0x238d96) {
            return _0x174eb3.apply(this, arguments);
          };
        }();
        _0x5c30e0.ShowNearWin = function () {
          var _0x43f348;
          var _0x83ea7e = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].ComboStageSymbol;
          var _0x4d2d4b = false;
          var _0x4874d5 = [];
          var _0x2d3e92 = 0x0;
          for (var _0x33dc3e = 0x0; _0x33dc3e < _0x3fb2b5.COL; _0x33dc3e++) {
            for (var _0x115cfd = 0x0; _0x115cfd < _0x3fb2b5.ROW; _0x115cfd++) {
              if (_0x83ea7e[_0x33dc3e].Col[_0x115cfd] >= _0x32bcbe.BLOCK) {
                _0x4874d5.push(_0x83ea7e[_0x33dc3e].Col[_0x115cfd]);
                if (this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].HitSlatePosVec && this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].HitSlatePosVec.length > 0x0 && this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].HitSlatePosVec.indexOf(0x5 * _0x33dc3e + _0x115cfd + _0x33dc3e) > -0x1) {
                  _0x2d3e92++;
                }
              }
            }
          }
          var _0x2bc21f = _0x3fb2b5.COL * _0x3fb2b5.ROW;
          if (_0x4874d5.length > 0x0) {
            _0x2bc21f = _0x4874d5.length - _0x2d3e92;
          }
          if (0x0 != _0x2bc21f) {
            if (_0x2bc21f <= 0x3) {
              this.m_isNearWin = true;
              this.m_isNearlyNearWin = true;
              _0x4d2d4b = true;
              var _0x46754f = 0x0;
              var _0x5681fb = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx + 0x1].AwardDataVec;
              for (var _0x574e47 = 0x0; _0x5681fb && _0x574e47 < _0x5681fb.length; _0x574e47++) {
                for (var _0x54b0f4 = 0x0; _0x54b0f4 < _0x5681fb[_0x574e47].PosVec.length; _0x54b0f4++) {
                  if (_0x5681fb[_0x574e47].PosVec[_0x54b0f4] > _0x46754f) {
                    _0x46754f = _0x5681fb[_0x574e47].PosVec[_0x54b0f4];
                  }
                }
              }
              switch (_0x2bc21f) {
                case 0x1:
                  if (!this.m_isPlayNearWinSounds[_0x2bc21f]) {
                    this.m_isPlayNearWinSounds[_0x2bc21f] = true;
                    _0x2d761c.Play(_0x3fb2b5.AudioClips.NearWin_1);
                  }
                  break;
                case 0x2:
                  if (!this.m_isPlayNearWinSounds[_0x2bc21f]) {
                    this.m_isPlayNearWinSounds[_0x2bc21f] = true;
                    _0x2d761c.Play(_0x3fb2b5.AudioClips.NearWin_2);
                  }
                  break;
                case 0x3:
                  if (!this.m_isPlayNearWinSounds[_0x2bc21f]) {
                    this.m_isPlayNearWinSounds[_0x2bc21f] = true;
                    _0x2d761c.Play(_0x3fb2b5.AudioClips.NearWin_3);
                  }
              }
            } else if (_0x2bc21f <= _0x3fb2b5.CloseNearWinNum) {
              this.m_isNearlyNearWin = true;
            }
          } else {
            this.m_isCloseNearWin = true;
            this.m_isNearlyNearWin = false;
          }
          if (_0x4d2d4b) {
            _0x1ce2d1(this.node).delay(this.GetNearTime()).call(function () {
              _0x2d761c.Play(_0x3fb2b5.AudioClips.Reel_run);
            }).start();
          }
          if (!(null == (_0x43f348 = this.m_showNearWinCb))) {
            _0x43f348.call(this);
          }
          this.m_showNearWinCb = null;
        };
        _0x5c30e0.CloseNearWin = function () {
          this.m_isNearWin = false;
        };
        _0x5c30e0.FillSymbol = function () {
          var _0x3f8e8a = _0x2d97e1(_0x3a966d().mark(function _0x2d90a8(_0x4849ae, _0x120ef3) {
            var _0x45429e;
            var _0xac8d74;
            var _0x143b34;
            var _0x485cde;
            var _0x3e74e3;
            var _0x34d80c;
            var _0x1127bb;
            var _0x171154;
            var _0x3afe9c;
            var _0x545103;
            var _0x4d6aba;
            var _0x47552d;
            var _0x4c2a43;
            var _0x2ecff0;
            var _0x5daeb5;
            var _0x1d4b2a;
            var _0xe1446e;
            var _0x88396c;
            var _0x47a309;
            var _0xb52a0f;
            return _0x3a966d().wrap(function (_0x2668d7) {
              for (;;) {
                switch (_0x2668d7.prev = _0x2668d7.next) {
                  case 0x0:
                    this.m_isHardStop = _0x4849ae;
                    this.m_isFill = false;
                    this.m_isExplode = false;
                    if (this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].AwardDataVec && 0x0 != this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].AwardDataVec.length) {
                      _0x2668d7.next = 0x6;
                      break;
                    }
                    this.m_isFill = true;
                    return _0x2668d7.abrupt('return');
                  case 0x6:
                    for (_0xac8d74 = 0x0; _0xac8d74 < _0x3fb2b5.COL; _0xac8d74++) {
                      for (_0x143b34 = _0x3fb2b5.ROW - 0x1; _0x143b34 >= 0x0; _0x143b34--) {
                        if (!this.m_symbolNodes[_0xac8d74][_0x143b34].active) {
                          _0x485cde = this.m_symbolNodes[_0xac8d74][_0x143b34];
                          this.m_symbolNodes[_0xac8d74].splice(_0x143b34, 0x1);
                          _0x485cde.removeFromParent();
                          _0x3e74e3 = _0x485cde.getComponent(_0x165a2b);
                          this.ReturnSymbol(_0x3e74e3);
                        }
                      }
                    }
                    _0x34d80c = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx].FillSymbols;
                    for (_0x1127bb = 0x0; _0x1127bb < _0x3fb2b5.COL; _0x1127bb++) {
                      _0x171154 = 0x0;
                      if (_0x34d80c[_0x1127bb].Col && _0x34d80c[_0x1127bb].Col.length > 0x0) {
                        _0x3afe9c = _0x34d80c[_0x1127bb].Col;
                        for (_0x545103 = 0x0; _0x545103 < _0x3afe9c.length; _0x545103++) {
                          _0x4d6aba = this.CreatSymbol(_0x3afe9c[_0x545103]);
                          this.node.addChild(_0x4d6aba.node);
                          _0x47552d = this.GetSymbolPosition(_0x1127bb, _0x545103);
                          _0x4c2a43 = this.m_viewSize.height / 0x2 + this.m_symbolSize.height * (_0x171154 + 0.5);
                          _0x4d6aba.node.setPosition(_0x592fc6(_0x47552d.x, _0x4c2a43));
                          if (_0x4d6aba) {
                            this.SetUpSpine(_0x4d6aba, _0x3afe9c[_0x545103]);
                          }
                          _0x171154++;
                          this.m_symbolNodes[_0x1127bb].push(_0x4d6aba.node);
                        }
                      }
                    }
                    _0x2ecff0 = new Array();
                    this.m_reelStops = [false, false, false, false, false, false];
                    this.m_nearWinReelStops = [false, false, false, false, false, false];
                    for (_0x5daeb5 = 0x0; _0x5daeb5 < _0x3fb2b5.COL; _0x5daeb5++) {
                      for (_0x1d4b2a = 0x0; _0x1d4b2a < _0x3fb2b5.ROW; _0x1d4b2a++) {
                        if (!(_0xe1446e = this.m_symbolNodes[_0x5daeb5][_0x1d4b2a])) {
                          _0x3658a6('AA');
                        }
                        if (_0xe1446e.position.y > this.m_viewSize.height / 0x2 && this.m_isNearWin && !this.m_isCloseNearWin) {
                          _0x2ecff0.push(this.EnterPlate({
                            'node': _0xe1446e,
                            'col': _0x5daeb5,
                            'row': _0x1d4b2a,
                            'isBox': false,
                            'delayTime': this.GetNearTime(),
                            'isNearWin': true
                          }));
                        } else {
                          _0x2ecff0.push(this.EnterPlate({
                            'node': _0xe1446e,
                            'col': _0x5daeb5,
                            'row': _0x1d4b2a,
                            'isBox': false
                          }));
                        }
                      }
                    }
                    _0x2668d7.next = 0xf;
                    return Promise.all(_0x2ecff0);
                  case 0xf:
                    if ((_0x88396c = null == (_0x45429e = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx + 0x1]) ? undefined : _0x45429e.ComboStageSymbol) && _0x88396c.length > 0x0) {
                      this.m_activeCounts = [];
                      for (_0x47a309 = 0x0; _0x47a309 < _0x3fb2b5.COL; _0x47a309++) {
                        for (_0xb52a0f = 0x0; _0xb52a0f < _0x3fb2b5.ROW; _0xb52a0f++) {
                          if (_0x88396c[_0x47a309].Col[_0xb52a0f] < _0x32bcbe.ADD_ROUND) {
                            if (this.m_activeCounts[_0x47a309]) {
                              this.m_activeCounts[_0x47a309]++;
                            } else {
                              this.m_activeCounts[_0x47a309] = 0x1;
                            }
                          }
                        }
                      }
                    }
                    this.ShowWays();
                    this.m_isFill = true;
                  case 0x13:
                  case "end":
                    return _0x2668d7.stop();
                }
              }
            }, _0x2d90a8, this);
          }));
          return function (_0x3784cb, _0x54075b) {
            return _0x3f8e8a.apply(this, arguments);
          };
        }();
        _0x5c30e0.IsNextPlateFull = function () {
          if (_0x3fb2b5.PlateIdx + 0x1 == this.m_roundQueue.ComboStageData.length) {
            return false;
          }
          var _0x1d9976 = this.m_roundQueue.ComboStageData[_0x3fb2b5.PlateIdx + 0x1].ComboStageSymbol;
          for (var _0x237e3d = 0x0; _0x237e3d < _0x1d9976.length; _0x237e3d++) {
            for (var _0x4accae = 0x0; _0x4accae < _0x1d9976[_0x237e3d].Col.length; _0x4accae++) {
              if (_0x1d9976[_0x237e3d].Col[_0x4accae] == _0x32bcbe.BLOCK) {
                return false;
              }
            }
          }
          return true;
        };
        _0x5c30e0.GetNearTime = function () {
          return 0x6 * _0x3ea8bb + 0x6 * _0x26196c;
        };
        _0x5c30e0.OnRotation = function (_0x5a183b) {
          this.m_isLandscape = _0x5a183b;
          if (_0x5a183b) {
            this.node.setPosition(new _0x93abd1(0x0, 0x30, 0x0));
          } else {
            this.node.setPosition(new _0x93abd1(0x0, -0x33, 0x0));
          }
        };
        _0x5c30e0.GetSymbolNode = function (_0x22b450, _0x2b8f20) {
          var _0x212ded = this.m_symbolNodes[_0x22b450][_0x2b8f20];
          return _0x212ded || null;
        };
        _0x5c30e0.ShowWays = function () {
          var _0x46cc1a = 0x1;
          for (var _0x249564 = 0x0; _0x249564 < _0x3fb2b5.COL; _0x249564++) {
            if (this.m_activeCounts[_0x249564]) {
              _0x46cc1a *= this.m_activeCounts[_0x249564];
            }
          }
          this.m_wayLabel.string = _0x5544dd.FormatNumberThousands(_0x46cc1a, _0x5544dd.FORMAT_NUMBER_TYPE.NONE_DOT);
        };
        _0x4e0271(_0x3aa19d, [{
          'key': "WayLabel",
          'set': function (_0x38d511) {
            this.m_wayLabel.string = _0x38d511;
          }
        }, {
          'key': "IsHardStop",
          'get': function () {
            return this.m_isHardStop;
          }
        }, {
          'key': "IsInitStop",
          'get': function () {
            return this.m_isInitStop;
          }
        }, {
          'key': "IsPlateCleaned",
          'get': function () {
            return this.m_isPlateCleaned;
          }
        }, {
          'key': "IsExplode",
          'get': function () {
            return this.m_isExplode;
          }
        }, {
          'key': "IsFill",
          'get': function () {
            return this.m_isFill;
          }
        }, {
          'key': "IsNearWin",
          'get': function () {
            return this.m_isNearWin;
          }
        }, {
          'key': "IsNearlyNearWin",
          'get': function () {
            return this.m_isNearlyNearWin;
          }
        }]);
        return _0x3aa19d;
      }(_0x2e72bb);
      _0x190675.Layer2D = 33554432;
      _0x190675.TYPE_REMOVE = "Remove";
      _0x190675.TYPE_DUST = "Dust";
      _0x190675.TYPE_FEATURE_REEL = "FeatureReel";
      _0x190675.TYPE_TRANS = 'Trans';
      _0x29679b = _0x49a46a(_0x190675.prototype, "m_symbol", [_0x3e17d3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x5c73c0 = _0x49a46a(_0x190675.prototype, 'm_slate', [_0x535bdb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x3502b3 = _0x49a46a(_0x190675.prototype, "m_treasureAnimClip", [_0x283342], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4377b7 = _0x49a46a(_0x190675.prototype, "m_wayLabel", [_0x2ff7a7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x4fde2e = _0x551d01(_0x5793a2 = _0x190675) || _0x5793a2;
      var _0x3c8415;
      var _0x3d2afa;
      var _0x564369;
      var _0x4e119e;
      var _0x2f92f6;
      var _0x306883;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "b2a13u0bF1FtLPdE556Bue/", "DustSpine", undefined);
      (function (_0x4f89e8) {
        _0x4f89e8.NONE = "none";
        _0x4f89e8.REEL_DUST = 'Reel_Dust';
      })(_0x306883 || (_0x306883 = {}));
      var _0x11b875 = _0x73005c.ccclass;
      var _0x24ce26 = _0x73005c.property;
      _0x3c8415 = _0x11b875("DustSpine");
      _0x3d2afa = _0x24ce26({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': "spine"
      });
      _0x4e119e = function (_0x41d558) {
        function _0x59e8d2() {
          var _0x24c17f;
          var _0x2ed786 = arguments.length;
          var _0x2a0bae = new Array(_0x2ed786);
          for (var _0x5a098f = 0x0; _0x5a098f < _0x2ed786; _0x5a098f++) {
            _0x2a0bae[_0x5a098f] = arguments[_0x5a098f];
          }
          _0x24c17f = _0x41d558.call.apply(_0x41d558, [this].concat(_0x2a0bae)) || this;
          _0x5043f5(_0x24c17f, 'm_spine', _0x2f92f6, _0x21436e(_0x24c17f));
          return _0x24c17f;
        }
        _0x197a27(_0x59e8d2, _0x41d558);
        var _0x31b06a = _0x59e8d2.prototype;
        _0x31b06a.Show = function (_0x1e8cee) {
          var _0x5e771e = this;
          return new Promise(function (_0xc5c03e) {
            _0x5e771e.m_spine.timeScale = _0x1e8cee;
            _0x5e771e.m_spine.clearTrack(0x0);
            _0x5e771e.m_spine.setToSetupPose();
            var _0x29bee1 = _0x5e771e.m_spine.setAnimation(0x0, _0x306883.REEL_DUST, false);
            if (_0x29bee1) {
              _0x5e771e.m_spine.setTrackCompleteListener(_0x29bee1, function () {
                _0xc5c03e(null);
              });
            } else {
              _0x5e771e.m_spine.setCompleteListener(function () {
                _0xc5c03e(null);
              });
            }
          });
        };
        _0x31b06a.Clean = function () {
          this.m_spine.clearTracks();
          this.m_spine.setToSetupPose();
        };
        return _0x59e8d2;
      }(_0x2e72bb);
      _0x2f92f6 = _0x49a46a(_0x4e119e.prototype, 'm_spine', [_0x3d2afa], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x2cda9e = _0x3c8415(_0x564369 = _0x4e119e) || _0x564369;
      var _0x4c8c20;
      var _0x353247;
      var _0x1ebda1;
      var _0x5229a5;
      var _0xa32224;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "76afdgcj+JNpJUugzt3hxKn", "RemoveSpine", undefined);
      var _0x5cdfc6 = _0x73005c.ccclass;
      var _0x5be112 = _0x73005c.property;
      _0x4c8c20 = _0x5cdfc6("RemoveSpine");
      _0x353247 = _0x5be112({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': 'spine'
      });
      _0x5229a5 = function (_0x1929e6) {
        function _0x3887cc() {
          var _0x3f5a66;
          var _0x9eaab2 = arguments.length;
          var _0xc5c0e6 = new Array(_0x9eaab2);
          for (var _0x32e804 = 0x0; _0x32e804 < _0x9eaab2; _0x32e804++) {
            _0xc5c0e6[_0x32e804] = arguments[_0x32e804];
          }
          _0x3f5a66 = _0x1929e6.call.apply(_0x1929e6, [this].concat(_0xc5c0e6)) || this;
          _0x5043f5(_0x3f5a66, 'm_spine', _0xa32224, _0x21436e(_0x3f5a66));
          return _0x3f5a66;
        }
        _0x197a27(_0x3887cc, _0x1929e6);
        var _0x5d0f7f = _0x3887cc.prototype;
        _0x5d0f7f.Show = function (_0xea3eba, _0x3a97b3) {
          var _0x564d69 = this;
          return new Promise(function (_0x2c00a8) {
            _0x564d69.m_spine.timeScale = _0x3a97b3;
            _0x564d69.m_spine.clearTrack(0x0);
            _0x564d69.m_spine.setToSetupPose();
            var _0x1f6e4c = _0x564d69.m_spine.setAnimation(0x0, _0xea3eba, false);
            if (_0x1f6e4c) {
              _0x564d69.m_spine.setTrackCompleteListener(_0x1f6e4c, function () {
                _0x2c00a8(null);
              });
            } else {
              _0x564d69.m_spine.setCompleteListener(function () {
                _0x2c00a8(null);
              });
            }
          });
        };
        _0x5d0f7f.ShowNearWin = function () {
          this.m_spine.timeScale = 0x1;
          this.m_spine.clearTrack(0x0);
          this.m_spine.setToSetupPose();
          this.m_spine.setAnimation(0x0, 'WinLoop', true);
        };
        _0x5d0f7f.Clean = function () {
          this.m_spine.clearTracks();
          this.m_spine.setToSetupPose();
        };
        return _0x3887cc;
      }(_0x2e72bb);
      _0xa32224 = _0x49a46a(_0x5229a5.prototype, "m_spine", [_0x353247], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x5364e9 = _0x4c8c20(_0x1ebda1 = _0x5229a5) || _0x1ebda1;
      var _0x2adb26;
      var _0x55a661;
      var _0x3b9bc9;
      var _0x574590;
      var _0x246cbe;
      var _0x184057;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, '5d352T/gJVD14H6Vmj6dO+I', "FeatureSpine", undefined);
      (function (_0x2c350b) {
        _0x2c350b.NONE = "none";
        _0x2c350b.FG_FEATUREREEL = "FG_FeatureReel";
      })(_0x184057 || (_0x184057 = {}));
      var _0x21a817 = _0x73005c.ccclass;
      var _0x598e12 = _0x73005c.property;
      _0x2adb26 = _0x21a817("FeatureSpine");
      _0x55a661 = _0x598e12({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': "spine"
      });
      _0x574590 = function (_0x28a6da) {
        function _0x4e8133() {
          var _0x3d6f54;
          var _0xbb331a = arguments.length;
          var _0x293fe2 = new Array(_0xbb331a);
          for (var _0x3cea32 = 0x0; _0x3cea32 < _0xbb331a; _0x3cea32++) {
            _0x293fe2[_0x3cea32] = arguments[_0x3cea32];
          }
          _0x3d6f54 = _0x28a6da.call.apply(_0x28a6da, [this].concat(_0x293fe2)) || this;
          _0x5043f5(_0x3d6f54, 'm_spine', _0x246cbe, _0x21436e(_0x3d6f54));
          return _0x3d6f54;
        }
        _0x197a27(_0x4e8133, _0x28a6da);
        var _0x3c15ff = _0x4e8133.prototype;
        _0x3c15ff.Show = function (_0x3bd7d1) {
          var _0x17021a = this;
          return new Promise(function (_0x1a7a89) {
            _0x17021a.m_spine.timeScale = _0x3bd7d1;
            _0x17021a.m_spine.clearTrack(0x0);
            _0x17021a.m_spine.setToSetupPose();
            var _0x3c5807 = _0x17021a.m_spine.setAnimation(0x0, _0x184057.FG_FEATUREREEL, false);
            if (_0x3c5807) {
              _0x17021a.m_spine.setTrackCompleteListener(_0x3c5807, function () {
                _0x1a7a89(null);
              });
            } else {
              _0x17021a.m_spine.setCompleteListener(function () {
                _0x1a7a89(null);
              });
            }
          });
        };
        _0x3c15ff.Clean = function () {
          this.m_spine.clearTracks();
          this.m_spine.setToSetupPose();
        };
        return _0x4e8133;
      }(_0x2e72bb);
      _0x246cbe = _0x49a46a(_0x574590.prototype, 'm_spine', [_0x55a661], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x4c7ea7 = _0x2adb26(_0x3b9bc9 = _0x574590) || _0x3b9bc9;
      var _0x22aa1b;
      var _0x2ac4d7;
      var _0x35ad15;
      var _0xf212b5;
      var _0x133703;
      var _0x23fad7;
      var _0x5ea7d4;
      var _0x1964d6;
      var _0x373c45;
      var _0x91ffd8;
      var _0x1d7f25;
      var _0x37e894;
      var _0x10f54b;
      var _0x5800b8;
      var _0x536367;
      var _0x1bfe60;
      var _0x193259;
      var _0x5716f6;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "cc473U9kZFAVbWGyVYNsj9l", "EffectPlate", undefined);
      var _0x574993 = _0x73005c.ccclass;
      var _0x5a7044 = _0x73005c.property;
      var _0xab6921;
      var _0x42274d;
      !function (_0x44af4a) {
        _0x44af4a.NONE = 'none';
        _0x44af4a.SETUP = "Setup";
        _0x44af4a.WIN = "Win";
        _0x44af4a.SPAWN = "Spawn";
        _0x44af4a.DECREASE = 'Decrease';
        _0x44af4a.IDEL = "idel";
        _0x44af4a.END = 'End';
        _0x44af4a.FLY = "Fly";
      }(_0xab6921 || (_0xab6921 = {}));
      (function (_0xd1563b) {
        _0xd1563b.NONE = "none";
        _0xd1563b.EXPLODE = 'Explode';
        _0xd1563b.HINT = "Hint";
        _0xd1563b.REMOVE = "Remove";
        _0xd1563b.TRANS = "Trans";
        _0xd1563b.TREASURE = 'Treasure_Trans';
      })(_0x42274d || (_0x42274d = {}));
      _0x22aa1b = _0x574993("EffectPlate");
      _0x2ac4d7 = _0x5a7044({
        'type': _0x27176c,
        'tooltip': "small win節點"
      });
      _0x35ad15 = _0x5a7044({
        'type': _0x18a697,
        'tooltip': "symbol圖"
      });
      _0xf212b5 = _0x5a7044({
        'type': _0x36bc07,
        'tooltip': '贏分'
      });
      _0x133703 = _0x5a7044({
        'type': _0x2ed444,
        'tooltip': "symbol的底部墜落"
      });
      _0x23fad7 = _0x5a7044({
        'type': _0x2ed444,
        'tooltip': "symbol的移除"
      });
      _0x5ea7d4 = _0x5a7044({
        'type': _0x2ed444,
        'tooltip': '聖櫃落下'
      });
      _0x1964d6 = _0x5a7044({
        'type': _0x581c11,
        'tooltip': "FG局數"
      });
      _0x373c45 = _0x5a7044({
        'type': _0x581c11,
        'tooltip': 'FG倍率'
      });
      _0x91ffd8 = function (_0x39901d) {
        function _0xe9a29a() {
          var _0x2715ea;
          var _0x2984df = arguments.length;
          var _0x5e31dd = new Array(_0x2984df);
          for (var _0x1774c6 = 0x0; _0x1774c6 < _0x2984df; _0x1774c6++) {
            _0x5e31dd[_0x1774c6] = arguments[_0x1774c6];
          }
          _0x2715ea = _0x39901d.call.apply(_0x39901d, [this].concat(_0x5e31dd)) || this;
          _0x5043f5(_0x2715ea, "m_smallWinNode", _0x1d7f25, _0x21436e(_0x2715ea));
          _0x5043f5(_0x2715ea, "m_sprite_frame", _0x37e894, _0x21436e(_0x2715ea));
          _0x5043f5(_0x2715ea, "m_winLabel", _0x10f54b, _0x21436e(_0x2715ea));
          _0x5043f5(_0x2715ea, "m_dust", _0x5800b8, _0x21436e(_0x2715ea));
          _0x5043f5(_0x2715ea, "m_romve", _0x536367, _0x21436e(_0x2715ea));
          _0x5043f5(_0x2715ea, "m_featureReel", _0x1bfe60, _0x21436e(_0x2715ea));
          _0x5043f5(_0x2715ea, 'm_fgRoundTransform', _0x193259, _0x21436e(_0x2715ea));
          _0x5043f5(_0x2715ea, "m_fgMultiTransform", _0x5716f6, _0x21436e(_0x2715ea));
          _0x2715ea.m_slotReels = null;
          _0x2715ea.m_bombTimes = 0x0;
          _0x2715ea.m_isLandscape = null;
          _0x2715ea.m_counterCb = null;
          _0x2715ea.m_winArrarys = [];
          _0x2715ea.m_removeRemoveSpines = [[], [], [], [], [], []];
          _0x2715ea.m_removeArrarys = [];
          _0x2715ea.m_dustSpines = [];
          _0x2715ea.m_dustArrarys = [];
          _0x2715ea.m_featureSpines = [];
          _0x2715ea.m_featureSpineArrarys = [];
          _0x2715ea.m_transNodes = [];
          return _0x2715ea;
        }
        _0x197a27(_0xe9a29a, _0x39901d);
        var _0x393e1e = _0xe9a29a.prototype;
        _0x393e1e.CreatDust = function () {
          var _0x5ea847 = this.m_dustArrarys.shift();
          if (!_0x5ea847) {
            var _0x395f2c = _0x2c0559(this.m_dust);
            _0x395f2c.layer = _0x4fde2e.Layer2D;
            _0x395f2c.name = "dust";
            _0x5ea847 = _0x395f2c.getComponent(_0x2cda9e);
          }
          _0x5ea847.node.active = true;
          return _0x5ea847;
        };
        _0x393e1e.ReturnDust = function (_0x54914c) {
          _0x54914c.Clean();
          _0x54914c.node.active = false;
          this.m_dustArrarys.push(_0x54914c);
        };
        _0x393e1e.CreatRemove = function (_0x145771, _0x4f9a70) {
          var _0x3372d7 = this.m_removeArrarys.shift();
          if (!_0x3372d7) {
            var _0x49fb59 = _0x2c0559(this.m_romve);
            _0x49fb59.layer = _0x4fde2e.Layer2D;
            _0x3372d7 = _0x49fb59.getComponent(_0x5364e9);
          }
          _0x3372d7.node.name = _0x145771.toString() + '_' + _0x4f9a70.toString();
          _0x3372d7.node.active = true;
          return _0x3372d7;
        };
        _0x393e1e.ReturnRemove = function (_0xdd9191) {
          if (_0xdd9191) {
            _0xdd9191.Clean();
            _0xdd9191.node.active = false;
            this.m_removeArrarys.push(_0xdd9191);
          }
        };
        _0x393e1e.CreatFeatureReel = function () {
          var _0x4cfd7 = this.m_featureSpineArrarys.shift();
          if (!_0x4cfd7) {
            var _0x484974 = _0x2c0559(this.m_featureReel);
            _0x484974.layer = _0x4fde2e.Layer2D;
            _0x4cfd7 = _0x484974.getComponent(_0x4c7ea7);
          }
          _0x4cfd7.node.name = "featureReel";
          _0x4cfd7.node.active = true;
          return _0x4cfd7;
        };
        _0x393e1e.ReturnFeatureReel = function (_0x5ccf4c) {
          if (_0x5ccf4c) {
            _0x5ccf4c.Clean();
            _0x5ccf4c.node.active = false;
            this.m_featureSpineArrarys.push(_0x5ccf4c);
          }
        };
        _0x393e1e.start = function () {};
        _0x393e1e.update = function (_0x4c86f5) {};
        _0x393e1e.Init = function (_0x4c91d6) {
          var _0x1fbf67 = this;
          this.m_slotReels = _0x4c91d6;
          this.m_slotReels.SetCb(_0x2d97e1(_0x3a966d().mark(function _0x19cf71(_0x443094, _0x2229ba, _0x1a1a64, _0x59f265, _0x5c7f0d, _0xb75be1) {
            return _0x3a966d().wrap(function (_0x2e20f0) {
              for (;;) {
                switch (_0x2e20f0.prev = _0x2e20f0.next) {
                  case 0x0:
                    _0x2e20f0.next = 0x2;
                    return _0x1fbf67.PlayFly(_0x443094, _0x2229ba, _0x1a1a64, _0x59f265, _0x5c7f0d, _0xb75be1);
                  case 0x2:
                  case 'end':
                    return _0x2e20f0.stop();
                }
              }
            }, _0x19cf71);
          })), _0x2d97e1(_0x3a966d().mark(function _0x43ac18(_0x15758d, _0x416957, _0xb2c3a, _0x4ce42e, _0x8a6535) {
            return _0x3a966d().wrap(function (_0x303573) {
              for (;;) {
                switch (_0x303573.prev = _0x303573.next) {
                  case 0x0:
                    if (undefined === _0x8a6535) {
                      _0x8a6535 = '';
                    }
                    _0x303573.next = 0x3;
                    return _0x1fbf67.PlayEffect(_0x15758d, _0x416957, _0xb2c3a, _0x4ce42e, _0x8a6535);
                  case 0x3:
                  case "end":
                    return _0x303573.stop();
                }
              }
            }, _0x43ac18);
          })), function (_0x31b3da) {
            for (; _0x31b3da.children.length > 0x1;) {
              var _0x50655b = _0x31b3da.children[0x1];
              var _0x4b0cc9 = _0x50655b.getComponent(_0x5364e9);
              if (_0x4b0cc9) {
                _0x50655b.removeFromParent();
                _0x1fbf67.ReturnRemove(_0x4b0cc9);
              }
            }
          });
        };
        _0x393e1e.Reset = function () {
          var _0x3eff57 = _0x2d97e1(_0x3a966d().mark(function _0x24ca49() {
            return _0x3a966d().wrap(function (_0x20ccc6) {
              for (;;) {
                switch (_0x20ccc6.prev = _0x20ccc6.next) {
                  case 0x0:
                    this.m_bombTimes = 0x0;
                    this.m_smallWinNode.active = false;
                  case 0x2:
                  case "end":
                    return _0x20ccc6.stop();
                }
              }
            }, _0x24ca49, this);
          }));
          return function () {
            return _0x3eff57.apply(this, arguments);
          };
        }();
        _0x393e1e.ResetExplode = function () {
          var _0x3db304 = _0x2d97e1(_0x3a966d().mark(function _0x25ac48() {
            var _0x57b760;
            var _0x2971ee;
            var _0x38656d;
            return _0x3a966d().wrap(function (_0x264351) {
              for (;;) {
                switch (_0x264351.prev = _0x264351.next) {
                  case 0x0:
                    for (_0x57b760 = 0x0; _0x57b760 < _0x3fb2b5.COL; _0x57b760++) {
                      for (_0x2971ee = 0x0; _0x2971ee < _0x3fb2b5.ROW; _0x2971ee++) {
                        if (this.m_removeRemoveSpines[_0x57b760][_0x2971ee]) {
                          _0x38656d = this.m_removeRemoveSpines[_0x57b760][_0x2971ee];
                          this.ReturnRemove(_0x38656d);
                          this.m_removeRemoveSpines[_0x57b760][_0x2971ee] = null;
                          _0x38656d.node.removeFromParent();
                        }
                      }
                    }
                  case 0x1:
                  case 'end':
                    return _0x264351.stop();
                }
              }
            }, _0x25ac48, this);
          }));
          return function () {
            return _0x3db304.apply(this, arguments);
          };
        }();
        _0x393e1e.ResetReel = function () {
          var _0x1f7c4f = _0x2d97e1(_0x3a966d().mark(function _0x378de3() {
            var _0x50e68c;
            var _0x2f4f40;
            var _0x52e10a;
            return _0x3a966d().wrap(function (_0x1e7196) {
              for (;;) {
                switch (_0x1e7196.prev = _0x1e7196.next) {
                  case 0x0:
                    for (_0x50e68c = 0x0; _0x50e68c < _0x3fb2b5.COL; _0x50e68c++) {
                      if (this.m_featureSpines[_0x50e68c]) {
                        _0x2f4f40 = this.m_featureSpines[_0x50e68c];
                        this.ReturnFeatureReel(_0x2f4f40);
                        this.m_featureSpines[_0x50e68c] = null;
                        _0x2f4f40.node.removeFromParent();
                      }
                      if (this.m_dustSpines[_0x50e68c]) {
                        _0x52e10a = this.m_dustSpines[_0x50e68c];
                        this.ReturnDust(_0x52e10a);
                        this.m_dustSpines[_0x50e68c] = null;
                        _0x52e10a.node.removeFromParent();
                      }
                    }
                  case 0x1:
                  case "end":
                    return _0x1e7196.stop();
                }
              }
            }, _0x378de3, this);
          }));
          return function () {
            return _0x1f7c4f.apply(this, arguments);
          };
        }();
        _0x393e1e.ShowExplode = function () {
          var _0x2ae912 = _0x2d97e1(_0x3a966d().mark(function _0x38672(_0x293159, _0x3b9b98, _0x5d2814, _0x4cf666) {
            var _0x2a748f;
            return _0x3a966d().wrap(function (_0x33bb2b) {
              for (;;) {
                switch (_0x33bb2b.prev = _0x33bb2b.next) {
                  case 0x0:
                    this.m_counterCb = _0x5d2814;
                    this.m_bombTimes++;
                    this.m_slotReels.ShowExplode(_0x293159, _0x3b9b98, _0x4cf666);
                    _0x2a748f = null;
                    _0x2a748f = this.m_slotReels.IsHardStop ? this.playHardSound() : this.playSound();
                    _0x2d761c.Play(_0x2a748f);
                  case 0x6:
                  case "end":
                    return _0x33bb2b.stop();
                }
              }
            }, _0x38672, this);
          }));
          return function (_0x524c9a, _0x242180, _0x53afc7, _0x54418e) {
            return _0x2ae912.apply(this, arguments);
          };
        }();
        _0x393e1e.PlayEffect = function () {
          var _0xfe3ff9 = _0x2d97e1(_0x3a966d().mark(function _0x1b5c9e(_0x3d0bd3, _0x4dd2d1, _0xe17e88, _0x51ecc8, _0x3a2f61) {
            var _0x4d7a5e;
            var _0x5d94bd;
            var _0x3b8a64;
            var _0x47f1e8;
            return _0x3a966d().wrap(function (_0x593a0f) {
              for (;;) {
                switch (_0x593a0f.prev = _0x593a0f.next) {
                  case 0x0:
                    if (undefined === _0x3a2f61) {
                      _0x3a2f61 = '';
                    }
                    _0x593a0f.t0 = _0x51ecc8;
                    _0x593a0f.next = _0x593a0f.t0 === _0x4fde2e.TYPE_REMOVE ? 0x4 : _0x593a0f.t0 === _0x4fde2e.TYPE_DUST ? 0x9 : _0x593a0f.t0 === _0x4fde2e.TYPE_FEATURE_REEL ? 0x11 : 0x1b;
                    break;
                  case 0x4:
                    _0x4d7a5e = this.m_removeRemoveSpines[_0x3d0bd3][_0x4dd2d1];
                    if (!this.m_removeRemoveSpines[_0x3d0bd3][_0x4dd2d1]) {
                      _0x4d7a5e = this.CreatRemove(_0x3d0bd3, _0x4dd2d1);
                      this.m_removeRemoveSpines[_0x3d0bd3][_0x4dd2d1] = _0x4d7a5e;
                      this.node.addChild(_0x4d7a5e.node);
                      _0x4d7a5e.node.setPosition(this.m_slotReels.GetSymbolPosition(_0x3d0bd3, _0x4dd2d1));
                    }
                    _0x593a0f.next = 0x8;
                    return _0x4d7a5e.Show(_0x3a2f61, _0xe17e88);
                  case 0x8:
                    return _0x593a0f.abrupt("break", 0x1c);
                  case 0x9:
                    if (this.m_dustSpines[_0x3d0bd3]) {
                      _0x593a0f.next = 0x10;
                      break;
                    }
                    _0x5d94bd = this.CreatDust();
                    this.node.addChild(_0x5d94bd.node);
                    _0x5d94bd.node.setPosition(this.m_slotReels.GetSymbolPosition(_0x3d0bd3, _0x4dd2d1).add(_0x592fc6(0x0, -0x4)));
                    this.m_dustSpines[_0x3d0bd3] = _0x5d94bd;
                    _0x593a0f.next = 0x10;
                    return _0x5d94bd.Show(_0xe17e88);
                  case 0x10:
                    return _0x593a0f.abrupt('break', 0x1c);
                  case 0x11:
                    if (this.m_featureSpines[_0x3d0bd3]) {
                      _0x593a0f.next = 0x1a;
                      break;
                    }
                    _0x3b8a64 = this.CreatFeatureReel();
                    this.m_featureSpines[_0x3d0bd3] = _0x3b8a64;
                    this.node.addChild(_0x3b8a64.node);
                    (_0x47f1e8 = this.m_slotReels.GetSymbolPosition(_0x3d0bd3, _0x4dd2d1)).y = 0x0;
                    _0x3b8a64.node.setPosition(_0x47f1e8);
                    _0x593a0f.next = 0x1a;
                    return _0x3b8a64.Show(_0xe17e88);
                  case 0x1a:
                  case 0x1b:
                    return _0x593a0f.abrupt("break", 0x1c);
                  case 0x1c:
                  case "end":
                    return _0x593a0f.stop();
                }
              }
            }, _0x1b5c9e, this);
          }));
          return function (_0x40441c, _0x1c9acd, _0x26067a, _0x570727, _0xbb836c) {
            return _0xfe3ff9.apply(this, arguments);
          };
        }();
        _0x393e1e.ShowWin = function () {
          var _0x1006c7 = _0x2d97e1(_0x3a966d().mark(function _0x1887da(_0x13c9e6) {
            var _0x22ef3f;
            var _0x454b02 = this;
            return _0x3a966d().wrap(function (_0xc6a674) {
              for (;;) {
                switch (_0xc6a674.prev = _0xc6a674.next) {
                  case 0x0:
                    this.m_smallWinNode.active = true;
                    this.m_winLabel.string = _0x5544dd.FormatNumberThousands(_0x5544dd.strip(_0x3fb2b5.ShowDisplayValue(_0x13c9e6)), _0x5544dd.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    _0x22ef3f = _0x5544dd.divide(0.25, 0.02);
                    0x0;
                    _0x5544dd.divide(_0x5544dd.strip(_0x13c9e6 - 0x0), _0x22ef3f);
                    this.m_smallWinNode.scale = new _0x93abd1(0x1, 0x1);
                    _0x1ce2d1(this.m_smallWinNode).delay(0x1).to(0.25, {
                      'scale': new _0x93abd1(0x0, 0x0)
                    }).start();
                    _0x1ce2d1(this.m_smallWinNode).repeat(_0x22ef3f, _0x1ce2d1().call(function () {}).delay(0.02)).call(function () {
                      _0x454b02.m_winLabel.string = _0x5544dd.FormatNumberThousands(_0x5544dd.strip(_0x3fb2b5.ShowDisplayValue(_0x13c9e6)), _0x5544dd.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    }).start();
                    _0xc6a674.next = 0xa;
                    return _0x5cb914.Wait(this, 1.25);
                  case 0xa:
                    this.m_smallWinNode.active = false;
                  case 0xb:
                  case "end":
                    return _0xc6a674.stop();
                }
              }
            }, _0x1887da, this);
          }));
          return function (_0x1ac97f) {
            return _0x1006c7.apply(this, arguments);
          };
        }();
        _0x393e1e.PlayFly = function () {
          var _0x405b9e = _0x2d97e1(_0x3a966d().mark(function _0xe5e14e(_0x1e9383, _0x442ea3, _0x2f8a8e, _0x5552b7, _0x2b9d95, _0x5e70aa) {
            var _0x48c401;
            var _0x30a282;
            var _0x10e001;
            var _0x10d00c;
            var _0x2a95f4;
            var _0x256fe6 = this;
            return _0x3a966d().wrap(function (_0x1a2510) {
              for (;;) {
                switch (_0x1a2510.prev = _0x1a2510.next) {
                  case 0x0:
                    this.node.addChild(_0x1e9383.node);
                    _0x5544dd.SetZIndex(_0x1e9383.node, 0x1);
                    _0x1e9383.node.setPosition(_0x442ea3);
                    _0x1e9383.getComponent(_0x22aa71).opacity = 0xff;
                    _0x1e9383.SetFlyVisiable(true);
                    _0x48c401 = {
                      'x': 0x0,
                      'y': 0x0
                    };
                    if (_0x5e70aa.addRound > 0x0 && _0x5e70aa.holy == _0x32bcbe.ADD_ROUND) {
                      _0x1e9383.SetFlySkin(_0x2b9d95);
                      _0x30a282 = this.m_fgRoundTransform.node.parent.getComponent(_0x581c11).convertToWorldSpaceAR(this.m_fgRoundTransform.node.position);
                      _0x10e001 = this.node.getComponent(_0x581c11).convertToNodeSpaceAR(_0x30a282);
                      _0x48c401 = {
                        'x': _0x10e001.x,
                        'y': _0x10e001.y
                      };
                    } else if (_0x5e70aa.addMults > 0x0 && _0x5e70aa.holy == _0x32bcbe.ADD_MULTI) {
                      _0x10d00c = this.m_fgMultiTransform.node.parent.getComponent(_0x581c11).convertToWorldSpaceAR(this.m_fgMultiTransform.node.position);
                      _0x2a95f4 = this.node.getComponent(_0x581c11).convertToNodeSpaceAR(_0x10d00c);
                      _0x48c401 = {
                        'x': _0x2a95f4.x,
                        'y': _0x2a95f4.y
                      };
                    }
                    _0x1e9383.ResetFlyPos();
                    _0x1e9383.ShowFly();
                    _0x1a2510.next = 0xb;
                    return new Promise(function (_0x5642bc) {
                      _0x1ce2d1(_0x1e9383.node).to(0x1, {
                        'position': new _0x93abd1(_0x48c401.x, _0x48c401.y, 0x0)
                      }, {
                        'easing': 'sineIn'
                      }).call(function () {
                        _0x256fe6.m_slotReels.ReturnSymbol(_0x1e9383);
                        _0x1e9383.node.removeFromParent();
                        if (!(null == _0x256fe6.m_counterCb)) {
                          _0x256fe6.m_counterCb();
                        }
                        _0x256fe6.m_counterCb = null;
                        _0x5642bc();
                      }).start();
                    });
                  case 0xb:
                  case "end":
                    return _0x1a2510.stop();
                }
              }
            }, _0xe5e14e, this);
          }));
          return function (_0x58e78b, _0x117eb4, _0x298020, _0x301d00, _0x16a8cc, _0x5360bf) {
            return _0x405b9e.apply(this, arguments);
          };
        }();
        _0x393e1e.playHardSound = function () {
          var _0x43251d = null;
          switch (this.m_bombTimes) {
            case 0x1:
              _0x43251d = _0x3fb2b5.AudioClips.Combo_1_fast;
              break;
            case 0x2:
              _0x43251d = _0x3fb2b5.AudioClips.Combo_2_fast;
              break;
            case 0x3:
              _0x43251d = _0x3fb2b5.AudioClips.Combo_3_fast;
              break;
            case 0x4:
              _0x43251d = _0x3fb2b5.AudioClips.Combo_4_fast;
              break;
            default:
              _0x43251d = _0x3fb2b5.AudioClips.Combo_5_fast;
          }
          return _0x43251d;
        };
        _0x393e1e.playSound = function () {
          var _0x59f6ba = null;
          switch (this.m_bombTimes) {
            case 0x1:
              _0x59f6ba = _0x3fb2b5.AudioClips.Combo_1;
              break;
            case 0x2:
              _0x59f6ba = _0x3fb2b5.AudioClips.Combo_2;
              break;
            case 0x3:
              _0x59f6ba = _0x3fb2b5.AudioClips.Combo_3;
              break;
            case 0x4:
              _0x59f6ba = _0x3fb2b5.AudioClips.Combo_4;
              break;
            default:
              _0x59f6ba = _0x3fb2b5.AudioClips.Combo_5;
          }
          return _0x59f6ba;
        };
        _0x393e1e.OnRotation = function (_0x1daa0b) {
          this.m_isLandscape = _0x1daa0b;
          if (_0x1daa0b) {
            this.node.setPosition(new _0x93abd1(0x0, 0x30, 0x0));
          } else {
            this.node.setPosition(new _0x93abd1(0x0, -0x33, 0x0));
          }
        };
        _0x393e1e.ShowNearWinBlockFX = function () {
          for (var _0x49cbba = 0x0; _0x49cbba < _0x3fb2b5.COL; _0x49cbba++) {
            for (var _0x397466 = 0x0; _0x397466 < _0x3fb2b5.ROW; _0x397466++) {
              var _0x2e5a5e = this.m_slotReels.GetSymbolNode(_0x49cbba, _0x397466);
              if (_0x2e5a5e) {
                var _0x52b98f = Number(_0x2e5a5e.name.replace('s', ''));
                if (!isNaN(_0x52b98f) && _0x52b98f == _0x50b168.BLOCK) {
                  var _0x314cc3 = this.CreatRemove(_0x49cbba, _0x397466);
                  _0x2e5a5e.addChild(_0x314cc3.node);
                  _0x314cc3.ShowNearWin();
                  _0x314cc3.node.setPosition(_0x592fc6(0x0, 0x0));
                }
              }
            }
          }
        };
        return _0xe9a29a;
      }(_0x2e72bb);
      _0x1d7f25 = _0x49a46a(_0x91ffd8.prototype, "m_smallWinNode", [_0x2ac4d7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x37e894 = _0x49a46a(_0x91ffd8.prototype, "m_sprite_frame", [_0x35ad15], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x10f54b = _0x49a46a(_0x91ffd8.prototype, 'm_winLabel', [_0xf212b5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5800b8 = _0x49a46a(_0x91ffd8.prototype, 'm_dust', [_0x133703], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x536367 = _0x49a46a(_0x91ffd8.prototype, "m_romve", [_0x23fad7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1bfe60 = _0x49a46a(_0x91ffd8.prototype, 'm_featureReel', [_0x5ea7d4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x193259 = _0x49a46a(_0x91ffd8.prototype, "m_fgRoundTransform", [_0x1964d6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5716f6 = _0x49a46a(_0x91ffd8.prototype, "m_fgMultiTransform", [_0x373c45], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "fb872eKfLtIvZFv6Uh7LuXs", "FeatureAck", undefined);
      var _0xd891f1 = function () {};
      var _0x413e74;
      var _0x512887;
      var _0x134fe8;
      var _0x44ccd2;
      var _0x322c85;
      var _0x4a51b9;
      var _0x3fdd4a;
      var _0x29cbef;
      var _0xcc1bae;
      var _0x44c833;
      var _0x26978f;
      var _0x14dc2a;
      var _0x16359f;
      var _0x518ae5;
      var _0x19e0ae;
      var _0x1a5c1a;
      _0xd891f1.FG = {
        'RoundQueue': [{
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x1, 0x1, 0x1, 0x3, 0x3, 0x1]
            }, {
              'Col': [0x1b, 0x1, 0xb, 0x4, 0x4, 0x1b]
            }, {
              'Col': [0x1, 0x6, 0x6, 0x2, 0x2, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x1, 0x2, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x1, 0x4, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x0, 0x1, 0x1b, 0x1b]
            }],
            'ComboStageWin': 1.6,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x6,
              'LineNum': 0x8,
              'Win': 1.6,
              'PosVec': [0x0, 0x1, 0x2, 0x5, 0x7, 0x8, 0xc, 0x14, 0x1a, 0x21]
            }],
            'HitSlatePosVec': [0x6, 0xb, 0x12, 0x13, 0x19, 0x22],
            'FillSymbols': [{
              'Col': [0x4, 0x2, 0x1, 0x6]
            }, {
              'Col': [0x3, 0x2, 0x3]
            }, {
              'Col': [0x6]
            }, {
              'Col': [0x7, 0x1, 0x4]
            }, {
              'Col': [0x2, 0x3]
            }, {
              'Col': [0x0, 0x3]
            }],
            'ChangeSymbols': [{}, {
              'Col': [0x14]
            }, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x3, 0x3, 0x4, 0x2, 0x1, 0x6]
            }, {
              'Col': [0x14, 0x4, 0x4, 0x3, 0x2, 0x3]
            }, {
              'Col': [0x6, 0x6, 0x2, 0x2, 0x1b, 0x6]
            }, {
              'Col': [0x2, 0x1b, 0x1b, 0x7, 0x1, 0x4]
            }, {
              'Col': [0x1b, 0x4, 0x1b, 0x1b, 0x2, 0x3]
            }, {
              'Col': [0x1b, 0x1b, 0x0, 0x1b, 0x0, 0x3]
            }],
            'ComboStageWin': 1.05,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x2,
              'Count': 0x5,
              'LineNum': 0x4,
              'Win': 0.6,
              'PosVec': [0x3, 0x6, 0xa, 0xe, 0xf, 0x12, 0x1c]
            }, {
              'Symbol': 0x6,
              'Count': 0x3,
              'LineNum': 0x3,
              'Win': 0.45,
              'PosVec': [0x5, 0x6, 0xc, 0xd, 0x11]
            }],
            'HitSlatePosVec': [0x10, 0x14, 0x18, 0x13, 0x1b],
            'FillSymbols': [{
              'Col': [0x3, 0x0]
            }, {
              'Col': [0x5, 0x6]
            }, {
              'Col': [0x8, 0x3, 0x1, 0x4, 0x0, 0x0]
            }, {
              'Col': [0xb, 0x0, 0x8]
            }, {
              'Col': [0x3, 0x0, 0x3]
            }, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x3, 0x3, 0x4, 0x1, 0x3, 0x0]
            }, {
              'Col': [0x4, 0x4, 0x3, 0x3, 0x5, 0x6]
            }, {
              'Col': [0x8, 0x3, 0x1, 0x4, 0x0, 0x0]
            }, {
              'Col': [0x7, 0x1, 0x4, 0xb, 0x0, 0x8]
            }, {
              'Col': [0x4, 0x1b, 0x3, 0x3, 0x0, 0x3]
            }, {
              'Col': [0x1b, 0x1b, 0x0, 0x1b, 0x0, 0x3]
            }],
            'ComboStageWin': 0.76,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x3,
              'LineNum': 0x6,
              'Win': 0.36,
              'PosVec': [0x0, 0x1, 0x4, 0x8, 0x9, 0xd]
            }, {
              'Symbol': 0x4,
              'Count': 0x5,
              'LineNum': 0x2,
              'Win': 0.4,
              'PosVec': [0x2, 0x6, 0x7, 0xf, 0x14, 0x18]
            }],
            'HitSlatePosVec': [0x1e, 0x19],
            'FillSymbols': [{
              'Col': [0x5, 0x4, 0x2, 0x2]
            }, {
              'Col': [0x0, 0x0, 0x6, 0x1]
            }, {
              'Col': [0x6, 0x3]
            }, {
              'Col': [0x6]
            }, {
              'Col': [0x2, 0x5]
            }, {
              'Col': [0x0]
            }],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x1, 0x0, 0x5, 0x4, 0x2, 0x2]
            }, {
              'Col': [0x5, 0x6, 0x0, 0x0, 0x6, 0x1]
            }, {
              'Col': [0x8, 0x1, 0x0, 0x0, 0x6, 0x3]
            }, {
              'Col': [0x7, 0x1, 0xb, 0x0, 0x8, 0x6]
            }, {
              'Col': [0x3, 0x3, 0x0, 0x3, 0x2, 0x5]
            }, {
              'Col': [0x1b, 0x0, 0x1b, 0x0, 0x3, 0x0]
            }],
            'ComboStageWin': 2.6,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Count': 0x6,
              'LineNum': 0xc,
              'Win': 2.4,
              'PosVec': [0x1, 0x8, 0x9, 0xe, 0xf, 0x15, 0x1a, 0x1f, 0x21, 0x23]
            }, {
              'Symbol': 0x1,
              'Count': 0x4,
              'LineNum': 0x2,
              'Win': 0.2,
              'PosVec': [0x0, 0xb, 0xd, 0x13, 0x14]
            }],
            'HitSlatePosVec': [0x20, 0x1e],
            'FillSymbols': [{
              'Col': [0x7, 0x3]
            }, {
              'Col': [0x3, 0x3, 0x8]
            }, {
              'Col': [0x1, 0x8, 0x1]
            }, {
              'Col': [0x3, 0xc]
            }, {
              'Col': [0x0]
            }, {
              'Col': [0x8, 0x1, 0x1, 0xd, 0x1]
            }],
            'ChangeSymbols': [{}, {}, {}, {
              'Col': [0x14]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x5, 0x4, 0x2, 0x2, 0x7, 0x3]
            }, {
              'Col': [0x5, 0x6, 0x6, 0x3, 0x3, 0x8]
            }, {
              'Col': [0x8, 0x6, 0x3, 0x1, 0x8, 0x1]
            }, {
              'Col': [0x7, 0x14, 0x8, 0x6, 0x3, 0xc]
            }, {
              'Col': [0x3, 0x3, 0x3, 0x2, 0x5, 0x0]
            }, {
              'Col': [0x3, 0x8, 0x1, 0x1, 0xd, 0x1]
            }],
            'ComboStageWin': 0x6,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x6,
              'LineNum': 0x18,
              'Win': 0x6,
              'PosVec': [0x5, 0x9, 0xa, 0xe, 0x13, 0x16, 0x18, 0x19, 0x1a, 0x1e, 0x22]
            }],
            'FillSymbols': [{
              'Col': [0x1]
            }, {
              'Col': [0x0, 0x2]
            }, {
              'Col': [0x4]
            }, {
              'Col': [0x3, 0x4]
            }, {
              'Col': [0x5, 0x7, 0xc]
            }, {
              'Col': [0x0]
            }],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {
              'Col': [0x14]
            }]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x5, 0x4, 0x2, 0x2, 0x7, 0x1]
            }, {
              'Col': [0x5, 0x6, 0x6, 0x8, 0x0, 0x2]
            }, {
              'Col': [0x8, 0x6, 0x1, 0x8, 0x1, 0x4]
            }, {
              'Col': [0x7, 0x8, 0x6, 0xc, 0x3, 0x4]
            }, {
              'Col': [0x2, 0x5, 0x0, 0x5, 0x7, 0xc]
            }, {
              'Col': [0x8, 0x1, 0x1, 0x14, 0x1, 0x0]
            }],
            'ComboStageMult': 0x1,
            'FillSymbols': [{}, {}, {}, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }],
          'RoundWin': 12.01,
          'AwardTypeFlag': 0x13,
          'FreeRemainRound': 0x6,
          'FreeTotalRound': 0x6
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x3, 0x5, 0x5, 0x6, 0x6, 0x1b]
            }, {
              'Col': [0x1a, 0x1b, 0x2, 0x2, 0x5, 0x1b]
            }, {
              'Col': [0x1b, 0x8, 0x8, 0x6, 0x6, 0x11]
            }, {
              'Col': [0x1b, 0x1b, 0x8, 0x4, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x4, 0x5, 0xf, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0xc, 0x3, 0x3, 0x1a]
            }],
            'ComboStageMult': 0x1,
            'FillSymbols': [{}, {}, {}, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }],
          'AwardTypeFlag': 0x4,
          'FreeRemainRound': 0x5,
          'FreeTotalRound': 0x6
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x1b, 0x1b, 0x8, 0x5, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x6, 0x3, 0x2, 0x2, 0x1a]
            }, {
              'Col': [0x6, 0x8, 0x8, 0x3, 0x3, 0x6]
            }, {
              'Col': [0x1b, 0x1b, 0x1, 0x1, 0x0, 0x1b]
            }, {
              'Col': [0x1b, 0x4, 0x4, 0x4, 0x1a, 0x1b]
            }, {
              'Col': [0x1b, 0x2, 0x1, 0x1, 0x7, 0x1b]
            }],
            'ComboStageMult': 0x1,
            'FillSymbols': [{}, {}, {}, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }],
          'AwardTypeFlag': 0x4,
          'FreeRemainRound': 0x4,
          'FreeTotalRound': 0x6
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x1b, 0x1b, 0x3, 0x3, 0x1b, 0x1a]
            }, {
              'Col': [0x1a, 0x5, 0x5, 0x3, 0x3, 0x1b]
            }, {
              'Col': [0x1b, 0x3, 0x3, 0x1, 0xb, 0x5]
            }, {
              'Col': [0x1b, 0x1a, 0x4, 0x6, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x7, 0x5, 0x5, 0x1b]
            }, {
              'Col': [0x1b, 0x6, 0x6, 0x3, 0x1b, 0x1b]
            }],
            'ComboStageWin': 0.48,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x3,
              'LineNum': 0x8,
              'Win': 0.48,
              'PosVec': [0x2, 0x3, 0x9, 0xa, 0xd, 0xe]
            }],
            'HitSlatePosVec': [0x1, 0x4, 0xb, 0xc, 0x13],
            'FillSymbols': [{
              'Col': [0x4, 0x4, 0x2, 0x0]
            }, {
              'Col': [0x1, 0x5, 0x4]
            }, {
              'Col': [0x1, 0x5, 0x6]
            }, {
              'Col': [0x8]
            }, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}],
            'AddRounds': 0x1,
            'Holy': [0x18]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x1b, 0x1a, 0x4, 0x4, 0x2, 0x0]
            }, {
              'Col': [0x1a, 0x5, 0x5, 0x1, 0x5, 0x4]
            }, {
              'Col': [0x1, 0xb, 0x5, 0x1, 0x5, 0x6]
            }, {
              'Col': [0x1b, 0x4, 0x6, 0x1b, 0x1b, 0x8]
            }, {
              'Col': [0x1b, 0x1b, 0x7, 0x5, 0x5, 0x1b]
            }, {
              'Col': [0x1b, 0x6, 0x6, 0x3, 0x1b, 0x1b]
            }],
            'ComboStageMult': 0x1,
            'FillSymbols': [{}, {}, {}, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }],
          'RoundWin': 0.48,
          'AwardTypeFlag': 0x5,
          'FreeRemainRound': 0x3,
          'FreeTotalRound': 0x6
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x1b, 0x1b, 0x3, 0x3, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x2, 0x2, 0x5, 0x5, 0x1a]
            }, {
              'Col': [0x1b, 0x1b, 0x5, 0x4, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x3, 0x3, 0x4, 0x6, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x1, 0x1, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x4, 0x4, 0x5, 0x1a, 0x1b]
            }],
            'ComboStageMult': 0x1,
            'FillSymbols': [{}, {}, {}, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }],
          'AwardTypeFlag': 0x4,
          'FreeRemainRound': 0x3,
          'FreeTotalRound': 0x7
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x1b, 0x1b, 0x6, 0x6, 0x4, 0x1b]
            }, {
              'Col': [0x1b, 0x6, 0x2, 0x2, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x3, 0x3, 0x1, 0x1, 0xd]
            }, {
              'Col': [0x1b, 0x1b, 0x1, 0x7, 0x1b, 0x1b]
            }, {
              'Col': [0x1a, 0x1a, 0x4, 0x4, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x5, 0x1, 0x1, 0x1b, 0x1b]
            }],
            'ComboStageMult': 0x1,
            'FillSymbols': [{}, {}, {}, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }],
          'AwardTypeFlag': 0x4,
          'FreeRemainRound': 0x2,
          'FreeTotalRound': 0x7
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x4, 0x6, 0x0, 0x0, 0x7, 0x7]
            }, {
              'Col': [0x5, 0x6, 0x3, 0x3, 0x4, 0x1b]
            }, {
              'Col': [0x1b, 0x6, 0x2, 0x2, 0x5, 0x1b]
            }, {
              'Col': [0x1b, 0x0, 0x0, 0x5, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x1, 0x1, 0xc, 0x1b]
            }, {
              'Col': [0x1b, 0x4, 0x3, 0x3, 0x5, 0x1b]
            }],
            'ComboStageWin': 0.15,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x6,
              'Count': 0x3,
              'LineNum': 0x1,
              'Win': 0.15,
              'PosVec': [0x1, 0x7, 0xd]
            }],
            'HitSlatePosVec': [0xc],
            'FillSymbols': [{
              'Col': [0x6]
            }, {
              'Col': [0x8]
            }, {
              'Col': [0x7, 0xe]
            }, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x0, 0x0, 0x7, 0x7, 0x6]
            }, {
              'Col': [0x5, 0x3, 0x3, 0x4, 0x1b, 0x8]
            }, {
              'Col': [0x2, 0x2, 0x5, 0x1b, 0x7, 0xe]
            }, {
              'Col': [0x1b, 0x0, 0x0, 0x5, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x1, 0x1, 0xc, 0x1b]
            }, {
              'Col': [0x1b, 0x4, 0x3, 0x3, 0x5, 0x1b]
            }],
            'ComboStageWin': 0.08,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x4,
              'Count': 0x3,
              'LineNum': 0x1,
              'Win': 0.08,
              'PosVec': [0x0, 0x9, 0x11]
            }],
            'HitSlatePosVec': [0xf, 0xa, 0x17],
            'FillSymbols': [{
              'Col': [0x5]
            }, {
              'Col': [0x0, 0x2]
            }, {
              'Col': [0x4]
            }, {
              'Col': [0x3]
            }, {}, {}],
            'ChangeSymbols': [{}, {}, {
              'Col': [0x14]
            }, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x0, 0x7, 0x7, 0x6, 0x5]
            }, {
              'Col': [0x5, 0x3, 0x3, 0x8, 0x0, 0x2]
            }, {
              'Col': [0x2, 0x2, 0x5, 0x7, 0x14, 0x4]
            }, {
              'Col': [0x1b, 0x0, 0x0, 0x5, 0x1b, 0x3]
            }, {
              'Col': [0x1b, 0x1b, 0x1, 0x1, 0xc, 0x1b]
            }, {
              'Col': [0x1b, 0x4, 0x3, 0x3, 0x5, 0x1b]
            }],
            'ComboStageWin': 0.8,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Count': 0x4,
              'LineNum': 0x4,
              'Win': 0.4,
              'PosVec': [0x0, 0x1, 0xa, 0x10, 0x13, 0x14]
            }, {
              'Symbol': 0x5,
              'Count': 0x4,
              'LineNum': 0x2,
              'Win': 0.4,
              'PosVec': [0x5, 0x6, 0xe, 0x10, 0x15]
            }],
            'HitSlatePosVec': [0x16, 0x12, 0x19],
            'FillSymbols': [{
              'Col': [0x3, 0x6, 0x7]
            }, {
              'Col': [0x0, 0x3]
            }, {
              'Col': [0x6, 0x8]
            }, {
              'Col': [0x4, 0x6, 0x3, 0x7, 0x7]
            }, {
              'Col': [0x0]
            }, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x7, 0x7, 0x6, 0x3, 0x6, 0x7]
            }, {
              'Col': [0x3, 0x3, 0x8, 0x2, 0x0, 0x3]
            }, {
              'Col': [0x2, 0x2, 0x7, 0x4, 0x6, 0x8]
            }, {
              'Col': [0x3, 0x4, 0x6, 0x3, 0x7, 0x7]
            }, {
              'Col': [0x1b, 0x1, 0x1, 0xc, 0x1b, 0x0]
            }, {
              'Col': [0x1b, 0x4, 0x3, 0x3, 0x5, 0x1b]
            }],
            'ComboStageMult': 0x1,
            'FillSymbols': [{}, {}, {}, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }],
          'RoundWin': 1.03,
          'AwardTypeFlag': 0x15,
          'FreeRemainRound': 0x1,
          'FreeTotalRound': 0x7
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x1b, 0x1b, 0x3, 0x1, 0x5, 0x1b]
            }, {
              'Col': [0x5, 0x5, 0x6, 0x1, 0x1, 0x1a]
            }, {
              'Col': [0x1b, 0x0, 0x0, 0x5, 0x5, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x6, 0x5, 0x5, 0x1b]
            }, {
              'Col': [0x1b, 0x6, 0x2, 0x2, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x2, 0x3, 0x1b, 0x1b]
            }],
            'ComboStageWin': 1.6,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x5,
              'Count': 0x4,
              'LineNum': 0x8,
              'Win': 1.6,
              'PosVec': [0x4, 0x6, 0x7, 0xf, 0x10, 0x15, 0x16]
            }],
            'HitSlatePosVec': [0x5, 0x0, 0xc, 0x1, 0x11, 0x1c, 0x17],
            'FillSymbols': [{
              'Col': [0x2, 0x8, 0x8, 0x7]
            }, {
              'Col': [0x5, 0x2]
            }, {
              'Col': [0x3, 0xd, 0x2, 0x4]
            }, {
              'Col': [0x1, 0x3, 0x2]
            }, {
              'Col': [0x2]
            }, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x3, 0x1, 0x2, 0x8, 0x8, 0x7]
            }, {
              'Col': [0x6, 0x1, 0x1, 0x1a, 0x5, 0x2]
            }, {
              'Col': [0x0, 0x0, 0x3, 0xd, 0x2, 0x4]
            }, {
              'Col': [0x1b, 0x1b, 0x6, 0x1, 0x3, 0x2]
            }, {
              'Col': [0x1b, 0x6, 0x2, 0x2, 0x1b, 0x2]
            }, {
              'Col': [0x1b, 0x1b, 0x2, 0x3, 0x1b, 0x1b]
            }],
            'ComboStageWin': 0.6,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x2,
              'Count': 0x6,
              'LineNum': 0x3,
              'Win': 0.6,
              'PosVec': [0x2, 0xb, 0x10, 0x17, 0x1a, 0x1b, 0x1d, 0x20]
            }],
            'HitSlatePosVec': [0x1c, 0x23, 0x1f],
            'FillSymbols': [{
              'Col': [0x7]
            }, {
              'Col': [0x3]
            }, {
              'Col': [0x5]
            }, {
              'Col': [0x2]
            }, {
              'Col': [0x1, 0x4, 0x0, 0x4]
            }, {
              'Col': [0x4, 0x0, 0x3]
            }],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x3, 0x1, 0x8, 0x8, 0x7, 0x7]
            }, {
              'Col': [0x6, 0x1, 0x1, 0x1a, 0x5, 0x3]
            }, {
              'Col': [0x0, 0x0, 0x3, 0xd, 0x4, 0x5]
            }, {
              'Col': [0x1b, 0x1b, 0x6, 0x1, 0x3, 0x2]
            }, {
              'Col': [0x1b, 0x6, 0x1, 0x4, 0x0, 0x4]
            }, {
              'Col': [0x1b, 0x3, 0x1b, 0x4, 0x0, 0x3]
            }],
            'ComboStageWin': 0.24,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x4,
              'LineNum': 0x2,
              'Win': 0.24,
              'PosVec': [0x0, 0xb, 0xe, 0xf, 0x16]
            }],
            'HitSlatePosVec': [0x9],
            'FillSymbols': [{
              'Col': [0x7]
            }, {
              'Col': [0x4, 0x5]
            }, {
              'Col': [0x1]
            }, {
              'Col': [0x11]
            }, {}, {}],
            'ChangeSymbols': [{}, {}, {
              'Col': [0x16]
            }, {}, {}, {}],
            'AddMults': 0x1,
            'Holy': [0x19]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x1, 0x8, 0x8, 0x7, 0x7, 0x7]
            }, {
              'Col': [0x6, 0x1, 0x1, 0x5, 0x4, 0x5]
            }, {
              'Col': [0x0, 0x0, 0x16, 0x4, 0x5, 0x1]
            }, {
              'Col': [0x1b, 0x1b, 0x6, 0x1, 0x2, 0x11]
            }, {
              'Col': [0x1b, 0x6, 0x1, 0x4, 0x0, 0x4]
            }, {
              'Col': [0x1b, 0x3, 0x1b, 0x4, 0x0, 0x3]
            }],
            'ComboStageWin': 1.2,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x5,
              'LineNum': 0x4,
              'Win': 1.2,
              'PosVec': [0x0, 0x7, 0x8, 0xe, 0x11, 0x15, 0x1a]
            }],
            'HitSlatePosVec': [0x20],
            'FillSymbols': [{
              'Col': [0x3]
            }, {
              'Col': [0x4, 0x8]
            }, {
              'Col': [0x7]
            }, {
              'Col': [0xa]
            }, {
              'Col': [0x2]
            }, {
              'Col': [0x6]
            }],
            'ChangeSymbols': [{}, {}, {
              'Col': [0x15]
            }, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x8, 0x8, 0x7, 0x7, 0x7, 0x3]
            }, {
              'Col': [0x6, 0x5, 0x4, 0x5, 0x4, 0x8]
            }, {
              'Col': [0x0, 0x0, 0x15, 0x4, 0x5, 0x7]
            }, {
              'Col': [0x1b, 0x1b, 0x6, 0x2, 0x11, 0xa]
            }, {
              'Col': [0x1b, 0x6, 0x4, 0x0, 0x4, 0x2]
            }, {
              'Col': [0x1b, 0x3, 0x4, 0x0, 0x3, 0x6]
            }],
            'ComboStageWin': 1.2,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x8,
              'Count': 0x3,
              'LineNum': 0x2,
              'Win': 1.2,
              'PosVec': [0x0, 0x1, 0xb, 0xe]
            }],
            'FillSymbols': [{
              'Col': [0x5, 0x8]
            }, {
              'Col': [0x4]
            }, {}, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {
              'Col': [0x14]
            }, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x7, 0x7, 0x7, 0x3, 0x5, 0x8]
            }, {
              'Col': [0x6, 0x5, 0x4, 0x5, 0x4, 0x4]
            }, {
              'Col': [0x0, 0x0, 0x14, 0x4, 0x5, 0x7]
            }, {
              'Col': [0x1b, 0x1b, 0x6, 0x2, 0x11, 0xa]
            }, {
              'Col': [0x1b, 0x6, 0x4, 0x0, 0x4, 0x2]
            }, {
              'Col': [0x1b, 0x3, 0x4, 0x0, 0x3, 0x6]
            }],
            'ComboStageWin': 0.8,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x5,
              'Count': 0x3,
              'LineNum': 0x4,
              'Win': 0.8,
              'PosVec': [0x4, 0x7, 0x9, 0xe, 0x10]
            }],
            'FillSymbols': [{
              'Col': [0x7]
            }, {
              'Col': [0x7, 0x0]
            }, {
              'Col': [0x8, 0x6]
            }, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x7, 0x7, 0x7, 0x3, 0x8, 0x7]
            }, {
              'Col': [0x6, 0x4, 0x4, 0x4, 0x7, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x4, 0x7, 0x8, 0x6]
            }, {
              'Col': [0x1b, 0x1b, 0x6, 0x2, 0x11, 0xa]
            }, {
              'Col': [0x1b, 0x6, 0x4, 0x0, 0x4, 0x2]
            }, {
              'Col': [0x1b, 0x3, 0x4, 0x0, 0x3, 0x6]
            }],
            'ComboStageWin': 2.4,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x7,
              'Count': 0x4,
              'LineNum': 0x4,
              'Win': 2.4,
              'PosVec': [0x0, 0x1, 0x2, 0x5, 0xa, 0xf, 0x16]
            }],
            'FillSymbols': [{
              'Col': [0x1, 0x6, 0x7, 0x3]
            }, {
              'Col': [0x2]
            }, {
              'Col': [0x3]
            }, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {
              'Col': [0x14]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x3, 0x8, 0x1, 0x6, 0x7, 0x3]
            }, {
              'Col': [0x6, 0x4, 0x4, 0x4, 0x0, 0x2]
            }, {
              'Col': [0x0, 0x0, 0x4, 0x8, 0x6, 0x3]
            }, {
              'Col': [0x1b, 0x1b, 0x6, 0x2, 0x14, 0xa]
            }, {
              'Col': [0x1b, 0x6, 0x4, 0x0, 0x4, 0x2]
            }, {
              'Col': [0x1b, 0x3, 0x4, 0x0, 0x3, 0x6]
            }],
            'ComboStageWin': 0x2,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x6,
              'Count': 0x6,
              'LineNum': 0x2,
              'Win': 0x2,
              'PosVec': [0x3, 0x6, 0x10, 0x14, 0x16, 0x19, 0x23]
            }],
            'HitSlatePosVec': [0x13, 0x18],
            'FillSymbols': [{
              'Col': [0x4]
            }, {
              'Col': [0x1]
            }, {
              'Col': [0x2]
            }, {
              'Col': [0x1, 0x6, 0x2]
            }, {
              'Col': [0x0, 0x6]
            }, {
              'Col': [0xf]
            }],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x3, 0x8, 0x1, 0x7, 0x3, 0x4]
            }, {
              'Col': [0x4, 0x4, 0x4, 0x0, 0x2, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x4, 0x8, 0x3, 0x2]
            }, {
              'Col': [0x1b, 0x2, 0xa, 0x1, 0x6, 0x2]
            }, {
              'Col': [0x4, 0x0, 0x4, 0x2, 0x0, 0x6]
            }, {
              'Col': [0x1b, 0x3, 0x4, 0x0, 0x3, 0xf]
            }],
            'ComboStageWin': 0.48,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x4,
              'Count': 0x3,
              'LineNum': 0x3,
              'Win': 0.48,
              'PosVec': [0x5, 0x6, 0x7, 0x8, 0xe]
            }],
            'FillSymbols': [{
              'Col': [0x2]
            }, {
              'Col': [0x1, 0x2, 0x3]
            }, {
              'Col': [0x6]
            }, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x3, 0x8, 0x1, 0x7, 0x3, 0x2]
            }, {
              'Col': [0x0, 0x2, 0x1, 0x1, 0x2, 0x3]
            }, {
              'Col': [0x0, 0x0, 0x8, 0x3, 0x2, 0x6]
            }, {
              'Col': [0x1b, 0x2, 0xa, 0x1, 0x6, 0x2]
            }, {
              'Col': [0x4, 0x0, 0x4, 0x2, 0x0, 0x6]
            }, {
              'Col': [0x1b, 0x3, 0x4, 0x0, 0x3, 0xf]
            }],
            'ComboStageWin': 1.44,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x2,
              'Count': 0x5,
              'LineNum': 0x4,
              'Win': 1.2,
              'PosVec': [0x5, 0x7, 0xa, 0x10, 0x13, 0x17, 0x1b]
            }, {
              'Symbol': 0x3,
              'Count': 0x3,
              'LineNum': 0x2,
              'Win': 0.24,
              'PosVec': [0x0, 0x4, 0xb, 0xf]
            }],
            'HitSlatePosVec': [0x12],
            'FillSymbols': [{
              'Col': [0x0, 0x8, 0x5]
            }, {
              'Col': [0x6, 0x1, 0x8]
            }, {
              'Col': [0x1, 0x4]
            }, {
              'Col': [0x7, 0x5, 0x0]
            }, {
              'Col': [0x8]
            }, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x8, 0x1, 0x7, 0x0, 0x8, 0x5]
            }, {
              'Col': [0x0, 0x1, 0x1, 0x6, 0x1, 0x8]
            }, {
              'Col': [0x0, 0x0, 0x8, 0x6, 0x1, 0x4]
            }, {
              'Col': [0xa, 0x1, 0x6, 0x7, 0x5, 0x0]
            }, {
              'Col': [0x4, 0x0, 0x4, 0x0, 0x6, 0x8]
            }, {
              'Col': [0x1b, 0x3, 0x4, 0x0, 0x3, 0xf]
            }],
            'ComboStageWin': 0x5,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Count': 0x6,
              'LineNum': 0x8,
              'Win': 3.2,
              'PosVec': [0x3, 0x6, 0xc, 0xd, 0x12, 0x17, 0x19, 0x1b, 0x21]
            }, {
              'Symbol': 0x1,
              'Count': 0x4,
              'LineNum': 0x3,
              'Win': 0.6,
              'PosVec': [0x1, 0x7, 0x8, 0xa, 0x10, 0x13]
            }, {
              'Symbol': 0x8,
              'Count': 0x3,
              'LineNum': 0x2,
              'Win': 1.2,
              'PosVec': [0x0, 0x4, 0xb, 0xe]
            }],
            'FillSymbols': [{
              'Col': [0x6, 0x6, 0x1, 0x1]
            }, {
              'Col': [0x6, 0x1, 0x3, 0x3, 0x6]
            }, {
              'Col': [0x1, 0x1, 0x0, 0xd]
            }, {
              'Col': [0x2, 0x8]
            }, {
              'Col': [0x6, 0x1]
            }, {
              'Col': [0x3]
            }],
            'ChangeSymbols': [{}, {}, {}, {
              'Col': [0x15]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x7, 0x5, 0x6, 0x6, 0x1, 0x1]
            }, {
              'Col': [0x6, 0x6, 0x1, 0x3, 0x3, 0x6]
            }, {
              'Col': [0x6, 0x4, 0x1, 0x1, 0x0, 0xd]
            }, {
              'Col': [0x15, 0x6, 0x7, 0x5, 0x2, 0x8]
            }, {
              'Col': [0x4, 0x4, 0x6, 0x8, 0x6, 0x1]
            }, {
              'Col': [0x1b, 0x3, 0x4, 0x3, 0xf, 0x3]
            }],
            'ComboStageWin': 0x12,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x5,
              'LineNum': 0x4,
              'Win': 1.2,
              'PosVec': [0x4, 0x5, 0x8, 0xe, 0xf, 0x12, 0x1d]
            }, {
              'Symbol': 0x6,
              'Count': 0x5,
              'LineNum': 0x18,
              'Win': 16.8,
              'PosVec': [0x2, 0x3, 0x6, 0x7, 0xb, 0xc, 0x12, 0x13, 0x1a, 0x1c]
            }],
            'FillSymbols': [{
              'Col': [0x3, 0x0, 0x8, 0x7]
            }, {
              'Col': [0x2, 0xd, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x2, 0x4]
            }, {
              'Col': [0x3]
            }, {
              'Col': [0x6, 0x8, 0x8]
            }, {}],
            'ChangeSymbols': [{}, {}, {}, {
              'Col': [0x14]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x7, 0x5, 0x3, 0x0, 0x8, 0x7]
            }, {
              'Col': [0x3, 0x3, 0x2, 0xd, 0x0, 0x0]
            }, {
              'Col': [0x4, 0x0, 0xd, 0x2, 0x2, 0x4]
            }, {
              'Col': [0x14, 0x7, 0x5, 0x2, 0x8, 0x3]
            }, {
              'Col': [0x4, 0x4, 0x8, 0x6, 0x8, 0x8]
            }, {
              'Col': [0x1b, 0x3, 0x4, 0x3, 0xf, 0x3]
            }],
            'ComboStageWin': 1.84,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Count': 0x4,
              'LineNum': 0x2,
              'Win': 0.4,
              'PosVec': [0x3, 0xa, 0xb, 0xd, 0x12]
            }, {
              'Symbol': 0x3,
              'Count': 0x4,
              'LineNum': 0x6,
              'Win': 1.44,
              'PosVec': [0x2, 0x6, 0x7, 0x9, 0xe, 0x12, 0x17]
            }],
            'FillSymbols': [{
              'Col': [0x5, 0x6]
            }, {
              'Col': [0x1, 0x6, 0x3, 0x6]
            }, {
              'Col': [0x4]
            }, {
              'Col': [0x4, 0x3]
            }, {}, {}],
            'ChangeSymbols': [{}, {
              'Col': [0x16]
            }, {
              'Col': [0x14]
            }, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x7, 0x5, 0x8, 0x7, 0x5, 0x6]
            }, {
              'Col': [0x2, 0x16, 0x1, 0x6, 0x3, 0x6]
            }, {
              'Col': [0x4, 0x14, 0x2, 0x2, 0x4, 0x4]
            }, {
              'Col': [0x7, 0x5, 0x2, 0x8, 0x4, 0x3]
            }, {
              'Col': [0x4, 0x4, 0x8, 0x6, 0x8, 0x8]
            }, {
              'Col': [0x1b, 0x3, 0x4, 0x3, 0xf, 0x3]
            }],
            'ComboStageWin': 7.7,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x5,
              'Count': 0x4,
              'LineNum': 0x2,
              'Win': 0.8,
              'PosVec': [0x1, 0x4, 0x7, 0xd, 0x13]
            }, {
              'Symbol': 0x6,
              'Count': 0x3,
              'LineNum': 0x3,
              'Win': 0.9,
              'PosVec': [0x5, 0x7, 0x9, 0xb, 0xd]
            }, {
              'Symbol': 0x7,
              'Count': 0x4,
              'LineNum': 0x2,
              'Win': 1.2,
              'PosVec': [0x0, 0x3, 0x7, 0xd, 0x12]
            }, {
              'Symbol': 0x8,
              'Count': 0x5,
              'LineNum': 0x3,
              'Win': 4.8,
              'PosVec': [0x2, 0x7, 0xd, 0x15, 0x1a, 0x1c, 0x1d]
            }],
            'FillSymbols': [{
              'Col': [0x1, 0x2, 0x8, 0x5, 0x4, 0x7]
            }, {
              'Col': [0x4, 0x3]
            }, {
              'Col': [0x6]
            }, {
              'Col': [0x7, 0x1, 0x0]
            }, {
              'Col': [0x8, 0x2, 0x1]
            }, {}],
            'ChangeSymbols': [{}, {
              'Col': [0x15]
            }, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x1, 0x2, 0x8, 0x5, 0x4, 0x7]
            }, {
              'Col': [0x2, 0x15, 0x1, 0x3, 0x4, 0x3]
            }, {
              'Col': [0x4, 0x2, 0x2, 0x4, 0x4, 0x6]
            }, {
              'Col': [0x2, 0x4, 0x3, 0x7, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x4, 0x6, 0x8, 0x2, 0x1]
            }, {
              'Col': [0x1b, 0x3, 0x4, 0x3, 0xf, 0x3]
            }],
            'ComboStageWin': 8.4,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x2,
              'Count': 0x5,
              'LineNum': 0x4,
              'Win': 1.2,
              'PosVec': [0x1, 0x6, 0x7, 0xd, 0xe, 0x12, 0x1c]
            }, {
              'Symbol': 0x4,
              'Count': 0x6,
              'LineNum': 0xc,
              'Win': 7.2,
              'PosVec': [0x4, 0x7, 0xa, 0xc, 0xf, 0x10, 0x13, 0x18, 0x19, 0x20]
            }],
            'HitSlatePosVec': [0x1e],
            'FillSymbols': [{
              'Col': [0x4, 0x3]
            }, {
              'Col': [0x6, 0x2]
            }, {
              'Col': [0x8, 0xf, 0x6, 0x1, 0x8]
            }, {
              'Col': [0x5, 0x0]
            }, {
              'Col': [0x6, 0x2, 0x2]
            }, {
              'Col': [0x7, 0x2]
            }],
            'ChangeSymbols': [{}, {
              'Col': [0x14]
            }, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x1, 0x8, 0x5, 0x7, 0x4, 0x3]
            }, {
              'Col': [0x14, 0x1, 0x3, 0x3, 0x6, 0x2]
            }, {
              'Col': [0x6, 0x8, 0xf, 0x6, 0x1, 0x8]
            }, {
              'Col': [0x3, 0x7, 0x1, 0x0, 0x5, 0x0]
            }, {
              'Col': [0x6, 0x8, 0x1, 0x6, 0x2, 0x2]
            }, {
              'Col': [0x3, 0x3, 0xf, 0x3, 0x7, 0x2]
            }],
            'ComboStageWin': 2.2,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x5,
              'LineNum': 0x2,
              'Win': 0.6,
              'PosVec': [0x0, 0x6, 0x7, 0x10, 0x14, 0x1a]
            }, {
              'Symbol': 0x5,
              'Count': 0x4,
              'LineNum': 0x1,
              'Win': 0.4,
              'PosVec': [0x2, 0x6, 0xe, 0x16]
            }, {
              'Symbol': 0x8,
              'Count': 0x3,
              'LineNum': 0x2,
              'Win': 1.2,
              'PosVec': [0x1, 0x6, 0xd, 0x11]
            }],
            'FillSymbols': [{
              'Col': [0x4, 0x7, 0x1]
            }, {
              'Col': [0x7, 0x6]
            }, {
              'Col': [0x0, 0x2, 0x5]
            }, {
              'Col': [0xd, 0x4]
            }, {
              'Col': [0x5]
            }, {}],
            'ChangeSymbols': [{}, {}, {
              'Col': [0x17]
            }, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x7, 0x4, 0x3, 0x4, 0x7, 0x1]
            }, {
              'Col': [0x3, 0x3, 0x6, 0x2, 0x7, 0x6]
            }, {
              'Col': [0x6, 0x17, 0x6, 0x0, 0x2, 0x5]
            }, {
              'Col': [0x3, 0x7, 0x0, 0x0, 0xd, 0x4]
            }, {
              'Col': [0x6, 0x8, 0x6, 0x2, 0x2, 0x5]
            }, {
              'Col': [0x3, 0x3, 0xf, 0x3, 0x7, 0x2]
            }],
            'ComboStageWin': 2.16,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x4,
              'LineNum': 0x4,
              'Win': 0.96,
              'PosVec': [0x2, 0x6, 0x7, 0xd, 0x12, 0x16]
            }, {
              'Symbol': 0x7,
              'Count': 0x4,
              'LineNum': 0x2,
              'Win': 1.2,
              'PosVec': [0x0, 0x4, 0xa, 0xd, 0x13]
            }],
            'FillSymbols': [{
              'Col': [0x6, 0x2, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x8]
            }, {}, {
              'Col': [0x4, 0x5]
            }, {}, {}],
            'ChangeSymbols': [{}, {}, {
              'Col': [0x16]
            }, {
              'Col': [0x17]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x4, 0x1, 0x6, 0x2, 0x1]
            }, {
              'Col': [0x6, 0x2, 0x6, 0x1, 0x1, 0x8]
            }, {
              'Col': [0x6, 0x16, 0x6, 0x0, 0x2, 0x5]
            }, {
              'Col': [0x0, 0x0, 0x17, 0x4, 0x4, 0x5]
            }, {
              'Col': [0x6, 0x8, 0x6, 0x2, 0x2, 0x5]
            }, {
              'Col': [0x3, 0x3, 0xf, 0x3, 0x7, 0x2]
            }],
            'ComboStageWin': 10.8,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x4,
              'LineNum': 0x4,
              'Win': 0.8,
              'PosVec': [0x2, 0x5, 0x9, 0xa, 0xd, 0x14]
            }, {
              'Symbol': 0x2,
              'Count': 0x6,
              'LineNum': 0x4,
              'Win': 1.6,
              'PosVec': [0x4, 0x7, 0xd, 0x10, 0x14, 0x1b, 0x1c, 0x23]
            }, {
              'Symbol': 0x6,
              'Count': 0x5,
              'LineNum': 0xc,
              'Win': 8.4,
              'PosVec': [0x3, 0x6, 0x8, 0xc, 0xd, 0xe, 0x14, 0x18, 0x1a]
            }],
            'FillSymbols': [{
              'Col': [0x2, 0x2, 0x6, 0x7]
            }, {
              'Col': [0x6, 0x3, 0x7, 0x2, 0x0]
            }, {
              'Col': [0x5, 0x6, 0x2]
            }, {}, {
              'Col': [0x5, 0x8, 0x2, 0x6]
            }, {
              'Col': [0x5]
            }],
            'ChangeSymbols': [{}, {}, {
              'Col': [0x15]
            }, {
              'Col': [0x16]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x4, 0x2, 0x2, 0x6, 0x7]
            }, {
              'Col': [0x8, 0x6, 0x3, 0x7, 0x2, 0x0]
            }, {
              'Col': [0x15, 0x0, 0x5, 0x5, 0x6, 0x2]
            }, {
              'Col': [0x0, 0x0, 0x16, 0x4, 0x4, 0x5]
            }, {
              'Col': [0x8, 0x5, 0x5, 0x8, 0x2, 0x6]
            }, {
              'Col': [0x3, 0x3, 0xf, 0x3, 0x7, 0x5]
            }],
            'ComboStageWin': 3.2,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x2,
              'Count': 0x5,
              'LineNum': 0x4,
              'Win': 1.2,
              'PosVec': [0x2, 0x3, 0xa, 0xc, 0x11, 0x14, 0x1c]
            }, {
              'Symbol': 0x6,
              'Count': 0x5,
              'LineNum': 0x2,
              'Win': 1.4,
              'PosVec': [0x4, 0x7, 0xc, 0x10, 0x14, 0x1d]
            }, {
              'Symbol': 0x7,
              'Count': 0x4,
              'LineNum': 0x1,
              'Win': 0.6,
              'PosVec': [0x5, 0x9, 0xc, 0x14]
            }],
            'FillSymbols': [{
              'Col': [0x2, 0x4, 0x7, 0x2]
            }, {
              'Col': [0x5, 0x0, 0x2]
            }, {
              'Col': [0x7, 0x3]
            }, {}, {
              'Col': [0x1, 0x2]
            }, {}],
            'ChangeSymbols': [{}, {}, {
              'Col': [0x14]
            }, {
              'Col': [0x15]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x4, 0x2, 0x4, 0x7, 0x2]
            }, {
              'Col': [0x8, 0x3, 0x0, 0x5, 0x0, 0x2]
            }, {
              'Col': [0x14, 0x0, 0x5, 0x5, 0x7, 0x3]
            }, {
              'Col': [0x0, 0x0, 0x15, 0x4, 0x4, 0x5]
            }, {
              'Col': [0x8, 0x5, 0x5, 0x8, 0x1, 0x2]
            }, {
              'Col': [0x3, 0x3, 0xf, 0x3, 0x7, 0x5]
            }],
            'ComboStageWin': 0.6,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x2,
              'Count': 0x5,
              'LineNum': 0x2,
              'Win': 0.6,
              'PosVec': [0x2, 0x5, 0xb, 0xc, 0x14, 0x1d]
            }],
            'FillSymbols': [{
              'Col': [0x6, 0x4]
            }, {
              'Col': [0x2]
            }, {
              'Col': [0x4]
            }, {}, {
              'Col': [0xb]
            }, {}],
            'ChangeSymbols': [{}, {}, {}, {
              'Col': [0x14]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x4, 0x4, 0x7, 0x6, 0x4]
            }, {
              'Col': [0x8, 0x3, 0x0, 0x5, 0x0, 0x2]
            }, {
              'Col': [0x0, 0x5, 0x5, 0x7, 0x3, 0x4]
            }, {
              'Col': [0x0, 0x0, 0x14, 0x4, 0x4, 0x5]
            }, {
              'Col': [0x8, 0x5, 0x5, 0x8, 0x1, 0xb]
            }, {
              'Col': [0x3, 0x3, 0xf, 0x3, 0x7, 0x5]
            }],
            'ComboStageWin': 6.3,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x6,
              'Count': 0x5,
              'LineNum': 0x9,
              'Win': 6.3,
              'PosVec': [0x4, 0x8, 0xa, 0xb, 0xc, 0x12, 0x13, 0x14, 0x1c]
            }],
            'FillSymbols': [{
              'Col': [0x5]
            }, {
              'Col': [0xf, 0x5, 0x6]
            }, {
              'Col': [0x0]
            }, {
              'Col': [0x0, 0x4, 0x1]
            }, {
              'Col': [0x6]
            }, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}],
            'FGChange': [0x13, 0xa, 0x8, 0xc, 0x12, 0x1c, 0xb],
            'FGChangeSymbol': 0x6
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x4, 0x4, 0x7, 0x4, 0x5]
            }, {
              'Col': [0x8, 0x3, 0x5, 0xf, 0x5, 0x6]
            }, {
              'Col': [0x5, 0x5, 0x7, 0x3, 0x4, 0x0]
            }, {
              'Col': [0x4, 0x4, 0x5, 0x0, 0x4, 0x1]
            }, {
              'Col': [0x8, 0x5, 0x5, 0x8, 0xb, 0x6]
            }, {
              'Col': [0x3, 0x3, 0xf, 0x3, 0x7, 0x5]
            }],
            'ComboStageWin': 19.2,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x5,
              'Count': 0x6,
              'LineNum': 0x18,
              'Win': 19.2,
              'PosVec': [0x5, 0x8, 0x9, 0xa, 0xc, 0xd, 0x14, 0x19, 0x1a, 0x20, 0x23]
            }],
            'FillSymbols': [{
              'Col': [0x8]
            }, {
              'Col': [0x5, 0x2]
            }, {
              'Col': [0x5, 0x1]
            }, {
              'Col': [0x8]
            }, {
              'Col': [0x5, 0x7]
            }, {
              'Col': [0x2]
            }],
            'ChangeSymbols': [{}, {
              'Col': [0x16]
            }, {}, {}, {}, {
              'Col': [0x14]
            }]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x4, 0x4, 0x7, 0x4, 0x8]
            }, {
              'Col': [0x8, 0x3, 0x16, 0x6, 0x5, 0x2]
            }, {
              'Col': [0x7, 0x3, 0x4, 0x0, 0x5, 0x1]
            }, {
              'Col': [0x4, 0x4, 0x0, 0x4, 0x1, 0x8]
            }, {
              'Col': [0x8, 0x8, 0xb, 0x6, 0x5, 0x7]
            }, {
              'Col': [0x3, 0x3, 0x14, 0x3, 0x7, 0x2]
            }],
            'ComboStageWin': 0x4,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x4,
              'Count': 0x4,
              'LineNum': 0xc,
              'Win': 3.6,
              'PosVec': [0x0, 0x1, 0x2, 0x4, 0x8, 0xe, 0x12, 0x13, 0x15]
            }, {
              'Symbol': 0x7,
              'Count': 0x3,
              'LineNum': 0x1,
              'Win': 0.4,
              'PosVec': [0x3, 0x8, 0xc]
            }],
            'FillSymbols': [{
              'Col': [0x1, 0x2, 0x4, 0x5, 0x3]
            }, {}, {
              'Col': [0x8, 0x2]
            }, {
              'Col': [0x6, 0xc, 0x0]
            }, {}, {}],
            'ChangeSymbols': [{}, {
              'Col': [0x15]
            }, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x8, 0x1, 0x2, 0x4, 0x5, 0x3]
            }, {
              'Col': [0x8, 0x3, 0x15, 0x6, 0x5, 0x2]
            }, {
              'Col': [0x3, 0x0, 0x5, 0x1, 0x8, 0x2]
            }, {
              'Col': [0x0, 0x1, 0x8, 0x6, 0xc, 0x0]
            }, {
              'Col': [0x8, 0x8, 0xb, 0x6, 0x5, 0x7]
            }, {
              'Col': [0x3, 0x3, 0x14, 0x3, 0x7, 0x2]
            }],
            'ComboStageWin': 9.44,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x6,
              'LineNum': 0x1,
              'Win': 0.4,
              'PosVec': [0x1, 0x8, 0xf, 0x13, 0x1a, 0x20]
            }, {
              'Symbol': 0x2,
              'Count': 0x4,
              'LineNum': 0x2,
              'Win': 0.4,
              'PosVec': [0x2, 0x8, 0xb, 0x11, 0x16]
            }, {
              'Symbol': 0x3,
              'Count': 0x3,
              'LineNum': 0x2,
              'Win': 0.24,
              'PosVec': [0x5, 0x7, 0x8, 0xc]
            }, {
              'Symbol': 0x5,
              'Count': 0x3,
              'LineNum': 0x2,
              'Win': 0.4,
              'PosVec': [0x4, 0x8, 0xa, 0xe]
            }, {
              'Symbol': 0x8,
              'Count': 0x6,
              'LineNum': 0x4,
              'Win': 0x8,
              'PosVec': [0x0, 0x6, 0x8, 0x10, 0x14, 0x18, 0x19, 0x20]
            }],
            'FillSymbols': [{
              'Col': [0x0, 0x0, 0x6, 0x7, 0x1]
            }, {
              'Col': [0x6, 0x6, 0x2, 0x8]
            }, {
              'Col': [0x2, 0x6, 0x3, 0x10, 0xd]
            }, {
              'Col': [0x2, 0xb]
            }, {
              'Col': [0x3, 0xd]
            }, {
              'Col': [0x6]
            }],
            'ChangeSymbols': [{}, {
              'Col': [0x14]
            }, {}, {
              'Col': [0x15]
            }, {
              'Col': [0x14]
            }, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x0, 0x0, 0x6, 0x7, 0x1]
            }, {
              'Col': [0x14, 0x6, 0x6, 0x6, 0x2, 0x8]
            }, {
              'Col': [0x0, 0x2, 0x6, 0x3, 0x10, 0xd]
            }, {
              'Col': [0x0, 0x6, 0x15, 0x0, 0x2, 0xb]
            }, {
              'Col': [0x14, 0x6, 0x5, 0x7, 0x3, 0xd]
            }, {
              'Col': [0x3, 0x3, 0x3, 0x7, 0x2, 0x6]
            }],
            'ComboStageWin': 33.8,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Count': 0x5,
              'LineNum': 0x6,
              'Win': 1.8,
              'PosVec': [0x1, 0x2, 0x6, 0xc, 0x12, 0x14, 0x15, 0x18]
            }, {
              'Symbol': 0x6,
              'Count': 0x6,
              'LineNum': 0x20,
              'Win': 0x20,
              'PosVec': [0x3, 0x6, 0x7, 0x8, 0x9, 0xe, 0x10, 0x13, 0x14, 0x18, 0x19, 0x23]
            }],
            'FillSymbols': [{
              'Col': [0x3, 0x6, 0x1]
            }, {
              'Col': [0x1, 0x5, 0x1, 0x4]
            }, {
              'Col': [0x4, 0x3]
            }, {
              'Col': [0x2, 0x12, 0x3]
            }, {
              'Col': [0x3, 0x4]
            }, {
              'Col': [0x2]
            }],
            'ChangeSymbols': [{}, {}, {
              'Col': [0x14]
            }, {
              'Col': [0x14]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x7, 0x1, 0x3, 0x6, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x1, 0x5, 0x1, 0x4]
            }, {
              'Col': [0x2, 0x3, 0x14, 0xd, 0x4, 0x3]
            }, {
              'Col': [0x14, 0x2, 0xb, 0x2, 0x12, 0x3]
            }, {
              'Col': [0x5, 0x7, 0x3, 0xd, 0x3, 0x4]
            }, {
              'Col': [0x3, 0x3, 0x3, 0x7, 0x2, 0x2]
            }],
            'ComboStageWin': 2.4,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x4,
              'LineNum': 0x8,
              'Win': 1.6,
              'PosVec': [0x2, 0x5, 0x8, 0xa, 0xe, 0x12, 0x14]
            }, {
              'Symbol': 0x4,
              'Count': 0x5,
              'LineNum': 0x2,
              'Win': 0.8,
              'PosVec': [0x0, 0xb, 0xe, 0x10, 0x12, 0x1d]
            }],
            'FillSymbols': [{
              'Col': [0x3, 0x1, 0x4]
            }, {
              'Col': [0x6, 0xd, 0x5]
            }, {
              'Col': [0x8, 0x7]
            }, {
              'Col': [0xb]
            }, {
              'Col': [0x0]
            }, {}],
            'ChangeSymbols': [{}, {}, {}, {
              'Col': [0x14]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x7, 0x3, 0x6, 0x3, 0x1, 0x4]
            }, {
              'Col': [0x2, 0x8, 0x5, 0x6, 0xd, 0x5]
            }, {
              'Col': [0x2, 0x3, 0xd, 0x3, 0x8, 0x7]
            }, {
              'Col': [0x2, 0x14, 0x2, 0x12, 0x3, 0xb]
            }, {
              'Col': [0x5, 0x7, 0x3, 0xd, 0x3, 0x0]
            }, {
              'Col': [0x3, 0x3, 0x3, 0x7, 0x2, 0x2]
            }],
            'ComboStageWin': 0x36,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x6,
              'LineNum': 0x6c,
              'Win': 0x36,
              'PosVec': [0x1, 0x3, 0xa, 0xd, 0xe, 0xf, 0x13, 0x16, 0x1a, 0x1b, 0x1c, 0x1e, 0x1f, 0x20]
            }],
            'FillSymbols': [{
              'Col': [0x8, 0x8]
            }, {}, {
              'Col': [0x0, 0x0]
            }, {
              'Col': [0x1, 0x12]
            }, {
              'Col': [0xf, 0x5]
            }, {
              'Col': [0x1, 0x7, 0x6]
            }],
            'ChangeSymbols': [{}, {
              'Col': [0x15]
            }, {
              'Col': [0x14]
            }, {}, {
              'Col': [0x14]
            }, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x7, 0x6, 0x1, 0x4, 0x8, 0x8]
            }, {
              'Col': [0x2, 0x8, 0x5, 0x6, 0x15, 0x5]
            }, {
              'Col': [0x2, 0x14, 0x8, 0x7, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x2, 0x12, 0xb, 0x1, 0x12]
            }, {
              'Col': [0x5, 0x7, 0x14, 0x0, 0xf, 0x5]
            }, {
              'Col': [0x7, 0x2, 0x2, 0x1, 0x7, 0x6]
            }],
            'ComboStageWin': 27.96,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x6,
              'LineNum': 0x2,
              'Win': 0.8,
              'PosVec': [0x2, 0xa, 0xd, 0x15, 0x16, 0x1a, 0x21]
            }, {
              'Symbol': 0x4,
              'Count': 0x3,
              'LineNum': 0x1,
              'Win': 0.16,
              'PosVec': [0x3, 0xa, 0xd]
            }, {
              'Symbol': 0x6,
              'Count': 0x3,
              'LineNum': 0x2,
              'Win': 0.6,
              'PosVec': [0x1, 0x9, 0xa, 0xd]
            }, {
              'Symbol': 0x7,
              'Count': 0x3,
              'LineNum': 0x2,
              'Win': 0.8,
              'PosVec': [0x0, 0xa, 0xd, 0xf]
            }, {
              'Symbol': 0x8,
              'Count': 0x5,
              'LineNum': 0x10,
              'Win': 25.6,
              'PosVec': [0x4, 0x5, 0x7, 0xa, 0xd, 0xe, 0x14, 0x17, 0x1a]
            }],
            'FillSymbols': [{
              'Col': [0x5, 0x7, 0x5, 0x6, 0x0, 0x2]
            }, {
              'Col': [0x7, 0x1]
            }, {
              'Col': [0x6, 0x5, 0x7]
            }, {
              'Col': [0x3]
            }, {
              'Col': [0x8]
            }, {
              'Col': [0x4]
            }],
            'ChangeSymbols': [{}, {
              'Col': [0x14]
            }, {}, {
              'Col': [0x15, 0x14, 0x14]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x5, 0x7, 0x5, 0x6, 0x0, 0x2]
            }, {
              'Col': [0x2, 0x5, 0x14, 0x5, 0x7, 0x1]
            }, {
              'Col': [0x2, 0x0, 0x0, 0x6, 0x5, 0x7]
            }, {
              'Col': [0x2, 0x2, 0x15, 0x14, 0x14, 0x3]
            }, {
              'Col': [0x5, 0x7, 0x0, 0xf, 0x5, 0x8]
            }, {
              'Col': [0x7, 0x2, 0x2, 0x7, 0x6, 0x4]
            }],
            'ComboStageWin': 52.1,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Count': 0x5,
              'LineNum': 0x6,
              'Win': 1.8,
              'PosVec': [0x4, 0x8, 0xd, 0xe, 0x14, 0x15, 0x16, 0x1a]
            }, {
              'Symbol': 0x2,
              'Count': 0x4,
              'LineNum': 0xa,
              'Win': 0x2,
              'PosVec': [0x5, 0x6, 0x8, 0xc, 0x12, 0x13, 0x14, 0x15, 0x16]
            }, {
              'Symbol': 0x5,
              'Count': 0x5,
              'LineNum': 0x36,
              'Win': 32.4,
              'PosVec': [0x0, 0x2, 0x7, 0x8, 0x9, 0x10, 0x14, 0x15, 0x16, 0x18, 0x1b, 0x1c]
            }, {
              'Symbol': 0x6,
              'Count': 0x4,
              'LineNum': 0x3,
              'Win': 1.5,
              'PosVec': [0x3, 0x8, 0xf, 0x14, 0x15, 0x16]
            }, {
              'Symbol': 0x7,
              'Count': 0x6,
              'LineNum': 0xc,
              'Win': 14.4,
              'PosVec': [0x1, 0x8, 0xa, 0x11, 0x14, 0x15, 0x16, 0x19, 0x1e, 0x21]
            }],
            'FillSymbols': [{
              'Col': [0x3, 0x0, 0x1, 0x0, 0x2, 0x5]
            }, {
              'Col': [0x7, 0x11, 0x7, 0x7, 0x1]
            }, {
              'Col': [0x2, 0x5, 0x6, 0x4, 0x1, 0x2]
            }, {
              'Col': [0x3, 0x10, 0x2, 0x8]
            }, {
              'Col': [0x8, 0x1, 0x3, 0x8]
            }, {
              'Col': [0x1, 0x4]
            }],
            'ChangeSymbols': [{}, {}, {}, {
              'Col': [0x14]
            }, {
              'Col': [0x14]
            }, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x3, 0x0, 0x1, 0x0, 0x2, 0x5]
            }, {
              'Col': [0x1, 0x7, 0x11, 0x7, 0x7, 0x1]
            }, {
              'Col': [0x2, 0x5, 0x6, 0x4, 0x1, 0x2]
            }, {
              'Col': [0x14, 0x3, 0x3, 0x10, 0x2, 0x8]
            }, {
              'Col': [0x14, 0x8, 0x8, 0x1, 0x3, 0x8]
            }, {
              'Col': [0x2, 0x2, 0x6, 0x4, 0x1, 0x4]
            }],
            'ComboStageWin': 1.6,
            'ComboStageMult': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x6,
              'LineNum': 0x4,
              'Win': 1.6,
              'PosVec': [0x2, 0x6, 0xb, 0x10, 0x12, 0x18, 0x1b, 0x22]
            }],
            'FillSymbols': [{
              'Col': [0x1]
            }, {
              'Col': [0x1, 0x8]
            }, {
              'Col': [0x2]
            }, {
              'Col': [0x1]
            }, {
              'Col': [0x0, 0x3]
            }, {
              'Col': [0x5]
            }],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x3, 0x0, 0x0, 0x2, 0x5, 0x1]
            }, {
              'Col': [0x7, 0x11, 0x7, 0x7, 0x1, 0x8]
            }, {
              'Col': [0x2, 0x5, 0x6, 0x4, 0x2, 0x2]
            }, {
              'Col': [0x3, 0x3, 0x10, 0x2, 0x8, 0x1]
            }, {
              'Col': [0x8, 0x8, 0x3, 0x8, 0x0, 0x3]
            }, {
              'Col': [0x2, 0x2, 0x6, 0x4, 0x4, 0x5]
            }],
            'ComboStageMult': 0x2,
            'FillSymbols': [{}, {}, {}, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }],
          'RoundWin': 282.66,
          'AwardTypeFlag': 0x9d,
          'FreeTotalRound': 0x7
        }],
        'FreeTotalWin': 284.17,
        'TotalWin': 296.18,
        'ShowIndex': '',
        'NowMoney': null
      };
      _0xd891f1.MG = {
        'RoundQueue': [{
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x1b, 0x6, 0x6, 0x4, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x0, 0x6, 0x6, 0xe, 0x1b]
            }, {
              'Col': [0x8, 0x8, 0x3, 0x3, 0x6, 0x6]
            }, {
              'Col': [0x1b, 0x1b, 0x1, 0x1, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x4, 0x4, 0x5, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x1b, 0x3, 0x1b, 0x1b]
            }],
            'ComboStageWin': 1.2,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x6,
              'Count': 0x3,
              'LineNum': 0x8,
              'Win': 1.2,
              'PosVec': [0x1, 0x2, 0x8, 0x9, 0x10, 0x11]
            }],
            'HitSlatePosVec': [0x0, 0x16, 0xb, 0x17],
            'FillSymbols': [{
              'Col': [0x6, 0x2, 0x6]
            }, {
              'Col': [0x3, 0x6, 0x3]
            }, {
              'Col': [0x4, 0x5]
            }, {
              'Col': [0x1, 0x4]
            }, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x1b, 0x1b, 0x6, 0x2, 0x6]
            }, {
              'Col': [0x1b, 0x0, 0xe, 0x3, 0x6, 0x3]
            }, {
              'Col': [0x8, 0x8, 0x3, 0x3, 0x4, 0x5]
            }, {
              'Col': [0x1b, 0x1b, 0x1, 0x1, 0x1, 0x4]
            }, {
              'Col': [0x1b, 0x4, 0x4, 0x5, 0x1b, 0x1b]
            }, {
              'Col': [0x1b, 0x1b, 0x1b, 0x3, 0x1b, 0x1b]
            }],
            'ComboStageWin': 0.4,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x4,
              'Count': 0x5,
              'LineNum': 0x2,
              'Win': 0.4,
              'PosVec': [0x0, 0x8, 0x10, 0x17, 0x19, 0x1a]
            }],
            'HitSlatePosVec': [0x6, 0x1, 0x2, 0x1d, 0x13, 0x18, 0x1f, 0x20],
            'FillSymbols': [{
              'Col': [0x3, 0x2, 0x1]
            }, {
              'Col': [0x0]
            }, {
              'Col': [0x1]
            }, {
              'Col': [0x5, 0x6]
            }, {
              'Col': [0x8, 0x8, 0x4, 0xf]
            }, {
              'Col': [0x1, 0x5]
            }],
            'ChangeSymbols': [{}, {
              'Col': [0x17]
            }, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x6, 0x2, 0x6, 0x3, 0x2, 0x1]
            }, {
              'Col': [0x0, 0x17, 0x3, 0x6, 0x3, 0x0]
            }, {
              'Col': [0x8, 0x8, 0x3, 0x3, 0x5, 0x1]
            }, {
              'Col': [0x1b, 0x1, 0x1, 0x1, 0x5, 0x6]
            }, {
              'Col': [0x5, 0x1b, 0x8, 0x8, 0x4, 0xf]
            }, {
              'Col': [0x1b, 0x3, 0x1b, 0x1b, 0x1, 0x5]
            }],
            'ComboStageWin': 0.6,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x4,
              'LineNum': 0x3,
              'Win': 0.3,
              'PosVec': [0x5, 0x7, 0x11, 0x13, 0x14, 0x15]
            }, {
              'Symbol': 0x3,
              'Count': 0x3,
              'LineNum': 0x6,
              'Win': 0.3,
              'PosVec': [0x3, 0x7, 0x8, 0xa, 0xe, 0xf]
            }],
            'HitSlatePosVec': [0x12, 0x19],
            'FillSymbols': [{
              'Col': [0x0, 0x2]
            }, {
              'Col': [0x1, 0x1]
            }, {
              'Col': [0xc, 0x1, 0x2]
            }, {
              'Col': [0x3, 0x2, 0xa, 0x7]
            }, {
              'Col': [0x5]
            }, {}],
            'ChangeSymbols': [{}, {
              'Col': [0x16]
            }, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x6, 0x2, 0x6, 0x2, 0x0, 0x2]
            }, {
              'Col': [0x0, 0x16, 0x6, 0x0, 0x1, 0x1]
            }, {
              'Col': [0x8, 0x8, 0x5, 0xc, 0x1, 0x2]
            }, {
              'Col': [0x5, 0x6, 0x3, 0x2, 0xa, 0x7]
            }, {
              'Col': [0x5, 0x8, 0x8, 0x4, 0xf, 0x5]
            }, {
              'Col': [0x1b, 0x3, 0x1b, 0x1b, 0x1, 0x5]
            }],
            'ComboStageWin': 0.6,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x2,
              'Count': 0x4,
              'LineNum': 0x6,
              'Win': 0.6,
              'PosVec': [0x1, 0x3, 0x5, 0x7, 0xf, 0x11, 0x15]
            }],
            'FillSymbols': [{
              'Col': [0x2, 0x7, 0x4]
            }, {}, {
              'Col': [0x2]
            }, {
              'Col': [0x12]
            }, {}, {}],
            'ChangeSymbols': [{}, {
              'Col': [0x15]
            }, {
              'Col': [0x14]
            }, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x6, 0x6, 0x0, 0x2, 0x7, 0x4]
            }, {
              'Col': [0x0, 0x15, 0x6, 0x0, 0x1, 0x1]
            }, {
              'Col': [0x8, 0x8, 0x5, 0x14, 0x1, 0x2]
            }, {
              'Col': [0x5, 0x6, 0x3, 0xa, 0x7, 0x12]
            }, {
              'Col': [0x5, 0x8, 0x8, 0x4, 0xf, 0x5]
            }, {
              'Col': [0x1b, 0x3, 0x1b, 0x1b, 0x1, 0x5]
            }],
            'ComboStageWin': 1.8,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Count': 0x4,
              'LineNum': 0x3,
              'Win': 0.3,
              'PosVec': [0x2, 0x6, 0x7, 0x9, 0xf, 0x15]
            }, {
              'Symbol': 0x2,
              'Count': 0x3,
              'LineNum': 0x2,
              'Win': 0.1,
              'PosVec': [0x3, 0x7, 0xf, 0x11]
            }, {
              'Symbol': 0x4,
              'Count': 0x3,
              'LineNum': 0x1,
              'Win': 0.1,
              'PosVec': [0x5, 0x7, 0xf]
            }, {
              'Symbol': 0x6,
              'Count': 0x4,
              'LineNum': 0x4,
              'Win': 0x1,
              'PosVec': [0x0, 0x1, 0x7, 0x8, 0xf, 0x13]
            }, {
              'Symbol': 0x7,
              'Count': 0x4,
              'LineNum': 0x1,
              'Win': 0.3,
              'PosVec': [0x4, 0x7, 0xf, 0x16]
            }],
            'FillSymbols': [{
              'Col': [0x5, 0x4, 0x5, 0x7, 0x1, 0x5]
            }, {
              'Col': [0x1, 0x6, 0x8]
            }, {
              'Col': [0x2, 0x11]
            }, {
              'Col': [0x7, 0x0]
            }, {}, {}],
            'ChangeSymbols': [{}, {
              'Col': [0x14]
            }, {}, {
              'Col': [0x17]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x5, 0x4, 0x5, 0x7, 0x1, 0x5]
            }, {
              'Col': [0x14, 0x1, 0x1, 0x1, 0x6, 0x8]
            }, {
              'Col': [0x8, 0x8, 0x5, 0x1, 0x2, 0x11]
            }, {
              'Col': [0x5, 0x3, 0x17, 0x12, 0x7, 0x0]
            }, {
              'Col': [0x5, 0x8, 0x8, 0x4, 0xf, 0x5]
            }, {
              'Col': [0x1b, 0x3, 0x1b, 0x1b, 0x1, 0x5]
            }],
            'ComboStageWin': 8.2,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x4,
              'LineNum': 0x4,
              'Win': 0.4,
              'PosVec': [0x4, 0x6, 0x7, 0x8, 0x9, 0xf, 0x14]
            }, {
              'Symbol': 0x5,
              'Count': 0x6,
              'LineNum': 0x12,
              'Win': 7.2,
              'PosVec': [0x0, 0x2, 0x5, 0x6, 0xe, 0x12, 0x14, 0x18, 0x1c, 0x1d, 0x23]
            }, {
              'Symbol': 0x7,
              'Count': 0x4,
              'LineNum': 0x2,
              'Win': 0.6,
              'PosVec': [0x3, 0x6, 0x11, 0x14, 0x16]
            }],
            'HitSlatePosVec': [0x1e],
            'FillSymbols': [{
              'Col': [0x1, 0x6, 0x4, 0x8, 0x4]
            }, {
              'Col': [0x8, 0x0, 0x8, 0x0]
            }, {
              'Col': [0x5, 0x4]
            }, {
              'Col': [0x3, 0x7]
            }, {
              'Col': [0x3, 0x7]
            }, {
              'Col': [0x2, 0x6]
            }],
            'ChangeSymbols': [{}, {}, {
              'Col': [0x14]
            }, {
              'Col': [0x16]
            }, {
              'Col': [0x14]
            }, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x1, 0x6, 0x4, 0x8, 0x4]
            }, {
              'Col': [0x6, 0x8, 0x8, 0x0, 0x8, 0x0]
            }, {
              'Col': [0x8, 0x8, 0x2, 0x14, 0x5, 0x4]
            }, {
              'Col': [0x3, 0x16, 0x12, 0x0, 0x3, 0x7]
            }, {
              'Col': [0x8, 0x8, 0x4, 0x14, 0x3, 0x7]
            }, {
              'Col': [0x3, 0x1b, 0x1b, 0x1, 0x2, 0x6]
            }],
            'ComboStageWin': 43.7,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x6,
              'Count': 0x6,
              'LineNum': 0x1,
              'Win': 0.5,
              'PosVec': [0x2, 0x6, 0xf, 0x13, 0x1b, 0x23]
            }, {
              'Symbol': 0x8,
              'Count': 0x5,
              'LineNum': 0x36,
              'Win': 43.2,
              'PosVec': [0x4, 0x7, 0x8, 0xa, 0xc, 0xd, 0xf, 0x13, 0x14, 0x18, 0x19, 0x1b]
            }],
            'HitSlatePosVec': [0x1f],
            'FillSymbols': [{
              'Col': [0x3, 0x2]
            }, {
              'Col': [0xa, 0x0, 0x4, 0x8]
            }, {
              'Col': [0x6, 0x0, 0xd]
            }, {}, {
              'Col': [0x1, 0x5, 0x6]
            }, {
              'Col': [0x2, 0xe]
            }],
            'ChangeSymbols': [{}, {}, {}, {
              'Col': [0x15, 0x14]
            }, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x4, 0x1, 0x4, 0x4, 0x3, 0x2]
            }, {
              'Col': [0x0, 0x0, 0xa, 0x0, 0x4, 0x8]
            }, {
              'Col': [0x2, 0x5, 0x4, 0x6, 0x0, 0xd]
            }, {
              'Col': [0x3, 0x15, 0x14, 0x0, 0x3, 0x7]
            }, {
              'Col': [0x4, 0x3, 0x7, 0x1, 0x5, 0x6]
            }, {
              'Col': [0x3, 0x1b, 0x1, 0x2, 0x2, 0xe]
            }],
            'ComboStageWin': 1.8,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x4,
              'Count': 0x6,
              'LineNum': 0x6,
              'Win': 1.8,
              'PosVec': [0x0, 0x2, 0x3, 0xa, 0xe, 0x13, 0x14, 0x18, 0x23]
            }],
            'FillSymbols': [{
              'Col': [0x3, 0x5, 0x1]
            }, {
              'Col': [0x5]
            }, {
              'Col': [0x8]
            }, {
              'Col': [0x6]
            }, {
              'Col': [0x3]
            }, {}],
            'ChangeSymbols': [{}, {}, {}, {
              'Col': [0x14]
            }, {}, {
              'Col': [0x14]
            }]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x1, 0x3, 0x2, 0x3, 0x5, 0x1]
            }, {
              'Col': [0x0, 0x0, 0xa, 0x0, 0x8, 0x5]
            }, {
              'Col': [0x2, 0x5, 0x6, 0x0, 0xd, 0x8]
            }, {
              'Col': [0x3, 0x14, 0x0, 0x3, 0x7, 0x6]
            }, {
              'Col': [0x3, 0x7, 0x1, 0x5, 0x6, 0x3]
            }, {
              'Col': [0x3, 0x1b, 0x1, 0x2, 0x2, 0x14]
            }],
            'ComboStageWin': 0.4,
            'ComboStageMult': 0x1,
            'AwardDataVec': [{
              'Symbol': 0x5,
              'Count': 0x6,
              'LineNum': 0x1,
              'Win': 0.4,
              'PosVec': [0x4, 0xb, 0xd, 0x13, 0x1b, 0x23]
            }],
            'FillSymbols': [{
              'Col': [0x6]
            }, {
              'Col': [0x8]
            }, {
              'Col': [0x7]
            }, {
              'Col': [0x5]
            }, {
              'Col': [0x3]
            }, {
              'Col': [0x4]
            }],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }, {
            'ComboStageSymbol': [{
              'Col': [0x1, 0x3, 0x2, 0x3, 0x1, 0x6]
            }, {
              'Col': [0x0, 0x0, 0xa, 0x0, 0x8, 0x8]
            }, {
              'Col': [0x2, 0x6, 0x0, 0xd, 0x8, 0x7]
            }, {
              'Col': [0x3, 0x0, 0x3, 0x7, 0x6, 0x5]
            }, {
              'Col': [0x3, 0x7, 0x1, 0x6, 0x3, 0x3]
            }, {
              'Col': [0x3, 0x1b, 0x1, 0x2, 0x2, 0x4]
            }],
            'ComboStageMult': 0x1,
            'FillSymbols': [{}, {}, {}, {}, {}, {}],
            'ChangeSymbols': [{}, {}, {}, {}, {}, {}]
          }],
          'RoundWin': 58.7,
          'AwardTypeFlag': 0x11
        }],
        'TotalWin': 58.7,
        'ShowIndex': '',
        'NowMoney': null
      };
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, '0df30J5LkpKgJdZfYz6Q/RD', "FgCounter", undefined);
      var _0x4c5bda = _0x73005c.ccclass;
      var _0x30f2b3 = _0x73005c.property;
      var _0x30e6a2;
      !function (_0x25511c) {
        _0x25511c.NONE = "none";
        _0x25511c.L_IDEL = "L_Idel";
        _0x25511c.L_MULTI_HIT = "L_Multi_Hit";
        _0x25511c.L_FG_HIT = "L_FG_Hit";
        _0x25511c.S_IDEL = "S_Idel";
        _0x25511c.S_MULTI_HIT = "S_Multi_Hit";
        _0x25511c.S_FG_HIT = "S_FG_Hit";
      }(_0x30e6a2 || (_0x30e6a2 = {}));
      _0x413e74 = _0x4c5bda('FgCounter');
      _0x512887 = _0x30f2b3({
        'type': _0x481e90,
        'tooltip': "免費遊戲"
      });
      _0x134fe8 = _0x30f2b3({
        'type': _0x36bc07,
        'tooltip': '局數'
      });
      _0x44ccd2 = _0x30f2b3({
        'type': _0x36bc07,
        'tooltip': '局數'
      });
      _0x322c85 = _0x30f2b3({
        'type': _0x481e90,
        'tooltip': '獲得倍數'
      });
      _0x4a51b9 = _0x30f2b3({
        'type': _0x36bc07,
        'tooltip': '倍數'
      });
      _0x3fdd4a = _0x30f2b3({
        'type': _0x27176c,
        'tooltip': 'counter節點'
      });
      _0x29cbef = _0x30f2b3({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': 'spine'
      });
      _0xcc1bae = function (_0x2bb362) {
        function _0x196049() {
          var _0x4d0828;
          var _0x5eb17a = arguments.length;
          var _0x436158 = new Array(_0x5eb17a);
          for (var _0x2bed23 = 0x0; _0x2bed23 < _0x5eb17a; _0x2bed23++) {
            _0x436158[_0x2bed23] = arguments[_0x2bed23];
          }
          _0x4d0828 = _0x2bb362.call.apply(_0x2bb362, [this].concat(_0x436158)) || this;
          _0x5043f5(_0x4d0828, "m_roundSprite", _0x44c833, _0x21436e(_0x4d0828));
          _0x5043f5(_0x4d0828, 'm_roundLabel', _0x26978f, _0x21436e(_0x4d0828));
          _0x5043f5(_0x4d0828, "m_totalRoundLabel", _0x14dc2a, _0x21436e(_0x4d0828));
          _0x5043f5(_0x4d0828, 'm_multiSprite', _0x16359f, _0x21436e(_0x4d0828));
          _0x5043f5(_0x4d0828, "m_multiLabel", _0x518ae5, _0x21436e(_0x4d0828));
          _0x5043f5(_0x4d0828, "m_counterNode", _0x19e0ae, _0x21436e(_0x4d0828));
          _0x5043f5(_0x4d0828, "m_fgCounterSkeleton", _0x1a5c1a, _0x21436e(_0x4d0828));
          _0x4d0828.m_playName = _0x30e6a2.NONE;
          _0x4d0828.m_totalRound = 0x0;
          _0x4d0828.m_roundNum = 0x0;
          _0x4d0828.m_multiNum = 0x0;
          _0x4d0828.m_isShow = false;
          return _0x4d0828;
        }
        _0x197a27(_0x196049, _0x2bb362);
        var _0x3248c0 = _0x196049.prototype;
        _0x3248c0.start = function () {
          this.m_counterNode.active = false;
        };
        _0x3248c0.update = function (_0x4adac5) {};
        _0x3248c0.ShowCounter = function (_0xdc6ab4, _0x5c1709, _0xf46919) {
          if (_0x34ce7c.CurrLang !== _0x5cb914.Lang.EN) {
            var _0x286829 = _0x34ce7c.GetGameAtlas();
            this.m_roundSprite.spriteFrame = _0x286829.getSpriteFrame("TXT_FG_Counter_01");
            this.m_multiSprite.spriteFrame = _0x286829.getSpriteFrame("TXT_FG_Counter_02");
          }
          this.m_counterNode.active = true;
          this.m_isShow = true;
          this.m_playName = _0x30e6a2.S_IDEL;
          this.m_totalRoundLabel.string = _0x5c1709.toString();
          this.m_totalRound = _0x5c1709;
          this.m_roundLabel.string = _0xdc6ab4.toString();
          this.m_roundNum = _0xdc6ab4;
          this.m_multiLabel.string = _0xf46919.toString();
          this.m_multiNum = _0xf46919;
          this.m_fgCounterSkeleton.clearTracks();
          this.m_fgCounterSkeleton.setToSetupPose();
          this.m_fgCounterSkeleton.setAnimation(0x0, this.m_playName, false);
        };
        _0x3248c0.ShowAddRound = function (_0x114a5b) {
          _0x2d761c.Play(_0x3fb2b5.AudioClips.FG_Add);
          this.m_roundNum = this.m_roundNum + _0x114a5b;
          this.m_roundLabel.string = this.m_roundNum.toString();
          this.m_totalRound = this.m_totalRound + _0x114a5b;
          this.m_totalRoundLabel.string = this.m_totalRound.toString();
          this.m_playName = _0x30e6a2.S_FG_HIT;
          this.m_fgCounterSkeleton.clearTrack(0x0);
          this.m_fgCounterSkeleton.setToSetupPose();
          this.m_fgCounterSkeleton.setAnimation(0x0, this.m_playName, false);
        };
        _0x3248c0.ShowAddMulti = function (_0xe27266) {
          _0x2d761c.Play(_0x3fb2b5.AudioClips.FG_Multiple);
          this.m_multiNum = this.m_multiNum + _0xe27266;
          this.m_multiLabel.string = this.m_multiNum.toString();
          this.m_playName = _0x30e6a2.S_MULTI_HIT;
          this.m_fgCounterSkeleton.clearTrack(0x1);
          this.m_fgCounterSkeleton.setToSetupPose();
          this.m_fgCounterSkeleton.setAnimation(0x1, this.m_playName, false);
        };
        _0x3248c0.Close = function () {
          this.m_playName = _0x30e6a2.NONE;
          this.m_multiNum = 0x0;
          this.m_roundNum = 0x0;
          if (this.m_fgCounterSkeleton) {
            this.m_fgCounterSkeleton.clearTracks();
            this.m_fgCounterSkeleton.setToSetupPose();
          }
          this.m_counterNode.active = false;
          this.m_isShow = false;
        };
        return _0x196049;
      }(_0x2e72bb);
      _0x44c833 = _0x49a46a(_0xcc1bae.prototype, "m_roundSprite", [_0x512887], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x26978f = _0x49a46a(_0xcc1bae.prototype, "m_roundLabel", [_0x134fe8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x14dc2a = _0x49a46a(_0xcc1bae.prototype, 'm_totalRoundLabel', [_0x44ccd2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x16359f = _0x49a46a(_0xcc1bae.prototype, "m_multiSprite", [_0x322c85], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x518ae5 = _0x49a46a(_0xcc1bae.prototype, 'm_multiLabel', [_0x4a51b9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x19e0ae = _0x49a46a(_0xcc1bae.prototype, "m_counterNode", [_0x3fdd4a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1a5c1a = _0x49a46a(_0xcc1bae.prototype, "m_fgCounterSkeleton", [_0x29cbef], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x2ccfeb;
      var _0x3d4635;
      var _0x4901d8;
      var _0x12972f;
      var _0x20d83b;
      var _0x8a588;
      var _0x2c9654;
      var _0x3168c4;
      var _0x44309b;
      var _0x2a057a;
      var _0xa41659;
      var _0x2de083;
      var _0x3c204d;
      var _0x57505b;
      var _0x3395d4;
      var _0x1ce5be;
      var _0x20f2c5;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "42676GCXzhMi6Ztk997SCAV", 'DeclareSpine', undefined);
      var _0x134d27 = _0x73005c.ccclass;
      var _0x13c173 = _0x73005c.property;
      var _0x52df2e;
      !function (_0x50757f) {
        _0x50757f.NONE = "none";
        _0x50757f.L_START = "L_Start";
        _0x50757f.L_LOOP = 'L_Loop';
        _0x50757f.L_END = "L_End";
        _0x50757f.S_START = "S_Start";
        _0x50757f.S_LOOP = "S_Loop";
        _0x50757f.S_END = "S_End";
      }(_0x52df2e || (_0x52df2e = {}));
      _0x2ccfeb = _0x134d27('DeclareSpine');
      _0x3d4635 = _0x13c173({
        'type': _0x481e90,
        'tooltip': '恭喜'
      });
      _0x4901d8 = _0x13c173({
        'type': _0x481e90,
        'tooltip': "free"
      });
      _0x12972f = _0x13c173({
        'type': _0x481e90,
        'tooltip': 'game'
      });
      _0x20d83b = _0x13c173({
        'type': _0x481e90,
        'tooltip': "免費遊戲"
      });
      _0x8a588 = _0x13c173({
        'type': _0x36bc07,
        'tooltip': '局數'
      });
      _0x2c9654 = _0x13c173({
        'type': _0x22aa71,
        'tooltip': 'HP'
      });
      _0x3168c4 = _0x13c173({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': "spine"
      });
      _0x2a057a = function (_0x2f4612) {
        function _0xcf01fc() {
          var _0x370e6f;
          var _0x13c6ef = arguments.length;
          var _0x42f510 = new Array(_0x13c6ef);
          for (var _0x24e7db = 0x0; _0x24e7db < _0x13c6ef; _0x24e7db++) {
            _0x42f510[_0x24e7db] = arguments[_0x24e7db];
          }
          _0x370e6f = _0x2f4612.call.apply(_0x2f4612, [this].concat(_0x42f510)) || this;
          _0x5043f5(_0x370e6f, 'm_congratSprite', _0xa41659, _0x21436e(_0x370e6f));
          _0x5043f5(_0x370e6f, "m_freeSprite", _0x2de083, _0x21436e(_0x370e6f));
          _0x5043f5(_0x370e6f, "m_gameSprite", _0x3c204d, _0x21436e(_0x370e6f));
          _0x5043f5(_0x370e6f, "m_fgSprite", _0x57505b, _0x21436e(_0x370e6f));
          _0x5043f5(_0x370e6f, "m_roundLabel", _0x3395d4, _0x21436e(_0x370e6f));
          _0x5043f5(_0x370e6f, "m_hpOpacity", _0x1ce5be, _0x21436e(_0x370e6f));
          _0x5043f5(_0x370e6f, "m_declareSkeleton", _0x20f2c5, _0x21436e(_0x370e6f));
          _0x370e6f.m_playName = _0x52df2e.NONE;
          _0x370e6f.m_isLandscape = null;
          _0x370e6f.m_roundNum = 0x0;
          _0x370e6f.m_time = 0x0;
          _0x370e6f.m_changeCb = null;
          return _0x370e6f;
        }
        _0x197a27(_0xcf01fc, _0x2f4612);
        var _0x3980e4 = _0xcf01fc.prototype;
        _0x3980e4.start = function () {};
        _0x3980e4.update = function (_0x432016) {
          if (0x1 == this.m_time) {
            this.m_hpOpacity.opacity = 0xff;
          }
        };
        _0x3980e4.ShowStart = function (_0x267a19, _0x4f5046) {
          this.m_changeCb = _0x4f5046;
          if (_0x34ce7c.CurrLang !== _0x5cb914.Lang.EN) {
            var _0x35243c = _0x34ce7c.GetGameAtlas();
            this.m_congratSprite.spriteFrame = _0x35243c.getSpriteFrame("TXT_FG_Declare_01");
            this.m_freeSprite.spriteFrame = _0x35243c.getSpriteFrame("TXT_FG_Declare_02_01");
            this.m_gameSprite.spriteFrame = _0x35243c.getSpriteFrame("TXT_FG_Declare_02_02");
            this.m_fgSprite.spriteFrame = _0x35243c.getSpriteFrame("TXT_FG_Declare_03");
          }
          if (this.m_isLandscape) {
            this.m_playName = _0x52df2e.L_START;
          } else {
            this.m_playName = _0x52df2e.S_START;
          }
          this.m_roundNum = _0x267a19;
          this.m_time = 0x0;
          this.node.active = true;
          this.m_hpOpacity.opacity = 0x0;
          this.PlayAnimation(this.m_playName, false);
          _0x2d761c.Play(_0x3fb2b5.AudioClips.FG_Into);
        };
        _0x3980e4.PlayAnimation = function (_0x268daa, _0x2b0526) {
          var _0x3b2df4 = this;
          if (undefined === _0x2b0526) {
            _0x2b0526 = false;
          }
          this.m_playName = _0x268daa;
          this.m_roundLabel.string = this.m_roundNum.toString();
          return new Promise(function (_0x41de87) {
            _0x3b2df4.m_declareSkeleton.clearTrack(0x0);
            _0x3b2df4.m_declareSkeleton.setToSetupPose();
            var _0x3f878e = _0x3b2df4.m_declareSkeleton.setAnimation(0x0, _0x268daa, _0x2b0526);
            _0x3b2df4.m_time++;
            var _0x31fabe = function () {
              switch (_0x268daa) {
                case _0x52df2e.L_START:
                  _0x3b2df4.PlayAnimation(_0x52df2e.L_LOOP, false);
                  break;
                case _0x52df2e.S_START:
                  _0x3b2df4.PlayAnimation(_0x52df2e.S_LOOP, false);
                  break;
                case _0x52df2e.L_LOOP:
                  _0x3b2df4.PlayAnimation(_0x52df2e.L_END, false);
                  if (!(null == _0x3b2df4.m_changeCb)) {
                    _0x3b2df4.m_changeCb();
                  }
                  _0x3b2df4.m_changeCb = null;
                  break;
                case _0x52df2e.S_LOOP:
                  _0x3b2df4.PlayAnimation(_0x52df2e.S_END, false);
                  if (!(null == _0x3b2df4.m_changeCb)) {
                    _0x3b2df4.m_changeCb();
                  }
                  _0x3b2df4.m_changeCb = null;
                  break;
                case _0x52df2e.L_END:
                case _0x52df2e.S_END:
                  _0x3b2df4.m_roundLabel.string = '';
                  _0x3b2df4.m_declareSkeleton.clearTrack(0x0);
                  _0x3b2df4.m_declareSkeleton.setToSetupPose();
                  _0x3b2df4.node.active = false;
              }
            };
            if (_0x3f878e) {
              _0x3b2df4.m_declareSkeleton.setTrackEventListener(_0x3f878e, function (_0xc0f9a, _0x5381b8) {});
              _0x3b2df4.m_declareSkeleton.setTrackCompleteListener(_0x3f878e, function () {
                _0x31fabe();
                _0x41de87(null);
              });
            } else {
              _0x3b2df4.m_declareSkeleton.setCompleteListener(function () {
                _0x31fabe();
                _0x41de87(null);
              });
            }
          });
        };
        _0x3980e4.OnRotation = function (_0x3f0e9d) {
          this.m_isLandscape = _0x3f0e9d;
          this.m_playName;
          _0x52df2e.NONE;
        };
        return _0xcf01fc;
      }(_0x2e72bb);
      _0xa41659 = _0x49a46a(_0x2a057a.prototype, 'm_congratSprite', [_0x3d4635], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2de083 = _0x49a46a(_0x2a057a.prototype, "m_freeSprite", [_0x4901d8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3c204d = _0x49a46a(_0x2a057a.prototype, 'm_gameSprite', [_0x12972f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x57505b = _0x49a46a(_0x2a057a.prototype, "m_fgSprite", [_0x20d83b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3395d4 = _0x49a46a(_0x2a057a.prototype, "m_roundLabel", [_0x8a588], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1ce5be = _0x49a46a(_0x2a057a.prototype, "m_hpOpacity", [_0x2c9654], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x20f2c5 = _0x49a46a(_0x2a057a.prototype, "m_declareSkeleton", [_0x3168c4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x24952b = _0x2ccfeb(_0x44309b = _0x2a057a) || _0x44309b;
      var _0x5cab92;
      var _0xe2f457;
      var _0x3e35fb;
      var _0x377b3d;
      var _0x48222b;
      var _0x3d3d79;
      var _0x1c4235;
      var _0x158d98;
      var _0x43a8b1;
      var _0x13a79c;
      var _0x24148c;
      var _0x5b2ed5;
      var _0xd4e4e7;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "8a9a89LL1pJS6J3oP5KewqG", "MgTrans", undefined);
      var _0x15b7f1 = _0x73005c.ccclass;
      var _0x3eb395 = _0x73005c.property;
      var _0x428313;
      !function (_0x4a594f) {
        _0x4a594f.NONE = "none";
        _0x4a594f.MG_TRANS_L = 'MG_Trans_L';
        _0x4a594f.MG_TRANS_S = 'MG_Trans_S';
      }(_0x428313 || (_0x428313 = {}));
      _0x5cab92 = _0x15b7f1('MgTrans');
      _0xe2f457 = _0x3eb395({
        'type': _0x24952b,
        'tooltip': "FG宣告表演"
      });
      _0x3e35fb = _0x3eb395({
        'type': _0x27176c,
        'tooltip': "盤面本體"
      });
      _0x377b3d = _0x3eb395({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': "spine"
      });
      _0x48222b = _0x3eb395({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': '柱子'
      });
      _0x3d3d79 = _0x3eb395({
        'type': _0x27176c,
        'tooltip': '位數根結點'
      });
      _0x158d98 = function (_0x3351c8) {
        function _0x503cd5() {
          var _0x3fb3d8;
          var _0x5f4ca9 = arguments.length;
          var _0xe31ee0 = new Array(_0x5f4ca9);
          for (var _0x3f4e45 = 0x0; _0x3f4e45 < _0x5f4ca9; _0x3f4e45++) {
            _0xe31ee0[_0x3f4e45] = arguments[_0x3f4e45];
          }
          _0x3fb3d8 = _0x3351c8.call.apply(_0x3351c8, [this].concat(_0xe31ee0)) || this;
          _0x5043f5(_0x3fb3d8, "m_declare", _0x43a8b1, _0x21436e(_0x3fb3d8));
          _0x5043f5(_0x3fb3d8, "m_slotReelsNode", _0x13a79c, _0x21436e(_0x3fb3d8));
          _0x5043f5(_0x3fb3d8, "m_mgTransSkeleton", _0x24148c, _0x21436e(_0x3fb3d8));
          _0x5043f5(_0x3fb3d8, "m_pillarSpine", _0x5b2ed5, _0x21436e(_0x3fb3d8));
          _0x5043f5(_0x3fb3d8, "m_wayNode", _0xd4e4e7, _0x21436e(_0x3fb3d8));
          _0x3fb3d8.m_playName = _0x428313.NONE;
          _0x3fb3d8.m_isLandscape = null;
          _0x3fb3d8.m_roundNum = null;
          _0x3fb3d8.m_shakeEndCb = null;
          _0x3fb3d8.m_changeCb = null;
          _0x3fb3d8.m_hideFxCb = null;
          return _0x3fb3d8;
        }
        _0x197a27(_0x503cd5, _0x3351c8);
        var _0x400646 = _0x503cd5.prototype;
        _0x400646.start = function () {
          this.m_mgTransSkeleton.node.active = false;
        };
        _0x400646.update = function (_0x2501b8) {};
        _0x400646.Init = function (_0x220aef) {
          this.m_hideFxCb = _0x220aef;
        };
        _0x400646.Close = function () {
          if (this.m_mgTransSkeleton) {
            this.m_mgTransSkeleton.clearTrack(0x0);
            this.m_mgTransSkeleton.setToSetupPose();
          }
          this.m_mgTransSkeleton.node.active = false;
        };
        _0x400646.ShowFgTrans = function (_0x272f7f, _0x24d337, _0x4a7a95, _0x1a7d45) {
          var _0x29f9c4 = this;
          this.Close();
          _0x24d337();
          this.m_shakeEndCb = _0x4a7a95;
          _0x1ce2d1(this.node).delay(0x2).call(function () {
            if (!(null == _0x29f9c4.m_shakeEndCb)) {
              _0x29f9c4.m_shakeEndCb();
            }
            _0x29f9c4.m_shakeEndCb = null;
          }).start();
          this.m_changeCb = _0x1a7d45;
          this.m_roundNum = _0x272f7f;
          this.m_mgTransSkeleton.node.active = true;
          if (this.m_isLandscape) {
            this.m_playName = _0x428313.MG_TRANS_L;
          } else {
            this.m_playName = _0x428313.MG_TRANS_S;
          }
          this.PlayAnimation(this.m_playName, false);
          this.m_pillarSpine.clearTrack(0x0);
          this.m_pillarSpine.setToSetupPose();
          this.m_pillarSpine.setAnimation(0x0, this.m_playName, false);
        };
        _0x400646.PlayAnimation = function (_0x31ab5f, _0x7aaa4b) {
          var _0x33198c = this;
          if (undefined === _0x7aaa4b) {
            _0x7aaa4b = false;
          }
          this.m_playName = _0x31ab5f;
          return new Promise(function (_0x490012) {
            _0x33198c.m_mgTransSkeleton.clearTrack(0x0);
            _0x33198c.m_mgTransSkeleton.setToSetupPose();
            var _0xbacf4e = _0x33198c.m_mgTransSkeleton.setAnimation(0x0, _0x31ab5f, _0x7aaa4b);
            var _0x22ac42 = function () {
              switch (_0x31ab5f) {
                case _0x428313.MG_TRANS_L:
                case _0x428313.MG_TRANS_S:
                  _0x33198c.m_mgTransSkeleton.clearTrack(0x0);
                  _0x33198c.m_mgTransSkeleton.setToSetupPose();
                  _0x33198c.m_mgTransSkeleton.node.active = false;
              }
            };
            if (_0xbacf4e) {
              _0x33198c.m_mgTransSkeleton.setTrackEventListener(_0xbacf4e, function (_0x7b514, _0x341d33) {
                switch (_0x341d33.data.name) {
                  case "Reel_Shake_Start":
                  case "Reel_Shake_End":
                    break;
                  case "Reel_Hide":
                    _0x33198c.m_slotReelsNode.active = false;
                    _0x33198c.m_wayNode.active = false;
                    if (!(null == _0x33198c.m_hideFxCb)) {
                      _0x33198c.m_hideFxCb();
                    }
                    break;
                  case "FG_Declare_Show":
                    _0x33198c.m_declare.ShowStart(_0x33198c.m_roundNum, _0x33198c.m_changeCb);
                }
              });
              _0x33198c.m_mgTransSkeleton.setTrackCompleteListener(_0xbacf4e, function () {
                _0x22ac42();
                _0x490012(null);
              });
            } else {
              _0x33198c.m_mgTransSkeleton.setCompleteListener(function () {
                _0x22ac42();
                _0x490012(null);
              });
            }
          });
        };
        _0x400646.OnRotation = function (_0x2449a2) {
          this.m_isLandscape = _0x2449a2;
          if (this.m_playName !== _0x428313.NONE) {
            this.PlayAnimation(this.m_playName, true);
          }
        };
        return _0x503cd5;
      }(_0x2e72bb);
      _0x43a8b1 = _0x49a46a(_0x158d98.prototype, "m_declare", [_0xe2f457], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x13a79c = _0x49a46a(_0x158d98.prototype, "m_slotReelsNode", [_0x3e35fb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x24148c = _0x49a46a(_0x158d98.prototype, "m_mgTransSkeleton", [_0x377b3d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5b2ed5 = _0x49a46a(_0x158d98.prototype, 'm_pillarSpine', [_0x48222b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xd4e4e7 = _0x49a46a(_0x158d98.prototype, "m_wayNode", [_0x3d3d79], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x30b047 = _0x5cab92(_0x1c4235 = _0x158d98) || _0x1c4235;
      var _0x2a1d59;
      var _0x523d5c;
      var _0xd74510;
      var _0x526060;
      var _0x30062a;
      var _0x4f6659;
      var _0x3886e9;
      var _0x40f0e6;
      var _0x2ee8c5;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "1aabfMOIsxP3Z8rxSDpjXU5", "FgTransFx", undefined);
      var _0x5523a3 = _0x73005c.ccclass;
      var _0x213af7 = _0x73005c.property;
      _0x2a1d59 = _0x5523a3('FgTransFx');
      _0x523d5c = _0x213af7({
        'type': _0x30b047,
        'tooltip': '背景'
      });
      _0xd74510 = _0x213af7({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': "spine"
      });
      _0x526060 = _0x213af7({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': 'spine'
      });
      _0x4f6659 = function (_0x3c6e41) {
        function _0x1b3bb3() {
          var _0x545343;
          var _0x53bc42 = arguments.length;
          var _0x34f7d3 = new Array(_0x53bc42);
          for (var _0x2e1459 = 0x0; _0x2e1459 < _0x53bc42; _0x2e1459++) {
            _0x34f7d3[_0x2e1459] = arguments[_0x2e1459];
          }
          _0x545343 = _0x3c6e41.call.apply(_0x3c6e41, [this].concat(_0x34f7d3)) || this;
          _0x5043f5(_0x545343, "m_mgTrans", _0x3886e9, _0x21436e(_0x545343));
          _0x5043f5(_0x545343, "m_nearWinSkeleton", _0x40f0e6, _0x21436e(_0x545343));
          _0x5043f5(_0x545343, "m_fgTransFxSkeleton", _0x2ee8c5, _0x21436e(_0x545343));
          _0x545343.m_fgPlayName = "none";
          _0x545343.m_nearWinPlayName = "none";
          _0x545343.m_nearWinLvl = _0x18c677.None;
          _0x545343.m_shakeStartCb = null;
          _0x545343.m_shakeEndCb = null;
          _0x545343.m_changCb = null;
          return _0x545343;
        }
        _0x197a27(_0x1b3bb3, _0x3c6e41);
        var _0xa52e53 = _0x1b3bb3.prototype;
        _0xa52e53.start = function () {};
        _0xa52e53.update = function (_0x3bb4df) {};
        _0xa52e53.ShowFgTrans = function () {
          var _0x3ccbbf = _0x2d97e1(_0x3a966d().mark(function _0xa97cb(_0x34be7f, _0x19ca53, _0x230dea, _0x57ad2b) {
            var _0x48eb5d = this;
            return _0x3a966d().wrap(function (_0x3f51cf) {
              for (;;) {
                switch (_0x3f51cf.prev = _0x3f51cf.next) {
                  case 0x0:
                    this.m_fgTransFxSkeleton.node.active = true;
                    _0x1ce2d1(this.node).call(function () {
                      _0x2d761c.Play(_0x3fb2b5.AudioClips.Scatter_bell);
                    }).delay(1.5).call(function () {
                      _0x48eb5d.m_mgTrans.ShowFgTrans(_0x34be7f, _0x19ca53, _0x230dea, _0x57ad2b);
                      _0x48eb5d.m_fgPlayName = "MG_Trans_L";
                      _0x48eb5d.PlayAnimation(_0x48eb5d.m_fgTransFxSkeleton, _0x48eb5d.m_fgPlayName, false);
                    }).start();
                  case 0x2:
                  case "end":
                    return _0x3f51cf.stop();
                }
              }
            }, _0xa97cb, this);
          }));
          return function (_0x5b1c57, _0x44cbca, _0x293f51, _0x598267) {
            return _0x3ccbbf.apply(this, arguments);
          };
        }();
        _0xa52e53.ShowFxTrans = function (_0x1d3c03, _0x543704, _0x3e1876) {
          this.m_shakeStartCb = _0x1d3c03;
          this.m_shakeEndCb = _0x543704;
          this.m_changCb = _0x3e1876;
          this.m_fgTransFxSkeleton.node.active = true;
          this.m_fgPlayName = "FG_Treasure_Start";
          this.PlayAnimation(this.m_fgTransFxSkeleton, this.m_fgPlayName, false);
        };
        _0xa52e53.ShowFxTransEnd = function () {
          var _0x2a44e1 = _0x2d97e1(_0x3a966d().mark(function _0x1a42df() {
            return _0x3a966d().wrap(function (_0x2eeded) {
              for (;;) {
                switch (_0x2eeded.prev = _0x2eeded.next) {
                  case 0x0:
                    if (!this.m_fgTransFxSkeleton.node.active) {
                      _0x2eeded.next = 0x9;
                      break;
                    }
                    this.Close();
                    this.m_fgTransFxSkeleton.node.active = true;
                    this.m_fgPlayName = 'FG_Treasure_End';
                    _0x2eeded.next = 0x6;
                    return this.PlayAnimation(this.m_fgTransFxSkeleton, this.m_fgPlayName, false);
                  case 0x6:
                    this.m_fgTransFxSkeleton.node.active = false;
                    _0x2eeded.next = 0xa;
                    break;
                  case 0x9:
                    this.Close();
                  case 0xa:
                  case "end":
                    return _0x2eeded.stop();
                }
              }
            }, _0x1a42df, this);
          }));
          return function () {
            return _0x2a44e1.apply(this, arguments);
          };
        }();
        _0xa52e53.Close = function () {
          this.m_mgTrans.Close();
          if (this.m_fgTransFxSkeleton) {
            this.m_fgTransFxSkeleton.clearTrack(0x0);
            this.m_fgTransFxSkeleton.setToSetupPose();
            this.m_fgTransFxSkeleton.node.active = false;
          }
          if (this.m_nearWinSkeleton) {
            this.m_nearWinSkeleton.clearTrack(0x0);
            this.m_nearWinSkeleton.setToSetupPose();
            this.m_nearWinSkeleton.node.active = false;
          }
        };
        _0xa52e53.ShowNearWin = function () {
          var _0xc2fff = _0x2d97e1(_0x3a966d().mark(function _0x49e4ca(_0x4bfaff) {
            var _0x2ace7f;
            return _0x3a966d().wrap(function (_0x500fa5) {
              for (;;) {
                switch (_0x500fa5.prev = _0x500fa5.next) {
                  case 0x0:
                    this.m_nearWinLvl = _0x4bfaff;
                    _0x2ace7f = this.GetNearWinNameByLvl();
                    this.m_nearWinSkeleton.node.active = true;
                    if (this.m_nearWinPlayName != _0x2ace7f + "Start" && this.m_nearWinPlayName != _0x2ace7f + "Loop") {
                      _0x500fa5.next = 0x5;
                      break;
                    }
                    return _0x500fa5.abrupt("return");
                  case 0x5:
                    this.m_nearWinPlayName = _0x2ace7f + "Start";
                    _0x500fa5.next = 0x8;
                    return this.PlayAnimation(this.m_nearWinSkeleton, this.m_nearWinPlayName);
                  case 0x8:
                    this.m_nearWinPlayName = _0x2ace7f + "Loop";
                    this.PlayAnimation(this.m_nearWinSkeleton, this.m_nearWinPlayName, true);
                  case 0xa:
                  case "end":
                    return _0x500fa5.stop();
                }
              }
            }, _0x49e4ca, this);
          }));
          return function (_0x1d2d81) {
            return _0xc2fff.apply(this, arguments);
          };
        }();
        _0xa52e53.HideNearWin = function () {
          var _0x443d33 = _0x2d97e1(_0x3a966d().mark(function _0x385a2e() {
            var _0x1be817;
            return _0x3a966d().wrap(function (_0x1e788f) {
              for (;;) {
                switch (_0x1e788f.prev = _0x1e788f.next) {
                  case 0x0:
                    if (this.m_nearWinLvl != _0x18c677.None) {
                      _0x1e788f.next = 0x2;
                      break;
                    }
                    return _0x1e788f.abrupt("return");
                  case 0x2:
                    _0x1be817 = this.GetNearWinNameByLvl();
                    this.m_nearWinLvl = _0x18c677.None;
                    this.m_nearWinPlayName = _0x1be817 + "End";
                    _0x1e788f.next = 0x7;
                    return this.PlayAnimation(this.m_nearWinSkeleton, this.m_nearWinPlayName);
                  case 0x7:
                    this.m_nearWinPlayName = "none";
                    this.m_nearWinSkeleton.node.active = false;
                  case 0x9:
                  case "end":
                    return _0x1e788f.stop();
                }
              }
            }, _0x385a2e, this);
          }));
          return function () {
            return _0x443d33.apply(this, arguments);
          };
        }();
        _0xa52e53.GetNearWinNameByLvl = function () {
          switch (this.m_nearWinLvl) {
            case _0x18c677.One:
              return "FX01_";
            case _0x18c677.Two:
              return "FX02_";
            case _0x18c677.Three:
              return "FX03_";
          }
          return '';
        };
        _0xa52e53.PlayAnimation = function (_0x5aa1a9, _0x4c9b79, _0x217498) {
          var _0x429c53 = this;
          if (undefined === _0x217498) {
            _0x217498 = false;
          }
          return new Promise(function (_0x5006c5) {
            _0x5aa1a9.clearTrack(0x0);
            _0x5aa1a9.setToSetupPose();
            var _0x362d10 = _0x5aa1a9.setAnimation(0x0, _0x4c9b79, _0x217498);
            var _0x172754 = function () {
              switch (_0x4c9b79) {
                case "FG_Treasure_Start":
                  _0x429c53.PlayAnimation(_0x5aa1a9, "FG_Treasure_Loop", true);
                  if (!(null == _0x429c53.m_shakeStartCb)) {
                    _0x429c53.m_shakeStartCb();
                  }
                  _0x429c53.m_shakeStartCb = null;
                  _0x1ce2d1(_0x429c53.node).delay(0x2).call(function () {
                    if (!(null == _0x429c53.m_shakeEndCb)) {
                      _0x429c53.m_shakeEndCb();
                    }
                    _0x429c53.m_shakeEndCb = null;
                  }).call(function () {
                    if (!(null == _0x429c53.m_changCb)) {
                      _0x429c53.m_changCb();
                    }
                    _0x429c53.m_changCb = null;
                  }).start();
              }
            };
            if (_0x362d10) {
              _0x5aa1a9.setTrackEventListener(_0x362d10, function (_0x305758, _0x1820d8) {
                switch (_0x1820d8.data.name) {
                  case "Reel_Shake_Start":
                  case "Reel_Shake_End":
                    break;
                  case "FX_Hide":
                    _0x429c53.HideNearWin();
                }
              });
              _0x5aa1a9.setTrackCompleteListener(_0x362d10, function () {
                _0x172754();
                _0x5006c5(null);
              });
            } else {
              _0x5aa1a9.setCompleteListener(function () {
                _0x172754();
                _0x5006c5(null);
              });
            }
          });
        };
        return _0x1b3bb3;
      }(_0x2e72bb);
      _0x3886e9 = _0x49a46a(_0x4f6659.prototype, "m_mgTrans", [_0x523d5c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x40f0e6 = _0x49a46a(_0x4f6659.prototype, 'm_nearWinSkeleton', [_0xd74510], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2ee8c5 = _0x49a46a(_0x4f6659.prototype, "m_fgTransFxSkeleton", [_0x526060], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x24476b = _0x2a1d59(_0x30062a = _0x4f6659) || _0x30062a;
      var _0x247a32;
      var _0x17daa1;
      var _0x1482d1;
      var _0x294c07;
      var _0x157a3c;
      var _0x11082b;
      var _0x15fb58;
      var _0x3cbd7c;
      var _0x118b7c;
      var _0xb87c5a;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, 'e28efJL3BlDIqSra9PMSmzf', "GameBg", undefined);
      var _0x5886af = _0x73005c.ccclass;
      var _0x2e90dd = _0x73005c.property;
      var _0x5c3994;
      !function (_0xc37eb0) {
        _0xc37eb0.NONE = 'none';
        _0xc37eb0.FG_L = "FG_L";
        _0xc37eb0.FG_S = 'FG_S';
        _0xc37eb0.MG_L = "MG_L";
        _0xc37eb0.MG_S = "MG_S";
      }(_0x5c3994 || (_0x5c3994 = {}));
      _0x247a32 = _0x5886af("GameBg");
      _0x17daa1 = _0x2e90dd({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': "MG spine"
      });
      _0x1482d1 = _0x2e90dd({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': '柱子'
      });
      _0x294c07 = _0x2e90dd({
        'type': _0x27176c,
        'tooltip': 'MG'
      });
      _0x157a3c = _0x2e90dd({
        'type': _0x27176c,
        'tooltip': 'FG'
      });
      _0x11082b = function (_0x8a4d90) {
        function _0x3f8ce1() {
          var _0x7ccbc0;
          var _0x49bebb = arguments.length;
          var _0x4f0fe0 = new Array(_0x49bebb);
          for (var _0x4c301f = 0x0; _0x4c301f < _0x49bebb; _0x4c301f++) {
            _0x4f0fe0[_0x4c301f] = arguments[_0x4c301f];
          }
          _0x7ccbc0 = _0x8a4d90.call.apply(_0x8a4d90, [this].concat(_0x4f0fe0)) || this;
          _0x5043f5(_0x7ccbc0, "m_bgSkeleton", _0x15fb58, _0x21436e(_0x7ccbc0));
          _0x5043f5(_0x7ccbc0, 'm_pillarSpine', _0x3cbd7c, _0x21436e(_0x7ccbc0));
          _0x5043f5(_0x7ccbc0, "m_mgNode", _0x118b7c, _0x21436e(_0x7ccbc0));
          _0x5043f5(_0x7ccbc0, "m_fgNode", _0xb87c5a, _0x21436e(_0x7ccbc0));
          _0x7ccbc0.m_playName = _0x5c3994.MG_L;
          _0x7ccbc0.m_isLandscape = null;
          return _0x7ccbc0;
        }
        _0x197a27(_0x3f8ce1, _0x8a4d90);
        var _0x1f6881 = _0x3f8ce1.prototype;
        _0x1f6881.ShowMg = function () {
          if (this.m_isLandscape) {
            this.m_playName = _0x5c3994.MG_L;
          } else {
            this.m_playName = _0x5c3994.MG_S;
          }
          this.PlayAnim();
          this.m_mgNode.active = true;
          this.m_fgNode.active = false;
        };
        _0x1f6881.ShowFg = function () {
          if (this.m_isLandscape) {
            this.m_playName = _0x5c3994.FG_L;
          } else {
            this.m_playName = _0x5c3994.FG_S;
          }
          this.PlayAnim();
          this.m_mgNode.active = false;
          this.m_fgNode.active = true;
        };
        _0x1f6881.PlayAnim = function () {
          this.m_bgSkeleton.clearTrack(0x0);
          this.m_bgSkeleton.setToSetupPose();
          this.m_bgSkeleton.setAnimation(0x0, this.m_playName, true);
          this.m_pillarSpine.clearTrack(0x0);
          this.m_pillarSpine.setToSetupPose();
          this.m_pillarSpine.setAnimation(0x0, this.m_playName, true);
        };
        _0x1f6881.OnRotation = function (_0x496893) {
          this.m_isLandscape = _0x496893;
          switch (this.m_playName) {
            case _0x5c3994.MG_L:
            case _0x5c3994.MG_S:
              this.ShowMg();
              break;
            case _0x5c3994.FG_L:
            case _0x5c3994.FG_S:
              this.ShowFg();
          }
        };
        return _0x3f8ce1;
      }(_0x2e72bb);
      _0x15fb58 = _0x49a46a(_0x11082b.prototype, 'm_bgSkeleton', [_0x17daa1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3cbd7c = _0x49a46a(_0x11082b.prototype, 'm_pillarSpine', [_0x1482d1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x118b7c = _0x49a46a(_0x11082b.prototype, "m_mgNode", [_0x294c07], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xb87c5a = _0x49a46a(_0x11082b.prototype, 'm_fgNode', [_0x157a3c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x4948d6;
      var _0x465fe7;
      var _0x5e147e;
      var _0x547ac8;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, 'a87b7JWG/BMSJTaEBXdv8DT', "GameIntro", undefined);
      var _0x24e7e6 = _0x73005c.ccclass;
      var _0x26ff9a = _0x73005c.property;
      var _0x3b72d4;
      !function (_0xac097d) {
        _0xac097d.GAMEINTRO_L = 'GameIntro_L';
        _0xac097d.GAMEINTRO_S = 'GameIntro_S';
      }(_0x3b72d4 || (_0x3b72d4 = {}));
      _0x4948d6 = _0x24e7e6("GameIntro");
      _0x465fe7 = _0x26ff9a({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': "spine"
      });
      _0x5e147e = function (_0x27faca) {
        function _0x4310ac() {
          var _0x534718;
          var _0x2d5325 = arguments.length;
          var _0x60f992 = new Array(_0x2d5325);
          for (var _0x2d3e11 = 0x0; _0x2d3e11 < _0x2d5325; _0x2d3e11++) {
            _0x60f992[_0x2d3e11] = arguments[_0x2d3e11];
          }
          _0x534718 = _0x27faca.call.apply(_0x27faca, [this].concat(_0x60f992)) || this;
          _0x5043f5(_0x534718, "m_gameIntro", _0x547ac8, _0x21436e(_0x534718));
          _0x534718.m_isLandscape = null;
          _0x534718.m_isInit = null;
          return _0x534718;
        }
        _0x197a27(_0x4310ac, _0x27faca);
        var _0x14d946 = _0x4310ac.prototype;
        _0x14d946.start = function () {};
        _0x14d946.update = function (_0x3332e4) {};
        _0x14d946.onExit = function () {
          this.m_gameIntro.clearTrack(0x0);
          this.m_gameIntro.setToSetupPose();
          this.node.active = false;
        };
        _0x14d946.Init = function (_0x3b5551) {
          if (undefined === _0x3b5551) {
            _0x3b5551 = false;
          }
          this.m_isInit = true;
          if (!_0x3b5551) {
            this.node.active = true;
          }
          var _0x1fca2e = _0x3b72d4.GAMEINTRO_L;
          if (!this.m_isLandscape) {
            _0x1fca2e = _0x3b72d4.GAMEINTRO_S;
          }
          this.m_gameIntro.clearTrack(0x0);
          this.m_gameIntro.setToSetupPose();
          this.m_gameIntro.setAnimation(0x0, _0x1fca2e, false);
          this.m_gameIntro.paused = true;
        };
        _0x14d946.SkipGameIntro = function () {
          this.m_isInit = false;
          this.node.active = false;
        };
        _0x14d946.ShowGameIntro = function () {
          var _0x4f1d67 = _0x2d97e1(_0x3a966d().mark(function _0x3149ce(_0x1b9c1f, _0x1a35be) {
            return _0x3a966d().wrap(function (_0x41a61b) {
              for (;;) {
                switch (_0x41a61b.prev = _0x41a61b.next) {
                  case 0x0:
                    if (undefined === _0x1a35be) {
                      _0x1a35be = null;
                    }
                    this.m_isInit = false;
                    this.m_isLandscape = _0x1b9c1f;
                    this.m_gameIntro.paused = false;
                    _0x41a61b.next = 0x6;
                    return this.playAnimation(_0x1a35be);
                  case 0x6:
                  case "end":
                    return _0x41a61b.stop();
                }
              }
            }, _0x3149ce, this);
          }));
          return function (_0x3cfcac, _0x565a01) {
            return _0x4f1d67.apply(this, arguments);
          };
        }();
        _0x14d946.playAnimation = function (_0x503955) {
          var _0x219c5f = this;
          if (undefined === _0x503955) {
            _0x503955 = null;
          }
          return new Promise(function (_0x4d10d8) {
            var _0x1aa72d = _0x3b72d4.GAMEINTRO_L;
            if (!_0x219c5f.m_isLandscape) {
              _0x1aa72d = _0x3b72d4.GAMEINTRO_S;
            }
            _0x219c5f.m_gameIntro.clearTrack(0x0);
            _0x219c5f.m_gameIntro.setToSetupPose();
            var _0x5f00cf = _0x219c5f.m_gameIntro.setAnimation(0x0, _0x1aa72d, false);
            var _0x13d012 = function () {
              _0x219c5f.m_gameIntro.clearTrack(0x0);
              _0x219c5f.m_gameIntro.setToSetupPose();
              _0x219c5f.node.active = false;
              if (!(null == _0x503955)) {
                _0x503955();
              }
            };
            if (_0x5f00cf) {
              _0x219c5f.m_gameIntro.setTrackEventListener(_0x5f00cf, function (_0x58eba9, _0x487681) {});
              _0x219c5f.m_gameIntro.setTrackCompleteListener(_0x5f00cf, function () {
                _0x13d012();
                _0x4d10d8(null);
              });
            } else {
              _0x219c5f.m_gameIntro.setCompleteListener(function () {
                _0x13d012();
                _0x4d10d8(null);
              });
            }
          });
        };
        _0x14d946.OnRotation = function (_0x453218) {
          this.m_isLandscape = _0x453218;
          if (this.m_isInit) {
            this.Init(true);
          }
        };
        return _0x4310ac;
      }(_0x2e72bb);
      _0x547ac8 = _0x49a46a(_0x5e147e.prototype, 'm_gameIntro', [_0x465fe7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x2ccb49;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "7bdf03M3+BPyqBOwDHBi3w+", 'ExplodeState', undefined);
      var _0x26efc4 = _0x73005c.ccclass;
      _0x2ccb49 = _0x26efc4("ExplodeState");
      var _0x70f81d;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "0ca703aCZtMlaBzbreCFwjV", 'FirstPlateState', undefined);
      var _0x19d732 = _0x73005c.ccclass;
      _0x70f81d = _0x19d732("FirstPlateState");
      var _0x561a17;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "bea09OQMiRNH7UIdcl1GRiw", "MatchingPatchUpState", undefined);
      var _0x17a9a8 = _0x73005c.ccclass;
      _0x561a17 = _0x17a9a8("MatchingPatchUpState");
      var _0x297e5e;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "61809mNrcdBB69dFgqo0I0V", "CheckState", undefined);
      var _0x4b4729 = _0x73005c.ccclass;
      _0x297e5e = _0x4b4729('CheckState');
      var _0x47e4cf;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "cbe91c0iM1FKqH0Z3foAb5d", "RoundEndState", undefined);
      var _0x385fd3 = _0x73005c.ccclass;
      _0x47e4cf = _0x385fd3("RoundEndState");
      var _0xc6b92e;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "b2bf2Jfu4tFL6tyf81W0hnA", 'FeatureShowState', undefined);
      var _0x3b1958 = _0x73005c.ccclass;
      _0xc6b92e = _0x3b1958('FeatureShowState');
      var _0x3f736a;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, 'cb42fqX+H9GcoYj+CD+5O4m', "UnshowPerpareState", undefined);
      var _0x5230ae = _0x73005c.ccclass;
      _0x3f736a = _0x5230ae("UnshowPerpareState");
      var _0x5f2ecf;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "643c6jCaeVLnY8XPRH9SQio", "IdleState", undefined);
      var _0x35f7fc = _0x73005c.ccclass;
      _0x5f2ecf = _0x35f7fc("IdleState");
      var _0x132eb7;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "ea6baEO/LRGbKtMfjpG5W+A", "PlateShowState", undefined);
      var _0x22e444 = _0x73005c.ccclass;
      _0x132eb7 = _0x22e444("PlateShowState");
      var _0x36c3fa;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "16d6dyl3nVP4bwHDnM4CoEl", 'RoundShowEndState', undefined);
      var _0x2a960f = _0x73005c.ccclass;
      _0x36c3fa = _0x2a960f("RoundShowEndState");
      var _0x22ade7;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "fa124Iqtr9LHaHFEEe6A6i7", "SpinState", undefined);
      var _0x14dc52 = _0x73005c.ccclass;
      _0x22ade7 = _0x14dc52("SpinState");
      var _0x33d355;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "d687cWeCb9GWqQsBghfZ8VX", "WaitReadyState", undefined);
      var _0x4e94c6 = _0x73005c.ccclass;
      _0x33d355 = _0x4e94c6('WaitReadyState');
      var _0xc9718e;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, '187d6VUJyhC8ZvVrPADq1Cw', "WaitResState", undefined);
      var _0x411f8a = _0x73005c.ccclass;
      _0xc9718e = _0x411f8a("WaitResState");
      var _0x30f534;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "1942aXSNGlGupSzoZKVjwU+", "EnterFreeState", undefined);
      var _0x46bb14 = _0x73005c.ccclass;
      _0x30f534 = _0x46bb14('EnterFreeState');
      var _0x4b0655;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "af0c6FAOvdB1YZHca+Dcvhd", 'LeaveFreeState', undefined);
      var _0x2c3b50 = _0x73005c.ccclass;
      _0x4b0655 = _0x2c3b50("LeaveFreeState");
      _0x2c4ee5._RF.pop();
      var _0xd3f00f = function () {
        function _0x24d4b7() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x303643 = _0x24d4b7.prototype;
        _0x303643.define = function (_0x2ece23, _0x37ebea, _0x13e574) {
          this._registry[_0x2ece23] = {
            'factory': _0x37ebea,
            'resolveMap': _0x13e574
          };
        };
        _0x303643.require = function (_0xcfbe40) {
          return this._require(_0xcfbe40);
        };
        _0x303643.throwInvalidWrapper = function (_0x219a03, _0x472fbd) {
          throw new Error("Module '" + _0x219a03 + "' imported from '" + _0x472fbd + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x303643._require = function (_0x37aad9, _0x2fce10) {
          var _0x48e00b = this._moduleCache[_0x37aad9];
          if (_0x48e00b) {
            return _0x48e00b.exports;
          }
          var _0x195589 = {
            'id': _0x37aad9,
            'exports': {}
          };
          this._moduleCache[_0x37aad9] = _0x195589;
          this._tryModuleLoad(_0x195589, _0x37aad9);
          return _0x195589.exports;
        };
        _0x303643._resolve = function (_0x4b5d2e, _0x1dbbde) {
          return this._resolveFromInfos(_0x4b5d2e, _0x1dbbde) || this._throwUnresolved(_0x4b5d2e, _0x1dbbde);
        };
        _0x303643._resolveFromInfos = function (_0x41ff4c, _0x5481aa) {
          var _0x542eb;
          var _0x2cf924;
          return _0x41ff4c in cjsInfos ? _0x41ff4c : _0x5481aa && null != (_0x542eb = null == (_0x2cf924 = cjsInfos[_0x5481aa]) ? undefined : _0x2cf924.resolveCache[_0x41ff4c]) ? _0x542eb : undefined;
        };
        _0x303643._tryModuleLoad = function (_0x326497, _0x1c0ef6) {
          var _0x39e0e3 = true;
          try {
            this._load(_0x326497, _0x1c0ef6);
            _0x39e0e3 = false;
          } finally {
            if (_0x39e0e3) {
              delete this._moduleCache[_0x1c0ef6];
            }
          }
        };
        _0x303643._load = function (_0xaa5bc8, _0x23f4de) {
          var _0x117ec = this._loadWrapper(_0x23f4de);
          var _0x49a389 = _0x117ec.factory;
          var _0x19d46a = _0x117ec.resolveMap;
          var _0x2d9cf2 = this._createRequire(_0xaa5bc8);
          var _0x54fbe7 = _0x19d46a ? this._createRequireWithResolveMap("function" == typeof _0x19d46a ? _0x19d46a() : _0x19d46a, _0x2d9cf2) : _0x2d9cf2;
          _0x49a389(_0xaa5bc8.exports, _0x54fbe7, _0xaa5bc8);
        };
        _0x303643._loadWrapper = function (_0x1d514e) {
          return _0x1d514e in this._registry ? this._registry[_0x1d514e] : this._loadHostProvidedModules(_0x1d514e);
        };
        _0x303643._loadHostProvidedModules = function (_0x326090) {
          return {
            'factory': function (_0x1aca20, _0x4b0d6a, _0x51955d) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x326090 + "'.");
              }
              try {
                _0x51955d.exports = require(_0x326090);
              } catch (_0x22aeaf) {
                throw new Error("Exception thrown when calling host defined require('" + _0x326090 + "').", {
                  'cause': _0x22aeaf
                });
              }
            }
          };
        };
        _0x303643._createRequire = function (_0x17b806) {
          var _0x173a79 = this;
          return function (_0x9e268c) {
            return _0x173a79._require(_0x9e268c, _0x17b806);
          };
        };
        _0x303643._createRequireWithResolveMap = function (_0x259101, _0x3c669c) {
          return function (_0x2b5a17) {
            var _0x13ab84 = _0x259101[_0x2b5a17];
            if (_0x13ab84) {
              return _0x3c669c(_0x13ab84);
            }
            throw new Error("Unresolved specifier " + _0x2b5a17);
          };
        };
        _0x303643._throwUnresolved = function (_0x174816, _0x217550) {
          throw new Error("Unable to resolve " + _0x174816 + " from " + parent + '.');
        };
        return _0x24d4b7;
      }();
      var _0x1c1e99 = new _0xd3f00f();
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x59582c, _0x2108e0, _0x49e58c, _0x3e313d, _0x4c1457) {
        _0x49e58c.exports = function (_0x4a8d5b, _0x51ff2a) {
          var _0x54e426 = new Array(arguments.length - 0x1);
          var _0x453fe2 = 0x0;
          var _0xf3d537 = 0x2;
          var _0xf430 = true;
          for (; _0xf3d537 < arguments.length;) {
            _0x54e426[_0x453fe2++] = arguments[_0xf3d537++];
          }
          return new Promise(function (_0x10cc08, _0xcaeeb3) {
            _0x54e426[_0x453fe2] = function (_0x1c1532) {
              if (_0xf430) {
                _0xf430 = false;
                if (_0x1c1532) {
                  _0xcaeeb3(_0x1c1532);
                } else {
                  var _0x273e9e = new Array(arguments.length - 0x1);
                  for (var _0x4fadaa = 0x0; _0x4fadaa < _0x273e9e.length;) {
                    _0x273e9e[_0x4fadaa++] = arguments[_0x4fadaa];
                  }
                  _0x10cc08.apply(null, _0x273e9e);
                }
              }
            };
            try {
              _0x4a8d5b.apply(_0x51ff2a || null, _0x54e426);
            } catch (_0x4784e2) {
              if (_0xf430) {
                _0xf430 = false;
                _0xcaeeb3(_0x4784e2);
              }
            }
          });
        };
        _0x49e58c.exports;
      }, {});
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (_0x308806, _0x3b5b42, _0x366261, _0xf8fb8, _0x1453f2) {
        _0x308806.length = function (_0x3d0253) {
          var _0x3ef0d7 = _0x3d0253.length;
          if (!_0x3ef0d7) {
            return 0x0;
          }
          for (var _0x54aef3 = 0x0; --_0x3ef0d7 % 0x4 > 0x1 && '=' === _0x3d0253.charAt(_0x3ef0d7);) {
            ++_0x54aef3;
          }
          return Math.ceil(0x3 * _0x3d0253.length) / 0x4 - _0x54aef3;
        };
        var _0x26442c = new Array(0x40);
        var _0x503fd6 = new Array(0x7b);
        for (var _0x478c79 = 0x0; _0x478c79 < 0x40;) {
          _0x503fd6[_0x26442c[_0x478c79] = _0x478c79 < 0x1a ? _0x478c79 + 0x41 : _0x478c79 < 0x34 ? _0x478c79 + 0x47 : _0x478c79 < 0x3e ? _0x478c79 - 0x4 : _0x478c79 - 0x3b | 0x2b] = _0x478c79++;
        }
        _0x308806.encode = function (_0x5aaac5, _0x39ff42, _0x20648c) {
          var _0x3aafb4;
          var _0xda8e60 = null;
          var _0x42c501 = [];
          var _0x2ffc9e = 0x0;
          for (var _0x52b3c1 = 0x0; _0x39ff42 < _0x20648c;) {
            var _0xccbf26 = _0x5aaac5[_0x39ff42++];
            switch (_0x52b3c1) {
              case 0x0:
                _0x42c501[_0x2ffc9e++] = _0x26442c[_0xccbf26 >> 0x2];
                _0x3aafb4 = (0x3 & _0xccbf26) << 0x4;
                _0x52b3c1 = 0x1;
                break;
              case 0x1:
                _0x42c501[_0x2ffc9e++] = _0x26442c[_0x3aafb4 | _0xccbf26 >> 0x4];
                _0x3aafb4 = (0xf & _0xccbf26) << 0x2;
                _0x52b3c1 = 0x2;
                break;
              case 0x2:
                _0x42c501[_0x2ffc9e++] = _0x26442c[_0x3aafb4 | _0xccbf26 >> 0x6];
                _0x42c501[_0x2ffc9e++] = _0x26442c[0x3f & _0xccbf26];
                _0x52b3c1 = 0x0;
            }
            if (_0x2ffc9e > 0x1fff) {
              (_0xda8e60 || (_0xda8e60 = [])).push(String.fromCharCode.apply(String, _0x42c501));
              _0x2ffc9e = 0x0;
            }
          }
          if (_0x52b3c1) {
            _0x42c501[_0x2ffc9e++] = _0x26442c[_0x3aafb4];
            _0x42c501[_0x2ffc9e++] = 0x3d;
            if (0x1 === _0x52b3c1) {
              _0x42c501[_0x2ffc9e++] = 0x3d;
            }
          }
          return _0xda8e60 ? (_0x2ffc9e && _0xda8e60.push(String.fromCharCode.apply(String, _0x42c501.slice(0x0, _0x2ffc9e))), _0xda8e60.join('')) : String.fromCharCode.apply(String, _0x42c501.slice(0x0, _0x2ffc9e));
        };
        _0x308806.decode = function (_0x3ecc15, _0x54ec68, _0x20abe1) {
          var _0x149ce4;
          var _0x2fdebc = _0x20abe1;
          var _0x329f48 = 0x0;
          for (var _0x412390 = 0x0; _0x412390 < _0x3ecc15.length;) {
            var _0x4cd524 = _0x3ecc15.charCodeAt(_0x412390++);
            if (0x3d === _0x4cd524 && _0x329f48 > 0x1) {
              break;
            }
            if (undefined === (_0x4cd524 = _0x503fd6[_0x4cd524])) {
              throw Error("invalid encoding");
            }
            switch (_0x329f48) {
              case 0x0:
                _0x149ce4 = _0x4cd524;
                _0x329f48 = 0x1;
                break;
              case 0x1:
                _0x54ec68[_0x20abe1++] = _0x149ce4 << 0x2 | (0x30 & _0x4cd524) >> 0x4;
                _0x149ce4 = _0x4cd524;
                _0x329f48 = 0x2;
                break;
              case 0x2:
                _0x54ec68[_0x20abe1++] = (0xf & _0x149ce4) << 0x4 | (0x3c & _0x4cd524) >> 0x2;
                _0x149ce4 = _0x4cd524;
                _0x329f48 = 0x3;
                break;
              case 0x3:
                _0x54ec68[_0x20abe1++] = (0x3 & _0x149ce4) << 0x6 | _0x4cd524;
                _0x329f48 = 0x0;
            }
          }
          if (0x1 === _0x329f48) {
            throw Error("invalid encoding");
          }
          return _0x20abe1 - _0x2fdebc;
        };
        _0x308806.test = function (_0x377d9e) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x377d9e);
        };
        _0x366261.exports;
      }, {});
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x55590f, _0x2966b7, _0x3ab475, _0x46081e, _0x5797b3) {
        function _0x47ccf1() {
          this._listeners = {};
        }
        _0x3ab475.exports = _0x47ccf1;
        _0x47ccf1.prototype.on = function (_0x38deec, _0x4fb6a6, _0x406aa1) {
          (this._listeners[_0x38deec] || (this._listeners[_0x38deec] = [])).push({
            'fn': _0x4fb6a6,
            'ctx': _0x406aa1 || this
          });
          return this;
        };
        _0x47ccf1.prototype.off = function (_0x25efe4, _0x3517dc) {
          if (undefined === _0x25efe4) {
            this._listeners = {};
          } else {
            if (undefined === _0x3517dc) {
              this._listeners[_0x25efe4] = [];
            } else {
              var _0x4525a7 = this._listeners[_0x25efe4];
              for (var _0x589cdd = 0x0; _0x589cdd < _0x4525a7.length;) {
                if (_0x4525a7[_0x589cdd].fn === _0x3517dc) {
                  _0x4525a7.splice(_0x589cdd, 0x1);
                } else {
                  ++_0x589cdd;
                }
              }
            }
          }
          return this;
        };
        _0x47ccf1.prototype.emit = function (_0x262df1) {
          var _0x139b2f = this._listeners[_0x262df1];
          if (_0x139b2f) {
            var _0x582493 = [];
            for (var _0x2628a3 = 0x1; _0x2628a3 < arguments.length;) {
              _0x582493.push(arguments[_0x2628a3++]);
            }
            for (_0x2628a3 = 0x0; _0x2628a3 < _0x139b2f.length;) {
              _0x139b2f[_0x2628a3].fn.apply(_0x139b2f[_0x2628a3++].ctx, _0x582493);
            }
          }
          return this;
        };
        _0x3ab475.exports;
      }, {});
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0x5e0f0f, _0xa3eb98, _0x397384, _0x3adb61, _0x537f98) {
        function _0x598c59(_0x1e30c9) {
          if ('undefined' != typeof Float32Array) {
            (function () {
              var _0x5d49db = new Float32Array([-0x0]);
              var _0x4891be = new Uint8Array(_0x5d49db.buffer);
              var _0x354a43 = 0x80 === _0x4891be[0x3];
              function _0x5dafab(_0x224f5b, _0x9b1e9d, _0x3a0cf7) {
                _0x5d49db[0x0] = _0x224f5b;
                _0x9b1e9d[_0x3a0cf7] = _0x4891be[0x0];
                _0x9b1e9d[_0x3a0cf7 + 0x1] = _0x4891be[0x1];
                _0x9b1e9d[_0x3a0cf7 + 0x2] = _0x4891be[0x2];
                _0x9b1e9d[_0x3a0cf7 + 0x3] = _0x4891be[0x3];
              }
              function _0x4a8763(_0x3b1538, _0x352c5c, _0x2d2c0c) {
                _0x5d49db[0x0] = _0x3b1538;
                _0x352c5c[_0x2d2c0c] = _0x4891be[0x3];
                _0x352c5c[_0x2d2c0c + 0x1] = _0x4891be[0x2];
                _0x352c5c[_0x2d2c0c + 0x2] = _0x4891be[0x1];
                _0x352c5c[_0x2d2c0c + 0x3] = _0x4891be[0x0];
              }
              function _0xfd4ea3(_0x3fa7ad, _0x3fc343) {
                _0x4891be[0x0] = _0x3fa7ad[_0x3fc343];
                _0x4891be[0x1] = _0x3fa7ad[_0x3fc343 + 0x1];
                _0x4891be[0x2] = _0x3fa7ad[_0x3fc343 + 0x2];
                _0x4891be[0x3] = _0x3fa7ad[_0x3fc343 + 0x3];
                return _0x5d49db[0x0];
              }
              function _0x560db6(_0x59490c, _0x14537a) {
                _0x4891be[0x3] = _0x59490c[_0x14537a];
                _0x4891be[0x2] = _0x59490c[_0x14537a + 0x1];
                _0x4891be[0x1] = _0x59490c[_0x14537a + 0x2];
                _0x4891be[0x0] = _0x59490c[_0x14537a + 0x3];
                return _0x5d49db[0x0];
              }
              _0x1e30c9.writeFloatLE = _0x354a43 ? _0x5dafab : _0x4a8763;
              _0x1e30c9.writeFloatBE = _0x354a43 ? _0x4a8763 : _0x5dafab;
              _0x1e30c9.readFloatLE = _0x354a43 ? _0xfd4ea3 : _0x560db6;
              _0x1e30c9.readFloatBE = _0x354a43 ? _0x560db6 : _0xfd4ea3;
            })();
          } else {
            (function () {
              function _0x445722(_0x1c0539, _0x2735ca, _0x426526, _0x5090da) {
                var _0x19a80f = _0x2735ca < 0x0 ? 0x1 : 0x0;
                if (_0x19a80f) {
                  _0x2735ca = -_0x2735ca;
                }
                if (0x0 === _0x2735ca) {
                  _0x1c0539(0x1 / _0x2735ca > 0x0 ? 0x0 : 0x80000000, _0x426526, _0x5090da);
                } else {
                  if (isNaN(_0x2735ca)) {
                    _0x1c0539(0x7fc00000, _0x426526, _0x5090da);
                  } else {
                    if (_0x2735ca > 0xffffff00000000000000000000000000) {
                      _0x1c0539((_0x19a80f << 0x1f | 0x7f800000) >>> 0x0, _0x426526, _0x5090da);
                    } else {
                      if (_0x2735ca < 1.1754943508222875e-38) {
                        _0x1c0539((_0x19a80f << 0x1f | Math.round(_0x2735ca / 1.401298464324817e-45)) >>> 0x0, _0x426526, _0x5090da);
                      } else {
                        var _0x26993d = Math.floor(Math.log(_0x2735ca) / Math.LN2);
                        _0x1c0539((_0x19a80f << 0x1f | _0x26993d + 0x7f << 0x17 | 0x7fffff & Math.round(_0x2735ca * Math.pow(0x2, -_0x26993d) * 0x800000)) >>> 0x0, _0x426526, _0x5090da);
                      }
                    }
                  }
                }
              }
              function _0x335197(_0x3e1831, _0x39d4fa, _0x29a485) {
                var _0x2dd2d5 = _0x3e1831(_0x39d4fa, _0x29a485);
                var _0xab93ed = 0x2 * (_0x2dd2d5 >> 0x1f) + 0x1;
                var _0x1fbd4e = _0x2dd2d5 >>> 0x17 & 0xff;
                var _0x19e4f4 = 0x7fffff & _0x2dd2d5;
                return 0xff === _0x1fbd4e ? _0x19e4f4 ? NaN : _0xab93ed * Infinity : 0x0 === _0x1fbd4e ? 1.401298464324817e-45 * _0xab93ed * _0x19e4f4 : _0xab93ed * Math.pow(0x2, _0x1fbd4e - 0x96) * (_0x19e4f4 + 0x800000);
              }
              _0x1e30c9.writeFloatLE = _0x445722.bind(null, _0x3916de);
              _0x1e30c9.writeFloatBE = _0x445722.bind(null, _0x57cebf);
              _0x1e30c9.readFloatLE = _0x335197.bind(null, _0x256d55);
              _0x1e30c9.readFloatBE = _0x335197.bind(null, _0x423b7e);
            })();
          }
          if ('undefined' != typeof Float64Array) {
            (function () {
              var _0x5d1d97 = new Float64Array([-0x0]);
              var _0x472eb0 = new Uint8Array(_0x5d1d97.buffer);
              var _0x28be62 = 0x80 === _0x472eb0[0x7];
              function _0x328f66(_0x5a5906, _0x21b7cc, _0x569b59) {
                _0x5d1d97[0x0] = _0x5a5906;
                _0x21b7cc[_0x569b59] = _0x472eb0[0x0];
                _0x21b7cc[_0x569b59 + 0x1] = _0x472eb0[0x1];
                _0x21b7cc[_0x569b59 + 0x2] = _0x472eb0[0x2];
                _0x21b7cc[_0x569b59 + 0x3] = _0x472eb0[0x3];
                _0x21b7cc[_0x569b59 + 0x4] = _0x472eb0[0x4];
                _0x21b7cc[_0x569b59 + 0x5] = _0x472eb0[0x5];
                _0x21b7cc[_0x569b59 + 0x6] = _0x472eb0[0x6];
                _0x21b7cc[_0x569b59 + 0x7] = _0x472eb0[0x7];
              }
              function _0x40381a(_0x296363, _0x23a62b, _0x4121c3) {
                _0x5d1d97[0x0] = _0x296363;
                _0x23a62b[_0x4121c3] = _0x472eb0[0x7];
                _0x23a62b[_0x4121c3 + 0x1] = _0x472eb0[0x6];
                _0x23a62b[_0x4121c3 + 0x2] = _0x472eb0[0x5];
                _0x23a62b[_0x4121c3 + 0x3] = _0x472eb0[0x4];
                _0x23a62b[_0x4121c3 + 0x4] = _0x472eb0[0x3];
                _0x23a62b[_0x4121c3 + 0x5] = _0x472eb0[0x2];
                _0x23a62b[_0x4121c3 + 0x6] = _0x472eb0[0x1];
                _0x23a62b[_0x4121c3 + 0x7] = _0x472eb0[0x0];
              }
              function _0x1b0287(_0x51192d, _0x13519e) {
                _0x472eb0[0x0] = _0x51192d[_0x13519e];
                _0x472eb0[0x1] = _0x51192d[_0x13519e + 0x1];
                _0x472eb0[0x2] = _0x51192d[_0x13519e + 0x2];
                _0x472eb0[0x3] = _0x51192d[_0x13519e + 0x3];
                _0x472eb0[0x4] = _0x51192d[_0x13519e + 0x4];
                _0x472eb0[0x5] = _0x51192d[_0x13519e + 0x5];
                _0x472eb0[0x6] = _0x51192d[_0x13519e + 0x6];
                _0x472eb0[0x7] = _0x51192d[_0x13519e + 0x7];
                return _0x5d1d97[0x0];
              }
              function _0x257b18(_0x1e1f10, _0x30556f) {
                _0x472eb0[0x7] = _0x1e1f10[_0x30556f];
                _0x472eb0[0x6] = _0x1e1f10[_0x30556f + 0x1];
                _0x472eb0[0x5] = _0x1e1f10[_0x30556f + 0x2];
                _0x472eb0[0x4] = _0x1e1f10[_0x30556f + 0x3];
                _0x472eb0[0x3] = _0x1e1f10[_0x30556f + 0x4];
                _0x472eb0[0x2] = _0x1e1f10[_0x30556f + 0x5];
                _0x472eb0[0x1] = _0x1e1f10[_0x30556f + 0x6];
                _0x472eb0[0x0] = _0x1e1f10[_0x30556f + 0x7];
                return _0x5d1d97[0x0];
              }
              _0x1e30c9.writeDoubleLE = _0x28be62 ? _0x328f66 : _0x40381a;
              _0x1e30c9.writeDoubleBE = _0x28be62 ? _0x40381a : _0x328f66;
              _0x1e30c9.readDoubleLE = _0x28be62 ? _0x1b0287 : _0x257b18;
              _0x1e30c9.readDoubleBE = _0x28be62 ? _0x257b18 : _0x1b0287;
            })();
          } else {
            (function () {
              function _0x4d03e6(_0x41f94b, _0x2c85eb, _0x4bf422, _0x2cb8b8, _0x8623dc, _0x1578e9) {
                var _0x165062 = _0x2cb8b8 < 0x0 ? 0x1 : 0x0;
                if (_0x165062) {
                  _0x2cb8b8 = -_0x2cb8b8;
                }
                if (0x0 === _0x2cb8b8) {
                  _0x41f94b(0x0, _0x8623dc, _0x1578e9 + _0x2c85eb);
                  _0x41f94b(0x1 / _0x2cb8b8 > 0x0 ? 0x0 : 0x80000000, _0x8623dc, _0x1578e9 + _0x4bf422);
                } else {
                  if (isNaN(_0x2cb8b8)) {
                    _0x41f94b(0x0, _0x8623dc, _0x1578e9 + _0x2c85eb);
                    _0x41f94b(0x7ff80000, _0x8623dc, _0x1578e9 + _0x4bf422);
                  } else {
                    if (_0x2cb8b8 > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x41f94b(0x0, _0x8623dc, _0x1578e9 + _0x2c85eb);
                      _0x41f94b((_0x165062 << 0x1f | 0x7ff00000) >>> 0x0, _0x8623dc, _0x1578e9 + _0x4bf422);
                    } else {
                      var _0x1d095c;
                      if (_0x2cb8b8 < 2.2250738585072014e-308) {
                        _0x41f94b((_0x1d095c = _0x2cb8b8 / 5e-324) >>> 0x0, _0x8623dc, _0x1578e9 + _0x2c85eb);
                        _0x41f94b((_0x165062 << 0x1f | _0x1d095c / 0x100000000) >>> 0x0, _0x8623dc, _0x1578e9 + _0x4bf422);
                      } else {
                        var _0x569921 = Math.floor(Math.log(_0x2cb8b8) / Math.LN2);
                        if (0x400 === _0x569921) {
                          _0x569921 = 0x3ff;
                        }
                        _0x41f94b(0x10000000000000 * (_0x1d095c = _0x2cb8b8 * Math.pow(0x2, -_0x569921)) >>> 0x0, _0x8623dc, _0x1578e9 + _0x2c85eb);
                        _0x41f94b((_0x165062 << 0x1f | _0x569921 + 0x3ff << 0x14 | 0x100000 * _0x1d095c & 0xfffff) >>> 0x0, _0x8623dc, _0x1578e9 + _0x4bf422);
                      }
                    }
                  }
                }
              }
              function _0xabb1a1(_0x1bf2ed, _0x3cc9c9, _0x32a7b4, _0x25ce8f, _0x45ce2f) {
                var _0x4c6b68 = _0x1bf2ed(_0x25ce8f, _0x45ce2f + _0x3cc9c9);
                var _0x35db1f = _0x1bf2ed(_0x25ce8f, _0x45ce2f + _0x32a7b4);
                var _0x56d8c4 = 0x2 * (_0x35db1f >> 0x1f) + 0x1;
                var _0x5855c9 = _0x35db1f >>> 0x14 & 0x7ff;
                var _0xc96c71 = 0x100000000 * (0xfffff & _0x35db1f) + _0x4c6b68;
                return 0x7ff === _0x5855c9 ? _0xc96c71 ? NaN : _0x56d8c4 * Infinity : 0x0 === _0x5855c9 ? 5e-324 * _0x56d8c4 * _0xc96c71 : _0x56d8c4 * Math.pow(0x2, _0x5855c9 - 0x433) * (_0xc96c71 + 0x10000000000000);
              }
              _0x1e30c9.writeDoubleLE = _0x4d03e6.bind(null, _0x3916de, 0x0, 0x4);
              _0x1e30c9.writeDoubleBE = _0x4d03e6.bind(null, _0x57cebf, 0x4, 0x0);
              _0x1e30c9.readDoubleLE = _0xabb1a1.bind(null, _0x256d55, 0x0, 0x4);
              _0x1e30c9.readDoubleBE = _0xabb1a1.bind(null, _0x423b7e, 0x4, 0x0);
            })();
          }
          return _0x1e30c9;
        }
        function _0x3916de(_0x7a954a, _0x30915d, _0x571368) {
          _0x30915d[_0x571368] = 0xff & _0x7a954a;
          _0x30915d[_0x571368 + 0x1] = _0x7a954a >>> 0x8 & 0xff;
          _0x30915d[_0x571368 + 0x2] = _0x7a954a >>> 0x10 & 0xff;
          _0x30915d[_0x571368 + 0x3] = _0x7a954a >>> 0x18;
        }
        function _0x57cebf(_0x55b6c8, _0x5d1108, _0x1d28a9) {
          _0x5d1108[_0x1d28a9] = _0x55b6c8 >>> 0x18;
          _0x5d1108[_0x1d28a9 + 0x1] = _0x55b6c8 >>> 0x10 & 0xff;
          _0x5d1108[_0x1d28a9 + 0x2] = _0x55b6c8 >>> 0x8 & 0xff;
          _0x5d1108[_0x1d28a9 + 0x3] = 0xff & _0x55b6c8;
        }
        function _0x256d55(_0x5bf8dc, _0x367f5a) {
          return (_0x5bf8dc[_0x367f5a] | _0x5bf8dc[_0x367f5a + 0x1] << 0x8 | _0x5bf8dc[_0x367f5a + 0x2] << 0x10 | _0x5bf8dc[_0x367f5a + 0x3] << 0x18) >>> 0x0;
        }
        function _0x423b7e(_0x1a9b85, _0x19a880) {
          return (_0x1a9b85[_0x19a880] << 0x18 | _0x1a9b85[_0x19a880 + 0x1] << 0x10 | _0x1a9b85[_0x19a880 + 0x2] << 0x8 | _0x1a9b85[_0x19a880 + 0x3]) >>> 0x0;
        }
        _0x397384.exports = _0x598c59(_0x598c59);
        _0x397384.exports;
        _0x397384.exports.writeFloatLE;
        _0x397384.exports.writeFloatBE;
        _0x397384.exports.readFloatLE;
        _0x397384.exports.readFloatBE;
        _0x397384.exports.writeDoubleLE;
        _0x397384.exports.writeDoubleBE;
        _0x397384.exports.readDoubleLE;
        _0x397384.exports.readDoubleBE;
      }, {});
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (_0x236741, _0x38d1d5, _0x58145b, _0x4a88c9, _0x5c315e) {
        function _0x427698(_0x57f46d) {
          try {
            var _0x175c46 = eval("quire".replace(/^/, 're'))(_0x57f46d);
            if (_0x175c46 && (_0x175c46.length || Object.keys(_0x175c46).length)) {
              return _0x175c46;
            }
          } catch (_0x2dccca) {}
          return null;
        }
        _0x58145b.exports = _0x427698;
        _0x58145b.exports;
      }, {});
      _0x1c1e99.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js', function (_0x51006f, _0x4a5ded, _0x1f104c, _0x5808ac, _0x1b86fe) {
        _0x51006f.length = function (_0x1a864d) {
          var _0x4b3fb6 = 0x0;
          var _0xba9eca = 0x0;
          for (var _0x22ed98 = 0x0; _0x22ed98 < _0x1a864d.length; ++_0x22ed98) {
            if ((_0xba9eca = _0x1a864d.charCodeAt(_0x22ed98)) < 0x80) {
              _0x4b3fb6 += 0x1;
            } else if (_0xba9eca < 0x800) {
              _0x4b3fb6 += 0x2;
            } else if (0xd800 == (0xfc00 & _0xba9eca) && 0xdc00 == (0xfc00 & _0x1a864d.charCodeAt(_0x22ed98 + 0x1))) {
              ++_0x22ed98;
              _0x4b3fb6 += 0x4;
            } else {
              _0x4b3fb6 += 0x3;
            }
          }
          return _0x4b3fb6;
        };
        _0x51006f.read = function (_0x11becf, _0x3edf81, _0x828b5f) {
          if (_0x828b5f - _0x3edf81 < 0x1) {
            return '';
          }
          var _0x447537;
          var _0x455377 = null;
          var _0x4c41c9 = [];
          for (var _0x4edda4 = 0x0; _0x3edf81 < _0x828b5f;) {
            if ((_0x447537 = _0x11becf[_0x3edf81++]) < 0x80) {
              _0x4c41c9[_0x4edda4++] = _0x447537;
            } else if (_0x447537 > 0xbf && _0x447537 < 0xe0) {
              _0x4c41c9[_0x4edda4++] = (0x1f & _0x447537) << 0x6 | 0x3f & _0x11becf[_0x3edf81++];
            } else if (_0x447537 > 0xef && _0x447537 < 0x16d) {
              _0x447537 = ((0x7 & _0x447537) << 0x12 | (0x3f & _0x11becf[_0x3edf81++]) << 0xc | (0x3f & _0x11becf[_0x3edf81++]) << 0x6 | 0x3f & _0x11becf[_0x3edf81++]) - 0x10000;
              _0x4c41c9[_0x4edda4++] = 0xd800 + (_0x447537 >> 0xa);
              _0x4c41c9[_0x4edda4++] = 0xdc00 + (0x3ff & _0x447537);
            } else {
              _0x4c41c9[_0x4edda4++] = (0xf & _0x447537) << 0xc | (0x3f & _0x11becf[_0x3edf81++]) << 0x6 | 0x3f & _0x11becf[_0x3edf81++];
            }
            if (_0x4edda4 > 0x1fff) {
              (_0x455377 || (_0x455377 = [])).push(String.fromCharCode.apply(String, _0x4c41c9));
              _0x4edda4 = 0x0;
            }
          }
          return _0x455377 ? (_0x4edda4 && _0x455377.push(String.fromCharCode.apply(String, _0x4c41c9.slice(0x0, _0x4edda4))), _0x455377.join('')) : String.fromCharCode.apply(String, _0x4c41c9.slice(0x0, _0x4edda4));
        };
        _0x51006f.write = function (_0x3d21b8, _0x1eb2a3, _0x72b8f9) {
          var _0x4edd93;
          var _0x21e328;
          var _0x4af093 = _0x72b8f9;
          for (var _0x59c7ae = 0x0; _0x59c7ae < _0x3d21b8.length; ++_0x59c7ae) {
            if ((_0x4edd93 = _0x3d21b8.charCodeAt(_0x59c7ae)) < 0x80) {
              _0x1eb2a3[_0x72b8f9++] = _0x4edd93;
            } else if (_0x4edd93 < 0x800) {
              _0x1eb2a3[_0x72b8f9++] = _0x4edd93 >> 0x6 | 0xc0;
              _0x1eb2a3[_0x72b8f9++] = 0x3f & _0x4edd93 | 0x80;
            } else if (0xd800 == (0xfc00 & _0x4edd93) && 0xdc00 == (0xfc00 & (_0x21e328 = _0x3d21b8.charCodeAt(_0x59c7ae + 0x1)))) {
              _0x4edd93 = 0x10000 + ((0x3ff & _0x4edd93) << 0xa) + (0x3ff & _0x21e328);
              ++_0x59c7ae;
              _0x1eb2a3[_0x72b8f9++] = _0x4edd93 >> 0x12 | 0xf0;
              _0x1eb2a3[_0x72b8f9++] = _0x4edd93 >> 0xc & 0x3f | 0x80;
              _0x1eb2a3[_0x72b8f9++] = _0x4edd93 >> 0x6 & 0x3f | 0x80;
              _0x1eb2a3[_0x72b8f9++] = 0x3f & _0x4edd93 | 0x80;
            } else {
              _0x1eb2a3[_0x72b8f9++] = _0x4edd93 >> 0xc | 0xe0;
              _0x1eb2a3[_0x72b8f9++] = _0x4edd93 >> 0x6 & 0x3f | 0x80;
              _0x1eb2a3[_0x72b8f9++] = 0x3f & _0x4edd93 | 0x80;
            }
          }
          return _0x72b8f9 - _0x4af093;
        };
        _0x1f104c.exports;
      }, {});
      _0x1c1e99.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js', function (_0x20ef82, _0x2695f5, _0x30acf6, _0x3627d1, _0x5e3375) {
        _0x30acf6.exports = function (_0x5b4e12, _0xece9a6, _0x3c0761) {
          var _0x1a32b3 = _0x3c0761 || 0x2000;
          var _0x41b5f1 = _0x1a32b3 >>> 0x1;
          var _0x4d6642 = null;
          var _0x4df946 = _0x1a32b3;
          return function (_0x3280f6) {
            if (_0x3280f6 < 0x1 || _0x3280f6 > _0x41b5f1) {
              return _0x5b4e12(_0x3280f6);
            }
            if (_0x4df946 + _0x3280f6 > _0x1a32b3) {
              _0x4d6642 = _0x5b4e12(_0x1a32b3);
              _0x4df946 = 0x0;
            }
            var _0x3b7f6b = _0xece9a6.call(_0x4d6642, _0x4df946, _0x4df946 += _0x3280f6);
            if (0x7 & _0x4df946) {
              _0x4df946 = 0x1 + (0x7 | _0x4df946);
            }
            return _0x3b7f6b;
          };
        };
        _0x30acf6.exports;
      }, {});
      _0x1c1e99.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js', function (_0x3309ad, _0x36b096, _0xbdb487, _0x588e67, _0x3e4820) {
        _0xbdb487.exports = _0xcbb672;
        var _0x5f692e = _0x36b096("../util/minimal");
        function _0xcbb672(_0x222b40, _0x4a798f) {
          this.lo = _0x222b40 >>> 0x0;
          this.hi = _0x4a798f >>> 0x0;
        }
        var _0x19fe17 = _0xcbb672.zero = new _0xcbb672(0x0, 0x0);
        _0x19fe17.toNumber = function () {
          return 0x0;
        };
        _0x19fe17.zzEncode = _0x19fe17.zzDecode = function () {
          return this;
        };
        _0x19fe17.length = function () {
          return 0x1;
        };
        var _0x4d64dc = _0xcbb672.zeroHash = "\0\0\0\0\0\0\0\0";
        _0xcbb672.fromNumber = function (_0x5edee0) {
          if (0x0 === _0x5edee0) {
            return _0x19fe17;
          }
          var _0x5d174b = _0x5edee0 < 0x0;
          if (_0x5d174b) {
            _0x5edee0 = -_0x5edee0;
          }
          var _0x5481e4 = _0x5edee0 >>> 0x0;
          var _0x345e8a = (_0x5edee0 - _0x5481e4) / 0x100000000 >>> 0x0;
          if (_0x5d174b) {
            _0x345e8a = ~_0x345e8a >>> 0x0;
            _0x5481e4 = ~_0x5481e4 >>> 0x0;
            if (++_0x5481e4 > 0xffffffff) {
              _0x5481e4 = 0x0;
              if (++_0x345e8a > 0xffffffff) {
                _0x345e8a = 0x0;
              }
            }
          }
          return new _0xcbb672(_0x5481e4, _0x345e8a);
        };
        _0xcbb672.from = function (_0x2ec001) {
          if ("number" == typeof _0x2ec001) {
            return _0xcbb672.fromNumber(_0x2ec001);
          }
          if (_0x5f692e.isString(_0x2ec001)) {
            if (!_0x5f692e.Long) {
              return _0xcbb672.fromNumber(parseInt(_0x2ec001, 0xa));
            }
            _0x2ec001 = _0x5f692e.Long.fromString(_0x2ec001);
          }
          return _0x2ec001.low || _0x2ec001.high ? new _0xcbb672(_0x2ec001.low >>> 0x0, _0x2ec001.high >>> 0x0) : _0x19fe17;
        };
        _0xcbb672.prototype.toNumber = function (_0x42ed1f) {
          if (!_0x42ed1f && this.hi >>> 0x1f) {
            var _0x2f2a83 = 0x1 + ~this.lo >>> 0x0;
            var _0x8836c6 = ~this.hi >>> 0x0;
            if (!_0x2f2a83) {
              _0x8836c6 = _0x8836c6 + 0x1 >>> 0x0;
            }
            return -(_0x2f2a83 + 0x100000000 * _0x8836c6);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0xcbb672.prototype.toLong = function (_0x5b6b12) {
          return _0x5f692e.Long ? new _0x5f692e.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x5b6b12)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x5b6b12)
          };
        };
        var _0x258f93 = String.prototype.charCodeAt;
        _0xcbb672.fromHash = function (_0x448f37) {
          return _0x448f37 === _0x4d64dc ? _0x19fe17 : new _0xcbb672((_0x258f93.call(_0x448f37, 0x0) | _0x258f93.call(_0x448f37, 0x1) << 0x8 | _0x258f93.call(_0x448f37, 0x2) << 0x10 | _0x258f93.call(_0x448f37, 0x3) << 0x18) >>> 0x0, (_0x258f93.call(_0x448f37, 0x4) | _0x258f93.call(_0x448f37, 0x5) << 0x8 | _0x258f93.call(_0x448f37, 0x6) << 0x10 | _0x258f93.call(_0x448f37, 0x7) << 0x18) >>> 0x0);
        };
        _0xcbb672.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0xcbb672.prototype.zzEncode = function () {
          var _0x469d70 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x469d70) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x469d70) >>> 0x0;
          return this;
        };
        _0xcbb672.prototype.zzDecode = function () {
          var _0x25b4f7 = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x25b4f7) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x25b4f7) >>> 0x0;
          return this;
        };
        _0xcbb672.prototype.length = function () {
          var _0x5dc00f = this.lo;
          var _0x2d91bd = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x430eb3 = this.hi >>> 0x18;
          return 0x0 === _0x430eb3 ? 0x0 === _0x2d91bd ? _0x5dc00f < 0x4000 ? _0x5dc00f < 0x80 ? 0x1 : 0x2 : _0x5dc00f < 0x200000 ? 0x3 : 0x4 : _0x2d91bd < 0x4000 ? _0x2d91bd < 0x80 ? 0x5 : 0x6 : _0x2d91bd < 0x200000 ? 0x7 : 0x8 : _0x430eb3 < 0x80 ? 0x9 : 0xa;
        };
        _0xbdb487.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x1adfbc, _0x4bc4de, _0x5c8222, _0x5f526f, _0x599b6f) {
        function _0x188679(_0xa44d66, _0x307479, _0xa39111) {
          var _0x3000d2 = Object.keys(_0x307479);
          for (var _0x4073d9 = 0x0; _0x4073d9 < _0x3000d2.length; ++_0x4073d9) {
            if (!(undefined !== _0xa44d66[_0x3000d2[_0x4073d9]] && _0xa39111)) {
              _0xa44d66[_0x3000d2[_0x4073d9]] = _0x307479[_0x3000d2[_0x4073d9]];
            }
          }
          return _0xa44d66;
        }
        function _0x5b15b6(_0x376ae6) {
          function _0xd23786(_0x3f2c45, _0x3d4b3c) {
            if (!(this instanceof _0xd23786)) {
              return new _0xd23786(_0x3f2c45, _0x3d4b3c);
            }
            Object.defineProperty(this, 'message', {
              'get': function () {
                return _0x3f2c45;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0xd23786);
            } else {
              Object.defineProperty(this, "stack", {
                'value': new Error().stack || ''
              });
            }
            if (_0x3d4b3c) {
              _0x188679(this, _0x3d4b3c);
            }
          }
          (_0xd23786.prototype = Object.create(Error.prototype)).constructor = _0xd23786;
          Object.defineProperty(_0xd23786.prototype, 'name', {
            'get': function () {
              return _0x376ae6;
            }
          });
          _0xd23786.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0xd23786;
        }
        _0x1adfbc.asPromise = _0x4bc4de("@protobufjs/aspromise");
        _0x1adfbc.base64 = _0x4bc4de("@protobufjs/base64");
        _0x1adfbc.EventEmitter = _0x4bc4de('@protobufjs/eventemitter');
        _0x1adfbc.float = _0x4bc4de("@protobufjs/float");
        _0x1adfbc.inquire = _0x4bc4de("@protobufjs/inquire");
        _0x1adfbc.utf8 = _0x4bc4de("@protobufjs/utf8");
        _0x1adfbc.pool = _0x4bc4de("@protobufjs/pool");
        _0x1adfbc.LongBits = _0x4bc4de('./longbits');
        _0x1adfbc.isNode = Boolean('undefined' != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x1adfbc.global = _0x1adfbc.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        _0x1adfbc.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x1adfbc.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x1adfbc.isInteger = Number.isInteger || function (_0x121fbb) {
          return 'number' == typeof _0x121fbb && isFinite(_0x121fbb) && Math.floor(_0x121fbb) === _0x121fbb;
        };
        _0x1adfbc.isString = function (_0x549571) {
          return "string" == typeof _0x549571 || _0x549571 instanceof String;
        };
        _0x1adfbc.isObject = function (_0x2f3e29) {
          return _0x2f3e29 && "object" == typeof _0x2f3e29;
        };
        _0x1adfbc.isset = _0x1adfbc.isSet = function (_0x52f80d, _0x2ea323) {
          var _0xe41c8a = _0x52f80d[_0x2ea323];
          return !(null == _0xe41c8a || !_0x52f80d.hasOwnProperty(_0x2ea323)) && ("object" != typeof _0xe41c8a || (Array.isArray(_0xe41c8a) ? _0xe41c8a.length : Object.keys(_0xe41c8a).length) > 0x0);
        };
        _0x1adfbc.Buffer = function () {
          try {
            var _0xaeaaff = _0x1adfbc.inquire("buffer").Buffer;
            return _0xaeaaff.prototype.utf8Write ? _0xaeaaff : null;
          } catch (_0x50219a) {
            return null;
          }
        }();
        _0x1adfbc._Buffer_from = null;
        _0x1adfbc._Buffer_allocUnsafe = null;
        _0x1adfbc.newBuffer = function (_0x6e4ba0) {
          return "number" == typeof _0x6e4ba0 ? _0x1adfbc.Buffer ? _0x1adfbc._Buffer_allocUnsafe(_0x6e4ba0) : new _0x1adfbc.Array(_0x6e4ba0) : _0x1adfbc.Buffer ? _0x1adfbc._Buffer_from(_0x6e4ba0) : "undefined" == typeof Uint8Array ? _0x6e4ba0 : new Uint8Array(_0x6e4ba0);
        };
        _0x1adfbc.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        _0x1adfbc.Long = _0x1adfbc.global.dcodeIO && _0x1adfbc.global.dcodeIO.Long || _0x1adfbc.global.Long || _0x1adfbc.inquire("long");
        _0x1adfbc.key2Re = /^true|false|0|1$/;
        _0x1adfbc.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x1adfbc.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x1adfbc.longToHash = function (_0x4f5338) {
          return _0x4f5338 ? _0x1adfbc.LongBits.from(_0x4f5338).toHash() : _0x1adfbc.LongBits.zeroHash;
        };
        _0x1adfbc.longFromHash = function (_0x9b6d0f, _0x3fae36) {
          var _0x61ee3d = _0x1adfbc.LongBits.fromHash(_0x9b6d0f);
          return _0x1adfbc.Long ? _0x1adfbc.Long.fromBits(_0x61ee3d.lo, _0x61ee3d.hi, _0x3fae36) : _0x61ee3d.toNumber(Boolean(_0x3fae36));
        };
        _0x1adfbc.merge = _0x188679;
        _0x1adfbc.lcFirst = function (_0x362d74) {
          return _0x362d74.charAt(0x0).toLowerCase() + _0x362d74.substring(0x1);
        };
        _0x1adfbc.newError = _0x5b15b6;
        _0x1adfbc.ProtocolError = _0x5b15b6("ProtocolError");
        _0x1adfbc.oneOfGetter = function (_0x3ff039) {
          var _0x51f75b = {};
          for (var _0x2d83f8 = 0x0; _0x2d83f8 < _0x3ff039.length; ++_0x2d83f8) {
            _0x51f75b[_0x3ff039[_0x2d83f8]] = 0x1;
          }
          return function () {
            var _0x4f7564 = Object.keys(this);
            for (var _0x283685 = _0x4f7564.length - 0x1; _0x283685 > -0x1; --_0x283685) {
              if (0x1 === _0x51f75b[_0x4f7564[_0x283685]] && undefined !== this[_0x4f7564[_0x283685]] && null !== this[_0x4f7564[_0x283685]]) {
                return _0x4f7564[_0x283685];
              }
            }
          };
        };
        _0x1adfbc.oneOfSetter = function (_0x243a3d) {
          return function (_0x202848) {
            for (var _0x41d67f = 0x0; _0x41d67f < _0x243a3d.length; ++_0x41d67f) {
              if (_0x243a3d[_0x41d67f] !== _0x202848) {
                delete this[_0x243a3d[_0x41d67f]];
              }
            }
          };
        };
        _0x1adfbc.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x1adfbc._configure = function () {
          var _0x417074 = _0x1adfbc.Buffer;
          if (_0x417074) {
            _0x1adfbc._Buffer_from = _0x417074.from !== Uint8Array.from && _0x417074.from || function (_0x3be07c, _0x1fad0c) {
              return new _0x417074(_0x3be07c, _0x1fad0c);
            };
            _0x1adfbc._Buffer_allocUnsafe = _0x417074.allocUnsafe || function (_0x16c9c3) {
              return new _0x417074(_0x16c9c3);
            };
          } else {
            _0x1adfbc._Buffer_from = _0x1adfbc._Buffer_allocUnsafe = null;
          }
        };
        _0x5c8222.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          '@protobufjs/eventemitter': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          '@protobufjs/utf8': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js',
          '@protobufjs/pool': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js',
          './longbits': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js'
        };
      });
      _0x1c1e99.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/writer.js', function (_0x38975a, _0x14efcb, _0x868d2a, _0x4cec59, _0x37e1c3) {
        _0x868d2a.exports = _0x2fa76d;
        var _0x3b60f4;
        var _0x40c443 = _0x14efcb("./util/minimal");
        var _0x5c0698 = _0x40c443.LongBits;
        var _0x26134b = _0x40c443.base64;
        var _0x13fe4c = _0x40c443.utf8;
        function _0x49c9c5(_0x251363, _0x52dc2f, _0x451716) {
          this.fn = _0x251363;
          this.len = _0x52dc2f;
          this.next = undefined;
          this.val = _0x451716;
        }
        function _0xe2a540() {}
        function _0x49b04f(_0xaa2f57) {
          this.head = _0xaa2f57.head;
          this.tail = _0xaa2f57.tail;
          this.len = _0xaa2f57.len;
          this.next = _0xaa2f57.states;
        }
        function _0x2fa76d() {
          this.len = 0x0;
          this.head = new _0x49c9c5(_0xe2a540, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x68ac8b = function () {
          return _0x40c443.Buffer ? function () {
            return (_0x2fa76d.create = function () {
              return new _0x3b60f4();
            })();
          } : function () {
            return new _0x2fa76d();
          };
        };
        function _0x1c2db8(_0x72adc5, _0x409fad, _0x3b6dd7) {
          _0x409fad[_0x3b6dd7] = 0xff & _0x72adc5;
        }
        function _0x6bf80(_0x300d33, _0x43e9d0) {
          this.len = _0x300d33;
          this.next = undefined;
          this.val = _0x43e9d0;
        }
        function _0x38279c(_0x371c65, _0x1363e5, _0x283d52) {
          for (; _0x371c65.hi;) {
            _0x1363e5[_0x283d52++] = 0x7f & _0x371c65.lo | 0x80;
            _0x371c65.lo = (_0x371c65.lo >>> 0x7 | _0x371c65.hi << 0x19) >>> 0x0;
            _0x371c65.hi >>>= 0x7;
          }
          for (; _0x371c65.lo > 0x7f;) {
            _0x1363e5[_0x283d52++] = 0x7f & _0x371c65.lo | 0x80;
            _0x371c65.lo = _0x371c65.lo >>> 0x7;
          }
          _0x1363e5[_0x283d52++] = _0x371c65.lo;
        }
        function _0xd6b897(_0x8d5482, _0x5bbae1, _0x479250) {
          _0x5bbae1[_0x479250] = 0xff & _0x8d5482;
          _0x5bbae1[_0x479250 + 0x1] = _0x8d5482 >>> 0x8 & 0xff;
          _0x5bbae1[_0x479250 + 0x2] = _0x8d5482 >>> 0x10 & 0xff;
          _0x5bbae1[_0x479250 + 0x3] = _0x8d5482 >>> 0x18;
        }
        _0x2fa76d.create = _0x68ac8b();
        _0x2fa76d.alloc = function (_0x50dc55) {
          return new _0x40c443.Array(_0x50dc55);
        };
        if (_0x40c443.Array !== Array) {
          _0x2fa76d.alloc = _0x40c443.pool(_0x2fa76d.alloc, _0x40c443.Array.prototype.subarray);
        }
        _0x2fa76d.prototype._push = function (_0x282e06, _0xd1b818, _0x554484) {
          this.tail = this.tail.next = new _0x49c9c5(_0x282e06, _0xd1b818, _0x554484);
          this.len += _0xd1b818;
          return this;
        };
        _0x6bf80.prototype = Object.create(_0x49c9c5.prototype);
        _0x6bf80.prototype.fn = function (_0x48aa82, _0x267c47, _0xbbcac1) {
          for (; _0x48aa82 > 0x7f;) {
            _0x267c47[_0xbbcac1++] = 0x7f & _0x48aa82 | 0x80;
            _0x48aa82 >>>= 0x7;
          }
          _0x267c47[_0xbbcac1] = _0x48aa82;
        };
        _0x2fa76d.prototype.uint32 = function (_0x1264e5) {
          this.len += (this.tail = this.tail.next = new _0x6bf80((_0x1264e5 >>>= 0x0) < 0x80 ? 0x1 : _0x1264e5 < 0x4000 ? 0x2 : _0x1264e5 < 0x200000 ? 0x3 : _0x1264e5 < 0x10000000 ? 0x4 : 0x5, _0x1264e5)).len;
          return this;
        };
        _0x2fa76d.prototype.int32 = function (_0x5dd2ff) {
          return _0x5dd2ff < 0x0 ? this._push(_0x38279c, 0xa, _0x5c0698.fromNumber(_0x5dd2ff)) : this.uint32(_0x5dd2ff);
        };
        _0x2fa76d.prototype.sint32 = function (_0x159ab3) {
          return this.uint32((_0x159ab3 << 0x1 ^ _0x159ab3 >> 0x1f) >>> 0x0);
        };
        _0x2fa76d.prototype.uint64 = function (_0x3be221) {
          var _0x360120 = _0x5c0698.from(_0x3be221);
          return this._push(_0x38279c, _0x360120.length(), _0x360120);
        };
        _0x2fa76d.prototype.int64 = _0x2fa76d.prototype.uint64;
        _0x2fa76d.prototype.sint64 = function (_0x25005c) {
          var _0x121498 = _0x5c0698.from(_0x25005c).zzEncode();
          return this._push(_0x38279c, _0x121498.length(), _0x121498);
        };
        _0x2fa76d.prototype.bool = function (_0x4522a5) {
          return this._push(_0x1c2db8, 0x1, _0x4522a5 ? 0x1 : 0x0);
        };
        _0x2fa76d.prototype.fixed32 = function (_0x1bc0ac) {
          return this._push(_0xd6b897, 0x4, _0x1bc0ac >>> 0x0);
        };
        _0x2fa76d.prototype.sfixed32 = _0x2fa76d.prototype.fixed32;
        _0x2fa76d.prototype.fixed64 = function (_0x2e42e7) {
          var _0x3b10b4 = _0x5c0698.from(_0x2e42e7);
          return this._push(_0xd6b897, 0x4, _0x3b10b4.lo)._push(_0xd6b897, 0x4, _0x3b10b4.hi);
        };
        _0x2fa76d.prototype.sfixed64 = _0x2fa76d.prototype.fixed64;
        _0x2fa76d.prototype.float = function (_0x4edfa9) {
          return this._push(_0x40c443.float.writeFloatLE, 0x4, _0x4edfa9);
        };
        _0x2fa76d.prototype.double = function (_0x52d360) {
          return this._push(_0x40c443.float.writeDoubleLE, 0x8, _0x52d360);
        };
        var _0x308fdb = _0x40c443.Array.prototype.set ? function (_0x2550bb, _0x2f63d7, _0x15e246) {
          _0x2f63d7.set(_0x2550bb, _0x15e246);
        } : function (_0x2c1eaa, _0x55c47a, _0xda59ae) {
          for (var _0x58f6ce = 0x0; _0x58f6ce < _0x2c1eaa.length; ++_0x58f6ce) {
            _0x55c47a[_0xda59ae + _0x58f6ce] = _0x2c1eaa[_0x58f6ce];
          }
        };
        _0x2fa76d.prototype.bytes = function (_0x3d7f14) {
          var _0x2c373a = _0x3d7f14.length >>> 0x0;
          if (!_0x2c373a) {
            return this._push(_0x1c2db8, 0x1, 0x0);
          }
          if (_0x40c443.isString(_0x3d7f14)) {
            var _0x229f09 = _0x2fa76d.alloc(_0x2c373a = _0x26134b.length(_0x3d7f14));
            _0x26134b.decode(_0x3d7f14, _0x229f09, 0x0);
            _0x3d7f14 = _0x229f09;
          }
          return this.uint32(_0x2c373a)._push(_0x308fdb, _0x2c373a, _0x3d7f14);
        };
        _0x2fa76d.prototype.string = function (_0x4d960c) {
          var _0x2a77c5 = _0x13fe4c.length(_0x4d960c);
          return _0x2a77c5 ? this.uint32(_0x2a77c5)._push(_0x13fe4c.write, _0x2a77c5, _0x4d960c) : this._push(_0x1c2db8, 0x1, 0x0);
        };
        _0x2fa76d.prototype.fork = function () {
          this.states = new _0x49b04f(this);
          this.head = this.tail = new _0x49c9c5(_0xe2a540, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x2fa76d.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x49c9c5(_0xe2a540, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x2fa76d.prototype.ldelim = function () {
          var _0x3e7570 = this.head;
          var _0x519f6e = this.tail;
          var _0x571dda = this.len;
          this.reset().uint32(_0x571dda);
          if (_0x571dda) {
            this.tail.next = _0x3e7570.next;
            this.tail = _0x519f6e;
            this.len += _0x571dda;
          }
          return this;
        };
        _0x2fa76d.prototype.finish = function () {
          var _0x44a071 = this.head.next;
          var _0x585e48 = this.constructor.alloc(this.len);
          for (var _0x29ec2b = 0x0; _0x44a071;) {
            _0x44a071.fn(_0x44a071.val, _0x585e48, _0x29ec2b);
            _0x29ec2b += _0x44a071.len;
            _0x44a071 = _0x44a071.next;
          }
          return _0x585e48;
        };
        _0x2fa76d._configure = function (_0xea661d) {
          _0x3b60f4 = _0xea661d;
          _0x2fa76d.create = _0x68ac8b();
          _0x3b60f4._configure();
        };
        _0x868d2a.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (_0x7b9e7c, _0x382ec, _0x4d84d0, _0x26ade7, _0x40642b) {
        _0x4d84d0.exports = _0xe0ee95;
        var _0x139e1e = _0x382ec('./writer');
        (_0xe0ee95.prototype = Object.create(_0x139e1e.prototype)).constructor = _0xe0ee95;
        var _0x29a9be = _0x382ec("./util/minimal");
        function _0xe0ee95() {
          _0x139e1e.call(this);
        }
        function _0x2b14fb(_0x597529, _0x338a1e, _0x1e9506) {
          if (_0x597529.length < 0x28) {
            _0x29a9be.utf8.write(_0x597529, _0x338a1e, _0x1e9506);
          } else if (_0x338a1e.utf8Write) {
            _0x338a1e.utf8Write(_0x597529, _0x1e9506);
          } else {
            _0x338a1e.write(_0x597529, _0x1e9506);
          }
        }
        _0xe0ee95._configure = function () {
          _0xe0ee95.alloc = _0x29a9be._Buffer_allocUnsafe;
          _0xe0ee95.writeBytesBuffer = _0x29a9be.Buffer && _0x29a9be.Buffer.prototype instanceof Uint8Array && "set" === _0x29a9be.Buffer.prototype.set.name ? function (_0x4c02ab, _0x433fbf, _0x228e73) {
            _0x433fbf.set(_0x4c02ab, _0x228e73);
          } : function (_0x226baf, _0x17bdba, _0x892427) {
            if (_0x226baf.copy) {
              _0x226baf.copy(_0x17bdba, _0x892427, 0x0, _0x226baf.length);
            } else {
              for (var _0x55ef9d = 0x0; _0x55ef9d < _0x226baf.length;) {
                _0x17bdba[_0x892427++] = _0x226baf[_0x55ef9d++];
              }
            }
          };
        };
        _0xe0ee95.prototype.bytes = function (_0x5b850d) {
          if (_0x29a9be.isString(_0x5b850d)) {
            _0x5b850d = _0x29a9be._Buffer_from(_0x5b850d, 'base64');
          }
          var _0x22598f = _0x5b850d.length >>> 0x0;
          this.uint32(_0x22598f);
          if (_0x22598f) {
            this._push(_0xe0ee95.writeBytesBuffer, _0x22598f, _0x5b850d);
          }
          return this;
        };
        _0xe0ee95.prototype.string = function (_0x24f2e0) {
          var _0x530559 = _0x29a9be.Buffer.byteLength(_0x24f2e0);
          this.uint32(_0x530559);
          if (_0x530559) {
            this._push(_0x2b14fb, _0x530559, _0x24f2e0);
          }
          return this;
        };
        _0xe0ee95._configure();
        _0x4d84d0.exports;
      }, function () {
        return {
          './writer': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x2bfedb, _0x11f503, _0x338755, _0x3331d1, _0x411e91) {
        _0x338755.exports = _0x3b88cf;
        var _0x1231aa;
        var _0x1a2e53 = _0x11f503("./util/minimal");
        var _0x418caa = _0x1a2e53.LongBits;
        var _0x2558bb = _0x1a2e53.utf8;
        function _0x3b88cf(_0x509130) {
          this.buf = _0x509130;
          this.pos = 0x0;
          this.len = _0x509130.length;
        }
        var _0x4ce177;
        var _0x32c646 = "undefined" != typeof Uint8Array ? function (_0x4634fe) {
          if (_0x4634fe instanceof Uint8Array || Array.isArray(_0x4634fe)) {
            return new _0x3b88cf(_0x4634fe);
          }
          throw Error("illegal buffer");
        } : function (_0x26082c) {
          if (Array.isArray(_0x26082c)) {
            return new _0x3b88cf(_0x26082c);
          }
          throw Error("illegal buffer");
        };
        var _0x3db9d7 = function () {
          return _0x1a2e53.Buffer ? function (_0x70bc48) {
            return (_0x3b88cf.create = function (_0x3479bc) {
              return _0x1a2e53.Buffer.isBuffer(_0x3479bc) ? new _0x1231aa(_0x3479bc) : _0x32c646(_0x3479bc);
            })(_0x70bc48);
          } : _0x32c646;
        };
        function _0x433ae6() {
          var _0x2cdf40 = new _0x418caa(0x0, 0x0);
          var _0xef172a = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0xef172a < 0x3; ++_0xef172a) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x2cdf40.lo = (_0x2cdf40.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0xef172a) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x2cdf40;
              }
            }
            _0x2cdf40.lo = (_0x2cdf40.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0xef172a) >>> 0x0;
            return _0x2cdf40;
          }
          for (; _0xef172a < 0x4; ++_0xef172a) {
            _0x2cdf40.lo = (_0x2cdf40.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0xef172a) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x2cdf40;
            }
          }
          _0x2cdf40.lo = (_0x2cdf40.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x2cdf40.hi = (_0x2cdf40.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x2cdf40;
          }
          _0xef172a = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0xef172a < 0x5; ++_0xef172a) {
              _0x2cdf40.hi = (_0x2cdf40.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0xef172a + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x2cdf40;
              }
            }
          } else {
            for (; _0xef172a < 0x5; ++_0xef172a) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x2cdf40.hi = (_0x2cdf40.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0xef172a + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x2cdf40;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x172b76() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x418caa((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x3b88cf.create = _0x3db9d7();
        _0x3b88cf.prototype._slice = _0x1a2e53.Array.prototype.subarray || _0x1a2e53.Array.prototype.slice;
        _0x4ce177 = 0xffffffff;
        _0x3b88cf.prototype.uint32 = function () {
          _0x4ce177 = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x4ce177;
          }
          _0x4ce177 = (_0x4ce177 | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x4ce177;
          }
          _0x4ce177 = (_0x4ce177 | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x4ce177;
          }
          _0x4ce177 = (_0x4ce177 | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x4ce177;
          }
          _0x4ce177 = (_0x4ce177 | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x4ce177;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x4ce177;
        };
        _0x3b88cf.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x3b88cf.prototype.sint32 = function () {
          var _0x122795 = this.uint32();
          return _0x122795 >>> 0x1 ^ -(0x1 & _0x122795) | 0x0;
        };
        _0x3b88cf.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x3b88cf.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x3b88cf.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x3b88cf.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x4d59ec = _0x1a2e53.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x4d59ec;
        };
        _0x3b88cf.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x3be746 = _0x1a2e53.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x3be746;
        };
        _0x3b88cf.prototype.bytes = function () {
          var _0x5782e8 = this.uint32();
          var _0x3eb6d0 = this.pos;
          var _0x2b09b7 = this.pos + _0x5782e8;
          if (_0x2b09b7 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x5782e8 || 0x1) + " > " + this.len);
          }
          this.pos += _0x5782e8;
          return Array.isArray(this.buf) ? this.buf.slice(_0x3eb6d0, _0x2b09b7) : _0x3eb6d0 === _0x2b09b7 ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x3eb6d0, _0x2b09b7);
        };
        _0x3b88cf.prototype.string = function () {
          var _0x1a677f = this.bytes();
          return _0x2558bb.read(_0x1a677f, 0x0, _0x1a677f.length);
        };
        _0x3b88cf.prototype.skip = function (_0x1e8916) {
          if ("number" == typeof _0x1e8916) {
            if (this.pos + _0x1e8916 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x1e8916 || 0x1) + " > " + this.len);
            }
            this.pos += _0x1e8916;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x3b88cf.prototype.skipType = function (_0x5e6beb) {
          switch (_0x5e6beb) {
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
              for (; 0x4 != (_0x5e6beb = 0x7 & this.uint32());) {
                this.skipType(_0x5e6beb);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x5e6beb + " at offset " + this.pos);
          }
          return this;
        };
        _0x3b88cf._configure = function (_0x2eaa4) {
          _0x1231aa = _0x2eaa4;
          _0x3b88cf.create = _0x3db9d7();
          _0x1231aa._configure();
          var _0xe997a7 = _0x1a2e53.Long ? "toLong" : "toNumber";
          _0x1a2e53.merge(_0x3b88cf.prototype, {
            'int64': function () {
              return _0x433ae6.call(this)[_0xe997a7](false);
            },
            'uint64': function () {
              return _0x433ae6.call(this)[_0xe997a7](true);
            },
            'sint64': function () {
              return _0x433ae6.call(this).zzDecode()[_0xe997a7](false);
            },
            'fixed64': function () {
              return _0x172b76.call(this)[_0xe997a7](true);
            },
            'sfixed64': function () {
              return _0x172b76.call(this)[_0xe997a7](false);
            }
          });
        };
        _0x338755.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x1fe0f2, _0x5abcda, _0x1d5235, _0x738ea8, _0x2c89a8) {
        _0x1d5235.exports = _0x4e2ce4;
        var _0x53d3ce = _0x5abcda('./reader');
        (_0x4e2ce4.prototype = Object.create(_0x53d3ce.prototype)).constructor = _0x4e2ce4;
        var _0x671d0e = _0x5abcda("./util/minimal");
        function _0x4e2ce4(_0x2b7216) {
          _0x53d3ce.call(this, _0x2b7216);
        }
        _0x4e2ce4._configure = function () {
          if (_0x671d0e.Buffer) {
            _0x4e2ce4.prototype._slice = _0x671d0e.Buffer.prototype.slice;
          }
        };
        _0x4e2ce4.prototype.string = function () {
          var _0x4d33e5 = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x4d33e5, this.len)) : this.buf.toString('utf-8', this.pos, this.pos = Math.min(this.pos + _0x4d33e5, this.len));
        };
        _0x4e2ce4._configure();
        _0x1d5235.exports;
      }, function () {
        return {
          './reader': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (_0x4f793b, _0x1b3b0d, _0x16106e, _0x550f91, _0x5c533f) {
        _0x16106e.exports = _0x1919af;
        var _0x488316 = _0x1b3b0d("../util/minimal");
        function _0x1919af(_0x5ca21e, _0x422563, _0x5e7c9a) {
          if ("function" != typeof _0x5ca21e) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x488316.EventEmitter.call(this);
          this.rpcImpl = _0x5ca21e;
          this.requestDelimited = Boolean(_0x422563);
          this.responseDelimited = Boolean(_0x5e7c9a);
        }
        (_0x1919af.prototype = Object.create(_0x488316.EventEmitter.prototype)).constructor = _0x1919af;
        _0x1919af.prototype.rpcCall = function _0x172a27(_0x148283, _0x189423, _0x32294f, _0x938cbf, _0x28a349) {
          if (!_0x938cbf) {
            throw TypeError("request must be specified");
          }
          var _0x54faba = this;
          if (!_0x28a349) {
            return _0x488316.asPromise(_0x172a27, _0x54faba, _0x148283, _0x189423, _0x32294f, _0x938cbf);
          }
          if (_0x54faba.rpcImpl) {
            try {
              return _0x54faba.rpcImpl(_0x148283, _0x189423[_0x54faba.requestDelimited ? "encodeDelimited" : "encode"](_0x938cbf).finish(), function (_0x486e38, _0x9b27cb) {
                if (_0x486e38) {
                  _0x54faba.emit('error', _0x486e38, _0x148283);
                  return _0x28a349(_0x486e38);
                }
                if (null !== _0x9b27cb) {
                  if (!(_0x9b27cb instanceof _0x32294f)) {
                    try {
                      _0x9b27cb = _0x32294f[_0x54faba.responseDelimited ? "decodeDelimited" : 'decode'](_0x9b27cb);
                    } catch (_0x1fcbe2) {
                      _0x54faba.emit('error', _0x1fcbe2, _0x148283);
                      return _0x28a349(_0x1fcbe2);
                    }
                  }
                  _0x54faba.emit("data", _0x9b27cb, _0x148283);
                  return _0x28a349(null, _0x9b27cb);
                }
                _0x54faba.end(true);
              });
            } catch (_0x2fc259) {
              _0x54faba.emit("error", _0x2fc259, _0x148283);
              return void setTimeout(function () {
                _0x28a349(_0x2fc259);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x28a349(Error("already ended"));
            }, 0x0);
          }
        };
        _0x1919af.prototype.end = function (_0x23c668) {
          if (this.rpcImpl) {
            if (!_0x23c668) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        _0x16106e.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (_0x398f04, _0x5db49f, _0x593269, _0x44ece0, _0x2e17cb) {
        _0x398f04.Service = _0x5db49f("./rpc/service");
        _0x593269.exports;
      }, function () {
        return {
          './rpc/service': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      _0x1c1e99.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/roots.js', function (_0x461b9c, _0x1f8d88, _0x24287e, _0x1f0725, _0x57a297) {
        _0x24287e.exports = {};
        _0x24287e.exports;
      }, {});
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x5a1eb2, _0x7fc0ea, _0x45c718, _0x14727b, _0x95fa18) {
        function _0x3f3d0d() {
          _0x5a1eb2.util._configure();
          _0x5a1eb2.Writer._configure(_0x5a1eb2.BufferWriter);
          _0x5a1eb2.Reader._configure(_0x5a1eb2.BufferReader);
        }
        _0x5a1eb2.build = "minimal";
        _0x5a1eb2.Writer = _0x7fc0ea("./writer");
        _0x5a1eb2.BufferWriter = _0x7fc0ea("./writer_buffer");
        _0x5a1eb2.Reader = _0x7fc0ea("./reader");
        _0x5a1eb2.BufferReader = _0x7fc0ea("./reader_buffer");
        _0x5a1eb2.util = _0x7fc0ea("./util/minimal");
        _0x5a1eb2.rpc = _0x7fc0ea("./rpc");
        _0x5a1eb2.roots = _0x7fc0ea("./roots");
        _0x5a1eb2.configure = _0x3f3d0d;
        _0x3f3d0d();
        _0x45c718.exports;
      }, function () {
        return {
          './writer': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './writer_buffer': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          './reader': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          './roots': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/roots.js'
        };
      });
      var _0x4ba556;
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (_0x1dcb19, _0x449412, _0x2df609, _0x5ab36b, _0x190976) {
        _0x2df609.exports = _0x449412("./src/index-minimal");
        _0x2df609.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _0x2da5ad;
      var _0x33ddd6;
      var _0x3f52db;
      var _0x5264f3;
      var _0x115e86;
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/assets/game/Script/Proto/petraProto.js", function (_0x23e46c, _0x13aea8, _0x6ef6cd, _0x471646, _0x22d460) {
        var _0x504788;
        var _0x593748 = _0x13aea8("protobufjs/minimal");
        var _0x5edcd4 = _0x593748.Reader;
        var _0x44cc9e = _0x593748.Writer;
        var _0x34c0a = _0x593748.util;
        var _0x3d5b89 = _0x593748.roots['default'] || (_0x593748.roots["default"] = {});
        (_0x504788 = {
          "AwardData": function () {
            function _0x1d2f0a(_0x116e13) {
              this.PosVec = [];
              if (_0x116e13) {
                var _0xe89d07 = Object.keys(_0x116e13);
                for (var _0xf036ab = 0x0; _0xf036ab < _0xe89d07.length; ++_0xf036ab) {
                  if (null != _0x116e13[_0xe89d07[_0xf036ab]]) {
                    this[_0xe89d07[_0xf036ab]] = _0x116e13[_0xe89d07[_0xf036ab]];
                  }
                }
              }
            }
            _0x1d2f0a.prototype.Symbol = 0x0;
            _0x1d2f0a.prototype.Count = 0x0;
            _0x1d2f0a.prototype.LineNum = 0x0;
            _0x1d2f0a.prototype.Win = 0x0;
            _0x1d2f0a.prototype.PosVec = _0x34c0a.emptyArray;
            _0x1d2f0a.create = function (_0x16dfeb) {
              return new _0x1d2f0a(_0x16dfeb);
            };
            _0x1d2f0a.encode = function (_0x28805b, _0x113333) {
              if (!_0x113333) {
                _0x113333 = _0x44cc9e.create();
              }
              if (null != _0x28805b.Symbol && Object.hasOwnProperty.call(_0x28805b, "Symbol")) {
                _0x113333.uint32(0x8).int32(_0x28805b.Symbol);
              }
              if (null != _0x28805b.Count && Object.hasOwnProperty.call(_0x28805b, "Count")) {
                _0x113333.uint32(0x10).int32(_0x28805b.Count);
              }
              if (null != _0x28805b.LineNum && Object.hasOwnProperty.call(_0x28805b, "LineNum")) {
                _0x113333.uint32(0x18).int32(_0x28805b.LineNum);
              }
              if (null != _0x28805b.Win && Object.hasOwnProperty.call(_0x28805b, "Win")) {
                _0x113333.uint32(0x21).double(_0x28805b.Win);
              }
              if (null != _0x28805b.PosVec && _0x28805b.PosVec.length) {
                _0x113333.uint32(0x2a).fork();
                for (var _0x5ec327 = 0x0; _0x5ec327 < _0x28805b.PosVec.length; ++_0x5ec327) {
                  _0x113333.int32(_0x28805b.PosVec[_0x5ec327]);
                }
                _0x113333.ldelim();
              }
              return _0x113333;
            };
            _0x1d2f0a.encodeDelimited = function (_0x52b2f5, _0x16547d) {
              return this.encode(_0x52b2f5, _0x16547d).ldelim();
            };
            _0x1d2f0a.decode = function (_0x2ff67b, _0x18875f) {
              if (!(_0x2ff67b instanceof _0x5edcd4)) {
                _0x2ff67b = _0x5edcd4.create(_0x2ff67b);
              }
              var _0x24d451 = undefined === _0x18875f ? _0x2ff67b.len : _0x2ff67b.pos + _0x18875f;
              for (var _0x4788c5 = new _0x3d5b89.petraProto.AwardData(); _0x2ff67b.pos < _0x24d451;) {
                var _0xceaaf4 = _0x2ff67b.uint32();
                switch (_0xceaaf4 >>> 0x3) {
                  case 0x1:
                    _0x4788c5.Symbol = _0x2ff67b.int32();
                    break;
                  case 0x2:
                    _0x4788c5.Count = _0x2ff67b.int32();
                    break;
                  case 0x3:
                    _0x4788c5.LineNum = _0x2ff67b.int32();
                    break;
                  case 0x4:
                    _0x4788c5.Win = _0x2ff67b.double();
                    break;
                  case 0x5:
                    if (!(_0x4788c5.PosVec && _0x4788c5.PosVec.length)) {
                      _0x4788c5.PosVec = [];
                    }
                    if (0x2 == (0x7 & _0xceaaf4)) {
                      for (var _0x505adc = _0x2ff67b.uint32() + _0x2ff67b.pos; _0x2ff67b.pos < _0x505adc;) {
                        _0x4788c5.PosVec.push(_0x2ff67b.int32());
                      }
                    } else {
                      _0x4788c5.PosVec.push(_0x2ff67b.int32());
                    }
                    break;
                  default:
                    _0x2ff67b.skipType(0x7 & _0xceaaf4);
                }
              }
              return _0x4788c5;
            };
            _0x1d2f0a.decodeDelimited = function (_0x1e685a) {
              if (!(_0x1e685a instanceof _0x5edcd4)) {
                _0x1e685a = new _0x5edcd4(_0x1e685a);
              }
              return this.decode(_0x1e685a, _0x1e685a.uint32());
            };
            _0x1d2f0a.verify = function (_0xe34031) {
              if ("object" != typeof _0xe34031 || null === _0xe34031) {
                return "object expected";
              }
              if (null != _0xe34031.Symbol && _0xe34031.hasOwnProperty("Symbol") && !_0x34c0a.isInteger(_0xe34031.Symbol)) {
                return "Symbol: integer expected";
              }
              if (null != _0xe34031.Count && _0xe34031.hasOwnProperty("Count") && !_0x34c0a.isInteger(_0xe34031.Count)) {
                return "Count: integer expected";
              }
              if (null != _0xe34031.LineNum && _0xe34031.hasOwnProperty("LineNum") && !_0x34c0a.isInteger(_0xe34031.LineNum)) {
                return "LineNum: integer expected";
              }
              if (null != _0xe34031.Win && _0xe34031.hasOwnProperty("Win") && "number" != typeof _0xe34031.Win) {
                return "Win: number expected";
              }
              if (null != _0xe34031.PosVec && _0xe34031.hasOwnProperty("PosVec")) {
                if (!Array.isArray(_0xe34031.PosVec)) {
                  return "PosVec: array expected";
                }
                for (var _0x325f8d = 0x0; _0x325f8d < _0xe34031.PosVec.length; ++_0x325f8d) {
                  if (!_0x34c0a.isInteger(_0xe34031.PosVec[_0x325f8d])) {
                    return "PosVec: integer[] expected";
                  }
                }
              }
              return null;
            };
            _0x1d2f0a.fromObject = function (_0x3060f2) {
              if (_0x3060f2 instanceof _0x3d5b89.petraProto.AwardData) {
                return _0x3060f2;
              }
              var _0x512b25 = new _0x3d5b89.petraProto.AwardData();
              if (null != _0x3060f2.Symbol) {
                _0x512b25.Symbol = 0x0 | _0x3060f2.Symbol;
              }
              if (null != _0x3060f2.Count) {
                _0x512b25.Count = 0x0 | _0x3060f2.Count;
              }
              if (null != _0x3060f2.LineNum) {
                _0x512b25.LineNum = 0x0 | _0x3060f2.LineNum;
              }
              if (null != _0x3060f2.Win) {
                _0x512b25.Win = Number(_0x3060f2.Win);
              }
              if (_0x3060f2.PosVec) {
                if (!Array.isArray(_0x3060f2.PosVec)) {
                  throw TypeError(".petraProto.AwardData.PosVec: array expected");
                }
                _0x512b25.PosVec = [];
                for (var _0x5f3454 = 0x0; _0x5f3454 < _0x3060f2.PosVec.length; ++_0x5f3454) {
                  _0x512b25.PosVec[_0x5f3454] = 0x0 | _0x3060f2.PosVec[_0x5f3454];
                }
              }
              return _0x512b25;
            };
            _0x1d2f0a.toObject = function (_0x4b0ea3, _0x3b4a51) {
              if (!_0x3b4a51) {
                _0x3b4a51 = {};
              }
              var _0x597bc0 = {};
              if (_0x3b4a51.arrays || _0x3b4a51.defaults) {
                _0x597bc0.PosVec = [];
              }
              if (_0x3b4a51.defaults) {
                _0x597bc0.Symbol = 0x0;
                _0x597bc0.Count = 0x0;
                _0x597bc0.LineNum = 0x0;
                _0x597bc0.Win = 0x0;
              }
              if (null != _0x4b0ea3.Symbol && _0x4b0ea3.hasOwnProperty("Symbol")) {
                _0x597bc0.Symbol = _0x4b0ea3.Symbol;
              }
              if (null != _0x4b0ea3.Count && _0x4b0ea3.hasOwnProperty("Count")) {
                _0x597bc0.Count = _0x4b0ea3.Count;
              }
              if (null != _0x4b0ea3.LineNum && _0x4b0ea3.hasOwnProperty("LineNum")) {
                _0x597bc0.LineNum = _0x4b0ea3.LineNum;
              }
              if (null != _0x4b0ea3.Win && _0x4b0ea3.hasOwnProperty("Win")) {
                _0x597bc0.Win = _0x3b4a51.json && !isFinite(_0x4b0ea3.Win) ? String(_0x4b0ea3.Win) : _0x4b0ea3.Win;
              }
              if (_0x4b0ea3.PosVec && _0x4b0ea3.PosVec.length) {
                _0x597bc0.PosVec = [];
                for (var _0x5b2a3b = 0x0; _0x5b2a3b < _0x4b0ea3.PosVec.length; ++_0x5b2a3b) {
                  _0x597bc0.PosVec[_0x5b2a3b] = _0x4b0ea3.PosVec[_0x5b2a3b];
                }
              }
              return _0x597bc0;
            };
            _0x1d2f0a.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x593748.util.toJSONOptions);
            };
            _0x1d2f0a.getTypeUrl = function (_0x95949a) {
              if (undefined === _0x95949a) {
                _0x95949a = "type.googleapis.com";
              }
              return _0x95949a + '/petraProto.AwardData';
            };
            return _0x1d2f0a;
          }(),
          ComboStageInfo: function () {
            function _0x5c4048(_0x3b55cb) {
              this.ComboStageSymbol = [];
              this.AwardDataVec = [];
              this.HitSlatePosVec = [];
              this.FillSymbols = [];
              this.ChangeSymbols = [];
              this.FGChange = [];
              this.Holy = [];
              this.ComboStageSymbolLog = [];
              if (_0x3b55cb) {
                var _0x1e56ef = Object.keys(_0x3b55cb);
                for (var _0xf9c270 = 0x0; _0xf9c270 < _0x1e56ef.length; ++_0xf9c270) {
                  if (null != _0x3b55cb[_0x1e56ef[_0xf9c270]]) {
                    this[_0x1e56ef[_0xf9c270]] = _0x3b55cb[_0x1e56ef[_0xf9c270]];
                  }
                }
              }
            }
            _0x5c4048.prototype.ComboStageSymbol = _0x34c0a.emptyArray;
            _0x5c4048.prototype.ComboStageWin = 0x0;
            _0x5c4048.prototype.ComboStageMult = 0x0;
            _0x5c4048.prototype.AwardDataVec = _0x34c0a.emptyArray;
            _0x5c4048.prototype.HitSlatePosVec = _0x34c0a.emptyArray;
            _0x5c4048.prototype.FillSymbols = _0x34c0a.emptyArray;
            _0x5c4048.prototype.ChangeSymbols = _0x34c0a.emptyArray;
            _0x5c4048.prototype.AddRounds = 0x0;
            _0x5c4048.prototype.AddMults = 0x0;
            _0x5c4048.prototype.FGChange = _0x34c0a.emptyArray;
            _0x5c4048.prototype.Holy = _0x34c0a.emptyArray;
            _0x5c4048.prototype.FGChangeSymbol = 0x0;
            _0x5c4048.prototype.ComboStageSymbolLog = _0x34c0a.emptyArray;
            _0x5c4048.prototype.MaxFlag = false;
            _0x5c4048.create = function (_0x16de1d) {
              return new _0x5c4048(_0x16de1d);
            };
            _0x5c4048.encode = function (_0x5dfdc9, _0xa7294f) {
              if (!_0xa7294f) {
                _0xa7294f = _0x44cc9e.create();
              }
              if (null != _0x5dfdc9.ComboStageSymbol && _0x5dfdc9.ComboStageSymbol.length) {
                for (var _0x308943 = 0x0; _0x308943 < _0x5dfdc9.ComboStageSymbol.length; ++_0x308943) {
                  _0x3d5b89.petraProto.Column.encode(_0x5dfdc9.ComboStageSymbol[_0x308943], _0xa7294f.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x5dfdc9.ComboStageWin && Object.hasOwnProperty.call(_0x5dfdc9, 'ComboStageWin')) {
                _0xa7294f.uint32(0x11).double(_0x5dfdc9.ComboStageWin);
              }
              if (null != _0x5dfdc9.ComboStageMult && Object.hasOwnProperty.call(_0x5dfdc9, 'ComboStageMult')) {
                _0xa7294f.uint32(0x19).double(_0x5dfdc9.ComboStageMult);
              }
              if (null != _0x5dfdc9.AwardDataVec && _0x5dfdc9.AwardDataVec.length) {
                for (_0x308943 = 0x0; _0x308943 < _0x5dfdc9.AwardDataVec.length; ++_0x308943) {
                  _0x3d5b89.petraProto.AwardData.encode(_0x5dfdc9.AwardDataVec[_0x308943], _0xa7294f.uint32(0x22).fork()).ldelim();
                }
              }
              if (null != _0x5dfdc9.HitSlatePosVec && _0x5dfdc9.HitSlatePosVec.length) {
                _0xa7294f.uint32(0x2a).fork();
                for (_0x308943 = 0x0; _0x308943 < _0x5dfdc9.HitSlatePosVec.length; ++_0x308943) {
                  _0xa7294f.int32(_0x5dfdc9.HitSlatePosVec[_0x308943]);
                }
                _0xa7294f.ldelim();
              }
              if (null != _0x5dfdc9.FillSymbols && _0x5dfdc9.FillSymbols.length) {
                for (_0x308943 = 0x0; _0x308943 < _0x5dfdc9.FillSymbols.length; ++_0x308943) {
                  _0x3d5b89.petraProto.Column.encode(_0x5dfdc9.FillSymbols[_0x308943], _0xa7294f.uint32(0x32).fork()).ldelim();
                }
              }
              if (null != _0x5dfdc9.ChangeSymbols && _0x5dfdc9.ChangeSymbols.length) {
                for (_0x308943 = 0x0; _0x308943 < _0x5dfdc9.ChangeSymbols.length; ++_0x308943) {
                  _0x3d5b89.petraProto.Column.encode(_0x5dfdc9.ChangeSymbols[_0x308943], _0xa7294f.uint32(0x3a).fork()).ldelim();
                }
              }
              if (null != _0x5dfdc9.AddRounds && Object.hasOwnProperty.call(_0x5dfdc9, "AddRounds")) {
                _0xa7294f.uint32(0x40).int32(_0x5dfdc9.AddRounds);
              }
              if (null != _0x5dfdc9.AddMults && Object.hasOwnProperty.call(_0x5dfdc9, "AddMults")) {
                _0xa7294f.uint32(0x48).int32(_0x5dfdc9.AddMults);
              }
              if (null != _0x5dfdc9.FGChange && _0x5dfdc9.FGChange.length) {
                _0xa7294f.uint32(0x52).fork();
                for (_0x308943 = 0x0; _0x308943 < _0x5dfdc9.FGChange.length; ++_0x308943) {
                  _0xa7294f.int32(_0x5dfdc9.FGChange[_0x308943]);
                }
                _0xa7294f.ldelim();
              }
              if (null != _0x5dfdc9.Holy && _0x5dfdc9.Holy.length) {
                _0xa7294f.uint32(0x5a).fork();
                for (_0x308943 = 0x0; _0x308943 < _0x5dfdc9.Holy.length; ++_0x308943) {
                  _0xa7294f.int32(_0x5dfdc9.Holy[_0x308943]);
                }
                _0xa7294f.ldelim();
              }
              if (null != _0x5dfdc9.FGChangeSymbol && Object.hasOwnProperty.call(_0x5dfdc9, "FGChangeSymbol")) {
                _0xa7294f.uint32(0x60).int32(_0x5dfdc9.FGChangeSymbol);
              }
              if (null != _0x5dfdc9.ComboStageSymbolLog && _0x5dfdc9.ComboStageSymbolLog.length) {
                for (_0x308943 = 0x0; _0x308943 < _0x5dfdc9.ComboStageSymbolLog.length; ++_0x308943) {
                  _0x3d5b89.petraProto.Column.encode(_0x5dfdc9.ComboStageSymbolLog[_0x308943], _0xa7294f.uint32(0x6a).fork()).ldelim();
                }
              }
              if (null != _0x5dfdc9.MaxFlag && Object.hasOwnProperty.call(_0x5dfdc9, "MaxFlag")) {
                _0xa7294f.uint32(0x70).bool(_0x5dfdc9.MaxFlag);
              }
              return _0xa7294f;
            };
            _0x5c4048.encodeDelimited = function (_0x1a73df, _0xddd8bc) {
              return this.encode(_0x1a73df, _0xddd8bc).ldelim();
            };
            _0x5c4048.decode = function (_0x13ac74, _0x370fa1) {
              if (!(_0x13ac74 instanceof _0x5edcd4)) {
                _0x13ac74 = _0x5edcd4.create(_0x13ac74);
              }
              var _0x7be707 = undefined === _0x370fa1 ? _0x13ac74.len : _0x13ac74.pos + _0x370fa1;
              for (var _0x1c4ab4 = new _0x3d5b89.petraProto.ComboStageInfo(); _0x13ac74.pos < _0x7be707;) {
                var _0x32ab67 = _0x13ac74.uint32();
                switch (_0x32ab67 >>> 0x3) {
                  case 0x1:
                    if (!(_0x1c4ab4.ComboStageSymbol && _0x1c4ab4.ComboStageSymbol.length)) {
                      _0x1c4ab4.ComboStageSymbol = [];
                    }
                    _0x1c4ab4.ComboStageSymbol.push(_0x3d5b89.petraProto.Column.decode(_0x13ac74, _0x13ac74.uint32()));
                    break;
                  case 0x2:
                    _0x1c4ab4.ComboStageWin = _0x13ac74.double();
                    break;
                  case 0x3:
                    _0x1c4ab4.ComboStageMult = _0x13ac74.double();
                    break;
                  case 0x4:
                    if (!(_0x1c4ab4.AwardDataVec && _0x1c4ab4.AwardDataVec.length)) {
                      _0x1c4ab4.AwardDataVec = [];
                    }
                    _0x1c4ab4.AwardDataVec.push(_0x3d5b89.petraProto.AwardData.decode(_0x13ac74, _0x13ac74.uint32()));
                    break;
                  case 0x5:
                    if (!(_0x1c4ab4.HitSlatePosVec && _0x1c4ab4.HitSlatePosVec.length)) {
                      _0x1c4ab4.HitSlatePosVec = [];
                    }
                    if (0x2 == (0x7 & _0x32ab67)) {
                      for (var _0x93cf17 = _0x13ac74.uint32() + _0x13ac74.pos; _0x13ac74.pos < _0x93cf17;) {
                        _0x1c4ab4.HitSlatePosVec.push(_0x13ac74.int32());
                      }
                    } else {
                      _0x1c4ab4.HitSlatePosVec.push(_0x13ac74.int32());
                    }
                    break;
                  case 0x6:
                    if (!(_0x1c4ab4.FillSymbols && _0x1c4ab4.FillSymbols.length)) {
                      _0x1c4ab4.FillSymbols = [];
                    }
                    _0x1c4ab4.FillSymbols.push(_0x3d5b89.petraProto.Column.decode(_0x13ac74, _0x13ac74.uint32()));
                    break;
                  case 0x7:
                    if (!(_0x1c4ab4.ChangeSymbols && _0x1c4ab4.ChangeSymbols.length)) {
                      _0x1c4ab4.ChangeSymbols = [];
                    }
                    _0x1c4ab4.ChangeSymbols.push(_0x3d5b89.petraProto.Column.decode(_0x13ac74, _0x13ac74.uint32()));
                    break;
                  case 0x8:
                    _0x1c4ab4.AddRounds = _0x13ac74.int32();
                    break;
                  case 0x9:
                    _0x1c4ab4.AddMults = _0x13ac74.int32();
                    break;
                  case 0xa:
                    if (!(_0x1c4ab4.FGChange && _0x1c4ab4.FGChange.length)) {
                      _0x1c4ab4.FGChange = [];
                    }
                    if (0x2 == (0x7 & _0x32ab67)) {
                      for (_0x93cf17 = _0x13ac74.uint32() + _0x13ac74.pos; _0x13ac74.pos < _0x93cf17;) {
                        _0x1c4ab4.FGChange.push(_0x13ac74.int32());
                      }
                    } else {
                      _0x1c4ab4.FGChange.push(_0x13ac74.int32());
                    }
                    break;
                  case 0xb:
                    if (!(_0x1c4ab4.Holy && _0x1c4ab4.Holy.length)) {
                      _0x1c4ab4.Holy = [];
                    }
                    if (0x2 == (0x7 & _0x32ab67)) {
                      for (_0x93cf17 = _0x13ac74.uint32() + _0x13ac74.pos; _0x13ac74.pos < _0x93cf17;) {
                        _0x1c4ab4.Holy.push(_0x13ac74.int32());
                      }
                    } else {
                      _0x1c4ab4.Holy.push(_0x13ac74.int32());
                    }
                    break;
                  case 0xc:
                    _0x1c4ab4.FGChangeSymbol = _0x13ac74.int32();
                    break;
                  case 0xd:
                    if (!(_0x1c4ab4.ComboStageSymbolLog && _0x1c4ab4.ComboStageSymbolLog.length)) {
                      _0x1c4ab4.ComboStageSymbolLog = [];
                    }
                    _0x1c4ab4.ComboStageSymbolLog.push(_0x3d5b89.petraProto.Column.decode(_0x13ac74, _0x13ac74.uint32()));
                    break;
                  case 0xe:
                    _0x1c4ab4.MaxFlag = _0x13ac74.bool();
                    break;
                  default:
                    _0x13ac74.skipType(0x7 & _0x32ab67);
                }
              }
              return _0x1c4ab4;
            };
            _0x5c4048.decodeDelimited = function (_0x22e8eb) {
              if (!(_0x22e8eb instanceof _0x5edcd4)) {
                _0x22e8eb = new _0x5edcd4(_0x22e8eb);
              }
              return this.decode(_0x22e8eb, _0x22e8eb.uint32());
            };
            _0x5c4048.verify = function (_0x456ef4) {
              if ("object" != typeof _0x456ef4 || null === _0x456ef4) {
                return "object expected";
              }
              if (null != _0x456ef4.ComboStageSymbol && _0x456ef4.hasOwnProperty("ComboStageSymbol")) {
                if (!Array.isArray(_0x456ef4.ComboStageSymbol)) {
                  return "ComboStageSymbol: array expected";
                }
                for (var _0x223e33 = 0x0; _0x223e33 < _0x456ef4.ComboStageSymbol.length; ++_0x223e33) {
                  if (_0x33d189 = _0x3d5b89.petraProto.Column.verify(_0x456ef4.ComboStageSymbol[_0x223e33])) {
                    return "ComboStageSymbol." + _0x33d189;
                  }
                }
              }
              if (null != _0x456ef4.ComboStageWin && _0x456ef4.hasOwnProperty("ComboStageWin") && "number" != typeof _0x456ef4.ComboStageWin) {
                return "ComboStageWin: number expected";
              }
              if (null != _0x456ef4.ComboStageMult && _0x456ef4.hasOwnProperty("ComboStageMult") && "number" != typeof _0x456ef4.ComboStageMult) {
                return "ComboStageMult: number expected";
              }
              if (null != _0x456ef4.AwardDataVec && _0x456ef4.hasOwnProperty("AwardDataVec")) {
                if (!Array.isArray(_0x456ef4.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (_0x223e33 = 0x0; _0x223e33 < _0x456ef4.AwardDataVec.length; ++_0x223e33) {
                  if (_0x33d189 = _0x3d5b89.petraProto.AwardData.verify(_0x456ef4.AwardDataVec[_0x223e33])) {
                    return "AwardDataVec." + _0x33d189;
                  }
                }
              }
              if (null != _0x456ef4.HitSlatePosVec && _0x456ef4.hasOwnProperty("HitSlatePosVec")) {
                if (!Array.isArray(_0x456ef4.HitSlatePosVec)) {
                  return "HitSlatePosVec: array expected";
                }
                for (_0x223e33 = 0x0; _0x223e33 < _0x456ef4.HitSlatePosVec.length; ++_0x223e33) {
                  if (!_0x34c0a.isInteger(_0x456ef4.HitSlatePosVec[_0x223e33])) {
                    return "HitSlatePosVec: integer[] expected";
                  }
                }
              }
              if (null != _0x456ef4.FillSymbols && _0x456ef4.hasOwnProperty("FillSymbols")) {
                if (!Array.isArray(_0x456ef4.FillSymbols)) {
                  return "FillSymbols: array expected";
                }
                for (_0x223e33 = 0x0; _0x223e33 < _0x456ef4.FillSymbols.length; ++_0x223e33) {
                  if (_0x33d189 = _0x3d5b89.petraProto.Column.verify(_0x456ef4.FillSymbols[_0x223e33])) {
                    return "FillSymbols." + _0x33d189;
                  }
                }
              }
              if (null != _0x456ef4.ChangeSymbols && _0x456ef4.hasOwnProperty('ChangeSymbols')) {
                if (!Array.isArray(_0x456ef4.ChangeSymbols)) {
                  return "ChangeSymbols: array expected";
                }
                for (_0x223e33 = 0x0; _0x223e33 < _0x456ef4.ChangeSymbols.length; ++_0x223e33) {
                  if (_0x33d189 = _0x3d5b89.petraProto.Column.verify(_0x456ef4.ChangeSymbols[_0x223e33])) {
                    return "ChangeSymbols." + _0x33d189;
                  }
                }
              }
              if (null != _0x456ef4.AddRounds && _0x456ef4.hasOwnProperty("AddRounds") && !_0x34c0a.isInteger(_0x456ef4.AddRounds)) {
                return "AddRounds: integer expected";
              }
              if (null != _0x456ef4.AddMults && _0x456ef4.hasOwnProperty("AddMults") && !_0x34c0a.isInteger(_0x456ef4.AddMults)) {
                return "AddMults: integer expected";
              }
              if (null != _0x456ef4.FGChange && _0x456ef4.hasOwnProperty("FGChange")) {
                if (!Array.isArray(_0x456ef4.FGChange)) {
                  return "FGChange: array expected";
                }
                for (_0x223e33 = 0x0; _0x223e33 < _0x456ef4.FGChange.length; ++_0x223e33) {
                  if (!_0x34c0a.isInteger(_0x456ef4.FGChange[_0x223e33])) {
                    return "FGChange: integer[] expected";
                  }
                }
              }
              if (null != _0x456ef4.Holy && _0x456ef4.hasOwnProperty('Holy')) {
                if (!Array.isArray(_0x456ef4.Holy)) {
                  return "Holy: array expected";
                }
                for (_0x223e33 = 0x0; _0x223e33 < _0x456ef4.Holy.length; ++_0x223e33) {
                  if (!_0x34c0a.isInteger(_0x456ef4.Holy[_0x223e33])) {
                    return "Holy: integer[] expected";
                  }
                }
              }
              if (null != _0x456ef4.FGChangeSymbol && _0x456ef4.hasOwnProperty("FGChangeSymbol") && !_0x34c0a.isInteger(_0x456ef4.FGChangeSymbol)) {
                return "FGChangeSymbol: integer expected";
              }
              if (null != _0x456ef4.ComboStageSymbolLog && _0x456ef4.hasOwnProperty("ComboStageSymbolLog")) {
                if (!Array.isArray(_0x456ef4.ComboStageSymbolLog)) {
                  return "ComboStageSymbolLog: array expected";
                }
                for (_0x223e33 = 0x0; _0x223e33 < _0x456ef4.ComboStageSymbolLog.length; ++_0x223e33) {
                  var _0x33d189;
                  if (_0x33d189 = _0x3d5b89.petraProto.Column.verify(_0x456ef4.ComboStageSymbolLog[_0x223e33])) {
                    return "ComboStageSymbolLog." + _0x33d189;
                  }
                }
              }
              return null != _0x456ef4.MaxFlag && _0x456ef4.hasOwnProperty("MaxFlag") && "boolean" != typeof _0x456ef4.MaxFlag ? "MaxFlag: boolean expected" : null;
            };
            _0x5c4048.fromObject = function (_0xd6c58) {
              if (_0xd6c58 instanceof _0x3d5b89.petraProto.ComboStageInfo) {
                return _0xd6c58;
              }
              var _0x1fd977 = new _0x3d5b89.petraProto.ComboStageInfo();
              if (_0xd6c58.ComboStageSymbol) {
                if (!Array.isArray(_0xd6c58.ComboStageSymbol)) {
                  throw TypeError(".petraProto.ComboStageInfo.ComboStageSymbol: array expected");
                }
                _0x1fd977.ComboStageSymbol = [];
                for (var _0x59e995 = 0x0; _0x59e995 < _0xd6c58.ComboStageSymbol.length; ++_0x59e995) {
                  if ("object" != typeof _0xd6c58.ComboStageSymbol[_0x59e995]) {
                    throw TypeError(".petraProto.ComboStageInfo.ComboStageSymbol: object expected");
                  }
                  _0x1fd977.ComboStageSymbol[_0x59e995] = _0x3d5b89.petraProto.Column.fromObject(_0xd6c58.ComboStageSymbol[_0x59e995]);
                }
              }
              if (null != _0xd6c58.ComboStageWin) {
                _0x1fd977.ComboStageWin = Number(_0xd6c58.ComboStageWin);
              }
              if (null != _0xd6c58.ComboStageMult) {
                _0x1fd977.ComboStageMult = Number(_0xd6c58.ComboStageMult);
              }
              if (_0xd6c58.AwardDataVec) {
                if (!Array.isArray(_0xd6c58.AwardDataVec)) {
                  throw TypeError(".petraProto.ComboStageInfo.AwardDataVec: array expected");
                }
                _0x1fd977.AwardDataVec = [];
                for (_0x59e995 = 0x0; _0x59e995 < _0xd6c58.AwardDataVec.length; ++_0x59e995) {
                  if ("object" != typeof _0xd6c58.AwardDataVec[_0x59e995]) {
                    throw TypeError(".petraProto.ComboStageInfo.AwardDataVec: object expected");
                  }
                  _0x1fd977.AwardDataVec[_0x59e995] = _0x3d5b89.petraProto.AwardData.fromObject(_0xd6c58.AwardDataVec[_0x59e995]);
                }
              }
              if (_0xd6c58.HitSlatePosVec) {
                if (!Array.isArray(_0xd6c58.HitSlatePosVec)) {
                  throw TypeError(".petraProto.ComboStageInfo.HitSlatePosVec: array expected");
                }
                _0x1fd977.HitSlatePosVec = [];
                for (_0x59e995 = 0x0; _0x59e995 < _0xd6c58.HitSlatePosVec.length; ++_0x59e995) {
                  _0x1fd977.HitSlatePosVec[_0x59e995] = 0x0 | _0xd6c58.HitSlatePosVec[_0x59e995];
                }
              }
              if (_0xd6c58.FillSymbols) {
                if (!Array.isArray(_0xd6c58.FillSymbols)) {
                  throw TypeError(".petraProto.ComboStageInfo.FillSymbols: array expected");
                }
                _0x1fd977.FillSymbols = [];
                for (_0x59e995 = 0x0; _0x59e995 < _0xd6c58.FillSymbols.length; ++_0x59e995) {
                  if ("object" != typeof _0xd6c58.FillSymbols[_0x59e995]) {
                    throw TypeError(".petraProto.ComboStageInfo.FillSymbols: object expected");
                  }
                  _0x1fd977.FillSymbols[_0x59e995] = _0x3d5b89.petraProto.Column.fromObject(_0xd6c58.FillSymbols[_0x59e995]);
                }
              }
              if (_0xd6c58.ChangeSymbols) {
                if (!Array.isArray(_0xd6c58.ChangeSymbols)) {
                  throw TypeError(".petraProto.ComboStageInfo.ChangeSymbols: array expected");
                }
                _0x1fd977.ChangeSymbols = [];
                for (_0x59e995 = 0x0; _0x59e995 < _0xd6c58.ChangeSymbols.length; ++_0x59e995) {
                  if ("object" != typeof _0xd6c58.ChangeSymbols[_0x59e995]) {
                    throw TypeError(".petraProto.ComboStageInfo.ChangeSymbols: object expected");
                  }
                  _0x1fd977.ChangeSymbols[_0x59e995] = _0x3d5b89.petraProto.Column.fromObject(_0xd6c58.ChangeSymbols[_0x59e995]);
                }
              }
              if (null != _0xd6c58.AddRounds) {
                _0x1fd977.AddRounds = 0x0 | _0xd6c58.AddRounds;
              }
              if (null != _0xd6c58.AddMults) {
                _0x1fd977.AddMults = 0x0 | _0xd6c58.AddMults;
              }
              if (_0xd6c58.FGChange) {
                if (!Array.isArray(_0xd6c58.FGChange)) {
                  throw TypeError(".petraProto.ComboStageInfo.FGChange: array expected");
                }
                _0x1fd977.FGChange = [];
                for (_0x59e995 = 0x0; _0x59e995 < _0xd6c58.FGChange.length; ++_0x59e995) {
                  _0x1fd977.FGChange[_0x59e995] = 0x0 | _0xd6c58.FGChange[_0x59e995];
                }
              }
              if (_0xd6c58.Holy) {
                if (!Array.isArray(_0xd6c58.Holy)) {
                  throw TypeError(".petraProto.ComboStageInfo.Holy: array expected");
                }
                _0x1fd977.Holy = [];
                for (_0x59e995 = 0x0; _0x59e995 < _0xd6c58.Holy.length; ++_0x59e995) {
                  _0x1fd977.Holy[_0x59e995] = 0x0 | _0xd6c58.Holy[_0x59e995];
                }
              }
              if (null != _0xd6c58.FGChangeSymbol) {
                _0x1fd977.FGChangeSymbol = 0x0 | _0xd6c58.FGChangeSymbol;
              }
              if (_0xd6c58.ComboStageSymbolLog) {
                if (!Array.isArray(_0xd6c58.ComboStageSymbolLog)) {
                  throw TypeError(".petraProto.ComboStageInfo.ComboStageSymbolLog: array expected");
                }
                _0x1fd977.ComboStageSymbolLog = [];
                for (_0x59e995 = 0x0; _0x59e995 < _0xd6c58.ComboStageSymbolLog.length; ++_0x59e995) {
                  if ('object' != typeof _0xd6c58.ComboStageSymbolLog[_0x59e995]) {
                    throw TypeError(".petraProto.ComboStageInfo.ComboStageSymbolLog: object expected");
                  }
                  _0x1fd977.ComboStageSymbolLog[_0x59e995] = _0x3d5b89.petraProto.Column.fromObject(_0xd6c58.ComboStageSymbolLog[_0x59e995]);
                }
              }
              if (null != _0xd6c58.MaxFlag) {
                _0x1fd977.MaxFlag = Boolean(_0xd6c58.MaxFlag);
              }
              return _0x1fd977;
            };
            _0x5c4048.toObject = function (_0x1132eb, _0x4d28a8) {
              if (!_0x4d28a8) {
                _0x4d28a8 = {};
              }
              var _0x519f13 = {};
              if (_0x4d28a8.arrays || _0x4d28a8.defaults) {
                _0x519f13.ComboStageSymbol = [];
                _0x519f13.AwardDataVec = [];
                _0x519f13.HitSlatePosVec = [];
                _0x519f13.FillSymbols = [];
                _0x519f13.ChangeSymbols = [];
                _0x519f13.FGChange = [];
                _0x519f13.Holy = [];
                _0x519f13.ComboStageSymbolLog = [];
              }
              if (_0x4d28a8.defaults) {
                _0x519f13.ComboStageWin = 0x0;
                _0x519f13.ComboStageMult = 0x0;
                _0x519f13.AddRounds = 0x0;
                _0x519f13.AddMults = 0x0;
                _0x519f13.FGChangeSymbol = 0x0;
                _0x519f13.MaxFlag = false;
              }
              if (_0x1132eb.ComboStageSymbol && _0x1132eb.ComboStageSymbol.length) {
                _0x519f13.ComboStageSymbol = [];
                for (var _0x2e2bb8 = 0x0; _0x2e2bb8 < _0x1132eb.ComboStageSymbol.length; ++_0x2e2bb8) {
                  _0x519f13.ComboStageSymbol[_0x2e2bb8] = _0x3d5b89.petraProto.Column.toObject(_0x1132eb.ComboStageSymbol[_0x2e2bb8], _0x4d28a8);
                }
              }
              if (null != _0x1132eb.ComboStageWin && _0x1132eb.hasOwnProperty("ComboStageWin")) {
                _0x519f13.ComboStageWin = _0x4d28a8.json && !isFinite(_0x1132eb.ComboStageWin) ? String(_0x1132eb.ComboStageWin) : _0x1132eb.ComboStageWin;
              }
              if (null != _0x1132eb.ComboStageMult && _0x1132eb.hasOwnProperty("ComboStageMult")) {
                _0x519f13.ComboStageMult = _0x4d28a8.json && !isFinite(_0x1132eb.ComboStageMult) ? String(_0x1132eb.ComboStageMult) : _0x1132eb.ComboStageMult;
              }
              if (_0x1132eb.AwardDataVec && _0x1132eb.AwardDataVec.length) {
                _0x519f13.AwardDataVec = [];
                for (_0x2e2bb8 = 0x0; _0x2e2bb8 < _0x1132eb.AwardDataVec.length; ++_0x2e2bb8) {
                  _0x519f13.AwardDataVec[_0x2e2bb8] = _0x3d5b89.petraProto.AwardData.toObject(_0x1132eb.AwardDataVec[_0x2e2bb8], _0x4d28a8);
                }
              }
              if (_0x1132eb.HitSlatePosVec && _0x1132eb.HitSlatePosVec.length) {
                _0x519f13.HitSlatePosVec = [];
                for (_0x2e2bb8 = 0x0; _0x2e2bb8 < _0x1132eb.HitSlatePosVec.length; ++_0x2e2bb8) {
                  _0x519f13.HitSlatePosVec[_0x2e2bb8] = _0x1132eb.HitSlatePosVec[_0x2e2bb8];
                }
              }
              if (_0x1132eb.FillSymbols && _0x1132eb.FillSymbols.length) {
                _0x519f13.FillSymbols = [];
                for (_0x2e2bb8 = 0x0; _0x2e2bb8 < _0x1132eb.FillSymbols.length; ++_0x2e2bb8) {
                  _0x519f13.FillSymbols[_0x2e2bb8] = _0x3d5b89.petraProto.Column.toObject(_0x1132eb.FillSymbols[_0x2e2bb8], _0x4d28a8);
                }
              }
              if (_0x1132eb.ChangeSymbols && _0x1132eb.ChangeSymbols.length) {
                _0x519f13.ChangeSymbols = [];
                for (_0x2e2bb8 = 0x0; _0x2e2bb8 < _0x1132eb.ChangeSymbols.length; ++_0x2e2bb8) {
                  _0x519f13.ChangeSymbols[_0x2e2bb8] = _0x3d5b89.petraProto.Column.toObject(_0x1132eb.ChangeSymbols[_0x2e2bb8], _0x4d28a8);
                }
              }
              if (null != _0x1132eb.AddRounds && _0x1132eb.hasOwnProperty('AddRounds')) {
                _0x519f13.AddRounds = _0x1132eb.AddRounds;
              }
              if (null != _0x1132eb.AddMults && _0x1132eb.hasOwnProperty('AddMults')) {
                _0x519f13.AddMults = _0x1132eb.AddMults;
              }
              if (_0x1132eb.FGChange && _0x1132eb.FGChange.length) {
                _0x519f13.FGChange = [];
                for (_0x2e2bb8 = 0x0; _0x2e2bb8 < _0x1132eb.FGChange.length; ++_0x2e2bb8) {
                  _0x519f13.FGChange[_0x2e2bb8] = _0x1132eb.FGChange[_0x2e2bb8];
                }
              }
              if (_0x1132eb.Holy && _0x1132eb.Holy.length) {
                _0x519f13.Holy = [];
                for (_0x2e2bb8 = 0x0; _0x2e2bb8 < _0x1132eb.Holy.length; ++_0x2e2bb8) {
                  _0x519f13.Holy[_0x2e2bb8] = _0x1132eb.Holy[_0x2e2bb8];
                }
              }
              if (null != _0x1132eb.FGChangeSymbol && _0x1132eb.hasOwnProperty('FGChangeSymbol')) {
                _0x519f13.FGChangeSymbol = _0x1132eb.FGChangeSymbol;
              }
              if (_0x1132eb.ComboStageSymbolLog && _0x1132eb.ComboStageSymbolLog.length) {
                _0x519f13.ComboStageSymbolLog = [];
                for (_0x2e2bb8 = 0x0; _0x2e2bb8 < _0x1132eb.ComboStageSymbolLog.length; ++_0x2e2bb8) {
                  _0x519f13.ComboStageSymbolLog[_0x2e2bb8] = _0x3d5b89.petraProto.Column.toObject(_0x1132eb.ComboStageSymbolLog[_0x2e2bb8], _0x4d28a8);
                }
              }
              if (null != _0x1132eb.MaxFlag && _0x1132eb.hasOwnProperty("MaxFlag")) {
                _0x519f13.MaxFlag = _0x1132eb.MaxFlag;
              }
              return _0x519f13;
            };
            _0x5c4048.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x593748.util.toJSONOptions);
            };
            _0x5c4048.getTypeUrl = function (_0x39895d) {
              if (undefined === _0x39895d) {
                _0x39895d = 'type.googleapis.com';
              }
              return _0x39895d + '/petraProto.ComboStageInfo';
            };
            return _0x5c4048;
          }(),
          "RoundInfo": function () {
            function _0x2ac5f2(_0x364064) {
              this.ComboStageData = [];
              if (_0x364064) {
                var _0xb3ea16 = Object.keys(_0x364064);
                for (var _0x5b20e1 = 0x0; _0x5b20e1 < _0xb3ea16.length; ++_0x5b20e1) {
                  if (null != _0x364064[_0xb3ea16[_0x5b20e1]]) {
                    this[_0xb3ea16[_0x5b20e1]] = _0x364064[_0xb3ea16[_0x5b20e1]];
                  }
                }
              }
            }
            _0x2ac5f2.prototype.ComboStageData = _0x34c0a.emptyArray;
            _0x2ac5f2.prototype.RoundWin = 0x0;
            _0x2ac5f2.prototype.AwardTypeFlag = 0x0;
            _0x2ac5f2.prototype.FreeRemainRound = 0x0;
            _0x2ac5f2.prototype.FreeTotalRound = 0x0;
            _0x2ac5f2.prototype.AddRounds = 0x0;
            _0x2ac5f2.prototype.MaxFlag = false;
            _0x2ac5f2.create = function (_0x295d1d) {
              return new _0x2ac5f2(_0x295d1d);
            };
            _0x2ac5f2.encode = function (_0x224eb4, _0x156071) {
              if (!_0x156071) {
                _0x156071 = _0x44cc9e.create();
              }
              if (null != _0x224eb4.ComboStageData && _0x224eb4.ComboStageData.length) {
                for (var _0x5366b1 = 0x0; _0x5366b1 < _0x224eb4.ComboStageData.length; ++_0x5366b1) {
                  _0x3d5b89.petraProto.ComboStageInfo.encode(_0x224eb4.ComboStageData[_0x5366b1], _0x156071.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x224eb4.RoundWin && Object.hasOwnProperty.call(_0x224eb4, 'RoundWin')) {
                _0x156071.uint32(0x11).double(_0x224eb4.RoundWin);
              }
              if (null != _0x224eb4.AwardTypeFlag && Object.hasOwnProperty.call(_0x224eb4, "AwardTypeFlag")) {
                _0x156071.uint32(0x18).int32(_0x224eb4.AwardTypeFlag);
              }
              if (null != _0x224eb4.FreeRemainRound && Object.hasOwnProperty.call(_0x224eb4, "FreeRemainRound")) {
                _0x156071.uint32(0x20).int32(_0x224eb4.FreeRemainRound);
              }
              if (null != _0x224eb4.FreeTotalRound && Object.hasOwnProperty.call(_0x224eb4, 'FreeTotalRound')) {
                _0x156071.uint32(0x28).int32(_0x224eb4.FreeTotalRound);
              }
              if (null != _0x224eb4.AddRounds && Object.hasOwnProperty.call(_0x224eb4, "AddRounds")) {
                _0x156071.uint32(0x30).int32(_0x224eb4.AddRounds);
              }
              if (null != _0x224eb4.MaxFlag && Object.hasOwnProperty.call(_0x224eb4, "MaxFlag")) {
                _0x156071.uint32(0x38).bool(_0x224eb4.MaxFlag);
              }
              return _0x156071;
            };
            _0x2ac5f2.encodeDelimited = function (_0x4a721a, _0x94e9cf) {
              return this.encode(_0x4a721a, _0x94e9cf).ldelim();
            };
            _0x2ac5f2.decode = function (_0x508a22, _0x57fbe3) {
              if (!(_0x508a22 instanceof _0x5edcd4)) {
                _0x508a22 = _0x5edcd4.create(_0x508a22);
              }
              var _0x59a0a0 = undefined === _0x57fbe3 ? _0x508a22.len : _0x508a22.pos + _0x57fbe3;
              for (var _0x105533 = new _0x3d5b89.petraProto.RoundInfo(); _0x508a22.pos < _0x59a0a0;) {
                var _0x45be49 = _0x508a22.uint32();
                switch (_0x45be49 >>> 0x3) {
                  case 0x1:
                    if (!(_0x105533.ComboStageData && _0x105533.ComboStageData.length)) {
                      _0x105533.ComboStageData = [];
                    }
                    _0x105533.ComboStageData.push(_0x3d5b89.petraProto.ComboStageInfo.decode(_0x508a22, _0x508a22.uint32()));
                    break;
                  case 0x2:
                    _0x105533.RoundWin = _0x508a22.double();
                    break;
                  case 0x3:
                    _0x105533.AwardTypeFlag = _0x508a22.int32();
                    break;
                  case 0x4:
                    _0x105533.FreeRemainRound = _0x508a22.int32();
                    break;
                  case 0x5:
                    _0x105533.FreeTotalRound = _0x508a22.int32();
                    break;
                  case 0x6:
                    _0x105533.AddRounds = _0x508a22.int32();
                    break;
                  case 0x7:
                    _0x105533.MaxFlag = _0x508a22.bool();
                    break;
                  default:
                    _0x508a22.skipType(0x7 & _0x45be49);
                }
              }
              return _0x105533;
            };
            _0x2ac5f2.decodeDelimited = function (_0xbffc6f) {
              if (!(_0xbffc6f instanceof _0x5edcd4)) {
                _0xbffc6f = new _0x5edcd4(_0xbffc6f);
              }
              return this.decode(_0xbffc6f, _0xbffc6f.uint32());
            };
            _0x2ac5f2.verify = function (_0x517283) {
              if ("object" != typeof _0x517283 || null === _0x517283) {
                return "object expected";
              }
              if (null != _0x517283.ComboStageData && _0x517283.hasOwnProperty("ComboStageData")) {
                if (!Array.isArray(_0x517283.ComboStageData)) {
                  return "ComboStageData: array expected";
                }
                for (var _0x67a38d = 0x0; _0x67a38d < _0x517283.ComboStageData.length; ++_0x67a38d) {
                  var _0x258b08 = _0x3d5b89.petraProto.ComboStageInfo.verify(_0x517283.ComboStageData[_0x67a38d]);
                  if (_0x258b08) {
                    return "ComboStageData." + _0x258b08;
                  }
                }
              }
              return null != _0x517283.RoundWin && _0x517283.hasOwnProperty("RoundWin") && "number" != typeof _0x517283.RoundWin ? "RoundWin: number expected" : null != _0x517283.AwardTypeFlag && _0x517283.hasOwnProperty("AwardTypeFlag") && !_0x34c0a.isInteger(_0x517283.AwardTypeFlag) ? "AwardTypeFlag: integer expected" : null != _0x517283.FreeRemainRound && _0x517283.hasOwnProperty("FreeRemainRound") && !_0x34c0a.isInteger(_0x517283.FreeRemainRound) ? "FreeRemainRound: integer expected" : null != _0x517283.FreeTotalRound && _0x517283.hasOwnProperty("FreeTotalRound") && !_0x34c0a.isInteger(_0x517283.FreeTotalRound) ? "FreeTotalRound: integer expected" : null != _0x517283.AddRounds && _0x517283.hasOwnProperty("AddRounds") && !_0x34c0a.isInteger(_0x517283.AddRounds) ? "AddRounds: integer expected" : null != _0x517283.MaxFlag && _0x517283.hasOwnProperty("MaxFlag") && "boolean" != typeof _0x517283.MaxFlag ? "MaxFlag: boolean expected" : null;
            };
            _0x2ac5f2.fromObject = function (_0x523959) {
              if (_0x523959 instanceof _0x3d5b89.petraProto.RoundInfo) {
                return _0x523959;
              }
              var _0x56e32b = new _0x3d5b89.petraProto.RoundInfo();
              if (_0x523959.ComboStageData) {
                if (!Array.isArray(_0x523959.ComboStageData)) {
                  throw TypeError(".petraProto.RoundInfo.ComboStageData: array expected");
                }
                _0x56e32b.ComboStageData = [];
                for (var _0x112f1b = 0x0; _0x112f1b < _0x523959.ComboStageData.length; ++_0x112f1b) {
                  if ("object" != typeof _0x523959.ComboStageData[_0x112f1b]) {
                    throw TypeError(".petraProto.RoundInfo.ComboStageData: object expected");
                  }
                  _0x56e32b.ComboStageData[_0x112f1b] = _0x3d5b89.petraProto.ComboStageInfo.fromObject(_0x523959.ComboStageData[_0x112f1b]);
                }
              }
              if (null != _0x523959.RoundWin) {
                _0x56e32b.RoundWin = Number(_0x523959.RoundWin);
              }
              if (null != _0x523959.AwardTypeFlag) {
                _0x56e32b.AwardTypeFlag = 0x0 | _0x523959.AwardTypeFlag;
              }
              if (null != _0x523959.FreeRemainRound) {
                _0x56e32b.FreeRemainRound = 0x0 | _0x523959.FreeRemainRound;
              }
              if (null != _0x523959.FreeTotalRound) {
                _0x56e32b.FreeTotalRound = 0x0 | _0x523959.FreeTotalRound;
              }
              if (null != _0x523959.AddRounds) {
                _0x56e32b.AddRounds = 0x0 | _0x523959.AddRounds;
              }
              if (null != _0x523959.MaxFlag) {
                _0x56e32b.MaxFlag = Boolean(_0x523959.MaxFlag);
              }
              return _0x56e32b;
            };
            _0x2ac5f2.toObject = function (_0x324898, _0x517164) {
              if (!_0x517164) {
                _0x517164 = {};
              }
              var _0xc55020 = {};
              if (_0x517164.arrays || _0x517164.defaults) {
                _0xc55020.ComboStageData = [];
              }
              if (_0x517164.defaults) {
                _0xc55020.RoundWin = 0x0;
                _0xc55020.AwardTypeFlag = 0x0;
                _0xc55020.FreeRemainRound = 0x0;
                _0xc55020.FreeTotalRound = 0x0;
                _0xc55020.AddRounds = 0x0;
                _0xc55020.MaxFlag = false;
              }
              if (_0x324898.ComboStageData && _0x324898.ComboStageData.length) {
                _0xc55020.ComboStageData = [];
                for (var _0x2eb9c2 = 0x0; _0x2eb9c2 < _0x324898.ComboStageData.length; ++_0x2eb9c2) {
                  _0xc55020.ComboStageData[_0x2eb9c2] = _0x3d5b89.petraProto.ComboStageInfo.toObject(_0x324898.ComboStageData[_0x2eb9c2], _0x517164);
                }
              }
              if (null != _0x324898.RoundWin && _0x324898.hasOwnProperty("RoundWin")) {
                _0xc55020.RoundWin = _0x517164.json && !isFinite(_0x324898.RoundWin) ? String(_0x324898.RoundWin) : _0x324898.RoundWin;
              }
              if (null != _0x324898.AwardTypeFlag && _0x324898.hasOwnProperty("AwardTypeFlag")) {
                _0xc55020.AwardTypeFlag = _0x324898.AwardTypeFlag;
              }
              if (null != _0x324898.FreeRemainRound && _0x324898.hasOwnProperty("FreeRemainRound")) {
                _0xc55020.FreeRemainRound = _0x324898.FreeRemainRound;
              }
              if (null != _0x324898.FreeTotalRound && _0x324898.hasOwnProperty("FreeTotalRound")) {
                _0xc55020.FreeTotalRound = _0x324898.FreeTotalRound;
              }
              if (null != _0x324898.AddRounds && _0x324898.hasOwnProperty("AddRounds")) {
                _0xc55020.AddRounds = _0x324898.AddRounds;
              }
              if (null != _0x324898.MaxFlag && _0x324898.hasOwnProperty("MaxFlag")) {
                _0xc55020.MaxFlag = _0x324898.MaxFlag;
              }
              return _0xc55020;
            };
            _0x2ac5f2.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x593748.util.toJSONOptions);
            };
            _0x2ac5f2.getTypeUrl = function (_0xe9322) {
              if (undefined === _0xe9322) {
                _0xe9322 = "type.googleapis.com";
              }
              return _0xe9322 + "/petraProto.RoundInfo";
            };
            return _0x2ac5f2;
          }(),
          "SpinAck": function () {
            function _0x490e2d(_0x5f802b) {
              this.RoundQueue = [];
              if (_0x5f802b) {
                var _0x13f3ce = Object.keys(_0x5f802b);
                for (var _0x4cfcf8 = 0x0; _0x4cfcf8 < _0x13f3ce.length; ++_0x4cfcf8) {
                  if (null != _0x5f802b[_0x13f3ce[_0x4cfcf8]]) {
                    this[_0x13f3ce[_0x4cfcf8]] = _0x5f802b[_0x13f3ce[_0x4cfcf8]];
                  }
                }
              }
            }
            _0x490e2d.prototype.RoundQueue = _0x34c0a.emptyArray;
            _0x490e2d.prototype.FreeTotalWin = 0x0;
            _0x490e2d.prototype.TotalWin = 0x0;
            _0x490e2d.prototype.ShowIndex = '';
            _0x490e2d.prototype.NowMoney = 0x0;
            _0x490e2d.prototype.AckType = 0x0;
            _0x490e2d.prototype.RTP = 0x0;
            _0x490e2d.prototype.Bet = 0x0;
            _0x490e2d.create = function (_0x365c3d) {
              return new _0x490e2d(_0x365c3d);
            };
            _0x490e2d.encode = function (_0x125355, _0x41c15d) {
              if (!_0x41c15d) {
                _0x41c15d = _0x44cc9e.create();
              }
              if (null != _0x125355.RoundQueue && _0x125355.RoundQueue.length) {
                for (var _0x502812 = 0x0; _0x502812 < _0x125355.RoundQueue.length; ++_0x502812) {
                  _0x3d5b89.petraProto.RoundInfo.encode(_0x125355.RoundQueue[_0x502812], _0x41c15d.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x125355.FreeTotalWin && Object.hasOwnProperty.call(_0x125355, "FreeTotalWin")) {
                _0x41c15d.uint32(0x11).double(_0x125355.FreeTotalWin);
              }
              if (null != _0x125355.TotalWin && Object.hasOwnProperty.call(_0x125355, 'TotalWin')) {
                _0x41c15d.uint32(0x19).double(_0x125355.TotalWin);
              }
              if (null != _0x125355.ShowIndex && Object.hasOwnProperty.call(_0x125355, "ShowIndex")) {
                _0x41c15d.uint32(0x22).string(_0x125355.ShowIndex);
              }
              if (null != _0x125355.NowMoney && Object.hasOwnProperty.call(_0x125355, "NowMoney")) {
                _0x41c15d.uint32(0x29).double(_0x125355.NowMoney);
              }
              if (null != _0x125355.AckType && Object.hasOwnProperty.call(_0x125355, "AckType")) {
                _0x41c15d.uint32(0x30).int32(_0x125355.AckType);
              }
              if (null != _0x125355.RTP && Object.hasOwnProperty.call(_0x125355, "RTP")) {
                _0x41c15d.uint32(0x39).double(_0x125355.RTP);
              }
              if (null != _0x125355.Bet && Object.hasOwnProperty.call(_0x125355, "Bet")) {
                _0x41c15d.uint32(0x41).double(_0x125355.Bet);
              }
              return _0x41c15d;
            };
            _0x490e2d.encodeDelimited = function (_0x4e18d1, _0x3f44be) {
              return this.encode(_0x4e18d1, _0x3f44be).ldelim();
            };
            _0x490e2d.decode = function (_0x5addc0, _0x163ded) {
              if (!(_0x5addc0 instanceof _0x5edcd4)) {
                _0x5addc0 = _0x5edcd4.create(_0x5addc0);
              }
              var _0x5995c2 = undefined === _0x163ded ? _0x5addc0.len : _0x5addc0.pos + _0x163ded;
              for (var _0x32eb5e = new _0x3d5b89.petraProto.SpinAck(); _0x5addc0.pos < _0x5995c2;) {
                var _0x394d30 = _0x5addc0.uint32();
                switch (_0x394d30 >>> 0x3) {
                  case 0x1:
                    if (!(_0x32eb5e.RoundQueue && _0x32eb5e.RoundQueue.length)) {
                      _0x32eb5e.RoundQueue = [];
                    }
                    _0x32eb5e.RoundQueue.push(_0x3d5b89.petraProto.RoundInfo.decode(_0x5addc0, _0x5addc0.uint32()));
                    break;
                  case 0x2:
                    _0x32eb5e.FreeTotalWin = _0x5addc0.double();
                    break;
                  case 0x3:
                    _0x32eb5e.TotalWin = _0x5addc0.double();
                    break;
                  case 0x4:
                    _0x32eb5e.ShowIndex = _0x5addc0.string();
                    break;
                  case 0x5:
                    _0x32eb5e.NowMoney = _0x5addc0.double();
                    break;
                  case 0x6:
                    _0x32eb5e.AckType = _0x5addc0.int32();
                    break;
                  case 0x7:
                    _0x32eb5e.RTP = _0x5addc0.double();
                    break;
                  case 0x8:
                    _0x32eb5e.Bet = _0x5addc0.double();
                    break;
                  default:
                    _0x5addc0.skipType(0x7 & _0x394d30);
                }
              }
              return _0x32eb5e;
            };
            _0x490e2d.decodeDelimited = function (_0x384393) {
              if (!(_0x384393 instanceof _0x5edcd4)) {
                _0x384393 = new _0x5edcd4(_0x384393);
              }
              return this.decode(_0x384393, _0x384393.uint32());
            };
            _0x490e2d.verify = function (_0x408773) {
              if ("object" != typeof _0x408773 || null === _0x408773) {
                return "object expected";
              }
              if (null != _0x408773.RoundQueue && _0x408773.hasOwnProperty("RoundQueue")) {
                if (!Array.isArray(_0x408773.RoundQueue)) {
                  return "RoundQueue: array expected";
                }
                for (var _0x471d9d = 0x0; _0x471d9d < _0x408773.RoundQueue.length; ++_0x471d9d) {
                  var _0x255a19 = _0x3d5b89.petraProto.RoundInfo.verify(_0x408773.RoundQueue[_0x471d9d]);
                  if (_0x255a19) {
                    return "RoundQueue." + _0x255a19;
                  }
                }
              }
              return null != _0x408773.FreeTotalWin && _0x408773.hasOwnProperty("FreeTotalWin") && 'number' != typeof _0x408773.FreeTotalWin ? "FreeTotalWin: number expected" : null != _0x408773.TotalWin && _0x408773.hasOwnProperty("TotalWin") && "number" != typeof _0x408773.TotalWin ? "TotalWin: number expected" : null != _0x408773.ShowIndex && _0x408773.hasOwnProperty("ShowIndex") && !_0x34c0a.isString(_0x408773.ShowIndex) ? "ShowIndex: string expected" : null != _0x408773.NowMoney && _0x408773.hasOwnProperty("NowMoney") && "number" != typeof _0x408773.NowMoney ? "NowMoney: number expected" : null != _0x408773.AckType && _0x408773.hasOwnProperty("AckType") && !_0x34c0a.isInteger(_0x408773.AckType) ? "AckType: integer expected" : null != _0x408773.RTP && _0x408773.hasOwnProperty("RTP") && "number" != typeof _0x408773.RTP ? "RTP: number expected" : null != _0x408773.Bet && _0x408773.hasOwnProperty("Bet") && 'number' != typeof _0x408773.Bet ? "Bet: number expected" : null;
            };
            _0x490e2d.fromObject = function (_0x4df1af) {
              if (_0x4df1af instanceof _0x3d5b89.petraProto.SpinAck) {
                return _0x4df1af;
              }
              var _0x50ba81 = new _0x3d5b89.petraProto.SpinAck();
              if (_0x4df1af.RoundQueue) {
                if (!Array.isArray(_0x4df1af.RoundQueue)) {
                  throw TypeError(".petraProto.SpinAck.RoundQueue: array expected");
                }
                _0x50ba81.RoundQueue = [];
                for (var _0x4df8da = 0x0; _0x4df8da < _0x4df1af.RoundQueue.length; ++_0x4df8da) {
                  if ("object" != typeof _0x4df1af.RoundQueue[_0x4df8da]) {
                    throw TypeError(".petraProto.SpinAck.RoundQueue: object expected");
                  }
                  _0x50ba81.RoundQueue[_0x4df8da] = _0x3d5b89.petraProto.RoundInfo.fromObject(_0x4df1af.RoundQueue[_0x4df8da]);
                }
              }
              if (null != _0x4df1af.FreeTotalWin) {
                _0x50ba81.FreeTotalWin = Number(_0x4df1af.FreeTotalWin);
              }
              if (null != _0x4df1af.TotalWin) {
                _0x50ba81.TotalWin = Number(_0x4df1af.TotalWin);
              }
              if (null != _0x4df1af.ShowIndex) {
                _0x50ba81.ShowIndex = String(_0x4df1af.ShowIndex);
              }
              if (null != _0x4df1af.NowMoney) {
                _0x50ba81.NowMoney = Number(_0x4df1af.NowMoney);
              }
              if (null != _0x4df1af.AckType) {
                _0x50ba81.AckType = 0x0 | _0x4df1af.AckType;
              }
              if (null != _0x4df1af.RTP) {
                _0x50ba81.RTP = Number(_0x4df1af.RTP);
              }
              if (null != _0x4df1af.Bet) {
                _0x50ba81.Bet = Number(_0x4df1af.Bet);
              }
              return _0x50ba81;
            };
            _0x490e2d.toObject = function (_0x59a54e, _0x266698) {
              if (!_0x266698) {
                _0x266698 = {};
              }
              var _0x482d04 = {};
              if (_0x266698.arrays || _0x266698.defaults) {
                _0x482d04.RoundQueue = [];
              }
              if (_0x266698.defaults) {
                _0x482d04.FreeTotalWin = 0x0;
                _0x482d04.TotalWin = 0x0;
                _0x482d04.ShowIndex = '';
                _0x482d04.NowMoney = 0x0;
                _0x482d04.AckType = 0x0;
                _0x482d04.RTP = 0x0;
                _0x482d04.Bet = 0x0;
              }
              if (_0x59a54e.RoundQueue && _0x59a54e.RoundQueue.length) {
                _0x482d04.RoundQueue = [];
                for (var _0x19687e = 0x0; _0x19687e < _0x59a54e.RoundQueue.length; ++_0x19687e) {
                  _0x482d04.RoundQueue[_0x19687e] = _0x3d5b89.petraProto.RoundInfo.toObject(_0x59a54e.RoundQueue[_0x19687e], _0x266698);
                }
              }
              if (null != _0x59a54e.FreeTotalWin && _0x59a54e.hasOwnProperty("FreeTotalWin")) {
                _0x482d04.FreeTotalWin = _0x266698.json && !isFinite(_0x59a54e.FreeTotalWin) ? String(_0x59a54e.FreeTotalWin) : _0x59a54e.FreeTotalWin;
              }
              if (null != _0x59a54e.TotalWin && _0x59a54e.hasOwnProperty("TotalWin")) {
                _0x482d04.TotalWin = _0x266698.json && !isFinite(_0x59a54e.TotalWin) ? String(_0x59a54e.TotalWin) : _0x59a54e.TotalWin;
              }
              if (null != _0x59a54e.ShowIndex && _0x59a54e.hasOwnProperty('ShowIndex')) {
                _0x482d04.ShowIndex = _0x59a54e.ShowIndex;
              }
              if (null != _0x59a54e.NowMoney && _0x59a54e.hasOwnProperty("NowMoney")) {
                _0x482d04.NowMoney = _0x266698.json && !isFinite(_0x59a54e.NowMoney) ? String(_0x59a54e.NowMoney) : _0x59a54e.NowMoney;
              }
              if (null != _0x59a54e.AckType && _0x59a54e.hasOwnProperty("AckType")) {
                _0x482d04.AckType = _0x59a54e.AckType;
              }
              if (null != _0x59a54e.RTP && _0x59a54e.hasOwnProperty('RTP')) {
                _0x482d04.RTP = _0x266698.json && !isFinite(_0x59a54e.RTP) ? String(_0x59a54e.RTP) : _0x59a54e.RTP;
              }
              if (null != _0x59a54e.Bet && _0x59a54e.hasOwnProperty("Bet")) {
                _0x482d04.Bet = _0x266698.json && !isFinite(_0x59a54e.Bet) ? String(_0x59a54e.Bet) : _0x59a54e.Bet;
              }
              return _0x482d04;
            };
            _0x490e2d.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x593748.util.toJSONOptions);
            };
            _0x490e2d.getTypeUrl = function (_0x28851a) {
              if (undefined === _0x28851a) {
                _0x28851a = "type.googleapis.com";
              }
              return _0x28851a + "/petraProto.SpinAck";
            };
            return _0x490e2d;
          }(),
          GameInfoData: function () {
            function _0x3ba8da(_0x1c8de3) {
              this.Mul = [];
              this.ComboSetting = [];
              if (_0x1c8de3) {
                var _0x453d75 = Object.keys(_0x1c8de3);
                for (var _0x21b8f9 = 0x0; _0x21b8f9 < _0x453d75.length; ++_0x21b8f9) {
                  if (null != _0x1c8de3[_0x453d75[_0x21b8f9]]) {
                    this[_0x453d75[_0x21b8f9]] = _0x1c8de3[_0x453d75[_0x21b8f9]];
                  }
                }
              }
            }
            _0x3ba8da.prototype.ShowExtra = false;
            _0x3ba8da.prototype.Mul = _0x34c0a.emptyArray;
            _0x3ba8da.prototype.ComboSetting = _0x34c0a.emptyArray;
            _0x3ba8da.create = function (_0x5ed9eb) {
              return new _0x3ba8da(_0x5ed9eb);
            };
            _0x3ba8da.encode = function (_0x277f76, _0x136517) {
              if (!_0x136517) {
                _0x136517 = _0x44cc9e.create();
              }
              if (null != _0x277f76.ShowExtra && Object.hasOwnProperty.call(_0x277f76, "ShowExtra")) {
                _0x136517.uint32(0x8).bool(_0x277f76.ShowExtra);
              }
              if (null != _0x277f76.Mul && _0x277f76.Mul.length) {
                _0x136517.uint32(0x12).fork();
                for (var _0x3a402d = 0x0; _0x3a402d < _0x277f76.Mul.length; ++_0x3a402d) {
                  _0x136517.double(_0x277f76.Mul[_0x3a402d]);
                }
                _0x136517.ldelim();
              }
              if (null != _0x277f76.ComboSetting && _0x277f76.ComboSetting.length) {
                for (_0x3a402d = 0x0; _0x3a402d < _0x277f76.ComboSetting.length; ++_0x3a402d) {
                  _0x3d5b89.petraProto.Column.encode(_0x277f76.ComboSetting[_0x3a402d], _0x136517.uint32(0x1a).fork()).ldelim();
                }
              }
              return _0x136517;
            };
            _0x3ba8da.encodeDelimited = function (_0x5f46da, _0x54cec3) {
              return this.encode(_0x5f46da, _0x54cec3).ldelim();
            };
            _0x3ba8da.decode = function (_0x3026c7, _0x5f37de) {
              if (!(_0x3026c7 instanceof _0x5edcd4)) {
                _0x3026c7 = _0x5edcd4.create(_0x3026c7);
              }
              var _0x434d7b = undefined === _0x5f37de ? _0x3026c7.len : _0x3026c7.pos + _0x5f37de;
              for (var _0x5b1f74 = new _0x3d5b89.petraProto.GameInfoData(); _0x3026c7.pos < _0x434d7b;) {
                var _0x3501db = _0x3026c7.uint32();
                switch (_0x3501db >>> 0x3) {
                  case 0x1:
                    _0x5b1f74.ShowExtra = _0x3026c7.bool();
                    break;
                  case 0x2:
                    if (!(_0x5b1f74.Mul && _0x5b1f74.Mul.length)) {
                      _0x5b1f74.Mul = [];
                    }
                    if (0x2 == (0x7 & _0x3501db)) {
                      for (var _0x3d724b = _0x3026c7.uint32() + _0x3026c7.pos; _0x3026c7.pos < _0x3d724b;) {
                        _0x5b1f74.Mul.push(_0x3026c7.double());
                      }
                    } else {
                      _0x5b1f74.Mul.push(_0x3026c7.double());
                    }
                    break;
                  case 0x3:
                    if (!(_0x5b1f74.ComboSetting && _0x5b1f74.ComboSetting.length)) {
                      _0x5b1f74.ComboSetting = [];
                    }
                    _0x5b1f74.ComboSetting.push(_0x3d5b89.petraProto.Column.decode(_0x3026c7, _0x3026c7.uint32()));
                    break;
                  default:
                    _0x3026c7.skipType(0x7 & _0x3501db);
                }
              }
              return _0x5b1f74;
            };
            _0x3ba8da.decodeDelimited = function (_0x4c9ddf) {
              if (!(_0x4c9ddf instanceof _0x5edcd4)) {
                _0x4c9ddf = new _0x5edcd4(_0x4c9ddf);
              }
              return this.decode(_0x4c9ddf, _0x4c9ddf.uint32());
            };
            _0x3ba8da.verify = function (_0xdf7688) {
              if ("object" != typeof _0xdf7688 || null === _0xdf7688) {
                return "object expected";
              }
              if (null != _0xdf7688.ShowExtra && _0xdf7688.hasOwnProperty('ShowExtra') && 'boolean' != typeof _0xdf7688.ShowExtra) {
                return "ShowExtra: boolean expected";
              }
              if (null != _0xdf7688.Mul && _0xdf7688.hasOwnProperty("Mul")) {
                if (!Array.isArray(_0xdf7688.Mul)) {
                  return "Mul: array expected";
                }
                for (var _0x113e7d = 0x0; _0x113e7d < _0xdf7688.Mul.length; ++_0x113e7d) {
                  if ("number" != typeof _0xdf7688.Mul[_0x113e7d]) {
                    return "Mul: number[] expected";
                  }
                }
              }
              if (null != _0xdf7688.ComboSetting && _0xdf7688.hasOwnProperty("ComboSetting")) {
                if (!Array.isArray(_0xdf7688.ComboSetting)) {
                  return "ComboSetting: array expected";
                }
                for (_0x113e7d = 0x0; _0x113e7d < _0xdf7688.ComboSetting.length; ++_0x113e7d) {
                  var _0x5056ef = _0x3d5b89.petraProto.Column.verify(_0xdf7688.ComboSetting[_0x113e7d]);
                  if (_0x5056ef) {
                    return 'ComboSetting.' + _0x5056ef;
                  }
                }
              }
              return null;
            };
            _0x3ba8da.fromObject = function (_0x397524) {
              if (_0x397524 instanceof _0x3d5b89.petraProto.GameInfoData) {
                return _0x397524;
              }
              var _0x2211ed = new _0x3d5b89.petraProto.GameInfoData();
              if (null != _0x397524.ShowExtra) {
                _0x2211ed.ShowExtra = Boolean(_0x397524.ShowExtra);
              }
              if (_0x397524.Mul) {
                if (!Array.isArray(_0x397524.Mul)) {
                  throw TypeError(".petraProto.GameInfoData.Mul: array expected");
                }
                _0x2211ed.Mul = [];
                for (var _0x22bcbc = 0x0; _0x22bcbc < _0x397524.Mul.length; ++_0x22bcbc) {
                  _0x2211ed.Mul[_0x22bcbc] = Number(_0x397524.Mul[_0x22bcbc]);
                }
              }
              if (_0x397524.ComboSetting) {
                if (!Array.isArray(_0x397524.ComboSetting)) {
                  throw TypeError(".petraProto.GameInfoData.ComboSetting: array expected");
                }
                _0x2211ed.ComboSetting = [];
                for (_0x22bcbc = 0x0; _0x22bcbc < _0x397524.ComboSetting.length; ++_0x22bcbc) {
                  if ("object" != typeof _0x397524.ComboSetting[_0x22bcbc]) {
                    throw TypeError(".petraProto.GameInfoData.ComboSetting: object expected");
                  }
                  _0x2211ed.ComboSetting[_0x22bcbc] = _0x3d5b89.petraProto.Column.fromObject(_0x397524.ComboSetting[_0x22bcbc]);
                }
              }
              return _0x2211ed;
            };
            _0x3ba8da.toObject = function (_0x5eabc1, _0x5abbd2) {
              if (!_0x5abbd2) {
                _0x5abbd2 = {};
              }
              var _0x2c3bff = {};
              if (_0x5abbd2.arrays || _0x5abbd2.defaults) {
                _0x2c3bff.Mul = [];
                _0x2c3bff.ComboSetting = [];
              }
              if (_0x5abbd2.defaults) {
                _0x2c3bff.ShowExtra = false;
              }
              if (null != _0x5eabc1.ShowExtra && _0x5eabc1.hasOwnProperty("ShowExtra")) {
                _0x2c3bff.ShowExtra = _0x5eabc1.ShowExtra;
              }
              if (_0x5eabc1.Mul && _0x5eabc1.Mul.length) {
                _0x2c3bff.Mul = [];
                for (var _0x4f898e = 0x0; _0x4f898e < _0x5eabc1.Mul.length; ++_0x4f898e) {
                  _0x2c3bff.Mul[_0x4f898e] = _0x5abbd2.json && !isFinite(_0x5eabc1.Mul[_0x4f898e]) ? String(_0x5eabc1.Mul[_0x4f898e]) : _0x5eabc1.Mul[_0x4f898e];
                }
              }
              if (_0x5eabc1.ComboSetting && _0x5eabc1.ComboSetting.length) {
                _0x2c3bff.ComboSetting = [];
                for (_0x4f898e = 0x0; _0x4f898e < _0x5eabc1.ComboSetting.length; ++_0x4f898e) {
                  _0x2c3bff.ComboSetting[_0x4f898e] = _0x3d5b89.petraProto.Column.toObject(_0x5eabc1.ComboSetting[_0x4f898e], _0x5abbd2);
                }
              }
              return _0x2c3bff;
            };
            _0x3ba8da.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x593748.util.toJSONOptions);
            };
            _0x3ba8da.getTypeUrl = function (_0x150489) {
              if (undefined === _0x150489) {
                _0x150489 = 'type.googleapis.com';
              }
              return _0x150489 + "/petraProto.GameInfoData";
            };
            return _0x3ba8da;
          }()
        }).Column = function () {
          function _0x3559c2(_0x4209c7) {
            this.Col = [];
            if (_0x4209c7) {
              var _0x486d49 = Object.keys(_0x4209c7);
              for (var _0x48334b = 0x0; _0x48334b < _0x486d49.length; ++_0x48334b) {
                if (null != _0x4209c7[_0x486d49[_0x48334b]]) {
                  this[_0x486d49[_0x48334b]] = _0x4209c7[_0x486d49[_0x48334b]];
                }
              }
            }
          }
          _0x3559c2.prototype.Col = _0x34c0a.emptyArray;
          _0x3559c2.create = function (_0x15497b) {
            return new _0x3559c2(_0x15497b);
          };
          _0x3559c2.encode = function (_0x595273, _0x55ef76) {
            if (!_0x55ef76) {
              _0x55ef76 = _0x44cc9e.create();
            }
            if (null != _0x595273.Col && _0x595273.Col.length) {
              _0x55ef76.uint32(0xa).fork();
              for (var _0x4567ce = 0x0; _0x4567ce < _0x595273.Col.length; ++_0x4567ce) {
                _0x55ef76.int32(_0x595273.Col[_0x4567ce]);
              }
              _0x55ef76.ldelim();
            }
            return _0x55ef76;
          };
          _0x3559c2.encodeDelimited = function (_0x195ae5, _0x172156) {
            return this.encode(_0x195ae5, _0x172156).ldelim();
          };
          _0x3559c2.decode = function (_0x33c58f, _0x2e7071) {
            if (!(_0x33c58f instanceof _0x5edcd4)) {
              _0x33c58f = _0x5edcd4.create(_0x33c58f);
            }
            var _0x2f4f95 = undefined === _0x2e7071 ? _0x33c58f.len : _0x33c58f.pos + _0x2e7071;
            for (var _0x587e3b = new _0x3d5b89.petraProto.Column(); _0x33c58f.pos < _0x2f4f95;) {
              var _0x174358 = _0x33c58f.uint32();
              switch (_0x174358 >>> 0x3) {
                case 0x1:
                  if (!(_0x587e3b.Col && _0x587e3b.Col.length)) {
                    _0x587e3b.Col = [];
                  }
                  if (0x2 == (0x7 & _0x174358)) {
                    for (var _0x389004 = _0x33c58f.uint32() + _0x33c58f.pos; _0x33c58f.pos < _0x389004;) {
                      _0x587e3b.Col.push(_0x33c58f.int32());
                    }
                  } else {
                    _0x587e3b.Col.push(_0x33c58f.int32());
                  }
                  break;
                default:
                  _0x33c58f.skipType(0x7 & _0x174358);
              }
            }
            return _0x587e3b;
          };
          _0x3559c2.decodeDelimited = function (_0x1712af) {
            if (!(_0x1712af instanceof _0x5edcd4)) {
              _0x1712af = new _0x5edcd4(_0x1712af);
            }
            return this.decode(_0x1712af, _0x1712af.uint32());
          };
          _0x3559c2.verify = function (_0x1fde24) {
            if ("object" != typeof _0x1fde24 || null === _0x1fde24) {
              return "object expected";
            }
            if (null != _0x1fde24.Col && _0x1fde24.hasOwnProperty('Col')) {
              if (!Array.isArray(_0x1fde24.Col)) {
                return "Col: array expected";
              }
              for (var _0x4bf4a3 = 0x0; _0x4bf4a3 < _0x1fde24.Col.length; ++_0x4bf4a3) {
                if (!_0x34c0a.isInteger(_0x1fde24.Col[_0x4bf4a3])) {
                  return "Col: integer[] expected";
                }
              }
            }
            return null;
          };
          _0x3559c2.fromObject = function (_0x3cca22) {
            if (_0x3cca22 instanceof _0x3d5b89.petraProto.Column) {
              return _0x3cca22;
            }
            var _0x5c0fcf = new _0x3d5b89.petraProto.Column();
            if (_0x3cca22.Col) {
              if (!Array.isArray(_0x3cca22.Col)) {
                throw TypeError(".petraProto.Column.Col: array expected");
              }
              _0x5c0fcf.Col = [];
              for (var _0x52c12a = 0x0; _0x52c12a < _0x3cca22.Col.length; ++_0x52c12a) {
                _0x5c0fcf.Col[_0x52c12a] = 0x0 | _0x3cca22.Col[_0x52c12a];
              }
            }
            return _0x5c0fcf;
          };
          _0x3559c2.toObject = function (_0x11fc43, _0x59bda5) {
            if (!_0x59bda5) {
              _0x59bda5 = {};
            }
            var _0x19c4bd = {};
            if (_0x59bda5.arrays || _0x59bda5.defaults) {
              _0x19c4bd.Col = [];
            }
            if (_0x11fc43.Col && _0x11fc43.Col.length) {
              _0x19c4bd.Col = [];
              for (var _0x3db762 = 0x0; _0x3db762 < _0x11fc43.Col.length; ++_0x3db762) {
                _0x19c4bd.Col[_0x3db762] = _0x11fc43.Col[_0x3db762];
              }
            }
            return _0x19c4bd;
          };
          _0x3559c2.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x593748.util.toJSONOptions);
          };
          _0x3559c2.getTypeUrl = function (_0x13ce11) {
            if (undefined === _0x13ce11) {
              _0x13ce11 = 'type.googleapis.com';
            }
            return _0x13ce11 + "/petraProto.Column";
          };
          return _0x3559c2;
        }();
        _0x3d5b89.petraProto = _0x504788;
        _0x6ef6cd.exports = _0x3d5b89;
        _0x4ba556 = _0x6ef6cd.exports;
      }, function () {
        return {
          'protobufjs/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      _0x1c1e99.require("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/assets/game/Script/Proto/petraProto.js");
      _0x2c4ee5._RF.push({}, "b39c5N73BtFB6bXD++LJdAW", "CharacterSpine", undefined);
      var _0x9adcbf = _0x73005c.ccclass;
      var _0x19fe19 = _0x73005c.property;
      var _0x4b170d = {
        'NONE': "none",
        'IDLE': "Idle",
        'IDLE2': "Idle2",
        'NEAR_WIN_START': 'Win_Start',
        'NEAR_WIN_LOOP': "Win_Loop",
        'NEAR_WIN_BIG': "Win_BigWin",
        'BIGWIN_LOOP': 'BigWin_Loop',
        'BIGWIN_START': 'BigWin_Start',
        'BIGWIN_END': 'BigWin_End',
        'MY_STERY_COLLECT2': "Mystery_Collect2",
        'MY_STERY_SHOW': "Mystery_Show",
        'TREASURE_END': "Treasure_End",
        'TREASURE_LOOP': "Treasure_Loop",
        'TREASURE_START': "Treasure_Start",
        'TREASURE_WIN': "Treasure_Win",
        'WIN': 'Win',
        'WIN2': 'Win2'
      };
      _0x2da5ad = _0x9adcbf("CharacterSpine");
      _0x33ddd6 = _0x19fe19({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': '橫版'
      });
      _0x5264f3 = function (_0xba4302) {
        function _0x464e1f() {
          var _0x30ed8b;
          var _0x2f3af8 = arguments.length;
          var _0x23da71 = new Array(_0x2f3af8);
          for (var _0x224a46 = 0x0; _0x224a46 < _0x2f3af8; _0x224a46++) {
            _0x23da71[_0x224a46] = arguments[_0x224a46];
          }
          _0x30ed8b = _0xba4302.call.apply(_0xba4302, [this].concat(_0x23da71)) || this;
          _0x5043f5(_0x30ed8b, 'm_characterSpine', _0x115e86, _0x21436e(_0x30ed8b));
          _0x30ed8b.m_playName = "none";
          _0x30ed8b.m_isLandscape = null;
          _0x30ed8b.m_sounds = [false, false];
          _0x30ed8b.m_isFX = false;
          _0x30ed8b.m_isNearWin = false;
          _0x30ed8b.m_isHardStop = false;
          _0x30ed8b.m_oldPos = null;
          return _0x30ed8b;
        }
        _0x197a27(_0x464e1f, _0xba4302);
        var _0x150fed = _0x464e1f.prototype;
        _0x150fed.start = function () {
          for (var _0xb33966 in _0x4b170d) if (Object.prototype.hasOwnProperty.call(_0x4b170d, _0xb33966)) {
            var _0x31dc87 = _0x4b170d[_0xb33966];
            if (_0x31dc87 == "none") {
              continue;
            }
            for (var _0x405be3 in _0x4b170d) if (Object.prototype.hasOwnProperty.call(_0x4b170d, _0x405be3)) {
              var _0x99ad0f = _0x4b170d[_0x405be3];
              if (_0x99ad0f == "none") {
                continue;
              }
              this.SetMix(_0x31dc87, _0x99ad0f);
            }
          }
        };
        _0x150fed.update = function (_0xaec73) {};
        _0x150fed.CloseTween = function () {
          _0x2a6906.stopAllByTarget(this.node);
        };
        _0x150fed.CloseSound = function () {
          this.m_sounds = [false, false];
        };
        _0x150fed.ShowIdle = function () {
          this.m_isNearWin = false;
          if (this.m_playName !== "Idle" && this.m_playName !== "Idle2") {
            if (this.m_playName !== 'BigWin_Start' && this.m_playName !== 'BigWin_Loop' && this.m_playName !== 'Win_Start' && this.m_playName !== "Win_Loop" && this.m_playName !== "Win_BigWin") {
              this.PlayAnimation("Idle", true);
            } else {
              this.ShowBigWinEnd();
            }
          }
        };
        _0x150fed.ShowFg = function () {
          var _0xa75821 = this;
          this.m_oldPos = this.node.getPosition();
          _0x1ce2d1(this.node).delay(1.5).to(0x1, {
            'position': new _0x93abd1(0x12c, 0x0, 0x0)
          }).call(function () {
            if (!(_0xa75821.m_playName !== 'BigWin_Start' && _0xa75821.m_playName !== 'BigWin_Loop' && _0xa75821.m_playName !== 'Win_Start' && _0xa75821.m_playName !== "Win_Loop" && _0xa75821.m_playName !== "Win_BigWin")) {
              _0xa75821.ShowBigWinEnd();
            }
          }).start();
        };
        _0x150fed.ShowFgEnd = function () {
          _0x1ce2d1(this.node).to(0x1, {
            'position': this.m_oldPos
          }).start();
        };
        _0x150fed.ShowNearWin = function () {
          var _0x31e015 = _0x2d97e1(_0x3a966d().mark(function _0x2c3561() {
            return _0x3a966d().wrap(function (_0x23dccc) {
              for (;;) {
                switch (_0x23dccc.prev = _0x23dccc.next) {
                  case 0x0:
                    if (this.m_playName !== 'Win_Start' && this.m_playName !== "Win_Loop") {
                      _0x23dccc.next = 0x2;
                      break;
                    }
                    return _0x23dccc.abrupt("return");
                  case 0x2:
                    _0x23dccc.next = 0x4;
                    return this.PlayAnimation('Win_Start');
                  case 0x4:
                    if (!_0x23dccc.sent) {
                      _0x23dccc.next = 0x7;
                      break;
                    }
                    return _0x23dccc.abrupt('return');
                  case 0x7:
                    this.PlayAnimation("Win_Loop", true);
                  case 0x8:
                  case "end":
                    return _0x23dccc.stop();
                }
              }
            }, _0x2c3561, this);
          }));
          return function () {
            return _0x31e015.apply(this, arguments);
          };
        }();
        _0x150fed.ShowFullPlate = function () {
          var _0x4b423a = _0x2d97e1(_0x3a966d().mark(function _0x59f800() {
            return _0x3a966d().wrap(function (_0x1f8c52) {
              for (;;) {
                switch (_0x1f8c52.prev = _0x1f8c52.next) {
                  case 0x0:
                    if (this.m_playName !== "Win_BigWin" && this.m_playName !== 'BigWin_Loop') {
                      _0x1f8c52.next = 0x2;
                      break;
                    }
                    return _0x1f8c52.abrupt("return");
                  case 0x2:
                    _0x1f8c52.next = 0x4;
                    return this.PlayAnimation("Win_BigWin");
                  case 0x4:
                    if (!_0x1f8c52.sent) {
                      _0x1f8c52.next = 0x7;
                      break;
                    }
                    return _0x1f8c52.abrupt('return');
                  case 0x7:
                    this.PlayAnimation('BigWin_Loop', true);
                  case 0x8:
                  case "end":
                    return _0x1f8c52.stop();
                }
              }
            }, _0x59f800, this);
          }));
          return function () {
            return _0x4b423a.apply(this, arguments);
          };
        }();
        _0x150fed.ShowBigWin = function () {
          var _0x42f009 = _0x2d97e1(_0x3a966d().mark(function _0x368848() {
            return _0x3a966d().wrap(function (_0x2a0b7b) {
              for (;;) {
                switch (_0x2a0b7b.prev = _0x2a0b7b.next) {
                  case 0x0:
                    if (this.m_playName != 'BigWin_Start' && this.m_playName != 'BigWin_Loop') {
                      _0x2a0b7b.next = 0x2;
                      break;
                    }
                    return _0x2a0b7b.abrupt("return");
                  case 0x2:
                    if (this.m_playName !== 'Win_Start' && this.m_playName !== "Win_Loop") {
                      _0x2a0b7b.next = 0xb;
                      break;
                    }
                    _0x2a0b7b.next = 0x5;
                    return this.PlayAnimation("Win_BigWin");
                  case 0x5:
                    if (!_0x2a0b7b.sent) {
                      _0x2a0b7b.next = 0x8;
                      break;
                    }
                    return _0x2a0b7b.abrupt('return');
                  case 0x8:
                    this.PlayAnimation('BigWin_Loop', true);
                    _0x2a0b7b.next = 0xc;
                    break;
                  case 0xb:
                    this.PlayAnimation('BigWin_Start', false);
                  case 0xc:
                  case "end":
                    return _0x2a0b7b.stop();
                }
              }
            }, _0x368848, this);
          }));
          return function () {
            return _0x42f009.apply(this, arguments);
          };
        }();
        _0x150fed.ShowBigWinEnd = function () {
          this.PlayAnimation('BigWin_End', false);
        };
        _0x150fed.ShowWin = function () {
          var _0x622bc1 = _0x2d97e1(_0x3a966d().mark(function _0x2795fa(_0x4ffb6d, _0x429c6f) {
            var _0x17477c;
            return _0x3a966d().wrap(function (_0x36846e) {
              for (;;) {
                switch (_0x36846e.prev = _0x36846e.next) {
                  case 0x0:
                    _0x17477c = false;
                    if (_0x3fb2b5.IsInFG) {
                      if (_0x4ffb6d >= 0x5) {
                        _0x17477c = true;
                        if (_0x429c6f) {
                          _0x2d761c.Play(_0x3fb2b5.AudioClips.Girl_02);
                        }
                      }
                    } else if (_0x4ffb6d >= 0x2 && !this.m_sounds[0x0]) {
                      if (_0x429c6f) {
                        this.m_sounds[0x0] = true;
                        _0x2d761c.Play(_0x3fb2b5.AudioClips.Girl_01);
                      }
                      _0x17477c = true;
                    } else if (_0x4ffb6d >= 0x6 && !this.m_sounds[0x1]) {
                      if (_0x429c6f) {
                        this.m_sounds[0x1] = true;
                        _0x2d761c.Play(_0x3fb2b5.AudioClips.Girl_02);
                      }
                      _0x17477c = true;
                    } else if (_0x4ffb6d >= 0x6) {
                      _0x17477c = true;
                    }
                    if (!this.m_isNearWin) {
                      _0x36846e.next = 0x4;
                      break;
                    }
                    return _0x36846e.abrupt("return");
                  case 0x4:
                    if (_0x17477c) {
                      this.PlayAnimation('Win', false);
                    }
                  case 0x5:
                  case "end":
                    return _0x36846e.stop();
                }
              }
            }, _0x2795fa, this);
          }));
          return function (_0x337de6, _0x6d8466) {
            return _0x622bc1.apply(this, arguments);
          };
        }();
        _0x150fed.ShowTreasureWin = function () {
          var _0x3b5834 = _0x2d97e1(_0x3a966d().mark(function _0x5cb730(_0x2aeb7f) {
            return _0x3a966d().wrap(function (_0x1bbbef) {
              for (;;) {
                switch (_0x1bbbef.prev = _0x1bbbef.next) {
                  case 0x0:
                    this.PlayAnimation("Treasure_Win", false);
                    if (_0x2aeb7f >= 0x2 && !this.m_sounds[0x0]) {
                      this.m_sounds[0x0] = true;
                      _0x2d761c.Play(_0x3fb2b5.AudioClips.Girl_01);
                    } else if (_0x2aeb7f >= 0x6 && !this.m_sounds[0x1]) {
                      this.m_sounds[0x1] = true;
                      _0x2d761c.Play(_0x3fb2b5.AudioClips.Girl_02);
                    }
                  case 0x2:
                  case "end":
                    return _0x1bbbef.stop();
                }
              }
            }, _0x5cb730, this);
          }));
          return function (_0x3a4281) {
            return _0x3b5834.apply(this, arguments);
          };
        }();
        _0x150fed.ShowCollect = function () {
          var _0x34cdba = _0x2d97e1(_0x3a966d().mark(function _0x5f077c() {
            return _0x3a966d().wrap(function (_0x5e7c3a) {
              for (;;) {
                switch (_0x5e7c3a.prev = _0x5e7c3a.next) {
                  case 0x0:
                    if (this.m_playName !== "Mystery_Collect2") {
                      _0x5e7c3a.next = 0x2;
                      break;
                    }
                    return _0x5e7c3a.abrupt("return");
                  case 0x2:
                    this.PlayAnimation("Mystery_Collect2", false);
                    _0x2d761c.Play(_0x3fb2b5.AudioClips.Girl_04);
                  case 0x4:
                  case 'end':
                    return _0x5e7c3a.stop();
                }
              }
            }, _0x5f077c, this);
          }));
          return function () {
            return _0x34cdba.apply(this, arguments);
          };
        }();
        _0x150fed.ShowMyStery = function () {
          var _0x166293 = _0x2d97e1(_0x3a966d().mark(function _0x2d3535() {
            return _0x3a966d().wrap(function (_0x333568) {
              for (;;) {
                switch (_0x333568.prev = _0x333568.next) {
                  case 0x0:
                    if (this.m_playName !== "Mystery_Show") {
                      _0x333568.next = 0x2;
                      break;
                    }
                    return _0x333568.abrupt("return");
                  case 0x2:
                    this.PlayAnimation("Mystery_Show", false);
                  case 0x3:
                  case "end":
                    return _0x333568.stop();
                }
              }
            }, _0x2d3535, this);
          }));
          return function () {
            return _0x166293.apply(this, arguments);
          };
        }();
        _0x150fed.ShowFxTrans = function () {
          var _0x1b9ce3 = _0x2d97e1(_0x3a966d().mark(function _0x4dc7a8() {
            return _0x3a966d().wrap(function (_0x413637) {
              for (;;) {
                switch (_0x413637.prev = _0x413637.next) {
                  case 0x0:
                    if (this.m_playName !== "Treasure_Start") {
                      _0x413637.next = 0x2;
                      break;
                    }
                    return _0x413637.abrupt("return");
                  case 0x2:
                    this.PlayAnimation("Treasure_Start", false);
                  case 0x3:
                  case "end":
                    return _0x413637.stop();
                }
              }
            }, _0x4dc7a8, this);
          }));
          return function () {
            return _0x1b9ce3.apply(this, arguments);
          };
        }();
        _0x150fed.ShowFxTransLoop = function () {
          var _0x5cd76c = _0x2d97e1(_0x3a966d().mark(function _0x55addf() {
            return _0x3a966d().wrap(function (_0x171fa3) {
              for (;;) {
                switch (_0x171fa3.prev = _0x171fa3.next) {
                  case 0x0:
                    if (this.m_playName !== "Treasure_Loop") {
                      _0x171fa3.next = 0x2;
                      break;
                    }
                    return _0x171fa3.abrupt('return');
                  case 0x2:
                    this.PlayAnimation("Treasure_Loop", true);
                  case 0x3:
                  case 'end':
                    return _0x171fa3.stop();
                }
              }
            }, _0x55addf, this);
          }));
          return function () {
            return _0x5cd76c.apply(this, arguments);
          };
        }();
        _0x150fed.ShowFxTransEnd = function () {
          var _0x2cae03 = _0x2d97e1(_0x3a966d().mark(function _0x3d54bb() {
            return _0x3a966d().wrap(function (_0x175844) {
              for (;;) {
                switch (_0x175844.prev = _0x175844.next) {
                  case 0x0:
                    this.PlayAnimation("Treasure_End", false);
                  case 0x1:
                  case "end":
                    return _0x175844.stop();
                }
              }
            }, _0x3d54bb, this);
          }));
          return function () {
            return _0x2cae03.apply(this, arguments);
          };
        }();
        _0x150fed.SetMix = function (_0x131cf4, _0x284f1e, _0x46010c) {
          if (undefined === _0x46010c) {
            _0x46010c = 0.3;
          }
          this.m_characterSpine.setMix(_0x131cf4, _0x284f1e, _0x46010c);
          this.m_characterSpine.setMix(_0x284f1e, _0x131cf4, _0x46010c);
        };
        _0x150fed.PlayAnimation = function (_0x1db845, _0x31d21b) {
          var _0x85f324 = this;
          if (undefined === _0x31d21b) {
            _0x31d21b = false;
          }
          if (_0x1db845 != this.m_playName) {
            this.m_playName = _0x1db845;
            return new Promise(function (_0x103ace) {
              _0x85f324.m_characterSpine.clearTrack(0x0);
              _0x85f324.m_characterSpine.setToSetupPose();
              var _0x329ced = _0x85f324.m_characterSpine.setAnimation(0x0, _0x1db845, _0x31d21b);
              var _0x3242a5 = function () {
                switch (_0x1db845) {
                  case "Idle":
                    _0x85f324.PlayAnimation("Idle", true);
                    break;
                  case "Mystery_Collect2":
                  case "Mystery_Show":
                    if (_0x85f324.m_isNearWin && _0x1db845 == "Mystery_Show") {
                      _0x85f324.PlayAnimation('BigWin_Loop', true);
                    } else if (_0x85f324.m_isFX) {
                      _0x85f324.PlayAnimation("Treasure_Loop", true);
                    } else {
                      _0x85f324.PlayAnimation("Idle", true);
                    }
                    break;
                  case 'BigWin_End':
                  case 'Win':
                  case "Idle2":
                    _0x85f324.PlayAnimation("Idle", true);
                    break;
                  case "Treasure_Start":
                  case "Treasure_Win":
                    _0x85f324.PlayAnimation("Treasure_Loop", true);
                    break;
                  case 'BigWin_Start':
                    _0x85f324.PlayAnimation('BigWin_Loop', true);
                }
              };
              _0x85f324.ClearListenerCallback(_0x85f324.m_characterSpine, _0x329ced, function (_0xc0bcc4) {
                if (!(_0xc0bcc4 || null == _0x3242a5)) {
                  _0x3242a5();
                }
                _0x3242a5 = null;
                _0x103ace(_0xc0bcc4);
              });
            });
          }
        };
        _0x150fed.OnRotation = function (_0x580db8) {
          this.m_isLandscape = _0x580db8;
          if (this.m_playName !== "none") {
            this.PlayAnimation(this.m_playName, true);
          }
        };
        _0x150fed.ClearListenerCallback = function (_0x3594b, _0x5d0f07, _0x2a51c1) {
          if (_0x3594b) {
            var _0x1c3937 = function (_0x5b845f) {
              return function (_0x5453ad) {
                if (_0x5d0f07 == _0x5453ad) {
                  if (_0x5d0f07) {
                    _0x3594b.setTrackInterruptListener(_0x5d0f07, function () {});
                    _0x3594b.setTrackCompleteListener(_0x5d0f07, function () {});
                  } else {
                    _0x3594b.setInterruptListener(null);
                    _0x3594b.setCompleteListener(null);
                  }
                  _0x2a51c1(_0x5b845f);
                }
              };
            };
            if (_0x5d0f07) {
              _0x3594b.setTrackInterruptListener(_0x5d0f07, _0x1c3937(true));
              _0x3594b.setTrackCompleteListener(_0x5d0f07, _0x1c3937(false));
            } else {
              _0x3594b.setInterruptListener(_0x1c3937(true));
              _0x3594b.setCompleteListener(_0x1c3937(false));
            }
          }
        };
        _0x4e0271(_0x464e1f, [{
          'key': "isFX",
          'set': function (_0x3717f0) {
            this.m_isFX = _0x3717f0;
          }
        }, {
          'key': "isNearWin",
          'set': function (_0x34e245) {
            this.m_isNearWin = _0x34e245;
          }
        }, {
          'key': "IsHardStop",
          'set': function (_0x337ff2) {
            this.m_isHardStop = _0x337ff2;
          }
        }]);
        return _0x464e1f;
      }(_0x2e72bb);
      _0x115e86 = _0x49a46a(_0x5264f3.prototype, 'm_characterSpine', [_0x33ddd6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x512d22 = _0x2da5ad(_0x3f52db = _0x5264f3) || _0x3f52db;
      var _0x84980d;
      var _0x1bea9c;
      var _0x40541f;
      var _0x3f3295;
      var _0x5cadbd;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "c15edq24L9L96Qzav6WAD2m", "FlashLightSpine", undefined);
      var _0x2f0355 = _0x73005c.ccclass;
      var _0x14483b = _0x73005c.property;
      _0x84980d = _0x2f0355("FlashLightSpine");
      _0x1bea9c = _0x14483b({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': "spine"
      });
      _0x3f3295 = function (_0x5dfd5c) {
        function _0x2c764b() {
          var _0x55b43f;
          var _0x376ff6 = arguments.length;
          var _0x4f12f2 = new Array(_0x376ff6);
          for (var _0x27ec8e = 0x0; _0x27ec8e < _0x376ff6; _0x27ec8e++) {
            _0x4f12f2[_0x27ec8e] = arguments[_0x27ec8e];
          }
          _0x55b43f = _0x5dfd5c.call.apply(_0x5dfd5c, [this].concat(_0x4f12f2)) || this;
          _0x5043f5(_0x55b43f, 'm_spine', _0x5cadbd, _0x21436e(_0x55b43f));
          return _0x55b43f;
        }
        _0x197a27(_0x2c764b, _0x5dfd5c);
        var _0xbf3ce9 = _0x2c764b.prototype;
        _0xbf3ce9.Show = function () {
          var _0x444bee = _0x2d97e1(_0x3a966d().mark(function _0x4d5202(_0x335d5d) {
            return _0x3a966d().wrap(function (_0x30ca23) {
              for (;;) {
                switch (_0x30ca23.prev = _0x30ca23.next) {
                  case 0x0:
                    this.m_spine.node.active = true;
                    _0x30ca23.next = 0x3;
                    return this.PlayAnimation(_0x335d5d ? "Flashlight_L" : 'Flashlight_S');
                  case 0x3:
                    this.m_spine.node.active = false;
                  case 0x4:
                  case 'end':
                    return _0x30ca23.stop();
                }
              }
            }, _0x4d5202, this);
          }));
          return function (_0x53ae8a) {
            return _0x444bee.apply(this, arguments);
          };
        }();
        _0xbf3ce9.PlayAnimation = function (_0x56c0ad, _0x398890) {
          var _0x2652c7 = this;
          if (undefined === _0x398890) {
            _0x398890 = false;
          }
          return new Promise(function (_0x196efe) {
            _0x2652c7.m_spine.clearTrack(0x0);
            _0x2652c7.m_spine.setToSetupPose();
            var _0x81bce0 = _0x2652c7.m_spine.setAnimation(0x0, _0x56c0ad, _0x398890);
            if (_0x81bce0) {
              _0x2652c7.m_spine.setTrackEventListener(_0x81bce0, function (_0x4e695d, _0x68a954) {});
              _0x2652c7.m_spine.setTrackCompleteListener(_0x81bce0, function () {
                _0x196efe();
              });
            } else {
              _0x2652c7.m_spine.setCompleteListener(function () {
                _0x196efe();
              });
            }
          });
        };
        return _0x2c764b;
      }(_0x2e72bb);
      _0x5cadbd = _0x49a46a(_0x3f3295.prototype, "m_spine", [_0x1bea9c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x38979f = _0x84980d(_0x40541f = _0x3f3295) || _0x40541f;
      var _0xdd57c6;
      var _0x2c06d6;
      var _0x3881a0;
      var _0x30405d;
      var _0x255dd2;
      var _0x225a30;
      var _0x5aea1b;
      var _0x5f0e56;
      var _0x9a247e;
      var _0x2582a5;
      var _0x1259f1;
      var _0x419049;
      var _0xcf6440;
      var _0x4c7369;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "642fadUMkBCNZKfHQf3zpfV", "TreasureDeclare", undefined);
      var _0x133089 = _0x73005c.ccclass;
      var _0x1d42bf = _0x73005c.property;
      var _0x4ad1b3;
      !function (_0x1356ef) {
        _0x1356ef.NONE = "none";
        _0x1356ef.FG_TREASURE_L = "FG_Treasure_L";
        _0x1356ef.FG_TREASURE_S = "FG_Treasure_S";
      }(_0x4ad1b3 || (_0x4ad1b3 = {}));
      _0xdd57c6 = _0x133089("TreasureDeclare");
      _0x2c06d6 = _0x1d42bf({
        'type': _0x481e90,
        'tooltip': "黃金祕寶"
      });
      _0x3881a0 = _0x1d42bf({
        'type': _0x512d22,
        'tooltip': '角色'
      });
      _0x30405d = _0x1d42bf({
        'type': _0x24476b,
        'tooltip': '祕寶盤面特效'
      });
      _0x255dd2 = _0x1d42bf({
        'type': _0x27176c,
        'tooltip': "Treasure節點"
      });
      _0x225a30 = _0x1d42bf({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': "spine"
      });
      _0x5aea1b = _0x1d42bf({
        'type': _0x38979f,
        'tooltip': "手電筒光影效果"
      });
      _0x5f0e56 = function (_0x44571b) {
        function _0x50f283() {
          var _0x5e7e21;
          var _0x182004 = arguments.length;
          var _0x20e2bd = new Array(_0x182004);
          for (var _0x145fae = 0x0; _0x145fae < _0x182004; _0x145fae++) {
            _0x20e2bd[_0x145fae] = arguments[_0x145fae];
          }
          _0x5e7e21 = _0x44571b.call.apply(_0x44571b, [this].concat(_0x20e2bd)) || this;
          _0x5043f5(_0x5e7e21, "m_goldenSprite", _0x9a247e, _0x21436e(_0x5e7e21));
          _0x5043f5(_0x5e7e21, "m_characterSpine", _0x2582a5, _0x21436e(_0x5e7e21));
          _0x5043f5(_0x5e7e21, 'm_fgTreasureFx', _0x1259f1, _0x21436e(_0x5e7e21));
          _0x5043f5(_0x5e7e21, "m_treasureNode", _0x419049, _0x21436e(_0x5e7e21));
          _0x5043f5(_0x5e7e21, 'm_fgTreasureSkeleton', _0xcf6440, _0x21436e(_0x5e7e21));
          _0x5043f5(_0x5e7e21, 'm_flashLightSpine', _0x4c7369, _0x21436e(_0x5e7e21));
          _0x5e7e21.m_playName = _0x4ad1b3.NONE;
          _0x5e7e21.m_isLandscape = null;
          _0x5e7e21.m_shakeStartCb = null;
          _0x5e7e21.m_shakeEndCb = null;
          _0x5e7e21.m_changCb = null;
          _0x5e7e21.m_time = 0x0;
          return _0x5e7e21;
        }
        _0x197a27(_0x50f283, _0x44571b);
        var _0x341dab = _0x50f283.prototype;
        _0x341dab.start = function () {};
        _0x341dab.update = function (_0x32e393) {
          if (0x1 == this.m_time) {
            this.node.getComponent(_0x22aa71).opacity = 0xff;
          }
        };
        _0x341dab.ShowStart = function (_0x433b8c, _0x424625, _0x41c726) {
          var _0x4fc383 = this;
          _0x2d761c.Play(_0x3fb2b5.AudioClips.FG_Golden_treasure);
          this.m_shakeStartCb = _0x433b8c;
          this.m_shakeEndCb = _0x424625;
          this.m_changCb = _0x41c726;
          this.m_time = 0x0;
          this.node.getComponent(_0x22aa71).opacity = 0x0;
          _0x1ce2d1(this.node).call(function () {
            _0x2d761c.Play(_0x3fb2b5.AudioClips.Girl_05);
          }).delay(0x1).call(function () {
            if (_0x34ce7c.CurrLang !== _0x5cb914.Lang.EN) {
              var _0x5d1d4a = _0x34ce7c.GetGameAtlas();
              _0x4fc383.m_goldenSprite.spriteFrame = _0x5d1d4a.getSpriteFrame("TXT_FG_Treasure_Declare");
            }
            if (_0x4fc383.m_isLandscape) {
              _0x4fc383.m_playName = _0x4ad1b3.FG_TREASURE_L;
            } else {
              _0x4fc383.m_playName = _0x4ad1b3.FG_TREASURE_S;
            }
            _0x4fc383.m_treasureNode.active = true;
            _0x4fc383.PlayAnimation(_0x4fc383.m_playName, false);
          }).start();
        };
        _0x341dab.PlayAnimation = function (_0x2fea2e, _0x341339) {
          var _0x54ec66 = this;
          if (undefined === _0x341339) {
            _0x341339 = false;
          }
          this.node.active = true;
          this.m_playName = _0x2fea2e;
          return new Promise(function (_0xfeda70) {
            _0x54ec66.m_fgTreasureSkeleton.clearTrack(0x0);
            var _0x7457b5 = _0x54ec66.m_fgTreasureSkeleton.setAnimation(0x0, _0x2fea2e, _0x341339);
            _0x54ec66.m_fgTreasureSkeleton.setToSetupPose();
            _0x54ec66.m_time++;
            var _0x327b46 = function () {
              var _0x2a53d0 = _0x2d97e1(_0x3a966d().mark(function _0x5c18b3() {
                return _0x3a966d().wrap(function (_0x45a406) {
                  for (;;) {
                    switch (_0x45a406.prev = _0x45a406.next) {
                      case 0x0:
                        _0x2d761c.Play(_0x3fb2b5.AudioClips.FG_Symbol_change);
                        _0x54ec66.m_fgTreasureSkeleton.clearTrack(0x0);
                        _0x54ec66.m_fgTreasureSkeleton.setToSetupPose();
                        _0x54ec66.m_treasureNode.active = false;
                        _0x54ec66.m_playName;
                        _0x4ad1b3.NONE;
                        _0x54ec66.m_characterSpine.ShowFxTrans();
                        _0x45a406.next = 0x8;
                        return _0x54ec66.m_flashLightSpine.Show(_0x54ec66.m_isLandscape);
                      case 0x8:
                        if (!(null == _0x54ec66.m_changCb)) {
                          _0x54ec66.m_changCb();
                        }
                      case 0x9:
                      case "end":
                        return _0x45a406.stop();
                    }
                  }
                }, _0x5c18b3);
              }));
              return function () {
                return _0x2a53d0.apply(this, arguments);
              };
            }();
            if (_0x7457b5) {
              _0x54ec66.m_fgTreasureSkeleton.setTrackEventListener(_0x7457b5, function (_0x17fb6f, _0x505b53) {});
              _0x54ec66.m_fgTreasureSkeleton.setTrackCompleteListener(_0x7457b5, function () {
                _0x327b46();
                _0xfeda70(null);
              });
            } else {
              _0x54ec66.m_fgTreasureSkeleton.setCompleteListener(function () {
                _0x327b46();
                _0xfeda70(null);
              });
            }
          });
        };
        _0x341dab.OnRotation = function (_0x32ab4b) {
          this.m_isLandscape = _0x32ab4b;
          this.m_playName;
          _0x4ad1b3.NONE;
        };
        return _0x50f283;
      }(_0x2e72bb);
      _0x9a247e = _0x49a46a(_0x5f0e56.prototype, "m_goldenSprite", [_0x2c06d6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2582a5 = _0x49a46a(_0x5f0e56.prototype, "m_characterSpine", [_0x3881a0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1259f1 = _0x49a46a(_0x5f0e56.prototype, "m_fgTreasureFx", [_0x30405d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x419049 = _0x49a46a(_0x5f0e56.prototype, 'm_treasureNode', [_0x255dd2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xcf6440 = _0x49a46a(_0x5f0e56.prototype, "m_fgTreasureSkeleton", [_0x225a30], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4c7369 = _0x49a46a(_0x5f0e56.prototype, "m_flashLightSpine", [_0x5aea1b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x5e5460;
      var _0x52f796;
      var _0x3d2832;
      var _0x4f1c29;
      var _0xf7b9f5;
      var _0x38c052;
      var _0x25e200;
      var _0x41de0b;
      var _0x16a0e7;
      var _0xe912b0;
      var _0x15c5fa;
      var _0xeaea07;
      var _0x1df578;
      var _0x3750d1;
      var _0x3ad84f;
      var _0x1517e9;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "b50ff3oeeVPZLhULZOzyKaF", "FgComplimentSpine", undefined);
      var _0xfc7106 = _0x73005c.ccclass;
      var _0xbb4775 = _0x73005c.property;
      var _0x317b4b;
      !function (_0x2b8923) {
        _0x2b8923.NONE = 'none';
        _0x2b8923.L_START = 'L_Start';
        _0x2b8923.L_LOOP = 'L_Loop';
        _0x2b8923.L_END = 'L_End';
        _0x2b8923.S_START = "S_Start";
        _0x2b8923.S_LOOP = 'S_Loop';
        _0x2b8923.S_END = "S_End";
      }(_0x317b4b || (_0x317b4b = {}));
      _0x5e5460 = _0xfc7106("FgComplimentSpine");
      _0x52f796 = _0xbb4775({
        'type': _0x481e90,
        'tooltip': '恭喜'
      });
      _0x3d2832 = _0xbb4775({
        'type': _0x481e90,
        'tooltip': "你贏得"
      });
      _0x4f1c29 = _0xbb4775({
        'type': _0x36bc07,
        'tooltip': '分數'
      });
      _0xf7b9f5 = _0xbb4775({
        'type': _0x481e90,
        'tooltip': '在'
      });
      _0x38c052 = _0xbb4775({
        'type': _0x36bc07,
        'tooltip': '局數'
      });
      _0x25e200 = _0xbb4775({
        'type': _0x481e90,
        'tooltip': "免費遊戲"
      });
      _0x41de0b = _0xbb4775({
        'type': _0x1a8f7d.Skeleton,
        'tooltip': 'spine'
      });
      _0x16a0e7 = function (_0x4cae29) {
        function _0x224f88() {
          var _0x2f6fa4;
          var _0xb4fd9c = arguments.length;
          var _0x19069b = new Array(_0xb4fd9c);
          for (var _0x21fa4c = 0x0; _0x21fa4c < _0xb4fd9c; _0x21fa4c++) {
            _0x19069b[_0x21fa4c] = arguments[_0x21fa4c];
          }
          _0x2f6fa4 = _0x4cae29.call.apply(_0x4cae29, [this].concat(_0x19069b)) || this;
          _0x5043f5(_0x2f6fa4, "m_congratSprite", _0xe912b0, _0x21436e(_0x2f6fa4));
          _0x5043f5(_0x2f6fa4, "m_winSprite", _0x15c5fa, _0x21436e(_0x2f6fa4));
          _0x5043f5(_0x2f6fa4, "m_winLabel", _0xeaea07, _0x21436e(_0x2f6fa4));
          _0x5043f5(_0x2f6fa4, 'm_inSprite', _0x1df578, _0x21436e(_0x2f6fa4));
          _0x5043f5(_0x2f6fa4, "m_roundLabel", _0x3750d1, _0x21436e(_0x2f6fa4));
          _0x5043f5(_0x2f6fa4, "m_fgSprite", _0x3ad84f, _0x21436e(_0x2f6fa4));
          _0x5043f5(_0x2f6fa4, "m_fgComplimentSkeleton", _0x1517e9, _0x21436e(_0x2f6fa4));
          _0x2f6fa4.m_playName = _0x317b4b.NONE;
          _0x2f6fa4.m_isLandscape = null;
          _0x2f6fa4.m_win = 0x0;
          _0x2f6fa4.m_isAutoSpin = false;
          _0x2f6fa4.m_changeCb = null;
          _0x2f6fa4.m_isEnd = false;
          return _0x2f6fa4;
        }
        _0x197a27(_0x224f88, _0x4cae29);
        var _0x15fd5b = _0x224f88.prototype;
        _0x15fd5b.start = function () {};
        _0x15fd5b.update = function (_0x2b7462) {};
        _0x15fd5b.ShowStart = function () {
          var _0x5e4a0d = _0x2d97e1(_0x3a966d().mark(function _0x1e5e73(_0x101189, _0xe1b08, _0x2de6c1, _0x58f237) {
            var _0x3f1fe9;
            var _0x249651 = this;
            return _0x3a966d().wrap(function (_0x3e5f52) {
              for (;;) {
                switch (_0x3e5f52.prev = _0x3e5f52.next) {
                  case 0x0:
                    this.m_isAutoSpin = _0x101189;
                    this.m_isEnd = false;
                    this.m_changeCb = _0x58f237;
                    if (_0x34ce7c.CurrLang !== _0x5cb914.Lang.EN) {
                      _0x3f1fe9 = _0x34ce7c.GetGameAtlas();
                      this.m_congratSprite.spriteFrame = _0x3f1fe9.getSpriteFrame("TXT_FG_Declare_01");
                      this.m_winSprite.spriteFrame = _0x3f1fe9.getSpriteFrame("TXT_FG_Compliment_02");
                      this.m_inSprite.spriteFrame = _0x3f1fe9.getSpriteFrame("TXT_FG_Compliment_03_02");
                      this.m_fgSprite.spriteFrame = _0x3f1fe9.getSpriteFrame("TXT_FG_Compliment_03_02a");
                    }
                    this.m_roundLabel.string = _0xe1b08.toString();
                    this.m_winLabel.string = '0';
                    _0x1ce2d1(this.node).call(function () {
                      _0x2d761c.Play(_0x3fb2b5.AudioClips.Girl_06);
                    }).delay(0x1).call(function () {
                      _0x249651.node.active = true;
                      if (_0x249651.m_isLandscape) {
                        _0x249651.m_playName = _0x317b4b.L_START;
                      } else {
                        _0x249651.m_playName = _0x317b4b.S_START;
                      }
                      _0x249651.m_win = _0x2de6c1;
                      _0x249651.RoundWin();
                      _0x249651.PlayAnimation(_0x249651.m_playName, false);
                      _0x2d761c.Play(_0x3fb2b5.AudioClips.FG_End);
                    }).start();
                  case 0x7:
                  case "end":
                    return _0x3e5f52.stop();
                }
              }
            }, _0x1e5e73, this);
          }));
          return function (_0x2a8245, _0x21391d, _0x1522a7, _0x418154) {
            return _0x5e4a0d.apply(this, arguments);
          };
        }();
        _0x15fd5b.PlayAnimation = function (_0x293ae1, _0x2d8561) {
          var _0x357c84 = this;
          if (undefined === _0x2d8561) {
            _0x2d8561 = false;
          }
          this.m_playName = _0x293ae1;
          return new Promise(function (_0x4b2c46) {
            _0x357c84.m_fgComplimentSkeleton.clearTrack(0x0);
            _0x357c84.m_fgComplimentSkeleton.setToSetupPose();
            var _0x16aa16 = _0x357c84.m_fgComplimentSkeleton.setAnimation(0x0, _0x293ae1, _0x2d8561);
            var _0x5d668d = function () {
              switch (_0x293ae1) {
                case _0x317b4b.L_START:
                  _0x357c84.PlayAnimation(_0x317b4b.L_LOOP, true);
                  break;
                case _0x317b4b.S_START:
                  _0x357c84.PlayAnimation(_0x317b4b.S_LOOP, true);
                  break;
                case _0x317b4b.L_LOOP:
                  _0x357c84.PlayAnimation(_0x317b4b.L_END, false);
                  break;
                case _0x317b4b.S_LOOP:
                  _0x357c84.PlayAnimation(_0x317b4b.S_END, false);
                  break;
                case _0x317b4b.L_END:
                case _0x317b4b.S_END:
                  _0x357c84.m_fgComplimentSkeleton.clearTrack(0x0);
                  _0x357c84.m_fgComplimentSkeleton.setToSetupPose();
                  _0x357c84.node.active = false;
                  if (_0x357c84.m_isAutoSpin) {
                    _0x1ce2d1(_0x357c84.node).delay(0x1).call(function () {
                      _0x357c84.m_isEnd = true;
                    }).start();
                  } else {
                    _0x357c84.m_isEnd = true;
                  }
              }
            };
            if (_0x16aa16) {
              _0x357c84.m_fgComplimentSkeleton.setTrackEventListener(_0x16aa16, function (_0x3e83cd, _0x84fcd5) {});
              _0x357c84.m_fgComplimentSkeleton.setTrackCompleteListener(_0x16aa16, function () {
                _0x5d668d();
                _0x4b2c46(null);
              });
            } else {
              _0x357c84.m_fgComplimentSkeleton.setCompleteListener(function () {
                _0x5d668d();
                _0x4b2c46(null);
              });
            }
          });
        };
        _0x15fd5b.RoundWin = function () {
          var _0x109673 = this;
          var _0x4d0526 = _0x5544dd.divide(0x4, 0.02);
          var _0x2585bb = 0x0;
          var _0x536c44 = _0x5544dd.divide(Number(this.m_win), _0x4d0526);
          _0x1ce2d1(this.node).repeat(_0x4d0526, _0x1ce2d1().call(function () {
            if ((_0x2585bb = _0x5544dd.plus(_0x2585bb, _0x536c44)) >= _0x109673.m_win) {
              _0x2585bb = _0x109673.m_win;
            }
            _0x109673.m_winLabel.string = _0x5544dd.FormatNumberThousands(_0x5544dd.strip(_0x3fb2b5.ShowDisplayValue(_0x2585bb)), _0x5544dd.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }).delay(0.02)).call(function () {
            _0x109673.m_winLabel.string = _0x5544dd.FormatNumberThousands(_0x5544dd.strip(_0x3fb2b5.ShowDisplayValue(_0x109673.m_win)), _0x5544dd.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }).call(function () {
            if (!(null == _0x109673.m_changeCb)) {
              _0x109673.m_changeCb();
            }
            _0x109673.m_changeCb = null;
          }).start();
        };
        _0x15fd5b.OnRotation = function (_0x293d84) {
          this.m_isLandscape = _0x293d84;
          this.m_playName;
          _0x317b4b.NONE;
        };
        _0x4e0271(_0x224f88, [{
          'key': "IsEnd",
          'get': function () {
            return this.m_isEnd;
          }
        }]);
        return _0x224f88;
      }(_0x2e72bb);
      _0xe912b0 = _0x49a46a(_0x16a0e7.prototype, "m_congratSprite", [_0x52f796], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x15c5fa = _0x49a46a(_0x16a0e7.prototype, "m_winSprite", [_0x3d2832], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xeaea07 = _0x49a46a(_0x16a0e7.prototype, "m_winLabel", [_0x4f1c29], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1df578 = _0x49a46a(_0x16a0e7.prototype, "m_inSprite", [_0xf7b9f5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3750d1 = _0x49a46a(_0x16a0e7.prototype, "m_roundLabel", [_0x38c052], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3ad84f = _0x49a46a(_0x16a0e7.prototype, "m_fgSprite", [_0x25e200], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1517e9 = _0x49a46a(_0x16a0e7.prototype, "m_fgComplimentSkeleton", [_0x41de0b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x4bcda9;
      _0x2c4ee5._RF.pop();
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x4fe237, _0x43ac49, _0x28bcc1, _0x30228e, _0x1c2bc1) {
        _0x28bcc1.exports = _0x4cf7b6;
        var _0x5cbf07 = null;
        try {
          _0x5cbf07 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x4a07fe) {}
        function _0x4cf7b6(_0x356b98, _0x1f47b3, _0x8f1d4f) {
          this.low = 0x0 | _0x356b98;
          this.high = 0x0 | _0x1f47b3;
          this.unsigned = !!_0x8f1d4f;
        }
        function _0x3948ec(_0x364ae2) {
          return true === (_0x364ae2 && _0x364ae2.__isLong__);
        }
        _0x4cf7b6.prototype.__isLong__;
        Object.defineProperty(_0x4cf7b6.prototype, "__isLong__", {
          'value': true
        });
        _0x4cf7b6.isLong = _0x3948ec;
        var _0x3728f4 = {};
        var _0x12aafb = {};
        function _0x93a20b(_0xc02c67, _0x1480c0) {
          var _0x30d82d;
          var _0x209751;
          var _0x4b1b14;
          return _0x1480c0 ? (_0x4b1b14 = 0x0 <= (_0xc02c67 >>>= 0x0) && _0xc02c67 < 0x100) && (_0x209751 = _0x12aafb[_0xc02c67]) ? _0x209751 : (_0x30d82d = new _0x4cf7b6(_0xc02c67, (0x0 | _0xc02c67) < 0x0 ? -0x1 : 0x0, true), _0x4b1b14 && (_0x12aafb[_0xc02c67] = _0x30d82d), _0x30d82d) : (_0x4b1b14 = -0x80 <= (_0xc02c67 |= 0x0) && _0xc02c67 < 0x80) && (_0x209751 = _0x3728f4[_0xc02c67]) ? _0x209751 : (_0x30d82d = new _0x4cf7b6(_0xc02c67, _0xc02c67 < 0x0 ? -0x1 : 0x0, false), _0x4b1b14 && (_0x3728f4[_0xc02c67] = _0x30d82d), _0x30d82d);
        }
        function _0x52f4d5(_0x551695, _0x590c68) {
          if (isNaN(_0x551695)) {
            return _0x590c68 ? _0x34a24c : _0x533d6b;
          }
          if (_0x590c68) {
            if (_0x551695 < 0x0) {
              return _0x34a24c;
            }
            if (_0x551695 >= 18446744073709552000) {
              return _0x3b45c6;
            }
          } else {
            if (_0x551695 <= -9223372036854776000) {
              return _0x43469f;
            }
            if (_0x551695 + 0x1 >= 9223372036854776000) {
              return _0x43f664;
            }
          }
          return _0x551695 < 0x0 ? _0x52f4d5(-_0x551695, _0x590c68).neg() : new _0x4cf7b6(_0x551695 % 0x100000000 | 0x0, _0x551695 / 0x100000000 | 0x0, _0x590c68);
        }
        function _0x1f768f(_0x3d2c18, _0xd0a3df, _0x516e33) {
          return new _0x4cf7b6(_0x3d2c18, _0xd0a3df, _0x516e33);
        }
        _0x4cf7b6.fromInt = _0x93a20b;
        _0x4cf7b6.fromNumber = _0x52f4d5;
        _0x4cf7b6.fromBits = _0x1f768f;
        var _0x328fa1 = Math.pow;
        function _0x5b51d6(_0x3b1043, _0x529757, _0x1cc066) {
          if (0x0 === _0x3b1043.length) {
            throw Error("empty string");
          }
          if ('NaN' === _0x3b1043 || "Infinity" === _0x3b1043 || '+Infinity' === _0x3b1043 || "-Infinity" === _0x3b1043) {
            return _0x533d6b;
          }
          if ("number" == typeof _0x529757) {
            _0x1cc066 = _0x529757;
            _0x529757 = false;
          } else {
            _0x529757 = !!_0x529757;
          }
          if ((_0x1cc066 = _0x1cc066 || 0xa) < 0x2 || 0x24 < _0x1cc066) {
            throw RangeError('radix');
          }
          var _0x5b0a2f;
          if ((_0x5b0a2f = _0x3b1043.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x5b0a2f) {
            return _0x5b51d6(_0x3b1043.substring(0x1), _0x529757, _0x1cc066).neg();
          }
          var _0x11d515 = _0x52f4d5(_0x328fa1(_0x1cc066, 0x8));
          var _0x325cff = _0x533d6b;
          for (var _0x4bb28b = 0x0; _0x4bb28b < _0x3b1043.length; _0x4bb28b += 0x8) {
            var _0x52c370 = Math.min(0x8, _0x3b1043.length - _0x4bb28b);
            var _0x17c1bf = parseInt(_0x3b1043.substring(_0x4bb28b, _0x4bb28b + _0x52c370), _0x1cc066);
            if (_0x52c370 < 0x8) {
              var _0x2b5d1e = _0x52f4d5(_0x328fa1(_0x1cc066, _0x52c370));
              _0x325cff = _0x325cff.mul(_0x2b5d1e).add(_0x52f4d5(_0x17c1bf));
            } else {
              _0x325cff = (_0x325cff = _0x325cff.mul(_0x11d515)).add(_0x52f4d5(_0x17c1bf));
            }
          }
          _0x325cff.unsigned = _0x529757;
          return _0x325cff;
        }
        function _0x3d55bc(_0x256c02, _0x299bc3) {
          return "number" == typeof _0x256c02 ? _0x52f4d5(_0x256c02, _0x299bc3) : 'string' == typeof _0x256c02 ? _0x5b51d6(_0x256c02, _0x299bc3) : new _0x4cf7b6(_0x256c02.low, _0x256c02.high, "boolean" == typeof _0x299bc3 ? _0x299bc3 : _0x256c02.unsigned);
        }
        _0x4cf7b6.fromString = _0x5b51d6;
        _0x4cf7b6.fromValue = _0x3d55bc;
        var _0x459069 = _0x93a20b(16777216);
        var _0x533d6b = _0x93a20b(0x0);
        _0x4cf7b6.ZERO = _0x533d6b;
        var _0x34a24c = _0x93a20b(0x0, true);
        _0x4cf7b6.UZERO = _0x34a24c;
        var _0x5d5e99 = _0x93a20b(0x1);
        _0x4cf7b6.ONE = _0x5d5e99;
        var _0x3cfeac = _0x93a20b(0x1, true);
        _0x4cf7b6.UONE = _0x3cfeac;
        var _0xb58984 = _0x93a20b(-0x1);
        _0x4cf7b6.NEG_ONE = _0xb58984;
        var _0x43f664 = new _0x4cf7b6(-0x1, 0x7fffffff, false);
        _0x4cf7b6.MAX_VALUE = _0x43f664;
        var _0x3b45c6 = new _0x4cf7b6(-0x1, -0x1, true);
        _0x4cf7b6.MAX_UNSIGNED_VALUE = _0x3b45c6;
        var _0x43469f = new _0x4cf7b6(0x0, -0x80000000, false);
        _0x4cf7b6.MIN_VALUE = _0x43469f;
        var _0x3a16da = _0x4cf7b6.prototype;
        _0x3a16da.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x3a16da.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x3a16da.toString = function (_0x302d6b) {
          if ((_0x302d6b = _0x302d6b || 0xa) < 0x2 || 0x24 < _0x302d6b) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x43469f)) {
              var _0x2c130f = _0x52f4d5(_0x302d6b);
              var _0x3797c7 = this.div(_0x2c130f);
              var _0x5a0bc2 = _0x3797c7.mul(_0x2c130f).sub(this);
              return _0x3797c7.toString(_0x302d6b) + _0x5a0bc2.toInt().toString(_0x302d6b);
            }
            return '-' + this.neg().toString(_0x302d6b);
          }
          var _0xab262b = _0x52f4d5(_0x328fa1(_0x302d6b, 0x6), this.unsigned);
          var _0x14823d = this;
          for (var _0x23b8ea = '';;) {
            var _0x56f75d = _0x14823d.div(_0xab262b);
            var _0x7664c7 = (_0x14823d.sub(_0x56f75d.mul(_0xab262b)).toInt() >>> 0x0).toString(_0x302d6b);
            if ((_0x14823d = _0x56f75d).isZero()) {
              return _0x7664c7 + _0x23b8ea;
            }
            for (; _0x7664c7.length < 0x6;) {
              _0x7664c7 = '0' + _0x7664c7;
            }
            _0x23b8ea = '' + _0x7664c7 + _0x23b8ea;
          }
        };
        _0x3a16da.getHighBits = function () {
          return this.high;
        };
        _0x3a16da.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x3a16da.getLowBits = function () {
          return this.low;
        };
        _0x3a16da.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x3a16da.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x43469f) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x7d0d14 = 0x0 != this.high ? this.high : this.low;
          for (var _0x2a864a = 0x1f; _0x2a864a > 0x0 && 0x0 == (_0x7d0d14 & 0x1 << _0x2a864a); _0x2a864a--) {
            ;
          }
          return 0x0 != this.high ? _0x2a864a + 0x21 : _0x2a864a + 0x1;
        };
        _0x3a16da.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x3a16da.eqz = _0x3a16da.isZero;
        _0x3a16da.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x3a16da.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x3a16da.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x3a16da.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x3a16da.equals = function (_0x168837) {
          if (!(true === (_0x168837 && _0x168837.__isLong__))) {
            _0x168837 = "number" == typeof _0x168837 ? _0x52f4d5(_0x168837, undefined) : 'string' == typeof _0x168837 ? _0x5b51d6(_0x168837, undefined) : new _0x4cf7b6(_0x168837.low, _0x168837.high, _0x168837.unsigned);
          }
          return (this.unsigned === _0x168837.unsigned || this.high >>> 0x1f != 0x1 || _0x168837.high >>> 0x1f != 0x1) && this.high === _0x168837.high && this.low === _0x168837.low;
        };
        _0x3a16da.eq = _0x3a16da.equals;
        _0x3a16da.notEquals = function (_0x36a6b7) {
          return !this.eq(_0x36a6b7);
        };
        _0x3a16da.neq = _0x3a16da.notEquals;
        _0x3a16da.ne = _0x3a16da.notEquals;
        _0x3a16da.lessThan = function (_0x10585f) {
          return this.comp(_0x10585f) < 0x0;
        };
        _0x3a16da.lt = _0x3a16da.lessThan;
        _0x3a16da.lessThanOrEqual = function (_0x59c629) {
          return this.comp(_0x59c629) <= 0x0;
        };
        _0x3a16da.lte = _0x3a16da.lessThanOrEqual;
        _0x3a16da.le = _0x3a16da.lessThanOrEqual;
        _0x3a16da.greaterThan = function (_0x481633) {
          return this.comp(_0x481633) > 0x0;
        };
        _0x3a16da.gt = _0x3a16da.greaterThan;
        _0x3a16da.greaterThanOrEqual = function (_0x68d6bf) {
          return this.comp(_0x68d6bf) >= 0x0;
        };
        _0x3a16da.gte = _0x3a16da.greaterThanOrEqual;
        _0x3a16da.ge = _0x3a16da.greaterThanOrEqual;
        _0x3a16da.compare = function (_0x5cb4c8) {
          if (!(true === (_0x5cb4c8 && _0x5cb4c8.__isLong__))) {
            _0x5cb4c8 = "number" == typeof _0x5cb4c8 ? _0x52f4d5(_0x5cb4c8, undefined) : 'string' == typeof _0x5cb4c8 ? _0x5b51d6(_0x5cb4c8, undefined) : new _0x4cf7b6(_0x5cb4c8.low, _0x5cb4c8.high, _0x5cb4c8.unsigned);
          }
          if (this.eq(_0x5cb4c8)) {
            return 0x0;
          }
          var _0x3088b0 = this.isNegative();
          var _0x1b68d7 = _0x5cb4c8.isNegative();
          return _0x3088b0 && !_0x1b68d7 ? -0x1 : !_0x3088b0 && _0x1b68d7 ? 0x1 : this.unsigned ? _0x5cb4c8.high >>> 0x0 > this.high >>> 0x0 || _0x5cb4c8.high === this.high && _0x5cb4c8.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x5cb4c8).isNegative() ? -0x1 : 0x1;
        };
        _0x3a16da.comp = _0x3a16da.compare;
        _0x3a16da.negate = function () {
          return !this.unsigned && this.eq(_0x43469f) ? _0x43469f : this.not().add(_0x5d5e99);
        };
        _0x3a16da.neg = _0x3a16da.negate;
        _0x3a16da.add = function (_0x30e4db) {
          if (!(true === (_0x30e4db && _0x30e4db.__isLong__))) {
            _0x30e4db = "number" == typeof _0x30e4db ? _0x52f4d5(_0x30e4db, undefined) : 'string' == typeof _0x30e4db ? _0x5b51d6(_0x30e4db, undefined) : new _0x4cf7b6(_0x30e4db.low, _0x30e4db.high, _0x30e4db.unsigned);
          }
          var _0x46c79a = this.high >>> 0x10;
          var _0x11c320 = 0xffff & this.high;
          var _0x53abff = this.low >>> 0x10;
          var _0xbb99ad = 0xffff & this.low;
          var _0xfd1f86 = _0x30e4db.high >>> 0x10;
          var _0x808b15 = 0xffff & _0x30e4db.high;
          var _0x3375e3 = _0x30e4db.low >>> 0x10;
          var _0x16bd82 = 0x0;
          var _0x34c667 = 0x0;
          var _0x86bb6e = 0x0;
          var _0x515653 = 0x0;
          _0x86bb6e += (_0x515653 += _0xbb99ad + (0xffff & _0x30e4db.low)) >>> 0x10;
          _0x34c667 += (_0x86bb6e += _0x53abff + _0x3375e3) >>> 0x10;
          _0x16bd82 += (_0x34c667 += _0x11c320 + _0x808b15) >>> 0x10;
          _0x16bd82 += _0x46c79a + _0xfd1f86;
          return new _0x4cf7b6((_0x86bb6e &= 0xffff) << 0x10 | (_0x515653 &= 0xffff), (_0x16bd82 &= 0xffff) << 0x10 | (_0x34c667 &= 0xffff), this.unsigned);
        };
        _0x3a16da.subtract = function (_0x3fbbaf) {
          if (!(true === (_0x3fbbaf && _0x3fbbaf.__isLong__))) {
            _0x3fbbaf = "number" == typeof _0x3fbbaf ? _0x52f4d5(_0x3fbbaf, undefined) : 'string' == typeof _0x3fbbaf ? _0x5b51d6(_0x3fbbaf, undefined) : new _0x4cf7b6(_0x3fbbaf.low, _0x3fbbaf.high, _0x3fbbaf.unsigned);
          }
          return this.add(_0x3fbbaf.neg());
        };
        _0x3a16da.sub = _0x3a16da.subtract;
        _0x3a16da.multiply = function (_0x1ead1d) {
          if (this.isZero()) {
            return _0x533d6b;
          }
          if (!(true === (_0x1ead1d && _0x1ead1d.__isLong__))) {
            _0x1ead1d = "number" == typeof _0x1ead1d ? _0x52f4d5(_0x1ead1d, undefined) : 'string' == typeof _0x1ead1d ? _0x5b51d6(_0x1ead1d, undefined) : new _0x4cf7b6(_0x1ead1d.low, _0x1ead1d.high, _0x1ead1d.unsigned);
          }
          if (_0x5cbf07) {
            return new _0x4cf7b6(_0x5cbf07.mul(this.low, this.high, _0x1ead1d.low, _0x1ead1d.high), _0x5cbf07.get_high(), this.unsigned);
          }
          if (_0x1ead1d.isZero()) {
            return _0x533d6b;
          }
          if (this.eq(_0x43469f)) {
            return _0x1ead1d.isOdd() ? _0x43469f : _0x533d6b;
          }
          if (_0x1ead1d.eq(_0x43469f)) {
            return this.isOdd() ? _0x43469f : _0x533d6b;
          }
          if (this.isNegative()) {
            return _0x1ead1d.isNegative() ? this.neg().mul(_0x1ead1d.neg()) : this.neg().mul(_0x1ead1d).neg();
          }
          if (_0x1ead1d.isNegative()) {
            return this.mul(_0x1ead1d.neg()).neg();
          }
          if (this.lt(_0x459069) && _0x1ead1d.lt(_0x459069)) {
            return _0x52f4d5(this.toNumber() * _0x1ead1d.toNumber(), this.unsigned);
          }
          var _0x465a6e = this.high >>> 0x10;
          var _0x331e44 = 0xffff & this.high;
          var _0x16c4cf = this.low >>> 0x10;
          var _0x561d3a = 0xffff & this.low;
          var _0x16c50e = _0x1ead1d.high >>> 0x10;
          var _0xb61b2d = 0xffff & _0x1ead1d.high;
          var _0x3faaec = _0x1ead1d.low >>> 0x10;
          var _0x421d30 = 0xffff & _0x1ead1d.low;
          var _0x25876b = 0x0;
          var _0x49f578 = 0x0;
          var _0x37c444 = 0x0;
          var _0x19261a = 0x0;
          _0x37c444 += (_0x19261a += _0x561d3a * _0x421d30) >>> 0x10;
          _0x49f578 += (_0x37c444 += _0x16c4cf * _0x421d30) >>> 0x10;
          _0x37c444 &= 0xffff;
          _0x49f578 += (_0x37c444 += _0x561d3a * _0x3faaec) >>> 0x10;
          _0x25876b += (_0x49f578 += _0x331e44 * _0x421d30) >>> 0x10;
          _0x49f578 &= 0xffff;
          _0x25876b += (_0x49f578 += _0x16c4cf * _0x3faaec) >>> 0x10;
          _0x49f578 &= 0xffff;
          _0x25876b += (_0x49f578 += _0x561d3a * _0xb61b2d) >>> 0x10;
          _0x25876b += _0x465a6e * _0x421d30 + _0x331e44 * _0x3faaec + _0x16c4cf * _0xb61b2d + _0x561d3a * _0x16c50e;
          return new _0x4cf7b6((_0x37c444 &= 0xffff) << 0x10 | (_0x19261a &= 0xffff), (_0x25876b &= 0xffff) << 0x10 | (_0x49f578 &= 0xffff), this.unsigned);
        };
        _0x3a16da.mul = _0x3a16da.multiply;
        _0x3a16da.divide = function (_0x2abc57) {
          if (!(true === (_0x2abc57 && _0x2abc57.__isLong__))) {
            _0x2abc57 = "number" == typeof _0x2abc57 ? _0x52f4d5(_0x2abc57, undefined) : 'string' == typeof _0x2abc57 ? _0x5b51d6(_0x2abc57, undefined) : new _0x4cf7b6(_0x2abc57.low, _0x2abc57.high, _0x2abc57.unsigned);
          }
          if (_0x2abc57.isZero()) {
            throw Error("division by zero");
          }
          var _0x369027;
          var _0x84963f;
          var _0x16b8c6;
          if (_0x5cbf07) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x2abc57.low || -0x1 !== _0x2abc57.high ? new _0x4cf7b6((this.unsigned ? _0x5cbf07.div_u : _0x5cbf07.div_s)(this.low, this.high, _0x2abc57.low, _0x2abc57.high), _0x5cbf07.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x34a24c : _0x533d6b;
          }
          if (this.unsigned) {
            if (!_0x2abc57.unsigned) {
              _0x2abc57 = _0x2abc57.toUnsigned();
            }
            if (_0x2abc57.gt(this)) {
              return _0x34a24c;
            }
            if (_0x2abc57.gt(this.shru(0x1))) {
              return _0x3cfeac;
            }
            _0x16b8c6 = _0x34a24c;
          } else {
            if (this.eq(_0x43469f)) {
              return _0x2abc57.eq(_0x5d5e99) || _0x2abc57.eq(_0xb58984) ? _0x43469f : _0x2abc57.eq(_0x43469f) ? _0x5d5e99 : (_0x369027 = this.shr(0x1).div(_0x2abc57).shl(0x1)).eq(_0x533d6b) ? _0x2abc57.isNegative() ? _0x5d5e99 : _0xb58984 : (_0x84963f = this.sub(_0x2abc57.mul(_0x369027)), _0x16b8c6 = _0x369027.add(_0x84963f.div(_0x2abc57)));
            }
            if (_0x2abc57.eq(_0x43469f)) {
              return this.unsigned ? _0x34a24c : _0x533d6b;
            }
            if (this.isNegative()) {
              return _0x2abc57.isNegative() ? this.neg().div(_0x2abc57.neg()) : this.neg().div(_0x2abc57).neg();
            }
            if (_0x2abc57.isNegative()) {
              return this.div(_0x2abc57.neg()).neg();
            }
            _0x16b8c6 = _0x533d6b;
          }
          for (_0x84963f = this; _0x84963f.gte(_0x2abc57);) {
            _0x369027 = Math.max(0x1, Math.floor(_0x84963f.toNumber() / _0x2abc57.toNumber()));
            var _0x450747 = Math.ceil(Math.log(_0x369027) / Math.LN2);
            var _0x58ecd1 = _0x450747 <= 0x30 ? 0x1 : _0x328fa1(0x2, _0x450747 - 0x30);
            var _0x362aeb = _0x52f4d5(_0x369027);
            for (var _0x21f3bc = _0x362aeb.mul(_0x2abc57); _0x21f3bc.isNegative() || _0x21f3bc.gt(_0x84963f);) {
              _0x21f3bc = (_0x362aeb = _0x52f4d5(_0x369027 -= _0x58ecd1, this.unsigned)).mul(_0x2abc57);
            }
            if (_0x362aeb.isZero()) {
              _0x362aeb = _0x5d5e99;
            }
            _0x16b8c6 = _0x16b8c6.add(_0x362aeb);
            _0x84963f = _0x84963f.sub(_0x21f3bc);
          }
          return _0x16b8c6;
        };
        _0x3a16da.div = _0x3a16da.divide;
        _0x3a16da.modulo = function (_0x488116) {
          if (!(true === (_0x488116 && _0x488116.__isLong__))) {
            _0x488116 = "number" == typeof _0x488116 ? _0x52f4d5(_0x488116, undefined) : 'string' == typeof _0x488116 ? _0x5b51d6(_0x488116, undefined) : new _0x4cf7b6(_0x488116.low, _0x488116.high, _0x488116.unsigned);
          }
          return _0x5cbf07 ? new _0x4cf7b6((this.unsigned ? _0x5cbf07.rem_u : _0x5cbf07.rem_s)(this.low, this.high, _0x488116.low, _0x488116.high), _0x5cbf07.get_high(), this.unsigned) : this.sub(this.div(_0x488116).mul(_0x488116));
        };
        _0x3a16da.mod = _0x3a16da.modulo;
        _0x3a16da.rem = _0x3a16da.modulo;
        _0x3a16da.not = function () {
          return new _0x4cf7b6(~this.low, ~this.high, this.unsigned);
        };
        _0x3a16da.and = function (_0x328357) {
          if (!(true === (_0x328357 && _0x328357.__isLong__))) {
            _0x328357 = "number" == typeof _0x328357 ? _0x52f4d5(_0x328357, undefined) : 'string' == typeof _0x328357 ? _0x5b51d6(_0x328357, undefined) : new _0x4cf7b6(_0x328357.low, _0x328357.high, _0x328357.unsigned);
          }
          return new _0x4cf7b6(this.low & _0x328357.low, this.high & _0x328357.high, this.unsigned);
        };
        _0x3a16da.or = function (_0x227d5e) {
          if (!(true === (_0x227d5e && _0x227d5e.__isLong__))) {
            _0x227d5e = "number" == typeof _0x227d5e ? _0x52f4d5(_0x227d5e, undefined) : 'string' == typeof _0x227d5e ? _0x5b51d6(_0x227d5e, undefined) : new _0x4cf7b6(_0x227d5e.low, _0x227d5e.high, _0x227d5e.unsigned);
          }
          return new _0x4cf7b6(this.low | _0x227d5e.low, this.high | _0x227d5e.high, this.unsigned);
        };
        _0x3a16da.xor = function (_0x4b7c7d) {
          if (!(true === (_0x4b7c7d && _0x4b7c7d.__isLong__))) {
            _0x4b7c7d = "number" == typeof _0x4b7c7d ? _0x52f4d5(_0x4b7c7d, undefined) : 'string' == typeof _0x4b7c7d ? _0x5b51d6(_0x4b7c7d, undefined) : new _0x4cf7b6(_0x4b7c7d.low, _0x4b7c7d.high, _0x4b7c7d.unsigned);
          }
          return new _0x4cf7b6(this.low ^ _0x4b7c7d.low, this.high ^ _0x4b7c7d.high, this.unsigned);
        };
        _0x3a16da.shiftLeft = function (_0x4f398d) {
          if (true === (_0x4f398d && _0x4f398d.__isLong__)) {
            _0x4f398d = _0x4f398d.toInt();
          }
          return 0x0 == (_0x4f398d &= 0x3f) ? this : _0x4f398d < 0x20 ? new _0x4cf7b6(this.low << _0x4f398d, this.high << _0x4f398d | this.low >>> 0x20 - _0x4f398d, this.unsigned) : new _0x4cf7b6(0x0, this.low << _0x4f398d - 0x20, this.unsigned);
        };
        _0x3a16da.shl = _0x3a16da.shiftLeft;
        _0x3a16da.shiftRight = function (_0x19c82d) {
          if (true === (_0x19c82d && _0x19c82d.__isLong__)) {
            _0x19c82d = _0x19c82d.toInt();
          }
          return 0x0 == (_0x19c82d &= 0x3f) ? this : _0x19c82d < 0x20 ? new _0x4cf7b6(this.low >>> _0x19c82d | this.high << 0x20 - _0x19c82d, this.high >> _0x19c82d, this.unsigned) : new _0x4cf7b6(this.high >> _0x19c82d - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x3a16da.shr = _0x3a16da.shiftRight;
        _0x3a16da.shiftRightUnsigned = function (_0x3900cd) {
          if (true === (_0x3900cd && _0x3900cd.__isLong__)) {
            _0x3900cd = _0x3900cd.toInt();
          }
          if (0x0 === (_0x3900cd &= 0x3f)) {
            return this;
          }
          var _0x35a3ad = this.high;
          return _0x3900cd < 0x20 ? new _0x4cf7b6(this.low >>> _0x3900cd | _0x35a3ad << 0x20 - _0x3900cd, _0x35a3ad >>> _0x3900cd, this.unsigned) : new _0x4cf7b6(0x20 === _0x3900cd ? _0x35a3ad : _0x35a3ad >>> _0x3900cd - 0x20, 0x0, this.unsigned);
        };
        _0x3a16da.shru = _0x3a16da.shiftRightUnsigned;
        _0x3a16da.shr_u = _0x3a16da.shiftRightUnsigned;
        _0x3a16da.toSigned = function () {
          return this.unsigned ? new _0x4cf7b6(this.low, this.high, false) : this;
        };
        _0x3a16da.toUnsigned = function () {
          return this.unsigned ? this : new _0x4cf7b6(this.low, this.high, true);
        };
        _0x3a16da.toBytes = function (_0x54480e) {
          return _0x54480e ? this.toBytesLE() : this.toBytesBE();
        };
        _0x3a16da.toBytesLE = function () {
          var _0x31d722 = this.high;
          var _0x546aab = this.low;
          return [0xff & _0x546aab, _0x546aab >>> 0x8 & 0xff, _0x546aab >>> 0x10 & 0xff, _0x546aab >>> 0x18, 0xff & _0x31d722, _0x31d722 >>> 0x8 & 0xff, _0x31d722 >>> 0x10 & 0xff, _0x31d722 >>> 0x18];
        };
        _0x3a16da.toBytesBE = function () {
          var _0x4b55d2 = this.high;
          var _0x3b2821 = this.low;
          return [_0x4b55d2 >>> 0x18, _0x4b55d2 >>> 0x10 & 0xff, _0x4b55d2 >>> 0x8 & 0xff, 0xff & _0x4b55d2, _0x3b2821 >>> 0x18, _0x3b2821 >>> 0x10 & 0xff, _0x3b2821 >>> 0x8 & 0xff, 0xff & _0x3b2821];
        };
        _0x4cf7b6.fromBytes = function (_0xb40965, _0x336075, _0x2c801d) {
          return _0x2c801d ? _0x4cf7b6.fromBytesLE(_0xb40965, _0x336075) : _0x4cf7b6.fromBytesBE(_0xb40965, _0x336075);
        };
        _0x4cf7b6.fromBytesLE = function (_0x29acc2, _0x4ca0a9) {
          return new _0x4cf7b6(_0x29acc2[0x0] | _0x29acc2[0x1] << 0x8 | _0x29acc2[0x2] << 0x10 | _0x29acc2[0x3] << 0x18, _0x29acc2[0x4] | _0x29acc2[0x5] << 0x8 | _0x29acc2[0x6] << 0x10 | _0x29acc2[0x7] << 0x18, _0x4ca0a9);
        };
        _0x4cf7b6.fromBytesBE = function (_0x21e6c2, _0x4b33b3) {
          return new _0x4cf7b6(_0x21e6c2[0x4] << 0x18 | _0x21e6c2[0x5] << 0x10 | _0x21e6c2[0x6] << 0x8 | _0x21e6c2[0x7], _0x21e6c2[0x0] << 0x18 | _0x21e6c2[0x1] << 0x10 | _0x21e6c2[0x2] << 0x8 | _0x21e6c2[0x3], _0x4b33b3);
        };
        _0x4bcda9 = _0x28bcc1.exports;
      }, {});
      _0x1c1e99.require("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0xe68620, _0xb1f38b, _0x5c4289, _0x187ef0, _0x2f44c6) {
        function _0x1f6f08(_0x2f66f2, _0x460df5) {
          if ("string" == typeof _0x2f66f2) {
            _0x460df5 = _0x2f66f2;
            _0x2f66f2 = undefined;
          }
          var _0x26a72f = [];
          function _0x5f32f7(_0x48697a) {
            if ("string" != typeof _0x48697a) {
              var _0x39be96 = "function " + (undefined || _0x460df5 || '') + '(' + (_0x2f66f2 && _0x2f66f2.join(',') || '') + "){\n  " + _0x26a72f.join("\n  ") + "\n}";
              if (_0x1f6f08.verbose) {
                console.log("codegen: " + _0x39be96);
              }
              _0x39be96 = "return " + _0x39be96;
              if (_0x48697a) {
                var _0x4ecc00 = Object.keys(_0x48697a);
                var _0x454a90 = new Array(_0x4ecc00.length + 0x1);
                var _0x384a91 = new Array(_0x4ecc00.length);
                for (var _0x4876d3 = 0x0; _0x4876d3 < _0x4ecc00.length;) {
                  _0x454a90[_0x4876d3] = _0x4ecc00[_0x4876d3];
                  _0x384a91[_0x4876d3] = _0x48697a[_0x4ecc00[_0x4876d3++]];
                }
                _0x454a90[_0x4876d3] = _0x39be96;
                return Function.apply(null, _0x454a90).apply(null, _0x384a91);
              }
              return Function(_0x39be96)();
            }
            var _0x254fdd = new Array(arguments.length - 0x1);
            for (var _0x232b03 = 0x0; _0x232b03 < _0x254fdd.length;) {
              _0x254fdd[_0x232b03] = arguments[++_0x232b03];
            }
            _0x232b03 = 0x0;
            _0x48697a = _0x48697a.replace(/%([%dfijs])/g, function (_0x22904b, _0x46addf) {
              var _0x4a0a3b = _0x254fdd[_0x232b03++];
              switch (_0x46addf) {
                case 'd':
                case 'f':
                  return String(Number(_0x4a0a3b));
                case 'i':
                  return String(Math.floor(_0x4a0a3b));
                case 'j':
                  return JSON.stringify(_0x4a0a3b);
                case 's':
                  return String(_0x4a0a3b);
              }
              return '%';
            });
            if (_0x232b03 !== _0x254fdd.length) {
              throw Error("parameter count mismatch");
            }
            _0x26a72f.push(_0x48697a);
            return _0x5f32f7;
          }
          function _0x417d72(_0x2957bd) {
            return "function " + (_0x2957bd || _0x460df5 || '') + '(' + (_0x2f66f2 && _0x2f66f2.join(',') || '') + "){\n  " + _0x26a72f.join("\n  ") + "\n}";
          }
          _0x5f32f7.toString = _0x417d72;
          return _0x5f32f7;
        }
        _0x5c4289.exports = _0x1f6f08;
        _0x1f6f08.verbose = false;
        _0x5c4289.exports;
      }, {});
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (_0x4a1705, _0x4d7ae5, _0x46a175, _0x3aade5, _0x44b1d2) {
        _0x46a175.exports = _0x18c39e;
        var _0x28ead7 = _0x4d7ae5("@protobufjs/aspromise");
        var _0x344f3b = _0x4d7ae5("@protobufjs/inquire")('fs');
        function _0x18c39e(_0x45f081, _0x475ad7, _0x11f4b0) {
          if ('function' == typeof _0x475ad7) {
            _0x11f4b0 = _0x475ad7;
            _0x475ad7 = {};
          } else if (!_0x475ad7) {
            _0x475ad7 = {};
          }
          return _0x11f4b0 ? !_0x475ad7.xhr && _0x344f3b && _0x344f3b.readFile ? _0x344f3b.readFile(_0x45f081, function (_0x21152f, _0x427cf0) {
            return _0x21152f && "undefined" != typeof XMLHttpRequest ? _0x18c39e.xhr(_0x45f081, _0x475ad7, _0x11f4b0) : _0x21152f ? _0x11f4b0(_0x21152f) : _0x11f4b0(null, _0x475ad7.binary ? _0x427cf0 : _0x427cf0.toString("utf8"));
          }) : _0x18c39e.xhr(_0x45f081, _0x475ad7, _0x11f4b0) : _0x28ead7(_0x18c39e, this, _0x45f081, _0x475ad7);
        }
        _0x18c39e.xhr = function (_0xbdd805, _0x123b48, _0x25d575) {
          var _0x3eb239 = new XMLHttpRequest();
          _0x3eb239.onreadystatechange = function () {
            if (0x4 === _0x3eb239.readyState) {
              if (0x0 !== _0x3eb239.status && 0xc8 !== _0x3eb239.status) {
                return _0x25d575(Error("status " + _0x3eb239.status));
              }
              if (_0x123b48.binary) {
                var _0x50043d = _0x3eb239.response;
                if (!_0x50043d) {
                  _0x50043d = [];
                  for (var _0x508d4c = 0x0; _0x508d4c < _0x3eb239.responseText.length; ++_0x508d4c) {
                    _0x50043d.push(0xff & _0x3eb239.responseText.charCodeAt(_0x508d4c));
                  }
                }
                return _0x25d575(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x50043d) : _0x50043d);
              }
              return _0x25d575(null, _0x3eb239.responseText);
            }
          };
          if (_0x123b48.binary) {
            if ('overrideMimeType' in _0x3eb239) {
              _0x3eb239.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x3eb239.responseType = 'arraybuffer';
          }
          _0x3eb239.open("GET", _0xbdd805);
          _0x3eb239.send();
        };
        _0x46a175.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      _0x1c1e99.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/path/index.js', function (_0x29be79, _0x29ff4b, _0x1fa9c9, _0x458e63, _0x5c4fd9) {
        var _0x9d0e52 = _0x29be79.isAbsolute = function (_0x2d3440) {
          return /^(?:\/|\w+:)/.test(_0x2d3440);
        };
        var _0x37d86f = _0x29be79.normalize = function (_0xaf1fc) {
          var _0x2331a9 = (_0xaf1fc = _0xaf1fc.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x38456d = _0x9d0e52(_0xaf1fc);
          var _0x370a46 = '';
          if (_0x38456d) {
            _0x370a46 = _0x2331a9.shift() + '/';
          }
          for (var _0x1704da = 0x0; _0x1704da < _0x2331a9.length;) {
            if ('..' === _0x2331a9[_0x1704da]) {
              if (_0x1704da > 0x0 && '..' !== _0x2331a9[_0x1704da - 0x1]) {
                _0x2331a9.splice(--_0x1704da, 0x2);
              } else if (_0x38456d) {
                _0x2331a9.splice(_0x1704da, 0x1);
              } else {
                ++_0x1704da;
              }
            } else if ('.' === _0x2331a9[_0x1704da]) {
              _0x2331a9.splice(_0x1704da, 0x1);
            } else {
              ++_0x1704da;
            }
          }
          return _0x370a46 + _0x2331a9.join('/');
        };
        _0x29be79.resolve = function (_0x594594, _0x1394ca, _0x576e6b) {
          if (!_0x576e6b) {
            _0x1394ca = _0x37d86f(_0x1394ca);
          }
          return _0x9d0e52(_0x1394ca) ? _0x1394ca : (_0x576e6b || (_0x594594 = _0x37d86f(_0x594594)), (_0x594594 = _0x594594.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x37d86f(_0x594594 + '/' + _0x1394ca) : _0x1394ca);
        };
        _0x1fa9c9.exports;
      }, {});
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0x52911b, _0x55b09f, _0x49981a, _0x3b8ca5, _0x462876) {
        var _0x5e397c = _0x55b09f("./util");
        var _0x5f587f = ["double", "float", "int32", "uint32", 'sint32', 'fixed32', "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", 'bool', "string", "bytes"];
        function _0x4a683a(_0x4d662e, _0x3be098) {
          var _0x1e93d3 = 0x0;
          var _0x2df375 = {};
          for (_0x3be098 |= 0x0; _0x1e93d3 < _0x4d662e.length;) {
            _0x2df375[_0x5f587f[_0x1e93d3 + _0x3be098]] = _0x4d662e[_0x1e93d3++];
          }
          return _0x2df375;
        }
        _0x52911b.basic = _0x4a683a([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x52911b.defaults = _0x4a683a([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x5e397c.emptyArray, null]);
        _0x52911b.long = _0x4a683a([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x52911b.mapKey = _0x4a683a([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x52911b.packed = _0x4a683a([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x49981a.exports;
      }, function () {
        return {
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/field.js', function (_0x5203d0, _0x36cbc0, _0x2d1127, _0x5a41f9, _0x2601ed) {
        _0x2d1127.exports = _0x4130a2;
        var _0x59d73c = _0x36cbc0("./object");
        ((_0x4130a2.prototype = Object.create(_0x59d73c.prototype)).constructor = _0x4130a2).className = 'Field';
        var _0xcebe69;
        var _0x11d9aa = _0x36cbc0("./enum");
        var _0x569013 = _0x36cbc0('./types');
        var _0x41c59b = _0x36cbc0('./util');
        var _0x2c8944 = /^required|optional|repeated$/;
        function _0x4130a2(_0xe2bea7, _0x1f837c, _0x348f26, _0x50ac15, _0x2b3c4e, _0x11beb2, _0x356071) {
          if (_0x41c59b.isObject(_0x50ac15)) {
            _0x356071 = _0x2b3c4e;
            _0x11beb2 = _0x50ac15;
            _0x50ac15 = _0x2b3c4e = undefined;
          } else if (_0x41c59b.isObject(_0x2b3c4e)) {
            _0x356071 = _0x11beb2;
            _0x11beb2 = _0x2b3c4e;
            _0x2b3c4e = undefined;
          }
          _0x59d73c.call(this, _0xe2bea7, _0x11beb2);
          if (!_0x41c59b.isInteger(_0x1f837c) || _0x1f837c < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x41c59b.isString(_0x348f26)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x50ac15 && !_0x2c8944.test(_0x50ac15 = _0x50ac15.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x2b3c4e && !_0x41c59b.isString(_0x2b3c4e)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === _0x50ac15) {
            _0x50ac15 = "optional";
          }
          this.rule = _0x50ac15 && "optional" !== _0x50ac15 ? _0x50ac15 : undefined;
          this.type = _0x348f26;
          this.id = _0x1f837c;
          this.extend = _0x2b3c4e || undefined;
          this.required = "required" === _0x50ac15;
          this.optional = !this.required;
          this.repeated = "repeated" === _0x50ac15;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x41c59b.Long && undefined !== _0x569013.long[_0x348f26];
          this.bytes = 'bytes' === _0x348f26;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x356071;
        }
        _0x4130a2.fromJSON = function (_0x413d82, _0xfdf7f9) {
          return new _0x4130a2(_0x413d82, _0xfdf7f9.id, _0xfdf7f9.type, _0xfdf7f9.rule, _0xfdf7f9.extend, _0xfdf7f9.options, _0xfdf7f9.comment);
        };
        Object.defineProperty(_0x4130a2.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        _0x4130a2.prototype.setOption = function (_0x5b60f1, _0x1a5ee4, _0x4d8e90) {
          if ('packed' === _0x5b60f1) {
            this._packed = null;
          }
          return _0x59d73c.prototype.setOption.call(this, _0x5b60f1, _0x1a5ee4, _0x4d8e90);
        };
        _0x4130a2.prototype.toJSON = function (_0x33f74f) {
          var _0x5d7c17 = !!_0x33f74f && Boolean(_0x33f74f.keepComments);
          return _0x41c59b.toObject(['rule', "optional" !== this.rule && this.rule || undefined, 'type', this.type, 'id', this.id, 'extend', this.extend, "options", this.options, "comment", _0x5d7c17 ? this.comment : undefined]);
        };
        _0x4130a2.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x569013.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0xcebe69) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options["default"]) {
            this.typeDefault = this.options["default"];
            if (this.resolvedType instanceof _0x11d9aa && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x11d9aa))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x41c59b.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && "string" == typeof this.typeDefault) {
              var _0x3298e4;
              if (_0x41c59b.base64.test(this.typeDefault)) {
                _0x41c59b.base64.decode(this.typeDefault, _0x3298e4 = _0x41c59b.newBuffer(_0x41c59b.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x41c59b.utf8.write(this.typeDefault, _0x3298e4 = _0x41c59b.newBuffer(_0x41c59b.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x3298e4;
            }
          }
          if (this.map) {
            this.defaultValue = _0x41c59b.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x41c59b.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0xcebe69) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x59d73c.prototype.resolve.call(this);
        };
        _0x4130a2.d = function (_0x2236a9, _0xa5f7a1, _0x21a5b8, _0x5f2a48) {
          if ("function" == typeof _0xa5f7a1) {
            _0xa5f7a1 = _0x41c59b.decorateType(_0xa5f7a1).name;
          } else if (_0xa5f7a1 && "object" == typeof _0xa5f7a1) {
            _0xa5f7a1 = _0x41c59b.decorateEnum(_0xa5f7a1).name;
          }
          return function (_0x140d01, _0x389337) {
            _0x41c59b.decorateType(_0x140d01.constructor).add(new _0x4130a2(_0x389337, _0x2236a9, _0xa5f7a1, _0x21a5b8, {
              'default': _0x5f2a48
            }));
          };
        };
        _0x4130a2._configure = function (_0x5a0644) {
          _0xcebe69 = _0x5a0644;
        };
        _0x2d1127.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js', function (_0x7bf496, _0x1bec62, _0x37f5f8, _0x34689e, _0x120754) {
        _0x37f5f8.exports = _0x179d88;
        var _0x239d3b = _0x1bec62("./object");
        ((_0x179d88.prototype = Object.create(_0x239d3b.prototype)).constructor = _0x179d88).className = "OneOf";
        var _0x583111 = _0x1bec62('./field');
        var _0x52d289 = _0x1bec62("./util");
        function _0x179d88(_0x507c18, _0x48172b, _0x2a61c6, _0x47b17a) {
          if (!Array.isArray(_0x48172b)) {
            _0x2a61c6 = _0x48172b;
            _0x48172b = undefined;
          }
          _0x239d3b.call(this, _0x507c18, _0x2a61c6);
          if (undefined !== _0x48172b && !Array.isArray(_0x48172b)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x48172b || [];
          this.fieldsArray = [];
          this.comment = _0x47b17a;
        }
        function _0x22d09d(_0x20ca68) {
          if (_0x20ca68.parent) {
            for (var _0x4d1bc1 = 0x0; _0x4d1bc1 < _0x20ca68.fieldsArray.length; ++_0x4d1bc1) {
              if (!_0x20ca68.fieldsArray[_0x4d1bc1].parent) {
                _0x20ca68.parent.add(_0x20ca68.fieldsArray[_0x4d1bc1]);
              }
            }
          }
        }
        _0x179d88.fromJSON = function (_0x4102ef, _0x2a677e) {
          return new _0x179d88(_0x4102ef, _0x2a677e.oneof, _0x2a677e.options, _0x2a677e.comment);
        };
        _0x179d88.prototype.toJSON = function (_0x283851) {
          var _0x4051b9 = !!_0x283851 && Boolean(_0x283851.keepComments);
          return _0x52d289.toObject(["options", this.options, "oneof", this.oneof, 'comment', _0x4051b9 ? this.comment : undefined]);
        };
        _0x179d88.prototype.add = function (_0x27aaf1) {
          if (!(_0x27aaf1 instanceof _0x583111)) {
            throw TypeError("field must be a Field");
          }
          if (_0x27aaf1.parent && _0x27aaf1.parent !== this.parent) {
            _0x27aaf1.parent.remove(_0x27aaf1);
          }
          this.oneof.push(_0x27aaf1.name);
          this.fieldsArray.push(_0x27aaf1);
          _0x27aaf1.partOf = this;
          _0x22d09d(this);
          return this;
        };
        _0x179d88.prototype.remove = function (_0x492932) {
          if (!(_0x492932 instanceof _0x583111)) {
            throw TypeError("field must be a Field");
          }
          var _0x3c8041 = this.fieldsArray.indexOf(_0x492932);
          if (_0x3c8041 < 0x0) {
            throw Error(_0x492932 + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x3c8041, 0x1);
          if ((_0x3c8041 = this.oneof.indexOf(_0x492932.name)) > -0x1) {
            this.oneof.splice(_0x3c8041, 0x1);
          }
          _0x492932.partOf = null;
          return this;
        };
        _0x179d88.prototype.onAdd = function (_0x29b8a0) {
          _0x239d3b.prototype.onAdd.call(this, _0x29b8a0);
          for (var _0xa8b1c7 = 0x0; _0xa8b1c7 < this.oneof.length; ++_0xa8b1c7) {
            var _0x3cb653 = _0x29b8a0.get(this.oneof[_0xa8b1c7]);
            if (_0x3cb653 && !_0x3cb653.partOf) {
              _0x3cb653.partOf = this;
              this.fieldsArray.push(_0x3cb653);
            }
          }
          _0x22d09d(this);
        };
        _0x179d88.prototype.onRemove = function (_0x443367) {
          var _0xec836a;
          for (var _0x527ba4 = 0x0; _0x527ba4 < this.fieldsArray.length; ++_0x527ba4) {
            if ((_0xec836a = this.fieldsArray[_0x527ba4]).parent) {
              _0xec836a.parent.remove(_0xec836a);
            }
          }
          _0x239d3b.prototype.onRemove.call(this, _0x443367);
        };
        _0x179d88.d = function () {
          var _0xc799f6 = new Array(arguments.length);
          for (var _0x558849 = 0x0; _0x558849 < arguments.length;) {
            _0xc799f6[_0x558849] = arguments[_0x558849++];
          }
          return function (_0x2bc4e6, _0x341121) {
            _0x52d289.decorateType(_0x2bc4e6.constructor).add(new _0x179d88(_0x341121, _0xc799f6));
            Object.defineProperty(_0x2bc4e6, _0x341121, {
              'get': _0x52d289.oneOfGetter(_0xc799f6),
              'set': _0x52d289.oneOfSetter(_0xc799f6)
            });
          };
        };
        _0x37f5f8.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0x44be37, _0x445371, _0x2ed68e, _0x19a662, _0xa5a0c5) {
        _0x2ed68e.exports = _0x1c74bb;
        var _0x3aff8d = _0x445371("./object");
        ((_0x1c74bb.prototype = Object.create(_0x3aff8d.prototype)).constructor = _0x1c74bb).className = "Namespace";
        var _0x329b64;
        var _0x2fe57f;
        var _0x32375b;
        var _0x27b1a3 = _0x445371("./field");
        var _0x4d0458 = _0x445371("./oneof");
        var _0x100f6e = _0x445371('./util');
        function _0x203750(_0x285f10, _0x12718e) {
          if (_0x285f10 && _0x285f10.length) {
            var _0x318f13 = {};
            for (var _0x352a4f = 0x0; _0x352a4f < _0x285f10.length; ++_0x352a4f) {
              _0x318f13[_0x285f10[_0x352a4f].name] = _0x285f10[_0x352a4f].toJSON(_0x12718e);
            }
            return _0x318f13;
          }
        }
        function _0x1c74bb(_0x1ff04a, _0x2b4230) {
          _0x3aff8d.call(this, _0x1ff04a, _0x2b4230);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x3d1229(_0x12b4f1) {
          _0x12b4f1._nestedArray = null;
          return _0x12b4f1;
        }
        _0x1c74bb.fromJSON = function (_0x56ccda, _0x3731fc) {
          return new _0x1c74bb(_0x56ccda, _0x3731fc.options).addJSON(_0x3731fc.nested);
        };
        _0x1c74bb.arrayToJSON = _0x203750;
        _0x1c74bb.isReservedId = function (_0x1e42fc, _0x4bcc59) {
          if (_0x1e42fc) {
            for (var _0xafc3e1 = 0x0; _0xafc3e1 < _0x1e42fc.length; ++_0xafc3e1) {
              if ("string" != typeof _0x1e42fc[_0xafc3e1] && _0x1e42fc[_0xafc3e1][0x0] <= _0x4bcc59 && _0x1e42fc[_0xafc3e1][0x1] > _0x4bcc59) {
                return true;
              }
            }
          }
          return false;
        };
        _0x1c74bb.isReservedName = function (_0x315473, _0x33d751) {
          if (_0x315473) {
            for (var _0x1ffdd3 = 0x0; _0x1ffdd3 < _0x315473.length; ++_0x1ffdd3) {
              if (_0x315473[_0x1ffdd3] === _0x33d751) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x1c74bb.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x100f6e.toArray(this.nested));
          }
        });
        _0x1c74bb.prototype.toJSON = function (_0x173e92) {
          return _0x100f6e.toObject(["options", this.options, 'nested', _0x203750(this.nestedArray, _0x173e92)]);
        };
        _0x1c74bb.prototype.addJSON = function (_0x3f81e4) {
          if (_0x3f81e4) {
            var _0x355967;
            var _0xa3c1d = Object.keys(_0x3f81e4);
            for (var _0x20e190 = 0x0; _0x20e190 < _0xa3c1d.length; ++_0x20e190) {
              _0x355967 = _0x3f81e4[_0xa3c1d[_0x20e190]];
              this.add((undefined !== _0x355967.fields ? _0x329b64.fromJSON : undefined !== _0x355967.values ? _0x32375b.fromJSON : undefined !== _0x355967.methods ? _0x2fe57f.fromJSON : undefined !== _0x355967.id ? _0x27b1a3.fromJSON : _0x1c74bb.fromJSON)(_0xa3c1d[_0x20e190], _0x355967));
            }
          }
          return this;
        };
        _0x1c74bb.prototype.get = function (_0x24feb0) {
          return this.nested && this.nested[_0x24feb0] || null;
        };
        _0x1c74bb.prototype.getEnum = function (_0x1deaf5) {
          if (this.nested && this.nested[_0x1deaf5] instanceof _0x32375b) {
            return this.nested[_0x1deaf5].values;
          }
          throw Error("no such enum: " + _0x1deaf5);
        };
        _0x1c74bb.prototype.add = function (_0x2d5a27) {
          if (!(_0x2d5a27 instanceof _0x27b1a3 && undefined !== _0x2d5a27.extend || _0x2d5a27 instanceof _0x329b64 || _0x2d5a27 instanceof _0x32375b || _0x2d5a27 instanceof _0x2fe57f || _0x2d5a27 instanceof _0x1c74bb || _0x2d5a27 instanceof _0x4d0458)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x1f3f80 = this.get(_0x2d5a27.name);
            if (_0x1f3f80) {
              if (!(_0x1f3f80 instanceof _0x1c74bb && _0x2d5a27 instanceof _0x1c74bb) || _0x1f3f80 instanceof _0x329b64 || _0x1f3f80 instanceof _0x2fe57f) {
                throw Error("duplicate name '" + _0x2d5a27.name + "' in " + this);
              }
              var _0x1d1469 = _0x1f3f80.nestedArray;
              for (var _0x55d2bf = 0x0; _0x55d2bf < _0x1d1469.length; ++_0x55d2bf) {
                _0x2d5a27.add(_0x1d1469[_0x55d2bf]);
              }
              this.remove(_0x1f3f80);
              if (!this.nested) {
                this.nested = {};
              }
              _0x2d5a27.setOptions(_0x1f3f80.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x2d5a27.name] = _0x2d5a27;
          _0x2d5a27.onAdd(this);
          return _0x3d1229(this);
        };
        _0x1c74bb.prototype.remove = function (_0x3c1f0c) {
          if (!(_0x3c1f0c instanceof _0x3aff8d)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x3c1f0c.parent !== this) {
            throw Error(_0x3c1f0c + " is not a member of " + this);
          }
          delete this.nested[_0x3c1f0c.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x3c1f0c.onRemove(this);
          return _0x3d1229(this);
        };
        _0x1c74bb.prototype.define = function (_0x3f6345, _0x3ab2bb) {
          if (_0x100f6e.isString(_0x3f6345)) {
            _0x3f6345 = _0x3f6345.split('.');
          } else {
            if (!Array.isArray(_0x3f6345)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x3f6345 && _0x3f6345.length && '' === _0x3f6345[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x326f05 = this; _0x3f6345.length > 0x0;) {
            var _0x339dc8 = _0x3f6345.shift();
            if (_0x326f05.nested && _0x326f05.nested[_0x339dc8]) {
              if (!((_0x326f05 = _0x326f05.nested[_0x339dc8]) instanceof _0x1c74bb)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x326f05.add(_0x326f05 = new _0x1c74bb(_0x339dc8));
            }
          }
          if (_0x3ab2bb) {
            _0x326f05.addJSON(_0x3ab2bb);
          }
          return _0x326f05;
        };
        _0x1c74bb.prototype.resolveAll = function () {
          var _0x2eccf7 = this.nestedArray;
          for (var _0x269974 = 0x0; _0x269974 < _0x2eccf7.length;) {
            if (_0x2eccf7[_0x269974] instanceof _0x1c74bb) {
              _0x2eccf7[_0x269974++].resolveAll();
            } else {
              _0x2eccf7[_0x269974++].resolve();
            }
          }
          return this.resolve();
        };
        _0x1c74bb.prototype.lookup = function (_0xaac42f, _0x32719d, _0x2a19f7) {
          if ('boolean' == typeof _0x32719d) {
            _0x2a19f7 = _0x32719d;
            _0x32719d = undefined;
          } else if (_0x32719d && !Array.isArray(_0x32719d)) {
            _0x32719d = [_0x32719d];
          }
          if (_0x100f6e.isString(_0xaac42f) && _0xaac42f.length) {
            if ('.' === _0xaac42f) {
              return this.root;
            }
            _0xaac42f = _0xaac42f.split('.');
          } else {
            if (!_0xaac42f.length) {
              return this;
            }
          }
          if ('' === _0xaac42f[0x0]) {
            return this.root.lookup(_0xaac42f.slice(0x1), _0x32719d);
          }
          var _0x5c7d73 = this.get(_0xaac42f[0x0]);
          if (_0x5c7d73) {
            if (0x1 === _0xaac42f.length) {
              if (!_0x32719d || _0x32719d.indexOf(_0x5c7d73.constructor) > -0x1) {
                return _0x5c7d73;
              }
            } else {
              if (_0x5c7d73 instanceof _0x1c74bb && (_0x5c7d73 = _0x5c7d73.lookup(_0xaac42f.slice(0x1), _0x32719d, true))) {
                return _0x5c7d73;
              }
            }
          } else {
            for (var _0xd58f46 = 0x0; _0xd58f46 < this.nestedArray.length; ++_0xd58f46) {
              if (this._nestedArray[_0xd58f46] instanceof _0x1c74bb && (_0x5c7d73 = this._nestedArray[_0xd58f46].lookup(_0xaac42f, _0x32719d, true))) {
                return _0x5c7d73;
              }
            }
          }
          return null === this.parent || _0x2a19f7 ? null : this.parent.lookup(_0xaac42f, _0x32719d);
        };
        _0x1c74bb.prototype.lookupType = function (_0x375982) {
          var _0xfae2b6 = this.lookup(_0x375982, [_0x329b64]);
          if (!_0xfae2b6) {
            throw Error("no such type: " + _0x375982);
          }
          return _0xfae2b6;
        };
        _0x1c74bb.prototype.lookupEnum = function (_0x5e1989) {
          var _0xd0aca0 = this.lookup(_0x5e1989, [_0x32375b]);
          if (!_0xd0aca0) {
            throw Error("no such Enum '" + _0x5e1989 + "' in " + this);
          }
          return _0xd0aca0;
        };
        _0x1c74bb.prototype.lookupTypeOrEnum = function (_0x32745c) {
          var _0x5ebf17 = this.lookup(_0x32745c, [_0x329b64, _0x32375b]);
          if (!_0x5ebf17) {
            throw Error("no such Type or Enum '" + _0x32745c + "' in " + this);
          }
          return _0x5ebf17;
        };
        _0x1c74bb.prototype.lookupService = function (_0xe8447c) {
          var _0x491aa4 = this.lookup(_0xe8447c, [_0x2fe57f]);
          if (!_0x491aa4) {
            throw Error("no such Service '" + _0xe8447c + "' in " + this);
          }
          return _0x491aa4;
        };
        _0x1c74bb._configure = function (_0x2372bf, _0x26a2ed, _0xe09d55) {
          _0x329b64 = _0x2372bf;
          _0x2fe57f = _0x26a2ed;
          _0x32375b = _0xe09d55;
        };
        _0x2ed68e.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './oneof': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x44cf10, _0x3aca4e, _0x4de6b0, _0x18e955, _0x137a67) {
        _0x4de6b0.exports = _0x3a6534;
        var _0x15804b = _0x3aca4e('./field');
        ((_0x3a6534.prototype = Object.create(_0x15804b.prototype)).constructor = _0x3a6534).className = "MapField";
        var _0x293283 = _0x3aca4e("./types");
        var _0x4e24fc = _0x3aca4e('./util');
        function _0x3a6534(_0x1d5509, _0x8c17b9, _0xea751c, _0xc7ff5c, _0x5c9862, _0x5cc6e9) {
          _0x15804b.call(this, _0x1d5509, _0x8c17b9, _0xc7ff5c, undefined, undefined, _0x5c9862, _0x5cc6e9);
          if (!_0x4e24fc.isString(_0xea751c)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0xea751c;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x3a6534.fromJSON = function (_0x5cd7bb, _0x1d3c08) {
          return new _0x3a6534(_0x5cd7bb, _0x1d3c08.id, _0x1d3c08.keyType, _0x1d3c08.type, _0x1d3c08.options, _0x1d3c08.comment);
        };
        _0x3a6534.prototype.toJSON = function (_0x4fb986) {
          var _0x40a47e = !!_0x4fb986 && Boolean(_0x4fb986.keepComments);
          return _0x4e24fc.toObject(["keyType", this.keyType, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, "comment", _0x40a47e ? this.comment : undefined]);
        };
        _0x3a6534.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x293283.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x15804b.prototype.resolve.call(this);
        };
        _0x3a6534.d = function (_0x53ce34, _0x83da3f, _0x27671c) {
          if ("function" == typeof _0x27671c) {
            _0x27671c = _0x4e24fc.decorateType(_0x27671c).name;
          } else if (_0x27671c && "object" == typeof _0x27671c) {
            _0x27671c = _0x4e24fc.decorateEnum(_0x27671c).name;
          }
          return function (_0x2df525, _0x1c1a07) {
            _0x4e24fc.decorateType(_0x2df525.constructor).add(new _0x3a6534(_0x1c1a07, _0x53ce34, _0x83da3f, _0x27671c));
          };
        };
        _0x4de6b0.exports;
      }, function () {
        return {
          './field': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (_0x518fbc, _0x31d94b, _0x4f53de, _0x30f707, _0x46df29) {
        _0x4f53de.exports = _0x4b4e08;
        var _0x2f7c5c = _0x31d94b("./object");
        ((_0x4b4e08.prototype = Object.create(_0x2f7c5c.prototype)).constructor = _0x4b4e08).className = "Method";
        var _0x39ab4e = _0x31d94b("./util");
        function _0x4b4e08(_0xa5a617, _0x3811b8, _0x26bd7c, _0x23443b, _0x385435, _0x47577c, _0x17b0bf, _0x4c8ac7, _0x249c25) {
          if (_0x39ab4e.isObject(_0x385435)) {
            _0x17b0bf = _0x385435;
            _0x385435 = _0x47577c = undefined;
          } else if (_0x39ab4e.isObject(_0x47577c)) {
            _0x17b0bf = _0x47577c;
            _0x47577c = undefined;
          }
          if (undefined !== _0x3811b8 && !_0x39ab4e.isString(_0x3811b8)) {
            throw TypeError("type must be a string");
          }
          if (!_0x39ab4e.isString(_0x26bd7c)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x39ab4e.isString(_0x23443b)) {
            throw TypeError("responseType must be a string");
          }
          _0x2f7c5c.call(this, _0xa5a617, _0x17b0bf);
          this.type = _0x3811b8 || 'rpc';
          this.requestType = _0x26bd7c;
          this.requestStream = !!_0x385435 || undefined;
          this.responseType = _0x23443b;
          this.responseStream = !!_0x47577c || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x4c8ac7;
          this.parsedOptions = _0x249c25;
        }
        _0x4b4e08.fromJSON = function (_0x3f787b, _0x3985b2) {
          return new _0x4b4e08(_0x3f787b, _0x3985b2.type, _0x3985b2.requestType, _0x3985b2.responseType, _0x3985b2.requestStream, _0x3985b2.responseStream, _0x3985b2.options, _0x3985b2.comment, _0x3985b2.parsedOptions);
        };
        _0x4b4e08.prototype.toJSON = function (_0x3acc70) {
          var _0x135876 = !!_0x3acc70 && Boolean(_0x3acc70.keepComments);
          return _0x39ab4e.toObject(['type', "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, 'responseType', this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", _0x135876 ? this.comment : undefined, 'parsedOptions', this.parsedOptions]);
        };
        _0x4b4e08.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x2f7c5c.prototype.resolve.call(this));
        };
        _0x4f53de.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (_0x40eb57, _0x140b44, _0x199b3e, _0x4f5141, _0x3bee7f) {
        _0x199b3e.exports = _0x133405;
        var _0x7969f4 = _0x140b44('./namespace');
        ((_0x133405.prototype = Object.create(_0x7969f4.prototype)).constructor = _0x133405).className = "Service";
        var _0x124745 = _0x140b44("./method");
        var _0x1574c3 = _0x140b44("./util");
        var _0x1eab40 = _0x140b44('./rpc');
        function _0x133405(_0x1208a1, _0x1d8fef) {
          _0x7969f4.call(this, _0x1208a1, _0x1d8fef);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x50a236(_0x593a82) {
          _0x593a82._methodsArray = null;
          return _0x593a82;
        }
        _0x133405.fromJSON = function (_0x3237f6, _0x5f02b4) {
          var _0x3c59a2 = new _0x133405(_0x3237f6, _0x5f02b4.options);
          if (_0x5f02b4.methods) {
            var _0x44edc0 = Object.keys(_0x5f02b4.methods);
            for (var _0x18b9d6 = 0x0; _0x18b9d6 < _0x44edc0.length; ++_0x18b9d6) {
              _0x3c59a2.add(_0x124745.fromJSON(_0x44edc0[_0x18b9d6], _0x5f02b4.methods[_0x44edc0[_0x18b9d6]]));
            }
          }
          if (_0x5f02b4.nested) {
            _0x3c59a2.addJSON(_0x5f02b4.nested);
          }
          _0x3c59a2.comment = _0x5f02b4.comment;
          return _0x3c59a2;
        };
        _0x133405.prototype.toJSON = function (_0x3675ae) {
          var _0x13bf33 = _0x7969f4.prototype.toJSON.call(this, _0x3675ae);
          var _0x466230 = !!_0x3675ae && Boolean(_0x3675ae.keepComments);
          return _0x1574c3.toObject(['options', _0x13bf33 && _0x13bf33.options || undefined, 'methods', _0x7969f4.arrayToJSON(this.methodsArray, _0x3675ae) || {}, 'nested', _0x13bf33 && _0x13bf33.nested || undefined, "comment", _0x466230 ? this.comment : undefined]);
        };
        Object.defineProperty(_0x133405.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x1574c3.toArray(this.methods));
          }
        });
        _0x133405.prototype.get = function (_0x262ead) {
          return this.methods[_0x262ead] || _0x7969f4.prototype.get.call(this, _0x262ead);
        };
        _0x133405.prototype.resolveAll = function () {
          var _0x5ab6c7 = this.methodsArray;
          for (var _0x39c217 = 0x0; _0x39c217 < _0x5ab6c7.length; ++_0x39c217) {
            _0x5ab6c7[_0x39c217].resolve();
          }
          return _0x7969f4.prototype.resolve.call(this);
        };
        _0x133405.prototype.add = function (_0x58e858) {
          if (this.get(_0x58e858.name)) {
            throw Error("duplicate name '" + _0x58e858.name + "' in " + this);
          }
          return _0x58e858 instanceof _0x124745 ? (this.methods[_0x58e858.name] = _0x58e858, _0x58e858.parent = this, _0x50a236(this)) : _0x7969f4.prototype.add.call(this, _0x58e858);
        };
        _0x133405.prototype.remove = function (_0x44f432) {
          if (_0x44f432 instanceof _0x124745) {
            if (this.methods[_0x44f432.name] !== _0x44f432) {
              throw Error(_0x44f432 + " is not a member of " + this);
            }
            delete this.methods[_0x44f432.name];
            _0x44f432.parent = null;
            return _0x50a236(this);
          }
          return _0x7969f4.prototype.remove.call(this, _0x44f432);
        };
        _0x133405.prototype.create = function (_0x5616a8, _0x5bcd25, _0x2e154d) {
          var _0x387b15;
          var _0x4bae18 = new _0x1eab40.Service(_0x5616a8, _0x5bcd25, _0x2e154d);
          for (var _0xe0dc8d = 0x0; _0xe0dc8d < this.methodsArray.length; ++_0xe0dc8d) {
            var _0x512623 = _0x1574c3.lcFirst((_0x387b15 = this._methodsArray[_0xe0dc8d]).resolve().name).replace(/[^$\w_]/g, '');
            _0x4bae18[_0x512623] = _0x1574c3.codegen(['r', 'c'], _0x1574c3.isReserved(_0x512623) ? _0x512623 + '_' : _0x512623)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x387b15,
              'q': _0x387b15.resolvedRequestType.ctor,
              's': _0x387b15.resolvedResponseType.ctor
            });
          }
          return _0x4bae18;
        };
        _0x199b3e.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      _0x1c1e99.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/message.js', function (_0x3955cb, _0x7fda20, _0x1eef5b, _0x1088bb, _0x274692) {
        _0x1eef5b.exports = _0x24ddf1;
        var _0x23c4da = _0x7fda20("./util/minimal");
        function _0x24ddf1(_0xbeb2f1) {
          if (_0xbeb2f1) {
            var _0x466a88 = Object.keys(_0xbeb2f1);
            for (var _0x11971b = 0x0; _0x11971b < _0x466a88.length; ++_0x11971b) {
              this[_0x466a88[_0x11971b]] = _0xbeb2f1[_0x466a88[_0x11971b]];
            }
          }
        }
        _0x24ddf1.create = function (_0x55387d) {
          return this.$type.create(_0x55387d);
        };
        _0x24ddf1.encode = function (_0xa8fa34, _0x137259) {
          return this.$type.encode(_0xa8fa34, _0x137259);
        };
        _0x24ddf1.encodeDelimited = function (_0xd18e8b, _0x3a1b4a) {
          return this.$type.encodeDelimited(_0xd18e8b, _0x3a1b4a);
        };
        _0x24ddf1.decode = function (_0x4d7cb7) {
          return this.$type.decode(_0x4d7cb7);
        };
        _0x24ddf1.decodeDelimited = function (_0x1b7f50) {
          return this.$type.decodeDelimited(_0x1b7f50);
        };
        _0x24ddf1.verify = function (_0x17289c) {
          return this.$type.verify(_0x17289c);
        };
        _0x24ddf1.fromObject = function (_0x5a76b8) {
          return this.$type.fromObject(_0x5a76b8);
        };
        _0x24ddf1.toObject = function (_0x2f8397, _0x238b34) {
          return this.$type.toObject(_0x2f8397, _0x238b34);
        };
        _0x24ddf1.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x23c4da.toJSONOptions);
        };
        _0x1eef5b.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0x80246b, _0x3af033, _0x15c5dc, _0x5a08ef, _0x57f0cc) {
        _0x15c5dc.exports = function (_0x5af753) {
          var _0x354cc0 = _0x4e92e1.codegen(['r', 'l'], _0x5af753.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x5af753.fieldsArray.filter(function (_0x110c38) {
            return _0x110c38.map;
          }).length ? ",k,value" : ''))('while(r.pos<c){')("var t=r.uint32()");
          if (_0x5af753.group) {
            _0x354cc0('if((t&7)===4)')("break");
          }
          _0x354cc0('switch(t>>>3){');
          for (var _0x247323 = 0x0; _0x247323 < _0x5af753.fieldsArray.length; ++_0x247323) {
            var _0x37b3bc = _0x5af753._fieldsArray[_0x247323].resolve();
            var _0x1610a4 = _0x37b3bc.resolvedType instanceof _0x23f3b7 ? "int32" : _0x37b3bc.type;
            var _0x33af81 = 'm' + _0x4e92e1.safeProp(_0x37b3bc.name);
            _0x354cc0("case %i:", _0x37b3bc.id);
            if (_0x37b3bc.map) {
              _0x354cc0("if(%s===util.emptyObject)", _0x33af81)('%s={}', _0x33af81)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x48d568.defaults[_0x37b3bc.keyType]) {
                _0x354cc0("k=%j", _0x48d568.defaults[_0x37b3bc.keyType]);
              } else {
                _0x354cc0("k=null");
              }
              if (undefined !== _0x48d568.defaults[_0x1610a4]) {
                _0x354cc0("value=%j", _0x48d568.defaults[_0x1610a4]);
              } else {
                _0x354cc0("value=null");
              }
              _0x354cc0("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", _0x37b3bc.keyType)("case 2:");
              if (undefined === _0x48d568.basic[_0x1610a4]) {
                _0x354cc0("value=types[%i].decode(r,r.uint32())", _0x247323);
              } else {
                _0x354cc0("value=r.%s()", _0x1610a4);
              }
              _0x354cc0("break")('default:')("r.skipType(tag2&7)")("break")('}')('}');
              if (undefined !== _0x48d568.long[_0x37b3bc.keyType]) {
                _0x354cc0("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x33af81);
              } else {
                _0x354cc0("%s[k]=value", _0x33af81);
              }
            } else if (_0x37b3bc.repeated) {
              _0x354cc0("if(!(%s&&%s.length))", _0x33af81, _0x33af81)('%s=[]', _0x33af81);
              if (undefined !== _0x48d568.packed[_0x1610a4]) {
                _0x354cc0("if((t&7)===2){")("var c2=r.uint32()+r.pos")('while(r.pos<c2)')("%s.push(r.%s())", _0x33af81, _0x1610a4)("}else");
              }
              if (undefined === _0x48d568.basic[_0x1610a4]) {
                _0x354cc0(_0x37b3bc.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x33af81, _0x247323);
              } else {
                _0x354cc0("%s.push(r.%s())", _0x33af81, _0x1610a4);
              }
            } else if (undefined === _0x48d568.basic[_0x1610a4]) {
              _0x354cc0(_0x37b3bc.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", _0x33af81, _0x247323);
            } else {
              _0x354cc0("%s=r.%s()", _0x33af81, _0x1610a4);
            }
            _0x354cc0("break");
          }
          _0x354cc0("default:")('r.skipType(t&7)')("break")('}')('}');
          for (_0x247323 = 0x0; _0x247323 < _0x5af753._fieldsArray.length; ++_0x247323) {
            var _0x29107d = _0x5af753._fieldsArray[_0x247323];
            if (_0x29107d.required) {
              _0x354cc0('if(!m.hasOwnProperty(%j))', _0x29107d.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x29107d.name + "'");
            }
          }
          return _0x354cc0("return m");
        };
        var _0x23f3b7 = _0x3af033("./enum");
        var _0x48d568 = _0x3af033("./types");
        var _0x4e92e1 = _0x3af033('./util');
        _0x15c5dc.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js', function (_0x2bdcd2, _0x4c713f, _0x2b4ac7, _0x3b3f49, _0x1aa280) {
        _0x2b4ac7.exports = function (_0x20facb) {
          var _0xefaf5c = _0x534fb3.codegen(['m'], _0x20facb.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var _0x5eaf7b = _0x20facb.oneofsArray;
          var _0xe80d44 = {};
          if (_0x5eaf7b.length) {
            _0xefaf5c("var p={}");
          }
          for (var _0x21d6f7 = 0x0; _0x21d6f7 < _0x20facb.fieldsArray.length; ++_0x21d6f7) {
            var _0x1028e7 = _0x20facb._fieldsArray[_0x21d6f7].resolve();
            var _0xddc330 = 'm' + _0x534fb3.safeProp(_0x1028e7.name);
            if (_0x1028e7.optional) {
              _0xefaf5c("if(%s!=null&&m.hasOwnProperty(%j)){", _0xddc330, _0x1028e7.name);
            }
            if (_0x1028e7.map) {
              _0xefaf5c("if(!util.isObject(%s))", _0xddc330)("return%j", _0x1028e7.name + ": " + _0x22f7(0x1de) + (_0x1028e7.repeated && "array" !== _0x22f7(0x1de) ? '[]' : _0x1028e7.map && false ? "{k:" + _0x1028e7.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0xddc330)("for(var i=0;i<k.length;++i){");
              _0x2d960f(_0xefaf5c, _0x1028e7, "k[i]");
              _0x2e46ef(_0xefaf5c, _0x1028e7, _0x21d6f7, _0xddc330 + '[k[i]]')('}');
            } else {
              if (_0x1028e7.repeated) {
                _0xefaf5c("if(!Array.isArray(%s))", _0xddc330)("return%j", _0x1028e7.name + ": " + 'array' + (_0x1028e7.repeated && false ? '[]' : _0x1028e7.map && true ? "{k:" + _0x1028e7.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0xddc330);
                _0x2e46ef(_0xefaf5c, _0x1028e7, _0x21d6f7, _0xddc330 + "[i]")('}');
              } else {
                if (_0x1028e7.partOf) {
                  var _0x514b3a = _0x534fb3.safeProp(_0x1028e7.partOf.name);
                  if (0x1 === _0xe80d44[_0x1028e7.partOf.name]) {
                    _0xefaf5c("if(p%s===1)", _0x514b3a)("return%j", _0x1028e7.partOf.name + ": multiple values");
                  }
                  _0xe80d44[_0x1028e7.partOf.name] = 0x1;
                  _0xefaf5c("p%s=1", _0x514b3a);
                }
                _0x2e46ef(_0xefaf5c, _0x1028e7, _0x21d6f7, _0xddc330);
              }
            }
            if (_0x1028e7.optional) {
              _0xefaf5c('}');
            }
          }
          return _0xefaf5c("return null");
        };
        var _0x5c0ed7 = _0x4c713f("./enum");
        var _0x534fb3 = _0x4c713f("./util");
        function _0x2e46ef(_0x5aa0ca, _0x28843f, _0x35947e, _0x19025d) {
          if (_0x28843f.resolvedType) {
            if (_0x28843f.resolvedType instanceof _0x5c0ed7) {
              _0x5aa0ca('switch(%s){', _0x19025d)('default:')("return%j", _0x28843f.name + ": " + _0x22f7(0x84) + (_0x28843f.repeated && "array" !== _0x22f7(0x84) ? '[]' : _0x28843f.map && true ? "{k:" + _0x28843f.keyType + '}' : '') + " expected");
              var _0x9176f1 = Object.keys(_0x28843f.resolvedType.values);
              for (var _0x4af3e7 = 0x0; _0x4af3e7 < _0x9176f1.length; ++_0x4af3e7) {
                _0x5aa0ca("case %i:", _0x28843f.resolvedType.values[_0x9176f1[_0x4af3e7]]);
              }
              _0x5aa0ca("break")('}');
            } else {
              _0x5aa0ca('{')("var e=types[%i].verify(%s);", _0x35947e, _0x19025d)('if(e)')('return%j+e', _0x28843f.name + '.')('}');
            }
          } else {
            switch (_0x28843f.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case 'fixed32':
              case "sfixed32":
                _0x5aa0ca("if(!util.isInteger(%s))", _0x19025d)('return%j', _0x28843f.name + ": " + _0x22f7(0x746) + (_0x28843f.repeated && "array" !== _0x22f7(0x746) ? '[]' : _0x28843f.map && true ? "{k:" + _0x28843f.keyType + '}' : '') + " expected");
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x5aa0ca("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0x19025d, _0x19025d, _0x19025d, _0x19025d)("return%j", _0x28843f.name + ": " + _0x22f7(0x5c0) + (_0x28843f.repeated && "array" !== _0x22f7(0x5c0) ? '[]' : _0x28843f.map && true ? "{k:" + _0x28843f.keyType + '}' : '') + " expected");
                break;
              case "float":
              case "double":
                _0x5aa0ca("if(typeof %s!==\"number\")", _0x19025d)('return%j', _0x28843f.name + ": " + _0x22f7(0x6d8) + (_0x28843f.repeated && "array" !== _0x22f7(0x6d8) ? '[]' : _0x28843f.map && true ? "{k:" + _0x28843f.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x5aa0ca("if(typeof %s!==\"boolean\")", _0x19025d)("return%j", _0x28843f.name + ": " + _0x22f7(0x1df) + (_0x28843f.repeated && "array" !== _0x22f7(0x1df) ? '[]' : _0x28843f.map && true ? "{k:" + _0x28843f.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x5aa0ca("if(!util.isString(%s))", _0x19025d)('return%j', _0x28843f.name + ": " + _0x22f7(0x2ce) + (_0x28843f.repeated && "array" !== _0x22f7(0x2ce) ? '[]' : _0x28843f.map && true ? "{k:" + _0x28843f.keyType + '}' : '') + " expected");
                break;
              case 'bytes':
                _0x5aa0ca("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x19025d, _0x19025d, _0x19025d)('return%j', _0x28843f.name + ": " + _0x22f7(0x41c) + (_0x28843f.repeated && "array" !== _0x22f7(0x41c) ? '[]' : _0x28843f.map && true ? "{k:" + _0x28843f.keyType + '}' : '') + " expected");
            }
          }
          return _0x5aa0ca;
        }
        function _0x2d960f(_0x5c959e, _0x165757, _0x4b8074) {
          switch (_0x165757.keyType) {
            case 'int32':
            case "uint32":
            case "sint32":
            case "fixed32":
            case 'sfixed32':
              _0x5c959e('if(!util.key32Re.test(%s))', _0x4b8074)('return%j', _0x165757.name + ": " + "integer key" + (_0x165757.repeated && true ? '[]' : _0x165757.map && true ? "{k:" + _0x165757.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case "uint64":
            case 'sint64':
            case "fixed64":
            case "sfixed64":
              _0x5c959e('if(!util.key64Re.test(%s))', _0x4b8074)("return%j", _0x165757.name + ": " + "integer|Long key" + (_0x165757.repeated && true ? '[]' : _0x165757.map && true ? "{k:" + _0x165757.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x5c959e("if(!util.key2Re.test(%s))", _0x4b8074)("return%j", _0x165757.name + ": " + _0x22f7(0xe5) + (_0x165757.repeated && "array" !== _0x22f7(0xe5) ? '[]' : _0x165757.map && true ? "{k:" + _0x165757.keyType + '}' : '') + " expected");
          }
          return _0x5c959e;
        }
        _0x2b4ac7.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0x58f1f8, _0x5dd2e5, _0x109b09, _0x496180, _0x5999d7) {
        var _0x5c4f5b = _0x5dd2e5('./enum');
        var _0x5e4690 = _0x5dd2e5("./util");
        function _0x44b7f8(_0x5c5d6e, _0x219700, _0x34bb4d, _0x2a1a92) {
          if (_0x219700.resolvedType) {
            if (_0x219700.resolvedType instanceof _0x5c4f5b) {
              _0x5c5d6e("switch(d%s){", _0x2a1a92);
              var _0x166c89 = _0x219700.resolvedType.values;
              var _0xe63c0b = Object.keys(_0x166c89);
              for (var _0x301daa = 0x0; _0x301daa < _0xe63c0b.length; ++_0x301daa) {
                if (_0x219700.repeated && _0x166c89[_0xe63c0b[_0x301daa]] === _0x219700.typeDefault) {
                  _0x5c5d6e("default:");
                }
                _0x5c5d6e("case%j:", _0xe63c0b[_0x301daa])("case %i:", _0x166c89[_0xe63c0b[_0x301daa]])("m%s=%j", _0x2a1a92, _0x166c89[_0xe63c0b[_0x301daa]])("break");
              }
              _0x5c5d6e('}');
            } else {
              _0x5c5d6e("if(typeof d%s!==\"object\")", _0x2a1a92)("throw TypeError(%j)", _0x219700.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", _0x2a1a92, _0x34bb4d, _0x2a1a92);
            }
          } else {
            var _0x3b1a2e = false;
            switch (_0x219700.type) {
              case "double":
              case 'float':
                _0x5c5d6e("m%s=Number(d%s)", _0x2a1a92, _0x2a1a92);
                break;
              case 'uint32':
              case "fixed32":
                _0x5c5d6e("m%s=d%s>>>0", _0x2a1a92, _0x2a1a92);
                break;
              case "int32":
              case 'sint32':
              case "sfixed32":
                _0x5c5d6e("m%s=d%s|0", _0x2a1a92, _0x2a1a92);
                break;
              case "uint64":
                _0x3b1a2e = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x5c5d6e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x2a1a92, _0x2a1a92, _0x3b1a2e)("else if(typeof d%s===\"string\")", _0x2a1a92)('m%s=parseInt(d%s,10)', _0x2a1a92, _0x2a1a92)("else if(typeof d%s===\"number\")", _0x2a1a92)('m%s=d%s', _0x2a1a92, _0x2a1a92)("else if(typeof d%s===\"object\")", _0x2a1a92)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x2a1a92, _0x2a1a92, _0x2a1a92, _0x3b1a2e ? "true" : '');
                break;
              case 'bytes':
                _0x5c5d6e("if(typeof d%s===\"string\")", _0x2a1a92)('util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)', _0x2a1a92, _0x2a1a92, _0x2a1a92)("else if(d%s.length)", _0x2a1a92)('m%s=d%s', _0x2a1a92, _0x2a1a92);
                break;
              case "string":
                _0x5c5d6e("m%s=String(d%s)", _0x2a1a92, _0x2a1a92);
                break;
              case "bool":
                _0x5c5d6e("m%s=Boolean(d%s)", _0x2a1a92, _0x2a1a92);
            }
          }
          return _0x5c5d6e;
        }
        function _0x5e3bca(_0x348294, _0x2bd4bd, _0x22f814, _0x337fdb) {
          if (_0x2bd4bd.resolvedType) {
            if (_0x2bd4bd.resolvedType instanceof _0x5c4f5b) {
              _0x348294('d%s=o.enums===String?types[%i].values[m%s]:m%s', _0x337fdb, _0x22f814, _0x337fdb, _0x337fdb);
            } else {
              _0x348294("d%s=types[%i].toObject(m%s,o)", _0x337fdb, _0x22f814, _0x337fdb);
            }
          } else {
            var _0xc66900 = false;
            switch (_0x2bd4bd.type) {
              case "double":
              case "float":
                _0x348294("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x337fdb, _0x337fdb, _0x337fdb, _0x337fdb);
                break;
              case "uint64":
                _0xc66900 = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x348294("if(typeof m%s===\"number\")", _0x337fdb)("d%s=o.longs===String?String(m%s):m%s", _0x337fdb, _0x337fdb, _0x337fdb)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x337fdb, _0x337fdb, _0x337fdb, _0x337fdb, _0xc66900 ? 'true' : '', _0x337fdb);
                break;
              case "bytes":
                _0x348294("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", _0x337fdb, _0x337fdb, _0x337fdb, _0x337fdb, _0x337fdb);
                break;
              default:
                _0x348294("d%s=m%s", _0x337fdb, _0x337fdb);
            }
          }
          return _0x348294;
        }
        _0x58f1f8.fromObject = function (_0x4428c3) {
          var _0x2e188f = _0x4428c3.fieldsArray;
          var _0x55fce2 = _0x5e4690.codegen(['d'], _0x4428c3.name + '$fromObject')("if(d instanceof this.ctor)")("return d");
          if (!_0x2e188f.length) {
            return _0x55fce2("return new this.ctor");
          }
          _0x55fce2("var m=new this.ctor");
          for (var _0xc14bd6 = 0x0; _0xc14bd6 < _0x2e188f.length; ++_0xc14bd6) {
            var _0x390442 = _0x2e188f[_0xc14bd6].resolve();
            var _0x1fcf3d = _0x5e4690.safeProp(_0x390442.name);
            if (_0x390442.map) {
              _0x55fce2('if(d%s){', _0x1fcf3d)("if(typeof d%s!==\"object\")", _0x1fcf3d)("throw TypeError(%j)", _0x390442.fullName + ": object expected")("m%s={}", _0x1fcf3d)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x1fcf3d);
              _0x44b7f8(_0x55fce2, _0x390442, _0xc14bd6, _0x1fcf3d + "[ks[i]]")('}')('}');
            } else if (_0x390442.repeated) {
              _0x55fce2("if(d%s){", _0x1fcf3d)("if(!Array.isArray(d%s))", _0x1fcf3d)("throw TypeError(%j)", _0x390442.fullName + ": array expected")('m%s=[]', _0x1fcf3d)("for(var i=0;i<d%s.length;++i){", _0x1fcf3d);
              _0x44b7f8(_0x55fce2, _0x390442, _0xc14bd6, _0x1fcf3d + "[i]")('}')('}');
            } else {
              if (!(_0x390442.resolvedType instanceof _0x5c4f5b)) {
                _0x55fce2("if(d%s!=null){", _0x1fcf3d);
              }
              _0x44b7f8(_0x55fce2, _0x390442, _0xc14bd6, _0x1fcf3d);
              if (!(_0x390442.resolvedType instanceof _0x5c4f5b)) {
                _0x55fce2('}');
              }
            }
          }
          return _0x55fce2("return m");
        };
        _0x58f1f8.toObject = function (_0x1a1972) {
          var _0x702e0 = _0x1a1972.fieldsArray.slice().sort(_0x5e4690.compareFieldsById);
          if (!_0x702e0.length) {
            return _0x5e4690.codegen()("return {}");
          }
          var _0x3afb61 = _0x5e4690.codegen(['m', 'o'], _0x1a1972.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var _0x269a33 = [];
          var _0x2a7474 = [];
          var _0x57eed0 = [];
          for (var _0x8a9ad0 = 0x0; _0x8a9ad0 < _0x702e0.length; ++_0x8a9ad0) {
            if (!_0x702e0[_0x8a9ad0].partOf) {
              (_0x702e0[_0x8a9ad0].resolve().repeated ? _0x269a33 : _0x702e0[_0x8a9ad0].map ? _0x2a7474 : _0x57eed0).push(_0x702e0[_0x8a9ad0]);
            }
          }
          if (_0x269a33.length) {
            _0x3afb61('if(o.arrays||o.defaults){');
            for (_0x8a9ad0 = 0x0; _0x8a9ad0 < _0x269a33.length; ++_0x8a9ad0) {
              _0x3afb61('d%s=[]', _0x5e4690.safeProp(_0x269a33[_0x8a9ad0].name));
            }
            _0x3afb61('}');
          }
          if (_0x2a7474.length) {
            _0x3afb61('if(o.objects||o.defaults){');
            for (_0x8a9ad0 = 0x0; _0x8a9ad0 < _0x2a7474.length; ++_0x8a9ad0) {
              _0x3afb61("d%s={}", _0x5e4690.safeProp(_0x2a7474[_0x8a9ad0].name));
            }
            _0x3afb61('}');
          }
          if (_0x57eed0.length) {
            _0x3afb61('if(o.defaults){');
            for (_0x8a9ad0 = 0x0; _0x8a9ad0 < _0x57eed0.length; ++_0x8a9ad0) {
              var _0x14b836 = _0x57eed0[_0x8a9ad0];
              var _0x24a344 = _0x5e4690.safeProp(_0x14b836.name);
              if (_0x14b836.resolvedType instanceof _0x5c4f5b) {
                _0x3afb61("d%s=o.enums===String?%j:%j", _0x24a344, _0x14b836.resolvedType.valuesById[_0x14b836.typeDefault], _0x14b836.typeDefault);
              } else {
                if (_0x14b836.long) {
                  _0x3afb61('if(util.Long){')("var n=new util.Long(%i,%i,%j)", _0x14b836.typeDefault.low, _0x14b836.typeDefault.high, _0x14b836.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x24a344)("}else")("d%s=o.longs===String?%j:%i", _0x24a344, _0x14b836.typeDefault.toString(), _0x14b836.typeDefault.toNumber());
                } else {
                  if (_0x14b836.bytes) {
                    var _0x20d123 = '[' + Array.prototype.slice.call(_0x14b836.typeDefault).join(',') + ']';
                    _0x3afb61('if(o.bytes===String)d%s=%j', _0x24a344, String.fromCharCode.apply(String, _0x14b836.typeDefault))("else{")("d%s=%s", _0x24a344, _0x20d123)('if(o.bytes!==Array)d%s=util.newBuffer(d%s)', _0x24a344, _0x24a344)('}');
                  } else {
                    _0x3afb61("d%s=%j", _0x24a344, _0x14b836.typeDefault);
                  }
                }
              }
            }
            _0x3afb61('}');
          }
          var _0x7e2a = false;
          for (_0x8a9ad0 = 0x0; _0x8a9ad0 < _0x702e0.length; ++_0x8a9ad0) {
            _0x14b836 = _0x702e0[_0x8a9ad0];
            var _0x2cde32 = _0x1a1972._fieldsArray.indexOf(_0x14b836);
            _0x24a344 = _0x5e4690.safeProp(_0x14b836.name);
            if (_0x14b836.map) {
              if (!_0x7e2a) {
                _0x7e2a = true;
                _0x3afb61("var ks2");
              }
              _0x3afb61("if(m%s&&(ks2=Object.keys(m%s)).length){", _0x24a344, _0x24a344)("d%s={}", _0x24a344)("for(var j=0;j<ks2.length;++j){");
              _0x5e3bca(_0x3afb61, _0x14b836, _0x2cde32, _0x24a344 + "[ks2[j]]")('}');
            } else if (_0x14b836.repeated) {
              _0x3afb61("if(m%s&&m%s.length){", _0x24a344, _0x24a344)("d%s=[]", _0x24a344)("for(var j=0;j<m%s.length;++j){", _0x24a344);
              _0x5e3bca(_0x3afb61, _0x14b836, _0x2cde32, _0x24a344 + '[j]')('}');
            } else {
              _0x3afb61("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x24a344, _0x14b836.name);
              _0x5e3bca(_0x3afb61, _0x14b836, _0x2cde32, _0x24a344);
              if (_0x14b836.partOf) {
                _0x3afb61("if(o.oneofs)")('d%s=%j', _0x5e4690.safeProp(_0x14b836.partOf.name), _0x14b836.name);
              }
            }
            _0x3afb61('}');
          }
          return _0x3afb61("return d");
        };
        _0x109b09.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (_0x21070a, _0x2e484e, _0x194995, _0x1756b3, _0x18d01e) {
        var _0x440170 = _0x2e484e("./message");
        _0x21070a[".google.protobuf.Any"] = {
          'fromObject': function (_0x15cd1c) {
            if (_0x15cd1c && _0x15cd1c['@type']) {
              var _0x12b803 = _0x15cd1c['@type'].substring(_0x15cd1c["@type"].lastIndexOf('/') + 0x1);
              var _0x5a64df = this.lookup(_0x12b803);
              if (_0x5a64df) {
                var _0x1866ae = '.' === _0x15cd1c["@type"].charAt(0x0) ? _0x15cd1c['@type'].substr(0x1) : _0x15cd1c["@type"];
                if (-0x1 === _0x1866ae.indexOf('/')) {
                  _0x1866ae = '/' + _0x1866ae;
                }
                return this.create({
                  'type_url': _0x1866ae,
                  'value': _0x5a64df.encode(_0x5a64df.fromObject(_0x15cd1c)).finish()
                });
              }
            }
            return this.fromObject(_0x15cd1c);
          },
          'toObject': function (_0x1548eb, _0x169bdd) {
            var _0x25fc6b = '';
            var _0x23f91a = '';
            if (_0x169bdd && _0x169bdd.json && _0x1548eb.type_url && _0x1548eb.value) {
              _0x23f91a = _0x1548eb.type_url.substring(_0x1548eb.type_url.lastIndexOf('/') + 0x1);
              _0x25fc6b = _0x1548eb.type_url.substring(0x0, _0x1548eb.type_url.lastIndexOf('/') + 0x1);
              var _0x333579 = this.lookup(_0x23f91a);
              if (_0x333579) {
                _0x1548eb = _0x333579.decode(_0x1548eb.value);
              }
            }
            if (!(_0x1548eb instanceof this.ctor) && _0x1548eb instanceof _0x440170) {
              var _0x50b962 = _0x1548eb.$type.toObject(_0x1548eb, _0x169bdd);
              if ('' === _0x25fc6b) {
                _0x25fc6b = "type.googleapis.com/";
              }
              _0x23f91a = _0x25fc6b + ('.' === _0x1548eb.$type.fullName[0x0] ? _0x1548eb.$type.fullName.substr(0x1) : _0x1548eb.$type.fullName);
              _0x50b962["@type"] = _0x23f91a;
              return _0x50b962;
            }
            return this.toObject(_0x1548eb, _0x169bdd);
          }
        };
        _0x194995.exports;
      }, function () {
        return {
          './message': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/message.js'
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (_0x115679, _0x9395b1, _0x1b460a, _0x2e4747, _0x33fce0) {
        _0x1b460a.exports = _0x30d1fa;
        var _0x59a309 = _0x9395b1("./namespace");
        ((_0x30d1fa.prototype = Object.create(_0x59a309.prototype)).constructor = _0x30d1fa).className = "Type";
        var _0x4b7753 = _0x9395b1("./enum");
        var _0x2f4c1b = _0x9395b1("./oneof");
        var _0x52fe20 = _0x9395b1("./field");
        var _0xc7d65 = _0x9395b1('./mapfield');
        var _0x25616d = _0x9395b1("./service");
        var _0x4cad42 = _0x9395b1("./message");
        var _0x25b75a = _0x9395b1("./reader");
        var _0x5b4ab2 = _0x9395b1('./writer');
        var _0x41eff0 = _0x9395b1("./util");
        var _0x32cc97 = _0x9395b1("./encoder");
        var _0x15281b = _0x9395b1('./decoder');
        var _0x29886f = _0x9395b1('./verifier');
        var _0x363dfc = _0x9395b1("./converter");
        var _0x20e735 = _0x9395b1("./wrappers");
        function _0x30d1fa(_0x190b14, _0x2365fe) {
          _0x59a309.call(this, _0x190b14, _0x2365fe);
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
        function _0x202039(_0x147aab) {
          _0x147aab._fieldsById = _0x147aab._fieldsArray = _0x147aab._oneofsArray = null;
          delete _0x147aab.encode;
          delete _0x147aab.decode;
          delete _0x147aab.verify;
          return _0x147aab;
        }
        Object.defineProperties(_0x30d1fa.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x29cd8 = Object.keys(this.fields);
              for (var _0x31c65a = 0x0; _0x31c65a < _0x29cd8.length; ++_0x31c65a) {
                var _0xdddf40 = this.fields[_0x29cd8[_0x31c65a]];
                var _0xeedc37 = _0xdddf40.id;
                if (this._fieldsById[_0xeedc37]) {
                  throw Error("duplicate id " + _0xeedc37 + " in " + this);
                }
                this._fieldsById[_0xeedc37] = _0xdddf40;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x41eff0.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x41eff0.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x30d1fa.generateConstructor(this)());
            },
            'set': function (_0x3e08ed) {
              var _0x4d6705 = _0x3e08ed.prototype;
              if (!(_0x4d6705 instanceof _0x4cad42)) {
                (_0x3e08ed.prototype = new _0x4cad42()).constructor = _0x3e08ed;
                _0x41eff0.merge(_0x3e08ed.prototype, _0x4d6705);
              }
              _0x3e08ed.$type = _0x3e08ed.prototype.$type = this;
              _0x41eff0.merge(_0x3e08ed, _0x4cad42, true);
              this._ctor = _0x3e08ed;
              for (var _0x591660 = 0x0; _0x591660 < this.fieldsArray.length; ++_0x591660) {
                this._fieldsArray[_0x591660].resolve();
              }
              var _0x3aabae = {};
              for (_0x591660 = 0x0; _0x591660 < this.oneofsArray.length; ++_0x591660) {
                _0x3aabae[this._oneofsArray[_0x591660].resolve().name] = {
                  'get': _0x41eff0.oneOfGetter(this._oneofsArray[_0x591660].oneof),
                  'set': _0x41eff0.oneOfSetter(this._oneofsArray[_0x591660].oneof)
                };
              }
              if (_0x591660) {
                Object.defineProperties(_0x3e08ed.prototype, _0x3aabae);
              }
            }
          }
        });
        _0x30d1fa.generateConstructor = function (_0x4b9f45) {
          var _0x1774ca;
          var _0x4ce3dc = _0x41eff0.codegen(['p'], _0x4b9f45.name);
          for (var _0x21e1c4 = 0x0; _0x21e1c4 < _0x4b9f45.fieldsArray.length; ++_0x21e1c4) {
            if ((_0x1774ca = _0x4b9f45._fieldsArray[_0x21e1c4]).map) {
              _0x4ce3dc('this%s={}', _0x41eff0.safeProp(_0x1774ca.name));
            } else if (_0x1774ca.repeated) {
              _0x4ce3dc('this%s=[]', _0x41eff0.safeProp(_0x1774ca.name));
            }
          }
          return _0x4ce3dc("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")('this[ks[i]]=p[ks[i]]');
        };
        _0x30d1fa.fromJSON = function (_0x39e4ef, _0x2e8c84) {
          var _0x2e8b65 = new _0x30d1fa(_0x39e4ef, _0x2e8c84.options);
          _0x2e8b65.extensions = _0x2e8c84.extensions;
          _0x2e8b65.reserved = _0x2e8c84.reserved;
          var _0x1a0d41 = Object.keys(_0x2e8c84.fields);
          for (var _0x2d9d42 = 0x0; _0x2d9d42 < _0x1a0d41.length; ++_0x2d9d42) {
            _0x2e8b65.add((undefined !== _0x2e8c84.fields[_0x1a0d41[_0x2d9d42]].keyType ? _0xc7d65.fromJSON : _0x52fe20.fromJSON)(_0x1a0d41[_0x2d9d42], _0x2e8c84.fields[_0x1a0d41[_0x2d9d42]]));
          }
          if (_0x2e8c84.oneofs) {
            _0x1a0d41 = Object.keys(_0x2e8c84.oneofs);
            for (_0x2d9d42 = 0x0; _0x2d9d42 < _0x1a0d41.length; ++_0x2d9d42) {
              _0x2e8b65.add(_0x2f4c1b.fromJSON(_0x1a0d41[_0x2d9d42], _0x2e8c84.oneofs[_0x1a0d41[_0x2d9d42]]));
            }
          }
          if (_0x2e8c84.nested) {
            _0x1a0d41 = Object.keys(_0x2e8c84.nested);
            for (_0x2d9d42 = 0x0; _0x2d9d42 < _0x1a0d41.length; ++_0x2d9d42) {
              var _0x575d96 = _0x2e8c84.nested[_0x1a0d41[_0x2d9d42]];
              _0x2e8b65.add((undefined !== _0x575d96.id ? _0x52fe20.fromJSON : undefined !== _0x575d96.fields ? _0x30d1fa.fromJSON : undefined !== _0x575d96.values ? _0x4b7753.fromJSON : undefined !== _0x575d96.methods ? _0x25616d.fromJSON : _0x59a309.fromJSON)(_0x1a0d41[_0x2d9d42], _0x575d96));
            }
          }
          if (_0x2e8c84.extensions && _0x2e8c84.extensions.length) {
            _0x2e8b65.extensions = _0x2e8c84.extensions;
          }
          if (_0x2e8c84.reserved && _0x2e8c84.reserved.length) {
            _0x2e8b65.reserved = _0x2e8c84.reserved;
          }
          if (_0x2e8c84.group) {
            _0x2e8b65.group = true;
          }
          if (_0x2e8c84.comment) {
            _0x2e8b65.comment = _0x2e8c84.comment;
          }
          return _0x2e8b65;
        };
        _0x30d1fa.prototype.toJSON = function (_0x502672) {
          var _0x52a505 = _0x59a309.prototype.toJSON.call(this, _0x502672);
          var _0x5c067d = !!_0x502672 && Boolean(_0x502672.keepComments);
          return _0x41eff0.toObject(["options", _0x52a505 && _0x52a505.options || undefined, "oneofs", _0x59a309.arrayToJSON(this.oneofsArray, _0x502672), "fields", _0x59a309.arrayToJSON(this.fieldsArray.filter(function (_0x22657b) {
            return !_0x22657b.declaringField;
          }), _0x502672) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, 'reserved', this.reserved && this.reserved.length ? this.reserved : undefined, 'group', this.group || undefined, 'nested', _0x52a505 && _0x52a505.nested || undefined, "comment", _0x5c067d ? this.comment : undefined]);
        };
        _0x30d1fa.prototype.resolveAll = function () {
          var _0x54090e = this.fieldsArray;
          for (var _0x5721fe = 0x0; _0x5721fe < _0x54090e.length;) {
            _0x54090e[_0x5721fe++].resolve();
          }
          var _0x38c758 = this.oneofsArray;
          for (_0x5721fe = 0x0; _0x5721fe < _0x38c758.length;) {
            _0x38c758[_0x5721fe++].resolve();
          }
          return _0x59a309.prototype.resolveAll.call(this);
        };
        _0x30d1fa.prototype.get = function (_0x2359bb) {
          return this.fields[_0x2359bb] || this.oneofs && this.oneofs[_0x2359bb] || this.nested && this.nested[_0x2359bb] || null;
        };
        _0x30d1fa.prototype.add = function (_0x58567f) {
          if (this.get(_0x58567f.name)) {
            throw Error("duplicate name '" + _0x58567f.name + "' in " + this);
          }
          if (_0x58567f instanceof _0x52fe20 && undefined === _0x58567f.extend) {
            if (this._fieldsById ? this._fieldsById[_0x58567f.id] : this.fieldsById[_0x58567f.id]) {
              throw Error("duplicate id " + _0x58567f.id + " in " + this);
            }
            if (this.isReservedId(_0x58567f.id)) {
              throw Error("id " + _0x58567f.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x58567f.name)) {
              throw Error("name '" + _0x58567f.name + "' is reserved in " + this);
            }
            if (_0x58567f.parent) {
              _0x58567f.parent.remove(_0x58567f);
            }
            this.fields[_0x58567f.name] = _0x58567f;
            _0x58567f.message = this;
            _0x58567f.onAdd(this);
            return _0x202039(this);
          }
          return _0x58567f instanceof _0x2f4c1b ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x58567f.name] = _0x58567f, _0x58567f.onAdd(this), _0x202039(this)) : _0x59a309.prototype.add.call(this, _0x58567f);
        };
        _0x30d1fa.prototype.remove = function (_0x5889c4) {
          if (_0x5889c4 instanceof _0x52fe20 && undefined === _0x5889c4.extend) {
            if (!this.fields || this.fields[_0x5889c4.name] !== _0x5889c4) {
              throw Error(_0x5889c4 + " is not a member of " + this);
            }
            delete this.fields[_0x5889c4.name];
            _0x5889c4.parent = null;
            _0x5889c4.onRemove(this);
            return _0x202039(this);
          }
          if (_0x5889c4 instanceof _0x2f4c1b) {
            if (!this.oneofs || this.oneofs[_0x5889c4.name] !== _0x5889c4) {
              throw Error(_0x5889c4 + " is not a member of " + this);
            }
            delete this.oneofs[_0x5889c4.name];
            _0x5889c4.parent = null;
            _0x5889c4.onRemove(this);
            return _0x202039(this);
          }
          return _0x59a309.prototype.remove.call(this, _0x5889c4);
        };
        _0x30d1fa.prototype.isReservedId = function (_0x4518a8) {
          return _0x59a309.isReservedId(this.reserved, _0x4518a8);
        };
        _0x30d1fa.prototype.isReservedName = function (_0x24e031) {
          return _0x59a309.isReservedName(this.reserved, _0x24e031);
        };
        _0x30d1fa.prototype.create = function (_0x15e41f) {
          return new this.ctor(_0x15e41f);
        };
        _0x30d1fa.prototype.setup = function () {
          var _0x487258 = this.fullName;
          var _0x473dbd = [];
          for (var _0x1a6e34 = 0x0; _0x1a6e34 < this.fieldsArray.length; ++_0x1a6e34) {
            _0x473dbd.push(this._fieldsArray[_0x1a6e34].resolve().resolvedType);
          }
          this.encode = _0x32cc97(this)({
            'Writer': _0x5b4ab2,
            'types': _0x473dbd,
            'util': _0x41eff0
          });
          this.decode = _0x15281b(this)({
            'Reader': _0x25b75a,
            'types': _0x473dbd,
            'util': _0x41eff0
          });
          this.verify = _0x29886f(this)({
            'types': _0x473dbd,
            'util': _0x41eff0
          });
          this.fromObject = _0x363dfc.fromObject(this)({
            'types': _0x473dbd,
            'util': _0x41eff0
          });
          this.toObject = _0x363dfc.toObject(this)({
            'types': _0x473dbd,
            'util': _0x41eff0
          });
          var _0x470574 = _0x20e735[_0x487258];
          if (_0x470574) {
            var _0x123f7d = Object.create(this);
            _0x123f7d.fromObject = this.fromObject;
            this.fromObject = _0x470574.fromObject.bind(_0x123f7d);
            _0x123f7d.toObject = this.toObject;
            this.toObject = _0x470574.toObject.bind(_0x123f7d);
          }
          return this;
        };
        _0x30d1fa.prototype.encode = function (_0x1ffcdd, _0x19b983) {
          return this.setup().encode(_0x1ffcdd, _0x19b983);
        };
        _0x30d1fa.prototype.encodeDelimited = function (_0x41156c, _0x3b0828) {
          return this.encode(_0x41156c, _0x3b0828 && _0x3b0828.len ? _0x3b0828.fork() : _0x3b0828).ldelim();
        };
        _0x30d1fa.prototype.decode = function (_0x1d9a7a, _0x48e624) {
          return this.setup().decode(_0x1d9a7a, _0x48e624);
        };
        _0x30d1fa.prototype.decodeDelimited = function (_0x12f0a9) {
          if (!(_0x12f0a9 instanceof _0x25b75a)) {
            _0x12f0a9 = _0x25b75a.create(_0x12f0a9);
          }
          return this.decode(_0x12f0a9, _0x12f0a9.uint32());
        };
        _0x30d1fa.prototype.verify = function (_0x15fe57) {
          return this.setup().verify(_0x15fe57);
        };
        _0x30d1fa.prototype.fromObject = function (_0x474260) {
          return this.setup().fromObject(_0x474260);
        };
        _0x30d1fa.prototype.toObject = function (_0x519977, _0x16ac2a) {
          return this.setup().toObject(_0x519977, _0x16ac2a);
        };
        _0x30d1fa.d = function (_0x2060d7) {
          return function (_0xbc895) {
            _0x41eff0.decorateType(_0xbc895, _0x2060d7);
          };
        };
        _0x1b460a.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './field': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './mapfield': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './message': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/message.js',
          './reader': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js',
          './converter': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x58ed49, _0x4a8018, _0x1a9455, _0x5c377b, _0x3dfc07) {
        _0x1a9455.exports = _0x42a500;
        var _0x4e8490 = _0x4a8018("./namespace");
        ((_0x42a500.prototype = Object.create(_0x4e8490.prototype)).constructor = _0x42a500).className = "Root";
        var _0x4c7583;
        var _0x20e994;
        var _0x12124c;
        var _0x5b7496 = _0x4a8018('./field');
        var _0x36e4bc = _0x4a8018("./enum");
        var _0x1a6f1b = _0x4a8018('./oneof');
        var _0x24c0a0 = _0x4a8018("./util");
        function _0x42a500(_0x1e6cf8) {
          _0x4e8490.call(this, '', _0x1e6cf8);
          this.deferred = [];
          this.files = [];
        }
        function _0x67784b() {}
        _0x42a500.fromJSON = function (_0x3e3bd1, _0x3be330) {
          if (!_0x3be330) {
            _0x3be330 = new _0x42a500();
          }
          if (_0x3e3bd1.options) {
            _0x3be330.setOptions(_0x3e3bd1.options);
          }
          return _0x3be330.addJSON(_0x3e3bd1.nested);
        };
        _0x42a500.prototype.resolvePath = _0x24c0a0.path.resolve;
        _0x42a500.prototype.fetch = _0x24c0a0.fetch;
        _0x42a500.prototype.load = function _0xe2d4f9(_0x55e670, _0x4d83e4, _0x680385) {
          if ("function" == typeof _0x4d83e4) {
            _0x680385 = _0x4d83e4;
            _0x4d83e4 = undefined;
          }
          var _0x3d48c4 = this;
          if (!_0x680385) {
            return _0x24c0a0.asPromise(_0xe2d4f9, _0x3d48c4, _0x55e670, _0x4d83e4);
          }
          var _0x5a8454 = _0x680385 === _0x67784b;
          function _0x262d57(_0x44c6f1, _0x296b0e) {
            if (_0x680385) {
              var _0x364f89 = _0x680385;
              _0x680385 = null;
              if (_0x5a8454) {
                throw _0x44c6f1;
              }
              _0x364f89(_0x44c6f1, _0x296b0e);
            }
          }
          function _0x414253(_0xd56d66) {
            var _0x25905b = _0xd56d66.lastIndexOf('google/protobuf/');
            if (_0x25905b > -0x1) {
              var _0x190728 = _0xd56d66.substring(_0x25905b);
              if (_0x190728 in _0x12124c) {
                return _0x190728;
              }
            }
            return null;
          }
          function _0x205fff(_0x2bfabe, _0xa0733) {
            try {
              if (_0x24c0a0.isString(_0xa0733) && '{' === _0xa0733.charAt(0x0)) {
                _0xa0733 = JSON.parse(_0xa0733);
              }
              if (_0x24c0a0.isString(_0xa0733)) {
                _0x20e994.filename = _0x2bfabe;
                var _0x14538c;
                var _0x26b6ca = _0x20e994(_0xa0733, _0x3d48c4, _0x4d83e4);
                var _0x459ce3 = 0x0;
                if (_0x26b6ca.imports) {
                  for (; _0x459ce3 < _0x26b6ca.imports.length; ++_0x459ce3) {
                    if (_0x14538c = _0x414253(_0x26b6ca.imports[_0x459ce3]) || _0x3d48c4.resolvePath(_0x2bfabe, _0x26b6ca.imports[_0x459ce3])) {
                      _0x210454(_0x14538c);
                    }
                  }
                }
                if (_0x26b6ca.weakImports) {
                  for (_0x459ce3 = 0x0; _0x459ce3 < _0x26b6ca.weakImports.length; ++_0x459ce3) {
                    if (_0x14538c = _0x414253(_0x26b6ca.weakImports[_0x459ce3]) || _0x3d48c4.resolvePath(_0x2bfabe, _0x26b6ca.weakImports[_0x459ce3])) {
                      _0x210454(_0x14538c, true);
                    }
                  }
                }
              } else {
                _0x3d48c4.setOptions(_0xa0733.options).addJSON(_0xa0733.nested);
              }
            } catch (_0x5e77e8) {
              _0x262d57(_0x5e77e8);
            }
            if (!(_0x5a8454 || _0x53be69)) {
              _0x262d57(null, _0x3d48c4);
            }
          }
          function _0x210454(_0x5ede49, _0x257fc2) {
            if (!(_0x3d48c4.files.indexOf(_0x5ede49) > -0x1)) {
              _0x3d48c4.files.push(_0x5ede49);
              if (_0x5ede49 in _0x12124c) {
                if (_0x5a8454) {
                  _0x205fff(_0x5ede49, _0x12124c[_0x5ede49]);
                } else {
                  ++_0x53be69;
                  setTimeout(function () {
                    --_0x53be69;
                    _0x205fff(_0x5ede49, _0x12124c[_0x5ede49]);
                  });
                }
              } else {
                if (_0x5a8454) {
                  var _0x297009;
                  try {
                    _0x297009 = _0x24c0a0.fs.readFileSync(_0x5ede49).toString("utf8");
                  } catch (_0x139f85) {
                    return void (_0x257fc2 || _0x262d57(_0x139f85));
                  }
                  _0x205fff(_0x5ede49, _0x297009);
                } else {
                  ++_0x53be69;
                  _0x3d48c4.fetch(_0x5ede49, function (_0x5a13d1, _0x4faf36) {
                    --_0x53be69;
                    if (_0x680385) {
                      if (_0x5a13d1) {
                        if (_0x257fc2) {
                          if (!_0x53be69) {
                            _0x262d57(null, _0x3d48c4);
                          }
                        } else {
                          _0x262d57(_0x5a13d1);
                        }
                      } else {
                        _0x205fff(_0x5ede49, _0x4faf36);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x53be69 = 0x0;
          if (_0x24c0a0.isString(_0x55e670)) {
            _0x55e670 = [_0x55e670];
          }
          var _0x5cf7d1;
          for (var _0x1b5641 = 0x0; _0x1b5641 < _0x55e670.length; ++_0x1b5641) {
            if (_0x5cf7d1 = _0x3d48c4.resolvePath('', _0x55e670[_0x1b5641])) {
              _0x210454(_0x5cf7d1);
            }
          }
          if (_0x5a8454) {
            return _0x3d48c4;
          }
          if (!_0x53be69) {
            _0x262d57(null, _0x3d48c4);
          }
        };
        _0x42a500.prototype.loadSync = function (_0xed93b3, _0x566932) {
          if (!_0x24c0a0.isNode) {
            throw Error("not supported");
          }
          return this.load(_0xed93b3, _0x566932, _0x67784b);
        };
        _0x42a500.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x38e862) {
              return "'extend " + _0x38e862.extend + "' in " + _0x38e862.parent.fullName;
            }).join(", "));
          }
          return _0x4e8490.prototype.resolveAll.call(this);
        };
        var _0x7b1022 = /^[A-Z]/;
        function _0x46d08c(_0x422648, _0x4fe67d) {
          var _0x11bd8a = _0x4fe67d.parent.lookup(_0x4fe67d.extend);
          if (_0x11bd8a) {
            var _0x4a02d2 = new _0x5b7496(_0x4fe67d.fullName, _0x4fe67d.id, _0x4fe67d.type, _0x4fe67d.rule, undefined, _0x4fe67d.options);
            _0x4a02d2.declaringField = _0x4fe67d;
            _0x4fe67d.extensionField = _0x4a02d2;
            _0x11bd8a.add(_0x4a02d2);
            return true;
          }
          return false;
        }
        _0x42a500.prototype._handleAdd = function (_0x6c2c85) {
          if (_0x6c2c85 instanceof _0x5b7496) {
            if (!(undefined === _0x6c2c85.extend || _0x6c2c85.extensionField || _0x46d08c(0x0, _0x6c2c85))) {
              this.deferred.push(_0x6c2c85);
            }
          } else {
            if (_0x6c2c85 instanceof _0x36e4bc) {
              if (_0x7b1022.test(_0x6c2c85.name)) {
                _0x6c2c85.parent[_0x6c2c85.name] = _0x6c2c85.values;
              }
            } else {
              if (!(_0x6c2c85 instanceof _0x1a6f1b)) {
                if (_0x6c2c85 instanceof _0x4c7583) {
                  for (var _0x13c859 = 0x0; _0x13c859 < this.deferred.length;) {
                    if (_0x46d08c(0x0, this.deferred[_0x13c859])) {
                      this.deferred.splice(_0x13c859, 0x1);
                    } else {
                      ++_0x13c859;
                    }
                  }
                }
                for (var _0xa1ac0f = 0x0; _0xa1ac0f < _0x6c2c85.nestedArray.length; ++_0xa1ac0f) {
                  this._handleAdd(_0x6c2c85._nestedArray[_0xa1ac0f]);
                }
                if (_0x7b1022.test(_0x6c2c85.name)) {
                  _0x6c2c85.parent[_0x6c2c85.name] = _0x6c2c85;
                }
              }
            }
          }
        };
        _0x42a500.prototype._handleRemove = function (_0x446858) {
          if (_0x446858 instanceof _0x5b7496) {
            if (undefined !== _0x446858.extend) {
              if (_0x446858.extensionField) {
                _0x446858.extensionField.parent.remove(_0x446858.extensionField);
                _0x446858.extensionField = null;
              } else {
                var _0x154810 = this.deferred.indexOf(_0x446858);
                if (_0x154810 > -0x1) {
                  this.deferred.splice(_0x154810, 0x1);
                }
              }
            }
          } else {
            if (_0x446858 instanceof _0x36e4bc) {
              if (_0x7b1022.test(_0x446858.name)) {
                delete _0x446858.parent[_0x446858.name];
              }
            } else {
              if (_0x446858 instanceof _0x4e8490) {
                for (var _0x239b4d = 0x0; _0x239b4d < _0x446858.nestedArray.length; ++_0x239b4d) {
                  this._handleRemove(_0x446858._nestedArray[_0x239b4d]);
                }
                if (_0x7b1022.test(_0x446858.name)) {
                  delete _0x446858.parent[_0x446858.name];
                }
              }
            }
          }
        };
        _0x42a500._configure = function (_0x3972b5, _0x81005c, _0x769824) {
          _0x4c7583 = _0x3972b5;
          _0x20e994 = _0x81005c;
          _0x12124c = _0x769824;
        };
        _0x1a9455.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x41c037, _0x57070c, _0x181128, _0x5d9c6b, _0x5950a8) {
        var _0xcee70c;
        var _0x4de8ab;
        var _0x499dcb = _0x181128.exports = _0x57070c('./util/minimal');
        var _0x3f7d4a = _0x57070c("./roots");
        _0x499dcb.codegen = _0x57070c('@protobufjs/codegen');
        _0x499dcb.fetch = _0x57070c('@protobufjs/fetch');
        _0x499dcb.path = _0x57070c("@protobufjs/path");
        _0x499dcb.fs = _0x499dcb.inquire('fs');
        _0x499dcb.toArray = function (_0x3ad960) {
          if (_0x3ad960) {
            var _0x4d279c = Object.keys(_0x3ad960);
            var _0x26d7d7 = new Array(_0x4d279c.length);
            for (var _0x12cdf9 = 0x0; _0x12cdf9 < _0x4d279c.length;) {
              _0x26d7d7[_0x12cdf9] = _0x3ad960[_0x4d279c[_0x12cdf9++]];
            }
            return _0x26d7d7;
          }
          return [];
        };
        _0x499dcb.toObject = function (_0x5e2ed6) {
          var _0x54fd97 = {};
          for (var _0x3e5b5c = 0x0; _0x3e5b5c < _0x5e2ed6.length;) {
            var _0x3d6e41 = _0x5e2ed6[_0x3e5b5c++];
            var _0x508282 = _0x5e2ed6[_0x3e5b5c++];
            if (undefined !== _0x508282) {
              _0x54fd97[_0x3d6e41] = _0x508282;
            }
          }
          return _0x54fd97;
        };
        var _0xe10ca0 = /\\/g;
        var _0x658a01 = /"/g;
        _0x499dcb.isReserved = function (_0x23e1c6) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x23e1c6);
        };
        _0x499dcb.safeProp = function (_0x187bb3) {
          return !/^[$\w_]+$/.test(_0x187bb3) || _0x499dcb.isReserved(_0x187bb3) ? "[\"" + _0x187bb3.replace(_0xe10ca0, "\\\\").replace(_0x658a01, "\\\"") + "\"]" : '.' + _0x187bb3;
        };
        _0x499dcb.ucFirst = function (_0x5c7571) {
          return _0x5c7571.charAt(0x0).toUpperCase() + _0x5c7571.substring(0x1);
        };
        var _0x1a030d = /_([a-z])/g;
        _0x499dcb.camelCase = function (_0x4c5eb1) {
          return _0x4c5eb1.substring(0x0, 0x1) + _0x4c5eb1.substring(0x1).replace(_0x1a030d, function (_0x473699, _0x169d9e) {
            return _0x169d9e.toUpperCase();
          });
        };
        _0x499dcb.compareFieldsById = function (_0x38dc33, _0xc45574) {
          return _0x38dc33.id - _0xc45574.id;
        };
        _0x499dcb.decorateType = function (_0x536287, _0xebf3cb) {
          if (_0x536287.$type) {
            if (_0xebf3cb && _0x536287.$type.name !== _0xebf3cb) {
              _0x499dcb.decorateRoot.remove(_0x536287.$type);
              _0x536287.$type.name = _0xebf3cb;
              _0x499dcb.decorateRoot.add(_0x536287.$type);
            }
            return _0x536287.$type;
          }
          if (!_0xcee70c) {
            _0xcee70c = _0x57070c("./type");
          }
          var _0x334244 = new _0xcee70c(_0xebf3cb || _0x536287.name);
          _0x499dcb.decorateRoot.add(_0x334244);
          _0x334244.ctor = _0x536287;
          Object.defineProperty(_0x536287, '$type', {
            'value': _0x334244,
            'enumerable': false
          });
          Object.defineProperty(_0x536287.prototype, '$type', {
            'value': _0x334244,
            'enumerable': false
          });
          return _0x334244;
        };
        var _0x30ab5c = 0x0;
        _0x499dcb.decorateEnum = function (_0x285b4d) {
          if (_0x285b4d.$type) {
            return _0x285b4d.$type;
          }
          if (!_0x4de8ab) {
            _0x4de8ab = _0x57070c("./enum");
          }
          var _0x40d126 = new _0x4de8ab('Enum' + _0x30ab5c++, _0x285b4d);
          _0x499dcb.decorateRoot.add(_0x40d126);
          Object.defineProperty(_0x285b4d, "$type", {
            'value': _0x40d126,
            'enumerable': false
          });
          return _0x40d126;
        };
        _0x499dcb.setProperty = function (_0x21f621, _0xd423b6, _0xb0a09b) {
          if ('object' != typeof _0x21f621) {
            throw TypeError("dst must be an object");
          }
          if (!_0xd423b6) {
            throw TypeError("path must be specified");
          }
          return function _0xa32018(_0x1b34ae, _0x5eb185, _0x1a5b06) {
            var _0x5618a3 = _0x5eb185.shift();
            if (_0x5eb185.length > 0x0) {
              _0x1b34ae[_0x5618a3] = _0xa32018(_0x1b34ae[_0x5618a3] || {}, _0x5eb185, _0x1a5b06);
            } else {
              var _0x343a54 = _0x1b34ae[_0x5618a3];
              if (_0x343a54) {
                _0x1a5b06 = [].concat(_0x343a54).concat(_0x1a5b06);
              }
              _0x1b34ae[_0x5618a3] = _0x1a5b06;
            }
            return _0x1b34ae;
          }(_0x21f621, _0xd423b6 = _0xd423b6.split('.'), _0xb0a09b);
        };
        Object.defineProperty(_0x499dcb, "decorateRoot", {
          'get': function () {
            return _0x3f7d4a.decorated || (_0x3f7d4a.decorated = new (_0x57070c("./root"))());
          }
        });
        _0x181128.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/roots.js',
          '@protobufjs/codegen': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          '@protobufjs/path': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/@protobufjs/path/index.js',
          './type': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (_0x395c23, _0x20c577, _0x21f34e, _0x118070, _0x385e0d) {
        _0x21f34e.exports = _0x39b34e;
        _0x39b34e.className = "ReflectionObject";
        var _0x167531;
        var _0x12fedd = _0x20c577("./util");
        function _0x39b34e(_0x2b8477, _0x4c5d64) {
          if (!_0x12fedd.isString(_0x2b8477)) {
            throw TypeError("name must be a string");
          }
          if (_0x4c5d64 && !_0x12fedd.isObject(_0x4c5d64)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x4c5d64;
          this.parsedOptions = null;
          this.name = _0x2b8477;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x39b34e.prototype, {
          'root': {
            'get': function () {
              for (var _0x15d541 = this; null !== _0x15d541.parent;) {
                _0x15d541 = _0x15d541.parent;
              }
              return _0x15d541;
            }
          },
          'fullName': {
            'get': function () {
              var _0x5e7847 = [this.name];
              for (var _0x4427cd = this.parent; _0x4427cd;) {
                _0x5e7847.unshift(_0x4427cd.name);
                _0x4427cd = _0x4427cd.parent;
              }
              return _0x5e7847.join('.');
            }
          }
        });
        _0x39b34e.prototype.toJSON = function () {
          throw Error();
        };
        _0x39b34e.prototype.onAdd = function (_0x5cbd5d) {
          if (this.parent && this.parent !== _0x5cbd5d) {
            this.parent.remove(this);
          }
          this.parent = _0x5cbd5d;
          this.resolved = false;
          var _0x5effef = _0x5cbd5d.root;
          if (_0x5effef instanceof _0x167531) {
            _0x5effef._handleAdd(this);
          }
        };
        _0x39b34e.prototype.onRemove = function (_0xd37f8d) {
          var _0x2bb13d = _0xd37f8d.root;
          if (_0x2bb13d instanceof _0x167531) {
            _0x2bb13d._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x39b34e.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x167531) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x39b34e.prototype.getOption = function (_0x4d1298) {
          if (this.options) {
            return this.options[_0x4d1298];
          }
        };
        _0x39b34e.prototype.setOption = function (_0x137ebe, _0x25ddc2, _0x18061f) {
          if (!(_0x18061f && this.options && undefined !== this.options[_0x137ebe])) {
            (this.options || (this.options = {}))[_0x137ebe] = _0x25ddc2;
          }
          return this;
        };
        _0x39b34e.prototype.setParsedOption = function (_0x4cb8c9, _0x2c836c, _0x3c3c15) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x48a12c = this.parsedOptions;
          if (_0x3c3c15) {
            var _0x1a54c0 = _0x48a12c.find(function (_0x2b0124) {
              return Object.prototype.hasOwnProperty.call(_0x2b0124, _0x4cb8c9);
            });
            if (_0x1a54c0) {
              var _0x223ccc = _0x1a54c0[_0x4cb8c9];
              _0x12fedd.setProperty(_0x223ccc, _0x3c3c15, _0x2c836c);
            } else {
              (_0x1a54c0 = {})[_0x4cb8c9] = _0x12fedd.setProperty({}, _0x3c3c15, _0x2c836c);
              _0x48a12c.push(_0x1a54c0);
            }
          } else {
            var _0x43a2da = {
              _0x4cb8c9: _0x2c836c
            };
            _0x48a12c.push(_0x43a2da);
          }
          return this;
        };
        _0x39b34e.prototype.setOptions = function (_0x14ced0, _0x22c723) {
          if (_0x14ced0) {
            var _0x296210 = Object.keys(_0x14ced0);
            for (var _0x349b22 = 0x0; _0x349b22 < _0x296210.length; ++_0x349b22) {
              this.setOption(_0x296210[_0x349b22], _0x14ced0[_0x296210[_0x349b22]], _0x22c723);
            }
          }
          return this;
        };
        _0x39b34e.prototype.toString = function () {
          var _0x4e0c37 = this.constructor.className;
          var _0x4da03b = this.fullName;
          return _0x4da03b.length ? _0x4e0c37 + " " + _0x4da03b : _0x4e0c37;
        };
        _0x39b34e._configure = function (_0x24b7f5) {
          _0x167531 = _0x24b7f5;
        };
        _0x21f34e.exports;
      }, function () {
        return {
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0xcee870, _0x451aad, _0x392e31, _0x5101b8, _0x51f3fc) {
        _0x392e31.exports = _0x7006d2;
        var _0x21c91f = _0x451aad("./object");
        ((_0x7006d2.prototype = Object.create(_0x21c91f.prototype)).constructor = _0x7006d2).className = "Enum";
        var _0x233642 = _0x451aad('./namespace');
        var _0x2f8458 = _0x451aad("./util");
        function _0x7006d2(_0x445251, _0x29f188, _0xb62f12, _0x1cb7d7, _0x9c98dd) {
          _0x21c91f.call(this, _0x445251, _0xb62f12);
          if (_0x29f188 && "object" != typeof _0x29f188) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x1cb7d7;
          this.comments = _0x9c98dd || {};
          this.reserved = undefined;
          if (_0x29f188) {
            var _0x30fbd0 = Object.keys(_0x29f188);
            for (var _0x8bb299 = 0x0; _0x8bb299 < _0x30fbd0.length; ++_0x8bb299) {
              if ("number" == typeof _0x29f188[_0x30fbd0[_0x8bb299]]) {
                this.valuesById[this.values[_0x30fbd0[_0x8bb299]] = _0x29f188[_0x30fbd0[_0x8bb299]]] = _0x30fbd0[_0x8bb299];
              }
            }
          }
        }
        _0x7006d2.fromJSON = function (_0x213668, _0x374c79) {
          var _0x2c4115 = new _0x7006d2(_0x213668, _0x374c79.values, _0x374c79.options, _0x374c79.comment, _0x374c79.comments);
          _0x2c4115.reserved = _0x374c79.reserved;
          return _0x2c4115;
        };
        _0x7006d2.prototype.toJSON = function (_0x39fab5) {
          var _0x1c0787 = !!_0x39fab5 && Boolean(_0x39fab5.keepComments);
          return _0x2f8458.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, 'comment', _0x1c0787 ? this.comment : undefined, "comments", _0x1c0787 ? this.comments : undefined]);
        };
        _0x7006d2.prototype.add = function (_0x1a7b92, _0x45d5ac, _0x114424) {
          if (!_0x2f8458.isString(_0x1a7b92)) {
            throw TypeError("name must be a string");
          }
          if (!_0x2f8458.isInteger(_0x45d5ac)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x1a7b92]) {
            throw Error("duplicate name '" + _0x1a7b92 + "' in " + this);
          }
          if (this.isReservedId(_0x45d5ac)) {
            throw Error("id " + _0x45d5ac + " is reserved in " + this);
          }
          if (this.isReservedName(_0x1a7b92)) {
            throw Error("name '" + _0x1a7b92 + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x45d5ac]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x45d5ac + " in " + this);
            }
            this.values[_0x1a7b92] = _0x45d5ac;
          } else {
            this.valuesById[this.values[_0x1a7b92] = _0x45d5ac] = _0x1a7b92;
          }
          this.comments[_0x1a7b92] = _0x114424 || null;
          return this;
        };
        _0x7006d2.prototype.remove = function (_0x3ba5b6) {
          if (!_0x2f8458.isString(_0x3ba5b6)) {
            throw TypeError("name must be a string");
          }
          var _0x4579b8 = this.values[_0x3ba5b6];
          if (null == _0x4579b8) {
            throw Error("name '" + _0x3ba5b6 + "' does not exist in " + this);
          }
          delete this.valuesById[_0x4579b8];
          delete this.values[_0x3ba5b6];
          delete this.comments[_0x3ba5b6];
          return this;
        };
        _0x7006d2.prototype.isReservedId = function (_0x28dc9b) {
          return _0x233642.isReservedId(this.reserved, _0x28dc9b);
        };
        _0x7006d2.prototype.isReservedName = function (_0x311b1e) {
          return _0x233642.isReservedName(this.reserved, _0x311b1e);
        };
        _0x392e31.exports;
      }, function () {
        return {
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (_0x4d202e, _0x2c35e2, _0x59c149, _0x203292, _0x1f6a80) {
        _0x59c149.exports = function (_0xefeae7) {
          var _0x1c4efe;
          var _0x4d95e7 = _0x262bb0.codegen(['m', 'w'], _0xefeae7.name + "$encode")('if(!w)')("w=Writer.create()");
          var _0x315fd9 = _0xefeae7.fieldsArray.slice().sort(_0x262bb0.compareFieldsById);
          for (var _0x1dbf12 = 0x0; _0x1dbf12 < _0x315fd9.length; ++_0x1dbf12) {
            var _0x19a3a2 = _0x315fd9[_0x1dbf12].resolve();
            var _0xf956bc = _0xefeae7._fieldsArray.indexOf(_0x19a3a2);
            var _0x2c6b8c = _0x19a3a2.resolvedType instanceof _0x532481 ? 'int32' : _0x19a3a2.type;
            var _0x4e52b1 = _0x4b42d4.basic[_0x2c6b8c];
            _0x1c4efe = 'm' + _0x262bb0.safeProp(_0x19a3a2.name);
            if (_0x19a3a2.map) {
              _0x4d95e7("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x1c4efe, _0x19a3a2.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x1c4efe)('w.uint32(%i).fork().uint32(%i).%s(ks[i])', (_0x19a3a2.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x4b42d4.mapKey[_0x19a3a2.keyType], _0x19a3a2.keyType);
              if (undefined === _0x4e52b1) {
                _0x4d95e7("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", _0xf956bc, _0x1c4efe);
              } else {
                _0x4d95e7(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x4e52b1, _0x2c6b8c, _0x1c4efe);
              }
              _0x4d95e7('}')('}');
            } else if (_0x19a3a2.repeated) {
              _0x4d95e7("if(%s!=null&&%s.length){", _0x1c4efe, _0x1c4efe);
              if (_0x19a3a2.packed && undefined !== _0x4b42d4.packed[_0x2c6b8c]) {
                _0x4d95e7("w.uint32(%i).fork()", (_0x19a3a2.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x1c4efe)("w.%s(%s[i])", _0x2c6b8c, _0x1c4efe)('w.ldelim()');
              } else {
                _0x4d95e7("for(var i=0;i<%s.length;++i)", _0x1c4efe);
                if (undefined === _0x4e52b1) {
                  if (_0x19a3a2.resolvedType.group) {
                    _0x4d95e7("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0xf956bc, _0x1c4efe + "[i]", (_0x19a3a2.id << 0x3 | 0x3) >>> 0x0, (_0x19a3a2.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x4d95e7("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0xf956bc, _0x1c4efe + "[i]", (_0x19a3a2.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x4d95e7("w.uint32(%i).%s(%s[i])", (_0x19a3a2.id << 0x3 | _0x4e52b1) >>> 0x0, _0x2c6b8c, _0x1c4efe);
                }
              }
              _0x4d95e7('}');
            } else {
              if (_0x19a3a2.optional) {
                _0x4d95e7('if(%s!=null&&Object.hasOwnProperty.call(m,%j))', _0x1c4efe, _0x19a3a2.name);
              }
              if (undefined === _0x4e52b1) {
                if (_0x19a3a2.resolvedType.group) {
                  _0x4d95e7("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0xf956bc, _0x1c4efe, (_0x19a3a2.id << 0x3 | 0x3) >>> 0x0, (_0x19a3a2.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x4d95e7("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0xf956bc, _0x1c4efe, (_0x19a3a2.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x4d95e7("w.uint32(%i).%s(%s)", (_0x19a3a2.id << 0x3 | _0x4e52b1) >>> 0x0, _0x2c6b8c, _0x1c4efe);
              }
            }
          }
          return _0x4d95e7("return w");
        };
        var _0x532481 = _0x2c35e2("./enum");
        var _0x4b42d4 = _0x2c35e2("./types");
        var _0x262bb0 = _0x2c35e2("./util");
        _0x59c149.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x1a741f, _0x321606, _0x174764, _0x54518b, _0x2dda77) {
        var _0x5776cb = _0x174764.exports = _0x321606('./index-minimal');
        _0x5776cb.build = "light";
        _0x5776cb.load = function (_0x118f64, _0x44018e, _0x317b5a) {
          if ("function" == typeof _0x44018e) {
            _0x317b5a = _0x44018e;
            _0x44018e = new _0x5776cb.Root();
          } else if (!_0x44018e) {
            _0x44018e = new _0x5776cb.Root();
          }
          return _0x44018e.load(_0x118f64, _0x317b5a);
        };
        _0x5776cb.loadSync = function (_0x2f35a4, _0x1e8b47) {
          if (!_0x1e8b47) {
            _0x1e8b47 = new _0x5776cb.Root();
          }
          return _0x1e8b47.loadSync(_0x2f35a4);
        };
        _0x5776cb.encoder = _0x321606("./encoder");
        _0x5776cb.decoder = _0x321606("./decoder");
        _0x5776cb.verifier = _0x321606("./verifier");
        _0x5776cb.converter = _0x321606("./converter");
        _0x5776cb.ReflectionObject = _0x321606("./object");
        _0x5776cb.Namespace = _0x321606("./namespace");
        _0x5776cb.Root = _0x321606('./root');
        _0x5776cb.Enum = _0x321606("./enum");
        _0x5776cb.Type = _0x321606("./type");
        _0x5776cb.Field = _0x321606("./field");
        _0x5776cb.OneOf = _0x321606("./oneof");
        _0x5776cb.MapField = _0x321606("./mapfield");
        _0x5776cb.Service = _0x321606('./service');
        _0x5776cb.Method = _0x321606("./method");
        _0x5776cb.Message = _0x321606('./message');
        _0x5776cb.wrappers = _0x321606("./wrappers");
        _0x5776cb.types = _0x321606("./types");
        _0x5776cb.util = _0x321606("./util");
        _0x5776cb.ReflectionObject._configure(_0x5776cb.Root);
        _0x5776cb.Namespace._configure(_0x5776cb.Type, _0x5776cb.Service, _0x5776cb.Enum);
        _0x5776cb.Root._configure(_0x5776cb.Type);
        _0x5776cb.Field._configure(_0x5776cb.Type);
        _0x174764.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js',
          './converter': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './oneof': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './mapfield': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './message': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/message.js',
          './wrappers': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0x1f344b, _0x4cecff, _0x43326b, _0x2c86e8, _0xb529bb) {
        _0x43326b.exports = _0x396c8e;
        var _0x244a4e = /[\s{}=;:[\],'"()<>]/g;
        var _0xc67121 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x537129 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x4bb8e9 = /^ *[*/]+ */;
        var _0x2befd6 = /^\s*\*?\/*/;
        var _0x35b3b4 = /\n/g;
        var _0x36c478 = /\s/;
        var _0x4b33be = /\\(.?)/g;
        var _0x18ddbb = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0x181b83(_0x3bce1b) {
          return _0x3bce1b.replace(_0x4b33be, function (_0x553231, _0x4d8aea) {
            switch (_0x4d8aea) {
              case "\\":
              case '':
                return _0x4d8aea;
              default:
                return _0x18ddbb[_0x4d8aea] || '';
            }
          });
        }
        function _0x396c8e(_0x13dc88, _0x2d1cac) {
          _0x13dc88 = _0x13dc88.toString();
          var _0x1e10ab = 0x0;
          var _0xffc8b2 = _0x13dc88.length;
          var _0x561d70 = 0x1;
          var _0x4a4d8d = null;
          var _0x387298 = null;
          var _0x4796c9 = 0x0;
          var _0x3c014a = false;
          var _0x30aba3 = false;
          var _0xcd4816 = [];
          var _0x2df88f = null;
          function _0x5cb35e(_0x43a82a, _0x13d80e, _0x128618) {
            _0x4a4d8d = _0x13dc88.charAt(_0x43a82a++);
            _0x4796c9 = _0x561d70;
            _0x3c014a = false;
            _0x30aba3 = _0x128618;
            var _0x4460db;
            var _0x3ee992 = _0x43a82a - (_0x2d1cac ? 0x2 : 0x3);
            do {
              if (--_0x3ee992 < 0x0 || "\n" === (_0x4460db = _0x13dc88.charAt(_0x3ee992))) {
                _0x3c014a = true;
                break;
              }
            } while (" " === _0x4460db || "\t" === _0x4460db);
            var _0x3c20cc = _0x13dc88.substring(_0x43a82a, _0x13d80e).split(_0x35b3b4);
            for (var _0x3899d9 = 0x0; _0x3899d9 < _0x3c20cc.length; ++_0x3899d9) {
              _0x3c20cc[_0x3899d9] = _0x3c20cc[_0x3899d9].replace(_0x2d1cac ? _0x2befd6 : _0x4bb8e9, '').trim();
            }
            _0x387298 = _0x3c20cc.join("\n").trim();
          }
          function _0x42e76b(_0x590146) {
            var _0x1cc2fd = _0x5367a4(_0x590146);
            var _0x547f78 = _0x13dc88.substring(_0x590146, _0x1cc2fd);
            return /^\s*\/{1,2}/.test(_0x547f78);
          }
          function _0x5367a4(_0xe0d321) {
            for (var _0x55d59f = _0xe0d321; _0x55d59f < _0xffc8b2 && "\n" !== _0x13dc88.charAt(_0x55d59f);) {
              _0x55d59f++;
            }
            return _0x55d59f;
          }
          function _0xd8885d() {
            if (_0xcd4816.length > 0x0) {
              return _0xcd4816.shift();
            }
            if (_0x2df88f) {
              return function () {
                var _0x246965 = "'" === _0x2df88f ? _0x537129 : _0xc67121;
                _0x246965.lastIndex = _0x1e10ab - 0x1;
                var _0x42aa41 = _0x246965.exec(_0x13dc88);
                if (!_0x42aa41) {
                  throw Error("illegal string (line " + _0x561d70 + ')');
                }
                _0x1e10ab = _0x246965.lastIndex;
                _0x1aa404(_0x2df88f);
                _0x2df88f = null;
                return _0x181b83(_0x42aa41[0x1]);
              }();
            }
            var _0x57aebc;
            var _0x19ecab;
            var _0x3ea333;
            var _0xfc71a7;
            var _0x199264;
            var _0x35e364 = 0x0 === _0x1e10ab;
            do {
              if (_0x1e10ab === _0xffc8b2) {
                return null;
              }
              for (_0x57aebc = false; _0x36c478.test(_0x3ea333 = _0x13dc88.charAt(_0x1e10ab));) {
                if ("\n" === _0x3ea333) {
                  _0x35e364 = true;
                  ++_0x561d70;
                }
                if (++_0x1e10ab === _0xffc8b2) {
                  return null;
                }
              }
              if ('/' === _0x13dc88.charAt(_0x1e10ab)) {
                if (++_0x1e10ab === _0xffc8b2) {
                  throw Error("illegal comment (line " + _0x561d70 + ')');
                }
                if ('/' === _0x13dc88.charAt(_0x1e10ab)) {
                  if (_0x2d1cac) {
                    _0xfc71a7 = _0x1e10ab;
                    _0x199264 = false;
                    if (_0x42e76b(_0x1e10ab)) {
                      _0x199264 = true;
                      do {
                        if ((_0x1e10ab = _0x5367a4(_0x1e10ab)) === _0xffc8b2) {
                          break;
                        }
                        _0x1e10ab++;
                      } while (_0x42e76b(_0x1e10ab));
                    } else {
                      _0x1e10ab = Math.min(_0xffc8b2, _0x5367a4(_0x1e10ab) + 0x1);
                    }
                    if (_0x199264) {
                      _0x5cb35e(_0xfc71a7, _0x1e10ab, _0x35e364);
                    }
                    _0x561d70++;
                    _0x57aebc = true;
                  } else {
                    for (_0x199264 = '/' === _0x13dc88.charAt(_0xfc71a7 = _0x1e10ab + 0x1); "\n" !== _0x13dc88.charAt(++_0x1e10ab);) {
                      if (_0x1e10ab === _0xffc8b2) {
                        return null;
                      }
                    }
                    ++_0x1e10ab;
                    if (_0x199264) {
                      _0x5cb35e(_0xfc71a7, _0x1e10ab - 0x1, _0x35e364);
                    }
                    ++_0x561d70;
                    _0x57aebc = true;
                  }
                } else {
                  if ('*' !== (_0x3ea333 = _0x13dc88.charAt(_0x1e10ab))) {
                    return '/';
                  }
                  _0xfc71a7 = _0x1e10ab + 0x1;
                  _0x199264 = _0x2d1cac || '*' === _0x13dc88.charAt(_0xfc71a7);
                  do {
                    if ("\n" === _0x3ea333) {
                      ++_0x561d70;
                    }
                    if (++_0x1e10ab === _0xffc8b2) {
                      throw Error("illegal comment (line " + _0x561d70 + ')');
                    }
                    _0x19ecab = _0x3ea333;
                    _0x3ea333 = _0x13dc88.charAt(_0x1e10ab);
                  } while ('*' !== _0x19ecab || '/' !== _0x3ea333);
                  ++_0x1e10ab;
                  if (_0x199264) {
                    _0x5cb35e(_0xfc71a7, _0x1e10ab - 0x2, _0x35e364);
                  }
                  _0x57aebc = true;
                }
              }
            } while (_0x57aebc);
            var _0x550238 = _0x1e10ab;
            _0x244a4e.lastIndex = 0x0;
            if (!_0x244a4e.test(_0x13dc88.charAt(_0x550238++))) {
              for (; _0x550238 < _0xffc8b2 && !_0x244a4e.test(_0x13dc88.charAt(_0x550238));) {
                ++_0x550238;
              }
            }
            var _0x44055d = _0x13dc88.substring(_0x1e10ab, _0x1e10ab = _0x550238);
            if (!("\"" !== _0x44055d && "'" !== _0x44055d)) {
              _0x2df88f = _0x44055d;
            }
            return _0x44055d;
          }
          function _0x1aa404(_0x3deb12) {
            _0xcd4816.push(_0x3deb12);
          }
          function _0x3ee8ff() {
            if (!_0xcd4816.length) {
              var _0x3bb600 = _0xd8885d();
              if (null === _0x3bb600) {
                return null;
              }
              _0x1aa404(_0x3bb600);
            }
            return _0xcd4816[0x0];
          }
          return Object.defineProperty({
            'next': _0xd8885d,
            'peek': _0x3ee8ff,
            'push': _0x1aa404,
            'skip': function (_0x4cd0c3, _0x1b9af3) {
              var _0x54abc6 = _0x3ee8ff();
              if (_0x54abc6 === _0x4cd0c3) {
                _0xd8885d();
                return true;
              }
              if (!_0x1b9af3) {
                throw Error("illegal " + ("token '" + _0x54abc6 + "', '" + _0x4cd0c3 + "' expected") + " (line " + _0x561d70 + ')');
              }
              return false;
            },
            'cmnt': function (_0x1bfe41) {
              var _0x3a0792 = null;
              if (undefined === _0x1bfe41) {
                if (_0x4796c9 === _0x561d70 - 0x1 && (_0x2d1cac || '*' === _0x4a4d8d || _0x3c014a)) {
                  _0x3a0792 = _0x30aba3 ? _0x387298 : null;
                }
              } else {
                if (_0x4796c9 < _0x1bfe41) {
                  _0x3ee8ff();
                }
                if (!(_0x4796c9 !== _0x1bfe41 || _0x3c014a || !_0x2d1cac && '/' !== _0x4a4d8d)) {
                  _0x3a0792 = _0x30aba3 ? null : _0x387298;
                }
              }
              return _0x3a0792;
            }
          }, "line", {
            'get': function () {
              return _0x561d70;
            }
          });
        }
        _0x396c8e.unescape = _0x181b83;
        _0x43326b.exports;
      }, {});
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x5d7b50, _0xa6a793, _0x530554, _0x51098b, _0x100583) {
        _0x530554.exports = _0xe5ad8;
        _0xe5ad8.filename = null;
        _0xe5ad8.defaults = {
          'keepCase': false
        };
        var _0x386760 = _0xa6a793("./tokenize");
        var _0x26b7ee = _0xa6a793("./root");
        var _0x147831 = _0xa6a793("./type");
        var _0x55aff0 = _0xa6a793('./field');
        var _0x4a02de = _0xa6a793("./mapfield");
        var _0x41dfa2 = _0xa6a793("./oneof");
        var _0x4fd7ca = _0xa6a793("./enum");
        var _0x563b3f = _0xa6a793("./service");
        var _0x46245c = _0xa6a793("./method");
        var _0x40373a = _0xa6a793('./types');
        var _0x2f6a7a = _0xa6a793('./util');
        var _0x65e9a2 = /^[1-9][0-9]*$/;
        var _0xd222f6 = /^-?[1-9][0-9]*$/;
        var _0x3559b8 = /^0[x][0-9a-fA-F]+$/;
        var _0x2dd161 = /^-?0[x][0-9a-fA-F]+$/;
        var _0x2ffee7 = /^0[0-7]+$/;
        var _0x14c000 = /^-?0[0-7]+$/;
        var _0xc81047 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x3c5e4c = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x4bd7b9 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x2c9506 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0xe5ad8(_0x1751c9, _0x3a0293, _0x525caa) {
          if (!(_0x3a0293 instanceof _0x26b7ee)) {
            _0x525caa = _0x3a0293;
            _0x3a0293 = new _0x26b7ee();
          }
          if (!_0x525caa) {
            _0x525caa = _0xe5ad8.defaults;
          }
          var _0x18ca51;
          var _0x581f48;
          var _0x588740;
          var _0x4fcb02;
          var _0x3855ae;
          var _0x38b6ff = _0x525caa.preferTrailingComment || false;
          var _0x567390 = _0x386760(_0x1751c9, _0x525caa.alternateCommentMode || false);
          var _0x4b67c2 = _0x567390.next;
          var _0x115c08 = _0x567390.push;
          var _0x5acfc0 = _0x567390.peek;
          var _0x1ef7bb = _0x567390.skip;
          var _0x2b98c7 = _0x567390.cmnt;
          var _0x2953b9 = true;
          var _0x687639 = false;
          var _0x162f91 = _0x3a0293;
          var _0x2cd635 = _0x525caa.keepCase ? function (_0x3ffa46) {
            return _0x3ffa46;
          } : _0x2f6a7a.camelCase;
          function _0x4d4c8b(_0x1be7b2, _0x165a11, _0x53373b) {
            var _0x369cb8 = _0xe5ad8.filename;
            if (!_0x53373b) {
              _0xe5ad8.filename = null;
            }
            return Error("illegal " + (_0x165a11 || "token") + " '" + _0x1be7b2 + "' (" + (_0x369cb8 ? _0x369cb8 + ", " : '') + "line " + _0x567390.line + ')');
          }
          function _0x455347() {
            var _0x308c41;
            var _0x1745f2 = [];
            do {
              if ("\"" !== (_0x308c41 = _0x4b67c2()) && "'" !== _0x308c41) {
                throw _0x4d4c8b(_0x308c41);
              }
              _0x1745f2.push(_0x4b67c2());
              _0x1ef7bb(_0x308c41);
              _0x308c41 = _0x5acfc0();
            } while ("\"" === _0x308c41 || "'" === _0x308c41);
            return _0x1745f2.join('');
          }
          function _0x3c2943(_0x383f8b) {
            var _0x1a2d11 = _0x4b67c2();
            switch (_0x1a2d11) {
              case "'":
              case "\"":
                _0x115c08(_0x1a2d11);
                return _0x455347();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (_0x17d083, _0x469f8a) {
                var _0x3d036d = 0x1;
                if ('-' === _0x17d083.charAt(0x0)) {
                  _0x3d036d = -0x1;
                  _0x17d083 = _0x17d083.substring(0x1);
                }
                switch (_0x17d083) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return _0x3d036d * Infinity;
                  case "nan":
                  case 'NAN':
                  case 'Nan':
                  case "NaN":
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x65e9a2.test(_0x17d083)) {
                  return _0x3d036d * parseInt(_0x17d083, 0xa);
                }
                if (_0x3559b8.test(_0x17d083)) {
                  return _0x3d036d * parseInt(_0x17d083, 0x10);
                }
                if (_0x2ffee7.test(_0x17d083)) {
                  return _0x3d036d * parseInt(_0x17d083, 0x8);
                }
                if (_0xc81047.test(_0x17d083)) {
                  return _0x3d036d * parseFloat(_0x17d083);
                }
                throw _0x4d4c8b(_0x17d083, "number", _0x469f8a);
              }(_0x1a2d11, true);
            } catch (_0xbc2e0e) {
              if (_0x383f8b && _0x4bd7b9.test(_0x1a2d11)) {
                return _0x1a2d11;
              }
              throw _0x4d4c8b(_0x1a2d11, "value");
            }
          }
          function _0x21805b(_0x3349bd, _0x1129a4) {
            var _0x3bc086;
            var _0x48d42f;
            do {
              if (!_0x1129a4 || "\"" !== (_0x3bc086 = _0x5acfc0()) && "'" !== _0x3bc086) {
                _0x3349bd.push([_0x48d42f = _0x165809(_0x4b67c2()), _0x1ef7bb('to', true) ? _0x165809(_0x4b67c2()) : _0x48d42f]);
              } else {
                _0x3349bd.push(_0x455347());
              }
            } while (_0x1ef7bb(',', true));
            _0x1ef7bb(';');
          }
          function _0x165809(_0x39a2f0, _0x32e916) {
            switch (_0x39a2f0) {
              case "max":
              case "MAX":
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x32e916 && '-' === _0x39a2f0.charAt(0x0)) {
              throw _0x4d4c8b(_0x39a2f0, 'id');
            }
            if (_0xd222f6.test(_0x39a2f0)) {
              return parseInt(_0x39a2f0, 0xa);
            }
            if (_0x2dd161.test(_0x39a2f0)) {
              return parseInt(_0x39a2f0, 0x10);
            }
            if (_0x14c000.test(_0x39a2f0)) {
              return parseInt(_0x39a2f0, 0x8);
            }
            throw _0x4d4c8b(_0x39a2f0, 'id');
          }
          function _0x21bd8b() {
            if (undefined !== _0x18ca51) {
              throw _0x4d4c8b('package');
            }
            _0x18ca51 = _0x4b67c2();
            if (!_0x4bd7b9.test(_0x18ca51)) {
              throw _0x4d4c8b(_0x18ca51, "name");
            }
            _0x162f91 = _0x162f91.define(_0x18ca51);
            _0x1ef7bb(';');
          }
          function _0x38a75f() {
            var _0x424fef;
            var _0x4d4a97 = _0x5acfc0();
            switch (_0x4d4a97) {
              case "weak":
                _0x424fef = _0x588740 || (_0x588740 = []);
                _0x4b67c2();
                break;
              case "public":
                _0x4b67c2();
              default:
                _0x424fef = _0x581f48 || (_0x581f48 = []);
            }
            _0x4d4a97 = _0x455347();
            _0x1ef7bb(';');
            _0x424fef.push(_0x4d4a97);
          }
          function _0x4f1a6f() {
            _0x1ef7bb('=');
            _0x4fcb02 = _0x455347();
            if (!(_0x687639 = "proto3" === _0x4fcb02) && 'proto2' !== _0x4fcb02) {
              throw _0x4d4c8b(_0x4fcb02, "syntax");
            }
            _0x1ef7bb(';');
          }
          function _0x2fd81f(_0x25ae49, _0x4a4fef) {
            switch (_0x4a4fef) {
              case "option":
                _0x3946cf(_0x25ae49, _0x4a4fef);
                _0x1ef7bb(';');
                return true;
              case 'message':
                (function (_0x3473c6, _0x3ca7e6) {
                  if (!_0x3c5e4c.test(_0x3ca7e6 = _0x4b67c2())) {
                    throw _0x4d4c8b(_0x3ca7e6, "type name");
                  }
                  var _0x493a48 = new _0x147831(_0x3ca7e6);
                  _0x9a571e(_0x493a48, function (_0x4fd8f7) {
                    if (!_0x2fd81f(_0x493a48, _0x4fd8f7)) {
                      switch (_0x4fd8f7) {
                        case "map":
                          !function (_0x2ae2b1) {
                            _0x1ef7bb('<');
                            var _0x95da5b = _0x4b67c2();
                            if (undefined === _0x40373a.mapKey[_0x95da5b]) {
                              throw _0x4d4c8b(_0x95da5b, 'type');
                            }
                            _0x1ef7bb(',');
                            var _0xc5b35c = _0x4b67c2();
                            if (!_0x4bd7b9.test(_0xc5b35c)) {
                              throw _0x4d4c8b(_0xc5b35c, "type");
                            }
                            _0x1ef7bb('>');
                            var _0x2ff342 = _0x4b67c2();
                            if (!_0x3c5e4c.test(_0x2ff342)) {
                              throw _0x4d4c8b(_0x2ff342, "name");
                            }
                            _0x1ef7bb('=');
                            var _0xc7023c = new _0x4a02de(_0x2cd635(_0x2ff342), _0x165809(_0x4b67c2()), _0x95da5b, _0xc5b35c);
                            _0x9a571e(_0xc7023c, function (_0x5a724e) {
                              if ("option" !== _0x5a724e) {
                                throw _0x4d4c8b(_0x5a724e);
                              }
                              _0x3946cf(_0xc7023c, _0x5a724e);
                              _0x1ef7bb(';');
                            }, function () {
                              _0x4a3cee(_0xc7023c);
                            });
                            _0x2ae2b1.add(_0xc7023c);
                          }(_0x493a48);
                          break;
                        case "required":
                        case "repeated":
                          _0x254fae(_0x493a48, _0x4fd8f7);
                          break;
                        case "optional":
                          _0x254fae(_0x493a48, _0x687639 ? 'proto3_optional' : "optional");
                          break;
                        case 'oneof':
                          !function (_0x16e3b3, _0x5cd79) {
                            if (!_0x3c5e4c.test(_0x5cd79 = _0x4b67c2())) {
                              throw _0x4d4c8b(_0x5cd79, "name");
                            }
                            var _0x17b813 = new _0x41dfa2(_0x2cd635(_0x5cd79));
                            _0x9a571e(_0x17b813, function (_0x4f396f) {
                              if ("option" === _0x4f396f) {
                                _0x3946cf(_0x17b813, _0x4f396f);
                                _0x1ef7bb(';');
                              } else {
                                _0x115c08(_0x4f396f);
                                _0x254fae(_0x17b813, "optional");
                              }
                            });
                            _0x16e3b3.add(_0x17b813);
                          }(_0x493a48, _0x4fd8f7);
                          break;
                        case 'extensions':
                          _0x21805b(_0x493a48.extensions || (_0x493a48.extensions = []));
                          break;
                        case "reserved":
                          _0x21805b(_0x493a48.reserved || (_0x493a48.reserved = []), true);
                          break;
                        default:
                          if (!_0x687639 || !_0x4bd7b9.test(_0x4fd8f7)) {
                            throw _0x4d4c8b(_0x4fd8f7);
                          }
                          _0x115c08(_0x4fd8f7);
                          _0x254fae(_0x493a48, 'optional');
                      }
                    }
                  });
                  _0x3473c6.add(_0x493a48);
                })(_0x25ae49, _0x4a4fef);
                return true;
              case "enum":
                (function (_0x2937f6, _0x2f91ff) {
                  if (!_0x3c5e4c.test(_0x2f91ff = _0x4b67c2())) {
                    throw _0x4d4c8b(_0x2f91ff, "name");
                  }
                  var _0x2e0496 = new _0x4fd7ca(_0x2f91ff);
                  _0x9a571e(_0x2e0496, function (_0xc0f242) {
                    switch (_0xc0f242) {
                      case 'option':
                        _0x3946cf(_0x2e0496, _0xc0f242);
                        _0x1ef7bb(';');
                        break;
                      case 'reserved':
                        _0x21805b(_0x2e0496.reserved || (_0x2e0496.reserved = []), true);
                        break;
                      default:
                        !function (_0xa055d9, _0x235688) {
                          if (!_0x3c5e4c.test(_0x235688)) {
                            throw _0x4d4c8b(_0x235688, 'name');
                          }
                          _0x1ef7bb('=');
                          var _0xf3909f = _0x165809(_0x4b67c2(), true);
                          var _0x48a4d3 = {};
                          _0x9a571e(_0x48a4d3, function (_0x173fcb) {
                            if ("option" !== _0x173fcb) {
                              throw _0x4d4c8b(_0x173fcb);
                            }
                            _0x3946cf(_0x48a4d3, _0x173fcb);
                            _0x1ef7bb(';');
                          }, function () {
                            _0x4a3cee(_0x48a4d3);
                          });
                          _0xa055d9.add(_0x235688, _0xf3909f, _0x48a4d3.comment);
                        }(_0x2e0496, _0xc0f242);
                    }
                  });
                  _0x2937f6.add(_0x2e0496);
                })(_0x25ae49, _0x4a4fef);
                return true;
              case "service":
                (function (_0x1f5f45, _0x2ac426) {
                  if (!_0x3c5e4c.test(_0x2ac426 = _0x4b67c2())) {
                    throw _0x4d4c8b(_0x2ac426, "service name");
                  }
                  var _0x48d581 = new _0x563b3f(_0x2ac426);
                  _0x9a571e(_0x48d581, function (_0x1d0ce8) {
                    if (!_0x2fd81f(_0x48d581, _0x1d0ce8)) {
                      if ('rpc' !== _0x1d0ce8) {
                        throw _0x4d4c8b(_0x1d0ce8);
                      }
                      !function (_0x50504b, _0x2b4e32) {
                        var _0xda385b = _0x2b98c7();
                        var _0x3847bd = _0x2b4e32;
                        if (!_0x3c5e4c.test(_0x2b4e32 = _0x4b67c2())) {
                          throw _0x4d4c8b(_0x2b4e32, "name");
                        }
                        var _0x5796b4;
                        var _0x40b16f;
                        var _0x24fc7a;
                        var _0x596461;
                        var _0x5987d3 = _0x2b4e32;
                        _0x1ef7bb('(');
                        if (_0x1ef7bb("stream", true)) {
                          _0x40b16f = true;
                        }
                        if (!_0x4bd7b9.test(_0x2b4e32 = _0x4b67c2())) {
                          throw _0x4d4c8b(_0x2b4e32);
                        }
                        _0x5796b4 = _0x2b4e32;
                        _0x1ef7bb(')');
                        _0x1ef7bb("returns");
                        _0x1ef7bb('(');
                        if (_0x1ef7bb('stream', true)) {
                          _0x596461 = true;
                        }
                        if (!_0x4bd7b9.test(_0x2b4e32 = _0x4b67c2())) {
                          throw _0x4d4c8b(_0x2b4e32);
                        }
                        _0x24fc7a = _0x2b4e32;
                        _0x1ef7bb(')');
                        var _0x2a5f7c = new _0x46245c(_0x5987d3, _0x3847bd, _0x5796b4, _0x24fc7a, _0x40b16f, _0x596461);
                        _0x2a5f7c.comment = _0xda385b;
                        _0x9a571e(_0x2a5f7c, function (_0x351ca4) {
                          if ("option" !== _0x351ca4) {
                            throw _0x4d4c8b(_0x351ca4);
                          }
                          _0x3946cf(_0x2a5f7c, _0x351ca4);
                          _0x1ef7bb(';');
                        });
                        _0x50504b.add(_0x2a5f7c);
                      }(_0x48d581, _0x1d0ce8);
                    }
                  });
                  _0x1f5f45.add(_0x48d581);
                })(_0x25ae49, _0x4a4fef);
                return true;
              case "extend":
                (function (_0x5ddb7c, _0x4f4831) {
                  if (!_0x4bd7b9.test(_0x4f4831 = _0x4b67c2())) {
                    throw _0x4d4c8b(_0x4f4831, 'reference');
                  }
                  var _0x1107a5 = _0x4f4831;
                  _0x9a571e(null, function (_0xe1c37) {
                    switch (_0xe1c37) {
                      case "required":
                      case "repeated":
                        _0x254fae(_0x5ddb7c, _0xe1c37, _0x1107a5);
                        break;
                      case "optional":
                        _0x254fae(_0x5ddb7c, _0x687639 ? "proto3_optional" : 'optional', _0x1107a5);
                        break;
                      default:
                        if (!_0x687639 || !_0x4bd7b9.test(_0xe1c37)) {
                          throw _0x4d4c8b(_0xe1c37);
                        }
                        _0x115c08(_0xe1c37);
                        _0x254fae(_0x5ddb7c, "optional", _0x1107a5);
                    }
                  });
                })(_0x25ae49, _0x4a4fef);
                return true;
            }
            return false;
          }
          function _0x9a571e(_0x4ccc01, _0x52f204, _0x69f8f2) {
            var _0x5d0d19 = _0x567390.line;
            if (_0x4ccc01) {
              if ("string" != typeof _0x4ccc01.comment) {
                _0x4ccc01.comment = _0x2b98c7();
              }
              _0x4ccc01.filename = _0xe5ad8.filename;
            }
            if (_0x1ef7bb('{', true)) {
              for (var _0xe2d6ff; '}' !== (_0xe2d6ff = _0x4b67c2());) {
                _0x52f204(_0xe2d6ff);
              }
              _0x1ef7bb(';', true);
            } else {
              if (_0x69f8f2) {
                _0x69f8f2();
              }
              _0x1ef7bb(';');
              if (_0x4ccc01 && ("string" != typeof _0x4ccc01.comment || _0x38b6ff)) {
                _0x4ccc01.comment = _0x2b98c7(_0x5d0d19) || _0x4ccc01.comment;
              }
            }
          }
          function _0x254fae(_0x15b375, _0x363016, _0x1f31f3) {
            var _0x64e9e = _0x4b67c2();
            if ("group" !== _0x64e9e) {
              if (!_0x4bd7b9.test(_0x64e9e)) {
                throw _0x4d4c8b(_0x64e9e, "type");
              }
              var _0x5b644e = _0x4b67c2();
              if (!_0x3c5e4c.test(_0x5b644e)) {
                throw _0x4d4c8b(_0x5b644e, "name");
              }
              _0x5b644e = _0x2cd635(_0x5b644e);
              _0x1ef7bb('=');
              var _0x2ef0fa = new _0x55aff0(_0x5b644e, _0x165809(_0x4b67c2()), _0x64e9e, _0x363016, _0x1f31f3);
              _0x9a571e(_0x2ef0fa, function (_0x4b3b3e) {
                if ("option" !== _0x4b3b3e) {
                  throw _0x4d4c8b(_0x4b3b3e);
                }
                _0x3946cf(_0x2ef0fa, _0x4b3b3e);
                _0x1ef7bb(';');
              }, function () {
                _0x4a3cee(_0x2ef0fa);
              });
              if ("proto3_optional" === _0x363016) {
                var _0x2f4484 = new _0x41dfa2('_' + _0x5b644e);
                _0x2ef0fa.setOption("proto3_optional", true);
                _0x2f4484.add(_0x2ef0fa);
                _0x15b375.add(_0x2f4484);
              } else {
                _0x15b375.add(_0x2ef0fa);
              }
              if (!(_0x687639 || !_0x2ef0fa.repeated || undefined === _0x40373a.packed[_0x64e9e] && undefined !== _0x40373a.basic[_0x64e9e])) {
                _0x2ef0fa.setOption('packed', false, true);
              }
            } else {
              !function (_0x4fa2b7, _0x3889ff) {
                var _0x432d67 = _0x4b67c2();
                if (!_0x3c5e4c.test(_0x432d67)) {
                  throw _0x4d4c8b(_0x432d67, "name");
                }
                var _0x12d839 = _0x2f6a7a.lcFirst(_0x432d67);
                if (_0x432d67 === _0x12d839) {
                  _0x432d67 = _0x2f6a7a.ucFirst(_0x432d67);
                }
                _0x1ef7bb('=');
                var _0x569644 = _0x165809(_0x4b67c2());
                var _0x10e6b6 = new _0x147831(_0x432d67);
                _0x10e6b6.group = true;
                var _0x5a99c4 = new _0x55aff0(_0x12d839, _0x569644, _0x432d67, _0x3889ff);
                _0x5a99c4.filename = _0xe5ad8.filename;
                _0x9a571e(_0x10e6b6, function (_0x39470f) {
                  switch (_0x39470f) {
                    case "option":
                      _0x3946cf(_0x10e6b6, _0x39470f);
                      _0x1ef7bb(';');
                      break;
                    case "required":
                    case 'repeated':
                      _0x254fae(_0x10e6b6, _0x39470f);
                      break;
                    case "optional":
                      _0x254fae(_0x10e6b6, _0x687639 ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw _0x4d4c8b(_0x39470f);
                  }
                });
                _0x4fa2b7.add(_0x10e6b6).add(_0x5a99c4);
              }(_0x15b375, _0x363016);
            }
          }
          function _0x3946cf(_0x13262b, _0x2172f1) {
            var _0x1dc1f2 = _0x1ef7bb('(', true);
            if (!_0x4bd7b9.test(_0x2172f1 = _0x4b67c2())) {
              throw _0x4d4c8b(_0x2172f1, "name");
            }
            var _0x5cf307;
            var _0x2f6e0c = _0x2172f1;
            var _0x572433 = _0x2f6e0c;
            if (_0x1dc1f2) {
              _0x1ef7bb(')');
              _0x572433 = _0x2f6e0c = '(' + _0x2f6e0c + ')';
              _0x2172f1 = _0x5acfc0();
              if (_0x2c9506.test(_0x2172f1)) {
                _0x5cf307 = _0x2172f1.substr(0x1);
                _0x2f6e0c += _0x2172f1;
                _0x4b67c2();
              }
            }
            _0x1ef7bb('=');
            (function (_0x3cd3e6, _0x2ae07f, _0x1db397, _0x362236) {
              if (_0x3cd3e6.setParsedOption) {
                _0x3cd3e6.setParsedOption(_0x2ae07f, _0x1db397, _0x362236);
              }
            })(_0x13262b, _0x572433, _0x39c7e6(_0x13262b, _0x2f6e0c), _0x5cf307);
          }
          function _0x39c7e6(_0xe0f243, _0x4ce2a8) {
            if (_0x1ef7bb('{', true)) {
              for (var _0x4d4cbf = {}; !_0x1ef7bb('}', true);) {
                if (!_0x3c5e4c.test(_0x3855ae = _0x4b67c2())) {
                  throw _0x4d4c8b(_0x3855ae, "name");
                }
                var _0x5dc3c8;
                var _0xcc9872 = _0x3855ae;
                if ('{' === _0x5acfc0()) {
                  _0x5dc3c8 = _0x39c7e6(_0xe0f243, _0x4ce2a8 + '.' + _0x3855ae);
                } else {
                  _0x1ef7bb(':');
                  if ('{' === _0x5acfc0()) {
                    _0x5dc3c8 = _0x39c7e6(_0xe0f243, _0x4ce2a8 + '.' + _0x3855ae);
                  } else {
                    _0x5dc3c8 = _0x3c2943(true);
                    _0x362765(_0xe0f243, _0x4ce2a8 + '.' + _0x3855ae, _0x5dc3c8);
                  }
                }
                var _0x531b5c = _0x4d4cbf[_0xcc9872];
                if (_0x531b5c) {
                  _0x5dc3c8 = [].concat(_0x531b5c).concat(_0x5dc3c8);
                }
                _0x4d4cbf[_0xcc9872] = _0x5dc3c8;
                _0x1ef7bb(',', true);
              }
              return _0x4d4cbf;
            }
            var _0x5e2490 = _0x3c2943(true);
            _0x362765(_0xe0f243, _0x4ce2a8, _0x5e2490);
            return _0x5e2490;
          }
          function _0x362765(_0x38fe52, _0x5c760e, _0x1d9a3c) {
            if (_0x38fe52.setOption) {
              _0x38fe52.setOption(_0x5c760e, _0x1d9a3c);
            }
          }
          function _0x4a3cee(_0x553399) {
            if (_0x1ef7bb('[', true)) {
              do {
                _0x3946cf(_0x553399, "option");
              } while (_0x1ef7bb(',', true));
              _0x1ef7bb(']');
            }
            return _0x553399;
          }
          for (; null !== (_0x3855ae = _0x4b67c2());) {
            switch (_0x3855ae) {
              case 'package':
                if (!_0x2953b9) {
                  throw _0x4d4c8b(_0x3855ae);
                }
                _0x21bd8b();
                break;
              case "import":
                if (!_0x2953b9) {
                  throw _0x4d4c8b(_0x3855ae);
                }
                _0x38a75f();
                break;
              case "syntax":
                if (!_0x2953b9) {
                  throw _0x4d4c8b(_0x3855ae);
                }
                _0x4f1a6f();
                break;
              case "option":
                _0x3946cf(_0x162f91, _0x3855ae);
                _0x1ef7bb(';');
                break;
              default:
                if (_0x2fd81f(_0x162f91, _0x3855ae)) {
                  _0x2953b9 = false;
                  continue;
                }
                throw _0x4d4c8b(_0x3855ae);
            }
          }
          _0xe5ad8.filename = null;
          return {
            'package': _0x18ca51,
            'imports': _0x581f48,
            'weakImports': _0x588740,
            'syntax': _0x4fcb02,
            'root': _0x3a0293
          };
        }
        _0x530554.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/field.js',
          './mapfield': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x4d21e0, _0x239482, _0x29f529, _0x326077, _0x486865) {
        _0x29f529.exports = _0x2de22e;
        var _0x311c88;
        var _0x13f9bc = /\/|\./;
        function _0x2de22e(_0x16b82e, _0x2cac2a) {
          if (!_0x13f9bc.test(_0x16b82e)) {
            _0x16b82e = 'google/protobuf/' + _0x16b82e + ".proto";
            _0x2cac2a = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x2cac2a
                    }
                  }
                }
              }
            };
          }
          _0x2de22e[_0x16b82e] = _0x2cac2a;
        }
        _0x2de22e('any', {
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
        _0x2de22e("duration", {
          'Duration': _0x311c88 = {
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
        _0x2de22e("timestamp", {
          'Timestamp': _0x311c88
        });
        _0x2de22e('empty', {
          'Empty': {
            'fields': {}
          }
        });
        _0x2de22e("struct", {
          'Struct': {
            'fields': {
              'fields': {
                'keyType': 'string',
                'type': 'Value',
                'id': 0x1
              }
            }
          },
          'Value': {
            'oneofs': {
              'kind': {
                'oneof': ["nullValue", 'numberValue', "stringValue", "boolValue", "structValue", 'listValue']
              }
            },
            'fields': {
              'nullValue': {
                'type': 'NullValue',
                'id': 0x1
              },
              'numberValue': {
                'type': 'double',
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
                'rule': 'repeated',
                'type': "Value",
                'id': 0x1
              }
            }
          }
        });
        _0x2de22e('wrappers', {
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
                'type': 'bytes',
                'id': 0x1
              }
            }
          }
        });
        _0x2de22e("field_mask", {
          'FieldMask': {
            'fields': {
              'paths': {
                'rule': "repeated",
                'type': "string",
                'id': 0x1
              }
            }
          }
        });
        _0x2de22e.get = function (_0xde7db6) {
          return _0x2de22e[_0xde7db6] || null;
        };
        _0x29f529.exports;
      }, {});
      var _0x4e80cf;
      _0x1c1e99.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (_0x3bef85, _0x5d32c3, _0x3acf66, _0x170cfe, _0x2c45ed) {
        var _0x74b46d = _0x3acf66.exports = _0x5d32c3("./index-light");
        _0x74b46d.build = "full";
        _0x74b46d.tokenize = _0x5d32c3("./tokenize");
        _0x74b46d.parse = _0x5d32c3("./parse");
        _0x74b46d.common = _0x5d32c3("./common");
        _0x74b46d.Root._configure(_0x74b46d.Type, _0x74b46d.parse, _0x74b46d.common);
        _0x3acf66.exports;
      }, function () {
        return {
          './index-light': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      _0x1c1e99.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/index.js', function (_0x2fce7b, _0x4ce119, _0x27fc0e, _0xcdf5a, _0x22509b) {
        _0x27fc0e.exports = _0x4ce119('./src/index');
        _0x4e80cf = _0x27fc0e.exports;
      }, function () {
        return {
          './src/index': "file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      _0x1c1e99.require('file:///Users/m2mac2/Desktop/H5/Client/workspace/Petra/Client/Thai_UAT/node_modules/protobufjs/index.js');
      _0x2c4ee5._RF.push({}, "af6ea1BfVNBkpilA8cl1ame", "GameView", undefined);
      var _0x2143ca;
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, "0d9a1LIv+dHqb4BQGeFJcfH", "AwardState", undefined);
      var _0x2cf591 = _0x73005c.ccclass;
      _0x2143ca = _0x2cf591('AwardState');
      _0x2c4ee5._RF.pop();
      _0x2c4ee5._RF.push({}, '8ca4aNMsPhIPLzBb1bAiseg', "Way", undefined);
      _0x2c4ee5._RF.pop();
    }
  };
});
(function (_0x3f4d11) {
  _0x3f4d11("virtual:///prerequisite-imports/game", "chunks:///game.js");
})(function (_0x46f5e6, _0xec2660) {
  System.register(_0x46f5e6, [_0xec2660], function (_0x20a506, _0x32430f) {
    return {
      'setters': [function (_0x516f00) {
        var _0x1ffb05 = {};
        for (var _0x1888ce in _0x516f00) {
          if (_0x1888ce !== "default" && _0x1888ce !== "__esModule") {
            _0x1ffb05[_0x1888ce] = _0x516f00[_0x1888ce];
          }
        }
        _0x20a506(_0x1ffb05);
      }],
      'execute': function () {}
    };
  });
});