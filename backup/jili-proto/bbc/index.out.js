System.register("chunks:///game.js", ['cc', "./index-62f14ef5.js"], function (_0x7098f8, _0x22d6db) {
  'use strict';

  var _0x252f89;
  var _0x20545c;
  var _0x2db653;
  var _0x5f4ab7;
  var _0x4d349f;
  var _0x7c2fb4;
  var _0xe077c7;
  var _0x2b691f;
  var _0x575152;
  var _0x27b228;
  var _0x2bfa3f;
  var _0x51a26a;
  var _0x4057ea;
  var _0x3c1ce8;
  var _0x3891f8;
  var _0x411bc1;
  var _0xcd8757;
  var _0x5c5dd7;
  var _0x3b21f3;
  var _0x4afa6c;
  var _0x142d65;
  var _0x464520;
  var _0x8d71bd;
  var _0x3dbb38;
  var _0x2147f2;
  var _0x13b8b5;
  var _0xb6c15a;
  var _0x405794;
  var _0x59a013;
  var _0x3837b4;
  var _0x406265;
  var _0x34b760;
  var _0x7eb85f;
  var _0x151d0c;
  var _0x446dc3;
  var _0x25838e;
  var _0x3c3d1d;
  var _0x3c8f4a;
  var _0x12ab12;
  var _0x42709d;
  var _0x106bcd;
  var _0xf22764;
  var _0x1d21d9;
  var _0x33fc15;
  var _0xf8b970;
  var _0x3ed31a;
  var _0x5de981;
  var _0xb14087;
  var _0x5a8c8f;
  var _0x1b0819;
  var _0x41dea1;
  var _0x5d0c3e;
  var _0x214f9d;
  var _0x30b121;
  var _0x4a8f0d;
  var _0x42bcc1;
  var _0x11f2c3;
  var _0x36783f;
  var _0xdc5a06;
  var _0x1303ad;
  var _0x29381a;
  var _0x4f031e;
  return {
    'setters': [function (_0x10e5ab) {
      _0x252f89 = _0x10e5ab.cclegacy;
      _0x20545c = _0x10e5ab.v3;
      _0x2db653 = _0x10e5ab._decorator;
      _0x5f4ab7 = _0x10e5ab.SpriteFrame;
      _0x4d349f = _0x10e5ab.UITransform;
      _0x7c2fb4 = _0x10e5ab.Size;
      _0xe077c7 = _0x10e5ab.Node;
      _0x2b691f = _0x10e5ab.Sprite;
      _0x575152 = _0x10e5ab.error;
      _0x27b228 = _0x10e5ab.Component;
      _0x2bfa3f = _0x10e5ab.Prefab;
      _0x51a26a = _0x10e5ab.Animation;
      _0x4057ea = _0x10e5ab.instantiate;
      _0x3c1ce8 = _0x10e5ab.tween;
      _0x3891f8 = _0x10e5ab.UIOpacity;
      _0x411bc1 = _0x10e5ab.log;
      _0xcd8757 = _0x10e5ab.ToggleContainer;
      _0x5c5dd7 = _0x10e5ab.Button;
      _0x3b21f3 = _0x10e5ab.Label;
      _0x4afa6c = _0x10e5ab.ParticleSystem2D;
      _0x142d65 = _0x10e5ab.SpriteAtlas;
      _0x464520 = _0x10e5ab.input;
      _0x8d71bd = _0x10e5ab.Input;
      _0x3dbb38 = _0x10e5ab.KeyCode;
      _0x2147f2 = _0x10e5ab.screen;
      _0x13b8b5 = _0x10e5ab.view;
      _0xb6c15a = _0x10e5ab.ResolutionPolicy;
    }, function (_0x3b0a0b) {
      _0x405794 = _0x3b0a0b._;
      _0x59a013 = _0x3b0a0b.a;
      _0x3837b4 = _0x3b0a0b.b;
      _0x406265 = _0x3b0a0b.c;
      _0x34b760 = _0x3b0a0b.v;
      _0x7eb85f = _0x3b0a0b.g;
      _0x151d0c = _0x3b0a0b.l;
      _0x446dc3 = _0x3b0a0b.j;
      _0x25838e = _0x3b0a0b.B;
      _0x3c3d1d = _0x3b0a0b.o;
      _0x3c8f4a = _0x3b0a0b.p;
      _0x12ab12 = _0x3b0a0b.h;
      _0x42709d = _0x3b0a0b.e;
      _0x106bcd = _0x3b0a0b.w;
      _0xf22764 = _0x3b0a0b.i;
      _0x1d21d9 = _0x3b0a0b.x;
      _0x33fc15 = _0x3b0a0b.s;
      _0xf8b970 = _0x3b0a0b.y;
      _0x3ed31a = _0x3b0a0b.k;
      _0x5de981 = _0x3b0a0b.r;
      _0xb14087 = _0x3b0a0b.q;
      _0x5a8c8f = _0x3b0a0b.A;
      _0x1b0819 = _0x3b0a0b.z;
      _0x41dea1 = _0x3b0a0b.E;
      _0x5d0c3e = _0x3b0a0b.f;
      _0x214f9d = _0x3b0a0b.C;
      _0x30b121 = _0x3b0a0b.D;
      _0x4a8f0d = _0x3b0a0b.F;
      _0x42bcc1 = _0x3b0a0b.G;
      _0x11f2c3 = _0x3b0a0b.H;
      _0x36783f = _0x3b0a0b.I;
      _0xdc5a06 = _0x3b0a0b.n;
      _0x1303ad = _0x3b0a0b.d;
      _0x29381a = _0x3b0a0b.J;
      _0x4f031e = _0x3b0a0b.K;
    }],
    'execute': function () {
      _0x252f89._RF.push({}, "0dd16JbootB4rIeeHJVcaue", "DataStructure", undefined);
      var _0x3ff7a7 = function () {
        this.info = undefined;
        this.missionReward = 0x0;
        this.fullJpWin = undefined;
        this.freeremain = -0x1;
      };
      var _0x5abf76 = function () {
        this.fgplateinfo = undefined;
        this.totalprize = 0x0;
        this.totalfullwildcount = 0x0;
        this.times = 0x0;
        this.multix = 0x0;
      };
      var _0x1bcb3d;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "a2d18zwnuNLv7DlEPer9tG4", "Game_Define", undefined);
      (function (_0x4fdc15) {
        _0x4fdc15[_0x4fdc15.UNSHOW_PREPARE = 0x0] = "UNSHOW_PREPARE";
        _0x4fdc15[_0x4fdc15.SWORD_SHOW = 0x1] = 'SWORD_SHOW';
        _0x4fdc15[_0x4fdc15.AWARD = 0x2] = "AWARD";
        _0x4fdc15[_0x4fdc15.ROUND_SHOW_END = 0x3] = "ROUND_SHOW_END";
        _0x4fdc15[_0x4fdc15.ENTER_FREE = 0x4] = 'ENTER_FREE';
        _0x4fdc15[_0x4fdc15.LEAVE_FREE = 0x5] = "LEAVE_FREE";
        _0x4fdc15[_0x4fdc15.ROUND_END = 0x6] = "ROUND_END";
      })(_0x1bcb3d || (_0x1bcb3d = {}));
      var _0x249d7b = function () {
        function _0x4d19f7() {}
        _0x4d19f7.OnExit = function () {
          this.AudioClips = {
            'Bao_wheel': null,
            'Goldensun': null,
            'Sword_ani': null,
            'Spin_click': null,
            'Maingame_in': null,
            'Win_level01': null,
            'Win_level02': null,
            'Win_level03': null,
            'Win_level04': null,
            'Symbol_ani1': null,
            'Symbol_ani2': null,
            'Symbol_ani3': null,
            'Symbol_ani12': null,
            'Bbc_fg_bgm': null,
            'Bbc_bonus_bgm': null,
            'Bbc_freegame_in01': null,
            'Bbc_freegame_in02': null,
            'Bbc_freegame_fx01': null,
            'Dragon_reel01': null,
            'Scatter_finalhit': null,
            'Dragon_wait': null,
            'Dragon_roar': null,
            'Fg_NearWin': null,
            'Fg_symbol_bell': null,
            'Freegame_result01': null,
            'Freegame_result02': null,
            'Reel_Stop': null,
            'Bbc_freegame_fireball': null
          };
        };
        return _0x4d19f7;
      }();
      var _0x4379c1;
      var _0x1cb743;
      var _0x55b60c;
      var _0xa2cb6c;
      _0x249d7b.Ver = "290";
      _0x249d7b.SceneID = 0x1426aad;
      _0x249d7b.GameId = 0x38;
      _0x249d7b.LINE_NUMBER = 0x5;
      _0x249d7b.BIG_WIN_TIME = 0x1f4;
      _0x249d7b.NORMAL_SYMBOL_NUMBER = 0xc;
      _0x249d7b.SYMBOL_SWORD = 0xb;
      _0x249d7b.SYMBOL_DRAGON = 0xc;
      _0x249d7b.SYMBOL_WILD = 0xb;
      _0x249d7b.SYMBOL_NONE = 0x11;
      _0x249d7b.BIG_WAVE_RATE = 0x64;
      _0x249d7b.SYMBOL_HAVE_OWN_ANI_LIMIT = 0x5;
      _0x249d7b.SETTLEMENT_RUNNING_TIME = 0x2;
      _0x249d7b.NORMAL_LINE_RUNNING_TIME = 0.65;
      _0x249d7b.NEAR_WIN_WAIT_TIME = 0x3;
      _0x249d7b.SYMBOL_ANI_DURATION = 1.18;
      _0x249d7b.ITEM_PATH = "/BBC/common/Item_card";
      _0x249d7b.ODDS_DT_TIME = [0x0, 0x0, 0x5, 0x6, 0x8];
      _0x249d7b.ACTION_DELAY_TIME = {
        'CHANGE_TO_MAIN': 0x3,
        'CHANGE_TO_FREE': 0x3,
        'FIRE_BALL': 0.3,
        'FIRE_BALL_FLY': 0.6,
        'FREE_MAIN_TRANSFER_START': 2.2,
        'FREE_MAIN_TRANSFER_END': 0x0,
        'FREE_SETTLEMENT_SHOW': 0x1,
        'FREE_SETTLEMENT_DRAGON': 0x2,
        'FREE_SETTLEMENT_WIN': 0x1,
        'FREE_SETTLEMENT_RUN_COIN': 0x2,
        'NORMAL_SPIN_ACK': 0.1
      };
      _0x249d7b.AudioFileRoot = "Sound/";
      _0x249d7b.AudioFilePath = {
        'Bao_wheel': 'Sound/Bao_wheel',
        'Goldensun': "Sound/goldensun",
        'Sword_ani': 'Sound/sword_ani',
        'Spin_click': "Sound/spin_click",
        'Maingame_in': "Sound/maingame_in",
        'Win_level01': "Sound/win_level01",
        'Win_level02': 'Sound/win_level02',
        'Win_level03': "Sound/win_level03",
        'Win_level04': "Sound/win_level04",
        'Symbol_ani1': "Sound/symbol_ani01",
        'Symbol_ani2': "Sound/symbol_ani02",
        'Symbol_ani3': "Sound/symbol_ani03",
        'Symbol_ani12': "Sound/symbol_ani12",
        'Bbc_fg_bgm': "Sound/bbc_fg_bgm",
        'Bbc_bonus_bgm': "Sound/bbc_bonus_bgm",
        'Bbc_freegame_in01': "Sound/bbc_freegame_in01",
        'Bbc_freegame_in02': 'Sound/bbc_freegame_in02',
        'Bbc_freegame_fx01': "Sound/bbc_freegame_fx01",
        'Dragon_reel01': "Sound/Dragon_reel01",
        'Scatter_finalhit': "Sound/Scatter_finalhit",
        'Dragon_wait': "Sound/Dragon_wait",
        'Dragon_roar': "Sound/Dragon_roar",
        'Fg_NearWin': "Sound/Fg_NearWin",
        'Fg_symbol_bell': "Sound/Fg_symbol_bell",
        'Freegame_result01': "Sound/freegame_result01",
        'Freegame_result02': "Sound/freegame_result02",
        'Reel_Stop': "Sound/Reel_Stop",
        'Bbc_freegame_fireball': "Sound/bbc_freegame_fireball"
      };
      _0x249d7b.AudioClips = {
        'Bao_wheel': null,
        'Goldensun': null,
        'Sword_ani': null,
        'Spin_click': null,
        'Maingame_in': null,
        'Win_level01': null,
        'Win_level02': null,
        'Win_level03': null,
        'Win_level04': null,
        'Symbol_ani1': null,
        'Symbol_ani2': null,
        'Symbol_ani3': null,
        'Symbol_ani12': null,
        'Bbc_fg_bgm': null,
        'Bbc_bonus_bgm': null,
        'Bbc_freegame_in01': null,
        'Bbc_freegame_in02': null,
        'Bbc_freegame_fx01': null,
        'Dragon_reel01': null,
        'Scatter_finalhit': null,
        'Dragon_wait': null,
        'Dragon_roar': null,
        'Fg_NearWin': null,
        'Fg_symbol_bell': null,
        'Freegame_result01': null,
        'Freegame_result02': null,
        'Reel_Stop': null,
        'Bbc_freegame_fireball': null
      };
      _0x249d7b.EVENT_ID = {
        'POSITION_ERROR': 0x7d0,
        'SYMBOL_ERROR': 0x7d1
      };
      _0x249d7b.SPIN_ACK_TYPE = {
        'AT_SUCCESS': 0x0,
        'AT_MONEY_NOT_ENOUGH': 0x12e,
        'AT_MONEY_ABNORMAL': 0x12d,
        'TRIAL_END': 0x8,
        'AT_MONEY_NOT_ENOUGH_SINGLE': 0x131,
        'API_BETONCE_FAIL': 0x7d3
      };
      _0x249d7b.AWARD_TYPE = {
        'AWARD_TYPE_NON': 0x0,
        'AWARD_TYPE_LINE': 0x1,
        'AWARD_TYPE_ALL_PLATE': 0x2,
        'AWARD_TYPE_MAX': 0x7fff
      };
      _0x249d7b.AckType = {
        'login': 0x0,
        'exchangeChips': 0x2,
        'info': 0xb,
        'spin': 0xc,
        'buyBonus': 0x24,
        'heartBeat': 0x62,
        'serverMsg': 0x63
      };
      _0x249d7b.LINE_AWARD_SETTING = [{
        'betRate': 0xa,
        'soundName': "Common_big_win",
        'runScoreTime': 10.5
      }, {
        'betRate': 0x64,
        'soundName': "Common_mega_win",
        'runScoreTime': 0x10
      }, {
        'betRate': 0xfa,
        'soundName': 'Common_super_win',
        'runScoreTime': 0x15
      }];
      _0x249d7b.StringKey = {
        'BBC_FEATURES_LEFT': "BBC_FEATURES_LEFT",
        'BBC_FEATURES_RIGHT': 'BBC_FEATURES_RIGHT'
      };
      _0x249d7b.SERVER_RET_TYPE = {
        'SERVER_SUCCESS': 0x0,
        'SERVER_ERROR_SEATE': 0x31f,
        'SERVER_NOUSE': 0x383,
        'SERVER_MAINTAIN': 0xe7,
        'SERVER_SHUTDOWN': 0xe8,
        'SERVER_NEED_UID': 0xe9,
        'SERVER_NEED_LOGIN': 0xea,
        'SERVER_TOKEN_ERROR': 0xeb
      };
      _0x249d7b.LOGIN_RESULT_TYPE = {
        'LOGIN_SUCCESS': 0x0,
        'LOGIN_FAIL': 0xf1,
        'API_VERIFY_FAIL': 0xd3,
        'API_LOGIN_REPEAT_FAIL': 0x7d2
      };
      _0x249d7b.HEART_BEAT_STATE = {
        'NOTIFY': 0x61,
        'MAINTAIN': 0x62,
        'CLOSE': 0x63
      };
      _0x249d7b.SYMBOL_LINE_VEC = [[_0x20545c(0x0, 0x1), _0x20545c(0x1, 0x1), _0x20545c(0x2, 0x1), _0x20545c(0x3, 0x1), _0x20545c(0x4, 0x1)], [_0x20545c(0x0, 0x0), _0x20545c(0x1, 0x0), _0x20545c(0x2, 0x0), _0x20545c(0x3, 0x0), _0x20545c(0x4, 0x0)], [_0x20545c(0x0, 0x2), _0x20545c(0x1, 0x2), _0x20545c(0x2, 0x2), _0x20545c(0x3, 0x2), _0x20545c(0x4, 0x2)], [_0x20545c(0x0, 0x0), _0x20545c(0x1, 0x1), _0x20545c(0x2, 0x2), _0x20545c(0x3, 0x1), _0x20545c(0x4, 0x0)], [_0x20545c(0x0, 0x2), _0x20545c(0x1, 0x1), _0x20545c(0x2, 0x0), _0x20545c(0x3, 0x1), _0x20545c(0x4, 0x2)], [_0x20545c(0x0, 0x0), _0x20545c(0x1, 0x0), _0x20545c(0x2, 0x1), _0x20545c(0x3, 0x0), _0x20545c(0x4, 0x0)], [_0x20545c(0x0, 0x2), _0x20545c(0x1, 0x2), _0x20545c(0x2, 0x1), _0x20545c(0x3, 0x2), _0x20545c(0x4, 0x2)], [_0x20545c(0x0, 0x1), _0x20545c(0x1, 0x2), _0x20545c(0x2, 0x2), _0x20545c(0x3, 0x2), _0x20545c(0x4, 0x1)], [_0x20545c(0x0, 0x1), _0x20545c(0x1, 0x0), _0x20545c(0x2, 0x0), _0x20545c(0x3, 0x0), _0x20545c(0x4, 0x1)], [_0x20545c(0x0, 0x0), _0x20545c(0x1, 0x1), _0x20545c(0x2, 0x1), _0x20545c(0x3, 0x1), _0x20545c(0x4, 0x0)], [_0x20545c(0x0, 0x2), _0x20545c(0x1, 0x1), _0x20545c(0x2, 0x1), _0x20545c(0x3, 0x1), _0x20545c(0x4, 0x2)], [_0x20545c(0x0, 0x0), _0x20545c(0x1, 0x1), _0x20545c(0x2, 0x0), _0x20545c(0x3, 0x1), _0x20545c(0x4, 0x0)], [_0x20545c(0x0, 0x2), _0x20545c(0x1, 0x1), _0x20545c(0x2, 0x2), _0x20545c(0x3, 0x1), _0x20545c(0x4, 0x2)], [_0x20545c(0x0, 0x1), _0x20545c(0x1, 0x0), _0x20545c(0x2, 0x1), _0x20545c(0x3, 0x0), _0x20545c(0x4, 0x1)], [_0x20545c(0x0, 0x1), _0x20545c(0x1, 0x2), _0x20545c(0x2, 0x1), _0x20545c(0x3, 0x2), _0x20545c(0x4, 0x1)], [_0x20545c(0x0, 0x1), _0x20545c(0x1, 0x1), _0x20545c(0x2, 0x0), _0x20545c(0x3, 0x1), _0x20545c(0x4, 0x1)], [_0x20545c(0x0, 0x1), _0x20545c(0x1, 0x1), _0x20545c(0x2, 0x2), _0x20545c(0x3, 0x1), _0x20545c(0x4, 0x1)], [_0x20545c(0x0, 0x0), _0x20545c(0x1, 0x2), _0x20545c(0x2, 0x0), _0x20545c(0x3, 0x2), _0x20545c(0x4, 0x0)], [_0x20545c(0x0, 0x2), _0x20545c(0x1, 0x0), _0x20545c(0x2, 0x2), _0x20545c(0x3, 0x0), _0x20545c(0x4, 0x2)], [_0x20545c(0x0, 0x1), _0x20545c(0x1, 0x0), _0x20545c(0x2, 0x2), _0x20545c(0x3, 0x0), _0x20545c(0x4, 0x1)], [_0x20545c(0x0, 0x1), _0x20545c(0x1, 0x2), _0x20545c(0x2, 0x0), _0x20545c(0x3, 0x2), _0x20545c(0x4, 0x1)], [_0x20545c(0x0, 0x0), _0x20545c(0x1, 0x0), _0x20545c(0x2, 0x2), _0x20545c(0x3, 0x0), _0x20545c(0x4, 0x0)], [_0x20545c(0x0, 0x2), _0x20545c(0x1, 0x2), _0x20545c(0x2, 0x0), _0x20545c(0x3, 0x2), _0x20545c(0x4, 0x2)], [_0x20545c(0x0, 0x0), _0x20545c(0x1, 0x2), _0x20545c(0x2, 0x2), _0x20545c(0x3, 0x2), _0x20545c(0x4, 0x0)], [_0x20545c(0x0, 0x2), _0x20545c(0x1, 0x0), _0x20545c(0x2, 0x0), _0x20545c(0x3, 0x0), _0x20545c(0x4, 0x2)]];
      _0x249d7b.DelayType = {
        'Normal': 0x0,
        'Get': 0x1,
        'NotGet': 0x2
      };
      _0x249d7b.TimeoutType = {
        'Ignore': 0x0,
        'Handle': 0x1
      };
      _0x249d7b.USE_ITEM_REASON = {
        'NORMAL': 0x0,
        'USING': 0x1
      };
      _0x249d7b.FREE_MUTI_BALL_START_POS = {
        'true': [_0x20545c(-0x13e, 0xa), _0x20545c(-0x9f, 0xa), _0x20545c(0x0, 0xa), _0x20545c(0x9f, 0xa), _0x20545c(0x13e, 0xa)],
        'false': [_0x20545c(-0x100, -0x64), _0x20545c(-0x80, -0x64), _0x20545c(0x0, -0x64), _0x20545c(0x80, -0x64), _0x20545c(0x100, -0x64)]
      };
      _0x249d7b.FLY_FIRE_BALL_POS = {
        'true': _0x20545c(-0x1de, 0x82),
        'false': _0x20545c(-0xb2, 0x91)
      };
      _0x249d7b.BIG_WIN_MASK_SCALE = {
        'true': 0x1,
        'false': 0.633
      };
      _0x249d7b.FeaturesSpinAck = [{
        'plateinfo': {
          'plate': [0x1, 0x7, 0x6, 0x9, 0x5, 0x5, 0x2, 0x2, 0x0, 0x1, 0x4, 0x6, 0x7, 0x5, 0x1],
          'platet': [[0x1, 0x7, 0x6, 0x9, 0x5], [0x5, 0x2, 0x2, 0x0, 0x1], [0x4, 0x6, 0x7, 0x5, 0x1]],
          'eventplate': [0xb, 0xb, 0xb, 0xb, 0xb],
          'awardinfos': [{
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x0,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x1,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x2,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x3,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x4,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x5,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x6,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x7,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x8,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x9,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0xa,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0xb,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0xc,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0xd,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0xe,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0xf,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x10,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x11,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x12,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x13,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x14,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x15,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x16,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x17,
            'haswild': true,
            'odds': 0x1f4
          }, {
            'awardlink': 0x5,
            'awardsymbol': 0xb,
            'lineindex': 0x18,
            'haswild': true,
            'odds': 0x1f4
          }],
          'scatters': 0x0,
          'totalwild': 0x5,
          'totalodds': 0x30d4,
          'mainwin': 0x1f4,
          'fgwin': 0x0,
          'fgpackage': {
            'fgplateinfo': null,
            'totalprize': 0x0,
            'totalfullwildcount': 0x0,
            'times': 0x0,
            'multix': 0x0
          },
          'showindex': '',
          'nowmoney': null
        },
        'totalwin': 0x1f4,
        'acktype': 0x0,
        'trialfinish': false,
        'trialaward': 0x0
      }, {
        'plateinfo': {
          'plate': [0x8, 0x1, 0x6, 0x9, 0x5, 0x3, 0x9, 0x3, 0x1, 0x0, 0x3, 0x3, 0x7, 0x1, 0x9],
          'platet': [[0x8, 0x1, 0x6, 0x9, 0x5], [0x3, 0x9, 0x3, 0x1, 0x0], [0x3, 0x3, 0x7, 0x1, 0x9]],
          'eventplate': [0xc, 0xc, 0xc, 0x11, 0x11],
          'awardinfos': [{
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x3,
            'awardsymbol': 0x3,
            'lineindex': 0x6,
            'haswild': false,
            'odds': 0x19
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x3,
            'awardsymbol': 0x3,
            'lineindex': 0xe,
            'haswild': false,
            'odds': 0x19
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }, {
            'awardlink': 0x0,
            'awardsymbol': 0x0,
            'lineindex': 0x0,
            'haswild': false,
            'odds': 0x0
          }],
          'scatters': 0x3,
          'totalwild': 0x8,
          'totalodds': 0x0,
          'mainwin': 0x2,
          'fgwin': 0x1f0,
          'fgpackage': {
            'fgplateinfo': [{
              'plate': [0x1, 0x4, 0xa, 0xa, 0x9, 0x7, 0x8, 0x0, 0x1, 0x5, 0x6, 0x9, 0x8, 0x7, 0x1],
              'platet': [[0x1, 0x4, 0xa, 0xa, 0x9], [0x7, 0x8, 0x0, 0x1, 0x5], [0x6, 0x9, 0x8, 0x7, 0x1]],
              'eventplate': [0x11, 0x11, 0x11, 0x11, 0x11],
              'awardinfos': [{
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }],
              'fullwildcount': 0x0,
              'awardprize': 0x0,
              'showindex': '',
              'nowmoney': null
            }, {
              'plate': [0x8, 0xb, 0x7, 0xb, 0x4, 0x4, 0x7, 0x4, 0x7, 0x4, 0x6, 0x4, 0xa, 0x4, 0x7],
              'platet': [[0x8, 0xb, 0x7, 0xb, 0x4], [0x4, 0x7, 0x4, 0x7, 0x4], [0x6, 0x4, 0xa, 0x4, 0x7]],
              'eventplate': [0x11, 0xb, 0x11, 0x11, 0x11],
              'awardinfos': [{
                'awardlink': 0x3,
                'awardsymbol': 0x4,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x19
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0xd,
                'haswild': false,
                'odds': 0x64
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0xe,
                'haswild': false,
                'odds': 0xa
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }],
              'fullwildcount': 0x1,
              'awardprize': 0x9,
              'showindex': '',
              'nowmoney': null
            }, {
              'plate': [0x5, 0x1, 0xa, 0x6, 0x6, 0x0, 0x5, 0x0, 0x2, 0x3, 0x9, 0x9, 0x8, 0x2, 0xa],
              'platet': [[0x5, 0x1, 0xa, 0x6, 0x6], [0x0, 0x5, 0x0, 0x2, 0x3], [0x9, 0x9, 0x8, 0x2, 0xa]],
              'eventplate': [0xb, 0x11, 0x11, 0x11, 0xb],
              'awardinfos': [{
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }],
              'fullwildcount': 0x2,
              'awardprize': 0x0,
              'showindex': '',
              'nowmoney': null
            }, {
              'plate': [0xa, 0x2, 0x6, 0x1, 0xa, 0x5, 0xa, 0x3, 0x9, 0x0, 0x0, 0x3, 0x7, 0x3, 0x8],
              'platet': [[0xa, 0x2, 0x6, 0x1, 0xa], [0x5, 0xa, 0x3, 0x9, 0x0], [0x0, 0x3, 0x7, 0x3, 0x8]],
              'eventplate': [0x11, 0x11, 0x11, 0xb, 0x11],
              'awardinfos': [{
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }],
              'fullwildcount': 0x1,
              'awardprize': 0x0,
              'showindex': '',
              'nowmoney': null
            }, {
              'plate': [0x9, 0x3, 0x4, 0x7, 0x9, 0x5, 0x3, 0x5, 0x4, 0x1, 0x1, 0x8, 0x8, 0x4, 0x5],
              'platet': [[0x9, 0x3, 0x4, 0x7, 0x9], [0x5, 0x3, 0x5, 0x4, 0x1], [0x1, 0x8, 0x8, 0x4, 0x5]],
              'eventplate': [0x11, 0x11, 0x11, 0x11, 0x11],
              'awardinfos': [{
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }],
              'fullwildcount': 0x0,
              'awardprize': 0x0,
              'showindex': '',
              'nowmoney': null
            }, {
              'plate': [0x4, 0x5, 0x4, 0x5, 0x1, 0x4, 0xa, 0x4, 0x9, 0x7, 0x7, 0x1, 0x7, 0x1, 0x6],
              'platet': [[0x4, 0x5, 0x4, 0x5, 0x1], [0x4, 0xa, 0x4, 0x9, 0x7], [0x7, 0x1, 0x7, 0x1, 0x6]],
              'eventplate': [0x11, 0xb, 0x11, 0xb, 0xb],
              'awardinfos': [{
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x64
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0x1,
                'haswild': false,
                'odds': 0x64
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x7,
                'lineindex': 0x2,
                'haswild': false,
                'odds': 0x32
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0x5,
                'haswild': false,
                'odds': 0x64
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0x8,
                'haswild': false,
                'odds': 0x64
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0x9,
                'haswild': false,
                'odds': 0x64
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0xb,
                'haswild': false,
                'odds': 0x64
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x7,
                'lineindex': 0xc,
                'haswild': false,
                'odds': 0x32
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0xd,
                'haswild': false,
                'odds': 0x64
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0xe,
                'haswild': false,
                'odds': 0x64
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0xf,
                'haswild': false,
                'odds': 0x64
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0x11,
                'haswild': false,
                'odds': 0x64
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x7,
                'lineindex': 0x12,
                'haswild': false,
                'odds': 0x32
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x5,
                'awardsymbol': 0x4,
                'lineindex': 0x14,
                'haswild': true,
                'odds': 0x64
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }],
              'fullwildcount': 0x3,
              'awardprize': 0x32,
              'showindex': '',
              'nowmoney': null
            }, {
              'plate': [0x2, 0x6, 0x1, 0x9, 0x6, 0x7, 0x4, 0x5, 0x1, 0x3, 0x1, 0x8, 0x4, 0x1, 0x7],
              'platet': [[0x2, 0x6, 0x1, 0x9, 0x6], [0x7, 0x4, 0x5, 0x1, 0x3], [0x1, 0x8, 0x4, 0x1, 0x7]],
              'eventplate': [0xb, 0x11, 0x11, 0x11, 0x11],
              'awardinfos': [{
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x3,
                'awardsymbol': 0x4,
                'lineindex': 0x3,
                'haswild': false,
                'odds': 0x19
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x3,
                'awardsymbol': 0x4,
                'lineindex': 0xc,
                'haswild': false,
                'odds': 0x19
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x3,
                'awardsymbol': 0x4,
                'lineindex': 0x10,
                'haswild': false,
                'odds': 0x19
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }],
              'fullwildcount': 0x1,
              'awardprize': 0x3,
              'showindex': '',
              'nowmoney': null
            }, {
              'plate': [0x6, 0x7, 0x5, 0x3, 0x2, 0x4, 0x4, 0x8, 0x6, 0x6, 0x5, 0x4, 0x3, 0x7, 0x4],
              'platet': [[0x6, 0x7, 0x5, 0x3, 0x2], [0x4, 0x4, 0x8, 0x6, 0x6], [0x5, 0x4, 0x3, 0x7, 0x4]],
              'eventplate': [0x11, 0x11, 0x11, 0x11, 0x11],
              'awardinfos': [{
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }],
              'fullwildcount': 0x0,
              'awardprize': 0x0,
              'showindex': '',
              'nowmoney': null
            }, {
              'plate': [0xa, 0x1, 0x5, 0x5, 0x3, 0x0, 0x7, 0x0, 0xa, 0x3, 0x8, 0x2, 0x9, 0x1, 0x9],
              'platet': [[0xa, 0x1, 0x5, 0x5, 0x3], [0x0, 0x7, 0x0, 0xa, 0x3], [0x8, 0x2, 0x9, 0x1, 0x9]],
              'eventplate': [0x11, 0x11, 0x11, 0x11, 0x11],
              'awardinfos': [{
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }, {
                'awardlink': 0x0,
                'awardsymbol': 0x0,
                'lineindex': 0x0,
                'haswild': false,
                'odds': 0x0
              }],
              'fullwildcount': 0x0,
              'awardprize': 0x0,
              'showindex': '',
              'nowmoney': null
            }],
            'totalprize': 0x3e,
            'totalfullwildcount': 0x8,
            'times': 0x9,
            'multix': 0x0
          },
          'showindex': '',
          'nowmoney': null
        },
        'totalwin': 0x1f2,
        'acktype': 0x0,
        'trialfinish': false,
        'trialaward': 0x0
      }];
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "32bb60YNPlNeKLLmdUFZWfa", "SlotReels", undefined);
      var _0x24c129 = _0x2db653.ccclass;
      var _0x4af048 = _0x2db653.property;
      var _0x5c1d15 = [[[0x5, 0x7, 0x8], [0x1, 0x8, 0x2], [0x2, 0x1, 0x7], [0x6, 0x5, 0x8], [0xb, 0x9, 0x8]], [[0xa, 0x6, 0x6], [0x9, 0x2, 0x6], [0x4, 0x7, 0x4], [0x7, 0x7, 0xa], [0x1, 0x5, 0x0]], [[0x9, 0x7, 0x5], [0x1, 0x4, 0x2], [0x5, 0x6, 0x5], [0xb, 0x7, 0x2], [0x7, 0x1, 0x2]], [[0x0, 0x5, 0x9], [0x8, 0x9, 0x8], [0x5, 0x8, 0xa], [0x3, 0x1, 0x5], [0x8, 0x4, 0x5]]];
      _0x4379c1 = _0x4af048(_0x5f4ab7);
      _0x55b60c = function (_0x5582d2) {
        function _0x2d0acf() {
          var _0x57812f;
          var _0x475f5d = arguments.length;
          var _0x669560 = new Array(_0x475f5d);
          for (var _0x4f655d = 0x0; _0x4f655d < _0x475f5d; _0x4f655d++) {
            _0x669560[_0x4f655d] = arguments[_0x4f655d];
          }
          _0x57812f = _0x5582d2.call.apply(_0x5582d2, [this].concat(_0x669560)) || this;
          _0x3837b4(_0x57812f, "m_symbolSpriteFrames", _0xa2cb6c, _0x406265(_0x57812f));
          _0x57812f.m_symbolSize = null;
          _0x57812f.m_viewSize = null;
          _0x57812f.m_gameView = null;
          _0x57812f.m_reelPositionOffset = [_0x20545c(0x0, 0x0), _0x20545c(0x0, 0x0), _0x20545c(0x0, 0x0), _0x20545c(0x0, 0x0), _0x20545c(0x0, 0x0)];
          _0x57812f.m_symbol = new Array();
          _0x57812f.m_plateInfo = [[0x1, 0x1, 0x1], [0x1, 0x1, 0x1], [0x1, 0x1, 0x1], [0x1, 0x1, 0x1], [0x1, 0x1, 0x1]];
          _0x57812f.m_upperSymbol = new Array();
          _0x57812f.m_lowerSymbol = new Array();
          _0x57812f.m_reelStopTime = new Array();
          _0x57812f.m_reelPreTime = new Array();
          _0x57812f.m_isChangeSymbol = new Array();
          _0x57812f.m_isChangeToFinalSymbol = new Array();
          _0x57812f.m_time = 0x0;
          _0x57812f.m_stopTime = 0x0;
          _0x57812f.m_riseTime = 0x0;
          _0x57812f.m_spinBufferTime01 = 0.05;
          _0x57812f.m_spinBufferTime02 = 0.08;
          _0x57812f.m_spinSpeed = 0.21;
          _0x57812f.m_upLength = 0x14;
          _0x57812f.m_downLength = 0x1e;
          _0x57812f.m_numberOfSymbol = 0x0;
          _0x57812f.m_timesOfBaseSpin = 0x1;
          _0x57812f.m_spinIntervalTimes = 0x2;
          _0x57812f.m_spinDelayTime = 0x0;
          _0x57812f.m_isStop = false;
          _0x57812f.m_isClickStopBtn = false;
          _0x57812f.m_playStopSound = null;
          _0x57812f.m_isPlaySound = [false, false, false, false, false];
          _0x57812f.m_reelSoundId = null;
          _0x57812f.m_lockColumn = new Array();
          _0x57812f.m_randomSymbol = new Array();
          _0x57812f.m_isTest = false;
          _0x57812f.m_isCheckFinal = false;
          _0x57812f.m_errorMsgCount = false;
          _0x57812f.m_beginPlateIndex = -0x1;
          _0x57812f.m_isCheckPlateSymbols = false;
          return _0x57812f;
        }
        _0x59a013(_0x2d0acf, _0x5582d2);
        var _0x437c13 = _0x2d0acf.prototype;
        _0x437c13.onLoad = function () {
          var _0x4bd197 = this;
          var _0x366cc3 = function () {
            var _0x2c7319 = _0x34b760.TempoSetting.TripleCoinTreasure;
            _0x4bd197.m_riseTime = _0x2c7319.BASE.RISE_TIME;
            _0x4bd197.m_upLength = _0x2c7319.BASE.UP_LENGTH;
            _0x4bd197.m_spinBufferTime01 = _0x2c7319.BASE.SPIN_BUFFER_TIME_01;
            _0x4bd197.m_spinBufferTime02 = _0x2c7319.BASE.SPIN_BUFFER_TIME_02;
            _0x4bd197.m_downLength = _0x2c7319.BASE.DOWN_LENGTH;
            _0x4bd197.m_spinSpeed = _0x2c7319.BASE.SPIN_SPEED;
            _0x4bd197.m_timesOfBaseSpin = _0x2c7319.BASE.TIMES_OF_BASE_SPIN;
            _0x4bd197.m_spinIntervalTimes = _0x2c7319.BASE.SPIN_INTERVAL_TIMES;
            _0x4bd197.m_spinDelayTime = _0x2c7319.BASE.SPIN_DELAY_TIME;
          };
          _0x366cc3();
          _0x34b760.AddCb(_0x366cc3);
          this.m_viewSize = this.node.getComponent(_0x4d349f).contentSize;
          this.m_symbolSize = new _0x7c2fb4(this.m_viewSize.width / 0x5, this.m_viewSize.height / 0x3);
          var _0xe03c0 = Math.floor(Math.random() * _0x5c1d15.length);
          this.m_beginPlateIndex = _0xe03c0;
          for (var _0x113309 = 0x0; _0x113309 < 0x5; _0x113309++) {
            this.m_lockColumn.push(false);
            this.m_reelStopTime.push(null);
            this.m_reelPreTime.push(null);
            var _0x1d4046 = new Array();
            for (var _0x4a9168 = 0x0; _0x4a9168 < 0x3; _0x4a9168++) {
              var _0x1115ad = new _0xe077c7();
              _0x1115ad.addComponent(_0x2b691f);
              this.node.addChild(_0x1115ad);
              _0x1115ad.name = this.m_numberOfSymbol.toString();
              this.m_numberOfSymbol += 0x1;
              this.m_isChangeToFinalSymbol.push(false);
              _0x1115ad.getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[_0x5c1d15[_0xe03c0][_0x113309][_0x4a9168]];
              _0x1d4046.push(_0x1115ad);
              var _0x2d6de3 = this.m_symbolSize.width * (_0x113309 + 0.5) + this.m_reelPositionOffset[_0x113309].x - this.m_viewSize.width / 0x2;
              var _0x14e203 = this.m_symbolSize.height * (0x2 - _0x4a9168 + 0.5) + this.m_reelPositionOffset[_0x113309].y - this.m_viewSize.height / 0x2;
              _0x1115ad.setPosition(_0x20545c(_0x2d6de3, _0x14e203));
            }
            this.m_symbol.push(_0x1d4046);
          }
          for (var _0xb94db7 = 0x0; _0xb94db7 < 0x5; _0xb94db7++) {
            var _0x266497 = this.m_symbolSize.width * (_0xb94db7 + 0.5) + this.m_reelPositionOffset[_0xb94db7].x - this.m_viewSize.width / 0x2;
            var _0x21534c = this.m_symbolSize.height * 3.5 + this.m_reelPositionOffset[_0xb94db7].y - this.m_viewSize.height / 0x2;
            var _0x5afb8b = Math.floor(Math.random() * 11);
            var _0x2f6ea4 = new _0xe077c7();
            _0x2f6ea4.addComponent(_0x2b691f);
            this.node.addChild(_0x2f6ea4);
            _0x2f6ea4.name = (this.m_numberOfSymbol + _0xb94db7).toString();
            _0x2f6ea4.getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[_0x5afb8b];
            _0x2f6ea4.setPosition(_0x20545c(_0x266497, _0x21534c));
            this.m_upperSymbol.push(_0x2f6ea4);
            _0x21534c = -0.5 * this.m_symbolSize.height + this.m_reelPositionOffset[_0xb94db7].y - this.m_viewSize.height / 0x2;
            _0x5afb8b = Math.floor(Math.random() * 11);
            var _0x36321f = new _0xe077c7();
            _0x36321f.addComponent(_0x2b691f);
            this.node.addChild(_0x36321f);
            _0x36321f.name = (-(_0xb94db7 + 0x1)).toString();
            _0x36321f.getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[_0x5afb8b];
            _0x36321f.setPosition(_0x20545c(_0x266497, _0x21534c));
            this.m_lowerSymbol.push(_0x36321f);
          }
        };
        _0x437c13.Init = function (_0xaf3db7) {
          this.m_gameView = _0xaf3db7;
          this.m_gameView.OldRealPlate = _0x5c1d15[this.m_beginPlateIndex];
        };
        _0x437c13.start = function () {};
        _0x437c13.StartSpin = function (_0x339ec6) {
          if (undefined === _0x339ec6) {
            _0x339ec6 = true;
          }
          this.m_isTest = true;
          this.m_isCheckFinal = false;
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_errorMsgCount = false;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isPlaySound = [false, false, false, false, false];
          if (_0x339ec6) {
            for (var _0x1bf0a7 = 0x0; _0x1bf0a7 < 0x5; _0x1bf0a7++) {
              this.m_lockColumn[_0x1bf0a7] = false;
            }
          }
          for (var _0x301d4e = 0x0; _0x301d4e < 0x5; _0x301d4e++) {
            this.m_reelStopTime[_0x301d4e] = null;
            this.m_reelPreTime[_0x301d4e] = null;
          }
          for (var _0x190385 = 0x0; _0x190385 < 0x5; _0x190385++) {
            if (!this.m_lockColumn[_0x190385]) {
              for (var _0x392dce = 0x0; _0x392dce < 0x3; _0x392dce++) {
                this.m_symbol[_0x190385][_0x392dce].active = true;
              }
            }
          }
          this.m_upperSymbol.forEach(function (_0x5b1471) {
            return _0x5b1471.active = true;
          });
          this.m_lowerSymbol.forEach(function (_0x425229) {
            return _0x425229.active = true;
          });
          for (var _0x133178 = 0x0; _0x133178 < this.m_isChangeToFinalSymbol.length; _0x133178++) {
            this.m_isChangeToFinalSymbol[_0x133178] = false;
          }
          this.m_isCheckPlateSymbols = false;
        };
        _0x437c13.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          if (0x0 != this.m_stopTime) {
            var _0x4e7ed3 = Math.floor(this.m_time / this.m_spinSpeed);
            var _0x2c705f = _0x34b760.TempoSetting.TripleCoinTreasure.SPEED_UP_STOP_TIME(0x0, this.m_time);
            if (_0x2c705f < this.m_stopTime) {
              this.m_stopTime = _0x7eb85f.strip(_0x2c705f);
            }
            var _0x228125 = (_0x4e7ed3 + 0x1) * this.m_spinSpeed;
            for (var _0x4bdf5c = 0x0; _0x4bdf5c < 0x5; _0x4bdf5c++) {
              if (this.m_reelStopTime[_0x4bdf5c] > _0x228125) {
                this.m_reelStopTime[_0x4bdf5c] = _0x7eb85f.strip(_0x228125);
                this.m_reelPreTime[_0x4bdf5c] = _0x4e7ed3 * this.m_spinSpeed;
              }
            }
          }
        };
        _0x437c13.Spin = function (_0x3574dd) {
          this.m_time = _0x7eb85f.strip(this.m_time + _0x3574dd);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple(_0x3574dd);
            if (this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime && this.IsAllSymbolChangeToRight()) {
              this.m_isStop = true;
              this.m_upperSymbol.forEach(function (_0x5b2752) {
                return _0x5b2752.active = false;
              });
              this.m_lowerSymbol.forEach(function (_0x2c18e1) {
                return _0x2c18e1.active = false;
              });
              if (this.m_reelSoundId) {
                _0x151d0c.Stop(this.m_reelSoundId);
                this.m_reelSoundId = null;
              }
              this.CheckSpinStopPlate();
            }
          }
        };
        _0x437c13.Spin_RealSpinMultiple = function (_0x5aa893) {
          for (var _0x10c6e0 = 0x0; _0x10c6e0 < 0x5; _0x10c6e0++) {
            var _0x578a0d = this.m_spinSpeed;
            var _0x268de7 = this.m_time;
            var _0x42ccc9 = this.m_reelStopTime[_0x10c6e0];
            var _0x3d19be = this.m_reelPreTime[_0x10c6e0];
            var _0x3d218e = this.m_riseTime * 0x5;
            for (var _0x43eac6 = 0x0; _0x43eac6 < 0x3; _0x43eac6++) {
              var _0x4665e0 = this.m_symbolSize.width * (_0x10c6e0 + 0.5) + this.m_reelPositionOffset[_0x10c6e0].x - this.m_viewSize.width / 0x2;
              var _0x19db84 = this.m_symbolSize.height * (2 - _0x43eac6 + 0.5) + this.m_reelPositionOffset[_0x10c6e0].y - this.m_viewSize.height / 0x2;
              if (_0x268de7 < this.m_riseTime * _0x10c6e0) {
                ;
              } else {
                if (_0x268de7 < this.m_riseTime * (_0x10c6e0 + 0x1)) {
                  var _0xe22fa5 = (_0x268de7 - this.m_riseTime * _0x10c6e0) / this.m_riseTime * this.m_upLength;
                  this.m_symbol[_0x10c6e0][_0x43eac6].setPosition(_0x20545c(_0x4665e0, _0x19db84 + _0xe22fa5));
                } else {
                  if (_0x268de7 < _0x3d218e) {
                    this.m_symbol[_0x10c6e0][_0x43eac6].setPosition(_0x20545c(_0x4665e0, _0x19db84 + this.m_upLength));
                  } else {
                    if (null == _0x42ccc9 || _0x268de7 < _0x3d19be + _0x3d218e) {
                      var _0x12b73f = (_0x268de7 - _0x3d218e) % _0x578a0d / _0x578a0d * this.m_symbolSize.height * 5;
                      var _0x4825f6 = this.GetMovelength(_0x12b73f, this.m_symbolSize.height * (0x3 - _0x43eac6 + 0.5), this.m_symbolSize.height * 5, _0x10c6e0, this.m_symbol[_0x10c6e0][_0x43eac6].name, this.m_symbol[_0x10c6e0][_0x43eac6], false);
                      this.m_symbol[_0x10c6e0][_0x43eac6].setPosition(_0x20545c(_0x4665e0, _0x19db84 - _0x4825f6));
                    } else {
                      if (_0x268de7 < _0x42ccc9 + _0x3d218e) {
                        var _0x264325 = (_0x268de7 - _0x3d218e) % _0x578a0d / _0x578a0d * this.m_symbolSize.height * 5;
                        var _0x5a01e9 = this.GetMovelength(_0x264325, this.m_symbolSize.height * (0x3 - _0x43eac6 + 0.5), this.m_symbolSize.height * 5, _0x10c6e0, this.m_symbol[_0x10c6e0][_0x43eac6].name, this.m_symbol[_0x10c6e0][_0x43eac6], false);
                        this.m_symbol[_0x10c6e0][_0x43eac6].setPosition(_0x20545c(_0x4665e0, _0x19db84 - _0x5a01e9));
                      } else {
                        if (_0x268de7 < _0x42ccc9 + _0x3d218e + this.m_spinBufferTime01) {
                          this.CheckPlayStopSound(_0x10c6e0, _0x43eac6);
                          var _0x538716 = (_0x268de7 - _0x42ccc9 - _0x3d218e) / this.m_spinBufferTime01 * this.m_downLength;
                          this.m_symbol[_0x10c6e0][_0x43eac6].setPosition(_0x20545c(_0x4665e0, _0x19db84 - _0x538716));
                          this.CheckChangeToFinalSymbol(_0x10c6e0, this.m_symbol[_0x10c6e0][_0x43eac6].name, this.m_symbol[_0x10c6e0][_0x43eac6], true);
                        } else {
                          if (_0x268de7 < _0x42ccc9 + _0x3d218e + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                            this.CheckPlayStopSound(_0x10c6e0, _0x43eac6);
                            var _0x5dcfb0 = (_0x268de7 - _0x42ccc9 - _0x3d218e - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                            this.m_symbol[_0x10c6e0][_0x43eac6].setPosition(_0x20545c(_0x4665e0, _0x19db84 - this.m_downLength + _0x5dcfb0));
                            this.CheckChangeToFinalSymbol(_0x10c6e0, this.m_symbol[_0x10c6e0][_0x43eac6].name, this.m_symbol[_0x10c6e0][_0x43eac6], true);
                          } else {
                            this.CheckChangeToFinalSymbol(_0x10c6e0, this.m_symbol[_0x10c6e0][_0x43eac6].name, this.m_symbol[_0x10c6e0][_0x43eac6], true);
                            this.CheckPlayStopSound(_0x10c6e0, _0x43eac6);
                            this.m_symbol[_0x10c6e0][_0x43eac6].setPosition(_0x20545c(_0x4665e0, _0x19db84));
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            var _0x491e01 = this.m_symbolSize.width * (_0x10c6e0 + 0.5) + this.m_reelPositionOffset[_0x10c6e0].x - this.m_viewSize.width / 0x2;
            var _0x480b06 = this.m_symbolSize.height * 3.5 + this.m_reelPositionOffset[_0x10c6e0].y - this.m_viewSize.height / 0x2;
            if (_0x268de7 < this.m_riseTime * _0x10c6e0) {
              ;
            } else {
              if (_0x268de7 < this.m_riseTime * (_0x10c6e0 + 0x1)) {
                var _0x1cf904 = (_0x268de7 - this.m_riseTime * _0x10c6e0) / this.m_riseTime * this.m_upLength;
                this.m_upperSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06 + _0x1cf904));
              } else {
                if (_0x268de7 < _0x3d218e) {
                  this.m_upperSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06 + this.m_upLength));
                } else {
                  if (null == _0x42ccc9 || _0x268de7 < _0x42ccc9 + _0x3d218e) {
                    var _0x42d12d = (_0x268de7 - _0x3d218e) % _0x578a0d / _0x578a0d * this.m_symbolSize.height * 5;
                    var _0x5458fb = this.GetMovelength(_0x42d12d, this.m_symbolSize.height * 4, this.m_symbolSize.height * 5, _0x10c6e0, this.m_numberOfSymbol + _0x10c6e0, this.m_upperSymbol[_0x10c6e0], false);
                    this.m_upperSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06 - _0x5458fb));
                  } else {
                    if (_0x268de7 < _0x42ccc9 + _0x3d218e + this.m_spinBufferTime01) {
                      var _0x38f8bc = (_0x268de7 - _0x42ccc9 - _0x3d218e) / this.m_spinBufferTime01 * this.m_downLength;
                      this.m_upperSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06 - _0x38f8bc));
                      this.CheckChangeToFinalSymbol(_0x10c6e0, this.m_upperSymbol[_0x10c6e0].name, this.m_upperSymbol[_0x10c6e0], true);
                    } else {
                      if (_0x268de7 < _0x42ccc9 + _0x3d218e + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                        var _0x1d2daf = (_0x268de7 - _0x42ccc9 - _0x3d218e - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_upperSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06 - this.m_downLength + _0x1d2daf));
                        this.CheckChangeToFinalSymbol(_0x10c6e0, this.m_upperSymbol[_0x10c6e0].name, this.m_upperSymbol[_0x10c6e0], true);
                      } else {
                        this.CheckChangeToFinalSymbol(_0x10c6e0, this.m_numberOfSymbol + _0x10c6e0, this.m_upperSymbol[_0x10c6e0]);
                        this.m_upperSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06));
                      }
                    }
                  }
                }
              }
            }
            _0x491e01 = this.m_symbolSize.width * (_0x10c6e0 + 0.5) + this.m_reelPositionOffset[_0x10c6e0].x - this.m_viewSize.width / 0x2;
            _0x480b06 = -0.5 * this.m_symbolSize.height + this.m_reelPositionOffset[_0x10c6e0].y - this.m_viewSize.height / 0x2;
            if (_0x268de7 < this.m_riseTime * _0x10c6e0) {
              ;
            } else {
              if (_0x268de7 < this.m_riseTime * (_0x10c6e0 + 0x1)) {
                var _0x561263 = (_0x268de7 - this.m_riseTime * _0x10c6e0) / this.m_riseTime * this.m_upLength;
                this.m_lowerSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06 + _0x561263));
              } else {
                if (_0x268de7 < _0x3d218e) {
                  this.m_lowerSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06 + this.m_upLength));
                } else {
                  if (null == _0x42ccc9 || _0x268de7 < _0x42ccc9 + _0x3d218e) {
                    var _0x535e93 = (_0x268de7 - _0x3d218e) % _0x578a0d / _0x578a0d * this.m_symbolSize.height * 5;
                    var _0xce0b82 = this.GetMovelength(_0x535e93, 0.5 * this.m_symbolSize.height, this.m_symbolSize.height * 5, _0x10c6e0, -(_0x10c6e0 + 0x1), this.m_lowerSymbol[_0x10c6e0], false);
                    this.m_lowerSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06 - _0xce0b82));
                  } else {
                    if (_0x268de7 < _0x42ccc9 + _0x3d218e + this.m_spinBufferTime01) {
                      var _0x3d3141 = (_0x268de7 - _0x42ccc9 - _0x3d218e) / this.m_spinBufferTime01 * this.m_downLength;
                      this.m_lowerSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06 - _0x3d3141));
                      this.CheckChangeToFinalSymbol(_0x10c6e0, this.m_lowerSymbol[_0x10c6e0].name, this.m_lowerSymbol[_0x10c6e0], true);
                    } else {
                      if (_0x268de7 < _0x42ccc9 + _0x3d218e + this.m_spinBufferTime01 + this.m_spinBufferTime02) {
                        var _0x9a5eb7 = (_0x268de7 - _0x42ccc9 - _0x3d218e - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_lowerSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06 - this.m_downLength + _0x9a5eb7));
                        this.CheckChangeToFinalSymbol(_0x10c6e0, this.m_lowerSymbol[_0x10c6e0].name, this.m_lowerSymbol[_0x10c6e0], true);
                      } else {
                        this.CheckChangeToFinalSymbol(_0x10c6e0, -(_0x10c6e0 + 0x1), this.m_lowerSymbol[_0x10c6e0]);
                        this.m_lowerSymbol[_0x10c6e0].setPosition(_0x20545c(_0x491e01, _0x480b06));
                      }
                    }
                  }
                }
              }
            }
          }
        };
        _0x437c13.GetMovelength = function (_0x26aa5b, _0x414258, _0x3b1cc5, _0x58d5f7, _0x124e71, _0x49752b, _0x20e7d9) {
          if (_0x26aa5b >= _0x414258) {
            _0x26aa5b -= _0x3b1cc5;
            if (this.m_isChangeSymbol[_0x124e71] && !this.m_isClickStopBtn) {
              this.m_isChangeSymbol[_0x124e71] = false;
              this.ChangeSymbol(_0x58d5f7, _0x49752b, _0x20e7d9);
            }
          } else {
            this.m_isChangeSymbol[_0x124e71] = true;
          }
          return _0x26aa5b;
        };
        _0x437c13.ChangeSymbol = function (_0x542d0a, _0x5f2ac9, _0x344d32) {
          var _0x38ec16;
          var _0x51cf63;
          var _0x4cc7dd = _0x5f2ac9.name;
          var _0x184dd5 = this.m_reelStopTime[_0x542d0a];
          var _0x59e3a9 = 0x0;
          var _0x429dd6 = _0x4cc7dd >= 0x0 ? _0x4cc7dd % 0x3 : (Math.abs(_0x4cc7dd) - 0x1) % 0x3;
          var _0x1fbc21 = this.m_riseTime * 5;
          if (_0x184dd5) {
            _0x59e3a9 = _0x184dd5 / this.m_spinSpeed;
          }
          if (_0x184dd5 && this.m_time - _0x1fbc21 > (_0x59e3a9 - 0x1) * this.m_spinSpeed || _0x344d32) {
            if (_0x4cc7dd >= 0x0 && _0x4cc7dd < this.m_numberOfSymbol) {
              var _0x2f0abf = _0x5f2ac9.getComponent(_0x2b691f);
              _0x51cf63 = this.m_plateInfo[_0x542d0a][_0x429dd6];
              var _0x58ef9e = this.m_symbolSpriteFrames[_0x51cf63];
              _0x2f0abf.spriteFrame = _0x58ef9e;
            } else {
              _0x38ec16 = Math.floor(Math.random() * 11);
              _0x5f2ac9.getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[_0x38ec16];
            }
          } else {
            _0x38ec16 = Math.floor(Math.random() * 11);
            _0x5f2ac9.getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[_0x38ec16];
          }
        };
        _0x437c13.CheckChangeToFinalSymbol = function (_0x150c5b, _0x4eb078, _0x5ddcb8, _0x2c2162) {
          if (undefined === _0x2c2162) {
            _0x2c2162 = false;
          }
          if (!this.m_isChangeToFinalSymbol[_0x4eb078]) {
            this.m_isChangeToFinalSymbol[_0x4eb078] = true;
            this.ChangeSymbol(_0x150c5b, _0x5ddcb8, _0x2c2162);
          }
        };
        _0x437c13.IsAllSymbolChangeToRight = function () {
          var _0x31bb43 = true;
          if (!this.m_errorMsgCount) {
            for (var _0x348bfa = 0x0; _0x348bfa < 0xf; _0x348bfa++) {
              if (!this.m_isChangeToFinalSymbol[_0x348bfa]) {
                var _0x59577a = 'a';
                for (var _0x504ee3 = 0x0; _0x504ee3 < 0x5; _0x504ee3++) {
                  for (var _0x3fb095 = 0x0; _0x3fb095 < 0x3; _0x3fb095++) {
                    _0x59577a = _0x59577a + this.m_symbol[_0x504ee3][_0x3fb095].getComponent(_0x2b691f).spriteFrame.name + ',';
                  }
                }
                var _0x1a0bc8 = "this.m_reelStopTime";
                for (var _0x1cd137 = 0x0; _0x1cd137 < this.m_reelStopTime.length; _0x1cd137++) {
                  _0x1a0bc8 = _0x1a0bc8 + this.m_reelStopTime[_0x1cd137] + ',';
                }
                var _0x135828 = "this.m_reelPreTime";
                for (var _0x3ab32b = 0x0; _0x3ab32b < this.m_reelPreTime.length; _0x3ab32b++) {
                  _0x135828 = _0x135828 + this.m_reelPreTime[_0x3ab32b] + ',';
                }
                this.m_time;
                this.m_stopTime;
                this.m_errorMsgCount = true;
                _0x31bb43 = false;
                break;
              }
            }
            if (_0x31bb43) {
              this.m_isCheckFinal = true;
            }
          }
          return _0x31bb43;
        };
        _0x437c13.SetPlateInfo = function (_0x2995f8) {
          this.m_plateInfo = _0x2995f8;
          var _0x5ab6d5 = 0x5 * this.m_riseTime;
          var _0x5e8fad = Math.ceil((this.m_time - _0x5ab6d5) / this.m_spinSpeed);
          var _0x7eb1bb = 0x0;
          if (this.m_isClickStopBtn) {
            this.m_stopTime = _0x7eb85f.strip(this.m_spinSpeed * _0x5e8fad + this.m_spinDelayTime + _0x5ab6d5);
            for (var _0x45a121 = 0x0; _0x45a121 < 0x5; _0x45a121++) {
              this.m_reelStopTime[_0x45a121] = _0x7eb85f.strip(this.m_spinSpeed * _0x5e8fad);
              this.m_reelPreTime[_0x45a121] = _0x7eb85f.strip(this.m_spinSpeed * (_0x5e8fad - 0x1));
            }
          } else {
            this.m_stopTime = _0x7eb85f.strip(this.m_spinSpeed * (_0x5e8fad + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * 4 + +this.m_spinDelayTime + _0x5ab6d5 + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var _0x33c5db = 0x0; _0x33c5db < 0x5; _0x33c5db++) {
              if (this.m_lockColumn[_0x33c5db]) {
                _0x7eb1bb += 0x1;
              }
              this.m_reelStopTime[_0x33c5db] = _0x7eb85f.strip(this.m_spinSpeed * (_0x5e8fad + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0x33c5db - _0x7eb1bb));
              this.m_reelPreTime[_0x33c5db] = _0x7eb85f.strip(this.m_spinSpeed * (_0x5e8fad + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0x33c5db - _0x7eb1bb - 0x1));
            }
          }
        };
        _0x437c13.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x437c13.GetSymbolByIndex = function (_0x4b7dc1) {
          return this.m_symbol[_0x4b7dc1.x][_0x4b7dc1.y];
        };
        _0x437c13.SetPlayStopSoundFunction = function (_0x4799bb) {
          this.m_playStopSound = _0x4799bb;
        };
        _0x437c13.CheckPlayStopSound = function (_0x386fd2, _0x522480) {
          if (this.m_playStopSound && !this.m_isPlaySound[_0x386fd2] && 0x0 == _0x522480) {
            this.m_isPlaySound[_0x386fd2] = true;
            this.m_playStopSound(_0x386fd2);
          }
        };
        _0x437c13.ResetSymbolActive = function () {
          for (var _0x2cb385 = 0x0; _0x2cb385 < 0x5; _0x2cb385++) {
            for (var _0x4b3ed2 = 0x0; _0x4b3ed2 < 0x3; _0x4b3ed2++) {
              this.m_symbol[_0x2cb385][_0x4b3ed2].active = true;
            }
          }
        };
        _0x437c13.SetPlateSymbol = function (_0x398f10) {
          if (0x0 == _0x398f10.length) {
            for (var _0x2abf48 = 0x0; _0x2abf48 < 0x5; _0x2abf48++) {
              this.m_lockColumn[_0x2abf48] = false;
              this.m_reelStopTime[_0x2abf48] = null;
              this.m_reelPreTime[_0x2abf48] = null;
              for (var _0x18b57f = 0x0; _0x18b57f < 0x3; _0x18b57f++) {
                var _0x30fe3e = Math.floor(Math.random() * 11);
                this.m_symbol[_0x2abf48][_0x18b57f].getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[_0x30fe3e];
                var _0x150275 = this.m_symbolSize.width * (_0x2abf48 + 0.5) + this.m_reelPositionOffset[_0x2abf48].x - this.m_viewSize.width / 0x2;
                var _0x161966 = this.m_symbolSize.height * (0x2 - _0x18b57f + 0.5) + this.m_reelPositionOffset[_0x2abf48].y - this.m_viewSize.height / 0x2;
                this.m_symbol[_0x2abf48][_0x18b57f].setPosition(_0x20545c(_0x150275, _0x161966));
              }
            }
          } else {
            for (var _0x1a051e = 0x0; _0x1a051e < 0x5; _0x1a051e++) {
              this.m_lockColumn[_0x1a051e] = false;
              this.m_reelStopTime[_0x1a051e] = null;
              this.m_reelPreTime[_0x1a051e] = null;
              for (var _0x27579f = 0x0; _0x27579f < 0x3; _0x27579f++) {
                var _0x372fa0 = this.m_symbolSpriteFrames[_0x398f10[_0x1a051e][_0x27579f]];
                this.m_symbol[_0x1a051e][_0x27579f].getComponent(_0x2b691f).spriteFrame = _0x372fa0;
                var _0x8b2bd1 = this.m_symbolSize.width * (_0x1a051e + 0.5) + this.m_reelPositionOffset[_0x1a051e].x - this.m_viewSize.width / 0x2;
                var _0x2bdeb9 = this.m_symbolSize.height * (0x2 - _0x27579f + 0.5) + this.m_reelPositionOffset[_0x1a051e].y - this.m_viewSize.height / 0x2;
                this.m_symbol[_0x1a051e][_0x27579f].setPosition(_0x20545c(_0x8b2bd1, _0x2bdeb9));
              }
            }
          }
          for (var _0x4e7014 = 0x0; _0x4e7014 < 0x5; _0x4e7014++) {
            var _0x12ba70 = this.m_symbolSize.width * (_0x4e7014 + 0.5) + this.m_reelPositionOffset[_0x4e7014].x - this.m_viewSize.width / 0x2;
            var _0x39cc50 = this.m_symbolSize.height * 3.5 + this.m_reelPositionOffset[_0x4e7014].y - this.m_viewSize.height / 0x2;
            this.m_upperSymbol[_0x4e7014].setPosition(_0x20545c(_0x12ba70, _0x39cc50));
            _0x39cc50 = -0.5 * this.m_symbolSize.height + this.m_reelPositionOffset[_0x4e7014].y - this.m_viewSize.height / 0x2;
            this.m_lowerSymbol[_0x4e7014].setPosition(_0x20545c(_0x12ba70, _0x39cc50));
          }
        };
        _0x437c13.GetSymbolPosition = function (_0x1dafed, _0x8f3d7e) {
          var _0x3ecd9c = this.m_symbolSize.width * (_0x1dafed + 0.5) + this.m_reelPositionOffset[_0x1dafed].x - this.m_viewSize.width / 0x2;
          var _0x552438 = this.m_symbolSize.height * (0x2 - _0x8f3d7e + 0.5) + this.m_reelPositionOffset[_0x1dafed].y - this.m_viewSize.height / 0x2;
          return _0x20545c(_0x3ecd9c, _0x552438);
        };
        _0x437c13.CheckAndCorrectSymbols = function () {
          var _0x387d38 = false;
          var _0x1fb038 = '';
          for (var _0x5a2fe7 = 0x0; _0x5a2fe7 < 0x5; _0x5a2fe7++) {
            for (var _0x39a9cb = 0x0; _0x39a9cb < 0x3; _0x39a9cb++) {
              var _0x4ae26e = this.m_symbol[_0x5a2fe7][_0x39a9cb].getComponent(_0x2b691f).spriteFrame;
              var _0x317a48 = this.m_plateInfo[_0x5a2fe7][_0x39a9cb];
              var _0x38128e = this.m_symbolSpriteFrames[_0x317a48];
              if (_0x4ae26e.name != _0x38128e.name) {
                _0x387d38 = true;
                _0x575152("Symbol錯誤");
                _0x575152("col:", _0x5a2fe7, 'row:', _0x39a9cb, 'Symbol:', _0x4ae26e.name);
                _0x575152("正確Symbol：", _0x38128e.name);
                _0x1fb038 += '[' + _0x5a2fe7.toString() + '][' + _0x39a9cb.toString() + "] X: " + _0x4ae26e.name + " O: " + _0x38128e.name + " | ";
                this.m_symbol[_0x5a2fe7][_0x39a9cb].getComponent(_0x2b691f).spriteFrame = _0x38128e;
              }
            }
          }
          if (_0x387d38) {
            this.m_gameView.SendVerificationEvent(_0x249d7b.EVENT_ID.SYMBOL_ERROR, _0x1fb038);
          }
        };
        _0x437c13.CheckAndCorrectPosition = function () {
          var _0x55be4e = false;
          var _0x1d1208 = '';
          for (var _0x39eea0 = 0x0; _0x39eea0 < 0x5; _0x39eea0++) {
            for (var _0x2175f4 = 0x0; _0x2175f4 < 0x3; _0x2175f4++) {
              var _0x48b7e7 = this.m_symbol[_0x39eea0][_0x2175f4].position;
              var _0x4c38fb = this.GetSymbolPosition(_0x39eea0, _0x2175f4);
              if (Math.abs(_0x48b7e7.x - _0x4c38fb.x) > 0x1 || Math.abs(_0x48b7e7.y - _0x4c38fb.y) > 0x1) {
                _0x55be4e = true;
                _0x575152("位置錯誤");
                _0x575152('col:', _0x39eea0, "row:", _0x2175f4, "位置:", _0x48b7e7);
                _0x575152("正確位置：", _0x4c38fb);
                var _0x1be5a8 = _0x48b7e7.subtract(_0x4c38fb);
                _0x1d1208 += '[' + _0x39eea0.toString() + '][' + _0x2175f4.toString() + "] diff: " + _0x1be5a8.toString() + " | ";
                this.m_symbol[_0x39eea0][_0x2175f4].setPosition(_0x4c38fb);
              }
            }
          }
          if (_0x55be4e) {
            this.m_gameView.SendVerificationEvent(_0x249d7b.EVENT_ID.POSITION_ERROR, _0x1d1208);
            var _0x1b3160 = 'stopTime:' + this.m_stopTime.toString() + "; reelStopTime:" + this.m_reelStopTime.toString();
            this.m_gameView.SendVerificationEvent(_0x249d7b.EVENT_ID.POSITION_ERROR, _0x1b3160);
            _0x575152("stopTime:", this.m_stopTime, "; reelStopTime: ", this.m_reelStopTime);
          }
        };
        _0x437c13.CheckSpinStopPlate = function () {
          if (!this.m_isCheckPlateSymbols) {
            this.CheckAndCorrectSymbols();
            this.CheckAndCorrectPosition();
            this.m_isCheckPlateSymbols = true;
          }
        };
        return _0x2d0acf;
      }(_0x27b228);
      _0xa2cb6c = _0x405794(_0x55b60c.prototype, 'm_symbolSpriteFrames', [_0x4379c1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x5acd0d = _0x24c129(_0x1cb743 = _0x55b60c) || _0x1cb743;
      var _0x302aa4;
      var _0x8a440b;
      var _0x41fec4;
      var _0xbf3d3c;
      var _0x1e133c;
      var _0x42ca49;
      var _0x206a1c;
      var _0x5c4833;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "3161b16Ho9KOoawBb+jOgwZ", "EffectPlate", undefined);
      var _0x2c7979 = _0x2db653.ccclass;
      var _0x46685f = _0x2db653.property;
      _0x302aa4 = _0x46685f({
        'type': _0x5acd0d,
        'tooltip': '轉輪'
      });
      _0x8a440b = _0x46685f({
        'type': _0x2bfa3f,
        'tooltip': "symbol連線動畫"
      });
      _0x41fec4 = _0x46685f({
        'type': _0xe077c7,
        'tooltip': "symbol相關表演的節點"
      });
      _0x1e133c = function (_0x5dfcb7) {
        function _0x57893a() {
          var _0x280c00;
          var _0x40bc3b = arguments.length;
          var _0x1eb652 = new Array(_0x40bc3b);
          for (var _0x17fce5 = 0x0; _0x17fce5 < _0x40bc3b; _0x17fce5++) {
            _0x1eb652[_0x17fce5] = arguments[_0x17fce5];
          }
          _0x280c00 = _0x5dfcb7.call.apply(_0x5dfcb7, [this].concat(_0x1eb652)) || this;
          _0x3837b4(_0x280c00, "m_slotReels", _0x42ca49, _0x406265(_0x280c00));
          _0x3837b4(_0x280c00, "m_symbolEffectPrefabs", _0x206a1c, _0x406265(_0x280c00));
          _0x3837b4(_0x280c00, "m_effectNode", _0x5c4833, _0x406265(_0x280c00));
          _0x280c00.m_gameView = null;
          _0x280c00.m_symbolEffects = new Array();
          _0x280c00.m_isAlreadyShowEffect = new Array();
          _0x280c00.m_awardLineVec = null;
          _0x280c00.m_singleLineAni = null;
          _0x280c00.m_toSingleLineAni = null;
          _0x280c00.m_wildRoar = new Array();
          return _0x280c00;
        }
        _0x59a013(_0x57893a, _0x5dfcb7);
        var _0x12e72c = _0x57893a.prototype;
        _0x12e72c.onLoad = function () {
          for (var _0x4413f8 = 0x0; _0x4413f8 < 0x5; _0x4413f8++) {
            var _0x301e17 = new Array();
            for (var _0x3c0035 = 0x0; _0x3c0035 < 0x3; _0x3c0035++) {
              _0x301e17.push(false);
            }
            this.m_isAlreadyShowEffect.push(_0x301e17);
          }
          for (var _0x4c2443 = 0x0; _0x4c2443 < _0x249d7b.NORMAL_SYMBOL_NUMBER; _0x4c2443++) {
            var _0x5c939e = new Array();
            for (var _0x39a018 = 0x0; _0x39a018 < 0x5; _0x39a018++) {
              var _0x147812 = new Array();
              for (var _0x562811 = 0x0; _0x562811 < 0x3; _0x562811++) {
                _0x147812.push(null);
              }
              _0x5c939e.push(_0x147812);
            }
            this.m_symbolEffects.push(_0x5c939e);
          }
          for (var _0x131ebd = 0x0; _0x131ebd < _0x249d7b.SYMBOL_LINE_VEC.length; _0x131ebd++) {
            this.m_wildRoar[_0x131ebd] = false;
          }
        };
        _0x12e72c.start = function () {};
        _0x12e72c.Init = function (_0x5201e4) {
          this.m_gameView = _0x5201e4;
        };
        _0x12e72c.ShowSymbolEffect = function (_0x53d1f4, _0xfaddf3, _0x33975a, _0x11365c, _0x5e6822) {
          var _0x57363d = this;
          this.m_awardLineVec = _0xfaddf3;
          if (this.m_awardLineVec.length > 0x0) {
            for (var _0xcb1347 = 0x0; _0xcb1347 < this.m_awardLineVec.length; _0xcb1347++) {
              var _0x1e6ad6 = _0x249d7b.SYMBOL_LINE_VEC[this.m_awardLineVec[_0xcb1347].lineindex];
              for (var _0x216ee5 = 0x0; _0x216ee5 < this.m_awardLineVec[_0xcb1347].awardlink; _0x216ee5++) {
                if (!this.m_isAlreadyShowEffect[_0x1e6ad6[_0x216ee5].x][_0x1e6ad6[_0x216ee5].y] && !_0x5e6822[_0x1e6ad6[_0x216ee5].x]) {
                  var _0x2e7ecb = _0x53d1f4[_0x1e6ad6[_0x216ee5].x][_0x1e6ad6[_0x216ee5].y];
                  var _0x56dedd = this.m_slotReels.GetSymbolByIndex(_0x1e6ad6[_0x216ee5]);
                  _0x56dedd.active = false;
                  var _0x2da50d = this.m_symbolEffects[_0x2e7ecb][_0x1e6ad6[_0x216ee5].x][_0x1e6ad6[_0x216ee5].y];
                  var _0x42f3be = null;
                  if (_0x2da50d) {
                    _0x2da50d.active = true;
                    if (_0x2e7ecb < _0x249d7b.SYMBOL_HAVE_OWN_ANI_LIMIT || _0x2e7ecb == _0x249d7b.SYMBOL_WILD) {
                      if (_0x2e7ecb == _0x249d7b.SYMBOL_WILD) {
                        this.m_wildRoar[_0xcb1347] = true;
                      }
                      _0x2da50d.getComponent(_0x51a26a).play();
                    }
                    (_0x42f3be = _0x2da50d.getChildByName('Node').getChildByName('effectSymbolBoarder')).active = true;
                    _0x42f3be.getComponent(_0x51a26a).play();
                  } else {
                    var _0x1af15a = undefined;
                    (_0x1af15a = _0x4057ea(this.m_symbolEffectPrefabs[_0x2e7ecb])).setPosition(_0x20545c(_0x56dedd.position));
                    _0x7eb85f.SetZIndex(_0x1af15a, _0x1e6ad6[_0x216ee5].y);
                    this.m_effectNode.addChild(_0x1af15a);
                    if (_0x2e7ecb < _0x249d7b.SYMBOL_HAVE_OWN_ANI_LIMIT || _0x2e7ecb == _0x249d7b.SYMBOL_WILD) {
                      if (_0x2e7ecb == _0x249d7b.SYMBOL_WILD) {
                        this.m_wildRoar[_0xcb1347] = true;
                      }
                      _0x1af15a.getComponent(_0x51a26a).play();
                    }
                    this.m_symbolEffects[_0x2e7ecb][_0x1e6ad6[_0x216ee5].x][_0x1e6ad6[_0x216ee5].y] = _0x1af15a;
                    (_0x42f3be = _0x1af15a.getChildByName('Node').getChildByName("effectSymbolBoarder")).active = true;
                    _0x42f3be.getComponent(_0x51a26a).play();
                  }
                  this.m_isAlreadyShowEffect[_0x1e6ad6[_0x216ee5].x][_0x1e6ad6[_0x216ee5].y] = true;
                }
              }
            }
            var _0x180990 = [];
            for (var _0x55b0fb = 0x0; _0x55b0fb < this.m_awardLineVec.length; _0x55b0fb++) {
              var _0x21d7c0 = this.m_awardLineVec[_0x55b0fb].awardsymbol;
              if (_0x21d7c0 < 0x3) {
                if (!this.HaveRoar(_0x180990, _0x21d7c0)) {
                  _0x180990.push(_0x21d7c0);
                  _0x151d0c.Play(_0x249d7b.AudioClips["Symbol_ani" + String(_0x21d7c0 + 0x1)]);
                }
              }
              if (this.m_wildRoar[_0x55b0fb]) {
                _0x21d7c0 = 0xb;
                if (!this.HaveRoar(_0x180990, _0x21d7c0)) {
                  _0x180990.push(_0x21d7c0);
                  _0x151d0c.Play(_0x249d7b.AudioClips['Symbol_ani' + String(_0x21d7c0 + 0x1)]);
                }
              }
            }
            this.m_toSingleLineAni = _0x3c1ce8(this.m_effectNode).delay(_0x249d7b.SYMBOL_ANI_DURATION).call(function () {
              _0x57363d.ShowSymbolEffectSingle(_0x53d1f4, _0x33975a, _0x11365c, _0x5e6822);
            }).start();
            _0x3c1ce8(this.node).delay(_0x11365c).call(function () {
              if (_0x33975a) {
                _0x33975a();
              }
            }).start();
          } else if (_0x33975a) {
            _0x33975a();
          }
        };
        _0x12e72c.ShowSymbolEffectSingle = function (_0x470aee, _0x58a0a2, _0x3ec3c8, _0x1b6d54) {
          var _0x4fd917 = this;
          for (var _0x234f9d = 0x0; _0x234f9d < 0x5; _0x234f9d++) {
            for (var _0x5317fe = 0x0; _0x5317fe < 0x3; _0x5317fe++) {
              this.m_slotReels.GetSymbolByIndex(_0x20545c(_0x234f9d, _0x5317fe)).active = true;
            }
          }
          var _0x32d1fc = 0x0;
          this.m_singleLineAni = _0x3c1ce8(this.node).repeatForever(_0x3c1ce8().call(function () {
            var _0x405dde = _0x249d7b.SYMBOL_LINE_VEC[_0x4fd917.m_awardLineVec[_0x32d1fc].lineindex];
            for (var _0x39ec89 = 0x0; _0x39ec89 < _0x4fd917.m_awardLineVec[_0x32d1fc].awardlink; _0x39ec89++) {
              if (!_0x1b6d54[_0x405dde[_0x39ec89].x]) {
                var _0x2658cc = _0x470aee[_0x405dde[_0x39ec89].x][_0x405dde[_0x39ec89].y];
                var _0x439da0 = _0x4fd917.m_slotReels.GetSymbolByIndex(_0x405dde[_0x39ec89]);
                _0x439da0.active = false;
                var _0x320d8a = _0x4fd917.m_symbolEffects[_0x2658cc][_0x405dde[_0x39ec89].x][_0x405dde[_0x39ec89].y];
                var _0x3a4d2a = null;
                if (_0x320d8a) {
                  _0x320d8a.active = true;
                  if (_0x2658cc < _0x249d7b.SYMBOL_HAVE_OWN_ANI_LIMIT || _0x2658cc == _0x249d7b.SYMBOL_WILD) {
                    _0x320d8a.getComponent(_0x51a26a).play();
                  }
                  (_0x3a4d2a = _0x320d8a.getChildByName('Node').getChildByName('effectSymbolBoarder')).active = true;
                  _0x3a4d2a.getComponent(_0x51a26a).play();
                } else {
                  var _0x24dd59 = undefined;
                  (_0x24dd59 = _0x4057ea(_0x4fd917.m_symbolEffectPrefabs[_0x2658cc])).setPosition(_0x20545c(_0x439da0.position));
                  _0x4fd917.m_effectNode.addChild(_0x24dd59);
                  if (_0x2658cc < _0x249d7b.SYMBOL_HAVE_OWN_ANI_LIMIT || _0x2658cc == _0x249d7b.SYMBOL_WILD) {
                    _0x24dd59.getComponent(_0x51a26a).play();
                  }
                  (_0x3a4d2a = _0x24dd59.getChildByName("Node").getChildByName('effectSymbolBoarder')).active = true;
                  _0x3a4d2a.getComponent(_0x51a26a).play();
                  _0x4fd917.m_symbolEffects[_0x2658cc][_0x405dde[_0x39ec89].x][_0x405dde[_0x39ec89].y] = _0x24dd59;
                }
              }
            }
          }).delay(0x2 * _0x249d7b.SYMBOL_ANI_DURATION).call(function () {
            _0x4fd917.HideSymbolEffect();
            var _0x2ab406 = _0x249d7b.SYMBOL_LINE_VEC[_0x4fd917.m_awardLineVec[_0x32d1fc].lineindex];
            for (var _0x4d6926 = 0x0; _0x4d6926 < _0x4fd917.m_awardLineVec[_0x32d1fc].awardlink; _0x4d6926++) {
              _0x4fd917.m_slotReels.GetSymbolByIndex(_0x2ab406[_0x4d6926]).active = true;
            }
            if (_0x32d1fc == _0x4fd917.m_awardLineVec.length - 0x1) {
              _0x32d1fc = 0x0;
            } else {
              _0x32d1fc++;
            }
          })).start();
        };
        _0x12e72c.HaveRoar = function (_0xae8162, _0x5c96fd) {
          var _0x1c2245 = false;
          for (var _0x28f707 = 0x0; _0x28f707 < _0xae8162.length; _0x28f707++) {
            if (_0x5c96fd == _0xae8162[_0x28f707]) {
              _0x1c2245 = true;
              break;
            }
          }
          return _0x1c2245;
        };
        _0x12e72c.HideSymbolEffect = function () {
          for (var _0x2473fd = 0x0; _0x2473fd < this.m_isAlreadyShowEffect.length; _0x2473fd++) {
            for (var _0x10ceed = 0x0; _0x10ceed < this.m_isAlreadyShowEffect[_0x2473fd].length; _0x10ceed++) {
              if (this.m_isAlreadyShowEffect[_0x2473fd][_0x10ceed]) {
                this.m_isAlreadyShowEffect[_0x2473fd][_0x10ceed] = false;
              }
            }
          }
          for (var _0x32f5c9 = 0x0; _0x32f5c9 < this.m_symbolEffects.length; _0x32f5c9++) {
            if (this.m_symbolEffects[_0x32f5c9]) {
              for (var _0x87ee40 = 0x0; _0x87ee40 < this.m_symbolEffects[_0x32f5c9].length; _0x87ee40++) {
                if (this.m_symbolEffects[_0x32f5c9][_0x87ee40]) {
                  for (var _0x19c94c = 0x0; _0x19c94c < this.m_symbolEffects[_0x87ee40].length; _0x19c94c++) {
                    if (this.m_symbolEffects[_0x32f5c9][_0x87ee40][_0x19c94c] && this.m_symbolEffects[_0x32f5c9][_0x87ee40][_0x19c94c].active) {
                      if (_0x32f5c9 < _0x249d7b.SYMBOL_HAVE_OWN_ANI_LIMIT || _0x32f5c9 == _0x249d7b.SYMBOL_WILD) {
                        this.m_symbolEffects[_0x32f5c9][_0x87ee40][_0x19c94c].getComponent(_0x51a26a).stop();
                      }
                      this.m_symbolEffects[_0x32f5c9][_0x87ee40][_0x19c94c].active = false;
                    }
                  }
                }
              }
            }
          }
          for (var _0x4ec100 = 0x0; _0x4ec100 < this.m_wildRoar.length; _0x4ec100++) {
            this.m_wildRoar[_0x4ec100] = false;
          }
        };
        _0x12e72c.StopSingleLineEffect = function () {
          if (this.m_toSingleLineAni) {
            this.m_toSingleLineAni.stop();
            this.m_toSingleLineAni = null;
          }
          if (this.m_singleLineAni) {
            this.m_singleLineAni.stop();
            this.m_singleLineAni = null;
          }
        };
        return _0x57893a;
      }(_0x27b228);
      _0x42ca49 = _0x405794(_0x1e133c.prototype, "m_slotReels", [_0x302aa4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x206a1c = _0x405794(_0x1e133c.prototype, "m_symbolEffectPrefabs", [_0x8a440b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x5c4833 = _0x405794(_0x1e133c.prototype, "m_effectNode", [_0x41fec4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x26afee = _0x2c7979(_0xbf3d3c = _0x1e133c) || _0xbf3d3c;
      var _0x53390e;
      var _0x332fae;
      var _0x438e74;
      var _0x32960f;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "c52d22FlAhAbqayOUAPeddT", "EventSlotReels", undefined);
      var _0x196997 = _0x2db653.ccclass;
      var _0x45f87c = _0x2db653.property;
      _0x53390e = _0x45f87c(_0x5f4ab7);
      _0x438e74 = function (_0x2784b4) {
        function _0x2c488e() {
          var _0x86c560;
          var _0x5d9256 = arguments.length;
          var _0x48db1b = new Array(_0x5d9256);
          for (var _0x5e4d88 = 0x0; _0x5e4d88 < _0x5d9256; _0x5e4d88++) {
            _0x48db1b[_0x5e4d88] = arguments[_0x5e4d88];
          }
          _0x86c560 = _0x2784b4.call.apply(_0x2784b4, [this].concat(_0x48db1b)) || this;
          _0x3837b4(_0x86c560, 'm_symbolSpriteFrames', _0x32960f, _0x406265(_0x86c560));
          _0x86c560.m_symbolSize = null;
          _0x86c560.m_viewSize = null;
          _0x86c560.m_gameView = null;
          _0x86c560.m_reelPositionOffset = [_0x20545c(0x0, 0x0), _0x20545c(0x0, 0x0), _0x20545c(0x0, 0x0), _0x20545c(0x0, 0x0), _0x20545c(0x0, 0x0)];
          _0x86c560.m_symbol = new Array();
          _0x86c560.m_plateInfo = [[0x1], [0x1], [0x1], [0x1], [0x1]];
          _0x86c560.m_symbolVec = [0xb, 0xc, 0x11];
          _0x86c560.m_freeSymbolVec = [0xb, 0x11];
          _0x86c560.m_upperSymbol = new Array();
          _0x86c560.m_lowerSymbol = new Array();
          _0x86c560.m_reelStopTime = new Array();
          _0x86c560.m_reelPreTime = new Array();
          _0x86c560.m_isChangeSymbol = new Array();
          _0x86c560.m_isChangeToFinalSymbol = new Array();
          _0x86c560.m_time = 0x0;
          _0x86c560.m_stopTime = 0x0;
          _0x86c560.m_riseTime = 0x0;
          _0x86c560.m_spinBufferTime01 = 0.05;
          _0x86c560.m_spinBufferTime02 = 0.08;
          _0x86c560.m_spinSpeed = 0.21;
          _0x86c560.m_upLength = 0x14;
          _0x86c560.m_downLength = 0x1e;
          _0x86c560.m_numberOfSymbol = 0x0;
          _0x86c560.m_timesOfBaseSpin = 0x1;
          _0x86c560.m_spinIntervalTimes = 0x2;
          _0x86c560.m_timesOfNearWinSpin = 4.4;
          _0x86c560.m_spinDelayTime = 0x0;
          _0x86c560.m_isStop = false;
          _0x86c560.m_isClickStopBtn = false;
          _0x86c560.m_playStopSound = null;
          _0x86c560.m_isPlaySound = [false, false, false, false, false];
          _0x86c560.m_reelSoundId = null;
          _0x86c560.m_lockColumn = new Array();
          _0x86c560.m_randomSymbol = new Array();
          _0x86c560.m_isTest = false;
          _0x86c560.m_isCheckFinal = false;
          _0x86c560.m_errorMsgCount = false;
          _0x86c560.m_nearWinStartFunc = null;
          _0x86c560.m_nearWinEndFunc = null;
          _0x86c560.m_needNearWinCount = 0x0;
          _0x86c560.m_nowStopColum = 0x0;
          _0x86c560.m_isFiveDragon = true;
          _0x86c560.nearWinCount = 0x0;
          _0x86c560.m_isCheckPlateSymbols = false;
          return _0x86c560;
        }
        _0x59a013(_0x2c488e, _0x2784b4);
        var _0x7a2799 = _0x2c488e.prototype;
        _0x7a2799.onLoad = function () {
          var _0x5e38d6 = this;
          var _0x31b643 = function () {
            var _0x831a99 = _0x34b760.TempoSetting.TripleCoinTreasure;
            _0x5e38d6.m_riseTime = _0x831a99.BASE.RISE_TIME;
            _0x5e38d6.m_upLength = _0x831a99.BASE.UP_LENGTH;
            _0x5e38d6.m_spinBufferTime01 = _0x831a99.BASE.SPIN_BUFFER_TIME_01;
            _0x5e38d6.m_spinBufferTime02 = _0x831a99.BASE.SPIN_BUFFER_TIME_02;
            _0x5e38d6.m_downLength = _0x831a99.BASE.DOWN_LENGTH;
            _0x5e38d6.m_spinSpeed = _0x831a99.BASE.SPIN_SPEED;
            _0x5e38d6.m_timesOfBaseSpin = _0x831a99.BASE.TIMES_OF_BASE_SPIN;
            _0x5e38d6.m_spinIntervalTimes = _0x831a99.BASE.SPIN_INTERVAL_TIMES;
            _0x5e38d6.m_spinDelayTime = _0x831a99.BASE.SPIN_DELAY_TIME;
          };
          _0x31b643();
          _0x34b760.AddCb(_0x31b643);
          this.m_viewSize = this.node.getComponent(_0x4d349f).contentSize;
          this.m_symbolSize = new _0x7c2fb4(this.m_viewSize.width / 0x5, this.m_viewSize.height / 0x1);
          for (var _0x3ca5b9 = 0x0; _0x3ca5b9 < 0x5; _0x3ca5b9++) {
            this.m_lockColumn.push(false);
            this.m_reelStopTime.push(null);
            this.m_reelPreTime.push(null);
            var _0x1594fe = new Array();
            for (var _0x353139 = 0x0; _0x353139 < 0x1; _0x353139++) {
              var _0x5a5adc = new _0xe077c7();
              _0x5a5adc.addComponent(_0x2b691f);
              this.node.addChild(_0x5a5adc);
              _0x5a5adc.name = this.m_numberOfSymbol.toString();
              this.m_numberOfSymbol += 0x1;
              this.m_isChangeToFinalSymbol.push(false);
              _0x5a5adc.getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[_0x249d7b.SYMBOL_NONE];
              _0x1594fe.push(_0x5a5adc);
              var _0x2e538f = this.m_symbolSize.width * (_0x3ca5b9 + 0.5) + this.m_reelPositionOffset[_0x3ca5b9].x - this.m_viewSize.width / 0x2;
              _0x5a5adc.setPosition(_0x20545c(_0x2e538f, 0x0));
            }
            this.m_symbol.push(_0x1594fe);
          }
          for (var _0x1279af = 0x0; _0x1279af < 0x5; _0x1279af++) {
            var _0x255090 = this.m_symbolSize.width * (_0x1279af + 0.5) + this.m_reelPositionOffset[_0x1279af].x - this.m_viewSize.width / 0x2;
            var _0x22d62e = this.m_symbolSize.height * 1.5 + this.m_reelPositionOffset[_0x1279af].y - this.m_viewSize.height / 0x2;
            var _0x1ca09d = new _0xe077c7();
            _0x1ca09d.addComponent(_0x2b691f);
            this.node.addChild(_0x1ca09d);
            _0x1ca09d.name = (this.m_numberOfSymbol + _0x1279af).toString();
            _0x1ca09d.getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[_0x249d7b.SYMBOL_NONE];
            _0x1ca09d.setPosition(_0x20545c(_0x255090, _0x22d62e));
            this.m_upperSymbol.push(_0x1ca09d);
            _0x22d62e = -0.5 * this.m_symbolSize.height + this.m_reelPositionOffset[_0x1279af].y - this.m_viewSize.height / 0x2;
            var _0x19d014 = new _0xe077c7();
            _0x19d014.addComponent(_0x2b691f);
            this.node.addChild(_0x19d014);
            _0x19d014.name = (-(_0x1279af + 0x1)).toString();
            _0x19d014.getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[_0x249d7b.SYMBOL_NONE];
            _0x19d014.setPosition(_0x20545c(_0x255090, _0x22d62e));
            this.m_lowerSymbol.push(_0x19d014);
          }
        };
        _0x7a2799.Init = function (_0x37e77c) {
          this.m_gameView = _0x37e77c;
          this.m_gameView.OldEventPlate = [[_0x249d7b.SYMBOL_NONE], [_0x249d7b.SYMBOL_NONE], [_0x249d7b.SYMBOL_NONE], [_0x249d7b.SYMBOL_NONE], [_0x249d7b.SYMBOL_NONE]];
        };
        _0x7a2799.start = function () {};
        _0x7a2799.StartSpin = function (_0x505871) {
          if (undefined === _0x505871) {
            _0x505871 = true;
          }
          this.m_isTest = true;
          this.m_isCheckFinal = false;
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_errorMsgCount = false;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isPlaySound = [false, false, false, false, false];
          this.nearWinCount = 0x0;
          if (_0x505871) {
            for (var _0x4bf49d = 0x0; _0x4bf49d < 0x5; _0x4bf49d++) {
              this.m_lockColumn[_0x4bf49d] = false;
            }
          }
          for (var _0x40e8ef = 0x0; _0x40e8ef < 0x5; _0x40e8ef++) {
            this.m_reelStopTime[_0x40e8ef] = null;
            this.m_reelPreTime[_0x40e8ef] = null;
          }
          for (var _0xf23a2 = 0x0; _0xf23a2 < 0x5; _0xf23a2++) {
            if (!this.m_lockColumn[_0xf23a2]) {
              for (var _0x25a27b = 0x0; _0x25a27b < 0x1; _0x25a27b++) {
                this.m_symbol[_0xf23a2][_0x25a27b].active = true;
              }
            }
          }
          for (var _0x3545d2 = 0x0; _0x3545d2 < this.m_isChangeToFinalSymbol.length; _0x3545d2++) {
            this.m_isChangeToFinalSymbol[_0x3545d2] = false;
          }
          this.m_isCheckPlateSymbols = false;
        };
        _0x7a2799.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          if (0x0 != this.m_stopTime) {
            var _0x44a486 = Math.floor(this.m_time / this.m_spinSpeed);
            var _0x5b57af = _0x34b760.TempoSetting.TripleCoinTreasure.SPEED_UP_STOP_TIME(0x0, this.m_time);
            if (_0x5b57af < this.m_stopTime) {
              if (!this.m_gameView.IsNearWin) {
                this.m_stopTime = _0x7eb85f.strip(_0x5b57af);
              }
            }
            var _0x160a5b = (_0x44a486 + 0x1) * this.m_spinSpeed;
            if (this.m_gameView.IsNearWin) {
              this.m_stopTime = _0x7eb85f.strip(_0x5b57af + (this.m_timesOfNearWinSpin - this.m_timesOfBaseSpin) * (this.nearWinCount + 0x1));
              for (var _0x373452 = 0x0; _0x373452 < 0x5; _0x373452++) {
                if (this.m_reelStopTime[_0x373452] > _0x160a5b) {
                  this.m_reelStopTime[_0x373452] = _0x7eb85f.strip(_0x160a5b);
                  this.m_reelPreTime[_0x373452] = _0x44a486 * this.m_spinSpeed;
                }
                if (_0x373452 >= 0x2) {
                  var _0x3c08cc = 0x2 + this.nearWinCount;
                  var _0x54796d = _0x373452 - 0x2 + 0x1;
                  if (_0x373452 > _0x3c08cc) {
                    _0x54796d = this.nearWinCount + 0x1;
                  }
                  this.m_reelStopTime[_0x373452] = _0x7eb85f.strip(this.m_reelStopTime[_0x373452] + (this.m_timesOfNearWinSpin - this.m_timesOfBaseSpin) * _0x54796d);
                }
              }
            } else {
              for (var _0x2d8046 = 0x0; _0x2d8046 < 0x5; _0x2d8046++) {
                if (this.m_reelStopTime[_0x2d8046] > _0x160a5b) {
                  this.m_reelStopTime[_0x2d8046] = _0x7eb85f.strip(_0x160a5b);
                  this.m_reelPreTime[_0x2d8046] = _0x44a486 * this.m_spinSpeed;
                }
              }
            }
          }
        };
        _0x7a2799.Spin = function (_0x26b0ff) {
          this.m_time = _0x7eb85f.strip(this.m_time + _0x26b0ff);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple(_0x26b0ff);
            if (this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime && this.IsAllSymbolChangeToRight()) {
              this.m_isStop = true;
              if (this.m_nearWinEndFunc) {
                this.m_needNearWinCount = 0x0;
                this.m_nowStopColum = 0x0;
                this.m_isFiveDragon = true;
                this.m_nearWinEndFunc();
              }
              if (this.m_reelSoundId) {
                _0x151d0c.Stop(this.m_reelSoundId);
                this.m_reelSoundId = null;
              }
              this.CheckSpinStopPlate();
            }
          }
        };
        _0x7a2799.SetNearWinCb = function (_0x2b50b9, _0x1cca20) {
          this.m_nearWinStartFunc = _0x2b50b9;
          this.m_nearWinEndFunc = _0x1cca20;
        };
        _0x7a2799.IsReelStop = function (_0x36ac93) {
          return _0x36ac93 < 0x0 || (_0x36ac93 > 0x0 && _0x36ac93 < 0x4 && (_0x36ac93 += 0x1), this.m_time > this.m_reelStopTime[_0x36ac93]);
        };
        _0x7a2799.Spin_RealSpinMultiple = function (_0x1b442e) {
          for (var _0x3cf2f6 = 0x0; _0x3cf2f6 < 0x5; _0x3cf2f6++) {
            var _0x31b06c = this.m_spinSpeed;
            var _0xa2737c = this.m_time;
            var _0x4bde93 = this.m_reelStopTime[_0x3cf2f6];
            var _0x138f51 = this.m_reelPreTime[_0x3cf2f6];
            var _0x25cf6d = this.m_riseTime * 0x5;
            if (this.m_gameView.IsNearWin && this.m_reelStopTime[1] && _0x3cf2f6 > 1 && this.m_time > this.m_reelStopTime[1]) {
              _0x31b06c = this.m_spinSpeed / 0.875;
              if (_0x3cf2f6 > this.m_nowStopColum && this.m_time > this.m_reelStopTime[this.m_nowStopColum]) {
                if (this.m_needNearWinCount > 0x0) {
                  this.m_needNearWinCount--;
                  this.m_nowStopColum = _0x3cf2f6;
                  if (this.m_nearWinStartFunc) {
                    this.m_nearWinStartFunc(this.m_nowStopColum);
                  }
                } else {
                  this.m_gameView.StopNearWinEffect();
                }
              } else if (0x4 == _0x3cf2f6 && this.m_time > this.m_reelStopTime[this.m_nowStopColum] && this.m_needNearWinCount > 0x0 && this.m_isFiveDragon) {
                this.m_isFiveDragon = false;
                if (this.m_nearWinStartFunc) {
                  this.m_nearWinStartFunc(_0x3cf2f6 + 0x1);
                }
              }
            }
            for (var _0x28dd75 = 0x0; _0x28dd75 < 0x1; _0x28dd75++) {
              var _0x11cd3b = this.m_symbolSize.width * (_0x3cf2f6 + 0.5) + this.m_reelPositionOffset[_0x3cf2f6].x - this.m_viewSize.width / 0x2;
              if (_0xa2737c < this.m_riseTime * _0x3cf2f6) {
                ;
              } else {
                if (_0xa2737c < this.m_riseTime * (_0x3cf2f6 + 0x1)) {
                  var _0x500384 = (_0xa2737c - this.m_riseTime * _0x3cf2f6) / this.m_riseTime * this.m_upLength;
                  this.m_symbol[_0x3cf2f6][_0x28dd75].setPosition(_0x20545c(_0x11cd3b, 0x0 + _0x500384));
                } else {
                  if (_0xa2737c < _0x25cf6d) {
                    this.m_symbol[_0x3cf2f6][_0x28dd75].setPosition(_0x11cd3b, 0x0 + this.m_upLength);
                  } else {
                    if (null == _0x4bde93 || _0xa2737c < _0x138f51 + _0x25cf6d) {
                      var _0x1225ea = (_0xa2737c - _0x25cf6d) % _0x31b06c / _0x31b06c * this.m_symbolSize.height * 3;
                      var _0x8aaa26 = this.GetMovelength(_0x1225ea, this.m_symbolSize.height * (0x1 - _0x28dd75 + 0.5), this.m_symbolSize.height * 3, _0x3cf2f6, this.m_symbol[_0x3cf2f6][_0x28dd75].name, this.m_symbol[_0x3cf2f6][_0x28dd75], false);
                      this.m_symbol[_0x3cf2f6][_0x28dd75].setPosition(_0x20545c(_0x11cd3b, 0x0 - _0x8aaa26));
                    } else {
                      if (_0xa2737c < _0x4bde93 + _0x25cf6d) {
                        var _0x46650b = (_0xa2737c - _0x25cf6d) % _0x31b06c / _0x31b06c * this.m_symbolSize.height * 3;
                        var _0x357e61 = this.GetMovelength(_0x46650b, this.m_symbolSize.height * (0x1 - _0x28dd75 + 0.5), this.m_symbolSize.height * 3, _0x3cf2f6, this.m_symbol[_0x3cf2f6][_0x28dd75].name, this.m_symbol[_0x3cf2f6][_0x28dd75], false);
                        this.m_symbol[_0x3cf2f6][_0x28dd75].setPosition(_0x20545c(_0x11cd3b, 0x0 - _0x357e61));
                      } else {
                        if (_0xa2737c < _0x4bde93 + _0x25cf6d + this.m_spinBufferTime01 - 0x1) {
                          var _0x103cc8 = ((_0xa2737c - _0x4bde93 - _0x25cf6d) / this.m_spinBufferTime01 - 0x1) * this.m_downLength;
                          this.m_symbol[_0x3cf2f6][_0x28dd75].setPosition(_0x20545c(_0x11cd3b, 0x0 - _0x103cc8));
                          this.CheckChangeToFinalSymbol(_0x3cf2f6, this.m_symbol[_0x3cf2f6][_0x28dd75].name, this.m_symbol[_0x3cf2f6][_0x28dd75], true);
                        } else {
                          if (_0xa2737c < _0x4bde93 + _0x25cf6d + this.m_spinBufferTime01 - 0x1 + this.m_spinBufferTime02) {
                            var _0x539e73 = (_0xa2737c - _0x4bde93 - _0x25cf6d - this.m_spinBufferTime01 - 0x1) / this.m_spinBufferTime02 * this.m_downLength;
                            this.m_symbol[_0x3cf2f6][_0x28dd75].setPosition(_0x20545c(_0x11cd3b, 0x0 - this.m_downLength + _0x539e73));
                            this.CheckChangeToFinalSymbol(_0x3cf2f6, this.m_symbol[_0x3cf2f6][_0x28dd75].name, this.m_symbol[_0x3cf2f6][_0x28dd75], true);
                          } else {
                            this.CheckChangeToFinalSymbol(_0x3cf2f6, this.m_symbol[_0x3cf2f6][_0x28dd75].name, this.m_symbol[_0x3cf2f6][_0x28dd75], true);
                            this.CheckPlayStopSound(_0x3cf2f6, _0x28dd75);
                            this.m_symbol[_0x3cf2f6][_0x28dd75].setPosition(_0x20545c(_0x11cd3b, 0x0));
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            var _0x270939 = this.m_symbolSize.width * (_0x3cf2f6 + 0.5) + this.m_reelPositionOffset[_0x3cf2f6].x - this.m_viewSize.width / 0x2;
            var _0x569acf = this.m_symbolSize.height * 1.5 + this.m_reelPositionOffset[_0x3cf2f6].y - this.m_viewSize.height / 0x2;
            if (_0xa2737c < this.m_riseTime * _0x3cf2f6) {
              ;
            } else {
              if (_0xa2737c < this.m_riseTime * (_0x3cf2f6 + 0x1)) {
                var _0x2b8ab9 = (_0xa2737c - this.m_riseTime * _0x3cf2f6) / this.m_riseTime * this.m_upLength;
                this.m_upperSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf + _0x2b8ab9));
              } else {
                if (_0xa2737c < _0x25cf6d) {
                  this.m_upperSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf + this.m_upLength));
                } else {
                  if (null == _0x4bde93 || _0xa2737c < _0x4bde93 + _0x25cf6d) {
                    var _0x56a30e = (_0xa2737c - _0x25cf6d) % _0x31b06c / _0x31b06c * this.m_symbolSize.height * 3;
                    var _0x184afe = this.GetMovelength(_0x56a30e, this.m_symbolSize.height * 2, this.m_symbolSize.height * 3, _0x3cf2f6, this.m_numberOfSymbol + _0x3cf2f6, this.m_upperSymbol[_0x3cf2f6], false);
                    this.m_upperSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf - _0x184afe));
                  } else {
                    if (_0xa2737c < _0x4bde93 + _0x25cf6d + this.m_spinBufferTime01 - 0x1) {
                      var _0x2e4561 = ((_0xa2737c - _0x4bde93 - _0x25cf6d) / this.m_spinBufferTime01 - 0x1) * this.m_downLength;
                      this.m_upperSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf - _0x2e4561));
                      this.CheckChangeToFinalSymbol(_0x3cf2f6, this.m_upperSymbol[_0x3cf2f6].name, this.m_upperSymbol[_0x3cf2f6], true);
                    } else {
                      if (_0xa2737c < _0x4bde93 + _0x25cf6d + this.m_spinBufferTime01 - 0x1 + this.m_spinBufferTime02) {
                        var _0x40cb59 = (_0xa2737c - _0x4bde93 - _0x25cf6d - this.m_spinBufferTime01 - 0x1) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_upperSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf - this.m_downLength + _0x40cb59));
                        this.CheckChangeToFinalSymbol(_0x3cf2f6, this.m_upperSymbol[_0x3cf2f6].name, this.m_upperSymbol[_0x3cf2f6], true);
                      } else {
                        this.CheckChangeToFinalSymbol(_0x3cf2f6, this.m_numberOfSymbol + _0x3cf2f6, this.m_upperSymbol[_0x3cf2f6]);
                        this.m_upperSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf));
                      }
                    }
                  }
                }
              }
            }
            _0x270939 = this.m_symbolSize.width * (_0x3cf2f6 + 0.5) + this.m_reelPositionOffset[_0x3cf2f6].x - this.m_viewSize.width / 0x2;
            _0x569acf = -0.5 * this.m_symbolSize.height + this.m_reelPositionOffset[_0x3cf2f6].y - this.m_viewSize.height / 0x2;
            if (_0xa2737c < this.m_riseTime * _0x3cf2f6) {
              ;
            } else {
              if (_0xa2737c < this.m_riseTime * (_0x3cf2f6 + 0x1)) {
                var _0x4e2e00 = (_0xa2737c - this.m_riseTime * _0x3cf2f6) / this.m_riseTime * this.m_upLength;
                this.m_lowerSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf + _0x4e2e00));
              } else {
                if (_0xa2737c < _0x25cf6d) {
                  this.m_lowerSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf + this.m_upLength));
                } else {
                  if (null == _0x4bde93 || _0xa2737c < _0x4bde93 + _0x25cf6d) {
                    var _0x1aceb1 = (_0xa2737c - _0x25cf6d) % _0x31b06c / _0x31b06c * this.m_symbolSize.height * 3;
                    var _0x46587d = this.GetMovelength(_0x1aceb1, 0.5 * this.m_symbolSize.height, this.m_symbolSize.height * 3, _0x3cf2f6, -(_0x3cf2f6 + 0x1), this.m_lowerSymbol[_0x3cf2f6], false);
                    this.m_lowerSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf - _0x46587d));
                  } else {
                    if (_0xa2737c < _0x4bde93 + _0x25cf6d + this.m_spinBufferTime01 - 0x1) {
                      var _0x101367 = ((_0xa2737c - _0x4bde93 - _0x25cf6d) / this.m_spinBufferTime01 - 0x1) * this.m_downLength;
                      this.m_lowerSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf - _0x101367));
                      this.CheckChangeToFinalSymbol(_0x3cf2f6, this.m_lowerSymbol[_0x3cf2f6].name, this.m_lowerSymbol[_0x3cf2f6], true);
                    } else {
                      if (_0xa2737c < _0x4bde93 + _0x25cf6d + this.m_spinBufferTime01 - 0x1 + this.m_spinBufferTime02) {
                        var _0x3e7e6e = (_0xa2737c - _0x4bde93 - _0x25cf6d - this.m_spinBufferTime01 - 0x1) / this.m_spinBufferTime02 * this.m_downLength;
                        this.m_lowerSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf - this.m_downLength + _0x3e7e6e));
                        this.CheckChangeToFinalSymbol(_0x3cf2f6, this.m_lowerSymbol[_0x3cf2f6].name, this.m_lowerSymbol[_0x3cf2f6], true);
                      } else {
                        this.CheckChangeToFinalSymbol(_0x3cf2f6, -(_0x3cf2f6 + 0x1), this.m_lowerSymbol[_0x3cf2f6]);
                        this.m_lowerSymbol[_0x3cf2f6].setPosition(_0x20545c(_0x270939, _0x569acf));
                      }
                    }
                  }
                }
              }
            }
          }
        };
        _0x7a2799.GetMovelength = function (_0x5ac4b5, _0x15b6c2, _0x3376d4, _0x5936bc, _0x54ee78, _0x46e65f, _0x26a157) {
          if (_0x5ac4b5 >= _0x15b6c2) {
            _0x5ac4b5 -= _0x3376d4;
            if (this.m_isChangeSymbol[_0x54ee78] && !this.m_isClickStopBtn) {
              this.m_isChangeSymbol[_0x54ee78] = false;
              this.ChangeSymbol(_0x5936bc, _0x46e65f, _0x26a157);
            }
          } else {
            this.m_isChangeSymbol[_0x54ee78] = true;
          }
          return _0x5ac4b5;
        };
        _0x7a2799.ChangeSymbol = function (_0xb1517b, _0x39e8ea, _0x569569) {
          var _0x146384;
          var _0x2e86e4;
          var _0x3c4ac3 = _0x39e8ea.name;
          var _0x2ca9e3 = this.m_reelStopTime[_0xb1517b];
          var _0x225c48 = 0x0;
          var _0x40f84c = _0x3c4ac3 >= 0x0 ? _0x3c4ac3 % 0x1 : (Math.abs(_0x3c4ac3) - 0x1) % 0x1;
          var _0x19aa9d = this.m_riseTime * 3;
          var _0x56db6f = this.m_symbolVec;
          if (this.m_gameView.IsFreeGame) {
            _0x56db6f = this.m_freeSymbolVec;
          }
          if (_0x2ca9e3) {
            _0x225c48 = _0x2ca9e3 / this.m_spinSpeed;
          }
          if (_0x2ca9e3 && this.m_time - _0x19aa9d > (_0x225c48 - 0x1) * this.m_spinSpeed || _0x569569) {
            if (_0x3c4ac3 >= 0x0 && _0x3c4ac3 < this.m_numberOfSymbol) {
              var _0x14e496 = _0x39e8ea.getComponent(_0x2b691f);
              _0x2e86e4 = this.m_plateInfo[_0xb1517b][_0x40f84c];
              var _0x389ae7 = this.m_symbolSpriteFrames[_0x2e86e4];
              _0x14e496.spriteFrame = _0x389ae7;
            } else {
              _0x146384 = Math.floor(Math.random() * _0x56db6f.length);
              _0x39e8ea.getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[_0x56db6f[_0x146384]];
            }
          } else {
            _0x146384 = Math.floor(Math.random() * _0x56db6f.length);
            _0x39e8ea.getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[_0x56db6f[_0x146384]];
          }
        };
        _0x7a2799.CheckChangeToFinalSymbol = function (_0x2fdbf6, _0x5f4116, _0x2e585c, _0x5be5bc) {
          if (undefined === _0x5be5bc) {
            _0x5be5bc = false;
          }
          if (!this.m_isChangeToFinalSymbol[_0x5f4116]) {
            this.m_isChangeToFinalSymbol[_0x5f4116] = true;
            this.ChangeSymbol(_0x2fdbf6, _0x2e585c, _0x5be5bc);
          }
        };
        _0x7a2799.IsAllSymbolChangeToRight = function () {
          var _0x360ec7 = true;
          if (!this.m_errorMsgCount) {
            for (var _0x34bf2e = 0x0; _0x34bf2e < 0x5; _0x34bf2e++) {
              if (!this.m_isChangeToFinalSymbol[_0x34bf2e]) {
                var _0x20da92 = 'a';
                for (var _0x3f7ccf = 0x0; _0x3f7ccf < 0x5; _0x3f7ccf++) {
                  for (var _0x429899 = 0x0; _0x429899 < 0x1; _0x429899++) {
                    _0x20da92 = _0x20da92 + this.m_symbol[_0x3f7ccf][_0x429899].getComponent(_0x2b691f).spriteFrame.name + ',';
                  }
                }
                var _0x525bc4 = "this.m_reelStopTime";
                for (var _0x329220 = 0x0; _0x329220 < this.m_reelStopTime.length; _0x329220++) {
                  _0x525bc4 = _0x525bc4 + this.m_reelStopTime[_0x329220] + ',';
                }
                var _0x37a303 = "this.m_reelPreTime";
                for (var _0xb4fcd8 = 0x0; _0xb4fcd8 < this.m_reelPreTime.length; _0xb4fcd8++) {
                  _0x37a303 = _0x37a303 + this.m_reelPreTime[_0xb4fcd8] + ',';
                }
                this.m_time;
                this.m_stopTime;
                this.m_errorMsgCount = true;
                _0x360ec7 = false;
                break;
              }
            }
            if (_0x360ec7) {
              this.m_isCheckFinal = true;
            }
          }
          return _0x360ec7;
        };
        _0x7a2799.SetPlateInfo = function (_0x19a0ad) {
          this.m_plateInfo = _0x19a0ad;
          var _0x146f46 = 0x5 * this.m_riseTime;
          var _0x5a59d6 = Math.ceil((this.m_time - _0x146f46) / this.m_spinSpeed);
          var _0x598cab = 0x0;
          if (this.m_isClickStopBtn) {
            this.m_stopTime = _0x7eb85f.strip(this.m_spinSpeed * _0x5a59d6 + this.m_spinDelayTime + _0x146f46);
            for (var _0x19d6c2 = 0x0; _0x19d6c2 < 0x5; _0x19d6c2++) {
              this.m_reelStopTime[_0x19d6c2] = _0x7eb85f.strip(this.m_spinSpeed * _0x5a59d6);
              this.m_reelPreTime[_0x19d6c2] = _0x7eb85f.strip(this.m_spinSpeed * (_0x5a59d6 - 0x1));
            }
          } else {
            this.m_stopTime = _0x7eb85f.strip(this.m_spinSpeed * (_0x5a59d6 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * 4 + this.m_spinDelayTime + _0x146f46 + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var _0x28e12b = 0x0; _0x28e12b < 0x5; _0x28e12b++) {
              if (this.m_lockColumn[_0x28e12b]) {
                _0x598cab += 0x1;
              }
              this.m_reelStopTime[_0x28e12b] = _0x7eb85f.strip(this.m_spinSpeed * (_0x5a59d6 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0x28e12b - _0x598cab));
              this.m_reelPreTime[_0x28e12b] = _0x7eb85f.strip(this.m_spinSpeed * (_0x5a59d6 + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * (_0x28e12b - _0x598cab - 0x1));
            }
            this.nearWinCount = this.CountNearWinColum(_0x19a0ad);
            if (this.m_gameView.IsNearWin) {
              this.m_stopTime = _0x7eb85f.strip(this.m_stopTime + (this.m_timesOfNearWinSpin - this.m_timesOfBaseSpin) * (this.nearWinCount + 0x1));
              for (var _0x4b831a = 0x0; _0x4b831a < this.m_reelStopTime.length; _0x4b831a++) {
                if (_0x4b831a >= 0x2) {
                  var _0x157f8e = 0x2 + this.nearWinCount;
                  var _0xcf010b = _0x4b831a - 0x2 + 0x1;
                  if (_0x4b831a > _0x157f8e) {
                    _0xcf010b = this.nearWinCount + 0x1;
                  }
                  this.m_reelStopTime[_0x4b831a] = _0x7eb85f.strip(this.m_reelStopTime[_0x4b831a] + (this.m_timesOfNearWinSpin - this.m_timesOfBaseSpin) * _0xcf010b);
                }
              }
            }
          }
        };
        _0x7a2799.CountNearWinColum = function (_0x575a8a) {
          var _0x35825e = 0x0;
          var _0x34056a = 0x0;
          var _0x171306 = true;
          for (var _0x2f4fd6 = 0x0; _0x2f4fd6 < 0x5; _0x2f4fd6++) {
            if (_0x171306) {
              for (var _0x25e587 = 0x0; _0x25e587 < 0x1; _0x25e587++) {
                if (_0x575a8a[_0x2f4fd6][_0x25e587] == _0x249d7b.SYMBOL_DRAGON) {
                  _0x35825e++;
                } else {
                  _0x171306 = false;
                }
              }
            }
          }
          this.m_needNearWinCount = _0x35825e - 0x2 + 0x1;
          if ((_0x34056a = _0x35825e - 0x2) > 0x2) {
            _0x34056a = 0x2;
          }
          return _0x34056a;
        };
        _0x7a2799.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x7a2799.GetSymbolByIndex = function (_0x51fbef) {
          return this.m_symbol[_0x51fbef.x][_0x51fbef.y];
        };
        _0x7a2799.SetPlayStopSoundFunction = function (_0x5a41f0) {
          this.m_playStopSound = _0x5a41f0;
        };
        _0x7a2799.CheckPlayStopSound = function (_0x28bc68, _0x90b583) {
          if (this.m_playStopSound && !this.m_isPlaySound[_0x28bc68] && 0x0 == _0x90b583) {
            this.m_isPlaySound[_0x28bc68] = true;
            this.m_playStopSound(_0x28bc68);
          }
        };
        _0x7a2799.ResetSymbolActive = function () {
          for (var _0x497c88 = 0x0; _0x497c88 < 0x5; _0x497c88++) {
            for (var _0x2ad163 = 0x0; _0x2ad163 < 0x1; _0x2ad163++) {
              this.m_symbol[_0x497c88][_0x2ad163].active = true;
            }
          }
        };
        _0x7a2799.SetPlateSymbol = function (_0x20e593) {
          if (0x0 == _0x20e593.length) {
            for (var _0x4b3a6e = 0x0; _0x4b3a6e < 0x5; _0x4b3a6e++) {
              this.m_lockColumn[_0x4b3a6e] = false;
              this.m_reelStopTime[_0x4b3a6e] = null;
              this.m_reelPreTime[_0x4b3a6e] = null;
              for (var _0x43c463 = 0x0; _0x43c463 < 0x1; _0x43c463++) {
                this.m_symbol[_0x4b3a6e][_0x43c463].getComponent(_0x2b691f).spriteFrame = this.m_symbolSpriteFrames[0x11];
                var _0x24cc3f = this.m_symbolSize.width * (_0x4b3a6e + 0.5) + this.m_reelPositionOffset[_0x4b3a6e].x - this.m_viewSize.width / 0x2;
                this.m_symbol[_0x4b3a6e][_0x43c463].setPosition(_0x20545c(_0x24cc3f, 0x0));
              }
            }
          } else {
            for (var _0x43c7e0 = 0x0; _0x43c7e0 < 0x5; _0x43c7e0++) {
              this.m_lockColumn[_0x43c7e0] = false;
              this.m_reelStopTime[_0x43c7e0] = null;
              this.m_reelPreTime[_0x43c7e0] = null;
              for (var _0x996662 = 0x0; _0x996662 < 0x1; _0x996662++) {
                var _0x12044e = this.m_symbolSpriteFrames[_0x20e593[_0x43c7e0][_0x996662]];
                this.m_symbol[_0x43c7e0][_0x996662].getComponent(_0x2b691f).spriteFrame = _0x12044e;
                var _0x1509e9 = this.m_symbolSize.width * (_0x43c7e0 + 0.5) + this.m_reelPositionOffset[_0x43c7e0].x - this.m_viewSize.width / 0x2;
                this.m_symbol[_0x43c7e0][_0x996662].setPosition(_0x20545c(_0x1509e9, 0x0));
              }
            }
          }
          for (var _0x13df79 = 0x0; _0x13df79 < 0x5; _0x13df79++) {
            var _0x250736 = this.m_symbolSize.width * (_0x13df79 + 0.5) + this.m_reelPositionOffset[_0x13df79].x - this.m_viewSize.width / 0x2;
            var _0x2289f2 = this.m_symbolSize.height * 1.5 + this.m_reelPositionOffset[_0x13df79].y - this.m_viewSize.height / 0x2;
            this.m_upperSymbol[_0x13df79].setPosition(_0x20545c(_0x250736, _0x2289f2));
            _0x2289f2 = -0.5 * this.m_symbolSize.height + this.m_reelPositionOffset[_0x13df79].y - this.m_viewSize.height / 0x2;
            this.m_lowerSymbol[_0x13df79].setPosition(_0x20545c(_0x250736, _0x2289f2));
          }
        };
        _0x7a2799.GetSymbolPosition = function (_0x422986, _0x10f250) {
          var _0x3b6b8f = this.m_symbolSize.width * (_0x422986 + 0.5) + this.m_reelPositionOffset[_0x422986].x - this.m_viewSize.width / 0x2;
          var _0x19c1ab = this.m_symbolSize.height * (_0x10f250 + 0.5) + this.m_reelPositionOffset[_0x422986].y - this.m_viewSize.height / 0x2;
          return _0x20545c(_0x3b6b8f, _0x19c1ab);
        };
        _0x7a2799.CheckAndCorrectSymbols = function () {
          var _0x56c95b = false;
          var _0x154123 = "Event";
          for (var _0x10c086 = 0x0; _0x10c086 < 0x5; _0x10c086++) {
            for (var _0x554c23 = 0x0; _0x554c23 < 0x1; _0x554c23++) {
              var _0x21b6db = this.m_symbol[_0x10c086][_0x554c23].getComponent(_0x2b691f).spriteFrame;
              var _0x362703 = this.m_plateInfo[_0x10c086][_0x554c23];
              var _0x289974 = this.m_symbolSpriteFrames[_0x362703];
              if (_0x21b6db.name != _0x289974.name) {
                _0x56c95b = true;
                _0x575152('Symbol錯誤');
                _0x575152("col:", _0x10c086, "row:", _0x554c23, "Symbol:", _0x21b6db.name);
                _0x575152('正確Symbol：', _0x289974.name);
                _0x154123 += '[' + _0x10c086.toString() + '][' + _0x554c23.toString() + "] X: " + _0x21b6db.name + " O: " + _0x289974.name + " | ";
                this.m_symbol[_0x10c086][_0x554c23].getComponent(_0x2b691f).spriteFrame = _0x289974;
              }
            }
          }
          if (_0x56c95b) {
            this.m_gameView.SendVerificationEvent(_0x249d7b.EVENT_ID.SYMBOL_ERROR, _0x154123);
          }
        };
        _0x7a2799.CheckAndCorrectPosition = function () {
          var _0xa8bab2 = false;
          var _0x16c9d0 = "Event";
          for (var _0x33f5f2 = 0x0; _0x33f5f2 < 0x5; _0x33f5f2++) {
            for (var _0x19d499 = 0x0; _0x19d499 < 0x1; _0x19d499++) {
              var _0x1874ef = this.m_symbol[_0x33f5f2][_0x19d499].position;
              var _0x3a95c2 = this.GetSymbolPosition(_0x33f5f2, _0x19d499);
              if (Math.abs(_0x1874ef.x - _0x3a95c2.x) > 0x1 || Math.abs(_0x1874ef.y - _0x3a95c2.y) > 0x1) {
                _0xa8bab2 = true;
                _0x575152('位置錯誤');
                _0x575152("col:", _0x33f5f2, "row:", _0x19d499, "位置:", _0x1874ef);
                _0x575152("正確位置：", _0x3a95c2);
                var _0x123ecd = _0x1874ef.subtract(_0x3a95c2);
                _0x16c9d0 += '[' + _0x33f5f2.toString() + '][' + _0x19d499.toString() + "] diff: " + _0x123ecd.toString() + " | ";
                this.m_symbol[_0x33f5f2][_0x19d499].setPosition(_0x3a95c2);
              }
            }
          }
          if (_0xa8bab2) {
            this.m_gameView.SendVerificationEvent(_0x249d7b.EVENT_ID.POSITION_ERROR, _0x16c9d0);
            var _0x2e33b1 = "stopTime:" + this.m_stopTime.toString() + "; reelStopTime:" + this.m_reelStopTime.toString();
            this.m_gameView.SendVerificationEvent(_0x249d7b.EVENT_ID.POSITION_ERROR, _0x2e33b1);
            _0x575152("stopTime:", this.m_stopTime, "; reelStopTime: ", this.m_reelStopTime);
          }
        };
        _0x7a2799.CheckSpinStopPlate = function () {
          if (!this.m_isCheckPlateSymbols) {
            this.CheckAndCorrectSymbols();
            this.CheckAndCorrectPosition();
            this.m_isCheckPlateSymbols = true;
          }
        };
        return _0x2c488e;
      }(_0x27b228);
      _0x32960f = _0x405794(_0x438e74.prototype, 'm_symbolSpriteFrames', [_0x53390e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x1abf1f = _0x196997(_0x332fae = _0x438e74) || _0x332fae;
      var _0x4a93b6;
      var _0x1bcbfe;
      var _0xd45233;
      var _0x3885f0;
      var _0x24822b;
      var _0x311ea9;
      var _0x5c39a7;
      var _0xd71d52;
      var _0x55e0fb;
      var _0x185ce8;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, '72681BnwWZEjpSK1XUFNaDm', "EventEffectPlate", undefined);
      var _0x754d25 = _0x2db653.ccclass;
      var _0x2f98a8 = _0x2db653.property;
      var _0x1633e3 = ["effectRole02_down", "effectRole02_get", "effectRole02_wait_01", "effectRole02_wait_02", "effectRole02_fail"];
      _0x4a93b6 = _0x2f98a8({
        'type': _0x1abf1f,
        'tooltip': "Event 轉輪"
      });
      _0x1bcbfe = _0x2f98a8({
        'type': _0x2bfa3f,
        'tooltip': "Event symbol連線動畫"
      });
      _0xd45233 = _0x2f98a8({
        'type': _0xe077c7,
        'tooltip': "Event symbol相關表演的節點"
      });
      _0x3885f0 = _0x2f98a8({
        'type': _0x2bfa3f,
        'tooltip': "劍砍下動畫"
      });
      _0x311ea9 = function (_0x341774) {
        function _0xcca0fb() {
          var _0x30478d;
          var _0x307c78 = arguments.length;
          var _0x2ec5a3 = new Array(_0x307c78);
          for (var _0x66299c = 0x0; _0x66299c < _0x307c78; _0x66299c++) {
            _0x2ec5a3[_0x66299c] = arguments[_0x66299c];
          }
          _0x30478d = _0x341774.call.apply(_0x341774, [this].concat(_0x2ec5a3)) || this;
          _0x3837b4(_0x30478d, "m_eventSlotReels", _0x5c39a7, _0x406265(_0x30478d));
          _0x3837b4(_0x30478d, 'm_symbolEffectPrefabs', _0xd71d52, _0x406265(_0x30478d));
          _0x3837b4(_0x30478d, 'm_effectNode', _0x55e0fb, _0x406265(_0x30478d));
          _0x3837b4(_0x30478d, "m_swordDownAni", _0x185ce8, _0x406265(_0x30478d));
          _0x30478d.m_gameView = null;
          _0x30478d.m_symbolEffects = new Array();
          _0x30478d.m_swordEffects = new Array();
          _0x30478d.m_getLimit = 0x0;
          return _0x30478d;
        }
        _0x59a013(_0xcca0fb, _0x341774);
        var _0x48dacf = _0xcca0fb.prototype;
        _0x48dacf.onLoad = function () {
          for (var _0x18e9e1 = 0x0; _0x18e9e1 < 0x12; _0x18e9e1++) {
            var _0x3e1ea5 = new Array();
            for (var _0x251278 = 0x0; _0x251278 < 0x5; _0x251278++) {
              var _0x46a2e9 = new Array();
              for (var _0x45eabd = 0x0; _0x45eabd < 0x1; _0x45eabd++) {
                _0x46a2e9.push(null);
              }
              _0x3e1ea5.push(_0x46a2e9);
            }
            this.m_symbolEffects.push(_0x3e1ea5);
          }
        };
        _0x48dacf.Init = function (_0x59ffa2) {
          this.m_gameView = _0x59ffa2;
        };
        _0x48dacf.start = function () {};
        _0x48dacf.ShowSword = function (_0x31262f, _0x22b085, _0x17b72b, _0x291adc, _0x1a2508) {
          var _0x3dd4d1 = this;
          if (undefined === _0x1a2508) {
            _0x1a2508 = 0x0;
          }
          var _0x3acdd3 = null;
          var _0x446c72 = null;
          var _0x124061 = null;
          this.m_getLimit = _0x17b72b;
          for (var _0x87f0a6 = 0x0; _0x87f0a6 < _0x31262f.length; _0x87f0a6++) {
            var _0x1a35d1 = this.m_eventSlotReels.GetSymbolByIndex(_0x20545c(_0x31262f[_0x87f0a6], 0x0));
            _0x1a35d1.active = false;
            var _0x5610f = this.m_symbolEffects[_0x249d7b.SYMBOL_SWORD][_0x31262f[_0x87f0a6]][0x0];
            if (_0x5610f) {
              _0x5610f.active = true;
              _0x5610f.getComponent(_0x51a26a).play();
              _0x3acdd3 = _0x5610f.getComponent(_0x51a26a).getState(_0x5610f.getComponent(_0x51a26a).defaultClip.name);
            } else {
              var _0x14037c = undefined;
              (_0x14037c = _0x4057ea(this.m_symbolEffectPrefabs[_0x249d7b.SYMBOL_SWORD])).setPosition(_0x20545c(_0x1a35d1.position));
              this.m_effectNode.addChild(_0x14037c);
              _0x14037c.getComponent(_0x51a26a).play();
              _0x3acdd3 = _0x14037c.getComponent(_0x51a26a).getState(_0x14037c.getComponent(_0x51a26a).defaultClip.name);
              this.m_symbolEffects[_0x249d7b.SYMBOL_SWORD][_0x31262f[_0x87f0a6]][0x0] = _0x14037c;
            }
          }
          _0x151d0c.Play(_0x249d7b.AudioClips.Sword_ani);
          var _0x2871d3 = function () {
            for (var _0x553765 = 0x0; _0x553765 < _0x31262f.length; _0x553765++) {
              _0x3dd4d1.m_eventSlotReels.GetSymbolByIndex(_0x20545c(_0x31262f[_0x553765], 0x0)).active = true;
            }
          };
          _0x3c1ce8(this.node).delay(_0x3acdd3.duration + 0.1).call(function () {
            for (var _0x373b29 = 0x0; _0x373b29 < _0x31262f.length; _0x373b29++) {
              var _0x1ab576 = _0x3dd4d1.m_symbolEffects[_0x249d7b.SYMBOL_SWORD][_0x31262f[_0x373b29]][0x0];
              _0x1ab576.getComponent(_0x51a26a).stop();
              _0x1ab576.active = false;
            }
            for (var _0x408b79 = 0x0; _0x408b79 < _0x31262f.length; _0x408b79++) {
              var _0x1dd6e3 = _0x3dd4d1.m_eventSlotReels.GetSymbolByIndex(_0x20545c(_0x31262f[_0x408b79], 0x0));
              var _0x4a384d = _0x3dd4d1.m_swordEffects[_0x31262f[_0x408b79]];
              if (_0x4a384d) {
                _0x4a384d.active = true;
                _0x4a384d.getComponent(_0x51a26a).play(_0x1633e3[0x0]);
                _0x446c72 = _0x4a384d.getComponent(_0x51a26a).getState(_0x1633e3[0x0]);
              } else {
                var _0x232942 = undefined;
                (_0x232942 = _0x4057ea(_0x3dd4d1.m_swordDownAni)).setPosition(_0x20545c(_0x1dd6e3.getPosition().x, -0xac));
                _0x3dd4d1.m_effectNode.addChild(_0x232942);
                _0x232942.getComponent(_0x51a26a).play(_0x1633e3[0x0]);
                _0x446c72 = _0x232942.getComponent(_0x51a26a).getState(_0x1633e3[0x0]);
                _0x3dd4d1.m_swordEffects[_0x31262f[_0x408b79]] = _0x232942;
              }
            }
            if (_0x291adc) {
              _0x3c1ce8(_0x3dd4d1.node).delay(0.5).call(function () {
                _0x2871d3();
              }).delay(_0x446c72.duration + 0.1 - 0.5).call(function () {
                for (var _0xcf239a = 0x0; _0xcf239a < _0x31262f.length; _0xcf239a++) {
                  if (_0x31262f[_0xcf239a] < _0x3dd4d1.m_getLimit) {
                    var _0x1acf71 = _0x3dd4d1.m_eventSlotReels.GetSymbolByIndex(_0x20545c(_0x31262f[_0xcf239a], 0x0));
                    var _0x1c42a1 = _0x3dd4d1.m_swordEffects[_0x31262f[_0xcf239a]];
                    if (_0x1c42a1) {
                      _0x1c42a1.active = true;
                      _0x1c42a1.getComponent(_0x51a26a).play(_0x1633e3[0x1]);
                      _0x124061 = _0x1c42a1.getComponent(_0x51a26a).getState(_0x1633e3[0x1]);
                    } else {
                      var _0x1774f3 = undefined;
                      (_0x1774f3 = _0x4057ea(_0x3dd4d1.m_swordDownAni)).setPosition(_0x20545c(_0x1acf71.getPosition().x, -0xac));
                      _0x3dd4d1.m_effectNode.addChild(_0x1774f3);
                      _0x1774f3.getComponent(_0x51a26a).play(_0x1633e3[0x1]);
                      _0x124061 = _0x1774f3.getComponent(_0x51a26a).getState(_0x1633e3[0x1]);
                      _0x3dd4d1.m_swordEffects[_0x31262f[_0xcf239a]] = _0x1774f3;
                    }
                  }
                }
                if (_0x1a2508 > 0x0) {
                  _0x3c1ce8(_0x3dd4d1.node).delay(_0x124061.duration + 0.1).call(function () {
                    if (_0x22b085) {
                      _0x22b085();
                    }
                    _0x3dd4d1.MasterBaoWaitState(0x2, _0x31262f);
                  }).delay(_0x1a2508).call(function () {
                    _0x3dd4d1.MasterBaoWaitState(0x3, _0x31262f);
                  }).start();
                } else {
                  _0x3c1ce8(_0x3dd4d1.node).delay(_0x124061.duration + 0.1).call(function () {
                    if (_0x22b085) {
                      _0x22b085();
                    }
                    _0x3dd4d1.MasterBaoWaitState(0x3, _0x31262f);
                  }).start();
                }
              }).delay(0.4).call(function () {
                _0x151d0c.Play(_0x249d7b.AudioClips.Bao_wheel);
              }).start();
            } else if (_0x1a2508 > 0x0) {
              _0x3c1ce8(_0x3dd4d1.node).delay(0.5).call(function () {
                _0x2871d3();
              }).delay(_0x446c72.duration + 0.1 - 0.5).call(function () {
                _0x3dd4d1.MasterBaoWaitState(0x4, _0x31262f);
                if (_0x22b085) {
                  _0x22b085();
                }
              }).start();
            } else {
              _0x3c1ce8(_0x3dd4d1.node).delay(0.5).call(function () {
                _0x2871d3();
              }).delay(_0x446c72.duration + 0.1 - 0.5).call(function () {
                if (_0x22b085) {
                  _0x22b085();
                }
                _0x3dd4d1.MasterBaoWaitState(0x4, _0x31262f);
              }).start();
            }
          }).start();
        };
        _0x48dacf.HideSword = function () {
          var _0x261fb2 = this;
          var _0x4e485b = function (_0x5ed653) {
            if (_0x261fb2.m_swordEffects[_0x5ed653] && _0x261fb2.m_swordEffects[_0x5ed653].active) {
              _0x261fb2.m_swordEffects[_0x5ed653].getComponent(_0x3891f8).opacity = 0x0;
              _0x261fb2.m_swordEffects[_0x5ed653].getComponent(_0x51a26a).play(_0x1633e3[0x4]);
              _0x3c1ce8(_0x261fb2.node).delay(0.1).call(function () {
                _0x261fb2.m_swordEffects[_0x5ed653].active = false;
                _0x261fb2.m_swordEffects[_0x5ed653].getComponent(_0x3891f8).opacity = 0xff;
              }).start();
            }
          };
          for (var _0x1610d6 = 0x0; _0x1610d6 < this.m_swordEffects.length; _0x1610d6++) {
            _0x4e485b(_0x1610d6);
          }
          this.m_getLimit = 0x0;
        };
        _0x48dacf.MasterBaoWaitState = function (_0x5ee707, _0x2c1485) {
          for (var _0x4ecd8e = 0x0; _0x4ecd8e < _0x2c1485.length; _0x4ecd8e++) {
            if (_0x2c1485[_0x4ecd8e] > this.m_getLimit) {
              _0x5ee707 = 0x4;
            }
            var _0x5df09a = this.m_eventSlotReels.GetSymbolByIndex(_0x20545c(_0x2c1485[_0x4ecd8e], 0x0));
            var _0x2ff8c6 = this.m_swordEffects[_0x2c1485[_0x4ecd8e]];
            if (_0x2ff8c6) {
              _0x2ff8c6.active = true;
              _0x2ff8c6.getComponent(_0x51a26a).play(_0x1633e3[_0x5ee707]);
            } else {
              var _0x285bcf = undefined;
              (_0x285bcf = _0x4057ea(this.m_swordDownAni)).setPosition(_0x20545c(_0x5df09a.getPosition().x, -0xac));
              this.m_effectNode.addChild(_0x285bcf);
              _0x285bcf.getComponent(_0x51a26a).play(_0x1633e3[_0x5ee707]);
              this.m_swordEffects[_0x2c1485[_0x4ecd8e]] = _0x285bcf;
            }
          }
        };
        _0x48dacf.ShowDragon = function (_0x13ac55, _0x1da878, _0x1d7ad6) {
          if (undefined === _0x1d7ad6) {
            _0x1d7ad6 = "effectSymbol13_get";
          }
          for (var _0x383762 = 0x0; _0x383762 < _0x13ac55.length; _0x383762++) {
            var _0xed55e8 = this.m_eventSlotReels.GetSymbolByIndex(_0x20545c(_0x13ac55[_0x383762], 0x0));
            _0xed55e8.active = false;
            var _0x3edef3 = this.m_symbolEffects[_0x249d7b.SYMBOL_DRAGON][_0x13ac55[_0x383762]][0x0];
            if (_0x3edef3) {
              _0x3edef3.active = true;
              _0x3edef3.getComponent(_0x51a26a).play(_0x1d7ad6);
            } else {
              var _0x1b1d43 = undefined;
              (_0x1b1d43 = _0x4057ea(this.m_symbolEffectPrefabs[_0x249d7b.SYMBOL_DRAGON])).setPosition(_0x20545c(_0xed55e8.getPosition()));
              this.m_effectNode.addChild(_0x1b1d43);
              _0x1b1d43.getComponent(_0x51a26a).play(_0x1d7ad6);
              this.m_symbolEffects[_0x249d7b.SYMBOL_DRAGON][_0x13ac55[_0x383762]][0x0] = _0x1b1d43;
            }
          }
          if ('effectSymbol13_wait' == _0x1d7ad6) {
            _0x151d0c.Play(_0x249d7b.AudioClips.Dragon_wait);
          }
          if ("effectSymbol13_get" == _0x1d7ad6) {
            _0x151d0c.Play(_0x249d7b.AudioClips.Fg_symbol_bell);
            _0x151d0c.Play(_0x249d7b.AudioClips.Dragon_roar);
          }
          if (_0x1da878) {
            _0x3c1ce8(this.node).delay(2.5).call(function () {
              _0x1da878();
            }).start();
          }
        };
        _0x48dacf.HideDragon = function () {
          for (var _0x192d79 = 0x0; _0x192d79 < this.m_symbolEffects[_0x249d7b.SYMBOL_DRAGON].length; _0x192d79++) {
            if (this.m_symbolEffects[_0x249d7b.SYMBOL_DRAGON]) {
              for (var _0x7d303b = 0x0; _0x7d303b < this.m_symbolEffects[_0x249d7b.SYMBOL_DRAGON][_0x192d79].length; _0x7d303b++) {
                if (this.m_symbolEffects[_0x249d7b.SYMBOL_DRAGON][_0x192d79][_0x7d303b] && this.m_symbolEffects[_0x249d7b.SYMBOL_DRAGON][_0x192d79][_0x7d303b].active) {
                  this.m_symbolEffects[_0x249d7b.SYMBOL_DRAGON][_0x192d79][_0x7d303b].active = false;
                }
              }
            }
          }
        };
        return _0xcca0fb;
      }(_0x27b228);
      _0x5c39a7 = _0x405794(_0x311ea9.prototype, "m_eventSlotReels", [_0x4a93b6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xd71d52 = _0x405794(_0x311ea9.prototype, "m_symbolEffectPrefabs", [_0x1bcbfe], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x55e0fb = _0x405794(_0x311ea9.prototype, "m_effectNode", [_0xd45233], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x185ce8 = _0x405794(_0x311ea9.prototype, "m_swordDownAni", [_0x3885f0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x3c5cd2 = _0x754d25(_0x24822b = _0x311ea9) || _0x24822b;
      _0x252f89._RF.pop();
      var _0x4a79dc = function () {
        function _0x51d25f() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x3d7d22 = _0x51d25f.prototype;
        _0x3d7d22.define = function (_0x329844, _0x14c7ff, _0x319f0d) {
          this._registry[_0x329844] = {
            'factory': _0x14c7ff,
            'resolveMap': _0x319f0d
          };
        };
        _0x3d7d22.require = function (_0x38dc8d) {
          return this._require(_0x38dc8d);
        };
        _0x3d7d22.throwInvalidWrapper = function (_0x57a279, _0x3e0643) {
          throw new Error("Module '" + _0x57a279 + "' imported from '" + _0x3e0643 + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x3d7d22._require = function (_0x2c440a, _0x316a83) {
          var _0x4e8f08 = this._moduleCache[_0x2c440a];
          if (_0x4e8f08) {
            return _0x4e8f08.exports;
          }
          var _0x5f3fee = {
            'id': _0x2c440a,
            'exports': {}
          };
          this._moduleCache[_0x2c440a] = _0x5f3fee;
          this._tryModuleLoad(_0x5f3fee, _0x2c440a);
          return _0x5f3fee.exports;
        };
        _0x3d7d22._resolve = function (_0x40ac84, _0x287c09) {
          return this._resolveFromInfos(_0x40ac84, _0x287c09) || this._throwUnresolved(_0x40ac84, _0x287c09);
        };
        _0x3d7d22._resolveFromInfos = function (_0x66fc72, _0x53bd8a) {
          var _0x32349e;
          var _0x5c04e0;
          return _0x66fc72 in cjsInfos ? _0x66fc72 : _0x53bd8a && null != (_0x32349e = null == (_0x5c04e0 = cjsInfos[_0x53bd8a]) ? undefined : _0x5c04e0.resolveCache[_0x66fc72]) ? _0x32349e : undefined;
        };
        _0x3d7d22._tryModuleLoad = function (_0x589788, _0x37e919) {
          var _0x4e902b = true;
          try {
            this._load(_0x589788, _0x37e919);
            _0x4e902b = false;
          } finally {
            if (_0x4e902b) {
              delete this._moduleCache[_0x37e919];
            }
          }
        };
        _0x3d7d22._load = function (_0x25b1e1, _0x3b54e8) {
          var _0x161b1f = this._loadWrapper(_0x3b54e8);
          var _0x5869a0 = _0x161b1f.factory;
          var _0x4e753e = _0x161b1f.resolveMap;
          var _0x37fc80 = this._createRequire(_0x25b1e1);
          var _0xf22455 = _0x4e753e ? this._createRequireWithResolveMap("function" == typeof _0x4e753e ? _0x4e753e() : _0x4e753e, _0x37fc80) : _0x37fc80;
          _0x5869a0(_0x25b1e1.exports, _0xf22455, _0x25b1e1);
        };
        _0x3d7d22._loadWrapper = function (_0x5ae218) {
          return _0x5ae218 in this._registry ? this._registry[_0x5ae218] : this._loadHostProvidedModules(_0x5ae218);
        };
        _0x3d7d22._loadHostProvidedModules = function (_0x17850a) {
          return {
            'factory': function (_0x2f7041, _0x406dfe, _0x387be5) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x17850a + "'.");
              }
              try {
                _0x387be5.exports = require(_0x17850a);
              } catch (_0x4630a4) {
                throw new Error("Exception thrown when calling host defined require('" + _0x17850a + "').", {
                  'cause': _0x4630a4
                });
              }
            }
          };
        };
        _0x3d7d22._createRequire = function (_0x238eaa) {
          var _0x2c64cd = this;
          return function (_0x16b3b1) {
            return _0x2c64cd._require(_0x16b3b1, _0x238eaa);
          };
        };
        _0x3d7d22._createRequireWithResolveMap = function (_0x3f2ea2, _0x2a33b0) {
          return function (_0x2ec46b) {
            var _0x515e2c = _0x3f2ea2[_0x2ec46b];
            if (_0x515e2c) {
              return _0x2a33b0(_0x515e2c);
            }
            throw new Error("Unresolved specifier " + _0x2ec46b);
          };
        };
        _0x3d7d22._throwUnresolved = function (_0xfeaf67, _0x15228a) {
          throw new Error("Unable to resolve " + _0xfeaf67 + " from " + parent + '.');
        };
        return _0x51d25f;
      }();
      var _0x2e006d = new _0x4a79dc();
      var _0x373f00;
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x3efd8a, _0x43b56d, _0x4f4e69, _0x117d61, _0x257002) {
        _0x4f4e69.exports = _0x190aab;
        var _0x458f9e = null;
        try {
          _0x458f9e = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x4ab5fc) {}
        function _0x190aab(_0xa2f0c3, _0x2dfd7, _0x2a2cf6) {
          this.low = 0x0 | _0xa2f0c3;
          this.high = 0x0 | _0x2dfd7;
          this.unsigned = !!_0x2a2cf6;
        }
        function _0x5a7d18(_0x58207e) {
          return true === (_0x58207e && _0x58207e.__isLong__);
        }
        _0x190aab.prototype.__isLong__;
        Object.defineProperty(_0x190aab.prototype, "__isLong__", {
          'value': true
        });
        _0x190aab.isLong = _0x5a7d18;
        var _0x14bb3a = {};
        var _0x50bc5f = {};
        function _0x2b1a5d(_0x25336c, _0x4d0d12) {
          var _0x1dc2d8;
          var _0x22396e;
          var _0x3d8884;
          return _0x4d0d12 ? (_0x3d8884 = 0x0 <= (_0x25336c >>>= 0x0) && _0x25336c < 0x100) && (_0x22396e = _0x50bc5f[_0x25336c]) ? _0x22396e : (_0x1dc2d8 = new _0x190aab(_0x25336c, (0x0 | _0x25336c) < 0x0 ? -0x1 : 0x0, true), _0x3d8884 && (_0x50bc5f[_0x25336c] = _0x1dc2d8), _0x1dc2d8) : (_0x3d8884 = -0x80 <= (_0x25336c |= 0x0) && _0x25336c < 0x80) && (_0x22396e = _0x14bb3a[_0x25336c]) ? _0x22396e : (_0x1dc2d8 = new _0x190aab(_0x25336c, _0x25336c < 0x0 ? -0x1 : 0x0, false), _0x3d8884 && (_0x14bb3a[_0x25336c] = _0x1dc2d8), _0x1dc2d8);
        }
        function _0x25ce4a(_0x453887, _0x212f9d) {
          if (isNaN(_0x453887)) {
            return _0x212f9d ? _0x5ce04c : _0x3d1749;
          }
          if (_0x212f9d) {
            if (_0x453887 < 0x0) {
              return _0x5ce04c;
            }
            if (_0x453887 >= 18446744073709552000) {
              return _0x164148;
            }
          } else {
            if (_0x453887 <= -9223372036854776000) {
              return _0x2a82fb;
            }
            if (_0x453887 + 0x1 >= 9223372036854776000) {
              return _0x26523a;
            }
          }
          return _0x453887 < 0x0 ? _0x25ce4a(-_0x453887, _0x212f9d).neg() : new _0x190aab(_0x453887 % 0x100000000 | 0x0, _0x453887 / 0x100000000 | 0x0, _0x212f9d);
        }
        function _0x4d5c8b(_0x5b175f, _0x378002, _0x4725c8) {
          return new _0x190aab(_0x5b175f, _0x378002, _0x4725c8);
        }
        _0x190aab.fromInt = _0x2b1a5d;
        _0x190aab.fromNumber = _0x25ce4a;
        _0x190aab.fromBits = _0x4d5c8b;
        var _0x544b18 = Math.pow;
        function _0x918813(_0x1faabb, _0x17d25f, _0x308f6c) {
          if (0x0 === _0x1faabb.length) {
            throw Error("empty string");
          }
          if ('NaN' === _0x1faabb || "Infinity" === _0x1faabb || '+Infinity' === _0x1faabb || "-Infinity" === _0x1faabb) {
            return _0x3d1749;
          }
          if ("number" == typeof _0x17d25f) {
            _0x308f6c = _0x17d25f;
            _0x17d25f = false;
          } else {
            _0x17d25f = !!_0x17d25f;
          }
          if ((_0x308f6c = _0x308f6c || 0xa) < 0x2 || 0x24 < _0x308f6c) {
            throw RangeError("radix");
          }
          var _0x41e85d;
          if ((_0x41e85d = _0x1faabb.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x41e85d) {
            return _0x918813(_0x1faabb.substring(0x1), _0x17d25f, _0x308f6c).neg();
          }
          var _0x31e940 = _0x25ce4a(_0x544b18(_0x308f6c, 0x8));
          var _0x480fc8 = _0x3d1749;
          for (var _0x501ac3 = 0x0; _0x501ac3 < _0x1faabb.length; _0x501ac3 += 0x8) {
            var _0x40733a = Math.min(0x8, _0x1faabb.length - _0x501ac3);
            var _0x6af5a7 = parseInt(_0x1faabb.substring(_0x501ac3, _0x501ac3 + _0x40733a), _0x308f6c);
            if (_0x40733a < 0x8) {
              var _0x17166c = _0x25ce4a(_0x544b18(_0x308f6c, _0x40733a));
              _0x480fc8 = _0x480fc8.mul(_0x17166c).add(_0x25ce4a(_0x6af5a7));
            } else {
              _0x480fc8 = (_0x480fc8 = _0x480fc8.mul(_0x31e940)).add(_0x25ce4a(_0x6af5a7));
            }
          }
          _0x480fc8.unsigned = _0x17d25f;
          return _0x480fc8;
        }
        function _0x3e2469(_0x1273d6, _0x31525e) {
          return 'number' == typeof _0x1273d6 ? _0x25ce4a(_0x1273d6, _0x31525e) : "string" == typeof _0x1273d6 ? _0x918813(_0x1273d6, _0x31525e) : new _0x190aab(_0x1273d6.low, _0x1273d6.high, "boolean" == typeof _0x31525e ? _0x31525e : _0x1273d6.unsigned);
        }
        _0x190aab.fromString = _0x918813;
        _0x190aab.fromValue = _0x3e2469;
        var _0x5321da = _0x2b1a5d(16777216);
        var _0x3d1749 = _0x2b1a5d(0x0);
        _0x190aab.ZERO = _0x3d1749;
        var _0x5ce04c = _0x2b1a5d(0x0, true);
        _0x190aab.UZERO = _0x5ce04c;
        var _0x26d2d5 = _0x2b1a5d(0x1);
        _0x190aab.ONE = _0x26d2d5;
        var _0x540e47 = _0x2b1a5d(0x1, true);
        _0x190aab.UONE = _0x540e47;
        var _0x193f49 = _0x2b1a5d(-0x1);
        _0x190aab.NEG_ONE = _0x193f49;
        var _0x26523a = new _0x190aab(-0x1, 0x7fffffff, false);
        _0x190aab.MAX_VALUE = _0x26523a;
        var _0x164148 = new _0x190aab(-0x1, -0x1, true);
        _0x190aab.MAX_UNSIGNED_VALUE = _0x164148;
        var _0x2a82fb = new _0x190aab(0x0, -0x80000000, false);
        _0x190aab.MIN_VALUE = _0x2a82fb;
        var _0x1d3304 = _0x190aab.prototype;
        _0x1d3304.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x1d3304.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x1d3304.toString = function (_0xf1145b) {
          if ((_0xf1145b = _0xf1145b || 0xa) < 0x2 || 0x24 < _0xf1145b) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x2a82fb)) {
              var _0x1d6163 = _0x25ce4a(_0xf1145b);
              var _0x4945ad = this.div(_0x1d6163);
              var _0x59b57e = _0x4945ad.mul(_0x1d6163).sub(this);
              return _0x4945ad.toString(_0xf1145b) + _0x59b57e.toInt().toString(_0xf1145b);
            }
            return '-' + this.neg().toString(_0xf1145b);
          }
          var _0x11e803 = _0x25ce4a(_0x544b18(_0xf1145b, 0x6), this.unsigned);
          var _0x5c12d6 = this;
          for (var _0x341d8c = '';;) {
            var _0x174195 = _0x5c12d6.div(_0x11e803);
            var _0x52dda7 = (_0x5c12d6.sub(_0x174195.mul(_0x11e803)).toInt() >>> 0x0).toString(_0xf1145b);
            if ((_0x5c12d6 = _0x174195).isZero()) {
              return _0x52dda7 + _0x341d8c;
            }
            for (; _0x52dda7.length < 0x6;) {
              _0x52dda7 = '0' + _0x52dda7;
            }
            _0x341d8c = '' + _0x52dda7 + _0x341d8c;
          }
        };
        _0x1d3304.getHighBits = function () {
          return this.high;
        };
        _0x1d3304.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x1d3304.getLowBits = function () {
          return this.low;
        };
        _0x1d3304.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x1d3304.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x2a82fb) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x118dd4 = 0x0 != this.high ? this.high : this.low;
          for (var _0x54893d = 0x1f; _0x54893d > 0x0 && 0x0 == (_0x118dd4 & 0x1 << _0x54893d); _0x54893d--) {
            ;
          }
          return 0x0 != this.high ? _0x54893d + 0x21 : _0x54893d + 0x1;
        };
        _0x1d3304.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x1d3304.eqz = _0x1d3304.isZero;
        _0x1d3304.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x1d3304.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x1d3304.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x1d3304.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x1d3304.equals = function (_0x3bd965) {
          if (!(true === (_0x3bd965 && _0x3bd965.__isLong__))) {
            _0x3bd965 = 'number' == typeof _0x3bd965 ? _0x25ce4a(_0x3bd965, undefined) : "string" == typeof _0x3bd965 ? _0x918813(_0x3bd965, undefined) : new _0x190aab(_0x3bd965.low, _0x3bd965.high, _0x3bd965.unsigned);
          }
          return (this.unsigned === _0x3bd965.unsigned || this.high >>> 0x1f != 0x1 || _0x3bd965.high >>> 0x1f != 0x1) && this.high === _0x3bd965.high && this.low === _0x3bd965.low;
        };
        _0x1d3304.eq = _0x1d3304.equals;
        _0x1d3304.notEquals = function (_0x18ece1) {
          return !this.eq(_0x18ece1);
        };
        _0x1d3304.neq = _0x1d3304.notEquals;
        _0x1d3304.ne = _0x1d3304.notEquals;
        _0x1d3304.lessThan = function (_0x367391) {
          return this.comp(_0x367391) < 0x0;
        };
        _0x1d3304.lt = _0x1d3304.lessThan;
        _0x1d3304.lessThanOrEqual = function (_0x8cd685) {
          return this.comp(_0x8cd685) <= 0x0;
        };
        _0x1d3304.lte = _0x1d3304.lessThanOrEqual;
        _0x1d3304.le = _0x1d3304.lessThanOrEqual;
        _0x1d3304.greaterThan = function (_0x5ce047) {
          return this.comp(_0x5ce047) > 0x0;
        };
        _0x1d3304.gt = _0x1d3304.greaterThan;
        _0x1d3304.greaterThanOrEqual = function (_0x4cef2f) {
          return this.comp(_0x4cef2f) >= 0x0;
        };
        _0x1d3304.gte = _0x1d3304.greaterThanOrEqual;
        _0x1d3304.ge = _0x1d3304.greaterThanOrEqual;
        _0x1d3304.compare = function (_0x2bdf94) {
          if (!(true === (_0x2bdf94 && _0x2bdf94.__isLong__))) {
            _0x2bdf94 = 'number' == typeof _0x2bdf94 ? _0x25ce4a(_0x2bdf94, undefined) : "string" == typeof _0x2bdf94 ? _0x918813(_0x2bdf94, undefined) : new _0x190aab(_0x2bdf94.low, _0x2bdf94.high, _0x2bdf94.unsigned);
          }
          if (this.eq(_0x2bdf94)) {
            return 0x0;
          }
          var _0x4f6ff5 = this.isNegative();
          var _0xea527f = _0x2bdf94.isNegative();
          return _0x4f6ff5 && !_0xea527f ? -0x1 : !_0x4f6ff5 && _0xea527f ? 0x1 : this.unsigned ? _0x2bdf94.high >>> 0x0 > this.high >>> 0x0 || _0x2bdf94.high === this.high && _0x2bdf94.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x2bdf94).isNegative() ? -0x1 : 0x1;
        };
        _0x1d3304.comp = _0x1d3304.compare;
        _0x1d3304.negate = function () {
          return !this.unsigned && this.eq(_0x2a82fb) ? _0x2a82fb : this.not().add(_0x26d2d5);
        };
        _0x1d3304.neg = _0x1d3304.negate;
        _0x1d3304.add = function (_0xe419a4) {
          if (!(true === (_0xe419a4 && _0xe419a4.__isLong__))) {
            _0xe419a4 = 'number' == typeof _0xe419a4 ? _0x25ce4a(_0xe419a4, undefined) : "string" == typeof _0xe419a4 ? _0x918813(_0xe419a4, undefined) : new _0x190aab(_0xe419a4.low, _0xe419a4.high, _0xe419a4.unsigned);
          }
          var _0x47e068 = this.high >>> 0x10;
          var _0x2d2968 = 0xffff & this.high;
          var _0x226797 = this.low >>> 0x10;
          var _0x4977e5 = 0xffff & this.low;
          var _0x2eb02f = _0xe419a4.high >>> 0x10;
          var _0x54a8ff = 0xffff & _0xe419a4.high;
          var _0x53fdcd = _0xe419a4.low >>> 0x10;
          var _0x2c1d64 = 0x0;
          var _0x557cd0 = 0x0;
          var _0x3dbe06 = 0x0;
          var _0x4be2f4 = 0x0;
          _0x3dbe06 += (_0x4be2f4 += _0x4977e5 + (0xffff & _0xe419a4.low)) >>> 0x10;
          _0x557cd0 += (_0x3dbe06 += _0x226797 + _0x53fdcd) >>> 0x10;
          _0x2c1d64 += (_0x557cd0 += _0x2d2968 + _0x54a8ff) >>> 0x10;
          _0x2c1d64 += _0x47e068 + _0x2eb02f;
          return new _0x190aab((_0x3dbe06 &= 0xffff) << 0x10 | (_0x4be2f4 &= 0xffff), (_0x2c1d64 &= 0xffff) << 0x10 | (_0x557cd0 &= 0xffff), this.unsigned);
        };
        _0x1d3304.subtract = function (_0x11a707) {
          if (!(true === (_0x11a707 && _0x11a707.__isLong__))) {
            _0x11a707 = 'number' == typeof _0x11a707 ? _0x25ce4a(_0x11a707, undefined) : "string" == typeof _0x11a707 ? _0x918813(_0x11a707, undefined) : new _0x190aab(_0x11a707.low, _0x11a707.high, _0x11a707.unsigned);
          }
          return this.add(_0x11a707.neg());
        };
        _0x1d3304.sub = _0x1d3304.subtract;
        _0x1d3304.multiply = function (_0x2d56f0) {
          if (this.isZero()) {
            return _0x3d1749;
          }
          if (!(true === (_0x2d56f0 && _0x2d56f0.__isLong__))) {
            _0x2d56f0 = 'number' == typeof _0x2d56f0 ? _0x25ce4a(_0x2d56f0, undefined) : "string" == typeof _0x2d56f0 ? _0x918813(_0x2d56f0, undefined) : new _0x190aab(_0x2d56f0.low, _0x2d56f0.high, _0x2d56f0.unsigned);
          }
          if (_0x458f9e) {
            return new _0x190aab(_0x458f9e.mul(this.low, this.high, _0x2d56f0.low, _0x2d56f0.high), _0x458f9e.get_high(), this.unsigned);
          }
          if (_0x2d56f0.isZero()) {
            return _0x3d1749;
          }
          if (this.eq(_0x2a82fb)) {
            return _0x2d56f0.isOdd() ? _0x2a82fb : _0x3d1749;
          }
          if (_0x2d56f0.eq(_0x2a82fb)) {
            return this.isOdd() ? _0x2a82fb : _0x3d1749;
          }
          if (this.isNegative()) {
            return _0x2d56f0.isNegative() ? this.neg().mul(_0x2d56f0.neg()) : this.neg().mul(_0x2d56f0).neg();
          }
          if (_0x2d56f0.isNegative()) {
            return this.mul(_0x2d56f0.neg()).neg();
          }
          if (this.lt(_0x5321da) && _0x2d56f0.lt(_0x5321da)) {
            return _0x25ce4a(this.toNumber() * _0x2d56f0.toNumber(), this.unsigned);
          }
          var _0x2d6452 = this.high >>> 0x10;
          var _0x16dda0 = 0xffff & this.high;
          var _0x2ef076 = this.low >>> 0x10;
          var _0x27a091 = 0xffff & this.low;
          var _0x1535ce = _0x2d56f0.high >>> 0x10;
          var _0x4d6514 = 0xffff & _0x2d56f0.high;
          var _0x3ea66d = _0x2d56f0.low >>> 0x10;
          var _0xd73827 = 0xffff & _0x2d56f0.low;
          var _0x20b909 = 0x0;
          var _0x2a9494 = 0x0;
          var _0x4bc1dd = 0x0;
          var _0x1aff52 = 0x0;
          _0x4bc1dd += (_0x1aff52 += _0x27a091 * _0xd73827) >>> 0x10;
          _0x2a9494 += (_0x4bc1dd += _0x2ef076 * _0xd73827) >>> 0x10;
          _0x4bc1dd &= 0xffff;
          _0x2a9494 += (_0x4bc1dd += _0x27a091 * _0x3ea66d) >>> 0x10;
          _0x20b909 += (_0x2a9494 += _0x16dda0 * _0xd73827) >>> 0x10;
          _0x2a9494 &= 0xffff;
          _0x20b909 += (_0x2a9494 += _0x2ef076 * _0x3ea66d) >>> 0x10;
          _0x2a9494 &= 0xffff;
          _0x20b909 += (_0x2a9494 += _0x27a091 * _0x4d6514) >>> 0x10;
          _0x20b909 += _0x2d6452 * _0xd73827 + _0x16dda0 * _0x3ea66d + _0x2ef076 * _0x4d6514 + _0x27a091 * _0x1535ce;
          return new _0x190aab((_0x4bc1dd &= 0xffff) << 0x10 | (_0x1aff52 &= 0xffff), (_0x20b909 &= 0xffff) << 0x10 | (_0x2a9494 &= 0xffff), this.unsigned);
        };
        _0x1d3304.mul = _0x1d3304.multiply;
        _0x1d3304.divide = function (_0x503047) {
          if (!(true === (_0x503047 && _0x503047.__isLong__))) {
            _0x503047 = 'number' == typeof _0x503047 ? _0x25ce4a(_0x503047, undefined) : "string" == typeof _0x503047 ? _0x918813(_0x503047, undefined) : new _0x190aab(_0x503047.low, _0x503047.high, _0x503047.unsigned);
          }
          if (_0x503047.isZero()) {
            throw Error("division by zero");
          }
          var _0x420a8b;
          var _0x508ad7;
          var _0x5d805f;
          if (_0x458f9e) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x503047.low || -0x1 !== _0x503047.high ? new _0x190aab((this.unsigned ? _0x458f9e.div_u : _0x458f9e.div_s)(this.low, this.high, _0x503047.low, _0x503047.high), _0x458f9e.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x5ce04c : _0x3d1749;
          }
          if (this.unsigned) {
            if (!_0x503047.unsigned) {
              _0x503047 = _0x503047.toUnsigned();
            }
            if (_0x503047.gt(this)) {
              return _0x5ce04c;
            }
            if (_0x503047.gt(this.shru(0x1))) {
              return _0x540e47;
            }
            _0x5d805f = _0x5ce04c;
          } else {
            if (this.eq(_0x2a82fb)) {
              return _0x503047.eq(_0x26d2d5) || _0x503047.eq(_0x193f49) ? _0x2a82fb : _0x503047.eq(_0x2a82fb) ? _0x26d2d5 : (_0x420a8b = this.shr(0x1).div(_0x503047).shl(0x1)).eq(_0x3d1749) ? _0x503047.isNegative() ? _0x26d2d5 : _0x193f49 : (_0x508ad7 = this.sub(_0x503047.mul(_0x420a8b)), _0x5d805f = _0x420a8b.add(_0x508ad7.div(_0x503047)));
            }
            if (_0x503047.eq(_0x2a82fb)) {
              return this.unsigned ? _0x5ce04c : _0x3d1749;
            }
            if (this.isNegative()) {
              return _0x503047.isNegative() ? this.neg().div(_0x503047.neg()) : this.neg().div(_0x503047).neg();
            }
            if (_0x503047.isNegative()) {
              return this.div(_0x503047.neg()).neg();
            }
            _0x5d805f = _0x3d1749;
          }
          for (_0x508ad7 = this; _0x508ad7.gte(_0x503047);) {
            _0x420a8b = Math.max(0x1, Math.floor(_0x508ad7.toNumber() / _0x503047.toNumber()));
            var _0x1da740 = Math.ceil(Math.log(_0x420a8b) / Math.LN2);
            var _0x464458 = _0x1da740 <= 0x30 ? 0x1 : _0x544b18(0x2, _0x1da740 - 0x30);
            var _0x1f6b58 = _0x25ce4a(_0x420a8b);
            for (var _0x5239f9 = _0x1f6b58.mul(_0x503047); _0x5239f9.isNegative() || _0x5239f9.gt(_0x508ad7);) {
              _0x5239f9 = (_0x1f6b58 = _0x25ce4a(_0x420a8b -= _0x464458, this.unsigned)).mul(_0x503047);
            }
            if (_0x1f6b58.isZero()) {
              _0x1f6b58 = _0x26d2d5;
            }
            _0x5d805f = _0x5d805f.add(_0x1f6b58);
            _0x508ad7 = _0x508ad7.sub(_0x5239f9);
          }
          return _0x5d805f;
        };
        _0x1d3304.div = _0x1d3304.divide;
        _0x1d3304.modulo = function (_0xf7dc3c) {
          if (!(true === (_0xf7dc3c && _0xf7dc3c.__isLong__))) {
            _0xf7dc3c = 'number' == typeof _0xf7dc3c ? _0x25ce4a(_0xf7dc3c, undefined) : "string" == typeof _0xf7dc3c ? _0x918813(_0xf7dc3c, undefined) : new _0x190aab(_0xf7dc3c.low, _0xf7dc3c.high, _0xf7dc3c.unsigned);
          }
          return _0x458f9e ? new _0x190aab((this.unsigned ? _0x458f9e.rem_u : _0x458f9e.rem_s)(this.low, this.high, _0xf7dc3c.low, _0xf7dc3c.high), _0x458f9e.get_high(), this.unsigned) : this.sub(this.div(_0xf7dc3c).mul(_0xf7dc3c));
        };
        _0x1d3304.mod = _0x1d3304.modulo;
        _0x1d3304.rem = _0x1d3304.modulo;
        _0x1d3304.not = function () {
          return new _0x190aab(~this.low, ~this.high, this.unsigned);
        };
        _0x1d3304.and = function (_0x4e24f6) {
          if (!(true === (_0x4e24f6 && _0x4e24f6.__isLong__))) {
            _0x4e24f6 = 'number' == typeof _0x4e24f6 ? _0x25ce4a(_0x4e24f6, undefined) : "string" == typeof _0x4e24f6 ? _0x918813(_0x4e24f6, undefined) : new _0x190aab(_0x4e24f6.low, _0x4e24f6.high, _0x4e24f6.unsigned);
          }
          return new _0x190aab(this.low & _0x4e24f6.low, this.high & _0x4e24f6.high, this.unsigned);
        };
        _0x1d3304.or = function (_0x2b55c3) {
          if (!(true === (_0x2b55c3 && _0x2b55c3.__isLong__))) {
            _0x2b55c3 = 'number' == typeof _0x2b55c3 ? _0x25ce4a(_0x2b55c3, undefined) : "string" == typeof _0x2b55c3 ? _0x918813(_0x2b55c3, undefined) : new _0x190aab(_0x2b55c3.low, _0x2b55c3.high, _0x2b55c3.unsigned);
          }
          return new _0x190aab(this.low | _0x2b55c3.low, this.high | _0x2b55c3.high, this.unsigned);
        };
        _0x1d3304.xor = function (_0x24ef0d) {
          if (!(true === (_0x24ef0d && _0x24ef0d.__isLong__))) {
            _0x24ef0d = 'number' == typeof _0x24ef0d ? _0x25ce4a(_0x24ef0d, undefined) : "string" == typeof _0x24ef0d ? _0x918813(_0x24ef0d, undefined) : new _0x190aab(_0x24ef0d.low, _0x24ef0d.high, _0x24ef0d.unsigned);
          }
          return new _0x190aab(this.low ^ _0x24ef0d.low, this.high ^ _0x24ef0d.high, this.unsigned);
        };
        _0x1d3304.shiftLeft = function (_0x4957f5) {
          if (true === (_0x4957f5 && _0x4957f5.__isLong__)) {
            _0x4957f5 = _0x4957f5.toInt();
          }
          return 0x0 == (_0x4957f5 &= 0x3f) ? this : _0x4957f5 < 0x20 ? new _0x190aab(this.low << _0x4957f5, this.high << _0x4957f5 | this.low >>> 0x20 - _0x4957f5, this.unsigned) : new _0x190aab(0x0, this.low << _0x4957f5 - 0x20, this.unsigned);
        };
        _0x1d3304.shl = _0x1d3304.shiftLeft;
        _0x1d3304.shiftRight = function (_0x387eed) {
          if (true === (_0x387eed && _0x387eed.__isLong__)) {
            _0x387eed = _0x387eed.toInt();
          }
          return 0x0 == (_0x387eed &= 0x3f) ? this : _0x387eed < 0x20 ? new _0x190aab(this.low >>> _0x387eed | this.high << 0x20 - _0x387eed, this.high >> _0x387eed, this.unsigned) : new _0x190aab(this.high >> _0x387eed - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x1d3304.shr = _0x1d3304.shiftRight;
        _0x1d3304.shiftRightUnsigned = function (_0x413319) {
          if (true === (_0x413319 && _0x413319.__isLong__)) {
            _0x413319 = _0x413319.toInt();
          }
          if (0x0 === (_0x413319 &= 0x3f)) {
            return this;
          }
          var _0x38e4b7 = this.high;
          return _0x413319 < 0x20 ? new _0x190aab(this.low >>> _0x413319 | _0x38e4b7 << 0x20 - _0x413319, _0x38e4b7 >>> _0x413319, this.unsigned) : new _0x190aab(0x20 === _0x413319 ? _0x38e4b7 : _0x38e4b7 >>> _0x413319 - 0x20, 0x0, this.unsigned);
        };
        _0x1d3304.shru = _0x1d3304.shiftRightUnsigned;
        _0x1d3304.shr_u = _0x1d3304.shiftRightUnsigned;
        _0x1d3304.toSigned = function () {
          return this.unsigned ? new _0x190aab(this.low, this.high, false) : this;
        };
        _0x1d3304.toUnsigned = function () {
          return this.unsigned ? this : new _0x190aab(this.low, this.high, true);
        };
        _0x1d3304.toBytes = function (_0x6f7aca) {
          return _0x6f7aca ? this.toBytesLE() : this.toBytesBE();
        };
        _0x1d3304.toBytesLE = function () {
          var _0x3931a3 = this.high;
          var _0x5679e3 = this.low;
          return [0xff & _0x5679e3, _0x5679e3 >>> 0x8 & 0xff, _0x5679e3 >>> 0x10 & 0xff, _0x5679e3 >>> 0x18, 0xff & _0x3931a3, _0x3931a3 >>> 0x8 & 0xff, _0x3931a3 >>> 0x10 & 0xff, _0x3931a3 >>> 0x18];
        };
        _0x1d3304.toBytesBE = function () {
          var _0x3d63bb = this.high;
          var _0x20a144 = this.low;
          return [_0x3d63bb >>> 0x18, _0x3d63bb >>> 0x10 & 0xff, _0x3d63bb >>> 0x8 & 0xff, 0xff & _0x3d63bb, _0x20a144 >>> 0x18, _0x20a144 >>> 0x10 & 0xff, _0x20a144 >>> 0x8 & 0xff, 0xff & _0x20a144];
        };
        _0x190aab.fromBytes = function (_0x58e7b2, _0x4ab4de, _0x101e2c) {
          return _0x101e2c ? _0x190aab.fromBytesLE(_0x58e7b2, _0x4ab4de) : _0x190aab.fromBytesBE(_0x58e7b2, _0x4ab4de);
        };
        _0x190aab.fromBytesLE = function (_0xec2184, _0x5a3721) {
          return new _0x190aab(_0xec2184[0x0] | _0xec2184[0x1] << 0x8 | _0xec2184[0x2] << 0x10 | _0xec2184[0x3] << 0x18, _0xec2184[0x4] | _0xec2184[0x5] << 0x8 | _0xec2184[0x6] << 0x10 | _0xec2184[0x7] << 0x18, _0x5a3721);
        };
        _0x190aab.fromBytesBE = function (_0x353dab, _0x49c4d2) {
          return new _0x190aab(_0x353dab[0x4] << 0x18 | _0x353dab[0x5] << 0x10 | _0x353dab[0x6] << 0x8 | _0x353dab[0x7], _0x353dab[0x0] << 0x18 | _0x353dab[0x1] << 0x10 | _0x353dab[0x2] << 0x8 | _0x353dab[0x3], _0x49c4d2);
        };
        _0x373f00 = _0x4f4e69.exports;
      }, {});
      _0x2e006d.require("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x2e006d.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js', function (_0x4f5614, _0x527c9e, _0x520c51, _0x132f55, _0x473df5) {
        _0x520c51.exports = function (_0x2f59ec, _0x251656) {
          var _0x24fab5 = new Array(arguments.length - 0x1);
          var _0x56a9b8 = 0x0;
          var _0x48c016 = 0x2;
          var _0x4ee2db = true;
          for (; _0x48c016 < arguments.length;) {
            _0x24fab5[_0x56a9b8++] = arguments[_0x48c016++];
          }
          return new Promise(function (_0x25b7b6, _0x40a6e8) {
            _0x24fab5[_0x56a9b8] = function (_0x4e9efe) {
              if (_0x4ee2db) {
                _0x4ee2db = false;
                if (_0x4e9efe) {
                  _0x40a6e8(_0x4e9efe);
                } else {
                  var _0x34567e = new Array(arguments.length - 0x1);
                  for (var _0x1de075 = 0x0; _0x1de075 < _0x34567e.length;) {
                    _0x34567e[_0x1de075++] = arguments[_0x1de075];
                  }
                  _0x25b7b6.apply(null, _0x34567e);
                }
              }
            };
            try {
              _0x2f59ec.apply(_0x251656 || null, _0x24fab5);
            } catch (_0x2d8a75) {
              if (_0x4ee2db) {
                _0x4ee2db = false;
                _0x40a6e8(_0x2d8a75);
              }
            }
          });
        };
        _0x520c51.exports;
      }, {});
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (_0x230906, _0x1bcecb, _0x195ce4, _0x21f535, _0x4e8180) {
        _0x230906.length = function (_0x48f09b) {
          var _0x44ec06 = _0x48f09b.length;
          if (!_0x44ec06) {
            return 0x0;
          }
          for (var _0x3f09e1 = 0x0; --_0x44ec06 % 0x4 > 0x1 && '=' === _0x48f09b.charAt(_0x44ec06);) {
            ++_0x3f09e1;
          }
          return Math.ceil(0x3 * _0x48f09b.length) / 0x4 - _0x3f09e1;
        };
        var _0x257c29 = new Array(0x40);
        var _0x2c92c4 = new Array(0x7b);
        for (var _0x4c6c90 = 0x0; _0x4c6c90 < 0x40;) {
          _0x2c92c4[_0x257c29[_0x4c6c90] = _0x4c6c90 < 0x1a ? _0x4c6c90 + 0x41 : _0x4c6c90 < 0x34 ? _0x4c6c90 + 0x47 : _0x4c6c90 < 0x3e ? _0x4c6c90 - 0x4 : _0x4c6c90 - 0x3b | 0x2b] = _0x4c6c90++;
        }
        _0x230906.encode = function (_0x197732, _0x2c3820, _0x508a40) {
          var _0x1ac65e;
          var _0x3ea0a5 = null;
          var _0x509c46 = [];
          var _0x3579f6 = 0x0;
          for (var _0x2fc5d8 = 0x0; _0x2c3820 < _0x508a40;) {
            var _0x6ed3da = _0x197732[_0x2c3820++];
            switch (_0x2fc5d8) {
              case 0x0:
                _0x509c46[_0x3579f6++] = _0x257c29[_0x6ed3da >> 0x2];
                _0x1ac65e = (0x3 & _0x6ed3da) << 0x4;
                _0x2fc5d8 = 0x1;
                break;
              case 0x1:
                _0x509c46[_0x3579f6++] = _0x257c29[_0x1ac65e | _0x6ed3da >> 0x4];
                _0x1ac65e = (0xf & _0x6ed3da) << 0x2;
                _0x2fc5d8 = 0x2;
                break;
              case 0x2:
                _0x509c46[_0x3579f6++] = _0x257c29[_0x1ac65e | _0x6ed3da >> 0x6];
                _0x509c46[_0x3579f6++] = _0x257c29[0x3f & _0x6ed3da];
                _0x2fc5d8 = 0x0;
            }
            if (_0x3579f6 > 0x1fff) {
              (_0x3ea0a5 || (_0x3ea0a5 = [])).push(String.fromCharCode.apply(String, _0x509c46));
              _0x3579f6 = 0x0;
            }
          }
          if (_0x2fc5d8) {
            _0x509c46[_0x3579f6++] = _0x257c29[_0x1ac65e];
            _0x509c46[_0x3579f6++] = 0x3d;
            if (0x1 === _0x2fc5d8) {
              _0x509c46[_0x3579f6++] = 0x3d;
            }
          }
          return _0x3ea0a5 ? (_0x3579f6 && _0x3ea0a5.push(String.fromCharCode.apply(String, _0x509c46.slice(0x0, _0x3579f6))), _0x3ea0a5.join('')) : String.fromCharCode.apply(String, _0x509c46.slice(0x0, _0x3579f6));
        };
        _0x230906.decode = function (_0x5211db, _0x5932c3, _0x106921) {
          var _0x1e985b;
          var _0x585ebf = _0x106921;
          var _0x575c41 = 0x0;
          for (var _0xd13b15 = 0x0; _0xd13b15 < _0x5211db.length;) {
            var _0x128e28 = _0x5211db.charCodeAt(_0xd13b15++);
            if (0x3d === _0x128e28 && _0x575c41 > 0x1) {
              break;
            }
            if (undefined === (_0x128e28 = _0x2c92c4[_0x128e28])) {
              throw Error("invalid encoding");
            }
            switch (_0x575c41) {
              case 0x0:
                _0x1e985b = _0x128e28;
                _0x575c41 = 0x1;
                break;
              case 0x1:
                _0x5932c3[_0x106921++] = _0x1e985b << 0x2 | (0x30 & _0x128e28) >> 0x4;
                _0x1e985b = _0x128e28;
                _0x575c41 = 0x2;
                break;
              case 0x2:
                _0x5932c3[_0x106921++] = (0xf & _0x1e985b) << 0x4 | (0x3c & _0x128e28) >> 0x2;
                _0x1e985b = _0x128e28;
                _0x575c41 = 0x3;
                break;
              case 0x3:
                _0x5932c3[_0x106921++] = (0x3 & _0x1e985b) << 0x6 | _0x128e28;
                _0x575c41 = 0x0;
            }
          }
          if (0x1 === _0x575c41) {
            throw Error("invalid encoding");
          }
          return _0x106921 - _0x585ebf;
        };
        _0x230906.test = function (_0x52379b) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x52379b);
        };
        _0x195ce4.exports;
      }, {});
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x5732cd, _0x37e0dd, _0x88a4e7, _0x42ce31, _0x266764) {
        function _0x3c961a() {
          this._listeners = {};
        }
        _0x88a4e7.exports = _0x3c961a;
        _0x3c961a.prototype.on = function (_0x55f370, _0x48e044, _0x39caed) {
          (this._listeners[_0x55f370] || (this._listeners[_0x55f370] = [])).push({
            'fn': _0x48e044,
            'ctx': _0x39caed || this
          });
          return this;
        };
        _0x3c961a.prototype.off = function (_0xa585a1, _0x3feac6) {
          if (undefined === _0xa585a1) {
            this._listeners = {};
          } else {
            if (undefined === _0x3feac6) {
              this._listeners[_0xa585a1] = [];
            } else {
              var _0x44f27c = this._listeners[_0xa585a1];
              for (var _0x5b037f = 0x0; _0x5b037f < _0x44f27c.length;) {
                if (_0x44f27c[_0x5b037f].fn === _0x3feac6) {
                  _0x44f27c.splice(_0x5b037f, 0x1);
                } else {
                  ++_0x5b037f;
                }
              }
            }
          }
          return this;
        };
        _0x3c961a.prototype.emit = function (_0x103dfa) {
          var _0x5573e2 = this._listeners[_0x103dfa];
          if (_0x5573e2) {
            var _0xf6a916 = [];
            for (var _0x13c8a6 = 0x1; _0x13c8a6 < arguments.length;) {
              _0xf6a916.push(arguments[_0x13c8a6++]);
            }
            for (_0x13c8a6 = 0x0; _0x13c8a6 < _0x5573e2.length;) {
              _0x5573e2[_0x13c8a6].fn.apply(_0x5573e2[_0x13c8a6++].ctx, _0xf6a916);
            }
          }
          return this;
        };
        _0x88a4e7.exports;
      }, {});
      _0x2e006d.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/float/index.js', function (_0x42f860, _0x171124, _0x42e963, _0x367b32, _0x4b9e67) {
        function _0x19d937(_0x38e2ae) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var _0x18730b = new Float32Array([-0x0]);
              var _0x38b929 = new Uint8Array(_0x18730b.buffer);
              var _0x18d4a4 = 0x80 === _0x38b929[0x3];
              function _0x5087c9(_0x37d4dc, _0x421301, _0x439c16) {
                _0x18730b[0x0] = _0x37d4dc;
                _0x421301[_0x439c16] = _0x38b929[0x0];
                _0x421301[_0x439c16 + 0x1] = _0x38b929[0x1];
                _0x421301[_0x439c16 + 0x2] = _0x38b929[0x2];
                _0x421301[_0x439c16 + 0x3] = _0x38b929[0x3];
              }
              function _0x42f692(_0x5cd47a, _0x4d4eaa, _0x4f2e4e) {
                _0x18730b[0x0] = _0x5cd47a;
                _0x4d4eaa[_0x4f2e4e] = _0x38b929[0x3];
                _0x4d4eaa[_0x4f2e4e + 0x1] = _0x38b929[0x2];
                _0x4d4eaa[_0x4f2e4e + 0x2] = _0x38b929[0x1];
                _0x4d4eaa[_0x4f2e4e + 0x3] = _0x38b929[0x0];
              }
              function _0x1c57c6(_0x3c0f45, _0x499775) {
                _0x38b929[0x0] = _0x3c0f45[_0x499775];
                _0x38b929[0x1] = _0x3c0f45[_0x499775 + 0x1];
                _0x38b929[0x2] = _0x3c0f45[_0x499775 + 0x2];
                _0x38b929[0x3] = _0x3c0f45[_0x499775 + 0x3];
                return _0x18730b[0x0];
              }
              function _0x49c72a(_0xa1941f, _0x1419b5) {
                _0x38b929[0x3] = _0xa1941f[_0x1419b5];
                _0x38b929[0x2] = _0xa1941f[_0x1419b5 + 0x1];
                _0x38b929[0x1] = _0xa1941f[_0x1419b5 + 0x2];
                _0x38b929[0x0] = _0xa1941f[_0x1419b5 + 0x3];
                return _0x18730b[0x0];
              }
              _0x38e2ae.writeFloatLE = _0x18d4a4 ? _0x5087c9 : _0x42f692;
              _0x38e2ae.writeFloatBE = _0x18d4a4 ? _0x42f692 : _0x5087c9;
              _0x38e2ae.readFloatLE = _0x18d4a4 ? _0x1c57c6 : _0x49c72a;
              _0x38e2ae.readFloatBE = _0x18d4a4 ? _0x49c72a : _0x1c57c6;
            })();
          } else {
            (function () {
              function _0x5bcb40(_0x2b20e4, _0x27baa2, _0x52f2d7, _0x25b73b) {
                var _0x310589 = _0x27baa2 < 0x0 ? 0x1 : 0x0;
                if (_0x310589) {
                  _0x27baa2 = -_0x27baa2;
                }
                if (0x0 === _0x27baa2) {
                  _0x2b20e4(0x1 / _0x27baa2 > 0x0 ? 0x0 : 0x80000000, _0x52f2d7, _0x25b73b);
                } else {
                  if (isNaN(_0x27baa2)) {
                    _0x2b20e4(0x7fc00000, _0x52f2d7, _0x25b73b);
                  } else {
                    if (_0x27baa2 > 0xffffff00000000000000000000000000) {
                      _0x2b20e4((_0x310589 << 0x1f | 0x7f800000) >>> 0x0, _0x52f2d7, _0x25b73b);
                    } else {
                      if (_0x27baa2 < 1.1754943508222875e-38) {
                        _0x2b20e4((_0x310589 << 0x1f | Math.round(_0x27baa2 / 1.401298464324817e-45)) >>> 0x0, _0x52f2d7, _0x25b73b);
                      } else {
                        var _0x3a6f51 = Math.floor(Math.log(_0x27baa2) / Math.LN2);
                        _0x2b20e4((_0x310589 << 0x1f | _0x3a6f51 + 0x7f << 0x17 | 0x7fffff & Math.round(_0x27baa2 * Math.pow(0x2, -_0x3a6f51) * 0x800000)) >>> 0x0, _0x52f2d7, _0x25b73b);
                      }
                    }
                  }
                }
              }
              function _0x125217(_0x3943b8, _0x99b1ca, _0xb3f3d5) {
                var _0x2d6167 = _0x3943b8(_0x99b1ca, _0xb3f3d5);
                var _0x141be1 = 0x2 * (_0x2d6167 >> 0x1f) + 0x1;
                var _0x334f76 = _0x2d6167 >>> 0x17 & 0xff;
                var _0x9ad79b = 0x7fffff & _0x2d6167;
                return 0xff === _0x334f76 ? _0x9ad79b ? NaN : _0x141be1 * Infinity : 0x0 === _0x334f76 ? 1.401298464324817e-45 * _0x141be1 * _0x9ad79b : _0x141be1 * Math.pow(0x2, _0x334f76 - 0x96) * (_0x9ad79b + 0x800000);
              }
              _0x38e2ae.writeFloatLE = _0x5bcb40.bind(null, _0x3a2c17);
              _0x38e2ae.writeFloatBE = _0x5bcb40.bind(null, _0x2a3dca);
              _0x38e2ae.readFloatLE = _0x125217.bind(null, _0x4ffc1d);
              _0x38e2ae.readFloatBE = _0x125217.bind(null, _0x5e3c60);
            })();
          }
          if ("undefined" != typeof Float64Array) {
            (function () {
              var _0x252706 = new Float64Array([-0x0]);
              var _0x5976c4 = new Uint8Array(_0x252706.buffer);
              var _0x12894c = 0x80 === _0x5976c4[0x7];
              function _0x311e60(_0x507142, _0x159683, _0x6e3af1) {
                _0x252706[0x0] = _0x507142;
                _0x159683[_0x6e3af1] = _0x5976c4[0x0];
                _0x159683[_0x6e3af1 + 0x1] = _0x5976c4[0x1];
                _0x159683[_0x6e3af1 + 0x2] = _0x5976c4[0x2];
                _0x159683[_0x6e3af1 + 0x3] = _0x5976c4[0x3];
                _0x159683[_0x6e3af1 + 0x4] = _0x5976c4[0x4];
                _0x159683[_0x6e3af1 + 0x5] = _0x5976c4[0x5];
                _0x159683[_0x6e3af1 + 0x6] = _0x5976c4[0x6];
                _0x159683[_0x6e3af1 + 0x7] = _0x5976c4[0x7];
              }
              function _0x58d864(_0x227b0d, _0xd3a95b, _0x6f3a70) {
                _0x252706[0x0] = _0x227b0d;
                _0xd3a95b[_0x6f3a70] = _0x5976c4[0x7];
                _0xd3a95b[_0x6f3a70 + 0x1] = _0x5976c4[0x6];
                _0xd3a95b[_0x6f3a70 + 0x2] = _0x5976c4[0x5];
                _0xd3a95b[_0x6f3a70 + 0x3] = _0x5976c4[0x4];
                _0xd3a95b[_0x6f3a70 + 0x4] = _0x5976c4[0x3];
                _0xd3a95b[_0x6f3a70 + 0x5] = _0x5976c4[0x2];
                _0xd3a95b[_0x6f3a70 + 0x6] = _0x5976c4[0x1];
                _0xd3a95b[_0x6f3a70 + 0x7] = _0x5976c4[0x0];
              }
              function _0x2ae51d(_0x4c18bb, _0x47309f) {
                _0x5976c4[0x0] = _0x4c18bb[_0x47309f];
                _0x5976c4[0x1] = _0x4c18bb[_0x47309f + 0x1];
                _0x5976c4[0x2] = _0x4c18bb[_0x47309f + 0x2];
                _0x5976c4[0x3] = _0x4c18bb[_0x47309f + 0x3];
                _0x5976c4[0x4] = _0x4c18bb[_0x47309f + 0x4];
                _0x5976c4[0x5] = _0x4c18bb[_0x47309f + 0x5];
                _0x5976c4[0x6] = _0x4c18bb[_0x47309f + 0x6];
                _0x5976c4[0x7] = _0x4c18bb[_0x47309f + 0x7];
                return _0x252706[0x0];
              }
              function _0x566e49(_0x28c0f9, _0x3738bc) {
                _0x5976c4[0x7] = _0x28c0f9[_0x3738bc];
                _0x5976c4[0x6] = _0x28c0f9[_0x3738bc + 0x1];
                _0x5976c4[0x5] = _0x28c0f9[_0x3738bc + 0x2];
                _0x5976c4[0x4] = _0x28c0f9[_0x3738bc + 0x3];
                _0x5976c4[0x3] = _0x28c0f9[_0x3738bc + 0x4];
                _0x5976c4[0x2] = _0x28c0f9[_0x3738bc + 0x5];
                _0x5976c4[0x1] = _0x28c0f9[_0x3738bc + 0x6];
                _0x5976c4[0x0] = _0x28c0f9[_0x3738bc + 0x7];
                return _0x252706[0x0];
              }
              _0x38e2ae.writeDoubleLE = _0x12894c ? _0x311e60 : _0x58d864;
              _0x38e2ae.writeDoubleBE = _0x12894c ? _0x58d864 : _0x311e60;
              _0x38e2ae.readDoubleLE = _0x12894c ? _0x2ae51d : _0x566e49;
              _0x38e2ae.readDoubleBE = _0x12894c ? _0x566e49 : _0x2ae51d;
            })();
          } else {
            (function () {
              function _0x56b9d3(_0x2dc734, _0x58fbb5, _0x421852, _0x5d8216, _0xa7699f, _0x54fb45) {
                var _0x50267a = _0x5d8216 < 0x0 ? 0x1 : 0x0;
                if (_0x50267a) {
                  _0x5d8216 = -_0x5d8216;
                }
                if (0x0 === _0x5d8216) {
                  _0x2dc734(0x0, _0xa7699f, _0x54fb45 + _0x58fbb5);
                  _0x2dc734(0x1 / _0x5d8216 > 0x0 ? 0x0 : 0x80000000, _0xa7699f, _0x54fb45 + _0x421852);
                } else {
                  if (isNaN(_0x5d8216)) {
                    _0x2dc734(0x0, _0xa7699f, _0x54fb45 + _0x58fbb5);
                    _0x2dc734(0x7ff80000, _0xa7699f, _0x54fb45 + _0x421852);
                  } else {
                    if (_0x5d8216 > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x2dc734(0x0, _0xa7699f, _0x54fb45 + _0x58fbb5);
                      _0x2dc734((_0x50267a << 0x1f | 0x7ff00000) >>> 0x0, _0xa7699f, _0x54fb45 + _0x421852);
                    } else {
                      var _0xf849fe;
                      if (_0x5d8216 < 2.2250738585072014e-308) {
                        _0x2dc734((_0xf849fe = _0x5d8216 / 5e-324) >>> 0x0, _0xa7699f, _0x54fb45 + _0x58fbb5);
                        _0x2dc734((_0x50267a << 0x1f | _0xf849fe / 0x100000000) >>> 0x0, _0xa7699f, _0x54fb45 + _0x421852);
                      } else {
                        var _0x7c680f = Math.floor(Math.log(_0x5d8216) / Math.LN2);
                        if (0x400 === _0x7c680f) {
                          _0x7c680f = 0x3ff;
                        }
                        _0x2dc734(0x10000000000000 * (_0xf849fe = _0x5d8216 * Math.pow(0x2, -_0x7c680f)) >>> 0x0, _0xa7699f, _0x54fb45 + _0x58fbb5);
                        _0x2dc734((_0x50267a << 0x1f | _0x7c680f + 0x3ff << 0x14 | 0x100000 * _0xf849fe & 0xfffff) >>> 0x0, _0xa7699f, _0x54fb45 + _0x421852);
                      }
                    }
                  }
                }
              }
              function _0x2aac0f(_0x42ff63, _0x322b5e, _0x162440, _0x235868, _0x50936e) {
                var _0x3204b9 = _0x42ff63(_0x235868, _0x50936e + _0x322b5e);
                var _0x2c4089 = _0x42ff63(_0x235868, _0x50936e + _0x162440);
                var _0x392438 = 0x2 * (_0x2c4089 >> 0x1f) + 0x1;
                var _0x429383 = _0x2c4089 >>> 0x14 & 0x7ff;
                var _0x5b9bc9 = 0x100000000 * (0xfffff & _0x2c4089) + _0x3204b9;
                return 0x7ff === _0x429383 ? _0x5b9bc9 ? NaN : _0x392438 * Infinity : 0x0 === _0x429383 ? 5e-324 * _0x392438 * _0x5b9bc9 : _0x392438 * Math.pow(0x2, _0x429383 - 0x433) * (_0x5b9bc9 + 0x10000000000000);
              }
              _0x38e2ae.writeDoubleLE = _0x56b9d3.bind(null, _0x3a2c17, 0x0, 0x4);
              _0x38e2ae.writeDoubleBE = _0x56b9d3.bind(null, _0x2a3dca, 0x4, 0x0);
              _0x38e2ae.readDoubleLE = _0x2aac0f.bind(null, _0x4ffc1d, 0x0, 0x4);
              _0x38e2ae.readDoubleBE = _0x2aac0f.bind(null, _0x5e3c60, 0x4, 0x0);
            })();
          }
          return _0x38e2ae;
        }
        function _0x3a2c17(_0x17eda7, _0x4d2993, _0x51a6fc) {
          _0x4d2993[_0x51a6fc] = 0xff & _0x17eda7;
          _0x4d2993[_0x51a6fc + 0x1] = _0x17eda7 >>> 0x8 & 0xff;
          _0x4d2993[_0x51a6fc + 0x2] = _0x17eda7 >>> 0x10 & 0xff;
          _0x4d2993[_0x51a6fc + 0x3] = _0x17eda7 >>> 0x18;
        }
        function _0x2a3dca(_0x1d76dc, _0x1a789e, _0x11c20a) {
          _0x1a789e[_0x11c20a] = _0x1d76dc >>> 0x18;
          _0x1a789e[_0x11c20a + 0x1] = _0x1d76dc >>> 0x10 & 0xff;
          _0x1a789e[_0x11c20a + 0x2] = _0x1d76dc >>> 0x8 & 0xff;
          _0x1a789e[_0x11c20a + 0x3] = 0xff & _0x1d76dc;
        }
        function _0x4ffc1d(_0x22c95e, _0x1dffe5) {
          return (_0x22c95e[_0x1dffe5] | _0x22c95e[_0x1dffe5 + 0x1] << 0x8 | _0x22c95e[_0x1dffe5 + 0x2] << 0x10 | _0x22c95e[_0x1dffe5 + 0x3] << 0x18) >>> 0x0;
        }
        function _0x5e3c60(_0x5a3ab0, _0x56340e) {
          return (_0x5a3ab0[_0x56340e] << 0x18 | _0x5a3ab0[_0x56340e + 0x1] << 0x10 | _0x5a3ab0[_0x56340e + 0x2] << 0x8 | _0x5a3ab0[_0x56340e + 0x3]) >>> 0x0;
        }
        _0x42e963.exports = _0x19d937(_0x19d937);
        _0x42e963.exports;
        _0x42e963.exports.writeFloatLE;
        _0x42e963.exports.writeFloatBE;
        _0x42e963.exports.readFloatLE;
        _0x42e963.exports.readFloatBE;
        _0x42e963.exports.writeDoubleLE;
        _0x42e963.exports.writeDoubleBE;
        _0x42e963.exports.readDoubleLE;
        _0x42e963.exports.readDoubleBE;
      }, {});
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (_0x365340, _0x30d27e, _0x2fef99, _0x5847b3, _0x25df32) {
        function _0x4cb6df(_0x528b89) {
          try {
            var _0x1f4a41 = eval('quire'.replace(/^/, 're'))(_0x528b89);
            if (_0x1f4a41 && (_0x1f4a41.length || Object.keys(_0x1f4a41).length)) {
              return _0x1f4a41;
            }
          } catch (_0x1af1b5) {}
          return null;
        }
        _0x2fef99.exports = _0x4cb6df;
        _0x2fef99.exports;
      }, {});
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js", function (_0x4e840c, _0x5427b5, _0x998393, _0xb6e8cc, _0x39df09) {
        _0x4e840c.length = function (_0x137dd9) {
          var _0x10972e = 0x0;
          var _0x48ce78 = 0x0;
          for (var _0x2b8c1e = 0x0; _0x2b8c1e < _0x137dd9.length; ++_0x2b8c1e) {
            if ((_0x48ce78 = _0x137dd9.charCodeAt(_0x2b8c1e)) < 0x80) {
              _0x10972e += 0x1;
            } else if (_0x48ce78 < 0x800) {
              _0x10972e += 0x2;
            } else if (0xd800 == (0xfc00 & _0x48ce78) && 0xdc00 == (0xfc00 & _0x137dd9.charCodeAt(_0x2b8c1e + 0x1))) {
              ++_0x2b8c1e;
              _0x10972e += 0x4;
            } else {
              _0x10972e += 0x3;
            }
          }
          return _0x10972e;
        };
        _0x4e840c.read = function (_0x377f6b, _0x477909, _0x36c75b) {
          if (_0x36c75b - _0x477909 < 0x1) {
            return '';
          }
          var _0x3576e3;
          var _0xb30975 = null;
          var _0x219800 = [];
          for (var _0x450be0 = 0x0; _0x477909 < _0x36c75b;) {
            if ((_0x3576e3 = _0x377f6b[_0x477909++]) < 0x80) {
              _0x219800[_0x450be0++] = _0x3576e3;
            } else if (_0x3576e3 > 0xbf && _0x3576e3 < 0xe0) {
              _0x219800[_0x450be0++] = (0x1f & _0x3576e3) << 0x6 | 0x3f & _0x377f6b[_0x477909++];
            } else if (_0x3576e3 > 0xef && _0x3576e3 < 0x16d) {
              _0x3576e3 = ((0x7 & _0x3576e3) << 0x12 | (0x3f & _0x377f6b[_0x477909++]) << 0xc | (0x3f & _0x377f6b[_0x477909++]) << 0x6 | 0x3f & _0x377f6b[_0x477909++]) - 0x10000;
              _0x219800[_0x450be0++] = 0xd800 + (_0x3576e3 >> 0xa);
              _0x219800[_0x450be0++] = 0xdc00 + (0x3ff & _0x3576e3);
            } else {
              _0x219800[_0x450be0++] = (0xf & _0x3576e3) << 0xc | (0x3f & _0x377f6b[_0x477909++]) << 0x6 | 0x3f & _0x377f6b[_0x477909++];
            }
            if (_0x450be0 > 0x1fff) {
              (_0xb30975 || (_0xb30975 = [])).push(String.fromCharCode.apply(String, _0x219800));
              _0x450be0 = 0x0;
            }
          }
          return _0xb30975 ? (_0x450be0 && _0xb30975.push(String.fromCharCode.apply(String, _0x219800.slice(0x0, _0x450be0))), _0xb30975.join('')) : String.fromCharCode.apply(String, _0x219800.slice(0x0, _0x450be0));
        };
        _0x4e840c.write = function (_0x441ec4, _0x402963, _0xab81ea) {
          var _0x4c09d8;
          var _0x159d9c;
          var _0x3a48c4 = _0xab81ea;
          for (var _0x478991 = 0x0; _0x478991 < _0x441ec4.length; ++_0x478991) {
            if ((_0x4c09d8 = _0x441ec4.charCodeAt(_0x478991)) < 0x80) {
              _0x402963[_0xab81ea++] = _0x4c09d8;
            } else if (_0x4c09d8 < 0x800) {
              _0x402963[_0xab81ea++] = _0x4c09d8 >> 0x6 | 0xc0;
              _0x402963[_0xab81ea++] = 0x3f & _0x4c09d8 | 0x80;
            } else if (0xd800 == (0xfc00 & _0x4c09d8) && 0xdc00 == (0xfc00 & (_0x159d9c = _0x441ec4.charCodeAt(_0x478991 + 0x1)))) {
              _0x4c09d8 = 0x10000 + ((0x3ff & _0x4c09d8) << 0xa) + (0x3ff & _0x159d9c);
              ++_0x478991;
              _0x402963[_0xab81ea++] = _0x4c09d8 >> 0x12 | 0xf0;
              _0x402963[_0xab81ea++] = _0x4c09d8 >> 0xc & 0x3f | 0x80;
              _0x402963[_0xab81ea++] = _0x4c09d8 >> 0x6 & 0x3f | 0x80;
              _0x402963[_0xab81ea++] = 0x3f & _0x4c09d8 | 0x80;
            } else {
              _0x402963[_0xab81ea++] = _0x4c09d8 >> 0xc | 0xe0;
              _0x402963[_0xab81ea++] = _0x4c09d8 >> 0x6 & 0x3f | 0x80;
              _0x402963[_0xab81ea++] = 0x3f & _0x4c09d8 | 0x80;
            }
          }
          return _0xab81ea - _0x3a48c4;
        };
        _0x998393.exports;
      }, {});
      _0x2e006d.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js', function (_0x5bf67c, _0x363be1, _0x249d9e, _0x2fe308, _0x219512) {
        _0x249d9e.exports = function (_0x2d973a, _0x2ffa99, _0x1c3cbc) {
          var _0x33fa4f = _0x1c3cbc || 0x2000;
          var _0x3da715 = _0x33fa4f >>> 0x1;
          var _0x3a6808 = null;
          var _0x4ad5ed = _0x33fa4f;
          return function (_0xbf96ad) {
            if (_0xbf96ad < 0x1 || _0xbf96ad > _0x3da715) {
              return _0x2d973a(_0xbf96ad);
            }
            if (_0x4ad5ed + _0xbf96ad > _0x33fa4f) {
              _0x3a6808 = _0x2d973a(_0x33fa4f);
              _0x4ad5ed = 0x0;
            }
            var _0x4cb978 = _0x2ffa99.call(_0x3a6808, _0x4ad5ed, _0x4ad5ed += _0xbf96ad);
            if (0x7 & _0x4ad5ed) {
              _0x4ad5ed = 0x1 + (0x7 | _0x4ad5ed);
            }
            return _0x4cb978;
          };
        };
        _0x249d9e.exports;
      }, {});
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (_0x1d5db1, _0x6852c5, _0x20130d, _0x395980, _0x153492) {
        _0x20130d.exports = _0x16f551;
        var _0x19df46 = _0x6852c5('../util/minimal');
        function _0x16f551(_0x30bf48, _0x38d457) {
          this.lo = _0x30bf48 >>> 0x0;
          this.hi = _0x38d457 >>> 0x0;
        }
        var _0x281d53 = _0x16f551.zero = new _0x16f551(0x0, 0x0);
        _0x281d53.toNumber = function () {
          return 0x0;
        };
        _0x281d53.zzEncode = _0x281d53.zzDecode = function () {
          return this;
        };
        _0x281d53.length = function () {
          return 0x1;
        };
        var _0x446731 = _0x16f551.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x16f551.fromNumber = function (_0x3b63d0) {
          if (0x0 === _0x3b63d0) {
            return _0x281d53;
          }
          var _0x11d713 = _0x3b63d0 < 0x0;
          if (_0x11d713) {
            _0x3b63d0 = -_0x3b63d0;
          }
          var _0xc7e991 = _0x3b63d0 >>> 0x0;
          var _0x36c4f1 = (_0x3b63d0 - _0xc7e991) / 0x100000000 >>> 0x0;
          if (_0x11d713) {
            _0x36c4f1 = ~_0x36c4f1 >>> 0x0;
            _0xc7e991 = ~_0xc7e991 >>> 0x0;
            if (++_0xc7e991 > 0xffffffff) {
              _0xc7e991 = 0x0;
              if (++_0x36c4f1 > 0xffffffff) {
                _0x36c4f1 = 0x0;
              }
            }
          }
          return new _0x16f551(_0xc7e991, _0x36c4f1);
        };
        _0x16f551.from = function (_0xf889c1) {
          if ("number" == typeof _0xf889c1) {
            return _0x16f551.fromNumber(_0xf889c1);
          }
          if (_0x19df46.isString(_0xf889c1)) {
            if (!_0x19df46.Long) {
              return _0x16f551.fromNumber(parseInt(_0xf889c1, 0xa));
            }
            _0xf889c1 = _0x19df46.Long.fromString(_0xf889c1);
          }
          return _0xf889c1.low || _0xf889c1.high ? new _0x16f551(_0xf889c1.low >>> 0x0, _0xf889c1.high >>> 0x0) : _0x281d53;
        };
        _0x16f551.prototype.toNumber = function (_0x4d66fc) {
          if (!_0x4d66fc && this.hi >>> 0x1f) {
            var _0x28677d = 0x1 + ~this.lo >>> 0x0;
            var _0x2666d3 = ~this.hi >>> 0x0;
            if (!_0x28677d) {
              _0x2666d3 = _0x2666d3 + 0x1 >>> 0x0;
            }
            return -(_0x28677d + 0x100000000 * _0x2666d3);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x16f551.prototype.toLong = function (_0x30511a) {
          return _0x19df46.Long ? new _0x19df46.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x30511a)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x30511a)
          };
        };
        var _0x5b1091 = String.prototype.charCodeAt;
        _0x16f551.fromHash = function (_0x507b35) {
          return _0x507b35 === _0x446731 ? _0x281d53 : new _0x16f551((_0x5b1091.call(_0x507b35, 0x0) | _0x5b1091.call(_0x507b35, 0x1) << 0x8 | _0x5b1091.call(_0x507b35, 0x2) << 0x10 | _0x5b1091.call(_0x507b35, 0x3) << 0x18) >>> 0x0, (_0x5b1091.call(_0x507b35, 0x4) | _0x5b1091.call(_0x507b35, 0x5) << 0x8 | _0x5b1091.call(_0x507b35, 0x6) << 0x10 | _0x5b1091.call(_0x507b35, 0x7) << 0x18) >>> 0x0);
        };
        _0x16f551.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x16f551.prototype.zzEncode = function () {
          var _0x34ee23 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0x34ee23) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0x34ee23) >>> 0x0;
          return this;
        };
        _0x16f551.prototype.zzDecode = function () {
          var _0x4e003f = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x4e003f) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x4e003f) >>> 0x0;
          return this;
        };
        _0x16f551.prototype.length = function () {
          var _0x33f950 = this.lo;
          var _0x582f50 = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x3022e7 = this.hi >>> 0x18;
          return 0x0 === _0x3022e7 ? 0x0 === _0x582f50 ? _0x33f950 < 0x4000 ? _0x33f950 < 0x80 ? 0x1 : 0x2 : _0x33f950 < 0x200000 ? 0x3 : 0x4 : _0x582f50 < 0x4000 ? _0x582f50 < 0x80 ? 0x5 : 0x6 : _0x582f50 < 0x200000 ? 0x7 : 0x8 : _0x3022e7 < 0x80 ? 0x9 : 0xa;
        };
        _0x20130d.exports;
      }, function () {
        return {
          '../util/minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js'
        };
      });
      _0x2e006d.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js', function (_0x198c56, _0x10a34e, _0xd03373, _0x1d7ff9, _0x518073) {
        function _0x23ce27(_0x34ce8b, _0x1e50ed, _0x45f3b1) {
          var _0x251b14 = Object.keys(_0x1e50ed);
          for (var _0x2694b8 = 0x0; _0x2694b8 < _0x251b14.length; ++_0x2694b8) {
            if (!(undefined !== _0x34ce8b[_0x251b14[_0x2694b8]] && _0x45f3b1)) {
              _0x34ce8b[_0x251b14[_0x2694b8]] = _0x1e50ed[_0x251b14[_0x2694b8]];
            }
          }
          return _0x34ce8b;
        }
        function _0x340894(_0x523e1f) {
          function _0x362cd0(_0x41ca26, _0x40da30) {
            if (!(this instanceof _0x362cd0)) {
              return new _0x362cd0(_0x41ca26, _0x40da30);
            }
            Object.defineProperty(this, "message", {
              'get': function () {
                return _0x41ca26;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x362cd0);
            } else {
              Object.defineProperty(this, "stack", {
                'value': new Error().stack || ''
              });
            }
            if (_0x40da30) {
              _0x23ce27(this, _0x40da30);
            }
          }
          (_0x362cd0.prototype = Object.create(Error.prototype)).constructor = _0x362cd0;
          Object.defineProperty(_0x362cd0.prototype, 'name', {
            'get': function () {
              return _0x523e1f;
            }
          });
          _0x362cd0.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x362cd0;
        }
        _0x198c56.asPromise = _0x10a34e('@protobufjs/aspromise');
        _0x198c56.base64 = _0x10a34e("@protobufjs/base64");
        _0x198c56.EventEmitter = _0x10a34e('@protobufjs/eventemitter');
        _0x198c56.float = _0x10a34e("@protobufjs/float");
        _0x198c56.inquire = _0x10a34e("@protobufjs/inquire");
        _0x198c56.utf8 = _0x10a34e("@protobufjs/utf8");
        _0x198c56.pool = _0x10a34e("@protobufjs/pool");
        _0x198c56.LongBits = _0x10a34e('./longbits');
        _0x198c56.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x198c56.global = _0x198c56.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        _0x198c56.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x198c56.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x198c56.isInteger = Number.isInteger || function (_0x253bf2) {
          return "number" == typeof _0x253bf2 && isFinite(_0x253bf2) && Math.floor(_0x253bf2) === _0x253bf2;
        };
        _0x198c56.isString = function (_0x597dc7) {
          return "string" == typeof _0x597dc7 || _0x597dc7 instanceof String;
        };
        _0x198c56.isObject = function (_0x469023) {
          return _0x469023 && 'object' == typeof _0x469023;
        };
        _0x198c56.isset = _0x198c56.isSet = function (_0x37df0a, _0x3d46fc) {
          var _0xc3831a = _0x37df0a[_0x3d46fc];
          return !(null == _0xc3831a || !_0x37df0a.hasOwnProperty(_0x3d46fc)) && ("object" != typeof _0xc3831a || (Array.isArray(_0xc3831a) ? _0xc3831a.length : Object.keys(_0xc3831a).length) > 0x0);
        };
        _0x198c56.Buffer = function () {
          try {
            var _0x5089b8 = _0x198c56.inquire("buffer").Buffer;
            return _0x5089b8.prototype.utf8Write ? _0x5089b8 : null;
          } catch (_0x8b32d3) {
            return null;
          }
        }();
        _0x198c56._Buffer_from = null;
        _0x198c56._Buffer_allocUnsafe = null;
        _0x198c56.newBuffer = function (_0x138123) {
          return "number" == typeof _0x138123 ? _0x198c56.Buffer ? _0x198c56._Buffer_allocUnsafe(_0x138123) : new _0x198c56.Array(_0x138123) : _0x198c56.Buffer ? _0x198c56._Buffer_from(_0x138123) : "undefined" == typeof Uint8Array ? _0x138123 : new Uint8Array(_0x138123);
        };
        _0x198c56.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        _0x198c56.Long = _0x198c56.global.dcodeIO && _0x198c56.global.dcodeIO.Long || _0x198c56.global.Long || _0x198c56.inquire('long');
        _0x198c56.key2Re = /^true|false|0|1$/;
        _0x198c56.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x198c56.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x198c56.longToHash = function (_0x148cdb) {
          return _0x148cdb ? _0x198c56.LongBits.from(_0x148cdb).toHash() : _0x198c56.LongBits.zeroHash;
        };
        _0x198c56.longFromHash = function (_0x46c3fe, _0x35a184) {
          var _0x2bfab6 = _0x198c56.LongBits.fromHash(_0x46c3fe);
          return _0x198c56.Long ? _0x198c56.Long.fromBits(_0x2bfab6.lo, _0x2bfab6.hi, _0x35a184) : _0x2bfab6.toNumber(Boolean(_0x35a184));
        };
        _0x198c56.merge = _0x23ce27;
        _0x198c56.lcFirst = function (_0x3c234b) {
          return _0x3c234b.charAt(0x0).toLowerCase() + _0x3c234b.substring(0x1);
        };
        _0x198c56.newError = _0x340894;
        _0x198c56.ProtocolError = _0x340894("ProtocolError");
        _0x198c56.oneOfGetter = function (_0x21825d) {
          var _0x92a8f5 = {};
          for (var _0x46bf91 = 0x0; _0x46bf91 < _0x21825d.length; ++_0x46bf91) {
            _0x92a8f5[_0x21825d[_0x46bf91]] = 0x1;
          }
          return function () {
            var _0x3b08dc = Object.keys(this);
            for (var _0x40adc9 = _0x3b08dc.length - 0x1; _0x40adc9 > -0x1; --_0x40adc9) {
              if (0x1 === _0x92a8f5[_0x3b08dc[_0x40adc9]] && undefined !== this[_0x3b08dc[_0x40adc9]] && null !== this[_0x3b08dc[_0x40adc9]]) {
                return _0x3b08dc[_0x40adc9];
              }
            }
          };
        };
        _0x198c56.oneOfSetter = function (_0x454943) {
          return function (_0x5dde4f) {
            for (var _0x55402d = 0x0; _0x55402d < _0x454943.length; ++_0x55402d) {
              if (_0x454943[_0x55402d] !== _0x5dde4f) {
                delete this[_0x454943[_0x55402d]];
              }
            }
          };
        };
        _0x198c56.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x198c56._configure = function () {
          var _0x21f8ae = _0x198c56.Buffer;
          if (_0x21f8ae) {
            _0x198c56._Buffer_from = _0x21f8ae.from !== Uint8Array.from && _0x21f8ae.from || function (_0x510837, _0x33b773) {
              return new _0x21f8ae(_0x510837, _0x33b773);
            };
            _0x198c56._Buffer_allocUnsafe = _0x21f8ae.allocUnsafe || function (_0x450d9f) {
              return new _0x21f8ae(_0x450d9f);
            };
          } else {
            _0x198c56._Buffer_from = _0x198c56._Buffer_allocUnsafe = null;
          }
        };
        _0xd03373.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js',
          '@protobufjs/base64': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          '@protobufjs/eventemitter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/float/index.js',
          '@protobufjs/inquire': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          '@protobufjs/utf8': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js",
          '@protobufjs/pool': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js',
          './longbits': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (_0x1cadd0, _0x29a8e9, _0x11f407, _0x52e1ec, _0x376cce) {
        _0x11f407.exports = _0x29b4a1;
        var _0x3e1b46;
        var _0x2a07f4 = _0x29a8e9("./util/minimal");
        var _0x4cb4dd = _0x2a07f4.LongBits;
        var _0x352eef = _0x2a07f4.base64;
        var _0x1db80a = _0x2a07f4.utf8;
        function _0x56e47f(_0x5ea3fd, _0x529de2, _0x51a393) {
          this.fn = _0x5ea3fd;
          this.len = _0x529de2;
          this.next = undefined;
          this.val = _0x51a393;
        }
        function _0x5ad652() {}
        function _0x246167(_0x4fcd2a) {
          this.head = _0x4fcd2a.head;
          this.tail = _0x4fcd2a.tail;
          this.len = _0x4fcd2a.len;
          this.next = _0x4fcd2a.states;
        }
        function _0x29b4a1() {
          this.len = 0x0;
          this.head = new _0x56e47f(_0x5ad652, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x197edb = function () {
          return _0x2a07f4.Buffer ? function () {
            return (_0x29b4a1.create = function () {
              return new _0x3e1b46();
            })();
          } : function () {
            return new _0x29b4a1();
          };
        };
        function _0x12afde(_0x23b8f5, _0x2ab1b2, _0x4e3a7) {
          _0x2ab1b2[_0x4e3a7] = 0xff & _0x23b8f5;
        }
        function _0x21bfdb(_0xb46f87, _0x4d89f9) {
          this.len = _0xb46f87;
          this.next = undefined;
          this.val = _0x4d89f9;
        }
        function _0x53c0d6(_0x1172d1, _0x3bb430, _0x867923) {
          for (; _0x1172d1.hi;) {
            _0x3bb430[_0x867923++] = 0x7f & _0x1172d1.lo | 0x80;
            _0x1172d1.lo = (_0x1172d1.lo >>> 0x7 | _0x1172d1.hi << 0x19) >>> 0x0;
            _0x1172d1.hi >>>= 0x7;
          }
          for (; _0x1172d1.lo > 0x7f;) {
            _0x3bb430[_0x867923++] = 0x7f & _0x1172d1.lo | 0x80;
            _0x1172d1.lo = _0x1172d1.lo >>> 0x7;
          }
          _0x3bb430[_0x867923++] = _0x1172d1.lo;
        }
        function _0x45c60e(_0x5e8411, _0x41bd72, _0x3c02cf) {
          _0x41bd72[_0x3c02cf] = 0xff & _0x5e8411;
          _0x41bd72[_0x3c02cf + 0x1] = _0x5e8411 >>> 0x8 & 0xff;
          _0x41bd72[_0x3c02cf + 0x2] = _0x5e8411 >>> 0x10 & 0xff;
          _0x41bd72[_0x3c02cf + 0x3] = _0x5e8411 >>> 0x18;
        }
        _0x29b4a1.create = _0x197edb();
        _0x29b4a1.alloc = function (_0x391a81) {
          return new _0x2a07f4.Array(_0x391a81);
        };
        if (_0x2a07f4.Array !== Array) {
          _0x29b4a1.alloc = _0x2a07f4.pool(_0x29b4a1.alloc, _0x2a07f4.Array.prototype.subarray);
        }
        _0x29b4a1.prototype._push = function (_0x346ce9, _0x212faf, _0x234107) {
          this.tail = this.tail.next = new _0x56e47f(_0x346ce9, _0x212faf, _0x234107);
          this.len += _0x212faf;
          return this;
        };
        _0x21bfdb.prototype = Object.create(_0x56e47f.prototype);
        _0x21bfdb.prototype.fn = function (_0x349d60, _0x24a63b, _0x5f21ba) {
          for (; _0x349d60 > 0x7f;) {
            _0x24a63b[_0x5f21ba++] = 0x7f & _0x349d60 | 0x80;
            _0x349d60 >>>= 0x7;
          }
          _0x24a63b[_0x5f21ba] = _0x349d60;
        };
        _0x29b4a1.prototype.uint32 = function (_0x22a52e) {
          this.len += (this.tail = this.tail.next = new _0x21bfdb((_0x22a52e >>>= 0x0) < 0x80 ? 0x1 : _0x22a52e < 0x4000 ? 0x2 : _0x22a52e < 0x200000 ? 0x3 : _0x22a52e < 0x10000000 ? 0x4 : 0x5, _0x22a52e)).len;
          return this;
        };
        _0x29b4a1.prototype.int32 = function (_0x51be67) {
          return _0x51be67 < 0x0 ? this._push(_0x53c0d6, 0xa, _0x4cb4dd.fromNumber(_0x51be67)) : this.uint32(_0x51be67);
        };
        _0x29b4a1.prototype.sint32 = function (_0x3fed08) {
          return this.uint32((_0x3fed08 << 0x1 ^ _0x3fed08 >> 0x1f) >>> 0x0);
        };
        _0x29b4a1.prototype.uint64 = function (_0x170731) {
          var _0x245052 = _0x4cb4dd.from(_0x170731);
          return this._push(_0x53c0d6, _0x245052.length(), _0x245052);
        };
        _0x29b4a1.prototype.int64 = _0x29b4a1.prototype.uint64;
        _0x29b4a1.prototype.sint64 = function (_0x2d4da8) {
          var _0x4d119f = _0x4cb4dd.from(_0x2d4da8).zzEncode();
          return this._push(_0x53c0d6, _0x4d119f.length(), _0x4d119f);
        };
        _0x29b4a1.prototype.bool = function (_0xb1dda5) {
          return this._push(_0x12afde, 0x1, _0xb1dda5 ? 0x1 : 0x0);
        };
        _0x29b4a1.prototype.fixed32 = function (_0x108e13) {
          return this._push(_0x45c60e, 0x4, _0x108e13 >>> 0x0);
        };
        _0x29b4a1.prototype.sfixed32 = _0x29b4a1.prototype.fixed32;
        _0x29b4a1.prototype.fixed64 = function (_0x235e72) {
          var _0x2b12f7 = _0x4cb4dd.from(_0x235e72);
          return this._push(_0x45c60e, 0x4, _0x2b12f7.lo)._push(_0x45c60e, 0x4, _0x2b12f7.hi);
        };
        _0x29b4a1.prototype.sfixed64 = _0x29b4a1.prototype.fixed64;
        _0x29b4a1.prototype.float = function (_0x5f4484) {
          return this._push(_0x2a07f4.float.writeFloatLE, 0x4, _0x5f4484);
        };
        _0x29b4a1.prototype.double = function (_0x2ad024) {
          return this._push(_0x2a07f4.float.writeDoubleLE, 0x8, _0x2ad024);
        };
        var _0x43531d = _0x2a07f4.Array.prototype.set ? function (_0x3ba5c9, _0x26a953, _0x437097) {
          _0x26a953.set(_0x3ba5c9, _0x437097);
        } : function (_0x3f5161, _0x51b959, _0x433edf) {
          for (var _0x582e3e = 0x0; _0x582e3e < _0x3f5161.length; ++_0x582e3e) {
            _0x51b959[_0x433edf + _0x582e3e] = _0x3f5161[_0x582e3e];
          }
        };
        _0x29b4a1.prototype.bytes = function (_0x1bb624) {
          var _0x1d32eb = _0x1bb624.length >>> 0x0;
          if (!_0x1d32eb) {
            return this._push(_0x12afde, 0x1, 0x0);
          }
          if (_0x2a07f4.isString(_0x1bb624)) {
            var _0x157c97 = _0x29b4a1.alloc(_0x1d32eb = _0x352eef.length(_0x1bb624));
            _0x352eef.decode(_0x1bb624, _0x157c97, 0x0);
            _0x1bb624 = _0x157c97;
          }
          return this.uint32(_0x1d32eb)._push(_0x43531d, _0x1d32eb, _0x1bb624);
        };
        _0x29b4a1.prototype.string = function (_0x4c797f) {
          var _0x3d83b5 = _0x1db80a.length(_0x4c797f);
          return _0x3d83b5 ? this.uint32(_0x3d83b5)._push(_0x1db80a.write, _0x3d83b5, _0x4c797f) : this._push(_0x12afde, 0x1, 0x0);
        };
        _0x29b4a1.prototype.fork = function () {
          this.states = new _0x246167(this);
          this.head = this.tail = new _0x56e47f(_0x5ad652, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x29b4a1.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x56e47f(_0x5ad652, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x29b4a1.prototype.ldelim = function () {
          var _0x4da735 = this.head;
          var _0x328a63 = this.tail;
          var _0x1a4c40 = this.len;
          this.reset().uint32(_0x1a4c40);
          if (_0x1a4c40) {
            this.tail.next = _0x4da735.next;
            this.tail = _0x328a63;
            this.len += _0x1a4c40;
          }
          return this;
        };
        _0x29b4a1.prototype.finish = function () {
          var _0x3577df = this.head.next;
          var _0x23cb5e = this.constructor.alloc(this.len);
          for (var _0x371f0d = 0x0; _0x3577df;) {
            _0x3577df.fn(_0x3577df.val, _0x23cb5e, _0x371f0d);
            _0x371f0d += _0x3577df.len;
            _0x3577df = _0x3577df.next;
          }
          return _0x23cb5e;
        };
        _0x29b4a1._configure = function (_0x1fd990) {
          _0x3e1b46 = _0x1fd990;
          _0x29b4a1.create = _0x197edb();
          _0x3e1b46._configure();
        };
        _0x11f407.exports;
      }, function () {
        return {
          './util/minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js'
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (_0x3611c8, _0x296a81, _0x12f2fe, _0x5ccd80, _0x39e5b7) {
        _0x12f2fe.exports = _0x43cae1;
        var _0x13b80f = _0x296a81('./writer');
        (_0x43cae1.prototype = Object.create(_0x13b80f.prototype)).constructor = _0x43cae1;
        var _0xa9bcde = _0x296a81('./util/minimal');
        function _0x43cae1() {
          _0x13b80f.call(this);
        }
        function _0x4eb996(_0x10fa89, _0x5c4d21, _0x3b5ab2) {
          if (_0x10fa89.length < 0x28) {
            _0xa9bcde.utf8.write(_0x10fa89, _0x5c4d21, _0x3b5ab2);
          } else if (_0x5c4d21.utf8Write) {
            _0x5c4d21.utf8Write(_0x10fa89, _0x3b5ab2);
          } else {
            _0x5c4d21.write(_0x10fa89, _0x3b5ab2);
          }
        }
        _0x43cae1._configure = function () {
          _0x43cae1.alloc = _0xa9bcde._Buffer_allocUnsafe;
          _0x43cae1.writeBytesBuffer = _0xa9bcde.Buffer && _0xa9bcde.Buffer.prototype instanceof Uint8Array && "set" === _0xa9bcde.Buffer.prototype.set.name ? function (_0x1fce11, _0x55ae83, _0x5b35f5) {
            _0x55ae83.set(_0x1fce11, _0x5b35f5);
          } : function (_0x3ba7af, _0x10851b, _0xb030f1) {
            if (_0x3ba7af.copy) {
              _0x3ba7af.copy(_0x10851b, _0xb030f1, 0x0, _0x3ba7af.length);
            } else {
              for (var _0x387b66 = 0x0; _0x387b66 < _0x3ba7af.length;) {
                _0x10851b[_0xb030f1++] = _0x3ba7af[_0x387b66++];
              }
            }
          };
        };
        _0x43cae1.prototype.bytes = function (_0x4e1882) {
          if (_0xa9bcde.isString(_0x4e1882)) {
            _0x4e1882 = _0xa9bcde._Buffer_from(_0x4e1882, "base64");
          }
          var _0x18df6c = _0x4e1882.length >>> 0x0;
          this.uint32(_0x18df6c);
          if (_0x18df6c) {
            this._push(_0x43cae1.writeBytesBuffer, _0x18df6c, _0x4e1882);
          }
          return this;
        };
        _0x43cae1.prototype.string = function (_0x1db35b) {
          var _0x7ad96a = _0xa9bcde.Buffer.byteLength(_0x1db35b);
          this.uint32(_0x7ad96a);
          if (_0x7ad96a) {
            this._push(_0x4eb996, _0x7ad96a, _0x1db35b);
          }
          return this;
        };
        _0x43cae1._configure();
        _0x12f2fe.exports;
      }, function () {
        return {
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util/minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js'
        };
      });
      _0x2e006d.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/reader.js', function (_0x1064a0, _0x5befaf, _0x544130, _0x559f1e, _0xd759d2) {
        _0x544130.exports = _0x5ceb5d;
        var _0x471a38;
        var _0x4bb865 = _0x5befaf("./util/minimal");
        var _0x3728e0 = _0x4bb865.LongBits;
        var _0x5bb9e9 = _0x4bb865.utf8;
        function _0x5ceb5d(_0x4e821a) {
          this.buf = _0x4e821a;
          this.pos = 0x0;
          this.len = _0x4e821a.length;
        }
        var _0x7880c1;
        var _0x3bf2be = "undefined" != typeof Uint8Array ? function (_0x105fd2) {
          if (_0x105fd2 instanceof Uint8Array || Array.isArray(_0x105fd2)) {
            return new _0x5ceb5d(_0x105fd2);
          }
          throw Error("illegal buffer");
        } : function (_0x137f19) {
          if (Array.isArray(_0x137f19)) {
            return new _0x5ceb5d(_0x137f19);
          }
          throw Error("illegal buffer");
        };
        var _0x5daea1 = function () {
          return _0x4bb865.Buffer ? function (_0x618389) {
            return (_0x5ceb5d.create = function (_0x35ef7a) {
              return _0x4bb865.Buffer.isBuffer(_0x35ef7a) ? new _0x471a38(_0x35ef7a) : _0x3bf2be(_0x35ef7a);
            })(_0x618389);
          } : _0x3bf2be;
        };
        function _0x5e112b() {
          var _0xb26eed = new _0x3728e0(0x0, 0x0);
          var _0x8287b2 = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x8287b2 < 0x3; ++_0x8287b2) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0xb26eed.lo = (_0xb26eed.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x8287b2) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0xb26eed;
              }
            }
            _0xb26eed.lo = (_0xb26eed.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x8287b2) >>> 0x0;
            return _0xb26eed;
          }
          for (; _0x8287b2 < 0x4; ++_0x8287b2) {
            _0xb26eed.lo = (_0xb26eed.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x8287b2) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0xb26eed;
            }
          }
          _0xb26eed.lo = (_0xb26eed.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0xb26eed.hi = (_0xb26eed.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0xb26eed;
          }
          _0x8287b2 = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x8287b2 < 0x5; ++_0x8287b2) {
              _0xb26eed.hi = (_0xb26eed.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x8287b2 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0xb26eed;
              }
            }
          } else {
            for (; _0x8287b2 < 0x5; ++_0x8287b2) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0xb26eed.hi = (_0xb26eed.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x8287b2 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0xb26eed;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x51564a() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x3728e0((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0x5ceb5d.create = _0x5daea1();
        _0x5ceb5d.prototype._slice = _0x4bb865.Array.prototype.subarray || _0x4bb865.Array.prototype.slice;
        _0x7880c1 = 0xffffffff;
        _0x5ceb5d.prototype.uint32 = function () {
          _0x7880c1 = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x7880c1;
          }
          _0x7880c1 = (_0x7880c1 | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x7880c1;
          }
          _0x7880c1 = (_0x7880c1 | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x7880c1;
          }
          _0x7880c1 = (_0x7880c1 | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x7880c1;
          }
          _0x7880c1 = (_0x7880c1 | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x7880c1;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x7880c1;
        };
        _0x5ceb5d.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0x5ceb5d.prototype.sint32 = function () {
          var _0x4f55dc = this.uint32();
          return _0x4f55dc >>> 0x1 ^ -(0x1 & _0x4f55dc) | 0x0;
        };
        _0x5ceb5d.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0x5ceb5d.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x5ceb5d.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0x5ceb5d.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x303a34 = _0x4bb865.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x303a34;
        };
        _0x5ceb5d.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x29cd30 = _0x4bb865.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x29cd30;
        };
        _0x5ceb5d.prototype.bytes = function () {
          var _0x4f9079 = this.uint32();
          var _0x77cd0 = this.pos;
          var _0x2544fc = this.pos + _0x4f9079;
          if (_0x2544fc > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x4f9079 || 0x1) + " > " + this.len);
          }
          this.pos += _0x4f9079;
          return Array.isArray(this.buf) ? this.buf.slice(_0x77cd0, _0x2544fc) : _0x77cd0 === _0x2544fc ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x77cd0, _0x2544fc);
        };
        _0x5ceb5d.prototype.string = function () {
          var _0x3a5281 = this.bytes();
          return _0x5bb9e9.read(_0x3a5281, 0x0, _0x3a5281.length);
        };
        _0x5ceb5d.prototype.skip = function (_0x3199a2) {
          if ("number" == typeof _0x3199a2) {
            if (this.pos + _0x3199a2 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x3199a2 || 0x1) + " > " + this.len);
            }
            this.pos += _0x3199a2;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x5ceb5d.prototype.skipType = function (_0x20d66e) {
          switch (_0x20d66e) {
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
              for (; 0x4 != (_0x20d66e = 0x7 & this.uint32());) {
                this.skipType(_0x20d66e);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x20d66e + " at offset " + this.pos);
          }
          return this;
        };
        _0x5ceb5d._configure = function (_0x14b8ea) {
          _0x471a38 = _0x14b8ea;
          _0x5ceb5d.create = _0x5daea1();
          _0x471a38._configure();
          var _0x118409 = _0x4bb865.Long ? "toLong" : "toNumber";
          _0x4bb865.merge(_0x5ceb5d.prototype, {
            'int64': function () {
              return _0x5e112b.call(this)[_0x118409](false);
            },
            'uint64': function () {
              return _0x5e112b.call(this)[_0x118409](true);
            },
            'sint64': function () {
              return _0x5e112b.call(this).zzDecode()[_0x118409](false);
            },
            'fixed64': function () {
              return _0x51564a.call(this)[_0x118409](true);
            },
            'sfixed64': function () {
              return _0x51564a.call(this)[_0x118409](false);
            }
          });
        };
        _0x544130.exports;
      }, function () {
        return {
          './util/minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js'
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x13b49c, _0x2441f2, _0x256e90, _0x106dfa, _0x5a0050) {
        _0x256e90.exports = _0x1e3730;
        var _0x570204 = _0x2441f2("./reader");
        (_0x1e3730.prototype = Object.create(_0x570204.prototype)).constructor = _0x1e3730;
        var _0x296b6f = _0x2441f2("./util/minimal");
        function _0x1e3730(_0x4ac8c9) {
          _0x570204.call(this, _0x4ac8c9);
        }
        _0x1e3730._configure = function () {
          if (_0x296b6f.Buffer) {
            _0x1e3730.prototype._slice = _0x296b6f.Buffer.prototype.slice;
          }
        };
        _0x1e3730.prototype.string = function () {
          var _0x25a59b = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x25a59b, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + _0x25a59b, this.len));
        };
        _0x1e3730._configure();
        _0x256e90.exports;
      }, function () {
        return {
          './reader': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/reader.js',
          './util/minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js'
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js", function (_0x415938, _0x5b9fe3, _0x968788, _0x2cf1ff, _0x33b45d) {
        _0x968788.exports = _0x219f90;
        var _0x1282dc = _0x5b9fe3("../util/minimal");
        function _0x219f90(_0x185591, _0x1ebb53, _0x125717) {
          if ('function' != typeof _0x185591) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x1282dc.EventEmitter.call(this);
          this.rpcImpl = _0x185591;
          this.requestDelimited = Boolean(_0x1ebb53);
          this.responseDelimited = Boolean(_0x125717);
        }
        (_0x219f90.prototype = Object.create(_0x1282dc.EventEmitter.prototype)).constructor = _0x219f90;
        _0x219f90.prototype.rpcCall = function _0x5c657d(_0x318897, _0x11fe8b, _0x5b3468, _0x563b48, _0x34655f) {
          if (!_0x563b48) {
            throw TypeError("request must be specified");
          }
          var _0x4b302f = this;
          if (!_0x34655f) {
            return _0x1282dc.asPromise(_0x5c657d, _0x4b302f, _0x318897, _0x11fe8b, _0x5b3468, _0x563b48);
          }
          if (_0x4b302f.rpcImpl) {
            try {
              return _0x4b302f.rpcImpl(_0x318897, _0x11fe8b[_0x4b302f.requestDelimited ? "encodeDelimited" : "encode"](_0x563b48).finish(), function (_0x292839, _0x239d0c) {
                if (_0x292839) {
                  _0x4b302f.emit("error", _0x292839, _0x318897);
                  return _0x34655f(_0x292839);
                }
                if (null !== _0x239d0c) {
                  if (!(_0x239d0c instanceof _0x5b3468)) {
                    try {
                      _0x239d0c = _0x5b3468[_0x4b302f.responseDelimited ? "decodeDelimited" : 'decode'](_0x239d0c);
                    } catch (_0x490a3c) {
                      _0x4b302f.emit("error", _0x490a3c, _0x318897);
                      return _0x34655f(_0x490a3c);
                    }
                  }
                  _0x4b302f.emit("data", _0x239d0c, _0x318897);
                  return _0x34655f(null, _0x239d0c);
                }
                _0x4b302f.end(true);
              });
            } catch (_0x4293f0) {
              _0x4b302f.emit('error', _0x4293f0, _0x318897);
              return void setTimeout(function () {
                _0x34655f(_0x4293f0);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x34655f(Error("already ended"));
            }, 0x0);
          }
        };
        _0x219f90.prototype.end = function (_0xd013ef) {
          if (this.rpcImpl) {
            if (!_0xd013ef) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        _0x968788.exports;
      }, function () {
        return {
          '../util/minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js'
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (_0x300ec8, _0x3266f7, _0x12909d, _0x2efaaa, _0xb5da12) {
        _0x300ec8.Service = _0x3266f7('./rpc/service');
        _0x12909d.exports;
      }, function () {
        return {
          './rpc/service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (_0x43c954, _0x254f85, _0x1ab630, _0x364838, _0x38983a) {
        _0x1ab630.exports = {};
        _0x1ab630.exports;
      }, {});
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x400c96, _0xceebb6, _0x6ebbb7, _0x114d64, _0x1a9afc) {
        function _0x197cc7() {
          _0x400c96.util._configure();
          _0x400c96.Writer._configure(_0x400c96.BufferWriter);
          _0x400c96.Reader._configure(_0x400c96.BufferReader);
        }
        _0x400c96.build = "minimal";
        _0x400c96.Writer = _0xceebb6("./writer");
        _0x400c96.BufferWriter = _0xceebb6("./writer_buffer");
        _0x400c96.Reader = _0xceebb6("./reader");
        _0x400c96.BufferReader = _0xceebb6("./reader_buffer");
        _0x400c96.util = _0xceebb6("./util/minimal");
        _0x400c96.rpc = _0xceebb6("./rpc");
        _0x400c96.roots = _0xceebb6("./roots");
        _0x400c96.configure = _0x197cc7;
        _0x197cc7();
        _0x6ebbb7.exports;
      }, function () {
        return {
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './writer_buffer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          './reader': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/reader.js',
          './reader_buffer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js',
          './rpc': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          './roots': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0x3d6648, _0x1470d8, _0x30d95a, _0x11d51d, _0x301455) {
        function _0x430c6e(_0x260eae, _0x21a606) {
          if ("string" == typeof _0x260eae) {
            _0x21a606 = _0x260eae;
            _0x260eae = undefined;
          }
          var _0x3ac1ba = [];
          function _0x190653(_0x6186df) {
            if ("string" != typeof _0x6186df) {
              var _0x250cc3 = "function " + (undefined || _0x21a606 || '') + '(' + (_0x260eae && _0x260eae.join(',') || '') + "){\n  " + _0x3ac1ba.join("\n  ") + "\n}";
              if (_0x430c6e.verbose) {
                console.log("codegen: " + _0x250cc3);
              }
              _0x250cc3 = "return " + _0x250cc3;
              if (_0x6186df) {
                var _0x1dd59d = Object.keys(_0x6186df);
                var _0x5825d5 = new Array(_0x1dd59d.length + 0x1);
                var _0x29d559 = new Array(_0x1dd59d.length);
                for (var _0x4ac0dc = 0x0; _0x4ac0dc < _0x1dd59d.length;) {
                  _0x5825d5[_0x4ac0dc] = _0x1dd59d[_0x4ac0dc];
                  _0x29d559[_0x4ac0dc] = _0x6186df[_0x1dd59d[_0x4ac0dc++]];
                }
                _0x5825d5[_0x4ac0dc] = _0x250cc3;
                return Function.apply(null, _0x5825d5).apply(null, _0x29d559);
              }
              return Function(_0x250cc3)();
            }
            var _0x5521d6 = new Array(arguments.length - 0x1);
            for (var _0x3457f4 = 0x0; _0x3457f4 < _0x5521d6.length;) {
              _0x5521d6[_0x3457f4] = arguments[++_0x3457f4];
            }
            _0x3457f4 = 0x0;
            _0x6186df = _0x6186df.replace(/%([%dfijs])/g, function (_0x5f3538, _0x264037) {
              var _0x46d612 = _0x5521d6[_0x3457f4++];
              switch (_0x264037) {
                case 'd':
                case 'f':
                  return String(Number(_0x46d612));
                case 'i':
                  return String(Math.floor(_0x46d612));
                case 'j':
                  return JSON.stringify(_0x46d612);
                case 's':
                  return String(_0x46d612);
              }
              return '%';
            });
            if (_0x3457f4 !== _0x5521d6.length) {
              throw Error("parameter count mismatch");
            }
            _0x3ac1ba.push(_0x6186df);
            return _0x190653;
          }
          function _0x2e378c(_0x12da00) {
            return "function " + (_0x12da00 || _0x21a606 || '') + '(' + (_0x260eae && _0x260eae.join(',') || '') + "){\n  " + _0x3ac1ba.join("\n  ") + "\n}";
          }
          _0x190653.toString = _0x2e378c;
          return _0x190653;
        }
        _0x30d95a.exports = _0x430c6e;
        _0x430c6e.verbose = false;
        _0x30d95a.exports;
      }, {});
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (_0x308451, _0x22709b, _0x2de77c, _0x15aeef, _0x27de37) {
        _0x2de77c.exports = _0x1d91eb;
        var _0x4b4c9a = _0x22709b('@protobufjs/aspromise');
        var _0x1abe08 = _0x22709b("@protobufjs/inquire")('fs');
        function _0x1d91eb(_0x1eebaa, _0x52d2f9, _0x4a0e80) {
          if ("function" == typeof _0x52d2f9) {
            _0x4a0e80 = _0x52d2f9;
            _0x52d2f9 = {};
          } else if (!_0x52d2f9) {
            _0x52d2f9 = {};
          }
          return _0x4a0e80 ? !_0x52d2f9.xhr && _0x1abe08 && _0x1abe08.readFile ? _0x1abe08.readFile(_0x1eebaa, function (_0x8cfe21, _0x13f65d) {
            return _0x8cfe21 && "undefined" != typeof XMLHttpRequest ? _0x1d91eb.xhr(_0x1eebaa, _0x52d2f9, _0x4a0e80) : _0x8cfe21 ? _0x4a0e80(_0x8cfe21) : _0x4a0e80(null, _0x52d2f9.binary ? _0x13f65d : _0x13f65d.toString("utf8"));
          }) : _0x1d91eb.xhr(_0x1eebaa, _0x52d2f9, _0x4a0e80) : _0x4b4c9a(_0x1d91eb, this, _0x1eebaa, _0x52d2f9);
        }
        _0x1d91eb.xhr = function (_0x53d007, _0x4f85fd, _0x1339e5) {
          var _0x35efda = new XMLHttpRequest();
          _0x35efda.onreadystatechange = function () {
            if (0x4 === _0x35efda.readyState) {
              if (0x0 !== _0x35efda.status && 0xc8 !== _0x35efda.status) {
                return _0x1339e5(Error("status " + _0x35efda.status));
              }
              if (_0x4f85fd.binary) {
                var _0x18a32f = _0x35efda.response;
                if (!_0x18a32f) {
                  _0x18a32f = [];
                  for (var _0x592bd0 = 0x0; _0x592bd0 < _0x35efda.responseText.length; ++_0x592bd0) {
                    _0x18a32f.push(0xff & _0x35efda.responseText.charCodeAt(_0x592bd0));
                  }
                }
                return _0x1339e5(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x18a32f) : _0x18a32f);
              }
              return _0x1339e5(null, _0x35efda.responseText);
            }
          };
          if (_0x4f85fd.binary) {
            if ("overrideMimeType" in _0x35efda) {
              _0x35efda.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x35efda.responseType = 'arraybuffer';
          }
          _0x35efda.open("GET", _0x53d007);
          _0x35efda.send();
        };
        _0x2de77c.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js',
          '@protobufjs/inquire': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (_0x3ed50b, _0xd8c1d4, _0x2d9c24, _0x41ade6, _0x184291) {
        var _0x257043 = _0x3ed50b.isAbsolute = function (_0x33b373) {
          return /^(?:\/|\w+:)/.test(_0x33b373);
        };
        var _0x517bde = _0x3ed50b.normalize = function (_0x1e2fa0) {
          var _0x249146 = (_0x1e2fa0 = _0x1e2fa0.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x49d363 = _0x257043(_0x1e2fa0);
          var _0x164f85 = '';
          if (_0x49d363) {
            _0x164f85 = _0x249146.shift() + '/';
          }
          for (var _0x6be19f = 0x0; _0x6be19f < _0x249146.length;) {
            if ('..' === _0x249146[_0x6be19f]) {
              if (_0x6be19f > 0x0 && '..' !== _0x249146[_0x6be19f - 0x1]) {
                _0x249146.splice(--_0x6be19f, 0x2);
              } else if (_0x49d363) {
                _0x249146.splice(_0x6be19f, 0x1);
              } else {
                ++_0x6be19f;
              }
            } else if ('.' === _0x249146[_0x6be19f]) {
              _0x249146.splice(_0x6be19f, 0x1);
            } else {
              ++_0x6be19f;
            }
          }
          return _0x164f85 + _0x249146.join('/');
        };
        _0x3ed50b.resolve = function (_0x417574, _0x2088e6, _0xb7d75b) {
          if (!_0xb7d75b) {
            _0x2088e6 = _0x517bde(_0x2088e6);
          }
          return _0x257043(_0x2088e6) ? _0x2088e6 : (_0xb7d75b || (_0x417574 = _0x517bde(_0x417574)), (_0x417574 = _0x417574.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x517bde(_0x417574 + '/' + _0x2088e6) : _0x2088e6);
        };
        _0x2d9c24.exports;
      }, {});
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0x2410c3, _0x5632e3, _0x942f57, _0x2b32d3, _0x2539ca) {
        var _0x409184 = _0x5632e3("./util");
        var _0x2dc911 = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", 'uint64', "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function _0x31188a(_0x13bb46, _0x561146) {
          var _0x3e84ac = 0x0;
          var _0x2bb953 = {};
          for (_0x561146 |= 0x0; _0x3e84ac < _0x13bb46.length;) {
            _0x2bb953[_0x2dc911[_0x3e84ac + _0x561146]] = _0x13bb46[_0x3e84ac++];
          }
          return _0x2bb953;
        }
        _0x2410c3.basic = _0x31188a([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x2410c3.defaults = _0x31188a([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x409184.emptyArray, null]);
        _0x2410c3.long = _0x31188a([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x2410c3.mapKey = _0x31188a([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x2410c3.packed = _0x31188a([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x942f57.exports;
      }, function () {
        return {
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0x3ead20, _0x3f028d, _0x42b180, _0x404769, _0x49f948) {
        _0x42b180.exports = _0x3a3000;
        var _0x1d8f5e = _0x3f028d("./object");
        ((_0x3a3000.prototype = Object.create(_0x1d8f5e.prototype)).constructor = _0x3a3000).className = "Field";
        var _0x111131;
        var _0x230f10 = _0x3f028d("./enum");
        var _0x2f55b4 = _0x3f028d('./types');
        var _0x1084f1 = _0x3f028d("./util");
        var _0x2dfe27 = /^required|optional|repeated$/;
        function _0x3a3000(_0x2dba08, _0x269673, _0x3c3b29, _0x3926e6, _0x3e73ea, _0x47d4b0, _0xc65f08) {
          if (_0x1084f1.isObject(_0x3926e6)) {
            _0xc65f08 = _0x3e73ea;
            _0x47d4b0 = _0x3926e6;
            _0x3926e6 = _0x3e73ea = undefined;
          } else if (_0x1084f1.isObject(_0x3e73ea)) {
            _0xc65f08 = _0x47d4b0;
            _0x47d4b0 = _0x3e73ea;
            _0x3e73ea = undefined;
          }
          _0x1d8f5e.call(this, _0x2dba08, _0x47d4b0);
          if (!_0x1084f1.isInteger(_0x269673) || _0x269673 < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x1084f1.isString(_0x3c3b29)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x3926e6 && !_0x2dfe27.test(_0x3926e6 = _0x3926e6.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x3e73ea && !_0x1084f1.isString(_0x3e73ea)) {
            throw TypeError("extend must be a string");
          }
          if ('proto3_optional' === _0x3926e6) {
            _0x3926e6 = "optional";
          }
          this.rule = _0x3926e6 && "optional" !== _0x3926e6 ? _0x3926e6 : undefined;
          this.type = _0x3c3b29;
          this.id = _0x269673;
          this.extend = _0x3e73ea || undefined;
          this.required = "required" === _0x3926e6;
          this.optional = !this.required;
          this.repeated = 'repeated' === _0x3926e6;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x1084f1.Long && undefined !== _0x2f55b4.long[_0x3c3b29];
          this.bytes = "bytes" === _0x3c3b29;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0xc65f08;
        }
        _0x3a3000.fromJSON = function (_0x230320, _0x3ff5dd) {
          return new _0x3a3000(_0x230320, _0x3ff5dd.id, _0x3ff5dd.type, _0x3ff5dd.rule, _0x3ff5dd.extend, _0x3ff5dd.options, _0x3ff5dd.comment);
        };
        Object.defineProperty(_0x3a3000.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption('packed');
            }
            return this._packed;
          }
        });
        _0x3a3000.prototype.setOption = function (_0xa28f77, _0x210264, _0x2c10fd) {
          if ("packed" === _0xa28f77) {
            this._packed = null;
          }
          return _0x1d8f5e.prototype.setOption.call(this, _0xa28f77, _0x210264, _0x2c10fd);
        };
        _0x3a3000.prototype.toJSON = function (_0x4a42de) {
          var _0x53722f = !!_0x4a42de && Boolean(_0x4a42de.keepComments);
          return _0x1084f1.toObject(['rule', "optional" !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, "comment", _0x53722f ? this.comment : undefined]);
        };
        _0x3a3000.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x2f55b4.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x111131) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options["default"]) {
            this.typeDefault = this.options['default'];
            if (this.resolvedType instanceof _0x230f10 && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x230f10))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x1084f1.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && 'string' == typeof this.typeDefault) {
              var _0x2abd28;
              if (_0x1084f1.base64.test(this.typeDefault)) {
                _0x1084f1.base64.decode(this.typeDefault, _0x2abd28 = _0x1084f1.newBuffer(_0x1084f1.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x1084f1.utf8.write(this.typeDefault, _0x2abd28 = _0x1084f1.newBuffer(_0x1084f1.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x2abd28;
            }
          }
          if (this.map) {
            this.defaultValue = _0x1084f1.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x1084f1.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x111131) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x1d8f5e.prototype.resolve.call(this);
        };
        _0x3a3000.d = function (_0xbac850, _0x4fb9d5, _0x3ff20d, _0x2be590) {
          if ("function" == typeof _0x4fb9d5) {
            _0x4fb9d5 = _0x1084f1.decorateType(_0x4fb9d5).name;
          } else if (_0x4fb9d5 && "object" == typeof _0x4fb9d5) {
            _0x4fb9d5 = _0x1084f1.decorateEnum(_0x4fb9d5).name;
          }
          return function (_0x3bde4d, _0x5908ef) {
            _0x1084f1.decorateType(_0x3bde4d.constructor).add(new _0x3a3000(_0x5908ef, _0xbac850, _0x4fb9d5, _0x3ff20d, {
              'default': _0x2be590
            }));
          };
        };
        _0x3a3000._configure = function (_0x47cbb4) {
          _0x111131 = _0x47cbb4;
        };
        _0x42b180.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js", function (_0xe22930, _0x521b00, _0x1d9391, _0x19dbb0, _0x46f8ef) {
        _0x1d9391.exports = _0x24932a;
        var _0x382b87 = _0x521b00("./object");
        ((_0x24932a.prototype = Object.create(_0x382b87.prototype)).constructor = _0x24932a).className = "OneOf";
        var _0x2a82df = _0x521b00("./field");
        var _0x38b6e9 = _0x521b00("./util");
        function _0x24932a(_0x173c58, _0x5ac19d, _0x56253c, _0x404375) {
          if (!Array.isArray(_0x5ac19d)) {
            _0x56253c = _0x5ac19d;
            _0x5ac19d = undefined;
          }
          _0x382b87.call(this, _0x173c58, _0x56253c);
          if (undefined !== _0x5ac19d && !Array.isArray(_0x5ac19d)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x5ac19d || [];
          this.fieldsArray = [];
          this.comment = _0x404375;
        }
        function _0x36f271(_0x176568) {
          if (_0x176568.parent) {
            for (var _0x4d57e4 = 0x0; _0x4d57e4 < _0x176568.fieldsArray.length; ++_0x4d57e4) {
              if (!_0x176568.fieldsArray[_0x4d57e4].parent) {
                _0x176568.parent.add(_0x176568.fieldsArray[_0x4d57e4]);
              }
            }
          }
        }
        _0x24932a.fromJSON = function (_0x36bd70, _0x2e1c6d) {
          return new _0x24932a(_0x36bd70, _0x2e1c6d.oneof, _0x2e1c6d.options, _0x2e1c6d.comment);
        };
        _0x24932a.prototype.toJSON = function (_0x41d967) {
          var _0x4dec27 = !!_0x41d967 && Boolean(_0x41d967.keepComments);
          return _0x38b6e9.toObject(["options", this.options, 'oneof', this.oneof, "comment", _0x4dec27 ? this.comment : undefined]);
        };
        _0x24932a.prototype.add = function (_0x4fcc54) {
          if (!(_0x4fcc54 instanceof _0x2a82df)) {
            throw TypeError("field must be a Field");
          }
          if (_0x4fcc54.parent && _0x4fcc54.parent !== this.parent) {
            _0x4fcc54.parent.remove(_0x4fcc54);
          }
          this.oneof.push(_0x4fcc54.name);
          this.fieldsArray.push(_0x4fcc54);
          _0x4fcc54.partOf = this;
          _0x36f271(this);
          return this;
        };
        _0x24932a.prototype.remove = function (_0x3f0852) {
          if (!(_0x3f0852 instanceof _0x2a82df)) {
            throw TypeError("field must be a Field");
          }
          var _0x4ffedc = this.fieldsArray.indexOf(_0x3f0852);
          if (_0x4ffedc < 0x0) {
            throw Error(_0x3f0852 + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x4ffedc, 0x1);
          if ((_0x4ffedc = this.oneof.indexOf(_0x3f0852.name)) > -0x1) {
            this.oneof.splice(_0x4ffedc, 0x1);
          }
          _0x3f0852.partOf = null;
          return this;
        };
        _0x24932a.prototype.onAdd = function (_0x2b9cae) {
          _0x382b87.prototype.onAdd.call(this, _0x2b9cae);
          for (var _0x46f3ab = 0x0; _0x46f3ab < this.oneof.length; ++_0x46f3ab) {
            var _0x4b5c2d = _0x2b9cae.get(this.oneof[_0x46f3ab]);
            if (_0x4b5c2d && !_0x4b5c2d.partOf) {
              _0x4b5c2d.partOf = this;
              this.fieldsArray.push(_0x4b5c2d);
            }
          }
          _0x36f271(this);
        };
        _0x24932a.prototype.onRemove = function (_0x40478e) {
          var _0x162012;
          for (var _0x10144f = 0x0; _0x10144f < this.fieldsArray.length; ++_0x10144f) {
            if ((_0x162012 = this.fieldsArray[_0x10144f]).parent) {
              _0x162012.parent.remove(_0x162012);
            }
          }
          _0x382b87.prototype.onRemove.call(this, _0x40478e);
        };
        _0x24932a.d = function () {
          var _0x2ac696 = new Array(arguments.length);
          for (var _0x29df55 = 0x0; _0x29df55 < arguments.length;) {
            _0x2ac696[_0x29df55] = arguments[_0x29df55++];
          }
          return function (_0x426831, _0x583156) {
            _0x38b6e9.decorateType(_0x426831.constructor).add(new _0x24932a(_0x583156, _0x2ac696));
            Object.defineProperty(_0x426831, _0x583156, {
              'get': _0x38b6e9.oneOfGetter(_0x2ac696),
              'set': _0x38b6e9.oneOfSetter(_0x2ac696)
            });
          };
        };
        _0x1d9391.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js', function (_0xb80b00, _0x5c1847, _0x1259ab, _0xb1cfd7, _0x27b323) {
        _0x1259ab.exports = _0x37437c;
        var _0x3a5de8 = _0x5c1847("./object");
        ((_0x37437c.prototype = Object.create(_0x3a5de8.prototype)).constructor = _0x37437c).className = "Namespace";
        var _0x45e0d9;
        var _0x237ee3;
        var _0x5a80a0;
        var _0x11fee1 = _0x5c1847("./field");
        var _0x53de87 = _0x5c1847('./oneof');
        var _0x327604 = _0x5c1847('./util');
        function _0x1a01fb(_0x1793ea, _0x4d503a) {
          if (_0x1793ea && _0x1793ea.length) {
            var _0x216f67 = {};
            for (var _0x5dc8ff = 0x0; _0x5dc8ff < _0x1793ea.length; ++_0x5dc8ff) {
              _0x216f67[_0x1793ea[_0x5dc8ff].name] = _0x1793ea[_0x5dc8ff].toJSON(_0x4d503a);
            }
            return _0x216f67;
          }
        }
        function _0x37437c(_0x14910b, _0x3ca4d9) {
          _0x3a5de8.call(this, _0x14910b, _0x3ca4d9);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x422238(_0x4c2f8d) {
          _0x4c2f8d._nestedArray = null;
          return _0x4c2f8d;
        }
        _0x37437c.fromJSON = function (_0x237e36, _0x2a43f4) {
          return new _0x37437c(_0x237e36, _0x2a43f4.options).addJSON(_0x2a43f4.nested);
        };
        _0x37437c.arrayToJSON = _0x1a01fb;
        _0x37437c.isReservedId = function (_0x1e4470, _0x347956) {
          if (_0x1e4470) {
            for (var _0x4ef89c = 0x0; _0x4ef89c < _0x1e4470.length; ++_0x4ef89c) {
              if ("string" != typeof _0x1e4470[_0x4ef89c] && _0x1e4470[_0x4ef89c][0x0] <= _0x347956 && _0x1e4470[_0x4ef89c][0x1] > _0x347956) {
                return true;
              }
            }
          }
          return false;
        };
        _0x37437c.isReservedName = function (_0x1253ec, _0xb3c7dc) {
          if (_0x1253ec) {
            for (var _0xc134e1 = 0x0; _0xc134e1 < _0x1253ec.length; ++_0xc134e1) {
              if (_0x1253ec[_0xc134e1] === _0xb3c7dc) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x37437c.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x327604.toArray(this.nested));
          }
        });
        _0x37437c.prototype.toJSON = function (_0x5cd566) {
          return _0x327604.toObject(["options", this.options, "nested", _0x1a01fb(this.nestedArray, _0x5cd566)]);
        };
        _0x37437c.prototype.addJSON = function (_0x1002ee) {
          if (_0x1002ee) {
            var _0x5d717c;
            var _0x38b8ea = Object.keys(_0x1002ee);
            for (var _0x54338c = 0x0; _0x54338c < _0x38b8ea.length; ++_0x54338c) {
              _0x5d717c = _0x1002ee[_0x38b8ea[_0x54338c]];
              this.add((undefined !== _0x5d717c.fields ? _0x45e0d9.fromJSON : undefined !== _0x5d717c.values ? _0x5a80a0.fromJSON : undefined !== _0x5d717c.methods ? _0x237ee3.fromJSON : undefined !== _0x5d717c.id ? _0x11fee1.fromJSON : _0x37437c.fromJSON)(_0x38b8ea[_0x54338c], _0x5d717c));
            }
          }
          return this;
        };
        _0x37437c.prototype.get = function (_0x297dca) {
          return this.nested && this.nested[_0x297dca] || null;
        };
        _0x37437c.prototype.getEnum = function (_0x27f50b) {
          if (this.nested && this.nested[_0x27f50b] instanceof _0x5a80a0) {
            return this.nested[_0x27f50b].values;
          }
          throw Error("no such enum: " + _0x27f50b);
        };
        _0x37437c.prototype.add = function (_0x58b773) {
          if (!(_0x58b773 instanceof _0x11fee1 && undefined !== _0x58b773.extend || _0x58b773 instanceof _0x45e0d9 || _0x58b773 instanceof _0x5a80a0 || _0x58b773 instanceof _0x237ee3 || _0x58b773 instanceof _0x37437c || _0x58b773 instanceof _0x53de87)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x3b2adc = this.get(_0x58b773.name);
            if (_0x3b2adc) {
              if (!(_0x3b2adc instanceof _0x37437c && _0x58b773 instanceof _0x37437c) || _0x3b2adc instanceof _0x45e0d9 || _0x3b2adc instanceof _0x237ee3) {
                throw Error("duplicate name '" + _0x58b773.name + "' in " + this);
              }
              var _0x338133 = _0x3b2adc.nestedArray;
              for (var _0x567351 = 0x0; _0x567351 < _0x338133.length; ++_0x567351) {
                _0x58b773.add(_0x338133[_0x567351]);
              }
              this.remove(_0x3b2adc);
              if (!this.nested) {
                this.nested = {};
              }
              _0x58b773.setOptions(_0x3b2adc.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x58b773.name] = _0x58b773;
          _0x58b773.onAdd(this);
          return _0x422238(this);
        };
        _0x37437c.prototype.remove = function (_0x41f154) {
          if (!(_0x41f154 instanceof _0x3a5de8)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x41f154.parent !== this) {
            throw Error(_0x41f154 + " is not a member of " + this);
          }
          delete this.nested[_0x41f154.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x41f154.onRemove(this);
          return _0x422238(this);
        };
        _0x37437c.prototype.define = function (_0x20db32, _0x10d6e5) {
          if (_0x327604.isString(_0x20db32)) {
            _0x20db32 = _0x20db32.split('.');
          } else {
            if (!Array.isArray(_0x20db32)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x20db32 && _0x20db32.length && '' === _0x20db32[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x6e1d84 = this; _0x20db32.length > 0x0;) {
            var _0x1e5452 = _0x20db32.shift();
            if (_0x6e1d84.nested && _0x6e1d84.nested[_0x1e5452]) {
              if (!((_0x6e1d84 = _0x6e1d84.nested[_0x1e5452]) instanceof _0x37437c)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x6e1d84.add(_0x6e1d84 = new _0x37437c(_0x1e5452));
            }
          }
          if (_0x10d6e5) {
            _0x6e1d84.addJSON(_0x10d6e5);
          }
          return _0x6e1d84;
        };
        _0x37437c.prototype.resolveAll = function () {
          var _0x5e6a74 = this.nestedArray;
          for (var _0x5a61cf = 0x0; _0x5a61cf < _0x5e6a74.length;) {
            if (_0x5e6a74[_0x5a61cf] instanceof _0x37437c) {
              _0x5e6a74[_0x5a61cf++].resolveAll();
            } else {
              _0x5e6a74[_0x5a61cf++].resolve();
            }
          }
          return this.resolve();
        };
        _0x37437c.prototype.lookup = function (_0x363068, _0x15af88, _0x104822) {
          if ("boolean" == typeof _0x15af88) {
            _0x104822 = _0x15af88;
            _0x15af88 = undefined;
          } else if (_0x15af88 && !Array.isArray(_0x15af88)) {
            _0x15af88 = [_0x15af88];
          }
          if (_0x327604.isString(_0x363068) && _0x363068.length) {
            if ('.' === _0x363068) {
              return this.root;
            }
            _0x363068 = _0x363068.split('.');
          } else {
            if (!_0x363068.length) {
              return this;
            }
          }
          if ('' === _0x363068[0x0]) {
            return this.root.lookup(_0x363068.slice(0x1), _0x15af88);
          }
          var _0x298b9e = this.get(_0x363068[0x0]);
          if (_0x298b9e) {
            if (0x1 === _0x363068.length) {
              if (!_0x15af88 || _0x15af88.indexOf(_0x298b9e.constructor) > -0x1) {
                return _0x298b9e;
              }
            } else {
              if (_0x298b9e instanceof _0x37437c && (_0x298b9e = _0x298b9e.lookup(_0x363068.slice(0x1), _0x15af88, true))) {
                return _0x298b9e;
              }
            }
          } else {
            for (var _0x49bb64 = 0x0; _0x49bb64 < this.nestedArray.length; ++_0x49bb64) {
              if (this._nestedArray[_0x49bb64] instanceof _0x37437c && (_0x298b9e = this._nestedArray[_0x49bb64].lookup(_0x363068, _0x15af88, true))) {
                return _0x298b9e;
              }
            }
          }
          return null === this.parent || _0x104822 ? null : this.parent.lookup(_0x363068, _0x15af88);
        };
        _0x37437c.prototype.lookupType = function (_0x6a8d43) {
          var _0x25f2fb = this.lookup(_0x6a8d43, [_0x45e0d9]);
          if (!_0x25f2fb) {
            throw Error("no such type: " + _0x6a8d43);
          }
          return _0x25f2fb;
        };
        _0x37437c.prototype.lookupEnum = function (_0x580f15) {
          var _0x5458fd = this.lookup(_0x580f15, [_0x5a80a0]);
          if (!_0x5458fd) {
            throw Error("no such Enum '" + _0x580f15 + "' in " + this);
          }
          return _0x5458fd;
        };
        _0x37437c.prototype.lookupTypeOrEnum = function (_0x583c75) {
          var _0x1f4de5 = this.lookup(_0x583c75, [_0x45e0d9, _0x5a80a0]);
          if (!_0x1f4de5) {
            throw Error("no such Type or Enum '" + _0x583c75 + "' in " + this);
          }
          return _0x1f4de5;
        };
        _0x37437c.prototype.lookupService = function (_0x3c2aee) {
          var _0x24073c = this.lookup(_0x3c2aee, [_0x237ee3]);
          if (!_0x24073c) {
            throw Error("no such Service '" + _0x3c2aee + "' in " + this);
          }
          return _0x24073c;
        };
        _0x37437c._configure = function (_0x3eaf67, _0x5ba8f1, _0x22ed56) {
          _0x45e0d9 = _0x3eaf67;
          _0x237ee3 = _0x5ba8f1;
          _0x5a80a0 = _0x22ed56;
        };
        _0x1259ab.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x1baedd, _0x9ce233, _0xcfb57d, _0x12cf56, _0x36bf8e) {
        _0xcfb57d.exports = _0x2cc8d4;
        var _0x2c2f40 = _0x9ce233("./field");
        ((_0x2cc8d4.prototype = Object.create(_0x2c2f40.prototype)).constructor = _0x2cc8d4).className = "MapField";
        var _0x32ba70 = _0x9ce233("./types");
        var _0x3d8bc5 = _0x9ce233('./util');
        function _0x2cc8d4(_0x5cfc83, _0x10625e, _0x5a5074, _0x283cdf, _0x39de8e, _0x95778) {
          _0x2c2f40.call(this, _0x5cfc83, _0x10625e, _0x283cdf, undefined, undefined, _0x39de8e, _0x95778);
          if (!_0x3d8bc5.isString(_0x5a5074)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0x5a5074;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x2cc8d4.fromJSON = function (_0x324c3b, _0x5d21e1) {
          return new _0x2cc8d4(_0x324c3b, _0x5d21e1.id, _0x5d21e1.keyType, _0x5d21e1.type, _0x5d21e1.options, _0x5d21e1.comment);
        };
        _0x2cc8d4.prototype.toJSON = function (_0xcdfc9e) {
          var _0x53d99c = !!_0xcdfc9e && Boolean(_0xcdfc9e.keepComments);
          return _0x3d8bc5.toObject(["keyType", this.keyType, "type", this.type, 'id', this.id, "extend", this.extend, 'options', this.options, "comment", _0x53d99c ? this.comment : undefined]);
        };
        _0x2cc8d4.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x32ba70.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x2c2f40.prototype.resolve.call(this);
        };
        _0x2cc8d4.d = function (_0x25d208, _0x3c5f21, _0x4003d4) {
          if ('function' == typeof _0x4003d4) {
            _0x4003d4 = _0x3d8bc5.decorateType(_0x4003d4).name;
          } else if (_0x4003d4 && "object" == typeof _0x4003d4) {
            _0x4003d4 = _0x3d8bc5.decorateEnum(_0x4003d4).name;
          }
          return function (_0x5af8dc, _0x47f53d) {
            _0x3d8bc5.decorateType(_0x5af8dc.constructor).add(new _0x2cc8d4(_0x47f53d, _0x25d208, _0x3c5f21, _0x4003d4));
          };
        };
        _0xcfb57d.exports;
      }, function () {
        return {
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/method.js", function (_0x454334, _0x23bef1, _0x1f54fa, _0x3a05f6, _0x4642cb) {
        _0x1f54fa.exports = _0x57da52;
        var _0x2dd087 = _0x23bef1("./object");
        ((_0x57da52.prototype = Object.create(_0x2dd087.prototype)).constructor = _0x57da52).className = "Method";
        var _0x2b6372 = _0x23bef1("./util");
        function _0x57da52(_0x3d3001, _0x10c9ee, _0x3f58c3, _0x376580, _0x2ba36c, _0x3c79d2, _0x381ff0, _0x5b942d, _0xc34d66) {
          if (_0x2b6372.isObject(_0x2ba36c)) {
            _0x381ff0 = _0x2ba36c;
            _0x2ba36c = _0x3c79d2 = undefined;
          } else if (_0x2b6372.isObject(_0x3c79d2)) {
            _0x381ff0 = _0x3c79d2;
            _0x3c79d2 = undefined;
          }
          if (undefined !== _0x10c9ee && !_0x2b6372.isString(_0x10c9ee)) {
            throw TypeError("type must be a string");
          }
          if (!_0x2b6372.isString(_0x3f58c3)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x2b6372.isString(_0x376580)) {
            throw TypeError("responseType must be a string");
          }
          _0x2dd087.call(this, _0x3d3001, _0x381ff0);
          this.type = _0x10c9ee || "rpc";
          this.requestType = _0x3f58c3;
          this.requestStream = !!_0x2ba36c || undefined;
          this.responseType = _0x376580;
          this.responseStream = !!_0x3c79d2 || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x5b942d;
          this.parsedOptions = _0xc34d66;
        }
        _0x57da52.fromJSON = function (_0x15dcfe, _0x3b08a9) {
          return new _0x57da52(_0x15dcfe, _0x3b08a9.type, _0x3b08a9.requestType, _0x3b08a9.responseType, _0x3b08a9.requestStream, _0x3b08a9.responseStream, _0x3b08a9.options, _0x3b08a9.comment, _0x3b08a9.parsedOptions);
        };
        _0x57da52.prototype.toJSON = function (_0x5bbfde) {
          var _0x6a409c = !!_0x5bbfde && Boolean(_0x5bbfde.keepComments);
          return _0x2b6372.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, 'requestStream', this.requestStream, "responseType", this.responseType, 'responseStream', this.responseStream, "options", this.options, 'comment', _0x6a409c ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x57da52.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x2dd087.prototype.resolve.call(this));
        };
        _0x1f54fa.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/service.js", function (_0x1cf28e, _0x32e46d, _0x439df6, _0x29f12a, _0x1b9e1a) {
        _0x439df6.exports = _0x19f3a9;
        var _0x215b54 = _0x32e46d("./namespace");
        ((_0x19f3a9.prototype = Object.create(_0x215b54.prototype)).constructor = _0x19f3a9).className = "Service";
        var _0x61a95 = _0x32e46d("./method");
        var _0x43f089 = _0x32e46d("./util");
        var _0xd8babd = _0x32e46d("./rpc");
        function _0x19f3a9(_0x4323b3, _0xa97a92) {
          _0x215b54.call(this, _0x4323b3, _0xa97a92);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x247a3e(_0x1f251b) {
          _0x1f251b._methodsArray = null;
          return _0x1f251b;
        }
        _0x19f3a9.fromJSON = function (_0x140dd0, _0x2193c2) {
          var _0x670f8a = new _0x19f3a9(_0x140dd0, _0x2193c2.options);
          if (_0x2193c2.methods) {
            var _0x33b6b5 = Object.keys(_0x2193c2.methods);
            for (var _0x4ec092 = 0x0; _0x4ec092 < _0x33b6b5.length; ++_0x4ec092) {
              _0x670f8a.add(_0x61a95.fromJSON(_0x33b6b5[_0x4ec092], _0x2193c2.methods[_0x33b6b5[_0x4ec092]]));
            }
          }
          if (_0x2193c2.nested) {
            _0x670f8a.addJSON(_0x2193c2.nested);
          }
          _0x670f8a.comment = _0x2193c2.comment;
          return _0x670f8a;
        };
        _0x19f3a9.prototype.toJSON = function (_0x26a3f5) {
          var _0xa53e49 = _0x215b54.prototype.toJSON.call(this, _0x26a3f5);
          var _0xbb560d = !!_0x26a3f5 && Boolean(_0x26a3f5.keepComments);
          return _0x43f089.toObject(["options", _0xa53e49 && _0xa53e49.options || undefined, 'methods', _0x215b54.arrayToJSON(this.methodsArray, _0x26a3f5) || {}, "nested", _0xa53e49 && _0xa53e49.nested || undefined, "comment", _0xbb560d ? this.comment : undefined]);
        };
        Object.defineProperty(_0x19f3a9.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x43f089.toArray(this.methods));
          }
        });
        _0x19f3a9.prototype.get = function (_0x228808) {
          return this.methods[_0x228808] || _0x215b54.prototype.get.call(this, _0x228808);
        };
        _0x19f3a9.prototype.resolveAll = function () {
          var _0x327096 = this.methodsArray;
          for (var _0x380455 = 0x0; _0x380455 < _0x327096.length; ++_0x380455) {
            _0x327096[_0x380455].resolve();
          }
          return _0x215b54.prototype.resolve.call(this);
        };
        _0x19f3a9.prototype.add = function (_0x3ecb5c) {
          if (this.get(_0x3ecb5c.name)) {
            throw Error("duplicate name '" + _0x3ecb5c.name + "' in " + this);
          }
          return _0x3ecb5c instanceof _0x61a95 ? (this.methods[_0x3ecb5c.name] = _0x3ecb5c, _0x3ecb5c.parent = this, _0x247a3e(this)) : _0x215b54.prototype.add.call(this, _0x3ecb5c);
        };
        _0x19f3a9.prototype.remove = function (_0x22b375) {
          if (_0x22b375 instanceof _0x61a95) {
            if (this.methods[_0x22b375.name] !== _0x22b375) {
              throw Error(_0x22b375 + " is not a member of " + this);
            }
            delete this.methods[_0x22b375.name];
            _0x22b375.parent = null;
            return _0x247a3e(this);
          }
          return _0x215b54.prototype.remove.call(this, _0x22b375);
        };
        _0x19f3a9.prototype.create = function (_0x38203c, _0x45ec08, _0x3f4808) {
          var _0x31732e;
          var _0x3be36a = new _0xd8babd.Service(_0x38203c, _0x45ec08, _0x3f4808);
          for (var _0x58a047 = 0x0; _0x58a047 < this.methodsArray.length; ++_0x58a047) {
            var _0x11b1c2 = _0x43f089.lcFirst((_0x31732e = this._methodsArray[_0x58a047]).resolve().name).replace(/[^$\w_]/g, '');
            _0x3be36a[_0x11b1c2] = _0x43f089.codegen(['r', 'c'], _0x43f089.isReserved(_0x11b1c2) ? _0x11b1c2 + '_' : _0x11b1c2)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x31732e,
              'q': _0x31732e.resolvedRequestType.ctor,
              's': _0x31732e.resolvedResponseType.ctor
            });
          }
          return _0x3be36a;
        };
        _0x439df6.exports;
      }, function () {
        return {
          './namespace': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './method': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      _0x2e006d.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/message.js', function (_0x300767, _0x3475bc, _0x44ebd8, _0x2ad027, _0x279dcb) {
        _0x44ebd8.exports = _0x16c619;
        var _0x470d4e = _0x3475bc("./util/minimal");
        function _0x16c619(_0x1eff8f) {
          if (_0x1eff8f) {
            var _0x444511 = Object.keys(_0x1eff8f);
            for (var _0xf4548e = 0x0; _0xf4548e < _0x444511.length; ++_0xf4548e) {
              this[_0x444511[_0xf4548e]] = _0x1eff8f[_0x444511[_0xf4548e]];
            }
          }
        }
        _0x16c619.create = function (_0x39ef70) {
          return this.$type.create(_0x39ef70);
        };
        _0x16c619.encode = function (_0x42b68f, _0xf52867) {
          return this.$type.encode(_0x42b68f, _0xf52867);
        };
        _0x16c619.encodeDelimited = function (_0x1f5d23, _0x5c0519) {
          return this.$type.encodeDelimited(_0x1f5d23, _0x5c0519);
        };
        _0x16c619.decode = function (_0x26d46a) {
          return this.$type.decode(_0x26d46a);
        };
        _0x16c619.decodeDelimited = function (_0x588dfb) {
          return this.$type.decodeDelimited(_0x588dfb);
        };
        _0x16c619.verify = function (_0x3fe5e6) {
          return this.$type.verify(_0x3fe5e6);
        };
        _0x16c619.fromObject = function (_0x339511) {
          return this.$type.fromObject(_0x339511);
        };
        _0x16c619.toObject = function (_0x2c78cd, _0x7ccb2b) {
          return this.$type.toObject(_0x2c78cd, _0x7ccb2b);
        };
        _0x16c619.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x470d4e.toJSONOptions);
        };
        _0x44ebd8.exports;
      }, function () {
        return {
          './util/minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js'
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0x505976, _0x406b1b, _0x3f06cc, _0xd88c00, _0x2c1bec) {
        _0x3f06cc.exports = function (_0x163b67) {
          var _0x2ac64e = _0x517d15.codegen(['r', 'l'], _0x163b67.name + '$decode')("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x163b67.fieldsArray.filter(function (_0x44d913) {
            return _0x44d913.map;
          }).length ? ",k,value" : ''))('while(r.pos<c){')("var t=r.uint32()");
          if (_0x163b67.group) {
            _0x2ac64e("if((t&7)===4)")("break");
          }
          _0x2ac64e("switch(t>>>3){");
          for (var _0x2fcbe4 = 0x0; _0x2fcbe4 < _0x163b67.fieldsArray.length; ++_0x2fcbe4) {
            var _0x48c6e8 = _0x163b67._fieldsArray[_0x2fcbe4].resolve();
            var _0x26ed5f = _0x48c6e8.resolvedType instanceof _0x496d51 ? "int32" : _0x48c6e8.type;
            var _0x33dbf7 = 'm' + _0x517d15.safeProp(_0x48c6e8.name);
            _0x2ac64e("case %i:", _0x48c6e8.id);
            if (_0x48c6e8.map) {
              _0x2ac64e("if(%s===util.emptyObject)", _0x33dbf7)("%s={}", _0x33dbf7)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x438e2c.defaults[_0x48c6e8.keyType]) {
                _0x2ac64e("k=%j", _0x438e2c.defaults[_0x48c6e8.keyType]);
              } else {
                _0x2ac64e('k=null');
              }
              if (undefined !== _0x438e2c.defaults[_0x26ed5f]) {
                _0x2ac64e("value=%j", _0x438e2c.defaults[_0x26ed5f]);
              } else {
                _0x2ac64e("value=null");
              }
              _0x2ac64e("while(r.pos<c2){")("var tag2=r.uint32()")('switch(tag2>>>3){')("case 1: k=r.%s(); break", _0x48c6e8.keyType)("case 2:");
              if (undefined === _0x438e2c.basic[_0x26ed5f]) {
                _0x2ac64e("value=types[%i].decode(r,r.uint32())", _0x2fcbe4);
              } else {
                _0x2ac64e("value=r.%s()", _0x26ed5f);
              }
              _0x2ac64e("break")("default:")('r.skipType(tag2&7)')("break")('}')('}');
              if (undefined !== _0x438e2c.long[_0x48c6e8.keyType]) {
                _0x2ac64e("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x33dbf7);
              } else {
                _0x2ac64e("%s[k]=value", _0x33dbf7);
              }
            } else if (_0x48c6e8.repeated) {
              _0x2ac64e("if(!(%s&&%s.length))", _0x33dbf7, _0x33dbf7)("%s=[]", _0x33dbf7);
              if (undefined !== _0x438e2c.packed[_0x26ed5f]) {
                _0x2ac64e("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")('%s.push(r.%s())', _0x33dbf7, _0x26ed5f)("}else");
              }
              if (undefined === _0x438e2c.basic[_0x26ed5f]) {
                _0x2ac64e(_0x48c6e8.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x33dbf7, _0x2fcbe4);
              } else {
                _0x2ac64e('%s.push(r.%s())', _0x33dbf7, _0x26ed5f);
              }
            } else if (undefined === _0x438e2c.basic[_0x26ed5f]) {
              _0x2ac64e(_0x48c6e8.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", _0x33dbf7, _0x2fcbe4);
            } else {
              _0x2ac64e("%s=r.%s()", _0x33dbf7, _0x26ed5f);
            }
            _0x2ac64e('break');
          }
          _0x2ac64e("default:")("r.skipType(t&7)")("break")('}')('}');
          for (_0x2fcbe4 = 0x0; _0x2fcbe4 < _0x163b67._fieldsArray.length; ++_0x2fcbe4) {
            var _0x6a7c72 = _0x163b67._fieldsArray[_0x2fcbe4];
            if (_0x6a7c72.required) {
              _0x2ac64e("if(!m.hasOwnProperty(%j))", _0x6a7c72.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x6a7c72.name + "'");
            }
          }
          return _0x2ac64e("return m");
        };
        var _0x496d51 = _0x406b1b('./enum');
        var _0x438e2c = _0x406b1b('./types');
        var _0x517d15 = _0x406b1b("./util");
        _0x3f06cc.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (_0x243aa2, _0x36bcf7, _0x59aa4f, _0x1acf02, _0x50a786) {
        _0x59aa4f.exports = function (_0x5ccdcb) {
          var _0x47d2fd = _0x1bf9f8.codegen(['m'], _0x5ccdcb.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var _0x4cb976 = _0x5ccdcb.oneofsArray;
          var _0x46f960 = {};
          if (_0x4cb976.length) {
            _0x47d2fd("var p={}");
          }
          for (var _0x2008d4 = 0x0; _0x2008d4 < _0x5ccdcb.fieldsArray.length; ++_0x2008d4) {
            var _0xdec93a = _0x5ccdcb._fieldsArray[_0x2008d4].resolve();
            var _0x3ee84f = 'm' + _0x1bf9f8.safeProp(_0xdec93a.name);
            if (_0xdec93a.optional) {
              _0x47d2fd("if(%s!=null&&m.hasOwnProperty(%j)){", _0x3ee84f, _0xdec93a.name);
            }
            if (_0xdec93a.map) {
              _0x47d2fd("if(!util.isObject(%s))", _0x3ee84f)("return%j", _0xdec93a.name + ": " + _0x503c(0x2ff) + (_0xdec93a.repeated && "array" !== _0x503c(0x2ff) ? '[]' : _0xdec93a.map && false ? '{k:' + _0xdec93a.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x3ee84f)("for(var i=0;i<k.length;++i){");
              _0x59ec13(_0x47d2fd, _0xdec93a, "k[i]");
              _0x1c6246(_0x47d2fd, _0xdec93a, _0x2008d4, _0x3ee84f + "[k[i]]")('}');
            } else {
              if (_0xdec93a.repeated) {
                _0x47d2fd("if(!Array.isArray(%s))", _0x3ee84f)("return%j", _0xdec93a.name + ": " + _0x503c(0x3c3) + (_0xdec93a.repeated && "array" !== _0x503c(0x3c3) ? '[]' : _0xdec93a.map && true ? '{k:' + _0xdec93a.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x3ee84f);
                _0x1c6246(_0x47d2fd, _0xdec93a, _0x2008d4, _0x3ee84f + '[i]')('}');
              } else {
                if (_0xdec93a.partOf) {
                  var _0x3e00c5 = _0x1bf9f8.safeProp(_0xdec93a.partOf.name);
                  if (0x1 === _0x46f960[_0xdec93a.partOf.name]) {
                    _0x47d2fd("if(p%s===1)", _0x3e00c5)("return%j", _0xdec93a.partOf.name + ": multiple values");
                  }
                  _0x46f960[_0xdec93a.partOf.name] = 0x1;
                  _0x47d2fd('p%s=1', _0x3e00c5);
                }
                _0x1c6246(_0x47d2fd, _0xdec93a, _0x2008d4, _0x3ee84f);
              }
            }
            if (_0xdec93a.optional) {
              _0x47d2fd('}');
            }
          }
          return _0x47d2fd("return null");
        };
        var _0x5efac0 = _0x36bcf7("./enum");
        var _0x1bf9f8 = _0x36bcf7('./util');
        function _0x1c6246(_0x467513, _0x1d2ed3, _0x5e8896, _0x3e085) {
          if (_0x1d2ed3.resolvedType) {
            if (_0x1d2ed3.resolvedType instanceof _0x5efac0) {
              _0x467513('switch(%s){', _0x3e085)('default:')("return%j", _0x1d2ed3.name + ": " + "enum value" + (_0x1d2ed3.repeated && true ? '[]' : _0x1d2ed3.map && true ? '{k:' + _0x1d2ed3.keyType + '}' : '') + " expected");
              var _0x44e33b = Object.keys(_0x1d2ed3.resolvedType.values);
              for (var _0x37a2f1 = 0x0; _0x37a2f1 < _0x44e33b.length; ++_0x37a2f1) {
                _0x467513("case %i:", _0x1d2ed3.resolvedType.values[_0x44e33b[_0x37a2f1]]);
              }
              _0x467513("break")('}');
            } else {
              _0x467513('{')("var e=types[%i].verify(%s);", _0x5e8896, _0x3e085)("if(e)")("return%j+e", _0x1d2ed3.name + '.')('}');
            }
          } else {
            switch (_0x1d2ed3.type) {
              case "int32":
              case "uint32":
              case 'sint32':
              case 'fixed32':
              case 'sfixed32':
                _0x467513("if(!util.isInteger(%s))", _0x3e085)("return%j", _0x1d2ed3.name + ": " + _0x503c(0xaf) + (_0x1d2ed3.repeated && "array" !== _0x503c(0xaf) ? '[]' : _0x1d2ed3.map && true ? '{k:' + _0x1d2ed3.keyType + '}' : '') + " expected");
                break;
              case 'int64':
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x467513("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0x3e085, _0x3e085, _0x3e085, _0x3e085)("return%j", _0x1d2ed3.name + ": " + _0x503c(0x3e4) + (_0x1d2ed3.repeated && "array" !== _0x503c(0x3e4) ? '[]' : _0x1d2ed3.map && true ? '{k:' + _0x1d2ed3.keyType + '}' : '') + " expected");
                break;
              case "float":
              case 'double':
                _0x467513("if(typeof %s!==\"number\")", _0x3e085)("return%j", _0x1d2ed3.name + ": " + _0x503c(0x534) + (_0x1d2ed3.repeated && "array" !== _0x503c(0x534) ? '[]' : _0x1d2ed3.map && true ? '{k:' + _0x1d2ed3.keyType + '}' : '') + " expected");
                break;
              case "bool":
                _0x467513("if(typeof %s!==\"boolean\")", _0x3e085)('return%j', _0x1d2ed3.name + ": " + _0x503c(0x195) + (_0x1d2ed3.repeated && "array" !== _0x503c(0x195) ? '[]' : _0x1d2ed3.map && true ? '{k:' + _0x1d2ed3.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x467513('if(!util.isString(%s))', _0x3e085)('return%j', _0x1d2ed3.name + ": " + _0x503c(0x217) + (_0x1d2ed3.repeated && "array" !== _0x503c(0x217) ? '[]' : _0x1d2ed3.map && true ? '{k:' + _0x1d2ed3.keyType + '}' : '') + " expected");
                break;
              case 'bytes':
                _0x467513("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x3e085, _0x3e085, _0x3e085)('return%j', _0x1d2ed3.name + ": " + _0x503c(0x450) + (_0x1d2ed3.repeated && "array" !== _0x503c(0x450) ? '[]' : _0x1d2ed3.map && true ? '{k:' + _0x1d2ed3.keyType + '}' : '') + " expected");
            }
          }
          return _0x467513;
        }
        function _0x59ec13(_0x29c1c0, _0x2d6a2f, _0x4eea15) {
          switch (_0x2d6a2f.keyType) {
            case 'int32':
            case "uint32":
            case "sint32":
            case "fixed32":
            case 'sfixed32':
              _0x29c1c0("if(!util.key32Re.test(%s))", _0x4eea15)("return%j", _0x2d6a2f.name + ": " + _0x503c(0x17f) + (_0x2d6a2f.repeated && "array" !== _0x503c(0x17f) ? '[]' : _0x2d6a2f.map && true ? '{k:' + _0x2d6a2f.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              _0x29c1c0("if(!util.key64Re.test(%s))", _0x4eea15)("return%j", _0x2d6a2f.name + ": " + _0x503c(0x681) + (_0x2d6a2f.repeated && "array" !== _0x503c(0x681) ? '[]' : _0x2d6a2f.map && true ? '{k:' + _0x2d6a2f.keyType + '}' : '') + " expected");
              break;
            case "bool":
              _0x29c1c0("if(!util.key2Re.test(%s))", _0x4eea15)("return%j", _0x2d6a2f.name + ": " + _0x503c(0x60d) + (_0x2d6a2f.repeated && "array" !== _0x503c(0x60d) ? '[]' : _0x2d6a2f.map && true ? '{k:' + _0x2d6a2f.keyType + '}' : '') + " expected");
          }
          return _0x29c1c0;
        }
        _0x59aa4f.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/converter.js", function (_0x16c21a, _0x32db86, _0x274468, _0x2a6eeb, _0x290520) {
        var _0x48ffcf = _0x32db86("./enum");
        var _0x497003 = _0x32db86("./util");
        function _0x194354(_0x525d91, _0x28ae39, _0x1af543, _0x8a9550) {
          if (_0x28ae39.resolvedType) {
            if (_0x28ae39.resolvedType instanceof _0x48ffcf) {
              _0x525d91("switch(d%s){", _0x8a9550);
              var _0x4e73cd = _0x28ae39.resolvedType.values;
              var _0x26cdf1 = Object.keys(_0x4e73cd);
              for (var _0x3e50d4 = 0x0; _0x3e50d4 < _0x26cdf1.length; ++_0x3e50d4) {
                if (_0x28ae39.repeated && _0x4e73cd[_0x26cdf1[_0x3e50d4]] === _0x28ae39.typeDefault) {
                  _0x525d91("default:");
                }
                _0x525d91("case%j:", _0x26cdf1[_0x3e50d4])("case %i:", _0x4e73cd[_0x26cdf1[_0x3e50d4]])("m%s=%j", _0x8a9550, _0x4e73cd[_0x26cdf1[_0x3e50d4]])("break");
              }
              _0x525d91('}');
            } else {
              _0x525d91("if(typeof d%s!==\"object\")", _0x8a9550)("throw TypeError(%j)", _0x28ae39.fullName + ": object expected")('m%s=types[%i].fromObject(d%s)', _0x8a9550, _0x1af543, _0x8a9550);
            }
          } else {
            var _0x591904 = false;
            switch (_0x28ae39.type) {
              case "double":
              case "float":
                _0x525d91('m%s=Number(d%s)', _0x8a9550, _0x8a9550);
                break;
              case "uint32":
              case "fixed32":
                _0x525d91("m%s=d%s>>>0", _0x8a9550, _0x8a9550);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                _0x525d91('m%s=d%s|0', _0x8a9550, _0x8a9550);
                break;
              case 'uint64':
                _0x591904 = true;
              case "int64":
              case 'sint64':
              case "fixed64":
              case "sfixed64":
                _0x525d91("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x8a9550, _0x8a9550, _0x591904)("else if(typeof d%s===\"string\")", _0x8a9550)('m%s=parseInt(d%s,10)', _0x8a9550, _0x8a9550)("else if(typeof d%s===\"number\")", _0x8a9550)("m%s=d%s", _0x8a9550, _0x8a9550)("else if(typeof d%s===\"object\")", _0x8a9550)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x8a9550, _0x8a9550, _0x8a9550, _0x591904 ? "true" : '');
                break;
              case "bytes":
                _0x525d91("if(typeof d%s===\"string\")", _0x8a9550)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", _0x8a9550, _0x8a9550, _0x8a9550)("else if(d%s.length)", _0x8a9550)('m%s=d%s', _0x8a9550, _0x8a9550);
                break;
              case 'string':
                _0x525d91("m%s=String(d%s)", _0x8a9550, _0x8a9550);
                break;
              case "bool":
                _0x525d91("m%s=Boolean(d%s)", _0x8a9550, _0x8a9550);
            }
          }
          return _0x525d91;
        }
        function _0x11284a(_0x549c99, _0x5b2ab9, _0x470541, _0x1084a7) {
          if (_0x5b2ab9.resolvedType) {
            if (_0x5b2ab9.resolvedType instanceof _0x48ffcf) {
              _0x549c99("d%s=o.enums===String?types[%i].values[m%s]:m%s", _0x1084a7, _0x470541, _0x1084a7, _0x1084a7);
            } else {
              _0x549c99("d%s=types[%i].toObject(m%s,o)", _0x1084a7, _0x470541, _0x1084a7);
            }
          } else {
            var _0x56ec3e = false;
            switch (_0x5b2ab9.type) {
              case "double":
              case 'float':
                _0x549c99("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x1084a7, _0x1084a7, _0x1084a7, _0x1084a7);
                break;
              case "uint64":
                _0x56ec3e = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x549c99("if(typeof m%s===\"number\")", _0x1084a7)("d%s=o.longs===String?String(m%s):m%s", _0x1084a7, _0x1084a7, _0x1084a7)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x1084a7, _0x1084a7, _0x1084a7, _0x1084a7, _0x56ec3e ? "true" : '', _0x1084a7);
                break;
              case "bytes":
                _0x549c99('d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s', _0x1084a7, _0x1084a7, _0x1084a7, _0x1084a7, _0x1084a7);
                break;
              default:
                _0x549c99("d%s=m%s", _0x1084a7, _0x1084a7);
            }
          }
          return _0x549c99;
        }
        _0x16c21a.fromObject = function (_0x66d2b9) {
          var _0x49c095 = _0x66d2b9.fieldsArray;
          var _0x321c5f = _0x497003.codegen(['d'], _0x66d2b9.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0x49c095.length) {
            return _0x321c5f("return new this.ctor");
          }
          _0x321c5f("var m=new this.ctor");
          for (var _0x2d813b = 0x0; _0x2d813b < _0x49c095.length; ++_0x2d813b) {
            var _0x39ff26 = _0x49c095[_0x2d813b].resolve();
            var _0x27b029 = _0x497003.safeProp(_0x39ff26.name);
            if (_0x39ff26.map) {
              _0x321c5f("if(d%s){", _0x27b029)("if(typeof d%s!==\"object\")", _0x27b029)("throw TypeError(%j)", _0x39ff26.fullName + ": object expected")("m%s={}", _0x27b029)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x27b029);
              _0x194354(_0x321c5f, _0x39ff26, _0x2d813b, _0x27b029 + "[ks[i]]")('}')('}');
            } else if (_0x39ff26.repeated) {
              _0x321c5f("if(d%s){", _0x27b029)('if(!Array.isArray(d%s))', _0x27b029)("throw TypeError(%j)", _0x39ff26.fullName + ": array expected")('m%s=[]', _0x27b029)("for(var i=0;i<d%s.length;++i){", _0x27b029);
              _0x194354(_0x321c5f, _0x39ff26, _0x2d813b, _0x27b029 + "[i]")('}')('}');
            } else {
              if (!(_0x39ff26.resolvedType instanceof _0x48ffcf)) {
                _0x321c5f('if(d%s!=null){', _0x27b029);
              }
              _0x194354(_0x321c5f, _0x39ff26, _0x2d813b, _0x27b029);
              if (!(_0x39ff26.resolvedType instanceof _0x48ffcf)) {
                _0x321c5f('}');
              }
            }
          }
          return _0x321c5f("return m");
        };
        _0x16c21a.toObject = function (_0xcd0b2c) {
          var _0x470e6b = _0xcd0b2c.fieldsArray.slice().sort(_0x497003.compareFieldsById);
          if (!_0x470e6b.length) {
            return _0x497003.codegen()("return {}");
          }
          var _0x404bf6 = _0x497003.codegen(['m', 'o'], _0xcd0b2c.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var _0x5afd02 = [];
          var _0x13f32e = [];
          var _0x2aa17f = [];
          for (var _0x4544f5 = 0x0; _0x4544f5 < _0x470e6b.length; ++_0x4544f5) {
            if (!_0x470e6b[_0x4544f5].partOf) {
              (_0x470e6b[_0x4544f5].resolve().repeated ? _0x5afd02 : _0x470e6b[_0x4544f5].map ? _0x13f32e : _0x2aa17f).push(_0x470e6b[_0x4544f5]);
            }
          }
          if (_0x5afd02.length) {
            _0x404bf6("if(o.arrays||o.defaults){");
            for (_0x4544f5 = 0x0; _0x4544f5 < _0x5afd02.length; ++_0x4544f5) {
              _0x404bf6("d%s=[]", _0x497003.safeProp(_0x5afd02[_0x4544f5].name));
            }
            _0x404bf6('}');
          }
          if (_0x13f32e.length) {
            _0x404bf6("if(o.objects||o.defaults){");
            for (_0x4544f5 = 0x0; _0x4544f5 < _0x13f32e.length; ++_0x4544f5) {
              _0x404bf6("d%s={}", _0x497003.safeProp(_0x13f32e[_0x4544f5].name));
            }
            _0x404bf6('}');
          }
          if (_0x2aa17f.length) {
            _0x404bf6("if(o.defaults){");
            for (_0x4544f5 = 0x0; _0x4544f5 < _0x2aa17f.length; ++_0x4544f5) {
              var _0x4cb72e = _0x2aa17f[_0x4544f5];
              var _0xd75b76 = _0x497003.safeProp(_0x4cb72e.name);
              if (_0x4cb72e.resolvedType instanceof _0x48ffcf) {
                _0x404bf6("d%s=o.enums===String?%j:%j", _0xd75b76, _0x4cb72e.resolvedType.valuesById[_0x4cb72e.typeDefault], _0x4cb72e.typeDefault);
              } else {
                if (_0x4cb72e.long) {
                  _0x404bf6('if(util.Long){')("var n=new util.Long(%i,%i,%j)", _0x4cb72e.typeDefault.low, _0x4cb72e.typeDefault.high, _0x4cb72e.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0xd75b76)("}else")("d%s=o.longs===String?%j:%i", _0xd75b76, _0x4cb72e.typeDefault.toString(), _0x4cb72e.typeDefault.toNumber());
                } else {
                  if (_0x4cb72e.bytes) {
                    var _0x263373 = '[' + Array.prototype.slice.call(_0x4cb72e.typeDefault).join(',') + ']';
                    _0x404bf6('if(o.bytes===String)d%s=%j', _0xd75b76, String.fromCharCode.apply(String, _0x4cb72e.typeDefault))("else{")("d%s=%s", _0xd75b76, _0x263373)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0xd75b76, _0xd75b76)('}');
                  } else {
                    _0x404bf6("d%s=%j", _0xd75b76, _0x4cb72e.typeDefault);
                  }
                }
              }
            }
            _0x404bf6('}');
          }
          var _0x4af59c = false;
          for (_0x4544f5 = 0x0; _0x4544f5 < _0x470e6b.length; ++_0x4544f5) {
            _0x4cb72e = _0x470e6b[_0x4544f5];
            var _0x5b1651 = _0xcd0b2c._fieldsArray.indexOf(_0x4cb72e);
            _0xd75b76 = _0x497003.safeProp(_0x4cb72e.name);
            if (_0x4cb72e.map) {
              if (!_0x4af59c) {
                _0x4af59c = true;
                _0x404bf6("var ks2");
              }
              _0x404bf6("if(m%s&&(ks2=Object.keys(m%s)).length){", _0xd75b76, _0xd75b76)("d%s={}", _0xd75b76)("for(var j=0;j<ks2.length;++j){");
              _0x11284a(_0x404bf6, _0x4cb72e, _0x5b1651, _0xd75b76 + '[ks2[j]]')('}');
            } else if (_0x4cb72e.repeated) {
              _0x404bf6("if(m%s&&m%s.length){", _0xd75b76, _0xd75b76)("d%s=[]", _0xd75b76)("for(var j=0;j<m%s.length;++j){", _0xd75b76);
              _0x11284a(_0x404bf6, _0x4cb72e, _0x5b1651, _0xd75b76 + '[j]')('}');
            } else {
              _0x404bf6('if(m%s!=null&&m.hasOwnProperty(%j)){', _0xd75b76, _0x4cb72e.name);
              _0x11284a(_0x404bf6, _0x4cb72e, _0x5b1651, _0xd75b76);
              if (_0x4cb72e.partOf) {
                _0x404bf6("if(o.oneofs)")("d%s=%j", _0x497003.safeProp(_0x4cb72e.partOf.name), _0x4cb72e.name);
              }
            }
            _0x404bf6('}');
          }
          return _0x404bf6("return d");
        };
        _0x274468.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js", function (_0x43d864, _0x34ce0c, _0x25cab5, _0x29618d, _0x664332) {
        var _0x9da07e = _0x34ce0c("./message");
        _0x43d864[".google.protobuf.Any"] = {
          'fromObject': function (_0x545aea) {
            if (_0x545aea && _0x545aea['@type']) {
              var _0x4a9573 = _0x545aea['@type'].substring(_0x545aea["@type"].lastIndexOf('/') + 0x1);
              var _0x1598bc = this.lookup(_0x4a9573);
              if (_0x1598bc) {
                var _0x103bcd = '.' === _0x545aea["@type"].charAt(0x0) ? _0x545aea["@type"].substr(0x1) : _0x545aea["@type"];
                if (-0x1 === _0x103bcd.indexOf('/')) {
                  _0x103bcd = '/' + _0x103bcd;
                }
                return this.create({
                  'type_url': _0x103bcd,
                  'value': _0x1598bc.encode(_0x1598bc.fromObject(_0x545aea)).finish()
                });
              }
            }
            return this.fromObject(_0x545aea);
          },
          'toObject': function (_0x4b13b5, _0x5ba29e) {
            var _0x22122a = '';
            var _0x3ecc71 = '';
            if (_0x5ba29e && _0x5ba29e.json && _0x4b13b5.type_url && _0x4b13b5.value) {
              _0x3ecc71 = _0x4b13b5.type_url.substring(_0x4b13b5.type_url.lastIndexOf('/') + 0x1);
              _0x22122a = _0x4b13b5.type_url.substring(0x0, _0x4b13b5.type_url.lastIndexOf('/') + 0x1);
              var _0x2a1dcf = this.lookup(_0x3ecc71);
              if (_0x2a1dcf) {
                _0x4b13b5 = _0x2a1dcf.decode(_0x4b13b5.value);
              }
            }
            if (!(_0x4b13b5 instanceof this.ctor) && _0x4b13b5 instanceof _0x9da07e) {
              var _0x4070da = _0x4b13b5.$type.toObject(_0x4b13b5, _0x5ba29e);
              if ('' === _0x22122a) {
                _0x22122a = "type.googleapis.com/";
              }
              _0x3ecc71 = _0x22122a + ('.' === _0x4b13b5.$type.fullName[0x0] ? _0x4b13b5.$type.fullName.substr(0x1) : _0x4b13b5.$type.fullName);
              _0x4070da["@type"] = _0x3ecc71;
              return _0x4070da;
            }
            return this.toObject(_0x4b13b5, _0x5ba29e);
          }
        };
        _0x25cab5.exports;
      }, function () {
        return {
          './message': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/message.js'
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/type.js", function (_0x4eea71, _0x21ba45, _0x27e415, _0x39231b, _0x561334) {
        _0x27e415.exports = _0x5ebc34;
        var _0x2b0463 = _0x21ba45("./namespace");
        ((_0x5ebc34.prototype = Object.create(_0x2b0463.prototype)).constructor = _0x5ebc34).className = "Type";
        var _0xbb44fa = _0x21ba45("./enum");
        var _0x1df2a5 = _0x21ba45("./oneof");
        var _0x4c1dde = _0x21ba45('./field');
        var _0x484e59 = _0x21ba45("./mapfield");
        var _0x535039 = _0x21ba45("./service");
        var _0x4fdd2c = _0x21ba45("./message");
        var _0x1e8cda = _0x21ba45("./reader");
        var _0x213b5e = _0x21ba45("./writer");
        var _0x27b019 = _0x21ba45("./util");
        var _0xccca3b = _0x21ba45("./encoder");
        var _0x3902df = _0x21ba45('./decoder');
        var _0xeb933 = _0x21ba45("./verifier");
        var _0x1496a1 = _0x21ba45("./converter");
        var _0x125148 = _0x21ba45('./wrappers');
        function _0x5ebc34(_0x97d28f, _0x50bd7c) {
          _0x2b0463.call(this, _0x97d28f, _0x50bd7c);
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
        function _0x135488(_0x131fd5) {
          _0x131fd5._fieldsById = _0x131fd5._fieldsArray = _0x131fd5._oneofsArray = null;
          delete _0x131fd5.encode;
          delete _0x131fd5.decode;
          delete _0x131fd5.verify;
          return _0x131fd5;
        }
        Object.defineProperties(_0x5ebc34.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0xec5251 = Object.keys(this.fields);
              for (var _0x1a5c5c = 0x0; _0x1a5c5c < _0xec5251.length; ++_0x1a5c5c) {
                var _0x41d839 = this.fields[_0xec5251[_0x1a5c5c]];
                var _0x1ca970 = _0x41d839.id;
                if (this._fieldsById[_0x1ca970]) {
                  throw Error("duplicate id " + _0x1ca970 + " in " + this);
                }
                this._fieldsById[_0x1ca970] = _0x41d839;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x27b019.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x27b019.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x5ebc34.generateConstructor(this)());
            },
            'set': function (_0x6cae7) {
              var _0x46d4e4 = _0x6cae7.prototype;
              if (!(_0x46d4e4 instanceof _0x4fdd2c)) {
                (_0x6cae7.prototype = new _0x4fdd2c()).constructor = _0x6cae7;
                _0x27b019.merge(_0x6cae7.prototype, _0x46d4e4);
              }
              _0x6cae7.$type = _0x6cae7.prototype.$type = this;
              _0x27b019.merge(_0x6cae7, _0x4fdd2c, true);
              this._ctor = _0x6cae7;
              for (var _0x2771bd = 0x0; _0x2771bd < this.fieldsArray.length; ++_0x2771bd) {
                this._fieldsArray[_0x2771bd].resolve();
              }
              var _0x564335 = {};
              for (_0x2771bd = 0x0; _0x2771bd < this.oneofsArray.length; ++_0x2771bd) {
                _0x564335[this._oneofsArray[_0x2771bd].resolve().name] = {
                  'get': _0x27b019.oneOfGetter(this._oneofsArray[_0x2771bd].oneof),
                  'set': _0x27b019.oneOfSetter(this._oneofsArray[_0x2771bd].oneof)
                };
              }
              if (_0x2771bd) {
                Object.defineProperties(_0x6cae7.prototype, _0x564335);
              }
            }
          }
        });
        _0x5ebc34.generateConstructor = function (_0x2d3cfa) {
          var _0x9e8605;
          var _0x52c939 = _0x27b019.codegen(['p'], _0x2d3cfa.name);
          for (var _0x53a3c4 = 0x0; _0x53a3c4 < _0x2d3cfa.fieldsArray.length; ++_0x53a3c4) {
            if ((_0x9e8605 = _0x2d3cfa._fieldsArray[_0x53a3c4]).map) {
              _0x52c939("this%s={}", _0x27b019.safeProp(_0x9e8605.name));
            } else if (_0x9e8605.repeated) {
              _0x52c939('this%s=[]', _0x27b019.safeProp(_0x9e8605.name));
            }
          }
          return _0x52c939("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0x5ebc34.fromJSON = function (_0x26c587, _0x5e1218) {
          var _0x3f61d9 = new _0x5ebc34(_0x26c587, _0x5e1218.options);
          _0x3f61d9.extensions = _0x5e1218.extensions;
          _0x3f61d9.reserved = _0x5e1218.reserved;
          var _0x33e0a4 = Object.keys(_0x5e1218.fields);
          for (var _0x46d148 = 0x0; _0x46d148 < _0x33e0a4.length; ++_0x46d148) {
            _0x3f61d9.add((undefined !== _0x5e1218.fields[_0x33e0a4[_0x46d148]].keyType ? _0x484e59.fromJSON : _0x4c1dde.fromJSON)(_0x33e0a4[_0x46d148], _0x5e1218.fields[_0x33e0a4[_0x46d148]]));
          }
          if (_0x5e1218.oneofs) {
            _0x33e0a4 = Object.keys(_0x5e1218.oneofs);
            for (_0x46d148 = 0x0; _0x46d148 < _0x33e0a4.length; ++_0x46d148) {
              _0x3f61d9.add(_0x1df2a5.fromJSON(_0x33e0a4[_0x46d148], _0x5e1218.oneofs[_0x33e0a4[_0x46d148]]));
            }
          }
          if (_0x5e1218.nested) {
            _0x33e0a4 = Object.keys(_0x5e1218.nested);
            for (_0x46d148 = 0x0; _0x46d148 < _0x33e0a4.length; ++_0x46d148) {
              var _0x3700f6 = _0x5e1218.nested[_0x33e0a4[_0x46d148]];
              _0x3f61d9.add((undefined !== _0x3700f6.id ? _0x4c1dde.fromJSON : undefined !== _0x3700f6.fields ? _0x5ebc34.fromJSON : undefined !== _0x3700f6.values ? _0xbb44fa.fromJSON : undefined !== _0x3700f6.methods ? _0x535039.fromJSON : _0x2b0463.fromJSON)(_0x33e0a4[_0x46d148], _0x3700f6));
            }
          }
          if (_0x5e1218.extensions && _0x5e1218.extensions.length) {
            _0x3f61d9.extensions = _0x5e1218.extensions;
          }
          if (_0x5e1218.reserved && _0x5e1218.reserved.length) {
            _0x3f61d9.reserved = _0x5e1218.reserved;
          }
          if (_0x5e1218.group) {
            _0x3f61d9.group = true;
          }
          if (_0x5e1218.comment) {
            _0x3f61d9.comment = _0x5e1218.comment;
          }
          return _0x3f61d9;
        };
        _0x5ebc34.prototype.toJSON = function (_0x5b8ae6) {
          var _0x390ecb = _0x2b0463.prototype.toJSON.call(this, _0x5b8ae6);
          var _0x31a158 = !!_0x5b8ae6 && Boolean(_0x5b8ae6.keepComments);
          return _0x27b019.toObject(["options", _0x390ecb && _0x390ecb.options || undefined, "oneofs", _0x2b0463.arrayToJSON(this.oneofsArray, _0x5b8ae6), "fields", _0x2b0463.arrayToJSON(this.fieldsArray.filter(function (_0x136278) {
            return !_0x136278.declaringField;
          }), _0x5b8ae6) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, 'group', this.group || undefined, "nested", _0x390ecb && _0x390ecb.nested || undefined, "comment", _0x31a158 ? this.comment : undefined]);
        };
        _0x5ebc34.prototype.resolveAll = function () {
          var _0x2df21d = this.fieldsArray;
          for (var _0x1c7a77 = 0x0; _0x1c7a77 < _0x2df21d.length;) {
            _0x2df21d[_0x1c7a77++].resolve();
          }
          var _0x2f6d55 = this.oneofsArray;
          for (_0x1c7a77 = 0x0; _0x1c7a77 < _0x2f6d55.length;) {
            _0x2f6d55[_0x1c7a77++].resolve();
          }
          return _0x2b0463.prototype.resolveAll.call(this);
        };
        _0x5ebc34.prototype.get = function (_0x2ca875) {
          return this.fields[_0x2ca875] || this.oneofs && this.oneofs[_0x2ca875] || this.nested && this.nested[_0x2ca875] || null;
        };
        _0x5ebc34.prototype.add = function (_0x27be44) {
          if (this.get(_0x27be44.name)) {
            throw Error("duplicate name '" + _0x27be44.name + "' in " + this);
          }
          if (_0x27be44 instanceof _0x4c1dde && undefined === _0x27be44.extend) {
            if (this._fieldsById ? this._fieldsById[_0x27be44.id] : this.fieldsById[_0x27be44.id]) {
              throw Error("duplicate id " + _0x27be44.id + " in " + this);
            }
            if (this.isReservedId(_0x27be44.id)) {
              throw Error("id " + _0x27be44.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x27be44.name)) {
              throw Error("name '" + _0x27be44.name + "' is reserved in " + this);
            }
            if (_0x27be44.parent) {
              _0x27be44.parent.remove(_0x27be44);
            }
            this.fields[_0x27be44.name] = _0x27be44;
            _0x27be44.message = this;
            _0x27be44.onAdd(this);
            return _0x135488(this);
          }
          return _0x27be44 instanceof _0x1df2a5 ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x27be44.name] = _0x27be44, _0x27be44.onAdd(this), _0x135488(this)) : _0x2b0463.prototype.add.call(this, _0x27be44);
        };
        _0x5ebc34.prototype.remove = function (_0x58b7e2) {
          if (_0x58b7e2 instanceof _0x4c1dde && undefined === _0x58b7e2.extend) {
            if (!this.fields || this.fields[_0x58b7e2.name] !== _0x58b7e2) {
              throw Error(_0x58b7e2 + " is not a member of " + this);
            }
            delete this.fields[_0x58b7e2.name];
            _0x58b7e2.parent = null;
            _0x58b7e2.onRemove(this);
            return _0x135488(this);
          }
          if (_0x58b7e2 instanceof _0x1df2a5) {
            if (!this.oneofs || this.oneofs[_0x58b7e2.name] !== _0x58b7e2) {
              throw Error(_0x58b7e2 + " is not a member of " + this);
            }
            delete this.oneofs[_0x58b7e2.name];
            _0x58b7e2.parent = null;
            _0x58b7e2.onRemove(this);
            return _0x135488(this);
          }
          return _0x2b0463.prototype.remove.call(this, _0x58b7e2);
        };
        _0x5ebc34.prototype.isReservedId = function (_0x57d054) {
          return _0x2b0463.isReservedId(this.reserved, _0x57d054);
        };
        _0x5ebc34.prototype.isReservedName = function (_0xf8e95e) {
          return _0x2b0463.isReservedName(this.reserved, _0xf8e95e);
        };
        _0x5ebc34.prototype.create = function (_0x4f7938) {
          return new this.ctor(_0x4f7938);
        };
        _0x5ebc34.prototype.setup = function () {
          var _0x57a445 = this.fullName;
          var _0x4979fe = [];
          for (var _0x27593d = 0x0; _0x27593d < this.fieldsArray.length; ++_0x27593d) {
            _0x4979fe.push(this._fieldsArray[_0x27593d].resolve().resolvedType);
          }
          this.encode = _0xccca3b(this)({
            'Writer': _0x213b5e,
            'types': _0x4979fe,
            'util': _0x27b019
          });
          this.decode = _0x3902df(this)({
            'Reader': _0x1e8cda,
            'types': _0x4979fe,
            'util': _0x27b019
          });
          this.verify = _0xeb933(this)({
            'types': _0x4979fe,
            'util': _0x27b019
          });
          this.fromObject = _0x1496a1.fromObject(this)({
            'types': _0x4979fe,
            'util': _0x27b019
          });
          this.toObject = _0x1496a1.toObject(this)({
            'types': _0x4979fe,
            'util': _0x27b019
          });
          var _0x36bdbb = _0x125148[_0x57a445];
          if (_0x36bdbb) {
            var _0x230e7e = Object.create(this);
            _0x230e7e.fromObject = this.fromObject;
            this.fromObject = _0x36bdbb.fromObject.bind(_0x230e7e);
            _0x230e7e.toObject = this.toObject;
            this.toObject = _0x36bdbb.toObject.bind(_0x230e7e);
          }
          return this;
        };
        _0x5ebc34.prototype.encode = function (_0xd1cde3, _0x2b3b3d) {
          return this.setup().encode(_0xd1cde3, _0x2b3b3d);
        };
        _0x5ebc34.prototype.encodeDelimited = function (_0x4db15f, _0x27bf9c) {
          return this.encode(_0x4db15f, _0x27bf9c && _0x27bf9c.len ? _0x27bf9c.fork() : _0x27bf9c).ldelim();
        };
        _0x5ebc34.prototype.decode = function (_0x5c87a1, _0x3b449c) {
          return this.setup().decode(_0x5c87a1, _0x3b449c);
        };
        _0x5ebc34.prototype.decodeDelimited = function (_0x303b40) {
          if (!(_0x303b40 instanceof _0x1e8cda)) {
            _0x303b40 = _0x1e8cda.create(_0x303b40);
          }
          return this.decode(_0x303b40, _0x303b40.uint32());
        };
        _0x5ebc34.prototype.verify = function (_0x4a25e5) {
          return this.setup().verify(_0x4a25e5);
        };
        _0x5ebc34.prototype.fromObject = function (_0x383b7c) {
          return this.setup().fromObject(_0x383b7c);
        };
        _0x5ebc34.prototype.toObject = function (_0x210c4c, _0x552a5a) {
          return this.setup().toObject(_0x210c4c, _0x552a5a);
        };
        _0x5ebc34.d = function (_0x4ce6af) {
          return function (_0x2744a4) {
            _0x27b019.decorateType(_0x2744a4, _0x4ce6af);
          };
        };
        _0x27e415.exports;
      }, function () {
        return {
          './namespace': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './message': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/message.js',
          './reader': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/reader.js',
          './writer': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './wrappers': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x256f16, _0x23ba48, _0x20d8e3, _0x461e3a, _0x407694) {
        _0x20d8e3.exports = _0x2f53b0;
        var _0x27d933 = _0x23ba48("./namespace");
        ((_0x2f53b0.prototype = Object.create(_0x27d933.prototype)).constructor = _0x2f53b0).className = "Root";
        var _0x410f3a;
        var _0x3c554c;
        var _0x5d90f8;
        var _0x53a7aa = _0x23ba48("./field");
        var _0x4fda39 = _0x23ba48('./enum');
        var _0x51e424 = _0x23ba48('./oneof');
        var _0x4320ba = _0x23ba48('./util');
        function _0x2f53b0(_0x3c1853) {
          _0x27d933.call(this, '', _0x3c1853);
          this.deferred = [];
          this.files = [];
        }
        function _0x4b3ee6() {}
        _0x2f53b0.fromJSON = function (_0x4ff57e, _0x5eb3a1) {
          if (!_0x5eb3a1) {
            _0x5eb3a1 = new _0x2f53b0();
          }
          if (_0x4ff57e.options) {
            _0x5eb3a1.setOptions(_0x4ff57e.options);
          }
          return _0x5eb3a1.addJSON(_0x4ff57e.nested);
        };
        _0x2f53b0.prototype.resolvePath = _0x4320ba.path.resolve;
        _0x2f53b0.prototype.fetch = _0x4320ba.fetch;
        _0x2f53b0.prototype.load = function _0x2c6d10(_0x41c296, _0x1892da, _0x1c8989) {
          if ("function" == typeof _0x1892da) {
            _0x1c8989 = _0x1892da;
            _0x1892da = undefined;
          }
          var _0x426897 = this;
          if (!_0x1c8989) {
            return _0x4320ba.asPromise(_0x2c6d10, _0x426897, _0x41c296, _0x1892da);
          }
          var _0x1bbc00 = _0x1c8989 === _0x4b3ee6;
          function _0x9dab04(_0x18db4e, _0x5eec7f) {
            if (_0x1c8989) {
              var _0x4ce8c5 = _0x1c8989;
              _0x1c8989 = null;
              if (_0x1bbc00) {
                throw _0x18db4e;
              }
              _0x4ce8c5(_0x18db4e, _0x5eec7f);
            }
          }
          function _0x5d50be(_0x416962) {
            var _0x14ea8a = _0x416962.lastIndexOf('google/protobuf/');
            if (_0x14ea8a > -0x1) {
              var _0x36ca02 = _0x416962.substring(_0x14ea8a);
              if (_0x36ca02 in _0x5d90f8) {
                return _0x36ca02;
              }
            }
            return null;
          }
          function _0x48c9bf(_0x283a95, _0x381235) {
            try {
              if (_0x4320ba.isString(_0x381235) && '{' === _0x381235.charAt(0x0)) {
                _0x381235 = JSON.parse(_0x381235);
              }
              if (_0x4320ba.isString(_0x381235)) {
                _0x3c554c.filename = _0x283a95;
                var _0x24bb00;
                var _0x1bcab9 = _0x3c554c(_0x381235, _0x426897, _0x1892da);
                var _0x40d7d3 = 0x0;
                if (_0x1bcab9.imports) {
                  for (; _0x40d7d3 < _0x1bcab9.imports.length; ++_0x40d7d3) {
                    if (_0x24bb00 = _0x5d50be(_0x1bcab9.imports[_0x40d7d3]) || _0x426897.resolvePath(_0x283a95, _0x1bcab9.imports[_0x40d7d3])) {
                      _0x4f224b(_0x24bb00);
                    }
                  }
                }
                if (_0x1bcab9.weakImports) {
                  for (_0x40d7d3 = 0x0; _0x40d7d3 < _0x1bcab9.weakImports.length; ++_0x40d7d3) {
                    if (_0x24bb00 = _0x5d50be(_0x1bcab9.weakImports[_0x40d7d3]) || _0x426897.resolvePath(_0x283a95, _0x1bcab9.weakImports[_0x40d7d3])) {
                      _0x4f224b(_0x24bb00, true);
                    }
                  }
                }
              } else {
                _0x426897.setOptions(_0x381235.options).addJSON(_0x381235.nested);
              }
            } catch (_0x5d4a24) {
              _0x9dab04(_0x5d4a24);
            }
            if (!(_0x1bbc00 || _0x27cc05)) {
              _0x9dab04(null, _0x426897);
            }
          }
          function _0x4f224b(_0x40688b, _0x33de15) {
            if (!(_0x426897.files.indexOf(_0x40688b) > -0x1)) {
              _0x426897.files.push(_0x40688b);
              if (_0x40688b in _0x5d90f8) {
                if (_0x1bbc00) {
                  _0x48c9bf(_0x40688b, _0x5d90f8[_0x40688b]);
                } else {
                  ++_0x27cc05;
                  setTimeout(function () {
                    --_0x27cc05;
                    _0x48c9bf(_0x40688b, _0x5d90f8[_0x40688b]);
                  });
                }
              } else {
                if (_0x1bbc00) {
                  var _0x2d384a;
                  try {
                    _0x2d384a = _0x4320ba.fs.readFileSync(_0x40688b).toString('utf8');
                  } catch (_0x23dd3c) {
                    return void (_0x33de15 || _0x9dab04(_0x23dd3c));
                  }
                  _0x48c9bf(_0x40688b, _0x2d384a);
                } else {
                  ++_0x27cc05;
                  _0x426897.fetch(_0x40688b, function (_0x37c496, _0x24b17d) {
                    --_0x27cc05;
                    if (_0x1c8989) {
                      if (_0x37c496) {
                        if (_0x33de15) {
                          if (!_0x27cc05) {
                            _0x9dab04(null, _0x426897);
                          }
                        } else {
                          _0x9dab04(_0x37c496);
                        }
                      } else {
                        _0x48c9bf(_0x40688b, _0x24b17d);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x27cc05 = 0x0;
          if (_0x4320ba.isString(_0x41c296)) {
            _0x41c296 = [_0x41c296];
          }
          var _0x53bd3f;
          for (var _0x26ce33 = 0x0; _0x26ce33 < _0x41c296.length; ++_0x26ce33) {
            if (_0x53bd3f = _0x426897.resolvePath('', _0x41c296[_0x26ce33])) {
              _0x4f224b(_0x53bd3f);
            }
          }
          if (_0x1bbc00) {
            return _0x426897;
          }
          if (!_0x27cc05) {
            _0x9dab04(null, _0x426897);
          }
        };
        _0x2f53b0.prototype.loadSync = function (_0x31d081, _0x3db487) {
          if (!_0x4320ba.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x31d081, _0x3db487, _0x4b3ee6);
        };
        _0x2f53b0.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x3f1a4c) {
              return "'extend " + _0x3f1a4c.extend + "' in " + _0x3f1a4c.parent.fullName;
            }).join(", "));
          }
          return _0x27d933.prototype.resolveAll.call(this);
        };
        var _0x51c7e1 = /^[A-Z]/;
        function _0xd68f54(_0x33009f, _0x2a3145) {
          var _0x157091 = _0x2a3145.parent.lookup(_0x2a3145.extend);
          if (_0x157091) {
            var _0x277856 = new _0x53a7aa(_0x2a3145.fullName, _0x2a3145.id, _0x2a3145.type, _0x2a3145.rule, undefined, _0x2a3145.options);
            _0x277856.declaringField = _0x2a3145;
            _0x2a3145.extensionField = _0x277856;
            _0x157091.add(_0x277856);
            return true;
          }
          return false;
        }
        _0x2f53b0.prototype._handleAdd = function (_0x46d119) {
          if (_0x46d119 instanceof _0x53a7aa) {
            if (!(undefined === _0x46d119.extend || _0x46d119.extensionField || _0xd68f54(0x0, _0x46d119))) {
              this.deferred.push(_0x46d119);
            }
          } else {
            if (_0x46d119 instanceof _0x4fda39) {
              if (_0x51c7e1.test(_0x46d119.name)) {
                _0x46d119.parent[_0x46d119.name] = _0x46d119.values;
              }
            } else {
              if (!(_0x46d119 instanceof _0x51e424)) {
                if (_0x46d119 instanceof _0x410f3a) {
                  for (var _0x5cc4d0 = 0x0; _0x5cc4d0 < this.deferred.length;) {
                    if (_0xd68f54(0x0, this.deferred[_0x5cc4d0])) {
                      this.deferred.splice(_0x5cc4d0, 0x1);
                    } else {
                      ++_0x5cc4d0;
                    }
                  }
                }
                for (var _0x26ff80 = 0x0; _0x26ff80 < _0x46d119.nestedArray.length; ++_0x26ff80) {
                  this._handleAdd(_0x46d119._nestedArray[_0x26ff80]);
                }
                if (_0x51c7e1.test(_0x46d119.name)) {
                  _0x46d119.parent[_0x46d119.name] = _0x46d119;
                }
              }
            }
          }
        };
        _0x2f53b0.prototype._handleRemove = function (_0x58247a) {
          if (_0x58247a instanceof _0x53a7aa) {
            if (undefined !== _0x58247a.extend) {
              if (_0x58247a.extensionField) {
                _0x58247a.extensionField.parent.remove(_0x58247a.extensionField);
                _0x58247a.extensionField = null;
              } else {
                var _0x3b41f1 = this.deferred.indexOf(_0x58247a);
                if (_0x3b41f1 > -0x1) {
                  this.deferred.splice(_0x3b41f1, 0x1);
                }
              }
            }
          } else {
            if (_0x58247a instanceof _0x4fda39) {
              if (_0x51c7e1.test(_0x58247a.name)) {
                delete _0x58247a.parent[_0x58247a.name];
              }
            } else {
              if (_0x58247a instanceof _0x27d933) {
                for (var _0x557c5c = 0x0; _0x557c5c < _0x58247a.nestedArray.length; ++_0x557c5c) {
                  this._handleRemove(_0x58247a._nestedArray[_0x557c5c]);
                }
                if (_0x51c7e1.test(_0x58247a.name)) {
                  delete _0x58247a.parent[_0x58247a.name];
                }
              }
            }
          }
        };
        _0x2f53b0._configure = function (_0x48dd61, _0x5b8bea, _0x98d45) {
          _0x410f3a = _0x48dd61;
          _0x3c554c = _0x5b8bea;
          _0x5d90f8 = _0x98d45;
        };
        _0x20d8e3.exports;
      }, function () {
        return {
          './namespace': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x2903f9, _0x4f73b9, _0x15461b, _0x41d349, _0x3907e3) {
        var _0xff7117;
        var _0x91cd90;
        var _0x160493 = _0x15461b.exports = _0x4f73b9("./util/minimal");
        var _0x1b6508 = _0x4f73b9('./roots');
        _0x160493.codegen = _0x4f73b9("@protobufjs/codegen");
        _0x160493.fetch = _0x4f73b9("@protobufjs/fetch");
        _0x160493.path = _0x4f73b9("@protobufjs/path");
        _0x160493.fs = _0x160493.inquire('fs');
        _0x160493.toArray = function (_0x2d120a) {
          if (_0x2d120a) {
            var _0x5cf531 = Object.keys(_0x2d120a);
            var _0x447ae4 = new Array(_0x5cf531.length);
            for (var _0x975ea0 = 0x0; _0x975ea0 < _0x5cf531.length;) {
              _0x447ae4[_0x975ea0] = _0x2d120a[_0x5cf531[_0x975ea0++]];
            }
            return _0x447ae4;
          }
          return [];
        };
        _0x160493.toObject = function (_0xedda5a) {
          var _0x5930d1 = {};
          for (var _0x39652b = 0x0; _0x39652b < _0xedda5a.length;) {
            var _0x24945d = _0xedda5a[_0x39652b++];
            var _0x68cf7a = _0xedda5a[_0x39652b++];
            if (undefined !== _0x68cf7a) {
              _0x5930d1[_0x24945d] = _0x68cf7a;
            }
          }
          return _0x5930d1;
        };
        var _0x59deaa = /\\/g;
        var _0x3322d8 = /"/g;
        _0x160493.isReserved = function (_0x55aabc) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x55aabc);
        };
        _0x160493.safeProp = function (_0x568d2c) {
          return !/^[$\w_]+$/.test(_0x568d2c) || _0x160493.isReserved(_0x568d2c) ? "[\"" + _0x568d2c.replace(_0x59deaa, "\\\\").replace(_0x3322d8, "\\\"") + "\"]" : '.' + _0x568d2c;
        };
        _0x160493.ucFirst = function (_0x5c174b) {
          return _0x5c174b.charAt(0x0).toUpperCase() + _0x5c174b.substring(0x1);
        };
        var _0x8c818a = /_([a-z])/g;
        _0x160493.camelCase = function (_0xf5e962) {
          return _0xf5e962.substring(0x0, 0x1) + _0xf5e962.substring(0x1).replace(_0x8c818a, function (_0x42042f, _0x376eaf) {
            return _0x376eaf.toUpperCase();
          });
        };
        _0x160493.compareFieldsById = function (_0x41da51, _0x3049cc) {
          return _0x41da51.id - _0x3049cc.id;
        };
        _0x160493.decorateType = function (_0x5f34bf, _0x3b0457) {
          if (_0x5f34bf.$type) {
            if (_0x3b0457 && _0x5f34bf.$type.name !== _0x3b0457) {
              _0x160493.decorateRoot.remove(_0x5f34bf.$type);
              _0x5f34bf.$type.name = _0x3b0457;
              _0x160493.decorateRoot.add(_0x5f34bf.$type);
            }
            return _0x5f34bf.$type;
          }
          if (!_0xff7117) {
            _0xff7117 = _0x4f73b9('./type');
          }
          var _0x5ddc33 = new _0xff7117(_0x3b0457 || _0x5f34bf.name);
          _0x160493.decorateRoot.add(_0x5ddc33);
          _0x5ddc33.ctor = _0x5f34bf;
          Object.defineProperty(_0x5f34bf, "$type", {
            'value': _0x5ddc33,
            'enumerable': false
          });
          Object.defineProperty(_0x5f34bf.prototype, "$type", {
            'value': _0x5ddc33,
            'enumerable': false
          });
          return _0x5ddc33;
        };
        var _0x4932fd = 0x0;
        _0x160493.decorateEnum = function (_0x5b190c) {
          if (_0x5b190c.$type) {
            return _0x5b190c.$type;
          }
          if (!_0x91cd90) {
            _0x91cd90 = _0x4f73b9("./enum");
          }
          var _0x224913 = new _0x91cd90("Enum" + _0x4932fd++, _0x5b190c);
          _0x160493.decorateRoot.add(_0x224913);
          Object.defineProperty(_0x5b190c, "$type", {
            'value': _0x224913,
            'enumerable': false
          });
          return _0x224913;
        };
        _0x160493.setProperty = function (_0x1bdacd, _0x3ca312, _0x305d96) {
          if ("object" != typeof _0x1bdacd) {
            throw TypeError("dst must be an object");
          }
          if (!_0x3ca312) {
            throw TypeError("path must be specified");
          }
          return function _0x52468c(_0x536af9, _0x40f454, _0xf6b283) {
            var _0x142f94 = _0x40f454.shift();
            if (_0x40f454.length > 0x0) {
              _0x536af9[_0x142f94] = _0x52468c(_0x536af9[_0x142f94] || {}, _0x40f454, _0xf6b283);
            } else {
              var _0x1ff9d7 = _0x536af9[_0x142f94];
              if (_0x1ff9d7) {
                _0xf6b283 = [].concat(_0x1ff9d7).concat(_0xf6b283);
              }
              _0x536af9[_0x142f94] = _0xf6b283;
            }
            return _0x536af9;
          }(_0x1bdacd, _0x3ca312 = _0x3ca312.split('.'), _0x305d96);
        };
        Object.defineProperty(_0x160493, "decorateRoot", {
          'get': function () {
            return _0x1b6508.decorated || (_0x1b6508.decorated = new (_0x4f73b9("./root"))());
          }
        });
        _0x15461b.exports;
      }, function () {
        return {
          './util/minimal': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js',
          './roots': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          '@protobufjs/codegen': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          '@protobufjs/path': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (_0xc597b3, _0x429301, _0x435af6, _0x167b09, _0x499d11) {
        _0x435af6.exports = _0x3cee77;
        _0x3cee77.className = "ReflectionObject";
        var _0x57da2d;
        var _0x2cdc3e = _0x429301("./util");
        function _0x3cee77(_0x2dc5a0, _0x5da1d9) {
          if (!_0x2cdc3e.isString(_0x2dc5a0)) {
            throw TypeError("name must be a string");
          }
          if (_0x5da1d9 && !_0x2cdc3e.isObject(_0x5da1d9)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x5da1d9;
          this.parsedOptions = null;
          this.name = _0x2dc5a0;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x3cee77.prototype, {
          'root': {
            'get': function () {
              for (var _0x3e6588 = this; null !== _0x3e6588.parent;) {
                _0x3e6588 = _0x3e6588.parent;
              }
              return _0x3e6588;
            }
          },
          'fullName': {
            'get': function () {
              var _0x9bf291 = [this.name];
              for (var _0x5422b1 = this.parent; _0x5422b1;) {
                _0x9bf291.unshift(_0x5422b1.name);
                _0x5422b1 = _0x5422b1.parent;
              }
              return _0x9bf291.join('.');
            }
          }
        });
        _0x3cee77.prototype.toJSON = function () {
          throw Error();
        };
        _0x3cee77.prototype.onAdd = function (_0x4bb749) {
          if (this.parent && this.parent !== _0x4bb749) {
            this.parent.remove(this);
          }
          this.parent = _0x4bb749;
          this.resolved = false;
          var _0x5e918a = _0x4bb749.root;
          if (_0x5e918a instanceof _0x57da2d) {
            _0x5e918a._handleAdd(this);
          }
        };
        _0x3cee77.prototype.onRemove = function (_0x1ec89b) {
          var _0x570dfb = _0x1ec89b.root;
          if (_0x570dfb instanceof _0x57da2d) {
            _0x570dfb._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x3cee77.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x57da2d) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x3cee77.prototype.getOption = function (_0x29202c) {
          if (this.options) {
            return this.options[_0x29202c];
          }
        };
        _0x3cee77.prototype.setOption = function (_0x1c06a7, _0x86f052, _0x45b58c) {
          if (!(_0x45b58c && this.options && undefined !== this.options[_0x1c06a7])) {
            (this.options || (this.options = {}))[_0x1c06a7] = _0x86f052;
          }
          return this;
        };
        _0x3cee77.prototype.setParsedOption = function (_0x3d5437, _0x7c802a, _0x23267b) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x986d8f = this.parsedOptions;
          if (_0x23267b) {
            var _0x1de95b = _0x986d8f.find(function (_0x30b092) {
              return Object.prototype.hasOwnProperty.call(_0x30b092, _0x3d5437);
            });
            if (_0x1de95b) {
              var _0x17ab4d = _0x1de95b[_0x3d5437];
              _0x2cdc3e.setProperty(_0x17ab4d, _0x23267b, _0x7c802a);
            } else {
              (_0x1de95b = {})[_0x3d5437] = _0x2cdc3e.setProperty({}, _0x23267b, _0x7c802a);
              _0x986d8f.push(_0x1de95b);
            }
          } else {
            var _0x51056a = {
              _0x3d5437: _0x7c802a
            };
            _0x986d8f.push(_0x51056a);
          }
          return this;
        };
        _0x3cee77.prototype.setOptions = function (_0x58b983, _0x161a2b) {
          if (_0x58b983) {
            var _0x5e53fa = Object.keys(_0x58b983);
            for (var _0x32a931 = 0x0; _0x32a931 < _0x5e53fa.length; ++_0x32a931) {
              this.setOption(_0x5e53fa[_0x32a931], _0x58b983[_0x5e53fa[_0x32a931]], _0x161a2b);
            }
          }
          return this;
        };
        _0x3cee77.prototype.toString = function () {
          var _0x444727 = this.constructor.className;
          var _0x5beb8c = this.fullName;
          return _0x5beb8c.length ? _0x444727 + " " + _0x5beb8c : _0x444727;
        };
        _0x3cee77._configure = function (_0x5dfdf0) {
          _0x57da2d = _0x5dfdf0;
        };
        _0x435af6.exports;
      }, function () {
        return {
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/enum.js", function (_0x5ecd6c, _0x2a6183, _0x4bc228, _0x351ecc, _0x50d2c6) {
        _0x4bc228.exports = _0x50ac48;
        var _0x5d3725 = _0x2a6183("./object");
        ((_0x50ac48.prototype = Object.create(_0x5d3725.prototype)).constructor = _0x50ac48).className = "Enum";
        var _0x370642 = _0x2a6183("./namespace");
        var _0x4af363 = _0x2a6183("./util");
        function _0x50ac48(_0x264765, _0x801262, _0x7ab9a5, _0x387a0a, _0x3391a1) {
          _0x5d3725.call(this, _0x264765, _0x7ab9a5);
          if (_0x801262 && "object" != typeof _0x801262) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x387a0a;
          this.comments = _0x3391a1 || {};
          this.reserved = undefined;
          if (_0x801262) {
            var _0x3b99bc = Object.keys(_0x801262);
            for (var _0x110bc1 = 0x0; _0x110bc1 < _0x3b99bc.length; ++_0x110bc1) {
              if ("number" == typeof _0x801262[_0x3b99bc[_0x110bc1]]) {
                this.valuesById[this.values[_0x3b99bc[_0x110bc1]] = _0x801262[_0x3b99bc[_0x110bc1]]] = _0x3b99bc[_0x110bc1];
              }
            }
          }
        }
        _0x50ac48.fromJSON = function (_0x1c194c, _0x3cebd0) {
          var _0x4a5d12 = new _0x50ac48(_0x1c194c, _0x3cebd0.values, _0x3cebd0.options, _0x3cebd0.comment, _0x3cebd0.comments);
          _0x4a5d12.reserved = _0x3cebd0.reserved;
          return _0x4a5d12;
        };
        _0x50ac48.prototype.toJSON = function (_0x21b068) {
          var _0x3eb5b5 = !!_0x21b068 && Boolean(_0x21b068.keepComments);
          return _0x4af363.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", _0x3eb5b5 ? this.comment : undefined, "comments", _0x3eb5b5 ? this.comments : undefined]);
        };
        _0x50ac48.prototype.add = function (_0x40fac3, _0x40c9bb, _0x55430c) {
          if (!_0x4af363.isString(_0x40fac3)) {
            throw TypeError("name must be a string");
          }
          if (!_0x4af363.isInteger(_0x40c9bb)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x40fac3]) {
            throw Error("duplicate name '" + _0x40fac3 + "' in " + this);
          }
          if (this.isReservedId(_0x40c9bb)) {
            throw Error("id " + _0x40c9bb + " is reserved in " + this);
          }
          if (this.isReservedName(_0x40fac3)) {
            throw Error("name '" + _0x40fac3 + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x40c9bb]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x40c9bb + " in " + this);
            }
            this.values[_0x40fac3] = _0x40c9bb;
          } else {
            this.valuesById[this.values[_0x40fac3] = _0x40c9bb] = _0x40fac3;
          }
          this.comments[_0x40fac3] = _0x55430c || null;
          return this;
        };
        _0x50ac48.prototype.remove = function (_0x162798) {
          if (!_0x4af363.isString(_0x162798)) {
            throw TypeError("name must be a string");
          }
          var _0x54a95c = this.values[_0x162798];
          if (null == _0x54a95c) {
            throw Error("name '" + _0x162798 + "' does not exist in " + this);
          }
          delete this.valuesById[_0x54a95c];
          delete this.values[_0x162798];
          delete this.comments[_0x162798];
          return this;
        };
        _0x50ac48.prototype.isReservedId = function (_0x4bf01a) {
          return _0x370642.isReservedId(this.reserved, _0x4bf01a);
        };
        _0x50ac48.prototype.isReservedName = function (_0x2514ee) {
          return _0x370642.isReservedName(this.reserved, _0x2514ee);
        };
        _0x4bc228.exports;
      }, function () {
        return {
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js', function (_0x3f4a42, _0x5980f5, _0x57c130, _0x4ae553, _0x44adc4) {
        _0x57c130.exports = function (_0xc100df) {
          var _0x2f6884;
          var _0x46b12d = _0x2d4d8.codegen(['m', 'w'], _0xc100df.name + "$encode")("if(!w)")('w=Writer.create()');
          var _0x19a911 = _0xc100df.fieldsArray.slice().sort(_0x2d4d8.compareFieldsById);
          for (var _0x53cbca = 0x0; _0x53cbca < _0x19a911.length; ++_0x53cbca) {
            var _0x41cb15 = _0x19a911[_0x53cbca].resolve();
            var _0x18b1dd = _0xc100df._fieldsArray.indexOf(_0x41cb15);
            var _0x4a9430 = _0x41cb15.resolvedType instanceof _0x4f7ddd ? "int32" : _0x41cb15.type;
            var _0x30b7d0 = _0xc0ae16.basic[_0x4a9430];
            _0x2f6884 = 'm' + _0x2d4d8.safeProp(_0x41cb15.name);
            if (_0x41cb15.map) {
              _0x46b12d("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x2f6884, _0x41cb15.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x2f6884)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0x41cb15.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0xc0ae16.mapKey[_0x41cb15.keyType], _0x41cb15.keyType);
              if (undefined === _0x30b7d0) {
                _0x46b12d("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", _0x18b1dd, _0x2f6884);
              } else {
                _0x46b12d('.uint32(%i).%s(%s[ks[i]]).ldelim()', 0x10 | _0x30b7d0, _0x4a9430, _0x2f6884);
              }
              _0x46b12d('}')('}');
            } else if (_0x41cb15.repeated) {
              _0x46b12d("if(%s!=null&&%s.length){", _0x2f6884, _0x2f6884);
              if (_0x41cb15.packed && undefined !== _0xc0ae16.packed[_0x4a9430]) {
                _0x46b12d("w.uint32(%i).fork()", (_0x41cb15.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x2f6884)("w.%s(%s[i])", _0x4a9430, _0x2f6884)("w.ldelim()");
              } else {
                _0x46b12d("for(var i=0;i<%s.length;++i)", _0x2f6884);
                if (undefined === _0x30b7d0) {
                  if (_0x41cb15.resolvedType.group) {
                    _0x46b12d("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x18b1dd, _0x2f6884 + "[i]", (_0x41cb15.id << 0x3 | 0x3) >>> 0x0, (_0x41cb15.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x46b12d("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x18b1dd, _0x2f6884 + "[i]", (_0x41cb15.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x46b12d('w.uint32(%i).%s(%s[i])', (_0x41cb15.id << 0x3 | _0x30b7d0) >>> 0x0, _0x4a9430, _0x2f6884);
                }
              }
              _0x46b12d('}');
            } else {
              if (_0x41cb15.optional) {
                _0x46b12d("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", _0x2f6884, _0x41cb15.name);
              }
              if (undefined === _0x30b7d0) {
                if (_0x41cb15.resolvedType.group) {
                  _0x46b12d("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x18b1dd, _0x2f6884, (_0x41cb15.id << 0x3 | 0x3) >>> 0x0, (_0x41cb15.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x46b12d("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x18b1dd, _0x2f6884, (_0x41cb15.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x46b12d("w.uint32(%i).%s(%s)", (_0x41cb15.id << 0x3 | _0x30b7d0) >>> 0x0, _0x4a9430, _0x2f6884);
              }
            }
          }
          return _0x46b12d("return w");
        };
        var _0x4f7ddd = _0x5980f5("./enum");
        var _0xc0ae16 = _0x5980f5('./types');
        var _0x2d4d8 = _0x5980f5("./util");
        _0x57c130.exports;
      }, function () {
        return {
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x169549, _0x53c13a, _0x6eba24, _0x9b9a71, _0x1e8f88) {
        var _0x36ab8f = _0x6eba24.exports = _0x53c13a("./index-minimal");
        _0x36ab8f.build = "light";
        _0x36ab8f.load = function (_0x3140a2, _0x22b06b, _0xe26c4b) {
          if ('function' == typeof _0x22b06b) {
            _0xe26c4b = _0x22b06b;
            _0x22b06b = new _0x36ab8f.Root();
          } else if (!_0x22b06b) {
            _0x22b06b = new _0x36ab8f.Root();
          }
          return _0x22b06b.load(_0x3140a2, _0xe26c4b);
        };
        _0x36ab8f.loadSync = function (_0x27d2ba, _0x298dfd) {
          if (!_0x298dfd) {
            _0x298dfd = new _0x36ab8f.Root();
          }
          return _0x298dfd.loadSync(_0x27d2ba);
        };
        _0x36ab8f.encoder = _0x53c13a("./encoder");
        _0x36ab8f.decoder = _0x53c13a("./decoder");
        _0x36ab8f.verifier = _0x53c13a("./verifier");
        _0x36ab8f.converter = _0x53c13a("./converter");
        _0x36ab8f.ReflectionObject = _0x53c13a("./object");
        _0x36ab8f.Namespace = _0x53c13a('./namespace');
        _0x36ab8f.Root = _0x53c13a("./root");
        _0x36ab8f.Enum = _0x53c13a("./enum");
        _0x36ab8f.Type = _0x53c13a("./type");
        _0x36ab8f.Field = _0x53c13a("./field");
        _0x36ab8f.OneOf = _0x53c13a("./oneof");
        _0x36ab8f.MapField = _0x53c13a("./mapfield");
        _0x36ab8f.Service = _0x53c13a('./service');
        _0x36ab8f.Method = _0x53c13a('./method');
        _0x36ab8f.Message = _0x53c13a("./message");
        _0x36ab8f.wrappers = _0x53c13a("./wrappers");
        _0x36ab8f.types = _0x53c13a("./types");
        _0x36ab8f.util = _0x53c13a("./util");
        _0x36ab8f.ReflectionObject._configure(_0x36ab8f.Root);
        _0x36ab8f.Namespace._configure(_0x36ab8f.Type, _0x36ab8f.Service, _0x36ab8f.Enum);
        _0x36ab8f.Root._configure(_0x36ab8f.Type);
        _0x36ab8f.Field._configure(_0x36ab8f.Type);
        _0x6eba24.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js',
          './decoder': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/converter.js",
          './object': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js',
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './message': 'file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/message.js',
          './wrappers': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0x1b5f26, _0xa04163, _0x5081fb, _0x21e251, _0x2cf200) {
        _0x5081fb.exports = _0x5158f5;
        var _0x5683ac = /[\s{}=;:[\],'"()<>]/g;
        var _0x416d8c = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x5e7800 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0xf0acf2 = /^ *[*/]+ */;
        var _0x226c28 = /^\s*\*?\/*/;
        var _0x9517cc = /\n/g;
        var _0x14f8ae = /\s/;
        var _0x3ad63f = /\\(.?)/g;
        var _0xe86613 = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0x55c755(_0x46ad90) {
          return _0x46ad90.replace(_0x3ad63f, function (_0x4f4c60, _0x12d00b) {
            switch (_0x12d00b) {
              case "\\":
              case '':
                return _0x12d00b;
              default:
                return _0xe86613[_0x12d00b] || '';
            }
          });
        }
        function _0x5158f5(_0x3f8e0c, _0x196b82) {
          _0x3f8e0c = _0x3f8e0c.toString();
          var _0x53801a = 0x0;
          var _0x56cdbd = _0x3f8e0c.length;
          var _0x4ed598 = 0x1;
          var _0x266e4d = null;
          var _0x7b75b0 = null;
          var _0x58e50d = 0x0;
          var _0x21759a = false;
          var _0x334b22 = false;
          var _0x223745 = [];
          var _0x3ef41f = null;
          function _0x3487a9(_0x31bfa4, _0x12e876, _0x32e7ce) {
            _0x266e4d = _0x3f8e0c.charAt(_0x31bfa4++);
            _0x58e50d = _0x4ed598;
            _0x21759a = false;
            _0x334b22 = _0x32e7ce;
            var _0x32fcd8;
            var _0x4af7df = _0x31bfa4 - (_0x196b82 ? 0x2 : 0x3);
            do {
              if (--_0x4af7df < 0x0 || "\n" === (_0x32fcd8 = _0x3f8e0c.charAt(_0x4af7df))) {
                _0x21759a = true;
                break;
              }
            } while (" " === _0x32fcd8 || "\t" === _0x32fcd8);
            var _0x419981 = _0x3f8e0c.substring(_0x31bfa4, _0x12e876).split(_0x9517cc);
            for (var _0x232263 = 0x0; _0x232263 < _0x419981.length; ++_0x232263) {
              _0x419981[_0x232263] = _0x419981[_0x232263].replace(_0x196b82 ? _0x226c28 : _0xf0acf2, '').trim();
            }
            _0x7b75b0 = _0x419981.join("\n").trim();
          }
          function _0x5060ec(_0x1fd3f7) {
            var _0x13ec6d = _0x147a48(_0x1fd3f7);
            var _0x4becc8 = _0x3f8e0c.substring(_0x1fd3f7, _0x13ec6d);
            return /^\s*\/{1,2}/.test(_0x4becc8);
          }
          function _0x147a48(_0x2df999) {
            for (var _0x4b7280 = _0x2df999; _0x4b7280 < _0x56cdbd && "\n" !== _0x3f8e0c.charAt(_0x4b7280);) {
              _0x4b7280++;
            }
            return _0x4b7280;
          }
          function _0x4719d9() {
            if (_0x223745.length > 0x0) {
              return _0x223745.shift();
            }
            if (_0x3ef41f) {
              return function () {
                var _0x4bafd4 = "'" === _0x3ef41f ? _0x5e7800 : _0x416d8c;
                _0x4bafd4.lastIndex = _0x53801a - 0x1;
                var _0x47a8e1 = _0x4bafd4.exec(_0x3f8e0c);
                if (!_0x47a8e1) {
                  throw Error("illegal string (line " + _0x4ed598 + ')');
                }
                _0x53801a = _0x4bafd4.lastIndex;
                _0x1c00b8(_0x3ef41f);
                _0x3ef41f = null;
                return _0x55c755(_0x47a8e1[0x1]);
              }();
            }
            var _0x4b6d69;
            var _0x202a0d;
            var _0x431144;
            var _0x119a33;
            var _0x112c13;
            var _0x58f5c9 = 0x0 === _0x53801a;
            do {
              if (_0x53801a === _0x56cdbd) {
                return null;
              }
              for (_0x4b6d69 = false; _0x14f8ae.test(_0x431144 = _0x3f8e0c.charAt(_0x53801a));) {
                if ("\n" === _0x431144) {
                  _0x58f5c9 = true;
                  ++_0x4ed598;
                }
                if (++_0x53801a === _0x56cdbd) {
                  return null;
                }
              }
              if ('/' === _0x3f8e0c.charAt(_0x53801a)) {
                if (++_0x53801a === _0x56cdbd) {
                  throw Error("illegal comment (line " + _0x4ed598 + ')');
                }
                if ('/' === _0x3f8e0c.charAt(_0x53801a)) {
                  if (_0x196b82) {
                    _0x119a33 = _0x53801a;
                    _0x112c13 = false;
                    if (_0x5060ec(_0x53801a)) {
                      _0x112c13 = true;
                      do {
                        if ((_0x53801a = _0x147a48(_0x53801a)) === _0x56cdbd) {
                          break;
                        }
                        _0x53801a++;
                      } while (_0x5060ec(_0x53801a));
                    } else {
                      _0x53801a = Math.min(_0x56cdbd, _0x147a48(_0x53801a) + 0x1);
                    }
                    if (_0x112c13) {
                      _0x3487a9(_0x119a33, _0x53801a, _0x58f5c9);
                    }
                    _0x4ed598++;
                    _0x4b6d69 = true;
                  } else {
                    for (_0x112c13 = '/' === _0x3f8e0c.charAt(_0x119a33 = _0x53801a + 0x1); "\n" !== _0x3f8e0c.charAt(++_0x53801a);) {
                      if (_0x53801a === _0x56cdbd) {
                        return null;
                      }
                    }
                    ++_0x53801a;
                    if (_0x112c13) {
                      _0x3487a9(_0x119a33, _0x53801a - 0x1, _0x58f5c9);
                    }
                    ++_0x4ed598;
                    _0x4b6d69 = true;
                  }
                } else {
                  if ('*' !== (_0x431144 = _0x3f8e0c.charAt(_0x53801a))) {
                    return '/';
                  }
                  _0x119a33 = _0x53801a + 0x1;
                  _0x112c13 = _0x196b82 || '*' === _0x3f8e0c.charAt(_0x119a33);
                  do {
                    if ("\n" === _0x431144) {
                      ++_0x4ed598;
                    }
                    if (++_0x53801a === _0x56cdbd) {
                      throw Error("illegal comment (line " + _0x4ed598 + ')');
                    }
                    _0x202a0d = _0x431144;
                    _0x431144 = _0x3f8e0c.charAt(_0x53801a);
                  } while ('*' !== _0x202a0d || '/' !== _0x431144);
                  ++_0x53801a;
                  if (_0x112c13) {
                    _0x3487a9(_0x119a33, _0x53801a - 0x2, _0x58f5c9);
                  }
                  _0x4b6d69 = true;
                }
              }
            } while (_0x4b6d69);
            var _0x3a6464 = _0x53801a;
            _0x5683ac.lastIndex = 0x0;
            if (!_0x5683ac.test(_0x3f8e0c.charAt(_0x3a6464++))) {
              for (; _0x3a6464 < _0x56cdbd && !_0x5683ac.test(_0x3f8e0c.charAt(_0x3a6464));) {
                ++_0x3a6464;
              }
            }
            var _0x3aca41 = _0x3f8e0c.substring(_0x53801a, _0x53801a = _0x3a6464);
            if (!("\"" !== _0x3aca41 && "'" !== _0x3aca41)) {
              _0x3ef41f = _0x3aca41;
            }
            return _0x3aca41;
          }
          function _0x1c00b8(_0x21a419) {
            _0x223745.push(_0x21a419);
          }
          function _0x1d290f() {
            if (!_0x223745.length) {
              var _0x298c72 = _0x4719d9();
              if (null === _0x298c72) {
                return null;
              }
              _0x1c00b8(_0x298c72);
            }
            return _0x223745[0x0];
          }
          return Object.defineProperty({
            'next': _0x4719d9,
            'peek': _0x1d290f,
            'push': _0x1c00b8,
            'skip': function (_0x4f0732, _0x218f3f) {
              var _0x37d2d1 = _0x1d290f();
              if (_0x37d2d1 === _0x4f0732) {
                _0x4719d9();
                return true;
              }
              if (!_0x218f3f) {
                throw Error("illegal " + ("token '" + _0x37d2d1 + "', '" + _0x4f0732 + "' expected") + " (line " + _0x4ed598 + ')');
              }
              return false;
            },
            'cmnt': function (_0x2a8fba) {
              var _0x535cb5 = null;
              if (undefined === _0x2a8fba) {
                if (_0x58e50d === _0x4ed598 - 0x1 && (_0x196b82 || '*' === _0x266e4d || _0x21759a)) {
                  _0x535cb5 = _0x334b22 ? _0x7b75b0 : null;
                }
              } else {
                if (_0x58e50d < _0x2a8fba) {
                  _0x1d290f();
                }
                if (!(_0x58e50d !== _0x2a8fba || _0x21759a || !_0x196b82 && '/' !== _0x266e4d)) {
                  _0x535cb5 = _0x334b22 ? null : _0x7b75b0;
                }
              }
              return _0x535cb5;
            }
          }, "line", {
            'get': function () {
              return _0x4ed598;
            }
          });
        }
        _0x5158f5.unescape = _0x55c755;
        _0x5081fb.exports;
      }, {});
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x25c592, _0x58110c, _0x21757b, _0x20a783, _0x3b2ac5) {
        _0x21757b.exports = _0x1c1046;
        _0x1c1046.filename = null;
        _0x1c1046.defaults = {
          'keepCase': false
        };
        var _0x5ecf3b = _0x58110c("./tokenize");
        var _0x53d848 = _0x58110c("./root");
        var _0x508a47 = _0x58110c('./type');
        var _0x1b1fbd = _0x58110c('./field');
        var _0x3f36fb = _0x58110c("./mapfield");
        var _0x4b14ff = _0x58110c("./oneof");
        var _0x5b7cbf = _0x58110c("./enum");
        var _0x5782ac = _0x58110c("./service");
        var _0xbcedc7 = _0x58110c('./method');
        var _0x59fde8 = _0x58110c("./types");
        var _0x18f1de = _0x58110c("./util");
        var _0x2a78f = /^[1-9][0-9]*$/;
        var _0xc0c031 = /^-?[1-9][0-9]*$/;
        var _0x4a03d5 = /^0[x][0-9a-fA-F]+$/;
        var _0x4526e3 = /^-?0[x][0-9a-fA-F]+$/;
        var _0x490a40 = /^0[0-7]+$/;
        var _0x2ee7dd = /^-?0[0-7]+$/;
        var _0xba5b2 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x3907b2 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x54fba7 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x8c0d90 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x1c1046(_0x173113, _0xe44dc, _0x7c6636) {
          if (!(_0xe44dc instanceof _0x53d848)) {
            _0x7c6636 = _0xe44dc;
            _0xe44dc = new _0x53d848();
          }
          if (!_0x7c6636) {
            _0x7c6636 = _0x1c1046.defaults;
          }
          var _0x15c5dd;
          var _0x577bd9;
          var _0x4f0060;
          var _0x314649;
          var _0x58003f;
          var _0x17b1bd = _0x7c6636.preferTrailingComment || false;
          var _0x1b8dd1 = _0x5ecf3b(_0x173113, _0x7c6636.alternateCommentMode || false);
          var _0x1db447 = _0x1b8dd1.next;
          var _0x4e167a = _0x1b8dd1.push;
          var _0xad9543 = _0x1b8dd1.peek;
          var _0x56764e = _0x1b8dd1.skip;
          var _0x143e80 = _0x1b8dd1.cmnt;
          var _0x5cde2a = true;
          var _0x4b64b3 = false;
          var _0x4fc41b = _0xe44dc;
          var _0x25784c = _0x7c6636.keepCase ? function (_0x58ffed) {
            return _0x58ffed;
          } : _0x18f1de.camelCase;
          function _0x3b4d0a(_0x4f5bb4, _0x52292a, _0x3392c2) {
            var _0x2bd888 = _0x1c1046.filename;
            if (!_0x3392c2) {
              _0x1c1046.filename = null;
            }
            return Error("illegal " + (_0x52292a || "token") + " '" + _0x4f5bb4 + "' (" + (_0x2bd888 ? _0x2bd888 + ", " : '') + "line " + _0x1b8dd1.line + ')');
          }
          function _0x5b7c70() {
            var _0x51b607;
            var _0x9ca974 = [];
            do {
              if ("\"" !== (_0x51b607 = _0x1db447()) && "'" !== _0x51b607) {
                throw _0x3b4d0a(_0x51b607);
              }
              _0x9ca974.push(_0x1db447());
              _0x56764e(_0x51b607);
              _0x51b607 = _0xad9543();
            } while ("\"" === _0x51b607 || "'" === _0x51b607);
            return _0x9ca974.join('');
          }
          function _0x7e2908(_0x382740) {
            var _0x26da1f = _0x1db447();
            switch (_0x26da1f) {
              case "'":
              case "\"":
                _0x4e167a(_0x26da1f);
                return _0x5b7c70();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (_0x478d9d, _0x49dee6) {
                var _0x4efbc0 = 0x1;
                if ('-' === _0x478d9d.charAt(0x0)) {
                  _0x4efbc0 = -0x1;
                  _0x478d9d = _0x478d9d.substring(0x1);
                }
                switch (_0x478d9d) {
                  case 'inf':
                  case "INF":
                  case 'Inf':
                    return _0x4efbc0 * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x2a78f.test(_0x478d9d)) {
                  return _0x4efbc0 * parseInt(_0x478d9d, 0xa);
                }
                if (_0x4a03d5.test(_0x478d9d)) {
                  return _0x4efbc0 * parseInt(_0x478d9d, 0x10);
                }
                if (_0x490a40.test(_0x478d9d)) {
                  return _0x4efbc0 * parseInt(_0x478d9d, 0x8);
                }
                if (_0xba5b2.test(_0x478d9d)) {
                  return _0x4efbc0 * parseFloat(_0x478d9d);
                }
                throw _0x3b4d0a(_0x478d9d, "number", _0x49dee6);
              }(_0x26da1f, true);
            } catch (_0xbc2584) {
              if (_0x382740 && _0x54fba7.test(_0x26da1f)) {
                return _0x26da1f;
              }
              throw _0x3b4d0a(_0x26da1f, "value");
            }
          }
          function _0x4476c1(_0x5a306a, _0x5c4c31) {
            var _0x30f3ae;
            var _0x45b4be;
            do {
              if (!_0x5c4c31 || "\"" !== (_0x30f3ae = _0xad9543()) && "'" !== _0x30f3ae) {
                _0x5a306a.push([_0x45b4be = _0x100bbf(_0x1db447()), _0x56764e('to', true) ? _0x100bbf(_0x1db447()) : _0x45b4be]);
              } else {
                _0x5a306a.push(_0x5b7c70());
              }
            } while (_0x56764e(',', true));
            _0x56764e(';');
          }
          function _0x100bbf(_0x28181d, _0xff6e3c) {
            switch (_0x28181d) {
              case "max":
              case "MAX":
              case "Max":
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0xff6e3c && '-' === _0x28181d.charAt(0x0)) {
              throw _0x3b4d0a(_0x28181d, 'id');
            }
            if (_0xc0c031.test(_0x28181d)) {
              return parseInt(_0x28181d, 0xa);
            }
            if (_0x4526e3.test(_0x28181d)) {
              return parseInt(_0x28181d, 0x10);
            }
            if (_0x2ee7dd.test(_0x28181d)) {
              return parseInt(_0x28181d, 0x8);
            }
            throw _0x3b4d0a(_0x28181d, 'id');
          }
          function _0x1cb4b0() {
            if (undefined !== _0x15c5dd) {
              throw _0x3b4d0a("package");
            }
            _0x15c5dd = _0x1db447();
            if (!_0x54fba7.test(_0x15c5dd)) {
              throw _0x3b4d0a(_0x15c5dd, "name");
            }
            _0x4fc41b = _0x4fc41b.define(_0x15c5dd);
            _0x56764e(';');
          }
          function _0x19cb7f() {
            var _0x11e269;
            var _0x26ce38 = _0xad9543();
            switch (_0x26ce38) {
              case "weak":
                _0x11e269 = _0x4f0060 || (_0x4f0060 = []);
                _0x1db447();
                break;
              case "public":
                _0x1db447();
              default:
                _0x11e269 = _0x577bd9 || (_0x577bd9 = []);
            }
            _0x26ce38 = _0x5b7c70();
            _0x56764e(';');
            _0x11e269.push(_0x26ce38);
          }
          function _0x1cb1a4() {
            _0x56764e('=');
            _0x314649 = _0x5b7c70();
            if (!(_0x4b64b3 = "proto3" === _0x314649) && "proto2" !== _0x314649) {
              throw _0x3b4d0a(_0x314649, 'syntax');
            }
            _0x56764e(';');
          }
          function _0x5eeaac(_0x1f4a1f, _0x585e0c) {
            switch (_0x585e0c) {
              case 'option':
                _0x3c4882(_0x1f4a1f, _0x585e0c);
                _0x56764e(';');
                return true;
              case "message":
                (function (_0x3b4599, _0x3465bb) {
                  if (!_0x3907b2.test(_0x3465bb = _0x1db447())) {
                    throw _0x3b4d0a(_0x3465bb, "type name");
                  }
                  var _0x5c3356 = new _0x508a47(_0x3465bb);
                  _0x5c8a83(_0x5c3356, function (_0x2f52bc) {
                    if (!_0x5eeaac(_0x5c3356, _0x2f52bc)) {
                      switch (_0x2f52bc) {
                        case "map":
                          !function (_0x585c07) {
                            _0x56764e('<');
                            var _0x24ed56 = _0x1db447();
                            if (undefined === _0x59fde8.mapKey[_0x24ed56]) {
                              throw _0x3b4d0a(_0x24ed56, "type");
                            }
                            _0x56764e(',');
                            var _0x53ed90 = _0x1db447();
                            if (!_0x54fba7.test(_0x53ed90)) {
                              throw _0x3b4d0a(_0x53ed90, "type");
                            }
                            _0x56764e('>');
                            var _0x25bab2 = _0x1db447();
                            if (!_0x3907b2.test(_0x25bab2)) {
                              throw _0x3b4d0a(_0x25bab2, "name");
                            }
                            _0x56764e('=');
                            var _0x56f2f7 = new _0x3f36fb(_0x25784c(_0x25bab2), _0x100bbf(_0x1db447()), _0x24ed56, _0x53ed90);
                            _0x5c8a83(_0x56f2f7, function (_0x4ba276) {
                              if ("option" !== _0x4ba276) {
                                throw _0x3b4d0a(_0x4ba276);
                              }
                              _0x3c4882(_0x56f2f7, _0x4ba276);
                              _0x56764e(';');
                            }, function () {
                              _0x10950f(_0x56f2f7);
                            });
                            _0x585c07.add(_0x56f2f7);
                          }(_0x5c3356);
                          break;
                        case "required":
                        case "repeated":
                          _0x496384(_0x5c3356, _0x2f52bc);
                          break;
                        case "optional":
                          _0x496384(_0x5c3356, _0x4b64b3 ? 'proto3_optional' : "optional");
                          break;
                        case 'oneof':
                          !function (_0x2f19bd, _0x41a046) {
                            if (!_0x3907b2.test(_0x41a046 = _0x1db447())) {
                              throw _0x3b4d0a(_0x41a046, "name");
                            }
                            var _0x1da753 = new _0x4b14ff(_0x25784c(_0x41a046));
                            _0x5c8a83(_0x1da753, function (_0x1c300e) {
                              if ("option" === _0x1c300e) {
                                _0x3c4882(_0x1da753, _0x1c300e);
                                _0x56764e(';');
                              } else {
                                _0x4e167a(_0x1c300e);
                                _0x496384(_0x1da753, "optional");
                              }
                            });
                            _0x2f19bd.add(_0x1da753);
                          }(_0x5c3356, _0x2f52bc);
                          break;
                        case 'extensions':
                          _0x4476c1(_0x5c3356.extensions || (_0x5c3356.extensions = []));
                          break;
                        case "reserved":
                          _0x4476c1(_0x5c3356.reserved || (_0x5c3356.reserved = []), true);
                          break;
                        default:
                          if (!_0x4b64b3 || !_0x54fba7.test(_0x2f52bc)) {
                            throw _0x3b4d0a(_0x2f52bc);
                          }
                          _0x4e167a(_0x2f52bc);
                          _0x496384(_0x5c3356, "optional");
                      }
                    }
                  });
                  _0x3b4599.add(_0x5c3356);
                })(_0x1f4a1f, _0x585e0c);
                return true;
              case "enum":
                (function (_0x48f8c6, _0x36081f) {
                  if (!_0x3907b2.test(_0x36081f = _0x1db447())) {
                    throw _0x3b4d0a(_0x36081f, "name");
                  }
                  var _0x36aa4f = new _0x5b7cbf(_0x36081f);
                  _0x5c8a83(_0x36aa4f, function (_0x307f4a) {
                    switch (_0x307f4a) {
                      case "option":
                        _0x3c4882(_0x36aa4f, _0x307f4a);
                        _0x56764e(';');
                        break;
                      case 'reserved':
                        _0x4476c1(_0x36aa4f.reserved || (_0x36aa4f.reserved = []), true);
                        break;
                      default:
                        !function (_0x3b2a8a, _0x245bdd) {
                          if (!_0x3907b2.test(_0x245bdd)) {
                            throw _0x3b4d0a(_0x245bdd, 'name');
                          }
                          _0x56764e('=');
                          var _0x4260ef = _0x100bbf(_0x1db447(), true);
                          var _0x61cad7 = {};
                          _0x5c8a83(_0x61cad7, function (_0x155aa7) {
                            if ("option" !== _0x155aa7) {
                              throw _0x3b4d0a(_0x155aa7);
                            }
                            _0x3c4882(_0x61cad7, _0x155aa7);
                            _0x56764e(';');
                          }, function () {
                            _0x10950f(_0x61cad7);
                          });
                          _0x3b2a8a.add(_0x245bdd, _0x4260ef, _0x61cad7.comment);
                        }(_0x36aa4f, _0x307f4a);
                    }
                  });
                  _0x48f8c6.add(_0x36aa4f);
                })(_0x1f4a1f, _0x585e0c);
                return true;
              case "service":
                (function (_0xcb2e27, _0xe2a9d5) {
                  if (!_0x3907b2.test(_0xe2a9d5 = _0x1db447())) {
                    throw _0x3b4d0a(_0xe2a9d5, "service name");
                  }
                  var _0x51d580 = new _0x5782ac(_0xe2a9d5);
                  _0x5c8a83(_0x51d580, function (_0xe16ff5) {
                    if (!_0x5eeaac(_0x51d580, _0xe16ff5)) {
                      if ("rpc" !== _0xe16ff5) {
                        throw _0x3b4d0a(_0xe16ff5);
                      }
                      !function (_0x46fce8, _0x3cdfce) {
                        var _0x4ce5ab = _0x143e80();
                        var _0x3d5997 = _0x3cdfce;
                        if (!_0x3907b2.test(_0x3cdfce = _0x1db447())) {
                          throw _0x3b4d0a(_0x3cdfce, "name");
                        }
                        var _0x2b742e;
                        var _0x45632e;
                        var _0x3d88d5;
                        var _0x512f87;
                        var _0x3f6411 = _0x3cdfce;
                        _0x56764e('(');
                        if (_0x56764e("stream", true)) {
                          _0x45632e = true;
                        }
                        if (!_0x54fba7.test(_0x3cdfce = _0x1db447())) {
                          throw _0x3b4d0a(_0x3cdfce);
                        }
                        _0x2b742e = _0x3cdfce;
                        _0x56764e(')');
                        _0x56764e("returns");
                        _0x56764e('(');
                        if (_0x56764e("stream", true)) {
                          _0x512f87 = true;
                        }
                        if (!_0x54fba7.test(_0x3cdfce = _0x1db447())) {
                          throw _0x3b4d0a(_0x3cdfce);
                        }
                        _0x3d88d5 = _0x3cdfce;
                        _0x56764e(')');
                        var _0x32eea5 = new _0xbcedc7(_0x3f6411, _0x3d5997, _0x2b742e, _0x3d88d5, _0x45632e, _0x512f87);
                        _0x32eea5.comment = _0x4ce5ab;
                        _0x5c8a83(_0x32eea5, function (_0x5d9960) {
                          if ("option" !== _0x5d9960) {
                            throw _0x3b4d0a(_0x5d9960);
                          }
                          _0x3c4882(_0x32eea5, _0x5d9960);
                          _0x56764e(';');
                        });
                        _0x46fce8.add(_0x32eea5);
                      }(_0x51d580, _0xe16ff5);
                    }
                  });
                  _0xcb2e27.add(_0x51d580);
                })(_0x1f4a1f, _0x585e0c);
                return true;
              case 'extend':
                (function (_0x18a4ca, _0x191ed4) {
                  if (!_0x54fba7.test(_0x191ed4 = _0x1db447())) {
                    throw _0x3b4d0a(_0x191ed4, "reference");
                  }
                  var _0x3818fb = _0x191ed4;
                  _0x5c8a83(null, function (_0x3866f4) {
                    switch (_0x3866f4) {
                      case "required":
                      case "repeated":
                        _0x496384(_0x18a4ca, _0x3866f4, _0x3818fb);
                        break;
                      case "optional":
                        _0x496384(_0x18a4ca, _0x4b64b3 ? 'proto3_optional' : 'optional', _0x3818fb);
                        break;
                      default:
                        if (!_0x4b64b3 || !_0x54fba7.test(_0x3866f4)) {
                          throw _0x3b4d0a(_0x3866f4);
                        }
                        _0x4e167a(_0x3866f4);
                        _0x496384(_0x18a4ca, "optional", _0x3818fb);
                    }
                  });
                })(_0x1f4a1f, _0x585e0c);
                return true;
            }
            return false;
          }
          function _0x5c8a83(_0x55ef36, _0x34a737, _0x552838) {
            var _0x5896bd = _0x1b8dd1.line;
            if (_0x55ef36) {
              if ('string' != typeof _0x55ef36.comment) {
                _0x55ef36.comment = _0x143e80();
              }
              _0x55ef36.filename = _0x1c1046.filename;
            }
            if (_0x56764e('{', true)) {
              for (var _0xf1d112; '}' !== (_0xf1d112 = _0x1db447());) {
                _0x34a737(_0xf1d112);
              }
              _0x56764e(';', true);
            } else {
              if (_0x552838) {
                _0x552838();
              }
              _0x56764e(';');
              if (_0x55ef36 && ("string" != typeof _0x55ef36.comment || _0x17b1bd)) {
                _0x55ef36.comment = _0x143e80(_0x5896bd) || _0x55ef36.comment;
              }
            }
          }
          function _0x496384(_0x21bd9a, _0x871ecf, _0x14d8c2) {
            var _0x142c33 = _0x1db447();
            if ("group" !== _0x142c33) {
              if (!_0x54fba7.test(_0x142c33)) {
                throw _0x3b4d0a(_0x142c33, "type");
              }
              var _0x350e07 = _0x1db447();
              if (!_0x3907b2.test(_0x350e07)) {
                throw _0x3b4d0a(_0x350e07, "name");
              }
              _0x350e07 = _0x25784c(_0x350e07);
              _0x56764e('=');
              var _0x267277 = new _0x1b1fbd(_0x350e07, _0x100bbf(_0x1db447()), _0x142c33, _0x871ecf, _0x14d8c2);
              _0x5c8a83(_0x267277, function (_0x4e7333) {
                if ("option" !== _0x4e7333) {
                  throw _0x3b4d0a(_0x4e7333);
                }
                _0x3c4882(_0x267277, _0x4e7333);
                _0x56764e(';');
              }, function () {
                _0x10950f(_0x267277);
              });
              if ("proto3_optional" === _0x871ecf) {
                var _0xe6fb44 = new _0x4b14ff('_' + _0x350e07);
                _0x267277.setOption('proto3_optional', true);
                _0xe6fb44.add(_0x267277);
                _0x21bd9a.add(_0xe6fb44);
              } else {
                _0x21bd9a.add(_0x267277);
              }
              if (!(_0x4b64b3 || !_0x267277.repeated || undefined === _0x59fde8.packed[_0x142c33] && undefined !== _0x59fde8.basic[_0x142c33])) {
                _0x267277.setOption('packed', false, true);
              }
            } else {
              !function (_0x406004, _0x150b35) {
                var _0x3133ee = _0x1db447();
                if (!_0x3907b2.test(_0x3133ee)) {
                  throw _0x3b4d0a(_0x3133ee, "name");
                }
                var _0x455522 = _0x18f1de.lcFirst(_0x3133ee);
                if (_0x3133ee === _0x455522) {
                  _0x3133ee = _0x18f1de.ucFirst(_0x3133ee);
                }
                _0x56764e('=');
                var _0x50593c = _0x100bbf(_0x1db447());
                var _0x414a4a = new _0x508a47(_0x3133ee);
                _0x414a4a.group = true;
                var _0x40e202 = new _0x1b1fbd(_0x455522, _0x50593c, _0x3133ee, _0x150b35);
                _0x40e202.filename = _0x1c1046.filename;
                _0x5c8a83(_0x414a4a, function (_0x25f21b) {
                  switch (_0x25f21b) {
                    case 'option':
                      _0x3c4882(_0x414a4a, _0x25f21b);
                      _0x56764e(';');
                      break;
                    case "required":
                    case 'repeated':
                      _0x496384(_0x414a4a, _0x25f21b);
                      break;
                    case "optional":
                      _0x496384(_0x414a4a, _0x4b64b3 ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw _0x3b4d0a(_0x25f21b);
                  }
                });
                _0x406004.add(_0x414a4a).add(_0x40e202);
              }(_0x21bd9a, _0x871ecf);
            }
          }
          function _0x3c4882(_0x41da8f, _0x427722) {
            var _0x540596 = _0x56764e('(', true);
            if (!_0x54fba7.test(_0x427722 = _0x1db447())) {
              throw _0x3b4d0a(_0x427722, "name");
            }
            var _0x2728f5;
            var _0x1deaf0 = _0x427722;
            var _0x4166bf = _0x1deaf0;
            if (_0x540596) {
              _0x56764e(')');
              _0x4166bf = _0x1deaf0 = '(' + _0x1deaf0 + ')';
              _0x427722 = _0xad9543();
              if (_0x8c0d90.test(_0x427722)) {
                _0x2728f5 = _0x427722.substr(0x1);
                _0x1deaf0 += _0x427722;
                _0x1db447();
              }
            }
            _0x56764e('=');
            (function (_0x33f390, _0x520b77, _0xcc168b, _0xf28213) {
              if (_0x33f390.setParsedOption) {
                _0x33f390.setParsedOption(_0x520b77, _0xcc168b, _0xf28213);
              }
            })(_0x41da8f, _0x4166bf, _0x3c87c2(_0x41da8f, _0x1deaf0), _0x2728f5);
          }
          function _0x3c87c2(_0xae3221, _0x35e7e9) {
            if (_0x56764e('{', true)) {
              for (var _0x720dbf = {}; !_0x56764e('}', true);) {
                if (!_0x3907b2.test(_0x58003f = _0x1db447())) {
                  throw _0x3b4d0a(_0x58003f, 'name');
                }
                var _0x27ee85;
                var _0x307b0f = _0x58003f;
                if ('{' === _0xad9543()) {
                  _0x27ee85 = _0x3c87c2(_0xae3221, _0x35e7e9 + '.' + _0x58003f);
                } else {
                  _0x56764e(':');
                  if ('{' === _0xad9543()) {
                    _0x27ee85 = _0x3c87c2(_0xae3221, _0x35e7e9 + '.' + _0x58003f);
                  } else {
                    _0x27ee85 = _0x7e2908(true);
                    _0x136fa4(_0xae3221, _0x35e7e9 + '.' + _0x58003f, _0x27ee85);
                  }
                }
                var _0x3e073f = _0x720dbf[_0x307b0f];
                if (_0x3e073f) {
                  _0x27ee85 = [].concat(_0x3e073f).concat(_0x27ee85);
                }
                _0x720dbf[_0x307b0f] = _0x27ee85;
                _0x56764e(',', true);
              }
              return _0x720dbf;
            }
            var _0x51558e = _0x7e2908(true);
            _0x136fa4(_0xae3221, _0x35e7e9, _0x51558e);
            return _0x51558e;
          }
          function _0x136fa4(_0x436d87, _0x17a1be, _0xfd2df8) {
            if (_0x436d87.setOption) {
              _0x436d87.setOption(_0x17a1be, _0xfd2df8);
            }
          }
          function _0x10950f(_0x21f564) {
            if (_0x56764e('[', true)) {
              do {
                _0x3c4882(_0x21f564, "option");
              } while (_0x56764e(',', true));
              _0x56764e(']');
            }
            return _0x21f564;
          }
          for (; null !== (_0x58003f = _0x1db447());) {
            switch (_0x58003f) {
              case "package":
                if (!_0x5cde2a) {
                  throw _0x3b4d0a(_0x58003f);
                }
                _0x1cb4b0();
                break;
              case "import":
                if (!_0x5cde2a) {
                  throw _0x3b4d0a(_0x58003f);
                }
                _0x19cb7f();
                break;
              case "syntax":
                if (!_0x5cde2a) {
                  throw _0x3b4d0a(_0x58003f);
                }
                _0x1cb1a4();
                break;
              case "option":
                _0x3c4882(_0x4fc41b, _0x58003f);
                _0x56764e(';');
                break;
              default:
                if (_0x5eeaac(_0x4fc41b, _0x58003f)) {
                  _0x5cde2a = false;
                  continue;
                }
                throw _0x3b4d0a(_0x58003f);
            }
          }
          _0x1c1046.filename = null;
          return {
            'package': _0x15c5dd,
            'imports': _0x577bd9,
            'weakImports': _0x4f0060,
            'syntax': _0x314649,
            'root': _0xe44dc
          };
        }
        _0x21757b.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/type.js",
          './field': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js",
          './enum': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/enum.js",
          './service': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/service.js",
          './method': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/method.js",
          './types': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x1e42ba, _0x11ade8, _0x460cc4, _0x406718, _0x5c23c7) {
        _0x460cc4.exports = _0x43f0b3;
        var _0x3b2d20;
        var _0x248c68 = /\/|\./;
        function _0x43f0b3(_0x1b082e, _0x3b4087) {
          if (!_0x248c68.test(_0x1b082e)) {
            _0x1b082e = 'google/protobuf/' + _0x1b082e + ".proto";
            _0x3b4087 = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x3b4087
                    }
                  }
                }
              }
            };
          }
          _0x43f0b3[_0x1b082e] = _0x3b4087;
        }
        _0x43f0b3("any", {
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
        _0x43f0b3("duration", {
          'Duration': _0x3b2d20 = {
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
        _0x43f0b3("timestamp", {
          'Timestamp': _0x3b2d20
        });
        _0x43f0b3("empty", {
          'Empty': {
            'fields': {}
          }
        });
        _0x43f0b3("struct", {
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
                'oneof': ["nullValue", "numberValue", "stringValue", 'boolValue', 'structValue', "listValue"]
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
        _0x43f0b3("wrappers", {
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
        _0x43f0b3('field_mask', {
          'FieldMask': {
            'fields': {
              'paths': {
                'rule': 'repeated',
                'type': 'string',
                'id': 0x1
              }
            }
          }
        });
        _0x43f0b3.get = function (_0x29e822) {
          return _0x43f0b3[_0x29e822] || null;
        };
        _0x460cc4.exports;
      }, {});
      var _0x837965;
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (_0x253075, _0x536a94, _0x24e69c, _0x1be19b, _0x28eec2) {
        var _0x1c24fd = _0x24e69c.exports = _0x536a94("./index-light");
        _0x1c24fd.build = "full";
        _0x1c24fd.tokenize = _0x536a94("./tokenize");
        _0x1c24fd.parse = _0x536a94('./parse');
        _0x1c24fd.common = _0x536a94("./common");
        _0x1c24fd.Root._configure(_0x1c24fd.Type, _0x1c24fd.parse, _0x1c24fd.common);
        _0x24e69c.exports;
      }, function () {
        return {
          './index-light': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      _0x2e006d.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/index.js', function (_0x388cb7, _0x2ef5a1, _0x1506aa, _0x232a42, _0x29fc35) {
        _0x1506aa.exports = _0x2ef5a1("./src/index");
        _0x837965 = _0x1506aa.exports;
      }, function () {
        return {
          './src/index': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      _0x2e006d.require('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/index.js');
      var _0x33fffa;
      _0x2e006d.define("file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (_0x2f1ea7, _0x363ea4, _0x511ed5, _0x2b9cb3, _0x4ac340) {
        _0x511ed5.exports = _0x363ea4('./src/index-minimal');
        _0x511ed5.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      var _0x3c6f5a;
      var _0x467962;
      _0x2e006d.define('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/assets/game/Script/Proto/bbcProto.js', function (_0xae3a95, _0x28a94d, _0x2d439e, _0xf59465, _0x29f20d) {
        var _0xe7d513;
        var _0x3b4c01 = _0x28a94d("protobufjs/minimal");
        var _0x2328a2 = _0x3b4c01.Reader;
        var _0x47dccf = _0x3b4c01.Writer;
        var _0x21e8e6 = _0x3b4c01.util;
        var _0x3a0606 = _0x3b4c01.roots["default"] || (_0x3b4c01.roots["default"] = {});
        (_0xe7d513 = {
          "Award": function () {
            function _0x5ef77e(_0x4932de) {
              if (_0x4932de) {
                var _0x10ffd2 = Object.keys(_0x4932de);
                for (var _0x7b4764 = 0x0; _0x7b4764 < _0x10ffd2.length; ++_0x7b4764) {
                  if (null != _0x4932de[_0x10ffd2[_0x7b4764]]) {
                    this[_0x10ffd2[_0x7b4764]] = _0x4932de[_0x10ffd2[_0x7b4764]];
                  }
                }
              }
            }
            _0x5ef77e.prototype.AwardLink = 0x0;
            _0x5ef77e.prototype.AwardSymbol = 0x0;
            _0x5ef77e.prototype.LineIndex = 0x0;
            _0x5ef77e.prototype.HasWild = false;
            _0x5ef77e.prototype.Odds = 0x0;
            _0x5ef77e.encode = function (_0x27dd0b, _0x3a309) {
              if (!_0x3a309) {
                _0x3a309 = _0x47dccf.create();
              }
              if (null != _0x27dd0b.AwardLink && Object.hasOwnProperty.call(_0x27dd0b, "AwardLink")) {
                _0x3a309.uint32(0x8).int32(_0x27dd0b.AwardLink);
              }
              if (null != _0x27dd0b.AwardSymbol && Object.hasOwnProperty.call(_0x27dd0b, "AwardSymbol")) {
                _0x3a309.uint32(0x10).int32(_0x27dd0b.AwardSymbol);
              }
              if (null != _0x27dd0b.LineIndex && Object.hasOwnProperty.call(_0x27dd0b, "LineIndex")) {
                _0x3a309.uint32(0x18).int32(_0x27dd0b.LineIndex);
              }
              if (null != _0x27dd0b.HasWild && Object.hasOwnProperty.call(_0x27dd0b, "HasWild")) {
                _0x3a309.uint32(0x20).bool(_0x27dd0b.HasWild);
              }
              if (null != _0x27dd0b.Odds && Object.hasOwnProperty.call(_0x27dd0b, "Odds")) {
                _0x3a309.uint32(0x28).int32(_0x27dd0b.Odds);
              }
              return _0x3a309;
            };
            _0x5ef77e.decode = function (_0x290636, _0x24fa68) {
              if (!(_0x290636 instanceof _0x2328a2)) {
                _0x290636 = _0x2328a2.create(_0x290636);
              }
              var _0x46bc3c = undefined === _0x24fa68 ? _0x290636.len : _0x290636.pos + _0x24fa68;
              for (var _0x27fec5 = new _0x3a0606.bbcProto.Award(); _0x290636.pos < _0x46bc3c;) {
                var _0x320d79 = _0x290636.uint32();
                switch (_0x320d79 >>> 0x3) {
                  case 0x1:
                    _0x27fec5.AwardLink = _0x290636.int32();
                    break;
                  case 0x2:
                    _0x27fec5.AwardSymbol = _0x290636.int32();
                    break;
                  case 0x3:
                    _0x27fec5.LineIndex = _0x290636.int32();
                    break;
                  case 0x4:
                    _0x27fec5.HasWild = _0x290636.bool();
                    break;
                  case 0x5:
                    _0x27fec5.Odds = _0x290636.int32();
                    break;
                  default:
                    _0x290636.skipType(0x7 & _0x320d79);
                }
              }
              return _0x27fec5;
            };
            _0x5ef77e.getTypeUrl = function (_0x2ead9d) {
              if (undefined === _0x2ead9d) {
                _0x2ead9d = "type.googleapis.com";
              }
              return _0x2ead9d + "/bbcProto.Award";
            };
            return _0x5ef77e;
          }(),
          FreeGamePlateInfo: function () {
            function _0x3da64e(_0x3957ca) {
              this.PlateT = [];
              this.EventPlate = [];
              this.AwardInfos = [];
              if (_0x3957ca) {
                var _0x2d5bc8 = Object.keys(_0x3957ca);
                for (var _0x5ab429 = 0x0; _0x5ab429 < _0x2d5bc8.length; ++_0x5ab429) {
                  if (null != _0x3957ca[_0x2d5bc8[_0x5ab429]]) {
                    this[_0x2d5bc8[_0x5ab429]] = _0x3957ca[_0x2d5bc8[_0x5ab429]];
                  }
                }
              }
            }
            _0x3da64e.prototype.PlateT = _0x21e8e6.emptyArray;
            _0x3da64e.prototype.EventPlate = _0x21e8e6.emptyArray;
            _0x3da64e.prototype.AwardInfos = _0x21e8e6.emptyArray;
            _0x3da64e.prototype.FullWildCount = 0x0;
            _0x3da64e.prototype.AwardPrize = 0x0;
            _0x3da64e.prototype.ShowIndex = '';
            _0x3da64e.prototype.NowMoney = 0x0;
            _0x3da64e.prototype.LogIndex = _0x21e8e6.Long ? _0x21e8e6.Long.fromBits(0x0, 0x0, false) : 0x0;
            _0x3da64e.prototype.LineBet = 0x0;
            _0x3da64e.encode = function (_0xa5a777, _0x2316b3) {
              if (!_0x2316b3) {
                _0x2316b3 = _0x47dccf.create();
              }
              if (null != _0xa5a777.PlateT && _0xa5a777.PlateT.length) {
                for (var _0xa877e4 = 0x0; _0xa877e4 < _0xa5a777.PlateT.length; ++_0xa877e4) {
                  _0x3a0606.bbcProto.Column.encode(_0xa5a777.PlateT[_0xa877e4], _0x2316b3.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0xa5a777.EventPlate && _0xa5a777.EventPlate.length) {
                _0x2316b3.uint32(0x12).fork();
                for (_0xa877e4 = 0x0; _0xa877e4 < _0xa5a777.EventPlate.length; ++_0xa877e4) {
                  _0x2316b3.int32(_0xa5a777.EventPlate[_0xa877e4]);
                }
                _0x2316b3.ldelim();
              }
              if (null != _0xa5a777.AwardInfos && _0xa5a777.AwardInfos.length) {
                for (_0xa877e4 = 0x0; _0xa877e4 < _0xa5a777.AwardInfos.length; ++_0xa877e4) {
                  _0x3a0606.bbcProto.Award.encode(_0xa5a777.AwardInfos[_0xa877e4], _0x2316b3.uint32(0x1a).fork()).ldelim();
                }
              }
              if (null != _0xa5a777.FullWildCount && Object.hasOwnProperty.call(_0xa5a777, "FullWildCount")) {
                _0x2316b3.uint32(0x20).int32(_0xa5a777.FullWildCount);
              }
              if (null != _0xa5a777.AwardPrize && Object.hasOwnProperty.call(_0xa5a777, "AwardPrize")) {
                _0x2316b3.uint32(0x29).double(_0xa5a777.AwardPrize);
              }
              if (null != _0xa5a777.ShowIndex && Object.hasOwnProperty.call(_0xa5a777, 'ShowIndex')) {
                _0x2316b3.uint32(0x32).string(_0xa5a777.ShowIndex);
              }
              if (null != _0xa5a777.NowMoney && Object.hasOwnProperty.call(_0xa5a777, "NowMoney")) {
                _0x2316b3.uint32(0x39).double(_0xa5a777.NowMoney);
              }
              if (null != _0xa5a777.LogIndex && Object.hasOwnProperty.call(_0xa5a777, "LogIndex")) {
                _0x2316b3.uint32(0x40).int64(_0xa5a777.LogIndex);
              }
              if (null != _0xa5a777.LineBet && Object.hasOwnProperty.call(_0xa5a777, "LineBet")) {
                _0x2316b3.uint32(0x49).double(_0xa5a777.LineBet);
              }
              return _0x2316b3;
            };
            _0x3da64e.decode = function (_0x354d31, _0x1e836c) {
              if (!(_0x354d31 instanceof _0x2328a2)) {
                _0x354d31 = _0x2328a2.create(_0x354d31);
              }
              var _0x516b26 = undefined === _0x1e836c ? _0x354d31.len : _0x354d31.pos + _0x1e836c;
              for (var _0x304af1 = new _0x3a0606.bbcProto.FreeGamePlateInfo(); _0x354d31.pos < _0x516b26;) {
                var _0x42ee0a = _0x354d31.uint32();
                switch (_0x42ee0a >>> 0x3) {
                  case 0x1:
                    if (!(_0x304af1.PlateT && _0x304af1.PlateT.length)) {
                      _0x304af1.PlateT = [];
                    }
                    _0x304af1.PlateT.push(_0x3a0606.bbcProto.Column.decode(_0x354d31, _0x354d31.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x304af1.EventPlate && _0x304af1.EventPlate.length)) {
                      _0x304af1.EventPlate = [];
                    }
                    if (0x2 == (0x7 & _0x42ee0a)) {
                      for (var _0x2fd291 = _0x354d31.uint32() + _0x354d31.pos; _0x354d31.pos < _0x2fd291;) {
                        _0x304af1.EventPlate.push(_0x354d31.int32());
                      }
                    } else {
                      _0x304af1.EventPlate.push(_0x354d31.int32());
                    }
                    break;
                  case 0x3:
                    if (!(_0x304af1.AwardInfos && _0x304af1.AwardInfos.length)) {
                      _0x304af1.AwardInfos = [];
                    }
                    _0x304af1.AwardInfos.push(_0x3a0606.bbcProto.Award.decode(_0x354d31, _0x354d31.uint32()));
                    break;
                  case 0x4:
                    _0x304af1.FullWildCount = _0x354d31.int32();
                    break;
                  case 0x5:
                    _0x304af1.AwardPrize = _0x354d31.double();
                    break;
                  case 0x6:
                    _0x304af1.ShowIndex = _0x354d31.string();
                    break;
                  case 0x7:
                    _0x304af1.NowMoney = _0x354d31.double();
                    break;
                  case 0x8:
                    _0x304af1.LogIndex = _0x354d31.int64();
                    break;
                  case 0x9:
                    _0x304af1.LineBet = _0x354d31.double();
                    break;
                  default:
                    _0x354d31.skipType(0x7 & _0x42ee0a);
                }
              }
              return _0x304af1;
            };
            _0x3da64e.getTypeUrl = function (_0x291a37) {
              if (undefined === _0x291a37) {
                _0x291a37 = "type.googleapis.com";
              }
              return _0x291a37 + "/bbcProto.FreeGamePlateInfo";
            };
            return _0x3da64e;
          }(),
          "FreeGameData": function () {
            function _0x34d199(_0x1e5011) {
              this.FreeGamePlateInfo = [];
              if (_0x1e5011) {
                var _0xe7ef69 = Object.keys(_0x1e5011);
                for (var _0x362819 = 0x0; _0x362819 < _0xe7ef69.length; ++_0x362819) {
                  if (null != _0x1e5011[_0xe7ef69[_0x362819]]) {
                    this[_0xe7ef69[_0x362819]] = _0x1e5011[_0xe7ef69[_0x362819]];
                  }
                }
              }
            }
            _0x34d199.prototype.FreeGamePlateInfo = _0x21e8e6.emptyArray;
            _0x34d199.prototype.TotalPrize = 0x0;
            _0x34d199.prototype.TotalFullWildCount = 0x0;
            _0x34d199.prototype.Times = 0x0;
            _0x34d199.prototype.MultiX = 0x0;
            _0x34d199.encode = function (_0x55da5b, _0x5dc12e) {
              if (!_0x5dc12e) {
                _0x5dc12e = _0x47dccf.create();
              }
              if (null != _0x55da5b.FreeGamePlateInfo && _0x55da5b.FreeGamePlateInfo.length) {
                for (var _0xec130b = 0x0; _0xec130b < _0x55da5b.FreeGamePlateInfo.length; ++_0xec130b) {
                  _0x3a0606.bbcProto.FreeGamePlateInfo.encode(_0x55da5b.FreeGamePlateInfo[_0xec130b], _0x5dc12e.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x55da5b.TotalPrize && Object.hasOwnProperty.call(_0x55da5b, 'TotalPrize')) {
                _0x5dc12e.uint32(0x11).double(_0x55da5b.TotalPrize);
              }
              if (null != _0x55da5b.TotalFullWildCount && Object.hasOwnProperty.call(_0x55da5b, 'TotalFullWildCount')) {
                _0x5dc12e.uint32(0x18).int32(_0x55da5b.TotalFullWildCount);
              }
              if (null != _0x55da5b.Times && Object.hasOwnProperty.call(_0x55da5b, "Times")) {
                _0x5dc12e.uint32(0x20).int32(_0x55da5b.Times);
              }
              if (null != _0x55da5b.MultiX && Object.hasOwnProperty.call(_0x55da5b, 'MultiX')) {
                _0x5dc12e.uint32(0x28).int32(_0x55da5b.MultiX);
              }
              return _0x5dc12e;
            };
            _0x34d199.decode = function (_0x4dc164, _0x161b67) {
              if (!(_0x4dc164 instanceof _0x2328a2)) {
                _0x4dc164 = _0x2328a2.create(_0x4dc164);
              }
              var _0x2d3d9d = undefined === _0x161b67 ? _0x4dc164.len : _0x4dc164.pos + _0x161b67;
              for (var _0x42e9f2 = new _0x3a0606.bbcProto.FreeGameData(); _0x4dc164.pos < _0x2d3d9d;) {
                var _0x25bfe9 = _0x4dc164.uint32();
                switch (_0x25bfe9 >>> 0x3) {
                  case 0x1:
                    if (!(_0x42e9f2.FreeGamePlateInfo && _0x42e9f2.FreeGamePlateInfo.length)) {
                      _0x42e9f2.FreeGamePlateInfo = [];
                    }
                    _0x42e9f2.FreeGamePlateInfo.push(_0x3a0606.bbcProto.FreeGamePlateInfo.decode(_0x4dc164, _0x4dc164.uint32()));
                    break;
                  case 0x2:
                    _0x42e9f2.TotalPrize = _0x4dc164.double();
                    break;
                  case 0x3:
                    _0x42e9f2.TotalFullWildCount = _0x4dc164.int32();
                    break;
                  case 0x4:
                    _0x42e9f2.Times = _0x4dc164.int32();
                    break;
                  case 0x5:
                    _0x42e9f2.MultiX = _0x4dc164.int32();
                    break;
                  default:
                    _0x4dc164.skipType(0x7 & _0x25bfe9);
                }
              }
              return _0x42e9f2;
            };
            _0x34d199.getTypeUrl = function (_0x5390be) {
              if (undefined === _0x5390be) {
                _0x5390be = "type.googleapis.com";
              }
              return _0x5390be + "/bbcProto.FreeGameData";
            };
            return _0x34d199;
          }(),
          "PlateInfoBao": function () {
            function _0x472c28(_0x449bb6) {
              this.BaoPlateT = [];
              this.BaoEventPlate = [];
              this.AwardInfos = [];
              if (_0x449bb6) {
                var _0x1105f7 = Object.keys(_0x449bb6);
                for (var _0x4462ed = 0x0; _0x4462ed < _0x1105f7.length; ++_0x4462ed) {
                  if (null != _0x449bb6[_0x1105f7[_0x4462ed]]) {
                    this[_0x1105f7[_0x4462ed]] = _0x449bb6[_0x1105f7[_0x4462ed]];
                  }
                }
              }
            }
            _0x472c28.prototype.BaoPlateT = _0x21e8e6.emptyArray;
            _0x472c28.prototype.BaoEventPlate = _0x21e8e6.emptyArray;
            _0x472c28.prototype.AwardInfos = _0x21e8e6.emptyArray;
            _0x472c28.prototype.Scatters = 0x0;
            _0x472c28.prototype.TotalWild = 0x0;
            _0x472c28.prototype.TotalOdds = 0x0;
            _0x472c28.prototype.MainWin = 0x0;
            _0x472c28.prototype.FGWin = 0x0;
            _0x472c28.prototype.FreeGamePackage = null;
            _0x472c28.prototype.NowMoney = 0x0;
            _0x472c28.prototype.LineBet = 0x0;
            _0x472c28.encode = function (_0x1502fe, _0x50cb99) {
              if (!_0x50cb99) {
                _0x50cb99 = _0x47dccf.create();
              }
              if (null != _0x1502fe.BaoPlateT && _0x1502fe.BaoPlateT.length) {
                for (var _0x305657 = 0x0; _0x305657 < _0x1502fe.BaoPlateT.length; ++_0x305657) {
                  _0x3a0606.bbcProto.Column.encode(_0x1502fe.BaoPlateT[_0x305657], _0x50cb99.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x1502fe.BaoEventPlate && _0x1502fe.BaoEventPlate.length) {
                _0x50cb99.uint32(0x12).fork();
                for (_0x305657 = 0x0; _0x305657 < _0x1502fe.BaoEventPlate.length; ++_0x305657) {
                  _0x50cb99.int32(_0x1502fe.BaoEventPlate[_0x305657]);
                }
                _0x50cb99.ldelim();
              }
              if (null != _0x1502fe.AwardInfos && _0x1502fe.AwardInfos.length) {
                for (_0x305657 = 0x0; _0x305657 < _0x1502fe.AwardInfos.length; ++_0x305657) {
                  _0x3a0606.bbcProto.Award.encode(_0x1502fe.AwardInfos[_0x305657], _0x50cb99.uint32(0x1a).fork()).ldelim();
                }
              }
              if (null != _0x1502fe.Scatters && Object.hasOwnProperty.call(_0x1502fe, 'Scatters')) {
                _0x50cb99.uint32(0x20).int32(_0x1502fe.Scatters);
              }
              if (null != _0x1502fe.TotalWild && Object.hasOwnProperty.call(_0x1502fe, 'TotalWild')) {
                _0x50cb99.uint32(0x28).int32(_0x1502fe.TotalWild);
              }
              if (null != _0x1502fe.TotalOdds && Object.hasOwnProperty.call(_0x1502fe, "TotalOdds")) {
                _0x50cb99.uint32(0x30).int32(_0x1502fe.TotalOdds);
              }
              if (null != _0x1502fe.MainWin && Object.hasOwnProperty.call(_0x1502fe, "MainWin")) {
                _0x50cb99.uint32(0x39).double(_0x1502fe.MainWin);
              }
              if (null != _0x1502fe.FGWin && Object.hasOwnProperty.call(_0x1502fe, 'FGWin')) {
                _0x50cb99.uint32(0x41).double(_0x1502fe.FGWin);
              }
              if (null != _0x1502fe.FreeGamePackage && Object.hasOwnProperty.call(_0x1502fe, 'FreeGamePackage')) {
                _0x3a0606.bbcProto.FreeGameData.encode(_0x1502fe.FreeGamePackage, _0x50cb99.uint32(0x4a).fork()).ldelim();
              }
              if (null != _0x1502fe.NowMoney && Object.hasOwnProperty.call(_0x1502fe, "NowMoney")) {
                _0x50cb99.uint32(0x51).double(_0x1502fe.NowMoney);
              }
              if (null != _0x1502fe.LineBet && Object.hasOwnProperty.call(_0x1502fe, "LineBet")) {
                _0x50cb99.uint32(0x59).double(_0x1502fe.LineBet);
              }
              return _0x50cb99;
            };
            _0x472c28.decode = function (_0x556917, _0x3af5ca) {
              if (!(_0x556917 instanceof _0x2328a2)) {
                _0x556917 = _0x2328a2.create(_0x556917);
              }
              var _0x1c789d = undefined === _0x3af5ca ? _0x556917.len : _0x556917.pos + _0x3af5ca;
              for (var _0x5be1d8 = new _0x3a0606.bbcProto.PlateInfoBao(); _0x556917.pos < _0x1c789d;) {
                var _0x1a50f3 = _0x556917.uint32();
                switch (_0x1a50f3 >>> 0x3) {
                  case 0x1:
                    if (!(_0x5be1d8.BaoPlateT && _0x5be1d8.BaoPlateT.length)) {
                      _0x5be1d8.BaoPlateT = [];
                    }
                    _0x5be1d8.BaoPlateT.push(_0x3a0606.bbcProto.Column.decode(_0x556917, _0x556917.uint32()));
                    break;
                  case 0x2:
                    if (!(_0x5be1d8.BaoEventPlate && _0x5be1d8.BaoEventPlate.length)) {
                      _0x5be1d8.BaoEventPlate = [];
                    }
                    if (0x2 == (0x7 & _0x1a50f3)) {
                      for (var _0x349a16 = _0x556917.uint32() + _0x556917.pos; _0x556917.pos < _0x349a16;) {
                        _0x5be1d8.BaoEventPlate.push(_0x556917.int32());
                      }
                    } else {
                      _0x5be1d8.BaoEventPlate.push(_0x556917.int32());
                    }
                    break;
                  case 0x3:
                    if (!(_0x5be1d8.AwardInfos && _0x5be1d8.AwardInfos.length)) {
                      _0x5be1d8.AwardInfos = [];
                    }
                    _0x5be1d8.AwardInfos.push(_0x3a0606.bbcProto.Award.decode(_0x556917, _0x556917.uint32()));
                    break;
                  case 0x4:
                    _0x5be1d8.Scatters = _0x556917.int32();
                    break;
                  case 0x5:
                    _0x5be1d8.TotalWild = _0x556917.int32();
                    break;
                  case 0x6:
                    _0x5be1d8.TotalOdds = _0x556917.int32();
                    break;
                  case 0x7:
                    _0x5be1d8.MainWin = _0x556917.double();
                    break;
                  case 0x8:
                    _0x5be1d8.FGWin = _0x556917.double();
                    break;
                  case 0x9:
                    _0x5be1d8.FreeGamePackage = _0x3a0606.bbcProto.FreeGameData.decode(_0x556917, _0x556917.uint32());
                    break;
                  case 0xa:
                    _0x5be1d8.NowMoney = _0x556917.double();
                    break;
                  case 0xb:
                    _0x5be1d8.LineBet = _0x556917.double();
                    break;
                  default:
                    _0x556917.skipType(0x7 & _0x1a50f3);
                }
              }
              return _0x5be1d8;
            };
            _0x472c28.getTypeUrl = function (_0x55271b) {
              if (undefined === _0x55271b) {
                _0x55271b = 'type.googleapis.com';
              }
              return _0x55271b + '/bbcProto.PlateInfoBao';
            };
            return _0x472c28;
          }(),
          "SpinAck": function () {
            function _0x22771a(_0x25f862) {
              if (_0x25f862) {
                var _0x32ebe1 = Object.keys(_0x25f862);
                for (var _0x5f00cc = 0x0; _0x5f00cc < _0x32ebe1.length; ++_0x5f00cc) {
                  if (null != _0x25f862[_0x32ebe1[_0x5f00cc]]) {
                    this[_0x32ebe1[_0x5f00cc]] = _0x25f862[_0x32ebe1[_0x5f00cc]];
                  }
                }
              }
            }
            _0x22771a.prototype.PlateInfo = null;
            _0x22771a.prototype.TotalWin = 0x0;
            _0x22771a.prototype.AckType = 0x0;
            _0x22771a.prototype.ShowIndex = '';
            _0x22771a.prototype.RTP = 0x0;
            _0x22771a.prototype.LID = 0x0;
            _0x22771a.prototype.RID = 0x0;
            _0x22771a.encode = function (_0x497ca1, _0x4a0620) {
              if (!_0x4a0620) {
                _0x4a0620 = _0x47dccf.create();
              }
              if (null != _0x497ca1.PlateInfo && Object.hasOwnProperty.call(_0x497ca1, "PlateInfo")) {
                _0x3a0606.bbcProto.PlateInfoBao.encode(_0x497ca1.PlateInfo, _0x4a0620.uint32(0xa).fork()).ldelim();
              }
              if (null != _0x497ca1.TotalWin && Object.hasOwnProperty.call(_0x497ca1, 'TotalWin')) {
                _0x4a0620.uint32(0x11).double(_0x497ca1.TotalWin);
              }
              if (null != _0x497ca1.AckType && Object.hasOwnProperty.call(_0x497ca1, 'AckType')) {
                _0x4a0620.uint32(0x18).int32(_0x497ca1.AckType);
              }
              if (null != _0x497ca1.ShowIndex && Object.hasOwnProperty.call(_0x497ca1, "ShowIndex")) {
                _0x4a0620.uint32(0x22).string(_0x497ca1.ShowIndex);
              }
              if (null != _0x497ca1.RTP && Object.hasOwnProperty.call(_0x497ca1, "RTP")) {
                _0x4a0620.uint32(0x61).double(_0x497ca1.RTP);
              }
              if (null != _0x497ca1.LID && Object.hasOwnProperty.call(_0x497ca1, "LID")) {
                _0x4a0620.uint32(0x68).int32(_0x497ca1.LID);
              }
              if (null != _0x497ca1.RID && Object.hasOwnProperty.call(_0x497ca1, "RID")) {
                _0x4a0620.uint32(0x70).int32(_0x497ca1.RID);
              }
              return _0x4a0620;
            };
            _0x22771a.decode = function (_0x57a6ed, _0x4a483b) {
              if (!(_0x57a6ed instanceof _0x2328a2)) {
                _0x57a6ed = _0x2328a2.create(_0x57a6ed);
              }
              var _0x543e6f = undefined === _0x4a483b ? _0x57a6ed.len : _0x57a6ed.pos + _0x4a483b;
              for (var _0xf40a0d = new _0x3a0606.bbcProto.SpinAck(); _0x57a6ed.pos < _0x543e6f;) {
                var _0x42676c = _0x57a6ed.uint32();
                switch (_0x42676c >>> 0x3) {
                  case 0x1:
                    _0xf40a0d.PlateInfo = _0x3a0606.bbcProto.PlateInfoBao.decode(_0x57a6ed, _0x57a6ed.uint32());
                    break;
                  case 0x2:
                    _0xf40a0d.TotalWin = _0x57a6ed.double();
                    break;
                  case 0x3:
                    _0xf40a0d.AckType = _0x57a6ed.int32();
                    break;
                  case 0x4:
                    _0xf40a0d.ShowIndex = _0x57a6ed.string();
                    break;
                  case 0xc:
                    _0xf40a0d.RTP = _0x57a6ed.double();
                    break;
                  case 0xd:
                    _0xf40a0d.LID = _0x57a6ed.int32();
                    break;
                  case 0xe:
                    _0xf40a0d.RID = _0x57a6ed.int32();
                    break;
                  default:
                    _0x57a6ed.skipType(0x7 & _0x42676c);
                }
              }
              return _0xf40a0d;
            };
            _0x22771a.getTypeUrl = function (_0x4a74ff) {
              if (undefined === _0x4a74ff) {
                _0x4a74ff = "type.googleapis.com";
              }
              return _0x4a74ff + "/bbcProto.SpinAck";
            };
            return _0x22771a;
          }(),
          GameInfoAck: function () {
            function _0x14dfc1(_0x23be7b) {
              if (_0x23be7b) {
                var _0x5d238a = Object.keys(_0x23be7b);
                for (var _0x2ec90e = 0x0; _0x2ec90e < _0x5d238a.length; ++_0x2ec90e) {
                  if (null != _0x23be7b[_0x5d238a[_0x2ec90e]]) {
                    this[_0x5d238a[_0x2ec90e]] = _0x23be7b[_0x5d238a[_0x2ec90e]];
                  }
                }
              }
            }
            _0x14dfc1.encode = function (_0x3304fb, _0x5e6d0e) {
              if (!_0x5e6d0e) {
                _0x5e6d0e = _0x47dccf.create();
              }
              return _0x5e6d0e;
            };
            _0x14dfc1.decode = function (_0x436475, _0x3dfe5e) {
              if (!(_0x436475 instanceof _0x2328a2)) {
                _0x436475 = _0x2328a2.create(_0x436475);
              }
              var _0x182122 = undefined === _0x3dfe5e ? _0x436475.len : _0x436475.pos + _0x3dfe5e;
              for (var _0x2d47cd = new _0x3a0606.bbcProto.GameInfoAck(); _0x436475.pos < _0x182122;) {
                var _0x303cfa = _0x436475.uint32();
                _0x436475.skipType(0x7 & _0x303cfa);
              }
              return _0x2d47cd;
            };
            _0x14dfc1.getTypeUrl = function (_0x2d10a6) {
              if (undefined === _0x2d10a6) {
                _0x2d10a6 = 'type.googleapis.com';
              }
              return _0x2d10a6 + "/bbcProto.GameInfoAck";
            };
            return _0x14dfc1;
          }()
        }).Column = function () {
          function _0x3ffbea(_0x5b0b1c) {
            this.Row = [];
            if (_0x5b0b1c) {
              var _0x232b8e = Object.keys(_0x5b0b1c);
              for (var _0x41c69d = 0x0; _0x41c69d < _0x232b8e.length; ++_0x41c69d) {
                if (null != _0x5b0b1c[_0x232b8e[_0x41c69d]]) {
                  this[_0x232b8e[_0x41c69d]] = _0x5b0b1c[_0x232b8e[_0x41c69d]];
                }
              }
            }
          }
          _0x3ffbea.prototype.Row = _0x21e8e6.emptyArray;
          _0x3ffbea.encode = function (_0x4d627e, _0x30ec42) {
            if (!_0x30ec42) {
              _0x30ec42 = _0x47dccf.create();
            }
            if (null != _0x4d627e.Row && _0x4d627e.Row.length) {
              _0x30ec42.uint32(0xa).fork();
              for (var _0x290f63 = 0x0; _0x290f63 < _0x4d627e.Row.length; ++_0x290f63) {
                _0x30ec42.int32(_0x4d627e.Row[_0x290f63]);
              }
              _0x30ec42.ldelim();
            }
            return _0x30ec42;
          };
          _0x3ffbea.decode = function (_0x1804d2, _0x4de0c6) {
            if (!(_0x1804d2 instanceof _0x2328a2)) {
              _0x1804d2 = _0x2328a2.create(_0x1804d2);
            }
            var _0x1c10f6 = undefined === _0x4de0c6 ? _0x1804d2.len : _0x1804d2.pos + _0x4de0c6;
            for (var _0x4f21d5 = new _0x3a0606.bbcProto.Column(); _0x1804d2.pos < _0x1c10f6;) {
              var _0x293599 = _0x1804d2.uint32();
              switch (_0x293599 >>> 0x3) {
                case 0x1:
                  if (!(_0x4f21d5.Row && _0x4f21d5.Row.length)) {
                    _0x4f21d5.Row = [];
                  }
                  if (0x2 == (0x7 & _0x293599)) {
                    for (var _0x1f95b5 = _0x1804d2.uint32() + _0x1804d2.pos; _0x1804d2.pos < _0x1f95b5;) {
                      _0x4f21d5.Row.push(_0x1804d2.int32());
                    }
                  } else {
                    _0x4f21d5.Row.push(_0x1804d2.int32());
                  }
                  break;
                default:
                  _0x1804d2.skipType(0x7 & _0x293599);
              }
            }
            return _0x4f21d5;
          };
          _0x3ffbea.getTypeUrl = function (_0x4bf681) {
            if (undefined === _0x4bf681) {
              _0x4bf681 = "type.googleapis.com";
            }
            return _0x4bf681 + "/bbcProto.Column";
          };
          return _0x3ffbea;
        }();
        _0x3a0606.bbcProto = _0xe7d513;
        _0x2d439e.exports = _0x3a0606;
        _0x33fffa = _0x2d439e.exports;
      }, function () {
        return {
          'protobufjs/minimal': "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      _0x2e006d.require('file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CAM_BaoBoonChin/Client/Thai_UAT/assets/game/Script/Proto/bbcProto.js');
      _0x252f89._RF.push({}, '1584aT3skxMCKraI8X+hAcd', 'CheckState', undefined);
      var _0x187bef = _0x2db653.ccclass;
      _0x3c6f5a = _0x187bef("CheckState");
      var _0x1dce2d = _0x3c6f5a(_0x467962 = function (_0x8e3c5a) {
        function _0x1f7adb(_0x1650ea) {
          var _0x996ad5;
          (_0x996ad5 = _0x8e3c5a.call(this) || this).m_gameView = null;
          _0x996ad5.m_gameView = _0x1650ea;
          return _0x996ad5;
        }
        _0x59a013(_0x1f7adb, _0x8e3c5a);
        var _0x223e28 = _0x1f7adb.prototype;
        _0x223e28.OnEnter = function () {
          _0x411bc1("GameState CheckState");
          if (this.m_gameView.IsFirstInFree) {
            _0x446dc3.NextState(_0x1bcb3d.ENTER_FREE);
          } else if (this.m_gameView.IsFreeGame && this.m_gameView.TimesOfFreeGame == this.m_gameView.TotalTimesOfFreeGame) {
            _0x446dc3.NextState(_0x1bcb3d.LEAVE_FREE);
          } else {
            _0x446dc3.NextState(_0x1bcb3d.ROUND_END);
          }
        };
        _0x223e28.OnProcess = function (_0x24b5ec) {};
        _0x223e28.OnLeave = function () {};
        return _0x1f7adb;
      }(_0x25838e)) || _0x467962;
      var _0x1b1af2;
      var _0x2f79f7;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, '92a509tIe1LpYARtQwmKvxO', 'EnterFreeState', undefined);
      var _0x3fc3d5 = _0x2db653.ccclass;
      _0x1b1af2 = _0x3fc3d5("EnterFreeState");
      var _0x2fd809 = _0x1b1af2(_0x2f79f7 = function (_0x44261a) {
        function _0x210b7a(_0x4717c1) {
          var _0x2f3d18;
          (_0x2f3d18 = _0x44261a.call(this) || this).m_gameView = null;
          _0x2f3d18.m_gameView = _0x4717c1;
          return _0x2f3d18;
        }
        _0x59a013(_0x210b7a, _0x44261a);
        var _0x56591b = _0x210b7a.prototype;
        _0x56591b.OnEnter = function () {
          var _0x44a89b = _0x3c3d1d(_0x3c8f4a().mark(function _0x4d5ef0() {
            return _0x3c8f4a().wrap(function (_0x4ddc72) {
              for (;;) {
                switch (_0x4ddc72.prev = _0x4ddc72.next) {
                  case 0x0:
                    _0x411bc1("game state ENTER_FREE");
                    _0x12ab12.SetEnterFree();
                    this.m_gameView.IsFreeGame = true;
                    this.m_gameView.CanScatterSound = false;
                    this.m_gameView.IsFreeAutoSpin = true;
                    this.m_gameView.MainWinForFree = this.m_gameView.Win;
                    this.m_gameView.Win = 0x0;
                    _0x12ab12.SetWinValueWithCheck({
                      'maxWin': this.m_gameView.SpinAckQue.totalwin,
                      'value': this.m_gameView.Win
                    });
                    if (_0x12ab12.IsAutoSpin && this.m_gameView.AutoplayInfos.isCheckFree) {
                      _0x12ab12.ShowAutoPlayState(false);
                    }
                    this.m_gameView.ChangeToFreeGame();
                    if (null == this.m_gameView.FreeBgmId) {
                      _0x151d0c.SetVolume(this.m_gameView.BgmId, 0x0);
                      this.m_gameView.FreeBgmId = _0x151d0c.Play(_0x249d7b.AudioClips.Bbc_fg_bgm, true);
                    }
                    _0x4ddc72.next = 0xd;
                    return _0x42709d.Wait(this.m_gameView, 0x1);
                  case 0xd:
                    _0x446dc3.NextState(_0x1bcb3d.ROUND_END);
                  case 0xe:
                  case "end":
                    return _0x4ddc72.stop();
                }
              }
            }, _0x4d5ef0, this);
          }));
          return function () {
            return _0x44a89b.apply(this, arguments);
          };
        }();
        _0x56591b.OnProcess = function () {};
        _0x56591b.OnLeave = function () {};
        return _0x210b7a;
      }(_0x25838e)) || _0x2f79f7;
      var _0xf2eaf1;
      var _0x424d74;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, 'a976cU3YmxIhKQCiVFZLr4v', "IdleState", undefined);
      var _0x443e9a = _0x2db653.ccclass;
      _0xf2eaf1 = _0x443e9a("IdleState");
      var _0x3b4740 = _0xf2eaf1(_0x424d74 = function (_0x2fc0a5) {
        function _0x96fb88(_0x250f4a) {
          var _0x2f51b1;
          (_0x2f51b1 = _0x2fc0a5.call(this) || this).m_gameView = null;
          _0x2f51b1.m_gameView = _0x250f4a;
          return _0x2f51b1;
        }
        _0x59a013(_0x96fb88, _0x2fc0a5);
        var _0x5380e6 = _0x96fb88.prototype;
        _0x5380e6.Enter = function () {
          _0x411bc1("GameState IdleState");
        };
        _0x5380e6.Process = function (_0x55d84a) {};
        return _0x96fb88;
      }(_0x106bcd)) || _0x424d74;
      var _0x48d0ee;
      var _0x47d302;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "7564cK/pJVOi6Umfpvsntg8", 'LeaveFreeState', undefined);
      var _0x4f1190 = _0x2db653.ccclass;
      _0x48d0ee = _0x4f1190('LeaveFreeState');
      var _0x2450bf = _0x48d0ee(_0x47d302 = function (_0x371587) {
        function _0x17ad3c(_0x2923f4) {
          var _0xebe01b;
          (_0xebe01b = _0x371587.call(this) || this).m_gameView = null;
          _0xebe01b.m_gameView = _0x2923f4;
          return _0xebe01b;
        }
        _0x59a013(_0x17ad3c, _0x371587);
        var _0x80475c = _0x17ad3c.prototype;
        _0x80475c.OnEnter = function () {
          var _0x22c290 = _0x3c3d1d(_0x3c8f4a().mark(function _0x1b9e27() {
            var _0x121fa2;
            var _0x3a58ea = this;
            return _0x3c8f4a().wrap(function (_0x296e5e) {
              for (;;) {
                switch (_0x296e5e.prev = _0x296e5e.next) {
                  case 0x0:
                    _0x411bc1("game state LEAVE_FREE");
                    _0x121fa2 = 0x0;
                    if (!_0x42709d.IsUsingItem) {
                      _0x12ab12.SetLeaveFree();
                    }
                    if (_0x12ab12.IsAutoSpin) {
                      _0x12ab12.SetEnableBetButtons(false);
                    }
                    if (this.m_gameView.FlyMutiply > 0x0) {
                      _0x121fa2 = _0x249d7b.ACTION_DELAY_TIME.FREE_SETTLEMENT_WIN;
                    }
                    _0x249d7b.ACTION_DELAY_TIME.FREE_SETTLEMENT_SHOW;
                    _0x249d7b.ACTION_DELAY_TIME.FREE_SETTLEMENT_DRAGON;
                    _0x249d7b.ACTION_DELAY_TIME.FREE_SETTLEMENT_RUN_COIN;
                    _0x249d7b.ACTION_DELAY_TIME.CHANGE_TO_MAIN;
                    if (this.m_gameView.FreeGamePlate[this.m_gameView.TotalTimesOfFreeGame - 0x1].awardprize / this.m_gameView.GetNowBetValue() < _0x278c95.ODDS[0x2]) {
                      _0x12ab12.SkipEftWinValue();
                      this.m_gameView.EffectView.SkipEffect();
                    }
                    _0x3c1ce8(this.m_gameView.node).delay(0x1).call(function () {
                      if (_0x3a58ea.m_gameView.FreeBgmId) {
                        _0x151d0c.Stop(_0x3a58ea.m_gameView.FreeBgmId);
                        _0x3a58ea.m_gameView.FreeBgmId = null;
                      }
                      _0x3a58ea.m_gameView.FreeGameSettlement.active = true;
                      _0x3a58ea.m_gameView.SetFreeGameSettlement('animation0');
                      _0x151d0c.Play(_0x249d7b.AudioClips.Freegame_result01);
                    }).delay(_0x249d7b.ACTION_DELAY_TIME.FREE_SETTLEMENT_SHOW).call(function () {
                      _0x3a58ea.m_gameView.SetFreeGameSettlement("animation1");
                      _0x3a58ea.m_gameView.FreeGameTotalWin.node.active = true;
                      _0x3a58ea.m_gameView.RunningFreeGameTotalWin(_0x3a58ea.m_gameView.SpinAckQue.plateinfo.fgpackage.totalprize, _0x249d7b.SETTLEMENT_RUNNING_TIME);
                      _0x151d0c.Play(_0x249d7b.AudioClips.Freegame_result02);
                    }).delay(_0x249d7b.ACTION_DELAY_TIME.FREE_SETTLEMENT_DRAGON).call(function () {
                      _0x3a58ea.m_gameView.FreeGameTotalWinMuti.string = 'x' + _0x3a58ea.m_gameView.SpinAckQue.plateinfo.fgpackage.totalfullwildcount;
                      if (_0x3a58ea.m_gameView.FlyMutiply > 0x0) {
                        _0x3a58ea.m_gameView.SetFreeGameSettlement("animation2");
                        _0x3a58ea.m_gameView.FreeGameTotalWinMuti.node.setScale(_0x20545c(0.45, 0.45));
                        _0x3a58ea.m_gameView.FreeGameTotalWinMuti.node.active = true;
                        _0x3a58ea.m_gameView.FreeGameTotalWinMutiNode.setPosition(_0x20545c(0x25, -0x6d));
                        _0x3c1ce8(_0x3a58ea.m_gameView.FreeGameTotalWinMutiNode.getComponent(_0x3891f8)).to(0.1, {
                          'opacity': 0xff
                        }).start();
                      }
                    }).delay(_0x121fa2).call(function () {
                      var _0x325bd3 = _0x3a58ea.m_gameView.FreeGameTotalWinMutiNode.getComponent(_0x51a26a);
                      _0x3c1ce8(_0x3a58ea.m_gameView.FreeGameTotalWinMutiNode.getComponent(_0x3891f8)).call(function () {
                        if (_0x3a58ea.m_gameView.FlyMutiply > 0x0) {
                          _0x325bd3.getState("num").play();
                        }
                        _0x151d0c.Play(_0x249d7b.AudioClips.Bbc_freegame_fx01);
                      }).delay(0.38).call(function () {
                        var _0x2bcc1e = _0x7eb85f.strip(_0x3a58ea.m_gameView.SpinAckQue.plateinfo.fgwin);
                        _0x3a58ea.m_gameView.FreeGameTotalWin.string = _0x7eb85f.FormatNumberThousands(_0x12ab12.GetDisplayValue(_0x2bcc1e), _0x7eb85f.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                        _0x12ab12.SetWinValueWithCheck({
                          'maxWin': _0x3a58ea.m_gameView.SpinAckQue.totalwin,
                          'value': _0x2bcc1e
                        });
                      }).to(0.1, {
                        'opacity': 0x0
                      }).call(function () {
                        _0x3a58ea.m_gameView.SettlementRain.resetSystem();
                        _0x3a58ea.m_gameView.SettlementRain.node.active = true;
                      }).start();
                    }).delay(_0x249d7b.ACTION_DELAY_TIME.FREE_SETTLEMENT_RUN_COIN).call(function () {
                      _0x3a58ea.m_gameView.DragonCutNode.getComponent(_0x51a26a).play("end");
                      _0x3a58ea.m_gameView.TimesOfFreeGame = 0x0;
                      _0x3a58ea.m_gameView.FlyCount = 0x0;
                      _0x3a58ea.m_gameView.FlyMutiply = 0x0;
                      _0x3a58ea.m_gameView.FreeGameMuti.node.active = false;
                      _0x3a58ea.m_gameView.FreeGameMuti.string = 'x' + String(_0x3a58ea.m_gameView.FlyMutiply);
                      _0x3a58ea.m_gameView.FreeGameMutiS.node.active = false;
                      _0x3a58ea.m_gameView.FreeGameMutiS.string = 'x' + String(_0x3a58ea.m_gameView.FlyMutiply);
                      _0x3a58ea.m_gameView.IsFreeGame = false;
                      _0x3a58ea.m_gameView.FreeGamePlate = null;
                      _0x151d0c.SetVolume(_0x3a58ea.m_gameView.BgmId, 0x1);
                      _0x3a58ea.m_gameView.ChangeToMainGame();
                    }).delay(0x1).call(function () {
                      _0x446dc3.NextState(_0x1bcb3d.ROUND_END);
                    }).start();
                  case 0xc:
                  case "end":
                    return _0x296e5e.stop();
                }
              }
            }, _0x1b9e27, this);
          }));
          return function () {
            return _0x22c290.apply(this, arguments);
          };
        }();
        _0x80475c.OnProcess = function () {};
        _0x80475c.OnLeave = function () {};
        return _0x17ad3c;
      }(_0x25838e)) || _0x47d302;
      var _0x477f84;
      var _0x337eb8;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "162047t1jtKlZbeHsyDRw1y", 'RoundEndState', undefined);
      var _0x462626 = _0x2db653.ccclass;
      _0x477f84 = _0x462626('RoundEndState');
      var _0x4871c2 = _0x477f84(_0x337eb8 = function (_0x175b49) {
        function _0x465234(_0xf0d64b) {
          var _0x8a1dae;
          (_0x8a1dae = _0x175b49.call(this) || this).m_gameView = null;
          _0x8a1dae.m_gameView = _0xf0d64b;
          return _0x8a1dae;
        }
        _0x59a013(_0x465234, _0x175b49);
        var _0x2b5bf2 = _0x465234.prototype;
        _0x2b5bf2.OnEnter = function () {
          _0x411bc1("GameState RoundEndState");
          this.m_gameView.CanSpaceStop = false;
          this.m_gameView.CanPlateStop = false;
          if (_0x12ab12.IsAutoSpin) {
            if (this.m_gameView.SpinAckQue.totalwin > 0x0) {
              if (this.m_gameView.SpinAckQue.totalwin / this.m_gameView.GetNowBetValue() < _0x278c95.ODDS[0x2]) {
                _0x12ab12.SetSpinState(_0x33fc15.CLICK_AUTOPLAY_HARDSTOP);
              }
              this.m_gameView.ProcessTick = 0x1;
            }
          } else {
            this.m_gameView.ProcessTick = 0x0;
          }
          this.m_gameView.RetryRoundEnd();
          this.m_gameView.IsFirstInFree = false;
        };
        _0x2b5bf2.OnProcess = function (_0x2c5702) {
          this.m_gameView.ProcessTick = _0x7eb85f.strip(this.m_gameView.ProcessTick - _0x2c5702);
          if (this.m_gameView.ProcessTick <= 0x0) {
            if (_0xf22764.IsFeaturesDemoMode && !this.m_gameView.IsFreeGame && _0x12ab12.IsAutoSpin) {
              _0x12ab12.ShowAutoPlayState(false);
            }
            if (_0x12ab12.IsAutoSpin) {
              _0x12ab12.SetSpinState(_0x33fc15.CLICK_STOP_IN_AUTOPLAY);
            }
            this.m_gameView.MainWinForFree = 0x0;
            if (_0x1d21d9.CanToNextRound && (!_0xf8b970.IsTwice || _0xf8b970.IsTwice && _0xf8b970.IsGetRoundEndAck)) {
              if (this.m_gameView.IsFreeGame && (this.m_gameView.TimesOfFreeGame > 0x0 || _0x12ab12.IsAutoSpin)) {
                _0x446dc3.NextState(_0x3ed31a.SPIN);
              } else if (this.m_gameView.IsFreeGame) {
                _0x446dc3.NextState(_0x3ed31a.IDLE);
              } else {
                _0x446dc3.NextState(_0x3ed31a.END);
              }
            }
            if (_0xf22764.IsFeaturesDemoMode && !this.m_gameView.IsFreeGame) {
              this.m_gameView.ClearAll();
              this.m_gameView.SlotReels.SetPlateSymbol(this.m_gameView.OldRealPlate);
              this.m_gameView.EventSlotReels.SetPlateSymbol(this.m_gameView.OldEventPlate);
            }
          }
        };
        _0x2b5bf2.OnLeave = function () {};
        return _0x465234;
      }(_0x25838e)) || _0x337eb8;
      var _0x33d335;
      var _0x379bc2;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "faa6a/Mm+dLpoW3eCSHRexK", "RoundShowEndState", undefined);
      var _0x4c0df2 = _0x2db653.ccclass;
      _0x33d335 = _0x4c0df2('RoundShowEndState');
      var _0x1a647a = _0x33d335(_0x379bc2 = function (_0x4215ff) {
        function _0x1a5b44(_0x56f823) {
          var _0x19cdef;
          (_0x19cdef = _0x4215ff.call(this) || this).m_gameView = null;
          _0x19cdef.m_gameView = _0x56f823;
          return _0x19cdef;
        }
        _0x59a013(_0x1a5b44, _0x4215ff);
        var _0x445b4d = _0x1a5b44.prototype;
        _0x445b4d.OnEnter = function () {
          _0x411bc1("GameState RoundShowEndState");
          _0x446dc3.NextState(_0x3ed31a.COMMON_SHOW);
        };
        _0x445b4d.OnProcess = function (_0x58a5c0) {};
        _0x445b4d.OnLeave = function () {};
        return _0x1a5b44;
      }(_0x25838e)) || _0x379bc2;
      var _0x3fd1f8;
      var _0x4ff67d;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "a9f74UKkUhOW6GFEtEgYed1", 'SpinState', undefined);
      var _0x15dcc1 = _0x2db653.ccclass;
      _0x3fd1f8 = _0x15dcc1('SpinState');
      var _0x36659e = _0x3fd1f8(_0x4ff67d = function (_0x1e0fbf) {
        function _0x5a680f(_0x18650c) {
          var _0x5e3bab;
          (_0x5e3bab = _0x1e0fbf.call(this) || this).m_gameView = null;
          _0x5e3bab.m_gameView = _0x18650c;
          return _0x5e3bab;
        }
        _0x59a013(_0x5a680f, _0x1e0fbf);
        var _0x4aae3b = _0x5a680f.prototype;
        _0x4aae3b.OnEnter = function () {
          var _0x3fe3a3 = this;
          _0x411bc1("GameState SpinState");
          _0x1d21d9.StartSpin();
          _0x42709d.SetCanUseItemCard(false, _0x249d7b.USE_ITEM_REASON.NORMAL);
          _0xf22764.SetBuyBonusState(false);
          _0x12ab12.CanPlayFeaturesDemo(false);
          _0x12ab12.IsGameIdle = false;
          this.m_gameView.ClearAll();
          this.m_gameView.StartSpin();
          if (this.m_gameView.IsFreeGame) {
            _0x3c1ce8(this.m_gameView.node).delay(_0x249d7b.ACTION_DELAY_TIME.NORMAL_SPIN_ACK).call(function () {
              if (_0x12ab12.IsAutoSpin && !_0x12ab12.IsHardStop) {
                _0x12ab12.SetSpinState(_0x33fc15.CLICK_AUTOPLAY_HARDSTOP);
              }
              var _0x3990c2 = _0x3fe3a3.m_gameView.FreeGamePlate[_0x3fe3a3.m_gameView.TimesOfFreeGame];
              var _0x55e715 = _0x3fe3a3.m_gameView.GetNowBetValue();
              _0x3fe3a3.m_gameView.SetSwordVec(_0x3fe3a3.m_gameView.ConvertEventPlate(_0x3990c2.eventplate));
              _0x3fe3a3.m_gameView.SlotReels.SetPlateInfo(_0x3fe3a3.m_gameView.ConvertPlate(_0x3990c2.platet));
              _0x3fe3a3.m_gameView.EventSlotReels.SetPlateInfo(_0x3fe3a3.m_gameView.ConvertEventPlate(_0x3990c2.eventplate));
              _0x3fe3a3.m_gameView.AwardList = _0x3fe3a3.m_gameView.SetAwardList(_0x3fe3a3.m_gameView.FreeGamePlate[_0x3fe3a3.m_gameView.TimesOfFreeGame].awardinfos);
              _0x3fe3a3.m_gameView.SetFireBall(_0x3fe3a3.m_gameView.ConvertEventPlate(_0x3990c2.eventplate));
              _0x3fe3a3.m_gameView.ShowBigWave(_0x3fe3a3.m_gameView.FreeGamePlate[_0x3fe3a3.m_gameView.TimesOfFreeGame].awardprize / _0x55e715);
              if (_0x12ab12.IsHardStop) {
                _0x3fe3a3.m_gameView.SlotReels.SetIsClickStopBtn();
                _0x3fe3a3.m_gameView.EventSlotReels.SetIsClickStopBtn();
                _0x12ab12.SetSpinWithSpeed();
              } else if (!_0x12ab12.IsAutoSpin) {
                _0x12ab12.SetSpinState(_0x33fc15.START_SPIN);
              }
              _0x3fe3a3.m_gameView.TimesOfFreeGame++;
              _0x3fe3a3.m_gameView.FreeGameLeft.string = String(_0x3fe3a3.m_gameView.TotalTimesOfFreeGame - _0x3fe3a3.m_gameView.TimesOfFreeGame);
              _0x3fe3a3.m_gameView.FreeGameLeftS.string = String(_0x3fe3a3.m_gameView.TotalTimesOfFreeGame - _0x3fe3a3.m_gameView.TimesOfFreeGame);
            }).start();
          } else if (this.m_gameView.UnshowSpinAck) {
            this.m_gameView.OnRecvSpinAck({
              'info': this.m_gameView.UnshowSpinAck,
              'missionReward': 0x0,
              'fullJpWin': 0x0,
              'freeremain': -0x1
            });
            this.m_gameView.UnshowSpinAck = null;
          }
        };
        _0x4aae3b.OnProcess = function (_0x1bfcb1) {
          this.m_gameView.SlotReels.Spin(_0x1bfcb1);
          this.m_gameView.EventSlotReels.Spin(_0x1bfcb1);
          if (this.m_gameView.SlotReels.IsPlateStop() && this.m_gameView.EventSlotReels.IsPlateStop()) {
            if (!_0x12ab12.IsAutoSpin) {
              _0x12ab12.SetSpinState(_0x33fc15.CLICK_SPIN);
            }
            _0x446dc3.NextState(_0x1bcb3d.SWORD_SHOW);
          }
        };
        _0x4aae3b.OnLeave = function () {};
        return _0x5a680f;
      }(_0x25838e)) || _0x4ff67d;
      var _0x47f2dc;
      var _0x4f8221;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "86337vPpKdGzI+5iKzMXw8W", "SwordShowState", undefined);
      var _0x30ab69 = _0x2db653.ccclass;
      _0x47f2dc = _0x30ab69("SwordShowState");
      var _0x3e3988 = _0x47f2dc(_0x4f8221 = function (_0x5cdc85) {
        function _0x5b3d93(_0x395fc7) {
          var _0x420dab;
          (_0x420dab = _0x5cdc85.call(this) || this).m_gameView = null;
          _0x420dab.m_gameView = _0x395fc7;
          return _0x420dab;
        }
        _0x59a013(_0x5b3d93, _0x5cdc85);
        var _0x693f5a = _0x5b3d93.prototype;
        _0x693f5a.OnEnter = function () {
          var _0x41d65e = this;
          _0x411bc1("GameState SwordShowState");
          var _0x56ea29 = function () {
            _0x41d65e.m_gameView.SwordVec = null;
            if (_0x41d65e.m_gameView.FlyCount > 0x0) {
              _0x41d65e.m_gameView.FlyFireBallMainAni();
            } else {
              _0x446dc3.NextState(_0x1bcb3d.AWARD);
            }
          };
          if (this.m_gameView.HaveSword) {
            this.m_gameView.SwordVec[this.m_gameView.SwordVec.length - 0x1];
            this.m_gameView.EventEffectPlate.ShowSword(this.m_gameView.SwordVec, _0x56ea29, this.m_gameView.SwordGetLimit, this.m_gameView.HaveGetWild(this.m_gameView.SwordVec[0x0]), this.m_gameView.FlyCount * _0x249d7b.ACTION_DELAY_TIME.FIRE_BALL);
          } else {
            _0x56ea29();
          }
        };
        _0x693f5a.OnProcess = function (_0x1aae58) {};
        _0x693f5a.OnLeave = function () {};
        return _0x5b3d93;
      }(_0x25838e)) || _0x4f8221;
      var _0x5de739;
      var _0x59783c;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "55a7c5w84BMhptHLCbA2z7w", "UnshowPerpareState", undefined);
      var _0xa08a36 = _0x2db653.ccclass;
      _0x5de739 = _0xa08a36("UnshowPerpareState");
      var _0x2a55d5 = _0x5de739(_0x59783c = function (_0x5ed678) {
        function _0x3c6898(_0x4932f4) {
          var _0x2b1703;
          (_0x2b1703 = _0x5ed678.call(this) || this).m_gameView = null;
          _0x2b1703.m_gameView = _0x4932f4;
          return _0x2b1703;
        }
        _0x59a013(_0x3c6898, _0x5ed678);
        var _0x1ccdc3 = _0x3c6898.prototype;
        _0x1ccdc3.OnEnter = function () {
          _0x575152("Game_Define.GAMEVIEW_STATE.UNSHOW_PERPARE", this.m_gameView.UnshowSpinAck);
          if (this.m_gameView.UnshowSpinAck) {
            if (!_0x5de981.IsBuyBonus) {
              _0x12ab12.SetNetBet(_0x12ab12.GetNowBetValue());
            }
            _0x12ab12.SetBarNodeVisiable(true);
            if (_0xf8b970.UnshowStartRound >= 0x1) {
              this.m_gameView.IsFreeGame = true;
              this.m_gameView.TimesOfFreeGame = _0xf8b970.UnshowStartRound - 0x1;
              _0x575152("UNSHOW_PERPARE this.m_gameView.Round:", this.m_gameView.TimesOfFreeGame);
              this.m_gameView.SpinAckQue = this.m_gameView.UnshowSpinAck;
              this.m_gameView.FreeGamePlate = this.m_gameView.SpinAckQue.plateinfo.fgpackage.fgplateinfo;
              this.m_gameView.Win = 0x0;
              for (var _0x136c3d = 0x0; _0x136c3d < this.m_gameView.TimesOfFreeGame; _0x136c3d++) {
                var _0x2b2c61 = this.m_gameView.FreeGamePlate[_0x136c3d];
                this.m_gameView.Win = _0x7eb85f.plus(this.m_gameView.Win, _0x2b2c61.awardprize ? _0x2b2c61.awardprize : 0x0);
              }
              _0x12ab12.SetWinValue(this.m_gameView.Win);
              _0x12ab12.SetEnterFree(false);
              _0x575152("this.m_gameView.TimesOfFreeGame:", this.m_gameView.TimesOfFreeGame, "this.m_gameView.TotalTimesOfFreeGame:", this.m_gameView.TotalTimesOfFreeGame);
              this.m_gameView.MainGameNode.active = false;
              this.m_gameView.FreeGameUpNode.active = true;
              this.m_gameView.FreeGameNode.active = true;
              this.m_gameView.FgBackAni.getComponent(_0x51a26a).play('BGFX01_4start');
              this.m_gameView.TotalTimesOfFreeGame = this.m_gameView.SpinAckQue.plateinfo.fgpackage.times;
              this.m_gameView.FreeGameLeft.string = String(this.m_gameView.TotalTimesOfFreeGame - this.m_gameView.TimesOfFreeGame);
              this.m_gameView.FreeGameLeftS.string = String(this.m_gameView.TotalTimesOfFreeGame - this.m_gameView.TimesOfFreeGame);
              this.m_gameView.FlyMutiply = 0x0;
              for (var _0x3d7a2f = 0x0; _0x3d7a2f < this.m_gameView.TimesOfFreeGame; _0x3d7a2f++) {
                var _0x4d6da4 = this.m_gameView.FreeGamePlate[_0x3d7a2f].eventplate;
                for (var _0xc6d11e = 0x0; _0xc6d11e < _0x4d6da4.length; _0xc6d11e++) {
                  if (_0x4d6da4[_0xc6d11e] == _0x249d7b.SYMBOL_SWORD) {
                    this.m_gameView.FlyMutiply++;
                  }
                }
              }
              this.m_gameView.FreeGameMuti.string = 'x' + String(this.m_gameView.FlyMutiply);
              this.m_gameView.FreeGameMutiS.string = 'x' + String(this.m_gameView.FlyMutiply);
              _0x575152("this.m_gameView.FlyMutiply:", this.m_gameView.FlyMutiply);
              if (this.m_gameView.FlyMutiply > 0x0) {
                this.m_gameView.FreeGameMuti.node.active = true;
                this.m_gameView.FreeGameMutiS.node.active = true;
                this.m_gameView.DragonCutNode.getComponent(_0x51a26a).play("light");
              }
              this.m_gameView.CanScatterSound = false;
              _0x151d0c.SetVolume(this.m_gameView.BgmId, 0x0);
              this.m_gameView.FreeBgmId = _0x151d0c.Play(_0x249d7b.AudioClips.Bbc_fg_bgm, true);
            }
            this.m_gameView.OnRotation();
            _0xf22764.HasUnshow = false;
            _0xf8b970.HasUnshow = false;
            _0xb14087.ShowMessageBox(_0x42709d.StringKey.MSGBOX_UNSHOW_BACK, _0x42709d.StringKey.MSGBOX_TITLE_SYSTEM_INFO, function () {
              _0x446dc3.NextState(_0x3ed31a.SPIN);
            });
          } else {
            console.error("Info Error", _0xf8b970.UnshowStartRound, this.m_gameView.UnshowSpinAck);
          }
        };
        _0x1ccdc3.OnProcess = function () {};
        _0x1ccdc3.OnLeave = function () {};
        return _0x3c6898;
      }(_0x25838e)) || _0x59783c;
      var _0x164a88;
      var _0x47ba71;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, '2a3c6isaDdFq5K+05d2KVPh', 'WaitResState', undefined);
      var _0x3f9d36 = _0x2db653.ccclass;
      _0x164a88 = _0x3f9d36("WaitResState");
      var _0x58f6ab = _0x164a88(_0x47ba71 = function (_0x140dd5) {
        function _0x620f1d(_0x30280f) {
          var _0x359504;
          (_0x359504 = _0x140dd5.call(this) || this).m_gameView = null;
          _0x359504.m_gameView = _0x30280f;
          return _0x359504;
        }
        _0x59a013(_0x620f1d, _0x140dd5);
        var _0x2b9727 = _0x620f1d.prototype;
        _0x2b9727.OnEnter = function () {
          _0x411bc1("GameState WaitResState");
          this.m_gameView.InitExtra();
          if (_0x42709d.FreeSpinRemain > 0x0) {
            _0x446dc3.NextState(_0x3ed31a.CHECK_FREESPIN);
          } else {
            _0x446dc3.NextState(_0x3ed31a.IDLE);
          }
          _0x12ab12.ShowGameScene();
        };
        _0x2b9727.OnProcess = function (_0x30def9) {};
        _0x2b9727.OnLeave = function () {};
        return _0x620f1d;
      }(_0x25838e)) || _0x47ba71;
      var _0x26b8d1;
      var _0xff34b0;
      var _0x5551d6;
      var _0x97cc90;
      var _0xc287b0;
      var _0xc65a95;
      var _0x3b01de;
      var _0x38f98c;
      var _0x403f2c;
      var _0x269775;
      var _0x3c0ef6;
      var _0x305085;
      var _0x311df2;
      var _0x1b1b46;
      var _0x26cd71;
      var _0x110faf;
      var _0x28815d;
      var _0x2d0707;
      var _0x190540;
      var _0x411c77;
      var _0x4c7f57;
      var _0x1af516;
      var _0x483605;
      var _0x366aa4;
      var _0x4f3536;
      var _0x337096;
      var _0x176832;
      var _0x3afe6d;
      var _0x33d891;
      var _0x4c34ac;
      var _0x1b4cce;
      var _0x7a2de5;
      var _0x2d7c27;
      var _0x7f9ec1;
      var _0x4b82dd;
      var _0x28621e;
      var _0x3a64b3;
      var _0x26e88b;
      var _0x4e91e2;
      var _0x4a89fe;
      var _0x398edd;
      var _0x27169d;
      var _0x4f90ed;
      var _0x5220f7;
      var _0x33a8ee;
      var _0x4d0ec0;
      var _0x1acae4;
      var _0x51b26f;
      var _0x1a5d08;
      var _0x147031;
      var _0x3f77ac;
      var _0x22cfd8;
      var _0x1a6174;
      var _0x139120;
      var _0x10889b;
      var _0x3733f2;
      var _0x12fe10;
      var _0x26e7ce;
      var _0x24bf76;
      var _0xba02cf;
      var _0x5ba841;
      var _0x5ca963;
      var _0x5b090b;
      var _0x46375e;
      var _0x1865b1;
      var _0x35a16d;
      var _0x2530df;
      var _0x592230;
      var _0x35a42d;
      var _0x5c7246;
      var _0x2d2fb0;
      var _0x1866cf;
      var _0x3332c8;
      var _0x543775;
      var _0x2cd182;
      var _0x1367d8;
      var _0x11c9a1;
      var _0x3463dd;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "ad6c6EGiKVCoKxPIy6Y/Tyc", "GameView", undefined);
      var _0xe84a96 = {
        'EFFECT_VIEW': [_0x20545c(-0x238, 0x96), _0x20545c(-0x238, -0x1e)]
      };
      var _0x4ee135 = _0x2db653.ccclass;
      var _0x376bdb = _0x2db653.property;
      _0x26b8d1 = _0x376bdb(_0xcd8757);
      _0xff34b0 = _0x376bdb({
        'type': _0x51a26a,
        'tooltip': "直橫動畫"
      });
      _0x5551d6 = _0x376bdb({
        'type': _0x5acd0d,
        'tooltip': '轉輪'
      });
      _0x97cc90 = _0x376bdb({
        'type': _0x1abf1f,
        'tooltip': "event轉輪"
      });
      _0xc287b0 = _0x376bdb({
        'type': _0x26afee,
        'tooltip': "盤面表演"
      });
      _0xc65a95 = _0x376bdb({
        'type': _0x3c5cd2,
        'tooltip': "event盤面表演"
      });
      _0x3b01de = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "地bar根節點"
      });
      _0x38f98c = _0x376bdb(_0x5c5dd7);
      _0x403f2c = _0x376bdb({
        'type': _0x2b691f,
        'tooltip': "標題L"
      });
      _0x269775 = _0x376bdb({
        'type': _0x2b691f,
        'tooltip': "標題L"
      });
      _0x3c0ef6 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "MainGame"
      });
      _0x305085 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': 'FreeGame'
      });
      _0x311df2 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "FreeGame up"
      });
      _0x1b1b46 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "關門動畫"
      });
      _0x26cd71 = _0x376bdb({
        'type': _0x3b21f3,
        'tooltip': "FreeGame動畫 免費次數"
      });
      _0x110faf = _0x376bdb({
        'type': _0x3b21f3,
        'tooltip': "FreeGame 剩餘次數"
      });
      _0x28815d = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "FreeGame 剩餘次數 直版節點"
      });
      _0x2d0707 = _0x376bdb({
        'type': _0x3b21f3,
        'tooltip': "FreeGame 剩餘次數 直版"
      });
      _0x190540 = _0x376bdb({
        'type': _0x3b21f3,
        'tooltip': "FreeGame 倍率"
      });
      _0x411c77 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "FreeGame 倍率 NODE 直版"
      });
      _0x4c7f57 = _0x376bdb({
        'type': _0x3b21f3,
        'tooltip': "FreeGame 倍率 直版"
      });
      _0x1af516 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "火球節點"
      });
      _0x483605 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "龍頭鍘動畫節點"
      });
      _0x366aa4 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "FG 結算動畫"
      });
      _0x4f3536 = _0x376bdb({
        'type': _0x3b21f3,
        'tooltip': "FreeGame 總分"
      });
      _0x337096 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "FreeGame 總分倍率 NODE"
      });
      _0x176832 = _0x376bdb({
        'type': _0x3b21f3,
        'tooltip': "FreeGame 總分倍率"
      });
      _0x3afe6d = _0x376bdb({
        'type': _0x4afa6c,
        'tooltip': "結算 下雨粒子"
      });
      _0x33d891 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "大獎海波動畫"
      });
      _0x4c34ac = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "near win effect"
      });
      _0x1b4cce = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "免費遊戲多語系(直)"
      });
      _0x7a2de5 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "免費遊戲多語系(橫)"
      });
      _0x2d7c27 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "Bigwin node"
      });
      _0x7f9ec1 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': '免費'
      });
      _0x4b82dd = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': '遊戲'
      });
      _0x28621e = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': '次'
      });
      _0x3a64b3 = _0x376bdb({
        'type': _0xe077c7,
        'tooltip': "FG BG ANI"
      });
      _0x26e88b = _0x376bdb({
        'type': _0x142d65,
        'tooltip': "標題合圖"
      });
      _0x3463dd = function (_0x547711) {
        function _0xfec245() {
          var _0x47e45a;
          var _0x2eca23 = arguments.length;
          var _0x4ef781 = new Array(_0x2eca23);
          for (var _0x47f8c6 = 0x0; _0x47f8c6 < _0x2eca23; _0x47f8c6++) {
            _0x4ef781[_0x47f8c6] = arguments[_0x47f8c6];
          }
          _0x47e45a = _0x547711.call.apply(_0x547711, [this].concat(_0x4ef781)) || this;
          _0x3837b4(_0x47e45a, "m_spinToggleContainer", _0x4a89fe, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_mainGameAnim", _0x398edd, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_slotReels", _0x27169d, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_eventSlotReels", _0x4f90ed, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_effectPlate', _0x5220f7, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_eventEffectPlate", _0x33a8ee, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_barNode', _0x4d0ec0, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_plateSpineBtn", _0x1acae4, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_titleSpriteL', _0x51b26f, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_titleSpriteS", _0x1a5d08, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_mainGameNode', _0x147031, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_freeGameNode', _0x3f77ac, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_freeGameUpNode", _0x22cfd8, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_goToFreeAniNode", _0x1a6174, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_freeGameAniTotalTimes", _0x139120, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_freeGameLeft', _0x10889b, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_freeGameLeftNodeS', _0x3733f2, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_freeGameLeftS", _0x12fe10, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_freeGameMuti", _0x26e7ce, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_freeGameMutiNodeS', _0x24bf76, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_freeGameMutiS", _0xba02cf, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_fireBall", _0x5ba841, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_dragonCutNode", _0x5ca963, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_freeGameSettlement', _0x5b090b, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_freeGameTotalWin", _0x46375e, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_freeGameTotalWinMutiNode", _0x1865b1, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_freeGameTotalWinMuti", _0x35a16d, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_settlementRain", _0x2530df, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_bigWaveComingAni', _0x592230, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_nearWinEffect", _0x35a42d, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_freeSpinLocaleS', _0x5c7246, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_freeSpinLocaleH", _0x2d2fb0, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_bigWinNode", _0x1866cf, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_fgFreeTxt", _0x3332c8, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, 'm_fgGameTxt', _0x543775, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_fgTimeTxt", _0x2cd182, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_fgBackAni", _0x1367d8, _0x406265(_0x47e45a));
          _0x3837b4(_0x47e45a, "m_titleSpriteAtlas", _0x11c9a1, _0x406265(_0x47e45a));
          _0x47e45a.m_spinAckQue = null;
          _0x47e45a.m_unshowSpinAck = null;
          _0x47e45a.m_isLandscape = false;
          _0x47e45a.m_autoplayInfos = null;
          _0x47e45a.m_isHardStop = false;
          _0x47e45a.m_isFirstPlateSpin = true;
          _0x47e45a.m_effectView = undefined;
          _0x47e45a.m_canSpaceStop = false;
          _0x47e45a.m_canPlateStop = false;
          _0x47e45a.m_processTick = 0x0;
          _0x47e45a.m_lastClickTime = undefined;
          _0x47e45a.m_bgmId = null;
          _0x47e45a.m_ratationLock = false;
          _0x47e45a.m_fgStateEndAni = null;
          _0x47e45a.m_fgStateEndCallFun = null;
          _0x47e45a.m_nearWinCount = 0x0;
          _0x47e45a.m_mainWinForFree = 0x0;
          _0x47e45a.m_timesOfFreeGame = 0x0;
          _0x47e45a.m_totalTimesOfFreeGame = 0x0;
          _0x47e45a.m_isFreeGame = false;
          _0x47e45a.m_haveSword = false;
          _0x47e45a.m_swordGetLimit = 0x0;
          _0x47e45a.m_awardList = [];
          _0x47e45a.m_swordVec = [];
          _0x47e45a.m_freeGamePlate = new Array();
          _0x47e45a.m_isNearWin = false;
          _0x47e45a.m_isFirstInFree = false;
          _0x47e45a.m_needFlyFireBall = [false, false, false, false, false];
          _0x47e45a.m_flyCount = 0x0;
          _0x47e45a.m_flyMutiply = 0x0;
          _0x47e45a.m_freeBgmId = null;
          _0x47e45a.m_win = 0x0;
          _0x47e45a.m_canScatterSound = true;
          _0x47e45a.m_nearWinGetVec = [];
          _0x47e45a.m_scatterSoundPath = [null, null, null, null, null];
          _0x47e45a.m_swordAndNotToAni = [false, false, false, false, false];
          _0x47e45a.m_isManualHardStop = false;
          _0x47e45a.m_isAlreadyManualHardStop = false;
          _0x47e45a.m_isFreeAutoSpin = false;
          _0x47e45a.m_realFeaturesSpinAck = null;
          _0x47e45a.m_oldRealPlate = null;
          _0x47e45a.m_oldEventPlate = null;
          return _0x47e45a;
        }
        _0x59a013(_0xfec245, _0x547711);
        var _0x4dd906 = _0xfec245.prototype;
        _0x4dd906.onLoad = function () {
          var _0xf6fa5e = this;
          _0x837965.util.Long = _0x373f00;
          _0x837965.configure();
          _0x5a8c8f();
          _0x42709d.CURRENCY_CHANGE_ENABLE = true;
          if (_0x42709d.APP) {
            Number(_0x42709d.APP.GetAID());
            _0x42709d.APP.GetApiID();
          }
          this.m_slotReels.Init(this);
          this.m_slotReels.SetPlayStopSoundFunction(function (_0x545d97) {
            _0xf6fa5e.StopSpinFunc(_0x545d97);
          });
          this.m_eventSlotReels.Init(this);
          this.m_eventSlotReels.SetPlayStopSoundFunction(function (_0x2313e1) {
            _0xf6fa5e.StopEventSpinFunc(_0x2313e1);
          });
          this.m_effectPlate.Init(this);
          this.m_eventEffectPlate.Init(this);
          this.OnRotation();
          _0x7eb85f.AddOnRotationCb(function () {
            _0xf6fa5e.OnRotation();
          });
          window.onerror = function (_0x4375a0, _0x5216c9, _0x5c7746, _0x42caee, _0x494c7b) {
            var _0x52cbd6 = '-1';
            var _0x5ca014 = 0x0;
            if (_0x42709d.APP) {
              _0x52cbd6 = _0x42709d.APP.GetAID();
              _0x5ca014 = Number(_0x42709d.APP.GetApiID());
            }
            var _0x2d6159 = _0x1b0819.FormErrorParams(_0x52cbd6, _0x5ca014, Number(_0x42709d.NOW_GAME_ID), _0x249d7b.Ver, _0x494c7b);
            _0x1b0819.SendErrorLog(_0x2d6159);
          };
          _0x42709d.IsInMG = function () {
            return !_0xf6fa5e.m_isFreeGame;
          };
        };
        _0x4dd906.start = function () {
          var _0x3db712 = this;
          _0x464520.on(_0x8d71bd.EventType.KEY_DOWN, function (_0x500fef) {
            switch (_0x500fef.keyCode) {
              case _0x3dbb38.SPACE:
                _0x12ab12.SendSpinLog();
                if (!_0xb14087.IsShow()) {
                  if (_0x12ab12 && !_0xf22764.IsShowBackpack()) {
                    if (_0x12ab12.BtnState != _0x33fc15.IDLE || _0x12ab12.IsAutoSpin) {
                      if (_0x3db712.m_canSpaceStop) {
                        _0x3db712.m_canSpaceStop = false;
                        _0x3db712.ClickStop();
                      }
                    } else {
                      _0x3db712.ClickSpin();
                    }
                  }
                }
            }
          });
          _0x464520.on(_0x8d71bd.EventType.KEY_UP, function (_0x27dbdd) {
            switch (_0x27dbdd.keyCode) {
              case _0x3dbb38.SPACE:
                _0xb14087.IsShow();
            }
          });
          this.m_slotReels.Init(this);
          this.m_slotReels.SetPlayStopSoundFunction(function (_0x4103d0) {
            _0x3db712.StopSpinFunc(_0x4103d0);
          });
          this.m_eventSlotReels.Init(this);
          this.m_eventSlotReels.SetPlayStopSoundFunction(function (_0x584115) {
            _0x3db712.StopEventSpinFunc(_0x584115);
          });
          this.m_effectPlate.Init(this);
          this.m_eventEffectPlate.Init(this);
          _0x7eb85f.TriggerFeaturesShow = function () {
            if (_0x446dc3.Current() == _0x3ed31a.IDLE) {
              _0xf22764.AutoShowFeatures();
            }
          };
          this.InitStates();
        };
        _0x4dd906.InitStates = function () {
          var _0x29c147 = {
            [_0x3ed31a.WAIT_RES]: new _0x58f6ab(this),
            [_0x1bcb3d.UNSHOW_PREPARE]: new _0x2a55d5(this),
            [_0x3ed31a.IDLE]: new _0x3b4740(this),
            [_0x3ed31a.SPIN]: new _0x36659e(this),
            [_0x1bcb3d.SWORD_SHOW]: new _0x3e3988(this),
            [_0x1bcb3d.AWARD]: new _0xa793d9(this),
            [_0x1bcb3d.ROUND_SHOW_END]: new _0x1a647a(this),
            [_0x1bcb3d.ENTER_FREE]: new _0x2fd809(this),
            [_0x1bcb3d.LEAVE_FREE]: new _0x2450bf(this),
            [_0x3ed31a.CHECK_STATE]: new _0x1dce2d(this),
            [_0x1bcb3d.ROUND_END]: new _0x4871c2(this)
          };
          _0x446dc3.Init(_0x29c147);
          _0x446dc3.NextState(_0x3ed31a.LOGIN);
          _0xf8b970.SetGameCb(this);
        };
        _0x4dd906.SettingBottomBar = function () {
          var _0x5b6c2e = this;
          _0x12ab12.VerString = 'v_' + _0x42709d.VERSION.replace("ver.", '') + '_' + _0x249d7b.Ver;
          _0x12ab12.IsSendBetChange = true;
          _0x12ab12.SetTouchEvet(function (_0x32c601) {
            _0x5b6c2e.BarTouchCb(_0x32c601);
          });
          _0x12ab12.SetWinValue(0x0);
          _0x12ab12.SetSpinState(_0x33fc15.IDLE);
          this.m_effectView = new _0x41dea1();
          this.m_effectView.SetOdds(_0xfec245.ODDS);
          this.m_effectView.SetWinEffectFiles(_0xfec245.WIN_EFFECT_FILES);
          this.m_effectView.SetEffectLevels(_0xfec245.WIN_EFFECT_LEVEL);
          this.m_effectView.SetSoundNameByOdds(_0xfec245.WIN_EFFECT_SOUND_NAME);
          this.m_effectView.SetEffectTimes(_0xfec245.WIN_EFFECT_TIMES);
          _0x12ab12.View.addChild(this.m_effectView);
          _0x7eb85f.SetZIndex(this.m_effectView, 0xa);
          this.m_effectView.active = true;
          this.m_effectView.setPosition(_0xe84a96.EFFECT_VIEW[Number(this.m_isLandscape)]);
          _0x12ab12.HaveStopSound(false);
          _0x12ab12.SetUseEftWinValue("Font/freeGameOddsNumber", [_0x20545c(0x0, 0x190), _0x20545c(0x0, 0xc8)], 0x23, 0x2d);
          this.m_effectView.SetAwardBoardFile(_0xfec245.AWARD_BOARD_FILE);
          _0x12ab12.SetAutoplayConfirmCb(function (_0x545da6) {
            _0x5d0c3e.Dispatch(_0x214f9d.SpinReqNotify);
            _0x5b6c2e.m_autoplayInfos = JSON.parse(_0x545da6);
          });
          _0x12ab12.SetGameLogo([this.m_titleSpriteS.node]);
          _0x12ab12.SetFollowNode(this.node, [_0x20545c(0x0, -0x14), _0x20545c(0x0, 0x0)]);
          _0x30b121.AddCb({
            'StopAutoCb': function () {
              _0x12ab12.ShowAutoPlayState(false);
            }
          });
          this.m_bigWinNode.getChildByName("Image_2").setScale(_0x249d7b.BIG_WIN_MASK_SCALE[String(this.m_isLandscape)]);
          this.m_goToFreeAniNode.removeFromParent();
          _0x12ab12.View.parent.addChild(this.m_goToFreeAniNode);
          this.m_plateSpineBtn.node.on(_0xe077c7.EventType.TOUCH_END, function (_0x59f480) {
            _0x12ab12.SendSpinLog();
            if (!_0x12ab12.IsAutoSpin) {
              var _0x2a4dca = false;
              var _0x353018 = Date.now();
              if (null != _0x5b6c2e.m_lastClickTime) {
                if (_0x353018 - _0x5b6c2e.m_lastClickTime > 0x3e8) {
                  _0x2a4dca = true;
                }
              } else {
                _0x5b6c2e.m_lastClickTime = _0x353018;
                _0x2a4dca = true;
              }
              if (!_0x2a4dca) {
                return;
              }
              _0x5b6c2e.BarTouchCb(_0x59f480);
            }
          });
          _0x7eb85f.CloseIntroLoading.push(function () {
            if (_0xf8b970.HasUnshow) {
              _0x446dc3.NextState(_0x1bcb3d.UNSHOW_PREPARE);
            }
            _0x4a8f0d.StartAutoShow();
          });
        };
        _0x4dd906.BarTouchCb = function (_0x565e0c) {
          var _0x53bf31 = this;
          switch (_0x565e0c.target.name) {
            case this.m_plateSpineBtn.node.name:
              if (_0x446dc3.Current() != _0x3ed31a.IDLE || _0x12ab12.IsAutoSpin) {
                if (this.m_canPlateStop) {
                  this.m_canPlateStop = false;
                  this.ClickStop();
                }
              } else {
                if (this.m_isFirstPlateSpin) {
                  this.m_isFirstPlateSpin = false;
                  var _0x16f6d5 = {
                    "contextKey": _0x42709d.StringKey.MSGBOX_TOUCHPANEL_SPIN,
                    titleKey: _0x42709d.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                    "showCancelBtn": false,
                    showConfirmBtn: true,
                    "showCloseBtn": true,
                    "confirmCB": function () {
                      _0x53bf31.ClickSpin();
                    }
                  };
                  _0xb14087.PushMessageBoxSetting(_0x16f6d5);
                } else {
                  this.ClickSpin();
                }
              }
              break;
            case _0x42bcc1.BTN_SPIN:
              _0x411bc1('spin~~~');
              this.ClickSpin();
              break;
            case _0x42bcc1.BTN_SPINSTOP:
              this.ClickStop();
              break;
            case _0x42bcc1.BTN_WISEAUTOPLAY:
              if (_0x12ab12.IsAutoSpin) {
                _0x12ab12.SetSpinState(_0x33fc15.CLICK_CANCEL);
              }
              _0x12ab12.ShowAutoplaySettingView(_0x7eb85f.strip(_0x12ab12.GetChips()));
              break;
            case _0x42bcc1.BTN_AUTOSTOP_C:
            case _0x42bcc1.BTN_AUTOSTOP:
              _0x12ab12.ShowAutoPlayState(false);
              _0x12ab12.SetSpinState(_0x33fc15.CLICK_CANCEL);
          }
        };
        _0x4dd906.IsBackpackPass = function () {
          return _0x11f2c3.IsBackpackPass();
        };
        _0x4dd906.ClickSpin = function () {
          if (!_0xf22764.IsNowInDemoMenu && _0x446dc3.Current() == _0x3ed31a.IDLE && !_0x12ab12.IsAutoSpin) {
            if ((_0x12ab12.GetChips() >= _0x7eb85f.strip(this.GetNowBetValue()) || this.m_isFreeGame || _0x12ab12.IsFreeSpin) && this.IsBackpackPass() && !_0x36783f.IsOpen()) {
              _0x12ab12.SetSpinState(_0x33fc15.CLICK_SPIN);
              _0x5d0c3e.Dispatch(_0x214f9d.SpinReqNotify);
              _0x151d0c.Play(_0x249d7b.AudioClips.Spin_click, false, null, 0.5);
            } else {
              if (this.IsBackpackPass() && !_0x36783f.IsOpen()) {
                var _0x149943 = _0x12ab12.GetBetList();
                if (_0x7eb85f.strip(this.GetNowBetValue()) == _0x7eb85f.strip(_0x149943[0x0]) || _0x12ab12.GetChips() < _0x7eb85f.strip(_0x149943[0x0])) {
                  _0xb14087.ShowMessageBox(_0x42709d.StringKey.MSGBOX_MONEY_NOT_ENOUGH);
                } else {
                  _0xb14087.ShowMessageBox(_0x42709d.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET);
                }
              } else {
                _0x12ab12.SetSpinState(_0x33fc15.IDLE);
                _0x446dc3.NextState(_0x3ed31a.IDLE);
              }
            }
          }
        };
        _0x4dd906.ClickStop = function () {
          if (_0x446dc3.Current() == _0x3ed31a.SPIN) {
            if (_0x12ab12.IsAutoSpin) {
              if (_0x12ab12.IsAutoSpin && !this.m_isHardStop) {
                this.m_slotReels.SetIsClickStopBtn();
                this.m_eventSlotReels.SetIsClickStopBtn();
                _0x12ab12.SetSpinState(_0x33fc15.CLICK_STOP_IN_AUTOPLAY);
              }
            } else {
              this.m_slotReels.SetIsClickStopBtn();
              this.m_eventSlotReels.SetIsClickStopBtn();
              _0x12ab12.SetSpinState(_0x33fc15.CLICK_STOP);
            }
            this.m_isManualHardStop = true;
            this.m_isAlreadyManualHardStop = true;
          } else if (_0x446dc3.Current() == _0x1bcb3d.ROUND_END && _0x12ab12.IsAutoSpin) {
            this.m_processTick = 0x0;
            _0x12ab12.SetSpinState(_0x33fc15.CLICK_STOP_IN_AUTOPLAY);
          } else if (_0x446dc3.Current() == _0x1bcb3d.AWARD && _0x12ab12.IsAutoSpin) {
            if (this.m_fgStateEndAni) {
              this.m_fgStateEndAni.stop();
              this.m_fgStateEndAni = null;
              _0x3c1ce8(this.node).then(this.m_fgStateEndCallFun);
            }
            _0x12ab12.SetSpinState(_0x33fc15.CLICK_STOP_IN_AUTOPLAY);
          }
        };
        _0x4dd906.GetNowBetValue = function () {
          return _0x12ab12.GetNowBetValue();
        };
        _0x4dd906.OnRotation = function () {
          if (!this.m_ratationLock) {
            var _0x4ea669 = _0x2147f2.windowSize;
            this.m_isLandscape = _0x4ea669.width > _0x4ea669.height;
            var _0xa221bb = this.node.getComponent(_0x51a26a);
            if (this.m_isLandscape) {
              if (_0x4ea669.width / _0x4ea669.height <= 1.775) {
                _0x13b8b5.setDesignResolutionSize(0x470, 0x280, _0xb6c15a.FIXED_WIDTH);
              } else {
                _0x13b8b5.setDesignResolutionSize(0x470, 0x280, _0xb6c15a.FIXED_HEIGHT);
              }
              this.m_mainGameAnim.play("MainGame_L");
              _0xa221bb.play("GameView_L");
              this.m_goToFreeAniNode.scale = _0x20545c(0x1, 0x1, 0x1);
            } else {
              if (_0x4ea669.height / _0x4ea669.width <= 1.775) {
                _0x13b8b5.setDesignResolutionSize(0x280, 0x470, _0xb6c15a.FIXED_HEIGHT);
              } else {
                _0x13b8b5.setDesignResolutionSize(0x280, 0x470, _0xb6c15a.FIXED_WIDTH);
              }
              this.m_mainGameAnim.play("MainGame_S");
              _0xa221bb.play('GameView_S');
              this.m_goToFreeAniNode.scale = _0x20545c(0.58, 0.58, 0x1);
            }
            this.m_titleSpriteS.node.active = !this.m_isLandscape;
            if (this.m_isFreeGame) {
              this.m_freeGameLeftNodeS.active = !this.m_isLandscape;
              this.m_freeGameMutiNodeS.active = !this.m_isLandscape;
            }
            if (this.m_effectView) {
              this.m_effectView.setPosition(_0x20545c(_0xe84a96.EFFECT_VIEW[Number(this.m_isLandscape)].x, _0xe84a96.EFFECT_VIEW[Number(this.m_isLandscape)].y));
            }
            if (_0x12ab12) {
              _0x12ab12.OnRotation(this.m_isLandscape, function () {}, true);
            }
            if (_0xf22764) {
              _0xf22764.OnRotation(this.m_isLandscape, true);
            }
            _0xb14087.OnRotate(this.m_isLandscape);
            if (this.m_isLandscape) {
              this.m_goToFreeAniNode.setPosition(_0x20545c(0x238, 0x140));
            } else {
              var _0x5b0c67 = this.node.position;
              var _0x4d7978 = _0x5b0c67.x;
              var _0x4b926f = _0x5b0c67.y;
              this.m_goToFreeAniNode.setPosition(_0x4d7978 + 0x140, _0x4b926f + 0x1f8);
            }
          }
        };
        _0x4dd906.StopSpinFunc = function (_0x457c4f) {
          if (this.m_spinAckQue) {
            if (!this.m_eventSlotReels.IsReelStop(this.m_nearWinCount)) {
              return;
            }
            if (this.m_isHardStop && 0x0 != _0x457c4f) {
              return;
            }
            if (this.m_isManualHardStop) {
              return void (this.m_isAlreadyManualHardStop && (this.m_isAlreadyManualHardStop = false, _0x151d0c.Play(_0x249d7b.AudioClips.Reel_Stop)));
            }
            _0x151d0c.Play(_0x249d7b.AudioClips.Reel_Stop);
          }
        };
        _0x4dd906.StopEventSpinFunc = function (_0x220b3a) {
          if (this.m_canScatterSound) {
            if (this.ConvertEventPlate(this.m_spinAckQue.plateinfo.eventplate)[_0x220b3a][0x0] != _0x249d7b.SYMBOL_DRAGON) {
              this.m_canScatterSound = false;
            }
            if (this.m_spinAckQue && this.m_canScatterSound) {
              _0x151d0c.Play(this.m_scatterSoundPath[_0x220b3a], false, null, 0x1);
            }
          }
        };
        _0x4dd906.SetTxt = function () {
          _0x12ab12.SetAutoPlaySettingPanelFreeGameString(_0x42709d.StringKey.AUTO_PLAY_PANEL_ENTER_FREEGAME);
          var _0x1b6740 = _0xdc5a06.GetGameAtlas();
          if (this.m_titleSpriteAtlas) {
            this.m_titleSpriteL.spriteFrame = this.m_titleSpriteAtlas.getSpriteFrame("logo_" + _0xdc5a06.CurrLang);
            this.m_titleSpriteS.spriteFrame = this.m_titleSpriteAtlas.getSpriteFrame('logo_' + _0xdc5a06.CurrLang);
          }
          this.m_freeSpinLocaleS.getComponent(_0x2b691f).spriteFrame = _0x1b6740.getSpriteFrame('img_bg_SpinsLeft');
          this.m_freeSpinLocaleH.getComponent(_0x2b691f).spriteFrame = _0x1b6740.getSpriteFrame('img_bg_SpinsLeft');
          this.m_fgFreeTxt.getComponent(_0x2b691f).spriteFrame = _0x1b6740.getSpriteFrame("free");
          this.m_fgGameTxt.getComponent(_0x2b691f).spriteFrame = _0x1b6740.getSpriteFrame("game");
          this.m_fgTimeTxt.getComponent(_0x2b691f).spriteFrame = _0x1b6740.getSpriteFrame('spins');
        };
        _0x4dd906.update = function (_0x136031) {
          _0x446dc3.Tick(_0x136031);
          if (null != this.m_effectView) {
            this.m_effectView.OnUpdate(_0x136031);
          }
        };
        _0x4dd906.ChangeDemoPlateByRatio = function () {
          this.m_realFeaturesSpinAck = JSON.parse(JSON.stringify(_0x249d7b.FeaturesSpinAck));
          var _0x19f6a8 = _0x12ab12.GetBetList()[0x5];
          for (var _0x15f146 = 0x0; _0x15f146 < this.m_realFeaturesSpinAck.length; _0x15f146++) {
            var _0x56410a = this.m_realFeaturesSpinAck[_0x15f146];
            if (_0x56410a.totalwin) {
              _0x56410a.totalwin = _0x7eb85f.times(_0x56410a.totalwin, _0x19f6a8);
            }
            if (_0x56410a.plateinfo) {
              var _0x3f5724 = _0x56410a.plateinfo;
              _0x3f5724.mainwin = _0x7eb85f.times(_0x3f5724.mainwin, _0x19f6a8);
              _0x3f5724.fgwin = _0x7eb85f.times(_0x3f5724.fgwin, _0x19f6a8);
              if (_0x3f5724.fgpackage && (_0x3f5724.fgpackage.totalprize && (_0x3f5724.fgpackage.totalprize = _0x7eb85f.times(_0x3f5724.fgpackage.totalprize, _0x19f6a8)), _0x3f5724.fgpackage.fgplateinfo)) {
                var _0x77065f = _0x3f5724.fgpackage.fgplateinfo;
                for (var _0x174e4a = 0x0; _0x174e4a < _0x77065f.length; _0x174e4a++) {
                  if (_0x77065f[_0x174e4a].awardprize) {
                    _0x77065f[_0x174e4a].awardprize = _0x7eb85f.times(_0x77065f[_0x174e4a].awardprize, _0x19f6a8);
                  }
                }
              }
            }
          }
        };
        _0x4dd906.ClearAll = function () {
          _0x12ab12.SkipEftWinValue();
          this.m_effectView.SkipEffect();
          this.m_effectView.StopAnimation(function () {});
          this.m_effectView.SkipEffectSound();
          this.m_effectPlate.HideSymbolEffect();
          this.m_effectPlate.StopSingleLineEffect();
          this.m_eventEffectPlate.HideSword();
          this.m_eventEffectPlate.HideDragon();
          this.m_effectPlate.StopSingleLineEffect();
          this.m_isNearWin = false;
          this.m_isManualHardStop = false;
          this.m_nearWinCount = -0x1;
        };
        _0x4dd906.ConvertSpinAck = function (_0x481d17) {
          var _0xdef464 = _0x481d17.PlateInfo;
          var _0x270a0d = [];
          if (_0xdef464.BaoPlateT) {
            for (var _0x433963 = 0x0; _0x433963 < _0xdef464.BaoPlateT.length; _0x433963++) {
              var _0x59873e = _0xdef464.BaoPlateT[_0x433963];
              var _0x98a622 = [];
              for (var _0x46c8e3 = 0x0; _0x46c8e3 < _0x59873e.Row.length; _0x46c8e3++) {
                _0x98a622.push(_0x59873e.Row[_0x46c8e3]);
              }
              _0x270a0d.push(_0x98a622);
            }
          }
          var _0x3e677 = [];
          if (_0xdef464.BaoEventPlate) {
            var _0x17ae9c = _0xdef464.BaoEventPlate;
            for (var _0x18e71f = 0x0; _0x18e71f < _0x17ae9c.length; _0x18e71f++) {
              _0x3e677.push(_0x17ae9c[_0x18e71f]);
            }
          }
          var _0x209891 = [];
          if (_0xdef464.AwardInfos) {
            for (var _0x3225bd = 0x0; _0x3225bd < _0xdef464.AwardInfos.length; _0x3225bd++) {
              var _0x15b12f = _0xdef464.AwardInfos[_0x3225bd];
              _0x209891.push({
                'awardlink': null == _0x15b12f.AwardLink ? 0x0 : _0x15b12f.AwardLink,
                'awardsymbol': null == _0x15b12f.AwardSymbol ? 0x0 : _0x15b12f.AwardSymbol,
                'lineindex': null == _0x15b12f.LineIndex ? 0x0 : _0x15b12f.LineIndex,
                'haswild': null != _0x15b12f.HasWild && _0x15b12f.HasWild,
                'odds': null == _0x15b12f.Odds ? 0x0 : _0x15b12f.Odds
              });
            }
          }
          var _0x2d75b3 = new _0x5abf76();
          if (_0xdef464.FreeGamePackage) {
            var _0x504505 = _0xdef464.FreeGamePackage;
            var _0x53d47e = [];
            if (_0x504505.FreeGamePlateInfo) {
              for (var _0x1179d7 = 0x0; _0x1179d7 < _0x504505.FreeGamePlateInfo.length; _0x1179d7++) {
                var _0x2febab = _0x504505.FreeGamePlateInfo[_0x1179d7];
                var _0x27baaf = [];
                if (_0x2febab.AwardInfos) {
                  for (var _0x3a5a59 = 0x0; _0x3a5a59 < _0x2febab.AwardInfos.length; _0x3a5a59++) {
                    var _0x3d6c22 = _0x2febab.AwardInfos[_0x3a5a59];
                    _0x27baaf.push({
                      'awardlink': null == _0x3d6c22.AwardLink ? 0x0 : _0x3d6c22.AwardLink,
                      'awardsymbol': null == _0x3d6c22.AwardSymbol ? 0x0 : _0x3d6c22.AwardSymbol,
                      'lineindex': null == _0x3d6c22.LineIndex ? 0x0 : _0x3d6c22.LineIndex,
                      'haswild': null != _0x3d6c22.HasWild && _0x3d6c22.HasWild,
                      'odds': null == _0x3d6c22.Odds ? 0x0 : _0x3d6c22.Odds
                    });
                  }
                }
                var _0x26c3b9 = [];
                if (_0x2febab.EventPlate) {
                  var _0x43050e = _0x2febab.EventPlate;
                  for (var _0x49d311 = 0x0; _0x49d311 < _0x43050e.length; _0x49d311++) {
                    _0x26c3b9.push(_0x43050e[_0x49d311]);
                  }
                }
                var _0xe7660f = [];
                if (_0x2febab.PlateT) {
                  for (var _0x416181 = 0x0; _0x416181 < _0x2febab.PlateT.length; _0x416181++) {
                    var _0xa70aaf = _0x2febab.PlateT[_0x416181];
                    var _0x311c13 = [];
                    for (var _0x3d0521 = 0x0; _0x3d0521 < _0xa70aaf.Row.length; _0x3d0521++) {
                      _0x311c13.push(_0xa70aaf.Row[_0x3d0521]);
                    }
                    _0xe7660f.push(_0x311c13);
                  }
                }
                _0x53d47e.push({
                  'awardinfos': _0x27baaf,
                  'awardprize': null == _0x2febab.AwardPrize ? 0x0 : _0x2febab.AwardPrize,
                  'eventplate': _0x26c3b9,
                  'fullwildcount': null == _0x2febab.FullWildCount ? 0x0 : _0x2febab.FullWildCount,
                  'platet': _0xe7660f
                });
              }
            }
            _0x2d75b3.fgplateinfo = _0x53d47e.length > 0x0 ? _0x53d47e : null;
            _0x2d75b3.totalprize = null == _0x504505.TotalPrize ? 0x0 : _0x504505.TotalPrize;
            _0x2d75b3.totalfullwildcount = null == _0x504505.TotalFullWildCount ? 0x0 : _0x504505.TotalFullWildCount;
            _0x2d75b3.times = null == _0x504505.Times ? 0x0 : _0x504505.Times;
            _0x2d75b3.multix = null == _0x504505.MultiX ? 0x0 : _0x504505.MultiX;
          }
          var _0x251d39 = {
            'platet': _0x270a0d,
            'eventplate': _0x3e677,
            'awardinfos': _0x209891,
            'fgpackage': _0x2d75b3,
            'mainwin': null == _0xdef464.MainWin ? 0x0 : _0xdef464.MainWin,
            'scatters': null == _0xdef464.Scatters ? 0x0 : _0xdef464.Scatters,
            'totalodds': null == _0xdef464.TotalOdds ? 0x0 : _0xdef464.TotalOdds,
            'totalwild': null == _0xdef464.TotalWild ? 0x0 : _0xdef464.TotalWild,
            'fgwin': null == _0xdef464.FGWin ? 0x0 : _0xdef464.FGWin,
            'nowmoney': null == _0xdef464.NowMoney ? 0x0 : _0xdef464.NowMoney,
            'showindex': null == _0x481d17.ShowIndex ? '' : _0x481d17.ShowIndex
          };
          return {
            'info': {
              'acktype': _0x481d17.AckType ? _0x481d17.AckType : 0x0,
              'plateinfo': _0x251d39,
              'totalwin': _0x481d17.TotalWin ? _0x481d17.TotalWin : 0x0
            },
            'missionReward': 0x0,
            'fullJpWin': 0x0,
            'freeremain': 0x0
          };
        };
        _0x4dd906.OnCommand = function (_0x3e324, _0x84a260) {
          var _0x2d47 = this;
          switch (_0x3e324) {
            case _0x42709d.AckType.info:
              this.SettingBottomBar();
              _0x12ab12.SetWinValue(0x0);
              _0x12ab12.SetSpinState(_0x33fc15.IDLE);
              _0x12ab12.AutoPlayPanelInit();
              _0xf22764.FeaturesInit(["features/left/spriteFrame", "features/right/spriteFrame"], [_0x249d7b.StringKey.BBC_FEATURES_LEFT, _0x249d7b.StringKey.BBC_FEATURES_RIGHT], 0x3, this.m_titleSpriteAtlas);
              var _0x32836c = _0xdc5a06.GetGameAtlas();
              _0xf22764.SetFeatruesDesc([_0x32836c.getSpriteFrame("txt1"), _0x32836c.getSpriteFrame("txt2")]);
              _0xf22764.CheckFirstFeatures();
              this.ChangeDemoPlateByRatio();
              _0x12ab12.FeaturesDemoInit(function (_0x1a3512) {
                _0x3c1ce8(_0x2d47.node).call(function () {
                  _0x12ab12.SetSpinState(_0x33fc15.CLICK_SPIN);
                  _0x446dc3.NextState(_0x3ed31a.SPIN);
                }).delay(0.5).call(function () {
                  var _0x30b45c = new _0x3ff7a7();
                  _0x30b45c.info = _0x2d47.m_realFeaturesSpinAck[_0x1a3512];
                  _0x2d47.OnRecvSpinAck(_0x30b45c);
                }).start();
              }, this.m_realFeaturesSpinAck.length, 0x5, null);
              this.SetTxt();
              _0x12ab12.SetTxt();
              _0xf22764.SetTxt();
              this.OnRotation();
              _0x12ab12.SetAutoPlayPanelTxt();
              _0xf22764.SetCanAutoShowRankboardUI();
              var _0x2afcdd = function (_0x59904f) {
                if (_0x249d7b.AudioFilePath.hasOwnProperty(_0x59904f)) {
                  var _0x4d1f0f = _0x249d7b.AudioFilePath[_0x59904f];
                  _0x411bc1("loadAudioAsset: ", _0x59904f, _0x4d1f0f);
                  _0x2d47.Load(_0x4d1f0f, function (_0xa50a2d) {
                    _0x249d7b.AudioClips[_0x59904f] = _0xa50a2d;
                    if ("Maingame_in" == _0x59904f) {
                      _0x151d0c.Play(_0x249d7b.AudioClips.Maingame_in);
                    } else if ("Bbc_bonus_bgm" == _0x59904f) {
                      _0x2d47.m_bgmId = _0x151d0c.PlayBackGround(_0x249d7b.AudioClips.Bbc_bonus_bgm, true, null, 0x1);
                    } else if ("Dragon_reel01" === _0x59904f) {
                      _0x2d47.m_scatterSoundPath[0x0] = _0xa50a2d;
                      _0x2d47.m_scatterSoundPath[0x1] = _0xa50a2d;
                    } else if ("Scatter_finalhit" === _0x59904f) {
                      _0x2d47.m_scatterSoundPath[0x2] = _0xa50a2d;
                      _0x2d47.m_scatterSoundPath[0x3] = _0xa50a2d;
                      _0x2d47.m_scatterSoundPath[0x4] = _0xa50a2d;
                    } else if ("Win_level01" === _0x59904f) {
                      _0xfec245.WIN_EFFECT_SOUND_NAME[0x0] = _0xa50a2d;
                      _0xfec245.WIN_EFFECT_SOUND_NAME[0x1] = _0xa50a2d;
                    } else if ("Win_level02" === _0x59904f) {
                      _0xfec245.WIN_EFFECT_SOUND_NAME[0x2] = _0xa50a2d;
                    } else if ("Win_level03" === _0x59904f) {
                      _0xfec245.WIN_EFFECT_SOUND_NAME[0x3] = _0xa50a2d;
                    } else if ("Win_level04" === _0x59904f) {
                      _0xfec245.WIN_EFFECT_SOUND_NAME[0x4] = _0xa50a2d;
                    }
                  });
                }
              };
              for (var _0x2a4d5b in _0x249d7b.AudioFilePath) _0x2afcdd(_0x2a4d5b);
              break;
            case _0x42709d.AckType.spin:
            case _0x42709d.AckType.lastSpin:
              var _0x83919a = _0x33fffa.bbcProto.SpinAck.decode(_0x84a260);
              this.OnRecvSpinAck(this.ConvertSpinAck(_0x83919a));
              break;
            case _0x42709d.AckType.unshow:
              var _0x583f43 = _0x33fffa.bbcProto.SpinAck.decode(_0x84a260);
              this.m_unshowSpinAck = this.ConvertSpinAck(_0x583f43).info;
          }
        };
        _0x4dd906.InitExtra = function () {
          var _0x586150 = this;
          if (_0x42709d.APP) {
            this.ReqMail();
            _0x11f2c3.NewInit();
            _0x29381a.JpManagerInit();
            _0x4f031e.NewInit();
            _0xf22764.RecommendNewInit();
            _0x29381a.MhbManagerInit();
            _0x36783f.Init();
            _0x5de981.NewInit(function () {
              _0x12ab12.SetSpinState(_0x33fc15.CLICK_SPIN);
              _0x5d0c3e.Dispatch(_0x214f9d.SpinReqNotify);
              _0x151d0c.Play(_0x249d7b.AudioClips.Spin_click, false, null, 0.5);
            }, function () {
              _0x12ab12.ShowAutoPlayState(false);
            });
            _0xf22764.RankingInit([_0x42709d.APP.GetAccount(), _0x42709d.APP.GetNickName()], _0x42709d.APP.GetAToken(), _0x7eb85f.ConvertLanguageToFull(_0xdc5a06.CurrLang), null, null, function () {
              _0x586150.ReqMail();
            });
          }
        };
        _0x4dd906.GetDisplayValue = function (_0xe73b32) {
          return _0x12ab12.GetDisplayValue(_0xe73b32);
        };
        _0x4dd906.OnRecvSpinAck = function (_0x2621b8) {
          var _0x308bad = this;
          this.m_spinAckQue = _0x2621b8.info;
          _0x575152("OnRecvSpinAck", this.m_spinAckQue);
          if (_0x12ab12.IsAutoSpin && !this.m_isHardStop) {
            _0x12ab12.SetSpinState(_0x33fc15.CLICK_AUTOPLAY_HARDSTOP);
          }
          var _0x176c57 = _0x7eb85f.strip(this.GetNowBetValue());
          var _0xe3251e = this.ConvertEventPlate(this.m_spinAckQue.plateinfo.eventplate);
          this.m_isNearWin = this.CheckNearWin(_0xe3251e);
          this.SetSwordVec(_0xe3251e);
          this.m_slotReels.SetPlateInfo(this.ConvertPlate(this.m_spinAckQue.plateinfo.platet));
          this.m_eventSlotReels.SetPlateInfo(_0xe3251e);
          this.m_awardList = this.SetAwardList(this.m_spinAckQue.plateinfo.awardinfos);
          this.ShowBigWave(this.GetDisplayValue(this.m_spinAckQue.plateinfo.mainwin) / _0x176c57);
          if (!_0xf22764.IsFeaturesDemoMode) {
            if (this.m_spinAckQue.plateinfo.fgpackage.fgplateinfo) {
              var _0x54dba1 = this.m_spinAckQue.plateinfo.fgpackage.fgplateinfo.length;
              this.m_oldRealPlate = this.ConvertPlate(this.m_spinAckQue.plateinfo.fgpackage.fgplateinfo[_0x54dba1 - 0x1].platet);
              this.m_oldEventPlate = this.ConvertEventPlate(this.m_spinAckQue.plateinfo.fgpackage.fgplateinfo[_0x54dba1 - 0x1].eventplate);
            } else {
              this.m_oldRealPlate = this.ConvertPlate(this.m_spinAckQue.plateinfo.platet);
              this.m_oldEventPlate = this.ConvertEventPlate(this.m_spinAckQue.plateinfo.eventplate);
            }
          }
          if (this.m_spinAckQue.plateinfo.fgpackage.fgplateinfo) {
            var _0x52a192 = this.m_spinAckQue.plateinfo.fgpackage;
            var _0x21a8a4 = _0x52a192.times;
            this.SetNearWinGet(_0xe3251e);
            this.m_isFirstInFree = true;
            this.m_freeGamePlate = this.m_spinAckQue.plateinfo.fgpackage.fgplateinfo;
            this.m_spinAckQue.plateinfo.fgpackage.totalprize = _0x52a192.totalprize;
            this.m_spinAckQue.plateinfo.fgpackage.multix = _0x52a192.totalfullwildcount;
            this.m_totalTimesOfFreeGame = _0x21a8a4;
            this.m_freeGameAniTotalTimes.string = String(_0x21a8a4);
            this.m_freeGameLeft.string = String(_0x21a8a4);
            this.m_freeGameLeftS.string = String(_0x21a8a4);
          }
          if (this.m_isHardStop) {
            this.m_slotReels.SetIsClickStopBtn();
            this.m_eventSlotReels.SetIsClickStopBtn();
            _0x12ab12.SetSpinWithSpeed();
          } else if (!_0x12ab12.IsAutoSpin) {
            _0x12ab12.SetSpinState(_0x33fc15.START_SPIN);
          }
          if (this.m_isNearWin) {
            this.m_eventSlotReels.SetNearWinCb(function (_0x1acddf) {
              _0x308bad.NearWinStart(_0x1acddf);
            }, function () {
              _0x308bad.NearWinEnd();
            });
          }
          this.m_canSpaceStop = true;
          this.m_canPlateStop = true;
          this.m_win = 0x0;
          _0x3c1ce8(this.node).delay(0.15).call(function () {
            _0x12ab12.SetWinValue(0x0);
          }).start();
          this.m_canScatterSound = true;
        };
        _0x4dd906.ConvertPlate = function (_0x50afa6) {
          var _0x34744c = [[], [], [], [], []];
          for (var _0x5b1952 = 0x0; _0x5b1952 < _0x50afa6.length; _0x5b1952++) {
            for (var _0xa947d0 = 0x0; _0xa947d0 < _0x50afa6[_0x5b1952].length; _0xa947d0++) {
              _0x34744c[_0xa947d0][_0x5b1952] = _0x50afa6[_0x5b1952][_0xa947d0];
            }
          }
          return _0x34744c;
        };
        _0x4dd906.ConvertEventPlate = function (_0x97338d) {
          var _0x5a7ab8 = [[], [], [], [], []];
          for (var _0x2396c9 = 0x0; _0x2396c9 < _0x97338d.length; _0x2396c9++) {
            _0x5a7ab8[_0x2396c9][0x0] = _0x97338d[_0x2396c9];
          }
          return _0x5a7ab8;
        };
        _0x4dd906.ReqMail = function () {
          if (_0x42709d.APP) {
            _0x1b0819.SendMailReq();
          }
        };
        _0x4dd906.MainAndFreeTransfer = function (_0x3efadf) {
          var _0x4baea6 = this;
          var _0x1ece19 = _0x3c1ce8().call(function () {
            _0x4baea6.m_effectView.SkipEffect();
            _0x4baea6.m_effectPlate.HideSymbolEffect();
            _0x4baea6.m_effectPlate.StopSingleLineEffect();
            _0x4baea6.m_eventEffectPlate.HideSword();
            _0x4baea6.m_slotReels.ResetSymbolActive();
            _0x4baea6.m_eventSlotReels.ResetSymbolActive();
          });
          var _0x429743 = 0x0;
          _0x429743 = _0x3efadf ? _0x249d7b.ACTION_DELAY_TIME.FREE_MAIN_TRANSFER_START : _0x249d7b.ACTION_DELAY_TIME.FREE_MAIN_TRANSFER_END;
          _0x3c1ce8(this.node).call(function () {
            _0x4baea6.m_goToFreeAniNode.active = true;
            _0x4baea6.m_eventEffectPlate.HideDragon();
            _0x4baea6.m_eventSlotReels.ResetSymbolActive();
            if (_0x3efadf) {
              _0x3c1ce8(_0x4baea6.node).call(function () {
                _0x151d0c.Play(_0x249d7b.AudioClips.Bbc_freegame_in02);
                _0x4baea6.m_goToFreeAniNode.getComponent(_0x51a26a).play("start");
                _0x4baea6.m_fgBackAni.getComponent(_0x51a26a).play("BGFX01_4start");
              }).delay(0.8).then(_0x1ece19).delay(0.28).call(function () {
                _0x4baea6.m_goToFreeAniNode.getComponent(_0x51a26a).play("freespins");
              }).delay(0x1).call(function () {
                _0x151d0c.Play(_0x249d7b.AudioClips.Bbc_freegame_in01);
              }).start();
            } else {
              _0x3c1ce8(_0x4baea6.node).call(function () {
                _0x151d0c.Play(_0x249d7b.AudioClips.Bbc_freegame_in02);
                _0x4baea6.m_goToFreeAniNode.getComponent(_0x51a26a).play("close");
                _0x4baea6.m_fgBackAni.getComponent(_0x51a26a).play('BGFX01_4end');
              }).delay(0.5).call(function () {
                _0x4baea6.m_freeGameSettlement.active = false;
                _0x4baea6.m_freeGameTotalWin.node.active = false;
                _0x4baea6.m_freeGameTotalWin.string = '0';
                _0x4baea6.m_settlementRain.resetSystem();
                _0x4baea6.m_settlementRain.stopSystem();
                _0x4baea6.m_settlementRain.node.active = false;
              }).then(_0x1ece19).start();
            }
          }).delay(_0x429743).call(function () {
            _0x4baea6.m_mainGameNode.active = !_0x3efadf;
            _0x4baea6.m_freeGameUpNode.active = _0x3efadf;
            _0x4baea6.m_freeGameNode.active = _0x3efadf;
            if (!_0x4baea6.m_isLandscape) {
              _0x4baea6.m_freeGameLeftNodeS.active = _0x3efadf;
              _0x4baea6.m_freeGameMutiNodeS.active = _0x3efadf;
              _0x4baea6.m_freeGameMutiS.string = 'x0';
            }
          }).start();
        };
        _0x4dd906.StartSpin = function () {
          this.m_slotReels.StartSpin();
          this.m_eventSlotReels.StartSpin();
          this.m_isHardStop = _0x12ab12.IsHardStop;
        };
        _0x4dd906.SetSwordVec = function (_0x4a7bf9) {
          var _0x57e3bd = [];
          var _0xd0313e = false;
          for (var _0x11468d = 0x0; _0x11468d < this.m_swordAndNotToAni.length; _0x11468d++) {
            this.m_swordAndNotToAni[_0x11468d] = false;
          }
          for (var _0x4fd3a0 = 0x0; _0x4fd3a0 < _0x4a7bf9.length; _0x4fd3a0++) {
            for (var _0x3ba866 = 0x0; _0x3ba866 < _0x4a7bf9[_0x4fd3a0].length; _0x3ba866++) {
              if (_0x4a7bf9[_0x4fd3a0][_0x3ba866] == _0x249d7b.SYMBOL_SWORD) {
                _0x57e3bd.push(_0x4fd3a0);
                _0xd0313e = true;
              }
            }
          }
          this.m_swordVec = _0x57e3bd;
          this.m_haveSword = _0xd0313e;
          for (var _0x1f1353 = 0x0; _0x1f1353 < this.m_swordVec.length; _0x1f1353++) {
            this.m_swordAndNotToAni[this.m_swordVec[_0x1f1353]] = true;
          }
        };
        _0x4dd906.CheckNearWin = function (_0xc6eb37) {
          var _0x50c699 = -0x1;
          for (var _0x35d3ca = 0x0; _0x35d3ca < _0xc6eb37.length && _0xc6eb37[_0x35d3ca][0x0] == _0x249d7b.SYMBOL_DRAGON; _0x35d3ca++) {
            _0x50c699++;
          }
          this.m_nearWinCount = _0x50c699;
          return _0xc6eb37[0x0][0x0] == _0x249d7b.SYMBOL_DRAGON && _0xc6eb37[0x1][0x0] == _0x249d7b.SYMBOL_DRAGON;
        };
        _0x4dd906.StopNearWinEffect = function () {
          for (var _0xbea34f = 0x0; _0xbea34f < this.m_nearWinEffect.length; _0xbea34f++) {
            this.m_nearWinEffect[_0xbea34f].active = false;
          }
          for (var _0x4541c8 = 0x0; _0x4541c8 < this.m_nearWinEffect.length; _0x4541c8++) {
            this.m_eventEffectPlate.HideDragon();
          }
          this.m_eventSlotReels.ResetSymbolActive();
        };
        _0x4dd906.NearWinStart = function (_0x567732) {
          var _0x29bcdb = this;
          if (_0x12ab12.IsAutoSpin) {
            _0x12ab12.SetSpinState(_0x33fc15.CLICK_STOP_IN_AUTOPLAY);
          } else {
            _0x12ab12.SetSpinState(_0x33fc15.CLICK_STOP);
          }
          _0x3c1ce8(this.node).delay(0.13).call(function () {
            if (_0x567732 == 0x5) {
              for (var _0x3d860b = 0x0; _0x3d860b < _0x29bcdb.m_nearWinEffect.length; _0x3d860b++) {
                if (_0x29bcdb.m_nearWinEffect[_0x3d860b] && _0x29bcdb.m_nearWinEffect[_0x3d860b].active) {
                  _0x29bcdb.m_nearWinEffect[_0x3d860b].active = false;
                }
              }
              var _0x5315af = [];
              for (var _0x54d678 = 0x0; _0x54d678 < _0x567732; _0x54d678++) {
                _0x5315af.push(_0x54d678);
              }
              _0x29bcdb.m_eventEffectPlate.HideDragon();
              _0x29bcdb.m_eventEffectPlate.ShowDragon(_0x5315af, null, "effectSymbol13_wait");
            } else {
              _0x151d0c.Play(_0x249d7b.AudioClips.Fg_NearWin, false, null, 0x1);
              for (var _0x4673a0 = 0x0; _0x4673a0 < _0x29bcdb.m_nearWinEffect.length; _0x4673a0++) {
                _0x29bcdb.m_nearWinEffect[_0x4673a0].active = _0x4673a0 == _0x567732 - 0x2;
              }
              _0x29bcdb.m_nearWinEffect[_0x567732 - 0x2].getComponent(_0x51a26a).play();
              var _0x19401c = [];
              for (var _0x1c95d8 = 0x0; _0x1c95d8 < _0x567732; _0x1c95d8++) {
                _0x19401c.push(_0x1c95d8);
              }
              _0x29bcdb.m_eventEffectPlate.HideDragon();
              _0x29bcdb.m_eventEffectPlate.ShowDragon(_0x19401c, null, "effectSymbol13_wait");
            }
          }).start();
        };
        _0x4dd906.SetNearWinGet = function (_0x410a4f) {
          var _0x40557c = [];
          for (var _0x18d34e = 0x0; _0x18d34e < _0x410a4f.length && _0x410a4f[_0x18d34e][0x0] == _0x249d7b.SYMBOL_DRAGON; _0x18d34e++) {
            _0x40557c.push(_0x18d34e);
          }
          this.m_nearWinGetVec = _0x40557c;
        };
        _0x4dd906.NearWinEnd = function () {
          for (var _0x472d83 = 0x0; _0x472d83 < this.m_nearWinEffect.length; _0x472d83++) {
            if (this.m_nearWinEffect[_0x472d83].active) {
              this.m_nearWinEffect[_0x472d83].active = false;
            }
          }
        };
        _0x4dd906.ChangeToFreeGame = function () {
          this.MainAndFreeTransfer(true);
        };
        _0x4dd906.ChangeToMainGame = function () {
          this.MainAndFreeTransfer(false);
        };
        _0x4dd906.SetFireBall = function (_0x11461c) {
          this.m_flyCount = 0x0;
          for (var _0x3e91b9 = 0x0; _0x3e91b9 < _0x11461c.length; _0x3e91b9++) {
            for (var _0x75f0ca = 0x0; _0x75f0ca < _0x11461c[_0x3e91b9].length; _0x75f0ca++) {
              this.m_needFlyFireBall[_0x3e91b9] = _0x11461c[_0x3e91b9][_0x75f0ca] == _0x249d7b.SYMBOL_SWORD;
              if (this.m_needFlyFireBall[_0x3e91b9]) {
                this.m_flyCount++;
              }
            }
          }
        };
        _0x4dd906.FlyFireBallMainAni = function () {
          var _0x5e28e2 = this;
          var _0x1c703c = 0x0;
          var _0x219729 = [];
          for (var _0x3c3583 = 0x0; _0x3c3583 < this.m_needFlyFireBall.length; _0x3c3583++) {
            if (this.m_needFlyFireBall[_0x3c3583]) {
              _0x219729.push(_0x3c3583);
            }
          }
          _0x3c1ce8(this.node).call(function () {
            for (var _0x547e2d = 0x0; _0x547e2d < _0x5e28e2.m_needFlyFireBall.length; _0x547e2d++) {
              if (_0x5e28e2.m_needFlyFireBall[_0x547e2d]) {
                _0x5e28e2.m_fireBall[_0x547e2d].getChildByName('Particle_2').getComponent(_0x4afa6c).resetSystem();
                _0x5e28e2.m_fireBall[_0x547e2d].setPosition(_0x20545c(_0x249d7b.FREE_MUTI_BALL_START_POS[String(_0x5e28e2.m_isLandscape)][_0x547e2d].x, _0x249d7b.FREE_MUTI_BALL_START_POS[String(_0x5e28e2.m_isLandscape)][_0x547e2d].y));
                _0x5e28e2.m_fireBall[_0x547e2d].active = true;
              }
            }
          }).delay(0.2).repeat(this.m_flyCount, _0x3c1ce8().call(function () {
            _0x5e28e2.FlyFireBall(_0x219729[_0x1c703c]);
            _0x1c703c++;
          }).delay(_0x249d7b.ACTION_DELAY_TIME.FIRE_BALL)).call(function () {
            _0x446dc3.NextState(_0x1bcb3d.AWARD);
          }).start();
        };
        _0x4dd906.FlyFireBall = function (_0x18a76a) {
          var _0x3a0dc5 = this;
          this.m_ratationLock = true;
          _0x3c1ce8(this.m_fireBall[_0x18a76a]).parallel(_0x3c1ce8().to(_0x249d7b.ACTION_DELAY_TIME.FIRE_BALL_FLY, {
            'position': _0x249d7b.FLY_FIRE_BALL_POS[String(this.m_isLandscape)]
          }), _0x3c1ce8().call(function () {
            _0x151d0c.Play(_0x249d7b.AudioClips.Bbc_freegame_fireball);
          })).call(function () {
            _0x3a0dc5.m_flyMutiply++;
            if (_0x3a0dc5.m_flyMutiply > 0x1) {
              _0x3a0dc5.m_dragonCutNode.getComponent(_0x51a26a).play("light");
            } else {
              _0x3c1ce8(_0x3a0dc5.node).call(function () {
                _0x3a0dc5.m_dragonCutNode.getComponent(_0x51a26a).play('on');
              }).delay(0.7).call(function () {
                _0x3a0dc5.m_freeGameMuti.node.active = true;
              }).start();
              _0x3a0dc5.m_freeGameMutiS.node.active = true;
            }
            _0x3a0dc5.m_freeGameMuti.string = 'x' + String(_0x3a0dc5.m_flyMutiply);
            _0x3a0dc5.m_freeGameMutiS.string = 'x' + String(_0x3a0dc5.m_flyMutiply);
            _0x3a0dc5.m_fireBall[_0x18a76a].active = false;
            _0x3a0dc5.m_ratationLock = false;
          }).start();
        };
        _0x4dd906.SetFreeGameSettlement = function (_0x2d837a) {
          this.m_freeGameSettlement.getComponent(_0x51a26a).play(_0x2d837a);
        };
        _0x4dd906.RunningFreeGameTotalWin = function (_0x39ef79, _0x1da9c3) {
          var _0x4fae0b = this;
          var _0x520a16 = _0x7eb85f.divide(_0x1da9c3, 0.02);
          var _0x2c3e5e = Number(this.m_freeGameTotalWin.string.replace(/,/g, ''));
          var _0x2a8abb = _0x7eb85f.divide(_0x7eb85f.strip(_0x39ef79 - _0x2c3e5e), _0x520a16);
          _0x3c1ce8(this.m_freeGameTotalWin.node).repeat(_0x520a16, _0x3c1ce8().call(function () {
            _0x2c3e5e += _0x2a8abb;
            _0x4fae0b.m_freeGameTotalWin.string = _0x7eb85f.FormatNumberThousands(_0x12ab12.GetDisplayValue(_0x2c3e5e), _0x7eb85f.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }).delay(0.02)).call(function () {
            _0x4fae0b.m_freeGameTotalWin.string = _0x7eb85f.FormatNumberThousands(_0x12ab12.GetDisplayValue(_0x39ef79), _0x7eb85f.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }).start();
        };
        _0x4dd906.ShowBigWave = function (_0x47b0cf) {
          var _0x2db0a0 = this;
          if (_0x47b0cf > _0x249d7b.BIG_WAVE_RATE) {
            var _0x3657dc = this.m_bigWaveComingAni.getComponent(_0x51a26a);
            var _0x387650 = 0x0;
            var _0x40f745 = 0x0;
            for (var _0x4c9d1c = 0x0; _0x4c9d1c < _0x3657dc.clips.length; _0x4c9d1c++) {
              var _0xb0160f = _0x3657dc.clips[_0x4c9d1c];
              if (_0xb0160f.name === "animation0") {
                _0x387650 = _0xb0160f.duration;
              }
              if (_0xb0160f.name === "animation1") {
                _0x40f745 = _0xb0160f.duration;
              }
            }
            this.m_bigWaveComingAni.active = true;
            this.m_bigWaveComingAni.getComponent(_0x51a26a).play("animation0");
            _0x3c1ce8(this.node).delay(_0x387650 + 0.3).call(function () {
              _0x2db0a0.m_bigWaveComingAni.getComponent(_0x51a26a).play("animation1");
            }).delay(_0x40f745 + 0.3).call(function () {
              _0x2db0a0.m_bigWaveComingAni.getComponent(_0x51a26a).play('animation2');
            }).start();
            _0x151d0c.Play(_0x249d7b.AudioClips.Goldensun);
          }
        };
        _0x4dd906.SetAwardList = function (_0x435e84) {
          var _0x5f20d5 = [];
          var _0x3b066a = 0x0;
          for (var _0x23cc05 = 0x0; _0x23cc05 < _0x435e84.length; _0x23cc05++) {
            if (_0x435e84[_0x23cc05].awardlink > 0x0) {
              _0x5f20d5.push(_0x435e84[_0x23cc05]);
            }
          }
          for (var _0x4f0784 = 0x0; _0x4f0784 < _0x5f20d5.length; _0x4f0784++) {
            if (_0x5f20d5[_0x4f0784].awardlink > _0x3b066a) {
              _0x3b066a = _0x5f20d5[_0x4f0784].awardlink;
            }
          }
          this.m_swordGetLimit = _0x3b066a;
          return _0x5f20d5;
        };
        _0x4dd906.HaveGetWild = function (_0x3c926a) {
          var _0x5b03ff = null;
          var _0x267711 = 0x0;
          _0x5b03ff = this.m_isFreeGame ? this.m_freeGamePlate[this.m_timesOfFreeGame - 0x1].awardinfos : this.m_spinAckQue.plateinfo.awardinfos;
          for (var _0x541da0 = 0x0; _0x541da0 < _0x5b03ff.length; _0x541da0++) {
            if (_0x5b03ff[_0x541da0].awardlink > _0x267711) {
              _0x267711 = _0x5b03ff[_0x541da0].awardlink;
            }
          }
          return _0x267711 > _0x3c926a;
        };
        _0x4dd906.Load = function (_0xc548ef, _0x5aff04) {
          var _0x23669a = this;
          _0x42709d.GameBundle.load(_0xc548ef, function (_0x2b2193, _0x27ec22) {
            if (_0x2b2193) {
              _0x23669a.Load(_0xc548ef, _0x5aff04);
            } else if (_0x5aff04) {
              _0x5aff04(_0x27ec22);
            }
          });
        };
        _0x4dd906.GetSpinInfo = function () {
          return null;
        };
        _0x4dd906.CancelSpin = function () {
          this.m_slotReels.SetPlateSymbol(this.m_oldRealPlate);
          this.m_eventSlotReels.SetPlateSymbol(this.m_oldEventPlate);
        };
        _0x4dd906.RetryRoundEnd = function () {
          if (this.IsFreeGame) {
            _0xf8b970.ReqRoundEnd(this.m_timesOfFreeGame + 0x1, this.m_timesOfFreeGame >= this.m_totalTimesOfFreeGame);
          } else {
            _0xf8b970.ReqRoundEnd(0x1, true);
          }
        };
        _0x4dd906.SendVerificationEvent = function (_0x16d912, _0x5d4289) {
          var _0x113276 = _0x7eb85f.GetLinkParameterByName('ssoKey') || '';
          var _0x56d3de = '';
          if (this.m_spinAckQue) {
            _0x56d3de = _0x12ab12.GetLogIndex().split(" ")[0x1];
          }
          _0x1b0819.SendVerificationEvent(_0x1b0819.FormVerificationEventParams(Number(_0x42709d.APP.GetAID()), Number(_0x42709d.NOW_GAME_ID), _0x249d7b.Ver, _0x16d912, _0x5d4289, _0x113276, _0x42709d.APP.GetAID(), _0x56d3de));
        };
        _0x1303ad(_0xfec245, [{
          'key': "SlotReels",
          'get': function () {
            return this.m_slotReels;
          }
        }, {
          'key': 'EventSlotReels',
          'get': function () {
            return this.m_eventSlotReels;
          }
        }, {
          'key': "EffectPlate",
          'get': function () {
            return this.m_effectPlate;
          }
        }, {
          'key': "EventEffectPlate",
          'get': function () {
            return this.m_eventEffectPlate;
          }
        }, {
          'key': 'MainGameNode',
          'get': function () {
            return this.m_mainGameNode;
          }
        }, {
          'key': "FreeGameNode",
          'get': function () {
            return this.m_freeGameNode;
          }
        }, {
          'key': "FreeGameUpNode",
          'get': function () {
            return this.m_freeGameUpNode;
          }
        }, {
          'key': "FreeGameLeft",
          'get': function () {
            return this.m_freeGameLeft;
          }
        }, {
          'key': 'FreeGameLeftS',
          'get': function () {
            return this.m_freeGameLeftS;
          }
        }, {
          'key': "FreeGameMuti",
          'get': function () {
            return this.m_freeGameMuti;
          }
        }, {
          'key': "FreeGameMutiS",
          'get': function () {
            return this.m_freeGameMutiS;
          }
        }, {
          'key': "DragonCutNode",
          'get': function () {
            return this.m_dragonCutNode;
          }
        }, {
          'key': "FreeGameSettlement",
          'get': function () {
            return this.m_freeGameSettlement;
          }
        }, {
          'key': "FreeGameTotalWin",
          'get': function () {
            return this.m_freeGameTotalWin;
          }
        }, {
          'key': "FreeGameTotalWinMutiNode",
          'get': function () {
            return this.m_freeGameTotalWinMutiNode;
          }
        }, {
          'key': "FreeGameTotalWinMuti",
          'get': function () {
            return this.m_freeGameTotalWinMuti;
          }
        }, {
          'key': "SettlementRain",
          'get': function () {
            return this.m_settlementRain;
          }
        }, {
          'key': "FgBackAni",
          'get': function () {
            return this.m_fgBackAni;
          }
        }, {
          'key': "SpinAckQue",
          'get': function () {
            return this.m_spinAckQue;
          },
          'set': function (_0x3dfe32) {
            this.m_spinAckQue = _0x3dfe32;
          }
        }, {
          'key': "UnshowSpinAck",
          'get': function () {
            return this.m_unshowSpinAck;
          },
          'set': function (_0x3a0a1b) {
            this.m_unshowSpinAck = _0x3a0a1b;
          }
        }, {
          'key': "IsLandscape",
          'get': function () {
            return this.m_isLandscape;
          },
          'set': function (_0xadefa8) {
            this.m_isLandscape = _0xadefa8;
          }
        }, {
          'key': "AutoplayInfos",
          'get': function () {
            return this.m_autoplayInfos;
          },
          'set': function (_0x470a70) {
            this.m_autoplayInfos = _0x470a70;
          }
        }, {
          'key': "EffectView",
          'get': function () {
            return this.m_effectView;
          },
          'set': function (_0x5005a) {
            this.m_effectView = _0x5005a;
          }
        }, {
          'key': "CanSpaceStop",
          'get': function () {
            return this.m_canSpaceStop;
          },
          'set': function (_0x339d5c) {
            this.m_canSpaceStop = _0x339d5c;
          }
        }, {
          'key': "CanPlateStop",
          'get': function () {
            return this.m_canPlateStop;
          },
          'set': function (_0x1d576d) {
            this.m_canPlateStop = _0x1d576d;
          }
        }, {
          'key': "ProcessTick",
          'get': function () {
            return this.m_processTick;
          },
          'set': function (_0x308906) {
            this.m_processTick = _0x308906;
          }
        }, {
          'key': 'BgmId',
          'get': function () {
            return this.m_bgmId;
          },
          'set': function (_0x32d9b2) {
            this.m_bgmId = _0x32d9b2;
          }
        }, {
          'key': 'FgStateEndAni',
          'get': function () {
            return this.m_fgStateEndAni;
          },
          'set': function (_0x771c70) {
            this.m_fgStateEndAni = _0x771c70;
          }
        }, {
          'key': 'FgStateEndCallFun',
          'get': function () {
            return this.m_fgStateEndCallFun;
          },
          'set': function (_0xf3fdc4) {
            this.m_fgStateEndCallFun = _0xf3fdc4;
          }
        }, {
          'key': "MainWinForFree",
          'get': function () {
            return this.m_mainWinForFree;
          },
          'set': function (_0x58e7ac) {
            this.m_mainWinForFree = _0x58e7ac;
          }
        }, {
          'key': "TimesOfFreeGame",
          'get': function () {
            return this.m_timesOfFreeGame;
          },
          'set': function (_0x2ad6d6) {
            this.m_timesOfFreeGame = _0x2ad6d6;
          }
        }, {
          'key': "TotalTimesOfFreeGame",
          'get': function () {
            return this.m_totalTimesOfFreeGame;
          },
          'set': function (_0x916b57) {
            this.m_totalTimesOfFreeGame = _0x916b57;
          }
        }, {
          'key': 'IsFreeGame',
          'get': function () {
            return this.m_isFreeGame;
          },
          'set': function (_0x3f0f0c) {
            this.m_isFreeGame = _0x3f0f0c;
          }
        }, {
          'key': "HaveSword",
          'get': function () {
            return this.m_haveSword;
          },
          'set': function (_0x34469b) {
            this.m_haveSword = _0x34469b;
          }
        }, {
          'key': "SwordGetLimit",
          'get': function () {
            return this.m_swordGetLimit;
          },
          'set': function (_0x20914d) {
            this.m_swordGetLimit = _0x20914d;
          }
        }, {
          'key': "AwardList",
          'get': function () {
            return this.m_awardList;
          },
          'set': function (_0x5b4be4) {
            this.m_awardList = _0x5b4be4;
          }
        }, {
          'key': "SwordVec",
          'get': function () {
            return this.m_swordVec;
          },
          'set': function (_0xf2419d) {
            this.m_swordVec = _0xf2419d;
          }
        }, {
          'key': "FreeGamePlate",
          'get': function () {
            return this.m_freeGamePlate;
          },
          'set': function (_0x2def1c) {
            this.m_freeGamePlate = _0x2def1c;
          }
        }, {
          'key': 'IsNearWin',
          'get': function () {
            return this.m_isNearWin;
          }
        }, {
          'key': "IsFirstInFree",
          'get': function () {
            return this.m_isFirstInFree;
          },
          'set': function (_0xcd6e51) {
            this.m_isFirstInFree = _0xcd6e51;
          }
        }, {
          'key': "FlyCount",
          'get': function () {
            return this.m_flyCount;
          },
          'set': function (_0x3bd1dd) {
            this.m_flyCount = _0x3bd1dd;
          }
        }, {
          'key': "FlyMutiply",
          'get': function () {
            return this.m_flyMutiply;
          },
          'set': function (_0x5b7d21) {
            this.m_flyMutiply = _0x5b7d21;
          }
        }, {
          'key': "FreeBgmId",
          'get': function () {
            return this.m_freeBgmId;
          },
          'set': function (_0x6c855c) {
            this.m_freeBgmId = _0x6c855c;
          }
        }, {
          'key': "Win",
          'get': function () {
            return this.m_win;
          },
          'set': function (_0x97f25f) {
            this.m_win = _0x97f25f;
          }
        }, {
          'key': "CanScatterSound",
          'get': function () {
            return this.m_canScatterSound;
          },
          'set': function (_0x144562) {
            this.m_canScatterSound = _0x144562;
          }
        }, {
          'key': "NearWinGetVec",
          'get': function () {
            return this.m_nearWinGetVec;
          },
          'set': function (_0x1b7558) {
            this.m_nearWinGetVec = _0x1b7558;
          }
        }, {
          'key': "SwordAndNotToAni",
          'get': function () {
            return this.m_swordAndNotToAni;
          },
          'set': function (_0xfd748a) {
            this.m_swordAndNotToAni = _0xfd748a;
          }
        }, {
          'key': "IsFreeAutoSpin",
          'get': function () {
            return this.m_isFreeAutoSpin;
          },
          'set': function (_0x10a747) {
            this.m_isFreeAutoSpin = _0x10a747;
          }
        }, {
          'key': "OldRealPlate",
          'get': function () {
            return this.m_oldRealPlate;
          },
          'set': function (_0x2d3c12) {
            this.m_oldRealPlate = _0x2d3c12;
          }
        }, {
          'key': 'OldEventPlate',
          'get': function () {
            return this.m_oldEventPlate;
          },
          'set': function (_0x26f845) {
            this.m_oldEventPlate = _0x26f845;
          }
        }]);
        return _0xfec245;
      }(_0x27b228);
      _0x3463dd.ODDS = [0x2, 0x5, 0x8, 0x14, 0x28];
      _0x3463dd.WIN_EFFECT_FILES = [null, null, "BBC/Win/big_anim", "BBC/Win/mega_anim", "BBC/Win/super_anim"];
      _0x3463dd.WIN_EFFECT_LEVEL = [0x3, 0x4, 0x5, 0x5, 0x5];
      _0x3463dd.WIN_EFFECT_TIMES = [1.4, 1.4, 0x5, 0x6, 0x8];
      _0x3463dd.WIN_EFFECT_SOUND_NAME = [null, null, null, null, null];
      _0x3463dd.AWARD_BOARD_FILE = "BBC/Win/awardBoard";
      _0x4a89fe = _0x405794(_0x3463dd.prototype, "m_spinToggleContainer", [_0x26b8d1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x398edd = _0x405794(_0x3463dd.prototype, 'm_mainGameAnim', [_0xff34b0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x27169d = _0x405794(_0x3463dd.prototype, "m_slotReels", [_0x5551d6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4f90ed = _0x405794(_0x3463dd.prototype, "m_eventSlotReels", [_0x97cc90], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5220f7 = _0x405794(_0x3463dd.prototype, 'm_effectPlate', [_0xc287b0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x33a8ee = _0x405794(_0x3463dd.prototype, 'm_eventEffectPlate', [_0xc65a95], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x4d0ec0 = _0x405794(_0x3463dd.prototype, "m_barNode", [_0x3b01de], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1acae4 = _0x405794(_0x3463dd.prototype, "m_plateSpineBtn", [_0x38f98c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x51b26f = _0x405794(_0x3463dd.prototype, 'm_titleSpriteL', [_0x403f2c], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1a5d08 = _0x405794(_0x3463dd.prototype, "m_titleSpriteS", [_0x269775], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x147031 = _0x405794(_0x3463dd.prototype, "m_mainGameNode", [_0x3c0ef6], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3f77ac = _0x405794(_0x3463dd.prototype, "m_freeGameNode", [_0x305085], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x22cfd8 = _0x405794(_0x3463dd.prototype, 'm_freeGameUpNode', [_0x311df2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1a6174 = _0x405794(_0x3463dd.prototype, "m_goToFreeAniNode", [_0x1b1b46], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x139120 = _0x405794(_0x3463dd.prototype, "m_freeGameAniTotalTimes", [_0x26cd71], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x10889b = _0x405794(_0x3463dd.prototype, "m_freeGameLeft", [_0x110faf], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3733f2 = _0x405794(_0x3463dd.prototype, "m_freeGameLeftNodeS", [_0x28815d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x12fe10 = _0x405794(_0x3463dd.prototype, "m_freeGameLeftS", [_0x2d0707], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x26e7ce = _0x405794(_0x3463dd.prototype, "m_freeGameMuti", [_0x190540], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x24bf76 = _0x405794(_0x3463dd.prototype, "m_freeGameMutiNodeS", [_0x411c77], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xba02cf = _0x405794(_0x3463dd.prototype, 'm_freeGameMutiS', [_0x4c7f57], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5ba841 = _0x405794(_0x3463dd.prototype, "m_fireBall", [_0x1af516], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x5ca963 = _0x405794(_0x3463dd.prototype, 'm_dragonCutNode', [_0x483605], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x5b090b = _0x405794(_0x3463dd.prototype, "m_freeGameSettlement", [_0x366aa4], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x46375e = _0x405794(_0x3463dd.prototype, "m_freeGameTotalWin", [_0x4f3536], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1865b1 = _0x405794(_0x3463dd.prototype, "m_freeGameTotalWinMutiNode", [_0x337096], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x35a16d = _0x405794(_0x3463dd.prototype, "m_freeGameTotalWinMuti", [_0x176832], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2530df = _0x405794(_0x3463dd.prototype, "m_settlementRain", [_0x3afe6d], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x592230 = _0x405794(_0x3463dd.prototype, "m_bigWaveComingAni", [_0x33d891], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x35a42d = _0x405794(_0x3463dd.prototype, 'm_nearWinEffect', [_0x4c34ac], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x5c7246 = _0x405794(_0x3463dd.prototype, "m_freeSpinLocaleS", [_0x1b4cce], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2d2fb0 = _0x405794(_0x3463dd.prototype, "m_freeSpinLocaleH", [_0x7a2de5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1866cf = _0x405794(_0x3463dd.prototype, 'm_bigWinNode', [_0x2d7c27], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x3332c8 = _0x405794(_0x3463dd.prototype, "m_fgFreeTxt", [_0x7f9ec1], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x543775 = _0x405794(_0x3463dd.prototype, 'm_fgGameTxt', [_0x4b82dd], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x2cd182 = _0x405794(_0x3463dd.prototype, "m_fgTimeTxt", [_0x28621e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x1367d8 = _0x405794(_0x3463dd.prototype, "m_fgBackAni", [_0x3a64b3], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x11c9a1 = _0x405794(_0x3463dd.prototype, 'm_titleSpriteAtlas', [_0x26e88b], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      var _0x278c95 = _0x4ee135(_0x4e91e2 = _0x3463dd) || _0x4e91e2;
      var _0xf6686f;
      var _0x409344;
      _0x252f89._RF.pop();
      _0x252f89._RF.push({}, "60320XGeWhKu7WIdDdT0BVp", "AwardState", undefined);
      var _0x56e9a1 = _0x2db653.ccclass;
      _0xf6686f = _0x56e9a1("AwardState");
      var _0xa793d9 = _0xf6686f(_0x409344 = function (_0x2e97f2) {
        function _0x4cc83f(_0x10d586) {
          var _0x29c77f;
          (_0x29c77f = _0x2e97f2.call(this) || this).m_gameView = null;
          _0x29c77f.m_gameView = _0x10d586;
          return _0x29c77f;
        }
        _0x59a013(_0x4cc83f, _0x2e97f2);
        var _0x493489 = _0x4cc83f.prototype;
        _0x493489.OnEnter = function () {
          var _0x14e7e0 = this;
          _0x411bc1("GameState AwardState");
          var _0x32e32a = function () {
            var _0x3e4836;
            var _0x3e322c = 0x0;
            var _0x2619bf = null;
            var _0x348e45 = 0x0;
            var _0x14d71b = _0x14e7e0.m_gameView.GetNowBetValue();
            if (_0x14e7e0.m_gameView.IsFreeGame) {
              _0x2619bf = _0x14e7e0.m_gameView.ConvertPlate(_0x14e7e0.m_gameView.FreeGamePlate[_0x14e7e0.m_gameView.TimesOfFreeGame - 0x1].platet);
              _0x348e45 = _0x14e7e0.m_gameView.FreeGamePlate[_0x14e7e0.m_gameView.TimesOfFreeGame - 0x1].awardprize;
            } else {
              _0x2619bf = _0x14e7e0.m_gameView.ConvertPlate(_0x14e7e0.m_gameView.SpinAckQue.plateinfo.platet);
              _0x348e45 = _0x14e7e0.m_gameView.SpinAckQue.plateinfo.mainwin;
            }
            _0x14e7e0.m_gameView.Win = _0x14e7e0.m_gameView.Win + _0x348e45;
            if ((_0x3e4836 = _0x348e45 / _0x14d71b) > 0x0) {
              if (_0x3e4836 < _0x278c95.ODDS[0x2]) {
                if (_0x3e4836 < _0x278c95.ODDS[0x0]) {
                  _0x151d0c.Play(_0x249d7b.AudioClips.Win_level01);
                }
                _0x14e7e0.m_gameView.EffectView.ShowCommonEffect(_0x348e45, _0x14d71b, null, null);
                _0x12ab12.SetEftWinValue(_0x348e45, _0x14e7e0.m_gameView.Win);
              } else {
                _0x3e322c = _0x249d7b.ODDS_DT_TIME[_0x278c95.ODDS.length - 0x1];
                for (var _0x244b5a = 0x0; _0x244b5a < _0x278c95.ODDS.length; _0x244b5a++) {
                  if (_0x3e4836 < _0x278c95.ODDS[_0x244b5a]) {
                    console.log("rate", _0x244b5a);
                    _0x3e322c = _0x249d7b.ODDS_DT_TIME[_0x244b5a - 0x1];
                    break;
                  }
                }
                _0x14e7e0.m_gameView.EffectView.ShowCommonEffect(_0x348e45, _0x14d71b, null, null);
                _0x3c1ce8(_0x14e7e0.m_gameView.node).delay(_0x3e322c).call(function () {
                  _0x12ab12.SetWinValueWithCheck({
                    'maxWin': _0x14e7e0.m_gameView.SpinAckQue.totalwin,
                    'value': _0x14e7e0.m_gameView.Win
                  });
                }).start();
              }
            }
            if (_0x14e7e0.m_gameView.IsFirstInFree) {
              _0x3e322c += _0x249d7b.NEAR_WIN_WAIT_TIME;
            }
            _0x14e7e0.m_gameView.EffectPlate.ShowSymbolEffect(_0x2619bf, _0x14e7e0.m_gameView.AwardList, function () {
              _0x446dc3.NextState(_0x1bcb3d.ROUND_SHOW_END);
            }, _0x3e322c, _0x14e7e0.m_gameView.SwordAndNotToAni);
          };
          if (this.m_gameView.IsFirstInFree) {
            this.m_gameView.EventEffectPlate.ShowDragon(this.m_gameView.NearWinGetVec, _0x32e32a);
          } else {
            _0x32e32a();
          }
        };
        _0x493489.OnProcess = function (_0x248684) {};
        _0x493489.OnLeave = function () {};
        return _0x4cc83f;
      }(_0x25838e)) || _0x409344;
      _0x252f89._RF.pop();
    }
  };
});
(function (_0x42b7d2) {
  _0x42b7d2("virtual:///prerequisite-imports/game", "chunks:///game.js");
})(function (_0x5804ef, _0x8dbc43) {
  System.register(_0x5804ef, [_0x8dbc43], function (_0x82f8ce, _0x86fa2b) {
    return {
      'setters': [function (_0x48eaa0) {
        var _0x52f097 = {};
        for (var _0x37a07e in _0x48eaa0) {
          if (_0x37a07e !== "default" && _0x37a07e !== "__esModule") {
            _0x52f097[_0x37a07e] = _0x48eaa0[_0x37a07e];
          }
        }
        _0x82f8ce(_0x52f097);
      }],
      'execute': function () {}
    };
  });
});