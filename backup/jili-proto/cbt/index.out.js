System.register("chunks:///game.js", ['cc', "./index-ef2ca10e.js"], function (_0x322a0d, _0x7cd23) {
  'use strict';

  var _0x22a6e5;
  var _0x383aa3;
  var _0x2bb5d6;
  var _0x3a0366;
  var _0xf672d6;
  var _0x1b1168;
  var _0x6ec031;
  var _0x50dd75;
  var _0x4ca901;
  var _0x1bf69d;
  var _0xaf8706;
  var _0x238f11;
  var _0x2e9744;
  var _0x4649cb;
  var _0xd02a32;
  var _0x3856c7;
  var _0xa08b52;
  var _0x308630;
  var _0x507894;
  var _0x1fba44;
  var _0x3d546d;
  var _0x15a9a5;
  var _0x115903;
  var _0x159b4f;
  var _0x5d8116;
  var _0x4148a3;
  var _0x1730e0;
  var _0x1da97a;
  var _0x2f050d;
  var _0x40670a;
  var _0xa658bd;
  var _0x2ed684;
  var _0x56a5b3;
  var _0x590eb0;
  var _0x2a2ef8;
  var _0x59e476;
  var _0x25ddf9;
  var _0x55bd46;
  var _0x310064;
  var _0x305865;
  var _0xee40a9;
  var _0xadbe65;
  var _0x20e905;
  var _0x29ef1f;
  var _0x2c70bf;
  var _0x547b9c;
  var _0x8a7eba;
  var _0x3e30ec;
  var _0x52e3bb;
  var _0x9bda35;
  var _0x5a487f;
  var _0x207583;
  var _0x5215f9;
  var _0x5a3733;
  var _0x95c341;
  var _0x343ac9;
  var _0x41bb36;
  var _0x3e40bd;
  var _0x535e2a;
  var _0x449cab;
  var _0x5870a0;
  var _0xe7486c;
  var _0x2dc9b0;
  return {
    'setters': [function (_0x48000b) {
      _0x22a6e5 = _0x48000b.cclegacy;
      _0x383aa3 = _0x48000b.Enum;
      _0x2bb5d6 = _0x48000b._decorator;
      _0x3a0366 = _0x48000b.SpriteFrame;
      _0xf672d6 = _0x48000b.Node;
      _0x1b1168 = _0x48000b.v3;
      _0x6ec031 = _0x48000b.UITransform;
      _0x50dd75 = _0x48000b.Size;
      _0x4ca901 = _0x48000b.Sprite;
      _0x1bf69d = _0x48000b.log;
      _0xaf8706 = _0x48000b.tween;
      _0x238f11 = _0x48000b.Component;
      _0x2e9744 = _0x48000b.Prefab;
      _0x4649cb = _0x48000b.Animation;
      _0xd02a32 = _0x48000b.instantiate;
      _0x3856c7 = _0x48000b.Label;
      _0xa08b52 = _0x48000b.Tween;
      _0x308630 = _0x48000b.UIOpacity;
      _0x507894 = _0x48000b.ToggleContainer;
      _0x1fba44 = _0x48000b.Button;
      _0x3d546d = _0x48000b.ParticleSystem2D;
      _0x15a9a5 = _0x48000b.SpriteAtlas;
      _0x115903 = _0x48000b.input;
      _0x159b4f = _0x48000b.Input;
      _0x5d8116 = _0x48000b.KeyCode;
      _0x4148a3 = _0x48000b.screen;
      _0x1730e0 = _0x48000b.view;
      _0x1da97a = _0x48000b.ResolutionPolicy;
    }, function (_0x5c63a8) {
      _0x2f050d = _0x5c63a8._;
      _0x40670a = _0x5c63a8.a;
      _0xa658bd = _0x5c63a8.b;
      _0x2ed684 = _0x5c63a8.c;
      _0x56a5b3 = _0x5c63a8.w;
      _0x590eb0 = _0x5c63a8.l;
      _0x2a2ef8 = _0x5c63a8.g;
      _0x59e476 = _0x5c63a8.r;
      _0x25ddf9 = _0x5c63a8.h;
      _0x55bd46 = _0x5c63a8.j;
      _0x310064 = _0x5c63a8.B;
      _0x305865 = _0x5c63a8.i;
      _0xee40a9 = _0x5c63a8.x;
      _0xadbe65 = _0x5c63a8.e;
      _0x20e905 = _0x5c63a8.k;
      _0x29ef1f = _0x5c63a8.y;
      _0x2c70bf = _0x5c63a8.t;
      _0x547b9c = _0x5c63a8.z;
      _0x8a7eba = _0x5c63a8.A;
      _0x3e30ec = _0x5c63a8.s;
      _0x52e3bb = _0x5c63a8.D;
      _0x9bda35 = _0x5c63a8.E;
      _0x5a487f = _0x5c63a8.F;
      _0x207583 = _0x5c63a8.f;
      _0x5215f9 = _0x5c63a8.C;
      _0x5a3733 = _0x5c63a8.n;
      _0x95c341 = _0x5c63a8.G;
      _0x343ac9 = _0x5c63a8.H;
      _0x41bb36 = _0x5c63a8.I;
      _0x3e40bd = _0x5c63a8.J;
      _0x535e2a = _0x5c63a8.K;
      _0x449cab = _0x5c63a8.d;
      _0x5870a0 = _0x5c63a8.L;
      _0xe7486c = _0x5c63a8.M;
      _0x2dc9b0 = _0x5c63a8.N;
    }],
    'execute': function () {
      _0x22a6e5._RF.push({}, "cc629oBgStE6p3cesIpDU+s", "DataStructure", undefined);
      var _0x1c5c63;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, "63265kll2pLeKmCBF7y6O8l", 'Game_Define', undefined);
      (function (_0x1a0610) {
        _0x1a0610[_0x1a0610.WAIT_TOUCH = 0x0] = "WAIT_TOUCH";
        _0x1a0610[_0x1a0610.UNSHOW_PREPARE = 0x1] = "UNSHOW_PREPARE";
        _0x1a0610[_0x1a0610.PLATE_SHOW = 0x2] = 'PLATE_SHOW';
        _0x1a0610[_0x1a0610.FEATURE_SHOW = 0x3] = "FEATURE_SHOW";
        _0x1a0610[_0x1a0610.AWARD = 0x4] = "AWARD";
        _0x1a0610[_0x1a0610.ROUND_SHOW_END = 0x5] = "ROUND_SHOW_END";
        _0x1a0610[_0x1a0610.ROUND_END = 0x6] = 'ROUND_END';
      })(_0x1c5c63 || (_0x1c5c63 = {}));
      var _0x49eab6 = function () {
        function _0x2aff7c() {}
        _0x2aff7c.OnExit = function () {
          this.AudioClips = {
            'Mg_bgm': null,
            'BonusGo': null,
            'BG_bgm': null,
            'BG_End': null,
            'BigWin': null,
            'ReelStart': null,
            'ReelStop': null,
            'Link': null,
            'Bonus1': null,
            'Bonus2': null,
            'Bonus3': null,
            'DoorOpen': null,
            'DoorClose': null,
            'Freespin': null,
            'SmallWin': null,
            'NearWin': null,
            'GetBonus': null,
            'BonusWin': null,
            'bigwin_end': null,
            'Freespin_add': null,
            'ChangeWin': null,
            'DoorOpen_small': null,
            'DoorOpen_turn': null,
            'Guide_Voice': null
          };
        };
        return _0x2aff7c;
      }();
      var _0x5722a5;
      var _0x381875;
      var _0x3c0e79;
      var _0x554da3;
      var _0x366929;
      var _0x2b62de;
      _0x49eab6.Ver = "267";
      _0x49eab6.SPICY_LEVEL = 0x3;
      _0x49eab6.NULL_SYMBOL = 0x0;
      _0x49eab6.BONUS_SYMBOL = 0x5;
      _0x49eab6.SUPER_BONUS_SYMBOL = 0x6;
      _0x49eab6.FREE_GAME_SYMBOL = 0x7;
      _0x49eab6.NEARWIN_COL = 0x2;
      _0x49eab6.ROW_CENTER = 0x3;
      _0x49eab6.MAIN_PLATE_INDEX = 0x0;
      _0x49eab6.ITEM_PATH = "/CBT/common/Item_card";
      _0x49eab6.SPECIAL_WILD = [0x2, 0x3, 0x5];
      _0x49eab6.BASE_WILD = 0x8;
      _0x49eab6.BASE_SPECIAL_SYMBOL = 0x5;
      _0x49eab6.UNAWARD_WILD = 0xb;
      _0x49eab6.TWO_ANI_SYMBOL = [0x4, 0x5, 0x6, 0x8, 0x9, 0xa];
      _0x49eab6.HOPE_PLUS_BASE = 0x32;
      _0x49eab6.HOPE_PLUS_DIFF = 0xa;
      _0x49eab6.HOPE_OPEN_PROP = [0x155, 0x29e, 0x3db, 0x56e, 0x767];
      _0x49eab6.HOPE_OPEN_PROP_BASE = 0x2710;
      _0x49eab6.HOPE_OPEN_RANGE = [0x14, 0x28, 0x3c, 0x50, 0x64];
      _0x49eab6.HOPE_OPEN_LEVEL = [0x1, 0x2, 0x3, 0x4, 0x5];
      _0x49eab6.PAY_TABLE_OFF_NUMBER_LENGTH = [0x5, 0x5, 0x6, 0x6, 0x5, 0x5, 0x6, 0x6];
      _0x49eab6.EVENT_ID = {
        'AWARD_UNDEFINED_ERROR': 0x7d0
      };
      _0x49eab6.GATE_ANI_NAME = {
        'OPEN': "open",
        'CLOSE': 'close',
        'NORMAL': "normal"
      };
      _0x49eab6.BG_NOTE_ANI_NAME = {
        'START': "Bonus_Txt",
        'END': 'Bonus_End'
      };
      _0x49eab6.BG_BONUS_POOL = {
        'OPEN': "Bounty_door_open",
        'WIN': "Bounty_door_win",
        'CLOSE': "Bounty_door_close",
        'UP': 'Bounty_door_up'
      };
      _0x49eab6.BIG_WIN_ANI = {
        'BIG': "Clip_BigWin",
        'MEGA': "Clip_megawin",
        'SUPER': "Clip_superwin"
      };
      _0x49eab6.DELAYTIME = {
        'WIN': 0x1,
        'ADD_BONUS': 1.25,
        'BG_SUM': 0x3,
        'ADD_FREE': 0x2
      };
      _0x49eab6.WIN_SOUND_RATE = [0x24, 0x10, 0x8, 0x1];
      _0x49eab6.WIN_SOUND_RUNNING_TIME = [21.4, 15.4, 0x9, 0.5];
      _0x49eab6.BIG_WIN_SCALE = {
        'true': [0x1, 1.1, 1.2],
        'false': [0.68, 0.748, 0.816]
      };
      _0x49eab6.TRICK_ANI = "open_small_0";
      _0x49eab6.GAMEVIEW_STATE = _0x383aa3(_0x1c5c63);
      _0x49eab6.AudioClips = {
        'Guide_Voice': null,
        'Mg_bgm': null,
        'BonusGo': null,
        'BG_bgm': null,
        'BG_End': null,
        'BigWin': null,
        'ReelStart': null,
        'ReelStop': null,
        'Link': null,
        'Bonus1': null,
        'Bonus2': null,
        'Bonus3': null,
        'DoorOpen': null,
        'DoorClose': null,
        'Freespin': null,
        'SmallWin': null,
        'NearWin': null,
        'GetBonus': null,
        'BonusWin': null,
        'bigwin_end': null,
        'Freespin_add': null,
        'ChangeWin': null,
        'DoorOpen_small': null,
        'DoorOpen_turn': null
      };
      _0x49eab6.StringKey = {
        'CBT_FEATURES_LEFT': 'CBT_FEATURES_LEFT',
        'CBT_FEATURES_RIGHT': "CBT_FEATURES_RIGHT",
        'FREE_GAME_NAME_STRING': "FREE_GAME_NAME_STRING"
      };
      _0x49eab6.AnimEvent = {
        'AnimEvetFunc': "AnimationEvent",
        'GameIntro_Show': "GameIntro_Show",
        'GameIntro_ShowBar': "GameIntro_ShowBar"
      };
      _0x49eab6.ANIM_NAME = {
        'GameIntro_S': "GameIntro_S",
        'GameIntro_L': "GameIntro_L",
        'GameLayer_GameIntro_S': 'GameLayer_GameIntro_S',
        'GameLayer_GameIntro_L': "GameLayer_GameIntro_L"
      };
      _0x49eab6.GAMEINTRO = {
        'Show': 2.5,
        'TotalTimes': 0x4,
        'ShowBar': 2.5
      };
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, 'de1aaExEWJCBJJPIQtgtAI4', 'SlotReels', undefined);
      var _0x265bcb = _0x49eab6.ROW_CENTER;
      var _0x120700 = [0x2, 0x3, 0x4];
      var _0x48a912 = [0x1, 0x2, 0x3, 0x4, 0xb];
      var _0x1bcebd = 0.25;
      var _0x21de87 = _0x2bb5d6.ccclass;
      var _0x120243 = _0x2bb5d6.property;
      _0x5722a5 = _0x120243(_0x3a0366);
      _0x381875 = _0x120243(_0xf672d6);
      _0x554da3 = function (_0x263a7e) {
        function _0x57400a() {
          var _0x5dcfef;
          var _0x2e3398 = arguments.length;
          var _0x2f9b3b = new Array(_0x2e3398);
          for (var _0x89a14b = 0x0; _0x89a14b < _0x2e3398; _0x89a14b++) {
            _0x2f9b3b[_0x89a14b] = arguments[_0x89a14b];
          }
          _0x5dcfef = _0x263a7e.call.apply(_0x263a7e, [this].concat(_0x2f9b3b)) || this;
          _0xa658bd(_0x5dcfef, "m_symbolSpriteFrames", _0x366929, _0x2ed684(_0x5dcfef));
          _0xa658bd(_0x5dcfef, "m_diffPlateVec", _0x2b62de, _0x2ed684(_0x5dcfef));
          _0x5dcfef.m_gameView = null;
          _0x5dcfef.m_symbolSize = null;
          _0x5dcfef.m_viewSize = null;
          _0x5dcfef.m_reelPositionOffset = [_0x1b1168(0x0, 25.625), _0x1b1168(0x0, 25.625), _0x1b1168(0x0, 25.625)];
          _0x5dcfef.m_symbol = new Array();
          _0x5dcfef.m_plateInfo = [[0x0, 0x0, 0x0, 0x0, 0x0, 0x0], [0x0, 0x0, 0x0, 0x0, 0x0, 0x0], [0x0, 0x0, 0x0, 0x0, 0x0, 0x0]];
          _0x5dcfef.m_mainPlate = [[0x1, 0x1, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0xb], [0x1, 0x1, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0xb], [0x1, 0x1, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0xb]];
          _0x5dcfef.m_bonusPlate = [[0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb], [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb], [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb]];
          _0x5dcfef.m_fakePlate = [[], [], []];
          _0x5dcfef.m_reelStopTime = new Array();
          _0x5dcfef.m_isChangeSymbol = new Array();
          _0x5dcfef.m_checkActiveArr = new Array();
          _0x5dcfef.m_isChangeToFinalSymbol = new Array();
          _0x5dcfef.m_time = 0x0;
          _0x5dcfef.m_stopTime = 0x0;
          _0x5dcfef.m_riseTime = 0x0;
          _0x5dcfef.m_spinBufferTime01 = 0.1;
          _0x5dcfef.m_spinBufferTime02 = 0.08;
          _0x5dcfef.m_spinSpeed = 0.18;
          _0x5dcfef.m_upLength = 0x0;
          _0x5dcfef.m_numberOfSymbol = 0x0;
          _0x5dcfef.m_downLength = 0x1e;
          _0x5dcfef.m_timesOfBaseSpin = 0x2;
          _0x5dcfef.m_spinIntervalTimes = 1.5;
          _0x5dcfef.m_timesOfNearWinSpin = 3.4;
          _0x5dcfef.m_spinDelayTime = 0x0;
          _0x5dcfef.m_isStop = false;
          _0x5dcfef.m_isClickStopBtn = false;
          _0x5dcfef.m_playStopSound = null;
          _0x5dcfef.m_playBonusComing = null;
          _0x5dcfef.m_isPlaySound = [false, false, false];
          _0x5dcfef.m_isBonusComing = [false, false, false];
          _0x5dcfef.m_reelSoundId = null;
          _0x5dcfef.m_lockColumn = new Array();
          _0x5dcfef.m_isAward = false;
          _0x5dcfef.m_isTest = false;
          _0x5dcfef.m_reelPreTime = new Array();
          _0x5dcfef.m_errorMsgCount = false;
          _0x5dcfef.m_nearWinStartFunc = null;
          _0x5dcfef.m_nearWinEndFunc = null;
          _0x5dcfef.m_isCbSent = false;
          _0x5dcfef.m_moveDiff = 0x0;
          _0x5dcfef.m_isMoveDiff = [false, false, false];
          _0x5dcfef.m_isStopSpecialNotice = false;
          _0x5dcfef.m_hardStopIntervalTime = 0x0;
          _0x5dcfef.m_hardStopSpinSpeed = 0x0;
          return _0x5dcfef;
        }
        _0x40670a(_0x57400a, _0x263a7e);
        var _0x2d9a73 = _0x57400a.prototype;
        _0x2d9a73.onLoad = function () {
          var _0x431c3 = this;
          this.m_fakePlate = this.m_mainPlate;
          this.m_viewSize = this.node.getComponent(_0x6ec031).contentSize;
          this.m_symbolSize = new _0x50dd75(this.m_viewSize.width / 0x3, 172.5);
          this.m_moveDiff = -this.m_symbolSize.height / 0x2;
          for (var _0x13409e = 0x0; _0x13409e < 0x3; _0x13409e++) {
            this.m_lockColumn.push(false);
            this.m_reelStopTime.push(null);
            this.m_reelPreTime.push(null);
            var _0x57f780 = new Array();
            for (var _0x1cba29 = 0x0; _0x1cba29 < 0x6; _0x1cba29++) {
              var _0x2e348b = _0x48a912[Math.floor(Math.random() * _0x48a912.length)];
              var _0x71c29c = new _0xf672d6();
              _0x71c29c.name = _0x13409e + '_' + _0x1cba29;
              _0x71c29c.addComponent(_0x4ca901);
              this.m_diffPlateVec[_0x13409e].addChild(_0x71c29c);
              _0x71c29c.name = String(this.m_numberOfSymbol);
              this.m_numberOfSymbol += 0x1;
              this.m_isChangeToFinalSymbol.push(false);
              _0x71c29c.getComponent(_0x4ca901).spriteFrame = this.m_symbolSpriteFrames[_0x2e348b];
              this.m_plateInfo[_0x13409e][_0x1cba29] = _0x2e348b;
              if (_0x1cba29 % 0x2 != 0x0) {
                _0x71c29c.getComponent(_0x4ca901).spriteFrame = this.m_symbolSpriteFrames[0x0];
              }
              _0x57f780.push(_0x71c29c);
              var _0x2cde80 = this.m_symbolSize.width * (_0x13409e + 0.5) + this.m_reelPositionOffset[_0x13409e].x - this.m_viewSize.width / 0x2;
              var _0x36b811 = this.m_symbolSize.height / 0x2 * (0x2 - _0x1cba29 + 2.5) + this.m_reelPositionOffset[_0x13409e].y - this.m_viewSize.height / 0x2;
              this.m_diffPlateVec[_0x13409e].setPosition(_0x1b1168(_0x2cde80, 0x0));
              _0x71c29c.position = _0x1b1168(0x0, _0x36b811);
            }
            this.m_symbol.push(_0x57f780);
          }
          var _0x2aa06c = function () {
            var _0x1af7b6 = _0x56a5b3.TempoSetting.Crazy777;
            _0x431c3.m_riseTime = _0x1af7b6.BASE.RISE_TIME;
            _0x431c3.m_upLength = _0x1af7b6.BASE.UP_LENGTH;
            _0x431c3.m_spinBufferTime01 = _0x1af7b6.BASE.SPIN_BUFFER_TIME_01;
            _0x431c3.m_spinBufferTime02 = _0x1af7b6.BASE.SPIN_BUFFER_TIME_02;
            _0x431c3.m_downLength = _0x1af7b6.BASE.DOWN_LENGTH;
            _0x431c3.m_spinSpeed = _0x1af7b6.BASE.SPIN_SPEED;
            _0x431c3.m_timesOfBaseSpin = _0x1af7b6.BASE.TIMES_OF_BASE_SPIN;
            _0x431c3.m_spinIntervalTimes = _0x1af7b6.BASE.SPIN_INTERVAL_TIMES;
            _0x431c3.m_timesOfNearWinSpin = _0x1af7b6.BASE.TIMES_OF_NEAR_WIN_SPIN;
            _0x431c3.m_spinDelayTime = _0x1af7b6.BASE.SPIN_DELAY_TIME;
            _0x431c3.m_hardStopIntervalTime = _0x1af7b6.BASE.HARD_STOP_INTERVAL_TIME;
            _0x431c3.m_hardStopSpinSpeed = _0x1af7b6.BASE.HARD_STOP_SPIN_SPEED;
            _0x1bcebd = _0x1af7b6.BASE.SPIN_SPEED;
          };
          _0x2aa06c();
          _0x56a5b3.AddCb(_0x2aa06c);
        };
        _0x2d9a73.Init = function (_0x216bff) {
          this.m_gameView = _0x216bff;
        };
        _0x2d9a73.StartSpin = function (_0x402e00) {
          if (undefined === _0x402e00) {
            _0x402e00 = true;
          }
          _0x1bf69d("StartSpin");
          this.m_spinSpeed = _0x1bcebd;
          this.m_time = 0x0;
          this.m_stopTime = 0x0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isPlaySound = [false, false, false];
          this.m_isBonusComing = [false, false, false];
          this.m_isMoveDiff = [false, false, false];
          this.m_isStopSpecialNotice = false;
          for (var _0x40495c = 0x0; _0x40495c < this.m_diffPlateVec.length; _0x40495c++) {
            this.m_diffPlateVec[_0x40495c].setPosition(_0x1b1168(this.m_diffPlateVec[_0x40495c].position.x, 0x0));
          }
          if (_0x402e00) {
            for (var _0x2bde06 = 0x0; _0x2bde06 < 0x3; _0x2bde06++) {
              this.m_lockColumn[_0x2bde06] = false;
            }
          }
          for (var _0x276bd6 = 0x0; _0x276bd6 < 0x3; _0x276bd6++) {
            this.m_reelStopTime[_0x276bd6] = null;
            this.m_reelPreTime[_0x276bd6] = null;
          }
          for (var _0x4af2e7 = 0x0; _0x4af2e7 < this.m_isChangeToFinalSymbol.length; _0x4af2e7++) {
            this.m_isChangeToFinalSymbol[_0x4af2e7] = false;
          }
          for (var _0xf0a0a3 = 0x0; _0xf0a0a3 < 18; _0xf0a0a3++) {
            this.m_isChangeSymbol.push(true);
          }
          for (var _0x6c9202 = 0x0; _0x6c9202 < 18; _0x6c9202++) {
            this.m_checkActiveArr[_0x6c9202] = null;
          }
          this.m_reelSoundId = _0x590eb0.Play(_0x49eab6.AudioClips.ReelStart);
        };
        _0x2d9a73.SetIsClickStopBtn = function () {
          this.m_isClickStopBtn = true;
          this.StopSpecialNotice();
          if (0x0 != this.m_stopTime) {
            this.m_spinSpeed = this.m_hardStopSpinSpeed;
            var _0x5b09c6 = Math.ceil(this.m_time / this.m_spinSpeed);
            _0x5b09c6 = _0x5b09c6 > 0x0 ? _0x5b09c6 : 0x1;
            var _0x248933 = _0x56a5b3.TempoSetting.Crazy777.SPEED_UP_STOP_TIME(0x3, this.m_time);
            if (_0x248933 < this.m_stopTime) {
              this.m_stopTime = _0x2a2ef8.strip(_0x248933);
            }
            for (var _0xcb5618 = 0x0; _0xcb5618 < 0x3; _0xcb5618++) {
              var _0x1cc250 = _0x5b09c6 * this.m_spinSpeed + this.m_hardStopIntervalTime * this.m_spinSpeed * _0xcb5618;
              if (this.m_reelStopTime[_0xcb5618] > _0x1cc250) {
                this.m_reelStopTime[_0xcb5618] = _0x2a2ef8.strip(_0x1cc250);
                this.m_reelPreTime[_0xcb5618] = _0x2a2ef8.strip((_0x5b09c6 - 0x1) * this.m_spinSpeed + _0x2a2ef8.times(this.m_hardStopIntervalTime, this.m_spinSpeed, _0xcb5618));
              }
            }
          }
        };
        _0x2d9a73.Spin = function (_0x1879fb) {
          this.m_time = _0x2a2ef8.strip(this.m_time + _0x1879fb);
          if (!this.m_isStop) {
            this.Spin_RealSpinMultiple(_0x1879fb);
            if (this.m_time >= this.m_stopTime && 0x0 != this.m_stopTime && this.IsAllSymbolChangeToRight()) {
              this.m_isStop = true;
              if (this.m_nearWinEndFunc && this.m_isCbSent) {
                this.m_nearWinEndFunc();
              }
              if (this.m_reelSoundId) {
                _0x590eb0.Stop(this.m_reelSoundId);
                this.m_reelSoundId = null;
              }
            }
          }
        };
        _0x2d9a73.Spin_RealSpinMultiple = function (_0x3267d8) {
          var _0x72f78b = this.m_symbolSize.height * 3;
          for (var _0x3a7b25 = 0x0; _0x3a7b25 < 0x3; _0x3a7b25++) {
            var _0x5244ee = this.m_spinSpeed;
            var _0x1ba9e7 = this.m_time;
            var _0x340ed0 = this.m_reelStopTime[_0x3a7b25];
            var _0x55649e = this.m_reelPreTime[_0x3a7b25];
            var _0x245185 = this.m_riseTime * 0x3;
            if (this.m_gameView.IsNearWin && this.m_reelStopTime[_0x49eab6.NEARWIN_COL - 0x1] && _0x3a7b25 == _0x49eab6.NEARWIN_COL && this.m_time > this.m_reelStopTime[_0x49eab6.NEARWIN_COL - 0x1]) {
              _0x5244ee = this.m_spinSpeed / 0x2;
              if (!this.m_isCbSent) {
                this.m_isCbSent = true;
                if (this.m_nearWinStartFunc) {
                  this.m_nearWinStartFunc();
                }
              }
            }
            for (var _0xe9cdc5 = 0x0; _0xe9cdc5 < 0x6; _0xe9cdc5++) {
              this.m_symbolSize.width;
              this.m_reelPositionOffset[_0x3a7b25].x;
              this.m_viewSize.width;
              var _0x3cecf9 = this.m_symbolSize.height / 0x2 * (0x2 - _0xe9cdc5 + 2.5) + this.m_reelPositionOffset[_0x3a7b25].y - this.m_viewSize.height / 0x2;
              var _0x2377f1 = this.m_symbolSize.height / 0x2 * (0x6 - _0xe9cdc5 - 0.5);
              if (_0x1ba9e7 < this.m_riseTime * (_0x3a7b25 + 0x1)) {
                var _0x55ba8d = (_0x1ba9e7 - this.m_riseTime * _0x3a7b25) / this.m_riseTime * this.m_upLength;
                this.m_symbol[_0x3a7b25][_0xe9cdc5].position = _0x1b1168(0x0, _0x3cecf9 + _0x55ba8d);
              } else {
                if (_0x1ba9e7 < _0x245185) {
                  this.m_symbol[_0x3a7b25][_0xe9cdc5].position = _0x1b1168(0x0, _0x3cecf9 + this.m_upLength);
                } else {
                  if (null == _0x340ed0 || _0x1ba9e7 < _0x55649e + _0x245185) {
                    var _0x6e8489 = (_0x1ba9e7 - _0x245185) % _0x5244ee / _0x5244ee * this.m_symbolSize.height * 0x6 / 0x2;
                    var _0x40e7e0 = this.GetMovelength(_0x6e8489, _0x2377f1, _0x72f78b, _0x3a7b25, this.m_symbol[_0x3a7b25][_0xe9cdc5].name, this.m_symbol[_0x3a7b25][_0xe9cdc5], false);
                    this.m_symbol[_0x3a7b25][_0xe9cdc5].position = _0x1b1168(0x0, _0x3cecf9 - _0x40e7e0);
                  } else {
                    if (_0x1ba9e7 < _0x340ed0 + _0x245185) {
                      var _0x1c61f4 = (_0x1ba9e7 - _0x245185) % _0x5244ee / _0x5244ee * this.m_symbolSize.height * 0x6 / 0x2;
                      var _0x340f0d = this.GetMovelength(_0x1c61f4, _0x2377f1, _0x72f78b, _0x3a7b25, this.m_symbol[_0x3a7b25][_0xe9cdc5].name, this.m_symbol[_0x3a7b25][_0xe9cdc5], false);
                      this.m_symbol[_0x3a7b25][_0xe9cdc5].position = _0x1b1168(0x0, _0x3cecf9 - _0x340f0d);
                    } else {
                      if (_0x1ba9e7 < _0x340ed0 + _0x245185 + this.m_spinBufferTime01 && !this.m_isClickStopBtn) {
                        this.CheckPlayStopSound(_0x3a7b25, _0xe9cdc5);
                        var _0x11b49f = (_0x1ba9e7 - _0x340ed0 - _0x245185) / this.m_spinBufferTime01 * this.m_downLength;
                        this.m_symbol[_0x3a7b25][_0xe9cdc5].position = _0x1b1168(0x0, _0x3cecf9 - _0x11b49f);
                        this.CheckChangeToFinalSymbol(_0x3a7b25, this.m_symbol[_0x3a7b25][_0xe9cdc5].name, this.m_symbol[_0x3a7b25][_0xe9cdc5], true);
                      } else {
                        if (_0x1ba9e7 < _0x340ed0 + _0x245185 + this.m_spinBufferTime01 + this.m_spinBufferTime02 && !this.m_isClickStopBtn) {
                          this.CheckPlayStopSound(_0x3a7b25, _0xe9cdc5);
                          var _0x5953b1 = (_0x1ba9e7 - _0x340ed0 - _0x245185 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                          this.m_symbol[_0x3a7b25][_0xe9cdc5].position = _0x1b1168(0x0, _0x3cecf9 - this.m_downLength + _0x5953b1);
                          this.CheckChangeToFinalSymbol(_0x3a7b25, this.m_symbol[_0x3a7b25][_0xe9cdc5].name, this.m_symbol[_0x3a7b25][_0xe9cdc5], true);
                        } else {
                          this.CheckChangeToFinalSymbol(_0x3a7b25, this.m_symbol[_0x3a7b25][_0xe9cdc5].name, this.m_symbol[_0x3a7b25][_0xe9cdc5], true);
                          this.CheckPlayStopSound(_0x3a7b25, _0xe9cdc5);
                          this.m_symbol[_0x3a7b25][_0xe9cdc5].position = _0x1b1168(0x0, _0x3cecf9);
                          this.CheckPlayBonusComing(_0x3a7b25, _0xe9cdc5);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        };
        _0x2d9a73.GetMovelength = function (_0x188b7b, _0x2ea6b2, _0x3743db, _0x1ebb5a, _0x47794e, _0x58a972, _0x5b8cda) {
          if (_0x188b7b >= _0x2ea6b2) {
            _0x188b7b -= _0x3743db;
            if (this.m_isChangeSymbol[_0x47794e]) {
              this.m_isChangeSymbol[_0x47794e] = false;
              this.ChangeSymbol(_0x1ebb5a, _0x58a972, _0x5b8cda);
            }
          } else {
            this.m_isChangeSymbol[_0x47794e] = true;
          }
          return _0x188b7b;
        };
        _0x2d9a73.ChangeSymbol = function (_0x5b445c, _0x449fc3, _0x571c02) {
          var _0x34edec = Number(_0x449fc3.name);
          var _0x44b2fa = this.m_reelPreTime[_0x5b445c];
          var _0x1e685e = this.m_reelStopTime[_0x5b445c];
          var _0x3139f7 = _0x34edec >= 0x0 ? _0x34edec % 0x6 : (Math.abs(_0x34edec) - 0x1) % 0x6;
          var _0x26a586 = _0x34edec >= 0x0 ? Math.ceil((_0x34edec - _0x3139f7) / 0x6) : Math.floor((_0x34edec + _0x3139f7) / 0x6);
          if (_0x1e685e) {
            this.m_spinSpeed;
          }
          this.m_riseTime;
          if (_0x571c02) {
            var _0x571034 = _0x449fc3.getComponent(_0x4ca901);
            var _0x5a9edc = this.m_plateInfo[_0x26a586][_0x3139f7];
            _0x571034.spriteFrame = this.m_symbolSpriteFrames[_0x5a9edc];
          } else {
            if (_0x44b2fa && (this.m_time >= _0x44b2fa || Math.abs(this.m_time - _0x44b2fa) < 0.017)) {
              var _0x560371 = _0x449fc3.getComponent(_0x4ca901);
              var _0x24af45 = this.m_plateInfo[_0x26a586][_0x3139f7];
              _0x560371.spriteFrame = this.m_symbolSpriteFrames[_0x24af45];
            } else {
              var _0x43f2f7 = _0x449fc3.getComponent(_0x4ca901);
              var _0x16bc2f = this.m_fakePlate[_0x26a586][Math.floor(Math.random() * this.m_fakePlate[_0x26a586].length)];
              _0x43f2f7.spriteFrame = this.m_symbolSpriteFrames[_0x16bc2f];
              if (_0x3139f7 % 0x2 != 0x0) {
                _0x43f2f7.spriteFrame = this.m_symbolSpriteFrames[0x0];
              }
            }
          }
        };
        _0x2d9a73.IsNullSymbol = function (_0x1f7b07) {
          return _0x1f7b07 == _0x49eab6.NULL_SYMBOL;
        };
        _0x2d9a73.CheckChangeToFinalSymbol = function (_0x4e9bfe, _0x3bd9a8, _0x2e5bee, _0x29dfa3) {
          if (undefined === _0x29dfa3) {
            _0x29dfa3 = false;
          }
          if (!this.m_isChangeToFinalSymbol[_0x3bd9a8]) {
            this.m_isChangeToFinalSymbol[_0x3bd9a8] = true;
            this.ChangeSymbol(_0x4e9bfe, _0x2e5bee, _0x29dfa3);
          }
        };
        _0x2d9a73.SetPlayStopSoundFunction = function (_0x2af5f3) {
          this.m_playStopSound = _0x2af5f3;
        };
        _0x2d9a73.SetPlayBonusComingFunction = function (_0x505896) {
          this.m_playBonusComing = _0x505896;
        };
        _0x2d9a73.CheckPlayStopSound = function (_0x12f448, _0x2a483c) {
          if (this.m_playStopSound && !this.m_isPlaySound[_0x12f448] && 0x0 == _0x2a483c) {
            this.m_isPlaySound[_0x12f448] = true;
            this.m_playStopSound(_0x12f448);
          }
        };
        _0x2d9a73.CheckPlayBonusComing = function (_0x1e1bf6, _0x27b11b) {
          if (this.m_playBonusComing && !this.m_isBonusComing[_0x1e1bf6] && _0x27b11b == 5) {
            this.m_isBonusComing[_0x1e1bf6] = true;
            this.m_playBonusComing(_0x1e1bf6);
          }
        };
        _0x2d9a73.SetPlateInfo = function (_0x237202) {
          this.m_plateInfo = this.CompletePlate(_0x237202);
          var _0x3842e3 = this.m_riseTime * 0x6;
          var _0x40c11e = Math.ceil((this.m_time - _0x3842e3) / this.m_spinSpeed) + 0x1;
          if (this.m_isClickStopBtn) {
            this.m_stopTime = _0x2a2ef8.strip(this.m_spinSpeed * _0x40c11e + this.m_spinDelayTime + _0x3842e3);
            for (var _0x2dde47 = 0x0; _0x2dde47 < 0x3; _0x2dde47++) {
              this.m_reelStopTime[_0x2dde47] = _0x2a2ef8.strip(this.m_spinSpeed * _0x40c11e);
              this.m_reelPreTime[_0x2dde47] = _0x2a2ef8.strip(this.m_spinSpeed * (_0x40c11e - 0x1));
            }
          } else {
            this.m_stopTime = _0x2a2ef8.strip(this.m_spinSpeed * (_0x40c11e + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * 2 + this.m_spinDelayTime + _0x3842e3 + this.m_spinBufferTime01 + this.m_spinBufferTime02);
            for (var _0x2141a8 = 0x0; _0x2141a8 < 0x3; _0x2141a8++) {
              this.m_reelStopTime[_0x2141a8] = _0x2a2ef8.strip(this.m_spinSpeed * (_0x40c11e + this.m_timesOfBaseSpin) + this.m_spinIntervalTimes * this.m_spinSpeed * _0x2141a8);
              this.m_reelPreTime[_0x2141a8] = _0x2a2ef8.strip(this.m_spinSpeed * (_0x40c11e + this.m_timesOfBaseSpin - 0x1) + this.m_spinIntervalTimes * this.m_spinSpeed * _0x2141a8);
            }
            if (this.m_gameView.IsNearWin) {
              this.m_stopTime = this.m_stopTime + this.m_timesOfNearWinSpin - this.m_timesOfBaseSpin;
              this.m_reelStopTime[_0x49eab6.NEARWIN_COL] = this.m_reelStopTime[_0x49eab6.NEARWIN_COL] + this.m_timesOfNearWinSpin - this.m_timesOfBaseSpin;
            }
          }
        };
        _0x2d9a73.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x2d9a73.GetSymbolByIndex = function (_0x326945) {
          return this.m_symbol[_0x326945.x][_0x326945.y];
        };
        _0x2d9a73.HideColumnSymbol = function (_0x535d9c) {
          if (_0x535d9c >= 0x0 && _0x535d9c < 0x3) {
            for (var _0x2313d5 = 0x0; _0x2313d5 < 0x6; _0x2313d5++) {
              this.m_symbol[_0x535d9c][_0x2313d5].active = false;
            }
            this.m_lockColumn[_0x535d9c] = true;
          }
        };
        _0x2d9a73.LockColumn = function (_0x5a0cdf) {
          if (_0x5a0cdf >= 0x0 && _0x5a0cdf < 0x3) {
            this.m_lockColumn[_0x5a0cdf] = true;
          }
        };
        _0x2d9a73.CompletePlate = function (_0x20cace) {
          var _0x443d45;
          for (var _0x4d05e4 = 0x0; _0x4d05e4 < 0x3; _0x4d05e4++) {
            for (var _0x38168d = 0x0; _0x38168d < 0x6; _0x38168d++) {
              if (this.CheckRealRow(_0x38168d)) {
                this.m_plateInfo[_0x4d05e4][_0x38168d] = _0x20cace[_0x4d05e4][_0x38168d - 0x2];
              } else {
                if (0x2 == Math.abs(_0x38168d - _0x265bcb) && _0x20cace[_0x4d05e4][0x1] != _0x49eab6.NULL_SYMBOL || 0x3 == Math.abs(_0x38168d - _0x265bcb) && _0x20cace[_0x4d05e4][0x1] == _0x49eab6.NULL_SYMBOL) {
                  var _0x4743d9 = this.m_fakePlate[_0x4d05e4][Math.floor(0x64 * Math.random()) % this.m_fakePlate[_0x4d05e4].length];
                  this.m_plateInfo[_0x4d05e4][_0x38168d] = _0x4743d9;
                } else {
                  this.m_plateInfo[_0x4d05e4][_0x38168d] = _0x49eab6.NULL_SYMBOL;
                }
              }
            }
          }
          _0x443d45 = this.m_plateInfo;
          var _0x1846cb = [[0x0, 0x0, 0x0, 0x0, 0x0, 0x0], [0x0, 0x0, 0x0, 0x0, 0x0, 0x0], [0x0, 0x0, 0x0, 0x0, 0x0, 0x0]];
          for (var _0x514627 = 0x0; _0x514627 < _0x20cace.length; _0x514627++) {
            if (_0x20cace[_0x514627][0x1] != _0x49eab6.NULL_SYMBOL) {
              for (var _0x2e3c46 = 0x0; _0x2e3c46 < _0x443d45[_0x514627].length; _0x2e3c46++) {
                if (_0x2e3c46 - 0x1 >= 0x0) {
                  _0x1846cb[_0x514627][_0x2e3c46 - 0x1] = _0x443d45[_0x514627][_0x2e3c46];
                } else {
                  _0x1846cb[_0x514627][0x5] = _0x443d45[_0x514627][0x0];
                }
              }
              var _0x5eca13 = this.m_diffPlateVec[_0x514627].position.x;
              var _0x3fed23 = this.m_diffPlateVec[_0x514627].position.y;
              _0xaf8706(this.m_diffPlateVec[_0x514627]).to(0.02, {
                'position': _0x1b1168(_0x5eca13, _0x3fed23 + this.m_moveDiff)
              }).start();
              this.m_isMoveDiff[_0x514627] = true;
            } else {
              _0x1846cb[_0x514627] = _0x443d45[_0x514627];
            }
          }
          if (this.m_gameView.IsFakeNearWin) {
            if (this.m_isMoveDiff[_0x49eab6.NEARWIN_COL]) {
              var _0x371b0b = Math.floor(0x2 * Math.random());
              _0x1846cb[_0x49eab6.NEARWIN_COL][[0x0, 0x4][_0x371b0b]] = _0x49eab6.BONUS_SYMBOL;
            } else {
              _0x1846cb[_0x49eab6.NEARWIN_COL][0x0] = _0x49eab6.BONUS_SYMBOL;
            }
          }
          return _0x443d45 = _0x1846cb;
        };
        _0x2d9a73.CheckRealRow = function (_0x401b48) {
          var _0x20cfe4 = false;
          for (var _0x3a1dea = 0x0; _0x3a1dea < _0x120700.length; _0x3a1dea++) {
            if (_0x401b48 == _0x120700[_0x3a1dea]) {
              _0x20cfe4 = true;
              break;
            }
          }
          return _0x20cfe4;
        };
        _0x2d9a73.ActiveAwardSymbol = function (_0x550977, _0x350bf1, _0x545637) {
          var _0x5f5cad = 0x0;
          if (this.m_isMoveDiff[_0x350bf1]) {
            _0x5f5cad = -0x1;
          }
          this.m_symbol[_0x350bf1][_0x545637 + 0x2 + _0x5f5cad].active = _0x550977;
        };
        _0x2d9a73.GetAwardSymbolPosition = function (_0xf71285, _0x4548a6) {
          var _0xde7c38 = _0x1b1168(0x0, 0x0);
          var _0x3cc4a8 = 0x2;
          if (this.m_isMoveDiff[_0xf71285]) {
            _0x3cc4a8 = 0x1;
          }
          _0xde7c38.x = this.m_symbol[_0xf71285][_0x4548a6 + _0x3cc4a8].position.x + this.m_diffPlateVec[_0xf71285].position.x;
          _0xde7c38.y = this.m_symbol[_0xf71285][_0x4548a6 + 0x2].position.y;
          return _0xde7c38;
        };
        _0x2d9a73.ChangeReels = function (_0x51bd46) {
          this.m_fakePlate = _0x51bd46 ? this.m_bonusPlate : this.m_mainPlate;
        };
        _0x2d9a73.SetPlateSymbol = function (_0x53b2a5) {
          if (0x0 == _0x53b2a5.length) {
            for (var _0x96d04e = 0x0; _0x96d04e < 0x3; _0x96d04e++) {
              this.m_lockColumn[_0x96d04e] = false;
              this.m_reelStopTime[_0x96d04e] = null;
              this.m_reelPreTime[_0x96d04e] = null;
              for (var _0x135e74 = 0x0; _0x135e74 < 0x6; _0x135e74++) {
                var _0x535e3c = _0x48a912[Math.floor(Math.random() * _0x48a912.length)];
                this.m_symbol[_0x96d04e][_0x135e74].getComponent(_0x4ca901).spriteFrame = _0x135e74 % 0x2 != 0x0 ? this.m_symbolSpriteFrames[0x0] : this.m_symbolSpriteFrames[_0x535e3c];
                this.m_symbolSize.width;
                this.m_reelPositionOffset[_0x96d04e].x;
                this.m_viewSize.width;
                var _0x1f68ed = this.m_symbolSize.height / 0x2 * (0x2 - _0x135e74 + 2.5) + this.m_reelPositionOffset[_0x96d04e].y - this.m_viewSize.height / 0x2;
                this.m_symbol[_0x96d04e][_0x135e74].position = _0x1b1168(0x0, _0x1f68ed);
              }
            }
          } else {
            var _0x109ac2 = this.CompletePlate(_0x53b2a5);
            for (var _0x57d0fb = 0x0; _0x57d0fb < 0x3; _0x57d0fb++) {
              this.m_lockColumn[_0x57d0fb] = false;
              this.m_reelStopTime[_0x57d0fb] = null;
              this.m_reelPreTime[_0x57d0fb] = null;
              for (var _0x47e9b9 = 0x0; _0x47e9b9 < 0x6; _0x47e9b9++) {
                this.m_symbol[_0x57d0fb][_0x47e9b9].getComponent(_0x4ca901).spriteFrame = this.m_symbolSpriteFrames[_0x109ac2[_0x57d0fb][_0x47e9b9]];
                this.m_symbolSize.width;
                this.m_reelPositionOffset[_0x57d0fb].x;
                this.m_viewSize.width;
                var _0x550d34 = this.m_symbolSize.height / 0x2 * (0x2 - _0x47e9b9 + 2.5) + this.m_reelPositionOffset[_0x57d0fb].y - this.m_viewSize.height / 0x2;
                this.m_symbol[_0x57d0fb][_0x47e9b9].position = _0x1b1168(0x0, _0x550d34);
              }
            }
          }
        };
        _0x2d9a73.IsAllSymbolChangeToRight = function () {
          var _0x34b6ec = true;
          if (!this.m_errorMsgCount) {
            for (var _0x319b29 = 0x0; _0x319b29 < 0x12; _0x319b29++) {
              if (!this.m_isChangeToFinalSymbol[_0x319b29]) {
                var _0x66de = 'a';
                for (var _0x56a2f5 = 0x0; _0x56a2f5 < 0x3; _0x56a2f5++) {
                  for (var _0x1dbd1b = 0x0; _0x1dbd1b < 0x6; _0x1dbd1b++) {
                    _0x66de = _0x66de + this.m_symbol[_0x56a2f5][_0x1dbd1b].getComponent(_0x4ca901).spriteFrame.name + ',';
                  }
                }
                var _0x2e0504 = 'this.m_reelStopTime';
                for (var _0x442abd = 0x0; _0x442abd < this.m_reelStopTime.length; _0x442abd++) {
                  _0x2e0504 = _0x2e0504 + this.m_reelStopTime[_0x442abd] + ',';
                }
                var _0x2c7125 = "this.m_reelPreTime";
                for (var _0x1b2dd7 = 0x0; _0x1b2dd7 < this.m_reelPreTime.length; _0x1b2dd7++) {
                  _0x2c7125 = _0x2c7125 + this.m_reelPreTime[_0x1b2dd7] + ',';
                }
                this.m_errorMsgCount = true;
                _0x34b6ec = false;
                break;
              }
            }
          }
          return _0x34b6ec;
        };
        _0x2d9a73.SetNearWinCb = function (_0x5fea9d, _0x461283) {
          this.m_isCbSent = false;
          this.m_nearWinStartFunc = _0x5fea9d;
          this.m_nearWinEndFunc = _0x461283;
        };
        _0x2d9a73.ShowSpecialNotice = function (_0x22e177, _0x4f091e) {
          if (!this.m_gameView.IsHardStop && !this.m_isStopSpecialNotice) {
            var _0xeb7afd = 0x0;
            if (this.m_isMoveDiff[_0x22e177]) {
              _0xeb7afd = -0x1;
            }
            _0xaf8706(this.m_symbol[_0x22e177][_0x4f091e + 0x2 + _0xeb7afd]).to(0.06666666666666667, {
              'scale': _0x1b1168(1.15, 1.15)
            }).to(0.03333333333333333, {
              'scale': _0x1b1168(1.14, 1.14)
            }).to(0.03333333333333333, {
              'scale': _0x1b1168(1.05, 1.05)
            }).to(0.041666666666666664, {
              'scale': _0x1b1168(1.02, 1.02)
            }).to(0.058333333333333334, {
              'scale': _0x1b1168(0x1, 0x1)
            }).start();
          }
        };
        _0x2d9a73.StopSpecialNotice = function () {
          this.m_isStopSpecialNotice = true;
        };
        _0x2d9a73.CheckSymbolState = function () {
          if (this.m_isTest) {
            this.m_isTest = false;
            var _0x3e71df = new Array();
            for (var _0x15fbad = 0x0; _0x15fbad < 0x3; _0x15fbad++) {
              for (var _0x52f2d3 = 0x0; _0x52f2d3 < 0x6; _0x52f2d3++) {
                if (0x0 == this.m_symbol[_0x15fbad][_0x52f2d3].position.y) {
                  if (_0x52f2d3 == _0x265bcb) {
                    _0x3e71df.push(true);
                  } else {
                    _0x3e71df.push(false);
                    _0x59e476.ShowMessageBox(String(this.m_symbol[_0x15fbad][_0x52f2d3].name) + "   " + String(this.m_symbol[_0x15fbad][_0x52f2d3].active) + "   " + String(this.m_symbol[_0x15fbad][_0x52f2d3].getComponent(_0x4ca901).spriteFrame.name), "停輪錯誤");
                    this.m_gameView.StopAutoPlay();
                  }
                  var _0x4f61c1 = this.m_symbol[_0x15fbad][_0x52f2d3].getComponent(_0x4ca901);
                  if (this.m_plateInfo[_0x15fbad][_0x265bcb] === _0x49eab6.NULL_SYMBOL) {
                    if (_0x4f61c1.spriteFrame.name !== this.m_symbolSpriteFrames[0x0].name || this.m_symbol[_0x15fbad][_0x52f2d3].active) {
                      _0x59e476.ShowMessageBox(String(this.m_symbol[_0x15fbad][_0x52f2d3].name) + "   " + String(this.m_symbol[_0x15fbad][_0x52f2d3].active) + "   " + String(this.m_symbol[_0x15fbad][_0x52f2d3].getComponent(_0x4ca901).spriteFrame) + "  空", "顯示異常");
                      var _0x1febef = new Array();
                      for (var _0x5a2848 = 0x0; _0x5a2848 < 0x3; _0x5a2848++) {
                        var _0x223120 = new Array();
                        for (var _0x4cb09b = 0x0; _0x4cb09b < 0x6; _0x4cb09b++) {
                          var _0x40f235 = this.m_symbol[_0x5a2848][_0x4cb09b].getComponent(_0x4ca901);
                          if (null === _0x40f235.spriteFrame) {
                            _0x223120.push("null");
                          } else {
                            _0x223120.push(_0x40f235.spriteFrame.name);
                          }
                        }
                        _0x1febef.push(_0x223120);
                      }
                      this.m_gameView.StopAutoPlay();
                    } else {
                      ;
                    }
                  } else if (!(_0x4f61c1.spriteFrame.name === this.m_symbolSpriteFrames[this.m_plateInfo[_0x15fbad][_0x265bcb]].name && this.m_symbol[_0x15fbad][_0x52f2d3].active)) {
                    _0x59e476.ShowMessageBox(String(this.m_symbol[_0x15fbad][_0x52f2d3].name) + "   " + String(this.m_symbol[_0x15fbad][_0x52f2d3].active) + "   " + String(this.m_symbol[_0x15fbad][_0x52f2d3].getComponent(_0x4ca901).spriteFrame.name) + "  有", '顯示異常');
                    this.m_gameView.StopAutoPlay();
                  }
                }
              }
            }
          }
        };
        return _0x57400a;
      }(_0x238f11);
      _0x366929 = _0x2f050d(_0x554da3.prototype, "m_symbolSpriteFrames", [_0x5722a5], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0x2b62de = _0x2f050d(_0x554da3.prototype, "m_diffPlateVec", [_0x381875], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return new Array();
        }
      });
      var _0x1961bf = _0x21de87(_0x3c0e79 = _0x554da3) || _0x3c0e79;
      var _0x4ea1c0;
      var _0x50ff78;
      var _0x117587;
      var _0xe286b2;
      var _0x5cf96e;
      var _0x3c4f1d;
      var _0x49aad5;
      var _0x486207;
      var _0xe8354;
      var _0xb21e0f;
      var _0xee4df6;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, "0eb65MCx2hPgakNMH1hlLym", 'EffectPlate', undefined);
      var _0x1d9060 = _0x2bb5d6.property;
      _0x4ea1c0 = _0x1d9060({
        'type': _0x1961bf,
        'tooltip': '轉輪'
      });
      _0x50ff78 = _0x1d9060({
        'type': _0xf672d6,
        'tooltip': "symbol相關表演的節點"
      });
      _0x117587 = _0x1d9060({
        'type': _0x2e9744,
        'tooltip': "symbol連線動畫"
      });
      _0xe286b2 = _0x1d9060({
        'type': _0x2e9744,
        'tooltip': "特殊符號 特殊表演"
      });
      _0x5cf96e = _0x1d9060({
        'type': _0xf672d6,
        'tooltip': "賠付表動畫節點"
      });
      _0x3c4f1d = function (_0x251155) {
        function _0xf5d8e6() {
          var _0x4ebec9;
          var _0x1fdcd3 = arguments.length;
          var _0x2592a2 = new Array(_0x1fdcd3);
          for (var _0x5aee56 = 0x0; _0x5aee56 < _0x1fdcd3; _0x5aee56++) {
            _0x2592a2[_0x5aee56] = arguments[_0x5aee56];
          }
          _0x4ebec9 = _0x251155.call.apply(_0x251155, [this].concat(_0x2592a2)) || this;
          _0xa658bd(_0x4ebec9, "m_slotReels", _0x49aad5, _0x2ed684(_0x4ebec9));
          _0xa658bd(_0x4ebec9, 'm_effectNode', _0x486207, _0x2ed684(_0x4ebec9));
          _0xa658bd(_0x4ebec9, "m_symbolEffectPrefabs", _0xe8354, _0x2ed684(_0x4ebec9));
          _0xa658bd(_0x4ebec9, "m_symbolSpecialEffectPrefabs", _0xb21e0f, _0x2ed684(_0x4ebec9));
          _0xa658bd(_0x4ebec9, "m_paytableEffect", _0xee4df6, _0x2ed684(_0x4ebec9));
          _0x4ebec9.m_symbolEffects = new Array();
          _0x4ebec9.m_symbolSpecialEffects = new Array();
          _0x4ebec9.m_bonusShowEffect = new Array();
          _0x4ebec9.m_isActiveSymbol = [];
          _0x4ebec9.m_gameView = null;
          _0x4ebec9.m_isTwoAnim = false;
          _0x4ebec9.m_isPayTableAni = [false, false, false, false, false, false, false];
          _0x4ebec9.m_payTableTempScale = 0x0;
          _0x4ebec9.m_light = -0x1;
          return _0x4ebec9;
        }
        _0x40670a(_0xf5d8e6, _0x251155);
        var _0x35560a = _0xf5d8e6.prototype;
        _0x35560a.onLoad = function () {
          for (var _0xe4d31b = 0x0; _0xe4d31b < 0x3; _0xe4d31b++) {
            var _0x2f1e1c = new Array();
            for (var _0x30c5d2 = 0x0; _0x30c5d2 < 0x6; _0x30c5d2++) {
              var _0x181bed = new Array();
              for (var _0x3857fb = 0x0; _0x3857fb < _0x49eab6.UNAWARD_WILD; _0x3857fb++) {
                _0x181bed.push(null);
              }
              _0x2f1e1c.push(_0x181bed);
            }
            this.m_symbolEffects.push(_0x2f1e1c);
          }
          for (var _0x5198ed = 0x0; _0x5198ed < 0x3; _0x5198ed++) {
            var _0x2f2a79 = new Array();
            for (var _0xaa052 = 0x0; _0xaa052 < 0x6; _0xaa052++) {
              var _0x1e92e1 = new Array();
              for (var _0x171866 = 0x0; _0x171866 < _0x49eab6.UNAWARD_WILD; _0x171866++) {
                _0x1e92e1.push(null);
              }
              _0x2f2a79.push(_0x1e92e1);
            }
            this.m_symbolSpecialEffects.push(_0x2f2a79);
          }
          for (var _0x444f35 = 0x0; _0x444f35 < 0x3; _0x444f35++) {
            var _0x7450c4 = new Array();
            for (var _0x5b9180 = 0x0; _0x5b9180 < 0x6; _0x5b9180++) {
              _0x7450c4.push(null);
            }
            this.m_bonusShowEffect.push(_0x7450c4);
          }
        };
        _0x35560a.start = function () {};
        _0x35560a.Init = function (_0x15053) {
          this.m_gameView = _0x15053;
        };
        _0x35560a.IsSpecialSymbol = function (_0x550810) {
          var _0x2abb3e = true;
          if (_0x550810 != _0x49eab6.UNAWARD_WILD && _0x550810 != _0x49eab6.FREE_GAME_SYMBOL) {
            _0x2abb3e = false;
          }
          return _0x2abb3e;
        };
        _0x35560a.IsBonusType = function (_0x4862ce) {
          var _0x246919 = true;
          if (_0x4862ce != _0x49eab6.UNAWARD_WILD && _0x4862ce != _0x49eab6.FREE_GAME_SYMBOL) {
            _0x246919 = false;
          }
          return _0x246919;
        };
        _0x35560a.ShowSpecialEffect = function (_0x2ad184, _0x4303a5, _0x331625, _0x44d033) {
          var _0xe46f90 = this;
          var _0x70ad0b = 0x0;
          if (this.m_isTwoAnim) {
            _0x70ad0b = 0.5;
          }
          if (this.IsTwoAnim(_0x44d033)) {
            var _0x36c882 = this.m_symbolSpecialEffects[_0x4303a5][_0x331625][_0x44d033];
            var _0x43c1cb = _0x44d033;
            if (_0x44d033 >= _0x49eab6.BASE_WILD) {
              _0x43c1cb = _0x49eab6.UNAWARD_WILD;
            }
            if (_0x36c882) {
              _0x36c882.position = this.m_slotReels.GetAwardSymbolPosition(_0x4303a5, _0x331625);
              _0x36c882.active = true;
              _0x36c882.getComponent(_0x4649cb).getState("Symbol_" + _0x43c1cb + 's').play();
            } else {
              var _0x59a2ce;
              _0x59a2ce = _0xd02a32(this.m_symbolSpecialEffectPrefabs[_0x44d033]);
              this.m_effectNode.addChild(_0x59a2ce);
              _0x59a2ce.position = this.m_slotReels.GetAwardSymbolPosition(_0x4303a5, _0x331625);
              if (_0x44d033 >= _0x49eab6.BASE_WILD) {
                _0x59a2ce.getChildByName("Node_root").getChildByName("Symbol_11_f").getChildByName("label").getComponent(_0x3856c7).string = _0x49eab6.SPECIAL_WILD[_0x44d033 - _0x49eab6.BASE_WILD] + 'x';
              }
              var _0x2c9e83 = _0x59a2ce.getComponent(_0x4649cb);
              _0x2c9e83.getState(_0x2c9e83.defaultClip.name).play();
              this.m_symbolSpecialEffects[_0x4303a5][_0x331625][_0x44d033] = _0x59a2ce;
            }
            this.m_slotReels.ActiveAwardSymbol(false, _0x4303a5, _0x331625);
          }
          _0xaf8706(this.node).delay(_0x70ad0b).call(function () {
            if (_0xe46f90.IsTwoAnim(_0x44d033)) {
              _0xe46f90.m_symbolSpecialEffects[_0x4303a5][_0x331625][_0x44d033].active = false;
            }
            _0x2ad184();
            _0xe46f90.ShowPaytableEffect();
          }).start();
        };
        _0x35560a.ShowPaytableEffect = function () {
          this.m_light = this.m_gameView.GetAwardSymbol() - 0x1;
          if (this.m_light >= 0x0) {
            this.m_isPayTableAni[this.m_light] = true;
            this.m_paytableEffect[this.m_light].getComponent(_0x4649cb).play();
          }
        };
        _0x35560a.StopPaytableEffect = function () {
          if (this.m_light >= 0x0) {
            this.m_paytableEffect[this.m_light].getComponent(_0x4649cb).stop();
            this.m_isPayTableAni[this.m_light] = false;
            this.m_light = -0x1;
          }
        };
        _0x35560a.IsTwoAnim = function (_0x5964f2) {
          var _0x504379 = false;
          for (var _0x446e07 = 0x0; _0x446e07 < _0x49eab6.TWO_ANI_SYMBOL.length; _0x446e07++) {
            if (_0x5964f2 == _0x49eab6.TWO_ANI_SYMBOL[_0x446e07]) {
              _0x504379 = true;
              break;
            }
          }
          return _0x504379;
        };
        _0x35560a.CreateAwardVec = function (_0x986935, _0x8ea601) {
          var _0x1023fd = [[false, false, false], [false, false, false], [false, false, false]];
          if (_0x8ea601.isLine) {
            for (var _0x3d8b0b = 0x0; _0x3d8b0b < 0x3; _0x3d8b0b++) {
              _0x1023fd[_0x3d8b0b][0x1] = true;
              if (this.IsTwoAnim(_0x986935[_0x3d8b0b][0x1])) {
                this.m_isTwoAnim = true;
              }
            }
          } else {
            if (_0x8ea601.isBonus) {
              if (_0x8ea601.isFree) {
                for (var _0x407857 = 0x0; _0x407857 < _0x986935.length; _0x407857++) {
                  for (var _0x5d6e8e = 0x0; _0x5d6e8e < _0x986935[_0x407857].length; _0x5d6e8e++) {
                    if (_0x986935[_0x407857][_0x5d6e8e] == _0x49eab6.FREE_GAME_SYMBOL) {
                      _0x1023fd[_0x407857][_0x5d6e8e] = true;
                    }
                  }
                }
              }
            } else {
              for (var _0x49fcfc = 0x0; _0x49fcfc < _0x986935.length; _0x49fcfc++) {
                for (var _0xbb09d2 = 0x0; _0xbb09d2 < _0x986935[_0x49fcfc].length; _0xbb09d2++) {
                  _0x1023fd[_0x49fcfc][_0xbb09d2] = _0x986935[_0x49fcfc][_0xbb09d2] == _0x49eab6.BONUS_SYMBOL;
                }
              }
              this.m_isTwoAnim = true;
            }
          }
          return _0x1023fd;
        };
        _0x35560a.ShowSymbolEffect = function (_0xdbc98c, _0x2400f3) {
          var _0x10d53d = this;
          this.m_isTwoAnim = false;
          var _0x53ab03 = this.CreateAwardVec(_0xdbc98c, _0x2400f3);
          var _0x4d4c93 = function (_0x40ea17) {
            var _0x394da7 = function (_0x446464) {
              var _0x2cfeea = _0xdbc98c[_0x40ea17][_0x446464];
              if (_0x53ab03[_0x40ea17][_0x446464]) {
                _0x10d53d.ShowSpecialEffect(function () {
                  var _0x38c42f = _0x10d53d.m_symbolEffects[_0x40ea17][_0x446464][_0x2cfeea];
                  if (_0x38c42f) {
                    _0x38c42f.position = _0x10d53d.m_slotReels.GetAwardSymbolPosition(_0x40ea17, _0x446464);
                    _0x38c42f.active = true;
                    var _0x31ca67 = _0x38c42f.getComponent(_0x4649cb);
                    _0x31ca67.getState(_0x31ca67.defaultClip.name).play();
                  } else {
                    var _0x231207;
                    _0x231207 = _0xd02a32(_0x10d53d.m_symbolEffectPrefabs[_0x2cfeea]);
                    _0x10d53d.m_effectNode.addChild(_0x231207);
                    _0x231207.position = _0x10d53d.m_slotReels.GetAwardSymbolPosition(_0x40ea17, _0x446464);
                    if (_0x2cfeea >= _0x49eab6.BASE_WILD) {
                      _0x231207.getChildByName("Node_root").getChildByName('Symbol_11_f').getChildByName("label").getComponent(_0x3856c7).string = _0x49eab6.SPECIAL_WILD[_0x2cfeea - _0x49eab6.BASE_WILD] + 'x';
                    }
                    var _0x4d9063 = _0x231207.getComponent(_0x4649cb);
                    _0x4d9063.getState(_0x4d9063.defaultClip.name).play();
                    _0x10d53d.m_symbolEffects[_0x40ea17][_0x446464][_0x2cfeea] = _0x231207;
                  }
                  _0x10d53d.m_slotReels.ActiveAwardSymbol(false, _0x40ea17, _0x446464);
                }, _0x40ea17, _0x446464, _0x2cfeea);
                var _0x2407d4 = {
                  'x': -0x1,
                  'y': -0x1
                };
                _0x2407d4.x = _0x40ea17;
                _0x2407d4.y = _0x446464;
                _0x10d53d.m_isActiveSymbol.push(_0x2407d4);
              }
            };
            for (var _0x3e1453 = 0x0; _0x3e1453 < _0xdbc98c[_0x40ea17].length; _0x3e1453++) {
              _0x394da7(_0x3e1453);
            }
          };
          for (var _0xa82597 = 0x0; _0xa82597 < _0xdbc98c.length; _0xa82597++) {
            _0x4d4c93(_0xa82597);
          }
        };
        _0x35560a.ShowBgBonusEffect = function (_0x351a1f, _0x114991, _0x5a15a8) {
          var _0x32c4e0;
          var _0x1b2f06 = this;
          var _0x49b490 = this.m_symbolSpecialEffects[_0x351a1f][_0x114991][_0x5a15a8];
          if (_0x49b490) {
            _0x49b490.position = this.m_slotReels.GetAwardSymbolPosition(_0x351a1f, _0x114991);
            _0x49b490.active = true;
            _0x49b490.getComponent(_0x4649cb).play("Symbol_" + _0x5a15a8 + 's');
          } else {
            _0x32c4e0 = _0xd02a32(this.m_symbolSpecialEffectPrefabs[_0x5a15a8]);
            this.m_effectNode.addChild(_0x32c4e0);
            _0x32c4e0.position = this.m_slotReels.GetAwardSymbolPosition(_0x351a1f, _0x114991);
            _0x32c4e0.getComponent(_0x4649cb).play("Symbol_" + _0x5a15a8 + 's');
            this.m_symbolSpecialEffects[_0x351a1f][_0x114991][_0x5a15a8] = _0x32c4e0;
          }
          this.m_slotReels.ActiveAwardSymbol(false, _0x351a1f, _0x114991);
          var _0x19e6ba = {
            'x': -0x1,
            'y': -0x1
          };
          _0x19e6ba.x = _0x351a1f;
          _0x19e6ba.y = _0x114991;
          this.m_isActiveSymbol.push(_0x19e6ba);
          _0xaf8706(this.node).delay(0.5).call(function () {
            _0x1b2f06.m_symbolSpecialEffects[_0x351a1f][_0x114991][_0x5a15a8].active = false;
            (function () {
              var _0x4e4f80 = _0x1b2f06.m_symbolEffects[_0x351a1f][_0x114991][_0x5a15a8];
              if (_0x4e4f80) {
                _0x4e4f80.position = _0x1b2f06.m_slotReels.GetAwardSymbolPosition(_0x351a1f, _0x114991);
                _0x4e4f80.active = true;
                var _0xbd1abb = _0x4e4f80.getComponent(_0x4649cb);
                _0xbd1abb.getState(_0xbd1abb.defaultClip.name).play();
              } else {
                var _0x29670e;
                _0x29670e = _0xd02a32(_0x1b2f06.m_symbolEffectPrefabs[_0x5a15a8]);
                _0x1b2f06.m_effectNode.addChild(_0x29670e);
                _0x29670e.position = _0x1b2f06.m_slotReels.GetAwardSymbolPosition(_0x351a1f, _0x114991);
                var _0x5de6a2 = _0x29670e.getComponent(_0x4649cb);
                _0x5de6a2.getState(_0x5de6a2.defaultClip.name).play();
                _0x1b2f06.m_symbolEffects[_0x351a1f][_0x114991][_0x5a15a8] = _0x29670e;
              }
              _0x1b2f06.m_slotReels.ActiveAwardSymbol(false, _0x351a1f, _0x114991);
            })();
          }).start();
        };
        _0x35560a.HideSymbolEffect = function () {
          _0xa08b52.stopAllByTarget(this.node);
          for (var _0x4e5dc1 = 0x0; _0x4e5dc1 < this.m_symbolEffects.length; _0x4e5dc1++) {
            if (null != this.m_symbolEffects[_0x4e5dc1]) {
              for (var _0xb50f6c = 0x0; _0xb50f6c < this.m_symbolEffects[_0x4e5dc1].length; _0xb50f6c++) {
                if (null != this.m_symbolEffects[_0x4e5dc1][_0xb50f6c]) {
                  for (var _0xde7015 = 0x0; _0xde7015 < this.m_symbolEffects[_0x4e5dc1][_0xb50f6c].length; _0xde7015++) {
                    if (this.m_symbolEffects[_0x4e5dc1][_0xb50f6c][_0xde7015]) {
                      this.m_symbolEffects[_0x4e5dc1][_0xb50f6c][_0xde7015].getComponent(_0x4649cb).stop();
                      this.m_symbolEffects[_0x4e5dc1][_0xb50f6c][_0xde7015].active = false;
                    }
                  }
                }
              }
            }
          }
          for (var _0x20b1b0 = 0x0; _0x20b1b0 < this.m_symbolSpecialEffects.length; _0x20b1b0++) {
            if (null != this.m_symbolSpecialEffects[_0x20b1b0]) {
              for (var _0x9ed7ae = 0x0; _0x9ed7ae < this.m_symbolSpecialEffects[_0x20b1b0].length; _0x9ed7ae++) {
                if (null != this.m_symbolSpecialEffects[_0x20b1b0][_0x9ed7ae]) {
                  for (var _0x6518c4 = 0x0; _0x6518c4 < this.m_symbolSpecialEffects[_0x20b1b0][_0x9ed7ae].length; _0x6518c4++) {
                    if (this.m_symbolSpecialEffects[_0x20b1b0][_0x9ed7ae][_0x6518c4]) {
                      this.m_symbolSpecialEffects[_0x20b1b0][_0x9ed7ae][_0x6518c4].getComponent(_0x4649cb).stop();
                      this.m_symbolSpecialEffects[_0x20b1b0][_0x9ed7ae][_0x6518c4].active = false;
                    }
                  }
                }
              }
            }
          }
          this.ResumeActiveSymbol();
        };
        _0x35560a.ResumeActiveSymbol = function () {
          for (var _0x5958dc = 0x0; _0x5958dc < this.m_isActiveSymbol.length; _0x5958dc++) {
            var _0x3a3cba = this.m_isActiveSymbol[_0x5958dc].x;
            var _0x4a5981 = this.m_isActiveSymbol[_0x5958dc].y;
            if (-0x1 != _0x3a3cba && -0x1 != _0x4a5981) {
              this.m_slotReels.ActiveAwardSymbol(true, _0x3a3cba, _0x4a5981);
            }
          }
          this.m_isActiveSymbol = [];
        };
        _0x35560a.update = function (_0xe0f7b2) {};
        return _0xf5d8e6;
      }(_0x238f11);
      _0x49aad5 = _0x2f050d(_0x3c4f1d.prototype, "m_slotReels", [_0x4ea1c0], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0x486207 = _0x2f050d(_0x3c4f1d.prototype, "m_effectNode", [_0x50ff78], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return null;
        }
      });
      _0xe8354 = _0x2f050d(_0x3c4f1d.prototype, "m_symbolEffectPrefabs", [_0x117587], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0xb21e0f = _0x2f050d(_0x3c4f1d.prototype, "m_symbolSpecialEffectPrefabs", [_0xe286b2], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      _0xee4df6 = _0x2f050d(_0x3c4f1d.prototype, 'm_paytableEffect', [_0x5cf96e], {
        'configurable': true,
        'enumerable': true,
        'writable': true,
        'initializer': function () {
          return [];
        }
      });
      var _0x23d58a;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, "6dee08YIwhNlavtjQKz0pu0", 'AwardState', undefined);
      var _0x3dfe49 = _0x2bb5d6.ccclass;
      _0x23d58a = _0x3dfe49("AwardState");
      var _0x35e213;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, "51fd2AgoklJmYOq7jzpN2ac", "CheckState", undefined);
      var _0x525fb9 = _0x2bb5d6.ccclass;
      _0x35e213 = _0x525fb9("CheckState");
      var _0x3fcbf6;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, "e1aa5OB55RKa7wf47hL0GGA", "FeatureShowState", undefined);
      var _0x37edbf = _0x2bb5d6.ccclass;
      _0x3fcbf6 = _0x37edbf('FeatureShowState');
      var _0x56454a;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, '2d084GNpMVIZauZnzQyNwM6', "IdleState", undefined);
      var _0x5c7e70 = _0x2bb5d6.ccclass;
      _0x56454a = _0x5c7e70("IdleState");
      var _0x555f2a;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, "c1408XT8BpIxIVZ0mdKDZOO", 'PlateShowState', undefined);
      var _0x2c5eb0 = _0x2bb5d6.ccclass;
      _0x555f2a = _0x2c5eb0("PlateShowState");
      var _0x367024;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, "62be1M3Y7ZH/ZM6vhVORFIj", "RoundEndState", undefined);
      var _0x1e7a2d = _0x2bb5d6.ccclass;
      _0x367024 = _0x1e7a2d("RoundEndState");
      var _0x571301;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, "6c2c0NISN1NwZN3OxZgsHKf", 'RoundShowEndState', undefined);
      var _0x2f6d38 = _0x2bb5d6.ccclass;
      _0x571301 = _0x2f6d38("RoundShowEndState");
      var _0x43cc03;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, "82e61P4YlxGyrvX0LirdIEg", 'SpinState', undefined);
      var _0x28d7a9 = _0x2bb5d6.ccclass;
      _0x43cc03 = _0x28d7a9("SpinState");
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, "eee91cqnZlD6aCRi7CSatCN", "UnshowPrepareState", undefined);
      var _0x160d04;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, '35a15hb2RZOFLm0KcVsD/nx', "WaitResState", undefined);
      var _0xbc5c7 = _0x2bb5d6.ccclass;
      _0x160d04 = _0xbc5c7("WaitResState");
      var _0x33ffbf;
      _0x22a6e5._RF.pop();
      _0x22a6e5._RF.push({}, '2b846wsPp1FOrRmCLpLvYPs', "WaitTouchState", undefined);
      var _0x20b311 = _0x2bb5d6.ccclass;
      _0x33ffbf = _0x20b311("WaitTouchState");
      _0x22a6e5._RF.pop();
      var _0x1b7c09 = function () {
        function _0x10da28() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x1b52bf = _0x10da28.prototype;
        _0x1b52bf.define = function (_0x438a6a, _0x5762ab, _0x1417e2) {
          this._registry[_0x438a6a] = {
            'factory': _0x5762ab,
            'resolveMap': _0x1417e2
          };
        };
        _0x1b52bf.require = function (_0x38bf7d) {
          return this._require(_0x38bf7d);
        };
        _0x1b52bf.throwInvalidWrapper = function (_0x1d43d9, _0x23ab81) {
          throw new Error("Module '" + _0x1d43d9 + "' imported from '" + _0x23ab81 + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x1b52bf._require = function (_0x78c2cb, _0x110692) {
          var _0x33df13 = this._moduleCache[_0x78c2cb];
          if (_0x33df13) {
            return _0x33df13.exports;
          }
          var _0xf97c87 = {
            'id': _0x78c2cb,
            'exports': {}
          };
          this._moduleCache[_0x78c2cb] = _0xf97c87;
          this._tryModuleLoad(_0xf97c87, _0x78c2cb);
          return _0xf97c87.exports;
        };
        _0x1b52bf._resolve = function (_0xe3fb22, _0x45c770) {
          return this._resolveFromInfos(_0xe3fb22, _0x45c770) || this._throwUnresolved(_0xe3fb22, _0x45c770);
        };
        _0x1b52bf._resolveFromInfos = function (_0x122c04, _0xe293a3) {
          var _0xbdd36c;
          var _0x5590b5;
          return _0x122c04 in cjsInfos ? _0x122c04 : _0xe293a3 && null != (_0xbdd36c = null == (_0x5590b5 = cjsInfos[_0xe293a3]) ? undefined : _0x5590b5.resolveCache[_0x122c04]) ? _0xbdd36c : undefined;
        };
        _0x1b52bf._tryModuleLoad = function (_0x150edb, _0x514b86) {
          var _0x282732 = true;
          try {
            this._load(_0x150edb, _0x514b86);
            _0x282732 = false;
          } finally {
            if (_0x282732) {
              delete this._moduleCache[_0x514b86];
            }
          }
        };
        _0x1b52bf._load = function (_0x38cd30, _0x2f594d) {
          var _0x22a794 = this._loadWrapper(_0x2f594d);
          var _0x2149e9 = _0x22a794.factory;
          var _0x6e6e99 = _0x22a794.resolveMap;
          var _0x14f108 = this._createRequire(_0x38cd30);
          var _0x143d79 = _0x6e6e99 ? this._createRequireWithResolveMap('function' == typeof _0x6e6e99 ? _0x6e6e99() : _0x6e6e99, _0x14f108) : _0x14f108;
          _0x2149e9(_0x38cd30.exports, _0x143d79, _0x38cd30);
        };
        _0x1b52bf._loadWrapper = function (_0x3bfb5b) {
          return _0x3bfb5b in this._registry ? this._registry[_0x3bfb5b] : this._loadHostProvidedModules(_0x3bfb5b);
        };
        _0x1b52bf._loadHostProvidedModules = function (_0x446185) {
          return {
            'factory': function (_0x191622, _0x4315eb, _0x4aca70) {
              if ('undefined' == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x446185 + "'.");
              }
              try {
                _0x4aca70.exports = require(_0x446185);
              } catch (_0x5a2fd6) {
                throw new Error("Exception thrown when calling host defined require('" + _0x446185 + "').", {
                  'cause': _0x5a2fd6
                });
              }
            }
          };
        };
        _0x1b52bf._createRequire = function (_0xbea8b8) {
          var _0x47c4f7 = this;
          return function (_0x37fcfb) {
            return _0x47c4f7._require(_0x37fcfb, _0xbea8b8);
          };
        };
        _0x1b52bf._createRequireWithResolveMap = function (_0xec20c1, _0x47d0c1) {
          return function (_0xca80fa) {
            var _0xb42fc7 = _0xec20c1[_0xca80fa];
            if (_0xb42fc7) {
              return _0x47d0c1(_0xb42fc7);
            }
            throw new Error("Unresolved specifier " + _0xca80fa);
          };
        };
        _0x1b52bf._throwUnresolved = function (_0x2227fa, _0x47e819) {
          throw new Error("Unable to resolve " + _0x2227fa + " from " + parent + '.');
        };
        return _0x10da28;
      }();
      var _0x55cf1e = new _0x1b7c09();
      var _0x335118;
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/long/src/long.js", function (_0x5e9de0, _0x35bebc, _0x2af8f8, _0x144b07, _0x147253) {
        _0x2af8f8.exports = _0x4f3b7b;
        var _0x3e94c9 = null;
        try {
          _0x3e94c9 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0xd, 0x2, 0x60, 0x0, 0x1, 0x7f, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x7, 0x6, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x6, 0x6, 0x1, 0x7f, 0x1, 0x41, 0x0, 0xb, 0x7, 0x32, 0x6, 0x3, 0x6d, 0x75, 0x6c, 0x0, 0x1, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x73, 0x0, 0x2, 0x5, 0x64, 0x69, 0x76, 0x5f, 0x75, 0x0, 0x3, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x73, 0x0, 0x4, 0x5, 0x72, 0x65, 0x6d, 0x5f, 0x75, 0x0, 0x5, 0x8, 0x67, 0x65, 0x74, 0x5f, 0x68, 0x69, 0x67, 0x68, 0x0, 0x0, 0xa, 0xbf, 0x1, 0x6, 0x4, 0x0, 0x23, 0x0, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7e, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x7f, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x80, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x81, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb, 0x24, 0x1, 0x1, 0x7e, 0x20, 0x0, 0xad, 0x20, 0x1, 0xad, 0x42, 0x20, 0x86, 0x84, 0x20, 0x2, 0xad, 0x20, 0x3, 0xad, 0x42, 0x20, 0x86, 0x84, 0x82, 0x22, 0x4, 0x42, 0x20, 0x87, 0xa7, 0x24, 0x0, 0x20, 0x4, 0xa7, 0xb])), {}).exports;
        } catch (_0x4b07bf) {}
        function _0x4f3b7b(_0x4c5f58, _0x32d68a, _0x1ff4f1) {
          this.low = 0x0 | _0x4c5f58;
          this.high = 0x0 | _0x32d68a;
          this.unsigned = !!_0x1ff4f1;
        }
        function _0x24b9fb(_0x1ff7b9) {
          return true === (_0x1ff7b9 && _0x1ff7b9.__isLong__);
        }
        _0x4f3b7b.prototype.__isLong__;
        Object.defineProperty(_0x4f3b7b.prototype, "__isLong__", {
          'value': true
        });
        _0x4f3b7b.isLong = _0x24b9fb;
        var _0x2186f5 = {};
        var _0x3e5c69 = {};
        function _0x468909(_0x1bb25f, _0x579d10) {
          var _0x356f51;
          var _0x11225c;
          var _0x410678;
          return _0x579d10 ? (_0x410678 = 0x0 <= (_0x1bb25f >>>= 0x0) && _0x1bb25f < 0x100) && (_0x11225c = _0x3e5c69[_0x1bb25f]) ? _0x11225c : (_0x356f51 = new _0x4f3b7b(_0x1bb25f, (0x0 | _0x1bb25f) < 0x0 ? -0x1 : 0x0, true), _0x410678 && (_0x3e5c69[_0x1bb25f] = _0x356f51), _0x356f51) : (_0x410678 = -0x80 <= (_0x1bb25f |= 0x0) && _0x1bb25f < 0x80) && (_0x11225c = _0x2186f5[_0x1bb25f]) ? _0x11225c : (_0x356f51 = new _0x4f3b7b(_0x1bb25f, _0x1bb25f < 0x0 ? -0x1 : 0x0, false), _0x410678 && (_0x2186f5[_0x1bb25f] = _0x356f51), _0x356f51);
        }
        function _0x10f3a7(_0x2bb69c, _0x48950a) {
          if (isNaN(_0x2bb69c)) {
            return _0x48950a ? _0x517ba6 : _0x5ad986;
          }
          if (_0x48950a) {
            if (_0x2bb69c < 0x0) {
              return _0x517ba6;
            }
            if (_0x2bb69c >= 18446744073709552000) {
              return _0x2824c9;
            }
          } else {
            if (_0x2bb69c <= -9223372036854776000) {
              return _0x25394c;
            }
            if (_0x2bb69c + 0x1 >= 9223372036854776000) {
              return _0x516406;
            }
          }
          return _0x2bb69c < 0x0 ? _0x10f3a7(-_0x2bb69c, _0x48950a).neg() : new _0x4f3b7b(_0x2bb69c % 0x100000000 | 0x0, _0x2bb69c / 0x100000000 | 0x0, _0x48950a);
        }
        function _0x39e272(_0x2d0f2d, _0x4e0be7, _0x3e8196) {
          return new _0x4f3b7b(_0x2d0f2d, _0x4e0be7, _0x3e8196);
        }
        _0x4f3b7b.fromInt = _0x468909;
        _0x4f3b7b.fromNumber = _0x10f3a7;
        _0x4f3b7b.fromBits = _0x39e272;
        var _0x37304c = Math.pow;
        function _0x8e327f(_0x28b4fc, _0x24989a, _0x3ad40f) {
          if (0x0 === _0x28b4fc.length) {
            throw Error("empty string");
          }
          if ("NaN" === _0x28b4fc || 'Infinity' === _0x28b4fc || '+Infinity' === _0x28b4fc || '-Infinity' === _0x28b4fc) {
            return _0x5ad986;
          }
          if ("number" == typeof _0x24989a) {
            _0x3ad40f = _0x24989a;
            _0x24989a = false;
          } else {
            _0x24989a = !!_0x24989a;
          }
          if ((_0x3ad40f = _0x3ad40f || 0xa) < 0x2 || 0x24 < _0x3ad40f) {
            throw RangeError('radix');
          }
          var _0x3c085a;
          if ((_0x3c085a = _0x28b4fc.indexOf('-')) > 0x0) {
            throw Error("interior hyphen");
          }
          if (0x0 === _0x3c085a) {
            return _0x8e327f(_0x28b4fc.substring(0x1), _0x24989a, _0x3ad40f).neg();
          }
          var _0x124323 = _0x10f3a7(_0x37304c(_0x3ad40f, 0x8));
          var _0x9507d5 = _0x5ad986;
          for (var _0x55fea8 = 0x0; _0x55fea8 < _0x28b4fc.length; _0x55fea8 += 0x8) {
            var _0x5442a1 = Math.min(0x8, _0x28b4fc.length - _0x55fea8);
            var _0x42fd48 = parseInt(_0x28b4fc.substring(_0x55fea8, _0x55fea8 + _0x5442a1), _0x3ad40f);
            if (_0x5442a1 < 0x8) {
              var _0x191d6c = _0x10f3a7(_0x37304c(_0x3ad40f, _0x5442a1));
              _0x9507d5 = _0x9507d5.mul(_0x191d6c).add(_0x10f3a7(_0x42fd48));
            } else {
              _0x9507d5 = (_0x9507d5 = _0x9507d5.mul(_0x124323)).add(_0x10f3a7(_0x42fd48));
            }
          }
          _0x9507d5.unsigned = _0x24989a;
          return _0x9507d5;
        }
        function _0xa1716b(_0x2367ea, _0x482c7b) {
          return "number" == typeof _0x2367ea ? _0x10f3a7(_0x2367ea, _0x482c7b) : "string" == typeof _0x2367ea ? _0x8e327f(_0x2367ea, _0x482c7b) : new _0x4f3b7b(_0x2367ea.low, _0x2367ea.high, "boolean" == typeof _0x482c7b ? _0x482c7b : _0x2367ea.unsigned);
        }
        _0x4f3b7b.fromString = _0x8e327f;
        _0x4f3b7b.fromValue = _0xa1716b;
        var _0x57bf64 = _0x468909(16777216);
        var _0x5ad986 = _0x468909(0x0);
        _0x4f3b7b.ZERO = _0x5ad986;
        var _0x517ba6 = _0x468909(0x0, true);
        _0x4f3b7b.UZERO = _0x517ba6;
        var _0x4726d8 = _0x468909(0x1);
        _0x4f3b7b.ONE = _0x4726d8;
        var _0x28a391 = _0x468909(0x1, true);
        _0x4f3b7b.UONE = _0x28a391;
        var _0x39f95c = _0x468909(-0x1);
        _0x4f3b7b.NEG_ONE = _0x39f95c;
        var _0x516406 = new _0x4f3b7b(-0x1, 0x7fffffff, false);
        _0x4f3b7b.MAX_VALUE = _0x516406;
        var _0x2824c9 = new _0x4f3b7b(-0x1, -0x1, true);
        _0x4f3b7b.MAX_UNSIGNED_VALUE = _0x2824c9;
        var _0x25394c = new _0x4f3b7b(0x0, -0x80000000, false);
        _0x4f3b7b.MIN_VALUE = _0x25394c;
        var _0x35606a = _0x4f3b7b.prototype;
        _0x35606a.toInt = function () {
          return this.unsigned ? this.low >>> 0x0 : this.low;
        };
        _0x35606a.toNumber = function () {
          return this.unsigned ? (this.high >>> 0x0) * 0x100000000 + (this.low >>> 0x0) : this.high * 0x100000000 + (this.low >>> 0x0);
        };
        _0x35606a.toString = function (_0x2e85df) {
          if ((_0x2e85df = _0x2e85df || 0xa) < 0x2 || 0x24 < _0x2e85df) {
            throw RangeError('radix');
          }
          if (this.isZero()) {
            return '0';
          }
          if (this.isNegative()) {
            if (this.eq(_0x25394c)) {
              var _0x4bd17a = _0x10f3a7(_0x2e85df);
              var _0x14f1c4 = this.div(_0x4bd17a);
              var _0x36bae2 = _0x14f1c4.mul(_0x4bd17a).sub(this);
              return _0x14f1c4.toString(_0x2e85df) + _0x36bae2.toInt().toString(_0x2e85df);
            }
            return '-' + this.neg().toString(_0x2e85df);
          }
          var _0x4bb06b = _0x10f3a7(_0x37304c(_0x2e85df, 0x6), this.unsigned);
          var _0x48d80a = this;
          for (var _0x1f772e = '';;) {
            var _0xcc8915 = _0x48d80a.div(_0x4bb06b);
            var _0x26c027 = (_0x48d80a.sub(_0xcc8915.mul(_0x4bb06b)).toInt() >>> 0x0).toString(_0x2e85df);
            if ((_0x48d80a = _0xcc8915).isZero()) {
              return _0x26c027 + _0x1f772e;
            }
            for (; _0x26c027.length < 0x6;) {
              _0x26c027 = '0' + _0x26c027;
            }
            _0x1f772e = '' + _0x26c027 + _0x1f772e;
          }
        };
        _0x35606a.getHighBits = function () {
          return this.high;
        };
        _0x35606a.getHighBitsUnsigned = function () {
          return this.high >>> 0x0;
        };
        _0x35606a.getLowBits = function () {
          return this.low;
        };
        _0x35606a.getLowBitsUnsigned = function () {
          return this.low >>> 0x0;
        };
        _0x35606a.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x25394c) ? 0x40 : this.neg().getNumBitsAbs();
          }
          var _0x12ae39 = 0x0 != this.high ? this.high : this.low;
          for (var _0xc33d31 = 0x1f; _0xc33d31 > 0x0 && 0x0 == (_0x12ae39 & 0x1 << _0xc33d31); _0xc33d31--) {
            ;
          }
          return 0x0 != this.high ? _0xc33d31 + 0x21 : _0xc33d31 + 0x1;
        };
        _0x35606a.isZero = function () {
          return 0x0 === this.high && 0x0 === this.low;
        };
        _0x35606a.eqz = _0x35606a.isZero;
        _0x35606a.isNegative = function () {
          return !this.unsigned && this.high < 0x0;
        };
        _0x35606a.isPositive = function () {
          return this.unsigned || this.high >= 0x0;
        };
        _0x35606a.isOdd = function () {
          return 0x1 == (0x1 & this.low);
        };
        _0x35606a.isEven = function () {
          return 0x0 == (0x1 & this.low);
        };
        _0x35606a.equals = function (_0x4d3db2) {
          if (!(true === (_0x4d3db2 && _0x4d3db2.__isLong__))) {
            _0x4d3db2 = "number" == typeof _0x4d3db2 ? _0x10f3a7(_0x4d3db2, undefined) : "string" == typeof _0x4d3db2 ? _0x8e327f(_0x4d3db2, undefined) : new _0x4f3b7b(_0x4d3db2.low, _0x4d3db2.high, _0x4d3db2.unsigned);
          }
          return (this.unsigned === _0x4d3db2.unsigned || this.high >>> 0x1f != 0x1 || _0x4d3db2.high >>> 0x1f != 0x1) && this.high === _0x4d3db2.high && this.low === _0x4d3db2.low;
        };
        _0x35606a.eq = _0x35606a.equals;
        _0x35606a.notEquals = function (_0x490455) {
          return !this.eq(_0x490455);
        };
        _0x35606a.neq = _0x35606a.notEquals;
        _0x35606a.ne = _0x35606a.notEquals;
        _0x35606a.lessThan = function (_0x3cc8e3) {
          return this.comp(_0x3cc8e3) < 0x0;
        };
        _0x35606a.lt = _0x35606a.lessThan;
        _0x35606a.lessThanOrEqual = function (_0x3cc5b9) {
          return this.comp(_0x3cc5b9) <= 0x0;
        };
        _0x35606a.lte = _0x35606a.lessThanOrEqual;
        _0x35606a.le = _0x35606a.lessThanOrEqual;
        _0x35606a.greaterThan = function (_0x5da175) {
          return this.comp(_0x5da175) > 0x0;
        };
        _0x35606a.gt = _0x35606a.greaterThan;
        _0x35606a.greaterThanOrEqual = function (_0x1a473c) {
          return this.comp(_0x1a473c) >= 0x0;
        };
        _0x35606a.gte = _0x35606a.greaterThanOrEqual;
        _0x35606a.ge = _0x35606a.greaterThanOrEqual;
        _0x35606a.compare = function (_0x23d91b) {
          if (!(true === (_0x23d91b && _0x23d91b.__isLong__))) {
            _0x23d91b = "number" == typeof _0x23d91b ? _0x10f3a7(_0x23d91b, undefined) : "string" == typeof _0x23d91b ? _0x8e327f(_0x23d91b, undefined) : new _0x4f3b7b(_0x23d91b.low, _0x23d91b.high, _0x23d91b.unsigned);
          }
          if (this.eq(_0x23d91b)) {
            return 0x0;
          }
          var _0x291fb7 = this.isNegative();
          var _0x16ef3f = _0x23d91b.isNegative();
          return _0x291fb7 && !_0x16ef3f ? -0x1 : !_0x291fb7 && _0x16ef3f ? 0x1 : this.unsigned ? _0x23d91b.high >>> 0x0 > this.high >>> 0x0 || _0x23d91b.high === this.high && _0x23d91b.low >>> 0x0 > this.low >>> 0x0 ? -0x1 : 0x1 : this.sub(_0x23d91b).isNegative() ? -0x1 : 0x1;
        };
        _0x35606a.comp = _0x35606a.compare;
        _0x35606a.negate = function () {
          return !this.unsigned && this.eq(_0x25394c) ? _0x25394c : this.not().add(_0x4726d8);
        };
        _0x35606a.neg = _0x35606a.negate;
        _0x35606a.add = function (_0x3e0625) {
          if (!(true === (_0x3e0625 && _0x3e0625.__isLong__))) {
            _0x3e0625 = "number" == typeof _0x3e0625 ? _0x10f3a7(_0x3e0625, undefined) : "string" == typeof _0x3e0625 ? _0x8e327f(_0x3e0625, undefined) : new _0x4f3b7b(_0x3e0625.low, _0x3e0625.high, _0x3e0625.unsigned);
          }
          var _0x3838cb = this.high >>> 0x10;
          var _0x49d0d8 = 0xffff & this.high;
          var _0x33ebc0 = this.low >>> 0x10;
          var _0x250160 = 0xffff & this.low;
          var _0x1d9080 = _0x3e0625.high >>> 0x10;
          var _0x5bec92 = 0xffff & _0x3e0625.high;
          var _0xb45dd5 = _0x3e0625.low >>> 0x10;
          var _0x1a6a7b = 0x0;
          var _0x2b5574 = 0x0;
          var _0x531fc0 = 0x0;
          var _0x5c61c4 = 0x0;
          _0x531fc0 += (_0x5c61c4 += _0x250160 + (0xffff & _0x3e0625.low)) >>> 0x10;
          _0x2b5574 += (_0x531fc0 += _0x33ebc0 + _0xb45dd5) >>> 0x10;
          _0x1a6a7b += (_0x2b5574 += _0x49d0d8 + _0x5bec92) >>> 0x10;
          _0x1a6a7b += _0x3838cb + _0x1d9080;
          return new _0x4f3b7b((_0x531fc0 &= 0xffff) << 0x10 | (_0x5c61c4 &= 0xffff), (_0x1a6a7b &= 0xffff) << 0x10 | (_0x2b5574 &= 0xffff), this.unsigned);
        };
        _0x35606a.subtract = function (_0x2c665e) {
          if (!(true === (_0x2c665e && _0x2c665e.__isLong__))) {
            _0x2c665e = "number" == typeof _0x2c665e ? _0x10f3a7(_0x2c665e, undefined) : "string" == typeof _0x2c665e ? _0x8e327f(_0x2c665e, undefined) : new _0x4f3b7b(_0x2c665e.low, _0x2c665e.high, _0x2c665e.unsigned);
          }
          return this.add(_0x2c665e.neg());
        };
        _0x35606a.sub = _0x35606a.subtract;
        _0x35606a.multiply = function (_0x38b7b0) {
          if (this.isZero()) {
            return _0x5ad986;
          }
          if (!(true === (_0x38b7b0 && _0x38b7b0.__isLong__))) {
            _0x38b7b0 = "number" == typeof _0x38b7b0 ? _0x10f3a7(_0x38b7b0, undefined) : "string" == typeof _0x38b7b0 ? _0x8e327f(_0x38b7b0, undefined) : new _0x4f3b7b(_0x38b7b0.low, _0x38b7b0.high, _0x38b7b0.unsigned);
          }
          if (_0x3e94c9) {
            return new _0x4f3b7b(_0x3e94c9.mul(this.low, this.high, _0x38b7b0.low, _0x38b7b0.high), _0x3e94c9.get_high(), this.unsigned);
          }
          if (_0x38b7b0.isZero()) {
            return _0x5ad986;
          }
          if (this.eq(_0x25394c)) {
            return _0x38b7b0.isOdd() ? _0x25394c : _0x5ad986;
          }
          if (_0x38b7b0.eq(_0x25394c)) {
            return this.isOdd() ? _0x25394c : _0x5ad986;
          }
          if (this.isNegative()) {
            return _0x38b7b0.isNegative() ? this.neg().mul(_0x38b7b0.neg()) : this.neg().mul(_0x38b7b0).neg();
          }
          if (_0x38b7b0.isNegative()) {
            return this.mul(_0x38b7b0.neg()).neg();
          }
          if (this.lt(_0x57bf64) && _0x38b7b0.lt(_0x57bf64)) {
            return _0x10f3a7(this.toNumber() * _0x38b7b0.toNumber(), this.unsigned);
          }
          var _0x12c668 = this.high >>> 0x10;
          var _0x451ba0 = 0xffff & this.high;
          var _0x5331fa = this.low >>> 0x10;
          var _0x54601e = 0xffff & this.low;
          var _0x461b1e = _0x38b7b0.high >>> 0x10;
          var _0x249746 = 0xffff & _0x38b7b0.high;
          var _0x2f3043 = _0x38b7b0.low >>> 0x10;
          var _0x381d75 = 0xffff & _0x38b7b0.low;
          var _0x3bbfa2 = 0x0;
          var _0x1fcd74 = 0x0;
          var _0x4134b5 = 0x0;
          var _0x46e16b = 0x0;
          _0x4134b5 += (_0x46e16b += _0x54601e * _0x381d75) >>> 0x10;
          _0x1fcd74 += (_0x4134b5 += _0x5331fa * _0x381d75) >>> 0x10;
          _0x4134b5 &= 0xffff;
          _0x1fcd74 += (_0x4134b5 += _0x54601e * _0x2f3043) >>> 0x10;
          _0x3bbfa2 += (_0x1fcd74 += _0x451ba0 * _0x381d75) >>> 0x10;
          _0x1fcd74 &= 0xffff;
          _0x3bbfa2 += (_0x1fcd74 += _0x5331fa * _0x2f3043) >>> 0x10;
          _0x1fcd74 &= 0xffff;
          _0x3bbfa2 += (_0x1fcd74 += _0x54601e * _0x249746) >>> 0x10;
          _0x3bbfa2 += _0x12c668 * _0x381d75 + _0x451ba0 * _0x2f3043 + _0x5331fa * _0x249746 + _0x54601e * _0x461b1e;
          return new _0x4f3b7b((_0x4134b5 &= 0xffff) << 0x10 | (_0x46e16b &= 0xffff), (_0x3bbfa2 &= 0xffff) << 0x10 | (_0x1fcd74 &= 0xffff), this.unsigned);
        };
        _0x35606a.mul = _0x35606a.multiply;
        _0x35606a.divide = function (_0x2f96fd) {
          if (!(true === (_0x2f96fd && _0x2f96fd.__isLong__))) {
            _0x2f96fd = "number" == typeof _0x2f96fd ? _0x10f3a7(_0x2f96fd, undefined) : "string" == typeof _0x2f96fd ? _0x8e327f(_0x2f96fd, undefined) : new _0x4f3b7b(_0x2f96fd.low, _0x2f96fd.high, _0x2f96fd.unsigned);
          }
          if (_0x2f96fd.isZero()) {
            throw Error("division by zero");
          }
          var _0x48d23c;
          var _0x111d6c;
          var _0x5e2fb8;
          if (_0x3e94c9) {
            return this.unsigned || -0x80000000 !== this.high || -0x1 !== _0x2f96fd.low || -0x1 !== _0x2f96fd.high ? new _0x4f3b7b((this.unsigned ? _0x3e94c9.div_u : _0x3e94c9.div_s)(this.low, this.high, _0x2f96fd.low, _0x2f96fd.high), _0x3e94c9.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x517ba6 : _0x5ad986;
          }
          if (this.unsigned) {
            if (!_0x2f96fd.unsigned) {
              _0x2f96fd = _0x2f96fd.toUnsigned();
            }
            if (_0x2f96fd.gt(this)) {
              return _0x517ba6;
            }
            if (_0x2f96fd.gt(this.shru(0x1))) {
              return _0x28a391;
            }
            _0x5e2fb8 = _0x517ba6;
          } else {
            if (this.eq(_0x25394c)) {
              return _0x2f96fd.eq(_0x4726d8) || _0x2f96fd.eq(_0x39f95c) ? _0x25394c : _0x2f96fd.eq(_0x25394c) ? _0x4726d8 : (_0x48d23c = this.shr(0x1).div(_0x2f96fd).shl(0x1)).eq(_0x5ad986) ? _0x2f96fd.isNegative() ? _0x4726d8 : _0x39f95c : (_0x111d6c = this.sub(_0x2f96fd.mul(_0x48d23c)), _0x5e2fb8 = _0x48d23c.add(_0x111d6c.div(_0x2f96fd)));
            }
            if (_0x2f96fd.eq(_0x25394c)) {
              return this.unsigned ? _0x517ba6 : _0x5ad986;
            }
            if (this.isNegative()) {
              return _0x2f96fd.isNegative() ? this.neg().div(_0x2f96fd.neg()) : this.neg().div(_0x2f96fd).neg();
            }
            if (_0x2f96fd.isNegative()) {
              return this.div(_0x2f96fd.neg()).neg();
            }
            _0x5e2fb8 = _0x5ad986;
          }
          for (_0x111d6c = this; _0x111d6c.gte(_0x2f96fd);) {
            _0x48d23c = Math.max(0x1, Math.floor(_0x111d6c.toNumber() / _0x2f96fd.toNumber()));
            var _0x168669 = Math.ceil(Math.log(_0x48d23c) / Math.LN2);
            var _0x42c171 = _0x168669 <= 0x30 ? 0x1 : _0x37304c(0x2, _0x168669 - 0x30);
            var _0x3cacc8 = _0x10f3a7(_0x48d23c);
            for (var _0x2872be = _0x3cacc8.mul(_0x2f96fd); _0x2872be.isNegative() || _0x2872be.gt(_0x111d6c);) {
              _0x2872be = (_0x3cacc8 = _0x10f3a7(_0x48d23c -= _0x42c171, this.unsigned)).mul(_0x2f96fd);
            }
            if (_0x3cacc8.isZero()) {
              _0x3cacc8 = _0x4726d8;
            }
            _0x5e2fb8 = _0x5e2fb8.add(_0x3cacc8);
            _0x111d6c = _0x111d6c.sub(_0x2872be);
          }
          return _0x5e2fb8;
        };
        _0x35606a.div = _0x35606a.divide;
        _0x35606a.modulo = function (_0x173d3d) {
          if (!(true === (_0x173d3d && _0x173d3d.__isLong__))) {
            _0x173d3d = "number" == typeof _0x173d3d ? _0x10f3a7(_0x173d3d, undefined) : "string" == typeof _0x173d3d ? _0x8e327f(_0x173d3d, undefined) : new _0x4f3b7b(_0x173d3d.low, _0x173d3d.high, _0x173d3d.unsigned);
          }
          return _0x3e94c9 ? new _0x4f3b7b((this.unsigned ? _0x3e94c9.rem_u : _0x3e94c9.rem_s)(this.low, this.high, _0x173d3d.low, _0x173d3d.high), _0x3e94c9.get_high(), this.unsigned) : this.sub(this.div(_0x173d3d).mul(_0x173d3d));
        };
        _0x35606a.mod = _0x35606a.modulo;
        _0x35606a.rem = _0x35606a.modulo;
        _0x35606a.not = function () {
          return new _0x4f3b7b(~this.low, ~this.high, this.unsigned);
        };
        _0x35606a.and = function (_0x2c73fe) {
          if (!(true === (_0x2c73fe && _0x2c73fe.__isLong__))) {
            _0x2c73fe = "number" == typeof _0x2c73fe ? _0x10f3a7(_0x2c73fe, undefined) : "string" == typeof _0x2c73fe ? _0x8e327f(_0x2c73fe, undefined) : new _0x4f3b7b(_0x2c73fe.low, _0x2c73fe.high, _0x2c73fe.unsigned);
          }
          return new _0x4f3b7b(this.low & _0x2c73fe.low, this.high & _0x2c73fe.high, this.unsigned);
        };
        _0x35606a.or = function (_0x53d315) {
          if (!(true === (_0x53d315 && _0x53d315.__isLong__))) {
            _0x53d315 = "number" == typeof _0x53d315 ? _0x10f3a7(_0x53d315, undefined) : "string" == typeof _0x53d315 ? _0x8e327f(_0x53d315, undefined) : new _0x4f3b7b(_0x53d315.low, _0x53d315.high, _0x53d315.unsigned);
          }
          return new _0x4f3b7b(this.low | _0x53d315.low, this.high | _0x53d315.high, this.unsigned);
        };
        _0x35606a.xor = function (_0x598e43) {
          if (!(true === (_0x598e43 && _0x598e43.__isLong__))) {
            _0x598e43 = "number" == typeof _0x598e43 ? _0x10f3a7(_0x598e43, undefined) : "string" == typeof _0x598e43 ? _0x8e327f(_0x598e43, undefined) : new _0x4f3b7b(_0x598e43.low, _0x598e43.high, _0x598e43.unsigned);
          }
          return new _0x4f3b7b(this.low ^ _0x598e43.low, this.high ^ _0x598e43.high, this.unsigned);
        };
        _0x35606a.shiftLeft = function (_0x2eb2a6) {
          if (true === (_0x2eb2a6 && _0x2eb2a6.__isLong__)) {
            _0x2eb2a6 = _0x2eb2a6.toInt();
          }
          return 0x0 == (_0x2eb2a6 &= 0x3f) ? this : _0x2eb2a6 < 0x20 ? new _0x4f3b7b(this.low << _0x2eb2a6, this.high << _0x2eb2a6 | this.low >>> 0x20 - _0x2eb2a6, this.unsigned) : new _0x4f3b7b(0x0, this.low << _0x2eb2a6 - 0x20, this.unsigned);
        };
        _0x35606a.shl = _0x35606a.shiftLeft;
        _0x35606a.shiftRight = function (_0x4f09a8) {
          if (true === (_0x4f09a8 && _0x4f09a8.__isLong__)) {
            _0x4f09a8 = _0x4f09a8.toInt();
          }
          return 0x0 == (_0x4f09a8 &= 0x3f) ? this : _0x4f09a8 < 0x20 ? new _0x4f3b7b(this.low >>> _0x4f09a8 | this.high << 0x20 - _0x4f09a8, this.high >> _0x4f09a8, this.unsigned) : new _0x4f3b7b(this.high >> _0x4f09a8 - 0x20, this.high >= 0x0 ? 0x0 : -0x1, this.unsigned);
        };
        _0x35606a.shr = _0x35606a.shiftRight;
        _0x35606a.shiftRightUnsigned = function (_0xaf118e) {
          if (true === (_0xaf118e && _0xaf118e.__isLong__)) {
            _0xaf118e = _0xaf118e.toInt();
          }
          if (0x0 === (_0xaf118e &= 0x3f)) {
            return this;
          }
          var _0x15b333 = this.high;
          return _0xaf118e < 0x20 ? new _0x4f3b7b(this.low >>> _0xaf118e | _0x15b333 << 0x20 - _0xaf118e, _0x15b333 >>> _0xaf118e, this.unsigned) : new _0x4f3b7b(0x20 === _0xaf118e ? _0x15b333 : _0x15b333 >>> _0xaf118e - 0x20, 0x0, this.unsigned);
        };
        _0x35606a.shru = _0x35606a.shiftRightUnsigned;
        _0x35606a.shr_u = _0x35606a.shiftRightUnsigned;
        _0x35606a.toSigned = function () {
          return this.unsigned ? new _0x4f3b7b(this.low, this.high, false) : this;
        };
        _0x35606a.toUnsigned = function () {
          return this.unsigned ? this : new _0x4f3b7b(this.low, this.high, true);
        };
        _0x35606a.toBytes = function (_0x32c213) {
          return _0x32c213 ? this.toBytesLE() : this.toBytesBE();
        };
        _0x35606a.toBytesLE = function () {
          var _0x209320 = this.high;
          var _0x1614c3 = this.low;
          return [0xff & _0x1614c3, _0x1614c3 >>> 0x8 & 0xff, _0x1614c3 >>> 0x10 & 0xff, _0x1614c3 >>> 0x18, 0xff & _0x209320, _0x209320 >>> 0x8 & 0xff, _0x209320 >>> 0x10 & 0xff, _0x209320 >>> 0x18];
        };
        _0x35606a.toBytesBE = function () {
          var _0x2ce037 = this.high;
          var _0x2df0ef = this.low;
          return [_0x2ce037 >>> 0x18, _0x2ce037 >>> 0x10 & 0xff, _0x2ce037 >>> 0x8 & 0xff, 0xff & _0x2ce037, _0x2df0ef >>> 0x18, _0x2df0ef >>> 0x10 & 0xff, _0x2df0ef >>> 0x8 & 0xff, 0xff & _0x2df0ef];
        };
        _0x4f3b7b.fromBytes = function (_0x2e4a92, _0x4aa571, _0x6a466c) {
          return _0x6a466c ? _0x4f3b7b.fromBytesLE(_0x2e4a92, _0x4aa571) : _0x4f3b7b.fromBytesBE(_0x2e4a92, _0x4aa571);
        };
        _0x4f3b7b.fromBytesLE = function (_0x36d5fd, _0x3a0846) {
          return new _0x4f3b7b(_0x36d5fd[0x0] | _0x36d5fd[0x1] << 0x8 | _0x36d5fd[0x2] << 0x10 | _0x36d5fd[0x3] << 0x18, _0x36d5fd[0x4] | _0x36d5fd[0x5] << 0x8 | _0x36d5fd[0x6] << 0x10 | _0x36d5fd[0x7] << 0x18, _0x3a0846);
        };
        _0x4f3b7b.fromBytesBE = function (_0x4d607b, _0x5a625d) {
          return new _0x4f3b7b(_0x4d607b[0x4] << 0x18 | _0x4d607b[0x5] << 0x10 | _0x4d607b[0x6] << 0x8 | _0x4d607b[0x7], _0x4d607b[0x0] << 0x18 | _0x4d607b[0x1] << 0x10 | _0x4d607b[0x2] << 0x8 | _0x4d607b[0x3], _0x5a625d);
        };
        _0x335118 = _0x2af8f8.exports;
      }, {});
      _0x55cf1e.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/long/src/long.js");
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js", function (_0x209a3a, _0x2f9b8e, _0x554a13, _0x4acefd, _0x1f248c) {
        _0x554a13.exports = function (_0x1cdd89, _0x144213) {
          var _0x38eacb = new Array(arguments.length - 0x1);
          var _0x18c5a5 = 0x0;
          var _0x1145b2 = 0x2;
          var _0x5b20eb = true;
          for (; _0x1145b2 < arguments.length;) {
            _0x38eacb[_0x18c5a5++] = arguments[_0x1145b2++];
          }
          return new Promise(function (_0x196789, _0x933c4e) {
            _0x38eacb[_0x18c5a5] = function (_0x3b9360) {
              if (_0x5b20eb) {
                _0x5b20eb = false;
                if (_0x3b9360) {
                  _0x933c4e(_0x3b9360);
                } else {
                  var _0x207d72 = new Array(arguments.length - 0x1);
                  for (var _0x4f8c67 = 0x0; _0x4f8c67 < _0x207d72.length;) {
                    _0x207d72[_0x4f8c67++] = arguments[_0x4f8c67];
                  }
                  _0x196789.apply(null, _0x207d72);
                }
              }
            };
            try {
              _0x1cdd89.apply(_0x144213 || null, _0x38eacb);
            } catch (_0x16e3cb) {
              if (_0x5b20eb) {
                _0x5b20eb = false;
                _0x933c4e(_0x16e3cb);
              }
            }
          });
        };
        _0x554a13.exports;
      }, {});
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js", function (_0x13940e, _0x4dde1a, _0x5ef86e, _0x450434, _0x55d6b4) {
        _0x13940e.length = function (_0x5a7071) {
          var _0x1f0d8b = _0x5a7071.length;
          if (!_0x1f0d8b) {
            return 0x0;
          }
          for (var _0x59c432 = 0x0; --_0x1f0d8b % 0x4 > 0x1 && '=' === _0x5a7071.charAt(_0x1f0d8b);) {
            ++_0x59c432;
          }
          return Math.ceil(0x3 * _0x5a7071.length) / 0x4 - _0x59c432;
        };
        var _0x3b7474 = new Array(0x40);
        var _0x2c046c = new Array(0x7b);
        for (var _0x43866f = 0x0; _0x43866f < 0x40;) {
          _0x2c046c[_0x3b7474[_0x43866f] = _0x43866f < 0x1a ? _0x43866f + 0x41 : _0x43866f < 0x34 ? _0x43866f + 0x47 : _0x43866f < 0x3e ? _0x43866f - 0x4 : _0x43866f - 0x3b | 0x2b] = _0x43866f++;
        }
        _0x13940e.encode = function (_0x5ec8aa, _0x3ca17a, _0x1cfee8) {
          var _0x1928b1;
          var _0x4ad780 = null;
          var _0x4bc1c6 = [];
          var _0x1f5d19 = 0x0;
          for (var _0x37c10f = 0x0; _0x3ca17a < _0x1cfee8;) {
            var _0x5d8349 = _0x5ec8aa[_0x3ca17a++];
            switch (_0x37c10f) {
              case 0x0:
                _0x4bc1c6[_0x1f5d19++] = _0x3b7474[_0x5d8349 >> 0x2];
                _0x1928b1 = (0x3 & _0x5d8349) << 0x4;
                _0x37c10f = 0x1;
                break;
              case 0x1:
                _0x4bc1c6[_0x1f5d19++] = _0x3b7474[_0x1928b1 | _0x5d8349 >> 0x4];
                _0x1928b1 = (0xf & _0x5d8349) << 0x2;
                _0x37c10f = 0x2;
                break;
              case 0x2:
                _0x4bc1c6[_0x1f5d19++] = _0x3b7474[_0x1928b1 | _0x5d8349 >> 0x6];
                _0x4bc1c6[_0x1f5d19++] = _0x3b7474[0x3f & _0x5d8349];
                _0x37c10f = 0x0;
            }
            if (_0x1f5d19 > 0x1fff) {
              (_0x4ad780 || (_0x4ad780 = [])).push(String.fromCharCode.apply(String, _0x4bc1c6));
              _0x1f5d19 = 0x0;
            }
          }
          if (_0x37c10f) {
            _0x4bc1c6[_0x1f5d19++] = _0x3b7474[_0x1928b1];
            _0x4bc1c6[_0x1f5d19++] = 0x3d;
            if (0x1 === _0x37c10f) {
              _0x4bc1c6[_0x1f5d19++] = 0x3d;
            }
          }
          return _0x4ad780 ? (_0x1f5d19 && _0x4ad780.push(String.fromCharCode.apply(String, _0x4bc1c6.slice(0x0, _0x1f5d19))), _0x4ad780.join('')) : String.fromCharCode.apply(String, _0x4bc1c6.slice(0x0, _0x1f5d19));
        };
        _0x13940e.decode = function (_0x25d7a0, _0x43ffbe, _0x4791f0) {
          var _0x3964aa;
          var _0x25eb63 = _0x4791f0;
          var _0x4503fc = 0x0;
          for (var _0x232afd = 0x0; _0x232afd < _0x25d7a0.length;) {
            var _0x576b6f = _0x25d7a0.charCodeAt(_0x232afd++);
            if (0x3d === _0x576b6f && _0x4503fc > 0x1) {
              break;
            }
            if (undefined === (_0x576b6f = _0x2c046c[_0x576b6f])) {
              throw Error("invalid encoding");
            }
            switch (_0x4503fc) {
              case 0x0:
                _0x3964aa = _0x576b6f;
                _0x4503fc = 0x1;
                break;
              case 0x1:
                _0x43ffbe[_0x4791f0++] = _0x3964aa << 0x2 | (0x30 & _0x576b6f) >> 0x4;
                _0x3964aa = _0x576b6f;
                _0x4503fc = 0x2;
                break;
              case 0x2:
                _0x43ffbe[_0x4791f0++] = (0xf & _0x3964aa) << 0x4 | (0x3c & _0x576b6f) >> 0x2;
                _0x3964aa = _0x576b6f;
                _0x4503fc = 0x3;
                break;
              case 0x3:
                _0x43ffbe[_0x4791f0++] = (0x3 & _0x3964aa) << 0x6 | _0x576b6f;
                _0x4503fc = 0x0;
            }
          }
          if (0x1 === _0x4503fc) {
            throw Error("invalid encoding");
          }
          return _0x4791f0 - _0x25eb63;
        };
        _0x13940e.test = function (_0x4b94a3) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x4b94a3);
        };
        _0x5ef86e.exports;
      }, {});
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js", function (_0x25dcda, _0x29d766, _0x3872ac, _0x1fc0ff, _0x2a930a) {
        function _0x56d5d4() {
          this._listeners = {};
        }
        _0x3872ac.exports = _0x56d5d4;
        _0x56d5d4.prototype.on = function (_0x522621, _0x2201ac, _0x106a53) {
          (this._listeners[_0x522621] || (this._listeners[_0x522621] = [])).push({
            'fn': _0x2201ac,
            'ctx': _0x106a53 || this
          });
          return this;
        };
        _0x56d5d4.prototype.off = function (_0x2ef14d, _0x3aaa01) {
          if (undefined === _0x2ef14d) {
            this._listeners = {};
          } else {
            if (undefined === _0x3aaa01) {
              this._listeners[_0x2ef14d] = [];
            } else {
              var _0x26b14c = this._listeners[_0x2ef14d];
              for (var _0x10bf86 = 0x0; _0x10bf86 < _0x26b14c.length;) {
                if (_0x26b14c[_0x10bf86].fn === _0x3aaa01) {
                  _0x26b14c.splice(_0x10bf86, 0x1);
                } else {
                  ++_0x10bf86;
                }
              }
            }
          }
          return this;
        };
        _0x56d5d4.prototype.emit = function (_0x135f18) {
          var _0x35270d = this._listeners[_0x135f18];
          if (_0x35270d) {
            var _0x5a104e = [];
            for (var _0x4d169a = 0x1; _0x4d169a < arguments.length;) {
              _0x5a104e.push(arguments[_0x4d169a++]);
            }
            for (_0x4d169a = 0x0; _0x4d169a < _0x35270d.length;) {
              _0x35270d[_0x4d169a].fn.apply(_0x35270d[_0x4d169a++].ctx, _0x5a104e);
            }
          }
          return this;
        };
        _0x3872ac.exports;
      }, {});
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/float/index.js", function (_0x1a5b19, _0x31eef8, _0x446f5e, _0x15bcb1, _0x333f6a) {
        function _0x14ad06(_0x521768) {
          if ("undefined" != typeof Float32Array) {
            (function () {
              var _0x266a78 = new Float32Array([-0x0]);
              var _0x2d8d28 = new Uint8Array(_0x266a78.buffer);
              var _0xda2069 = 0x80 === _0x2d8d28[0x3];
              function _0x2fa1b0(_0xb9c581, _0x3544e8, _0x3e51dc) {
                _0x266a78[0x0] = _0xb9c581;
                _0x3544e8[_0x3e51dc] = _0x2d8d28[0x0];
                _0x3544e8[_0x3e51dc + 0x1] = _0x2d8d28[0x1];
                _0x3544e8[_0x3e51dc + 0x2] = _0x2d8d28[0x2];
                _0x3544e8[_0x3e51dc + 0x3] = _0x2d8d28[0x3];
              }
              function _0x420a0e(_0x3831d8, _0x2c74a1, _0x22800e) {
                _0x266a78[0x0] = _0x3831d8;
                _0x2c74a1[_0x22800e] = _0x2d8d28[0x3];
                _0x2c74a1[_0x22800e + 0x1] = _0x2d8d28[0x2];
                _0x2c74a1[_0x22800e + 0x2] = _0x2d8d28[0x1];
                _0x2c74a1[_0x22800e + 0x3] = _0x2d8d28[0x0];
              }
              function _0x32af5d(_0x6afdc9, _0x1f2bdc) {
                _0x2d8d28[0x0] = _0x6afdc9[_0x1f2bdc];
                _0x2d8d28[0x1] = _0x6afdc9[_0x1f2bdc + 0x1];
                _0x2d8d28[0x2] = _0x6afdc9[_0x1f2bdc + 0x2];
                _0x2d8d28[0x3] = _0x6afdc9[_0x1f2bdc + 0x3];
                return _0x266a78[0x0];
              }
              function _0x56df77(_0x5a7169, _0x23ef94) {
                _0x2d8d28[0x3] = _0x5a7169[_0x23ef94];
                _0x2d8d28[0x2] = _0x5a7169[_0x23ef94 + 0x1];
                _0x2d8d28[0x1] = _0x5a7169[_0x23ef94 + 0x2];
                _0x2d8d28[0x0] = _0x5a7169[_0x23ef94 + 0x3];
                return _0x266a78[0x0];
              }
              _0x521768.writeFloatLE = _0xda2069 ? _0x2fa1b0 : _0x420a0e;
              _0x521768.writeFloatBE = _0xda2069 ? _0x420a0e : _0x2fa1b0;
              _0x521768.readFloatLE = _0xda2069 ? _0x32af5d : _0x56df77;
              _0x521768.readFloatBE = _0xda2069 ? _0x56df77 : _0x32af5d;
            })();
          } else {
            (function () {
              function _0x4a04b1(_0x3751e6, _0x12baa9, _0x50017b, _0xfc466) {
                var _0x2a1f8b = _0x12baa9 < 0x0 ? 0x1 : 0x0;
                if (_0x2a1f8b) {
                  _0x12baa9 = -_0x12baa9;
                }
                if (0x0 === _0x12baa9) {
                  _0x3751e6(0x1 / _0x12baa9 > 0x0 ? 0x0 : 0x80000000, _0x50017b, _0xfc466);
                } else {
                  if (isNaN(_0x12baa9)) {
                    _0x3751e6(0x7fc00000, _0x50017b, _0xfc466);
                  } else {
                    if (_0x12baa9 > 0xffffff00000000000000000000000000) {
                      _0x3751e6((_0x2a1f8b << 0x1f | 0x7f800000) >>> 0x0, _0x50017b, _0xfc466);
                    } else {
                      if (_0x12baa9 < 1.1754943508222875e-38) {
                        _0x3751e6((_0x2a1f8b << 0x1f | Math.round(_0x12baa9 / 1.401298464324817e-45)) >>> 0x0, _0x50017b, _0xfc466);
                      } else {
                        var _0xa1b70f = Math.floor(Math.log(_0x12baa9) / Math.LN2);
                        _0x3751e6((_0x2a1f8b << 0x1f | _0xa1b70f + 0x7f << 0x17 | 0x7fffff & Math.round(_0x12baa9 * Math.pow(0x2, -_0xa1b70f) * 0x800000)) >>> 0x0, _0x50017b, _0xfc466);
                      }
                    }
                  }
                }
              }
              function _0x4fa627(_0xd957ab, _0x38c8ae, _0x302e39) {
                var _0x1d25a2 = _0xd957ab(_0x38c8ae, _0x302e39);
                var _0x5b0818 = 0x2 * (_0x1d25a2 >> 0x1f) + 0x1;
                var _0x159c7e = _0x1d25a2 >>> 0x17 & 0xff;
                var _0x199213 = 0x7fffff & _0x1d25a2;
                return 0xff === _0x159c7e ? _0x199213 ? NaN : _0x5b0818 * Infinity : 0x0 === _0x159c7e ? 1.401298464324817e-45 * _0x5b0818 * _0x199213 : _0x5b0818 * Math.pow(0x2, _0x159c7e - 0x96) * (_0x199213 + 0x800000);
              }
              _0x521768.writeFloatLE = _0x4a04b1.bind(null, _0x51d471);
              _0x521768.writeFloatBE = _0x4a04b1.bind(null, _0x34e8f3);
              _0x521768.readFloatLE = _0x4fa627.bind(null, _0xeed962);
              _0x521768.readFloatBE = _0x4fa627.bind(null, _0x5f1769);
            })();
          }
          if ('undefined' != typeof Float64Array) {
            (function () {
              var _0x4d9723 = new Float64Array([-0x0]);
              var _0x26094d = new Uint8Array(_0x4d9723.buffer);
              var _0x54be52 = 0x80 === _0x26094d[0x7];
              function _0x3caa78(_0x303b34, _0x7cbcc, _0x117bcd) {
                _0x4d9723[0x0] = _0x303b34;
                _0x7cbcc[_0x117bcd] = _0x26094d[0x0];
                _0x7cbcc[_0x117bcd + 0x1] = _0x26094d[0x1];
                _0x7cbcc[_0x117bcd + 0x2] = _0x26094d[0x2];
                _0x7cbcc[_0x117bcd + 0x3] = _0x26094d[0x3];
                _0x7cbcc[_0x117bcd + 0x4] = _0x26094d[0x4];
                _0x7cbcc[_0x117bcd + 0x5] = _0x26094d[0x5];
                _0x7cbcc[_0x117bcd + 0x6] = _0x26094d[0x6];
                _0x7cbcc[_0x117bcd + 0x7] = _0x26094d[0x7];
              }
              function _0xd6fc5a(_0x39e456, _0x38a5ee, _0x572352) {
                _0x4d9723[0x0] = _0x39e456;
                _0x38a5ee[_0x572352] = _0x26094d[0x7];
                _0x38a5ee[_0x572352 + 0x1] = _0x26094d[0x6];
                _0x38a5ee[_0x572352 + 0x2] = _0x26094d[0x5];
                _0x38a5ee[_0x572352 + 0x3] = _0x26094d[0x4];
                _0x38a5ee[_0x572352 + 0x4] = _0x26094d[0x3];
                _0x38a5ee[_0x572352 + 0x5] = _0x26094d[0x2];
                _0x38a5ee[_0x572352 + 0x6] = _0x26094d[0x1];
                _0x38a5ee[_0x572352 + 0x7] = _0x26094d[0x0];
              }
              function _0x3ddaa3(_0x450aa1, _0x2b4da7) {
                _0x26094d[0x0] = _0x450aa1[_0x2b4da7];
                _0x26094d[0x1] = _0x450aa1[_0x2b4da7 + 0x1];
                _0x26094d[0x2] = _0x450aa1[_0x2b4da7 + 0x2];
                _0x26094d[0x3] = _0x450aa1[_0x2b4da7 + 0x3];
                _0x26094d[0x4] = _0x450aa1[_0x2b4da7 + 0x4];
                _0x26094d[0x5] = _0x450aa1[_0x2b4da7 + 0x5];
                _0x26094d[0x6] = _0x450aa1[_0x2b4da7 + 0x6];
                _0x26094d[0x7] = _0x450aa1[_0x2b4da7 + 0x7];
                return _0x4d9723[0x0];
              }
              function _0x4aaa58(_0x343d85, _0x513ee4) {
                _0x26094d[0x7] = _0x343d85[_0x513ee4];
                _0x26094d[0x6] = _0x343d85[_0x513ee4 + 0x1];
                _0x26094d[0x5] = _0x343d85[_0x513ee4 + 0x2];
                _0x26094d[0x4] = _0x343d85[_0x513ee4 + 0x3];
                _0x26094d[0x3] = _0x343d85[_0x513ee4 + 0x4];
                _0x26094d[0x2] = _0x343d85[_0x513ee4 + 0x5];
                _0x26094d[0x1] = _0x343d85[_0x513ee4 + 0x6];
                _0x26094d[0x0] = _0x343d85[_0x513ee4 + 0x7];
                return _0x4d9723[0x0];
              }
              _0x521768.writeDoubleLE = _0x54be52 ? _0x3caa78 : _0xd6fc5a;
              _0x521768.writeDoubleBE = _0x54be52 ? _0xd6fc5a : _0x3caa78;
              _0x521768.readDoubleLE = _0x54be52 ? _0x3ddaa3 : _0x4aaa58;
              _0x521768.readDoubleBE = _0x54be52 ? _0x4aaa58 : _0x3ddaa3;
            })();
          } else {
            (function () {
              function _0x351cae(_0x437722, _0x1aa0bc, _0x30f337, _0x2e7eb2, _0x2c3d99, _0x3b28e6) {
                var _0x14a49c = _0x2e7eb2 < 0x0 ? 0x1 : 0x0;
                if (_0x14a49c) {
                  _0x2e7eb2 = -_0x2e7eb2;
                }
                if (0x0 === _0x2e7eb2) {
                  _0x437722(0x0, _0x2c3d99, _0x3b28e6 + _0x1aa0bc);
                  _0x437722(0x1 / _0x2e7eb2 > 0x0 ? 0x0 : 0x80000000, _0x2c3d99, _0x3b28e6 + _0x30f337);
                } else {
                  if (isNaN(_0x2e7eb2)) {
                    _0x437722(0x0, _0x2c3d99, _0x3b28e6 + _0x1aa0bc);
                    _0x437722(0x7ff80000, _0x2c3d99, _0x3b28e6 + _0x30f337);
                  } else {
                    if (_0x2e7eb2 > 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                      _0x437722(0x0, _0x2c3d99, _0x3b28e6 + _0x1aa0bc);
                      _0x437722((_0x14a49c << 0x1f | 0x7ff00000) >>> 0x0, _0x2c3d99, _0x3b28e6 + _0x30f337);
                    } else {
                      var _0x1ecf04;
                      if (_0x2e7eb2 < 2.2250738585072014e-308) {
                        _0x437722((_0x1ecf04 = _0x2e7eb2 / 5e-324) >>> 0x0, _0x2c3d99, _0x3b28e6 + _0x1aa0bc);
                        _0x437722((_0x14a49c << 0x1f | _0x1ecf04 / 0x100000000) >>> 0x0, _0x2c3d99, _0x3b28e6 + _0x30f337);
                      } else {
                        var _0x103a0b = Math.floor(Math.log(_0x2e7eb2) / Math.LN2);
                        if (0x400 === _0x103a0b) {
                          _0x103a0b = 0x3ff;
                        }
                        _0x437722(0x10000000000000 * (_0x1ecf04 = _0x2e7eb2 * Math.pow(0x2, -_0x103a0b)) >>> 0x0, _0x2c3d99, _0x3b28e6 + _0x1aa0bc);
                        _0x437722((_0x14a49c << 0x1f | _0x103a0b + 0x3ff << 0x14 | 0x100000 * _0x1ecf04 & 0xfffff) >>> 0x0, _0x2c3d99, _0x3b28e6 + _0x30f337);
                      }
                    }
                  }
                }
              }
              function _0xa3f8a(_0x1236b3, _0x1ffc59, _0x3a1281, _0x2a1481, _0x5d787e) {
                var _0x5593a2 = _0x1236b3(_0x2a1481, _0x5d787e + _0x1ffc59);
                var _0x1d0521 = _0x1236b3(_0x2a1481, _0x5d787e + _0x3a1281);
                var _0x292461 = 0x2 * (_0x1d0521 >> 0x1f) + 0x1;
                var _0x4610a4 = _0x1d0521 >>> 0x14 & 0x7ff;
                var _0x2a4bfa = 0x100000000 * (0xfffff & _0x1d0521) + _0x5593a2;
                return 0x7ff === _0x4610a4 ? _0x2a4bfa ? NaN : _0x292461 * Infinity : 0x0 === _0x4610a4 ? 5e-324 * _0x292461 * _0x2a4bfa : _0x292461 * Math.pow(0x2, _0x4610a4 - 0x433) * (_0x2a4bfa + 0x10000000000000);
              }
              _0x521768.writeDoubleLE = _0x351cae.bind(null, _0x51d471, 0x0, 0x4);
              _0x521768.writeDoubleBE = _0x351cae.bind(null, _0x34e8f3, 0x4, 0x0);
              _0x521768.readDoubleLE = _0xa3f8a.bind(null, _0xeed962, 0x0, 0x4);
              _0x521768.readDoubleBE = _0xa3f8a.bind(null, _0x5f1769, 0x4, 0x0);
            })();
          }
          return _0x521768;
        }
        function _0x51d471(_0x1f8832, _0x51e72b, _0xca9142) {
          _0x51e72b[_0xca9142] = 0xff & _0x1f8832;
          _0x51e72b[_0xca9142 + 0x1] = _0x1f8832 >>> 0x8 & 0xff;
          _0x51e72b[_0xca9142 + 0x2] = _0x1f8832 >>> 0x10 & 0xff;
          _0x51e72b[_0xca9142 + 0x3] = _0x1f8832 >>> 0x18;
        }
        function _0x34e8f3(_0x21d337, _0x2746a7, _0x472b73) {
          _0x2746a7[_0x472b73] = _0x21d337 >>> 0x18;
          _0x2746a7[_0x472b73 + 0x1] = _0x21d337 >>> 0x10 & 0xff;
          _0x2746a7[_0x472b73 + 0x2] = _0x21d337 >>> 0x8 & 0xff;
          _0x2746a7[_0x472b73 + 0x3] = 0xff & _0x21d337;
        }
        function _0xeed962(_0x1cb4db, _0x48a83d) {
          return (_0x1cb4db[_0x48a83d] | _0x1cb4db[_0x48a83d + 0x1] << 0x8 | _0x1cb4db[_0x48a83d + 0x2] << 0x10 | _0x1cb4db[_0x48a83d + 0x3] << 0x18) >>> 0x0;
        }
        function _0x5f1769(_0x4ba942, _0x1f0abf) {
          return (_0x4ba942[_0x1f0abf] << 0x18 | _0x4ba942[_0x1f0abf + 0x1] << 0x10 | _0x4ba942[_0x1f0abf + 0x2] << 0x8 | _0x4ba942[_0x1f0abf + 0x3]) >>> 0x0;
        }
        _0x446f5e.exports = _0x14ad06(_0x14ad06);
        _0x446f5e.exports;
        _0x446f5e.exports.writeFloatLE;
        _0x446f5e.exports.writeFloatBE;
        _0x446f5e.exports.readFloatLE;
        _0x446f5e.exports.readFloatBE;
        _0x446f5e.exports.writeDoubleLE;
        _0x446f5e.exports.writeDoubleBE;
        _0x446f5e.exports.readDoubleLE;
        _0x446f5e.exports.readDoubleBE;
      }, {});
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js", function (_0x9c746f, _0x299787, _0x5022e7, _0x28f87d, _0x11febe) {
        function _0x4c6d3d(_0x132e45) {
          try {
            var _0x2a8e24 = eval("quire".replace(/^/, 're'))(_0x132e45);
            if (_0x2a8e24 && (_0x2a8e24.length || Object.keys(_0x2a8e24).length)) {
              return _0x2a8e24;
            }
          } catch (_0x359a78) {}
          return null;
        }
        _0x5022e7.exports = _0x4c6d3d;
        _0x5022e7.exports;
      }, {});
      _0x55cf1e.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js', function (_0x33e620, _0x125c68, _0x5dc023, _0x2934f5, _0x5a5438) {
        _0x33e620.length = function (_0x49e65f) {
          var _0x4faa34 = 0x0;
          var _0x36b606 = 0x0;
          for (var _0x4a1ab9 = 0x0; _0x4a1ab9 < _0x49e65f.length; ++_0x4a1ab9) {
            if ((_0x36b606 = _0x49e65f.charCodeAt(_0x4a1ab9)) < 0x80) {
              _0x4faa34 += 0x1;
            } else if (_0x36b606 < 0x800) {
              _0x4faa34 += 0x2;
            } else if (0xd800 == (0xfc00 & _0x36b606) && 0xdc00 == (0xfc00 & _0x49e65f.charCodeAt(_0x4a1ab9 + 0x1))) {
              ++_0x4a1ab9;
              _0x4faa34 += 0x4;
            } else {
              _0x4faa34 += 0x3;
            }
          }
          return _0x4faa34;
        };
        _0x33e620.read = function (_0x2ea430, _0x5e53bb, _0x2eb232) {
          if (_0x2eb232 - _0x5e53bb < 0x1) {
            return '';
          }
          var _0x50cd36;
          var _0x112a0f = null;
          var _0x561a1d = [];
          for (var _0x50e7aa = 0x0; _0x5e53bb < _0x2eb232;) {
            if ((_0x50cd36 = _0x2ea430[_0x5e53bb++]) < 0x80) {
              _0x561a1d[_0x50e7aa++] = _0x50cd36;
            } else if (_0x50cd36 > 0xbf && _0x50cd36 < 0xe0) {
              _0x561a1d[_0x50e7aa++] = (0x1f & _0x50cd36) << 0x6 | 0x3f & _0x2ea430[_0x5e53bb++];
            } else if (_0x50cd36 > 0xef && _0x50cd36 < 0x16d) {
              _0x50cd36 = ((0x7 & _0x50cd36) << 0x12 | (0x3f & _0x2ea430[_0x5e53bb++]) << 0xc | (0x3f & _0x2ea430[_0x5e53bb++]) << 0x6 | 0x3f & _0x2ea430[_0x5e53bb++]) - 0x10000;
              _0x561a1d[_0x50e7aa++] = 0xd800 + (_0x50cd36 >> 0xa);
              _0x561a1d[_0x50e7aa++] = 0xdc00 + (0x3ff & _0x50cd36);
            } else {
              _0x561a1d[_0x50e7aa++] = (0xf & _0x50cd36) << 0xc | (0x3f & _0x2ea430[_0x5e53bb++]) << 0x6 | 0x3f & _0x2ea430[_0x5e53bb++];
            }
            if (_0x50e7aa > 0x1fff) {
              (_0x112a0f || (_0x112a0f = [])).push(String.fromCharCode.apply(String, _0x561a1d));
              _0x50e7aa = 0x0;
            }
          }
          return _0x112a0f ? (_0x50e7aa && _0x112a0f.push(String.fromCharCode.apply(String, _0x561a1d.slice(0x0, _0x50e7aa))), _0x112a0f.join('')) : String.fromCharCode.apply(String, _0x561a1d.slice(0x0, _0x50e7aa));
        };
        _0x33e620.write = function (_0x42377f, _0x5a8091, _0xe94686) {
          var _0x4d4c0a;
          var _0x2171cc;
          var _0x56e656 = _0xe94686;
          for (var _0x39acf1 = 0x0; _0x39acf1 < _0x42377f.length; ++_0x39acf1) {
            if ((_0x4d4c0a = _0x42377f.charCodeAt(_0x39acf1)) < 0x80) {
              _0x5a8091[_0xe94686++] = _0x4d4c0a;
            } else if (_0x4d4c0a < 0x800) {
              _0x5a8091[_0xe94686++] = _0x4d4c0a >> 0x6 | 0xc0;
              _0x5a8091[_0xe94686++] = 0x3f & _0x4d4c0a | 0x80;
            } else if (0xd800 == (0xfc00 & _0x4d4c0a) && 0xdc00 == (0xfc00 & (_0x2171cc = _0x42377f.charCodeAt(_0x39acf1 + 0x1)))) {
              _0x4d4c0a = 0x10000 + ((0x3ff & _0x4d4c0a) << 0xa) + (0x3ff & _0x2171cc);
              ++_0x39acf1;
              _0x5a8091[_0xe94686++] = _0x4d4c0a >> 0x12 | 0xf0;
              _0x5a8091[_0xe94686++] = _0x4d4c0a >> 0xc & 0x3f | 0x80;
              _0x5a8091[_0xe94686++] = _0x4d4c0a >> 0x6 & 0x3f | 0x80;
              _0x5a8091[_0xe94686++] = 0x3f & _0x4d4c0a | 0x80;
            } else {
              _0x5a8091[_0xe94686++] = _0x4d4c0a >> 0xc | 0xe0;
              _0x5a8091[_0xe94686++] = _0x4d4c0a >> 0x6 & 0x3f | 0x80;
              _0x5a8091[_0xe94686++] = 0x3f & _0x4d4c0a | 0x80;
            }
          }
          return _0xe94686 - _0x56e656;
        };
        _0x5dc023.exports;
      }, {});
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js", function (_0x3d3380, _0x465a38, _0x218bda, _0x32f0b2, _0x994c52) {
        _0x218bda.exports = function (_0x511b04, _0x193f8c, _0xa1dfac) {
          var _0x36d6d7 = _0xa1dfac || 0x2000;
          var _0x1a4364 = _0x36d6d7 >>> 0x1;
          var _0x4fc93c = null;
          var _0x2e4396 = _0x36d6d7;
          return function (_0x18a23a) {
            if (_0x18a23a < 0x1 || _0x18a23a > _0x1a4364) {
              return _0x511b04(_0x18a23a);
            }
            if (_0x2e4396 + _0x18a23a > _0x36d6d7) {
              _0x4fc93c = _0x511b04(_0x36d6d7);
              _0x2e4396 = 0x0;
            }
            var _0x38af70 = _0x193f8c.call(_0x4fc93c, _0x2e4396, _0x2e4396 += _0x18a23a);
            if (0x7 & _0x2e4396) {
              _0x2e4396 = 0x1 + (0x7 | _0x2e4396);
            }
            return _0x38af70;
          };
        };
        _0x218bda.exports;
      }, {});
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js", function (_0x57a34e, _0x58e628, _0x259afd, _0x12643b, _0x485ea8) {
        _0x259afd.exports = _0x1b3806;
        var _0x31fa4b = _0x58e628("../util/minimal");
        function _0x1b3806(_0x1a18cf, _0x2d7fe6) {
          this.lo = _0x1a18cf >>> 0x0;
          this.hi = _0x2d7fe6 >>> 0x0;
        }
        var _0x122e6c = _0x1b3806.zero = new _0x1b3806(0x0, 0x0);
        _0x122e6c.toNumber = function () {
          return 0x0;
        };
        _0x122e6c.zzEncode = _0x122e6c.zzDecode = function () {
          return this;
        };
        _0x122e6c.length = function () {
          return 0x1;
        };
        var _0x1f5e7d = _0x1b3806.zeroHash = "\0\0\0\0\0\0\0\0";
        _0x1b3806.fromNumber = function (_0x190e66) {
          if (0x0 === _0x190e66) {
            return _0x122e6c;
          }
          var _0x504a06 = _0x190e66 < 0x0;
          if (_0x504a06) {
            _0x190e66 = -_0x190e66;
          }
          var _0x11d9e1 = _0x190e66 >>> 0x0;
          var _0x40244d = (_0x190e66 - _0x11d9e1) / 0x100000000 >>> 0x0;
          if (_0x504a06) {
            _0x40244d = ~_0x40244d >>> 0x0;
            _0x11d9e1 = ~_0x11d9e1 >>> 0x0;
            if (++_0x11d9e1 > 0xffffffff) {
              _0x11d9e1 = 0x0;
              if (++_0x40244d > 0xffffffff) {
                _0x40244d = 0x0;
              }
            }
          }
          return new _0x1b3806(_0x11d9e1, _0x40244d);
        };
        _0x1b3806.from = function (_0x26eef6) {
          if ("number" == typeof _0x26eef6) {
            return _0x1b3806.fromNumber(_0x26eef6);
          }
          if (_0x31fa4b.isString(_0x26eef6)) {
            if (!_0x31fa4b.Long) {
              return _0x1b3806.fromNumber(parseInt(_0x26eef6, 0xa));
            }
            _0x26eef6 = _0x31fa4b.Long.fromString(_0x26eef6);
          }
          return _0x26eef6.low || _0x26eef6.high ? new _0x1b3806(_0x26eef6.low >>> 0x0, _0x26eef6.high >>> 0x0) : _0x122e6c;
        };
        _0x1b3806.prototype.toNumber = function (_0xaa0015) {
          if (!_0xaa0015 && this.hi >>> 0x1f) {
            var _0x5413d5 = 0x1 + ~this.lo >>> 0x0;
            var _0x5c8120 = ~this.hi >>> 0x0;
            if (!_0x5413d5) {
              _0x5c8120 = _0x5c8120 + 0x1 >>> 0x0;
            }
            return -(_0x5413d5 + 0x100000000 * _0x5c8120);
          }
          return this.lo + 0x100000000 * this.hi;
        };
        _0x1b3806.prototype.toLong = function (_0x222870) {
          return _0x31fa4b.Long ? new _0x31fa4b.Long(0x0 | this.lo, 0x0 | this.hi, Boolean(_0x222870)) : {
            'low': 0x0 | this.lo,
            'high': 0x0 | this.hi,
            'unsigned': Boolean(_0x222870)
          };
        };
        var _0x512d67 = String.prototype.charCodeAt;
        _0x1b3806.fromHash = function (_0x36901e) {
          return _0x36901e === _0x1f5e7d ? _0x122e6c : new _0x1b3806((_0x512d67.call(_0x36901e, 0x0) | _0x512d67.call(_0x36901e, 0x1) << 0x8 | _0x512d67.call(_0x36901e, 0x2) << 0x10 | _0x512d67.call(_0x36901e, 0x3) << 0x18) >>> 0x0, (_0x512d67.call(_0x36901e, 0x4) | _0x512d67.call(_0x36901e, 0x5) << 0x8 | _0x512d67.call(_0x36901e, 0x6) << 0x10 | _0x512d67.call(_0x36901e, 0x7) << 0x18) >>> 0x0);
        };
        _0x1b3806.prototype.toHash = function () {
          return String.fromCharCode(0xff & this.lo, this.lo >>> 0x8 & 0xff, this.lo >>> 0x10 & 0xff, this.lo >>> 0x18, 0xff & this.hi, this.hi >>> 0x8 & 0xff, this.hi >>> 0x10 & 0xff, this.hi >>> 0x18);
        };
        _0x1b3806.prototype.zzEncode = function () {
          var _0xff31f5 = this.hi >> 0x1f;
          this.hi = ((this.hi << 0x1 | this.lo >>> 0x1f) ^ _0xff31f5) >>> 0x0;
          this.lo = (this.lo << 0x1 ^ _0xff31f5) >>> 0x0;
          return this;
        };
        _0x1b3806.prototype.zzDecode = function () {
          var _0x5d4a1e = -(0x1 & this.lo);
          this.lo = ((this.lo >>> 0x1 | this.hi << 0x1f) ^ _0x5d4a1e) >>> 0x0;
          this.hi = (this.hi >>> 0x1 ^ _0x5d4a1e) >>> 0x0;
          return this;
        };
        _0x1b3806.prototype.length = function () {
          var _0x3adab8 = this.lo;
          var _0x3d5116 = (this.lo >>> 0x1c | this.hi << 0x4) >>> 0x0;
          var _0x57ae35 = this.hi >>> 0x18;
          return 0x0 === _0x57ae35 ? 0x0 === _0x3d5116 ? _0x3adab8 < 0x4000 ? _0x3adab8 < 0x80 ? 0x1 : 0x2 : _0x3adab8 < 0x200000 ? 0x3 : 0x4 : _0x3d5116 < 0x4000 ? _0x3d5116 < 0x80 ? 0x5 : 0x6 : _0x3d5116 < 0x200000 ? 0x7 : 0x8 : _0x57ae35 < 0x80 ? 0x9 : 0xa;
        };
        _0x259afd.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js", function (_0x12d6e3, _0x127efd, _0x4d57b5, _0x2432d0, _0x379c50) {
        function _0x13e581(_0x549e19, _0x467d03, _0x4d7bfe) {
          var _0x29772a = Object.keys(_0x467d03);
          for (var _0x1805b0 = 0x0; _0x1805b0 < _0x29772a.length; ++_0x1805b0) {
            if (!(undefined !== _0x549e19[_0x29772a[_0x1805b0]] && _0x4d7bfe)) {
              _0x549e19[_0x29772a[_0x1805b0]] = _0x467d03[_0x29772a[_0x1805b0]];
            }
          }
          return _0x549e19;
        }
        function _0x824be9(_0x3deace) {
          function _0x15058e(_0x5800d5, _0x181e7a) {
            if (!(this instanceof _0x15058e)) {
              return new _0x15058e(_0x5800d5, _0x181e7a);
            }
            Object.defineProperty(this, 'message', {
              'get': function () {
                return _0x5800d5;
              }
            });
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, _0x15058e);
            } else {
              Object.defineProperty(this, 'stack', {
                'value': new Error().stack || ''
              });
            }
            if (_0x181e7a) {
              _0x13e581(this, _0x181e7a);
            }
          }
          (_0x15058e.prototype = Object.create(Error.prototype)).constructor = _0x15058e;
          Object.defineProperty(_0x15058e.prototype, "name", {
            'get': function () {
              return _0x3deace;
            }
          });
          _0x15058e.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x15058e;
        }
        _0x12d6e3.asPromise = _0x127efd("@protobufjs/aspromise");
        _0x12d6e3.base64 = _0x127efd("@protobufjs/base64");
        _0x12d6e3.EventEmitter = _0x127efd('@protobufjs/eventemitter');
        _0x12d6e3.float = _0x127efd("@protobufjs/float");
        _0x12d6e3.inquire = _0x127efd("@protobufjs/inquire");
        _0x12d6e3.utf8 = _0x127efd('@protobufjs/utf8');
        _0x12d6e3.pool = _0x127efd("@protobufjs/pool");
        _0x12d6e3.LongBits = _0x127efd("./longbits");
        _0x12d6e3.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x12d6e3.global = _0x12d6e3.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        _0x12d6e3.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x12d6e3.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x12d6e3.isInteger = Number.isInteger || function (_0x5bc12f) {
          return "number" == typeof _0x5bc12f && isFinite(_0x5bc12f) && Math.floor(_0x5bc12f) === _0x5bc12f;
        };
        _0x12d6e3.isString = function (_0x5832b9) {
          return 'string' == typeof _0x5832b9 || _0x5832b9 instanceof String;
        };
        _0x12d6e3.isObject = function (_0x239757) {
          return _0x239757 && "object" == typeof _0x239757;
        };
        _0x12d6e3.isset = _0x12d6e3.isSet = function (_0x5acbd7, _0x51c968) {
          var _0x575a35 = _0x5acbd7[_0x51c968];
          return !(null == _0x575a35 || !_0x5acbd7.hasOwnProperty(_0x51c968)) && ("object" != typeof _0x575a35 || (Array.isArray(_0x575a35) ? _0x575a35.length : Object.keys(_0x575a35).length) > 0x0);
        };
        _0x12d6e3.Buffer = function () {
          try {
            var _0x221b6d = _0x12d6e3.inquire("buffer").Buffer;
            return _0x221b6d.prototype.utf8Write ? _0x221b6d : null;
          } catch (_0x15bfe4) {
            return null;
          }
        }();
        _0x12d6e3._Buffer_from = null;
        _0x12d6e3._Buffer_allocUnsafe = null;
        _0x12d6e3.newBuffer = function (_0x24080d) {
          return 'number' == typeof _0x24080d ? _0x12d6e3.Buffer ? _0x12d6e3._Buffer_allocUnsafe(_0x24080d) : new _0x12d6e3.Array(_0x24080d) : _0x12d6e3.Buffer ? _0x12d6e3._Buffer_from(_0x24080d) : "undefined" == typeof Uint8Array ? _0x24080d : new Uint8Array(_0x24080d);
        };
        _0x12d6e3.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array;
        _0x12d6e3.Long = _0x12d6e3.global.dcodeIO && _0x12d6e3.global.dcodeIO.Long || _0x12d6e3.global.Long || _0x12d6e3.inquire("long");
        _0x12d6e3.key2Re = /^true|false|0|1$/;
        _0x12d6e3.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x12d6e3.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x12d6e3.longToHash = function (_0x51b1f7) {
          return _0x51b1f7 ? _0x12d6e3.LongBits.from(_0x51b1f7).toHash() : _0x12d6e3.LongBits.zeroHash;
        };
        _0x12d6e3.longFromHash = function (_0x31bc0e, _0x38098c) {
          var _0xffc4f6 = _0x12d6e3.LongBits.fromHash(_0x31bc0e);
          return _0x12d6e3.Long ? _0x12d6e3.Long.fromBits(_0xffc4f6.lo, _0xffc4f6.hi, _0x38098c) : _0xffc4f6.toNumber(Boolean(_0x38098c));
        };
        _0x12d6e3.merge = _0x13e581;
        _0x12d6e3.lcFirst = function (_0x5ccfc8) {
          return _0x5ccfc8.charAt(0x0).toLowerCase() + _0x5ccfc8.substring(0x1);
        };
        _0x12d6e3.newError = _0x824be9;
        _0x12d6e3.ProtocolError = _0x824be9("ProtocolError");
        _0x12d6e3.oneOfGetter = function (_0x7823ca) {
          var _0x1ddac9 = {};
          for (var _0x3bd4fa = 0x0; _0x3bd4fa < _0x7823ca.length; ++_0x3bd4fa) {
            _0x1ddac9[_0x7823ca[_0x3bd4fa]] = 0x1;
          }
          return function () {
            var _0x55a4a4 = Object.keys(this);
            for (var _0x59aea8 = _0x55a4a4.length - 0x1; _0x59aea8 > -0x1; --_0x59aea8) {
              if (0x1 === _0x1ddac9[_0x55a4a4[_0x59aea8]] && undefined !== this[_0x55a4a4[_0x59aea8]] && null !== this[_0x55a4a4[_0x59aea8]]) {
                return _0x55a4a4[_0x59aea8];
              }
            }
          };
        };
        _0x12d6e3.oneOfSetter = function (_0x2efdf2) {
          return function (_0xbc5a9e) {
            for (var _0xe28b24 = 0x0; _0xe28b24 < _0x2efdf2.length; ++_0xe28b24) {
              if (_0x2efdf2[_0xe28b24] !== _0xbc5a9e) {
                delete this[_0x2efdf2[_0xe28b24]];
              }
            }
          };
        };
        _0x12d6e3.toJSONOptions = {
          'longs': String,
          'enums': String,
          'bytes': String,
          'json': true
        };
        _0x12d6e3._configure = function () {
          var _0x44b179 = _0x12d6e3.Buffer;
          if (_0x44b179) {
            _0x12d6e3._Buffer_from = _0x44b179.from !== Uint8Array.from && _0x44b179.from || function (_0x445b91, _0x494aae) {
              return new _0x44b179(_0x445b91, _0x494aae);
            };
            _0x12d6e3._Buffer_allocUnsafe = _0x44b179.allocUnsafe || function (_0x58bda8) {
              return new _0x44b179(_0x58bda8);
            };
          } else {
            _0x12d6e3._Buffer_from = _0x12d6e3._Buffer_allocUnsafe = null;
          }
        };
        _0x4d57b5.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/base64': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js",
          '@protobufjs/eventemitter': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js",
          '@protobufjs/float': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/float/index.js",
          '@protobufjs/inquire': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js",
          '@protobufjs/utf8': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js',
          '@protobufjs/pool': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js",
          './longbits': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/writer.js", function (_0xba3fd6, _0x16c7f3, _0x34faf3, _0x4a224b, _0x3c42a5) {
        _0x34faf3.exports = _0x53348b;
        var _0x5201b1;
        var _0x228c07 = _0x16c7f3("./util/minimal");
        var _0x33485f = _0x228c07.LongBits;
        var _0x4af2a0 = _0x228c07.base64;
        var _0x4c3135 = _0x228c07.utf8;
        function _0x486893(_0x11e78b, _0x37e428, _0x10b841) {
          this.fn = _0x11e78b;
          this.len = _0x37e428;
          this.next = undefined;
          this.val = _0x10b841;
        }
        function _0xcd58e0() {}
        function _0xc9f95c(_0x3bde0d) {
          this.head = _0x3bde0d.head;
          this.tail = _0x3bde0d.tail;
          this.len = _0x3bde0d.len;
          this.next = _0x3bde0d.states;
        }
        function _0x53348b() {
          this.len = 0x0;
          this.head = new _0x486893(_0xcd58e0, 0x0, 0x0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x4eae6e = function () {
          return _0x228c07.Buffer ? function () {
            return (_0x53348b.create = function () {
              return new _0x5201b1();
            })();
          } : function () {
            return new _0x53348b();
          };
        };
        function _0x595dd4(_0x50db69, _0x2e0793, _0x212693) {
          _0x2e0793[_0x212693] = 0xff & _0x50db69;
        }
        function _0x2e9e13(_0x54157a, _0x317c25) {
          this.len = _0x54157a;
          this.next = undefined;
          this.val = _0x317c25;
        }
        function _0x5715a6(_0x59852c, _0x30fd53, _0x1aaf94) {
          for (; _0x59852c.hi;) {
            _0x30fd53[_0x1aaf94++] = 0x7f & _0x59852c.lo | 0x80;
            _0x59852c.lo = (_0x59852c.lo >>> 0x7 | _0x59852c.hi << 0x19) >>> 0x0;
            _0x59852c.hi >>>= 0x7;
          }
          for (; _0x59852c.lo > 0x7f;) {
            _0x30fd53[_0x1aaf94++] = 0x7f & _0x59852c.lo | 0x80;
            _0x59852c.lo = _0x59852c.lo >>> 0x7;
          }
          _0x30fd53[_0x1aaf94++] = _0x59852c.lo;
        }
        function _0x4f9961(_0x1a1b27, _0x47044b, _0x180598) {
          _0x47044b[_0x180598] = 0xff & _0x1a1b27;
          _0x47044b[_0x180598 + 0x1] = _0x1a1b27 >>> 0x8 & 0xff;
          _0x47044b[_0x180598 + 0x2] = _0x1a1b27 >>> 0x10 & 0xff;
          _0x47044b[_0x180598 + 0x3] = _0x1a1b27 >>> 0x18;
        }
        _0x53348b.create = _0x4eae6e();
        _0x53348b.alloc = function (_0x422509) {
          return new _0x228c07.Array(_0x422509);
        };
        if (_0x228c07.Array !== Array) {
          _0x53348b.alloc = _0x228c07.pool(_0x53348b.alloc, _0x228c07.Array.prototype.subarray);
        }
        _0x53348b.prototype._push = function (_0x589718, _0x208793, _0x1c7e6c) {
          this.tail = this.tail.next = new _0x486893(_0x589718, _0x208793, _0x1c7e6c);
          this.len += _0x208793;
          return this;
        };
        _0x2e9e13.prototype = Object.create(_0x486893.prototype);
        _0x2e9e13.prototype.fn = function (_0x39e611, _0x32c336, _0x128bc2) {
          for (; _0x39e611 > 0x7f;) {
            _0x32c336[_0x128bc2++] = 0x7f & _0x39e611 | 0x80;
            _0x39e611 >>>= 0x7;
          }
          _0x32c336[_0x128bc2] = _0x39e611;
        };
        _0x53348b.prototype.uint32 = function (_0x10a5f1) {
          this.len += (this.tail = this.tail.next = new _0x2e9e13((_0x10a5f1 >>>= 0x0) < 0x80 ? 0x1 : _0x10a5f1 < 0x4000 ? 0x2 : _0x10a5f1 < 0x200000 ? 0x3 : _0x10a5f1 < 0x10000000 ? 0x4 : 0x5, _0x10a5f1)).len;
          return this;
        };
        _0x53348b.prototype.int32 = function (_0x402bab) {
          return _0x402bab < 0x0 ? this._push(_0x5715a6, 0xa, _0x33485f.fromNumber(_0x402bab)) : this.uint32(_0x402bab);
        };
        _0x53348b.prototype.sint32 = function (_0x9b9e28) {
          return this.uint32((_0x9b9e28 << 0x1 ^ _0x9b9e28 >> 0x1f) >>> 0x0);
        };
        _0x53348b.prototype.uint64 = function (_0x58a69a) {
          var _0x5319b9 = _0x33485f.from(_0x58a69a);
          return this._push(_0x5715a6, _0x5319b9.length(), _0x5319b9);
        };
        _0x53348b.prototype.int64 = _0x53348b.prototype.uint64;
        _0x53348b.prototype.sint64 = function (_0xe6bc5c) {
          var _0x1a27d4 = _0x33485f.from(_0xe6bc5c).zzEncode();
          return this._push(_0x5715a6, _0x1a27d4.length(), _0x1a27d4);
        };
        _0x53348b.prototype.bool = function (_0x4247c3) {
          return this._push(_0x595dd4, 0x1, _0x4247c3 ? 0x1 : 0x0);
        };
        _0x53348b.prototype.fixed32 = function (_0x2385b0) {
          return this._push(_0x4f9961, 0x4, _0x2385b0 >>> 0x0);
        };
        _0x53348b.prototype.sfixed32 = _0x53348b.prototype.fixed32;
        _0x53348b.prototype.fixed64 = function (_0x47056e) {
          var _0x47e1cd = _0x33485f.from(_0x47056e);
          return this._push(_0x4f9961, 0x4, _0x47e1cd.lo)._push(_0x4f9961, 0x4, _0x47e1cd.hi);
        };
        _0x53348b.prototype.sfixed64 = _0x53348b.prototype.fixed64;
        _0x53348b.prototype.float = function (_0x20479e) {
          return this._push(_0x228c07.float.writeFloatLE, 0x4, _0x20479e);
        };
        _0x53348b.prototype.double = function (_0x3b9d3f) {
          return this._push(_0x228c07.float.writeDoubleLE, 0x8, _0x3b9d3f);
        };
        var _0x70d29c = _0x228c07.Array.prototype.set ? function (_0x52984b, _0x4a84e1, _0x2e5c94) {
          _0x4a84e1.set(_0x52984b, _0x2e5c94);
        } : function (_0x55e4e5, _0x2a4920, _0x1a27ed) {
          for (var _0x25b29c = 0x0; _0x25b29c < _0x55e4e5.length; ++_0x25b29c) {
            _0x2a4920[_0x1a27ed + _0x25b29c] = _0x55e4e5[_0x25b29c];
          }
        };
        _0x53348b.prototype.bytes = function (_0x22b934) {
          var _0x5a2266 = _0x22b934.length >>> 0x0;
          if (!_0x5a2266) {
            return this._push(_0x595dd4, 0x1, 0x0);
          }
          if (_0x228c07.isString(_0x22b934)) {
            var _0x488ca3 = _0x53348b.alloc(_0x5a2266 = _0x4af2a0.length(_0x22b934));
            _0x4af2a0.decode(_0x22b934, _0x488ca3, 0x0);
            _0x22b934 = _0x488ca3;
          }
          return this.uint32(_0x5a2266)._push(_0x70d29c, _0x5a2266, _0x22b934);
        };
        _0x53348b.prototype.string = function (_0x20eabf) {
          var _0x55c7da = _0x4c3135.length(_0x20eabf);
          return _0x55c7da ? this.uint32(_0x55c7da)._push(_0x4c3135.write, _0x55c7da, _0x20eabf) : this._push(_0x595dd4, 0x1, 0x0);
        };
        _0x53348b.prototype.fork = function () {
          this.states = new _0xc9f95c(this);
          this.head = this.tail = new _0x486893(_0xcd58e0, 0x0, 0x0);
          this.len = 0x0;
          return this;
        };
        _0x53348b.prototype.reset = function () {
          if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
          } else {
            this.head = this.tail = new _0x486893(_0xcd58e0, 0x0, 0x0);
            this.len = 0x0;
          }
          return this;
        };
        _0x53348b.prototype.ldelim = function () {
          var _0x4c8869 = this.head;
          var _0x31b9c = this.tail;
          var _0x1b7477 = this.len;
          this.reset().uint32(_0x1b7477);
          if (_0x1b7477) {
            this.tail.next = _0x4c8869.next;
            this.tail = _0x31b9c;
            this.len += _0x1b7477;
          }
          return this;
        };
        _0x53348b.prototype.finish = function () {
          var _0x3dc148 = this.head.next;
          var _0x413f13 = this.constructor.alloc(this.len);
          for (var _0x1512e3 = 0x0; _0x3dc148;) {
            _0x3dc148.fn(_0x3dc148.val, _0x413f13, _0x1512e3);
            _0x1512e3 += _0x3dc148.len;
            _0x3dc148 = _0x3dc148.next;
          }
          return _0x413f13;
        };
        _0x53348b._configure = function (_0xa20be5) {
          _0x5201b1 = _0xa20be5;
          _0x53348b.create = _0x4eae6e();
          _0x5201b1._configure();
        };
        _0x34faf3.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js", function (_0x2c2c3e, _0xaf92fd, _0x2dc3d5, _0x5b29e9, _0x3a9725) {
        _0x2dc3d5.exports = _0x479fc2;
        var _0x36c8d8 = _0xaf92fd("./writer");
        (_0x479fc2.prototype = Object.create(_0x36c8d8.prototype)).constructor = _0x479fc2;
        var _0x389ee8 = _0xaf92fd('./util/minimal');
        function _0x479fc2() {
          _0x36c8d8.call(this);
        }
        function _0x4023ed(_0x1fa27b, _0x45b5a1, _0x3f9ae6) {
          if (_0x1fa27b.length < 0x28) {
            _0x389ee8.utf8.write(_0x1fa27b, _0x45b5a1, _0x3f9ae6);
          } else if (_0x45b5a1.utf8Write) {
            _0x45b5a1.utf8Write(_0x1fa27b, _0x3f9ae6);
          } else {
            _0x45b5a1.write(_0x1fa27b, _0x3f9ae6);
          }
        }
        _0x479fc2._configure = function () {
          _0x479fc2.alloc = _0x389ee8._Buffer_allocUnsafe;
          _0x479fc2.writeBytesBuffer = _0x389ee8.Buffer && _0x389ee8.Buffer.prototype instanceof Uint8Array && "set" === _0x389ee8.Buffer.prototype.set.name ? function (_0x463328, _0x413728, _0x4615f4) {
            _0x413728.set(_0x463328, _0x4615f4);
          } : function (_0x52634a, _0x15c431, _0x43e418) {
            if (_0x52634a.copy) {
              _0x52634a.copy(_0x15c431, _0x43e418, 0x0, _0x52634a.length);
            } else {
              for (var _0x3a53a7 = 0x0; _0x3a53a7 < _0x52634a.length;) {
                _0x15c431[_0x43e418++] = _0x52634a[_0x3a53a7++];
              }
            }
          };
        };
        _0x479fc2.prototype.bytes = function (_0x365050) {
          if (_0x389ee8.isString(_0x365050)) {
            _0x365050 = _0x389ee8._Buffer_from(_0x365050, "base64");
          }
          var _0x146eb7 = _0x365050.length >>> 0x0;
          this.uint32(_0x146eb7);
          if (_0x146eb7) {
            this._push(_0x479fc2.writeBytesBuffer, _0x146eb7, _0x365050);
          }
          return this;
        };
        _0x479fc2.prototype.string = function (_0x27d63f) {
          var _0x11fe1f = _0x389ee8.Buffer.byteLength(_0x27d63f);
          this.uint32(_0x11fe1f);
          if (_0x11fe1f) {
            this._push(_0x4023ed, _0x11fe1f, _0x27d63f);
          }
          return this;
        };
        _0x479fc2._configure();
        _0x2dc3d5.exports;
      }, function () {
        return {
          './writer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/reader.js", function (_0x5751bc, _0x3e7af6, _0xe53d73, _0x2b05c4, _0x15f691) {
        _0xe53d73.exports = _0xede0d4;
        var _0x51ff36;
        var _0x5c3772 = _0x3e7af6("./util/minimal");
        var _0x56144c = _0x5c3772.LongBits;
        var _0x560a54 = _0x5c3772.utf8;
        function _0xede0d4(_0x1c8901) {
          this.buf = _0x1c8901;
          this.pos = 0x0;
          this.len = _0x1c8901.length;
        }
        var _0x131086;
        var _0x278966 = 'undefined' != typeof Uint8Array ? function (_0x2fffe8) {
          if (_0x2fffe8 instanceof Uint8Array || Array.isArray(_0x2fffe8)) {
            return new _0xede0d4(_0x2fffe8);
          }
          throw Error("illegal buffer");
        } : function (_0x13acf4) {
          if (Array.isArray(_0x13acf4)) {
            return new _0xede0d4(_0x13acf4);
          }
          throw Error("illegal buffer");
        };
        var _0xb9d366 = function () {
          return _0x5c3772.Buffer ? function (_0x15bb57) {
            return (_0xede0d4.create = function (_0x158544) {
              return _0x5c3772.Buffer.isBuffer(_0x158544) ? new _0x51ff36(_0x158544) : _0x278966(_0x158544);
            })(_0x15bb57);
          } : _0x278966;
        };
        function _0x56e7da() {
          var _0x954a60 = new _0x56144c(0x0, 0x0);
          var _0x424100 = 0x0;
          if (!(this.len - this.pos > 0x4)) {
            for (; _0x424100 < 0x3; ++_0x424100) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x954a60.lo = (_0x954a60.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x424100) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x954a60;
              }
            }
            _0x954a60.lo = (_0x954a60.lo | (0x7f & this.buf[this.pos++]) << 0x7 * _0x424100) >>> 0x0;
            return _0x954a60;
          }
          for (; _0x424100 < 0x4; ++_0x424100) {
            _0x954a60.lo = (_0x954a60.lo | (0x7f & this.buf[this.pos]) << 0x7 * _0x424100) >>> 0x0;
            if (this.buf[this.pos++] < 0x80) {
              return _0x954a60;
            }
          }
          _0x954a60.lo = (_0x954a60.lo | (0x7f & this.buf[this.pos]) << 0x1c) >>> 0x0;
          _0x954a60.hi = (_0x954a60.hi | (0x7f & this.buf[this.pos]) >> 0x4) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x954a60;
          }
          _0x424100 = 0x0;
          if (this.len - this.pos > 0x4) {
            for (; _0x424100 < 0x5; ++_0x424100) {
              _0x954a60.hi = (_0x954a60.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x424100 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x954a60;
              }
            }
          } else {
            for (; _0x424100 < 0x5; ++_0x424100) {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
              _0x954a60.hi = (_0x954a60.hi | (0x7f & this.buf[this.pos]) << 0x7 * _0x424100 + 0x3) >>> 0x0;
              if (this.buf[this.pos++] < 0x80) {
                return _0x954a60;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x38eeb3() {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x8 || 0x1) + " > " + this.len);
          }
          return new _0x56144c((this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0, (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0);
        }
        _0xede0d4.create = _0xb9d366();
        _0xede0d4.prototype._slice = _0x5c3772.Array.prototype.subarray || _0x5c3772.Array.prototype.slice;
        _0x131086 = 0xffffffff;
        _0xede0d4.prototype.uint32 = function () {
          _0x131086 = (0x7f & this.buf[this.pos]) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x131086;
          }
          _0x131086 = (_0x131086 | (0x7f & this.buf[this.pos]) << 0x7) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x131086;
          }
          _0x131086 = (_0x131086 | (0x7f & this.buf[this.pos]) << 0xe) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x131086;
          }
          _0x131086 = (_0x131086 | (0x7f & this.buf[this.pos]) << 0x15) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x131086;
          }
          _0x131086 = (_0x131086 | (0xf & this.buf[this.pos]) << 0x1c) >>> 0x0;
          if (this.buf[this.pos++] < 0x80) {
            return _0x131086;
          }
          if ((this.pos += 0x5) > this.len) {
            this.pos = this.len;
            throw RangeError("index out of range: " + this.pos + " + " + (0xa || 0x1) + " > " + this.len);
          }
          return _0x131086;
        };
        _0xede0d4.prototype.int32 = function () {
          return 0x0 | this.uint32();
        };
        _0xede0d4.prototype.sint32 = function () {
          var _0x28fbb0 = this.uint32();
          return _0x28fbb0 >>> 0x1 ^ -(0x1 & _0x28fbb0) | 0x0;
        };
        _0xede0d4.prototype.bool = function () {
          return 0x0 !== this.uint32();
        };
        _0xede0d4.prototype.fixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0xede0d4.prototype.sfixed32 = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          return 0x0 | (this.buf[(this.pos += 0x4) - 0x4] | this.buf[(this.pos += 0x4) - 0x3] << 0x8 | this.buf[(this.pos += 0x4) - 0x2] << 0x10 | this.buf[(this.pos += 0x4) - 0x1] << 0x18) >>> 0x0;
        };
        _0xede0d4.prototype.float = function () {
          if (this.pos + 0x4 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x243280 = _0x5c3772.float.readFloatLE(this.buf, this.pos);
          this.pos += 0x4;
          return _0x243280;
        };
        _0xede0d4.prototype.double = function () {
          if (this.pos + 0x8 > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (0x4 || 0x1) + " > " + this.len);
          }
          var _0x398515 = _0x5c3772.float.readDoubleLE(this.buf, this.pos);
          this.pos += 0x8;
          return _0x398515;
        };
        _0xede0d4.prototype.bytes = function () {
          var _0x447c39 = this.uint32();
          var _0x4fe925 = this.pos;
          var _0x1b361c = this.pos + _0x447c39;
          if (_0x1b361c > this.len) {
            throw RangeError("index out of range: " + this.pos + " + " + (_0x447c39 || 0x1) + " > " + this.len);
          }
          this.pos += _0x447c39;
          return Array.isArray(this.buf) ? this.buf.slice(_0x4fe925, _0x1b361c) : _0x4fe925 === _0x1b361c ? new this.buf.constructor(0x0) : this._slice.call(this.buf, _0x4fe925, _0x1b361c);
        };
        _0xede0d4.prototype.string = function () {
          var _0x4db4dc = this.bytes();
          return _0x560a54.read(_0x4db4dc, 0x0, _0x4db4dc.length);
        };
        _0xede0d4.prototype.skip = function (_0x128a61) {
          if ('number' == typeof _0x128a61) {
            if (this.pos + _0x128a61 > this.len) {
              throw RangeError("index out of range: " + this.pos + " + " + (_0x128a61 || 0x1) + " > " + this.len);
            }
            this.pos += _0x128a61;
          } else {
            do {
              if (this.pos >= this.len) {
                throw RangeError("index out of range: " + this.pos + " + " + (undefined || 0x1) + " > " + this.len);
              }
            } while (0x80 & this.buf[this.pos++]);
          }
          return this;
        };
        _0xede0d4.prototype.skipType = function (_0x4bee5a) {
          switch (_0x4bee5a) {
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
              for (; 0x4 != (_0x4bee5a = 0x7 & this.uint32());) {
                this.skipType(_0x4bee5a);
              }
              break;
            case 0x5:
              this.skip(0x4);
              break;
            default:
              throw Error("invalid wire type " + _0x4bee5a + " at offset " + this.pos);
          }
          return this;
        };
        _0xede0d4._configure = function (_0x8c76ad) {
          _0x51ff36 = _0x8c76ad;
          _0xede0d4.create = _0xb9d366();
          _0x51ff36._configure();
          var _0x1e87b6 = _0x5c3772.Long ? 'toLong' : "toNumber";
          _0x5c3772.merge(_0xede0d4.prototype, {
            'int64': function () {
              return _0x56e7da.call(this)[_0x1e87b6](false);
            },
            'uint64': function () {
              return _0x56e7da.call(this)[_0x1e87b6](true);
            },
            'sint64': function () {
              return _0x56e7da.call(this).zzDecode()[_0x1e87b6](false);
            },
            'fixed64': function () {
              return _0x38eeb3.call(this)[_0x1e87b6](true);
            },
            'sfixed64': function () {
              return _0x38eeb3.call(this)[_0x1e87b6](false);
            }
          });
        };
        _0xe53d73.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js", function (_0x1e6413, _0x48e172, _0x2a42c2, _0x35d21f, _0x2ca896) {
        _0x2a42c2.exports = _0x284a8d;
        var _0xfc221d = _0x48e172('./reader');
        (_0x284a8d.prototype = Object.create(_0xfc221d.prototype)).constructor = _0x284a8d;
        var _0x23a72e = _0x48e172("./util/minimal");
        function _0x284a8d(_0x1d1871) {
          _0xfc221d.call(this, _0x1d1871);
        }
        _0x284a8d._configure = function () {
          if (_0x23a72e.Buffer) {
            _0x284a8d.prototype._slice = _0x23a72e.Buffer.prototype.slice;
          }
        };
        _0x284a8d.prototype.string = function () {
          var _0x13cb9a = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x13cb9a, this.len)) : this.buf.toString('utf-8', this.pos, this.pos = Math.min(this.pos + _0x13cb9a, this.len));
        };
        _0x284a8d._configure();
        _0x2a42c2.exports;
      }, function () {
        return {
          './reader': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x55cf1e.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js', function (_0x373e80, _0x367a27, _0x3e6500, _0x31073d, _0xb189fe) {
        _0x3e6500.exports = _0x208587;
        var _0x1489a6 = _0x367a27('../util/minimal');
        function _0x208587(_0x3257f1, _0x51915f, _0x324677) {
          if ("function" != typeof _0x3257f1) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x1489a6.EventEmitter.call(this);
          this.rpcImpl = _0x3257f1;
          this.requestDelimited = Boolean(_0x51915f);
          this.responseDelimited = Boolean(_0x324677);
        }
        (_0x208587.prototype = Object.create(_0x1489a6.EventEmitter.prototype)).constructor = _0x208587;
        _0x208587.prototype.rpcCall = function _0x23359c(_0x1aea3a, _0x58a0bc, _0x35c5e9, _0x3375b6, _0x118daf) {
          if (!_0x3375b6) {
            throw TypeError("request must be specified");
          }
          var _0x41b145 = this;
          if (!_0x118daf) {
            return _0x1489a6.asPromise(_0x23359c, _0x41b145, _0x1aea3a, _0x58a0bc, _0x35c5e9, _0x3375b6);
          }
          if (_0x41b145.rpcImpl) {
            try {
              return _0x41b145.rpcImpl(_0x1aea3a, _0x58a0bc[_0x41b145.requestDelimited ? "encodeDelimited" : 'encode'](_0x3375b6).finish(), function (_0x50d801, _0x15e8ef) {
                if (_0x50d801) {
                  _0x41b145.emit("error", _0x50d801, _0x1aea3a);
                  return _0x118daf(_0x50d801);
                }
                if (null !== _0x15e8ef) {
                  if (!(_0x15e8ef instanceof _0x35c5e9)) {
                    try {
                      _0x15e8ef = _0x35c5e9[_0x41b145.responseDelimited ? "decodeDelimited" : "decode"](_0x15e8ef);
                    } catch (_0x3e744d) {
                      _0x41b145.emit("error", _0x3e744d, _0x1aea3a);
                      return _0x118daf(_0x3e744d);
                    }
                  }
                  _0x41b145.emit("data", _0x15e8ef, _0x1aea3a);
                  return _0x118daf(null, _0x15e8ef);
                }
                _0x41b145.end(true);
              });
            } catch (_0x5855cb) {
              _0x41b145.emit("error", _0x5855cb, _0x1aea3a);
              return void setTimeout(function () {
                _0x118daf(_0x5855cb);
              }, 0x0);
            }
          } else {
            setTimeout(function () {
              _0x118daf(Error("already ended"));
            }, 0x0);
          }
        };
        _0x208587.prototype.end = function (_0x1362ee) {
          if (this.rpcImpl) {
            if (!_0x1362ee) {
              this.rpcImpl(null, null, null);
            }
            this.rpcImpl = null;
            this.emit("end").off();
          }
          return this;
        };
        _0x3e6500.exports;
      }, function () {
        return {
          '../util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js", function (_0x4d79ab, _0x375617, _0x3cabb3, _0x53069b, _0x4ae3d9) {
        _0x4d79ab.Service = _0x375617("./rpc/service");
        _0x3cabb3.exports;
      }, function () {
        return {
          './rpc/service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js'
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/roots.js", function (_0x29292b, _0x4a2d36, _0x10070e, _0x354774, _0x2e5729) {
        _0x10070e.exports = {};
        _0x10070e.exports;
      }, {});
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js", function (_0x2ab628, _0x45e9a8, _0x1b5a14, _0xa4abc8, _0x4ed368) {
        function _0x196620() {
          _0x2ab628.util._configure();
          _0x2ab628.Writer._configure(_0x2ab628.BufferWriter);
          _0x2ab628.Reader._configure(_0x2ab628.BufferReader);
        }
        _0x2ab628.build = "minimal";
        _0x2ab628.Writer = _0x45e9a8("./writer");
        _0x2ab628.BufferWriter = _0x45e9a8("./writer_buffer");
        _0x2ab628.Reader = _0x45e9a8('./reader');
        _0x2ab628.BufferReader = _0x45e9a8("./reader_buffer");
        _0x2ab628.util = _0x45e9a8("./util/minimal");
        _0x2ab628.rpc = _0x45e9a8("./rpc");
        _0x2ab628.roots = _0x45e9a8('./roots');
        _0x2ab628.configure = _0x196620;
        _0x196620();
        _0x1b5a14.exports;
      }, function () {
        return {
          './writer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './writer_buffer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js",
          './reader': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './reader_buffer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js",
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './rpc': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js",
          './roots': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/roots.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js", function (_0x445e93, _0x18c62a, _0x11e46b, _0x545ef8, _0x504331) {
        function _0x3f9d53(_0x8dcf1, _0x598107) {
          if ("string" == typeof _0x8dcf1) {
            _0x598107 = _0x8dcf1;
            _0x8dcf1 = undefined;
          }
          var _0x4df720 = [];
          function _0x3d0f14(_0x2f8c6b) {
            if ("string" != typeof _0x2f8c6b) {
              var _0x3c67b0 = "function " + (undefined || _0x598107 || '') + '(' + (_0x8dcf1 && _0x8dcf1.join(',') || '') + "){\n  " + _0x4df720.join("\n  ") + "\n}";
              if (_0x3f9d53.verbose) {
                console.log("codegen: " + _0x3c67b0);
              }
              _0x3c67b0 = "return " + _0x3c67b0;
              if (_0x2f8c6b) {
                var _0x17d38f = Object.keys(_0x2f8c6b);
                var _0x2ff7c9 = new Array(_0x17d38f.length + 0x1);
                var _0x959fef = new Array(_0x17d38f.length);
                for (var _0x543b47 = 0x0; _0x543b47 < _0x17d38f.length;) {
                  _0x2ff7c9[_0x543b47] = _0x17d38f[_0x543b47];
                  _0x959fef[_0x543b47] = _0x2f8c6b[_0x17d38f[_0x543b47++]];
                }
                _0x2ff7c9[_0x543b47] = _0x3c67b0;
                return Function.apply(null, _0x2ff7c9).apply(null, _0x959fef);
              }
              return Function(_0x3c67b0)();
            }
            var _0x2e8cd0 = new Array(arguments.length - 0x1);
            for (var _0x2ee619 = 0x0; _0x2ee619 < _0x2e8cd0.length;) {
              _0x2e8cd0[_0x2ee619] = arguments[++_0x2ee619];
            }
            _0x2ee619 = 0x0;
            _0x2f8c6b = _0x2f8c6b.replace(/%([%dfijs])/g, function (_0x1fa1ec, _0x572b0f) {
              var _0x4ebbb2 = _0x2e8cd0[_0x2ee619++];
              switch (_0x572b0f) {
                case 'd':
                case 'f':
                  return String(Number(_0x4ebbb2));
                case 'i':
                  return String(Math.floor(_0x4ebbb2));
                case 'j':
                  return JSON.stringify(_0x4ebbb2);
                case 's':
                  return String(_0x4ebbb2);
              }
              return '%';
            });
            if (_0x2ee619 !== _0x2e8cd0.length) {
              throw Error("parameter count mismatch");
            }
            _0x4df720.push(_0x2f8c6b);
            return _0x3d0f14;
          }
          function _0x251277(_0x9ab8c9) {
            return "function " + (_0x9ab8c9 || _0x598107 || '') + '(' + (_0x8dcf1 && _0x8dcf1.join(',') || '') + "){\n  " + _0x4df720.join("\n  ") + "\n}";
          }
          _0x3d0f14.toString = _0x251277;
          return _0x3d0f14;
        }
        _0x11e46b.exports = _0x3f9d53;
        _0x3f9d53.verbose = false;
        _0x11e46b.exports;
      }, {});
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js", function (_0x51192c, _0x5c4b83, _0x216014, _0x27abcb, _0xe8d29a) {
        _0x216014.exports = _0x305f3d;
        var _0x2b0bf3 = _0x5c4b83("@protobufjs/aspromise");
        var _0x6ecd18 = _0x5c4b83("@protobufjs/inquire")('fs');
        function _0x305f3d(_0x5bb2f1, _0x4af438, _0x3a75de) {
          if ("function" == typeof _0x4af438) {
            _0x3a75de = _0x4af438;
            _0x4af438 = {};
          } else if (!_0x4af438) {
            _0x4af438 = {};
          }
          return _0x3a75de ? !_0x4af438.xhr && _0x6ecd18 && _0x6ecd18.readFile ? _0x6ecd18.readFile(_0x5bb2f1, function (_0x278e9f, _0x1df386) {
            return _0x278e9f && "undefined" != typeof XMLHttpRequest ? _0x305f3d.xhr(_0x5bb2f1, _0x4af438, _0x3a75de) : _0x278e9f ? _0x3a75de(_0x278e9f) : _0x3a75de(null, _0x4af438.binary ? _0x1df386 : _0x1df386.toString("utf8"));
          }) : _0x305f3d.xhr(_0x5bb2f1, _0x4af438, _0x3a75de) : _0x2b0bf3(_0x305f3d, this, _0x5bb2f1, _0x4af438);
        }
        _0x305f3d.xhr = function (_0x13393b, _0x12c070, _0x4b2f4c) {
          var _0x116bdc = new XMLHttpRequest();
          _0x116bdc.onreadystatechange = function () {
            if (0x4 === _0x116bdc.readyState) {
              if (0x0 !== _0x116bdc.status && 0xc8 !== _0x116bdc.status) {
                return _0x4b2f4c(Error("status " + _0x116bdc.status));
              }
              if (_0x12c070.binary) {
                var _0x39fede = _0x116bdc.response;
                if (!_0x39fede) {
                  _0x39fede = [];
                  for (var _0x44ff20 = 0x0; _0x44ff20 < _0x116bdc.responseText.length; ++_0x44ff20) {
                    _0x39fede.push(0xff & _0x116bdc.responseText.charCodeAt(_0x44ff20));
                  }
                }
                return _0x4b2f4c(null, 'undefined' != typeof Uint8Array ? new Uint8Array(_0x39fede) : _0x39fede);
              }
              return _0x4b2f4c(null, _0x116bdc.responseText);
            }
          };
          if (_0x12c070.binary) {
            if ('overrideMimeType' in _0x116bdc) {
              _0x116bdc.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x116bdc.responseType = "arraybuffer";
          }
          _0x116bdc.open("GET", _0x13393b);
          _0x116bdc.send();
        };
        _0x216014.exports;
      }, function () {
        return {
          '@protobufjs/aspromise': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js",
          '@protobufjs/inquire': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/path/index.js", function (_0x4524e9, _0x5da205, _0x4d8d51, _0x36eac2, _0x238db0) {
        var _0x4b0ed7 = _0x4524e9.isAbsolute = function (_0x29cb7a) {
          return /^(?:\/|\w+:)/.test(_0x29cb7a);
        };
        var _0x5c35df = _0x4524e9.normalize = function (_0x46698e) {
          var _0x579b11 = (_0x46698e = _0x46698e.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split('/');
          var _0x2a3f32 = _0x4b0ed7(_0x46698e);
          var _0x46d4e9 = '';
          if (_0x2a3f32) {
            _0x46d4e9 = _0x579b11.shift() + '/';
          }
          for (var _0x52835d = 0x0; _0x52835d < _0x579b11.length;) {
            if ('..' === _0x579b11[_0x52835d]) {
              if (_0x52835d > 0x0 && '..' !== _0x579b11[_0x52835d - 0x1]) {
                _0x579b11.splice(--_0x52835d, 0x2);
              } else if (_0x2a3f32) {
                _0x579b11.splice(_0x52835d, 0x1);
              } else {
                ++_0x52835d;
              }
            } else if ('.' === _0x579b11[_0x52835d]) {
              _0x579b11.splice(_0x52835d, 0x1);
            } else {
              ++_0x52835d;
            }
          }
          return _0x46d4e9 + _0x579b11.join('/');
        };
        _0x4524e9.resolve = function (_0x164df4, _0x44c384, _0x29a2c3) {
          if (!_0x29a2c3) {
            _0x44c384 = _0x5c35df(_0x44c384);
          }
          return _0x4b0ed7(_0x44c384) ? _0x44c384 : (_0x29a2c3 || (_0x164df4 = _0x5c35df(_0x164df4)), (_0x164df4 = _0x164df4.replace(/(?:\/|^)[^/]+$/, '')).length ? _0x5c35df(_0x164df4 + '/' + _0x44c384) : _0x44c384);
        };
        _0x4d8d51.exports;
      }, {});
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/types.js", function (_0x29597e, _0x372a99, _0x4561e0, _0x4abcbf, _0x277a4e) {
        var _0x196172 = _0x372a99("./util");
        var _0x4f2c59 = ["double", "float", "int32", "uint32", "sint32", 'fixed32', "sfixed32", 'int64', 'uint64', 'sint64', 'fixed64', "sfixed64", "bool", 'string', "bytes"];
        function _0x51fed8(_0x4e8cd5, _0x2c344e) {
          var _0x1820ac = 0x0;
          var _0x1d325f = {};
          for (_0x2c344e |= 0x0; _0x1820ac < _0x4e8cd5.length;) {
            _0x1d325f[_0x4f2c59[_0x1820ac + _0x2c344e]] = _0x4e8cd5[_0x1820ac++];
          }
          return _0x1d325f;
        }
        _0x29597e.basic = _0x51fed8([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x2]);
        _0x29597e.defaults = _0x51fed8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, false, '', _0x196172.emptyArray, null]);
        _0x29597e.long = _0x51fed8([0x0, 0x0, 0x0, 0x1, 0x1], 0x7);
        _0x29597e.mapKey = _0x51fed8([0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2], 0x2);
        _0x29597e.packed = _0x51fed8([0x1, 0x5, 0x0, 0x0, 0x0, 0x5, 0x5, 0x0, 0x0, 0x0, 0x1, 0x1, 0x0]);
        _0x4561e0.exports;
      }, function () {
        return {
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/field.js", function (_0x182953, _0x192ea5, _0x1a0f4f, _0x228f34, _0x5df6b6) {
        _0x1a0f4f.exports = _0x2aba3c;
        var _0x5d5d92 = _0x192ea5("./object");
        ((_0x2aba3c.prototype = Object.create(_0x5d5d92.prototype)).constructor = _0x2aba3c).className = "Field";
        var _0x5dc863;
        var _0x428daa = _0x192ea5("./enum");
        var _0x5d1bf4 = _0x192ea5("./types");
        var _0x19d72d = _0x192ea5("./util");
        var _0x2bcdfa = /^required|optional|repeated$/;
        function _0x2aba3c(_0x5bae4a, _0x4f945a, _0x1e54de, _0x469ebe, _0x3c4db8, _0x513143, _0x4e7e50) {
          if (_0x19d72d.isObject(_0x469ebe)) {
            _0x4e7e50 = _0x3c4db8;
            _0x513143 = _0x469ebe;
            _0x469ebe = _0x3c4db8 = undefined;
          } else if (_0x19d72d.isObject(_0x3c4db8)) {
            _0x4e7e50 = _0x513143;
            _0x513143 = _0x3c4db8;
            _0x3c4db8 = undefined;
          }
          _0x5d5d92.call(this, _0x5bae4a, _0x513143);
          if (!_0x19d72d.isInteger(_0x4f945a) || _0x4f945a < 0x0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x19d72d.isString(_0x1e54de)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x469ebe && !_0x2bcdfa.test(_0x469ebe = _0x469ebe.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x3c4db8 && !_0x19d72d.isString(_0x3c4db8)) {
            throw TypeError("extend must be a string");
          }
          if ("proto3_optional" === _0x469ebe) {
            _0x469ebe = 'optional';
          }
          this.rule = _0x469ebe && "optional" !== _0x469ebe ? _0x469ebe : undefined;
          this.type = _0x1e54de;
          this.id = _0x4f945a;
          this.extend = _0x3c4db8 || undefined;
          this.required = 'required' === _0x469ebe;
          this.optional = !this.required;
          this.repeated = 'repeated' === _0x469ebe;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x19d72d.Long && undefined !== _0x5d1bf4.long[_0x1e54de];
          this.bytes = "bytes" === _0x1e54de;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x4e7e50;
        }
        _0x2aba3c.fromJSON = function (_0x2063c6, _0x2c5239) {
          return new _0x2aba3c(_0x2063c6, _0x2c5239.id, _0x2c5239.type, _0x2c5239.rule, _0x2c5239.extend, _0x2c5239.options, _0x2c5239.comment);
        };
        Object.defineProperty(_0x2aba3c.prototype, "packed", {
          'get': function () {
            if (null === this._packed) {
              this._packed = false !== this.getOption("packed");
            }
            return this._packed;
          }
        });
        _0x2aba3c.prototype.setOption = function (_0x1e7277, _0xa1f3a4, _0x347288) {
          if ("packed" === _0x1e7277) {
            this._packed = null;
          }
          return _0x5d5d92.prototype.setOption.call(this, _0x1e7277, _0xa1f3a4, _0x347288);
        };
        _0x2aba3c.prototype.toJSON = function (_0x100730) {
          var _0x57de52 = !!_0x100730 && Boolean(_0x100730.keepComments);
          return _0x19d72d.toObject(["rule", 'optional' !== this.rule && this.rule || undefined, "type", this.type, 'id', this.id, "extend", this.extend, "options", this.options, "comment", _0x57de52 ? this.comment : undefined]);
        };
        _0x2aba3c.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x5d1bf4.defaults[this.type])) {
            this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
            if (this.resolvedType instanceof _0x5dc863) {
              this.typeDefault = null;
            } else {
              this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0x0]];
            }
          }
          if (this.options && null != this.options["default"]) {
            this.typeDefault = this.options['default'];
            if (this.resolvedType instanceof _0x428daa && "string" == typeof this.typeDefault) {
              this.typeDefault = this.resolvedType.values[this.typeDefault];
            }
          }
          if (this.options) {
            if (!(true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x428daa))) {
              delete this.options.packed;
            }
            if (!Object.keys(this.options).length) {
              this.options = undefined;
            }
          }
          if (this.long) {
            this.typeDefault = _0x19d72d.Long.fromNumber(this.typeDefault, 'u' === this.type.charAt(0x0));
            if (Object.freeze) {
              Object.freeze(this.typeDefault);
            }
          } else {
            if (this.bytes && "string" == typeof this.typeDefault) {
              var _0x3fd4aa;
              if (_0x19d72d.base64.test(this.typeDefault)) {
                _0x19d72d.base64.decode(this.typeDefault, _0x3fd4aa = _0x19d72d.newBuffer(_0x19d72d.base64.length(this.typeDefault)), 0x0);
              } else {
                _0x19d72d.utf8.write(this.typeDefault, _0x3fd4aa = _0x19d72d.newBuffer(_0x19d72d.utf8.length(this.typeDefault)), 0x0);
              }
              this.typeDefault = _0x3fd4aa;
            }
          }
          if (this.map) {
            this.defaultValue = _0x19d72d.emptyObject;
          } else if (this.repeated) {
            this.defaultValue = _0x19d72d.emptyArray;
          } else {
            this.defaultValue = this.typeDefault;
          }
          if (this.parent instanceof _0x5dc863) {
            this.parent.ctor.prototype[this.name] = this.defaultValue;
          }
          return _0x5d5d92.prototype.resolve.call(this);
        };
        _0x2aba3c.d = function (_0x189d1c, _0x22fa56, _0x1c5fc4, _0x3d91fb) {
          if ('function' == typeof _0x22fa56) {
            _0x22fa56 = _0x19d72d.decorateType(_0x22fa56).name;
          } else if (_0x22fa56 && 'object' == typeof _0x22fa56) {
            _0x22fa56 = _0x19d72d.decorateEnum(_0x22fa56).name;
          }
          return function (_0x2d86e0, _0x109f48) {
            _0x19d72d.decorateType(_0x2d86e0.constructor).add(new _0x2aba3c(_0x109f48, _0x189d1c, _0x22fa56, _0x1c5fc4, {
              'default': _0x3d91fb
            }));
          };
        };
        _0x2aba3c._configure = function (_0x2e3adf) {
          _0x5dc863 = _0x2e3adf;
        };
        _0x1a0f4f.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './enum': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js', function (_0x435f51, _0x20789d, _0x3c0a55, _0x21e856, _0xf75f2) {
        _0x3c0a55.exports = _0x2a1539;
        var _0x2affae = _0x20789d('./object');
        ((_0x2a1539.prototype = Object.create(_0x2affae.prototype)).constructor = _0x2a1539).className = "OneOf";
        var _0x303054 = _0x20789d("./field");
        var _0x33067b = _0x20789d("./util");
        function _0x2a1539(_0x432f17, _0x44b0c8, _0x1f6429, _0x344fcb) {
          if (!Array.isArray(_0x44b0c8)) {
            _0x1f6429 = _0x44b0c8;
            _0x44b0c8 = undefined;
          }
          _0x2affae.call(this, _0x432f17, _0x1f6429);
          if (undefined !== _0x44b0c8 && !Array.isArray(_0x44b0c8)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x44b0c8 || [];
          this.fieldsArray = [];
          this.comment = _0x344fcb;
        }
        function _0x46a404(_0x3c6c2d) {
          if (_0x3c6c2d.parent) {
            for (var _0x28e931 = 0x0; _0x28e931 < _0x3c6c2d.fieldsArray.length; ++_0x28e931) {
              if (!_0x3c6c2d.fieldsArray[_0x28e931].parent) {
                _0x3c6c2d.parent.add(_0x3c6c2d.fieldsArray[_0x28e931]);
              }
            }
          }
        }
        _0x2a1539.fromJSON = function (_0x202994, _0x434deb) {
          return new _0x2a1539(_0x202994, _0x434deb.oneof, _0x434deb.options, _0x434deb.comment);
        };
        _0x2a1539.prototype.toJSON = function (_0x463ef0) {
          var _0x313a5f = !!_0x463ef0 && Boolean(_0x463ef0.keepComments);
          return _0x33067b.toObject(["options", this.options, "oneof", this.oneof, 'comment', _0x313a5f ? this.comment : undefined]);
        };
        _0x2a1539.prototype.add = function (_0x5edd50) {
          if (!(_0x5edd50 instanceof _0x303054)) {
            throw TypeError("field must be a Field");
          }
          if (_0x5edd50.parent && _0x5edd50.parent !== this.parent) {
            _0x5edd50.parent.remove(_0x5edd50);
          }
          this.oneof.push(_0x5edd50.name);
          this.fieldsArray.push(_0x5edd50);
          _0x5edd50.partOf = this;
          _0x46a404(this);
          return this;
        };
        _0x2a1539.prototype.remove = function (_0x58dcda) {
          if (!(_0x58dcda instanceof _0x303054)) {
            throw TypeError("field must be a Field");
          }
          var _0x24e799 = this.fieldsArray.indexOf(_0x58dcda);
          if (_0x24e799 < 0x0) {
            throw Error(_0x58dcda + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x24e799, 0x1);
          if ((_0x24e799 = this.oneof.indexOf(_0x58dcda.name)) > -0x1) {
            this.oneof.splice(_0x24e799, 0x1);
          }
          _0x58dcda.partOf = null;
          return this;
        };
        _0x2a1539.prototype.onAdd = function (_0x50a672) {
          _0x2affae.prototype.onAdd.call(this, _0x50a672);
          for (var _0x21103f = 0x0; _0x21103f < this.oneof.length; ++_0x21103f) {
            var _0x4dccc5 = _0x50a672.get(this.oneof[_0x21103f]);
            if (_0x4dccc5 && !_0x4dccc5.partOf) {
              _0x4dccc5.partOf = this;
              this.fieldsArray.push(_0x4dccc5);
            }
          }
          _0x46a404(this);
        };
        _0x2a1539.prototype.onRemove = function (_0x1875fa) {
          var _0x5ecd4c;
          for (var _0x4b1ed7 = 0x0; _0x4b1ed7 < this.fieldsArray.length; ++_0x4b1ed7) {
            if ((_0x5ecd4c = this.fieldsArray[_0x4b1ed7]).parent) {
              _0x5ecd4c.parent.remove(_0x5ecd4c);
            }
          }
          _0x2affae.prototype.onRemove.call(this, _0x1875fa);
        };
        _0x2a1539.d = function () {
          var _0x1cebc7 = new Array(arguments.length);
          for (var _0x5064fb = 0x0; _0x5064fb < arguments.length;) {
            _0x1cebc7[_0x5064fb] = arguments[_0x5064fb++];
          }
          return function (_0x29f564, _0x5a0179) {
            _0x33067b.decorateType(_0x29f564.constructor).add(new _0x2a1539(_0x5a0179, _0x1cebc7));
            Object.defineProperty(_0x29f564, _0x5a0179, {
              'get': _0x33067b.oneOfGetter(_0x1cebc7),
              'set': _0x33067b.oneOfSetter(_0x1cebc7)
            });
          };
        };
        _0x3c0a55.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js", function (_0x3f7793, _0x4d3b1e, _0x448e6c, _0x27746b, _0x379a18) {
        _0x448e6c.exports = _0x3dcf2a;
        var _0x50ffe9 = _0x4d3b1e("./object");
        ((_0x3dcf2a.prototype = Object.create(_0x50ffe9.prototype)).constructor = _0x3dcf2a).className = "Namespace";
        var _0xcf3722;
        var _0x11d953;
        var _0x40a7df;
        var _0x41defd = _0x4d3b1e('./field');
        var _0x13a33f = _0x4d3b1e('./oneof');
        var _0x97e70a = _0x4d3b1e("./util");
        function _0x34310f(_0x18c24f, _0x2d9de0) {
          if (_0x18c24f && _0x18c24f.length) {
            var _0x17d331 = {};
            for (var _0x10f163 = 0x0; _0x10f163 < _0x18c24f.length; ++_0x10f163) {
              _0x17d331[_0x18c24f[_0x10f163].name] = _0x18c24f[_0x10f163].toJSON(_0x2d9de0);
            }
            return _0x17d331;
          }
        }
        function _0x3dcf2a(_0x434bf0, _0x7b0ae9) {
          _0x50ffe9.call(this, _0x434bf0, _0x7b0ae9);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x2ffe56(_0x15fef0) {
          _0x15fef0._nestedArray = null;
          return _0x15fef0;
        }
        _0x3dcf2a.fromJSON = function (_0x4557da, _0x58ed6f) {
          return new _0x3dcf2a(_0x4557da, _0x58ed6f.options).addJSON(_0x58ed6f.nested);
        };
        _0x3dcf2a.arrayToJSON = _0x34310f;
        _0x3dcf2a.isReservedId = function (_0x493457, _0x3d8200) {
          if (_0x493457) {
            for (var _0x2d6bad = 0x0; _0x2d6bad < _0x493457.length; ++_0x2d6bad) {
              if ("string" != typeof _0x493457[_0x2d6bad] && _0x493457[_0x2d6bad][0x0] <= _0x3d8200 && _0x493457[_0x2d6bad][0x1] > _0x3d8200) {
                return true;
              }
            }
          }
          return false;
        };
        _0x3dcf2a.isReservedName = function (_0x1fd6f1, _0x5d322b) {
          if (_0x1fd6f1) {
            for (var _0x4d9bf3 = 0x0; _0x4d9bf3 < _0x1fd6f1.length; ++_0x4d9bf3) {
              if (_0x1fd6f1[_0x4d9bf3] === _0x5d322b) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x3dcf2a.prototype, "nestedArray", {
          'get': function () {
            return this._nestedArray || (this._nestedArray = _0x97e70a.toArray(this.nested));
          }
        });
        _0x3dcf2a.prototype.toJSON = function (_0x46f48a) {
          return _0x97e70a.toObject(["options", this.options, "nested", _0x34310f(this.nestedArray, _0x46f48a)]);
        };
        _0x3dcf2a.prototype.addJSON = function (_0xda52f7) {
          if (_0xda52f7) {
            var _0x94ebcb;
            var _0x182f9a = Object.keys(_0xda52f7);
            for (var _0x5cfac1 = 0x0; _0x5cfac1 < _0x182f9a.length; ++_0x5cfac1) {
              _0x94ebcb = _0xda52f7[_0x182f9a[_0x5cfac1]];
              this.add((undefined !== _0x94ebcb.fields ? _0xcf3722.fromJSON : undefined !== _0x94ebcb.values ? _0x40a7df.fromJSON : undefined !== _0x94ebcb.methods ? _0x11d953.fromJSON : undefined !== _0x94ebcb.id ? _0x41defd.fromJSON : _0x3dcf2a.fromJSON)(_0x182f9a[_0x5cfac1], _0x94ebcb));
            }
          }
          return this;
        };
        _0x3dcf2a.prototype.get = function (_0x14b141) {
          return this.nested && this.nested[_0x14b141] || null;
        };
        _0x3dcf2a.prototype.getEnum = function (_0x94c546) {
          if (this.nested && this.nested[_0x94c546] instanceof _0x40a7df) {
            return this.nested[_0x94c546].values;
          }
          throw Error("no such enum: " + _0x94c546);
        };
        _0x3dcf2a.prototype.add = function (_0x3ea114) {
          if (!(_0x3ea114 instanceof _0x41defd && undefined !== _0x3ea114.extend || _0x3ea114 instanceof _0xcf3722 || _0x3ea114 instanceof _0x40a7df || _0x3ea114 instanceof _0x11d953 || _0x3ea114 instanceof _0x3dcf2a || _0x3ea114 instanceof _0x13a33f)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x5a3040 = this.get(_0x3ea114.name);
            if (_0x5a3040) {
              if (!(_0x5a3040 instanceof _0x3dcf2a && _0x3ea114 instanceof _0x3dcf2a) || _0x5a3040 instanceof _0xcf3722 || _0x5a3040 instanceof _0x11d953) {
                throw Error("duplicate name '" + _0x3ea114.name + "' in " + this);
              }
              var _0x541753 = _0x5a3040.nestedArray;
              for (var _0x4fb9c7 = 0x0; _0x4fb9c7 < _0x541753.length; ++_0x4fb9c7) {
                _0x3ea114.add(_0x541753[_0x4fb9c7]);
              }
              this.remove(_0x5a3040);
              if (!this.nested) {
                this.nested = {};
              }
              _0x3ea114.setOptions(_0x5a3040.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x3ea114.name] = _0x3ea114;
          _0x3ea114.onAdd(this);
          return _0x2ffe56(this);
        };
        _0x3dcf2a.prototype.remove = function (_0x22a8ff) {
          if (!(_0x22a8ff instanceof _0x50ffe9)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x22a8ff.parent !== this) {
            throw Error(_0x22a8ff + " is not a member of " + this);
          }
          delete this.nested[_0x22a8ff.name];
          if (!Object.keys(this.nested).length) {
            this.nested = undefined;
          }
          _0x22a8ff.onRemove(this);
          return _0x2ffe56(this);
        };
        _0x3dcf2a.prototype.define = function (_0x5ccfad, _0x356ca3) {
          if (_0x97e70a.isString(_0x5ccfad)) {
            _0x5ccfad = _0x5ccfad.split('.');
          } else {
            if (!Array.isArray(_0x5ccfad)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x5ccfad && _0x5ccfad.length && '' === _0x5ccfad[0x0]) {
            throw Error("path must be relative");
          }
          for (var _0x585ab1 = this; _0x5ccfad.length > 0x0;) {
            var _0x584977 = _0x5ccfad.shift();
            if (_0x585ab1.nested && _0x585ab1.nested[_0x584977]) {
              if (!((_0x585ab1 = _0x585ab1.nested[_0x584977]) instanceof _0x3dcf2a)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x585ab1.add(_0x585ab1 = new _0x3dcf2a(_0x584977));
            }
          }
          if (_0x356ca3) {
            _0x585ab1.addJSON(_0x356ca3);
          }
          return _0x585ab1;
        };
        _0x3dcf2a.prototype.resolveAll = function () {
          var _0xc1fc99 = this.nestedArray;
          for (var _0x157858 = 0x0; _0x157858 < _0xc1fc99.length;) {
            if (_0xc1fc99[_0x157858] instanceof _0x3dcf2a) {
              _0xc1fc99[_0x157858++].resolveAll();
            } else {
              _0xc1fc99[_0x157858++].resolve();
            }
          }
          return this.resolve();
        };
        _0x3dcf2a.prototype.lookup = function (_0x281ef4, _0x4c185f, _0x20ebaa) {
          if ("boolean" == typeof _0x4c185f) {
            _0x20ebaa = _0x4c185f;
            _0x4c185f = undefined;
          } else if (_0x4c185f && !Array.isArray(_0x4c185f)) {
            _0x4c185f = [_0x4c185f];
          }
          if (_0x97e70a.isString(_0x281ef4) && _0x281ef4.length) {
            if ('.' === _0x281ef4) {
              return this.root;
            }
            _0x281ef4 = _0x281ef4.split('.');
          } else {
            if (!_0x281ef4.length) {
              return this;
            }
          }
          if ('' === _0x281ef4[0x0]) {
            return this.root.lookup(_0x281ef4.slice(0x1), _0x4c185f);
          }
          var _0x112996 = this.get(_0x281ef4[0x0]);
          if (_0x112996) {
            if (0x1 === _0x281ef4.length) {
              if (!_0x4c185f || _0x4c185f.indexOf(_0x112996.constructor) > -0x1) {
                return _0x112996;
              }
            } else {
              if (_0x112996 instanceof _0x3dcf2a && (_0x112996 = _0x112996.lookup(_0x281ef4.slice(0x1), _0x4c185f, true))) {
                return _0x112996;
              }
            }
          } else {
            for (var _0x241633 = 0x0; _0x241633 < this.nestedArray.length; ++_0x241633) {
              if (this._nestedArray[_0x241633] instanceof _0x3dcf2a && (_0x112996 = this._nestedArray[_0x241633].lookup(_0x281ef4, _0x4c185f, true))) {
                return _0x112996;
              }
            }
          }
          return null === this.parent || _0x20ebaa ? null : this.parent.lookup(_0x281ef4, _0x4c185f);
        };
        _0x3dcf2a.prototype.lookupType = function (_0x39051a) {
          var _0x4ed7e8 = this.lookup(_0x39051a, [_0xcf3722]);
          if (!_0x4ed7e8) {
            throw Error("no such type: " + _0x39051a);
          }
          return _0x4ed7e8;
        };
        _0x3dcf2a.prototype.lookupEnum = function (_0x4ae695) {
          var _0x3980c0 = this.lookup(_0x4ae695, [_0x40a7df]);
          if (!_0x3980c0) {
            throw Error("no such Enum '" + _0x4ae695 + "' in " + this);
          }
          return _0x3980c0;
        };
        _0x3dcf2a.prototype.lookupTypeOrEnum = function (_0x2bb0bb) {
          var _0x15e20f = this.lookup(_0x2bb0bb, [_0xcf3722, _0x40a7df]);
          if (!_0x15e20f) {
            throw Error("no such Type or Enum '" + _0x2bb0bb + "' in " + this);
          }
          return _0x15e20f;
        };
        _0x3dcf2a.prototype.lookupService = function (_0x4cdc76) {
          var _0x5eefe4 = this.lookup(_0x4cdc76, [_0x11d953]);
          if (!_0x5eefe4) {
            throw Error("no such Service '" + _0x4cdc76 + "' in " + this);
          }
          return _0x5eefe4;
        };
        _0x3dcf2a._configure = function (_0x5be9e5, _0x25a7e7, _0x3f0dd4) {
          _0xcf3722 = _0x5be9e5;
          _0x11d953 = _0x25a7e7;
          _0x40a7df = _0x3f0dd4;
        };
        _0x448e6c.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js", function (_0x289c96, _0x4ab7e2, _0x1bd366, _0x2b269e, _0x587189) {
        _0x1bd366.exports = _0x489281;
        var _0x1d8079 = _0x4ab7e2("./field");
        ((_0x489281.prototype = Object.create(_0x1d8079.prototype)).constructor = _0x489281).className = "MapField";
        var _0x5c9b4c = _0x4ab7e2("./types");
        var _0x26ed77 = _0x4ab7e2("./util");
        function _0x489281(_0x507cff, _0x310352, _0xf01d10, _0x100aaa, _0x484d9e, _0x14b8ce) {
          _0x1d8079.call(this, _0x507cff, _0x310352, _0x100aaa, undefined, undefined, _0x484d9e, _0x14b8ce);
          if (!_0x26ed77.isString(_0xf01d10)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0xf01d10;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x489281.fromJSON = function (_0xe46fa8, _0x362ac9) {
          return new _0x489281(_0xe46fa8, _0x362ac9.id, _0x362ac9.keyType, _0x362ac9.type, _0x362ac9.options, _0x362ac9.comment);
        };
        _0x489281.prototype.toJSON = function (_0x61f846) {
          var _0x2b3077 = !!_0x61f846 && Boolean(_0x61f846.keepComments);
          return _0x26ed77.toObject(['keyType', this.keyType, 'type', this.type, 'id', this.id, "extend", this.extend, 'options', this.options, "comment", _0x2b3077 ? this.comment : undefined]);
        };
        _0x489281.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x5c9b4c.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x1d8079.prototype.resolve.call(this);
        };
        _0x489281.d = function (_0x3be6b6, _0x178d53, _0x42c126) {
          if ("function" == typeof _0x42c126) {
            _0x42c126 = _0x26ed77.decorateType(_0x42c126).name;
          } else if (_0x42c126 && 'object' == typeof _0x42c126) {
            _0x42c126 = _0x26ed77.decorateEnum(_0x42c126).name;
          }
          return function (_0xc1df5f, _0xf35bb7) {
            _0x26ed77.decorateType(_0xc1df5f.constructor).add(new _0x489281(_0xf35bb7, _0x3be6b6, _0x178d53, _0x42c126));
          };
        };
        _0x1bd366.exports;
      }, function () {
        return {
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/method.js', function (_0x1b94f9, _0x313f83, _0x285acf, _0x1b4e19, _0xaea464) {
        _0x285acf.exports = _0x1e4831;
        var _0x2671c2 = _0x313f83("./object");
        ((_0x1e4831.prototype = Object.create(_0x2671c2.prototype)).constructor = _0x1e4831).className = "Method";
        var _0x3f9f3b = _0x313f83("./util");
        function _0x1e4831(_0x5b8f0c, _0x28ab1c, _0x5b6baf, _0x114eb3, _0x481e6f, _0x1cf353, _0x1ef90b, _0xda7f60, _0x1ddfde) {
          if (_0x3f9f3b.isObject(_0x481e6f)) {
            _0x1ef90b = _0x481e6f;
            _0x481e6f = _0x1cf353 = undefined;
          } else if (_0x3f9f3b.isObject(_0x1cf353)) {
            _0x1ef90b = _0x1cf353;
            _0x1cf353 = undefined;
          }
          if (undefined !== _0x28ab1c && !_0x3f9f3b.isString(_0x28ab1c)) {
            throw TypeError("type must be a string");
          }
          if (!_0x3f9f3b.isString(_0x5b6baf)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x3f9f3b.isString(_0x114eb3)) {
            throw TypeError("responseType must be a string");
          }
          _0x2671c2.call(this, _0x5b8f0c, _0x1ef90b);
          this.type = _0x28ab1c || "rpc";
          this.requestType = _0x5b6baf;
          this.requestStream = !!_0x481e6f || undefined;
          this.responseType = _0x114eb3;
          this.responseStream = !!_0x1cf353 || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0xda7f60;
          this.parsedOptions = _0x1ddfde;
        }
        _0x1e4831.fromJSON = function (_0x5d42f3, _0xe0f17) {
          return new _0x1e4831(_0x5d42f3, _0xe0f17.type, _0xe0f17.requestType, _0xe0f17.responseType, _0xe0f17.requestStream, _0xe0f17.responseStream, _0xe0f17.options, _0xe0f17.comment, _0xe0f17.parsedOptions);
        };
        _0x1e4831.prototype.toJSON = function (_0x204673) {
          var _0x15454c = !!_0x204673 && Boolean(_0x204673.keepComments);
          return _0x3f9f3b.toObject(["type", 'rpc' !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, 'responseType', this.responseType, 'responseStream', this.responseStream, "options", this.options, "comment", _0x15454c ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x1e4831.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x2671c2.prototype.resolve.call(this));
        };
        _0x285acf.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/service.js', function (_0x3f7173, _0xa6e075, _0xb91951, _0x3c28fe, _0x513109) {
        _0xb91951.exports = _0x4f9692;
        var _0x2381b1 = _0xa6e075("./namespace");
        ((_0x4f9692.prototype = Object.create(_0x2381b1.prototype)).constructor = _0x4f9692).className = "Service";
        var _0x31b688 = _0xa6e075("./method");
        var _0x22e100 = _0xa6e075("./util");
        var _0x5c71a5 = _0xa6e075("./rpc");
        function _0x4f9692(_0xc7ae21, _0x4d4fe9) {
          _0x2381b1.call(this, _0xc7ae21, _0x4d4fe9);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x1ec13c(_0x456709) {
          _0x456709._methodsArray = null;
          return _0x456709;
        }
        _0x4f9692.fromJSON = function (_0xfb00f2, _0x17b053) {
          var _0x5b1343 = new _0x4f9692(_0xfb00f2, _0x17b053.options);
          if (_0x17b053.methods) {
            var _0x4fc69b = Object.keys(_0x17b053.methods);
            for (var _0x236366 = 0x0; _0x236366 < _0x4fc69b.length; ++_0x236366) {
              _0x5b1343.add(_0x31b688.fromJSON(_0x4fc69b[_0x236366], _0x17b053.methods[_0x4fc69b[_0x236366]]));
            }
          }
          if (_0x17b053.nested) {
            _0x5b1343.addJSON(_0x17b053.nested);
          }
          _0x5b1343.comment = _0x17b053.comment;
          return _0x5b1343;
        };
        _0x4f9692.prototype.toJSON = function (_0x21dac6) {
          var _0x85ed9a = _0x2381b1.prototype.toJSON.call(this, _0x21dac6);
          var _0x4341ac = !!_0x21dac6 && Boolean(_0x21dac6.keepComments);
          return _0x22e100.toObject(["options", _0x85ed9a && _0x85ed9a.options || undefined, "methods", _0x2381b1.arrayToJSON(this.methodsArray, _0x21dac6) || {}, "nested", _0x85ed9a && _0x85ed9a.nested || undefined, "comment", _0x4341ac ? this.comment : undefined]);
        };
        Object.defineProperty(_0x4f9692.prototype, "methodsArray", {
          'get': function () {
            return this._methodsArray || (this._methodsArray = _0x22e100.toArray(this.methods));
          }
        });
        _0x4f9692.prototype.get = function (_0x980222) {
          return this.methods[_0x980222] || _0x2381b1.prototype.get.call(this, _0x980222);
        };
        _0x4f9692.prototype.resolveAll = function () {
          var _0xc735ea = this.methodsArray;
          for (var _0x389855 = 0x0; _0x389855 < _0xc735ea.length; ++_0x389855) {
            _0xc735ea[_0x389855].resolve();
          }
          return _0x2381b1.prototype.resolve.call(this);
        };
        _0x4f9692.prototype.add = function (_0x54d803) {
          if (this.get(_0x54d803.name)) {
            throw Error("duplicate name '" + _0x54d803.name + "' in " + this);
          }
          return _0x54d803 instanceof _0x31b688 ? (this.methods[_0x54d803.name] = _0x54d803, _0x54d803.parent = this, _0x1ec13c(this)) : _0x2381b1.prototype.add.call(this, _0x54d803);
        };
        _0x4f9692.prototype.remove = function (_0x117fd2) {
          if (_0x117fd2 instanceof _0x31b688) {
            if (this.methods[_0x117fd2.name] !== _0x117fd2) {
              throw Error(_0x117fd2 + " is not a member of " + this);
            }
            delete this.methods[_0x117fd2.name];
            _0x117fd2.parent = null;
            return _0x1ec13c(this);
          }
          return _0x2381b1.prototype.remove.call(this, _0x117fd2);
        };
        _0x4f9692.prototype.create = function (_0x59bfda, _0x4ac20e, _0x56549c) {
          var _0x495f56;
          var _0x11ca76 = new _0x5c71a5.Service(_0x59bfda, _0x4ac20e, _0x56549c);
          for (var _0x216cb2 = 0x0; _0x216cb2 < this.methodsArray.length; ++_0x216cb2) {
            var _0x449e1e = _0x22e100.lcFirst((_0x495f56 = this._methodsArray[_0x216cb2]).resolve().name).replace(/[^$\w_]/g, '');
            _0x11ca76[_0x449e1e] = _0x22e100.codegen(['r', 'c'], _0x22e100.isReserved(_0x449e1e) ? _0x449e1e + '_' : _0x449e1e)("return this.rpcCall(m,q,s,r,c)")({
              'm': _0x495f56,
              'q': _0x495f56.resolvedRequestType.ctor,
              's': _0x495f56.resolvedResponseType.ctor
            });
          }
          return _0x11ca76;
        };
        _0xb91951.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './method': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './rpc': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/message.js", function (_0x558f03, _0x3bffc6, _0x552357, _0x457acd, _0x85ddb) {
        _0x552357.exports = _0x4363ae;
        var _0x6cef28 = _0x3bffc6('./util/minimal');
        function _0x4363ae(_0x281687) {
          if (_0x281687) {
            var _0x4dcb96 = Object.keys(_0x281687);
            for (var _0x385a14 = 0x0; _0x385a14 < _0x4dcb96.length; ++_0x385a14) {
              this[_0x4dcb96[_0x385a14]] = _0x281687[_0x4dcb96[_0x385a14]];
            }
          }
        }
        _0x4363ae.create = function (_0x9563d6) {
          return this.$type.create(_0x9563d6);
        };
        _0x4363ae.encode = function (_0xfe25eb, _0x4d7f45) {
          return this.$type.encode(_0xfe25eb, _0x4d7f45);
        };
        _0x4363ae.encodeDelimited = function (_0x531cca, _0x550d26) {
          return this.$type.encodeDelimited(_0x531cca, _0x550d26);
        };
        _0x4363ae.decode = function (_0x21a590) {
          return this.$type.decode(_0x21a590);
        };
        _0x4363ae.decodeDelimited = function (_0x264b33) {
          return this.$type.decodeDelimited(_0x264b33);
        };
        _0x4363ae.verify = function (_0x1c96e9) {
          return this.$type.verify(_0x1c96e9);
        };
        _0x4363ae.fromObject = function (_0xd49d84) {
          return this.$type.fromObject(_0xd49d84);
        };
        _0x4363ae.toObject = function (_0x2a8aba, _0x95bf73) {
          return this.$type.toObject(_0x2a8aba, _0x95bf73);
        };
        _0x4363ae.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x6cef28.toJSONOptions);
        };
        _0x552357.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js", function (_0x44c572, _0x1f4a8e, _0x4001ff, _0x3eef2a, _0x31273e) {
        _0x4001ff.exports = function (_0x3f23d4) {
          var _0x48e785 = _0x3f23f3.codegen(['r', 'l'], _0x3f23d4.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x3f23d4.fieldsArray.filter(function (_0x5cb8aa) {
            return _0x5cb8aa.map;
          }).length ? ",k,value" : ''))('while(r.pos<c){')("var t=r.uint32()");
          if (_0x3f23d4.group) {
            _0x48e785("if((t&7)===4)")("break");
          }
          _0x48e785("switch(t>>>3){");
          for (var _0x5c909e = 0x0; _0x5c909e < _0x3f23d4.fieldsArray.length; ++_0x5c909e) {
            var _0x48ba43 = _0x3f23d4._fieldsArray[_0x5c909e].resolve();
            var _0x30a0a2 = _0x48ba43.resolvedType instanceof _0x29a626 ? 'int32' : _0x48ba43.type;
            var _0x1a1b30 = 'm' + _0x3f23f3.safeProp(_0x48ba43.name);
            _0x48e785("case %i:", _0x48ba43.id);
            if (_0x48ba43.map) {
              _0x48e785("if(%s===util.emptyObject)", _0x1a1b30)("%s={}", _0x1a1b30)("var c2 = r.uint32()+r.pos");
              if (undefined !== _0x88a72d.defaults[_0x48ba43.keyType]) {
                _0x48e785("k=%j", _0x88a72d.defaults[_0x48ba43.keyType]);
              } else {
                _0x48e785("k=null");
              }
              if (undefined !== _0x88a72d.defaults[_0x30a0a2]) {
                _0x48e785("value=%j", _0x88a72d.defaults[_0x30a0a2]);
              } else {
                _0x48e785("value=null");
              }
              _0x48e785("while(r.pos<c2){")("var tag2=r.uint32()")('switch(tag2>>>3){')("case 1: k=r.%s(); break", _0x48ba43.keyType)("case 2:");
              if (undefined === _0x88a72d.basic[_0x30a0a2]) {
                _0x48e785("value=types[%i].decode(r,r.uint32())", _0x5c909e);
              } else {
                _0x48e785('value=r.%s()', _0x30a0a2);
              }
              _0x48e785("break")('default:')("r.skipType(tag2&7)")("break")('}')('}');
              if (undefined !== _0x88a72d.long[_0x48ba43.keyType]) {
                _0x48e785("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x1a1b30);
              } else {
                _0x48e785("%s[k]=value", _0x1a1b30);
              }
            } else if (_0x48ba43.repeated) {
              _0x48e785("if(!(%s&&%s.length))", _0x1a1b30, _0x1a1b30)('%s=[]', _0x1a1b30);
              if (undefined !== _0x88a72d.packed[_0x30a0a2]) {
                _0x48e785("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")('%s.push(r.%s())', _0x1a1b30, _0x30a0a2)('}else');
              }
              if (undefined === _0x88a72d.basic[_0x30a0a2]) {
                _0x48e785(_0x48ba43.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x1a1b30, _0x5c909e);
              } else {
                _0x48e785("%s.push(r.%s())", _0x1a1b30, _0x30a0a2);
              }
            } else if (undefined === _0x88a72d.basic[_0x30a0a2]) {
              _0x48e785(_0x48ba43.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", _0x1a1b30, _0x5c909e);
            } else {
              _0x48e785('%s=r.%s()', _0x1a1b30, _0x30a0a2);
            }
            _0x48e785("break");
          }
          _0x48e785("default:")('r.skipType(t&7)')('break')('}')('}');
          for (_0x5c909e = 0x0; _0x5c909e < _0x3f23d4._fieldsArray.length; ++_0x5c909e) {
            var _0x367146 = _0x3f23d4._fieldsArray[_0x5c909e];
            if (_0x367146.required) {
              _0x48e785("if(!m.hasOwnProperty(%j))", _0x367146.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + _0x367146.name + "'");
            }
          }
          return _0x48e785("return m");
        };
        var _0x29a626 = _0x1f4a8e("./enum");
        var _0x88a72d = _0x1f4a8e("./types");
        var _0x3f23f3 = _0x1f4a8e("./util");
        _0x4001ff.exports;
      }, function () {
        return {
          './enum': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js", function (_0x1c4bde, _0x3cfc58, _0x105484, _0x414be1, _0x42ee27) {
        _0x105484.exports = function (_0x4656d2) {
          var _0x272f79 = _0x2a1a6f.codegen(['m'], _0x4656d2.name + '$verify')("if(typeof m!==\"object\"||m===null)")('return%j', "object expected");
          var _0x28a006 = _0x4656d2.oneofsArray;
          var _0x18414c = {};
          if (_0x28a006.length) {
            _0x272f79("var p={}");
          }
          for (var _0x31cbeb = 0x0; _0x31cbeb < _0x4656d2.fieldsArray.length; ++_0x31cbeb) {
            var _0x467b79 = _0x4656d2._fieldsArray[_0x31cbeb].resolve();
            var _0x2253a6 = 'm' + _0x2a1a6f.safeProp(_0x467b79.name);
            if (_0x467b79.optional) {
              _0x272f79('if(%s!=null&&m.hasOwnProperty(%j)){', _0x2253a6, _0x467b79.name);
            }
            if (_0x467b79.map) {
              _0x272f79("if(!util.isObject(%s))", _0x2253a6)("return%j", _0x467b79.name + ": " + _0xc36e(0x1c7) + (_0x467b79.repeated && "array" !== _0xc36e(0x1c7) ? '[]' : _0x467b79.map && false ? "{k:" + _0x467b79.keyType + '}' : '') + " expected")("var k=Object.keys(%s)", _0x2253a6)("for(var i=0;i<k.length;++i){");
              _0x336af1(_0x272f79, _0x467b79, "k[i]");
              _0x322369(_0x272f79, _0x467b79, _0x31cbeb, _0x2253a6 + "[k[i]]")('}');
            } else {
              if (_0x467b79.repeated) {
                _0x272f79("if(!Array.isArray(%s))", _0x2253a6)("return%j", _0x467b79.name + ": " + _0xc36e(0x3d5) + (_0x467b79.repeated && "array" !== _0xc36e(0x3d5) ? '[]' : _0x467b79.map && true ? "{k:" + _0x467b79.keyType + '}' : '') + " expected")("for(var i=0;i<%s.length;++i){", _0x2253a6);
                _0x322369(_0x272f79, _0x467b79, _0x31cbeb, _0x2253a6 + "[i]")('}');
              } else {
                if (_0x467b79.partOf) {
                  var _0x578b81 = _0x2a1a6f.safeProp(_0x467b79.partOf.name);
                  if (0x1 === _0x18414c[_0x467b79.partOf.name]) {
                    _0x272f79("if(p%s===1)", _0x578b81)("return%j", _0x467b79.partOf.name + ": multiple values");
                  }
                  _0x18414c[_0x467b79.partOf.name] = 0x1;
                  _0x272f79("p%s=1", _0x578b81);
                }
                _0x322369(_0x272f79, _0x467b79, _0x31cbeb, _0x2253a6);
              }
            }
            if (_0x467b79.optional) {
              _0x272f79('}');
            }
          }
          return _0x272f79("return null");
        };
        var _0x47ae76 = _0x3cfc58('./enum');
        var _0x2a1a6f = _0x3cfc58("./util");
        function _0x322369(_0x4b79da, _0x1ca711, _0xd04158, _0xd938fe) {
          if (_0x1ca711.resolvedType) {
            if (_0x1ca711.resolvedType instanceof _0x47ae76) {
              _0x4b79da('switch(%s){', _0xd938fe)("default:")("return%j", _0x1ca711.name + ": " + _0xc36e(0x559) + (_0x1ca711.repeated && "array" !== _0xc36e(0x559) ? '[]' : _0x1ca711.map && true ? "{k:" + _0x1ca711.keyType + '}' : '') + " expected");
              var _0x3f6d81 = Object.keys(_0x1ca711.resolvedType.values);
              for (var _0x2fd911 = 0x0; _0x2fd911 < _0x3f6d81.length; ++_0x2fd911) {
                _0x4b79da("case %i:", _0x1ca711.resolvedType.values[_0x3f6d81[_0x2fd911]]);
              }
              _0x4b79da("break")('}');
            } else {
              _0x4b79da('{')("var e=types[%i].verify(%s);", _0xd04158, _0xd938fe)("if(e)")("return%j+e", _0x1ca711.name + '.')('}');
            }
          } else {
            switch (_0x1ca711.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case 'fixed32':
              case 'sfixed32':
                _0x4b79da("if(!util.isInteger(%s))", _0xd938fe)("return%j", _0x1ca711.name + ": " + _0xc36e(0x5c1) + (_0x1ca711.repeated && "array" !== _0xc36e(0x5c1) ? '[]' : _0x1ca711.map && true ? "{k:" + _0x1ca711.keyType + '}' : '') + " expected");
                break;
              case 'int64':
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x4b79da("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0xd938fe, _0xd938fe, _0xd938fe, _0xd938fe)("return%j", _0x1ca711.name + ": " + _0xc36e(0x6be) + (_0x1ca711.repeated && "array" !== _0xc36e(0x6be) ? '[]' : _0x1ca711.map && true ? "{k:" + _0x1ca711.keyType + '}' : '') + " expected");
                break;
              case 'float':
              case "double":
                _0x4b79da("if(typeof %s!==\"number\")", _0xd938fe)('return%j', _0x1ca711.name + ": " + 'number' + (_0x1ca711.repeated && true ? '[]' : _0x1ca711.map && true ? "{k:" + _0x1ca711.keyType + '}' : '') + " expected");
                break;
              case 'bool':
                _0x4b79da("if(typeof %s!==\"boolean\")", _0xd938fe)("return%j", _0x1ca711.name + ": " + _0xc36e(0x514) + (_0x1ca711.repeated && "array" !== _0xc36e(0x514) ? '[]' : _0x1ca711.map && true ? "{k:" + _0x1ca711.keyType + '}' : '') + " expected");
                break;
              case "string":
                _0x4b79da("if(!util.isString(%s))", _0xd938fe)("return%j", _0x1ca711.name + ": " + _0xc36e(0x511) + (_0x1ca711.repeated && "array" !== _0xc36e(0x511) ? '[]' : _0x1ca711.map && true ? "{k:" + _0x1ca711.keyType + '}' : '') + " expected");
                break;
              case "bytes":
                _0x4b79da("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0xd938fe, _0xd938fe, _0xd938fe)("return%j", _0x1ca711.name + ": " + _0xc36e(0x527) + (_0x1ca711.repeated && "array" !== _0xc36e(0x527) ? '[]' : _0x1ca711.map && true ? "{k:" + _0x1ca711.keyType + '}' : '') + " expected");
            }
          }
          return _0x4b79da;
        }
        function _0x336af1(_0x275625, _0x1ee149, _0x494a04) {
          switch (_0x1ee149.keyType) {
            case "int32":
            case 'uint32':
            case "sint32":
            case "fixed32":
            case "sfixed32":
              _0x275625("if(!util.key32Re.test(%s))", _0x494a04)("return%j", _0x1ee149.name + ": " + _0xc36e(0x4a6) + (_0x1ee149.repeated && "array" !== _0xc36e(0x4a6) ? '[]' : _0x1ee149.map && true ? "{k:" + _0x1ee149.keyType + '}' : '') + " expected");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              _0x275625("if(!util.key64Re.test(%s))", _0x494a04)("return%j", _0x1ee149.name + ": " + _0xc36e(0x5eb) + (_0x1ee149.repeated && "array" !== _0xc36e(0x5eb) ? '[]' : _0x1ee149.map && true ? "{k:" + _0x1ee149.keyType + '}' : '') + " expected");
              break;
            case 'bool':
              _0x275625('if(!util.key2Re.test(%s))', _0x494a04)('return%j', _0x1ee149.name + ": " + "boolean key" + (_0x1ee149.repeated && true ? '[]' : _0x1ee149.map && true ? "{k:" + _0x1ee149.keyType + '}' : '') + " expected");
          }
          return _0x275625;
        }
        _0x105484.exports;
      }, function () {
        return {
          './enum': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/converter.js', function (_0x11cb4c, _0x3a3c15, _0x3d95d0, _0x4c56c2, _0x3a8b26) {
        var _0x156b13 = _0x3a3c15("./enum");
        var _0x68c183 = _0x3a3c15("./util");
        function _0x368bbd(_0x4f806e, _0x383efe, _0x1ad072, _0x37ebeb) {
          if (_0x383efe.resolvedType) {
            if (_0x383efe.resolvedType instanceof _0x156b13) {
              _0x4f806e('switch(d%s){', _0x37ebeb);
              var _0x57c905 = _0x383efe.resolvedType.values;
              var _0x25b878 = Object.keys(_0x57c905);
              for (var _0x5dbcc8 = 0x0; _0x5dbcc8 < _0x25b878.length; ++_0x5dbcc8) {
                if (_0x383efe.repeated && _0x57c905[_0x25b878[_0x5dbcc8]] === _0x383efe.typeDefault) {
                  _0x4f806e("default:");
                }
                _0x4f806e('case%j:', _0x25b878[_0x5dbcc8])("case %i:", _0x57c905[_0x25b878[_0x5dbcc8]])("m%s=%j", _0x37ebeb, _0x57c905[_0x25b878[_0x5dbcc8]])("break");
              }
              _0x4f806e('}');
            } else {
              _0x4f806e("if(typeof d%s!==\"object\")", _0x37ebeb)("throw TypeError(%j)", _0x383efe.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", _0x37ebeb, _0x1ad072, _0x37ebeb);
            }
          } else {
            var _0x2cf4f7 = false;
            switch (_0x383efe.type) {
              case 'double':
              case 'float':
                _0x4f806e('m%s=Number(d%s)', _0x37ebeb, _0x37ebeb);
                break;
              case 'uint32':
              case "fixed32":
                _0x4f806e("m%s=d%s>>>0", _0x37ebeb, _0x37ebeb);
                break;
              case "int32":
              case "sint32":
              case 'sfixed32':
                _0x4f806e("m%s=d%s|0", _0x37ebeb, _0x37ebeb);
                break;
              case "uint64":
                _0x2cf4f7 = true;
              case "int64":
              case "sint64":
              case 'fixed64':
              case 'sfixed64':
                _0x4f806e("if(util.Long)")('(m%s=util.Long.fromValue(d%s)).unsigned=%j', _0x37ebeb, _0x37ebeb, _0x2cf4f7)("else if(typeof d%s===\"string\")", _0x37ebeb)("m%s=parseInt(d%s,10)", _0x37ebeb, _0x37ebeb)("else if(typeof d%s===\"number\")", _0x37ebeb)("m%s=d%s", _0x37ebeb, _0x37ebeb)("else if(typeof d%s===\"object\")", _0x37ebeb)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x37ebeb, _0x37ebeb, _0x37ebeb, _0x2cf4f7 ? 'true' : '');
                break;
              case 'bytes':
                _0x4f806e("if(typeof d%s===\"string\")", _0x37ebeb)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", _0x37ebeb, _0x37ebeb, _0x37ebeb)("else if(d%s.length)", _0x37ebeb)("m%s=d%s", _0x37ebeb, _0x37ebeb);
                break;
              case 'string':
                _0x4f806e('m%s=String(d%s)', _0x37ebeb, _0x37ebeb);
                break;
              case "bool":
                _0x4f806e('m%s=Boolean(d%s)', _0x37ebeb, _0x37ebeb);
            }
          }
          return _0x4f806e;
        }
        function _0x9ab6e2(_0x1e0827, _0x511768, _0x4744e6, _0xa30a2a) {
          if (_0x511768.resolvedType) {
            if (_0x511768.resolvedType instanceof _0x156b13) {
              _0x1e0827('d%s=o.enums===String?types[%i].values[m%s]:m%s', _0xa30a2a, _0x4744e6, _0xa30a2a, _0xa30a2a);
            } else {
              _0x1e0827("d%s=types[%i].toObject(m%s,o)", _0xa30a2a, _0x4744e6, _0xa30a2a);
            }
          } else {
            var _0x5c2f17 = false;
            switch (_0x511768.type) {
              case "double":
              case "float":
                _0x1e0827("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0xa30a2a, _0xa30a2a, _0xa30a2a, _0xa30a2a);
                break;
              case "uint64":
                _0x5c2f17 = true;
              case "int64":
              case 'sint64':
              case 'fixed64':
              case "sfixed64":
                _0x1e0827("if(typeof m%s===\"number\")", _0xa30a2a)('d%s=o.longs===String?String(m%s):m%s', _0xa30a2a, _0xa30a2a, _0xa30a2a)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0xa30a2a, _0xa30a2a, _0xa30a2a, _0xa30a2a, _0x5c2f17 ? 'true' : '', _0xa30a2a);
                break;
              case 'bytes':
                _0x1e0827('d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s', _0xa30a2a, _0xa30a2a, _0xa30a2a, _0xa30a2a, _0xa30a2a);
                break;
              default:
                _0x1e0827("d%s=m%s", _0xa30a2a, _0xa30a2a);
            }
          }
          return _0x1e0827;
        }
        _0x11cb4c.fromObject = function (_0x447231) {
          var _0x44e7b1 = _0x447231.fieldsArray;
          var _0x31c4ff = _0x68c183.codegen(['d'], _0x447231.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0x44e7b1.length) {
            return _0x31c4ff("return new this.ctor");
          }
          _0x31c4ff("var m=new this.ctor");
          for (var _0x5da736 = 0x0; _0x5da736 < _0x44e7b1.length; ++_0x5da736) {
            var _0x139e34 = _0x44e7b1[_0x5da736].resolve();
            var _0x2898be = _0x68c183.safeProp(_0x139e34.name);
            if (_0x139e34.map) {
              _0x31c4ff("if(d%s){", _0x2898be)("if(typeof d%s!==\"object\")", _0x2898be)("throw TypeError(%j)", _0x139e34.fullName + ": object expected")('m%s={}', _0x2898be)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x2898be);
              _0x368bbd(_0x31c4ff, _0x139e34, _0x5da736, _0x2898be + "[ks[i]]")('}')('}');
            } else if (_0x139e34.repeated) {
              _0x31c4ff('if(d%s){', _0x2898be)("if(!Array.isArray(d%s))", _0x2898be)("throw TypeError(%j)", _0x139e34.fullName + ": array expected")("m%s=[]", _0x2898be)("for(var i=0;i<d%s.length;++i){", _0x2898be);
              _0x368bbd(_0x31c4ff, _0x139e34, _0x5da736, _0x2898be + "[i]")('}')('}');
            } else {
              if (!(_0x139e34.resolvedType instanceof _0x156b13)) {
                _0x31c4ff("if(d%s!=null){", _0x2898be);
              }
              _0x368bbd(_0x31c4ff, _0x139e34, _0x5da736, _0x2898be);
              if (!(_0x139e34.resolvedType instanceof _0x156b13)) {
                _0x31c4ff('}');
              }
            }
          }
          return _0x31c4ff("return m");
        };
        _0x11cb4c.toObject = function (_0x218071) {
          var _0x1195e6 = _0x218071.fieldsArray.slice().sort(_0x68c183.compareFieldsById);
          if (!_0x1195e6.length) {
            return _0x68c183.codegen()("return {}");
          }
          var _0x176f80 = _0x68c183.codegen(['m', 'o'], _0x218071.name + "$toObject")("if(!o)")("o={}")("var d={}");
          var _0x51e141 = [];
          var _0x832902 = [];
          var _0x5351bd = [];
          for (var _0x2ab92b = 0x0; _0x2ab92b < _0x1195e6.length; ++_0x2ab92b) {
            if (!_0x1195e6[_0x2ab92b].partOf) {
              (_0x1195e6[_0x2ab92b].resolve().repeated ? _0x51e141 : _0x1195e6[_0x2ab92b].map ? _0x832902 : _0x5351bd).push(_0x1195e6[_0x2ab92b]);
            }
          }
          if (_0x51e141.length) {
            _0x176f80("if(o.arrays||o.defaults){");
            for (_0x2ab92b = 0x0; _0x2ab92b < _0x51e141.length; ++_0x2ab92b) {
              _0x176f80('d%s=[]', _0x68c183.safeProp(_0x51e141[_0x2ab92b].name));
            }
            _0x176f80('}');
          }
          if (_0x832902.length) {
            _0x176f80("if(o.objects||o.defaults){");
            for (_0x2ab92b = 0x0; _0x2ab92b < _0x832902.length; ++_0x2ab92b) {
              _0x176f80("d%s={}", _0x68c183.safeProp(_0x832902[_0x2ab92b].name));
            }
            _0x176f80('}');
          }
          if (_0x5351bd.length) {
            _0x176f80("if(o.defaults){");
            for (_0x2ab92b = 0x0; _0x2ab92b < _0x5351bd.length; ++_0x2ab92b) {
              var _0x150462 = _0x5351bd[_0x2ab92b];
              var _0x422c9f = _0x68c183.safeProp(_0x150462.name);
              if (_0x150462.resolvedType instanceof _0x156b13) {
                _0x176f80("d%s=o.enums===String?%j:%j", _0x422c9f, _0x150462.resolvedType.valuesById[_0x150462.typeDefault], _0x150462.typeDefault);
              } else {
                if (_0x150462.long) {
                  _0x176f80('if(util.Long){')("var n=new util.Long(%i,%i,%j)", _0x150462.typeDefault.low, _0x150462.typeDefault.high, _0x150462.typeDefault.unsigned)('d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n', _0x422c9f)("}else")("d%s=o.longs===String?%j:%i", _0x422c9f, _0x150462.typeDefault.toString(), _0x150462.typeDefault.toNumber());
                } else {
                  if (_0x150462.bytes) {
                    var _0x1321b4 = '[' + Array.prototype.slice.call(_0x150462.typeDefault).join(',') + ']';
                    _0x176f80("if(o.bytes===String)d%s=%j", _0x422c9f, String.fromCharCode.apply(String, _0x150462.typeDefault))("else{")("d%s=%s", _0x422c9f, _0x1321b4)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0x422c9f, _0x422c9f)('}');
                  } else {
                    _0x176f80("d%s=%j", _0x422c9f, _0x150462.typeDefault);
                  }
                }
              }
            }
            _0x176f80('}');
          }
          var _0x2d72bc = false;
          for (_0x2ab92b = 0x0; _0x2ab92b < _0x1195e6.length; ++_0x2ab92b) {
            _0x150462 = _0x1195e6[_0x2ab92b];
            var _0x52390a = _0x218071._fieldsArray.indexOf(_0x150462);
            _0x422c9f = _0x68c183.safeProp(_0x150462.name);
            if (_0x150462.map) {
              if (!_0x2d72bc) {
                _0x2d72bc = true;
                _0x176f80("var ks2");
              }
              _0x176f80("if(m%s&&(ks2=Object.keys(m%s)).length){", _0x422c9f, _0x422c9f)("d%s={}", _0x422c9f)("for(var j=0;j<ks2.length;++j){");
              _0x9ab6e2(_0x176f80, _0x150462, _0x52390a, _0x422c9f + '[ks2[j]]')('}');
            } else if (_0x150462.repeated) {
              _0x176f80("if(m%s&&m%s.length){", _0x422c9f, _0x422c9f)('d%s=[]', _0x422c9f)("for(var j=0;j<m%s.length;++j){", _0x422c9f);
              _0x9ab6e2(_0x176f80, _0x150462, _0x52390a, _0x422c9f + "[j]")('}');
            } else {
              _0x176f80("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x422c9f, _0x150462.name);
              _0x9ab6e2(_0x176f80, _0x150462, _0x52390a, _0x422c9f);
              if (_0x150462.partOf) {
                _0x176f80("if(o.oneofs)")("d%s=%j", _0x68c183.safeProp(_0x150462.partOf.name), _0x150462.name);
              }
            }
            _0x176f80('}');
          }
          return _0x176f80("return d");
        };
        _0x3d95d0.exports;
      }, function () {
        return {
          './enum': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js', function (_0x54a983, _0x52fee5, _0xfc4d02, _0x2e6b99, _0x3db722) {
        var _0x22595f = _0x52fee5("./message");
        _0x54a983['.google.protobuf.Any'] = {
          'fromObject': function (_0x3dc694) {
            if (_0x3dc694 && _0x3dc694["@type"]) {
              var _0x2d4e86 = _0x3dc694['@type'].substring(_0x3dc694["@type"].lastIndexOf('/') + 0x1);
              var _0x44adc9 = this.lookup(_0x2d4e86);
              if (_0x44adc9) {
                var _0x1ebb81 = '.' === _0x3dc694["@type"].charAt(0x0) ? _0x3dc694["@type"].substr(0x1) : _0x3dc694['@type'];
                if (-0x1 === _0x1ebb81.indexOf('/')) {
                  _0x1ebb81 = '/' + _0x1ebb81;
                }
                return this.create({
                  'type_url': _0x1ebb81,
                  'value': _0x44adc9.encode(_0x44adc9.fromObject(_0x3dc694)).finish()
                });
              }
            }
            return this.fromObject(_0x3dc694);
          },
          'toObject': function (_0x460776, _0x106363) {
            var _0x4daf4d = '';
            var _0x4d58f2 = '';
            if (_0x106363 && _0x106363.json && _0x460776.type_url && _0x460776.value) {
              _0x4d58f2 = _0x460776.type_url.substring(_0x460776.type_url.lastIndexOf('/') + 0x1);
              _0x4daf4d = _0x460776.type_url.substring(0x0, _0x460776.type_url.lastIndexOf('/') + 0x1);
              var _0x44dba3 = this.lookup(_0x4d58f2);
              if (_0x44dba3) {
                _0x460776 = _0x44dba3.decode(_0x460776.value);
              }
            }
            if (!(_0x460776 instanceof this.ctor) && _0x460776 instanceof _0x22595f) {
              var _0x340dae = _0x460776.$type.toObject(_0x460776, _0x106363);
              if ('' === _0x4daf4d) {
                _0x4daf4d = "type.googleapis.com/";
              }
              _0x4d58f2 = _0x4daf4d + ('.' === _0x460776.$type.fullName[0x0] ? _0x460776.$type.fullName.substr(0x1) : _0x460776.$type.fullName);
              _0x340dae['@type'] = _0x4d58f2;
              return _0x340dae;
            }
            return this.toObject(_0x460776, _0x106363);
          }
        };
        _0xfc4d02.exports;
      }, function () {
        return {
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/message.js"
        };
      });
      _0x55cf1e.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/type.js', function (_0x1b3c66, _0x5b78bb, _0x14e3f0, _0x2ae35b, _0x387862) {
        _0x14e3f0.exports = _0x49f13e;
        var _0x53fe7c = _0x5b78bb("./namespace");
        ((_0x49f13e.prototype = Object.create(_0x53fe7c.prototype)).constructor = _0x49f13e).className = "Type";
        var _0x52b3ac = _0x5b78bb("./enum");
        var _0x27dbac = _0x5b78bb("./oneof");
        var _0x1d6c8b = _0x5b78bb("./field");
        var _0x246c1f = _0x5b78bb('./mapfield');
        var _0x3dd5b4 = _0x5b78bb("./service");
        var _0x339b80 = _0x5b78bb("./message");
        var _0x34c240 = _0x5b78bb('./reader');
        var _0x3ef6b1 = _0x5b78bb("./writer");
        var _0x1aa57d = _0x5b78bb("./util");
        var _0x21247b = _0x5b78bb("./encoder");
        var _0x349aab = _0x5b78bb("./decoder");
        var _0x4f318f = _0x5b78bb("./verifier");
        var _0x9173ba = _0x5b78bb('./converter');
        var _0x389aa4 = _0x5b78bb("./wrappers");
        function _0x49f13e(_0x3d01a0, _0x4dc054) {
          _0x53fe7c.call(this, _0x3d01a0, _0x4dc054);
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
        function _0x24a664(_0x15ea45) {
          _0x15ea45._fieldsById = _0x15ea45._fieldsArray = _0x15ea45._oneofsArray = null;
          delete _0x15ea45.encode;
          delete _0x15ea45.decode;
          delete _0x15ea45.verify;
          return _0x15ea45;
        }
        Object.defineProperties(_0x49f13e.prototype, {
          'fieldsById': {
            'get': function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              var _0x1c2947 = Object.keys(this.fields);
              for (var _0x5d764d = 0x0; _0x5d764d < _0x1c2947.length; ++_0x5d764d) {
                var _0x1ee75f = this.fields[_0x1c2947[_0x5d764d]];
                var _0x2f97d9 = _0x1ee75f.id;
                if (this._fieldsById[_0x2f97d9]) {
                  throw Error("duplicate id " + _0x2f97d9 + " in " + this);
                }
                this._fieldsById[_0x2f97d9] = _0x1ee75f;
              }
              return this._fieldsById;
            }
          },
          'fieldsArray': {
            'get': function () {
              return this._fieldsArray || (this._fieldsArray = _0x1aa57d.toArray(this.fields));
            }
          },
          'oneofsArray': {
            'get': function () {
              return this._oneofsArray || (this._oneofsArray = _0x1aa57d.toArray(this.oneofs));
            }
          },
          'ctor': {
            'get': function () {
              return this._ctor || (this.ctor = _0x49f13e.generateConstructor(this)());
            },
            'set': function (_0x39747a) {
              var _0x45509e = _0x39747a.prototype;
              if (!(_0x45509e instanceof _0x339b80)) {
                (_0x39747a.prototype = new _0x339b80()).constructor = _0x39747a;
                _0x1aa57d.merge(_0x39747a.prototype, _0x45509e);
              }
              _0x39747a.$type = _0x39747a.prototype.$type = this;
              _0x1aa57d.merge(_0x39747a, _0x339b80, true);
              this._ctor = _0x39747a;
              for (var _0x233d6a = 0x0; _0x233d6a < this.fieldsArray.length; ++_0x233d6a) {
                this._fieldsArray[_0x233d6a].resolve();
              }
              var _0x311fe8 = {};
              for (_0x233d6a = 0x0; _0x233d6a < this.oneofsArray.length; ++_0x233d6a) {
                _0x311fe8[this._oneofsArray[_0x233d6a].resolve().name] = {
                  'get': _0x1aa57d.oneOfGetter(this._oneofsArray[_0x233d6a].oneof),
                  'set': _0x1aa57d.oneOfSetter(this._oneofsArray[_0x233d6a].oneof)
                };
              }
              if (_0x233d6a) {
                Object.defineProperties(_0x39747a.prototype, _0x311fe8);
              }
            }
          }
        });
        _0x49f13e.generateConstructor = function (_0x37840e) {
          var _0x51a7f6;
          var _0x5df87b = _0x1aa57d.codegen(['p'], _0x37840e.name);
          for (var _0x153d5a = 0x0; _0x153d5a < _0x37840e.fieldsArray.length; ++_0x153d5a) {
            if ((_0x51a7f6 = _0x37840e._fieldsArray[_0x153d5a]).map) {
              _0x5df87b('this%s={}', _0x1aa57d.safeProp(_0x51a7f6.name));
            } else if (_0x51a7f6.repeated) {
              _0x5df87b('this%s=[]', _0x1aa57d.safeProp(_0x51a7f6.name));
            }
          }
          return _0x5df87b("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0x49f13e.fromJSON = function (_0x335f27, _0x5821b9) {
          var _0x3ade22 = new _0x49f13e(_0x335f27, _0x5821b9.options);
          _0x3ade22.extensions = _0x5821b9.extensions;
          _0x3ade22.reserved = _0x5821b9.reserved;
          var _0x2912ef = Object.keys(_0x5821b9.fields);
          for (var _0x5929d3 = 0x0; _0x5929d3 < _0x2912ef.length; ++_0x5929d3) {
            _0x3ade22.add((undefined !== _0x5821b9.fields[_0x2912ef[_0x5929d3]].keyType ? _0x246c1f.fromJSON : _0x1d6c8b.fromJSON)(_0x2912ef[_0x5929d3], _0x5821b9.fields[_0x2912ef[_0x5929d3]]));
          }
          if (_0x5821b9.oneofs) {
            _0x2912ef = Object.keys(_0x5821b9.oneofs);
            for (_0x5929d3 = 0x0; _0x5929d3 < _0x2912ef.length; ++_0x5929d3) {
              _0x3ade22.add(_0x27dbac.fromJSON(_0x2912ef[_0x5929d3], _0x5821b9.oneofs[_0x2912ef[_0x5929d3]]));
            }
          }
          if (_0x5821b9.nested) {
            _0x2912ef = Object.keys(_0x5821b9.nested);
            for (_0x5929d3 = 0x0; _0x5929d3 < _0x2912ef.length; ++_0x5929d3) {
              var _0x2403d8 = _0x5821b9.nested[_0x2912ef[_0x5929d3]];
              _0x3ade22.add((undefined !== _0x2403d8.id ? _0x1d6c8b.fromJSON : undefined !== _0x2403d8.fields ? _0x49f13e.fromJSON : undefined !== _0x2403d8.values ? _0x52b3ac.fromJSON : undefined !== _0x2403d8.methods ? _0x3dd5b4.fromJSON : _0x53fe7c.fromJSON)(_0x2912ef[_0x5929d3], _0x2403d8));
            }
          }
          if (_0x5821b9.extensions && _0x5821b9.extensions.length) {
            _0x3ade22.extensions = _0x5821b9.extensions;
          }
          if (_0x5821b9.reserved && _0x5821b9.reserved.length) {
            _0x3ade22.reserved = _0x5821b9.reserved;
          }
          if (_0x5821b9.group) {
            _0x3ade22.group = true;
          }
          if (_0x5821b9.comment) {
            _0x3ade22.comment = _0x5821b9.comment;
          }
          return _0x3ade22;
        };
        _0x49f13e.prototype.toJSON = function (_0x374aa4) {
          var _0x591c86 = _0x53fe7c.prototype.toJSON.call(this, _0x374aa4);
          var _0x16ad2c = !!_0x374aa4 && Boolean(_0x374aa4.keepComments);
          return _0x1aa57d.toObject(["options", _0x591c86 && _0x591c86.options || undefined, "oneofs", _0x53fe7c.arrayToJSON(this.oneofsArray, _0x374aa4), 'fields', _0x53fe7c.arrayToJSON(this.fieldsArray.filter(function (_0x11e3bd) {
            return !_0x11e3bd.declaringField;
          }), _0x374aa4) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, 'group', this.group || undefined, "nested", _0x591c86 && _0x591c86.nested || undefined, "comment", _0x16ad2c ? this.comment : undefined]);
        };
        _0x49f13e.prototype.resolveAll = function () {
          var _0xe5d60e = this.fieldsArray;
          for (var _0x1621db = 0x0; _0x1621db < _0xe5d60e.length;) {
            _0xe5d60e[_0x1621db++].resolve();
          }
          var _0x5744c7 = this.oneofsArray;
          for (_0x1621db = 0x0; _0x1621db < _0x5744c7.length;) {
            _0x5744c7[_0x1621db++].resolve();
          }
          return _0x53fe7c.prototype.resolveAll.call(this);
        };
        _0x49f13e.prototype.get = function (_0x456f5f) {
          return this.fields[_0x456f5f] || this.oneofs && this.oneofs[_0x456f5f] || this.nested && this.nested[_0x456f5f] || null;
        };
        _0x49f13e.prototype.add = function (_0x31ebeb) {
          if (this.get(_0x31ebeb.name)) {
            throw Error("duplicate name '" + _0x31ebeb.name + "' in " + this);
          }
          if (_0x31ebeb instanceof _0x1d6c8b && undefined === _0x31ebeb.extend) {
            if (this._fieldsById ? this._fieldsById[_0x31ebeb.id] : this.fieldsById[_0x31ebeb.id]) {
              throw Error("duplicate id " + _0x31ebeb.id + " in " + this);
            }
            if (this.isReservedId(_0x31ebeb.id)) {
              throw Error("id " + _0x31ebeb.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x31ebeb.name)) {
              throw Error("name '" + _0x31ebeb.name + "' is reserved in " + this);
            }
            if (_0x31ebeb.parent) {
              _0x31ebeb.parent.remove(_0x31ebeb);
            }
            this.fields[_0x31ebeb.name] = _0x31ebeb;
            _0x31ebeb.message = this;
            _0x31ebeb.onAdd(this);
            return _0x24a664(this);
          }
          return _0x31ebeb instanceof _0x27dbac ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x31ebeb.name] = _0x31ebeb, _0x31ebeb.onAdd(this), _0x24a664(this)) : _0x53fe7c.prototype.add.call(this, _0x31ebeb);
        };
        _0x49f13e.prototype.remove = function (_0x54ed61) {
          if (_0x54ed61 instanceof _0x1d6c8b && undefined === _0x54ed61.extend) {
            if (!this.fields || this.fields[_0x54ed61.name] !== _0x54ed61) {
              throw Error(_0x54ed61 + " is not a member of " + this);
            }
            delete this.fields[_0x54ed61.name];
            _0x54ed61.parent = null;
            _0x54ed61.onRemove(this);
            return _0x24a664(this);
          }
          if (_0x54ed61 instanceof _0x27dbac) {
            if (!this.oneofs || this.oneofs[_0x54ed61.name] !== _0x54ed61) {
              throw Error(_0x54ed61 + " is not a member of " + this);
            }
            delete this.oneofs[_0x54ed61.name];
            _0x54ed61.parent = null;
            _0x54ed61.onRemove(this);
            return _0x24a664(this);
          }
          return _0x53fe7c.prototype.remove.call(this, _0x54ed61);
        };
        _0x49f13e.prototype.isReservedId = function (_0x44d2ca) {
          return _0x53fe7c.isReservedId(this.reserved, _0x44d2ca);
        };
        _0x49f13e.prototype.isReservedName = function (_0x1d9a98) {
          return _0x53fe7c.isReservedName(this.reserved, _0x1d9a98);
        };
        _0x49f13e.prototype.create = function (_0x21b834) {
          return new this.ctor(_0x21b834);
        };
        _0x49f13e.prototype.setup = function () {
          var _0x2b751e = this.fullName;
          var _0x816653 = [];
          for (var _0x1482ec = 0x0; _0x1482ec < this.fieldsArray.length; ++_0x1482ec) {
            _0x816653.push(this._fieldsArray[_0x1482ec].resolve().resolvedType);
          }
          this.encode = _0x21247b(this)({
            'Writer': _0x3ef6b1,
            'types': _0x816653,
            'util': _0x1aa57d
          });
          this.decode = _0x349aab(this)({
            'Reader': _0x34c240,
            'types': _0x816653,
            'util': _0x1aa57d
          });
          this.verify = _0x4f318f(this)({
            'types': _0x816653,
            'util': _0x1aa57d
          });
          this.fromObject = _0x9173ba.fromObject(this)({
            'types': _0x816653,
            'util': _0x1aa57d
          });
          this.toObject = _0x9173ba.toObject(this)({
            'types': _0x816653,
            'util': _0x1aa57d
          });
          var _0x5cb14b = _0x389aa4[_0x2b751e];
          if (_0x5cb14b) {
            var _0x4684e0 = Object.create(this);
            _0x4684e0.fromObject = this.fromObject;
            this.fromObject = _0x5cb14b.fromObject.bind(_0x4684e0);
            _0x4684e0.toObject = this.toObject;
            this.toObject = _0x5cb14b.toObject.bind(_0x4684e0);
          }
          return this;
        };
        _0x49f13e.prototype.encode = function (_0x3304c8, _0x417f74) {
          return this.setup().encode(_0x3304c8, _0x417f74);
        };
        _0x49f13e.prototype.encodeDelimited = function (_0x2cabdb, _0x2d36de) {
          return this.encode(_0x2cabdb, _0x2d36de && _0x2d36de.len ? _0x2d36de.fork() : _0x2d36de).ldelim();
        };
        _0x49f13e.prototype.decode = function (_0x1e99da, _0x327c71) {
          return this.setup().decode(_0x1e99da, _0x327c71);
        };
        _0x49f13e.prototype.decodeDelimited = function (_0x36ee07) {
          if (!(_0x36ee07 instanceof _0x34c240)) {
            _0x36ee07 = _0x34c240.create(_0x36ee07);
          }
          return this.decode(_0x36ee07, _0x36ee07.uint32());
        };
        _0x49f13e.prototype.verify = function (_0x179402) {
          return this.setup().verify(_0x179402);
        };
        _0x49f13e.prototype.fromObject = function (_0xba24da) {
          return this.setup().fromObject(_0xba24da);
        };
        _0x49f13e.prototype.toObject = function (_0x3df25c, _0x3caa30) {
          return this.setup().toObject(_0x3df25c, _0x3caa30);
        };
        _0x49f13e.d = function (_0x2b5ad8) {
          return function (_0x1c5a46) {
            _0x1aa57d.decorateType(_0x1c5a46, _0x2b5ad8);
          };
        };
        _0x14e3f0.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './enum': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './oneof': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './reader': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/reader.js",
          './writer': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/writer.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js",
          './encoder': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/converter.js',
          './wrappers': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js'
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/root.js", function (_0x1350ff, _0xf2e6b9, _0x4b6bcc, _0x2a7dff, _0x46a34e) {
        _0x4b6bcc.exports = _0x1b26de;
        var _0x520b77 = _0xf2e6b9("./namespace");
        ((_0x1b26de.prototype = Object.create(_0x520b77.prototype)).constructor = _0x1b26de).className = "Root";
        var _0x4f9242;
        var _0x39d8a7;
        var _0x8cd091;
        var _0xd99151 = _0xf2e6b9("./field");
        var _0x136772 = _0xf2e6b9("./enum");
        var _0x567161 = _0xf2e6b9("./oneof");
        var _0x227b53 = _0xf2e6b9("./util");
        function _0x1b26de(_0x2ba813) {
          _0x520b77.call(this, '', _0x2ba813);
          this.deferred = [];
          this.files = [];
        }
        function _0x2f9cb3() {}
        _0x1b26de.fromJSON = function (_0x26238b, _0x4d1313) {
          if (!_0x4d1313) {
            _0x4d1313 = new _0x1b26de();
          }
          if (_0x26238b.options) {
            _0x4d1313.setOptions(_0x26238b.options);
          }
          return _0x4d1313.addJSON(_0x26238b.nested);
        };
        _0x1b26de.prototype.resolvePath = _0x227b53.path.resolve;
        _0x1b26de.prototype.fetch = _0x227b53.fetch;
        _0x1b26de.prototype.load = function _0x15f8f4(_0xe4c6dd, _0x36428e, _0x5211b2) {
          if ("function" == typeof _0x36428e) {
            _0x5211b2 = _0x36428e;
            _0x36428e = undefined;
          }
          var _0x5e51d3 = this;
          if (!_0x5211b2) {
            return _0x227b53.asPromise(_0x15f8f4, _0x5e51d3, _0xe4c6dd, _0x36428e);
          }
          var _0x4da045 = _0x5211b2 === _0x2f9cb3;
          function _0x4e6d66(_0x3f7898, _0x509376) {
            if (_0x5211b2) {
              var _0x20c612 = _0x5211b2;
              _0x5211b2 = null;
              if (_0x4da045) {
                throw _0x3f7898;
              }
              _0x20c612(_0x3f7898, _0x509376);
            }
          }
          function _0x34f529(_0x3977ea) {
            var _0x336158 = _0x3977ea.lastIndexOf("google/protobuf/");
            if (_0x336158 > -0x1) {
              var _0x227be1 = _0x3977ea.substring(_0x336158);
              if (_0x227be1 in _0x8cd091) {
                return _0x227be1;
              }
            }
            return null;
          }
          function _0x1eb7c2(_0x2d1682, _0x54152e) {
            try {
              if (_0x227b53.isString(_0x54152e) && '{' === _0x54152e.charAt(0x0)) {
                _0x54152e = JSON.parse(_0x54152e);
              }
              if (_0x227b53.isString(_0x54152e)) {
                _0x39d8a7.filename = _0x2d1682;
                var _0x1bb398;
                var _0x4b7486 = _0x39d8a7(_0x54152e, _0x5e51d3, _0x36428e);
                var _0x46a04d = 0x0;
                if (_0x4b7486.imports) {
                  for (; _0x46a04d < _0x4b7486.imports.length; ++_0x46a04d) {
                    if (_0x1bb398 = _0x34f529(_0x4b7486.imports[_0x46a04d]) || _0x5e51d3.resolvePath(_0x2d1682, _0x4b7486.imports[_0x46a04d])) {
                      _0x74f81e(_0x1bb398);
                    }
                  }
                }
                if (_0x4b7486.weakImports) {
                  for (_0x46a04d = 0x0; _0x46a04d < _0x4b7486.weakImports.length; ++_0x46a04d) {
                    if (_0x1bb398 = _0x34f529(_0x4b7486.weakImports[_0x46a04d]) || _0x5e51d3.resolvePath(_0x2d1682, _0x4b7486.weakImports[_0x46a04d])) {
                      _0x74f81e(_0x1bb398, true);
                    }
                  }
                }
              } else {
                _0x5e51d3.setOptions(_0x54152e.options).addJSON(_0x54152e.nested);
              }
            } catch (_0x32dbc3) {
              _0x4e6d66(_0x32dbc3);
            }
            if (!(_0x4da045 || _0x58c63b)) {
              _0x4e6d66(null, _0x5e51d3);
            }
          }
          function _0x74f81e(_0x1d980d, _0x32481f) {
            if (!(_0x5e51d3.files.indexOf(_0x1d980d) > -0x1)) {
              _0x5e51d3.files.push(_0x1d980d);
              if (_0x1d980d in _0x8cd091) {
                if (_0x4da045) {
                  _0x1eb7c2(_0x1d980d, _0x8cd091[_0x1d980d]);
                } else {
                  ++_0x58c63b;
                  setTimeout(function () {
                    --_0x58c63b;
                    _0x1eb7c2(_0x1d980d, _0x8cd091[_0x1d980d]);
                  });
                }
              } else {
                if (_0x4da045) {
                  var _0xbe438f;
                  try {
                    _0xbe438f = _0x227b53.fs.readFileSync(_0x1d980d).toString('utf8');
                  } catch (_0x1611be) {
                    return void (_0x32481f || _0x4e6d66(_0x1611be));
                  }
                  _0x1eb7c2(_0x1d980d, _0xbe438f);
                } else {
                  ++_0x58c63b;
                  _0x5e51d3.fetch(_0x1d980d, function (_0x47d43f, _0xaf2293) {
                    --_0x58c63b;
                    if (_0x5211b2) {
                      if (_0x47d43f) {
                        if (_0x32481f) {
                          if (!_0x58c63b) {
                            _0x4e6d66(null, _0x5e51d3);
                          }
                        } else {
                          _0x4e6d66(_0x47d43f);
                        }
                      } else {
                        _0x1eb7c2(_0x1d980d, _0xaf2293);
                      }
                    }
                  });
                }
              }
            }
          }
          var _0x58c63b = 0x0;
          if (_0x227b53.isString(_0xe4c6dd)) {
            _0xe4c6dd = [_0xe4c6dd];
          }
          var _0x2d12c0;
          for (var _0x1e4ddb = 0x0; _0x1e4ddb < _0xe4c6dd.length; ++_0x1e4ddb) {
            if (_0x2d12c0 = _0x5e51d3.resolvePath('', _0xe4c6dd[_0x1e4ddb])) {
              _0x74f81e(_0x2d12c0);
            }
          }
          if (_0x4da045) {
            return _0x5e51d3;
          }
          if (!_0x58c63b) {
            _0x4e6d66(null, _0x5e51d3);
          }
        };
        _0x1b26de.prototype.loadSync = function (_0x5412ba, _0x48bf60) {
          if (!_0x227b53.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x5412ba, _0x48bf60, _0x2f9cb3);
        };
        _0x1b26de.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0xccf93f) {
              return "'extend " + _0xccf93f.extend + "' in " + _0xccf93f.parent.fullName;
            }).join(", "));
          }
          return _0x520b77.prototype.resolveAll.call(this);
        };
        var _0x4b7b60 = /^[A-Z]/;
        function _0x3dfac1(_0x1886a7, _0x13d112) {
          var _0x1ee772 = _0x13d112.parent.lookup(_0x13d112.extend);
          if (_0x1ee772) {
            var _0x2743b3 = new _0xd99151(_0x13d112.fullName, _0x13d112.id, _0x13d112.type, _0x13d112.rule, undefined, _0x13d112.options);
            _0x2743b3.declaringField = _0x13d112;
            _0x13d112.extensionField = _0x2743b3;
            _0x1ee772.add(_0x2743b3);
            return true;
          }
          return false;
        }
        _0x1b26de.prototype._handleAdd = function (_0x1d01a0) {
          if (_0x1d01a0 instanceof _0xd99151) {
            if (!(undefined === _0x1d01a0.extend || _0x1d01a0.extensionField || _0x3dfac1(0x0, _0x1d01a0))) {
              this.deferred.push(_0x1d01a0);
            }
          } else {
            if (_0x1d01a0 instanceof _0x136772) {
              if (_0x4b7b60.test(_0x1d01a0.name)) {
                _0x1d01a0.parent[_0x1d01a0.name] = _0x1d01a0.values;
              }
            } else {
              if (!(_0x1d01a0 instanceof _0x567161)) {
                if (_0x1d01a0 instanceof _0x4f9242) {
                  for (var _0x3dee65 = 0x0; _0x3dee65 < this.deferred.length;) {
                    if (_0x3dfac1(0x0, this.deferred[_0x3dee65])) {
                      this.deferred.splice(_0x3dee65, 0x1);
                    } else {
                      ++_0x3dee65;
                    }
                  }
                }
                for (var _0x2c2f51 = 0x0; _0x2c2f51 < _0x1d01a0.nestedArray.length; ++_0x2c2f51) {
                  this._handleAdd(_0x1d01a0._nestedArray[_0x2c2f51]);
                }
                if (_0x4b7b60.test(_0x1d01a0.name)) {
                  _0x1d01a0.parent[_0x1d01a0.name] = _0x1d01a0;
                }
              }
            }
          }
        };
        _0x1b26de.prototype._handleRemove = function (_0x356427) {
          if (_0x356427 instanceof _0xd99151) {
            if (undefined !== _0x356427.extend) {
              if (_0x356427.extensionField) {
                _0x356427.extensionField.parent.remove(_0x356427.extensionField);
                _0x356427.extensionField = null;
              } else {
                var _0x5546bd = this.deferred.indexOf(_0x356427);
                if (_0x5546bd > -0x1) {
                  this.deferred.splice(_0x5546bd, 0x1);
                }
              }
            }
          } else {
            if (_0x356427 instanceof _0x136772) {
              if (_0x4b7b60.test(_0x356427.name)) {
                delete _0x356427.parent[_0x356427.name];
              }
            } else {
              if (_0x356427 instanceof _0x520b77) {
                for (var _0x1080a9 = 0x0; _0x1080a9 < _0x356427.nestedArray.length; ++_0x1080a9) {
                  this._handleRemove(_0x356427._nestedArray[_0x1080a9]);
                }
                if (_0x4b7b60.test(_0x356427.name)) {
                  delete _0x356427.parent[_0x356427.name];
                }
              }
            }
          }
        };
        _0x1b26de._configure = function (_0x1ed6ca, _0x1b14f0, _0x3f30e2) {
          _0x4f9242 = _0x1ed6ca;
          _0x39d8a7 = _0x1b14f0;
          _0x8cd091 = _0x3f30e2;
        };
        _0x4b6bcc.exports;
      }, function () {
        return {
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './enum': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './oneof': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js", function (_0x2fa757, _0x1f6600, _0x4f8588, _0x64bb81, _0x165cb6) {
        var _0x503fe7;
        var _0x92548b;
        var _0x42c7c1 = _0x4f8588.exports = _0x1f6600('./util/minimal');
        var _0x88ad1f = _0x1f6600("./roots");
        _0x42c7c1.codegen = _0x1f6600("@protobufjs/codegen");
        _0x42c7c1.fetch = _0x1f6600('@protobufjs/fetch');
        _0x42c7c1.path = _0x1f6600('@protobufjs/path');
        _0x42c7c1.fs = _0x42c7c1.inquire('fs');
        _0x42c7c1.toArray = function (_0x510997) {
          if (_0x510997) {
            var _0x91e16b = Object.keys(_0x510997);
            var _0x590132 = new Array(_0x91e16b.length);
            for (var _0x3fdb65 = 0x0; _0x3fdb65 < _0x91e16b.length;) {
              _0x590132[_0x3fdb65] = _0x510997[_0x91e16b[_0x3fdb65++]];
            }
            return _0x590132;
          }
          return [];
        };
        _0x42c7c1.toObject = function (_0x13ebeb) {
          var _0x4eb6d2 = {};
          for (var _0x2a1210 = 0x0; _0x2a1210 < _0x13ebeb.length;) {
            var _0x25c0ab = _0x13ebeb[_0x2a1210++];
            var _0x3bfb1f = _0x13ebeb[_0x2a1210++];
            if (undefined !== _0x3bfb1f) {
              _0x4eb6d2[_0x25c0ab] = _0x3bfb1f;
            }
          }
          return _0x4eb6d2;
        };
        var _0x2dd2be = /\\/g;
        var _0x33ef4a = /"/g;
        _0x42c7c1.isReserved = function (_0x438dfa) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x438dfa);
        };
        _0x42c7c1.safeProp = function (_0x1a907f) {
          return !/^[$\w_]+$/.test(_0x1a907f) || _0x42c7c1.isReserved(_0x1a907f) ? "[\"" + _0x1a907f.replace(_0x2dd2be, "\\\\").replace(_0x33ef4a, "\\\"") + "\"]" : '.' + _0x1a907f;
        };
        _0x42c7c1.ucFirst = function (_0x380c39) {
          return _0x380c39.charAt(0x0).toUpperCase() + _0x380c39.substring(0x1);
        };
        var _0x100c17 = /_([a-z])/g;
        _0x42c7c1.camelCase = function (_0x407215) {
          return _0x407215.substring(0x0, 0x1) + _0x407215.substring(0x1).replace(_0x100c17, function (_0x3a5e5b, _0x3c0e9f) {
            return _0x3c0e9f.toUpperCase();
          });
        };
        _0x42c7c1.compareFieldsById = function (_0x1f286e, _0x36f00f) {
          return _0x1f286e.id - _0x36f00f.id;
        };
        _0x42c7c1.decorateType = function (_0x11e3fc, _0x846385) {
          if (_0x11e3fc.$type) {
            if (_0x846385 && _0x11e3fc.$type.name !== _0x846385) {
              _0x42c7c1.decorateRoot.remove(_0x11e3fc.$type);
              _0x11e3fc.$type.name = _0x846385;
              _0x42c7c1.decorateRoot.add(_0x11e3fc.$type);
            }
            return _0x11e3fc.$type;
          }
          if (!_0x503fe7) {
            _0x503fe7 = _0x1f6600("./type");
          }
          var _0xd62735 = new _0x503fe7(_0x846385 || _0x11e3fc.name);
          _0x42c7c1.decorateRoot.add(_0xd62735);
          _0xd62735.ctor = _0x11e3fc;
          Object.defineProperty(_0x11e3fc, '$type', {
            'value': _0xd62735,
            'enumerable': false
          });
          Object.defineProperty(_0x11e3fc.prototype, "$type", {
            'value': _0xd62735,
            'enumerable': false
          });
          return _0xd62735;
        };
        var _0x3d6abc = 0x0;
        _0x42c7c1.decorateEnum = function (_0x26449b) {
          if (_0x26449b.$type) {
            return _0x26449b.$type;
          }
          if (!_0x92548b) {
            _0x92548b = _0x1f6600("./enum");
          }
          var _0x487ec1 = new _0x92548b('Enum' + _0x3d6abc++, _0x26449b);
          _0x42c7c1.decorateRoot.add(_0x487ec1);
          Object.defineProperty(_0x26449b, "$type", {
            'value': _0x487ec1,
            'enumerable': false
          });
          return _0x487ec1;
        };
        _0x42c7c1.setProperty = function (_0x1a0186, _0x8f54b9, _0x5bd162) {
          if ('object' != typeof _0x1a0186) {
            throw TypeError("dst must be an object");
          }
          if (!_0x8f54b9) {
            throw TypeError("path must be specified");
          }
          return function _0x3504b5(_0x340b11, _0x5c4ab0, _0x482e19) {
            var _0x827d7d = _0x5c4ab0.shift();
            if (_0x5c4ab0.length > 0x0) {
              _0x340b11[_0x827d7d] = _0x3504b5(_0x340b11[_0x827d7d] || {}, _0x5c4ab0, _0x482e19);
            } else {
              var _0x5951de = _0x340b11[_0x827d7d];
              if (_0x5951de) {
                _0x482e19 = [].concat(_0x5951de).concat(_0x482e19);
              }
              _0x340b11[_0x827d7d] = _0x482e19;
            }
            return _0x340b11;
          }(_0x1a0186, _0x8f54b9 = _0x8f54b9.split('.'), _0x5bd162);
        };
        Object.defineProperty(_0x42c7c1, "decorateRoot", {
          'get': function () {
            return _0x88ad1f.decorated || (_0x88ad1f.decorated = new (_0x1f6600("./root"))());
          }
        });
        _0x4f8588.exports;
      }, function () {
        return {
          './util/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js",
          './roots': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/roots.js",
          '@protobufjs/codegen': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js",
          '@protobufjs/fetch': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js",
          '@protobufjs/path': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/@protobufjs/path/index.js",
          './type': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './enum': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/root.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/object.js", function (_0x3cb737, _0x499a4c, _0x5b2693, _0x5c8559, _0x93c7d1) {
        _0x5b2693.exports = _0x56df04;
        _0x56df04.className = "ReflectionObject";
        var _0x4a1803;
        var _0x53bf3e = _0x499a4c("./util");
        function _0x56df04(_0xc0be72, _0x243af1) {
          if (!_0x53bf3e.isString(_0xc0be72)) {
            throw TypeError("name must be a string");
          }
          if (_0x243af1 && !_0x53bf3e.isObject(_0x243af1)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x243af1;
          this.parsedOptions = null;
          this.name = _0xc0be72;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0x56df04.prototype, {
          'root': {
            'get': function () {
              for (var _0x269c92 = this; null !== _0x269c92.parent;) {
                _0x269c92 = _0x269c92.parent;
              }
              return _0x269c92;
            }
          },
          'fullName': {
            'get': function () {
              var _0x3b01da = [this.name];
              for (var _0x33a030 = this.parent; _0x33a030;) {
                _0x3b01da.unshift(_0x33a030.name);
                _0x33a030 = _0x33a030.parent;
              }
              return _0x3b01da.join('.');
            }
          }
        });
        _0x56df04.prototype.toJSON = function () {
          throw Error();
        };
        _0x56df04.prototype.onAdd = function (_0x375a35) {
          if (this.parent && this.parent !== _0x375a35) {
            this.parent.remove(this);
          }
          this.parent = _0x375a35;
          this.resolved = false;
          var _0x37ec99 = _0x375a35.root;
          if (_0x37ec99 instanceof _0x4a1803) {
            _0x37ec99._handleAdd(this);
          }
        };
        _0x56df04.prototype.onRemove = function (_0xcf567b) {
          var _0x82a049 = _0xcf567b.root;
          if (_0x82a049 instanceof _0x4a1803) {
            _0x82a049._handleRemove(this);
          }
          this.parent = null;
          this.resolved = false;
        };
        _0x56df04.prototype.resolve = function () {
          if (!this.resolved) {
            if (this.root instanceof _0x4a1803) {
              this.resolved = true;
            }
          }
          return this;
        };
        _0x56df04.prototype.getOption = function (_0x131967) {
          if (this.options) {
            return this.options[_0x131967];
          }
        };
        _0x56df04.prototype.setOption = function (_0x1683aa, _0x1bcc4e, _0x38a689) {
          if (!(_0x38a689 && this.options && undefined !== this.options[_0x1683aa])) {
            (this.options || (this.options = {}))[_0x1683aa] = _0x1bcc4e;
          }
          return this;
        };
        _0x56df04.prototype.setParsedOption = function (_0x4aabe1, _0x353268, _0x14493b) {
          if (!this.parsedOptions) {
            this.parsedOptions = [];
          }
          var _0x2d0a06 = this.parsedOptions;
          if (_0x14493b) {
            var _0x38e654 = _0x2d0a06.find(function (_0x3d47c9) {
              return Object.prototype.hasOwnProperty.call(_0x3d47c9, _0x4aabe1);
            });
            if (_0x38e654) {
              var _0x5ea0e0 = _0x38e654[_0x4aabe1];
              _0x53bf3e.setProperty(_0x5ea0e0, _0x14493b, _0x353268);
            } else {
              (_0x38e654 = {})[_0x4aabe1] = _0x53bf3e.setProperty({}, _0x14493b, _0x353268);
              _0x2d0a06.push(_0x38e654);
            }
          } else {
            var _0x2284ad = {
              _0x4aabe1: _0x353268
            };
            _0x2d0a06.push(_0x2284ad);
          }
          return this;
        };
        _0x56df04.prototype.setOptions = function (_0x3cff08, _0x2cad27) {
          if (_0x3cff08) {
            var _0x6ea34 = Object.keys(_0x3cff08);
            for (var _0x500e7d = 0x0; _0x500e7d < _0x6ea34.length; ++_0x500e7d) {
              this.setOption(_0x6ea34[_0x500e7d], _0x3cff08[_0x6ea34[_0x500e7d]], _0x2cad27);
            }
          }
          return this;
        };
        _0x56df04.prototype.toString = function () {
          var _0x1309f8 = this.constructor.className;
          var _0x374401 = this.fullName;
          return _0x374401.length ? _0x1309f8 + " " + _0x374401 : _0x1309f8;
        };
        _0x56df04._configure = function (_0x457599) {
          _0x4a1803 = _0x457599;
        };
        _0x5b2693.exports;
      }, function () {
        return {
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define('file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/enum.js', function (_0x270e9c, _0x42ced2, _0x32dda7, _0x5bfcc3, _0x3e6efc) {
        _0x32dda7.exports = _0x2a132e;
        var _0x1c84d3 = _0x42ced2("./object");
        ((_0x2a132e.prototype = Object.create(_0x1c84d3.prototype)).constructor = _0x2a132e).className = "Enum";
        var _0x5144c9 = _0x42ced2("./namespace");
        var _0x37a19a = _0x42ced2("./util");
        function _0x2a132e(_0xf3698a, _0x26956b, _0x5133c7, _0x1a5304, _0x563f7f) {
          _0x1c84d3.call(this, _0xf3698a, _0x5133c7);
          if (_0x26956b && 'object' != typeof _0x26956b) {
            throw TypeError("values must be an object");
          }
          this.valuesById = {};
          this.values = Object.create(this.valuesById);
          this.comment = _0x1a5304;
          this.comments = _0x563f7f || {};
          this.reserved = undefined;
          if (_0x26956b) {
            var _0x3c3d34 = Object.keys(_0x26956b);
            for (var _0xc728be = 0x0; _0xc728be < _0x3c3d34.length; ++_0xc728be) {
              if ('number' == typeof _0x26956b[_0x3c3d34[_0xc728be]]) {
                this.valuesById[this.values[_0x3c3d34[_0xc728be]] = _0x26956b[_0x3c3d34[_0xc728be]]] = _0x3c3d34[_0xc728be];
              }
            }
          }
        }
        _0x2a132e.fromJSON = function (_0x349e6e, _0x6a5de6) {
          var _0xa87817 = new _0x2a132e(_0x349e6e, _0x6a5de6.values, _0x6a5de6.options, _0x6a5de6.comment, _0x6a5de6.comments);
          _0xa87817.reserved = _0x6a5de6.reserved;
          return _0xa87817;
        };
        _0x2a132e.prototype.toJSON = function (_0x481693) {
          var _0x5ecb37 = !!_0x481693 && Boolean(_0x481693.keepComments);
          return _0x37a19a.toObject(["options", this.options, "values", this.values, 'reserved', this.reserved && this.reserved.length ? this.reserved : undefined, 'comment', _0x5ecb37 ? this.comment : undefined, "comments", _0x5ecb37 ? this.comments : undefined]);
        };
        _0x2a132e.prototype.add = function (_0x2e0cf5, _0x6f8031, _0x5a7562) {
          if (!_0x37a19a.isString(_0x2e0cf5)) {
            throw TypeError("name must be a string");
          }
          if (!_0x37a19a.isInteger(_0x6f8031)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x2e0cf5]) {
            throw Error("duplicate name '" + _0x2e0cf5 + "' in " + this);
          }
          if (this.isReservedId(_0x6f8031)) {
            throw Error("id " + _0x6f8031 + " is reserved in " + this);
          }
          if (this.isReservedName(_0x2e0cf5)) {
            throw Error("name '" + _0x2e0cf5 + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x6f8031]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x6f8031 + " in " + this);
            }
            this.values[_0x2e0cf5] = _0x6f8031;
          } else {
            this.valuesById[this.values[_0x2e0cf5] = _0x6f8031] = _0x2e0cf5;
          }
          this.comments[_0x2e0cf5] = _0x5a7562 || null;
          return this;
        };
        _0x2a132e.prototype.remove = function (_0x37da95) {
          if (!_0x37a19a.isString(_0x37da95)) {
            throw TypeError("name must be a string");
          }
          var _0x26f87c = this.values[_0x37da95];
          if (null == _0x26f87c) {
            throw Error("name '" + _0x37da95 + "' does not exist in " + this);
          }
          delete this.valuesById[_0x26f87c];
          delete this.values[_0x37da95];
          delete this.comments[_0x37da95];
          return this;
        };
        _0x2a132e.prototype.isReservedId = function (_0x496dab) {
          return _0x5144c9.isReservedId(this.reserved, _0x496dab);
        };
        _0x2a132e.prototype.isReservedName = function (_0x4b2b9d) {
          return _0x5144c9.isReservedName(this.reserved, _0x4b2b9d);
        };
        _0x32dda7.exports;
      }, function () {
        return {
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js", function (_0x5bb6e7, _0x27ab43, _0x41cf9b, _0x24c425, _0x3f7877) {
        _0x41cf9b.exports = function (_0x1613e) {
          var _0x4429a8;
          var _0x561cf6 = _0x34fe3d.codegen(['m', 'w'], _0x1613e.name + "$encode")('if(!w)')('w=Writer.create()');
          var _0x42691d = _0x1613e.fieldsArray.slice().sort(_0x34fe3d.compareFieldsById);
          for (var _0x3db28a = 0x0; _0x3db28a < _0x42691d.length; ++_0x3db28a) {
            var _0x569c6c = _0x42691d[_0x3db28a].resolve();
            var _0x252259 = _0x1613e._fieldsArray.indexOf(_0x569c6c);
            var _0x595be6 = _0x569c6c.resolvedType instanceof _0x510218 ? "int32" : _0x569c6c.type;
            var _0x2dbbfb = _0x3b854e.basic[_0x595be6];
            _0x4429a8 = 'm' + _0x34fe3d.safeProp(_0x569c6c.name);
            if (_0x569c6c.map) {
              _0x561cf6('if(%s!=null&&Object.hasOwnProperty.call(m,%j)){', _0x4429a8, _0x569c6c.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x4429a8)('w.uint32(%i).fork().uint32(%i).%s(ks[i])', (_0x569c6c.id << 0x3 | 0x2) >>> 0x0, 0x8 | _0x3b854e.mapKey[_0x569c6c.keyType], _0x569c6c.keyType);
              if (undefined === _0x2dbbfb) {
                _0x561cf6("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", _0x252259, _0x4429a8);
              } else {
                _0x561cf6(".uint32(%i).%s(%s[ks[i]]).ldelim()", 0x10 | _0x2dbbfb, _0x595be6, _0x4429a8);
              }
              _0x561cf6('}')('}');
            } else if (_0x569c6c.repeated) {
              _0x561cf6('if(%s!=null&&%s.length){', _0x4429a8, _0x4429a8);
              if (_0x569c6c.packed && undefined !== _0x3b854e.packed[_0x595be6]) {
                _0x561cf6("w.uint32(%i).fork()", (_0x569c6c.id << 0x3 | 0x2) >>> 0x0)("for(var i=0;i<%s.length;++i)", _0x4429a8)("w.%s(%s[i])", _0x595be6, _0x4429a8)("w.ldelim()");
              } else {
                _0x561cf6("for(var i=0;i<%s.length;++i)", _0x4429a8);
                if (undefined === _0x2dbbfb) {
                  if (_0x569c6c.resolvedType.group) {
                    _0x561cf6("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x252259, _0x4429a8 + "[i]", (_0x569c6c.id << 0x3 | 0x3) >>> 0x0, (_0x569c6c.id << 0x3 | 0x4) >>> 0x0);
                  } else {
                    _0x561cf6("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x252259, _0x4429a8 + "[i]", (_0x569c6c.id << 0x3 | 0x2) >>> 0x0);
                  }
                } else {
                  _0x561cf6("w.uint32(%i).%s(%s[i])", (_0x569c6c.id << 0x3 | _0x2dbbfb) >>> 0x0, _0x595be6, _0x4429a8);
                }
              }
              _0x561cf6('}');
            } else {
              if (_0x569c6c.optional) {
                _0x561cf6('if(%s!=null&&Object.hasOwnProperty.call(m,%j))', _0x4429a8, _0x569c6c.name);
              }
              if (undefined === _0x2dbbfb) {
                if (_0x569c6c.resolvedType.group) {
                  _0x561cf6("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x252259, _0x4429a8, (_0x569c6c.id << 0x3 | 0x3) >>> 0x0, (_0x569c6c.id << 0x3 | 0x4) >>> 0x0);
                } else {
                  _0x561cf6("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x252259, _0x4429a8, (_0x569c6c.id << 0x3 | 0x2) >>> 0x0);
                }
              } else {
                _0x561cf6("w.uint32(%i).%s(%s)", (_0x569c6c.id << 0x3 | _0x2dbbfb) >>> 0x0, _0x595be6, _0x4429a8);
              }
            }
          }
          return _0x561cf6("return w");
        };
        var _0x510218 = _0x27ab43("./enum");
        var _0x3b854e = _0x27ab43('./types');
        var _0x34fe3d = _0x27ab43('./util');
        _0x41cf9b.exports;
      }, function () {
        return {
          './enum': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js", function (_0x351543, _0x5e7660, _0x14161c, _0x3fd3b5, _0x2f7924) {
        var _0x54f451 = _0x14161c.exports = _0x5e7660("./index-minimal");
        _0x54f451.build = "light";
        _0x54f451.load = function (_0x33f66d, _0x37f076, _0x47e0b7) {
          if ('function' == typeof _0x37f076) {
            _0x47e0b7 = _0x37f076;
            _0x37f076 = new _0x54f451.Root();
          } else if (!_0x37f076) {
            _0x37f076 = new _0x54f451.Root();
          }
          return _0x37f076.load(_0x33f66d, _0x47e0b7);
        };
        _0x54f451.loadSync = function (_0x282210, _0x49f7f5) {
          if (!_0x49f7f5) {
            _0x49f7f5 = new _0x54f451.Root();
          }
          return _0x49f7f5.loadSync(_0x282210);
        };
        _0x54f451.encoder = _0x5e7660("./encoder");
        _0x54f451.decoder = _0x5e7660("./decoder");
        _0x54f451.verifier = _0x5e7660("./verifier");
        _0x54f451.converter = _0x5e7660("./converter");
        _0x54f451.ReflectionObject = _0x5e7660("./object");
        _0x54f451.Namespace = _0x5e7660('./namespace');
        _0x54f451.Root = _0x5e7660("./root");
        _0x54f451.Enum = _0x5e7660('./enum');
        _0x54f451.Type = _0x5e7660("./type");
        _0x54f451.Field = _0x5e7660("./field");
        _0x54f451.OneOf = _0x5e7660('./oneof');
        _0x54f451.MapField = _0x5e7660("./mapfield");
        _0x54f451.Service = _0x5e7660("./service");
        _0x54f451.Method = _0x5e7660("./method");
        _0x54f451.Message = _0x5e7660("./message");
        _0x54f451.wrappers = _0x5e7660("./wrappers");
        _0x54f451.types = _0x5e7660("./types");
        _0x54f451.util = _0x5e7660('./util');
        _0x54f451.ReflectionObject._configure(_0x54f451.Root);
        _0x54f451.Namespace._configure(_0x54f451.Type, _0x54f451.Service, _0x54f451.Enum);
        _0x54f451.Root._configure(_0x54f451.Type);
        _0x54f451.Field._configure(_0x54f451.Type);
        _0x14161c.exports;
      }, function () {
        return {
          './index-minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js",
          './encoder': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js",
          './decoder': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js",
          './verifier': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js",
          './converter': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/converter.js',
          './object': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/object.js",
          './namespace': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js",
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './enum': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './type': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './oneof': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './message': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/message.js",
          './wrappers': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js',
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js", function (_0xf05e8f, _0x3fbc3f, _0xff5c23, _0x2133c3, _0x116c68) {
        _0xff5c23.exports = _0x4f69d8;
        var _0x4a6b40 = /[\s{}=;:[\],'"()<>]/g;
        var _0x3eafbc = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x371194 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x1c7fb5 = /^ *[*/]+ */;
        var _0x4d2712 = /^\s*\*?\/*/;
        var _0x21ee06 = /\n/g;
        var _0x5551d1 = /\s/;
        var _0x25dd6a = /\\(.?)/g;
        var _0x8a6b4b = {
          0x0: "\0",
          'r': "\r",
          'n': "\n",
          't': "\t"
        };
        function _0x582819(_0x4ed4ed) {
          return _0x4ed4ed.replace(_0x25dd6a, function (_0x47c9ab, _0x2116e1) {
            switch (_0x2116e1) {
              case "\\":
              case '':
                return _0x2116e1;
              default:
                return _0x8a6b4b[_0x2116e1] || '';
            }
          });
        }
        function _0x4f69d8(_0x4263bb, _0x35f3bd) {
          _0x4263bb = _0x4263bb.toString();
          var _0x1d3c9d = 0x0;
          var _0x190ff5 = _0x4263bb.length;
          var _0x537a11 = 0x1;
          var _0x4f3abc = null;
          var _0x32d04f = null;
          var _0x8368c = 0x0;
          var _0x35a77d = false;
          var _0x95635a = false;
          var _0x3ec223 = [];
          var _0x3702f3 = null;
          function _0x42415d(_0x2af20a, _0x1514ce, _0x1de601) {
            _0x4f3abc = _0x4263bb.charAt(_0x2af20a++);
            _0x8368c = _0x537a11;
            _0x35a77d = false;
            _0x95635a = _0x1de601;
            var _0x4c31bd;
            var _0x417178 = _0x2af20a - (_0x35f3bd ? 0x2 : 0x3);
            do {
              if (--_0x417178 < 0x0 || "\n" === (_0x4c31bd = _0x4263bb.charAt(_0x417178))) {
                _0x35a77d = true;
                break;
              }
            } while (" " === _0x4c31bd || "\t" === _0x4c31bd);
            var _0x55a870 = _0x4263bb.substring(_0x2af20a, _0x1514ce).split(_0x21ee06);
            for (var _0x93206 = 0x0; _0x93206 < _0x55a870.length; ++_0x93206) {
              _0x55a870[_0x93206] = _0x55a870[_0x93206].replace(_0x35f3bd ? _0x4d2712 : _0x1c7fb5, '').trim();
            }
            _0x32d04f = _0x55a870.join("\n").trim();
          }
          function _0x396369(_0x4d2bb3) {
            var _0x21c4fa = _0x395da6(_0x4d2bb3);
            var _0x126dcb = _0x4263bb.substring(_0x4d2bb3, _0x21c4fa);
            return /^\s*\/{1,2}/.test(_0x126dcb);
          }
          function _0x395da6(_0x2493f5) {
            for (var _0x556647 = _0x2493f5; _0x556647 < _0x190ff5 && "\n" !== _0x4263bb.charAt(_0x556647);) {
              _0x556647++;
            }
            return _0x556647;
          }
          function _0x4745a9() {
            if (_0x3ec223.length > 0x0) {
              return _0x3ec223.shift();
            }
            if (_0x3702f3) {
              return function () {
                var _0x51cd23 = "'" === _0x3702f3 ? _0x371194 : _0x3eafbc;
                _0x51cd23.lastIndex = _0x1d3c9d - 0x1;
                var _0x189647 = _0x51cd23.exec(_0x4263bb);
                if (!_0x189647) {
                  throw Error("illegal string (line " + _0x537a11 + ')');
                }
                _0x1d3c9d = _0x51cd23.lastIndex;
                _0x6ee99a(_0x3702f3);
                _0x3702f3 = null;
                return _0x582819(_0x189647[0x1]);
              }();
            }
            var _0x126df5;
            var _0x4828cd;
            var _0x185b56;
            var _0x558b47;
            var _0xefdd28;
            var _0x4fef56 = 0x0 === _0x1d3c9d;
            do {
              if (_0x1d3c9d === _0x190ff5) {
                return null;
              }
              for (_0x126df5 = false; _0x5551d1.test(_0x185b56 = _0x4263bb.charAt(_0x1d3c9d));) {
                if ("\n" === _0x185b56) {
                  _0x4fef56 = true;
                  ++_0x537a11;
                }
                if (++_0x1d3c9d === _0x190ff5) {
                  return null;
                }
              }
              if ('/' === _0x4263bb.charAt(_0x1d3c9d)) {
                if (++_0x1d3c9d === _0x190ff5) {
                  throw Error("illegal comment (line " + _0x537a11 + ')');
                }
                if ('/' === _0x4263bb.charAt(_0x1d3c9d)) {
                  if (_0x35f3bd) {
                    _0x558b47 = _0x1d3c9d;
                    _0xefdd28 = false;
                    if (_0x396369(_0x1d3c9d)) {
                      _0xefdd28 = true;
                      do {
                        if ((_0x1d3c9d = _0x395da6(_0x1d3c9d)) === _0x190ff5) {
                          break;
                        }
                        _0x1d3c9d++;
                      } while (_0x396369(_0x1d3c9d));
                    } else {
                      _0x1d3c9d = Math.min(_0x190ff5, _0x395da6(_0x1d3c9d) + 0x1);
                    }
                    if (_0xefdd28) {
                      _0x42415d(_0x558b47, _0x1d3c9d, _0x4fef56);
                    }
                    _0x537a11++;
                    _0x126df5 = true;
                  } else {
                    for (_0xefdd28 = '/' === _0x4263bb.charAt(_0x558b47 = _0x1d3c9d + 0x1); "\n" !== _0x4263bb.charAt(++_0x1d3c9d);) {
                      if (_0x1d3c9d === _0x190ff5) {
                        return null;
                      }
                    }
                    ++_0x1d3c9d;
                    if (_0xefdd28) {
                      _0x42415d(_0x558b47, _0x1d3c9d - 0x1, _0x4fef56);
                    }
                    ++_0x537a11;
                    _0x126df5 = true;
                  }
                } else {
                  if ('*' !== (_0x185b56 = _0x4263bb.charAt(_0x1d3c9d))) {
                    return '/';
                  }
                  _0x558b47 = _0x1d3c9d + 0x1;
                  _0xefdd28 = _0x35f3bd || '*' === _0x4263bb.charAt(_0x558b47);
                  do {
                    if ("\n" === _0x185b56) {
                      ++_0x537a11;
                    }
                    if (++_0x1d3c9d === _0x190ff5) {
                      throw Error("illegal comment (line " + _0x537a11 + ')');
                    }
                    _0x4828cd = _0x185b56;
                    _0x185b56 = _0x4263bb.charAt(_0x1d3c9d);
                  } while ('*' !== _0x4828cd || '/' !== _0x185b56);
                  ++_0x1d3c9d;
                  if (_0xefdd28) {
                    _0x42415d(_0x558b47, _0x1d3c9d - 0x2, _0x4fef56);
                  }
                  _0x126df5 = true;
                }
              }
            } while (_0x126df5);
            var _0x200a05 = _0x1d3c9d;
            _0x4a6b40.lastIndex = 0x0;
            if (!_0x4a6b40.test(_0x4263bb.charAt(_0x200a05++))) {
              for (; _0x200a05 < _0x190ff5 && !_0x4a6b40.test(_0x4263bb.charAt(_0x200a05));) {
                ++_0x200a05;
              }
            }
            var _0x3f5302 = _0x4263bb.substring(_0x1d3c9d, _0x1d3c9d = _0x200a05);
            if (!("\"" !== _0x3f5302 && "'" !== _0x3f5302)) {
              _0x3702f3 = _0x3f5302;
            }
            return _0x3f5302;
          }
          function _0x6ee99a(_0x153eba) {
            _0x3ec223.push(_0x153eba);
          }
          function _0x1dace8() {
            if (!_0x3ec223.length) {
              var _0x2e27c7 = _0x4745a9();
              if (null === _0x2e27c7) {
                return null;
              }
              _0x6ee99a(_0x2e27c7);
            }
            return _0x3ec223[0x0];
          }
          return Object.defineProperty({
            'next': _0x4745a9,
            'peek': _0x1dace8,
            'push': _0x6ee99a,
            'skip': function (_0x3aea2b, _0x2a0876) {
              var _0x70fa47 = _0x1dace8();
              if (_0x70fa47 === _0x3aea2b) {
                _0x4745a9();
                return true;
              }
              if (!_0x2a0876) {
                throw Error("illegal " + ("token '" + _0x70fa47 + "', '" + _0x3aea2b + "' expected") + " (line " + _0x537a11 + ')');
              }
              return false;
            },
            'cmnt': function (_0xd0fb1b) {
              var _0x2388da = null;
              if (undefined === _0xd0fb1b) {
                if (_0x8368c === _0x537a11 - 0x1 && (_0x35f3bd || '*' === _0x4f3abc || _0x35a77d)) {
                  _0x2388da = _0x95635a ? _0x32d04f : null;
                }
              } else {
                if (_0x8368c < _0xd0fb1b) {
                  _0x1dace8();
                }
                if (!(_0x8368c !== _0xd0fb1b || _0x35a77d || !_0x35f3bd && '/' !== _0x4f3abc)) {
                  _0x2388da = _0x95635a ? null : _0x32d04f;
                }
              }
              return _0x2388da;
            }
          }, "line", {
            'get': function () {
              return _0x537a11;
            }
          });
        }
        _0x4f69d8.unescape = _0x582819;
        _0xff5c23.exports;
      }, {});
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/parse.js", function (_0x5aae19, _0x2d1280, _0xb96439, _0x2bd520, _0x44fb6c) {
        _0xb96439.exports = _0x595554;
        _0x595554.filename = null;
        _0x595554.defaults = {
          'keepCase': false
        };
        var _0x5c17a8 = _0x2d1280("./tokenize");
        var _0x3e9c3f = _0x2d1280("./root");
        var _0x2caeba = _0x2d1280("./type");
        var _0x1b80a1 = _0x2d1280('./field');
        var _0x229ffb = _0x2d1280("./mapfield");
        var _0x2409d1 = _0x2d1280("./oneof");
        var _0xcea543 = _0x2d1280('./enum');
        var _0x533bb4 = _0x2d1280("./service");
        var _0x2a82ef = _0x2d1280('./method');
        var _0xd1d060 = _0x2d1280("./types");
        var _0x5a9978 = _0x2d1280("./util");
        var _0x3d7634 = /^[1-9][0-9]*$/;
        var _0x36ae16 = /^-?[1-9][0-9]*$/;
        var _0x3c244d = /^0[x][0-9a-fA-F]+$/;
        var _0x132f2e = /^-?0[x][0-9a-fA-F]+$/;
        var _0x306a57 = /^0[0-7]+$/;
        var _0x27158d = /^-?0[0-7]+$/;
        var _0x5595f0 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x5e2031 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x5532da = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x2d0b6a = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x595554(_0x1b4810, _0x5f365a, _0x2bd99b) {
          if (!(_0x5f365a instanceof _0x3e9c3f)) {
            _0x2bd99b = _0x5f365a;
            _0x5f365a = new _0x3e9c3f();
          }
          if (!_0x2bd99b) {
            _0x2bd99b = _0x595554.defaults;
          }
          var _0x4de62b;
          var _0x21d329;
          var _0x182d27;
          var _0x347b53;
          var _0x5b6a0b;
          var _0x20645c = _0x2bd99b.preferTrailingComment || false;
          var _0x4d45d8 = _0x5c17a8(_0x1b4810, _0x2bd99b.alternateCommentMode || false);
          var _0x3e1c31 = _0x4d45d8.next;
          var _0x535227 = _0x4d45d8.push;
          var _0x110e1d = _0x4d45d8.peek;
          var _0x3074a5 = _0x4d45d8.skip;
          var _0x551a43 = _0x4d45d8.cmnt;
          var _0x2fc833 = true;
          var _0x448ffb = false;
          var _0xa750d1 = _0x5f365a;
          var _0x35dff5 = _0x2bd99b.keepCase ? function (_0x13ecb6) {
            return _0x13ecb6;
          } : _0x5a9978.camelCase;
          function _0x2e2e41(_0x45f98a, _0x544fa8, _0x47d0fe) {
            var _0x5d4c69 = _0x595554.filename;
            if (!_0x47d0fe) {
              _0x595554.filename = null;
            }
            return Error("illegal " + (_0x544fa8 || 'token') + " '" + _0x45f98a + "' (" + (_0x5d4c69 ? _0x5d4c69 + ", " : '') + "line " + _0x4d45d8.line + ')');
          }
          function _0x46c116() {
            var _0x25c199;
            var _0x160e5d = [];
            do {
              if ("\"" !== (_0x25c199 = _0x3e1c31()) && "'" !== _0x25c199) {
                throw _0x2e2e41(_0x25c199);
              }
              _0x160e5d.push(_0x3e1c31());
              _0x3074a5(_0x25c199);
              _0x25c199 = _0x110e1d();
            } while ("\"" === _0x25c199 || "'" === _0x25c199);
            return _0x160e5d.join('');
          }
          function _0x76b6a0(_0xfa8543) {
            var _0x17ed0b = _0x3e1c31();
            switch (_0x17ed0b) {
              case "'":
              case "\"":
                _0x535227(_0x17ed0b);
                return _0x46c116();
              case "true":
              case "TRUE":
                return true;
              case 'false':
              case 'FALSE':
                return false;
            }
            try {
              return function (_0x4bd025, _0x59ea01) {
                var _0x320b4a = 0x1;
                if ('-' === _0x4bd025.charAt(0x0)) {
                  _0x320b4a = -0x1;
                  _0x4bd025 = _0x4bd025.substring(0x1);
                }
                switch (_0x4bd025) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return _0x320b4a * Infinity;
                  case "nan":
                  case 'NAN':
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case '0':
                    return 0x0;
                }
                if (_0x3d7634.test(_0x4bd025)) {
                  return _0x320b4a * parseInt(_0x4bd025, 0xa);
                }
                if (_0x3c244d.test(_0x4bd025)) {
                  return _0x320b4a * parseInt(_0x4bd025, 0x10);
                }
                if (_0x306a57.test(_0x4bd025)) {
                  return _0x320b4a * parseInt(_0x4bd025, 0x8);
                }
                if (_0x5595f0.test(_0x4bd025)) {
                  return _0x320b4a * parseFloat(_0x4bd025);
                }
                throw _0x2e2e41(_0x4bd025, "number", _0x59ea01);
              }(_0x17ed0b, true);
            } catch (_0x59ffdc) {
              if (_0xfa8543 && _0x5532da.test(_0x17ed0b)) {
                return _0x17ed0b;
              }
              throw _0x2e2e41(_0x17ed0b, "value");
            }
          }
          function _0x441b4d(_0x273d2e, _0x2b078a) {
            var _0x374f5c;
            var _0x7d60bf;
            do {
              if (!_0x2b078a || "\"" !== (_0x374f5c = _0x110e1d()) && "'" !== _0x374f5c) {
                _0x273d2e.push([_0x7d60bf = _0x39f4ab(_0x3e1c31()), _0x3074a5('to', true) ? _0x39f4ab(_0x3e1c31()) : _0x7d60bf]);
              } else {
                _0x273d2e.push(_0x46c116());
              }
            } while (_0x3074a5(',', true));
            _0x3074a5(';');
          }
          function _0x39f4ab(_0x44033a, _0x167d6f) {
            switch (_0x44033a) {
              case "max":
              case "MAX":
              case 'Max':
                return 0x1fffffff;
              case '0':
                return 0x0;
            }
            if (!_0x167d6f && '-' === _0x44033a.charAt(0x0)) {
              throw _0x2e2e41(_0x44033a, 'id');
            }
            if (_0x36ae16.test(_0x44033a)) {
              return parseInt(_0x44033a, 0xa);
            }
            if (_0x132f2e.test(_0x44033a)) {
              return parseInt(_0x44033a, 0x10);
            }
            if (_0x27158d.test(_0x44033a)) {
              return parseInt(_0x44033a, 0x8);
            }
            throw _0x2e2e41(_0x44033a, 'id');
          }
          function _0x18ef22() {
            if (undefined !== _0x4de62b) {
              throw _0x2e2e41("package");
            }
            _0x4de62b = _0x3e1c31();
            if (!_0x5532da.test(_0x4de62b)) {
              throw _0x2e2e41(_0x4de62b, 'name');
            }
            _0xa750d1 = _0xa750d1.define(_0x4de62b);
            _0x3074a5(';');
          }
          function _0x57bd41() {
            var _0x174835;
            var _0x46a956 = _0x110e1d();
            switch (_0x46a956) {
              case 'weak':
                _0x174835 = _0x182d27 || (_0x182d27 = []);
                _0x3e1c31();
                break;
              case "public":
                _0x3e1c31();
              default:
                _0x174835 = _0x21d329 || (_0x21d329 = []);
            }
            _0x46a956 = _0x46c116();
            _0x3074a5(';');
            _0x174835.push(_0x46a956);
          }
          function _0xbc2004() {
            _0x3074a5('=');
            _0x347b53 = _0x46c116();
            if (!(_0x448ffb = "proto3" === _0x347b53) && 'proto2' !== _0x347b53) {
              throw _0x2e2e41(_0x347b53, "syntax");
            }
            _0x3074a5(';');
          }
          function _0x41a2a2(_0xc87120, _0x4fd3cd) {
            switch (_0x4fd3cd) {
              case 'option':
                _0x7d388(_0xc87120, _0x4fd3cd);
                _0x3074a5(';');
                return true;
              case "message":
                (function (_0x2b01aa, _0x83a7c8) {
                  if (!_0x5e2031.test(_0x83a7c8 = _0x3e1c31())) {
                    throw _0x2e2e41(_0x83a7c8, "type name");
                  }
                  var _0x2ca77a = new _0x2caeba(_0x83a7c8);
                  _0x227da2(_0x2ca77a, function (_0x357cb7) {
                    if (!_0x41a2a2(_0x2ca77a, _0x357cb7)) {
                      switch (_0x357cb7) {
                        case "map":
                          !function (_0x54b390) {
                            _0x3074a5('<');
                            var _0x1ff32e = _0x3e1c31();
                            if (undefined === _0xd1d060.mapKey[_0x1ff32e]) {
                              throw _0x2e2e41(_0x1ff32e, "type");
                            }
                            _0x3074a5(',');
                            var _0x3f70cf = _0x3e1c31();
                            if (!_0x5532da.test(_0x3f70cf)) {
                              throw _0x2e2e41(_0x3f70cf, "type");
                            }
                            _0x3074a5('>');
                            var _0x2e5e8a = _0x3e1c31();
                            if (!_0x5e2031.test(_0x2e5e8a)) {
                              throw _0x2e2e41(_0x2e5e8a, "name");
                            }
                            _0x3074a5('=');
                            var _0x5be9d1 = new _0x229ffb(_0x35dff5(_0x2e5e8a), _0x39f4ab(_0x3e1c31()), _0x1ff32e, _0x3f70cf);
                            _0x227da2(_0x5be9d1, function (_0x9712b7) {
                              if ("option" !== _0x9712b7) {
                                throw _0x2e2e41(_0x9712b7);
                              }
                              _0x7d388(_0x5be9d1, _0x9712b7);
                              _0x3074a5(';');
                            }, function () {
                              _0x410b6f(_0x5be9d1);
                            });
                            _0x54b390.add(_0x5be9d1);
                          }(_0x2ca77a);
                          break;
                        case "required":
                        case 'repeated':
                          _0x353ec1(_0x2ca77a, _0x357cb7);
                          break;
                        case "optional":
                          _0x353ec1(_0x2ca77a, _0x448ffb ? "proto3_optional" : "optional");
                          break;
                        case "oneof":
                          !function (_0x272441, _0x3fa847) {
                            if (!_0x5e2031.test(_0x3fa847 = _0x3e1c31())) {
                              throw _0x2e2e41(_0x3fa847, "name");
                            }
                            var _0x48c58f = new _0x2409d1(_0x35dff5(_0x3fa847));
                            _0x227da2(_0x48c58f, function (_0x34e360) {
                              if ("option" === _0x34e360) {
                                _0x7d388(_0x48c58f, _0x34e360);
                                _0x3074a5(';');
                              } else {
                                _0x535227(_0x34e360);
                                _0x353ec1(_0x48c58f, "optional");
                              }
                            });
                            _0x272441.add(_0x48c58f);
                          }(_0x2ca77a, _0x357cb7);
                          break;
                        case "extensions":
                          _0x441b4d(_0x2ca77a.extensions || (_0x2ca77a.extensions = []));
                          break;
                        case "reserved":
                          _0x441b4d(_0x2ca77a.reserved || (_0x2ca77a.reserved = []), true);
                          break;
                        default:
                          if (!_0x448ffb || !_0x5532da.test(_0x357cb7)) {
                            throw _0x2e2e41(_0x357cb7);
                          }
                          _0x535227(_0x357cb7);
                          _0x353ec1(_0x2ca77a, "optional");
                      }
                    }
                  });
                  _0x2b01aa.add(_0x2ca77a);
                })(_0xc87120, _0x4fd3cd);
                return true;
              case 'enum':
                (function (_0x230c81, _0x1a62c7) {
                  if (!_0x5e2031.test(_0x1a62c7 = _0x3e1c31())) {
                    throw _0x2e2e41(_0x1a62c7, 'name');
                  }
                  var _0x2e5911 = new _0xcea543(_0x1a62c7);
                  _0x227da2(_0x2e5911, function (_0x1a10d2) {
                    switch (_0x1a10d2) {
                      case 'option':
                        _0x7d388(_0x2e5911, _0x1a10d2);
                        _0x3074a5(';');
                        break;
                      case 'reserved':
                        _0x441b4d(_0x2e5911.reserved || (_0x2e5911.reserved = []), true);
                        break;
                      default:
                        !function (_0x41fbe9, _0x5ac22c) {
                          if (!_0x5e2031.test(_0x5ac22c)) {
                            throw _0x2e2e41(_0x5ac22c, "name");
                          }
                          _0x3074a5('=');
                          var _0xdf99f5 = _0x39f4ab(_0x3e1c31(), true);
                          var _0x4590b1 = {};
                          _0x227da2(_0x4590b1, function (_0x22c589) {
                            if ('option' !== _0x22c589) {
                              throw _0x2e2e41(_0x22c589);
                            }
                            _0x7d388(_0x4590b1, _0x22c589);
                            _0x3074a5(';');
                          }, function () {
                            _0x410b6f(_0x4590b1);
                          });
                          _0x41fbe9.add(_0x5ac22c, _0xdf99f5, _0x4590b1.comment);
                        }(_0x2e5911, _0x1a10d2);
                    }
                  });
                  _0x230c81.add(_0x2e5911);
                })(_0xc87120, _0x4fd3cd);
                return true;
              case "service":
                (function (_0x371b32, _0x458c1a) {
                  if (!_0x5e2031.test(_0x458c1a = _0x3e1c31())) {
                    throw _0x2e2e41(_0x458c1a, "service name");
                  }
                  var _0x4e53ab = new _0x533bb4(_0x458c1a);
                  _0x227da2(_0x4e53ab, function (_0x21bdb5) {
                    if (!_0x41a2a2(_0x4e53ab, _0x21bdb5)) {
                      if ("rpc" !== _0x21bdb5) {
                        throw _0x2e2e41(_0x21bdb5);
                      }
                      !function (_0x528c41, _0x471f79) {
                        var _0x3c3034 = _0x551a43();
                        var _0x427455 = _0x471f79;
                        if (!_0x5e2031.test(_0x471f79 = _0x3e1c31())) {
                          throw _0x2e2e41(_0x471f79, "name");
                        }
                        var _0x5c5c28;
                        var _0x125142;
                        var _0x4d26b;
                        var _0x466f5c;
                        var _0x1938cc = _0x471f79;
                        _0x3074a5('(');
                        if (_0x3074a5("stream", true)) {
                          _0x125142 = true;
                        }
                        if (!_0x5532da.test(_0x471f79 = _0x3e1c31())) {
                          throw _0x2e2e41(_0x471f79);
                        }
                        _0x5c5c28 = _0x471f79;
                        _0x3074a5(')');
                        _0x3074a5("returns");
                        _0x3074a5('(');
                        if (_0x3074a5("stream", true)) {
                          _0x466f5c = true;
                        }
                        if (!_0x5532da.test(_0x471f79 = _0x3e1c31())) {
                          throw _0x2e2e41(_0x471f79);
                        }
                        _0x4d26b = _0x471f79;
                        _0x3074a5(')');
                        var _0x586c83 = new _0x2a82ef(_0x1938cc, _0x427455, _0x5c5c28, _0x4d26b, _0x125142, _0x466f5c);
                        _0x586c83.comment = _0x3c3034;
                        _0x227da2(_0x586c83, function (_0x4a1b42) {
                          if ('option' !== _0x4a1b42) {
                            throw _0x2e2e41(_0x4a1b42);
                          }
                          _0x7d388(_0x586c83, _0x4a1b42);
                          _0x3074a5(';');
                        });
                        _0x528c41.add(_0x586c83);
                      }(_0x4e53ab, _0x21bdb5);
                    }
                  });
                  _0x371b32.add(_0x4e53ab);
                })(_0xc87120, _0x4fd3cd);
                return true;
              case "extend":
                (function (_0x4fcdea, _0x43c083) {
                  if (!_0x5532da.test(_0x43c083 = _0x3e1c31())) {
                    throw _0x2e2e41(_0x43c083, 'reference');
                  }
                  var _0x50fd2e = _0x43c083;
                  _0x227da2(null, function (_0x597051) {
                    switch (_0x597051) {
                      case "required":
                      case "repeated":
                        _0x353ec1(_0x4fcdea, _0x597051, _0x50fd2e);
                        break;
                      case "optional":
                        _0x353ec1(_0x4fcdea, _0x448ffb ? "proto3_optional" : 'optional', _0x50fd2e);
                        break;
                      default:
                        if (!_0x448ffb || !_0x5532da.test(_0x597051)) {
                          throw _0x2e2e41(_0x597051);
                        }
                        _0x535227(_0x597051);
                        _0x353ec1(_0x4fcdea, "optional", _0x50fd2e);
                    }
                  });
                })(_0xc87120, _0x4fd3cd);
                return true;
            }
            return false;
          }
          function _0x227da2(_0x324f1f, _0x5bba18, _0x495325) {
            var _0x33055b = _0x4d45d8.line;
            if (_0x324f1f) {
              if ("string" != typeof _0x324f1f.comment) {
                _0x324f1f.comment = _0x551a43();
              }
              _0x324f1f.filename = _0x595554.filename;
            }
            if (_0x3074a5('{', true)) {
              for (var _0x1599c1; '}' !== (_0x1599c1 = _0x3e1c31());) {
                _0x5bba18(_0x1599c1);
              }
              _0x3074a5(';', true);
            } else {
              if (_0x495325) {
                _0x495325();
              }
              _0x3074a5(';');
              if (_0x324f1f && ("string" != typeof _0x324f1f.comment || _0x20645c)) {
                _0x324f1f.comment = _0x551a43(_0x33055b) || _0x324f1f.comment;
              }
            }
          }
          function _0x353ec1(_0x4c7dd1, _0x2f3b44, _0x503928) {
            var _0x351dbd = _0x3e1c31();
            if ("group" !== _0x351dbd) {
              if (!_0x5532da.test(_0x351dbd)) {
                throw _0x2e2e41(_0x351dbd, 'type');
              }
              var _0x2e45c0 = _0x3e1c31();
              if (!_0x5e2031.test(_0x2e45c0)) {
                throw _0x2e2e41(_0x2e45c0, 'name');
              }
              _0x2e45c0 = _0x35dff5(_0x2e45c0);
              _0x3074a5('=');
              var _0x5576e0 = new _0x1b80a1(_0x2e45c0, _0x39f4ab(_0x3e1c31()), _0x351dbd, _0x2f3b44, _0x503928);
              _0x227da2(_0x5576e0, function (_0x3553e7) {
                if ("option" !== _0x3553e7) {
                  throw _0x2e2e41(_0x3553e7);
                }
                _0x7d388(_0x5576e0, _0x3553e7);
                _0x3074a5(';');
              }, function () {
                _0x410b6f(_0x5576e0);
              });
              if ("proto3_optional" === _0x2f3b44) {
                var _0xdc1ba7 = new _0x2409d1('_' + _0x2e45c0);
                _0x5576e0.setOption("proto3_optional", true);
                _0xdc1ba7.add(_0x5576e0);
                _0x4c7dd1.add(_0xdc1ba7);
              } else {
                _0x4c7dd1.add(_0x5576e0);
              }
              if (!(_0x448ffb || !_0x5576e0.repeated || undefined === _0xd1d060.packed[_0x351dbd] && undefined !== _0xd1d060.basic[_0x351dbd])) {
                _0x5576e0.setOption("packed", false, true);
              }
            } else {
              !function (_0x5ca906, _0x166bb4) {
                var _0x2a4c23 = _0x3e1c31();
                if (!_0x5e2031.test(_0x2a4c23)) {
                  throw _0x2e2e41(_0x2a4c23, 'name');
                }
                var _0x44acf0 = _0x5a9978.lcFirst(_0x2a4c23);
                if (_0x2a4c23 === _0x44acf0) {
                  _0x2a4c23 = _0x5a9978.ucFirst(_0x2a4c23);
                }
                _0x3074a5('=');
                var _0x16c453 = _0x39f4ab(_0x3e1c31());
                var _0x29e206 = new _0x2caeba(_0x2a4c23);
                _0x29e206.group = true;
                var _0x33fd49 = new _0x1b80a1(_0x44acf0, _0x16c453, _0x2a4c23, _0x166bb4);
                _0x33fd49.filename = _0x595554.filename;
                _0x227da2(_0x29e206, function (_0x4e611d) {
                  switch (_0x4e611d) {
                    case "option":
                      _0x7d388(_0x29e206, _0x4e611d);
                      _0x3074a5(';');
                      break;
                    case 'required':
                    case "repeated":
                      _0x353ec1(_0x29e206, _0x4e611d);
                      break;
                    case "optional":
                      _0x353ec1(_0x29e206, _0x448ffb ? 'proto3_optional' : 'optional');
                      break;
                    default:
                      throw _0x2e2e41(_0x4e611d);
                  }
                });
                _0x5ca906.add(_0x29e206).add(_0x33fd49);
              }(_0x4c7dd1, _0x2f3b44);
            }
          }
          function _0x7d388(_0xa87511, _0x249a77) {
            var _0x351833 = _0x3074a5('(', true);
            if (!_0x5532da.test(_0x249a77 = _0x3e1c31())) {
              throw _0x2e2e41(_0x249a77, 'name');
            }
            var _0x31becf;
            var _0xe02b2c = _0x249a77;
            var _0x1674f2 = _0xe02b2c;
            if (_0x351833) {
              _0x3074a5(')');
              _0x1674f2 = _0xe02b2c = '(' + _0xe02b2c + ')';
              _0x249a77 = _0x110e1d();
              if (_0x2d0b6a.test(_0x249a77)) {
                _0x31becf = _0x249a77.substr(0x1);
                _0xe02b2c += _0x249a77;
                _0x3e1c31();
              }
            }
            _0x3074a5('=');
            (function (_0xd89f7a, _0x2be358, _0x411f9e, _0x5aeb64) {
              if (_0xd89f7a.setParsedOption) {
                _0xd89f7a.setParsedOption(_0x2be358, _0x411f9e, _0x5aeb64);
              }
            })(_0xa87511, _0x1674f2, _0x17c96e(_0xa87511, _0xe02b2c), _0x31becf);
          }
          function _0x17c96e(_0x1fac07, _0x1aed8a) {
            if (_0x3074a5('{', true)) {
              for (var _0x4a4ea0 = {}; !_0x3074a5('}', true);) {
                if (!_0x5e2031.test(_0x5b6a0b = _0x3e1c31())) {
                  throw _0x2e2e41(_0x5b6a0b, 'name');
                }
                var _0x579650;
                var _0x3ded16 = _0x5b6a0b;
                if ('{' === _0x110e1d()) {
                  _0x579650 = _0x17c96e(_0x1fac07, _0x1aed8a + '.' + _0x5b6a0b);
                } else {
                  _0x3074a5(':');
                  if ('{' === _0x110e1d()) {
                    _0x579650 = _0x17c96e(_0x1fac07, _0x1aed8a + '.' + _0x5b6a0b);
                  } else {
                    _0x579650 = _0x76b6a0(true);
                    _0x470e3d(_0x1fac07, _0x1aed8a + '.' + _0x5b6a0b, _0x579650);
                  }
                }
                var _0x3554b9 = _0x4a4ea0[_0x3ded16];
                if (_0x3554b9) {
                  _0x579650 = [].concat(_0x3554b9).concat(_0x579650);
                }
                _0x4a4ea0[_0x3ded16] = _0x579650;
                _0x3074a5(',', true);
              }
              return _0x4a4ea0;
            }
            var _0x3db247 = _0x76b6a0(true);
            _0x470e3d(_0x1fac07, _0x1aed8a, _0x3db247);
            return _0x3db247;
          }
          function _0x470e3d(_0x461024, _0x5f58e3, _0x269cf3) {
            if (_0x461024.setOption) {
              _0x461024.setOption(_0x5f58e3, _0x269cf3);
            }
          }
          function _0x410b6f(_0x458aab) {
            if (_0x3074a5('[', true)) {
              do {
                _0x7d388(_0x458aab, "option");
              } while (_0x3074a5(',', true));
              _0x3074a5(']');
            }
            return _0x458aab;
          }
          for (; null !== (_0x5b6a0b = _0x3e1c31());) {
            switch (_0x5b6a0b) {
              case "package":
                if (!_0x2fc833) {
                  throw _0x2e2e41(_0x5b6a0b);
                }
                _0x18ef22();
                break;
              case "import":
                if (!_0x2fc833) {
                  throw _0x2e2e41(_0x5b6a0b);
                }
                _0x57bd41();
                break;
              case "syntax":
                if (!_0x2fc833) {
                  throw _0x2e2e41(_0x5b6a0b);
                }
                _0xbc2004();
                break;
              case 'option':
                _0x7d388(_0xa750d1, _0x5b6a0b);
                _0x3074a5(';');
                break;
              default:
                if (_0x41a2a2(_0xa750d1, _0x5b6a0b)) {
                  _0x2fc833 = false;
                  continue;
                }
                throw _0x2e2e41(_0x5b6a0b);
            }
          }
          _0x595554.filename = null;
          return {
            'package': _0x4de62b,
            'imports': _0x21d329,
            'weakImports': _0x182d27,
            'syntax': _0x347b53,
            'root': _0x5f365a
          };
        }
        _0xb96439.exports;
      }, function () {
        return {
          './tokenize': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './root': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/root.js",
          './type': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/type.js',
          './field': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/field.js",
          './mapfield': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js",
          './oneof': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js',
          './enum': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/enum.js',
          './service': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/service.js',
          './method': 'file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/method.js',
          './types': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/types.js",
          './util': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/util.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/common.js", function (_0x59bb7e, _0x12c4f1, _0x4f1cb1, _0x10e9f3, _0x491991) {
        _0x4f1cb1.exports = _0x1e252c;
        var _0x35693b;
        var _0x34a4c6 = /\/|\./;
        function _0x1e252c(_0x458ca1, _0x3e5bf9) {
          if (!_0x34a4c6.test(_0x458ca1)) {
            _0x458ca1 = "google/protobuf/" + _0x458ca1 + '.proto';
            _0x3e5bf9 = {
              'nested': {
                'google': {
                  'nested': {
                    'protobuf': {
                      'nested': _0x3e5bf9
                    }
                  }
                }
              }
            };
          }
          _0x1e252c[_0x458ca1] = _0x3e5bf9;
        }
        _0x1e252c('any', {
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
        _0x1e252c('duration', {
          'Duration': _0x35693b = {
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
        _0x1e252c('timestamp', {
          'Timestamp': _0x35693b
        });
        _0x1e252c('empty', {
          'Empty': {
            'fields': {}
          }
        });
        _0x1e252c("struct", {
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
                'oneof': ['nullValue', 'numberValue', "stringValue", "boolValue", 'structValue', "listValue"]
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
        _0x1e252c("wrappers", {
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
                'type': 'uint32',
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
        _0x1e252c("field_mask", {
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
        _0x1e252c.get = function (_0x383cdf) {
          return _0x1e252c[_0x383cdf] || null;
        };
        _0x4f1cb1.exports;
      }, {});
      var _0x7d845d;
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/index.js", function (_0xefd433, _0x141931, _0x547ace, _0x211e04, _0x24815a) {
        var _0x478043 = _0x547ace.exports = _0x141931("./index-light");
        _0x478043.build = "full";
        _0x478043.tokenize = _0x141931("./tokenize");
        _0x478043.parse = _0x141931("./parse");
        _0x478043.common = _0x141931("./common");
        _0x478043.Root._configure(_0x478043.Type, _0x478043.parse, _0x478043.common);
        _0x547ace.exports;
      }, function () {
        return {
          './index-light': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js",
          './tokenize': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js",
          './parse': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/parse.js",
          './common': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/common.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/index.js", function (_0x24b733, _0x289126, _0x3c374c, _0x2b8209, _0x17ea9e) {
        _0x3c374c.exports = _0x289126('./src/index');
        _0x7d845d = _0x3c374c.exports;
      }, function () {
        return {
          './src/index': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/index.js"
        };
      });
      _0x55cf1e.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/index.js");
      var _0x475837;
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/minimal.js", function (_0xe135fe, _0x3b067f, _0x471cf8, _0x346c63, _0x536133) {
        _0x471cf8.exports = _0x3b067f("./src/index-minimal");
        _0x471cf8.exports;
      }, function () {
        return {
          './src/index-minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js"
        };
      });
      _0x55cf1e.define("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/assets/game/Script/Proto/cbtProto.js", function (_0x418da7, _0x4eed6f, _0x3b2e15, _0x30d39d, _0x5a2d1c) {
        var _0x4bb954;
        var _0x5e1f4d = _0x4eed6f("protobufjs/minimal");
        var _0x19de43 = _0x5e1f4d.Reader;
        var _0x567625 = _0x5e1f4d.Writer;
        var _0x1b3bd2 = _0x5e1f4d.util;
        var _0x352a1c = _0x5e1f4d.roots["default"] || (_0x5e1f4d.roots['default'] = {});
        (_0x4bb954 = {
          "Detail": function () {
            function _0x252aa0(_0x2fdb80) {
              this.Detail = [];
              if (_0x2fdb80) {
                var _0x2ef359 = Object.keys(_0x2fdb80);
                for (var _0x2860fb = 0x0; _0x2860fb < _0x2ef359.length; ++_0x2860fb) {
                  if (null != _0x2fdb80[_0x2ef359[_0x2860fb]]) {
                    this[_0x2ef359[_0x2860fb]] = _0x2fdb80[_0x2ef359[_0x2860fb]];
                  }
                }
              }
            }
            _0x252aa0.prototype.Detail = _0x1b3bd2.emptyArray;
            _0x252aa0.create = function (_0x50c33b) {
              return new _0x252aa0(_0x50c33b);
            };
            _0x252aa0.encode = function (_0x5b536c, _0x5abe67) {
              if (!_0x5abe67) {
                _0x5abe67 = _0x567625.create();
              }
              if (null != _0x5b536c.Detail && _0x5b536c.Detail.length) {
                _0x5abe67.uint32(0xa).fork();
                for (var _0xc43bc = 0x0; _0xc43bc < _0x5b536c.Detail.length; ++_0xc43bc) {
                  _0x5abe67.double(_0x5b536c.Detail[_0xc43bc]);
                }
                _0x5abe67.ldelim();
              }
              return _0x5abe67;
            };
            _0x252aa0.encodeDelimited = function (_0x151cf7, _0xac4f7b) {
              return this.encode(_0x151cf7, _0xac4f7b).ldelim();
            };
            _0x252aa0.decode = function (_0x1900fa, _0x421ae2) {
              if (!(_0x1900fa instanceof _0x19de43)) {
                _0x1900fa = _0x19de43.create(_0x1900fa);
              }
              var _0x4cc885 = undefined === _0x421ae2 ? _0x1900fa.len : _0x1900fa.pos + _0x421ae2;
              for (var _0x3e9574 = new _0x352a1c.cbtProto.Detail(); _0x1900fa.pos < _0x4cc885;) {
                var _0x22dddd = _0x1900fa.uint32();
                switch (_0x22dddd >>> 0x3) {
                  case 0x1:
                    if (!(_0x3e9574.Detail && _0x3e9574.Detail.length)) {
                      _0x3e9574.Detail = [];
                    }
                    if (0x2 == (0x7 & _0x22dddd)) {
                      for (var _0x2385f2 = _0x1900fa.uint32() + _0x1900fa.pos; _0x1900fa.pos < _0x2385f2;) {
                        _0x3e9574.Detail.push(_0x1900fa.double());
                      }
                    } else {
                      _0x3e9574.Detail.push(_0x1900fa.double());
                    }
                    break;
                  default:
                    _0x1900fa.skipType(0x7 & _0x22dddd);
                }
              }
              return _0x3e9574;
            };
            _0x252aa0.decodeDelimited = function (_0x228b1a) {
              if (!(_0x228b1a instanceof _0x19de43)) {
                _0x228b1a = new _0x19de43(_0x228b1a);
              }
              return this.decode(_0x228b1a, _0x228b1a.uint32());
            };
            _0x252aa0.verify = function (_0x5e0693) {
              if ("object" != typeof _0x5e0693 || null === _0x5e0693) {
                return "object expected";
              }
              if (null != _0x5e0693.Detail && _0x5e0693.hasOwnProperty('Detail')) {
                if (!Array.isArray(_0x5e0693.Detail)) {
                  return "Detail: array expected";
                }
                for (var _0x5eccdf = 0x0; _0x5eccdf < _0x5e0693.Detail.length; ++_0x5eccdf) {
                  if ("number" != typeof _0x5e0693.Detail[_0x5eccdf]) {
                    return "Detail: number[] expected";
                  }
                }
              }
              return null;
            };
            _0x252aa0.fromObject = function (_0x3d6f92) {
              if (_0x3d6f92 instanceof _0x352a1c.cbtProto.Detail) {
                return _0x3d6f92;
              }
              var _0x541079 = new _0x352a1c.cbtProto.Detail();
              if (_0x3d6f92.Detail) {
                if (!Array.isArray(_0x3d6f92.Detail)) {
                  throw TypeError(".cbtProto.Detail.Detail: array expected");
                }
                _0x541079.Detail = [];
                for (var _0x5bc207 = 0x0; _0x5bc207 < _0x3d6f92.Detail.length; ++_0x5bc207) {
                  _0x541079.Detail[_0x5bc207] = Number(_0x3d6f92.Detail[_0x5bc207]);
                }
              }
              return _0x541079;
            };
            _0x252aa0.toObject = function (_0x458b53, _0x1ac0a1) {
              if (!_0x1ac0a1) {
                _0x1ac0a1 = {};
              }
              var _0x3956ca = {};
              if (_0x1ac0a1.arrays || _0x1ac0a1.defaults) {
                _0x3956ca.Detail = [];
              }
              if (_0x458b53.Detail && _0x458b53.Detail.length) {
                _0x3956ca.Detail = [];
                for (var _0xa4abd6 = 0x0; _0xa4abd6 < _0x458b53.Detail.length; ++_0xa4abd6) {
                  _0x3956ca.Detail[_0xa4abd6] = _0x1ac0a1.json && !isFinite(_0x458b53.Detail[_0xa4abd6]) ? String(_0x458b53.Detail[_0xa4abd6]) : _0x458b53.Detail[_0xa4abd6];
                }
              }
              return _0x3956ca;
            };
            _0x252aa0.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5e1f4d.util.toJSONOptions);
            };
            _0x252aa0.getTypeUrl = function (_0xd29466) {
              if (undefined === _0xd29466) {
                _0xd29466 = 'type.googleapis.com';
              }
              return _0xd29466 + '/cbtProto.Detail';
            };
            return _0x252aa0;
          }(),
          "SinglePlate": function () {
            function _0x30ec7a(_0x2e8696) {
              this.PlateSymbol = [];
              this.PoolDetail = [];
              this.Pool = [];
              this.ShowDetail = [];
              if (_0x2e8696) {
                var _0x537614 = Object.keys(_0x2e8696);
                for (var _0x412a4a = 0x0; _0x412a4a < _0x537614.length; ++_0x412a4a) {
                  if (null != _0x2e8696[_0x537614[_0x412a4a]]) {
                    this[_0x537614[_0x412a4a]] = _0x2e8696[_0x537614[_0x412a4a]];
                  }
                }
              }
            }
            _0x30ec7a.prototype.PlateSymbol = _0x1b3bd2.emptyArray;
            _0x30ec7a.prototype.AwardTypeFlag = 0x0;
            _0x30ec7a.prototype.PlateWin = 0x0;
            _0x30ec7a.prototype.LineWin = 0x0;
            _0x30ec7a.prototype.SymbolWin = 0x0;
            _0x30ec7a.prototype.PoolWin = 0x0;
            _0x30ec7a.prototype.PoolDetail = _0x1b3bd2.emptyArray;
            _0x30ec7a.prototype.Mult = 0x0;
            _0x30ec7a.prototype.Pool = _0x1b3bd2.emptyArray;
            _0x30ec7a.prototype.ShowDetail = _0x1b3bd2.emptyArray;
            _0x30ec7a.prototype.Plus = 0x0;
            _0x30ec7a.prototype.Light = 0x0;
            _0x30ec7a.prototype.Line = 0x0;
            _0x30ec7a.prototype.FreeRemainRound = 0x0;
            _0x30ec7a.prototype.FreeTotalRound = 0x0;
            _0x30ec7a.create = function (_0x2ac53a) {
              return new _0x30ec7a(_0x2ac53a);
            };
            _0x30ec7a.encode = function (_0x2ae336, _0x54747e) {
              if (!_0x54747e) {
                _0x54747e = _0x567625.create();
              }
              if (null != _0x2ae336.PlateSymbol && _0x2ae336.PlateSymbol.length) {
                for (var _0x553551 = 0x0; _0x553551 < _0x2ae336.PlateSymbol.length; ++_0x553551) {
                  _0x352a1c.cbtProto.Column.encode(_0x2ae336.PlateSymbol[_0x553551], _0x54747e.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x2ae336.AwardTypeFlag && Object.hasOwnProperty.call(_0x2ae336, "AwardTypeFlag")) {
                _0x54747e.uint32(0x10).int32(_0x2ae336.AwardTypeFlag);
              }
              if (null != _0x2ae336.PlateWin && Object.hasOwnProperty.call(_0x2ae336, 'PlateWin')) {
                _0x54747e.uint32(0x19).double(_0x2ae336.PlateWin);
              }
              if (null != _0x2ae336.LineWin && Object.hasOwnProperty.call(_0x2ae336, "LineWin")) {
                _0x54747e.uint32(0x21).double(_0x2ae336.LineWin);
              }
              if (null != _0x2ae336.SymbolWin && Object.hasOwnProperty.call(_0x2ae336, "SymbolWin")) {
                _0x54747e.uint32(0x29).double(_0x2ae336.SymbolWin);
              }
              if (null != _0x2ae336.PoolWin && Object.hasOwnProperty.call(_0x2ae336, "PoolWin")) {
                _0x54747e.uint32(0x31).double(_0x2ae336.PoolWin);
              }
              if (null != _0x2ae336.PoolDetail && _0x2ae336.PoolDetail.length) {
                for (_0x553551 = 0x0; _0x553551 < _0x2ae336.PoolDetail.length; ++_0x553551) {
                  _0x352a1c.cbtProto.Detail.encode(_0x2ae336.PoolDetail[_0x553551], _0x54747e.uint32(0x3a).fork()).ldelim();
                }
              }
              if (null != _0x2ae336.Mult && Object.hasOwnProperty.call(_0x2ae336, "Mult")) {
                _0x54747e.uint32(0x41).double(_0x2ae336.Mult);
              }
              if (null != _0x2ae336.Pool && _0x2ae336.Pool.length) {
                _0x54747e.uint32(0x4a).fork();
                for (_0x553551 = 0x0; _0x553551 < _0x2ae336.Pool.length; ++_0x553551) {
                  _0x54747e.double(_0x2ae336.Pool[_0x553551]);
                }
                _0x54747e.ldelim();
              }
              if (null != _0x2ae336.ShowDetail && _0x2ae336.ShowDetail.length) {
                for (_0x553551 = 0x0; _0x553551 < _0x2ae336.ShowDetail.length; ++_0x553551) {
                  _0x352a1c.cbtProto.Detail.encode(_0x2ae336.ShowDetail[_0x553551], _0x54747e.uint32(0x52).fork()).ldelim();
                }
              }
              if (null != _0x2ae336.Plus && Object.hasOwnProperty.call(_0x2ae336, "Plus")) {
                _0x54747e.uint32(0x58).int32(_0x2ae336.Plus);
              }
              if (null != _0x2ae336.Light && Object.hasOwnProperty.call(_0x2ae336, "Light")) {
                _0x54747e.uint32(0x60).int32(_0x2ae336.Light);
              }
              if (null != _0x2ae336.Line && Object.hasOwnProperty.call(_0x2ae336, "Line")) {
                _0x54747e.uint32(0x68).int32(_0x2ae336.Line);
              }
              if (null != _0x2ae336.FreeRemainRound && Object.hasOwnProperty.call(_0x2ae336, "FreeRemainRound")) {
                _0x54747e.uint32(0x70).int32(_0x2ae336.FreeRemainRound);
              }
              if (null != _0x2ae336.FreeTotalRound && Object.hasOwnProperty.call(_0x2ae336, "FreeTotalRound")) {
                _0x54747e.uint32(0x78).int32(_0x2ae336.FreeTotalRound);
              }
              return _0x54747e;
            };
            _0x30ec7a.encodeDelimited = function (_0x2d4bfc, _0x2add4e) {
              return this.encode(_0x2d4bfc, _0x2add4e).ldelim();
            };
            _0x30ec7a.decode = function (_0x415814, _0x384e7b) {
              if (!(_0x415814 instanceof _0x19de43)) {
                _0x415814 = _0x19de43.create(_0x415814);
              }
              var _0x1ccf3d = undefined === _0x384e7b ? _0x415814.len : _0x415814.pos + _0x384e7b;
              for (var _0x5c71b1 = new _0x352a1c.cbtProto.SinglePlate(); _0x415814.pos < _0x1ccf3d;) {
                var _0x237db8 = _0x415814.uint32();
                switch (_0x237db8 >>> 0x3) {
                  case 0x1:
                    if (!(_0x5c71b1.PlateSymbol && _0x5c71b1.PlateSymbol.length)) {
                      _0x5c71b1.PlateSymbol = [];
                    }
                    _0x5c71b1.PlateSymbol.push(_0x352a1c.cbtProto.Column.decode(_0x415814, _0x415814.uint32()));
                    break;
                  case 0x2:
                    _0x5c71b1.AwardTypeFlag = _0x415814.int32();
                    break;
                  case 0x3:
                    _0x5c71b1.PlateWin = _0x415814.double();
                    break;
                  case 0x4:
                    _0x5c71b1.LineWin = _0x415814.double();
                    break;
                  case 0x5:
                    _0x5c71b1.SymbolWin = _0x415814.double();
                    break;
                  case 0x6:
                    _0x5c71b1.PoolWin = _0x415814.double();
                    break;
                  case 0x7:
                    if (!(_0x5c71b1.PoolDetail && _0x5c71b1.PoolDetail.length)) {
                      _0x5c71b1.PoolDetail = [];
                    }
                    _0x5c71b1.PoolDetail.push(_0x352a1c.cbtProto.Detail.decode(_0x415814, _0x415814.uint32()));
                    break;
                  case 0x8:
                    _0x5c71b1.Mult = _0x415814.double();
                    break;
                  case 0x9:
                    if (!(_0x5c71b1.Pool && _0x5c71b1.Pool.length)) {
                      _0x5c71b1.Pool = [];
                    }
                    if (0x2 == (0x7 & _0x237db8)) {
                      for (var _0x231f8 = _0x415814.uint32() + _0x415814.pos; _0x415814.pos < _0x231f8;) {
                        _0x5c71b1.Pool.push(_0x415814.double());
                      }
                    } else {
                      _0x5c71b1.Pool.push(_0x415814.double());
                    }
                    break;
                  case 0xa:
                    if (!(_0x5c71b1.ShowDetail && _0x5c71b1.ShowDetail.length)) {
                      _0x5c71b1.ShowDetail = [];
                    }
                    _0x5c71b1.ShowDetail.push(_0x352a1c.cbtProto.Detail.decode(_0x415814, _0x415814.uint32()));
                    break;
                  case 0xb:
                    _0x5c71b1.Plus = _0x415814.int32();
                    break;
                  case 0xc:
                    _0x5c71b1.Light = _0x415814.int32();
                    break;
                  case 0xd:
                    _0x5c71b1.Line = _0x415814.int32();
                    break;
                  case 0xe:
                    _0x5c71b1.FreeRemainRound = _0x415814.int32();
                    break;
                  case 0xf:
                    _0x5c71b1.FreeTotalRound = _0x415814.int32();
                    break;
                  default:
                    _0x415814.skipType(0x7 & _0x237db8);
                }
              }
              return _0x5c71b1;
            };
            _0x30ec7a.decodeDelimited = function (_0xec6de3) {
              if (!(_0xec6de3 instanceof _0x19de43)) {
                _0xec6de3 = new _0x19de43(_0xec6de3);
              }
              return this.decode(_0xec6de3, _0xec6de3.uint32());
            };
            _0x30ec7a.verify = function (_0x5aa6ed) {
              if ("object" != typeof _0x5aa6ed || null === _0x5aa6ed) {
                return "object expected";
              }
              if (null != _0x5aa6ed.PlateSymbol && _0x5aa6ed.hasOwnProperty("PlateSymbol")) {
                if (!Array.isArray(_0x5aa6ed.PlateSymbol)) {
                  return "PlateSymbol: array expected";
                }
                for (var _0x1ae47f = 0x0; _0x1ae47f < _0x5aa6ed.PlateSymbol.length; ++_0x1ae47f) {
                  if (_0x582040 = _0x352a1c.cbtProto.Column.verify(_0x5aa6ed.PlateSymbol[_0x1ae47f])) {
                    return 'PlateSymbol.' + _0x582040;
                  }
                }
              }
              if (null != _0x5aa6ed.AwardTypeFlag && _0x5aa6ed.hasOwnProperty('AwardTypeFlag') && !_0x1b3bd2.isInteger(_0x5aa6ed.AwardTypeFlag)) {
                return "AwardTypeFlag: integer expected";
              }
              if (null != _0x5aa6ed.PlateWin && _0x5aa6ed.hasOwnProperty("PlateWin") && "number" != typeof _0x5aa6ed.PlateWin) {
                return "PlateWin: number expected";
              }
              if (null != _0x5aa6ed.LineWin && _0x5aa6ed.hasOwnProperty('LineWin') && 'number' != typeof _0x5aa6ed.LineWin) {
                return "LineWin: number expected";
              }
              if (null != _0x5aa6ed.SymbolWin && _0x5aa6ed.hasOwnProperty('SymbolWin') && "number" != typeof _0x5aa6ed.SymbolWin) {
                return "SymbolWin: number expected";
              }
              if (null != _0x5aa6ed.PoolWin && _0x5aa6ed.hasOwnProperty("PoolWin") && "number" != typeof _0x5aa6ed.PoolWin) {
                return "PoolWin: number expected";
              }
              if (null != _0x5aa6ed.PoolDetail && _0x5aa6ed.hasOwnProperty("PoolDetail")) {
                if (!Array.isArray(_0x5aa6ed.PoolDetail)) {
                  return "PoolDetail: array expected";
                }
                for (_0x1ae47f = 0x0; _0x1ae47f < _0x5aa6ed.PoolDetail.length; ++_0x1ae47f) {
                  if (_0x582040 = _0x352a1c.cbtProto.Detail.verify(_0x5aa6ed.PoolDetail[_0x1ae47f])) {
                    return 'PoolDetail.' + _0x582040;
                  }
                }
              }
              if (null != _0x5aa6ed.Mult && _0x5aa6ed.hasOwnProperty("Mult") && "number" != typeof _0x5aa6ed.Mult) {
                return "Mult: number expected";
              }
              if (null != _0x5aa6ed.Pool && _0x5aa6ed.hasOwnProperty('Pool')) {
                if (!Array.isArray(_0x5aa6ed.Pool)) {
                  return "Pool: array expected";
                }
                for (_0x1ae47f = 0x0; _0x1ae47f < _0x5aa6ed.Pool.length; ++_0x1ae47f) {
                  if ('number' != typeof _0x5aa6ed.Pool[_0x1ae47f]) {
                    return "Pool: number[] expected";
                  }
                }
              }
              if (null != _0x5aa6ed.ShowDetail && _0x5aa6ed.hasOwnProperty('ShowDetail')) {
                if (!Array.isArray(_0x5aa6ed.ShowDetail)) {
                  return "ShowDetail: array expected";
                }
                for (_0x1ae47f = 0x0; _0x1ae47f < _0x5aa6ed.ShowDetail.length; ++_0x1ae47f) {
                  var _0x582040;
                  if (_0x582040 = _0x352a1c.cbtProto.Detail.verify(_0x5aa6ed.ShowDetail[_0x1ae47f])) {
                    return "ShowDetail." + _0x582040;
                  }
                }
              }
              return null != _0x5aa6ed.Plus && _0x5aa6ed.hasOwnProperty("Plus") && !_0x1b3bd2.isInteger(_0x5aa6ed.Plus) ? "Plus: integer expected" : null != _0x5aa6ed.Light && _0x5aa6ed.hasOwnProperty("Light") && !_0x1b3bd2.isInteger(_0x5aa6ed.Light) ? "Light: integer expected" : null != _0x5aa6ed.Line && _0x5aa6ed.hasOwnProperty("Line") && !_0x1b3bd2.isInteger(_0x5aa6ed.Line) ? "Line: integer expected" : null != _0x5aa6ed.FreeRemainRound && _0x5aa6ed.hasOwnProperty("FreeRemainRound") && !_0x1b3bd2.isInteger(_0x5aa6ed.FreeRemainRound) ? "FreeRemainRound: integer expected" : null != _0x5aa6ed.FreeTotalRound && _0x5aa6ed.hasOwnProperty("FreeTotalRound") && !_0x1b3bd2.isInteger(_0x5aa6ed.FreeTotalRound) ? "FreeTotalRound: integer expected" : null;
            };
            _0x30ec7a.fromObject = function (_0x1a54ec) {
              if (_0x1a54ec instanceof _0x352a1c.cbtProto.SinglePlate) {
                return _0x1a54ec;
              }
              var _0x350f38 = new _0x352a1c.cbtProto.SinglePlate();
              if (_0x1a54ec.PlateSymbol) {
                if (!Array.isArray(_0x1a54ec.PlateSymbol)) {
                  throw TypeError(".cbtProto.SinglePlate.PlateSymbol: array expected");
                }
                _0x350f38.PlateSymbol = [];
                for (var _0x185c0e = 0x0; _0x185c0e < _0x1a54ec.PlateSymbol.length; ++_0x185c0e) {
                  if ('object' != typeof _0x1a54ec.PlateSymbol[_0x185c0e]) {
                    throw TypeError(".cbtProto.SinglePlate.PlateSymbol: object expected");
                  }
                  _0x350f38.PlateSymbol[_0x185c0e] = _0x352a1c.cbtProto.Column.fromObject(_0x1a54ec.PlateSymbol[_0x185c0e]);
                }
              }
              if (null != _0x1a54ec.AwardTypeFlag) {
                _0x350f38.AwardTypeFlag = 0x0 | _0x1a54ec.AwardTypeFlag;
              }
              if (null != _0x1a54ec.PlateWin) {
                _0x350f38.PlateWin = Number(_0x1a54ec.PlateWin);
              }
              if (null != _0x1a54ec.LineWin) {
                _0x350f38.LineWin = Number(_0x1a54ec.LineWin);
              }
              if (null != _0x1a54ec.SymbolWin) {
                _0x350f38.SymbolWin = Number(_0x1a54ec.SymbolWin);
              }
              if (null != _0x1a54ec.PoolWin) {
                _0x350f38.PoolWin = Number(_0x1a54ec.PoolWin);
              }
              if (_0x1a54ec.PoolDetail) {
                if (!Array.isArray(_0x1a54ec.PoolDetail)) {
                  throw TypeError(".cbtProto.SinglePlate.PoolDetail: array expected");
                }
                _0x350f38.PoolDetail = [];
                for (_0x185c0e = 0x0; _0x185c0e < _0x1a54ec.PoolDetail.length; ++_0x185c0e) {
                  if ('object' != typeof _0x1a54ec.PoolDetail[_0x185c0e]) {
                    throw TypeError(".cbtProto.SinglePlate.PoolDetail: object expected");
                  }
                  _0x350f38.PoolDetail[_0x185c0e] = _0x352a1c.cbtProto.Detail.fromObject(_0x1a54ec.PoolDetail[_0x185c0e]);
                }
              }
              if (null != _0x1a54ec.Mult) {
                _0x350f38.Mult = Number(_0x1a54ec.Mult);
              }
              if (_0x1a54ec.Pool) {
                if (!Array.isArray(_0x1a54ec.Pool)) {
                  throw TypeError(".cbtProto.SinglePlate.Pool: array expected");
                }
                _0x350f38.Pool = [];
                for (_0x185c0e = 0x0; _0x185c0e < _0x1a54ec.Pool.length; ++_0x185c0e) {
                  _0x350f38.Pool[_0x185c0e] = Number(_0x1a54ec.Pool[_0x185c0e]);
                }
              }
              if (_0x1a54ec.ShowDetail) {
                if (!Array.isArray(_0x1a54ec.ShowDetail)) {
                  throw TypeError(".cbtProto.SinglePlate.ShowDetail: array expected");
                }
                _0x350f38.ShowDetail = [];
                for (_0x185c0e = 0x0; _0x185c0e < _0x1a54ec.ShowDetail.length; ++_0x185c0e) {
                  if ("object" != typeof _0x1a54ec.ShowDetail[_0x185c0e]) {
                    throw TypeError(".cbtProto.SinglePlate.ShowDetail: object expected");
                  }
                  _0x350f38.ShowDetail[_0x185c0e] = _0x352a1c.cbtProto.Detail.fromObject(_0x1a54ec.ShowDetail[_0x185c0e]);
                }
              }
              if (null != _0x1a54ec.Plus) {
                _0x350f38.Plus = 0x0 | _0x1a54ec.Plus;
              }
              if (null != _0x1a54ec.Light) {
                _0x350f38.Light = 0x0 | _0x1a54ec.Light;
              }
              if (null != _0x1a54ec.Line) {
                _0x350f38.Line = 0x0 | _0x1a54ec.Line;
              }
              if (null != _0x1a54ec.FreeRemainRound) {
                _0x350f38.FreeRemainRound = 0x0 | _0x1a54ec.FreeRemainRound;
              }
              if (null != _0x1a54ec.FreeTotalRound) {
                _0x350f38.FreeTotalRound = 0x0 | _0x1a54ec.FreeTotalRound;
              }
              return _0x350f38;
            };
            _0x30ec7a.toObject = function (_0x296365, _0x439e1c) {
              if (!_0x439e1c) {
                _0x439e1c = {};
              }
              var _0xd5c8c8 = {};
              if (_0x439e1c.arrays || _0x439e1c.defaults) {
                _0xd5c8c8.PlateSymbol = [];
                _0xd5c8c8.PoolDetail = [];
                _0xd5c8c8.Pool = [];
                _0xd5c8c8.ShowDetail = [];
              }
              if (_0x439e1c.defaults) {
                _0xd5c8c8.AwardTypeFlag = 0x0;
                _0xd5c8c8.PlateWin = 0x0;
                _0xd5c8c8.LineWin = 0x0;
                _0xd5c8c8.SymbolWin = 0x0;
                _0xd5c8c8.PoolWin = 0x0;
                _0xd5c8c8.Mult = 0x0;
                _0xd5c8c8.Plus = 0x0;
                _0xd5c8c8.Light = 0x0;
                _0xd5c8c8.Line = 0x0;
                _0xd5c8c8.FreeRemainRound = 0x0;
                _0xd5c8c8.FreeTotalRound = 0x0;
              }
              if (_0x296365.PlateSymbol && _0x296365.PlateSymbol.length) {
                _0xd5c8c8.PlateSymbol = [];
                for (var _0x31350b = 0x0; _0x31350b < _0x296365.PlateSymbol.length; ++_0x31350b) {
                  _0xd5c8c8.PlateSymbol[_0x31350b] = _0x352a1c.cbtProto.Column.toObject(_0x296365.PlateSymbol[_0x31350b], _0x439e1c);
                }
              }
              if (null != _0x296365.AwardTypeFlag && _0x296365.hasOwnProperty("AwardTypeFlag")) {
                _0xd5c8c8.AwardTypeFlag = _0x296365.AwardTypeFlag;
              }
              if (null != _0x296365.PlateWin && _0x296365.hasOwnProperty('PlateWin')) {
                _0xd5c8c8.PlateWin = _0x439e1c.json && !isFinite(_0x296365.PlateWin) ? String(_0x296365.PlateWin) : _0x296365.PlateWin;
              }
              if (null != _0x296365.LineWin && _0x296365.hasOwnProperty('LineWin')) {
                _0xd5c8c8.LineWin = _0x439e1c.json && !isFinite(_0x296365.LineWin) ? String(_0x296365.LineWin) : _0x296365.LineWin;
              }
              if (null != _0x296365.SymbolWin && _0x296365.hasOwnProperty("SymbolWin")) {
                _0xd5c8c8.SymbolWin = _0x439e1c.json && !isFinite(_0x296365.SymbolWin) ? String(_0x296365.SymbolWin) : _0x296365.SymbolWin;
              }
              if (null != _0x296365.PoolWin && _0x296365.hasOwnProperty("PoolWin")) {
                _0xd5c8c8.PoolWin = _0x439e1c.json && !isFinite(_0x296365.PoolWin) ? String(_0x296365.PoolWin) : _0x296365.PoolWin;
              }
              if (_0x296365.PoolDetail && _0x296365.PoolDetail.length) {
                _0xd5c8c8.PoolDetail = [];
                for (_0x31350b = 0x0; _0x31350b < _0x296365.PoolDetail.length; ++_0x31350b) {
                  _0xd5c8c8.PoolDetail[_0x31350b] = _0x352a1c.cbtProto.Detail.toObject(_0x296365.PoolDetail[_0x31350b], _0x439e1c);
                }
              }
              if (null != _0x296365.Mult && _0x296365.hasOwnProperty('Mult')) {
                _0xd5c8c8.Mult = _0x439e1c.json && !isFinite(_0x296365.Mult) ? String(_0x296365.Mult) : _0x296365.Mult;
              }
              if (_0x296365.Pool && _0x296365.Pool.length) {
                _0xd5c8c8.Pool = [];
                for (_0x31350b = 0x0; _0x31350b < _0x296365.Pool.length; ++_0x31350b) {
                  _0xd5c8c8.Pool[_0x31350b] = _0x439e1c.json && !isFinite(_0x296365.Pool[_0x31350b]) ? String(_0x296365.Pool[_0x31350b]) : _0x296365.Pool[_0x31350b];
                }
              }
              if (_0x296365.ShowDetail && _0x296365.ShowDetail.length) {
                _0xd5c8c8.ShowDetail = [];
                for (_0x31350b = 0x0; _0x31350b < _0x296365.ShowDetail.length; ++_0x31350b) {
                  _0xd5c8c8.ShowDetail[_0x31350b] = _0x352a1c.cbtProto.Detail.toObject(_0x296365.ShowDetail[_0x31350b], _0x439e1c);
                }
              }
              if (null != _0x296365.Plus && _0x296365.hasOwnProperty("Plus")) {
                _0xd5c8c8.Plus = _0x296365.Plus;
              }
              if (null != _0x296365.Light && _0x296365.hasOwnProperty("Light")) {
                _0xd5c8c8.Light = _0x296365.Light;
              }
              if (null != _0x296365.Line && _0x296365.hasOwnProperty("Line")) {
                _0xd5c8c8.Line = _0x296365.Line;
              }
              if (null != _0x296365.FreeRemainRound && _0x296365.hasOwnProperty("FreeRemainRound")) {
                _0xd5c8c8.FreeRemainRound = _0x296365.FreeRemainRound;
              }
              if (null != _0x296365.FreeTotalRound && _0x296365.hasOwnProperty("FreeTotalRound")) {
                _0xd5c8c8.FreeTotalRound = _0x296365.FreeTotalRound;
              }
              return _0xd5c8c8;
            };
            _0x30ec7a.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5e1f4d.util.toJSONOptions);
            };
            _0x30ec7a.getTypeUrl = function (_0x5b317c) {
              if (undefined === _0x5b317c) {
                _0x5b317c = 'type.googleapis.com';
              }
              return _0x5b317c + "/cbtProto.SinglePlate";
            };
            return _0x30ec7a;
          }(),
          "SpinAck": function () {
            function _0x322168(_0x3b6bf4) {
              this.AckQueue = [];
              if (_0x3b6bf4) {
                var _0x52f81d = Object.keys(_0x3b6bf4);
                for (var _0x5e5544 = 0x0; _0x5e5544 < _0x52f81d.length; ++_0x5e5544) {
                  if (null != _0x3b6bf4[_0x52f81d[_0x5e5544]]) {
                    this[_0x52f81d[_0x5e5544]] = _0x3b6bf4[_0x52f81d[_0x5e5544]];
                  }
                }
              }
            }
            _0x322168.prototype.AckQueue = _0x1b3bd2.emptyArray;
            _0x322168.prototype.BonusTotalWin = 0x0;
            _0x322168.prototype.TotalWin = 0x0;
            _0x322168.prototype.ShowIndex = '';
            _0x322168.prototype.NowMoney = 0x0;
            _0x322168.prototype.AckType = 0x0;
            _0x322168.prototype.RTP = 0x0;
            _0x322168.prototype.LID = 0x0;
            _0x322168.prototype.RID = 0x0;
            _0x322168.create = function (_0x3692d5) {
              return new _0x322168(_0x3692d5);
            };
            _0x322168.encode = function (_0x56e809, _0x37ae2c) {
              if (!_0x37ae2c) {
                _0x37ae2c = _0x567625.create();
              }
              if (null != _0x56e809.AckQueue && _0x56e809.AckQueue.length) {
                for (var _0x14cd41 = 0x0; _0x14cd41 < _0x56e809.AckQueue.length; ++_0x14cd41) {
                  _0x352a1c.cbtProto.SinglePlate.encode(_0x56e809.AckQueue[_0x14cd41], _0x37ae2c.uint32(0xa).fork()).ldelim();
                }
              }
              if (null != _0x56e809.BonusTotalWin && Object.hasOwnProperty.call(_0x56e809, 'BonusTotalWin')) {
                _0x37ae2c.uint32(0x11).double(_0x56e809.BonusTotalWin);
              }
              if (null != _0x56e809.TotalWin && Object.hasOwnProperty.call(_0x56e809, 'TotalWin')) {
                _0x37ae2c.uint32(0x19).double(_0x56e809.TotalWin);
              }
              if (null != _0x56e809.ShowIndex && Object.hasOwnProperty.call(_0x56e809, 'ShowIndex')) {
                _0x37ae2c.uint32(0x22).string(_0x56e809.ShowIndex);
              }
              if (null != _0x56e809.NowMoney && Object.hasOwnProperty.call(_0x56e809, "NowMoney")) {
                _0x37ae2c.uint32(0x29).double(_0x56e809.NowMoney);
              }
              if (null != _0x56e809.AckType && Object.hasOwnProperty.call(_0x56e809, 'AckType')) {
                _0x37ae2c.uint32(0x30).int32(_0x56e809.AckType);
              }
              if (null != _0x56e809.RTP && Object.hasOwnProperty.call(_0x56e809, "RTP")) {
                _0x37ae2c.uint32(0x61).double(_0x56e809.RTP);
              }
              if (null != _0x56e809.LID && Object.hasOwnProperty.call(_0x56e809, "LID")) {
                _0x37ae2c.uint32(0x68).int32(_0x56e809.LID);
              }
              if (null != _0x56e809.RID && Object.hasOwnProperty.call(_0x56e809, 'RID')) {
                _0x37ae2c.uint32(0x70).int32(_0x56e809.RID);
              }
              return _0x37ae2c;
            };
            _0x322168.encodeDelimited = function (_0x1a354e, _0x5b1637) {
              return this.encode(_0x1a354e, _0x5b1637).ldelim();
            };
            _0x322168.decode = function (_0x5914b2, _0x15500d) {
              if (!(_0x5914b2 instanceof _0x19de43)) {
                _0x5914b2 = _0x19de43.create(_0x5914b2);
              }
              var _0x1db4d0 = undefined === _0x15500d ? _0x5914b2.len : _0x5914b2.pos + _0x15500d;
              for (var _0x550e31 = new _0x352a1c.cbtProto.SpinAck(); _0x5914b2.pos < _0x1db4d0;) {
                var _0xad5372 = _0x5914b2.uint32();
                switch (_0xad5372 >>> 0x3) {
                  case 0x1:
                    if (!(_0x550e31.AckQueue && _0x550e31.AckQueue.length)) {
                      _0x550e31.AckQueue = [];
                    }
                    _0x550e31.AckQueue.push(_0x352a1c.cbtProto.SinglePlate.decode(_0x5914b2, _0x5914b2.uint32()));
                    break;
                  case 0x2:
                    _0x550e31.BonusTotalWin = _0x5914b2.double();
                    break;
                  case 0x3:
                    _0x550e31.TotalWin = _0x5914b2.double();
                    break;
                  case 0x4:
                    _0x550e31.ShowIndex = _0x5914b2.string();
                    break;
                  case 0x5:
                    _0x550e31.NowMoney = _0x5914b2.double();
                    break;
                  case 0x6:
                    _0x550e31.AckType = _0x5914b2.int32();
                    break;
                  case 0xc:
                    _0x550e31.RTP = _0x5914b2.double();
                    break;
                  case 0xd:
                    _0x550e31.LID = _0x5914b2.int32();
                    break;
                  case 0xe:
                    _0x550e31.RID = _0x5914b2.int32();
                    break;
                  default:
                    _0x5914b2.skipType(0x7 & _0xad5372);
                }
              }
              return _0x550e31;
            };
            _0x322168.decodeDelimited = function (_0x1efab3) {
              if (!(_0x1efab3 instanceof _0x19de43)) {
                _0x1efab3 = new _0x19de43(_0x1efab3);
              }
              return this.decode(_0x1efab3, _0x1efab3.uint32());
            };
            _0x322168.verify = function (_0xe0dff3) {
              if ("object" != typeof _0xe0dff3 || null === _0xe0dff3) {
                return "object expected";
              }
              if (null != _0xe0dff3.AckQueue && _0xe0dff3.hasOwnProperty("AckQueue")) {
                if (!Array.isArray(_0xe0dff3.AckQueue)) {
                  return "AckQueue: array expected";
                }
                for (var _0x142bc5 = 0x0; _0x142bc5 < _0xe0dff3.AckQueue.length; ++_0x142bc5) {
                  var _0x1c0dbb = _0x352a1c.cbtProto.SinglePlate.verify(_0xe0dff3.AckQueue[_0x142bc5]);
                  if (_0x1c0dbb) {
                    return 'AckQueue.' + _0x1c0dbb;
                  }
                }
              }
              return null != _0xe0dff3.BonusTotalWin && _0xe0dff3.hasOwnProperty("BonusTotalWin") && "number" != typeof _0xe0dff3.BonusTotalWin ? "BonusTotalWin: number expected" : null != _0xe0dff3.TotalWin && _0xe0dff3.hasOwnProperty("TotalWin") && "number" != typeof _0xe0dff3.TotalWin ? "TotalWin: number expected" : null != _0xe0dff3.ShowIndex && _0xe0dff3.hasOwnProperty('ShowIndex') && !_0x1b3bd2.isString(_0xe0dff3.ShowIndex) ? "ShowIndex: string expected" : null != _0xe0dff3.NowMoney && _0xe0dff3.hasOwnProperty("NowMoney") && 'number' != typeof _0xe0dff3.NowMoney ? "NowMoney: number expected" : null != _0xe0dff3.AckType && _0xe0dff3.hasOwnProperty("AckType") && !_0x1b3bd2.isInteger(_0xe0dff3.AckType) ? "AckType: integer expected" : null != _0xe0dff3.RTP && _0xe0dff3.hasOwnProperty('RTP') && "number" != typeof _0xe0dff3.RTP ? "RTP: number expected" : null != _0xe0dff3.LID && _0xe0dff3.hasOwnProperty("LID") && !_0x1b3bd2.isInteger(_0xe0dff3.LID) ? "LID: integer expected" : null != _0xe0dff3.RID && _0xe0dff3.hasOwnProperty("RID") && !_0x1b3bd2.isInteger(_0xe0dff3.RID) ? "RID: integer expected" : null;
            };
            _0x322168.fromObject = function (_0x21ea3d) {
              if (_0x21ea3d instanceof _0x352a1c.cbtProto.SpinAck) {
                return _0x21ea3d;
              }
              var _0x40b89f = new _0x352a1c.cbtProto.SpinAck();
              if (_0x21ea3d.AckQueue) {
                if (!Array.isArray(_0x21ea3d.AckQueue)) {
                  throw TypeError(".cbtProto.SpinAck.AckQueue: array expected");
                }
                _0x40b89f.AckQueue = [];
                for (var _0x1d0bd3 = 0x0; _0x1d0bd3 < _0x21ea3d.AckQueue.length; ++_0x1d0bd3) {
                  if ('object' != typeof _0x21ea3d.AckQueue[_0x1d0bd3]) {
                    throw TypeError(".cbtProto.SpinAck.AckQueue: object expected");
                  }
                  _0x40b89f.AckQueue[_0x1d0bd3] = _0x352a1c.cbtProto.SinglePlate.fromObject(_0x21ea3d.AckQueue[_0x1d0bd3]);
                }
              }
              if (null != _0x21ea3d.BonusTotalWin) {
                _0x40b89f.BonusTotalWin = Number(_0x21ea3d.BonusTotalWin);
              }
              if (null != _0x21ea3d.TotalWin) {
                _0x40b89f.TotalWin = Number(_0x21ea3d.TotalWin);
              }
              if (null != _0x21ea3d.ShowIndex) {
                _0x40b89f.ShowIndex = String(_0x21ea3d.ShowIndex);
              }
              if (null != _0x21ea3d.NowMoney) {
                _0x40b89f.NowMoney = Number(_0x21ea3d.NowMoney);
              }
              if (null != _0x21ea3d.AckType) {
                _0x40b89f.AckType = 0x0 | _0x21ea3d.AckType;
              }
              if (null != _0x21ea3d.RTP) {
                _0x40b89f.RTP = Number(_0x21ea3d.RTP);
              }
              if (null != _0x21ea3d.LID) {
                _0x40b89f.LID = 0x0 | _0x21ea3d.LID;
              }
              if (null != _0x21ea3d.RID) {
                _0x40b89f.RID = 0x0 | _0x21ea3d.RID;
              }
              return _0x40b89f;
            };
            _0x322168.toObject = function (_0x4fa267, _0x5db3b5) {
              if (!_0x5db3b5) {
                _0x5db3b5 = {};
              }
              var _0x311cea = {};
              if (_0x5db3b5.arrays || _0x5db3b5.defaults) {
                _0x311cea.AckQueue = [];
              }
              if (_0x5db3b5.defaults) {
                _0x311cea.BonusTotalWin = 0x0;
                _0x311cea.TotalWin = 0x0;
                _0x311cea.ShowIndex = '';
                _0x311cea.NowMoney = 0x0;
                _0x311cea.AckType = 0x0;
                _0x311cea.RTP = 0x0;
                _0x311cea.LID = 0x0;
                _0x311cea.RID = 0x0;
              }
              if (_0x4fa267.AckQueue && _0x4fa267.AckQueue.length) {
                _0x311cea.AckQueue = [];
                for (var _0x53be3d = 0x0; _0x53be3d < _0x4fa267.AckQueue.length; ++_0x53be3d) {
                  _0x311cea.AckQueue[_0x53be3d] = _0x352a1c.cbtProto.SinglePlate.toObject(_0x4fa267.AckQueue[_0x53be3d], _0x5db3b5);
                }
              }
              if (null != _0x4fa267.BonusTotalWin && _0x4fa267.hasOwnProperty("BonusTotalWin")) {
                _0x311cea.BonusTotalWin = _0x5db3b5.json && !isFinite(_0x4fa267.BonusTotalWin) ? String(_0x4fa267.BonusTotalWin) : _0x4fa267.BonusTotalWin;
              }
              if (null != _0x4fa267.TotalWin && _0x4fa267.hasOwnProperty('TotalWin')) {
                _0x311cea.TotalWin = _0x5db3b5.json && !isFinite(_0x4fa267.TotalWin) ? String(_0x4fa267.TotalWin) : _0x4fa267.TotalWin;
              }
              if (null != _0x4fa267.ShowIndex && _0x4fa267.hasOwnProperty('ShowIndex')) {
                _0x311cea.ShowIndex = _0x4fa267.ShowIndex;
              }
              if (null != _0x4fa267.NowMoney && _0x4fa267.hasOwnProperty("NowMoney")) {
                _0x311cea.NowMoney = _0x5db3b5.json && !isFinite(_0x4fa267.NowMoney) ? String(_0x4fa267.NowMoney) : _0x4fa267.NowMoney;
              }
              if (null != _0x4fa267.AckType && _0x4fa267.hasOwnProperty('AckType')) {
                _0x311cea.AckType = _0x4fa267.AckType;
              }
              if (null != _0x4fa267.RTP && _0x4fa267.hasOwnProperty("RTP")) {
                _0x311cea.RTP = _0x5db3b5.json && !isFinite(_0x4fa267.RTP) ? String(_0x4fa267.RTP) : _0x4fa267.RTP;
              }
              if (null != _0x4fa267.LID && _0x4fa267.hasOwnProperty('LID')) {
                _0x311cea.LID = _0x4fa267.LID;
              }
              if (null != _0x4fa267.RID && _0x4fa267.hasOwnProperty("RID")) {
                _0x311cea.RID = _0x4fa267.RID;
              }
              return _0x311cea;
            };
            _0x322168.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5e1f4d.util.toJSONOptions);
            };
            _0x322168.getTypeUrl = function (_0x2d5e72) {
              if (undefined === _0x2d5e72) {
                _0x2d5e72 = "type.googleapis.com";
              }
              return _0x2d5e72 + "/cbtProto.SpinAck";
            };
            return _0x322168;
          }(),
          "GameInfoAck": function () {
            function _0x4f7c00(_0x22065b) {
              this.OddList = [];
              if (_0x22065b) {
                var _0x4a9dd2 = Object.keys(_0x22065b);
                for (var _0x42a9f0 = 0x0; _0x42a9f0 < _0x4a9dd2.length; ++_0x42a9f0) {
                  if (null != _0x22065b[_0x4a9dd2[_0x42a9f0]]) {
                    this[_0x4a9dd2[_0x42a9f0]] = _0x22065b[_0x4a9dd2[_0x42a9f0]];
                  }
                }
              }
            }
            _0x4f7c00.prototype.OddList = _0x1b3bd2.emptyArray;
            _0x4f7c00.create = function (_0x78ea7d) {
              return new _0x4f7c00(_0x78ea7d);
            };
            _0x4f7c00.encode = function (_0x1ad706, _0x36bc04) {
              if (!_0x36bc04) {
                _0x36bc04 = _0x567625.create();
              }
              if (null != _0x1ad706.OddList && _0x1ad706.OddList.length) {
                _0x36bc04.uint32(0xa).fork();
                for (var _0x221716 = 0x0; _0x221716 < _0x1ad706.OddList.length; ++_0x221716) {
                  _0x36bc04.double(_0x1ad706.OddList[_0x221716]);
                }
                _0x36bc04.ldelim();
              }
              return _0x36bc04;
            };
            _0x4f7c00.encodeDelimited = function (_0x2e953d, _0x1e77de) {
              return this.encode(_0x2e953d, _0x1e77de).ldelim();
            };
            _0x4f7c00.decode = function (_0x21c451, _0x3c0de7) {
              if (!(_0x21c451 instanceof _0x19de43)) {
                _0x21c451 = _0x19de43.create(_0x21c451);
              }
              var _0x2f3e12 = undefined === _0x3c0de7 ? _0x21c451.len : _0x21c451.pos + _0x3c0de7;
              for (var _0x16c4ba = new _0x352a1c.cbtProto.GameInfoAck(); _0x21c451.pos < _0x2f3e12;) {
                var _0x8c7e13 = _0x21c451.uint32();
                switch (_0x8c7e13 >>> 0x3) {
                  case 0x1:
                    if (!(_0x16c4ba.OddList && _0x16c4ba.OddList.length)) {
                      _0x16c4ba.OddList = [];
                    }
                    if (0x2 == (0x7 & _0x8c7e13)) {
                      for (var _0xb70fbc = _0x21c451.uint32() + _0x21c451.pos; _0x21c451.pos < _0xb70fbc;) {
                        _0x16c4ba.OddList.push(_0x21c451.double());
                      }
                    } else {
                      _0x16c4ba.OddList.push(_0x21c451.double());
                    }
                    break;
                  default:
                    _0x21c451.skipType(0x7 & _0x8c7e13);
                }
              }
              return _0x16c4ba;
            };
            _0x4f7c00.decodeDelimited = function (_0x3ca429) {
              if (!(_0x3ca429 instanceof _0x19de43)) {
                _0x3ca429 = new _0x19de43(_0x3ca429);
              }
              return this.decode(_0x3ca429, _0x3ca429.uint32());
            };
            _0x4f7c00.verify = function (_0x23f88a) {
              if ('object' != typeof _0x23f88a || null === _0x23f88a) {
                return "object expected";
              }
              if (null != _0x23f88a.OddList && _0x23f88a.hasOwnProperty("OddList")) {
                if (!Array.isArray(_0x23f88a.OddList)) {
                  return "OddList: array expected";
                }
                for (var _0x47f2f2 = 0x0; _0x47f2f2 < _0x23f88a.OddList.length; ++_0x47f2f2) {
                  if ('number' != typeof _0x23f88a.OddList[_0x47f2f2]) {
                    return "OddList: number[] expected";
                  }
                }
              }
              return null;
            };
            _0x4f7c00.fromObject = function (_0x4a7303) {
              if (_0x4a7303 instanceof _0x352a1c.cbtProto.GameInfoAck) {
                return _0x4a7303;
              }
              var _0x453000 = new _0x352a1c.cbtProto.GameInfoAck();
              if (_0x4a7303.OddList) {
                if (!Array.isArray(_0x4a7303.OddList)) {
                  throw TypeError(".cbtProto.GameInfoAck.OddList: array expected");
                }
                _0x453000.OddList = [];
                for (var _0x1bd26c = 0x0; _0x1bd26c < _0x4a7303.OddList.length; ++_0x1bd26c) {
                  _0x453000.OddList[_0x1bd26c] = Number(_0x4a7303.OddList[_0x1bd26c]);
                }
              }
              return _0x453000;
            };
            _0x4f7c00.toObject = function (_0x317ace, _0x4d7059) {
              if (!_0x4d7059) {
                _0x4d7059 = {};
              }
              var _0x55003a = {};
              if (_0x4d7059.arrays || _0x4d7059.defaults) {
                _0x55003a.OddList = [];
              }
              if (_0x317ace.OddList && _0x317ace.OddList.length) {
                _0x55003a.OddList = [];
                for (var _0x2a43fd = 0x0; _0x2a43fd < _0x317ace.OddList.length; ++_0x2a43fd) {
                  _0x55003a.OddList[_0x2a43fd] = _0x4d7059.json && !isFinite(_0x317ace.OddList[_0x2a43fd]) ? String(_0x317ace.OddList[_0x2a43fd]) : _0x317ace.OddList[_0x2a43fd];
                }
              }
              return _0x55003a;
            };
            _0x4f7c00.prototype.toJSON = function () {
              return this.constructor.toObject(this, _0x5e1f4d.util.toJSONOptions);
            };
            _0x4f7c00.getTypeUrl = function (_0x4be42f) {
              if (undefined === _0x4be42f) {
                _0x4be42f = "type.googleapis.com";
              }
              return _0x4be42f + '/cbtProto.GameInfoAck';
            };
            return _0x4f7c00;
          }()
        }).Column = function () {
          function _0x51edc5(_0x1d9fcf) {
            this.Col = [];
            if (_0x1d9fcf) {
              var _0x2a4e0d = Object.keys(_0x1d9fcf);
              for (var _0x2ccb9f = 0x0; _0x2ccb9f < _0x2a4e0d.length; ++_0x2ccb9f) {
                if (null != _0x1d9fcf[_0x2a4e0d[_0x2ccb9f]]) {
                  this[_0x2a4e0d[_0x2ccb9f]] = _0x1d9fcf[_0x2a4e0d[_0x2ccb9f]];
                }
              }
            }
          }
          _0x51edc5.prototype.Col = _0x1b3bd2.emptyArray;
          _0x51edc5.create = function (_0xe3b53d) {
            return new _0x51edc5(_0xe3b53d);
          };
          _0x51edc5.encode = function (_0x4f462c, _0x3b07db) {
            if (!_0x3b07db) {
              _0x3b07db = _0x567625.create();
            }
            if (null != _0x4f462c.Col && _0x4f462c.Col.length) {
              _0x3b07db.uint32(0xa).fork();
              for (var _0x1609a6 = 0x0; _0x1609a6 < _0x4f462c.Col.length; ++_0x1609a6) {
                _0x3b07db.int32(_0x4f462c.Col[_0x1609a6]);
              }
              _0x3b07db.ldelim();
            }
            return _0x3b07db;
          };
          _0x51edc5.encodeDelimited = function (_0x54e433, _0x3b2f25) {
            return this.encode(_0x54e433, _0x3b2f25).ldelim();
          };
          _0x51edc5.decode = function (_0x11b7ce, _0x31444a) {
            if (!(_0x11b7ce instanceof _0x19de43)) {
              _0x11b7ce = _0x19de43.create(_0x11b7ce);
            }
            var _0x1e01b7 = undefined === _0x31444a ? _0x11b7ce.len : _0x11b7ce.pos + _0x31444a;
            for (var _0x2b3ae5 = new _0x352a1c.cbtProto.Column(); _0x11b7ce.pos < _0x1e01b7;) {
              var _0x3924cb = _0x11b7ce.uint32();
              switch (_0x3924cb >>> 0x3) {
                case 0x1:
                  if (!(_0x2b3ae5.Col && _0x2b3ae5.Col.length)) {
                    _0x2b3ae5.Col = [];
                  }
                  if (0x2 == (0x7 & _0x3924cb)) {
                    for (var _0x3c95b4 = _0x11b7ce.uint32() + _0x11b7ce.pos; _0x11b7ce.pos < _0x3c95b4;) {
                      _0x2b3ae5.Col.push(_0x11b7ce.int32());
                    }
                  } else {
                    _0x2b3ae5.Col.push(_0x11b7ce.int32());
                  }
                  break;
                default:
                  _0x11b7ce.skipType(0x7 & _0x3924cb);
              }
            }
            return _0x2b3ae5;
          };
          _0x51edc5.decodeDelimited = function (_0x368f7d) {
            if (!(_0x368f7d instanceof _0x19de43)) {
              _0x368f7d = new _0x19de43(_0x368f7d);
            }
            return this.decode(_0x368f7d, _0x368f7d.uint32());
          };
          _0x51edc5.verify = function (_0x4097f6) {
            if ("object" != typeof _0x4097f6 || null === _0x4097f6) {
              return "object expected";
            }
            if (null != _0x4097f6.Col && _0x4097f6.hasOwnProperty("Col")) {
              if (!Array.isArray(_0x4097f6.Col)) {
                return "Col: array expected";
              }
              for (var _0x46f705 = 0x0; _0x46f705 < _0x4097f6.Col.length; ++_0x46f705) {
                if (!_0x1b3bd2.isInteger(_0x4097f6.Col[_0x46f705])) {
                  return "Col: integer[] expected";
                }
              }
            }
            return null;
          };
          _0x51edc5.fromObject = function (_0x58dfe0) {
            if (_0x58dfe0 instanceof _0x352a1c.cbtProto.Column) {
              return _0x58dfe0;
            }
            var _0x5d2a64 = new _0x352a1c.cbtProto.Column();
            if (_0x58dfe0.Col) {
              if (!Array.isArray(_0x58dfe0.Col)) {
                throw TypeError(".cbtProto.Column.Col: array expected");
              }
              _0x5d2a64.Col = [];
              for (var _0x533e5b = 0x0; _0x533e5b < _0x58dfe0.Col.length; ++_0x533e5b) {
                _0x5d2a64.Col[_0x533e5b] = 0x0 | _0x58dfe0.Col[_0x533e5b];
              }
            }
            return _0x5d2a64;
          };
          _0x51edc5.toObject = function (_0x291631, _0xdd12f6) {
            if (!_0xdd12f6) {
              _0xdd12f6 = {};
            }
            var _0xb331ed = {};
            if (_0xdd12f6.arrays || _0xdd12f6.defaults) {
              _0xb331ed.Col = [];
            }
            if (_0x291631.Col && _0x291631.Col.length) {
              _0xb331ed.Col = [];
              for (var _0x5951c2 = 0x0; _0x5951c2 < _0x291631.Col.length; ++_0x5951c2) {
                _0xb331ed.Col[_0x5951c2] = _0x291631.Col[_0x5951c2];
              }
            }
            return _0xb331ed;
          };
          _0x51edc5.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x5e1f4d.util.toJSONOptions);
          };
          _0x51edc5.getTypeUrl = function (_0x37b7d5) {
            if (undefined === _0x37b7d5) {
              _0x37b7d5 = 'type.googleapis.com';
            }
            return _0x37b7d5 + "/cbtProto.Column";
          };
          return _0x51edc5;
        }();
        _0x352a1c.cbtProto = _0x4bb954;
        _0x3b2e15.exports = _0x352a1c;
        _0x475837 = _0x3b2e15.exports;
      }, function () {
        return {
          'protobufjs/minimal': "file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/node_modules/protobufjs/minimal.js"
        };
      });
      _0x55cf1e.require("file:///Users/OLD_RD2/Desktop/H5/Client/workspace/CrazyBounty/Client/Thai_UAT/assets/game/Script/Proto/cbtProto.js");
      _0x22a6e5._RF.push({}, 'c1ea7Pii+dAi78piqmmzKpD', "GameView", undefined);
      _0x22a6e5._RF.pop();
    }
  };
});
(function (_0x85f3fc) {
  _0x85f3fc("virtual:///prerequisite-imports/game", "chunks:///game.js");
})(function (_0x4d110b, _0x20fe0f) {
  System.register(_0x4d110b, [_0x20fe0f], function (_0x52a830, _0x50a722) {
    return {
      'setters': [function (_0x3f6088) {
        var _0x4f71c0 = {};
        for (var _0x4ebb4b in _0x3f6088) {
          if (_0x4ebb4b !== "default" && _0x4ebb4b !== "__esModule") {
            _0x4f71c0[_0x4ebb4b] = _0x3f6088[_0x4ebb4b];
          }
        }
        _0x52a830(_0x4f71c0);
      }],
      'execute': function () {}
    };
  });
});