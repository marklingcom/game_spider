System.register("chunks:///game.js", ['cc', "./index-0108754f.js"], function (_0x5d75cf, _0x15d81c) {
  'use strict';

  var _0xf429b1;
  var _0x26b9a3;
  var _0x33e25;
  var _0x5089c4;
  var _0xd86e43;
  var _0x3e0aca;
  var _0x1d1f1;
  var _0x5d2887;
  var _0x4935a9;
  var _0x10b9dd;
  var _0xff2ed7;
  var _0x570899;
  var _0xc81011;
  var _0x1a7f5d;
  var _0x190dcc;
  var _0x43f5ff;
  var _0x5ef0c0;
  var _0x170b56;
  var _0x4aedad;
  var _0x442b83;
  var _0x4f4565;
  var _0x76df40;
  var _0x156681;
  var _0x43bd9d;
  var _0x2d36af;
  var _0x266cf8;
  var _0x288a5d;
  var _0x48a9a8;
  var _0x14dc62;
  var _0x136f56;
  var _0x24998e;
  var _0x536808;
  var _0x10db21;
  var _0x3656bb;
  var _0x46a10b;
  var _0x3d5fe4;
  var _0x189fb9;
  var _0x14eb5c;
  var _0x48aeaf;
  var _0x45956f;
  var _0x28ffcf;
  var _0x44f921;
  var _0xa0d93;
  var _0x3e36bf;
  var _0x540644;
  var _0x3bae1e;
  var _0x49b4f8;
  var _0x27d472;
  var _0x1fb0dd;
  var _0x218e4b;
  var _0xa4646a;
  var _0x1bc5fb;
  var _0x295563;
  var _0x4e995f;
  var _0x16d59a;
  var _0x1bee58;
  var _0x3bf49f;
  var _0x59fdcf;
  var _0x2cad03;
  var _0x130d6b;
  var _0x985713;
  var _0x3d7b7f;
  var _0x3c72ef;
  var _0x23e5ef;
  var _0x462bf5;
  var _0x270b5f;
  var _0x685f9b;
  var _0x3e16bf;
  var _0x2016a1;
  var _0x192890;
  var _0x394382;
  var _0x3b185b;
  var _0x2f413a;
  var _0x4045f4;
  var _0x45e162;
  return {
    'setters': [function (_0x419669) {
      _0xf429b1 = _0x419669.cclegacy;
      _0x26b9a3 = _0x419669.Enum;
      _0x33e25 = _0x419669.color;
      _0x5089c4 = _0x419669.v2;
      _0xd86e43 = _0x419669._decorator;
      _0x3e0aca = _0x419669.Animation;
      _0x1d1f1 = _0x419669.Label;
      _0x5d2887 = _0x419669.Node;
      _0x4935a9 = _0x419669.Font;
      _0x10b9dd = _0x419669.Component;
      _0xff2ed7 = _0x419669.sp;
      _0x570899 = _0x419669.tween;
      _0xc81011 = _0x419669.Sprite;
      _0x1a7f5d = _0x419669.instantiate;
      _0x190dcc = _0x419669.error;
      _0x43f5ff = _0x419669.SpriteFrame;
      _0x5ef0c0 = _0x419669.Prefab;
      _0x170b56 = _0x419669.UITransform;
      _0x4aedad = _0x419669.v3;
      _0x442b83 = _0x419669.log;
      _0x4f4565 = _0x419669.Vec2;
      _0x76df40 = _0x419669.Size;
      _0x156681 = _0x419669.Tween;
      _0x43bd9d = _0x419669.UIRenderer;
      _0x2d36af = _0x419669.UIOpacity;
      _0x266cf8 = _0x419669.Mask;
      _0x288a5d = _0x419669.SpriteAtlas;
      _0x48a9a8 = _0x419669.sys;
      _0x14dc62 = _0x419669.input;
      _0x136f56 = _0x419669.Input;
      _0x24998e = _0x419669.KeyCode;
      _0x536808 = _0x419669.js;
      _0x10db21 = _0x419669.screen;
      _0x3656bb = _0x419669.view;
      _0x46a10b = _0x419669.ResolutionPolicy;
    }, function (_0x1e7bd9) {
      _0x3d5fe4 = _0x1e7bd9.B;
      _0x189fb9 = _0x1e7bd9.g;
      _0x14eb5c = _0x1e7bd9._;
      _0x48aeaf = _0x1e7bd9.a;
      _0x45956f = _0x1e7bd9.b;
      _0x28ffcf = _0x1e7bd9.c;
      _0x44f921 = _0x1e7bd9.o;
      _0xa0d93 = _0x1e7bd9.p;
      _0x3e36bf = _0x1e7bd9.e;
      _0x540644 = _0x1e7bd9.d;
      _0x3bae1e = _0x1e7bd9.l;
      _0x49b4f8 = _0x1e7bd9.n;
      _0x27d472 = _0x1e7bd9.w;
      _0x1fb0dd = _0x1e7bd9.j;
      _0x218e4b = _0x1e7bd9.x;
      _0xa4646a = _0x1e7bd9.k;
      _0x1bc5fb = _0x1e7bd9.h;
      _0x295563 = _0x1e7bd9.y;
      _0x4e995f = _0x1e7bd9.t;
      _0x16d59a = _0x1e7bd9.z;
      _0x1bee58 = _0x1e7bd9.A;
      _0x3bf49f = _0x1e7bd9.D;
      _0x59fdcf = _0x1e7bd9.i;
      _0x2cad03 = _0x1e7bd9.E;
      _0x130d6b = _0x1e7bd9.F;
      _0x985713 = _0x1e7bd9.r;
      _0x3d7b7f = _0x1e7bd9.S;
      _0x3c72ef = _0x1e7bd9.M;
      _0x23e5ef = _0x1e7bd9.G;
      _0x462bf5 = _0x1e7bd9.f;
      _0x270b5f = _0x1e7bd9.C;
      _0x685f9b = _0x1e7bd9.H;
      _0x3e16bf = _0x1e7bd9.I;
      _0x2016a1 = _0x1e7bd9.J;
      _0x192890 = _0x1e7bd9.K;
      _0x394382 = _0x1e7bd9.L;
      _0x3b185b = _0x1e7bd9.N;
      _0x2f413a = _0x1e7bd9.O;
      _0x4045f4 = _0x1e7bd9.s;
      _0x45e162 = _0x1e7bd9.P;
    }],
    'execute': function () {
      var _0x52c214;
      var _0x1350f9;
      var _0xf65a30;
      var _0x19139f;
      var _0x384062;
      var _0x38a5b1;
      var _0x1f74c7;
      var _0x190d09;
      _0xf429b1._RF.push({}, "0f7cflORMVPPJGFAz5g05Ps", "DataStructure", undefined);
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, '6bf1eXKdZNLGrQlxK7XvV42', "Game_Define", undefined);
      (function (_0x4cc7ab) {
        _0x4cc7ab[_0x4cc7ab.WAIT_READY = 0x0] = "WAIT_READY";
        _0x4cc7ab[_0x4cc7ab.PLATE_SHOW = 0x1] = "PLATE_SHOW";
        _0x4cc7ab[_0x4cc7ab.FEATURE_SHOW = 0x2] = 'FEATURE_SHOW';
        _0x4cc7ab[_0x4cc7ab.UNSHOW_PREPARE = 0x3] = "UNSHOW_PREPARE";
        _0x4cc7ab[_0x4cc7ab.FIRST_PLATE = 0x4] = "FIRST_PLATE";
        _0x4cc7ab[_0x4cc7ab.EXPLODE = 0x5] = "EXPLODE";
        _0x4cc7ab[_0x4cc7ab.MATCHING_PATCH_UP = 0x6] = 'MATCHING_PATCH_UP';
        _0x4cc7ab[_0x4cc7ab.SHOW_WILD = 0x7] = "SHOW_WILD";
        _0x4cc7ab[_0x4cc7ab.SHOW_BOOM = 0x8] = 'SHOW_BOOM';
        _0x4cc7ab[_0x4cc7ab.ENTER_FREE = 0x9] = 'ENTER_FREE';
        _0x4cc7ab[_0x4cc7ab.ADD_FREE = 0xa] = "ADD_FREE";
        _0x4cc7ab[_0x4cc7ab.LEAVE_FREE = 0xb] = "LEAVE_FREE";
        _0x4cc7ab[_0x4cc7ab.AWARD = 0xc] = 'AWARD';
        _0x4cc7ab[_0x4cc7ab.ROUND_SHOW_END = 0xd] = 'ROUND_SHOW_END';
        _0x4cc7ab[_0x4cc7ab.ROUND_END = 0xe] = "ROUND_END";
      })(_0x52c214 || (_0x52c214 = {}));
      (function (_0x2ff108) {
        _0x2ff108[_0x2ff108.Normal = 0x0] = "Normal";
        _0x2ff108[_0x2ff108.Get = 0x1] = "Get";
        _0x2ff108[_0x2ff108.NotGet = 0x2] = "NotGet";
      })(_0x1350f9 || (_0x1350f9 = {}));
      (function (_0x535a05) {
        _0x535a05[_0x535a05.BonusFightDefense = 0x0] = "BonusFightDefense";
        _0x535a05[_0x535a05.BonusFightCounterAttack = 0x1] = "BonusFightCounterAttack";
        _0x535a05[_0x535a05.BonusFightDodge = 0x2] = "BonusFightDodge";
        _0x535a05[_0x535a05.BonusFightAttack = 0x3] = 'BonusFightAttack';
      })(_0xf65a30 || (_0xf65a30 = {}));
      (function (_0x811a5) {
        _0x811a5[_0x811a5.SYMBOL_00 = 0x0] = "SYMBOL_00";
        _0x811a5[_0x811a5.SYMBOL_01 = 0x1] = "SYMBOL_01";
        _0x811a5[_0x811a5.SYMBOL_02 = 0x2] = "SYMBOL_02";
        _0x811a5[_0x811a5.SYMBOL_03 = 0x3] = "SYMBOL_03";
        _0x811a5[_0x811a5.SYMBOL_04 = 0x4] = 'SYMBOL_04';
        _0x811a5[_0x811a5.SYMBOL_05 = 0x5] = 'SYMBOL_05';
        _0x811a5[_0x811a5.SYMBOL_06 = 0x6] = "SYMBOL_06";
        _0x811a5[_0x811a5.SYMBOL_WILD = 0x7] = "SYMBOL_WILD";
        _0x811a5[_0x811a5.SYMBOL_08 = 0x8] = "SYMBOL_08";
        _0x811a5[_0x811a5.SYMBOL_SCATTER = 0x9] = "SYMBOL_SCATTER";
      })(_0x19139f || (_0x19139f = {}));
      (function (_0x5153cd) {
        _0x5153cd[_0x5153cd.SYMBOL = 0x0] = "SYMBOL";
        _0x5153cd[_0x5153cd.WILD = 0x1] = 'WILD';
        _0x5153cd[_0x5153cd.SCATTER = 0x2] = 'SCATTER';
        _0x5153cd[_0x5153cd.EFFECT = 0x3] = "EFFECT";
      })(_0x384062 || (_0x384062 = {}));
      (function (_0x1ad9c4) {
        _0x1ad9c4[_0x1ad9c4.POLICY_DEFAULT = 0x0] = "POLICY_DEFAULT";
        _0x1ad9c4[_0x1ad9c4.POLICY_COMBO1 = 0x1] = "POLICY_COMBO1";
        _0x1ad9c4[_0x1ad9c4.POLICY_COMBO2 = 0x2] = "POLICY_COMBO2";
        _0x1ad9c4[_0x1ad9c4.POLICY_COMBO3 = 0x3] = "POLICY_COMBO3";
        _0x1ad9c4[_0x1ad9c4.POLICY_COMBO4 = 0x4] = 'POLICY_COMBO4';
        _0x1ad9c4[_0x1ad9c4.POLICY_COMBO5 = 0x5] = "POLICY_COMBO5";
        _0x1ad9c4[_0x1ad9c4.POLICY_COMBO6 = 0x6] = 'POLICY_COMBO6';
        _0x1ad9c4[_0x1ad9c4.POLICY_MAX = 0x7] = "POLICY_MAX";
      })(_0x38a5b1 || (_0x38a5b1 = {}));
      (function (_0x5229b0) {
        _0x5229b0[_0x5229b0.PIG = 0x0] = "PIG";
        _0x5229b0[_0x5229b0.PIG2 = 0x1] = "PIG2";
        _0x5229b0[_0x5229b0.LION = 0x2] = "LION";
      })(_0x1f74c7 || (_0x1f74c7 = {}));
      (function (_0x1daa92) {
        _0x1daa92[_0x1daa92.Anim = 0x0] = "Anim";
        _0x1daa92[_0x1daa92.Wild = 0x1] = "Wild";
        _0x1daa92[_0x1daa92.Eft = 0x2] = 'Eft';
        _0x1daa92[_0x1daa92.NearWin = 0x3] = 'NearWin';
        _0x1daa92[_0x1daa92.BigWin = 0x4] = 'BigWin';
      })(_0x190d09 || (_0x190d09 = {}));
      var _0x4a9a56 = {
        'CENTER': -0x1,
        'TOP': 0x0,
        'RIGHT': 0x1,
        'DOWN': 0x2,
        'LEFT': 0x3,
        'TOP_LEFT': 0x4,
        'TOP_RIGHT': 0x5,
        'DOWN_LEFT': 0x6,
        'DOWN_RIGHT': 0x7
      };
      var _0x4e825f = function () {
        function _0x3bead3() {}
        _0x3bead3.ConvertIndex2ColRow = function (_0x392916) {
          if (_0x392916 >= 0x0 && _0x392916 < _0x3bead3.COL * _0x3bead3.ROW) {
            var _0x226beb = _0x5089c4(-0x1, -0x1);
            _0x226beb.y = _0x392916 % _0x3bead3.ROW;
            _0x226beb.x = Math.floor(_0x392916 / _0x3bead3.ROW);
            return _0x226beb;
          }
          return null;
        };
        _0x3bead3.GetZIndex = function (_0x7c2557, _0x4e921f, _0x4db9e9) {
          var _0x329e53 = _0x7c2557 * _0x3bead3.COL + (_0x3bead3.ROW - _0x4e921f);
          return _0x4db9e9 == _0x19139f.SYMBOL_SCATTER ? _0x329e53 + _0x3bead3.COL * _0x3bead3.ROW + _0x19139f.SYMBOL_SCATTER : _0x4db9e9 == _0x19139f.SYMBOL_WILD ? _0x329e53 + _0x3bead3.COL * _0x3bead3.ROW + _0x19139f.SYMBOL_WILD : _0x329e53;
        };
        _0x3bead3.GetCoinString = function (_0x28d685) {
          if ((_0x28d685 = _0x189fb9.strip(_0x3bead3.ShowDisplayValue(_0x28d685))) < 0x3e8) {
            return _0x28d685.toString().replace('.', _0x189fb9.DotString);
          }
          for (var _0x3de197 = _0x3bead3.LvlString.length - 0x1; _0x3de197 >= 0x0; _0x3de197--) {
            var _0x371bea = Math.pow(0x3e8, _0x3de197 + 0x1);
            if (_0x28d685 >= _0x371bea) {
              return _0x189fb9.divide(_0x28d685, _0x371bea).toString().replace('.', _0x189fb9.DotString) + _0x3bead3.LvlString[_0x3de197];
            }
          }
        };
        _0x3bead3.OnExit = function () {
          this.AudioClips = {
            'Play_ready': null,
            'BGM_MG': null,
            'Spin': null,
            'Reel_Stop': null,
            'Fiop1': null,
            'Small_win_01': null,
            'Small_win_02': null,
            'Small_win_03': null,
            'Big_Win': null,
            'Big_win_end': null,
            'ChangeWin_1': null,
            'ChangeWin_2': null,
            'Combo_f_x2': null,
            'Combo_f_x2_fast': null,
            'Combo_f_x3': null,
            'Combo_f_x3_fast': null,
            'Combo_f_x4': null,
            'Combo_f_x4_fast': null,
            'Combo_f_x5': null,
            'Combo_f_x5_fast': null,
            'Combo_bar': null,
            'Combo_bar_2': null,
            'Combo_bar_4': null,
            'Combo_bar_6': null,
            'Combo_bar_8': null,
            'Combo_wild': null,
            'Wild_Transform': null,
            'Wild_blowup': null,
            'Spawn_wild': null,
            'BGM_FG': null,
            'FG_Declare': null,
            'FG_End': null,
            'Scatter_Show1': null,
            'Scatter_Show2': null,
            'Scatter_Show3': null,
            'MG_NearWin': null,
            'Scatter_Bell': null,
            'FG_Add': null,
            'FG_Add_panel': null,
            'Character_1': null,
            'Character_2': null,
            'Character_3': null,
            'Character_4': null,
            'Character_5': null,
            'Character_6': null
          };
        };
        return _0x3bead3;
      }();
      var _0x6a9506;
      var _0x38c306;
      var _0x5f0deb;
      var _0x48daf1;
      var _0x446059;
      var _0x5b3875;
      var _0x3a2eab;
      var _0x31920b;
      var _0xde9031;
      var _0x31bf11;
      var _0x5c8beb;
      var _0x4e662b;
      var _0xc6fdbc;
      var _0x39a22d;
      var _0x3e563d;
      _0x4e825f.Ver = '116';
      _0x4e825f.GameType = 'sl';
      _0x4e825f.Layer2D = 33554432;
      _0x4e825f.COL = 0x7;
      _0x4e825f.ROW = 0x7;
      _0x4e825f.PolicySet = _0x26b9a3(_0x38a5b1);
      _0x4e825f.Symbol = _0x26b9a3(_0x19139f);
      _0x4e825f.MaxCombo = 0x8;
      _0x4e825f.BG_TYPE = _0x26b9a3(_0x1f74c7);
      _0x4e825f.EFFECT_Z_INDEX = _0x26b9a3(_0x190d09);
      _0x4e825f.TimeScale = {
        'Normal': 0x1,
        'HardStop': 0x2
      };
      _0x4e825f.Color = {
        'Normal': _0x33e25(0xff, 0xff, 0xff),
        'Dark': _0x33e25(0x90, 0x90, 0x90)
      };
      _0x4e825f.ShakeRate = 0xa;
      _0x4e825f.SymbolShakeTime = 0x3;
      _0x4e825f.RoundIdx = 0x0;
      _0x4e825f.PlateIdx = 0x0;
      _0x4e825f.TotalWin = 0x0;
      _0x4e825f.IsBottombarFinished = false;
      _0x4e825f.IsLogin = false;
      _0x4e825f.IsGetGameInfo = false;
      _0x4e825f.IsInFG = false;
      _0x4e825f.IsCheckChips = false;
      _0x4e825f.ComboSound = {
        'MG': [0x2, 0x3, 0x4],
        'FG': [0x1, 0x2, 0x3]
      };
      _0x4e825f.IsAutoShowFeatures = false;
      _0x4e825f.SpinClickEvent = 0x0;
      _0x4e825f.MultiState = {
        'None': 0x0,
        'Hit': 0x1,
        'Real1': 0x2,
        'Real2': 0x4,
        'Real3': 0x6
      };
      _0x4e825f.SPIN_ACK_TYPE = {
        'AT_SUCCESS': 0x0,
        'AT_MONEY_NOT_ENOUGH': 0x12e,
        'AT_MONEY_ABNORMAL': 0x12d,
        'AT_MONEY_NOT_ENOUGH_SINGLE': 0x131
      };
      _0x4e825f.HEART_BEAT_STATE = {
        'NOTIFY': 0x61,
        'MAINTAIN': 0x62,
        'CLOSE': 0x63
      };
      _0x4e825f.AWARD_TYPE = {
        'AwardTypeNon': 0x0,
        'AwardTypeLine': 0x1,
        'AwardTypeGetFree': 0x2,
        'AwardTypeInFree': 0x4,
        'AwardTypeLeaveFree': 0x8,
        'AwardTypeGetBonus': 0x10,
        'AwardTypeGet3Bonus': 0x20,
        'AwardTypeGet4Bonus': 0x40,
        'AwardTypeGet5Bonus': 0x80,
        'AWARD_TYPE_MAX': 0x7fff
      };
      _0x4e825f.AudioPathPre = 'Sound/';
      _0x4e825f.AudioClips = {
        'Play_ready': null,
        'BGM_MG': null,
        'Spin': null,
        'Reel_Stop': null,
        'Fiop1': null,
        'Small_win_01': null,
        'Small_win_02': null,
        'Small_win_03': null,
        'Big_Win': null,
        'Big_win_end': null,
        'ChangeWin_1': null,
        'ChangeWin_2': null,
        'Combo_f_x2': null,
        'Combo_f_x2_fast': null,
        'Combo_f_x3': null,
        'Combo_f_x3_fast': null,
        'Combo_f_x4': null,
        'Combo_f_x4_fast': null,
        'Combo_f_x5': null,
        'Combo_f_x5_fast': null,
        'Combo_bar': null,
        'Combo_bar_2': null,
        'Combo_bar_4': null,
        'Combo_bar_6': null,
        'Combo_bar_8': null,
        'Combo_wild': null,
        'Wild_Transform': null,
        'Wild_blowup': null,
        'Spawn_wild': null,
        'BGM_FG': null,
        'FG_Declare': null,
        'FG_End': null,
        'Scatter_Show1': null,
        'Scatter_Show2': null,
        'Scatter_Show3': null,
        'MG_NearWin': null,
        'Scatter_Bell': null,
        'FG_Add': null,
        'FG_Add_panel': null,
        'Character_1': null,
        'Character_2': null,
        'Character_3': null,
        'Character_4': null,
        'Character_5': null,
        'Character_6': null
      };
      _0x4e825f.AckType = {
        'login': 0x0,
        'exchangeChips': 0x2,
        'info': 0xb,
        'spin': 0xc,
        'buyBonus': 0x24,
        'heartBeat': 0x62,
        'serverMsg': 0x63
      };
      _0x4e825f.SERVER_RET_TYPE = {
        'SERVER_SUCCESS': 0x0,
        'SERVER_ERROR_SEATE': 0x31f,
        'SERVER_NOUSE': 0x383,
        'SERVER_MAINTAIN': 0xe7,
        'SERVER_SHUTDOWN': 0xe8,
        'SERVER_NEED_UID': 0xe9,
        'SERVER_NEED_LOGIN': 0xea,
        'SERVER_TOKEN_ERROR': 0xeb
      };
      _0x4e825f.LOGIN_RESULT_TYPE = {
        'LOGIN_SUCCESS': 0x0,
        'LOGIN_FAIL': 0x1,
        'API_VERIFY_FAIL': 0xeb,
        'API_LOGIN_REPEAT_FAIL': 0x7d2
      };
      _0x4e825f.StringKey = {
        'BONUS_GAME_TXT': "BONUS_GAME_TXT",
        'FEATURE_LEFT': 'FEATURE_LEFT',
        'FEATURE_RIGHT': "FEATURE_RIGHT"
      };
      _0x4e825f.SmallAward = [0x1, 0x3, 0x6];
      _0x4e825f.AWARD_SETTING = [{
        'BetRate': 0x6,
        'Lvl': _0x3d5fe4.Level.BIG
      }, {
        'BetRate': 0xf,
        'Lvl': _0x3d5fe4.Level.MEGA
      }, {
        'BetRate': 0x1e,
        'Lvl': _0x3d5fe4.Level.SUPER
      }];
      _0x4e825f.BonusFightResult = _0x26b9a3(_0xf65a30);
      _0x4e825f.USE_ITEM_REASON = {
        'NORMAL': 0x0,
        'USING': 0x1
      };
      _0x4e825f.ShowDisplayValue = null;
      _0x4e825f.LvlString = ['K', 'M'];
      _0x4e825f.AnimEventName = {
        'AnimEvetFunc': "AnimationEvent",
        'Change': 'Change',
        'Start': 'Sound1',
        'End': "Sound2",
        'RollEnd': "RollEnd",
        'ComboEnd': 'End',
        'BombAppear': 'Bomb_Appear'
      };
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "62379nn8KBCo5IVob5kVrpC", "SingleWin", undefined);
      var _0x1f032f = _0xd86e43.ccclass;
      var _0x117025 = _0xd86e43.property;
      _0x6a9506 = _0x1f032f("SingleWin");
      _0x38c306 = _0x117025({
        'type': _0x3e0aca,
        'tooltip': '動畫'
      });
      _0x5f0deb = _0x117025({
        'type': _0x1d1f1,
        'tooltip': '贏分'
      });
      _0x48daf1 = _0x117025({
        'type': _0x1d1f1,
        'tooltip': '倍率'
      });
      _0x446059 = _0x117025({
        'type': _0x1d1f1,
        'tooltip': '總贏分'
      });
      _0x5b3875 = _0x117025({
        'type': _0x5d2887,
        'tooltip': '空格'
      });
      _0x3a2eab = _0x117025({
        'type': _0x4935a9,
        'tooltip': "倍率字形檔"
      });
      _0xde9031 = function (_0x48d9f3) {
        function _0x3fe871() {
          var _0x2901f0;
          var _0x25e52e = arguments.length;
          var _0x152f3f = new Array(_0x25e52e);
          for (var _0x31bc43 = 0x0; _0x31bc43 < _0x25e52e; _0x31bc43++) {
            _0x152f3f[_0x31bc43] = arguments[_0x31bc43];
          }
          _0x2901f0 = _0x48d9f3.call.apply(_0x48d9f3, [this].concat(_0x152f3f)) || this;
          _0x45956f(_0x2901f0, "m_anim", _0x31bf11, _0x28ffcf(_0x2901f0));
          _0x45956f(_0x2901f0, 'm_winLabel', _0x5c8beb, _0x28ffcf(_0x2901f0));
          _0x45956f(_0x2901f0, "m_multiLabel", _0x4e662b, _0x28ffcf(_0x2901f0));
          _0x45956f(_0x2901f0, "m_totalWinLabel", _0xc6fdbc, _0x28ffcf(_0x2901f0));
          _0x45956f(_0x2901f0, "m_spaceNode", _0x39a22d, _0x28ffcf(_0x2901f0));
          _0x45956f(_0x2901f0, "m_multiFonts", _0x3e563d, _0x28ffcf(_0x2901f0));
          _0x2901f0.m_animName = '';
          return _0x2901f0;
        }
        _0x48aeaf(_0x3fe871, _0x48d9f3);
        var _0x2fb0aa = _0x3fe871.prototype;
        _0x2fb0aa.SetInfo = function (_0x461375, _0x165efc) {
          if (undefined === _0x165efc) {
            _0x165efc = 0x1;
          }
          this.m_totalWinLabel.string = _0x189fb9.FormatNumberThousands(_0x4e825f.ShowDisplayValue(_0x189fb9.strip(_0x461375)), _0x189fb9.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
          this.m_winLabel.string = _0x189fb9.FormatNumberThousands(_0x4e825f.ShowDisplayValue(_0x189fb9.divide(_0x461375, _0x165efc)), _0x189fb9.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
          this.m_multiLabel.string = 'X' + _0x165efc.toString();
          this.m_multiLabel.node.active = _0x165efc > 0x1;
          this.m_spaceNode.active = _0x165efc > 0x1;
          this.m_animName = _0x165efc > 0x1 ? "Win2" : "Win1";
          var _0x5487b3 = null;
          if (_0x165efc >= _0x4e825f.MultiState.Real1 && _0x165efc < _0x4e825f.MultiState.Real2) {
            _0x5487b3 = this.m_multiFonts[0x0];
          } else if (_0x165efc >= _0x4e825f.MultiState.Real2 && _0x165efc < _0x4e825f.MultiState.Real3) {
            _0x5487b3 = this.m_multiFonts[0x1];
          } else if (_0x165efc >= _0x4e825f.MultiState.Real3) {
            _0x5487b3 = this.m_multiFonts[0x2];
          }
          if (_0x5487b3) {
            this.m_multiLabel.font = _0x5487b3;
          }
        };
        _0x2fb0aa.Show = function () {
          var _0x24be87 = _0x44f921(_0xa0d93().mark(function _0x5de9ab() {
            var _0x516a77;
            return _0xa0d93().wrap(function (_0x448d22) {
              for (;;) {
                switch (_0x448d22.prev = _0x448d22.next) {
                  case 0x0:
                    this.m_anim.play(this.m_animName);
                    _0x516a77 = this.m_anim.getState(this.m_animName);
                    _0x448d22.next = 0x4;
                    return _0x3e36bf.Wait(this, _0x516a77.duration);
                  case 0x4:
                  case "end":
                    return _0x448d22.stop();
                }
              }
            }, _0x5de9ab, this);
          }));
          return function () {
            return _0x24be87.apply(this, arguments);
          };
        }();
        return _0x3fe871;
      }(_0x10b9dd);
      _0x31bf11 = _0x14eb5c(_0xde9031.prototype, "m_anim", [_0x38c306], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5c8beb = _0x14eb5c(_0xde9031.prototype, "m_winLabel", [_0x5f0deb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4e662b = _0x14eb5c(_0xde9031.prototype, 'm_multiLabel', [_0x48daf1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xc6fdbc = _0x14eb5c(_0xde9031.prototype, 'm_totalWinLabel', [_0x446059], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x39a22d = _0x14eb5c(_0xde9031.prototype, "m_spaceNode", [_0x5b3875], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3e563d = _0x14eb5c(_0xde9031.prototype, "m_multiFonts", [_0x3a2eab], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x2040b1 = _0x6a9506(_0x31920b = _0xde9031) || _0x31920b;
      var _0x2cc199;
      var _0x516260;
      var _0x3da159;
      var _0x3b13c1;
      var _0x56e183;
      var _0x2a56a4;
      var _0x376584;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "fbef3+jAsxNeqsrhf9uqBt2", "SymbolSpine", undefined);
      var _0x26f051 = _0xd86e43.ccclass;
      var _0x5a0d4a = _0xd86e43.property;
      _0x2cc199 = _0x26f051('Symbol');
      _0x516260 = _0x5a0d4a({
        'type': _0xff2ed7.Skeleton,
        'tooltip': 'Spine'
      });
      _0x3da159 = _0x5a0d4a({
        'type': _0x26b9a3(_0x384062),
        'tooltip': '編號'
      });
      _0x56e183 = function (_0x4147c3) {
        function _0x1b7b4d() {
          var _0x7b694e;
          var _0x43658a = arguments.length;
          var _0x53b653 = new Array(_0x43658a);
          for (var _0x162d1a = 0x0; _0x162d1a < _0x43658a; _0x162d1a++) {
            _0x53b653[_0x162d1a] = arguments[_0x162d1a];
          }
          _0x7b694e = _0x4147c3.call.apply(_0x4147c3, [this].concat(_0x53b653)) || this;
          _0x45956f(_0x7b694e, 'm_spine', _0x2a56a4, _0x28ffcf(_0x7b694e));
          _0x45956f(_0x7b694e, 'm_index', _0x376584, _0x28ffcf(_0x7b694e));
          _0x7b694e.m_winSoundCb = null;
          return _0x7b694e;
        }
        _0x48aeaf(_0x1b7b4d, _0x4147c3);
        var _0x56f181 = _0x1b7b4d.prototype;
        _0x56f181.OnSpineEvent = function (_0x5281ca, _0x4d32e) {
          switch (_0x5281ca) {
            case "Remove":
              _0x4e825f.AnimEventName.AnimEvetFunc;
              break;
            case 'Win':
              var _0x550315;
              if (_0x4d32e == _0x4e825f.AnimEventName.AnimEvetFunc) {
                if (!(null == (_0x550315 = this.m_winSoundCb))) {
                  _0x550315.call(this);
                }
              }
          }
        };
        _0x56f181.SetSkin = function (_0x34be71) {
          if (!(_0x34be71 >= _0x4e825f.Symbol.SYMBOL_WILD)) {
            this.m_spine.setSkin("Symbol_0" + _0x34be71);
          }
        };
        _0x56f181.SetDarkSymbol = function (_0x5abbbc) {
          this.m_spine.color = _0x5abbbc ? _0x4e825f.Color.Dark : _0x4e825f.Color.Normal;
        };
        _0x56f181.GetWinTime = function (_0x383e1d) {
          var _0x46e523 = this.m_spine.findAnimation('Win');
          if (_0x46e523) {
            var _0x33785a = _0x46e523.duration;
            return _0x189fb9.divide(_0x33785a, _0x383e1d);
          }
          return 1.5;
        };
        _0x56f181.ShowWin = function () {
          var _0x4cd23e = _0x44f921(_0xa0d93().mark(function _0x540769(_0x35bfd6) {
            var _0x69cc3a = this;
            return _0xa0d93().wrap(function (_0x1608c6) {
              for (;;) {
                switch (_0x1608c6.prev = _0x1608c6.next) {
                  case 0x0:
                    _0x570899(this.node).delay(_0x189fb9.divide(1.417, _0x35bfd6)).call(function () {
                      if (!(null == _0x69cc3a.m_winSoundCb)) {
                        _0x69cc3a.m_winSoundCb();
                      }
                    }).start();
                    _0x1608c6.next = 0x3;
                    return this.PlayAnimation('Win', false, _0x35bfd6);
                  case 0x3:
                  case "end":
                    return _0x1608c6.stop();
                }
              }
            }, _0x540769, this);
          }));
          return function (_0x27fd10) {
            return _0x4cd23e.apply(this, arguments);
          };
        }();
        _0x56f181.ShowRemove = function () {
          var _0x4592b7 = _0x44f921(_0xa0d93().mark(function _0x113f30() {
            return _0xa0d93().wrap(function (_0x34eee2) {
              for (;;) {
                switch (_0x34eee2.prev = _0x34eee2.next) {
                  case 0x0:
                    if (!this.m_spine.findAnimation("Remove")) {
                      _0x34eee2.next = 0x4;
                      break;
                    }
                    _0x34eee2.next = 0x4;
                    return this.PlayAnimation("Remove");
                  case 0x4:
                  case "end":
                    return _0x34eee2.stop();
                }
              }
            }, _0x113f30, this);
          }));
          return function () {
            return _0x4592b7.apply(this, arguments);
          };
        }();
        _0x56f181.ShowShake = function () {
          var _0x3b8b7d = _0x44f921(_0xa0d93().mark(function _0x4cd800(_0x49e08e) {
            var _0x59b185;
            var _0x5340c4;
            return _0xa0d93().wrap(function (_0x4f7eab) {
              for (;;) {
                switch (_0x4f7eab.prev = _0x4f7eab.next) {
                  case 0x0:
                    _0x59b185 = Math.floor(0x3 * Math.random() + 0x1);
                    if (!_0x49e08e) {
                      _0x4f7eab.next = 0x6;
                      break;
                    }
                    _0x4f7eab.next = 0x4;
                    return this.PlayAnimation("ShakeA" + _0x59b185);
                  case 0x4:
                    _0x4f7eab.next = 0xd;
                    break;
                  case 0x6:
                    _0x5340c4 = 0x0;
                  case 0x7:
                    if (!(_0x5340c4 < _0x4e825f.SymbolShakeTime)) {
                      _0x4f7eab.next = 0xd;
                      break;
                    }
                    _0x4f7eab.next = 0xa;
                    return this.PlayAnimation("ShakeB" + _0x59b185);
                  case 0xa:
                    _0x5340c4++;
                    _0x4f7eab.next = 0x7;
                    break;
                  case 0xd:
                  case "end":
                    return _0x4f7eab.stop();
                }
              }
            }, _0x4cd800, this);
          }));
          return function (_0x330c55) {
            return _0x3b8b7d.apply(this, arguments);
          };
        }();
        _0x56f181.PlayAnimation = function (_0x101a0f, _0x4f79ab, _0x4d39b8) {
          var _0x377c0d = this;
          if (undefined === _0x4f79ab) {
            _0x4f79ab = false;
          }
          if (undefined === _0x4d39b8) {
            _0x4d39b8 = 0x1;
          }
          return new Promise(function (_0x4de2be) {
            _0x377c0d.m_spine.timeScale = _0x4d39b8;
            _0x377c0d.m_spine.setToSetupPose();
            var _0x2cada3 = _0x377c0d.m_spine.setAnimation(0x0, _0x101a0f, _0x4f79ab);
            if (_0x2cada3) {
              _0x377c0d.m_spine.setTrackEventListener(_0x2cada3, function (_0x92627e, _0x403368) {});
              _0x377c0d.m_spine.setTrackCompleteListener(_0x2cada3, function () {
                _0x4de2be(null);
              });
            } else {
              _0x377c0d.m_spine.setCompleteListener(function () {
                _0x4de2be(null);
              });
            }
          });
        };
        _0x540644(_0x1b7b4d, [{
          'key': "Index",
          'get': function () {
            return this.m_index;
          }
        }, {
          'key': "WinSoundCb",
          'set': function (_0x37b93e) {
            this.m_winSoundCb = _0x37b93e;
          }
        }]);
        return _0x1b7b4d;
      }(_0x10b9dd);
      _0x2a56a4 = _0x14eb5c(_0x56e183.prototype, "m_spine", [_0x516260], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x376584 = _0x14eb5c(_0x56e183.prototype, "m_index", [_0x3da159], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return _0x384062.SYMBOL;
        }
      });
      var _0x2b60bd = _0x2cc199(_0x3b13c1 = _0x56e183) || _0x3b13c1;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "2e31b6/+/RCiocU3g4Gb9jZ", 'NodePool', undefined);
      var _0x472faf = function () {
        function _0x2f0eed() {
          this.m_symbolSprites = new Array();
          this.m_symbolPrefab = null;
          this.m_symbolEftPrefab = null;
          this.m_symbols = null;
          this.m_symbolEffects = null;
          this.m_scatterPrefab = null;
          this.m_scatterSpines = null;
          this.m_wildPrefab = null;
          this.m_wildSpines = null;
          this.m_winPrefab = null;
          this.m_wins = [];
          _0x2f0eed._instance = this;
          for (var _0xb0e564 = 0x0; _0xb0e564 < _0x4e825f.COL; _0xb0e564++) {
            for (var _0x191fba = 0x0; _0x191fba < _0x4e825f.ROW; _0x191fba++) {
              var _0x20b0a4 = new _0x5d2887();
              _0x20b0a4.layer = _0x4e825f.Layer2D;
              var _0x23ac8c = _0x20b0a4.addComponent(_0xc81011);
              this.m_symbolSprites.push(_0x23ac8c);
            }
          }
        }
        _0x2f0eed.GetInstance = function () {
          return _0x2f0eed._instance;
        };
        var _0x24a23b = _0x2f0eed.prototype;
        _0x24a23b.GetSymbolSprite = function () {
          if (this.m_symbolSprites.length > 0x0) {
            return this.m_symbolSprites.shift();
          }
          var _0x402080 = new _0x5d2887();
          _0x402080.layer = _0x4e825f.Layer2D;
          return _0x402080.addComponent(_0xc81011);
        };
        _0x24a23b.ReturnSymbolSprite = function (_0x56b4d8) {
          if (_0x56b4d8) {
            this.m_symbolSprites.push(_0x56b4d8);
          }
        };
        _0x24a23b.SetEffectPrefab = function (_0x291507, _0x206eb3, _0x56cb72, _0x4d4d86) {
          this.m_symbolPrefab = _0x291507;
          this.m_symbolEftPrefab = _0x206eb3;
          this.m_wildPrefab = _0x56cb72;
          this.m_scatterPrefab = _0x4d4d86;
          this.m_symbols = new Array();
          this.m_symbolEffects = new Array();
          this.m_wildSpines = new Array();
          this.m_scatterSpines = new Array();
        };
        _0x24a23b.GetSymbolSpine = function (_0xcc3e83, _0x181a12) {
          if (undefined === _0x181a12) {
            _0x181a12 = false;
          }
          if (_0xcc3e83 == _0x4e825f.Symbol.SYMBOL_SCATTER) {
            if (this.m_scatterSpines.length > 0x0) {
              return this.m_scatterSpines.shift();
            }
            if (this.m_scatterPrefab) {
              return _0x1a7f5d(this.m_scatterPrefab).getComponent(_0x2b60bd);
            }
          } else {
            if (_0xcc3e83 != _0x4e825f.Symbol.SYMBOL_WILD) {
              return _0x181a12 ? this.m_symbolEffects.length > 0x0 ? this.m_symbolEffects.shift() : _0x1a7f5d(this.m_symbolEftPrefab).getComponent(_0x2b60bd) : this.m_symbols.length > 0x0 ? this.m_symbols.shift() : _0x1a7f5d(this.m_symbolPrefab).getComponent(_0x2b60bd);
            }
            if (this.m_wildSpines.length > 0x0) {
              return this.m_wildSpines.shift();
            }
            if (this.m_wildPrefab) {
              return _0x1a7f5d(this.m_wildPrefab).getComponent(_0x2b60bd);
            }
          }
        };
        _0x24a23b.ReturnSymbol = function (_0x5a2461, _0x498a90) {
          if (_0x5a2461.Index == _0x384062.SCATTER) {
            if (this.m_scatterSpines) {
              this.m_scatterSpines.push(_0x5a2461);
            }
          } else if (_0x5a2461.Index == _0x384062.WILD) {
            if (this.m_wildSpines) {
              this.m_wildSpines.push(_0x5a2461);
            }
          } else if (_0x5a2461.Index == _0x384062.EFFECT) {
            if (this.m_symbolEffects) {
              this.m_symbolEffects.push(_0x5a2461);
            }
          } else if (this.m_symbols) {
            this.m_symbols.push(_0x5a2461);
          }
        };
        _0x24a23b.SetWinPrefab = function (_0x4a5211) {
          this.m_winPrefab = _0x4a5211;
        };
        _0x24a23b.GetSingleWin = function () {
          return this.m_wins.length > 0x0 ? this.m_wins.shift() : this.m_winPrefab ? _0x1a7f5d(this.m_winPrefab).getComponent(_0x2040b1) : undefined;
        };
        _0x24a23b.ReturnWin = function (_0xa2ccf0) {
          this.m_wins.push(_0xa2ccf0);
        };
        return _0x2f0eed;
      }();
      var _0x5b2155;
      var _0x394ab7;
      var _0x5f3b8d;
      var _0x323d5b;
      var _0x547443;
      _0x472faf._instance = new _0x472faf();
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, '1ca97maa2tHzr4aCqCrEXTZ', 'MultiMarkSpine', undefined);
      var _0x3561ae;
      !function (_0x1dc210) {
        _0x1dc210[_0x1dc210.None = 0x0] = "None";
        _0x1dc210[_0x1dc210.Spawn = 0x1] = "Spawn";
        _0x1dc210[_0x1dc210.Active = 0x2] = 'Active';
      }(_0x3561ae || (_0x3561ae = {}));
      var _0x393f83 = _0xd86e43.ccclass;
      var _0x4904ca = _0xd86e43.property;
      _0x5b2155 = _0x393f83('MultiMarkSpin');
      _0x394ab7 = _0x4904ca({
        'type': _0xff2ed7.Skeleton,
        'tooltip': "Spine"
      });
      _0x323d5b = function (_0x3f6fe3) {
        function _0x498969() {
          var _0x110bc6;
          var _0x1c29c6 = arguments.length;
          var _0x333d1e = new Array(_0x1c29c6);
          for (var _0xbad9d0 = 0x0; _0xbad9d0 < _0x1c29c6; _0xbad9d0++) {
            _0x333d1e[_0xbad9d0] = arguments[_0xbad9d0];
          }
          _0x110bc6 = _0x3f6fe3.call.apply(_0x3f6fe3, [this].concat(_0x333d1e)) || this;
          _0x45956f(_0x110bc6, 'm_spine', _0x547443, _0x28ffcf(_0x110bc6));
          _0x110bc6.m_multi = 0x0;
          return _0x110bc6;
        }
        _0x48aeaf(_0x498969, _0x3f6fe3);
        var _0x54e5be = _0x498969.prototype;
        _0x54e5be.Show = function () {
          var _0x3b39fb = _0x44f921(_0xa0d93().mark(function _0x1ab5d0(_0x26e96b) {
            return _0xa0d93().wrap(function (_0x2f979e) {
              for (;;) {
                switch (_0x2f979e.prev = _0x2f979e.next) {
                  case 0x0:
                    this.m_multi = _0x26e96b;
                    if (!(_0x26e96b > _0x4e825f.MultiState.None)) {
                      _0x2f979e.next = 0xf;
                      break;
                    }
                    this.node.active = true;
                    _0x2f979e.t0 = _0x26e96b;
                    _0x2f979e.next = _0x2f979e.t0 === _0x4e825f.MultiState.Hit ? 0x6 : _0x2f979e.t0 === _0x4e825f.MultiState.Real1 ? 0x9 : 0xc;
                    break;
                  case 0x6:
                    _0x2f979e.next = 0x8;
                    return this.PlayAnimation('Spawn');
                  case 0x8:
                    return _0x2f979e.abrupt("break", 0xf);
                  case 0x9:
                    _0x2f979e.next = 0xb;
                    return this.PlayAnimation("Active");
                  case 0xb:
                    return _0x2f979e.abrupt("break", 0xf);
                  case 0xc:
                    _0x2f979e.next = 0xe;
                    return this.PlayAnimation("Increase");
                  case 0xe:
                    return _0x2f979e.abrupt("break", 0xf);
                  case 0xf:
                  case 'end':
                    return _0x2f979e.stop();
                }
              }
            }, _0x1ab5d0, this);
          }));
          return function (_0x13e75c) {
            return _0x3b39fb.apply(this, arguments);
          };
        }();
        _0x54e5be.Hide = function () {
          var _0x4034b4 = _0x44f921(_0xa0d93().mark(function _0x5cdb32() {
            return _0xa0d93().wrap(function (_0x3cd365) {
              for (;;) {
                switch (_0x3cd365.prev = _0x3cd365.next) {
                  case 0x0:
                    if (!(this.m_multi > _0x4e825f.MultiState.None)) {
                      _0x3cd365.next = 0x8;
                      break;
                    }
                    if (!(this.m_multi >= _0x4e825f.MultiState.Real1)) {
                      _0x3cd365.next = 0x6;
                      break;
                    }
                    _0x3cd365.next = 0x4;
                    return this.PlayAnimation("End2");
                  case 0x4:
                    _0x3cd365.next = 0x8;
                    break;
                  case 0x6:
                    _0x3cd365.next = 0x8;
                    return this.PlayAnimation('End1');
                  case 0x8:
                    this.node.active = false;
                  case 0x9:
                  case "end":
                    return _0x3cd365.stop();
                }
              }
            }, _0x5cdb32, this);
          }));
          return function () {
            return _0x4034b4.apply(this, arguments);
          };
        }();
        _0x54e5be.PlayAnimation = function (_0x255bd2, _0x6ee636, _0x45cbe7) {
          var _0x33d19b = this;
          if (undefined === _0x6ee636) {
            _0x6ee636 = false;
          }
          return new Promise(function (_0x1f9ce0) {
            _0x33d19b.m_spine.setToSetupPose();
            var _0x5856cd = _0x33d19b.m_spine.setAnimation(0x0, _0x255bd2, _0x6ee636);
            if (_0x5856cd) {
              _0x33d19b.m_spine.setTrackCompleteListener(_0x5856cd, function () {
                _0x1f9ce0(null);
              });
            } else {
              _0x33d19b.m_spine.setCompleteListener(function () {
                _0x1f9ce0(null);
              });
            }
          });
        };
        return _0x498969;
      }(_0x10b9dd);
      _0x547443 = _0x14eb5c(_0x323d5b.prototype, "m_spine", [_0x394ab7], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x32d363 = _0x5b2155(_0x5f3b8d = _0x323d5b) || _0x5f3b8d;
      var _0x57f3bb;
      var _0x2c6a5f;
      var _0x142941;
      var _0x288959;
      var _0x2f3ac0;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "32818raq4NP/by7hZpWPizY", "ComboBarSpine", undefined);
      var _0x4aff83 = _0xd86e43.ccclass;
      var _0x1c4e5f = _0xd86e43.property;
      _0x57f3bb = _0x4aff83("ComboBarSpine");
      _0x2c6a5f = _0x1c4e5f({
        'type': _0xff2ed7.Skeleton,
        'tooltip': 'Spine'
      });
      _0x288959 = function (_0x143377) {
        function _0x41f62f() {
          var _0x307324;
          var _0x344ff9 = arguments.length;
          var _0x1e8d5b = new Array(_0x344ff9);
          for (var _0x6e2d76 = 0x0; _0x6e2d76 < _0x344ff9; _0x6e2d76++) {
            _0x1e8d5b[_0x6e2d76] = arguments[_0x6e2d76];
          }
          _0x307324 = _0x143377.call.apply(_0x143377, [this].concat(_0x1e8d5b)) || this;
          _0x45956f(_0x307324, "m_spine", _0x2f3ac0, _0x28ffcf(_0x307324));
          _0x307324.m_lvl = 0x0;
          return _0x307324;
        }
        _0x48aeaf(_0x41f62f, _0x143377);
        var _0x382888 = _0x41f62f.prototype;
        _0x382888.ShowIdle = function () {
          this.PlayAnimation("Idle");
        };
        _0x382888.Reset = function () {
          if (this.m_lvl > 0x0) {
            this.PlayAnimation("Rest_" + this.m_lvl.toString());
            this.m_lvl = 0x0;
          }
        };
        _0x382888.Add = function () {
          var _0x4bbd92 = _0x44f921(_0xa0d93().mark(function _0xe3c86() {
            return _0xa0d93().wrap(function (_0x4de05b) {
              for (;;) {
                switch (_0x4de05b.prev = _0x4de05b.next) {
                  case 0x0:
                    if (!(this.m_lvl < _0x4e825f.MaxCombo)) {
                      _0x4de05b.next = 0x12;
                      break;
                    }
                    this.m_lvl++;
                    _0x4de05b.t0 = this.m_lvl;
                    _0x4de05b.next = 0x1 === _0x4de05b.t0 || 0x3 === _0x4de05b.t0 || 0x5 === _0x4de05b.t0 || 0x7 === _0x4de05b.t0 ? 0x5 : 0x2 === _0x4de05b.t0 ? 0x7 : 0x4 === _0x4de05b.t0 ? 0x9 : 0x6 === _0x4de05b.t0 ? 0xb : 0x8 === _0x4de05b.t0 ? 0xd : 0xf;
                    break;
                  case 0x5:
                    _0x3bae1e.Play(_0x4e825f.AudioClips.Combo_bar);
                    return _0x4de05b.abrupt("break", 0xf);
                  case 0x7:
                    _0x3bae1e.Play(_0x4e825f.AudioClips.Combo_bar_2);
                    return _0x4de05b.abrupt("break", 0xf);
                  case 0x9:
                    _0x3bae1e.Play(_0x4e825f.AudioClips.Combo_bar_4);
                    return _0x4de05b.abrupt("break", 0xf);
                  case 0xb:
                    _0x3bae1e.Play(_0x4e825f.AudioClips.Combo_bar_6);
                    return _0x4de05b.abrupt('break', 0xf);
                  case 0xd:
                    _0x3bae1e.Play(_0x4e825f.AudioClips.Combo_bar_8);
                    return _0x4de05b.abrupt("break", 0xf);
                  case 0xf:
                    _0x4de05b.next = 0x11;
                    return this.PlayAnimation("Goto_" + this.m_lvl.toString());
                  case 0x11:
                    return _0x4de05b.abrupt("return", this.m_lvl % 0x2 == 0x0);
                  case 0x12:
                    return _0x4de05b.abrupt("return", false);
                  case 0x13:
                  case "end":
                    return _0x4de05b.stop();
                }
              }
            }, _0xe3c86, this);
          }));
          return function () {
            return _0x4bbd92.apply(this, arguments);
          };
        }();
        _0x382888.ShowNone = function (_0x426caa) {
          this.PlayAnimation("None_" + _0x426caa);
        };
        _0x382888.PlayAnimation = function (_0x3b03cf, _0x151c2e, _0xc73c89) {
          var _0xd80ffb = this;
          if (undefined === _0x151c2e) {
            _0x151c2e = false;
          }
          return new Promise(function (_0x91a5ad) {
            _0xd80ffb.m_spine.clearTrack(0x0);
            _0xd80ffb.m_spine.setToSetupPose();
            var _0x29c01d = _0xd80ffb.m_spine.setAnimation(0x0, _0x3b03cf, _0x151c2e);
            if (_0x29c01d) {
              _0xd80ffb.m_spine.setTrackCompleteListener(_0x29c01d, function () {
                _0x91a5ad(null);
              });
            } else {
              _0xd80ffb.m_spine.setCompleteListener(function () {
                _0x91a5ad(null);
              });
            }
          });
        };
        _0x540644(_0x41f62f, [{
          'key': "Lvl",
          'get': function () {
            return this.m_lvl;
          }
        }]);
        return _0x41f62f;
      }(_0x10b9dd);
      _0x2f3ac0 = _0x14eb5c(_0x288959.prototype, 'm_spine', [_0x2c6a5f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x28a70e = _0x57f3bb(_0x142941 = _0x288959) || _0x142941;
      var _0xb2f03e;
      var _0x5d8d9d;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "22e797kC3RLIJbVBNAbEeU2", "WildSpine", undefined);
      var _0xa13010 = _0xd86e43.ccclass;
      _0xb2f03e = _0xa13010('WildSpine');
      var _0x4979b5 = _0xb2f03e(_0x5d8d9d = function (_0xf7e61) {
        function _0x2ca133() {
          var _0x456420;
          var _0x4efbc7 = arguments.length;
          var _0xaec891 = new Array(_0x4efbc7);
          for (var _0xf60a45 = 0x0; _0xf60a45 < _0x4efbc7; _0xf60a45++) {
            _0xaec891[_0xf60a45] = arguments[_0xf60a45];
          }
          (_0x456420 = _0xf7e61.call.apply(_0xf7e61, [this].concat(_0xaec891)) || this).m_removeCb = null;
          _0x456420.m_shakeWoldCb = null;
          return _0x456420;
        }
        _0x48aeaf(_0x2ca133, _0xf7e61);
        var _0x33bd0a = _0x2ca133.prototype;
        _0x33bd0a.ShowOnBar = function () {
          var _0x4a0dd0 = _0x44f921(_0xa0d93().mark(function _0x140a76() {
            return _0xa0d93().wrap(function (_0x425e3b) {
              for (;;) {
                switch (_0x425e3b.prev = _0x425e3b.next) {
                  case 0x0:
                    _0x3bae1e.Play(_0x4e825f.AudioClips.Combo_wild);
                    _0x425e3b.next = 0x3;
                    return this.PlayAnimation("UI_Spawn");
                  case 0x3:
                    _0x425e3b.next = 0x5;
                    return this.PlayAnimation('UI_Idle');
                  case 0x5:
                  case "end":
                    return _0x425e3b.stop();
                }
              }
            }, _0x140a76, this);
          }));
          return function () {
            return _0x4a0dd0.apply(this, arguments);
          };
        }();
        _0x33bd0a.ShowFly = function () {
          _0x3bae1e.Play(_0x4e825f.AudioClips.Spawn_wild);
          this.PlayAnimation("UI_Fly", false, 0x4);
          var _0x1e0873 = this.m_spine.findAnimation("UI_Fly");
          return _0x1e0873 ? _0x189fb9.divide(_0x1e0873.duration, 0x4) : 0x0;
        };
        _0x33bd0a.ShowOnPlate = function () {
          var _0x51d2ec = _0x44f921(_0xa0d93().mark(function _0x207ed7() {
            return _0xa0d93().wrap(function (_0x4d720e) {
              for (;;) {
                switch (_0x4d720e.prev = _0x4d720e.next) {
                  case 0x0:
                    _0x4d720e.next = 0x2;
                    return this.PlayAnimation("Spawn");
                  case 0x2:
                  case "end":
                    return _0x4d720e.stop();
                }
              }
            }, _0x207ed7, this);
          }));
          return function () {
            return _0x51d2ec.apply(this, arguments);
          };
        }();
        _0x33bd0a.ShowTrans = function () {
          var _0x8229db = _0x44f921(_0xa0d93().mark(function _0x5b3125(_0x4a7080, _0x4959f6) {
            var _0x1e112f = this;
            return _0xa0d93().wrap(function (_0x56710a) {
              for (;;) {
                switch (_0x56710a.prev = _0x56710a.next) {
                  case 0x0:
                    this.m_removeCb = _0x4a7080;
                    this.m_shakeWoldCb = _0x4959f6;
                    _0x3bae1e.Play(_0x4e825f.AudioClips.Wild_Transform);
                    _0x570899(this.node).delay(1.5).call(function () {
                      if (!(null == _0x1e112f.m_shakeWoldCb)) {
                        _0x1e112f.m_shakeWoldCb();
                      }
                      _0x1e112f.m_shakeWoldCb = null;
                    }).delay(_0x189fb9.minus(3.667, 1.5)).call(function () {
                      _0x3bae1e.Play(_0x4e825f.AudioClips.Wild_blowup);
                      if (!(null == _0x1e112f.m_removeCb)) {
                        _0x1e112f.m_removeCb();
                      }
                      _0x1e112f.m_removeCb = null;
                    }).start();
                    _0x56710a.next = 0x6;
                    return this.PlayAnimation("Transform");
                  case 0x6:
                    this.m_removeCb = null;
                    this.m_shakeWoldCb = null;
                  case 0x8:
                  case "end":
                    return _0x56710a.stop();
                }
              }
            }, _0x5b3125, this);
          }));
          return function (_0x38a0f7, _0x55b203) {
            return _0x8229db.apply(this, arguments);
          };
        }();
        _0x33bd0a.ShowShake = function () {
          var _0x1f273c = _0x44f921(_0xa0d93().mark(function _0x232895(_0x4b4389) {
            var _0x2a6980;
            return _0xa0d93().wrap(function (_0x2ea71e) {
              for (;;) {
                switch (_0x2ea71e.prev = _0x2ea71e.next) {
                  case 0x0:
                    if (!_0x4b4389) {
                      _0x2ea71e.next = 0x5;
                      break;
                    }
                    _0x2ea71e.next = 0x3;
                    return this.PlayAnimation("ShakeA");
                  case 0x3:
                    _0x2ea71e.next = 0xc;
                    break;
                  case 0x5:
                    _0x2a6980 = 0x0;
                  case 0x6:
                    if (!(_0x2a6980 < _0x4e825f.SymbolShakeTime)) {
                      _0x2ea71e.next = 0xc;
                      break;
                    }
                    _0x2ea71e.next = 0x9;
                    return this.PlayAnimation("ShakeB");
                  case 0x9:
                    _0x2a6980++;
                    _0x2ea71e.next = 0x6;
                    break;
                  case 0xc:
                  case "end":
                    return _0x2ea71e.stop();
                }
              }
            }, _0x232895, this);
          }));
          return function (_0x38985e) {
            return _0x1f273c.apply(this, arguments);
          };
        }();
        _0x33bd0a.OnSpineEvent = function (_0xc643d5, _0x4399c8) {
          _0x190dcc('OnSpineEvent', _0xc643d5, _0x4399c8);
          switch (_0xc643d5) {
            case "Transform":
              var _0x4ca243;
              if (_0x4399c8 == _0x4e825f.AnimEventName.AnimEvetFunc) {
                _0x3bae1e.Play(_0x4e825f.AudioClips.Wild_blowup);
                if (!(null == (_0x4ca243 = this.m_removeCb))) {
                  _0x4ca243.call(this);
                }
                this.m_removeCb = null;
              } else {
                if (_0x4399c8 == _0x4e825f.AnimEventName.BombAppear) {
                  var _0x104655;
                  if (!(null == (_0x104655 = this.m_shakeWoldCb))) {
                    _0x104655.call(this);
                  }
                  this.m_shakeWoldCb = null;
                }
              }
          }
        };
        return _0x2ca133;
      }(_0x2b60bd)) || _0x5d8d9d;
      var _0xde84a4;
      var _0x597aba;
      var _0x55e225;
      var _0x26d887;
      var _0x1bfd94;
      var _0x5d7f82;
      var _0x91ccb5;
      var _0x117282;
      var _0x382b79;
      var _0x2cf4ed;
      var _0x3363a2;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "14f6fhJ9BdCx7DCK+TlBQGa", "HistoryBar", undefined);
      var _0x1a0191 = _0xd86e43.ccclass;
      var _0x2e694c = _0xd86e43.property;
      _0xde84a4 = _0x1a0191("HistoryBar");
      _0x597aba = _0x2e694c({
        'type': _0x1d1f1,
        'tooltip': '顆數'
      });
      _0x55e225 = _0x2e694c({
        'type': _0x1d1f1,
        'tooltip': '倍率'
      });
      _0x26d887 = _0x2e694c({
        'type': _0xc81011,
        'tooltip': '圖示'
      });
      _0x1bfd94 = _0x2e694c({
        'type': _0x43f5ff,
        'tooltip': "symbol圖"
      });
      _0x91ccb5 = function (_0x5a3873) {
        function _0x1f2e11() {
          var _0x1d2be4;
          var _0xd5e584 = arguments.length;
          var _0x6f0414 = new Array(_0xd5e584);
          for (var _0x57d9cb = 0x0; _0x57d9cb < _0xd5e584; _0x57d9cb++) {
            _0x6f0414[_0x57d9cb] = arguments[_0x57d9cb];
          }
          _0x1d2be4 = _0x5a3873.call.apply(_0x5a3873, [this].concat(_0x6f0414)) || this;
          _0x45956f(_0x1d2be4, 'm_countLabel', _0x117282, _0x28ffcf(_0x1d2be4));
          _0x45956f(_0x1d2be4, "m_multiLabel", _0x382b79, _0x28ffcf(_0x1d2be4));
          _0x45956f(_0x1d2be4, "m_symbolSprite", _0x2cf4ed, _0x28ffcf(_0x1d2be4));
          _0x45956f(_0x1d2be4, "m_symbolSpriteFrames", _0x3363a2, _0x28ffcf(_0x1d2be4));
          _0x1d2be4.m_info = null;
          return _0x1d2be4;
        }
        _0x48aeaf(_0x1f2e11, _0x5a3873);
        _0x1f2e11.prototype.SetInfo = function (_0x323e4d, _0x27cf75) {
          if (null == _0x323e4d.Symbol) {
            _0x323e4d.Symbol = 0x0;
          }
          this.m_info = _0x323e4d;
          this.m_countLabel.string = _0x323e4d.Count.toString();
          this.m_multiLabel.string = _0x4e825f.GetCoinString(_0x323e4d.Win);
          if (_0x27cf75) {
            this.m_symbolSprite.spriteFrame = _0x27cf75[_0x323e4d.Symbol];
          } else if (this.m_symbolSpriteFrames[_0x323e4d.Symbol]) {
            this.m_symbolSprite.spriteFrame = this.m_symbolSpriteFrames[_0x323e4d.Symbol];
          }
        };
        _0x540644(_0x1f2e11, [{
          'key': "Info",
          'get': function () {
            return this.m_info;
          }
        }]);
        return _0x1f2e11;
      }(_0x10b9dd);
      _0x117282 = _0x14eb5c(_0x91ccb5.prototype, 'm_countLabel', [_0x597aba], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x382b79 = _0x14eb5c(_0x91ccb5.prototype, "m_multiLabel", [_0x55e225], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2cf4ed = _0x14eb5c(_0x91ccb5.prototype, 'm_symbolSprite', [_0x26d887], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3363a2 = _0x14eb5c(_0x91ccb5.prototype, "m_symbolSpriteFrames", [_0x1bfd94], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x19987f = _0xde84a4(_0x5d7f82 = _0x91ccb5) || _0x5d7f82;
      var _0x571ea6;
      var _0x453d6b;
      var _0x55a97a;
      var _0x1f4169;
      var _0x4add19;
      var _0x2d2e24;
      var _0x1163ad;
      var _0x4fdd2c;
      var _0xdc080;
      var _0x1ee1c5;
      var _0x3b5174;
      var _0x136ca7;
      var _0x18d395;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, '4397f9k9IVGsYsxveMqS6Ga', 'HistoryManager', undefined);
      var _0x510ef4 = _0xd86e43.ccclass;
      var _0x2ea636 = _0xd86e43.property;
      _0x571ea6 = _0x510ef4("HistoryManager");
      _0x453d6b = _0x2ea636({
        'type': _0x5ef0c0,
        'tooltip': "Bar prefab"
      });
      _0x55a97a = _0x2ea636({
        'type': _0x5d2887,
        'tooltip': "橫版顯示位置"
      });
      _0x1f4169 = _0x2ea636({
        'type': _0x5d2887,
        'tooltip': '直版顯示位置'
      });
      _0x4add19 = _0x2ea636({
        'type': _0xc81011,
        'tooltip': '贏分文字'
      });
      _0x2d2e24 = _0x2ea636({
        'type': _0x1d1f1,
        'tooltip': "總贏分"
      });
      _0x4fdd2c = function (_0x488a03) {
        function _0x707de5() {
          var _0x20f6ca;
          var _0xf311c7 = arguments.length;
          var _0x41eade = new Array(_0xf311c7);
          for (var _0xdcecd2 = 0x0; _0xdcecd2 < _0xf311c7; _0xdcecd2++) {
            _0x41eade[_0xdcecd2] = arguments[_0xdcecd2];
          }
          _0x20f6ca = _0x488a03.call.apply(_0x488a03, [this].concat(_0x41eade)) || this;
          _0x45956f(_0x20f6ca, 'm_barPrefab', _0xdc080, _0x28ffcf(_0x20f6ca));
          _0x45956f(_0x20f6ca, 'm_contentNodeL', _0x1ee1c5, _0x28ffcf(_0x20f6ca));
          _0x45956f(_0x20f6ca, "m_contentNodeS", _0x3b5174, _0x28ffcf(_0x20f6ca));
          _0x45956f(_0x20f6ca, "m_titleSprites", _0x136ca7, _0x28ffcf(_0x20f6ca));
          _0x45956f(_0x20f6ca, "m_totalWinLables", _0x18d395, _0x28ffcf(_0x20f6ca));
          _0x20f6ca.m_viewWidth = 0x0;
          _0x20f6ca.m_viewHeight = 0x0;
          _0x20f6ca.m_barNodes = [];
          _0x20f6ca.m_landscapeRecords = [];
          _0x20f6ca.m_portraitRecords = [];
          _0x20f6ca.m_landscapeRecordBars = [];
          _0x20f6ca.m_portraitRecordBars = [];
          _0x20f6ca.m_totalWin = 0x0;
          _0x20f6ca.m_newSymbolSpriteFrames = null;
          return _0x20f6ca;
        }
        _0x48aeaf(_0x707de5, _0x488a03);
        var _0x4be4cd = _0x707de5.prototype;
        _0x4be4cd.start = function () {
          this.m_viewWidth = this.m_contentNodeS.getComponent(_0x170b56).contentSize.width;
          this.m_viewHeight = this.m_contentNodeL.getComponent(_0x170b56).contentSize.height;
        };
        _0x4be4cd.Init = function () {
          this.SetWin();
        };
        _0x4be4cd.SetTxt = function () {
          var _0x402a94 = _0x49b4f8.GetGameAtlas().getSpriteFrame('TXT_WIN');
          for (var _0x5528bf = 0x0; _0x5528bf < this.m_titleSprites.length; _0x5528bf++) {
            this.m_titleSprites[_0x5528bf].spriteFrame = _0x402a94;
          }
        };
        _0x4be4cd.SetMaxWin = function (_0x291a5d) {
          this.m_totalWin = _0x189fb9.strip(_0x291a5d);
          this.SetWin();
        };
        _0x4be4cd.SetNewSymbols = function (_0xe85ead) {
          this.m_newSymbolSpriteFrames = _0xe85ead;
        };
        _0x4be4cd.SetWin = function () {
          var _0x2b863c = '';
          _0x2b863c = _0x4e825f.ShowDisplayValue(this.m_totalWin) >= 0x3e8 ? _0x4e825f.GetCoinString(this.m_totalWin) : _0x189fb9.FormatNumberThousands(_0x4e825f.ShowDisplayValue(this.m_totalWin), _0x189fb9.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          for (var _0x5b0345 = 0x0; _0x5b0345 < this.m_totalWinLables.length; _0x5b0345++) {
            this.m_totalWinLables[_0x5b0345].string = _0x2b863c;
          }
        };
        _0x4be4cd.Reset = function () {
          var _0x140f09 = this;
          this.m_totalWin = 0x0;
          this.SetWin();
          for (var _0x201667 = function () {
            _0x140f09.m_landscapeRecords.shift();
            var _0x564b0c = _0x140f09.m_landscapeRecordBars.shift();
            _0x570899(_0x564b0c.node).to(0.1, {
              'position': _0x4aedad(0x0, -0x1 * _0x140f09.m_viewHeight, 0x0)
            }).call(function () {
              _0x140f09.m_barNodes.push(_0x564b0c.node);
              _0x564b0c.node.removeFromParent();
            }).start();
          }; this.m_landscapeRecordBars.length > 0x0;) {
            _0x201667();
          }
          for (var _0x26906f = function () {
            _0x140f09.m_portraitRecords.shift();
            var _0x22630a = _0x140f09.m_portraitRecordBars.shift();
            _0x570899(_0x22630a.node).to(0.1, {
              'position': _0x4aedad(-0x1 * _0x140f09.m_viewWidth, 0x0, 0x0)
            }).call(function () {
              _0x140f09.m_barNodes.push(_0x22630a.node);
              _0x22630a.node.removeFromParent();
            }).start();
          }; this.m_portraitRecordBars.length > 0x0;) {
            _0x26906f();
          }
        };
        _0x4be4cd.AddHistoryRecords = function (_0xbb3376, _0x3ef9e9) {
          var _0x4b0525 = this;
          for (var _0x421eb2 = 0x0; _0x421eb2 < _0xbb3376.length; _0x421eb2++) {
            this.m_totalWin = _0x189fb9.plus(this.m_totalWin, _0xbb3376[_0x421eb2].Win);
          }
          this.SetWin();
          for (var _0x2c735d = 0x0; _0x2c735d < this.m_landscapeRecordBars.length; _0x2c735d++) {
            var _0x1aea8b = _0x2c735d * 0x1e + 0xf;
            this.m_landscapeRecordBars[_0x2c735d].getComponent(_0x19987f).node.setPosition(_0x4aedad(0x0, _0x1aea8b));
          }
          for (var _0x16c47f = []; this.m_landscapeRecordBars.length + _0xbb3376.length > 0x3 && 0x0 != this.m_landscapeRecordBars.length;) {
            this.m_landscapeRecords.shift();
            var _0x3403ac = this.m_landscapeRecordBars.shift();
            _0x16c47f.push(_0x3403ac.node);
          }
          var _0x32e785 = _0xbb3376.slice(-0x3);
          for (var _0x1e11c1 = 0x0; _0x1e11c1 < _0x32e785.length; _0x1e11c1++) {
            var _0xde50cd = null;
            _0xde50cd = this.m_barNodes.length > 0x0 ? this.m_barNodes.shift() : _0x1a7f5d(this.m_barPrefab);
            this.m_contentNodeL.addChild(_0xde50cd);
            var _0x3e979a = _0xde50cd.getComponent(_0x19987f);
            this.m_landscapeRecordBars.push(_0x3e979a);
            this.m_landscapeRecords.push(_0x32e785[_0x1e11c1]);
            _0xde50cd.setPosition(0x0, this.m_viewHeight + (_0x1e11c1 * 0x1e + 0xf), 0x0);
            _0x3e979a.SetInfo(_0x32e785[_0x1e11c1], this.m_newSymbolSpriteFrames);
          }
          var _0x43744f = _0x3ef9e9 ? 0.1 : 0.2;
          for (var _0x4a7309 = function () {
            var _0x540034 = _0x16c47f.pop();
            _0x570899(_0x540034).to(_0x43744f, {
              'position': _0x4aedad(0x0, -0x1 * _0x4b0525.m_viewHeight, 0x0)
            }).call(function () {
              _0x4b0525.m_barNodes.push(_0x540034);
              _0x540034.removeFromParent();
            }).start();
          }; _0x16c47f.length > 0x0;) {
            _0x4a7309();
          }
          for (var _0x22fa21 = 0x0; _0x22fa21 < this.m_landscapeRecordBars.length; _0x22fa21++) {
            var _0x52d19b = _0x22fa21 * 0x1e + 0xf;
            if (this.m_landscapeRecordBars[_0x22fa21].node.getPosition().y != _0x52d19b) {
              _0x570899(this.m_landscapeRecordBars[_0x22fa21].node).to(_0x43744f, {
                'position': _0x4aedad(0x0, _0x52d19b, 0x0)
              }).start();
            }
          }
          for (var _0x3a6be6 = 0x0; _0x3a6be6 < this.m_portraitRecordBars.length; _0x3a6be6++) {
            var _0x11243e = _0x3a6be6 * 0x7c + 0x3e;
            this.m_portraitRecordBars[_0x3a6be6].getComponent(_0x19987f).node.setPosition(_0x4aedad(_0x11243e, 0x0));
          }
          for (var _0x38a784 = []; this.m_portraitRecordBars.length + _0xbb3376.length > 0x3 && 0x0 != this.m_portraitRecordBars.length;) {
            this.m_portraitRecords.shift();
            var _0x43cbe1 = this.m_portraitRecordBars.shift();
            _0x38a784.push(_0x43cbe1.node);
          }
          var _0x515c88 = _0xbb3376.slice(-0x3);
          for (var _0x3e4203 = 0x0; _0x3e4203 < _0x515c88.length; _0x3e4203++) {
            var _0x396d81 = null;
            _0x396d81 = this.m_barNodes.length > 0x0 ? this.m_barNodes.shift() : _0x1a7f5d(this.m_barPrefab);
            this.m_contentNodeS.addChild(_0x396d81);
            var _0x213cea = _0x396d81.getComponent(_0x19987f);
            this.m_portraitRecordBars.push(_0x213cea);
            this.m_portraitRecords.push(_0x515c88[_0x3e4203]);
            _0x396d81.setPosition(this.m_viewWidth + (_0x3e4203 * 0x7c + 0x3e), 0x0, 0x0);
            _0x213cea.SetInfo(_0x515c88[_0x3e4203], this.m_newSymbolSpriteFrames);
          }
          for (var _0x4c65e9 = function () {
            var _0x16fc9f = _0x38a784.pop();
            _0x570899(_0x16fc9f).to(_0x43744f, {
              'position': _0x4aedad(-0x1 * _0x4b0525.m_viewWidth, 0x0, 0x0)
            }).call(function () {
              _0x4b0525.m_barNodes.push(_0x16fc9f);
              _0x16fc9f.removeFromParent();
            }).start();
          }; _0x38a784.length > 0x0;) {
            _0x4c65e9();
          }
          for (var _0x22578e = 0x0; _0x22578e < this.m_portraitRecordBars.length; _0x22578e++) {
            var _0x36cc5a = _0x22578e * 0x7c + 0x3e;
            if (this.m_portraitRecordBars[_0x22578e].node.getPosition().x != _0x36cc5a) {
              _0x570899(this.m_portraitRecordBars[_0x22578e].node).to(_0x43744f, {
                'position': _0x4aedad(_0x36cc5a, 0x0, 0x0)
              }).start();
            }
          }
        };
        return _0x707de5;
      }(_0x10b9dd);
      _0xdc080 = _0x14eb5c(_0x4fdd2c.prototype, "m_barPrefab", [_0x453d6b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1ee1c5 = _0x14eb5c(_0x4fdd2c.prototype, "m_contentNodeL", [_0x55a97a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3b5174 = _0x14eb5c(_0x4fdd2c.prototype, 'm_contentNodeS', [_0x1f4169], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x136ca7 = _0x14eb5c(_0x4fdd2c.prototype, "m_titleSprites", [_0x4add19], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x18d395 = _0x14eb5c(_0x4fdd2c.prototype, 'm_totalWinLables', [_0x2d2e24], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x241ecc = _0x571ea6(_0x1163ad = _0x4fdd2c) || _0x1163ad;
      var _0x5b5695;
      var _0x4896c9;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "8da9dtxrbJKR7KWF4bKWpwU", "ScatterSpine", undefined);
      var _0x2b0be2 = _0xd86e43.ccclass;
      _0x5b5695 = _0x2b0be2("ScatterSpine");
      var _0x5f20e4 = _0x5b5695(_0x4896c9 = function (_0x4b3a81) {
        function _0x21e6ba() {
          return _0x4b3a81.apply(this, arguments) || this;
        }
        _0x48aeaf(_0x21e6ba, _0x4b3a81);
        var _0x55de23 = _0x21e6ba.prototype;
        _0x55de23.ShowStop = function () {
          var _0x3bd354 = _0x44f921(_0xa0d93().mark(function _0x9fd9d1(_0x199ce8) {
            return _0xa0d93().wrap(function (_0x825bc6) {
              for (;;) {
                switch (_0x825bc6.prev = _0x825bc6.next) {
                  case 0x0:
                    _0x825bc6.next = 0x2;
                    return this.PlayAnimation("Stop", false, _0x199ce8);
                  case 0x2:
                  case "end":
                    return _0x825bc6.stop();
                }
              }
            }, _0x9fd9d1, this);
          }));
          return function (_0x203bd3) {
            return _0x3bd354.apply(this, arguments);
          };
        }();
        _0x55de23.ShowNearWin = function () {
          var _0x14fe6b = _0x44f921(_0xa0d93().mark(function _0x5ad215() {
            return _0xa0d93().wrap(function (_0x44f077) {
              for (;;) {
                switch (_0x44f077.prev = _0x44f077.next) {
                  case 0x0:
                    _0x44f077.next = 0x2;
                    return this.PlayAnimation("NearWin", true);
                  case 0x2:
                  case "end":
                    return _0x44f077.stop();
                }
              }
            }, _0x5ad215, this);
          }));
          return function () {
            return _0x14fe6b.apply(this, arguments);
          };
        }();
        _0x55de23.ShowShake = function () {
          var _0x59388e = _0x44f921(_0xa0d93().mark(function _0x32f90c(_0x26238f) {
            var _0x27db5e;
            return _0xa0d93().wrap(function (_0x1520df) {
              for (;;) {
                switch (_0x1520df.prev = _0x1520df.next) {
                  case 0x0:
                    if (!_0x26238f) {
                      _0x1520df.next = 0x5;
                      break;
                    }
                    _0x1520df.next = 0x3;
                    return this.PlayAnimation("ShakeA");
                  case 0x3:
                    _0x1520df.next = 0xc;
                    break;
                  case 0x5:
                    _0x27db5e = 0x0;
                  case 0x6:
                    if (!(_0x27db5e < _0x4e825f.SymbolShakeTime)) {
                      _0x1520df.next = 0xc;
                      break;
                    }
                    _0x1520df.next = 0x9;
                    return this.PlayAnimation("ShakeB");
                  case 0x9:
                    _0x27db5e++;
                    _0x1520df.next = 0x6;
                    break;
                  case 0xc:
                  case 'end':
                    return _0x1520df.stop();
                }
              }
            }, _0x32f90c, this);
          }));
          return function (_0x3872f8) {
            return _0x59388e.apply(this, arguments);
          };
        }();
        return _0x21e6ba;
      }(_0x2b60bd)) || _0x4896c9;
      var _0x563cdb;
      var _0x423f28;
      var _0x19b196;
      var _0x4a9ddb;
      var _0x21171a;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, '0228796wjZKSZjz/BecWXb8', 'CharacterSpine', undefined);
      var _0x1423e2 = [0x0, 0x3, 0x3, 0x1, 0x3];
      var _0x7ff7b8 = 0x0;
      var _0x515f3b = _0xd86e43.ccclass;
      var _0x65ab8 = _0xd86e43.property;
      _0x563cdb = _0x515f3b('CharacterSpine');
      _0x423f28 = _0x65ab8({
        'type': _0xff2ed7.Skeleton,
        'tooltip': "Spine"
      });
      _0x4a9ddb = function (_0x27fc3e) {
        function _0x4e902c() {
          var _0x2cf891;
          var _0x5961bb = arguments.length;
          var _0x6fe45f = new Array(_0x5961bb);
          for (var _0x5f0680 = 0x0; _0x5f0680 < _0x5961bb; _0x5f0680++) {
            _0x6fe45f[_0x5f0680] = arguments[_0x5f0680];
          }
          _0x2cf891 = _0x27fc3e.call.apply(_0x27fc3e, [this].concat(_0x6fe45f)) || this;
          _0x45956f(_0x2cf891, "m_spine", _0x21171a, _0x28ffcf(_0x2cf891));
          _0x2cf891.m_changeCb = null;
          return _0x2cf891;
        }
        _0x48aeaf(_0x4e902c, _0x27fc3e);
        var _0x49243c = _0x4e902c.prototype;
        _0x49243c.start = function () {
          for (var _0x23e5b4 = 0x1; _0x23e5b4 < _0x1423e2.length; _0x23e5b4++) {
            _0x7ff7b8 = _0x189fb9.plus(_0x7ff7b8, _0x1423e2[_0x23e5b4]);
          }
        };
        _0x49243c.ShowIdle = function () {
          var _0x34c85e = Math.floor(Math.random() * _0x7ff7b8 + 0x1);
          var _0x163946 = 0x1;
          for (var _0x123f8f = 0x1; _0x123f8f < _0x1423e2.length; _0x123f8f++) {
            if ((_0x34c85e -= _0x1423e2[_0x123f8f]) <= 0x0) {
              _0x163946 = _0x123f8f;
              break;
            }
          }
          this.PlayAnimation("Idle" + _0x163946);
        };
        _0x49243c.ShowBigWin = function () {
          var _0x1e6846 = _0x44f921(_0xa0d93().mark(function _0x24936c() {
            return _0xa0d93().wrap(function (_0x11ac49) {
              for (;;) {
                switch (_0x11ac49.prev = _0x11ac49.next) {
                  case 0x0:
                    _0x11ac49.next = 0x2;
                    return this.PlayAnimation("BigWin_Start", false, false);
                  case 0x2:
                    this.PlayAnimation("BigWin_Loop", true, false);
                  case 0x3:
                  case "end":
                    return _0x11ac49.stop();
                }
              }
            }, _0x24936c, this);
          }));
          return function () {
            return _0x1e6846.apply(this, arguments);
          };
        }();
        _0x49243c.ShowWin = function () {
          this.PlayAnimation("Win");
        };
        _0x49243c.ShowWaitWild = function () {
          this.PlayAnimation("Wild_Loop", true, false);
        };
        _0x49243c.ShowWild = function () {
          this.PlayAnimation("Wild_End");
        };
        _0x49243c.ShowWaitBoom = function () {
          var _0x39b692 = _0x44f921(_0xa0d93().mark(function _0x21d061() {
            return _0xa0d93().wrap(function (_0x2edf08) {
              for (;;) {
                switch (_0x2edf08.prev = _0x2edf08.next) {
                  case 0x0:
                    _0x2edf08.next = 0x2;
                    return this.PlayAnimation("Bomb_Start", false, false);
                  case 0x2:
                    this.PlayAnimation("Bomb_Loop", true, false);
                  case 0x3:
                  case "end":
                    return _0x2edf08.stop();
                }
              }
            }, _0x21d061, this);
          }));
          return function () {
            return _0x39b692.apply(this, arguments);
          };
        }();
        _0x49243c.ShowBoom = function () {
          this.PlayAnimation("Bomb_End");
        };
        _0x49243c.ShowScatterWin = function () {
          var _0x1262d0 = _0x44f921(_0xa0d93().mark(function _0x2b3fa0(_0x45373f) {
            return _0xa0d93().wrap(function (_0x4f7ce3) {
              for (;;) {
                switch (_0x4f7ce3.prev = _0x4f7ce3.next) {
                  case 0x0:
                    _0x4f7ce3.next = 0x2;
                    return this.PlayAnimation("ScatterWin_Start", false, false);
                  case 0x2:
                    this.PlayAnimation("ScatterWin_Loop", _0x45373f, !_0x45373f);
                  case 0x3:
                  case "end":
                    return _0x4f7ce3.stop();
                }
              }
            }, _0x2b3fa0, this);
          }));
          return function (_0x28205a) {
            return _0x1262d0.apply(this, arguments);
          };
        }();
        _0x49243c.ShowScatterWinEnd = function () {
          this.PlayAnimation("ScatterWin_End", false, false);
        };
        _0x49243c.ShowDeclare = function () {
          var _0x9b6429 = _0x44f921(_0xa0d93().mark(function _0x5f1606(_0x3c5885) {
            var _0x587bdd;
            return _0xa0d93().wrap(function (_0x2fe55a) {
              for (;;) {
                switch (_0x2fe55a.prev = _0x2fe55a.next) {
                  case 0x0:
                    _0x587bdd = _0x3c5885 ? '_L' : '_S';
                    _0x2fe55a.next = 0x3;
                    return this.PlayAnimation("FG_Declare" + _0x587bdd + "_End", false, false);
                  case 0x3:
                  case "end":
                    return _0x2fe55a.stop();
                }
              }
            }, _0x5f1606, this);
          }));
          return function (_0x53000d) {
            return _0x9b6429.apply(this, arguments);
          };
        }();
        _0x49243c.GetFGComplimentWinTime = function (_0x5f2bdc) {
          if (undefined === _0x5f2bdc) {
            _0x5f2bdc = 0x0;
          }
          var _0x86ca4c = 0x0;
          var _0x5a093e = this.m_spine.findAnimation("FG_Compliment_Start");
          _0x86ca4c = _0x189fb9.plus(_0x86ca4c, _0x5a093e.duration);
          var _0x2649fe = this.m_spine.findAnimation("FG_Compliment_Loop");
          return _0x86ca4c = _0x189fb9.plus(_0x86ca4c, _0x189fb9.times(_0x2649fe.duration, _0x5f2bdc));
        };
        _0x49243c.ShowCompliment = function () {
          var _0x31891c = _0x44f921(_0xa0d93().mark(function _0x2798bf(_0x180c59, _0x3084e1) {
            var _0x48df53;
            return _0xa0d93().wrap(function (_0x53a3a3) {
              for (;;) {
                switch (_0x53a3a3.prev = _0x53a3a3.next) {
                  case 0x0:
                    if (undefined === _0x3084e1) {
                      _0x3084e1 = 0x0;
                    }
                    this.m_changeCb = _0x180c59;
                    _0x53a3a3.next = 0x4;
                    return this.PlayAnimation("FG_Compliment_Start", false, false);
                  case 0x4:
                    if (!(_0x3084e1 > 0x0)) {
                      _0x53a3a3.next = 0xc;
                      break;
                    }
                    _0x48df53 = 0x0;
                  case 0x6:
                    if (!(_0x48df53 < _0x3084e1)) {
                      _0x53a3a3.next = 0xc;
                      break;
                    }
                    _0x53a3a3.next = 0x9;
                    return this.PlayAnimation("FG_Compliment_Loop", false, false);
                  case 0x9:
                    _0x48df53++;
                    _0x53a3a3.next = 0x6;
                    break;
                  case 0xc:
                    _0x53a3a3.next = 0xe;
                    return this.PlayAnimation("FG_Compliment_End");
                  case 0xe:
                  case 'end':
                    return _0x53a3a3.stop();
                }
              }
            }, _0x2798bf, this);
          }));
          return function (_0x218ca6, _0x4ce4f0) {
            return _0x31891c.apply(this, arguments);
          };
        }();
        _0x49243c.ShowMgDeclare = function () {
          this.PlayAnimation("MG_Declare");
        };
        _0x49243c.ShowGameIntro = function () {
          var _0x2d9b67 = _0x44f921(_0xa0d93().mark(function _0x27f2ee(_0x4651a7) {
            return _0xa0d93().wrap(function (_0x360a44) {
              for (;;) {
                switch (_0x360a44.prev = _0x360a44.next) {
                  case 0x0:
                    _0x360a44.next = 0x2;
                    return this.PlayAnimation("GameIntro" + (_0x4651a7 ? '_L' : '_S'), false, false);
                  case 0x2:
                  case "end":
                    return _0x360a44.stop();
                }
              }
            }, _0x27f2ee, this);
          }));
          return function (_0x4a0fa6) {
            return _0x2d9b67.apply(this, arguments);
          };
        }();
        _0x49243c.ShowNearWin = function () {
          var _0xf4e01e = _0x44f921(_0xa0d93().mark(function _0x11e8fe() {
            return _0xa0d93().wrap(function (_0x51e8d0) {
              for (;;) {
                switch (_0x51e8d0.prev = _0x51e8d0.next) {
                  case 0x0:
                    _0x51e8d0.next = 0x2;
                    return this.PlayAnimation("Nearwin_Start", false, false);
                  case 0x2:
                    this.PlayAnimation("Nearwin_Loop", true, false);
                  case 0x3:
                  case 'end':
                    return _0x51e8d0.stop();
                }
              }
            }, _0x11e8fe, this);
          }));
          return function () {
            return _0xf4e01e.apply(this, arguments);
          };
        }();
        _0x49243c.OnEvent = function (_0x24cb05, _0x5cd046) {
          switch (_0x5cd046) {
            case "AnimationEvent":
              var _0x26ed23;
              if (_0x24cb05 == "FG_Compliment_End") {
                if (!(null == (_0x26ed23 = this.m_changeCb))) {
                  _0x26ed23.call(this);
                }
                this.m_changeCb = null;
              }
          }
        };
        _0x49243c.PlayAnimation = function (_0x70dd40, _0x401f44, _0x3fa3b1) {
          var _0x46e93e = this;
          if (undefined === _0x401f44) {
            _0x401f44 = false;
          }
          if (undefined === _0x3fa3b1) {
            _0x3fa3b1 = true;
          }
          switch (_0x70dd40) {
            case "Idle2":
              _0x3bae1e.Play(_0x4e825f.AudioClips.Character_1);
              break;
            case "Idle3":
              _0x3bae1e.Play(_0x4e825f.AudioClips.Character_2);
              break;
            case "Idle4":
              _0x3bae1e.Play(_0x4e825f.AudioClips.Character_3);
              break;
            case "ScatterWin_End":
              _0x3bae1e.Play(_0x4e825f.AudioClips.Character_4);
              break;
            case "Win":
              _0x3bae1e.Play(_0x4e825f.AudioClips.Character_5);
              break;
            case "Wild_End":
              _0x3bae1e.Play(_0x4e825f.AudioClips.Character_6);
          }
          return new Promise(function (_0x14656f) {
            _0x46e93e.m_spine.clearTrack(0x0);
            _0x46e93e.m_spine.setToSetupPose();
            var _0x36ffda = _0x46e93e.m_spine.setAnimation(0x0, _0x70dd40, _0x401f44);
            var _0x5afde4 = function () {
              if (_0x3fa3b1 && _0x70dd40 != "FG_Compliment_End") {
                _0x46e93e.ShowIdle();
              }
              _0x14656f(null);
            };
            if (_0x36ffda) {
              _0x46e93e.m_spine.setTrackEventListener(_0x36ffda, function (_0x1fdefe, _0x3f43c8) {
                _0x46e93e.OnEvent(_0x70dd40, _0x3f43c8.data.name);
              });
              _0x46e93e.m_spine.setTrackCompleteListener(_0x36ffda, function () {
                _0x5afde4();
              });
            } else {
              _0x46e93e.m_spine.setCompleteListener(function () {
                _0x5afde4();
              });
            }
          });
        };
        return _0x4e902c;
      }(_0x10b9dd);
      _0x21171a = _0x14eb5c(_0x4a9ddb.prototype, "m_spine", [_0x423f28], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x115ccf = _0x563cdb(_0x19b196 = _0x4a9ddb) || _0x19b196;
      var _0x55c17e;
      var _0xc57a98;
      var _0x36f40d;
      var _0x5e75bc;
      var _0x40bd60;
      var _0x30918c;
      var _0x208ed2;
      var _0x541e08;
      var _0x301cb2;
      var _0x487e9d;
      var _0x3f41eb;
      var _0x56767b;
      var _0x4a8138;
      var _0x44be57;
      var _0x28f594;
      var _0x147917;
      var _0x2dcfec;
      var _0x1087ea;
      var _0x533487;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "a5a6dpIkP5MA4OvDMAv1O42", "FG_DeclareSpine", undefined);
      var _0x254b6b = _0xd86e43.ccclass;
      var _0x48f9a2 = _0xd86e43.property;
      _0x55c17e = _0x254b6b('FG_DeclareSpine');
      _0xc57a98 = _0x48f9a2({
        'type': _0xff2ed7.Skeleton,
        'tooltip': 'Spine'
      });
      _0x36f40d = _0x48f9a2({
        'type': _0xff2ed7.Skeleton,
        'tooltip': '前景'
      });
      _0x5e75bc = _0x48f9a2({
        'type': _0x1d1f1,
        'tooltip': '局數'
      });
      _0x40bd60 = _0x48f9a2({
        'type': _0x115ccf,
        'tooltip': '角色'
      });
      _0x30918c = _0x48f9a2({
        'type': _0xc81011,
        'tooltip': '恭喜'
      });
      _0x208ed2 = _0x48f9a2({
        'type': _0xc81011,
        'tooltip': "你贏得"
      });
      _0x541e08 = _0x48f9a2({
        'type': _0xc81011,
        'tooltip': "免費局數"
      });
      _0x301cb2 = _0x48f9a2({
        'type': _0xc81011,
        'tooltip': '提示'
      });
      _0x3f41eb = function (_0x3becbb) {
        function _0x530559() {
          var _0x1b9543;
          var _0x101ad3 = arguments.length;
          var _0x3c1784 = new Array(_0x101ad3);
          for (var _0x2f3068 = 0x0; _0x2f3068 < _0x101ad3; _0x2f3068++) {
            _0x3c1784[_0x2f3068] = arguments[_0x2f3068];
          }
          _0x1b9543 = _0x3becbb.call.apply(_0x3becbb, [this].concat(_0x3c1784)) || this;
          _0x45956f(_0x1b9543, 'm_backgroundspine', _0x56767b, _0x28ffcf(_0x1b9543));
          _0x45956f(_0x1b9543, "m_foregroundSpine", _0x4a8138, _0x28ffcf(_0x1b9543));
          _0x45956f(_0x1b9543, "m_roundLabel", _0x44be57, _0x28ffcf(_0x1b9543));
          _0x45956f(_0x1b9543, "m_characterSpine", _0x28f594, _0x28ffcf(_0x1b9543));
          _0x45956f(_0x1b9543, 'm_congratSprite', _0x147917, _0x28ffcf(_0x1b9543));
          _0x45956f(_0x1b9543, 'm_winSprite', _0x2dcfec, _0x28ffcf(_0x1b9543));
          _0x45956f(_0x1b9543, 'm_freeRound', _0x1087ea, _0x28ffcf(_0x1b9543));
          _0x45956f(_0x1b9543, "m_hintSprite", _0x533487, _0x28ffcf(_0x1b9543));
          _0x1b9543.m_changeCb = null;
          return _0x1b9543;
        }
        _0x48aeaf(_0x530559, _0x3becbb);
        var _0x86e9f8 = _0x530559.prototype;
        _0x86e9f8.Show = function () {
          var _0x50e8fc = _0x44f921(_0xa0d93().mark(function _0x4d3eeb(_0x2f44ad, _0xdf485a, _0x4e27b9) {
            var _0x45f38e;
            var _0x134dad;
            return _0xa0d93().wrap(function (_0x22358b) {
              for (;;) {
                switch (_0x22358b.prev = _0x22358b.next) {
                  case 0x0:
                    this.m_changeCb = _0x4e27b9;
                    if (_0x49b4f8.CurrLang !== _0x3e36bf.Lang.EN) {
                      _0x45f38e = _0x49b4f8.GetGameAtlas();
                      this.m_congratSprite.spriteFrame = _0x45f38e.getSpriteFrame("TXT_congrats");
                      this.m_winSprite.spriteFrame = _0x45f38e.getSpriteFrame("TXT_FG_Declare_01");
                      this.m_freeRound.spriteFrame = _0x45f38e.getSpriteFrame("TXT_FG_Declare_02");
                      this.m_hintSprite.spriteFrame = _0x45f38e.getSpriteFrame('TXT_FG_Declare_03');
                    }
                    this.node.active = true;
                    _0x134dad = _0xdf485a ? 'L' : 'S';
                    this.m_roundLabel.string = _0x2f44ad.toString();
                    this.PlayAnimation(this.m_backgroundspine, "FG_Declare_" + _0x134dad + "_Start");
                    _0x22358b.next = 0x8;
                    return this.PlayAnimation(this.m_foregroundSpine, "FG_Declare_" + _0x134dad + "_Start");
                  case 0x8:
                    this.PlayAnimation(this.m_backgroundspine, "FG_Declare_" + _0x134dad + "_Loop");
                    _0x22358b.next = 0xb;
                    return this.PlayAnimation(this.m_foregroundSpine, "FG_Declare_" + _0x134dad + "_Loop");
                  case 0xb:
                    this.m_characterSpine.ShowDeclare(_0xdf485a);
                    this.PlayAnimation(this.m_backgroundspine, "FG_Declare_" + _0x134dad + '_End');
                    _0x22358b.next = 0xf;
                    return this.PlayAnimation(this.m_foregroundSpine, "FG_Declare_" + _0x134dad + '_End');
                  case 0xf:
                    this.node.active = false;
                  case 0x10:
                  case "end":
                    return _0x22358b.stop();
                }
              }
            }, _0x4d3eeb, this);
          }));
          return function (_0x3872b6, _0x2ec2e5, _0x1569c6) {
            return _0x50e8fc.apply(this, arguments);
          };
        }();
        _0x86e9f8.OnEvent = function (_0x4fe702, _0xda3bc6) {
          switch (_0xda3bc6) {
            case 'AnimationEvent':
              var _0xff076b;
              if (_0x4fe702 == "FG_Declare_L_End" || _0x4fe702 == "FG_Declare_S_End") {
                if (!(null == (_0xff076b = this.m_changeCb))) {
                  _0xff076b.call(this);
                }
                this.m_changeCb = null;
              }
          }
        };
        _0x86e9f8.PlayAnimation = function (_0x2e67fa, _0x2fbcfa, _0x33ba4f, _0x21c15e) {
          var _0x1168b4 = this;
          if (undefined === _0x33ba4f) {
            _0x33ba4f = false;
          }
          if (undefined === _0x21c15e) {
            _0x21c15e = 0x1;
          }
          return new Promise(function (_0x5be2dd) {
            _0x2e67fa.timeScale = _0x21c15e;
            _0x2e67fa.clearTrack(0x0);
            _0x2e67fa.setToSetupPose();
            var _0x17eea3 = _0x2e67fa.setAnimation(0x0, _0x2fbcfa, _0x33ba4f);
            var _0xa2f579 = function () {
              _0x5be2dd(null);
            };
            if (_0x17eea3) {
              _0x2e67fa.setTrackEventListener(_0x17eea3, function (_0x36affe, _0x154703) {
                _0x1168b4.OnEvent(_0x2fbcfa, _0x154703.data.name);
              });
              _0x2e67fa.setTrackCompleteListener(_0x17eea3, function () {
                _0xa2f579();
              });
            } else {
              _0x2e67fa.setCompleteListener(function () {
                _0xa2f579();
              });
            }
          });
        };
        return _0x530559;
      }(_0x10b9dd);
      _0x56767b = _0x14eb5c(_0x3f41eb.prototype, 'm_backgroundspine', [_0xc57a98], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4a8138 = _0x14eb5c(_0x3f41eb.prototype, "m_foregroundSpine", [_0x36f40d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x44be57 = _0x14eb5c(_0x3f41eb.prototype, "m_roundLabel", [_0x5e75bc], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x28f594 = _0x14eb5c(_0x3f41eb.prototype, "m_characterSpine", [_0x40bd60], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x147917 = _0x14eb5c(_0x3f41eb.prototype, 'm_congratSprite', [_0x30918c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2dcfec = _0x14eb5c(_0x3f41eb.prototype, "m_winSprite", [_0x208ed2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1087ea = _0x14eb5c(_0x3f41eb.prototype, "m_freeRound", [_0x541e08], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x533487 = _0x14eb5c(_0x3f41eb.prototype, 'm_hintSprite', [_0x301cb2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x544b5d = _0x55c17e(_0x487e9d = _0x3f41eb) || _0x487e9d;
      var _0x5a5583;
      var _0x3b0a03;
      var _0x13e19b;
      var _0x36a1d5;
      var _0x537991;
      var _0x4456e0;
      var _0x24fb56;
      var _0x2d5b14;
      var _0x130781;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, 'f71e5wjWMNJRI6xreJKiVcL', "FG_CounterSpine", undefined);
      var _0x384040 = _0xd86e43.ccclass;
      var _0x32124b = _0xd86e43.property;
      _0x5a5583 = _0x384040('FG_CounterSpine');
      _0x3b0a03 = _0x32124b({
        'type': _0xff2ed7.Skeleton,
        'tooltip': "Spine"
      });
      _0x13e19b = _0x32124b({
        'type': _0x1d1f1,
        'tooltip': '局數'
      });
      _0x36a1d5 = _0x32124b({
        'type': _0xc81011,
        'tooltip': "免費局數"
      });
      _0x4456e0 = function (_0x4e27a9) {
        function _0x4468b1() {
          var _0x469858;
          var _0x428f20 = arguments.length;
          var _0x58a798 = new Array(_0x428f20);
          for (var _0xdd515e = 0x0; _0xdd515e < _0x428f20; _0xdd515e++) {
            _0x58a798[_0xdd515e] = arguments[_0xdd515e];
          }
          _0x469858 = _0x4e27a9.call.apply(_0x4e27a9, [this].concat(_0x58a798)) || this;
          _0x45956f(_0x469858, "m_spine", _0x24fb56, _0x28ffcf(_0x469858));
          _0x45956f(_0x469858, "m_roundLabel", _0x2d5b14, _0x28ffcf(_0x469858));
          _0x45956f(_0x469858, 'm_freeRoundSprite', _0x130781, _0x28ffcf(_0x469858));
          _0x469858.m_round = 0x0;
          return _0x469858;
        }
        _0x48aeaf(_0x4468b1, _0x4e27a9);
        var _0x407473 = _0x4468b1.prototype;
        _0x407473.Show = function (_0x5012b8) {
          if (_0x49b4f8.CurrLang !== _0x3e36bf.Lang.EN) {
            this.m_freeRoundSprite.spriteFrame = _0x49b4f8.GetGameAtlas().getSpriteFrame('TXT_FG_Counter_01');
          }
          this.node.active = true;
          this.m_round = _0x5012b8;
          this.m_roundLabel.string = this.m_round.toString();
          _0x3bae1e.Play(_0x4e825f.AudioClips.FG_Add_panel);
          this.PlayAnimation("Show");
        };
        _0x407473.Hide = function () {
          this.node.active = false;
        };
        _0x407473.ShowAddRound = function () {
          var _0xe9006d = _0x44f921(_0xa0d93().mark(function _0x356f4f(_0x5634f8) {
            return _0xa0d93().wrap(function (_0x39cf58) {
              for (;;) {
                switch (_0x39cf58.prev = _0x39cf58.next) {
                  case 0x0:
                    this.m_round = _0x5634f8;
                    this.m_roundLabel.string = this.m_round.toString();
                    _0x3bae1e.Play(_0x4e825f.AudioClips.FG_Add_panel);
                    _0x39cf58.next = 0x5;
                    return this.PlayAnimation("Win");
                  case 0x5:
                  case "end":
                    return _0x39cf58.stop();
                }
              }
            }, _0x356f4f, this);
          }));
          return function (_0x3c5673) {
            return _0xe9006d.apply(this, arguments);
          };
        }();
        _0x407473.DecreaseRound = function () {
          this.m_round = _0x189fb9.minus(this.m_round, 0x1);
          this.m_roundLabel.string = this.m_round.toString();
        };
        _0x407473.ShowIdle = function () {
          this.PlayAnimation("Idle", true);
        };
        _0x407473.PlayAnimation = function (_0x5e8468, _0x30fd5b, _0x398150) {
          var _0x56f038 = this;
          if (undefined === _0x30fd5b) {
            _0x30fd5b = false;
          }
          if (undefined === _0x398150) {
            _0x398150 = 0x1;
          }
          return new Promise(function (_0xb40a57) {
            _0x56f038.m_spine.timeScale = _0x398150;
            _0x56f038.m_spine.clearTrack(0x0);
            _0x56f038.m_spine.setToSetupPose();
            var _0x4eb09c = _0x56f038.m_spine.setAnimation(0x0, _0x5e8468, _0x30fd5b);
            var _0x46fad0 = function () {
              if (_0x5e8468 != "Idle") {
                _0x56f038.ShowIdle();
              }
              _0xb40a57(null);
            };
            if (_0x4eb09c) {
              _0x56f038.m_spine.setTrackEventListener(_0x4eb09c, function (_0x47eee8, _0x2e83f3) {});
              _0x56f038.m_spine.setTrackCompleteListener(_0x4eb09c, function () {
                _0x46fad0();
              });
            } else {
              _0x56f038.m_spine.setCompleteListener(function () {
                _0x46fad0();
              });
            }
          });
        };
        return _0x4468b1;
      }(_0x10b9dd);
      _0x24fb56 = _0x14eb5c(_0x4456e0.prototype, "m_spine", [_0x3b0a03], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2d5b14 = _0x14eb5c(_0x4456e0.prototype, "m_roundLabel", [_0x13e19b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x130781 = _0x14eb5c(_0x4456e0.prototype, "m_freeRoundSprite", [_0x36a1d5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x1d5cd1 = _0x5a5583(_0x537991 = _0x4456e0) || _0x537991;
      var _0x206abf;
      var _0x3c8eb9;
      var _0x798c17;
      var _0x121752;
      var _0x8557da;
      var _0x545f8e;
      var _0x308595;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "a155aTidrZGV7/iJ8wciGCo", "FG_AddFreeSpine", undefined);
      var _0x4c6b13 = _0xd86e43.ccclass;
      var _0x1e34e3 = _0xd86e43.property;
      _0x206abf = _0x4c6b13("FG_AddFreeSpine");
      _0x3c8eb9 = _0x1e34e3({
        'type': _0xff2ed7.Skeleton,
        'tooltip': "Spine"
      });
      _0x798c17 = _0x1e34e3({
        'type': _0x1d1f1,
        'tooltip': '局數'
      });
      _0x8557da = function (_0x13a02c) {
        function _0x34726c() {
          var _0x119234;
          var _0x3a6bb4 = arguments.length;
          var _0x568539 = new Array(_0x3a6bb4);
          for (var _0x1ff052 = 0x0; _0x1ff052 < _0x3a6bb4; _0x1ff052++) {
            _0x568539[_0x1ff052] = arguments[_0x1ff052];
          }
          _0x119234 = _0x13a02c.call.apply(_0x13a02c, [this].concat(_0x568539)) || this;
          _0x45956f(_0x119234, 'm_spine', _0x545f8e, _0x28ffcf(_0x119234));
          _0x45956f(_0x119234, "m_roundLabel", _0x308595, _0x28ffcf(_0x119234));
          return _0x119234;
        }
        _0x48aeaf(_0x34726c, _0x13a02c);
        var _0x396752 = _0x34726c.prototype;
        _0x396752.Show = function () {
          var _0x178693 = _0x44f921(_0xa0d93().mark(function _0x44316d(_0x26a22e) {
            return _0xa0d93().wrap(function (_0x4411d6) {
              for (;;) {
                switch (_0x4411d6.prev = _0x4411d6.next) {
                  case 0x0:
                    this.node.active = true;
                    this.m_roundLabel.string = _0x26a22e.toString();
                    _0x3bae1e.Play(_0x4e825f.AudioClips.FG_Add);
                    _0x4411d6.next = 0x5;
                    return this.PlayAnimation('Start');
                  case 0x5:
                    this.node.active = false;
                  case 0x6:
                  case "end":
                    return _0x4411d6.stop();
                }
              }
            }, _0x44316d, this);
          }));
          return function (_0x22cccc) {
            return _0x178693.apply(this, arguments);
          };
        }();
        _0x396752.PlayAnimation = function (_0x4ff7b3, _0x565bdd, _0x35e12c) {
          var _0x2d0d61 = this;
          if (undefined === _0x565bdd) {
            _0x565bdd = false;
          }
          if (undefined === _0x35e12c) {
            _0x35e12c = 0x1;
          }
          return new Promise(function (_0x3cd174) {
            _0x2d0d61.m_spine.timeScale = _0x35e12c;
            _0x2d0d61.m_spine.clearTrack(0x0);
            _0x2d0d61.m_spine.setToSetupPose();
            var _0x15097c = _0x2d0d61.m_spine.setAnimation(0x0, _0x4ff7b3, _0x565bdd);
            var _0x53df31 = function () {
              _0x3cd174(null);
            };
            if (_0x15097c) {
              _0x2d0d61.m_spine.setTrackEventListener(_0x15097c, function (_0x520c3a, _0x25ca53) {});
              _0x2d0d61.m_spine.setTrackCompleteListener(_0x15097c, function () {
                _0x53df31();
              });
            } else {
              _0x2d0d61.m_spine.setCompleteListener(function () {
                _0x53df31();
              });
            }
          });
        };
        return _0x34726c;
      }(_0x10b9dd);
      _0x545f8e = _0x14eb5c(_0x8557da.prototype, "m_spine", [_0x3c8eb9], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x308595 = _0x14eb5c(_0x8557da.prototype, "m_roundLabel", [_0x798c17], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x28ac28 = _0x206abf(_0x121752 = _0x8557da) || _0x121752;
      var _0x482b65;
      var _0x5f4bf4;
      var _0x6b6659;
      var _0x426270;
      var _0x4ff28c;
      var _0x45102e;
      var _0x7e643c;
      var _0x410e71;
      var _0x121aec;
      var _0x38954d;
      var _0x105b64;
      var _0x53c5b4;
      var _0x12b059;
      var _0x186674;
      var _0x203bd8;
      var _0xb2511e;
      var _0x5c0657;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "96889CAPVJHaqM7VXAZq6cB", "FG_Compliment", undefined);
      var _0x42a7a5 = _0xd86e43.ccclass;
      var _0x5d86ed = _0xd86e43.property;
      _0x482b65 = _0x42a7a5("FG_Compliment");
      _0x5f4bf4 = _0x5d86ed({
        'type': _0x115ccf,
        'tooltip': '角色'
      });
      _0x6b6659 = _0x5d86ed({
        'type': _0x1d1f1,
        'tooltip': '贏分'
      });
      _0x426270 = _0x5d86ed({
        'type': _0x1d1f1,
        'tooltip': '局數'
      });
      _0x4ff28c = _0x5d86ed({
        'type': _0xc81011,
        'tooltip': '恭喜'
      });
      _0x45102e = _0x5d86ed({
        'type': _0xc81011,
        'tooltip': "你贏得"
      });
      _0x7e643c = _0x5d86ed({
        'type': _0xc81011,
        'tooltip': '在'
      });
      _0x410e71 = _0x5d86ed({
        'type': _0xc81011,
        'tooltip': "免費遊戲"
      });
      _0x38954d = function (_0x19a59d) {
        function _0x1315d4() {
          var _0xd2db0a;
          var _0x1af8ff = arguments.length;
          var _0x1d5bb9 = new Array(_0x1af8ff);
          for (var _0x51a60d = 0x0; _0x51a60d < _0x1af8ff; _0x51a60d++) {
            _0x1d5bb9[_0x51a60d] = arguments[_0x51a60d];
          }
          _0xd2db0a = _0x19a59d.call.apply(_0x19a59d, [this].concat(_0x1d5bb9)) || this;
          _0x45956f(_0xd2db0a, "m_characterSpine", _0x105b64, _0x28ffcf(_0xd2db0a));
          _0x45956f(_0xd2db0a, 'm_winLabel', _0x53c5b4, _0x28ffcf(_0xd2db0a));
          _0x45956f(_0xd2db0a, "m_roundLabel", _0x12b059, _0x28ffcf(_0xd2db0a));
          _0x45956f(_0xd2db0a, "m_congratSprite", _0x186674, _0x28ffcf(_0xd2db0a));
          _0x45956f(_0xd2db0a, "m_winSprite", _0x203bd8, _0x28ffcf(_0xd2db0a));
          _0x45956f(_0xd2db0a, "m_inSprite", _0xb2511e, _0x28ffcf(_0xd2db0a));
          _0x45956f(_0xd2db0a, 'm_fgSprite', _0x5c0657, _0x28ffcf(_0xd2db0a));
          return _0xd2db0a;
        }
        _0x48aeaf(_0x1315d4, _0x19a59d);
        _0x1315d4.prototype.Show = function () {
          var _0xe5d3b0 = _0x44f921(_0xa0d93().mark(function _0x24f242(_0x573100, _0x5447eb, _0x58fa34) {
            var _0x946388;
            var _0x314083;
            var _0xf6ec5d;
            var _0x4e7172;
            var _0x4e2292 = this;
            return _0xa0d93().wrap(function (_0x10f7b5) {
              for (;;) {
                switch (_0x10f7b5.prev = _0x10f7b5.next) {
                  case 0x0:
                    this.node.active = true;
                    if (_0x49b4f8.CurrLang !== _0x3e36bf.Lang.EN) {
                      _0x946388 = _0x49b4f8.GetGameAtlas();
                      this.m_congratSprite.spriteFrame = _0x946388.getSpriteFrame("TXT_congrats");
                      this.m_winSprite.spriteFrame = _0x946388.getSpriteFrame("TXT_FG_1");
                      this.m_inSprite.spriteFrame = _0x946388.getSpriteFrame("TXT_FG_2_1");
                      this.m_fgSprite.spriteFrame = _0x946388.getSpriteFrame("TXT_FG_2_2");
                    }
                    this.m_roundLabel.string = _0x189fb9.strip(_0x5447eb).toString();
                    _0x314083 = _0x189fb9.divide(0x4, 0.02);
                    _0xf6ec5d = 0x0;
                    _0x4e7172 = _0x189fb9.divide(_0x573100, _0x314083);
                    _0x570899(this.node).repeat(_0x314083, _0x570899().call(function () {
                      if ((_0xf6ec5d = _0x189fb9.plus(_0xf6ec5d, _0x4e7172)) >= _0x573100) {
                        _0xf6ec5d = _0x573100;
                      }
                      _0x4e2292.m_winLabel.string = _0x189fb9.FormatNumberThousands(_0x4e825f.ShowDisplayValue(_0xf6ec5d), _0x189fb9.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    }).delay(0.02)).call(function () {
                      _0x4e2292.m_winLabel.string = _0x189fb9.FormatNumberThousands(_0x4e825f.ShowDisplayValue(_0x573100), _0x189fb9.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    }).start();
                    _0x10f7b5.next = 0x9;
                    return this.m_characterSpine.ShowCompliment(function () {
                      if (!(null == _0x58fa34)) {
                        _0x58fa34();
                      }
                    });
                  case 0x9:
                    this.node.active = false;
                  case 0xa:
                  case 'end':
                    return _0x10f7b5.stop();
                }
              }
            }, _0x24f242, this);
          }));
          return function (_0x389d3b, _0x175dbf, _0x597ae4) {
            return _0xe5d3b0.apply(this, arguments);
          };
        }();
        return _0x1315d4;
      }(_0x10b9dd);
      _0x105b64 = _0x14eb5c(_0x38954d.prototype, "m_characterSpine", [_0x5f4bf4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x53c5b4 = _0x14eb5c(_0x38954d.prototype, 'm_winLabel', [_0x6b6659], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x12b059 = _0x14eb5c(_0x38954d.prototype, "m_roundLabel", [_0x426270], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x186674 = _0x14eb5c(_0x38954d.prototype, 'm_congratSprite', [_0x4ff28c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x203bd8 = _0x14eb5c(_0x38954d.prototype, "m_winSprite", [_0x45102e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xb2511e = _0x14eb5c(_0x38954d.prototype, "m_inSprite", [_0x7e643c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5c0657 = _0x14eb5c(_0x38954d.prototype, "m_fgSprite", [_0x410e71], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x27dbaa = _0x482b65(_0x121aec = _0x38954d) || _0x121aec;
      var _0x53d274;
      var _0x1101d8;
      var _0x21778e;
      var _0x4b7c3f;
      var _0x2e7486;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "aa92820oVJNfrspPyRE6c6S", "NearWinBackSpine", undefined);
      var _0x4d0731 = _0xd86e43.ccclass;
      var _0x13cf5c = _0xd86e43.property;
      _0x53d274 = _0x4d0731("NearWinBackSpine");
      _0x1101d8 = _0x13cf5c({
        'type': _0xff2ed7.Skeleton,
        'tooltip': "Spine"
      });
      _0x4b7c3f = function (_0xd884a7) {
        function _0x2e67e3() {
          var _0x3a297d;
          var _0x305e94 = arguments.length;
          var _0x3a2686 = new Array(_0x305e94);
          for (var _0x1a3280 = 0x0; _0x1a3280 < _0x305e94; _0x1a3280++) {
            _0x3a2686[_0x1a3280] = arguments[_0x1a3280];
          }
          _0x3a297d = _0xd884a7.call.apply(_0xd884a7, [this].concat(_0x3a2686)) || this;
          _0x45956f(_0x3a297d, "m_spine", _0x2e7486, _0x28ffcf(_0x3a297d));
          return _0x3a297d;
        }
        _0x48aeaf(_0x2e67e3, _0xd884a7);
        var _0x3e3ea0 = _0x2e67e3.prototype;
        _0x3e3ea0.Show = function (_0x86fd75) {
          this.node.active = true;
          this.PlayAnimation('Bottom_' + _0x86fd75.toString());
        };
        _0x3e3ea0.Hide = function () {
          this.node.active = false;
        };
        _0x3e3ea0.PlayAnimation = function (_0x23f50e, _0x4a22e5) {
          var _0x5b5bc9 = this;
          if (undefined === _0x4a22e5) {
            _0x4a22e5 = false;
          }
          return new Promise(function (_0x4550f2) {
            _0x5b5bc9.m_spine.clearTrack(0x0);
            _0x5b5bc9.m_spine.setToSetupPose();
            var _0x1ade60 = _0x5b5bc9.m_spine.setAnimation(0x0, _0x23f50e, _0x4a22e5);
            if (_0x1ade60) {
              _0x5b5bc9.m_spine.setTrackEventListener(_0x1ade60, function (_0x205136, _0xbbeecd) {});
              _0x5b5bc9.m_spine.setTrackCompleteListener(_0x1ade60, function () {
                _0x4550f2(null);
              });
            } else {
              _0x5b5bc9.m_spine.setCompleteListener(function () {
                _0x4550f2(null);
              });
            }
          });
        };
        return _0x2e67e3;
      }(_0x10b9dd);
      _0x2e7486 = _0x14eb5c(_0x4b7c3f.prototype, 'm_spine', [_0x1101d8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x1e5ce0 = _0x53d274(_0x21778e = _0x4b7c3f) || _0x21778e;
      var _0x2a704a;
      var _0x189bf4;
      var _0x29677b;
      var _0x3d458e;
      var _0x106434;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "e3da6dahuBGcp6CKSGZLhQW", "NearWinFrontSpin", undefined);
      var _0xa4c4ca = _0xd86e43.ccclass;
      var _0x41db42 = _0xd86e43.property;
      _0x2a704a = _0xa4c4ca("NearWinFrontSpin");
      _0x189bf4 = _0x41db42({
        'type': _0xff2ed7.Skeleton,
        'tooltip': "Spine"
      });
      _0x3d458e = function (_0x5bf863) {
        function _0x4cb3af() {
          var _0x3e64dd;
          var _0x39811c = arguments.length;
          var _0x48833d = new Array(_0x39811c);
          for (var _0x2c937c = 0x0; _0x2c937c < _0x39811c; _0x2c937c++) {
            _0x48833d[_0x2c937c] = arguments[_0x2c937c];
          }
          _0x3e64dd = _0x5bf863.call.apply(_0x5bf863, [this].concat(_0x48833d)) || this;
          _0x45956f(_0x3e64dd, "m_spine", _0x106434, _0x28ffcf(_0x3e64dd));
          return _0x3e64dd;
        }
        _0x48aeaf(_0x4cb3af, _0x5bf863);
        var _0x1a435f = _0x4cb3af.prototype;
        _0x1a435f.Show = function () {
          var _0x25e5c5 = _0x44f921(_0xa0d93().mark(function _0xe62e21() {
            return _0xa0d93().wrap(function (_0x12c528) {
              for (;;) {
                switch (_0x12c528.prev = _0x12c528.next) {
                  case 0x0:
                    this.node.active = true;
                    _0x12c528.next = 0x3;
                    return this.PlayAnimation('Start');
                  case 0x3:
                    this.PlayAnimation("Loop", true);
                  case 0x4:
                  case 'end':
                    return _0x12c528.stop();
                }
              }
            }, _0xe62e21, this);
          }));
          return function () {
            return _0x25e5c5.apply(this, arguments);
          };
        }();
        _0x1a435f.Hide = function () {
          this.node.active = false;
        };
        _0x1a435f.PlayAnimation = function (_0x3988a7, _0x898aa0) {
          var _0x489ca3 = this;
          if (undefined === _0x898aa0) {
            _0x898aa0 = false;
          }
          return new Promise(function (_0x4cef03) {
            _0x489ca3.m_spine.clearTrack(0x0);
            _0x489ca3.m_spine.setToSetupPose();
            var _0x882f02 = _0x489ca3.m_spine.setAnimation(0x0, _0x3988a7, _0x898aa0);
            if (_0x882f02) {
              _0x489ca3.m_spine.setTrackEventListener(_0x882f02, function (_0x17d766, _0x18a1aa) {});
              _0x489ca3.m_spine.setTrackCompleteListener(_0x882f02, function () {
                _0x4cef03(null);
              });
            } else {
              _0x489ca3.m_spine.setCompleteListener(function () {
                _0x4cef03(null);
              });
            }
          });
        };
        return _0x4cb3af;
      }(_0x10b9dd);
      _0x106434 = _0x14eb5c(_0x3d458e.prototype, 'm_spine', [_0x189bf4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x473b8c = _0x2a704a(_0x29677b = _0x3d458e) || _0x29677b;
      var _0x5f0575;
      var _0x46a894;
      var _0x3968a2;
      var _0x126220;
      var _0x504b5f;
      var _0x523dbf;
      var _0x19fd53;
      var _0x377de9;
      var _0x367d9b;
      var _0x338b61;
      var _0xcc9a3c;
      var _0x46046f;
      var _0x4a36b2;
      var _0x57d696;
      var _0x71e931;
      var _0x23e899;
      var _0x58374f;
      var _0x4e23fb;
      var _0x154a06;
      var _0xb3a055;
      var _0x493c62;
      var _0xfc0fab;
      var _0x184c21;
      var _0x3a5de3;
      var _0x2217e6;
      var _0x36ac67;
      var _0xe60088;
      var _0x275ff0;
      var _0x2bcad3;
      var _0x26c526;
      var _0x24a133;
      var _0x39ebf7;
      var _0x44b0f1;
      var _0x2680c7;
      var _0x4e5023;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, '621a1bdc2BCl4Rc3XwDirRl', "HintFrame", undefined);
      var _0x380699 = _0xd86e43.ccclass;
      var _0x46d8d1 = _0xd86e43.property;
      _0x5f0575 = _0x380699("ArcSetting");
      _0x46a894 = _0x46d8d1({
        'type': _0x5d2887,
        'tooltip': "朝內角"
      });
      _0x3968a2 = _0x46d8d1({
        'type': _0x5d2887,
        'tooltip': "朝外角"
      });
      _0x126220 = _0x46d8d1({
        'type': _0x5d2887,
        'tooltip': '橫線'
      });
      _0x504b5f = _0x46d8d1({
        'type': _0x5d2887,
        'tooltip': '直線'
      });
      _0x19fd53 = function () {
        function _0x255ddf() {
          _0x45956f(this, "m_inNode", _0x377de9, this);
          _0x45956f(this, 'm_outNode', _0x367d9b, this);
          _0x45956f(this, 'm_horizontalNode', _0x338b61, this);
          _0x45956f(this, "m_verticalNode", _0xcc9a3c, this);
        }
        _0x540644(_0x255ddf, [{
          'key': "InNode",
          'get': function () {
            return this.m_inNode;
          }
        }, {
          'key': "OutNode",
          'get': function () {
            return this.m_outNode;
          }
        }, {
          'key': 'HorizontalNode',
          'get': function () {
            return this.m_horizontalNode;
          }
        }, {
          'key': "VerticalNode",
          'get': function () {
            return this.m_verticalNode;
          }
        }]);
        return _0x255ddf;
      }();
      _0x377de9 = _0x14eb5c(_0x19fd53.prototype, 'm_inNode', [_0x46a894], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x367d9b = _0x14eb5c(_0x19fd53.prototype, "m_outNode", [_0x3968a2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x338b61 = _0x14eb5c(_0x19fd53.prototype, "m_horizontalNode", [_0x126220], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xcc9a3c = _0x14eb5c(_0x19fd53.prototype, 'm_verticalNode', [_0x504b5f], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x4c1530 = _0x5f0575(_0x523dbf = _0x19fd53) || _0x523dbf;
      _0x46046f = _0x380699("CenterSetting");
      _0x4a36b2 = _0x46d8d1({
        'type': _0x5d2887,
        'tooltip': '上'
      });
      _0x57d696 = _0x46d8d1({
        'type': _0x5d2887,
        'tooltip': '右'
      });
      _0x71e931 = _0x46d8d1({
        'type': _0x5d2887,
        'tooltip': '下'
      });
      _0x23e899 = _0x46d8d1({
        'type': _0x5d2887,
        'tooltip': '左'
      });
      _0x4e23fb = function () {
        function _0x3164fb() {
          _0x45956f(this, "m_upNode", _0x154a06, this);
          _0x45956f(this, 'm_rightNode', _0xb3a055, this);
          _0x45956f(this, "m_downNode", _0x493c62, this);
          _0x45956f(this, "m_leftNode", _0xfc0fab, this);
        }
        _0x540644(_0x3164fb, [{
          'key': 'UpNode',
          'get': function () {
            return this.m_upNode;
          }
        }, {
          'key': "RightNode",
          'get': function () {
            return this.m_rightNode;
          }
        }, {
          'key': "DownNode",
          'get': function () {
            return this.m_downNode;
          }
        }, {
          'key': "LeftNode",
          'get': function () {
            return this.m_leftNode;
          }
        }]);
        return _0x3164fb;
      }();
      _0x154a06 = _0x14eb5c(_0x4e23fb.prototype, "m_upNode", [_0x4a36b2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xb3a055 = _0x14eb5c(_0x4e23fb.prototype, 'm_rightNode', [_0x57d696], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x493c62 = _0x14eb5c(_0x4e23fb.prototype, "m_downNode", [_0x71e931], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xfc0fab = _0x14eb5c(_0x4e23fb.prototype, "m_leftNode", [_0x23e899], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x138232 = _0x46046f(_0x58374f = _0x4e23fb) || _0x58374f;
      _0x184c21 = _0x380699("HintFrame");
      _0x3a5de3 = _0x46d8d1({
        'type': _0x138232,
        'tooltip': "中間線段"
      });
      _0x2217e6 = _0x46d8d1({
        'type': _0x4c1530,
        'tooltip': "右上角"
      });
      _0x36ac67 = _0x46d8d1({
        'type': _0x4c1530,
        'tooltip': "左上角"
      });
      _0xe60088 = _0x46d8d1({
        'type': _0x4c1530,
        'tooltip': '右下角'
      });
      _0x275ff0 = _0x46d8d1({
        'type': _0x4c1530,
        'tooltip': "左下角"
      });
      _0x26c526 = function (_0x2d2a21) {
        function _0x39bc77() {
          var _0xf0c173;
          var _0xdb0b1c = arguments.length;
          var _0x447b55 = new Array(_0xdb0b1c);
          for (var _0x3c1af1 = 0x0; _0x3c1af1 < _0xdb0b1c; _0x3c1af1++) {
            _0x447b55[_0x3c1af1] = arguments[_0x3c1af1];
          }
          _0xf0c173 = _0x2d2a21.call.apply(_0x2d2a21, [this].concat(_0x447b55)) || this;
          _0x45956f(_0xf0c173, 'm_center', _0x24a133, _0x28ffcf(_0xf0c173));
          _0x45956f(_0xf0c173, "m_topRightArc", _0x39ebf7, _0x28ffcf(_0xf0c173));
          _0x45956f(_0xf0c173, "m_topLeftArc", _0x44b0f1, _0x28ffcf(_0xf0c173));
          _0x45956f(_0xf0c173, 'm_downRightArc', _0x2680c7, _0x28ffcf(_0xf0c173));
          _0x45956f(_0xf0c173, 'm_downLeftArc', _0x4e5023, _0x28ffcf(_0xf0c173));
          return _0xf0c173;
        }
        _0x48aeaf(_0x39bc77, _0x2d2a21);
        var _0x524238 = _0x39bc77.prototype;
        _0x524238.SetFrame = function (_0x147ba0) {
          var _0x5ef873 = false;
          var _0x4c2726 = false;
          var _0x2d4eb0 = false;
          var _0x2433eb = false;
          var _0x5bbaf0 = false;
          var _0x41dd5f = false;
          var _0x204a77 = false;
          var _0x43b3c8 = false;
          this.SetCenterAll(true);
          for (var _0x5ba56c = 0x0; _0x5ba56c < _0x147ba0.length; _0x5ba56c++) {
            switch (_0x147ba0[_0x5ba56c]) {
              case 0x0:
                _0x5ef873 = true;
                this.m_center.UpNode.active = false;
                break;
              case 0x2:
                _0x4c2726 = true;
                this.m_center.DownNode.active = false;
                break;
              case 0x1:
                _0x2d4eb0 = true;
                this.m_center.RightNode.active = false;
                break;
              case 0x3:
                _0x2433eb = true;
                this.m_center.LeftNode.active = false;
                break;
              case 0x4:
                _0x5bbaf0 = true;
                break;
              case 0x5:
                _0x41dd5f = true;
                break;
              case 0x6:
                _0x204a77 = true;
                break;
              case 0x7:
                _0x43b3c8 = true;
            }
          }
          this.SetArcAll(this.m_topRightArc, false);
          this.SetArcAll(this.m_topLeftArc, false);
          this.SetArcAll(this.m_downRightArc, false);
          this.SetArcAll(this.m_downLeftArc, false);
          if (_0x41dd5f) {
            if (!(_0x5ef873 || _0x2d4eb0)) {
              this.m_topRightArc.InNode.active = true;
            }
          } else if (_0x5ef873 && _0x2d4eb0) {
            this.m_topRightArc.OutNode.active = true;
          } else if (_0x5ef873) {
            this.m_topRightArc.VerticalNode.active = true;
          } else if (_0x2d4eb0) {
            this.m_topRightArc.HorizontalNode.active = true;
          } else {
            this.m_topRightArc.InNode.active = true;
          }
          if (_0x43b3c8) {
            if (!(_0x4c2726 || _0x2d4eb0)) {
              this.m_downRightArc.InNode.active = true;
            }
          } else if (_0x4c2726 && _0x2d4eb0) {
            this.m_downRightArc.OutNode.active = true;
          } else if (_0x4c2726) {
            this.m_downRightArc.VerticalNode.active = true;
          } else if (_0x2d4eb0) {
            this.m_downRightArc.HorizontalNode.active = true;
          } else {
            this.m_downRightArc.InNode.active = true;
          }
          if (_0x5bbaf0) {
            if (!(_0x5ef873 || _0x2433eb)) {
              this.m_topLeftArc.InNode.active = true;
            }
          } else if (_0x5ef873 && _0x2433eb) {
            this.m_topLeftArc.OutNode.active = true;
          } else if (_0x5ef873) {
            this.m_topLeftArc.VerticalNode.active = true;
          } else if (_0x2433eb) {
            this.m_topLeftArc.HorizontalNode.active = true;
          } else {
            this.m_topLeftArc.InNode.active = true;
          }
          if (_0x204a77) {
            if (!(_0x4c2726 || _0x2433eb)) {
              this.m_downLeftArc.InNode.active = true;
            }
          } else if (_0x4c2726 && _0x2433eb) {
            this.m_downLeftArc.OutNode.active = true;
          } else if (_0x4c2726) {
            this.m_downLeftArc.VerticalNode.active = true;
          } else if (_0x2433eb) {
            this.m_downLeftArc.HorizontalNode.active = true;
          } else {
            this.m_downLeftArc.InNode.active = true;
          }
        };
        _0x524238.HideFrame = function () {
          this.SetCenterAll(false);
          this.SetArcAll(this.m_topRightArc, false);
          this.SetArcAll(this.m_topLeftArc, false);
          this.SetArcAll(this.m_downRightArc, false);
          this.SetArcAll(this.m_downLeftArc, false);
        };
        _0x524238.SetCenterAll = function (_0x130690) {
          this.m_center.UpNode.active = _0x130690;
          this.m_center.RightNode.active = _0x130690;
          this.m_center.DownNode.active = _0x130690;
          this.m_center.LeftNode.active = _0x130690;
        };
        _0x524238.SetArcAll = function (_0x12d3fb, _0x1dfc7f) {
          _0x12d3fb.InNode.active = _0x1dfc7f;
          _0x12d3fb.OutNode.active = _0x1dfc7f;
          _0x12d3fb.HorizontalNode.active = _0x1dfc7f;
          _0x12d3fb.VerticalNode.active = _0x1dfc7f;
        };
        return _0x39bc77;
      }(_0x10b9dd);
      _0x24a133 = _0x14eb5c(_0x26c526.prototype, "m_center", [_0x3a5de3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x39ebf7 = _0x14eb5c(_0x26c526.prototype, 'm_topRightArc', [_0x2217e6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x44b0f1 = _0x14eb5c(_0x26c526.prototype, "m_topLeftArc", [_0x36ac67], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2680c7 = _0x14eb5c(_0x26c526.prototype, "m_downRightArc", [_0xe60088], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4e5023 = _0x14eb5c(_0x26c526.prototype, 'm_downLeftArc', [_0x275ff0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x10e043 = _0x184c21(_0x2bcad3 = _0x26c526) || _0x2bcad3;
      var _0x4c12b9;
      var _0x5b11f1;
      var _0x10d987;
      var _0x21edc5;
      var _0x48bbcb;
      var _0x7d3f0a;
      var _0x5a8844;
      var _0xb9f8d6;
      var _0x3f9c4b;
      var _0x340340;
      var _0x339ed1;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, '2cea9llfkxAfaD+9Q7ulJ3v', "MarkNum", undefined);
      var _0x1f7610 = _0xd86e43.ccclass;
      var _0x5ccabf = _0xd86e43.property;
      _0x4c12b9 = _0x1f7610("MarkNum");
      _0x5b11f1 = _0x5ccabf({
        'type': _0xff2ed7.Skeleton,
        'tooltip': "spine"
      });
      _0x10d987 = _0x5ccabf({
        'type': _0x1d1f1,
        'tooltip': '個位數使用'
      });
      _0x21edc5 = _0x5ccabf({
        'type': _0x1d1f1,
        'tooltip': '十位數使用'
      });
      _0x48bbcb = _0x5ccabf({
        'type': _0x1d1f1,
        'tooltip': "百位數使用"
      });
      _0x5a8844 = function (_0x2a4311) {
        function _0x172eee() {
          var _0x3e0b27;
          var _0x3a4efe = arguments.length;
          var _0x1991f0 = new Array(_0x3a4efe);
          for (var _0x5e72db = 0x0; _0x5e72db < _0x3a4efe; _0x5e72db++) {
            _0x1991f0[_0x5e72db] = arguments[_0x5e72db];
          }
          _0x3e0b27 = _0x2a4311.call.apply(_0x2a4311, [this].concat(_0x1991f0)) || this;
          _0x45956f(_0x3e0b27, "m_spine", _0xb9f8d6, _0x28ffcf(_0x3e0b27));
          _0x45956f(_0x3e0b27, 'm_digitsLabel', _0x3f9c4b, _0x28ffcf(_0x3e0b27));
          _0x45956f(_0x3e0b27, "m_tensDigitLabel", _0x340340, _0x28ffcf(_0x3e0b27));
          _0x45956f(_0x3e0b27, "m_hundredsDigitLabel", _0x339ed1, _0x28ffcf(_0x3e0b27));
          return _0x3e0b27;
        }
        _0x48aeaf(_0x172eee, _0x2a4311);
        var _0xfcfaee = _0x172eee.prototype;
        _0xfcfaee.SetMulti = function (_0x529790) {
          if (_0x529790 < _0x4e825f.MultiState.Real1) {
            this.node.active = false;
          } else {
            this.node.active = true;
            this.m_spine.setAnimation(0x0, "Active", false);
            this.m_digitsLabel.node.active = !!(_0x529790 >= _0x4e825f.MultiState.Real1 && _0x529790 < _0x4e825f.MultiState.Real2);
            this.m_tensDigitLabel.node.active = !!(_0x529790 >= _0x4e825f.MultiState.Real2 && _0x529790 < _0x4e825f.MultiState.Real3);
            this.m_hundredsDigitLabel.node.active = !!(_0x529790 >= _0x4e825f.MultiState.Real3);
            this.m_digitsLabel.string = 'X' + _0x529790.toString();
            this.m_tensDigitLabel.string = 'X' + _0x529790.toString();
            this.m_hundredsDigitLabel.string = 'X' + _0x529790.toString();
          }
        };
        _0xfcfaee.Hide = function () {
          this.node.active = false;
        };
        return _0x172eee;
      }(_0x10b9dd);
      _0xb9f8d6 = _0x14eb5c(_0x5a8844.prototype, "m_spine", [_0x5b11f1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3f9c4b = _0x14eb5c(_0x5a8844.prototype, "m_digitsLabel", [_0x10d987], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x340340 = _0x14eb5c(_0x5a8844.prototype, 'm_tensDigitLabel', [_0x21edc5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x339ed1 = _0x14eb5c(_0x5a8844.prototype, "m_hundredsDigitLabel", [_0x48bbcb], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0xf1e923 = _0x4c12b9(_0x7d3f0a = _0x5a8844) || _0x7d3f0a;
      var _0x559d7e;
      var _0x57d356;
      var _0x14edbd;
      var _0x4dab6a;
      var _0x20f21c;
      var _0x331499;
      var _0x45788e;
      var _0x5ee51a;
      var _0x130fbf;
      var _0x3bc773;
      var _0x4a1b35;
      var _0x36d33c;
      var _0x2aa9d8;
      var _0x440e8c;
      var _0xae3a30;
      var _0x2deb52;
      var _0x348dce;
      var _0x3e5f43;
      var _0x5d256c;
      var _0x4b5b4b;
      var _0x5b854a;
      var _0x1b2c9e;
      var _0x37de5b;
      var _0x96ea3a;
      var _0x56f741;
      var _0x5aa992;
      var _0x205ac7;
      var _0x4eb9f1;
      var _0x18e2ab;
      var _0x4d92db;
      var _0x666b6b;
      var _0x37170f;
      var _0x6390db;
      var _0x5b9462;
      var _0x94c7bd;
      var _0x28a3c4;
      var _0x13acc5;
      var _0x3d2075;
      var _0x2c0bed;
      var _0x45936f;
      var _0x4eba65;
      var _0x37ac1b;
      var _0x510108;
      var _0x138c95;
      var _0x38f7f5;
      var _0x4ddfc8;
      var _0x144344;
      var _0x5b287f;
      var _0x221cd4;
      var _0x50c76c;
      var _0x1c2411;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "31181lvphNFuZagcUpGfXzr", "EffectPlate", undefined);
      var _0x5438d0 = [[0x6, 0x3, 0x4], [0x2, _0x4a9a56.CENTER, 0x0], [0x7, 0x1, 0x5]];
      var _0x116aa1 = _0xd86e43.property;
      _0x559d7e = _0x116aa1({
        'type': _0x5d2887,
        'tooltip': "MainView"
      });
      _0x57d356 = _0x116aa1({
        'type': _0x5d2887,
        'tooltip': "symbol根節點"
      });
      _0x14edbd = _0x116aa1({
        'type': _0x5d2887,
        'tooltip': 'symbol特效根節點'
      });
      _0x4dab6a = _0x116aa1({
        'type': _0x5d2887,
        'tooltip': "wild根節點"
      });
      _0x20f21c = _0x116aa1({
        'type': _0x5d2887,
        'tooltip': 'scatter根節點'
      });
      _0x331499 = _0x116aa1({
        'type': _0x5ef0c0,
        'tooltip': "symbol動畫"
      });
      _0x45788e = _0x116aa1({
        'type': _0x5ef0c0,
        'tooltip': "wild symbol動畫"
      });
      _0x5ee51a = _0x116aa1({
        'type': _0x5ef0c0,
        'tooltip': "scatter symbol動畫"
      });
      _0x130fbf = _0x116aa1({
        'type': _0x5ef0c0,
        'tooltip': "symbol 特效動畫"
      });
      _0x3bc773 = _0x116aa1({
        'type': _0x5ef0c0,
        'tooltip': "贏分Prefab"
      });
      _0x4a1b35 = _0x116aa1({
        'type': _0x5d2887,
        'tooltip': "標記節點"
      });
      _0x36d33c = _0x116aa1({
        'type': _0x5ef0c0,
        'tooltip': "標記prefab"
      });
      _0x2aa9d8 = _0x116aa1({
        'type': _0x5ef0c0,
        'tooltip': "標記倍數prefab"
      });
      _0x440e8c = _0x116aa1({
        'type': _0x28a70e,
        'tooltip': "Combo Bar"
      });
      _0xae3a30 = _0x116aa1({
        'type': _0x5d2887,
        'tooltip': 'Bar上糖果位置'
      });
      _0x2deb52 = _0x116aa1({
        'type': _0x241ecc,
        'tooltip': '紀錄'
      });
      _0x348dce = _0x116aa1({
        'type': _0x544b5d,
        'tooltip': "FG宣告"
      });
      _0x3e5f43 = _0x116aa1({
        'type': _0x1d5cd1,
        'tooltip': "FG局數"
      });
      _0x5d256c = _0x116aa1({
        'type': _0x28ac28,
        'tooltip': "FG增加局數表演"
      });
      _0x4b5b4b = _0x116aa1({
        'type': _0x27dbaa,
        'tooltip': 'FG結算'
      });
      _0x5b854a = _0x116aa1({
        'type': _0x1e5ce0,
        'tooltip': "NearWin背景"
      });
      _0x1b2c9e = _0x116aa1({
        'type': _0x473b8c,
        'tooltip': 'NearWin前景-天降'
      });
      _0x37de5b = _0x116aa1({
        'type': _0x473b8c,
        'tooltip': "NearWin前景-整條"
      });
      _0x96ea3a = _0x116aa1({
        'type': _0x5ef0c0,
        'tooltip': "範圍提示-底圖"
      });
      _0x56f741 = _0x116aa1({
        'type': _0x5ef0c0,
        'tooltip': '範圍提示-框'
      });
      _0x5aa992 = function (_0x2aa589) {
        function _0x2beaf4() {
          var _0x1a3f48;
          var _0x1bf9c2 = arguments.length;
          var _0x3be145 = new Array(_0x1bf9c2);
          for (var _0x584eae = 0x0; _0x584eae < _0x1bf9c2; _0x584eae++) {
            _0x3be145[_0x584eae] = arguments[_0x584eae];
          }
          _0x1a3f48 = _0x2aa589.call.apply(_0x2aa589, [this].concat(_0x3be145)) || this;
          _0x45956f(_0x1a3f48, "m_mainNode", _0x205ac7, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_symbolRootNode", _0x4eb9f1, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_eftSymbolRootNode", _0x18e2ab, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_wildRootNode", _0x4d92db, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_scatterRootNode", _0x666b6b, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_symbolPrefab", _0x37170f, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_wildSymbolPrefab", _0x6390db, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_scatterSymbolPrefab", _0x5b9462, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, 'm_symbolEftPrefab', _0x94c7bd, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_winPrefab", _0x28a3c4, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_markNode", _0x13acc5, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, 'm_markPrefab', _0x3d2075, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_markNumPrefab", _0x2c0bed, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_comboBarSpine", _0x45936f, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_barCandyNodes", _0x4eba65, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, 'm_historyManager', _0x37ac1b, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_fgDeclareSpine", _0x510108, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, 'm_fgCounterSpine', _0x138c95, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, 'm_fgAddFreeSpine', _0x38f7f5, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, 'm_fgCompliment', _0x4ddfc8, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_nearWinBackSpines", _0x144344, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_nearWinPatchingSpines", _0x5b287f, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_nearWinColumnSpines", _0x221cd4, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, "m_hintBottomPrefab", _0x50c76c, _0x28ffcf(_0x1a3f48));
          _0x45956f(_0x1a3f48, 'm_hintFramePrefab', _0x1c2411, _0x28ffcf(_0x1a3f48));
          _0x1a3f48.m_slotReels = null;
          _0x1a3f48.m_symbolSpines = new Array();
          _0x1a3f48.m_eftSymbolSpines = new Array();
          _0x1a3f48.m_markSpines = new Array();
          _0x1a3f48.m_markNums = new Array();
          _0x1a3f48.m_flySymbol = null;
          _0x1a3f48.m_nearWinScatters = [];
          _0x1a3f48.m_scatterSymbolNodes = [];
          _0x1a3f48.m_isShowWildOnBar = false;
          _0x1a3f48.m_hintBottomNodes = [];
          _0x1a3f48.m_hintFrames = [];
          _0x1a3f48.m_shockAction = false;
          return _0x1a3f48;
        }
        _0x48aeaf(_0x2beaf4, _0x2aa589);
        var _0x6299f9 = _0x2beaf4.prototype;
        _0x6299f9.Init = function (_0x4dd0d2) {
          this.m_slotReels = _0x4dd0d2;
          for (var _0x1da0bc = 0x0; _0x1da0bc < _0x4e825f.COL; _0x1da0bc++) {
            this.m_symbolSpines.push(new Array());
            this.m_eftSymbolSpines.push(new Array());
            this.m_markSpines.push(new Array());
            this.m_markNums.push(new Array());
          }
          _0x472faf.GetInstance().SetEffectPrefab(this.m_symbolPrefab, this.m_symbolEftPrefab, this.m_wildSymbolPrefab, this.m_scatterSymbolPrefab);
          _0x472faf.GetInstance().SetWinPrefab(this.m_winPrefab);
          this.m_historyManager.Init();
          this.m_comboBarSpine.ShowIdle();
          var _0x3a745e = 0x0;
          for (var _0x5eaec3 = 0x0; _0x5eaec3 < _0x4e825f.COL; _0x5eaec3++) {
            var _0x5ed179 = [];
            var _0x115fcb = [];
            for (var _0x3d36e1 = 0x0; _0x3d36e1 < _0x4e825f.ROW; _0x3d36e1++) {
              var _0x5c9f1b = _0x1a7f5d(this.m_hintBottomPrefab);
              this.m_markNode.addChild(_0x5c9f1b);
              _0x189fb9.SetZIndex(_0x5c9f1b, -0x2);
              _0x5ed179.push(_0x5c9f1b);
              _0x5c9f1b.setPosition(this.m_slotReels.GetSymbolPosition(_0x5eaec3, _0x3d36e1));
              _0x5c9f1b.active = false;
              _0x5c9f1b.name = _0x3a745e.toString();
              _0x5c9f1b = _0x1a7f5d(this.m_hintFramePrefab);
              this.node.addChild(_0x5c9f1b);
              _0x189fb9.SetZIndex(_0x5c9f1b, -0x1);
              _0x5c9f1b.setPosition(this.m_slotReels.GetSymbolPosition(_0x5eaec3, _0x3d36e1));
              _0x5c9f1b.active = false;
              _0x5c9f1b.name = _0x3a745e.toString();
              _0x115fcb.push(_0x5c9f1b.getComponent(_0x10e043));
              _0x3a745e++;
            }
            this.m_hintBottomNodes.push(_0x5ed179);
            this.m_hintFrames.push(_0x115fcb);
          }
        };
        _0x6299f9.ChangeStyle = function (_0xde4766) {
          _0x472faf.GetInstance().SetEffectPrefab(_0xde4766, this.m_symbolEftPrefab, this.m_wildSymbolPrefab, this.m_scatterSymbolPrefab);
        };
        _0x6299f9.SetHistorySymbols = function (_0xf3b3bf) {
          this.m_historyManager.SetNewSymbols(_0xf3b3bf);
        };
        _0x6299f9.SetTxt = function () {
          this.m_historyManager.SetTxt();
        };
        _0x6299f9.Reset = function (_0x4cfc22) {
          if (undefined === _0x4cfc22) {
            _0x4cfc22 = {
              'Mark': true,
              'Combo': true,
              'History': true
            };
          }
          if (_0x4cfc22.Mark) {
            for (var _0x17ce4a = 0x0; _0x17ce4a < _0x4e825f.COL; _0x17ce4a++) {
              for (var _0x526d6e = 0x0; _0x526d6e < _0x4e825f.ROW; _0x526d6e++) {
                if (this.m_markSpines[_0x17ce4a][_0x526d6e]) {
                  this.m_markSpines[_0x17ce4a][_0x526d6e].Hide();
                }
                if (this.m_markNums[_0x17ce4a][_0x526d6e]) {
                  this.m_markNums[_0x17ce4a][_0x526d6e].Hide();
                }
              }
            }
          }
          if (_0x4cfc22.Combo) {
            this.m_comboBarSpine.Reset();
          }
          if (_0x4cfc22.History) {
            this.m_historyManager.Reset();
          }
        };
        _0x6299f9.CleanSymbolAnim = function (_0x578026, _0x44116c) {
          if (this.m_symbolSpines[_0x578026][_0x44116c]) {
            var _0x3e6a3d = this.m_symbolSpines[_0x578026][_0x44116c];
            _0x3e6a3d.node.removeFromParent();
            _0x472faf.GetInstance().ReturnSymbol(_0x3e6a3d);
            this.m_symbolSpines[_0x578026][_0x44116c] = null;
          }
          if (this.m_eftSymbolSpines[_0x578026][_0x44116c]) {
            var _0x3c5772 = this.m_eftSymbolSpines[_0x578026][_0x44116c];
            _0x3c5772.node.removeFromParent();
            _0x472faf.GetInstance().ReturnSymbol(_0x3c5772);
            this.m_eftSymbolSpines[_0x578026][_0x44116c] = null;
          }
        };
        _0x6299f9.AddSymbolChild = function (_0x21f752, _0x30675e, _0x470f5a) {
          if (undefined === _0x470f5a) {
            _0x470f5a = false;
          }
          if (_0x30675e == _0x4e825f.Symbol.SYMBOL_SCATTER) {
            this.m_scatterRootNode.addChild(_0x21f752);
          } else if (_0x30675e == _0x4e825f.Symbol.SYMBOL_WILD) {
            this.m_wildRootNode.addChild(_0x21f752);
          } else if (_0x470f5a) {
            this.m_eftSymbolRootNode.addChild(_0x21f752);
          } else {
            this.m_symbolRootNode.addChild(_0x21f752);
          }
        };
        _0x6299f9.ConnectionLine = function () {
          var _0x254b68 = _0x44f921(_0xa0d93().mark(function _0x4564fb(_0x48f1ad, _0x4a7e41, _0x472b4b, _0x1a3b19) {
            var _0x42ea97;
            var _0x396591;
            var _0x640d16;
            var _0x1d4959;
            var _0x267a5b;
            var _0x4b8208;
            var _0x1552fe;
            var _0x2f3341;
            var _0x5de0b7;
            var _0x105616;
            var _0x4cfe5e;
            var _0x5e8a2d;
            var _0x745a53;
            var _0x1207b7;
            var _0xe555e;
            var _0xd74386;
            var _0x29d679;
            var _0x32cd5c;
            var _0x26d775;
            var _0x287f65;
            var _0x3dc1e6;
            var _0x547b5b;
            var _0x2d1306;
            var _0x5f5b22;
            var _0x2b03cc;
            var _0x9aa9a1;
            var _0x3f725e;
            var _0x574be8;
            var _0xa703dd;
            var _0x57dca6;
            var _0x480216;
            var _0x35fb25;
            var _0x2c80da;
            var _0x5afba6;
            var _0x22b550;
            var _0x2f3aac;
            var _0x40ba59;
            var _0x5863ff = this;
            return _0xa0d93().wrap(function (_0x1719bc) {
              for (;;) {
                switch (_0x1719bc.prev = _0x1719bc.next) {
                  case 0x0:
                    _0x42ea97 = [];
                    for (_0x396591 = 0x0; _0x396591 < _0x4e825f.COL; _0x396591++) {
                      _0x640d16 = [];
                      for (_0x1d4959 = 0x0; _0x1d4959 < _0x4e825f.ROW; _0x1d4959++) {
                        this.CleanSymbolAnim(_0x396591, _0x1d4959);
                        _0x640d16.push(0x0);
                      }
                      _0x42ea97.push(_0x640d16);
                    }
                    _0x267a5b = 0x1;
                    for (_0x4b8208 = 0x0; _0x4b8208 < _0x48f1ad.length; _0x4b8208++) {
                      for (_0x1552fe = 0x0; _0x1552fe < _0x48f1ad[_0x4b8208].PosVec.length; _0x1552fe++) {
                        _0x2f3341 = this.PosToXY(_0x48f1ad[_0x4b8208].PosVec[_0x1552fe]);
                        _0x42ea97[_0x2f3341.x][_0x2f3341.y] = _0x267a5b;
                      }
                      _0x267a5b++;
                    }
                    _0x5de0b7 = 0x0;
                  case 0x5:
                    if (!(_0x5de0b7 < _0x48f1ad.length)) {
                      _0x1719bc.next = 0x4a;
                      break;
                    }
                    _0x105616 = Math.ceil(_0x48f1ad[_0x5de0b7].Count / 0x2);
                    if (0x0 != (_0x4cfe5e = this.PosToXY(_0x48f1ad[_0x5de0b7].PosVec[_0x105616])).x && _0x4cfe5e.x != _0x4e825f.COL - 0x1) {
                      _0x1719bc.next = 0x18;
                      break;
                    }
                    _0x5e8a2d = 0x0;
                  case 0xa:
                    if (!(_0x5e8a2d < _0x48f1ad[_0x5de0b7].PosVec.length)) {
                      _0x1719bc.next = 0x18;
                      break;
                    }
                    _0x745a53 = this.PosToXY(_0x48f1ad[_0x5de0b7].PosVec[_0x5e8a2d]);
                    if (0x0 != _0x4cfe5e.x) {
                      _0x1719bc.next = 0x12;
                      break;
                    }
                    if (0x1 != _0x745a53.x) {
                      _0x1719bc.next = 0x10;
                      break;
                    }
                    _0x105616 = _0x5e8a2d;
                    return _0x1719bc.abrupt('break', 0x18);
                  case 0x10:
                    _0x1719bc.next = 0x15;
                    break;
                  case 0x12:
                    if (_0x745a53.x != _0x4e825f.COL - 0x2) {
                      _0x1719bc.next = 0x15;
                      break;
                    }
                    _0x105616 = _0x5e8a2d;
                    return _0x1719bc.abrupt('break', 0x18);
                  case 0x15:
                    _0x5e8a2d++;
                    _0x1719bc.next = 0xa;
                    break;
                  case 0x18:
                    _0x1207b7 = 0x0;
                    _0xe555e = 0x0;
                  case 0x1a:
                    if (!(_0xe555e < _0x48f1ad[_0x5de0b7].PosVec.length)) {
                      _0x1719bc.next = 0x47;
                      break;
                    }
                    _0xd74386 = this.PosToXY(_0x48f1ad[_0x5de0b7].PosVec[_0xe555e]);
                    if (this.m_symbolSpines[_0xd74386.x][_0xd74386.y]) {
                      _0x1719bc.next = 0x44;
                      break;
                    }
                    _0x29d679 = this.m_slotReels.GetSymbol(_0xd74386.x, _0xd74386.y);
                    _0x32cd5c = this.m_slotReels.GetSymbolNode(_0xd74386.x, _0xd74386.y);
                    _0x26d775 = this.m_slotReels.GetSymbolPosition(_0xd74386.x, _0xd74386.y);
                    _0x32cd5c.active = false;
                    _0x287f65 = _0x472faf.GetInstance().GetSymbolSpine(_0x29d679);
                    this.AddSymbolChild(_0x287f65.node, _0x29d679);
                    _0x287f65.SetSkin(_0x29d679);
                    _0x189fb9.SetZIndex(_0x287f65.node, _0x4e825f.GetZIndex(_0xd74386.x, _0xd74386.y, _0x29d679));
                    _0x287f65.node.setPosition(_0x26d775);
                    this.m_symbolSpines[_0xd74386.x][_0xd74386.y] = _0x287f65;
                    _0x3dc1e6 = _0x472faf.GetInstance().GetSymbolSpine(_0x29d679, true);
                    this.AddSymbolChild(_0x3dc1e6.node, _0x29d679, true);
                    _0x3dc1e6.SetSkin(_0x29d679);
                    _0x189fb9.SetZIndex(_0x3dc1e6.node, _0x4e825f.GetZIndex(_0xd74386.x, _0xd74386.y, _0x29d679));
                    _0x3dc1e6.node.setPosition(_0x26d775);
                    this.m_eftSymbolSpines[_0xd74386.x][_0xd74386.y] = _0x3dc1e6;
                    if (++_0x1207b7 == _0x105616) {
                      (function () {
                        var _0x3e9e40 = _0x472faf.GetInstance().GetSingleWin();
                        _0x5863ff.node.addChild(_0x3e9e40.node);
                        _0x189fb9.SetZIndex(_0x3e9e40.node, _0x4e825f.GetZIndex(_0xd74386.x, _0xd74386.y, _0x4e825f.Symbol.SYMBOL_SCATTER));
                        _0x3e9e40.SetInfo(_0x48f1ad[_0x5de0b7].Win, _0x48f1ad[_0x5de0b7].Mult);
                        _0x3e9e40.node.setPosition(_0x26d775);
                        _0x3e9e40.Show().then(function () {
                          _0x3e9e40.node.removeFromParent();
                          _0x472faf.GetInstance().ReturnWin(_0x3e9e40);
                        });
                      })();
                    }
                    _0x547b5b = [];
                    _0x2d1306 = -0x1;
                  case 0x31:
                    if (!(_0x2d1306 <= 0x1)) {
                      _0x1719bc.next = 0x41;
                      break;
                    }
                    _0x5f5b22 = -0x1;
                  case 0x33:
                    if (!(_0x5f5b22 <= 0x1)) {
                      _0x1719bc.next = 0x3e;
                      break;
                    }
                    if (0x0 != _0x2d1306 || 0x0 != _0x5f5b22) {
                      _0x1719bc.next = 0x36;
                      break;
                    }
                    return _0x1719bc.abrupt("continue", 0x3b);
                  case 0x36:
                    _0x2b03cc = _0xd74386.x + _0x2d1306;
                    _0x9aa9a1 = _0xd74386.y + _0x5f5b22;
                    if (!(_0x2b03cc < 0x0 || _0x2b03cc >= _0x4e825f.COL || _0x9aa9a1 < 0x0 || _0x9aa9a1 >= _0x4e825f.ROW)) {
                      _0x1719bc.next = 0x3a;
                      break;
                    }
                    return _0x1719bc.abrupt("continue", 0x3b);
                  case 0x3a:
                    if (_0x42ea97[_0xd74386.x][_0xd74386.y] == _0x42ea97[_0x2b03cc][_0x9aa9a1]) {
                      _0x547b5b.push(_0x5438d0[_0x2d1306 + 0x1][_0x5f5b22 + 0x1]);
                    }
                  case 0x3b:
                    _0x5f5b22++;
                    _0x1719bc.next = 0x33;
                    break;
                  case 0x3e:
                    _0x2d1306++;
                    _0x1719bc.next = 0x31;
                    break;
                  case 0x41:
                    this.m_hintBottomNodes[_0xd74386.x][_0xd74386.y].active = true;
                    this.m_hintFrames[_0xd74386.x][_0xd74386.y].node.active = true;
                    this.m_hintFrames[_0xd74386.x][_0xd74386.y].SetFrame(_0x547b5b);
                  case 0x44:
                    _0xe555e++;
                    _0x1719bc.next = 0x1a;
                    break;
                  case 0x47:
                    _0x5de0b7++;
                    _0x1719bc.next = 0x5;
                    break;
                  case 0x4a:
                    _0x3f725e = _0x4e825f.TimeScale.Normal;
                    if (this.m_slotReels.IsHardStop) {
                      _0x3f725e = _0x4e825f.TimeScale.HardStop;
                    }
                    _0x574be8 = false;
                    _0xa703dd = [];
                    if (_0x1a3b19) {
                      _0x3bae1e.Play(this.GetComboAudioClip());
                    }
                    for (_0x57dca6 = 0x0; _0x57dca6 < _0x4e825f.COL; _0x57dca6++) {
                      for (_0x480216 = 0x0; _0x480216 < _0x4e825f.ROW; _0x480216++) {
                        if (this.m_symbolSpines[_0x57dca6][_0x480216]) {
                          this.m_symbolSpines[_0x57dca6][_0x480216].WinSoundCb = _0x44f921(_0xa0d93().mark(function _0x12df27() {
                            return _0xa0d93().wrap(function (_0x27cf7f) {
                              for (;;) {
                                switch (_0x27cf7f.prev = _0x27cf7f.next) {
                                  case 0x0:
                                    if (_0x574be8) {
                                      _0x27cf7f.next = 0x7;
                                      break;
                                    }
                                    _0x574be8 = true;
                                    _0x5863ff.m_isShowWildOnBar = true;
                                    _0x27cf7f.next = 0x5;
                                    return _0x5863ff.m_comboBarSpine.Add();
                                  case 0x5:
                                    if (_0x27cf7f.sent) {
                                      if (!(null == _0x472b4b)) {
                                        _0x472b4b();
                                      }
                                      _0x5863ff.ShowWildOnBar();
                                    } else {
                                      _0x5863ff.m_isShowWildOnBar = false;
                                    }
                                  case 0x7:
                                  case "end":
                                    return _0x27cf7f.stop();
                                }
                              }
                            }, _0x12df27);
                          }));
                          _0xa703dd.push(this.m_symbolSpines[_0x57dca6][_0x480216].ShowWin(_0x3f725e));
                        }
                        if (this.m_eftSymbolSpines[_0x57dca6][_0x480216]) {
                          _0xa703dd.push(this.m_eftSymbolSpines[_0x57dca6][_0x480216].ShowWin(_0x3f725e));
                        }
                      }
                    }
                    _0x1719bc.next = 0x52;
                    return Promise.all(_0xa703dd);
                  case 0x52:
                    this.m_historyManager.AddHistoryRecords(_0x48f1ad, this.m_slotReels.IsHardStop);
                    this.CleanConnectHint();
                    _0xa703dd = [];
                    for (_0x35fb25 = 0x0; _0x35fb25 < _0x4e825f.COL; _0x35fb25++) {
                      for (_0x2c80da = 0x0; _0x2c80da < _0x4e825f.ROW; _0x2c80da++) {
                        if (this.m_symbolSpines[_0x35fb25][_0x2c80da]) {
                          if (!this.m_markSpines[_0x35fb25][_0x2c80da]) {
                            _0x5afba6 = _0x1a7f5d(this.m_markPrefab);
                            this.m_markNode.addChild(_0x5afba6);
                            _0x189fb9.SetZIndex(_0x5afba6, 0x0);
                            this.m_markSpines[_0x35fb25][_0x2c80da] = _0x5afba6.getComponent(_0x32d363);
                            _0x22b550 = this.m_slotReels.GetSymbolPosition(_0x35fb25, _0x2c80da);
                            _0x5afba6.position = _0x22b550;
                          }
                          _0xa703dd.push(this.m_markSpines[_0x35fb25][_0x2c80da].Show(_0x4a7e41[_0x35fb25].Col[_0x2c80da]));
                          if (!this.m_markNums[_0x35fb25][_0x2c80da]) {
                            _0x2f3aac = _0x1a7f5d(this.m_markNumPrefab);
                            this.m_markNode.addChild(_0x2f3aac);
                            _0x189fb9.SetZIndex(_0x2f3aac, 0x1);
                            this.m_markNums[_0x35fb25][_0x2c80da] = _0x2f3aac.getComponent(_0xf1e923);
                            _0x40ba59 = this.m_slotReels.GetSymbolPosition(_0x35fb25, _0x2c80da);
                            _0x2f3aac.position = _0x40ba59;
                          }
                          this.m_markNums[_0x35fb25][_0x2c80da].SetMulti(_0x4a7e41[_0x35fb25].Col[_0x2c80da]);
                        }
                      }
                    }
                    _0x1719bc.next = 0x58;
                    return Promise.all(_0xa703dd);
                  case 0x58:
                  case "end":
                    return _0x1719bc.stop();
                }
              }
            }, _0x4564fb, this);
          }));
          return function (_0x57a5b3, _0x40d1cd, _0x2d0d05, _0x402c08) {
            return _0x254b68.apply(this, arguments);
          };
        }();
        _0x6299f9.SetMark = function (_0x5240a7) {
          _0x190dcc("multis", _0x5240a7);
          for (var _0x535c88 = 0x0; _0x535c88 < _0x4e825f.COL; _0x535c88++) {
            for (var _0x37f69c = 0x0; _0x37f69c < _0x4e825f.ROW; _0x37f69c++) {
              if (_0x5240a7[_0x535c88].Col[_0x37f69c] > 0x0) {
                if (!this.m_markSpines[_0x535c88][_0x37f69c]) {
                  var _0x498d08 = _0x1a7f5d(this.m_markPrefab);
                  this.m_markNode.addChild(_0x498d08);
                  _0x189fb9.SetZIndex(_0x498d08, 0x0);
                  this.m_markSpines[_0x535c88][_0x37f69c] = _0x498d08.getComponent(_0x32d363);
                  var _0x4ebdb0 = this.m_slotReels.GetSymbolPosition(_0x535c88, _0x37f69c);
                  _0x498d08.position = _0x4ebdb0;
                }
                this.m_markSpines[_0x535c88][_0x37f69c].Show(_0x5240a7[_0x535c88].Col[_0x37f69c]);
                if (!this.m_markNums[_0x535c88][_0x37f69c]) {
                  var _0x140b1b = _0x1a7f5d(this.m_markNumPrefab);
                  this.m_markNode.addChild(_0x140b1b);
                  _0x189fb9.SetZIndex(_0x140b1b, 0x1);
                  this.m_markNums[_0x535c88][_0x37f69c] = _0x140b1b.getComponent(_0xf1e923);
                  var _0x46a422 = this.m_slotReels.GetSymbolPosition(_0x535c88, _0x37f69c);
                  _0x140b1b.position = _0x46a422;
                }
                this.m_markNums[_0x535c88][_0x37f69c].SetMulti(_0x5240a7[_0x535c88].Col[_0x37f69c]);
              }
            }
          }
        };
        _0x6299f9.SetHistory = function (_0x1a20e0, _0x5de0dc) {
          if (undefined === _0x5de0dc) {
            _0x5de0dc = 0x0;
          }
          this.m_historyManager.AddHistoryRecords(_0x1a20e0, this.m_slotReels.IsHardStop);
          if (_0x5de0dc > 0x0) {
            this.m_historyManager.SetMaxWin(_0x5de0dc);
          }
        };
        _0x6299f9.CleanConnectHint = function () {
          for (var _0x2dc420 = 0x0; _0x2dc420 < _0x4e825f.COL; _0x2dc420++) {
            for (var _0x161773 = 0x0; _0x161773 < _0x4e825f.ROW; _0x161773++) {
              this.m_hintBottomNodes[_0x2dc420][_0x161773].active = false;
              this.m_hintFrames[_0x2dc420][_0x161773].HideFrame();
              this.m_hintFrames[_0x2dc420][_0x161773].node.active = false;
            }
          }
        };
        _0x6299f9.GetComboAudioClip = function () {
          return this.m_slotReels.IsHardStop ? _0x4e825f.IsInFG ? _0x4e825f.PlateIdx < _0x4e825f.ComboSound.FG[0x0] ? _0x4e825f.AudioClips.Combo_f_x2_fast : _0x4e825f.PlateIdx < _0x4e825f.ComboSound.FG[0x1] ? _0x4e825f.AudioClips.Combo_f_x3_fast : _0x4e825f.PlateIdx < _0x4e825f.ComboSound.FG[0x2] ? _0x4e825f.AudioClips.Combo_f_x4_fast : _0x4e825f.AudioClips.Combo_f_x5_fast : _0x4e825f.PlateIdx < _0x4e825f.ComboSound.MG[0x0] ? _0x4e825f.AudioClips.Combo_f_x2_fast : _0x4e825f.PlateIdx < _0x4e825f.ComboSound.MG[0x1] ? _0x4e825f.AudioClips.Combo_f_x3_fast : _0x4e825f.PlateIdx < _0x4e825f.ComboSound.MG[0x4] ? _0x4e825f.AudioClips.Combo_f_x4_fast : _0x4e825f.AudioClips.Combo_f_x5_fast : _0x4e825f.IsInFG ? _0x4e825f.PlateIdx < _0x4e825f.ComboSound.FG[0x0] ? _0x4e825f.AudioClips.Combo_f_x2 : _0x4e825f.PlateIdx < _0x4e825f.ComboSound.FG[0x1] ? _0x4e825f.AudioClips.Combo_f_x3 : _0x4e825f.PlateIdx < _0x4e825f.ComboSound.FG[0x2] ? _0x4e825f.AudioClips.Combo_f_x4 : _0x4e825f.AudioClips.Combo_f_x5 : _0x4e825f.PlateIdx < _0x4e825f.ComboSound.MG[0x0] ? _0x4e825f.AudioClips.Combo_f_x2 : _0x4e825f.PlateIdx < _0x4e825f.ComboSound.MG[0x1] ? _0x4e825f.AudioClips.Combo_f_x3 : _0x4e825f.PlateIdx < _0x4e825f.ComboSound.MG[0x4] ? _0x4e825f.AudioClips.Combo_f_x4 : _0x4e825f.AudioClips.Combo_f_x5;
        };
        _0x6299f9.PosToXY = function (_0x2bc79a) {
          var _0x4e2c9d = _0x2bc79a % _0x4e825f.ROW;
          var _0x43768c = Math.floor(_0x2bc79a / _0x4e825f.ROW);
          return _0x5089c4(_0x43768c, _0x4e2c9d);
        };
        _0x6299f9.ShowWildOnBar = function () {
          var _0x509631 = _0x44f921(_0xa0d93().mark(function _0x5f58fc() {
            var _0x13ecdb;
            var _0x3215b4;
            var _0x5ad2f7;
            var _0x4ac4a2;
            var _0xd4cecd;
            return _0xa0d93().wrap(function (_0x31a648) {
              for (;;) {
                switch (_0x31a648.prev = _0x31a648.next) {
                  case 0x0:
                    _0x13ecdb = this.m_comboBarSpine.Lvl / 0x2 - 0x1;
                    if (!(_0x3215b4 = this.m_barCandyNodes[_0x13ecdb])) {
                      _0x31a648.next = 0xb;
                      break;
                    }
                    _0x5ad2f7 = _0x3215b4.getWorldPosition();
                    _0x4ac4a2 = this.node.getComponent(_0x170b56).convertToNodeSpaceAR(_0x5ad2f7);
                    if (!this.m_flySymbol) {
                      _0xd4cecd = _0x1a7f5d(this.m_wildSymbolPrefab);
                      this.node.addChild(_0xd4cecd);
                      this.m_flySymbol = _0xd4cecd.getComponent(_0x4979b5);
                    }
                    this.m_flySymbol.node.setPosition(_0x4ac4a2);
                    this.m_flySymbol.node.active = true;
                    _0x31a648.next = 0xa;
                    return this.m_flySymbol.ShowOnBar();
                  case 0xa:
                    this.m_comboBarSpine.ShowNone(_0x13ecdb + 0x1);
                  case 0xb:
                    this.m_isShowWildOnBar = false;
                  case 0xc:
                  case "end":
                    return _0x31a648.stop();
                }
              }
            }, _0x5f58fc, this);
          }));
          return function () {
            return _0x509631.apply(this, arguments);
          };
        }();
        _0x6299f9.ShowTransToWild = function () {
          var _0x375dde = _0x44f921(_0xa0d93().mark(function _0x45787(_0x34e7d7) {
            var _0x297c62;
            var _0x49c6b0;
            var _0xc54631;
            var _0x3115ee;
            return _0xa0d93().wrap(function (_0x1c1c1c) {
              for (;;) {
                switch (_0x1c1c1c.prev = _0x1c1c1c.next) {
                  case 0x0:
                    if (null == (_0x297c62 = this.m_flySymbol) || !_0x297c62.node.active) {
                      _0x1c1c1c.next = 0xb;
                      break;
                    }
                    _0x49c6b0 = this.PosToXY(_0x34e7d7);
                    _0xc54631 = this.m_slotReels.GetSymbolPosition(_0x49c6b0.x, _0x49c6b0.y);
                    _0x3115ee = this.m_flySymbol.ShowFly();
                    _0x570899(this.m_flySymbol.node).to(_0x3115ee, {
                      'position': _0xc54631
                    }).start();
                    _0x1c1c1c.next = 0x7;
                    return _0x3e36bf.Wait(this, _0x3115ee);
                  case 0x7:
                    _0x1c1c1c.next = 0x9;
                    return this.m_flySymbol.ShowOnPlate();
                  case 0x9:
                    this.m_slotReels.TransToWild(_0x49c6b0);
                    this.m_flySymbol.node.active = false;
                  case 0xb:
                  case "end":
                    return _0x1c1c1c.stop();
                }
              }
            }, _0x45787, this);
          }));
          return function (_0x257215) {
            return _0x375dde.apply(this, arguments);
          };
        }();
        _0x6299f9.ShowBoom = function () {
          var _0x2e7490 = _0x44f921(_0xa0d93().mark(function _0x5156d4(_0x3cd2e3, _0x1d6991, _0x3ae2ff) {
            var _0x2d6e3b;
            var _0x3f0b7a;
            var _0x3f9226;
            var _0x160461;
            var _0x5e2105;
            var _0x3dd301;
            var _0x42d71d;
            var _0x2b4603;
            var _0x4183e4;
            var _0x4e9b6b;
            var _0x3d796c;
            var _0x3c738f;
            var _0xb46937;
            var _0x4e318f = this;
            return _0xa0d93().wrap(function (_0xd412d3) {
              for (;;) {
                switch (_0xd412d3.prev = _0xd412d3.next) {
                  case 0x0:
                    _0x2d6e3b = [];
                    _0x3f0b7a = [];
                    _0x3f9226 = [[], [], [], [], [], [], []];
                    _0x160461 = [[], [], [], [], [], [], []];
                    _0x5e2105 = _0x4e825f.COL * _0x4e825f.ROW;
                    _0x3dd301 = false;
                    _0x42d71d = function (_0x159e80) {
                      if (_0x3cd2e3[_0x159e80] >= _0x5e2105) {
                        _0x190dcc("Out of Range!!", _0x3cd2e3[_0x159e80]);
                        return "continue";
                      }
                      var _0xc5dca = _0x4e318f.PosToXY(_0x3cd2e3[_0x159e80]);
                      for (var _0x4402fa = 0x0; _0x4402fa < _0x1d6991.length; _0x4402fa++) {
                        var _0x1994ee = _0x4e318f.PosToXY(_0x1d6991[_0x4402fa]);
                        if (!(_0x1994ee.x < 0x0 || _0x1994ee.x >= _0x4e825f.COL || _0x1994ee.y < 0x0 || _0x1994ee.y >= _0x4e825f.ROW)) {
                          var _0x51ef08 = _0x4e318f.m_slotReels.GetSymbol(_0x1994ee.x, _0x1994ee.y);
                          if (_0x51ef08 != _0x4e825f.Symbol.SYMBOL_SCATTER && !_0x3f9226[_0x1994ee.x][_0x1994ee.y]) {
                            var _0x3229f7 = _0x4e318f.m_slotReels.GetSymbolPosition(_0x1994ee.x, _0x1994ee.y);
                            var _0x5e6e0c = _0x472faf.GetInstance().GetSymbolSpine(_0x51ef08);
                            _0x4e318f.AddSymbolChild(_0x5e6e0c.node, _0x51ef08);
                            _0x5e6e0c.SetSkin(_0x51ef08);
                            _0x5e6e0c.node.active = false;
                            _0x5e6e0c.node.setPosition(_0x3229f7);
                            _0x3f9226[_0x1994ee.x][_0x1994ee.y] = _0x5e6e0c;
                            var _0x236d7a = _0x472faf.GetInstance().GetSymbolSpine(_0x51ef08, true);
                            _0x4e318f.AddSymbolChild(_0x236d7a.node, _0x51ef08);
                            _0x236d7a.SetSkin(_0x51ef08);
                            _0x236d7a.node.active = false;
                            _0x236d7a.node.setPosition(_0x3229f7);
                            _0x160461[_0x1994ee.x][_0x1994ee.y] = _0x236d7a;
                          }
                        }
                      }
                      var _0x5c98e4 = _0x472faf.GetInstance().GetSymbolSpine(_0x4e825f.Symbol.SYMBOL_WILD);
                      _0x4e318f.AddSymbolChild(_0x5c98e4.node, _0x4e825f.Symbol.SYMBOL_WILD);
                      _0x4e318f.m_slotReels.GetSymbolNode(_0xc5dca.x, _0xc5dca.y).active = false;
                      var _0x3ef384 = _0x5c98e4.node.getComponent(_0x4979b5);
                      var _0xfcc713 = _0x4e318f.m_slotReels.GetSymbolPosition(_0xc5dca.x, _0xc5dca.y);
                      _0x3ef384.node.setPosition(_0xfcc713);
                      _0x3f0b7a.push(_0x3ef384);
                      _0x2d6e3b.push(new Promise(_0x44f921(_0xa0d93().mark(function _0x21d0be(_0x374371) {
                        return _0xa0d93().wrap(function (_0x3ce937) {
                          for (;;) {
                            switch (_0x3ce937.prev = _0x3ce937.next) {
                              case 0x0:
                                _0x3ce937.next = 0x2;
                                return _0x3ef384.ShowTrans(function () {
                                  if (!_0x3dd301) {
                                    _0x3dd301 = true;
                                    if (!(null == _0x3ae2ff)) {
                                      _0x3ae2ff();
                                    }
                                    for (var _0x12d7ce = 0x0; _0x12d7ce < _0x3f9226.length; _0x12d7ce++) {
                                      for (var _0x3e24d7 = 0x0; _0x3e24d7 < _0x3f9226[_0x12d7ce].length; _0x3e24d7++) {
                                        if (_0x3f9226[_0x12d7ce][_0x3e24d7]) {
                                          _0x3f9226[_0x12d7ce][_0x3e24d7].node.active = true;
                                          _0x3f9226[_0x12d7ce][_0x3e24d7].ShowRemove();
                                          _0x4e318f.m_slotReels.GetSymbolNode(_0x12d7ce, _0x3e24d7).active = false;
                                        }
                                        if (_0x160461[_0x12d7ce][_0x3e24d7]) {
                                          _0x160461[_0x12d7ce][_0x3e24d7].node.active = true;
                                          _0x160461[_0x12d7ce][_0x3e24d7].ShowRemove();
                                        }
                                      }
                                    }
                                    _0x4e318f.m_slotReels.ShowAffect(_0x3cd2e3, _0x1d6991, function () {});
                                    _0x4e318f.ShakeWorld();
                                  }
                                }, function () {
                                  _0x4e318f.ShakeWorld(0.05, 0x1);
                                });
                              case 0x2:
                                _0x374371();
                              case 0x3:
                              case "end":
                                return _0x3ce937.stop();
                            }
                          }
                        }, _0x21d0be);
                      }))));
                    };
                    _0x2b4603 = 0x0;
                  case 0x8:
                    if (!(_0x2b4603 < _0x3cd2e3.length)) {
                      _0xd412d3.next = 0xf;
                      break;
                    }
                    if ("continue" !== _0x42d71d(_0x2b4603)) {
                      _0xd412d3.next = 0xc;
                      break;
                    }
                    return _0xd412d3.abrupt("continue", 0xc);
                  case 0xc:
                    _0x2b4603++;
                    _0xd412d3.next = 0x8;
                    break;
                  case 0xf:
                    _0xd412d3.next = 0x11;
                    return Promise.all(_0x2d6e3b);
                  case 0x11:
                    for (; _0x3f0b7a.length > 0x0;) {
                      (_0x4183e4 = _0x3f0b7a.pop()).node.removeFromParent();
                      _0x472faf.GetInstance().ReturnSymbol(_0x4183e4);
                    }
                    for (_0x4e9b6b = 0x0; _0x4e9b6b < _0x3f9226.length; _0x4e9b6b++) {
                      for (_0x3d796c = 0x0; _0x3d796c < _0x3f9226[_0x4e9b6b].length; _0x3d796c++) {
                        if (_0x3f9226[_0x4e9b6b][_0x3d796c]) {
                          (_0x3c738f = _0x3f9226[_0x4e9b6b][_0x3d796c]).node.removeFromParent();
                          _0x472faf.GetInstance().ReturnSymbol(_0x3c738f);
                        }
                        if (_0x160461[_0x4e9b6b][_0x3d796c]) {
                          (_0xb46937 = _0x160461[_0x4e9b6b][_0x3d796c]).node.removeFromParent();
                          _0x472faf.GetInstance().ReturnSymbol(_0xb46937);
                        }
                      }
                    }
                  case 0x13:
                  case "end":
                    return _0xd412d3.stop();
                }
              }
            }, _0x5156d4);
          }));
          return function (_0x47cbea, _0x5764de, _0x3b9f0c) {
            return _0x2e7490.apply(this, arguments);
          };
        }();
        _0x6299f9.ShakeWorld = function (_0x2993eb, _0x150bf5, _0x36c3a6, _0x455a00) {
          var _0x32cdbb = this;
          if (undefined === _0x2993eb) {
            _0x2993eb = 0.05;
          }
          if (undefined === _0x150bf5) {
            _0x150bf5 = 0x3;
          }
          if (undefined === _0x36c3a6) {
            _0x36c3a6 = 0x8;
          }
          if (!this.m_shockAction) {
            var _0x291425 = this.m_mainNode.position.x;
            var _0x54ece8 = this.m_mainNode.position.y;
            this.m_shockAction = true;
            _0x570899(this.m_mainNode).repeat(_0x150bf5, _0x570899().to(_0x2993eb, {
              'position': _0x4aedad(_0x291425 + _0x36c3a6, _0x54ece8 + _0x36c3a6)
            }).to(_0x2993eb, {
              'position': _0x4aedad(_0x291425 - _0x36c3a6, _0x54ece8 - _0x36c3a6)
            }).to(_0x2993eb, {
              'position': _0x4aedad(_0x291425 - _0x36c3a6, _0x54ece8 + _0x36c3a6)
            }).to(_0x2993eb, {
              'position': _0x4aedad(_0x291425, _0x54ece8)
            })).call(function () {
              _0x32cdbb.m_shockAction = false;
              if (_0x455a00) {
                _0x455a00();
              }
            }).start();
          }
        };
        _0x6299f9.ShowAllScatterWin = function () {
          var _0x1c197f = _0x44f921(_0xa0d93().mark(function _0x40a13d() {
            var _0x72c4ff;
            var _0x42f2f6;
            var _0x2b207b;
            var _0x572d2d;
            var _0x267c2d;
            var _0x444803;
            var _0x58b41e;
            var _0x20917d;
            return _0xa0d93().wrap(function (_0x3090a2) {
              for (;;) {
                switch (_0x3090a2.prev = _0x3090a2.next) {
                  case 0x0:
                    _0x72c4ff = [];
                    _0x42f2f6 = [];
                    _0x2b207b = [];
                    for (_0x572d2d = 0x0; _0x572d2d < _0x4e825f.COL; _0x572d2d++) {
                      for (_0x267c2d = 0x0; _0x267c2d < _0x4e825f.ROW; _0x267c2d++) {
                        _0x444803 = this.m_slotReels.GetSymbolNode(_0x572d2d, _0x267c2d);
                        if (_0x444803.getComponent(_0x5f20e4)) {
                          _0x58b41e = _0x472faf.GetInstance().GetSymbolSpine(_0x4e825f.Symbol.SYMBOL_SCATTER);
                          _0x42f2f6.push(_0x58b41e);
                          this.AddSymbolChild(_0x58b41e.node, _0x4e825f.Symbol.SYMBOL_SCATTER);
                          _0x444803.active = false;
                          _0x2b207b.push(_0x444803);
                          _0x58b41e.node.setPosition(_0x444803.position);
                          _0x72c4ff.push(_0x58b41e.ShowWin(_0x4e825f.TimeScale.Normal));
                        }
                      }
                    }
                    _0x3bae1e.Play(_0x4e825f.AudioClips.Scatter_Bell);
                    _0x3090a2.next = 0x7;
                    return Promise.all(_0x72c4ff);
                  case 0x7:
                    for (; _0x42f2f6.length > 0x0;) {
                      (_0x20917d = _0x42f2f6.pop()).node.removeFromParent();
                      _0x472faf.GetInstance().ReturnSymbol(_0x20917d);
                    }
                    for (; _0x2b207b.length > 0x0;) {
                      _0x2b207b.pop().active = true;
                    }
                  case 0x9:
                  case "end":
                    return _0x3090a2.stop();
                }
              }
            }, _0x40a13d, this);
          }));
          return function () {
            return _0x1c197f.apply(this, arguments);
          };
        }();
        _0x6299f9.ShowColumnNearWin = function () {
          var _0x763cf = _0x44f921(_0xa0d93().mark(function _0x5af4d1(_0x3e89b2, _0x4349f7, _0x584b0c) {
            var _0x3f5de2;
            var _0x5a56d1;
            var _0x5c1f2c;
            var _0x4736b9;
            var _0x4338dc;
            var _0x25347c;
            return _0xa0d93().wrap(function (_0x964a07) {
              for (;;) {
                switch (_0x964a07.prev = _0x964a07.next) {
                  case 0x0:
                    if (undefined === _0x4349f7) {
                      _0x4349f7 = _0x4e825f.COL;
                    }
                    if (undefined === _0x584b0c) {
                      _0x584b0c = 0x0;
                    }
                    _0x3f5de2 = [];
                    for (_0x5a56d1 = _0x584b0c; _0x5a56d1 <= _0x4349f7; _0x5a56d1++) {
                      for (_0x5c1f2c = 0x0; _0x5c1f2c < _0x4e825f.ROW; _0x5c1f2c++) {
                        if (this.m_slotReels.GetSymbol(_0x5a56d1, _0x5c1f2c) == _0x4e825f.Symbol.SYMBOL_SCATTER) {
                          _0x4736b9 = _0x472faf.GetInstance().GetSymbolSpine(_0x4e825f.Symbol.SYMBOL_SCATTER).getComponent(_0x5f20e4);
                          this.m_nearWinScatters.push(_0x4736b9);
                          this.AddSymbolChild(_0x4736b9.node, _0x4e825f.Symbol.SYMBOL_SCATTER);
                          (_0x4338dc = this.m_slotReels.GetSymbolNode(_0x5a56d1, _0x5c1f2c)).active = false;
                          this.m_scatterSymbolNodes.push(_0x4338dc);
                          _0x4736b9.node.setPosition(_0x4338dc.position);
                          _0x3f5de2.push(_0x4736b9.ShowNearWin());
                        }
                      }
                    }
                    for (_0x25347c = 0x0; _0x25347c < _0x3e89b2.length; _0x25347c++) {
                      if (_0x3e89b2[_0x25347c]) {
                        this.m_nearWinBackSpines[_0x25347c].Show(_0x3e89b2[_0x25347c]);
                        _0x3f5de2.push(this.m_nearWinColumnSpines[_0x25347c].Show());
                      }
                    }
                    _0x964a07.next = 0x7;
                    return Promise.all(_0x3f5de2);
                  case 0x7:
                  case "end":
                    return _0x964a07.stop();
                }
              }
            }, _0x5af4d1, this);
          }));
          return function (_0x31bf20, _0x2458db, _0xec738c) {
            return _0x763cf.apply(this, arguments);
          };
        }();
        _0x6299f9.ShowPatchingNearWin = function () {
          var _0x5e478e = _0x44f921(_0xa0d93().mark(function _0x11258b(_0x270202, _0x6e4346, _0x320e77) {
            var _0x3e0580;
            var _0x5c2348;
            var _0x53d955;
            var _0x3c644e;
            var _0x10fc69;
            var _0x1bf9e5;
            return _0xa0d93().wrap(function (_0x5538f1) {
              for (;;) {
                switch (_0x5538f1.prev = _0x5538f1.next) {
                  case 0x0:
                    if (undefined === _0x6e4346) {
                      _0x6e4346 = _0x4e825f.COL;
                    }
                    if (undefined === _0x320e77) {
                      _0x320e77 = 0x0;
                    }
                    _0x3e0580 = [];
                    for (_0x5c2348 = _0x320e77; _0x5c2348 <= _0x6e4346; _0x5c2348++) {
                      for (_0x53d955 = 0x0; _0x53d955 < _0x4e825f.ROW; _0x53d955++) {
                        if (this.m_slotReels.GetSymbol(_0x5c2348, _0x53d955) == _0x4e825f.Symbol.SYMBOL_SCATTER) {
                          _0x3c644e = _0x472faf.GetInstance().GetSymbolSpine(_0x4e825f.Symbol.SYMBOL_SCATTER).getComponent(_0x5f20e4);
                          this.m_nearWinScatters.push(_0x3c644e);
                          this.AddSymbolChild(_0x3c644e.node, _0x4e825f.Symbol.SYMBOL_SCATTER);
                          (_0x10fc69 = this.m_slotReels.GetSymbolNode(_0x5c2348, _0x53d955)).active = false;
                          this.m_scatterSymbolNodes.push(_0x10fc69);
                          _0x3c644e.node.setPosition(_0x10fc69.position);
                          _0x3e0580.push(_0x3c644e.ShowNearWin());
                        }
                      }
                    }
                    for (_0x1bf9e5 = 0x0; _0x1bf9e5 < _0x270202.length; _0x1bf9e5++) {
                      if (_0x270202[_0x1bf9e5]) {
                        this.m_nearWinBackSpines[_0x1bf9e5].Show(_0x270202[_0x1bf9e5]);
                        _0x3e0580.push(this.m_nearWinPatchingSpines[_0x1bf9e5].Show());
                      }
                    }
                    _0x5538f1.next = 0x7;
                    return Promise.all(_0x3e0580);
                  case 0x7:
                  case 'end':
                    return _0x5538f1.stop();
                }
              }
            }, _0x11258b, this);
          }));
          return function (_0xa3a769, _0x4059ec, _0x1fae56) {
            return _0x5e478e.apply(this, arguments);
          };
        }();
        _0x6299f9.HideNearWin = function (_0x2a74ba) {
          if (undefined !== _0x2a74ba) {
            if (this.m_nearWinBackSpines[_0x2a74ba]) {
              this.m_nearWinBackSpines[_0x2a74ba].Hide();
            }
            if (this.m_nearWinPatchingSpines[_0x2a74ba]) {
              this.m_nearWinPatchingSpines[_0x2a74ba].Hide();
            }
            if (this.m_nearWinColumnSpines[_0x2a74ba]) {
              this.m_nearWinColumnSpines[_0x2a74ba].Hide();
            }
          } else {
            for (var _0xc598b1 = 0x0; _0xc598b1 < _0x4e825f.COL; _0xc598b1++) {
              this.m_nearWinBackSpines[_0xc598b1].Hide();
              this.m_nearWinPatchingSpines[_0xc598b1].Hide();
              this.m_nearWinColumnSpines[_0xc598b1].Hide();
            }
            for (; this.m_nearWinScatters.length > 0x0;) {
              var _0x5ed010 = this.m_nearWinScatters.pop();
              _0x5ed010.node.removeFromParent();
              _0x472faf.GetInstance().ReturnSymbol(_0x5ed010);
            }
            for (; this.m_scatterSymbolNodes.length > 0x0;) {
              this.m_scatterSymbolNodes.pop().active = true;
            }
          }
        };
        _0x6299f9.EnterFree = function () {
          var _0x3e4178 = _0x44f921(_0xa0d93().mark(function _0xb3bf16(_0x4c2fcb, _0x5bbbed, _0x6ebcbf) {
            var _0x3e889b;
            return _0xa0d93().wrap(function (_0xa5a05a) {
              for (;;) {
                switch (_0xa5a05a.prev = _0xa5a05a.next) {
                  case 0x0:
                    _0x3e889b = _0x3bae1e.Play(_0x4e825f.AudioClips.FG_Declare);
                    _0xa5a05a.next = 0x3;
                    return this.m_fgDeclareSpine.Show(_0x4c2fcb, _0x5bbbed, function () {
                      if (!(null == _0x6ebcbf)) {
                        _0x6ebcbf();
                      }
                    });
                  case 0x3:
                    _0x3bae1e.Stop(_0x3e889b);
                  case 0x4:
                  case "end":
                    return _0xa5a05a.stop();
                }
              }
            }, _0xb3bf16, this);
          }));
          return function (_0x2d13dc, _0x3af705, _0x1cd103) {
            return _0x3e4178.apply(this, arguments);
          };
        }();
        _0x6299f9.ShowFreeCounter = function (_0xc4139e) {
          this.m_fgCounterSpine.Show(_0xc4139e);
        };
        _0x6299f9.ShowAddFree = function () {
          var _0x3ae56b = _0x44f921(_0xa0d93().mark(function _0x30d09c(_0x119506, _0x4f0648) {
            return _0xa0d93().wrap(function (_0x3342ba) {
              for (;;) {
                switch (_0x3342ba.prev = _0x3342ba.next) {
                  case 0x0:
                    _0x3342ba.next = 0x2;
                    return this.m_fgAddFreeSpine.Show(_0x4f0648);
                  case 0x2:
                    _0x3342ba.next = 0x4;
                    return this.m_fgCounterSpine.ShowAddRound(_0x119506);
                  case 0x4:
                  case 'end':
                    return _0x3342ba.stop();
                }
              }
            }, _0x30d09c, this);
          }));
          return function (_0x46f17b, _0x5c7f8a) {
            return _0x3ae56b.apply(this, arguments);
          };
        }();
        _0x6299f9.DescreaseRound = function () {
          this.m_fgCounterSpine.DecreaseRound();
        };
        _0x6299f9.HideFreeCounter = function () {
          this.m_fgCounterSpine.Hide();
        };
        _0x6299f9.LeaveFree = function () {
          var _0x26f4eb = _0x44f921(_0xa0d93().mark(function _0x16ff45(_0x4be8ff, _0x2696a, _0x26d1db) {
            var _0x327c36;
            return _0xa0d93().wrap(function (_0x16278e) {
              for (;;) {
                switch (_0x16278e.prev = _0x16278e.next) {
                  case 0x0:
                    _0x327c36 = _0x3bae1e.Play(_0x4e825f.AudioClips.FG_End);
                    _0x16278e.next = 0x3;
                    return this.m_fgCompliment.Show(_0x4be8ff, _0x2696a, function () {
                      if (!(null == _0x26d1db)) {
                        _0x26d1db();
                      }
                    });
                  case 0x3:
                    _0x3bae1e.Stop(_0x327c36);
                  case 0x4:
                  case "end":
                    return _0x16278e.stop();
                }
              }
            }, _0x16ff45, this);
          }));
          return function (_0x12092b, _0x4ce523, _0x8ed94c) {
            return _0x26f4eb.apply(this, arguments);
          };
        }();
        _0x540644(_0x2beaf4, [{
          'key': 'IsShowWildOnBar',
          'get': function () {
            return this.m_isShowWildOnBar;
          }
        }]);
        return _0x2beaf4;
      }(_0x10b9dd);
      _0x205ac7 = _0x14eb5c(_0x5aa992.prototype, "m_mainNode", [_0x559d7e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4eb9f1 = _0x14eb5c(_0x5aa992.prototype, "m_symbolRootNode", [_0x57d356], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x18e2ab = _0x14eb5c(_0x5aa992.prototype, "m_eftSymbolRootNode", [_0x14edbd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4d92db = _0x14eb5c(_0x5aa992.prototype, "m_wildRootNode", [_0x4dab6a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x666b6b = _0x14eb5c(_0x5aa992.prototype, "m_scatterRootNode", [_0x20f21c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x37170f = _0x14eb5c(_0x5aa992.prototype, "m_symbolPrefab", [_0x331499], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x6390db = _0x14eb5c(_0x5aa992.prototype, "m_wildSymbolPrefab", [_0x45788e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5b9462 = _0x14eb5c(_0x5aa992.prototype, "m_scatterSymbolPrefab", [_0x5ee51a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x94c7bd = _0x14eb5c(_0x5aa992.prototype, "m_symbolEftPrefab", [_0x130fbf], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x28a3c4 = _0x14eb5c(_0x5aa992.prototype, "m_winPrefab", [_0x3bc773], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x13acc5 = _0x14eb5c(_0x5aa992.prototype, 'm_markNode', [_0x4a1b35], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3d2075 = _0x14eb5c(_0x5aa992.prototype, "m_markPrefab", [_0x36d33c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2c0bed = _0x14eb5c(_0x5aa992.prototype, "m_markNumPrefab", [_0x2aa9d8], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x45936f = _0x14eb5c(_0x5aa992.prototype, 'm_comboBarSpine', [_0x440e8c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4eba65 = _0x14eb5c(_0x5aa992.prototype, "m_barCandyNodes", [_0xae3a30], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x37ac1b = _0x14eb5c(_0x5aa992.prototype, "m_historyManager", [_0x2deb52], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x510108 = _0x14eb5c(_0x5aa992.prototype, "m_fgDeclareSpine", [_0x348dce], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x138c95 = _0x14eb5c(_0x5aa992.prototype, 'm_fgCounterSpine', [_0x3e5f43], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x38f7f5 = _0x14eb5c(_0x5aa992.prototype, "m_fgAddFreeSpine", [_0x5d256c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4ddfc8 = _0x14eb5c(_0x5aa992.prototype, 'm_fgCompliment', [_0x4b5b4b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x144344 = _0x14eb5c(_0x5aa992.prototype, 'm_nearWinBackSpines', [_0x5b854a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x5b287f = _0x14eb5c(_0x5aa992.prototype, "m_nearWinPatchingSpines", [_0x1b2c9e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x221cd4 = _0x14eb5c(_0x5aa992.prototype, "m_nearWinColumnSpines", [_0x37de5b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x50c76c = _0x14eb5c(_0x5aa992.prototype, "m_hintBottomPrefab", [_0x96ea3a], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1c2411 = _0x14eb5c(_0x5aa992.prototype, "m_hintFramePrefab", [_0x56f741], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, 'dc87dzkCXZAiJG1T2DiSIIL', "FeaturesAck", undefined);
      var _0x4dd5f3 = function () {};
      var _0x362f36;
      var _0x54ef04;
      var _0x2b03c4;
      var _0x7b5cdb;
      var _0x57e413;
      var _0x3b7b68;
      var _0x29dab7;
      _0x4dd5f3.MG = {
        'RoundQueue': [{
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6]
            }, {
              'Col': [0x6, 0x6, 0x6, 0x6, 0x6, 0x6, 0x6]
            }, {
              'Col': [0x6, 0x2, 0x2, 0x1, 0x2, 0x3, 0x3]
            }, {
              'Col': [0x0, 0x3, 0x3, 0x0, 0x0, 0x5, 0x5]
            }, {
              'Col': [0x4, 0x1, 0x1, 0x6, 0x4, 0x3, 0x3]
            }, {
              'Col': [0x5, 0x2, 0x2, 0x1, 0x1, 0x4, 0x4]
            }, {
              'Col': [0x5, 0x3, 0x2, 0x2, 0x1, 0x5, 0x5]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0x32,
            'AwardDataVec': [{
              'Symbol': 0x6,
              'Count': 0xf,
              'Win': 0x32,
              'Mult': 0x1,
              'PosVec': [0x0, 0x7, 0xe, 0x8, 0x1, 0x2, 0x9, 0xa, 0x3, 0x4, 0xb, 0xc, 0x5, 0x6, 0xd]
            }],
            'FillSymbols': [{
              'Col': [0x0, 0x3, 0x3, 0x4, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x2, 0x2, 0x3, 0x3]
            }, {
              'Col': [0x3]
            }, {}, {}, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x3, 0x3, 0x4, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x2, 0x2, 0x3, 0x3]
            }, {
              'Col': [0x2, 0x2, 0x1, 0x2, 0x3, 0x3, 0x3]
            }, {
              'Col': [0x0, 0x3, 0x3, 0x0, 0x0, 0x5, 0x5]
            }, {
              'Col': [0x4, 0x1, 0x1, 0x6, 0x4, 0x3, 0x3]
            }, {
              'Col': [0x5, 0x2, 0x2, 0x1, 0x1, 0x4, 0x4]
            }, {
              'Col': [0x5, 0x3, 0x2, 0x2, 0x1, 0x5, 0x5]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0.25,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x5,
              'Win': 0.25,
              'Mult': 0x1,
              'PosVec': [0xc, 0x13, 0x12, 0x14, 0xd]
            }],
            'FillSymbols': [{}, {
              'Col': [0x0, 0x0]
            }, {
              'Col': [0x2, 0x2, 0x5]
            }, {}, {}, {}, {}],
            'WildPos': 0x3
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x3, 0x3, 0x7, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x2, 0x2, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x2, 0x1, 0x2, 0x2, 0x2, 0x5]
            }, {
              'Col': [0x0, 0x3, 0x3, 0x0, 0x0, 0x5, 0x5]
            }, {
              'Col': [0x4, 0x1, 0x1, 0x6, 0x4, 0x3, 0x3]
            }, {
              'Col': [0x5, 0x2, 0x2, 0x1, 0x1, 0x4, 0x4]
            }, {
              'Col': [0x5, 0x3, 0x2, 0x2, 0x1, 0x5, 0x5]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0.25,
            'AwardDataVec': [{
              'Symbol': 0x2,
              'Count': 0x6,
              'Win': 0.25,
              'Mult': 0x1,
              'PosVec': [0x3, 0xa, 0x11, 0x12, 0xb, 0x13]
            }],
            'FillSymbols': [{
              'Col': [0x0]
            }, {
              'Col': [0x3, 0x6]
            }, {
              'Col': [0x1, 0x1, 0x0]
            }, {}, {}, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x3, 0x3, 0x1, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x0, 0x0, 0x3, 0x6]
            }, {
              'Col': [0x2, 0x2, 0x1, 0x5, 0x1, 0x1, 0x0]
            }, {
              'Col': [0x0, 0x3, 0x3, 0x0, 0x0, 0x5, 0x5]
            }, {
              'Col': [0x4, 0x1, 0x1, 0x6, 0x4, 0x3, 0x3]
            }, {
              'Col': [0x5, 0x2, 0x2, 0x1, 0x1, 0x4, 0x4]
            }, {
              'Col': [0x5, 0x3, 0x2, 0x2, 0x1, 0x5, 0x5]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x1, 0x2, 0x1, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x1, 0x2, 0x2, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0.4,
            'AwardDataVec': [{
              'Count': 0x5,
              'Win': 0.4,
              'Mult': 0x4,
              'PosVec': [0x4, 0xb, 0xa, 0x5, 0x6]
            }],
            'FillSymbols': [{
              'Col': [0x1, 0x1, 0x2]
            }, {
              'Col': [0x0, 0x0]
            }, {}, {}, {}, {}, {}],
            'WildPos': 0xb
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x3, 0x3, 0x1, 0x1, 0x1, 0x2]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x3, 0x7, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x2, 0x1, 0x5, 0x1, 0x1, 0x0]
            }, {
              'Col': [0x0, 0x3, 0x3, 0x0, 0x0, 0x5, 0x5]
            }, {
              'Col': [0x4, 0x1, 0x1, 0x6, 0x4, 0x3, 0x3]
            }, {
              'Col': [0x5, 0x2, 0x2, 0x1, 0x1, 0x4, 0x4]
            }, {
              'Col': [0x5, 0x3, 0x2, 0x2, 0x1, 0x5, 0x5]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x4, 0x4, 0x2, 0x2]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x1, 0x2, 0x2, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 4.8,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x5,
              'Win': 0x2,
              'Mult': 0x8,
              'PosVec': [0x1, 0x2, 0x9, 0xa, 0xb]
            }, {
              'Symbol': 0x1,
              'Count': 0x6,
              'Win': 2.8,
              'Mult': 0xe,
              'PosVec': [0x3, 0x4, 0xb, 0x12, 0x13, 0x5]
            }],
            'FillSymbols': [{
              'Col': [0x4, 0x4, 0x2, 0x3, 0x3]
            }, {
              'Col': [0x5, 0x5, 0x3]
            }, {
              'Col': [0x5, 0x5]
            }, {}, {}, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x2, 0x4, 0x4, 0x2, 0x3, 0x3]
            }, {
              'Col': [0x1, 0x1, 0x0, 0x0, 0x5, 0x5, 0x3]
            }, {
              'Col': [0x2, 0x2, 0x1, 0x5, 0x0, 0x5, 0x5]
            }, {
              'Col': [0x0, 0x3, 0x3, 0x0, 0x0, 0x5, 0x5]
            }, {
              'Col': [0x4, 0x1, 0x1, 0x6, 0x4, 0x3, 0x3]
            }, {
              'Col': [0x5, 0x2, 0x2, 0x1, 0x1, 0x4, 0x4]
            }, {
              'Col': [0x5, 0x3, 0x2, 0x2, 0x1, 0x5, 0x5]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x2, 0x2, 0x4, 0x4, 0x4, 0x2]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x8, 0x8, 0x2, 0x2]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x1, 0x4, 0x4, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 10.5,
            'AwardDataVec': [{
              'Symbol': 0x5,
              'Count': 0x6,
              'Win': 10.5,
              'Mult': 0xe,
              'PosVec': [0xb, 0xc, 0x13, 0x1a, 0x1b, 0x14]
            }],
            'FillSymbols': [{}, {
              'Col': [0x5, 0x5]
            }, {
              'Col': [0x2, 0x5]
            }, {
              'Col': [0x4, 0x4]
            }, {}, {}, {}],
            'WildPos': 0x11
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x2, 0x4, 0x4, 0x2, 0x3, 0x3]
            }, {
              'Col': [0x1, 0x1, 0x0, 0x0, 0x3, 0x5, 0x5]
            }, {
              'Col': [0x2, 0x2, 0x1, 0x7, 0x0, 0x2, 0x5]
            }, {
              'Col': [0x0, 0x3, 0x3, 0x0, 0x0, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x1, 0x1, 0x6, 0x4, 0x3, 0x3]
            }, {
              'Col': [0x5, 0x2, 0x2, 0x1, 0x1, 0x4, 0x4]
            }, {
              'Col': [0x5, 0x3, 0x2, 0x2, 0x1, 0x5, 0x5]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x2, 0x2, 0x4, 0x4, 0x4, 0x2]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x8, 0x10, 0x4, 0x2]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x1, 0x4, 0x8, 0x2]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 2.1,
            'AwardDataVec': [{
              'Count': 0x6,
              'Win': 2.1,
              'Mult': 0xe,
              'PosVec': [0x9, 0xa, 0x11, 0x18, 0x19, 0x12]
            }],
            'FillSymbols': [{}, {
              'Col': [0x3, 0x3]
            }, {
              'Col': [0x6, 0x3]
            }, {
              'Col': [0x0, 0x3]
            }, {}, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x2, 0x4, 0x4, 0x2, 0x3, 0x3]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x5, 0x5, 0x3, 0x3]
            }, {
              'Col': [0x2, 0x2, 0x1, 0x2, 0x5, 0x6, 0x3]
            }, {
              'Col': [0x0, 0x3, 0x3, 0x4, 0x4, 0x0, 0x3]
            }, {
              'Col': [0x4, 0x1, 0x1, 0x6, 0x4, 0x3, 0x3]
            }, {
              'Col': [0x5, 0x2, 0x2, 0x1, 0x1, 0x4, 0x4]
            }, {
              'Col': [0x5, 0x3, 0x2, 0x2, 0x1, 0x5, 0x5]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x2, 0x2, 0x4, 0x4, 0x4, 0x2]
            }, {
              'Col': [0x1, 0x1, 0x4, 0x10, 0x10, 0x4, 0x2]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x2, 0x8, 0x8, 0x2]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 10.5,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x8,
              'Win': 10.5,
              'Mult': 0xe,
              'PosVec': [0x5, 0xc, 0xd, 0x6, 0x14, 0x1b, 0x22, 0x21]
            }],
            'FillSymbols': [{
              'Col': [0x1, 0x1]
            }, {
              'Col': [0x0, 0x5]
            }, {
              'Col': [0x5]
            }, {
              'Col': [0x5]
            }, {
              'Col': [0x6, 0x5]
            }, {}, {}],
            'WildPos': 0x13
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x2, 0x4, 0x4, 0x2, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x5, 0x5, 0x0, 0x5]
            }, {
              'Col': [0x2, 0x2, 0x1, 0x2, 0x5, 0x7, 0x5]
            }, {
              'Col': [0x0, 0x3, 0x3, 0x4, 0x4, 0x0, 0x5]
            }, {
              'Col': [0x4, 0x1, 0x1, 0x6, 0x4, 0x6, 0x5]
            }, {
              'Col': [0x5, 0x2, 0x2, 0x1, 0x1, 0x4, 0x4]
            }, {
              'Col': [0x5, 0x3, 0x2, 0x2, 0x1, 0x5, 0x5]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x2, 0x2, 0x4, 0x4, 0x8, 0x4]
            }, {
              'Col': [0x1, 0x1, 0x4, 0x10, 0x10, 0x8, 0x4]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x2, 0x8, 0x8, 0x4]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x2]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 72.5,
            'AwardDataVec': [{
              'Symbol': 0x5,
              'Count': 0x8,
              'Win': 72.5,
              'Mult': 0x3a,
              'PosVec': [0xa, 0xb, 0x12, 0x13, 0x14, 0xd, 0x1b, 0x22]
            }],
            'FillSymbols': [{}, {
              'Col': [0x6, 0x3, 0x4]
            }, {
              'Col': [0x0, 0x1, 0x1]
            }, {
              'Col': [0x3]
            }, {
              'Col': [0x5]
            }, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x2, 0x4, 0x4, 0x2, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x0, 0x6, 0x3, 0x4]
            }, {
              'Col': [0x2, 0x2, 0x1, 0x2, 0x0, 0x1, 0x1]
            }, {
              'Col': [0x0, 0x3, 0x3, 0x4, 0x4, 0x0, 0x3]
            }, {
              'Col': [0x4, 0x1, 0x1, 0x6, 0x4, 0x6, 0x5]
            }, {
              'Col': [0x5, 0x2, 0x2, 0x1, 0x1, 0x4, 0x4]
            }, {
              'Col': [0x5, 0x3, 0x2, 0x2, 0x1, 0x5, 0x5]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x2, 0x2, 0x4, 0x4, 0x8, 0x4]
            }, {
              'Col': [0x1, 0x1, 0x4, 0x20, 0x20, 0x8, 0x8]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x2, 0x10, 0x10, 0x8]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x4]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x2]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'RoundWin': 151.3,
          'AwardTypeFlag': 0x1
        }],
        'TotalWin': 151.3,
        'ShowIndex': '',
        'NowMoney': null
      };
      _0x4dd5f3.FG = {
        'RoundQueue': [{
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x6, 0x1, 0x1, 0x6, 0x3, 0x3, 0x5]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x2, 0x5, 0x5]
            }, {
              'Col': [0x3, 0x3, 0x4, 0x0, 0x0, 0x6, 0x0]
            }, {
              'Col': [0x0, 0x4, 0x2, 0x9, 0x5, 0x2, 0x2]
            }, {
              'Col': [0x1, 0x2, 0x2, 0x1, 0x4, 0x4, 0x1]
            }, {
              'Col': [0x3, 0x3, 0x0, 0x0, 0x5, 0x4, 0x4]
            }, {
              'Col': [0x5, 0x5, 0x3, 0x9, 0x3, 0x9, 0x1]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'AwardTypeFlag': 0x2,
          'FreeRemainRound': 0xa,
          'AddRound': 0xa
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x0, 0x3, 0x3, 0x2, 0x4, 0x6, 0x6]
            }, {
              'Col': [0x2, 0x2, 0x5, 0x5, 0x3, 0x3, 0x5]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x3, 0x3, 0x2]
            }, {
              'Col': [0x4, 0x0, 0x0, 0x2, 0x2, 0x2, 0x3]
            }, {
              'Col': [0x4, 0x4, 0x0, 0x2, 0x3, 0x3, 0x2]
            }, {
              'Col': [0x0, 0x5, 0x1, 0x5, 0x5, 0x1, 0x1]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x6, 0x6, 0x2, 0x2]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0.35,
            'AwardDataVec': [{
              'Count': 0x5,
              'Win': 0.1,
              'Mult': 0x1,
              'PosVec': [0xe, 0xf, 0x16, 0x17, 0x1e]
            }, {
              'Symbol': 0x2,
              'Count': 0x6,
              'Win': 0.25,
              'Mult': 0x1,
              'PosVec': [0x10, 0x11, 0x18, 0x1f, 0x19, 0x1a]
            }],
            'FillSymbols': [{}, {}, {
              'Col': [0x3, 0x5, 0x5, 0x2]
            }, {
              'Col': [0x4, 0x3, 0x3, 0x0, 0x0]
            }, {
              'Col': [0x3, 0x3]
            }, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x3, 0x3, 0x2, 0x4, 0x6, 0x6]
            }, {
              'Col': [0x2, 0x2, 0x5, 0x5, 0x3, 0x3, 0x5]
            }, {
              'Col': [0x3, 0x3, 0x2, 0x3, 0x5, 0x5, 0x2]
            }, {
              'Col': [0x4, 0x3, 0x4, 0x3, 0x3, 0x0, 0x0]
            }, {
              'Col': [0x4, 0x4, 0x3, 0x3, 0x2, 0x3, 0x3]
            }, {
              'Col': [0x0, 0x5, 0x1, 0x5, 0x5, 0x1, 0x1]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x6, 0x6, 0x2, 0x2]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0.25,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x5,
              'Win': 0.25,
              'Mult': 0x1,
              'PosVec': [0x11, 0x18, 0x1f, 0x1e, 0x19]
            }],
            'FillSymbols': [{}, {}, {
              'Col': [0x2]
            }, {
              'Col': [0x4, 0x4]
            }, {
              'Col': [0x3, 0x1]
            }, {}, {}],
            'WildPos': 0x19
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x3, 0x3, 0x2, 0x4, 0x6, 0x6]
            }, {
              'Col': [0x2, 0x2, 0x5, 0x5, 0x3, 0x3, 0x5]
            }, {
              'Col': [0x3, 0x3, 0x2, 0x5, 0x5, 0x2, 0x2]
            }, {
              'Col': [0x4, 0x3, 0x4, 0x0, 0x7, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x4, 0x2, 0x3, 0x3, 0x3, 0x1]
            }, {
              'Col': [0x0, 0x5, 0x1, 0x5, 0x5, 0x1, 0x1]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x6, 0x6, 0x2, 0x2]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x1, 0x1, 0x2, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0x2,
            'AwardDataVec': [{
              'Symbol': 0x5,
              'Count': 0x5,
              'Win': 0x2,
              'Mult': 0x4,
              'PosVec': [0x9, 0xa, 0x11, 0x12, 0x19]
            }],
            'FillSymbols': [{}, {
              'Col': [0x1, 0x1]
            }, {
              'Col': [0x4, 0x4]
            }, {
              'Col': [0x4]
            }, {}, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x3, 0x3, 0x2, 0x4, 0x6, 0x6]
            }, {
              'Col': [0x2, 0x2, 0x3, 0x3, 0x5, 0x1, 0x1]
            }, {
              'Col': [0x3, 0x3, 0x2, 0x2, 0x2, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x3, 0x4, 0x0, 0x4, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x4, 0x2, 0x3, 0x3, 0x3, 0x1]
            }, {
              'Col': [0x0, 0x5, 0x1, 0x5, 0x5, 0x1, 0x1]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x6, 0x6, 0x2, 0x2]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x4, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x1, 0x1, 0x2, 0x4, 0x1, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 1.2,
            'AwardDataVec': [{
              'Symbol': 0x4,
              'Count': 0x5,
              'Win': 1.2,
              'Mult': 0x4,
              'PosVec': [0x13, 0x1a, 0x19, 0x1b, 0x14]
            }],
            'FillSymbols': [{}, {}, {
              'Col': [0x4, 0x4]
            }, {
              'Col': [0x2, 0x2, 0x0]
            }, {}, {}, {}],
            'WildPos': 0x18
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x3, 0x3, 0x2, 0x4, 0x6, 0x6]
            }, {
              'Col': [0x2, 0x2, 0x3, 0x3, 0x5, 0x1, 0x1]
            }, {
              'Col': [0x3, 0x3, 0x2, 0x2, 0x2, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x3, 0x4, 0x7, 0x2, 0x2, 0x0]
            }, {
              'Col': [0x4, 0x4, 0x2, 0x3, 0x3, 0x3, 0x1]
            }, {
              'Col': [0x0, 0x5, 0x1, 0x5, 0x5, 0x1, 0x1]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x6, 0x6, 0x2, 0x2]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x4, 0x1, 0x1, 0x1]
            }, {
              'Col': [0x0, 0x1, 0x1, 0x2, 0x8, 0x2, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0x4,
            'AwardDataVec': [{
              'Symbol': 0x2,
              'Count': 0x6,
              'Win': 0x4,
              'Mult': 0x10,
              'PosVec': [0x10, 0x11, 0x18, 0x19, 0x12, 0x1a]
            }],
            'FillSymbols': [{}, {}, {
              'Col': [0x3, 0x5, 0x4]
            }, {
              'Col': [0x6, 0x6, 0x4]
            }, {}, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x0, 0x3, 0x3, 0x2, 0x4, 0x6, 0x6]
            }, {
              'Col': [0x2, 0x2, 0x3, 0x3, 0x5, 0x1, 0x1]
            }, {
              'Col': [0x3, 0x3, 0x4, 0x4, 0x3, 0x5, 0x4]
            }, {
              'Col': [0x4, 0x3, 0x4, 0x0, 0x6, 0x6, 0x4]
            }, {
              'Col': [0x4, 0x4, 0x2, 0x3, 0x3, 0x3, 0x1]
            }, {
              'Col': [0x0, 0x5, 0x1, 0x5, 0x5, 0x1, 0x1]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x6, 0x6, 0x2, 0x2]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x8, 0x2, 0x1, 0x1]
            }, {
              'Col': [0x0, 0x1, 0x1, 0x4, 0x10, 0x4, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'RoundWin': 7.8,
          'AwardTypeFlag': 0x5,
          'FreeRemainRound': 0x9
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x1, 0x1, 0x5, 0x1, 0x1, 0x5, 0x5]
            }, {
              'Col': [0x5, 0x5, 0x3, 0x3, 0x5, 0x5, 0x3]
            }, {
              'Col': [0x3, 0x5, 0x3, 0x3, 0x1, 0x1, 0x3]
            }, {
              'Col': [0x3, 0x3, 0x1, 0x1, 0x3, 0x1, 0x1]
            }, {
              'Col': [0x3, 0x3, 0x0, 0x0, 0x2, 0x2, 0x0]
            }, {
              'Col': [0x3, 0x4, 0x4, 0x3, 0x3, 0x5, 0x5]
            }, {
              'Col': [0x0, 0x5, 0x5, 0x5, 0x4, 0x4, 0x0]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x8, 0x2, 0x1, 0x1]
            }, {
              'Col': [0x0, 0x1, 0x1, 0x4, 0x10, 0x4, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0.3,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x6,
              'Win': 0.3,
              'Mult': 0x1,
              'PosVec': [0xe, 0x15, 0x1c, 0x23, 0x1d, 0x16]
            }],
            'FillSymbols': [{}, {}, {
              'Col': [0x3]
            }, {
              'Col': [0x1, 0x5]
            }, {
              'Col': [0x4, 0x4]
            }, {
              'Col': [0x1]
            }, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x1, 0x1, 0x5, 0x1, 0x1, 0x5, 0x5]
            }, {
              'Col': [0x5, 0x5, 0x3, 0x3, 0x5, 0x5, 0x3]
            }, {
              'Col': [0x5, 0x3, 0x3, 0x1, 0x1, 0x3, 0x3]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x1, 0x1, 0x1, 0x5]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x4, 0x3, 0x3, 0x5, 0x5, 0x1]
            }, {
              'Col': [0x0, 0x5, 0x5, 0x5, 0x4, 0x4, 0x0]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x1, 0x2, 0x8, 0x2, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x2, 0x1, 0x4, 0x10, 0x4, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 5.6,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x5,
              'Win': 0.5,
              'Mult': 0x2,
              'PosVec': [0x9, 0x10, 0xf, 0x17, 0xa]
            }, {
              'Symbol': 0x1,
              'Count': 0x5,
              'Win': 5.1,
              'Mult': 0x22,
              'PosVec': [0x11, 0x18, 0x19, 0x12, 0x1a]
            }],
            'FillSymbols': [{}, {
              'Col': [0x3, 0x2]
            }, {
              'Col': [0x5, 0x1, 0x3, 0x3]
            }, {
              'Col': [0x5, 0x5, 0x1, 0x1]
            }, {}, {}, {}],
            'WildPos': 0x16
          }, {
            'ComboStageSymbol': [{
              'Col': [0x1, 0x1, 0x5, 0x1, 0x1, 0x5, 0x5]
            }, {
              'Col': [0x5, 0x5, 0x5, 0x5, 0x3, 0x3, 0x2]
            }, {
              'Col': [0x5, 0x3, 0x3, 0x5, 0x1, 0x3, 0x3]
            }, {
              'Col': [0x1, 0x7, 0x5, 0x5, 0x5, 0x1, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x4, 0x3, 0x3, 0x5, 0x5, 0x1]
            }, {
              'Col': [0x0, 0x5, 0x5, 0x5, 0x4, 0x4, 0x0]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x2, 0x4, 0x10, 0x4, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x2, 0x2, 0x8, 0x20, 0x8, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0xa5,
            'AwardDataVec': [{
              'Symbol': 0x5,
              'Count': 0xb,
              'Win': 0xa5,
              'Mult': 0x42,
              'PosVec': [0x2, 0x9, 0x8, 0x7, 0xe, 0xa, 0x11, 0x18, 0x17, 0x16, 0x19]
            }],
            'FillSymbols': [{
              'Col': [0x2]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2]
            }, {
              'Col': [0x1, 0x1]
            }, {
              'Col': [0x3, 0x3, 0x2, 0x5]
            }, {}, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x1, 0x1, 0x1, 0x1, 0x5, 0x5, 0x2]
            }, {
              'Col': [0x3, 0x3, 0x2, 0x1, 0x1, 0x2, 0x2]
            }, {
              'Col': [0x3, 0x3, 0x1, 0x3, 0x3, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x3, 0x3, 0x2, 0x5]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x4, 0x3, 0x3, 0x5, 0x5, 0x1]
            }, {
              'Col': [0x0, 0x5, 0x5, 0x5, 0x4, 0x4, 0x0]
            }],
            'ComboStageMult': [{
              'Col': [0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x4, 0x4, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x4, 0x20, 0x4, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x4, 0x4, 0x10, 0x40, 0x8, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0.8,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x6,
              'Win': 0.8,
              'Mult': 0x4,
              'PosVec': [0x0, 0x1, 0x2, 0x3, 0xa, 0xb]
            }],
            'FillSymbols': [{
              'Col': [0x2, 0x3, 0x3, 0x1]
            }, {
              'Col': [0x4, 0x5]
            }, {}, {}, {}, {}, {}],
            'WildPos': 0x1a
          }, {
            'ComboStageSymbol': [{
              'Col': [0x5, 0x5, 0x2, 0x2, 0x3, 0x3, 0x1]
            }, {
              'Col': [0x3, 0x3, 0x2, 0x2, 0x2, 0x4, 0x5]
            }, {
              'Col': [0x3, 0x3, 0x1, 0x3, 0x3, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x3, 0x3, 0x7, 0x5]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x4, 0x3, 0x3, 0x5, 0x5, 0x1]
            }, {
              'Col': [0x0, 0x5, 0x5, 0x5, 0x4, 0x4, 0x0]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x2, 0x1, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x4, 0x8, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x4, 0x20, 0x4, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x4, 0x4, 0x10, 0x40, 0x8, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 33.8,
            'AwardDataVec': [{
              'Symbol': 0x2,
              'Count': 0x5,
              'Win': 2.8,
              'Mult': 0xe,
              'PosVec': [0x2, 0x9, 0xa, 0x3, 0xb]
            }, {
              'Symbol': 0x3,
              'Count': 0x5,
              'Win': 0x1f,
              'Mult': 0x7c,
              'PosVec': [0x11, 0x18, 0x19, 0x12, 0x1a]
            }],
            'FillSymbols': [{
              'Col': [0x4, 0x2]
            }, {
              'Col': [0x2, 0x4, 0x3]
            }, {
              'Col': [0x4, 0x5]
            }, {
              'Col': [0x6, 0x5, 0x1]
            }, {}, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x5, 0x5, 0x3, 0x3, 0x1, 0x4, 0x2]
            }, {
              'Col': [0x3, 0x3, 0x4, 0x5, 0x2, 0x4, 0x3]
            }, {
              'Col': [0x3, 0x3, 0x1, 0x1, 0x1, 0x4, 0x5]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x5, 0x6, 0x5, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x4, 0x3, 0x3, 0x5, 0x5, 0x1]
            }, {
              'Col': [0x0, 0x5, 0x5, 0x5, 0x4, 0x4, 0x0]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x0, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x4, 0x40, 0x8, 0x1, 0x1]
            }, {
              'Col': [0x1, 0x4, 0x4, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 16.8,
            'AwardDataVec': [{
              'Symbol': 0x1,
              'Count': 0x6,
              'Win': 16.8,
              'Mult': 0x54,
              'PosVec': [0x10, 0x17, 0x16, 0x15, 0x11, 0x12]
            }],
            'FillSymbols': [{}, {}, {
              'Col': [0x4, 0x4, 0x1]
            }, {
              'Col': [0x6, 0x6, 0x2]
            }, {}, {}, {}],
            'WildPos': 0x19
          }, {
            'ComboStageSymbol': [{
              'Col': [0x5, 0x5, 0x3, 0x3, 0x1, 0x4, 0x2]
            }, {
              'Col': [0x3, 0x3, 0x4, 0x5, 0x2, 0x4, 0x3]
            }, {
              'Col': [0x3, 0x3, 0x4, 0x5, 0x4, 0x4, 0x1]
            }, {
              'Col': [0x5, 0x6, 0x5, 0x1, 0x7, 0x6, 0x2]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x4, 0x3, 0x3, 0x5, 0x5, 0x1]
            }, {
              'Col': [0x0, 0x5, 0x5, 0x5, 0x4, 0x4, 0x0]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x0, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x8, 0x80, 0x10, 0x1, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x8, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 43.2,
            'AwardDataVec': [{
              'Symbol': 0x4,
              'Count': 0x5,
              'Win': 43.2,
              'Mult': 0x90,
              'PosVec': [0x5, 0xc, 0x13, 0x12, 0x19]
            }],
            'FillSymbols': [{
              'Col': [0x1]
            }, {
              'Col': [0x2]
            }, {
              'Col': [0x6, 0x6]
            }, {
              'Col': [0x3]
            }, {}, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x5, 0x5, 0x3, 0x3, 0x1, 0x2, 0x1]
            }, {
              'Col': [0x3, 0x3, 0x4, 0x5, 0x2, 0x3, 0x2]
            }, {
              'Col': [0x3, 0x3, 0x4, 0x5, 0x1, 0x6, 0x6]
            }, {
              'Col': [0x5, 0x6, 0x5, 0x1, 0x6, 0x2, 0x3]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x2, 0x0, 0x4, 0x4]
            }, {
              'Col': [0x4, 0x4, 0x3, 0x3, 0x5, 0x5, 0x1]
            }, {
              'Col': [0x0, 0x5, 0x5, 0x5, 0x4, 0x4, 0x0]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x8, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x8, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'RoundWin': 265.5,
          'AwardTypeFlag': 0x5,
          'FreeRemainRound': 0x8
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x2, 0x2, 0x0, 0x2, 0x2, 0x0, 0x0]
            }, {
              'Col': [0x6, 0x5, 0x5, 0x3, 0x3, 0x1, 0x1]
            }, {
              'Col': [0x6, 0x6, 0x2, 0x6, 0x6, 0x2, 0x2]
            }, {
              'Col': [0x5, 0x1, 0x1, 0x5, 0x1, 0x6, 0x6]
            }, {
              'Col': [0x5, 0x5, 0x3, 0x3, 0x1, 0x5, 0x5]
            }, {
              'Col': [0x3, 0x3, 0x1, 0x1, 0x3, 0x5, 0x5]
            }, {
              'Col': [0x1, 0x3, 0x3, 0x1, 0x1, 0x3, 0x1]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x8, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x8, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'AwardTypeFlag': 0x4,
          'FreeRemainRound': 0x7
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x6, 0x6, 0x1, 0x3, 0x1, 0x1, 0x0]
            }, {
              'Col': [0x5, 0x5, 0x1, 0x5, 0x5, 0x1, 0x1]
            }, {
              'Col': [0x3, 0x5, 0x5, 0x1, 0x1, 0x3, 0x3]
            }, {
              'Col': [0x2, 0x2, 0x6, 0x6, 0x9, 0x1, 0x0]
            }, {
              'Col': [0x3, 0x1, 0x3, 0x3, 0x5, 0x5, 0x3]
            }, {
              'Col': [0x3, 0x3, 0x0, 0x0, 0x2, 0x2, 0x9]
            }, {
              'Col': [0x5, 0x1, 0x1, 0x5, 0x5, 0x1, 0x5]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x8, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x8, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'AwardTypeFlag': 0x4,
          'FreeRemainRound': 0x6
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x3, 0x3, 0x1, 0x2, 0x5, 0x5, 0x3]
            }, {
              'Col': [0x6, 0x9, 0x6, 0x2, 0x2, 0x6, 0x6]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x3, 0x1, 0x4, 0x5]
            }, {
              'Col': [0x0, 0x0, 0x4, 0x4, 0x3, 0x3, 0x4]
            }, {
              'Col': [0x0, 0x0, 0x6, 0x6, 0x0, 0x0, 0x6]
            }, {
              'Col': [0x2, 0x2, 0x2, 0x2, 0x2, 0x4, 0x4]
            }, {
              'Col': [0x6, 0x6, 0x1, 0x1, 0x9, 0x1, 0x1]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x8, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x8, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0.2,
            'AwardDataVec': [{
              'Symbol': 0x2,
              'Count': 0x5,
              'Win': 0.2,
              'Mult': 0x1,
              'PosVec': [0x23, 0x24, 0x25, 0x26, 0x27]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {
              'Col': [0x6, 0x4, 0x4, 0x5, 0x0]
            }, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x3, 0x3, 0x1, 0x2, 0x5, 0x5, 0x3]
            }, {
              'Col': [0x6, 0x9, 0x6, 0x2, 0x2, 0x6, 0x6]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x3, 0x1, 0x4, 0x5]
            }, {
              'Col': [0x0, 0x0, 0x4, 0x4, 0x3, 0x3, 0x4]
            }, {
              'Col': [0x0, 0x0, 0x6, 0x6, 0x0, 0x0, 0x6]
            }, {
              'Col': [0x4, 0x4, 0x6, 0x4, 0x4, 0x5, 0x0]
            }, {
              'Col': [0x6, 0x6, 0x1, 0x1, 0x9, 0x1, 0x1]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x8, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x8, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'RoundWin': 0.2,
          'AwardTypeFlag': 0x5,
          'FreeRemainRound': 0x5
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x3, 0x0, 0x0, 0x2, 0x2, 0x0, 0x2]
            }, {
              'Col': [0x3, 0x3, 0x5, 0x5, 0x1, 0x1, 0x0]
            }, {
              'Col': [0x5, 0x5, 0x1, 0x5, 0x1, 0x6, 0x6]
            }, {
              'Col': [0x1, 0x1, 0x3, 0x4, 0x3, 0x3, 0x5]
            }, {
              'Col': [0x0, 0x4, 0x4, 0x0, 0x4, 0x4, 0x0]
            }, {
              'Col': [0x3, 0x3, 0x1, 0x1, 0x9, 0x5, 0x5]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x0, 0x2, 0x2, 0x0]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x8, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x8, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'AwardTypeFlag': 0x4,
          'FreeRemainRound': 0x4
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x4, 0x4, 0x9, 0x5, 0x5, 0x6, 0x6]
            }, {
              'Col': [0x5, 0x5, 0x3, 0x5, 0x5, 0x3, 0x3]
            }, {
              'Col': [0x4, 0x4, 0x6, 0x2, 0x2, 0x6, 0x2]
            }, {
              'Col': [0x5, 0x5, 0x1, 0x0, 0x0, 0x5, 0x5]
            }, {
              'Col': [0x3, 0x3, 0x5, 0x5, 0x9, 0x3, 0x3]
            }, {
              'Col': [0x5, 0x5, 0x1, 0x1, 0x5, 0x5, 0x1]
            }, {
              'Col': [0x4, 0x4, 0x6, 0x6, 0x2, 0x2, 0x6]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x8, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x8, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'AwardTypeFlag': 0x4,
          'FreeRemainRound': 0x3
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x3, 0x3, 0x1, 0x1, 0x5, 0x3, 0x1]
            }, {
              'Col': [0x5, 0x6, 0x6, 0x2, 0x4, 0x3, 0x4]
            }, {
              'Col': [0x3, 0x5, 0x3, 0x3, 0x1, 0x3, 0x5]
            }, {
              'Col': [0x0, 0x0, 0x2, 0x0, 0x4, 0x4, 0x3]
            }, {
              'Col': [0x3, 0x1, 0x1, 0x3, 0x5, 0x5, 0x3]
            }, {
              'Col': [0x4, 0x0, 0x5, 0x5, 0x6, 0x6, 0x0]
            }, {
              'Col': [0x5, 0x1, 0x0, 0x0, 0x5, 0x1, 0x1]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x8, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x8, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'AwardTypeFlag': 0x4,
          'FreeRemainRound': 0x2
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x9, 0x4, 0x4, 0x2, 0x2, 0x2, 0x2]
            }, {
              'Col': [0x3, 0x3, 0x5, 0x5, 0x3, 0x3, 0x5]
            }, {
              'Col': [0x0, 0x6, 0x5, 0x5, 0x6, 0x2, 0x2]
            }, {
              'Col': [0x5, 0x5, 0x0, 0x3, 0x5, 0x3, 0x3]
            }, {
              'Col': [0x3, 0x3, 0x5, 0x5, 0x3, 0x3, 0x4]
            }, {
              'Col': [0x1, 0x1, 0x6, 0x6, 0x1, 0x1, 0x3]
            }, {
              'Col': [0x4, 0x4, 0x3, 0x3, 0x0, 0x0, 0x9]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x8, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x8, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'AwardTypeFlag': 0x4,
          'FreeRemainRound': 0x1
        }, {
          'ComboStageData': [{
            'ComboStageSymbol': [{
              'Col': [0x6, 0x6, 0x2, 0x2, 0x6, 0x6, 0x2]
            }, {
              'Col': [0x6, 0x0, 0x0, 0x6, 0x0, 0x0, 0x6]
            }, {
              'Col': [0x2, 0x2, 0x0, 0x0, 0x4, 0x4, 0x0]
            }, {
              'Col': [0x6, 0x0, 0x0, 0x6, 0x5, 0x5, 0x6]
            }, {
              'Col': [0x1, 0x1, 0x5, 0x5, 0x5, 0x1, 0x2]
            }, {
              'Col': [0x5, 0x5, 0x6, 0x2, 0x4, 0x3, 0x3]
            }, {
              'Col': [0x9, 0x2, 0x3, 0x5, 0x5, 0x3, 0x3]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x1, 0x8, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x8, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x8, 0x8, 0x20, 0x80, 0x10, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x2, 0x2, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0x62,
            'AwardDataVec': [{
              'Count': 0x6,
              'Win': 0x18,
              'Mult': 0xa0,
              'PosVec': [0x8, 0x9, 0x10, 0x17, 0x16, 0x11]
            }, {
              'Symbol': 0x5,
              'Count': 0x5,
              'Win': 0x4a,
              'Mult': 0x94,
              'PosVec': [0x19, 0x20, 0x1f, 0x1e, 0x1a]
            }],
            'FillSymbols': [{}, {
              'Col': [0x6, 0x4]
            }, {
              'Col': [0x0, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x0, 0x4]
            }, {
              'Col': [0x2, 0x1, 0x3]
            }, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x6, 0x6, 0x2, 0x2, 0x6, 0x6, 0x2]
            }, {
              'Col': [0x6, 0x6, 0x0, 0x0, 0x6, 0x6, 0x4]
            }, {
              'Col': [0x2, 0x2, 0x4, 0x4, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x6, 0x6, 0x6, 0x4, 0x2, 0x0, 0x4]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x2, 0x2, 0x1, 0x3]
            }, {
              'Col': [0x5, 0x5, 0x6, 0x2, 0x4, 0x3, 0x3]
            }, {
              'Col': [0x9, 0x2, 0x3, 0x5, 0x5, 0x3, 0x3]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x2, 0x10, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x10, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x10, 0x10, 0x20, 0x80, 0x20, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x4, 0x4, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]
            }],
            'ComboStageWin': 0.25,
            'AwardDataVec': [{
              'Symbol': 0x3,
              'Count': 0x5,
              'Win': 0.25,
              'Mult': 0x1,
              'PosVec': [0x22, 0x29, 0x28, 0x2f, 0x30]
            }],
            'FillSymbols': [{}, {}, {}, {}, {
              'Col': [0x5]
            }, {
              'Col': [0x0, 0x0]
            }, {
              'Col': [0x3, 0x1]
            }],
            'WildPos': 0x2
          }, {
            'ComboStageSymbol': [{
              'Col': [0x6, 0x6, 0x7, 0x2, 0x6, 0x6, 0x2]
            }, {
              'Col': [0x6, 0x6, 0x0, 0x0, 0x6, 0x6, 0x4]
            }, {
              'Col': [0x2, 0x2, 0x4, 0x4, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x6, 0x6, 0x6, 0x4, 0x2, 0x0, 0x4]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x2, 0x2, 0x1, 0x5]
            }, {
              'Col': [0x5, 0x5, 0x6, 0x2, 0x4, 0x0, 0x0]
            }, {
              'Col': [0x9, 0x2, 0x3, 0x5, 0x5, 0x3, 0x1]
            }],
            'ComboStageMult': [{
              'Col': [0x1, 0x1, 0x4, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x1, 0x2, 0x10, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x10, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x10, 0x10, 0x20, 0x80, 0x20, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x4, 0x4, 0x1, 0x0, 0x1]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1]
            }],
            'ComboStageWin': 4.5,
            'AwardDataVec': [{
              'Symbol': 0x6,
              'Count': 0x5,
              'Win': 4.5,
              'Mult': 0x6,
              'PosVec': [0x0, 0x7, 0x8, 0x1, 0x2]
            }],
            'FillSymbols': [{
              'Col': [0x4, 0x0, 0x6]
            }, {
              'Col': [0x4, 0x4]
            }, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }, {
            'ComboStageSymbol': [{
              'Col': [0x2, 0x6, 0x6, 0x2, 0x4, 0x0, 0x6]
            }, {
              'Col': [0x0, 0x0, 0x6, 0x6, 0x4, 0x4, 0x4]
            }, {
              'Col': [0x2, 0x2, 0x4, 0x4, 0x0, 0x0, 0x0]
            }, {
              'Col': [0x6, 0x6, 0x6, 0x4, 0x2, 0x0, 0x4]
            }, {
              'Col': [0x1, 0x1, 0x1, 0x2, 0x2, 0x1, 0x5]
            }, {
              'Col': [0x5, 0x5, 0x6, 0x2, 0x4, 0x0, 0x0]
            }, {
              'Col': [0x9, 0x2, 0x3, 0x5, 0x5, 0x3, 0x1]
            }],
            'ComboStageMult': [{
              'Col': [0x2, 0x2, 0x8, 0x2, 0x0, 0x1, 0x0]
            }, {
              'Col': [0x2, 0x4, 0x10, 0x10, 0x2, 0x1, 0x0]
            }, {
              'Col': [0x4, 0x2, 0x10, 0x80, 0x20, 0x2, 0x1]
            }, {
              'Col': [0x2, 0x10, 0x10, 0x20, 0x80, 0x20, 0x1]
            }, {
              'Col': [0x1, 0x1, 0x4, 0x4, 0x1, 0x0, 0x1]
            }, {
              'Col': [0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]
            }, {
              'Col': [0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1]
            }],
            'FillSymbols': [{}, {}, {}, {}, {}, {}, {}],
            'WildPos': -0x1
          }],
          'RoundWin': 102.75,
          'AwardTypeFlag': 0xd
        }],
        'FreeTotalWin': 376.25,
        'TotalWin': 376.25,
        'ShowIndex': '',
        'NowMoney': null
      };
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, '88c89MBBVNFzK5pKn0ytxWU', "BackGroundSpine", undefined);
      var _0x3dc595 = _0xd86e43.ccclass;
      var _0x4b5464 = _0xd86e43.property;
      _0x362f36 = _0x3dc595("BackGroundSpine");
      _0x54ef04 = _0x4b5464({
        'type': _0xff2ed7.Skeleton,
        'tooltip': 'Spine'
      });
      _0x2b03c4 = _0x4b5464({
        'type': Boolean,
        'tooltip': "是否為橫版"
      });
      _0x57e413 = function (_0x22d79c) {
        function _0x386446() {
          var _0xd34d61;
          var _0x206759 = arguments.length;
          var _0x1912fb = new Array(_0x206759);
          for (var _0x246ec1 = 0x0; _0x246ec1 < _0x206759; _0x246ec1++) {
            _0x1912fb[_0x246ec1] = arguments[_0x246ec1];
          }
          _0xd34d61 = _0x22d79c.call.apply(_0x22d79c, [this].concat(_0x1912fb)) || this;
          _0x45956f(_0xd34d61, "m_spine", _0x3b7b68, _0x28ffcf(_0xd34d61));
          _0x45956f(_0xd34d61, "m_isLandscape", _0x29dab7, _0x28ffcf(_0xd34d61));
          return _0xd34d61;
        }
        _0x48aeaf(_0x386446, _0x22d79c);
        var _0x382478 = _0x386446.prototype;
        _0x382478.ShowGameIntro = function () {
          var _0x4059ba = _0x44f921(_0xa0d93().mark(function _0x123414() {
            var _0xae4fbb;
            return _0xa0d93().wrap(function (_0x1f67dd) {
              for (;;) {
                switch (_0x1f67dd.prev = _0x1f67dd.next) {
                  case 0x0:
                    _0xae4fbb = this.m_isLandscape ? '_L' : '_S';
                    _0x1f67dd.next = 0x3;
                    return this.PlayAnimation("GameIntro" + _0xae4fbb);
                  case 0x3:
                    this.PlayAnimation("Loop" + _0xae4fbb);
                  case 0x4:
                  case "end":
                    return _0x1f67dd.stop();
                }
              }
            }, _0x123414, this);
          }));
          return function () {
            return _0x4059ba.apply(this, arguments);
          };
        }();
        _0x382478.PlayAnimation = function (_0x41d9e4, _0x17f568) {
          var _0x5017f6 = this;
          if (undefined === _0x17f568) {
            _0x17f568 = false;
          }
          return new Promise(function (_0x2d33ff) {
            _0x5017f6.m_spine.clearTrack(0x0);
            _0x5017f6.m_spine.setToSetupPose();
            var _0x176573 = _0x5017f6.m_spine.setAnimation(0x0, _0x41d9e4, _0x17f568);
            if (_0x176573) {
              _0x5017f6.m_spine.setTrackEventListener(_0x176573, function (_0xac2241, _0x103c9f) {});
              _0x5017f6.m_spine.setTrackCompleteListener(_0x176573, function () {
                _0x2d33ff(null);
              });
            } else {
              _0x5017f6.m_spine.setCompleteListener(function () {
                _0x2d33ff(null);
              });
            }
          });
        };
        return _0x386446;
      }(_0x10b9dd);
      _0x3b7b68 = _0x14eb5c(_0x57e413.prototype, "m_spine", [_0x54ef04], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x29dab7 = _0x14eb5c(_0x57e413.prototype, "m_isLandscape", [_0x2b03c4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return false;
        }
      });
      var _0x2b296a = _0x362f36(_0x7b5cdb = _0x57e413) || _0x7b5cdb;
      var _0x329db7;
      var _0x2cc9a2;
      var _0x28a14d;
      var _0x5dbcf1;
      var _0x5400f7;
      var _0x24be13;
      var _0xd6b8f0;
      var _0x49b4e;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "fa5a6TQtSVBsqDVs4nwE+z5", 'GameIntro', undefined);
      var _0x319819 = _0xd86e43.ccclass;
      var _0xa109b9 = _0xd86e43.property;
      _0x329db7 = _0x319819("GameIntro");
      _0x2cc9a2 = _0xa109b9({
        'type': _0x115ccf,
        'tooltip': '角色'
      });
      _0x28a14d = _0xa109b9({
        'type': _0x2b296a,
        'tooltip': '橫版背景'
      });
      _0x5dbcf1 = _0xa109b9({
        'type': _0x2b296a,
        'tooltip': "直版背景"
      });
      _0x5400f7 = function (_0x1c81ca) {
        function _0x5460ad() {
          var _0x4b80fd;
          var _0x44eb30 = arguments.length;
          var _0x50e722 = new Array(_0x44eb30);
          for (var _0xfab6ff = 0x0; _0xfab6ff < _0x44eb30; _0xfab6ff++) {
            _0x50e722[_0xfab6ff] = arguments[_0xfab6ff];
          }
          _0x4b80fd = _0x1c81ca.call.apply(_0x1c81ca, [this].concat(_0x50e722)) || this;
          _0x45956f(_0x4b80fd, "m_characterSpine", _0x24be13, _0x28ffcf(_0x4b80fd));
          _0x45956f(_0x4b80fd, "m_backgroundSpineL", _0xd6b8f0, _0x28ffcf(_0x4b80fd));
          _0x45956f(_0x4b80fd, "m_backgroundSpineS", _0x49b4e, _0x28ffcf(_0x4b80fd));
          return _0x4b80fd;
        }
        _0x48aeaf(_0x5460ad, _0x1c81ca);
        var _0x4e46d3 = _0x5460ad.prototype;
        _0x4e46d3.OnRotate = function (_0x39cb71) {
          this.m_backgroundSpineL.node.active = _0x39cb71;
          this.m_backgroundSpineS.node.active = !_0x39cb71;
        };
        _0x4e46d3.ShowGameIntro = function () {
          var _0x8d7a2d = _0x44f921(_0xa0d93().mark(function _0x5813af(_0x52d6d3) {
            return _0xa0d93().wrap(function (_0x9713bc) {
              for (;;) {
                switch (_0x9713bc.prev = _0x9713bc.next) {
                  case 0x0:
                    this.m_backgroundSpineL.ShowGameIntro();
                    this.m_backgroundSpineS.ShowGameIntro();
                    _0x9713bc.next = 0x4;
                    return this.m_characterSpine.ShowGameIntro(_0x52d6d3);
                  case 0x4:
                  case "end":
                    return _0x9713bc.stop();
                }
              }
            }, _0x5813af, this);
          }));
          return function (_0x5854e8) {
            return _0x8d7a2d.apply(this, arguments);
          };
        }();
        return _0x5460ad;
      }(_0x10b9dd);
      _0x24be13 = _0x14eb5c(_0x5400f7.prototype, "m_characterSpine", [_0x2cc9a2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xd6b8f0 = _0x14eb5c(_0x5400f7.prototype, "m_backgroundSpineL", [_0x28a14d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x49b4e = _0x14eb5c(_0x5400f7.prototype, "m_backgroundSpineS", [_0x5dbcf1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x4d2718;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, '148d4dx/SBFhYJp40CAhQbU', "AddFreeState", undefined);
      var _0x3d0666 = _0xd86e43.ccclass;
      _0x4d2718 = _0x3d0666("AddFreeState");
      _0xf429b1._RF.pop();
      var _0x44ba49 = function () {
        function _0x5e054e() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x4bd787 = _0x5e054e.prototype;
        _0x4bd787.define = function (_0x4b30ca, _0x56363b, _0x9e5e1e) {
          this._registry[_0x4b30ca] = {
            'factory': _0x56363b,
            'resolveMap': _0x9e5e1e
          };
        };
        _0x4bd787.require = function (_0xe868c2) {
          return this._require(_0xe868c2);
        };
        _0x4bd787.throwInvalidWrapper = function (_0x55719b, _0x17b31e) {
          throw new Error("Module '" + _0x55719b + "' imported from '" + _0x17b31e + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x4bd787._require = function (_0x51e8ae, _0x53c9c9) {
          var _0x11ffc6 = this._moduleCache[_0x51e8ae];
          if (_0x11ffc6) {
            return _0x11ffc6.exports;
          }
          var _0x345050 = {
            'id': _0x51e8ae,
            'exports': {}
          };
          this._moduleCache[_0x51e8ae] = _0x345050;
          this._tryModuleLoad(_0x345050, _0x51e8ae);
          return _0x345050.exports;
        };
        _0x4bd787._resolve = function (_0x5f25c4, _0x1c5413) {
          return this._resolveFromInfos(_0x5f25c4, _0x1c5413) || this._throwUnresolved(_0x5f25c4, _0x1c5413);
        };
        _0x4bd787._resolveFromInfos = function (_0x18ab44, _0x49a86f) {
          var _0x5a0c93;
          var _0x44c10c;
          return _0x18ab44 in cjsInfos ? _0x18ab44 : _0x49a86f && null != (_0x5a0c93 = null == (_0x44c10c = cjsInfos[_0x49a86f]) ? undefined : _0x44c10c.resolveCache[_0x18ab44]) ? _0x5a0c93 : undefined;
        };
        _0x4bd787._tryModuleLoad = function (_0x5b0346, _0x10edbd) {
          var _0x49ffbf = true;
          try {
            this._load(_0x5b0346, _0x10edbd);
            _0x49ffbf = false;
          } finally {
            if (_0x49ffbf) {
              delete this._moduleCache[_0x10edbd];
            }
          }
        };
        _0x4bd787._load = function (_0x322787, _0x28d268) {
          var _0x531f8e = this._loadWrapper(_0x28d268);
          var _0xcec809 = _0x531f8e.factory;
          var _0xf5293a = _0x531f8e.resolveMap;
          var _0x34f1bf = this._createRequire(_0x322787);
          var _0x3172ef = _0xf5293a ? this._createRequireWithResolveMap("function" == typeof _0xf5293a ? _0xf5293a() : _0xf5293a, _0x34f1bf) : _0x34f1bf;
          _0xcec809(_0x322787.exports, _0x3172ef, _0x322787);
        };
        _0x4bd787._loadWrapper = function (_0x51589e) {
          return _0x51589e in this._registry ? this._registry[_0x51589e] : this._loadHostProvidedModules(_0x51589e);
        };
        _0x4bd787._loadHostProvidedModules = function (_0x5a9071) {
          return {
            'factory': function (_0x38e5f9, _0x35459a, _0x4b0412) {
              if ('undefined' == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x5a9071 + "'.");
              }
              try {
                _0x4b0412.exports = require(_0x5a9071);
              } catch (_0x3c2ef4) {
                throw new Error("Exception thrown when calling host defined require('" + _0x5a9071 + "').", {
                  'cause': _0x3c2ef4
                });
              }
            }
          };
        };
        _0x4bd787._createRequire = function (_0x468112) {
          var _0x57c7ed = this;
          return function (_0x446db3) {
            return _0x57c7ed._require(_0x446db3, _0x468112);
          };
        };
        _0x4bd787._createRequireWithResolveMap = function (_0xbcac7b, _0x44e43a) {
          return function (_0x5811d2) {
            var _0x3b7c69 = _0xbcac7b[_0x5811d2];
            if (_0x3b7c69) {
              return _0x44e43a(_0x3b7c69);
            }
            throw new Error("Unresolved specifier " + _0x5811d2);
          };
        };
        _0x4bd787._throwUnresolved = function (_0x778a9e, _0x4e493d) {
          throw new Error("Unable to resolve " + _0x778a9e + " from " + parent + '.');
        };
        return _0x5e054e;
      }();
      var _0x46d4d2 = new _0x44ba49();
      var _0x185110;
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/long/src/long.js', function (_0x23810c, _0x304b73, _0x13cbf5, _0x3d04d9, _0x26476f) {
        _0x13cbf5.exports = _0x3e7358;
        var _0x384244 = null;
        try {
          _0x384244 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x23bda9) {}
        function _0x3e7358(_0x39f17a, _0x1775e3, _0x39e22e) {
          this.low = 0x0 | _0x39f17a;
          this.high = 0x0 | _0x1775e3;
          this.unsigned = !!_0x39e22e;
        }
        function _0x3da7c9(_0x5145d4) {
          return true === (_0x5145d4 && _0x5145d4.__isLong__);
        }
        _0x3e7358.prototype.__isLong__;
        Object.defineProperty(_0x3e7358.prototype, "__isLong__", {
          'value': true
        });
        _0x3e7358.isLong = _0x3da7c9;
        var _0x43f51f = {};
        var _0x1b5027 = {};
        function _0x58a539(_0x556ba3, _0x19be38) {
          var _0x13b6ea;
          var _0x1eb28c;
          var _0x1335b7;
          return _0x19be38 ? (_0x1335b7 = 0x0 <= (_0x556ba3 >>>= 0x0) && _0x556ba3 < 0x100) && (_0x1eb28c = _0x1b5027[_0x556ba3]) ? _0x1eb28c : (_0x13b6ea = new _0x3e7358(_0x556ba3, (0x0 | _0x556ba3) < 0x0 ? -0x1 : 0x0, true), _0x1335b7 && (_0x1b5027[_0x556ba3] = _0x13b6ea), _0x13b6ea) : (_0x1335b7 = -0x80 <= (_0x556ba3 |= 0x0) && _0x556ba3 < 0x80) && (_0x1eb28c = _0x43f51f[_0x556ba3]) ? _0x1eb28c : (_0x13b6ea = new _0x3e7358(_0x556ba3, _0x556ba3 < 0x0 ? -0x1 : 0x0, false), _0x1335b7 && (_0x43f51f[_0x556ba3] = _0x13b6ea), _0x13b6ea);
        }
        function _0x54cfd2(_0xe06adb, _0x5ee219) {
          if (isNaN(_0xe06adb)) {
            return _0x5ee219 ? _0x7b3255 : _0x284e53;
          }
          if (_0x5ee219) {
            if (_0xe06adb < 0x0) {
              return _0x7b3255;
            }
            if (_0xe06adb >= 18446744073709552000) {
              return _0x4fb0e6;
            }
          } else {
            if (_0xe06adb <= -9223372036854776000) {
              return _0x5b5fea;
            }
            if (_0xe06adb + 0x1 >= 9223372036854776000) {
              return _0x3a7b90;
            }
          }
          return _0xe06adb < 0x0 ? _0x54cfd2(-_0xe06adb, _0x5ee219).neg() : new _0x3e7358(_0xe06adb % 0x100000000 | 0x0, _0xe06adb / 0x100000000 | 0x0, _0x5ee219);
        }
        function _0x4e01ce(_0x5d10c2, _0x4e946f, _0x297712) {
          return new _0x3e7358(_0x5d10c2, _0x4e946f, _0x297712);
        }
        _0x3e7358.fromInt = _0x58a539;
        _0x3e7358.fromNumber = _0x54cfd2;
        _0x3e7358.fromBits = _0x4e01ce;
        var _0x14181f = Math.pow;
        function _0x39f213(_0x57a49c, _0x2a3081, _0x13725d) {
          if (0x0 === _0x57a49c.length) {
            throw Error("empty string");
          }
          if ('NaN' === _0x57a49c || "Infinity" === _0x57a49c || '+Infinity' === _0x57a49c || "-Infinity" === _0x57a49c) {
            return _0x284e53;
          }
          if ('number' == typeof _0x2a3081) {
            _0x13725d = _0x2a3081;
            _0x2a3081 = false;
          } else {
            _0x2a3081 = !!_0x2a3081;
          }
          if ((_0x13725d = _0x13725d || 0xa) < 0x2 || 0x24 < _0x13725d) {
            throw RangeError("radix");
          }
          var _0x35089b;
          if ((_0x35089b = _0x57a49c.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x35089b) {
            return _0x39f213(_0x57a49c.substring(0x1), _0x2a3081, _0x13725d).neg();
          }
          var _0x5cf419 = _0x54cfd2(_0x14181f(_0x13725d, 0x8));
          var _0x51c315 = _0x284e53;
          for (var _0x58759d = 0x0; _0x58759d < _0x57a49c.length; _0x58759d += 0x8) {
            var _0x31125c = Math.min(0x8, _0x57a49c.length - _0x58759d);
            var _0x1f5826 = parseInt(_0x57a49c.substring(_0x58759d, _0x58759d + _0x31125c), _0x13725d);
            if (_0x31125c < 0x8) {
              var _0x58b5fd = _0x54cfd2(_0x14181f(_0x13725d, _0x31125c));
              _0x51c315 = _0x51c315.mul(_0x58b5fd).add(_0x54cfd2(_0x1f5826));
            } else {
              _0x51c315 = (_0x51c315 = _0x51c315.mul(_0x5cf419)).add(_0x54cfd2(_0x1f5826));
            }
          }
          _0x51c315.unsigned = _0x2a3081;
          return _0x51c315;
        }
        function _0x165d1c(_0xae3e1, _0x1131b0) {
          return 'number' == typeof _0xae3e1 ? _0x54cfd2(_0xae3e1, _0x1131b0) : "string" == typeof _0xae3e1 ? _0x39f213(_0xae3e1, _0x1131b0) : new _0x3e7358(_0xae3e1.low, _0xae3e1.high, 'boolean' == typeof _0x1131b0 ? _0x1131b0 : _0xae3e1.unsigned);
        }
        _0x3e7358.fromString = _0x39f213;
        _0x3e7358.fromValue = _0x165d1c;
        var _0x2ce990 = _0x58a539(16777216);
        var _0x284e53 = _0x58a539(0x0);
        _0x3e7358.ZERO = _0x284e53;
        var _0x7b3255 = _0x58a539(0x0, true);
        _0x3e7358.UZERO = _0x7b3255;
        var _0xd4df81 = _0x58a539(0x1);
        _0x3e7358.ONE = _0xd4df81;
        var _0x3bf9fa = _0x58a539(0x1, true);
        _0x3e7358.UONE = _0x3bf9fa;
        var _0x4baf64 = _0x58a539(-0x1);
        _0x3e7358.NEG_ONE = _0x4baf64;
        var _0x3a7b90 = new _0x3e7358(-0x1, 0x7fffffff, false);
        _0x3e7358.MAX_VALUE = _0x3a7b90;
        var _0x4fb0e6 = new _0x3e7358(-0x1, -0x1, true);
        _0x3e7358.MAX_UNSIGNED_VALUE = _0x4fb0e6;
        var _0x5b5fea = new _0x3e7358(0x0, -0x80000000, false);
        _0x3e7358.MIN_VALUE = _0x5b5fea;
        var _0x39e9dd = _0x3e7358.prototype;
        _0x39e9dd.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x39e9dd.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x39e9dd.toString = function (_0x27feea) {
          if ((_0x27feea = _0x27feea || 0xa) < 0x2 || 0x24 < _0x27feea) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x5b5fea)) {
              var _0xf9c93e = _0x54cfd2(_0x27feea);
              var _0x37c197 = this.div(_0xf9c93e);
              var _0x15429a = _0x37c197.mul(_0xf9c93e).sub(this);
              return _0x37c197.toString(_0x27feea) + _0x15429a.toInt().toString(_0x27feea);
            }
            return '-' + this.neg().toString(_0x27feea);
          }
          var _0xa887ee = _0x54cfd2(_0x14181f(_0x27feea, 0x6), this.unsigned);
          var _0xa57153 = this;
          for (var _0x4345f3 = '';;) {
            var _0x5b581d = _0xa57153.div(_0xa887ee);
            var _0x3abfa1 = (_0xa57153.sub(_0x5b581d.mul(_0xa887ee)).toInt() >>> 0x0).toString(_0x27feea);
            if ((_0xa57153 = _0x5b581d).isZero()) {
              return _0x3abfa1 + _0x4345f3;
            }
            for (; _0x3abfa1.length < 0x6;) {
              _0x3abfa1 = '0' + _0x3abfa1;
            }
            _0x4345f3 = '' + _0x3abfa1 + _0x4345f3;
          }
        };
        _0x39e9dd.getHighBits = function () {
          return this.high;
        };
        _0x39e9dd.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x39e9dd.getLowBits = function () {
          return this.low;
        };
        _0x39e9dd.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x39e9dd.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x5b5fea) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x506aa3 = 0x0 != this.high ? this.high : this.low;
          for (var _0x3d7aec = 0x1f; _0x3d7aec > 0x0 && 0x0 == (_0x506aa3 & 0x1 << _0x3d7aec); _0x3d7aec--) {
            ;
          }
          return 0x0 != this.high ? _0x3d7aec + 0x21 : _0x3d7aec + 0x1;
        };
        _0x39e9dd.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x39e9dd.eqz = _0x39e9dd.isZero;
        _0x39e9dd.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x39e9dd.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x39e9dd.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x39e9dd.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x39e9dd.equals = function (_0x2163ae) {
          if (!(true === (_0x2163ae && _0x2163ae.__isLong__))) {
            _0x2163ae = 'number' == typeof _0x2163ae ? _0x54cfd2(_0x2163ae, undefined) : "string" == typeof _0x2163ae ? _0x39f213(_0x2163ae, undefined) : new _0x3e7358(_0x2163ae.low, _0x2163ae.high, _0x2163ae.unsigned);
          }
          return (this.unsigned === _0x2163ae.unsigned || this.high >>> 0x1f != 0x1 || _0x2163ae.high >>> 0x1f != 0x1) && this.high === _0x2163ae.high && this.low === _0x2163ae.low;
        };
        _0x39e9dd.eq = _0x39e9dd.equals;
        _0x39e9dd.notEquals = function (_0x31b41d) {
          return !this.eq(_0x31b41d);
        };
        _0x39e9dd.neq = _0x39e9dd.notEquals;
        _0x39e9dd.ne = _0x39e9dd.notEquals;
        _0x39e9dd.lessThan = function (_0x1c52da) {
          return this.comp(_0x1c52da) < 0x0;
        };
        _0x39e9dd.lt = _0x39e9dd.lessThan;
        _0x39e9dd.lessThanOrEqual = function (_0x5baf4a) {
          return this.comp(_0x5baf4a) <= 0x0;
        };
        _0x39e9dd.lte = _0x39e9dd.lessThanOrEqual;
        _0x39e9dd.le = _0x39e9dd.lessThanOrEqual;
        _0x39e9dd.greaterThan = function (_0x2cbe89) {
          return this.comp(_0x2cbe89) > 0x0;
        };
        _0x39e9dd.gt = _0x39e9dd.greaterThan;
        _0x39e9dd.greaterThanOrEqual = function (_0x54826c) {
          return this.comp(_0x54826c) >= 0x0;
        };
        _0x39e9dd.gte = _0x39e9dd.greaterThanOrEqual;
        _0x39e9dd.ge = _0x39e9dd.greaterThanOrEqual;
        _0x39e9dd.compare = function (_0x59513c) {
          if (!(true === (_0x59513c && _0x59513c.__isLong__))) {
            _0x59513c = 'number' == typeof _0x59513c ? _0x54cfd2(_0x59513c, undefined) : "string" == typeof _0x59513c ? _0x39f213(_0x59513c, undefined) : new _0x3e7358(_0x59513c.low, _0x59513c.high, _0x59513c.unsigned);
          }
          if (this.eq(_0x59513c)) {
            return 0x0;
          }
          var _0x1ae0e9 = this.isNegative();
          var _0x34e251 = _0x59513c.isNegative();
          return _0x1ae0e9 && !_0x34e251 ? -0x1 : !_0x1ae0e9 && _0x34e251 ? 0x1 : this.unsigned ? _0x59513c.high >>> 0x0 > this.high >>> 0x0 || _0x59513c.high === this.high && _0x59513c.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x59513c).isNegative() ? -0x1 : 0x1;
        };
        _0x39e9dd.comp = _0x39e9dd.compare;
        _0x39e9dd.negate = function () {
          return !this.unsigned && this.eq(_0x5b5fea) ? _0x5b5fea : this.not().add(_0xd4df81);
        };
        _0x39e9dd.neg = _0x39e9dd.negate;
        _0x39e9dd.add = function (_0x37526c) {
          if (!(true === (_0x37526c && _0x37526c.__isLong__))) {
            _0x37526c = 'number' == typeof _0x37526c ? _0x54cfd2(_0x37526c, undefined) : "string" == typeof _0x37526c ? _0x39f213(_0x37526c, undefined) : new _0x3e7358(_0x37526c.low, _0x37526c.high, _0x37526c.unsigned);
          }
          var _0x25a150 = this.high >>> 0x10;
          var _0x45ec29 = 0xffff & this.high;
          var _0x45d356 = this.low >>> 0x10;
          var _0x11ddc0 = 0xffff & this.low;
          var _0x35e916 = _0x37526c.high >>> 0x10;
          var _0x46a6c9 = 0xffff & _0x37526c.high;
          var _0x2b234f = _0x37526c.low >>> 0x10;
          var _0x145652 = 0x0;
          var _0x31d0da = 0x0;
          var _0x4878e9 = 0x0;
          var _0x3a1c62 = 0x0;
          _0x4878e9 += (_0x3a1c62 += _0x11ddc0 + (0xffff & _0x37526c.low)) >>> 0x10;
          _0x31d0da += (_0x4878e9 += _0x45d356 + _0x2b234f) >>> 0x10;
          _0x145652 += (_0x31d0da += _0x45ec29 + _0x46a6c9) >>> 0x10;
          _0x145652 += _0x25a150 + _0x35e916;
          return new _0x3e7358((_0x4878e9 &= 0xffff) << 0x10 | (_0x3a1c62 &= 0xffff), (_0x145652 &= 0xffff) << 0x10 | (_0x31d0da &= 0xffff), this.unsigned);
        };
        _0x39e9dd.subtract = function (_0x4d8260) {
          if (!(true === (_0x4d8260 && _0x4d8260.__isLong__))) {
            _0x4d8260 = 'number' == typeof _0x4d8260 ? _0x54cfd2(_0x4d8260, undefined) : "string" == typeof _0x4d8260 ? _0x39f213(_0x4d8260, undefined) : new _0x3e7358(_0x4d8260.low, _0x4d8260.high, _0x4d8260.unsigned);
          }
          return this.add(_0x4d8260.neg());
        };
        _0x39e9dd.sub = _0x39e9dd.subtract;
        _0x39e9dd.multiply = function (_0x39eec6) {
          if (this.isZero()) {
            return _0x284e53;
          }
          if (!(true === (_0x39eec6 && _0x39eec6.__isLong__))) {
            _0x39eec6 = 'number' == typeof _0x39eec6 ? _0x54cfd2(_0x39eec6, undefined) : "string" == typeof _0x39eec6 ? _0x39f213(_0x39eec6, undefined) : new _0x3e7358(_0x39eec6.low, _0x39eec6.high, _0x39eec6.unsigned);
          }
          if (_0x384244) {
            return new _0x3e7358(_0x384244.mul(this.low, this.high, _0x39eec6.low, _0x39eec6.high), _0x384244.get_high(), this.unsigned);
          }
          if (_0x39eec6.isZero()) {
            return _0x284e53;
          }
          if (this.eq(_0x5b5fea)) {
            return _0x39eec6.isOdd() ? _0x5b5fea : _0x284e53;
          }
          if (_0x39eec6.eq(_0x5b5fea)) {
            return this.isOdd() ? _0x5b5fea : _0x284e53;
          }
          if (this.isNegative()) {
            return _0x39eec6.isNegative() ? this.neg().mul(_0x39eec6.neg()) : this.neg().mul(_0x39eec6).neg();
          }
          if (_0x39eec6.isNegative()) {
            return this.mul(_0x39eec6.neg()).neg();
          }
          if (this.lt(_0x2ce990) && _0x39eec6.lt(_0x2ce990)) {
            return _0x54cfd2(this.toNumber() * _0x39eec6.toNumber(), this.unsigned);
          }
          var _0x53c4bb = this.high >>> 0x10;
          var _0x397319 = 0xffff & this.high;
          var _0x4a0407 = this.low >>> 0x10;
          var _0x510b75 = 0xffff & this.low;
          var _0x3c6ede = _0x39eec6.high >>> 0x10;
          var _0x34718f = 0xffff & _0x39eec6.high;
          var _0x40a145 = _0x39eec6.low >>> 0x10;
          var _0x13f042 = 0xffff & _0x39eec6.low;
          var _0x58a666 = 0x0;
          var _0x4d213d = 0x0;
          var _0x2e6766 = 0x0;
          var _0xd1b2a0 = 0x0;
          _0x2e6766 += (_0xd1b2a0 += _0x510b75 * _0x13f042) >>> 0x10;
          _0x4d213d += (_0x2e6766 += _0x4a0407 * _0x13f042) >>> 0x10;
          _0x2e6766 &= 0xffff;
          _0x4d213d += (_0x2e6766 += _0x510b75 * _0x40a145) >>> 0x10;
          _0x58a666 += (_0x4d213d += _0x397319 * _0x13f042) >>> 0x10;
          _0x4d213d &= 0xffff;
          _0x58a666 += (_0x4d213d += _0x4a0407 * _0x40a145) >>> 0x10;
          _0x4d213d &= 0xffff;
          _0x58a666 += (_0x4d213d += _0x510b75 * _0x34718f) >>> 0x10;
          _0x58a666 += _0x53c4bb * _0x13f042 + _0x397319 * _0x40a145 + _0x4a0407 * _0x34718f + _0x510b75 * _0x3c6ede;
          return new _0x3e7358((_0x2e6766 &= 0xffff) << 0x10 | (_0xd1b2a0 &= 0xffff), (_0x58a666 &= 0xffff) << 0x10 | (_0x4d213d &= 0xffff), this.unsigned);
        };
        _0x39e9dd.mul = _0x39e9dd.multiply;
        _0x39e9dd.divide = function (_0x414e7a) {
          if (!(true === (_0x414e7a && _0x414e7a.__isLong__))) {
            _0x414e7a = 'number' == typeof _0x414e7a ? _0x54cfd2(_0x414e7a, undefined) : "string" == typeof _0x414e7a ? _0x39f213(_0x414e7a, undefined) : new _0x3e7358(_0x414e7a.low, _0x414e7a.high, _0x414e7a.unsigned);
          }
          if (_0x414e7a.isZero()) {
            throw Error("division by zero");
          }
          var _0x3b1fe2;
          var _0x2041ca;
          var _0x2a310d;
          if (_0x384244) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x414e7a.low || -0x1 !== _0x414e7a.high ? new _0x3e7358((this.unsigned ? _0x384244.div_u : _0x384244.div_s)(this.low, this.high, _0x414e7a.low, _0x414e7a.high), _0x384244.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x7b3255 : _0x284e53;
          }
          if (this.unsigned) {
            if (!_0x414e7a.unsigned) {
              _0x414e7a = _0x414e7a.toUnsigned();
            }
            if (_0x414e7a.gt(this)) {
              return _0x7b3255;
            }
            if (_0x414e7a.gt(this.shru(0x1))) {
              return _0x3bf9fa;
            }
            _0x2a310d = _0x7b3255;
          } else {
            if (this.eq(_0x5b5fea)) {
              return _0x414e7a.eq(_0xd4df81) || _0x414e7a.eq(_0x4baf64) ? _0x5b5fea : _0x414e7a.eq(_0x5b5fea) ? _0xd4df81 : (_0x3b1fe2 = this.shr(0x1).div(_0x414e7a).shl(0x1)).eq(_0x284e53) ? _0x414e7a.isNegative() ? _0xd4df81 : _0x4baf64 : (_0x2041ca = this.sub(_0x414e7a.mul(_0x3b1fe2)), _0x2a310d = _0x3b1fe2.add(_0x2041ca.div(_0x414e7a)));
            }
            if (_0x414e7a.eq(_0x5b5fea)) {
              return this.unsigned ? _0x7b3255 : _0x284e53;
            }
            if (this.isNegative()) {
              return _0x414e7a.isNegative() ? this.neg().div(_0x414e7a.neg()) : this.neg().div(_0x414e7a).neg();
            }
            if (_0x414e7a.isNegative()) {
              return this.div(_0x414e7a.neg()).neg();
            }
            _0x2a310d = _0x284e53;
          }
          for (_0x2041ca = this; _0x2041ca.gte(_0x414e7a);) {
            _0x3b1fe2 = Math.max(0x1, Math.floor(_0x2041ca.toNumber() / _0x414e7a.toNumber()));
            var _0x110067 = Math.ceil(Math.log(_0x3b1fe2) / Math.LN2);
            var _0xd7b8d4 = _0x110067 <= 0x30 ? 0x1 : _0x14181f(0x2, _0x110067 - 0x30);
            var _0x136912 = _0x54cfd2(_0x3b1fe2);
            for (var _0xe524fe = _0x136912.mul(_0x414e7a); _0xe524fe.isNegative() || _0xe524fe.gt(_0x2041ca);) {
              _0xe524fe = (_0x136912 = _0x54cfd2(_0x3b1fe2 -= _0xd7b8d4, this.unsigned)).mul(_0x414e7a);
            }
            if (_0x136912.isZero()) {
              _0x136912 = _0xd4df81;
            }
            _0x2a310d = _0x2a310d.add(_0x136912);
            _0x2041ca = _0x2041ca.sub(_0xe524fe);
          }
          return _0x2a310d;
        };
        _0x39e9dd.div = _0x39e9dd.divide;
        _0x39e9dd.modulo = function (_0x339623) {
          if (!(true === (_0x339623 && _0x339623.__isLong__))) {
            _0x339623 = 'number' == typeof _0x339623 ? _0x54cfd2(_0x339623, undefined) : "string" == typeof _0x339623 ? _0x39f213(_0x339623, undefined) : new _0x3e7358(_0x339623.low, _0x339623.high, _0x339623.unsigned);
          }
          return _0x384244 ? new _0x3e7358((this.unsigned ? _0x384244.rem_u : _0x384244.rem_s)(this.low, this.high, _0x339623.low, _0x339623.high), _0x384244.get_high(), this.unsigned) : this.sub(this.div(_0x339623).mul(_0x339623));
        };
        _0x39e9dd.mod = _0x39e9dd.modulo;
        _0x39e9dd.rem = _0x39e9dd.modulo;
        _0x39e9dd.not = function () {
          return new _0x3e7358(~this.low, ~this.high, this.unsigned);
        };
        _0x39e9dd.and = function (_0x43582a) {
          if (!(true === (_0x43582a && _0x43582a.__isLong__))) {
            _0x43582a = 'number' == typeof _0x43582a ? _0x54cfd2(_0x43582a, undefined) : "string" == typeof _0x43582a ? _0x39f213(_0x43582a, undefined) : new _0x3e7358(_0x43582a.low, _0x43582a.high, _0x43582a.unsigned);
          }
          return new _0x3e7358(this.low & _0x43582a.low, this.high & _0x43582a.high, this.unsigned);
        };
        _0x39e9dd.or = function (_0x35795b) {
          if (!(true === (_0x35795b && _0x35795b.__isLong__))) {
            _0x35795b = 'number' == typeof _0x35795b ? _0x54cfd2(_0x35795b, undefined) : "string" == typeof _0x35795b ? _0x39f213(_0x35795b, undefined) : new _0x3e7358(_0x35795b.low, _0x35795b.high, _0x35795b.unsigned);
          }
          return new _0x3e7358(this.low | _0x35795b.low, this.high | _0x35795b.high, this.unsigned);
        };
        _0x39e9dd.xor = function (_0x505f44) {
          if (!(true === (_0x505f44 && _0x505f44.__isLong__))) {
            _0x505f44 = 'number' == typeof _0x505f44 ? _0x54cfd2(_0x505f44, undefined) : "string" == typeof _0x505f44 ? _0x39f213(_0x505f44, undefined) : new _0x3e7358(_0x505f44.low, _0x505f44.high, _0x505f44.unsigned);
          }
          return new _0x3e7358(this.low ^ _0x505f44.low, this.high ^ _0x505f44.high, this.unsigned);
        };
        _0x39e9dd.shiftLeft = function (_0x53fe1c) {
          if (true === (_0x53fe1c && _0x53fe1c.__isLong__)) {
            _0x53fe1c = _0x53fe1c.toInt();
          }
          return 0x0 == (_0x53fe1c &= 0x3f) ? this : _0x53fe1c < 0x20 ? new _0x3e7358(this.low << _0x53fe1c, this.high << _0x53fe1c | this.low >>> 0x20 - _0x53fe1c, this.unsigned) : new _0x3e7358(0x0, this.low << _0x53fe1c - 0x20, this.unsigned);
        };
        _0x39e9dd.shl = _0x39e9dd.shiftLeft;
        _0x39e9dd.shiftRight = function (_0x50cd06) {
          if (true === (_0x50cd06 && _0x50cd06.__isLong__)) {
            _0x50cd06 = _0x50cd06.toInt();
          }
          return 0x0 == (_0x50cd06 &= 0x3f) ? this : _0x50cd06 < 0x20 ? new _0x3e7358(this.low >>> _0x50cd06 | this.high << 0x20 - _0x50cd06, this.high >> _0x50cd06, this.unsigned) : new _0x3e7358(this.high >> _0x50cd06 - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x39e9dd.shr = _0x39e9dd.shiftRight;
        _0x39e9dd.shiftRightUnsigned = function (_0x57b907) {
          if (true === (_0x57b907 && _0x57b907.__isLong__)) {
            _0x57b907 = _0x57b907.toInt();
          }
          if (0x0 === (_0x57b907 &= 0x3f)) {
            return this;
          }
          var _0x285719 = this.high;
          return _0x57b907 < 0x20 ? new _0x3e7358(this.low >>> _0x57b907 | _0x285719 << 0x20 - _0x57b907, _0x285719 >>> _0x57b907, this.unsigned) : new _0x3e7358(0x20 === _0x57b907 ? _0x285719 : _0x285719 >>> _0x57b907 - 0x20, 0x0, this.unsigned);
        };
        _0x39e9dd.shru = _0x39e9dd.shiftRightUnsigned;
        _0x39e9dd.shr_u = _0x39e9dd.shiftRightUnsigned;
        _0x39e9dd.toSigned = function () {
          return this.unsigned ? new _0x3e7358(this.low, this.high, false) : this;
        };
        _0x39e9dd.toUnsigned = function () {
          return this.unsigned ? this : new _0x3e7358(this.low, this.high, true);
        };
        _0x39e9dd.toBytes = function (_0x24113e) {
          return _0x24113e ? this.toBytesLE() : this.toBytesBE();
        };
        _0x39e9dd.toBytesLE = function () {
          var _0x3a05f7 = this.high;
          var _0x438480 = this.low;
          return [0xff & _0x438480, _0x438480 >>> 0x8 & 0xff, _0x438480 >>> 0x10 & 0xff, _0x438480 >>> 0x18, 0xff & _0x3a05f7, _0x3a05f7 >>> 0x8 & 0xff, _0x3a05f7 >>> 0x10 & 0xff, _0x3a05f7 >>> 0x18];
        };
        _0x39e9dd.toBytesBE = function () {
          var _0x4ae142 = this.high;
          var _0x4f4fa6 = this.low;
          return [_0x4ae142 >>> 0x18, _0x4ae142 >>> 0x10 & 0xff, _0x4ae142 >>> 0x8 & 0xff, 0xff & _0x4ae142, _0x4f4fa6 >>> 0x18, _0x4f4fa6 >>> 0x10 & 0xff, _0x4f4fa6 >>> 0x8 & 0xff, 0xff & _0x4f4fa6];
        };
        _0x3e7358.fromBytes = function (_0x379ba4, _0x11667e, _0x106022) {
          return _0x106022 ? _0x3e7358.fromBytesLE(_0x379ba4, _0x11667e) : _0x3e7358.fromBytesBE(_0x379ba4, _0x11667e);
        };
        _0x3e7358.fromBytesLE = function (_0x59aac2, _0x1d3773) {
          return new _0x3e7358(_0x59aac2[0x0] | _0x59aac2[0x1] << 0x8 | _0x59aac2[0x2] << 0x10 | _0x59aac2[0x3] << 0x18, _0x59aac2[0x4] | _0x59aac2[0x5] << 0x8 | _0x59aac2[0x6] << 0x10 | _0x59aac2[0x7] << 0x18, _0x1d3773);
        };
        _0x3e7358.fromBytesBE = function (_0x22588b, _0x240994) {
          return new _0x3e7358(_0x22588b[0x4] << 0x18 | _0x22588b[0x5] << 0x10 | _0x22588b[0x6] << 0x8 | _0x22588b[0x7], _0x22588b[0x0] << 0x18 | _0x22588b[0x1] << 0x10 | _0x22588b[0x2] << 0x8 | _0x22588b[0x3], _0x240994);
        };
        _0x185110 = _0x13cbf5.exports;
      }, {});
      _0x46d4d2.require('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/long/src/long.js');
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x462102, _0x336011, _0x114494, _0x7358e4, _0x377d3e) {
        _0x114494.exports = function (_0xa0f467, _0x28b64b) {
          var _0x1c4638 = new Array(arguments.length - 0x1);
          var _0x1fe74c = 0x0;
          var _0x5ac4d6 = 0x2;
          var _0x4360c9 = true;
          for (; _0x5ac4d6 < arguments.length;) {
            _0x1c4638[_0x1fe74c++] = arguments[_0x5ac4d6++];
          }
          return new Promise(function (_0xdb5e2e, _0x343085) {
            _0x1c4638[_0x1fe74c] = function (_0x173553) {
              if (_0x4360c9) {
                _0x4360c9 = false;
                if (_0x173553) {
                  _0x343085(_0x173553);
                } else {
                  var _0x3f2873 = new Array(arguments.length - 0x1);
                  for (var _0x14b0e6 = 0x0; _0x14b0e6 < _0x3f2873.length;) {
                    _0x3f2873[_0x14b0e6++] = arguments[_0x14b0e6];
                  }
                  _0xdb5e2e.apply(null, _0x3f2873);
                }
              }
            };
            try {
              _0xa0f467.apply(_0x28b64b || null, _0x1c4638);
            } catch (_0x30ca25) {
              if (_0x4360c9) {
                _0x4360c9 = false;
                _0x343085(_0x30ca25);
              }
            }
          });
        };
        _0x114494.exports;
      }, {});
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (_0x40814f, _0x179013, _0x317027, _0x122d27, _0x5442a7) {
        _0x40814f.length = function (_0xbe09e1) {
          var _0x313e59 = _0xbe09e1.length;
          if (!_0x313e59) {
            return 0x0;
          }
          for (var _0x5ec645 = 0x0; --_0x313e59 % 0x4 > 0x1 && '=' === _0xbe09e1.charAt(_0x313e59);) {
            ++_0x5ec645;
          }
          return Math.ceil(0x3 * _0xbe09e1.length) / 0x4 - _0x5ec645;
        };
        var _0x5dccc2 = new Array(0x40);
        var _0x458436 = new Array(0x7b);
        for (var _0x456ade = 0x0; _0x456ade < 0x40;) {
          _0x458436[_0x5dccc2[_0x456ade] = _0x456ade < 0x1a ? _0x456ade + 0x41 : _0x456ade < 0x34 ? _0x456ade + 0x47 : _0x456ade < 0x3e ? _0x456ade - 0x4 : _0x456ade - 0x3b | 0x2b] = _0x456ade++;
        }
        _0x40814f.encode = function (_0x11dcc0, _0x55cb69, _0x45081f) {
          var _0x1ff612;
          var _0x479058 = null;
          var _0xda62ce = [];
          var _0x531720 = 0x0;
          for (var _0x26e6c7 = 0x0; _0x55cb69 < _0x45081f;) {
            var _0x1a5631 = _0x11dcc0[_0x55cb69++];
            switch (_0x26e6c7) {
              case 0x0:
                _0xda62ce[_0x531720++] = _0x5dccc2[_0x1a5631 >> 0x2];
                _0x1ff612 = (0x3 & _0x1a5631) << 0x4;
                _0x26e6c7 = 0x1;
                break;
              case 0x1:
                _0xda62ce[_0x531720++] = _0x5dccc2[_0x1ff612 | _0x1a5631 >> 0x4];
                _0x1ff612 = (0xf & _0x1a5631) << 0x2;
                _0x26e6c7 = 0x2;
                break;
              case 0x2:
                _0xda62ce[_0x531720++] = _0x5dccc2[_0x1ff612 | _0x1a5631 >> 0x6];
                _0xda62ce[_0x531720++] = _0x5dccc2[0x3f & _0x1a5631];
                _0x26e6c7 = 0x0;
            }
            if (_0x531720 > 0x1fff) {
              (_0x479058 || (_0x479058 = [])).push(String.fromCharCode.apply(String, _0xda62ce));
              _0x531720 = 0x0;
            }
          }
          if (_0x26e6c7) {
            _0xda62ce[_0x531720++] = _0x5dccc2[_0x1ff612];
            _0xda62ce[_0x531720++] = 0x3d;
            if (0x1 === _0x26e6c7) {
              _0xda62ce[_0x531720++] = 0x3d;
            }
          }
          return _0x479058 ? (_0x531720 && _0x479058.push(String.fromCharCode.apply(String, _0xda62ce.slice(0x0, _0x531720))), _0x479058.join('')) : String.fromCharCode.apply(String, _0xda62ce.slice(0x0, _0x531720));
        };
        _0x40814f.decode = function (_0x32f18e, _0x2fa81d, _0x565c7a) {
          var _0x3541d9;
          var _0x1bf6ea = _0x565c7a;
          var _0x21f451 = 0x0;
          for (var _0x3007eb = 0x0; _0x3007eb < _0x32f18e.length;) {
            var _0x42c3d3 = _0x32f18e.charCodeAt(_0x3007eb++);
            if (0x3d === _0x42c3d3 && _0x21f451 > 0x1) {
              break;
            }
            if (undefined === (_0x42c3d3 = _0x458436[_0x42c3d3])) {
              throw Error("invalid encoding");
            }
            switch (_0x21f451) {
              case 0x0:
                _0x3541d9 = _0x42c3d3;
                _0x21f451 = 0x1;
                break;
              case 0x1:
                _0x2fa81d[_0x565c7a++] = _0x3541d9 << 0x2 | (0x30 & _0x42c3d3) >> 0x4;
                _0x3541d9 = _0x42c3d3;
                _0x21f451 = 0x2;
                break;
              case 0x2:
                _0x2fa81d[_0x565c7a++] = (0xf & _0x3541d9) << 0x4 | (0x3c & _0x42c3d3) >> 0x2;
                _0x3541d9 = _0x42c3d3;
                _0x21f451 = 0x3;
                break;
              case 0x3:
                _0x2fa81d[_0x565c7a++] = (0x3 & _0x3541d9) << 0x6 | _0x42c3d3;
                _0x21f451 = 0x0;
            }
          }
          if (0x1 === _0x21f451) {
            throw Error("invalid encoding");
          }
          return _0x565c7a - _0x1bf6ea;
        };
        _0x40814f.test = function (_0x352e18) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x352e18);
        };
        _0x317027.exports;
      }, {});
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x1b9500, _0xdff05d, _0x27d151, _0xa97ce3, _0x4cf968) {
        function _0x501995() {
          this._listeners = {};
        }
        _0x27d151.exports = _0x501995;
        _0x501995.prototype.on = function (_0x52f061, _0x163043, _0x22d25f) {
          (this._listeners[_0x52f061] || (this._listeners[_0x52f061] = [])).push({
            'fn': _0x163043,
            'ctx': _0x22d25f || this
          });
          return this;
        };
        _0x501995.prototype.off = function (_0x5024f1, _0x58385d) {
          if (undefined === _0x5024f1) {
            this._listeners = {};
          } else {
            if (undefined === _0x58385d) {
              this._listeners[_0x5024f1] = [];
            } else {
              var _0x380474 = this._listeners[_0x5024f1];
              for (var _0x1acc0f = 0x0; _0x1acc0f < _0x380474.length;) {
                if (_0x380474[_0x1acc0f].fn === _0x58385d) {
                  _0x380474.splice(_0x1acc0f, 0x1);
                } else {
                  ++_0x1acc0f;
                }
              }
            }
          }
          return this;
        };
        _0x501995.prototype.emit = function (_0x31d6b7) {
          var _0x5ee985 = this._listeners[_0x31d6b7];
          if (_0x5ee985) {
            var _0x423ec4 = [];
            for (var _0x57c3ca = 0x1; _0x57c3ca < arguments.length;) {
              _0x423ec4.push(arguments[_0x57c3ca++]);
            }
            for (_0x57c3ca = 0x0; _0x57c3ca < _0x5ee985.length;) {
              _0x5ee985[_0x57c3ca].fn.apply(_0x5ee985[_0x57c3ca++].ctx, _0x423ec4);
            }
          }
          return this;
        };
        _0x27d151.exports;
      }, {});
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0x22cfc6, _0x10af85, _0x3ea9e2, _0x5eb8d3, _0x10ea18) {
        function _0x21fbbb(_0x2f6827) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var _0x50eb0f = new Float32Array([-0x0]);
              var _0x35889a = new Uint8Array(_0x50eb0f.buffer);
              var _0x524263 = 0x80 === _0x35889a[0x3];
              function _0x238f33(_0x32347f, _0x1965a4, _0x9ec8c8) {
                _0x50eb0f[0x0] = _0x32347f;
                _0x1965a4[_0x9ec8c8] = _0x35889a[0x0];
                _0x1965a4[_0x9ec8c8 + 0x1] = _0x35889a[0x1];
                _0x1965a4[_0x9ec8c8 + 0x2] = _0x35889a[0x2];
                _0x1965a4[_0x9ec8c8 + 0x3] = _0x35889a[0x3];
              }
              function _0xb94e0d(_0x4eeb75, _0x57e9f0, _0x4ccaf0) {
                _0x50eb0f[0x0] = _0x4eeb75;
                _0x57e9f0[_0x4ccaf0] = _0x35889a[0x3];
                _0x57e9f0[_0x4ccaf0 + 0x1] = _0x35889a[0x2];
                _0x57e9f0[_0x4ccaf0 + 0x2] = _0x35889a[0x1];
                _0x57e9f0[_0x4ccaf0 + 0x3] = _0x35889a[0x0];
              }
              function _0x285a41(_0x4074cb, _0x4515b2) {
                _0x35889a[0x0] = _0x4074cb[_0x4515b2];
                _0x35889a[0x1] = _0x4074cb[_0x4515b2 + 0x1];
                _0x35889a[0x2] = _0x4074cb[_0x4515b2 + 0x2];
                _0x35889a[0x3] = _0x4074cb[_0x4515b2 + 0x3];
                return _0x50eb0f[0x0];
              }
              function _0x9473a2(_0x45bb55, _0x3a5219) {
                _0x35889a[0x3] = _0x45bb55[_0x3a5219];
                _0x35889a[0x2] = _0x45bb55[_0x3a5219 + 0x1];
                _0x35889a[0x1] = _0x45bb55[_0x3a5219 + 0x2];
                _0x35889a[0x0] = _0x45bb55[_0x3a5219 + 0x3];
                return _0x50eb0f[0x0];
              }
              _0x2f6827.writeFloatLE = _0x524263 ? _0x238f33 : _0xb94e0d;
              _0x2f6827.writeFloatBE = _0x524263 ? _0xb94e0d : _0x238f33;
              _0x2f6827.readFloatLE = _0x524263 ? _0x285a41 : _0x9473a2;
              _0x2f6827.readFloatBE = _0x524263 ? _0x9473a2 : _0x285a41;
            })();
          } else {
            (function () {
              function _0x159928(_0x1881c5, _0x6299b6, _0x12da0e, _0x50b03c) {
                var _0x479f82 = _0x6299b6 < 0x0 ? 0x1 : 0x0;
                if (_0x479f82) {
                  _0x6299b6 = -_0x6299b6;
                }
                if (0x0 === _0x6299b6) {
                  _0x1881c5(0x1 / _0x6299b6 > 0x0 ? 0x0 : 0x80000000, _0x12da0e, _0x50b03c);
                } else {
                  if (isNaN(_0x6299b6)) {
                    _0x1881c5(0x7fc00000, _0x12da0e, _0x50b03c);
                  } else {
                    if (_0x6299b6 > 0xffffff00000000000000000000000000) {
                      _0x1881c5((_0x479f82 << 0x1f | 0x7f800000) >>> 0x0, _0x12da0e, _0x50b03c);
                    } else {
                      if (_0x6299b6 < 1.1754943508222875e-38) {
                        _0x1881c5((_0x479f82 << 0x1f | Math.round(_0x6299b6 / 1.401298464324817e-45)) >>> 0x0, _0x12da0e, _0x50b03c);
                      } else {
                        var _0x5ca810 = Math.floor(Math.log(_0x6299b6) / Math.LN2);
                        _0x1881c5((_0x479f82 << 0x1f | _0x5ca810 + 0x7f << 0x17 | 0x7fffff & Math.round(_0x6299b6 * Math.pow(0x2, -_0x5ca810) * 0x800000)) >>> 0x0, _0x12da0e, _0x50b03c);
                      }
                    }
                  }
                }
              }
              function _0x572c38(_0x2dd6df, _0x48c951, _0x3aa10e) {
                var _0x109982 = _0x2dd6df(_0x48c951, _0x3aa10e);
                var _0x8d0a1e = 0x2 * (_0x109982 >> 0x1f) + 0x1;
                var _0x442a12 = _0x109982 >>> 0x17 & 0xff;
                var _0x443af1 = 0x7fffff & _0x109982;
                return 0xff === _0x442a12 ? _0x443af1 ? NaN : _0x8d0a1e * Infinity : 0x0 === _0x442a12 ? 1.401298464324817e-45 * _0x8d0a1e * _0x443af1 : _0x8d0a1e * Math.pow(0x2, _0x442a12 - 0x96) * (_0x443af1 + 0x800000);
              }
              _0x2f6827.writeFloatLE = _0x159928.bind(null, _0x2285f9);
              _0x2f6827.writeFloatBE = _0x159928.bind(null, _0x35626b);
              _0x2f6827.readFloatLE = _0x572c38.bind(null, _0x46084e);
              _0x2f6827.readFloatBE = _0x572c38.bind(null, _0x2a0333);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var _0x64b12f = new Float64Array([-0x0]);
              var _0x2b83a2 = new Uint8Array(_0x64b12f.buffer);
              var _0x2685ef = 0x80 === _0x2b83a2[0x7];
              function _0x1ac655(_0x6a47b5, _0x25426c, _0x37f743) {
                _0x64b12f[0x0] = _0x6a47b5;
                _0x25426c[_0x37f743] = _0x2b83a2[0x0];
                _0x25426c[_0x37f743 + 0x1] = _0x2b83a2[0x1];
                _0x25426c[_0x37f743 + 0x2] = _0x2b83a2[0x2];
                _0x25426c[_0x37f743 + 0x3] = _0x2b83a2[0x3];
                _0x25426c[_0x37f743 + 0x4] = _0x2b83a2[0x4];
                _0x25426c[_0x37f743 + 0x5] = _0x2b83a2[0x5];
                _0x25426c[_0x37f743 + 0x6] = _0x2b83a2[0x6];
                _0x25426c[_0x37f743 + 0x7] = _0x2b83a2[0x7];
              }
              function _0x11472d(_0x5bdd5b, _0x317c27, _0x84ed92) {
                _0x64b12f[0x0] = _0x5bdd5b;
                _0x317c27[_0x84ed92] = _0x2b83a2[0x7];
                _0x317c27[_0x84ed92 + 0x1] = _0x2b83a2[0x6];
                _0x317c27[_0x84ed92 + 0x2] = _0x2b83a2[0x5];
                _0x317c27[_0x84ed92 + 0x3] = _0x2b83a2[0x4];
                _0x317c27[_0x84ed92 + 0x4] = _0x2b83a2[0x3];
                _0x317c27[_0x84ed92 + 0x5] = _0x2b83a2[0x2];
                _0x317c27[_0x84ed92 + 0x6] = _0x2b83a2[0x1];
                _0x317c27[_0x84ed92 + 0x7] = _0x2b83a2[0x0];
              }
              function _0x315c51(_0x299e54, _0x164568) {
                _0x2b83a2[0x0] = _0x299e54[_0x164568];
                _0x2b83a2[0x1] = _0x299e54[_0x164568 + 0x1];
                _0x2b83a2[0x2] = _0x299e54[_0x164568 + 0x2];
                _0x2b83a2[0x3] = _0x299e54[_0x164568 + 0x3];
                _0x2b83a2[0x4] = _0x299e54[_0x164568 + 0x4];
                _0x2b83a2[0x5] = _0x299e54[_0x164568 + 0x5];
                _0x2b83a2[0x6] = _0x299e54[_0x164568 + 0x6];
                _0x2b83a2[0x7] = _0x299e54[_0x164568 + 0x7];
                return _0x64b12f[0x0];
              }
              function _0x1fed19(_0x457d3e, _0x777c1) {
                _0x2b83a2[0x7] = _0x457d3e[_0x777c1];
                _0x2b83a2[0x6] = _0x457d3e[_0x777c1 + 0x1];
                _0x2b83a2[0x5] = _0x457d3e[_0x777c1 + 0x2];
                _0x2b83a2[0x4] = _0x457d3e[_0x777c1 + 0x3];
                _0x2b83a2[0x3] = _0x457d3e[_0x777c1 + 0x4];
                _0x2b83a2[0x2] = _0x457d3e[_0x777c1 + 0x5];
                _0x2b83a2[0x1] = _0x457d3e[_0x777c1 + 0x6];
                _0x2b83a2[0x0] = _0x457d3e[_0x777c1 + 0x7];
                return _0x64b12f[0x0];
              }
              _0x2f6827.writeDoubleLE = _0x2685ef ? _0x1ac655 : _0x11472d;
              _0x2f6827.writeDoubleBE = _0x2685ef ? _0x11472d : _0x1ac655;
              _0x2f6827.readDoubleLE = _0x2685ef ? _0x315c51 : _0x1fed19;
              _0x2f6827.readDoubleBE = _0x2685ef ? _0x1fed19 : _0x315c51;
            })();
          } else {
            (function () {
              function _0x147c1a(_0x23e2f6, _0x36ddfc, _0x26f3e1, _0x1c6cda, _0x294972, _0x364474) {
                var _0x575c61 = _0x1c6cda < 0x0 ? 0x1 : 0x0;
                if (_0x575c61) {
                  _0x1c6cda = -_0x1c6cda;
                }
                if (0x0 === _0x1c6cda) {
                  _0x23e2f6(0x0, _0x294972, _0x364474 + _0x36ddfc);
                  _0x23e2f6(0x1 / _0x1c6cda > 0x0 ? 0x0 : 0x80000000, _0x294972, _0x364474 + _0x26f3e1);
                } else {
                  if (isNaN(_0x1c6cda)) {
                    _0x23e2f6(0x0, _0x294972, _0x364474 + _0x36ddfc);
                    _0x23e2f6(0x7ff80000, _0x294972, _0x364474 + _0x26f3e1);
                  } else {
                    if (_0x1c6cda > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x23e2f6(0x0, _0x294972, _0x364474 + _0x36ddfc);
                      _0x23e2f6((_0x575c61 << 0x1f | 0x7ff00000) >>> 0x0, _0x294972, _0x364474 + _0x26f3e1);
                    } else {
                      var _0x1b95ef;
                      if (_0x1c6cda < 2.2250738585072014e-308) {
                        _0x23e2f6((_0x1b95ef = _0x1c6cda / 5e-324) >>> 0x0, _0x294972, _0x364474 + _0x36ddfc);
                        _0x23e2f6((_0x575c61 << 0x1f | _0x1b95ef / 0x100000000) >>> 0x0, _0x294972, _0x364474 + _0x26f3e1);
                      } else {
                        var _0x1e7274 = Math.floor(Math.log(_0x1c6cda) / Math.LN2);
                        if (0x400 === _0x1e7274) {
                          _0x1e7274 = 0x3ff;
                        }
                        _0x23e2f6(0x10000000000000 * (_0x1b95ef = _0x1c6cda * Math.pow(0x2, -_0x1e7274)) >>> 0x0, _0x294972, _0x364474 + _0x36ddfc);
                        _0x23e2f6((_0x575c61 << 0x1f | _0x1e7274 + 0x3ff << 0x14 | 0x100000 * _0x1b95ef & 0xfffff) >>> 0x0, _0x294972, _0x364474 + _0x26f3e1);
                      }
                    }
                  }
                }
              }
              function _0x184614(_0x245784, _0x457b52, _0x4c3c0f, _0x3de377, _0x3f2e70) {
                var _0x3fd03c = _0x245784(_0x3de377, _0x3f2e70 + _0x457b52);
                var _0x33ad37 = _0x245784(_0x3de377, _0x3f2e70 + _0x4c3c0f);
                var _0xb69611 = 0x2 * (_0x33ad37 >> 0x1f) + 0x1;
                var _0x4ea895 = _0x33ad37 >>> 0x14 & 0x7ff;
                var _0x46fdcb = 0x100000000 * (0xfffff & _0x33ad37) + _0x3fd03c;
                return 0x7ff === _0x4ea895 ? _0x46fdcb ? NaN : _0xb69611 * Infinity : 0x0 === _0x4ea895 ? 5e-324 * _0xb69611 * _0x46fdcb : _0xb69611 * Math.pow(0x2, _0x4ea895 - 0x433) * (_0x46fdcb + 0x10000000000000);
              }
              _0x2f6827.writeDoubleLE = _0x147c1a.bind(null, _0x2285f9, 0x0, 0x4);
              _0x2f6827.writeDoubleBE = _0x147c1a.bind(null, _0x35626b, 0x4, 0x0);
              _0x2f6827.readDoubleLE = _0x184614.bind(null, _0x46084e, 0x0, 0x4);
              _0x2f6827.readDoubleBE = _0x184614.bind(null, _0x2a0333, 0x4, 0x0);
            })();
          }
          return _0x2f6827;
        }
        function _0x2285f9(_0x2c5d52, _0x3ddd3b, _0x2280a4) {
          _0x3ddd3b[_0x2280a4] = 0xff & _0x2c5d52;
          _0x3ddd3b[_0x2280a4 + 0x1] = _0x2c5d52 >>> 0x8 & 0xff;
          _0x3ddd3b[_0x2280a4 + 0x2] = _0x2c5d52 >>> 0x10 & 0xff;
          _0x3ddd3b[_0x2280a4 + 0x3] = _0x2c5d52 >>> 0x18;
        }
        function _0x35626b(_0x50f71e, _0x55666a, _0x53d896) {
          _0x55666a[_0x53d896] = _0x50f71e >>> 0x18;
          _0x55666a[_0x53d896 + 0x1] = _0x50f71e >>> 0x10 & 0xff;
          _0x55666a[_0x53d896 + 0x2] = _0x50f71e >>> 0x8 & 0xff;
          _0x55666a[_0x53d896 + 0x3] = 0xff & _0x50f71e;
        }
        function _0x46084e(_0x3866e7, _0x1d5f6d) {
          return (_0x3866e7[_0x1d5f6d] | _0x3866e7[_0x1d5f6d + 0x1] << 0x8 | _0x3866e7[_0x1d5f6d + 0x2] << 0x10 | _0x3866e7[_0x1d5f6d + 0x3] << 0x18) >>> 0x0;
        }
        function _0x2a0333(_0x18810c, _0x28c184) {
          return (_0x18810c[_0x28c184] << 0x18 | _0x18810c[_0x28c184 + 0x1] << 0x10 | _0x18810c[_0x28c184 + 0x2] << 0x8 | _0x18810c[_0x28c184 + 0x3]) >>> 0x0;
        }
        _0x3ea9e2.exports = _0x21fbbb(_0x21fbbb);
        _0x3ea9e2.exports;
        _0x3ea9e2.exports.writeFloatLE;
        _0x3ea9e2.exports.writeFloatBE;
        _0x3ea9e2.exports.readFloatLE;
        _0x3ea9e2.exports.readFloatBE;
        _0x3ea9e2.exports.writeDoubleLE;
        _0x3ea9e2.exports.writeDoubleBE;
        _0x3ea9e2.exports.readDoubleLE;
        _0x3ea9e2.exports.readDoubleBE;
      }, {});
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js', function (_0x4f9d59, _0x235bd1, _0x6b7de, _0x4931f1, _0x4fa6ec) {
        function _0x852cac(_0x283796) {
          try {
            var _0x5c1609 = eval('quire'.replace(/^/, 're'))(_0x283796);
            if (_0x5c1609 && (_0x5c1609.length || Object.keys(_0x5c1609).length)) {
              return _0x5c1609;
            }
          } catch (_0x574f02) {}
          return null;
        }
        _0x6b7de.exports = _0x852cac;
        _0x6b7de.exports;
      }, {});
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js', function (_0x200e10, _0x3e1ea8, _0x5c1f28, _0x280230, _0x732b83) {
        _0x200e10.length = function (_0x4a51dd) {
          var _0x821e68 = 0x0;
          var _0x50ba27 = 0x0;
          for (var _0x14b70b = 0x0; _0x14b70b < _0x4a51dd.length; ++_0x14b70b) {
            if ((_0x50ba27 = _0x4a51dd.charCodeAt(_0x14b70b)) < 0x80) {
              _0x821e68 += 0x1;
            } else if (_0x50ba27 < 0x800) {
              _0x821e68 += 0x2;
            } else if (0xd800 == (0xfc00 & _0x50ba27) && 0xdc00 == (0xfc00 & _0x4a51dd.charCodeAt(_0x14b70b + 0x1))) {
              ++_0x14b70b;
              _0x821e68 += 0x4;
            } else {
              _0x821e68 += 0x3;
            }
          }
          return _0x821e68;
        };
        _0x200e10.read = function (_0x531f05, _0x1206e8, _0x4a0de8) {
          if (_0x4a0de8 - _0x1206e8 < 0x1) {
            return '';
          }
          var _0x1fbb92;
          var _0x59e506 = null;
          var _0x55b460 = [];
          for (var _0x2267c6 = 0x0; _0x1206e8 < _0x4a0de8;) {
            if ((_0x1fbb92 = _0x531f05[_0x1206e8++]) < 0x80) {
              _0x55b460[_0x2267c6++] = _0x1fbb92;
            } else if (_0x1fbb92 > 0xbf && _0x1fbb92 < 0xe0) {
              _0x55b460[_0x2267c6++] = (0x1f & _0x1fbb92) << 0x6 | 0x3f & _0x531f05[_0x1206e8++];
            } else if (_0x1fbb92 > 0xef && _0x1fbb92 < 0x16d) {
              _0x1fbb92 = ((0x7 & _0x1fbb92) << 0x12 | (0x3f & _0x531f05[_0x1206e8++]) << 0xc | (0x3f & _0x531f05[_0x1206e8++]) << 0x6 | 0x3f & _0x531f05[_0x1206e8++]) - 0x10000;
              _0x55b460[_0x2267c6++] = 0xd800 + (_0x1fbb92 >> 0xa);
              _0x55b460[_0x2267c6++] = 0xdc00 + (0x3ff & _0x1fbb92);
            } else {
              _0x55b460[_0x2267c6++] = (0xf & _0x1fbb92) << 0xc | (0x3f & _0x531f05[_0x1206e8++]) << 0x6 | 0x3f & _0x531f05[_0x1206e8++];
            }
            if (_0x2267c6 > 0x1fff) {
              (_0x59e506 || (_0x59e506 = [])).push(String.fromCharCode.apply(String, _0x55b460));
              _0x2267c6 = 0x0;
            }
          }
          return _0x59e506 ? (_0x2267c6 && _0x59e506.push(String.fromCharCode.apply(String, _0x55b460.slice(0x0, _0x2267c6))), _0x59e506.join('')) : String.fromCharCode.apply(String, _0x55b460.slice(0x0, _0x2267c6));
        };
        _0x200e10.write = function (_0x324e4c, _0x1dd501, _0x4d4bb1) {
          var _0x37a5e5;
          var _0x33f8ac;
          var _0x4f7fc7 = _0x4d4bb1;
          for (var _0x64eb28 = 0x0; _0x64eb28 < _0x324e4c.length; ++_0x64eb28) {
            if ((_0x37a5e5 = _0x324e4c.charCodeAt(_0x64eb28)) < 0x80) {
              _0x1dd501[_0x4d4bb1++] = _0x37a5e5;
            } else if (_0x37a5e5 < 0x800) {
              _0x1dd501[_0x4d4bb1++] = _0x37a5e5 >> 0x6 | 0xc0;
              _0x1dd501[_0x4d4bb1++] = 0x3f & _0x37a5e5 | 0x80;
            } else if (0xd800 == (0xfc00 & _0x37a5e5) && 0xdc00 == (0xfc00 & (_0x33f8ac = _0x324e4c.charCodeAt(_0x64eb28 + 0x1)))) {
              _0x37a5e5 = 0x10000 + ((0x3ff & _0x37a5e5) << 0xa) + (0x3ff & _0x33f8ac);
              ++_0x64eb28;
              _0x1dd501[_0x4d4bb1++] = _0x37a5e5 >> 0x12 | 0xf0;
              _0x1dd501[_0x4d4bb1++] = _0x37a5e5 >> 0xc & 0x3f | 0x80;
              _0x1dd501[_0x4d4bb1++] = _0x37a5e5 >> 0x6 & 0x3f | 0x80;
              _0x1dd501[_0x4d4bb1++] = 0x3f & _0x37a5e5 | 0x80;
            } else {
              _0x1dd501[_0x4d4bb1++] = _0x37a5e5 >> 0xc | 0xe0;
              _0x1dd501[_0x4d4bb1++] = _0x37a5e5 >> 0x6 & 0x3f | 0x80;
              _0x1dd501[_0x4d4bb1++] = 0x3f & _0x37a5e5 | 0x80;
            }
          }
          return _0x4d4bb1 - _0x4f7fc7;
        };
        _0x5c1f28.exports;
      }, {});
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x4da73, _0x3c05c3, _0x43f181, _0x5b9947, _0x1ba57f) {
        _0x43f181.exports = function (_0xe05b09, _0x60e694, _0x4734e2) {
          var _0x12980b = _0x4734e2 || 0x2000;
          var _0x1f2a3d = _0x12980b >>> 0x1;
          var _0x59d6b9 = null;
          var _0x1d6269 = _0x12980b;
          return function (_0x118b51) {
            if (_0x118b51 < 0x1 || _0x118b51 > _0x1f2a3d) {
              return _0xe05b09(_0x118b51);
            }
            if (_0x1d6269 + _0x118b51 > _0x12980b) {
              _0x59d6b9 = _0xe05b09(_0x12980b);
              _0x1d6269 = 0x0;
            }
            var _0x552fe8 = _0x60e694.call(_0x59d6b9, _0x1d6269, _0x1d6269 += _0x118b51);
            if (0x7 & _0x1d6269) {
              _0x1d6269 = 0x1 + (0x7 | _0x1d6269);
            }
            return _0x552fe8;
          };
        };
        _0x43f181.exports;
      }, {});
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (_0xba7f85, _0x359d6e, _0x1b1369, _0x1b7836, _0x246fcd) {
        _0x1b1369.exports = _0x47dbd9;
        var _0x30b2f1 = _0x359d6e('../util/minimal');
        function _0x47dbd9(_0x488f1c, _0x2fde58) {
          this.lo = _0x488f1c >>> 0x0;
          this.hi = _0x2fde58 >>> 0x0;
        }
        var _0x467a09 = _0x47dbd9.zero = new _0x47dbd9(0x0, 0x0);
        _0x467a09.toNumber = function () {
          return 0x0;
        };
        _0x467a09.zzEncode = _0x467a09.zzDecode = function () {
          return this;
        };
        _0x467a09.length = function () {
          return 0x1;
        };
        var _0x2c4617 = _0x47dbd9.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x47dbd9.fromNumber = function (_0x675eb) {
          if (0x0 === _0x675eb) {
            return _0x467a09;
          }
          var _0x1be142 = _0x675eb < 0x0;
          if (_0x1be142) {
            _0x675eb = -_0x675eb;
          }
          var _0x45112f = _0x675eb >>> 0x0;
          var _0x50bfec = (_0x675eb - _0x45112f) / 0x100000000 >>> 0x0;
          if (_0x1be142) {
            _0x50bfec = ~_0x50bfec >>> 0x0;
            _0x45112f = ~_0x45112f >>> 0x0;
            if (++_0x45112f > 0xffffffff) {
              _0x45112f = 0x0;
              if (++_0x50bfec > 0xffffffff) {
                _0x50bfec = 0x0;
              }
            }
          }
          return new _0x47dbd9(_0x45112f, _0x50bfec);
        };
        _0x47dbd9.from = function (_0xc7fd06) {
          if ('number' == typeof _0xc7fd06) {
            return _0x47dbd9.fromNumber(_0xc7fd06);
          }
          if (_0x30b2f1.isString(_0xc7fd06)) {
            if (!_0x30b2f1.Long) {
              return _0x47dbd9.fromNumber(parseInt(_0xc7fd06, 0xa));
            }
            _0xc7fd06 = _0x30b2f1.Long.fromString(_0xc7fd06);
          }
          return _0xc7fd06.low || _0xc7fd06.high ? new _0x47dbd9(_0xc7fd06.low >>> 0x0, _0xc7fd06.high >>> 0x0) : _0x467a09;
        };
        _0x47dbd9.prototype.toNumber = function (_0x17cf0e) {
          if (!_0x17cf0e && this.hi >>> 0x1f) {
            var _0x33f852 = 0x1 + ~this.lo >>> 0x0;
            var _0x2e6a5c = ~this.hi >>> 0x0;
            if (!_0x33f852) {
              _0x2e6a5c = _0x2e6a5c + 0x1 >>> 0x0;
            }
            return -(_0x33f852 + 0x100000000 * _0x2e6a5c);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x47dbd9.prototype.toLong = function (_0x73d46c) {
          return _0x30b2f1.Long ? new _0x30b2f1.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x73d46c)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x73d46c)
          };
        };
        var _0x5d42ba = String.prototype.charCodeAt;
        _0x47dbd9.fromHash = function (_0x36f00f) {
          return _0x36f00f === _0x2c4617 ? _0x467a09 : new _0x47dbd9((_0x5d42ba.call(_0x36f00f, 0x0) | _0x5d42ba.call(_0x36f00f, 0x1) << 0x8 | _0x5d42ba.call(_0x36f00f, 0x2) << 0x10 | _0x5d42ba.call(_0x36f00f, 0x3) << 0x18) >>> 0x0, (_0x5d42ba.call(_0x36f00f, 0x4) | _0x5d42ba.call(_0x36f00f, 0x5) << 0x8 | _0x5d42ba.call(_0x36f00f, 0x6) << 0x10 | _0x5d42ba.call(_0x36f00f, 0x7) << 0x18) >>> 0x0);
        };
        _0x47dbd9.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x47dbd9.prototype.zzEncode = function () {
          var _0x35ea28 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x35ea28) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x35ea28) >>> 0x0;
          return this;
        };
        _0x47dbd9.prototype.zzDecode = function () {
          var _0x3d5332 = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x3d5332) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x3d5332) >>> 0x0;
          return this;
        };
        _0x47dbd9.prototype.length = function () {
          var _0x346f3f = this.lo;
          var _0x30d03b = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x4432c8 = this.hi >>> 0x18;
          return 0x0 === _0x4432c8 ? 0x0 === _0x30d03b ? _0x346f3f < 0x4000 ? _0x346f3f < 0x80 ? 0x1 : 0x2 : _0x346f3f < 0x200000 ? 0x3 : 0x4 : _0x30d03b < 0x4000 ? _0x30d03b < 0x80 ? 0x5 : 0x6 : _0x30d03b < 0x200000 ? 0x7 : 0x8 : _0x4432c8 < 0x80 ? 0x9 : 0xa;
        };
        _0x1b1369.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x2e5eda, _0x556086, _0x121a5a, _0xf9dc8c, _0x2b936c) {
        function _0x420ee8(_0x2099f0, _0x4962fb, _0x29a0ce) {
          var _0x4cc1dc = Object.keys(_0x4962fb);
          for (var _0x18c6c1 = 0x0; _0x18c6c1 < _0x4cc1dc.length; ++_0x18c6c1) {
            if (!(undefined !== _0x2099f0[_0x4cc1dc[_0x18c6c1]] && _0x29a0ce)) {
              _0x2099f0[_0x4cc1dc[_0x18c6c1]] = _0x4962fb[_0x4cc1dc[_0x18c6c1]];
            }
          }
          return _0x2099f0;
        }
        function _0x2b2e60(_0x32289b) {
          function _0x2de32f(_0x38abae, _0x7d62f6) {
            if (!(this instanceof _0x2de32f)) {
              return new _0x2de32f(_0x38abae, _0x7d62f6);
            }
            Object.defineProperty(this, "message", {
              'get': function () {
                return _0x38abae;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x2de32f);
            } else {
              Object.defineProperty(this, "stack", {
                'value': new Error().stack || ''
              });
            }
            if (_0x7d62f6) {
              _0x420ee8(this, _0x7d62f6);
            }
          }
          (_0x2de32f.prototype = Object.create(Error.prototype)).constructor = _0x2de32f;
          Object.defineProperty(_0x2de32f.prototype, "name", {
            'get': function () {
              return _0x32289b;
            }
          });
          _0x2de32f.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x2de32f;
        }
        _0x2e5eda.asPromise = _0x556086('@protobufjs/aspromise');
        _0x2e5eda.base64 = _0x556086("@protobufjs/base64");
        _0x2e5eda.EventEmitter = _0x556086("@protobufjs/eventemitter");
        _0x2e5eda.float = _0x556086('@protobufjs/float');
        _0x2e5eda.inquire = _0x556086("@protobufjs/inquire");
        _0x2e5eda.utf8 = _0x556086("@protobufjs/utf8");
        _0x2e5eda.pool = _0x556086('@protobufjs/pool');
        _0x2e5eda.LongBits = _0x556086("./longbits");
        _0x2e5eda.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x2e5eda.global = _0x2e5eda.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        _0x2e5eda.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x2e5eda.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x2e5eda.isInteger = Number.isInteger || function (_0x7628ac) {
          return "number" == typeof _0x7628ac && isFinite(_0x7628ac) && Math.floor(_0x7628ac) === _0x7628ac;
        };
        _0x2e5eda.isString = function (_0x1d45a1) {
          return "string" == typeof _0x1d45a1 || _0x1d45a1 instanceof String;
        };
        _0x2e5eda.isObject = function (_0x493f5d) {
          return _0x493f5d && "object" == typeof _0x493f5d;
        };
        _0x2e5eda.isset = _0x2e5eda.isSet = function (_0xbb610c, _0x28eaa7) {
          var _0x37168a = _0xbb610c[_0x28eaa7];
          return !(null == _0x37168a || !_0xbb610c.hasOwnProperty(_0x28eaa7)) && ("object" != typeof _0x37168a || (Array.isArray(_0x37168a) ? _0x37168a.length : Object.keys(_0x37168a).length) > 0x0);
        };
        _0x2e5eda.Buffer = function () {
          try {
            var _0x511daa = _0x2e5eda.inquire("buffer").Buffer;
            return _0x511daa.prototype.utf8Write ? _0x511daa : null;
          } catch (_0x5a1df7) {
            return null;
          }
        }();
        _0x2e5eda._Buffer_from = null;
        _0x2e5eda._Buffer_allocUnsafe = null;
        _0x2e5eda.newBuffer = function (_0x19f779) {
          return "number" == typeof _0x19f779 ? _0x2e5eda.Buffer ? _0x2e5eda._Buffer_allocUnsafe(_0x19f779) : new _0x2e5eda.Array(_0x19f779) : _0x2e5eda.Buffer ? _0x2e5eda._Buffer_from(_0x19f779) : "undefined" == typeof Uint8Array ? _0x19f779 : new Uint8Array(_0x19f779);
        };
        _0x2e5eda.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array;
        _0x2e5eda.Long = _0x2e5eda.global.dcodeIO && _0x2e5eda.global.dcodeIO.Long || _0x2e5eda.global.Long || _0x2e5eda.inquire("long");
        _0x2e5eda.key2Re = /^true|false|0|1$/;
        _0x2e5eda.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x2e5eda.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x2e5eda.longToHash = function (_0x2dd4fe) {
          return _0x2dd4fe ? _0x2e5eda.LongBits.from(_0x2dd4fe).toHash() : _0x2e5eda.LongBits.zeroHash;
        };
        _0x2e5eda.longFromHash = function (_0x2a2eb6, _0x2c7c38) {
          var _0x329b1b = _0x2e5eda.LongBits.fromHash(_0x2a2eb6);
          return _0x2e5eda.Long ? _0x2e5eda.Long.fromBits(_0x329b1b.lo, _0x329b1b.hi, _0x2c7c38) : _0x329b1b.toNumber(Boolean(_0x2c7c38));
        };
        _0x2e5eda.merge = _0x420ee8;
        _0x2e5eda.lcFirst = function (_0x241a64) {
          return _0x241a64.charAt(0x0).toLowerCase() + _0x241a64.substring(0x1);
        };
        _0x2e5eda.newError = _0x2b2e60;
        _0x2e5eda.ProtocolError = _0x2b2e60("ProtocolError");
        _0x2e5eda.oneOfGetter = function (_0x165331) {
          var _0x3d1551 = {};
          for (var _0x4c770d = 0x0; _0x4c770d < _0x165331.length; ++_0x4c770d) {
            _0x3d1551[_0x165331[_0x4c770d]] = 0x1;
          }
          return function () {
            var _0x4b9d87 = Object.keys(this);
            for (var _0x13ab9c = _0x4b9d87.length - 0x1; _0x13ab9c > -0x1; --_0x13ab9c) {
              if (0x1 === _0x3d1551[_0x4b9d87[_0x13ab9c]] && undefined !== this[_0x4b9d87[_0x13ab9c]] && null !== this[_0x4b9d87[_0x13ab9c]]) {
                return _0x4b9d87[_0x13ab9c];
              }
            }
          };
        };
        _0x2e5eda.oneOfSetter = function (_0x294d08) {
          return function (_0x5e36b7) {
            for (var _0x31bcf1 = 0x0; _0x31bcf1 < _0x294d08.length; ++_0x31bcf1) {
              if (_0x294d08[_0x31bcf1] !== _0x5e36b7) {
                delete this[_0x294d08[_0x31bcf1]];
              }
            }
          };
        };
        _0x2e5eda.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x2e5eda._configure = function () {
          var _0x399801 = _0x2e5eda.Buffer;
          if (_0x399801) {
            _0x2e5eda._Buffer_from = _0x399801.from !== Uint8Array.from && _0x399801.from || function (_0x3c4990, _0x560546) {
              return new _0x399801(_0x3c4990, _0x560546);
            };
            _0x2e5eda._Buffer_allocUnsafe = _0x399801.allocUnsafe || function (_0x7a1e50) {
              return new _0x399801(_0x7a1e50);
            };
          } else {
            _0x2e5eda._Buffer_from = _0x2e5eda._Buffer_allocUnsafe = null;
          }
        };
        _0x121a5a.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          '@protobufjs/eventemitter': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js',
          '@protobufjs/utf8': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js',
          '@protobufjs/pool': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/writer.js', function (_0x43b0cd, _0x9da555, _0x25b998, _0x14aa43, _0x2d294f) {
        _0x25b998.exports = _0x19f1c7;
        var _0x512c97;
        var _0x47d271 = _0x9da555("./util/minimal");
        var _0x8d1478 = _0x47d271.LongBits;
        var _0x33358b = _0x47d271.base64;
        var _0x41958b = _0x47d271.utf8;
        function _0x3f9fd2(_0xfcfcaa, _0x115f1c, _0x1c7b4b) {
          this.fn = _0xfcfcaa;
          this.len = _0x115f1c;
          this.next = undefined;
          this.val = _0x1c7b4b;
        }
        function _0x5ad3e9() {}
        function _0xc596f8(_0x1fa56c) {
          this.head = _0x1fa56c.head;
          this.tail = _0x1fa56c.tail;
          this.len = _0x1fa56c.len;
          this.next = _0x1fa56c.states;
        }
        function _0x19f1c7() {
          this.len = 0x0;
          this.head = new _0x3f9fd2(_0x5ad3e9, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x13b594 = function () {
          return _0x47d271.Buffer ? function () {
            return (_0x19f1c7.create = function () {
              return new _0x512c97();
            })();
          } : function () {
            return new _0x19f1c7();
          };
        };
        function _0x436565(_0x1148db, _0x134894, _0x53bc87) {
          _0x134894[_0x53bc87] = 0xff & _0x1148db;
        }
        function _0x41e19c(_0x353f9f, _0xe94af1) {
          this.len = _0x353f9f;
          this.next = undefined;
          this.val = _0xe94af1;
        }
        function _0x3e31ac(_0x2fee87, _0x5df6a7, _0x48920b) {
          for (; _0x2fee87.hi;) {
            _0x5df6a7[_0x48920b++] = 0x7f & _0x2fee87.lo | 0x80;
            _0x2fee87.lo = (_0x2fee87.lo >>> 0x7 | _0x2fee87.hi << 0x19) >>> 0x0;
            _0x2fee87.hi >>>= 0x7;
          }
          for (; _0x2fee87.lo > 0x7f;) {
            _0x5df6a7[_0x48920b++] = 0x7f & _0x2fee87.lo | 0x80;
            _0x2fee87.lo = _0x2fee87.lo >>> 0x7;
          }
          _0x5df6a7[_0x48920b++] = _0x2fee87.lo;
        }
        function _0x2d5bc1(_0x379670, _0x19498f, _0x152d29) {
          _0x19498f[_0x152d29] = 0xff & _0x379670;
          _0x19498f[_0x152d29 + 0x1] = _0x379670 >>> 0x8 & 0xff;
          _0x19498f[_0x152d29 + 0x2] = _0x379670 >>> 0x10 & 0xff;
          _0x19498f[_0x152d29 + 0x3] = _0x379670 >>> 0x18;
        }
        _0x19f1c7.create = _0x13b594();
        _0x19f1c7.alloc = function (_0x37e895) {
          return new _0x47d271.Array(_0x37e895);
        };
        if (_0x47d271.Array !== Array) {
          _0x19f1c7.alloc = _0x47d271.pool(_0x19f1c7.alloc, _0x47d271.Array.prototype.subarray);
        }
        _0x19f1c7.prototype._push = function (_0x1ee043, _0x47a7b9, _0x1becf7) {
          this.tail = this.tail.next = new _0x3f9fd2(_0x1ee043, _0x47a7b9, _0x1becf7);
          this.len += _0x47a7b9;
          return this;
        };
        _0x41e19c.prototype = Object.create(_0x3f9fd2.prototype);
        _0x41e19c.prototype.fn = function (_0x3a5f0d, _0x321385, _0x33e06c) {
          for (; _0x3a5f0d > 0x7f;) {
            _0x321385[_0x33e06c++] = 0x7f & _0x3a5f0d | 0x80;
            _0x3a5f0d >>>= 0x7;
          }
          _0x321385[_0x33e06c] = _0x3a5f0d;
        };
        _0x19f1c7.prototype.uint32 = function (_0x440522) {
          this.len += (this.tail = this.tail.next = new _0x41e19c((_0x440522 >>>= 0x0) < 0x80 ? 0x1 : _0x440522 < 0x4000 ? 0x2 : _0x440522 < 0x200000 ? 0x3 : _0x440522 < 0x10000000 ? 0x4 : 0x5, _0x440522)).len;
          return this;
        };
        _0x19f1c7.prototype.int32 = function (_0x5e054c) {
          return _0x5e054c < 0x0 ? this._push(_0x3e31ac, 0xa, _0x8d1478.fromNumber(_0x5e054c)) : this.uint32(_0x5e054c);
        };
        _0x19f1c7.prototype.sint32 = function (_0x46a003) {
          return this.uint32((_0x46a003 << 0x1 ^ _0x46a003 >> 0x1f) >>> 0x0);
        };
        _0x19f1c7.prototype.uint64 = function (_0x4881e4) {
          var _0x39f477 = _0x8d1478.from(_0x4881e4);
          return this._push(_0x3e31ac, _0x39f477.length(), _0x39f477);
        };
        _0x19f1c7.prototype.int64 = _0x19f1c7.prototype.uint64;
        _0x19f1c7.prototype.sint64 = function (_0x270fd2) {
          var _0x1f4412 = _0x8d1478.from(_0x270fd2).zzEncode();
          return this._push(_0x3e31ac, _0x1f4412.length(), _0x1f4412);
        };
        _0x19f1c7.prototype.bool = function (_0x23643d) {
          return this._push(_0x436565, 0x1, _0x23643d ? 0x1 : 0x0);
        };
        _0x19f1c7.prototype.fixed32 = function (_0x346dd6) {
          return this._push(_0x2d5bc1, 0x4, _0x346dd6 >>> 0x0);
        };
        _0x19f1c7.prototype.sfixed32 = _0x19f1c7.prototype.fixed32;
        _0x19f1c7.prototype.fixed64 = function (_0x5aa87d) {
          var _0x3d484d = _0x8d1478.from(_0x5aa87d);
          return this._push(_0x2d5bc1, 0x4, _0x3d484d.lo)._push(_0x2d5bc1, 0x4, _0x3d484d.hi);
        };
        _0x19f1c7.prototype.sfixed64 = _0x19f1c7.prototype.fixed64;
        _0x19f1c7.prototype.float = function (_0x2cce10) {
          return this._push(_0x47d271.float.writeFloatLE, 0x4, _0x2cce10);
        };
        _0x19f1c7.prototype.double = function (_0xac8e) {
          return this._push(_0x47d271.float.writeDoubleLE, 0x8, _0xac8e);
        };
        var _0x5b8e49 = _0x47d271.Array.prototype.set ? function (_0x5ab04b, _0x3bddf5, _0x2494f1) {
          _0x3bddf5.set(_0x5ab04b, _0x2494f1);
        } : function (_0x339c92, _0x466ff0, _0xa09c16) {
          for (var _0x4a6943 = 0x0; _0x4a6943 < _0x339c92.length; ++_0x4a6943) {
            _0x466ff0[_0xa09c16 + _0x4a6943] = _0x339c92[_0x4a6943];
          }
        };
        _0x19f1c7.prototype.bytes = function (_0x118797) {
          var _0xa90c73 = _0x118797.length >>> 0x0;
          if (!_0xa90c73) {
            return this._push(_0x436565, 0x1, 0x0);
          }
          if (_0x47d271.isString(_0x118797)) {
            var _0x52641d = _0x19f1c7.alloc(_0xa90c73 = _0x33358b.length(_0x118797));
            _0x33358b.decode(_0x118797, _0x52641d, 0x0);
            _0x118797 = _0x52641d;
          }
          return this.uint32(_0xa90c73)._push(_0x5b8e49, _0xa90c73, _0x118797);
        };
        _0x19f1c7.prototype.string = function (_0x4ac4c5) {
          var _0x44019a = _0x41958b.length(_0x4ac4c5);
          return _0x44019a ? this.uint32(_0x44019a)._push(_0x41958b.write, _0x44019a, _0x4ac4c5) : this._push(_0x436565, 0x1, 0x0);
        };
        _0x19f1c7.prototype.fork = function () {
          this.states = new _0xc596f8(this);
          this.head = this.tail = new _0x3f9fd2(_0x5ad3e9, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x19f1c7.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x3f9fd2(_0x5ad3e9, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x19f1c7.prototype.ldelim = function () {
          var _0x52fa5c = this.head;
          var _0x43b181 = this.tail;
          var _0x58bccb = this.len;
          this.reset().uint32(_0x58bccb);
          if (_0x58bccb) {
            this.tail.next = _0x52fa5c.next;
            this.tail = _0x43b181;
            this.len += _0x58bccb;
          }
          return this;
        };
        _0x19f1c7.prototype.finish = function () {
          var _0xfa06f7 = this.head.next;
          var _0x1dc237 = this.constructor.alloc(this.len);
          for (var _0x120aa7 = 0x0; _0xfa06f7;) {
            _0xfa06f7.fn(_0xfa06f7.val, _0x1dc237, _0x120aa7);
            _0x120aa7 += _0xfa06f7.len;
            _0xfa06f7 = _0xfa06f7.next;
          }
          return _0x1dc237;
        };
        _0x19f1c7._configure = function (_0x2eebb8) {
          _0x512c97 = _0x2eebb8;
          _0x19f1c7.create = _0x13b594();
          _0x512c97._configure();
        };
        _0x25b998.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (_0x1f57d3, _0x289e37, _0x46d405, _0x244886, _0x343258) {
        _0x46d405.exports = _0x37208d;
        var _0x23f535 = _0x289e37("./writer");
        (_0x37208d.prototype = Object.create(_0x23f535.prototype)).constructor = _0x37208d;
        var _0x5a125e = _0x289e37("./util/minimal");
        function _0x37208d() {
          _0x23f535.call(this);
        }
        function _0x88d29b(_0x12081d, _0x5a4573, _0x46df38) {
          if (_0x12081d.length < 0x28) {
            _0x5a125e.utf8.write(_0x12081d, _0x5a4573, _0x46df38);
          } else if (_0x5a4573.utf8Write) {
            _0x5a4573.utf8Write(_0x12081d, _0x46df38);
          } else {
            _0x5a4573.write(_0x12081d, _0x46df38);
          }
        }
        _0x37208d._configure = function () {
          _0x37208d.alloc = _0x5a125e._Buffer_allocUnsafe;
          _0x37208d.writeBytesBuffer = _0x5a125e.Buffer && _0x5a125e.Buffer.prototype instanceof Uint8Array && "set" === _0x5a125e.Buffer.prototype.set.name ? function (_0x2bc319, _0x3b9328, _0x2b09a2) {
            _0x3b9328.set(_0x2bc319, _0x2b09a2);
          } : function (_0x4dceed, _0x88aeb4, _0x5f126b) {
            if (_0x4dceed.copy) {
              _0x4dceed.copy(_0x88aeb4, _0x5f126b, 0x0, _0x4dceed.length);
            } else {
              for (var _0x464b5e = 0x0; _0x464b5e < _0x4dceed.length;) {
                _0x88aeb4[_0x5f126b++] = _0x4dceed[_0x464b5e++];
              }
            }
          };
        };
        _0x37208d.prototype.bytes = function (_0x29414d) {
          if (_0x5a125e.isString(_0x29414d)) {
            _0x29414d = _0x5a125e._Buffer_from(_0x29414d, "base64");
          }
          var _0x3e1b6a = _0x29414d.length >>> 0x0;
          this.uint32(_0x3e1b6a);
          if (_0x3e1b6a) {
            this._push(_0x37208d.writeBytesBuffer, _0x3e1b6a, _0x29414d);
          }
          return this;
        };
        _0x37208d.prototype.string = function (_0x3addf8) {
          var _0xffa2cf = _0x5a125e.Buffer.byteLength(_0x3addf8);
          this.uint32(_0xffa2cf);
          if (_0xffa2cf) {
            this._push(_0x88d29b, _0xffa2cf, _0x3addf8);
          }
          return this;
        };
        _0x37208d._configure();
        _0x46d405.exports;
      }, function () {
        return {
          './writer': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x384c05, _0x44a152, _0x4a818a, _0x111ef8, _0x27a20c) {
        _0x4a818a.exports = _0x14dd48;
        var _0xd7ab19;
        var _0x397465 = _0x44a152('./util/minimal');
        var _0x8a6ad6 = _0x397465.LongBits;
        var _0x346d6e = _0x397465.utf8;
        function _0x14dd48(_0x5bc4b6) {
          this.buf = _0x5bc4b6;
          this.pos = 0x0;
          this.len = _0x5bc4b6.length;
        }
        var _0x199eec;
        var _0x2204cb = "undefined" != typeof Uint8Array ? function (_0x3e0768) {
          if (_0x3e0768 instanceof Uint8Array || Array.isArray(_0x3e0768)) {
            return new _0x14dd48(_0x3e0768);
          }
          throw Error("illegal buffer");
        } : function (_0x12b49a) {
          if (Array.isArray(_0x12b49a)) {
            return new _0x14dd48(_0x12b49a);
          }
          throw Error("illegal buffer");
        };
        var _0x2fc13f = function () {
          return _0x397465.Buffer ? function (_0x5d799e) {
            return (_0x14dd48.create = function (_0x4e69c3) {
              return _0x397465.Buffer.isBuffer(_0x4e69c3) ? new _0xd7ab19(_0x4e69c3) : _0x2204cb(_0x4e69c3);
            })(_0x5d799e);
          } : _0x2204cb;
        };
        function _0x1ededc() {
          var _0x31c6c4 = new _0x8a6ad6(0x0, 0x0);
          var _0xa983d7 = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0xa983d7 < 0x3; ++_0xa983d7) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x31c6c4.lo = (_0x31c6c4.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0xa983d7) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x31c6c4;
              }
            }
            _0x31c6c4.lo = (_0x31c6c4.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0xa983d7) >>> 0x0;
            return _0x31c6c4;
          }
          for (; _0xa983d7 < 0x4; ++_0xa983d7) {
            _0x31c6c4.lo = (_0x31c6c4.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0xa983d7) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x31c6c4;
            }
          }
          _0x31c6c4.lo = (_0x31c6c4.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x31c6c4.hi = (_0x31c6c4.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x31c6c4;
          }
          _0xa983d7 = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0xa983d7 < 0x5; ++_0xa983d7) {
              _0x31c6c4.hi = (_0x31c6c4.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0xa983d7 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x31c6c4;
              }
            }
          } else {
            for (; _0xa983d7 < 0x5; ++_0xa983d7) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x31c6c4.hi = (_0x31c6c4.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0xa983d7 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x31c6c4;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0xa569e3() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x8a6ad6((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x14dd48.create = _0x2fc13f();
        _0x14dd48.prototype._slice = _0x397465.Array.prototype.subarray || _0x397465.Array.prototype.slice;
        _0x199eec = 0xffffffff;
        _0x14dd48.prototype.uint32 = function () {
          _0x199eec = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x199eec;
          }
          _0x199eec = (_0x199eec | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x199eec;
          }
          _0x199eec = (_0x199eec | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x199eec;
          }
          _0x199eec = (_0x199eec | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x199eec;
          }
          _0x199eec = (_0x199eec | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x199eec;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x199eec;
        };
        _0x14dd48.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x14dd48.prototype.sint32 = function () {
          var _0x2dc9bb = this.uint32();
          return _0x2dc9bb >>> 0x1 ^ -(0x1 & _0x2dc9bb) | 0x0;
        };
        _0x14dd48.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x14dd48.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x14dd48.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x14dd48.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x14cccc = _0x397465.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x14cccc;
        };
        _0x14dd48.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x289fdc = _0x397465.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x289fdc;
        };
        _0x14dd48.prototype.bytes = function () {
          var _0x1ccb41 = this.uint32();
          var _0x2da508 = this.pos;
          var _0x4cb1b8 = this.pos + _0x1ccb41;
          if (_0x4cb1b8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x1ccb41 || 0x1) + " > " + this.len);
          }
          this.pos += _0x1ccb41;
          return Array.isArray(this.buf) ? this.buf.slice(_0x2da508, _0x4cb1b8) : _0x2da508 === _0x4cb1b8 ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x2da508, _0x4cb1b8);
        };
        _0x14dd48.prototype.string = function () {
          var _0x155e70 = this.bytes();
          return _0x346d6e.read(_0x155e70, 0x0, _0x155e70.length);
        };
        _0x14dd48.prototype.skip = function (_0x5c72f2) {
          if ("number" == typeof _0x5c72f2) {
            if (this.pos + _0x5c72f2 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x5c72f2 || 0x1) + " > " + this.len);
            }
            this.pos += _0x5c72f2;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x14dd48.prototype.skipType = function (_0x3fbade) {
          switch (_0x3fbade) {
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
              for (; 0x4 != (_0x3fbade = 0x7 & this.uint32());) {
                this.skipType(_0x3fbade);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x3fbade + " at offset " + this.pos);
          }
          return this;
        };
        _0x14dd48._configure = function (_0x406eee) {
          _0xd7ab19 = _0x406eee;
          _0x14dd48.create = _0x2fc13f();
          _0xd7ab19._configure();
          var _0x1357c8 = _0x397465.Long ? 'toLong' : "toNumber";
          _0x397465.merge(_0x14dd48.prototype, {
            'int64': function () {
              return _0x1ededc.call(this)[_0x1357c8](false);
            },
            'uint64': function () {
              return _0x1ededc.call(this)[_0x1357c8](true);
            },
            'sint64': function () {
              return _0x1ededc.call(this).zzDecode()[_0x1357c8](false);
            },
            'fixed64': function () {
              return _0xa569e3.call(this)[_0x1357c8](true);
            },
            'sfixed64': function () {
              return _0xa569e3.call(this)[_0x1357c8](false);
            }
          });
        };
        _0x4a818a.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x1d66ea, _0x132643, _0x2c4207, _0x20c13b, _0x2ae9c4) {
        _0x2c4207.exports = _0x1f75ca;
        var _0x547f51 = _0x132643('./reader');
        (_0x1f75ca.prototype = Object.create(_0x547f51.prototype)).constructor = _0x1f75ca;
        var _0x3d04b2 = _0x132643("./util/minimal");
        function _0x1f75ca(_0x154627) {
          _0x547f51.call(this, _0x154627);
        }
        _0x1f75ca._configure = function () {
          if (_0x3d04b2.Buffer) {
            _0x1f75ca.prototype._slice = _0x3d04b2.Buffer.prototype.slice;
          }
        };
        _0x1f75ca.prototype.string = function () {
          var _0x581b54 = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x581b54, this.len)) : this.buf.toString('utf-8', this.pos, this.pos = Math.min(this.pos + _0x581b54, this.len));
        };
        _0x1f75ca._configure();
        _0x2c4207.exports;
      }, function () {
        return {
          './reader': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (_0x271ff9, _0x58f831, _0x1cab4d, _0x292cf0, _0x96e5de) {
        _0x1cab4d.exports = _0x465b45;
        var _0x44dd6b = _0x58f831("../util/minimal");
        function _0x465b45(_0x2ea978, _0x65e7b1, _0x5a2620) {
          if ("function" != typeof _0x2ea978) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x44dd6b.EventEmitter.call(this);
          this.rpcImpl = _0x2ea978;
          this.requestDelimited = Boolean(_0x65e7b1);
          this.responseDelimited = Boolean(_0x5a2620);
        }
        (_0x465b45.prototype = Object.create(_0x44dd6b.EventEmitter.prototype)).constructor = _0x465b45;
        _0x465b45.prototype.rpcCall = function _0x1aa367(_0x35c1c7, _0x85b944, _0x282ea0, _0x26ff27, _0x517e7c) {
          if (!_0x26ff27) {
            throw TypeError("request must be specified");
          }
          var _0x55b119 = this;
          if (!_0x517e7c) {
            return _0x44dd6b.asPromise(_0x1aa367, _0x55b119, _0x35c1c7, _0x85b944, _0x282ea0, _0x26ff27);
          }
          if (_0x55b119.rpcImpl) {
            try {
              return _0x55b119.rpcImpl(_0x35c1c7, _0x85b944[_0x55b119.requestDelimited ? "encodeDelimited" : "encode"](_0x26ff27).finish(), function (_0x522c49, _0x5b587c) {
                if (_0x522c49) {
                  _0x55b119.emit('error', _0x522c49, _0x35c1c7);
                  return _0x517e7c(_0x522c49);
                }
                if (null !== _0x5b587c) {
                  if (!(_0x5b587c instanceof _0x282ea0)) {
                    try {
                      _0x5b587c = _0x282ea0[_0x55b119.responseDelimited ? "decodeDelimited" : "decode"](_0x5b587c);
                    } catch (_0xd1c5f8) {
                      _0x55b119.emit('error', _0xd1c5f8, _0x35c1c7);
                      return _0x517e7c(_0xd1c5f8);
                    }
                  }
                  _0x55b119.emit("data", _0x5b587c, _0x35c1c7);
                  return _0x517e7c(null, _0x5b587c);
                }
                _0x55b119.end(true);
              });
            } catch (_0x3fa805) {
              _0x55b119.emit("error", _0x3fa805, _0x35c1c7);
              return void setTimeout(function () {
                _0x517e7c(_0x3fa805);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x517e7c(Error("already ended"));
            }, 0x0);
          }
        };
        _0x465b45.prototype.end = function (_0x409dd4) {
          if (this.rpcImpl) {
            if (!_0x409dd4) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        _0x1cab4d.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (_0x139089, _0x3ad0b7, _0x56674c, _0x797bb3, _0x330ab4) {
        _0x139089.Service = _0x3ad0b7("./rpc/service");
        _0x56674c.exports;
      }, function () {
        return {
          './rpc/service': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (_0x379174, _0x1b2c90, _0x51b998, _0x482000, _0x5d99ab) {
        _0x51b998.exports = {};
        _0x51b998.exports;
      }, {});
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x51e9a5, _0x26fc10, _0x34f8fc, _0x10975a, _0x2354e7) {
        function _0x1eaaa5() {
          _0x51e9a5.util._configure();
          _0x51e9a5.Writer._configure(_0x51e9a5.BufferWriter);
          _0x51e9a5.Reader._configure(_0x51e9a5.BufferReader);
        }
        _0x51e9a5.build = "minimal";
        _0x51e9a5.Writer = _0x26fc10("./writer");
        _0x51e9a5.BufferWriter = _0x26fc10('./writer_buffer');
        _0x51e9a5.Reader = _0x26fc10("./reader");
        _0x51e9a5.BufferReader = _0x26fc10("./reader_buffer");
        _0x51e9a5.util = _0x26fc10("./util/minimal");
        _0x51e9a5.rpc = _0x26fc10('./rpc');
        _0x51e9a5.roots = _0x26fc10("./roots");
        _0x51e9a5.configure = _0x1eaaa5;
        _0x1eaaa5();
        _0x34f8fc.exports;
      }, function () {
        return {
          './writer': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './writer_buffer': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          './reader': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          './roots': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0x5a4c2e, _0x259bb8, _0x4ef334, _0x58c4ca, _0x8373d0) {
        function _0x3ca6c4(_0x5f1738, _0x2edccd) {
          if ("string" == typeof _0x5f1738) {
            _0x2edccd = _0x5f1738;
            _0x5f1738 = undefined;
          }
          var _0x484bf7 = [];
          function _0x56114e(_0xaaa9de) {
            if ("string" != typeof _0xaaa9de) {
              var _0x51823d = "function " + (undefined || _0x2edccd || '') + '(' + (_0x5f1738 && _0x5f1738.join(',') || '') + "){\n  " + _0x484bf7.join("\n  ") + "\n}";
              if (_0x3ca6c4.verbose) {
                console.log("codegen: " + _0x51823d);
              }
              _0x51823d = "return " + _0x51823d;
              if (_0xaaa9de) {
                var _0x6222a7 = Object.keys(_0xaaa9de);
                var _0x12802c = new Array(_0x6222a7.length + 0x1);
                var _0xf49578 = new Array(_0x6222a7.length);
                for (var _0x59bc7c = 0x0; _0x59bc7c < _0x6222a7.length;) {
                  _0x12802c[_0x59bc7c] = _0x6222a7[_0x59bc7c];
                  _0xf49578[_0x59bc7c] = _0xaaa9de[_0x6222a7[_0x59bc7c++]];
                }
                _0x12802c[_0x59bc7c] = _0x51823d;
                return Function.apply(null, _0x12802c).apply(null, _0xf49578);
              }
              return Function(_0x51823d)();
            }
            var _0x56f942 = new Array(arguments.length - 0x1);
            for (var _0x218842 = 0x0; _0x218842 < _0x56f942.length;) {
              _0x56f942[_0x218842] = arguments[++_0x218842];
            }
            _0x218842 = 0x0;
            _0xaaa9de = _0xaaa9de.replace(/%([%dfijs])/g, function (_0x41bebd, _0x3fc533) {
              var _0x33b17b = _0x56f942[_0x218842++];
              switch (_0x3fc533) {
                case 'd':
                case 'f':
                  return String(Number(_0x33b17b));
                case 'i':
                  return String(Math.floor(_0x33b17b));
                case 'j':
                  return JSON.stringify(_0x33b17b);
                case 's':
                  return String(_0x33b17b);
              }
              return '%';
            });
            if (_0x218842 !== _0x56f942.length) {
              throw Error("parameter count mismatch");
            }
            _0x484bf7.push(_0xaaa9de);
            return _0x56114e;
          }
          function _0x3f320a(_0xf2bc78) {
            return "function " + (_0xf2bc78 || _0x2edccd || '') + '(' + (_0x5f1738 && _0x5f1738.join(',') || '') + "){\n  " + _0x484bf7.join("\n  ") + "\n}";
          }
          _0x56114e.toString = _0x3f320a;
          return _0x56114e;
        }
        _0x4ef334.exports = _0x3ca6c4;
        _0x3ca6c4.verbose = false;
        _0x4ef334.exports;
      }, {});
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (_0x22f8d5, _0x14a1b6, _0x521c2a, _0x6ee4e, _0x533508) {
        _0x521c2a.exports = _0x36b28b;
        var _0x2efd4c = _0x14a1b6("@protobufjs/aspromise");
        var _0x4f8cb1 = _0x14a1b6("@protobufjs/inquire")('fs');
        function _0x36b28b(_0x388e1f, _0x38196a, _0x502485) {
          if ("function" == typeof _0x38196a) {
            _0x502485 = _0x38196a;
            _0x38196a = {};
          } else if (!_0x38196a) {
            _0x38196a = {};
          }
          return _0x502485 ? !_0x38196a.xhr && _0x4f8cb1 && _0x4f8cb1.readFile ? _0x4f8cb1.readFile(_0x388e1f, function (_0x4bec41, _0x447f07) {
            return _0x4bec41 && 'undefined' != typeof XMLHttpRequest ? _0x36b28b.xhr(_0x388e1f, _0x38196a, _0x502485) : _0x4bec41 ? _0x502485(_0x4bec41) : _0x502485(null, _0x38196a.binary ? _0x447f07 : _0x447f07.toString("utf8"));
          }) : _0x36b28b.xhr(_0x388e1f, _0x38196a, _0x502485) : _0x2efd4c(_0x36b28b, this, _0x388e1f, _0x38196a);
        }
        _0x36b28b.xhr = function (_0x361089, _0x37516b, _0x12970c) {
          var _0x2dfa2e = new XMLHttpRequest();
          _0x2dfa2e.onreadystatechange = function () {
            if (0x4 === _0x2dfa2e.readyState) {
              if (0x0 !== _0x2dfa2e.status && 0xc8 !== _0x2dfa2e.status) {
                return _0x12970c(Error("status " + _0x2dfa2e.status));
              }
              if (_0x37516b.binary) {
                var _0x1fc2d8 = _0x2dfa2e.response;
                if (!_0x1fc2d8) {
                  _0x1fc2d8 = [];
                  for (var _0x3dfe15 = 0x0; _0x3dfe15 < _0x2dfa2e.responseText.length; ++_0x3dfe15) {
                    _0x1fc2d8.push(0xff & _0x2dfa2e.responseText.charCodeAt(_0x3dfe15));
                  }
                }
                return _0x12970c(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x1fc2d8) : _0x1fc2d8);
              }
              return _0x12970c(null, _0x2dfa2e.responseText);
            }
          };
          if (_0x37516b.binary) {
            if ('overrideMimeType' in _0x2dfa2e) {
              _0x2dfa2e.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x2dfa2e.responseType = "arraybuffer";
          }
          _0x2dfa2e.open('GET', _0x361089);
          _0x2dfa2e.send();
        };
        _0x521c2a.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js'
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (_0x706dda, _0x4e6d7a, _0x247b1c, _0x328b6d, _0x389d1a) {
        var _0x33361f = _0x706dda.isAbsolute = function (_0x5ac3ff) {
          return /^(?:\/|\w+:)/.test(_0x5ac3ff);
        };
        var _0x148081 = _0x706dda.normalize = function (_0x255a2a) {
          var _0x273de5 = (_0x255a2a = _0x255a2a.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x1d9a0e = _0x33361f(_0x255a2a);
          var _0x1d6f66 = '';
          if (_0x1d9a0e) {
            _0x1d6f66 = _0x273de5.shift() + '/';
          }
          for (var _0x31596b = 0x0; _0x31596b < _0x273de5.length;) {
            if ('..' === _0x273de5[_0x31596b]) {
              if (_0x31596b > 0x0 && '..' !== _0x273de5[_0x31596b - 0x1]) {
                _0x273de5.splice(--_0x31596b, 0x2);
              } else if (_0x1d9a0e) {
                _0x273de5.splice(_0x31596b, 0x1);
              } else {
                ++_0x31596b;
              }
            } else if ('.' === _0x273de5[_0x31596b]) {
              _0x273de5.splice(_0x31596b, 0x1);
            } else {
              ++_0x31596b;
            }
          }
          return _0x1d6f66 + _0x273de5.join('/');
        };
        _0x706dda.resolve = function (_0x467001, _0x46cce3, _0x2e4f98) {
          if (!_0x2e4f98) {
            _0x46cce3 = _0x148081(_0x46cce3);
          }
          return _0x33361f(_0x46cce3) ? _0x46cce3 : (_0x2e4f98 || (_0x467001 = _0x148081(_0x467001)), (_0x467001 = _0x467001.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x148081(_0x467001 + '/' + _0x46cce3) : _0x46cce3);
        };
        _0x247b1c.exports;
      }, {});
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0x59153b, _0x524d41, _0x426712, _0x1a5130, _0x3b0b43) {
        var _0x2fb937 = _0x524d41("./util");
        var _0x1d0dd0 = ['double', "float", 'int32', 'uint32', "sint32", "fixed32", "sfixed32", "int64", "uint64", 'sint64', "fixed64", 'sfixed64', "bool", "string", "bytes"];
        function _0x2b0f5b(_0x420532, _0x333be6) {
          var _0x1671dc = 0x0;
          var _0xec2aa5 = {};
          for (_0x333be6 |= 0x0; _0x1671dc < _0x420532.length;) {
            _0xec2aa5[_0x1d0dd0[_0x1671dc + _0x333be6]] = _0x420532[_0x1671dc++];
          }
          return _0xec2aa5;
        }
        _0x59153b.basic = _0x2b0f5b([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x59153b.defaults = _0x2b0f5b([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x2fb937.emptyArray, null]);
        _0x59153b.long = _0x2b0f5b([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x59153b.mapKey = _0x2b0f5b([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x59153b.packed = _0x2b0f5b([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x426712.exports;
      }, function () {
        return {
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0x259511, _0x5cd884, _0x50eac1, _0x29ddff, _0x22cc4b) {
        _0x50eac1.exports = _0x29bc21;
        var _0x293664 = _0x5cd884("./object");
        ((_0x29bc21.prototype = Object.create(_0x293664.prototype)).constructor = _0x29bc21).className = "Field";
        var _0x490a06;
        var _0x1005df = _0x5cd884("./enum");
        var _0x4faf11 = _0x5cd884("./types");
        var _0x5e4fd3 = _0x5cd884("./util");
        var _0xe6cc3f = /^required|optional|repeated$/;
        function _0x29bc21(_0x1cad66, _0x470649, _0x3f9ec0, _0x46ffa8, _0x3709ed, _0x4db726, _0x3e7958) {
          if (_0x5e4fd3.isObject(_0x46ffa8)) {
            _0x3e7958 = _0x3709ed;
            _0x4db726 = _0x46ffa8;
            _0x46ffa8 = _0x3709ed = undefined;
          } else if (_0x5e4fd3.isObject(_0x3709ed)) {
            _0x3e7958 = _0x4db726;
            _0x4db726 = _0x3709ed;
            _0x3709ed = undefined;
          }
          _0x293664.call(this, _0x1cad66, _0x4db726);
          if (!_0x5e4fd3.isInteger(_0x470649) || _0x470649 < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x5e4fd3.isString(_0x3f9ec0)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x46ffa8 && !_0xe6cc3f.test(_0x46ffa8 = _0x46ffa8.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x3709ed && !_0x5e4fd3.isString(_0x3709ed)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === _0x46ffa8) {
            _0x46ffa8 = 'optional';
          }
          this.rule = _0x46ffa8 && "optional" !== _0x46ffa8 ? _0x46ffa8 : undefined;
          this.type = _0x3f9ec0;
          this.id = _0x470649;
          this.extend = _0x3709ed || undefined;
          this.required = "required" === _0x46ffa8;
          this.optional = !this.required;
          this.repeated = "repeated" === _0x46ffa8;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x5e4fd3.Long && undefined !== _0x4faf11.long[_0x3f9ec0];
          this.bytes = 'bytes' === _0x3f9ec0;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x3e7958;
        }
        _0x29bc21.fromJSON = function (_0x4cd536, _0x27949d) {
          return new _0x29bc21(_0x4cd536, _0x27949d.id, _0x27949d.type, _0x27949d.rule, _0x27949d.extend, _0x27949d.options, _0x27949d.comment);
        };
        Object.defineProperty(_0x29bc21.prototype, 'packed', {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption('packed');
            }
            return this._packed;
          }
        });
        _0x29bc21.prototype.setOption = function (_0x5d6381, _0x292bd6, _0x54996b) {
          if ('packed' === _0x5d6381) {
            this._packed = null;
          }
          return _0x293664.prototype.setOption.call(this, _0x5d6381, _0x292bd6, _0x54996b);
        };
        _0x29bc21.prototype.toJSON = function (_0x2a2afc) {
          var _0x311577 = !!_0x2a2afc && Boolean(_0x2a2afc.keepComments);
          return _0x5e4fd3.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, "comment", _0x311577 ? this.comment : undefined]);
        };
        _0x29bc21.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x4faf11.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x490a06) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options["default"]) {
            this.typeDefault = this.options["default"];
            if (this.resolvedType instanceof _0x1005df && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x1005df))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x5e4fd3.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && "string" == typeof this.typeDefault) {
              var _0x57ba94;
              if (_0x5e4fd3.base64.test(this.typeDefault)) {
                _0x5e4fd3.base64.decode(this.typeDefault, _0x57ba94 = _0x5e4fd3.newBuffer(_0x5e4fd3.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x5e4fd3.utf8.write(this.typeDefault, _0x57ba94 = _0x5e4fd3.newBuffer(_0x5e4fd3.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x57ba94;
            }
          }
          if (this.map) {
            this.defaultValue = _0x5e4fd3.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x5e4fd3.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x490a06) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x293664.prototype.resolve.call(this);
        };
        _0x29bc21.d = function (_0x536640, _0x3097be, _0xcde00f, _0x449ef6) {
          if ("function" == typeof _0x3097be) {
            _0x3097be = _0x5e4fd3.decorateType(_0x3097be).name;
          } else if (_0x3097be && "object" == typeof _0x3097be) {
            _0x3097be = _0x5e4fd3.decorateEnum(_0x3097be).name;
          }
          return function (_0x25073d, _0x46a0a4) {
            _0x5e4fd3.decorateType(_0x25073d.constructor).add(new _0x29bc21(_0x46a0a4, _0x536640, _0x3097be, _0xcde00f, {
              'default': _0x449ef6
            }));
          };
        };
        _0x29bc21._configure = function (_0x49663a) {
          _0x490a06 = _0x49663a;
        };
        _0x50eac1.exports;
      }, function () {
        return {
          './object': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (_0x48bdc2, _0x20951c, _0x1934dc, _0x375b3e, _0x2aabd6) {
        _0x1934dc.exports = _0x49c7f2;
        var _0x4264fb = _0x20951c('./object');
        ((_0x49c7f2.prototype = Object.create(_0x4264fb.prototype)).constructor = _0x49c7f2).className = "OneOf";
        var _0x413fcd = _0x20951c("./field");
        var _0x1a5aaa = _0x20951c('./util');
        function _0x49c7f2(_0x214cc6, _0x4e9279, _0xc4bd90, _0x233b4f) {
          if (!Array.isArray(_0x4e9279)) {
            _0xc4bd90 = _0x4e9279;
            _0x4e9279 = undefined;
          }
          _0x4264fb.call(this, _0x214cc6, _0xc4bd90);
          if (undefined !== _0x4e9279 && !Array.isArray(_0x4e9279)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x4e9279 || [];
          this.fieldsArray = [];
          this.comment = _0x233b4f;
        }
        function _0x5816a0(_0x225a7d) {
          if (_0x225a7d.parent) {
            for (var _0x35e624 = 0x0; _0x35e624 < _0x225a7d.fieldsArray.length; ++_0x35e624) {
              if (!_0x225a7d.fieldsArray[_0x35e624].parent) {
                _0x225a7d.parent.add(_0x225a7d.fieldsArray[_0x35e624]);
              }
            }
          }
        }
        _0x49c7f2.fromJSON = function (_0x2da724, _0x5574bb) {
          return new _0x49c7f2(_0x2da724, _0x5574bb.oneof, _0x5574bb.options, _0x5574bb.comment);
        };
        _0x49c7f2.prototype.toJSON = function (_0x200078) {
          var _0x5e5283 = !!_0x200078 && Boolean(_0x200078.keepComments);
          return _0x1a5aaa.toObject(["options", this.options, "oneof", this.oneof, "comment", _0x5e5283 ? this.comment : undefined]);
        };
        _0x49c7f2.prototype.add = function (_0x4f6f9f) {
          if (!(_0x4f6f9f instanceof _0x413fcd)) {
            throw TypeError("field must be a Field");
          }
          if (_0x4f6f9f.parent && _0x4f6f9f.parent !== this.parent) {
            _0x4f6f9f.parent.remove(_0x4f6f9f);
          }
          this.oneof.push(_0x4f6f9f.name);
          this.fieldsArray.push(_0x4f6f9f);
          _0x4f6f9f.partOf = this;
          _0x5816a0(this);
          return this;
        };
        _0x49c7f2.prototype.remove = function (_0x5a999a) {
          if (!(_0x5a999a instanceof _0x413fcd)) {
            throw TypeError("field must be a Field");
          }
          var _0x5bef36 = this.fieldsArray.indexOf(_0x5a999a);
          if (_0x5bef36 < 0x0) {
            throw Error(_0x5a999a + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x5bef36, 0x1);
          if ((_0x5bef36 = this.oneof.indexOf(_0x5a999a.name)) > -0x1) {
            this.oneof.splice(_0x5bef36, 0x1);
          }
          _0x5a999a.partOf = null;
          return this;
        };
        _0x49c7f2.prototype.onAdd = function (_0x5a5ca7) {
          _0x4264fb.prototype.onAdd.call(this, _0x5a5ca7);
          for (var _0x3bdd87 = 0x0; _0x3bdd87 < this.oneof.length; ++_0x3bdd87) {
            var _0x562ee5 = _0x5a5ca7.get(this.oneof[_0x3bdd87]);
            if (_0x562ee5 && !_0x562ee5.partOf) {
              _0x562ee5.partOf = this;
              this.fieldsArray.push(_0x562ee5);
            }
          }
          _0x5816a0(this);
        };
        _0x49c7f2.prototype.onRemove = function (_0x34a278) {
          var _0xc4fdff;
          for (var _0xa7f91 = 0x0; _0xa7f91 < this.fieldsArray.length; ++_0xa7f91) {
            if ((_0xc4fdff = this.fieldsArray[_0xa7f91]).parent) {
              _0xc4fdff.parent.remove(_0xc4fdff);
            }
          }
          _0x4264fb.prototype.onRemove.call(this, _0x34a278);
        };
        _0x49c7f2.d = function () {
          var _0x1a5f4b = new Array(arguments.length);
          for (var _0x1053f9 = 0x0; _0x1053f9 < arguments.length;) {
            _0x1a5f4b[_0x1053f9] = arguments[_0x1053f9++];
          }
          return function (_0x1f23c6, _0x20e316) {
            _0x1a5aaa.decorateType(_0x1f23c6.constructor).add(new _0x49c7f2(_0x20e316, _0x1a5f4b));
            Object.defineProperty(_0x1f23c6, _0x20e316, {
              'get': _0x1a5aaa.oneOfGetter(_0x1a5f4b),
              'set': _0x1a5aaa.oneOfSetter(_0x1a5f4b)
            });
          };
        };
        _0x1934dc.exports;
      }, function () {
        return {
          './object': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0x6c143d, _0x3a8411, _0xc815aa, _0x244d10, _0x41796b) {
        _0xc815aa.exports = _0x1b3993;
        var _0x13c850 = _0x3a8411("./object");
        ((_0x1b3993.prototype = Object.create(_0x13c850.prototype)).constructor = _0x1b3993).className = "Namespace";
        var _0x33fd99;
        var _0x26f94b;
        var _0x4555af;
        var _0x219382 = _0x3a8411("./field");
        var _0x54b72d = _0x3a8411("./oneof");
        var _0x29c395 = _0x3a8411('./util');
        function _0x44c071(_0x589bd2, _0x57e08d) {
          if (_0x589bd2 && _0x589bd2.length) {
            var _0x53963c = {};
            for (var _0x1c8cfc = 0x0; _0x1c8cfc < _0x589bd2.length; ++_0x1c8cfc) {
              _0x53963c[_0x589bd2[_0x1c8cfc].name] = _0x589bd2[_0x1c8cfc].toJSON(_0x57e08d);
            }
            return _0x53963c;
          }
        }
        function _0x1b3993(_0x3716bf, _0x2f88c6) {
          _0x13c850.call(this, _0x3716bf, _0x2f88c6);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x2b31a1(_0x4c723a) {
          _0x4c723a._nestedArray = null;
          return _0x4c723a;
        }
        _0x1b3993.fromJSON = function (_0x1c9921, _0x362c0f) {
          return new _0x1b3993(_0x1c9921, _0x362c0f.options).addJSON(_0x362c0f.nested);
        };
        _0x1b3993.arrayToJSON = _0x44c071;
        _0x1b3993.isReservedId = function (_0x17c975, _0x59b0a5) {
          if (_0x17c975) {
            for (var _0xcea063 = 0x0; _0xcea063 < _0x17c975.length; ++_0xcea063) {
              if ('string' != typeof _0x17c975[_0xcea063] && _0x17c975[_0xcea063][0x0] <= _0x59b0a5 && _0x17c975[_0xcea063][0x1] > _0x59b0a5) {
                return true;
              }
            }
          }
          return false;
        };
        _0x1b3993.isReservedName = function (_0x29ddd5, _0xa7f736) {
          if (_0x29ddd5) {
            for (var _0x3c4604 = 0x0; _0x3c4604 < _0x29ddd5.length; ++_0x3c4604) {
              if (_0x29ddd5[_0x3c4604] === _0xa7f736) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x1b3993.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x29c395.toArray(this.nested));
          }
        });
        _0x1b3993.prototype.toJSON = function (_0x162328) {
          return _0x29c395.toObject(["options", this.options, "nested", _0x44c071(this.nestedArray, _0x162328)]);
        };
        _0x1b3993.prototype.addJSON = function (_0xcd3c6f) {
          if (_0xcd3c6f) {
            var _0x2afc3b;
            var _0x4bafdb = Object.keys(_0xcd3c6f);
            for (var _0x34a21a = 0x0; _0x34a21a < _0x4bafdb.length; ++_0x34a21a) {
              _0x2afc3b = _0xcd3c6f[_0x4bafdb[_0x34a21a]];
              this.add((undefined !== _0x2afc3b.fields ? _0x33fd99.fromJSON : undefined !== _0x2afc3b.values ? _0x4555af.fromJSON : undefined !== _0x2afc3b.methods ? _0x26f94b.fromJSON : undefined !== _0x2afc3b.id ? _0x219382.fromJSON : _0x1b3993.fromJSON)(_0x4bafdb[_0x34a21a], _0x2afc3b));
            }
          }
          return this;
        };
        _0x1b3993.prototype.get = function (_0x4e41e2) {
          return this.nested && this.nested[_0x4e41e2] || null;
        };
        _0x1b3993.prototype.getEnum = function (_0x5531bd) {
          if (this.nested && this.nested[_0x5531bd] instanceof _0x4555af) {
            return this.nested[_0x5531bd].values;
          }
          throw Error("no such enum: " + _0x5531bd);
        };
        _0x1b3993.prototype.add = function (_0xc755ce) {
          if (!(_0xc755ce instanceof _0x219382 && undefined !== _0xc755ce.extend || _0xc755ce instanceof _0x33fd99 || _0xc755ce instanceof _0x4555af || _0xc755ce instanceof _0x26f94b || _0xc755ce instanceof _0x1b3993 || _0xc755ce instanceof _0x54b72d)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x4f212b = this.get(_0xc755ce.name);
            if (_0x4f212b) {
              if (!(_0x4f212b instanceof _0x1b3993 && _0xc755ce instanceof _0x1b3993) || _0x4f212b instanceof _0x33fd99 || _0x4f212b instanceof _0x26f94b) {
                throw Error("duplicate name '" + _0xc755ce.name + "' in " + this);
              }
              var _0x1e4d2a = _0x4f212b.nestedArray;
              for (var _0x1f9ee6 = 0x0; _0x1f9ee6 < _0x1e4d2a.length; ++_0x1f9ee6) {
                _0xc755ce.add(_0x1e4d2a[_0x1f9ee6]);
              }
              this.remove(_0x4f212b);
              if (!this.nested) {
                this.nested = {};
              }
              _0xc755ce.setOptions(_0x4f212b.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0xc755ce.name] = _0xc755ce;
          _0xc755ce.onAdd(this);
          return _0x2b31a1(this);
        };
        _0x1b3993.prototype.remove = function (_0x2e8f36) {
          if (!(_0x2e8f36 instanceof _0x13c850)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x2e8f36.parent !== this) {
            throw Error(_0x2e8f36 + " is not a member of " + this);
          }
          delete this.nested[_0x2e8f36.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x2e8f36.onRemove(this);
          return _0x2b31a1(this);
        };
        _0x1b3993.prototype.define = function (_0x5a88a6, _0x24adad) {
          if (_0x29c395.isString(_0x5a88a6)) {
            _0x5a88a6 = _0x5a88a6.split('.');
          } else {
            if (!Array.isArray(_0x5a88a6)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x5a88a6 && _0x5a88a6.length && '' === _0x5a88a6[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x2d139a = this; _0x5a88a6.length > 0x0;) {
            var _0xfdb19f = _0x5a88a6.shift();
            if (_0x2d139a.nested && _0x2d139a.nested[_0xfdb19f]) {
              if (!((_0x2d139a = _0x2d139a.nested[_0xfdb19f]) instanceof _0x1b3993)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x2d139a.add(_0x2d139a = new _0x1b3993(_0xfdb19f));
            }
          }
          if (_0x24adad) {
            _0x2d139a.addJSON(_0x24adad);
          }
          return _0x2d139a;
        };
        _0x1b3993.prototype.resolveAll = function () {
          var _0x30721e = this.nestedArray;
          for (var _0x239edf = 0x0; _0x239edf < _0x30721e.length;) {
            if (_0x30721e[_0x239edf] instanceof _0x1b3993) {
              _0x30721e[_0x239edf++].resolveAll();
            } else {
              _0x30721e[_0x239edf++].resolve();
            }
          }
          return this.resolve();
        };
        _0x1b3993.prototype.lookup = function (_0x22de6d, _0xecc7e8, _0x3ec649) {
          if ("boolean" == typeof _0xecc7e8) {
            _0x3ec649 = _0xecc7e8;
            _0xecc7e8 = undefined;
          } else if (_0xecc7e8 && !Array.isArray(_0xecc7e8)) {
            _0xecc7e8 = [_0xecc7e8];
          }
          if (_0x29c395.isString(_0x22de6d) && _0x22de6d.length) {
            if ('.' === _0x22de6d) {
              return this.root;
            }
            _0x22de6d = _0x22de6d.split('.');
          } else {
            if (!_0x22de6d.length) {
              return this;
            }
          }
          if ('' === _0x22de6d[0x0]) {
            return this.root.lookup(_0x22de6d.slice(0x1), _0xecc7e8);
          }
          var _0x5f195a = this.get(_0x22de6d[0x0]);
          if (_0x5f195a) {
            if (0x1 === _0x22de6d.length) {
              if (!_0xecc7e8 || _0xecc7e8.indexOf(_0x5f195a.constructor) > -0x1) {
                return _0x5f195a;
              }
            } else {
              if (_0x5f195a instanceof _0x1b3993 && (_0x5f195a = _0x5f195a.lookup(_0x22de6d.slice(0x1), _0xecc7e8, true))) {
                return _0x5f195a;
              }
            }
          } else {
            for (var _0x240bf4 = 0x0; _0x240bf4 < this.nestedArray.length; ++_0x240bf4) {
              if (this._nestedArray[_0x240bf4] instanceof _0x1b3993 && (_0x5f195a = this._nestedArray[_0x240bf4].lookup(_0x22de6d, _0xecc7e8, true))) {
                return _0x5f195a;
              }
            }
          }
          return null === this.parent || _0x3ec649 ? null : this.parent.lookup(_0x22de6d, _0xecc7e8);
        };
        _0x1b3993.prototype.lookupType = function (_0xe4115f) {
          var _0x15e3cb = this.lookup(_0xe4115f, [_0x33fd99]);
          if (!_0x15e3cb) {
            throw Error("no such type: " + _0xe4115f);
          }
          return _0x15e3cb;
        };
        _0x1b3993.prototype.lookupEnum = function (_0x4d0b64) {
          var _0x4198d8 = this.lookup(_0x4d0b64, [_0x4555af]);
          if (!_0x4198d8) {
            throw Error("no such Enum '" + _0x4d0b64 + "' in " + this);
          }
          return _0x4198d8;
        };
        _0x1b3993.prototype.lookupTypeOrEnum = function (_0x271b63) {
          var _0x1121f6 = this.lookup(_0x271b63, [_0x33fd99, _0x4555af]);
          if (!_0x1121f6) {
            throw Error("no such Type or Enum '" + _0x271b63 + "' in " + this);
          }
          return _0x1121f6;
        };
        _0x1b3993.prototype.lookupService = function (_0x53c2a8) {
          var _0x1b75e1 = this.lookup(_0x53c2a8, [_0x26f94b]);
          if (!_0x1b75e1) {
            throw Error("no such Service '" + _0x53c2a8 + "' in " + this);
          }
          return _0x1b75e1;
        };
        _0x1b3993._configure = function (_0x1fb740, _0x2897c9, _0x547f5f) {
          _0x33fd99 = _0x1fb740;
          _0x26f94b = _0x2897c9;
          _0x4555af = _0x547f5f;
        };
        _0xc815aa.exports;
      }, function () {
        return {
          './object': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js', function (_0x238836, _0x16e488, _0x197d37, _0x5106be, _0xf87549) {
        _0x197d37.exports = _0x4a5fde;
        var _0x3a2fb6 = _0x16e488("./field");
        ((_0x4a5fde.prototype = Object.create(_0x3a2fb6.prototype)).constructor = _0x4a5fde).className = "MapField";
        var _0x5b92f6 = _0x16e488("./types");
        var _0x3c7c13 = _0x16e488("./util");
        function _0x4a5fde(_0x387d58, _0x48c371, _0x56be24, _0xebf767, _0x771183, _0x179a1a) {
          _0x3a2fb6.call(this, _0x387d58, _0x48c371, _0xebf767, undefined, undefined, _0x771183, _0x179a1a);
          if (!_0x3c7c13.isString(_0x56be24)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x56be24;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x4a5fde.fromJSON = function (_0x3f83fd, _0x404593) {
          return new _0x4a5fde(_0x3f83fd, _0x404593.id, _0x404593.keyType, _0x404593.type, _0x404593.options, _0x404593.comment);
        };
        _0x4a5fde.prototype.toJSON = function (_0x56cd7a) {
          var _0x5da4f7 = !!_0x56cd7a && Boolean(_0x56cd7a.keepComments);
          return _0x3c7c13.toObject(['keyType', this.keyType, "type", this.type, 'id', this.id, "extend", this.extend, 'options', this.options, 'comment', _0x5da4f7 ? this.comment : undefined]);
        };
        _0x4a5fde.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x5b92f6.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x3a2fb6.prototype.resolve.call(this);
        };
        _0x4a5fde.d = function (_0x513445, _0x2c7631, _0x72d082) {
          if ('function' == typeof _0x72d082) {
            _0x72d082 = _0x3c7c13.decorateType(_0x72d082).name;
          } else if (_0x72d082 && "object" == typeof _0x72d082) {
            _0x72d082 = _0x3c7c13.decorateEnum(_0x72d082).name;
          }
          return function (_0x3b4d7f, _0x246964) {
            _0x3c7c13.decorateType(_0x3b4d7f.constructor).add(new _0x4a5fde(_0x246964, _0x513445, _0x2c7631, _0x72d082));
          };
        };
        _0x197d37.exports;
      }, function () {
        return {
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (_0x17f2f2, _0xdd90ef, _0x20adf6, _0x446007, _0x48c0ab) {
        _0x20adf6.exports = _0x4d6691;
        var _0x55d5e2 = _0xdd90ef('./object');
        ((_0x4d6691.prototype = Object.create(_0x55d5e2.prototype)).constructor = _0x4d6691).className = 'Method';
        var _0x8311b7 = _0xdd90ef('./util');
        function _0x4d6691(_0x2bfebd, _0xc55709, _0x37ddca, _0x114151, _0x82750f, _0x3b2799, _0x52f6fa, _0x2d66ce, _0x8ac5b7) {
          if (_0x8311b7.isObject(_0x82750f)) {
            _0x52f6fa = _0x82750f;
            _0x82750f = _0x3b2799 = undefined;
          } else if (_0x8311b7.isObject(_0x3b2799)) {
            _0x52f6fa = _0x3b2799;
            _0x3b2799 = undefined;
          }
          if (undefined !== _0xc55709 && !_0x8311b7.isString(_0xc55709)) {
            throw TypeError("type must be a string");
          }
          if (!_0x8311b7.isString(_0x37ddca)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x8311b7.isString(_0x114151)) {
            throw TypeError("responseType must be a string");
          }
          _0x55d5e2.call(this, _0x2bfebd, _0x52f6fa);
          this.type = _0xc55709 || "rpc";
          this.requestType = _0x37ddca;
          this.requestStream = !!_0x82750f || undefined;
          this.responseType = _0x114151;
          this.responseStream = !!_0x3b2799 || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x2d66ce;
          this.parsedOptions = _0x8ac5b7;
        }
        _0x4d6691.fromJSON = function (_0x4589e7, _0x455daa) {
          return new _0x4d6691(_0x4589e7, _0x455daa.type, _0x455daa.requestType, _0x455daa.responseType, _0x455daa.requestStream, _0x455daa.responseStream, _0x455daa.options, _0x455daa.comment, _0x455daa.parsedOptions);
        };
        _0x4d6691.prototype.toJSON = function (_0x262c54) {
          var _0x4f329c = !!_0x262c54 && Boolean(_0x262c54.keepComments);
          return _0x8311b7.toObject(['type', 'rpc' !== this.type && this.type || undefined, "requestType", this.requestType, 'requestStream', this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, 'comment', _0x4f329c ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x4d6691.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x55d5e2.prototype.resolve.call(this));
        };
        _0x20adf6.exports;
      }, function () {
        return {
          './object': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/service.js', function (_0x229040, _0x57c0be, _0x187ae0, _0x48eae1, _0x5cfb5b) {
        _0x187ae0.exports = _0x2130d8;
        var _0x59c223 = _0x57c0be("./namespace");
        ((_0x2130d8.prototype = Object.create(_0x59c223.prototype)).constructor = _0x2130d8).className = "Service";
        var _0x25e0bf = _0x57c0be("./method");
        var _0x5f20c3 = _0x57c0be("./util");
        var _0x5efaed = _0x57c0be('./rpc');
        function _0x2130d8(_0xebbd4c, _0x69a200) {
          _0x59c223.call(this, _0xebbd4c, _0x69a200);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x3a10b5(_0x3ddc62) {
          _0x3ddc62._methodsArray = null;
          return _0x3ddc62;
        }
        _0x2130d8.fromJSON = function (_0x501b1e, _0x5aee24) {
          var _0x3bc80a = new _0x2130d8(_0x501b1e, _0x5aee24.options);
          if (_0x5aee24.methods) {
            var _0x53d861 = Object.keys(_0x5aee24.methods);
            for (var _0x3692cc = 0x0; _0x3692cc < _0x53d861.length; ++_0x3692cc) {
              _0x3bc80a.add(_0x25e0bf.fromJSON(_0x53d861[_0x3692cc], _0x5aee24.methods[_0x53d861[_0x3692cc]]));
            }
          }
          if (_0x5aee24.nested) {
            _0x3bc80a.addJSON(_0x5aee24.nested);
          }
          _0x3bc80a.comment = _0x5aee24.comment;
          return _0x3bc80a;
        };
        _0x2130d8.prototype.toJSON = function (_0x42a73d) {
          var _0xa732ea = _0x59c223.prototype.toJSON.call(this, _0x42a73d);
          var _0x575b65 = !!_0x42a73d && Boolean(_0x42a73d.keepComments);
          return _0x5f20c3.toObject(["options", _0xa732ea && _0xa732ea.options || undefined, "methods", _0x59c223.arrayToJSON(this.methodsArray, _0x42a73d) || {}, "nested", _0xa732ea && _0xa732ea.nested || undefined, 'comment', _0x575b65 ? this.comment : undefined]);
        };
        Object.defineProperty(_0x2130d8.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x5f20c3.toArray(this.methods));
          }
        });
        _0x2130d8.prototype.get = function (_0x2d36fe) {
          return this.methods[_0x2d36fe] || _0x59c223.prototype.get.call(this, _0x2d36fe);
        };
        _0x2130d8.prototype.resolveAll = function () {
          var _0x23af97 = this.methodsArray;
          for (var _0x4cf644 = 0x0; _0x4cf644 < _0x23af97.length; ++_0x4cf644) {
            _0x23af97[_0x4cf644].resolve();
          }
          return _0x59c223.prototype.resolve.call(this);
        };
        _0x2130d8.prototype.add = function (_0x20e61c) {
          if (this.get(_0x20e61c.name)) {
            throw Error("duplicate name '" + _0x20e61c.name + "' in " + this);
          }
          return _0x20e61c instanceof _0x25e0bf ? (this.methods[_0x20e61c.name] = _0x20e61c, _0x20e61c.parent = this, _0x3a10b5(this)) : _0x59c223.prototype.add.call(this, _0x20e61c);
        };
        _0x2130d8.prototype.remove = function (_0x13f61e) {
          if (_0x13f61e instanceof _0x25e0bf) {
            if (this.methods[_0x13f61e.name] !== _0x13f61e) {
              throw Error(_0x13f61e + " is not a member of " + this);
            }
            delete this.methods[_0x13f61e.name];
            _0x13f61e.parent = null;
            return _0x3a10b5(this);
          }
          return _0x59c223.prototype.remove.call(this, _0x13f61e);
        };
        _0x2130d8.prototype.create = function (_0x2ff9fb, _0x45ddd6, _0x488184) {
          var _0x312239;
          var _0x24b783 = new _0x5efaed.Service(_0x2ff9fb, _0x45ddd6, _0x488184);
          for (var _0x424ef2 = 0x0; _0x424ef2 < this.methodsArray.length; ++_0x424ef2) {
            var _0x13ebab = _0x5f20c3.lcFirst((_0x312239 = this._methodsArray[_0x424ef2]).resolve().name).replace(/[^$\w_]/g, '');
            _0x24b783[_0x13ebab] = _0x5f20c3.codegen(['r', 'c'], _0x5f20c3.isReserved(_0x13ebab) ? _0x13ebab + '_' : _0x13ebab)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x312239,
              'q': _0x312239.resolvedRequestType.ctor,
              's': _0x312239.resolvedResponseType.ctor
            });
          }
          return _0x24b783;
        };
        _0x187ae0.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (_0x3c6143, _0x22e313, _0x38a68b, _0x42254e, _0x584ecb) {
        _0x38a68b.exports = _0x194f28;
        var _0x325c2a = _0x22e313("./util/minimal");
        function _0x194f28(_0x59fee3) {
          if (_0x59fee3) {
            var _0x1db4fe = Object.keys(_0x59fee3);
            for (var _0x46a337 = 0x0; _0x46a337 < _0x1db4fe.length; ++_0x46a337) {
              this[_0x1db4fe[_0x46a337]] = _0x59fee3[_0x1db4fe[_0x46a337]];
            }
          }
        }
        _0x194f28.create = function (_0x5e3adb) {
          return this.$type.create(_0x5e3adb);
        };
        _0x194f28.encode = function (_0x9dec76, _0x4b586b) {
          return this.$type.encode(_0x9dec76, _0x4b586b);
        };
        _0x194f28.encodeDelimited = function (_0x2b6bef, _0x5ea313) {
          return this.$type.encodeDelimited(_0x2b6bef, _0x5ea313);
        };
        _0x194f28.decode = function (_0x20076d) {
          return this.$type.decode(_0x20076d);
        };
        _0x194f28.decodeDelimited = function (_0x116fe2) {
          return this.$type.decodeDelimited(_0x116fe2);
        };
        _0x194f28.verify = function (_0x3d92e7) {
          return this.$type.verify(_0x3d92e7);
        };
        _0x194f28.fromObject = function (_0x2ae73e) {
          return this.$type.fromObject(_0x2ae73e);
        };
        _0x194f28.toObject = function (_0x183f5b, _0x51518b) {
          return this.$type.toObject(_0x183f5b, _0x51518b);
        };
        _0x194f28.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x325c2a.toJSONOptions);
        };
        _0x38a68b.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0x2ea540, _0x8d8a47, _0x262778, _0x1525c5, _0x53fe23) {
        _0x262778.exports = function (_0x277728) {
          var _0x34009d = _0x1a2473.codegen(['r', 'l'], _0x277728.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x277728.fieldsArray.filter(function (_0x776905) {
            return _0x776905.map;
          }).length ? ',k,value' : ''))("while(r.pos<c){")("var t=r.uint32()");
          if (_0x277728.group) {
            _0x34009d("if((t&7)===4)")("break");
          }
          _0x34009d("switch(t>>>3){");
          for (var _0x3ac2a3 = 0x0; _0x3ac2a3 < _0x277728.fieldsArray.length; ++_0x3ac2a3) {
            var _0x573116 = _0x277728._fieldsArray[_0x3ac2a3].resolve();
            var _0x21d7c8 = _0x573116.resolvedType instanceof _0x24ee3f ? "int32" : _0x573116.type;
            var _0x17ad05 = 'm' + _0x1a2473.safeProp(_0x573116.name);
            _0x34009d("case %i:", _0x573116.id);
            if (_0x573116.map) {
              _0x34009d("if(%s===util.emptyObject)", _0x17ad05)("%s={}", _0x17ad05)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x302aeb.defaults[_0x573116.keyType]) {
                _0x34009d('k=%j', _0x302aeb.defaults[_0x573116.keyType]);
              } else {
                _0x34009d("k=null");
              }
              if (undefined !== _0x302aeb.defaults[_0x21d7c8]) {
                _0x34009d("value=%j", _0x302aeb.defaults[_0x21d7c8]);
              } else {
                _0x34009d("value=null");
              }
              _0x34009d("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", _0x573116.keyType)("case 2:");
              if (undefined === _0x302aeb.basic[_0x21d7c8]) {
                _0x34009d("value=types[%i].decode(r,r.uint32())", _0x3ac2a3);
              } else {
                _0x34009d("value=r.%s()", _0x21d7c8);
              }
              _0x34009d("break")("default:")('r.skipType(tag2&7)')("break")('}')('}');
              if (undefined !== _0x302aeb.long[_0x573116.keyType]) {
                _0x34009d("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x17ad05);
              } else {
                _0x34009d("%s[k]=value", _0x17ad05);
              }
            } else if (_0x573116.repeated) {
              _0x34009d("if(!(%s&&%s.length))", _0x17ad05, _0x17ad05)("%s=[]", _0x17ad05);
              if (undefined !== _0x302aeb.packed[_0x21d7c8]) {
                _0x34009d("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", _0x17ad05, _0x21d7c8)("}else");
              }
              if (undefined === _0x302aeb.basic[_0x21d7c8]) {
                _0x34009d(_0x573116.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x17ad05, _0x3ac2a3);
              } else {
                _0x34009d("%s.push(r.%s())", _0x17ad05, _0x21d7c8);
              }
            } else if (undefined === _0x302aeb.basic[_0x21d7c8]) {
              _0x34009d(_0x573116.resolvedType.group ? "%s=types[%i].decode(r)" : '%s=types[%i].decode(r,r.uint32())', _0x17ad05, _0x3ac2a3);
            } else {
              _0x34009d("%s=r.%s()", _0x17ad05, _0x21d7c8);
            }
            _0x34009d('break');
          }
          _0x34009d('default:')("r.skipType(t&7)")("break")('}')('}');
          for (_0x3ac2a3 = 0x0; _0x3ac2a3 < _0x277728._fieldsArray.length; ++_0x3ac2a3) {
            var _0x29069d = _0x277728._fieldsArray[_0x3ac2a3];
            if (_0x29069d.required) {
              _0x34009d("if(!m.hasOwnProperty(%j))", _0x29069d.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x29069d.name + "'");
            }
          }
          return _0x34009d("return m");
        };
        var _0x24ee3f = _0x8d8a47('./enum');
        var _0x302aeb = _0x8d8a47("./types");
        var _0x1a2473 = _0x8d8a47('./util');
        _0x262778.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (_0x248f92, _0x2fbe5a, _0x552fe2, _0x427718, _0x156b2b) {
        _0x552fe2.exports = function (_0x59ba26) {
          var _0xc61754 = _0x3f67a3.codegen(['m'], _0x59ba26.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var _0x1c21cc = _0x59ba26.oneofsArray;
          var _0x137457 = {};
          if (_0x1c21cc.length) {
            _0xc61754("var p={}");
          }
          for (var _0x3ef5c9 = 0x0; _0x3ef5c9 < _0x59ba26.fieldsArray.length; ++_0x3ef5c9) {
            var _0x54fcbe = _0x59ba26._fieldsArray[_0x3ef5c9].resolve();
            var _0x3aef4f = 'm' + _0x3f67a3.safeProp(_0x54fcbe.name);
            if (_0x54fcbe.optional) {
              _0xc61754("if(%s!=null&&m.hasOwnProperty(%j)){", _0x3aef4f, _0x54fcbe.name);
            }
            if (_0x54fcbe.map) {
              _0xc61754("if(!util.isObject(%s))", _0x3aef4f)("return%j", _0x54fcbe.name + ": " + 'object' + (_0x54fcbe.repeated && true ? '[]' : _0x54fcbe.map && false ? "{k:" + _0x54fcbe.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x3aef4f)("for(var i=0;i<k.length;++i){");
              _0x3d9c7c(_0xc61754, _0x54fcbe, 'k[i]');
              _0x57d461(_0xc61754, _0x54fcbe, _0x3ef5c9, _0x3aef4f + "[k[i]]")('}');
            } else {
              if (_0x54fcbe.repeated) {
                _0xc61754("if(!Array.isArray(%s))", _0x3aef4f)('return%j', _0x54fcbe.name + ": " + _0x3037(0x6e2) + (_0x54fcbe.repeated && "array" !== _0x3037(0x6e2) ? '[]' : _0x54fcbe.map && true ? "{k:" + _0x54fcbe.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x3aef4f);
                _0x57d461(_0xc61754, _0x54fcbe, _0x3ef5c9, _0x3aef4f + "[i]")('}');
              } else {
                if (_0x54fcbe.partOf) {
                  var _0x3d5f06 = _0x3f67a3.safeProp(_0x54fcbe.partOf.name);
                  if (0x1 === _0x137457[_0x54fcbe.partOf.name]) {
                    _0xc61754('if(p%s===1)', _0x3d5f06)("return%j", _0x54fcbe.partOf.name + ": multiple values");
                  }
                  _0x137457[_0x54fcbe.partOf.name] = 0x1;
                  _0xc61754("p%s=1", _0x3d5f06);
                }
                _0x57d461(_0xc61754, _0x54fcbe, _0x3ef5c9, _0x3aef4f);
              }
            }
            if (_0x54fcbe.optional) {
              _0xc61754('}');
            }
          }
          return _0xc61754("return null");
        };
        var _0xb1e815 = _0x2fbe5a("./enum");
        var _0x3f67a3 = _0x2fbe5a('./util');
        function _0x57d461(_0x38fc7e, _0x38bfaa, _0x3f48f4, _0x261616) {
          if (_0x38bfaa.resolvedType) {
            if (_0x38bfaa.resolvedType instanceof _0xb1e815) {
              _0x38fc7e("switch(%s){", _0x261616)('default:')('return%j', _0x38bfaa.name + ": " + _0x3037(0x5ff) + (_0x38bfaa.repeated && "array" !== _0x3037(0x5ff) ? '[]' : _0x38bfaa.map && true ? "{k:" + _0x38bfaa.keyType + '}' : '') + " expected");
              var _0x507beb = Object.keys(_0x38bfaa.resolvedType.values);
              for (var _0x7f6256 = 0x0; _0x7f6256 < _0x507beb.length; ++_0x7f6256) {
                _0x38fc7e("case %i:", _0x38bfaa.resolvedType.values[_0x507beb[_0x7f6256]]);
              }
              _0x38fc7e('break')('}');
            } else {
              _0x38fc7e('{')("var e=types[%i].verify(%s);", _0x3f48f4, _0x261616)("if(e)")('return%j+e', _0x38bfaa.name + '.')('}');
            }
          } else {
            switch (_0x38bfaa.type) {
              case 'int32':
              case "uint32":
              case "sint32":
              case 'fixed32':
              case "sfixed32":
                _0x38fc7e("if(!util.isInteger(%s))", _0x261616)('return%j', _0x38bfaa.name + ": " + _0x3037(0x11f) + (_0x38bfaa.repeated && "array" !== _0x3037(0x11f) ? '[]' : _0x38bfaa.map && true ? "{k:" + _0x38bfaa.keyType + '}' : '') + " expected");
                break;
              case 'int64':
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x38fc7e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0x261616, _0x261616, _0x261616, _0x261616)('return%j', _0x38bfaa.name + ": " + _0x3037(0x5cf) + (_0x38bfaa.repeated && "array" !== _0x3037(0x5cf) ? '[]' : _0x38bfaa.map && true ? "{k:" + _0x38bfaa.keyType + '}' : '') + " expected");
                break;
              case "float":
              case "double":
                _0x38fc7e("if(typeof %s!==\"number\")", _0x261616)('return%j', _0x38bfaa.name + ": " + _0x3037(0x108) + (_0x38bfaa.repeated && "array" !== _0x3037(0x108) ? '[]' : _0x38bfaa.map && true ? "{k:" + _0x38bfaa.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x38fc7e("if(typeof %s!==\"boolean\")", _0x261616)('return%j', _0x38bfaa.name + ": " + _0x3037(0x58d) + (_0x38bfaa.repeated && "array" !== _0x3037(0x58d) ? '[]' : _0x38bfaa.map && true ? "{k:" + _0x38bfaa.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x38fc7e("if(!util.isString(%s))", _0x261616)('return%j', _0x38bfaa.name + ": " + 'string' + (_0x38bfaa.repeated && true ? '[]' : _0x38bfaa.map && true ? "{k:" + _0x38bfaa.keyType + '}' : '') + " expected");
                break;
              case 'bytes':
                _0x38fc7e("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x261616, _0x261616, _0x261616)("return%j", _0x38bfaa.name + ": " + _0x3037(0x46a) + (_0x38bfaa.repeated && "array" !== _0x3037(0x46a) ? '[]' : _0x38bfaa.map && true ? "{k:" + _0x38bfaa.keyType + '}' : '') + " expected");
            }
          }
          return _0x38fc7e;
        }
        function _0x3d9c7c(_0x26408f, _0x12b05f, _0x1c3420) {
          switch (_0x12b05f.keyType) {
            case 'int32':
            case "uint32":
            case "sint32":
            case 'fixed32':
            case 'sfixed32':
              _0x26408f("if(!util.key32Re.test(%s))", _0x1c3420)("return%j", _0x12b05f.name + ": " + _0x3037(0x443) + (_0x12b05f.repeated && "array" !== _0x3037(0x443) ? '[]' : _0x12b05f.map && true ? "{k:" + _0x12b05f.keyType + '}' : '') + " expected");
              break;
            case 'int64':
            case 'uint64':
            case 'sint64':
            case "fixed64":
            case 'sfixed64':
              _0x26408f('if(!util.key64Re.test(%s))', _0x1c3420)("return%j", _0x12b05f.name + ": " + "integer|Long key" + (_0x12b05f.repeated && true ? '[]' : _0x12b05f.map && true ? "{k:" + _0x12b05f.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x26408f("if(!util.key2Re.test(%s))", _0x1c3420)("return%j", _0x12b05f.name + ": " + "boolean key" + (_0x12b05f.repeated && true ? '[]' : _0x12b05f.map && true ? "{k:" + _0x12b05f.keyType + '}' : '') + " expected");
          }
          return _0x26408f;
        }
        _0x552fe2.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0x2dc46a, _0x468d54, _0x1c7d76, _0x5a6de5, _0x2b46f9) {
        var _0x2f7580 = _0x468d54("./enum");
        var _0x93eff5 = _0x468d54('./util');
        function _0x2d4bcf(_0x1953a1, _0x56451b, _0x2c3ed9, _0x2627fb) {
          if (_0x56451b.resolvedType) {
            if (_0x56451b.resolvedType instanceof _0x2f7580) {
              _0x1953a1('switch(d%s){', _0x2627fb);
              var _0x147c92 = _0x56451b.resolvedType.values;
              var _0x2e11bb = Object.keys(_0x147c92);
              for (var _0x151502 = 0x0; _0x151502 < _0x2e11bb.length; ++_0x151502) {
                if (_0x56451b.repeated && _0x147c92[_0x2e11bb[_0x151502]] === _0x56451b.typeDefault) {
                  _0x1953a1("default:");
                }
                _0x1953a1('case%j:', _0x2e11bb[_0x151502])("case %i:", _0x147c92[_0x2e11bb[_0x151502]])("m%s=%j", _0x2627fb, _0x147c92[_0x2e11bb[_0x151502]])("break");
              }
              _0x1953a1('}');
            } else {
              _0x1953a1("if(typeof d%s!==\"object\")", _0x2627fb)("throw TypeError(%j)", _0x56451b.fullName + ": object expected")('m%s=types[%i].fromObject(d%s)', _0x2627fb, _0x2c3ed9, _0x2627fb);
            }
          } else {
            var _0x5cf7c3 = false;
            switch (_0x56451b.type) {
              case "double":
              case 'float':
                _0x1953a1("m%s=Number(d%s)", _0x2627fb, _0x2627fb);
                break;
              case 'uint32':
              case 'fixed32':
                _0x1953a1("m%s=d%s>>>0", _0x2627fb, _0x2627fb);
                break;
              case 'int32':
              case 'sint32':
              case "sfixed32":
                _0x1953a1("m%s=d%s|0", _0x2627fb, _0x2627fb);
                break;
              case "uint64":
                _0x5cf7c3 = true;
              case 'int64':
              case "sint64":
              case "fixed64":
              case 'sfixed64':
                _0x1953a1("if(util.Long)")('(m%s=util.Long.fromValue(d%s)).unsigned=%j', _0x2627fb, _0x2627fb, _0x5cf7c3)("else if(typeof d%s===\"string\")", _0x2627fb)("m%s=parseInt(d%s,10)", _0x2627fb, _0x2627fb)("else if(typeof d%s===\"number\")", _0x2627fb)("m%s=d%s", _0x2627fb, _0x2627fb)("else if(typeof d%s===\"object\")", _0x2627fb)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x2627fb, _0x2627fb, _0x2627fb, _0x5cf7c3 ? 'true' : '');
                break;
              case 'bytes':
                _0x1953a1("if(typeof d%s===\"string\")", _0x2627fb)('util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)', _0x2627fb, _0x2627fb, _0x2627fb)("else if(d%s.length)", _0x2627fb)("m%s=d%s", _0x2627fb, _0x2627fb);
                break;
              case 'string':
                _0x1953a1("m%s=String(d%s)", _0x2627fb, _0x2627fb);
                break;
              case "bool":
                _0x1953a1("m%s=Boolean(d%s)", _0x2627fb, _0x2627fb);
            }
          }
          return _0x1953a1;
        }
        function _0x13ea26(_0x381eee, _0x399a7f, _0x1d2359, _0x42c558) {
          if (_0x399a7f.resolvedType) {
            if (_0x399a7f.resolvedType instanceof _0x2f7580) {
              _0x381eee('d%s=o.enums===String?types[%i].values[m%s]:m%s', _0x42c558, _0x1d2359, _0x42c558, _0x42c558);
            } else {
              _0x381eee("d%s=types[%i].toObject(m%s,o)", _0x42c558, _0x1d2359, _0x42c558);
            }
          } else {
            var _0xa36b4c = false;
            switch (_0x399a7f.type) {
              case 'double':
              case "float":
                _0x381eee("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x42c558, _0x42c558, _0x42c558, _0x42c558);
                break;
              case 'uint64':
                _0xa36b4c = true;
              case "int64":
              case 'sint64':
              case 'fixed64':
              case "sfixed64":
                _0x381eee("if(typeof m%s===\"number\")", _0x42c558)("d%s=o.longs===String?String(m%s):m%s", _0x42c558, _0x42c558, _0x42c558)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x42c558, _0x42c558, _0x42c558, _0x42c558, _0xa36b4c ? "true" : '', _0x42c558);
                break;
              case "bytes":
                _0x381eee("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", _0x42c558, _0x42c558, _0x42c558, _0x42c558, _0x42c558);
                break;
              default:
                _0x381eee("d%s=m%s", _0x42c558, _0x42c558);
            }
          }
          return _0x381eee;
        }
        _0x2dc46a.fromObject = function (_0x30e022) {
          var _0xa1bbb4 = _0x30e022.fieldsArray;
          var _0x332c7b = _0x93eff5.codegen(['d'], _0x30e022.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0xa1bbb4.length) {
            return _0x332c7b("return new this.ctor");
          }
          _0x332c7b("var m=new this.ctor");
          for (var _0x5a13bd = 0x0; _0x5a13bd < _0xa1bbb4.length; ++_0x5a13bd) {
            var _0x40f5c7 = _0xa1bbb4[_0x5a13bd].resolve();
            var _0x12449d = _0x93eff5.safeProp(_0x40f5c7.name);
            if (_0x40f5c7.map) {
              _0x332c7b("if(d%s){", _0x12449d)("if(typeof d%s!==\"object\")", _0x12449d)("throw TypeError(%j)", _0x40f5c7.fullName + ": object expected")("m%s={}", _0x12449d)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x12449d);
              _0x2d4bcf(_0x332c7b, _0x40f5c7, _0x5a13bd, _0x12449d + '[ks[i]]')('}')('}');
            } else if (_0x40f5c7.repeated) {
              _0x332c7b("if(d%s){", _0x12449d)("if(!Array.isArray(d%s))", _0x12449d)("throw TypeError(%j)", _0x40f5c7.fullName + ": array expected")('m%s=[]', _0x12449d)("for(var i=0;i<d%s.length;++i){", _0x12449d);
              _0x2d4bcf(_0x332c7b, _0x40f5c7, _0x5a13bd, _0x12449d + '[i]')('}')('}');
            } else {
              if (!(_0x40f5c7.resolvedType instanceof _0x2f7580)) {
                _0x332c7b("if(d%s!=null){", _0x12449d);
              }
              _0x2d4bcf(_0x332c7b, _0x40f5c7, _0x5a13bd, _0x12449d);
              if (!(_0x40f5c7.resolvedType instanceof _0x2f7580)) {
                _0x332c7b('}');
              }
            }
          }
          return _0x332c7b("return m");
        };
        _0x2dc46a.toObject = function (_0x11bc8c) {
          var _0x14647e = _0x11bc8c.fieldsArray.slice().sort(_0x93eff5.compareFieldsById);
          if (!_0x14647e.length) {
            return _0x93eff5.codegen()("return {}");
          }
          var _0x34d22d = _0x93eff5.codegen(['m', 'o'], _0x11bc8c.name + "$toObject")("if(!o)")('o={}')("var d={}");
          var _0x2f616e = [];
          var _0x1fdc47 = [];
          var _0x3f2dc4 = [];
          for (var _0x22718c = 0x0; _0x22718c < _0x14647e.length; ++_0x22718c) {
            if (!_0x14647e[_0x22718c].partOf) {
              (_0x14647e[_0x22718c].resolve().repeated ? _0x2f616e : _0x14647e[_0x22718c].map ? _0x1fdc47 : _0x3f2dc4).push(_0x14647e[_0x22718c]);
            }
          }
          if (_0x2f616e.length) {
            _0x34d22d('if(o.arrays||o.defaults){');
            for (_0x22718c = 0x0; _0x22718c < _0x2f616e.length; ++_0x22718c) {
              _0x34d22d("d%s=[]", _0x93eff5.safeProp(_0x2f616e[_0x22718c].name));
            }
            _0x34d22d('}');
          }
          if (_0x1fdc47.length) {
            _0x34d22d("if(o.objects||o.defaults){");
            for (_0x22718c = 0x0; _0x22718c < _0x1fdc47.length; ++_0x22718c) {
              _0x34d22d('d%s={}', _0x93eff5.safeProp(_0x1fdc47[_0x22718c].name));
            }
            _0x34d22d('}');
          }
          if (_0x3f2dc4.length) {
            _0x34d22d("if(o.defaults){");
            for (_0x22718c = 0x0; _0x22718c < _0x3f2dc4.length; ++_0x22718c) {
              var _0x36ba6f = _0x3f2dc4[_0x22718c];
              var _0x5f2b4f = _0x93eff5.safeProp(_0x36ba6f.name);
              if (_0x36ba6f.resolvedType instanceof _0x2f7580) {
                _0x34d22d("d%s=o.enums===String?%j:%j", _0x5f2b4f, _0x36ba6f.resolvedType.valuesById[_0x36ba6f.typeDefault], _0x36ba6f.typeDefault);
              } else {
                if (_0x36ba6f.long) {
                  _0x34d22d("if(util.Long){")("var n=new util.Long(%i,%i,%j)", _0x36ba6f.typeDefault.low, _0x36ba6f.typeDefault.high, _0x36ba6f.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x5f2b4f)("}else")("d%s=o.longs===String?%j:%i", _0x5f2b4f, _0x36ba6f.typeDefault.toString(), _0x36ba6f.typeDefault.toNumber());
                } else {
                  if (_0x36ba6f.bytes) {
                    var _0x2c181b = '[' + Array.prototype.slice.call(_0x36ba6f.typeDefault).join(',') + ']';
                    _0x34d22d("if(o.bytes===String)d%s=%j", _0x5f2b4f, String.fromCharCode.apply(String, _0x36ba6f.typeDefault))("else{")("d%s=%s", _0x5f2b4f, _0x2c181b)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0x5f2b4f, _0x5f2b4f)('}');
                  } else {
                    _0x34d22d("d%s=%j", _0x5f2b4f, _0x36ba6f.typeDefault);
                  }
                }
              }
            }
            _0x34d22d('}');
          }
          var _0x2c28fd = false;
          for (_0x22718c = 0x0; _0x22718c < _0x14647e.length; ++_0x22718c) {
            _0x36ba6f = _0x14647e[_0x22718c];
            var _0x1ed196 = _0x11bc8c._fieldsArray.indexOf(_0x36ba6f);
            _0x5f2b4f = _0x93eff5.safeProp(_0x36ba6f.name);
            if (_0x36ba6f.map) {
              if (!_0x2c28fd) {
                _0x2c28fd = true;
                _0x34d22d("var ks2");
              }
              _0x34d22d("if(m%s&&(ks2=Object.keys(m%s)).length){", _0x5f2b4f, _0x5f2b4f)("d%s={}", _0x5f2b4f)("for(var j=0;j<ks2.length;++j){");
              _0x13ea26(_0x34d22d, _0x36ba6f, _0x1ed196, _0x5f2b4f + "[ks2[j]]")('}');
            } else if (_0x36ba6f.repeated) {
              _0x34d22d("if(m%s&&m%s.length){", _0x5f2b4f, _0x5f2b4f)("d%s=[]", _0x5f2b4f)("for(var j=0;j<m%s.length;++j){", _0x5f2b4f);
              _0x13ea26(_0x34d22d, _0x36ba6f, _0x1ed196, _0x5f2b4f + "[j]")('}');
            } else {
              _0x34d22d("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x5f2b4f, _0x36ba6f.name);
              _0x13ea26(_0x34d22d, _0x36ba6f, _0x1ed196, _0x5f2b4f);
              if (_0x36ba6f.partOf) {
                _0x34d22d("if(o.oneofs)")("d%s=%j", _0x93eff5.safeProp(_0x36ba6f.partOf.name), _0x36ba6f.name);
              }
            }
            _0x34d22d('}');
          }
          return _0x34d22d("return d");
        };
        _0x1c7d76.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (_0x3bdb2a, _0xc8f351, _0x51243d, _0x453bbe, _0x28d0e6) {
        var _0x1d4add = _0xc8f351("./message");
        _0x3bdb2a[".google.protobuf.Any"] = {
          'fromObject': function (_0x125d5c) {
            if (_0x125d5c && _0x125d5c["@type"]) {
              var _0x1c7a8b = _0x125d5c["@type"].substring(_0x125d5c["@type"].lastIndexOf('/') + 0x1);
              var _0x1fd80c = this.lookup(_0x1c7a8b);
              if (_0x1fd80c) {
                var _0x1806e1 = '.' === _0x125d5c["@type"].charAt(0x0) ? _0x125d5c["@type"].substr(0x1) : _0x125d5c["@type"];
                if (-0x1 === _0x1806e1.indexOf('/')) {
                  _0x1806e1 = '/' + _0x1806e1;
                }
                return this.create({
                  'type_url': _0x1806e1,
                  'value': _0x1fd80c.encode(_0x1fd80c.fromObject(_0x125d5c)).finish()
                });
              }
            }
            return this.fromObject(_0x125d5c);
          },
          'toObject': function (_0x112886, _0xd93b17) {
            var _0x1bb747 = '';
            var _0x4825da = '';
            if (_0xd93b17 && _0xd93b17.json && _0x112886.type_url && _0x112886.value) {
              _0x4825da = _0x112886.type_url.substring(_0x112886.type_url.lastIndexOf('/') + 0x1);
              _0x1bb747 = _0x112886.type_url.substring(0x0, _0x112886.type_url.lastIndexOf('/') + 0x1);
              var _0x157496 = this.lookup(_0x4825da);
              if (_0x157496) {
                _0x112886 = _0x157496.decode(_0x112886.value);
              }
            }
            if (!(_0x112886 instanceof this.ctor) && _0x112886 instanceof _0x1d4add) {
              var _0x1fe222 = _0x112886.$type.toObject(_0x112886, _0xd93b17);
              if ('' === _0x1bb747) {
                _0x1bb747 = 'type.googleapis.com/';
              }
              _0x4825da = _0x1bb747 + ('.' === _0x112886.$type.fullName[0x0] ? _0x112886.$type.fullName.substr(0x1) : _0x112886.$type.fullName);
              _0x1fe222["@type"] = _0x4825da;
              return _0x1fe222;
            }
            return this.toObject(_0x112886, _0xd93b17);
          }
        };
        _0x51243d.exports;
      }, function () {
        return {
          './message': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/type.js', function (_0x586df5, _0x176871, _0x37e60f, _0x526303, _0x3295f2) {
        _0x37e60f.exports = _0x18e436;
        var _0x360221 = _0x176871('./namespace');
        ((_0x18e436.prototype = Object.create(_0x360221.prototype)).constructor = _0x18e436).className = "Type";
        var _0x406f11 = _0x176871("./enum");
        var _0xc42741 = _0x176871('./oneof');
        var _0xda5ddf = _0x176871("./field");
        var _0x25377a = _0x176871("./mapfield");
        var _0x13f399 = _0x176871('./service');
        var _0x5d2917 = _0x176871("./message");
        var _0x168598 = _0x176871("./reader");
        var _0x16307c = _0x176871("./writer");
        var _0x4d3cd7 = _0x176871("./util");
        var _0x4daed9 = _0x176871('./encoder');
        var _0x357b53 = _0x176871('./decoder');
        var _0x46fcbe = _0x176871("./verifier");
        var _0x5adf44 = _0x176871('./converter');
        var _0x15d2ee = _0x176871("./wrappers");
        function _0x18e436(_0x105b3b, _0x1c11b5) {
          _0x360221.call(this, _0x105b3b, _0x1c11b5);
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
        function _0x55d4b6(_0x27a5f1) {
          _0x27a5f1._fieldsById = _0x27a5f1._fieldsArray = _0x27a5f1._oneofsArray = null;
          delete _0x27a5f1.encode;
          delete _0x27a5f1.decode;
          delete _0x27a5f1.verify;
          return _0x27a5f1;
        }
        Object.defineProperties(_0x18e436.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x59f98a = Object.keys(this.fields);
              for (var _0x5b707c = 0x0; _0x5b707c < _0x59f98a.length; ++_0x5b707c) {
                var _0x5ecd82 = this.fields[_0x59f98a[_0x5b707c]];
                var _0x97e19c = _0x5ecd82.id;
                if (this._fieldsById[_0x97e19c]) {
                  throw Error("duplicate id " + _0x97e19c + " in " + this);
                }
                this._fieldsById[_0x97e19c] = _0x5ecd82;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x4d3cd7.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x4d3cd7.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x18e436.generateConstructor(this)());
            },
            'set': function (_0xfd2f40) {
              var _0xfc6afe = _0xfd2f40.prototype;
              if (!(_0xfc6afe instanceof _0x5d2917)) {
                (_0xfd2f40.prototype = new _0x5d2917()).constructor = _0xfd2f40;
                _0x4d3cd7.merge(_0xfd2f40.prototype, _0xfc6afe);
              }
              _0xfd2f40.$type = _0xfd2f40.prototype.$type = this;
              _0x4d3cd7.merge(_0xfd2f40, _0x5d2917, true);
              this._ctor = _0xfd2f40;
              for (var _0x2b7ef5 = 0x0; _0x2b7ef5 < this.fieldsArray.length; ++_0x2b7ef5) {
                this._fieldsArray[_0x2b7ef5].resolve();
              }
              var _0x4d99de = {};
              for (_0x2b7ef5 = 0x0; _0x2b7ef5 < this.oneofsArray.length; ++_0x2b7ef5) {
                _0x4d99de[this._oneofsArray[_0x2b7ef5].resolve().name] = {
                  'get': _0x4d3cd7.oneOfGetter(this._oneofsArray[_0x2b7ef5].oneof),
                  'set': _0x4d3cd7.oneOfSetter(this._oneofsArray[_0x2b7ef5].oneof)
                };
              }
              if (_0x2b7ef5) {
                Object.defineProperties(_0xfd2f40.prototype, _0x4d99de);
              }
            }
          }
        });
        _0x18e436.generateConstructor = function (_0x5cae2e) {
          var _0x3c62bf;
          var _0x25cccd = _0x4d3cd7.codegen(['p'], _0x5cae2e.name);
          for (var _0x51290f = 0x0; _0x51290f < _0x5cae2e.fieldsArray.length; ++_0x51290f) {
            if ((_0x3c62bf = _0x5cae2e._fieldsArray[_0x51290f]).map) {
              _0x25cccd("this%s={}", _0x4d3cd7.safeProp(_0x3c62bf.name));
            } else if (_0x3c62bf.repeated) {
              _0x25cccd("this%s=[]", _0x4d3cd7.safeProp(_0x3c62bf.name));
            }
          }
          return _0x25cccd("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")('this[ks[i]]=p[ks[i]]');
        };
        _0x18e436.fromJSON = function (_0x499119, _0xb9e457) {
          var _0x5d6656 = new _0x18e436(_0x499119, _0xb9e457.options);
          _0x5d6656.extensions = _0xb9e457.extensions;
          _0x5d6656.reserved = _0xb9e457.reserved;
          var _0xb543fa = Object.keys(_0xb9e457.fields);
          for (var _0x46cfec = 0x0; _0x46cfec < _0xb543fa.length; ++_0x46cfec) {
            _0x5d6656.add((undefined !== _0xb9e457.fields[_0xb543fa[_0x46cfec]].keyType ? _0x25377a.fromJSON : _0xda5ddf.fromJSON)(_0xb543fa[_0x46cfec], _0xb9e457.fields[_0xb543fa[_0x46cfec]]));
          }
          if (_0xb9e457.oneofs) {
            _0xb543fa = Object.keys(_0xb9e457.oneofs);
            for (_0x46cfec = 0x0; _0x46cfec < _0xb543fa.length; ++_0x46cfec) {
              _0x5d6656.add(_0xc42741.fromJSON(_0xb543fa[_0x46cfec], _0xb9e457.oneofs[_0xb543fa[_0x46cfec]]));
            }
          }
          if (_0xb9e457.nested) {
            _0xb543fa = Object.keys(_0xb9e457.nested);
            for (_0x46cfec = 0x0; _0x46cfec < _0xb543fa.length; ++_0x46cfec) {
              var _0x4e2b53 = _0xb9e457.nested[_0xb543fa[_0x46cfec]];
              _0x5d6656.add((undefined !== _0x4e2b53.id ? _0xda5ddf.fromJSON : undefined !== _0x4e2b53.fields ? _0x18e436.fromJSON : undefined !== _0x4e2b53.values ? _0x406f11.fromJSON : undefined !== _0x4e2b53.methods ? _0x13f399.fromJSON : _0x360221.fromJSON)(_0xb543fa[_0x46cfec], _0x4e2b53));
            }
          }
          if (_0xb9e457.extensions && _0xb9e457.extensions.length) {
            _0x5d6656.extensions = _0xb9e457.extensions;
          }
          if (_0xb9e457.reserved && _0xb9e457.reserved.length) {
            _0x5d6656.reserved = _0xb9e457.reserved;
          }
          if (_0xb9e457.group) {
            _0x5d6656.group = true;
          }
          if (_0xb9e457.comment) {
            _0x5d6656.comment = _0xb9e457.comment;
          }
          return _0x5d6656;
        };
        _0x18e436.prototype.toJSON = function (_0x1f3290) {
          var _0x10890c = _0x360221.prototype.toJSON.call(this, _0x1f3290);
          var _0x7f4d9 = !!_0x1f3290 && Boolean(_0x1f3290.keepComments);
          return _0x4d3cd7.toObject(["options", _0x10890c && _0x10890c.options || undefined, "oneofs", _0x360221.arrayToJSON(this.oneofsArray, _0x1f3290), "fields", _0x360221.arrayToJSON(this.fieldsArray.filter(function (_0x5ba322) {
            return !_0x5ba322.declaringField;
          }), _0x1f3290) || {}, 'extensions', this.extensions && this.extensions.length ? this.extensions : undefined, 'reserved', this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", _0x10890c && _0x10890c.nested || undefined, "comment", _0x7f4d9 ? this.comment : undefined]);
        };
        _0x18e436.prototype.resolveAll = function () {
          var _0x342818 = this.fieldsArray;
          for (var _0x55115e = 0x0; _0x55115e < _0x342818.length;) {
            _0x342818[_0x55115e++].resolve();
          }
          var _0x1f4d9f = this.oneofsArray;
          for (_0x55115e = 0x0; _0x55115e < _0x1f4d9f.length;) {
            _0x1f4d9f[_0x55115e++].resolve();
          }
          return _0x360221.prototype.resolveAll.call(this);
        };
        _0x18e436.prototype.get = function (_0x36a23b) {
          return this.fields[_0x36a23b] || this.oneofs && this.oneofs[_0x36a23b] || this.nested && this.nested[_0x36a23b] || null;
        };
        _0x18e436.prototype.add = function (_0xc21e49) {
          if (this.get(_0xc21e49.name)) {
            throw Error("duplicate name '" + _0xc21e49.name + "' in " + this);
          }
          if (_0xc21e49 instanceof _0xda5ddf && undefined === _0xc21e49.extend) {
            if (this._fieldsById ? this._fieldsById[_0xc21e49.id] : this.fieldsById[_0xc21e49.id]) {
              throw Error("duplicate id " + _0xc21e49.id + " in " + this);
            }
            if (this.isReservedId(_0xc21e49.id)) {
              throw Error("id " + _0xc21e49.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0xc21e49.name)) {
              throw Error("name '" + _0xc21e49.name + "' is reserved in " + this);
            }
            if (_0xc21e49.parent) {
              _0xc21e49.parent.remove(_0xc21e49);
            }
            this.fields[_0xc21e49.name] = _0xc21e49;
            _0xc21e49.message = this;
            _0xc21e49.onAdd(this);
            return _0x55d4b6(this);
          }
          return _0xc21e49 instanceof _0xc42741 ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0xc21e49.name] = _0xc21e49, _0xc21e49.onAdd(this), _0x55d4b6(this)) : _0x360221.prototype.add.call(this, _0xc21e49);
        };
        _0x18e436.prototype.remove = function (_0x7faed0) {
          if (_0x7faed0 instanceof _0xda5ddf && undefined === _0x7faed0.extend) {
            if (!this.fields || this.fields[_0x7faed0.name] !== _0x7faed0) {
              throw Error(_0x7faed0 + " is not a member of " + this);
            }
            delete this.fields[_0x7faed0.name];
            _0x7faed0.parent = null;
            _0x7faed0.onRemove(this);
            return _0x55d4b6(this);
          }
          if (_0x7faed0 instanceof _0xc42741) {
            if (!this.oneofs || this.oneofs[_0x7faed0.name] !== _0x7faed0) {
              throw Error(_0x7faed0 + " is not a member of " + this);
            }
            delete this.oneofs[_0x7faed0.name];
            _0x7faed0.parent = null;
            _0x7faed0.onRemove(this);
            return _0x55d4b6(this);
          }
          return _0x360221.prototype.remove.call(this, _0x7faed0);
        };
        _0x18e436.prototype.isReservedId = function (_0x3a8875) {
          return _0x360221.isReservedId(this.reserved, _0x3a8875);
        };
        _0x18e436.prototype.isReservedName = function (_0x3e472d) {
          return _0x360221.isReservedName(this.reserved, _0x3e472d);
        };
        _0x18e436.prototype.create = function (_0x1e1e1d) {
          return new this.ctor(_0x1e1e1d);
        };
        _0x18e436.prototype.setup = function () {
          var _0x41c3a6 = this.fullName;
          var _0x33cefb = [];
          for (var _0x22ef12 = 0x0; _0x22ef12 < this.fieldsArray.length; ++_0x22ef12) {
            _0x33cefb.push(this._fieldsArray[_0x22ef12].resolve().resolvedType);
          }
          this.encode = _0x4daed9(this)({
            'Writer': _0x16307c,
            'types': _0x33cefb,
            'util': _0x4d3cd7
          });
          this.decode = _0x357b53(this)({
            'Reader': _0x168598,
            'types': _0x33cefb,
            'util': _0x4d3cd7
          });
          this.verify = _0x46fcbe(this)({
            'types': _0x33cefb,
            'util': _0x4d3cd7
          });
          this.fromObject = _0x5adf44.fromObject(this)({
            'types': _0x33cefb,
            'util': _0x4d3cd7
          });
          this.toObject = _0x5adf44.toObject(this)({
            'types': _0x33cefb,
            'util': _0x4d3cd7
          });
          var _0x481ad7 = _0x15d2ee[_0x41c3a6];
          if (_0x481ad7) {
            var _0x15ba27 = Object.create(this);
            _0x15ba27.fromObject = this.fromObject;
            this.fromObject = _0x481ad7.fromObject.bind(_0x15ba27);
            _0x15ba27.toObject = this.toObject;
            this.toObject = _0x481ad7.toObject.bind(_0x15ba27);
          }
          return this;
        };
        _0x18e436.prototype.encode = function (_0xfa958c, _0x55ae86) {
          return this.setup().encode(_0xfa958c, _0x55ae86);
        };
        _0x18e436.prototype.encodeDelimited = function (_0x2acbcc, _0x1ff46a) {
          return this.encode(_0x2acbcc, _0x1ff46a && _0x1ff46a.len ? _0x1ff46a.fork() : _0x1ff46a).ldelim();
        };
        _0x18e436.prototype.decode = function (_0xbb45d9, _0x327e57) {
          return this.setup().decode(_0xbb45d9, _0x327e57);
        };
        _0x18e436.prototype.decodeDelimited = function (_0x469400) {
          if (!(_0x469400 instanceof _0x168598)) {
            _0x469400 = _0x168598.create(_0x469400);
          }
          return this.decode(_0x469400, _0x469400.uint32());
        };
        _0x18e436.prototype.verify = function (_0x9dc675) {
          return this.setup().verify(_0x9dc675);
        };
        _0x18e436.prototype.fromObject = function (_0x15856e) {
          return this.setup().fromObject(_0x15856e);
        };
        _0x18e436.prototype.toObject = function (_0x6f0c27, _0x3180c9) {
          return this.setup().toObject(_0x6f0c27, _0x3180c9);
        };
        _0x18e436.d = function (_0x562834) {
          return function (_0x155b42) {
            _0x4d3cd7.decorateType(_0x155b42, _0x562834);
          };
        };
        _0x37e60f.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js',
          './service': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './message': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './reader': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/writer.js',
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x1fb1b2, _0x305bbb, _0x5a404f, _0xbb7f9, _0x1bde56) {
        _0x5a404f.exports = _0x3a820f;
        var _0xd9e951 = _0x305bbb('./namespace');
        ((_0x3a820f.prototype = Object.create(_0xd9e951.prototype)).constructor = _0x3a820f).className = "Root";
        var _0x42edaa;
        var _0x5bf5d4;
        var _0x388e5c;
        var _0x57bc81 = _0x305bbb("./field");
        var _0x5f46fb = _0x305bbb("./enum");
        var _0x937c4f = _0x305bbb("./oneof");
        var _0x5494a1 = _0x305bbb('./util');
        function _0x3a820f(_0x4e4732) {
          _0xd9e951.call(this, '', _0x4e4732);
          this.deferred = [];
          this.files = [];
        }
        function _0x593aca() {}
        _0x3a820f.fromJSON = function (_0x3ce71d, _0x13831e) {
          if (!_0x13831e) {
            _0x13831e = new _0x3a820f();
          }
          if (_0x3ce71d.options) {
            _0x13831e.setOptions(_0x3ce71d.options);
          }
          return _0x13831e.addJSON(_0x3ce71d.nested);
        };
        _0x3a820f.prototype.resolvePath = _0x5494a1.path.resolve;
        _0x3a820f.prototype.fetch = _0x5494a1.fetch;
        _0x3a820f.prototype.load = function _0x33a689(_0x2cfa78, _0x3ea72a, _0x398f8b) {
          if ("function" == typeof _0x3ea72a) {
            _0x398f8b = _0x3ea72a;
            _0x3ea72a = undefined;
          }
          var _0xb175c6 = this;
          if (!_0x398f8b) {
            return _0x5494a1.asPromise(_0x33a689, _0xb175c6, _0x2cfa78, _0x3ea72a);
          }
          var _0x5e6a21 = _0x398f8b === _0x593aca;
          function _0x1070b0(_0x527562, _0x480713) {
            if (_0x398f8b) {
              var _0x5b6800 = _0x398f8b;
              _0x398f8b = null;
              if (_0x5e6a21) {
                throw _0x527562;
              }
              _0x5b6800(_0x527562, _0x480713);
            }
          }
          function _0x68b3cd(_0x23d84f) {
            var _0x1eefe0 = _0x23d84f.lastIndexOf('google/protobuf/');
            if (_0x1eefe0 > -0x1) {
              var _0x59f18b = _0x23d84f.substring(_0x1eefe0);
              if (_0x59f18b in _0x388e5c) {
                return _0x59f18b;
              }
            }
            return null;
          }
          function _0x4a681a(_0x1a90f6, _0x15eb5f) {
            try {
              if (_0x5494a1.isString(_0x15eb5f) && '{' === _0x15eb5f.charAt(0x0)) {
                _0x15eb5f = JSON.parse(_0x15eb5f);
              }
              if (_0x5494a1.isString(_0x15eb5f)) {
                _0x5bf5d4.filename = _0x1a90f6;
                var _0x20fcc6;
                var _0x7750ba = _0x5bf5d4(_0x15eb5f, _0xb175c6, _0x3ea72a);
                var _0x835818 = 0x0;
                if (_0x7750ba.imports) {
                  for (; _0x835818 < _0x7750ba.imports.length; ++_0x835818) {
                    if (_0x20fcc6 = _0x68b3cd(_0x7750ba.imports[_0x835818]) || _0xb175c6.resolvePath(_0x1a90f6, _0x7750ba.imports[_0x835818])) {
                      _0x281e4f(_0x20fcc6);
                    }
                  }
                }
                if (_0x7750ba.weakImports) {
                  for (_0x835818 = 0x0; _0x835818 < _0x7750ba.weakImports.length; ++_0x835818) {
                    if (_0x20fcc6 = _0x68b3cd(_0x7750ba.weakImports[_0x835818]) || _0xb175c6.resolvePath(_0x1a90f6, _0x7750ba.weakImports[_0x835818])) {
                      _0x281e4f(_0x20fcc6, true);
                    }
                  }
                }
              } else {
                _0xb175c6.setOptions(_0x15eb5f.options).addJSON(_0x15eb5f.nested);
              }
            } catch (_0x14a961) {
              _0x1070b0(_0x14a961);
            }
            if (!(_0x5e6a21 || _0x24a5ab)) {
              _0x1070b0(null, _0xb175c6);
            }
          }
          function _0x281e4f(_0x180033, _0x2ad5a1) {
            if (!(_0xb175c6.files.indexOf(_0x180033) > -0x1)) {
              _0xb175c6.files.push(_0x180033);
              if (_0x180033 in _0x388e5c) {
                if (_0x5e6a21) {
                  _0x4a681a(_0x180033, _0x388e5c[_0x180033]);
                } else {
                  ++_0x24a5ab;
                  setTimeout(function () {
                    --_0x24a5ab;
                    _0x4a681a(_0x180033, _0x388e5c[_0x180033]);
                  });
                }
              } else {
                if (_0x5e6a21) {
                  var _0xc7e054;
                  try {
                    _0xc7e054 = _0x5494a1.fs.readFileSync(_0x180033).toString("utf8");
                  } catch (_0xf1053e) {
                    return void (_0x2ad5a1 || _0x1070b0(_0xf1053e));
                  }
                  _0x4a681a(_0x180033, _0xc7e054);
                } else {
                  ++_0x24a5ab;
                  _0xb175c6.fetch(_0x180033, function (_0x31e473, _0x30822e) {
                    --_0x24a5ab;
                    if (_0x398f8b) {
                      if (_0x31e473) {
                        if (_0x2ad5a1) {
                          if (!_0x24a5ab) {
                            _0x1070b0(null, _0xb175c6);
                          }
                        } else {
                          _0x1070b0(_0x31e473);
                        }
                      } else {
                        _0x4a681a(_0x180033, _0x30822e);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x24a5ab = 0x0;
          if (_0x5494a1.isString(_0x2cfa78)) {
            _0x2cfa78 = [_0x2cfa78];
          }
          var _0xdfe1c4;
          for (var _0x5e824a = 0x0; _0x5e824a < _0x2cfa78.length; ++_0x5e824a) {
            if (_0xdfe1c4 = _0xb175c6.resolvePath('', _0x2cfa78[_0x5e824a])) {
              _0x281e4f(_0xdfe1c4);
            }
          }
          if (_0x5e6a21) {
            return _0xb175c6;
          }
          if (!_0x24a5ab) {
            _0x1070b0(null, _0xb175c6);
          }
        };
        _0x3a820f.prototype.loadSync = function (_0x53e49e, _0x540b8d) {
          if (!_0x5494a1.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x53e49e, _0x540b8d, _0x593aca);
        };
        _0x3a820f.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x27c3dd) {
              return "'extend " + _0x27c3dd.extend + "' in " + _0x27c3dd.parent.fullName;
            }).join(", "));
          }
          return _0xd9e951.prototype.resolveAll.call(this);
        };
        var _0x200664 = /^[A-Z]/;
        function _0x40c2dc(_0x40f148, _0x24845a) {
          var _0x18443c = _0x24845a.parent.lookup(_0x24845a.extend);
          if (_0x18443c) {
            var _0x3254d1 = new _0x57bc81(_0x24845a.fullName, _0x24845a.id, _0x24845a.type, _0x24845a.rule, undefined, _0x24845a.options);
            _0x3254d1.declaringField = _0x24845a;
            _0x24845a.extensionField = _0x3254d1;
            _0x18443c.add(_0x3254d1);
            return true;
          }
          return false;
        }
        _0x3a820f.prototype._handleAdd = function (_0x71013b) {
          if (_0x71013b instanceof _0x57bc81) {
            if (!(undefined === _0x71013b.extend || _0x71013b.extensionField || _0x40c2dc(0x0, _0x71013b))) {
              this.deferred.push(_0x71013b);
            }
          } else {
            if (_0x71013b instanceof _0x5f46fb) {
              if (_0x200664.test(_0x71013b.name)) {
                _0x71013b.parent[_0x71013b.name] = _0x71013b.values;
              }
            } else {
              if (!(_0x71013b instanceof _0x937c4f)) {
                if (_0x71013b instanceof _0x42edaa) {
                  for (var _0x35a06e = 0x0; _0x35a06e < this.deferred.length;) {
                    if (_0x40c2dc(0x0, this.deferred[_0x35a06e])) {
                      this.deferred.splice(_0x35a06e, 0x1);
                    } else {
                      ++_0x35a06e;
                    }
                  }
                }
                for (var _0xc12508 = 0x0; _0xc12508 < _0x71013b.nestedArray.length; ++_0xc12508) {
                  this._handleAdd(_0x71013b._nestedArray[_0xc12508]);
                }
                if (_0x200664.test(_0x71013b.name)) {
                  _0x71013b.parent[_0x71013b.name] = _0x71013b;
                }
              }
            }
          }
        };
        _0x3a820f.prototype._handleRemove = function (_0x488237) {
          if (_0x488237 instanceof _0x57bc81) {
            if (undefined !== _0x488237.extend) {
              if (_0x488237.extensionField) {
                _0x488237.extensionField.parent.remove(_0x488237.extensionField);
                _0x488237.extensionField = null;
              } else {
                var _0xac7e5b = this.deferred.indexOf(_0x488237);
                if (_0xac7e5b > -0x1) {
                  this.deferred.splice(_0xac7e5b, 0x1);
                }
              }
            }
          } else {
            if (_0x488237 instanceof _0x5f46fb) {
              if (_0x200664.test(_0x488237.name)) {
                delete _0x488237.parent[_0x488237.name];
              }
            } else {
              if (_0x488237 instanceof _0xd9e951) {
                for (var _0x49cc1b = 0x0; _0x49cc1b < _0x488237.nestedArray.length; ++_0x49cc1b) {
                  this._handleRemove(_0x488237._nestedArray[_0x49cc1b]);
                }
                if (_0x200664.test(_0x488237.name)) {
                  delete _0x488237.parent[_0x488237.name];
                }
              }
            }
          }
        };
        _0x3a820f._configure = function (_0x2537c6, _0x5be48c, _0x2ccb30) {
          _0x42edaa = _0x2537c6;
          _0x5bf5d4 = _0x5be48c;
          _0x388e5c = _0x2ccb30;
        };
        _0x5a404f.exports;
      }, function () {
        return {
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x4e0622, _0x1b7338, _0x52937d, _0x3cac71, _0x571e63) {
        var _0x1cab79;
        var _0x5b3360;
        var _0x5f2047 = _0x52937d.exports = _0x1b7338("./util/minimal");
        var _0x1e0404 = _0x1b7338("./roots");
        _0x5f2047.codegen = _0x1b7338("@protobufjs/codegen");
        _0x5f2047.fetch = _0x1b7338("@protobufjs/fetch");
        _0x5f2047.path = _0x1b7338("@protobufjs/path");
        _0x5f2047.fs = _0x5f2047.inquire('fs');
        _0x5f2047.toArray = function (_0x235c1c) {
          if (_0x235c1c) {
            var _0x3e8da8 = Object.keys(_0x235c1c);
            var _0x2624af = new Array(_0x3e8da8.length);
            for (var _0x29cd4c = 0x0; _0x29cd4c < _0x3e8da8.length;) {
              _0x2624af[_0x29cd4c] = _0x235c1c[_0x3e8da8[_0x29cd4c++]];
            }
            return _0x2624af;
          }
          return [];
        };
        _0x5f2047.toObject = function (_0x37c5f3) {
          var _0x589116 = {};
          for (var _0x53787e = 0x0; _0x53787e < _0x37c5f3.length;) {
            var _0x2692e1 = _0x37c5f3[_0x53787e++];
            var _0x426f03 = _0x37c5f3[_0x53787e++];
            if (undefined !== _0x426f03) {
              _0x589116[_0x2692e1] = _0x426f03;
            }
          }
          return _0x589116;
        };
        var _0x30a72e = /\\/g;
        var _0x23286c = /"/g;
        _0x5f2047.isReserved = function (_0x370e7c) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x370e7c);
        };
        _0x5f2047.safeProp = function (_0x539e10) {
          return !/^[$\w_]+$/.test(_0x539e10) || _0x5f2047.isReserved(_0x539e10) ? "[\"" + _0x539e10.replace(_0x30a72e, "\\\\").replace(_0x23286c, "\\\"") + "\"]" : '.' + _0x539e10;
        };
        _0x5f2047.ucFirst = function (_0x25c4f6) {
          return _0x25c4f6.charAt(0x0).toUpperCase() + _0x25c4f6.substring(0x1);
        };
        var _0x3a70e2 = /_([a-z])/g;
        _0x5f2047.camelCase = function (_0x571e4f) {
          return _0x571e4f.substring(0x0, 0x1) + _0x571e4f.substring(0x1).replace(_0x3a70e2, function (_0x7cb69a, _0x34c146) {
            return _0x34c146.toUpperCase();
          });
        };
        _0x5f2047.compareFieldsById = function (_0x2e2450, _0x5bbde5) {
          return _0x2e2450.id - _0x5bbde5.id;
        };
        _0x5f2047.decorateType = function (_0x212e9b, _0x51b454) {
          if (_0x212e9b.$type) {
            if (_0x51b454 && _0x212e9b.$type.name !== _0x51b454) {
              _0x5f2047.decorateRoot.remove(_0x212e9b.$type);
              _0x212e9b.$type.name = _0x51b454;
              _0x5f2047.decorateRoot.add(_0x212e9b.$type);
            }
            return _0x212e9b.$type;
          }
          if (!_0x1cab79) {
            _0x1cab79 = _0x1b7338("./type");
          }
          var _0x602d6e = new _0x1cab79(_0x51b454 || _0x212e9b.name);
          _0x5f2047.decorateRoot.add(_0x602d6e);
          _0x602d6e.ctor = _0x212e9b;
          Object.defineProperty(_0x212e9b, "$type", {
            'value': _0x602d6e,
            'enumerable': false
          });
          Object.defineProperty(_0x212e9b.prototype, '$type', {
            'value': _0x602d6e,
            'enumerable': false
          });
          return _0x602d6e;
        };
        var _0x228b20 = 0x0;
        _0x5f2047.decorateEnum = function (_0x23f78d) {
          if (_0x23f78d.$type) {
            return _0x23f78d.$type;
          }
          if (!_0x5b3360) {
            _0x5b3360 = _0x1b7338("./enum");
          }
          var _0x541f6d = new _0x5b3360("Enum" + _0x228b20++, _0x23f78d);
          _0x5f2047.decorateRoot.add(_0x541f6d);
          Object.defineProperty(_0x23f78d, "$type", {
            'value': _0x541f6d,
            'enumerable': false
          });
          return _0x541f6d;
        };
        _0x5f2047.setProperty = function (_0x5a7462, _0x9795cb, _0x7d1e2b) {
          if ("object" != typeof _0x5a7462) {
            throw TypeError("dst must be an object");
          }
          if (!_0x9795cb) {
            throw TypeError("path must be specified");
          }
          return function _0xd6b508(_0x5dc4c1, _0x307dc7, _0x3895a3) {
            var _0x15ffbd = _0x307dc7.shift();
            if (_0x307dc7.length > 0x0) {
              _0x5dc4c1[_0x15ffbd] = _0xd6b508(_0x5dc4c1[_0x15ffbd] || {}, _0x307dc7, _0x3895a3);
            } else {
              var _0x5bc17f = _0x5dc4c1[_0x15ffbd];
              if (_0x5bc17f) {
                _0x3895a3 = [].concat(_0x5bc17f).concat(_0x3895a3);
              }
              _0x5dc4c1[_0x15ffbd] = _0x3895a3;
            }
            return _0x5dc4c1;
          }(_0x5a7462, _0x9795cb = _0x9795cb.split('.'), _0x7d1e2b);
        };
        Object.defineProperty(_0x5f2047, 'decorateRoot', {
          'get': function () {
            return _0x1e0404.decorated || (_0x1e0404.decorated = new (_0x1b7338('./root'))());
          }
        });
        _0x52937d.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          '@protobufjs/codegen': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          '@protobufjs/path': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          './type': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/object.js', function (_0x229dcc, _0x365da5, _0x1ff296, _0x4a9933, _0x3ee509) {
        _0x1ff296.exports = _0x43219b;
        _0x43219b.className = 'ReflectionObject';
        var _0xebe379;
        var _0x3686ad = _0x365da5('./util');
        function _0x43219b(_0x41c135, _0x450d71) {
          if (!_0x3686ad.isString(_0x41c135)) {
            throw TypeError("name must be a string");
          }
          if (_0x450d71 && !_0x3686ad.isObject(_0x450d71)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x450d71;
          this.parsedOptions = null;
          this.name = _0x41c135;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x43219b.prototype, {
          'root': {
            'get': function () {
              for (var _0x53f0f2 = this; null !== _0x53f0f2.parent;) {
                _0x53f0f2 = _0x53f0f2.parent;
              }
              return _0x53f0f2;
            }
          },
          'fullName': {
            'get': function () {
              var _0x1049d8 = [this.name];
              for (var _0x2988bd = this.parent; _0x2988bd;) {
                _0x1049d8.unshift(_0x2988bd.name);
                _0x2988bd = _0x2988bd.parent;
              }
              return _0x1049d8.join('.');
            }
          }
        });
        _0x43219b.prototype.toJSON = function () {
          throw Error();
        };
        _0x43219b.prototype.onAdd = function (_0x56c20f) {
          if (this.parent && this.parent !== _0x56c20f) {
            this.parent.remove(this);
          }
          this.parent = _0x56c20f;
          this.resolved = false;
          var _0x3fef71 = _0x56c20f.root;
          if (_0x3fef71 instanceof _0xebe379) {
            _0x3fef71._handleAdd(this);
          }
        };
        _0x43219b.prototype.onRemove = function (_0x3ee4c3) {
          var _0x43d6d9 = _0x3ee4c3.root;
          if (_0x43d6d9 instanceof _0xebe379) {
            _0x43d6d9._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x43219b.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0xebe379) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x43219b.prototype.getOption = function (_0x179014) {
          if (this.options) {
            return this.options[_0x179014];
          }
        };
        _0x43219b.prototype.setOption = function (_0x4218f1, _0x5c7796, _0x462023) {
          if (!(_0x462023 && this.options && undefined !== this.options[_0x4218f1])) {
            (this.options || (this.options = {}))[_0x4218f1] = _0x5c7796;
          }
          return this;
        };
        _0x43219b.prototype.setParsedOption = function (_0x2627a9, _0x4f84d1, _0x38fdfb) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x41abf4 = this.parsedOptions;
          if (_0x38fdfb) {
            var _0x2aeb1b = _0x41abf4.find(function (_0x59ca5f) {
              return Object.prototype.hasOwnProperty.call(_0x59ca5f, _0x2627a9);
            });
            if (_0x2aeb1b) {
              var _0x1959ff = _0x2aeb1b[_0x2627a9];
              _0x3686ad.setProperty(_0x1959ff, _0x38fdfb, _0x4f84d1);
            } else {
              (_0x2aeb1b = {})[_0x2627a9] = _0x3686ad.setProperty({}, _0x38fdfb, _0x4f84d1);
              _0x41abf4.push(_0x2aeb1b);
            }
          } else {
            var _0x247cef = {
              _0x2627a9: _0x4f84d1
            };
            _0x41abf4.push(_0x247cef);
          }
          return this;
        };
        _0x43219b.prototype.setOptions = function (_0x29b0de, _0x5ae51b) {
          if (_0x29b0de) {
            var _0x2f902d = Object.keys(_0x29b0de);
            for (var _0x2483a2 = 0x0; _0x2483a2 < _0x2f902d.length; ++_0x2483a2) {
              this.setOption(_0x2f902d[_0x2483a2], _0x29b0de[_0x2f902d[_0x2483a2]], _0x5ae51b);
            }
          }
          return this;
        };
        _0x43219b.prototype.toString = function () {
          var _0x3e3625 = this.constructor.className;
          var _0xb760f6 = this.fullName;
          return _0xb760f6.length ? _0x3e3625 + " " + _0xb760f6 : _0x3e3625;
        };
        _0x43219b._configure = function (_0x4abfc4) {
          _0xebe379 = _0x4abfc4;
        };
        _0x1ff296.exports;
      }, function () {
        return {
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0x14ac74, _0x451604, _0x232de2, _0x58f885, _0xd8f3d0) {
        _0x232de2.exports = _0x164464;
        var _0x58051b = _0x451604("./object");
        ((_0x164464.prototype = Object.create(_0x58051b.prototype)).constructor = _0x164464).className = "Enum";
        var _0x1959c1 = _0x451604('./namespace');
        var _0x108cf8 = _0x451604("./util");
        function _0x164464(_0x2c8261, _0x599523, _0x4f54af, _0x37cb7c, _0x30efe0) {
          _0x58051b.call(this, _0x2c8261, _0x4f54af);
          if (_0x599523 && "object" != typeof _0x599523) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x37cb7c;
          this.comments = _0x30efe0 || {};
          this.reserved = undefined;
          if (_0x599523) {
            var _0x5e2b02 = Object.keys(_0x599523);
            for (var _0x2d368a = 0x0; _0x2d368a < _0x5e2b02.length; ++_0x2d368a) {
              if ("number" == typeof _0x599523[_0x5e2b02[_0x2d368a]]) {
                this.valuesById[this.values[_0x5e2b02[_0x2d368a]] = _0x599523[_0x5e2b02[_0x2d368a]]] = _0x5e2b02[_0x2d368a];
              }
            }
          }
        }
        _0x164464.fromJSON = function (_0x2ce5e1, _0x27c829) {
          var _0x18fd24 = new _0x164464(_0x2ce5e1, _0x27c829.values, _0x27c829.options, _0x27c829.comment, _0x27c829.comments);
          _0x18fd24.reserved = _0x27c829.reserved;
          return _0x18fd24;
        };
        _0x164464.prototype.toJSON = function (_0x35d649) {
          var _0x3186ca = !!_0x35d649 && Boolean(_0x35d649.keepComments);
          return _0x108cf8.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", _0x3186ca ? this.comment : undefined, "comments", _0x3186ca ? this.comments : undefined]);
        };
        _0x164464.prototype.add = function (_0x5b4b72, _0x18fe17, _0xefc78) {
          if (!_0x108cf8.isString(_0x5b4b72)) {
            throw TypeError("name must be a string");
          }
          if (!_0x108cf8.isInteger(_0x18fe17)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x5b4b72]) {
            throw Error("duplicate name '" + _0x5b4b72 + "' in " + this);
          }
          if (this.isReservedId(_0x18fe17)) {
            throw Error("id " + _0x18fe17 + " is reserved in " + this);
          }
          if (this.isReservedName(_0x5b4b72)) {
            throw Error("name '" + _0x5b4b72 + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x18fe17]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x18fe17 + " in " + this);
            }
            this.values[_0x5b4b72] = _0x18fe17;
          } else {
            this.valuesById[this.values[_0x5b4b72] = _0x18fe17] = _0x5b4b72;
          }
          this.comments[_0x5b4b72] = _0xefc78 || null;
          return this;
        };
        _0x164464.prototype.remove = function (_0x1e1257) {
          if (!_0x108cf8.isString(_0x1e1257)) {
            throw TypeError("name must be a string");
          }
          var _0x1574b6 = this.values[_0x1e1257];
          if (null == _0x1574b6) {
            throw Error("name '" + _0x1e1257 + "' does not exist in " + this);
          }
          delete this.valuesById[_0x1574b6];
          delete this.values[_0x1e1257];
          delete this.comments[_0x1e1257];
          return this;
        };
        _0x164464.prototype.isReservedId = function (_0x36ebe0) {
          return _0x1959c1.isReservedId(this.reserved, _0x36ebe0);
        };
        _0x164464.prototype.isReservedName = function (_0x5bb028) {
          return _0x1959c1.isReservedName(this.reserved, _0x5bb028);
        };
        _0x232de2.exports;
      }, function () {
        return {
          './object': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js', function (_0x36b1cd, _0x1eea8c, _0x59bccc, _0x356374, _0x18814b) {
        _0x59bccc.exports = function (_0x5ae3f9) {
          var _0x1be71c;
          var _0xca7717 = _0xa0ff4.codegen(['m', 'w'], _0x5ae3f9.name + '$encode')("if(!w)")("w=Writer.create()");
          var _0x6d28b7 = _0x5ae3f9.fieldsArray.slice().sort(_0xa0ff4.compareFieldsById);
          for (var _0x10704a = 0x0; _0x10704a < _0x6d28b7.length; ++_0x10704a) {
            var _0x15b6e1 = _0x6d28b7[_0x10704a].resolve();
            var _0x4935e8 = _0x5ae3f9._fieldsArray.indexOf(_0x15b6e1);
            var _0x4ab8b7 = _0x15b6e1.resolvedType instanceof _0xbb01cc ? "int32" : _0x15b6e1.type;
            var _0x5220a1 = _0x5f1c1f.basic[_0x4ab8b7];
            _0x1be71c = 'm' + _0xa0ff4.safeProp(_0x15b6e1.name);
            if (_0x15b6e1.map) {
              _0xca7717("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x1be71c, _0x15b6e1.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x1be71c)('w.uint32(%i).fork().uint32(%i).%s(ks[i])', (_0x15b6e1.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x5f1c1f.mapKey[_0x15b6e1.keyType], _0x15b6e1.keyType);
              if (undefined === _0x5220a1) {
                _0xca7717("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", _0x4935e8, _0x1be71c);
              } else {
                _0xca7717(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x5220a1, _0x4ab8b7, _0x1be71c);
              }
              _0xca7717('}')('}');
            } else if (_0x15b6e1.repeated) {
              _0xca7717('if(%s!=null&&%s.length){', _0x1be71c, _0x1be71c);
              if (_0x15b6e1.packed && undefined !== _0x5f1c1f.packed[_0x4ab8b7]) {
                _0xca7717("w.uint32(%i).fork()", (_0x15b6e1.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x1be71c)("w.%s(%s[i])", _0x4ab8b7, _0x1be71c)("w.ldelim()");
              } else {
                _0xca7717("for(var i=0;i<%s.length;++i)", _0x1be71c);
                if (undefined === _0x5220a1) {
                  if (_0x15b6e1.resolvedType.group) {
                    _0xca7717("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x4935e8, _0x1be71c + "[i]", (_0x15b6e1.id << 0x3 | 0x3) >>> 0x0, (_0x15b6e1.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0xca7717("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x4935e8, _0x1be71c + "[i]", (_0x15b6e1.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0xca7717("w.uint32(%i).%s(%s[i])", (_0x15b6e1.id << 0x3 | _0x5220a1) >>> 0x0, _0x4ab8b7, _0x1be71c);
                }
              }
              _0xca7717('}');
            } else {
              if (_0x15b6e1.optional) {
                _0xca7717("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", _0x1be71c, _0x15b6e1.name);
              }
              if (undefined === _0x5220a1) {
                if (_0x15b6e1.resolvedType.group) {
                  _0xca7717("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x4935e8, _0x1be71c, (_0x15b6e1.id << 0x3 | 0x3) >>> 0x0, (_0x15b6e1.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0xca7717("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x4935e8, _0x1be71c, (_0x15b6e1.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0xca7717("w.uint32(%i).%s(%s)", (_0x15b6e1.id << 0x3 | _0x5220a1) >>> 0x0, _0x4ab8b7, _0x1be71c);
              }
            }
          }
          return _0xca7717("return w");
        };
        var _0xbb01cc = _0x1eea8c('./enum');
        var _0x5f1c1f = _0x1eea8c('./types');
        var _0xa0ff4 = _0x1eea8c("./util");
        _0x59bccc.exports;
      }, function () {
        return {
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x3eae72, _0x384e4f, _0x4d6a2f, _0x322a67, _0xadf293) {
        var _0x178384 = _0x4d6a2f.exports = _0x384e4f('./index-minimal');
        _0x178384.build = "light";
        _0x178384.load = function (_0x28d9ff, _0x3d16a7, _0x390c7d) {
          if ('function' == typeof _0x3d16a7) {
            _0x390c7d = _0x3d16a7;
            _0x3d16a7 = new _0x178384.Root();
          } else if (!_0x3d16a7) {
            _0x3d16a7 = new _0x178384.Root();
          }
          return _0x3d16a7.load(_0x28d9ff, _0x390c7d);
        };
        _0x178384.loadSync = function (_0x256411, _0x56ef01) {
          if (!_0x56ef01) {
            _0x56ef01 = new _0x178384.Root();
          }
          return _0x56ef01.loadSync(_0x256411);
        };
        _0x178384.encoder = _0x384e4f("./encoder");
        _0x178384.decoder = _0x384e4f("./decoder");
        _0x178384.verifier = _0x384e4f("./verifier");
        _0x178384.converter = _0x384e4f('./converter');
        _0x178384.ReflectionObject = _0x384e4f("./object");
        _0x178384.Namespace = _0x384e4f("./namespace");
        _0x178384.Root = _0x384e4f("./root");
        _0x178384.Enum = _0x384e4f('./enum');
        _0x178384.Type = _0x384e4f("./type");
        _0x178384.Field = _0x384e4f('./field');
        _0x178384.OneOf = _0x384e4f('./oneof');
        _0x178384.MapField = _0x384e4f("./mapfield");
        _0x178384.Service = _0x384e4f("./service");
        _0x178384.Method = _0x384e4f('./method');
        _0x178384.Message = _0x384e4f("./message");
        _0x178384.wrappers = _0x384e4f('./wrappers');
        _0x178384.types = _0x384e4f('./types');
        _0x178384.util = _0x384e4f("./util");
        _0x178384.ReflectionObject._configure(_0x178384.Root);
        _0x178384.Namespace._configure(_0x178384.Type, _0x178384.Service, _0x178384.Enum);
        _0x178384.Root._configure(_0x178384.Type);
        _0x178384.Field._configure(_0x178384.Type);
        _0x4d6a2f.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/object.js',
          './namespace': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './mapfield': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js',
          './service': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './message': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './wrappers': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js', function (_0x593d08, _0x2c30bd, _0x382bd2, _0x34808c, _0x31e5b3) {
        _0x382bd2.exports = _0x3c4237;
        var _0x4f663c = /[\s{}=;:[\],'"()<>]/g;
        var _0x228040 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x47c248 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0xd01ddb = /^ *[*/]+ */;
        var _0x452752 = /^\s*\*?\/*/;
        var _0x46552a = /\n/g;
        var _0x499f94 = /\s/;
        var _0x1818da = /\\(.?)/g;
        var _0x5ade04 = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0xcc5162(_0x1e4ce9) {
          return _0x1e4ce9.replace(_0x1818da, function (_0x556ea6, _0x2c7927) {
            switch (_0x2c7927) {
              case "\\":
              case '':
                return _0x2c7927;
              default:
                return _0x5ade04[_0x2c7927] || '';
            }
          });
        }
        function _0x3c4237(_0x4000e2, _0x127373) {
          _0x4000e2 = _0x4000e2.toString();
          var _0x3ea1c7 = 0x0;
          var _0xfd2184 = _0x4000e2.length;
          var _0x848b0f = 0x1;
          var _0x316dd5 = null;
          var _0x344543 = null;
          var _0x408ec5 = 0x0;
          var _0x373e25 = false;
          var _0x2f2e18 = false;
          var _0x1bd3eb = [];
          var _0x317a64 = null;
          function _0x2f7ddb(_0x582c5e, _0x22f4f9, _0x564f0b) {
            _0x316dd5 = _0x4000e2.charAt(_0x582c5e++);
            _0x408ec5 = _0x848b0f;
            _0x373e25 = false;
            _0x2f2e18 = _0x564f0b;
            var _0x2995ee;
            var _0x33d0dc = _0x582c5e - (_0x127373 ? 0x2 : 0x3);
            do {
              if (--_0x33d0dc < 0x0 || "\n" === (_0x2995ee = _0x4000e2.charAt(_0x33d0dc))) {
                _0x373e25 = true;
                break;
              }
            } while (" " === _0x2995ee || "\t" === _0x2995ee);
            var _0xbeda0a = _0x4000e2.substring(_0x582c5e, _0x22f4f9).split(_0x46552a);
            for (var _0x465ec2 = 0x0; _0x465ec2 < _0xbeda0a.length; ++_0x465ec2) {
              _0xbeda0a[_0x465ec2] = _0xbeda0a[_0x465ec2].replace(_0x127373 ? _0x452752 : _0xd01ddb, '').trim();
            }
            _0x344543 = _0xbeda0a.join("\n").trim();
          }
          function _0x15941b(_0xc2d1a9) {
            var _0x9acb7d = _0x2168df(_0xc2d1a9);
            var _0x28af42 = _0x4000e2.substring(_0xc2d1a9, _0x9acb7d);
            return /^\s*\/{1,2}/.test(_0x28af42);
          }
          function _0x2168df(_0x78bfdc) {
            for (var _0x2f6017 = _0x78bfdc; _0x2f6017 < _0xfd2184 && "\n" !== _0x4000e2.charAt(_0x2f6017);) {
              _0x2f6017++;
            }
            return _0x2f6017;
          }
          function _0x5664dc() {
            if (_0x1bd3eb.length > 0x0) {
              return _0x1bd3eb.shift();
            }
            if (_0x317a64) {
              return function () {
                var _0x155aa2 = "'" === _0x317a64 ? _0x47c248 : _0x228040;
                _0x155aa2.lastIndex = _0x3ea1c7 - 0x1;
                var _0x1fe87a = _0x155aa2.exec(_0x4000e2);
                if (!_0x1fe87a) {
                  throw Error("illegal string (line " + _0x848b0f + ')');
                }
                _0x3ea1c7 = _0x155aa2.lastIndex;
                _0x9b77a1(_0x317a64);
                _0x317a64 = null;
                return _0xcc5162(_0x1fe87a[0x1]);
              }();
            }
            var _0x4d9233;
            var _0x22d4de;
            var _0x254335;
            var _0x377b52;
            var _0x2ee3d2;
            var _0x8191ae = 0x0 === _0x3ea1c7;
            do {
              if (_0x3ea1c7 === _0xfd2184) {
                return null;
              }
              for (_0x4d9233 = false; _0x499f94.test(_0x254335 = _0x4000e2.charAt(_0x3ea1c7));) {
                if ("\n" === _0x254335) {
                  _0x8191ae = true;
                  ++_0x848b0f;
                }
                if (++_0x3ea1c7 === _0xfd2184) {
                  return null;
                }
              }
              if ('/' === _0x4000e2.charAt(_0x3ea1c7)) {
                if (++_0x3ea1c7 === _0xfd2184) {
                  throw Error("illegal comment (line " + _0x848b0f + ')');
                }
                if ('/' === _0x4000e2.charAt(_0x3ea1c7)) {
                  if (_0x127373) {
                    _0x377b52 = _0x3ea1c7;
                    _0x2ee3d2 = false;
                    if (_0x15941b(_0x3ea1c7)) {
                      _0x2ee3d2 = true;
                      do {
                        if ((_0x3ea1c7 = _0x2168df(_0x3ea1c7)) === _0xfd2184) {
                          break;
                        }
                        _0x3ea1c7++;
                      } while (_0x15941b(_0x3ea1c7));
                    } else {
                      _0x3ea1c7 = Math.min(_0xfd2184, _0x2168df(_0x3ea1c7) + 0x1);
                    }
                    if (_0x2ee3d2) {
                      _0x2f7ddb(_0x377b52, _0x3ea1c7, _0x8191ae);
                    }
                    _0x848b0f++;
                    _0x4d9233 = true;
                  } else {
                    for (_0x2ee3d2 = '/' === _0x4000e2.charAt(_0x377b52 = _0x3ea1c7 + 0x1); "\n" !== _0x4000e2.charAt(++_0x3ea1c7);) {
                      if (_0x3ea1c7 === _0xfd2184) {
                        return null;
                      }
                    }
                    ++_0x3ea1c7;
                    if (_0x2ee3d2) {
                      _0x2f7ddb(_0x377b52, _0x3ea1c7 - 0x1, _0x8191ae);
                    }
                    ++_0x848b0f;
                    _0x4d9233 = true;
                  }
                } else {
                  if ('*' !== (_0x254335 = _0x4000e2.charAt(_0x3ea1c7))) {
                    return '/';
                  }
                  _0x377b52 = _0x3ea1c7 + 0x1;
                  _0x2ee3d2 = _0x127373 || '*' === _0x4000e2.charAt(_0x377b52);
                  do {
                    if ("\n" === _0x254335) {
                      ++_0x848b0f;
                    }
                    if (++_0x3ea1c7 === _0xfd2184) {
                      throw Error("illegal comment (line " + _0x848b0f + ')');
                    }
                    _0x22d4de = _0x254335;
                    _0x254335 = _0x4000e2.charAt(_0x3ea1c7);
                  } while ('*' !== _0x22d4de || '/' !== _0x254335);
                  ++_0x3ea1c7;
                  if (_0x2ee3d2) {
                    _0x2f7ddb(_0x377b52, _0x3ea1c7 - 0x2, _0x8191ae);
                  }
                  _0x4d9233 = true;
                }
              }
            } while (_0x4d9233);
            var _0x21f241 = _0x3ea1c7;
            _0x4f663c.lastIndex = 0x0;
            if (!_0x4f663c.test(_0x4000e2.charAt(_0x21f241++))) {
              for (; _0x21f241 < _0xfd2184 && !_0x4f663c.test(_0x4000e2.charAt(_0x21f241));) {
                ++_0x21f241;
              }
            }
            var _0x1103fb = _0x4000e2.substring(_0x3ea1c7, _0x3ea1c7 = _0x21f241);
            if (!("\"" !== _0x1103fb && "'" !== _0x1103fb)) {
              _0x317a64 = _0x1103fb;
            }
            return _0x1103fb;
          }
          function _0x9b77a1(_0x46dff7) {
            _0x1bd3eb.push(_0x46dff7);
          }
          function _0x5403b3() {
            if (!_0x1bd3eb.length) {
              var _0x235da8 = _0x5664dc();
              if (null === _0x235da8) {
                return null;
              }
              _0x9b77a1(_0x235da8);
            }
            return _0x1bd3eb[0x0];
          }
          return Object.defineProperty({
            'next': _0x5664dc,
            'peek': _0x5403b3,
            'push': _0x9b77a1,
            'skip': function (_0x340f2b, _0x4e02e2) {
              var _0x1a5e9f = _0x5403b3();
              if (_0x1a5e9f === _0x340f2b) {
                _0x5664dc();
                return true;
              }
              if (!_0x4e02e2) {
                throw Error("illegal " + ("token '" + _0x1a5e9f + "', '" + _0x340f2b + "' expected") + " (line " + _0x848b0f + ')');
              }
              return false;
            },
            'cmnt': function (_0x11388c) {
              var _0x2739dd = null;
              if (undefined === _0x11388c) {
                if (_0x408ec5 === _0x848b0f - 0x1 && (_0x127373 || '*' === _0x316dd5 || _0x373e25)) {
                  _0x2739dd = _0x2f2e18 ? _0x344543 : null;
                }
              } else {
                if (_0x408ec5 < _0x11388c) {
                  _0x5403b3();
                }
                if (!(_0x408ec5 !== _0x11388c || _0x373e25 || !_0x127373 && '/' !== _0x316dd5)) {
                  _0x2739dd = _0x2f2e18 ? null : _0x344543;
                }
              }
              return _0x2739dd;
            }
          }, "line", {
            'get': function () {
              return _0x848b0f;
            }
          });
        }
        _0x3c4237.unescape = _0xcc5162;
        _0x382bd2.exports;
      }, {});
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/parse.js', function (_0x4069df, _0x956970, _0x48f820, _0x1471fa, _0x5116ed) {
        _0x48f820.exports = _0x560e0d;
        _0x560e0d.filename = null;
        _0x560e0d.defaults = {
          'keepCase': false
        };
        var _0x522405 = _0x956970("./tokenize");
        var _0x1a3150 = _0x956970('./root');
        var _0x534f2d = _0x956970("./type");
        var _0x4cb8e9 = _0x956970('./field');
        var _0x99d7cc = _0x956970("./mapfield");
        var _0x809a11 = _0x956970("./oneof");
        var _0x1cbe5a = _0x956970('./enum');
        var _0x367acf = _0x956970('./service');
        var _0x241880 = _0x956970("./method");
        var _0x47b394 = _0x956970("./types");
        var _0xcd9773 = _0x956970("./util");
        var _0x5174b1 = /^[1-9][0-9]*$/;
        var _0x2fee46 = /^-?[1-9][0-9]*$/;
        var _0x2bdcd4 = /^0[x][0-9a-fA-F]+$/;
        var _0xc37f4b = /^-?0[x][0-9a-fA-F]+$/;
        var _0x29d2ce = /^0[0-7]+$/;
        var _0x57c170 = /^-?0[0-7]+$/;
        var _0xf0f42 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x3b6110 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x182b50 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x102f08 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x560e0d(_0x3bbf00, _0x1ddbb2, _0x4b0867) {
          if (!(_0x1ddbb2 instanceof _0x1a3150)) {
            _0x4b0867 = _0x1ddbb2;
            _0x1ddbb2 = new _0x1a3150();
          }
          if (!_0x4b0867) {
            _0x4b0867 = _0x560e0d.defaults;
          }
          var _0x261de2;
          var _0x7eb97;
          var _0x53f366;
          var _0x30063f;
          var _0x20332e;
          var _0xd408fa = _0x4b0867.preferTrailingComment || false;
          var _0x943769 = _0x522405(_0x3bbf00, _0x4b0867.alternateCommentMode || false);
          var _0x2f2daa = _0x943769.next;
          var _0x4ac727 = _0x943769.push;
          var _0x37abb8 = _0x943769.peek;
          var _0x41f763 = _0x943769.skip;
          var _0x393270 = _0x943769.cmnt;
          var _0x2d5492 = true;
          var _0x86159e = false;
          var _0x4a6a31 = _0x1ddbb2;
          var _0x2ee14c = _0x4b0867.keepCase ? function (_0x3d67aa) {
            return _0x3d67aa;
          } : _0xcd9773.camelCase;
          function _0x42fe54(_0x59cbeb, _0x36559c, _0x176a05) {
            var _0x40fde8 = _0x560e0d.filename;
            if (!_0x176a05) {
              _0x560e0d.filename = null;
            }
            return Error("illegal " + (_0x36559c || 'token') + " '" + _0x59cbeb + "' (" + (_0x40fde8 ? _0x40fde8 + ", " : '') + "line " + _0x943769.line + ')');
          }
          function _0x36548b() {
            var _0x2cd1b8;
            var _0x517b4b = [];
            do {
              if ("\"" !== (_0x2cd1b8 = _0x2f2daa()) && "'" !== _0x2cd1b8) {
                throw _0x42fe54(_0x2cd1b8);
              }
              _0x517b4b.push(_0x2f2daa());
              _0x41f763(_0x2cd1b8);
              _0x2cd1b8 = _0x37abb8();
            } while ("\"" === _0x2cd1b8 || "'" === _0x2cd1b8);
            return _0x517b4b.join('');
          }
          function _0x5f0cd0(_0x44a526) {
            var _0x16f83d = _0x2f2daa();
            switch (_0x16f83d) {
              case "'":
              case "\"":
                _0x4ac727(_0x16f83d);
                return _0x36548b();
              case 'true':
              case 'TRUE':
                return true;
              case 'false':
              case "FALSE":
                return false;
            }
            try {
              return function (_0x5f0595, _0x4b0ec9) {
                var _0x53ef4d = 0x1;
                if ('-' === _0x5f0595.charAt(0x0)) {
                  _0x53ef4d = -0x1;
                  _0x5f0595 = _0x5f0595.substring(0x1);
                }
                switch (_0x5f0595) {
                  case "inf":
                  case "INF":
                  case 'Inf':
                    return _0x53ef4d * Infinity;
                  case "nan":
                  case 'NAN':
                  case "Nan":
                  case 'NaN':
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x5174b1.test(_0x5f0595)) {
                  return _0x53ef4d * parseInt(_0x5f0595, 0xa);
                }
                if (_0x2bdcd4.test(_0x5f0595)) {
                  return _0x53ef4d * parseInt(_0x5f0595, 0x10);
                }
                if (_0x29d2ce.test(_0x5f0595)) {
                  return _0x53ef4d * parseInt(_0x5f0595, 0x8);
                }
                if (_0xf0f42.test(_0x5f0595)) {
                  return _0x53ef4d * parseFloat(_0x5f0595);
                }
                throw _0x42fe54(_0x5f0595, "number", _0x4b0ec9);
              }(_0x16f83d, true);
            } catch (_0x48f00e) {
              if (_0x44a526 && _0x182b50.test(_0x16f83d)) {
                return _0x16f83d;
              }
              throw _0x42fe54(_0x16f83d, "value");
            }
          }
          function _0x25f33f(_0xefef1e, _0x224b04) {
            var _0x3023ce;
            var _0x27e5ae;
            do {
              if (!_0x224b04 || "\"" !== (_0x3023ce = _0x37abb8()) && "'" !== _0x3023ce) {
                _0xefef1e.push([_0x27e5ae = _0x5db1ba(_0x2f2daa()), _0x41f763('to', true) ? _0x5db1ba(_0x2f2daa()) : _0x27e5ae]);
              } else {
                _0xefef1e.push(_0x36548b());
              }
            } while (_0x41f763(',', true));
            _0x41f763(';');
          }
          function _0x5db1ba(_0x379597, _0xb21a09) {
            switch (_0x379597) {
              case 'max':
              case "MAX":
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0xb21a09 && '-' === _0x379597.charAt(0x0)) {
              throw _0x42fe54(_0x379597, 'id');
            }
            if (_0x2fee46.test(_0x379597)) {
              return parseInt(_0x379597, 0xa);
            }
            if (_0xc37f4b.test(_0x379597)) {
              return parseInt(_0x379597, 0x10);
            }
            if (_0x57c170.test(_0x379597)) {
              return parseInt(_0x379597, 0x8);
            }
            throw _0x42fe54(_0x379597, 'id');
          }
          function _0x210367() {
            if (undefined !== _0x261de2) {
              throw _0x42fe54('package');
            }
            _0x261de2 = _0x2f2daa();
            if (!_0x182b50.test(_0x261de2)) {
              throw _0x42fe54(_0x261de2, "name");
            }
            _0x4a6a31 = _0x4a6a31.define(_0x261de2);
            _0x41f763(';');
          }
          function _0xa73ad0() {
            var _0x5c2aa7;
            var _0x20862a = _0x37abb8();
            switch (_0x20862a) {
              case 'weak':
                _0x5c2aa7 = _0x53f366 || (_0x53f366 = []);
                _0x2f2daa();
                break;
              case "public":
                _0x2f2daa();
              default:
                _0x5c2aa7 = _0x7eb97 || (_0x7eb97 = []);
            }
            _0x20862a = _0x36548b();
            _0x41f763(';');
            _0x5c2aa7.push(_0x20862a);
          }
          function _0xd85726() {
            _0x41f763('=');
            _0x30063f = _0x36548b();
            if (!(_0x86159e = "proto3" === _0x30063f) && 'proto2' !== _0x30063f) {
              throw _0x42fe54(_0x30063f, "syntax");
            }
            _0x41f763(';');
          }
          function _0xea978b(_0x5153ac, _0x2bcbf9) {
            switch (_0x2bcbf9) {
              case "option":
                _0x59f464(_0x5153ac, _0x2bcbf9);
                _0x41f763(';');
                return true;
              case "message":
                (function (_0x3bdecd, _0xfd21f) {
                  if (!_0x3b6110.test(_0xfd21f = _0x2f2daa())) {
                    throw _0x42fe54(_0xfd21f, "type name");
                  }
                  var _0xabf3ba = new _0x534f2d(_0xfd21f);
                  _0x314d65(_0xabf3ba, function (_0x910b4a) {
                    if (!_0xea978b(_0xabf3ba, _0x910b4a)) {
                      switch (_0x910b4a) {
                        case "map":
                          !function (_0x1f4ee1) {
                            _0x41f763('<');
                            var _0x32e9d8 = _0x2f2daa();
                            if (undefined === _0x47b394.mapKey[_0x32e9d8]) {
                              throw _0x42fe54(_0x32e9d8, 'type');
                            }
                            _0x41f763(',');
                            var _0x23cd39 = _0x2f2daa();
                            if (!_0x182b50.test(_0x23cd39)) {
                              throw _0x42fe54(_0x23cd39, "type");
                            }
                            _0x41f763('>');
                            var _0x365463 = _0x2f2daa();
                            if (!_0x3b6110.test(_0x365463)) {
                              throw _0x42fe54(_0x365463, "name");
                            }
                            _0x41f763('=');
                            var _0x35c28b = new _0x99d7cc(_0x2ee14c(_0x365463), _0x5db1ba(_0x2f2daa()), _0x32e9d8, _0x23cd39);
                            _0x314d65(_0x35c28b, function (_0x1a275c) {
                              if ('option' !== _0x1a275c) {
                                throw _0x42fe54(_0x1a275c);
                              }
                              _0x59f464(_0x35c28b, _0x1a275c);
                              _0x41f763(';');
                            }, function () {
                              _0x224a66(_0x35c28b);
                            });
                            _0x1f4ee1.add(_0x35c28b);
                          }(_0xabf3ba);
                          break;
                        case 'required':
                        case 'repeated':
                          _0x168af0(_0xabf3ba, _0x910b4a);
                          break;
                        case 'optional':
                          _0x168af0(_0xabf3ba, _0x86159e ? "proto3_optional" : "optional");
                          break;
                        case "oneof":
                          !function (_0x4cb025, _0x25148c) {
                            if (!_0x3b6110.test(_0x25148c = _0x2f2daa())) {
                              throw _0x42fe54(_0x25148c, "name");
                            }
                            var _0x2bfbf7 = new _0x809a11(_0x2ee14c(_0x25148c));
                            _0x314d65(_0x2bfbf7, function (_0x218ba4) {
                              if ("option" === _0x218ba4) {
                                _0x59f464(_0x2bfbf7, _0x218ba4);
                                _0x41f763(';');
                              } else {
                                _0x4ac727(_0x218ba4);
                                _0x168af0(_0x2bfbf7, 'optional');
                              }
                            });
                            _0x4cb025.add(_0x2bfbf7);
                          }(_0xabf3ba, _0x910b4a);
                          break;
                        case "extensions":
                          _0x25f33f(_0xabf3ba.extensions || (_0xabf3ba.extensions = []));
                          break;
                        case "reserved":
                          _0x25f33f(_0xabf3ba.reserved || (_0xabf3ba.reserved = []), true);
                          break;
                        default:
                          if (!_0x86159e || !_0x182b50.test(_0x910b4a)) {
                            throw _0x42fe54(_0x910b4a);
                          }
                          _0x4ac727(_0x910b4a);
                          _0x168af0(_0xabf3ba, "optional");
                      }
                    }
                  });
                  _0x3bdecd.add(_0xabf3ba);
                })(_0x5153ac, _0x2bcbf9);
                return true;
              case "enum":
                (function (_0x1d0882, _0x2ad0a5) {
                  if (!_0x3b6110.test(_0x2ad0a5 = _0x2f2daa())) {
                    throw _0x42fe54(_0x2ad0a5, "name");
                  }
                  var _0x4e779e = new _0x1cbe5a(_0x2ad0a5);
                  _0x314d65(_0x4e779e, function (_0x32091d) {
                    switch (_0x32091d) {
                      case "option":
                        _0x59f464(_0x4e779e, _0x32091d);
                        _0x41f763(';');
                        break;
                      case 'reserved':
                        _0x25f33f(_0x4e779e.reserved || (_0x4e779e.reserved = []), true);
                        break;
                      default:
                        !function (_0x1771dc, _0x3a8b2b) {
                          if (!_0x3b6110.test(_0x3a8b2b)) {
                            throw _0x42fe54(_0x3a8b2b, "name");
                          }
                          _0x41f763('=');
                          var _0x4336ce = _0x5db1ba(_0x2f2daa(), true);
                          var _0x155722 = {};
                          _0x314d65(_0x155722, function (_0x28d320) {
                            if ("option" !== _0x28d320) {
                              throw _0x42fe54(_0x28d320);
                            }
                            _0x59f464(_0x155722, _0x28d320);
                            _0x41f763(';');
                          }, function () {
                            _0x224a66(_0x155722);
                          });
                          _0x1771dc.add(_0x3a8b2b, _0x4336ce, _0x155722.comment);
                        }(_0x4e779e, _0x32091d);
                    }
                  });
                  _0x1d0882.add(_0x4e779e);
                })(_0x5153ac, _0x2bcbf9);
                return true;
              case "service":
                (function (_0x460156, _0x263dfa) {
                  if (!_0x3b6110.test(_0x263dfa = _0x2f2daa())) {
                    throw _0x42fe54(_0x263dfa, "service name");
                  }
                  var _0x2e0599 = new _0x367acf(_0x263dfa);
                  _0x314d65(_0x2e0599, function (_0x411fbd) {
                    if (!_0xea978b(_0x2e0599, _0x411fbd)) {
                      if ("rpc" !== _0x411fbd) {
                        throw _0x42fe54(_0x411fbd);
                      }
                      !function (_0x40e59b, _0x4b37f) {
                        var _0x46e8b6 = _0x393270();
                        var _0x145962 = _0x4b37f;
                        if (!_0x3b6110.test(_0x4b37f = _0x2f2daa())) {
                          throw _0x42fe54(_0x4b37f, "name");
                        }
                        var _0x2266ff;
                        var _0x167c05;
                        var _0x3547f3;
                        var _0x58cae2;
                        var _0x3ba01f = _0x4b37f;
                        _0x41f763('(');
                        if (_0x41f763("stream", true)) {
                          _0x167c05 = true;
                        }
                        if (!_0x182b50.test(_0x4b37f = _0x2f2daa())) {
                          throw _0x42fe54(_0x4b37f);
                        }
                        _0x2266ff = _0x4b37f;
                        _0x41f763(')');
                        _0x41f763("returns");
                        _0x41f763('(');
                        if (_0x41f763("stream", true)) {
                          _0x58cae2 = true;
                        }
                        if (!_0x182b50.test(_0x4b37f = _0x2f2daa())) {
                          throw _0x42fe54(_0x4b37f);
                        }
                        _0x3547f3 = _0x4b37f;
                        _0x41f763(')');
                        var _0x3bc0ce = new _0x241880(_0x3ba01f, _0x145962, _0x2266ff, _0x3547f3, _0x167c05, _0x58cae2);
                        _0x3bc0ce.comment = _0x46e8b6;
                        _0x314d65(_0x3bc0ce, function (_0x28e7f3) {
                          if ('option' !== _0x28e7f3) {
                            throw _0x42fe54(_0x28e7f3);
                          }
                          _0x59f464(_0x3bc0ce, _0x28e7f3);
                          _0x41f763(';');
                        });
                        _0x40e59b.add(_0x3bc0ce);
                      }(_0x2e0599, _0x411fbd);
                    }
                  });
                  _0x460156.add(_0x2e0599);
                })(_0x5153ac, _0x2bcbf9);
                return true;
              case 'extend':
                (function (_0x50a933, _0x2ab7a7) {
                  if (!_0x182b50.test(_0x2ab7a7 = _0x2f2daa())) {
                    throw _0x42fe54(_0x2ab7a7, "reference");
                  }
                  var _0x58049d = _0x2ab7a7;
                  _0x314d65(null, function (_0x1ada11) {
                    switch (_0x1ada11) {
                      case "required":
                      case "repeated":
                        _0x168af0(_0x50a933, _0x1ada11, _0x58049d);
                        break;
                      case "optional":
                        _0x168af0(_0x50a933, _0x86159e ? "proto3_optional" : "optional", _0x58049d);
                        break;
                      default:
                        if (!_0x86159e || !_0x182b50.test(_0x1ada11)) {
                          throw _0x42fe54(_0x1ada11);
                        }
                        _0x4ac727(_0x1ada11);
                        _0x168af0(_0x50a933, 'optional', _0x58049d);
                    }
                  });
                })(_0x5153ac, _0x2bcbf9);
                return true;
            }
            return false;
          }
          function _0x314d65(_0x265e2c, _0x514db0, _0x26ece1) {
            var _0x28fc32 = _0x943769.line;
            if (_0x265e2c) {
              if ('string' != typeof _0x265e2c.comment) {
                _0x265e2c.comment = _0x393270();
              }
              _0x265e2c.filename = _0x560e0d.filename;
            }
            if (_0x41f763('{', true)) {
              for (var _0x3f68f7; '}' !== (_0x3f68f7 = _0x2f2daa());) {
                _0x514db0(_0x3f68f7);
              }
              _0x41f763(';', true);
            } else {
              if (_0x26ece1) {
                _0x26ece1();
              }
              _0x41f763(';');
              if (_0x265e2c && ('string' != typeof _0x265e2c.comment || _0xd408fa)) {
                _0x265e2c.comment = _0x393270(_0x28fc32) || _0x265e2c.comment;
              }
            }
          }
          function _0x168af0(_0x4e5f5e, _0x2fda45, _0x1a3672) {
            var _0x8e480f = _0x2f2daa();
            if ("group" !== _0x8e480f) {
              if (!_0x182b50.test(_0x8e480f)) {
                throw _0x42fe54(_0x8e480f, "type");
              }
              var _0x597515 = _0x2f2daa();
              if (!_0x3b6110.test(_0x597515)) {
                throw _0x42fe54(_0x597515, "name");
              }
              _0x597515 = _0x2ee14c(_0x597515);
              _0x41f763('=');
              var _0x479e07 = new _0x4cb8e9(_0x597515, _0x5db1ba(_0x2f2daa()), _0x8e480f, _0x2fda45, _0x1a3672);
              _0x314d65(_0x479e07, function (_0x166137) {
                if ("option" !== _0x166137) {
                  throw _0x42fe54(_0x166137);
                }
                _0x59f464(_0x479e07, _0x166137);
                _0x41f763(';');
              }, function () {
                _0x224a66(_0x479e07);
              });
              if ("proto3_optional" === _0x2fda45) {
                var _0x348edd = new _0x809a11('_' + _0x597515);
                _0x479e07.setOption("proto3_optional", true);
                _0x348edd.add(_0x479e07);
                _0x4e5f5e.add(_0x348edd);
              } else {
                _0x4e5f5e.add(_0x479e07);
              }
              if (!(_0x86159e || !_0x479e07.repeated || undefined === _0x47b394.packed[_0x8e480f] && undefined !== _0x47b394.basic[_0x8e480f])) {
                _0x479e07.setOption("packed", false, true);
              }
            } else {
              !function (_0x45d272, _0x2267db) {
                var _0x46032f = _0x2f2daa();
                if (!_0x3b6110.test(_0x46032f)) {
                  throw _0x42fe54(_0x46032f, "name");
                }
                var _0x238ccf = _0xcd9773.lcFirst(_0x46032f);
                if (_0x46032f === _0x238ccf) {
                  _0x46032f = _0xcd9773.ucFirst(_0x46032f);
                }
                _0x41f763('=');
                var _0x30b70b = _0x5db1ba(_0x2f2daa());
                var _0x4de779 = new _0x534f2d(_0x46032f);
                _0x4de779.group = true;
                var _0x1170f7 = new _0x4cb8e9(_0x238ccf, _0x30b70b, _0x46032f, _0x2267db);
                _0x1170f7.filename = _0x560e0d.filename;
                _0x314d65(_0x4de779, function (_0x485051) {
                  switch (_0x485051) {
                    case 'option':
                      _0x59f464(_0x4de779, _0x485051);
                      _0x41f763(';');
                      break;
                    case 'required':
                    case "repeated":
                      _0x168af0(_0x4de779, _0x485051);
                      break;
                    case "optional":
                      _0x168af0(_0x4de779, _0x86159e ? "proto3_optional" : 'optional');
                      break;
                    default:
                      throw _0x42fe54(_0x485051);
                  }
                });
                _0x45d272.add(_0x4de779).add(_0x1170f7);
              }(_0x4e5f5e, _0x2fda45);
            }
          }
          function _0x59f464(_0x10285d, _0x29c305) {
            var _0x3ff149 = _0x41f763('(', true);
            if (!_0x182b50.test(_0x29c305 = _0x2f2daa())) {
              throw _0x42fe54(_0x29c305, "name");
            }
            var _0x524a30;
            var _0x22db36 = _0x29c305;
            var _0x2ac5e9 = _0x22db36;
            if (_0x3ff149) {
              _0x41f763(')');
              _0x2ac5e9 = _0x22db36 = '(' + _0x22db36 + ')';
              _0x29c305 = _0x37abb8();
              if (_0x102f08.test(_0x29c305)) {
                _0x524a30 = _0x29c305.substr(0x1);
                _0x22db36 += _0x29c305;
                _0x2f2daa();
              }
            }
            _0x41f763('=');
            (function (_0x4653b1, _0x56f04b, _0x1856fc, _0xc53206) {
              if (_0x4653b1.setParsedOption) {
                _0x4653b1.setParsedOption(_0x56f04b, _0x1856fc, _0xc53206);
              }
            })(_0x10285d, _0x2ac5e9, _0x58768d(_0x10285d, _0x22db36), _0x524a30);
          }
          function _0x58768d(_0x44e87f, _0x8b02a9) {
            if (_0x41f763('{', true)) {
              for (var _0x4b27cc = {}; !_0x41f763('}', true);) {
                if (!_0x3b6110.test(_0x20332e = _0x2f2daa())) {
                  throw _0x42fe54(_0x20332e, "name");
                }
                var _0x2dd4d6;
                var _0x5323b2 = _0x20332e;
                if ('{' === _0x37abb8()) {
                  _0x2dd4d6 = _0x58768d(_0x44e87f, _0x8b02a9 + '.' + _0x20332e);
                } else {
                  _0x41f763(':');
                  if ('{' === _0x37abb8()) {
                    _0x2dd4d6 = _0x58768d(_0x44e87f, _0x8b02a9 + '.' + _0x20332e);
                  } else {
                    _0x2dd4d6 = _0x5f0cd0(true);
                    _0x1c04c4(_0x44e87f, _0x8b02a9 + '.' + _0x20332e, _0x2dd4d6);
                  }
                }
                var _0x384c31 = _0x4b27cc[_0x5323b2];
                if (_0x384c31) {
                  _0x2dd4d6 = [].concat(_0x384c31).concat(_0x2dd4d6);
                }
                _0x4b27cc[_0x5323b2] = _0x2dd4d6;
                _0x41f763(',', true);
              }
              return _0x4b27cc;
            }
            var _0x10bcb2 = _0x5f0cd0(true);
            _0x1c04c4(_0x44e87f, _0x8b02a9, _0x10bcb2);
            return _0x10bcb2;
          }
          function _0x1c04c4(_0x5e8ffb, _0x476b8c, _0x541311) {
            if (_0x5e8ffb.setOption) {
              _0x5e8ffb.setOption(_0x476b8c, _0x541311);
            }
          }
          function _0x224a66(_0x265cd5) {
            if (_0x41f763('[', true)) {
              do {
                _0x59f464(_0x265cd5, 'option');
              } while (_0x41f763(',', true));
              _0x41f763(']');
            }
            return _0x265cd5;
          }
          for (; null !== (_0x20332e = _0x2f2daa());) {
            switch (_0x20332e) {
              case 'package':
                if (!_0x2d5492) {
                  throw _0x42fe54(_0x20332e);
                }
                _0x210367();
                break;
              case "import":
                if (!_0x2d5492) {
                  throw _0x42fe54(_0x20332e);
                }
                _0xa73ad0();
                break;
              case 'syntax':
                if (!_0x2d5492) {
                  throw _0x42fe54(_0x20332e);
                }
                _0xd85726();
                break;
              case 'option':
                _0x59f464(_0x4a6a31, _0x20332e);
                _0x41f763(';');
                break;
              default:
                if (_0xea978b(_0x4a6a31, _0x20332e)) {
                  _0x2d5492 = false;
                  continue;
                }
                throw _0x42fe54(_0x20332e);
            }
          }
          _0x560e0d.filename = null;
          return {
            'package': _0x261de2,
            'imports': _0x7eb97,
            'weakImports': _0x53f366,
            'syntax': _0x30063f,
            'root': _0x1ddbb2
          };
        }
        _0x48f820.exports;
      }, function () {
        return {
          './tokenize': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js',
          './root': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './field': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js',
          './oneof': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './enum': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './types': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x12e8be, _0x4291ca, _0x107d2d, _0x9db0d6, _0x36b2b2) {
        _0x107d2d.exports = _0x45f7f1;
        var _0x135962;
        var _0x1cfd95 = /\/|\./;
        function _0x45f7f1(_0x28eb72, _0x4f2221) {
          if (!_0x1cfd95.test(_0x28eb72)) {
            _0x28eb72 = "google/protobuf/" + _0x28eb72 + '.proto';
            _0x4f2221 = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x4f2221
                    }
                  }
                }
              }
            };
          }
          _0x45f7f1[_0x28eb72] = _0x4f2221;
        }
        _0x45f7f1("any", {
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
        _0x45f7f1("duration", {
          'Duration': _0x135962 = {
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
        _0x45f7f1("timestamp", {
          'Timestamp': _0x135962
        });
        _0x45f7f1("empty", {
          'Empty': {
            'fields': {}
          }
        });
        _0x45f7f1("struct", {
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
                'oneof': ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", 'listValue']
              }
            },
            'fields': {
              'nullValue': {
                'type': 'NullValue',
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
                'type': "Value",
                'id': 0x1
              }
            }
          }
        });
        _0x45f7f1("wrappers", {
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
                'type': 'uint64',
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
                'type': 'bool',
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
        _0x45f7f1("field_mask", {
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
        _0x45f7f1.get = function (_0x2cfd63) {
          return _0x45f7f1[_0x2cfd63] || null;
        };
        _0x107d2d.exports;
      }, {});
      var _0x23afd9;
      _0x46d4d2.define('file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/index.js', function (_0xae4dbd, _0x4c631b, _0x1196e3, _0x49685f, _0x12be2c) {
        var _0x1220de = _0x1196e3.exports = _0x4c631b("./index-light");
        _0x1220de.build = "full";
        _0x1220de.tokenize = _0x4c631b("./tokenize");
        _0x1220de.parse = _0x4c631b("./parse");
        _0x1220de.common = _0x4c631b("./common");
        _0x1220de.Root._configure(_0x1220de.Type, _0x1220de.parse, _0x1220de.common);
        _0x1196e3.exports;
      }, function () {
        return {
          './index-light': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js',
          './parse': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/parse.js',
          './common': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      var _0x28d9bd;
      var _0x1305b4;
      var _0x2f4d36;
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/index.js", function (_0x2a0165, _0x2c5fad, _0x3a86fa, _0x1eca46, _0x46c014) {
        _0x3a86fa.exports = _0x2c5fad("./src/index");
        _0x23afd9 = _0x3a86fa.exports;
      }, function () {
        return {
          './src/index': 'file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/index.js'
        };
      });
      _0x46d4d2.require("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/index.js");
      _0xf429b1._RF.push({}, "69392iShS5Gppgp8I/cEPqC", 'SlotReels', undefined);
      var _0x1b67c0 = 0.3;
      var _0x29721c = 0.45;
      var _0x5d7e9e = 0x1f4;
      var _0x3edf90 = 0xc;
      var _0x329b4a = [[0x6, 0x3, 0x4], [0x2, _0x4a9a56.CENTER, 0x0], [0x7, 0x1, 0x5]];
      var _0x74a546 = [[0x6, 0x5, 0x4, 0x3, 0x2, 0x1, 0x0], [0x5, 0x6, 0x5, 0x4, 0x3, 0x2, 0x1], [0x4, 0x5, 0x6, 0x5, 0x4, 0x3, 0x2], [0x3, 0x4, 0x5, 0x9, 0x5, 0x4, 0x3], [0x2, 0x3, 0x4, 0x5, 0x6, 0x5, 0x4], [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x5], [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6]];
      var _0x55485f = _0xd86e43.property;
      _0x28d9bd = _0x55485f({
        'type': _0x43f5ff,
        'tooltip': "symbol的SpriteFrame"
      });
      _0x1305b4 = function (_0x5a73aa) {
        function _0x5d7be8() {
          var _0x3c4a11;
          var _0x3b6e31 = arguments.length;
          var _0x411537 = new Array(_0x3b6e31);
          for (var _0x2ddf9e = 0x0; _0x2ddf9e < _0x3b6e31; _0x2ddf9e++) {
            _0x411537[_0x2ddf9e] = arguments[_0x2ddf9e];
          }
          _0x3c4a11 = _0x5a73aa.call.apply(_0x5a73aa, [this].concat(_0x411537)) || this;
          _0x45956f(_0x3c4a11, "m_symbolSpriteFrames", _0x2f4d36, _0x28ffcf(_0x3c4a11));
          _0x3c4a11.m_viewSize = null;
          _0x3c4a11.m_symbolSize = null;
          _0x3c4a11.m_reelPositionOffset = [new _0x4f4565(0x0, 0x0), new _0x4f4565(0x0, 0x0), new _0x4f4565(0x0, 0x0), new _0x4f4565(0x0, 0x0), new _0x4f4565(0x0, 0x0), new _0x4f4565(0x0, 0x0), new _0x4f4565(0x0, 0x0)];
          _0x3c4a11.m_symbol = new Array();
          _0x3c4a11.m_shakeSymbolSpines = null;
          _0x3c4a11.m_isInitStop = true;
          _0x3c4a11.m_isPatchUpFinished = false;
          _0x3c4a11.m_plate = new Array();
          _0x3c4a11.m_gameView = null;
          _0x3c4a11.m_isHardStop = false;
          _0x3c4a11.m_isMatchingFinished = false;
          _0x3c4a11.m_isPlateCleaned = false;
          _0x3c4a11.m_orgPos = null;
          _0x3c4a11.m_isDropSound = false;
          _0x3c4a11.m_isNewDropSound = false;
          _0x3c4a11.m_isColPlayDropSounds = [];
          _0x3c4a11.m_isColPlayEnterSounds = [];
          _0x3c4a11.m_scatterCount = 0x0;
          _0x3c4a11.m_scatterTotalCount = 0x0;
          _0x3c4a11.m_hasNewScatter = false;
          _0x3c4a11.m_forceMap = [];
          _0x3c4a11.m_isStartAffect = false;
          _0x3c4a11.m_affectTime = 0x0;
          _0x3c4a11.m_baseMove = 0x28;
          _0x3c4a11.m_attenuation = 0x1;
          _0x3c4a11.m_affectEndCb = null;
          _0x3c4a11.m_boomPos = null;
          return _0x3c4a11;
        }
        _0x48aeaf(_0x5d7be8, _0x5a73aa);
        var _0xe26d28 = _0x5d7be8.prototype;
        _0xe26d28.onLoad = function () {
          var _0x152236 = function () {
            var _0x3b8584 = _0x218e4b.TempoSetting.SweetLand;
            _0x3b8584.DELAY_TIME_FOR_X.NORMAL;
            _0x3b8584.DELAY_TIME_FOR_Y.NORMAL;
            _0x1b67c0 = _0x3b8584.SYMBOL_MOVE_TIME;
            _0x29721c = _0x3b8584.NEAR_WIN_SYMBOL_MOVE_TIME;
            _0x5d7e9e = _0x3b8584.SYMBOL_MOVE_DISTANCE;
            _0x3edf90 = _0x3b8584.BOUNCE_DISTANCE;
          };
          _0x152236();
          _0x218e4b.AddCb(_0x152236);
        };
        _0xe26d28.start = function () {
          this.m_viewSize = this.node.getComponent(_0x170b56).contentSize;
          this.m_plate = _0x74a546;
          this.m_symbolSize = new _0x76df40(this.m_viewSize.width / _0x4e825f.COL, this.m_viewSize.height / _0x4e825f.ROW);
          this.m_orgPos = new Array();
          for (var _0x4daf37 = 0x0; _0x4daf37 < _0x4e825f.COL; _0x4daf37++) {
            var _0x3dc985 = new Array();
            var _0x12fa77 = new Array();
            var _0x2b8aa2 = [];
            for (var _0x217097 = 0x0; _0x217097 < _0x4e825f.ROW; _0x217097++) {
              var _0x520b89 = _0x472faf.GetInstance().GetSymbolSprite();
              _0x520b89.spriteFrame = this.m_symbolSpriteFrames[_0x74a546[_0x4daf37][_0x217097]];
              _0x520b89.type = _0xc81011.Type.SIMPLE;
              _0x520b89.sizeMode = _0xc81011.SizeMode.RAW;
              _0x520b89.trim = false;
              this.node.addChild(_0x520b89.node);
              _0x189fb9.SetZIndex(_0x520b89.node, _0x4e825f.GetZIndex(_0x4daf37, _0x217097, _0x74a546[_0x4daf37][_0x217097]));
              _0x3dc985.push(_0x520b89.node);
              var _0x2f9a60 = this.GetSymbolPosition(_0x4daf37, _0x217097);
              _0x520b89.node.setPosition(_0x2f9a60);
              _0x12fa77.push(_0x2f9a60);
              _0x2b8aa2.push(_0x4f4565.ZERO);
            }
            this.m_forceMap.push(_0x2b8aa2);
            this.m_symbol.push(_0x3dc985);
            this.m_orgPos.push(_0x12fa77);
            this.m_isColPlayDropSounds.push(false);
            this.m_isColPlayEnterSounds.push(false);
          }
        };
        _0xe26d28.Init = function (_0x152bd5) {
          this.m_gameView = _0x152bd5;
        };
        _0xe26d28.RecoverPlate = function (_0x572dcc) {
          if (undefined === _0x572dcc) {
            _0x572dcc = false;
          }
          for (var _0x5c84be = 0x0; _0x5c84be < _0x4e825f.COL; _0x5c84be++) {
            for (var _0x56432a = 0x0; _0x56432a < _0x4e825f.ROW; _0x56432a++) {
              _0x156681.stopAllByTarget(this.m_symbol[_0x5c84be][_0x56432a]);
              if (_0x572dcc) {
                var _0x489f4f = this.m_symbol[_0x5c84be][_0x56432a].getComponent(_0xc81011);
                if (!_0x489f4f) {
                  var _0x3e1b39 = this.m_symbol[_0x5c84be][_0x56432a].getComponent(_0x2b60bd);
                  if (_0x3e1b39) {
                    _0x3e1b39.node.removeFromParent();
                    _0x472faf.GetInstance().ReturnSymbol(_0x3e1b39);
                  }
                  _0x489f4f = _0x472faf.GetInstance().GetSymbolSprite();
                  this.m_symbol[_0x5c84be][_0x56432a] = _0x489f4f.node;
                  _0x489f4f.type = _0xc81011.Type.SIMPLE;
                  _0x489f4f.sizeMode = _0xc81011.SizeMode.RAW;
                  _0x489f4f.trim = false;
                  this.node.addChild(_0x489f4f.node);
                }
                _0x189fb9.SetZIndex(_0x489f4f.node, _0x4e825f.GetZIndex(_0x5c84be, _0x56432a, _0x74a546[_0x5c84be][_0x56432a]));
                _0x489f4f.spriteFrame = this.m_symbolSpriteFrames[_0x74a546[_0x5c84be][_0x56432a]];
                _0x489f4f.node.active = true;
              }
              this.m_symbol[_0x5c84be][_0x56432a].setPosition(this.m_orgPos[_0x5c84be][_0x56432a]);
            }
          }
        };
        _0xe26d28.ChangeStyle = function (_0x2ef4e3) {
          this.m_symbolSpriteFrames = _0x2ef4e3;
          this.RecoverPlate(true);
        };
        _0xe26d28.SetPlateInfo = function (_0x3efed6) {
          this.m_plate = _0x3efed6;
        };
        _0xe26d28.StartSpin = function () {
          var _0x1ba04e = _0x44f921(_0xa0d93().mark(function _0x28a6c8(_0x4dc90b) {
            var _0x414b8e;
            var _0x58f0cd;
            var _0x2ccfe7;
            var _0x3b38e3;
            var _0x312ff0;
            return _0xa0d93().wrap(function (_0x35a20c) {
              for (;;) {
                switch (_0x35a20c.prev = _0x35a20c.next) {
                  case 0x0:
                    this.m_plate = null;
                    this.m_isHardStop = _0x4dc90b;
                    this.m_isInitStop = false;
                    this.m_isPlateCleaned = false;
                    this.m_scatterCount = 0x0;
                    this.m_scatterTotalCount = 0x0;
                    this.m_hasNewScatter = false;
                    for (_0x414b8e = 0x0; _0x414b8e < this.m_symbol.length; _0x414b8e++) {
                      for (_0x58f0cd = 0x0; _0x58f0cd < this.m_symbol[_0x414b8e].length; _0x58f0cd++) {
                        this.m_symbol[_0x414b8e][_0x58f0cd].active = true;
                      }
                    }
                    _0x2ccfe7 = new Array();
                    for (_0x3b38e3 = 0x0; _0x3b38e3 < _0x4e825f.COL; _0x3b38e3++) {
                      for (_0x312ff0 = 0x0; _0x312ff0 < _0x4e825f.ROW; _0x312ff0++) {
                        _0x2ccfe7.push(this.LeavePlate(_0x3b38e3, _0x312ff0, true));
                      }
                      this.m_isColPlayDropSounds[_0x3b38e3] = false;
                      this.m_isColPlayEnterSounds[_0x3b38e3] = false;
                    }
                    _0x35a20c.next = 0xc;
                    return Promise.all(_0x2ccfe7);
                  case 0xc:
                    if (null !== this.m_plate) {
                      this.ShowNewPlate();
                    } else {
                      this.m_isPlateCleaned = true;
                    }
                  case 0xd:
                  case "end":
                    return _0x35a20c.stop();
                }
              }
            }, _0x28a6c8, this);
          }));
          return function (_0x5dec51) {
            return _0x1ba04e.apply(this, arguments);
          };
        }();
        _0xe26d28.ShowNewPlate = function () {
          var _0x2f4c4e = _0x44f921(_0xa0d93().mark(function _0x54adc9() {
            var _0x48f53a;
            var _0x52f8e9;
            var _0x426fa7;
            var _0x3d809d;
            var _0x157fbb;
            var _0x36e823;
            var _0x579cb5;
            var _0x444c08;
            var _0x2a36bb;
            var _0x27b2b5;
            var _0x2a2604;
            var _0x2c067a;
            var _0x2e0e87;
            var _0xbbceff;
            return _0xa0d93().wrap(function (_0x3561c2) {
              for (;;) {
                switch (_0x3561c2.prev = _0x3561c2.next) {
                  case 0x0:
                    this.node.getComponent(_0x266cf8).enabled = true;
                    for (_0x48f53a = 0x0; _0x48f53a < _0x4e825f.COL; _0x48f53a++) {
                      for (_0x52f8e9 = _0x4e825f.ROW - 0x1; _0x52f8e9 >= 0x0; _0x52f8e9--) {
                        if (_0x426fa7 = this.m_symbol[_0x48f53a][_0x52f8e9].getComponent(_0x2b60bd)) {
                          this.m_symbol[_0x48f53a][_0x52f8e9].removeFromParent();
                          _0x472faf.GetInstance().ReturnSymbol(_0x426fa7);
                          this.m_symbol[_0x48f53a].splice(_0x52f8e9, 0x1);
                        }
                      }
                    }
                    for (_0x3d809d = 0x0; _0x3d809d < _0x4e825f.COL; _0x3d809d++) {
                      for (_0x157fbb = 0x0; _0x157fbb < _0x4e825f.ROW; _0x157fbb++) {
                        if (this.m_plate[_0x3d809d][_0x157fbb] == _0x4e825f.Symbol.SYMBOL_SCATTER) {
                          this.m_scatterTotalCount++;
                        }
                      }
                    }
                    _0x36e823 = new Array();
                    this.m_isNewDropSound = true;
                    _0x579cb5 = false;
                    _0x444c08 = 0x0;
                    _0x2a36bb = 0x0;
                  case 0x9:
                    if (!(_0x2a36bb < _0x4e825f.COL)) {
                      _0x3561c2.next = 0x26;
                      break;
                    }
                    if (this.m_isHardStop || _0x579cb5 || !(_0x444c08 >= 0x2)) {
                      _0x3561c2.next = 0x13;
                      break;
                    }
                    _0x579cb5 = true;
                    _0x27b2b5 = [];
                    _0x2a2604 = _0x2a36bb - 0x1;
                    for (_0x2c067a = 0x0; _0x2c067a < _0x4e825f.COL; _0x2c067a++) {
                      if (_0x2c067a <= _0x2a2604) {
                        _0x27b2b5.push(0x0);
                      } else {
                        _0x27b2b5.push(_0x4e825f.ROW);
                      }
                    }
                    _0x3bae1e.Play(_0x4e825f.AudioClips.MG_NearWin);
                    this.m_gameView.CharacterSpine.ShowNearWin();
                    _0x3561c2.next = 0x13;
                    return this.m_gameView.ShowColumnNearWin(_0x27b2b5, _0x2a2604);
                  case 0x13:
                    for (_0x2e0e87 = 0x0; _0x2e0e87 < _0x4e825f.ROW; _0x2e0e87++) {
                      _0x36e823.push(this.EnterPlate(_0x2a36bb, _0x2e0e87, this.m_plate[_0x2a36bb][_0x2e0e87]));
                      if (this.m_plate[_0x2a36bb][_0x2e0e87] == _0x4e825f.Symbol.SYMBOL_SCATTER) {
                        _0x444c08++;
                      }
                    }
                    if (this.m_isHardStop) {
                      _0x3561c2.next = 0x23;
                      break;
                    }
                    if (_0x579cb5 || !(_0x444c08 >= 0x2)) {
                      _0x3561c2.next = 0x1c;
                      break;
                    }
                    _0x3561c2.next = 0x19;
                    return Promise.all(_0x36e823);
                  case 0x19:
                    _0x36e823 = [];
                    _0x3561c2.next = 0x23;
                    break;
                  case 0x1c:
                    if (!_0x579cb5) {
                      _0x3561c2.next = 0x23;
                      break;
                    }
                    if (!(_0x36e823.length > 0x0)) {
                      _0x3561c2.next = 0x22;
                      break;
                    }
                    _0x3561c2.next = 0x20;
                    return Promise.all(_0x36e823);
                  case 0x20:
                    _0x36e823 = [];
                    this.m_gameView.HideNearWin(_0x2a36bb);
                  case 0x22:
                    if (_0x2a36bb != _0x4e825f.COL - 0x1) {
                      _0x3bae1e.Play(_0x4e825f.AudioClips.MG_NearWin);
                      _0xbbceff = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
                      this.m_gameView.ShowColumnNearWin(_0xbbceff, _0x2a36bb, _0x2a36bb);
                    }
                  case 0x23:
                    _0x2a36bb++;
                    _0x3561c2.next = 0x9;
                    break;
                  case 0x26:
                    this.node.getComponent(_0x2d36af).opacity = 0xff;
                    _0x3561c2.next = 0x29;
                    return Promise.all(_0x36e823);
                  case 0x29:
                    if (_0x579cb5) {
                      this.m_gameView.CharacterSpine.ShowIdle();
                      this.m_gameView.HideNearWin();
                    }
                    this.m_isInitStop = true;
                  case 0x2b:
                  case "end":
                    return _0x3561c2.stop();
                }
              }
            }, _0x54adc9, this);
          }));
          return function () {
            return _0x2f4c4e.apply(this, arguments);
          };
        }();
        _0xe26d28.ShakeSymbols = function () {
          var _0x478ab4 = _0x44f921(_0xa0d93().mark(function _0x97d1e8(_0x274676) {
            var _0x33efd0;
            var _0x5b6cf1;
            var _0x363289;
            var _0x4a360a;
            var _0x14e3a7;
            var _0x3794cd;
            var _0x57efea;
            var _0x5b0b91;
            var _0x2ad7e4;
            var _0x4797d5;
            var _0x18e7fe;
            var _0x1ec02c;
            var _0x1fa803;
            var _0x5d79b9;
            return _0xa0d93().wrap(function (_0x27e7d8) {
              for (;;) {
                switch (_0x27e7d8.prev = _0x27e7d8.next) {
                  case 0x0:
                    if (undefined === _0x274676) {
                      _0x274676 = false;
                    }
                    _0x33efd0 = false;
                    if (!_0x274676) {
                      if ((_0x5b6cf1 = this.m_gameView.SpinAck.RoundQueue[_0x4e825f.RoundIdx].ComboStageData[_0x4e825f.PlateIdx + 0x1]) && _0x189fb9.divide(_0x5b6cf1.ComboStageWin ? _0x5b6cf1.ComboStageWin : 0x0, _0x1bc5fb.GetNowBetValue()) >= _0x4e825f.ShakeRate) {
                        _0x33efd0 = true;
                      }
                    }
                    if (!_0x33efd0 && !_0x274676) {
                      _0x27e7d8.next = 0xd;
                      break;
                    }
                    _0x363289 = [];
                    _0x4a360a = new Array();
                    _0x14e3a7 = [];
                    for (_0x3794cd = 0x0; _0x3794cd < _0x4e825f.COL; _0x3794cd++) {
                      _0x57efea = [];
                      for (_0x5b0b91 = 0x0; _0x5b0b91 < _0x4e825f.ROW; _0x5b0b91++) {
                        if (this.m_symbol[_0x3794cd][_0x5b0b91] && this.m_symbol[_0x3794cd][_0x5b0b91].active) {
                          _0x2ad7e4 = this.m_symbol[_0x3794cd][_0x5b0b91];
                          _0x4797d5 = this.m_plate[_0x3794cd][_0x5b0b91];
                          _0x18e7fe = _0x472faf.GetInstance().GetSymbolSpine(_0x4797d5);
                          this.node.addChild(_0x18e7fe.node);
                          _0x18e7fe.SetSkin(_0x4797d5);
                          _0x189fb9.SetZIndex(_0x18e7fe.node, _0x4e825f.GetZIndex(_0x3794cd, _0x5b0b91, _0x4797d5));
                          _0x18e7fe.node.setPosition(this.m_symbol[_0x3794cd][_0x5b0b91].position);
                          _0x4a360a.push(_0x18e7fe.ShowShake(false));
                          this.m_symbol[_0x3794cd][_0x5b0b91].setPosition(_0x2ad7e4.position);
                          this.m_symbol[_0x3794cd][_0x5b0b91].active = false;
                          _0x363289.push(_0x18e7fe);
                          _0x57efea.push(false);
                        } else {
                          _0x57efea.push(true);
                        }
                      }
                      _0x14e3a7.push(_0x57efea);
                    }
                    _0x27e7d8.next = 0xa;
                    return Promise.all(_0x4a360a);
                  case 0xa:
                    _0x4a360a = [];
                    for (_0x1ec02c = 0x0; _0x1ec02c < _0x4e825f.COL; _0x1ec02c++) {
                      for (_0x1fa803 = 0x0; _0x1fa803 < _0x4e825f.ROW; _0x1fa803++) {
                        this.m_symbol[_0x1ec02c][_0x1fa803].active = !_0x14e3a7[_0x1ec02c][_0x1fa803];
                      }
                    }
                    for (; _0x363289.length > 0x0;) {
                      (_0x5d79b9 = _0x363289.pop()).node.removeFromParent();
                      _0x472faf.GetInstance().ReturnSymbol(_0x5d79b9);
                    }
                  case 0xd:
                  case "end":
                    return _0x27e7d8.stop();
                }
              }
            }, _0x97d1e8, this);
          }));
          return function (_0x5dd09a) {
            return _0x478ab4.apply(this, arguments);
          };
        }();
        _0xe26d28.TileMatchingAndPatchUp = function () {
          var _0x37352d = _0x44f921(_0xa0d93().mark(function _0x25b5e0(_0x4660c2) {
            var _0x2cf3d7;
            var _0x38d8b2;
            var _0x134f9d;
            var _0x5c397c = this;
            return _0xa0d93().wrap(function (_0x275b43) {
              for (;;) {
                switch (_0x275b43.prev = _0x275b43.next) {
                  case 0x0:
                    this.m_isDropSound = true;
                    this.m_isNewDropSound = true;
                    this.m_hasNewScatter = false;
                    _0x2cf3d7 = new Array();
                    _0x38d8b2 = function (_0x10099e) {
                      var _0x25a5ba = 0x0;
                      var _0xf4296f = 0x0;
                      for (var _0x4c068f = _0x4e825f.ROW - 0x1; _0x4c068f >= 0x0; _0x4c068f--) {
                        if (!_0x5c397c.m_symbol[_0x10099e][_0x4c068f].active) {
                          _0xf4296f++;
                          var _0x2e2b0b = _0x5c397c.m_symbol[_0x10099e][_0x4c068f];
                          _0x5c397c.m_symbol[_0x10099e].splice(_0x4c068f, 0x1);
                          _0x5c397c.m_plate[_0x10099e].splice(_0x4c068f, 0x1);
                          _0x2e2b0b.removeFromParent();
                          var _0x43a462 = _0x2e2b0b.getComponent(_0xc81011);
                          if (_0x43a462) {
                            _0x472faf.GetInstance().ReturnSymbolSprite(_0x43a462);
                          } else {
                            var _0x133508 = _0x2e2b0b.getComponent(_0x2b60bd);
                            if (_0x133508) {
                              _0x472faf.GetInstance().ReturnSymbol(_0x133508);
                            }
                          }
                        }
                      }
                      var _0x8fefa0 = function (_0x465c10) {
                        if (_0x5c397c.m_symbol[_0x10099e][_0x465c10] && _0x5c397c.m_symbol[_0x10099e][_0x465c10].active) {
                          var _0x43b85c = _0x5c397c.m_symbol[_0x10099e][_0x465c10].position;
                          var _0x134c84 = _0x5c397c.GetSymbolPosition(_0x10099e, _0x465c10);
                          var _0x2902d4 = Math.floor(_0x134c84.y - _0x43b85c.y);
                          var _0x4bd5a8 = _0x5c397c.m_symbol[_0x10099e][_0x465c10];
                          if (0x0 != _0x2902d4) {
                            _0x5c397c.m_isColPlayDropSounds[_0x10099e] = false;
                            var _0x85427f = Math.abs(_0x2902d4) / _0x5c397c.m_symbolSize.height;
                            _0x2cf3d7.push(new Promise(function (_0x578358) {
                              _0x570899(_0x4bd5a8).delay(0.01 * _0x465c10).by(_0x1b67c0 * _0x85427f / _0x4e825f.ROW, {
                                'position': _0x4aedad(0x0, _0x2902d4)
                              }, {
                                'easing': 'sineIn'
                              }).by(_0x189fb9.divide(0x3, 0x3c), {
                                'position': _0x4aedad(0x0, _0x3edf90)
                              }).by(_0x189fb9.divide(0x2, 0x3c), {
                                'position': _0x4aedad(0x0, 0x0 - _0x3edf90)
                              }).call(function () {
                                _0x4bd5a8.setPosition(_0x134c84);
                                _0x5c397c.PlayDropSound(_0x10099e, _0x5c397c.m_isDropSound);
                                _0x5c397c.m_isDropSound = false;
                                _0x578358();
                              }).start();
                            }));
                          }
                        } else {
                          _0x5c397c.m_isColPlayEnterSounds[_0x10099e] = false;
                          var _0x3e234d = _0x4660c2[_0x10099e][_0x25a5ba];
                          _0x25a5ba++;
                          _0x5c397c.m_plate[_0x10099e][_0x465c10] = _0x3e234d;
                          _0x2cf3d7.push(_0x5c397c.EnterPlate(_0x10099e, _0x465c10, _0x3e234d, _0xf4296f));
                        }
                      };
                      for (var _0x4fb0fb = 0x0; _0x4fb0fb < _0x4e825f.ROW; _0x4fb0fb++) {
                        _0x8fefa0(_0x4fb0fb);
                      }
                    };
                    for (_0x134f9d = 0x0; _0x134f9d < _0x4e825f.COL; _0x134f9d++) {
                      _0x38d8b2(_0x134f9d);
                    }
                    _0x275b43.next = 0x8;
                    return Promise.all(_0x2cf3d7);
                  case 0x8:
                  case 'end':
                    return _0x275b43.stop();
                }
              }
            }, _0x25b5e0, this);
          }));
          return function (_0x18d702) {
            return _0x37352d.apply(this, arguments);
          };
        }();
        _0xe26d28.TileMatching = function () {
          var _0x5d83ca = _0x44f921(_0xa0d93().mark(function _0x5dfcb7() {
            var _0x34156f;
            var _0x1f436d;
            var _0x247610;
            var _0x15d949 = this;
            return _0xa0d93().wrap(function (_0x4d62ac) {
              for (;;) {
                switch (_0x4d62ac.prev = _0x4d62ac.next) {
                  case 0x0:
                    _0x34156f = new Array();
                    this.m_isDropSound = true;
                    this.m_isNewDropSound = true;
                    this.m_hasNewScatter = false;
                    _0x1f436d = function (_0x5cc9c8) {
                      for (var _0x47ba96 = _0x4e825f.ROW - 0x1; _0x47ba96 >= 0x0; _0x47ba96--) {
                        if (!_0x15d949.m_symbol[_0x5cc9c8][_0x47ba96].active) {
                          var _0x4d9cf5 = _0x15d949.m_symbol[_0x5cc9c8][_0x47ba96];
                          _0x15d949.m_symbol[_0x5cc9c8].splice(_0x47ba96, 0x1);
                          _0x15d949.m_plate[_0x5cc9c8].splice(_0x47ba96, 0x1);
                          _0x4d9cf5.removeFromParent();
                          var _0x37e359 = _0x4d9cf5.getComponent(_0xc81011);
                          if (_0x37e359) {
                            _0x472faf.GetInstance().ReturnSymbolSprite(_0x37e359);
                          } else {
                            var _0x2fe696 = _0x4d9cf5.getComponent(_0x2b60bd);
                            if (_0x2fe696) {
                              _0x472faf.GetInstance().ReturnSymbol(_0x2fe696);
                            }
                          }
                          _0x15d949.m_isColPlayDropSounds[_0x5cc9c8] = false;
                        }
                      }
                      var _0x2cf2e4 = function (_0x114a42) {
                        if (_0x15d949.m_symbol[_0x5cc9c8][_0x114a42] && _0x15d949.m_symbol[_0x5cc9c8][_0x114a42].active) {
                          var _0xc87151 = _0x15d949.m_symbol[_0x5cc9c8][_0x114a42].position;
                          var _0x38cc28 = _0x15d949.GetSymbolPosition(_0x5cc9c8, _0x114a42);
                          var _0x4472b1 = Math.floor(_0x38cc28.y - _0xc87151.y);
                          if (0x0 != _0x4472b1) {
                            var _0x2ab30f = Math.abs(_0x4472b1) / _0x15d949.m_symbolSize.height;
                            _0x34156f.push(new Promise(function (_0x5693f3) {
                              _0x570899(_0x15d949.m_symbol[_0x5cc9c8][_0x114a42]).delay(0.01 * _0x114a42).by(_0x1b67c0 * _0x2ab30f / _0x4e825f.ROW, {
                                'position': _0x4aedad(0x0, _0x4472b1)
                              }, {
                                'easing': "sineIn"
                              }).by(_0x189fb9.divide(0x3, 0x3c), {
                                'position': _0x4aedad(0x0, _0x3edf90)
                              }).by(_0x189fb9.divide(0x2, 0x3c), {
                                'position': _0x4aedad(0x0, 0x0 - _0x3edf90)
                              }).call(function () {
                                _0x15d949.m_symbol[_0x5cc9c8][_0x114a42].setPosition(_0x38cc28);
                                _0x15d949.PlayDropSound(_0x5cc9c8, _0x15d949.m_isDropSound);
                                _0x15d949.m_isDropSound = false;
                                _0x5693f3();
                              }).start();
                            }));
                          }
                        }
                      };
                      for (var _0x4ed04c = 0x0; _0x4ed04c < _0x4e825f.ROW; _0x4ed04c++) {
                        _0x2cf2e4(_0x4ed04c);
                      }
                    };
                    for (_0x247610 = 0x0; _0x247610 < _0x4e825f.COL; _0x247610++) {
                      _0x1f436d(_0x247610);
                    }
                    _0x4d62ac.next = 0x8;
                    return Promise.all(_0x34156f);
                  case 0x8:
                  case "end":
                    return _0x4d62ac.stop();
                }
              }
            }, _0x5dfcb7, this);
          }));
          return function () {
            return _0x5d83ca.apply(this, arguments);
          };
        }();
        _0xe26d28.PatchUp = function () {
          var _0x4a5e65 = _0x44f921(_0xa0d93().mark(function _0x4a2642(_0x5bd815, _0xb83a9e) {
            var _0x36913b;
            var _0x3830ca;
            var _0x117287;
            var _0x1833b1;
            var _0x59638b;
            var _0x14fc3d;
            var _0x4576a5;
            return _0xa0d93().wrap(function (_0x282d01) {
              for (;;) {
                switch (_0x282d01.prev = _0x282d01.next) {
                  case 0x0:
                    this.m_isDropSound = true;
                    _0x36913b = [];
                    for (_0x3830ca = 0x0; _0x3830ca < _0x4e825f.COL; _0x3830ca++) {
                      _0x117287 = 0x0;
                      if ((_0x1833b1 = _0x189fb9.minus(_0x4e825f.ROW, this.m_symbol[_0x3830ca].length)) > 0x0) {
                        for (_0x59638b = 0x0; _0x59638b < _0x4e825f.ROW; _0x59638b++) {
                          _0x14fc3d = this.GetSymbol(_0x3830ca, _0x59638b);
                          if (!(this.m_symbol[_0x3830ca][_0x59638b] && this.m_symbol[_0x3830ca][_0x59638b].active || _0x14fc3d == _0x4e825f.Symbol.SYMBOL_SCATTER)) {
                            this.m_isColPlayEnterSounds[_0x3830ca] = false;
                            _0x4576a5 = _0x5bd815[_0x3830ca][_0x117287];
                            _0x117287++;
                            this.m_plate[_0x3830ca][_0x59638b] = _0x4576a5;
                            this.m_isNewDropSound = true;
                            _0x36913b.push(this.EnterPlate(_0x3830ca, _0x59638b, _0x4576a5, _0x1833b1, true));
                          }
                        }
                      }
                    }
                    if (!(_0x36913b.length > 0x0)) {
                      _0x282d01.next = 0x6;
                      break;
                    }
                    _0x282d01.next = 0x6;
                    return Promise.all(_0x36913b);
                  case 0x6:
                  case 'end':
                    return _0x282d01.stop();
                }
              }
            }, _0x4a2642, this);
          }));
          return function (_0x16ac70, _0x3f284f) {
            return _0x4a5e65.apply(this, arguments);
          };
        }();
        _0xe26d28.SetDarkSymbol = function (_0x4d54b7) {
          for (var _0x32b854 = 0x0; _0x32b854 < this.m_symbol.length; _0x32b854++) {
            for (var _0x4e6f22 = 0x0; _0x4e6f22 < this.m_symbol[_0x32b854].length; _0x4e6f22++) {
              var _0x4b3aae = this.m_symbol[_0x32b854][_0x4e6f22];
              var _0x1e3f43 = _0x4b3aae.getComponent(_0x43bd9d);
              if (_0x1e3f43) {
                _0x1e3f43.color = _0x4d54b7 ? _0x4e825f.Color.Dark : _0x4e825f.Color.Normal;
              } else {
                _0x4b3aae.getComponent(_0x5f20e4).SetDarkSymbol(_0x4d54b7);
              }
            }
          }
        };
        _0xe26d28.CheckNearWin = function () {
          var _0xd78e2f = 0x0;
          for (var _0x3626de = 0x0; _0x3626de < this.m_plate.length; _0x3626de++) {
            for (var _0x586ed2 = 0x0; _0x586ed2 < this.m_plate[_0x3626de].length; _0x586ed2++) {
              if (this.m_plate[_0x3626de][_0x586ed2] == _0x4e825f.Symbol.SYMBOL_SCATTER && ++_0xd78e2f >= 0x2) {
                return true;
              }
            }
          }
          return false;
        };
        _0xe26d28.GetSymbol = function (_0x435194, _0x357657) {
          return this.m_plate[_0x435194] && undefined !== this.m_plate[_0x435194][_0x357657] ? this.m_plate[_0x435194][_0x357657] : -0x1;
        };
        _0xe26d28.GetSymbolNode = function (_0x5d46c0, _0x358903) {
          return _0x5d46c0 >= 0x0 && _0x5d46c0 < _0x4e825f.COL && _0x358903 >= 0x0 && _0x358903 < _0x4e825f.ROW ? this.m_symbol[_0x5d46c0][_0x358903] : null;
        };
        _0xe26d28.GetSymbolPosition = function (_0x49e366, _0x202c50) {
          var _0x1b7cc9 = this.m_symbolSize.width * (_0x49e366 + 0.5) + this.m_reelPositionOffset[_0x49e366].x - this.m_viewSize.width / 0x2;
          var _0x5f207d = this.m_symbolSize.height * (_0x202c50 + 0.5) + this.m_reelPositionOffset[_0x49e366].y - this.m_viewSize.height / 0x2;
          return _0x4aedad(_0x1b7cc9, _0x5f207d);
        };
        _0xe26d28.PlayDropSound = function (_0x59a143, _0x298101, _0x1950c6, _0x5258b6) {
          if (undefined === _0x1950c6) {
            _0x1950c6 = false;
          }
          if (undefined === _0x5258b6) {
            _0x5258b6 = false;
          }
          var _0x3dec57 = _0x1fb0dd.Current();
          var _0x2a3fe6 = _0x3dec57 != _0xa4646a.SPIN && _0x3dec57 != _0x52c214.FIRST_PLATE ? _0x4e825f.AudioClips.Fiop1 : _0x4e825f.AudioClips.Reel_Stop;
          if (this.m_isHardStop) {
            if (this.m_isHardStop && _0x298101) {
              if (this.m_scatterTotalCount > 0x0 && this.m_hasNewScatter) {
                switch (this.m_scatterTotalCount) {
                  case 0x1:
                    _0x3bae1e.Play(_0x4e825f.AudioClips.Scatter_Show1);
                    break;
                  case 0x2:
                    _0x3bae1e.Play(_0x4e825f.AudioClips.Scatter_Show2);
                    break;
                  default:
                    _0x3bae1e.Play(_0x4e825f.AudioClips.Scatter_Show3);
                }
              } else {
                _0x3bae1e.Play(_0x2a3fe6);
              }
            }
          } else {
            if (_0x5258b6) {
              this.m_scatterCount++;
              switch (this.m_scatterCount) {
                case 0x1:
                  _0x3bae1e.Play(_0x4e825f.AudioClips.Scatter_Show1);
                  break;
                case 0x2:
                  _0x3bae1e.Play(_0x4e825f.AudioClips.Scatter_Show2);
                  break;
                default:
                  _0x3bae1e.Play(_0x4e825f.AudioClips.Scatter_Show3);
              }
            }
            if (_0x1950c6) {
              if (!this.m_isColPlayEnterSounds[_0x59a143]) {
                this.m_isColPlayEnterSounds[_0x59a143] = true;
                _0x3bae1e.Play(_0x2a3fe6);
              }
            } else if (!this.m_isColPlayDropSounds[_0x59a143]) {
              this.m_isColPlayDropSounds[_0x59a143] = true;
              _0x3bae1e.Play(_0x2a3fe6);
            }
          }
        };
        _0xe26d28.EnterPlate = function (_0x173077, _0x166ccf, _0x5c5815, _0x424695, _0x137497) {
          var _0x339bde = this;
          if (undefined === _0x424695) {
            _0x424695 = _0x4e825f.ROW;
          }
          if (undefined === _0x137497) {
            _0x137497 = false;
          }
          var _0x5e6417 = this.m_symbolSize.height * (_0x4e825f.ROW - 0.5) - this.m_viewSize.height / 0x2;
          return new Promise(function (_0x3125ea) {
            _0x339bde.m_plate[_0x173077][_0x166ccf] = _0x5c5815;
            if (_0x5c5815 == _0x4e825f.Symbol.SYMBOL_SCATTER) {
              var _0x38f98a = _0x472faf.GetInstance().GetSymbolSpine(_0x4e825f.Symbol.SYMBOL_SCATTER);
              _0x339bde.m_symbol[_0x173077][_0x166ccf] = _0x38f98a.node;
              _0x339bde.node.addChild(_0x339bde.m_symbol[_0x173077][_0x166ccf]);
              _0x189fb9.SetZIndex(_0x339bde.m_symbol[_0x173077][_0x166ccf], _0x4e825f.GetZIndex(_0x173077, _0x166ccf, _0x5c5815));
              _0x339bde.m_hasNewScatter = true;
            } else {
              var _0x1797ee = null;
              if (_0x339bde.m_symbol[_0x173077][_0x166ccf]) {
                _0x339bde.m_symbol[_0x173077][_0x166ccf].active = true;
                _0x1797ee = _0x339bde.m_symbol[_0x173077][_0x166ccf].getComponent(_0xc81011);
              } else {
                _0x1797ee = _0x472faf.GetInstance().GetSymbolSprite();
                _0x339bde.m_symbol[_0x173077][_0x166ccf] = _0x1797ee.node;
                _0x339bde.node.addChild(_0x339bde.m_symbol[_0x173077][_0x166ccf]);
              }
              _0x1797ee.spriteFrame = _0x339bde.m_symbolSpriteFrames[_0x5c5815];
              _0x189fb9.SetZIndex(_0x339bde.m_symbol[_0x173077][_0x166ccf], _0x4e825f.GetZIndex(_0x173077, _0x166ccf, _0x5c5815));
            }
            var _0x486d22 = _0x339bde.m_symbol[_0x173077][_0x166ccf];
            _0x486d22.active = true;
            var _0x5a4ac3 = _0x339bde.GetSymbolPosition(_0x173077, _0x166ccf);
            var _0x4d95a3 = _0x5e6417 + _0x339bde.m_reelPositionOffset[_0x173077].y + _0x339bde.m_symbolSize.height * (_0x166ccf - (_0x4e825f.ROW - _0x424695) + 0x1);
            _0x486d22.setPosition(_0x5a4ac3.x, _0x4d95a3 + 0x14);
            _0x570899(_0x486d22).delay(_0x339bde.GetDelayTime(_0x173077, _0x166ccf, _0x339bde.m_isHardStop || _0x137497)).to((_0x137497 ? _0x29721c : _0x1b67c0) * _0x424695 / _0x4e825f.ROW, {
              'position': _0x4aedad(_0x5a4ac3.x, _0x5a4ac3.y - 0x0)
            }, {
              'easing': "sineIn"
            }).call(function () {
              _0x339bde.PlayDropSound(_0x173077, _0x339bde.m_isNewDropSound, true, _0x5c5815 == _0x4e825f.Symbol.SYMBOL_SCATTER);
              _0x339bde.m_isNewDropSound = false;
            }).call(function () {
              var _0x3e38ca = _0x486d22.getComponent(_0x5f20e4);
              if (_0x3e38ca) {
                _0x3e38ca.ShowStop(_0x339bde.m_isHardStop ? _0x4e825f.TimeScale.HardStop : _0x4e825f.TimeScale.Normal);
              }
            }).by(_0x189fb9.divide(0x3, 0x3c), {
              'position': _0x4aedad(0x0, _0x3edf90)
            }).by(_0x189fb9.divide(0x2, 0x3c), {
              'position': _0x4aedad(0x0, 0x0 - _0x3edf90)
            }).call(_0x44f921(_0xa0d93().mark(function _0x5bd5cf() {
              return _0xa0d93().wrap(function (_0x355a96) {
                for (;;) {
                  switch (_0x355a96.prev = _0x355a96.next) {
                    case 0x0:
                      _0x486d22.setPosition(_0x5a4ac3);
                      _0x3125ea();
                    case 0x2:
                    case "end":
                      return _0x355a96.stop();
                  }
                }
              }, _0x5bd5cf);
            }))).start();
          });
        };
        _0xe26d28.LeavePlate = function (_0x496ebb, _0x847f9a, _0x4febc1) {
          var _0x33303c = this;
          return new Promise(function (_0x4d6a27) {
            _0x570899(_0x33303c.m_symbol[_0x496ebb][_0x847f9a]).delay(_0x33303c.GetDelayTime(_0x496ebb, _0x847f9a, _0x4febc1)).by(_0x1b67c0, {
              'position': _0x4aedad(0x0, -_0x5d7e9e)
            }, {
              'easing': "sineIn"
            }).call(function () {
              _0x4d6a27();
            }).start();
          });
        };
        _0xe26d28.GetDelayTime = function (_0x484f77, _0x45fded, _0x3e5a8d) {
          return _0x218e4b.TempoSetting.SweetLand.GET_DELAY_TIME(_0x484f77, _0x45fded, _0x3e5a8d);
        };
        _0xe26d28.CheckPlate = function (_0x271a1d) {
          for (var _0x452b98 = 0x0; _0x452b98 < _0x4e825f.COL; _0x452b98++) {
            for (var _0x2efb14 = 0x0; _0x2efb14 < _0x4e825f.ROW; _0x2efb14++) {
              if (_0x271a1d[_0x452b98][_0x2efb14] == _0x4e825f.Symbol.SYMBOL_SCATTER) {
                if (!this.m_symbol[_0x452b98][_0x2efb14].getComponent(_0x5f20e4)) {
                  console.error(_0x452b98, _0x2efb14, "Not Scatter");
                  return false;
                }
              } else {
                var _0x2729c2 = this.m_symbolSpriteFrames[_0x271a1d[_0x452b98][_0x2efb14]].name;
                var _0x4fb495 = this.m_symbol[_0x452b98][_0x2efb14].getComponent(_0xc81011).spriteFrame.name;
                if (_0x4fb495 !== _0x2729c2) {
                  console.error(_0x452b98, _0x2efb14, _0x4fb495, _0x2729c2);
                  return false;
                }
              }
            }
          }
          return true;
        };
        _0xe26d28.TransToWild = function (_0x33c080) {
          this.m_plate[_0x33c080.x][_0x33c080.y] = _0x4e825f.Symbol.SYMBOL_WILD;
          this.m_symbol[_0x33c080.x][_0x33c080.y].getComponent(_0xc81011).spriteFrame = this.m_symbolSpriteFrames[_0x4e825f.Symbol.SYMBOL_WILD];
          _0x189fb9.SetZIndex(this.m_symbol[_0x33c080.x][_0x33c080.y], _0x4e825f.GetZIndex(_0x33c080.x, _0x33c080.y, _0x4e825f.Symbol.SYMBOL_WILD));
        };
        _0xe26d28.ShowAffect = function (_0x5de925, _0x252f6e, _0x144348) {
          this.m_boomPos = [];
          this.m_shakeSymbolSpines = [];
          for (var _0x1ea400 = 0x0; _0x1ea400 < _0x4e825f.COL; _0x1ea400++) {
            var _0x58f28f = [];
            for (var _0x551897 = 0x0; _0x551897 < _0x4e825f.ROW; _0x551897++) {
              var _0x2519c9 = this.m_plate[_0x1ea400][_0x551897];
              var _0x4a71c4 = _0x472faf.GetInstance().GetSymbolSpine(_0x2519c9);
              this.node.addChild(_0x4a71c4.node);
              _0x4a71c4.SetSkin(_0x2519c9);
              _0x4a71c4.node.setPosition(this.GetSymbolPosition(_0x1ea400, _0x551897));
              _0x189fb9.SetZIndex(_0x4a71c4.node, _0x4e825f.GetZIndex(_0x1ea400, _0x551897, _0x2519c9));
              _0x58f28f.push(_0x4a71c4);
              this.m_symbol[_0x1ea400][_0x551897].active = false;
              _0x4a71c4.ShowShake(true);
            }
            this.m_shakeSymbolSpines.push(_0x58f28f);
          }
          for (var _0x5117e5 = 0x0; _0x5117e5 < _0x252f6e.length; _0x5117e5++) {
            var _0x85bd6a = _0x4e825f.ConvertIndex2ColRow(_0x252f6e[_0x5117e5]);
            if (this.m_shakeSymbolSpines[_0x85bd6a.x][_0x85bd6a.y]) {
              this.m_shakeSymbolSpines[_0x85bd6a.x][_0x85bd6a.y].node.removeFromParent();
              _0x472faf.GetInstance().ReturnSymbol(this.m_shakeSymbolSpines[_0x85bd6a.x][_0x85bd6a.y]);
              this.m_shakeSymbolSpines[_0x85bd6a.x][_0x85bd6a.y] = null;
            }
            this.m_boomPos.push(_0x252f6e[_0x5117e5]);
          }
          var _0x411be5 = [];
          var _0x39dd32 = [];
          for (var _0x367491 = 0x0; _0x367491 < _0x5de925.length; _0x367491++) {
            var _0x3184ea = _0x4e825f.ConvertIndex2ColRow(_0x5de925[_0x367491]);
            _0x411be5.push(_0x3184ea);
            if (this.m_shakeSymbolSpines[_0x3184ea.x][_0x3184ea.y]) {
              this.m_shakeSymbolSpines[_0x3184ea.x][_0x3184ea.y].node.removeFromParent();
              _0x472faf.GetInstance().ReturnSymbol(this.m_shakeSymbolSpines[_0x3184ea.x][_0x3184ea.y]);
              this.m_shakeSymbolSpines[_0x3184ea.x][_0x3184ea.y] = null;
            }
            this.m_boomPos.push(_0x5de925[_0x367491]);
          }
          for (var _0x3be9f7 = 0x0; _0x3be9f7 < _0x4e825f.COL; _0x3be9f7++) {
            var _0x380a96 = [];
            for (var _0x2fbcf5 = 0x0; _0x2fbcf5 < _0x4e825f.ROW; _0x2fbcf5++) {
              _0x380a96[_0x2fbcf5] = 0x0;
            }
            _0x39dd32.push(_0x380a96);
          }
          for (var _0x189ebb = 0x0; _0x189ebb < _0x411be5.length; _0x189ebb++) {
            _0x39dd32[_0x411be5[_0x189ebb].x][_0x411be5[_0x189ebb].y] = 0x1;
          }
          var _0x539b24 = new Array();
          for (var _0x38bb70 = 0x0; _0x38bb70 < _0x4e825f.COL; _0x38bb70++) {
            var _0xadcf8b = [];
            for (var _0x197467 = 0x0; _0x197467 < _0x4e825f.ROW; _0x197467++) {
              _0xadcf8b.push(_0x5089c4(0x0, 0x0));
              this.m_forceMap[_0x38bb70][_0x197467] = _0x5089c4(0x0, 0x0);
            }
            _0x539b24.push(_0xadcf8b);
          }
          var _0x57f33e = 0x0;
          for (var _0x44c40a = 0x0; _0x44c40a < _0x411be5.length; _0x44c40a++) {
            var _0x46f6f5 = [false, false, false, false, false, false, false, false];
            for (var _0x48f69d = -0x1; _0x48f69d <= 0x1; _0x48f69d++) {
              for (var _0x3f2ce2 = -0x1; _0x3f2ce2 <= 0x1; _0x3f2ce2++) {
                if (0x0 != _0x48f69d || 0x0 != _0x3f2ce2) {
                  var _0x5242f5 = _0x411be5[_0x44c40a].x + _0x48f69d;
                  var _0x3a8e82 = _0x411be5[_0x44c40a].y + _0x3f2ce2;
                  if (!(_0x5242f5 < 0x0 || _0x5242f5 >= _0x39dd32.length || _0x3a8e82 < 0x0 || _0x3a8e82 >= _0x39dd32.length)) {
                    if (0x0 != _0x39dd32[_0x5242f5][_0x3a8e82]) {
                      _0x46f6f5[_0x329b4a[_0x48f69d + 0x1][_0x3f2ce2 + 0x1]] = true;
                    }
                  }
                }
              }
            }
            for (var _0x506cc7 = 0x0; _0x506cc7 < _0x46f6f5.length; _0x506cc7++) {
              if (!_0x46f6f5[_0x506cc7]) {
                switch (_0x506cc7) {
                  case 0x0:
                    _0x57f33e = this.ComputeExplodeAffect(0x0, 0x1, _0x5089c4(_0x411be5[_0x44c40a].x, _0x411be5[_0x44c40a].y + 0x1), _0x57f33e);
                    break;
                  case 0x2:
                    _0x57f33e = this.ComputeExplodeAffect(0x2, 0x1, _0x5089c4(_0x411be5[_0x44c40a].x, _0x411be5[_0x44c40a].y - 0x1), _0x57f33e);
                    break;
                  case 0x1:
                    _0x57f33e = this.ComputeExplodeAffect(0x1, 0x1, _0x5089c4(_0x411be5[_0x44c40a].x + 0x1, _0x411be5[_0x44c40a].y), _0x57f33e);
                    break;
                  case 0x3:
                    _0x57f33e = this.ComputeExplodeAffect(0x3, 0x1, _0x5089c4(_0x411be5[_0x44c40a].x - 0x1, _0x411be5[_0x44c40a].y), _0x57f33e);
                    break;
                  case 0x4:
                    _0x57f33e = this.ComputeExplodeAffect(0x4, 0x1, _0x5089c4(_0x411be5[_0x44c40a].x - 0x1, _0x411be5[_0x44c40a].y + 0x1), _0x57f33e);
                    break;
                  case 0x5:
                    _0x57f33e = this.ComputeExplodeAffect(0x5, 0x1, _0x5089c4(_0x411be5[_0x44c40a].x + 0x1, _0x411be5[_0x44c40a].y + 0x1), _0x57f33e);
                    break;
                  case 0x6:
                    _0x57f33e = this.ComputeExplodeAffect(0x6, 0x1, _0x5089c4(_0x411be5[_0x44c40a].x - 0x1, _0x411be5[_0x44c40a].y - 0x1), _0x57f33e);
                    break;
                  case 0x7:
                    _0x57f33e = this.ComputeExplodeAffect(0x7, 0x1, _0x5089c4(_0x411be5[_0x44c40a].x + 0x1, _0x411be5[_0x44c40a].y - 0x1), _0x57f33e);
                }
              }
            }
          }
          for (var _0x1a0c0c = 0x0; _0x1a0c0c < this.m_forceMap.length; _0x1a0c0c++) {
            for (var _0x577891 = 0x0; _0x577891 < this.m_forceMap[_0x1a0c0c].length; _0x577891++) {
              this.m_forceMap[_0x1a0c0c][_0x577891].x = _0x189fb9.divide(this.m_forceMap[_0x1a0c0c][_0x577891].x, _0x57f33e);
              this.m_forceMap[_0x1a0c0c][_0x577891].y = _0x189fb9.divide(this.m_forceMap[_0x1a0c0c][_0x577891].y, _0x57f33e);
            }
          }
          for (var _0x46af2d = 0x0; _0x46af2d < _0x411be5.length; _0x46af2d++) {
            var _0xd3f9bd = _0x411be5[_0x46af2d];
            this.m_forceMap[_0xd3f9bd.x][_0xd3f9bd.y] = _0x5089c4(0x0, 0x0);
          }
          this.m_affectEndCb = _0x144348;
          this.m_affectTime = 0x0;
          this.m_isStartAffect = true;
        };
        _0xe26d28.ComputeExplodeAffect = function (_0x6722ac, _0x21b39f, _0x55ddb3, _0x1ef570) {
          if (_0x55ddb3.x >= 0x0 && _0x55ddb3.x < _0x4e825f.COL && _0x55ddb3.y >= 0x0 && _0x55ddb3.y < _0x4e825f.ROW) {
            var _0x290858 = _0x189fb9.divide(_0x21b39f, 0x2);
            var _0x14a3c2 = _0x189fb9.divide(_0x290858, 0x2);
            switch (_0x6722ac) {
              case 0x0:
                this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y] = this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].add(_0x5089c4(0x0, _0x21b39f));
                _0x1ef570 = this.ComputeExplodeAffect(_0x6722ac, _0x290858, _0x5089c4(_0x55ddb3.x, _0x55ddb3.y + 0x1), _0x1ef570);
                break;
              case 0x2:
                this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y] = this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].subtract(_0x5089c4(0x0, _0x21b39f));
                _0x1ef570 = this.ComputeExplodeAffect(_0x6722ac, _0x290858, _0x5089c4(_0x55ddb3.x, _0x55ddb3.y - 0x1), _0x1ef570);
                break;
              case 0x1:
                this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y] = this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].add(_0x5089c4(_0x21b39f, 0x0));
                _0x1ef570 = this.ComputeExplodeAffect(_0x6722ac, _0x290858, _0x5089c4(_0x55ddb3.x + 0x1, _0x55ddb3.y), _0x1ef570);
                break;
              case 0x3:
                this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y] = this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].subtract(_0x5089c4(_0x21b39f, 0x0));
                _0x1ef570 = this.ComputeExplodeAffect(_0x6722ac, _0x290858, _0x5089c4(_0x55ddb3.x - 0x1, _0x55ddb3.y), _0x1ef570);
                break;
              case 0x5:
                this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y] = this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].add(_0x5089c4(_0x290858, _0x290858));
                _0x1ef570 = this.ComputeExplodeAffect(0x0, _0x14a3c2, _0x5089c4(_0x55ddb3.x + _0x55ddb3.y + 0x1), _0x1ef570);
                _0x1ef570 = this.ComputeExplodeAffect(0x1, _0x14a3c2, _0x5089c4(_0x55ddb3.x + 0x1, _0x55ddb3.y), _0x1ef570);
                _0x1ef570 = this.ComputeExplodeAffect(_0x6722ac, _0x290858, _0x5089c4(_0x55ddb3.x + 0x1, _0x55ddb3.y + 0x1), _0x1ef570);
                break;
              case 0x4:
                this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y] = this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].add(_0x5089c4(-0x1 * _0x290858, _0x290858));
                _0x1ef570 = this.ComputeExplodeAffect(0x0, _0x14a3c2, _0x5089c4(_0x55ddb3.x, _0x55ddb3.y + 0x1), _0x1ef570);
                _0x1ef570 = this.ComputeExplodeAffect(0x3, _0x14a3c2, _0x5089c4(_0x55ddb3.x - 0x1, _0x55ddb3.y), _0x1ef570);
                _0x1ef570 = this.ComputeExplodeAffect(_0x6722ac, _0x290858, _0x5089c4(_0x55ddb3.x - 0x1, _0x55ddb3.y + 0x1), _0x1ef570);
                break;
              case 0x7:
                this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y] = this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].add(_0x5089c4(_0x290858, -0x1 * _0x290858));
                _0x1ef570 = this.ComputeExplodeAffect(0x2, _0x14a3c2, _0x5089c4(_0x55ddb3.x, _0x55ddb3.y - 0x1), _0x1ef570);
                _0x1ef570 = this.ComputeExplodeAffect(0x1, _0x14a3c2, _0x5089c4(_0x55ddb3.x + 0x1, _0x55ddb3.y), _0x1ef570);
                _0x1ef570 = this.ComputeExplodeAffect(_0x6722ac, _0x290858, _0x5089c4(_0x55ddb3.x + 0x1, _0x55ddb3.y - 0x1), _0x1ef570);
                break;
              case 0x6:
                this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y] = this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].add(_0x5089c4(-0x1 * _0x290858, -0x1 * _0x290858));
                _0x1ef570 = this.ComputeExplodeAffect(0x2, _0x14a3c2, _0x5089c4(_0x55ddb3.x + _0x55ddb3.y - 0x1), _0x1ef570);
                _0x1ef570 = this.ComputeExplodeAffect(0x3, _0x14a3c2, _0x5089c4(_0x55ddb3.x - 0x1, _0x55ddb3.y), _0x1ef570);
                _0x1ef570 = this.ComputeExplodeAffect(_0x6722ac, _0x290858, _0x5089c4(_0x55ddb3.x - 0x1, _0x55ddb3.y - 0x1), _0x1ef570);
            }
            if (Math.abs(this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].x) > _0x1ef570) {
              _0x1ef570 = Math.abs(this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].x);
            }
            if (Math.abs(this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].y) > _0x1ef570) {
              _0x1ef570 = Math.abs(this.m_forceMap[_0x55ddb3.x][_0x55ddb3.y].y);
            }
            return _0x1ef570;
          }
          return _0x1ef570;
        };
        _0xe26d28.AffectWaveUpdate = function (_0x4b8a68) {
          if (this.m_isStartAffect) {
            this.m_affectTime = _0x189fb9.strip(this.m_affectTime + _0x4b8a68);
            var _0x1be926 = Math.exp(-this.m_affectTime * this.m_attenuation) * Math.cos(0x2 * Math.PI * this.m_affectTime) * this.m_baseMove;
            for (var _0x8dbee6 = 0x0; _0x8dbee6 < this.m_forceMap.length; _0x8dbee6++) {
              var _0x3300e2 = this.m_symbolSize.width * (_0x8dbee6 + 0.5) + this.m_reelPositionOffset[_0x8dbee6].x - this.m_viewSize.width / 0x2;
              for (var _0x3b13b7 = 0x0; _0x3b13b7 < this.m_forceMap[_0x8dbee6].length; _0x3b13b7++) {
                if (this.m_shakeSymbolSpines[_0x8dbee6][_0x3b13b7]) {
                  var _0x11e4dd = this.m_symbolSize.height * (_0x3b13b7 + 0.5) + this.m_reelPositionOffset[_0x8dbee6].y - this.m_viewSize.height / 0x2;
                  var _0x4acfb1 = this.m_forceMap[_0x8dbee6][_0x3b13b7].x * _0x1be926;
                  var _0xc9f930 = this.m_forceMap[_0x8dbee6][_0x3b13b7].y * _0x1be926;
                  this.m_shakeSymbolSpines[_0x8dbee6][_0x3b13b7].node.setPosition(_0x4aedad(_0x3300e2 + _0x4acfb1, _0x11e4dd + _0xc9f930));
                }
              }
            }
            if (_0x1be926 <= 0x0) {
              for (var _0x189254 = 0x0; _0x189254 < this.m_forceMap.length; _0x189254++) {
                var _0x459f5b = this.m_symbolSize.width * (_0x189254 + 0.5) + this.m_reelPositionOffset[_0x189254].x - this.m_viewSize.width / 0x2;
                for (var _0x388db8 = 0x0; _0x388db8 < this.m_forceMap[_0x189254].length; _0x388db8++) {
                  if (this.m_shakeSymbolSpines[_0x189254][_0x388db8]) {
                    var _0x1fda6f = this.m_symbolSize.height * (_0x388db8 + 0.5) + this.m_reelPositionOffset[_0x189254].y - this.m_viewSize.height / 0x2;
                    this.m_shakeSymbolSpines[_0x189254][_0x388db8].node.setPosition(_0x4aedad(_0x459f5b, _0x1fda6f));
                  }
                }
              }
              this.m_isStartAffect = false;
              if (this.m_affectEndCb) {
                this.m_affectEndCb();
              }
              for (var _0x52c184 = 0x0; _0x52c184 < _0x4e825f.COL; _0x52c184++) {
                for (var _0x5dfbee = 0x0; _0x5dfbee < _0x4e825f.ROW; _0x5dfbee++) {
                  this.m_symbol[_0x52c184][_0x5dfbee].active = true;
                  if (this.m_shakeSymbolSpines[_0x52c184][_0x5dfbee]) {
                    this.m_shakeSymbolSpines[_0x52c184][_0x5dfbee].node.removeFromParent();
                    _0x472faf.GetInstance().ReturnSymbol(this.m_shakeSymbolSpines[_0x52c184][_0x5dfbee]);
                    this.m_shakeSymbolSpines[_0x52c184][_0x5dfbee] = null;
                  }
                }
              }
              for (; this.m_boomPos.length > 0x0;) {
                var _0x1270b0 = _0x4e825f.ConvertIndex2ColRow(this.m_boomPos.pop());
                this.m_symbol[_0x1270b0.x][_0x1270b0.y].active = false;
              }
            }
          }
        };
        _0xe26d28.SetPlateSymbol = function (_0x3c872c) {
          this.m_plate = _0x3c872c;
          for (var _0x56c8d4 = 0x0; _0x56c8d4 < _0x4e825f.COL; _0x56c8d4++) {
            for (var _0x13e487 = 0x0; _0x13e487 < _0x4e825f.ROW; _0x13e487++) {
              _0x156681.stopAllByTarget(this.m_symbol[_0x56c8d4][_0x13e487]);
              var _0x1f9c3e = this.m_symbol[_0x56c8d4][_0x13e487].getComponent(_0xc81011);
              if (!_0x1f9c3e) {
                var _0x465732 = this.m_symbol[_0x56c8d4][_0x13e487].getComponent(_0x2b60bd);
                if (_0x465732) {
                  _0x465732.node.removeFromParent();
                  _0x472faf.GetInstance().ReturnSymbol(_0x465732);
                }
                _0x1f9c3e = _0x472faf.GetInstance().GetSymbolSprite();
                this.m_symbol[_0x56c8d4][_0x13e487] = _0x1f9c3e.node;
                _0x1f9c3e.type = _0xc81011.Type.SIMPLE;
                _0x1f9c3e.sizeMode = _0xc81011.SizeMode.RAW;
                _0x1f9c3e.trim = false;
                this.node.addChild(_0x1f9c3e.node);
              }
              _0x189fb9.SetZIndex(_0x1f9c3e.node, _0x4e825f.GetZIndex(_0x56c8d4, _0x13e487, this.m_plate[_0x56c8d4][_0x13e487]));
              _0x1f9c3e.spriteFrame = this.m_symbolSpriteFrames[this.m_plate[_0x56c8d4][_0x13e487]];
              _0x1f9c3e.node.active = true;
              this.m_symbol[_0x56c8d4][_0x13e487].setPosition(this.m_orgPos[_0x56c8d4][_0x13e487]);
            }
          }
        };
        _0x540644(_0x5d7be8, [{
          'key': "IsHardStop",
          'get': function () {
            return this.m_isHardStop;
          }
        }, {
          'key': "IsPlateCleaned",
          'get': function () {
            return this.m_isPlateCleaned;
          }
        }, {
          'key': "IsPatchUpFinished",
          'get': function () {
            return this.m_isPatchUpFinished;
          }
        }, {
          'key': "IsMatchingFinished",
          'get': function () {
            return this.m_isMatchingFinished;
          }
        }, {
          'key': 'IsInitStop',
          'get': function () {
            return this.m_isInitStop;
          }
        }]);
        return _0x5d7be8;
      }(_0x10b9dd);
      _0x2f4d36 = _0x14eb5c(_0x1305b4.prototype, "m_symbolSpriteFrames", [_0x28d9bd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0xf429b1._RF.pop();
      var _0x578dc8;
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (_0x3df5cc, _0x547072, _0x5166a8, _0x3341c6, _0x12d284) {
        _0x5166a8.exports = _0x547072("./src/index-minimal");
        _0x5166a8.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _0x48ecac;
      _0x46d4d2.define("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/assets/game/Script/Proto/slProto.js", function (_0x58e73c, _0x1c0b1a, _0x513b75, _0x3850b6, _0x312cf9) {
        var _0x5657ff;
        var _0xa15db9 = _0x1c0b1a('protobufjs/minimal');
        var _0x38e13a = _0xa15db9.Reader;
        var _0x354def = _0xa15db9.Writer;
        var _0x3aae70 = _0xa15db9.util;
        var _0x5ce6d4 = _0xa15db9.roots["default"] || (_0xa15db9.roots["default"] = {});
        (_0x5657ff = {
          ColumnFloat: function () {
            function _0x2017e0(_0x4b00bc) {
              this.Col = [];
              if (_0x4b00bc) {
                var _0x35c395 = Object.keys(_0x4b00bc);
                for (var _0x201ea8 = 0x0; _0x201ea8 < _0x35c395.length; ++_0x201ea8) {
                  if (null != _0x4b00bc[_0x35c395[_0x201ea8]]) {
                    this[_0x35c395[_0x201ea8]] = _0x4b00bc[_0x35c395[_0x201ea8]];
                  }
                }
              }
            }
            _0x2017e0.prototype.Col = _0x3aae70.emptyArray;
            _0x2017e0.create = function (_0x38b5f2) {
              return new _0x2017e0(_0x38b5f2);
            };
            _0x2017e0.encode = function (_0x1bebef, _0x2576d6) {
              if (!_0x2576d6) {
                _0x2576d6 = _0x354def.create();
              }
              if (null != _0x1bebef.Col && _0x1bebef.Col.length) {
                _0x2576d6.uint32(0xa).fork();
                for (var _0x5eadad = 0x0; _0x5eadad < _0x1bebef.Col.length; ++_0x5eadad) {
                  _0x2576d6.double(_0x1bebef.Col[_0x5eadad]);
                }
                _0x2576d6.ldelim();
              }
              return _0x2576d6;
            };
            _0x2017e0.encodeDelimited = function (_0x417bdf, _0x5a6c34) {
              return this.encode(_0x417bdf, _0x5a6c34).ldelim();
            };
            _0x2017e0.decode = function (_0x559572, _0x1a9de8) {
              if (!(_0x559572 instanceof _0x38e13a)) {
                _0x559572 = _0x38e13a.create(_0x559572);
              }
              var _0x39de60 = undefined === _0x1a9de8 ? _0x559572.len : _0x559572.pos + _0x1a9de8;
              for (var _0x4c9b5e = new _0x5ce6d4.slProto.ColumnFloat(); _0x559572.pos < _0x39de60;) {
                var _0x4b5433 = _0x559572.uint32();
                switch (_0x4b5433 >>> 0x3) {
                  case 0x1:
                    if (!(_0x4c9b5e.Col && _0x4c9b5e.Col.length)) {
                      _0x4c9b5e.Col = [];
                    }
                    if (0x2 == (0x7 & _0x4b5433)) {
                      for (var _0x4f9152 = _0x559572.uint32() + _0x559572.pos; _0x559572.pos < _0x4f9152;) {
                        _0x4c9b5e.Col.push(_0x559572.double());
                      }
                    } else {
                      _0x4c9b5e.Col.push(_0x559572.double());
                    }
                    break;
                  default:
                    _0x559572.skipType(0x7 & _0x4b5433);
                }
              }
              return _0x4c9b5e;
            };
            _0x2017e0.decodeDelimited = function (_0x47843b) {
              if (!(_0x47843b instanceof _0x38e13a)) {
                _0x47843b = new _0x38e13a(_0x47843b);
              }
              return this.decode(_0x47843b, _0x47843b.uint32());
            };
            _0x2017e0.verify = function (_0x40f2a4) {
              if ('object' != typeof _0x40f2a4 || null === _0x40f2a4) {
                return "object expected";
              }
              if (null != _0x40f2a4.Col && _0x40f2a4.hasOwnProperty("Col")) {
                if (!Array.isArray(_0x40f2a4.Col)) {
                  return "Col: array expected";
                }
                for (var _0x217d1e = 0x0; _0x217d1e < _0x40f2a4.Col.length; ++_0x217d1e) {
                  if ('number' != typeof _0x40f2a4.Col[_0x217d1e]) {
                    return "Col: number[] expected";
                  }
                }
              }
              return null;
            };
            _0x2017e0.fromObject = function (_0x539e2c) {
              if (_0x539e2c instanceof _0x5ce6d4.slProto.ColumnFloat) {
                return _0x539e2c;
              }
              var _0x1cd926 = new _0x5ce6d4.slProto.ColumnFloat();
              if (_0x539e2c.Col) {
                if (!Array.isArray(_0x539e2c.Col)) {
                  throw TypeError(".slProto.ColumnFloat.Col: array expected");
                }
                _0x1cd926.Col = [];
                for (var _0x1633fe = 0x0; _0x1633fe < _0x539e2c.Col.length; ++_0x1633fe) {
                  _0x1cd926.Col[_0x1633fe] = Number(_0x539e2c.Col[_0x1633fe]);
                }
              }
              return _0x1cd926;
            };
            _0x2017e0.toObject = function (_0x4150b4, _0x54a7e0) {
              if (!_0x54a7e0) {
                _0x54a7e0 = {};
              }
              var _0x4b93a8 = {};
              if (_0x54a7e0.arrays || _0x54a7e0.defaults) {
                _0x4b93a8.Col = [];
              }
              if (_0x4150b4.Col && _0x4150b4.Col.length) {
                _0x4b93a8.Col = [];
                for (var _0x25bb1c = 0x0; _0x25bb1c < _0x4150b4.Col.length; ++_0x25bb1c) {
                  _0x4b93a8.Col[_0x25bb1c] = _0x54a7e0.json && !isFinite(_0x4150b4.Col[_0x25bb1c]) ? String(_0x4150b4.Col[_0x25bb1c]) : _0x4150b4.Col[_0x25bb1c];
                }
              }
              return _0x4b93a8;
            };
            _0x2017e0.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0xa15db9.util.toJSONOptions);
            };
            return _0x2017e0;
          }(),
          "AwardData": function () {
            function _0x2e0b9c(_0x43882b) {
              this.PosVec = [];
              if (_0x43882b) {
                var _0x42798a = Object.keys(_0x43882b);
                for (var _0x1ca390 = 0x0; _0x1ca390 < _0x42798a.length; ++_0x1ca390) {
                  if (null != _0x43882b[_0x42798a[_0x1ca390]]) {
                    this[_0x42798a[_0x1ca390]] = _0x43882b[_0x42798a[_0x1ca390]];
                  }
                }
              }
            }
            _0x2e0b9c.prototype.Symbol = 0x0;
            _0x2e0b9c.prototype.Count = 0x0;
            _0x2e0b9c.prototype.Win = 0x0;
            _0x2e0b9c.prototype.Mult = 0x0;
            _0x2e0b9c.prototype.PosVec = _0x3aae70.emptyArray;
            _0x2e0b9c.create = function (_0x4f6eb3) {
              return new _0x2e0b9c(_0x4f6eb3);
            };
            _0x2e0b9c.encode = function (_0x3e5537, _0x3aa10d) {
              if (!_0x3aa10d) {
                _0x3aa10d = _0x354def.create();
              }
              if (null != _0x3e5537.Symbol && Object.hasOwnProperty.call(_0x3e5537, "Symbol")) {
                _0x3aa10d.uint32(0x8).int32(_0x3e5537.Symbol);
              }
              if (null != _0x3e5537.Count && Object.hasOwnProperty.call(_0x3e5537, "Count")) {
                _0x3aa10d.uint32(0x10).int32(_0x3e5537.Count);
              }
              if (null != _0x3e5537.Win && Object.hasOwnProperty.call(_0x3e5537, "Win")) {
                _0x3aa10d.uint32(0x19).double(_0x3e5537.Win);
              }
              if (null != _0x3e5537.Mult && Object.hasOwnProperty.call(_0x3e5537, "Mult")) {
                _0x3aa10d.uint32(0x21).double(_0x3e5537.Mult);
              }
              if (null != _0x3e5537.PosVec && _0x3e5537.PosVec.length) {
                _0x3aa10d.uint32(0x2a).fork();
                for (var _0x59a9a0 = 0x0; _0x59a9a0 < _0x3e5537.PosVec.length; ++_0x59a9a0) {
                  _0x3aa10d.int32(_0x3e5537.PosVec[_0x59a9a0]);
                }
                _0x3aa10d.ldelim();
              }
              return _0x3aa10d;
            };
            _0x2e0b9c.encodeDelimited = function (_0x14803d, _0x12652d) {
              return this.encode(_0x14803d, _0x12652d).ldelim();
            };
            _0x2e0b9c.decode = function (_0x3a8b4e, _0x5e20c2) {
              if (!(_0x3a8b4e instanceof _0x38e13a)) {
                _0x3a8b4e = _0x38e13a.create(_0x3a8b4e);
              }
              var _0x341823 = undefined === _0x5e20c2 ? _0x3a8b4e.len : _0x3a8b4e.pos + _0x5e20c2;
              for (var _0x52b0d0 = new _0x5ce6d4.slProto.AwardData(); _0x3a8b4e.pos < _0x341823;) {
                var _0x4ecae5 = _0x3a8b4e.uint32();
                switch (_0x4ecae5 >>> 0x3) {
                  case 0x1:
                    _0x52b0d0.Symbol = _0x3a8b4e.int32();
                    break;
                  case 0x2:
                    _0x52b0d0.Count = _0x3a8b4e.int32();
                    break;
                  case 0x3:
                    _0x52b0d0.Win = _0x3a8b4e.double();
                    break;
                  case 0x4:
                    _0x52b0d0.Mult = _0x3a8b4e.double();
                    break;
                  case 0x5:
                    if (!(_0x52b0d0.PosVec && _0x52b0d0.PosVec.length)) {
                      _0x52b0d0.PosVec = [];
                    }
                    if (0x2 == (0x7 & _0x4ecae5)) {
                      for (var _0x2a1589 = _0x3a8b4e.uint32() + _0x3a8b4e.pos; _0x3a8b4e.pos < _0x2a1589;) {
                        _0x52b0d0.PosVec.push(_0x3a8b4e.int32());
                      }
                    } else {
                      _0x52b0d0.PosVec.push(_0x3a8b4e.int32());
                    }
                    break;
                  default:
                    _0x3a8b4e.skipType(0x7 & _0x4ecae5);
                }
              }
              return _0x52b0d0;
            };
            _0x2e0b9c.decodeDelimited = function (_0x1276ad) {
              if (!(_0x1276ad instanceof _0x38e13a)) {
                _0x1276ad = new _0x38e13a(_0x1276ad);
              }
              return this.decode(_0x1276ad, _0x1276ad.uint32());
            };
            _0x2e0b9c.verify = function (_0x4ca721) {
              if ('object' != typeof _0x4ca721 || null === _0x4ca721) {
                return "object expected";
              }
              if (null != _0x4ca721.Symbol && _0x4ca721.hasOwnProperty("Symbol") && !_0x3aae70.isInteger(_0x4ca721.Symbol)) {
                return "Symbol: integer expected";
              }
              if (null != _0x4ca721.Count && _0x4ca721.hasOwnProperty("Count") && !_0x3aae70.isInteger(_0x4ca721.Count)) {
                return "Count: integer expected";
              }
              if (null != _0x4ca721.Win && _0x4ca721.hasOwnProperty("Win") && "number" != typeof _0x4ca721.Win) {
                return "Win: number expected";
              }
              if (null != _0x4ca721.Mult && _0x4ca721.hasOwnProperty("Mult") && "number" != typeof _0x4ca721.Mult) {
                return "Mult: number expected";
              }
              if (null != _0x4ca721.PosVec && _0x4ca721.hasOwnProperty('PosVec')) {
                if (!Array.isArray(_0x4ca721.PosVec)) {
                  return "PosVec: array expected";
                }
                for (var _0x5b3e75 = 0x0; _0x5b3e75 < _0x4ca721.PosVec.length; ++_0x5b3e75) {
                  if (!_0x3aae70.isInteger(_0x4ca721.PosVec[_0x5b3e75])) {
                    return "PosVec: integer[] expected";
                  }
                }
              }
              return null;
            };
            _0x2e0b9c.fromObject = function (_0x7d7605) {
              if (_0x7d7605 instanceof _0x5ce6d4.slProto.AwardData) {
                return _0x7d7605;
              }
              var _0x150316 = new _0x5ce6d4.slProto.AwardData();
              if (null != _0x7d7605.Symbol) {
                _0x150316.Symbol = 0x0 | _0x7d7605.Symbol;
              }
              if (null != _0x7d7605.Count) {
                _0x150316.Count = 0x0 | _0x7d7605.Count;
              }
              if (null != _0x7d7605.Win) {
                _0x150316.Win = Number(_0x7d7605.Win);
              }
              if (null != _0x7d7605.Mult) {
                _0x150316.Mult = Number(_0x7d7605.Mult);
              }
              if (_0x7d7605.PosVec) {
                if (!Array.isArray(_0x7d7605.PosVec)) {
                  throw TypeError(".slProto.AwardData.PosVec: array expected");
                }
                _0x150316.PosVec = [];
                for (var _0x21471c = 0x0; _0x21471c < _0x7d7605.PosVec.length; ++_0x21471c) {
                  _0x150316.PosVec[_0x21471c] = 0x0 | _0x7d7605.PosVec[_0x21471c];
                }
              }
              return _0x150316;
            };
            _0x2e0b9c.toObject = function (_0x363ec5, _0x1f31a2) {
              if (!_0x1f31a2) {
                _0x1f31a2 = {};
              }
              var _0x560bec = {};
              if (_0x1f31a2.arrays || _0x1f31a2.defaults) {
                _0x560bec.PosVec = [];
              }
              if (_0x1f31a2.defaults) {
                _0x560bec.Symbol = 0x0;
                _0x560bec.Count = 0x0;
                _0x560bec.Win = 0x0;
                _0x560bec.Mult = 0x0;
              }
              if (null != _0x363ec5.Symbol && _0x363ec5.hasOwnProperty("Symbol")) {
                _0x560bec.Symbol = _0x363ec5.Symbol;
              }
              if (null != _0x363ec5.Count && _0x363ec5.hasOwnProperty("Count")) {
                _0x560bec.Count = _0x363ec5.Count;
              }
              if (null != _0x363ec5.Win && _0x363ec5.hasOwnProperty('Win')) {
                _0x560bec.Win = _0x1f31a2.json && !isFinite(_0x363ec5.Win) ? String(_0x363ec5.Win) : _0x363ec5.Win;
              }
              if (null != _0x363ec5.Mult && _0x363ec5.hasOwnProperty("Mult")) {
                _0x560bec.Mult = _0x1f31a2.json && !isFinite(_0x363ec5.Mult) ? String(_0x363ec5.Mult) : _0x363ec5.Mult;
              }
              if (_0x363ec5.PosVec && _0x363ec5.PosVec.length) {
                _0x560bec.PosVec = [];
                for (var _0xd59e00 = 0x0; _0xd59e00 < _0x363ec5.PosVec.length; ++_0xd59e00) {
                  _0x560bec.PosVec[_0xd59e00] = _0x363ec5.PosVec[_0xd59e00];
                }
              }
              return _0x560bec;
            };
            _0x2e0b9c.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0xa15db9.util.toJSONOptions);
            };
            return _0x2e0b9c;
          }(),
          "ComboStageInfo": function () {
            function _0x19d026(_0x52930c) {
              this.ComboStageSymbol = [];
              this.ComboStageMult = [];
              this.AwardDataVec = [];
              this.FillSymbols = [];
              this.BombWildPos = [];
              this.BombedPos = [];
              if (_0x52930c) {
                var _0x18b52b = Object.keys(_0x52930c);
                for (var _0x424fe0 = 0x0; _0x424fe0 < _0x18b52b.length; ++_0x424fe0) {
                  if (null != _0x52930c[_0x18b52b[_0x424fe0]]) {
                    this[_0x18b52b[_0x424fe0]] = _0x52930c[_0x18b52b[_0x424fe0]];
                  }
                }
              }
            }
            _0x19d026.prototype.ComboStageSymbol = _0x3aae70.emptyArray;
            _0x19d026.prototype.ComboStageMult = _0x3aae70.emptyArray;
            _0x19d026.prototype.ComboStageWin = 0x0;
            _0x19d026.prototype.AwardDataVec = _0x3aae70.emptyArray;
            _0x19d026.prototype.FillSymbols = _0x3aae70.emptyArray;
            _0x19d026.prototype.WildPos = 0x0;
            _0x19d026.prototype.BombWildPos = _0x3aae70.emptyArray;
            _0x19d026.prototype.BombedPos = _0x3aae70.emptyArray;
            _0x19d026.prototype.MaxFlag = false;
            _0x19d026.create = function (_0x4270c7) {
              return new _0x19d026(_0x4270c7);
            };
            _0x19d026.encode = function (_0x4f9864, _0xa2c1dc) {
              if (!_0xa2c1dc) {
                _0xa2c1dc = _0x354def.create();
              }
              if (null != _0x4f9864.ComboStageSymbol && _0x4f9864.ComboStageSymbol.length) {
                for (var _0x1cb24f = 0x0; _0x1cb24f < _0x4f9864.ComboStageSymbol.length; ++_0x1cb24f) {
                  _0x5ce6d4.slProto.Column.encode(_0x4f9864.ComboStageSymbol[_0x1cb24f], _0xa2c1dc.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x4f9864.ComboStageMult && _0x4f9864.ComboStageMult.length) {
                for (_0x1cb24f = 0x0; _0x1cb24f < _0x4f9864.ComboStageMult.length; ++_0x1cb24f) {
                  _0x5ce6d4.slProto.ColumnFloat.encode(_0x4f9864.ComboStageMult[_0x1cb24f], _0xa2c1dc.uint32(0x12).fork()).ldelim();
                }
              }
              if (null != _0x4f9864.ComboStageWin && Object.hasOwnProperty.call(_0x4f9864, "ComboStageWin")) {
                _0xa2c1dc.uint32(0x19).double(_0x4f9864.ComboStageWin);
              }
              if (null != _0x4f9864.AwardDataVec && _0x4f9864.AwardDataVec.length) {
                for (_0x1cb24f = 0x0; _0x1cb24f < _0x4f9864.AwardDataVec.length; ++_0x1cb24f) {
                  _0x5ce6d4.slProto.AwardData.encode(_0x4f9864.AwardDataVec[_0x1cb24f], _0xa2c1dc.uint32(0x22).fork()).ldelim();
                }
              }
              if (null != _0x4f9864.FillSymbols && _0x4f9864.FillSymbols.length) {
                for (_0x1cb24f = 0x0; _0x1cb24f < _0x4f9864.FillSymbols.length; ++_0x1cb24f) {
                  _0x5ce6d4.slProto.Column.encode(_0x4f9864.FillSymbols[_0x1cb24f], _0xa2c1dc.uint32(0x2a).fork()).ldelim();
                }
              }
              if (null != _0x4f9864.WildPos && Object.hasOwnProperty.call(_0x4f9864, "WildPos")) {
                _0xa2c1dc.uint32(0x30).int32(_0x4f9864.WildPos);
              }
              if (null != _0x4f9864.BombWildPos && _0x4f9864.BombWildPos.length) {
                _0xa2c1dc.uint32(0x3a).fork();
                for (_0x1cb24f = 0x0; _0x1cb24f < _0x4f9864.BombWildPos.length; ++_0x1cb24f) {
                  _0xa2c1dc.int32(_0x4f9864.BombWildPos[_0x1cb24f]);
                }
                _0xa2c1dc.ldelim();
              }
              if (null != _0x4f9864.BombedPos && _0x4f9864.BombedPos.length) {
                _0xa2c1dc.uint32(0x42).fork();
                for (_0x1cb24f = 0x0; _0x1cb24f < _0x4f9864.BombedPos.length; ++_0x1cb24f) {
                  _0xa2c1dc.int32(_0x4f9864.BombedPos[_0x1cb24f]);
                }
                _0xa2c1dc.ldelim();
              }
              if (null != _0x4f9864.MaxFlag && Object.hasOwnProperty.call(_0x4f9864, "MaxFlag")) {
                _0xa2c1dc.uint32(0x48).bool(_0x4f9864.MaxFlag);
              }
              return _0xa2c1dc;
            };
            _0x19d026.encodeDelimited = function (_0x3b822d, _0x24533c) {
              return this.encode(_0x3b822d, _0x24533c).ldelim();
            };
            _0x19d026.decode = function (_0x352d70, _0x2349ef) {
              if (!(_0x352d70 instanceof _0x38e13a)) {
                _0x352d70 = _0x38e13a.create(_0x352d70);
              }
              var _0x27409f = undefined === _0x2349ef ? _0x352d70.len : _0x352d70.pos + _0x2349ef;
              for (var _0x17b1d2 = new _0x5ce6d4.slProto.ComboStageInfo(); _0x352d70.pos < _0x27409f;) {
                var _0xb67f90 = _0x352d70.uint32();
                switch (_0xb67f90 >>> 0x3) {
                  case 0x1:
                    if (!(_0x17b1d2.ComboStageSymbol && _0x17b1d2.ComboStageSymbol.length)) {
                      _0x17b1d2.ComboStageSymbol = [];
                    }
                    _0x17b1d2.ComboStageSymbol.push(_0x5ce6d4.slProto.Column.decode(_0x352d70, _0x352d70.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x17b1d2.ComboStageMult && _0x17b1d2.ComboStageMult.length)) {
                      _0x17b1d2.ComboStageMult = [];
                    }
                    _0x17b1d2.ComboStageMult.push(_0x5ce6d4.slProto.ColumnFloat.decode(_0x352d70, _0x352d70.uint32()));
                    break;
                  case 0x3:
                    _0x17b1d2.ComboStageWin = _0x352d70.double();
                    break;
                  case 0x4:
                    if (!(_0x17b1d2.AwardDataVec && _0x17b1d2.AwardDataVec.length)) {
                      _0x17b1d2.AwardDataVec = [];
                    }
                    _0x17b1d2.AwardDataVec.push(_0x5ce6d4.slProto.AwardData.decode(_0x352d70, _0x352d70.uint32()));
                    break;
                  case 0x5:
                    if (!(_0x17b1d2.FillSymbols && _0x17b1d2.FillSymbols.length)) {
                      _0x17b1d2.FillSymbols = [];
                    }
                    _0x17b1d2.FillSymbols.push(_0x5ce6d4.slProto.Column.decode(_0x352d70, _0x352d70.uint32()));
                    break;
                  case 0x6:
                    _0x17b1d2.WildPos = _0x352d70.int32();
                    break;
                  case 0x7:
                    if (!(_0x17b1d2.BombWildPos && _0x17b1d2.BombWildPos.length)) {
                      _0x17b1d2.BombWildPos = [];
                    }
                    if (0x2 == (0x7 & _0xb67f90)) {
                      for (var _0x4a7590 = _0x352d70.uint32() + _0x352d70.pos; _0x352d70.pos < _0x4a7590;) {
                        _0x17b1d2.BombWildPos.push(_0x352d70.int32());
                      }
                    } else {
                      _0x17b1d2.BombWildPos.push(_0x352d70.int32());
                    }
                    break;
                  case 0x8:
                    if (!(_0x17b1d2.BombedPos && _0x17b1d2.BombedPos.length)) {
                      _0x17b1d2.BombedPos = [];
                    }
                    if (0x2 == (0x7 & _0xb67f90)) {
                      for (_0x4a7590 = _0x352d70.uint32() + _0x352d70.pos; _0x352d70.pos < _0x4a7590;) {
                        _0x17b1d2.BombedPos.push(_0x352d70.int32());
                      }
                    } else {
                      _0x17b1d2.BombedPos.push(_0x352d70.int32());
                    }
                    break;
                  case 0x9:
                    _0x17b1d2.MaxFlag = _0x352d70.bool();
                    break;
                  default:
                    _0x352d70.skipType(0x7 & _0xb67f90);
                }
              }
              return _0x17b1d2;
            };
            _0x19d026.decodeDelimited = function (_0x20ffa6) {
              if (!(_0x20ffa6 instanceof _0x38e13a)) {
                _0x20ffa6 = new _0x38e13a(_0x20ffa6);
              }
              return this.decode(_0x20ffa6, _0x20ffa6.uint32());
            };
            _0x19d026.verify = function (_0x565a54) {
              if ('object' != typeof _0x565a54 || null === _0x565a54) {
                return "object expected";
              }
              if (null != _0x565a54.ComboStageSymbol && _0x565a54.hasOwnProperty("ComboStageSymbol")) {
                if (!Array.isArray(_0x565a54.ComboStageSymbol)) {
                  return "ComboStageSymbol: array expected";
                }
                for (var _0x387408 = 0x0; _0x387408 < _0x565a54.ComboStageSymbol.length; ++_0x387408) {
                  if (_0x1c9807 = _0x5ce6d4.slProto.Column.verify(_0x565a54.ComboStageSymbol[_0x387408])) {
                    return 'ComboStageSymbol.' + _0x1c9807;
                  }
                }
              }
              if (null != _0x565a54.ComboStageMult && _0x565a54.hasOwnProperty("ComboStageMult")) {
                if (!Array.isArray(_0x565a54.ComboStageMult)) {
                  return "ComboStageMult: array expected";
                }
                for (_0x387408 = 0x0; _0x387408 < _0x565a54.ComboStageMult.length; ++_0x387408) {
                  if (_0x1c9807 = _0x5ce6d4.slProto.ColumnFloat.verify(_0x565a54.ComboStageMult[_0x387408])) {
                    return 'ComboStageMult.' + _0x1c9807;
                  }
                }
              }
              if (null != _0x565a54.ComboStageWin && _0x565a54.hasOwnProperty("ComboStageWin") && "number" != typeof _0x565a54.ComboStageWin) {
                return "ComboStageWin: number expected";
              }
              if (null != _0x565a54.AwardDataVec && _0x565a54.hasOwnProperty('AwardDataVec')) {
                if (!Array.isArray(_0x565a54.AwardDataVec)) {
                  return "AwardDataVec: array expected";
                }
                for (_0x387408 = 0x0; _0x387408 < _0x565a54.AwardDataVec.length; ++_0x387408) {
                  if (_0x1c9807 = _0x5ce6d4.slProto.AwardData.verify(_0x565a54.AwardDataVec[_0x387408])) {
                    return "AwardDataVec." + _0x1c9807;
                  }
                }
              }
              if (null != _0x565a54.FillSymbols && _0x565a54.hasOwnProperty("FillSymbols")) {
                if (!Array.isArray(_0x565a54.FillSymbols)) {
                  return "FillSymbols: array expected";
                }
                for (_0x387408 = 0x0; _0x387408 < _0x565a54.FillSymbols.length; ++_0x387408) {
                  var _0x1c9807;
                  if (_0x1c9807 = _0x5ce6d4.slProto.Column.verify(_0x565a54.FillSymbols[_0x387408])) {
                    return "FillSymbols." + _0x1c9807;
                  }
                }
              }
              if (null != _0x565a54.WildPos && _0x565a54.hasOwnProperty('WildPos') && !_0x3aae70.isInteger(_0x565a54.WildPos)) {
                return "WildPos: integer expected";
              }
              if (null != _0x565a54.BombWildPos && _0x565a54.hasOwnProperty("BombWildPos")) {
                if (!Array.isArray(_0x565a54.BombWildPos)) {
                  return "BombWildPos: array expected";
                }
                for (_0x387408 = 0x0; _0x387408 < _0x565a54.BombWildPos.length; ++_0x387408) {
                  if (!_0x3aae70.isInteger(_0x565a54.BombWildPos[_0x387408])) {
                    return "BombWildPos: integer[] expected";
                  }
                }
              }
              if (null != _0x565a54.BombedPos && _0x565a54.hasOwnProperty("BombedPos")) {
                if (!Array.isArray(_0x565a54.BombedPos)) {
                  return "BombedPos: array expected";
                }
                for (_0x387408 = 0x0; _0x387408 < _0x565a54.BombedPos.length; ++_0x387408) {
                  if (!_0x3aae70.isInteger(_0x565a54.BombedPos[_0x387408])) {
                    return "BombedPos: integer[] expected";
                  }
                }
              }
              return null != _0x565a54.MaxFlag && _0x565a54.hasOwnProperty('MaxFlag') && "boolean" != typeof _0x565a54.MaxFlag ? "MaxFlag: boolean expected" : null;
            };
            _0x19d026.fromObject = function (_0x54ac3e) {
              if (_0x54ac3e instanceof _0x5ce6d4.slProto.ComboStageInfo) {
                return _0x54ac3e;
              }
              var _0x2b85ef = new _0x5ce6d4.slProto.ComboStageInfo();
              if (_0x54ac3e.ComboStageSymbol) {
                if (!Array.isArray(_0x54ac3e.ComboStageSymbol)) {
                  throw TypeError(".slProto.ComboStageInfo.ComboStageSymbol: array expected");
                }
                _0x2b85ef.ComboStageSymbol = [];
                for (var _0x1c7da9 = 0x0; _0x1c7da9 < _0x54ac3e.ComboStageSymbol.length; ++_0x1c7da9) {
                  if ('object' != typeof _0x54ac3e.ComboStageSymbol[_0x1c7da9]) {
                    throw TypeError(".slProto.ComboStageInfo.ComboStageSymbol: object expected");
                  }
                  _0x2b85ef.ComboStageSymbol[_0x1c7da9] = _0x5ce6d4.slProto.Column.fromObject(_0x54ac3e.ComboStageSymbol[_0x1c7da9]);
                }
              }
              if (_0x54ac3e.ComboStageMult) {
                if (!Array.isArray(_0x54ac3e.ComboStageMult)) {
                  throw TypeError(".slProto.ComboStageInfo.ComboStageMult: array expected");
                }
                _0x2b85ef.ComboStageMult = [];
                for (_0x1c7da9 = 0x0; _0x1c7da9 < _0x54ac3e.ComboStageMult.length; ++_0x1c7da9) {
                  if ("object" != typeof _0x54ac3e.ComboStageMult[_0x1c7da9]) {
                    throw TypeError(".slProto.ComboStageInfo.ComboStageMult: object expected");
                  }
                  _0x2b85ef.ComboStageMult[_0x1c7da9] = _0x5ce6d4.slProto.ColumnFloat.fromObject(_0x54ac3e.ComboStageMult[_0x1c7da9]);
                }
              }
              if (null != _0x54ac3e.ComboStageWin) {
                _0x2b85ef.ComboStageWin = Number(_0x54ac3e.ComboStageWin);
              }
              if (_0x54ac3e.AwardDataVec) {
                if (!Array.isArray(_0x54ac3e.AwardDataVec)) {
                  throw TypeError(".slProto.ComboStageInfo.AwardDataVec: array expected");
                }
                _0x2b85ef.AwardDataVec = [];
                for (_0x1c7da9 = 0x0; _0x1c7da9 < _0x54ac3e.AwardDataVec.length; ++_0x1c7da9) {
                  if ("object" != typeof _0x54ac3e.AwardDataVec[_0x1c7da9]) {
                    throw TypeError(".slProto.ComboStageInfo.AwardDataVec: object expected");
                  }
                  _0x2b85ef.AwardDataVec[_0x1c7da9] = _0x5ce6d4.slProto.AwardData.fromObject(_0x54ac3e.AwardDataVec[_0x1c7da9]);
                }
              }
              if (_0x54ac3e.FillSymbols) {
                if (!Array.isArray(_0x54ac3e.FillSymbols)) {
                  throw TypeError(".slProto.ComboStageInfo.FillSymbols: array expected");
                }
                _0x2b85ef.FillSymbols = [];
                for (_0x1c7da9 = 0x0; _0x1c7da9 < _0x54ac3e.FillSymbols.length; ++_0x1c7da9) {
                  if ("object" != typeof _0x54ac3e.FillSymbols[_0x1c7da9]) {
                    throw TypeError(".slProto.ComboStageInfo.FillSymbols: object expected");
                  }
                  _0x2b85ef.FillSymbols[_0x1c7da9] = _0x5ce6d4.slProto.Column.fromObject(_0x54ac3e.FillSymbols[_0x1c7da9]);
                }
              }
              if (null != _0x54ac3e.WildPos) {
                _0x2b85ef.WildPos = 0x0 | _0x54ac3e.WildPos;
              }
              if (_0x54ac3e.BombWildPos) {
                if (!Array.isArray(_0x54ac3e.BombWildPos)) {
                  throw TypeError(".slProto.ComboStageInfo.BombWildPos: array expected");
                }
                _0x2b85ef.BombWildPos = [];
                for (_0x1c7da9 = 0x0; _0x1c7da9 < _0x54ac3e.BombWildPos.length; ++_0x1c7da9) {
                  _0x2b85ef.BombWildPos[_0x1c7da9] = 0x0 | _0x54ac3e.BombWildPos[_0x1c7da9];
                }
              }
              if (_0x54ac3e.BombedPos) {
                if (!Array.isArray(_0x54ac3e.BombedPos)) {
                  throw TypeError(".slProto.ComboStageInfo.BombedPos: array expected");
                }
                _0x2b85ef.BombedPos = [];
                for (_0x1c7da9 = 0x0; _0x1c7da9 < _0x54ac3e.BombedPos.length; ++_0x1c7da9) {
                  _0x2b85ef.BombedPos[_0x1c7da9] = 0x0 | _0x54ac3e.BombedPos[_0x1c7da9];
                }
              }
              if (null != _0x54ac3e.MaxFlag) {
                _0x2b85ef.MaxFlag = Boolean(_0x54ac3e.MaxFlag);
              }
              return _0x2b85ef;
            };
            _0x19d026.toObject = function (_0x698a16, _0x395c57) {
              if (!_0x395c57) {
                _0x395c57 = {};
              }
              var _0x5e517c = {};
              if (_0x395c57.arrays || _0x395c57.defaults) {
                _0x5e517c.ComboStageSymbol = [];
                _0x5e517c.ComboStageMult = [];
                _0x5e517c.AwardDataVec = [];
                _0x5e517c.FillSymbols = [];
                _0x5e517c.BombWildPos = [];
                _0x5e517c.BombedPos = [];
              }
              if (_0x395c57.defaults) {
                _0x5e517c.ComboStageWin = 0x0;
                _0x5e517c.WildPos = 0x0;
                _0x5e517c.MaxFlag = false;
              }
              if (_0x698a16.ComboStageSymbol && _0x698a16.ComboStageSymbol.length) {
                _0x5e517c.ComboStageSymbol = [];
                for (var _0xc9d7a5 = 0x0; _0xc9d7a5 < _0x698a16.ComboStageSymbol.length; ++_0xc9d7a5) {
                  _0x5e517c.ComboStageSymbol[_0xc9d7a5] = _0x5ce6d4.slProto.Column.toObject(_0x698a16.ComboStageSymbol[_0xc9d7a5], _0x395c57);
                }
              }
              if (_0x698a16.ComboStageMult && _0x698a16.ComboStageMult.length) {
                _0x5e517c.ComboStageMult = [];
                for (_0xc9d7a5 = 0x0; _0xc9d7a5 < _0x698a16.ComboStageMult.length; ++_0xc9d7a5) {
                  _0x5e517c.ComboStageMult[_0xc9d7a5] = _0x5ce6d4.slProto.ColumnFloat.toObject(_0x698a16.ComboStageMult[_0xc9d7a5], _0x395c57);
                }
              }
              if (null != _0x698a16.ComboStageWin && _0x698a16.hasOwnProperty("ComboStageWin")) {
                _0x5e517c.ComboStageWin = _0x395c57.json && !isFinite(_0x698a16.ComboStageWin) ? String(_0x698a16.ComboStageWin) : _0x698a16.ComboStageWin;
              }
              if (_0x698a16.AwardDataVec && _0x698a16.AwardDataVec.length) {
                _0x5e517c.AwardDataVec = [];
                for (_0xc9d7a5 = 0x0; _0xc9d7a5 < _0x698a16.AwardDataVec.length; ++_0xc9d7a5) {
                  _0x5e517c.AwardDataVec[_0xc9d7a5] = _0x5ce6d4.slProto.AwardData.toObject(_0x698a16.AwardDataVec[_0xc9d7a5], _0x395c57);
                }
              }
              if (_0x698a16.FillSymbols && _0x698a16.FillSymbols.length) {
                _0x5e517c.FillSymbols = [];
                for (_0xc9d7a5 = 0x0; _0xc9d7a5 < _0x698a16.FillSymbols.length; ++_0xc9d7a5) {
                  _0x5e517c.FillSymbols[_0xc9d7a5] = _0x5ce6d4.slProto.Column.toObject(_0x698a16.FillSymbols[_0xc9d7a5], _0x395c57);
                }
              }
              if (null != _0x698a16.WildPos && _0x698a16.hasOwnProperty("WildPos")) {
                _0x5e517c.WildPos = _0x698a16.WildPos;
              }
              if (_0x698a16.BombWildPos && _0x698a16.BombWildPos.length) {
                _0x5e517c.BombWildPos = [];
                for (_0xc9d7a5 = 0x0; _0xc9d7a5 < _0x698a16.BombWildPos.length; ++_0xc9d7a5) {
                  _0x5e517c.BombWildPos[_0xc9d7a5] = _0x698a16.BombWildPos[_0xc9d7a5];
                }
              }
              if (_0x698a16.BombedPos && _0x698a16.BombedPos.length) {
                _0x5e517c.BombedPos = [];
                for (_0xc9d7a5 = 0x0; _0xc9d7a5 < _0x698a16.BombedPos.length; ++_0xc9d7a5) {
                  _0x5e517c.BombedPos[_0xc9d7a5] = _0x698a16.BombedPos[_0xc9d7a5];
                }
              }
              if (null != _0x698a16.MaxFlag && _0x698a16.hasOwnProperty("MaxFlag")) {
                _0x5e517c.MaxFlag = _0x698a16.MaxFlag;
              }
              return _0x5e517c;
            };
            _0x19d026.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0xa15db9.util.toJSONOptions);
            };
            return _0x19d026;
          }(),
          "RoundInfo": function () {
            function _0x2ca850(_0x350c8) {
              this.ComboStageData = [];
              if (_0x350c8) {
                var _0x381f14 = Object.keys(_0x350c8);
                for (var _0x5a3ac6 = 0x0; _0x5a3ac6 < _0x381f14.length; ++_0x5a3ac6) {
                  if (null != _0x350c8[_0x381f14[_0x5a3ac6]]) {
                    this[_0x381f14[_0x5a3ac6]] = _0x350c8[_0x381f14[_0x5a3ac6]];
                  }
                }
              }
            }
            _0x2ca850.prototype.ComboStageData = _0x3aae70.emptyArray;
            _0x2ca850.prototype.RoundWin = 0x0;
            _0x2ca850.prototype.AwardTypeFlag = 0x0;
            _0x2ca850.prototype.FreeRemainRound = 0x0;
            _0x2ca850.prototype.AddRound = 0x0;
            _0x2ca850.prototype.MaxFlag = false;
            _0x2ca850.prototype.FreeNowRound = 0x0;
            _0x2ca850.prototype.FreeTotalRound = 0x0;
            _0x2ca850.prototype.ScatterCount = 0x0;
            _0x2ca850.create = function (_0x26b913) {
              return new _0x2ca850(_0x26b913);
            };
            _0x2ca850.encode = function (_0x3b08c4, _0x3e0570) {
              if (!_0x3e0570) {
                _0x3e0570 = _0x354def.create();
              }
              if (null != _0x3b08c4.ComboStageData && _0x3b08c4.ComboStageData.length) {
                for (var _0x48d891 = 0x0; _0x48d891 < _0x3b08c4.ComboStageData.length; ++_0x48d891) {
                  _0x5ce6d4.slProto.ComboStageInfo.encode(_0x3b08c4.ComboStageData[_0x48d891], _0x3e0570.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x3b08c4.RoundWin && Object.hasOwnProperty.call(_0x3b08c4, 'RoundWin')) {
                _0x3e0570.uint32(0x11).double(_0x3b08c4.RoundWin);
              }
              if (null != _0x3b08c4.AwardTypeFlag && Object.hasOwnProperty.call(_0x3b08c4, "AwardTypeFlag")) {
                _0x3e0570.uint32(0x18).int32(_0x3b08c4.AwardTypeFlag);
              }
              if (null != _0x3b08c4.FreeRemainRound && Object.hasOwnProperty.call(_0x3b08c4, 'FreeRemainRound')) {
                _0x3e0570.uint32(0x20).int32(_0x3b08c4.FreeRemainRound);
              }
              if (null != _0x3b08c4.AddRound && Object.hasOwnProperty.call(_0x3b08c4, "AddRound")) {
                _0x3e0570.uint32(0x28).int32(_0x3b08c4.AddRound);
              }
              if (null != _0x3b08c4.MaxFlag && Object.hasOwnProperty.call(_0x3b08c4, "MaxFlag")) {
                _0x3e0570.uint32(0x30).bool(_0x3b08c4.MaxFlag);
              }
              if (null != _0x3b08c4.FreeNowRound && Object.hasOwnProperty.call(_0x3b08c4, "FreeNowRound")) {
                _0x3e0570.uint32(0x38).int32(_0x3b08c4.FreeNowRound);
              }
              if (null != _0x3b08c4.FreeTotalRound && Object.hasOwnProperty.call(_0x3b08c4, "FreeTotalRound")) {
                _0x3e0570.uint32(0x40).int32(_0x3b08c4.FreeTotalRound);
              }
              if (null != _0x3b08c4.ScatterCount && Object.hasOwnProperty.call(_0x3b08c4, "ScatterCount")) {
                _0x3e0570.uint32(0x48).int32(_0x3b08c4.ScatterCount);
              }
              return _0x3e0570;
            };
            _0x2ca850.encodeDelimited = function (_0x1e9aee, _0x7fa761) {
              return this.encode(_0x1e9aee, _0x7fa761).ldelim();
            };
            _0x2ca850.decode = function (_0x614cb3, _0x1fe62c) {
              if (!(_0x614cb3 instanceof _0x38e13a)) {
                _0x614cb3 = _0x38e13a.create(_0x614cb3);
              }
              var _0x3891a5 = undefined === _0x1fe62c ? _0x614cb3.len : _0x614cb3.pos + _0x1fe62c;
              for (var _0x53636e = new _0x5ce6d4.slProto.RoundInfo(); _0x614cb3.pos < _0x3891a5;) {
                var _0x309dbc = _0x614cb3.uint32();
                switch (_0x309dbc >>> 0x3) {
                  case 0x1:
                    if (!(_0x53636e.ComboStageData && _0x53636e.ComboStageData.length)) {
                      _0x53636e.ComboStageData = [];
                    }
                    _0x53636e.ComboStageData.push(_0x5ce6d4.slProto.ComboStageInfo.decode(_0x614cb3, _0x614cb3.uint32()));
                    break;
                  case 0x2:
                    _0x53636e.RoundWin = _0x614cb3.double();
                    break;
                  case 0x3:
                    _0x53636e.AwardTypeFlag = _0x614cb3.int32();
                    break;
                  case 0x4:
                    _0x53636e.FreeRemainRound = _0x614cb3.int32();
                    break;
                  case 0x5:
                    _0x53636e.AddRound = _0x614cb3.int32();
                    break;
                  case 0x6:
                    _0x53636e.MaxFlag = _0x614cb3.bool();
                    break;
                  case 0x7:
                    _0x53636e.FreeNowRound = _0x614cb3.int32();
                    break;
                  case 0x8:
                    _0x53636e.FreeTotalRound = _0x614cb3.int32();
                    break;
                  case 0x9:
                    _0x53636e.ScatterCount = _0x614cb3.int32();
                    break;
                  default:
                    _0x614cb3.skipType(0x7 & _0x309dbc);
                }
              }
              return _0x53636e;
            };
            _0x2ca850.decodeDelimited = function (_0x19689c) {
              if (!(_0x19689c instanceof _0x38e13a)) {
                _0x19689c = new _0x38e13a(_0x19689c);
              }
              return this.decode(_0x19689c, _0x19689c.uint32());
            };
            _0x2ca850.verify = function (_0xdf9261) {
              if ("object" != typeof _0xdf9261 || null === _0xdf9261) {
                return "object expected";
              }
              if (null != _0xdf9261.ComboStageData && _0xdf9261.hasOwnProperty("ComboStageData")) {
                if (!Array.isArray(_0xdf9261.ComboStageData)) {
                  return "ComboStageData: array expected";
                }
                for (var _0x4493b0 = 0x0; _0x4493b0 < _0xdf9261.ComboStageData.length; ++_0x4493b0) {
                  var _0x23d233 = _0x5ce6d4.slProto.ComboStageInfo.verify(_0xdf9261.ComboStageData[_0x4493b0]);
                  if (_0x23d233) {
                    return "ComboStageData." + _0x23d233;
                  }
                }
              }
              return null != _0xdf9261.RoundWin && _0xdf9261.hasOwnProperty("RoundWin") && 'number' != typeof _0xdf9261.RoundWin ? "RoundWin: number expected" : null != _0xdf9261.AwardTypeFlag && _0xdf9261.hasOwnProperty('AwardTypeFlag') && !_0x3aae70.isInteger(_0xdf9261.AwardTypeFlag) ? "AwardTypeFlag: integer expected" : null != _0xdf9261.FreeRemainRound && _0xdf9261.hasOwnProperty('FreeRemainRound') && !_0x3aae70.isInteger(_0xdf9261.FreeRemainRound) ? "FreeRemainRound: integer expected" : null != _0xdf9261.AddRound && _0xdf9261.hasOwnProperty("AddRound") && !_0x3aae70.isInteger(_0xdf9261.AddRound) ? "AddRound: integer expected" : null != _0xdf9261.MaxFlag && _0xdf9261.hasOwnProperty("MaxFlag") && "boolean" != typeof _0xdf9261.MaxFlag ? "MaxFlag: boolean expected" : null != _0xdf9261.FreeNowRound && _0xdf9261.hasOwnProperty("FreeNowRound") && !_0x3aae70.isInteger(_0xdf9261.FreeNowRound) ? "FreeNowRound: integer expected" : null != _0xdf9261.FreeTotalRound && _0xdf9261.hasOwnProperty("FreeTotalRound") && !_0x3aae70.isInteger(_0xdf9261.FreeTotalRound) ? "FreeTotalRound: integer expected" : null != _0xdf9261.ScatterCount && _0xdf9261.hasOwnProperty('ScatterCount') && !_0x3aae70.isInteger(_0xdf9261.ScatterCount) ? "ScatterCount: integer expected" : null;
            };
            _0x2ca850.fromObject = function (_0x83ad34) {
              if (_0x83ad34 instanceof _0x5ce6d4.slProto.RoundInfo) {
                return _0x83ad34;
              }
              var _0x4ab1e2 = new _0x5ce6d4.slProto.RoundInfo();
              if (_0x83ad34.ComboStageData) {
                if (!Array.isArray(_0x83ad34.ComboStageData)) {
                  throw TypeError(".slProto.RoundInfo.ComboStageData: array expected");
                }
                _0x4ab1e2.ComboStageData = [];
                for (var _0x7ceebf = 0x0; _0x7ceebf < _0x83ad34.ComboStageData.length; ++_0x7ceebf) {
                  if ("object" != typeof _0x83ad34.ComboStageData[_0x7ceebf]) {
                    throw TypeError(".slProto.RoundInfo.ComboStageData: object expected");
                  }
                  _0x4ab1e2.ComboStageData[_0x7ceebf] = _0x5ce6d4.slProto.ComboStageInfo.fromObject(_0x83ad34.ComboStageData[_0x7ceebf]);
                }
              }
              if (null != _0x83ad34.RoundWin) {
                _0x4ab1e2.RoundWin = Number(_0x83ad34.RoundWin);
              }
              if (null != _0x83ad34.AwardTypeFlag) {
                _0x4ab1e2.AwardTypeFlag = 0x0 | _0x83ad34.AwardTypeFlag;
              }
              if (null != _0x83ad34.FreeRemainRound) {
                _0x4ab1e2.FreeRemainRound = 0x0 | _0x83ad34.FreeRemainRound;
              }
              if (null != _0x83ad34.AddRound) {
                _0x4ab1e2.AddRound = 0x0 | _0x83ad34.AddRound;
              }
              if (null != _0x83ad34.MaxFlag) {
                _0x4ab1e2.MaxFlag = Boolean(_0x83ad34.MaxFlag);
              }
              if (null != _0x83ad34.FreeNowRound) {
                _0x4ab1e2.FreeNowRound = 0x0 | _0x83ad34.FreeNowRound;
              }
              if (null != _0x83ad34.FreeTotalRound) {
                _0x4ab1e2.FreeTotalRound = 0x0 | _0x83ad34.FreeTotalRound;
              }
              if (null != _0x83ad34.ScatterCount) {
                _0x4ab1e2.ScatterCount = 0x0 | _0x83ad34.ScatterCount;
              }
              return _0x4ab1e2;
            };
            _0x2ca850.toObject = function (_0x1af3ef, _0x1c710f) {
              if (!_0x1c710f) {
                _0x1c710f = {};
              }
              var _0x21499a = {};
              if (_0x1c710f.arrays || _0x1c710f.defaults) {
                _0x21499a.ComboStageData = [];
              }
              if (_0x1c710f.defaults) {
                _0x21499a.RoundWin = 0x0;
                _0x21499a.AwardTypeFlag = 0x0;
                _0x21499a.FreeRemainRound = 0x0;
                _0x21499a.AddRound = 0x0;
                _0x21499a.MaxFlag = false;
                _0x21499a.FreeNowRound = 0x0;
                _0x21499a.FreeTotalRound = 0x0;
                _0x21499a.ScatterCount = 0x0;
              }
              if (_0x1af3ef.ComboStageData && _0x1af3ef.ComboStageData.length) {
                _0x21499a.ComboStageData = [];
                for (var _0xc5f153 = 0x0; _0xc5f153 < _0x1af3ef.ComboStageData.length; ++_0xc5f153) {
                  _0x21499a.ComboStageData[_0xc5f153] = _0x5ce6d4.slProto.ComboStageInfo.toObject(_0x1af3ef.ComboStageData[_0xc5f153], _0x1c710f);
                }
              }
              if (null != _0x1af3ef.RoundWin && _0x1af3ef.hasOwnProperty('RoundWin')) {
                _0x21499a.RoundWin = _0x1c710f.json && !isFinite(_0x1af3ef.RoundWin) ? String(_0x1af3ef.RoundWin) : _0x1af3ef.RoundWin;
              }
              if (null != _0x1af3ef.AwardTypeFlag && _0x1af3ef.hasOwnProperty("AwardTypeFlag")) {
                _0x21499a.AwardTypeFlag = _0x1af3ef.AwardTypeFlag;
              }
              if (null != _0x1af3ef.FreeRemainRound && _0x1af3ef.hasOwnProperty("FreeRemainRound")) {
                _0x21499a.FreeRemainRound = _0x1af3ef.FreeRemainRound;
              }
              if (null != _0x1af3ef.AddRound && _0x1af3ef.hasOwnProperty("AddRound")) {
                _0x21499a.AddRound = _0x1af3ef.AddRound;
              }
              if (null != _0x1af3ef.MaxFlag && _0x1af3ef.hasOwnProperty("MaxFlag")) {
                _0x21499a.MaxFlag = _0x1af3ef.MaxFlag;
              }
              if (null != _0x1af3ef.FreeNowRound && _0x1af3ef.hasOwnProperty('FreeNowRound')) {
                _0x21499a.FreeNowRound = _0x1af3ef.FreeNowRound;
              }
              if (null != _0x1af3ef.FreeTotalRound && _0x1af3ef.hasOwnProperty("FreeTotalRound")) {
                _0x21499a.FreeTotalRound = _0x1af3ef.FreeTotalRound;
              }
              if (null != _0x1af3ef.ScatterCount && _0x1af3ef.hasOwnProperty("ScatterCount")) {
                _0x21499a.ScatterCount = _0x1af3ef.ScatterCount;
              }
              return _0x21499a;
            };
            _0x2ca850.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0xa15db9.util.toJSONOptions);
            };
            return _0x2ca850;
          }(),
          SpinAck: function () {
            function _0x1b7563(_0x1db46c) {
              this.RoundQueue = [];
              if (_0x1db46c) {
                var _0x3c6cc5 = Object.keys(_0x1db46c);
                for (var _0x1e0696 = 0x0; _0x1e0696 < _0x3c6cc5.length; ++_0x1e0696) {
                  if (null != _0x1db46c[_0x3c6cc5[_0x1e0696]]) {
                    this[_0x3c6cc5[_0x1e0696]] = _0x1db46c[_0x3c6cc5[_0x1e0696]];
                  }
                }
              }
            }
            _0x1b7563.prototype.RoundQueue = _0x3aae70.emptyArray;
            _0x1b7563.prototype.FreeTotalWin = 0x0;
            _0x1b7563.prototype.TotalWin = 0x0;
            _0x1b7563.prototype.ShowIndex = '';
            _0x1b7563.prototype.NowMoney = 0x0;
            _0x1b7563.prototype.AckType = 0x0;
            _0x1b7563.prototype.Bet = 0x0;
            _0x1b7563.prototype.RTP = 0x0;
            _0x1b7563.create = function (_0x26cbdb) {
              return new _0x1b7563(_0x26cbdb);
            };
            _0x1b7563.encode = function (_0x509544, _0x497d5b) {
              if (!_0x497d5b) {
                _0x497d5b = _0x354def.create();
              }
              if (null != _0x509544.RoundQueue && _0x509544.RoundQueue.length) {
                for (var _0x3a1fdc = 0x0; _0x3a1fdc < _0x509544.RoundQueue.length; ++_0x3a1fdc) {
                  _0x5ce6d4.slProto.RoundInfo.encode(_0x509544.RoundQueue[_0x3a1fdc], _0x497d5b.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x509544.FreeTotalWin && Object.hasOwnProperty.call(_0x509544, 'FreeTotalWin')) {
                _0x497d5b.uint32(0x11).double(_0x509544.FreeTotalWin);
              }
              if (null != _0x509544.TotalWin && Object.hasOwnProperty.call(_0x509544, "TotalWin")) {
                _0x497d5b.uint32(0x19).double(_0x509544.TotalWin);
              }
              if (null != _0x509544.ShowIndex && Object.hasOwnProperty.call(_0x509544, "ShowIndex")) {
                _0x497d5b.uint32(0x22).string(_0x509544.ShowIndex);
              }
              if (null != _0x509544.NowMoney && Object.hasOwnProperty.call(_0x509544, "NowMoney")) {
                _0x497d5b.uint32(0x29).double(_0x509544.NowMoney);
              }
              if (null != _0x509544.AckType && Object.hasOwnProperty.call(_0x509544, "AckType")) {
                _0x497d5b.uint32(0x30).int32(_0x509544.AckType);
              }
              if (null != _0x509544.Bet && Object.hasOwnProperty.call(_0x509544, "Bet")) {
                _0x497d5b.uint32(0x39).double(_0x509544.Bet);
              }
              if (null != _0x509544.RTP && Object.hasOwnProperty.call(_0x509544, "RTP")) {
                _0x497d5b.uint32(0x41).double(_0x509544.RTP);
              }
              return _0x497d5b;
            };
            _0x1b7563.encodeDelimited = function (_0x27c2dc, _0x32edbd) {
              return this.encode(_0x27c2dc, _0x32edbd).ldelim();
            };
            _0x1b7563.decode = function (_0x5cc39d, _0x19ae14) {
              if (!(_0x5cc39d instanceof _0x38e13a)) {
                _0x5cc39d = _0x38e13a.create(_0x5cc39d);
              }
              var _0x5e6e82 = undefined === _0x19ae14 ? _0x5cc39d.len : _0x5cc39d.pos + _0x19ae14;
              for (var _0x1fd674 = new _0x5ce6d4.slProto.SpinAck(); _0x5cc39d.pos < _0x5e6e82;) {
                var _0x380c6a = _0x5cc39d.uint32();
                switch (_0x380c6a >>> 0x3) {
                  case 0x1:
                    if (!(_0x1fd674.RoundQueue && _0x1fd674.RoundQueue.length)) {
                      _0x1fd674.RoundQueue = [];
                    }
                    _0x1fd674.RoundQueue.push(_0x5ce6d4.slProto.RoundInfo.decode(_0x5cc39d, _0x5cc39d.uint32()));
                    break;
                  case 0x2:
                    _0x1fd674.FreeTotalWin = _0x5cc39d.double();
                    break;
                  case 0x3:
                    _0x1fd674.TotalWin = _0x5cc39d.double();
                    break;
                  case 0x4:
                    _0x1fd674.ShowIndex = _0x5cc39d.string();
                    break;
                  case 0x5:
                    _0x1fd674.NowMoney = _0x5cc39d.double();
                    break;
                  case 0x6:
                    _0x1fd674.AckType = _0x5cc39d.int32();
                    break;
                  case 0x7:
                    _0x1fd674.Bet = _0x5cc39d.double();
                    break;
                  case 0x8:
                    _0x1fd674.RTP = _0x5cc39d.double();
                    break;
                  default:
                    _0x5cc39d.skipType(0x7 & _0x380c6a);
                }
              }
              return _0x1fd674;
            };
            _0x1b7563.decodeDelimited = function (_0x291cff) {
              if (!(_0x291cff instanceof _0x38e13a)) {
                _0x291cff = new _0x38e13a(_0x291cff);
              }
              return this.decode(_0x291cff, _0x291cff.uint32());
            };
            _0x1b7563.verify = function (_0x1bb9e8) {
              if ("object" != typeof _0x1bb9e8 || null === _0x1bb9e8) {
                return "object expected";
              }
              if (null != _0x1bb9e8.RoundQueue && _0x1bb9e8.hasOwnProperty('RoundQueue')) {
                if (!Array.isArray(_0x1bb9e8.RoundQueue)) {
                  return "RoundQueue: array expected";
                }
                for (var _0x1092ea = 0x0; _0x1092ea < _0x1bb9e8.RoundQueue.length; ++_0x1092ea) {
                  var _0x2414f6 = _0x5ce6d4.slProto.RoundInfo.verify(_0x1bb9e8.RoundQueue[_0x1092ea]);
                  if (_0x2414f6) {
                    return 'RoundQueue.' + _0x2414f6;
                  }
                }
              }
              return null != _0x1bb9e8.FreeTotalWin && _0x1bb9e8.hasOwnProperty("FreeTotalWin") && 'number' != typeof _0x1bb9e8.FreeTotalWin ? "FreeTotalWin: number expected" : null != _0x1bb9e8.TotalWin && _0x1bb9e8.hasOwnProperty("TotalWin") && 'number' != typeof _0x1bb9e8.TotalWin ? "TotalWin: number expected" : null != _0x1bb9e8.ShowIndex && _0x1bb9e8.hasOwnProperty("ShowIndex") && !_0x3aae70.isString(_0x1bb9e8.ShowIndex) ? "ShowIndex: string expected" : null != _0x1bb9e8.NowMoney && _0x1bb9e8.hasOwnProperty("NowMoney") && "number" != typeof _0x1bb9e8.NowMoney ? "NowMoney: number expected" : null != _0x1bb9e8.AckType && _0x1bb9e8.hasOwnProperty("AckType") && !_0x3aae70.isInteger(_0x1bb9e8.AckType) ? "AckType: integer expected" : null != _0x1bb9e8.Bet && _0x1bb9e8.hasOwnProperty("Bet") && "number" != typeof _0x1bb9e8.Bet ? "Bet: number expected" : null != _0x1bb9e8.RTP && _0x1bb9e8.hasOwnProperty("RTP") && "number" != typeof _0x1bb9e8.RTP ? "RTP: number expected" : null;
            };
            _0x1b7563.fromObject = function (_0x150874) {
              if (_0x150874 instanceof _0x5ce6d4.slProto.SpinAck) {
                return _0x150874;
              }
              var _0x4eb220 = new _0x5ce6d4.slProto.SpinAck();
              if (_0x150874.RoundQueue) {
                if (!Array.isArray(_0x150874.RoundQueue)) {
                  throw TypeError(".slProto.SpinAck.RoundQueue: array expected");
                }
                _0x4eb220.RoundQueue = [];
                for (var _0x1ef7c2 = 0x0; _0x1ef7c2 < _0x150874.RoundQueue.length; ++_0x1ef7c2) {
                  if ("object" != typeof _0x150874.RoundQueue[_0x1ef7c2]) {
                    throw TypeError(".slProto.SpinAck.RoundQueue: object expected");
                  }
                  _0x4eb220.RoundQueue[_0x1ef7c2] = _0x5ce6d4.slProto.RoundInfo.fromObject(_0x150874.RoundQueue[_0x1ef7c2]);
                }
              }
              if (null != _0x150874.FreeTotalWin) {
                _0x4eb220.FreeTotalWin = Number(_0x150874.FreeTotalWin);
              }
              if (null != _0x150874.TotalWin) {
                _0x4eb220.TotalWin = Number(_0x150874.TotalWin);
              }
              if (null != _0x150874.ShowIndex) {
                _0x4eb220.ShowIndex = String(_0x150874.ShowIndex);
              }
              if (null != _0x150874.NowMoney) {
                _0x4eb220.NowMoney = Number(_0x150874.NowMoney);
              }
              if (null != _0x150874.AckType) {
                _0x4eb220.AckType = 0x0 | _0x150874.AckType;
              }
              if (null != _0x150874.Bet) {
                _0x4eb220.Bet = Number(_0x150874.Bet);
              }
              if (null != _0x150874.RTP) {
                _0x4eb220.RTP = Number(_0x150874.RTP);
              }
              return _0x4eb220;
            };
            _0x1b7563.toObject = function (_0xd5a964, _0x48ba14) {
              if (!_0x48ba14) {
                _0x48ba14 = {};
              }
              var _0xa70ff4 = {};
              if (_0x48ba14.arrays || _0x48ba14.defaults) {
                _0xa70ff4.RoundQueue = [];
              }
              if (_0x48ba14.defaults) {
                _0xa70ff4.FreeTotalWin = 0x0;
                _0xa70ff4.TotalWin = 0x0;
                _0xa70ff4.ShowIndex = '';
                _0xa70ff4.NowMoney = 0x0;
                _0xa70ff4.AckType = 0x0;
                _0xa70ff4.Bet = 0x0;
                _0xa70ff4.RTP = 0x0;
              }
              if (_0xd5a964.RoundQueue && _0xd5a964.RoundQueue.length) {
                _0xa70ff4.RoundQueue = [];
                for (var _0x55bb01 = 0x0; _0x55bb01 < _0xd5a964.RoundQueue.length; ++_0x55bb01) {
                  _0xa70ff4.RoundQueue[_0x55bb01] = _0x5ce6d4.slProto.RoundInfo.toObject(_0xd5a964.RoundQueue[_0x55bb01], _0x48ba14);
                }
              }
              if (null != _0xd5a964.FreeTotalWin && _0xd5a964.hasOwnProperty("FreeTotalWin")) {
                _0xa70ff4.FreeTotalWin = _0x48ba14.json && !isFinite(_0xd5a964.FreeTotalWin) ? String(_0xd5a964.FreeTotalWin) : _0xd5a964.FreeTotalWin;
              }
              if (null != _0xd5a964.TotalWin && _0xd5a964.hasOwnProperty('TotalWin')) {
                _0xa70ff4.TotalWin = _0x48ba14.json && !isFinite(_0xd5a964.TotalWin) ? String(_0xd5a964.TotalWin) : _0xd5a964.TotalWin;
              }
              if (null != _0xd5a964.ShowIndex && _0xd5a964.hasOwnProperty("ShowIndex")) {
                _0xa70ff4.ShowIndex = _0xd5a964.ShowIndex;
              }
              if (null != _0xd5a964.NowMoney && _0xd5a964.hasOwnProperty("NowMoney")) {
                _0xa70ff4.NowMoney = _0x48ba14.json && !isFinite(_0xd5a964.NowMoney) ? String(_0xd5a964.NowMoney) : _0xd5a964.NowMoney;
              }
              if (null != _0xd5a964.AckType && _0xd5a964.hasOwnProperty("AckType")) {
                _0xa70ff4.AckType = _0xd5a964.AckType;
              }
              if (null != _0xd5a964.Bet && _0xd5a964.hasOwnProperty("Bet")) {
                _0xa70ff4.Bet = _0x48ba14.json && !isFinite(_0xd5a964.Bet) ? String(_0xd5a964.Bet) : _0xd5a964.Bet;
              }
              if (null != _0xd5a964.RTP && _0xd5a964.hasOwnProperty("RTP")) {
                _0xa70ff4.RTP = _0x48ba14.json && !isFinite(_0xd5a964.RTP) ? String(_0xd5a964.RTP) : _0xd5a964.RTP;
              }
              return _0xa70ff4;
            };
            _0x1b7563.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0xa15db9.util.toJSONOptions);
            };
            return _0x1b7563;
          }(),
          GameInfoData: function () {
            function _0x55640e(_0x33bba4) {
              this.Mul = [];
              if (_0x33bba4) {
                var _0x59871a = Object.keys(_0x33bba4);
                for (var _0x5f5787 = 0x0; _0x5f5787 < _0x59871a.length; ++_0x5f5787) {
                  if (null != _0x33bba4[_0x59871a[_0x5f5787]]) {
                    this[_0x59871a[_0x5f5787]] = _0x33bba4[_0x59871a[_0x5f5787]];
                  }
                }
              }
            }
            _0x55640e.prototype.ShowExtra = false;
            _0x55640e.prototype.Mul = _0x3aae70.emptyArray;
            _0x55640e.create = function (_0xc166e5) {
              return new _0x55640e(_0xc166e5);
            };
            _0x55640e.encode = function (_0x56af2d, _0x232a21) {
              if (!_0x232a21) {
                _0x232a21 = _0x354def.create();
              }
              if (null != _0x56af2d.ShowExtra && Object.hasOwnProperty.call(_0x56af2d, 'ShowExtra')) {
                _0x232a21.uint32(0x8).bool(_0x56af2d.ShowExtra);
              }
              if (null != _0x56af2d.Mul && _0x56af2d.Mul.length) {
                _0x232a21.uint32(0x12).fork();
                for (var _0x4d543f = 0x0; _0x4d543f < _0x56af2d.Mul.length; ++_0x4d543f) {
                  _0x232a21.double(_0x56af2d.Mul[_0x4d543f]);
                }
                _0x232a21.ldelim();
              }
              return _0x232a21;
            };
            _0x55640e.encodeDelimited = function (_0x2e352f, _0x13565d) {
              return this.encode(_0x2e352f, _0x13565d).ldelim();
            };
            _0x55640e.decode = function (_0x20553c, _0x136d8c) {
              if (!(_0x20553c instanceof _0x38e13a)) {
                _0x20553c = _0x38e13a.create(_0x20553c);
              }
              var _0x3a6f95 = undefined === _0x136d8c ? _0x20553c.len : _0x20553c.pos + _0x136d8c;
              for (var _0x4f1316 = new _0x5ce6d4.slProto.GameInfoData(); _0x20553c.pos < _0x3a6f95;) {
                var _0x17356 = _0x20553c.uint32();
                switch (_0x17356 >>> 0x3) {
                  case 0x1:
                    _0x4f1316.ShowExtra = _0x20553c.bool();
                    break;
                  case 0x2:
                    if (!(_0x4f1316.Mul && _0x4f1316.Mul.length)) {
                      _0x4f1316.Mul = [];
                    }
                    if (0x2 == (0x7 & _0x17356)) {
                      for (var _0x4fb2cc = _0x20553c.uint32() + _0x20553c.pos; _0x20553c.pos < _0x4fb2cc;) {
                        _0x4f1316.Mul.push(_0x20553c.double());
                      }
                    } else {
                      _0x4f1316.Mul.push(_0x20553c.double());
                    }
                    break;
                  default:
                    _0x20553c.skipType(0x7 & _0x17356);
                }
              }
              return _0x4f1316;
            };
            _0x55640e.decodeDelimited = function (_0xcc94c1) {
              if (!(_0xcc94c1 instanceof _0x38e13a)) {
                _0xcc94c1 = new _0x38e13a(_0xcc94c1);
              }
              return this.decode(_0xcc94c1, _0xcc94c1.uint32());
            };
            _0x55640e.verify = function (_0x114920) {
              if ("object" != typeof _0x114920 || null === _0x114920) {
                return "object expected";
              }
              if (null != _0x114920.ShowExtra && _0x114920.hasOwnProperty('ShowExtra') && 'boolean' != typeof _0x114920.ShowExtra) {
                return "ShowExtra: boolean expected";
              }
              if (null != _0x114920.Mul && _0x114920.hasOwnProperty("Mul")) {
                if (!Array.isArray(_0x114920.Mul)) {
                  return "Mul: array expected";
                }
                for (var _0x3722f7 = 0x0; _0x3722f7 < _0x114920.Mul.length; ++_0x3722f7) {
                  if ('number' != typeof _0x114920.Mul[_0x3722f7]) {
                    return "Mul: number[] expected";
                  }
                }
              }
              return null;
            };
            _0x55640e.fromObject = function (_0x256ee5) {
              if (_0x256ee5 instanceof _0x5ce6d4.slProto.GameInfoData) {
                return _0x256ee5;
              }
              var _0x5a53cd = new _0x5ce6d4.slProto.GameInfoData();
              if (null != _0x256ee5.ShowExtra) {
                _0x5a53cd.ShowExtra = Boolean(_0x256ee5.ShowExtra);
              }
              if (_0x256ee5.Mul) {
                if (!Array.isArray(_0x256ee5.Mul)) {
                  throw TypeError(".slProto.GameInfoData.Mul: array expected");
                }
                _0x5a53cd.Mul = [];
                for (var _0x5bbc1a = 0x0; _0x5bbc1a < _0x256ee5.Mul.length; ++_0x5bbc1a) {
                  _0x5a53cd.Mul[_0x5bbc1a] = Number(_0x256ee5.Mul[_0x5bbc1a]);
                }
              }
              return _0x5a53cd;
            };
            _0x55640e.toObject = function (_0x5ebae6, _0x241156) {
              if (!_0x241156) {
                _0x241156 = {};
              }
              var _0x2219f2 = {};
              if (_0x241156.arrays || _0x241156.defaults) {
                _0x2219f2.Mul = [];
              }
              if (_0x241156.defaults) {
                _0x2219f2.ShowExtra = false;
              }
              if (null != _0x5ebae6.ShowExtra && _0x5ebae6.hasOwnProperty('ShowExtra')) {
                _0x2219f2.ShowExtra = _0x5ebae6.ShowExtra;
              }
              if (_0x5ebae6.Mul && _0x5ebae6.Mul.length) {
                _0x2219f2.Mul = [];
                for (var _0x3f510f = 0x0; _0x3f510f < _0x5ebae6.Mul.length; ++_0x3f510f) {
                  _0x2219f2.Mul[_0x3f510f] = _0x241156.json && !isFinite(_0x5ebae6.Mul[_0x3f510f]) ? String(_0x5ebae6.Mul[_0x3f510f]) : _0x5ebae6.Mul[_0x3f510f];
                }
              }
              return _0x2219f2;
            };
            _0x55640e.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0xa15db9.util.toJSONOptions);
            };
            return _0x55640e;
          }()
        }).Column = function () {
          function _0x2a14b8(_0x1abcca) {
            this.Col = [];
            if (_0x1abcca) {
              var _0x4c5835 = Object.keys(_0x1abcca);
              for (var _0x2ab93c = 0x0; _0x2ab93c < _0x4c5835.length; ++_0x2ab93c) {
                if (null != _0x1abcca[_0x4c5835[_0x2ab93c]]) {
                  this[_0x4c5835[_0x2ab93c]] = _0x1abcca[_0x4c5835[_0x2ab93c]];
                }
              }
            }
          }
          _0x2a14b8.prototype.Col = _0x3aae70.emptyArray;
          _0x2a14b8.create = function (_0x2cb7c1) {
            return new _0x2a14b8(_0x2cb7c1);
          };
          _0x2a14b8.encode = function (_0x2d4bd7, _0x471a59) {
            if (!_0x471a59) {
              _0x471a59 = _0x354def.create();
            }
            if (null != _0x2d4bd7.Col && _0x2d4bd7.Col.length) {
              _0x471a59.uint32(0xa).fork();
              for (var _0x417080 = 0x0; _0x417080 < _0x2d4bd7.Col.length; ++_0x417080) {
                _0x471a59.int32(_0x2d4bd7.Col[_0x417080]);
              }
              _0x471a59.ldelim();
            }
            return _0x471a59;
          };
          _0x2a14b8.encodeDelimited = function (_0x4e6e6b, _0x1a186a) {
            return this.encode(_0x4e6e6b, _0x1a186a).ldelim();
          };
          _0x2a14b8.decode = function (_0x12866d, _0xc0af22) {
            if (!(_0x12866d instanceof _0x38e13a)) {
              _0x12866d = _0x38e13a.create(_0x12866d);
            }
            var _0x5bcf6f = undefined === _0xc0af22 ? _0x12866d.len : _0x12866d.pos + _0xc0af22;
            for (var _0x38b043 = new _0x5ce6d4.slProto.Column(); _0x12866d.pos < _0x5bcf6f;) {
              var _0x43fdc6 = _0x12866d.uint32();
              switch (_0x43fdc6 >>> 0x3) {
                case 0x1:
                  if (!(_0x38b043.Col && _0x38b043.Col.length)) {
                    _0x38b043.Col = [];
                  }
                  if (0x2 == (0x7 & _0x43fdc6)) {
                    for (var _0x1040c1 = _0x12866d.uint32() + _0x12866d.pos; _0x12866d.pos < _0x1040c1;) {
                      _0x38b043.Col.push(_0x12866d.int32());
                    }
                  } else {
                    _0x38b043.Col.push(_0x12866d.int32());
                  }
                  break;
                default:
                  _0x12866d.skipType(0x7 & _0x43fdc6);
              }
            }
            return _0x38b043;
          };
          _0x2a14b8.decodeDelimited = function (_0x1332c8) {
            if (!(_0x1332c8 instanceof _0x38e13a)) {
              _0x1332c8 = new _0x38e13a(_0x1332c8);
            }
            return this.decode(_0x1332c8, _0x1332c8.uint32());
          };
          _0x2a14b8.verify = function (_0x5b1979) {
            if ("object" != typeof _0x5b1979 || null === _0x5b1979) {
              return "object expected";
            }
            if (null != _0x5b1979.Col && _0x5b1979.hasOwnProperty("Col")) {
              if (!Array.isArray(_0x5b1979.Col)) {
                return "Col: array expected";
              }
              for (var _0x3d26ed = 0x0; _0x3d26ed < _0x5b1979.Col.length; ++_0x3d26ed) {
                if (!_0x3aae70.isInteger(_0x5b1979.Col[_0x3d26ed])) {
                  return "Col: integer[] expected";
                }
              }
            }
            return null;
          };
          _0x2a14b8.fromObject = function (_0x2ae573) {
            if (_0x2ae573 instanceof _0x5ce6d4.slProto.Column) {
              return _0x2ae573;
            }
            var _0x5158bc = new _0x5ce6d4.slProto.Column();
            if (_0x2ae573.Col) {
              if (!Array.isArray(_0x2ae573.Col)) {
                throw TypeError(".slProto.Column.Col: array expected");
              }
              _0x5158bc.Col = [];
              for (var _0x4fa44a = 0x0; _0x4fa44a < _0x2ae573.Col.length; ++_0x4fa44a) {
                _0x5158bc.Col[_0x4fa44a] = 0x0 | _0x2ae573.Col[_0x4fa44a];
              }
            }
            return _0x5158bc;
          };
          _0x2a14b8.toObject = function (_0x5624ae, _0x3f4c92) {
            if (!_0x3f4c92) {
              _0x3f4c92 = {};
            }
            var _0x32197f = {};
            if (_0x3f4c92.arrays || _0x3f4c92.defaults) {
              _0x32197f.Col = [];
            }
            if (_0x5624ae.Col && _0x5624ae.Col.length) {
              _0x32197f.Col = [];
              for (var _0x3edbe4 = 0x0; _0x3edbe4 < _0x5624ae.Col.length; ++_0x3edbe4) {
                _0x32197f.Col[_0x3edbe4] = _0x5624ae.Col[_0x3edbe4];
              }
            }
            return _0x32197f;
          };
          _0x2a14b8.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0xa15db9.util.toJSONOptions);
          };
          return _0x2a14b8;
        }();
        _0x5ce6d4.slProto = _0x5657ff;
        _0x513b75.exports = _0x5ce6d4;
        _0x578dc8 = _0x513b75.exports;
      }, function () {
        return {
          'protobufjs/minimal': "file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      _0x46d4d2.require("file:///Users/m2mac2/Desktop/H5/Client/workspace/SweetLand/Client/Thai_UAT/assets/game/Script/Proto/slProto.js");
      _0xf429b1._RF.push({}, "193cfMVhGdIDLQ2RiVUkZNL", "WaitResState", undefined);
      var _0x1dc200 = _0xd86e43.ccclass;
      _0x48ecac = _0x1dc200("WaitResState");
      var _0x42d10f;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "fce50GUbZxI8Jc199hKcXE3", "WaitReadyState", undefined);
      var _0x34adb2 = _0xd86e43.ccclass;
      _0x42d10f = _0x34adb2('WaitReadyState');
      var _0x5e7e27;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "205b1ChkLpJgL+9y3BHxF83", 'PlateShowState', undefined);
      var _0x3c214c = _0xd86e43.ccclass;
      _0x5e7e27 = _0x3c214c("PlateShowState");
      var _0xaa6b90;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "cda42jLBaBGq5+fs09DqHI6", "IdleState", undefined);
      var _0x5d65b4 = _0xd86e43.ccclass;
      _0xaa6b90 = _0x5d65b4("IdleState");
      var _0x1ce0a1;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "e91e5ch/ThKF6I3e+n5pLFD", "SpinState", undefined);
      var _0x5401e9 = _0xd86e43.ccclass;
      _0x1ce0a1 = _0x5401e9("SpinState");
      var _0x44944e;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "26745hZVYBKN6v4z+9x8h+/", "FirstPlateState", undefined);
      var _0x5b33e4 = _0xd86e43.ccclass;
      _0x44944e = _0x5b33e4("FirstPlateState");
      var _0x314404;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, '051a5c695lO55W8nDIYlrki', "ExplodeState", undefined);
      var _0xf67ac = _0xd86e43.ccclass;
      _0x314404 = _0xf67ac("ExplodeState");
      var _0x288e40;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "dbea1/gRZ9Fn5JaSlSaZLvK", "MatchingPatchUpState", undefined);
      var _0x527355 = _0xd86e43.ccclass;
      _0x288e40 = _0x527355('MatchingPatchUpState');
      var _0x492f61;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "bfdb58Vv2JAWrW3G1Fp9XAp", "EnterFreeState", undefined);
      var _0x40ceae = _0xd86e43.ccclass;
      _0x492f61 = _0x40ceae("EnterFreeState");
      var _0x569f1f;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "48865vNFYZLA5qaCXX+324s", "LeaveFreeState", undefined);
      var _0x340e69 = _0xd86e43.ccclass;
      _0x569f1f = _0x340e69("LeaveFreeState");
      var _0x5d66e8;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "c1411p+lg1OyqeoWu/fg0+S", "RoundEndState", undefined);
      var _0x2b5571 = _0xd86e43.ccclass;
      _0x5d66e8 = _0x2b5571('EndState');
      var _0x343684;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "d2520lYRX5Dd4p3cXEfUMN+", "FeatrueShowState", undefined);
      var _0x2a3227 = _0xd86e43.ccclass;
      _0x343684 = _0x2a3227("FeatrueShowState");
      var _0x5b5cfd;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "499c3+tQ29PyaVueMbFrdkC", "ShowWildState", undefined);
      var _0x2cb50e = _0xd86e43.ccclass;
      _0x5b5cfd = _0x2cb50e("ShowWildState");
      var _0x10bc8c;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "436ca7voehAM6uKBo7WdJqw", "ShowBoomState", undefined);
      var _0x38537e = _0xd86e43.ccclass;
      _0x10bc8c = _0x38537e("ShowBoomState");
      var _0x437d2e;
      var _0x43a689;
      var _0x338ba9;
      var _0x434713;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "fc0fb6ca0NOQqA1Y5JRowRD", "SmallWin", undefined);
      var _0x5b78db = _0xd86e43.ccclass;
      var _0x546099 = _0xd86e43.property;
      _0x437d2e = _0x5b78db("SmallWin");
      _0x43a689 = _0x546099({
        'type': _0x1d1f1,
        'tooltip': '贏分'
      });
      _0x338ba9 = function (_0x5d76f7) {
        function _0xb46bc9() {
          var _0x17d232;
          var _0x4412f7 = arguments.length;
          var _0x1ef85d = new Array(_0x4412f7);
          for (var _0x2c27b5 = 0x0; _0x2c27b5 < _0x4412f7; _0x2c27b5++) {
            _0x1ef85d[_0x2c27b5] = arguments[_0x2c27b5];
          }
          _0x17d232 = _0x5d76f7.call.apply(_0x5d76f7, [this].concat(_0x1ef85d)) || this;
          _0x45956f(_0x17d232, "m_winLabel", _0x434713, _0x28ffcf(_0x17d232));
          return _0x17d232;
        }
        _0x48aeaf(_0xb46bc9, _0x5d76f7);
        _0xb46bc9.prototype.ShowWin = function () {
          var _0x1856d2 = _0x44f921(_0xa0d93().mark(function _0x4c4760(_0x9b630) {
            var _0x3f9123;
            return _0xa0d93().wrap(function (_0x4d87fd) {
              for (;;) {
                switch (_0x4d87fd.prev = _0x4d87fd.next) {
                  case 0x0:
                    this.node.active = true;
                    this.m_winLabel.string = _0x189fb9.FormatNumberThousands(_0x4e825f.ShowDisplayValue(_0x9b630), _0x189fb9.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    (_0x3f9123 = this.node.getComponent(_0x2d36af)).opacity = 0.1;
                    _0x570899(_0x3f9123).to(0.25, {
                      'opacity': 0xff
                    }).start();
                    _0x4d87fd.next = 0x7;
                    return _0x3e36bf.Wait(this, 0x1);
                  case 0x7:
                    this.node.active = false;
                  case 0x8:
                  case "end":
                    return _0x4d87fd.stop();
                }
              }
            }, _0x4c4760, this);
          }));
          return function (_0x1dab50) {
            return _0x1856d2.apply(this, arguments);
          };
        }();
        return _0xb46bc9;
      }(_0x10b9dd);
      _0x434713 = _0x14eb5c(_0x338ba9.prototype, "m_winLabel", [_0x43a689], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x223a0e;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, '5d2f77xhUxO6Zs8ds65FkMm', "RoundShowEndState", undefined);
      var _0x3b1eef = _0xd86e43.ccclass;
      _0x223a0e = _0x3b1eef("RoundShowEndState");
      var _0x3776f4;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "b7913QfZu9HVa57fNHvlYRH", "CheckState", undefined);
      var _0x491254 = _0xd86e43.ccclass;
      _0x3776f4 = _0x491254("CheckState");
      var _0x47a72a;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "bfbb9Ads+BI6asdkY5YK9k2", "UnshowPrepareState", undefined);
      var _0x436c42 = _0xd86e43.ccclass;
      _0x47a72a = _0x436c42("UnshowPrepareState");
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "bcd51yLMHhBir7voFjEUu2p", "GameView", undefined);
      var _0x203792;
      _0xf429b1._RF.pop();
      _0xf429b1._RF.push({}, "c4de0WVBuRDuYAKuXf7mC5p", "AwardState", undefined);
      var _0x4f3b0b = _0xd86e43.ccclass;
      _0x203792 = _0x4f3b0b('AwardState');
      _0xf429b1._RF.pop();
    }
  };
});
(function (_0x39d6ee) {
  _0x39d6ee('virtual:///prerequisite-imports/game', "chunks:///game.js");
})(function (_0xf06086, _0x5b202f) {
  System.register(_0xf06086, [_0x5b202f], function (_0x149644, _0x5bd084) {
    return {
      'setters': [function (_0x7ffa71) {
        var _0x53cafc = {};
        for (var _0x4d8479 in _0x7ffa71) {
          if (_0x4d8479 !== "default" && _0x4d8479 !== '__esModule') {
            _0x53cafc[_0x4d8479] = _0x7ffa71[_0x4d8479];
          }
        }
        _0x149644(_0x53cafc);
      }],
      'execute': function () {}
    };
  });
});